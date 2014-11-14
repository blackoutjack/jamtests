
JAM.startProfile('load');
function v21(fn, bits) {
  var v22 = BigInteger.prototype;
  v22.am = fn;
  dbits = bits;
  BI_DB = dbits;
  var v23 = 1 << dbits;
  BI_DM = v23 - 1;
  BI_DV = 1 << dbits;
  BI_FP = 52;
  BI_FV = Math.pow(2, BI_FP);
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
        var v804 = suite$$1.benchmarks;
        var v25 = v804[index$$40];
        v25.Setup();
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
      var v805 = suite$$1.benchmarks;
      var v27 = v805[index$$40];
      data$$20 = suite$$1.RunSingleBenchmark(v27, data$$20);
    } catch (e$$5) {
      suite$$1.NotifyError(e$$5);
      return null;
    }
    var v28;
    var v806 = data$$20 == null;
    if (v806) {
      v28 = RunNextTearDown;
    } else {
      v28 = RunNextBenchmark();
    }
    return v28;
  }
  function RunNextTearDown() {
    try {
      var v807 = suite$$1.benchmarks;
      var v808 = index$$40;
      index$$40 = index$$40 + 1;
      var v29 = v807[v808];
      v29.TearDown();
    } catch (e$$6) {
      suite$$1.NotifyError(e$$6);
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
    var v809;
    if (doDeterministic$$1) {
      var v1289 = benchmark$$1.deterministicIterations;
      v809 = i$$5 < v1289;
    } else {
      v809 = elapsed < 1E3;
    }
    var v32 = v809;
    for (;v32;) {
      benchmark$$1.run();
      var v31 = new Date;
      elapsed = v31 - start$$4;
      i$$5++;
      var v810;
      if (doDeterministic$$1) {
        var v1290 = benchmark$$1.deterministicIterations;
        v810 = i$$5 < v1290;
      } else {
        v810 = elapsed < 1E3;
      }
      v32 = v810;
    }
    var v33 = data$$19 != null;
    if (v33) {
      var v811 = data$$19.runs;
      data$$19.runs = v811 + i$$5;
      var v812 = data$$19.elapsed;
      data$$19.elapsed = v812 + elapsed;
    }
    return;
  }
  var config = BenchmarkSuite.config;
  var v34;
  var v1291 = config.doWarmup;
  var v813 = v1291 !== undefined;
  if (v813) {
    v34 = config.doWarmup;
  } else {
    v34 = benchmark$$1.doWarmup;
  }
  var doWarmup$$1 = v34;
  var v35;
  var v1292 = config.doDeterministic;
  var v814 = v1292 !== undefined;
  if (v814) {
    v35 = config.doDeterministic;
  } else {
    v35 = benchmark$$1.doDeterministic;
  }
  var doDeterministic$$1 = v35;
  var v815 = !doWarmup$$1;
  if (v815) {
    v815 = data$$18 == null;
  }
  var v36 = v815;
  if (v36) {
    data$$18 = {runs:0, elapsed:0};
  }
  var v42 = data$$18 == null;
  if (v42) {
    Measure(null);
    return{runs:0, elapsed:0};
  } else {
    Measure(data$$18);
    var v816 = data$$18.runs;
    var v817 = benchmark$$1.minIterations;
    var v37 = v816 < v817;
    if (v37) {
      return data$$18;
    }
    var v818 = data$$18.elapsed;
    var v38 = v818 * 1E3;
    var v39 = data$$18.runs;
    var usec = v38 / v39;
    var v40;
    var v1293 = benchmark$$1.rmsResult;
    var v819 = v1293 != null;
    if (v819) {
      v40 = benchmark$$1.rmsResult();
    } else {
      v40 = 0;
    }
    var rms = v40;
    var v41 = new BenchmarkResult(benchmark$$1, usec, rms);
    this.NotifyStep(v41);
    return null;
  }
  return;
}
function v18(error$$1) {
  var v820 = this.runner;
  var v45 = v820.NotifyError;
  if (v45) {
    var v43 = this.runner;
    var v44 = this.name;
    v43.NotifyError(v44, error$$1);
  }
  var v821 = this.runner;
  var v48 = v821.NotifyStep;
  if (v48) {
    var v46 = this.runner;
    var v47 = this.name;
    v46.NotifyStep(v47);
  }
  return;
}
function v17(runner$$1) {
  var v49 = BenchmarkSuite.scores;
  v49.push(1);
  var v51 = runner$$1.NotifyResult;
  if (v51) {
    var v50 = this.name;
    runner$$1.NotifyResult(v50, "Skipped");
  }
  return;
}
function v16() {
  var v52 = this.results;
  var mean = BenchmarkSuite.GeometricMeanTime(v52);
  var v822 = this.reference;
  var v53 = v822[0];
  var score$$1 = v53 / mean;
  var v54 = BenchmarkSuite.scores;
  v54.push(score$$1);
  var v823 = this.runner;
  var v58 = v823.NotifyResult;
  if (v58) {
    var v55 = 100 * score$$1;
    var formatted$$1 = BenchmarkSuite.FormatScore(v55);
    var v56 = this.runner;
    var v57 = this.name;
    v56.NotifyResult(v57, formatted$$1);
  }
  var v1294 = this.reference;
  var v824 = v1294.length;
  var v67 = v824 == 2;
  if (v67) {
    var v59 = this.results;
    var meanLatency = BenchmarkSuite.GeometricMeanLatency(v59);
    var v66 = meanLatency != 0;
    if (v66) {
      var v825 = this.reference;
      var v60 = v825[1];
      var scoreLatency = v60 / meanLatency;
      var v61 = BenchmarkSuite.scores;
      v61.push(scoreLatency);
      var v826 = this.runner;
      var v65 = v826.NotifyResult;
      if (v65) {
        var v62 = 100 * scoreLatency;
        var formattedLatency = BenchmarkSuite.FormatScore(v62);
        var v63 = this.runner;
        var v827 = this.name;
        var v64 = v827 + "Latency";
        v63.NotifyResult(v64, formattedLatency);
      }
    }
  }
  return;
}
function v15(result$$1) {
  var v68 = this.results;
  v68.push(result$$1);
  var v828 = this.runner;
  var v71 = v828.NotifyStep;
  if (v71) {
    var v69 = this.runner;
    var v829 = result$$1.benchmark;
    var v70 = v829.name;
    v69.NotifyStep(v70);
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
  var v830 = measurements$$1.length;
  var v74 = i$$4 < v830;
  for (;v74;) {
    var v1295 = measurements$$1[i$$4];
    var v831 = v1295.latency;
    var v73 = v831 != 0;
    if (v73) {
      var v1525 = measurements$$1[i$$4];
      var v1296 = v1525.latency;
      var v832 = Math.log(v1296);
      log$$2 = log$$2 + v832;
      hasLatencyResult = true;
    }
    i$$4++;
    var v833 = measurements$$1.length;
    v74 = i$$4 < v833;
  }
  if (hasLatencyResult) {
    var v75 = Math.E;
    var v834 = measurements$$1.length;
    var v76 = log$$2 / v834;
    return Math.pow(v75, v76);
  } else {
    return 0;
  }
  return;
}
function v12(measurements) {
  var log$$1 = 0;
  var i$$3 = 0;
  var v835 = measurements.length;
  var v77 = i$$3 < v835;
  for (;v77;) {
    var v1526 = measurements[i$$3];
    var v1297 = v1526.time;
    var v836 = Math.log(v1297);
    log$$1 = log$$1 + v836;
    i$$3++;
    var v837 = measurements.length;
    v77 = i$$3 < v837;
  }
  var v78 = Math.E;
  var v838 = measurements.length;
  var v79 = log$$1 / v838;
  return Math.pow(v78, v79);
}
function v11(numbers) {
  var log = 0;
  var i$$2 = 0;
  var v839 = numbers.length;
  var v80 = i$$2 < v839;
  for (;v80;) {
    var v1298 = numbers[i$$2];
    var v840 = Math.log(v1298);
    log = log + v840;
    i$$2++;
    var v841 = numbers.length;
    v80 = i$$2 < v841;
  }
  var v81 = Math.E;
  var v842 = numbers.length;
  var v82 = log / v842;
  return Math.pow(v81, v82);
}
function v10() {
  var result = 0;
  var suites$$1 = BenchmarkSuite.suites;
  var i$$1 = 0;
  var v843 = suites$$1.length;
  var v83 = i$$1 < v843;
  for (;v83;) {
    var v1527 = suites$$1[i$$1];
    var v1299 = v1527.benchmarks;
    var v844 = v1299.length;
    result = result + v844;
    i$$1++;
    var v845 = suites$$1.length;
    v83 = i$$1 < v845;
  }
  return result;
}
function v9(runner, skipBenchmarks$$1) {
  function RunStep() {
    var v846 = continuation;
    var v1300 = !v846;
    if (v1300) {
      v846 = index$$39 < length$$11;
    }
    var v89 = v846;
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
          runner.NotifyStart(v85);
        }
        var v1301 = suite.name;
        var v847 = skipBenchmarks$$1.indexOf(v1301);
        var v87 = v847 > -1;
        if (v87) {
          suite.NotifySkipped(runner);
        } else {
          continuation = suite.RunStep(runner);
        }
      }
      var v1302 = continuation;
      if (v1302) {
        var v1528 = typeof window;
        v1302 = v1528 != "undefined";
      }
      var v848 = v1302;
      if (v848) {
        v848 = window.setTimeout;
      }
      var v88 = v848;
      if (v88) {
        window.setTimeout(RunStep, 25);
        return;
      }
      var v849 = continuation;
      var v1303 = !v849;
      if (v1303) {
        v849 = index$$39 < length$$11;
      }
      v89 = v849;
    }
    var v92 = runner.NotifyScore;
    if (v92) {
      var v90 = BenchmarkSuite.scores;
      var score = BenchmarkSuite.GeometricMean(v90);
      var v91 = 100 * score;
      var formatted = BenchmarkSuite.FormatScore(v91);
      runner.NotifyScore(formatted);
    }
    return;
  }
  var v93;
  var v1304 = typeof skipBenchmarks$$1;
  var v850 = v1304 === "undefined";
  if (v850) {
    v93 = [];
  } else {
    v93 = skipBenchmarks$$1;
  }
  skipBenchmarks$$1 = v93;
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
      var v851 = seed + 2127912214;
      var v852 = seed << 12;
      var v94 = v851 + v852;
      seed = v94 & 4294967295;
      var v853 = seed ^ 3345072700;
      var v854 = seed >>> 19;
      var v95 = v853 ^ v854;
      seed = v95 & 4294967295;
      var v855 = seed + 374761393;
      var v856 = seed << 5;
      var v96 = v855 + v856;
      seed = v96 & 4294967295;
      var v857 = seed + 3550635116;
      var v858 = seed << 9;
      var v97 = v857 ^ v858;
      seed = v97 & 4294967295;
      var v859 = seed + 4251993797;
      var v860 = seed << 3;
      var v98 = v859 + v860;
      seed = v98 & 4294967295;
      var v861 = seed ^ 3042594569;
      var v862 = seed >>> 16;
      var v99 = v861 ^ v862;
      seed = v99 & 4294967295;
      var v100 = seed & 268435455;
      return v100 / 268435456;
    }
    var seed = 49734321;
    return v6;
  }
  var v101 = Math;
  var v1663 = v7();
  v101.random = v1663;
  return;
}
function v5(s$$2) {
  throw "Alert called with argument: " + s$$2;
}
function v4() {
  return this.time;
}
function v3() {
  var v1618 = performance.now;
  var v1642 = !v1618;
  if (v1642) {
    v1618 = performance.mozNow;
  }
  var v1529 = v1618;
  var v1619 = !v1529;
  if (v1619) {
    v1529 = performance.msNow;
  }
  var v1305 = v1529;
  var v1530 = !v1305;
  if (v1530) {
    v1305 = performance.oNow;
  }
  var v863 = v1305;
  var v1306 = !v863;
  if (v1306) {
    v863 = performance.webkitNow;
  }
  var v102 = v863;
  var v864 = !v102;
  if (v864) {
    v102 = Date.now;
  }
  return v102;
}
function Benchmark(name$$30, doWarmup, doDeterministic, deterministicIterations, run, setup, tearDown, rmsResult, minIterations) {
  function v1() {
    return;
  }
  function v0() {
    return;
  }
  this.name = name$$30;
  this.doWarmup = doWarmup;
  this.doDeterministic = doDeterministic;
  this.deterministicIterations = deterministicIterations;
  this.run = run;
  var v103;
  if (setup) {
    v103 = setup;
  } else {
    v103 = v0;
  }
  this.Setup = v103;
  var v104;
  if (tearDown) {
    v104 = tearDown;
  } else {
    v104 = v1;
  }
  this.TearDown = v104;
  var v105;
  if (rmsResult) {
    v105 = rmsResult;
  } else {
    v105 = null;
  }
  this.rmsResult = v105;
  var v106;
  if (minIterations) {
    v106 = minIterations;
  } else {
    v106 = 32;
  }
  this.minIterations = v106;
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
  var v107 = BenchmarkSuite.suites;
  v107.push(this);
  return;
}
function BigInteger(a, b, c) {
  var v1664 = new Array;
  this.array = v1664;
  var v110 = a != null;
  if (v110) {
    var v865 = typeof a;
    var v109 = "number" == v865;
    if (v109) {
      this.fromNumber(a, b, c);
    } else {
      var v866 = b == null;
      if (v866) {
        var v1307 = typeof a;
        v866 = "string" != v1307;
      }
      var v108 = v866;
      if (v108) {
        this.fromString(a, 256);
      } else {
        this.fromString(a, b);
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
  var v867 = n$$1 = n$$1 - 1;
  var v114 = v867 >= 0;
  for (;v114;) {
    var v1531 = i$$6;
    i$$6 = i$$6 + 1;
    var v1308 = this_array$$1[v1531];
    var v868 = x$$47 * v1308;
    var v869 = w_array[j];
    var v111 = v868 + v869;
    var v = v111 + c$$1;
    var v112 = v / 67108864;
    c$$1 = Math.floor(v112);
    var v113 = j;
    j = j + 1;
    w_array[v113] = v & 67108863;
    var v870 = n$$1 = n$$1 - 1;
    v114 = v870 >= 0;
  }
  return c$$1;
}
function am2(i$$7, x$$48, w$$6, j$$1, c$$2, n$$2) {
  var this_array$$2 = this.array;
  var w_array$$1 = w$$6.array;
  var xl = x$$48 & 32767;
  var xh = x$$48 >> 15;
  var v871 = n$$2 = n$$2 - 1;
  var v124 = v871 >= 0;
  for (;v124;) {
    var v115 = this_array$$2[i$$7];
    var l = v115 & 32767;
    var v872 = i$$7;
    i$$7 = i$$7 + 1;
    var v116 = this_array$$2[v872];
    var h$$4 = v116 >> 15;
    var v117 = xh * l;
    var v118 = h$$4 * xl;
    var m = v117 + v118;
    var v1309 = xl * l;
    var v1532 = m & 32767;
    var v1310 = v1532 << 15;
    var v873 = v1309 + v1310;
    var v874 = w_array$$1[j$$1];
    var v119 = v873 + v874;
    var v120 = c$$2 & 1073741823;
    l = v119 + v120;
    var v1311 = l >>> 30;
    var v1312 = m >>> 15;
    var v875 = v1311 + v1312;
    var v876 = xh * h$$4;
    var v121 = v875 + v876;
    var v122 = c$$2 >>> 30;
    c$$2 = v121 + v122;
    var v123 = j$$1;
    j$$1 = j$$1 + 1;
    w_array$$1[v123] = l & 1073741823;
    var v877 = n$$2 = n$$2 - 1;
    v124 = v877 >= 0;
  }
  return c$$2;
}
function am3(i$$8, x$$49, w$$7, j$$2, c$$3, n$$3) {
  var this_array$$3 = this.array;
  var w_array$$2 = w$$7.array;
  var xl$$1 = x$$49 & 16383;
  var xh$$1 = x$$49 >> 14;
  var v878 = n$$3 = n$$3 - 1;
  var v133 = v878 >= 0;
  for (;v133;) {
    var v125 = this_array$$3[i$$8];
    var l$$1 = v125 & 16383;
    var v879 = i$$8;
    i$$8 = i$$8 + 1;
    var v126 = this_array$$3[v879];
    var h$$5 = v126 >> 14;
    var v127 = xh$$1 * l$$1;
    var v128 = h$$5 * xl$$1;
    var m$$1 = v127 + v128;
    var v1313 = xl$$1 * l$$1;
    var v1533 = m$$1 & 16383;
    var v1314 = v1533 << 14;
    var v880 = v1313 + v1314;
    var v881 = w_array$$2[j$$2];
    var v129 = v880 + v881;
    l$$1 = v129 + c$$3;
    var v882 = l$$1 >> 28;
    var v883 = m$$1 >> 14;
    var v130 = v882 + v883;
    var v131 = xh$$1 * h$$5;
    c$$3 = v130 + v131;
    var v132 = j$$2;
    j$$2 = j$$2 + 1;
    w_array$$2[v132] = l$$1 & 268435455;
    var v884 = n$$3 = n$$3 - 1;
    v133 = v884 >= 0;
  }
  return c$$3;
}
function am4(i$$9, x$$50, w$$8, j$$3, c$$4, n$$4) {
  var this_array$$4 = this.array;
  var w_array$$3 = w$$8.array;
  var xl$$2 = x$$50 & 8191;
  var xh$$2 = x$$50 >> 13;
  var v885 = n$$4 = n$$4 - 1;
  var v142 = v885 >= 0;
  for (;v142;) {
    var v134 = this_array$$4[i$$9];
    var l$$2 = v134 & 8191;
    var v886 = i$$9;
    i$$9 = i$$9 + 1;
    var v135 = this_array$$4[v886];
    var h$$6 = v135 >> 13;
    var v136 = xh$$2 * l$$2;
    var v137 = h$$6 * xl$$2;
    var m$$2 = v136 + v137;
    var v1315 = xl$$2 * l$$2;
    var v1534 = m$$2 & 8191;
    var v1316 = v1534 << 13;
    var v887 = v1315 + v1316;
    var v888 = w_array$$3[j$$3];
    var v138 = v887 + v888;
    l$$2 = v138 + c$$4;
    var v889 = l$$2 >> 26;
    var v890 = m$$2 >> 13;
    var v139 = v889 + v890;
    var v140 = xh$$2 * h$$6;
    c$$4 = v139 + v140;
    var v141 = j$$3;
    j$$3 = j$$3 + 1;
    w_array$$3[v141] = l$$2 & 67108863;
    var v891 = n$$4 = n$$4 - 1;
    v142 = v891 >= 0;
  }
  return c$$4;
}
function int2char(n$$5) {
  return BI_RM.charAt(n$$5);
}
function intAt(s$$3, i$$10) {
  var v143 = BI_RC;
  var v144 = s$$3.charCodeAt(i$$10);
  var c$$5 = v143[v144];
  var v145;
  var v892 = c$$5 == null;
  if (v892) {
    v145 = -1;
  } else {
    v145 = c$$5;
  }
  return v145;
}
function bnpCopyTo(r) {
  var this_array$$5 = this.array;
  var r_array = r.array;
  var v146 = this.t;
  var i$$11 = v146 - 1;
  var v147 = i$$11 >= 0;
  for (;v147;) {
    r_array[i$$11] = this_array$$5[i$$11];
    --i$$11;
    v147 = i$$11 >= 0;
  }
  r.t = this.t;
  r.s = this.s;
  return;
}
function bnpFromInt(x$$51) {
  var this_array$$6 = this.array;
  this.t = 1;
  var v148;
  var v893 = x$$51 < 0;
  if (v893) {
    v148 = -1;
  } else {
    v148 = 0;
  }
  this.s = v148;
  var v150 = x$$51 > 0;
  if (v150) {
    this_array$$6[0] = x$$51;
  } else {
    var v149 = x$$51 < -1;
    if (v149) {
      this_array$$6[0] = x$$51 + DV;
    } else {
      this.t = 0;
    }
  }
  return;
}
function nbv(i$$12) {
  var r$$1 = nbi();
  r$$1.fromInt(i$$12);
  return r$$1;
}
function bnpFromString(s$$4, b$$1) {
  var this_array$$7 = this.array;
  var k;
  var v156 = b$$1 == 16;
  if (v156) {
    k = 4;
  } else {
    var v155 = b$$1 == 8;
    if (v155) {
      k = 3;
    } else {
      var v154 = b$$1 == 256;
      if (v154) {
        k = 8;
      } else {
        var v153 = b$$1 == 2;
        if (v153) {
          k = 1;
        } else {
          var v152 = b$$1 == 32;
          if (v152) {
            k = 5;
          } else {
            var v151 = b$$1 == 4;
            if (v151) {
              k = 2;
            } else {
              this.fromRadix(s$$4, b$$1);
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
  var v894 = i$$13 = i$$13 - 1;
  var v167 = v894 >= 0;
  for (;v167;) {
    var v157;
    var v896 = k == 8;
    if (v896) {
      var v895 = s$$4[i$$13];
      v157 = v895 & 255;
    } else {
      v157 = intAt(s$$4, i$$13);
    }
    var x$$52 = v157;
    var v159 = x$$52 < 0;
    if (v159) {
      var v897 = s$$4.charAt(i$$13);
      var v158 = v897 == "-";
      if (v158) {
        mi = true;
      }
      var v898 = i$$13 = i$$13 - 1;
      v167 = v898 >= 0;
      continue;
    }
    mi = false;
    var v165 = sh$$2 == 0;
    if (v165) {
      var v160 = this.t;
      var v1317 = this.t;
      this.t = v1317 + 1;
      this_array$$7[v160] = x$$52;
    } else {
      var v899 = sh$$2 + k;
      var v164 = v899 > BI_DB;
      if (v164) {
        var v900 = this.t;
        var v161 = v900 - 1;
        var v1318 = this_array$$7[v161];
        var v1657 = BI_DB - sh$$2;
        var v1643 = 1 << v1657;
        var v1620 = v1643 - 1;
        var v1535 = x$$52 & v1620;
        var v1319 = v1535 << sh$$2;
        this_array$$7[v161] = v1318 | v1319;
        var v162 = this.t;
        var v1320 = this.t;
        this.t = v1320 + 1;
        var v901 = BI_DB - sh$$2;
        this_array$$7[v162] = x$$52 >> v901;
      } else {
        var v902 = this.t;
        var v163 = v902 - 1;
        var v1321 = this_array$$7[v163];
        var v1322 = x$$52 << sh$$2;
        this_array$$7[v163] = v1321 | v1322;
      }
    }
    sh$$2 = sh$$2 + k;
    var v166 = sh$$2 >= BI_DB;
    if (v166) {
      sh$$2 = sh$$2 - BI_DB;
    }
    var v903 = i$$13 = i$$13 - 1;
    v167 = v903 >= 0;
  }
  var v904 = k == 8;
  if (v904) {
    var v1536 = s$$4[0];
    var v1323 = v1536 & 128;
    v904 = v1323 != 0;
  }
  var v170 = v904;
  if (v170) {
    this.s = -1;
    var v169 = sh$$2 > 0;
    if (v169) {
      var v905 = this.t;
      var v168 = v905 - 1;
      var v1324 = this_array$$7[v168];
      var v1644 = BI_DB - sh$$2;
      var v1621 = 1 << v1644;
      var v1537 = v1621 - 1;
      var v1325 = v1537 << sh$$2;
      this_array$$7[v168] = v1324 | v1325;
    }
  }
  this.clamp();
  if (mi) {
    var v171 = BigInteger.ZERO;
    v171.subTo(this, this);
  }
  return;
}
function bnpClamp() {
  var this_array$$8 = this.array;
  var v172 = this.s;
  var c$$6 = v172 & BI_DM;
  var v1326 = this.t;
  var v906 = v1326 > 0;
  if (v906) {
    var v1622 = this.t;
    var v1538 = v1622 - 1;
    var v1327 = this_array$$8[v1538];
    v906 = v1327 == c$$6;
  }
  var v173 = v906;
  for (;v173;) {
    --this.t;
    var v1328 = this.t;
    var v907 = v1328 > 0;
    if (v907) {
      var v1623 = this.t;
      var v1539 = v1623 - 1;
      var v1329 = this_array$$8[v1539];
      v907 = v1329 == c$$6;
    }
    v173 = v907;
  }
  return;
}
function bnToString(b$$2) {
  var this_array$$9 = this.array;
  var v908 = this.s;
  var v175 = v908 < 0;
  if (v175) {
    var v909 = this.negate();
    var v174 = v909.toString(b$$2);
    return "-" + v174;
  }
  var k$$1;
  var v180 = b$$2 == 16;
  if (v180) {
    k$$1 = 4;
  } else {
    var v179 = b$$2 == 8;
    if (v179) {
      k$$1 = 3;
    } else {
      var v178 = b$$2 == 2;
      if (v178) {
        k$$1 = 1;
      } else {
        var v177 = b$$2 == 32;
        if (v177) {
          k$$1 = 5;
        } else {
          var v176 = b$$2 == 4;
          if (v176) {
            k$$1 = 2;
          } else {
            return this.toRadix(b$$2);
          }
        }
      }
    }
  }
  var v181 = 1 << k$$1;
  var km = v181 - 1;
  var d;
  var m$$3 = false;
  var r$$2 = "";
  var i$$14 = this.t;
  var v910 = i$$14 * BI_DB;
  var v182 = v910 % k$$1;
  var p = BI_DB - v182;
  var v911 = i$$14;
  i$$14 = i$$14 - 1;
  var v191 = v911 > 0;
  if (v191) {
    var v912 = p < BI_DB;
    if (v912) {
      var v1540 = this_array$$9[i$$14];
      var v1330 = d = v1540 >> p;
      v912 = v1330 > 0;
    }
    var v183 = v912;
    if (v183) {
      m$$3 = true;
      r$$2 = int2char(d);
    }
    var v190 = i$$14 >= 0;
    for (;v190;) {
      var v188 = p < k$$1;
      if (v188) {
        var v913 = this_array$$9[i$$14];
        var v1331 = 1 << p;
        var v914 = v1331 - 1;
        var v184 = v913 & v914;
        var v185 = k$$1 - p;
        d = v184 << v185;
        var v1541 = i$$14 = i$$14 - 1;
        var v1332 = this_array$$9[v1541];
        var v1624 = BI_DB - k$$1;
        var v1333 = p = p + v1624;
        var v915 = v1332 >> v1333;
        d = d | v915;
      } else {
        var v916 = this_array$$9[i$$14];
        var v917 = p = p - k$$1;
        var v186 = v916 >> v917;
        d = v186 & km;
        var v187 = p <= 0;
        if (v187) {
          p = p + BI_DB;
          --i$$14;
        }
      }
      var v189 = d > 0;
      if (v189) {
        m$$3 = true;
      }
      if (m$$3) {
        var v918 = int2char(d);
        r$$2 = r$$2 + v918;
      }
      v190 = i$$14 >= 0;
    }
  }
  var v192;
  if (m$$3) {
    v192 = r$$2;
  } else {
    v192 = "0";
  }
  return v192;
}
function bnNegate() {
  var r$$3 = nbi();
  var v193 = BigInteger.ZERO;
  v193.subTo(this, r$$3);
  return r$$3;
}
function bnAbs() {
  var v194;
  var v1334 = this.s;
  var v919 = v1334 < 0;
  if (v919) {
    v194 = this.negate();
  } else {
    v194 = this;
  }
  return v194;
}
function bnCompareTo(a$$1) {
  var this_array$$10 = this.array;
  var a_array = a$$1.array;
  var v195 = this.s;
  var v196 = a$$1.s;
  var r$$4 = v195 - v196;
  var v197 = r$$4 != 0;
  if (v197) {
    return r$$4;
  }
  var i$$15 = this.t;
  var v198 = a$$1.t;
  r$$4 = i$$15 - v198;
  var v199 = r$$4 != 0;
  if (v199) {
    return r$$4;
  }
  var v920 = i$$15 = i$$15 - 1;
  var v201 = v920 >= 0;
  for (;v201;) {
    var v1335 = this_array$$10[i$$15];
    var v1336 = a_array[i$$15];
    var v921 = r$$4 = v1335 - v1336;
    var v200 = v921 != 0;
    if (v200) {
      return r$$4;
    }
    var v922 = i$$15 = i$$15 - 1;
    v201 = v922 >= 0;
  }
  return 0;
}
function nbits(x$$53) {
  var r$$5 = 1;
  var t$$1;
  var v923 = t$$1 = x$$53 >>> 16;
  var v202 = v923 != 0;
  if (v202) {
    x$$53 = t$$1;
    r$$5 = r$$5 + 16;
  }
  var v924 = t$$1 = x$$53 >> 8;
  var v203 = v924 != 0;
  if (v203) {
    x$$53 = t$$1;
    r$$5 = r$$5 + 8;
  }
  var v925 = t$$1 = x$$53 >> 4;
  var v204 = v925 != 0;
  if (v204) {
    x$$53 = t$$1;
    r$$5 = r$$5 + 4;
  }
  var v926 = t$$1 = x$$53 >> 2;
  var v205 = v926 != 0;
  if (v205) {
    x$$53 = t$$1;
    r$$5 = r$$5 + 2;
  }
  var v927 = t$$1 = x$$53 >> 1;
  var v206 = v927 != 0;
  if (v206) {
    x$$53 = t$$1;
    r$$5 = r$$5 + 1;
  }
  return r$$5;
}
function bnBitLength() {
  var this_array$$11 = this.array;
  var v928 = this.t;
  var v207 = v928 <= 0;
  if (v207) {
    return 0;
  }
  var v1337 = this.t;
  var v929 = v1337 - 1;
  var v208 = BI_DB * v929;
  var v1625 = this.t;
  var v1542 = v1625 - 1;
  var v1338 = this_array$$11[v1542];
  var v1543 = this.s;
  var v1339 = v1543 & BI_DM;
  var v930 = v1338 ^ v1339;
  var v209 = nbits(v930);
  return v208 + v209;
}
function bnpDLShiftTo(n$$6, r$$6) {
  var this_array$$12 = this.array;
  var r_array$$1 = r$$6.array;
  var i$$16;
  var v210 = this.t;
  i$$16 = v210 - 1;
  var v212 = i$$16 >= 0;
  for (;v212;) {
    var v211 = i$$16 + n$$6;
    r_array$$1[v211] = this_array$$12[i$$16];
    --i$$16;
    v212 = i$$16 >= 0;
  }
  i$$16 = n$$6 - 1;
  var v213 = i$$16 >= 0;
  for (;v213;) {
    r_array$$1[i$$16] = 0;
    --i$$16;
    v213 = i$$16 >= 0;
  }
  var v214 = this.t;
  r$$6.t = v214 + n$$6;
  r$$6.s = this.s;
  return;
}
function bnpDRShiftTo(n$$7, r$$7) {
  var this_array$$13 = this.array;
  var r_array$$2 = r$$7.array;
  var i$$17 = n$$7;
  var v931 = this.t;
  var v216 = i$$17 < v931;
  for (;v216;) {
    var v215 = i$$17 - n$$7;
    r_array$$2[v215] = this_array$$13[i$$17];
    ++i$$17;
    var v932 = this.t;
    v216 = i$$17 < v932;
  }
  var v933 = this.t;
  var v217 = v933 - n$$7;
  var v1665 = Math.max(v217, 0);
  r$$7.t = v1665;
  r$$7.s = this.s;
  return;
}
function bnpLShiftTo(n$$8, r$$8) {
  var this_array$$14 = this.array;
  var r_array$$3 = r$$8.array;
  var bs = n$$8 % BI_DB;
  var cbs = BI_DB - bs;
  var v218 = 1 << cbs;
  var bm = v218 - 1;
  var v219 = n$$8 / BI_DB;
  var ds = Math.floor(v219);
  var v934 = this.s;
  var v220 = v934 << bs;
  var c$$7 = v220 & BI_DM;
  var i$$18;
  var v221 = this.t;
  i$$18 = v221 - 1;
  var v224 = i$$18 >= 0;
  for (;v224;) {
    var v935 = i$$18 + ds;
    var v222 = v935 + 1;
    var v1340 = this_array$$14[i$$18];
    var v936 = v1340 >> cbs;
    r_array$$3[v222] = v936 | c$$7;
    var v937 = this_array$$14[i$$18];
    var v223 = v937 & bm;
    c$$7 = v223 << bs;
    --i$$18;
    v224 = i$$18 >= 0;
  }
  i$$18 = ds - 1;
  var v225 = i$$18 >= 0;
  for (;v225;) {
    r_array$$3[i$$18] = 0;
    --i$$18;
    v225 = i$$18 >= 0;
  }
  r_array$$3[ds] = c$$7;
  var v938 = this.t;
  var v226 = v938 + ds;
  r$$8.t = v226 + 1;
  r$$8.s = this.s;
  r$$8.clamp();
  return;
}
function bnpRShiftTo(n$$9, r$$9) {
  var this_array$$15 = this.array;
  var r_array$$4 = r$$9.array;
  r$$9.s = this.s;
  var v227 = n$$9 / BI_DB;
  var ds$$1 = Math.floor(v227);
  var v939 = this.t;
  var v228 = ds$$1 >= v939;
  if (v228) {
    r$$9.t = 0;
    return;
  }
  var bs$$1 = n$$9 % BI_DB;
  var cbs$$1 = BI_DB - bs$$1;
  var v229 = 1 << bs$$1;
  var bm$$1 = v229 - 1;
  var v230 = this_array$$15[ds$$1];
  r_array$$4[0] = v230 >> bs$$1;
  var i$$19 = ds$$1 + 1;
  var v940 = this.t;
  var v233 = i$$19 < v940;
  for (;v233;) {
    var v941 = i$$19 - ds$$1;
    var v231 = v941 - 1;
    var v1341 = r_array$$4[v231];
    var v1626 = this_array$$15[i$$19];
    var v1544 = v1626 & bm$$1;
    var v1342 = v1544 << cbs$$1;
    r_array$$4[v231] = v1341 | v1342;
    var v232 = i$$19 - ds$$1;
    var v942 = this_array$$15[i$$19];
    r_array$$4[v232] = v942 >> bs$$1;
    ++i$$19;
    var v943 = this.t;
    v233 = i$$19 < v943;
  }
  var v235 = bs$$1 > 0;
  if (v235) {
    var v1343 = this.t;
    var v944 = v1343 - ds$$1;
    var v234 = v944 - 1;
    var v1344 = r_array$$4[v234];
    var v1627 = this.s;
    var v1545 = v1627 & bm$$1;
    var v1345 = v1545 << cbs$$1;
    r_array$$4[v234] = v1344 | v1345;
  }
  var v236 = this.t;
  r$$9.t = v236 - ds$$1;
  r$$9.clamp();
  return;
}
function bnpSubTo(a$$2, r$$10) {
  var this_array$$16 = this.array;
  var r_array$$5 = r$$10.array;
  var a_array$$1 = a$$2.array;
  var i$$20 = 0;
  var c$$8 = 0;
  var v237 = a$$2.t;
  var v238 = this.t;
  var m$$4 = Math.min(v237, v238);
  var v240 = i$$20 < m$$4;
  for (;v240;) {
    var v1346 = this_array$$16[i$$20];
    var v1347 = a_array$$1[i$$20];
    var v945 = v1346 - v1347;
    c$$8 = c$$8 + v945;
    var v239 = i$$20;
    i$$20 = i$$20 + 1;
    r_array$$5[v239] = c$$8 & BI_DM;
    c$$8 = c$$8 >> BI_DB;
    v240 = i$$20 < m$$4;
  }
  var v946 = a$$2.t;
  var v947 = this.t;
  var v245 = v946 < v947;
  if (v245) {
    var v948 = a$$2.s;
    c$$8 = c$$8 - v948;
    var v949 = this.t;
    var v242 = i$$20 < v949;
    for (;v242;) {
      var v950 = this_array$$16[i$$20];
      c$$8 = c$$8 + v950;
      var v241 = i$$20;
      i$$20 = i$$20 + 1;
      r_array$$5[v241] = c$$8 & BI_DM;
      c$$8 = c$$8 >> BI_DB;
      var v951 = this.t;
      v242 = i$$20 < v951;
    }
    var v952 = this.s;
    c$$8 = c$$8 + v952;
  } else {
    var v953 = this.s;
    c$$8 = c$$8 + v953;
    var v954 = a$$2.t;
    var v244 = i$$20 < v954;
    for (;v244;) {
      var v955 = a_array$$1[i$$20];
      c$$8 = c$$8 - v955;
      var v243 = i$$20;
      i$$20 = i$$20 + 1;
      r_array$$5[v243] = c$$8 & BI_DM;
      c$$8 = c$$8 >> BI_DB;
      var v956 = a$$2.t;
      v244 = i$$20 < v956;
    }
    var v957 = a$$2.s;
    c$$8 = c$$8 - v957;
  }
  var v246;
  var v958 = c$$8 < 0;
  if (v958) {
    v246 = -1;
  } else {
    v246 = 0;
  }
  r$$10.s = v246;
  var v250 = c$$8 < -1;
  if (v250) {
    var v247 = i$$20;
    i$$20 = i$$20 + 1;
    r_array$$5[v247] = BI_DV + c$$8;
  } else {
    var v249 = c$$8 > 0;
    if (v249) {
      var v248 = i$$20;
      i$$20 = i$$20 + 1;
      r_array$$5[v248] = c$$8;
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
  var v251 = y$$30.t;
  r$$11.t = i$$21 + v251;
  var v959 = i$$21 = i$$21 - 1;
  var v252 = v959 >= 0;
  for (;v252;) {
    r_array$$6[i$$21] = 0;
    var v960 = i$$21 = i$$21 - 1;
    v252 = v960 >= 0;
  }
  i$$21 = 0;
  var v961 = y$$30.t;
  var v254 = i$$21 < v961;
  for (;v254;) {
    var v962 = x$$54.t;
    var v253 = i$$21 + v962;
    var v963 = y_array[i$$21];
    var v964 = x$$54.t;
    var v1666 = x$$54.am(0, v963, r$$11, i$$21, 0, v964);
    r_array$$6[v253] = v1666;
    ++i$$21;
    var v965 = y$$30.t;
    v254 = i$$21 < v965;
  }
  r$$11.s = 0;
  r$$11.clamp();
  var v966 = this.s;
  var v967 = a$$3.s;
  var v256 = v966 != v967;
  if (v256) {
    var v255 = BigInteger.ZERO;
    v255.subTo(r$$11, r$$11);
  }
  return;
}
function bnpSquareTo(r$$12) {
  var x$$55 = this.abs();
  var x_array = x$$55.array;
  var r_array$$7 = r$$12.array;
  var v257 = x$$55.t;
  var i$$22 = r$$12.t = 2 * v257;
  var v968 = i$$22 = i$$22 - 1;
  var v258 = v968 >= 0;
  for (;v258;) {
    r_array$$7[i$$22] = 0;
    var v969 = i$$22 = i$$22 - 1;
    v258 = v969 >= 0;
  }
  i$$22 = 0;
  var v1348 = x$$55.t;
  var v970 = v1348 - 1;
  var v264 = i$$22 < v970;
  for (;v264;) {
    var v259 = x_array[i$$22];
    var v260 = 2 * i$$22;
    var c$$9 = x$$55.am(i$$22, v259, r$$12, v260, 0, 1);
    var v1546 = x$$55.t;
    var v1349 = i$$22 + v1546;
    var v1628 = r_array$$7[v1349];
    var v1645 = i$$22 + 1;
    var v1658 = x_array[i$$22];
    var v1646 = 2 * v1658;
    var v1659 = 2 * i$$22;
    var v1647 = v1659 + 1;
    var v1662 = x$$55.t;
    var v1660 = v1662 - i$$22;
    var v1648 = v1660 - 1;
    var v1629 = x$$55.am(v1645, v1646, r$$12, v1647, c$$9, v1648);
    var v971 = r_array$$7[v1349] = v1628 + v1629;
    var v263 = v971 >= BI_DV;
    if (v263) {
      var v972 = x$$55.t;
      var v261 = i$$22 + v972;
      var v1350 = r_array$$7[v261];
      r_array$$7[v261] = v1350 - BI_DV;
      var v1351 = x$$55.t;
      var v973 = i$$22 + v1351;
      var v262 = v973 + 1;
      r_array$$7[v262] = 1;
    }
    ++i$$22;
    var v1352 = x$$55.t;
    var v974 = v1352 - 1;
    v264 = i$$22 < v974;
  }
  var v975 = r$$12.t;
  var v266 = v975 > 0;
  if (v266) {
    var v976 = r$$12.t;
    var v265 = v976 - 1;
    var v1353 = r_array$$7[v265];
    var v1547 = x_array[i$$22];
    var v1548 = 2 * i$$22;
    var v1354 = x$$55.am(i$$22, v1547, r$$12, v1548, 0, 1);
    r_array$$7[v265] = v1353 + v1354;
  }
  r$$12.s = 0;
  r$$12.clamp();
  return;
}
function bnpDivRemTo(m$$5, q, r$$13) {
  var pm = m$$5.abs();
  var v977 = pm.t;
  var v267 = v977 <= 0;
  if (v267) {
    return;
  }
  var pt = this.abs();
  var v978 = pt.t;
  var v979 = pm.t;
  var v270 = v978 < v979;
  if (v270) {
    var v268 = q != null;
    if (v268) {
      q.fromInt(0);
    }
    var v269 = r$$13 != null;
    if (v269) {
      this.copyTo(r$$13);
    }
    return;
  }
  var v271 = r$$13 == null;
  if (v271) {
    r$$13 = nbi();
  }
  var y$$31 = nbi();
  var ts = this.s;
  var ms = m$$5.s;
  var pm_array = pm.array;
  var v272 = BI_DB;
  var v1549 = pm.t;
  var v1355 = v1549 - 1;
  var v980 = pm_array[v1355];
  var v273 = nbits(v980);
  var nsh = v272 - v273;
  var v274 = nsh > 0;
  if (v274) {
    pm.lShiftTo(nsh, y$$31);
    pt.lShiftTo(nsh, r$$13);
  } else {
    pm.copyTo(y$$31);
    pt.copyTo(r$$13);
  }
  var ys = y$$31.t;
  var y_array$$1 = y$$31.array;
  var v275 = ys - 1;
  var y0$$2 = y_array$$1[v275];
  var v276 = y0$$2 == 0;
  if (v276) {
    return;
  }
  var v981 = 1 << BI_F1;
  var v277 = y0$$2 * v981;
  var v982;
  var v1357 = ys > 1;
  if (v1357) {
    var v1550 = ys - 2;
    var v1356 = y_array$$1[v1550];
    v982 = v1356 >> BI_F2;
  } else {
    v982 = 0;
  }
  var v278 = v982;
  var yt = v277 + v278;
  var d1 = BI_FV / yt;
  var v279 = 1 << BI_F1;
  var d2 = v279 / yt;
  var e$$7 = 1 << BI_F2;
  var i$$23 = r$$13.t;
  var j$$4 = i$$23 - ys;
  var v280;
  var v983 = q == null;
  if (v983) {
    v280 = nbi();
  } else {
    v280 = q;
  }
  var t$$2 = v280;
  y$$31.dlShiftTo(j$$4, t$$2);
  var r_array$$8 = r$$13.array;
  var v984 = r$$13.compareTo(t$$2);
  var v282 = v984 >= 0;
  if (v282) {
    var v281 = r$$13.t;
    var v1358 = r$$13.t;
    r$$13.t = v1358 + 1;
    r_array$$8[v281] = 1;
    r$$13.subTo(t$$2, r$$13);
  }
  var v283 = BigInteger.ONE;
  v283.dlShiftTo(ys, t$$2);
  t$$2.subTo(y$$31, y$$31);
  var v985 = y$$31.t;
  var v285 = v985 < ys;
  for (;v285;) {
    var v284 = y$$31.t;
    var v1359 = y$$31.t;
    y$$31.t = v1359 + 1;
    y_array$$1[v284] = 0;
    var v986 = y$$31.t;
    v285 = v986 < ys;
  }
  var v987 = j$$4 = j$$4 - 1;
  var v289 = v987 >= 0;
  for (;v289;) {
    var v286;
    var v1551 = i$$23 = i$$23 - 1;
    var v1360 = r_array$$8[v1551];
    var v989 = v1360 == y0$$2;
    if (v989) {
      v286 = BI_DM;
    } else {
      var v1552 = r_array$$8[i$$23];
      var v1361 = v1552 * d1;
      var v1649 = i$$23 - 1;
      var v1630 = r_array$$8[v1649];
      var v1553 = v1630 + e$$7;
      var v1362 = v1553 * d2;
      var v988 = v1361 + v1362;
      v286 = Math.floor(v988);
    }
    var qd = v286;
    var v1554 = r_array$$8[i$$23];
    var v1555 = y$$31.am(0, qd, r$$13, j$$4, 0, ys);
    var v990 = r_array$$8[i$$23] = v1554 + v1555;
    var v288 = v990 < qd;
    if (v288) {
      y$$31.dlShiftTo(j$$4, t$$2);
      r$$13.subTo(t$$2, r$$13);
      var v991 = r_array$$8[i$$23];
      var v992 = qd = qd - 1;
      var v287 = v991 < v992;
      for (;v287;) {
        r$$13.subTo(t$$2, r$$13);
        var v993 = r_array$$8[i$$23];
        var v994 = qd = qd - 1;
        v287 = v993 < v994;
      }
    }
    var v995 = j$$4 = j$$4 - 1;
    v289 = v995 >= 0;
  }
  var v292 = q != null;
  if (v292) {
    r$$13.drShiftTo(ys, q);
    var v291 = ts != ms;
    if (v291) {
      var v290 = BigInteger.ZERO;
      v290.subTo(q, q);
    }
  }
  r$$13.t = ys;
  r$$13.clamp();
  var v293 = nsh > 0;
  if (v293) {
    r$$13.rShiftTo(nsh, r$$13);
  }
  var v295 = ts < 0;
  if (v295) {
    var v294 = BigInteger.ZERO;
    v294.subTo(r$$13, r$$13);
  }
  return;
}
function bnMod(a$$4) {
  var r$$14 = nbi();
  var v296 = this.abs();
  v296.divRemTo(a$$4, null, r$$14);
  var v1363 = this.s;
  var v996 = v1363 < 0;
  if (v996) {
    var v1556 = BigInteger.ZERO;
    var v1364 = r$$14.compareTo(v1556);
    v996 = v1364 > 0;
  }
  var v297 = v996;
  if (v297) {
    a$$4.subTo(r$$14, r$$14);
  }
  return r$$14;
}
function Classic(m$$6) {
  this.m = m$$6;
  return;
}
function cConvert(x$$56) {
  var v1365 = x$$56.s;
  var v997 = v1365 < 0;
  var v1367 = !v997;
  if (v1367) {
    var v1557 = this.m;
    var v1366 = x$$56.compareTo(v1557);
    v997 = v1366 >= 0;
  }
  var v299 = v997;
  if (v299) {
    var v298 = this.m;
    return x$$56.mod(v298);
  } else {
    return x$$56;
  }
  return;
}
function cRevert(x$$57) {
  return x$$57;
}
function cReduce(x$$58) {
  var v300 = this.m;
  x$$58.divRemTo(v300, null, x$$58);
  return;
}
function cMulTo(x$$59, y$$32, r$$15) {
  x$$59.multiplyTo(y$$32, r$$15);
  this.reduce(r$$15);
  return;
}
function cSqrTo(x$$60, r$$16) {
  x$$60.squareTo(r$$16);
  this.reduce(r$$16);
  return;
}
function bnpInvDigit() {
  var this_array$$18 = this.array;
  var v998 = this.t;
  var v301 = v998 < 1;
  if (v301) {
    return 0;
  }
  var x$$61 = this_array$$18[0];
  var v999 = x$$61 & 1;
  var v302 = v999 == 0;
  if (v302) {
    return 0;
  }
  var y$$33 = x$$61 & 3;
  var v1558 = x$$61 & 15;
  var v1368 = v1558 * y$$33;
  var v1000 = 2 - v1368;
  var v303 = y$$33 * v1000;
  y$$33 = v303 & 15;
  var v1559 = x$$61 & 255;
  var v1369 = v1559 * y$$33;
  var v1001 = 2 - v1369;
  var v304 = y$$33 * v1001;
  y$$33 = v304 & 255;
  var v1631 = x$$61 & 65535;
  var v1560 = v1631 * y$$33;
  var v1370 = v1560 & 65535;
  var v1002 = 2 - v1370;
  var v305 = y$$33 * v1002;
  y$$33 = v305 & 65535;
  var v1561 = x$$61 * y$$33;
  var v1371 = v1561 % BI_DV;
  var v1003 = 2 - v1371;
  var v306 = y$$33 * v1003;
  y$$33 = v306 % BI_DV;
  var v307;
  var v1004 = y$$33 > 0;
  if (v1004) {
    v307 = BI_DV - y$$33;
  } else {
    v307 = -y$$33;
  }
  return v307;
}
function Montgomery(m$$7) {
  this.m = m$$7;
  var v1667 = m$$7.invDigit();
  this.mp = v1667;
  var v308 = this.mp;
  this.mpl = v308 & 32767;
  var v309 = this.mp;
  this.mph = v309 >> 15;
  var v1005 = BI_DB - 15;
  var v310 = 1 << v1005;
  this.um = v310 - 1;
  var v311 = m$$7.t;
  this.mt2 = 2 * v311;
  return;
}
function montConvert(x$$62) {
  var r$$17 = nbi();
  var v312 = x$$62.abs();
  var v1006 = this.m;
  var v313 = v1006.t;
  v312.dlShiftTo(v313, r$$17);
  var v314 = this.m;
  r$$17.divRemTo(v314, null, r$$17);
  var v1372 = x$$62.s;
  var v1007 = v1372 < 0;
  if (v1007) {
    var v1562 = BigInteger.ZERO;
    var v1373 = r$$17.compareTo(v1562);
    v1007 = v1373 > 0;
  }
  var v316 = v1007;
  if (v316) {
    var v315 = this.m;
    v315.subTo(r$$17, r$$17);
  }
  return r$$17;
}
function montRevert(x$$63) {
  var r$$18 = nbi();
  x$$63.copyTo(r$$18);
  this.reduce(r$$18);
  return r$$18;
}
function montReduce(x$$64) {
  var x_array$$1 = x$$64.array;
  var v1008 = x$$64.t;
  var v1009 = this.mt2;
  var v318 = v1008 <= v1009;
  for (;v318;) {
    var v317 = x$$64.t;
    var v1374 = x$$64.t;
    x$$64.t = v1374 + 1;
    x_array$$1[v317] = 0;
    var v1010 = x$$64.t;
    var v1011 = this.mt2;
    v318 = v1010 <= v1011;
  }
  var i$$24 = 0;
  var v1375 = this.m;
  var v1012 = v1375.t;
  var v323 = i$$24 < v1012;
  for (;v323;) {
    var v319 = x_array$$1[i$$24];
    var j$$5 = v319 & 32767;
    var v1376 = this.mpl;
    var v1013 = j$$5 * v1376;
    var v1650 = this.mph;
    var v1632 = j$$5 * v1650;
    var v1661 = x_array$$1[i$$24];
    var v1651 = v1661 >> 15;
    var v1652 = this.mpl;
    var v1633 = v1651 * v1652;
    var v1563 = v1632 + v1633;
    var v1564 = this.um;
    var v1377 = v1563 & v1564;
    var v1014 = v1377 << 15;
    var v320 = v1013 + v1014;
    var u0 = v320 & BI_DM;
    var v1015 = this.m;
    var v321 = v1015.t;
    j$$5 = i$$24 + v321;
    var v1016 = x_array$$1[j$$5];
    var v1378 = this.m;
    var v1565 = this.m;
    var v1379 = v1565.t;
    var v1017 = v1378.am(0, u0, x$$64, i$$24, 0, v1379);
    x_array$$1[j$$5] = v1016 + v1017;
    var v1018 = x_array$$1[j$$5];
    var v322 = v1018 >= BI_DV;
    for (;v322;) {
      var v1019 = x_array$$1[j$$5];
      x_array$$1[j$$5] = v1019 - BI_DV;
      x_array$$1[++j$$5]++;
      var v1020 = x_array$$1[j$$5];
      v322 = v1020 >= BI_DV;
    }
    ++i$$24;
    var v1380 = this.m;
    var v1021 = v1380.t;
    v323 = i$$24 < v1021;
  }
  x$$64.clamp();
  var v1022 = this.m;
  var v324 = v1022.t;
  x$$64.drShiftTo(v324, x$$64);
  var v1381 = this.m;
  var v1023 = x$$64.compareTo(v1381);
  var v326 = v1023 >= 0;
  if (v326) {
    var v325 = this.m;
    x$$64.subTo(v325, x$$64);
  }
  return;
}
function montSqrTo(x$$65, r$$19) {
  x$$65.squareTo(r$$19);
  this.reduce(r$$19);
  return;
}
function montMulTo(x$$66, y$$34, r$$20) {
  x$$66.multiplyTo(y$$34, r$$20);
  this.reduce(r$$20);
  return;
}
function bnpIsEven() {
  var this_array$$19 = this.array;
  var v1024;
  var v1566 = this.t;
  var v1383 = v1566 > 0;
  if (v1383) {
    var v1382 = this_array$$19[0];
    v1024 = v1382 & 1;
  } else {
    v1024 = this.s;
  }
  var v327 = v1024;
  return v327 == 0;
}
function bnpExp(e$$8, z$$2) {
  var v1025 = e$$8 > 4294967295;
  var v1384 = !v1025;
  if (v1384) {
    v1025 = e$$8 < 1;
  }
  var v328 = v1025;
  if (v328) {
    return BigInteger.ONE;
  }
  var r$$21 = nbi();
  var r2 = nbi();
  var g = z$$2.convert(this);
  var v329 = nbits(e$$8);
  var i$$25 = v329 - 1;
  g.copyTo(r$$21);
  var v1026 = i$$25 = i$$25 - 1;
  var v331 = v1026 >= 0;
  for (;v331;) {
    z$$2.sqrTo(r$$21, r2);
    var v1385 = 1 << i$$25;
    var v1027 = e$$8 & v1385;
    var v330 = v1027 > 0;
    if (v330) {
      z$$2.mulTo(r2, g, r$$21);
    } else {
      var t$$3 = r$$21;
      r$$21 = r2;
      r2 = t$$3;
    }
    var v1028 = i$$25 = i$$25 - 1;
    v331 = v1028 >= 0;
  }
  return z$$2.revert(r$$21);
}
function bnModPowInt(e$$9, m$$8) {
  var z$$3;
  var v1029 = e$$9 < 256;
  var v1386 = !v1029;
  if (v1386) {
    v1029 = m$$8.isEven();
  }
  var v332 = v1029;
  if (v332) {
    z$$3 = new Classic(m$$8);
  } else {
    z$$3 = new Montgomery(m$$8);
  }
  return this.exp(e$$9, z$$3);
}
function bnClone() {
  var r$$22 = nbi();
  this.copyTo(r$$22);
  return r$$22;
}
function bnIntValue() {
  var this_array$$20 = this.array;
  var v1030 = this.s;
  var v338 = v1030 < 0;
  if (v338) {
    var v1031 = this.t;
    var v335 = v1031 == 1;
    if (v335) {
      var v333 = this_array$$20[0];
      return v333 - BI_DV;
    } else {
      var v1032 = this.t;
      var v334 = v1032 == 0;
      if (v334) {
        return-1;
      }
    }
  } else {
    var v1033 = this.t;
    var v337 = v1033 == 1;
    if (v337) {
      return this_array$$20[0];
    } else {
      var v1034 = this.t;
      var v336 = v1034 == 0;
      if (v336) {
        return 0;
      }
    }
  }
  var v1387 = this_array$$20[1];
  var v1634 = 32 - BI_DB;
  var v1567 = 1 << v1634;
  var v1388 = v1567 - 1;
  var v1035 = v1387 & v1388;
  var v339 = v1035 << BI_DB;
  var v340 = this_array$$20[0];
  return v339 | v340;
}
function bnByteValue() {
  var this_array$$21 = this.array;
  var v341;
  var v1389 = this.t;
  var v1037 = v1389 == 0;
  if (v1037) {
    v341 = this.s;
  } else {
    var v1390 = this_array$$21[0];
    var v1036 = v1390 << 24;
    v341 = v1036 >> 24;
  }
  return v341;
}
function bnShortValue() {
  var this_array$$22 = this.array;
  var v342;
  var v1391 = this.t;
  var v1039 = v1391 == 0;
  if (v1039) {
    v342 = this.s;
  } else {
    var v1392 = this_array$$22[0];
    var v1038 = v1392 << 16;
    v342 = v1038 >> 16;
  }
  return v342;
}
function bnpChunkSize(r$$23) {
  var v1393 = Math.LN2;
  var v1040 = v1393 * BI_DB;
  var v1041 = Math.log(r$$23);
  var v343 = v1040 / v1041;
  return Math.floor(v343);
}
function bnSigNum() {
  var this_array$$23 = this.array;
  var v1042 = this.s;
  var v345 = v1042 < 0;
  if (v345) {
    return-1;
  } else {
    var v1394 = this.t;
    var v1043 = v1394 <= 0;
    var v1396 = !v1043;
    if (v1396) {
      var v1568 = this.t;
      var v1395 = v1568 == 1;
      if (v1395) {
        var v1569 = this_array$$23[0];
        v1395 = v1569 <= 0;
      }
      v1043 = v1395;
    }
    var v344 = v1043;
    if (v344) {
      return 0;
    } else {
      return 1;
    }
  }
  return;
}
function bnpToRadix(b$$3) {
  var v346 = b$$3 == null;
  if (v346) {
    b$$3 = 10;
  }
  var v1570 = this.signum();
  var v1397 = v1570 == 0;
  var v1571 = !v1397;
  if (v1571) {
    v1397 = b$$3 < 2;
  }
  var v1044 = v1397;
  var v1398 = !v1044;
  if (v1398) {
    v1044 = b$$3 > 36;
  }
  var v347 = v1044;
  if (v347) {
    return "0";
  }
  var cs = this.chunkSize(b$$3);
  var a$$5 = Math.pow(b$$3, cs);
  var d$$1 = nbv(a$$5);
  var y$$35 = nbi();
  var z$$4 = nbi();
  var r$$24 = "";
  this.divRemTo(d$$1, y$$35, z$$4);
  var v1045 = y$$35.signum();
  var v349 = v1045 > 0;
  for (;v349;) {
    var v1572 = z$$4.intValue();
    var v1399 = a$$5 + v1572;
    var v1046 = v1399.toString(b$$3);
    var v348 = v1046.substr(1);
    r$$24 = v348 + r$$24;
    y$$35.divRemTo(d$$1, y$$35, z$$4);
    var v1047 = y$$35.signum();
    v349 = v1047 > 0;
  }
  var v1048 = z$$4.intValue();
  var v350 = v1048.toString(b$$3);
  return v350 + r$$24;
}
function bnpFromRadix(s$$5, b$$4) {
  this.fromInt(0);
  var v351 = b$$4 == null;
  if (v351) {
    b$$4 = 10;
  }
  var cs$$1 = this.chunkSize(b$$4);
  var d$$2 = Math.pow(b$$4, cs$$1);
  var mi$$1 = false;
  var j$$6 = 0;
  var w$$9 = 0;
  var i$$26 = 0;
  var v1049 = s$$5.length;
  var v356 = i$$26 < v1049;
  for (;v356;) {
    var x$$67 = intAt(s$$5, i$$26);
    var v353 = x$$67 < 0;
    if (v353) {
      var v1400 = s$$5.charAt(i$$26);
      var v1050 = v1400 == "-";
      if (v1050) {
        var v1401 = this.signum();
        v1050 = v1401 == 0;
      }
      var v352 = v1050;
      if (v352) {
        mi$$1 = true;
      }
      ++i$$26;
      var v1051 = s$$5.length;
      v356 = i$$26 < v1051;
      continue;
    }
    var v354 = b$$4 * w$$9;
    w$$9 = v354 + x$$67;
    var v1052 = j$$6 = j$$6 + 1;
    var v355 = v1052 >= cs$$1;
    if (v355) {
      this.dMultiply(d$$2);
      this.dAddOffset(w$$9, 0);
      j$$6 = 0;
      w$$9 = 0;
    }
    ++i$$26;
    var v1053 = s$$5.length;
    v356 = i$$26 < v1053;
  }
  var v358 = j$$6 > 0;
  if (v358) {
    var v357 = Math.pow(b$$4, j$$6);
    this.dMultiply(v357);
    this.dAddOffset(w$$9, 0);
  }
  if (mi$$1) {
    var v359 = BigInteger.ZERO;
    v359.subTo(this, this);
  }
  return;
}
function bnpFromNumber(a$$6, b$$5, c$$10) {
  var v1054 = typeof b$$5;
  var v369 = "number" == v1054;
  if (v369) {
    var v366 = a$$6 < 2;
    if (v366) {
      this.fromInt(1);
    } else {
      this.fromNumber(a$$6, c$$10);
      var v1402 = a$$6 - 1;
      var v1055 = this.testBit(v1402);
      var v361 = !v1055;
      if (v361) {
        var v1056 = BigInteger.ONE;
        var v1057 = a$$6 - 1;
        var v360 = v1056.shiftLeft(v1057);
        this.bitwiseTo(v360, op_or, this);
      }
      var v362 = this.isEven();
      if (v362) {
        this.dAddOffset(1, 0);
      }
      var v1058 = this.isProbablePrime(b$$5);
      var v365 = !v1058;
      for (;v365;) {
        this.dAddOffset(2, 0);
        var v1059 = this.bitLength();
        var v364 = v1059 > a$$6;
        if (v364) {
          var v1060 = BigInteger.ONE;
          var v1061 = a$$6 - 1;
          var v363 = v1060.shiftLeft(v1061);
          this.subTo(v363, this);
        }
        var v1062 = this.isProbablePrime(b$$5);
        v365 = !v1062;
      }
    }
  } else {
    var x$$68 = new Array;
    var t$$4 = a$$6 & 7;
    var v367 = a$$6 >> 3;
    x$$68.length = v367 + 1;
    b$$5.nextBytes(x$$68);
    var v368 = t$$4 > 0;
    if (v368) {
      var v1063 = x$$68[0];
      var v1403 = 1 << t$$4;
      var v1064 = v1403 - 1;
      x$$68[0] = v1063 & v1064;
    } else {
      x$$68[0] = 0;
    }
    this.fromString(x$$68, 256);
  }
  return;
}
function bnToByteArray() {
  var this_array$$24 = this.array;
  var i$$27 = this.t;
  var r$$25 = new Array;
  r$$25[0] = this.s;
  var v1065 = i$$27 * BI_DB;
  var v370 = v1065 % 8;
  var p$$1 = BI_DB - v370;
  var d$$3;
  var k$$2 = 0;
  var v1066 = i$$27;
  i$$27 = i$$27 - 1;
  var v383 = v1066 > 0;
  if (v383) {
    var v1067 = p$$1 < BI_DB;
    if (v1067) {
      var v1573 = this_array$$24[i$$27];
      var v1404 = d$$3 = v1573 >> p$$1;
      var v1635 = this.s;
      var v1574 = v1635 & BI_DM;
      var v1405 = v1574 >> p$$1;
      v1067 = v1404 != v1405;
    }
    var v372 = v1067;
    if (v372) {
      var v371 = k$$2;
      k$$2 = k$$2 + 1;
      var v1406 = this.s;
      var v1407 = BI_DB - p$$1;
      var v1068 = v1406 << v1407;
      r$$25[v371] = d$$3 | v1068;
    }
    var v382 = i$$27 >= 0;
    for (;v382;) {
      var v377 = p$$1 < 8;
      if (v377) {
        var v1069 = this_array$$24[i$$27];
        var v1408 = 1 << p$$1;
        var v1070 = v1408 - 1;
        var v373 = v1069 & v1070;
        var v374 = 8 - p$$1;
        d$$3 = v373 << v374;
        var v1575 = i$$27 = i$$27 - 1;
        var v1409 = this_array$$24[v1575];
        var v1636 = BI_DB - 8;
        var v1410 = p$$1 = p$$1 + v1636;
        var v1071 = v1409 >> v1410;
        d$$3 = d$$3 | v1071;
      } else {
        var v1072 = this_array$$24[i$$27];
        var v1073 = p$$1 = p$$1 - 8;
        var v375 = v1072 >> v1073;
        d$$3 = v375 & 255;
        var v376 = p$$1 <= 0;
        if (v376) {
          p$$1 = p$$1 + BI_DB;
          --i$$27;
        }
      }
      var v1074 = d$$3 & 128;
      var v378 = v1074 != 0;
      if (v378) {
        d$$3 = d$$3 | -256;
      }
      var v1075 = k$$2 == 0;
      if (v1075) {
        var v1576 = this.s;
        var v1411 = v1576 & 128;
        var v1412 = d$$3 & 128;
        v1075 = v1411 != v1412;
      }
      var v379 = v1075;
      if (v379) {
        ++k$$2;
      }
      var v1076 = k$$2 > 0;
      var v1414 = !v1076;
      if (v1414) {
        var v1413 = this.s;
        v1076 = d$$3 != v1413;
      }
      var v381 = v1076;
      if (v381) {
        var v380 = k$$2;
        k$$2 = k$$2 + 1;
        r$$25[v380] = d$$3;
      }
      v382 = i$$27 >= 0;
    }
  }
  return r$$25;
}
function bnEquals(a$$7) {
  var v384 = this.compareTo(a$$7);
  return v384 == 0;
}
function bnMin(a$$8) {
  var v385;
  var v1415 = this.compareTo(a$$8);
  var v1077 = v1415 < 0;
  if (v1077) {
    v385 = this;
  } else {
    v385 = a$$8;
  }
  return v385;
}
function bnMax(a$$9) {
  var v386;
  var v1416 = this.compareTo(a$$9);
  var v1078 = v1416 > 0;
  if (v1078) {
    v386 = this;
  } else {
    v386 = a$$9;
  }
  return v386;
}
function bnpBitwiseTo(a$$10, op, r$$26) {
  var this_array$$25 = this.array;
  var a_array$$2 = a$$10.array;
  var r_array$$9 = r$$26.array;
  var i$$28;
  var f;
  var v387 = a$$10.t;
  var v388 = this.t;
  var m$$9 = Math.min(v387, v388);
  i$$28 = 0;
  var v391 = i$$28 < m$$9;
  for (;v391;) {
    var v389 = this_array$$25[i$$28];
    var v390 = a_array$$2[i$$28];
    var v1668 = op(v389, v390);
    r_array$$9[i$$28] = v1668;
    ++i$$28;
    v391 = i$$28 < m$$9;
  }
  var v1079 = a$$10.t;
  var v1080 = this.t;
  var v398 = v1079 < v1080;
  if (v398) {
    var v392 = a$$10.s;
    f = v392 & BI_DM;
    i$$28 = m$$9;
    var v1081 = this.t;
    var v394 = i$$28 < v1081;
    for (;v394;) {
      var v393 = this_array$$25[i$$28];
      var v1669 = op(v393, f);
      r_array$$9[i$$28] = v1669;
      ++i$$28;
      var v1082 = this.t;
      v394 = i$$28 < v1082;
    }
    r$$26.t = this.t;
  } else {
    var v395 = this.s;
    f = v395 & BI_DM;
    i$$28 = m$$9;
    var v1083 = a$$10.t;
    var v397 = i$$28 < v1083;
    for (;v397;) {
      var v396 = a_array$$2[i$$28];
      var v1670 = op(f, v396);
      r_array$$9[i$$28] = v1670;
      ++i$$28;
      var v1084 = a$$10.t;
      v397 = i$$28 < v1084;
    }
    r$$26.t = a$$10.t;
  }
  var v399 = this.s;
  var v400 = a$$10.s;
  var v1671 = op(v399, v400);
  r$$26.s = v1671;
  r$$26.clamp();
  return;
}
function op_and(x$$69, y$$36) {
  return x$$69 & y$$36;
}
function bnAnd(a$$11) {
  var r$$27 = nbi();
  this.bitwiseTo(a$$11, op_and, r$$27);
  return r$$27;
}
function op_or(x$$70, y$$37) {
  return x$$70 | y$$37;
}
function bnOr(a$$12) {
  var r$$28 = nbi();
  this.bitwiseTo(a$$12, op_or, r$$28);
  return r$$28;
}
function op_xor(x$$71, y$$38) {
  return x$$71 ^ y$$38;
}
function bnXor(a$$13) {
  var r$$29 = nbi();
  this.bitwiseTo(a$$13, op_xor, r$$29);
  return r$$29;
}
function op_andnot(x$$72, y$$39) {
  var v401 = ~y$$39;
  return x$$72 & v401;
}
function bnAndNot(a$$14) {
  var r$$30 = nbi();
  this.bitwiseTo(a$$14, op_andnot, r$$30);
  return r$$30;
}
function bnNot() {
  var this_array$$26 = this.array;
  var r$$31 = nbi();
  var r_array$$10 = r$$31.array;
  var i$$29 = 0;
  var v1085 = this.t;
  var v403 = i$$29 < v1085;
  for (;v403;) {
    var v1086 = this_array$$26[i$$29];
    var v402 = ~v1086;
    r_array$$10[i$$29] = BI_DM & v402;
    ++i$$29;
    var v1087 = this.t;
    v403 = i$$29 < v1087;
  }
  r$$31.t = this.t;
  var v404 = this.s;
  r$$31.s = ~v404;
  return r$$31;
}
function bnShiftLeft(n$$10) {
  var r$$32 = nbi();
  var v406 = n$$10 < 0;
  if (v406) {
    var v405 = -n$$10;
    this.rShiftTo(v405, r$$32);
  } else {
    this.lShiftTo(n$$10, r$$32);
  }
  return r$$32;
}
function bnShiftRight(n$$11) {
  var r$$33 = nbi();
  var v408 = n$$11 < 0;
  if (v408) {
    var v407 = -n$$11;
    this.lShiftTo(v407, r$$33);
  } else {
    this.rShiftTo(n$$11, r$$33);
  }
  return r$$33;
}
function lbit(x$$73) {
  var v409 = x$$73 == 0;
  if (v409) {
    return-1;
  }
  var r$$34 = 0;
  var v1088 = x$$73 & 65535;
  var v410 = v1088 == 0;
  if (v410) {
    x$$73 = x$$73 >> 16;
    r$$34 = r$$34 + 16;
  }
  var v1089 = x$$73 & 255;
  var v411 = v1089 == 0;
  if (v411) {
    x$$73 = x$$73 >> 8;
    r$$34 = r$$34 + 8;
  }
  var v1090 = x$$73 & 15;
  var v412 = v1090 == 0;
  if (v412) {
    x$$73 = x$$73 >> 4;
    r$$34 = r$$34 + 4;
  }
  var v1091 = x$$73 & 3;
  var v413 = v1091 == 0;
  if (v413) {
    x$$73 = x$$73 >> 2;
    r$$34 = r$$34 + 2;
  }
  var v1092 = x$$73 & 1;
  var v414 = v1092 == 0;
  if (v414) {
    ++r$$34;
  }
  return r$$34;
}
function bnGetLowestSetBit() {
  var this_array$$27 = this.array;
  var i$$30 = 0;
  var v1093 = this.t;
  var v418 = i$$30 < v1093;
  for (;v418;) {
    var v1094 = this_array$$27[i$$30];
    var v417 = v1094 != 0;
    if (v417) {
      var v415 = i$$30 * BI_DB;
      var v1095 = this_array$$27[i$$30];
      var v416 = lbit(v1095);
      return v415 + v416;
    }
    ++i$$30;
    var v1096 = this.t;
    v418 = i$$30 < v1096;
  }
  var v1097 = this.s;
  var v420 = v1097 < 0;
  if (v420) {
    var v419 = this.t;
    return v419 * BI_DB;
  }
  return-1;
}
function cbit(x$$74) {
  var r$$35 = 0;
  var v421 = x$$74 != 0;
  for (;v421;) {
    var v1098 = x$$74 - 1;
    x$$74 = x$$74 & v1098;
    ++r$$35;
    v421 = x$$74 != 0;
  }
  return r$$35;
}
function bnBitCount() {
  var r$$36 = 0;
  var v422 = this.s;
  var x$$75 = v422 & BI_DM;
  var i$$31 = 0;
  var v1099 = this.t;
  var v423 = i$$31 < v1099;
  for (;v423;) {
    var v1577 = this_array[i$$31];
    var v1417 = v1577 ^ x$$75;
    var v1100 = cbit(v1417);
    r$$36 = r$$36 + v1100;
    ++i$$31;
    var v1101 = this.t;
    v423 = i$$31 < v1101;
  }
  return r$$36;
}
function bnTestBit(n$$12) {
  var this_array$$28 = this.array;
  var v424 = n$$12 / BI_DB;
  var j$$7 = Math.floor(v424);
  var v1102 = this.t;
  var v426 = j$$7 >= v1102;
  if (v426) {
    var v425 = this.s;
    return v425 != 0;
  }
  var v1103 = this_array$$28[j$$7];
  var v1418 = n$$12 % BI_DB;
  var v1104 = 1 << v1418;
  var v427 = v1103 & v1104;
  return v427 != 0;
}
function bnpChangeBit(n$$13, op$$1) {
  var v428 = BigInteger.ONE;
  var r$$37 = v428.shiftLeft(n$$13);
  this.bitwiseTo(r$$37, op$$1, r$$37);
  return r$$37;
}
function bnSetBit(n$$14) {
  return this.changeBit(n$$14, op_or);
}
function bnClearBit(n$$15) {
  return this.changeBit(n$$15, op_andnot);
}
function bnFlipBit(n$$16) {
  return this.changeBit(n$$16, op_xor);
}
function bnpAddTo(a$$15, r$$38) {
  var this_array$$29 = this.array;
  var a_array$$3 = a$$15.array;
  var r_array$$11 = r$$38.array;
  var i$$32 = 0;
  var c$$11 = 0;
  var v429 = a$$15.t;
  var v430 = this.t;
  var m$$10 = Math.min(v429, v430);
  var v432 = i$$32 < m$$10;
  for (;v432;) {
    var v1419 = this_array$$29[i$$32];
    var v1420 = a_array$$3[i$$32];
    var v1105 = v1419 + v1420;
    c$$11 = c$$11 + v1105;
    var v431 = i$$32;
    i$$32 = i$$32 + 1;
    r_array$$11[v431] = c$$11 & BI_DM;
    c$$11 = c$$11 >> BI_DB;
    v432 = i$$32 < m$$10;
  }
  var v1106 = a$$15.t;
  var v1107 = this.t;
  var v437 = v1106 < v1107;
  if (v437) {
    var v1108 = a$$15.s;
    c$$11 = c$$11 + v1108;
    var v1109 = this.t;
    var v434 = i$$32 < v1109;
    for (;v434;) {
      var v1110 = this_array$$29[i$$32];
      c$$11 = c$$11 + v1110;
      var v433 = i$$32;
      i$$32 = i$$32 + 1;
      r_array$$11[v433] = c$$11 & BI_DM;
      c$$11 = c$$11 >> BI_DB;
      var v1111 = this.t;
      v434 = i$$32 < v1111;
    }
    var v1112 = this.s;
    c$$11 = c$$11 + v1112;
  } else {
    var v1113 = this.s;
    c$$11 = c$$11 + v1113;
    var v1114 = a$$15.t;
    var v436 = i$$32 < v1114;
    for (;v436;) {
      var v1115 = a_array$$3[i$$32];
      c$$11 = c$$11 + v1115;
      var v435 = i$$32;
      i$$32 = i$$32 + 1;
      r_array$$11[v435] = c$$11 & BI_DM;
      c$$11 = c$$11 >> BI_DB;
      var v1116 = a$$15.t;
      v436 = i$$32 < v1116;
    }
    var v1117 = a$$15.s;
    c$$11 = c$$11 + v1117;
  }
  var v438;
  var v1118 = c$$11 < 0;
  if (v1118) {
    v438 = -1;
  } else {
    v438 = 0;
  }
  r$$38.s = v438;
  var v442 = c$$11 > 0;
  if (v442) {
    var v439 = i$$32;
    i$$32 = i$$32 + 1;
    r_array$$11[v439] = c$$11;
  } else {
    var v441 = c$$11 < -1;
    if (v441) {
      var v440 = i$$32;
      i$$32 = i$$32 + 1;
      r_array$$11[v440] = BI_DV + c$$11;
    }
  }
  r$$38.t = i$$32;
  r$$38.clamp();
  return;
}
function bnAdd(a$$16) {
  var r$$39 = nbi();
  this.addTo(a$$16, r$$39);
  return r$$39;
}
function bnSubtract(a$$17) {
  var r$$40 = nbi();
  this.subTo(a$$17, r$$40);
  return r$$40;
}
function bnMultiply(a$$18) {
  var r$$41 = nbi();
  this.multiplyTo(a$$18, r$$41);
  return r$$41;
}
function bnDivide(a$$19) {
  var r$$42 = nbi();
  this.divRemTo(a$$19, r$$42, null);
  return r$$42;
}
function bnRemainder(a$$20) {
  var r$$43 = nbi();
  this.divRemTo(a$$20, null, r$$43);
  return r$$43;
}
function bnDivideAndRemainder(a$$21) {
  var q$$1 = nbi();
  var r$$44 = nbi();
  this.divRemTo(a$$21, q$$1, r$$44);
  return new Array(q$$1, r$$44);
}
function bnpDMultiply(n$$17) {
  var this_array$$30 = this.array;
  var v443 = this.t;
  var v1119 = n$$17 - 1;
  var v1120 = this.t;
  var v1672 = this.am(0, v1119, this, 0, 0, v1120);
  this_array$$30[v443] = v1672;
  ++this.t;
  this.clamp();
  return;
}
function bnpDAddOffset(n$$18, w$$10) {
  var this_array$$31 = this.array;
  var v1121 = this.t;
  var v445 = v1121 <= w$$10;
  for (;v445;) {
    var v444 = this.t;
    var v1421 = this.t;
    this.t = v1421 + 1;
    this_array$$31[v444] = 0;
    var v1122 = this.t;
    v445 = v1122 <= w$$10;
  }
  var v1123 = this_array$$31[w$$10];
  this_array$$31[w$$10] = v1123 + n$$18;
  var v1124 = this_array$$31[w$$10];
  var v448 = v1124 >= BI_DV;
  for (;v448;) {
    var v1125 = this_array$$31[w$$10];
    this_array$$31[w$$10] = v1125 - BI_DV;
    var v1126 = w$$10 = w$$10 + 1;
    var v1127 = this.t;
    var v447 = v1126 >= v1127;
    if (v447) {
      var v446 = this.t;
      var v1422 = this.t;
      this.t = v1422 + 1;
      this_array$$31[v446] = 0;
    }
    ++this_array$$31[w$$10];
    var v1128 = this_array$$31[w$$10];
    v448 = v1128 >= BI_DV;
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
  x$$77.multiplyTo(y$$40, r$$45);
  return;
}
function nSqrTo(x$$78, r$$46) {
  x$$78.squareTo(r$$46);
  return;
}
function bnPow(e$$10) {
  var v449 = new NullExp;
  return this.exp(e$$10, v449);
}
function bnpMultiplyLowerTo(a$$22, n$$19, r$$47) {
  var r_array$$12 = r$$47.array;
  var a_array$$4 = a$$22.array;
  var v1129 = this.t;
  var v1130 = a$$22.t;
  var v450 = v1129 + v1130;
  var i$$33 = Math.min(v450, n$$19);
  r$$47.s = 0;
  r$$47.t = i$$33;
  var v452 = i$$33 > 0;
  for (;v452;) {
    var v451 = i$$33 = i$$33 - 1;
    r_array$$12[v451] = 0;
    v452 = i$$33 > 0;
  }
  var j$$8;
  var v453 = r$$47.t;
  var v454 = this.t;
  j$$8 = v453 - v454;
  var v456 = i$$33 < j$$8;
  for (;v456;) {
    var v1131 = this.t;
    var v455 = i$$33 + v1131;
    var v1132 = a_array$$4[i$$33];
    var v1133 = this.t;
    var v1673 = this.am(0, v1132, r$$47, i$$33, 0, v1133);
    r_array$$12[v455] = v1673;
    ++i$$33;
    v456 = i$$33 < j$$8;
  }
  var v457 = a$$22.t;
  j$$8 = Math.min(v457, n$$19);
  var v460 = i$$33 < j$$8;
  for (;v460;) {
    var v458 = a_array$$4[i$$33];
    var v459 = n$$19 - i$$33;
    this.am(0, v458, r$$47, i$$33, 0, v459);
    ++i$$33;
    v460 = i$$33 < j$$8;
  }
  r$$47.clamp();
  return;
}
function bnpMultiplyUpperTo(a$$23, n$$20, r$$48) {
  var r_array$$13 = r$$48.array;
  var a_array$$5 = a$$23.array;
  --n$$20;
  var v1134 = this.t;
  var v1135 = a$$23.t;
  var v461 = v1134 + v1135;
  var i$$34 = r$$48.t = v461 - n$$20;
  r$$48.s = 0;
  var v1136 = i$$34 = i$$34 - 1;
  var v462 = v1136 >= 0;
  for (;v462;) {
    r_array$$13[i$$34] = 0;
    var v1137 = i$$34 = i$$34 - 1;
    v462 = v1137 >= 0;
  }
  var v1138 = this.t;
  var v463 = n$$20 - v1138;
  i$$34 = Math.max(v463, 0);
  var v1139 = a$$23.t;
  var v465 = i$$34 < v1139;
  for (;v465;) {
    var v1423 = this.t;
    var v1140 = v1423 + i$$34;
    var v464 = v1140 - n$$20;
    var v1141 = n$$20 - i$$34;
    var v1142 = a_array$$5[i$$34];
    var v1578 = this.t;
    var v1424 = v1578 + i$$34;
    var v1143 = v1424 - n$$20;
    var v1674 = this.am(v1141, v1142, r$$48, 0, 0, v1143);
    r_array$$13[v464] = v1674;
    ++i$$34;
    var v1144 = a$$23.t;
    v465 = i$$34 < v1144;
  }
  r$$48.clamp();
  r$$48.drShiftTo(1, r$$48);
  return;
}
function Barrett(m$$11) {
  var v1675 = nbi();
  this.r2 = v1675;
  var v1676 = nbi();
  this.q3 = v1676;
  var v466 = BigInteger.ONE;
  var v1145 = m$$11.t;
  var v467 = 2 * v1145;
  var v468 = this.r2;
  v466.dlShiftTo(v467, v468);
  var v469 = this.r2;
  var v1677 = v469.divide(m$$11);
  this.mu = v1677;
  this.m = m$$11;
  return;
}
function barrettConvert(x$$79) {
  var v1425 = x$$79.s;
  var v1146 = v1425 < 0;
  var v1428 = !v1146;
  if (v1428) {
    var v1426 = x$$79.t;
    var v1637 = this.m;
    var v1579 = v1637.t;
    var v1427 = 2 * v1579;
    v1146 = v1426 > v1427;
  }
  var v472 = v1146;
  if (v472) {
    var v470 = this.m;
    return x$$79.mod(v470);
  } else {
    var v1429 = this.m;
    var v1147 = x$$79.compareTo(v1429);
    var v471 = v1147 < 0;
    if (v471) {
      return x$$79;
    } else {
      var r$$49 = nbi();
      x$$79.copyTo(r$$49);
      this.reduce(r$$49);
      return r$$49;
    }
  }
  return;
}
function barrettRevert(x$$80) {
  return x$$80;
}
function barrettReduce(x$$81) {
  var v1430 = this.m;
  var v1148 = v1430.t;
  var v473 = v1148 - 1;
  var v474 = this.r2;
  x$$81.drShiftTo(v473, v474);
  var v1149 = x$$81.t;
  var v1580 = this.m;
  var v1431 = v1580.t;
  var v1150 = v1431 + 1;
  var v476 = v1149 > v1150;
  if (v476) {
    var v1151 = this.m;
    var v475 = v1151.t;
    x$$81.t = v475 + 1;
    x$$81.clamp();
  }
  var v477 = this.mu;
  var v478 = this.r2;
  var v1432 = this.m;
  var v1152 = v1432.t;
  var v479 = v1152 + 1;
  var v480 = this.q3;
  v477.multiplyUpperTo(v478, v479, v480);
  var v481 = this.m;
  var v482 = this.q3;
  var v1433 = this.m;
  var v1153 = v1433.t;
  var v483 = v1153 + 1;
  var v484 = this.r2;
  v481.multiplyLowerTo(v482, v483, v484);
  var v1434 = this.r2;
  var v1154 = x$$81.compareTo(v1434);
  var v486 = v1154 < 0;
  for (;v486;) {
    var v1435 = this.m;
    var v1155 = v1435.t;
    var v485 = v1155 + 1;
    x$$81.dAddOffset(1, v485);
    var v1436 = this.r2;
    var v1156 = x$$81.compareTo(v1436);
    v486 = v1156 < 0;
  }
  var v487 = this.r2;
  x$$81.subTo(v487, x$$81);
  var v1437 = this.m;
  var v1157 = x$$81.compareTo(v1437);
  var v489 = v1157 >= 0;
  for (;v489;) {
    var v488 = this.m;
    x$$81.subTo(v488, x$$81);
    var v1438 = this.m;
    var v1158 = x$$81.compareTo(v1438);
    v489 = v1158 >= 0;
  }
  return;
}
function barrettSqrTo(x$$82, r$$50) {
  x$$82.squareTo(r$$50);
  this.reduce(r$$50);
  return;
}
function barrettMulTo(x$$83, y$$41, r$$51) {
  x$$83.multiplyTo(y$$41, r$$51);
  this.reduce(r$$51);
  return;
}
function bnModPow(e$$11, m$$12) {
  var e_array = e$$11.array;
  var i$$35 = e$$11.bitLength();
  var k$$3;
  var r$$52 = nbv(1);
  var z$$5;
  var v494 = i$$35 <= 0;
  if (v494) {
    return r$$52;
  } else {
    var v493 = i$$35 < 18;
    if (v493) {
      k$$3 = 1;
    } else {
      var v492 = i$$35 < 48;
      if (v492) {
        k$$3 = 3;
      } else {
        var v491 = i$$35 < 144;
        if (v491) {
          k$$3 = 4;
        } else {
          var v490 = i$$35 < 768;
          if (v490) {
            k$$3 = 5;
          } else {
            k$$3 = 6;
          }
        }
      }
    }
  }
  var v496 = i$$35 < 8;
  if (v496) {
    z$$5 = new Classic(m$$12);
  } else {
    var v495 = m$$12.isEven();
    if (v495) {
      z$$5 = new Barrett(m$$12);
    } else {
      z$$5 = new Montgomery(m$$12);
    }
  }
  var g$$1 = new Array;
  var n$$21 = 3;
  var k1 = k$$3 - 1;
  var v497 = 1 << k$$3;
  var km$$1 = v497 - 1;
  var v1678 = z$$5.convert(this);
  g$$1[1] = v1678;
  var v502 = k$$3 > 1;
  if (v502) {
    var g2 = nbi();
    var v498 = g$$1[1];
    z$$5.sqrTo(v498, g2);
    var v501 = n$$21 <= km$$1;
    for (;v501;) {
      var v1679 = nbi();
      g$$1[n$$21] = v1679;
      var v1159 = n$$21 - 2;
      var v499 = g$$1[v1159];
      var v500 = g$$1[n$$21];
      z$$5.mulTo(g2, v499, v500);
      n$$21 = n$$21 + 2;
      v501 = n$$21 <= km$$1;
    }
  }
  var v503 = e$$11.t;
  var j$$9 = v503 - 1;
  var w$$11;
  var is1 = true;
  var r2$$1 = nbi();
  var t$$5;
  var v1160 = e_array[j$$9];
  var v504 = nbits(v1160);
  i$$35 = v504 - 1;
  var v518 = j$$9 >= 0;
  for (;v518;) {
    var v509 = i$$35 >= k1;
    if (v509) {
      var v1161 = e_array[j$$9];
      var v1162 = i$$35 - k1;
      var v505 = v1161 >> v1162;
      w$$11 = v505 & km$$1;
    } else {
      var v1163 = e_array[j$$9];
      var v1581 = i$$35 + 1;
      var v1439 = 1 << v1581;
      var v1164 = v1439 - 1;
      var v506 = v1163 & v1164;
      var v507 = k1 - i$$35;
      w$$11 = v506 << v507;
      var v508 = j$$9 > 0;
      if (v508) {
        var v1582 = j$$9 - 1;
        var v1440 = e_array[v1582];
        var v1583 = BI_DB + i$$35;
        var v1441 = v1583 - k1;
        var v1165 = v1440 >> v1441;
        w$$11 = w$$11 | v1165;
      }
    }
    n$$21 = k$$3;
    var v1166 = w$$11 & 1;
    var v510 = v1166 == 0;
    for (;v510;) {
      w$$11 = w$$11 >> 1;
      --n$$21;
      var v1167 = w$$11 & 1;
      v510 = v1167 == 0;
    }
    var v1168 = i$$35 = i$$35 - n$$21;
    var v511 = v1168 < 0;
    if (v511) {
      i$$35 = i$$35 + BI_DB;
      --j$$9;
    }
    if (is1) {
      var v512 = g$$1[w$$11];
      v512.copyTo(r$$52);
      is1 = false;
    } else {
      var v513 = n$$21 > 1;
      for (;v513;) {
        z$$5.sqrTo(r$$52, r2$$1);
        z$$5.sqrTo(r2$$1, r$$52);
        n$$21 = n$$21 - 2;
        v513 = n$$21 > 1;
      }
      var v514 = n$$21 > 0;
      if (v514) {
        z$$5.sqrTo(r$$52, r2$$1);
      } else {
        t$$5 = r$$52;
        r$$52 = r2$$1;
        r2$$1 = t$$5;
      }
      var v515 = g$$1[w$$11];
      z$$5.mulTo(r2$$1, v515, r$$52);
    }
    var v1169 = j$$9 >= 0;
    if (v1169) {
      var v1584 = e_array[j$$9];
      var v1585 = 1 << i$$35;
      var v1442 = v1584 & v1585;
      v1169 = v1442 == 0;
    }
    var v517 = v1169;
    for (;v517;) {
      z$$5.sqrTo(r$$52, r2$$1);
      t$$5 = r$$52;
      r$$52 = r2$$1;
      r2$$1 = t$$5;
      var v1170 = i$$35 = i$$35 - 1;
      var v516 = v1170 < 0;
      if (v516) {
        i$$35 = BI_DB - 1;
        --j$$9;
      }
      var v1171 = j$$9 >= 0;
      if (v1171) {
        var v1586 = e_array[j$$9];
        var v1587 = 1 << i$$35;
        var v1443 = v1586 & v1587;
        v1171 = v1443 == 0;
      }
      v517 = v1171;
    }
    v518 = j$$9 >= 0;
  }
  return z$$5.revert(r$$52);
}
function bnGCD(a$$24) {
  var v519;
  var v1444 = this.s;
  var v1172 = v1444 < 0;
  if (v1172) {
    v519 = this.negate();
  } else {
    v519 = this.clone();
  }
  var x$$84 = v519;
  var v520;
  var v1445 = a$$24.s;
  var v1173 = v1445 < 0;
  if (v1173) {
    v520 = a$$24.negate();
  } else {
    v520 = a$$24.clone();
  }
  var y$$42 = v520;
  var v1174 = x$$84.compareTo(y$$42);
  var v521 = v1174 < 0;
  if (v521) {
    var t$$6 = x$$84;
    x$$84 = y$$42;
    y$$42 = t$$6;
  }
  var i$$36 = x$$84.getLowestSetBit();
  var g$$2 = y$$42.getLowestSetBit();
  var v522 = g$$2 < 0;
  if (v522) {
    return x$$84;
  }
  var v523 = i$$36 < g$$2;
  if (v523) {
    g$$2 = i$$36;
  }
  var v524 = g$$2 > 0;
  if (v524) {
    x$$84.rShiftTo(g$$2, x$$84);
    y$$42.rShiftTo(g$$2, y$$42);
  }
  var v1175 = x$$84.signum();
  var v528 = v1175 > 0;
  for (;v528;) {
    var v1176 = i$$36 = x$$84.getLowestSetBit();
    var v525 = v1176 > 0;
    if (v525) {
      x$$84.rShiftTo(i$$36, x$$84);
    }
    var v1177 = i$$36 = y$$42.getLowestSetBit();
    var v526 = v1177 > 0;
    if (v526) {
      y$$42.rShiftTo(i$$36, y$$42);
    }
    var v1178 = x$$84.compareTo(y$$42);
    var v527 = v1178 >= 0;
    if (v527) {
      x$$84.subTo(y$$42, x$$84);
      x$$84.rShiftTo(1, x$$84);
    } else {
      y$$42.subTo(x$$84, y$$42);
      y$$42.rShiftTo(1, y$$42);
    }
    var v1179 = x$$84.signum();
    v528 = v1179 > 0;
  }
  var v529 = g$$2 > 0;
  if (v529) {
    y$$42.lShiftTo(g$$2, y$$42);
  }
  return y$$42;
}
function bnpModInt(n$$22) {
  var this_array$$32 = this.array;
  var v530 = n$$22 <= 0;
  if (v530) {
    return 0;
  }
  var d$$4 = BI_DV % n$$22;
  var v531;
  var v1446 = this.s;
  var v1180 = v1446 < 0;
  if (v1180) {
    v531 = n$$22 - 1;
  } else {
    v531 = 0;
  }
  var r$$53 = v531;
  var v1181 = this.t;
  var v537 = v1181 > 0;
  if (v537) {
    var v536 = d$$4 == 0;
    if (v536) {
      var v532 = this_array$$32[0];
      r$$53 = v532 % n$$22;
    } else {
      var v533 = this.t;
      var i$$37 = v533 - 1;
      var v535 = i$$37 >= 0;
      for (;v535;) {
        var v1182 = d$$4 * r$$53;
        var v1183 = this_array$$32[i$$37];
        var v534 = v1182 + v1183;
        r$$53 = v534 % n$$22;
        --i$$37;
        v535 = i$$37 >= 0;
      }
    }
  }
  return r$$53;
}
function bnModInverse(m$$13) {
  var ac = m$$13.isEven();
  var v1447 = this.isEven();
  if (v1447) {
    v1447 = ac;
  }
  var v1184 = v1447;
  var v1449 = !v1184;
  if (v1449) {
    var v1448 = m$$13.signum();
    v1184 = v1448 == 0;
  }
  var v538 = v1184;
  if (v538) {
    return BigInteger.ZERO;
  }
  var u = m$$13.clone();
  var v$$1 = this.clone();
  var a$$25 = nbv(1);
  var b$$6 = nbv(0);
  var c$$12 = nbv(0);
  var d$$5 = nbv(1);
  var v1185 = u.signum();
  var v546 = v1185 != 0;
  for (;v546;) {
    var v541 = u.isEven();
    for (;v541;) {
      u.rShiftTo(1, u);
      if (ac) {
        var v1450 = a$$25.isEven();
        var v1186 = !v1450;
        var v1452 = !v1186;
        if (v1452) {
          var v1451 = b$$6.isEven();
          v1186 = !v1451;
        }
        var v539 = v1186;
        if (v539) {
          a$$25.addTo(this, a$$25);
          b$$6.subTo(m$$13, b$$6);
        }
        a$$25.rShiftTo(1, a$$25);
      } else {
        var v1187 = b$$6.isEven();
        var v540 = !v1187;
        if (v540) {
          b$$6.subTo(m$$13, b$$6);
        }
      }
      b$$6.rShiftTo(1, b$$6);
      v541 = u.isEven();
    }
    var v544 = v$$1.isEven();
    for (;v544;) {
      v$$1.rShiftTo(1, v$$1);
      if (ac) {
        var v1453 = c$$12.isEven();
        var v1188 = !v1453;
        var v1455 = !v1188;
        if (v1455) {
          var v1454 = d$$5.isEven();
          v1188 = !v1454;
        }
        var v542 = v1188;
        if (v542) {
          c$$12.addTo(this, c$$12);
          d$$5.subTo(m$$13, d$$5);
        }
        c$$12.rShiftTo(1, c$$12);
      } else {
        var v1189 = d$$5.isEven();
        var v543 = !v1189;
        if (v543) {
          d$$5.subTo(m$$13, d$$5);
        }
      }
      d$$5.rShiftTo(1, d$$5);
      v544 = v$$1.isEven();
    }
    var v1190 = u.compareTo(v$$1);
    var v545 = v1190 >= 0;
    if (v545) {
      u.subTo(v$$1, u);
      if (ac) {
        a$$25.subTo(c$$12, a$$25);
      }
      b$$6.subTo(d$$5, b$$6);
    } else {
      v$$1.subTo(u, v$$1);
      if (ac) {
        c$$12.subTo(a$$25, c$$12);
      }
      d$$5.subTo(b$$6, d$$5);
    }
    var v1191 = u.signum();
    v546 = v1191 != 0;
  }
  var v1456 = BigInteger.ONE;
  var v1192 = v$$1.compareTo(v1456);
  var v547 = v1192 != 0;
  if (v547) {
    return BigInteger.ZERO;
  }
  var v1193 = d$$5.compareTo(m$$13);
  var v548 = v1193 >= 0;
  if (v548) {
    return d$$5.subtract(m$$13);
  }
  var v1194 = d$$5.signum();
  var v549 = v1194 < 0;
  if (v549) {
    d$$5.addTo(m$$13, d$$5);
  } else {
    return d$$5;
  }
  var v1195 = d$$5.signum();
  var v550 = v1195 < 0;
  if (v550) {
    return d$$5.add(m$$13);
  } else {
    return d$$5;
  }
  return;
}
function bnIsProbablePrime(t$$7) {
  var i$$38;
  var x$$85 = this.abs();
  var x_array$$2 = x$$85.array;
  var v1457 = x$$85.t;
  var v1196 = v1457 == 1;
  if (v1196) {
    var v1458 = x_array$$2[0];
    var v1638 = lowprimes.length;
    var v1588 = v1638 - 1;
    var v1459 = lowprimes[v1588];
    v1196 = v1458 <= v1459;
  }
  var v553 = v1196;
  if (v553) {
    i$$38 = 0;
    var v1197 = lowprimes.length;
    var v552 = i$$38 < v1197;
    for (;v552;) {
      var v1198 = x_array$$2[0];
      var v1199 = lowprimes[i$$38];
      var v551 = v1198 == v1199;
      if (v551) {
        return true;
      }
      ++i$$38;
      var v1200 = lowprimes.length;
      v552 = i$$38 < v1200;
    }
    return false;
  }
  var v554 = x$$85.isEven();
  if (v554) {
    return false;
  }
  i$$38 = 1;
  var v1201 = lowprimes.length;
  var v558 = i$$38 < v1201;
  for (;v558;) {
    var m$$14 = lowprimes[i$$38];
    var j$$10 = i$$38 + 1;
    var v1460 = lowprimes.length;
    var v1202 = j$$10 < v1460;
    if (v1202) {
      v1202 = m$$14 < lplim;
    }
    var v555 = v1202;
    for (;v555;) {
      var v1461 = j$$10;
      j$$10 = j$$10 + 1;
      var v1203 = lowprimes[v1461];
      m$$14 = m$$14 * v1203;
      var v1462 = lowprimes.length;
      var v1204 = j$$10 < v1462;
      if (v1204) {
        v1204 = m$$14 < lplim;
      }
      v555 = v1204;
    }
    m$$14 = x$$85.modInt(m$$14);
    var v557 = i$$38 < j$$10;
    for (;v557;) {
      var v1589 = i$$38;
      i$$38 = i$$38 + 1;
      var v1463 = lowprimes[v1589];
      var v1205 = m$$14 % v1463;
      var v556 = v1205 == 0;
      if (v556) {
        return false;
      }
      v557 = i$$38 < j$$10;
    }
    var v1206 = lowprimes.length;
    v558 = i$$38 < v1206;
  }
  return x$$85.millerRabin(t$$7);
}
function bnpMillerRabin(t$$8) {
  var v559 = BigInteger.ONE;
  var n1 = this.subtract(v559);
  var k$$4 = n1.getLowestSetBit();
  var v560 = k$$4 <= 0;
  if (v560) {
    return false;
  }
  var r$$54 = n1.shiftRight(k$$4);
  var v561 = t$$8 + 1;
  t$$8 = v561 >> 1;
  var v1207 = lowprimes.length;
  var v562 = t$$8 > v1207;
  if (v562) {
    t$$8 = lowprimes.length;
  }
  var a$$26 = nbi();
  var i$$39 = 0;
  var v568 = i$$39 < t$$8;
  for (;v568;) {
    var v563 = lowprimes[i$$39];
    a$$26.fromInt(v563);
    var y$$43 = a$$26.modPow(r$$54, this);
    var v1590 = BigInteger.ONE;
    var v1464 = y$$43.compareTo(v1590);
    var v1208 = v1464 != 0;
    if (v1208) {
      var v1465 = y$$43.compareTo(n1);
      v1208 = v1465 != 0;
    }
    var v567 = v1208;
    if (v567) {
      var j$$11 = 1;
      var v1466 = j$$11;
      j$$11 = j$$11 + 1;
      var v1209 = v1466 < k$$4;
      if (v1209) {
        var v1467 = y$$43.compareTo(n1);
        v1209 = v1467 != 0;
      }
      var v565 = v1209;
      for (;v565;) {
        y$$43 = y$$43.modPowInt(2, this);
        var v1468 = BigInteger.ONE;
        var v1210 = y$$43.compareTo(v1468);
        var v564 = v1210 == 0;
        if (v564) {
          return false;
        }
        var v1469 = j$$11;
        j$$11 = j$$11 + 1;
        var v1211 = v1469 < k$$4;
        if (v1211) {
          var v1470 = y$$43.compareTo(n1);
          v1211 = v1470 != 0;
        }
        v565 = v1211;
      }
      var v1212 = y$$43.compareTo(n1);
      var v566 = v1212 != 0;
      if (v566) {
        return false;
      }
    }
    ++i$$39;
    v568 = i$$39 < t$$8;
  }
  return true;
}
function Arcfour() {
  this.i = 0;
  this.j = 0;
  var v1680 = new Array;
  this.S = v1680;
  return;
}
function ARC4init(key$$14) {
  var i$$40;
  var j$$12;
  var t$$9;
  i$$40 = 0;
  var v570 = i$$40 < 256;
  for (;v570;) {
    var v569 = this.S;
    v569[i$$40] = i$$40;
    ++i$$40;
    v570 = i$$40 < 256;
  }
  j$$12 = 0;
  i$$40 = 0;
  var v575 = i$$40 < 256;
  for (;v575;) {
    var v1591 = this.S;
    var v1471 = v1591[i$$40];
    var v1213 = j$$12 + v1471;
    var v1592 = key$$14.length;
    var v1472 = i$$40 % v1592;
    var v1214 = key$$14[v1472];
    var v571 = v1213 + v1214;
    j$$12 = v571 & 255;
    var v572 = this.S;
    t$$9 = v572[i$$40];
    var v573 = this.S;
    var v1215 = this.S;
    v573[i$$40] = v1215[j$$12];
    var v574 = this.S;
    v574[j$$12] = t$$9;
    ++i$$40;
    v575 = i$$40 < 256;
  }
  this.i = 0;
  this.j = 0;
  return;
}
function ARC4next() {
  var t$$10;
  var v1216 = this.i;
  var v576 = v1216 + 1;
  this.i = v576 & 255;
  var v1217 = this.j;
  var v1473 = this.S;
  var v1474 = this.i;
  var v1218 = v1473[v1474];
  var v577 = v1217 + v1218;
  this.j = v577 & 255;
  var v578 = this.S;
  var v579 = this.i;
  t$$10 = v578[v579];
  var v580 = this.S;
  var v581 = this.i;
  var v1219 = this.S;
  var v1220 = this.j;
  v580[v581] = v1219[v1220];
  var v582 = this.S;
  var v583 = this.j;
  v582[v583] = t$$10;
  var v584 = this.S;
  var v1593 = this.S;
  var v1594 = this.i;
  var v1475 = v1593[v1594];
  var v1221 = t$$10 + v1475;
  var v585 = v1221 & 255;
  return v584[v585];
}
function prng_newstate() {
  return new Arcfour;
}
function rng_seed_int(x$$86) {
  var v586 = rng_pptr;
  rng_pptr = rng_pptr + 1;
  var v1476 = rng_pool[v586];
  var v1477 = x$$86 & 255;
  rng_pool[v586] = v1476 ^ v1477;
  var v587 = rng_pptr;
  rng_pptr = rng_pptr + 1;
  var v1478 = rng_pool[v587];
  var v1595 = x$$86 >> 8;
  var v1479 = v1595 & 255;
  rng_pool[v587] = v1478 ^ v1479;
  var v588 = rng_pptr;
  rng_pptr = rng_pptr + 1;
  var v1480 = rng_pool[v588];
  var v1596 = x$$86 >> 16;
  var v1481 = v1596 & 255;
  rng_pool[v588] = v1480 ^ v1481;
  var v589 = rng_pptr;
  rng_pptr = rng_pptr + 1;
  var v1482 = rng_pool[v589];
  var v1597 = x$$86 >> 24;
  var v1483 = v1597 & 255;
  rng_pool[v589] = v1482 ^ v1483;
  var v590 = rng_pptr >= rng_psize;
  if (v590) {
    rng_pptr = rng_pptr - rng_psize;
  }
  return;
}
function rng_seed_time() {
  rng_seed_int(1122926989487);
  return;
}
function rng_get_byte() {
  var v592 = rng_state == null;
  if (v592) {
    rng_seed_time();
    rng_state = prng_newstate();
    rng_state.init(rng_pool);
    rng_pptr = 0;
    var v1222 = rng_pool.length;
    var v591 = rng_pptr < v1222;
    for (;v591;) {
      rng_pool[rng_pptr] = 0;
      ++rng_pptr;
      var v1223 = rng_pool.length;
      v591 = rng_pptr < v1223;
    }
    rng_pptr = 0;
  }
  return rng_state.next();
}
function rng_get_bytes(ba) {
  var i$$41;
  i$$41 = 0;
  var v1224 = ba.length;
  var v593 = i$$41 < v1224;
  for (;v593;) {
    var v1681 = rng_get_byte();
    ba[i$$41] = v1681;
    ++i$$41;
    var v1225 = ba.length;
    v593 = i$$41 < v1225;
  }
  return;
}
function SecureRandom() {
  return;
}
function parseBigInt(str$$6, r$$55) {
  return new BigInteger(str$$6, r$$55);
}
function linebrk(s$$6, n$$23) {
  var ret = "";
  var i$$42 = 0;
  var v1226 = i$$42 + n$$23;
  var v1227 = s$$6.length;
  var v594 = v1226 < v1227;
  for (;v594;) {
    var v1598 = i$$42 + n$$23;
    var v1484 = s$$6.substring(i$$42, v1598);
    var v1228 = v1484 + "\n";
    ret = ret + v1228;
    i$$42 = i$$42 + n$$23;
    var v1229 = i$$42 + n$$23;
    var v1230 = s$$6.length;
    v594 = v1229 < v1230;
  }
  var v1231 = s$$6.length;
  var v595 = s$$6.substring(i$$42, v1231);
  return ret + v595;
}
function byte2Hex(b$$7) {
  var v597 = b$$7 < 16;
  if (v597) {
    var v596 = b$$7.toString(16);
    return "0" + v596;
  } else {
    return b$$7.toString(16);
  }
  return;
}
function pkcs1pad2(s$$7, n$$24) {
  var v1485 = s$$7.length;
  var v1232 = v1485 + 11;
  var v598 = n$$24 < v1232;
  if (v598) {
    alert("Message too long for RSA");
    return null;
  }
  var ba$$1 = new Array;
  var v599 = s$$7.length;
  var i$$43 = v599 - 1;
  var v1233 = i$$43 >= 0;
  if (v1233) {
    v1233 = n$$24 > 0;
  }
  var v601 = v1233;
  for (;v601;) {
    var v600 = n$$24 = n$$24 - 1;
    var v1234 = i$$43;
    i$$43 = i$$43 - 1;
    var v1682 = s$$7.charCodeAt(v1234);
    ba$$1[v600] = v1682;
    var v1235 = i$$43 >= 0;
    if (v1235) {
      v1235 = n$$24 > 0;
    }
    v601 = v1235;
  }
  var v602 = n$$24 = n$$24 - 1;
  ba$$1[v602] = 0;
  var rng = new SecureRandom;
  var x$$87 = new Array;
  var v605 = n$$24 > 2;
  for (;v605;) {
    x$$87[0] = 0;
    var v1236 = x$$87[0];
    var v603 = v1236 == 0;
    for (;v603;) {
      rng.nextBytes(x$$87);
      var v1237 = x$$87[0];
      v603 = v1237 == 0;
    }
    var v604 = n$$24 = n$$24 - 1;
    ba$$1[v604] = x$$87[0];
    v605 = n$$24 > 2;
  }
  var v606 = n$$24 = n$$24 - 1;
  ba$$1[v606] = 2;
  var v607 = n$$24 = n$$24 - 1;
  ba$$1[v607] = 0;
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
  var v1599 = N != null;
  if (v1599) {
    v1599 = E != null;
  }
  var v1486 = v1599;
  if (v1486) {
    var v1600 = N.length;
    v1486 = v1600 > 0;
  }
  var v1238 = v1486;
  if (v1238) {
    var v1487 = E.length;
    v1238 = v1487 > 0;
  }
  var v608 = v1238;
  if (v608) {
    var v1683 = parseBigInt(N, 16);
    this.n = v1683;
    var v1684 = parseInt(E, 16);
    this.e = v1684;
  } else {
    alert("Invalid RSA public key");
  }
  return;
}
function RSADoPublic(x$$88) {
  var v609 = this.e;
  var v610 = this.n;
  return x$$88.modPowInt(v609, v610);
}
function RSAEncrypt(text$$7) {
  var v1601 = this.n;
  var v1488 = v1601.bitLength();
  var v1239 = v1488 + 7;
  var v611 = v1239 >> 3;
  var m$$15 = pkcs1pad2(text$$7, v611);
  var v612 = m$$15 == null;
  if (v612) {
    return null;
  }
  var c$$13 = this.doPublic(m$$15);
  var v613 = c$$13 == null;
  if (v613) {
    return null;
  }
  var h$$7 = c$$13.toString(16);
  var v1489 = h$$7.length;
  var v1240 = v1489 & 1;
  var v614 = v1240 == 0;
  if (v614) {
    return h$$7;
  } else {
    return "0" + h$$7;
  }
  return;
}
function pkcs1unpad2(d$$6, n$$25) {
  var b$$8 = d$$6.toByteArray();
  var i$$44 = 0;
  var v1490 = b$$8.length;
  var v1241 = i$$44 < v1490;
  if (v1241) {
    var v1491 = b$$8[i$$44];
    v1241 = v1491 == 0;
  }
  var v615 = v1241;
  for (;v615;) {
    ++i$$44;
    var v1492 = b$$8.length;
    var v1242 = i$$44 < v1492;
    if (v1242) {
      var v1493 = b$$8[i$$44];
      v1242 = v1493 == 0;
    }
    v615 = v1242;
  }
  var v1602 = b$$8.length;
  var v1494 = v1602 - i$$44;
  var v1495 = n$$25 - 1;
  var v1243 = v1494 != v1495;
  var v1497 = !v1243;
  if (v1497) {
    var v1496 = b$$8[i$$44];
    v1243 = v1496 != 2;
  }
  var v616 = v1243;
  if (v616) {
    return null;
  }
  ++i$$44;
  var v1244 = b$$8[i$$44];
  var v618 = v1244 != 0;
  for (;v618;) {
    var v1245 = i$$44 = i$$44 + 1;
    var v1246 = b$$8.length;
    var v617 = v1245 >= v1246;
    if (v617) {
      return null;
    }
    var v1247 = b$$8[i$$44];
    v618 = v1247 != 0;
  }
  var ret$$1 = "";
  var v1248 = i$$44 = i$$44 + 1;
  var v1249 = b$$8.length;
  var v619 = v1248 < v1249;
  for (;v619;) {
    var v1498 = b$$8[i$$44];
    var v1250 = String.fromCharCode(v1498);
    ret$$1 = ret$$1 + v1250;
    var v1251 = i$$44 = i$$44 + 1;
    var v1252 = b$$8.length;
    v619 = v1251 < v1252;
  }
  return ret$$1;
}
function RSASetPrivate(N$$1, E$$1, D) {
  var v1603 = N$$1 != null;
  if (v1603) {
    v1603 = E$$1 != null;
  }
  var v1499 = v1603;
  if (v1499) {
    var v1604 = N$$1.length;
    v1499 = v1604 > 0;
  }
  var v1253 = v1499;
  if (v1253) {
    var v1500 = E$$1.length;
    v1253 = v1500 > 0;
  }
  var v620 = v1253;
  if (v620) {
    var v1685 = parseBigInt(N$$1, 16);
    this.n = v1685;
    var v1686 = parseInt(E$$1, 16);
    this.e = v1686;
    var v1687 = parseBigInt(D, 16);
    this.d = v1687;
  } else {
    alert("Invalid RSA private key");
  }
  return;
}
function RSASetPrivateEx(N$$2, E$$2, D$$1, P, Q, DP, DQ, C) {
  var v1605 = N$$2 != null;
  if (v1605) {
    v1605 = E$$2 != null;
  }
  var v1501 = v1605;
  if (v1501) {
    var v1606 = N$$2.length;
    v1501 = v1606 > 0;
  }
  var v1254 = v1501;
  if (v1254) {
    var v1502 = E$$2.length;
    v1254 = v1502 > 0;
  }
  var v621 = v1254;
  if (v621) {
    var v1688 = parseBigInt(N$$2, 16);
    this.n = v1688;
    var v1689 = parseInt(E$$2, 16);
    this.e = v1689;
    var v1690 = parseBigInt(D$$1, 16);
    this.d = v1690;
    var v1691 = parseBigInt(P, 16);
    this.p = v1691;
    var v1692 = parseBigInt(Q, 16);
    this.q = v1692;
    var v1693 = parseBigInt(DP, 16);
    this.dmp1 = v1693;
    var v1694 = parseBigInt(DQ, 16);
    this.dmq1 = v1694;
    var v1695 = parseBigInt(C, 16);
    this.coeff = v1695;
  } else {
    alert("Invalid RSA private key");
  }
  return;
}
function RSAGenerate(B, E$$3) {
  var rng$$1 = new SecureRandom;
  var qs = B >> 1;
  var v1696 = parseInt(E$$3, 16);
  this.e = v1696;
  var ee = new BigInteger(E$$3, 16);
  for (;;) {
    for (;;) {
      var v622 = B - qs;
      var v1697 = new BigInteger(v622, 1, rng$$1);
      this.p = v1697;
      var v1653 = this.p;
      var v1654 = BigInteger.ONE;
      var v1639 = v1653.subtract(v1654);
      var v1607 = v1639.gcd(ee);
      var v1608 = BigInteger.ONE;
      var v1503 = v1607.compareTo(v1608);
      var v1255 = v1503 == 0;
      if (v1255) {
        var v1504 = this.p;
        v1255 = v1504.isProbablePrime(10);
      }
      var v623 = v1255;
      if (v623) {
        break;
      }
    }
    for (;;) {
      var v1698 = new BigInteger(qs, 1, rng$$1);
      this.q = v1698;
      var v1655 = this.q;
      var v1656 = BigInteger.ONE;
      var v1640 = v1655.subtract(v1656);
      var v1609 = v1640.gcd(ee);
      var v1610 = BigInteger.ONE;
      var v1505 = v1609.compareTo(v1610);
      var v1256 = v1505 == 0;
      if (v1256) {
        var v1506 = this.q;
        v1256 = v1506.isProbablePrime(10);
      }
      var v624 = v1256;
      if (v624) {
        break;
      }
    }
    var v1507 = this.p;
    var v1508 = this.q;
    var v1257 = v1507.compareTo(v1508);
    var v625 = v1257 <= 0;
    if (v625) {
      var t$$11 = this.p;
      this.p = this.q;
      this.q = t$$11;
    }
    var v626 = this.p;
    var v627 = BigInteger.ONE;
    var p1 = v626.subtract(v627);
    var v628 = this.q;
    var v629 = BigInteger.ONE;
    var q1 = v628.subtract(v629);
    var phi = p1.multiply(q1);
    var v1509 = phi.gcd(ee);
    var v1510 = BigInteger.ONE;
    var v1258 = v1509.compareTo(v1510);
    var v636 = v1258 == 0;
    if (v636) {
      var v630 = this.p;
      var v631 = this.q;
      var v1699 = v630.multiply(v631);
      this.n = v1699;
      var v1700 = ee.modInverse(phi);
      this.d = v1700;
      var v632 = this.d;
      var v1701 = v632.mod(p1);
      this.dmp1 = v1701;
      var v633 = this.d;
      var v1702 = v633.mod(q1);
      this.dmq1 = v1702;
      var v634 = this.q;
      var v635 = this.p;
      var v1703 = v634.modInverse(v635);
      this.coeff = v1703;
      break;
    }
  }
  return;
}
function RSADoPrivate(x$$89) {
  var v1511 = this.p;
  var v1259 = v1511 == null;
  var v1513 = !v1259;
  if (v1513) {
    var v1512 = this.q;
    v1259 = v1512 == null;
  }
  var v639 = v1259;
  if (v639) {
    var v637 = this.d;
    var v638 = this.n;
    return x$$89.modPow(v637, v638);
  }
  var v1260 = this.p;
  var v640 = x$$89.mod(v1260);
  var v641 = this.dmp1;
  var v642 = this.p;
  var xp = v640.modPow(v641, v642);
  var v1261 = this.q;
  var v643 = x$$89.mod(v1261);
  var v644 = this.dmq1;
  var v645 = this.q;
  var xq = v643.modPow(v644, v645);
  var v1262 = xp.compareTo(xq);
  var v647 = v1262 < 0;
  for (;v647;) {
    var v646 = this.p;
    xp = xp.add(v646);
    var v1263 = xp.compareTo(xq);
    v647 = v1263 < 0;
  }
  var v1611 = xp.subtract(xq);
  var v1612 = this.coeff;
  var v1514 = v1611.multiply(v1612);
  var v1515 = this.p;
  var v1264 = v1514.mod(v1515);
  var v1265 = this.q;
  var v648 = v1264.multiply(v1265);
  return v648.add(xq);
}
function RSADecrypt(ctext) {
  var c$$14 = parseBigInt(ctext, 16);
  var m$$16 = this.doPrivate(c$$14);
  var v649 = m$$16 == null;
  if (v649) {
    return null;
  }
  var v1613 = this.n;
  var v1516 = v1613.bitLength();
  var v1266 = v1516 + 7;
  var v650 = v1266 >> 3;
  return pkcs1unpad2(m$$16, v650);
}
function encrypt() {
  var RSA = new RSAKey;
  RSA.setPublic(nValue, eValue);
  RSA.setPrivateEx(nValue, eValue, dValue, pValue, qValue, dmp1Value, dmq1Value, coeffValue);
  encrypted = RSA.encrypt(TEXT);
  return;
}
function decrypt() {
  var RSA$$1 = new RSAKey;
  RSA$$1.setPublic(nValue, eValue);
  RSA$$1.setPrivateEx(nValue, eValue, dValue, pValue, qValue, dmp1Value, dmq1Value, coeffValue);
  var decrypted = RSA$$1.decrypt(encrypted);
  var v651 = decrypted != TEXT;
  if (v651) {
    throw new Error("Crypto operation failed");
  }
  return;
}
function ShowBox(name$$32) {
  function v2(entry) {
    var v1267 = name$$32.valueOf();
    var v1268 = entry.valueOf();
    var v654 = v1267 === v1268;
    if (v654) {
      var v1269 = "Box-" + name$$32;
      var v652 = v1269 + "Latency";
      var box1 = document.getElementById(v652);
      var v653 = box1.style;
      v653.visibility = "visible";
    }
    return;
  }
  var v655 = "Box-" + name$$32;
  var box = document.getElementById(v655);
  var v656 = box.style;
  v656.visibility = "visible";
  var v1270 = document.getElementById("progress-bar");
  var v657 = v1270.style;
  var v1641 = completed = completed + 1;
  var v1614 = v1641 / benchmarks;
  var v1517 = v1614 * 100;
  var v1271 = "" + v1517;
  var bar = v657.width = v1271 + "%";
  latencyBenchmarks.forEach(v2);
  return;
}
function AddResult(name$$33, result$$2) {
  var v1272 = name$$33 + ": ";
  var v658 = v1272 + result$$2;
  console.log(v658);
  var v659 = "Result-" + name$$33;
  var box$$1 = document.getElementById(v659);
  box$$1.innerHTML = result$$2;
  return;
}
function AddError(name$$34, error$$2) {
  var v1273 = name$$34 + ": ";
  var v1274 = error$$2.message;
  var v660 = v1273 + v1274;
  console.log(v660);
  var v662 = error$$2 == "TypedArrayUnsupported";
  if (v662) {
    AddResult(name$$34, "<b>Unsupported</b>");
  } else {
    var v661 = error$$2 == "PerformanceNowUnsupported";
    if (v661) {
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
    status.innerHTML = "Octane Score: " + score$$2;
  } else {
    status.innerHTML = "Octane Score (incomplete): " + score$$2;
  }
  var v1275 = document.getElementById("progress-bar-container");
  var v663 = v1275.style;
  v663.visibility = "hidden";
  var v1276 = document.getElementById("bottom-text");
  var v664 = v1276.style;
  v664.visibility = "visible";
  var v665 = document.getElementById("inside-anchor");
  var v666 = document.getElementById("bar-appendix");
  v665.removeChild(v666);
  var v1277 = document.getElementById("alertbox");
  var v667 = v1277.style;
  v667.visibility = "hidden";
  return;
}
function Run() {
  var v668 = document.getElementById("main-banner");
  v668.innerHTML = "Running Octane...";
  var v669 = document.getElementById("bar-appendix");
  v669.innerHTML = '<br/><div class="progress progress-striped" id="progress-bar-container" style="visibility:hidden"><div class="bar"style="width: 0%;" id="progress-bar"></div></div>';
  var anchor = document.getElementById("run-octane");
  var parent = document.getElementById("main-container");
  var v670 = document.getElementById("inside-anchor");
  parent.appendChild(v670);
  parent.removeChild(anchor);
  var v671 = document.getElementById("startup-text");
  v671.innerHTML = "";
  var v1278 = document.getElementById("progress-bar-container");
  var v672 = v1278.style;
  v672.visibility = "visible";
  var v673 = {NotifyStart:ShowBox, NotifyError:AddError, NotifyResult:AddResult, NotifyScore:AddScore};
  BenchmarkSuite.RunSuites(v673, skipBenchmarks);
  return;
}
function CheckCompatibility() {
  var v1518 = typeof Uint8Array;
  var v1279 = v1518 != "undefined";
  if (v1279) {
    var v1519 = typeof Float64Array;
    v1279 = v1519 != "undefined";
  }
  var v674 = v1279;
  if (v674) {
    var v1615 = new Uint8Array(0);
    var v1520 = v1615.subarray;
    var v1280 = typeof v1520;
    v674 = v1280 != "undefined";
  }
  var hasTypedArrays = v674;
  var v676 = !hasTypedArrays;
  if (v676) {
    console.log("Typed Arrays not supported");
    var v1281 = document.getElementById("alertbox");
    var v675 = v1281.style;
    v675.display = "block";
  }
  var v1616 = window.document;
  var v1521 = v1616.URL;
  var v1282 = v1521.indexOf("skip_zlib=1");
  var v677 = v1282 >= 0;
  if (v677) {
    skipBenchmarks.push("zlib");
  }
  var v1617 = window.document;
  var v1522 = v1617.URL;
  var v1283 = v1522.indexOf("auto=1");
  var v678 = v1283 >= 0;
  if (v678) {
    Run();
  }
  return;
}
function Load() {
  setTimeout(CheckCompatibility, 200);
  return;
}
var performance = performance || {};
var v679 = performance;
var v1704 = v3();
v679.now = v1704;
var v680 = BenchmarkResult.prototype;
v680.valueOf = v4;
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
var v681 = BenchmarkSuite.prototype;
v681.NotifyStep = v15;
var v682 = BenchmarkSuite.prototype;
v682.NotifyResult = v16;
var v683 = BenchmarkSuite.prototype;
v683.NotifySkipped = v17;
var v684 = BenchmarkSuite.prototype;
v684.NotifyError = v18;
var v685 = BenchmarkSuite.prototype;
v685.RunSingleBenchmark = v19;
var v686 = BenchmarkSuite.prototype;
v686.RunStep = v20;
var v687 = [266181];
var v1284 = new Benchmark("Encrypt", true, false, 3900, encrypt);
var v1285 = new Benchmark("Decrypt", true, false, 220, decrypt);
var v688 = [v1284, v1285];
var Crypto = new BenchmarkSuite("Crypto", v687, v688);
var dbits;
var BI_DB;
var BI_DM;
var BI_DV;
var BI_FP;
var BI_FV;
var BI_F1;
var BI_F2;
var canary = 0xdeadbeefcafe;
var v689 = canary & 16777215;
var j_lm = v689 == 15715070;
setupEngine = v21;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
var BI_RC = new Array;
var rr;
var vv;
rr = "0".charCodeAt(0);
vv = 0;
var v691 = vv <= 9;
for (;v691;) {
  var v690 = rr;
  rr = rr + 1;
  BI_RC[v690] = vv;
  ++vv;
  v691 = vv <= 9;
}
rr = "a".charCodeAt(0);
vv = 10;
var v693 = vv < 36;
for (;v693;) {
  var v692 = rr;
  rr = rr + 1;
  BI_RC[v692] = vv;
  ++vv;
  v693 = vv < 36;
}
rr = "A".charCodeAt(0);
vv = 10;
var v695 = vv < 36;
for (;v695;) {
  var v694 = rr;
  rr = rr + 1;
  BI_RC[v694] = vv;
  ++vv;
  v695 = vv < 36;
}
var v696 = Classic.prototype;
v696.convert = cConvert;
var v697 = Classic.prototype;
v697.revert = cRevert;
var v698 = Classic.prototype;
v698.reduce = cReduce;
var v699 = Classic.prototype;
v699.mulTo = cMulTo;
var v700 = Classic.prototype;
v700.sqrTo = cSqrTo;
var v701 = Montgomery.prototype;
v701.convert = montConvert;
var v702 = Montgomery.prototype;
v702.revert = montRevert;
var v703 = Montgomery.prototype;
v703.reduce = montReduce;
var v704 = Montgomery.prototype;
v704.mulTo = montMulTo;
var v705 = Montgomery.prototype;
v705.sqrTo = montSqrTo;
var v706 = BigInteger.prototype;
v706.copyTo = bnpCopyTo;
var v707 = BigInteger.prototype;
v707.fromInt = bnpFromInt;
var v708 = BigInteger.prototype;
v708.fromString = bnpFromString;
var v709 = BigInteger.prototype;
v709.clamp = bnpClamp;
var v710 = BigInteger.prototype;
v710.dlShiftTo = bnpDLShiftTo;
var v711 = BigInteger.prototype;
v711.drShiftTo = bnpDRShiftTo;
var v712 = BigInteger.prototype;
v712.lShiftTo = bnpLShiftTo;
var v713 = BigInteger.prototype;
v713.rShiftTo = bnpRShiftTo;
var v714 = BigInteger.prototype;
v714.subTo = bnpSubTo;
var v715 = BigInteger.prototype;
v715.multiplyTo = bnpMultiplyTo;
var v716 = BigInteger.prototype;
v716.squareTo = bnpSquareTo;
var v717 = BigInteger.prototype;
v717.divRemTo = bnpDivRemTo;
var v718 = BigInteger.prototype;
v718.invDigit = bnpInvDigit;
var v719 = BigInteger.prototype;
v719.isEven = bnpIsEven;
var v720 = BigInteger.prototype;
v720.exp = bnpExp;
var v721 = BigInteger.prototype;
v721.toString = bnToString;
var v722 = BigInteger.prototype;
v722.negate = bnNegate;
var v723 = BigInteger.prototype;
v723.abs = bnAbs;
var v724 = BigInteger.prototype;
v724.compareTo = bnCompareTo;
var v725 = BigInteger.prototype;
v725.bitLength = bnBitLength;
var v726 = BigInteger.prototype;
v726.mod = bnMod;
var v727 = BigInteger.prototype;
v727.modPowInt = bnModPowInt;
var v728 = BigInteger;
var v1705 = nbv(0);
v728.ZERO = v1705;
var v729 = BigInteger;
var v1706 = nbv(1);
v729.ONE = v1706;
var v730 = NullExp.prototype;
v730.convert = nNop;
var v731 = NullExp.prototype;
v731.revert = nNop;
var v732 = NullExp.prototype;
v732.mulTo = nMulTo;
var v733 = NullExp.prototype;
v733.sqrTo = nSqrTo;
var v734 = Barrett.prototype;
v734.convert = barrettConvert;
var v735 = Barrett.prototype;
v735.revert = barrettRevert;
var v736 = Barrett.prototype;
v736.reduce = barrettReduce;
var v737 = Barrett.prototype;
v737.mulTo = barrettMulTo;
var v738 = Barrett.prototype;
v738.sqrTo = barrettSqrTo;
var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509];
var v739 = 1 << 26;
var v1523 = lowprimes.length;
var v1286 = v1523 - 1;
var v740 = lowprimes[v1286];
var lplim = v739 / v740;
var v741 = BigInteger.prototype;
v741.chunkSize = bnpChunkSize;
var v742 = BigInteger.prototype;
v742.toRadix = bnpToRadix;
var v743 = BigInteger.prototype;
v743.fromRadix = bnpFromRadix;
var v744 = BigInteger.prototype;
v744.fromNumber = bnpFromNumber;
var v745 = BigInteger.prototype;
v745.bitwiseTo = bnpBitwiseTo;
var v746 = BigInteger.prototype;
v746.changeBit = bnpChangeBit;
var v747 = BigInteger.prototype;
v747.addTo = bnpAddTo;
var v748 = BigInteger.prototype;
v748.dMultiply = bnpDMultiply;
var v749 = BigInteger.prototype;
v749.dAddOffset = bnpDAddOffset;
var v750 = BigInteger.prototype;
v750.multiplyLowerTo = bnpMultiplyLowerTo;
var v751 = BigInteger.prototype;
v751.multiplyUpperTo = bnpMultiplyUpperTo;
var v752 = BigInteger.prototype;
v752.modInt = bnpModInt;
var v753 = BigInteger.prototype;
v753.millerRabin = bnpMillerRabin;
var v754 = BigInteger.prototype;
v754.clone = bnClone;
var v755 = BigInteger.prototype;
v755.intValue = bnIntValue;
var v756 = BigInteger.prototype;
v756.byteValue = bnByteValue;
var v757 = BigInteger.prototype;
v757.shortValue = bnShortValue;
var v758 = BigInteger.prototype;
v758.signum = bnSigNum;
var v759 = BigInteger.prototype;
v759.toByteArray = bnToByteArray;
var v760 = BigInteger.prototype;
v760.equals = bnEquals;
var v761 = BigInteger.prototype;
v761.min = bnMin;
var v762 = BigInteger.prototype;
v762.max = bnMax;
var v763 = BigInteger.prototype;
v763.and = bnAnd;
var v764 = BigInteger.prototype;
v764.or = bnOr;
var v765 = BigInteger.prototype;
v765.xor = bnXor;
var v766 = BigInteger.prototype;
v766.andNot = bnAndNot;
var v767 = BigInteger.prototype;
v767.not = bnNot;
var v768 = BigInteger.prototype;
v768.shiftLeft = bnShiftLeft;
var v769 = BigInteger.prototype;
v769.shiftRight = bnShiftRight;
var v770 = BigInteger.prototype;
v770.getLowestSetBit = bnGetLowestSetBit;
var v771 = BigInteger.prototype;
v771.bitCount = bnBitCount;
var v772 = BigInteger.prototype;
v772.testBit = bnTestBit;
var v773 = BigInteger.prototype;
v773.setBit = bnSetBit;
var v774 = BigInteger.prototype;
v774.clearBit = bnClearBit;
var v775 = BigInteger.prototype;
v775.flipBit = bnFlipBit;
var v776 = BigInteger.prototype;
v776.add = bnAdd;
var v777 = BigInteger.prototype;
v777.subtract = bnSubtract;
var v778 = BigInteger.prototype;
v778.multiply = bnMultiply;
var v779 = BigInteger.prototype;
v779.divide = bnDivide;
var v780 = BigInteger.prototype;
v780.remainder = bnRemainder;
var v781 = BigInteger.prototype;
v781.divideAndRemainder = bnDivideAndRemainder;
var v782 = BigInteger.prototype;
v782.modPow = bnModPow;
var v783 = BigInteger.prototype;
v783.modInverse = bnModInverse;
var v784 = BigInteger.prototype;
v784.pow = bnPow;
var v785 = BigInteger.prototype;
v785.gcd = bnGCD;
var v786 = BigInteger.prototype;
v786.isProbablePrime = bnIsProbablePrime;
var v787 = Arcfour.prototype;
v787.init = ARC4init;
var v788 = Arcfour.prototype;
v788.next = ARC4next;
var rng_psize = 256;
var rng_state;
var rng_pool;
var rng_pptr;
var v793 = rng_pool == null;
if (v793) {
  rng_pool = new Array;
  rng_pptr = 0;
  var t;
  var v792 = rng_pptr < rng_psize;
  for (;v792;) {
    var v1287 = Math.random();
    var v789 = 65536 * v1287;
    t = Math.floor(v789);
    var v790 = rng_pptr;
    rng_pptr = rng_pptr + 1;
    rng_pool[v790] = t >>> 8;
    var v791 = rng_pptr;
    rng_pptr = rng_pptr + 1;
    rng_pool[v791] = t & 255;
    v792 = rng_pptr < rng_psize;
  }
  rng_pptr = 0;
  rng_seed_time();
}
var v794 = SecureRandom.prototype;
v794.nextBytes = rng_get_bytes;
var v795 = RSAKey.prototype;
v795.doPublic = RSADoPublic;
var v796 = RSAKey.prototype;
v796.setPublic = RSASetPublic;
var v797 = RSAKey.prototype;
v797.encrypt = RSAEncrypt;
var v798 = RSAKey.prototype;
v798.doPrivate = RSADoPrivate;
var v799 = RSAKey.prototype;
v799.setPrivate = RSASetPrivate;
var v800 = RSAKey.prototype;
v800.setPrivateEx = RSASetPrivateEx;
var v801 = RSAKey.prototype;
v801.generate = RSAGenerate;
var v802 = RSAKey.prototype;
v802.decrypt = RSADecrypt;
nValue = "a5261939975948bb7a58dffe5ff54e65f0498f9175f5a09288810b8975871e99af3b5dd94057b0fc07535f5f97444504fa35169d461d0d30cf0192e307727c065168c788771c561a9400fb49175e9e6aa4e23fe11af69e9412dd23b0cb6684c4c2429bce139e848ab26d0829073351f4acd36074eafd036a5eb83359d2a698d3";
eValue = "10001";
dValue = "8e9912f6d3645894e8d38cb58c0db81ff516cf4c7e5a14c7f1eddb1459d2cded4d8d293fc97aee6aefb861859c8b6a3d1dfe710463e1f9ddc72048c09751971c4a580aa51eb523357a3cc48d31cfad1d4a165066ed92d4748fb6571211da5cb14bc11b6e2df7c1a559e6d5ac1cd5c94703a22891464fba23d0d965086277a161";
pValue = "d090ce58a92c75233a6486cb0a9209bf3583b64f540c76f5294bb97d285eed33aec220bde14b2417951178ac152ceab6da7090905b478195498b352048f15e7d";
qValue = "cab575dc652bb66df15a0359609d51d1db184750c00c6698b90ef3465c99655103edbf0d54c56aec0ce3c4d22592338092a126a0cc49f65a4a30d222b411e58f";
dmp1Value = "1a24bca8e273df2f0e47c199bbf678604e7df7215480c77c8db39f49b000ce2cf7500038acfff5433b7d582a01f1826e6f4d42e1c57f5e1fef7b12aabc59fd25";
dmq1Value = "3d06982efbbe47339e1f6d36b1216b8a741d410b0c662f54f7118b27b9a4ec9d914337eb39841d8666f3034408cf94f5b62f11c402fc994fe15a05493150d9fd";
coeffValue = "3a3e731acd8960b7ff9eb81a7ff93bd1cfa74cbd56987db58b4594fb09c09084db1734c8143f98b602b981aaa9243ca28deb69b5b280ee8dcee0fd2625e53250";
setupEngine(am3, 28);
var TEXT = "The quick brown fox jumped over the extremely lazy frog! " + "Now is the time for all good men to come to the party.";
var encrypted;
var completed = 0;
var benchmarks = BenchmarkSuite.CountBenchmarks();
var success = true;
var latencyBenchmarks = ["Splay", "Mandreel"];
var v803;
var v1524 = typeof skipBenchmarks;
var v1288 = v1524 === "undefined";
if (v1288) {
  v803 = [];
} else {
  v803 = skipBenchmarks;
}
var skipBenchmarks = v803

JAM.stopProfile('load');
