introspect(JAM.policy.pFull) {
var performance = performance || {};
performance.now = function() {
  return performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || Date.now;
}();
function Benchmark(name$$30, doWarmup, doDeterministic, deterministicIterations, run, setup, tearDown, rmsResult, minIterations) {
  this.name = name$$30;
  this.doWarmup = doWarmup;
  this.doDeterministic = doDeterministic;
  this.deterministicIterations = deterministicIterations;
  this.run = run;
  this.Setup = setup ? setup : function() {
  };
  this.TearDown = tearDown ? tearDown : function() {
  };
  this.rmsResult = rmsResult ? rmsResult : null;
  this.minIterations = minIterations ? minIterations : 32;
}
function BenchmarkResult(benchmark, time, latency) {
  this.benchmark = benchmark;
  this.time = time;
  this.latency = latency;
}
BenchmarkResult.prototype.valueOf = function() {
  return this.time;
};
function BenchmarkSuite(name$$31, reference, benchmarks$$1) {
  this.name = name$$31;
  this.reference = reference;
  this.benchmarks = benchmarks$$1;
  BenchmarkSuite.suites.push(this);
}
BenchmarkSuite.suites = [];
BenchmarkSuite.version = "9";
BenchmarkSuite.config = {doWarmup:undefined, doDeterministic:undefined};
alert = function(s$$2) {
  throw "Alert called with argument: " + s$$2;
};
BenchmarkSuite.ResetRNG = function() {
  Math.random = function() {
    var seed = 49734321;
    return function() {
      seed = seed + 2127912214 + (seed << 12) & 4294967295;
      seed = (seed ^ 3345072700 ^ seed >>> 19) & 4294967295;
      seed = seed + 374761393 + (seed << 5) & 4294967295;
      seed = (seed + 3550635116 ^ seed << 9) & 4294967295;
      seed = seed + 4251993797 + (seed << 3) & 4294967295;
      seed = (seed ^ 3042594569 ^ seed >>> 16) & 4294967295;
      return(seed & 268435455) / 268435456;
    };
  }();
};
BenchmarkSuite.RunSuites = function(runner, skipBenchmarks$$1) {
  function RunStep() {
    for (;continuation || index$$39 < length$$11;) {
      if (continuation) {
        continuation = continuation();
      } else {
        var suite = suites[index$$39++];
        if (runner.NotifyStart) {
          runner.NotifyStart(suite.name);
        }
        if (skipBenchmarks$$1.indexOf(suite.name) > -1) {
          suite.NotifySkipped(runner);
        } else {
          continuation = suite.RunStep(runner);
        }
      }
      if (continuation && typeof window != "undefined" && window.setTimeout) {
        window.setTimeout(RunStep, 25);
        return;
      }
    }
    if (runner.NotifyScore) {
      var score = BenchmarkSuite.GeometricMean(BenchmarkSuite.scores);
      var formatted = BenchmarkSuite.FormatScore(100 * score);
      runner.NotifyScore(formatted);
    }
  }
  skipBenchmarks$$1 = typeof skipBenchmarks$$1 === "undefined" ? [] : skipBenchmarks$$1;
  var continuation = null;
  var suites = BenchmarkSuite.suites;
  var length$$11 = suites.length;
  BenchmarkSuite.scores = [];
  var index$$39 = 0;
  RunStep();
};
BenchmarkSuite.CountBenchmarks = function() {
  var result$$1 = 0;
  var suites$$1 = BenchmarkSuite.suites;
  var i$$2 = 0;
  for (;i$$2 < suites$$1.length;i$$2++) {
    result$$1 += suites$$1[i$$2].benchmarks.length;
  }
  return result$$1;
};
BenchmarkSuite.GeometricMean = function(numbers) {
  var log = 0;
  var i$$3 = 0;
  for (;i$$3 < numbers.length;i$$3++) {
    log += Math.log(numbers[i$$3]);
  }
  return Math.pow(Math.E, log / numbers.length);
};
BenchmarkSuite.GeometricMeanTime = function(measurements) {
  var log$$1 = 0;
  var i$$4 = 0;
  for (;i$$4 < measurements.length;i$$4++) {
    log$$1 += Math.log(measurements[i$$4].time);
  }
  return Math.pow(Math.E, log$$1 / measurements.length);
};
BenchmarkSuite.GeometricMeanLatency = function(measurements$$1) {
  var log$$2 = 0;
  var hasLatencyResult = false;
  var i$$5 = 0;
  for (;i$$5 < measurements$$1.length;i$$5++) {
    if (measurements$$1[i$$5].latency != 0) {
      log$$2 += Math.log(measurements$$1[i$$5].latency);
      hasLatencyResult = true;
    }
  }
  if (hasLatencyResult) {
    return Math.pow(Math.E, log$$2 / measurements$$1.length);
  } else {
    return 0;
  }
};
BenchmarkSuite.FormatScore = function(value$$27) {
  if (value$$27 > 100) {
    return value$$27.toFixed(0);
  } else {
    return value$$27.toPrecision(3);
  }
};
BenchmarkSuite.prototype.NotifyStep = function(result$$2) {
  this.results.push(result$$2);
  if (this.runner.NotifyStep) {
    this.runner.NotifyStep(result$$2.benchmark.name);
  }
};
BenchmarkSuite.prototype.NotifyResult = function() {
  var mean = BenchmarkSuite.GeometricMeanTime(this.results);
  var score$$1 = this.reference[0] / mean;
  BenchmarkSuite.scores.push(score$$1);
  if (this.runner.NotifyResult) {
    var formatted$$1 = BenchmarkSuite.FormatScore(100 * score$$1);
    this.runner.NotifyResult(this.name, formatted$$1);
  }
  if (this.reference.length == 2) {
    var meanLatency = BenchmarkSuite.GeometricMeanLatency(this.results);
    if (meanLatency != 0) {
      var scoreLatency = this.reference[1] / meanLatency;
      BenchmarkSuite.scores.push(scoreLatency);
      if (this.runner.NotifyResult) {
        var formattedLatency = BenchmarkSuite.FormatScore(100 * scoreLatency);
        this.runner.NotifyResult(this.name + "Latency", formattedLatency);
      }
    }
  }
};
BenchmarkSuite.prototype.NotifySkipped = function(runner$$1) {
  BenchmarkSuite.scores.push(1);
  if (runner$$1.NotifyResult) {
    runner$$1.NotifyResult(this.name, "Skipped");
  }
};
BenchmarkSuite.prototype.NotifyError = function(error$$1) {
  if (this.runner.NotifyError) {
    this.runner.NotifyError(this.name, error$$1);
  }
  if (this.runner.NotifyStep) {
    this.runner.NotifyStep(this.name);
  }
};
BenchmarkSuite.prototype.RunSingleBenchmark = function(benchmark$$1, data$$18) {
  function Measure(data$$19) {
    var elapsed = 0;
    var start$$4 = new Date;
    var i$$6 = 0;
    for (;doDeterministic$$1 ? i$$6 < benchmark$$1.deterministicIterations : elapsed < 1E3;i$$6++) {
      benchmark$$1.run();
      elapsed = new Date - start$$4;
    }
    if (data$$19 != null) {
      data$$19.runs += i$$6;
      data$$19.elapsed += elapsed;
    }
  }
  var config = BenchmarkSuite.config;
  var doWarmup$$1 = config.doWarmup !== undefined ? config.doWarmup : benchmark$$1.doWarmup;
  var doDeterministic$$1 = config.doDeterministic !== undefined ? config.doDeterministic : benchmark$$1.doDeterministic;
  if (!doWarmup$$1 && data$$18 == null) {
    data$$18 = {runs:0, elapsed:0};
  }
  if (data$$18 == null) {
    Measure(null);
    return{runs:0, elapsed:0};
  } else {
    Measure(data$$18);
    if (data$$18.runs < benchmark$$1.minIterations) {
      return data$$18;
    }
    var usec = data$$18.elapsed * 1E3 / data$$18.runs;
    var rms = benchmark$$1.rmsResult != null ? benchmark$$1.rmsResult() : 0;
    this.NotifyStep(new BenchmarkResult(benchmark$$1, usec, rms));
    return null;
  }
};
BenchmarkSuite.prototype.RunStep = function(runner$$2) {
  function RunNextSetup() {
    if (index$$40 < length$$12) {
      try {
        suite$$1.benchmarks[index$$40].Setup();
      } catch (e$$4) {
        suite$$1.NotifyError(e$$4);
        return null;
      }
      return RunNextBenchmark;
    }
    suite$$1.NotifyResult();
    return null;
  }
  function RunNextBenchmark() {
    try {
      data$$20 = suite$$1.RunSingleBenchmark(suite$$1.benchmarks[index$$40], data$$20);
    } catch (e$$5) {
      suite$$1.NotifyError(e$$5);
      return null;
    }
    return data$$20 == null ? RunNextTearDown : RunNextBenchmark();
  }
  function RunNextTearDown() {
    try {
      suite$$1.benchmarks[index$$40++].TearDown();
    } catch (e$$6) {
      suite$$1.NotifyError(e$$6);
      return null;
    }
    return RunNextSetup;
  }
  BenchmarkSuite.ResetRNG();
  this.results = [];
  this.runner = runner$$2;
  var length$$12 = this.benchmarks.length;
  var index$$40 = 0;
  var suite$$1 = this;
  var data$$20;
  return RunNextSetup();
};
var EarleyBoyer = new BenchmarkSuite("EarleyBoyer", [666463], [new Benchmark("Earley", true, false, 2500, function() {
  BgL_earleyzd2benchmarkzd2();
}), new Benchmark("Boyer", true, false, 200, function() {
  BgL_nboyerzd2benchmarkzd2();
})]);
function sc_print_debug() {
  sc_print.apply(null, arguments);
}
var sc_JS_GLOBALS = this;
var __sc_LINE = -1;
var __sc_FILE = "";
function sc_alert() {
  var len = arguments.length;
  var s$$3 = "";
  var i$$7;
  i$$7 = 0;
  for (;i$$7 < len;i$$7++) {
    s$$3 += sc_toDisplayString(arguments[i$$7]);
  }
  return alert(s$$3);
}
function sc_typeof(x$$47) {
  return typeof x$$47;
}
function sc_error() {
  var a = [sc_jsstring2symbol("*error*")];
  var i$$8 = 0;
  for (;i$$8 < arguments.length;i$$8++) {
    a[i$$8 + 1] = arguments[i$$8];
  }
  throw a;
}
function sc_raise(obj$$16) {
  throw obj$$16;
}
function sc_withHandlerLambda(handler$$3, body) {
  try {
    return body();
  } catch (e$$7) {
    if (!e$$7._internalException) {
      return handler$$3(e$$7);
    } else {
      throw e$$7;
    }
  }
}
var sc_properties = new Object;
function sc_putpropBang(sym, key$$14, val) {
  var ht = sc_properties[sym];
  if (!ht) {
    ht = new Object;
    sc_properties[sym] = ht;
  }
  ht[key$$14] = val;
}
function sc_getprop(sym$$1, key$$15) {
  var ht$$1 = sc_properties[sym$$1];
  if (ht$$1) {
    if (key$$15 in ht$$1) {
      return ht$$1[key$$15];
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function sc_rempropBang(sym$$2, key$$16) {
  var ht$$2 = sc_properties[sym$$2];
  if (ht$$2) {
    delete ht$$2[key$$16];
  }
}
function sc_any2String(o) {
  return jsstring2string(sc_toDisplayString(o));
}
function sc_isEqv(o1, o2) {
  return o1 === o2;
}
function sc_isEq(o1$$1, o2$$1) {
  return o1$$1 === o2$$1;
}
function sc_isNumber(n$$1) {
  return typeof n$$1 === "number";
}
function sc_isComplex(n$$2) {
  return sc_isNumber(n$$2);
}
function sc_isReal(n$$3) {
  return sc_isNumber(n$$3);
}
function sc_isRational(n$$4) {
  return sc_isReal(n$$4);
}
function sc_isInteger(n$$5) {
  return parseInt(n$$5) === n$$5;
}
function sc_isExact(n$$6) {
  return false;
}
function sc_isInexact(n$$7) {
  return true;
}
function sc_equal(x$$48) {
  var i$$9 = 1;
  for (;i$$9 < arguments.length;i$$9++) {
    if (x$$48 !== arguments[i$$9]) {
      return false;
    }
  }
  return true;
}
function sc_less(x$$49) {
  var i$$10 = 1;
  for (;i$$10 < arguments.length;i$$10++) {
    if (x$$49 >= arguments[i$$10]) {
      return false;
    }
    x$$49 = arguments[i$$10];
  }
  return true;
}
function sc_greater(x$$50, y$$30) {
  var i$$11 = 1;
  for (;i$$11 < arguments.length;i$$11++) {
    if (x$$50 <= arguments[i$$11]) {
      return false;
    }
    x$$50 = arguments[i$$11];
  }
  return true;
}
function sc_lessEqual(x$$51, y$$31) {
  var i$$12 = 1;
  for (;i$$12 < arguments.length;i$$12++) {
    if (x$$51 > arguments[i$$12]) {
      return false;
    }
    x$$51 = arguments[i$$12];
  }
  return true;
}
function sc_greaterEqual(x$$52, y$$32) {
  var i$$13 = 1;
  for (;i$$13 < arguments.length;i$$13++) {
    if (x$$52 < arguments[i$$13]) {
      return false;
    }
    x$$52 = arguments[i$$13];
  }
  return true;
}
function sc_isZero(x$$53) {
  return x$$53 === 0;
}
function sc_isPositive(x$$54) {
  return x$$54 > 0;
}
function sc_isNegative(x$$55) {
  return x$$55 < 0;
}
function sc_isOdd(x$$56) {
  return x$$56 % 2 === 1;
}
function sc_isEven(x$$57) {
  return x$$57 % 2 === 0;
}
var sc_max = Math.max;
var sc_min = Math.min;
function sc_plus() {
  var sum = 0;
  var i$$14 = 0;
  for (;i$$14 < arguments.length;i$$14++) {
    sum += arguments[i$$14];
  }
  return sum;
}
function sc_multi() {
  var product = 1;
  var i$$15 = 0;
  for (;i$$15 < arguments.length;i$$15++) {
    product *= arguments[i$$15];
  }
  return product;
}
function sc_minus(x$$58) {
  if (arguments.length === 1) {
    return-x$$58;
  } else {
    var res$$1 = x$$58;
    var i$$16 = 1;
    for (;i$$16 < arguments.length;i$$16++) {
      res$$1 -= arguments[i$$16];
    }
    return res$$1;
  }
}
function sc_div(x$$59) {
  if (arguments.length === 1) {
    return 1 / x$$59;
  } else {
    var res$$2 = x$$59;
    var i$$17 = 1;
    for (;i$$17 < arguments.length;i$$17++) {
      res$$2 /= arguments[i$$17];
    }
    return res$$2;
  }
}
var sc_abs = Math.abs;
function sc_quotient(x$$60, y$$33) {
  return parseInt(x$$60 / y$$33);
}
function sc_remainder(x$$61, y$$34) {
  return x$$61 % y$$34;
}
function sc_modulo(x$$62, y$$35) {
  var remainder = x$$62 % y$$35;
  if (remainder * y$$35 < 0) {
    return remainder + y$$35;
  } else {
    return remainder;
  }
}
function sc_euclid_gcd(a$$1, b) {
  var temp;
  if (a$$1 === 0) {
    return b;
  }
  if (b === 0) {
    return a$$1;
  }
  if (a$$1 < 0) {
    a$$1 = -a$$1;
  }
  if (b < 0) {
    b = -b;
  }
  if (b > a$$1) {
    temp = a$$1;
    a$$1 = b;
    b = temp;
  }
  for (;true;) {
    a$$1 %= b;
    if (a$$1 === 0) {
      return b;
    }
    b %= a$$1;
    if (b === 0) {
      return a$$1;
    }
  }
  return b;
}
function sc_gcd() {
  var gcd = 0;
  var i$$18 = 0;
  for (;i$$18 < arguments.length;i$$18++) {
    gcd = sc_euclid_gcd(gcd, arguments[i$$18]);
  }
  return gcd;
}
function sc_lcm() {
  var lcm = 1;
  var i$$19 = 0;
  for (;i$$19 < arguments.length;i$$19++) {
    var f = Math.round(arguments[i$$19] / sc_euclid_gcd(arguments[i$$19], lcm));
    lcm *= Math.abs(f);
  }
  return lcm;
}
var sc_floor = Math.floor;
var sc_ceiling = Math.ceil;
var sc_truncate = parseInt;
var sc_round = Math.round;
var sc_exp = Math.exp;
var sc_log = Math.log;
var sc_sin = Math.sin;
var sc_cos = Math.cos;
var sc_tan = Math.tan;
var sc_asin = Math.asin;
var sc_acos = Math.acos;
var sc_atan = Math.atan;
var sc_sqrt = Math.sqrt;
var sc_expt = Math.pow;
function sc_exact2inexact(x$$63) {
  return x$$63;
}
function sc_inexact2exact(x$$64) {
  return x$$64;
}
function sc_number2jsstring(x$$65, radix) {
  if (radix) {
    return x$$65.toString(radix);
  } else {
    return x$$65.toString();
  }
}
function sc_jsstring2number(s$$4, radix$$1) {
  if (s$$4 === "") {
    return false;
  }
  if (radix$$1) {
    var t = parseInt(s$$4, radix$$1);
    if (!t && t !== 0) {
      return false;
    }
    var allowedChars = "01234567890abcdefghijklmnopqrstuvwxyz".substring(0, radix$$1 + 1);
    if ((new RegExp("^[" + allowedChars + "]*$", "i")).test(s$$4)) {
      return t;
    } else {
      return false;
    }
  } else {
    t = +s$$4;
    if (!t && t !== 0) {
      return false;
    }
    var c = s$$4.charAt(0);
    if (+c === 0 && c !== "0") {
      return false;
    }
    return t;
  }
}
function sc_not(b$$1) {
  return b$$1 === false;
}
function sc_isBoolean(b$$2) {
  return b$$2 === true || b$$2 === false;
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
  var res$$3 = "(";
  for (;true;) {
    res$$3 += writeOrDisplay(current.car);
    if (sc_isPair(current.cdr)) {
      res$$3 += " ";
      current = current.cdr;
    } else {
      if (current.cdr !== null) {
        res$$3 += " . " + writeOrDisplay(current.cdr);
        break;
      } else {
        break;
      }
    }
  }
  res$$3 += ")";
  return res$$3;
};
sc_Pair.prototype.sc_toDisplayString = function() {
  return this.sc_toWriteOrDisplayString(sc_toDisplayString);
};
sc_Pair.prototype.sc_toWriteString = function() {
  return this.sc_toWriteOrDisplayString(sc_toWriteString);
};
function sc_isPair(p) {
  return p instanceof sc_Pair;
}
function sc_isPairEqual(p1, p2, comp) {
  return comp(p1.car, p2.car) && comp(p1.cdr, p2.cdr);
}
function sc_cons(car$$1, cdr$$1) {
  return new sc_Pair(car$$1, cdr$$1);
}
function sc_consStar() {
  var res$$4 = arguments[arguments.length - 1];
  var i$$20 = arguments.length - 2;
  for (;i$$20 >= 0;i$$20--) {
    res$$4 = new sc_Pair(arguments[i$$20], res$$4);
  }
  return res$$4;
}
function sc_car(p$$1) {
  return p$$1.car;
}
function sc_cdr(p$$2) {
  return p$$2.cdr;
}
function sc_setCarBang(p$$3, val$$1) {
  p$$3.car = val$$1;
}
function sc_setCdrBang(p$$4, val$$2) {
  p$$4.cdr = val$$2;
}
function sc_caar(p$$5) {
  return p$$5.car.car;
}
function sc_cadr(p$$6) {
  return p$$6.cdr.car;
}
function sc_cdar(p$$7) {
  return p$$7.car.cdr;
}
function sc_cddr(p$$8) {
  return p$$8.cdr.cdr;
}
function sc_caaar(p$$9) {
  return p$$9.car.car.car;
}
function sc_cadar(p$$10) {
  return p$$10.car.cdr.car;
}
function sc_caadr(p$$11) {
  return p$$11.cdr.car.car;
}
function sc_caddr(p$$12) {
  return p$$12.cdr.cdr.car;
}
function sc_cdaar(p$$13) {
  return p$$13.car.car.cdr;
}
function sc_cdadr(p$$14) {
  return p$$14.cdr.car.cdr;
}
function sc_cddar(p$$15) {
  return p$$15.car.cdr.cdr;
}
function sc_cdddr(p$$16) {
  return p$$16.cdr.cdr.cdr;
}
function sc_caaaar(p$$17) {
  return p$$17.car.car.car.car;
}
function sc_caadar(p$$18) {
  return p$$18.car.cdr.car.car;
}
function sc_caaadr(p$$19) {
  return p$$19.cdr.car.car.car;
}
function sc_caaddr(p$$20) {
  return p$$20.cdr.cdr.car.car;
}
function sc_cdaaar(p$$21) {
  return p$$21.car.car.car.cdr;
}
function sc_cdadar(p$$22) {
  return p$$22.car.cdr.car.cdr;
}
function sc_cdaadr(p$$23) {
  return p$$23.cdr.car.car.cdr;
}
function sc_cdaddr(p$$24) {
  return p$$24.cdr.cdr.car.cdr;
}
function sc_cadaar(p$$25) {
  return p$$25.car.car.cdr.car;
}
function sc_caddar(p$$26) {
  return p$$26.car.cdr.cdr.car;
}
function sc_cadadr(p$$27) {
  return p$$27.cdr.car.cdr.car;
}
function sc_cadddr(p$$28) {
  return p$$28.cdr.cdr.cdr.car;
}
function sc_cddaar(p$$29) {
  return p$$29.car.car.cdr.cdr;
}
function sc_cdddar(p$$30) {
  return p$$30.car.cdr.cdr.cdr;
}
function sc_cddadr(p$$31) {
  return p$$31.cdr.car.cdr.cdr;
}
function sc_cddddr(p$$32) {
  return p$$32.cdr.cdr.cdr.cdr;
}
function sc_lastPair(l) {
  if (!sc_isPair(l)) {
    sc_error("sc_lastPair: pair expected");
  }
  var res$$5 = l;
  var cdr$$2 = l.cdr;
  for (;sc_isPair(cdr$$2);) {
    res$$5 = cdr$$2;
    cdr$$2 = res$$5.cdr;
  }
  return res$$5;
}
function sc_isNull(o$$1) {
  return o$$1 === null;
}
function sc_isList(o$$2) {
  var rabbit;
  var turtle;
  rabbit = o$$2;
  turtle = o$$2;
  for (;true;) {
    if (rabbit === null || rabbit instanceof sc_Pair && rabbit.cdr === null) {
      return true;
    } else {
      if (rabbit instanceof sc_Pair && rabbit.cdr instanceof sc_Pair) {
        rabbit = rabbit.cdr.cdr;
        turtle = turtle.cdr;
        if (rabbit === turtle) {
          return false;
        }
      } else {
        return false;
      }
    }
  }
}
function sc_list() {
  var res$$6 = null;
  var a$$2 = arguments;
  var i$$21 = a$$2.length - 1;
  for (;i$$21 >= 0;i$$21--) {
    res$$6 = new sc_Pair(a$$2[i$$21], res$$6);
  }
  return res$$6;
}
function sc_iota(num$$4, init) {
  var res$$7 = null;
  if (!init) {
    init = 0;
  }
  var i$$22 = num$$4 - 1;
  for (;i$$22 >= 0;i$$22--) {
    res$$7 = new sc_Pair(i$$22 + init, res$$7);
  }
  return res$$7;
}
function sc_makeList(nbEls, fill) {
  var res$$8 = null;
  var i$$23 = 0;
  for (;i$$23 < nbEls;i$$23++) {
    res$$8 = new sc_Pair(fill, res$$8);
  }
  return res$$8;
}
function sc_length(l$$1) {
  var res$$9 = 0;
  for (;l$$1 !== null;) {
    res$$9++;
    l$$1 = l$$1.cdr;
  }
  return res$$9;
}
function sc_remq(o$$3, l$$2) {
  var dummy = {cdr:null};
  var tail = dummy;
  for (;l$$2 !== null;) {
    if (l$$2.car !== o$$3) {
      tail.cdr = sc_cons(l$$2.car, null);
      tail = tail.cdr;
    }
    l$$2 = l$$2.cdr;
  }
  return dummy.cdr;
}
function sc_remqBang(o$$4, l$$3) {
  var dummy$$1 = {cdr:null};
  var tail$$1 = dummy$$1;
  var needsAssig = true;
  for (;l$$3 !== null;) {
    if (l$$3.car === o$$4) {
      needsAssig = true;
    } else {
      if (needsAssig) {
        tail$$1.cdr = l$$3;
        needsAssig = false;
      }
      tail$$1 = l$$3;
    }
    l$$3 = l$$3.cdr;
  }
  tail$$1.cdr = null;
  return dummy$$1.cdr;
}
function sc_delete(o$$5, l$$4) {
  var dummy$$2 = {cdr:null};
  var tail$$2 = dummy$$2;
  for (;l$$4 !== null;) {
    if (!sc_isEqual(l$$4.car, o$$5)) {
      tail$$2.cdr = sc_cons(l$$4.car, null);
      tail$$2 = tail$$2.cdr;
    }
    l$$4 = l$$4.cdr;
  }
  return dummy$$2.cdr;
}
function sc_deleteBang(o$$6, l$$5) {
  var dummy$$3 = {cdr:null};
  var tail$$3 = dummy$$3;
  var needsAssig$$1 = true;
  for (;l$$5 !== null;) {
    if (sc_isEqual(l$$5.car, o$$6)) {
      needsAssig$$1 = true;
    } else {
      if (needsAssig$$1) {
        tail$$3.cdr = l$$5;
        needsAssig$$1 = false;
      }
      tail$$3 = l$$5;
    }
    l$$5 = l$$5.cdr;
  }
  tail$$3.cdr = null;
  return dummy$$3.cdr;
}
function sc_reverseAppendBang(l1, l2) {
  var res$$10 = l2;
  for (;l1 !== null;) {
    var tmp = res$$10;
    res$$10 = l1;
    l1 = l1.cdr;
    res$$10.cdr = tmp;
  }
  return res$$10;
}
function sc_dualAppend(l1$$1, l2$$1) {
  if (l1$$1 === null) {
    return l2$$1;
  }
  if (l2$$1 === null) {
    return l1$$1;
  }
  var rev = sc_reverse(l1$$1);
  return sc_reverseAppendBang(rev, l2$$1);
}
function sc_append() {
  if (arguments.length === 0) {
    return null;
  }
  var res$$11 = arguments[arguments.length - 1];
  var i$$24 = arguments.length - 2;
  for (;i$$24 >= 0;i$$24--) {
    res$$11 = sc_dualAppend(arguments[i$$24], res$$11);
  }
  return res$$11;
}
function sc_dualAppendBang(l1$$2, l2$$2) {
  if (l1$$2 === null) {
    return l2$$2;
  }
  if (l2$$2 === null) {
    return l1$$2;
  }
  var tmp$$1 = l1$$2;
  for (;tmp$$1.cdr !== null;) {
    tmp$$1 = tmp$$1.cdr;
  }
  tmp$$1.cdr = l2$$2;
  return l1$$2;
}
function sc_appendBang() {
  var res$$12 = null;
  var i$$25 = 0;
  for (;i$$25 < arguments.length;i$$25++) {
    res$$12 = sc_dualAppendBang(res$$12, arguments[i$$25]);
  }
  return res$$12;
}
function sc_reverse(l1$$3) {
  var res$$13 = null;
  for (;l1$$3 !== null;) {
    res$$13 = sc_cons(l1$$3.car, res$$13);
    l1$$3 = l1$$3.cdr;
  }
  return res$$13;
}
function sc_reverseBang(l$$6) {
  return sc_reverseAppendBang(l$$6, null);
}
function sc_listTail(l$$7, k) {
  var res$$14 = l$$7;
  var i$$26 = 0;
  for (;i$$26 < k;i$$26++) {
    res$$14 = res$$14.cdr;
  }
  return res$$14;
}
function sc_listRef(l$$8, k$$1) {
  return sc_listTail(l$$8, k$$1).car;
}
function sc_memq(o$$7, l$$9) {
  for (;l$$9 !== null;) {
    if (l$$9.car === o$$7) {
      return l$$9;
    }
    l$$9 = l$$9.cdr;
  }
  return false;
}
function sc_memv(o$$8, l$$10) {
  for (;l$$10 !== null;) {
    if (l$$10.car === o$$8) {
      return l$$10;
    }
    l$$10 = l$$10.cdr;
  }
  return false;
}
function sc_member(o$$9, l$$11) {
  for (;l$$11 !== null;) {
    if (sc_isEqual(l$$11.car, o$$9)) {
      return l$$11;
    }
    l$$11 = l$$11.cdr;
  }
  return false;
}
function sc_assq(o$$10, al) {
  for (;al !== null;) {
    if (al.car.car === o$$10) {
      return al.car;
    }
    al = al.cdr;
  }
  return false;
}
function sc_assv(o$$11, al$$1) {
  for (;al$$1 !== null;) {
    if (al$$1.car.car === o$$11) {
      return al$$1.car;
    }
    al$$1 = al$$1.cdr;
  }
  return false;
}
function sc_assoc(o$$12, al$$2) {
  for (;al$$2 !== null;) {
    if (sc_isEqual(al$$2.car.car, o$$12)) {
      return al$$2.car;
    }
    al$$2 = al$$2.cdr;
  }
  return false;
}
function sc_isCharStringEqual(cs1, cs2) {
  return cs1.val === cs2.val;
}
function sc_isCharStringLess(cs1$$1, cs2$$1) {
  return cs1$$1.val < cs2$$1.val;
}
function sc_isCharStringGreater(cs1$$2, cs2$$2) {
  return cs1$$2.val > cs2$$2.val;
}
function sc_isCharStringLessEqual(cs1$$3, cs2$$3) {
  return cs1$$3.val <= cs2$$3.val;
}
function sc_isCharStringGreaterEqual(cs1$$4, cs2$$4) {
  return cs1$$4.val >= cs2$$4.val;
}
function sc_isCharStringCIEqual(cs1$$5, cs2$$5) {
  return cs1$$5.val.toLowerCase() === cs2$$5.val.toLowerCase();
}
function sc_isCharStringCILess(cs1$$6, cs2$$6) {
  return cs1$$6.val.toLowerCase() < cs2$$6.val.toLowerCase();
}
function sc_isCharStringCIGreater(cs1$$7, cs2$$7) {
  return cs1$$7.val.toLowerCase() > cs2$$7.val.toLowerCase();
}
function sc_isCharStringCILessEqual(cs1$$8, cs2$$8) {
  return cs1$$8.val.toLowerCase() <= cs2$$8.val.toLowerCase();
}
function sc_isCharStringCIGreaterEqual(cs1$$9, cs2$$9) {
  return cs1$$9.val.toLowerCase() >= cs2$$9.val.toLowerCase();
}
function sc_Char(c$$1) {
  var cached = sc_Char.lazy[c$$1];
  if (cached) {
    return cached;
  }
  this.val = c$$1;
  sc_Char.lazy[c$$1] = this;
  return undefined;
}
sc_Char.lazy = new Object;
sc_Char.char2readable = {"\x00":"#\\null", "\u0007":"#\\bell", "\b":"#\\backspace", "\t":"#\\tab", "\n":"#\\newline", "\f":"#\\page", "\r":"#\\return", "\u001b":"#\\escape", " ":"#\\space", "\u007f":"#\\delete", "\u0001":"#\\soh", "\u0002":"#\\stx", "\u0003":"#\\etx", "\u0004":"#\\eot", "\u0005":"#\\enq", "\u0006":"#\\ack", "\x0B":"#\\vt", "\u000e":"#\\so", "\u000f":"#\\si", "\u0010":"#\\dle", "\u0011":"#\\dc1", "\u0012":"#\\dc2", "\u0013":"#\\dc3", "\u0014":"#\\dc4", "\u0015":"#\\nak", "\u0016":"#\\syn", 
"\u0017":"#\\etb", "\u0018":"#\\can", "\u0019":"#\\em", "\u001a":"#\\sub", "\u001b":"#\\esc", "\u001c":"#\\fs", "\u001d":"#\\gs", "\u001e":"#\\rs", "\u001f":"#\\us"};
sc_Char.readable2char = {"null":"\x00", "bell":"\u0007", "backspace":"\b", "tab":"\t", "newline":"\n", "page":"\f", "return":"\r", "escape":"\u001b", "space":" ", "delete":"\x00", "soh":"\u0001", "stx":"\u0002", "etx":"\u0003", "eot":"\u0004", "enq":"\u0005", "ack":"\u0006", "bel":"\u0007", "bs":"\b", "ht":"\t", "nl":"\n", "vt":"\x0B", "np":"\f", "cr":"\r", "so":"\u000e", "si":"\u000f", "dle":"\u0010", "dc1":"\u0011", "dc2":"\u0012", "dc3":"\u0013", "dc4":"\u0014", "nak":"\u0015", "syn":"\u0016", 
"etb":"\u0017", "can":"\u0018", "em":"\u0019", "sub":"\u001a", "esc":"\u001b", "fs":"\u001c", "gs":"\u001d", "rs":"\u001e", "us":"\u001f", "sp":" ", "del":"\u007f"};
sc_Char.prototype.toString = function() {
  return this.val;
};
sc_Char.prototype.sc_toWriteString = function() {
  var entry = sc_Char.char2readable[this.val];
  if (entry) {
    return entry;
  } else {
    return "#\\" + this.val;
  }
};
function sc_isChar(c$$2) {
  return c$$2 instanceof sc_Char;
}
var sc_isCharEqual = sc_isCharStringEqual;
var sc_isCharLess = sc_isCharStringLess;
var sc_isCharGreater = sc_isCharStringGreater;
var sc_isCharLessEqual = sc_isCharStringLessEqual;
var sc_isCharGreaterEqual = sc_isCharStringGreaterEqual;
var sc_isCharCIEqual = sc_isCharStringCIEqual;
var sc_isCharCILess = sc_isCharStringCILess;
var sc_isCharCIGreater = sc_isCharStringCIGreater;
var sc_isCharCILessEqual = sc_isCharStringCILessEqual;
var sc_isCharCIGreaterEqual = sc_isCharStringCIGreaterEqual;
var SC_NUMBER_CLASS = "0123456789";
var SC_WHITESPACE_CLASS = " \r\n\t\f";
var SC_LOWER_CLASS = "abcdefghijklmnopqrstuvwxyz";
var SC_UPPER_CLASS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function sc_isCharOfClass(c$$3, cl) {
  return cl.indexOf(c$$3) != -1;
}
function sc_isCharAlphabetic(c$$4) {
  return sc_isCharOfClass(c$$4.val, SC_LOWER_CLASS) || sc_isCharOfClass(c$$4.val, SC_UPPER_CLASS);
}
function sc_isCharNumeric(c$$5) {
  return sc_isCharOfClass(c$$5.val, SC_NUMBER_CLASS);
}
function sc_isCharWhitespace(c$$6) {
  var tmp$$2 = c$$6.val;
  return tmp$$2 === " " || tmp$$2 === "\r" || tmp$$2 === "\n" || tmp$$2 === "\t" || tmp$$2 === "\f";
}
function sc_isCharUpperCase(c$$7) {
  return sc_isCharOfClass(c$$7.val, SC_UPPER_CLASS);
}
function sc_isCharLowerCase(c$$8) {
  return sc_isCharOfClass(c$$8.val, SC_LOWER_CLASS);
}
function sc_char2integer(c$$9) {
  return c$$9.val.charCodeAt(0);
}
function sc_integer2char(n$$8) {
  return new sc_Char(String.fromCharCode(n$$8));
}
function sc_charUpcase(c$$10) {
  return new sc_Char(c$$10.val.toUpperCase());
}
function sc_charDowncase(c$$11) {
  return new sc_Char(c$$11.val.toLowerCase());
}
function sc_makeJSStringOfLength(k$$2, c$$12) {
  var fill$$1;
  if (c$$12 === undefined) {
    fill$$1 = " ";
  } else {
    fill$$1 = c$$12;
  }
  var res$$15 = "";
  var len$$1 = 1;
  for (;k$$2 >= len$$1;) {
    if (k$$2 & len$$1) {
      res$$15 = res$$15.concat(fill$$1);
    }
    fill$$1 = fill$$1.concat(fill$$1);
    len$$1 *= 2;
  }
  return res$$15;
}
function sc_makejsString(k$$3, c$$13) {
  var fill$$2;
  if (c$$13) {
    fill$$2 = c$$13.val;
  } else {
    fill$$2 = " ";
  }
  return sc_makeJSStringOfLength(k$$3, fill$$2);
}
function sc_jsstring2list(s$$5) {
  var res$$16 = null;
  var i$$27 = s$$5.length - 1;
  for (;i$$27 >= 0;i$$27--) {
    res$$16 = sc_cons(new sc_Char(s$$5.charAt(i$$27)), res$$16);
  }
  return res$$16;
}
function sc_list2jsstring(l$$12) {
  var a$$3 = new Array;
  for (;l$$12 !== null;) {
    a$$3.push(l$$12.car.val);
    l$$12 = l$$12.cdr;
  }
  return "".concat.apply("", a$$3);
}
var sc_Vector = Array;
sc_Vector.prototype.sc_toWriteOrDisplayString = function(writeOrDisplay$$1) {
  if (this.length === 0) {
    return "#()";
  }
  var res$$17 = "#(" + writeOrDisplay$$1(this[0]);
  var i$$28 = 1;
  for (;i$$28 < this.length;i$$28++) {
    res$$17 += " " + writeOrDisplay$$1(this[i$$28]);
  }
  res$$17 += ")";
  return res$$17;
};
sc_Vector.prototype.sc_toDisplayString = function() {
  return this.sc_toWriteOrDisplayString(sc_toDisplayString);
};
sc_Vector.prototype.sc_toWriteString = function() {
  return this.sc_toWriteOrDisplayString(sc_toWriteString);
};
function sc_isVector(v) {
  return v instanceof sc_Vector;
}
function sc_isVectorEqual(v1, v2, comp$$1) {
  if (v1.length !== v2.length) {
    return false;
  }
  var i$$29 = 0;
  for (;i$$29 < v1.length;i$$29++) {
    if (!comp$$1(v1[i$$29], v2[i$$29])) {
      return false;
    }
  }
  return true;
}
function sc_makeVector(size$$4, fill$$3) {
  var a$$4 = new sc_Vector(size$$4);
  if (fill$$3 !== undefined) {
    sc_vectorFillBang(a$$4, fill$$3);
  }
  return a$$4;
}
function sc_vector() {
  var a$$5 = new sc_Vector;
  var i$$30 = 0;
  for (;i$$30 < arguments.length;i$$30++) {
    a$$5.push(arguments[i$$30]);
  }
  return a$$5;
}
function sc_vectorLength(v$$1) {
  return v$$1.length;
}
function sc_vectorRef(v$$2, pos) {
  return v$$2[pos];
}
function sc_vectorSetBang(v$$3, pos$$1, val$$3) {
  v$$3[pos$$1] = val$$3;
}
function sc_vector2list(a$$6) {
  var res$$18 = null;
  var i$$31 = a$$6.length - 1;
  for (;i$$31 >= 0;i$$31--) {
    res$$18 = sc_cons(a$$6[i$$31], res$$18);
  }
  return res$$18;
}
function sc_list2vector(l$$13) {
  var a$$7 = new sc_Vector;
  for (;l$$13 !== null;) {
    a$$7.push(l$$13.car);
    l$$13 = l$$13.cdr;
  }
  return a$$7;
}
function sc_vectorFillBang(a$$8, fill$$4) {
  var i$$32 = 0;
  for (;i$$32 < a$$8.length;i$$32++) {
    a$$8[i$$32] = fill$$4;
  }
}
function sc_copyVector(a$$9, len$$2) {
  if (len$$2 <= a$$9.length) {
    return a$$9.slice(0, len$$2);
  } else {
    var tmp$$3 = a$$9.concat();
    tmp$$3.length = len$$2;
    return tmp$$3;
  }
}
function sc_vectorCopy(a$$10, start$$5, end$$1) {
  return a$$10.slice(start$$5, end$$1);
}
function sc_vectorCopyBang(target$$26, tstart, source$$1, sstart, send) {
  if (!sstart) {
    sstart = 0;
  }
  if (!send) {
    send = source$$1.length;
  }
  if (tstart <= sstart) {
    var i$$33 = tstart;
    var j = sstart;
    for (;j < send;i$$33++, j++) {
      target$$26[i$$33] = source$$1[j];
    }
  } else {
    var diff = send - sstart;
    i$$33 = tstart + diff - 1;
    j = send - 1;
    for (;j >= sstart;i$$33--, j--) {
      target$$26[i$$33] = source$$1[j];
    }
  }
  return target$$26;
}
function sc_isProcedure(o$$13) {
  return typeof o$$13 === "function";
}
function sc_apply(proc) {
  var args = new Array;
  var i$$34 = 1;
  for (;i$$34 < arguments.length - 1;i$$34++) {
    args.push(arguments[i$$34]);
  }
  var l$$14 = arguments[arguments.length - 1];
  for (;l$$14 !== null;) {
    args.push(l$$14.car);
    l$$14 = l$$14.cdr;
  }
  return proc.apply(null, args);
}
function sc_map(proc$$1, l1$$4) {
  if (l1$$4 === undefined) {
    return null;
  }
  var nbApplyArgs = arguments.length - 1;
  var applyArgs = new Array(nbApplyArgs);
  var revres = null;
  for (;l1$$4 !== null;) {
    var i$$35 = 0;
    for (;i$$35 < nbApplyArgs;i$$35++) {
      applyArgs[i$$35] = arguments[i$$35 + 1].car;
      arguments[i$$35 + 1] = arguments[i$$35 + 1].cdr;
    }
    revres = sc_cons(proc$$1.apply(null, applyArgs), revres);
  }
  return sc_reverseAppendBang(revres, null);
}
function sc_mapBang(proc$$2, l1$$5) {
  if (l1$$5 === undefined) {
    return null;
  }
  var l1_orig = l1$$5;
  var nbApplyArgs$$1 = arguments.length - 1;
  var applyArgs$$1 = new Array(nbApplyArgs$$1);
  for (;l1$$5 !== null;) {
    var tmp$$4 = l1$$5;
    var i$$36 = 0;
    for (;i$$36 < nbApplyArgs$$1;i$$36++) {
      applyArgs$$1[i$$36] = arguments[i$$36 + 1].car;
      arguments[i$$36 + 1] = arguments[i$$36 + 1].cdr;
    }
    tmp$$4.car = proc$$2.apply(null, applyArgs$$1);
  }
  return l1_orig;
}
function sc_forEach(proc$$3, l1$$6) {
  if (l1$$6 === undefined) {
    return undefined;
  }
  var nbApplyArgs$$2 = arguments.length - 1;
  var applyArgs$$2 = new Array(nbApplyArgs$$2);
  for (;l1$$6 !== null;) {
    var i$$37 = 0;
    for (;i$$37 < nbApplyArgs$$2;i$$37++) {
      applyArgs$$2[i$$37] = arguments[i$$37 + 1].car;
      arguments[i$$37 + 1] = arguments[i$$37 + 1].cdr;
    }
    proc$$3.apply(null, applyArgs$$2);
  }
  return undefined;
}
function sc_filter(proc$$4, l1$$7) {
  var dummy$$4 = {cdr:null};
  var tail$$4 = dummy$$4;
  for (;l1$$7 !== null;) {
    if (proc$$4(l1$$7.car) !== false) {
      tail$$4.cdr = sc_cons(l1$$7.car, null);
      tail$$4 = tail$$4.cdr;
    }
    l1$$7 = l1$$7.cdr;
  }
  return dummy$$4.cdr;
}
function sc_filterBang(proc$$5, l1$$8) {
  var head = sc_cons("dummy", l1$$8);
  var it = head;
  var next = l1$$8;
  for (;next !== null;) {
    if (proc$$5(next.car) !== false) {
      it.cdr = next;
      it = next;
    }
    next = next.cdr;
  }
  it.cdr = null;
  return head.cdr;
}
function sc_filterMap1(proc$$6, l1$$9) {
  var revres$$1 = null;
  for (;l1$$9 !== null;) {
    var tmp$$5 = proc$$6(l1$$9.car);
    if (tmp$$5 !== false) {
      revres$$1 = sc_cons(tmp$$5, revres$$1);
    }
    l1$$9 = l1$$9.cdr;
  }
  return sc_reverseAppendBang(revres$$1, null);
}
function sc_filterMap2(proc$$7, l1$$10, l2$$3) {
  var revres$$2 = null;
  for (;l1$$10 !== null;) {
    var tmp$$6 = proc$$7(l1$$10.car, l2$$3.car);
    if (tmp$$6 !== false) {
      revres$$2 = sc_cons(tmp$$6, revres$$2);
    }
    l1$$10 = l1$$10.cdr;
    l2$$3 = l2$$3.cdr;
  }
  return sc_reverseAppendBang(revres$$2, null);
}
function sc_filterMap(proc$$8, l1$$11, l2$$4, l3) {
  if (l2$$4 === undefined) {
    return sc_filterMap1(proc$$8, l1$$11);
  } else {
    if (l3 === undefined) {
      return sc_filterMap2(proc$$8, l1$$11, l2$$4);
    }
  }
  var nbApplyArgs$$3 = arguments.length - 1;
  var applyArgs$$3 = new Array(nbApplyArgs$$3);
  var revres$$3 = null;
  for (;l1$$11 !== null;) {
    var i$$38 = 0;
    for (;i$$38 < nbApplyArgs$$3;i$$38++) {
      applyArgs$$3[i$$38] = arguments[i$$38 + 1].car;
      arguments[i$$38 + 1] = arguments[i$$38 + 1].cdr;
    }
    var tmp$$7 = proc$$8.apply(null, applyArgs$$3);
    if (tmp$$7 !== false) {
      revres$$3 = sc_cons(tmp$$7, revres$$3);
    }
  }
  return sc_reverseAppendBang(revres$$3, null);
}
function sc_any(proc$$9, l$$15) {
  var revres$$4 = null;
  for (;l$$15 !== null;) {
    var tmp$$8 = proc$$9(l$$15.car);
    if (tmp$$8 !== false) {
      return tmp$$8;
    }
    l$$15 = l$$15.cdr;
  }
  return false;
}
function sc_anyPred(proc$$10, l$$16) {
  return sc_any(proc$$10, l$$16) !== false;
}
function sc_every(proc$$11, l$$17) {
  var revres$$5 = null;
  var tmp$$9 = true;
  for (;l$$17 !== null;) {
    tmp$$9 = proc$$11(l$$17.car);
    if (tmp$$9 === false) {
      return false;
    }
    l$$17 = l$$17.cdr;
  }
  return tmp$$9;
}
function sc_everyPred(proc$$12, l$$18) {
  var tmp$$10 = sc_every(proc$$12, l$$18);
  if (tmp$$10 !== false) {
    return true;
  }
  return false;
}
function sc_force(o$$14) {
  return o$$14();
}
function sc_makePromise(proc$$13) {
  var isResultReady = false;
  var result$$3 = undefined;
  return function() {
    if (!isResultReady) {
      var tmp$$11 = proc$$13();
      if (!isResultReady) {
        isResultReady = true;
        result$$3 = tmp$$11;
      }
    }
    return result$$3;
  };
}
function sc_Values(values$$4) {
  this.values = values$$4;
}
function sc_values() {
  if (arguments.length === 1) {
    return arguments[0];
  } else {
    return new sc_Values(arguments);
  }
}
function sc_callWithValues(producer, consumer) {
  var produced = producer();
  if (produced instanceof sc_Values) {
    return consumer.apply(null, produced.values);
  } else {
    return consumer(produced);
  }
}
function sc_dynamicWind(before$$1, thunk, after) {
  before$$1();
  try {
    var res$$19 = thunk();
    return res$$19;
  } finally {
    after();
  }
}
function sc_Struct(name$$32) {
  this.name = name$$32;
}
sc_Struct.prototype.sc_toDisplayString = function() {
  return "#<struct" + sc_hash(this) + ">";
};
sc_Struct.prototype.sc_toWriteString = sc_Struct.prototype.sc_toDisplayString;
function sc_makeStruct(name$$33) {
  return new sc_Struct(name$$33);
}
function sc_isStruct(o$$15) {
  return o$$15 instanceof sc_Struct;
}
function sc_isStructNamed(name$$34, s$$6) {
  return s$$6 instanceof sc_Struct && s$$6.name === name$$34;
}
function sc_getStructField(s$$7, name$$35, field) {
  return s$$7[field];
}
function sc_setStructFieldBang(s$$8, name$$36, field$$1, val$$4) {
  s$$8[field$$1] = val$$4;
}
function sc_bitNot(x$$66) {
  return~x$$66;
}
function sc_bitAnd(x$$67, y$$36) {
  return x$$67 & y$$36;
}
function sc_bitOr(x$$68, y$$37) {
  return x$$68 | y$$37;
}
function sc_bitXor(x$$69, y$$38) {
  return x$$69 ^ y$$38;
}
function sc_bitLsh(x$$70, y$$39) {
  return x$$70 << y$$39;
}
function sc_bitRsh(x$$71, y$$40) {
  return x$$71 >> y$$40;
}
function sc_bitUrsh(x$$72, y$$41) {
  return x$$72 >>> y$$41;
}
function sc_jsField(o$$16, field$$2) {
  return o$$16[field$$2];
}
function sc_setJsFieldBang(o$$17, field$$3, val$$5) {
  return o$$17[field$$3] = val$$5;
}
function sc_deleteJsFieldBang(o$$18, field$$4) {
  delete o$$18[field$$4];
}
function sc_jsCall(o$$19, fun$$3) {
  var args$$1 = new Array;
  var i$$39 = 2;
  for (;i$$39 < arguments.length;i$$39++) {
    args$$1[i$$39 - 2] = arguments[i$$39];
  }
  return fun$$3.apply(o$$19, args$$1);
}
function sc_jsMethodCall(o$$20, field$$5) {
  var args$$2 = new Array;
  var i$$40 = 2;
  for (;i$$40 < arguments.length;i$$40++) {
    args$$2[i$$40 - 2] = arguments[i$$40];
  }
  return o$$20[field$$5].apply(o$$20, args$$2);
}
function sc_jsNew(c$$14) {
  var evalStr = "new c(";
  evalStr += arguments.length > 1 ? "arguments[1]" : "";
  var i$$41 = 2;
  for (;i$$41 < arguments.length;i$$41++) {
    evalStr += ", arguments[" + i$$41 + "]";
  }
  evalStr += ")";
  return eval(evalStr);
}
function sc_pregexp(re) {
  return new RegExp(sc_string2jsstring(re));
}
function sc_pregexpMatch(re$$1, s$$9) {
  var reg = re$$1 instanceof RegExp ? re$$1 : sc_pregexp(re$$1);
  var tmp$$12 = reg.exec(sc_string2jsstring(s$$9));
  if (tmp$$12 == null) {
    return false;
  }
  var res$$20 = null;
  var i$$42 = tmp$$12.length - 1;
  for (;i$$42 >= 0;i$$42--) {
    if (tmp$$12[i$$42] !== null) {
      res$$20 = sc_cons(sc_jsstring2string(tmp$$12[i$$42]), res$$20);
    } else {
      res$$20 = sc_cons(false, res$$20);
    }
  }
  return res$$20;
}
function sc_pregexpReplace(re$$2, s1, s2) {
  var reg$$1;
  var jss1 = sc_string2jsstring(s1);
  var jss2 = sc_string2jsstring(s2);
  if (re$$2 instanceof RegExp) {
    if (re$$2.global) {
      reg$$1 = re$$2;
    } else {
      reg$$1 = new RegExp(re$$2.source);
    }
  } else {
    reg$$1 = new RegExp(sc_string2jsstring(re$$2));
  }
  return jss1.replace(reg$$1, jss2);
}
function sc_pregexpReplaceAll(re$$3, s1$$1, s2$$1) {
  var reg$$2;
  var jss1$$1 = sc_string2jsstring(s1$$1);
  var jss2$$1 = sc_string2jsstring(s2$$1);
  if (re$$3 instanceof RegExp) {
    if (re$$3.global) {
      reg$$2 = re$$3;
    } else {
      reg$$2 = new RegExp(re$$3.source, "g");
    }
  } else {
    reg$$2 = new RegExp(sc_string2jsstring(re$$3), "g");
  }
  return jss1$$1.replace(reg$$2, jss2$$1);
}
function sc_pregexpSplit(re$$4, s$$10) {
  var reg$$3 = re$$4 instanceof RegExp ? re$$4 : new RegExp(sc_string2jsstring(re$$4));
  var jss = sc_string2jsstring(s$$10);
  var tmp$$13 = jss.split(reg$$3);
  if (tmp$$13 == null) {
    return false;
  }
  return sc_vector2list(tmp$$13);
}
function sc_random(n$$9) {
  return Math.floor(Math.random() * n$$9);
}
function sc_currentDate() {
  return new Date;
}
function sc_Hashtable() {
}
sc_Hashtable.prototype.toString = function() {
  return "#{%hashtable}";
};
function sc_HashtableElement(key$$17, val$$6) {
  this.key = key$$17;
  this.val = val$$6;
}
function sc_makeHashtable() {
  return new sc_Hashtable;
}
function sc_hashtablePutBang(ht$$3, key$$18, val$$7) {
  var hash = sc_hash(key$$18);
  ht$$3[hash] = new sc_HashtableElement(key$$18, val$$7);
}
function sc_hashtableGet(ht$$4, key$$19) {
  var hash$$1 = sc_hash(key$$19);
  if (hash$$1 in ht$$4) {
    return ht$$4[hash$$1].val;
  } else {
    return false;
  }
}
function sc_hashtableForEach(ht$$5, f$$1) {
  var v$$4;
  for (v$$4 in ht$$5) {
    if (ht$$5[v$$4] instanceof sc_HashtableElement) {
      f$$1(ht$$5[v$$4].key, ht$$5[v$$4].val);
    }
  }
}
function sc_hashtableContains(ht$$6, key$$20) {
  var hash$$2 = sc_hash(key$$20);
  if (hash$$2 in ht$$6) {
    return true;
  } else {
    return false;
  }
}
var SC_HASH_COUNTER = 0;
function sc_hash(o$$21) {
  if (o$$21 === null) {
    return "null";
  } else {
    if (o$$21 === undefined) {
      return "undefined";
    } else {
      if (o$$21 === true) {
        return "true";
      } else {
        if (o$$21 === false) {
          return "false";
        } else {
          if (typeof o$$21 === "number") {
            return "num-" + o$$21;
          } else {
            if (typeof o$$21 === "string") {
              return "jsstr-" + o$$21;
            } else {
              if (o$$21.sc_getHash) {
                return o$$21.sc_getHash();
              } else {
                return sc_counterHash.call(o$$21);
              }
            }
          }
        }
      }
    }
  }
}
function sc_counterHash() {
  if (!this.sc_hash) {
    this.sc_hash = "hash-" + SC_HASH_COUNTER;
    SC_HASH_COUNTER++;
  }
  return this.sc_hash;
}
function sc_Trampoline(args$$3, maxTailCalls) {
  this["__trampoline return__"] = true;
  this.args = args$$3;
  this.MAX_TAIL_CALLs = maxTailCalls;
}
sc_Trampoline.prototype.restart = function() {
  var o$$22 = this;
  for (;true;) {
    SC_TAIL_OBJECT.calls = o$$22.MAX_TAIL_CALLs - 1;
    var fun$$4 = o$$22.args.callee;
    var res$$21 = fun$$4.apply(SC_TAIL_OBJECT, o$$22.args);
    if (res$$21 instanceof sc_Trampoline) {
      o$$22 = res$$21;
    } else {
      return res$$21;
    }
  }
};
function sc_bindExitLambda(proc$$14) {
  var escape_obj = new sc_BindExitException;
  var escape$$1 = function(res$$22) {
    escape_obj.res = res$$22;
    throw escape_obj;
  };
  try {
    return proc$$14(escape$$1);
  } catch (e$$8) {
    if (e$$8 === escape_obj) {
      return e$$8.res;
    }
    throw e$$8;
  }
}
function sc_BindExitException() {
  this._internalException = true;
}
var SC_SCM2JS_GLOBALS = new Object;
var SC_TAIL_OBJECT = new Object;
SC_SCM2JS_GLOBALS.TAIL_OBJECT = SC_TAIL_OBJECT;
function sc_EOF() {
}
var SC_EOF_OBJECT = new sc_EOF;
function sc_Port() {
}
function sc_InputPort() {
}
sc_InputPort.prototype = new sc_Port;
sc_InputPort.prototype.peekChar = function() {
  if (!("peeked" in this)) {
    this.peeked = this.getNextChar();
  }
  return this.peeked;
};
sc_InputPort.prototype.readChar = function() {
  var tmp$$14 = this.peekChar();
  delete this.peeked;
  return tmp$$14;
};
sc_InputPort.prototype.isCharReady = function() {
  return true;
};
sc_InputPort.prototype.close = function() {
};
function sc_ErrorInputPort() {
}
sc_ErrorInputPort.prototype = new sc_InputPort;
sc_ErrorInputPort.prototype.getNextChar = function() {
  throw "can't read from error-port.";
};
sc_ErrorInputPort.prototype.isCharReady = function() {
  return false;
};
function sc_StringInputPort(jsStr) {
  this.str = new String(jsStr);
  this.pos = 0;
}
sc_StringInputPort.prototype = new sc_InputPort;
sc_StringInputPort.prototype.getNextChar = function() {
  if (this.pos >= this.str.length) {
    return SC_EOF_OBJECT;
  }
  return this.str.charAt(this.pos++);
};
function sc_Token(type$$25, val$$8, pos$$2) {
  this.type = type$$25;
  this.val = val$$8;
  this.pos = pos$$2;
}
sc_Token.EOF = 0;
sc_Token.OPEN_PAR = 1;
sc_Token.CLOSE_PAR = 2;
sc_Token.OPEN_BRACE = 3;
sc_Token.CLOSE_BRACE = 4;
sc_Token.OPEN_BRACKET = 5;
sc_Token.CLOSE_BRACKET = 6;
sc_Token.WHITESPACE = 7;
sc_Token.QUOTE = 8;
sc_Token.ID = 9;
sc_Token.DOT = 10;
sc_Token.STRING = 11;
sc_Token.NUMBER = 12;
sc_Token.ERROR = 13;
sc_Token.VECTOR_BEGIN = 14;
sc_Token.TRUE = 15;
sc_Token.FALSE = 16;
sc_Token.UNSPECIFIED = 17;
sc_Token.REFERENCE = 18;
sc_Token.STORE = 19;
sc_Token.CHAR = 20;
var SC_ID_CLASS = SC_LOWER_CLASS + SC_UPPER_CLASS + "!$%*+-./:<=>?@^_~";
function sc_Tokenizer(port) {
  this.port = port;
}
sc_Tokenizer.prototype.peekToken = function() {
  if (this.peeked) {
    return this.peeked;
  }
  var newToken = this.nextToken();
  this.peeked = newToken;
  return newToken;
};
sc_Tokenizer.prototype.readToken = function() {
  var tmp$$15 = this.peekToken();
  delete this.peeked;
  return tmp$$15;
};
sc_Tokenizer.prototype.nextToken = function() {
  function isNumberChar(c$$15) {
    return c$$15 >= "0" && c$$15 <= "9";
  }
  function isIdOrNumberChar(c$$16) {
    return SC_ID_CLASS.indexOf(c$$16) != -1 || c$$16 >= "0" && c$$16 <= "9";
  }
  function isWhitespace(c$$17) {
    return c$$17 === " " || c$$17 === "\r" || c$$17 === "\n" || c$$17 === "\t" || c$$17 === "\f";
  }
  function isWhitespaceOrEOF(c$$18) {
    return isWhitespace(c$$18) || c$$18 === SC_EOF_OBJECT;
  }
  function readString() {
    res = "";
    for (;true;) {
      var c$$19 = port$$1.readChar();
      switch(c$$19) {
        case '"':
          return new sc_Token(11, res);
        case "\\":
          var tmp$$16 = port$$1.readChar();
          switch(tmp$$16) {
            case "0":
              res += "\x00";
              break;
            case "a":
              res += "a";
              break;
            case "b":
              res += "\b";
              break;
            case "f":
              res += "\f";
              break;
            case "n":
              res += "\n";
              break;
            case "r":
              res += "\r";
              break;
            case "t":
              res += "\t";
              break;
            case "v":
              res += "\v";
              break;
            case '"':
              res += '"';
              break;
            case "\\":
              res += "\\";
              break;
            case "x":
              var nb = 0;
              for (;true;) {
                var hexC = port$$1.peekChar();
                if (hexC >= "0" && hexC <= "9") {
                  port$$1.readChar();
                  nb = nb * 16 + hexC.charCodeAt(0) - "0".charCodeAt(0);
                } else {
                  if (hexC >= "a" && hexC <= "f") {
                    port$$1.readChar();
                    nb = nb * 16 + hexC.charCodeAt(0) - "a".charCodeAt(0);
                  } else {
                    if (hexC >= "A" && hexC <= "F") {
                      port$$1.readChar();
                      nb = nb * 16 + hexC.charCodeAt(0) - "A".charCodeAt(0);
                    } else {
                      res += String.fromCharCode(nb);
                      break;
                    }
                  }
                }
              }
              break;
            default:
              if (tmp$$16 === SC_EOF_OBJECT) {
                return new sc_Token(13, "unclosed string-literal" + res);
              }
              res += tmp$$16;
          }
          break;
        default:
          if (c$$19 === SC_EOF_OBJECT) {
            return new sc_Token(13, "unclosed string-literal" + res);
          }
          res += c$$19;
      }
    }
  }
  function readIdOrNumber(firstChar) {
    var res$$23 = firstChar;
    for (;isIdOrNumberChar(port$$1.peekChar());) {
      res$$23 += port$$1.readChar();
    }
    if (isNaN(res$$23)) {
      return new sc_Token(9, res$$23);
    } else {
      return new sc_Token(12, res$$23 - 0);
    }
  }
  function skipWhitespaceAndComments() {
    var done = false;
    for (;!done;) {
      done = true;
      for (;isWhitespace(port$$1.peekChar());) {
        port$$1.readChar();
      }
      if (port$$1.peekChar() === ";") {
        port$$1.readChar();
        done = false;
        for (;true;) {
          curChar = port$$1.readChar();
          if (curChar === SC_EOF_OBJECT || curChar === "\n") {
            break;
          }
        }
      }
    }
  }
  function readDot() {
    if (isWhitespace(port$$1.peekChar())) {
      return new sc_Token(10);
    } else {
      return readIdOrNumber(".");
    }
  }
  function readSharp() {
    var c$$20 = port$$1.readChar();
    if (isWhitespace(c$$20)) {
      return new sc_Token(13, "bad #-pattern0.");
    }
    if (isNumberChar(c$$20)) {
      var nb$$1 = c$$20 - 0;
      for (;isNumberChar(port$$1.peekChar());) {
        nb$$1 = nb$$1 * 10 + (port$$1.readChar() - 0);
      }
      switch(port$$1.readChar()) {
        case "#":
          return new sc_Token(18, nb$$1);
        case "=":
          return new sc_Token(19, nb$$1);
        default:
          return new sc_Token(13, "bad #-pattern1." + nb$$1);
      }
    }
    if (c$$20 === "(") {
      return new sc_Token(14);
    }
    if (c$$20 === "\\") {
      var tmp$$17 = "";
      for (;!isWhitespaceOrEOF(port$$1.peekChar());) {
        tmp$$17 += port$$1.readChar();
      }
      switch(tmp$$17.length) {
        case 0:
          if (sc_isEOFObject(port$$1.peekChar)) {
            return new sc_Token(13, "bad #-pattern2.");
          } else {
            return new sc_Token(20, port$$1.readChar());
          }
        ;
        case 1:
          return new sc_Token(20, tmp$$17);
        default:
          var entry$$1 = sc_Char.readable2char[tmp$$17.toLowerCase()];
          if (entry$$1) {
            return new sc_Token(20, entry$$1);
          } else {
            return new sc_Token(13, "unknown character description: #\\" + tmp$$17);
          }
        ;
      }
    }
    var res$$24;
    var needing;
    switch(c$$20) {
      case "t":
        res$$24 = new sc_Token(15, true);
        needing = "";
        break;
      case "f":
        res$$24 = new sc_Token(16, false);
        needing = "";
        break;
      case "u":
        res$$24 = new sc_Token(17, undefined);
        needing = "nspecified";
        break;
      default:
        return new sc_Token(13, "bad #-pattern3: " + c$$20);
    }
    for (;true;) {
      c$$20 = port$$1.peekChar();
      if ((isWhitespaceOrEOF(c$$20) || c$$20 === ")") && needing == "") {
        return res$$24;
      } else {
        if (isWhitespace(c$$20) || needing == "") {
          return new sc_Token(13, "bad #-pattern4 " + c$$20 + " " + needing);
        } else {
          if (needing.charAt(0) == c$$20) {
            port$$1.readChar();
            needing = needing.slice(1);
          } else {
            return new sc_Token(13, "bad #-pattern5");
          }
        }
      }
    }
  }
  var port$$1 = this.port;
  skipWhitespaceAndComments();
  var curChar = port$$1.readChar();
  if (curChar === SC_EOF_OBJECT) {
    return new sc_Token(0, curChar);
  }
  switch(curChar) {
    case " ":
    ;
    case "\n":
    ;
    case "\t":
      return readWhitespace();
    case "(":
      return new sc_Token(1);
    case ")":
      return new sc_Token(2);
    case "{":
      return new sc_Token(3);
    case "}":
      return new sc_Token(4);
    case "[":
      return new sc_Token(5);
    case "]":
      return new sc_Token(6);
    case "'":
      return new sc_Token(8);
    case "#":
      return readSharp();
    case ".":
      return readDot();
    case '"':
      return readString();
    default:
      if (isIdOrNumberChar(curChar)) {
        return readIdOrNumber(curChar);
      }
      throw "unexpected character: " + curChar;;
  }
};
function sc_Reader(tokenizer) {
  this.tokenizer = tokenizer;
  this.backref = new Array;
}
sc_Reader.prototype.read = function() {
  function readList(listBeginType) {
    function matchesPeer(open$$2, close) {
      return open$$2 === 1 && close === 2 || open$$2 === 3 && close === 4 || open$$2 === 5 && close === 6;
    }
    var res$$25 = null;
    for (;true;) {
      var token$$5 = tokenizer$$1.peekToken();
      switch(token$$5.type) {
        case 2:
        ;
        case 4:
        ;
        case 6:
          if (matchesPeer(listBeginType, token$$5.type)) {
            tokenizer$$1.readToken();
            return sc_reverseBang(res$$25);
          } else {
            throw "closing par doesn't match: " + listBeginType + " " + listEndType;
          }
        ;
        case 0:
          throw "unexpected end of file";;
        case 10:
          tokenizer$$1.readToken();
          var cdr$$3 = this.read();
          var par = tokenizer$$1.readToken();
          if (!matchesPeer(listBeginType, par.type)) {
            throw "closing par doesn't match: " + listBeginType + " " + par.type;
          } else {
            return sc_reverseAppendBang(res$$25, cdr$$3);
          }
        ;
        default:
          res$$25 = sc_cons(this.read(), res$$25);
      }
    }
  }
  function readQuote() {
    return sc_cons("quote", sc_cons(this.read(), null));
  }
  function readVector() {
    var a$$11 = new Array;
    for (;true;) {
      var token$$6 = tokenizer$$1.peekToken();
      switch(token$$6.type) {
        case 2:
          tokenizer$$1.readToken();
          return a$$11;
        default:
          a$$11.push(this.read());
      }
    }
  }
  function storeRefence(nb$$2) {
    var tmp$$18 = this.read();
    this.backref[nb$$2] = tmp$$18;
    return tmp$$18;
  }
  function readReference(nb$$3) {
    if (nb$$3 in this.backref) {
      return this.backref[nb$$3];
    } else {
      throw "bad reference: " + nb$$3;
    }
  }
  var tokenizer$$1 = this.tokenizer;
  var token$$4 = tokenizer$$1.readToken();
  if (token$$4.type === 13) {
    throw token$$4.val;
  }
  switch(token$$4.type) {
    case 1:
    ;
    case 3:
    ;
    case 5:
      return readList.call(this, token$$4.type);
    case 8:
      return readQuote.call(this);
    case 11:
      return sc_jsstring2string(token$$4.val);
    case 20:
      return new sc_Char(token$$4.val);
    case 14:
      return readVector.call(this);
    case 18:
      return readReference.call(this, token$$4.val);
    case 19:
      return storeRefence.call(this, token$$4.val);
    case 9:
      return sc_jsstring2symbol(token$$4.val);
    case 0:
    ;
    case 12:
    ;
    case 15:
    ;
    case 16:
    ;
    case 17:
      return token$$4.val;
    default:
      throw "unexpected token " + token$$4.type + " " + token$$4.val;;
  }
};
function sc_read(port$$2) {
  if (port$$2 === undefined) {
    port$$2 = SC_DEFAULT_IN;
  }
  var reader = new sc_Reader(new sc_Tokenizer(port$$2));
  return reader.read();
}
function sc_readChar(port$$3) {
  if (port$$3 === undefined) {
    port$$3 = SC_DEFAULT_IN;
  }
  var t$$1 = port$$3.readChar();
  return t$$1 === SC_EOF_OBJECT ? t$$1 : new sc_Char(t$$1);
}
function sc_peekChar(port$$4) {
  if (port$$4 === undefined) {
    port$$4 = SC_DEFAULT_IN;
  }
  var t$$2 = port$$4.peekChar();
  return t$$2 === SC_EOF_OBJECT ? t$$2 : new sc_Char(t$$2);
}
function sc_isCharReady(port$$5) {
  if (port$$5 === undefined) {
    port$$5 = SC_DEFAULT_IN;
  }
  return port$$5.isCharReady();
}
function sc_closeInputPort(p$$33) {
  return p$$33.close();
}
function sc_isInputPort(o$$23) {
  return o$$23 instanceof sc_InputPort;
}
function sc_isEOFObject(o$$24) {
  return o$$24 === SC_EOF_OBJECT;
}
function sc_currentInputPort() {
  return SC_DEFAULT_IN;
}
function sc_callWithInputFile(s$$11, proc$$15) {
  throw "can't open " + s$$11;
}
function sc_callWithOutputFile(s$$12, proc$$16) {
  throw "can't open " + s$$12;
}
function sc_withInputFromFile(s$$13, thunk$$1) {
  throw "can't open " + s$$13;
}
function sc_withOutputToFile(s$$14, thunk$$2) {
  throw "can't open " + s$$14;
}
function sc_openInputFile(s$$15) {
  throw "can't open " + s$$15;
}
function sc_openOutputFile(s$$16) {
  throw "can't open " + s$$16;
}
function sc_basename(p$$34) {
  var i$$43 = p$$34.lastIndexOf("/");
  if (i$$43 >= 0) {
    return p$$34.substring(i$$43 + 1, p$$34.length);
  } else {
    return "";
  }
}
function sc_dirname(p$$35) {
  var i$$44 = p$$35.lastIndexOf("/");
  if (i$$44 >= 0) {
    return p$$35.substring(0, i$$44);
  } else {
    return "";
  }
}
function sc_withInputFromPort(p$$36, thunk$$3) {
  try {
    var tmp$$19 = SC_DEFAULT_IN;
    SC_DEFAULT_IN = p$$36;
    return thunk$$3();
  } finally {
    SC_DEFAULT_IN = tmp$$19;
  }
}
function sc_withInputFromString(s$$17, thunk$$4) {
  return sc_withInputFromPort(new sc_StringInputPort(sc_string2jsstring(s$$17)), thunk$$4);
}
function sc_withOutputToPort(p$$37, thunk$$5) {
  try {
    var tmp$$20 = SC_DEFAULT_OUT;
    SC_DEFAULT_OUT = p$$37;
    return thunk$$5();
  } finally {
    SC_DEFAULT_OUT = tmp$$20;
  }
}
function sc_withOutputToString(thunk$$6) {
  var p$$38 = new sc_StringOutputPort;
  sc_withOutputToPort(p$$38, thunk$$6);
  return p$$38.close();
}
function sc_withOutputToProcedure(proc$$17, thunk$$7) {
  var t$$3 = function(s$$18) {
    proc$$17(sc_jsstring2string(s$$18));
  };
  return sc_withOutputToPort(new sc_GenericOutputPort(t$$3), thunk$$7);
}
function sc_openOutputString() {
  return new sc_StringOutputPort;
}
function sc_openInputString(str$$6) {
  return new sc_StringInputPort(sc_string2jsstring(str$$6));
}
function sc_OutputPort() {
}
sc_OutputPort.prototype = new sc_Port;
sc_OutputPort.prototype.appendJSString = function(obj$$17) {
};
sc_OutputPort.prototype.close = function() {
};
function sc_StringOutputPort() {
  this.res = "";
}
sc_StringOutputPort.prototype = new sc_OutputPort;
sc_StringOutputPort.prototype.appendJSString = function(s$$19) {
  this.res += s$$19;
};
sc_StringOutputPort.prototype.close = function() {
  return sc_jsstring2string(this.res);
};
function sc_getOutputString(sp) {
  return sc_jsstring2string(sp.res);
}
function sc_ErrorOutputPort() {
}
sc_ErrorOutputPort.prototype = new sc_OutputPort;
sc_ErrorOutputPort.prototype.appendJSString = function(s$$20) {
  throw "don't write on ErrorPort!";
};
sc_ErrorOutputPort.prototype.close = function() {
};
function sc_GenericOutputPort(appendJSString, close$$1) {
  this.appendJSString = appendJSString;
  if (close$$1) {
    this.close = close$$1;
  }
}
sc_GenericOutputPort.prototype = new sc_OutputPort;
function sc_isOutputPort(o$$25) {
  return o$$25 instanceof sc_OutputPort;
}
function sc_closeOutputPort(p$$39) {
  return p$$39.close();
}
function sc_write(o$$26, p$$40) {
  if (p$$40 === undefined) {
    p$$40 = SC_DEFAULT_OUT;
  }
  p$$40.appendJSString(sc_toWriteString(o$$26));
}
function sc_toWriteString(o$$27) {
  if (o$$27 === null) {
    return "()";
  } else {
    if (o$$27 === true) {
      return "#t";
    } else {
      if (o$$27 === false) {
        return "#f";
      } else {
        if (o$$27 === undefined) {
          return "#unspecified";
        } else {
          if (typeof o$$27 === "function") {
            return "#<procedure " + sc_hash(o$$27) + ">";
          } else {
            if (o$$27.sc_toWriteString) {
              return o$$27.sc_toWriteString();
            } else {
              return o$$27.toString();
            }
          }
        }
      }
    }
  }
}
function sc_escapeWriteString(s$$21) {
  var res$$26 = "";
  var j$$1 = 0;
  i = 0;
  for (;i < s$$21.length;i++) {
    switch(s$$21.charAt(i)) {
      case "\x00":
        res$$26 += s$$21.substring(j$$1, i) + "\\0";
        j$$1 = i + 1;
        break;
      case "\b":
        res$$26 += s$$21.substring(j$$1, i) + "\\b";
        j$$1 = i + 1;
        break;
      case "\f":
        res$$26 += s$$21.substring(j$$1, i) + "\\f";
        j$$1 = i + 1;
        break;
      case "\n":
        res$$26 += s$$21.substring(j$$1, i) + "\\n";
        j$$1 = i + 1;
        break;
      case "\r":
        res$$26 += s$$21.substring(j$$1, i) + "\\r";
        j$$1 = i + 1;
        break;
      case "\t":
        res$$26 += s$$21.substring(j$$1, i) + "\\t";
        j$$1 = i + 1;
        break;
      case "\v":
        res$$26 += s$$21.substring(j$$1, i) + "\\v";
        j$$1 = i + 1;
        break;
      case '"':
        res$$26 += s$$21.substring(j$$1, i) + '\\"';
        j$$1 = i + 1;
        break;
      case "\\":
        res$$26 += s$$21.substring(j$$1, i) + "\\\\";
        j$$1 = i + 1;
        break;
      default:
        var c$$21 = s$$21.charAt(i);
        if ("a" !== "a" && c$$21 == "a") {
          res$$26 += s$$21.substring(j$$1, i) + "\\a";
          j$$1 = i + 1;
          continue;
        }
        if ("\v" !== "v" && c$$21 == "\v") {
          res$$26 += s$$21.substring(j$$1, i) + "\\v";
          j$$1 = i + 1;
          continue;
        }
        if (s$$21.charAt(i) < " ") {
          res$$26 += s$$21.substring(j$$1, i) + "\\x" + s$$21.charCodeAt(i).toString(16);
          j$$1 = i + 1;
        }
      ;
    }
  }
  res$$26 += s$$21.substring(j$$1, i);
  return res$$26;
}
function sc_display(o$$28, p$$41) {
  if (p$$41 === undefined) {
    p$$41 = SC_DEFAULT_OUT;
  }
  p$$41.appendJSString(sc_toDisplayString(o$$28));
}
function sc_toDisplayString(o$$29) {
  if (o$$29 === null) {
    return "()";
  } else {
    if (o$$29 === true) {
      return "#t";
    } else {
      if (o$$29 === false) {
        return "#f";
      } else {
        if (o$$29 === undefined) {
          return "#unspecified";
        } else {
          if (typeof o$$29 === "function") {
            return "#<procedure " + sc_hash(o$$29) + ">";
          } else {
            if (o$$29.sc_toDisplayString) {
              return o$$29.sc_toDisplayString();
            } else {
              return o$$29.toString();
            }
          }
        }
      }
    }
  }
}
function sc_newline(p$$42) {
  if (p$$42 === undefined) {
    p$$42 = SC_DEFAULT_OUT;
  }
  p$$42.appendJSString("\n");
}
function sc_writeChar(c$$22, p$$43) {
  if (p$$43 === undefined) {
    p$$43 = SC_DEFAULT_OUT;
  }
  p$$43.appendJSString(c$$22.val);
}
function sc_writeCircle(o$$30, p$$44) {
  if (p$$44 === undefined) {
    p$$44 = SC_DEFAULT_OUT;
  }
  p$$44.appendJSString(sc_toWriteCircleString(o$$30));
}
function sc_toWriteCircleString(o$$31) {
  var symb = sc_gensym("writeCircle");
  var nbPointer = new Object;
  nbPointer.nb = 0;
  sc_prepWriteCircle(o$$31, symb, nbPointer);
  return sc_genToWriteCircleString(o$$31, symb);
}
function sc_prepWriteCircle(o$$32, symb$$1, nbPointer$$1) {
  if (o$$32 instanceof sc_Pair || o$$32 instanceof sc_Vector) {
    if (o$$32[symb$$1] !== undefined) {
      o$$32[symb$$1]++;
      if (!o$$32[symb$$1 + "nb"]) {
        o$$32[symb$$1 + "nb"] = nbPointer$$1.nb++;
      }
      return;
    }
    o$$32[symb$$1] = 0;
    if (o$$32 instanceof sc_Pair) {
      sc_prepWriteCircle(o$$32.car, symb$$1, nbPointer$$1);
      sc_prepWriteCircle(o$$32.cdr, symb$$1, nbPointer$$1);
    } else {
      var i$$45 = 0;
      for (;i$$45 < o$$32.length;i$$45++) {
        sc_prepWriteCircle(o$$32[i$$45], symb$$1, nbPointer$$1);
      }
    }
  }
}
function sc_genToWriteCircleString(o$$33, symb$$2) {
  if (!(o$$33 instanceof sc_Pair || o$$33 instanceof sc_Vector)) {
    return sc_toWriteString(o$$33);
  }
  return o$$33.sc_toWriteCircleString(symb$$2);
}
sc_Pair.prototype.sc_toWriteCircleString = function(symb$$3, inList) {
  if (this[symb$$3 + "use"]) {
    var nb$$4 = this[symb$$3 + "nb"];
    if (this[symb$$3]-- === 0) {
      delete this[symb$$3];
      delete this[symb$$3 + "nb"];
      delete this[symb$$3 + "use"];
    }
    if (inList) {
      return ". #" + nb$$4 + "#";
    } else {
      return "#" + nb$$4 + "#";
    }
  }
  if (this[symb$$3]-- === 0) {
    delete this[symb$$3];
    delete this[symb$$3 + "nb"];
    delete this[symb$$3 + "use"];
  }
  var res$$27 = "";
  if (this[symb$$3] !== undefined) {
    this[symb$$3 + "use"] = true;
    if (inList) {
      res$$27 += ". #" + this[symb$$3 + "nb"] + "=";
    } else {
      res$$27 += "#" + this[symb$$3 + "nb"] + "=";
    }
    inList = false;
  }
  if (!inList) {
    res$$27 += "(";
  }
  res$$27 += sc_genToWriteCircleString(this.car, symb$$3);
  if (sc_isPair(this.cdr)) {
    res$$27 += " " + this.cdr.sc_toWriteCircleString(symb$$3, true);
  } else {
    if (this.cdr !== null) {
      res$$27 += " . " + sc_genToWriteCircleString(this.cdr, symb$$3);
    }
  }
  if (!inList) {
    res$$27 += ")";
  }
  return res$$27;
};
sc_Vector.prototype.sc_toWriteCircleString = function(symb$$4) {
  if (this[symb$$4 + "use"]) {
    var nb$$5 = this[symb$$4 + "nb"];
    if (this[symb$$4]-- === 0) {
      delete this[symb$$4];
      delete this[symb$$4 + "nb"];
      delete this[symb$$4 + "use"];
    }
    return "#" + nb$$5 + "#";
  }
  if (this[symb$$4]-- === 0) {
    delete this[symb$$4];
    delete this[symb$$4 + "nb"];
    delete this[symb$$4 + "use"];
  }
  var res$$28 = "";
  if (this[symb$$4] !== undefined) {
    this[symb$$4 + "use"] = true;
    res$$28 += "#" + this[symb$$4 + "nb"] + "=";
  }
  res$$28 += "#(";
  var i$$46 = 0;
  for (;i$$46 < this.length;i$$46++) {
    res$$28 += sc_genToWriteCircleString(this[i$$46], symb$$4);
    if (i$$46 < this.length - 1) {
      res$$28 += " ";
    }
  }
  res$$28 += ")";
  return res$$28;
};
function sc_print(s$$22) {
  if (arguments.length === 1) {
    sc_display(s$$22);
    sc_newline();
  } else {
    var i$$47 = 0;
    for (;i$$47 < arguments.length;i$$47++) {
      sc_display(arguments[i$$47]);
    }
    sc_newline();
  }
}
function sc_format(s$$23, args$$4) {
  var len$$3 = s$$23.length;
  var p$$45 = new sc_StringOutputPort;
  var i$$48 = 0;
  var j$$2 = 1;
  for (;i$$48 < len$$3;) {
    var i2 = s$$23.indexOf("~", i$$48);
    if (i2 == -1) {
      p$$45.appendJSString(s$$23.substring(i$$48, len$$3));
      return p$$45.close();
    } else {
      if (i2 > i$$48) {
        if (i2 == len$$3 - 1) {
          p$$45.appendJSString(s$$23.substring(i$$48, len$$3));
          return p$$45.close();
        } else {
          p$$45.appendJSString(s$$23.substring(i$$48, i2));
          i$$48 = i2;
        }
      }
      switch(s$$23.charCodeAt(i2 + 1)) {
        case 65:
        ;
        case 97:
          sc_display(arguments[j$$2], p$$45);
          i$$48 += 2;
          j$$2++;
          break;
        case 83:
        ;
        case 115:
          sc_write(arguments[j$$2], p$$45);
          i$$48 += 2;
          j$$2++;
          break;
        case 86:
        ;
        case 118:
          sc_display(arguments[j$$2], p$$45);
          p$$45.appendJSString("\n");
          i$$48 += 2;
          j$$2++;
          break;
        case 67:
        ;
        case 99:
          p$$45.appendJSString(String.fromCharCode(arguments[j$$2]));
          i$$48 += 2;
          j$$2++;
          break;
        case 88:
        ;
        case 120:
          p$$45.appendJSString(arguments[j$$2].toString(6));
          i$$48 += 2;
          j$$2++;
          break;
        case 79:
        ;
        case 111:
          p$$45.appendJSString(arguments[j$$2].toString(8));
          i$$48 += 2;
          j$$2++;
          break;
        case 66:
        ;
        case 98:
          p$$45.appendJSString(arguments[j$$2].toString(2));
          i$$48 += 2;
          j$$2++;
          break;
        case 37:
        ;
        case 110:
          p$$45.appendJSString("\n");
          i$$48 += 2;
          break;
        case 114:
          p$$45.appendJSString("\r");
          i$$48 += 2;
          break;
        case 126:
          p$$45.appendJSString("~");
          i$$48 += 2;
          break;
        default:
          sc_error("format: illegal ~" + String.fromCharCode(s$$23.charCodeAt(i2 + 1)) + " sequence");
          return "";
      }
    }
  }
  return p$$45.close();
}
var SC_DEFAULT_IN = new sc_ErrorInputPort;
var SC_DEFAULT_OUT = new sc_ErrorOutputPort;
var SC_ERROR_OUT = new sc_ErrorOutputPort;
var sc_SYMBOL_PREFIX = "\u1e9c";
var sc_KEYWORD_PREFIX = "\u1e9d";
function sc_jsstring2string(s$$24) {
  return s$$24;
}
function sc_jsstring2symbol(s$$25) {
  return sc_SYMBOL_PREFIX + s$$25;
}
function sc_string2jsstring(s$$26) {
  return s$$26;
}
function sc_symbol2jsstring(s$$27) {
  return s$$27.slice(1);
}
function sc_keyword2jsstring(k$$4) {
  return k$$4.slice(1);
}
function sc_jsstring2keyword(s$$28) {
  return sc_KEYWORD_PREFIX + s$$28;
}
function sc_isKeyword(s$$29) {
  return typeof s$$29 === "string" && s$$29.charAt(0) === sc_KEYWORD_PREFIX;
}
var sc_gensym = function() {
  var counter = 1E3;
  return function(sym$$3) {
    counter++;
    if (!sym$$3) {
      sym$$3 = sc_SYMBOL_PREFIX;
    }
    return sym$$3 + "s" + counter + "~" + "^sC-GeNsYm ";
  };
}();
function sc_isEqual(o1$$2, o2$$2) {
  return o1$$2 === o2$$2 || sc_isPair(o1$$2) && sc_isPair(o2$$2) && sc_isPairEqual(o1$$2, o2$$2, sc_isEqual) || sc_isVector(o1$$2) && sc_isVector(o2$$2) && sc_isVectorEqual(o1$$2, o2$$2, sc_isEqual);
}
function sc_number2symbol(x$$73, radix$$2) {
  return sc_SYMBOL_PREFIX + sc_number2jsstring(x$$73, radix$$2);
}
var sc_number2string = sc_number2jsstring;
function sc_symbol2number(s$$30, radix$$3) {
  return sc_jsstring2number(s$$30.slice(1), radix$$3);
}
var sc_string2number = sc_jsstring2number;
function sc_string2integer(s$$31, radix$$4) {
  if (!radix$$4) {
    return+s$$31;
  }
  return parseInt(s$$31, radix$$4);
}
function sc_string2real(s$$32) {
  return+s$$32;
}
function sc_isSymbol(s$$33) {
  return typeof s$$33 === "string" && s$$33.charAt(0) === sc_SYMBOL_PREFIX;
}
function sc_symbol2string(s$$34) {
  return s$$34.slice(1);
}
function sc_string2symbol(s$$35) {
  return sc_SYMBOL_PREFIX + s$$35;
}
function sc_symbolAppend() {
  var res$$29 = sc_SYMBOL_PREFIX;
  var i$$49 = 0;
  for (;i$$49 < arguments.length;i$$49++) {
    res$$29 += arguments[i$$49].slice(1);
  }
  return res$$29;
}
function sc_char2string(c$$23) {
  return c$$23.val;
}
function sc_char2symbol(c$$24) {
  return sc_SYMBOL_PREFIX + c$$24.val;
}
function sc_isString(s$$36) {
  return typeof s$$36 === "string" && s$$36.charAt(0) !== sc_SYMBOL_PREFIX;
}
var sc_makeString = sc_makejsString;
function sc_string() {
  var i$$50 = 0;
  for (;i$$50 < arguments.length;i$$50++) {
    arguments[i$$50] = arguments[i$$50].val;
  }
  return "".concat.apply("", arguments);
}
function sc_stringLength(s$$37) {
  return s$$37.length;
}
function sc_stringRef(s$$38, k$$5) {
  return new sc_Char(s$$38.charAt(k$$5));
}
function sc_isStringEqual(s1$$2, s2$$2) {
  return s1$$2 === s2$$2;
}
function sc_isStringLess(s1$$3, s2$$3) {
  return s1$$3 < s2$$3;
}
function sc_isStringGreater(s1$$4, s2$$4) {
  return s1$$4 > s2$$4;
}
function sc_isStringLessEqual(s1$$5, s2$$5) {
  return s1$$5 <= s2$$5;
}
function sc_isStringGreaterEqual(s1$$6, s2$$6) {
  return s1$$6 >= s2$$6;
}
function sc_isStringCIEqual(s1$$7, s2$$7) {
  return s1$$7.toLowerCase() === s2$$7.toLowerCase();
}
function sc_isStringCILess(s1$$8, s2$$8) {
  return s1$$8.toLowerCase() < s2$$8.toLowerCase();
}
function sc_isStringCIGreater(s1$$9, s2$$9) {
  return s1$$9.toLowerCase() > s2$$9.toLowerCase();
}
function sc_isStringCILessEqual(s1$$10, s2$$10) {
  return s1$$10.toLowerCase() <= s2$$10.toLowerCase();
}
function sc_isStringCIGreaterEqual(s1$$11, s2$$11) {
  return s1$$11.toLowerCase() >= s2$$11.toLowerCase();
}
function sc_substring(s$$39, start$$6, end$$2) {
  return s$$39.substring(start$$6, end$$2);
}
function sc_isSubstring_at(s1$$12, s2$$12, i$$51) {
  return s2$$12 == s1$$12.substring(i$$51, i$$51 + s2$$12.length);
}
function sc_stringAppend() {
  return "".concat.apply("", arguments);
}
var sc_string2list = sc_jsstring2list;
var sc_list2string = sc_list2jsstring;
function sc_stringCopy(s$$40) {
  return s$$40;
}
function sc_keyword2string(o$$34) {
  return o$$34.slice(1);
}
function sc_string2keyword(o$$35) {
  return sc_KEYWORD_PREFIX + o$$35;
}
String.prototype.sc_toDisplayString = function() {
  if (this.charAt(0) === sc_SYMBOL_PREFIX) {
    return this.slice(1);
  } else {
    if (this.charAt(0) === sc_KEYWORD_PREFIX) {
      return ":" + this.slice(1);
    } else {
      return this.toString();
    }
  }
};
String.prototype.sc_toWriteString = function() {
  if (this.charAt(0) === sc_SYMBOL_PREFIX) {
    return this.slice(1);
  } else {
    if (this.charAt(0) === sc_KEYWORD_PREFIX) {
      return ":" + this.slice(1);
    } else {
      return'"' + sc_escapeWriteString(this) + '"';
    }
  }
};
var BgL_testzd2boyerzd2;
var BgL_nboyerzd2benchmarkzd2;
var BgL_setupzd2boyerzd2;
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
sc_const_4_nboyer = new sc_Pair("\u1e9cimplies", new sc_Pair(new sc_Pair("\u1e9cand", new sc_Pair(new sc_Pair("\u1e9cimplies", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair(new sc_Pair("\u1e9cand", new sc_Pair(new sc_Pair("\u1e9cimplies", new sc_Pair("\u1e9cy", new sc_Pair("\u1e9cz", null))), new sc_Pair(new sc_Pair("\u1e9cand", new sc_Pair(new sc_Pair("\u1e9cimplies", new sc_Pair("\u1e9cz", new sc_Pair("\u1e9cu", null))), new sc_Pair(new sc_Pair("\u1e9cimplies", new sc_Pair("\u1e9cu", 
new sc_Pair("\u1e9cw", null))), null))), null))), null))), new sc_Pair(new sc_Pair("\u1e9cimplies", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cw", null))), null)));
sc_const_3_nboyer = sc_list(new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9ccompile", new sc_Pair("\u1e9cform", null)), new sc_Pair(new sc_Pair("\u1e9creverse", new sc_Pair(new sc_Pair("\u1e9ccodegen", new sc_Pair(new sc_Pair("\u1e9coptimize", new sc_Pair("\u1e9cform", null)), new sc_Pair(new sc_Pair("\u1e9cnil", null), null))), null)), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9ceqp", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair(new sc_Pair("\u1e9cequal", 
new sc_Pair(new sc_Pair("\u1e9cfix", new sc_Pair("\u1e9cx", null)), new sc_Pair(new sc_Pair("\u1e9cfix", new sc_Pair("\u1e9cy", null)), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cgreaterp", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair(new sc_Pair("\u1e9clessp", new sc_Pair("\u1e9cy", new sc_Pair("\u1e9cx", null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9clesseqp", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), 
new sc_Pair(new sc_Pair("\u1e9cnot", new sc_Pair(new sc_Pair("\u1e9clessp", new sc_Pair("\u1e9cy", new sc_Pair("\u1e9cx", null))), null)), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cgreatereqp", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair(new sc_Pair("\u1e9cnot", new sc_Pair(new sc_Pair("\u1e9clessp", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), null)), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cboolean", new sc_Pair("\u1e9cx", 
null)), new sc_Pair(new sc_Pair("\u1e9cor", new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair("\u1e9cx", new sc_Pair(new sc_Pair("\u1e9ct", null), null))), new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair("\u1e9cx", new sc_Pair(new sc_Pair("\u1e9cf", null), null))), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9ciff", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair(new sc_Pair("\u1e9cand", new sc_Pair(new sc_Pair("\u1e9cimplies", new sc_Pair("\u1e9cx", 
new sc_Pair("\u1e9cy", null))), new sc_Pair(new sc_Pair("\u1e9cimplies", new sc_Pair("\u1e9cy", new sc_Pair("\u1e9cx", null))), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9ceven1", new sc_Pair("\u1e9cx", null)), new sc_Pair(new sc_Pair("\u1e9cif", new sc_Pair(new sc_Pair("\u1e9czerop", new sc_Pair("\u1e9cx", null)), new sc_Pair(new sc_Pair("\u1e9ct", null), new sc_Pair(new sc_Pair("\u1e9codd", new sc_Pair(new sc_Pair("\u1e9csub1", new sc_Pair("\u1e9cx", null)), null)), 
null)))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9ccountps-", new sc_Pair("\u1e9cl", new sc_Pair("\u1e9cpred", null))), new sc_Pair(new sc_Pair("\u1e9ccountps-loop", new sc_Pair("\u1e9cl", new sc_Pair("\u1e9cpred", new sc_Pair(new sc_Pair("\u1e9czero", null), null)))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cfact-", new sc_Pair("\u1e9ci", null)), new sc_Pair(new sc_Pair("\u1e9cfact-loop", new sc_Pair("\u1e9ci", new sc_Pair(1, null))), null))), 
new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9creverse-", new sc_Pair("\u1e9cx", null)), new sc_Pair(new sc_Pair("\u1e9creverse-loop", new sc_Pair("\u1e9cx", new sc_Pair(new sc_Pair("\u1e9cnil", null), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cdivides", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair(new sc_Pair("\u1e9czerop", new sc_Pair(new sc_Pair("\u1e9cremainder", new sc_Pair("\u1e9cy", new sc_Pair("\u1e9cx", null))), null)), null))), 
new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cassume-true", new sc_Pair("\u1e9cvar", new sc_Pair("\u1e9calist", null))), new sc_Pair(new sc_Pair("\u1e9ccons", new sc_Pair(new sc_Pair("\u1e9ccons", new sc_Pair("\u1e9cvar", new sc_Pair(new sc_Pair("\u1e9ct", null), null))), new sc_Pair("\u1e9calist", null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cassume-false", new sc_Pair("\u1e9cvar", new sc_Pair("\u1e9calist", null))), new sc_Pair(new sc_Pair("\u1e9ccons", 
new sc_Pair(new sc_Pair("\u1e9ccons", new sc_Pair("\u1e9cvar", new sc_Pair(new sc_Pair("\u1e9cf", null), null))), new sc_Pair("\u1e9calist", null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9ctautology-checker", new sc_Pair("\u1e9cx", null)), new sc_Pair(new sc_Pair("\u1e9ctautologyp", new sc_Pair(new sc_Pair("\u1e9cnormalize", new sc_Pair("\u1e9cx", null)), new sc_Pair(new sc_Pair("\u1e9cnil", null), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cfalsify", 
new sc_Pair("\u1e9cx", null)), new sc_Pair(new sc_Pair("\u1e9cfalsify1", new sc_Pair(new sc_Pair("\u1e9cnormalize", new sc_Pair("\u1e9cx", null)), new sc_Pair(new sc_Pair("\u1e9cnil", null), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cprime", new sc_Pair("\u1e9cx", null)), new sc_Pair(new sc_Pair("\u1e9cand", new sc_Pair(new sc_Pair("\u1e9cnot", new sc_Pair(new sc_Pair("\u1e9czerop", new sc_Pair("\u1e9cx", null)), null)), new sc_Pair(new sc_Pair("\u1e9cnot", new sc_Pair(new sc_Pair("\u1e9cequal", 
new sc_Pair("\u1e9cx", new sc_Pair(new sc_Pair("\u1e9cadd1", new sc_Pair(new sc_Pair("\u1e9czero", null), null)), null))), null)), new sc_Pair(new sc_Pair("\u1e9cprime1", new sc_Pair("\u1e9cx", new sc_Pair(new sc_Pair("\u1e9csub1", new sc_Pair("\u1e9cx", null)), null))), null)))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cand", new sc_Pair("\u1e9cp", new sc_Pair("\u1e9cq", null))), new sc_Pair(new sc_Pair("\u1e9cif", new sc_Pair("\u1e9cp", new sc_Pair(new sc_Pair("\u1e9cif", 
new sc_Pair("\u1e9cq", new sc_Pair(new sc_Pair("\u1e9ct", null), new sc_Pair(new sc_Pair("\u1e9cf", null), null)))), new sc_Pair(new sc_Pair("\u1e9cf", null), null)))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cor", new sc_Pair("\u1e9cp", new sc_Pair("\u1e9cq", null))), new sc_Pair(new sc_Pair("\u1e9cif", new sc_Pair("\u1e9cp", new sc_Pair(new sc_Pair("\u1e9ct", null), new sc_Pair(new sc_Pair("\u1e9cif", new sc_Pair("\u1e9cq", new sc_Pair(new sc_Pair("\u1e9ct", null), new sc_Pair(new sc_Pair("\u1e9cf", 
null), null)))), null)))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cnot", new sc_Pair("\u1e9cp", null)), new sc_Pair(new sc_Pair("\u1e9cif", new sc_Pair("\u1e9cp", new sc_Pair(new sc_Pair("\u1e9cf", null), new sc_Pair(new sc_Pair("\u1e9ct", null), null)))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cimplies", new sc_Pair("\u1e9cp", new sc_Pair("\u1e9cq", null))), new sc_Pair(new sc_Pair("\u1e9cif", new sc_Pair("\u1e9cp", new sc_Pair(new sc_Pair("\u1e9cif", 
new sc_Pair("\u1e9cq", new sc_Pair(new sc_Pair("\u1e9ct", null), new sc_Pair(new sc_Pair("\u1e9cf", null), null)))), new sc_Pair(new sc_Pair("\u1e9ct", null), null)))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cfix", new sc_Pair("\u1e9cx", null)), new sc_Pair(new sc_Pair("\u1e9cif", new sc_Pair(new sc_Pair("\u1e9cnumberp", new sc_Pair("\u1e9cx", null)), new sc_Pair("\u1e9cx", new sc_Pair(new sc_Pair("\u1e9czero", null), null)))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cif", 
new sc_Pair(new sc_Pair("\u1e9cif", new sc_Pair("\u1e9ca", new sc_Pair("\u1e9cb", new sc_Pair("\u1e9cc", null)))), new sc_Pair("\u1e9cd", new sc_Pair("\u1e9ce", null)))), new sc_Pair(new sc_Pair("\u1e9cif", new sc_Pair("\u1e9ca", new sc_Pair(new sc_Pair("\u1e9cif", new sc_Pair("\u1e9cb", new sc_Pair("\u1e9cd", new sc_Pair("\u1e9ce", null)))), new sc_Pair(new sc_Pair("\u1e9cif", new sc_Pair("\u1e9cc", new sc_Pair("\u1e9cd", new sc_Pair("\u1e9ce", null)))), null)))), null))), new sc_Pair("\u1e9cequal", 
new sc_Pair(new sc_Pair("\u1e9czerop", new sc_Pair("\u1e9cx", null)), new sc_Pair(new sc_Pair("\u1e9cor", new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair("\u1e9cx", new sc_Pair(new sc_Pair("\u1e9czero", null), null))), new sc_Pair(new sc_Pair("\u1e9cnot", new sc_Pair(new sc_Pair("\u1e9cnumberp", new sc_Pair("\u1e9cx", null)), null)), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", 
null))), new sc_Pair("\u1e9cz", null))), new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9cx", new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9cy", new sc_Pair("\u1e9cz", null))), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9ca", new sc_Pair("\u1e9cb", null))), new sc_Pair(new sc_Pair("\u1e9czero", null), null))), new sc_Pair(new sc_Pair("\u1e9cand", new sc_Pair(new sc_Pair("\u1e9czerop", 
new sc_Pair("\u1e9ca", null)), new sc_Pair(new sc_Pair("\u1e9czerop", new sc_Pair("\u1e9cb", null)), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cdifference", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cx", null))), new sc_Pair(new sc_Pair("\u1e9czero", null), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9ca", new sc_Pair("\u1e9cb", null))), new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9ca", 
new sc_Pair("\u1e9cc", null))), null))), new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cfix", new sc_Pair("\u1e9cb", null)), new sc_Pair(new sc_Pair("\u1e9cfix", new sc_Pair("\u1e9cc", null)), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9czero", null), new sc_Pair(new sc_Pair("\u1e9cdifference", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), null))), new sc_Pair(new sc_Pair("\u1e9cnot", new sc_Pair(new sc_Pair("\u1e9clessp", 
new sc_Pair("\u1e9cy", new sc_Pair("\u1e9cx", null))), null)), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair("\u1e9cx", new sc_Pair(new sc_Pair("\u1e9cdifference", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), null))), new sc_Pair(new sc_Pair("\u1e9cand", new sc_Pair(new sc_Pair("\u1e9cnumberp", new sc_Pair("\u1e9cx", null)), new sc_Pair(new sc_Pair("\u1e9cor", new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair("\u1e9cx", new sc_Pair(new sc_Pair("\u1e9czero", 
null), null))), new sc_Pair(new sc_Pair("\u1e9czerop", new sc_Pair("\u1e9cy", null)), null))), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cmeaning", new sc_Pair(new sc_Pair("\u1e9cplus-tree", new sc_Pair(new sc_Pair("\u1e9cappend", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), null)), new sc_Pair("\u1e9ca", null))), new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair(new sc_Pair("\u1e9cmeaning", new sc_Pair(new sc_Pair("\u1e9cplus-tree", new sc_Pair("\u1e9cx", 
null)), new sc_Pair("\u1e9ca", null))), new sc_Pair(new sc_Pair("\u1e9cmeaning", new sc_Pair(new sc_Pair("\u1e9cplus-tree", new sc_Pair("\u1e9cy", null)), new sc_Pair("\u1e9ca", null))), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cmeaning", new sc_Pair(new sc_Pair("\u1e9cplus-tree", new sc_Pair(new sc_Pair("\u1e9cplus-fringe", new sc_Pair("\u1e9cx", null)), null)), new sc_Pair("\u1e9ca", null))), new sc_Pair(new sc_Pair("\u1e9cfix", new sc_Pair(new sc_Pair("\u1e9cmeaning", 
new sc_Pair("\u1e9cx", new sc_Pair("\u1e9ca", null))), null)), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cappend", new sc_Pair(new sc_Pair("\u1e9cappend", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair("\u1e9cz", null))), new sc_Pair(new sc_Pair("\u1e9cappend", new sc_Pair("\u1e9cx", new sc_Pair(new sc_Pair("\u1e9cappend", new sc_Pair("\u1e9cy", new sc_Pair("\u1e9cz", null))), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9creverse", 
new sc_Pair(new sc_Pair("\u1e9cappend", new sc_Pair("\u1e9ca", new sc_Pair("\u1e9cb", null))), null)), new sc_Pair(new sc_Pair("\u1e9cappend", new sc_Pair(new sc_Pair("\u1e9creverse", new sc_Pair("\u1e9cb", null)), new sc_Pair(new sc_Pair("\u1e9creverse", new sc_Pair("\u1e9ca", null)), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9cx", new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9cy", new sc_Pair("\u1e9cz", null))), null))), new sc_Pair(new sc_Pair("\u1e9cplus", 
new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cz", null))), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair("\u1e9cz", null))), new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9cx", new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9cy", 
new sc_Pair("\u1e9cz", null))), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair(new sc_Pair("\u1e9czero", null), null))), new sc_Pair(new sc_Pair("\u1e9cor", new sc_Pair(new sc_Pair("\u1e9czerop", new sc_Pair("\u1e9cx", null)), new sc_Pair(new sc_Pair("\u1e9czerop", new sc_Pair("\u1e9cy", null)), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cexec", 
new sc_Pair(new sc_Pair("\u1e9cappend", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair("\u1e9cpds", new sc_Pair("\u1e9cenvrn", null)))), new sc_Pair(new sc_Pair("\u1e9cexec", new sc_Pair("\u1e9cy", new sc_Pair(new sc_Pair("\u1e9cexec", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cpds", new sc_Pair("\u1e9cenvrn", null)))), new sc_Pair("\u1e9cenvrn", null)))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cmc-flatten", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", 
null))), new sc_Pair(new sc_Pair("\u1e9cappend", new sc_Pair(new sc_Pair("\u1e9cflatten", new sc_Pair("\u1e9cx", null)), new sc_Pair("\u1e9cy", null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cmember", new sc_Pair("\u1e9cx", new sc_Pair(new sc_Pair("\u1e9cappend", new sc_Pair("\u1e9ca", new sc_Pair("\u1e9cb", null))), null))), new sc_Pair(new sc_Pair("\u1e9cor", new sc_Pair(new sc_Pair("\u1e9cmember", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9ca", null))), new sc_Pair(new sc_Pair("\u1e9cmember", 
new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cb", null))), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cmember", new sc_Pair("\u1e9cx", new sc_Pair(new sc_Pair("\u1e9creverse", new sc_Pair("\u1e9cy", null)), null))), new sc_Pair(new sc_Pair("\u1e9cmember", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9clength", new sc_Pair(new sc_Pair("\u1e9creverse", new sc_Pair("\u1e9cx", null)), null)), new sc_Pair(new sc_Pair("\u1e9clength", 
new sc_Pair("\u1e9cx", null)), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cmember", new sc_Pair("\u1e9ca", new sc_Pair(new sc_Pair("\u1e9cintersect", new sc_Pair("\u1e9cb", new sc_Pair("\u1e9cc", null))), null))), new sc_Pair(new sc_Pair("\u1e9cand", new sc_Pair(new sc_Pair("\u1e9cmember", new sc_Pair("\u1e9ca", new sc_Pair("\u1e9cb", null))), new sc_Pair(new sc_Pair("\u1e9cmember", new sc_Pair("\u1e9ca", new sc_Pair("\u1e9cc", null))), null))), null))), new sc_Pair("\u1e9cequal", 
new sc_Pair(new sc_Pair("\u1e9cnth", new sc_Pair(new sc_Pair("\u1e9czero", null), new sc_Pair("\u1e9ci", null))), new sc_Pair(new sc_Pair("\u1e9czero", null), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cexp", new sc_Pair("\u1e9ci", new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9cj", new sc_Pair("\u1e9ck", null))), null))), new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair(new sc_Pair("\u1e9cexp", new sc_Pair("\u1e9ci", new sc_Pair("\u1e9cj", null))), new sc_Pair(new sc_Pair("\u1e9cexp", 
new sc_Pair("\u1e9ci", new sc_Pair("\u1e9ck", null))), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cexp", new sc_Pair("\u1e9ci", new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9cj", new sc_Pair("\u1e9ck", null))), null))), new sc_Pair(new sc_Pair("\u1e9cexp", new sc_Pair(new sc_Pair("\u1e9cexp", new sc_Pair("\u1e9ci", new sc_Pair("\u1e9cj", null))), new sc_Pair("\u1e9ck", null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9creverse-loop", 
new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair(new sc_Pair("\u1e9cappend", new sc_Pair(new sc_Pair("\u1e9creverse", new sc_Pair("\u1e9cx", null)), new sc_Pair("\u1e9cy", null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9creverse-loop", new sc_Pair("\u1e9cx", new sc_Pair(new sc_Pair("\u1e9cnil", null), null))), new sc_Pair(new sc_Pair("\u1e9creverse", new sc_Pair("\u1e9cx", null)), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9ccount-list", 
new sc_Pair("\u1e9cz", new sc_Pair(new sc_Pair("\u1e9csort-lp", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), null))), new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair(new sc_Pair("\u1e9ccount-list", new sc_Pair("\u1e9cz", new sc_Pair("\u1e9cx", null))), new sc_Pair(new sc_Pair("\u1e9ccount-list", new sc_Pair("\u1e9cz", new sc_Pair("\u1e9cy", null))), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cappend", new sc_Pair("\u1e9ca", 
new sc_Pair("\u1e9cb", null))), new sc_Pair(new sc_Pair("\u1e9cappend", new sc_Pair("\u1e9ca", new sc_Pair("\u1e9cc", null))), null))), new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair("\u1e9cb", new sc_Pair("\u1e9cc", null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair(new sc_Pair("\u1e9cremainder", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9cy", new sc_Pair(new sc_Pair("\u1e9cquotient", 
new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), null))), null))), new sc_Pair(new sc_Pair("\u1e9cfix", new sc_Pair("\u1e9cx", null)), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cpower-eval", new sc_Pair(new sc_Pair("\u1e9cbig-plus1", new sc_Pair("\u1e9cl", new sc_Pair("\u1e9ci", new sc_Pair("\u1e9cbase", null)))), new sc_Pair("\u1e9cbase", null))), new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair(new sc_Pair("\u1e9cpower-eval", new sc_Pair("\u1e9cl", new sc_Pair("\u1e9cbase", 
null))), new sc_Pair("\u1e9ci", null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cpower-eval", new sc_Pair(new sc_Pair("\u1e9cbig-plus", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", new sc_Pair("\u1e9ci", new sc_Pair("\u1e9cbase", null))))), new sc_Pair("\u1e9cbase", null))), new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9ci", new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair(new sc_Pair("\u1e9cpower-eval", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cbase", null))), 
new sc_Pair(new sc_Pair("\u1e9cpower-eval", new sc_Pair("\u1e9cy", new sc_Pair("\u1e9cbase", null))), null))), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cremainder", new sc_Pair("\u1e9cy", new sc_Pair(1, null))), new sc_Pair(new sc_Pair("\u1e9czero", null), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9clessp", new sc_Pair(new sc_Pair("\u1e9cremainder", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair("\u1e9cy", null))), new sc_Pair(new sc_Pair("\u1e9cnot", 
new sc_Pair(new sc_Pair("\u1e9czerop", new sc_Pair("\u1e9cy", null)), null)), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cremainder", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cx", null))), new sc_Pair(new sc_Pair("\u1e9czero", null), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9clessp", new sc_Pair(new sc_Pair("\u1e9cquotient", new sc_Pair("\u1e9ci", new sc_Pair("\u1e9cj", null))), new sc_Pair("\u1e9ci", null))), new sc_Pair(new sc_Pair("\u1e9cand", new sc_Pair(new sc_Pair("\u1e9cnot", 
new sc_Pair(new sc_Pair("\u1e9czerop", new sc_Pair("\u1e9ci", null)), null)), new sc_Pair(new sc_Pair("\u1e9cor", new sc_Pair(new sc_Pair("\u1e9czerop", new sc_Pair("\u1e9cj", null)), new sc_Pair(new sc_Pair("\u1e9cnot", new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair("\u1e9cj", new sc_Pair(1, null))), null)), null))), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9clessp", new sc_Pair(new sc_Pair("\u1e9cremainder", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), 
new sc_Pair("\u1e9cx", null))), new sc_Pair(new sc_Pair("\u1e9cand", new sc_Pair(new sc_Pair("\u1e9cnot", new sc_Pair(new sc_Pair("\u1e9czerop", new sc_Pair("\u1e9cy", null)), null)), new sc_Pair(new sc_Pair("\u1e9cnot", new sc_Pair(new sc_Pair("\u1e9czerop", new sc_Pair("\u1e9cx", null)), null)), new sc_Pair(new sc_Pair("\u1e9cnot", new sc_Pair(new sc_Pair("\u1e9clessp", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), null)), null)))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cpower-eval", 
new sc_Pair(new sc_Pair("\u1e9cpower-rep", new sc_Pair("\u1e9ci", new sc_Pair("\u1e9cbase", null))), new sc_Pair("\u1e9cbase", null))), new sc_Pair(new sc_Pair("\u1e9cfix", new sc_Pair("\u1e9ci", null)), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cpower-eval", new sc_Pair(new sc_Pair("\u1e9cbig-plus", new sc_Pair(new sc_Pair("\u1e9cpower-rep", new sc_Pair("\u1e9ci", new sc_Pair("\u1e9cbase", null))), new sc_Pair(new sc_Pair("\u1e9cpower-rep", new sc_Pair("\u1e9cj", new sc_Pair("\u1e9cbase", 
null))), new sc_Pair(new sc_Pair("\u1e9czero", null), new sc_Pair("\u1e9cbase", null))))), new sc_Pair("\u1e9cbase", null))), new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9ci", new sc_Pair("\u1e9cj", null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cgcd", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair(new sc_Pair("\u1e9cgcd", new sc_Pair("\u1e9cy", new sc_Pair("\u1e9cx", null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cnth", 
new sc_Pair(new sc_Pair("\u1e9cappend", new sc_Pair("\u1e9ca", new sc_Pair("\u1e9cb", null))), new sc_Pair("\u1e9ci", null))), new sc_Pair(new sc_Pair("\u1e9cappend", new sc_Pair(new sc_Pair("\u1e9cnth", new sc_Pair("\u1e9ca", new sc_Pair("\u1e9ci", null))), new sc_Pair(new sc_Pair("\u1e9cnth", new sc_Pair("\u1e9cb", new sc_Pair(new sc_Pair("\u1e9cdifference", new sc_Pair("\u1e9ci", new sc_Pair(new sc_Pair("\u1e9clength", new sc_Pair("\u1e9ca", null)), null))), null))), null))), null))), new sc_Pair("\u1e9cequal", 
new sc_Pair(new sc_Pair("\u1e9cdifference", new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair("\u1e9cx", null))), new sc_Pair(new sc_Pair("\u1e9cfix", new sc_Pair("\u1e9cy", null)), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cdifference", new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9cy", new sc_Pair("\u1e9cx", null))), new sc_Pair("\u1e9cx", null))), new sc_Pair(new sc_Pair("\u1e9cfix", new sc_Pair("\u1e9cy", 
null)), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cdifference", new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cz", null))), null))), new sc_Pair(new sc_Pair("\u1e9cdifference", new sc_Pair("\u1e9cy", new sc_Pair("\u1e9cz", null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9cx", new sc_Pair(new sc_Pair("\u1e9cdifference", 
new sc_Pair("\u1e9cc", new sc_Pair("\u1e9cw", null))), null))), new sc_Pair(new sc_Pair("\u1e9cdifference", new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9cc", new sc_Pair("\u1e9cx", null))), new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9cw", new sc_Pair("\u1e9cx", null))), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cremainder", new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cz", null))), new sc_Pair("\u1e9cz", 
null))), new sc_Pair(new sc_Pair("\u1e9czero", null), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cdifference", new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9cb", new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9ca", new sc_Pair("\u1e9cc", null))), null))), new sc_Pair("\u1e9ca", null))), new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9cb", new sc_Pair("\u1e9cc", null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cdifference", 
new sc_Pair(new sc_Pair("\u1e9cadd1", new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9cy", new sc_Pair("\u1e9cz", null))), null)), new sc_Pair("\u1e9cz", null))), new sc_Pair(new sc_Pair("\u1e9cadd1", new sc_Pair("\u1e9cy", null)), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9clessp", new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cz", null))), 
null))), new sc_Pair(new sc_Pair("\u1e9clessp", new sc_Pair("\u1e9cy", new sc_Pair("\u1e9cz", null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9clessp", new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cz", null))), new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9cy", new sc_Pair("\u1e9cz", null))), null))), new sc_Pair(new sc_Pair("\u1e9cand", new sc_Pair(new sc_Pair("\u1e9cnot", new sc_Pair(new sc_Pair("\u1e9czerop", new sc_Pair("\u1e9cz", 
null)), null)), new sc_Pair(new sc_Pair("\u1e9clessp", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9clessp", new sc_Pair("\u1e9cy", new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), null))), new sc_Pair(new sc_Pair("\u1e9cnot", new sc_Pair(new sc_Pair("\u1e9czerop", new sc_Pair("\u1e9cx", null)), null)), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cgcd", 
new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cz", null))), new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9cy", new sc_Pair("\u1e9cz", null))), null))), new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9cz", new sc_Pair(new sc_Pair("\u1e9cgcd", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cvalue", new sc_Pair(new sc_Pair("\u1e9cnormalize", new sc_Pair("\u1e9cx", 
null)), new sc_Pair("\u1e9ca", null))), new sc_Pair(new sc_Pair("\u1e9cvalue", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9ca", null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cflatten", new sc_Pair("\u1e9cx", null)), new sc_Pair(new sc_Pair("\u1e9ccons", new sc_Pair("\u1e9cy", new sc_Pair(new sc_Pair("\u1e9cnil", null), null))), null))), new sc_Pair(new sc_Pair("\u1e9cand", new sc_Pair(new sc_Pair("\u1e9cnlistp", new sc_Pair("\u1e9cx", 
null)), new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9clistp", new sc_Pair(new sc_Pair("\u1e9cgopher", new sc_Pair("\u1e9cx", null)), null)), new sc_Pair(new sc_Pair("\u1e9clistp", new sc_Pair("\u1e9cx", null)), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9csamefringe", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair(new sc_Pair("\u1e9cequal", 
new sc_Pair(new sc_Pair("\u1e9cflatten", new sc_Pair("\u1e9cx", null)), new sc_Pair(new sc_Pair("\u1e9cflatten", new sc_Pair("\u1e9cy", null)), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cgreatest-factor", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair(new sc_Pair("\u1e9czero", null), null))), new sc_Pair(new sc_Pair("\u1e9cand", new sc_Pair(new sc_Pair("\u1e9cor", new sc_Pair(new sc_Pair("\u1e9czerop", new sc_Pair("\u1e9cy", 
null)), new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair("\u1e9cy", new sc_Pair(1, null))), null))), new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair("\u1e9cx", new sc_Pair(new sc_Pair("\u1e9czero", null), null))), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cgreatest-factor", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair(1, null))), new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair("\u1e9cx", new sc_Pair(1, 
null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cnumberp", new sc_Pair(new sc_Pair("\u1e9cgreatest-factor", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), null)), new sc_Pair(new sc_Pair("\u1e9cnot", new sc_Pair(new sc_Pair("\u1e9cand", new sc_Pair(new sc_Pair("\u1e9cor", new sc_Pair(new sc_Pair("\u1e9czerop", new sc_Pair("\u1e9cy", null)), new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair("\u1e9cy", new sc_Pair(1, null))), null))), new sc_Pair(new sc_Pair("\u1e9cnot", 
new sc_Pair(new sc_Pair("\u1e9cnumberp", new sc_Pair("\u1e9cx", null)), null)), null))), null)), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9ctimes-list", new sc_Pair(new sc_Pair("\u1e9cappend", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), null)), new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair(new sc_Pair("\u1e9ctimes-list", new sc_Pair("\u1e9cx", null)), new sc_Pair(new sc_Pair("\u1e9ctimes-list", new sc_Pair("\u1e9cy", null)), null))), null))), new sc_Pair("\u1e9cequal", 
new sc_Pair(new sc_Pair("\u1e9cprime-list", new sc_Pair(new sc_Pair("\u1e9cappend", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), null)), new sc_Pair(new sc_Pair("\u1e9cand", new sc_Pair(new sc_Pair("\u1e9cprime-list", new sc_Pair("\u1e9cx", null)), new sc_Pair(new sc_Pair("\u1e9cprime-list", new sc_Pair("\u1e9cy", null)), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair("\u1e9cz", new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9cw", 
new sc_Pair("\u1e9cz", null))), null))), new sc_Pair(new sc_Pair("\u1e9cand", new sc_Pair(new sc_Pair("\u1e9cnumberp", new sc_Pair("\u1e9cz", null)), new sc_Pair(new sc_Pair("\u1e9cor", new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair("\u1e9cz", new sc_Pair(new sc_Pair("\u1e9czero", null), null))), new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair("\u1e9cw", new sc_Pair(1, null))), null))), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cgreatereqp", new sc_Pair("\u1e9cx", 
new sc_Pair("\u1e9cy", null))), new sc_Pair(new sc_Pair("\u1e9cnot", new sc_Pair(new sc_Pair("\u1e9clessp", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), null)), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair("\u1e9cx", new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), null))), new sc_Pair(new sc_Pair("\u1e9cor", new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair("\u1e9cx", new sc_Pair(new sc_Pair("\u1e9czero", 
null), null))), new sc_Pair(new sc_Pair("\u1e9cand", new sc_Pair(new sc_Pair("\u1e9cnumberp", new sc_Pair("\u1e9cx", null)), new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair("\u1e9cy", new sc_Pair(1, null))), null))), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cremainder", new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9cy", new sc_Pair("\u1e9cx", null))), new sc_Pair("\u1e9cy", null))), new sc_Pair(new sc_Pair("\u1e9czero", null), null))), new sc_Pair("\u1e9cequal", 
new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9ca", new sc_Pair("\u1e9cb", null))), new sc_Pair(1, null))), new sc_Pair(sc_list("\u1e9cand", new sc_Pair("\u1e9cnot", new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair("\u1e9ca", new sc_Pair(new sc_Pair("\u1e9czero", null), null))), null)), new sc_Pair("\u1e9cnot", new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair("\u1e9cb", new sc_Pair(new sc_Pair("\u1e9czero", null), null))), null)), new sc_Pair("\u1e9cnumberp", 
new sc_Pair("\u1e9ca", null)), new sc_Pair("\u1e9cnumberp", new sc_Pair("\u1e9cb", null)), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9csub1", new sc_Pair("\u1e9ca", null)), new sc_Pair(new sc_Pair("\u1e9czero", null), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9csub1", new sc_Pair("\u1e9cb", null)), new sc_Pair(new sc_Pair("\u1e9czero", null), null)))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9clessp", new sc_Pair(new sc_Pair("\u1e9clength", 
new sc_Pair(new sc_Pair("\u1e9cdelete", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cl", null))), null)), new sc_Pair(new sc_Pair("\u1e9clength", new sc_Pair("\u1e9cl", null)), null))), new sc_Pair(new sc_Pair("\u1e9cmember", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cl", null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9csort2", new sc_Pair(new sc_Pair("\u1e9cdelete", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cl", null))), null)), new sc_Pair(new sc_Pair("\u1e9cdelete", new sc_Pair("\u1e9cx", 
new sc_Pair(new sc_Pair("\u1e9csort2", new sc_Pair("\u1e9cl", null)), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cdsort", new sc_Pair("\u1e9cx", null)), new sc_Pair(new sc_Pair("\u1e9csort2", new sc_Pair("\u1e9cx", null)), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9clength", new sc_Pair(new sc_Pair("\u1e9ccons", new sc_Pair("\u1e9cx1", new sc_Pair(new sc_Pair("\u1e9ccons", new sc_Pair("\u1e9cx2", new sc_Pair(new sc_Pair("\u1e9ccons", new sc_Pair("\u1e9cx3", 
new sc_Pair(new sc_Pair("\u1e9ccons", new sc_Pair("\u1e9cx4", new sc_Pair(new sc_Pair("\u1e9ccons", new sc_Pair("\u1e9cx5", new sc_Pair(new sc_Pair("\u1e9ccons", new sc_Pair("\u1e9cx6", new sc_Pair("\u1e9cx7", null))), null))), null))), null))), null))), null))), null)), new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair(6, new sc_Pair(new sc_Pair("\u1e9clength", new sc_Pair("\u1e9cx7", null)), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cdifference", new sc_Pair(new sc_Pair("\u1e9cadd1", 
new sc_Pair(new sc_Pair("\u1e9cadd1", new sc_Pair("\u1e9cx", null)), null)), new sc_Pair(2, null))), new sc_Pair(new sc_Pair("\u1e9cfix", new sc_Pair("\u1e9cx", null)), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cquotient", new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9cx", new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), null))), new sc_Pair(2, null))), new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9cx", new sc_Pair(new sc_Pair("\u1e9cquotient", 
new sc_Pair("\u1e9cy", new sc_Pair(2, null))), null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9csigma", new sc_Pair(new sc_Pair("\u1e9czero", null), new sc_Pair("\u1e9ci", null))), new sc_Pair(new sc_Pair("\u1e9cquotient", new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9ci", new sc_Pair(new sc_Pair("\u1e9cadd1", new sc_Pair("\u1e9ci", null)), null))), new sc_Pair(2, null))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9cx", 
new sc_Pair(new sc_Pair("\u1e9cadd1", new sc_Pair("\u1e9cy", null)), null))), new sc_Pair(new sc_Pair("\u1e9cif", new sc_Pair(new sc_Pair("\u1e9cnumberp", new sc_Pair("\u1e9cy", null)), new sc_Pair(new sc_Pair("\u1e9cadd1", new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), null)), new sc_Pair(new sc_Pair("\u1e9cadd1", new sc_Pair("\u1e9cx", null)), null)))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cdifference", 
new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair(new sc_Pair("\u1e9cdifference", new sc_Pair("\u1e9cz", new sc_Pair("\u1e9cy", null))), null))), new sc_Pair(new sc_Pair("\u1e9cif", new sc_Pair(new sc_Pair("\u1e9clessp", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair(new sc_Pair("\u1e9cnot", new sc_Pair(new sc_Pair("\u1e9clessp", new sc_Pair("\u1e9cy", new sc_Pair("\u1e9cz", null))), null)), new sc_Pair(new sc_Pair("\u1e9cif", new sc_Pair(new sc_Pair("\u1e9clessp", 
new sc_Pair("\u1e9cz", new sc_Pair("\u1e9cy", null))), new sc_Pair(new sc_Pair("\u1e9cnot", new sc_Pair(new sc_Pair("\u1e9clessp", new sc_Pair("\u1e9cy", new sc_Pair("\u1e9cx", null))), null)), new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cfix", new sc_Pair("\u1e9cx", null)), new sc_Pair(new sc_Pair("\u1e9cfix", new sc_Pair("\u1e9cz", null)), null))), null)))), null)))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cmeaning", new sc_Pair(new sc_Pair("\u1e9cplus-tree", 
new sc_Pair(new sc_Pair("\u1e9cdelete", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), null)), new sc_Pair("\u1e9ca", null))), new sc_Pair(new sc_Pair("\u1e9cif", new sc_Pair(new sc_Pair("\u1e9cmember", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair(new sc_Pair("\u1e9cdifference", new sc_Pair(new sc_Pair("\u1e9cmeaning", new sc_Pair(new sc_Pair("\u1e9cplus-tree", new sc_Pair("\u1e9cy", null)), new sc_Pair("\u1e9ca", null))), new sc_Pair(new sc_Pair("\u1e9cmeaning", new sc_Pair("\u1e9cx", 
new sc_Pair("\u1e9ca", null))), null))), new sc_Pair(new sc_Pair("\u1e9cmeaning", new sc_Pair(new sc_Pair("\u1e9cplus-tree", new sc_Pair("\u1e9cy", null)), new sc_Pair("\u1e9ca", null))), null)))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9cx", new sc_Pair(new sc_Pair("\u1e9cadd1", new sc_Pair("\u1e9cy", null)), null))), new sc_Pair(new sc_Pair("\u1e9cif", new sc_Pair(new sc_Pair("\u1e9cnumberp", new sc_Pair("\u1e9cy", null)), new sc_Pair(new sc_Pair("\u1e9cplus", 
new sc_Pair("\u1e9cx", new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), null))), new sc_Pair(new sc_Pair("\u1e9cfix", new sc_Pair("\u1e9cx", null)), null)))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cnth", new sc_Pair(new sc_Pair("\u1e9cnil", null), new sc_Pair("\u1e9ci", null))), new sc_Pair(new sc_Pair("\u1e9cif", new sc_Pair(new sc_Pair("\u1e9czerop", new sc_Pair("\u1e9ci", null)), new sc_Pair(new sc_Pair("\u1e9cnil", null), 
new sc_Pair(new sc_Pair("\u1e9czero", null), null)))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9clast", new sc_Pair(new sc_Pair("\u1e9cappend", new sc_Pair("\u1e9ca", new sc_Pair("\u1e9cb", null))), null)), new sc_Pair(new sc_Pair("\u1e9cif", new sc_Pair(new sc_Pair("\u1e9clistp", new sc_Pair("\u1e9cb", null)), new sc_Pair(new sc_Pair("\u1e9clast", new sc_Pair("\u1e9cb", null)), new sc_Pair(new sc_Pair("\u1e9cif", new sc_Pair(new sc_Pair("\u1e9clistp", new sc_Pair("\u1e9ca", 
null)), new sc_Pair(new sc_Pair("\u1e9ccons", new sc_Pair(new sc_Pair("\u1e9ccar", new sc_Pair(new sc_Pair("\u1e9clast", new sc_Pair("\u1e9ca", null)), null)), new sc_Pair("\u1e9cb", null))), new sc_Pair("\u1e9cb", null)))), null)))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9clessp", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair("\u1e9cz", null))), new sc_Pair(new sc_Pair("\u1e9cif", new sc_Pair(new sc_Pair("\u1e9clessp", 
new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9ct", null), new sc_Pair("\u1e9cz", null))), new sc_Pair(new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cf", null), new sc_Pair("\u1e9cz", null))), null)))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cassignment", new sc_Pair("\u1e9cx", new sc_Pair(new sc_Pair("\u1e9cappend", new sc_Pair("\u1e9ca", new sc_Pair("\u1e9cb", null))), null))), new sc_Pair(new sc_Pair("\u1e9cif", 
new sc_Pair(new sc_Pair("\u1e9cassignedp", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9ca", null))), new sc_Pair(new sc_Pair("\u1e9cassignment", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9ca", null))), new sc_Pair(new sc_Pair("\u1e9cassignment", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cb", null))), null)))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9ccar", new sc_Pair(new sc_Pair("\u1e9cgopher", new sc_Pair("\u1e9cx", null)), null)), new sc_Pair(new sc_Pair("\u1e9cif", new sc_Pair(new sc_Pair("\u1e9clistp", 
new sc_Pair("\u1e9cx", null)), new sc_Pair(new sc_Pair("\u1e9ccar", new sc_Pair(new sc_Pair("\u1e9cflatten", new sc_Pair("\u1e9cx", null)), null)), new sc_Pair(new sc_Pair("\u1e9czero", null), null)))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cflatten", new sc_Pair(new sc_Pair("\u1e9ccdr", new sc_Pair(new sc_Pair("\u1e9cgopher", new sc_Pair("\u1e9cx", null)), null)), null)), new sc_Pair(new sc_Pair("\u1e9cif", new sc_Pair(new sc_Pair("\u1e9clistp", new sc_Pair("\u1e9cx", 
null)), new sc_Pair(new sc_Pair("\u1e9ccdr", new sc_Pair(new sc_Pair("\u1e9cflatten", new sc_Pair("\u1e9cx", null)), null)), new sc_Pair(new sc_Pair("\u1e9ccons", new sc_Pair(new sc_Pair("\u1e9czero", null), new sc_Pair(new sc_Pair("\u1e9cnil", null), null))), null)))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cquotient", new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9cy", new sc_Pair("\u1e9cx", null))), new sc_Pair("\u1e9cy", null))), new sc_Pair(new sc_Pair("\u1e9cif", 
new sc_Pair(new sc_Pair("\u1e9czerop", new sc_Pair("\u1e9cy", null)), new sc_Pair(new sc_Pair("\u1e9czero", null), new sc_Pair(new sc_Pair("\u1e9cfix", new sc_Pair("\u1e9cx", null)), null)))), null))), new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cget", new sc_Pair("\u1e9cj", new sc_Pair(new sc_Pair("\u1e9cset", new sc_Pair("\u1e9ci", new sc_Pair("\u1e9cval", new sc_Pair("\u1e9cmem", null)))), null))), new sc_Pair(new sc_Pair("\u1e9cif", new sc_Pair(new sc_Pair("\u1e9ceqp", new sc_Pair("\u1e9cj", 
new sc_Pair("\u1e9ci", null))), new sc_Pair("\u1e9cval", new sc_Pair(new sc_Pair("\u1e9cget", new sc_Pair("\u1e9cj", new sc_Pair("\u1e9cmem", null))), null)))), null))));
const_nboyer = new sc_Pair(new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cf", new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9ca", new sc_Pair("\u1e9cb", null))), new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9cc", new sc_Pair(new sc_Pair("\u1e9czero", null), null))), null))), null))), new sc_Pair(new sc_Pair("\u1e9cy", new sc_Pair("\u1e9cf", new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair(new sc_Pair("\u1e9ctimes", new sc_Pair("\u1e9ca", new sc_Pair("\u1e9cb", 
null))), new sc_Pair(new sc_Pair("\u1e9cplus", new sc_Pair("\u1e9cc", new sc_Pair("\u1e9cd", null))), null))), null))), new sc_Pair(new sc_Pair("\u1e9cz", new sc_Pair("\u1e9cf", new sc_Pair(new sc_Pair("\u1e9creverse", new sc_Pair(new sc_Pair("\u1e9cappend", new sc_Pair(new sc_Pair("\u1e9cappend", new sc_Pair("\u1e9ca", new sc_Pair("\u1e9cb", null))), new sc_Pair(new sc_Pair("\u1e9cnil", null), null))), null)), null))), new sc_Pair(new sc_Pair("\u1e9cu", new sc_Pair("\u1e9cequal", new sc_Pair(new sc_Pair("\u1e9cplus", 
new sc_Pair("\u1e9ca", new sc_Pair("\u1e9cb", null))), new sc_Pair(new sc_Pair("\u1e9cdifference", new sc_Pair("\u1e9cx", new sc_Pair("\u1e9cy", null))), null)))), new sc_Pair(new sc_Pair("\u1e9cw", new sc_Pair("\u1e9clessp", new sc_Pair(new sc_Pair("\u1e9cremainder", new sc_Pair("\u1e9ca", new sc_Pair("\u1e9cb", null))), new sc_Pair(new sc_Pair("\u1e9cmember", new sc_Pair("\u1e9ca", new sc_Pair(new sc_Pair("\u1e9clength", new sc_Pair("\u1e9cb", null)), null))), null)))), null)))));
BgL_nboyerzd2benchmarkzd2 = function() {
  var args$$5 = null;
  var sc_tmp = arguments.length - 1;
  for (;sc_tmp >= 0;sc_tmp--) {
    args$$5 = sc_cons(arguments[sc_tmp], args$$5);
  }
  var n$$10;
  return n$$10 = args$$5 === null ? 0 : args$$5.car, BgL_setupzd2boyerzd2(), BgL_runzd2benchmarkzd2("nboyer" + sc_number2string(n$$10), 1, function() {
    return BgL_testzd2boyerzd2(n$$10);
  }, function(rewrites) {
    if (sc_isNumber(rewrites)) {
      switch(n$$10) {
        case 0:
          return rewrites === 95024;
          break;
        case 1:
          return rewrites === 591777;
          break;
        case 2:
          return rewrites === 1813975;
          break;
        case 3:
          return rewrites === 5375678;
          break;
        case 4:
          return rewrites === 16445406;
          break;
        case 5:
          return rewrites === 51507739;
          break;
        default:
          return true;
          break;
      }
    } else {
      return false;
    }
  });
};
BgL_setupzd2boyerzd2 = function() {
  return true;
};
BgL_testzd2boyerzd2 = function() {
  return true;
};
translate_term_nboyer = function(term) {
  var lst;
  return!(term instanceof sc_Pair) ? term : new sc_Pair(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(term.car), (lst = term.cdr, lst === null ? null : new sc_Pair(translate_term_nboyer(lst.car), translate_args_nboyer(lst.cdr))));
};
translate_args_nboyer = function(lst$$1) {
  var sc_lst_5;
  var term$$1;
  return lst$$1 === null ? null : new sc_Pair((term$$1 = lst$$1.car, !(term$$1 instanceof sc_Pair) ? term$$1 : new sc_Pair(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(term$$1.car), translate_args_nboyer(term$$1.cdr))), (sc_lst_5 = lst$$1.cdr, sc_lst_5 === null ? null : new sc_Pair(translate_term_nboyer(sc_lst_5.car), translate_args_nboyer(sc_lst_5.cdr))));
};
untranslate_term_nboyer = function(term$$2) {
  var optrOpnd;
  var tail1131;
  var L1127;
  var falseHead1130;
  var symbol_record;
  if (!(term$$2 instanceof sc_Pair)) {
    return term$$2;
  } else {
    falseHead1130 = new sc_Pair(null, null);
    L1127 = term$$2.cdr;
    tail1131 = falseHead1130;
    for (;!(L1127 === null);) {
      tail1131.cdr = new sc_Pair(untranslate_term_nboyer(L1127.car), null);
      tail1131 = tail1131.cdr;
      L1127 = L1127.cdr;
    }
    optrOpnd = falseHead1130.cdr;
    return new sc_Pair((symbol_record = term$$2.car, symbol_record[0]), optrOpnd);
  }
};
BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer = function(sym$$4) {
  var r;
  var x$$74;
  return x$$74 = sc_assq(sym$$4, BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer), x$$74 !== false ? x$$74.cdr : (r = [sym$$4, null], BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer = new sc_Pair(new sc_Pair(sym$$4, r), BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer), r);
};
BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer = null;
translate_alist_nboyer = function(alist) {
  var sc_alist_6;
  var term$$3;
  return alist === null ? null : new sc_Pair(new sc_Pair(alist.car.car, (term$$3 = alist.car.cdr, !(term$$3 instanceof sc_Pair) ? term$$3 : new sc_Pair(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(term$$3.car), translate_args_nboyer(term$$3.cdr)))), (sc_alist_6 = alist.cdr, sc_alist_6 === null ? null : new sc_Pair(new sc_Pair(sc_alist_6.car.car, translate_term_nboyer(sc_alist_6.car.cdr)), translate_alist_nboyer(sc_alist_6.cdr))));
};
apply_subst_nboyer = function(alist$$1, term$$4) {
  var lst$$2;
  var temp_temp;
  return!(term$$4 instanceof sc_Pair) ? (temp_temp = sc_assq(term$$4, alist$$1), temp_temp !== false ? temp_temp.cdr : term$$4) : new sc_Pair(term$$4.car, (lst$$2 = term$$4.cdr, lst$$2 === null ? null : new sc_Pair(apply_subst_nboyer(alist$$1, lst$$2.car), apply_subst_lst_nboyer(alist$$1, lst$$2.cdr))));
};
apply_subst_lst_nboyer = function(alist$$2, lst$$3) {
  var sc_lst_7;
  return lst$$3 === null ? null : new sc_Pair(apply_subst_nboyer(alist$$2, lst$$3.car), (sc_lst_7 = lst$$3.cdr, sc_lst_7 === null ? null : new sc_Pair(apply_subst_nboyer(alist$$2, sc_lst_7.car), apply_subst_lst_nboyer(alist$$2, sc_lst_7.cdr))));
};
tautologyp_nboyer = function(sc_x_11, true_lst, false_lst) {
  var tmp1125;
  var x$$75;
  var tmp1126;
  var sc_x_8;
  var sc_tmp1125_9;
  var sc_tmp1126_10;
  for (;true;) {
    if ((sc_tmp1126_10 = is_term_equal_nboyer(sc_x_11, true_term_nboyer), sc_tmp1126_10 !== false ? sc_tmp1126_10 : is_term_member_nboyer(sc_x_11, true_lst)) !== false) {
      return true;
    } else {
      if ((sc_tmp1125_9 = is_term_equal_nboyer(sc_x_11, false_term_nboyer), sc_tmp1125_9 !== false ? sc_tmp1125_9 : is_term_member_nboyer(sc_x_11, false_lst)) !== false) {
        return false;
      } else {
        if (!(sc_x_11 instanceof sc_Pair)) {
          return false;
        } else {
          if (sc_x_11.car === if_constructor_nboyer) {
            if ((sc_x_8 = sc_x_11.cdr.car, tmp1126 = is_term_equal_nboyer(sc_x_8, true_term_nboyer), tmp1126 !== false ? tmp1126 : is_term_member_nboyer(sc_x_8, true_lst)) !== false) {
              sc_x_11 = sc_x_11.cdr.cdr.car;
            } else {
              if ((x$$75 = sc_x_11.cdr.car, tmp1125 = is_term_equal_nboyer(x$$75, false_term_nboyer), tmp1125 !== false ? tmp1125 : is_term_member_nboyer(x$$75, false_lst)) !== false) {
                sc_x_11 = sc_x_11.cdr.cdr.cdr.car;
              } else {
                if (tautologyp_nboyer(sc_x_11.cdr.cdr.car, new sc_Pair(sc_x_11.cdr.car, true_lst), false_lst) !== false) {
                  false_lst = new sc_Pair(sc_x_11.cdr.car, false_lst);
                  sc_x_11 = sc_x_11.cdr.cdr.cdr.car;
                } else {
                  return false;
                }
              }
            }
          } else {
            return false;
          }
        }
      }
    }
  }
};
if_constructor_nboyer = "\u1e9c*";
rewrite_count_nboyer = 0;
rewrite_nboyer = function(term$$5) {
  var term2;
  var sc_term_12;
  var lst$$4;
  var symbol_record$$1;
  var sc_lst_13;
  ++rewrite_count_nboyer;
  if (!(term$$5 instanceof sc_Pair)) {
    return term$$5;
  } else {
    sc_term_12 = new sc_Pair(term$$5.car, (sc_lst_13 = term$$5.cdr, sc_lst_13 === null ? null : new sc_Pair(rewrite_nboyer(sc_lst_13.car), rewrite_args_nboyer(sc_lst_13.cdr))));
    lst$$4 = (symbol_record$$1 = term$$5.car, symbol_record$$1[1]);
    for (;true;) {
      if (lst$$4 === null) {
        return sc_term_12;
      } else {
        if ((term2 = lst$$4.car.cdr.car, unify_subst_nboyer = null, one_way_unify1_nboyer(sc_term_12, term2)) !== false) {
          return rewrite_nboyer(apply_subst_nboyer(unify_subst_nboyer, lst$$4.car.cdr.cdr.car));
        } else {
          lst$$4 = lst$$4.cdr;
        }
      }
    }
  }
};
rewrite_args_nboyer = function(lst$$5) {
  var sc_lst_14;
  return lst$$5 === null ? null : new sc_Pair(rewrite_nboyer(lst$$5.car), (sc_lst_14 = lst$$5.cdr, sc_lst_14 === null ? null : new sc_Pair(rewrite_nboyer(sc_lst_14.car), rewrite_args_nboyer(sc_lst_14.cdr))));
};
unify_subst_nboyer = "\u1e9c*";
one_way_unify1_nboyer = function(term1, term2$$1) {
  var lst1;
  var lst2;
  var temp_temp$$1;
  if (!(term2$$1 instanceof sc_Pair)) {
    temp_temp$$1 = sc_assq(term2$$1, unify_subst_nboyer);
    if (temp_temp$$1 !== false) {
      return is_term_equal_nboyer(term1, temp_temp$$1.cdr);
    } else {
      if (sc_isNumber(term2$$1)) {
        return sc_isEqual(term1, term2$$1);
      } else {
        unify_subst_nboyer = new sc_Pair(new sc_Pair(term2$$1, term1), unify_subst_nboyer);
        return true;
      }
    }
  } else {
    if (!(term1 instanceof sc_Pair)) {
      return false;
    } else {
      if (term1.car === term2$$1.car) {
        lst1 = term1.cdr;
        lst2 = term2$$1.cdr;
        for (;true;) {
          if (lst1 === null) {
            return lst2 === null;
          } else {
            if (lst2 === null) {
              return false;
            } else {
              if (one_way_unify1_nboyer(lst1.car, lst2.car) !== false) {
                lst1 = lst1.cdr;
                lst2 = lst2.cdr;
              } else {
                return false;
              }
            }
          }
        }
      } else {
        return false;
      }
    }
  }
};
false_term_nboyer = "\u1e9c*";
true_term_nboyer = "\u1e9c*";
trans_of_implies1_nboyer = function(n$$11) {
  var sc_n_15;
  return sc_isEqual(n$$11, 1) ? sc_list("\u1e9cimplies", 0, 1) : sc_list("\u1e9cand", sc_list("\u1e9cimplies", n$$11 - 1, n$$11), (sc_n_15 = n$$11 - 1, sc_isEqual(sc_n_15, 1) ? sc_list("\u1e9cimplies", 0, 1) : sc_list("\u1e9cand", sc_list("\u1e9cimplies", sc_n_15 - 1, sc_n_15), trans_of_implies1_nboyer(sc_n_15 - 1))));
};
is_term_equal_nboyer = function(x$$76, y$$42) {
  var lst1$$1;
  var lst2$$1;
  var r2;
  var r1$$1;
  if (x$$76 instanceof sc_Pair) {
    if (y$$42 instanceof sc_Pair) {
      if ((r1$$1 = x$$76.car, r2 = y$$42.car, r1$$1 === r2) !== false) {
        lst1$$1 = x$$76.cdr;
        lst2$$1 = y$$42.cdr;
        for (;true;) {
          if (lst1$$1 === null) {
            return lst2$$1 === null;
          } else {
            if (lst2$$1 === null) {
              return false;
            } else {
              if (is_term_equal_nboyer(lst1$$1.car, lst2$$1.car) !== false) {
                lst1$$1 = lst1$$1.cdr;
                lst2$$1 = lst2$$1.cdr;
              } else {
                return false;
              }
            }
          }
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return sc_isEqual(x$$76, y$$42);
  }
};
is_term_member_nboyer = function(x$$77, lst$$6) {
  for (;true;) {
    if (lst$$6 === null) {
      return false;
    } else {
      if (is_term_equal_nboyer(x$$77, lst$$6.car) !== false) {
        return true;
      } else {
        lst$$6 = lst$$6.cdr;
      }
    }
  }
};
BgL_setupzd2boyerzd2 = function() {
  var symbol_record$$2;
  var value$$28;
  var BgL_sc_symbolzd2record_16zd2;
  var sym$$5;
  var sc_sym_17;
  var term$$6;
  var lst$$7;
  var sc_term_18;
  var sc_term_19;
  BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer = null;
  if_constructor_nboyer = BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer("\u1e9cif");
  false_term_nboyer = (sc_term_19 = new sc_Pair("\u1e9cf", null), !(sc_term_19 instanceof sc_Pair) ? sc_term_19 : new sc_Pair(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(sc_term_19.car), translate_args_nboyer(sc_term_19.cdr)));
  true_term_nboyer = (sc_term_18 = new sc_Pair("\u1e9ct", null), !(sc_term_18 instanceof sc_Pair) ? sc_term_18 : new sc_Pair(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(sc_term_18.car), translate_args_nboyer(sc_term_18.cdr)));
  lst$$7 = sc_const_3_nboyer;
  for (;!(lst$$7 === null);) {
    term$$6 = lst$$7.car;
    if (term$$6 instanceof sc_Pair && (term$$6.car === "\u1e9cequal" && term$$6.cdr.car instanceof sc_Pair)) {
      sc_sym_17 = term$$6.cdr.car.car;
      value$$28 = new sc_Pair(!(term$$6 instanceof sc_Pair) ? term$$6 : new sc_Pair(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(term$$6.car), translate_args_nboyer(term$$6.cdr)), (sym$$5 = term$$6.cdr.car.car, BgL_sc_symbolzd2record_16zd2 = BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(sym$$5), BgL_sc_symbolzd2record_16zd2[1]));
      symbol_record$$2 = BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(sc_sym_17);
      symbol_record$$2[1] = value$$28;
    } else {
      sc_error("ADD-LEMMA did not like term:  ", term$$6);
    }
    lst$$7 = lst$$7.cdr;
  }
  return true;
};
BgL_testzd2boyerzd2 = function(n$$12) {
  var optrOpnd$$1;
  var term$$7;
  var sc_n_20;
  var answer;
  var sc_term_21;
  var sc_term_22;
  rewrite_count_nboyer = 0;
  term$$7 = sc_const_4_nboyer;
  sc_n_20 = n$$12;
  for (;!(sc_n_20 === 0);) {
    term$$7 = sc_list("\u1e9cor", term$$7, new sc_Pair("\u1e9cf", null));
    --sc_n_20;
  }
  sc_term_22 = term$$7;
  if (!(sc_term_22 instanceof sc_Pair)) {
    optrOpnd$$1 = sc_term_22;
  } else {
    optrOpnd$$1 = new sc_Pair(BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(sc_term_22.car), translate_args_nboyer(sc_term_22.cdr));
  }
  sc_term_21 = apply_subst_nboyer(const_nboyer === null ? null : new sc_Pair(new sc_Pair(const_nboyer.car.car, translate_term_nboyer(const_nboyer.car.cdr)), translate_alist_nboyer(const_nboyer.cdr)), optrOpnd$$1);
  answer = tautologyp_nboyer(rewrite_nboyer(sc_term_21), null, null);
  sc_write(rewrite_count_nboyer);
  sc_display(" rewrites");
  sc_newline();
  if (answer !== false) {
    return rewrite_count_nboyer;
  } else {
    return false;
  }
};
var BgL_parsezd2ze3nbzd2treesze3;
var BgL_earleyzd2benchmarkzd2;
var BgL_parsezd2ze3parsedzf3zc2;
var test;
var BgL_parsezd2ze3treesz31;
var BgL_makezd2parserzd2;
var const_earley;
const_earley = new sc_Pair(new sc_Pair("\u1e9cs", new sc_Pair(new sc_Pair("\u1e9ca", null), new sc_Pair(new sc_Pair("\u1e9cs", new sc_Pair("\u1e9cs", null)), null))), null);
BgL_makezd2parserzd2 = function(grammar, lexer) {
  var i$$52;
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
  ind = function(nt, sc_nts_10) {
    var i$$53;
    i$$53 = sc_nts_10.length - 1;
    for (;true;) {
      if (i$$53 >= 0) {
        if (sc_isEqual(sc_nts_10[i$$53], nt)) {
          return i$$53;
        } else {
          --i$$53;
        }
      } else {
        return false;
      }
    }
  };
  sc_nts_8 = (BgL_sc_defzd2loop_9zd2 = function(defs, sc_nts_11) {
    var rule_loop;
    var head$$1;
    var def;
    return defs instanceof sc_Pair ? (def = defs.car, head$$1 = def.car, rule_loop = function(rules, sc_nts_12) {
      var nt$$1;
      var l$$19;
      var sc_nts_13;
      var rule$$2;
      if (rules instanceof sc_Pair) {
        rule$$2 = rules.car;
        l$$19 = rule$$2;
        sc_nts_13 = sc_nts_12;
        for (;l$$19 instanceof sc_Pair;) {
          nt$$1 = l$$19.car;
          l$$19 = l$$19.cdr;
          sc_nts_13 = sc_member(nt$$1, sc_nts_13) !== false ? sc_nts_13 : new sc_Pair(nt$$1, sc_nts_13);
        }
        return rule_loop(rules.cdr, sc_nts_13);
      } else {
        return BgL_sc_defzd2loop_9zd2(defs.cdr, sc_nts_12);
      }
    }, rule_loop(def.cdr, sc_member(head$$1, sc_nts_11) !== false ? sc_nts_11 : new sc_Pair(head$$1, sc_nts_11))) : sc_list2vector(sc_reverse(sc_nts_11));
  }, BgL_sc_defzd2loop_9zd2(grammar, null));
  BgL_sc_nbzd2nts_7zd2 = sc_nts_8.length;
  nb_confs = (BgL_sc_defzd2loop_6zd2 = function(defs$$1, BgL_sc_nbzd2confs_14zd2) {
    var rule_loop$$1;
    var def$$1;
    return defs$$1 instanceof sc_Pair ? (def$$1 = defs$$1.car, rule_loop$$1 = function(rules$$1, BgL_sc_nbzd2confs_15zd2) {
      var l$$20;
      var BgL_sc_nbzd2confs_16zd2;
      var rule$$3;
      if (rules$$1 instanceof sc_Pair) {
        rule$$3 = rules$$1.car;
        l$$20 = rule$$3;
        BgL_sc_nbzd2confs_16zd2 = BgL_sc_nbzd2confs_15zd2;
        for (;l$$20 instanceof sc_Pair;) {
          l$$20 = l$$20.cdr;
          ++BgL_sc_nbzd2confs_16zd2;
        }
        return rule_loop$$1(rules$$1.cdr, BgL_sc_nbzd2confs_16zd2 + 1);
      } else {
        return BgL_sc_defzd2loop_6zd2(defs$$1.cdr, BgL_sc_nbzd2confs_15zd2);
      }
    }, rule_loop$$1(def$$1.cdr, BgL_sc_nbzd2confs_14zd2)) : BgL_sc_nbzd2confs_14zd2;
  }, BgL_sc_defzd2loop_6zd2(grammar, 0)) + BgL_sc_nbzd2nts_7zd2;
  sc_starters_5 = sc_makeVector(BgL_sc_nbzd2nts_7zd2, null);
  sc_enders_4 = sc_makeVector(BgL_sc_nbzd2nts_7zd2, null);
  sc_predictors_3 = sc_makeVector(BgL_sc_nbzd2nts_7zd2, null);
  sc_steps_2 = sc_makeVector(nb_confs, false);
  sc_names_1 = sc_makeVector(nb_confs, false);
  nts = sc_nts_8;
  starters = sc_starters_5;
  enders = sc_enders_4;
  predictors = sc_predictors_3;
  steps = sc_steps_2;
  names = sc_names_1;
  nb_nts = sc_nts_8.length;
  i$$52 = nb_nts - 1;
  for (;i$$52 >= 0;) {
    sc_steps_2[i$$52] = i$$52 - nb_nts;
    sc_names_1[i$$52] = sc_list(sc_nts_8[i$$52], 0);
    sc_enders_4[i$$52] = sc_list(i$$52);
    --i$$52;
  }
  def_loop = function(defs$$2, conf) {
    var rule_loop$$2;
    var head$$2;
    var def$$2;
    return defs$$2 instanceof sc_Pair ? (def$$2 = defs$$2.car, head$$2 = def$$2.car, rule_loop$$2 = function(rules$$2, conf$$1, rule_num) {
      var i$$54;
      var sc_i_17;
      var nt$$2;
      var l$$21;
      var sc_conf_18;
      var sc_i_19;
      var rule$$4;
      if (rules$$2 instanceof sc_Pair) {
        rule$$4 = rules$$2.car;
        names[conf$$1] = sc_list(head$$2, rule_num);
        sc_i_19 = ind(head$$2, nts);
        starters[sc_i_19] = new sc_Pair(conf$$1, starters[sc_i_19]);
        l$$21 = rule$$4;
        sc_conf_18 = conf$$1;
        for (;l$$21 instanceof sc_Pair;) {
          nt$$2 = l$$21.car;
          steps[sc_conf_18] = ind(nt$$2, nts);
          sc_i_17 = ind(nt$$2, nts);
          predictors[sc_i_17] = new sc_Pair(sc_conf_18, predictors[sc_i_17]);
          l$$21 = l$$21.cdr;
          ++sc_conf_18;
        }
        steps[sc_conf_18] = ind(head$$2, nts) - nb_nts;
        i$$54 = ind(head$$2, nts);
        enders[i$$54] = new sc_Pair(sc_conf_18, enders[i$$54]);
        return rule_loop$$2(rules$$2.cdr, sc_conf_18 + 1, rule_num + 1);
      } else {
        return def_loop(defs$$2.cdr, conf$$1);
      }
    }, rule_loop$$2(def$$2.cdr, conf, 1)) : undefined;
  };
  def_loop(grammar, sc_nts_8.length);
  parser_descr = [lexer, sc_nts_8, sc_starters_5, sc_enders_4, sc_predictors_3, sc_steps_2, sc_names_1];
  return function(input) {
    var optrOpnd$$2;
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
    var i$$55;
    var conf$$2;
    var l$$22;
    var tok_nts;
    var sc_i_28;
    var sc_i_29;
    var l1$$12;
    var l2$$5;
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
    var lexer$$1;
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
    sc_ind_43 = function(nt$$3, sc_nts_49) {
      var i$$56;
      i$$56 = sc_nts_49.length - 1;
      for (;true;) {
        if (i$$56 >= 0) {
          if (sc_isEqual(sc_nts_49[i$$56], nt$$3)) {
            return i$$56;
          } else {
            --i$$56;
          }
        } else {
          return false;
        }
      }
    };
    make_states = function(BgL_sc_nbzd2toks_50zd2, BgL_sc_nbzd2confs_51zd2) {
      var v$$5;
      var i$$57;
      var sc_states_52;
      sc_states_52 = sc_makeVector(BgL_sc_nbzd2toks_50zd2 + 1, false);
      i$$57 = BgL_sc_nbzd2toks_50zd2;
      for (;i$$57 >= 0;) {
        v$$5 = sc_makeVector(BgL_sc_nbzd2confs_51zd2 + 1, false);
        v$$5[0] = -1;
        sc_states_52[i$$57] = v$$5;
        --i$$57;
      }
      return sc_states_52;
    };
    BgL_sc_confzd2setzd2getza2_44za2 = function(state, BgL_sc_statezd2num_53zd2, sc_conf_54) {
      var conf_set;
      var BgL_sc_confzd2set_55zd2;
      return BgL_sc_confzd2set_55zd2 = state[sc_conf_54 + 1], BgL_sc_confzd2set_55zd2 !== false ? BgL_sc_confzd2set_55zd2 : (conf_set = sc_makeVector(BgL_sc_statezd2num_53zd2 + 6, false), conf_set[1] = -3, conf_set[2] = -1, conf_set[3] = -1, conf_set[4] = -1, state[sc_conf_54 + 1] = conf_set, conf_set);
    };
    conf_set_merge_new_bang = function(conf_set$$1) {
      return conf_set$$1[conf_set$$1[1] + 5] = conf_set$$1[4], conf_set$$1[1] = conf_set$$1[3], conf_set$$1[3] = -1, conf_set$$1[4] = -1;
    };
    conf_set_adjoin = function(state$$1, conf_set$$2, sc_conf_56, i$$58) {
      var tail$$5;
      return tail$$5 = conf_set$$2[3], conf_set$$2[i$$58 + 5] = -1, conf_set$$2[tail$$5 + 5] = i$$58, conf_set$$2[3] = i$$58, tail$$5 < 0 ? (conf_set$$2[0] = state$$1[0], state$$1[0] = sc_conf_56) : undefined;
    };
    BgL_sc_confzd2setzd2adjoinza2_45za2 = function(sc_states_57, BgL_sc_statezd2num_58zd2, l$$23, i$$59) {
      var conf_set$$3;
      var sc_conf_59;
      var l1$$13;
      var state$$2;
      state$$2 = sc_states_57[BgL_sc_statezd2num_58zd2];
      l1$$13 = l$$23;
      for (;l1$$13 instanceof sc_Pair;) {
        sc_conf_59 = l1$$13.car;
        conf_set$$3 = BgL_sc_confzd2setzd2getza2_44za2(state$$2, BgL_sc_statezd2num_58zd2, sc_conf_59);
        if (conf_set$$3[i$$59 + 5] === false) {
          conf_set_adjoin(state$$2, conf_set$$3, sc_conf_59, i$$59);
          l1$$13 = l1$$13.cdr;
        } else {
          l1$$13 = l1$$13.cdr;
        }
      }
      return undefined;
    };
    BgL_sc_confzd2setzd2adjoinza2za2_46z00 = function(sc_states_60, BgL_sc_statesza2_61za2, BgL_sc_statezd2num_62zd2, sc_conf_63, i$$60) {
      var BgL_sc_confzd2setza2_64z70;
      var BgL_sc_stateza2_65za2;
      var conf_set$$4;
      var state$$3;
      return state$$3 = sc_states_60[BgL_sc_statezd2num_62zd2], (conf_set$$4 = state$$3[sc_conf_63 + 1], conf_set$$4 !== false ? conf_set$$4[i$$60 + 5] : false) !== false ? (BgL_sc_stateza2_65za2 = BgL_sc_statesza2_61za2[BgL_sc_statezd2num_62zd2], BgL_sc_confzd2setza2_64z70 = BgL_sc_confzd2setzd2getza2_44za2(BgL_sc_stateza2_65za2, BgL_sc_statezd2num_62zd2, sc_conf_63), BgL_sc_confzd2setza2_64z70[i$$60 + 5] === false ? conf_set_adjoin(BgL_sc_stateza2_65za2, BgL_sc_confzd2setza2_64z70, sc_conf_63, 
      i$$60) : undefined, true) : false;
    };
    conf_set_union = function(state$$4, conf_set$$5, sc_conf_66, other_set) {
      var i$$61;
      i$$61 = other_set[2];
      for (;i$$61 >= 0;) {
        if (conf_set$$5[i$$61 + 5] === false) {
          conf_set_adjoin(state$$4, conf_set$$5, sc_conf_66, i$$61);
          i$$61 = other_set[i$$61 + 5];
        } else {
          i$$61 = other_set[i$$61 + 5];
        }
      }
      return undefined;
    };
    forw = function(sc_states_67, BgL_sc_statezd2num_68zd2, sc_starters_69, sc_enders_70, sc_predictors_71, sc_steps_72, sc_nts_73) {
      var next_set;
      var next$$1;
      var conf_set$$6;
      var ender;
      var l$$24;
      var starter_set;
      var starter;
      var sc_l_74;
      var sc_loop1_75;
      var head$$3;
      var BgL_sc_confzd2set_76zd2;
      var BgL_sc_statezd2num_77zd2;
      var state$$5;
      var sc_states_78;
      var preds;
      var BgL_sc_confzd2set_79zd2;
      var step;
      var sc_conf_80;
      var BgL_sc_nbzd2nts_81zd2;
      var sc_state_82;
      sc_state_82 = sc_states_67[BgL_sc_statezd2num_68zd2];
      BgL_sc_nbzd2nts_81zd2 = sc_nts_73.length;
      for (;true;) {
        sc_conf_80 = sc_state_82[0];
        if (sc_conf_80 >= 0) {
          step = sc_steps_72[sc_conf_80];
          BgL_sc_confzd2set_79zd2 = sc_state_82[sc_conf_80 + 1];
          head$$3 = BgL_sc_confzd2set_79zd2[4];
          sc_state_82[0] = BgL_sc_confzd2set_79zd2[0];
          conf_set_merge_new_bang(BgL_sc_confzd2set_79zd2);
          if (step >= 0) {
            sc_l_74 = sc_starters_69[step];
            for (;sc_l_74 instanceof sc_Pair;) {
              starter = sc_l_74.car;
              starter_set = BgL_sc_confzd2setzd2getza2_44za2(sc_state_82, BgL_sc_statezd2num_68zd2, starter);
              if (starter_set[BgL_sc_statezd2num_68zd2 + 5] === false) {
                conf_set_adjoin(sc_state_82, starter_set, starter, BgL_sc_statezd2num_68zd2);
                sc_l_74 = sc_l_74.cdr;
              } else {
                sc_l_74 = sc_l_74.cdr;
              }
            }
            l$$24 = sc_enders_70[step];
            for (;l$$24 instanceof sc_Pair;) {
              ender = l$$24.car;
              if ((conf_set$$6 = sc_state_82[ender + 1], conf_set$$6 !== false ? conf_set$$6[BgL_sc_statezd2num_68zd2 + 5] : false) !== false) {
                next$$1 = sc_conf_80 + 1;
                next_set = BgL_sc_confzd2setzd2getza2_44za2(sc_state_82, BgL_sc_statezd2num_68zd2, next$$1);
                conf_set_union(sc_state_82, next_set, next$$1, BgL_sc_confzd2set_79zd2);
                l$$24 = l$$24.cdr;
              } else {
                l$$24 = l$$24.cdr;
              }
            }
          } else {
            preds = sc_predictors_71[step + BgL_sc_nbzd2nts_81zd2];
            sc_states_78 = sc_states_67;
            state$$5 = sc_state_82;
            BgL_sc_statezd2num_77zd2 = BgL_sc_statezd2num_68zd2;
            BgL_sc_confzd2set_76zd2 = BgL_sc_confzd2set_79zd2;
            sc_loop1_75 = function(l$$25) {
              var sc_state_83;
              var BgL_sc_nextzd2set_84zd2;
              var sc_next_85;
              var pred_set;
              var i$$62;
              var pred;
              if (l$$25 instanceof sc_Pair) {
                pred = l$$25.car;
                i$$62 = head$$3;
                for (;i$$62 >= 0;) {
                  pred_set = (sc_state_83 = sc_states_78[i$$62], sc_state_83[pred + 1]);
                  if (pred_set !== false) {
                    sc_next_85 = pred + 1;
                    BgL_sc_nextzd2set_84zd2 = BgL_sc_confzd2setzd2getza2_44za2(state$$5, BgL_sc_statezd2num_77zd2, sc_next_85);
                    conf_set_union(state$$5, BgL_sc_nextzd2set_84zd2, sc_next_85, pred_set);
                  }
                  i$$62 = BgL_sc_confzd2set_76zd2[i$$62 + 5];
                }
                return sc_loop1_75(l$$25.cdr);
              } else {
                return undefined;
              }
            };
            sc_loop1_75(preds);
          }
        } else {
          return undefined;
        }
      }
    };
    is_parsed = function(nt$$4, i$$63, j$$3, sc_nts_86, sc_enders_87, sc_states_88) {
      var conf_set$$7;
      var state$$6;
      var sc_conf_89;
      var l$$26;
      var BgL_sc_ntza2_90za2;
      BgL_sc_ntza2_90za2 = sc_ind_43(nt$$4, sc_nts_86);
      if (BgL_sc_ntza2_90za2 !== false) {
        sc_nts_86.length;
        l$$26 = sc_enders_87[BgL_sc_ntza2_90za2];
        for (;true;) {
          if (l$$26 instanceof sc_Pair) {
            sc_conf_89 = l$$26.car;
            if ((state$$6 = sc_states_88[j$$3], conf_set$$7 = state$$6[sc_conf_89 + 1], conf_set$$7 !== false ? conf_set$$7[i$$63 + 5] : false) !== false) {
              return true;
            } else {
              l$$26 = l$$26.cdr;
            }
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
    };
    deriv_trees = function(sc_conf_91, i$$64, j$$4, sc_enders_92, sc_steps_93, sc_names_94, sc_toks_95, sc_states_96, BgL_sc_nbzd2nts_97zd2) {
      var sc_loop1_98;
      var prev;
      var name$$37;
      return name$$37 = sc_names_94[sc_conf_91], name$$37 !== false ? sc_conf_91 < BgL_sc_nbzd2nts_97zd2 ? sc_list(sc_list(name$$37, sc_toks_95[i$$64].car)) : sc_list(sc_list(name$$37)) : (prev = sc_conf_91 - 1, sc_loop1_98 = function(l1$$14, l2$$6) {
        var loop2;
        var ender_set;
        var state$$7;
        var ender$$1;
        for (;true;) {
          if (l1$$14 instanceof sc_Pair) {
            ender$$1 = l1$$14.car;
            ender_set = (state$$7 = sc_states_96[j$$4], state$$7[ender$$1 + 1]);
            if (ender_set !== false) {
              loop2 = function(k$$6, l2$$7) {
                var loop3;
                var ender_trees;
                var prev_trees;
                var conf_set$$8;
                var sc_state_99;
                for (;true;) {
                  if (k$$6 >= 0) {
                    if (k$$6 >= i$$64 && (sc_state_99 = sc_states_96[k$$6], conf_set$$8 = sc_state_99[prev + 1], conf_set$$8 !== false ? conf_set$$8[i$$64 + 5] : false) !== false) {
                      prev_trees = deriv_trees(prev, i$$64, k$$6, sc_enders_92, sc_steps_93, sc_names_94, sc_toks_95, sc_states_96, BgL_sc_nbzd2nts_97zd2);
                      ender_trees = deriv_trees(ender$$1, k$$6, j$$4, sc_enders_92, sc_steps_93, sc_names_94, sc_toks_95, sc_states_96, BgL_sc_nbzd2nts_97zd2);
                      loop3 = function(l3$$1, l2$$8) {
                        var l4;
                        var sc_l2_100;
                        var ender_tree;
                        if (l3$$1 instanceof sc_Pair) {
                          ender_tree = sc_list(l3$$1.car);
                          l4 = prev_trees;
                          sc_l2_100 = l2$$8;
                          for (;l4 instanceof sc_Pair;) {
                            sc_l2_100 = new sc_Pair(sc_append(l4.car, ender_tree), sc_l2_100);
                            l4 = l4.cdr;
                          }
                          return loop3(l3$$1.cdr, sc_l2_100);
                        } else {
                          return loop2(ender_set[k$$6 + 5], l2$$8);
                        }
                      };
                      return loop3(ender_trees, l2$$7);
                    } else {
                      k$$6 = ender_set[k$$6 + 5];
                    }
                  } else {
                    return sc_loop1_98(l1$$14.cdr, l2$$7);
                  }
                }
              };
              return loop2(ender_set[2], l2$$6);
            } else {
              l1$$14 = l1$$14.cdr;
            }
          } else {
            return l2$$6;
          }
        }
      }, sc_loop1_98(sc_enders_92[sc_steps_93[prev]], null));
    };
    BgL_sc_derivzd2treesza2_47z70 = function(nt$$5, i$$65, j$$5, sc_nts_101, sc_enders_102, sc_steps_103, sc_names_104, sc_toks_105, sc_states_106) {
      var conf_set$$9;
      var state$$8;
      var sc_conf_107;
      var l$$27;
      var trees;
      var BgL_sc_nbzd2nts_108zd2;
      var BgL_sc_ntza2_109za2;
      BgL_sc_ntza2_109za2 = sc_ind_43(nt$$5, sc_nts_101);
      if (BgL_sc_ntza2_109za2 !== false) {
        BgL_sc_nbzd2nts_108zd2 = sc_nts_101.length;
        l$$27 = sc_enders_102[BgL_sc_ntza2_109za2];
        trees = null;
        for (;l$$27 instanceof sc_Pair;) {
          sc_conf_107 = l$$27.car;
          if ((state$$8 = sc_states_106[j$$5], conf_set$$9 = state$$8[sc_conf_107 + 1], conf_set$$9 !== false ? conf_set$$9[i$$65 + 5] : false) !== false) {
            l$$27 = l$$27.cdr;
            trees = sc_append(deriv_trees(sc_conf_107, i$$65, j$$5, sc_enders_102, sc_steps_103, sc_names_104, sc_toks_105, sc_states_106, BgL_sc_nbzd2nts_108zd2), trees);
          } else {
            l$$27 = l$$27.cdr;
          }
        }
        return trees;
      } else {
        return false;
      }
    };
    nb_deriv_trees = function(sc_conf_110, i$$66, j$$6, sc_enders_111, sc_steps_112, sc_toks_113, sc_states_114, BgL_sc_nbzd2nts_115zd2) {
      var sc_loop1_116;
      var tmp1124;
      var prev$$1;
      return prev$$1 = sc_conf_110 - 1, (tmp1124 = sc_conf_110 < BgL_sc_nbzd2nts_115zd2, tmp1124 !== false ? tmp1124 : sc_steps_112[prev$$1] < 0) !== false ? 1 : (sc_loop1_116 = function(l$$28, sc_n_118) {
        var nb_ender_trees;
        var nb_prev_trees;
        var conf_set$$10;
        var state$$9;
        var k$$7;
        var n$$13;
        var ender_set$$1;
        var sc_state_117;
        var ender$$2;
        for (;true;) {
          if (l$$28 instanceof sc_Pair) {
            ender$$2 = l$$28.car;
            ender_set$$1 = (sc_state_117 = sc_states_114[j$$6], sc_state_117[ender$$2 + 1]);
            if (ender_set$$1 !== false) {
              k$$7 = ender_set$$1[2];
              n$$13 = sc_n_118;
              for (;k$$7 >= 0;) {
                if (k$$7 >= i$$66 && (state$$9 = sc_states_114[k$$7], conf_set$$10 = state$$9[prev$$1 + 1], conf_set$$10 !== false ? conf_set$$10[i$$66 + 5] : false) !== false) {
                  nb_prev_trees = nb_deriv_trees(prev$$1, i$$66, k$$7, sc_enders_111, sc_steps_112, sc_toks_113, sc_states_114, BgL_sc_nbzd2nts_115zd2);
                  nb_ender_trees = nb_deriv_trees(ender$$2, k$$7, j$$6, sc_enders_111, sc_steps_112, sc_toks_113, sc_states_114, BgL_sc_nbzd2nts_115zd2);
                  k$$7 = ender_set$$1[k$$7 + 5];
                  n$$13 += nb_prev_trees * nb_ender_trees;
                } else {
                  k$$7 = ender_set$$1[k$$7 + 5];
                }
              }
              return sc_loop1_116(l$$28.cdr, n$$13);
            } else {
              l$$28 = l$$28.cdr;
            }
          } else {
            return sc_n_118;
          }
        }
      }, sc_loop1_116(sc_enders_111[sc_steps_112[prev$$1]], 0));
    };
    BgL_sc_nbzd2derivzd2treesza2_48za2 = function(nt$$6, i$$67, j$$7, sc_nts_119, sc_enders_120, sc_steps_121, sc_toks_122, sc_states_123) {
      var conf_set$$11;
      var state$$10;
      var sc_conf_124;
      var l$$29;
      var nb_trees;
      var BgL_sc_nbzd2nts_125zd2;
      var BgL_sc_ntza2_126za2;
      BgL_sc_ntza2_126za2 = sc_ind_43(nt$$6, sc_nts_119);
      if (BgL_sc_ntza2_126za2 !== false) {
        BgL_sc_nbzd2nts_125zd2 = sc_nts_119.length;
        l$$29 = sc_enders_120[BgL_sc_ntza2_126za2];
        nb_trees = 0;
        for (;l$$29 instanceof sc_Pair;) {
          sc_conf_124 = l$$29.car;
          if ((state$$10 = sc_states_123[j$$7], conf_set$$11 = state$$10[sc_conf_124 + 1], conf_set$$11 !== false ? conf_set$$11[i$$67 + 5] : false) !== false) {
            l$$29 = l$$29.cdr;
            nb_trees = nb_deriv_trees(sc_conf_124, i$$67, j$$7, sc_enders_120, sc_steps_121, sc_toks_122, sc_states_123, BgL_sc_nbzd2nts_125zd2) + nb_trees;
          } else {
            l$$29 = l$$29.cdr;
          }
        }
        return nb_trees;
      } else {
        return false;
      }
    };
    lexer$$1 = parser_descr[0];
    sc_nts_42 = parser_descr[1];
    sc_starters_41 = parser_descr[2];
    sc_enders_40 = parser_descr[3];
    sc_predictors_39 = parser_descr[4];
    sc_steps_38 = parser_descr[5];
    sc_names_37 = parser_descr[6];
    falseHead1128 = new sc_Pair(null, null);
    L1125 = lexer$$1(input);
    tail1129 = falseHead1128;
    for (;!(L1125 === null);) {
      tok = L1125.car;
      l1$$12 = tok.cdr;
      l2$$5 = null;
      for (;l1$$12 instanceof sc_Pair;) {
        sc_i_29 = sc_ind_43(l1$$12.car, sc_nts_42);
        if (sc_i_29 !== false) {
          l1$$12 = l1$$12.cdr;
          l2$$5 = new sc_Pair(sc_i_29, l2$$5);
        } else {
          l1$$12 = l1$$12.cdr;
        }
      }
      sc_optrOpnd_22 = new sc_Pair(tok.car, sc_reverse(l2$$5));
      sc_optrOpnd_21 = new sc_Pair(sc_optrOpnd_22, null);
      tail1129.cdr = sc_optrOpnd_21;
      tail1129 = tail1129.cdr;
      L1125 = L1125.cdr;
    }
    sc_optrOpnd_20 = falseHead1128.cdr;
    sc_toks_36 = sc_list2vector(sc_optrOpnd_20);
    BgL_sc_nbzd2toks_35zd2 = sc_toks_36.length;
    BgL_sc_nbzd2confs_34zd2 = sc_steps_38.length;
    sc_states_33 = make_states(BgL_sc_nbzd2toks_35zd2, BgL_sc_nbzd2confs_34zd2);
    goal_starters = sc_starters_41[0];
    BgL_sc_confzd2setzd2adjoinza2_45za2(sc_states_33, 0, goal_starters, 0);
    forw(sc_states_33, 0, sc_starters_41, sc_enders_40, sc_predictors_39, sc_steps_38, sc_nts_42);
    sc_i_28 = 0;
    for (;sc_i_28 < BgL_sc_nbzd2toks_35zd2;) {
      tok_nts = sc_toks_36[sc_i_28].cdr;
      BgL_sc_confzd2setzd2adjoinza2_45za2(sc_states_33, sc_i_28 + 1, tok_nts, sc_i_28);
      forw(sc_states_33, sc_i_28 + 1, sc_starters_41, sc_enders_40, sc_predictors_39, sc_steps_38, sc_nts_42);
      ++sc_i_28;
    }
    nb_toks = sc_toks_36.length;
    BgL_sc_nbzd2confs_32zd2 = sc_steps_38.length;
    BgL_sc_nbzd2nts_31zd2 = sc_nts_42.length;
    BgL_sc_statesza2_30za2 = make_states(nb_toks, BgL_sc_nbzd2confs_32zd2);
    goal_enders = sc_enders_40[0];
    l$$22 = goal_enders;
    for (;l$$22 instanceof sc_Pair;) {
      conf$$2 = l$$22.car;
      BgL_sc_confzd2setzd2adjoinza2za2_46z00(sc_states_33, BgL_sc_statesza2_30za2, nb_toks, conf$$2, 0);
      l$$22 = l$$22.cdr;
    }
    i$$55 = nb_toks;
    for (;i$$55 >= 0;) {
      states = sc_states_33;
      BgL_sc_statesza2_27za2 = BgL_sc_statesza2_30za2;
      state_num = i$$55;
      sc_enders_26 = sc_enders_40;
      sc_steps_25 = sc_steps_38;
      BgL_sc_nbzd2nts_24zd2 = BgL_sc_nbzd2nts_31zd2;
      toks = sc_toks_36;
      BgL_sc_stateza2_23za2 = BgL_sc_statesza2_30za2[i$$55];
      loop1 = function() {
        var sc_loop1_127;
        var prev$$2;
        var BgL_sc_statesza2_128za2;
        var sc_states_129;
        var j$$8;
        var i$$68;
        var sc_i_130;
        var head$$4;
        var conf_set$$12;
        var sc_conf_131;
        sc_conf_131 = BgL_sc_stateza2_23za2[0];
        if (sc_conf_131 >= 0) {
          conf_set$$12 = BgL_sc_stateza2_23za2[sc_conf_131 + 1];
          head$$4 = conf_set$$12[4];
          BgL_sc_stateza2_23za2[0] = conf_set$$12[0];
          conf_set_merge_new_bang(conf_set$$12);
          sc_i_130 = head$$4;
          for (;sc_i_130 >= 0;) {
            i$$68 = sc_i_130;
            j$$8 = state_num;
            sc_states_129 = states;
            BgL_sc_statesza2_128za2 = BgL_sc_statesza2_27za2;
            prev$$2 = sc_conf_131 - 1;
            if (sc_conf_131 >= BgL_sc_nbzd2nts_24zd2 && sc_steps_25[prev$$2] >= 0) {
              sc_loop1_127 = function(l$$30) {
                var k$$8;
                var ender_set$$2;
                var state$$11;
                var ender$$3;
                for (;true;) {
                  if (l$$30 instanceof sc_Pair) {
                    ender$$3 = l$$30.car;
                    ender_set$$2 = (state$$11 = sc_states_129[j$$8], state$$11[ender$$3 + 1]);
                    if (ender_set$$2 !== false) {
                      k$$8 = ender_set$$2[2];
                      for (;k$$8 >= 0;) {
                        if (k$$8 >= i$$68) {
                          if (BgL_sc_confzd2setzd2adjoinza2za2_46z00(sc_states_129, BgL_sc_statesza2_128za2, k$$8, prev$$2, i$$68) !== false) {
                            BgL_sc_confzd2setzd2adjoinza2za2_46z00(sc_states_129, BgL_sc_statesza2_128za2, j$$8, ender$$3, k$$8);
                          }
                        }
                        k$$8 = ender_set$$2[k$$8 + 5];
                      }
                      return sc_loop1_127(l$$30.cdr);
                    } else {
                      l$$30 = l$$30.cdr;
                    }
                  } else {
                    return undefined;
                  }
                }
              };
              sc_loop1_127(sc_enders_26[sc_steps_25[prev$$2]]);
            }
            sc_i_130 = conf_set$$12[sc_i_130 + 5];
          }
          return loop1();
        } else {
          return undefined;
        }
      };
      loop1();
      --i$$55;
    }
    optrOpnd$$2 = BgL_sc_statesza2_30za2;
    return[sc_nts_42, sc_starters_41, sc_enders_40, sc_predictors_39, sc_steps_38, sc_names_37, sc_toks_36, optrOpnd$$2, is_parsed, BgL_sc_derivzd2treesza2_47z70, BgL_sc_nbzd2derivzd2treesza2_48za2];
  };
};
BgL_parsezd2ze3parsedzf3zc2 = function(parse, nt$$7, i$$69, j$$9) {
  var is_parsed$$1;
  var states$$1;
  var enders$$1;
  var nts$$1;
  return nts$$1 = parse[0], enders$$1 = parse[2], states$$1 = parse[7], is_parsed$$1 = parse[8], is_parsed$$1(nt$$7, i$$69, j$$9, nts$$1, enders$$1, states$$1);
};
BgL_parsezd2ze3treesz31 = function(parse$$1, nt$$8, i$$70, j$$10) {
  var BgL_sc_derivzd2treesza2_132z70;
  var states$$2;
  var toks$$1;
  var names$$1;
  var steps$$1;
  var enders$$2;
  var nts$$2;
  return nts$$2 = parse$$1[0], enders$$2 = parse$$1[2], steps$$1 = parse$$1[4], names$$1 = parse$$1[5], toks$$1 = parse$$1[6], states$$2 = parse$$1[7], BgL_sc_derivzd2treesza2_132z70 = parse$$1[9], BgL_sc_derivzd2treesza2_132z70(nt$$8, i$$70, j$$10, nts$$2, enders$$2, steps$$1, names$$1, toks$$1, states$$2);
};
BgL_parsezd2ze3nbzd2treesze3 = function(parse$$2, nt$$9, i$$71, j$$11) {
  var BgL_sc_nbzd2derivzd2treesza2_133za2;
  var states$$3;
  var toks$$2;
  var steps$$2;
  var enders$$3;
  var nts$$3;
  return nts$$3 = parse$$2[0], enders$$3 = parse$$2[2], steps$$2 = parse$$2[4], toks$$2 = parse$$2[6], states$$3 = parse$$2[7], BgL_sc_nbzd2derivzd2treesza2_133za2 = parse$$2[10], BgL_sc_nbzd2derivzd2treesza2_133za2(nt$$9, i$$71, j$$11, nts$$3, enders$$3, steps$$2, toks$$2, states$$3);
};
test = function(k$$9) {
  var x$$78;
  var p$$46;
  return p$$46 = BgL_makezd2parserzd2(const_earley, function(l$$31) {
    var sc_x_134;
    var tail1134;
    var L1130;
    var falseHead1133;
    falseHead1133 = new sc_Pair(null, null);
    tail1134 = falseHead1133;
    L1130 = l$$31;
    for (;!(L1130 === null);) {
      tail1134.cdr = new sc_Pair((sc_x_134 = L1130.car, sc_list(sc_x_134, sc_x_134)), null);
      tail1134 = tail1134.cdr;
      L1130 = L1130.cdr;
    }
    return falseHead1133.cdr;
  }), x$$78 = p$$46(sc_vector2list(sc_makeVector(k$$9, "\u1e9ca"))), sc_length(BgL_parsezd2ze3treesz31(x$$78, "\u1e9cs", 0, k$$9));
};
BgL_earleyzd2benchmarkzd2 = function() {
  var args$$6 = null;
  var sc_tmp$$1 = arguments.length - 1;
  for (;sc_tmp$$1 >= 0;sc_tmp$$1--) {
    args$$6 = sc_cons(arguments[sc_tmp$$1], args$$6);
  }
  var k$$10;
  return k$$10 = args$$6 === null ? 7 : args$$6.car, BgL_runzd2benchmarkzd2("earley", 1, function() {
    return test(k$$10);
  }, function(result$$4) {
    return sc_display(result$$4), sc_newline(), result$$4 == 132;
  });
};
SC_DEFAULT_OUT = new sc_GenericOutputPort(function(s$$41) {
});
SC_ERROR_OUT = SC_DEFAULT_OUT;
function RunBenchmark(name$$38, count$$3, run$$1, warn) {
  var n$$14 = 0;
  for (;n$$14 < count$$3;++n$$14) {
    result = run$$1();
    if (!warn(result)) {
      throw new Error("Earley or Boyer did incorrect number of rewrites");
    }
  }
}
var BgL_runzd2benchmarkzd2 = RunBenchmark;
var completed = 0;
var benchmarks = BenchmarkSuite.CountBenchmarks();
var success = true;
var latencyBenchmarks = ["Splay", "Mandreel"];
var skipBenchmarks = typeof skipBenchmarks === "undefined" ? [] : skipBenchmarks;
function ShowBox(name$$39) {
  var box = document.getElementById("Box-" + name$$39);
  box.style.visibility = "visible";
  var bar = document.getElementById("progress-bar").style.width = "" + ++completed / benchmarks * 100 + "%";
  latencyBenchmarks.forEach(function(entry$$2) {
    if (name$$39.valueOf() === entry$$2.valueOf()) {
      var box1 = document.getElementById("Box-" + name$$39 + "Latency");
      box1.style.visibility = "visible";
    }
  });
}
function AddResult(name$$40, result$$5) {
  console.log(name$$40 + ": " + result$$5);
  var box$$1 = document.getElementById("Result-" + name$$40);
  box$$1.innerHTML = result$$5;
}
function AddError(name$$41, error$$2) {
  console.log(name$$41 + ": " + error$$2.message);
  if (error$$2 == "TypedArrayUnsupported") {
    AddResult(name$$41, "<b>Unsupported</b>");
  } else {
    if (error$$2 == "PerformanceNowUnsupported") {
      AddResult(name$$41, "<b>Timer error</b>");
    } else {
      AddResult(name$$41, "<b>Error</b>");
    }
  }
  success = false;
}
function AddScore(score$$2) {
  var status = document.getElementById("main-banner");
  if (success) {
    status.innerHTML = "Octane Score: " + score$$2;
  } else {
    status.innerHTML = "Octane Score (incomplete): " + score$$2;
  }
  document.getElementById("progress-bar-container").style.visibility = "hidden";
  document.getElementById("bottom-text").style.visibility = "visible";
  document.getElementById("inside-anchor").removeChild(document.getElementById("bar-appendix"));
  document.getElementById("alertbox").style.visibility = "hidden";
}
function Run() {
  document.getElementById("main-banner").innerHTML = "Running Octane...";
  document.getElementById("bar-appendix").innerHTML = '<br/><div class="progress progress-striped" id="progress-bar-container" style="visibility:hidden"><div class="bar"style="width: 0%;" id="progress-bar"></div></div>';
  var anchor = document.getElementById("run-octane");
  var parent = document.getElementById("main-container");
  parent.appendChild(document.getElementById("inside-anchor"));
  parent.removeChild(anchor);
  document.getElementById("startup-text").innerHTML = "";
  document.getElementById("progress-bar-container").style.visibility = "visible";
  BenchmarkSuite.RunSuites({NotifyStart:ShowBox, NotifyError:AddError, NotifyResult:AddResult, NotifyScore:AddScore}, skipBenchmarks);
}
function CheckCompatibility() {
  var hasTypedArrays = typeof Uint8Array != "undefined" && typeof Float64Array != "undefined" && typeof(new Uint8Array(0)).subarray != "undefined";
  if (!hasTypedArrays) {
    console.log("Typed Arrays not supported");
    document.getElementById("alertbox").style.display = "block";
  }
  if (window.document.URL.indexOf("skip_zlib=1") >= 0) {
    skipBenchmarks.push("zlib");
  }
  if (window.document.URL.indexOf("auto=1") >= 0) {
    Run();
  }
}
function Load() {
  setTimeout(CheckCompatibility, 200);
}

}
