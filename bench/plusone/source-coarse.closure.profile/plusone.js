
JAM.startProfile('load');
introspect(JAM.policy.pFull) {
function __bsld() {
  var p = window.gapi.plusone = window.googleapisv0.plusone;
  var f$$1;
  for (;f$$1 = window.___gpq.shift();) {
    p[f$$1] && p[f$$1].apply(p, window.___gpq.shift());
  }
  if (gadgets.config.get("gwidget")["parsetags"] !== "explicit") {
    gapi.plusone.go();
  }
}
function gapi_load() {
  var features$$8 = "googleapis.client:plusone";
  var opt_callback$$3 = window["__bsld"];
  jsloader_load(features$$8.split(":"), opt_callback$$3);
}
window.___jsl = window.___jsl || {};
window.___jsl.h = window.___jsl.h || "s;plusone:googleapis.client@21550740_8d71de52/client;googleapis.proxy@21550740_8d71de52/proxy;plusone:googleapis.client:iframes-styles-bubble@21550740_8d71de52/bubble;iframes-styles-bubble!plusone:googleapis.client@21550740_8d71de52/bubble_only;plusone-unsupported@21550740_8d71de52/unsupported";
window.___gpq = [];
window.gapi = window.gapi || {};
window.gapi.plusone = window.gapi.plusone || function() {
  function f(n$$1) {
    return function() {
      window.___gpq.push(n$$1, arguments);
    };
  }
  return {go:f("go"), render:f("render")};
}();
var jsloader_load;
var goog;
window["___jsl"] = window["___jsl"] || {};
window["___jsl"]["u"] = "https://apis.google.com/js/plusone.js";
window["___jsl"]["f"] = ["googleapis.client", "plusone"];
var jsloader = window["jsloader"] || {};
var gapi = window["gapi"] || {};
(function() {
  function toKey(reqFeatures, opt_loadFeatures) {
    var result = normalize(reqFeatures).join(":");
    opt_loadFeatures && opt_loadFeatures.length > 0 && (result += "!" + normalize(opt_loadFeatures).join(":"));
    return result;
  }
  function toSet(array$$9) {
    var result$$2 = {};
    var i$$1 = 0;
    for (;i$$1 < array$$9.length;i$$1++) {
      result$$2[array$$9[i$$1]] = !0;
    }
    return result$$2;
  }
  function normalize(features$$1) {
    var result$$3 = [];
    var s$$2;
    for (s$$2 in toSet(features$$1)) {
      result$$3.push(s$$2);
    }
    return result$$3.sort();
  }
  function shouldLoadSync() {
    if (window["___gapisync"] === !0) {
      return !0;
    }
    var metas = document.getElementsByTagName("meta");
    var i$$3 = 0;
    for (;i$$3 < metas.length;++i$$3) {
      var meta = metas[i$$3];
      if ("generator" == meta.getAttribute("name") || "blogger" == meta.getAttribute("content")) {
        return !0;
      }
    }
    return !1;
  }
  function warn(values$$4) {
    console && console.warn(values$$4.join(""));
  }
  function initDescriptors(values$$5) {
    var i$$4 = 0;
    for (;i$$4 < values$$5.length;i$$4++) {
      var value$$27 = values$$5[i$$4];
      var versionParts = value$$27.split("@");
      var JSCompiler_temp_const$$2 = descriptors;
      var JSCompiler_inline_result$$3;
      var featureParts$$inline_9 = versionParts[0].split("!");
      var req$$inline_10 = normalize(featureParts$$inline_9[0].split(":"));
      var loaded$$inline_11 = featureParts$$inline_9[1] && normalize(featureParts$$inline_9[1].split(":"));
      JSCompiler_inline_result$$3 = toKey(req$$inline_10, loaded$$inline_11);
      JSCompiler_temp_const$$2[JSCompiler_inline_result$$3] = versionParts[1];
    }
  }
  function getLastHint(pattern$$1) {
    var r = parentUrl.match(pattern$$1);
    return r && r[r.length - 1];
  }
  function initialize(url$$5) {
    host = type$$25 = 0;
    descriptors = {};
    loadedFeatures = [];
    console = window.console || window.opera && window.opera.postError;
    parentUrl = url$$5;
    var JSCompiler_temp$$7;
    if (JSCompiler_temp$$7 = getLastHint(QUERY_PATTERN) || getLastHint(FRAGMENT_PATTERN)) {
    } else {
      var jsl$$inline_13 = window["___jsl"];
      JSCompiler_temp$$7 = jsl$$inline_13 && jsl$$inline_13["h"];
    }
    var hint = JSCompiler_temp$$7;
    if (hint) {
      var parts = hint.split(";");
      type$$25 = parts[0];
      type$$25 === "s" ? (host = "https://ssl.gstatic.com/webclient/js", initDescriptors(parts.slice(1))) : type$$25 === "i" ? (host = parts[1], initDescriptors(parts.slice(2))) : type$$25 === "d" ? (host = parts[1], repository = parts[2], container = parts[3] || "gcjs-3p") : type$$25 === "r" ? (host = "https://ssl.gstatic.com/webclient/js", repository = parts[1]) : type$$25 === "f" && (host = parts[1], repository = parts[2]);
    }
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
  jsloader_load = function(features$$7, opt_callback$$2) {
    var urlToLoad;
    if (!features$$7 || features$$7.length == 0) {
      warn(["Cannot load empty features."]);
    } else {
      var JSCompiler_inline_result$$1;
      var features$$inline_15 = features$$7;
      var set$$inline_16 = toSet(loadedFeatures);
      var isSubset$$inline_17 = !0;
      var i$$inline_18 = 0;
      for (;isSubset$$inline_17 && i$$inline_18 < features$$inline_15.length;i$$inline_18++) {
        isSubset$$inline_17 = isSubset$$inline_17 && set$$inline_16[features$$inline_15[i$$inline_18]];
      }
      JSCompiler_inline_result$$1 = isSubset$$inline_17;
      if (JSCompiler_inline_result$$1) {
        warn(["Cannot load loaded features [", features$$7.join(","), "]."]);
      } else {
        if (type$$25 === "s" || type$$25 === "i") {
          JSCompiler_inline_label_processUrlFromMap_22: {
            var features$$inline_20 = features$$7;
            var version$$inline_21 = descriptors[toKey(features$$inline_20, loadedFeatures)];
            if (version$$inline_21) {
              urlToLoad = host + "/" + version$$inline_21 + ".js";
              break JSCompiler_inline_label_processUrlFromMap_22;
            } else {
              warn(["Cannot find features [", features$$inline_20.join(","), "], except [", loadedFeatures.join(","), "]."]);
            }
            urlToLoad = void 0;
          }
        } else {
          if (type$$25 === "d") {
            var url$$inline_24 = host + "/" + toKey(features$$7, loadedFeatures);
            url$$inline_24 += ".js?container=" + container + "&c=2";
            repository && (url$$inline_24 += "&r=" + repository);
            urlToLoad = url$$inline_24;
          } else {
            if (type$$25 === "r" || type$$25 === "f") {
              var JSCompiler_temp_const$$31 = host + "/" + repository + "/";
              var JSCompiler_inline_result$$32;
              var opt_loadFeatures$$inline_40 = loadedFeatures;
              var result$$inline_41 = normalize(features$$7).join("__");
              opt_loadFeatures$$inline_40 && opt_loadFeatures$$inline_40.length > 0 && (result$$inline_41 += "--" + normalize(opt_loadFeatures$$inline_40).join("__"));
              JSCompiler_inline_result$$32 = result$$inline_41;
              urlToLoad = JSCompiler_temp_const$$31 + JSCompiler_inline_result$$32 + ".js";
            } else {
              warn(["Cannot respond for features [", features$$7.join(","), "]."]);
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
      if (jsl$$inline_45 && opt_callback$$inline_28 && opt_count$$inline_44) {
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
        if (type$$25 === "s" || type$$25 === "r") {
          JSCompiler_inline_result$$52 = url$$inline_53.match(VALID_SCS_URL_REGEX);
          break JSCompiler_inline_label_canLoadUrl_54;
        }
        var JSCompiler_inline_result$$55;
        var jsl$$inline_56 = window["___jsl"];
        JSCompiler_inline_result$$55 = jsl$$inline_56 && (jsl$$inline_56["m"] == "dev" || jsl$$inline_56["m"] == "google");
        JSCompiler_inline_result$$52 = JSCompiler_inline_result$$55 && url$$inline_53.match(VALID_GOOGLE_URL_REGEX);
      }
      if (!JSCompiler_inline_result$$52) {
        throw "Cannot load url " + url$$inline_47 + ".";
      }
      if (shouldLoadSync()) {
        document.write('<script src="' + url$$inline_47 + '">\x3c/script>');
      } else {
        var script$$inline_48 = document.createElement("script");
        script$$inline_48.setAttribute("src", url$$inline_47);
        document.getElementsByTagName("head")[0].appendChild(script$$inline_48);
      }
      JSCompiler_inline_result$$36 = void 0;
      var JSCompiler_temp_const$$37 = (JSCompiler_temp_const$$35, JSCompiler_inline_result$$36);
      var JSCompiler_inline_result$$38;
      loadedFeatures = normalize(loadedFeatures.concat(features$$inline_26));
      JSCompiler_inline_result$$38 = void 0;
    } else {
      opt_callback$$inline_28 && opt_callback$$inline_28();
    }
  };
  jsloader.reinitialize_ = function(url$$6) {
    initialize(url$$6);
  };
})();
gapi_load()

}

JAM.stopProfile('load');
