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
  return{go:f("go"), render:f("render")};
}();
var jsloader_load;
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
  function toStaticKey(reqFeatures$$1, opt_loadFeatures$$1) {
    var result$$1 = normalize(reqFeatures$$1).join("__");
    opt_loadFeatures$$1 && opt_loadFeatures$$1.length > 0 && (result$$1 += "--" + normalize(opt_loadFeatures$$1).join("__"));
    return result$$1;
  }
  function toSet(array$$9) {
    var result$$2 = {};
    var i$$1 = 0;
    for (;i$$1 < array$$9.length;i$$1++) {
      result$$2[array$$9[i$$1]] = !0;
    }
    return result$$2;
  }
  function isSubsetOfLoadedFeatures(features) {
    var set = toSet(loadedFeatures);
    var isSubset = !0;
    var i$$2 = 0;
    for (;isSubset && i$$2 < features.length;i$$2++) {
      isSubset = isSubset && set[features[i$$2]];
    }
    return isSubset;
  }
  function normalize(features$$1) {
    var result$$3 = [];
    var s$$2;
    for (s$$2 in toSet(features$$1)) {
      result$$3.push(s$$2);
    }
    return result$$3.sort();
  }
  function isEnabledForInternal() {
    var jsl = window["___jsl"];
    return jsl && (jsl["m"] == "dev" || jsl["m"] == "google");
  }
  function setupCallback(opt_callback, opt_count) {
    var jsl$$1 = window["___jsl"];
    if (jsl$$1 && opt_callback && opt_count) {
      if (jsl$$1["c"]) {
        throw "Cannot continue until a pending callback completes.";
      }
      jsl$$1["c"] = opt_callback;
      jsl$$1["o"] = opt_count;
    }
  }
  function canLoadUrl(url$$2) {
    if (type$$25 === "s" || type$$25 === "r") {
      return url$$2.match(VALID_SCS_URL_REGEX);
    }
    return isEnabledForInternal() && url$$2.match(VALID_GOOGLE_URL_REGEX);
  }
  function shouldLoadSync() {
    if (window["___gapisync"] === !0) {
      return!0;
    }
    var metas = document.getElementsByTagName("meta");
    var i$$3 = 0;
    for (;i$$3 < metas.length;++i$$3) {
      var meta = metas[i$$3];
      if ("generator" == meta.getAttribute("name") || "blogger" == meta.getAttribute("content")) {
        return!0;
      }
    }
    return!1;
  }
  function loadUrl(url$$3) {
    if (!canLoadUrl(url$$3)) {
      throw "Cannot load url " + url$$3 + ".";
    }
    if (shouldLoadSync()) {
      document.write('<script src="' + url$$3 + '">\x3c/script>');
    } else {
      var script = document.createElement("script");
      script.setAttribute("src", url$$3);
      document.getElementsByTagName("head")[0].appendChild(script);
    }
  }
  function handleLoadAndCallback(features$$2, opt_url$$2, opt_callback$$1) {
    opt_url$$2 ? (setupCallback(opt_callback$$1, 1), loadUrl(opt_url$$2), updateLoadedFeatures(features$$2)) : opt_callback$$1 && opt_callback$$1();
  }
  function warn(values$$4) {
    console && console.warn(values$$4.join(""));
  }
  function normalizeKey(key$$14) {
    var featureParts = key$$14.split("!");
    var req = normalize(featureParts[0].split(":"));
    var loaded = featureParts[1] && normalize(featureParts[1].split(":"));
    return toKey(req, loaded);
  }
  function initDescriptors(values$$5) {
    var i$$4 = 0;
    for (;i$$4 < values$$5.length;i$$4++) {
      var value$$27 = values$$5[i$$4];
      var versionParts = value$$27.split("@");
      descriptors[normalizeKey(versionParts[0])] = versionParts[1];
    }
  }
  function updateLoadedFeatures(features$$3) {
    loadedFeatures = normalize(loadedFeatures.concat(features$$3));
  }
  function processUrlFromMap(features$$4) {
    var version$$5 = descriptors[toKey(features$$4, loadedFeatures)];
    if (version$$5) {
      return host + "/" + version$$5 + ".js";
    } else {
      warn(["Cannot find features [", features$$4.join(","), "], except [", loadedFeatures.join(","), "]."]);
    }
  }
  function processDynamicUrl(features$$5) {
    var url$$4 = host + "/" + toKey(features$$5, loadedFeatures);
    url$$4 += ".js?container=" + container + "&c=2";
    repository && (url$$4 += "&r=" + repository);
    return url$$4;
  }
  function processRepositoryUrl(features$$6) {
    return host + "/" + repository + "/" + toStaticKey(features$$6, loadedFeatures) + ".js";
  }
  function getLastHint(pattern$$1) {
    var r = parentUrl.match(pattern$$1);
    return r && r[r.length - 1];
  }
  function getUrlHint() {
    return getLastHint(QUERY_PATTERN) || getLastHint(FRAGMENT_PATTERN);
  }
  function getGlobalHint() {
    var jsl$$2 = window["___jsl"];
    return jsl$$2 && jsl$$2["h"];
  }
  function initialize(url$$5) {
    host = type$$25 = 0;
    descriptors = {};
    loadedFeatures = [];
    console = window.console || window.opera && window.opera.postError;
    parentUrl = url$$5;
    var hint = getUrlHint() || getGlobalHint();
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
    !features$$7 || features$$7.length == 0 ? warn(["Cannot load empty features."]) : isSubsetOfLoadedFeatures(features$$7) ? warn(["Cannot load loaded features [", features$$7.join(","), "]."]) : type$$25 === "s" || type$$25 === "i" ? urlToLoad = processUrlFromMap(features$$7) : type$$25 === "d" ? urlToLoad = processDynamicUrl(features$$7) : type$$25 === "r" || type$$25 === "f" ? urlToLoad = processRepositoryUrl(features$$7) : warn(["Cannot respond for features [", features$$7.join(","), "]."]);
    handleLoadAndCallback(features$$7, urlToLoad, opt_callback$$2);
  };
  jsloader.reinitialize_ = function(url$$6) {
    initialize(url$$6);
  };
})();
function gapi_load(features$$8, opt_callback$$3) {
  jsloader_load(features$$8.split(":"), opt_callback$$3);
}
gapi_load("googleapis.client:plusone", window["__bsld"])
