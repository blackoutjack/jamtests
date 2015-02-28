
JAM.startProfile('load');
function v4() {
  function v3(url$$6) {
    initialize(url$$6);
    return;
  }
  function v2(features$$7, opt_callback$$2) {
    var urlToLoad;
    var v71 = !features$$7;
    var v124 = !v71;
    if (v124) {
      var v123 = features$$7.length;
      v71 = v123 == 0;
    }
    var v23 = v71;
    if (v23) {
      var v5 = ["Cannot load empty features."];
      warn(v5);
    } else {
      var JSCompiler_inline_result$$1;
      var features$$inline_15 = features$$7;
      var set$$inline_16 = toSet(loadedFeatures);
      var isSubset$$inline_17 = !0;
      var i$$inline_18 = 0;
      var v72 = isSubset$$inline_17;
      if (v72) {
        var v125 = features$$inline_15.length;
        v72 = i$$inline_18 < v125;
      }
      var v7 = v72;
      for (;v7;) {
        var v6 = isSubset$$inline_17;
        if (v6) {
          var v73 = features$$inline_15[i$$inline_18];
          v6 = set$$inline_16[v73];
        }
        isSubset$$inline_17 = v6;
        i$$inline_18++;
        var v74 = isSubset$$inline_17;
        if (v74) {
          var v126 = features$$inline_15.length;
          v74 = i$$inline_18 < v126;
        }
        v7 = v74;
      }
      JSCompiler_inline_result$$1 = isSubset$$inline_17;
      if (JSCompiler_inline_result$$1) {
        var v75 = features$$7.join(",");
        var v8 = ["Cannot load loaded features [", v75, "]."];
        warn(v8);
      } else {
        var v76 = type$$25 === "s";
        var v127 = !v76;
        if (v127) {
          v76 = type$$25 === "i";
        }
        var v22 = v76;
        if (v22) {
          JSCompiler_inline_label_processUrlFromMap_22: {
            var features$$inline_20 = features$$7;
            var v9 = descriptors;
            var v10 = toKey(features$$inline_20, loadedFeatures);
            var version$$inline_21 = v9[v10];
            if (version$$inline_21) {
              var v77 = host + "/";
              var v11 = v77 + version$$inline_21;
              urlToLoad = v11 + ".js";
              break JSCompiler_inline_label_processUrlFromMap_22;
            } else {
              var v78 = features$$inline_20.join(",");
              var v79 = loadedFeatures.join(",");
              var v12 = ["Cannot find features [", v78, "], except [", v79, "]."];
              warn(v12);
            }
            urlToLoad = void 0;
          }
        } else {
          var v21 = type$$25 === "d";
          if (v21) {
            var v13 = host + "/";
            var v14 = toKey(features$$7, loadedFeatures);
            var url$$inline_24 = v13 + v14;
            var v128 = ".js?container=" + container;
            var v80 = v128 + "&c=2";
            url$$inline_24 = url$$inline_24 + v80;
            if (repository) {
              var v129 = "&r=" + repository;
              url$$inline_24 = url$$inline_24 + v129;
            }
            urlToLoad = url$$inline_24;
          } else {
            var v81 = type$$25 === "r";
            var v130 = !v81;
            if (v130) {
              v81 = type$$25 === "f";
            }
            var v20 = v81;
            if (v20) {
              var v82 = host + "/";
              var v15 = v82 + repository;
              var JSCompiler_temp_const$$31 = v15 + "/";
              var JSCompiler_inline_result$$32;
              var opt_loadFeatures$$inline_40 = loadedFeatures;
              var v16 = normalize(features$$7);
              var result$$inline_41 = v16.join("__");
              var v83 = opt_loadFeatures$$inline_40;
              if (v83) {
                var v131 = opt_loadFeatures$$inline_40.length;
                v83 = v131 > 0;
              }
              var v17 = v83;
              if (v17) {
                var v161 = normalize(opt_loadFeatures$$inline_40);
                var v155 = v161.join("__");
                var v132 = "--" + v155;
                result$$inline_41 = result$$inline_41 + v132;
              }
              JSCompiler_inline_result$$32 = result$$inline_41;
              var v18 = JSCompiler_temp_const$$31 + JSCompiler_inline_result$$32;
              urlToLoad = v18 + ".js";
            } else {
              var v84 = features$$7.join(",");
              var v19 = ["Cannot respond for features [", v84, "]."];
              warn(v19);
            }
          }
        }
      }
    }
    var features$$inline_26 = features$$7;
    var opt_url$$inline_27 = urlToLoad;
    var opt_callback$$inline_28 = opt_callback$$2;
    if (opt_url$$inline_27) {
      var JSCompiler_inline_result$$34;
      var opt_count$$inline_44 = 1;
      var jsl$$inline_45 = window["___jsl"];
      var v85 = jsl$$inline_45 && opt_callback$$inline_28;
      if (v85) {
        v85 = opt_count$$inline_44;
      }
      var v25 = v85;
      if (v25) {
        var v24 = jsl$$inline_45["c"];
        if (v24) {
          throw "Cannot continue until a pending callback completes.";
        }
        jsl$$inline_45["c"] = opt_callback$$inline_28;
        jsl$$inline_45["o"] = opt_count$$inline_44;
      }
      JSCompiler_inline_result$$34 = void 0;
      var JSCompiler_temp_const$$35 = JSCompiler_inline_result$$34;
      var JSCompiler_inline_result$$36;
      var url$$inline_47 = opt_url$$inline_27;
      var JSCompiler_inline_result$$52;
      JSCompiler_inline_label_canLoadUrl_54: {
        var url$$inline_53 = url$$inline_47;
        var v86 = type$$25 === "s";
        var v133 = !v86;
        if (v133) {
          v86 = type$$25 === "r";
        }
        var v26 = v86;
        if (v26) {
          JSCompiler_inline_result$$52 = url$$inline_53.match(VALID_SCS_URL_REGEX);
          break JSCompiler_inline_label_canLoadUrl_54;
        }
        var JSCompiler_inline_result$$55;
        var jsl$$inline_56 = window["___jsl"];
        var v27 = jsl$$inline_56;
        if (v27) {
          var v134 = jsl$$inline_56["m"];
          var v87 = v134 == "dev";
          var v136 = !v87;
          if (v136) {
            var v135 = jsl$$inline_56["m"];
            v87 = v135 == "google";
          }
          v27 = v87;
        }
        JSCompiler_inline_result$$55 = v27;
        var v28 = JSCompiler_inline_result$$55;
        if (v28) {
          v28 = url$$inline_53.match(VALID_GOOGLE_URL_REGEX);
        }
        JSCompiler_inline_result$$52 = v28;
      }
      var v30 = !JSCompiler_inline_result$$52;
      if (v30) {
        var v29 = "Cannot load url " + url$$inline_47;
        throw v29 + ".";
      }
      var v33 = shouldLoadSync();
      if (v33) {
        var v88 = '<script src="' + url$$inline_47;
        var v31 = v88 + '">\x3c/script>';
        document.write(v31);
      } else {
        var script$$inline_48 = document.createElement("script");
        script$$inline_48.setAttribute("src", url$$inline_47);
        var v89 = document.getElementsByTagName("head");
        var v32 = v89[0];
        v32.appendChild(script$$inline_48);
      }
      JSCompiler_inline_result$$36 = void 0;
      JSCompiler_temp_const$$35;
      var JSCompiler_temp_const$$37 = JSCompiler_inline_result$$36;
      var JSCompiler_inline_result$$38;
      var v34 = loadedFeatures.concat(features$$inline_26);
      loadedFeatures = normalize(v34);
      JSCompiler_inline_result$$38 = void 0;
    } else {
      if (opt_callback$$inline_28) {
        opt_callback$$inline_28();
      }
    }
    return;
  }
  function toKey(reqFeatures, opt_loadFeatures) {
    var v35 = normalize(reqFeatures);
    var result = v35.join(":");
    var v90 = opt_loadFeatures;
    if (v90) {
      var v137 = opt_loadFeatures.length;
      v90 = v137 > 0;
    }
    var v36 = v90;
    if (v36) {
      var v162 = normalize(opt_loadFeatures);
      var v156 = v162.join(":");
      var v138 = "!" + v156;
      result = result + v138;
    }
    return result;
  }
  function toSet(array$$9) {
    var result$$2 = {};
    var i$$1 = 0;
    var v91 = array$$9.length;
    var v38 = i$$1 < v91;
    for (;v38;) {
      var v37 = array$$9[i$$1];
      result$$2[v37] = !0;
      i$$1++;
      var v92 = array$$9.length;
      v38 = i$$1 < v92;
    }
    return result$$2;
  }
  function normalize(features$$1) {
    var result$$3 = [];
    var s$$2;
    var v39 = toSet(features$$1);
    for (s$$2 in v39) {
      result$$3.push(s$$2);
    }
    return result$$3.sort();
  }
  function shouldLoadSync() {
    var v93 = window["___gapisync"];
    var v94 = !0;
    var v40 = v93 === v94;
    if (v40) {
      return !0;
    }
    var metas = document.getElementsByTagName("meta");
    var i$$3 = 0;
    var v95 = metas.length;
    var v42 = i$$3 < v95;
    for (;v42;) {
      var meta = metas[i$$3];
      var v139 = meta.getAttribute("name");
      var v96 = "generator" == v139;
      var v141 = !v96;
      if (v141) {
        var v140 = meta.getAttribute("content");
        v96 = "blogger" == v140;
      }
      var v41 = v96;
      if (v41) {
        return !0;
      }
      ++i$$3;
      var v97 = metas.length;
      v42 = i$$3 < v97;
    }
    return !1;
  }
  function warn(values$$4) {
    if (console) {
      var v98 = values$$4.join("");
      console.warn(v98);
    }
    return;
  }
  function initDescriptors(values$$5) {
    var i$$4 = 0;
    var v99 = values$$5.length;
    var v46 = i$$4 < v99;
    for (;v46;) {
      var value$$27 = values$$5[i$$4];
      var versionParts = value$$27.split("@");
      var JSCompiler_temp_const$$2 = descriptors;
      var JSCompiler_inline_result$$3;
      var v43 = versionParts[0];
      var featureParts$$inline_9 = v43.split("!");
      var v100 = featureParts$$inline_9[0];
      var v44 = v100.split(":");
      var req$$inline_10 = normalize(v44);
      var v45 = featureParts$$inline_9[1];
      if (v45) {
        var v142 = featureParts$$inline_9[1];
        var v101 = v142.split(":");
        v45 = normalize(v101);
      }
      var loaded$$inline_11 = v45;
      JSCompiler_inline_result$$3 = toKey(req$$inline_10, loaded$$inline_11);
      JSCompiler_temp_const$$2[JSCompiler_inline_result$$3] = versionParts[1];
      i$$4++;
      var v102 = values$$5.length;
      v46 = i$$4 < v102;
    }
    return;
  }
  function getLastHint(pattern$$1) {
    var r = parentUrl.match(pattern$$1);
    var v47 = r;
    if (v47) {
      var v143 = r.length;
      var v103 = v143 - 1;
      v47 = r[v103];
    }
    return v47;
  }
  function initialize(url$$5) {
    host = type$$25 = 0;
    descriptors = {};
    loadedFeatures = [];
    var v48 = window.console;
    var v105 = !v48;
    if (v105) {
      var v104 = window.opera;
      if (v104) {
        var v144 = window.opera;
        v104 = v144.postError;
      }
      v48 = v104;
    }
    console = v48;
    parentUrl = url$$5;
    var JSCompiler_temp$$7;
    var v106 = getLastHint(QUERY_PATTERN);
    var v145 = !v106;
    if (v145) {
      v106 = getLastHint(FRAGMENT_PATTERN);
    }
    var v50 = JSCompiler_temp$$7 = v106;
    if (v50) {
    } else {
      var jsl$$inline_13 = window["___jsl"];
      var v49 = jsl$$inline_13;
      if (v49) {
        v49 = jsl$$inline_13["h"];
      }
      JSCompiler_temp$$7 = v49;
    }
    var hint = JSCompiler_temp$$7;
    if (hint) {
      var parts = hint.split(";");
      type$$25 = parts[0];
      var v51;
      var v108 = type$$25 === "s";
      if (v108) {
        host = "https://ssl.gstatic.com/webclient/js";
        var v146 = parts.slice(1);
        v51 = initDescriptors(v146);
      } else {
        var v107;
        var v148 = type$$25 === "i";
        if (v148) {
          host = parts[1];
          var v157 = parts.slice(2);
          v107 = initDescriptors(v157);
        } else {
          var v147;
          var v159 = type$$25 === "d";
          if (v159) {
            host = parts[1];
            repository = parts[2];
            var v163 = parts[3];
            var v166 = !v163;
            if (v166) {
              v163 = "gcjs-3p";
            }
            v147 = container = v163;
          } else {
            var v158;
            var v165 = type$$25 === "r";
            if (v165) {
              host = "https://ssl.gstatic.com/webclient/js";
              v158 = repository = parts[1];
            } else {
              var v164 = type$$25 === "f";
              if (v164) {
                host = parts[1];
                v164 = repository = parts[2];
              }
              v158 = v164;
            }
            v147 = v158;
          }
          v107 = v147;
        }
        v51 = v107;
      }
      v51;
    }
    return;
  }
  var QUERY_PATTERN = /\?[&|(\S*=\S*&)]*jsh=(\S*)#?/;
  var FRAGMENT_PATTERN = /#[&|(\S*=\S*&)]*jsh=(\S*)/;
  var VALID_SCS_URL_REGEX = /^https:\/\/ssl.gstatic.com\/webclient\/js(\/[a-zA-Z0-9_\-]+)*\/[a-zA-Z0-9_\-\.:!]+\.js$/;
  var VALID_GOOGLE_URL_REGEX = RegExp("^(http:|https:)?(\\/\\/)?([a-zA-Z0-9_\\-]+\\.)*google\\.com(:[0-9]+)?(\\/[a-zA-Z0-9_\\-]+)*\\/[a-zA-Z0-9_\\-\\.:!]+\\.js(\\?[a-zA-Z0-9_\\-&=%]*)?$");
  var type$$25;
  var host;
  var container;
  var repository;
  var descriptors;
  var loadedFeatures;
  var console;
  var parentUrl;
  var v109 = document.location;
  var v52 = v109.href;
  initialize(v52);
  jsloader_load = v2;
  jsloader.reinitialize_ = v3;
  return;
}
function v1() {
  function f(n$$1) {
    function v0() {
      var v53 = window.___gpq;
      v53.push(n$$1, arguments);
      return;
    }
    return v0;
  }
  var v54 = f("go");
  var v55 = f("render");
  return {go:v54, render:v55};
}
function __bsld() {
  var v56 = window.gapi;
  var v110 = window.googleapisv0;
  var p = v56.plusone = v110.plusone;
  var f$$1;
  var v111 = window.___gpq;
  var v58 = f$$1 = v111.shift();
  for (;v58;) {
    var v57 = p[f$$1];
    if (v57) {
      var v112 = p[f$$1];
      var v149 = window.___gpq;
      var v113 = v149.shift();
      v112.apply(p, v113);
    }
    var v114 = window.___gpq;
    v58 = f$$1 = v114.shift();
  }
  var v160 = gadgets.config;
  var v150 = v160.get("gwidget");
  var v115 = v150["parsetags"];
  var v60 = v115 !== "explicit";
  if (v60) {
    var v59 = gapi.plusone;
    v59.go();
  }
  return;
}
function gapi_load() {
  var features$$8 = "googleapis.client:plusone";
  var opt_callback$$3 = window["__bsld"];
  var v61 = features$$8.split(":");
  jsloader_load(v61, opt_callback$$3);
  return;
}
var v62 = window.___jsl;
var v116 = !v62;
if (v116) {
  v62 = {};
}
window.___jsl = v62;
var v63 = window.___jsl;
var v151 = window.___jsl;
var v117 = v151.h;
var v152 = !v117;
if (v152) {
  v117 = "s;plusone:googleapis.client@21550740_8d71de52/client;googleapis.proxy@21550740_8d71de52/proxy;plusone:googleapis.client:iframes-styles-bubble@21550740_8d71de52/bubble;iframes-styles-bubble!plusone:googleapis.client@21550740_8d71de52/bubble_only;plusone-unsupported@21550740_8d71de52/unsupported";
}
v63.h = v117;
window.___gpq = [];
var v64 = window.gapi;
var v118 = !v64;
if (v118) {
  v64 = {};
}
window.gapi = v64;
var v65 = window.gapi;
var v153 = window.gapi;
var v119 = v153.plusone;
var v154 = !v119;
if (v154) {
  v119 = v1();
}
v65.plusone = v119;
var jsloader_load;
var goog;
var v66 = window["___jsl"];
var v120 = !v66;
if (v120) {
  v66 = {};
}
window["___jsl"] = v66;
var v67 = window["___jsl"];
v67["u"] = "https://apis.google.com/js/plusone.js";
var v68 = window["___jsl"];
v68["f"] = ["googleapis.client", "plusone"];
var v69 = window["jsloader"];
var v121 = !v69;
if (v121) {
  v69 = {};
}
var jsloader = v69;
var v70 = window["gapi"];
var v122 = !v70;
if (v122) {
  v70 = {};
}
var gapi = v70;
v4();
gapi_load()

JAM.stopProfile('load');
