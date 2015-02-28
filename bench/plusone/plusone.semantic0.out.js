// plusone.js
function v4() {
  function v3(url$$6) {
    initialize(url$$6);
    return;
  }
  function v2(features$$7, opt_callback$$2) {
    var urlToLoad;
    var v71 = !features$$7;
    if (!v71) {
      v71 = features$$7.length == 0;
    }
    if (v71) {
      warn(["Cannot load empty features."]);
    } else {
      var JSCompiler_inline_result$$1;
      var features$$inline_15 = features$$7;
      var set$$inline_16 = toSet(loadedFeatures);
      var isSubset$$inline_17 = !0;
      var i$$inline_18 = 0;
      var v72 = isSubset$$inline_17;
      if (v72) {
        v72 = i$$inline_18 < features$$inline_15.length;
      }
      var v7 = v72;
      for (;v7;) {
        var v6 = isSubset$$inline_17;
        if (v6) {
          v6 = set$$inline_16[features$$inline_15[i$$inline_18]];
        }
        isSubset$$inline_17 = v6;
        i$$inline_18++;
        var v74 = isSubset$$inline_17;
        if (v74) {
          v74 = i$$inline_18 < features$$inline_15.length;
        }
        v7 = v74;
      }
      JSCompiler_inline_result$$1 = isSubset$$inline_17;
      if (JSCompiler_inline_result$$1) {
        warn(["Cannot load loaded features [", JAM.call(features$$7.join, features$$7, [","], JAM.policy.p2), "]."]);
      } else {
        var v76 = type$$25 === "s";
        if (!v76) {
          v76 = type$$25 === "i";
        }
        if (v76) {
          JSCompiler_inline_label_processUrlFromMap_22: {
            var features$$inline_20 = features$$7;
            var version$$inline_21 = descriptors[toKey(features$$inline_20, loadedFeatures)];
            if (version$$inline_21) {
              urlToLoad = host + "/" + version$$inline_21 + ".js";
              break JSCompiler_inline_label_processUrlFromMap_22;
            } else {
              warn(["Cannot find features [", JAM.call(features$$inline_20.join, features$$inline_20, [","], JAM.policy.p2), "], except [", JAM.call(loadedFeatures.join, loadedFeatures, [","], JAM.policy.p2), "]."]);
            }
            urlToLoad = void 0;
          }
        } else {
          if (type$$25 === "d") {
            var url$$inline_24 = host + "/" + toKey(features$$7, loadedFeatures);
            url$$inline_24 = url$$inline_24 + (".js?container=" + container + "&c=2");
            if (repository) {
              url$$inline_24 = url$$inline_24 + ("&r=" + repository);
            }
            urlToLoad = url$$inline_24;
          } else {
            var v81 = type$$25 === "r";
            if (!v81) {
              v81 = type$$25 === "f";
            }
            if (v81) {
              var JSCompiler_temp_const$$31 = host + "/" + repository + "/";
              var JSCompiler_inline_result$$32;
              var opt_loadFeatures$$inline_40 = loadedFeatures;
              var v16 = normalize(features$$7);
              var result$$inline_41 = JAM.call(v16.join, v16, ["__"], JAM.policy.p2);
              var v83 = opt_loadFeatures$$inline_40;
              if (v83) {
                v83 = opt_loadFeatures$$inline_40.length > 0;
              }
              var v17 = v83;
              if (v17) {
                var v161 = normalize(opt_loadFeatures$$inline_40);
                result$$inline_41 = result$$inline_41 + ("--" + JAM.call(v161.join, v161, ["__"], JAM.policy.p2));
              }
              JSCompiler_inline_result$$32 = result$$inline_41;
              urlToLoad = JSCompiler_temp_const$$31 + JSCompiler_inline_result$$32 + ".js";
            } else {
              warn(["Cannot respond for features [", JAM.call(features$$7.join, features$$7, [","], JAM.policy.p2), "]."]);
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
      if (v85) {
        if (jsl$$inline_45["c"]) {
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
        if (!v86) {
          v86 = type$$25 === "r";
        }
        if (v86) {
          JSCompiler_inline_result$$52 = JAM.call(url$$inline_53.match, url$$inline_53, [VALID_SCS_URL_REGEX], JAM.policy.p3);
          break JSCompiler_inline_label_canLoadUrl_54;
        }
        var JSCompiler_inline_result$$55;
        var jsl$$inline_56 = window["___jsl"];
        var v27 = jsl$$inline_56;
        if (v27) {
          var v87 = jsl$$inline_56["m"] == "dev";
          if (!v87) {
            v87 = jsl$$inline_56["m"] == "google";
          }
          v27 = v87;
        }
        JSCompiler_inline_result$$55 = v27;
        var v28 = JSCompiler_inline_result$$55;
        if (v28) {
          v28 = JAM.call(url$$inline_53.match, url$$inline_53, [VALID_GOOGLE_URL_REGEX], JAM.policy.p3);
        }
        JSCompiler_inline_result$$52 = v28;
      }
      if (!JSCompiler_inline_result$$52) {
        throw "Cannot load url " + url$$inline_47 + ".";
      }
      if (shouldLoadSync()) {
        JAM.call(document.write, document, ['<script src="' + url$$inline_47 + '">\x3c/script>'], JAM.policy.p3);
      } else {
        var script$$inline_48 = JAM.call(document.createElement, document, ["script"], JAM.policy.p3);
        JAM.call(script$$inline_48.setAttribute, script$$inline_48, ["src", url$$inline_47], JAM.policy.p2);
        var v32 = JAM.call(document.getElementsByTagName, document, ["head"], JAM.policy.p2)[0];
        JAM.call(v32.appendChild, v32, [script$$inline_48], JAM.policy.p3);
      }
      JSCompiler_inline_result$$36 = void 0;
      JSCompiler_temp_const$$35;
      var JSCompiler_temp_const$$37 = JSCompiler_inline_result$$36;
      var JSCompiler_inline_result$$38;
      loadedFeatures = normalize(JAM.call(loadedFeatures.concat, loadedFeatures, [features$$inline_26], JAM.policy.p3));
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
    var result = JAM.call(v35.join, v35, [":"], JAM.policy.p2);
    var v90 = opt_loadFeatures;
    if (v90) {
      v90 = opt_loadFeatures.length > 0;
    }
    var v36 = v90;
    if (v36) {
      var v162 = normalize(opt_loadFeatures);
      result = result + ("!" + JAM.call(v162.join, v162, [":"], JAM.policy.p2));
    }
    return result;
  }
  function toSet(array$$9) {
    var result$$2 = {};
    var i$$1 = 0;
    var v38 = i$$1 < array$$9.length;
    for (;v38;) {
      result$$2[array$$9[i$$1]] = !0;
      i$$1++;
      v38 = i$$1 < array$$9.length;
    }
    return result$$2;
  }
  function normalize(features$$1) {
    var result$$3 = [];
    var s$$2;
    for (s$$2 in toSet(features$$1)) {
      JAM.call(result$$3.push, result$$3, [s$$2], JAM.policy.p3);
    }
    return result$$3.sort();
  }
  function shouldLoadSync() {
    if (window["___gapisync"] === !0) {
      return !0;
    }
    var metas = JAM.call(document.getElementsByTagName, document, ["meta"], JAM.policy.p2);
    var i$$3 = 0;
    var v42 = i$$3 < metas.length;
    for (;v42;) {
      var meta = metas[i$$3];
      var v96 = "generator" == JAM.call(meta.getAttribute, meta, ["name"], JAM.policy.p2);
      if (!v96) {
        v96 = "blogger" == JAM.call(meta.getAttribute, meta, ["content"], JAM.policy.p2);
      }
      if (v96) {
        return !0;
      }
      ++i$$3;
      v42 = i$$3 < metas.length;
    }
    return !1;
  }
  function warn(values$$4) {
    if (console) {
      JAM.call(console.warn, console, [JAM.call(values$$4.join, values$$4, [""], JAM.policy.p2)], JAM.policy.p3);
    }
    return;
  }
  function initDescriptors(values$$5) {
    var i$$4 = 0;
    var v46 = i$$4 < values$$5.length;
    for (;v46;) {
      var value$$27 = values$$5[i$$4];
      var versionParts = JAM.call(value$$27.split, value$$27, ["@"], JAM.policy.p2);
      var JSCompiler_temp_const$$2 = descriptors;
      var JSCompiler_inline_result$$3;
      var v43 = versionParts[0];
      var featureParts$$inline_9 = JAM.call(v43.split, v43, ["!"], JAM.policy.p2);
      var v100 = featureParts$$inline_9[0];
      var req$$inline_10 = normalize(JAM.call(v100.split, v100, [":"], JAM.policy.p2));
      var v45 = featureParts$$inline_9[1];
      if (v45) {
        var v142 = featureParts$$inline_9[1];
        v45 = normalize(JAM.call(v142.split, v142, [":"], JAM.policy.p2));
      }
      var loaded$$inline_11 = v45;
      JSCompiler_inline_result$$3 = toKey(req$$inline_10, loaded$$inline_11);
      JAM.set(JSCompiler_temp_const$$2, JSCompiler_inline_result$$3, versionParts[1]);
      i$$4++;
      v46 = i$$4 < values$$5.length;
    }
    return;
  }
  function getLastHint(pattern$$1) {
    var r = JAM.call(parentUrl.match, parentUrl, [pattern$$1], JAM.policy.p3);
    var v47 = r;
    if (v47) {
      v47 = r[r.length - 1];
    }
    return v47;
  }
  function initialize(url$$5) {
    host = type$$25 = 0;
    descriptors = {};
    loadedFeatures = [];
    var v48 = window.console;
    if (!v48) {
      var v104 = window.opera;
      if (v104) {
        v104 = window.opera.postError;
      }
      v48 = v104;
    }
    console = v48;
    parentUrl = url$$5;
    var JSCompiler_temp$$7;
    var v106 = getLastHint(QUERY_PATTERN);
    if (!v106) {
      v106 = getLastHint(FRAGMENT_PATTERN);
    }
    if (JSCompiler_temp$$7 = v106) {
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
      var parts = JAM.call(hint.split, hint, [";"], JAM.policy.p2);
      type$$25 = parts[0];
      var v51;
      if (type$$25 === "s") {
        host = "https://ssl.gstatic.com/webclient/js";
        v51 = initDescriptors(JAM.call(parts.slice, parts, [1], JAM.policy.p2));
      } else {
        var v107;
        if (type$$25 === "i") {
          host = parts[1];
          v107 = initDescriptors(JAM.call(parts.slice, parts, [2], JAM.policy.p2));
        } else {
          var v147;
          if (type$$25 === "d") {
            host = parts[1];
            repository = parts[2];
            var v163 = parts[3];
            if (!v163) {
              v163 = "gcjs-3p";
            }
            v147 = container = v163;
          } else {
            var v158;
            if (type$$25 === "r") {
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
  initialize(document.location.href);
  jsloader_load = v2;
  jsloader.reinitialize_ = v3;
  return;
}
function v1() {
  function f(n$$1) {
    function v0() {
      var v53 = window.___gpq;
      JAM.call(v53.push, v53, [n$$1, arguments], JAM.policy.p3);
      return;
    }
    return v0;
  }
  return {go:f("go"), render:f("render")};
}
function __bsld() {
  var p = window.gapi.plusone = window.googleapisv0.plusone;
  var f$$1;
  var v58 = f$$1 = window.___gpq.shift();
  for (;v58;) {
    var v57 = p[f$$1];
    if (v57) {
      var v112 = p[f$$1];
      JAM.call(v112.apply, v112, [p, window.___gpq.shift()], JAM.policy.p3);
    }
    v58 = f$$1 = window.___gpq.shift();
  }
  var v160 = gadgets.config;
  if (JAM.call(v160.get, v160, ["gwidget"], JAM.policy.p2)["parsetags"] !== "explicit") {
    gapi.plusone.go();
  }
  return;
}
function gapi_load() {
  var features$$8 = "googleapis.client:plusone";
  var opt_callback$$3 = window["__bsld"];
  JAM.call(jsloader_load, null, [JAM.call(features$$8.split, features$$8, [":"], JAM.policy.p2), opt_callback$$3]);
  return;
}
var v62 = window.___jsl;
if (!v62) {
  v62 = {};
}
window.___jsl = v62;
var v63 = window.___jsl;
var v117 = window.___jsl.h;
if (!v117) {
  v117 = "s;plusone:googleapis.client@21550740_8d71de52/client;googleapis.proxy@21550740_8d71de52/proxy;plusone:googleapis.client:iframes-styles-bubble@21550740_8d71de52/bubble;iframes-styles-bubble!plusone:googleapis.client@21550740_8d71de52/bubble_only;plusone-unsupported@21550740_8d71de52/unsupported";
}
v63.h = v117;
window.___gpq = [];
var v64 = window.gapi;
if (!v64) {
  v64 = {};
}
window.gapi = v64;
var v65 = window.gapi;
var v119 = window.gapi.plusone;
if (!v119) {
  v119 = v1();
}
v65.plusone = v119;
var jsloader_load;
var goog;
var v66 = window["___jsl"];
if (!v66) {
  v66 = {};
}
window["___jsl"] = v66;
window["___jsl"]["u"] = "https://apis.google.com/js/plusone.js";
window["___jsl"]["f"] = ["googleapis.client", "plusone"];
var v69 = window["jsloader"];
if (!v69) {
  v69 = {};
}
var jsloader = v69;
var v70 = window["gapi"];
if (!v70) {
  v70 = {};
}
var gapi = v70;
v4();
gapi_load()
