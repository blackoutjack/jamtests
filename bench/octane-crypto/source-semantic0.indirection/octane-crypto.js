function v21(fn, bits) {
  var v22 = BigInteger.prototype;
  v22.am = fn;
  dbits = bits;
  BI_DB = dbits;
  var v23 = 1 << dbits;
  BI_DM = v23 - 1;
  BI_DV = 1 << dbits;
  BI_FP = 52;
  BI_FV = JAM.call(Math.pow, Math, [2, BI_FP], JAM.policy.p1);
  BI_F1 = BI_FP - dbits;
  var v24 = 2 * dbits;
  BI_F2 = v24 - BI_FP;
  return;
}
function v20(runner$$2) {
  function RunNextSetup() {
    var v26 = index$$40 < length$$12;
    if (v26) {
      try {
        var v802 = suite$$1.benchmarks;
        var v25 = v802[index$$40];
        v25.Setup();
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
      var v803 = suite$$1.benchmarks;
      var v27 = v803[index$$40];
      data$$20 = JAM.call(suite$$1.RunSingleBenchmark, suite$$1, [v27, data$$20], JAM.policy.p1);
    } catch (e$$5) {
      JAM.call(suite$$1.NotifyError, suite$$1, [e$$5]);
      return null;
    }
    var v28;
    var v804 = data$$20 == null;
    if (v804) {
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
      var v29 = v805[v806];
      v29.TearDown();
    } catch (e$$6) {
      JAM.call(suite$$1.NotifyError, suite$$1, [e$$6]);
      return null;
    }
    return RunNextSetup;
  }
  BenchmarkSuite.ResetRNG();
  this.results = [];
  this.runner = runner$$2;
  var v30 = this.benchmarks;
  var length$$12 = v30.length;
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
      var v1287 = benchmark$$1.deterministicIterations;
      v807 = i$$5 < v1287;
    } else {
      v807 = elapsed < 1E3;
    }
    var v32 = v807;
    for (;v32;) {
      benchmark$$1.run();
      var v31 = new Date;
      elapsed = v31 - start$$4;
      i$$5++;
      var v808;
      if (doDeterministic$$1) {
        var v1288 = benchmark$$1.deterministicIterations;
        v808 = i$$5 < v1288;
      } else {
        v808 = elapsed < 1E3;
      }
      v32 = v808;
    }
    var v33 = data$$19 != null;
    if (v33) {
      var v809 = data$$19.runs;
      data$$19.runs = v809 + i$$5;
      var v810 = data$$19.elapsed;
      data$$19.elapsed = v810 + elapsed;
    }
    return;
  }
  var config = BenchmarkSuite.config;
  var v34;
  var v1289 = config.doWarmup;
  var v811 = v1289 !== undefined;
  if (v811) {
    v34 = config.doWarmup;
  } else {
    v34 = benchmark$$1.doWarmup;
  }
  var doWarmup$$1 = v34;
  var v35;
  var v1290 = config.doDeterministic;
  var v812 = v1290 !== undefined;
  if (v812) {
    v35 = config.doDeterministic;
  } else {
    v35 = benchmark$$1.doDeterministic;
  }
  var doDeterministic$$1 = v35;
  var v813 = !doWarmup$$1;
  if (v813) {
    v813 = data$$18 == null;
  }
  var v36 = v813;
  if (v36) {
    data$$18 = {runs:0, elapsed:0};
  }
  var v42 = data$$18 == null;
  if (v42) {
    Measure(null);
    return {runs:0, elapsed:0};
  } else {
    Measure(data$$18);
    var v814 = data$$18.runs;
    var v815 = benchmark$$1.minIterations;
    var v37 = v814 < v815;
    if (v37) {
      return data$$18;
    }
    var v816 = data$$18.elapsed;
    var v38 = v816 * 1E3;
    var v39 = data$$18.runs;
    var usec = v38 / v39;
    var v40;
    var v1291 = benchmark$$1.rmsResult;
    var v817 = v1291 != null;
    if (v817) {
      v40 = benchmark$$1.rmsResult();
    } else {
      v40 = 0;
    }
    var rms = v40;
    var v41 = new BenchmarkResult(benchmark$$1, usec, rms);
    JAM.call(this.NotifyStep, this, [v41]);
    return null;
  }
  return;
}
function v18(error$$1) {
  var v818 = this.runner;
  var v45 = v818.NotifyError;
  if (v45) {
    var v43 = this.runner;
    var v44 = this.name;
    JAM.call(v43.NotifyError, v43, [v44, error$$1], JAM.policy.p1);
  }
  var v819 = this.runner;
  var v48 = v819.NotifyStep;
  if (v48) {
    var v46 = this.runner;
    var v47 = this.name;
    JAM.call(v46.NotifyStep, v46, [v47]);
  }
  return;
}
function v17(runner$$1) {
  var v49 = BenchmarkSuite.scores;
  v49.push(1);
  var v51 = runner$$1.NotifyResult;
  if (v51) {
    var v50 = this.name;
    JAM.call(runner$$1.NotifyResult, runner$$1, [v50, "Skipped"], JAM.policy.p1);
  }
  return;
}
function v16() {
  var v52 = this.results;
  var mean = JAM.call(BenchmarkSuite.GeometricMeanTime, BenchmarkSuite, [v52]);
  var v820 = this.reference;
  var v53 = v820[0];
  var score$$1 = v53 / mean;
  var v54 = BenchmarkSuite.scores;
  v54.push(score$$1);
  var v821 = this.runner;
  var v58 = v821.NotifyResult;
  if (v58) {
    var v55 = 100 * score$$1;
    var formatted$$1 = JAM.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [v55]);
    var v56 = this.runner;
    var v57 = this.name;
    JAM.call(v56.NotifyResult, v56, [v57, formatted$$1], JAM.policy.p1);
  }
  var v1292 = this.reference;
  var v822 = v1292.length;
  var v67 = v822 == 2;
  if (v67) {
    var v59 = this.results;
    var meanLatency = JAM.call(BenchmarkSuite.GeometricMeanLatency, BenchmarkSuite, [v59]);
    var v66 = meanLatency != 0;
    if (v66) {
      var v823 = this.reference;
      var v60 = v823[1];
      var scoreLatency = v60 / meanLatency;
      var v61 = BenchmarkSuite.scores;
      v61.push(scoreLatency);
      var v824 = this.runner;
      var v65 = v824.NotifyResult;
      if (v65) {
        var v62 = 100 * scoreLatency;
        var formattedLatency = JAM.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [v62]);
        var v63 = this.runner;
        var v825 = this.name;
        var v64 = v825 + "Latency";
        JAM.call(v63.NotifyResult, v63, [v64, formattedLatency], JAM.policy.p1);
      }
    }
  }
  return;
}
function v15(result$$1) {
  var v68 = this.results;
  v68.push(result$$1);
  var v826 = this.runner;
  var v71 = v826.NotifyStep;
  if (v71) {
    var v69 = this.runner;
    var v827 = result$$1.benchmark;
    var v70 = v827.name;
    JAM.call(v69.NotifyStep, v69, [v70]);
  }
  return;
}
function v14(value$$27) {
  var v72 = value$$27 > 100;
  if (v72) {
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
  var v828 = measurements$$1.length;
  var v74 = i$$4 < v828;
  for (;v74;) {
    var v1293 = measurements$$1[i$$4];
    var v829 = v1293.latency;
    var v73 = v829 != 0;
    if (v73) {
      var v1523 = measurements$$1[i$$4];
      var v1294 = v1523.latency;
      var v830 = Math.log(v1294);
      log$$2 = log$$2 + v830;
      hasLatencyResult = true;
    }
    i$$4++;
    var v831 = measurements$$1.length;
    v74 = i$$4 < v831;
  }
  if (hasLatencyResult) {
    var v75 = Math.E;
    var v832 = measurements$$1.length;
    var v76 = log$$2 / v832;
    return JAM.call(Math.pow, Math, [v75, v76], JAM.policy.p1);
  } else {
    return 0;
  }
  return;
}
function v12(measurements) {
  var log$$1 = 0;
  var i$$3 = 0;
  var v833 = measurements.length;
  var v77 = i$$3 < v833;
  for (;v77;) {
    var v1524 = measurements[i$$3];
    var v1295 = v1524.time;
    var v834 = Math.log(v1295);
    log$$1 = log$$1 + v834;
    i$$3++;
    var v835 = measurements.length;
    v77 = i$$3 < v835;
  }
  var v78 = Math.E;
  var v836 = measurements.length;
  var v79 = log$$1 / v836;
  return JAM.call(Math.pow, Math, [v78, v79], JAM.policy.p1);
}
function v11() {
  var numbers = BenchmarkSuite.scores;
  var log = 0;
  var i$$2 = 0;
  var v837 = numbers.length;
  var v80 = i$$2 < v837;
  for (;v80;) {
    var v1296 = numbers[i$$2];
    var v838 = Math.log(v1296);
    log = log + v838;
    i$$2++;
    var v839 = numbers.length;
    v80 = i$$2 < v839;
  }
  var v81 = Math.E;
  var v840 = numbers.length;
  var v82 = log / v840;
  return JAM.call(Math.pow, Math, [v81, v82], JAM.policy.p1);
}
function v10() {
  var result = 0;
  var suites$$1 = BenchmarkSuite.suites;
  var i$$1 = 0;
  var v841 = suites$$1.length;
  var v83 = i$$1 < v841;
  for (;v83;) {
    var v1525 = suites$$1[i$$1];
    var v1297 = v1525.benchmarks;
    var v842 = v1297.length;
    result = result + v842;
    i$$1++;
    var v843 = suites$$1.length;
    v83 = i$$1 < v843;
  }
  return result;
}
function v9() {
  function RunStep() {
    var v844 = continuation;
    var v1298 = !v844;
    if (v1298) {
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
        var v86 = runner.NotifyStart;
        if (v86) {
          var v85 = suite.name;
          JAM.call(runner.NotifyStart, runner, [v85]);
        }
        var v1299 = suite.name;
        var v845 = skipBenchmarks$$1.indexOf(v1299);
        var v87 = v845 > -1;
        if (v87) {
          JAM.call(suite.NotifySkipped, suite, [runner]);
        } else {
          continuation = JAM.call(suite.RunStep, suite, [runner]);
        }
      }
      var v1300 = continuation;
      if (v1300) {
        var v1526 = typeof window;
        v1300 = v1526 != "undefined";
      }
      var v846 = v1300;
      if (v846) {
        v846 = window.setTimeout;
      }
      var v88 = v846;
      if (v88) {
        JAM.call(window.setTimeout, window, [RunStep, 25], JAM.policy.p1);
        return;
      }
      var v847 = continuation;
      var v1301 = !v847;
      if (v1301) {
        v847 = index$$39 < length$$11;
      }
      v89 = v847;
    }
    var v91 = runner.NotifyScore;
    if (v91) {
      var score = BenchmarkSuite.GeometricMean();
      var v90 = 100 * score;
      var formatted = JAM.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [v90]);
      JAM.call(runner.NotifyScore, runner, [formatted]);
    }
    return;
  }
  var runner = {NotifyStart:ShowBox, NotifyError:AddError, NotifyResult:AddResult, NotifyScore:AddScore};
  var skipBenchmarks$$1 = skipBenchmarks;
  var v92;
  var v1302 = typeof skipBenchmarks$$1;
  var v848 = v1302 === "undefined";
  if (v848) {
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
      var v849 = seed + 2127912214;
      var v850 = seed << 12;
      var v93 = v849 + v850;
      seed = v93 & 4294967295;
      var v851 = seed ^ 3345072700;
      var v852 = seed >>> 19;
      var v94 = v851 ^ v852;
      seed = v94 & 4294967295;
      var v853 = seed + 374761393;
      var v854 = seed << 5;
      var v95 = v853 + v854;
      seed = v95 & 4294967295;
      var v855 = seed + 3550635116;
      var v856 = seed << 9;
      var v96 = v855 ^ v856;
      seed = v96 & 4294967295;
      var v857 = seed + 4251993797;
      var v858 = seed << 3;
      var v97 = v857 + v858;
      seed = v97 & 4294967295;
      var v859 = seed ^ 3042594569;
      var v860 = seed >>> 16;
      var v98 = v859 ^ v860;
      seed = v98 & 4294967295;
      var v99 = seed & 268435455;
      return v99 / 268435456;
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
  var v1640 = !v1616;
  if (v1640) {
    v1616 = performance.mozNow;
  }
  var v1527 = v1616;
  var v1617 = !v1527;
  if (v1617) {
    v1527 = performance.msNow;
  }
  var v1303 = v1527;
  var v1528 = !v1303;
  if (v1528) {
    v1303 = performance.oNow;
  }
  var v861 = v1303;
  var v1304 = !v861;
  if (v1304) {
    v861 = performance.webkitNow;
  }
  var v101 = v861;
  var v862 = !v101;
  if (v862) {
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
  var v106 = BenchmarkSuite.suites;
  v106.push(this);
  return;
}
function BigInteger(a, b, c) {
  var v1662 = new Array;
  this.array = v1662;
  var v109 = a != null;
  if (v109) {
    var v863 = typeof a;
    var v108 = "number" == v863;
    if (v108) {
      JAM.call(this.fromNumber, this, [a, b, c], JAM.policy.p1);
    } else {
      var v864 = b == null;
      if (v864) {
        var v1305 = typeof a;
        v864 = "string" != v1305;
      }
      var v107 = v864;
      if (v107) {
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
  var v865 = n$$1 = n$$1 - 1;
  var v113 = v865 >= 0;
  for (;v113;) {
    var v1529 = i$$6;
    i$$6 = i$$6 + 1;
    var v1306 = this_array$$1[v1529];
    var v866 = x$$47 * v1306;
    var v867 = w_array[j];
    var v110 = v866 + v867;
    var v = v110 + c$$1;
    var v111 = v / 67108864;
    c$$1 = Math.floor(v111);
    var v112 = j;
    j = j + 1;
    w_array[v112] = v & 67108863;
    var v868 = n$$1 = n$$1 - 1;
    v113 = v868 >= 0;
  }
  return c$$1;
}
function am2(i$$7, x$$48, w$$6, j$$1, c$$2, n$$2) {
  var this_array$$2 = this.array;
  var w_array$$1 = w$$6.array;
  var xl = x$$48 & 32767;
  var xh = x$$48 >> 15;
  var v869 = n$$2 = n$$2 - 1;
  var v123 = v869 >= 0;
  for (;v123;) {
    var v114 = this_array$$2[i$$7];
    var l = v114 & 32767;
    var v870 = i$$7;
    i$$7 = i$$7 + 1;
    var v115 = this_array$$2[v870];
    var h$$4 = v115 >> 15;
    var v116 = xh * l;
    var v117 = h$$4 * xl;
    var m = v116 + v117;
    var v1307 = xl * l;
    var v1530 = m & 32767;
    var v1308 = v1530 << 15;
    var v871 = v1307 + v1308;
    var v872 = w_array$$1[j$$1];
    var v118 = v871 + v872;
    var v119 = c$$2 & 1073741823;
    l = v118 + v119;
    var v1309 = l >>> 30;
    var v1310 = m >>> 15;
    var v873 = v1309 + v1310;
    var v874 = xh * h$$4;
    var v120 = v873 + v874;
    var v121 = c$$2 >>> 30;
    c$$2 = v120 + v121;
    var v122 = j$$1;
    j$$1 = j$$1 + 1;
    w_array$$1[v122] = l & 1073741823;
    var v875 = n$$2 = n$$2 - 1;
    v123 = v875 >= 0;
  }
  return c$$2;
}
function am3(i$$8, x$$49, w$$7, j$$2, c$$3, n$$3) {
  var this_array$$3 = this.array;
  var w_array$$2 = w$$7.array;
  var xl$$1 = x$$49 & 16383;
  var xh$$1 = x$$49 >> 14;
  var v876 = n$$3 = n$$3 - 1;
  var v132 = v876 >= 0;
  for (;v132;) {
    var v124 = this_array$$3[i$$8];
    var l$$1 = v124 & 16383;
    var v877 = i$$8;
    i$$8 = i$$8 + 1;
    var v125 = this_array$$3[v877];
    var h$$5 = v125 >> 14;
    var v126 = xh$$1 * l$$1;
    var v127 = h$$5 * xl$$1;
    var m$$1 = v126 + v127;
    var v1311 = xl$$1 * l$$1;
    var v1531 = m$$1 & 16383;
    var v1312 = v1531 << 14;
    var v878 = v1311 + v1312;
    var v879 = w_array$$2[j$$2];
    var v128 = v878 + v879;
    l$$1 = v128 + c$$3;
    var v880 = l$$1 >> 28;
    var v881 = m$$1 >> 14;
    var v129 = v880 + v881;
    var v130 = xh$$1 * h$$5;
    c$$3 = v129 + v130;
    var v131 = j$$2;
    j$$2 = j$$2 + 1;
    w_array$$2[v131] = l$$1 & 268435455;
    var v882 = n$$3 = n$$3 - 1;
    v132 = v882 >= 0;
  }
  return c$$3;
}
function am4(i$$9, x$$50, w$$8, j$$3, c$$4, n$$4) {
  var this_array$$4 = this.array;
  var w_array$$3 = w$$8.array;
  var xl$$2 = x$$50 & 8191;
  var xh$$2 = x$$50 >> 13;
  var v883 = n$$4 = n$$4 - 1;
  var v141 = v883 >= 0;
  for (;v141;) {
    var v133 = this_array$$4[i$$9];
    var l$$2 = v133 & 8191;
    var v884 = i$$9;
    i$$9 = i$$9 + 1;
    var v134 = this_array$$4[v884];
    var h$$6 = v134 >> 13;
    var v135 = xh$$2 * l$$2;
    var v136 = h$$6 * xl$$2;
    var m$$2 = v135 + v136;
    var v1313 = xl$$2 * l$$2;
    var v1532 = m$$2 & 8191;
    var v1314 = v1532 << 13;
    var v885 = v1313 + v1314;
    var v886 = w_array$$3[j$$3];
    var v137 = v885 + v886;
    l$$2 = v137 + c$$4;
    var v887 = l$$2 >> 26;
    var v888 = m$$2 >> 13;
    var v138 = v887 + v888;
    var v139 = xh$$2 * h$$6;
    c$$4 = v138 + v139;
    var v140 = j$$3;
    j$$3 = j$$3 + 1;
    w_array$$3[v140] = l$$2 & 67108863;
    var v889 = n$$4 = n$$4 - 1;
    v141 = v889 >= 0;
  }
  return c$$4;
}
function int2char(n$$5) {
  return BI_RM.charAt(n$$5);
}
function intAt(s$$3, i$$10) {
  var v142 = BI_RC;
  var v143 = s$$3.charCodeAt(i$$10);
  var c$$5 = v142[v143];
  var v144;
  var v890 = c$$5 == null;
  if (v890) {
    v144 = -1;
  } else {
    v144 = c$$5;
  }
  return v144;
}
function bnpCopyTo(r) {
  var this_array$$5 = this.array;
  var r_array = r.array;
  var v145 = this.t;
  var i$$11 = v145 - 1;
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
  var v891 = x$$51 < 0;
  if (v891) {
    v147 = -1;
  } else {
    v147 = 0;
  }
  this.s = v147;
  var v149 = x$$51 > 0;
  if (v149) {
    this_array$$6[0] = x$$51;
  } else {
    var v148 = x$$51 < -1;
    if (v148) {
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
  var v155 = b$$1 == 16;
  if (v155) {
    k = 4;
  } else {
    var v154 = b$$1 == 8;
    if (v154) {
      k = 3;
    } else {
      var v153 = b$$1 == 256;
      if (v153) {
        k = 8;
      } else {
        var v152 = b$$1 == 2;
        if (v152) {
          k = 1;
        } else {
          var v151 = b$$1 == 32;
          if (v151) {
            k = 5;
          } else {
            var v150 = b$$1 == 4;
            if (v150) {
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
  var v892 = i$$13 = i$$13 - 1;
  var v166 = v892 >= 0;
  for (;v166;) {
    var v156;
    var v894 = k == 8;
    if (v894) {
      var v893 = s$$4[i$$13];
      v156 = v893 & 255;
    } else {
      v156 = intAt(s$$4, i$$13);
    }
    var x$$52 = v156;
    var v158 = x$$52 < 0;
    if (v158) {
      var v895 = s$$4.charAt(i$$13);
      var v157 = v895 == "-";
      if (v157) {
        mi = true;
      }
      var v896 = i$$13 = i$$13 - 1;
      v166 = v896 >= 0;
      continue;
    }
    mi = false;
    var v164 = sh$$2 == 0;
    if (v164) {
      var v159 = this.t;
      var v1315 = this.t;
      this.t = v1315 + 1;
      this_array$$7[v159] = x$$52;
    } else {
      var v897 = sh$$2 + k;
      var v163 = v897 > BI_DB;
      if (v163) {
        var v898 = this.t;
        var v160 = v898 - 1;
        var v1316 = this_array$$7[v160];
        var v1655 = BI_DB - sh$$2;
        var v1641 = 1 << v1655;
        var v1618 = v1641 - 1;
        var v1533 = x$$52 & v1618;
        var v1317 = v1533 << sh$$2;
        this_array$$7[v160] = v1316 | v1317;
        var v161 = this.t;
        var v1318 = this.t;
        this.t = v1318 + 1;
        var v899 = BI_DB - sh$$2;
        this_array$$7[v161] = x$$52 >> v899;
      } else {
        var v900 = this.t;
        var v162 = v900 - 1;
        var v1319 = this_array$$7[v162];
        var v1320 = x$$52 << sh$$2;
        this_array$$7[v162] = v1319 | v1320;
      }
    }
    sh$$2 = sh$$2 + k;
    var v165 = sh$$2 >= BI_DB;
    if (v165) {
      sh$$2 = sh$$2 - BI_DB;
    }
    var v901 = i$$13 = i$$13 - 1;
    v166 = v901 >= 0;
  }
  var v902 = k == 8;
  if (v902) {
    var v1534 = s$$4[0];
    var v1321 = v1534 & 128;
    v902 = v1321 != 0;
  }
  var v169 = v902;
  if (v169) {
    this.s = -1;
    var v168 = sh$$2 > 0;
    if (v168) {
      var v903 = this.t;
      var v167 = v903 - 1;
      var v1322 = this_array$$7[v167];
      var v1642 = BI_DB - sh$$2;
      var v1619 = 1 << v1642;
      var v1535 = v1619 - 1;
      var v1323 = v1535 << sh$$2;
      this_array$$7[v167] = v1322 | v1323;
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
  var v171 = this.s;
  var c$$6 = v171 & BI_DM;
  var v1324 = this.t;
  var v904 = v1324 > 0;
  if (v904) {
    var v1620 = this.t;
    var v1536 = v1620 - 1;
    var v1325 = this_array$$8[v1536];
    v904 = v1325 == c$$6;
  }
  var v172 = v904;
  for (;v172;) {
    --this.t;
    var v1326 = this.t;
    var v905 = v1326 > 0;
    if (v905) {
      var v1621 = this.t;
      var v1537 = v1621 - 1;
      var v1327 = this_array$$8[v1537];
      v905 = v1327 == c$$6;
    }
    v172 = v905;
  }
  return;
}
function bnToString(b$$2) {
  var this_array$$9 = this.array;
  var v906 = this.s;
  var v174 = v906 < 0;
  if (v174) {
    var v907 = this.negate();
    var v173 = JAM.call(v907.toString, v907, [b$$2]);
    return "-" + v173;
  }
  var k$$1;
  var v179 = b$$2 == 16;
  if (v179) {
    k$$1 = 4;
  } else {
    var v178 = b$$2 == 8;
    if (v178) {
      k$$1 = 3;
    } else {
      var v177 = b$$2 == 2;
      if (v177) {
        k$$1 = 1;
      } else {
        var v176 = b$$2 == 32;
        if (v176) {
          k$$1 = 5;
        } else {
          var v175 = b$$2 == 4;
          if (v175) {
            k$$1 = 2;
          } else {
            return JAM.call(this.toRadix, this, [b$$2]);
          }
        }
      }
    }
  }
  var v180 = 1 << k$$1;
  var km = v180 - 1;
  var d;
  var m$$3 = false;
  var r$$2 = "";
  var i$$14 = this.t;
  var v908 = i$$14 * BI_DB;
  var v181 = v908 % k$$1;
  var p = BI_DB - v181;
  var v909 = i$$14;
  i$$14 = i$$14 - 1;
  var v190 = v909 > 0;
  if (v190) {
    var v910 = p < BI_DB;
    if (v910) {
      var v1538 = this_array$$9[i$$14];
      var v1328 = d = v1538 >> p;
      v910 = v1328 > 0;
    }
    var v182 = v910;
    if (v182) {
      m$$3 = true;
      r$$2 = int2char(d);
    }
    var v189 = i$$14 >= 0;
    for (;v189;) {
      var v187 = p < k$$1;
      if (v187) {
        var v911 = this_array$$9[i$$14];
        var v1329 = 1 << p;
        var v912 = v1329 - 1;
        var v183 = v911 & v912;
        var v184 = k$$1 - p;
        d = v183 << v184;
        var v1539 = i$$14 = i$$14 - 1;
        var v1330 = this_array$$9[v1539];
        var v1622 = BI_DB - k$$1;
        var v1331 = p = p + v1622;
        var v913 = v1330 >> v1331;
        d = d | v913;
      } else {
        var v914 = this_array$$9[i$$14];
        var v915 = p = p - k$$1;
        var v185 = v914 >> v915;
        d = v185 & km;
        var v186 = p <= 0;
        if (v186) {
          p = p + BI_DB;
          --i$$14;
        }
      }
      var v188 = d > 0;
      if (v188) {
        m$$3 = true;
      }
      if (m$$3) {
        var v916 = int2char(d);
        r$$2 = r$$2 + v916;
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
  var v1332 = this.s;
  var v917 = v1332 < 0;
  if (v917) {
    v193 = this.negate();
  } else {
    v193 = this;
  }
  return v193;
}
function bnCompareTo(a$$1) {
  var this_array$$10 = this.array;
  var a_array = a$$1.array;
  var v194 = this.s;
  var v195 = a$$1.s;
  var r$$4 = v194 - v195;
  var v196 = r$$4 != 0;
  if (v196) {
    return r$$4;
  }
  var i$$15 = this.t;
  var v197 = a$$1.t;
  r$$4 = i$$15 - v197;
  var v198 = r$$4 != 0;
  if (v198) {
    return r$$4;
  }
  var v918 = i$$15 = i$$15 - 1;
  var v200 = v918 >= 0;
  for (;v200;) {
    var v1333 = this_array$$10[i$$15];
    var v1334 = a_array[i$$15];
    var v919 = r$$4 = v1333 - v1334;
    var v199 = v919 != 0;
    if (v199) {
      return r$$4;
    }
    var v920 = i$$15 = i$$15 - 1;
    v200 = v920 >= 0;
  }
  return 0;
}
function nbits(x$$53) {
  var r$$5 = 1;
  var t$$1;
  var v921 = t$$1 = x$$53 >>> 16;
  var v201 = v921 != 0;
  if (v201) {
    x$$53 = t$$1;
    r$$5 = r$$5 + 16;
  }
  var v922 = t$$1 = x$$53 >> 8;
  var v202 = v922 != 0;
  if (v202) {
    x$$53 = t$$1;
    r$$5 = r$$5 + 8;
  }
  var v923 = t$$1 = x$$53 >> 4;
  var v203 = v923 != 0;
  if (v203) {
    x$$53 = t$$1;
    r$$5 = r$$5 + 4;
  }
  var v924 = t$$1 = x$$53 >> 2;
  var v204 = v924 != 0;
  if (v204) {
    x$$53 = t$$1;
    r$$5 = r$$5 + 2;
  }
  var v925 = t$$1 = x$$53 >> 1;
  var v205 = v925 != 0;
  if (v205) {
    x$$53 = t$$1;
    r$$5 = r$$5 + 1;
  }
  return r$$5;
}
function bnBitLength() {
  var this_array$$11 = this.array;
  var v926 = this.t;
  var v206 = v926 <= 0;
  if (v206) {
    return 0;
  }
  var v1335 = this.t;
  var v927 = v1335 - 1;
  var v207 = BI_DB * v927;
  var v1623 = this.t;
  var v1540 = v1623 - 1;
  var v1336 = this_array$$11[v1540];
  var v1541 = this.s;
  var v1337 = v1541 & BI_DM;
  var v928 = v1336 ^ v1337;
  var v208 = nbits(v928);
  return v207 + v208;
}
function bnpDLShiftTo(n$$6, r$$6) {
  var this_array$$12 = this.array;
  var r_array$$1 = r$$6.array;
  var i$$16;
  var v209 = this.t;
  i$$16 = v209 - 1;
  var v211 = i$$16 >= 0;
  for (;v211;) {
    var v210 = i$$16 + n$$6;
    JAM.set(r_array$$1, v210, this_array$$12[i$$16]);
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
  var v213 = this.t;
  r$$6.t = v213 + n$$6;
  r$$6.s = this.s;
  return;
}
function bnpDRShiftTo(n$$7, r$$7) {
  var this_array$$13 = this.array;
  var r_array$$2 = r$$7.array;
  var i$$17 = n$$7;
  var v929 = this.t;
  var v215 = i$$17 < v929;
  for (;v215;) {
    var v214 = i$$17 - n$$7;
    r_array$$2[v214] = this_array$$13[i$$17];
    ++i$$17;
    var v930 = this.t;
    v215 = i$$17 < v930;
  }
  var v931 = this.t;
  var v216 = v931 - n$$7;
  var v1663 = JAM.call(Math.max, Math, [v216, 0], JAM.policy.p1);
  r$$7.t = v1663;
  r$$7.s = this.s;
  return;
}
function bnpLShiftTo(n$$8, r$$8) {
  var this_array$$14 = this.array;
  var r_array$$3 = r$$8.array;
  var bs = n$$8 % BI_DB;
  var cbs = BI_DB - bs;
  var v217 = 1 << cbs;
  var bm = v217 - 1;
  var v218 = n$$8 / BI_DB;
  var ds = Math.floor(v218);
  var v932 = this.s;
  var v219 = v932 << bs;
  var c$$7 = v219 & BI_DM;
  var i$$18;
  var v220 = this.t;
  i$$18 = v220 - 1;
  var v223 = i$$18 >= 0;
  for (;v223;) {
    var v933 = i$$18 + ds;
    var v221 = v933 + 1;
    var v1338 = this_array$$14[i$$18];
    var v934 = v1338 >> cbs;
    r_array$$3[v221] = v934 | c$$7;
    var v935 = this_array$$14[i$$18];
    var v222 = v935 & bm;
    c$$7 = v222 << bs;
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
  var v936 = this.t;
  var v225 = v936 + ds;
  r$$8.t = v225 + 1;
  r$$8.s = this.s;
  r$$8.clamp();
  return;
}
function bnpRShiftTo(n$$9, r$$9) {
  var this_array$$15 = this.array;
  var r_array$$4 = r$$9.array;
  r$$9.s = this.s;
  var v226 = n$$9 / BI_DB;
  var ds$$1 = Math.floor(v226);
  var v937 = this.t;
  var v227 = ds$$1 >= v937;
  if (v227) {
    r$$9.t = 0;
    return;
  }
  var bs$$1 = n$$9 % BI_DB;
  var cbs$$1 = BI_DB - bs$$1;
  var v228 = 1 << bs$$1;
  var bm$$1 = v228 - 1;
  var v229 = this_array$$15[ds$$1];
  r_array$$4[0] = v229 >> bs$$1;
  var i$$19 = ds$$1 + 1;
  var v938 = this.t;
  var v232 = i$$19 < v938;
  for (;v232;) {
    var v939 = i$$19 - ds$$1;
    var v230 = v939 - 1;
    var v1339 = r_array$$4[v230];
    var v1624 = this_array$$15[i$$19];
    var v1542 = v1624 & bm$$1;
    var v1340 = v1542 << cbs$$1;
    r_array$$4[v230] = v1339 | v1340;
    var v231 = i$$19 - ds$$1;
    var v940 = this_array$$15[i$$19];
    r_array$$4[v231] = v940 >> bs$$1;
    ++i$$19;
    var v941 = this.t;
    v232 = i$$19 < v941;
  }
  var v234 = bs$$1 > 0;
  if (v234) {
    var v1341 = this.t;
    var v942 = v1341 - ds$$1;
    var v233 = v942 - 1;
    var v1342 = r_array$$4[v233];
    var v1625 = this.s;
    var v1543 = v1625 & bm$$1;
    var v1343 = v1543 << cbs$$1;
    r_array$$4[v233] = v1342 | v1343;
  }
  var v235 = this.t;
  r$$9.t = v235 - ds$$1;
  r$$9.clamp();
  return;
}
function bnpSubTo(a$$2, r$$10) {
  var this_array$$16 = this.array;
  var r_array$$5 = r$$10.array;
  var a_array$$1 = a$$2.array;
  var i$$20 = 0;
  var c$$8 = 0;
  var v236 = a$$2.t;
  var v237 = this.t;
  var m$$4 = JAM.call(Math.min, Math, [v236, v237], JAM.policy.p1);
  var v239 = i$$20 < m$$4;
  for (;v239;) {
    var v1344 = this_array$$16[i$$20];
    var v1345 = a_array$$1[i$$20];
    var v943 = v1344 - v1345;
    c$$8 = c$$8 + v943;
    var v238 = i$$20;
    i$$20 = i$$20 + 1;
    r_array$$5[v238] = c$$8 & BI_DM;
    c$$8 = c$$8 >> BI_DB;
    v239 = i$$20 < m$$4;
  }
  var v944 = a$$2.t;
  var v945 = this.t;
  var v244 = v944 < v945;
  if (v244) {
    var v946 = a$$2.s;
    c$$8 = c$$8 - v946;
    var v947 = this.t;
    var v241 = i$$20 < v947;
    for (;v241;) {
      var v948 = this_array$$16[i$$20];
      c$$8 = c$$8 + v948;
      var v240 = i$$20;
      i$$20 = i$$20 + 1;
      r_array$$5[v240] = c$$8 & BI_DM;
      c$$8 = c$$8 >> BI_DB;
      var v949 = this.t;
      v241 = i$$20 < v949;
    }
    var v950 = this.s;
    c$$8 = c$$8 + v950;
  } else {
    var v951 = this.s;
    c$$8 = c$$8 + v951;
    var v952 = a$$2.t;
    var v243 = i$$20 < v952;
    for (;v243;) {
      var v953 = a_array$$1[i$$20];
      c$$8 = c$$8 - v953;
      var v242 = i$$20;
      i$$20 = i$$20 + 1;
      r_array$$5[v242] = c$$8 & BI_DM;
      c$$8 = c$$8 >> BI_DB;
      var v954 = a$$2.t;
      v243 = i$$20 < v954;
    }
    var v955 = a$$2.s;
    c$$8 = c$$8 - v955;
  }
  var v245;
  var v956 = c$$8 < 0;
  if (v956) {
    v245 = -1;
  } else {
    v245 = 0;
  }
  r$$10.s = v245;
  var v249 = c$$8 < -1;
  if (v249) {
    var v246 = i$$20;
    i$$20 = i$$20 + 1;
    r_array$$5[v246] = BI_DV + c$$8;
  } else {
    var v248 = c$$8 > 0;
    if (v248) {
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
  var v250 = y$$30.t;
  r$$11.t = i$$21 + v250;
  var v957 = i$$21 = i$$21 - 1;
  var v251 = v957 >= 0;
  for (;v251;) {
    r_array$$6[i$$21] = 0;
    var v958 = i$$21 = i$$21 - 1;
    v251 = v958 >= 0;
  }
  i$$21 = 0;
  var v959 = y$$30.t;
  var v253 = i$$21 < v959;
  for (;v253;) {
    var v960 = x$$54.t;
    var v252 = i$$21 + v960;
    var v961 = y_array[i$$21];
    var v962 = x$$54.t;
    var v1664 = JAM.call(x$$54.am, x$$54, [0, v961, r$$11, i$$21, 0, v962], JAM.policy.p1);
    JAM.set(r_array$$6, v252, v1664);
    ++i$$21;
    var v963 = y$$30.t;
    v253 = i$$21 < v963;
  }
  r$$11.s = 0;
  r$$11.clamp();
  var v964 = this.s;
  var v965 = a$$3.s;
  var v255 = v964 != v965;
  if (v255) {
    var v254 = BigInteger.ZERO;
    JAM.call(v254.subTo, v254, [r$$11, r$$11], JAM.policy.p1);
  }
  return;
}
function bnpSquareTo(r$$12) {
  var x$$55 = this.abs();
  var x_array = x$$55.array;
  var r_array$$7 = r$$12.array;
  var v256 = x$$55.t;
  var i$$22 = r$$12.t = 2 * v256;
  var v966 = i$$22 = i$$22 - 1;
  var v257 = v966 >= 0;
  for (;v257;) {
    r_array$$7[i$$22] = 0;
    var v967 = i$$22 = i$$22 - 1;
    v257 = v967 >= 0;
  }
  i$$22 = 0;
  var v1346 = x$$55.t;
  var v968 = v1346 - 1;
  var v263 = i$$22 < v968;
  for (;v263;) {
    var v258 = x_array[i$$22];
    var v259 = 2 * i$$22;
    var c$$9 = JAM.call(x$$55.am, x$$55, [i$$22, v258, r$$12, v259, 0, 1], JAM.policy.p1);
    var v1544 = x$$55.t;
    var v1347 = i$$22 + v1544;
    var v1626 = r_array$$7[v1347];
    var v1643 = i$$22 + 1;
    var v1656 = x_array[i$$22];
    var v1644 = 2 * v1656;
    var v1657 = 2 * i$$22;
    var v1645 = v1657 + 1;
    var v1660 = x$$55.t;
    var v1658 = v1660 - i$$22;
    var v1646 = v1658 - 1;
    var v1627 = JAM.call(x$$55.am, x$$55, [v1643, v1644, r$$12, v1645, c$$9, v1646], JAM.policy.p1);
    var v969 = JAM.set(r_array$$7, v1347, v1626 + v1627);
    var v262 = v969 >= BI_DV;
    if (v262) {
      var v970 = x$$55.t;
      var v260 = i$$22 + v970;
      var v1348 = r_array$$7[v260];
      r_array$$7[v260] = v1348 - BI_DV;
      var v1349 = x$$55.t;
      var v971 = i$$22 + v1349;
      var v261 = v971 + 1;
      r_array$$7[v261] = 1;
    }
    ++i$$22;
    var v1350 = x$$55.t;
    var v972 = v1350 - 1;
    v263 = i$$22 < v972;
  }
  var v973 = r$$12.t;
  var v265 = v973 > 0;
  if (v265) {
    var v974 = r$$12.t;
    var v264 = v974 - 1;
    var v1351 = r_array$$7[v264];
    var v1545 = x_array[i$$22];
    var v1546 = 2 * i$$22;
    var v1352 = JAM.call(x$$55.am, x$$55, [i$$22, v1545, r$$12, v1546, 0, 1], JAM.policy.p1);
    r_array$$7[v264] = v1351 + v1352;
  }
  r$$12.s = 0;
  r$$12.clamp();
  return;
}
function bnpDivRemTo(m$$5, q, r$$13) {
  var pm = m$$5.abs();
  var v975 = pm.t;
  var v266 = v975 <= 0;
  if (v266) {
    return;
  }
  var pt = this.abs();
  var v976 = pt.t;
  var v977 = pm.t;
  var v269 = v976 < v977;
  if (v269) {
    var v267 = q != null;
    if (v267) {
      JAM.call(q.fromInt, q, [0]);
    }
    var v268 = r$$13 != null;
    if (v268) {
      JAM.call(this.copyTo, this, [r$$13]);
    }
    return;
  }
  var v270 = r$$13 == null;
  if (v270) {
    r$$13 = nbi();
  }
  var y$$31 = nbi();
  var ts = this.s;
  var ms = m$$5.s;
  var pm_array = pm.array;
  var v271 = BI_DB;
  var v1547 = pm.t;
  var v1353 = v1547 - 1;
  var v978 = pm_array[v1353];
  var v272 = nbits(v978);
  var nsh = v271 - v272;
  var v273 = nsh > 0;
  if (v273) {
    JAM.call(pm.lShiftTo, pm, [nsh, y$$31], JAM.policy.p1);
    JAM.call(pt.lShiftTo, pt, [nsh, r$$13], JAM.policy.p1);
  } else {
    JAM.call(pm.copyTo, pm, [y$$31]);
    JAM.call(pt.copyTo, pt, [r$$13]);
  }
  var ys = y$$31.t;
  var y_array$$1 = y$$31.array;
  var v274 = ys - 1;
  var y0$$2 = y_array$$1[v274];
  var v275 = y0$$2 == 0;
  if (v275) {
    return;
  }
  var v979 = 1 << BI_F1;
  var v276 = y0$$2 * v979;
  var v980;
  var v1355 = ys > 1;
  if (v1355) {
    var v1548 = ys - 2;
    var v1354 = y_array$$1[v1548];
    v980 = v1354 >> BI_F2;
  } else {
    v980 = 0;
  }
  var v277 = v980;
  var yt = v276 + v277;
  var d1 = BI_FV / yt;
  var v278 = 1 << BI_F1;
  var d2 = v278 / yt;
  var e$$7 = 1 << BI_F2;
  var i$$23 = r$$13.t;
  var j$$4 = i$$23 - ys;
  var v279;
  var v981 = q == null;
  if (v981) {
    v279 = nbi();
  } else {
    v279 = q;
  }
  var t$$2 = v279;
  JAM.call(y$$31.dlShiftTo, y$$31, [j$$4, t$$2], JAM.policy.p1);
  var r_array$$8 = r$$13.array;
  var v982 = JAM.call(r$$13.compareTo, r$$13, [t$$2]);
  var v281 = v982 >= 0;
  if (v281) {
    var v280 = r$$13.t;
    var v1356 = r$$13.t;
    r$$13.t = v1356 + 1;
    r_array$$8[v280] = 1;
    JAM.call(r$$13.subTo, r$$13, [t$$2, r$$13], JAM.policy.p1);
  }
  var v282 = BigInteger.ONE;
  JAM.call(v282.dlShiftTo, v282, [ys, t$$2], JAM.policy.p1);
  JAM.call(t$$2.subTo, t$$2, [y$$31, y$$31], JAM.policy.p1);
  var v983 = y$$31.t;
  var v284 = v983 < ys;
  for (;v284;) {
    var v283 = y$$31.t;
    var v1357 = y$$31.t;
    y$$31.t = v1357 + 1;
    y_array$$1[v283] = 0;
    var v984 = y$$31.t;
    v284 = v984 < ys;
  }
  var v985 = j$$4 = j$$4 - 1;
  var v288 = v985 >= 0;
  for (;v288;) {
    var v285;
    var v1549 = i$$23 = i$$23 - 1;
    var v1358 = r_array$$8[v1549];
    var v987 = v1358 == y0$$2;
    if (v987) {
      v285 = BI_DM;
    } else {
      var v1550 = r_array$$8[i$$23];
      var v1359 = v1550 * d1;
      var v1647 = i$$23 - 1;
      var v1628 = r_array$$8[v1647];
      var v1551 = v1628 + e$$7;
      var v1360 = v1551 * d2;
      var v986 = v1359 + v1360;
      v285 = Math.floor(v986);
    }
    var qd = v285;
    var v1552 = r_array$$8[i$$23];
    var v1553 = JAM.call(y$$31.am, y$$31, [0, qd, r$$13, j$$4, 0, ys], JAM.policy.p1);
    var v988 = JAM.set(r_array$$8, i$$23, v1552 + v1553);
    var v287 = v988 < qd;
    if (v287) {
      JAM.call(y$$31.dlShiftTo, y$$31, [j$$4, t$$2], JAM.policy.p1);
      JAM.call(r$$13.subTo, r$$13, [t$$2, r$$13], JAM.policy.p1);
      var v989 = r_array$$8[i$$23];
      var v990 = qd = qd - 1;
      var v286 = v989 < v990;
      for (;v286;) {
        JAM.call(r$$13.subTo, r$$13, [t$$2, r$$13], JAM.policy.p1);
        var v991 = r_array$$8[i$$23];
        var v992 = qd = qd - 1;
        v286 = v991 < v992;
      }
    }
    var v993 = j$$4 = j$$4 - 1;
    v288 = v993 >= 0;
  }
  var v291 = q != null;
  if (v291) {
    JAM.call(r$$13.drShiftTo, r$$13, [ys, q], JAM.policy.p1);
    var v290 = ts != ms;
    if (v290) {
      var v289 = BigInteger.ZERO;
      JAM.call(v289.subTo, v289, [q, q], JAM.policy.p1);
    }
  }
  r$$13.t = ys;
  r$$13.clamp();
  var v292 = nsh > 0;
  if (v292) {
    JAM.call(r$$13.rShiftTo, r$$13, [nsh, r$$13], JAM.policy.p1);
  }
  var v294 = ts < 0;
  if (v294) {
    var v293 = BigInteger.ZERO;
    JAM.call(v293.subTo, v293, [r$$13, r$$13], JAM.policy.p1);
  }
  return;
}
function bnMod(a$$4) {
  var r$$14 = nbi();
  var v295 = this.abs();
  JAM.call(v295.divRemTo, v295, [a$$4, null, r$$14], JAM.policy.p1);
  var v1361 = this.s;
  var v994 = v1361 < 0;
  if (v994) {
    var v1554 = BigInteger.ZERO;
    var v1362 = JAM.call(r$$14.compareTo, r$$14, [v1554]);
    v994 = v1362 > 0;
  }
  var v296 = v994;
  if (v296) {
    JAM.call(a$$4.subTo, a$$4, [r$$14, r$$14], JAM.policy.p1);
  }
  return r$$14;
}
function Classic(m$$6) {
  this.m = m$$6;
  return;
}
function cConvert(x$$56) {
  var v1363 = x$$56.s;
  var v995 = v1363 < 0;
  var v1365 = !v995;
  if (v1365) {
    var v1555 = this.m;
    var v1364 = JAM.call(x$$56.compareTo, x$$56, [v1555]);
    v995 = v1364 >= 0;
  }
  var v298 = v995;
  if (v298) {
    var v297 = this.m;
    return JAM.call(x$$56.mod, x$$56, [v297]);
  } else {
    return x$$56;
  }
  return;
}
function cRevert(x$$57) {
  return x$$57;
}
function cReduce(x$$58) {
  var v299 = this.m;
  JAM.call(x$$58.divRemTo, x$$58, [v299, null, x$$58], JAM.policy.p1);
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
  var v996 = this.t;
  var v300 = v996 < 1;
  if (v300) {
    return 0;
  }
  var x$$61 = this_array$$18[0];
  var v997 = x$$61 & 1;
  var v301 = v997 == 0;
  if (v301) {
    return 0;
  }
  var y$$33 = x$$61 & 3;
  var v1556 = x$$61 & 15;
  var v1366 = v1556 * y$$33;
  var v998 = 2 - v1366;
  var v302 = y$$33 * v998;
  y$$33 = v302 & 15;
  var v1557 = x$$61 & 255;
  var v1367 = v1557 * y$$33;
  var v999 = 2 - v1367;
  var v303 = y$$33 * v999;
  y$$33 = v303 & 255;
  var v1629 = x$$61 & 65535;
  var v1558 = v1629 * y$$33;
  var v1368 = v1558 & 65535;
  var v1000 = 2 - v1368;
  var v304 = y$$33 * v1000;
  y$$33 = v304 & 65535;
  var v1559 = x$$61 * y$$33;
  var v1369 = v1559 % BI_DV;
  var v1001 = 2 - v1369;
  var v305 = y$$33 * v1001;
  y$$33 = v305 % BI_DV;
  var v306;
  var v1002 = y$$33 > 0;
  if (v1002) {
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
  var v307 = this.mp;
  this.mpl = v307 & 32767;
  var v308 = this.mp;
  this.mph = v308 >> 15;
  var v1003 = BI_DB - 15;
  var v309 = 1 << v1003;
  this.um = v309 - 1;
  var v310 = m$$7.t;
  this.mt2 = 2 * v310;
  return;
}
function montConvert(x$$62) {
  var r$$17 = nbi();
  var v311 = x$$62.abs();
  var v1004 = this.m;
  var v312 = v1004.t;
  JAM.call(v311.dlShiftTo, v311, [v312, r$$17], JAM.policy.p1);
  var v313 = this.m;
  JAM.call(r$$17.divRemTo, r$$17, [v313, null, r$$17], JAM.policy.p1);
  var v1370 = x$$62.s;
  var v1005 = v1370 < 0;
  if (v1005) {
    var v1560 = BigInteger.ZERO;
    var v1371 = JAM.call(r$$17.compareTo, r$$17, [v1560]);
    v1005 = v1371 > 0;
  }
  var v315 = v1005;
  if (v315) {
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
  var v1006 = x$$64.t;
  var v1007 = this.mt2;
  var v317 = v1006 <= v1007;
  for (;v317;) {
    var v316 = x$$64.t;
    var v1372 = x$$64.t;
    x$$64.t = v1372 + 1;
    x_array$$1[v316] = 0;
    var v1008 = x$$64.t;
    var v1009 = this.mt2;
    v317 = v1008 <= v1009;
  }
  var i$$24 = 0;
  var v1373 = this.m;
  var v1010 = v1373.t;
  var v322 = i$$24 < v1010;
  for (;v322;) {
    var v318 = x_array$$1[i$$24];
    var j$$5 = v318 & 32767;
    var v1374 = this.mpl;
    var v1011 = j$$5 * v1374;
    var v1648 = this.mph;
    var v1630 = j$$5 * v1648;
    var v1659 = x_array$$1[i$$24];
    var v1649 = v1659 >> 15;
    var v1650 = this.mpl;
    var v1631 = v1649 * v1650;
    var v1561 = v1630 + v1631;
    var v1562 = this.um;
    var v1375 = v1561 & v1562;
    var v1012 = v1375 << 15;
    var v319 = v1011 + v1012;
    var u0 = v319 & BI_DM;
    var v1013 = this.m;
    var v320 = v1013.t;
    j$$5 = i$$24 + v320;
    var v1014 = x_array$$1[j$$5];
    var v1376 = this.m;
    var v1563 = this.m;
    var v1377 = v1563.t;
    var v1015 = JAM.call(v1376.am, v1376, [0, u0, x$$64, i$$24, 0, v1377], JAM.policy.p1);
    JAM.set(x_array$$1, j$$5, v1014 + v1015);
    var v1016 = x_array$$1[j$$5];
    var v321 = v1016 >= BI_DV;
    for (;v321;) {
      var v1017 = x_array$$1[j$$5];
      x_array$$1[j$$5] = v1017 - BI_DV;
      x_array$$1[++j$$5]++;
      var v1018 = x_array$$1[j$$5];
      v321 = v1018 >= BI_DV;
    }
    ++i$$24;
    var v1378 = this.m;
    var v1019 = v1378.t;
    v322 = i$$24 < v1019;
  }
  x$$64.clamp();
  var v1020 = this.m;
  var v323 = v1020.t;
  JAM.call(x$$64.drShiftTo, x$$64, [v323, x$$64], JAM.policy.p1);
  var v1379 = this.m;
  var v1021 = JAM.call(x$$64.compareTo, x$$64, [v1379]);
  var v325 = v1021 >= 0;
  if (v325) {
    var v324 = this.m;
    JAM.call(x$$64.subTo, x$$64, [v324, x$$64], JAM.policy.p1);
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
  var v1564 = this.t;
  var v1381 = v1564 > 0;
  if (v1381) {
    var v1380 = this_array$$19[0];
    v1022 = v1380 & 1;
  } else {
    v1022 = this.s;
  }
  var v326 = v1022;
  return v326 == 0;
}
function bnpExp(e$$8, z$$2) {
  var v1023 = e$$8 > 4294967295;
  var v1382 = !v1023;
  if (v1382) {
    v1023 = e$$8 < 1;
  }
  var v327 = v1023;
  if (v327) {
    return BigInteger.ONE;
  }
  var r$$21 = nbi();
  var r2 = nbi();
  var g = JAM.call(z$$2.convert, z$$2, [this]);
  var v328 = nbits(e$$8);
  var i$$25 = v328 - 1;
  JAM.call(g.copyTo, g, [r$$21]);
  var v1024 = i$$25 = i$$25 - 1;
  var v330 = v1024 >= 0;
  for (;v330;) {
    JAM.call(z$$2.sqrTo, z$$2, [r$$21, r2], JAM.policy.p1);
    var v1383 = 1 << i$$25;
    var v1025 = e$$8 & v1383;
    var v329 = v1025 > 0;
    if (v329) {
      JAM.call(z$$2.mulTo, z$$2, [r2, g, r$$21], JAM.policy.p1);
    } else {
      var t$$3 = r$$21;
      r$$21 = r2;
      r2 = t$$3;
    }
    var v1026 = i$$25 = i$$25 - 1;
    v330 = v1026 >= 0;
  }
  return JAM.call(z$$2.revert, z$$2, [r$$21]);
}
function bnModPowInt(e$$9, m$$8) {
  var z$$3;
  var v1027 = e$$9 < 256;
  var v1384 = !v1027;
  if (v1384) {
    v1027 = m$$8.isEven();
  }
  var v331 = v1027;
  if (v331) {
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
  var v1028 = this.s;
  var v337 = v1028 < 0;
  if (v337) {
    var v1029 = this.t;
    var v334 = v1029 == 1;
    if (v334) {
      var v332 = this_array$$20[0];
      return v332 - BI_DV;
    } else {
      var v1030 = this.t;
      var v333 = v1030 == 0;
      if (v333) {
        return -1;
      }
    }
  } else {
    var v1031 = this.t;
    var v336 = v1031 == 1;
    if (v336) {
      return this_array$$20[0];
    } else {
      var v1032 = this.t;
      var v335 = v1032 == 0;
      if (v335) {
        return 0;
      }
    }
  }
  var v1385 = this_array$$20[1];
  var v1632 = 32 - BI_DB;
  var v1565 = 1 << v1632;
  var v1386 = v1565 - 1;
  var v1033 = v1385 & v1386;
  var v338 = v1033 << BI_DB;
  var v339 = this_array$$20[0];
  return v338 | v339;
}
function bnByteValue() {
  var this_array$$21 = this.array;
  var v340;
  var v1387 = this.t;
  var v1035 = v1387 == 0;
  if (v1035) {
    v340 = this.s;
  } else {
    var v1388 = this_array$$21[0];
    var v1034 = v1388 << 24;
    v340 = v1034 >> 24;
  }
  return v340;
}
function bnShortValue() {
  var this_array$$22 = this.array;
  var v341;
  var v1389 = this.t;
  var v1037 = v1389 == 0;
  if (v1037) {
    v341 = this.s;
  } else {
    var v1390 = this_array$$22[0];
    var v1036 = v1390 << 16;
    v341 = v1036 >> 16;
  }
  return v341;
}
function bnpChunkSize(r$$23) {
  var v1391 = Math.LN2;
  var v1038 = v1391 * BI_DB;
  var v1039 = Math.log(r$$23);
  var v342 = v1038 / v1039;
  return Math.floor(v342);
}
function bnSigNum() {
  var this_array$$23 = this.array;
  var v1040 = this.s;
  var v344 = v1040 < 0;
  if (v344) {
    return -1;
  } else {
    var v1392 = this.t;
    var v1041 = v1392 <= 0;
    var v1394 = !v1041;
    if (v1394) {
      var v1566 = this.t;
      var v1393 = v1566 == 1;
      if (v1393) {
        var v1567 = this_array$$23[0];
        v1393 = v1567 <= 0;
      }
      v1041 = v1393;
    }
    var v343 = v1041;
    if (v343) {
      return 0;
    } else {
      return 1;
    }
  }
  return;
}
function bnpToRadix(b$$3) {
  var v345 = b$$3 == null;
  if (v345) {
    b$$3 = 10;
  }
  var v1568 = this.signum();
  var v1395 = v1568 == 0;
  var v1569 = !v1395;
  if (v1569) {
    v1395 = b$$3 < 2;
  }
  var v1042 = v1395;
  var v1396 = !v1042;
  if (v1396) {
    v1042 = b$$3 > 36;
  }
  var v346 = v1042;
  if (v346) {
    return "0";
  }
  var cs = JAM.call(this.chunkSize, this, [b$$3]);
  var a$$5 = JAM.call(Math.pow, Math, [b$$3, cs], JAM.policy.p1);
  var d$$1 = nbv(a$$5);
  var y$$35 = nbi();
  var z$$4 = nbi();
  var r$$24 = "";
  JAM.call(this.divRemTo, this, [d$$1, y$$35, z$$4], JAM.policy.p1);
  var v1043 = y$$35.signum();
  var v348 = v1043 > 0;
  for (;v348;) {
    var v1570 = z$$4.intValue();
    var v1397 = a$$5 + v1570;
    var v1044 = JAM.call(v1397.toString, v1397, [b$$3]);
    var v347 = v1044.substr(1);
    r$$24 = v347 + r$$24;
    JAM.call(y$$35.divRemTo, y$$35, [d$$1, y$$35, z$$4], JAM.policy.p1);
    var v1045 = y$$35.signum();
    v348 = v1045 > 0;
  }
  var v1046 = z$$4.intValue();
  var v349 = JAM.call(v1046.toString, v1046, [b$$3]);
  return v349 + r$$24;
}
function bnpFromRadix(s$$5, b$$4) {
  JAM.call(this.fromInt, this, [0]);
  var v350 = b$$4 == null;
  if (v350) {
    b$$4 = 10;
  }
  var cs$$1 = JAM.call(this.chunkSize, this, [b$$4]);
  var d$$2 = JAM.call(Math.pow, Math, [b$$4, cs$$1], JAM.policy.p1);
  var mi$$1 = false;
  var j$$6 = 0;
  var w$$9 = 0;
  var i$$26 = 0;
  var v1047 = s$$5.length;
  var v355 = i$$26 < v1047;
  for (;v355;) {
    var x$$67 = intAt(s$$5, i$$26);
    var v352 = x$$67 < 0;
    if (v352) {
      var v1398 = s$$5.charAt(i$$26);
      var v1048 = v1398 == "-";
      if (v1048) {
        var v1399 = this.signum();
        v1048 = v1399 == 0;
      }
      var v351 = v1048;
      if (v351) {
        mi$$1 = true;
      }
      ++i$$26;
      var v1049 = s$$5.length;
      v355 = i$$26 < v1049;
      continue;
    }
    var v353 = b$$4 * w$$9;
    w$$9 = v353 + x$$67;
    var v1050 = j$$6 = j$$6 + 1;
    var v354 = v1050 >= cs$$1;
    if (v354) {
      JAM.call(this.dMultiply, this, [d$$2]);
      JAM.call(this.dAddOffset, this, [w$$9, 0], JAM.policy.p1);
      j$$6 = 0;
      w$$9 = 0;
    }
    ++i$$26;
    var v1051 = s$$5.length;
    v355 = i$$26 < v1051;
  }
  var v357 = j$$6 > 0;
  if (v357) {
    var v356 = JAM.call(Math.pow, Math, [b$$4, j$$6], JAM.policy.p1);
    JAM.call(this.dMultiply, this, [v356]);
    JAM.call(this.dAddOffset, this, [w$$9, 0], JAM.policy.p1);
  }
  if (mi$$1) {
    var v358 = BigInteger.ZERO;
    JAM.call(v358.subTo, v358, [this, this], JAM.policy.p1);
  }
  return;
}
function bnpFromNumber(a$$6, b$$5, c$$10) {
  var v1052 = typeof b$$5;
  var v368 = "number" == v1052;
  if (v368) {
    var v365 = a$$6 < 2;
    if (v365) {
      JAM.call(this.fromInt, this, [1]);
    } else {
      JAM.call(this.fromNumber, this, [a$$6, c$$10], JAM.policy.p1);
      var v1400 = a$$6 - 1;
      var v1053 = JAM.call(this.testBit, this, [v1400]);
      var v360 = !v1053;
      if (v360) {
        var v1054 = BigInteger.ONE;
        var v1055 = a$$6 - 1;
        var v359 = JAM.call(v1054.shiftLeft, v1054, [v1055]);
        JAM.call(this.bitwiseTo, this, [v359, op_or, this], JAM.policy.p1);
      }
      var v361 = this.isEven();
      if (v361) {
        JAM.call(this.dAddOffset, this, [1, 0], JAM.policy.p1);
      }
      var v1056 = JAM.call(this.isProbablePrime, this, [b$$5]);
      var v364 = !v1056;
      for (;v364;) {
        JAM.call(this.dAddOffset, this, [2, 0], JAM.policy.p1);
        var v1057 = this.bitLength();
        var v363 = v1057 > a$$6;
        if (v363) {
          var v1058 = BigInteger.ONE;
          var v1059 = a$$6 - 1;
          var v362 = JAM.call(v1058.shiftLeft, v1058, [v1059]);
          JAM.call(this.subTo, this, [v362, this], JAM.policy.p1);
        }
        var v1060 = JAM.call(this.isProbablePrime, this, [b$$5]);
        v364 = !v1060;
      }
    }
  } else {
    var x$$68 = new Array;
    var t$$4 = a$$6 & 7;
    var v366 = a$$6 >> 3;
    x$$68.length = v366 + 1;
    JAM.call(b$$5.nextBytes, b$$5, [x$$68]);
    var v367 = t$$4 > 0;
    if (v367) {
      var v1061 = x$$68[0];
      var v1401 = 1 << t$$4;
      var v1062 = v1401 - 1;
      x$$68[0] = v1061 & v1062;
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
  var v1063 = i$$27 * BI_DB;
  var v369 = v1063 % 8;
  var p$$1 = BI_DB - v369;
  var d$$3;
  var k$$2 = 0;
  var v1064 = i$$27;
  i$$27 = i$$27 - 1;
  var v382 = v1064 > 0;
  if (v382) {
    var v1065 = p$$1 < BI_DB;
    if (v1065) {
      var v1571 = this_array$$24[i$$27];
      var v1402 = d$$3 = v1571 >> p$$1;
      var v1633 = this.s;
      var v1572 = v1633 & BI_DM;
      var v1403 = v1572 >> p$$1;
      v1065 = v1402 != v1403;
    }
    var v371 = v1065;
    if (v371) {
      var v370 = k$$2;
      k$$2 = k$$2 + 1;
      var v1404 = this.s;
      var v1405 = BI_DB - p$$1;
      var v1066 = v1404 << v1405;
      r$$25[v370] = d$$3 | v1066;
    }
    var v381 = i$$27 >= 0;
    for (;v381;) {
      var v376 = p$$1 < 8;
      if (v376) {
        var v1067 = this_array$$24[i$$27];
        var v1406 = 1 << p$$1;
        var v1068 = v1406 - 1;
        var v372 = v1067 & v1068;
        var v373 = 8 - p$$1;
        d$$3 = v372 << v373;
        var v1573 = i$$27 = i$$27 - 1;
        var v1407 = this_array$$24[v1573];
        var v1634 = BI_DB - 8;
        var v1408 = p$$1 = p$$1 + v1634;
        var v1069 = v1407 >> v1408;
        d$$3 = d$$3 | v1069;
      } else {
        var v1070 = this_array$$24[i$$27];
        var v1071 = p$$1 = p$$1 - 8;
        var v374 = v1070 >> v1071;
        d$$3 = v374 & 255;
        var v375 = p$$1 <= 0;
        if (v375) {
          p$$1 = p$$1 + BI_DB;
          --i$$27;
        }
      }
      var v1072 = d$$3 & 128;
      var v377 = v1072 != 0;
      if (v377) {
        d$$3 = d$$3 | -256;
      }
      var v1073 = k$$2 == 0;
      if (v1073) {
        var v1574 = this.s;
        var v1409 = v1574 & 128;
        var v1410 = d$$3 & 128;
        v1073 = v1409 != v1410;
      }
      var v378 = v1073;
      if (v378) {
        ++k$$2;
      }
      var v1074 = k$$2 > 0;
      var v1412 = !v1074;
      if (v1412) {
        var v1411 = this.s;
        v1074 = d$$3 != v1411;
      }
      var v380 = v1074;
      if (v380) {
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
  var v383 = JAM.call(this.compareTo, this, [a$$7]);
  return v383 == 0;
}
function bnMin(a$$8) {
  var v384;
  var v1413 = JAM.call(this.compareTo, this, [a$$8]);
  var v1075 = v1413 < 0;
  if (v1075) {
    v384 = this;
  } else {
    v384 = a$$8;
  }
  return v384;
}
function bnMax(a$$9) {
  var v385;
  var v1414 = JAM.call(this.compareTo, this, [a$$9]);
  var v1076 = v1414 > 0;
  if (v1076) {
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
  var v386 = a$$10.t;
  var v387 = this.t;
  var m$$9 = JAM.call(Math.min, Math, [v386, v387], JAM.policy.p1);
  i$$28 = 0;
  var v390 = i$$28 < m$$9;
  for (;v390;) {
    var v388 = this_array$$25[i$$28];
    var v389 = a_array$$2[i$$28];
    var v1666 = JAM.call(op, null, [v388, v389], JAM.policy.p1);
    JAM.set(r_array$$9, i$$28, v1666);
    ++i$$28;
    v390 = i$$28 < m$$9;
  }
  var v1077 = a$$10.t;
  var v1078 = this.t;
  var v397 = v1077 < v1078;
  if (v397) {
    var v391 = a$$10.s;
    f = v391 & BI_DM;
    i$$28 = m$$9;
    var v1079 = this.t;
    var v393 = i$$28 < v1079;
    for (;v393;) {
      var v392 = this_array$$25[i$$28];
      var v1667 = JAM.call(op, null, [v392, f], JAM.policy.p1);
      JAM.set(r_array$$9, i$$28, v1667);
      ++i$$28;
      var v1080 = this.t;
      v393 = i$$28 < v1080;
    }
    r$$26.t = this.t;
  } else {
    var v394 = this.s;
    f = v394 & BI_DM;
    i$$28 = m$$9;
    var v1081 = a$$10.t;
    var v396 = i$$28 < v1081;
    for (;v396;) {
      var v395 = a_array$$2[i$$28];
      var v1668 = JAM.call(op, null, [f, v395], JAM.policy.p1);
      JAM.set(r_array$$9, i$$28, v1668);
      ++i$$28;
      var v1082 = a$$10.t;
      v396 = i$$28 < v1082;
    }
    r$$26.t = a$$10.t;
  }
  var v398 = this.s;
  var v399 = a$$10.s;
  var v1669 = JAM.call(op, null, [v398, v399], JAM.policy.p1);
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
  var v400 = ~y$$39;
  return x$$72 & v400;
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
  var v1083 = this.t;
  var v402 = i$$29 < v1083;
  for (;v402;) {
    var v1084 = this_array$$26[i$$29];
    var v401 = ~v1084;
    r_array$$10[i$$29] = BI_DM & v401;
    ++i$$29;
    var v1085 = this.t;
    v402 = i$$29 < v1085;
  }
  r$$31.t = this.t;
  var v403 = this.s;
  r$$31.s = ~v403;
  return r$$31;
}
function bnShiftLeft(n$$10) {
  var r$$32 = nbi();
  var v405 = n$$10 < 0;
  if (v405) {
    var v404 = -n$$10;
    JAM.call(this.rShiftTo, this, [v404, r$$32], JAM.policy.p1);
  } else {
    JAM.call(this.lShiftTo, this, [n$$10, r$$32], JAM.policy.p1);
  }
  return r$$32;
}
function bnShiftRight(n$$11) {
  var r$$33 = nbi();
  var v407 = n$$11 < 0;
  if (v407) {
    var v406 = -n$$11;
    JAM.call(this.lShiftTo, this, [v406, r$$33], JAM.policy.p1);
  } else {
    JAM.call(this.rShiftTo, this, [n$$11, r$$33], JAM.policy.p1);
  }
  return r$$33;
}
function lbit(x$$73) {
  var v408 = x$$73 == 0;
  if (v408) {
    return -1;
  }
  var r$$34 = 0;
  var v1086 = x$$73 & 65535;
  var v409 = v1086 == 0;
  if (v409) {
    x$$73 = x$$73 >> 16;
    r$$34 = r$$34 + 16;
  }
  var v1087 = x$$73 & 255;
  var v410 = v1087 == 0;
  if (v410) {
    x$$73 = x$$73 >> 8;
    r$$34 = r$$34 + 8;
  }
  var v1088 = x$$73 & 15;
  var v411 = v1088 == 0;
  if (v411) {
    x$$73 = x$$73 >> 4;
    r$$34 = r$$34 + 4;
  }
  var v1089 = x$$73 & 3;
  var v412 = v1089 == 0;
  if (v412) {
    x$$73 = x$$73 >> 2;
    r$$34 = r$$34 + 2;
  }
  var v1090 = x$$73 & 1;
  var v413 = v1090 == 0;
  if (v413) {
    ++r$$34;
  }
  return r$$34;
}
function bnGetLowestSetBit() {
  var this_array$$27 = this.array;
  var i$$30 = 0;
  var v1091 = this.t;
  var v417 = i$$30 < v1091;
  for (;v417;) {
    var v1092 = this_array$$27[i$$30];
    var v416 = v1092 != 0;
    if (v416) {
      var v414 = i$$30 * BI_DB;
      var v1093 = this_array$$27[i$$30];
      var v415 = lbit(v1093);
      return v414 + v415;
    }
    ++i$$30;
    var v1094 = this.t;
    v417 = i$$30 < v1094;
  }
  var v1095 = this.s;
  var v419 = v1095 < 0;
  if (v419) {
    var v418 = this.t;
    return v418 * BI_DB;
  }
  return -1;
}
function cbit(x$$74) {
  var r$$35 = 0;
  var v420 = x$$74 != 0;
  for (;v420;) {
    var v1096 = x$$74 - 1;
    x$$74 = x$$74 & v1096;
    ++r$$35;
    v420 = x$$74 != 0;
  }
  return r$$35;
}
function bnBitCount() {
  var r$$36 = 0;
  var v421 = this.s;
  var x$$75 = v421 & BI_DM;
  var i$$31 = 0;
  var v1097 = this.t;
  var v422 = i$$31 < v1097;
  for (;v422;) {
    var v1575 = this_array[i$$31];
    var v1415 = v1575 ^ x$$75;
    var v1098 = cbit(v1415);
    r$$36 = r$$36 + v1098;
    ++i$$31;
    var v1099 = this.t;
    v422 = i$$31 < v1099;
  }
  return r$$36;
}
function bnTestBit(n$$12) {
  var this_array$$28 = this.array;
  var v423 = n$$12 / BI_DB;
  var j$$7 = Math.floor(v423);
  var v1100 = this.t;
  var v425 = j$$7 >= v1100;
  if (v425) {
    var v424 = this.s;
    return v424 != 0;
  }
  var v1101 = this_array$$28[j$$7];
  var v1416 = n$$12 % BI_DB;
  var v1102 = 1 << v1416;
  var v426 = v1101 & v1102;
  return v426 != 0;
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
  var v428 = a$$15.t;
  var v429 = this.t;
  var m$$10 = JAM.call(Math.min, Math, [v428, v429], JAM.policy.p1);
  var v431 = i$$32 < m$$10;
  for (;v431;) {
    var v1417 = this_array$$29[i$$32];
    var v1418 = a_array$$3[i$$32];
    var v1103 = v1417 + v1418;
    c$$11 = c$$11 + v1103;
    var v430 = i$$32;
    i$$32 = i$$32 + 1;
    r_array$$11[v430] = c$$11 & BI_DM;
    c$$11 = c$$11 >> BI_DB;
    v431 = i$$32 < m$$10;
  }
  var v1104 = a$$15.t;
  var v1105 = this.t;
  var v436 = v1104 < v1105;
  if (v436) {
    var v1106 = a$$15.s;
    c$$11 = c$$11 + v1106;
    var v1107 = this.t;
    var v433 = i$$32 < v1107;
    for (;v433;) {
      var v1108 = this_array$$29[i$$32];
      c$$11 = c$$11 + v1108;
      var v432 = i$$32;
      i$$32 = i$$32 + 1;
      r_array$$11[v432] = c$$11 & BI_DM;
      c$$11 = c$$11 >> BI_DB;
      var v1109 = this.t;
      v433 = i$$32 < v1109;
    }
    var v1110 = this.s;
    c$$11 = c$$11 + v1110;
  } else {
    var v1111 = this.s;
    c$$11 = c$$11 + v1111;
    var v1112 = a$$15.t;
    var v435 = i$$32 < v1112;
    for (;v435;) {
      var v1113 = a_array$$3[i$$32];
      c$$11 = c$$11 + v1113;
      var v434 = i$$32;
      i$$32 = i$$32 + 1;
      r_array$$11[v434] = c$$11 & BI_DM;
      c$$11 = c$$11 >> BI_DB;
      var v1114 = a$$15.t;
      v435 = i$$32 < v1114;
    }
    var v1115 = a$$15.s;
    c$$11 = c$$11 + v1115;
  }
  var v437;
  var v1116 = c$$11 < 0;
  if (v1116) {
    v437 = -1;
  } else {
    v437 = 0;
  }
  r$$38.s = v437;
  var v441 = c$$11 > 0;
  if (v441) {
    var v438 = i$$32;
    i$$32 = i$$32 + 1;
    r_array$$11[v438] = c$$11;
  } else {
    var v440 = c$$11 < -1;
    if (v440) {
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
  var v1117 = n$$17 - 1;
  var v1118 = this.t;
  var v1670 = JAM.call(this.am, this, [0, v1117, this, 0, 0, v1118], JAM.policy.p1);
  JAM.set(this_array$$30, v442, v1670);
  ++this.t;
  this.clamp();
  return;
}
function bnpDAddOffset(n$$18, w$$10) {
  var this_array$$31 = this.array;
  var v1119 = this.t;
  var v444 = v1119 <= w$$10;
  for (;v444;) {
    var v443 = this.t;
    var v1419 = this.t;
    this.t = v1419 + 1;
    this_array$$31[v443] = 0;
    var v1120 = this.t;
    v444 = v1120 <= w$$10;
  }
  var v1121 = this_array$$31[w$$10];
  JAM.set(this_array$$31, w$$10, v1121 + n$$18);
  var v1122 = this_array$$31[w$$10];
  var v447 = v1122 >= BI_DV;
  for (;v447;) {
    var v1123 = this_array$$31[w$$10];
    this_array$$31[w$$10] = v1123 - BI_DV;
    var v1124 = w$$10 = w$$10 + 1;
    var v1125 = this.t;
    var v446 = v1124 >= v1125;
    if (v446) {
      var v445 = this.t;
      var v1420 = this.t;
      this.t = v1420 + 1;
      this_array$$31[v445] = 0;
    }
    JAM.set(this_array$$31, w$$10, this_array$$31[w$$10] + 1);
    var v1126 = this_array$$31[w$$10];
    v447 = v1126 >= BI_DV;
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
  var v448 = new NullExp;
  return JAM.call(this.exp, this, [e$$10, v448], JAM.policy.p1);
}
function bnpMultiplyLowerTo(a$$22, n$$19, r$$47) {
  var r_array$$12 = r$$47.array;
  var a_array$$4 = a$$22.array;
  var v1127 = this.t;
  var v1128 = a$$22.t;
  var v449 = v1127 + v1128;
  var i$$33 = JAM.call(Math.min, Math, [v449, n$$19], JAM.policy.p1);
  r$$47.s = 0;
  r$$47.t = i$$33;
  var v451 = i$$33 > 0;
  for (;v451;) {
    var v450 = i$$33 = i$$33 - 1;
    r_array$$12[v450] = 0;
    v451 = i$$33 > 0;
  }
  var j$$8;
  var v452 = r$$47.t;
  var v453 = this.t;
  j$$8 = v452 - v453;
  var v455 = i$$33 < j$$8;
  for (;v455;) {
    var v1129 = this.t;
    var v454 = i$$33 + v1129;
    var v1130 = a_array$$4[i$$33];
    var v1131 = this.t;
    var v1671 = JAM.call(this.am, this, [0, v1130, r$$47, i$$33, 0, v1131], JAM.policy.p1);
    JAM.set(r_array$$12, v454, v1671);
    ++i$$33;
    v455 = i$$33 < j$$8;
  }
  var v456 = a$$22.t;
  j$$8 = JAM.call(Math.min, Math, [v456, n$$19], JAM.policy.p1);
  var v459 = i$$33 < j$$8;
  for (;v459;) {
    var v457 = a_array$$4[i$$33];
    var v458 = n$$19 - i$$33;
    JAM.call(this.am, this, [0, v457, r$$47, i$$33, 0, v458], JAM.policy.p1);
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
  var v1132 = this.t;
  var v1133 = a$$23.t;
  var v460 = v1132 + v1133;
  var i$$34 = r$$48.t = v460 - n$$20;
  r$$48.s = 0;
  var v1134 = i$$34 = i$$34 - 1;
  var v461 = v1134 >= 0;
  for (;v461;) {
    r_array$$13[i$$34] = 0;
    var v1135 = i$$34 = i$$34 - 1;
    v461 = v1135 >= 0;
  }
  var v1136 = this.t;
  var v462 = n$$20 - v1136;
  i$$34 = JAM.call(Math.max, Math, [v462, 0], JAM.policy.p1);
  var v1137 = a$$23.t;
  var v464 = i$$34 < v1137;
  for (;v464;) {
    var v1421 = this.t;
    var v1138 = v1421 + i$$34;
    var v463 = v1138 - n$$20;
    var v1139 = n$$20 - i$$34;
    var v1140 = a_array$$5[i$$34];
    var v1576 = this.t;
    var v1422 = v1576 + i$$34;
    var v1141 = v1422 - n$$20;
    var v1672 = JAM.call(this.am, this, [v1139, v1140, r$$48, 0, 0, v1141], JAM.policy.p1);
    r_array$$13[v463] = v1672;
    ++i$$34;
    var v1142 = a$$23.t;
    v464 = i$$34 < v1142;
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
  var v1143 = m$$11.t;
  var v466 = 2 * v1143;
  var v467 = this.r2;
  JAM.call(v465.dlShiftTo, v465, [v466, v467], JAM.policy.p1);
  var v468 = this.r2;
  var v1675 = JAM.call(v468.divide, v468, [m$$11]);
  this.mu = v1675;
  this.m = m$$11;
  return;
}
function barrettConvert(x$$79) {
  var v1423 = x$$79.s;
  var v1144 = v1423 < 0;
  var v1426 = !v1144;
  if (v1426) {
    var v1424 = x$$79.t;
    var v1635 = this.m;
    var v1577 = v1635.t;
    var v1425 = 2 * v1577;
    v1144 = v1424 > v1425;
  }
  var v471 = v1144;
  if (v471) {
    var v469 = this.m;
    return JAM.call(x$$79.mod, x$$79, [v469]);
  } else {
    var v1427 = this.m;
    var v1145 = JAM.call(x$$79.compareTo, x$$79, [v1427]);
    var v470 = v1145 < 0;
    if (v470) {
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
  var v1428 = this.m;
  var v1146 = v1428.t;
  var v472 = v1146 - 1;
  var v473 = this.r2;
  JAM.call(x$$81.drShiftTo, x$$81, [v472, v473], JAM.policy.p1);
  var v1147 = x$$81.t;
  var v1578 = this.m;
  var v1429 = v1578.t;
  var v1148 = v1429 + 1;
  var v475 = v1147 > v1148;
  if (v475) {
    var v1149 = this.m;
    var v474 = v1149.t;
    x$$81.t = v474 + 1;
    x$$81.clamp();
  }
  var v476 = this.mu;
  var v477 = this.r2;
  var v1430 = this.m;
  var v1150 = v1430.t;
  var v478 = v1150 + 1;
  var v479 = this.q3;
  JAM.call(v476.multiplyUpperTo, v476, [v477, v478, v479], JAM.policy.p1);
  var v480 = this.m;
  var v481 = this.q3;
  var v1431 = this.m;
  var v1151 = v1431.t;
  var v482 = v1151 + 1;
  var v483 = this.r2;
  JAM.call(v480.multiplyLowerTo, v480, [v481, v482, v483], JAM.policy.p1);
  var v1432 = this.r2;
  var v1152 = JAM.call(x$$81.compareTo, x$$81, [v1432]);
  var v485 = v1152 < 0;
  for (;v485;) {
    var v1433 = this.m;
    var v1153 = v1433.t;
    var v484 = v1153 + 1;
    JAM.call(x$$81.dAddOffset, x$$81, [1, v484], JAM.policy.p1);
    var v1434 = this.r2;
    var v1154 = JAM.call(x$$81.compareTo, x$$81, [v1434]);
    v485 = v1154 < 0;
  }
  var v486 = this.r2;
  JAM.call(x$$81.subTo, x$$81, [v486, x$$81], JAM.policy.p1);
  var v1435 = this.m;
  var v1155 = JAM.call(x$$81.compareTo, x$$81, [v1435]);
  var v488 = v1155 >= 0;
  for (;v488;) {
    var v487 = this.m;
    JAM.call(x$$81.subTo, x$$81, [v487, x$$81], JAM.policy.p1);
    var v1436 = this.m;
    var v1156 = JAM.call(x$$81.compareTo, x$$81, [v1436]);
    v488 = v1156 >= 0;
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
  var v493 = i$$35 <= 0;
  if (v493) {
    return r$$52;
  } else {
    var v492 = i$$35 < 18;
    if (v492) {
      k$$3 = 1;
    } else {
      var v491 = i$$35 < 48;
      if (v491) {
        k$$3 = 3;
      } else {
        var v490 = i$$35 < 144;
        if (v490) {
          k$$3 = 4;
        } else {
          var v489 = i$$35 < 768;
          if (v489) {
            k$$3 = 5;
          } else {
            k$$3 = 6;
          }
        }
      }
    }
  }
  var v495 = i$$35 < 8;
  if (v495) {
    z$$5 = new Classic(m$$12);
  } else {
    var v494 = m$$12.isEven();
    if (v494) {
      z$$5 = new Barrett(m$$12);
    } else {
      z$$5 = new Montgomery(m$$12);
    }
  }
  var g$$1 = new Array;
  var n$$21 = 3;
  var k1 = k$$3 - 1;
  var v496 = 1 << k$$3;
  var km$$1 = v496 - 1;
  var v1676 = JAM.call(z$$5.convert, z$$5, [this]);
  g$$1[1] = v1676;
  var v501 = k$$3 > 1;
  if (v501) {
    var g2 = nbi();
    var v497 = g$$1[1];
    JAM.call(z$$5.sqrTo, z$$5, [v497, g2], JAM.policy.p1);
    var v500 = n$$21 <= km$$1;
    for (;v500;) {
      var v1677 = nbi();
      g$$1[n$$21] = v1677;
      var v1157 = n$$21 - 2;
      var v498 = g$$1[v1157];
      var v499 = g$$1[n$$21];
      JAM.call(z$$5.mulTo, z$$5, [g2, v498, v499], JAM.policy.p1);
      n$$21 = n$$21 + 2;
      v500 = n$$21 <= km$$1;
    }
  }
  var v502 = e$$11.t;
  var j$$9 = v502 - 1;
  var w$$11;
  var is1 = true;
  var r2$$1 = nbi();
  var t$$5;
  var v1158 = e_array[j$$9];
  var v503 = nbits(v1158);
  i$$35 = v503 - 1;
  var v517 = j$$9 >= 0;
  for (;v517;) {
    var v508 = i$$35 >= k1;
    if (v508) {
      var v1159 = e_array[j$$9];
      var v1160 = i$$35 - k1;
      var v504 = v1159 >> v1160;
      w$$11 = v504 & km$$1;
    } else {
      var v1161 = e_array[j$$9];
      var v1579 = i$$35 + 1;
      var v1437 = 1 << v1579;
      var v1162 = v1437 - 1;
      var v505 = v1161 & v1162;
      var v506 = k1 - i$$35;
      w$$11 = v505 << v506;
      var v507 = j$$9 > 0;
      if (v507) {
        var v1580 = j$$9 - 1;
        var v1438 = e_array[v1580];
        var v1581 = BI_DB + i$$35;
        var v1439 = v1581 - k1;
        var v1163 = v1438 >> v1439;
        w$$11 = w$$11 | v1163;
      }
    }
    n$$21 = k$$3;
    var v1164 = w$$11 & 1;
    var v509 = v1164 == 0;
    for (;v509;) {
      w$$11 = w$$11 >> 1;
      --n$$21;
      var v1165 = w$$11 & 1;
      v509 = v1165 == 0;
    }
    var v1166 = i$$35 = i$$35 - n$$21;
    var v510 = v1166 < 0;
    if (v510) {
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
      var v513 = n$$21 > 0;
      if (v513) {
        JAM.call(z$$5.sqrTo, z$$5, [r$$52, r2$$1], JAM.policy.p1);
      } else {
        t$$5 = r$$52;
        r$$52 = r2$$1;
        r2$$1 = t$$5;
      }
      var v514 = g$$1[w$$11];
      JAM.call(z$$5.mulTo, z$$5, [r2$$1, v514, r$$52], JAM.policy.p1);
    }
    var v1167 = j$$9 >= 0;
    if (v1167) {
      var v1582 = e_array[j$$9];
      var v1583 = 1 << i$$35;
      var v1440 = v1582 & v1583;
      v1167 = v1440 == 0;
    }
    var v516 = v1167;
    for (;v516;) {
      JAM.call(z$$5.sqrTo, z$$5, [r$$52, r2$$1], JAM.policy.p1);
      t$$5 = r$$52;
      r$$52 = r2$$1;
      r2$$1 = t$$5;
      var v1168 = i$$35 = i$$35 - 1;
      var v515 = v1168 < 0;
      if (v515) {
        i$$35 = BI_DB - 1;
        --j$$9;
      }
      var v1169 = j$$9 >= 0;
      if (v1169) {
        var v1584 = e_array[j$$9];
        var v1585 = 1 << i$$35;
        var v1441 = v1584 & v1585;
        v1169 = v1441 == 0;
      }
      v516 = v1169;
    }
    v517 = j$$9 >= 0;
  }
  return JAM.call(z$$5.revert, z$$5, [r$$52]);
}
function bnGCD(a$$24) {
  var v518;
  var v1442 = this.s;
  var v1170 = v1442 < 0;
  if (v1170) {
    v518 = this.negate();
  } else {
    v518 = this.clone();
  }
  var x$$84 = v518;
  var v519;
  var v1443 = a$$24.s;
  var v1171 = v1443 < 0;
  if (v1171) {
    v519 = a$$24.negate();
  } else {
    v519 = a$$24.clone();
  }
  var y$$42 = v519;
  var v1172 = JAM.call(x$$84.compareTo, x$$84, [y$$42]);
  var v520 = v1172 < 0;
  if (v520) {
    var t$$6 = x$$84;
    x$$84 = y$$42;
    y$$42 = t$$6;
  }
  var i$$36 = x$$84.getLowestSetBit();
  var g$$2 = y$$42.getLowestSetBit();
  var v521 = g$$2 < 0;
  if (v521) {
    return x$$84;
  }
  var v522 = i$$36 < g$$2;
  if (v522) {
    g$$2 = i$$36;
  }
  var v523 = g$$2 > 0;
  if (v523) {
    JAM.call(x$$84.rShiftTo, x$$84, [g$$2, x$$84], JAM.policy.p1);
    JAM.call(y$$42.rShiftTo, y$$42, [g$$2, y$$42], JAM.policy.p1);
  }
  var v1173 = x$$84.signum();
  var v527 = v1173 > 0;
  for (;v527;) {
    var v1174 = i$$36 = x$$84.getLowestSetBit();
    var v524 = v1174 > 0;
    if (v524) {
      JAM.call(x$$84.rShiftTo, x$$84, [i$$36, x$$84], JAM.policy.p1);
    }
    var v1175 = i$$36 = y$$42.getLowestSetBit();
    var v525 = v1175 > 0;
    if (v525) {
      JAM.call(y$$42.rShiftTo, y$$42, [i$$36, y$$42], JAM.policy.p1);
    }
    var v1176 = JAM.call(x$$84.compareTo, x$$84, [y$$42]);
    var v526 = v1176 >= 0;
    if (v526) {
      JAM.call(x$$84.subTo, x$$84, [y$$42, x$$84], JAM.policy.p1);
      JAM.call(x$$84.rShiftTo, x$$84, [1, x$$84], JAM.policy.p1);
    } else {
      JAM.call(y$$42.subTo, y$$42, [x$$84, y$$42], JAM.policy.p1);
      JAM.call(y$$42.rShiftTo, y$$42, [1, y$$42], JAM.policy.p1);
    }
    var v1177 = x$$84.signum();
    v527 = v1177 > 0;
  }
  var v528 = g$$2 > 0;
  if (v528) {
    JAM.call(y$$42.lShiftTo, y$$42, [g$$2, y$$42], JAM.policy.p1);
  }
  return y$$42;
}
function bnpModInt(n$$22) {
  var this_array$$32 = this.array;
  var v529 = n$$22 <= 0;
  if (v529) {
    return 0;
  }
  var d$$4 = BI_DV % n$$22;
  var v530;
  var v1444 = this.s;
  var v1178 = v1444 < 0;
  if (v1178) {
    v530 = n$$22 - 1;
  } else {
    v530 = 0;
  }
  var r$$53 = v530;
  var v1179 = this.t;
  var v536 = v1179 > 0;
  if (v536) {
    var v535 = d$$4 == 0;
    if (v535) {
      var v531 = this_array$$32[0];
      r$$53 = v531 % n$$22;
    } else {
      var v532 = this.t;
      var i$$37 = v532 - 1;
      var v534 = i$$37 >= 0;
      for (;v534;) {
        var v1180 = d$$4 * r$$53;
        var v1181 = this_array$$32[i$$37];
        var v533 = v1180 + v1181;
        r$$53 = v533 % n$$22;
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
  var v1447 = !v1182;
  if (v1447) {
    var v1446 = m$$13.signum();
    v1182 = v1446 == 0;
  }
  var v537 = v1182;
  if (v537) {
    return BigInteger.ZERO;
  }
  var u = m$$13.clone();
  var v$$1 = this.clone();
  var a$$25 = nbv(1);
  var b$$6 = nbv(0);
  var c$$12 = nbv(0);
  var d$$5 = nbv(1);
  var v1183 = u.signum();
  var v545 = v1183 != 0;
  for (;v545;) {
    var v540 = u.isEven();
    for (;v540;) {
      JAM.call(u.rShiftTo, u, [1, u], JAM.policy.p1);
      if (ac) {
        var v1448 = a$$25.isEven();
        var v1184 = !v1448;
        var v1450 = !v1184;
        if (v1450) {
          var v1449 = b$$6.isEven();
          v1184 = !v1449;
        }
        var v538 = v1184;
        if (v538) {
          JAM.call(a$$25.addTo, a$$25, [this, a$$25], JAM.policy.p1);
          JAM.call(b$$6.subTo, b$$6, [m$$13, b$$6], JAM.policy.p1);
        }
        JAM.call(a$$25.rShiftTo, a$$25, [1, a$$25], JAM.policy.p1);
      } else {
        var v1185 = b$$6.isEven();
        var v539 = !v1185;
        if (v539) {
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
        var v1451 = c$$12.isEven();
        var v1186 = !v1451;
        var v1453 = !v1186;
        if (v1453) {
          var v1452 = d$$5.isEven();
          v1186 = !v1452;
        }
        var v541 = v1186;
        if (v541) {
          JAM.call(c$$12.addTo, c$$12, [this, c$$12], JAM.policy.p1);
          JAM.call(d$$5.subTo, d$$5, [m$$13, d$$5], JAM.policy.p1);
        }
        JAM.call(c$$12.rShiftTo, c$$12, [1, c$$12], JAM.policy.p1);
      } else {
        var v1187 = d$$5.isEven();
        var v542 = !v1187;
        if (v542) {
          JAM.call(d$$5.subTo, d$$5, [m$$13, d$$5], JAM.policy.p1);
        }
      }
      JAM.call(d$$5.rShiftTo, d$$5, [1, d$$5], JAM.policy.p1);
      v543 = v$$1.isEven();
    }
    var v1188 = JAM.call(u.compareTo, u, [v$$1]);
    var v544 = v1188 >= 0;
    if (v544) {
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
    var v1189 = u.signum();
    v545 = v1189 != 0;
  }
  var v1454 = BigInteger.ONE;
  var v1190 = JAM.call(v$$1.compareTo, v$$1, [v1454]);
  var v546 = v1190 != 0;
  if (v546) {
    return BigInteger.ZERO;
  }
  var v1191 = JAM.call(d$$5.compareTo, d$$5, [m$$13]);
  var v547 = v1191 >= 0;
  if (v547) {
    return JAM.call(d$$5.subtract, d$$5, [m$$13]);
  }
  var v1192 = d$$5.signum();
  var v548 = v1192 < 0;
  if (v548) {
    JAM.call(d$$5.addTo, d$$5, [m$$13, d$$5], JAM.policy.p1);
  } else {
    return d$$5;
  }
  var v1193 = d$$5.signum();
  var v549 = v1193 < 0;
  if (v549) {
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
  var v1455 = x$$85.t;
  var v1194 = v1455 == 1;
  if (v1194) {
    var v1456 = x_array$$2[0];
    var v1636 = lowprimes.length;
    var v1586 = v1636 - 1;
    var v1457 = lowprimes[v1586];
    v1194 = v1456 <= v1457;
  }
  var v552 = v1194;
  if (v552) {
    i$$38 = 0;
    var v1195 = lowprimes.length;
    var v551 = i$$38 < v1195;
    for (;v551;) {
      var v1196 = x_array$$2[0];
      var v1197 = lowprimes[i$$38];
      var v550 = v1196 == v1197;
      if (v550) {
        return true;
      }
      ++i$$38;
      var v1198 = lowprimes.length;
      v551 = i$$38 < v1198;
    }
    return false;
  }
  var v553 = x$$85.isEven();
  if (v553) {
    return false;
  }
  i$$38 = 1;
  var v1199 = lowprimes.length;
  var v557 = i$$38 < v1199;
  for (;v557;) {
    var m$$14 = lowprimes[i$$38];
    var j$$10 = i$$38 + 1;
    var v1458 = lowprimes.length;
    var v1200 = j$$10 < v1458;
    if (v1200) {
      v1200 = m$$14 < lplim;
    }
    var v554 = v1200;
    for (;v554;) {
      var v1459 = j$$10;
      j$$10 = j$$10 + 1;
      var v1201 = lowprimes[v1459];
      m$$14 = m$$14 * v1201;
      var v1460 = lowprimes.length;
      var v1202 = j$$10 < v1460;
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
      var v1461 = lowprimes[v1587];
      var v1203 = m$$14 % v1461;
      var v555 = v1203 == 0;
      if (v555) {
        return false;
      }
      v556 = i$$38 < j$$10;
    }
    var v1204 = lowprimes.length;
    v557 = i$$38 < v1204;
  }
  return JAM.call(x$$85.millerRabin, x$$85, [t$$7]);
}
function bnpMillerRabin(t$$8) {
  var v558 = BigInteger.ONE;
  var n1 = JAM.call(this.subtract, this, [v558]);
  var k$$4 = n1.getLowestSetBit();
  var v559 = k$$4 <= 0;
  if (v559) {
    return false;
  }
  var r$$54 = JAM.call(n1.shiftRight, n1, [k$$4]);
  var v560 = t$$8 + 1;
  t$$8 = v560 >> 1;
  var v1205 = lowprimes.length;
  var v561 = t$$8 > v1205;
  if (v561) {
    t$$8 = lowprimes.length;
  }
  var a$$26 = nbi();
  var i$$39 = 0;
  var v567 = i$$39 < t$$8;
  for (;v567;) {
    var v562 = lowprimes[i$$39];
    JAM.call(a$$26.fromInt, a$$26, [v562]);
    var y$$43 = JAM.call(a$$26.modPow, a$$26, [r$$54, this], JAM.policy.p1);
    var v1588 = BigInteger.ONE;
    var v1462 = JAM.call(y$$43.compareTo, y$$43, [v1588]);
    var v1206 = v1462 != 0;
    if (v1206) {
      var v1463 = JAM.call(y$$43.compareTo, y$$43, [n1]);
      v1206 = v1463 != 0;
    }
    var v566 = v1206;
    if (v566) {
      var j$$11 = 1;
      var v1464 = j$$11;
      j$$11 = j$$11 + 1;
      var v1207 = v1464 < k$$4;
      if (v1207) {
        var v1465 = JAM.call(y$$43.compareTo, y$$43, [n1]);
        v1207 = v1465 != 0;
      }
      var v564 = v1207;
      for (;v564;) {
        y$$43 = JAM.call(y$$43.modPowInt, y$$43, [2, this], JAM.policy.p1);
        var v1466 = BigInteger.ONE;
        var v1208 = JAM.call(y$$43.compareTo, y$$43, [v1466]);
        var v563 = v1208 == 0;
        if (v563) {
          return false;
        }
        var v1467 = j$$11;
        j$$11 = j$$11 + 1;
        var v1209 = v1467 < k$$4;
        if (v1209) {
          var v1468 = JAM.call(y$$43.compareTo, y$$43, [n1]);
          v1209 = v1468 != 0;
        }
        v564 = v1209;
      }
      var v1210 = JAM.call(y$$43.compareTo, y$$43, [n1]);
      var v565 = v1210 != 0;
      if (v565) {
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
    var v568 = this.S;
    JAM.set(v568, i$$40, i$$40);
    ++i$$40;
    v569 = i$$40 < 256;
  }
  j$$12 = 0;
  i$$40 = 0;
  var v574 = i$$40 < 256;
  for (;v574;) {
    var v1589 = this.S;
    var v1469 = v1589[i$$40];
    var v1211 = j$$12 + v1469;
    var v1590 = key$$14.length;
    var v1470 = i$$40 % v1590;
    var v1212 = key$$14[v1470];
    var v570 = v1211 + v1212;
    j$$12 = v570 & 255;
    var v571 = this.S;
    t$$9 = v571[i$$40];
    var v572 = this.S;
    var v1213 = this.S;
    JAM.set(v572, i$$40, v1213[j$$12]);
    var v573 = this.S;
    JAM.set(v573, j$$12, t$$9);
    ++i$$40;
    v574 = i$$40 < 256;
  }
  this.i = 0;
  this.j = 0;
  return;
}
function ARC4next() {
  var t$$10;
  var v1214 = this.i;
  var v575 = v1214 + 1;
  this.i = v575 & 255;
  var v1215 = this.j;
  var v1471 = this.S;
  var v1472 = this.i;
  var v1216 = v1471[v1472];
  var v576 = v1215 + v1216;
  this.j = v576 & 255;
  var v577 = this.S;
  var v578 = this.i;
  t$$10 = v577[v578];
  var v579 = this.S;
  var v580 = this.i;
  var v1217 = this.S;
  var v1218 = this.j;
  v579[v580] = v1217[v1218];
  var v581 = this.S;
  var v582 = this.j;
  v581[v582] = t$$10;
  var v583 = this.S;
  var v1591 = this.S;
  var v1592 = this.i;
  var v1473 = v1591[v1592];
  var v1219 = t$$10 + v1473;
  var v584 = v1219 & 255;
  return v583[v584];
}
function prng_newstate() {
  return new Arcfour;
}
function rng_seed_int() {
  var x$$86 = 1122926989487;
  var v585 = rng_pptr;
  rng_pptr = rng_pptr + 1;
  var v1474 = rng_pool[v585];
  var v1475 = x$$86 & 255;
  rng_pool[v585] = v1474 ^ v1475;
  var v586 = rng_pptr;
  rng_pptr = rng_pptr + 1;
  var v1476 = rng_pool[v586];
  var v1593 = x$$86 >> 8;
  var v1477 = v1593 & 255;
  rng_pool[v586] = v1476 ^ v1477;
  var v587 = rng_pptr;
  rng_pptr = rng_pptr + 1;
  var v1478 = rng_pool[v587];
  var v1594 = x$$86 >> 16;
  var v1479 = v1594 & 255;
  rng_pool[v587] = v1478 ^ v1479;
  var v588 = rng_pptr;
  rng_pptr = rng_pptr + 1;
  var v1480 = rng_pool[v588];
  var v1595 = x$$86 >> 24;
  var v1481 = v1595 & 255;
  rng_pool[v588] = v1480 ^ v1481;
  var v589 = rng_pptr >= rng_psize;
  if (v589) {
    rng_pptr = rng_pptr - rng_psize;
  }
  return;
}
function rng_seed_time() {
  rng_seed_int();
  return;
}
function rng_get_byte() {
  var v591 = rng_state == null;
  if (v591) {
    rng_seed_time();
    rng_state = prng_newstate();
    JAM.call(rng_state.init, rng_state, [rng_pool]);
    rng_pptr = 0;
    var v1220 = rng_pool.length;
    var v590 = rng_pptr < v1220;
    for (;v590;) {
      rng_pool[rng_pptr] = 0;
      ++rng_pptr;
      var v1221 = rng_pool.length;
      v590 = rng_pptr < v1221;
    }
    rng_pptr = 0;
  }
  return rng_state.next();
}
function rng_get_bytes(ba) {
  var i$$41;
  i$$41 = 0;
  var v1222 = ba.length;
  var v592 = i$$41 < v1222;
  for (;v592;) {
    var v1679 = rng_get_byte();
    JAM.set(ba, i$$41, v1679);
    ++i$$41;
    var v1223 = ba.length;
    v592 = i$$41 < v1223;
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
  var v1224 = i$$42 + n$$23;
  var v1225 = s$$6.length;
  var v593 = v1224 < v1225;
  for (;v593;) {
    var v1596 = i$$42 + n$$23;
    var v1482 = JAM.call(s$$6.substring, s$$6, [i$$42, v1596], JAM.policy.p1);
    var v1226 = v1482 + "\n";
    ret = ret + v1226;
    i$$42 = i$$42 + n$$23;
    var v1227 = i$$42 + n$$23;
    var v1228 = s$$6.length;
    v593 = v1227 < v1228;
  }
  var v1229 = s$$6.length;
  var v594 = JAM.call(s$$6.substring, s$$6, [i$$42, v1229], JAM.policy.p1);
  return ret + v594;
}
function byte2Hex(b$$7) {
  var v596 = b$$7 < 16;
  if (v596) {
    var v595 = JAM.call(b$$7.toString, b$$7, [16]);
    return "0" + v595;
  } else {
    return JAM.call(b$$7.toString, b$$7, [16]);
  }
  return;
}
function pkcs1pad2(s$$7, n$$24) {
  var v1483 = s$$7.length;
  var v1230 = v1483 + 11;
  var v597 = n$$24 < v1230;
  if (v597) {
    JAM.call(alert, null, ["Message too long for RSA"]);
    return null;
  }
  var ba$$1 = new Array;
  var v598 = s$$7.length;
  var i$$43 = v598 - 1;
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
  var v601 = n$$24 = n$$24 - 1;
  ba$$1[v601] = 0;
  var rng = new SecureRandom;
  var x$$87 = new Array;
  var v604 = n$$24 > 2;
  for (;v604;) {
    x$$87[0] = 0;
    var v1234 = x$$87[0];
    var v602 = v1234 == 0;
    for (;v602;) {
      JAM.call(rng.nextBytes, rng, [x$$87]);
      var v1235 = x$$87[0];
      v602 = v1235 == 0;
    }
    var v603 = n$$24 = n$$24 - 1;
    ba$$1[v603] = x$$87[0];
    v604 = n$$24 > 2;
  }
  var v605 = n$$24 = n$$24 - 1;
  ba$$1[v605] = 2;
  var v606 = n$$24 = n$$24 - 1;
  ba$$1[v606] = 0;
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
    var v1598 = N.length;
    v1484 = v1598 > 0;
  }
  var v1236 = v1484;
  if (v1236) {
    var v1485 = E.length;
    v1236 = v1485 > 0;
  }
  var v607 = v1236;
  if (v607) {
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
  var v608 = this.e;
  var v609 = this.n;
  return JAM.call(x$$88.modPowInt, x$$88, [v608, v609], JAM.policy.p1);
}
function RSAEncrypt(text$$7) {
  var v1599 = this.n;
  var v1486 = v1599.bitLength();
  var v1237 = v1486 + 7;
  var v610 = v1237 >> 3;
  var m$$15 = pkcs1pad2(text$$7, v610);
  var v611 = m$$15 == null;
  if (v611) {
    return null;
  }
  var c$$13 = JAM.call(this.doPublic, this, [m$$15]);
  var v612 = c$$13 == null;
  if (v612) {
    return null;
  }
  var h$$7 = JAM.call(c$$13.toString, c$$13, [16]);
  var v1487 = h$$7.length;
  var v1238 = v1487 & 1;
  var v613 = v1238 == 0;
  if (v613) {
    return h$$7;
  } else {
    return "0" + h$$7;
  }
  return;
}
function pkcs1unpad2(d$$6, n$$25) {
  var b$$8 = d$$6.toByteArray();
  var i$$44 = 0;
  var v1488 = b$$8.length;
  var v1239 = i$$44 < v1488;
  if (v1239) {
    var v1489 = b$$8[i$$44];
    v1239 = v1489 == 0;
  }
  var v614 = v1239;
  for (;v614;) {
    ++i$$44;
    var v1490 = b$$8.length;
    var v1240 = i$$44 < v1490;
    if (v1240) {
      var v1491 = b$$8[i$$44];
      v1240 = v1491 == 0;
    }
    v614 = v1240;
  }
  var v1600 = b$$8.length;
  var v1492 = v1600 - i$$44;
  var v1493 = n$$25 - 1;
  var v1241 = v1492 != v1493;
  var v1495 = !v1241;
  if (v1495) {
    var v1494 = b$$8[i$$44];
    v1241 = v1494 != 2;
  }
  var v615 = v1241;
  if (v615) {
    return null;
  }
  ++i$$44;
  var v1242 = b$$8[i$$44];
  var v617 = v1242 != 0;
  for (;v617;) {
    var v1243 = i$$44 = i$$44 + 1;
    var v1244 = b$$8.length;
    var v616 = v1243 >= v1244;
    if (v616) {
      return null;
    }
    var v1245 = b$$8[i$$44];
    v617 = v1245 != 0;
  }
  var ret$$1 = "";
  var v1246 = i$$44 = i$$44 + 1;
  var v1247 = b$$8.length;
  var v618 = v1246 < v1247;
  for (;v618;) {
    var v1496 = b$$8[i$$44];
    var v1248 = String.fromCharCode(v1496);
    ret$$1 = ret$$1 + v1248;
    var v1249 = i$$44 = i$$44 + 1;
    var v1250 = b$$8.length;
    v618 = v1249 < v1250;
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
    var v1602 = N$$1.length;
    v1497 = v1602 > 0;
  }
  var v1251 = v1497;
  if (v1251) {
    var v1498 = E$$1.length;
    v1251 = v1498 > 0;
  }
  var v619 = v1251;
  if (v619) {
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
    var v1604 = N$$2.length;
    v1499 = v1604 > 0;
  }
  var v1252 = v1499;
  if (v1252) {
    var v1500 = E$$2.length;
    v1252 = v1500 > 0;
  }
  var v620 = v1252;
  if (v620) {
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
      var v621 = B - qs;
      var v1695 = new BigInteger(v621, 1, rng$$1);
      this.p = v1695;
      var v1651 = this.p;
      var v1652 = BigInteger.ONE;
      var v1637 = JAM.call(v1651.subtract, v1651, [v1652]);
      var v1605 = JAM.call(v1637.gcd, v1637, [ee]);
      var v1606 = BigInteger.ONE;
      var v1501 = JAM.call(v1605.compareTo, v1605, [v1606]);
      var v1253 = v1501 == 0;
      if (v1253) {
        var v1502 = this.p;
        v1253 = JAM.call(v1502.isProbablePrime, v1502, [10]);
      }
      var v622 = v1253;
      if (v622) {
        break;
      }
    }
    for (;;) {
      var v1696 = new BigInteger(qs, 1, rng$$1);
      this.q = v1696;
      var v1653 = this.q;
      var v1654 = BigInteger.ONE;
      var v1638 = JAM.call(v1653.subtract, v1653, [v1654]);
      var v1607 = JAM.call(v1638.gcd, v1638, [ee]);
      var v1608 = BigInteger.ONE;
      var v1503 = JAM.call(v1607.compareTo, v1607, [v1608]);
      var v1254 = v1503 == 0;
      if (v1254) {
        var v1504 = this.q;
        v1254 = JAM.call(v1504.isProbablePrime, v1504, [10]);
      }
      var v623 = v1254;
      if (v623) {
        break;
      }
    }
    var v1505 = this.p;
    var v1506 = this.q;
    var v1255 = JAM.call(v1505.compareTo, v1505, [v1506]);
    var v624 = v1255 <= 0;
    if (v624) {
      var t$$11 = this.p;
      this.p = this.q;
      this.q = t$$11;
    }
    var v625 = this.p;
    var v626 = BigInteger.ONE;
    var p1 = JAM.call(v625.subtract, v625, [v626]);
    var v627 = this.q;
    var v628 = BigInteger.ONE;
    var q1 = JAM.call(v627.subtract, v627, [v628]);
    var phi = JAM.call(p1.multiply, p1, [q1]);
    var v1507 = JAM.call(phi.gcd, phi, [ee]);
    var v1508 = BigInteger.ONE;
    var v1256 = JAM.call(v1507.compareTo, v1507, [v1508]);
    var v635 = v1256 == 0;
    if (v635) {
      var v629 = this.p;
      var v630 = this.q;
      var v1697 = JAM.call(v629.multiply, v629, [v630]);
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
      var v634 = this.p;
      var v1701 = JAM.call(v633.modInverse, v633, [v634]);
      this.coeff = v1701;
      break;
    }
  }
  return;
}
function RSADoPrivate(x$$89) {
  var v1509 = this.p;
  var v1257 = v1509 == null;
  var v1511 = !v1257;
  if (v1511) {
    var v1510 = this.q;
    v1257 = v1510 == null;
  }
  var v638 = v1257;
  if (v638) {
    var v636 = this.d;
    var v637 = this.n;
    return JAM.call(x$$89.modPow, x$$89, [v636, v637], JAM.policy.p1);
  }
  var v1258 = this.p;
  var v639 = JAM.call(x$$89.mod, x$$89, [v1258]);
  var v640 = this.dmp1;
  var v641 = this.p;
  var xp = JAM.call(v639.modPow, v639, [v640, v641], JAM.policy.p1);
  var v1259 = this.q;
  var v642 = JAM.call(x$$89.mod, x$$89, [v1259]);
  var v643 = this.dmq1;
  var v644 = this.q;
  var xq = JAM.call(v642.modPow, v642, [v643, v644], JAM.policy.p1);
  var v1260 = JAM.call(xp.compareTo, xp, [xq]);
  var v646 = v1260 < 0;
  for (;v646;) {
    var v645 = this.p;
    xp = JAM.call(xp.add, xp, [v645]);
    var v1261 = JAM.call(xp.compareTo, xp, [xq]);
    v646 = v1261 < 0;
  }
  var v1609 = JAM.call(xp.subtract, xp, [xq]);
  var v1610 = this.coeff;
  var v1512 = JAM.call(v1609.multiply, v1609, [v1610]);
  var v1513 = this.p;
  var v1262 = JAM.call(v1512.mod, v1512, [v1513]);
  var v1263 = this.q;
  var v647 = JAM.call(v1262.multiply, v1262, [v1263]);
  return JAM.call(v647.add, v647, [xq]);
}
function RSADecrypt(ctext) {
  var c$$14 = parseBigInt(ctext);
  var m$$16 = JAM.call(this.doPrivate, this, [c$$14]);
  var v648 = m$$16 == null;
  if (v648) {
    return null;
  }
  var v1611 = this.n;
  var v1514 = v1611.bitLength();
  var v1264 = v1514 + 7;
  var v649 = v1264 >> 3;
  return pkcs1unpad2(m$$16, v649);
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
  var v650 = decrypted != TEXT;
  if (v650) {
    throw new Error("Crypto operation failed");
  }
  return;
}
function ShowBox(name$$32) {
  function v2(entry) {
    var v1265 = name$$32.valueOf();
    var v1266 = entry.valueOf();
    var v653 = v1265 === v1266;
    if (v653) {
      var v1267 = "Box-" + name$$32;
      var v651 = v1267 + "Latency";
      var box1 = document.getElementById(v651);
      var v652 = box1.style;
      v652.visibility = "visible";
    }
    return;
  }
  var v654 = "Box-" + name$$32;
  var box = document.getElementById(v654);
  var v655 = box.style;
  v655.visibility = "visible";
  var v1268 = document.getElementById("progress-bar");
  var v656 = v1268.style;
  var v1639 = completed = completed + 1;
  var v1612 = v1639 / benchmarks;
  var v1515 = v1612 * 100;
  var v1269 = "" + v1515;
  var bar = v656.width = v1269 + "%";
  latencyBenchmarks.forEach(v2);
  return;
}
function AddResult(name$$33, result$$2) {
  var v1270 = name$$33 + ": ";
  var v657 = v1270 + result$$2;
  console.log(v657);
  var v658 = "Result-" + name$$33;
  var box$$1 = document.getElementById(v658);
  JAM.set(box$$1, "innerHTML", result$$2);
  return;
}
function AddError(name$$34, error$$2) {
  var v1271 = name$$34 + ": ";
  var v1272 = error$$2.message;
  var v659 = v1271 + v1272;
  console.log(v659);
  var v661 = error$$2 == "TypedArrayUnsupported";
  if (v661) {
    AddResult(name$$34, "<b>Unsupported</b>");
  } else {
    var v660 = error$$2 == "PerformanceNowUnsupported";
    if (v660) {
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
  var v1273 = document.getElementById("progress-bar-container");
  var v662 = v1273.style;
  v662.visibility = "hidden";
  var v1274 = document.getElementById("bottom-text");
  var v663 = v1274.style;
  v663.visibility = "visible";
  var v664 = document.getElementById("inside-anchor");
  var v665 = document.getElementById("bar-appendix");
  v664.removeChild(v665);
  var v1275 = document.getElementById("alertbox");
  var v666 = v1275.style;
  v666.visibility = "hidden";
  return;
}
function Run() {
  var v667 = document.getElementById("main-banner");
  JAM.set(v667, "innerHTML", "Running Octane...");
  var v668 = document.getElementById("bar-appendix");
  JAM.set(v668, "innerHTML", '<br/><div class="progress progress-striped" id="progress-bar-container" style="visibility:hidden"><div class="bar"style="width: 0%;" id="progress-bar"></div></div>');
  var anchor = document.getElementById("run-octane");
  var parent = document.getElementById("main-container");
  var v669 = document.getElementById("inside-anchor");
  JAM.call(parent.appendChild, parent, [v669]);
  parent.removeChild(anchor);
  var v670 = document.getElementById("startup-text");
  JAM.set(v670, "innerHTML", "");
  var v1276 = document.getElementById("progress-bar-container");
  var v671 = v1276.style;
  v671.visibility = "visible";
  BenchmarkSuite.RunSuites();
  return;
}
function CheckCompatibility() {
  var v1516 = typeof Uint8Array;
  var v1277 = v1516 != "undefined";
  if (v1277) {
    var v1517 = typeof Float64Array;
    v1277 = v1517 != "undefined";
  }
  var v672 = v1277;
  if (v672) {
    var v1613 = new Uint8Array(0);
    var v1518 = v1613.subarray;
    var v1278 = typeof v1518;
    v672 = v1278 != "undefined";
  }
  var hasTypedArrays = v672;
  var v674 = !hasTypedArrays;
  if (v674) {
    console.log("Typed Arrays not supported");
    var v1279 = document.getElementById("alertbox");
    var v673 = v1279.style;
    v673.display = "block";
  }
  var v1614 = window.document;
  var v1519 = v1614.URL;
  var v1280 = v1519.indexOf("skip_zlib=1");
  var v675 = v1280 >= 0;
  if (v675) {
    skipBenchmarks.push("zlib");
  }
  var v1615 = window.document;
  var v1520 = v1615.URL;
  var v1281 = v1520.indexOf("auto=1");
  var v676 = v1281 >= 0;
  if (v676) {
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
var v678 = BenchmarkResult.prototype;
v678.valueOf = v4;
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
var v679 = BenchmarkSuite.prototype;
v679.NotifyStep = v15;
var v680 = BenchmarkSuite.prototype;
v680.NotifyResult = v16;
var v681 = BenchmarkSuite.prototype;
v681.NotifySkipped = v17;
var v682 = BenchmarkSuite.prototype;
v682.NotifyError = v18;
var v683 = BenchmarkSuite.prototype;
v683.RunSingleBenchmark = v19;
var v684 = BenchmarkSuite.prototype;
v684.RunStep = v20;
var v685 = [266181];
var v1282 = new Benchmark("Encrypt", 3900, encrypt);
var v1283 = new Benchmark("Decrypt", 220, decrypt);
var v686 = [v1282, v1283];
var Crypto = new BenchmarkSuite("Crypto", v685, v686);
var dbits;
var BI_DB;
var BI_DM;
var BI_DV;
var BI_FP;
var BI_FV;
var BI_F1;
var BI_F2;
var canary = 0xdeadbeefcafe;
var v687 = canary & 16777215;
var j_lm = v687 == 15715070;
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
var v694 = Classic.prototype;
v694.convert = cConvert;
var v695 = Classic.prototype;
v695.revert = cRevert;
var v696 = Classic.prototype;
v696.reduce = cReduce;
var v697 = Classic.prototype;
v697.mulTo = cMulTo;
var v698 = Classic.prototype;
v698.sqrTo = cSqrTo;
var v699 = Montgomery.prototype;
v699.convert = montConvert;
var v700 = Montgomery.prototype;
v700.revert = montRevert;
var v701 = Montgomery.prototype;
v701.reduce = montReduce;
var v702 = Montgomery.prototype;
v702.mulTo = montMulTo;
var v703 = Montgomery.prototype;
v703.sqrTo = montSqrTo;
var v704 = BigInteger.prototype;
v704.copyTo = bnpCopyTo;
var v705 = BigInteger.prototype;
v705.fromInt = bnpFromInt;
var v706 = BigInteger.prototype;
v706.fromString = bnpFromString;
var v707 = BigInteger.prototype;
v707.clamp = bnpClamp;
var v708 = BigInteger.prototype;
v708.dlShiftTo = bnpDLShiftTo;
var v709 = BigInteger.prototype;
v709.drShiftTo = bnpDRShiftTo;
var v710 = BigInteger.prototype;
v710.lShiftTo = bnpLShiftTo;
var v711 = BigInteger.prototype;
v711.rShiftTo = bnpRShiftTo;
var v712 = BigInteger.prototype;
v712.subTo = bnpSubTo;
var v713 = BigInteger.prototype;
v713.multiplyTo = bnpMultiplyTo;
var v714 = BigInteger.prototype;
v714.squareTo = bnpSquareTo;
var v715 = BigInteger.prototype;
v715.divRemTo = bnpDivRemTo;
var v716 = BigInteger.prototype;
v716.invDigit = bnpInvDigit;
var v717 = BigInteger.prototype;
v717.isEven = bnpIsEven;
var v718 = BigInteger.prototype;
v718.exp = bnpExp;
var v719 = BigInteger.prototype;
v719.toString = bnToString;
var v720 = BigInteger.prototype;
v720.negate = bnNegate;
var v721 = BigInteger.prototype;
v721.abs = bnAbs;
var v722 = BigInteger.prototype;
v722.compareTo = bnCompareTo;
var v723 = BigInteger.prototype;
v723.bitLength = bnBitLength;
var v724 = BigInteger.prototype;
v724.mod = bnMod;
var v725 = BigInteger.prototype;
v725.modPowInt = bnModPowInt;
var v726 = BigInteger;
var v1703 = nbv(0);
v726.ZERO = v1703;
var v727 = BigInteger;
var v1704 = nbv(1);
v727.ONE = v1704;
var v728 = NullExp.prototype;
v728.convert = nNop;
var v729 = NullExp.prototype;
v729.revert = nNop;
var v730 = NullExp.prototype;
v730.mulTo = nMulTo;
var v731 = NullExp.prototype;
v731.sqrTo = nSqrTo;
var v732 = Barrett.prototype;
v732.convert = barrettConvert;
var v733 = Barrett.prototype;
v733.revert = barrettRevert;
var v734 = Barrett.prototype;
v734.reduce = barrettReduce;
var v735 = Barrett.prototype;
v735.mulTo = barrettMulTo;
var v736 = Barrett.prototype;
v736.sqrTo = barrettSqrTo;
var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509];
var v737 = 1 << 26;
var v1521 = lowprimes.length;
var v1284 = v1521 - 1;
var v738 = lowprimes[v1284];
var lplim = v737 / v738;
var v739 = BigInteger.prototype;
v739.chunkSize = bnpChunkSize;
var v740 = BigInteger.prototype;
v740.toRadix = bnpToRadix;
var v741 = BigInteger.prototype;
v741.fromRadix = bnpFromRadix;
var v742 = BigInteger.prototype;
v742.fromNumber = bnpFromNumber;
var v743 = BigInteger.prototype;
v743.bitwiseTo = bnpBitwiseTo;
var v744 = BigInteger.prototype;
v744.changeBit = bnpChangeBit;
var v745 = BigInteger.prototype;
v745.addTo = bnpAddTo;
var v746 = BigInteger.prototype;
v746.dMultiply = bnpDMultiply;
var v747 = BigInteger.prototype;
v747.dAddOffset = bnpDAddOffset;
var v748 = BigInteger.prototype;
v748.multiplyLowerTo = bnpMultiplyLowerTo;
var v749 = BigInteger.prototype;
v749.multiplyUpperTo = bnpMultiplyUpperTo;
var v750 = BigInteger.prototype;
v750.modInt = bnpModInt;
var v751 = BigInteger.prototype;
v751.millerRabin = bnpMillerRabin;
var v752 = BigInteger.prototype;
v752.clone = bnClone;
var v753 = BigInteger.prototype;
v753.intValue = bnIntValue;
var v754 = BigInteger.prototype;
v754.byteValue = bnByteValue;
var v755 = BigInteger.prototype;
v755.shortValue = bnShortValue;
var v756 = BigInteger.prototype;
v756.signum = bnSigNum;
var v757 = BigInteger.prototype;
v757.toByteArray = bnToByteArray;
var v758 = BigInteger.prototype;
v758.equals = bnEquals;
var v759 = BigInteger.prototype;
v759.min = bnMin;
var v760 = BigInteger.prototype;
v760.max = bnMax;
var v761 = BigInteger.prototype;
v761.and = bnAnd;
var v762 = BigInteger.prototype;
v762.or = bnOr;
var v763 = BigInteger.prototype;
v763.xor = bnXor;
var v764 = BigInteger.prototype;
v764.andNot = bnAndNot;
var v765 = BigInteger.prototype;
v765.not = bnNot;
var v766 = BigInteger.prototype;
v766.shiftLeft = bnShiftLeft;
var v767 = BigInteger.prototype;
v767.shiftRight = bnShiftRight;
var v768 = BigInteger.prototype;
v768.getLowestSetBit = bnGetLowestSetBit;
var v769 = BigInteger.prototype;
v769.bitCount = bnBitCount;
var v770 = BigInteger.prototype;
v770.testBit = bnTestBit;
var v771 = BigInteger.prototype;
v771.setBit = bnSetBit;
var v772 = BigInteger.prototype;
v772.clearBit = bnClearBit;
var v773 = BigInteger.prototype;
v773.flipBit = bnFlipBit;
var v774 = BigInteger.prototype;
v774.add = bnAdd;
var v775 = BigInteger.prototype;
v775.subtract = bnSubtract;
var v776 = BigInteger.prototype;
v776.multiply = bnMultiply;
var v777 = BigInteger.prototype;
v777.divide = bnDivide;
var v778 = BigInteger.prototype;
v778.remainder = bnRemainder;
var v779 = BigInteger.prototype;
v779.divideAndRemainder = bnDivideAndRemainder;
var v780 = BigInteger.prototype;
v780.modPow = bnModPow;
var v781 = BigInteger.prototype;
v781.modInverse = bnModInverse;
var v782 = BigInteger.prototype;
v782.pow = bnPow;
var v783 = BigInteger.prototype;
v783.gcd = bnGCD;
var v784 = BigInteger.prototype;
v784.isProbablePrime = bnIsProbablePrime;
var v785 = Arcfour.prototype;
v785.init = ARC4init;
var v786 = Arcfour.prototype;
v786.next = ARC4next;
var rng_psize = 256;
var rng_state;
var rng_pool;
var rng_pptr;
var v791 = rng_pool == null;
if (v791) {
  rng_pool = new Array;
  rng_pptr = 0;
  var t;
  var v790 = rng_pptr < rng_psize;
  for (;v790;) {
    var v1285 = Math.random();
    var v787 = 65536 * v1285;
    t = Math.floor(v787);
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
var v792 = SecureRandom.prototype;
v792.nextBytes = rng_get_bytes;
var v793 = RSAKey.prototype;
v793.doPublic = RSADoPublic;
var v794 = RSAKey.prototype;
v794.setPublic = RSASetPublic;
var v795 = RSAKey.prototype;
v795.encrypt = RSAEncrypt;
var v796 = RSAKey.prototype;
v796.doPrivate = RSADoPrivate;
var v797 = RSAKey.prototype;
v797.setPrivate = RSASetPrivate;
var v798 = RSAKey.prototype;
v798.setPrivateEx = RSASetPrivateEx;
var v799 = RSAKey.prototype;
v799.generate = RSAGenerate;
var v800 = RSAKey.prototype;
v800.decrypt = RSADecrypt;
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
var v1522 = typeof skipBenchmarks;
var v1286 = v1522 === "undefined";
if (v1286) {
  v801 = [];
} else {
  v801 = skipBenchmarks;
}
var skipBenchmarks = v801
