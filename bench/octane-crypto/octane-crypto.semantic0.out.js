// octane-crypto.js
function v21(fn, bits) {
  BigInteger.prototype.am = fn;
  dbits = bits;
  BI_DB = dbits;
  BI_DM = (1 << dbits) - 1;
  BI_DV = 1 << dbits;
  BI_FP = 52;
  BI_FV = JAM.call(Math.pow, Math, [2, BI_FP], JAM.policy.p1);
  BI_F1 = BI_FP - dbits;
  BI_F2 = 2 * dbits - BI_FP;
  return;
}
function v20(runner$$2) {
  function RunNextSetup() {
    if (index$$40 < length$$12) {
      try {
        suite$$1.benchmarks[index$$40].Setup();
      } catch (e$$4) {
        JAM.call(suite$$1.NotifyError, suite$$1, [e$$4]);
        return null;
      }
      return RunNextBenchmark;
    }
    suite$$1.NotifyResult();
    return null;
  }
  function RunNextBenchmark() {
    try {
      data$$20 = JAM.call(suite$$1.RunSingleBenchmark, suite$$1, [suite$$1.benchmarks[index$$40], data$$20], JAM.policy.p1);
    } catch (e$$5) {
      JAM.call(suite$$1.NotifyError, suite$$1, [e$$5]);
      return null;
    }
    var v28;
    if (data$$20 == null) {
      v28 = RunNextTearDown;
    } else {
      v28 = RunNextBenchmark();
    }
    return v28;
  }
  function RunNextTearDown() {
    try {
      var v805 = suite$$1.benchmarks;
      var v806 = index$$40;
      index$$40 = index$$40 + 1;
      v805[v806].TearDown();
    } catch (e$$6) {
      JAM.call(suite$$1.NotifyError, suite$$1, [e$$6]);
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
}
function v19(benchmark$$1, data$$18) {
  function Measure(data$$19) {
    var elapsed = 0;
    var start$$4 = new Date;
    var i$$5 = 0;
    var v807;
    if (doDeterministic$$1) {
      v807 = i$$5 < benchmark$$1.deterministicIterations;
    } else {
      v807 = elapsed < 1E3;
    }
    var v32 = v807;
    for (;v32;) {
      benchmark$$1.run();
      elapsed = new Date - start$$4;
      i$$5++;
      var v808;
      if (doDeterministic$$1) {
        v808 = i$$5 < benchmark$$1.deterministicIterations;
      } else {
        v808 = elapsed < 1E3;
      }
      v32 = v808;
    }
    if (data$$19 != null) {
      data$$19.runs = data$$19.runs + i$$5;
      data$$19.elapsed = data$$19.elapsed + elapsed;
    }
    return;
  }
  var config = BenchmarkSuite.config;
  var v34;
  if (config.doWarmup !== undefined) {
    v34 = config.doWarmup;
  } else {
    v34 = benchmark$$1.doWarmup;
  }
  var doWarmup$$1 = v34;
  var v35;
  if (config.doDeterministic !== undefined) {
    v35 = config.doDeterministic;
  } else {
    v35 = benchmark$$1.doDeterministic;
  }
  var doDeterministic$$1 = v35;
  var v813 = !doWarmup$$1;
  if (v813) {
    v813 = data$$18 == null;
  }
  if (v813) {
    data$$18 = {runs:0, elapsed:0};
  }
  if (data$$18 == null) {
    Measure(null);
    return {runs:0, elapsed:0};
  } else {
    Measure(data$$18);
    if (data$$18.runs < benchmark$$1.minIterations) {
      return data$$18;
    }
    var usec = data$$18.elapsed * 1E3 / data$$18.runs;
    var v40;
    if (benchmark$$1.rmsResult != null) {
      v40 = benchmark$$1.rmsResult();
    } else {
      v40 = 0;
    }
    var rms = v40;
    JAM.call(this.NotifyStep, this, [new BenchmarkResult(benchmark$$1, usec, rms)]);
    return null;
  }
  return;
}
function v18(error$$1) {
  if (this.runner.NotifyError) {
    var v43 = this.runner;
    JAM.call(v43.NotifyError, v43, [this.name, error$$1], JAM.policy.p1);
  }
  if (this.runner.NotifyStep) {
    var v46 = this.runner;
    JAM.call(v46.NotifyStep, v46, [this.name]);
  }
  return;
}
function v17(runner$$1) {
  BenchmarkSuite.scores.push(1);
  if (runner$$1.NotifyResult) {
    JAM.call(runner$$1.NotifyResult, runner$$1, [this.name, "Skipped"], JAM.policy.p1);
  }
  return;
}
function v16() {
  var mean = JAM.call(BenchmarkSuite.GeometricMeanTime, BenchmarkSuite, [this.results]);
  var score$$1 = this.reference[0] / mean;
  BenchmarkSuite.scores.push(score$$1);
  if (this.runner.NotifyResult) {
    var formatted$$1 = JAM.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [100 * score$$1]);
    var v56 = this.runner;
    JAM.call(v56.NotifyResult, v56, [this.name, formatted$$1], JAM.policy.p1);
  }
  if (this.reference.length == 2) {
    var meanLatency = JAM.call(BenchmarkSuite.GeometricMeanLatency, BenchmarkSuite, [this.results]);
    if (meanLatency != 0) {
      var scoreLatency = this.reference[1] / meanLatency;
      BenchmarkSuite.scores.push(scoreLatency);
      if (this.runner.NotifyResult) {
        var formattedLatency = JAM.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [100 * scoreLatency]);
        var v63 = this.runner;
        JAM.call(v63.NotifyResult, v63, [this.name + "Latency", formattedLatency], JAM.policy.p1);
      }
    }
  }
  return;
}
function v15(result$$1) {
  this.results.push(result$$1);
  if (this.runner.NotifyStep) {
    var v69 = this.runner;
    JAM.call(v69.NotifyStep, v69, [result$$1.benchmark.name]);
  }
  return;
}
function v14(value$$27) {
  if (value$$27 > 100) {
    return value$$27.toFixed(0);
  } else {
    return value$$27.toPrecision(3);
  }
  return;
}
function v13(measurements$$1) {
  var log$$2 = 0;
  var hasLatencyResult = false;
  var i$$4 = 0;
  var v74 = i$$4 < measurements$$1.length;
  for (;v74;) {
    if (measurements$$1[i$$4].latency != 0) {
      log$$2 = log$$2 + Math.log(measurements$$1[i$$4].latency);
      hasLatencyResult = true;
    }
    i$$4++;
    v74 = i$$4 < measurements$$1.length;
  }
  if (hasLatencyResult) {
    return JAM.call(Math.pow, Math, [Math.E, log$$2 / measurements$$1.length], JAM.policy.p1);
  } else {
    return 0;
  }
  return;
}
function v12(measurements) {
  var log$$1 = 0;
  var i$$3 = 0;
  var v77 = i$$3 < measurements.length;
  for (;v77;) {
    log$$1 = log$$1 + Math.log(measurements[i$$3].time);
    i$$3++;
    v77 = i$$3 < measurements.length;
  }
  return JAM.call(Math.pow, Math, [Math.E, log$$1 / measurements.length], JAM.policy.p1);
}
function v11() {
  var numbers = BenchmarkSuite.scores;
  var log = 0;
  var i$$2 = 0;
  var v80 = i$$2 < numbers.length;
  for (;v80;) {
    log = log + Math.log(numbers[i$$2]);
    i$$2++;
    v80 = i$$2 < numbers.length;
  }
  return JAM.call(Math.pow, Math, [Math.E, log / numbers.length], JAM.policy.p1);
}
function v10() {
  var result = 0;
  var suites$$1 = BenchmarkSuite.suites;
  var i$$1 = 0;
  var v83 = i$$1 < suites$$1.length;
  for (;v83;) {
    result = result + suites$$1[i$$1].benchmarks.length;
    i$$1++;
    v83 = i$$1 < suites$$1.length;
  }
  return result;
}
function v9() {
  function RunStep() {
    var v844 = continuation;
    if (!v844) {
      v844 = index$$39 < length$$11;
    }
    var v89 = v844;
    for (;v89;) {
      if (continuation) {
        continuation = continuation();
      } else {
        var v84 = index$$39;
        index$$39 = index$$39 + 1;
        var suite = suites[v84];
        if (runner.NotifyStart) {
          JAM.call(runner.NotifyStart, runner, [suite.name]);
        }
        if (skipBenchmarks$$1.indexOf(suite.name) > -1) {
          JAM.call(suite.NotifySkipped, suite, [runner]);
        } else {
          continuation = JAM.call(suite.RunStep, suite, [runner]);
        }
      }
      var v1300 = continuation;
      if (v1300) {
        v1300 = typeof window != "undefined";
      }
      var v846 = v1300;
      if (v846) {
        v846 = window.setTimeout;
      }
      if (v846) {
        JAM.call(window.setTimeout, window, [RunStep, 25], JAM.policy.p1);
        return;
      }
      var v847 = continuation;
      if (!v847) {
        v847 = index$$39 < length$$11;
      }
      v89 = v847;
    }
    if (runner.NotifyScore) {
      var score = BenchmarkSuite.GeometricMean();
      var formatted = JAM.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [100 * score]);
      JAM.call(runner.NotifyScore, runner, [formatted]);
    }
    return;
  }
  var runner = {NotifyStart:ShowBox, NotifyError:AddError, NotifyResult:AddResult, NotifyScore:AddScore};
  var skipBenchmarks$$1 = skipBenchmarks;
  var v92;
  if (typeof skipBenchmarks$$1 === "undefined") {
    v92 = [];
  } else {
    v92 = skipBenchmarks$$1;
  }
  skipBenchmarks$$1 = v92;
  var continuation = null;
  var suites = BenchmarkSuite.suites;
  var length$$11 = suites.length;
  BenchmarkSuite.scores = [];
  var index$$39 = 0;
  RunStep();
  return;
}
function v8() {
  function v7() {
    function v6() {
      seed = seed + 2127912214 + (seed << 12) & 4294967295;
      seed = (seed ^ 3345072700 ^ seed >>> 19) & 4294967295;
      seed = seed + 374761393 + (seed << 5) & 4294967295;
      seed = (seed + 3550635116 ^ seed << 9) & 4294967295;
      seed = seed + 4251993797 + (seed << 3) & 4294967295;
      seed = (seed ^ 3042594569 ^ seed >>> 16) & 4294967295;
      return (seed & 268435455) / 268435456;
    }
    var seed = 49734321;
    return v6;
  }
  var v100 = Math;
  var v1661 = v7();
  v100.random = v1661;
  return;
}
function v5(s$$2) {
  throw "Alert called with argument: " + s$$2;
}
function v4() {
  return this.time;
}
function v3() {
  var v1616 = performance.now;
  if (!v1616) {
    v1616 = performance.mozNow;
  }
  var v1527 = v1616;
  if (!v1527) {
    v1527 = performance.msNow;
  }
  var v1303 = v1527;
  if (!v1303) {
    v1303 = performance.oNow;
  }
  var v861 = v1303;
  if (!v861) {
    v861 = performance.webkitNow;
  }
  var v101 = v861;
  if (!v101) {
    v101 = Date.now;
  }
  return v101;
}
function Benchmark(name$$30, deterministicIterations, run) {
  function v1() {
    return;
  }
  function v0() {
    return;
  }
  var setup;
  var tearDown;
  var rmsResult;
  var minIterations;
  var doWarmup = true;
  var doDeterministic = false;
  this.name = name$$30;
  this.doWarmup = doWarmup;
  this.doDeterministic = doDeterministic;
  this.deterministicIterations = deterministicIterations;
  this.run = run;
  var v102;
  if (setup) {
    v102 = setup;
  } else {
    v102 = v0;
  }
  this.Setup = v102;
  var v103;
  if (tearDown) {
    v103 = tearDown;
  } else {
    v103 = v1;
  }
  this.TearDown = v103;
  var v104;
  if (rmsResult) {
    v104 = rmsResult;
  } else {
    v104 = null;
  }
  this.rmsResult = v104;
  var v105;
  if (minIterations) {
    v105 = minIterations;
  } else {
    v105 = 32;
  }
  this.minIterations = v105;
  return;
}
function BenchmarkResult(benchmark, time, latency) {
  this.benchmark = benchmark;
  this.time = time;
  this.latency = latency;
  return;
}
function BenchmarkSuite(name$$31, reference, benchmarks$$1) {
  this.name = name$$31;
  this.reference = reference;
  this.benchmarks = benchmarks$$1;
  BenchmarkSuite.suites.push(this);
  return;
}
function BigInteger(a, b, c) {
  var v1662 = new Array;
  this.array = v1662;
  if (a != null) {
    if ("number" == typeof a) {
      JAM.call(this.fromNumber, this, [a, b, c], JAM.policy.p1);
    } else {
      var v864 = b == null;
      if (v864) {
        v864 = "string" != typeof a;
      }
      if (v864) {
        JAM.call(this.fromString, this, [a, 256], JAM.policy.p1);
      } else {
        JAM.call(this.fromString, this, [a, b], JAM.policy.p1);
      }
    }
  }
  return;
}
function nbi() {
  return new BigInteger(null);
}
function am1(i$$6, x$$47, w$$5, j, c$$1, n$$1) {
  var this_array$$1 = this.array;
  var w_array = w$$5.array;
  var v113 = (n$$1 = n$$1 - 1) >= 0;
  for (;v113;) {
    var v1529 = i$$6;
    i$$6 = i$$6 + 1;
    var v = x$$47 * this_array$$1[v1529] + w_array[j] + c$$1;
    c$$1 = Math.floor(v / 67108864);
    var v112 = j;
    j = j + 1;
    w_array[v112] = v & 67108863;
    v113 = (n$$1 = n$$1 - 1) >= 0;
  }
  return c$$1;
}
function am2(i$$7, x$$48, w$$6, j$$1, c$$2, n$$2) {
  var this_array$$2 = this.array;
  var w_array$$1 = w$$6.array;
  var xl = x$$48 & 32767;
  var xh = x$$48 >> 15;
  var v123 = (n$$2 = n$$2 - 1) >= 0;
  for (;v123;) {
    var l = this_array$$2[i$$7] & 32767;
    var v870 = i$$7;
    i$$7 = i$$7 + 1;
    var h$$4 = this_array$$2[v870] >> 15;
    var m = xh * l + h$$4 * xl;
    l = xl * l + ((m & 32767) << 15) + w_array$$1[j$$1] + (c$$2 & 1073741823);
    c$$2 = (l >>> 30) + (m >>> 15) + xh * h$$4 + (c$$2 >>> 30);
    var v122 = j$$1;
    j$$1 = j$$1 + 1;
    w_array$$1[v122] = l & 1073741823;
    v123 = (n$$2 = n$$2 - 1) >= 0;
  }
  return c$$2;
}
function am3(i$$8, x$$49, w$$7, j$$2, c$$3, n$$3) {
  var this_array$$3 = this.array;
  var w_array$$2 = w$$7.array;
  var xl$$1 = x$$49 & 16383;
  var xh$$1 = x$$49 >> 14;
  var v132 = (n$$3 = n$$3 - 1) >= 0;
  for (;v132;) {
    var l$$1 = this_array$$3[i$$8] & 16383;
    var v877 = i$$8;
    i$$8 = i$$8 + 1;
    var h$$5 = this_array$$3[v877] >> 14;
    var m$$1 = xh$$1 * l$$1 + h$$5 * xl$$1;
    l$$1 = xl$$1 * l$$1 + ((m$$1 & 16383) << 14) + w_array$$2[j$$2] + c$$3;
    c$$3 = (l$$1 >> 28) + (m$$1 >> 14) + xh$$1 * h$$5;
    var v131 = j$$2;
    j$$2 = j$$2 + 1;
    w_array$$2[v131] = l$$1 & 268435455;
    v132 = (n$$3 = n$$3 - 1) >= 0;
  }
  return c$$3;
}
function am4(i$$9, x$$50, w$$8, j$$3, c$$4, n$$4) {
  var this_array$$4 = this.array;
  var w_array$$3 = w$$8.array;
  var xl$$2 = x$$50 & 8191;
  var xh$$2 = x$$50 >> 13;
  var v141 = (n$$4 = n$$4 - 1) >= 0;
  for (;v141;) {
    var l$$2 = this_array$$4[i$$9] & 8191;
    var v884 = i$$9;
    i$$9 = i$$9 + 1;
    var h$$6 = this_array$$4[v884] >> 13;
    var m$$2 = xh$$2 * l$$2 + h$$6 * xl$$2;
    l$$2 = xl$$2 * l$$2 + ((m$$2 & 8191) << 13) + w_array$$3[j$$3] + c$$4;
    c$$4 = (l$$2 >> 26) + (m$$2 >> 13) + xh$$2 * h$$6;
    var v140 = j$$3;
    j$$3 = j$$3 + 1;
    w_array$$3[v140] = l$$2 & 67108863;
    v141 = (n$$4 = n$$4 - 1) >= 0;
  }
  return c$$4;
}
function int2char(n$$5) {
  return BI_RM.charAt(n$$5);
}
function intAt(s$$3, i$$10) {
  var c$$5 = BI_RC[s$$3.charCodeAt(i$$10)];
  var v144;
  if (c$$5 == null) {
    v144 = -1;
  } else {
    v144 = c$$5;
  }
  return v144;
}
function bnpCopyTo(r) {
  var this_array$$5 = this.array;
  var r_array = r.array;
  var i$$11 = this.t - 1;
  var v146 = i$$11 >= 0;
  for (;v146;) {
    r_array[i$$11] = this_array$$5[i$$11];
    --i$$11;
    v146 = i$$11 >= 0;
  }
  r.t = this.t;
  r.s = this.s;
  return;
}
function bnpFromInt(x$$51) {
  var this_array$$6 = this.array;
  this.t = 1;
  var v147;
  if (x$$51 < 0) {
    v147 = -1;
  } else {
    v147 = 0;
  }
  this.s = v147;
  if (x$$51 > 0) {
    this_array$$6[0] = x$$51;
  } else {
    if (x$$51 < -1) {
      this_array$$6[0] = x$$51 + DV;
    } else {
      this.t = 0;
    }
  }
  return;
}
function nbv(i$$12) {
  var r$$1 = nbi();
  JAM.call(r$$1.fromInt, r$$1, [i$$12]);
  return r$$1;
}
function bnpFromString(s$$4, b$$1) {
  var this_array$$7 = this.array;
  var k;
  if (b$$1 == 16) {
    k = 4;
  } else {
    if (b$$1 == 8) {
      k = 3;
    } else {
      if (b$$1 == 256) {
        k = 8;
      } else {
        if (b$$1 == 2) {
          k = 1;
        } else {
          if (b$$1 == 32) {
            k = 5;
          } else {
            if (b$$1 == 4) {
              k = 2;
            } else {
              JAM.call(this.fromRadix, this, [s$$4, b$$1], JAM.policy.p1);
              return;
            }
          }
        }
      }
    }
  }
  this.t = 0;
  this.s = 0;
  var i$$13 = s$$4.length;
  var mi = false;
  var sh$$2 = 0;
  var v166 = (i$$13 = i$$13 - 1) >= 0;
  for (;v166;) {
    var v156;
    if (k == 8) {
      v156 = s$$4[i$$13] & 255;
    } else {
      v156 = intAt(s$$4, i$$13);
    }
    var x$$52 = v156;
    if (x$$52 < 0) {
      if (s$$4.charAt(i$$13) == "-") {
        mi = true;
      }
      v166 = (i$$13 = i$$13 - 1) >= 0;
      continue;
    }
    mi = false;
    if (sh$$2 == 0) {
      var v159 = this.t;
      this.t = this.t + 1;
      this_array$$7[v159] = x$$52;
    } else {
      if (sh$$2 + k > BI_DB) {
        var v160 = this.t - 1;
        this_array$$7[v160] = this_array$$7[v160] | (x$$52 & (1 << BI_DB - sh$$2) - 1) << sh$$2;
        var v161 = this.t;
        this.t = this.t + 1;
        this_array$$7[v161] = x$$52 >> BI_DB - sh$$2;
      } else {
        var v162 = this.t - 1;
        this_array$$7[v162] = this_array$$7[v162] | x$$52 << sh$$2;
      }
    }
    sh$$2 = sh$$2 + k;
    if (sh$$2 >= BI_DB) {
      sh$$2 = sh$$2 - BI_DB;
    }
    v166 = (i$$13 = i$$13 - 1) >= 0;
  }
  var v902 = k == 8;
  if (v902) {
    v902 = (s$$4[0] & 128) != 0;
  }
  if (v902) {
    this.s = -1;
    if (sh$$2 > 0) {
      var v167 = this.t - 1;
      this_array$$7[v167] = this_array$$7[v167] | (1 << BI_DB - sh$$2) - 1 << sh$$2;
    }
  }
  this.clamp();
  if (mi) {
    var v170 = BigInteger.ZERO;
    JAM.call(v170.subTo, v170, [this, this], JAM.policy.p1);
  }
  return;
}
function bnpClamp() {
  var this_array$$8 = this.array;
  var c$$6 = this.s & BI_DM;
  var v904 = this.t > 0;
  if (v904) {
    v904 = this_array$$8[this.t - 1] == c$$6;
  }
  var v172 = v904;
  for (;v172;) {
    --this.t;
    var v905 = this.t > 0;
    if (v905) {
      v905 = this_array$$8[this.t - 1] == c$$6;
    }
    v172 = v905;
  }
  return;
}
function bnToString(b$$2) {
  var this_array$$9 = this.array;
  if (this.s < 0) {
    var v907 = this.negate();
    return "-" + JAM.call(v907.toString, v907, [b$$2]);
  }
  var k$$1;
  if (b$$2 == 16) {
    k$$1 = 4;
  } else {
    if (b$$2 == 8) {
      k$$1 = 3;
    } else {
      if (b$$2 == 2) {
        k$$1 = 1;
      } else {
        if (b$$2 == 32) {
          k$$1 = 5;
        } else {
          if (b$$2 == 4) {
            k$$1 = 2;
          } else {
            return JAM.call(this.toRadix, this, [b$$2]);
          }
        }
      }
    }
  }
  var km = (1 << k$$1) - 1;
  var d;
  var m$$3 = false;
  var r$$2 = "";
  var i$$14 = this.t;
  var p = BI_DB - i$$14 * BI_DB % k$$1;
  var v909 = i$$14;
  i$$14 = i$$14 - 1;
  if (v909 > 0) {
    var v910 = p < BI_DB;
    if (v910) {
      v910 = (d = this_array$$9[i$$14] >> p) > 0;
    }
    if (v910) {
      m$$3 = true;
      r$$2 = int2char(d);
    }
    var v189 = i$$14 >= 0;
    for (;v189;) {
      if (p < k$$1) {
        d = (this_array$$9[i$$14] & (1 << p) - 1) << k$$1 - p;
        d = d | this_array$$9[i$$14 = i$$14 - 1] >> (p = p + (BI_DB - k$$1));
      } else {
        d = this_array$$9[i$$14] >> (p = p - k$$1) & km;
        if (p <= 0) {
          p = p + BI_DB;
          --i$$14;
        }
      }
      if (d > 0) {
        m$$3 = true;
      }
      if (m$$3) {
        r$$2 = r$$2 + int2char(d);
      }
      v189 = i$$14 >= 0;
    }
  }
  var v191;
  if (m$$3) {
    v191 = r$$2;
  } else {
    v191 = "0";
  }
  return v191;
}
function bnNegate() {
  var r$$3 = nbi();
  var v192 = BigInteger.ZERO;
  JAM.call(v192.subTo, v192, [this, r$$3], JAM.policy.p1);
  return r$$3;
}
function bnAbs() {
  var v193;
  if (this.s < 0) {
    v193 = this.negate();
  } else {
    v193 = this;
  }
  return v193;
}
function bnCompareTo(a$$1) {
  var this_array$$10 = this.array;
  var a_array = a$$1.array;
  var r$$4 = this.s - a$$1.s;
  if (r$$4 != 0) {
    return r$$4;
  }
  var i$$15 = this.t;
  r$$4 = i$$15 - a$$1.t;
  if (r$$4 != 0) {
    return r$$4;
  }
  var v200 = (i$$15 = i$$15 - 1) >= 0;
  for (;v200;) {
    if ((r$$4 = this_array$$10[i$$15] - a_array[i$$15]) != 0) {
      return r$$4;
    }
    v200 = (i$$15 = i$$15 - 1) >= 0;
  }
  return 0;
}
function nbits(x$$53) {
  var r$$5 = 1;
  var t$$1;
  if ((t$$1 = x$$53 >>> 16) != 0) {
    x$$53 = t$$1;
    r$$5 = r$$5 + 16;
  }
  if ((t$$1 = x$$53 >> 8) != 0) {
    x$$53 = t$$1;
    r$$5 = r$$5 + 8;
  }
  if ((t$$1 = x$$53 >> 4) != 0) {
    x$$53 = t$$1;
    r$$5 = r$$5 + 4;
  }
  if ((t$$1 = x$$53 >> 2) != 0) {
    x$$53 = t$$1;
    r$$5 = r$$5 + 2;
  }
  if ((t$$1 = x$$53 >> 1) != 0) {
    x$$53 = t$$1;
    r$$5 = r$$5 + 1;
  }
  return r$$5;
}
function bnBitLength() {
  var this_array$$11 = this.array;
  if (this.t <= 0) {
    return 0;
  }
  return BI_DB * (this.t - 1) + nbits(this_array$$11[this.t - 1] ^ this.s & BI_DM);
}
function bnpDLShiftTo(n$$6, r$$6) {
  var this_array$$12 = this.array;
  var r_array$$1 = r$$6.array;
  var i$$16;
  i$$16 = this.t - 1;
  var v211 = i$$16 >= 0;
  for (;v211;) {
    JAM.set(r_array$$1, i$$16 + n$$6, this_array$$12[i$$16]);
    --i$$16;
    v211 = i$$16 >= 0;
  }
  i$$16 = n$$6 - 1;
  var v212 = i$$16 >= 0;
  for (;v212;) {
    r_array$$1[i$$16] = 0;
    --i$$16;
    v212 = i$$16 >= 0;
  }
  r$$6.t = this.t + n$$6;
  r$$6.s = this.s;
  return;
}
function bnpDRShiftTo(n$$7, r$$7) {
  var this_array$$13 = this.array;
  var r_array$$2 = r$$7.array;
  var i$$17 = n$$7;
  var v215 = i$$17 < this.t;
  for (;v215;) {
    r_array$$2[i$$17 - n$$7] = this_array$$13[i$$17];
    ++i$$17;
    v215 = i$$17 < this.t;
  }
  var v1663 = JAM.call(Math.max, Math, [this.t - n$$7, 0], JAM.policy.p1);
  r$$7.t = v1663;
  r$$7.s = this.s;
  return;
}
function bnpLShiftTo(n$$8, r$$8) {
  var this_array$$14 = this.array;
  var r_array$$3 = r$$8.array;
  var bs = n$$8 % BI_DB;
  var cbs = BI_DB - bs;
  var bm = (1 << cbs) - 1;
  var ds = Math.floor(n$$8 / BI_DB);
  var c$$7 = this.s << bs & BI_DM;
  var i$$18;
  i$$18 = this.t - 1;
  var v223 = i$$18 >= 0;
  for (;v223;) {
    r_array$$3[i$$18 + ds + 1] = this_array$$14[i$$18] >> cbs | c$$7;
    c$$7 = (this_array$$14[i$$18] & bm) << bs;
    --i$$18;
    v223 = i$$18 >= 0;
  }
  i$$18 = ds - 1;
  var v224 = i$$18 >= 0;
  for (;v224;) {
    r_array$$3[i$$18] = 0;
    --i$$18;
    v224 = i$$18 >= 0;
  }
  r_array$$3[ds] = c$$7;
  r$$8.t = this.t + ds + 1;
  r$$8.s = this.s;
  r$$8.clamp();
  return;
}
function bnpRShiftTo(n$$9, r$$9) {
  var this_array$$15 = this.array;
  var r_array$$4 = r$$9.array;
  r$$9.s = this.s;
  var ds$$1 = Math.floor(n$$9 / BI_DB);
  if (ds$$1 >= this.t) {
    r$$9.t = 0;
    return;
  }
  var bs$$1 = n$$9 % BI_DB;
  var cbs$$1 = BI_DB - bs$$1;
  var bm$$1 = (1 << bs$$1) - 1;
  r_array$$4[0] = this_array$$15[ds$$1] >> bs$$1;
  var i$$19 = ds$$1 + 1;
  var v232 = i$$19 < this.t;
  for (;v232;) {
    var v230 = i$$19 - ds$$1 - 1;
    r_array$$4[v230] = r_array$$4[v230] | (this_array$$15[i$$19] & bm$$1) << cbs$$1;
    r_array$$4[i$$19 - ds$$1] = this_array$$15[i$$19] >> bs$$1;
    ++i$$19;
    v232 = i$$19 < this.t;
  }
  if (bs$$1 > 0) {
    var v233 = this.t - ds$$1 - 1;
    r_array$$4[v233] = r_array$$4[v233] | (this.s & bm$$1) << cbs$$1;
  }
  r$$9.t = this.t - ds$$1;
  r$$9.clamp();
  return;
}
function bnpSubTo(a$$2, r$$10) {
  var this_array$$16 = this.array;
  var r_array$$5 = r$$10.array;
  var a_array$$1 = a$$2.array;
  var i$$20 = 0;
  var c$$8 = 0;
  var m$$4 = JAM.call(Math.min, Math, [a$$2.t, this.t], JAM.policy.p1);
  var v239 = i$$20 < m$$4;
  for (;v239;) {
    c$$8 = c$$8 + (this_array$$16[i$$20] - a_array$$1[i$$20]);
    var v238 = i$$20;
    i$$20 = i$$20 + 1;
    r_array$$5[v238] = c$$8 & BI_DM;
    c$$8 = c$$8 >> BI_DB;
    v239 = i$$20 < m$$4;
  }
  if (a$$2.t < this.t) {
    c$$8 = c$$8 - a$$2.s;
    var v241 = i$$20 < this.t;
    for (;v241;) {
      c$$8 = c$$8 + this_array$$16[i$$20];
      var v240 = i$$20;
      i$$20 = i$$20 + 1;
      r_array$$5[v240] = c$$8 & BI_DM;
      c$$8 = c$$8 >> BI_DB;
      v241 = i$$20 < this.t;
    }
    c$$8 = c$$8 + this.s;
  } else {
    c$$8 = c$$8 + this.s;
    var v243 = i$$20 < a$$2.t;
    for (;v243;) {
      c$$8 = c$$8 - a_array$$1[i$$20];
      var v242 = i$$20;
      i$$20 = i$$20 + 1;
      r_array$$5[v242] = c$$8 & BI_DM;
      c$$8 = c$$8 >> BI_DB;
      v243 = i$$20 < a$$2.t;
    }
    c$$8 = c$$8 - a$$2.s;
  }
  var v245;
  if (c$$8 < 0) {
    v245 = -1;
  } else {
    v245 = 0;
  }
  r$$10.s = v245;
  if (c$$8 < -1) {
    var v246 = i$$20;
    i$$20 = i$$20 + 1;
    r_array$$5[v246] = BI_DV + c$$8;
  } else {
    if (c$$8 > 0) {
      var v247 = i$$20;
      i$$20 = i$$20 + 1;
      r_array$$5[v247] = c$$8;
    }
  }
  r$$10.t = i$$20;
  r$$10.clamp();
  return;
}
function bnpMultiplyTo(a$$3, r$$11) {
  var this_array$$17 = this.array;
  var r_array$$6 = r$$11.array;
  var x$$54 = this.abs();
  var y$$30 = a$$3.abs();
  var y_array = y$$30.array;
  var i$$21 = x$$54.t;
  r$$11.t = i$$21 + y$$30.t;
  var v251 = (i$$21 = i$$21 - 1) >= 0;
  for (;v251;) {
    r_array$$6[i$$21] = 0;
    v251 = (i$$21 = i$$21 - 1) >= 0;
  }
  i$$21 = 0;
  var v253 = i$$21 < y$$30.t;
  for (;v253;) {
    var v252 = i$$21 + x$$54.t;
    var v1664 = JAM.call(x$$54.am, x$$54, [0, y_array[i$$21], r$$11, i$$21, 0, x$$54.t], JAM.policy.p1);
    JAM.set(r_array$$6, v252, v1664);
    ++i$$21;
    v253 = i$$21 < y$$30.t;
  }
  r$$11.s = 0;
  r$$11.clamp();
  if (this.s != a$$3.s) {
    var v254 = BigInteger.ZERO;
    JAM.call(v254.subTo, v254, [r$$11, r$$11], JAM.policy.p1);
  }
  return;
}
function bnpSquareTo(r$$12) {
  var x$$55 = this.abs();
  var x_array = x$$55.array;
  var r_array$$7 = r$$12.array;
  var i$$22 = r$$12.t = 2 * x$$55.t;
  var v257 = (i$$22 = i$$22 - 1) >= 0;
  for (;v257;) {
    r_array$$7[i$$22] = 0;
    v257 = (i$$22 = i$$22 - 1) >= 0;
  }
  i$$22 = 0;
  var v263 = i$$22 < x$$55.t - 1;
  for (;v263;) {
    var c$$9 = JAM.call(x$$55.am, x$$55, [i$$22, x_array[i$$22], r$$12, 2 * i$$22, 0, 1], JAM.policy.p1);
    var v1347 = i$$22 + x$$55.t;
    if (JAM.set(r_array$$7, v1347, r_array$$7[v1347] + JAM.call(x$$55.am, x$$55, [i$$22 + 1, 2 * x_array[i$$22], r$$12, 2 * i$$22 + 1, c$$9, x$$55.t - i$$22 - 1], JAM.policy.p1)) >= BI_DV) {
      var v260 = i$$22 + x$$55.t;
      r_array$$7[v260] = r_array$$7[v260] - BI_DV;
      r_array$$7[i$$22 + x$$55.t + 1] = 1;
    }
    ++i$$22;
    v263 = i$$22 < x$$55.t - 1;
  }
  if (r$$12.t > 0) {
    var v264 = r$$12.t - 1;
    r_array$$7[v264] = r_array$$7[v264] + JAM.call(x$$55.am, x$$55, [i$$22, x_array[i$$22], r$$12, 2 * i$$22, 0, 1], JAM.policy.p1);
  }
  r$$12.s = 0;
  r$$12.clamp();
  return;
}
function bnpDivRemTo(m$$5, q, r$$13) {
  var pm = m$$5.abs();
  if (pm.t <= 0) {
    return;
  }
  var pt = this.abs();
  if (pt.t < pm.t) {
    if (q != null) {
      JAM.call(q.fromInt, q, [0]);
    }
    if (r$$13 != null) {
      JAM.call(this.copyTo, this, [r$$13]);
    }
    return;
  }
  if (r$$13 == null) {
    r$$13 = nbi();
  }
  var y$$31 = nbi();
  var ts = this.s;
  var ms = m$$5.s;
  var pm_array = pm.array;
  var nsh = BI_DB - nbits(pm_array[pm.t - 1]);
  if (nsh > 0) {
    JAM.call(pm.lShiftTo, pm, [nsh, y$$31], JAM.policy.p1);
    JAM.call(pt.lShiftTo, pt, [nsh, r$$13], JAM.policy.p1);
  } else {
    JAM.call(pm.copyTo, pm, [y$$31]);
    JAM.call(pt.copyTo, pt, [r$$13]);
  }
  var ys = y$$31.t;
  var y_array$$1 = y$$31.array;
  var y0$$2 = y_array$$1[ys - 1];
  if (y0$$2 == 0) {
    return;
  }
  var v276 = y0$$2 * (1 << BI_F1);
  var v980;
  if (ys > 1) {
    v980 = y_array$$1[ys - 2] >> BI_F2;
  } else {
    v980 = 0;
  }
  var yt = v276 + v980;
  var d1 = BI_FV / yt;
  var d2 = (1 << BI_F1) / yt;
  var e$$7 = 1 << BI_F2;
  var i$$23 = r$$13.t;
  var j$$4 = i$$23 - ys;
  var v279;
  if (q == null) {
    v279 = nbi();
  } else {
    v279 = q;
  }
  var t$$2 = v279;
  JAM.call(y$$31.dlShiftTo, y$$31, [j$$4, t$$2], JAM.policy.p1);
  var r_array$$8 = r$$13.array;
  if (JAM.call(r$$13.compareTo, r$$13, [t$$2]) >= 0) {
    var v280 = r$$13.t;
    r$$13.t = r$$13.t + 1;
    r_array$$8[v280] = 1;
    JAM.call(r$$13.subTo, r$$13, [t$$2, r$$13], JAM.policy.p1);
  }
  var v282 = BigInteger.ONE;
  JAM.call(v282.dlShiftTo, v282, [ys, t$$2], JAM.policy.p1);
  JAM.call(t$$2.subTo, t$$2, [y$$31, y$$31], JAM.policy.p1);
  var v284 = y$$31.t < ys;
  for (;v284;) {
    var v283 = y$$31.t;
    y$$31.t = y$$31.t + 1;
    y_array$$1[v283] = 0;
    v284 = y$$31.t < ys;
  }
  var v288 = (j$$4 = j$$4 - 1) >= 0;
  for (;v288;) {
    var v285;
    if (r_array$$8[i$$23 = i$$23 - 1] == y0$$2) {
      v285 = BI_DM;
    } else {
      v285 = Math.floor(r_array$$8[i$$23] * d1 + (r_array$$8[i$$23 - 1] + e$$7) * d2);
    }
    var qd = v285;
    if (JAM.set(r_array$$8, i$$23, r_array$$8[i$$23] + JAM.call(y$$31.am, y$$31, [0, qd, r$$13, j$$4, 0, ys], JAM.policy.p1)) < qd) {
      JAM.call(y$$31.dlShiftTo, y$$31, [j$$4, t$$2], JAM.policy.p1);
      JAM.call(r$$13.subTo, r$$13, [t$$2, r$$13], JAM.policy.p1);
      var v286 = r_array$$8[i$$23] < (qd = qd - 1);
      for (;v286;) {
        JAM.call(r$$13.subTo, r$$13, [t$$2, r$$13], JAM.policy.p1);
        v286 = r_array$$8[i$$23] < (qd = qd - 1);
      }
    }
    v288 = (j$$4 = j$$4 - 1) >= 0;
  }
  if (q != null) {
    JAM.call(r$$13.drShiftTo, r$$13, [ys, q], JAM.policy.p1);
    if (ts != ms) {
      var v289 = BigInteger.ZERO;
      JAM.call(v289.subTo, v289, [q, q], JAM.policy.p1);
    }
  }
  r$$13.t = ys;
  r$$13.clamp();
  if (nsh > 0) {
    JAM.call(r$$13.rShiftTo, r$$13, [nsh, r$$13], JAM.policy.p1);
  }
  if (ts < 0) {
    var v293 = BigInteger.ZERO;
    JAM.call(v293.subTo, v293, [r$$13, r$$13], JAM.policy.p1);
  }
  return;
}
function bnMod(a$$4) {
  var r$$14 = nbi();
  var v295 = this.abs();
  JAM.call(v295.divRemTo, v295, [a$$4, null, r$$14], JAM.policy.p1);
  var v994 = this.s < 0;
  if (v994) {
    v994 = JAM.call(r$$14.compareTo, r$$14, [BigInteger.ZERO]) > 0;
  }
  if (v994) {
    JAM.call(a$$4.subTo, a$$4, [r$$14, r$$14], JAM.policy.p1);
  }
  return r$$14;
}
function Classic(m$$6) {
  this.m = m$$6;
  return;
}
function cConvert(x$$56) {
  var v995 = x$$56.s < 0;
  if (!v995) {
    v995 = JAM.call(x$$56.compareTo, x$$56, [this.m]) >= 0;
  }
  if (v995) {
    return JAM.call(x$$56.mod, x$$56, [this.m]);
  } else {
    return x$$56;
  }
  return;
}
function cRevert(x$$57) {
  return x$$57;
}
function cReduce(x$$58) {
  JAM.call(x$$58.divRemTo, x$$58, [this.m, null, x$$58], JAM.policy.p1);
  return;
}
function cMulTo(x$$59, y$$32, r$$15) {
  JAM.call(x$$59.multiplyTo, x$$59, [y$$32, r$$15], JAM.policy.p1);
  JAM.call(this.reduce, this, [r$$15]);
  return;
}
function cSqrTo(x$$60, r$$16) {
  JAM.call(x$$60.squareTo, x$$60, [r$$16]);
  JAM.call(this.reduce, this, [r$$16]);
  return;
}
function bnpInvDigit() {
  var this_array$$18 = this.array;
  if (this.t < 1) {
    return 0;
  }
  var x$$61 = this_array$$18[0];
  if ((x$$61 & 1) == 0) {
    return 0;
  }
  var y$$33 = x$$61 & 3;
  y$$33 = y$$33 * (2 - (x$$61 & 15) * y$$33) & 15;
  y$$33 = y$$33 * (2 - (x$$61 & 255) * y$$33) & 255;
  y$$33 = y$$33 * (2 - ((x$$61 & 65535) * y$$33 & 65535)) & 65535;
  y$$33 = y$$33 * (2 - x$$61 * y$$33 % BI_DV) % BI_DV;
  var v306;
  if (y$$33 > 0) {
    v306 = BI_DV - y$$33;
  } else {
    v306 = -y$$33;
  }
  return v306;
}
function Montgomery(m$$7) {
  this.m = m$$7;
  var v1665 = m$$7.invDigit();
  this.mp = v1665;
  this.mpl = this.mp & 32767;
  this.mph = this.mp >> 15;
  this.um = (1 << BI_DB - 15) - 1;
  this.mt2 = 2 * m$$7.t;
  return;
}
function montConvert(x$$62) {
  var r$$17 = nbi();
  var v311 = x$$62.abs();
  JAM.call(v311.dlShiftTo, v311, [this.m.t, r$$17], JAM.policy.p1);
  JAM.call(r$$17.divRemTo, r$$17, [this.m, null, r$$17], JAM.policy.p1);
  var v1005 = x$$62.s < 0;
  if (v1005) {
    v1005 = JAM.call(r$$17.compareTo, r$$17, [BigInteger.ZERO]) > 0;
  }
  if (v1005) {
    var v314 = this.m;
    JAM.call(v314.subTo, v314, [r$$17, r$$17], JAM.policy.p1);
  }
  return r$$17;
}
function montRevert(x$$63) {
  var r$$18 = nbi();
  JAM.call(x$$63.copyTo, x$$63, [r$$18]);
  JAM.call(this.reduce, this, [r$$18]);
  return r$$18;
}
function montReduce(x$$64) {
  var x_array$$1 = x$$64.array;
  var v317 = x$$64.t <= this.mt2;
  for (;v317;) {
    var v316 = x$$64.t;
    x$$64.t = x$$64.t + 1;
    x_array$$1[v316] = 0;
    v317 = x$$64.t <= this.mt2;
  }
  var i$$24 = 0;
  var v322 = i$$24 < this.m.t;
  for (;v322;) {
    var j$$5 = x_array$$1[i$$24] & 32767;
    var u0 = j$$5 * this.mpl + ((j$$5 * this.mph + (x_array$$1[i$$24] >> 15) * this.mpl & this.um) << 15) & BI_DM;
    j$$5 = i$$24 + this.m.t;
    var v1014 = x_array$$1[j$$5];
    var v1376 = this.m;
    JAM.set(x_array$$1, j$$5, v1014 + JAM.call(v1376.am, v1376, [0, u0, x$$64, i$$24, 0, this.m.t], JAM.policy.p1));
    var v321 = x_array$$1[j$$5] >= BI_DV;
    for (;v321;) {
      x_array$$1[j$$5] = x_array$$1[j$$5] - BI_DV;
      x_array$$1[++j$$5]++;
      v321 = x_array$$1[j$$5] >= BI_DV;
    }
    ++i$$24;
    v322 = i$$24 < this.m.t;
  }
  x$$64.clamp();
  JAM.call(x$$64.drShiftTo, x$$64, [this.m.t, x$$64], JAM.policy.p1);
  if (JAM.call(x$$64.compareTo, x$$64, [this.m]) >= 0) {
    JAM.call(x$$64.subTo, x$$64, [this.m, x$$64], JAM.policy.p1);
  }
  return;
}
function montSqrTo(x$$65, r$$19) {
  JAM.call(x$$65.squareTo, x$$65, [r$$19]);
  JAM.call(this.reduce, this, [r$$19]);
  return;
}
function montMulTo(x$$66, y$$34, r$$20) {
  JAM.call(x$$66.multiplyTo, x$$66, [y$$34, r$$20], JAM.policy.p1);
  JAM.call(this.reduce, this, [r$$20]);
  return;
}
function bnpIsEven() {
  var this_array$$19 = this.array;
  var v1022;
  if (this.t > 0) {
    v1022 = this_array$$19[0] & 1;
  } else {
    v1022 = this.s;
  }
  return v1022 == 0;
}
function bnpExp(e$$8, z$$2) {
  var v1023 = e$$8 > 4294967295;
  if (!v1023) {
    v1023 = e$$8 < 1;
  }
  if (v1023) {
    return BigInteger.ONE;
  }
  var r$$21 = nbi();
  var r2 = nbi();
  var g = JAM.call(z$$2.convert, z$$2, [this]);
  var i$$25 = nbits(e$$8) - 1;
  JAM.call(g.copyTo, g, [r$$21]);
  var v330 = (i$$25 = i$$25 - 1) >= 0;
  for (;v330;) {
    JAM.call(z$$2.sqrTo, z$$2, [r$$21, r2], JAM.policy.p1);
    if ((e$$8 & 1 << i$$25) > 0) {
      JAM.call(z$$2.mulTo, z$$2, [r2, g, r$$21], JAM.policy.p1);
    } else {
      var t$$3 = r$$21;
      r$$21 = r2;
      r2 = t$$3;
    }
    v330 = (i$$25 = i$$25 - 1) >= 0;
  }
  return JAM.call(z$$2.revert, z$$2, [r$$21]);
}
function bnModPowInt(e$$9, m$$8) {
  var z$$3;
  var v1027 = e$$9 < 256;
  if (!v1027) {
    v1027 = m$$8.isEven();
  }
  if (v1027) {
    z$$3 = new Classic(m$$8);
  } else {
    z$$3 = new Montgomery(m$$8);
  }
  return JAM.call(this.exp, this, [e$$9, z$$3], JAM.policy.p1);
}
function bnClone() {
  var r$$22 = nbi();
  JAM.call(this.copyTo, this, [r$$22]);
  return r$$22;
}
function bnIntValue() {
  var this_array$$20 = this.array;
  if (this.s < 0) {
    if (this.t == 1) {
      return this_array$$20[0] - BI_DV;
    } else {
      if (this.t == 0) {
        return -1;
      }
    }
  } else {
    if (this.t == 1) {
      return this_array$$20[0];
    } else {
      if (this.t == 0) {
        return 0;
      }
    }
  }
  return (this_array$$20[1] & (1 << 32 - BI_DB) - 1) << BI_DB | this_array$$20[0];
}
function bnByteValue() {
  var this_array$$21 = this.array;
  var v340;
  if (this.t == 0) {
    v340 = this.s;
  } else {
    v340 = this_array$$21[0] << 24 >> 24;
  }
  return v340;
}
function bnShortValue() {
  var this_array$$22 = this.array;
  var v341;
  if (this.t == 0) {
    v341 = this.s;
  } else {
    v341 = this_array$$22[0] << 16 >> 16;
  }
  return v341;
}
function bnpChunkSize(r$$23) {
  return Math.floor(Math.LN2 * BI_DB / Math.log(r$$23));
}
function bnSigNum() {
  var this_array$$23 = this.array;
  if (this.s < 0) {
    return -1;
  } else {
    var v1041 = this.t <= 0;
    if (!v1041) {
      var v1393 = this.t == 1;
      if (v1393) {
        v1393 = this_array$$23[0] <= 0;
      }
      v1041 = v1393;
    }
    if (v1041) {
      return 0;
    } else {
      return 1;
    }
  }
  return;
}
function bnpToRadix(b$$3) {
  if (b$$3 == null) {
    b$$3 = 10;
  }
  var v1395 = this.signum() == 0;
  if (!v1395) {
    v1395 = b$$3 < 2;
  }
  var v1042 = v1395;
  if (!v1042) {
    v1042 = b$$3 > 36;
  }
  if (v1042) {
    return "0";
  }
  var cs = JAM.call(this.chunkSize, this, [b$$3]);
  var a$$5 = JAM.call(Math.pow, Math, [b$$3, cs], JAM.policy.p1);
  var d$$1 = nbv(a$$5);
  var y$$35 = nbi();
  var z$$4 = nbi();
  var r$$24 = "";
  JAM.call(this.divRemTo, this, [d$$1, y$$35, z$$4], JAM.policy.p1);
  var v348 = y$$35.signum() > 0;
  for (;v348;) {
    var v1397 = a$$5 + z$$4.intValue();
    r$$24 = JAM.call(v1397.toString, v1397, [b$$3]).substr(1) + r$$24;
    JAM.call(y$$35.divRemTo, y$$35, [d$$1, y$$35, z$$4], JAM.policy.p1);
    v348 = y$$35.signum() > 0;
  }
  var v1046 = z$$4.intValue();
  return JAM.call(v1046.toString, v1046, [b$$3]) + r$$24;
}
function bnpFromRadix(s$$5, b$$4) {
  JAM.call(this.fromInt, this, [0]);
  if (b$$4 == null) {
    b$$4 = 10;
  }
  var cs$$1 = JAM.call(this.chunkSize, this, [b$$4]);
  var d$$2 = JAM.call(Math.pow, Math, [b$$4, cs$$1], JAM.policy.p1);
  var mi$$1 = false;
  var j$$6 = 0;
  var w$$9 = 0;
  var i$$26 = 0;
  var v355 = i$$26 < s$$5.length;
  for (;v355;) {
    var x$$67 = intAt(s$$5, i$$26);
    if (x$$67 < 0) {
      var v1048 = s$$5.charAt(i$$26) == "-";
      if (v1048) {
        v1048 = this.signum() == 0;
      }
      if (v1048) {
        mi$$1 = true;
      }
      ++i$$26;
      v355 = i$$26 < s$$5.length;
      continue;
    }
    w$$9 = b$$4 * w$$9 + x$$67;
    if ((j$$6 = j$$6 + 1) >= cs$$1) {
      JAM.call(this.dMultiply, this, [d$$2]);
      JAM.call(this.dAddOffset, this, [w$$9, 0], JAM.policy.p1);
      j$$6 = 0;
      w$$9 = 0;
    }
    ++i$$26;
    v355 = i$$26 < s$$5.length;
  }
  if (j$$6 > 0) {
    JAM.call(this.dMultiply, this, [JAM.call(Math.pow, Math, [b$$4, j$$6], JAM.policy.p1)]);
    JAM.call(this.dAddOffset, this, [w$$9, 0], JAM.policy.p1);
  }
  if (mi$$1) {
    var v358 = BigInteger.ZERO;
    JAM.call(v358.subTo, v358, [this, this], JAM.policy.p1);
  }
  return;
}
function bnpFromNumber(a$$6, b$$5, c$$10) {
  if ("number" == typeof b$$5) {
    if (a$$6 < 2) {
      JAM.call(this.fromInt, this, [1]);
    } else {
      JAM.call(this.fromNumber, this, [a$$6, c$$10], JAM.policy.p1);
      if (!JAM.call(this.testBit, this, [a$$6 - 1])) {
        var v1054 = BigInteger.ONE;
        JAM.call(this.bitwiseTo, this, [JAM.call(v1054.shiftLeft, v1054, [a$$6 - 1]), op_or, this], JAM.policy.p1);
      }
      if (this.isEven()) {
        JAM.call(this.dAddOffset, this, [1, 0], JAM.policy.p1);
      }
      var v364 = !JAM.call(this.isProbablePrime, this, [b$$5]);
      for (;v364;) {
        JAM.call(this.dAddOffset, this, [2, 0], JAM.policy.p1);
        if (this.bitLength() > a$$6) {
          var v1058 = BigInteger.ONE;
          JAM.call(this.subTo, this, [JAM.call(v1058.shiftLeft, v1058, [a$$6 - 1]), this], JAM.policy.p1);
        }
        v364 = !JAM.call(this.isProbablePrime, this, [b$$5]);
      }
    }
  } else {
    var x$$68 = new Array;
    var t$$4 = a$$6 & 7;
    x$$68.length = (a$$6 >> 3) + 1;
    JAM.call(b$$5.nextBytes, b$$5, [x$$68]);
    if (t$$4 > 0) {
      x$$68[0] = x$$68[0] & (1 << t$$4) - 1;
    } else {
      x$$68[0] = 0;
    }
    JAM.call(this.fromString, this, [x$$68, 256], JAM.policy.p1);
  }
  return;
}
function bnToByteArray() {
  var this_array$$24 = this.array;
  var i$$27 = this.t;
  var r$$25 = new Array;
  r$$25[0] = this.s;
  var p$$1 = BI_DB - i$$27 * BI_DB % 8;
  var d$$3;
  var k$$2 = 0;
  var v1064 = i$$27;
  i$$27 = i$$27 - 1;
  if (v1064 > 0) {
    var v1065 = p$$1 < BI_DB;
    if (v1065) {
      v1065 = (d$$3 = this_array$$24[i$$27] >> p$$1) != (this.s & BI_DM) >> p$$1;
    }
    if (v1065) {
      var v370 = k$$2;
      k$$2 = k$$2 + 1;
      r$$25[v370] = d$$3 | this.s << BI_DB - p$$1;
    }
    var v381 = i$$27 >= 0;
    for (;v381;) {
      if (p$$1 < 8) {
        d$$3 = (this_array$$24[i$$27] & (1 << p$$1) - 1) << 8 - p$$1;
        d$$3 = d$$3 | this_array$$24[i$$27 = i$$27 - 1] >> (p$$1 = p$$1 + (BI_DB - 8));
      } else {
        d$$3 = this_array$$24[i$$27] >> (p$$1 = p$$1 - 8) & 255;
        if (p$$1 <= 0) {
          p$$1 = p$$1 + BI_DB;
          --i$$27;
        }
      }
      if ((d$$3 & 128) != 0) {
        d$$3 = d$$3 | -256;
      }
      var v1073 = k$$2 == 0;
      if (v1073) {
        v1073 = (this.s & 128) != (d$$3 & 128);
      }
      if (v1073) {
        ++k$$2;
      }
      var v1074 = k$$2 > 0;
      if (!v1074) {
        v1074 = d$$3 != this.s;
      }
      if (v1074) {
        var v379 = k$$2;
        k$$2 = k$$2 + 1;
        r$$25[v379] = d$$3;
      }
      v381 = i$$27 >= 0;
    }
  }
  return r$$25;
}
function bnEquals(a$$7) {
  return JAM.call(this.compareTo, this, [a$$7]) == 0;
}
function bnMin(a$$8) {
  var v384;
  if (JAM.call(this.compareTo, this, [a$$8]) < 0) {
    v384 = this;
  } else {
    v384 = a$$8;
  }
  return v384;
}
function bnMax(a$$9) {
  var v385;
  if (JAM.call(this.compareTo, this, [a$$9]) > 0) {
    v385 = this;
  } else {
    v385 = a$$9;
  }
  return v385;
}
function bnpBitwiseTo(a$$10, op, r$$26) {
  var this_array$$25 = this.array;
  var a_array$$2 = a$$10.array;
  var r_array$$9 = r$$26.array;
  var i$$28;
  var f;
  var m$$9 = JAM.call(Math.min, Math, [a$$10.t, this.t], JAM.policy.p1);
  i$$28 = 0;
  var v390 = i$$28 < m$$9;
  for (;v390;) {
    var v1666 = JAM.call(op, null, [this_array$$25[i$$28], a_array$$2[i$$28]], JAM.policy.p1);
    JAM.set(r_array$$9, i$$28, v1666);
    ++i$$28;
    v390 = i$$28 < m$$9;
  }
  if (a$$10.t < this.t) {
    f = a$$10.s & BI_DM;
    i$$28 = m$$9;
    var v393 = i$$28 < this.t;
    for (;v393;) {
      var v1667 = JAM.call(op, null, [this_array$$25[i$$28], f], JAM.policy.p1);
      JAM.set(r_array$$9, i$$28, v1667);
      ++i$$28;
      v393 = i$$28 < this.t;
    }
    r$$26.t = this.t;
  } else {
    f = this.s & BI_DM;
    i$$28 = m$$9;
    var v396 = i$$28 < a$$10.t;
    for (;v396;) {
      var v1668 = JAM.call(op, null, [f, a_array$$2[i$$28]], JAM.policy.p1);
      JAM.set(r_array$$9, i$$28, v1668);
      ++i$$28;
      v396 = i$$28 < a$$10.t;
    }
    r$$26.t = a$$10.t;
  }
  var v1669 = JAM.call(op, null, [this.s, a$$10.s], JAM.policy.p1);
  r$$26.s = v1669;
  r$$26.clamp();
  return;
}
function op_and(x$$69, y$$36) {
  return x$$69 & y$$36;
}
function bnAnd(a$$11) {
  var r$$27 = nbi();
  JAM.call(this.bitwiseTo, this, [a$$11, op_and, r$$27], JAM.policy.p1);
  return r$$27;
}
function op_or(x$$70, y$$37) {
  return x$$70 | y$$37;
}
function bnOr(a$$12) {
  var r$$28 = nbi();
  JAM.call(this.bitwiseTo, this, [a$$12, op_or, r$$28], JAM.policy.p1);
  return r$$28;
}
function op_xor(x$$71, y$$38) {
  return x$$71 ^ y$$38;
}
function bnXor(a$$13) {
  var r$$29 = nbi();
  JAM.call(this.bitwiseTo, this, [a$$13, op_xor, r$$29], JAM.policy.p1);
  return r$$29;
}
function op_andnot(x$$72, y$$39) {
  return x$$72 & ~y$$39;
}
function bnAndNot(a$$14) {
  var r$$30 = nbi();
  JAM.call(this.bitwiseTo, this, [a$$14, op_andnot, r$$30], JAM.policy.p1);
  return r$$30;
}
function bnNot() {
  var this_array$$26 = this.array;
  var r$$31 = nbi();
  var r_array$$10 = r$$31.array;
  var i$$29 = 0;
  var v402 = i$$29 < this.t;
  for (;v402;) {
    r_array$$10[i$$29] = BI_DM & ~this_array$$26[i$$29];
    ++i$$29;
    v402 = i$$29 < this.t;
  }
  r$$31.t = this.t;
  r$$31.s = ~this.s;
  return r$$31;
}
function bnShiftLeft(n$$10) {
  var r$$32 = nbi();
  if (n$$10 < 0) {
    JAM.call(this.rShiftTo, this, [-n$$10, r$$32], JAM.policy.p1);
  } else {
    JAM.call(this.lShiftTo, this, [n$$10, r$$32], JAM.policy.p1);
  }
  return r$$32;
}
function bnShiftRight(n$$11) {
  var r$$33 = nbi();
  if (n$$11 < 0) {
    JAM.call(this.lShiftTo, this, [-n$$11, r$$33], JAM.policy.p1);
  } else {
    JAM.call(this.rShiftTo, this, [n$$11, r$$33], JAM.policy.p1);
  }
  return r$$33;
}
function lbit(x$$73) {
  if (x$$73 == 0) {
    return -1;
  }
  var r$$34 = 0;
  if ((x$$73 & 65535) == 0) {
    x$$73 = x$$73 >> 16;
    r$$34 = r$$34 + 16;
  }
  if ((x$$73 & 255) == 0) {
    x$$73 = x$$73 >> 8;
    r$$34 = r$$34 + 8;
  }
  if ((x$$73 & 15) == 0) {
    x$$73 = x$$73 >> 4;
    r$$34 = r$$34 + 4;
  }
  if ((x$$73 & 3) == 0) {
    x$$73 = x$$73 >> 2;
    r$$34 = r$$34 + 2;
  }
  if ((x$$73 & 1) == 0) {
    ++r$$34;
  }
  return r$$34;
}
function bnGetLowestSetBit() {
  var this_array$$27 = this.array;
  var i$$30 = 0;
  var v417 = i$$30 < this.t;
  for (;v417;) {
    if (this_array$$27[i$$30] != 0) {
      return i$$30 * BI_DB + lbit(this_array$$27[i$$30]);
    }
    ++i$$30;
    v417 = i$$30 < this.t;
  }
  if (this.s < 0) {
    return this.t * BI_DB;
  }
  return -1;
}
function cbit(x$$74) {
  var r$$35 = 0;
  var v420 = x$$74 != 0;
  for (;v420;) {
    x$$74 = x$$74 & x$$74 - 1;
    ++r$$35;
    v420 = x$$74 != 0;
  }
  return r$$35;
}
function bnBitCount() {
  var r$$36 = 0;
  var x$$75 = this.s & BI_DM;
  var i$$31 = 0;
  var v422 = i$$31 < this.t;
  for (;v422;) {
    r$$36 = r$$36 + cbit(this_array[i$$31] ^ x$$75);
    ++i$$31;
    v422 = i$$31 < this.t;
  }
  return r$$36;
}
function bnTestBit(n$$12) {
  var this_array$$28 = this.array;
  var j$$7 = Math.floor(n$$12 / BI_DB);
  if (j$$7 >= this.t) {
    return this.s != 0;
  }
  return (this_array$$28[j$$7] & 1 << n$$12 % BI_DB) != 0;
}
function bnpChangeBit(n$$13, op$$1) {
  var v427 = BigInteger.ONE;
  var r$$37 = JAM.call(v427.shiftLeft, v427, [n$$13]);
  JAM.call(this.bitwiseTo, this, [r$$37, op$$1, r$$37], JAM.policy.p1);
  return r$$37;
}
function bnSetBit(n$$14) {
  return JAM.call(this.changeBit, this, [n$$14, op_or], JAM.policy.p1);
}
function bnClearBit(n$$15) {
  return JAM.call(this.changeBit, this, [n$$15, op_andnot], JAM.policy.p1);
}
function bnFlipBit(n$$16) {
  return JAM.call(this.changeBit, this, [n$$16, op_xor], JAM.policy.p1);
}
function bnpAddTo(a$$15, r$$38) {
  var this_array$$29 = this.array;
  var a_array$$3 = a$$15.array;
  var r_array$$11 = r$$38.array;
  var i$$32 = 0;
  var c$$11 = 0;
  var m$$10 = JAM.call(Math.min, Math, [a$$15.t, this.t], JAM.policy.p1);
  var v431 = i$$32 < m$$10;
  for (;v431;) {
    c$$11 = c$$11 + (this_array$$29[i$$32] + a_array$$3[i$$32]);
    var v430 = i$$32;
    i$$32 = i$$32 + 1;
    r_array$$11[v430] = c$$11 & BI_DM;
    c$$11 = c$$11 >> BI_DB;
    v431 = i$$32 < m$$10;
  }
  if (a$$15.t < this.t) {
    c$$11 = c$$11 + a$$15.s;
    var v433 = i$$32 < this.t;
    for (;v433;) {
      c$$11 = c$$11 + this_array$$29[i$$32];
      var v432 = i$$32;
      i$$32 = i$$32 + 1;
      r_array$$11[v432] = c$$11 & BI_DM;
      c$$11 = c$$11 >> BI_DB;
      v433 = i$$32 < this.t;
    }
    c$$11 = c$$11 + this.s;
  } else {
    c$$11 = c$$11 + this.s;
    var v435 = i$$32 < a$$15.t;
    for (;v435;) {
      c$$11 = c$$11 + a_array$$3[i$$32];
      var v434 = i$$32;
      i$$32 = i$$32 + 1;
      r_array$$11[v434] = c$$11 & BI_DM;
      c$$11 = c$$11 >> BI_DB;
      v435 = i$$32 < a$$15.t;
    }
    c$$11 = c$$11 + a$$15.s;
  }
  var v437;
  if (c$$11 < 0) {
    v437 = -1;
  } else {
    v437 = 0;
  }
  r$$38.s = v437;
  if (c$$11 > 0) {
    var v438 = i$$32;
    i$$32 = i$$32 + 1;
    r_array$$11[v438] = c$$11;
  } else {
    if (c$$11 < -1) {
      var v439 = i$$32;
      i$$32 = i$$32 + 1;
      r_array$$11[v439] = BI_DV + c$$11;
    }
  }
  r$$38.t = i$$32;
  r$$38.clamp();
  return;
}
function bnAdd(a$$16) {
  var r$$39 = nbi();
  JAM.call(this.addTo, this, [a$$16, r$$39], JAM.policy.p1);
  return r$$39;
}
function bnSubtract(a$$17) {
  var r$$40 = nbi();
  JAM.call(this.subTo, this, [a$$17, r$$40], JAM.policy.p1);
  return r$$40;
}
function bnMultiply(a$$18) {
  var r$$41 = nbi();
  JAM.call(this.multiplyTo, this, [a$$18, r$$41], JAM.policy.p1);
  return r$$41;
}
function bnDivide(a$$19) {
  var r$$42 = nbi();
  JAM.call(this.divRemTo, this, [a$$19, r$$42, null], JAM.policy.p1);
  return r$$42;
}
function bnRemainder(a$$20) {
  var r$$43 = nbi();
  JAM.call(this.divRemTo, this, [a$$20, null, r$$43], JAM.policy.p1);
  return r$$43;
}
function bnDivideAndRemainder(a$$21) {
  var q$$1 = nbi();
  var r$$44 = nbi();
  JAM.call(this.divRemTo, this, [a$$21, q$$1, r$$44], JAM.policy.p1);
  return new Array(q$$1, r$$44);
}
function bnpDMultiply(n$$17) {
  var this_array$$30 = this.array;
  var v442 = this.t;
  var v1670 = JAM.call(this.am, this, [0, n$$17 - 1, this, 0, 0, this.t], JAM.policy.p1);
  JAM.set(this_array$$30, v442, v1670);
  ++this.t;
  this.clamp();
  return;
}
function bnpDAddOffset(n$$18, w$$10) {
  var this_array$$31 = this.array;
  var v444 = this.t <= w$$10;
  for (;v444;) {
    var v443 = this.t;
    this.t = this.t + 1;
    this_array$$31[v443] = 0;
    v444 = this.t <= w$$10;
  }
  JAM.set(this_array$$31, w$$10, this_array$$31[w$$10] + n$$18);
  var v447 = this_array$$31[w$$10] >= BI_DV;
  for (;v447;) {
    this_array$$31[w$$10] = this_array$$31[w$$10] - BI_DV;
    if ((w$$10 = w$$10 + 1) >= this.t) {
      var v445 = this.t;
      this.t = this.t + 1;
      this_array$$31[v445] = 0;
    }
    JAM.set(this_array$$31, w$$10, this_array$$31[w$$10] + 1);
    v447 = this_array$$31[w$$10] >= BI_DV;
  }
  return;
}
function NullExp() {
  return;
}
function nNop(x$$76) {
  return x$$76;
}
function nMulTo(x$$77, y$$40, r$$45) {
  JAM.call(x$$77.multiplyTo, x$$77, [y$$40, r$$45], JAM.policy.p1);
  return;
}
function nSqrTo(x$$78, r$$46) {
  JAM.call(x$$78.squareTo, x$$78, [r$$46]);
  return;
}
function bnPow(e$$10) {
  return JAM.call(this.exp, this, [e$$10, new NullExp], JAM.policy.p1);
}
function bnpMultiplyLowerTo(a$$22, n$$19, r$$47) {
  var r_array$$12 = r$$47.array;
  var a_array$$4 = a$$22.array;
  var i$$33 = JAM.call(Math.min, Math, [this.t + a$$22.t, n$$19], JAM.policy.p1);
  r$$47.s = 0;
  r$$47.t = i$$33;
  var v451 = i$$33 > 0;
  for (;v451;) {
    r_array$$12[i$$33 = i$$33 - 1] = 0;
    v451 = i$$33 > 0;
  }
  var j$$8;
  j$$8 = r$$47.t - this.t;
  var v455 = i$$33 < j$$8;
  for (;v455;) {
    var v454 = i$$33 + this.t;
    var v1671 = JAM.call(this.am, this, [0, a_array$$4[i$$33], r$$47, i$$33, 0, this.t], JAM.policy.p1);
    JAM.set(r_array$$12, v454, v1671);
    ++i$$33;
    v455 = i$$33 < j$$8;
  }
  j$$8 = JAM.call(Math.min, Math, [a$$22.t, n$$19], JAM.policy.p1);
  var v459 = i$$33 < j$$8;
  for (;v459;) {
    JAM.call(this.am, this, [0, a_array$$4[i$$33], r$$47, i$$33, 0, n$$19 - i$$33], JAM.policy.p1);
    ++i$$33;
    v459 = i$$33 < j$$8;
  }
  r$$47.clamp();
  return;
}
function bnpMultiplyUpperTo(a$$23, n$$20, r$$48) {
  var r_array$$13 = r$$48.array;
  var a_array$$5 = a$$23.array;
  --n$$20;
  var i$$34 = r$$48.t = this.t + a$$23.t - n$$20;
  r$$48.s = 0;
  var v461 = (i$$34 = i$$34 - 1) >= 0;
  for (;v461;) {
    r_array$$13[i$$34] = 0;
    v461 = (i$$34 = i$$34 - 1) >= 0;
  }
  i$$34 = JAM.call(Math.max, Math, [n$$20 - this.t, 0], JAM.policy.p1);
  var v464 = i$$34 < a$$23.t;
  for (;v464;) {
    var v463 = this.t + i$$34 - n$$20;
    var v1672 = JAM.call(this.am, this, [n$$20 - i$$34, a_array$$5[i$$34], r$$48, 0, 0, this.t + i$$34 - n$$20], JAM.policy.p1);
    r_array$$13[v463] = v1672;
    ++i$$34;
    v464 = i$$34 < a$$23.t;
  }
  r$$48.clamp();
  JAM.call(r$$48.drShiftTo, r$$48, [1, r$$48], JAM.policy.p1);
  return;
}
function Barrett(m$$11) {
  var v1673 = nbi();
  this.r2 = v1673;
  var v1674 = nbi();
  this.q3 = v1674;
  var v465 = BigInteger.ONE;
  JAM.call(v465.dlShiftTo, v465, [2 * m$$11.t, this.r2], JAM.policy.p1);
  var v468 = this.r2;
  var v1675 = JAM.call(v468.divide, v468, [m$$11]);
  this.mu = v1675;
  this.m = m$$11;
  return;
}
function barrettConvert(x$$79) {
  var v1144 = x$$79.s < 0;
  if (!v1144) {
    v1144 = x$$79.t > 2 * this.m.t;
  }
  if (v1144) {
    return JAM.call(x$$79.mod, x$$79, [this.m]);
  } else {
    if (JAM.call(x$$79.compareTo, x$$79, [this.m]) < 0) {
      return x$$79;
    } else {
      var r$$49 = nbi();
      JAM.call(x$$79.copyTo, x$$79, [r$$49]);
      JAM.call(this.reduce, this, [r$$49]);
      return r$$49;
    }
  }
  return;
}
function barrettRevert(x$$80) {
  return x$$80;
}
function barrettReduce(x$$81) {
  JAM.call(x$$81.drShiftTo, x$$81, [this.m.t - 1, this.r2], JAM.policy.p1);
  if (x$$81.t > this.m.t + 1) {
    x$$81.t = this.m.t + 1;
    x$$81.clamp();
  }
  var v476 = this.mu;
  JAM.call(v476.multiplyUpperTo, v476, [this.r2, this.m.t + 1, this.q3], JAM.policy.p1);
  var v480 = this.m;
  JAM.call(v480.multiplyLowerTo, v480, [this.q3, this.m.t + 1, this.r2], JAM.policy.p1);
  var v485 = JAM.call(x$$81.compareTo, x$$81, [this.r2]) < 0;
  for (;v485;) {
    JAM.call(x$$81.dAddOffset, x$$81, [1, this.m.t + 1], JAM.policy.p1);
    v485 = JAM.call(x$$81.compareTo, x$$81, [this.r2]) < 0;
  }
  JAM.call(x$$81.subTo, x$$81, [this.r2, x$$81], JAM.policy.p1);
  var v488 = JAM.call(x$$81.compareTo, x$$81, [this.m]) >= 0;
  for (;v488;) {
    JAM.call(x$$81.subTo, x$$81, [this.m, x$$81], JAM.policy.p1);
    v488 = JAM.call(x$$81.compareTo, x$$81, [this.m]) >= 0;
  }
  return;
}
function barrettSqrTo(x$$82, r$$50) {
  JAM.call(x$$82.squareTo, x$$82, [r$$50]);
  JAM.call(this.reduce, this, [r$$50]);
  return;
}
function barrettMulTo(x$$83, y$$41, r$$51) {
  JAM.call(x$$83.multiplyTo, x$$83, [y$$41, r$$51], JAM.policy.p1);
  JAM.call(this.reduce, this, [r$$51]);
  return;
}
function bnModPow(e$$11, m$$12) {
  var e_array = e$$11.array;
  var i$$35 = e$$11.bitLength();
  var k$$3;
  var r$$52 = nbv(1);
  var z$$5;
  if (i$$35 <= 0) {
    return r$$52;
  } else {
    if (i$$35 < 18) {
      k$$3 = 1;
    } else {
      if (i$$35 < 48) {
        k$$3 = 3;
      } else {
        if (i$$35 < 144) {
          k$$3 = 4;
        } else {
          if (i$$35 < 768) {
            k$$3 = 5;
          } else {
            k$$3 = 6;
          }
        }
      }
    }
  }
  if (i$$35 < 8) {
    z$$5 = new Classic(m$$12);
  } else {
    if (m$$12.isEven()) {
      z$$5 = new Barrett(m$$12);
    } else {
      z$$5 = new Montgomery(m$$12);
    }
  }
  var g$$1 = new Array;
  var n$$21 = 3;
  var k1 = k$$3 - 1;
  var km$$1 = (1 << k$$3) - 1;
  var v1676 = JAM.call(z$$5.convert, z$$5, [this]);
  g$$1[1] = v1676;
  if (k$$3 > 1) {
    var g2 = nbi();
    JAM.call(z$$5.sqrTo, z$$5, [g$$1[1], g2], JAM.policy.p1);
    var v500 = n$$21 <= km$$1;
    for (;v500;) {
      var v1677 = nbi();
      g$$1[n$$21] = v1677;
      JAM.call(z$$5.mulTo, z$$5, [g2, g$$1[n$$21 - 2], g$$1[n$$21]], JAM.policy.p1);
      n$$21 = n$$21 + 2;
      v500 = n$$21 <= km$$1;
    }
  }
  var j$$9 = e$$11.t - 1;
  var w$$11;
  var is1 = true;
  var r2$$1 = nbi();
  var t$$5;
  i$$35 = nbits(e_array[j$$9]) - 1;
  var v517 = j$$9 >= 0;
  for (;v517;) {
    if (i$$35 >= k1) {
      w$$11 = e_array[j$$9] >> i$$35 - k1 & km$$1;
    } else {
      w$$11 = (e_array[j$$9] & (1 << i$$35 + 1) - 1) << k1 - i$$35;
      if (j$$9 > 0) {
        w$$11 = w$$11 | e_array[j$$9 - 1] >> BI_DB + i$$35 - k1;
      }
    }
    n$$21 = k$$3;
    var v509 = (w$$11 & 1) == 0;
    for (;v509;) {
      w$$11 = w$$11 >> 1;
      --n$$21;
      v509 = (w$$11 & 1) == 0;
    }
    if ((i$$35 = i$$35 - n$$21) < 0) {
      i$$35 = i$$35 + BI_DB;
      --j$$9;
    }
    if (is1) {
      var v511 = g$$1[w$$11];
      JAM.call(v511.copyTo, v511, [r$$52]);
      is1 = false;
    } else {
      var v512 = n$$21 > 1;
      for (;v512;) {
        JAM.call(z$$5.sqrTo, z$$5, [r$$52, r2$$1], JAM.policy.p1);
        JAM.call(z$$5.sqrTo, z$$5, [r2$$1, r$$52], JAM.policy.p1);
        n$$21 = n$$21 - 2;
        v512 = n$$21 > 1;
      }
      if (n$$21 > 0) {
        JAM.call(z$$5.sqrTo, z$$5, [r$$52, r2$$1], JAM.policy.p1);
      } else {
        t$$5 = r$$52;
        r$$52 = r2$$1;
        r2$$1 = t$$5;
      }
      JAM.call(z$$5.mulTo, z$$5, [r2$$1, g$$1[w$$11], r$$52], JAM.policy.p1);
    }
    var v1167 = j$$9 >= 0;
    if (v1167) {
      v1167 = (e_array[j$$9] & 1 << i$$35) == 0;
    }
    var v516 = v1167;
    for (;v516;) {
      JAM.call(z$$5.sqrTo, z$$5, [r$$52, r2$$1], JAM.policy.p1);
      t$$5 = r$$52;
      r$$52 = r2$$1;
      r2$$1 = t$$5;
      if ((i$$35 = i$$35 - 1) < 0) {
        i$$35 = BI_DB - 1;
        --j$$9;
      }
      var v1169 = j$$9 >= 0;
      if (v1169) {
        v1169 = (e_array[j$$9] & 1 << i$$35) == 0;
      }
      v516 = v1169;
    }
    v517 = j$$9 >= 0;
  }
  return JAM.call(z$$5.revert, z$$5, [r$$52]);
}
function bnGCD(a$$24) {
  var v518;
  if (this.s < 0) {
    v518 = this.negate();
  } else {
    v518 = this.clone();
  }
  var x$$84 = v518;
  var v519;
  if (a$$24.s < 0) {
    v519 = a$$24.negate();
  } else {
    v519 = a$$24.clone();
  }
  var y$$42 = v519;
  if (JAM.call(x$$84.compareTo, x$$84, [y$$42]) < 0) {
    var t$$6 = x$$84;
    x$$84 = y$$42;
    y$$42 = t$$6;
  }
  var i$$36 = x$$84.getLowestSetBit();
  var g$$2 = y$$42.getLowestSetBit();
  if (g$$2 < 0) {
    return x$$84;
  }
  if (i$$36 < g$$2) {
    g$$2 = i$$36;
  }
  if (g$$2 > 0) {
    JAM.call(x$$84.rShiftTo, x$$84, [g$$2, x$$84], JAM.policy.p1);
    JAM.call(y$$42.rShiftTo, y$$42, [g$$2, y$$42], JAM.policy.p1);
  }
  var v527 = x$$84.signum() > 0;
  for (;v527;) {
    if ((i$$36 = x$$84.getLowestSetBit()) > 0) {
      JAM.call(x$$84.rShiftTo, x$$84, [i$$36, x$$84], JAM.policy.p1);
    }
    if ((i$$36 = y$$42.getLowestSetBit()) > 0) {
      JAM.call(y$$42.rShiftTo, y$$42, [i$$36, y$$42], JAM.policy.p1);
    }
    if (JAM.call(x$$84.compareTo, x$$84, [y$$42]) >= 0) {
      JAM.call(x$$84.subTo, x$$84, [y$$42, x$$84], JAM.policy.p1);
      JAM.call(x$$84.rShiftTo, x$$84, [1, x$$84], JAM.policy.p1);
    } else {
      JAM.call(y$$42.subTo, y$$42, [x$$84, y$$42], JAM.policy.p1);
      JAM.call(y$$42.rShiftTo, y$$42, [1, y$$42], JAM.policy.p1);
    }
    v527 = x$$84.signum() > 0;
  }
  if (g$$2 > 0) {
    JAM.call(y$$42.lShiftTo, y$$42, [g$$2, y$$42], JAM.policy.p1);
  }
  return y$$42;
}
function bnpModInt(n$$22) {
  var this_array$$32 = this.array;
  if (n$$22 <= 0) {
    return 0;
  }
  var d$$4 = BI_DV % n$$22;
  var v530;
  if (this.s < 0) {
    v530 = n$$22 - 1;
  } else {
    v530 = 0;
  }
  var r$$53 = v530;
  if (this.t > 0) {
    if (d$$4 == 0) {
      r$$53 = this_array$$32[0] % n$$22;
    } else {
      var i$$37 = this.t - 1;
      var v534 = i$$37 >= 0;
      for (;v534;) {
        r$$53 = (d$$4 * r$$53 + this_array$$32[i$$37]) % n$$22;
        --i$$37;
        v534 = i$$37 >= 0;
      }
    }
  }
  return r$$53;
}
function bnModInverse(m$$13) {
  var ac = m$$13.isEven();
  var v1445 = this.isEven();
  if (v1445) {
    v1445 = ac;
  }
  var v1182 = v1445;
  if (!v1182) {
    v1182 = m$$13.signum() == 0;
  }
  if (v1182) {
    return BigInteger.ZERO;
  }
  var u = m$$13.clone();
  var v$$1 = this.clone();
  var a$$25 = nbv(1);
  var b$$6 = nbv(0);
  var c$$12 = nbv(0);
  var d$$5 = nbv(1);
  var v545 = u.signum() != 0;
  for (;v545;) {
    var v540 = u.isEven();
    for (;v540;) {
      JAM.call(u.rShiftTo, u, [1, u], JAM.policy.p1);
      if (ac) {
        var v1184 = !a$$25.isEven();
        if (!v1184) {
          v1184 = !b$$6.isEven();
        }
        if (v1184) {
          JAM.call(a$$25.addTo, a$$25, [this, a$$25], JAM.policy.p1);
          JAM.call(b$$6.subTo, b$$6, [m$$13, b$$6], JAM.policy.p1);
        }
        JAM.call(a$$25.rShiftTo, a$$25, [1, a$$25], JAM.policy.p1);
      } else {
        if (!b$$6.isEven()) {
          JAM.call(b$$6.subTo, b$$6, [m$$13, b$$6], JAM.policy.p1);
        }
      }
      JAM.call(b$$6.rShiftTo, b$$6, [1, b$$6], JAM.policy.p1);
      v540 = u.isEven();
    }
    var v543 = v$$1.isEven();
    for (;v543;) {
      JAM.call(v$$1.rShiftTo, v$$1, [1, v$$1], JAM.policy.p1);
      if (ac) {
        var v1186 = !c$$12.isEven();
        if (!v1186) {
          v1186 = !d$$5.isEven();
        }
        if (v1186) {
          JAM.call(c$$12.addTo, c$$12, [this, c$$12], JAM.policy.p1);
          JAM.call(d$$5.subTo, d$$5, [m$$13, d$$5], JAM.policy.p1);
        }
        JAM.call(c$$12.rShiftTo, c$$12, [1, c$$12], JAM.policy.p1);
      } else {
        if (!d$$5.isEven()) {
          JAM.call(d$$5.subTo, d$$5, [m$$13, d$$5], JAM.policy.p1);
        }
      }
      JAM.call(d$$5.rShiftTo, d$$5, [1, d$$5], JAM.policy.p1);
      v543 = v$$1.isEven();
    }
    if (JAM.call(u.compareTo, u, [v$$1]) >= 0) {
      JAM.call(u.subTo, u, [v$$1, u], JAM.policy.p1);
      if (ac) {
        JAM.call(a$$25.subTo, a$$25, [c$$12, a$$25], JAM.policy.p1);
      }
      JAM.call(b$$6.subTo, b$$6, [d$$5, b$$6], JAM.policy.p1);
    } else {
      JAM.call(v$$1.subTo, v$$1, [u, v$$1], JAM.policy.p1);
      if (ac) {
        JAM.call(c$$12.subTo, c$$12, [a$$25, c$$12], JAM.policy.p1);
      }
      JAM.call(d$$5.subTo, d$$5, [b$$6, d$$5], JAM.policy.p1);
    }
    v545 = u.signum() != 0;
  }
  if (JAM.call(v$$1.compareTo, v$$1, [BigInteger.ONE]) != 0) {
    return BigInteger.ZERO;
  }
  if (JAM.call(d$$5.compareTo, d$$5, [m$$13]) >= 0) {
    return JAM.call(d$$5.subtract, d$$5, [m$$13]);
  }
  if (d$$5.signum() < 0) {
    JAM.call(d$$5.addTo, d$$5, [m$$13, d$$5], JAM.policy.p1);
  } else {
    return d$$5;
  }
  if (d$$5.signum() < 0) {
    return JAM.call(d$$5.add, d$$5, [m$$13]);
  } else {
    return d$$5;
  }
  return;
}
function bnIsProbablePrime(t$$7) {
  var i$$38;
  var x$$85 = this.abs();
  var x_array$$2 = x$$85.array;
  var v1194 = x$$85.t == 1;
  if (v1194) {
    v1194 = x_array$$2[0] <= lowprimes[lowprimes.length - 1];
  }
  if (v1194) {
    i$$38 = 0;
    var v551 = i$$38 < lowprimes.length;
    for (;v551;) {
      if (x_array$$2[0] == lowprimes[i$$38]) {
        return true;
      }
      ++i$$38;
      v551 = i$$38 < lowprimes.length;
    }
    return false;
  }
  if (x$$85.isEven()) {
    return false;
  }
  i$$38 = 1;
  var v557 = i$$38 < lowprimes.length;
  for (;v557;) {
    var m$$14 = lowprimes[i$$38];
    var j$$10 = i$$38 + 1;
    var v1200 = j$$10 < lowprimes.length;
    if (v1200) {
      v1200 = m$$14 < lplim;
    }
    var v554 = v1200;
    for (;v554;) {
      var v1459 = j$$10;
      j$$10 = j$$10 + 1;
      m$$14 = m$$14 * lowprimes[v1459];
      var v1202 = j$$10 < lowprimes.length;
      if (v1202) {
        v1202 = m$$14 < lplim;
      }
      v554 = v1202;
    }
    m$$14 = JAM.call(x$$85.modInt, x$$85, [m$$14]);
    var v556 = i$$38 < j$$10;
    for (;v556;) {
      var v1587 = i$$38;
      i$$38 = i$$38 + 1;
      if (m$$14 % lowprimes[v1587] == 0) {
        return false;
      }
      v556 = i$$38 < j$$10;
    }
    v557 = i$$38 < lowprimes.length;
  }
  return JAM.call(x$$85.millerRabin, x$$85, [t$$7]);
}
function bnpMillerRabin(t$$8) {
  var n1 = JAM.call(this.subtract, this, [BigInteger.ONE]);
  var k$$4 = n1.getLowestSetBit();
  if (k$$4 <= 0) {
    return false;
  }
  var r$$54 = JAM.call(n1.shiftRight, n1, [k$$4]);
  t$$8 = t$$8 + 1 >> 1;
  if (t$$8 > lowprimes.length) {
    t$$8 = lowprimes.length;
  }
  var a$$26 = nbi();
  var i$$39 = 0;
  var v567 = i$$39 < t$$8;
  for (;v567;) {
    JAM.call(a$$26.fromInt, a$$26, [lowprimes[i$$39]]);
    var y$$43 = JAM.call(a$$26.modPow, a$$26, [r$$54, this], JAM.policy.p1);
    var v1206 = JAM.call(y$$43.compareTo, y$$43, [BigInteger.ONE]) != 0;
    if (v1206) {
      v1206 = JAM.call(y$$43.compareTo, y$$43, [n1]) != 0;
    }
    if (v1206) {
      var j$$11 = 1;
      var v1464 = j$$11;
      j$$11 = j$$11 + 1;
      var v1207 = v1464 < k$$4;
      if (v1207) {
        v1207 = JAM.call(y$$43.compareTo, y$$43, [n1]) != 0;
      }
      var v564 = v1207;
      for (;v564;) {
        y$$43 = JAM.call(y$$43.modPowInt, y$$43, [2, this], JAM.policy.p1);
        if (JAM.call(y$$43.compareTo, y$$43, [BigInteger.ONE]) == 0) {
          return false;
        }
        var v1467 = j$$11;
        j$$11 = j$$11 + 1;
        var v1209 = v1467 < k$$4;
        if (v1209) {
          v1209 = JAM.call(y$$43.compareTo, y$$43, [n1]) != 0;
        }
        v564 = v1209;
      }
      if (JAM.call(y$$43.compareTo, y$$43, [n1]) != 0) {
        return false;
      }
    }
    ++i$$39;
    v567 = i$$39 < t$$8;
  }
  return true;
}
function Arcfour() {
  this.i = 0;
  this.j = 0;
  var v1678 = new Array;
  this.S = v1678;
  return;
}
function ARC4init(key$$14) {
  var i$$40;
  var j$$12;
  var t$$9;
  i$$40 = 0;
  var v569 = i$$40 < 256;
  for (;v569;) {
    JAM.set(this.S, i$$40, i$$40);
    ++i$$40;
    v569 = i$$40 < 256;
  }
  j$$12 = 0;
  i$$40 = 0;
  var v574 = i$$40 < 256;
  for (;v574;) {
    j$$12 = j$$12 + this.S[i$$40] + key$$14[i$$40 % key$$14.length] & 255;
    t$$9 = this.S[i$$40];
    JAM.set(this.S, i$$40, this.S[j$$12]);
    JAM.set(this.S, j$$12, t$$9);
    ++i$$40;
    v574 = i$$40 < 256;
  }
  this.i = 0;
  this.j = 0;
  return;
}
function ARC4next() {
  var t$$10;
  this.i = this.i + 1 & 255;
  this.j = this.j + this.S[this.i] & 255;
  t$$10 = this.S[this.i];
  this.S[this.i] = this.S[this.j];
  this.S[this.j] = t$$10;
  return this.S[t$$10 + this.S[this.i] & 255];
}
function prng_newstate() {
  return new Arcfour;
}
function rng_seed_int() {
  var x$$86 = 1122926989487;
  var v585 = rng_pptr;
  rng_pptr = rng_pptr + 1;
  rng_pool[v585] = rng_pool[v585] ^ x$$86 & 255;
  var v586 = rng_pptr;
  rng_pptr = rng_pptr + 1;
  rng_pool[v586] = rng_pool[v586] ^ x$$86 >> 8 & 255;
  var v587 = rng_pptr;
  rng_pptr = rng_pptr + 1;
  rng_pool[v587] = rng_pool[v587] ^ x$$86 >> 16 & 255;
  var v588 = rng_pptr;
  rng_pptr = rng_pptr + 1;
  rng_pool[v588] = rng_pool[v588] ^ x$$86 >> 24 & 255;
  if (rng_pptr >= rng_psize) {
    rng_pptr = rng_pptr - rng_psize;
  }
  return;
}
function rng_seed_time() {
  rng_seed_int();
  return;
}
function rng_get_byte() {
  if (rng_state == null) {
    rng_seed_time();
    rng_state = prng_newstate();
    JAM.call(rng_state.init, rng_state, [rng_pool]);
    rng_pptr = 0;
    var v590 = rng_pptr < rng_pool.length;
    for (;v590;) {
      rng_pool[rng_pptr] = 0;
      ++rng_pptr;
      v590 = rng_pptr < rng_pool.length;
    }
    rng_pptr = 0;
  }
  return rng_state.next();
}
function rng_get_bytes(ba) {
  var i$$41;
  i$$41 = 0;
  var v592 = i$$41 < ba.length;
  for (;v592;) {
    var v1679 = rng_get_byte();
    JAM.set(ba, i$$41, v1679);
    ++i$$41;
    v592 = i$$41 < ba.length;
  }
  return;
}
function SecureRandom() {
  return;
}
function parseBigInt(str$$6) {
  var r$$55 = 16;
  return new BigInteger(str$$6, r$$55);
}
function linebrk(s$$6, n$$23) {
  var ret = "";
  var i$$42 = 0;
  var v593 = i$$42 + n$$23 < s$$6.length;
  for (;v593;) {
    ret = ret + (JAM.call(s$$6.substring, s$$6, [i$$42, i$$42 + n$$23], JAM.policy.p1) + "\n");
    i$$42 = i$$42 + n$$23;
    v593 = i$$42 + n$$23 < s$$6.length;
  }
  return ret + JAM.call(s$$6.substring, s$$6, [i$$42, s$$6.length], JAM.policy.p1);
}
function byte2Hex(b$$7) {
  if (b$$7 < 16) {
    return "0" + JAM.call(b$$7.toString, b$$7, [16]);
  } else {
    return JAM.call(b$$7.toString, b$$7, [16]);
  }
  return;
}
function pkcs1pad2(s$$7, n$$24) {
  if (n$$24 < s$$7.length + 11) {
    JAM.call(alert, null, ["Message too long for RSA"]);
    return null;
  }
  var ba$$1 = new Array;
  var i$$43 = s$$7.length - 1;
  var v1231 = i$$43 >= 0;
  if (v1231) {
    v1231 = n$$24 > 0;
  }
  var v600 = v1231;
  for (;v600;) {
    var v599 = n$$24 = n$$24 - 1;
    var v1232 = i$$43;
    i$$43 = i$$43 - 1;
    var v1680 = s$$7.charCodeAt(v1232);
    ba$$1[v599] = v1680;
    var v1233 = i$$43 >= 0;
    if (v1233) {
      v1233 = n$$24 > 0;
    }
    v600 = v1233;
  }
  ba$$1[n$$24 = n$$24 - 1] = 0;
  var rng = new SecureRandom;
  var x$$87 = new Array;
  var v604 = n$$24 > 2;
  for (;v604;) {
    x$$87[0] = 0;
    var v602 = x$$87[0] == 0;
    for (;v602;) {
      JAM.call(rng.nextBytes, rng, [x$$87]);
      v602 = x$$87[0] == 0;
    }
    ba$$1[n$$24 = n$$24 - 1] = x$$87[0];
    v604 = n$$24 > 2;
  }
  ba$$1[n$$24 = n$$24 - 1] = 2;
  ba$$1[n$$24 = n$$24 - 1] = 0;
  return new BigInteger(ba$$1);
}
function RSAKey() {
  this.n = null;
  this.e = 0;
  this.d = null;
  this.p = null;
  this.q = null;
  this.dmp1 = null;
  this.dmq1 = null;
  this.coeff = null;
  return;
}
function RSASetPublic(N, E) {
  var v1597 = N != null;
  if (v1597) {
    v1597 = E != null;
  }
  var v1484 = v1597;
  if (v1484) {
    v1484 = N.length > 0;
  }
  var v1236 = v1484;
  if (v1236) {
    v1236 = E.length > 0;
  }
  if (v1236) {
    var v1681 = parseBigInt(N);
    this.n = v1681;
    var v1682 = parseInt(E, 16);
    this.e = v1682;
  } else {
    JAM.call(alert, null, ["Invalid RSA public key"]);
  }
  return;
}
function RSADoPublic(x$$88) {
  return JAM.call(x$$88.modPowInt, x$$88, [this.e, this.n], JAM.policy.p1);
}
function RSAEncrypt(text$$7) {
  var m$$15 = pkcs1pad2(text$$7, this.n.bitLength() + 7 >> 3);
  if (m$$15 == null) {
    return null;
  }
  var c$$13 = JAM.call(this.doPublic, this, [m$$15]);
  if (c$$13 == null) {
    return null;
  }
  var h$$7 = JAM.call(c$$13.toString, c$$13, [16]);
  if ((h$$7.length & 1) == 0) {
    return h$$7;
  } else {
    return "0" + h$$7;
  }
  return;
}
function pkcs1unpad2(d$$6, n$$25) {
  var b$$8 = d$$6.toByteArray();
  var i$$44 = 0;
  var v1239 = i$$44 < b$$8.length;
  if (v1239) {
    v1239 = b$$8[i$$44] == 0;
  }
  var v614 = v1239;
  for (;v614;) {
    ++i$$44;
    var v1240 = i$$44 < b$$8.length;
    if (v1240) {
      v1240 = b$$8[i$$44] == 0;
    }
    v614 = v1240;
  }
  var v1241 = b$$8.length - i$$44 != n$$25 - 1;
  if (!v1241) {
    v1241 = b$$8[i$$44] != 2;
  }
  if (v1241) {
    return null;
  }
  ++i$$44;
  var v617 = b$$8[i$$44] != 0;
  for (;v617;) {
    if ((i$$44 = i$$44 + 1) >= b$$8.length) {
      return null;
    }
    v617 = b$$8[i$$44] != 0;
  }
  var ret$$1 = "";
  var v618 = (i$$44 = i$$44 + 1) < b$$8.length;
  for (;v618;) {
    ret$$1 = ret$$1 + String.fromCharCode(b$$8[i$$44]);
    v618 = (i$$44 = i$$44 + 1) < b$$8.length;
  }
  return ret$$1;
}
function RSASetPrivate(N$$1, E$$1, D) {
  var v1601 = N$$1 != null;
  if (v1601) {
    v1601 = E$$1 != null;
  }
  var v1497 = v1601;
  if (v1497) {
    v1497 = N$$1.length > 0;
  }
  var v1251 = v1497;
  if (v1251) {
    v1251 = E$$1.length > 0;
  }
  if (v1251) {
    var v1683 = parseBigInt(N$$1);
    this.n = v1683;
    var v1684 = parseInt(E$$1, 16);
    this.e = v1684;
    var v1685 = parseBigInt(D);
    this.d = v1685;
  } else {
    JAM.call(alert, null, ["Invalid RSA private key"]);
  }
  return;
}
function RSASetPrivateEx(N$$2, E$$2, D$$1, P, Q, DP, DQ, C) {
  var v1603 = N$$2 != null;
  if (v1603) {
    v1603 = E$$2 != null;
  }
  var v1499 = v1603;
  if (v1499) {
    v1499 = N$$2.length > 0;
  }
  var v1252 = v1499;
  if (v1252) {
    v1252 = E$$2.length > 0;
  }
  if (v1252) {
    var v1686 = parseBigInt(N$$2);
    this.n = v1686;
    var v1687 = parseInt(E$$2, 16);
    this.e = v1687;
    var v1688 = parseBigInt(D$$1);
    this.d = v1688;
    var v1689 = parseBigInt(P);
    this.p = v1689;
    var v1690 = parseBigInt(Q);
    this.q = v1690;
    var v1691 = parseBigInt(DP);
    this.dmp1 = v1691;
    var v1692 = parseBigInt(DQ);
    this.dmq1 = v1692;
    var v1693 = parseBigInt(C);
    this.coeff = v1693;
  } else {
    JAM.call(alert, null, ["Invalid RSA private key"]);
  }
  return;
}
function RSAGenerate(B, E$$3) {
  var rng$$1 = new SecureRandom;
  var qs = B >> 1;
  var v1694 = parseInt(E$$3, 16);
  this.e = v1694;
  var ee = new BigInteger(E$$3, 16);
  for (;;) {
    for (;;) {
      var v1695 = new BigInteger(B - qs, 1, rng$$1);
      this.p = v1695;
      var v1651 = this.p;
      var v1637 = JAM.call(v1651.subtract, v1651, [BigInteger.ONE]);
      var v1605 = JAM.call(v1637.gcd, v1637, [ee]);
      var v1253 = JAM.call(v1605.compareTo, v1605, [BigInteger.ONE]) == 0;
      if (v1253) {
        var v1502 = this.p;
        v1253 = JAM.call(v1502.isProbablePrime, v1502, [10]);
      }
      if (v1253) {
        break;
      }
    }
    for (;;) {
      var v1696 = new BigInteger(qs, 1, rng$$1);
      this.q = v1696;
      var v1653 = this.q;
      var v1638 = JAM.call(v1653.subtract, v1653, [BigInteger.ONE]);
      var v1607 = JAM.call(v1638.gcd, v1638, [ee]);
      var v1254 = JAM.call(v1607.compareTo, v1607, [BigInteger.ONE]) == 0;
      if (v1254) {
        var v1504 = this.q;
        v1254 = JAM.call(v1504.isProbablePrime, v1504, [10]);
      }
      if (v1254) {
        break;
      }
    }
    var v1505 = this.p;
    if (JAM.call(v1505.compareTo, v1505, [this.q]) <= 0) {
      var t$$11 = this.p;
      this.p = this.q;
      this.q = t$$11;
    }
    var v625 = this.p;
    var p1 = JAM.call(v625.subtract, v625, [BigInteger.ONE]);
    var v627 = this.q;
    var q1 = JAM.call(v627.subtract, v627, [BigInteger.ONE]);
    var phi = JAM.call(p1.multiply, p1, [q1]);
    var v1507 = JAM.call(phi.gcd, phi, [ee]);
    if (JAM.call(v1507.compareTo, v1507, [BigInteger.ONE]) == 0) {
      var v629 = this.p;
      var v1697 = JAM.call(v629.multiply, v629, [this.q]);
      this.n = v1697;
      var v1698 = JAM.call(ee.modInverse, ee, [phi]);
      this.d = v1698;
      var v631 = this.d;
      var v1699 = JAM.call(v631.mod, v631, [p1]);
      this.dmp1 = v1699;
      var v632 = this.d;
      var v1700 = JAM.call(v632.mod, v632, [q1]);
      this.dmq1 = v1700;
      var v633 = this.q;
      var v1701 = JAM.call(v633.modInverse, v633, [this.p]);
      this.coeff = v1701;
      break;
    }
  }
  return;
}
function RSADoPrivate(x$$89) {
  var v1257 = this.p == null;
  if (!v1257) {
    v1257 = this.q == null;
  }
  if (v1257) {
    return JAM.call(x$$89.modPow, x$$89, [this.d, this.n], JAM.policy.p1);
  }
  var v639 = JAM.call(x$$89.mod, x$$89, [this.p]);
  var xp = JAM.call(v639.modPow, v639, [this.dmp1, this.p], JAM.policy.p1);
  var v642 = JAM.call(x$$89.mod, x$$89, [this.q]);
  var xq = JAM.call(v642.modPow, v642, [this.dmq1, this.q], JAM.policy.p1);
  var v646 = JAM.call(xp.compareTo, xp, [xq]) < 0;
  for (;v646;) {
    xp = JAM.call(xp.add, xp, [this.p]);
    v646 = JAM.call(xp.compareTo, xp, [xq]) < 0;
  }
  var v1609 = JAM.call(xp.subtract, xp, [xq]);
  var v1512 = JAM.call(v1609.multiply, v1609, [this.coeff]);
  var v1262 = JAM.call(v1512.mod, v1512, [this.p]);
  var v647 = JAM.call(v1262.multiply, v1262, [this.q]);
  return JAM.call(v647.add, v647, [xq]);
}
function RSADecrypt(ctext) {
  var c$$14 = parseBigInt(ctext);
  var m$$16 = JAM.call(this.doPrivate, this, [c$$14]);
  if (m$$16 == null) {
    return null;
  }
  return pkcs1unpad2(m$$16, this.n.bitLength() + 7 >> 3);
}
function encrypt() {
  var RSA = new RSAKey;
  JAM.call(RSA.setPublic, RSA, [nValue, eValue], JAM.policy.p1);
  JAM.call(RSA.setPrivateEx, RSA, [nValue, eValue, dValue, pValue, qValue, dmp1Value, dmq1Value, coeffValue], JAM.policy.p1);
  encrypted = JAM.call(RSA.encrypt, RSA, [TEXT]);
  return;
}
function decrypt() {
  var RSA$$1 = new RSAKey;
  JAM.call(RSA$$1.setPublic, RSA$$1, [nValue, eValue], JAM.policy.p1);
  JAM.call(RSA$$1.setPrivateEx, RSA$$1, [nValue, eValue, dValue, pValue, qValue, dmp1Value, dmq1Value, coeffValue], JAM.policy.p1);
  var decrypted = JAM.call(RSA$$1.decrypt, RSA$$1, [encrypted]);
  if (decrypted != TEXT) {
    throw new Error("Crypto operation failed");
  }
  return;
}
function ShowBox(name$$32) {
  function v2(entry) {
    if (name$$32.valueOf() === entry.valueOf()) {
      var box1 = document.getElementById("Box-" + name$$32 + "Latency");
      box1.style.visibility = "visible";
    }
    return;
  }
  var box = document.getElementById("Box-" + name$$32);
  box.style.visibility = "visible";
  var bar = document.getElementById("progress-bar").style.width = "" + (completed = completed + 1) / benchmarks * 100 + "%";
  latencyBenchmarks.forEach(v2);
  return;
}
function AddResult(name$$33, result$$2) {
  console.log(name$$33 + ": " + result$$2);
  var box$$1 = document.getElementById("Result-" + name$$33);
  JAM.set(box$$1, "innerHTML", result$$2);
  return;
}
function AddError(name$$34, error$$2) {
  console.log(name$$34 + ": " + error$$2.message);
  if (error$$2 == "TypedArrayUnsupported") {
    AddResult(name$$34, "<b>Unsupported</b>");
  } else {
    if (error$$2 == "PerformanceNowUnsupported") {
      AddResult(name$$34, "<b>Timer error</b>");
    } else {
      AddResult(name$$34, "<b>Error</b>");
    }
  }
  success = false;
  return;
}
function AddScore(score$$2) {
  var status = document.getElementById("main-banner");
  if (success) {
    JAM.set(status, "innerHTML", "Octane Score: " + score$$2);
  } else {
    JAM.set(status, "innerHTML", "Octane Score (incomplete): " + score$$2);
  }
  document.getElementById("progress-bar-container").style.visibility = "hidden";
  document.getElementById("bottom-text").style.visibility = "visible";
  document.getElementById("inside-anchor").removeChild(document.getElementById("bar-appendix"));
  document.getElementById("alertbox").style.visibility = "hidden";
  return;
}
function Run() {
  JAM.set(document.getElementById("main-banner"), "innerHTML", "Running Octane...");
  JAM.set(document.getElementById("bar-appendix"), "innerHTML", '<br/><div class="progress progress-striped" id="progress-bar-container" style="visibility:hidden"><div class="bar"style="width: 0%;" id="progress-bar"></div></div>');
  var anchor = document.getElementById("run-octane");
  var parent = document.getElementById("main-container");
  JAM.call(parent.appendChild, parent, [document.getElementById("inside-anchor")]);
  parent.removeChild(anchor);
  JAM.set(document.getElementById("startup-text"), "innerHTML", "");
  document.getElementById("progress-bar-container").style.visibility = "visible";
  BenchmarkSuite.RunSuites();
  return;
}
function CheckCompatibility() {
  var v1277 = typeof Uint8Array != "undefined";
  if (v1277) {
    v1277 = typeof Float64Array != "undefined";
  }
  var v672 = v1277;
  if (v672) {
    v672 = typeof(new Uint8Array(0)).subarray != "undefined";
  }
  var hasTypedArrays = v672;
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
  return;
}
function Load() {
  JAM.call(setTimeout, null, [CheckCompatibility, 200]);
  return;
}
var performance = performance || {};
var v677 = performance;
var v1702 = v3();
v677.now = v1702;
BenchmarkResult.prototype.valueOf = v4;
BenchmarkSuite.suites = [];
BenchmarkSuite.version = "9";
BenchmarkSuite.config = {doWarmup:undefined, doDeterministic:undefined};
alert = v5;
BenchmarkSuite.ResetRNG = v8;
BenchmarkSuite.RunSuites = v9;
BenchmarkSuite.CountBenchmarks = v10;
BenchmarkSuite.GeometricMean = v11;
BenchmarkSuite.GeometricMeanTime = v12;
BenchmarkSuite.GeometricMeanLatency = v13;
BenchmarkSuite.FormatScore = v14;
BenchmarkSuite.prototype.NotifyStep = v15;
BenchmarkSuite.prototype.NotifyResult = v16;
BenchmarkSuite.prototype.NotifySkipped = v17;
BenchmarkSuite.prototype.NotifyError = v18;
BenchmarkSuite.prototype.RunSingleBenchmark = v19;
BenchmarkSuite.prototype.RunStep = v20;
var Crypto = new BenchmarkSuite("Crypto", [266181], [new Benchmark("Encrypt", 3900, encrypt), new Benchmark("Decrypt", 220, decrypt)]);
var dbits;
var BI_DB;
var BI_DM;
var BI_DV;
var BI_FP;
var BI_FV;
var BI_F1;
var BI_F2;
var canary = 0xdeadbeefcafe;
var j_lm = (canary & 16777215) == 15715070;
setupEngine = v21;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
var BI_RC = new Array;
var rr;
var vv;
rr = "0".charCodeAt(0);
vv = 0;
var v689 = vv <= 9;
for (;v689;) {
  var v688 = rr;
  rr = rr + 1;
  BI_RC[v688] = vv;
  ++vv;
  v689 = vv <= 9;
}
rr = "a".charCodeAt(0);
vv = 10;
var v691 = vv < 36;
for (;v691;) {
  var v690 = rr;
  rr = rr + 1;
  BI_RC[v690] = vv;
  ++vv;
  v691 = vv < 36;
}
rr = "A".charCodeAt(0);
vv = 10;
var v693 = vv < 36;
for (;v693;) {
  var v692 = rr;
  rr = rr + 1;
  BI_RC[v692] = vv;
  ++vv;
  v693 = vv < 36;
}
Classic.prototype.convert = cConvert;
Classic.prototype.revert = cRevert;
Classic.prototype.reduce = cReduce;
Classic.prototype.mulTo = cMulTo;
Classic.prototype.sqrTo = cSqrTo;
Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;
BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.isEven = bnpIsEven;
BigInteger.prototype.exp = bnpExp;
BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.modPowInt = bnModPowInt;
var v726 = BigInteger;
var v1703 = nbv(0);
v726.ZERO = v1703;
var v727 = BigInteger;
var v1704 = nbv(1);
v727.ONE = v1704;
NullExp.prototype.convert = nNop;
NullExp.prototype.revert = nNop;
NullExp.prototype.mulTo = nMulTo;
NullExp.prototype.sqrTo = nSqrTo;
Barrett.prototype.convert = barrettConvert;
Barrett.prototype.revert = barrettRevert;
Barrett.prototype.reduce = barrettReduce;
Barrett.prototype.mulTo = barrettMulTo;
Barrett.prototype.sqrTo = barrettSqrTo;
var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509];
var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];
BigInteger.prototype.chunkSize = bnpChunkSize;
BigInteger.prototype.toRadix = bnpToRadix;
BigInteger.prototype.fromRadix = bnpFromRadix;
BigInteger.prototype.fromNumber = bnpFromNumber;
BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
BigInteger.prototype.changeBit = bnpChangeBit;
BigInteger.prototype.addTo = bnpAddTo;
BigInteger.prototype.dMultiply = bnpDMultiply;
BigInteger.prototype.dAddOffset = bnpDAddOffset;
BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
BigInteger.prototype.modInt = bnpModInt;
BigInteger.prototype.millerRabin = bnpMillerRabin;
BigInteger.prototype.clone = bnClone;
BigInteger.prototype.intValue = bnIntValue;
BigInteger.prototype.byteValue = bnByteValue;
BigInteger.prototype.shortValue = bnShortValue;
BigInteger.prototype.signum = bnSigNum;
BigInteger.prototype.toByteArray = bnToByteArray;
BigInteger.prototype.equals = bnEquals;
BigInteger.prototype.min = bnMin;
BigInteger.prototype.max = bnMax;
BigInteger.prototype.and = bnAnd;
BigInteger.prototype.or = bnOr;
BigInteger.prototype.xor = bnXor;
BigInteger.prototype.andNot = bnAndNot;
BigInteger.prototype.not = bnNot;
BigInteger.prototype.shiftLeft = bnShiftLeft;
BigInteger.prototype.shiftRight = bnShiftRight;
BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
BigInteger.prototype.bitCount = bnBitCount;
BigInteger.prototype.testBit = bnTestBit;
BigInteger.prototype.setBit = bnSetBit;
BigInteger.prototype.clearBit = bnClearBit;
BigInteger.prototype.flipBit = bnFlipBit;
BigInteger.prototype.add = bnAdd;
BigInteger.prototype.subtract = bnSubtract;
BigInteger.prototype.multiply = bnMultiply;
BigInteger.prototype.divide = bnDivide;
BigInteger.prototype.remainder = bnRemainder;
BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
BigInteger.prototype.modPow = bnModPow;
BigInteger.prototype.modInverse = bnModInverse;
BigInteger.prototype.pow = bnPow;
BigInteger.prototype.gcd = bnGCD;
BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
Arcfour.prototype.init = ARC4init;
Arcfour.prototype.next = ARC4next;
var rng_psize = 256;
var rng_state;
var rng_pool;
var rng_pptr;
if (rng_pool == null) {
  rng_pool = new Array;
  rng_pptr = 0;
  var t;
  var v790 = rng_pptr < rng_psize;
  for (;v790;) {
    t = Math.floor(65536 * Math.random());
    var v788 = rng_pptr;
    rng_pptr = rng_pptr + 1;
    rng_pool[v788] = t >>> 8;
    var v789 = rng_pptr;
    rng_pptr = rng_pptr + 1;
    rng_pool[v789] = t & 255;
    v790 = rng_pptr < rng_psize;
  }
  rng_pptr = 0;
  rng_seed_time();
}
SecureRandom.prototype.nextBytes = rng_get_bytes;
RSAKey.prototype.doPublic = RSADoPublic;
RSAKey.prototype.setPublic = RSASetPublic;
RSAKey.prototype.encrypt = RSAEncrypt;
RSAKey.prototype.doPrivate = RSADoPrivate;
RSAKey.prototype.setPrivate = RSASetPrivate;
RSAKey.prototype.setPrivateEx = RSASetPrivateEx;
RSAKey.prototype.generate = RSAGenerate;
RSAKey.prototype.decrypt = RSADecrypt;
nValue = "a5261939975948bb7a58dffe5ff54e65f0498f9175f5a09288810b8975871e99af3b5dd94057b0fc07535f5f97444504fa35169d461d0d30cf0192e307727c065168c788771c561a9400fb49175e9e6aa4e23fe11af69e9412dd23b0cb6684c4c2429bce139e848ab26d0829073351f4acd36074eafd036a5eb83359d2a698d3";
eValue = "10001";
dValue = "8e9912f6d3645894e8d38cb58c0db81ff516cf4c7e5a14c7f1eddb1459d2cded4d8d293fc97aee6aefb861859c8b6a3d1dfe710463e1f9ddc72048c09751971c4a580aa51eb523357a3cc48d31cfad1d4a165066ed92d4748fb6571211da5cb14bc11b6e2df7c1a559e6d5ac1cd5c94703a22891464fba23d0d965086277a161";
pValue = "d090ce58a92c75233a6486cb0a9209bf3583b64f540c76f5294bb97d285eed33aec220bde14b2417951178ac152ceab6da7090905b478195498b352048f15e7d";
qValue = "cab575dc652bb66df15a0359609d51d1db184750c00c6698b90ef3465c99655103edbf0d54c56aec0ce3c4d22592338092a126a0cc49f65a4a30d222b411e58f";
dmp1Value = "1a24bca8e273df2f0e47c199bbf678604e7df7215480c77c8db39f49b000ce2cf7500038acfff5433b7d582a01f1826e6f4d42e1c57f5e1fef7b12aabc59fd25";
dmq1Value = "3d06982efbbe47339e1f6d36b1216b8a741d410b0c662f54f7118b27b9a4ec9d914337eb39841d8666f3034408cf94f5b62f11c402fc994fe15a05493150d9fd";
coeffValue = "3a3e731acd8960b7ff9eb81a7ff93bd1cfa74cbd56987db58b4594fb09c09084db1734c8143f98b602b981aaa9243ca28deb69b5b280ee8dcee0fd2625e53250";
JAM.call(setupEngine, null, [am3, 28], JAM.policy.p1);
var TEXT = "The quick brown fox jumped over the extremely lazy frog! " + "Now is the time for all good men to come to the party.";
var encrypted;
var completed = 0;
var benchmarks = BenchmarkSuite.CountBenchmarks();
var success = true;
var latencyBenchmarks = ["Splay", "Mandreel"];
var v801;
if (typeof skipBenchmarks === "undefined") {
  v801 = [];
} else {
  v801 = skipBenchmarks;
}
var skipBenchmarks = v801
