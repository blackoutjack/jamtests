introspect(JAM.policy.pFull) {
function v4() {
  function v3(url$$6) {
    initialize(url$$6);
    return;
  }
  function v2(features$$7, opt_callback$$2) {
    var urlToLoad;
    var v72 = !features$$7;
    var v125 = !v72;
    if (v125) {
      var v124 = features$$7.length;
      v72 = v124 == 0;
    }
    var v23 = v72;
    if (v23) {
      var v5 = ["Cannot load empty features."];
      warn(v5);
    } else {
      var JSCompiler_inline_result$$6;
      var features$$inline_18 = features$$7;
      var set$$inline_19 = toSet(loadedFeatures);
      var isSubset$$inline_20 = !0;
      var i$$inline_21 = 0;
      var v73 = isSubset$$inline_20;
      if (v73) {
        var v126 = features$$inline_18.length;
        v73 = i$$inline_21 < v126;
      }
      var v7 = v73;
      for (;v7;) {
        var v6 = isSubset$$inline_20;
        if (v6) {
          var v74 = features$$inline_18[i$$inline_21];
          v6 = set$$inline_19[v74];
        }
        isSubset$$inline_20 = v6;
        i$$inline_21++;
        var v75 = isSubset$$inline_20;
        if (v75) {
          var v127 = features$$inline_18.length;
          v75 = i$$inline_21 < v127;
        }
        v7 = v75;
      }
      JSCompiler_inline_result$$6 = isSubset$$inline_20;
      if (JSCompiler_inline_result$$6) {
        var v76 = features$$7.join(",");
        var v8 = ["Cannot load loaded features [", v76, "]."];
        warn(v8);
      } else {
        var v77 = type$$25 === "s";
        var v128 = !v77;
        if (v128) {
          v77 = type$$25 === "i";
        }
        var v22 = v77;
        if (v22) {
          JSCompiler_inline_label_processUrlFromMap_25: {
            var features$$inline_23 = features$$7;
            var v9 = descriptors;
            var v10 = toKey(features$$inline_23, loadedFeatures);
            var version$$inline_24 = v9[v10];
            if (version$$inline_24) {
              var v78 = host + "/";
              var v11 = v78 + version$$inline_24;
              urlToLoad = v11 + ".js";
              break JSCompiler_inline_label_processUrlFromMap_25;
            } else {
              var v79 = features$$inline_23.join(",");
              var v80 = loadedFeatures.join(",");
              var v12 = ["Cannot find features [", v79, "], except [", v80, "]."];
              warn(v12);
            }
            urlToLoad = void 0;
          }
        } else {
          var v21 = type$$25 === "d";
          if (v21) {
            var v13 = host + "/";
            var v14 = toKey(features$$7, loadedFeatures);
            var url$$inline_27 = v13 + v14;
            var v129 = ".js?container=" + container;
            var v81 = v129 + "&c=2";
            url$$inline_27 = url$$inline_27 + v81;
            if (repository) {
              var v130 = "&r=" + repository;
              url$$inline_27 = url$$inline_27 + v130;
            }
            urlToLoad = url$$inline_27;
          } else {
            var v82 = type$$25 === "r";
            var v131 = !v82;
            if (v131) {
              v82 = type$$25 === "f";
            }
            var v20 = v82;
            if (v20) {
              var v83 = host + "/";
              var v15 = v83 + repository;
              var JSCompiler_temp_const$$39 = v15 + "/";
              var JSCompiler_inline_result$$40;
              var opt_loadFeatures$$inline_42 = loadedFeatures;
              var v16 = normalize(features$$7);
              var result$$inline_43 = v16.join("__");
              var v84 = opt_loadFeatures$$inline_42;
              if (v84) {
                var v132 = opt_loadFeatures$$inline_42.length;
                v84 = v132 > 0;
              }
              var v17 = v84;
              if (v17) {
                var v162 = normalize(opt_loadFeatures$$inline_42);
                var v156 = v162.join("__");
                var v133 = "--" + v156;
                result$$inline_43 = result$$inline_43 + v133;
              }
              JSCompiler_inline_result$$40 = result$$inline_43;
              var v18 = JSCompiler_temp_const$$39 + JSCompiler_inline_result$$40;
              urlToLoad = v18 + ".js";
            } else {
              var v85 = features$$7.join(",");
              var v19 = ["Cannot respond for features [", v85, "]."];
              warn(v19);
            }
          }
        }
      }
    }
    var features$$inline_29 = features$$7;
    var opt_url$$inline_30 = urlToLoad;
    var opt_callback$$inline_31 = opt_callback$$2;
    if (opt_url$$inline_30) {
      var JSCompiler_temp_const$$34;
      var jsl$$inline_47 = window["___jsl"];
      var v86 = jsl$$inline_47 && opt_callback$$inline_31;
      if (v86) {
        v86 = 1;
      }
      var v25 = v86;
      if (v25) {
        var v24 = jsl$$inline_47["c"];
        if (v24) {
          throw "Cannot continue until a pending callback completes.";
        }
        jsl$$inline_47["c"] = opt_callback$$inline_31;
        jsl$$inline_47["o"] = 1;
      }
      JSCompiler_temp_const$$34 = void 0;
      var JSCompiler_inline_result$$35;
      var url$$inline_49 = opt_url$$inline_30;
      var JSCompiler_inline_result$$54;
      JSCompiler_inline_label_canLoadUrl_58: {
        var url$$inline_55 = url$$inline_49;
        var v87 = type$$25 === "s";
        var v134 = !v87;
        if (v134) {
          v87 = type$$25 === "r";
        }
        var v26 = v87;
        if (v26) {
          JSCompiler_inline_result$$54 = url$$inline_55.match(VALID_SCS_URL_REGEX);
          break JSCompiler_inline_label_canLoadUrl_58;
        }
        var JSCompiler_inline_result$$inline_56;
        var jsl$$inline_57 = window["___jsl"];
        var v27 = jsl$$inline_57;
        if (v27) {
          var v135 = jsl$$inline_57["m"];
          var v88 = v135 == "dev";
          var v137 = !v88;
          if (v137) {
            var v136 = jsl$$inline_57["m"];
            v88 = v136 == "google";
          }
          v27 = v88;
        }
        JSCompiler_inline_result$$inline_56 = v27;
        var v28 = JSCompiler_inline_result$$inline_56;
        if (v28) {
          v28 = url$$inline_55.match(VALID_GOOGLE_URL_REGEX);
        }
        JSCompiler_inline_result$$54 = v28;
      }
      var v30 = !JSCompiler_inline_result$$54;
      if (v30) {
        var v29 = "Cannot load url " + url$$inline_49;
        throw v29 + ".";
      }
      var v33 = shouldLoadSync();
      if (v33) {
        var v89 = '<script src="' + url$$inline_49;
        var v31 = v89 + '">\x3c/script>';
        document.write(v31);
      } else {
        var script$$inline_50 = document.createElement("script");
        script$$inline_50.setAttribute("src", url$$inline_49);
        var v90 = document.getElementsByTagName("head");
        var v32 = v90[0];
        v32.appendChild(script$$inline_50);
      }
      JSCompiler_inline_result$$35 = void 0;
      JSCompiler_temp_const$$34;
      var JSCompiler_temp_const$$36 = JSCompiler_inline_result$$35;
      var JSCompiler_inline_result$$37;
      var v34 = loadedFeatures.concat(features$$inline_29);
      loadedFeatures = normalize(v34);
      JSCompiler_inline_result$$37 = void 0;
    } else {
      if (opt_callback$$inline_31) {
        opt_callback$$inline_31();
      }
    }
    return;
  }
  function toKey(reqFeatures, opt_loadFeatures) {
    var v35 = normalize(reqFeatures);
    var result = v35.join(":");
    var v91 = opt_loadFeatures;
    if (v91) {
      var v138 = opt_loadFeatures.length;
      v91 = v138 > 0;
    }
    var v36 = v91;
    if (v36) {
      var v163 = normalize(opt_loadFeatures);
      var v157 = v163.join(":");
      var v139 = "!" + v157;
      result = result + v139;
    }
    return result;
  }
  function toSet(array$$9) {
    var result$$2 = {};
    var i$$1 = 0;
    var v92 = array$$9.length;
    var v38 = i$$1 < v92;
    for (;v38;) {
      var v37 = array$$9[i$$1];
      result$$2[v37] = !0;
      i$$1++;
      var v93 = array$$9.length;
      v38 = i$$1 < v93;
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
    var v94 = window["___gapisync"];
    var v95 = !0;
    var v40 = v94 === v95;
    if (v40) {
      return!0;
    }
    var metas = document.getElementsByTagName("meta");
    var i$$3 = 0;
    var v96 = metas.length;
    var v42 = i$$3 < v96;
    for (;v42;) {
      var meta = metas[i$$3];
      var v140 = meta.getAttribute("name");
      var v97 = "generator" == v140;
      var v142 = !v97;
      if (v142) {
        var v141 = meta.getAttribute("content");
        v97 = "blogger" == v141;
      }
      var v41 = v97;
      if (v41) {
        return!0;
      }
      ++i$$3;
      var v98 = metas.length;
      v42 = i$$3 < v98;
    }
    return!1;
  }
  function warn(values$$4) {
    if (console) {
      var v99 = values$$4.join("");
      console.warn(v99);
    }
    return;
  }
  function initDescriptors(values$$5) {
    var i$$4 = 0;
    var v100 = values$$5.length;
    var v46 = i$$4 < v100;
    for (;v46;) {
      var value$$27 = values$$5[i$$4];
      var versionParts = value$$27.split("@");
      var JSCompiler_temp_const$$7 = descriptors;
      var JSCompiler_inline_result$$8;
      var v43 = versionParts[0];
      var featureParts$$inline_12 = v43.split("!");
      var v101 = featureParts$$inline_12[0];
      var v44 = v101.split(":");
      var req$$inline_13 = normalize(v44);
      var v45 = featureParts$$inline_12[1];
      if (v45) {
        var v143 = featureParts$$inline_12[1];
        var v102 = v143.split(":");
        v45 = normalize(v102);
      }
      var loaded$$inline_14 = v45;
      JSCompiler_inline_result$$8 = toKey(req$$inline_13, loaded$$inline_14);
      JSCompiler_temp_const$$7[JSCompiler_inline_result$$8] = versionParts[1];
      i$$4++;
      var v103 = values$$5.length;
      v46 = i$$4 < v103;
    }
    return;
  }
  function getLastHint(pattern$$1) {
    var r = parentUrl.match(pattern$$1);
    var v47 = r;
    if (v47) {
      var v144 = r.length;
      var v104 = v144 - 1;
      v47 = r[v104];
    }
    return v47;
  }
  function initialize(url$$5) {
    host = type$$25 = 0;
    descriptors = {};
    loadedFeatures = [];
    var v48 = window.console;
    var v106 = !v48;
    if (v106) {
      var v105 = window.opera;
      if (v105) {
        var v145 = window.opera;
        v105 = v145.postError;
      }
      v48 = v105;
    }
    console = v48;
    parentUrl = url$$5;
    var JSCompiler_temp$$5;
    var v107 = getLastHint(QUERY_PATTERN);
    var v146 = !v107;
    if (v146) {
      v107 = getLastHint(FRAGMENT_PATTERN);
    }
    var v50 = JSCompiler_temp$$5 = v107;
    if (v50) {
    } else {
      var jsl$$inline_16 = window["___jsl"];
      var v49 = jsl$$inline_16;
      if (v49) {
        v49 = jsl$$inline_16["h"];
      }
      JSCompiler_temp$$5 = v49;
    }
    var hint = JSCompiler_temp$$5;
    if (hint) {
      var parts = hint.split(";");
      type$$25 = parts[0];
      var v51;
      var v109 = type$$25 === "s";
      if (v109) {
        host = "https://ssl.gstatic.com/webclient/js";
        var v147 = parts.slice(1);
        v51 = initDescriptors(v147);
      } else {
        var v108;
        var v149 = type$$25 === "i";
        if (v149) {
          host = parts[1];
          var v158 = parts.slice(2);
          v108 = initDescriptors(v158);
        } else {
          var v148;
          var v160 = type$$25 === "d";
          if (v160) {
            host = parts[1];
            repository = parts[2];
            var v164 = parts[3];
            var v167 = !v164;
            if (v167) {
              v164 = "gcjs-3p";
            }
            v148 = container = v164;
          } else {
            var v159;
            var v166 = type$$25 === "r";
            if (v166) {
              host = "https://ssl.gstatic.com/webclient/js";
              v159 = repository = parts[1];
            } else {
              var v165 = type$$25 === "f";
              if (v165) {
                host = parts[1];
                v165 = repository = parts[2];
              }
              v159 = v165;
            }
            v148 = v159;
          }
          v108 = v148;
        }
        v51 = v108;
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
  var v110 = document.location;
  var v52 = v110.href;
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
  return{go:v54, render:v55};
}
function __bsld() {
  var v56 = window.gapi;
  var v111 = window.googleapisv0;
  var p = v56.plusone = v111.plusone;
  var f$$1;
  var v112 = window.___gpq;
  var v58 = f$$1 = v112.shift();
  for (;v58;) {
    var v57 = p[f$$1];
    if (v57) {
      var v113 = p[f$$1];
      var v150 = window.___gpq;
      var v114 = v150.shift();
      v113.apply(p, v114);
    }
    var v115 = window.___gpq;
    v58 = f$$1 = v115.shift();
  }
  var v161 = gadgets.config;
  var v151 = v161.get("gwidget");
  var v116 = v151["parsetags"];
  var v60 = v116 !== "explicit";
  if (v60) {
    var v59 = gapi.plusone;
    v59.go();
  }
  return;
}
function gapi_load(features$$8, opt_callback$$3) {
  var v61 = features$$8.split(":");
  jsloader_load(v61, opt_callback$$3);
  return;
}
var v62 = window.___jsl;
var v117 = !v62;
if (v117) {
  v62 = {};
}
window.___jsl = v62;
var v63 = window.___jsl;
var v152 = window.___jsl;
var v118 = v152.h;
var v153 = !v118;
if (v153) {
  v118 = "s;plusone:googleapis.client@21550740_8d71de52/client;googleapis.proxy@21550740_8d71de52/proxy;plusone:googleapis.client:iframes-styles-bubble@21550740_8d71de52/bubble;iframes-styles-bubble!plusone:googleapis.client@21550740_8d71de52/bubble_only;plusone-unsupported@21550740_8d71de52/unsupported";
}
v63.h = v118;
window.___gpq = [];
var v64 = window.gapi;
var v119 = !v64;
if (v119) {
  v64 = {};
}
window.gapi = v64;
var v65 = window.gapi;
var v154 = window.gapi;
var v120 = v154.plusone;
var v155 = !v120;
if (v155) {
  v120 = v1();
}
v65.plusone = v120;
var jsloader_load;
var goog;
var v66 = window["___jsl"];
var v121 = !v66;
if (v121) {
  v66 = {};
}
window["___jsl"] = v66;
var v67 = window["___jsl"];
v67["u"] = "https://apis.google.com/js/plusone.js";
var v68 = window["___jsl"];
v68["f"] = ["googleapis.client", "plusone"];
var v69 = window["jsloader"];
var v122 = !v69;
if (v122) {
  v69 = {};
}
var jsloader = v69;
var v70 = window["gapi"];
var v123 = !v70;
if (v123) {
  v70 = {};
}
var gapi = v70;
v4();
var v71 = window["__bsld"];
gapi_load("googleapis.client:plusone", v71)

}
