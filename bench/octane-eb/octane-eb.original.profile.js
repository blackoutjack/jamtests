
JAM.startProfile('load');
// base.js

// Copyright 2013 the V8 project authors. All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
//       copyright notice, this list of conditions and the following
//       disclaimer in the documentation and/or other materials provided
//       with the distribution.
//     * Neither the name of Google Inc. nor the names of its
//       contributors may be used to endorse or promote products derived
//       from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


// Performance.now is used in latency benchmarks, the fallback is Date.now.
var performance = performance || {};
performance.now = (function() {
  return performance.now       ||
         performance.mozNow    ||
         performance.msNow     ||
         performance.oNow      ||
         performance.webkitNow ||
         Date.now;
})();

// Simple framework for running the benchmark suites and
// computing a score based on the timing measurements.


// A benchmark has a name (string) and a function that will be run to
// do the performance measurement. The optional setup and tearDown
// arguments are functions that will be invoked before and after
// running the benchmark, but the running time of these functions will
// not be accounted for in the benchmark score.
function Benchmark(name, doWarmup, doDeterministic, deterministicIterations, 
                   run, setup, tearDown, rmsResult, minIterations) {
  this.name = name;
  this.doWarmup = doWarmup;
  this.doDeterministic = doDeterministic;
  this.deterministicIterations = deterministicIterations;
  this.run = run;
  this.Setup = setup ? setup : function() { };
  this.TearDown = tearDown ? tearDown : function() { };
  this.rmsResult = rmsResult ? rmsResult : null; 
  this.minIterations = minIterations ? minIterations : 32;
}


// Benchmark results hold the benchmark and the measured time used to
// run the benchmark. The benchmark score is computed later once a
// full benchmark suite has run to completion. If latency is set to 0
// then there is no latency score for this benchmark.
function BenchmarkResult(benchmark, time, latency) {
  this.benchmark = benchmark;
  this.time = time;
  this.latency = latency;
}


// Automatically convert results to numbers. Used by the geometric
// mean computation.
BenchmarkResult.prototype.valueOf = function() {
  return this.time;
}


// Suites of benchmarks consist of a name and the set of benchmarks in
// addition to the reference timing that the final score will be based
// on. This way, all scores are relative to a reference run and higher
// scores implies better performance.
function BenchmarkSuite(name, reference, benchmarks) {
  this.name = name;
  this.reference = reference;
  this.benchmarks = benchmarks;
  BenchmarkSuite.suites.push(this);
}


// Keep track of all declared benchmark suites.
BenchmarkSuite.suites = [];

// Scores are not comparable across versions. Bump the version if
// you're making changes that will affect that scores, e.g. if you add
// a new benchmark or change an existing one.
BenchmarkSuite.version = '9';


// Defines global benchsuite running mode that overrides benchmark suite 
// behavior. Intended to be set by the benchmark driver. Undefined 
// values here allow a benchmark to define behaviour itself.
BenchmarkSuite.config = {
  doWarmup: undefined,
  doDeterministic: undefined
};


// Override the alert function to throw an exception instead.
alert = function(s) {
  throw "Alert called with argument: " + s;
};


// To make the benchmark results predictable, we replace Math.random
// with a 100% deterministic alternative.
BenchmarkSuite.ResetRNG = function() {
  Math.random = (function() {
    var seed = 49734321;
    return function() {
      // Robert Jenkins' 32 bit integer hash function.
      seed = ((seed + 0x7ed55d16) + (seed << 12))  & 0xffffffff;
      seed = ((seed ^ 0xc761c23c) ^ (seed >>> 19)) & 0xffffffff;
      seed = ((seed + 0x165667b1) + (seed << 5))   & 0xffffffff;
      seed = ((seed + 0xd3a2646c) ^ (seed << 9))   & 0xffffffff;
      seed = ((seed + 0xfd7046c5) + (seed << 3))   & 0xffffffff;
      seed = ((seed ^ 0xb55a4f09) ^ (seed >>> 16)) & 0xffffffff;
      return (seed & 0xfffffff) / 0x10000000;
    };
  })();
}


// Runs all registered benchmark suites and optionally yields between
// each individual benchmark to avoid running for too long in the
// context of browsers. Once done, the final score is reported to the
// runner.
BenchmarkSuite.RunSuites = function(runner, skipBenchmarks) {
  skipBenchmarks = typeof skipBenchmarks === 'undefined' ? [] : skipBenchmarks;
  var continuation = null;
  var suites = BenchmarkSuite.suites;
  var length = suites.length;
  BenchmarkSuite.scores = [];
  var index = 0;
  function RunStep() {
    while (continuation || index < length) {
      if (continuation) {
        continuation = continuation();
      } else {
        var suite = suites[index++];
        if (runner.NotifyStart) runner.NotifyStart(suite.name);
        if (skipBenchmarks.indexOf(suite.name) > -1) {
          suite.NotifySkipped(runner);
        } else {
          continuation = suite.RunStep(runner);
        }
      }
      if (continuation && typeof window != 'undefined' && window.setTimeout) {
        window.setTimeout(RunStep, 25);
        return;
      }
    }

    // show final result
    if (runner.NotifyScore) {
      var score = BenchmarkSuite.GeometricMean(BenchmarkSuite.scores);
      var formatted = BenchmarkSuite.FormatScore(100 * score);
      runner.NotifyScore(formatted);
    }
  }
  RunStep();
}


// Counts the total number of registered benchmarks. Useful for
// showing progress as a percentage.
BenchmarkSuite.CountBenchmarks = function() {
  var result = 0;
  var suites = BenchmarkSuite.suites;
  for (var i = 0; i < suites.length; i++) {
    result += suites[i].benchmarks.length;
  }
  return result;
}


// Computes the geometric mean of a set of numbers.
BenchmarkSuite.GeometricMean = function(numbers) {
  var log = 0;
  for (var i = 0; i < numbers.length; i++) {
    log += Math.log(numbers[i]);
  }
  return Math.pow(Math.E, log / numbers.length);
}


// Computes the geometric mean of a set of throughput time measurements.
BenchmarkSuite.GeometricMeanTime = function(measurements) {
  var log = 0;
  for (var i = 0; i < measurements.length; i++) {
    log += Math.log(measurements[i].time);
  }
  return Math.pow(Math.E, log / measurements.length);
}


// Computes the geometric mean of a set of rms measurements.
BenchmarkSuite.GeometricMeanLatency = function(measurements) {
  var log = 0;
  var hasLatencyResult = false;
  for (var i = 0; i < measurements.length; i++) {
    if (measurements[i].latency != 0) {
      log += Math.log(measurements[i].latency);
      hasLatencyResult = true;
    }
  }
  if (hasLatencyResult) {
    return Math.pow(Math.E, log / measurements.length);
  } else {
    return 0;
  }
}


// Converts a score value to a string with at least three significant
// digits.
BenchmarkSuite.FormatScore = function(value) {
  if (value > 100) {
    return value.toFixed(0);
  } else {
    return value.toPrecision(3);
  }
}

// Notifies the runner that we're done running a single benchmark in
// the benchmark suite. This can be useful to report progress.
BenchmarkSuite.prototype.NotifyStep = function(result) {
  this.results.push(result);
  if (this.runner.NotifyStep) this.runner.NotifyStep(result.benchmark.name);
}


// Notifies the runner that we're done with running a suite and that
// we have a result which can be reported to the user if needed.
BenchmarkSuite.prototype.NotifyResult = function() {
  var mean = BenchmarkSuite.GeometricMeanTime(this.results);
  var score = this.reference[0] / mean;
  BenchmarkSuite.scores.push(score);
  if (this.runner.NotifyResult) {
    var formatted = BenchmarkSuite.FormatScore(100 * score);
    this.runner.NotifyResult(this.name, formatted);
  }
  if (this.reference.length == 2) {
    var meanLatency = BenchmarkSuite.GeometricMeanLatency(this.results);
    if (meanLatency != 0) {
      var scoreLatency = this.reference[1] / meanLatency;
      BenchmarkSuite.scores.push(scoreLatency);
      if (this.runner.NotifyResult) {
        var formattedLatency = BenchmarkSuite.FormatScore(100 * scoreLatency)
        this.runner.NotifyResult(this.name + "Latency", formattedLatency);
      }
    }
  }
}


BenchmarkSuite.prototype.NotifySkipped = function(runner) {
  BenchmarkSuite.scores.push(1);  // push default reference score.
  if (runner.NotifyResult) {
    runner.NotifyResult(this.name, "Skipped");
  }
}


// Notifies the runner that running a benchmark resulted in an error.
BenchmarkSuite.prototype.NotifyError = function(error) {
  if (this.runner.NotifyError) {
    this.runner.NotifyError(this.name, error);
  }
  if (this.runner.NotifyStep) {
    this.runner.NotifyStep(this.name);
  }
}


// Runs a single benchmark for at least a second and computes the
// average time it takes to run a single iteration.
BenchmarkSuite.prototype.RunSingleBenchmark = function(benchmark, data) {
  var config = BenchmarkSuite.config;
  var doWarmup = config.doWarmup !== undefined 
                 ? config.doWarmup 
                 : benchmark.doWarmup;
  var doDeterministic = config.doDeterministic !== undefined 
                        ? config.doDeterministic 
                        : benchmark.doDeterministic;

  function Measure(data) {
    var elapsed = 0;
    var start = new Date();
  
  // Run either for 1 second or for the number of iterations specified
  // by minIterations, depending on the config flag doDeterministic.
    for (var i = 0; (doDeterministic ? 
      i<benchmark.deterministicIterations : elapsed < 1000); i++) {
      benchmark.run();
      elapsed = new Date() - start;
    }
    if (data != null) {
      data.runs += i;
      data.elapsed += elapsed;
    }
  }

  // Sets up data in order to skip or not the warmup phase.
  if (!doWarmup && data == null) {
    data = { runs: 0, elapsed: 0 };
  }

  if (data == null) {
    Measure(null);
    return { runs: 0, elapsed: 0 };
  } else {
    Measure(data);
    // If we've run too few iterations, we continue for another second.
    if (data.runs < benchmark.minIterations) return data;
    var usec = (data.elapsed * 1000) / data.runs;
    var rms = (benchmark.rmsResult != null) ? benchmark.rmsResult() : 0;
    this.NotifyStep(new BenchmarkResult(benchmark, usec, rms));
    return null;
  }
}


// This function starts running a suite, but stops between each
// individual benchmark in the suite and returns a continuation
// function which can be invoked to run the next benchmark. Once the
// last benchmark has been executed, null is returned.
BenchmarkSuite.prototype.RunStep = function(runner) {
  BenchmarkSuite.ResetRNG();
  this.results = [];
  this.runner = runner;
  var length = this.benchmarks.length;
  var index = 0;
  var suite = this;
  var data;

  // Run the setup, the actual benchmark, and the tear down in three
  // separate steps to allow the framework to yield between any of the
  // steps.

  function RunNextSetup() {
    if (index < length) {
      try {
        suite.benchmarks[index].Setup();
      } catch (e) {
        suite.NotifyError(e);
        return null;
      }
      return RunNextBenchmark;
    }
    suite.NotifyResult();
    return null;
  }

  function RunNextBenchmark() {
    try {
      data = suite.RunSingleBenchmark(suite.benchmarks[index], data);
    } catch (e) {
      suite.NotifyError(e);
      return null;
    }
    // If data is null, we're done with this benchmark.
    return (data == null) ? RunNextTearDown : RunNextBenchmark();
  }

  function RunNextTearDown() {
    try {
      suite.benchmarks[index++].TearDown();
    } catch (e) {
      suite.NotifyError(e);
      return null;
    }
    return RunNextSetup;
  }

  // Start out running the setup.
  return RunNextSetup();
}

// earley-boyer.js
// This file is automatically generated by scheme2js, except for the
// benchmark harness code at the beginning and end of the file.

var EarleyBoyer = new BenchmarkSuite('EarleyBoyer', [666463], [
  new Benchmark("Earley", true,  false, 2500, function () { BgL_earleyzd2benchmarkzd2(); }),
  new Benchmark("Boyer", true, false, 200, function () { BgL_nboyerzd2benchmarkzd2(); })
]);


/************* GENERATED FILE - DO NOT EDIT *************/
/************* GENERATED FILE - DO NOT EDIT *************/
/************* GENERATED FILE - DO NOT EDIT *************/
/************* GENERATED FILE - DO NOT EDIT *************/
/************* GENERATED FILE - DO NOT EDIT *************/
/************* GENERATED FILE - DO NOT EDIT *************/
/************* GENERATED FILE - DO NOT EDIT *************/
/************* GENERATED FILE - DO NOT EDIT *************/
/*
 * To use write/prints/... the default-output port has to be set first.
 * Simply setting SC_DEFAULT_OUT and SC_ERROR_OUT to the desired values
 * should do the trick.
 * In the following example the std-out and error-port are redirected to
 * a DIV.
function initRuntime() {
    function escapeHTML(s) {
	var tmp = s;
	tmp = tmp.replace(/&/g, "&amp;");
	tmp = tmp.replace(/</g, "&lt;");
	tmp = tmp.replace(/>/g, "&gt;");
	tmp = tmp.replace(/ /g, "&nbsp;");
	tmp = tmp.replace(/\n/g, "<br />");
	tmp = tmp.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp");
	return tmp;
	
    }

    document.write("<div id='stdout'></div>");
    SC_DEFAULT_OUT = new sc_GenericOutputPort(
	function(s) {
	    var stdout = document.getElementById('stdout');
	    stdout.innerHTML = stdout.innerHTML + escapeHTML(s);
	});
    SC_ERROR_OUT = SC_DEFAULT_OUT;
}
*/


function sc_print_debug() {
    sc_print.apply(null, arguments);
}
/*** META ((export *js*)) */
var sc_JS_GLOBALS = this;

var __sc_LINE=-1;
var __sc_FILE="";

/*** META ((export #t)) */
function sc_alert() {
   var len = arguments.length;
   var s = "";
   var i;

   for( i = 0; i < len; i++ ) {
       s += sc_toDisplayString(arguments[ i ]);
   }

   return alert( s );
}

/*** META ((export #t)) */
function sc_typeof( x ) {
   return typeof x;
}

/*** META ((export #t)) */
function sc_error() {
    var a = [sc_jsstring2symbol("*error*")];
    for (var i = 0; i < arguments.length; i++) {
	a[i+1] = arguments[i];
    }
    throw a;
}

/*** META ((export #t)
           (peephole (prefix "throw ")))
*/
function sc_raise(obj) {
    throw obj;
}

/*** META ((export with-handler-lambda)) */
function sc_withHandlerLambda(handler, body) {
    try {
	return body();
    } catch(e) {
	if (!e._internalException)
	    return handler(e);
	else
	    throw e;
    }
}

var sc_properties = new Object();

/*** META ((export #t)) */
function sc_putpropBang(sym, key, val) {
    var ht = sc_properties[sym];
    if (!ht) {
	ht = new Object();
	sc_properties[sym] = ht;
    }
    ht[key] = val;
}

/*** META ((export #t)) */
function sc_getprop(sym, key) {
    var ht = sc_properties[sym];
    if (ht) {
	if (key in ht)
	    return ht[key];
	else
	    return false;
    } else
	return false;
}

/*** META ((export #t)) */
function sc_rempropBang(sym, key) {
    var ht = sc_properties[sym];
    if (ht)
	delete ht[key];
}

/*** META ((export #t)) */
function sc_any2String(o) {
    return jsstring2string(sc_toDisplayString(o));
}

/*** META ((export #t)
           (peephole (infix 2 2 "==="))
           (type bool))
*/
function sc_isEqv(o1, o2) {
    return (o1 === o2);
}

/*** META ((export #t)
           (peephole (infix 2 2 "==="))
           (type bool))
*/
function sc_isEq(o1, o2) {
    return (o1 === o2);
}

/*** META ((export #t)
           (type bool))
*/
function sc_isNumber(n) {
    return (typeof n === "number");
}

/*** META ((export #t)
           (type bool))
*/
function sc_isComplex(n) {
    return sc_isNumber(n);
}

/*** META ((export #t)
           (type bool))
*/
function sc_isReal(n) {
    return sc_isNumber(n);
}

/*** META ((export #t)
           (type bool))
*/
function sc_isRational(n) {
    return sc_isReal(n);
}

/*** META ((export #t)
           (type bool))
*/
function sc_isInteger(n) {
    return (parseInt(n) === n);
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix ", false")))
*/
// we don't have exact numbers...
function sc_isExact(n) {
    return false;
}

/*** META ((export #t)
           (peephole (postfix ", true"))
	   (type bool))
*/
function sc_isInexact(n) {
    return true;
}

/*** META ((export = =fx =fl)
           (type bool)
           (peephole (infix 2 2 "===")))
*/
function sc_equal(x) {
    for (var i = 1; i < arguments.length; i++)
	if (x !== arguments[i])
	    return false;
    return true;
}

/*** META ((export < <fx <fl)
           (type bool)
           (peephole (infix 2 2 "<")))
*/
function sc_less(x) {
    for (var i = 1; i < arguments.length; i++) {
	if (x >= arguments[i])
	    return false;
	x = arguments[i];
    }
    return true;
}

/*** META ((export > >fx >fl)
           (type bool)
           (peephole (infix 2 2 ">")))
*/
function sc_greater(x, y) {
    for (var i = 1; i < arguments.length; i++) {
	if (x <= arguments[i])
	    return false;
	x = arguments[i];
    }
    return true;
}

/*** META ((export <= <=fx <=fl)
           (type bool)
           (peephole (infix 2 2 "<=")))
*/
function sc_lessEqual(x, y) {
    for (var i = 1; i < arguments.length; i++) {
	if (x > arguments[i])
	    return false;
	x = arguments[i];
    }
    return true;
}

/*** META ((export >= >=fl >=fx)
           (type bool)
           (peephole (infix 2 2 ">=")))
*/
function sc_greaterEqual(x, y) {
    for (var i = 1; i < arguments.length; i++) {
	if (x < arguments[i])
	    return false;
	x = arguments[i];
    }
    return true;
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix "=== 0")))
*/
function sc_isZero(x) {
    return (x === 0);
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix "> 0")))
*/
function sc_isPositive(x) {
    return (x > 0);
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix "< 0")))
*/
function sc_isNegative(x) {
    return (x < 0);
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix "%2===1")))
*/
function sc_isOdd(x) {
    return (x % 2 === 1);
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix "%2===0")))
*/
function sc_isEven(x) {
    return (x % 2 === 0);
}

/*** META ((export #t)) */
var sc_max = Math.max;
/*** META ((export #t)) */
var sc_min = Math.min;

/*** META ((export + +fx +fl)
           (peephole (infix 0 #f "+" "0")))
*/
function sc_plus() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++)
	sum += arguments[i];
    return sum;
}

/*** META ((export * *fx *fl)
           (peephole (infix 0 #f "*" "1")))
*/
function sc_multi() {
    var product = 1;
    for (var i = 0; i < arguments.length; i++)
	product *= arguments[i];
    return product;
}

/*** META ((export - -fx -fl)
           (peephole (minus)))
*/
function sc_minus(x) {
    if (arguments.length === 1)
	return -x;
    else {
	var res = x;
	for (var i = 1; i < arguments.length; i++)
	    res -= arguments[i];
	return res;
    }
}

/*** META ((export / /fl)
           (peephole (div)))
*/
function sc_div(x) {
    if (arguments.length === 1)
	return 1/x;
    else {
	var res = x;
	for (var i = 1; i < arguments.length; i++)
	    res /= arguments[i];
	return res;
    }
}

/*** META ((export #t)) */
var sc_abs = Math.abs;

/*** META ((export quotient /fx)
           (peephole (hole 2 "parseInt(" x "/" y ")")))
*/
function sc_quotient(x, y) {
    return parseInt(x / y);
}

/*** META ((export #t)
           (peephole (infix 2 2 "%")))
*/
function sc_remainder(x, y) {
    return x % y;
}

/*** META ((export #t)
           (peephole (modulo)))
*/
function sc_modulo(x, y) {
    var remainder = x % y;
    // if they don't have the same sign
    if ((remainder * y) < 0)
	return remainder + y;
    else
	return remainder;
}

function sc_euclid_gcd(a, b) {
    var temp;
    if (a === 0) return b;
    if (b === 0) return a;
    if (a < 0) {a = -a;};
    if (b < 0) {b = -b;};
    if (b > a) {temp = a; a = b; b = temp;};
    while (true) {
	a %= b;
	if(a === 0) {return b;};
	b %= a;
	if(b === 0) {return a;};
    };
    return b;
}

/*** META ((export #t)) */
function sc_gcd() {
    var gcd = 0;
    for (var i = 0; i < arguments.length; i++)
	gcd = sc_euclid_gcd(gcd, arguments[i]);
    return gcd;
}

/*** META ((export #t)) */
function sc_lcm() {
    var lcm = 1;
    for (var i = 0; i < arguments.length; i++) {
	var f = Math.round(arguments[i] / sc_euclid_gcd(arguments[i], lcm));
	lcm *= Math.abs(f);
    }
    return lcm;
}

// LIMITATION: numerator and denominator don't make sense in floating point world.
//var SC_MAX_DECIMALS = 1000000
//
// function sc_numerator(x) {
//     var rounded = Math.round(x * SC_MAX_DECIMALS);
//     return Math.round(rounded / sc_euclid_gcd(rounded, SC_MAX_DECIMALS));
// }

// function sc_denominator(x) {
//     var rounded = Math.round(x * SC_MAX_DECIMALS);
//     return Math.round(SC_MAX_DECIMALS / sc_euclid_gcd(rounded, SC_MAX_DECIMALS));
// }

/*** META ((export #t)) */
var sc_floor = Math.floor;
/*** META ((export #t)) */
var sc_ceiling = Math.ceil;
/*** META ((export #t)) */
var sc_truncate = parseInt;
/*** META ((export #t)) */
var sc_round = Math.round;

// LIMITATION: sc_rationalize doesn't make sense in a floating point world.

/*** META ((export #t)) */
var sc_exp = Math.exp;
/*** META ((export #t)) */
var sc_log = Math.log;
/*** META ((export #t)) */
var sc_sin = Math.sin;
/*** META ((export #t)) */
var sc_cos = Math.cos;
/*** META ((export #t)) */
var sc_tan = Math.tan;
/*** META ((export #t)) */
var sc_asin = Math.asin;
/*** META ((export #t)) */
var sc_acos = Math.acos;
/*** META ((export #t)) */
var sc_atan = Math.atan;

/*** META ((export #t)) */
var sc_sqrt = Math.sqrt;
/*** META ((export #t)) */
var sc_expt = Math.pow;

// LIMITATION: we don't have complex numbers.
// LIMITATION: the following functions are hence not implemented.
// LIMITATION: make-rectangular, make-polar, real-part, imag-part, magnitude, angle
// LIMITATION: 2 argument atan

/*** META ((export #t)
           (peephole (id)))
*/
function sc_exact2inexact(x) {
    return x;
}

/*** META ((export #t)
           (peephole (id)))
*/
function sc_inexact2exact(x) {
    return x;
}

function sc_number2jsstring(x, radix) {
    if (radix)
	return x.toString(radix);
    else
	return x.toString();
}

function sc_jsstring2number(s, radix) {
    if (s === "") return false;

    if (radix) {
	var t = parseInt(s, radix);
	if (!t && t !== 0) return false;
	// verify that each char is in range. (parseInt ignores leading
	// white and trailing chars)
	var allowedChars = "01234567890abcdefghijklmnopqrstuvwxyz".substring(0, radix+1);
	if ((new RegExp("^["+allowedChars+"]*$", "i")).test(s))
	    return t;
	else return false;
    } else {
	var t = +s; // does not ignore trailing chars.
	if (!t && t !== 0) return false;
	// simply verify that first char is not whitespace.
	var c = s.charAt(0);
	// if +c is 0, but the char is not "0", then we have a whitespace.
	if (+c === 0 && c !== "0") return false;
	return t;
    }
}

/*** META ((export #t)
           (type bool)
           (peephole (not)))
*/
function sc_not(b) {
    return b === false;
}

/*** META ((export #t)
           (type bool))
*/
function sc_isBoolean(b) {
    return (b === true) || (b === false);
}

function sc_Pair(car, cdr) {
    this.car = car;
    this.cdr = cdr;
}

sc_Pair.prototype.toString = function() {
    return sc_toDisplayString(this);
};
sc_Pair.prototype.sc_toWriteOrDisplayString = function(writeOrDisplay) {
    var current = this;

    var res = "(";

    while(true) {
	res += writeOrDisplay(current.car);
	if (sc_isPair(current.cdr)) {
	    res += " ";
	    current = current.cdr;
	} else if (current.cdr !== null) {
	    res += " . " + writeOrDisplay(current.cdr);
	    break;
	} else // current.cdr == null
	    break;
    }
	
    res += ")";

    return res;
};
sc_Pair.prototype.sc_toDisplayString = function() {
    return this.sc_toWriteOrDisplayString(sc_toDisplayString);
};
sc_Pair.prototype.sc_toWriteString = function() {
    return this.sc_toWriteOrDisplayString(sc_toWriteString);
};
// sc_Pair.prototype.sc_toWriteCircleString in IO.js

/*** META ((export #t)
           (type bool)
           (peephole (postfix " instanceof sc_Pair")))
*/
function sc_isPair(p) {
    return (p instanceof sc_Pair);
}

function sc_isPairEqual(p1, p2, comp) {
    return (comp(p1.car, p2.car) && comp(p1.cdr, p2.cdr));
}

/*** META ((export #t)
           (peephole (hole 2 "new sc_Pair(" car ", " cdr ")")))
*/
function sc_cons(car, cdr) {
    return new sc_Pair(car, cdr);
}

/*** META ((export cons*)) */
function sc_consStar() {
    var res = arguments[arguments.length - 1];
    for (var i = arguments.length-2; i >= 0; i--)
	res = new sc_Pair(arguments[i], res);
    return res;
}

/*** META ((export #t)
           (peephole (postfix ".car")))
*/
function sc_car(p) {
    return p.car;
}

/*** META ((export #t)
           (peephole (postfix ".cdr")))
*/
function sc_cdr(p) {
    return p.cdr;
}

/*** META ((export #t)
           (peephole (hole 2 p ".car = " val)))
*/
function sc_setCarBang(p, val) {
    p.car = val;
}

/*** META ((export #t)
           (peephole (hole 2 p ".cdr = " val)))
*/
function sc_setCdrBang(p, val) {
    p.cdr = val;
}

/*** META ((export #t)
           (peephole (postfix ".car.car")))
*/
function sc_caar(p) { return p.car.car; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car")))
*/
function sc_cadr(p) { return p.cdr.car; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr")))
*/
function sc_cdar(p) { return p.car.cdr; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr")))
*/
function sc_cddr(p) { return p.cdr.cdr; }
/*** META ((export #t)
           (peephole (postfix ".car.car.car")))
*/
function sc_caaar(p) { return p.car.car.car; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.car")))
*/
function sc_cadar(p) { return p.car.cdr.car; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.car")))
*/
function sc_caadr(p) { return p.cdr.car.car; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.car")))
*/
function sc_caddr(p) { return p.cdr.cdr.car; }
/*** META ((export #t)
           (peephole (postfix ".car.car.cdr")))
*/
function sc_cdaar(p) { return p.car.car.cdr; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.cdr")))
*/
function sc_cdadr(p) { return p.cdr.car.cdr; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.cdr")))
*/
function sc_cddar(p) { return p.car.cdr.cdr; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.cdr")))
*/
function sc_cdddr(p) { return p.cdr.cdr.cdr; }
/*** META ((export #t)
           (peephole (postfix ".car.car.car.car")))
*/
function sc_caaaar(p) { return p.car.car.car.car; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.car.car")))
*/
function sc_caadar(p) { return p.car.cdr.car.car; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.car.car")))
*/
function sc_caaadr(p) { return p.cdr.car.car.car; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.car.car")))
*/
function sc_caaddr(p) { return p.cdr.cdr.car.car; }
/*** META ((export #t)
           (peephole (postfix ".car.car.car.cdr")))
*/
function sc_cdaaar(p) { return p.car.car.car.cdr; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.car.cdr")))
*/
function sc_cdadar(p) { return p.car.cdr.car.cdr; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.car.cdr")))
*/
function sc_cdaadr(p) { return p.cdr.car.car.cdr; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.car.cdr")))
*/
function sc_cdaddr(p) { return p.cdr.cdr.car.cdr; }
/*** META ((export #t)
           (peephole (postfix ".car.car.cdr.car")))
*/
function sc_cadaar(p) { return p.car.car.cdr.car; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.cdr.car")))
*/
function sc_caddar(p) { return p.car.cdr.cdr.car; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.cdr.car")))
*/
function sc_cadadr(p) { return p.cdr.car.cdr.car; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.cdr.car")))
*/
function sc_cadddr(p) { return p.cdr.cdr.cdr.car; }
/*** META ((export #t)
           (peephole (postfix ".car.car.cdr.cdr")))
*/
function sc_cddaar(p) { return p.car.car.cdr.cdr; }
/*** META ((export #t)
           (peephole (postfix ".car.cdr.cdr.cdr")))
*/
function sc_cdddar(p) { return p.car.cdr.cdr.cdr; }
/*** META ((export #t)
           (peephole (postfix ".cdr.car.cdr.cdr")))
*/
function sc_cddadr(p) { return p.cdr.car.cdr.cdr; }
/*** META ((export #t)
           (peephole (postfix ".cdr.cdr.cdr.cdr")))
*/
function sc_cddddr(p) { return p.cdr.cdr.cdr.cdr; }

/*** META ((export #t)) */
function sc_lastPair(l) {
    if (!sc_isPair(l)) sc_error("sc_lastPair: pair expected");
    var res = l;
    var cdr = l.cdr;
    while (sc_isPair(cdr)) {
	res = cdr;
	cdr = res.cdr;
    }
    return res;
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix " === null")))
*/
function sc_isNull(o) {
    return (o === null);
}

/*** META ((export #t)
           (type bool))
*/
function sc_isList(o) {
    var rabbit;
    var turtle;

    var rabbit = o;
    var turtle = o;
    while (true) {
	if (rabbit === null ||
	    (rabbit instanceof sc_Pair && rabbit.cdr === null))
	    return true;  // end of list
	else if ((rabbit instanceof sc_Pair) &&
		 (rabbit.cdr instanceof sc_Pair)) {
	    rabbit = rabbit.cdr.cdr;
	    turtle = turtle.cdr;
	    if (rabbit === turtle) return false; // cycle
	} else
	    return false; // not pair
    }
}

/*** META ((export #t)) */
function sc_list() {
    var res = null;
    var a = arguments;
    for (var i = a.length-1; i >= 0; i--)
	res = new sc_Pair(a[i], res);
    return res;
}

/*** META ((export #t)) */
function sc_iota(num, init) {
   var res = null;
   if (!init) init = 0;
   for (var i = num - 1; i >= 0; i--)
      res = new sc_Pair(i + init, res);
   return res;
}

/*** META ((export #t)) */
function sc_makeList(nbEls, fill) {
    var res = null;
    for (var i = 0; i < nbEls; i++)
	res = new sc_Pair(fill, res);
    return res;
}

/*** META ((export #t)) */
function sc_length(l) {
    var res = 0;
    while (l !== null) {
	res++;
	l = l.cdr;
    }
    return res;
}

/*** META ((export #t)) */
function sc_remq(o, l) {
    var dummy = { cdr : null };
    var tail = dummy;
    while (l !== null) {
	if (l.car !== o) {
	    tail.cdr = sc_cons(l.car, null);
	    tail = tail.cdr;
	}
	l = l.cdr;
    }
    return dummy.cdr;
}

/*** META ((export #t)) */
function sc_remqBang(o, l) {
    var dummy = { cdr : null };
    var tail = dummy;
    var needsAssig = true;
    while (l !== null) {
	if (l.car === o) {
	    needsAssig = true;
	} else {
	    if (needsAssig) {
		tail.cdr = l;
		needsAssig = false;
	    }
	    tail = l;
	}
	l = l.cdr;
    }
    tail.cdr = null;
    return dummy.cdr;
}

/*** META ((export #t)) */
function sc_delete(o, l) {
    var dummy = { cdr : null };
    var tail = dummy;
    while (l !== null) {
	if (!sc_isEqual(l.car, o)) {
	    tail.cdr = sc_cons(l.car, null);
	    tail = tail.cdr;
	}
	l = l.cdr;
    }
    return dummy.cdr;
}

/*** META ((export #t)) */
function sc_deleteBang(o, l) {
    var dummy = { cdr : null };
    var tail = dummy;
    var needsAssig = true;
    while (l !== null) {
	if (sc_isEqual(l.car, o)) {
	    needsAssig = true;
	} else {
	    if (needsAssig) {
		tail.cdr = l;
		needsAssig = false;
	    }
	    tail = l;
	}
	l = l.cdr;
    }
    tail.cdr = null;
    return dummy.cdr;
}

function sc_reverseAppendBang(l1, l2) {
    var res = l2;
    while (l1 !== null) {
	var tmp = res;
	res = l1;
	l1 = l1.cdr;
	res.cdr = tmp;
    }
    return res;
}
	
function sc_dualAppend(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    var rev = sc_reverse(l1);
    return sc_reverseAppendBang(rev, l2);
}

/*** META ((export #t)) */
function sc_append() {
    if (arguments.length === 0)
	return null;
    var res = arguments[arguments.length - 1];
    for (var i = arguments.length - 2; i >= 0; i--)
	res = sc_dualAppend(arguments[i], res);
    return res;
}

function sc_dualAppendBang(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    var tmp = l1;
    while (tmp.cdr !== null) tmp=tmp.cdr;
    tmp.cdr = l2;
    return l1;
}

/*** META ((export #t)) */
function sc_appendBang() {
    var res = null;
    for (var i = 0; i < arguments.length; i++)
	res = sc_dualAppendBang(res, arguments[i]);
    return res;
}

/*** META ((export #t)) */
function sc_reverse(l1) {
    var res = null;
    while (l1 !== null) {
	res = sc_cons(l1.car, res);
	l1 = l1.cdr;
    }
    return res;
}

/*** META ((export #t)) */
function sc_reverseBang(l) {
    return sc_reverseAppendBang(l, null);
}

/*** META ((export #t)) */
function sc_listTail(l, k) {
    var res = l;
    for (var i = 0; i < k; i++) {
	res = res.cdr;
    }
    return res;
}

/*** META ((export #t)) */
function sc_listRef(l, k) {
    return sc_listTail(l, k).car;
}

/* // unoptimized generic versions
function sc_memX(o, l, comp) {
    while (l != null) {
	if (comp(l.car, o))
	    return l;
	l = l.cdr;
    }
    return false;
}
function sc_memq(o, l) { return sc_memX(o, l, sc_isEq); }
function sc_memv(o, l) { return sc_memX(o, l, sc_isEqv); }
function sc_member(o, l) { return sc_memX(o, l, sc_isEqual); }
*/

/* optimized versions */
/*** META ((export #t)) */
function sc_memq(o, l) {
    while (l !== null) {
	if (l.car === o)
	    return l;
	l = l.cdr;
    }
    return false;
}
/*** META ((export #t)) */
function sc_memv(o, l) {
    while (l !== null) {
	if (l.car === o)
	    return l;
	l = l.cdr;
    }
    return false;
}
/*** META ((export #t)) */
function sc_member(o, l) {
    while (l !== null) {
	if (sc_isEqual(l.car,o))
	    return l;
	l = l.cdr;
    }
    return false;
}

/* // generic unoptimized versions
function sc_assX(o, al, comp) {
    while (al != null) {
	if (comp(al.car.car, o))
	    return al.car;
	al = al.cdr;
    }
    return false;
}
function sc_assq(o, al) { return sc_assX(o, al, sc_isEq); }
function sc_assv(o, al) { return sc_assX(o, al, sc_isEqv); }
function sc_assoc(o, al) { return sc_assX(o, al, sc_isEqual); }
*/
// optimized versions
/*** META ((export #t)) */
function sc_assq(o, al) {
    while (al !== null) {
	if (al.car.car === o)
	    return al.car;
	al = al.cdr;
    }
    return false;
}
/*** META ((export #t)) */
function sc_assv(o, al) {
    while (al !== null) {
	if (al.car.car === o)
	    return al.car;
	al = al.cdr;
    }
    return false;
}
/*** META ((export #t)) */
function sc_assoc(o, al) {
    while (al !== null) {
	if (sc_isEqual(al.car.car, o))
	    return al.car;
	al = al.cdr;
    }
    return false;
}

/* can be used for mutable strings and characters */
function sc_isCharStringEqual(cs1, cs2) { return cs1.val === cs2.val; }
function sc_isCharStringLess(cs1, cs2) { return cs1.val < cs2.val; }
function sc_isCharStringGreater(cs1, cs2) { return cs1.val > cs2.val; }
function sc_isCharStringLessEqual(cs1, cs2) { return cs1.val <= cs2.val; }
function sc_isCharStringGreaterEqual(cs1, cs2) { return cs1.val >= cs2.val; }
function sc_isCharStringCIEqual(cs1, cs2)
    { return cs1.val.toLowerCase() === cs2.val.toLowerCase(); }
function sc_isCharStringCILess(cs1, cs2)
    { return cs1.val.toLowerCase() < cs2.val.toLowerCase(); }
function sc_isCharStringCIGreater(cs1, cs2)
    { return cs1.val.toLowerCase() > cs2.val.toLowerCase(); }
function sc_isCharStringCILessEqual(cs1, cs2)
    { return cs1.val.toLowerCase() <= cs2.val.toLowerCase(); }
function sc_isCharStringCIGreaterEqual(cs1, cs2)
    { return cs1.val.toLowerCase() >= cs2.val.toLowerCase(); }




function sc_Char(c) {
    var cached = sc_Char.lazy[c];
    if (cached)
	return cached;
    this.val = c;
    sc_Char.lazy[c] = this;
    // add return, so FF does not complain.
    return undefined;
}
sc_Char.lazy = new Object();
// thanks to Eric
sc_Char.char2readable = {
    "\000": "#\\null",
    "\007": "#\\bell",
    "\010": "#\\backspace",
    "\011": "#\\tab",
    "\012": "#\\newline",
    "\014": "#\\page",
    "\015": "#\\return",
    "\033": "#\\escape",
    "\040": "#\\space",
    "\177": "#\\delete",

  /* poeticless names */
    "\001": "#\\soh",
    "\002": "#\\stx",
    "\003": "#\\etx",
    "\004": "#\\eot",
    "\005": "#\\enq",
    "\006": "#\\ack",

    "\013": "#\\vt",
    "\016": "#\\so",
    "\017": "#\\si",

    "\020": "#\\dle",
    "\021": "#\\dc1",
    "\022": "#\\dc2",
    "\023": "#\\dc3",
    "\024": "#\\dc4",
    "\025": "#\\nak",
    "\026": "#\\syn",
    "\027": "#\\etb",

    "\030": "#\\can",
    "\031": "#\\em",
    "\032": "#\\sub",
    "\033": "#\\esc",
    "\034": "#\\fs",
    "\035": "#\\gs",
    "\036": "#\\rs",
    "\037": "#\\us"};

sc_Char.readable2char = {
    "null": "\000",
    "bell": "\007",
    "backspace": "\010",
    "tab": "\011",
    "newline": "\012",
    "page": "\014",
    "return": "\015",
    "escape": "\033",
    "space": "\040",
    "delete": "\000",
    "soh": "\001",
    "stx": "\002",
    "etx": "\003",
    "eot": "\004",
    "enq": "\005",
    "ack": "\006",
    "bel": "\007",
    "bs": "\010",
    "ht": "\011",
    "nl": "\012",
    "vt": "\013",
    "np": "\014",
    "cr": "\015",
    "so": "\016",
    "si": "\017",
    "dle": "\020",
    "dc1": "\021",
    "dc2": "\022",
    "dc3": "\023",
    "dc4": "\024",
    "nak": "\025",
    "syn": "\026",
    "etb": "\027",
    "can": "\030",
    "em": "\031",
    "sub": "\032",
    "esc": "\033",
    "fs": "\034",
    "gs": "\035",
    "rs": "\036",
    "us": "\037",
    "sp": "\040",
    "del": "\177"};

sc_Char.prototype.toString = function() {
    return this.val;
};
// sc_toDisplayString == toString
sc_Char.prototype.sc_toWriteString = function() {
    var entry = sc_Char.char2readable[this.val];
    if (entry)
	return entry;
    else
	return "#\\" + this.val;
};

/*** META ((export #t)
           (type bool)
           (peephole (postfix "instanceof sc_Char")))
*/
function sc_isChar(c) {
    return (c instanceof sc_Char);
}

/*** META ((export char=?)
           (type bool)
           (peephole (hole 2 c1 ".val === " c2 ".val")))
*/
var sc_isCharEqual = sc_isCharStringEqual;
/*** META ((export char<?)
           (type bool)
           (peephole (hole 2 c1 ".val < " c2 ".val")))
*/
var sc_isCharLess = sc_isCharStringLess;
/*** META ((export char>?)
           (type bool)
           (peephole (hole 2 c1 ".val > " c2 ".val")))
*/
var sc_isCharGreater = sc_isCharStringGreater;
/*** META ((export char<=?)
           (type bool)
           (peephole (hole 2 c1 ".val <= " c2 ".val")))
*/
var sc_isCharLessEqual = sc_isCharStringLessEqual;
/*** META ((export char>=?)
           (type bool)
           (peephole (hole 2 c1 ".val >= " c2 ".val")))
*/
var sc_isCharGreaterEqual = sc_isCharStringGreaterEqual;
/*** META ((export char-ci=?)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() === " c2 ".val.toLowerCase()")))
*/
var sc_isCharCIEqual = sc_isCharStringCIEqual;
/*** META ((export char-ci<?)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() < " c2 ".val.toLowerCase()")))
*/
var sc_isCharCILess = sc_isCharStringCILess;
/*** META ((export char-ci>?)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() > " c2 ".val.toLowerCase()")))
*/
var sc_isCharCIGreater = sc_isCharStringCIGreater;
/*** META ((export char-ci<=?)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() <= " c2 ".val.toLowerCase()")))
*/
var sc_isCharCILessEqual = sc_isCharStringCILessEqual;
/*** META ((export char-ci>=?)
           (type bool)
           (peephole (hole 2 c1 ".val.toLowerCase() >= " c2 ".val.toLowerCase()")))
*/
var sc_isCharCIGreaterEqual = sc_isCharStringCIGreaterEqual;

var SC_NUMBER_CLASS = "0123456789";
var SC_WHITESPACE_CLASS = ' \r\n\t\f';
var SC_LOWER_CLASS = 'abcdefghijklmnopqrstuvwxyz';
var SC_UPPER_CLASS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function sc_isCharOfClass(c, cl) { return (cl.indexOf(c) != -1); }
/*** META ((export #t)
           (type bool))
*/
function sc_isCharAlphabetic(c)
    { return sc_isCharOfClass(c.val, SC_LOWER_CLASS) ||
	  sc_isCharOfClass(c.val, SC_UPPER_CLASS); }
/*** META ((export #t)
           (type bool)
           (peephole (hole 1 "SC_NUMBER_CLASS.indexOf(" c ".val) != -1")))
*/
function sc_isCharNumeric(c)
    { return sc_isCharOfClass(c.val, SC_NUMBER_CLASS); }
/*** META ((export #t)
           (type bool))
*/
function sc_isCharWhitespace(c) {
    var tmp = c.val;
    return tmp === " " || tmp === "\r" || tmp === "\n" || tmp === "\t" || tmp === "\f";
}
/*** META ((export #t)
           (type bool)
           (peephole (hole 1 "SC_UPPER_CLASS.indexOf(" c ".val) != -1")))
*/
function sc_isCharUpperCase(c)
    { return sc_isCharOfClass(c.val, SC_UPPER_CLASS); }
/*** META ((export #t)
           (type bool)
           (peephole (hole 1 "SC_LOWER_CLASS.indexOf(" c ".val) != -1")))
*/
function sc_isCharLowerCase(c)
    { return sc_isCharOfClass(c.val, SC_LOWER_CLASS); }

/*** META ((export #t)
           (peephole (postfix ".val.charCodeAt(0)")))
*/
function sc_char2integer(c)
    { return c.val.charCodeAt(0); }
/*** META ((export #t)
           (peephole (hole 1 "new sc_Char(String.fromCharCode(" n "))")))
*/
function sc_integer2char(n)
    { return new sc_Char(String.fromCharCode(n)); }

/*** META ((export #t)
           (peephole (hole 1 "new sc_Char(" c ".val.toUpperCase())")))
*/
function sc_charUpcase(c)
    { return new sc_Char(c.val.toUpperCase()); }
/*** META ((export #t)
           (peephole (hole 1 "new sc_Char(" c ".val.toLowerCase())")))
*/
function sc_charDowncase(c)
    { return new sc_Char(c.val.toLowerCase()); }

function sc_makeJSStringOfLength(k, c) {
    var fill;
    if (c === undefined)
	fill = " ";
    else
	fill = c;
    var res = "";
    var len = 1;
    // every round doubles the size of fill.
    while (k >= len) {
	if (k & len)
	    res = res.concat(fill);
	fill = fill.concat(fill);
	len *= 2;
    }
    return res;
}

function sc_makejsString(k, c) {
    var fill;
    if (c)
	fill = c.val;
    else
	fill = " ";
    return sc_makeJSStringOfLength(k, fill);
}

function sc_jsstring2list(s) {
    var res = null;
    for (var i = s.length - 1; i >= 0; i--)
	res = sc_cons(new sc_Char(s.charAt(i)), res);
    return res;
}

function sc_list2jsstring(l) {
    var a = new Array();
    while(l !== null) {
	a.push(l.car.val);
	l = l.cdr;
    }
    return "".concat.apply("", a);
}

var sc_Vector = Array;

sc_Vector.prototype.sc_toWriteOrDisplayString = function(writeOrDisplay) {
    if (this.length === 0) return "#()";

    var res = "#(" + writeOrDisplay(this[0]);
    for (var i = 1; i < this.length; i++)
	res += " " + writeOrDisplay(this[i]);
    res += ")";
    return res;
};
sc_Vector.prototype.sc_toDisplayString = function() {
    return this.sc_toWriteOrDisplayString(sc_toDisplayString);
};
sc_Vector.prototype.sc_toWriteString = function() {
    return this.sc_toWriteOrDisplayString(sc_toWriteString);
};

/*** META ((export vector? array?)
           (type bool)
           (peephole (postfix " instanceof sc_Vector")))
*/
function sc_isVector(v) {
    return (v instanceof sc_Vector);
}

// only applies to vectors
function sc_isVectorEqual(v1, v2, comp) {
    if (v1.length !== v2.length) return false;
    for (var i = 0; i < v1.length; i++)
	if (!comp(v1[i], v2[i])) return false;
    return true;
}

/*** META ((export make-vector make-array)) */
function sc_makeVector(size, fill) {
    var a = new sc_Vector(size);
    if (fill !== undefined)
	sc_vectorFillBang(a, fill);
    return a;
}

/*** META ((export vector array)
           (peephole (vector)))
*/
function sc_vector() {
    var a = new sc_Vector();
    for (var i = 0; i < arguments.length; i++)
	a.push(arguments[i]);
    return a;
}

/*** META ((export vector-length array-length)
           (peephole (postfix ".length")))
*/
function sc_vectorLength(v) {
    return v.length;
}

/*** META ((export vector-ref array-ref)
           (peephole (hole 2 v "[" pos "]")))
*/
function sc_vectorRef(v, pos) {
    return v[pos];
}

/*** META ((export vector-set! array-set!)
           (peephole (hole 3 v "[" pos "] = " val)))
*/
function sc_vectorSetBang(v, pos, val) {
    v[pos] = val;
}

/*** META ((export vector->list array->list)) */
function sc_vector2list(a) {
    var res = null;
    for (var i = a.length-1; i >= 0; i--)
	res = sc_cons(a[i], res);
    return res;
}

/*** META ((export list->vector list->array)) */
function sc_list2vector(l) {
    var a = new sc_Vector();
    while(l !== null) {
	a.push(l.car);
	l = l.cdr;
    }
    return a;
}

/*** META ((export vector-fill! array-fill!)) */
function sc_vectorFillBang(a, fill) {
    for (var i = 0; i < a.length; i++)
	a[i] = fill;
}


/*** META ((export #t)) */
function sc_copyVector(a, len) {
    if (len <= a.length)
	return a.slice(0, len);
    else {
	var tmp = a.concat();
	tmp.length = len;
	return tmp;
    }
}

/*** META ((export #t)
           (peephole (hole 3 a ".slice(" start "," end ")")))
*/
function sc_vectorCopy(a, start, end) {
    return a.slice(start, end);
}

/*** META ((export #t)) */
function sc_vectorCopyBang(target, tstart, source, sstart, send) {
    if (!sstart) sstart = 0;
    if (!send) send = source.length;

    // if target == source we don't want to overwrite not yet copied elements.
    if (tstart <= sstart) {
	for (var i = tstart, j = sstart; j < send; i++, j++) {
	    target[i] = source[j];
	}
    } else {
	var diff = send - sstart;
	for (var i = tstart + diff - 1, j = send - 1;
	     j >= sstart;
	     i--, j--) {
	    target[i] = source[j];
	}
    }
    return target;
}

/*** META ((export #t)
           (type bool)
           (peephole (hole 1 "typeof " o " === 'function'")))
*/
function sc_isProcedure(o) {
    return (typeof o === "function");
}

/*** META ((export #t)) */
function sc_apply(proc) {
    var args = new Array();
    // first part of arguments are not in list-form.
    for (var i = 1; i < arguments.length - 1; i++)
	args.push(arguments[i]);
    var l = arguments[arguments.length - 1];
    while (l !== null) {
	args.push(l.car);
	l = l.cdr;
    }
    return proc.apply(null, args);
}

/*** META ((export #t)) */
function sc_map(proc, l1) {
    if (l1 === undefined)
	return null;
    // else
    var nbApplyArgs = arguments.length - 1;
    var applyArgs = new Array(nbApplyArgs);
    var revres = null;
    while (l1 !== null) {
	for (var i = 0; i < nbApplyArgs; i++) {
	    applyArgs[i] = arguments[i + 1].car;
	    arguments[i + 1] = arguments[i + 1].cdr;
	}
	revres = sc_cons(proc.apply(null, applyArgs), revres);
    }
    return sc_reverseAppendBang(revres, null);
}

/*** META ((export #t)) */
function sc_mapBang(proc, l1) {
    if (l1 === undefined)
	return null;
    // else
    var l1_orig = l1;
    var nbApplyArgs = arguments.length - 1;
    var applyArgs = new Array(nbApplyArgs);
    while (l1 !== null) {
	var tmp = l1;
	for (var i = 0; i < nbApplyArgs; i++) {
	    applyArgs[i] = arguments[i + 1].car;
	    arguments[i + 1] = arguments[i + 1].cdr;
	}
	tmp.car = proc.apply(null, applyArgs);
    }
    return l1_orig;
}

/*** META ((export #t)) */
function sc_forEach(proc, l1) {
    if (l1 === undefined)
	return undefined;
    // else
    var nbApplyArgs = arguments.length - 1;
    var applyArgs = new Array(nbApplyArgs);
    while (l1 !== null) {
	for (var i = 0; i < nbApplyArgs; i++) {
	    applyArgs[i] = arguments[i + 1].car;
	    arguments[i + 1] = arguments[i + 1].cdr;
	}
	proc.apply(null, applyArgs);
    }
    // add return so FF does not complain.
    return undefined;
}

/*** META ((export #t)) */
function sc_filter(proc, l1) {
    var dummy = { cdr : null };
    var tail = dummy;
    while (l1 !== null) {
	if (proc(l1.car) !== false) {
	    tail.cdr = sc_cons(l1.car, null);
	    tail = tail.cdr;
	}
	l1 = l1.cdr;
    }
    return dummy.cdr;
}

/*** META ((export #t)) */
function sc_filterBang(proc, l1) {
    var head = sc_cons("dummy", l1);
    var it = head;
    var next = l1;
    while (next !== null) {
        if (proc(next.car) !== false) {
	    it.cdr = next
	    it = next;
	}
	next = next.cdr;
    }
    it.cdr = null;
    return head.cdr;
}

function sc_filterMap1(proc, l1) {
    var revres = null;
    while (l1 !== null) {
        var tmp = proc(l1.car)
        if (tmp !== false) revres = sc_cons(tmp, revres);
        l1 = l1.cdr;
    }
    return sc_reverseAppendBang(revres, null);
}
function sc_filterMap2(proc, l1, l2) {
    var revres = null;
    while (l1 !== null) {
        var tmp = proc(l1.car, l2.car);
        if(tmp !== false) revres = sc_cons(tmp, revres);
	l1 = l1.cdr;
	l2 = l2.cdr
    }
    return sc_reverseAppendBang(revres, null);
}

/*** META ((export #t)) */
function sc_filterMap(proc, l1, l2, l3) {
    if (l2 === undefined)
	return sc_filterMap1(proc, l1);
    else if (l3 === undefined)
	return sc_filterMap2(proc, l1, l2);
    // else
    var nbApplyArgs = arguments.length - 1;
    var applyArgs = new Array(nbApplyArgs);
    var revres = null;
    while (l1 !== null) {
	for (var i = 0; i < nbApplyArgs; i++) {
	    applyArgs[i] = arguments[i + 1].car;
	    arguments[i + 1] = arguments[i + 1].cdr;
	}
	var tmp = proc.apply(null, applyArgs);
	if(tmp !== false) revres = sc_cons(tmp, revres);
    }
    return sc_reverseAppendBang(revres, null);
}

/*** META ((export #t)) */
function sc_any(proc, l) {
    var revres = null;
    while (l !== null) {
        var tmp = proc(l.car);
        if(tmp !== false) return tmp;
	l = l.cdr;
    }
    return false;
}

/*** META ((export any?)
           (peephole (hole 2 "sc_any(" proc "," l ") !== false")))
*/
function sc_anyPred(proc, l) {
    return sc_any(proc, l)!== false;
}

/*** META ((export #t)) */
function sc_every(proc, l) {
    var revres = null;
    var tmp = true;
    while (l !== null) {
        tmp = proc(l.car);
        if (tmp === false) return false;
	l = l.cdr;
    }
    return tmp;
}

/*** META ((export every?)
           (peephole (hole 2 "sc_every(" proc "," l ") !== false")))
*/
function sc_everyPred(proc, l) {
    var tmp = sc_every(proc, l);
    if (tmp !== false) return true;
    return false;
}

/*** META ((export #t)
           (peephole (postfix "()")))
*/
function sc_force(o) {
    return o();
}

/*** META ((export #t)) */
function sc_makePromise(proc) {
    var isResultReady = false;
    var result = undefined;
    return function() {
	if (!isResultReady) {
	    var tmp = proc();
	    if (!isResultReady) {
		isResultReady = true;
		result = tmp;
	    }
	}
	return result;
    };
}

function sc_Values(values) {
    this.values = values;
}

/*** META ((export #t)
           (peephole (values)))
*/
function sc_values() {
    if (arguments.length === 1)
	return arguments[0];
    else
	return new sc_Values(arguments);
}

/*** META ((export #t)) */
function sc_callWithValues(producer, consumer) {
    var produced = producer();
    if (produced instanceof sc_Values)
	return consumer.apply(null, produced.values);
    else
	return consumer(produced);
}

/*** META ((export #t)) */
function sc_dynamicWind(before, thunk, after) {
    before();
    try {
	var res = thunk();
	return res;
    } finally {
	after();
    }
}


// TODO: eval/scheme-report-environment/null-environment/interaction-environment

// LIMITATION: 'load' doesn't exist without files.
// LIMITATION: transcript-on/transcript-off doesn't exist without files.


function sc_Struct(name) {
    this.name = name;
}
sc_Struct.prototype.sc_toDisplayString = function() {
    return "#<struct" + sc_hash(this) + ">";
};
sc_Struct.prototype.sc_toWriteString = sc_Struct.prototype.sc_toDisplayString;

/*** META ((export #t)
           (peephole (hole 1 "new sc_Struct(" name ")")))
*/
function sc_makeStruct(name) {
    return new sc_Struct(name);
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix " instanceof sc_Struct")))
*/
function sc_isStruct(o) {
    return (o instanceof sc_Struct);
}

/*** META ((export #t)
           (type bool)
           (peephole (hole 2 "(" 1 " instanceof sc_Struct) && ( " 1 ".name === " 0 ")")))
*/
function sc_isStructNamed(name, s) {
    return ((s instanceof sc_Struct) && (s.name === name));
}

/*** META ((export struct-field)
           (peephole (hole 3 0 "[" 2 "]")))
*/
function sc_getStructField(s, name, field) {
    return s[field];
}

/*** META ((export struct-field-set!)
           (peephole (hole 4 0 "[" 2 "] = " 3)))
*/
function sc_setStructFieldBang(s, name, field, val) {
    s[field] = val;
}

/*** META ((export #t)
           (peephole (prefix "~")))
*/
function sc_bitNot(x) {
    return ~x;
}

/*** META ((export #t)
           (peephole (infix 2 2 "&")))
*/
function sc_bitAnd(x, y) {
    return x & y;
}

/*** META ((export #t)
           (peephole (infix 2 2 "|")))
*/
function sc_bitOr(x, y) {
    return x | y;
}

/*** META ((export #t)
           (peephole (infix 2 2 "^")))
*/
function sc_bitXor(x, y) {
    return x ^ y;
}

/*** META ((export #t)
           (peephole (infix 2 2 "<<")))
*/
function sc_bitLsh(x, y) {
    return x << y;
}

/*** META ((export #t)
           (peephole (infix 2 2 ">>")))
*/
function sc_bitRsh(x, y) {
    return x >> y;
}

/*** META ((export #t)
           (peephole (infix 2 2 ">>>")))
*/
function sc_bitUrsh(x, y) {
    return x >>> y;
}

/*** META ((export js-field js-property)
           (peephole (hole 2 o "[" field "]")))
*/
function sc_jsField(o, field) {
    return o[field];
}

/*** META ((export js-field-set! js-property-set!)
           (peephole (hole 3 o "[" field "] = " val)))
*/
function sc_setJsFieldBang(o, field, val) {
    return o[field] = val;
}

/*** META ((export js-field-delete! js-property-delete!)
           (peephole (hole 2 "delete" o "[" field "]")))
*/
function sc_deleteJsFieldBang(o, field) {
    delete o[field];
}

/*** META ((export #t)
           (peephole (jsCall)))
*/
function sc_jsCall(o, fun) {
    var args = new Array();
    for (var i = 2; i < arguments.length; i++)
	args[i-2] = arguments[i];
    return fun.apply(o, args);
}

/*** META ((export #t)
           (peephole (jsMethodCall)))
*/
function sc_jsMethodCall(o, field) {
    var args = new Array();
    for (var i = 2; i < arguments.length; i++)
	args[i-2] = arguments[i];
    return o[field].apply(o, args);
}

/*** META ((export new js-new)
           (peephole (jsNew)))
*/
function sc_jsNew(c) {
    var evalStr = "new c(";
    evalStr +=arguments.length > 1? "arguments[1]": "";
    for (var i = 2; i < arguments.length; i++)
	evalStr += ", arguments[" + i + "]";
    evalStr +=")";
    return eval(evalStr);
}

// ======================== RegExp ====================
/*** META ((export #t)) */
function sc_pregexp(re) {
    return new RegExp(sc_string2jsstring(re));
}

/*** META ((export #t)) */
function sc_pregexpMatch(re, s) {
    var reg = (re instanceof RegExp) ? re : sc_pregexp(re);
    var tmp = reg.exec(sc_string2jsstring(s));

    if (tmp == null) return false;

    var res = null;
    for (var i = tmp.length-1; i >= 0; i--) {
	if (tmp[i] !== null) {
	    res = sc_cons(sc_jsstring2string(tmp[i]), res);
	} else {
	    res = sc_cons(false, res);
	}
    }
    return res;
}

/*** META ((export #t)) */
function sc_pregexpReplace(re, s1, s2) {
   var reg;
   var jss1 = sc_string2jsstring(s1);
   var jss2 = sc_string2jsstring(s2);

   if (re instanceof RegExp) {
       if (re.global)
	   reg = re;
       else
	   reg = new RegExp(re.source);
   } else {
       reg = new RegExp(sc_string2jsstring(re));
   }

   return jss1.replace(reg, jss2);
}

/*** META ((export pregexp-replace*)) */
function sc_pregexpReplaceAll(re, s1, s2) {
   var reg;
   var jss1 = sc_string2jsstring(s1);
   var jss2 = sc_string2jsstring(s2);

   if (re instanceof RegExp) {
      if (re.global)
	  reg = re;
      else
	  reg = new RegExp(re.source, "g");
   } else {
       reg = new RegExp(sc_string2jsstring(re), "g");
   }

   return jss1.replace(reg, jss2);
}

/*** META ((export #t)) */
function sc_pregexpSplit(re, s) {
   var reg = ((re instanceof RegExp) ?
	      re :
	      new RegExp(sc_string2jsstring(re)));
   var jss = sc_string2jsstring(s);
   var tmp = jss.split(reg);

   if (tmp == null) return false;

   return sc_vector2list(tmp);
}


/* =========================================================================== */
/* Other library stuff */
/* =========================================================================== */

/*** META ((export #t)
           (peephole (hole 1 "Math.floor(Math.random()*" 'n ")")))
*/
function sc_random(n) {
    return Math.floor(Math.random()*n);
}

/*** META ((export current-date)
           (peephole (hole 0 "new Date()")))
*/
function sc_currentDate() {
   return new Date();
}

function sc_Hashtable() {
}
sc_Hashtable.prototype.toString = function() {
    return "#{%hashtable}";
};
// sc_toWriteString == sc_toDisplayString == toString

function sc_HashtableElement(key, val) {
    this.key = key;
    this.val = val;
}

/*** META ((export #t)
           (peephole (hole 0 "new sc_Hashtable()")))
*/
function sc_makeHashtable() {
    return new sc_Hashtable();
}

/*** META ((export #t)) */
function sc_hashtablePutBang(ht, key, val) {
    var hash = sc_hash(key);
    ht[hash] = new sc_HashtableElement(key, val);
}

/*** META ((export #t)) */
function sc_hashtableGet(ht, key) {
    var hash = sc_hash(key);
    if (hash in ht)
	return ht[hash].val;
    else
	return false;
}

/*** META ((export #t)) */
function sc_hashtableForEach(ht, f) {
    for (var v in ht) {
	if (ht[v] instanceof sc_HashtableElement)
	    f(ht[v].key, ht[v].val);
    }
}

/*** META ((export hashtable-contains?)
           (peephole (hole 2 "sc_hash(" 1 ") in " 0)))
*/
function sc_hashtableContains(ht, key) {
    var hash = sc_hash(key);
    if (hash in ht)
	return true;
    else
	return false;
}

var SC_HASH_COUNTER = 0;

function sc_hash(o) {
    if (o === null)
	return "null";
    else if (o === undefined)
	return "undefined";
    else if (o === true)
	return "true";
    else if (o === false)
	return "false";
    else if (typeof o === "number")
	return "num-" + o;
    else if (typeof o === "string")
	return "jsstr-" + o;
    else if (o.sc_getHash)
	return o.sc_getHash();
    else
	return sc_counterHash.call(o);
}
function sc_counterHash() {
    if (!this.sc_hash) {
	this.sc_hash = "hash-" + SC_HASH_COUNTER;
	SC_HASH_COUNTER++;
    }
    return this.sc_hash;
}

function sc_Trampoline(args, maxTailCalls) {
    this['__trampoline return__'] = true;
    this.args = args;
    this.MAX_TAIL_CALLs = maxTailCalls;
}
// TODO: call/cc stuff
sc_Trampoline.prototype.restart = function() {
    var o = this;
    while (true) {
	// set both globals.
	SC_TAIL_OBJECT.calls = o.MAX_TAIL_CALLs-1;
	var fun = o.args.callee;
	var res = fun.apply(SC_TAIL_OBJECT, o.args);
	if (res instanceof sc_Trampoline)
	    o = res;
	else
	    return res;
    }
}

/*** META ((export bind-exit-lambda)) */
function sc_bindExitLambda(proc) {
    var escape_obj = new sc_BindExitException();
    var escape = function(res) {
	escape_obj.res = res;
	throw escape_obj;
    };
    try {
	return proc(escape);
    } catch(e) {
	if (e === escape_obj) {
	    return e.res;
	}
	throw e;
    }
}
function sc_BindExitException() {
    this._internalException = true;
}

var SC_SCM2JS_GLOBALS = new Object();

// default tail-call depth.
// normally the program should set it again. but just in case...
var SC_TAIL_OBJECT = new Object();
SC_SCM2JS_GLOBALS.TAIL_OBJECT = SC_TAIL_OBJECT;
// ======================== I/O =======================

/*------------------------------------------------------------------*/

function sc_EOF() {
}
var SC_EOF_OBJECT = new sc_EOF();

function sc_Port() {
}

/* --------------- Input ports -------------------------------------*/

function sc_InputPort() {
}
sc_InputPort.prototype = new sc_Port();

sc_InputPort.prototype.peekChar = function() {
    if (!("peeked" in this))
	this.peeked = this.getNextChar();
    return this.peeked;
}
sc_InputPort.prototype.readChar = function() {
    var tmp = this.peekChar();
    delete this.peeked;
    return tmp;
}
sc_InputPort.prototype.isCharReady = function() {
    return true;
}
sc_InputPort.prototype.close = function() {
    // do nothing
}

/* .............. String port ..........................*/
function sc_ErrorInputPort() {
};
sc_ErrorInputPort.prototype = new sc_InputPort();
sc_ErrorInputPort.prototype.getNextChar = function() {
    throw "can't read from error-port.";
};
sc_ErrorInputPort.prototype.isCharReady = function() {
    return false;
};


/* .............. String port ..........................*/

function sc_StringInputPort(jsStr) {
    // we are going to do some charAts on the str.
    // instead of recreating all the time a String-object, we
    // create one in the beginning. (not sure, if this is really an optim)
    this.str = new String(jsStr);
    this.pos = 0;
}
sc_StringInputPort.prototype = new sc_InputPort();
sc_StringInputPort.prototype.getNextChar = function() {
    if (this.pos >= this.str.length)
	return SC_EOF_OBJECT;
    return this.str.charAt(this.pos++);
};

/* ------------- Read and other lib-funs  -------------------------------*/
function sc_Token(type, val, pos) {
    this.type = type;
    this.val = val;
    this.pos = pos;
}
sc_Token.EOF = 0/*EOF*/;
sc_Token.OPEN_PAR = 1/*OPEN_PAR*/;
sc_Token.CLOSE_PAR = 2/*CLOSE_PAR*/;
sc_Token.OPEN_BRACE = 3/*OPEN_BRACE*/;
sc_Token.CLOSE_BRACE = 4/*CLOSE_BRACE*/;
sc_Token.OPEN_BRACKET = 5/*OPEN_BRACKET*/;
sc_Token.CLOSE_BRACKET = 6/*CLOSE_BRACKET*/;
sc_Token.WHITESPACE = 7/*WHITESPACE*/;
sc_Token.QUOTE = 8/*QUOTE*/;
sc_Token.ID = 9/*ID*/;
sc_Token.DOT = 10/*DOT*/;
sc_Token.STRING = 11/*STRING*/;
sc_Token.NUMBER = 12/*NUMBER*/;
sc_Token.ERROR = 13/*ERROR*/;
sc_Token.VECTOR_BEGIN = 14/*VECTOR_BEGIN*/;
sc_Token.TRUE = 15/*TRUE*/;
sc_Token.FALSE = 16/*FALSE*/;
sc_Token.UNSPECIFIED = 17/*UNSPECIFIED*/;
sc_Token.REFERENCE = 18/*REFERENCE*/;
sc_Token.STORE = 19/*STORE*/;
sc_Token.CHAR = 20/*CHAR*/;

var SC_ID_CLASS = SC_LOWER_CLASS + SC_UPPER_CLASS + "!$%*+-./:<=>?@^_~";
function sc_Tokenizer(port) {
    this.port = port;
}
sc_Tokenizer.prototype.peekToken = function() {
    if (this.peeked)
	return this.peeked;
    var newToken = this.nextToken();
    this.peeked = newToken;
    return newToken;
};
sc_Tokenizer.prototype.readToken = function() {
    var tmp = this.peekToken();
    delete this.peeked;
    return tmp;
};
sc_Tokenizer.prototype.nextToken = function() {
    var port = this.port;

    function isNumberChar(c) {
	return (c >= "0" && c <= "9");
    };
    function isIdOrNumberChar(c) {
	return SC_ID_CLASS.indexOf(c) != -1 || // ID-char
	    (c >= "0" && c <= "9");
    }
    function isWhitespace(c) {
	return c === " " || c === "\r" || c === "\n" || c === "\t" || c === "\f";
    };
    function isWhitespaceOrEOF(c) {
	return isWhitespace(c) || c === SC_EOF_OBJECT;
    };

    function readString() {
	res = "";
	while (true) {
	    var c = port.readChar();
	    switch (c) {
	    case '"':
		return new sc_Token(11/*STRING*/, res);
	    case "\\":
		var tmp = port.readChar();
		switch (tmp) {
		case '0': res += "\0"; break;
		case 'a': res += "\a"; break;
		case 'b': res += "\b"; break;
		case 'f': res += "\f"; break;
		case 'n': res += "\n"; break;
		case 'r': res += "\r"; break;
		case 't': res += "\t"; break;
		case 'v': res += "\v"; break;
		case '"': res += '"'; break;
		case '\\': res += '\\'; break;
		case 'x':
		    /* hexa-number */
		    var nb = 0;
		    while (true) {
			var hexC = port.peekChar();
			if (hexC >= '0' && hexC <= '9') {
			    port.readChar();
			    nb = nb * 16 + hexC.charCodeAt(0) - '0'.charCodeAt(0);
			} else if (hexC >= 'a' && hexC <= 'f') {
			    port.readChar();
			    nb = nb * 16 + hexC.charCodeAt(0) - 'a'.charCodeAt(0);
			} else if (hexC >= 'A' && hexC <= 'F') {
			    port.readChar();
			    nb = nb * 16 + hexC.charCodeAt(0) - 'A'.charCodeAt(0);
			} else {
			    // next char isn't part of hex.
			    res += String.fromCharCode(nb);
			    break;
			}
		    }
		    break;
		default:
		    if (tmp === SC_EOF_OBJECT) {
			return new sc_Token(13/*ERROR*/, "unclosed string-literal" + res);
		    }
		    res += tmp;
		}
		break;
	    default:
		if (c === SC_EOF_OBJECT) {
		    return new sc_Token(13/*ERROR*/, "unclosed string-literal" + res);
		}
		res += c;
	    }
	}
    };
    function readIdOrNumber(firstChar) {
	var res = firstChar;
	while (isIdOrNumberChar(port.peekChar()))
	    res += port.readChar();
	if (isNaN(res))
	    return new sc_Token(9/*ID*/, res);
	else
	    return new sc_Token(12/*NUMBER*/, res - 0);
    };

    function skipWhitespaceAndComments() {
	var done = false;
	while (!done) {
	    done = true;
	    while (isWhitespace(port.peekChar()))
		port.readChar();
	    if (port.peekChar() === ';') {
		port.readChar();
		done = false;
		while (true) {
		    curChar = port.readChar();
		    if (curChar === SC_EOF_OBJECT ||
			curChar === '\n')
			break;
		}
	    }
	}
    };

    function readDot() {
	if (isWhitespace(port.peekChar()))
	    return new sc_Token(10/*DOT*/);
	else
	    return readIdOrNumber(".");
    };

    function readSharp() {
	var c = port.readChar();
	if (isWhitespace(c))
	    return new sc_Token(13/*ERROR*/, "bad #-pattern0.");

	// reference
	if (isNumberChar(c)) {
	    var nb = c - 0;
	    while (isNumberChar(port.peekChar()))
		nb = nb*10 + (port.readChar() - 0);
	    switch (port.readChar()) {
	    case '#':
		return new sc_Token(18/*REFERENCE*/, nb);
	    case '=':
		return new sc_Token(19/*STORE*/, nb);
	    default:
		return new sc_Token(13/*ERROR*/, "bad #-pattern1." + nb);
	    }
	}

	if (c === "(")
	    return new sc_Token(14/*VECTOR_BEGIN*/);
	
	if (c === "\\") { // character
	    var tmp = ""
	    while (!isWhitespaceOrEOF(port.peekChar()))
		tmp += port.readChar();
	    switch (tmp.length) {
	    case 0: // it's escaping a whitespace char:
		if (sc_isEOFObject(port.peekChar))
		    return new sc_Token(13/*ERROR*/, "bad #-pattern2.");
		else
		    return new sc_Token(20/*CHAR*/, port.readChar());
	    case 1:
		return new sc_Token(20/*CHAR*/, tmp);
	    default:
		var entry = sc_Char.readable2char[tmp.toLowerCase()];
		if (entry)
		    return new sc_Token(20/*CHAR*/, entry);
		else
		    return new sc_Token(13/*ERROR*/, "unknown character description: #\\" + tmp);
	    }
	}

	// some constants (#t, #f, #unspecified)
	var res;
	var needing;
	switch (c) {
	case 't': res = new sc_Token(15/*TRUE*/, true); needing = ""; break;
	case 'f': res = new sc_Token(16/*FALSE*/, false); needing = ""; break;
	case 'u': res = new sc_Token(17/*UNSPECIFIED*/, undefined); needing = "nspecified"; break;
	default:
	    return new sc_Token(13/*ERROR*/, "bad #-pattern3: " + c);
	}
	while(true) {
	    c = port.peekChar();
	    if ((isWhitespaceOrEOF(c) || c === ')') &&
		needing == "")
		return res;
	    else if (isWhitespace(c) || needing == "")
		return new sc_Token(13/*ERROR*/, "bad #-pattern4 " + c + " " + needing);
	    else if (needing.charAt(0) == c) {
		port.readChar(); // consume
		needing = needing.slice(1);
	    } else
		return new sc_Token(13/*ERROR*/, "bad #-pattern5");
	}
	
    };

    skipWhitespaceAndComments();
    var curChar = port.readChar();
    if (curChar === SC_EOF_OBJECT)
	return new sc_Token(0/*EOF*/, curChar);
    switch (curChar)
    {
    case " ":
    case "\n":
    case "\t":
	return readWhitespace();
    case "(":
	return new sc_Token(1/*OPEN_PAR*/);
    case ")":
	return new sc_Token(2/*CLOSE_PAR*/);
    case "{":
	return new sc_Token(3/*OPEN_BRACE*/);
    case "}":
	return new sc_Token(4/*CLOSE_BRACE*/);
    case "[":
	return new sc_Token(5/*OPEN_BRACKET*/);
    case "]":
	return new sc_Token(6/*CLOSE_BRACKET*/);
    case "'":
	return new sc_Token(8/*QUOTE*/);
    case "#":
	return readSharp();
    case ".":
	return readDot();
    case '"':
	return readString();
    default:
	if (isIdOrNumberChar(curChar))
	    return readIdOrNumber(curChar);
	throw "unexpected character: " + curChar;
    }
};

function sc_Reader(tokenizer) {
    this.tokenizer = tokenizer;
    this.backref = new Array();
}
sc_Reader.prototype.read = function() {
    function readList(listBeginType) {
	function matchesPeer(open, close) {
	    return open === 1/*OPEN_PAR*/ && close === 2/*CLOSE_PAR*/
	    	|| open === 3/*OPEN_BRACE*/ && close === 4/*CLOSE_BRACE*/
		|| open === 5/*OPEN_BRACKET*/ && close === 6/*CLOSE_BRACKET*/;
	};
	var res = null;

	while (true) {
	    var token = tokenizer.peekToken();

	    switch (token.type) {
	    case 2/*CLOSE_PAR*/:
	    case 4/*CLOSE_BRACE*/:
	    case 6/*CLOSE_BRACKET*/:
		if (matchesPeer(listBeginType, token.type)) {
		    tokenizer.readToken(); // consume token
		    return sc_reverseBang(res);
		} else
		    throw "closing par doesn't match: " + listBeginType
			+ " " + listEndType;

	    case 0/*EOF*/:
		throw "unexpected end of file";

	    case 10/*DOT*/:
		tokenizer.readToken(); // consume token
		var cdr = this.read();
		var par = tokenizer.readToken();
		if (!matchesPeer(listBeginType, par.type))
		    throw "closing par doesn't match: " + listBeginType
			+ " " + par.type;
		else
		    return sc_reverseAppendBang(res, cdr);
		

	    default:
		res = sc_cons(this.read(), res);
	    }
	}
    };
    function readQuote() {
	return sc_cons("quote", sc_cons(this.read(), null));
    };
    function readVector() {
	// opening-parenthesis is already consumed
	var a = new Array();
	while (true) {
	    var token = tokenizer.peekToken();
	    switch (token.type) {
	    case 2/*CLOSE_PAR*/:
		tokenizer.readToken();
		return a;
		
	    default:
		a.push(this.read());
	    }
	}
    };

    function storeRefence(nb) {
	var tmp = this.read();
	this.backref[nb] = tmp;
	return tmp;
    };
	
    function readReference(nb) {
	if (nb in this.backref)
	    return this.backref[nb];
	else
	    throw "bad reference: " + nb;
    };

    var tokenizer = this.tokenizer;

    var token = tokenizer.readToken();

    // handle error
    if (token.type === 13/*ERROR*/)
	throw token.val;

    switch (token.type) {
    case 1/*OPEN_PAR*/:
    case 3/*OPEN_BRACE*/:
    case 5/*OPEN_BRACKET*/:
	return readList.call(this, token.type);
    case 8/*QUOTE*/:
	return readQuote.call(this);
    case 11/*STRING*/:
	return sc_jsstring2string(token.val);
    case 20/*CHAR*/:
	return new sc_Char(token.val);
    case 14/*VECTOR_BEGIN*/:
	return readVector.call(this);
    case 18/*REFERENCE*/:
	return readReference.call(this, token.val);
    case 19/*STORE*/:
	return storeRefence.call(this, token.val);
    case 9/*ID*/:
	return sc_jsstring2symbol(token.val);
    case 0/*EOF*/:
    case 12/*NUMBER*/:
    case 15/*TRUE*/:
    case 16/*FALSE*/:
    case 17/*UNSPECIFIED*/:
	return token.val;
    default:
	throw "unexpected token " + token.type + " " + token.val;
    }
};

/*** META ((export #t)) */
function sc_read(port) {
    if (port === undefined) // we assume the port hasn't been given.
	port = SC_DEFAULT_IN; // THREAD: shared var...
    var reader = new sc_Reader(new sc_Tokenizer(port));
    return reader.read();
}
/*** META ((export #t)) */
function sc_readChar(port) {
    if (port === undefined) // we assume the port hasn't been given.
	port = SC_DEFAULT_IN; // THREAD: shared var...
    var t = port.readChar();
    return t === SC_EOF_OBJECT? t: new sc_Char(t);
}
/*** META ((export #t)) */
function sc_peekChar(port) {
    if (port === undefined) // we assume the port hasn't been given.
	port = SC_DEFAULT_IN; // THREAD: shared var...
    var t = port.peekChar();
    return t === SC_EOF_OBJECT? t: new sc_Char(t);
}
/*** META ((export #t)
           (type bool))
*/
function sc_isCharReady(port) {
    if (port === undefined) // we assume the port hasn't been given.
	port = SC_DEFAULT_IN; // THREAD: shared var...
    return port.isCharReady();
}
/*** META ((export #t)
           (peephole (postfix ".close()")))
*/
function sc_closeInputPort(p) {
    return p.close();
}

/*** META ((export #t)
           (type bool)
           (peephole (postfix " instanceof sc_InputPort")))
*/
function sc_isInputPort(o) {
    return (o instanceof sc_InputPort);
}

/*** META ((export eof-object?)
           (type bool)
           (peephole (postfix " === SC_EOF_OBJECT")))
*/
function sc_isEOFObject(o) {
    return o === SC_EOF_OBJECT;
}

/*** META ((export #t)
           (peephole (hole 0 "SC_DEFAULT_IN")))
*/
function sc_currentInputPort() {
    return SC_DEFAULT_IN;
}

/* ------------ file operations are not supported -----------*/
/*** META ((export #t)) */
function sc_callWithInputFile(s, proc) {
    throw "can't open " + s;
}

/*** META ((export #t)) */
function sc_callWithOutputFile(s, proc) {
    throw "can't open " + s;
}

/*** META ((export #t)) */
function sc_withInputFromFile(s, thunk) {
    throw "can't open " + s;
}

/*** META ((export #t)) */
function sc_withOutputToFile(s, thunk) {
    throw "can't open " + s;
}

/*** META ((export #t)) */
function sc_openInputFile(s) {
    throw "can't open " + s;
}

/*** META ((export #t)) */
function sc_openOutputFile(s) {
    throw "can't open " + s;
}

/* ----------------------------------------------------------------------------*/
/*** META ((export #t)) */
function sc_basename(p) {
   var i = p.lastIndexOf('/');

   if(i >= 0)
      return p.substring(i + 1, p.length);
   else
      return '';
}

/*** META ((export #t)) */
function sc_dirname(p) {
   var i = p.lastIndexOf('/');

   if(i >= 0)
      return p.substring(0, i);
   else
      return '';
}

/* ----------------------------------------------------------------------------*/

/*** META ((export #t)) */
function sc_withInputFromPort(p, thunk) {
    try {
	var tmp = SC_DEFAULT_IN; // THREAD: shared var.
	SC_DEFAULT_IN = p;
	return thunk();
    } finally {
	SC_DEFAULT_IN = tmp;
    }
}

/*** META ((export #t)) */
function sc_withInputFromString(s, thunk) {
    return sc_withInputFromPort(new sc_StringInputPort(sc_string2jsstring(s)), thunk);
}

/*** META ((export #t)) */
function sc_withOutputToPort(p, thunk) {
    try {
	var tmp = SC_DEFAULT_OUT; // THREAD: shared var.
	SC_DEFAULT_OUT = p;
	return thunk();
    } finally {
	SC_DEFAULT_OUT = tmp;
    }
}

/*** META ((export #t)) */
function sc_withOutputToString(thunk) {
    var p = new sc_StringOutputPort();
    sc_withOutputToPort(p, thunk);
    return p.close();
}

/*** META ((export #t)) */
function sc_withOutputToProcedure(proc, thunk) {
    var t = function(s) { proc(sc_jsstring2string(s)); };
    return sc_withOutputToPort(new sc_GenericOutputPort(t), thunk);
}

/*** META ((export #t)
           (peephole (hole 0 "new sc_StringOutputPort()")))
*/
function sc_openOutputString() {
    return new sc_StringOutputPort();
}

/*** META ((export #t)) */
function sc_openInputString(str) {
    return new sc_StringInputPort(sc_string2jsstring(str));
}

/* ----------------------------------------------------------------------------*/

function sc_OutputPort() {
}
sc_OutputPort.prototype = new sc_Port();
sc_OutputPort.prototype.appendJSString = function(obj) {
    /* do nothing */
}
sc_OutputPort.prototype.close = function() {
    /* do nothing */
}

function sc_StringOutputPort() {
    this.res = "";
}
sc_StringOutputPort.prototype = new sc_OutputPort();
sc_StringOutputPort.prototype.appendJSString = function(s) {
    this.res += s;
}
sc_StringOutputPort.prototype.close = function() {
    return sc_jsstring2string(this.res);
}

/*** META ((export #t)) */
function sc_getOutputString(sp) {
    return sc_jsstring2string(sp.res);
}


function sc_ErrorOutputPort() {
}
sc_ErrorOutputPort.prototype = new sc_OutputPort();
sc_ErrorOutputPort.prototype.appendJSString = function(s) {
    throw "don't write on ErrorPort!";
}
sc_ErrorOutputPort.prototype.close = function() {
    /* do nothing */
}

function sc_GenericOutputPort(appendJSString, close) {
    this.appendJSString = appendJSString;
    if (close)
	this.close = close;
}
sc_GenericOutputPort.prototype = new sc_OutputPort();

/*** META ((export #t)
           (type bool)
           (peephole (postfix " instanceof sc_OutputPort")))
*/
function sc_isOutputPort(o) {
    return (o instanceof sc_OutputPort);
}

/*** META ((export #t)
           (peephole (postfix ".close()")))
*/
function sc_closeOutputPort(p) {
    return p.close();
}

/* ------------------ write ---------------------------------------------------*/

/*** META ((export #t)) */
function sc_write(o, p) {
    if (p === undefined) // we assume not given
	p = SC_DEFAULT_OUT;
    p.appendJSString(sc_toWriteString(o));
}

function sc_toWriteString(o) {
    if (o === null)
	return "()";
    else if (o === true)
	return "#t";
    else if (o === false)
	return "#f";
    else if (o === undefined)
	return "#unspecified";
    else if (typeof o === 'function')
	return "#<procedure " + sc_hash(o) + ">";
    else if (o.sc_toWriteString)
	return o.sc_toWriteString();
    else
	return o.toString();
}

function sc_escapeWriteString(s) {
    var res = "";
    var j = 0;
    for (i = 0; i < s.length; i++) {
	switch (s.charAt(i)) {
	case "\0": res += s.substring(j, i) + "\\0"; j = i + 1; break;
	case "\b": res += s.substring(j, i) + "\\b"; j = i + 1; break;
	case "\f": res += s.substring(j, i) + "\\f"; j = i + 1; break;
	case "\n": res += s.substring(j, i) + "\\n"; j = i + 1; break;
	case "\r": res += s.substring(j, i) + "\\r"; j = i + 1; break;
	case "\t": res += s.substring(j, i) + "\\t"; j = i + 1; break;
	case "\v": res += s.substring(j, i) + "\\v"; j = i + 1; break;
	case '"': res += s.substring(j, i) + '\\"'; j = i + 1; break;
	case "\\": res += s.substring(j, i) + "\\\\"; j = i + 1; break;
	default:
	    var c = s.charAt(i);
	    if ("\a" !== "a" && c == "\a") {
		res += s.substring(j, i) + "\\a"; j = i + 1; continue;
	    }
	    if ("\v" !== "v" && c == "\v") {
		res += s.substring(j, i) + "\\v"; j = i + 1; continue;
	    }
	    //if (s.charAt(i) < ' ' || s.charCodeAt(i) > 127) {
	    // CARE: Manuel is this OK with HOP?
	    if (s.charAt(i) < ' ') {
		/* non printable character and special chars */
		res += s.substring(j, i) + "\\x" + s.charCodeAt(i).toString(16);
		j = i + 1;
	    }
	    // else just let i increase...
	}
    }
    res += s.substring(j, i);
    return res;
}

/* ------------------ display ---------------------------------------------------*/

/*** META ((export #t)) */
function sc_display(o, p) {
    if (p === undefined) // we assume not given
	p = SC_DEFAULT_OUT;
    p.appendJSString(sc_toDisplayString(o));
}

function sc_toDisplayString(o) {
    if (o === null)
	return "()";
    else if (o === true)
	return "#t";
    else if (o === false)
	return "#f";
    else if (o === undefined)
	return "#unspecified";
    else if (typeof o === 'function')
	return "#<procedure " + sc_hash(o) + ">";
    else if (o.sc_toDisplayString)
	return o.sc_toDisplayString();
    else
	return o.toString();
}

/* ------------------ newline ---------------------------------------------------*/

/*** META ((export #t)) */
function sc_newline(p) {
    if (p === undefined) // we assume not given
	p = SC_DEFAULT_OUT;
    p.appendJSString("\n");
}

/* ------------------ write-char ---------------------------------------------------*/

/*** META ((export #t)) */
function sc_writeChar(c, p) {
    if (p === undefined) // we assume not given
	p = SC_DEFAULT_OUT;
    p.appendJSString(c.val);
}

/* ------------------ write-circle ---------------------------------------------------*/

/*** META ((export #t)) */
function sc_writeCircle(o, p) {
    if (p === undefined) // we assume not given
	p = SC_DEFAULT_OUT;
    p.appendJSString(sc_toWriteCircleString(o));
}

function sc_toWriteCircleString(o) {
    var symb = sc_gensym("writeCircle");
    var nbPointer = new Object();
    nbPointer.nb = 0;
    sc_prepWriteCircle(o, symb, nbPointer);
    return sc_genToWriteCircleString(o, symb);
}

function sc_prepWriteCircle(o, symb, nbPointer) {
    // TODO sc_Struct
    if (o instanceof sc_Pair ||
	o instanceof sc_Vector) {
	if (o[symb] !== undefined) {
	    // not the first visit.
	    o[symb]++;
	    // unless there is already a number, assign one.
	    if (!o[symb + "nb"]) o[symb + "nb"] = nbPointer.nb++;
	    return;
	}
	o[symb] = 0;
	if (o instanceof sc_Pair) {
	    sc_prepWriteCircle(o.car, symb, nbPointer);
	    sc_prepWriteCircle(o.cdr, symb, nbPointer);
	} else {
	    for (var i = 0; i < o.length; i++)
		sc_prepWriteCircle(o[i], symb, nbPointer);
	}
    }
}

function sc_genToWriteCircleString(o, symb) {
    if (!(o instanceof sc_Pair ||
	  o instanceof sc_Vector))
	return sc_toWriteString(o);
    return o.sc_toWriteCircleString(symb);
}
sc_Pair.prototype.sc_toWriteCircleString = function(symb, inList) {
    if (this[symb + "use"]) { // use-flag is set. Just use it.
	var nb = this[symb + "nb"];
	if (this[symb]-- === 0) { // if we are the last use. remove all fields.
	    delete this[symb];
	    delete this[symb + "nb"];
	    delete this[symb + "use"];
	}
	if (inList)
	    return '. #' + nb + '#';
	else
	    return '#' + nb + '#';
    }
    if (this[symb]-- === 0) { // if we are the last use. remove all fields.
	delete this[symb];
	delete this[symb + "nb"];
	delete this[symb + "use"];
    }

    var res = "";

    if (this[symb] !== undefined) { // implies > 0
	this[symb + "use"] = true;
	if (inList)
	    res += '. #' + this[symb + "nb"] + '=';
	else
	    res += '#' + this[symb + "nb"] + '=';
	inList = false;
    }

    if (!inList)
	res += "(";

    // print car
    res += sc_genToWriteCircleString(this.car, symb);

    if (sc_isPair(this.cdr)) {
	res += " " + this.cdr.sc_toWriteCircleString(symb, true);
    } else if (this.cdr !== null) {
	res += " . " + sc_genToWriteCircleString(this.cdr, symb);
    }
    if (!inList)
	res += ")";
    return res;
};
sc_Vector.prototype.sc_toWriteCircleString = function(symb) {
    if (this[symb + "use"]) { // use-flag is set. Just use it.
	var nb = this[symb + "nb"];
	if (this[symb]-- === 0) { // if we are the last use. remove all fields.
	    delete this[symb];
	    delete this[symb + "nb"];
	    delete this[symb + "use"];
	}
	return '#' + nb + '#';
    }
    if (this[symb]-- === 0) { // if we are the last use. remove all fields.
	delete this[symb];
	delete this[symb + "nb"];
	delete this[symb + "use"];
    }

    var res = "";
    if (this[symb] !== undefined) { // implies > 0
	this[symb + "use"] = true;
	res += '#' + this[symb + "nb"] + '=';
    }
    res += "#(";
    for (var i = 0; i < this.length; i++) {
	res += sc_genToWriteCircleString(this[i], symb);
	if (i < this.length - 1) res += " ";
    }
    res += ")";
    return res;
};


/* ------------------ print ---------------------------------------------------*/

/*** META ((export #t)) */
function sc_print(s) {
    if (arguments.length === 1) {
	sc_display(s);
	sc_newline();
    }
    else {
	for (var i = 0; i < arguments.length; i++)
	    sc_display(arguments[i]);
	sc_newline();
    }
}

/* ------------------ format ---------------------------------------------------*/
/*** META ((export #t)) */
function sc_format(s, args) {
   var len = s.length;
   var p = new sc_StringOutputPort();
   var i = 0, j = 1;

   while( i < len ) {
      var i2 = s.indexOf("~", i);

      if (i2 == -1) {
	  p.appendJSString( s.substring( i, len ) );
	  return p.close();
      } else {
	 if (i2 > i) {
	    if (i2 == (len - 1)) {
		p.appendJSString(s.substring(i, len));
		return p.close();
	    } else {
	       p.appendJSString(s.substring(i, i2));
	       i = i2;
	    }
	 }

	 switch(s.charCodeAt(i2 + 1)) {
	    case 65:
	    case 97:
	       // a
	       sc_display(arguments[j], p);
	       i += 2; j++;
	       break;

	    case 83:
	    case 115:
	       // s
	       sc_write(arguments[j], p);
	       i += 2; j++;
	       break;

	    case 86:
	    case 118:
	       // v
	       sc_display(arguments[j], p);
	       p.appendJSString("\n");
	       i += 2; j++;
	       break;

	    case 67:
	    case 99:
	       // c
	       p.appendJSString(String.fromCharCode(arguments[j]));
	       i += 2; j++;
	       break;

	    case 88:
	    case 120:
	       // x
	       p.appendJSString(arguments[j].toString(6));
	       i += 2; j++;
	       break;

	    case 79:
	    case 111:
	       // o
	       p.appendJSString(arguments[j].toString(8));
	       i += 2; j++;
	       break;

	    case 66:
	    case 98:
	       // b
	       p.appendJSString(arguments[j].toString(2));
	       i += 2; j++;
	       break;

	    case 37:
	    case 110:
	       // %, n
	       p.appendJSString("\n");
	       i += 2; break;

	    case 114:
	       // r
	       p.appendJSString("\r");
	       i += 2; break;

	    case 126:
	       // ~
	       p.appendJSString("~");
	       i += 2; break;

	    default:
	       sc_error( "format: illegal ~"
			 + String.fromCharCode(s.charCodeAt(i2 + 1))
			 + " sequence" );
	       return "";
	 }
      }
   }

   return p.close();
}

/* ------------------ global ports ---------------------------------------------------*/

var SC_DEFAULT_IN = new sc_ErrorInputPort();
var SC_DEFAULT_OUT = new sc_ErrorOutputPort();
var SC_ERROR_OUT = new sc_ErrorOutputPort();

var sc_SYMBOL_PREFIX = "\u1E9C";
var sc_KEYWORD_PREFIX = "\u1E9D";

/*** META ((export #t)
           (peephole (id))) */
function sc_jsstring2string(s) {
    return s;
}

/*** META ((export #t)
           (peephole (prefix "'\\u1E9C' +")))
*/
function sc_jsstring2symbol(s) {
    return sc_SYMBOL_PREFIX + s;
}

/*** META ((export #t)
           (peephole (id)))
*/
function sc_string2jsstring(s) {
    return s;
}

/*** META ((export #t)
           (peephole (symbol2jsstring_immutable)))
*/
function sc_symbol2jsstring(s) {
    return s.slice(1);
}

/*** META ((export #t)
           (peephole (postfix ".slice(1)")))
*/
function sc_keyword2jsstring(k) {
    return k.slice(1);
}

/*** META ((export #t)
           (peephole (prefix "'\\u1E9D' +")))
*/
function sc_jsstring2keyword(s) {
    return sc_KEYWORD_PREFIX + s;
}

/*** META ((export #t)
           (type bool))
*/
function sc_isKeyword(s) {
    return (typeof s === "string") &&
	(s.charAt(0) === sc_KEYWORD_PREFIX);
}


/*** META ((export #t)) */
var sc_gensym = function() {
    var counter = 1000;
    return function(sym) {
	counter++;
	if (!sym) sym = sc_SYMBOL_PREFIX;
	return sym + "s" + counter + "~" + "^sC-GeNsYm ";
    };
}();


/*** META ((export #t)
           (type bool))
*/
function sc_isEqual(o1, o2) {
    return ((o1 === o2) ||
	    (sc_isPair(o1) && sc_isPair(o2)
	     && sc_isPairEqual(o1, o2, sc_isEqual)) ||
	    (sc_isVector(o1) && sc_isVector(o2)
	     && sc_isVectorEqual(o1, o2, sc_isEqual)));
}

/*** META ((export number->symbol integer->symbol)) */
function sc_number2symbol(x, radix) {
    return sc_SYMBOL_PREFIX + sc_number2jsstring(x, radix);
}

/*** META ((export number->string integer->string)) */
var sc_number2string = sc_number2jsstring;

/*** META ((export #t)) */
function sc_symbol2number(s, radix) {
    return sc_jsstring2number(s.slice(1), radix);
}

/*** META ((export #t)) */
var sc_string2number = sc_jsstring2number;

/*** META ((export #t)
           (peephole (prefix "+" s)))
           ;; peephole will only apply if no radix is given.
*/
function sc_string2integer(s, radix) {
    if (!radix) return +s;
    return parseInt(s, radix);
}

/*** META ((export #t)
           (peephole (prefix "+")))
*/
function sc_string2real(s) {
    return +s;
}


/*** META ((export #t)
           (type bool))
*/
function sc_isSymbol(s) {
    return (typeof s === "string") &&
	(s.charAt(0) === sc_SYMBOL_PREFIX);
}

/*** META ((export #t)
           (peephole (symbol2string_immutable)))
*/
function sc_symbol2string(s) {
    return s.slice(1);
}

/*** META ((export #t)
           (peephole (prefix "'\\u1E9C' +")))
*/
function sc_string2symbol(s) {
    return sc_SYMBOL_PREFIX + s;
}

/*** META ((export symbol-append)
           (peephole (symbolAppend_immutable)))
*/
function sc_symbolAppend() {
    var res = sc_SYMBOL_PREFIX;
    for (var i = 0; i < arguments.length; i++)
	res += arguments[i].slice(1);
    return res;
}

/*** META ((export #t)
           (peephole (postfix ".val")))
*/
function sc_char2string(c) { return c.val; }

/*** META ((export #t)
           (peephole (hole 1 "'\\u1E9C' + " c ".val")))
*/
function sc_char2symbol(c) { return sc_SYMBOL_PREFIX + c.val; }

/*** META ((export #t)
           (type bool))
*/
function sc_isString(s) {
    return (typeof s === "string") &&
	(s.charAt(0) !== sc_SYMBOL_PREFIX);
}

/*** META ((export #t)) */
var sc_makeString = sc_makejsString;


/*** META ((export #t)) */
function sc_string() {
    for (var i = 0; i < arguments.length; i++)
	arguments[i] = arguments[i].val;
    return "".concat.apply("", arguments);
}

/*** META ((export #t)
           (peephole (postfix ".length")))
*/
function sc_stringLength(s) { return s.length; }

/*** META ((export #t)) */
function sc_stringRef(s, k) {
    return new sc_Char(s.charAt(k));
}

/* there's no stringSet in the immutable version
function sc_stringSet(s, k, c)
*/


/*** META ((export string=?)
	   (type bool)
           (peephole (hole 2 str1 " === " str2)))
*/
function sc_isStringEqual(s1, s2) {
    return s1 === s2;
}
/*** META ((export string<?)
	   (type bool)
           (peephole (hole 2 str1 " < " str2)))
*/
function sc_isStringLess(s1, s2) {
    return s1 < s2;
}
/*** META ((export string>?)
	   (type bool)
           (peephole (hole 2 str1 " > " str2)))
*/
function sc_isStringGreater(s1, s2) {
    return s1 > s2;
}
/*** META ((export string<=?)
	   (type bool)
           (peephole (hole 2 str1 " <= " str2)))
*/
function sc_isStringLessEqual(s1, s2) {
    return s1 <= s2;
}
/*** META ((export string>=?)
	   (type bool)
           (peephole (hole 2 str1 " >= " str2)))
*/
function sc_isStringGreaterEqual(s1, s2) {
    return s1 >= s2;
}
/*** META ((export string-ci=?)
	   (type bool)
           (peephole (hole 2 str1 ".toLowerCase() === " str2 ".toLowerCase()")))
*/
function sc_isStringCIEqual(s1, s2) {
    return s1.toLowerCase() === s2.toLowerCase();
}
/*** META ((export string-ci<?)
	   (type bool)
           (peephole (hole 2 str1 ".toLowerCase() < " str2 ".toLowerCase()")))
*/
function sc_isStringCILess(s1, s2) {
    return s1.toLowerCase() < s2.toLowerCase();
}
/*** META ((export string-ci>?)
	   (type bool)
           (peephole (hole 2 str1 ".toLowerCase() > " str2 ".toLowerCase()")))
*/
function sc_isStringCIGreater(s1, s2) {
    return s1.toLowerCase() > s2.toLowerCase();
}
/*** META ((export string-ci<=?)
	   (type bool)
           (peephole (hole 2 str1 ".toLowerCase() <= " str2 ".toLowerCase()")))
*/
function sc_isStringCILessEqual(s1, s2) {
    return s1.toLowerCase() <= s2.toLowerCase();
}
/*** META ((export string-ci>=?)
	   (type bool)
           (peephole (hole 2 str1 ".toLowerCase() >= " str2 ".toLowerCase()")))
*/
function sc_isStringCIGreaterEqual(s1, s2) {
    return s1.toLowerCase() >= s2.toLowerCase();
}

/*** META ((export #t)
           (peephole (hole 3 s ".substring(" start ", " end ")")))
*/
function sc_substring(s, start, end) {
    return s.substring(start, end);
}

/*** META ((export #t))
*/
function sc_isSubstring_at(s1, s2, i) {
    return s2 == s1.substring(i, i+ s2.length);
}

/*** META ((export #t)
           (peephole (infix 0 #f "+" "''")))
*/
function sc_stringAppend() {
    return "".concat.apply("", arguments);
}

/*** META ((export #t)) */
var sc_string2list = sc_jsstring2list;

/*** META ((export #t)) */
var sc_list2string = sc_list2jsstring;

/*** META ((export #t)
           (peephole (id)))
*/
function sc_stringCopy(s) {
    return s;
}

/* there's no string-fill in the immutable version
function sc_stringFill(s, c)
*/

/*** META ((export #t)
           (peephole (postfix ".slice(1)")))
*/
function sc_keyword2string(o) {
    return o.slice(1);
}

/*** META ((export #t)
           (peephole (prefix "'\\u1E9D' +")))
*/
function sc_string2keyword(o) {
    return sc_KEYWORD_PREFIX + o;
}

String.prototype.sc_toDisplayString = function() {
    if (this.charAt(0) === sc_SYMBOL_PREFIX)
	// TODO: care for symbols with spaces (escape-chars symbols).
	return this.slice(1);
    else if (this.charAt(0) === sc_KEYWORD_PREFIX)
	return ":" + this.slice(1);
    else
	return this.toString();
};

String.prototype.sc_toWriteString = function() {
    if (this.charAt(0) === sc_SYMBOL_PREFIX)
	// TODO: care for symbols with spaces (escape-chars symbols).
	return this.slice(1);
    else if (this.charAt(0) === sc_KEYWORD_PREFIX)
	return ":" + this.slice(1);
    else
	return '"' + sc_escapeWriteString(this) + '"';
};
/* Exported Variables */
var BgL_testzd2boyerzd2;
var BgL_nboyerzd2benchmarkzd2;
var BgL_setupzd2boyerzd2;
/* End Exports */

var translate_term_nboyer;
var translate_args_nboyer;
var untranslate_term_nboyer;
var BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer;
var BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer;
var translate_alist_nboyer;
var apply_subst_nboyer;
var apply_subst_lst_nboyer;
var tautologyp_nboyer;
var if_constructor_nboyer;
var rewrite_count_nboyer;
var rewrite_nboyer;
var rewrite_args_nboyer;
var unify_subst_nboyer;
var one_way_unify1_nboyer;
var false_term_nboyer;
var true_term_nboyer;
var trans_of_implies1_nboyer;
var is_term_equal_nboyer;
var is_term_member_nboyer;
var const_nboyer;
var sc_const_3_nboyer;
var sc_const_4_nboyer;
{
    (sc_const_4_nboyer = (new sc_Pair("\u1E9Cimplies",(new sc_Pair((new sc_Pair("\u1E9Cand",(new sc_Pair((new sc_Pair("\u1E9Cimplies",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cand",(new sc_Pair((new sc_Pair("\u1E9Cimplies",(new sc_Pair("\u1E9Cy",(new sc_Pair("\u1E9Cz",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cand",(new sc_Pair((new sc_Pair("\u1E9Cimplies",(new sc_Pair("\u1E9Cz",(new sc_Pair("\u1E9Cu",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cimplies",(new sc_Pair("\u1E9Cu",(new sc_Pair("\u1E9Cw",null)))))),null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cimplies",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cw",null)))))),null)))))));
    (sc_const_3_nboyer = sc_list((new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Ccompile",(new sc_Pair("\u1E9Cform",null)))),(new sc_Pair((new sc_Pair("\u1E9Creverse",(new sc_Pair((new sc_Pair("\u1E9Ccodegen",(new sc_Pair((new sc_Pair("\u1E9Coptimize",(new sc_Pair("\u1E9Cform",null)))),(new sc_Pair((new sc_Pair("\u1E9Cnil",null)),null)))))),null)))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Ceqp",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cfix",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair((new sc_Pair("\u1E9Cfix",(new sc_Pair("\u1E9Cy",null)))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cgreaterp",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Clessp",(new sc_Pair("\u1E9Cy",(new sc_Pair("\u1E9Cx",null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Clesseqp",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cnot",(new sc_Pair((new sc_Pair("\u1E9Clessp",(new sc_Pair("\u1E9Cy",(new sc_Pair("\u1E9Cx",null)))))),null)))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cgreatereqp",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cnot",(new sc_Pair((new sc_Pair("\u1E9Clessp",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),null)))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cboolean",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair((new sc_Pair("\u1E9Cor",(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Ct",null)),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Cf",null)),null)))))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Ciff",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cand",(new sc_Pair((new sc_Pair("\u1E9Cimplies",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cimplies",(new sc_Pair("\u1E9Cy",(new sc_Pair("\u1E9Cx",null)))))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Ceven1",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair((new sc_Pair("\u1E9Czerop",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair((new sc_Pair("\u1E9Ct",null)),(new sc_Pair((new sc_Pair("\u1E9Codd",(new sc_Pair((new sc_Pair("\u1E9Csub1",(new sc_Pair("\u1E9Cx",null)))),null)))),null)))))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Ccountps-",(new sc_Pair("\u1E9Cl",(new sc_Pair("\u1E9Cpred",null)))))),(new sc_Pair((new sc_Pair("\u1E9Ccountps-loop",(new sc_Pair("\u1E9Cl",(new sc_Pair("\u1E9Cpred",(new sc_Pair((new sc_Pair("\u1E9Czero",null)),null)))))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cfact-",(new sc_Pair("\u1E9Ci",null)))),(new sc_Pair((new sc_Pair("\u1E9Cfact-loop",(new sc_Pair("\u1E9Ci",(new sc_Pair((1),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Creverse-",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair((new sc_Pair("\u1E9Creverse-loop",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Cnil",null)),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cdivides",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Czerop",(new sc_Pair((new sc_Pair("\u1E9Cremainder",(new sc_Pair("\u1E9Cy",(new sc_Pair("\u1E9Cx",null)))))),null)))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cassume-true",(new sc_Pair("\u1E9Cvar",(new sc_Pair("\u1E9Calist",null)))))),(new sc_Pair((new sc_Pair("\u1E9Ccons",(new sc_Pair((new sc_Pair("\u1E9Ccons",(new sc_Pair("\u1E9Cvar",(new sc_Pair((new sc_Pair("\u1E9Ct",null)),null)))))),(new sc_Pair("\u1E9Calist",null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cassume-false",(new sc_Pair("\u1E9Cvar",(new sc_Pair("\u1E9Calist",null)))))),(new sc_Pair((new sc_Pair("\u1E9Ccons",(new sc_Pair((new sc_Pair("\u1E9Ccons",(new sc_Pair("\u1E9Cvar",(new sc_Pair((new sc_Pair("\u1E9Cf",null)),null)))))),(new sc_Pair("\u1E9Calist",null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Ctautology-checker",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair((new sc_Pair("\u1E9Ctautologyp",(new sc_Pair((new sc_Pair("\u1E9Cnormalize",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair((new sc_Pair("\u1E9Cnil",null)),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cfalsify",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair((new sc_Pair("\u1E9Cfalsify1",(new sc_Pair((new sc_Pair("\u1E9Cnormalize",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair((new sc_Pair("\u1E9Cnil",null)),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cprime",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair((new sc_Pair("\u1E9Cand",(new sc_Pair((new sc_Pair("\u1E9Cnot",(new sc_Pair((new sc_Pair("\u1E9Czerop",(new sc_Pair("\u1E9Cx",null)))),null)))),(new sc_Pair((new sc_Pair("\u1E9Cnot",(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Cadd1",(new sc_Pair((new sc_Pair("\u1E9Czero",null)),null)))),null)))))),null)))),(new sc_Pair((new sc_Pair("\u1E9Cprime1",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Csub1",(new sc_Pair("\u1E9Cx",null)))),null)))))),null)))))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cand",(new sc_Pair("\u1E9Cp",(new sc_Pair("\u1E9Cq",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair("\u1E9Cp",(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair("\u1E9Cq",(new sc_Pair((new sc_Pair("\u1E9Ct",null)),(new sc_Pair((new sc_Pair("\u1E9Cf",null)),null)))))))),(new sc_Pair((new sc_Pair("\u1E9Cf",null)),null)))))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cor",(new sc_Pair("\u1E9Cp",(new sc_Pair("\u1E9Cq",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair("\u1E9Cp",(new sc_Pair((new sc_Pair("\u1E9Ct",null)),(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair("\u1E9Cq",(new sc_Pair((new sc_Pair("\u1E9Ct",null)),(new sc_Pair((new sc_Pair("\u1E9Cf",null)),null)))))))),null)))))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cnot",(new sc_Pair("\u1E9Cp",null)))),(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair("\u1E9Cp",(new sc_Pair((new sc_Pair("\u1E9Cf",null)),(new sc_Pair((new sc_Pair("\u1E9Ct",null)),null)))))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cimplies",(new sc_Pair("\u1E9Cp",(new sc_Pair("\u1E9Cq",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair("\u1E9Cp",(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair("\u1E9Cq",(new sc_Pair((new sc_Pair("\u1E9Ct",null)),(new sc_Pair((new sc_Pair("\u1E9Cf",null)),null)))))))),(new sc_Pair((new sc_Pair("\u1E9Ct",null)),null)))))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cfix",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair((new sc_Pair("\u1E9Cnumberp",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Czero",null)),null)))))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair("\u1E9Ca",(new sc_Pair("\u1E9Cb",(new sc_Pair("\u1E9Cc",null)))))))),(new sc_Pair("\u1E9Cd",(new sc_Pair("\u1E9Ce",null)))))))),(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair("\u1E9Ca",(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair("\u1E9Cb",(new sc_Pair("\u1E9Cd",(new sc_Pair("\u1E9Ce",null)))))))),(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair("\u1E9Cc",(new sc_Pair("\u1E9Cd",(new sc_Pair("\u1E9Ce",null)))))))),null)))))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Czerop",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair((new sc_Pair("\u1E9Cor",(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Czero",null)),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cnot",(new sc_Pair((new sc_Pair("\u1E9Cnumberp",(new sc_Pair("\u1E9Cx",null)))),null)))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair("\u1E9Cz",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Cy",(new sc_Pair("\u1E9Cz",null)))))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Ca",(new sc_Pair("\u1E9Cb",null)))))),(new sc_Pair((new sc_Pair("\u1E9Czero",null)),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cand",(new sc_Pair((new sc_Pair("\u1E9Czerop",(new sc_Pair("\u1E9Ca",null)))),(new sc_Pair((new sc_Pair("\u1E9Czerop",(new sc_Pair("\u1E9Cb",null)))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cdifference",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cx",null)))))),(new sc_Pair((new sc_Pair("\u1E9Czero",null)),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Ca",(new sc_Pair("\u1E9Cb",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Ca",(new sc_Pair("\u1E9Cc",null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cfix",(new sc_Pair("\u1E9Cb",null)))),(new sc_Pair((new sc_Pair("\u1E9Cfix",(new sc_Pair("\u1E9Cc",null)))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Czero",null)),(new sc_Pair((new sc_Pair("\u1E9Cdifference",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cnot",(new sc_Pair((new sc_Pair("\u1E9Clessp",(new sc_Pair("\u1E9Cy",(new sc_Pair("\u1E9Cx",null)))))),null)))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Cdifference",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cand",(new sc_Pair((new sc_Pair("\u1E9Cnumberp",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair((new sc_Pair("\u1E9Cor",(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Czero",null)),null)))))),(new sc_Pair((new sc_Pair("\u1E9Czerop",(new sc_Pair("\u1E9Cy",null)))),null)))))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cmeaning",(new sc_Pair((new sc_Pair("\u1E9Cplus-tree",(new sc_Pair((new sc_Pair("\u1E9Cappend",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),null)))),(new sc_Pair("\u1E9Ca",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair((new sc_Pair("\u1E9Cmeaning",(new sc_Pair((new sc_Pair("\u1E9Cplus-tree",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair("\u1E9Ca",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cmeaning",(new sc_Pair((new sc_Pair("\u1E9Cplus-tree",(new sc_Pair("\u1E9Cy",null)))),(new sc_Pair("\u1E9Ca",null)))))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cmeaning",(new sc_Pair((new sc_Pair("\u1E9Cplus-tree",(new sc_Pair((new sc_Pair("\u1E9Cplus-fringe",(new sc_Pair("\u1E9Cx",null)))),null)))),(new sc_Pair("\u1E9Ca",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cfix",(new sc_Pair((new sc_Pair("\u1E9Cmeaning",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Ca",null)))))),null)))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cappend",(new sc_Pair((new sc_Pair("\u1E9Cappend",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair("\u1E9Cz",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cappend",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Cappend",(new sc_Pair("\u1E9Cy",(new sc_Pair("\u1E9Cz",null)))))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Creverse",(new sc_Pair((new sc_Pair("\u1E9Cappend",(new sc_Pair("\u1E9Ca",(new sc_Pair("\u1E9Cb",null)))))),null)))),(new sc_Pair((new sc_Pair("\u1E9Cappend",(new sc_Pair((new sc_Pair("\u1E9Creverse",(new sc_Pair("\u1E9Cb",null)))),(new sc_Pair((new sc_Pair("\u1E9Creverse",(new sc_Pair("\u1E9Ca",null)))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Cy",(new sc_Pair("\u1E9Cz",null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cz",null)))))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair("\u1E9Cz",null)))))),(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Cy",(new sc_Pair("\u1E9Cz",null)))))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Czero",null)),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cor",(new sc_Pair((new sc_Pair("\u1E9Czerop",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair((new sc_Pair("\u1E9Czerop",(new sc_Pair("\u1E9Cy",null)))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cexec",(new sc_Pair((new sc_Pair("\u1E9Cappend",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair("\u1E9Cpds",(new sc_Pair("\u1E9Cenvrn",null)))))))),(new sc_Pair((new sc_Pair("\u1E9Cexec",(new sc_Pair("\u1E9Cy",(new sc_Pair((new sc_Pair("\u1E9Cexec",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cpds",(new sc_Pair("\u1E9Cenvrn",null)))))))),(new sc_Pair("\u1E9Cenvrn",null)))))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cmc-flatten",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cappend",(new sc_Pair((new sc_Pair("\u1E9Cflatten",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair("\u1E9Cy",null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cmember",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Cappend",(new sc_Pair("\u1E9Ca",(new sc_Pair("\u1E9Cb",null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cor",(new sc_Pair((new sc_Pair("\u1E9Cmember",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Ca",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cmember",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cb",null)))))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cmember",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Creverse",(new sc_Pair("\u1E9Cy",null)))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cmember",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Clength",(new sc_Pair((new sc_Pair("\u1E9Creverse",(new sc_Pair("\u1E9Cx",null)))),null)))),(new sc_Pair((new sc_Pair("\u1E9Clength",(new sc_Pair("\u1E9Cx",null)))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cmember",(new sc_Pair("\u1E9Ca",(new sc_Pair((new sc_Pair("\u1E9Cintersect",(new sc_Pair("\u1E9Cb",(new sc_Pair("\u1E9Cc",null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cand",(new sc_Pair((new sc_Pair("\u1E9Cmember",(new sc_Pair("\u1E9Ca",(new sc_Pair("\u1E9Cb",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cmember",(new sc_Pair("\u1E9Ca",(new sc_Pair("\u1E9Cc",null)))))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cnth",(new sc_Pair((new sc_Pair("\u1E9Czero",null)),(new sc_Pair("\u1E9Ci",null)))))),(new sc_Pair((new sc_Pair("\u1E9Czero",null)),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cexp",(new sc_Pair("\u1E9Ci",(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Cj",(new sc_Pair("\u1E9Ck",null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair((new sc_Pair("\u1E9Cexp",(new sc_Pair("\u1E9Ci",(new sc_Pair("\u1E9Cj",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cexp",(new sc_Pair("\u1E9Ci",(new sc_Pair("\u1E9Ck",null)))))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cexp",(new sc_Pair("\u1E9Ci",(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Cj",(new sc_Pair("\u1E9Ck",null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cexp",(new sc_Pair((new sc_Pair("\u1E9Cexp",(new sc_Pair("\u1E9Ci",(new sc_Pair("\u1E9Cj",null)))))),(new sc_Pair("\u1E9Ck",null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Creverse-loop",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cappend",(new sc_Pair((new sc_Pair("\u1E9Creverse",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair("\u1E9Cy",null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Creverse-loop",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Cnil",null)),null)))))),(new sc_Pair((new sc_Pair("\u1E9Creverse",(new sc_Pair("\u1E9Cx",null)))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Ccount-list",(new sc_Pair("\u1E9Cz",(new sc_Pair((new sc_Pair("\u1E9Csort-lp",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair((new sc_Pair("\u1E9Ccount-list",(new sc_Pair("\u1E9Cz",(new sc_Pair("\u1E9Cx",null)))))),(new sc_Pair((new sc_Pair("\u1E9Ccount-list",(new sc_Pair("\u1E9Cz",(new sc_Pair("\u1E9Cy",null)))))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cappend",(new sc_Pair("\u1E9Ca",(new sc_Pair("\u1E9Cb",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cappend",(new sc_Pair("\u1E9Ca",(new sc_Pair("\u1E9Cc",null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair("\u1E9Cb",(new sc_Pair("\u1E9Cc",null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair((new sc_Pair("\u1E9Cremainder",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Cy",(new sc_Pair((new sc_Pair("\u1E9Cquotient",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cfix",(new sc_Pair("\u1E9Cx",null)))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cpower-eval",(new sc_Pair((new sc_Pair("\u1E9Cbig-plus1",(new sc_Pair("\u1E9Cl",(new sc_Pair("\u1E9Ci",(new sc_Pair("\u1E9Cbase",null)))))))),(new sc_Pair("\u1E9Cbase",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair((new sc_Pair("\u1E9Cpower-eval",(new sc_Pair("\u1E9Cl",(new sc_Pair("\u1E9Cbase",null)))))),(new sc_Pair("\u1E9Ci",null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cpower-eval",(new sc_Pair((new sc_Pair("\u1E9Cbig-plus",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",(new sc_Pair("\u1E9Ci",(new sc_Pair("\u1E9Cbase",null)))))))))),(new sc_Pair("\u1E9Cbase",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Ci",(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair((new sc_Pair("\u1E9Cpower-eval",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cbase",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cpower-eval",(new sc_Pair("\u1E9Cy",(new sc_Pair("\u1E9Cbase",null)))))),null)))))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cremainder",(new sc_Pair("\u1E9Cy",(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair("\u1E9Czero",null)),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Clessp",(new sc_Pair((new sc_Pair("\u1E9Cremainder",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cnot",(new sc_Pair((new sc_Pair("\u1E9Czerop",(new sc_Pair("\u1E9Cy",null)))),null)))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cremainder",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cx",null)))))),(new sc_Pair((new sc_Pair("\u1E9Czero",null)),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Clessp",(new sc_Pair((new sc_Pair("\u1E9Cquotient",(new sc_Pair("\u1E9Ci",(new sc_Pair("\u1E9Cj",null)))))),(new sc_Pair("\u1E9Ci",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cand",(new sc_Pair((new sc_Pair("\u1E9Cnot",(new sc_Pair((new sc_Pair("\u1E9Czerop",(new sc_Pair("\u1E9Ci",null)))),null)))),(new sc_Pair((new sc_Pair("\u1E9Cor",(new sc_Pair((new sc_Pair("\u1E9Czerop",(new sc_Pair("\u1E9Cj",null)))),(new sc_Pair((new sc_Pair("\u1E9Cnot",(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair("\u1E9Cj",(new sc_Pair((1),null)))))),null)))),null)))))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Clessp",(new sc_Pair((new sc_Pair("\u1E9Cremainder",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair("\u1E9Cx",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cand",(new sc_Pair((new sc_Pair("\u1E9Cnot",(new sc_Pair((new sc_Pair("\u1E9Czerop",(new sc_Pair("\u1E9Cy",null)))),null)))),(new sc_Pair((new sc_Pair("\u1E9Cnot",(new sc_Pair((new sc_Pair("\u1E9Czerop",(new sc_Pair("\u1E9Cx",null)))),null)))),(new sc_Pair((new sc_Pair("\u1E9Cnot",(new sc_Pair((new sc_Pair("\u1E9Clessp",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),null)))),null)))))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cpower-eval",(new sc_Pair((new sc_Pair("\u1E9Cpower-rep",(new sc_Pair("\u1E9Ci",(new sc_Pair("\u1E9Cbase",null)))))),(new sc_Pair("\u1E9Cbase",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cfix",(new sc_Pair("\u1E9Ci",null)))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cpower-eval",(new sc_Pair((new sc_Pair("\u1E9Cbig-plus",(new sc_Pair((new sc_Pair("\u1E9Cpower-rep",(new sc_Pair("\u1E9Ci",(new sc_Pair("\u1E9Cbase",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cpower-rep",(new sc_Pair("\u1E9Cj",(new sc_Pair("\u1E9Cbase",null)))))),(new sc_Pair((new sc_Pair("\u1E9Czero",null)),(new sc_Pair("\u1E9Cbase",null)))))))))),(new sc_Pair("\u1E9Cbase",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Ci",(new sc_Pair("\u1E9Cj",null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cgcd",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cgcd",(new sc_Pair("\u1E9Cy",(new sc_Pair("\u1E9Cx",null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cnth",(new sc_Pair((new sc_Pair("\u1E9Cappend",(new sc_Pair("\u1E9Ca",(new sc_Pair("\u1E9Cb",null)))))),(new sc_Pair("\u1E9Ci",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cappend",(new sc_Pair((new sc_Pair("\u1E9Cnth",(new sc_Pair("\u1E9Ca",(new sc_Pair("\u1E9Ci",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cnth",(new sc_Pair("\u1E9Cb",(new sc_Pair((new sc_Pair("\u1E9Cdifference",(new sc_Pair("\u1E9Ci",(new sc_Pair((new sc_Pair("\u1E9Clength",(new sc_Pair("\u1E9Ca",null)))),null)))))),null)))))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cdifference",(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair("\u1E9Cx",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cfix",(new sc_Pair("\u1E9Cy",null)))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cdifference",(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Cy",(new sc_Pair("\u1E9Cx",null)))))),(new sc_Pair("\u1E9Cx",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cfix",(new sc_Pair("\u1E9Cy",null)))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cdifference",(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cz",null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cdifference",(new sc_Pair("\u1E9Cy",(new sc_Pair("\u1E9Cz",null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Cdifference",(new sc_Pair("\u1E9Cc",(new sc_Pair("\u1E9Cw",null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cdifference",(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Cc",(new sc_Pair("\u1E9Cx",null)))))),(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Cw",(new sc_Pair("\u1E9Cx",null)))))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cremainder",(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cz",null)))))),(new sc_Pair("\u1E9Cz",null)))))),(new sc_Pair((new sc_Pair("\u1E9Czero",null)),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cdifference",(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Cb",(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Ca",(new sc_Pair("\u1E9Cc",null)))))),null)))))),(new sc_Pair("\u1E9Ca",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Cb",(new sc_Pair("\u1E9Cc",null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cdifference",(new sc_Pair((new sc_Pair("\u1E9Cadd1",(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Cy",(new sc_Pair("\u1E9Cz",null)))))),null)))),(new sc_Pair("\u1E9Cz",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cadd1",(new sc_Pair("\u1E9Cy",null)))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Clessp",(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cz",null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Clessp",(new sc_Pair("\u1E9Cy",(new sc_Pair("\u1E9Cz",null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Clessp",(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cz",null)))))),(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Cy",(new sc_Pair("\u1E9Cz",null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cand",(new sc_Pair((new sc_Pair("\u1E9Cnot",(new sc_Pair((new sc_Pair("\u1E9Czerop",(new sc_Pair("\u1E9Cz",null)))),null)))),(new sc_Pair((new sc_Pair("\u1E9Clessp",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Clessp",(new sc_Pair("\u1E9Cy",(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cnot",(new sc_Pair((new sc_Pair("\u1E9Czerop",(new sc_Pair("\u1E9Cx",null)))),null)))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cgcd",(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cz",null)))))),(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Cy",(new sc_Pair("\u1E9Cz",null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Cz",(new sc_Pair((new sc_Pair("\u1E9Cgcd",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cvalue",(new sc_Pair((new sc_Pair("\u1E9Cnormalize",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair("\u1E9Ca",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cvalue",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Ca",null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cflatten",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair((new sc_Pair("\u1E9Ccons",(new sc_Pair("\u1E9Cy",(new sc_Pair((new sc_Pair("\u1E9Cnil",null)),null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cand",(new sc_Pair((new sc_Pair("\u1E9Cnlistp",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Clistp",(new sc_Pair((new sc_Pair("\u1E9Cgopher",(new sc_Pair("\u1E9Cx",null)))),null)))),(new sc_Pair((new sc_Pair("\u1E9Clistp",(new sc_Pair("\u1E9Cx",null)))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Csamefringe",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cflatten",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair((new sc_Pair("\u1E9Cflatten",(new sc_Pair("\u1E9Cy",null)))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cgreatest-factor",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Czero",null)),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cand",(new sc_Pair((new sc_Pair("\u1E9Cor",(new sc_Pair((new sc_Pair("\u1E9Czerop",(new sc_Pair("\u1E9Cy",null)))),(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair("\u1E9Cy",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Czero",null)),null)))))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cgreatest-factor",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((1),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair("\u1E9Cx",(new sc_Pair((1),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cnumberp",(new sc_Pair((new sc_Pair("\u1E9Cgreatest-factor",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),null)))),(new sc_Pair((new sc_Pair("\u1E9Cnot",(new sc_Pair((new sc_Pair("\u1E9Cand",(new sc_Pair((new sc_Pair("\u1E9Cor",(new sc_Pair((new sc_Pair("\u1E9Czerop",(new sc_Pair("\u1E9Cy",null)))),(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair("\u1E9Cy",(new sc_Pair((1),null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cnot",(new sc_Pair((new sc_Pair("\u1E9Cnumberp",(new sc_Pair("\u1E9Cx",null)))),null)))),null)))))),null)))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Ctimes-list",(new sc_Pair((new sc_Pair("\u1E9Cappend",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),null)))),(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair((new sc_Pair("\u1E9Ctimes-list",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair((new sc_Pair("\u1E9Ctimes-list",(new sc_Pair("\u1E9Cy",null)))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cprime-list",(new sc_Pair((new sc_Pair("\u1E9Cappend",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),null)))),(new sc_Pair((new sc_Pair("\u1E9Cand",(new sc_Pair((new sc_Pair("\u1E9Cprime-list",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair((new sc_Pair("\u1E9Cprime-list",(new sc_Pair("\u1E9Cy",null)))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair("\u1E9Cz",(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Cw",(new sc_Pair("\u1E9Cz",null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cand",(new sc_Pair((new sc_Pair("\u1E9Cnumberp",(new sc_Pair("\u1E9Cz",null)))),(new sc_Pair((new sc_Pair("\u1E9Cor",(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair("\u1E9Cz",(new sc_Pair((new sc_Pair("\u1E9Czero",null)),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair("\u1E9Cw",(new sc_Pair((1),null)))))),null)))))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cgreatereqp",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cnot",(new sc_Pair((new sc_Pair("\u1E9Clessp",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),null)))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cor",(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Czero",null)),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cand",(new sc_Pair((new sc_Pair("\u1E9Cnumberp",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair("\u1E9Cy",(new sc_Pair((1),null)))))),null)))))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cremainder",(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Cy",(new sc_Pair("\u1E9Cx",null)))))),(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Czero",null)),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Ca",(new sc_Pair("\u1E9Cb",null)))))),(new sc_Pair((1),null)))))),(new sc_Pair(sc_list("\u1E9Cand", (new sc_Pair("\u1E9Cnot",(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair("\u1E9Ca",(new sc_Pair((new sc_Pair("\u1E9Czero",null)),null)))))),null)))), (new sc_Pair("\u1E9Cnot",(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair("\u1E9Cb",(new sc_Pair((new sc_Pair("\u1E9Czero",null)),null)))))),null)))), (new sc_Pair("\u1E9Cnumberp",(new sc_Pair("\u1E9Ca",null)))), (new sc_Pair("\u1E9Cnumberp",(new sc_Pair("\u1E9Cb",null)))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Csub1",(new sc_Pair("\u1E9Ca",null)))),(new sc_Pair((new sc_Pair("\u1E9Czero",null)),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Csub1",(new sc_Pair("\u1E9Cb",null)))),(new sc_Pair((new sc_Pair("\u1E9Czero",null)),null))))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Clessp",(new sc_Pair((new sc_Pair("\u1E9Clength",(new sc_Pair((new sc_Pair("\u1E9Cdelete",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cl",null)))))),null)))),(new sc_Pair((new sc_Pair("\u1E9Clength",(new sc_Pair("\u1E9Cl",null)))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cmember",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cl",null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Csort2",(new sc_Pair((new sc_Pair("\u1E9Cdelete",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cl",null)))))),null)))),(new sc_Pair((new sc_Pair("\u1E9Cdelete",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Csort2",(new sc_Pair("\u1E9Cl",null)))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cdsort",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair((new sc_Pair("\u1E9Csort2",(new sc_Pair("\u1E9Cx",null)))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Clength",(new sc_Pair((new sc_Pair("\u1E9Ccons",(new sc_Pair("\u1E9Cx1",(new sc_Pair((new sc_Pair("\u1E9Ccons",(new sc_Pair("\u1E9Cx2",(new sc_Pair((new sc_Pair("\u1E9Ccons",(new sc_Pair("\u1E9Cx3",(new sc_Pair((new sc_Pair("\u1E9Ccons",(new sc_Pair("\u1E9Cx4",(new sc_Pair((new sc_Pair("\u1E9Ccons",(new sc_Pair("\u1E9Cx5",(new sc_Pair((new sc_Pair("\u1E9Ccons",(new sc_Pair("\u1E9Cx6",(new sc_Pair("\u1E9Cx7",null)))))),null)))))),null)))))),null)))))),null)))))),null)))))),null)))),(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair((6),(new sc_Pair((new sc_Pair("\u1E9Clength",(new sc_Pair("\u1E9Cx7",null)))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cdifference",(new sc_Pair((new sc_Pair("\u1E9Cadd1",(new sc_Pair((new sc_Pair("\u1E9Cadd1",(new sc_Pair("\u1E9Cx",null)))),null)))),(new sc_Pair((2),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cfix",(new sc_Pair("\u1E9Cx",null)))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cquotient",(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),null)))))),(new sc_Pair((2),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Cquotient",(new sc_Pair("\u1E9Cy",(new sc_Pair((2),null)))))),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Csigma",(new sc_Pair((new sc_Pair("\u1E9Czero",null)),(new sc_Pair("\u1E9Ci",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cquotient",(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Ci",(new sc_Pair((new sc_Pair("\u1E9Cadd1",(new sc_Pair("\u1E9Ci",null)))),null)))))),(new sc_Pair((2),null)))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Cadd1",(new sc_Pair("\u1E9Cy",null)))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair((new sc_Pair("\u1E9Cnumberp",(new sc_Pair("\u1E9Cy",null)))),(new sc_Pair((new sc_Pair("\u1E9Cadd1",(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),null)))),(new sc_Pair((new sc_Pair("\u1E9Cadd1",(new sc_Pair("\u1E9Cx",null)))),null)))))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cdifference",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cdifference",(new sc_Pair("\u1E9Cz",(new sc_Pair("\u1E9Cy",null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair((new sc_Pair("\u1E9Clessp",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cnot",(new sc_Pair((new sc_Pair("\u1E9Clessp",(new sc_Pair("\u1E9Cy",(new sc_Pair("\u1E9Cz",null)))))),null)))),(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair((new sc_Pair("\u1E9Clessp",(new sc_Pair("\u1E9Cz",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cnot",(new sc_Pair((new sc_Pair("\u1E9Clessp",(new sc_Pair("\u1E9Cy",(new sc_Pair("\u1E9Cx",null)))))),null)))),(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cfix",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair((new sc_Pair("\u1E9Cfix",(new sc_Pair("\u1E9Cz",null)))),null)))))),null)))))))),null)))))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cmeaning",(new sc_Pair((new sc_Pair("\u1E9Cplus-tree",(new sc_Pair((new sc_Pair("\u1E9Cdelete",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),null)))),(new sc_Pair("\u1E9Ca",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair((new sc_Pair("\u1E9Cmember",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cdifference",(new sc_Pair((new sc_Pair("\u1E9Cmeaning",(new sc_Pair((new sc_Pair("\u1E9Cplus-tree",(new sc_Pair("\u1E9Cy",null)))),(new sc_Pair("\u1E9Ca",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cmeaning",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Ca",null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cmeaning",(new sc_Pair((new sc_Pair("\u1E9Cplus-tree",(new sc_Pair("\u1E9Cy",null)))),(new sc_Pair("\u1E9Ca",null)))))),null)))))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Cadd1",(new sc_Pair("\u1E9Cy",null)))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair((new sc_Pair("\u1E9Cnumberp",(new sc_Pair("\u1E9Cy",null)))),(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cfix",(new sc_Pair("\u1E9Cx",null)))),null)))))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cnth",(new sc_Pair((new sc_Pair("\u1E9Cnil",null)),(new sc_Pair("\u1E9Ci",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair((new sc_Pair("\u1E9Czerop",(new sc_Pair("\u1E9Ci",null)))),(new sc_Pair((new sc_Pair("\u1E9Cnil",null)),(new sc_Pair((new sc_Pair("\u1E9Czero",null)),null)))))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Clast",(new sc_Pair((new sc_Pair("\u1E9Cappend",(new sc_Pair("\u1E9Ca",(new sc_Pair("\u1E9Cb",null)))))),null)))),(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair((new sc_Pair("\u1E9Clistp",(new sc_Pair("\u1E9Cb",null)))),(new sc_Pair((new sc_Pair("\u1E9Clast",(new sc_Pair("\u1E9Cb",null)))),(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair((new sc_Pair("\u1E9Clistp",(new sc_Pair("\u1E9Ca",null)))),(new sc_Pair((new sc_Pair("\u1E9Ccons",(new sc_Pair((new sc_Pair("\u1E9Ccar",(new sc_Pair((new sc_Pair("\u1E9Clast",(new sc_Pair("\u1E9Ca",null)))),null)))),(new sc_Pair("\u1E9Cb",null)))))),(new sc_Pair("\u1E9Cb",null)))))))),null)))))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Clessp",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair("\u1E9Cz",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair((new sc_Pair("\u1E9Clessp",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Ct",null)),(new sc_Pair("\u1E9Cz",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cf",null)),(new sc_Pair("\u1E9Cz",null)))))),null)))))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cassignment",(new sc_Pair("\u1E9Cx",(new sc_Pair((new sc_Pair("\u1E9Cappend",(new sc_Pair("\u1E9Ca",(new sc_Pair("\u1E9Cb",null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair((new sc_Pair("\u1E9Cassignedp",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Ca",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cassignment",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Ca",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cassignment",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cb",null)))))),null)))))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Ccar",(new sc_Pair((new sc_Pair("\u1E9Cgopher",(new sc_Pair("\u1E9Cx",null)))),null)))),(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair((new sc_Pair("\u1E9Clistp",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair((new sc_Pair("\u1E9Ccar",(new sc_Pair((new sc_Pair("\u1E9Cflatten",(new sc_Pair("\u1E9Cx",null)))),null)))),(new sc_Pair((new sc_Pair("\u1E9Czero",null)),null)))))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cflatten",(new sc_Pair((new sc_Pair("\u1E9Ccdr",(new sc_Pair((new sc_Pair("\u1E9Cgopher",(new sc_Pair("\u1E9Cx",null)))),null)))),null)))),(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair((new sc_Pair("\u1E9Clistp",(new sc_Pair("\u1E9Cx",null)))),(new sc_Pair((new sc_Pair("\u1E9Ccdr",(new sc_Pair((new sc_Pair("\u1E9Cflatten",(new sc_Pair("\u1E9Cx",null)))),null)))),(new sc_Pair((new sc_Pair("\u1E9Ccons",(new sc_Pair((new sc_Pair("\u1E9Czero",null)),(new sc_Pair((new sc_Pair("\u1E9Cnil",null)),null)))))),null)))))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cquotient",(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Cy",(new sc_Pair("\u1E9Cx",null)))))),(new sc_Pair("\u1E9Cy",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair((new sc_Pair("\u1E9Czerop",(new sc_Pair("\u1E9Cy",null)))),(new sc_Pair((new sc_Pair("\u1E9Czero",null)),(new sc_Pair((new sc_Pair("\u1E9Cfix",(new sc_Pair("\u1E9Cx",null)))),null)))))))),null)))))), (new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cget",(new sc_Pair("\u1E9Cj",(new sc_Pair((new sc_Pair("\u1E9Cset",(new sc_Pair("\u1E9Ci",(new sc_Pair("\u1E9Cval",(new sc_Pair("\u1E9Cmem",null)))))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cif",(new sc_Pair((new sc_Pair("\u1E9Ceqp",(new sc_Pair("\u1E9Cj",(new sc_Pair("\u1E9Ci",null)))))),(new sc_Pair("\u1E9Cval",(new sc_Pair((new sc_Pair("\u1E9Cget",(new sc_Pair("\u1E9Cj",(new sc_Pair("\u1E9Cmem",null)))))),null)))))))),null))))))));
    (const_nboyer = (new sc_Pair((new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cf",(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Ca",(new sc_Pair("\u1E9Cb",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Cc",(new sc_Pair((new sc_Pair("\u1E9Czero",null)),null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cy",(new sc_Pair("\u1E9Cf",(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair((new sc_Pair("\u1E9Ctimes",(new sc_Pair("\u1E9Ca",(new sc_Pair("\u1E9Cb",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Cc",(new sc_Pair("\u1E9Cd",null)))))),null)))))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cz",(new sc_Pair("\u1E9Cf",(new sc_Pair((new sc_Pair("\u1E9Creverse",(new sc_Pair((new sc_Pair("\u1E9Cappend",(new sc_Pair((new sc_Pair("\u1E9Cappend",(new sc_Pair("\u1E9Ca",(new sc_Pair("\u1E9Cb",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cnil",null)),null)))))),null)))),null)))))),(new sc_Pair((new sc_Pair("\u1E9Cu",(new sc_Pair("\u1E9Cequal",(new sc_Pair((new sc_Pair("\u1E9Cplus",(new sc_Pair("\u1E9Ca",(new sc_Pair("\u1E9Cb",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cdifference",(new sc_Pair("\u1E9Cx",(new sc_Pair("\u1E9Cy",null)))))),null)))))))),(new sc_Pair((new sc_Pair("\u1E9Cw",(new sc_Pair("\u1E9Clessp",(new sc_Pair((new sc_Pair("\u1E9Cremainder",(new sc_Pair("\u1E9Ca",(new sc_Pair("\u1E9Cb",null)))))),(new sc_Pair((new sc_Pair("\u1E9Cmember",(new sc_Pair("\u1E9Ca",(new sc_Pair((new sc_Pair("\u1E9Clength",(new sc_Pair("\u1E9Cb",null)))),null)))))),null)))))))),null)))))))))));
    BgL_nboyerzd2benchmarkzd2 = function() {
        var args = null;
        for (var sc_tmp = arguments.length - 1; sc_tmp >= 0; sc_tmp--) {
            args = sc_cons(arguments[sc_tmp], args);
        }
        var n;
        return ((n = ((args === null)?(0):(args.car))), (BgL_setupzd2boyerzd2()), (BgL_runzd2benchmarkzd2(("nboyer"+(sc_number2string(n))), (1), function() {
            return (BgL_testzd2boyerzd2(n));
        }, function(rewrites) {
            if ((sc_isNumber(rewrites)))
                switch (n) {
                case (0):
                    return (rewrites===(95024));
                    break;
                case (1):
                    return (rewrites===(591777));
                    break;
                case (2):
                    return (rewrites===(1813975));
                    break;
                case (3):
                    return (rewrites===(5375678));
                    break;
                case (4):
                    return (rewrites===(16445406));
                    break;
                case (5):
                    return (rewrites===(51507739));
                    break;
                default:
                    return true;
                    break;
                }
            else
                return false;
        })));
    };
    BgL_setupzd2boyerzd2 = function() {
        return true;
    };
    BgL_testzd2boyerzd2 = function() {
        return true;
    };
    translate_term_nboyer = function(term) {
        var lst;
        return (!(term instanceof sc_Pair)?term:(new sc_Pair((BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer((term.car))), ((lst = (term.cdr)), ((lst === null)?null:(new sc_Pair((translate_term_nboyer((lst.car))), (translate_args_nboyer((lst.cdr))))))))));
    };
    translate_args_nboyer = function(lst) {
        var sc_lst_5;
        var term;
        return ((lst === null)?null:(new sc_Pair(((term = (lst.car)), (!(term instanceof sc_Pair)?term:(new sc_Pair((BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer((term.car))), (translate_args_nboyer((term.cdr))))))), ((sc_lst_5 = (lst.cdr)), ((sc_lst_5 === null)?null:(new sc_Pair((translate_term_nboyer((sc_lst_5.car))), (translate_args_nboyer((sc_lst_5.cdr))))))))));
    };
    untranslate_term_nboyer = function(term) {
        var optrOpnd;
        var tail1131;
        var L1127;
        var falseHead1130;
        var symbol_record;
        if (!(term instanceof sc_Pair))
            return term;
        else
            {
                (falseHead1130 = (new sc_Pair(null, null)));
                (L1127 = (term.cdr));
                (tail1131 = falseHead1130);
                while (!(L1127 === null)) {
                    {
                        (tail1131.cdr = (new sc_Pair((untranslate_term_nboyer((L1127.car))), null)));
                        (tail1131 = (tail1131.cdr));
                        (L1127 = (L1127.cdr));
                    }
                }
                (optrOpnd = (falseHead1130.cdr));
                return (new sc_Pair(((symbol_record = (term.car)), (symbol_record[(0)])), optrOpnd));
            }
    };
    BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer = function(sym) {
        var r;
        var x;
        return ((x = (sc_assq(sym, BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer))), ((x!== false)?(x.cdr):((r = [sym, null]), (BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer = (new sc_Pair((new sc_Pair(sym, r)), BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer))), r)));
    };
    (BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer = null);
    translate_alist_nboyer = function(alist) {
        var sc_alist_6;
        var term;
        return ((alist === null)?null:(new sc_Pair((new sc_Pair((alist.car.car), ((term = (alist.car.cdr)), (!(term instanceof sc_Pair)?term:(new sc_Pair((BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer((term.car))), (translate_args_nboyer((term.cdr))))))))), ((sc_alist_6 = (alist.cdr)), ((sc_alist_6 === null)?null:(new sc_Pair((new sc_Pair((sc_alist_6.car.car), (translate_term_nboyer((sc_alist_6.car.cdr))))), (translate_alist_nboyer((sc_alist_6.cdr))))))))));
    };
    apply_subst_nboyer = function(alist, term) {
        var lst;
        var temp_temp;
        return (!(term instanceof sc_Pair)?((temp_temp = (sc_assq(term, alist))), ((temp_temp!== false)?(temp_temp.cdr):term)):(new sc_Pair((term.car), ((lst = (term.cdr)), ((lst === null)?null:(new sc_Pair((apply_subst_nboyer(alist, (lst.car))), (apply_subst_lst_nboyer(alist, (lst.cdr))))))))));
    };
    apply_subst_lst_nboyer = function(alist, lst) {
        var sc_lst_7;
        return ((lst === null)?null:(new sc_Pair((apply_subst_nboyer(alist, (lst.car))), ((sc_lst_7 = (lst.cdr)), ((sc_lst_7 === null)?null:(new sc_Pair((apply_subst_nboyer(alist, (sc_lst_7.car))), (apply_subst_lst_nboyer(alist, (sc_lst_7.cdr))))))))));
    };
    tautologyp_nboyer = function(sc_x_11, true_lst, false_lst) {
        var tmp1125;
        var x;
        var tmp1126;
        var sc_x_8;
        var sc_tmp1125_9;
        var sc_tmp1126_10;
        var sc_x_11;
        var true_lst;
        var false_lst;
        while (true) {
            if ((((sc_tmp1126_10 = (is_term_equal_nboyer(sc_x_11, true_term_nboyer))), ((sc_tmp1126_10!== false)?sc_tmp1126_10:(is_term_member_nboyer(sc_x_11, true_lst))))!== false))
                return true;
            else
                if ((((sc_tmp1125_9 = (is_term_equal_nboyer(sc_x_11, false_term_nboyer))), ((sc_tmp1125_9!== false)?sc_tmp1125_9:(is_term_member_nboyer(sc_x_11, false_lst))))!== false))
                    return false;
                else
                    if (!(sc_x_11 instanceof sc_Pair))
                        return false;
                    else
                        if (((sc_x_11.car)===if_constructor_nboyer))
                            if ((((sc_x_8 = (sc_x_11.cdr.car)), (tmp1126 = (is_term_equal_nboyer(sc_x_8, true_term_nboyer))), ((tmp1126!== false)?tmp1126:(is_term_member_nboyer(sc_x_8, true_lst))))!== false))
                                (sc_x_11 = (sc_x_11.cdr.cdr.car));
                            else
                                if ((((x = (sc_x_11.cdr.car)), (tmp1125 = (is_term_equal_nboyer(x, false_term_nboyer))), ((tmp1125!== false)?tmp1125:(is_term_member_nboyer(x, false_lst))))!== false))
                                    (sc_x_11 = (sc_x_11.cdr.cdr.cdr.car));
                                else
                                    if (((tautologyp_nboyer((sc_x_11.cdr.cdr.car), (new sc_Pair((sc_x_11.cdr.car), true_lst)), false_lst))!== false))
                                        {
                                            (false_lst = (new sc_Pair((sc_x_11.cdr.car), false_lst)));
                                            (sc_x_11 = (sc_x_11.cdr.cdr.cdr.car));
                                        }
                                    else
                                        return false;
                        else
                            return false;
        }
    };
    (if_constructor_nboyer = "\u1E9C*");
    (rewrite_count_nboyer = (0));
    rewrite_nboyer = function(term) {
        var term2;
        var sc_term_12;
        var lst;
        var symbol_record;
        var sc_lst_13;
        {
            (++rewrite_count_nboyer);
            if (!(term instanceof sc_Pair))
                return term;
            else
                {
                    (sc_term_12 = (new sc_Pair((term.car), ((sc_lst_13 = (term.cdr)), ((sc_lst_13 === null)?null:(new sc_Pair((rewrite_nboyer((sc_lst_13.car))), (rewrite_args_nboyer((sc_lst_13.cdr))))))))));
                    (lst = ((symbol_record = (term.car)), (symbol_record[(1)])));
                    while (true) {
                        if ((lst === null))
                            return sc_term_12;
                        else
                            if ((((term2 = ((lst.car).cdr.car)), (unify_subst_nboyer = null), (one_way_unify1_nboyer(sc_term_12, term2)))!== false))
                                return (rewrite_nboyer((apply_subst_nboyer(unify_subst_nboyer, ((lst.car).cdr.cdr.car)))));
                            else
                                (lst = (lst.cdr));
                    }
                }
        }
    };
    rewrite_args_nboyer = function(lst) {
        var sc_lst_14;
        return ((lst === null)?null:(new sc_Pair((rewrite_nboyer((lst.car))), ((sc_lst_14 = (lst.cdr)), ((sc_lst_14 === null)?null:(new sc_Pair((rewrite_nboyer((sc_lst_14.car))), (rewrite_args_nboyer((sc_lst_14.cdr))))))))));
    };
    (unify_subst_nboyer = "\u1E9C*");
    one_way_unify1_nboyer = function(term1, term2) {
        var lst1;
        var lst2;
        var temp_temp;
        if (!(term2 instanceof sc_Pair))
            {
                (temp_temp = (sc_assq(term2, unify_subst_nboyer)));
                if ((temp_temp!== false))
                    return (is_term_equal_nboyer(term1, (temp_temp.cdr)));
                else
                    if ((sc_isNumber(term2)))
                        return (sc_isEqual(term1, term2));
                    else
                        {
                            (unify_subst_nboyer = (new sc_Pair((new sc_Pair(term2, term1)), unify_subst_nboyer)));
                            return true;
                        }
            }
        else
            if (!(term1 instanceof sc_Pair))
                return false;
            else
                if (((term1.car)===(term2.car)))
                    {
                        (lst1 = (term1.cdr));
                        (lst2 = (term2.cdr));
                        while (true) {
                            if ((lst1 === null))
                                return (lst2 === null);
                            else
                                if ((lst2 === null))
                                    return false;
                                else
                                    if (((one_way_unify1_nboyer((lst1.car), (lst2.car)))!== false))
                                        {
                                            (lst1 = (lst1.cdr));
                                            (lst2 = (lst2.cdr));
                                        }
                                    else
                                        return false;
                        }
                    }
                else
                    return false;
    };
    (false_term_nboyer = "\u1E9C*");
    (true_term_nboyer = "\u1E9C*");
    trans_of_implies1_nboyer = function(n) {
        var sc_n_15;
        return ((sc_isEqual(n, (1)))?(sc_list("\u1E9Cimplies", (0), (1))):(sc_list("\u1E9Cand", (sc_list("\u1E9Cimplies", (n-(1)), n)), ((sc_n_15 = (n-(1))), ((sc_isEqual(sc_n_15, (1)))?(sc_list("\u1E9Cimplies", (0), (1))):(sc_list("\u1E9Cand", (sc_list("\u1E9Cimplies", (sc_n_15-(1)), sc_n_15)), (trans_of_implies1_nboyer((sc_n_15-(1)))))))))));
    };
    is_term_equal_nboyer = function(x, y) {
        var lst1;
        var lst2;
        var r2;
        var r1;
        if ((x instanceof sc_Pair))
            if ((y instanceof sc_Pair))
                if ((((r1 = (x.car)), (r2 = (y.car)), (r1===r2))!== false))
                    {
                        (lst1 = (x.cdr));
                        (lst2 = (y.cdr));
                        while (true) {
                            if ((lst1 === null))
                                return (lst2 === null);
                            else
                                if ((lst2 === null))
                                    return false;
                                else
                                    if (((is_term_equal_nboyer((lst1.car), (lst2.car)))!== false))
                                        {
                                            (lst1 = (lst1.cdr));
                                            (lst2 = (lst2.cdr));
                                        }
                                    else
                                        return false;
                        }
                    }
                else
                    return false;
            else
                return false;
        else
            return (sc_isEqual(x, y));
    };
    is_term_member_nboyer = function(x, lst) {
        var x;
        var lst;
        while (true) {
            if ((lst === null))
                return false;
            else
                if (((is_term_equal_nboyer(x, (lst.car)))!== false))
                    return true;
                else
                    (lst = (lst.cdr));
        }
    };
    BgL_setupzd2boyerzd2 = function() {
        var symbol_record;
        var value;
        var BgL_sc_symbolzd2record_16zd2;
        var sym;
        var sc_sym_17;
        var term;
        var lst;
        var sc_term_18;
        var sc_term_19;
        {
            (BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer = null);
            (if_constructor_nboyer = (BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer("\u1E9Cif")));
            (false_term_nboyer = ((sc_term_19 = (new sc_Pair("\u1E9Cf",null))), (!(sc_term_19 instanceof sc_Pair)?sc_term_19:(new sc_Pair((BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer((sc_term_19.car))), (translate_args_nboyer((sc_term_19.cdr))))))));
            (true_term_nboyer = ((sc_term_18 = (new sc_Pair("\u1E9Ct",null))), (!(sc_term_18 instanceof sc_Pair)?sc_term_18:(new sc_Pair((BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer((sc_term_18.car))), (translate_args_nboyer((sc_term_18.cdr))))))));
            (lst = sc_const_3_nboyer);
            while (!(lst === null)) {
                {
                    (term = (lst.car));
                    if (((term instanceof sc_Pair)&&(((term.car)==="\u1E9Cequal")&&((term.cdr.car) instanceof sc_Pair))))
                        {
                            (sc_sym_17 = ((term.cdr.car).car));
                            (value = (new sc_Pair((!(term instanceof sc_Pair)?term:(new sc_Pair((BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer((term.car))), (translate_args_nboyer((term.cdr)))))), ((sym = ((term.cdr.car).car)), (BgL_sc_symbolzd2record_16zd2 = (BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(sym))), (BgL_sc_symbolzd2record_16zd2[(1)])))));
                            (symbol_record = (BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(sc_sym_17)));
                            (symbol_record[(1)] = value);
                        }
                    else
                        (sc_error("ADD-LEMMA did not like term:  ", term));
                    (lst = (lst.cdr));
                }
            }
            return true;
        }
    };
    BgL_testzd2boyerzd2 = function(n) {
        var optrOpnd;
        var term;
        var sc_n_20;
        var answer;
        var sc_term_21;
        var sc_term_22;
        {
            (rewrite_count_nboyer = (0));
            (term = sc_const_4_nboyer);
            (sc_n_20 = n);
            while (!(sc_n_20=== 0)) {
                {
                    (term = (sc_list("\u1E9Cor", term, (new sc_Pair("\u1E9Cf",null)))));
                    (--sc_n_20);
                }
            }
            (sc_term_22 = term);
            if (!(sc_term_22 instanceof sc_Pair))
                (optrOpnd = sc_term_22);
            else
                (optrOpnd = (new sc_Pair((BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer((sc_term_22.car))), (translate_args_nboyer((sc_term_22.cdr))))));
            (sc_term_21 = (apply_subst_nboyer(((const_nboyer === null)?null:(new sc_Pair((new sc_Pair((const_nboyer.car.car), (translate_term_nboyer((const_nboyer.car.cdr))))), (translate_alist_nboyer((const_nboyer.cdr)))))), optrOpnd)));
            (answer = (tautologyp_nboyer((rewrite_nboyer(sc_term_21)), null, null)));
            (sc_write(rewrite_count_nboyer));
            (sc_display(" rewrites"));
            (sc_newline());
            if ((answer!== false))
                return rewrite_count_nboyer;
            else
                return false;
        }
    };
}
/* Exported Variables */
var BgL_parsezd2ze3nbzd2treesze3;
var BgL_earleyzd2benchmarkzd2;
var BgL_parsezd2ze3parsedzf3zc2;
var test;
var BgL_parsezd2ze3treesz31;
var BgL_makezd2parserzd2;
/* End Exports */

var const_earley;
{
    (const_earley = (new sc_Pair((new sc_Pair("\u1E9Cs",(new sc_Pair((new sc_Pair("\u1E9Ca",null)),(new sc_Pair((new sc_Pair("\u1E9Cs",(new sc_Pair("\u1E9Cs",null)))),null)))))),null)));
    BgL_makezd2parserzd2 = function(grammar, lexer) {
        var i;
        var parser_descr;
        var def_loop;
        var nb_nts;
        var names;
        var steps;
        var predictors;
        var enders;
        var starters;
        var nts;
        var sc_names_1;
        var sc_steps_2;
        var sc_predictors_3;
        var sc_enders_4;
        var sc_starters_5;
        var nb_confs;
        var BgL_sc_defzd2loop_6zd2;
        var BgL_sc_nbzd2nts_7zd2;
        var sc_nts_8;
        var BgL_sc_defzd2loop_9zd2;
        var ind;
        {
            ind = function(nt, sc_nts_10) {
                var i;
                {
                    (i = ((sc_nts_10.length)-(1)));
                    while (true) {
                        if ((i>=(0)))
                            if ((sc_isEqual((sc_nts_10[i]), nt)))
                                return i;
                            else
                                (--i);
                        else
                            return false;
                    }
                }
            };
            (sc_nts_8 = ((BgL_sc_defzd2loop_9zd2 = function(defs, sc_nts_11) {
                var rule_loop;
                var head;
                var def;
                return ((defs instanceof sc_Pair)?((def = (defs.car)), (head = (def.car)), (rule_loop = function(rules, sc_nts_12) {
                    var nt;
                    var l;
                    var sc_nts_13;
                    var rule;
                    if ((rules instanceof sc_Pair))
                        {
                            (rule = (rules.car));
                            (l = rule);
                            (sc_nts_13 = sc_nts_12);
                            while ((l instanceof sc_Pair)) {
                                {
                                    (nt = (l.car));
                                    (l = (l.cdr));
                                    (sc_nts_13 = (((sc_member(nt, sc_nts_13))!== false)?sc_nts_13:(new sc_Pair(nt, sc_nts_13))));
                                }
                            }
                            return (rule_loop((rules.cdr), sc_nts_13));
                        }
                    else
                        return (BgL_sc_defzd2loop_9zd2((defs.cdr), sc_nts_12));
                }), (rule_loop((def.cdr), (((sc_member(head, sc_nts_11))!== false)?sc_nts_11:(new sc_Pair(head, sc_nts_11)))))):(sc_list2vector((sc_reverse(sc_nts_11)))));
            }), (BgL_sc_defzd2loop_9zd2(grammar, null))));
            (BgL_sc_nbzd2nts_7zd2 = (sc_nts_8.length));
            (nb_confs = (((BgL_sc_defzd2loop_6zd2 = function(defs, BgL_sc_nbzd2confs_14zd2) {
                var rule_loop;
                var def;
                return ((defs instanceof sc_Pair)?((def = (defs.car)), (rule_loop = function(rules, BgL_sc_nbzd2confs_15zd2) {
                    var l;
                    var BgL_sc_nbzd2confs_16zd2;
                    var rule;
                    if ((rules instanceof sc_Pair))
                        {
                            (rule = (rules.car));
                            (l = rule);
                            (BgL_sc_nbzd2confs_16zd2 = BgL_sc_nbzd2confs_15zd2);
                            while ((l instanceof sc_Pair)) {
                                {
                                    (l = (l.cdr));
                                    (++BgL_sc_nbzd2confs_16zd2);
                                }
                            }
                            return (rule_loop((rules.cdr), (BgL_sc_nbzd2confs_16zd2+(1))));
                        }
                    else
                        return (BgL_sc_defzd2loop_6zd2((defs.cdr), BgL_sc_nbzd2confs_15zd2));
                }), (rule_loop((def.cdr), BgL_sc_nbzd2confs_14zd2))):BgL_sc_nbzd2confs_14zd2);
            }), (BgL_sc_defzd2loop_6zd2(grammar, (0))))+BgL_sc_nbzd2nts_7zd2));
            (sc_starters_5 = (sc_makeVector(BgL_sc_nbzd2nts_7zd2, null)));
            (sc_enders_4 = (sc_makeVector(BgL_sc_nbzd2nts_7zd2, null)));
            (sc_predictors_3 = (sc_makeVector(BgL_sc_nbzd2nts_7zd2, null)));
            (sc_steps_2 = (sc_makeVector(nb_confs, false)));
            (sc_names_1 = (sc_makeVector(nb_confs, false)));
            (nts = sc_nts_8);
            (starters = sc_starters_5);
            (enders = sc_enders_4);
            (predictors = sc_predictors_3);
            (steps = sc_steps_2);
            (names = sc_names_1);
            (nb_nts = (sc_nts_8.length));
            (i = (nb_nts-(1)));
            while ((i>=(0))) {
                {
                    (sc_steps_2[i] = (i-nb_nts));
                    (sc_names_1[i] = (sc_list((sc_nts_8[i]), (0))));
                    (sc_enders_4[i] = (sc_list(i)));
                    (--i);
                }
            }
            def_loop = function(defs, conf) {
                var rule_loop;
                var head;
                var def;
                return ((defs instanceof sc_Pair)?((def = (defs.car)), (head = (def.car)), (rule_loop = function(rules, conf, rule_num) {
                    var i;
                    var sc_i_17;
                    var nt;
                    var l;
                    var sc_conf_18;
                    var sc_i_19;
                    var rule;
                    if ((rules instanceof sc_Pair))
                        {
                            (rule = (rules.car));
                            (names[conf] = (sc_list(head, rule_num)));
                            (sc_i_19 = (ind(head, nts)));
                            (starters[sc_i_19] = (new sc_Pair(conf, (starters[sc_i_19]))));
                            (l = rule);
                            (sc_conf_18 = conf);
                            while ((l instanceof sc_Pair)) {
                                {
                                    (nt = (l.car));
                                    (steps[sc_conf_18] = (ind(nt, nts)));
                                    (sc_i_17 = (ind(nt, nts)));
                                    (predictors[sc_i_17] = (new sc_Pair(sc_conf_18, (predictors[sc_i_17]))));
                                    (l = (l.cdr));
                                    (++sc_conf_18);
                                }
                            }
                            (steps[sc_conf_18] = ((ind(head, nts))-nb_nts));
                            (i = (ind(head, nts)));
                            (enders[i] = (new sc_Pair(sc_conf_18, (enders[i]))));
                            return (rule_loop((rules.cdr), (sc_conf_18+(1)), (rule_num+(1))));
                        }
                    else
                        return (def_loop((defs.cdr), conf));
                }), (rule_loop((def.cdr), conf, (1)))):undefined);
            };
            (def_loop(grammar, (sc_nts_8.length)));
            (parser_descr = [lexer, sc_nts_8, sc_starters_5, sc_enders_4, sc_predictors_3, sc_steps_2, sc_names_1]);
            return function(input) {
                var optrOpnd;
                var sc_optrOpnd_20;
                var sc_optrOpnd_21;
                var sc_optrOpnd_22;
                var loop1;
                var BgL_sc_stateza2_23za2;
                var toks;
                var BgL_sc_nbzd2nts_24zd2;
                var sc_steps_25;
                var sc_enders_26;
                var state_num;
                var BgL_sc_statesza2_27za2;
                var states;
                var i;
                var conf;
                var l;
                var tok_nts;
                var sc_i_28;
                var sc_i_29;
                var l1;
                var l2;
                var tok;
                var tail1129;
                var L1125;
                var goal_enders;
                var BgL_sc_statesza2_30za2;
                var BgL_sc_nbzd2nts_31zd2;
                var BgL_sc_nbzd2confs_32zd2;
                var nb_toks;
                var goal_starters;
                var sc_states_33;
                var BgL_sc_nbzd2confs_34zd2;
                var BgL_sc_nbzd2toks_35zd2;
                var sc_toks_36;
                var falseHead1128;
                var sc_names_37;
                var sc_steps_38;
                var sc_predictors_39;
                var sc_enders_40;
                var sc_starters_41;
                var sc_nts_42;
                var lexer;
                var sc_ind_43;
                var make_states;
                var BgL_sc_confzd2setzd2getza2_44za2;
                var conf_set_merge_new_bang;
                var conf_set_adjoin;
                var BgL_sc_confzd2setzd2adjoinza2_45za2;
                var BgL_sc_confzd2setzd2adjoinza2za2_46z00;
                var conf_set_union;
                var forw;
                var is_parsed;
                var deriv_trees;
                var BgL_sc_derivzd2treesza2_47z70;
                var nb_deriv_trees;
                var BgL_sc_nbzd2derivzd2treesza2_48za2;
                {
                    sc_ind_43 = function(nt, sc_nts_49) {
                        var i;
                        {
                            (i = ((sc_nts_49.length)-(1)));
                            while (true) {
                                if ((i>=(0)))
                                    if ((sc_isEqual((sc_nts_49[i]), nt)))
                                        return i;
                                    else
                                        (--i);
                                else
                                    return false;
                            }
                        }
                    };
                    make_states = function(BgL_sc_nbzd2toks_50zd2, BgL_sc_nbzd2confs_51zd2) {
                        var v;
                        var i;
                        var sc_states_52;
                        {
                            (sc_states_52 = (sc_makeVector((BgL_sc_nbzd2toks_50zd2+(1)), false)));
                            (i = BgL_sc_nbzd2toks_50zd2);
                            while ((i>=(0))) {
                                {
                                    (v = (sc_makeVector((BgL_sc_nbzd2confs_51zd2+(1)), false)));
                                    (v[(0)] = (-1));
                                    (sc_states_52[i] = v);
                                    (--i);
                                }
                            }
                            return sc_states_52;
                        }
                    };
                    BgL_sc_confzd2setzd2getza2_44za2 = function(state, BgL_sc_statezd2num_53zd2, sc_conf_54) {
                        var conf_set;
                        var BgL_sc_confzd2set_55zd2;
                        return ((BgL_sc_confzd2set_55zd2 = (state[(sc_conf_54+(1))])), ((BgL_sc_confzd2set_55zd2!== false)?BgL_sc_confzd2set_55zd2:((conf_set = (sc_makeVector((BgL_sc_statezd2num_53zd2+(6)), false))), (conf_set[(1)] = (-3)), (conf_set[(2)] = (-1)), (conf_set[(3)] = (-1)), (conf_set[(4)] = (-1)), (state[(sc_conf_54+(1))] = conf_set), conf_set)));
                    };
                    conf_set_merge_new_bang = function(conf_set) {
                        return ((conf_set[((conf_set[(1)])+(5))] = (conf_set[(4)])), (conf_set[(1)] = (conf_set[(3)])), (conf_set[(3)] = (-1)), (conf_set[(4)] = (-1)));
                    };
                    conf_set_adjoin = function(state, conf_set, sc_conf_56, i) {
                        var tail;
                        return ((tail = (conf_set[(3)])), (conf_set[(i+(5))] = (-1)), (conf_set[(tail+(5))] = i), (conf_set[(3)] = i), ((tail<(0))?((conf_set[(0)] = (state[(0)])), (state[(0)] = sc_conf_56)):undefined));
                    };
                    BgL_sc_confzd2setzd2adjoinza2_45za2 = function(sc_states_57, BgL_sc_statezd2num_58zd2, l, i) {
                        var conf_set;
                        var sc_conf_59;
                        var l1;
                        var state;
                        {
                            (state = (sc_states_57[BgL_sc_statezd2num_58zd2]));
                            (l1 = l);
                            while ((l1 instanceof sc_Pair)) {
                                {
                                    (sc_conf_59 = (l1.car));
                                    (conf_set = (BgL_sc_confzd2setzd2getza2_44za2(state, BgL_sc_statezd2num_58zd2, sc_conf_59)));
                                    if (((conf_set[(i+(5))])=== false))
                                        {
                                            (conf_set_adjoin(state, conf_set, sc_conf_59, i));
                                            (l1 = (l1.cdr));
                                        }
                                    else
                                        (l1 = (l1.cdr));
                                }
                            }
                            return undefined;
                        }
                    };
                    BgL_sc_confzd2setzd2adjoinza2za2_46z00 = function(sc_states_60, BgL_sc_statesza2_61za2, BgL_sc_statezd2num_62zd2, sc_conf_63, i) {
                        var BgL_sc_confzd2setza2_64z70;
                        var BgL_sc_stateza2_65za2;
                        var conf_set;
                        var state;
                        return ((state = (sc_states_60[BgL_sc_statezd2num_62zd2])), ((((conf_set = (state[(sc_conf_63+(1))])), ((conf_set!== false)?(conf_set[(i+(5))]):false))!== false)?((BgL_sc_stateza2_65za2 = (BgL_sc_statesza2_61za2[BgL_sc_statezd2num_62zd2])), (BgL_sc_confzd2setza2_64z70 = (BgL_sc_confzd2setzd2getza2_44za2(BgL_sc_stateza2_65za2, BgL_sc_statezd2num_62zd2, sc_conf_63))), (((BgL_sc_confzd2setza2_64z70[(i+(5))])=== false)?(conf_set_adjoin(BgL_sc_stateza2_65za2, BgL_sc_confzd2setza2_64z70, sc_conf_63, i)):undefined), true):false));
                    };
                    conf_set_union = function(state, conf_set, sc_conf_66, other_set) {
                        var i;
                        {
                            (i = (other_set[(2)]));
                            while ((i>=(0))) {
                                if (((conf_set[(i+(5))])=== false))
                                    {
                                        (conf_set_adjoin(state, conf_set, sc_conf_66, i));
                                        (i = (other_set[(i+(5))]));
                                    }
                                else
                                    (i = (other_set[(i+(5))]));
                            }
                            return undefined;
                        }
                    };
                    forw = function(sc_states_67, BgL_sc_statezd2num_68zd2, sc_starters_69, sc_enders_70, sc_predictors_71, sc_steps_72, sc_nts_73) {
                        var next_set;
                        var next;
                        var conf_set;
                        var ender;
                        var l;
                        var starter_set;
                        var starter;
                        var sc_l_74;
                        var sc_loop1_75;
                        var head;
                        var BgL_sc_confzd2set_76zd2;
                        var BgL_sc_statezd2num_77zd2;
                        var state;
                        var sc_states_78;
                        var preds;
                        var BgL_sc_confzd2set_79zd2;
                        var step;
                        var sc_conf_80;
                        var BgL_sc_nbzd2nts_81zd2;
                        var sc_state_82;
                        {
                            (sc_state_82 = (sc_states_67[BgL_sc_statezd2num_68zd2]));
                            (BgL_sc_nbzd2nts_81zd2 = (sc_nts_73.length));
                            while (true) {
                                {
                                    (sc_conf_80 = (sc_state_82[(0)]));
                                    if ((sc_conf_80>=(0)))
                                        {
                                            (step = (sc_steps_72[sc_conf_80]));
                                            (BgL_sc_confzd2set_79zd2 = (sc_state_82[(sc_conf_80+(1))]));
                                            (head = (BgL_sc_confzd2set_79zd2[(4)]));
                                            (sc_state_82[(0)] = (BgL_sc_confzd2set_79zd2[(0)]));
                                            (conf_set_merge_new_bang(BgL_sc_confzd2set_79zd2));
                                            if ((step>=(0)))
                                                {
                                                    (sc_l_74 = (sc_starters_69[step]));
                                                    while ((sc_l_74 instanceof sc_Pair)) {
                                                        {
                                                            (starter = (sc_l_74.car));
                                                            (starter_set = (BgL_sc_confzd2setzd2getza2_44za2(sc_state_82, BgL_sc_statezd2num_68zd2, starter)));
                                                            if (((starter_set[(BgL_sc_statezd2num_68zd2+(5))])=== false))
                                                                {
                                                                    (conf_set_adjoin(sc_state_82, starter_set, starter, BgL_sc_statezd2num_68zd2));
                                                                    (sc_l_74 = (sc_l_74.cdr));
                                                                }
                                                            else
                                                                (sc_l_74 = (sc_l_74.cdr));
                                                        }
                                                    }
                                                    (l = (sc_enders_70[step]));
                                                    while ((l instanceof sc_Pair)) {
                                                        {
                                                            (ender = (l.car));
                                                            if ((((conf_set = (sc_state_82[(ender+(1))])), ((conf_set!== false)?(conf_set[(BgL_sc_statezd2num_68zd2+(5))]):false))!== false))
                                                                {
                                                                    (next = (sc_conf_80+(1)));
                                                                    (next_set = (BgL_sc_confzd2setzd2getza2_44za2(sc_state_82, BgL_sc_statezd2num_68zd2, next)));
                                                                    (conf_set_union(sc_state_82, next_set, next, BgL_sc_confzd2set_79zd2));
                                                                    (l = (l.cdr));
                                                                }
                                                            else
                                                                (l = (l.cdr));
                                                        }
                                                    }
                                                }
                                            else
                                                {
                                                    (preds = (sc_predictors_71[(step+BgL_sc_nbzd2nts_81zd2)]));
                                                    (sc_states_78 = sc_states_67);
                                                    (state = sc_state_82);
                                                    (BgL_sc_statezd2num_77zd2 = BgL_sc_statezd2num_68zd2);
                                                    (BgL_sc_confzd2set_76zd2 = BgL_sc_confzd2set_79zd2);
                                                    sc_loop1_75 = function(l) {
                                                        var sc_state_83;
                                                        var BgL_sc_nextzd2set_84zd2;
                                                        var sc_next_85;
                                                        var pred_set;
                                                        var i;
                                                        var pred;
                                                        if ((l instanceof sc_Pair))
                                                            {
                                                                (pred = (l.car));
                                                                (i = head);
                                                                while ((i>=(0))) {
                                                                    {
                                                                        (pred_set = ((sc_state_83 = (sc_states_78[i])), (sc_state_83[(pred+(1))])));
                                                                        if ((pred_set!== false))
                                                                            {
                                                                                (sc_next_85 = (pred+(1)));
                                                                                (BgL_sc_nextzd2set_84zd2 = (BgL_sc_confzd2setzd2getza2_44za2(state, BgL_sc_statezd2num_77zd2, sc_next_85)));
                                                                                (conf_set_union(state, BgL_sc_nextzd2set_84zd2, sc_next_85, pred_set));
                                                                            }
                                                                        (i = (BgL_sc_confzd2set_76zd2[(i+(5))]));
                                                                    }
                                                                }
                                                                return (sc_loop1_75((l.cdr)));
                                                            }
                                                        else
                                                            return undefined;
                                                    };
                                                    (sc_loop1_75(preds));
                                                }
                                        }
                                    else
                                        return undefined;
                                }
                            }
                        }
                    };
                    is_parsed = function(nt, i, j, sc_nts_86, sc_enders_87, sc_states_88) {
                        var conf_set;
                        var state;
                        var sc_conf_89;
                        var l;
                        var BgL_sc_ntza2_90za2;
                        {
                            (BgL_sc_ntza2_90za2 = (sc_ind_43(nt, sc_nts_86)));
                            if ((BgL_sc_ntza2_90za2!== false))
                                {
                                    (sc_nts_86.length);
                                    (l = (sc_enders_87[BgL_sc_ntza2_90za2]));
                                    while (true) {
                                        if ((l instanceof sc_Pair))
                                            {
                                                (sc_conf_89 = (l.car));
                                                if ((((state = (sc_states_88[j])), (conf_set = (state[(sc_conf_89+(1))])), ((conf_set!== false)?(conf_set[(i+(5))]):false))!== false))
                                                    return true;
                                                else
                                                    (l = (l.cdr));
                                            }
                                        else
                                            return false;
                                    }
                                }
                            else
                                return false;
                        }
                    };
                    deriv_trees = function(sc_conf_91, i, j, sc_enders_92, sc_steps_93, sc_names_94, sc_toks_95, sc_states_96, BgL_sc_nbzd2nts_97zd2) {
                        var sc_loop1_98;
                        var prev;
                        var name;
                        return ((name = (sc_names_94[sc_conf_91])), ((name!== false)?((sc_conf_91<BgL_sc_nbzd2nts_97zd2)?(sc_list((sc_list(name, ((sc_toks_95[i]).car))))):(sc_list((sc_list(name))))):((prev = (sc_conf_91-(1))), (sc_loop1_98 = function(l1, l2) {
                            var loop2;
                            var ender_set;
                            var state;
                            var ender;
                            var l1;
                            var l2;
                            while (true) {
                                if ((l1 instanceof sc_Pair))
                                    {
                                        (ender = (l1.car));
                                        (ender_set = ((state = (sc_states_96[j])), (state[(ender+(1))])));
                                        if ((ender_set!== false))
                                            {
                                                loop2 = function(k, l2) {
                                                    var loop3;
                                                    var ender_trees;
                                                    var prev_trees;
                                                    var conf_set;
                                                    var sc_state_99;
                                                    var k;
                                                    var l2;
                                                    while (true) {
                                                        if ((k>=(0)))
                                                            if (((k>=i)&&(((sc_state_99 = (sc_states_96[k])), (conf_set = (sc_state_99[(prev+(1))])), ((conf_set!== false)?(conf_set[(i+(5))]):false))!== false)))
                                                                {
                                                                    (prev_trees = (deriv_trees(prev, i, k, sc_enders_92, sc_steps_93, sc_names_94, sc_toks_95, sc_states_96, BgL_sc_nbzd2nts_97zd2)));
                                                                    (ender_trees = (deriv_trees(ender, k, j, sc_enders_92, sc_steps_93, sc_names_94, sc_toks_95, sc_states_96, BgL_sc_nbzd2nts_97zd2)));
                                                                    loop3 = function(l3, l2) {
                                                                        var l4;
                                                                        var sc_l2_100;
                                                                        var ender_tree;
                                                                        if ((l3 instanceof sc_Pair))
                                                                            {
                                                                                (ender_tree = (sc_list((l3.car))));
                                                                                (l4 = prev_trees);
                                                                                (sc_l2_100 = l2);
                                                                                while ((l4 instanceof sc_Pair)) {
                                                                                    {
                                                                                        (sc_l2_100 = (new sc_Pair((sc_append((l4.car), ender_tree)), sc_l2_100)));
                                                                                        (l4 = (l4.cdr));
                                                                                    }
                                                                                }
                                                                                return (loop3((l3.cdr), sc_l2_100));
                                                                            }
                                                                        else
                                                                            return (loop2((ender_set[(k+(5))]), l2));
                                                                    };
                                                                    return (loop3(ender_trees, l2));
                                                                }
                                                            else
                                                                (k = (ender_set[(k+(5))]));
                                                        else
                                                            return (sc_loop1_98((l1.cdr), l2));
                                                    }
                                                };
                                                return (loop2((ender_set[(2)]), l2));
                                            }
                                        else
                                            (l1 = (l1.cdr));
                                    }
                                else
                                    return l2;
                            }
                        }), (sc_loop1_98((sc_enders_92[(sc_steps_93[prev])]), null)))));
                    };
                    BgL_sc_derivzd2treesza2_47z70 = function(nt, i, j, sc_nts_101, sc_enders_102, sc_steps_103, sc_names_104, sc_toks_105, sc_states_106) {
                        var conf_set;
                        var state;
                        var sc_conf_107;
                        var l;
                        var trees;
                        var BgL_sc_nbzd2nts_108zd2;
                        var BgL_sc_ntza2_109za2;
                        {
                            (BgL_sc_ntza2_109za2 = (sc_ind_43(nt, sc_nts_101)));
                            if ((BgL_sc_ntza2_109za2!== false))
                                {
                                    (BgL_sc_nbzd2nts_108zd2 = (sc_nts_101.length));
                                    (l = (sc_enders_102[BgL_sc_ntza2_109za2]));
                                    (trees = null);
                                    while ((l instanceof sc_Pair)) {
                                        {
                                            (sc_conf_107 = (l.car));
                                            if ((((state = (sc_states_106[j])), (conf_set = (state[(sc_conf_107+(1))])), ((conf_set!== false)?(conf_set[(i+(5))]):false))!== false))
                                                {
                                                    (l = (l.cdr));
                                                    (trees = (sc_append((deriv_trees(sc_conf_107, i, j, sc_enders_102, sc_steps_103, sc_names_104, sc_toks_105, sc_states_106, BgL_sc_nbzd2nts_108zd2)), trees)));
                                                }
                                            else
                                                (l = (l.cdr));
                                        }
                                    }
                                    return trees;
                                }
                            else
                                return false;
                        }
                    };
                    nb_deriv_trees = function(sc_conf_110, i, j, sc_enders_111, sc_steps_112, sc_toks_113, sc_states_114, BgL_sc_nbzd2nts_115zd2) {
                        var sc_loop1_116;
                        var tmp1124;
                        var prev;
                        return ((prev = (sc_conf_110-(1))), ((((tmp1124 = (sc_conf_110<BgL_sc_nbzd2nts_115zd2)), ((tmp1124!== false)?tmp1124:((sc_steps_112[prev])<(0))))!== false)?(1):((sc_loop1_116 = function(l, sc_n_118) {
                            var nb_ender_trees;
                            var nb_prev_trees;
                            var conf_set;
                            var state;
                            var k;
                            var n;
                            var ender_set;
                            var sc_state_117;
                            var ender;
                            var l;
                            var sc_n_118;
                            while (true) {
                                if ((l instanceof sc_Pair))
                                    {
                                        (ender = (l.car));
                                        (ender_set = ((sc_state_117 = (sc_states_114[j])), (sc_state_117[(ender+(1))])));
                                        if ((ender_set!== false))
                                            {
                                                (k = (ender_set[(2)]));
                                                (n = sc_n_118);
                                                while ((k>=(0))) {
                                                    if (((k>=i)&&(((state = (sc_states_114[k])), (conf_set = (state[(prev+(1))])), ((conf_set!== false)?(conf_set[(i+(5))]):false))!== false)))
                                                        {
                                                            (nb_prev_trees = (nb_deriv_trees(prev, i, k, sc_enders_111, sc_steps_112, sc_toks_113, sc_states_114, BgL_sc_nbzd2nts_115zd2)));
                                                            (nb_ender_trees = (nb_deriv_trees(ender, k, j, sc_enders_111, sc_steps_112, sc_toks_113, sc_states_114, BgL_sc_nbzd2nts_115zd2)));
                                                            (k = (ender_set[(k+(5))]));
                                                            (n +=(nb_prev_trees*nb_ender_trees));
                                                        }
                                                    else
                                                        (k = (ender_set[(k+(5))]));
                                                }
                                                return (sc_loop1_116((l.cdr), n));
                                            }
                                        else
                                            (l = (l.cdr));
                                    }
                                else
                                    return sc_n_118;
                            }
                        }), (sc_loop1_116((sc_enders_111[(sc_steps_112[prev])]), (0))))));
                    };
                    BgL_sc_nbzd2derivzd2treesza2_48za2 = function(nt, i, j, sc_nts_119, sc_enders_120, sc_steps_121, sc_toks_122, sc_states_123) {
                        var conf_set;
                        var state;
                        var sc_conf_124;
                        var l;
                        var nb_trees;
                        var BgL_sc_nbzd2nts_125zd2;
                        var BgL_sc_ntza2_126za2;
                        {
                            (BgL_sc_ntza2_126za2 = (sc_ind_43(nt, sc_nts_119)));
                            if ((BgL_sc_ntza2_126za2!== false))
                                {
                                    (BgL_sc_nbzd2nts_125zd2 = (sc_nts_119.length));
                                    (l = (sc_enders_120[BgL_sc_ntza2_126za2]));
                                    (nb_trees = (0));
                                    while ((l instanceof sc_Pair)) {
                                        {
                                            (sc_conf_124 = (l.car));
                                            if ((((state = (sc_states_123[j])), (conf_set = (state[(sc_conf_124+(1))])), ((conf_set!== false)?(conf_set[(i+(5))]):false))!== false))
                                                {
                                                    (l = (l.cdr));
                                                    (nb_trees = ((nb_deriv_trees(sc_conf_124, i, j, sc_enders_120, sc_steps_121, sc_toks_122, sc_states_123, BgL_sc_nbzd2nts_125zd2))+nb_trees));
                                                }
                                            else
                                                (l = (l.cdr));
                                        }
                                    }
                                    return nb_trees;
                                }
                            else
                                return false;
                        }
                    };
                    (lexer = (parser_descr[(0)]));
                    (sc_nts_42 = (parser_descr[(1)]));
                    (sc_starters_41 = (parser_descr[(2)]));
                    (sc_enders_40 = (parser_descr[(3)]));
                    (sc_predictors_39 = (parser_descr[(4)]));
                    (sc_steps_38 = (parser_descr[(5)]));
                    (sc_names_37 = (parser_descr[(6)]));
                    (falseHead1128 = (new sc_Pair(null, null)));
                    (L1125 = (lexer(input)));
                    (tail1129 = falseHead1128);
                    while (!(L1125 === null)) {
                        {
                            (tok = (L1125.car));
                            (l1 = (tok.cdr));
                            (l2 = null);
                            while ((l1 instanceof sc_Pair)) {
                                {
                                    (sc_i_29 = (sc_ind_43((l1.car), sc_nts_42)));
                                    if ((sc_i_29!== false))
                                        {
                                            (l1 = (l1.cdr));
                                            (l2 = (new sc_Pair(sc_i_29, l2)));
                                        }
                                    else
                                        (l1 = (l1.cdr));
                                }
                            }
                            (sc_optrOpnd_22 = (new sc_Pair((tok.car), (sc_reverse(l2)))));
                            (sc_optrOpnd_21 = (new sc_Pair(sc_optrOpnd_22, null)));
                            (tail1129.cdr = sc_optrOpnd_21);
                            (tail1129 = (tail1129.cdr));
                            (L1125 = (L1125.cdr));
                        }
                    }
                    (sc_optrOpnd_20 = (falseHead1128.cdr));
                    (sc_toks_36 = (sc_list2vector(sc_optrOpnd_20)));
                    (BgL_sc_nbzd2toks_35zd2 = (sc_toks_36.length));
                    (BgL_sc_nbzd2confs_34zd2 = (sc_steps_38.length));
                    (sc_states_33 = (make_states(BgL_sc_nbzd2toks_35zd2, BgL_sc_nbzd2confs_34zd2)));
                    (goal_starters = (sc_starters_41[(0)]));
                    (BgL_sc_confzd2setzd2adjoinza2_45za2(sc_states_33, (0), goal_starters, (0)));
                    (forw(sc_states_33, (0), sc_starters_41, sc_enders_40, sc_predictors_39, sc_steps_38, sc_nts_42));
                    (sc_i_28 = (0));
                    while ((sc_i_28<BgL_sc_nbzd2toks_35zd2)) {
                        {
                            (tok_nts = ((sc_toks_36[sc_i_28]).cdr));
                            (BgL_sc_confzd2setzd2adjoinza2_45za2(sc_states_33, (sc_i_28+(1)), tok_nts, sc_i_28));
                            (forw(sc_states_33, (sc_i_28+(1)), sc_starters_41, sc_enders_40, sc_predictors_39, sc_steps_38, sc_nts_42));
                            (++sc_i_28);
                        }
                    }
                    (nb_toks = (sc_toks_36.length));
                    (BgL_sc_nbzd2confs_32zd2 = (sc_steps_38.length));
                    (BgL_sc_nbzd2nts_31zd2 = (sc_nts_42.length));
                    (BgL_sc_statesza2_30za2 = (make_states(nb_toks, BgL_sc_nbzd2confs_32zd2)));
                    (goal_enders = (sc_enders_40[(0)]));
                    (l = goal_enders);
                    while ((l instanceof sc_Pair)) {
                        {
                            (conf = (l.car));
                            (BgL_sc_confzd2setzd2adjoinza2za2_46z00(sc_states_33, BgL_sc_statesza2_30za2, nb_toks, conf, (0)));
                            (l = (l.cdr));
                        }
                    }
                    (i = nb_toks);
                    while ((i>=(0))) {
                        {
                            (states = sc_states_33);
                            (BgL_sc_statesza2_27za2 = BgL_sc_statesza2_30za2);
                            (state_num = i);
                            (sc_enders_26 = sc_enders_40);
                            (sc_steps_25 = sc_steps_38);
                            (BgL_sc_nbzd2nts_24zd2 = BgL_sc_nbzd2nts_31zd2);
                            (toks = sc_toks_36);
                            (BgL_sc_stateza2_23za2 = (BgL_sc_statesza2_30za2[i]));
                            loop1 = function() {
                                var sc_loop1_127;
                                var prev;
                                var BgL_sc_statesza2_128za2;
                                var sc_states_129;
                                var j;
                                var i;
                                var sc_i_130;
                                var head;
                                var conf_set;
                                var sc_conf_131;
                                {
                                    (sc_conf_131 = (BgL_sc_stateza2_23za2[(0)]));
                                    if ((sc_conf_131>=(0)))
                                        {
                                            (conf_set = (BgL_sc_stateza2_23za2[(sc_conf_131+(1))]));
                                            (head = (conf_set[(4)]));
                                            (BgL_sc_stateza2_23za2[(0)] = (conf_set[(0)]));
                                            (conf_set_merge_new_bang(conf_set));
                                            (sc_i_130 = head);
                                            while ((sc_i_130>=(0))) {
                                                {
                                                    (i = sc_i_130);
                                                    (j = state_num);
                                                    (sc_states_129 = states);
                                                    (BgL_sc_statesza2_128za2 = BgL_sc_statesza2_27za2);
                                                    (prev = (sc_conf_131-(1)));
                                                    if (((sc_conf_131>=BgL_sc_nbzd2nts_24zd2)&&((sc_steps_25[prev])>=(0))))
                                                        {
                                                            sc_loop1_127 = function(l) {
                                                                var k;
                                                                var ender_set;
                                                                var state;
                                                                var ender;
                                                                var l;
                                                                while (true) {
                                                                    if ((l instanceof sc_Pair))
                                                                        {
                                                                            (ender = (l.car));
                                                                            (ender_set = ((state = (sc_states_129[j])), (state[(ender+(1))])));
                                                                            if ((ender_set!== false))
                                                                                {
                                                                                    (k = (ender_set[(2)]));
                                                                                    while ((k>=(0))) {
                                                                                        {
                                                                                            if ((k>=i))
                                                                                                if (((BgL_sc_confzd2setzd2adjoinza2za2_46z00(sc_states_129, BgL_sc_statesza2_128za2, k, prev, i))!== false))
                                                                                                    (BgL_sc_confzd2setzd2adjoinza2za2_46z00(sc_states_129, BgL_sc_statesza2_128za2, j, ender, k));
                                                                                            (k = (ender_set[(k+(5))]));
                                                                                        }
                                                                                    }
                                                                                    return (sc_loop1_127((l.cdr)));
                                                                                }
                                                                            else
                                                                                (l = (l.cdr));
                                                                        }
                                                                    else
                                                                        return undefined;
                                                                }
                                                            };
                                                            (sc_loop1_127((sc_enders_26[(sc_steps_25[prev])])));
                                                        }
                                                    (sc_i_130 = (conf_set[(sc_i_130+(5))]));
                                                }
                                            }
                                            return (loop1());
                                        }
                                    else
                                        return undefined;
                                }
                            };
                            (loop1());
                            (--i);
                        }
                    }
                    (optrOpnd = BgL_sc_statesza2_30za2);
                    return [sc_nts_42, sc_starters_41, sc_enders_40, sc_predictors_39, sc_steps_38, sc_names_37, sc_toks_36, optrOpnd, is_parsed, BgL_sc_derivzd2treesza2_47z70, BgL_sc_nbzd2derivzd2treesza2_48za2];
                }
            };
        }
    };
    BgL_parsezd2ze3parsedzf3zc2 = function(parse, nt, i, j) {
        var is_parsed;
        var states;
        var enders;
        var nts;
        return ((nts = (parse[(0)])), (enders = (parse[(2)])), (states = (parse[(7)])), (is_parsed = (parse[(8)])), (is_parsed(nt, i, j, nts, enders, states)));
    };
    BgL_parsezd2ze3treesz31 = function(parse, nt, i, j) {
        var BgL_sc_derivzd2treesza2_132z70;
        var states;
        var toks;
        var names;
        var steps;
        var enders;
        var nts;
        return ((nts = (parse[(0)])), (enders = (parse[(2)])), (steps = (parse[(4)])), (names = (parse[(5)])), (toks = (parse[(6)])), (states = (parse[(7)])), (BgL_sc_derivzd2treesza2_132z70 = (parse[(9)])), (BgL_sc_derivzd2treesza2_132z70(nt, i, j, nts, enders, steps, names, toks, states)));
    };
    BgL_parsezd2ze3nbzd2treesze3 = function(parse, nt, i, j) {
        var BgL_sc_nbzd2derivzd2treesza2_133za2;
        var states;
        var toks;
        var steps;
        var enders;
        var nts;
        return ((nts = (parse[(0)])), (enders = (parse[(2)])), (steps = (parse[(4)])), (toks = (parse[(6)])), (states = (parse[(7)])), (BgL_sc_nbzd2derivzd2treesza2_133za2 = (parse[(10)])), (BgL_sc_nbzd2derivzd2treesza2_133za2(nt, i, j, nts, enders, steps, toks, states)));
    };
    test = function(k) {
        var x;
        var p;
        return ((p = (BgL_makezd2parserzd2(const_earley, function(l) {
            var sc_x_134;
            var tail1134;
            var L1130;
            var falseHead1133;
            {
                (falseHead1133 = (new sc_Pair(null, null)));
                (tail1134 = falseHead1133);
                (L1130 = l);
                while (!(L1130 === null)) {
                    {
                        (tail1134.cdr = (new sc_Pair(((sc_x_134 = (L1130.car)), (sc_list(sc_x_134, sc_x_134))), null)));
                        (tail1134 = (tail1134.cdr));
                        (L1130 = (L1130.cdr));
                    }
                }
                return (falseHead1133.cdr);
            }
        }))), (x = (p((sc_vector2list((sc_makeVector(k, "\u1E9Ca"))))))), (sc_length((BgL_parsezd2ze3treesz31(x, "\u1E9Cs", (0), k)))));
    };
    BgL_earleyzd2benchmarkzd2 = function() {
        var args = null;
        for (var sc_tmp = arguments.length - 1; sc_tmp >= 0; sc_tmp--) {
            args = sc_cons(arguments[sc_tmp], args);
        }
        var k;
        return ((k = ((args === null)?(7):(args.car))), (BgL_runzd2benchmarkzd2("earley", (1), function() {
            return (test(k));
        }, function(result) {
            return ((sc_display(result)), (sc_newline()), result == 132);
        })));
    };
}


/************* END OF GENERATED CODE *************/
// Invoke this function to run a benchmark.
// The first argument is a string identifying the benchmark.
// The second argument is the number of times to run the benchmark.
// The third argument is a function that runs the benchmark.
// The fourth argument is a unary function that warns if the result
// returned by the benchmark is incorrect.
//
// Example:
// RunBenchmark("new Array()",
//              1,
//              function () { new Array(1000000); }
//              function (v) {
//                return (v instanceof Array) && (v.length == 1000000);
//              });

SC_DEFAULT_OUT = new sc_GenericOutputPort(function(s) {});
SC_ERROR_OUT = SC_DEFAULT_OUT;

function RunBenchmark(name, count, run, warn) {
  for (var n = 0; n < count; ++n) {
    result = run();
    if (!warn(result)) {
      throw new Error("Earley or Boyer did incorrect number of rewrites");
    }
  }
}

var BgL_runzd2benchmarkzd2 = RunBenchmark;

// main.js

var completed = 0;
var benchmarks = BenchmarkSuite.CountBenchmarks();
var success = true;
var latencyBenchmarks = ["Splay", "Mandreel"];
var skipBenchmarks =
        typeof skipBenchmarks === "undefined" ? [] : skipBenchmarks;

function ShowBox(name) {
  var box = document.getElementById("Box-" + name);
  box.style.visibility = 'visible';
  var bar = document.getElementById("progress-bar").style.width = ""
      + ((++completed) / benchmarks) * 100 + "%";
  latencyBenchmarks.forEach(function(entry) {
    if (name.valueOf() === entry.valueOf()) {
      var box1 = document.getElementById("Box-" + name + "Latency");
      box1.style.visibility = 'visible';
    }
  });
}

function AddResult(name, result) {
  console.log(name + ': ' + result);
  var box = document.getElementById("Result-" + name);
  box.innerHTML = result;
}

function AddError(name, error) {
  console.log(name + ": " + error.message);
  if (error == "TypedArrayUnsupported") {
    AddResult(name, '<b>Unsupported<\/b>');
  } else if (error == "PerformanceNowUnsupported") {
    AddResult(name, '<b>Timer error<\/b>');
  } else {
    AddResult(name, '<b>Error</b>');
  }
  success = false;
}

function AddScore(score) {
  var status = document.getElementById("main-banner");
  if (success) {
    status.innerHTML = "Octane Score: " + score;
  } else {
    status.innerHTML = "Octane Score (incomplete): " + score;
  }
  document.getElementById("progress-bar-container").style.visibility = 'hidden';
  document.getElementById("bottom-text").style.visibility = 'visible';
  document.getElementById("inside-anchor").removeChild(document.getElementById("bar-appendix"));
  document.getElementById("alertbox").style.visibility = 'hidden';
}

function Run() {
  document.getElementById("main-banner").innerHTML = "Running Octane...";
  // append the progress bar elements..
  document.getElementById("bar-appendix").innerHTML = "<br/><div class=\"progress progress-striped\" id=\"progress-bar-container\" style=\"visibility:hidden\"><div class=\"bar\"style=\"width: 0%;\" id=\"progress-bar\"></div></div>";
  var anchor = document.getElementById("run-octane");
  var parent = document.getElementById("main-container");
  parent.appendChild(document.getElementById("inside-anchor"));
  parent.removeChild(anchor);

  document.getElementById("startup-text").innerHTML="";

  document.getElementById("progress-bar-container").style.visibility = 'visible';

  BenchmarkSuite.RunSuites({
    NotifyStart : ShowBox,
    NotifyError : AddError,
    NotifyResult : AddResult,
    NotifyScore : AddScore
  },
  skipBenchmarks);
}

function CheckCompatibility() {
  // If no Typed Arrays support, show warning label.
  var hasTypedArrays = typeof Uint8Array != "undefined"
      && typeof Float64Array != "undefined"
      && typeof (new Uint8Array(0)).subarray != "undefined";

  if (!hasTypedArrays) {
    console.log("Typed Arrays not supported");
    document.getElementById("alertbox").style.display="block";
  }
  if (window.document.URL.indexOf('skip_zlib=1') >= 0)
    skipBenchmarks.push("zlib");
  if (window.document.URL.indexOf('auto=1') >= 0)
    Run();
}

function Load() {
  setTimeout(CheckCompatibility, 200);
}

JAM.stopProfile('load');
