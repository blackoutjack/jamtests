
JAM.startProfile('load');
function __bsld() {
  var p = window.gapi.plusone = window.googleapisv0.plusone;
  var f$$1;
  for(;f$$1 = window.___gpq.shift();) {
    p[f$$1] && p[f$$1].apply(p, window.___gpq.shift())
  }
  if(gadgets.config.get("gwidget")["parsetags"] !== "explicit") {
    gapi.plusone.go()
  }
}
function gapi_load(features$$8, opt_callback$$3) {
  jsloader_load(features$$8.split(":"), opt_callback$$3)
}
window.___jsl = window.___jsl || {};
window.___jsl.h = window.___jsl.h || "s;plusone:googleapis.client@21550740_8d71de52/client;googleapis.proxy@21550740_8d71de52/proxy;plusone:googleapis.client:iframes-styles-bubble@21550740_8d71de52/bubble;iframes-styles-bubble!plusone:googleapis.client@21550740_8d71de52/bubble_only;plusone-unsupported@21550740_8d71de52/unsupported";
window.___gpq = [];
window.gapi = window.gapi || {};
window.gapi.plusone = window.gapi.plusone || function() {
  function f(n$$1) {
    return function() {
      window.___gpq.push(n$$1, arguments)
    }
  }
  return{go:f("go"), render:f("render")}
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
    return result
  }
  function toSet(array$$9) {
    var result$$2 = {};
    var i$$1 = 0;
    for(;i$$1 < array$$9.length;i$$1++) {
      result$$2[array$$9[i$$1]] = !0
    }
    return result$$2
  }
  function normalize(features$$1) {
    var result$$3 = [];
    var s$$2;
    for(s$$2 in toSet(features$$1)) {
      result$$3.push(s$$2)
    }
    return result$$3.sort()
  }
  function shouldLoadSync() {
    if(window["___gapisync"] === !0) {
      return!0
    }
    var metas = document.getElementsByTagName("meta");
    var i$$3 = 0;
    for(;i$$3 < metas.length;++i$$3) {
      var meta = metas[i$$3];
      if("generator" == meta.getAttribute("name") || "blogger" == meta.getAttribute("content")) {
        return!0
      }
    }
    return!1
  }
  function warn(values$$4) {
    console && console.warn(values$$4.join(""))
  }
  function initDescriptors(values$$5) {
    var i$$4 = 0;
    for(;i$$4 < values$$5.length;i$$4++) {
      var value$$29 = values$$5[i$$4];
      var versionParts = value$$29.split("@");
      var JSCompiler_temp_const$$7 = descriptors;
      var JSCompiler_inline_result$$8;
      var featureParts$$inline_12 = versionParts[0].split("!");
      var req$$inline_13 = normalize(featureParts$$inline_12[0].split(":"));
      var loaded$$inline_14 = featureParts$$inline_12[1] && normalize(featureParts$$inline_12[1].split(":"));
      JSCompiler_inline_result$$8 = toKey(req$$inline_13, loaded$$inline_14);
      JSCompiler_temp_const$$7[JSCompiler_inline_result$$8] = versionParts[1]
    }
  }
  function getLastHint(pattern$$1) {
    var r = parentUrl.match(pattern$$1);
    return r && r[r.length - 1]
  }
  function initialize(url$$6) {
    host = type$$25 = 0;
    descriptors = {};
    loadedFeatures = [];
    console = window.console || window.opera && window.opera.postError;
    parentUrl = url$$6;
    var JSCompiler_temp$$5;
    if(JSCompiler_temp$$5 = getLastHint(QUERY_PATTERN) || getLastHint(FRAGMENT_PATTERN)) {
    }else {
      var jsl$$inline_16 = window["___jsl"];
      JSCompiler_temp$$5 = jsl$$inline_16 && jsl$$inline_16["h"]
    }
    var hint = JSCompiler_temp$$5;
    if(hint) {
      var parts = hint.split(";");
      type$$25 = parts[0];
      type$$25 === "s" ? (host = "https://ssl.gstatic.com/webclient/js", initDescriptors(parts.slice(1))) : type$$25 === "i" ? (host = parts[1], initDescriptors(parts.slice(2))) : type$$25 === "d" ? (host = parts[1], repository = parts[2], container = parts[3] || "gcjs-3p") : type$$25 === "r" ? (host = "https://ssl.gstatic.com/webclient/js", repository = parts[1]) : type$$25 === "f" && (host = parts[1], repository = parts[2])
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
    if(!features$$7 || features$$7.length == 0) {
      warn(["Cannot load empty features."])
    }else {
      var JSCompiler_inline_result$$6;
      var features$$inline_18 = features$$7;
      var set$$inline_19 = toSet(loadedFeatures);
      var isSubset$$inline_20 = !0;
      var i$$inline_21 = 0;
      for(;isSubset$$inline_20 && i$$inline_21 < features$$inline_18.length;i$$inline_21++) {
        isSubset$$inline_20 = isSubset$$inline_20 && set$$inline_19[features$$inline_18[i$$inline_21]]
      }
      JSCompiler_inline_result$$6 = isSubset$$inline_20;
      if(JSCompiler_inline_result$$6) {
        warn(["Cannot load loaded features [", features$$7.join(","), "]."])
      }else {
        if(type$$25 === "s" || type$$25 === "i") {
          JSCompiler_inline_label_processUrlFromMap_25: {
            var features$$inline_23 = features$$7;
            var version$$inline_24 = descriptors[toKey(features$$inline_23, loadedFeatures)];
            if(version$$inline_24) {
              urlToLoad = host + "/" + version$$inline_24 + ".js";
              break JSCompiler_inline_label_processUrlFromMap_25
            }else {
              warn(["Cannot find features [", features$$inline_23.join(","), "], except [", loadedFeatures.join(","), "]."])
            }
            urlToLoad = void 0
          }
        }else {
          if(type$$25 === "d") {
            var url$$inline_27 = host + "/" + toKey(features$$7, loadedFeatures);
            url$$inline_27 += ".js?container=" + container + "&c=2";
            repository && (url$$inline_27 += "&r=" + repository);
            urlToLoad = url$$inline_27
          }else {
            if(type$$25 === "r" || type$$25 === "f") {
              var JSCompiler_temp_const$$39 = host + "/" + repository + "/";
              var JSCompiler_inline_result$$40;
              var opt_loadFeatures$$inline_42 = loadedFeatures;
              var result$$inline_43 = normalize(features$$7).join("__");
              opt_loadFeatures$$inline_42 && opt_loadFeatures$$inline_42.length > 0 && (result$$inline_43 += "--" + normalize(opt_loadFeatures$$inline_42).join("__"));
              JSCompiler_inline_result$$40 = result$$inline_43;
              urlToLoad = JSCompiler_temp_const$$39 + JSCompiler_inline_result$$40 + ".js"
            }else {
              warn(["Cannot respond for features [", features$$7.join(","), "]."])
            }
          }
        }
      }
    }
    var features$$inline_29 = features$$7;
    var opt_url$$inline_30 = urlToLoad;
    var opt_callback$$inline_31 = opt_callback$$2;
    if(opt_url$$inline_30) {
      var JSCompiler_temp_const$$34;
      var jsl$$inline_47 = window["___jsl"];
      if(jsl$$inline_47 && opt_callback$$inline_31 && 1) {
        if(jsl$$inline_47["c"]) {
          throw"Cannot continue until a pending callback completes.";
        }
        jsl$$inline_47["c"] = opt_callback$$inline_31;
        jsl$$inline_47["o"] = 1
      }
      JSCompiler_temp_const$$34 = void 0;
      var JSCompiler_inline_result$$35;
      var url$$inline_49 = opt_url$$inline_30;
      var JSCompiler_inline_result$$54;
      JSCompiler_inline_label_canLoadUrl_58: {
        var url$$inline_55 = url$$inline_49;
        if(type$$25 === "s" || type$$25 === "r") {
          JSCompiler_inline_result$$54 = url$$inline_55.match(VALID_SCS_URL_REGEX);
          break JSCompiler_inline_label_canLoadUrl_58
        }
        var JSCompiler_inline_result$$inline_56;
        var jsl$$inline_57 = window["___jsl"];
        JSCompiler_inline_result$$inline_56 = jsl$$inline_57 && (jsl$$inline_57["m"] == "dev" || jsl$$inline_57["m"] == "google");
        JSCompiler_inline_result$$54 = JSCompiler_inline_result$$inline_56 && url$$inline_55.match(VALID_GOOGLE_URL_REGEX)
      }
      if(!JSCompiler_inline_result$$54) {
        throw"Cannot load url " + url$$inline_49 + ".";
      }
      if(shouldLoadSync()) {
        document.write('<script src="' + url$$inline_49 + '">\x3c/script>')
      }else {
        var script$$inline_50 = document.createElement("script");
        script$$inline_50.setAttribute("src", url$$inline_49);
        document.getElementsByTagName("head")[0].appendChild(script$$inline_50)
      }
      JSCompiler_inline_result$$35 = void 0;
      var JSCompiler_temp_const$$36 = (JSCompiler_temp_const$$34, JSCompiler_inline_result$$35);
      var JSCompiler_inline_result$$37;
      loadedFeatures = normalize(loadedFeatures.concat(features$$inline_29));
      JSCompiler_inline_result$$37 = void 0
    }else {
      opt_callback$$inline_31 && opt_callback$$inline_31()
    }
  };
  jsloader.reinitialize_ = function(url$$7) {
    initialize(url$$7)
  }
})();
gapi_load("googleapis.client:plusone", window["__bsld"]);

JAM.stopProfile('load');

