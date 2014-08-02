function v21(fn, bits) {
  var v22 = BigInteger.prototype;
  v22.am = fn;
  dbits = bits;
  BI_DB = dbits;
  var v23 = 1 << dbits;
  BI_DM = v23 - 1;
  BI_DV = 1 << dbits;
  BI_FP = 52;
  BI_FV = JAM.call(Math.pow, Math, [2, BI_FP]);
  BI_F1 = BI_FP - dbits;
  var v24 = 2 * dbits;
  BI_F2 = v24 - BI_FP;
  return
}
function v20(runner$$2) {
  function RunNextSetup() {
    var v26 = index$$40 < length$$12;
    if(v26) {
      try {
        var v815 = suite$$1.benchmarks;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v25 = v815[index$$40]
        }
        v25.Setup()
      }catch(e$$4) {
        JAM.call(suite$$1.NotifyError, suite$$1, [e$$4]);
        return null
      }
      return RunNextBenchmark
    }
    suite$$1.NotifyResult();
    return null
  }
  function RunNextBenchmark() {
    try {
      var v816 = suite$$1.benchmarks;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v27 = v816[index$$40]
      }
      data$$20 = JAM.call(suite$$1.RunSingleBenchmark, suite$$1, [v27, data$$20])
    }catch(e$$5) {
      JAM.call(suite$$1.NotifyError, suite$$1, [e$$5]);
      return null
    }
    var v28;
    var v817 = data$$20 == null;
    if(v817) {
      v28 = RunNextTearDown
    }else {
      v28 = RunNextBenchmark()
    }
    return v28
  }
  function RunNextTearDown() {
    try {
      var v818 = suite$$1.benchmarks;
      var v819 = index$$40;
      index$$40 = index$$40 + 1;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v29 = v818[v819]
      }
      v29.TearDown()
    }catch(e$$6) {
      JAM.call(suite$$1.NotifyError, suite$$1, [e$$6]);
      return null
    }
    return RunNextSetup
  }
  BenchmarkSuite.ResetRNG();
  this.results = [];
  this.runner = runner$$2;
  var v30 = this.benchmarks;
  var length$$12 = v30.length;
  var index$$40 = 0;
  var suite$$1 = this;
  var data$$20;
  return RunNextSetup()
}
function v19(benchmark$$1, data$$18) {
  function Measure(data$$19) {
    var elapsed = 0;
    var start$$4 = new Date;
    var i$$5 = 0;
    var v820;
    if(doDeterministic$$1) {
      var v1315 = benchmark$$1.deterministicIterations;
      v820 = i$$5 < v1315
    }else {
      v820 = elapsed < 1E3
    }
    var v32 = v820;
    for(;v32;) {
      benchmark$$1.run();
      var v31 = new Date;
      elapsed = v31 - start$$4;
      i$$5 = i$$5 + 1;
      var v821;
      if(doDeterministic$$1) {
        var v1316 = benchmark$$1.deterministicIterations;
        v821 = i$$5 < v1316
      }else {
        v821 = elapsed < 1E3
      }
      v32 = v821
    }
    var v33 = data$$19 != null;
    if(v33) {
      var v822 = data$$19.runs;
      data$$19.runs = v822 + i$$5;
      var v823 = data$$19.elapsed;
      data$$19.elapsed = v823 + elapsed
    }
    return
  }
  var config = BenchmarkSuite.config;
  var v34;
  var v1317 = config.doWarmup;
  var v824 = v1317 !== undefined;
  if(v824) {
    v34 = config.doWarmup
  }else {
    v34 = benchmark$$1.doWarmup
  }
  var doWarmup$$1 = v34;
  var v35;
  var v1318 = config.doDeterministic;
  var v825 = v1318 !== undefined;
  if(v825) {
    v35 = config.doDeterministic
  }else {
    v35 = benchmark$$1.doDeterministic
  }
  var doDeterministic$$1 = v35;
  var v826 = !doWarmup$$1;
  if(v826) {
    v826 = data$$18 == null
  }
  var v36 = v826;
  if(v36) {
    data$$18 = {runs:0, elapsed:0}
  }
  var v42 = data$$18 == null;
  if(v42) {
    Measure(null);
    return{runs:0, elapsed:0}
  }else {
    Measure(data$$18);
    var v827 = data$$18.runs;
    var v828 = benchmark$$1.minIterations;
    var v37 = v827 < v828;
    if(v37) {
      return data$$18
    }
    var v829 = data$$18.elapsed;
    var v38 = v829 * 1E3;
    var v39 = data$$18.runs;
    var usec = v38 / v39;
    var v40;
    var v1319 = benchmark$$1.rmsResult;
    var v830 = v1319 != null;
    if(v830) {
      v40 = benchmark$$1.rmsResult()
    }else {
      v40 = 0
    }
    var rms = v40;
    var v41 = new BenchmarkResult(benchmark$$1, usec, rms);
    JAM.call(this.NotifyStep, this, [v41]);
    return null
  }
  return
}
function v18(error$$2) {
  var v831 = this.runner;
  var v45 = v831.NotifyError;
  if(v45) {
    var v43 = this.runner;
    var v44 = this.name;
    JAM.call(v43.NotifyError, v43, [v44, error$$2])
  }
  var v832 = this.runner;
  var v48 = v832.NotifyStep;
  if(v48) {
    var v46 = this.runner;
    var v47 = this.name;
    JAM.call(v46.NotifyStep, v46, [v47])
  }
  return
}
function v17(runner$$1) {
  var v49 = BenchmarkSuite.scores;
  v49.push(1);
  var v51 = runner$$1.NotifyResult;
  if(v51) {
    var v50 = this.name;
    JAM.call(runner$$1.NotifyResult, runner$$1, [v50, "Skipped"])
  }
  return
}
function v16() {
  var v52 = this.results;
  var mean = JAM.call(BenchmarkSuite.GeometricMeanTime, BenchmarkSuite, [v52]);
  var v833 = this.reference;
  var v53 = v833[0];
  var score$$1 = v53 / mean;
  var v54 = BenchmarkSuite.scores;
  v54.push(score$$1);
  var v834 = this.runner;
  var v58 = v834.NotifyResult;
  if(v58) {
    var v55 = 100 * score$$1;
    var formatted$$1 = JAM.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [v55]);
    var v56 = this.runner;
    var v57 = this.name;
    JAM.call(v56.NotifyResult, v56, [v57, formatted$$1])
  }
  var v1320 = this.reference;
  var v835 = v1320.length;
  var v67 = v835 == 2;
  if(v67) {
    var v59 = this.results;
    var meanLatency = JAM.call(BenchmarkSuite.GeometricMeanLatency, BenchmarkSuite, [v59]);
    var v66 = meanLatency != 0;
    if(v66) {
      var v836 = this.reference;
      var v60 = v836[1];
      var scoreLatency = v60 / meanLatency;
      var v61 = BenchmarkSuite.scores;
      v61.push(scoreLatency);
      var v837 = this.runner;
      var v65 = v837.NotifyResult;
      if(v65) {
        var v62 = 100 * scoreLatency;
        var formattedLatency = JAM.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [v62]);
        var v63 = this.runner;
        var v838 = this.name;
        var v64 = v838 + "Latency";
        JAM.call(v63.NotifyResult, v63, [v64, formattedLatency])
      }
    }
  }
  return
}
function v15(result$$1) {
  var v68 = this.results;
  v68.push(result$$1);
  var v839 = this.runner;
  var v71 = v839.NotifyStep;
  if(v71) {
    var v69 = this.runner;
    var v840 = result$$1.benchmark;
    var v70 = v840.name;
    JAM.call(v69.NotifyStep, v69, [v70])
  }
  return
}
function v14(value$$29) {
  var v72 = value$$29 > 100;
  if(v72) {
    return value$$29.toFixed(0)
  }else {
    return value$$29.toPrecision(3)
  }
  return
}
function v13(measurements$$1) {
  var log$$2 = 0;
  var hasLatencyResult = false;
  var i$$4 = 0;
  var v841 = measurements$$1.length;
  var v74 = i$$4 < v841;
  for(;v74;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1321 = measurements$$1[i$$4]
    }
    var v842 = v1321.latency;
    var v73 = v842 != 0;
    if(v73) {
      var v843 = log$$2;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1553 = measurements$$1[i$$4]
      }
      var v1322 = v1553.latency;
      var v844 = Math.log(v1322);
      log$$2 = v843 + v844;
      hasLatencyResult = true
    }
    i$$4 = i$$4 + 1;
    var v845 = measurements$$1.length;
    v74 = i$$4 < v845
  }
  if(hasLatencyResult) {
    var v75 = Math.E;
    var v846 = measurements$$1.length;
    var v76 = log$$2 / v846;
    return JAM.call(Math.pow, Math, [v75, v76])
  }else {
    return 0
  }
  return
}
function v12(measurements) {
  var log$$1 = 0;
  var i$$3 = 0;
  var v847 = measurements.length;
  var v77 = i$$3 < v847;
  for(;v77;) {
    var v848 = log$$1;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1554 = measurements[i$$3]
    }
    var v1323 = v1554.time;
    var v849 = Math.log(v1323);
    log$$1 = v848 + v849;
    i$$3 = i$$3 + 1;
    var v850 = measurements.length;
    v77 = i$$3 < v850
  }
  var v78 = Math.E;
  var v851 = measurements.length;
  var v79 = log$$1 / v851;
  return JAM.call(Math.pow, Math, [v78, v79])
}
function v11(numbers) {
  var log = 0;
  var i$$2 = 0;
  var v852 = numbers.length;
  var v80 = i$$2 < v852;
  for(;v80;) {
    var v853 = log;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1324 = numbers[i$$2]
    }
    var v854 = Math.log(v1324);
    log = v853 + v854;
    i$$2 = i$$2 + 1;
    var v855 = numbers.length;
    v80 = i$$2 < v855
  }
  var v81 = Math.E;
  var v856 = numbers.length;
  var v82 = log / v856;
  return JAM.call(Math.pow, Math, [v81, v82])
}
function v10() {
  var result = 0;
  var suites$$1 = BenchmarkSuite.suites;
  var i$$1 = 0;
  var v857 = suites$$1.length;
  var v83 = i$$1 < v857;
  for(;v83;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1555 = suites$$1[i$$1]
    }
    var v1325 = v1555.benchmarks;
    var v858 = v1325.length;
    result = result + v858;
    i$$1 = i$$1 + 1;
    var v859 = suites$$1.length;
    v83 = i$$1 < v859
  }
  return result
}
function v9(runner, skipBenchmarks$$1) {
  function RunStep() {
    var v860 = continuation;
    var v1326 = !v860;
    if(v1326) {
      v860 = index$$39 < length$$11
    }
    var v89 = v860;
    for(;v89;) {
      if(continuation) {
        continuation = continuation()
      }else {
        var v84 = index$$39;
        index$$39 = index$$39 + 1;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var suite = suites[v84]
        }
        var v86 = runner.NotifyStart;
        if(v86) {
          var v85 = suite.name;
          JAM.call(runner.NotifyStart, runner, [v85])
        }
        var v1327 = suite.name;
        var v861 = skipBenchmarks$$1.indexOf(v1327);
        var v87 = v861 > -1;
        if(v87) {
          JAM.call(suite.NotifySkipped, suite, [runner])
        }else {
          continuation = JAM.call(suite.RunStep, suite, [runner])
        }
      }
      var v862 = continuation;
      if(v862) {
        var v1556 = typeof window;
        var v1328 = v1556 != "undefined";
        if(v1328) {
          v1328 = window.setTimeout
        }
        v862 = v1328
      }
      var v88 = v862;
      if(v88) {
        window.setTimeout(RunStep, 25);
        return
      }
      var v863 = continuation;
      var v1329 = !v863;
      if(v1329) {
        v863 = index$$39 < length$$11
      }
      v89 = v863
    }
    var v92 = runner.NotifyScore;
    if(v92) {
      var v90 = BenchmarkSuite.scores;
      var score = JAM.call(BenchmarkSuite.GeometricMean, BenchmarkSuite, [v90]);
      var v91 = 100 * score;
      var formatted = JAM.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [v91]);
      JAM.call(runner.NotifyScore, runner, [formatted])
    }
    return
  }
  var v93;
  var v1330 = typeof skipBenchmarks$$1;
  var v864 = v1330 === "undefined";
  if(v864) {
    v93 = []
  }else {
    v93 = skipBenchmarks$$1
  }
  skipBenchmarks$$1 = v93;
  var continuation = null;
  var suites = BenchmarkSuite.suites;
  var length$$11 = suites.length;
  BenchmarkSuite.scores = [];
  var index$$39 = 0;
  RunStep();
  return
}
function v8() {
  function v7() {
    function v6() {
      var v865 = seed + 2127912214;
      var v866 = seed << 12;
      var v94 = v865 + v866;
      seed = v94 & 4294967295;
      var v867 = seed ^ 3345072700;
      var v868 = seed >>> 19;
      var v95 = v867 ^ v868;
      seed = v95 & 4294967295;
      var v869 = seed + 374761393;
      var v870 = seed << 5;
      var v96 = v869 + v870;
      seed = v96 & 4294967295;
      var v871 = seed + 3550635116;
      var v872 = seed << 9;
      var v97 = v871 ^ v872;
      seed = v97 & 4294967295;
      var v873 = seed + 4251993797;
      var v874 = seed << 3;
      var v98 = v873 + v874;
      seed = v98 & 4294967295;
      var v875 = seed ^ 3042594569;
      var v876 = seed >>> 16;
      var v99 = v875 ^ v876;
      seed = v99 & 4294967295;
      var v100 = seed & 268435455;
      return v100 / 268435456
    }
    var seed = 49734321;
    return v6
  }
  var v101 = Math;
  var v1698 = v7();
  v101.random = v1698;
  return
}
function v5(s$$2) {
  throw"Alert called with argument: " + s$$2;
}
function v4() {
  return this.time
}
function v3() {
  var v102 = performance.now;
  var v878 = !v102;
  if(v878) {
    var v877 = performance.mozNow;
    var v1332 = !v877;
    if(v1332) {
      var v1331 = performance.msNow;
      var v1558 = !v1331;
      if(v1558) {
        var v1557 = performance.oNow;
        var v1644 = !v1557;
        if(v1644) {
          var v1643 = performance.webkitNow;
          var v1677 = !v1643;
          if(v1677) {
            v1643 = Date.now
          }
          v1557 = v1643
        }
        v1331 = v1557
      }
      v877 = v1331
    }
    v102 = v877
  }
  return v102
}
function Benchmark(name$$31, doWarmup, doDeterministic, deterministicIterations, run, setup, tearDown, rmsResult, minIterations) {
  function v1() {
    return
  }
  function v0() {
    return
  }
  this.name = name$$31;
  this.doWarmup = doWarmup;
  this.doDeterministic = doDeterministic;
  this.deterministicIterations = deterministicIterations;
  this.run = run;
  var v103;
  if(setup) {
    v103 = setup
  }else {
    v103 = v0
  }
  this.Setup = v103;
  var v104;
  if(tearDown) {
    v104 = tearDown
  }else {
    v104 = v1
  }
  this.TearDown = v104;
  var v105;
  if(rmsResult) {
    v105 = rmsResult
  }else {
    v105 = null
  }
  this.rmsResult = v105;
  var v106;
  if(minIterations) {
    v106 = minIterations
  }else {
    v106 = 32
  }
  this.minIterations = v106;
  return
}
function BenchmarkResult(benchmark, time, latency) {
  this.benchmark = benchmark;
  this.time = time;
  this.latency = latency;
  return
}
function BenchmarkSuite(name$$32, reference, benchmarks$$1) {
  this.name = name$$32;
  this.reference = reference;
  this.benchmarks = benchmarks$$1;
  var v107 = BenchmarkSuite.suites;
  v107.push(this);
  return
}
function BigInteger(a, b, c) {
  var v1699 = new Array;
  this.array = v1699;
  var v110 = a != null;
  if(v110) {
    var v879 = typeof a;
    var v109 = "number" == v879;
    if(v109) {
      JAM.call(this.fromNumber, this, [a, b, c])
    }else {
      var v880 = b == null;
      if(v880) {
        var v1333 = typeof a;
        v880 = "string" != v1333
      }
      var v108 = v880;
      if(v108) {
        JAM.call(this.fromString, this, [a, 256])
      }else {
        JAM.call(this.fromString, this, [a, b])
      }
    }
  }
  return
}
function nbi() {
  return new BigInteger(null)
}
function am1(i$$6, x$$48, w$$5, j, c$$1, n$$1) {
  var this_array$$1 = this.array;
  var w_array = w$$5.array;
  var v881 = n$$1 = n$$1 - 1;
  var v114 = v881 >= 0;
  for(;v114;) {
    var v1559 = i$$6;
    i$$6 = i$$6 + 1;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1334 = this_array$$1[v1559]
    }
    var v882 = x$$48 * v1334;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v883 = w_array[j]
    }
    var v111 = v882 + v883;
    var v = v111 + c$$1;
    var v112 = v / 67108864;
    c$$1 = Math.floor(v112);
    var v113 = j;
    j = j + 1;
    JAM.set(w_array, v113, v & 67108863);
    var v884 = n$$1 = n$$1 - 1;
    v114 = v884 >= 0
  }
  return c$$1
}
function am2(i$$7, x$$49, w$$6, j$$1, c$$2, n$$2) {
  var this_array$$2 = this.array;
  var w_array$$1 = w$$6.array;
  var xl = x$$49 & 32767;
  var xh = x$$49 >> 15;
  var v885 = n$$2 = n$$2 - 1;
  var v124 = v885 >= 0;
  for(;v124;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v115 = this_array$$2[i$$7]
    }
    var l = v115 & 32767;
    var v886 = i$$7;
    i$$7 = i$$7 + 1;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v116 = this_array$$2[v886]
    }
    var h$$4 = v116 >> 15;
    var v117 = xh * l;
    var v118 = h$$4 * xl;
    var m = v117 + v118;
    var v1335 = xl * l;
    var v1560 = m & 32767;
    var v1336 = v1560 << 15;
    var v887 = v1335 + v1336;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v888 = w_array$$1[j$$1]
    }
    var v119 = v887 + v888;
    var v120 = c$$2 & 1073741823;
    l = v119 + v120;
    var v1337 = l >>> 30;
    var v1338 = m >>> 15;
    var v889 = v1337 + v1338;
    var v890 = xh * h$$4;
    var v121 = v889 + v890;
    var v122 = c$$2 >>> 30;
    c$$2 = v121 + v122;
    var v123 = j$$1;
    j$$1 = j$$1 + 1;
    JAM.set(w_array$$1, v123, l & 1073741823);
    var v891 = n$$2 = n$$2 - 1;
    v124 = v891 >= 0
  }
  return c$$2
}
function am3(i$$8, x$$50, w$$7, j$$2, c$$3, n$$3) {
  var this_array$$3 = this.array;
  var w_array$$2 = w$$7.array;
  var xl$$1 = x$$50 & 16383;
  var xh$$1 = x$$50 >> 14;
  var v892 = n$$3 = n$$3 - 1;
  var v133 = v892 >= 0;
  for(;v133;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v125 = this_array$$3[i$$8]
    }
    var l$$1 = v125 & 16383;
    var v893 = i$$8;
    i$$8 = i$$8 + 1;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v126 = this_array$$3[v893]
    }
    var h$$5 = v126 >> 14;
    var v127 = xh$$1 * l$$1;
    var v128 = h$$5 * xl$$1;
    var m$$1 = v127 + v128;
    var v1339 = xl$$1 * l$$1;
    var v1561 = m$$1 & 16383;
    var v1340 = v1561 << 14;
    var v894 = v1339 + v1340;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v895 = w_array$$2[j$$2]
    }
    var v129 = v894 + v895;
    l$$1 = v129 + c$$3;
    var v896 = l$$1 >> 28;
    var v897 = m$$1 >> 14;
    var v130 = v896 + v897;
    var v131 = xh$$1 * h$$5;
    c$$3 = v130 + v131;
    var v132 = j$$2;
    j$$2 = j$$2 + 1;
    JAM.set(w_array$$2, v132, l$$1 & 268435455);
    var v898 = n$$3 = n$$3 - 1;
    v133 = v898 >= 0
  }
  return c$$3
}
function am4(i$$9, x$$51, w$$8, j$$3, c$$4, n$$4) {
  var this_array$$4 = this.array;
  var w_array$$3 = w$$8.array;
  var xl$$2 = x$$51 & 8191;
  var xh$$2 = x$$51 >> 13;
  var v899 = n$$4 = n$$4 - 1;
  var v142 = v899 >= 0;
  for(;v142;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v134 = this_array$$4[i$$9]
    }
    var l$$2 = v134 & 8191;
    var v900 = i$$9;
    i$$9 = i$$9 + 1;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v135 = this_array$$4[v900]
    }
    var h$$6 = v135 >> 13;
    var v136 = xh$$2 * l$$2;
    var v137 = h$$6 * xl$$2;
    var m$$2 = v136 + v137;
    var v1341 = xl$$2 * l$$2;
    var v1562 = m$$2 & 8191;
    var v1342 = v1562 << 13;
    var v901 = v1341 + v1342;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v902 = w_array$$3[j$$3]
    }
    var v138 = v901 + v902;
    l$$2 = v138 + c$$4;
    var v903 = l$$2 >> 26;
    var v904 = m$$2 >> 13;
    var v139 = v903 + v904;
    var v140 = xh$$2 * h$$6;
    c$$4 = v139 + v140;
    var v141 = j$$3;
    j$$3 = j$$3 + 1;
    JAM.set(w_array$$3, v141, l$$2 & 67108863);
    var v905 = n$$4 = n$$4 - 1;
    v142 = v905 >= 0
  }
  return c$$4
}
function int2char(n$$5) {
  return BI_RM.charAt(n$$5)
}
function intAt(s$$3, i$$10) {
  var v143 = BI_RC;
  var v144 = s$$3.charCodeAt(i$$10);
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var c$$5 = v143[v144]
  }
  var v145;
  var v906 = c$$5 == null;
  if(v906) {
    v145 = -1
  }else {
    v145 = c$$5
  }
  return v145
}
function bnpCopyTo(r) {
  var this_array$$5 = this.array;
  var r_array = r.array;
  var v146 = this.t;
  var i$$11 = v146 - 1;
  var v147 = i$$11 >= 0;
  for(;v147;) {
    r_array[i$$11] = this_array$$5[i$$11];
    i$$11 = i$$11 - 1;
    v147 = i$$11 >= 0
  }
  r.t = this.t;
  r.s = this.s;
  return
}
function bnpFromInt(x$$52) {
  var this_array$$6 = this.array;
  this.t = 1;
  var v148;
  var v907 = x$$52 < 0;
  if(v907) {
    v148 = -1
  }else {
    v148 = 0
  }
  this.s = v148;
  var v150 = x$$52 > 0;
  if(v150) {
    this_array$$6[0] = x$$52
  }else {
    var v149 = x$$52 < -1;
    if(v149) {
      this_array$$6[0] = x$$52 + DV
    }else {
      this.t = 0
    }
  }
  return
}
function nbv(i$$12) {
  var r$$1 = nbi();
  JAM.call(r$$1.fromInt, r$$1, [i$$12]);
  return r$$1
}
function bnpFromString(s$$4, b$$1) {
  var this_array$$7 = this.array;
  var k;
  var v156 = b$$1 == 16;
  if(v156) {
    k = 4
  }else {
    var v155 = b$$1 == 8;
    if(v155) {
      k = 3
    }else {
      var v154 = b$$1 == 256;
      if(v154) {
        k = 8
      }else {
        var v153 = b$$1 == 2;
        if(v153) {
          k = 1
        }else {
          var v152 = b$$1 == 32;
          if(v152) {
            k = 5
          }else {
            var v151 = b$$1 == 4;
            if(v151) {
              k = 2
            }else {
              JAM.call(this.fromRadix, this, [s$$4, b$$1]);
              return
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
  var v908 = i$$13 = i$$13 - 1;
  var v167 = v908 >= 0;
  for(;v167;) {
    var v157;
    var v910 = k == 8;
    if(v910) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v909 = s$$4[i$$13]
      }
      v157 = v909 & 255
    }else {
      v157 = intAt(s$$4, i$$13)
    }
    var x$$53 = v157;
    var v159 = x$$53 < 0;
    if(v159) {
      var v911 = s$$4.charAt(i$$13);
      var v158 = v911 == "-";
      if(v158) {
        mi = true
      }
      var v912 = i$$13 = i$$13 - 1;
      v167 = v912 >= 0;
      continue
    }
    mi = false;
    var v165 = sh$$2 == 0;
    if(v165) {
      var v160 = this.t;
      var v1343 = this.t;
      this.t = v1343 + 1;
      this_array$$7[v160] = x$$53
    }else {
      var v913 = sh$$2 + k;
      var v164 = v913 > BI_DB;
      if(v164) {
        var v914 = this.t;
        var v161 = v914 - 1;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v1344 = this_array$$7[v161]
        }
        var v1692 = BI_DB - sh$$2;
        var v1678 = 1 << v1692;
        var v1645 = v1678 - 1;
        var v1563 = x$$53 & v1645;
        var v1345 = v1563 << sh$$2;
        this_array$$7[v161] = v1344 | v1345;
        var v162 = this.t;
        var v1346 = this.t;
        this.t = v1346 + 1;
        var v915 = BI_DB - sh$$2;
        this_array$$7[v162] = x$$53 >> v915
      }else {
        var v916 = this.t;
        var v163 = v916 - 1;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v1347 = this_array$$7[v163]
        }
        var v1348 = x$$53 << sh$$2;
        this_array$$7[v163] = v1347 | v1348
      }
    }
    sh$$2 = sh$$2 + k;
    var v166 = sh$$2 >= BI_DB;
    if(v166) {
      sh$$2 = sh$$2 - BI_DB
    }
    var v917 = i$$13 = i$$13 - 1;
    v167 = v917 >= 0
  }
  var v918 = k == 8;
  if(v918) {
    var v1564 = s$$4[0];
    var v1349 = v1564 & 128;
    v918 = v1349 != 0
  }
  var v170 = v918;
  if(v170) {
    this.s = -1;
    var v169 = sh$$2 > 0;
    if(v169) {
      var v919 = this.t;
      var v168 = v919 - 1;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1350 = this_array$$7[v168]
      }
      var v1679 = BI_DB - sh$$2;
      var v1646 = 1 << v1679;
      var v1565 = v1646 - 1;
      var v1351 = v1565 << sh$$2;
      this_array$$7[v168] = v1350 | v1351
    }
  }
  this.clamp();
  if(mi) {
    var v171 = BigInteger.ZERO;
    JAM.call(v171.subTo, v171, [this, this])
  }
  return
}
function bnpClamp() {
  var this_array$$8 = this.array;
  var v172 = this.s;
  var c$$6 = v172 & BI_DM;
  var v1352 = this.t;
  var v920 = v1352 > 0;
  if(v920) {
    var v1647 = this.t;
    var v1566 = v1647 - 1;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1353 = this_array$$8[v1566]
    }
    v920 = v1353 == c$$6
  }
  var v173 = v920;
  for(;v173;) {
    var v921 = this.t;
    this.t = v921 - 1;
    var v1354 = this.t;
    var v922 = v1354 > 0;
    if(v922) {
      var v1648 = this.t;
      var v1567 = v1648 - 1;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1355 = this_array$$8[v1567]
      }
      v922 = v1355 == c$$6
    }
    v173 = v922
  }
  return
}
function bnToString(b$$2) {
  var this_array$$9 = this.array;
  var v923 = this.s;
  var v175 = v923 < 0;
  if(v175) {
    var v924 = this.negate();
    var v174 = JAM.call(v924.toString, v924, [b$$2]);
    return"-" + v174
  }
  var k$$1;
  var v180 = b$$2 == 16;
  if(v180) {
    k$$1 = 4
  }else {
    var v179 = b$$2 == 8;
    if(v179) {
      k$$1 = 3
    }else {
      var v178 = b$$2 == 2;
      if(v178) {
        k$$1 = 1
      }else {
        var v177 = b$$2 == 32;
        if(v177) {
          k$$1 = 5
        }else {
          var v176 = b$$2 == 4;
          if(v176) {
            k$$1 = 2
          }else {
            return JAM.call(this.toRadix, this, [b$$2])
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
  var v925 = i$$14 * BI_DB;
  var v182 = v925 % k$$1;
  var p = BI_DB - v182;
  var v926 = i$$14;
  i$$14 = i$$14 - 1;
  var v191 = v926 > 0;
  if(v191) {
    var v927 = p < BI_DB;
    if(v927) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1568 = this_array$$9[i$$14]
      }
      var v1356 = d = v1568 >> p;
      v927 = v1356 > 0
    }
    var v183 = v927;
    if(v183) {
      m$$3 = true;
      r$$2 = int2char(d)
    }
    var v190 = i$$14 >= 0;
    for(;v190;) {
      var v188 = p < k$$1;
      if(v188) {
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v928 = this_array$$9[i$$14]
        }
        var v1357 = 1 << p;
        var v929 = v1357 - 1;
        var v184 = v928 & v929;
        var v185 = k$$1 - p;
        d = v184 << v185;
        var v1569 = i$$14 = i$$14 - 1;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v1358 = this_array$$9[v1569]
        }
        var v1649 = BI_DB - k$$1;
        var v1359 = p = p + v1649;
        var v930 = v1358 >> v1359;
        d = d | v930
      }else {
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v931 = this_array$$9[i$$14]
        }
        var v932 = p = p - k$$1;
        var v186 = v931 >> v932;
        d = v186 & km;
        var v187 = p <= 0;
        if(v187) {
          p = p + BI_DB;
          i$$14 = i$$14 - 1
        }
      }
      var v189 = d > 0;
      if(v189) {
        m$$3 = true
      }
      if(m$$3) {
        var v933 = r$$2;
        var v934 = int2char(d);
        r$$2 = v933 + v934
      }
      v190 = i$$14 >= 0
    }
  }
  var v192;
  if(m$$3) {
    v192 = r$$2
  }else {
    v192 = "0"
  }
  return v192
}
function bnNegate() {
  var r$$3 = nbi();
  var v193 = BigInteger.ZERO;
  JAM.call(v193.subTo, v193, [this, r$$3]);
  return r$$3
}
function bnAbs() {
  var v194;
  var v1360 = this.s;
  var v935 = v1360 < 0;
  if(v935) {
    v194 = this.negate()
  }else {
    v194 = this
  }
  return v194
}
function bnCompareTo(a$$1) {
  var this_array$$10 = this.array;
  var a_array = a$$1.array;
  var v195 = this.s;
  var v196 = a$$1.s;
  var r$$4 = v195 - v196;
  var v197 = r$$4 != 0;
  if(v197) {
    return r$$4
  }
  var i$$15 = this.t;
  var v198 = a$$1.t;
  r$$4 = i$$15 - v198;
  var v199 = r$$4 != 0;
  if(v199) {
    return r$$4
  }
  var v936 = i$$15 = i$$15 - 1;
  var v201 = v936 >= 0;
  for(;v201;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1361 = this_array$$10[i$$15]
    }
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1362 = a_array[i$$15]
    }
    var v937 = r$$4 = v1361 - v1362;
    var v200 = v937 != 0;
    if(v200) {
      return r$$4
    }
    var v938 = i$$15 = i$$15 - 1;
    v201 = v938 >= 0
  }
  return 0
}
function nbits(x$$54) {
  var r$$5 = 1;
  var t$$1;
  var v939 = t$$1 = x$$54 >>> 16;
  var v202 = v939 != 0;
  if(v202) {
    x$$54 = t$$1;
    r$$5 = r$$5 + 16
  }
  var v940 = t$$1 = x$$54 >> 8;
  var v203 = v940 != 0;
  if(v203) {
    x$$54 = t$$1;
    r$$5 = r$$5 + 8
  }
  var v941 = t$$1 = x$$54 >> 4;
  var v204 = v941 != 0;
  if(v204) {
    x$$54 = t$$1;
    r$$5 = r$$5 + 4
  }
  var v942 = t$$1 = x$$54 >> 2;
  var v205 = v942 != 0;
  if(v205) {
    x$$54 = t$$1;
    r$$5 = r$$5 + 2
  }
  var v943 = t$$1 = x$$54 >> 1;
  var v206 = v943 != 0;
  if(v206) {
    x$$54 = t$$1;
    r$$5 = r$$5 + 1
  }
  return r$$5
}
function bnBitLength() {
  var this_array$$11 = this.array;
  var v944 = this.t;
  var v207 = v944 <= 0;
  if(v207) {
    return 0
  }
  var v1363 = this.t;
  var v945 = v1363 - 1;
  var v208 = BI_DB * v945;
  var v1650 = this.t;
  var v1570 = v1650 - 1;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1364 = this_array$$11[v1570]
  }
  var v1571 = this.s;
  var v1365 = v1571 & BI_DM;
  var v946 = v1364 ^ v1365;
  var v209 = nbits(v946);
  return v208 + v209
}
function bnpDLShiftTo(n$$6, r$$6) {
  var this_array$$12 = this.array;
  var r_array$$1 = r$$6.array;
  var i$$16;
  var v210 = this.t;
  i$$16 = v210 - 1;
  var v212 = i$$16 >= 0;
  for(;v212;) {
    var v211 = i$$16 + n$$6;
    JAM.set(r_array$$1, v211, JAM.get(this_array$$12, i$$16, JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074));
    i$$16 = i$$16 - 1;
    v212 = i$$16 >= 0
  }
  i$$16 = n$$6 - 1;
  var v213 = i$$16 >= 0;
  for(;v213;) {
    JAM.set(r_array$$1, i$$16, 0);
    i$$16 = i$$16 - 1;
    v213 = i$$16 >= 0
  }
  var v214 = this.t;
  r$$6.t = v214 + n$$6;
  r$$6.s = this.s;
  return
}
function bnpDRShiftTo(n$$7, r$$7) {
  var this_array$$13 = this.array;
  var r_array$$2 = r$$7.array;
  var i$$17 = n$$7;
  var v947 = this.t;
  var v216 = i$$17 < v947;
  for(;v216;) {
    var v215 = i$$17 - n$$7;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      r_array$$2[v215] = this_array$$13[i$$17]
    }
    i$$17 = i$$17 + 1;
    var v948 = this.t;
    v216 = i$$17 < v948
  }
  var v217 = r$$7;
  var v1366 = this.t;
  var v949 = v1366 - n$$7;
  var v1700 = JAM.call(Math.max, Math, [v949, 0]);
  v217.t = v1700;
  r$$7.s = this.s;
  return
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
  var v950 = this.s;
  var v220 = v950 << bs;
  var c$$7 = v220 & BI_DM;
  var i$$18;
  var v221 = this.t;
  i$$18 = v221 - 1;
  var v224 = i$$18 >= 0;
  for(;v224;) {
    var v951 = i$$18 + ds;
    var v222 = v951 + 1;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1367 = this_array$$14[i$$18]
    }
    var v952 = v1367 >> cbs;
    r_array$$3[v222] = v952 | c$$7;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v953 = this_array$$14[i$$18]
    }
    var v223 = v953 & bm;
    c$$7 = v223 << bs;
    i$$18 = i$$18 - 1;
    v224 = i$$18 >= 0
  }
  i$$18 = ds - 1;
  var v225 = i$$18 >= 0;
  for(;v225;) {
    JAM.set(r_array$$3, i$$18, 0);
    i$$18 = i$$18 - 1;
    v225 = i$$18 >= 0
  }
  r_array$$3[ds] = c$$7;
  var v954 = this.t;
  var v226 = v954 + ds;
  r$$8.t = v226 + 1;
  r$$8.s = this.s;
  r$$8.clamp();
  return
}
function bnpRShiftTo(n$$9, r$$9) {
  var this_array$$15 = this.array;
  var r_array$$4 = r$$9.array;
  r$$9.s = this.s;
  var v227 = n$$9 / BI_DB;
  var ds$$1 = Math.floor(v227);
  var v955 = this.t;
  var v228 = ds$$1 >= v955;
  if(v228) {
    r$$9.t = 0;
    return
  }
  var bs$$1 = n$$9 % BI_DB;
  var cbs$$1 = BI_DB - bs$$1;
  var v229 = 1 << bs$$1;
  var bm$$1 = v229 - 1;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v230 = this_array$$15[ds$$1]
  }
  r_array$$4[0] = v230 >> bs$$1;
  var i$$19 = ds$$1 + 1;
  var v956 = this.t;
  var v233 = i$$19 < v956;
  for(;v233;) {
    var v957 = i$$19 - ds$$1;
    var v231 = v957 - 1;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1368 = r_array$$4[v231]
    }
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1651 = this_array$$15[i$$19]
    }
    var v1572 = v1651 & bm$$1;
    var v1369 = v1572 << cbs$$1;
    r_array$$4[v231] = v1368 | v1369;
    var v232 = i$$19 - ds$$1;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v958 = this_array$$15[i$$19]
    }
    r_array$$4[v232] = v958 >> bs$$1;
    i$$19 = i$$19 + 1;
    var v959 = this.t;
    v233 = i$$19 < v959
  }
  var v235 = bs$$1 > 0;
  if(v235) {
    var v1370 = this.t;
    var v960 = v1370 - ds$$1;
    var v234 = v960 - 1;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1371 = r_array$$4[v234]
    }
    var v1652 = this.s;
    var v1573 = v1652 & bm$$1;
    var v1372 = v1573 << cbs$$1;
    r_array$$4[v234] = v1371 | v1372
  }
  var v236 = this.t;
  r$$9.t = v236 - ds$$1;
  r$$9.clamp();
  return
}
function bnpSubTo(a$$2, r$$10) {
  var this_array$$16 = this.array;
  var r_array$$5 = r$$10.array;
  var a_array$$1 = a$$2.array;
  var i$$20 = 0;
  var c$$8 = 0;
  var v237 = a$$2.t;
  var v238 = this.t;
  var m$$4 = JAM.call(Math.min, Math, [v237, v238]);
  var v240 = i$$20 < m$$4;
  for(;v240;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1373 = this_array$$16[i$$20]
    }
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1374 = a_array$$1[i$$20]
    }
    var v961 = v1373 - v1374;
    c$$8 = c$$8 + v961;
    var v239 = i$$20;
    i$$20 = i$$20 + 1;
    r_array$$5[v239] = c$$8 & BI_DM;
    c$$8 = c$$8 >> BI_DB;
    v240 = i$$20 < m$$4
  }
  var v962 = a$$2.t;
  var v963 = this.t;
  var v245 = v962 < v963;
  if(v245) {
    var v964 = a$$2.s;
    c$$8 = c$$8 - v964;
    var v965 = this.t;
    var v242 = i$$20 < v965;
    for(;v242;) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v966 = this_array$$16[i$$20]
      }
      c$$8 = c$$8 + v966;
      var v241 = i$$20;
      i$$20 = i$$20 + 1;
      r_array$$5[v241] = c$$8 & BI_DM;
      c$$8 = c$$8 >> BI_DB;
      var v967 = this.t;
      v242 = i$$20 < v967
    }
    var v968 = this.s;
    c$$8 = c$$8 + v968
  }else {
    var v969 = this.s;
    c$$8 = c$$8 + v969;
    var v970 = a$$2.t;
    var v244 = i$$20 < v970;
    for(;v244;) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v971 = a_array$$1[i$$20]
      }
      c$$8 = c$$8 - v971;
      var v243 = i$$20;
      i$$20 = i$$20 + 1;
      r_array$$5[v243] = c$$8 & BI_DM;
      c$$8 = c$$8 >> BI_DB;
      var v972 = a$$2.t;
      v244 = i$$20 < v972
    }
    var v973 = a$$2.s;
    c$$8 = c$$8 - v973
  }
  var v246;
  var v974 = c$$8 < 0;
  if(v974) {
    v246 = -1
  }else {
    v246 = 0
  }
  r$$10.s = v246;
  var v250 = c$$8 < -1;
  if(v250) {
    var v247 = i$$20;
    i$$20 = i$$20 + 1;
    r_array$$5[v247] = BI_DV + c$$8
  }else {
    var v249 = c$$8 > 0;
    if(v249) {
      var v248 = i$$20;
      i$$20 = i$$20 + 1;
      r_array$$5[v248] = c$$8
    }
  }
  r$$10.t = i$$20;
  r$$10.clamp();
  return
}
function bnpMultiplyTo(a$$3, r$$11) {
  var this_array$$17 = this.array;
  var r_array$$6 = r$$11.array;
  var x$$55 = this.abs();
  var y$$31 = a$$3.abs();
  var y_array = y$$31.array;
  var i$$21 = x$$55.t;
  var v251 = y$$31.t;
  r$$11.t = i$$21 + v251;
  var v975 = i$$21 = i$$21 - 1;
  var v252 = v975 >= 0;
  for(;v252;) {
    JAM.set(r_array$$6, i$$21, 0);
    var v976 = i$$21 = i$$21 - 1;
    v252 = v976 >= 0
  }
  i$$21 = 0;
  var v977 = y$$31.t;
  var v255 = i$$21 < v977;
  for(;v255;) {
    var v253 = r_array$$6;
    var v978 = x$$55.t;
    var v254 = i$$21 + v978;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v979 = y_array[i$$21]
    }
    var v980 = x$$55.t;
    var v1701 = JAM.call(x$$55.am, x$$55, [0, v979, r$$11, i$$21, 0, v980]);
    JAM.set(v253, v254, v1701);
    i$$21 = i$$21 + 1;
    var v981 = y$$31.t;
    v255 = i$$21 < v981
  }
  r$$11.s = 0;
  r$$11.clamp();
  var v982 = this.s;
  var v983 = a$$3.s;
  var v257 = v982 != v983;
  if(v257) {
    var v256 = BigInteger.ZERO;
    JAM.call(v256.subTo, v256, [r$$11, r$$11])
  }
  return
}
function bnpSquareTo(r$$12) {
  var x$$56 = this.abs();
  var x_array = x$$56.array;
  var r_array$$7 = r$$12.array;
  var v258 = x$$56.t;
  var i$$22 = r$$12.t = 2 * v258;
  var v984 = i$$22 = i$$22 - 1;
  var v259 = v984 >= 0;
  for(;v259;) {
    r_array$$7[i$$22] = 0;
    var v985 = i$$22 = i$$22 - 1;
    v259 = v985 >= 0
  }
  i$$22 = 0;
  var v1375 = x$$56.t;
  var v986 = v1375 - 1;
  var v265 = i$$22 < v986;
  for(;v265;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v260 = x_array[i$$22]
    }
    var v261 = 2 * i$$22;
    var c$$9 = JAM.call(x$$56.am, x$$56, [i$$22, v260, r$$12, v261, 0, 1]);
    var v1376 = r_array$$7;
    var v1574 = x$$56.t;
    var v1377 = i$$22 + v1574;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1653 = v1376[v1377]
    }
    var v1680 = i$$22 + 1;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1693 = x_array[i$$22]
    }
    var v1681 = 2 * v1693;
    var v1694 = 2 * i$$22;
    var v1682 = v1694 + 1;
    var v1697 = x$$56.t;
    var v1695 = v1697 - i$$22;
    var v1683 = v1695 - 1;
    var v1654 = JAM.call(x$$56.am, x$$56, [v1680, v1681, r$$12, v1682, c$$9, v1683]);
    var v987 = JAM.set(v1376, v1377, v1653 + v1654);
    var v264 = v987 >= BI_DV;
    if(v264) {
      var v988 = x$$56.t;
      var v262 = i$$22 + v988;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1378 = r_array$$7[v262]
      }
      JAM.set(r_array$$7, v262, v1378 - BI_DV);
      var v1379 = x$$56.t;
      var v989 = i$$22 + v1379;
      var v263 = v989 + 1;
      JAM.set(r_array$$7, v263, 1)
    }
    i$$22 = i$$22 + 1;
    var v1380 = x$$56.t;
    var v990 = v1380 - 1;
    v265 = i$$22 < v990
  }
  var v991 = r$$12.t;
  var v268 = v991 > 0;
  if(v268) {
    var v266 = r_array$$7;
    var v992 = r$$12.t;
    var v267 = v992 - 1;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1381 = v266[v267]
    }
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1575 = x_array[i$$22]
    }
    var v1576 = 2 * i$$22;
    var v1382 = JAM.call(x$$56.am, x$$56, [i$$22, v1575, r$$12, v1576, 0, 1]);
    v266[v267] = v1381 + v1382
  }
  r$$12.s = 0;
  r$$12.clamp();
  return
}
function bnpDivRemTo(m$$5, q, r$$13) {
  var pm = m$$5.abs();
  var v993 = pm.t;
  var v269 = v993 <= 0;
  if(v269) {
    return
  }
  var pt = this.abs();
  var v994 = pt.t;
  var v995 = pm.t;
  var v272 = v994 < v995;
  if(v272) {
    var v270 = q != null;
    if(v270) {
      JAM.call(q.fromInt, q, [0])
    }
    var v271 = r$$13 != null;
    if(v271) {
      JAM.call(this.copyTo, this, [r$$13])
    }
    return
  }
  var v273 = r$$13 == null;
  if(v273) {
    r$$13 = nbi()
  }
  var y$$32 = nbi();
  var ts = this.s;
  var ms = m$$5.s;
  var pm_array = pm.array;
  var v274 = BI_DB;
  var v1577 = pm.t;
  var v1383 = v1577 - 1;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v996 = pm_array[v1383]
  }
  var v275 = nbits(v996);
  var nsh = v274 - v275;
  var v276 = nsh > 0;
  if(v276) {
    JAM.call(pm.lShiftTo, pm, [nsh, y$$32]);
    JAM.call(pt.lShiftTo, pt, [nsh, r$$13])
  }else {
    JAM.call(pm.copyTo, pm, [y$$32]);
    JAM.call(pt.copyTo, pt, [r$$13])
  }
  var ys = y$$32.t;
  var y_array$$1 = y$$32.array;
  var v277 = ys - 1;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var y0$$2 = y_array$$1[v277]
  }
  var v278 = y0$$2 == 0;
  if(v278) {
    return
  }
  var v997 = 1 << BI_F1;
  var v279 = y0$$2 * v997;
  var v998;
  var v1385 = ys > 1;
  if(v1385) {
    var v1578 = ys - 2;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1384 = y_array$$1[v1578]
    }
    v998 = v1384 >> BI_F2
  }else {
    v998 = 0
  }
  var v280 = v998;
  var yt = v279 + v280;
  var d1 = BI_FV / yt;
  var v281 = 1 << BI_F1;
  var d2 = v281 / yt;
  var e$$7 = 1 << BI_F2;
  var i$$23 = r$$13.t;
  var j$$4 = i$$23 - ys;
  var v282;
  var v999 = q == null;
  if(v999) {
    v282 = nbi()
  }else {
    v282 = q
  }
  var t$$2 = v282;
  JAM.call(y$$32.dlShiftTo, y$$32, [j$$4, t$$2]);
  var r_array$$8 = r$$13.array;
  var v1000 = JAM.call(r$$13.compareTo, r$$13, [t$$2]);
  var v284 = v1000 >= 0;
  if(v284) {
    var v283 = r$$13.t;
    var v1386 = r$$13.t;
    r$$13.t = v1386 + 1;
    JAM.set(r_array$$8, v283, 1);
    JAM.call(r$$13.subTo, r$$13, [t$$2, r$$13])
  }
  var v285 = BigInteger.ONE;
  JAM.call(v285.dlShiftTo, v285, [ys, t$$2]);
  JAM.call(t$$2.subTo, t$$2, [y$$32, y$$32]);
  var v1001 = y$$32.t;
  var v287 = v1001 < ys;
  for(;v287;) {
    var v286 = y$$32.t;
    var v1387 = y$$32.t;
    y$$32.t = v1387 + 1;
    JAM.set(y_array$$1, v286, 0);
    var v1002 = y$$32.t;
    v287 = v1002 < ys
  }
  var v1003 = j$$4 = j$$4 - 1;
  var v291 = v1003 >= 0;
  for(;v291;) {
    var v288;
    var v1579 = i$$23 = i$$23 - 1;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1388 = r_array$$8[v1579]
    }
    var v1005 = v1388 == y0$$2;
    if(v1005) {
      v288 = BI_DM
    }else {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1580 = r_array$$8[i$$23]
      }
      var v1389 = v1580 * d1;
      var v1684 = i$$23 - 1;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1655 = r_array$$8[v1684]
      }
      var v1581 = v1655 + e$$7;
      var v1390 = v1581 * d2;
      var v1004 = v1389 + v1390;
      v288 = Math.floor(v1004)
    }
    var qd = v288;
    var v1391 = r_array$$8;
    var v1392 = i$$23;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1656 = v1391[v1392]
    }
    var v1657 = JAM.call(y$$32.am, y$$32, [0, qd, r$$13, j$$4, 0, ys]);
    var v1006 = v1391[v1392] = v1656 + v1657;
    var v290 = v1006 < qd;
    if(v290) {
      JAM.call(y$$32.dlShiftTo, y$$32, [j$$4, t$$2]);
      JAM.call(r$$13.subTo, r$$13, [t$$2, r$$13]);
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1007 = r_array$$8[i$$23]
      }
      var v1008 = qd = qd - 1;
      var v289 = v1007 < v1008;
      for(;v289;) {
        JAM.call(r$$13.subTo, r$$13, [t$$2, r$$13]);
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v1009 = r_array$$8[i$$23]
        }
        var v1010 = qd = qd - 1;
        v289 = v1009 < v1010
      }
    }
    var v1011 = j$$4 = j$$4 - 1;
    v291 = v1011 >= 0
  }
  var v294 = q != null;
  if(v294) {
    JAM.call(r$$13.drShiftTo, r$$13, [ys, q]);
    var v293 = ts != ms;
    if(v293) {
      var v292 = BigInteger.ZERO;
      JAM.call(v292.subTo, v292, [q, q])
    }
  }
  r$$13.t = ys;
  r$$13.clamp();
  var v295 = nsh > 0;
  if(v295) {
    JAM.call(r$$13.rShiftTo, r$$13, [nsh, r$$13])
  }
  var v297 = ts < 0;
  if(v297) {
    var v296 = BigInteger.ZERO;
    JAM.call(v296.subTo, v296, [r$$13, r$$13])
  }
  return
}
function bnMod(a$$4) {
  var r$$14 = nbi();
  var v298 = this.abs();
  JAM.call(v298.divRemTo, v298, [a$$4, null, r$$14]);
  var v1393 = this.s;
  var v1012 = v1393 < 0;
  if(v1012) {
    var v1582 = BigInteger.ZERO;
    var v1394 = JAM.call(r$$14.compareTo, r$$14, [v1582]);
    v1012 = v1394 > 0
  }
  var v299 = v1012;
  if(v299) {
    JAM.call(a$$4.subTo, a$$4, [r$$14, r$$14])
  }
  return r$$14
}
function Classic(m$$6) {
  this.m = m$$6;
  return
}
function cConvert(x$$57) {
  var v1395 = x$$57.s;
  var v1013 = v1395 < 0;
  var v1397 = !v1013;
  if(v1397) {
    var v1583 = this.m;
    var v1396 = JAM.call(x$$57.compareTo, x$$57, [v1583]);
    v1013 = v1396 >= 0
  }
  var v301 = v1013;
  if(v301) {
    var v300 = this.m;
    return JAM.call(x$$57.mod, x$$57, [v300])
  }else {
    return x$$57
  }
  return
}
function cRevert(x$$58) {
  return x$$58
}
function cReduce(x$$59) {
  var v302 = this.m;
  JAM.call(x$$59.divRemTo, x$$59, [v302, null, x$$59]);
  return
}
function cMulTo(x$$60, y$$33, r$$15) {
  JAM.call(x$$60.multiplyTo, x$$60, [y$$33, r$$15]);
  JAM.call(this.reduce, this, [r$$15]);
  return
}
function cSqrTo(x$$61, r$$16) {
  JAM.call(x$$61.squareTo, x$$61, [r$$16]);
  JAM.call(this.reduce, this, [r$$16]);
  return
}
function bnpInvDigit() {
  var this_array$$18 = this.array;
  var v1014 = this.t;
  var v303 = v1014 < 1;
  if(v303) {
    return 0
  }
  var x$$62 = this_array$$18[0];
  var v1015 = x$$62 & 1;
  var v304 = v1015 == 0;
  if(v304) {
    return 0
  }
  var y$$34 = x$$62 & 3;
  var v1584 = x$$62 & 15;
  var v1398 = v1584 * y$$34;
  var v1016 = 2 - v1398;
  var v305 = y$$34 * v1016;
  y$$34 = v305 & 15;
  var v1585 = x$$62 & 255;
  var v1399 = v1585 * y$$34;
  var v1017 = 2 - v1399;
  var v306 = y$$34 * v1017;
  y$$34 = v306 & 255;
  var v1658 = x$$62 & 65535;
  var v1586 = v1658 * y$$34;
  var v1400 = v1586 & 65535;
  var v1018 = 2 - v1400;
  var v307 = y$$34 * v1018;
  y$$34 = v307 & 65535;
  var v1587 = x$$62 * y$$34;
  var v1401 = v1587 % BI_DV;
  var v1019 = 2 - v1401;
  var v308 = y$$34 * v1019;
  y$$34 = v308 % BI_DV;
  var v309;
  var v1020 = y$$34 > 0;
  if(v1020) {
    v309 = BI_DV - y$$34
  }else {
    v309 = -y$$34
  }
  return v309
}
function Montgomery(m$$7) {
  this.m = m$$7;
  var v1702 = m$$7.invDigit();
  this.mp = v1702;
  var v310 = this.mp;
  this.mpl = v310 & 32767;
  var v311 = this.mp;
  this.mph = v311 >> 15;
  var v1021 = BI_DB - 15;
  var v312 = 1 << v1021;
  this.um = v312 - 1;
  var v313 = m$$7.t;
  this.mt2 = 2 * v313;
  return
}
function montConvert(x$$63) {
  var r$$17 = nbi();
  var v314 = x$$63.abs();
  var v1022 = this.m;
  var v315 = v1022.t;
  JAM.call(v314.dlShiftTo, v314, [v315, r$$17]);
  var v316 = this.m;
  JAM.call(r$$17.divRemTo, r$$17, [v316, null, r$$17]);
  var v1402 = x$$63.s;
  var v1023 = v1402 < 0;
  if(v1023) {
    var v1588 = BigInteger.ZERO;
    var v1403 = JAM.call(r$$17.compareTo, r$$17, [v1588]);
    v1023 = v1403 > 0
  }
  var v318 = v1023;
  if(v318) {
    var v317 = this.m;
    JAM.call(v317.subTo, v317, [r$$17, r$$17])
  }
  return r$$17
}
function montRevert(x$$64) {
  var r$$18 = nbi();
  JAM.call(x$$64.copyTo, x$$64, [r$$18]);
  JAM.call(this.reduce, this, [r$$18]);
  return r$$18
}
function montReduce(x$$65) {
  var x_array$$1 = x$$65.array;
  var v1024 = x$$65.t;
  var v1025 = this.mt2;
  var v320 = v1024 <= v1025;
  for(;v320;) {
    var v319 = x$$65.t;
    var v1404 = x$$65.t;
    x$$65.t = v1404 + 1;
    JAM.set(x_array$$1, v319, 0);
    var v1026 = x$$65.t;
    var v1027 = this.mt2;
    v320 = v1026 <= v1027
  }
  var i$$24 = 0;
  var v1405 = this.m;
  var v1028 = v1405.t;
  var v327 = i$$24 < v1028;
  for(;v327;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v321 = x_array$$1[i$$24]
    }
    var j$$5 = v321 & 32767;
    var v1406 = this.mpl;
    var v1029 = j$$5 * v1406;
    var v1685 = this.mph;
    var v1659 = j$$5 * v1685;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1696 = x_array$$1[i$$24]
    }
    var v1686 = v1696 >> 15;
    var v1687 = this.mpl;
    var v1660 = v1686 * v1687;
    var v1589 = v1659 + v1660;
    var v1590 = this.um;
    var v1407 = v1589 & v1590;
    var v1030 = v1407 << 15;
    var v322 = v1029 + v1030;
    var u0 = v322 & BI_DM;
    var v1031 = this.m;
    var v323 = v1031.t;
    j$$5 = i$$24 + v323;
    var v324 = x_array$$1;
    var v325 = j$$5;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1408 = v324[v325]
    }
    var v1591 = this.m;
    var v1661 = this.m;
    var v1592 = v1661.t;
    var v1409 = JAM.call(v1591.am, v1591, [0, u0, x$$65, i$$24, 0, v1592]);
    JAM.set(v324, v325, v1408 + v1409);
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1032 = x_array$$1[j$$5]
    }
    var v326 = v1032 >= BI_DV;
    for(;v326;) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1033 = x_array$$1[j$$5]
      }
      JAM.set(x_array$$1, j$$5, v1033 - BI_DV);
      var v1034 = j$$5 = j$$5 + 1;
      var v1593 = j$$5 = j$$5 + 1;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1410 = x_array$$1[v1593]
      }
      JAM.set(x_array$$1, v1034, v1410 + 1);
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1035 = x_array$$1[j$$5]
      }
      v326 = v1035 >= BI_DV
    }
    i$$24 = i$$24 + 1;
    var v1411 = this.m;
    var v1036 = v1411.t;
    v327 = i$$24 < v1036
  }
  x$$65.clamp();
  var v1037 = this.m;
  var v328 = v1037.t;
  JAM.call(x$$65.drShiftTo, x$$65, [v328, x$$65]);
  var v1412 = this.m;
  var v1038 = JAM.call(x$$65.compareTo, x$$65, [v1412]);
  var v330 = v1038 >= 0;
  if(v330) {
    var v329 = this.m;
    JAM.call(x$$65.subTo, x$$65, [v329, x$$65])
  }
  return
}
function montSqrTo(x$$66, r$$19) {
  JAM.call(x$$66.squareTo, x$$66, [r$$19]);
  JAM.call(this.reduce, this, [r$$19]);
  return
}
function montMulTo(x$$67, y$$35, r$$20) {
  JAM.call(x$$67.multiplyTo, x$$67, [y$$35, r$$20]);
  JAM.call(this.reduce, this, [r$$20]);
  return
}
function bnpIsEven() {
  var this_array$$19 = this.array;
  var v1039;
  var v1594 = this.t;
  var v1414 = v1594 > 0;
  if(v1414) {
    var v1413 = this_array$$19[0];
    v1039 = v1413 & 1
  }else {
    v1039 = this.s
  }
  var v331 = v1039;
  return v331 == 0
}
function bnpExp(e$$8, z$$2) {
  var v1040 = e$$8 > 4294967295;
  var v1415 = !v1040;
  if(v1415) {
    v1040 = e$$8 < 1
  }
  var v332 = v1040;
  if(v332) {
    return BigInteger.ONE
  }
  var r$$21 = nbi();
  var r2 = nbi();
  var g = JAM.call(z$$2.convert, z$$2, [this]);
  var v333 = nbits(e$$8);
  var i$$25 = v333 - 1;
  JAM.call(g.copyTo, g, [r$$21]);
  var v1041 = i$$25 = i$$25 - 1;
  var v335 = v1041 >= 0;
  for(;v335;) {
    JAM.call(z$$2.sqrTo, z$$2, [r$$21, r2]);
    var v1416 = 1 << i$$25;
    var v1042 = e$$8 & v1416;
    var v334 = v1042 > 0;
    if(v334) {
      JAM.call(z$$2.mulTo, z$$2, [r2, g, r$$21])
    }else {
      var t$$3 = r$$21;
      r$$21 = r2;
      r2 = t$$3
    }
    var v1043 = i$$25 = i$$25 - 1;
    v335 = v1043 >= 0
  }
  return JAM.call(z$$2.revert, z$$2, [r$$21])
}
function bnModPowInt(e$$9, m$$8) {
  var z$$3;
  var v1044 = e$$9 < 256;
  var v1417 = !v1044;
  if(v1417) {
    v1044 = m$$8.isEven()
  }
  var v336 = v1044;
  if(v336) {
    z$$3 = new Classic(m$$8)
  }else {
    z$$3 = new Montgomery(m$$8)
  }
  return JAM.call(this.exp, this, [e$$9, z$$3])
}
function bnClone() {
  var r$$22 = nbi();
  JAM.call(this.copyTo, this, [r$$22]);
  return r$$22
}
function bnIntValue() {
  var this_array$$20 = this.array;
  var v1045 = this.s;
  var v342 = v1045 < 0;
  if(v342) {
    var v1046 = this.t;
    var v339 = v1046 == 1;
    if(v339) {
      var v337 = this_array$$20[0];
      return v337 - BI_DV
    }else {
      var v1047 = this.t;
      var v338 = v1047 == 0;
      if(v338) {
        return-1
      }
    }
  }else {
    var v1048 = this.t;
    var v341 = v1048 == 1;
    if(v341) {
      return this_array$$20[0]
    }else {
      var v1049 = this.t;
      var v340 = v1049 == 0;
      if(v340) {
        return 0
      }
    }
  }
  var v1418 = this_array$$20[1];
  var v1662 = 32 - BI_DB;
  var v1595 = 1 << v1662;
  var v1419 = v1595 - 1;
  var v1050 = v1418 & v1419;
  var v343 = v1050 << BI_DB;
  var v344 = this_array$$20[0];
  return v343 | v344
}
function bnByteValue() {
  var this_array$$21 = this.array;
  var v345;
  var v1420 = this.t;
  var v1052 = v1420 == 0;
  if(v1052) {
    v345 = this.s
  }else {
    var v1421 = this_array$$21[0];
    var v1051 = v1421 << 24;
    v345 = v1051 >> 24
  }
  return v345
}
function bnShortValue() {
  var this_array$$22 = this.array;
  var v346;
  var v1422 = this.t;
  var v1054 = v1422 == 0;
  if(v1054) {
    v346 = this.s
  }else {
    var v1423 = this_array$$22[0];
    var v1053 = v1423 << 16;
    v346 = v1053 >> 16
  }
  return v346
}
function bnpChunkSize(r$$23) {
  var v1424 = Math.LN2;
  var v1055 = v1424 * BI_DB;
  var v1056 = Math.log(r$$23);
  var v347 = v1055 / v1056;
  return Math.floor(v347)
}
function bnSigNum() {
  var this_array$$23 = this.array;
  var v1057 = this.s;
  var v349 = v1057 < 0;
  if(v349) {
    return-1
  }else {
    var v1425 = this.t;
    var v1058 = v1425 <= 0;
    var v1427 = !v1058;
    if(v1427) {
      var v1596 = this.t;
      var v1426 = v1596 == 1;
      if(v1426) {
        var v1597 = this_array$$23[0];
        v1426 = v1597 <= 0
      }
      v1058 = v1426
    }
    var v348 = v1058;
    if(v348) {
      return 0
    }else {
      return 1
    }
  }
  return
}
function bnpToRadix(b$$3) {
  var v350 = b$$3 == null;
  if(v350) {
    b$$3 = 10
  }
  var v1428 = this.signum();
  var v1059 = v1428 == 0;
  var v1430 = !v1059;
  if(v1430) {
    var v1429 = b$$3 < 2;
    var v1598 = !v1429;
    if(v1598) {
      v1429 = b$$3 > 36
    }
    v1059 = v1429
  }
  var v351 = v1059;
  if(v351) {
    return"0"
  }
  var cs = JAM.call(this.chunkSize, this, [b$$3]);
  var a$$5 = JAM.call(Math.pow, Math, [b$$3, cs]);
  var d$$1 = nbv(a$$5);
  var y$$36 = nbi();
  var z$$4 = nbi();
  var r$$24 = "";
  JAM.call(this.divRemTo, this, [d$$1, y$$36, z$$4]);
  var v1060 = y$$36.signum();
  var v353 = v1060 > 0;
  for(;v353;) {
    var v1599 = a$$5;
    var v1600 = z$$4.intValue();
    var v1431 = v1599 + v1600;
    var v1061 = JAM.call(v1431.toString, v1431, [b$$3]);
    var v352 = v1061.substr(1);
    r$$24 = v352 + r$$24;
    JAM.call(y$$36.divRemTo, y$$36, [d$$1, y$$36, z$$4]);
    var v1062 = y$$36.signum();
    v353 = v1062 > 0
  }
  var v1063 = z$$4.intValue();
  var v354 = JAM.call(v1063.toString, v1063, [b$$3]);
  return v354 + r$$24
}
function bnpFromRadix(s$$5, b$$4) {
  JAM.call(this.fromInt, this, [0]);
  var v355 = b$$4 == null;
  if(v355) {
    b$$4 = 10
  }
  var cs$$1 = JAM.call(this.chunkSize, this, [b$$4]);
  var d$$2 = JAM.call(Math.pow, Math, [b$$4, cs$$1]);
  var mi$$1 = false;
  var j$$6 = 0;
  var w$$9 = 0;
  var i$$26 = 0;
  var v1064 = s$$5.length;
  var v360 = i$$26 < v1064;
  for(;v360;) {
    var x$$68 = intAt(s$$5, i$$26);
    var v357 = x$$68 < 0;
    if(v357) {
      var v1432 = s$$5.charAt(i$$26);
      var v1065 = v1432 == "-";
      if(v1065) {
        var v1433 = this.signum();
        v1065 = v1433 == 0
      }
      var v356 = v1065;
      if(v356) {
        mi$$1 = true
      }
      i$$26 = i$$26 + 1;
      var v1066 = s$$5.length;
      v360 = i$$26 < v1066;
      continue
    }
    var v358 = b$$4 * w$$9;
    w$$9 = v358 + x$$68;
    var v1067 = j$$6 = j$$6 + 1;
    var v359 = v1067 >= cs$$1;
    if(v359) {
      JAM.call(this.dMultiply, this, [d$$2]);
      JAM.call(this.dAddOffset, this, [w$$9, 0]);
      j$$6 = 0;
      w$$9 = 0
    }
    i$$26 = i$$26 + 1;
    var v1068 = s$$5.length;
    v360 = i$$26 < v1068
  }
  var v362 = j$$6 > 0;
  if(v362) {
    var v361 = JAM.call(Math.pow, Math, [b$$4, j$$6]);
    JAM.call(this.dMultiply, this, [v361]);
    JAM.call(this.dAddOffset, this, [w$$9, 0])
  }
  if(mi$$1) {
    var v363 = BigInteger.ZERO;
    JAM.call(v363.subTo, v363, [this, this])
  }
  return
}
function bnpFromNumber(a$$6, b$$5, c$$10) {
  var v1069 = typeof b$$5;
  var v373 = "number" == v1069;
  if(v373) {
    var v370 = a$$6 < 2;
    if(v370) {
      JAM.call(this.fromInt, this, [1])
    }else {
      JAM.call(this.fromNumber, this, [a$$6, c$$10]);
      var v1434 = a$$6 - 1;
      var v1070 = JAM.call(this.testBit, this, [v1434]);
      var v365 = !v1070;
      if(v365) {
        var v1071 = BigInteger.ONE;
        var v1072 = a$$6 - 1;
        var v364 = JAM.call(v1071.shiftLeft, v1071, [v1072]);
        JAM.call(this.bitwiseTo, this, [v364, op_or, this])
      }
      var v366 = this.isEven();
      if(v366) {
        JAM.call(this.dAddOffset, this, [1, 0])
      }
      var v1073 = JAM.call(this.isProbablePrime, this, [b$$5]);
      var v369 = !v1073;
      for(;v369;) {
        JAM.call(this.dAddOffset, this, [2, 0]);
        var v1074 = this.bitLength();
        var v368 = v1074 > a$$6;
        if(v368) {
          var v1075 = BigInteger.ONE;
          var v1076 = a$$6 - 1;
          var v367 = JAM.call(v1075.shiftLeft, v1075, [v1076]);
          JAM.call(this.subTo, this, [v367, this])
        }
        var v1077 = JAM.call(this.isProbablePrime, this, [b$$5]);
        v369 = !v1077
      }
    }
  }else {
    var x$$69 = new Array;
    var t$$4 = a$$6 & 7;
    var v371 = a$$6 >> 3;
    x$$69.length = v371 + 1;
    JAM.call(b$$5.nextBytes, b$$5, [x$$69]);
    var v372 = t$$4 > 0;
    if(v372) {
      var v1078 = x$$69[0];
      var v1435 = 1 << t$$4;
      var v1079 = v1435 - 1;
      x$$69[0] = v1078 & v1079
    }else {
      x$$69[0] = 0
    }
    JAM.call(this.fromString, this, [x$$69, 256])
  }
  return
}
function bnToByteArray() {
  var this_array$$24 = this.array;
  var i$$27 = this.t;
  var r$$25 = new Array;
  r$$25[0] = this.s;
  var v1080 = i$$27 * BI_DB;
  var v374 = v1080 % 8;
  var p$$1 = BI_DB - v374;
  var d$$3;
  var k$$2 = 0;
  var v1081 = i$$27;
  i$$27 = i$$27 - 1;
  var v387 = v1081 > 0;
  if(v387) {
    var v1082 = p$$1 < BI_DB;
    if(v1082) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1601 = this_array$$24[i$$27]
      }
      var v1436 = d$$3 = v1601 >> p$$1;
      var v1663 = this.s;
      var v1602 = v1663 & BI_DM;
      var v1437 = v1602 >> p$$1;
      v1082 = v1436 != v1437
    }
    var v376 = v1082;
    if(v376) {
      var v375 = k$$2;
      k$$2 = k$$2 + 1;
      var v1438 = this.s;
      var v1439 = BI_DB - p$$1;
      var v1083 = v1438 << v1439;
      r$$25[v375] = d$$3 | v1083
    }
    var v386 = i$$27 >= 0;
    for(;v386;) {
      var v381 = p$$1 < 8;
      if(v381) {
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v1084 = this_array$$24[i$$27]
        }
        var v1440 = 1 << p$$1;
        var v1085 = v1440 - 1;
        var v377 = v1084 & v1085;
        var v378 = 8 - p$$1;
        d$$3 = v377 << v378;
        var v1603 = i$$27 = i$$27 - 1;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v1441 = this_array$$24[v1603]
        }
        var v1664 = BI_DB - 8;
        var v1442 = p$$1 = p$$1 + v1664;
        var v1086 = v1441 >> v1442;
        d$$3 = d$$3 | v1086
      }else {
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v1087 = this_array$$24[i$$27]
        }
        var v1088 = p$$1 = p$$1 - 8;
        var v379 = v1087 >> v1088;
        d$$3 = v379 & 255;
        var v380 = p$$1 <= 0;
        if(v380) {
          p$$1 = p$$1 + BI_DB;
          i$$27 = i$$27 - 1
        }
      }
      var v1089 = d$$3 & 128;
      var v382 = v1089 != 0;
      if(v382) {
        d$$3 = d$$3 | -256
      }
      var v1090 = k$$2 == 0;
      if(v1090) {
        var v1604 = this.s;
        var v1443 = v1604 & 128;
        var v1444 = d$$3 & 128;
        v1090 = v1443 != v1444
      }
      var v383 = v1090;
      if(v383) {
        k$$2 = k$$2 + 1
      }
      var v1091 = k$$2 > 0;
      var v1446 = !v1091;
      if(v1446) {
        var v1445 = this.s;
        v1091 = d$$3 != v1445
      }
      var v385 = v1091;
      if(v385) {
        var v384 = k$$2;
        k$$2 = k$$2 + 1;
        r$$25[v384] = d$$3
      }
      v386 = i$$27 >= 0
    }
  }
  return r$$25
}
function bnEquals(a$$7) {
  var v388 = JAM.call(this.compareTo, this, [a$$7]);
  return v388 == 0
}
function bnMin(a$$8) {
  var v389;
  var v1447 = JAM.call(this.compareTo, this, [a$$8]);
  var v1092 = v1447 < 0;
  if(v1092) {
    v389 = this
  }else {
    v389 = a$$8
  }
  return v389
}
function bnMax(a$$9) {
  var v390;
  var v1448 = JAM.call(this.compareTo, this, [a$$9]);
  var v1093 = v1448 > 0;
  if(v1093) {
    v390 = this
  }else {
    v390 = a$$9
  }
  return v390
}
function bnpBitwiseTo(a$$10, op, r$$26) {
  var this_array$$25 = this.array;
  var a_array$$2 = a$$10.array;
  var r_array$$9 = r$$26.array;
  var i$$28;
  var f;
  var v391 = a$$10.t;
  var v392 = this.t;
  var m$$9 = JAM.call(Math.min, Math, [v391, v392]);
  i$$28 = 0;
  var v395 = i$$28 < m$$9;
  for(;v395;) {
    var v393 = r_array$$9;
    var v394 = i$$28;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1094 = this_array$$25[i$$28]
    }
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1095 = a_array$$2[i$$28]
    }
    var v1703 = JAM.call(op, null, [v1094, v1095]);
    v393[v394] = v1703;
    i$$28 = i$$28 + 1;
    v395 = i$$28 < m$$9
  }
  var v1096 = a$$10.t;
  var v1097 = this.t;
  var v404 = v1096 < v1097;
  if(v404) {
    var v396 = a$$10.s;
    f = v396 & BI_DM;
    i$$28 = m$$9;
    var v1098 = this.t;
    var v399 = i$$28 < v1098;
    for(;v399;) {
      var v397 = r_array$$9;
      var v398 = i$$28;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1099 = this_array$$25[i$$28]
      }
      var v1704 = JAM.call(op, null, [v1099, f]);
      v397[v398] = v1704;
      i$$28 = i$$28 + 1;
      var v1100 = this.t;
      v399 = i$$28 < v1100
    }
    r$$26.t = this.t
  }else {
    var v400 = this.s;
    f = v400 & BI_DM;
    i$$28 = m$$9;
    var v1101 = a$$10.t;
    var v403 = i$$28 < v1101;
    for(;v403;) {
      var v401 = r_array$$9;
      var v402 = i$$28;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1102 = a_array$$2[i$$28]
      }
      var v1705 = JAM.call(op, null, [f, v1102]);
      v401[v402] = v1705;
      i$$28 = i$$28 + 1;
      var v1103 = a$$10.t;
      v403 = i$$28 < v1103
    }
    r$$26.t = a$$10.t
  }
  var v405 = r$$26;
  var v1104 = this.s;
  var v1105 = a$$10.s;
  var v1706 = JAM.call(op, null, [v1104, v1105]);
  v405.s = v1706;
  r$$26.clamp();
  return
}
function op_and(x$$70, y$$37) {
  return x$$70 & y$$37
}
function bnAnd(a$$11) {
  var r$$27 = nbi();
  JAM.call(this.bitwiseTo, this, [a$$11, op_and, r$$27]);
  return r$$27
}
function op_or(x$$71, y$$38) {
  return x$$71 | y$$38
}
function bnOr(a$$12) {
  var r$$28 = nbi();
  JAM.call(this.bitwiseTo, this, [a$$12, op_or, r$$28]);
  return r$$28
}
function op_xor(x$$72, y$$39) {
  return x$$72 ^ y$$39
}
function bnXor(a$$13) {
  var r$$29 = nbi();
  JAM.call(this.bitwiseTo, this, [a$$13, op_xor, r$$29]);
  return r$$29
}
function op_andnot(x$$73, y$$40) {
  var v406 = ~y$$40;
  return x$$73 & v406
}
function bnAndNot(a$$14) {
  var r$$30 = nbi();
  JAM.call(this.bitwiseTo, this, [a$$14, op_andnot, r$$30]);
  return r$$30
}
function bnNot() {
  var this_array$$26 = this.array;
  var r$$31 = nbi();
  var r_array$$10 = r$$31.array;
  var i$$29 = 0;
  var v1106 = this.t;
  var v408 = i$$29 < v1106;
  for(;v408;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1107 = this_array$$26[i$$29]
    }
    var v407 = ~v1107;
    r_array$$10[i$$29] = BI_DM & v407;
    i$$29 = i$$29 + 1;
    var v1108 = this.t;
    v408 = i$$29 < v1108
  }
  r$$31.t = this.t;
  var v409 = this.s;
  r$$31.s = ~v409;
  return r$$31
}
function bnShiftLeft(n$$10) {
  var r$$32 = nbi();
  var v411 = n$$10 < 0;
  if(v411) {
    var v410 = -n$$10;
    JAM.call(this.rShiftTo, this, [v410, r$$32])
  }else {
    JAM.call(this.lShiftTo, this, [n$$10, r$$32])
  }
  return r$$32
}
function bnShiftRight(n$$11) {
  var r$$33 = nbi();
  var v413 = n$$11 < 0;
  if(v413) {
    var v412 = -n$$11;
    JAM.call(this.lShiftTo, this, [v412, r$$33])
  }else {
    JAM.call(this.rShiftTo, this, [n$$11, r$$33])
  }
  return r$$33
}
function lbit(x$$74) {
  var v414 = x$$74 == 0;
  if(v414) {
    return-1
  }
  var r$$34 = 0;
  var v1109 = x$$74 & 65535;
  var v415 = v1109 == 0;
  if(v415) {
    x$$74 = x$$74 >> 16;
    r$$34 = r$$34 + 16
  }
  var v1110 = x$$74 & 255;
  var v416 = v1110 == 0;
  if(v416) {
    x$$74 = x$$74 >> 8;
    r$$34 = r$$34 + 8
  }
  var v1111 = x$$74 & 15;
  var v417 = v1111 == 0;
  if(v417) {
    x$$74 = x$$74 >> 4;
    r$$34 = r$$34 + 4
  }
  var v1112 = x$$74 & 3;
  var v418 = v1112 == 0;
  if(v418) {
    x$$74 = x$$74 >> 2;
    r$$34 = r$$34 + 2
  }
  var v1113 = x$$74 & 1;
  var v419 = v1113 == 0;
  if(v419) {
    r$$34 = r$$34 + 1
  }
  return r$$34
}
function bnGetLowestSetBit() {
  var this_array$$27 = this.array;
  var i$$30 = 0;
  var v1114 = this.t;
  var v423 = i$$30 < v1114;
  for(;v423;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1115 = this_array$$27[i$$30]
    }
    var v422 = v1115 != 0;
    if(v422) {
      var v420 = i$$30 * BI_DB;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1116 = this_array$$27[i$$30]
      }
      var v421 = lbit(v1116);
      return v420 + v421
    }
    i$$30 = i$$30 + 1;
    var v1117 = this.t;
    v423 = i$$30 < v1117
  }
  var v1118 = this.s;
  var v425 = v1118 < 0;
  if(v425) {
    var v424 = this.t;
    return v424 * BI_DB
  }
  return-1
}
function cbit(x$$75) {
  var r$$35 = 0;
  var v426 = x$$75 != 0;
  for(;v426;) {
    var v1119 = x$$75 - 1;
    x$$75 = x$$75 & v1119;
    r$$35 = r$$35 + 1;
    v426 = x$$75 != 0
  }
  return r$$35
}
function bnBitCount() {
  var r$$36 = 0;
  var v427 = this.s;
  var x$$76 = v427 & BI_DM;
  var i$$31 = 0;
  var v1120 = this.t;
  var v428 = i$$31 < v1120;
  for(;v428;) {
    var v1121 = r$$36;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1605 = this_array[i$$31]
    }
    var v1449 = v1605 ^ x$$76;
    var v1122 = cbit(v1449);
    r$$36 = v1121 + v1122;
    i$$31 = i$$31 + 1;
    var v1123 = this.t;
    v428 = i$$31 < v1123
  }
  return r$$36
}
function bnTestBit(n$$12) {
  var this_array$$28 = this.array;
  var v429 = n$$12 / BI_DB;
  var j$$7 = Math.floor(v429);
  var v1124 = this.t;
  var v431 = j$$7 >= v1124;
  if(v431) {
    var v430 = this.s;
    return v430 != 0
  }
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1125 = this_array$$28[j$$7]
  }
  var v1450 = n$$12 % BI_DB;
  var v1126 = 1 << v1450;
  var v432 = v1125 & v1126;
  return v432 != 0
}
function bnpChangeBit(n$$13, op$$1) {
  var v433 = BigInteger.ONE;
  var r$$37 = JAM.call(v433.shiftLeft, v433, [n$$13]);
  JAM.call(this.bitwiseTo, this, [r$$37, op$$1, r$$37]);
  return r$$37
}
function bnSetBit(n$$14) {
  return JAM.call(this.changeBit, this, [n$$14, op_or])
}
function bnClearBit(n$$15) {
  return JAM.call(this.changeBit, this, [n$$15, op_andnot])
}
function bnFlipBit(n$$16) {
  return JAM.call(this.changeBit, this, [n$$16, op_xor])
}
function bnpAddTo(a$$15, r$$38) {
  var this_array$$29 = this.array;
  var a_array$$3 = a$$15.array;
  var r_array$$11 = r$$38.array;
  var i$$32 = 0;
  var c$$11 = 0;
  var v434 = a$$15.t;
  var v435 = this.t;
  var m$$10 = JAM.call(Math.min, Math, [v434, v435]);
  var v437 = i$$32 < m$$10;
  for(;v437;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1451 = this_array$$29[i$$32]
    }
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1452 = a_array$$3[i$$32]
    }
    var v1127 = v1451 + v1452;
    c$$11 = c$$11 + v1127;
    var v436 = i$$32;
    i$$32 = i$$32 + 1;
    r_array$$11[v436] = c$$11 & BI_DM;
    c$$11 = c$$11 >> BI_DB;
    v437 = i$$32 < m$$10
  }
  var v1128 = a$$15.t;
  var v1129 = this.t;
  var v442 = v1128 < v1129;
  if(v442) {
    var v1130 = a$$15.s;
    c$$11 = c$$11 + v1130;
    var v1131 = this.t;
    var v439 = i$$32 < v1131;
    for(;v439;) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1132 = this_array$$29[i$$32]
      }
      c$$11 = c$$11 + v1132;
      var v438 = i$$32;
      i$$32 = i$$32 + 1;
      r_array$$11[v438] = c$$11 & BI_DM;
      c$$11 = c$$11 >> BI_DB;
      var v1133 = this.t;
      v439 = i$$32 < v1133
    }
    var v1134 = this.s;
    c$$11 = c$$11 + v1134
  }else {
    var v1135 = this.s;
    c$$11 = c$$11 + v1135;
    var v1136 = a$$15.t;
    var v441 = i$$32 < v1136;
    for(;v441;) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1137 = a_array$$3[i$$32]
      }
      c$$11 = c$$11 + v1137;
      var v440 = i$$32;
      i$$32 = i$$32 + 1;
      r_array$$11[v440] = c$$11 & BI_DM;
      c$$11 = c$$11 >> BI_DB;
      var v1138 = a$$15.t;
      v441 = i$$32 < v1138
    }
    var v1139 = a$$15.s;
    c$$11 = c$$11 + v1139
  }
  var v443;
  var v1140 = c$$11 < 0;
  if(v1140) {
    v443 = -1
  }else {
    v443 = 0
  }
  r$$38.s = v443;
  var v447 = c$$11 > 0;
  if(v447) {
    var v444 = i$$32;
    i$$32 = i$$32 + 1;
    r_array$$11[v444] = c$$11
  }else {
    var v446 = c$$11 < -1;
    if(v446) {
      var v445 = i$$32;
      i$$32 = i$$32 + 1;
      r_array$$11[v445] = BI_DV + c$$11
    }
  }
  r$$38.t = i$$32;
  r$$38.clamp();
  return
}
function bnAdd(a$$16) {
  var r$$39 = nbi();
  JAM.call(this.addTo, this, [a$$16, r$$39]);
  return r$$39
}
function bnSubtract(a$$17) {
  var r$$40 = nbi();
  JAM.call(this.subTo, this, [a$$17, r$$40]);
  return r$$40
}
function bnMultiply(a$$18) {
  var r$$41 = nbi();
  JAM.call(this.multiplyTo, this, [a$$18, r$$41]);
  return r$$41
}
function bnDivide(a$$19) {
  var r$$42 = nbi();
  JAM.call(this.divRemTo, this, [a$$19, r$$42, null]);
  return r$$42
}
function bnRemainder(a$$20) {
  var r$$43 = nbi();
  JAM.call(this.divRemTo, this, [a$$20, null, r$$43]);
  return r$$43
}
function bnDivideAndRemainder(a$$21) {
  var q$$1 = nbi();
  var r$$44 = nbi();
  JAM.call(this.divRemTo, this, [a$$21, q$$1, r$$44]);
  return new Array(q$$1, r$$44)
}
function bnpDMultiply(n$$17) {
  var this_array$$30 = this.array;
  var v448 = this_array$$30;
  var v449 = this.t;
  var v1141 = n$$17 - 1;
  var v1142 = this.t;
  var v1707 = JAM.call(this.am, this, [0, v1141, this, 0, 0, v1142]);
  JAM.set(v448, v449, v1707);
  var v1143 = this.t;
  this.t = v1143 + 1;
  this.clamp();
  return
}
function bnpDAddOffset(n$$18, w$$10) {
  var this_array$$31 = this.array;
  var v1144 = this.t;
  var v451 = v1144 <= w$$10;
  for(;v451;) {
    var v450 = this.t;
    var v1453 = this.t;
    this.t = v1453 + 1;
    JAM.set(this_array$$31, v450, 0);
    var v1145 = this.t;
    v451 = v1145 <= w$$10
  }
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1146 = this_array$$31[w$$10]
  }
  JAM.set(this_array$$31, w$$10, v1146 + n$$18);
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1147 = this_array$$31[w$$10]
  }
  var v454 = v1147 >= BI_DV;
  for(;v454;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1148 = this_array$$31[w$$10]
    }
    JAM.set(this_array$$31, w$$10, v1148 - BI_DV);
    var v1149 = w$$10 = w$$10 + 1;
    var v1150 = this.t;
    var v453 = v1149 >= v1150;
    if(v453) {
      var v452 = this.t;
      var v1454 = this.t;
      this.t = v1454 + 1;
      JAM.set(this_array$$31, v452, 0)
    }
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1151 = this_array$$31[w$$10]
    }
    JAM.set(this_array$$31, w$$10, v1151 + 1);
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1152 = this_array$$31[w$$10]
    }
    v454 = v1152 >= BI_DV
  }
  return
}
function NullExp() {
  return
}
function nNop(x$$77) {
  return x$$77
}
function nMulTo(x$$78, y$$41, r$$45) {
  JAM.call(x$$78.multiplyTo, x$$78, [y$$41, r$$45]);
  return
}
function nSqrTo(x$$79, r$$46) {
  JAM.call(x$$79.squareTo, x$$79, [r$$46]);
  return
}
function bnPow(e$$10) {
  var v455 = new NullExp;
  return JAM.call(this.exp, this, [e$$10, v455])
}
function bnpMultiplyLowerTo(a$$22, n$$19, r$$47) {
  var r_array$$12 = r$$47.array;
  var a_array$$4 = a$$22.array;
  var v1153 = this.t;
  var v1154 = a$$22.t;
  var v456 = v1153 + v1154;
  var i$$33 = JAM.call(Math.min, Math, [v456, n$$19]);
  r$$47.s = 0;
  r$$47.t = i$$33;
  var v458 = i$$33 > 0;
  for(;v458;) {
    var v457 = i$$33 = i$$33 - 1;
    r_array$$12[v457] = 0;
    v458 = i$$33 > 0
  }
  var j$$8;
  var v459 = r$$47.t;
  var v460 = this.t;
  j$$8 = v459 - v460;
  var v463 = i$$33 < j$$8;
  for(;v463;) {
    var v461 = r_array$$12;
    var v1155 = this.t;
    var v462 = i$$33 + v1155;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1156 = a_array$$4[i$$33]
    }
    var v1157 = this.t;
    var v1708 = JAM.call(this.am, this, [0, v1156, r$$47, i$$33, 0, v1157]);
    JAM.set(v461, v462, v1708);
    i$$33 = i$$33 + 1;
    v463 = i$$33 < j$$8
  }
  var v464 = a$$22.t;
  j$$8 = JAM.call(Math.min, Math, [v464, n$$19]);
  var v467 = i$$33 < j$$8;
  for(;v467;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v465 = a_array$$4[i$$33]
    }
    var v466 = n$$19 - i$$33;
    JAM.call(this.am, this, [0, v465, r$$47, i$$33, 0, v466]);
    i$$33 = i$$33 + 1;
    v467 = i$$33 < j$$8
  }
  r$$47.clamp();
  return
}
function bnpMultiplyUpperTo(a$$23, n$$20, r$$48) {
  var r_array$$13 = r$$48.array;
  var a_array$$5 = a$$23.array;
  n$$20 = n$$20 - 1;
  var v1158 = this.t;
  var v1159 = a$$23.t;
  var v468 = v1158 + v1159;
  var i$$34 = r$$48.t = v468 - n$$20;
  r$$48.s = 0;
  var v1160 = i$$34 = i$$34 - 1;
  var v469 = v1160 >= 0;
  for(;v469;) {
    r_array$$13[i$$34] = 0;
    var v1161 = i$$34 = i$$34 - 1;
    v469 = v1161 >= 0
  }
  var v1162 = this.t;
  var v470 = n$$20 - v1162;
  i$$34 = JAM.call(Math.max, Math, [v470, 0]);
  var v1163 = a$$23.t;
  var v473 = i$$34 < v1163;
  for(;v473;) {
    var v471 = r_array$$13;
    var v1455 = this.t;
    var v1164 = v1455 + i$$34;
    var v472 = v1164 - n$$20;
    var v1165 = n$$20 - i$$34;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1166 = a_array$$5[i$$34]
    }
    var v1606 = this.t;
    var v1456 = v1606 + i$$34;
    var v1167 = v1456 - n$$20;
    var v1709 = JAM.call(this.am, this, [v1165, v1166, r$$48, 0, 0, v1167]);
    v471[v472] = v1709;
    i$$34 = i$$34 + 1;
    var v1168 = a$$23.t;
    v473 = i$$34 < v1168
  }
  r$$48.clamp();
  JAM.call(r$$48.drShiftTo, r$$48, [1, r$$48]);
  return
}
function Barrett(m$$11) {
  var v1710 = nbi();
  this.r2 = v1710;
  var v1711 = nbi();
  this.q3 = v1711;
  var v474 = BigInteger.ONE;
  var v1169 = m$$11.t;
  var v475 = 2 * v1169;
  var v476 = this.r2;
  JAM.call(v474.dlShiftTo, v474, [v475, v476]);
  var v477 = this.r2;
  var v1712 = JAM.call(v477.divide, v477, [m$$11]);
  this.mu = v1712;
  this.m = m$$11;
  return
}
function barrettConvert(x$$80) {
  var v1457 = x$$80.s;
  var v1170 = v1457 < 0;
  var v1460 = !v1170;
  if(v1460) {
    var v1458 = x$$80.t;
    var v1665 = this.m;
    var v1607 = v1665.t;
    var v1459 = 2 * v1607;
    v1170 = v1458 > v1459
  }
  var v480 = v1170;
  if(v480) {
    var v478 = this.m;
    return JAM.call(x$$80.mod, x$$80, [v478])
  }else {
    var v1461 = this.m;
    var v1171 = JAM.call(x$$80.compareTo, x$$80, [v1461]);
    var v479 = v1171 < 0;
    if(v479) {
      return x$$80
    }else {
      var r$$49 = nbi();
      JAM.call(x$$80.copyTo, x$$80, [r$$49]);
      JAM.call(this.reduce, this, [r$$49]);
      return r$$49
    }
  }
  return
}
function barrettRevert(x$$81) {
  return x$$81
}
function barrettReduce(x$$82) {
  var v1462 = this.m;
  var v1172 = v1462.t;
  var v481 = v1172 - 1;
  var v482 = this.r2;
  JAM.call(x$$82.drShiftTo, x$$82, [v481, v482]);
  var v1173 = x$$82.t;
  var v1608 = this.m;
  var v1463 = v1608.t;
  var v1174 = v1463 + 1;
  var v484 = v1173 > v1174;
  if(v484) {
    var v1175 = this.m;
    var v483 = v1175.t;
    x$$82.t = v483 + 1;
    x$$82.clamp()
  }
  var v485 = this.mu;
  var v486 = this.r2;
  var v1464 = this.m;
  var v1176 = v1464.t;
  var v487 = v1176 + 1;
  var v488 = this.q3;
  JAM.call(v485.multiplyUpperTo, v485, [v486, v487, v488]);
  var v489 = this.m;
  var v490 = this.q3;
  var v1465 = this.m;
  var v1177 = v1465.t;
  var v491 = v1177 + 1;
  var v492 = this.r2;
  JAM.call(v489.multiplyLowerTo, v489, [v490, v491, v492]);
  var v1466 = this.r2;
  var v1178 = JAM.call(x$$82.compareTo, x$$82, [v1466]);
  var v494 = v1178 < 0;
  for(;v494;) {
    var v1467 = this.m;
    var v1179 = v1467.t;
    var v493 = v1179 + 1;
    JAM.call(x$$82.dAddOffset, x$$82, [1, v493]);
    var v1468 = this.r2;
    var v1180 = JAM.call(x$$82.compareTo, x$$82, [v1468]);
    v494 = v1180 < 0
  }
  var v495 = this.r2;
  JAM.call(x$$82.subTo, x$$82, [v495, x$$82]);
  var v1469 = this.m;
  var v1181 = JAM.call(x$$82.compareTo, x$$82, [v1469]);
  var v497 = v1181 >= 0;
  for(;v497;) {
    var v496 = this.m;
    JAM.call(x$$82.subTo, x$$82, [v496, x$$82]);
    var v1470 = this.m;
    var v1182 = JAM.call(x$$82.compareTo, x$$82, [v1470]);
    v497 = v1182 >= 0
  }
  return
}
function barrettSqrTo(x$$83, r$$50) {
  JAM.call(x$$83.squareTo, x$$83, [r$$50]);
  JAM.call(this.reduce, this, [r$$50]);
  return
}
function barrettMulTo(x$$84, y$$42, r$$51) {
  JAM.call(x$$84.multiplyTo, x$$84, [y$$42, r$$51]);
  JAM.call(this.reduce, this, [r$$51]);
  return
}
function bnModPow(e$$11, m$$12) {
  var e_array = e$$11.array;
  var i$$35 = e$$11.bitLength();
  var k$$3;
  var r$$52 = nbv(1);
  var z$$5;
  var v502 = i$$35 <= 0;
  if(v502) {
    return r$$52
  }else {
    var v501 = i$$35 < 18;
    if(v501) {
      k$$3 = 1
    }else {
      var v500 = i$$35 < 48;
      if(v500) {
        k$$3 = 3
      }else {
        var v499 = i$$35 < 144;
        if(v499) {
          k$$3 = 4
        }else {
          var v498 = i$$35 < 768;
          if(v498) {
            k$$3 = 5
          }else {
            k$$3 = 6
          }
        }
      }
    }
  }
  var v504 = i$$35 < 8;
  if(v504) {
    z$$5 = new Classic(m$$12)
  }else {
    var v503 = m$$12.isEven();
    if(v503) {
      z$$5 = new Barrett(m$$12)
    }else {
      z$$5 = new Montgomery(m$$12)
    }
  }
  var g$$1 = new Array;
  var n$$21 = 3;
  var k1 = k$$3 - 1;
  var v505 = 1 << k$$3;
  var km$$1 = v505 - 1;
  var v506 = g$$1;
  var v1713 = JAM.call(z$$5.convert, z$$5, [this]);
  v506[1] = v1713;
  var v511 = k$$3 > 1;
  if(v511) {
    var g2 = nbi();
    var v507 = g$$1[1];
    JAM.call(z$$5.sqrTo, z$$5, [v507, g2]);
    var v510 = n$$21 <= km$$1;
    for(;v510;) {
      var v1714 = nbi();
      g$$1[n$$21] = v1714;
      var v1183 = n$$21 - 2;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v508 = g$$1[v1183]
      }
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v509 = g$$1[n$$21]
      }
      JAM.call(z$$5.mulTo, z$$5, [g2, v508, v509]);
      n$$21 = n$$21 + 2;
      v510 = n$$21 <= km$$1
    }
  }
  var v512 = e$$11.t;
  var j$$9 = v512 - 1;
  var w$$11;
  var is1 = true;
  var r2$$1 = nbi();
  var t$$5;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1184 = e_array[j$$9]
  }
  var v513 = nbits(v1184);
  i$$35 = v513 - 1;
  var v527 = j$$9 >= 0;
  for(;v527;) {
    var v518 = i$$35 >= k1;
    if(v518) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1185 = e_array[j$$9]
      }
      var v1186 = i$$35 - k1;
      var v514 = v1185 >> v1186;
      w$$11 = v514 & km$$1
    }else {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1187 = e_array[j$$9]
      }
      var v1609 = i$$35 + 1;
      var v1471 = 1 << v1609;
      var v1188 = v1471 - 1;
      var v515 = v1187 & v1188;
      var v516 = k1 - i$$35;
      w$$11 = v515 << v516;
      var v517 = j$$9 > 0;
      if(v517) {
        var v1610 = j$$9 - 1;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v1472 = e_array[v1610]
        }
        var v1611 = BI_DB + i$$35;
        var v1473 = v1611 - k1;
        var v1189 = v1472 >> v1473;
        w$$11 = w$$11 | v1189
      }
    }
    n$$21 = k$$3;
    var v1190 = w$$11 & 1;
    var v519 = v1190 == 0;
    for(;v519;) {
      w$$11 = w$$11 >> 1;
      n$$21 = n$$21 - 1;
      var v1191 = w$$11 & 1;
      v519 = v1191 == 0
    }
    var v1192 = i$$35 = i$$35 - n$$21;
    var v520 = v1192 < 0;
    if(v520) {
      i$$35 = i$$35 + BI_DB;
      j$$9 = j$$9 - 1
    }
    if(is1) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v521 = g$$1[w$$11]
      }
      JAM.call(v521.copyTo, v521, [r$$52]);
      is1 = false
    }else {
      var v522 = n$$21 > 1;
      for(;v522;) {
        JAM.call(z$$5.sqrTo, z$$5, [r$$52, r2$$1]);
        JAM.call(z$$5.sqrTo, z$$5, [r2$$1, r$$52]);
        n$$21 = n$$21 - 2;
        v522 = n$$21 > 1
      }
      var v523 = n$$21 > 0;
      if(v523) {
        JAM.call(z$$5.sqrTo, z$$5, [r$$52, r2$$1])
      }else {
        t$$5 = r$$52;
        r$$52 = r2$$1;
        r2$$1 = t$$5
      }
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v524 = g$$1[w$$11]
      }
      JAM.call(z$$5.mulTo, z$$5, [r2$$1, v524, r$$52])
    }
    var v1193 = j$$9 >= 0;
    if(v1193) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1612 = e_array[j$$9]
      }
      var v1613 = 1 << i$$35;
      var v1474 = v1612 & v1613;
      v1193 = v1474 == 0
    }
    var v526 = v1193;
    for(;v526;) {
      JAM.call(z$$5.sqrTo, z$$5, [r$$52, r2$$1]);
      t$$5 = r$$52;
      r$$52 = r2$$1;
      r2$$1 = t$$5;
      var v1194 = i$$35 = i$$35 - 1;
      var v525 = v1194 < 0;
      if(v525) {
        i$$35 = BI_DB - 1;
        j$$9 = j$$9 - 1
      }
      var v1195 = j$$9 >= 0;
      if(v1195) {
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v1614 = e_array[j$$9]
        }
        var v1615 = 1 << i$$35;
        var v1475 = v1614 & v1615;
        v1195 = v1475 == 0
      }
      v526 = v1195
    }
    v527 = j$$9 >= 0
  }
  return JAM.call(z$$5.revert, z$$5, [r$$52])
}
function bnGCD(a$$24) {
  var v528;
  var v1476 = this.s;
  var v1196 = v1476 < 0;
  if(v1196) {
    v528 = this.negate()
  }else {
    v528 = this.clone()
  }
  var x$$85 = v528;
  var v529;
  var v1477 = a$$24.s;
  var v1197 = v1477 < 0;
  if(v1197) {
    v529 = a$$24.negate()
  }else {
    v529 = a$$24.clone()
  }
  var y$$43 = v529;
  var v1198 = JAM.call(x$$85.compareTo, x$$85, [y$$43]);
  var v530 = v1198 < 0;
  if(v530) {
    var t$$6 = x$$85;
    x$$85 = y$$43;
    y$$43 = t$$6
  }
  var i$$36 = x$$85.getLowestSetBit();
  var g$$2 = y$$43.getLowestSetBit();
  var v531 = g$$2 < 0;
  if(v531) {
    return x$$85
  }
  var v532 = i$$36 < g$$2;
  if(v532) {
    g$$2 = i$$36
  }
  var v533 = g$$2 > 0;
  if(v533) {
    JAM.call(x$$85.rShiftTo, x$$85, [g$$2, x$$85]);
    JAM.call(y$$43.rShiftTo, y$$43, [g$$2, y$$43])
  }
  var v1199 = x$$85.signum();
  var v537 = v1199 > 0;
  for(;v537;) {
    var v1200 = i$$36 = x$$85.getLowestSetBit();
    var v534 = v1200 > 0;
    if(v534) {
      JAM.call(x$$85.rShiftTo, x$$85, [i$$36, x$$85])
    }
    var v1201 = i$$36 = y$$43.getLowestSetBit();
    var v535 = v1201 > 0;
    if(v535) {
      JAM.call(y$$43.rShiftTo, y$$43, [i$$36, y$$43])
    }
    var v1202 = JAM.call(x$$85.compareTo, x$$85, [y$$43]);
    var v536 = v1202 >= 0;
    if(v536) {
      JAM.call(x$$85.subTo, x$$85, [y$$43, x$$85]);
      JAM.call(x$$85.rShiftTo, x$$85, [1, x$$85])
    }else {
      JAM.call(y$$43.subTo, y$$43, [x$$85, y$$43]);
      JAM.call(y$$43.rShiftTo, y$$43, [1, y$$43])
    }
    var v1203 = x$$85.signum();
    v537 = v1203 > 0
  }
  var v538 = g$$2 > 0;
  if(v538) {
    JAM.call(y$$43.lShiftTo, y$$43, [g$$2, y$$43])
  }
  return y$$43
}
function bnpModInt(n$$22) {
  var this_array$$32 = this.array;
  var v539 = n$$22 <= 0;
  if(v539) {
    return 0
  }
  var d$$4 = BI_DV % n$$22;
  var v540;
  var v1478 = this.s;
  var v1204 = v1478 < 0;
  if(v1204) {
    v540 = n$$22 - 1
  }else {
    v540 = 0
  }
  var r$$53 = v540;
  var v1205 = this.t;
  var v546 = v1205 > 0;
  if(v546) {
    var v545 = d$$4 == 0;
    if(v545) {
      var v541 = this_array$$32[0];
      r$$53 = v541 % n$$22
    }else {
      var v542 = this.t;
      var i$$37 = v542 - 1;
      var v544 = i$$37 >= 0;
      for(;v544;) {
        var v1206 = d$$4 * r$$53;
        introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v1207 = this_array$$32[i$$37]
        }
        var v543 = v1206 + v1207;
        r$$53 = v543 % n$$22;
        i$$37 = i$$37 - 1;
        v544 = i$$37 >= 0
      }
    }
  }
  return r$$53
}
function bnModInverse(m$$13) {
  var ac = m$$13.isEven();
  var v1479 = this.isEven();
  if(v1479) {
    v1479 = ac
  }
  var v1208 = v1479;
  var v1481 = !v1208;
  if(v1481) {
    var v1480 = m$$13.signum();
    v1208 = v1480 == 0
  }
  var v547 = v1208;
  if(v547) {
    return BigInteger.ZERO
  }
  var u = m$$13.clone();
  var v$$1 = this.clone();
  var a$$25 = nbv(1);
  var b$$6 = nbv(0);
  var c$$12 = nbv(0);
  var d$$5 = nbv(1);
  var v1209 = u.signum();
  var v555 = v1209 != 0;
  for(;v555;) {
    var v550 = u.isEven();
    for(;v550;) {
      JAM.call(u.rShiftTo, u, [1, u]);
      if(ac) {
        var v1482 = a$$25.isEven();
        var v1210 = !v1482;
        var v1484 = !v1210;
        if(v1484) {
          var v1483 = b$$6.isEven();
          v1210 = !v1483
        }
        var v548 = v1210;
        if(v548) {
          JAM.call(a$$25.addTo, a$$25, [this, a$$25]);
          JAM.call(b$$6.subTo, b$$6, [m$$13, b$$6])
        }
        JAM.call(a$$25.rShiftTo, a$$25, [1, a$$25])
      }else {
        var v1211 = b$$6.isEven();
        var v549 = !v1211;
        if(v549) {
          JAM.call(b$$6.subTo, b$$6, [m$$13, b$$6])
        }
      }
      JAM.call(b$$6.rShiftTo, b$$6, [1, b$$6]);
      v550 = u.isEven()
    }
    var v553 = v$$1.isEven();
    for(;v553;) {
      JAM.call(v$$1.rShiftTo, v$$1, [1, v$$1]);
      if(ac) {
        var v1485 = c$$12.isEven();
        var v1212 = !v1485;
        var v1487 = !v1212;
        if(v1487) {
          var v1486 = d$$5.isEven();
          v1212 = !v1486
        }
        var v551 = v1212;
        if(v551) {
          JAM.call(c$$12.addTo, c$$12, [this, c$$12]);
          JAM.call(d$$5.subTo, d$$5, [m$$13, d$$5])
        }
        JAM.call(c$$12.rShiftTo, c$$12, [1, c$$12])
      }else {
        var v1213 = d$$5.isEven();
        var v552 = !v1213;
        if(v552) {
          JAM.call(d$$5.subTo, d$$5, [m$$13, d$$5])
        }
      }
      JAM.call(d$$5.rShiftTo, d$$5, [1, d$$5]);
      v553 = v$$1.isEven()
    }
    var v1214 = JAM.call(u.compareTo, u, [v$$1]);
    var v554 = v1214 >= 0;
    if(v554) {
      JAM.call(u.subTo, u, [v$$1, u]);
      if(ac) {
        JAM.call(a$$25.subTo, a$$25, [c$$12, a$$25])
      }
      JAM.call(b$$6.subTo, b$$6, [d$$5, b$$6])
    }else {
      JAM.call(v$$1.subTo, v$$1, [u, v$$1]);
      if(ac) {
        JAM.call(c$$12.subTo, c$$12, [a$$25, c$$12])
      }
      JAM.call(d$$5.subTo, d$$5, [b$$6, d$$5])
    }
    var v1215 = u.signum();
    v555 = v1215 != 0
  }
  var v1488 = BigInteger.ONE;
  var v1216 = JAM.call(v$$1.compareTo, v$$1, [v1488]);
  var v556 = v1216 != 0;
  if(v556) {
    return BigInteger.ZERO
  }
  var v1217 = JAM.call(d$$5.compareTo, d$$5, [m$$13]);
  var v557 = v1217 >= 0;
  if(v557) {
    return JAM.call(d$$5.subtract, d$$5, [m$$13])
  }
  var v1218 = d$$5.signum();
  var v558 = v1218 < 0;
  if(v558) {
    JAM.call(d$$5.addTo, d$$5, [m$$13, d$$5])
  }else {
    return d$$5
  }
  var v1219 = d$$5.signum();
  var v559 = v1219 < 0;
  if(v559) {
    return JAM.call(d$$5.add, d$$5, [m$$13])
  }else {
    return d$$5
  }
  return
}
function bnIsProbablePrime(t$$7) {
  var i$$38;
  var x$$86 = this.abs();
  var x_array$$2 = x$$86.array;
  var v1489 = x$$86.t;
  var v1220 = v1489 == 1;
  if(v1220) {
    var v1490 = x_array$$2[0];
    var v1666 = lowprimes.length;
    var v1616 = v1666 - 1;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1491 = lowprimes[v1616]
    }
    v1220 = v1490 <= v1491
  }
  var v562 = v1220;
  if(v562) {
    i$$38 = 0;
    var v1221 = lowprimes.length;
    var v561 = i$$38 < v1221;
    for(;v561;) {
      var v1222 = x_array$$2[0];
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1223 = lowprimes[i$$38]
      }
      var v560 = v1222 == v1223;
      if(v560) {
        return true
      }
      i$$38 = i$$38 + 1;
      var v1224 = lowprimes.length;
      v561 = i$$38 < v1224
    }
    return false
  }
  var v563 = x$$86.isEven();
  if(v563) {
    return false
  }
  i$$38 = 1;
  var v1225 = lowprimes.length;
  var v567 = i$$38 < v1225;
  for(;v567;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var m$$14 = lowprimes[i$$38]
    }
    var j$$10 = i$$38 + 1;
    var v1492 = lowprimes.length;
    var v1226 = j$$10 < v1492;
    if(v1226) {
      v1226 = m$$14 < lplim
    }
    var v564 = v1226;
    for(;v564;) {
      var v1493 = j$$10;
      j$$10 = j$$10 + 1;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1227 = lowprimes[v1493]
      }
      m$$14 = m$$14 * v1227;
      var v1494 = lowprimes.length;
      var v1228 = j$$10 < v1494;
      if(v1228) {
        v1228 = m$$14 < lplim
      }
      v564 = v1228
    }
    m$$14 = JAM.call(x$$86.modInt, x$$86, [m$$14]);
    var v566 = i$$38 < j$$10;
    for(;v566;) {
      var v1617 = i$$38;
      i$$38 = i$$38 + 1;
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1495 = lowprimes[v1617]
      }
      var v1229 = m$$14 % v1495;
      var v565 = v1229 == 0;
      if(v565) {
        return false
      }
      v566 = i$$38 < j$$10
    }
    var v1230 = lowprimes.length;
    v567 = i$$38 < v1230
  }
  return JAM.call(x$$86.millerRabin, x$$86, [t$$7])
}
function bnpMillerRabin(t$$8) {
  var v568 = BigInteger.ONE;
  var n1 = JAM.call(this.subtract, this, [v568]);
  var k$$4 = n1.getLowestSetBit();
  var v569 = k$$4 <= 0;
  if(v569) {
    return false
  }
  var r$$54 = JAM.call(n1.shiftRight, n1, [k$$4]);
  var v570 = t$$8 + 1;
  t$$8 = v570 >> 1;
  var v1231 = lowprimes.length;
  var v571 = t$$8 > v1231;
  if(v571) {
    t$$8 = lowprimes.length
  }
  var a$$26 = nbi();
  var i$$39 = 0;
  var v577 = i$$39 < t$$8;
  for(;v577;) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v572 = lowprimes[i$$39]
    }
    JAM.call(a$$26.fromInt, a$$26, [v572]);
    var y$$44 = JAM.call(a$$26.modPow, a$$26, [r$$54, this]);
    var v1618 = BigInteger.ONE;
    var v1496 = JAM.call(y$$44.compareTo, y$$44, [v1618]);
    var v1232 = v1496 != 0;
    if(v1232) {
      var v1497 = JAM.call(y$$44.compareTo, y$$44, [n1]);
      v1232 = v1497 != 0
    }
    var v576 = v1232;
    if(v576) {
      var j$$11 = 1;
      var v1498 = j$$11;
      j$$11 = j$$11 + 1;
      var v1233 = v1498 < k$$4;
      if(v1233) {
        var v1499 = JAM.call(y$$44.compareTo, y$$44, [n1]);
        v1233 = v1499 != 0
      }
      var v574 = v1233;
      for(;v574;) {
        y$$44 = JAM.call(y$$44.modPowInt, y$$44, [2, this]);
        var v1500 = BigInteger.ONE;
        var v1234 = JAM.call(y$$44.compareTo, y$$44, [v1500]);
        var v573 = v1234 == 0;
        if(v573) {
          return false
        }
        var v1501 = j$$11;
        j$$11 = j$$11 + 1;
        var v1235 = v1501 < k$$4;
        if(v1235) {
          var v1502 = JAM.call(y$$44.compareTo, y$$44, [n1]);
          v1235 = v1502 != 0
        }
        v574 = v1235
      }
      var v1236 = JAM.call(y$$44.compareTo, y$$44, [n1]);
      var v575 = v1236 != 0;
      if(v575) {
        return false
      }
    }
    i$$39 = i$$39 + 1;
    v577 = i$$39 < t$$8
  }
  return true
}
function Arcfour() {
  this.i = 0;
  this.j = 0;
  var v1715 = new Array;
  this.S = v1715;
  return
}
function ARC4init(key$$14) {
  var i$$40;
  var j$$12;
  var t$$9;
  i$$40 = 0;
  var v579 = i$$40 < 256;
  for(;v579;) {
    var v578 = this.S;
    JAM.set(v578, i$$40, i$$40);
    i$$40 = i$$40 + 1;
    v579 = i$$40 < 256
  }
  j$$12 = 0;
  i$$40 = 0;
  var v584 = i$$40 < 256;
  for(;v584;) {
    var v1619 = this.S;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1503 = v1619[i$$40]
    }
    var v1237 = j$$12 + v1503;
    var v1620 = key$$14.length;
    var v1504 = i$$40 % v1620;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1238 = key$$14[v1504]
    }
    var v580 = v1237 + v1238;
    j$$12 = v580 & 255;
    var v581 = this.S;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      t$$9 = v581[i$$40]
    }
    var v582 = this.S;
    var v1239 = this.S;
    JAM.set(v582, i$$40, JAM.get(v1239, j$$12, JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074));
    var v583 = this.S;
    JAM.set(v583, j$$12, t$$9);
    i$$40 = i$$40 + 1;
    v584 = i$$40 < 256
  }
  this.i = 0;
  this.j = 0;
  return
}
function ARC4next() {
  var t$$10;
  var v1240 = this.i;
  var v585 = v1240 + 1;
  this.i = v585 & 255;
  var v1241 = this.j;
  var v1505 = this.S;
  var v1506 = this.i;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1242 = v1505[v1506]
  }
  var v586 = v1241 + v1242;
  this.j = v586 & 255;
  var v587 = this.S;
  var v588 = this.i;
  t$$10 = v587[v588];
  var v589 = this.S;
  var v590 = this.i;
  var v1243 = this.S;
  var v1244 = this.j;
  v589[v590] = v1243[v1244];
  var v591 = this.S;
  var v592 = this.j;
  v591[v592] = t$$10;
  var v593 = this.S;
  var v1621 = this.S;
  var v1622 = this.i;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1507 = v1621[v1622]
  }
  var v1245 = t$$10 + v1507;
  var v594 = v1245 & 255;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    return v593[v594]
  }
}
function prng_newstate() {
  return new Arcfour
}
function rng_seed_int(x$$87) {
  var v595 = rng_pptr;
  rng_pptr = rng_pptr + 1;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1508 = rng_pool[v595]
  }
  var v1509 = x$$87 & 255;
  JAM.set(rng_pool, v595, v1508 ^ v1509);
  var v596 = rng_pptr;
  rng_pptr = rng_pptr + 1;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1510 = rng_pool[v596]
  }
  var v1623 = x$$87 >> 8;
  var v1511 = v1623 & 255;
  JAM.set(rng_pool, v596, v1510 ^ v1511);
  var v597 = rng_pptr;
  rng_pptr = rng_pptr + 1;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1512 = rng_pool[v597]
  }
  var v1624 = x$$87 >> 16;
  var v1513 = v1624 & 255;
  JAM.set(rng_pool, v597, v1512 ^ v1513);
  var v598 = rng_pptr;
  rng_pptr = rng_pptr + 1;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1514 = rng_pool[v598]
  }
  var v1625 = x$$87 >> 24;
  var v1515 = v1625 & 255;
  JAM.set(rng_pool, v598, v1514 ^ v1515);
  var v599 = rng_pptr >= rng_psize;
  if(v599) {
    rng_pptr = rng_pptr - rng_psize
  }
  return
}
function rng_seed_time() {
  rng_seed_int(1122926989487);
  return
}
function rng_get_byte() {
  var v601 = rng_state == null;
  if(v601) {
    rng_seed_time();
    rng_state = prng_newstate();
    JAM.call(rng_state.init, rng_state, [rng_pool]);
    rng_pptr = 0;
    var v1246 = rng_pool.length;
    var v600 = rng_pptr < v1246;
    for(;v600;) {
      JAM.set(rng_pool, rng_pptr, 0);
      rng_pptr = rng_pptr + 1;
      var v1247 = rng_pool.length;
      v600 = rng_pptr < v1247
    }
    rng_pptr = 0
  }
  return rng_state.next()
}
function rng_get_bytes(ba) {
  var i$$41;
  i$$41 = 0;
  var v1248 = ba.length;
  var v602 = i$$41 < v1248;
  for(;v602;) {
    var v1716 = rng_get_byte();
    JAM.set(ba, i$$41, v1716);
    i$$41 = i$$41 + 1;
    var v1249 = ba.length;
    v602 = i$$41 < v1249
  }
  return
}
function SecureRandom() {
  return
}
function parseBigInt(str$$6, r$$55) {
  return new BigInteger(str$$6, r$$55)
}
function linebrk(s$$6, n$$23) {
  var ret = "";
  var i$$42 = 0;
  var v1250 = i$$42 + n$$23;
  var v1251 = s$$6.length;
  var v603 = v1250 < v1251;
  for(;v603;) {
    var v1252 = ret;
    var v1626 = i$$42 + n$$23;
    var v1516 = s$$6.substring(i$$42, v1626);
    var v1253 = v1516 + "\n";
    ret = v1252 + v1253;
    i$$42 = i$$42 + n$$23;
    var v1254 = i$$42 + n$$23;
    var v1255 = s$$6.length;
    v603 = v1254 < v1255
  }
  var v604 = ret;
  var v1256 = s$$6.length;
  var v605 = s$$6.substring(i$$42, v1256);
  return v604 + v605
}
function byte2Hex(b$$7) {
  var v607 = b$$7 < 16;
  if(v607) {
    var v606 = JAM.call(b$$7.toString, b$$7, [16]);
    return"0" + v606
  }else {
    return JAM.call(b$$7.toString, b$$7, [16])
  }
  return
}
function pkcs1pad2(s$$7, n$$24) {
  var v1517 = s$$7.length;
  var v1257 = v1517 + 11;
  var v608 = n$$24 < v1257;
  if(v608) {
    JAM.call(alert, null, ["Message too long for RSA"]);
    return null
  }
  var ba$$1 = new Array;
  var v609 = s$$7.length;
  var i$$43 = v609 - 1;
  var v1258 = i$$43 >= 0;
  if(v1258) {
    v1258 = n$$24 > 0
  }
  var v612 = v1258;
  for(;v612;) {
    var v610 = ba$$1;
    var v611 = n$$24 = n$$24 - 1;
    var v1259 = i$$43;
    i$$43 = i$$43 - 1;
    var v1717 = s$$7.charCodeAt(v1259);
    v610[v611] = v1717;
    var v1260 = i$$43 >= 0;
    if(v1260) {
      v1260 = n$$24 > 0
    }
    v612 = v1260
  }
  var v613 = n$$24 = n$$24 - 1;
  ba$$1[v613] = 0;
  var rng = new SecureRandom;
  var x$$88 = new Array;
  var v616 = n$$24 > 2;
  for(;v616;) {
    x$$88[0] = 0;
    var v1261 = x$$88[0];
    var v614 = v1261 == 0;
    for(;v614;) {
      JAM.call(rng.nextBytes, rng, [x$$88]);
      var v1262 = x$$88[0];
      v614 = v1262 == 0
    }
    var v615 = n$$24 = n$$24 - 1;
    ba$$1[v615] = x$$88[0];
    v616 = n$$24 > 2
  }
  var v617 = n$$24 = n$$24 - 1;
  ba$$1[v617] = 2;
  var v618 = n$$24 = n$$24 - 1;
  ba$$1[v618] = 0;
  return new BigInteger(ba$$1)
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
  return
}
function RSASetPublic(N, E) {
  var v1263 = N != null;
  if(v1263) {
    var v1518 = E != null;
    if(v1518) {
      var v1667 = N.length;
      var v1627 = v1667 > 0;
      if(v1627) {
        var v1668 = E.length;
        v1627 = v1668 > 0
      }
      v1518 = v1627
    }
    v1263 = v1518
  }
  var v619 = v1263;
  if(v619) {
    var v1718 = parseBigInt(N, 16);
    this.n = v1718;
    var v1719 = parseInt(E, 16);
    this.e = v1719
  }else {
    JAM.call(alert, null, ["Invalid RSA public key"])
  }
  return
}
function RSADoPublic(x$$89) {
  var v620 = this.e;
  var v621 = this.n;
  return JAM.call(x$$89.modPowInt, x$$89, [v620, v621])
}
function RSAEncrypt(text$$7) {
  var v1628 = this.n;
  var v1519 = v1628.bitLength();
  var v1264 = v1519 + 7;
  var v622 = v1264 >> 3;
  var m$$15 = pkcs1pad2(text$$7, v622);
  var v623 = m$$15 == null;
  if(v623) {
    return null
  }
  var c$$13 = JAM.call(this.doPublic, this, [m$$15]);
  var v624 = c$$13 == null;
  if(v624) {
    return null
  }
  var h$$7 = JAM.call(c$$13.toString, c$$13, [16]);
  var v1520 = h$$7.length;
  var v1265 = v1520 & 1;
  var v625 = v1265 == 0;
  if(v625) {
    return h$$7
  }else {
    return"0" + h$$7
  }
  return
}
function pkcs1unpad2(d$$6, n$$25) {
  var b$$8 = d$$6.toByteArray();
  var i$$44 = 0;
  var v1521 = b$$8.length;
  var v1266 = i$$44 < v1521;
  if(v1266) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1522 = b$$8[i$$44]
    }
    v1266 = v1522 == 0
  }
  var v626 = v1266;
  for(;v626;) {
    i$$44 = i$$44 + 1;
    var v1523 = b$$8.length;
    var v1267 = i$$44 < v1523;
    if(v1267) {
      introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v1524 = b$$8[i$$44]
      }
      v1267 = v1524 == 0
    }
    v626 = v1267
  }
  var v1629 = b$$8.length;
  var v1525 = v1629 - i$$44;
  var v1526 = n$$25 - 1;
  var v1268 = v1525 != v1526;
  var v1528 = !v1268;
  if(v1528) {
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1527 = b$$8[i$$44]
    }
    v1268 = v1527 != 2
  }
  var v627 = v1268;
  if(v627) {
    return null
  }
  i$$44 = i$$44 + 1;
  introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1269 = b$$8[i$$44]
  }
  var v629 = v1269 != 0;
  for(;v629;) {
    var v1270 = i$$44 = i$$44 + 1;
    var v1271 = b$$8.length;
    var v628 = v1270 >= v1271;
    if(v628) {
      return null
    }
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1272 = b$$8[i$$44]
    }
    v629 = v1272 != 0
  }
  var ret$$1 = "";
  var v1273 = i$$44 = i$$44 + 1;
  var v1274 = b$$8.length;
  var v630 = v1273 < v1274;
  for(;v630;) {
    var v1275 = ret$$1;
    introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1529 = b$$8[i$$44]
    }
    var v1276 = String.fromCharCode(v1529);
    ret$$1 = v1275 + v1276;
    var v1277 = i$$44 = i$$44 + 1;
    var v1278 = b$$8.length;
    v630 = v1277 < v1278
  }
  return ret$$1
}
function RSASetPrivate(N$$1, E$$1, D) {
  var v1279 = N$$1 != null;
  if(v1279) {
    var v1530 = E$$1 != null;
    if(v1530) {
      var v1669 = N$$1.length;
      var v1630 = v1669 > 0;
      if(v1630) {
        var v1670 = E$$1.length;
        v1630 = v1670 > 0
      }
      v1530 = v1630
    }
    v1279 = v1530
  }
  var v631 = v1279;
  if(v631) {
    var v1720 = parseBigInt(N$$1, 16);
    this.n = v1720;
    var v1721 = parseInt(E$$1, 16);
    this.e = v1721;
    var v1722 = parseBigInt(D, 16);
    this.d = v1722
  }else {
    JAM.call(alert, null, ["Invalid RSA private key"])
  }
  return
}
function RSASetPrivateEx(N$$2, E$$2, D$$1, P, Q, DP, DQ, C) {
  var v1280 = N$$2 != null;
  if(v1280) {
    var v1531 = E$$2 != null;
    if(v1531) {
      var v1671 = N$$2.length;
      var v1631 = v1671 > 0;
      if(v1631) {
        var v1672 = E$$2.length;
        v1631 = v1672 > 0
      }
      v1531 = v1631
    }
    v1280 = v1531
  }
  var v632 = v1280;
  if(v632) {
    var v1723 = parseBigInt(N$$2, 16);
    this.n = v1723;
    var v1724 = parseInt(E$$2, 16);
    this.e = v1724;
    var v1725 = parseBigInt(D$$1, 16);
    this.d = v1725;
    var v1726 = parseBigInt(P, 16);
    this.p = v1726;
    var v1727 = parseBigInt(Q, 16);
    this.q = v1727;
    var v1728 = parseBigInt(DP, 16);
    this.dmp1 = v1728;
    var v1729 = parseBigInt(DQ, 16);
    this.dmq1 = v1729;
    var v1730 = parseBigInt(C, 16);
    this.coeff = v1730
  }else {
    JAM.call(alert, null, ["Invalid RSA private key"])
  }
  return
}
function RSAGenerate(B, E$$3) {
  var rng$$1 = new SecureRandom;
  var qs = B >> 1;
  var v1731 = parseInt(E$$3, 16);
  this.e = v1731;
  var ee = new BigInteger(E$$3, 16);
  for(;;) {
    for(;;) {
      var v633 = B - qs;
      var v1732 = new BigInteger(v633, 1, rng$$1);
      this.p = v1732;
      var v1688 = this.p;
      var v1689 = BigInteger.ONE;
      var v1673 = JAM.call(v1688.subtract, v1688, [v1689]);
      var v1632 = JAM.call(v1673.gcd, v1673, [ee]);
      var v1633 = BigInteger.ONE;
      var v1532 = JAM.call(v1632.compareTo, v1632, [v1633]);
      var v1281 = v1532 == 0;
      if(v1281) {
        var v1533 = this.p;
        v1281 = JAM.call(v1533.isProbablePrime, v1533, [10])
      }
      var v634 = v1281;
      if(v634) {
        break
      }
    }
    for(;;) {
      var v1733 = new BigInteger(qs, 1, rng$$1);
      this.q = v1733;
      var v1690 = this.q;
      var v1691 = BigInteger.ONE;
      var v1674 = JAM.call(v1690.subtract, v1690, [v1691]);
      var v1634 = JAM.call(v1674.gcd, v1674, [ee]);
      var v1635 = BigInteger.ONE;
      var v1534 = JAM.call(v1634.compareTo, v1634, [v1635]);
      var v1282 = v1534 == 0;
      if(v1282) {
        var v1535 = this.q;
        v1282 = JAM.call(v1535.isProbablePrime, v1535, [10])
      }
      var v635 = v1282;
      if(v635) {
        break
      }
    }
    var v1536 = this.p;
    var v1537 = this.q;
    var v1283 = JAM.call(v1536.compareTo, v1536, [v1537]);
    var v636 = v1283 <= 0;
    if(v636) {
      var t$$11 = this.p;
      this.p = this.q;
      this.q = t$$11
    }
    var v637 = this.p;
    var v638 = BigInteger.ONE;
    var p1 = JAM.call(v637.subtract, v637, [v638]);
    var v639 = this.q;
    var v640 = BigInteger.ONE;
    var q1 = JAM.call(v639.subtract, v639, [v640]);
    var phi = JAM.call(p1.multiply, p1, [q1]);
    var v1538 = JAM.call(phi.gcd, phi, [ee]);
    var v1539 = BigInteger.ONE;
    var v1284 = JAM.call(v1538.compareTo, v1538, [v1539]);
    var v647 = v1284 == 0;
    if(v647) {
      var v641 = this.p;
      var v642 = this.q;
      var v1734 = JAM.call(v641.multiply, v641, [v642]);
      this.n = v1734;
      var v1735 = JAM.call(ee.modInverse, ee, [phi]);
      this.d = v1735;
      var v643 = this.d;
      var v1736 = JAM.call(v643.mod, v643, [p1]);
      this.dmp1 = v1736;
      var v644 = this.d;
      var v1737 = JAM.call(v644.mod, v644, [q1]);
      this.dmq1 = v1737;
      var v645 = this.q;
      var v646 = this.p;
      var v1738 = JAM.call(v645.modInverse, v645, [v646]);
      this.coeff = v1738;
      break
    }
  }
  return
}
function RSADoPrivate(x$$90) {
  var v1540 = this.p;
  var v1285 = v1540 == null;
  var v1542 = !v1285;
  if(v1542) {
    var v1541 = this.q;
    v1285 = v1541 == null
  }
  var v650 = v1285;
  if(v650) {
    var v648 = this.d;
    var v649 = this.n;
    return JAM.call(x$$90.modPow, x$$90, [v648, v649])
  }
  var v1286 = this.p;
  var v651 = JAM.call(x$$90.mod, x$$90, [v1286]);
  var v652 = this.dmp1;
  var v653 = this.p;
  var xp = JAM.call(v651.modPow, v651, [v652, v653]);
  var v1287 = this.q;
  var v654 = JAM.call(x$$90.mod, x$$90, [v1287]);
  var v655 = this.dmq1;
  var v656 = this.q;
  var xq = JAM.call(v654.modPow, v654, [v655, v656]);
  var v1288 = JAM.call(xp.compareTo, xp, [xq]);
  var v658 = v1288 < 0;
  for(;v658;) {
    var v657 = this.p;
    xp = JAM.call(xp.add, xp, [v657]);
    var v1289 = JAM.call(xp.compareTo, xp, [xq]);
    v658 = v1289 < 0
  }
  var v1636 = JAM.call(xp.subtract, xp, [xq]);
  var v1637 = this.coeff;
  var v1543 = JAM.call(v1636.multiply, v1636, [v1637]);
  var v1544 = this.p;
  var v1290 = JAM.call(v1543.mod, v1543, [v1544]);
  var v1291 = this.q;
  var v659 = JAM.call(v1290.multiply, v1290, [v1291]);
  return JAM.call(v659.add, v659, [xq])
}
function RSADecrypt(ctext) {
  var c$$14 = parseBigInt(ctext, 16);
  var m$$16 = JAM.call(this.doPrivate, this, [c$$14]);
  var v660 = m$$16 == null;
  if(v660) {
    return null
  }
  var v1638 = this.n;
  var v1545 = v1638.bitLength();
  var v1292 = v1545 + 7;
  var v661 = v1292 >> 3;
  return pkcs1unpad2(m$$16, v661)
}
function encrypt() {
  var RSA = new RSAKey;
  JAM.call(RSA.setPublic, RSA, [nValue, eValue]);
  JAM.call(RSA.setPrivateEx, RSA, [nValue, eValue, dValue, pValue, qValue, dmp1Value, dmq1Value, coeffValue]);
  encrypted = JAM.call(RSA.encrypt, RSA, [TEXT]);
  return
}
function decrypt() {
  var RSA$$1 = new RSAKey;
  JAM.call(RSA$$1.setPublic, RSA$$1, [nValue, eValue]);
  JAM.call(RSA$$1.setPrivateEx, RSA$$1, [nValue, eValue, dValue, pValue, qValue, dmp1Value, dmq1Value, coeffValue]);
  var decrypted = JAM.call(RSA$$1.decrypt, RSA$$1, [encrypted]);
  var v662 = decrypted != TEXT;
  if(v662) {
    throw new Error("Crypto operation failed");
  }
  return
}
function ShowBox(name$$33) {
  function v2(entry) {
    var v1293 = name$$33.valueOf();
    var v1294 = entry.valueOf();
    var v665 = v1293 === v1294;
    if(v665) {
      var v1295 = "Box-" + name$$33;
      var v663 = v1295 + "Latency";
      var box1 = document.getElementById(v663);
      var v664 = box1.style;
      v664.visibility = "visible"
    }
    return
  }
  var v666 = "Box-" + name$$33;
  var box = document.getElementById(v666);
  var v667 = box.style;
  v667.visibility = "visible";
  var v1296 = document.getElementById("progress-bar");
  var v668 = v1296.style;
  var v1675 = completed = completed + 1;
  var v1639 = v1675 / benchmarks;
  var v1546 = v1639 * 100;
  var v1297 = "" + v1546;
  var bar = v668.width = v1297 + "%";
  latencyBenchmarks.forEach(v2);
  return
}
function AddResult(name$$34, result$$2) {
  var v1298 = name$$34 + ": ";
  var v669 = v1298 + result$$2;
  console.log(v669);
  var v670 = "Result-" + name$$34;
  var box$$1 = document.getElementById(v670);
  JAM.set(box$$1, "innerHTML", result$$2);
  return
}
function AddError(name$$35, error$$3) {
  var v1299 = name$$35 + ": ";
  var v1300 = error$$3.message;
  var v671 = v1299 + v1300;
  console.log(v671);
  var v673 = error$$3 == "TypedArrayUnsupported";
  if(v673) {
    AddResult(name$$35, "<b>Unsupported</b>")
  }else {
    var v672 = error$$3 == "PerformanceNowUnsupported";
    if(v672) {
      AddResult(name$$35, "<b>Timer error</b>")
    }else {
      AddResult(name$$35, "<b>Error</b>")
    }
  }
  success = false;
  return
}
function AddScore(score$$2) {
  var status = document.getElementById("main-banner");
  if(success) {
    JAM.set(status, "innerHTML", "Octane Score: " + score$$2)
  }else {
    JAM.set(status, "innerHTML", "Octane Score (incomplete): " + score$$2)
  }
  var v1301 = document.getElementById("progress-bar-container");
  var v674 = v1301.style;
  v674.visibility = "hidden";
  var v1302 = document.getElementById("bottom-text");
  var v675 = v1302.style;
  v675.visibility = "visible";
  var v676 = document.getElementById("inside-anchor");
  var v677 = document.getElementById("bar-appendix");
  v676.removeChild(v677);
  var v1303 = document.getElementById("alertbox");
  var v678 = v1303.style;
  v678.visibility = "hidden";
  return
}
function Run() {
  var v679 = document.getElementById("main-banner");
  JAM.set(v679, "innerHTML", "Running Octane...");
  var v680 = document.getElementById("bar-appendix");
  JAM.set(v680, "innerHTML", '<br/><div class="progress progress-striped" id="progress-bar-container" style="visibility:hidden"><div class="bar"style="width: 0%;" id="progress-bar"></div></div>');
  var anchor = document.getElementById("run-octane");
  var parent = document.getElementById("main-container");
  var v681 = document.getElementById("inside-anchor");
  JAM.call(parent.appendChild, parent, [v681]);
  parent.removeChild(anchor);
  var v682 = document.getElementById("startup-text");
  JAM.set(v682, "innerHTML", "");
  var v1304 = document.getElementById("progress-bar-container");
  var v683 = v1304.style;
  v683.visibility = "visible";
  var v684 = {NotifyStart:ShowBox, NotifyError:AddError, NotifyResult:AddResult, NotifyScore:AddScore};
  JAM.call(BenchmarkSuite.RunSuites, BenchmarkSuite, [v684, skipBenchmarks]);
  return
}
function CheckCompatibility() {
  var v1305 = typeof Uint8Array;
  var v685 = v1305 != "undefined";
  if(v685) {
    var v1547 = typeof Float64Array;
    var v1306 = v1547 != "undefined";
    if(v1306) {
      var v1676 = new Uint8Array(0);
      var v1640 = v1676.subarray;
      var v1548 = typeof v1640;
      v1306 = v1548 != "undefined"
    }
    v685 = v1306
  }
  var hasTypedArrays = v685;
  var v687 = !hasTypedArrays;
  if(v687) {
    console.log("Typed Arrays not supported");
    var v1307 = document.getElementById("alertbox");
    var v686 = v1307.style;
    v686.display = "block"
  }
  var v1641 = window.document;
  var v1549 = v1641.URL;
  var v1308 = v1549.indexOf("skip_zlib=1");
  var v688 = v1308 >= 0;
  if(v688) {
    skipBenchmarks.push("zlib")
  }
  var v1642 = window.document;
  var v1550 = v1642.URL;
  var v1309 = v1550.indexOf("auto=1");
  var v689 = v1309 >= 0;
  if(v689) {
    Run()
  }
  return
}
function Load() {
  JAM.call(setTimeout, null, [CheckCompatibility, 200]);
  return
}
var performance = performance || {};
var v690 = performance;
var v1739 = v3();
v690.now = v1739;
var v691 = BenchmarkResult.prototype;
v691.valueOf = v4;
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
var v692 = BenchmarkSuite.prototype;
v692.NotifyStep = v15;
var v693 = BenchmarkSuite.prototype;
v693.NotifyResult = v16;
var v694 = BenchmarkSuite.prototype;
v694.NotifySkipped = v17;
var v695 = BenchmarkSuite.prototype;
v695.NotifyError = v18;
var v696 = BenchmarkSuite.prototype;
v696.RunSingleBenchmark = v19;
var v697 = BenchmarkSuite.prototype;
v697.RunStep = v20;
var v698 = [266181];
var v1310 = new Benchmark("Encrypt", true, false, 3900, encrypt);
var v1311 = new Benchmark("Decrypt", true, false, 220, decrypt);
var v699 = [v1310, v1311];
var Crypto = new BenchmarkSuite("Crypto", v698, v699);
var dbits;
var BI_DB;
var BI_DM;
var BI_DV;
var BI_FP;
var BI_FV;
var BI_F1;
var BI_F2;
var canary = 0xdeadbeefcafe;
var v700 = canary & 16777215;
var j_lm = v700 == 15715070;
setupEngine = v21;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
var BI_RC = new Array;
var rr;
var vv;
rr = "0".charCodeAt(0);
vv = 0;
var v702 = vv <= 9;
for(;v702;) {
  var v701 = rr;
  rr = rr + 1;
  BI_RC[v701] = vv;
  vv = vv + 1;
  v702 = vv <= 9
}
rr = "a".charCodeAt(0);
vv = 10;
var v704 = vv < 36;
for(;v704;) {
  var v703 = rr;
  rr = rr + 1;
  BI_RC[v703] = vv;
  vv = vv + 1;
  v704 = vv < 36
}
rr = "A".charCodeAt(0);
vv = 10;
var v706 = vv < 36;
for(;v706;) {
  var v705 = rr;
  rr = rr + 1;
  BI_RC[v705] = vv;
  vv = vv + 1;
  v706 = vv < 36
}
var v707 = Classic.prototype;
v707.convert = cConvert;
var v708 = Classic.prototype;
v708.revert = cRevert;
var v709 = Classic.prototype;
v709.reduce = cReduce;
var v710 = Classic.prototype;
v710.mulTo = cMulTo;
var v711 = Classic.prototype;
v711.sqrTo = cSqrTo;
var v712 = Montgomery.prototype;
v712.convert = montConvert;
var v713 = Montgomery.prototype;
v713.revert = montRevert;
var v714 = Montgomery.prototype;
v714.reduce = montReduce;
var v715 = Montgomery.prototype;
v715.mulTo = montMulTo;
var v716 = Montgomery.prototype;
v716.sqrTo = montSqrTo;
var v717 = BigInteger.prototype;
v717.copyTo = bnpCopyTo;
var v718 = BigInteger.prototype;
v718.fromInt = bnpFromInt;
var v719 = BigInteger.prototype;
v719.fromString = bnpFromString;
var v720 = BigInteger.prototype;
v720.clamp = bnpClamp;
var v721 = BigInteger.prototype;
v721.dlShiftTo = bnpDLShiftTo;
var v722 = BigInteger.prototype;
v722.drShiftTo = bnpDRShiftTo;
var v723 = BigInteger.prototype;
v723.lShiftTo = bnpLShiftTo;
var v724 = BigInteger.prototype;
v724.rShiftTo = bnpRShiftTo;
var v725 = BigInteger.prototype;
v725.subTo = bnpSubTo;
var v726 = BigInteger.prototype;
v726.multiplyTo = bnpMultiplyTo;
var v727 = BigInteger.prototype;
v727.squareTo = bnpSquareTo;
var v728 = BigInteger.prototype;
v728.divRemTo = bnpDivRemTo;
var v729 = BigInteger.prototype;
v729.invDigit = bnpInvDigit;
var v730 = BigInteger.prototype;
v730.isEven = bnpIsEven;
var v731 = BigInteger.prototype;
v731.exp = bnpExp;
var v732 = BigInteger.prototype;
v732.toString = bnToString;
var v733 = BigInteger.prototype;
v733.negate = bnNegate;
var v734 = BigInteger.prototype;
v734.abs = bnAbs;
var v735 = BigInteger.prototype;
v735.compareTo = bnCompareTo;
var v736 = BigInteger.prototype;
v736.bitLength = bnBitLength;
var v737 = BigInteger.prototype;
v737.mod = bnMod;
var v738 = BigInteger.prototype;
v738.modPowInt = bnModPowInt;
var v739 = BigInteger;
var v1740 = nbv(0);
v739.ZERO = v1740;
var v740 = BigInteger;
var v1741 = nbv(1);
v740.ONE = v1741;
var v741 = NullExp.prototype;
v741.convert = nNop;
var v742 = NullExp.prototype;
v742.revert = nNop;
var v743 = NullExp.prototype;
v743.mulTo = nMulTo;
var v744 = NullExp.prototype;
v744.sqrTo = nSqrTo;
var v745 = Barrett.prototype;
v745.convert = barrettConvert;
var v746 = Barrett.prototype;
v746.revert = barrettRevert;
var v747 = Barrett.prototype;
v747.reduce = barrettReduce;
var v748 = Barrett.prototype;
v748.mulTo = barrettMulTo;
var v749 = Barrett.prototype;
v749.sqrTo = barrettSqrTo;
var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509];
var v750 = 1 << 26;
var v1551 = lowprimes.length;
var v1312 = v1551 - 1;
introspect(JAM.policy.pC545F199BE443C5FB0DC91C55134FB746FD8B074) {
  var v751 = lowprimes[v1312]
}
var lplim = v750 / v751;
var v752 = BigInteger.prototype;
v752.chunkSize = bnpChunkSize;
var v753 = BigInteger.prototype;
v753.toRadix = bnpToRadix;
var v754 = BigInteger.prototype;
v754.fromRadix = bnpFromRadix;
var v755 = BigInteger.prototype;
v755.fromNumber = bnpFromNumber;
var v756 = BigInteger.prototype;
v756.bitwiseTo = bnpBitwiseTo;
var v757 = BigInteger.prototype;
v757.changeBit = bnpChangeBit;
var v758 = BigInteger.prototype;
v758.addTo = bnpAddTo;
var v759 = BigInteger.prototype;
v759.dMultiply = bnpDMultiply;
var v760 = BigInteger.prototype;
v760.dAddOffset = bnpDAddOffset;
var v761 = BigInteger.prototype;
v761.multiplyLowerTo = bnpMultiplyLowerTo;
var v762 = BigInteger.prototype;
v762.multiplyUpperTo = bnpMultiplyUpperTo;
var v763 = BigInteger.prototype;
v763.modInt = bnpModInt;
var v764 = BigInteger.prototype;
v764.millerRabin = bnpMillerRabin;
var v765 = BigInteger.prototype;
v765.clone = bnClone;
var v766 = BigInteger.prototype;
v766.intValue = bnIntValue;
var v767 = BigInteger.prototype;
v767.byteValue = bnByteValue;
var v768 = BigInteger.prototype;
v768.shortValue = bnShortValue;
var v769 = BigInteger.prototype;
v769.signum = bnSigNum;
var v770 = BigInteger.prototype;
v770.toByteArray = bnToByteArray;
var v771 = BigInteger.prototype;
v771.equals = bnEquals;
var v772 = BigInteger.prototype;
v772.min = bnMin;
var v773 = BigInteger.prototype;
v773.max = bnMax;
var v774 = BigInteger.prototype;
v774.and = bnAnd;
var v775 = BigInteger.prototype;
v775.or = bnOr;
var v776 = BigInteger.prototype;
v776.xor = bnXor;
var v777 = BigInteger.prototype;
v777.andNot = bnAndNot;
var v778 = BigInteger.prototype;
v778.not = bnNot;
var v779 = BigInteger.prototype;
v779.shiftLeft = bnShiftLeft;
var v780 = BigInteger.prototype;
v780.shiftRight = bnShiftRight;
var v781 = BigInteger.prototype;
v781.getLowestSetBit = bnGetLowestSetBit;
var v782 = BigInteger.prototype;
v782.bitCount = bnBitCount;
var v783 = BigInteger.prototype;
v783.testBit = bnTestBit;
var v784 = BigInteger.prototype;
v784.setBit = bnSetBit;
var v785 = BigInteger.prototype;
v785.clearBit = bnClearBit;
var v786 = BigInteger.prototype;
v786.flipBit = bnFlipBit;
var v787 = BigInteger.prototype;
v787.add = bnAdd;
var v788 = BigInteger.prototype;
v788.subtract = bnSubtract;
var v789 = BigInteger.prototype;
v789.multiply = bnMultiply;
var v790 = BigInteger.prototype;
v790.divide = bnDivide;
var v791 = BigInteger.prototype;
v791.remainder = bnRemainder;
var v792 = BigInteger.prototype;
v792.divideAndRemainder = bnDivideAndRemainder;
var v793 = BigInteger.prototype;
v793.modPow = bnModPow;
var v794 = BigInteger.prototype;
v794.modInverse = bnModInverse;
var v795 = BigInteger.prototype;
v795.pow = bnPow;
var v796 = BigInteger.prototype;
v796.gcd = bnGCD;
var v797 = BigInteger.prototype;
v797.isProbablePrime = bnIsProbablePrime;
var v798 = Arcfour.prototype;
v798.init = ARC4init;
var v799 = Arcfour.prototype;
v799.next = ARC4next;
var rng_psize = 256;
var rng_state;
var rng_pool;
var rng_pptr;
var v804 = rng_pool == null;
if(v804) {
  rng_pool = new Array;
  rng_pptr = 0;
  var t;
  var v803 = rng_pptr < rng_psize;
  for(;v803;) {
    var v1313 = Math.random();
    var v800 = 65536 * v1313;
    t = Math.floor(v800);
    var v801 = rng_pptr;
    rng_pptr = rng_pptr + 1;
    rng_pool[v801] = t >>> 8;
    var v802 = rng_pptr;
    rng_pptr = rng_pptr + 1;
    rng_pool[v802] = t & 255;
    v803 = rng_pptr < rng_psize
  }
  rng_pptr = 0;
  rng_seed_time()
}
var v805 = SecureRandom.prototype;
v805.nextBytes = rng_get_bytes;
var v806 = RSAKey.prototype;
v806.doPublic = RSADoPublic;
var v807 = RSAKey.prototype;
v807.setPublic = RSASetPublic;
var v808 = RSAKey.prototype;
v808.encrypt = RSAEncrypt;
var v809 = RSAKey.prototype;
v809.doPrivate = RSADoPrivate;
var v810 = RSAKey.prototype;
v810.setPrivate = RSASetPrivate;
var v811 = RSAKey.prototype;
v811.setPrivateEx = RSASetPrivateEx;
var v812 = RSAKey.prototype;
v812.generate = RSAGenerate;
var v813 = RSAKey.prototype;
v813.decrypt = RSADecrypt;
nValue = "a5261939975948bb7a58dffe5ff54e65f0498f9175f5a09288810b8975871e99af3b5dd94057b0fc07535f5f97444504fa35169d461d0d30cf0192e307727c065168c788771c561a9400fb49175e9e6aa4e23fe11af69e9412dd23b0cb6684c4c2429bce139e848ab26d0829073351f4acd36074eafd036a5eb83359d2a698d3";
eValue = "10001";
dValue = "8e9912f6d3645894e8d38cb58c0db81ff516cf4c7e5a14c7f1eddb1459d2cded4d8d293fc97aee6aefb861859c8b6a3d1dfe710463e1f9ddc72048c09751971c4a580aa51eb523357a3cc48d31cfad1d4a165066ed92d4748fb6571211da5cb14bc11b6e2df7c1a559e6d5ac1cd5c94703a22891464fba23d0d965086277a161";
pValue = "d090ce58a92c75233a6486cb0a9209bf3583b64f540c76f5294bb97d285eed33aec220bde14b2417951178ac152ceab6da7090905b478195498b352048f15e7d";
qValue = "cab575dc652bb66df15a0359609d51d1db184750c00c6698b90ef3465c99655103edbf0d54c56aec0ce3c4d22592338092a126a0cc49f65a4a30d222b411e58f";
dmp1Value = "1a24bca8e273df2f0e47c199bbf678604e7df7215480c77c8db39f49b000ce2cf7500038acfff5433b7d582a01f1826e6f4d42e1c57f5e1fef7b12aabc59fd25";
dmq1Value = "3d06982efbbe47339e1f6d36b1216b8a741d410b0c662f54f7118b27b9a4ec9d914337eb39841d8666f3034408cf94f5b62f11c402fc994fe15a05493150d9fd";
coeffValue = "3a3e731acd8960b7ff9eb81a7ff93bd1cfa74cbd56987db58b4594fb09c09084db1734c8143f98b602b981aaa9243ca28deb69b5b280ee8dcee0fd2625e53250";
JAM.call(setupEngine, null, [am3, 28]);
var TEXT = "The quick brown fox jumped over the extremely lazy frog! " + "Now is the time for all good men to come to the party.";
var encrypted;
var completed = 0;
var benchmarks = BenchmarkSuite.CountBenchmarks();
var success = true;
var latencyBenchmarks = ["Splay", "Mandreel"];
var v814;
var v1552 = typeof skipBenchmarks;
var v1314 = v1552 === "undefined";
if(v1314) {
  v814 = []
}else {
  v814 = skipBenchmarks
}
var skipBenchmarks = v814;
