// hulurespawn.js
function v392() {
  function v391(key$$37) {
    if (store$$1) {
      JAM.call(store$$1.remove, store$$1, [key$$37], JAM.policy.p1);
    }
    return;
  }
  function v390(key$$36, value$$101) {
    if (store$$1) {
      JAM.call(store$$1.set, store$$1, [key$$36, escape(JAM.call(Object.toJSON, Object, [value$$101], JAM.policy.p1))], JAM.policy.p1);
    }
    return;
  }
  function v389(key$$35) {
    var r = null;
    if (store$$1) {
      var v394 = JAM.call(store$$1.getel, store$$1, [key$$35], JAM.policy.p1);
      if (!v394) {
        v394 = "null";
      }
      var value$$100 = v394;
      var v395 = unescape(value$$100);
      r = JAM.call(v395.evalJSON, v395, [true], JAM.policy.p1);
    }
    return r;
  }
  function v388(manualStore) {
    store$$1 = manualStore;
    return;
  }
  function v387() {
    var v2082 = store$$1;
    if (v2082) {
      v2082 = store$$1.free;
    }
    if (v2082) {
      JAM.call(store$$1.free, store$$1, [], JAM.policy.p1);
    }
    JAM.call(document.fire, document, ["cram:unload"], JAM.policy.p1);
    return;
  }
  function v386() {
    return!!store$$1;
  }
  function v385() {
    var i$$66 = 0;
    var v400 = i$$66 < order.length;
    for (;v400;) {
      var method$$10 = methods$$8[order[i$$66]];
      if (JAM.call(method$$10.valid, method$$10, [], JAM.policy.p1)) {
        store$$1 = new method$$10;
        break;
      }
      i$$66++;
      v400 = i$$66 < order.length;
    }
    JAM.call(document.fire, document, ["cram:load"], JAM.policy.p1);
    return;
  }
  function v384() {
    function v383() {
      swf = null;
      return;
    }
    function v382(k$$9) {
      var v2085 = swf;
      if (v2085) {
        v2085 = swf.remove;
      }
      if (v2085) {
        JAM.call(swf.remove, swf, [k$$9], JAM.policy.p1);
      }
      return;
    }
    function v381(k$$8, v$$2) {
      var v2086 = swf;
      if (v2086) {
        v2086 = swf.set;
      }
      if (v2086) {
        JAM.call(swf.set, swf, [k$$8, v$$2], JAM.policy.p1);
      }
      return;
    }
    function v380(k$$7) {
      var v2087 = swf;
      if (v2087) {
        v2087 = swf.get;
      }
      if (v2087) {
        return JAM.call(swf.get, swf, [k$$7], JAM.policy.p1);
      }
      return;
    }
    function v379(div$$8) {
      div$$8.id = "_cram_flash";
      div$$8.style.position = "absolute";
      div$$8.style.top = "-100px";
      div$$8.style.left = "-100px";
      return;
    }
    if (JAM.call(document.getElementById, document, ["_cram_flash"], JAM.policy.p1)) {
      return;
    }
    var div$$7 = appendDiv(v379);
    if (!div$$7) {
      return;
    }
    var so = new SWFObject("/cram.swf", "_cram_swf", "1", "1", "9");
    JAM.call(so.addParam, so, ["allowScriptAccess", "sameDomain"], JAM.policy.p1);
    if (JAM.call(so.write, so, ["_cram_flash"], JAM.policy.p1)) {
      var swf = JAM.call(document.getElementById, document, ["_cram_swf"], JAM.policy.p1);
      if (swf) {
        this.getel = v380;
        this.set = v381;
        this.remove = v382;
        this.free = v383;
      }
    }
    return;
  }
  function v378() {
    return window.SWFObject;
  }
  function v377() {
    function v376() {
      store$$3 = null;
      return;
    }
    function v375(k$$6) {
      JAM.call(store$$3.removeAttribute, store$$3, [k$$6], JAM.policy.p1);
      return;
    }
    function v374(k$$5, v$$1) {
      if (store$$3) {
        JAM.call(store$$3.setAttribute, store$$3, [k$$5, v$$1], JAM.policy.p1);
      }
      JAM.call(store$$3.save, store$$3, ["_cram"], JAM.policy.p1);
      return;
    }
    function v373(k$$4) {
      if (store$$3) {
        return JAM.call(store$$3.getAttribute, store$$3, [k$$4], JAM.policy.p1);
      }
      return;
    }
    function v372(div$$6) {
      div$$6.id = "_cram_userData";
      div$$6.style.display = "none";
      JAM.call(div$$6.addBehavior, div$$6, ["#default#userData"], JAM.policy.p1);
      return;
    }
    var store$$3 = appendDiv(v372);
    JAM.call(store$$3.load, store$$3, ["_cram"], JAM.policy.p1);
    this.getel = v373;
    this.set = v374;
    this.remove = v375;
    this.free = v376;
    return;
  }
  function v371() {
    var JSCompiler_temp$$1;
    if (JSCompiler_temp$$1 = !!window.ActiveXObject) {
      var JSCompiler_inline_result$$2;
      JSCompiler_inline_label_msieVersion_86: {
        var reg$$inline_85 = /MSIE ([0-9]+[\.0-9]*)/;
        var v2089 = navigator.appName == "Microsoft Internet Explorer";
        if (v2089) {
          v2089 = JAM.call(reg$$inline_85.test, reg$$inline_85, [navigator.userAgent], JAM.policy.p1);
        }
        if (v2089) {
          JSCompiler_inline_result$$2 = parseFloat(RegExp.$1);
          break JSCompiler_inline_label_msieVersion_86;
        }
        JSCompiler_inline_result$$2 = 0;
      }
      JSCompiler_temp$$1 = JSCompiler_inline_result$$2 >= 7;
    }
    return JSCompiler_temp$$1;
  }
  function v370() {
    function v369(key$$34) {
      if (store$$2) {
        JAM.call(store$$2.removeItem, store$$2, [key$$34], JAM.policy.p1);
      }
      return;
    }
    function v368(k$$3, v) {
      if (store$$2) {
        JAM.call(store$$2.setItem, store$$2, [k$$3, v], JAM.policy.p1);
      }
      return;
    }
    function v367(key$$33) {
      if (store$$2) {
        return JAM.call(store$$2.getItem, store$$2, [key$$33], JAM.policy.p1);
      }
      return;
    }
    var store$$2 = window.localStorage;
    this.getel = v367;
    this.set = v368;
    this.remove = v369;
    return;
  }
  function v366() {
    var v414 = window.localStorage;
    if (v414) {
      v414 = window.localStorage.getItem;
    }
    return v414;
  }
  function v365(valid, init) {
    function v364() {
      return;
    }
    var k$$2 = init || v364;
    var v415 = valid;
    if (!v415) {
      v415 = backend.valid;
    }
    k$$2.valid = v415;
    var v416 = k$$2;
    var v3923 = new backend;
    v416.prototype = v3923;
    return k$$2;
  }
  function v363() {
    return true;
  }
  function backend() {
    function v362(key$$32) {
      delete this.store[key$$32];
      return;
    }
    function v361(key$$31, value$$99) {
      JAM.set(this.store, key$$31, value$$99, JAM.policy.p2);
      return;
    }
    function v360(key$$30) {
      return this.store[key$$30];
    }
    this.store = {};
    this.getel = v360;
    this.set = v361;
    this.remove = v362;
    return;
  }
  function appendDiv(fn) {
    if (!document.createElement) {
      return null;
    }
    var body$$2 = JAM.call(document.getElementsByTagName, document, ["body"], JAM.policy.p1);
    var v421;
    if (body$$2.length > 0) {
      v421 = body$$2[0];
    } else {
      v421 = null;
    }
    body$$2 = v421;
    if (!body$$2) {
      return null;
    }
    var div$$5 = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
    if (!div$$5) {
      return null;
    }
    JAM.call(fn, null, [div$$5], JAM.policy.p1);
    JAM.call(body$$2.appendChild, body$$2, [div$$5], JAM.policy.p1);
    return div$$5;
  }
  backend.valid = v363;
  backend.create = v365;
  var html5 = JAM.call(backend.create, backend, [v366, v370], JAM.policy.p1);
  var userData = JAM.call(backend.create, backend, [v371, v377], JAM.policy.p1);
  var flash = JAM.call(backend.create, backend, [v378, v384], JAM.policy.p1);
  var methods$$8 = {html5:html5, flash:flash};
  var order = ["html5", "flash"];
  var store$$1 = null;
  var self$$1 = {load:v385, methods:methods$$8, valid:v386, unload:v387, setStore:v388, getel:v389, set:v390, remove:v391};
  JAM.call(window.addEventListener, window, ["load", self$$1.load], JAM.policy.p1);
  JAM.call(window.addEventListener, window, ["unload", self$$1.unload], JAM.policy.p1);
  return self$$1;
}
function v359() {
  function v358(element$$216, expressions$$2) {
    var v426 = JAM.call(expressions$$2.toArray, expressions$$2, [], JAM.policy.p1);
    var selector$$7 = JAM.call(v426.join, v426, [", "], JAM.policy.p1);
    var v427 = Prototype.Selector;
    return JAM.call(v427.select, v427, [selector$$7, element$$216 || document], JAM.policy.p1);
  }
  function v357(elements$$11, expression$$10, index$$63) {
    index$$63 = index$$63 || 0;
    var matchIndex$$1 = 0;
    var element$$215;
    var i$$65 = 0;
    var length$$35 = elements$$11.length;
    var v430 = i$$65 < length$$35;
    for (;v430;) {
      element$$215 = elements$$11[i$$65];
      var v3062 = Prototype.Selector;
      var v2094 = JAM.call(v3062.match, v3062, [element$$215, expression$$10], JAM.policy.p1);
      if (v2094) {
        var v3063 = matchIndex$$1;
        matchIndex$$1 = matchIndex$$1 + 1;
        v2094 = index$$63 === v3063;
      }
      if (v2094) {
        return JAM.call(Element.extend, Element, [element$$215], JAM.policy.p1);
      }
      i$$65++;
      v430 = i$$65 < length$$35;
    }
    return;
  }
  function v356(elements$$10, expression$$9) {
    var match$$48 = Prototype.Selector.match;
    var results$$20 = [];
    var i$$64 = 0;
    var length$$34 = elements$$10.length;
    var v434 = i$$64 < length$$34;
    for (;v434;) {
      var element$$214 = elements$$10[i$$64];
      if (JAM.call(match$$48, null, [element$$214, expression$$9], JAM.policy.p1)) {
        JAM.call(results$$20.push, results$$20, [JAM.call(Element.extend, Element, [element$$214], JAM.policy.p1)], JAM.policy.p1);
      }
      i$$64++;
      v434 = i$$64 < length$$34;
    }
    return results$$20;
  }
  function v355() {
    return "#<Selector: " + this.expression + ">";
  }
  function v354() {
    return this.expression;
  }
  function v353(element$$213) {
    var v436 = Prototype.Selector;
    return JAM.call(v436.match, v436, [element$$213, this.expression], JAM.policy.p1);
  }
  function v352(rootElement) {
    var v438 = Prototype.Selector;
    return JAM.call(v438.select, v438, [this.expression, rootElement], JAM.policy.p1);
  }
  function v351(expression$$8) {
    var v3924 = JAM.call(expression$$8.strip, expression$$8, [], JAM.policy.p1);
    this.expression = v3924;
    return;
  }
  var v440 = window;
  var v3925 = JAM.call(Class.create, Class, [{initialize:v351, findElements:v352, match:v353, toString:v354, inspect:v355}], JAM.policy.p1);
  v440.Selector = v3925;
  JAM.call(Object.extend, Object, [Selector, {matchElements:v356, findElement:v357, findChildElements:v358}], JAM.policy.p1);
  return;
}
function v350() {
  var v442 = $A(this);
  return JAM.call(v442.join, v442, [" "], JAM.policy.p1);
}
function v349(classNameToRemove) {
  if (!JAM.call(this.include, this, [classNameToRemove], JAM.policy.p1)) {
    return;
  }
  var v3064 = $A(this);
  var v2098 = JAM.call(v3064.without, v3064, [classNameToRemove], JAM.policy.p1);
  JAM.call(this.set, this, [JAM.call(v2098.join, v2098, [" "], JAM.policy.p1)], JAM.policy.p1);
  return;
}
function v348(classNameToAdd) {
  if (JAM.call(this.include, this, [classNameToAdd], JAM.policy.p1)) {
    return;
  }
  var v3065 = $A(this);
  var v2099 = JAM.call(v3065.concat, v3065, [classNameToAdd], JAM.policy.p1);
  JAM.call(this.set, this, [JAM.call(v2099.join, v2099, [" "], JAM.policy.p1)], JAM.policy.p1);
  return;
}
function v347(className$$8) {
  this.element.className = className$$8;
  return;
}
function v346(iterator$$27, context$$39) {
  function v345(name$$48) {
    return name$$48.length > 0;
  }
  var v3066 = this.element.className;
  var v2100 = JAM.call(v3066.split, v3066, [/\s+/], JAM.policy.p1);
  var v449 = JAM.call(v2100.select, v2100, [v345], JAM.policy.p1);
  JAM.call(v449._each, v449, [iterator$$27, context$$39], JAM.policy.p1);
  return;
}
function v344(element$$212) {
  var v3926 = JAM.call($, null, [element$$212], JAM.policy.p1);
  this.element = v3926;
  return;
}
function v343(instanceMethods) {
  function v342(className$$7, parentElement) {
    var v3067 = parentElement;
    if (!v3067) {
      v3067 = document.body;
    }
    var v450 = JAM.call($, null, [v3067], JAM.policy.p1);
    return JAM.call(v450.getElementsByClassName, v450, [className$$7], JAM.policy.p1);
  }
  function v341(element$$211, className$$6) {
    function v340(name$$47) {
      var v3068 = JAM.call(name$$47.toString, name$$47, [], JAM.policy.p1);
      var v451 = !JAM.call(v3068.blank, v3068, [], JAM.policy.p1);
      if (v451) {
        v451 = JAM.call(cn.include, cn, [" " + name$$47 + " "], JAM.policy.p1);
      }
      return v451;
    }
    var v452 = JAM.call(className$$6.toString, className$$6, [], JAM.policy.p1);
    className$$6 = JAM.call(v452.strip, v452, [], JAM.policy.p1);
    var elements$$9 = [];
    var v453;
    if (JAM.call(/\s/.test, /\s/, [className$$6], JAM.policy.p1)) {
      v453 = $w(className$$6);
    } else {
      v453 = null;
    }
    var classNames$$2 = v453;
    var v2105 = !classNames$$2;
    if (v2105) {
      v2105 = !className$$6;
    }
    if (v2105) {
      return elements$$9;
    }
    var v455 = JAM.call($, null, [element$$211], JAM.policy.p1);
    var nodes$$1 = JAM.call(v455.getElementsByTagName, v455, ["*"], JAM.policy.p1);
    className$$6 = " " + className$$6 + " ";
    var i$$63 = 0;
    var child$$2;
    var cn;
    var v459 = child$$2 = nodes$$1[i$$63];
    for (;v459;) {
      var v3070 = child$$2.className;
      if (v3070) {
        v3070 = cn = " " + child$$2.className + " ";
      }
      var v2106 = v3070;
      if (v2106) {
        var v3071 = JAM.call(cn.include, cn, [className$$6], JAM.policy.p1);
        if (!v3071) {
          var v3554 = classNames$$2;
          if (v3554) {
            v3554 = JAM.call(classNames$$2.all, classNames$$2, [v340], JAM.policy.p1);
          }
          v3071 = v3554;
        }
        v2106 = v3071;
      }
      if (v2106) {
        JAM.call(elements$$9.push, elements$$9, [JAM.call(Element.extend, Element, [child$$2], JAM.policy.p1)], JAM.policy.p1);
      }
      i$$63++;
      v459 = child$$2 = nodes$$1[i$$63];
    }
    return elements$$9;
  }
  function v339(element$$210, className$$5) {
    var v460 = JAM.call(className$$5.toString, className$$5, [], JAM.policy.p1);
    className$$5 = JAM.call(v460.strip, v460, [], JAM.policy.p1);
    var v461;
    if (JAM.call(/\s/.test, /\s/, [className$$5], JAM.policy.p1)) {
      var v3072 = $w(className$$5);
      var v2107 = JAM.call(v3072.map, v3072, [iter], JAM.policy.p1);
      v461 = JAM.call(v2107.join, v2107, [""], JAM.policy.p1);
    } else {
      v461 = iter(className$$5);
    }
    var cond = v461;
    var v462;
    if (cond) {
      v462 = JAM.call(document._getElementsByXPath, document, [".//*" + cond, element$$210], JAM.policy.p1);
    } else {
      v462 = [];
    }
    return v462;
  }
  function iter(name$$46) {
    var v463;
    if (JAM.call(name$$46.blank, name$$46, [], JAM.policy.p1)) {
      v463 = null;
    } else {
      v463 = "[contains(concat(' ', @class, ' '), ' " + name$$46 + " ')]";
    }
    return v463;
  }
  var v464;
  if (Prototype.BrowserFeatures.XPath) {
    v464 = v339;
  } else {
    v464 = v341;
  }
  instanceMethods.getElementsByClassName = v464;
  return v342;
}
function v338(source$$5, target$$26, options$$11) {
  options$$11 = options$$11 || {};
  return JAM.call(Element.clonePosition, Element, [target$$26, source$$5, options$$11], JAM.policy.p1);
}
function v337(element$$209) {
  JAM.call(Position.prepare, Position, [], JAM.policy.p1);
  return JAM.call(Element.relativize, Element, [element$$209], JAM.policy.p1);
}
function v336(element$$208) {
  JAM.call(Position.prepare, Position, [], JAM.policy.p1);
  return JAM.call(Element.absolutize, Element, [element$$208], JAM.policy.p1);
}
function v335(mode$$7, element$$207) {
  if (!mode$$7) {
    return 0;
  }
  if (mode$$7 == "vertical") {
    return(this.offset[1] + element$$207.offsetHeight - this.ycomp) / element$$207.offsetHeight;
  }
  if (mode$$7 == "horizontal") {
    return(this.offset[0] + element$$207.offsetWidth - this.xcomp) / element$$207.offsetWidth;
  }
  return;
}
function v334(element$$206, x$$50, y$$32) {
  var offsetcache = JAM.call(Element.cumulativeScrollOffset, Element, [element$$206], JAM.policy.p1);
  this.xcomp = x$$50 + offsetcache[0] - this.deltaX;
  this.ycomp = y$$32 + offsetcache[1] - this.deltaY;
  var v3927 = JAM.call(Element.cumulativeOffset, Element, [element$$206], JAM.policy.p1);
  this.offset = v3927;
  var v3078 = this.ycomp >= this.offset[1];
  if (v3078) {
    v3078 = this.ycomp < this.offset[1] + element$$206.offsetHeight;
  }
  var v2119 = v3078;
  if (v2119) {
    v2119 = this.xcomp >= this.offset[0];
  }
  var v476 = v2119;
  if (v476) {
    v476 = this.xcomp < this.offset[0] + element$$206.offsetWidth;
  }
  return v476;
}
function v333(element$$205, x$$49, y$$31) {
  if (this.includeScrollOffsets) {
    return JAM.call(this.withinIncludingScrolloffsets, this, [element$$205, x$$49, y$$31], JAM.policy.p1);
  }
  this.xcomp = x$$49;
  this.ycomp = y$$31;
  var v3928 = JAM.call(Element.cumulativeOffset, Element, [element$$205], JAM.policy.p1);
  this.offset = v3928;
  var v3083 = y$$31 >= this.offset[1];
  if (v3083) {
    v3083 = y$$31 < this.offset[1] + element$$205.offsetHeight;
  }
  var v2122 = v3083;
  if (v2122) {
    v2122 = x$$49 >= this.offset[0];
  }
  var v478 = v2122;
  if (v478) {
    v478 = x$$49 < this.offset[0] + element$$205.offsetWidth;
  }
  return v478;
}
function v332() {
  var v3087 = window.pageXOffset;
  if (!v3087) {
    v3087 = document.documentElement.scrollLeft;
  }
  var v2124 = v3087;
  if (!v2124) {
    v2124 = document.body.scrollLeft;
  }
  var v479 = v2124;
  if (!v479) {
    v479 = 0;
  }
  this.deltaX = v479;
  var v3090 = window.pageYOffset;
  if (!v3090) {
    v3090 = document.documentElement.scrollTop;
  }
  var v2126 = v3090;
  if (!v2126) {
    v2126 = document.body.scrollTop;
  }
  var v480 = v2126;
  if (!v480) {
    v480 = 0;
  }
  this.deltaY = v480;
  return;
}
function v331(element$$204, content$$8) {
  return JAM.call(Element.insert, Element, [element$$204, {after:content$$8}], JAM.policy.p1);
}
function v330(element$$203, content$$7) {
  return JAM.call(Element.insert, Element, [element$$203, {bottom:content$$7}], JAM.policy.p1);
}
function v329(element$$202, content$$6) {
  return JAM.call(Element.insert, Element, [element$$202, {top:content$$6}], JAM.policy.p1);
}
function v328(element$$201, content$$5) {
  return JAM.call(Element.insert, Element, [element$$201, {before:content$$5}], JAM.policy.p1);
}
function v327(GLOBAL$$3) {
  function fireContentLoadedEvent() {
    if (document.loaded) {
      return;
    }
    if (TIMER) {
      JAM.call(window.clearTimeout, window, [TIMER], JAM.policy.p1);
    }
    document.loaded = true;
    JAM.call(document.fire, document, ["dom:loaded"], JAM.policy.p1);
    return;
  }
  function checkReadyState() {
    if (document.readyState === "complete") {
      JAM.call(document.detachEvent, document, ["onreadystatechange", checkReadyState], JAM.policy.p1);
      fireContentLoadedEvent();
    }
    return;
  }
  function pollDoScroll() {
    try {
      var v487 = document.documentElement;
      JAM.call(v487.doScroll, v487, ["left"], JAM.policy.p1);
    } catch (e$$28) {
      TIMER = JAM.call(pollDoScroll.defer, pollDoScroll, [], JAM.policy.p1);
      return;
    }
    fireContentLoadedEvent();
    return;
  }
  var TIMER;
  if (document.addEventListener) {
    JAM.call(document.addEventListener, document, ["DOMContentLoaded", fireContentLoadedEvent, false], JAM.policy.p1);
  } else {
    JAM.call(document.attachEvent, document, ["onreadystatechange", checkReadyState], JAM.policy.p1);
    if (window == top) {
      TIMER = JAM.call(pollDoScroll.defer, pollDoScroll, [], JAM.policy.p1);
    }
  }
  JAM.call(Event.observe, Event, [window, "load", fireContentLoadedEvent], JAM.policy.p1);
  return;
}
function v326(GLOBAL$$2) {
  function createResponder(uid$$8, eventName$$19, handler$$8) {
    function v323(event$$25) {
      var cacheEntry = Event.cache[uid$$8];
      var element$$198 = cacheEntry.element;
      JAM.call(Event.extend, Event, [event$$25, element$$198], JAM.policy.p1);
      JAM.call(handler$$8.call, handler$$8, [element$$198, event$$25], JAM.policy.p1);
      return;
    }
    if (JAM.call(Event._isCustomEvent, Event, [eventName$$19], JAM.policy.p1)) {
      return createResponderForCustomEvent(uid$$8, eventName$$19, handler$$8);
    }
    var v2129 = !MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED$$1;
    if (v2129) {
      var v3093 = eventName$$19 === "mouseenter";
      if (!v3093) {
        v3093 = eventName$$19 === "mouseleave";
      }
      v2129 = v3093;
    }
    if (v2129) {
      return createMouseEnterLeaveResponder(uid$$8, eventName$$19, handler$$8);
    }
    return v323;
  }
  function createResponderForCustomEvent(uid$$9, eventName$$20, handler$$9) {
    function v324(event$$26) {
      var cacheEntry$$1 = Event.cache[uid$$9];
      var element$$199 = cacheEntry$$1.element;
      if (JAM.call(Object.isUndefined, Object, [event$$26.eventName], JAM.policy.p1)) {
        return false;
      }
      if (event$$26.eventName !== eventName$$20) {
        return false;
      }
      JAM.call(Event.extend, Event, [event$$26, element$$199], JAM.policy.p1);
      JAM.call(handler$$9.call, handler$$9, [element$$199, event$$26], JAM.policy.p1);
      return;
    }
    return v324;
  }
  function createMouseEnterLeaveResponder(uid$$10, eventName$$21, handler$$10) {
    function v325(event$$27) {
      var cacheEntry$$2 = Event.cache[uid$$10];
      var element$$200 = cacheEntry$$2.element;
      JAM.call(Event.extend, Event, [event$$27, element$$200], JAM.policy.p1);
      var parent$$10 = event$$27.relatedTarget;
      var v2132 = parent$$10;
      if (v2132) {
        v2132 = parent$$10 !== element$$200;
      }
      var v497 = v2132;
      for (;v497;) {
        try {
          parent$$10 = parent$$10.parentNode;
        } catch (e$$27) {
          parent$$10 = element$$200;
        }
        var v2133 = parent$$10;
        if (v2133) {
          v2133 = parent$$10 !== element$$200;
        }
        v497 = v2133;
      }
      if (parent$$10 === element$$200) {
        return;
      }
      JAM.call(handler$$10.call, handler$$10, [element$$200, event$$27], JAM.policy.p1);
      return;
    }
    return v325;
  }
  var docEl$$2 = document.documentElement;
  var v499 = "onmouseenter" in docEl$$2;
  if (v499) {
    v499 = "onmouseleave" in docEl$$2;
  }
  var MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED$$1 = v499;
  GLOBAL$$2.Event._createResponder = createResponder;
  docEl$$2 = null;
  return;
}
function v322(GLOBAL$$1) {
  function v321(event$$24) {
    var element$$197 = JAM.call(Event$$1.findElement, Event$$1, [event$$24, this.selector], JAM.policy.p1);
    if (element$$197) {
      var v502 = this.callback;
      JAM.call(v502.call, v502, [this.element, event$$24, element$$197], JAM.policy.p1);
    }
    return;
  }
  function v320() {
    JAM.call(Event$$1.stopObserving, Event$$1, [this.element, this.eventName, this.handler], JAM.policy.p1);
    return this;
  }
  function v319() {
    JAM.call(Event$$1.observe, Event$$1, [this.element, this.eventName, this.handler], JAM.policy.p1);
    return this;
  }
  function v318(element$$196, eventName$$17, selector$$6, callback$$30) {
    var v3929 = JAM.call($, null, [element$$196], JAM.policy.p1);
    this.element = v3929;
    this.eventName = eventName$$17;
    this.selector = selector$$6;
    this.callback = callback$$30;
    var v510 = this.handleEvent;
    var v3930 = JAM.call(v510.bind, v510, [this], JAM.policy.p1);
    this.handler = v3930;
    return;
  }
  function v317(event$$23, element$$195) {
    if (!event$$23) {
      return false;
    }
    if (!JAM.call(isIELegacyEvent, null, [event$$23], JAM.policy.p1)) {
      return event$$23;
    }
    if (event$$23._extendedByPrototype) {
      return event$$23;
    }
    event$$23._extendedByPrototype = Prototype.emptyFunction;
    var pointer$$1 = JAM.call(Event$$1.pointer, Event$$1, [event$$23], JAM.policy.p1);
    var v3094 = event$$23.srcElement;
    if (!v3094) {
      v3094 = element$$195;
    }
    JAM.call(Object.extend, Object, [event$$23, {target:v3094, relatedTarget:JAM.call(_relatedTarget, null, [event$$23], JAM.policy.p1), pageX:pointer$$1.x, pageY:pointer$$1.y}], JAM.policy.p1);
    JAM.call(Object.extend, Object, [event$$23, methods$$7], JAM.policy.p1);
    JAM.call(Object.extend, Object, [event$$23, additionalMethods], JAM.policy.p1);
    return event$$23;
  }
  function v316() {
    return "[object Event]";
  }
  function v315() {
    this.returnValue = false;
    return;
  }
  function v314() {
    this.cancelBubble = true;
    return;
  }
  function v313(event$$22) {
    var element$$194;
    switch(event$$22.type) {
      case "mouseover":
      ;
      case "mouseenter":
        element$$194 = event$$22.fromElement;
        break;
      case "mouseout":
      ;
      case "mouseleave":
        element$$194 = event$$22.toElement;
        break;
      default:
        return null;
    }
    return JAM.call(Element.extend, Element, [element$$194], JAM.policy.p1);
  }
  function v312(m$$5, name$$45) {
    var v516 = Event$$1.Methods[name$$45];
    var v3931 = JAM.call(v516.methodize, v516, [], JAM.policy.p1);
    JAM.set(m$$5, name$$45, v3931, JAM.policy.p2);
    return m$$5;
  }
  function v311(event$$21, code$$5) {
    var v517;
    if (JAM.call(isIELegacyEvent, null, [event$$21], JAM.policy.p1)) {
      v517 = _isButtonForLegacyEvents(event$$21, code$$5);
    } else {
      v517 = _isButtonForDOMEvents(event$$21, code$$5);
    }
    return v517;
  }
  function v310(event$$20) {
    return true;
  }
  function v309(event$$19) {
    return!(event$$19 instanceof window.Event);
  }
  function isIELegacyEvent(event$$18) {
    return false;
  }
  function _isButtonForDOMEvents(event$$2, code$$2) {
    var v519;
    if (event$$2.which) {
      v519 = event$$2.which === code$$2 + 1;
    } else {
      v519 = event$$2.button === code$$2;
    }
    return v519;
  }
  function _isButtonForLegacyEvents(event$$3, code$$3) {
    return event$$3.button === legacyButtonMap[code$$3];
  }
  function _isButtonForWebKit(event$$4, code$$4) {
    switch(code$$4) {
      case 0:
        var v522 = event$$4.which == 1;
        if (v522) {
          v522 = !event$$4.metaKey;
        }
        return v522;
      case 1:
        var v523 = event$$4.which == 2;
        if (!v523) {
          var v2149 = event$$4.which == 1;
          if (v2149) {
            v2149 = event$$4.metaKey;
          }
          v523 = v2149;
        }
        return v523;
      case 2:
        return event$$4.which == 3;
      default:
        return false;
    }
    return;
  }
  function isLeftClick(event$$5) {
    return JAM.call(_isButton, null, [event$$5, 0], JAM.policy.p1);
  }
  function isMiddleClick(event$$6) {
    return JAM.call(_isButton, null, [event$$6, 1], JAM.policy.p1);
  }
  function isRightClick(event$$7) {
    return JAM.call(_isButton, null, [event$$7, 2], JAM.policy.p1);
  }
  function element$$172(event$$8) {
    return JAM.call(Element.extend, Element, [_element(event$$8)], JAM.policy.p1);
  }
  function _element(event$$9) {
    event$$9 = JAM.call(Event$$1.extend, Event$$1, [event$$9], JAM.policy.p1);
    var node$$19 = event$$9.target;
    var type$$33 = event$$9.type;
    var currentTarget = event$$9.currentTarget;
    var v2151 = currentTarget;
    if (v2151) {
      v2151 = currentTarget.tagName;
    }
    if (v2151) {
      var v3096 = type$$33 === "load";
      if (!v3096) {
        v3096 = type$$33 === "error";
      }
      var v2152 = v3096;
      if (!v2152) {
        var v3575 = type$$33 === "click";
        if (v3575) {
          var v3839 = currentTarget.tagName;
          v3575 = JAM.call(v3839.toLowerCase, v3839, [], JAM.policy.p1) === "input";
        }
        var v3097 = v3575;
        if (v3097) {
          v3097 = currentTarget.type === "radio";
        }
        v2152 = v3097;
      }
      if (v2152) {
        node$$19 = currentTarget;
      }
    }
    if (node$$19.nodeType == Node.TEXT_NODE) {
      node$$19 = node$$19.parentNode;
    }
    return JAM.call(Element.extend, Element, [node$$19], JAM.policy.p1);
  }
  function findElement(event$$10, expression$$7) {
    var element$$173 = _element(event$$10);
    var match$$47 = Prototype.Selector.match;
    if (!expression$$7) {
      return JAM.call(Element.extend, Element, [element$$173], JAM.policy.p1);
    }
    for (;element$$173;) {
      var v2155 = JAM.call(Object.isElement, Object, [element$$173], JAM.policy.p1);
      if (v2155) {
        v2155 = JAM.call(match$$47, null, [element$$173, expression$$7], JAM.policy.p1);
      }
      if (v2155) {
        return JAM.call(Element.extend, Element, [element$$173], JAM.policy.p1);
      }
      element$$173 = element$$173.parentNode;
    }
    return;
  }
  function pointer(event$$11) {
    return{x:pointerX(event$$11), y:pointerY(event$$11)};
  }
  function pointerX(event$$12) {
    var docElement = document.documentElement;
    var v534 = document.body;
    if (!v534) {
      v534 = {scrollLeft:0};
    }
    var body = v534;
    var v535 = event$$12.pageX;
    if (!v535) {
      var v3099 = event$$12.clientX;
      var v3577 = docElement.scrollLeft;
      if (!v3577) {
        v3577 = body.scrollLeft;
      }
      var v2157 = v3099 + v3577;
      var v3101 = docElement.clientLeft;
      if (!v3101) {
        v3101 = 0;
      }
      v535 = v2157 - v3101;
    }
    return v535;
  }
  function pointerY(event$$13) {
    var docElement$$1 = document.documentElement;
    var v536 = document.body;
    if (!v536) {
      v536 = {scrollTop:0};
    }
    var body$$1 = v536;
    var v537 = event$$13.pageY;
    if (!v537) {
      var v3102 = event$$13.clientY;
      var v3579 = docElement$$1.scrollTop;
      if (!v3579) {
        v3579 = body$$1.scrollTop;
      }
      var v2161 = v3102 + v3579;
      var v3104 = docElement$$1.clientTop;
      if (!v3104) {
        v3104 = 0;
      }
      v537 = v2161 - v3104;
    }
    return v537;
  }
  function stop(event$$14) {
    JAM.call(Event$$1.extend, Event$$1, [event$$14], JAM.policy.p1);
    JAM.call(event$$14.preventDefault, event$$14, [], JAM.policy.p1);
    JAM.call(event$$14.stopPropagation, event$$14, [], JAM.policy.p1);
    event$$14.stopped = true;
    return;
  }
  function getDOMEventName(eventName) {
    var v538 = EVENT_TRANSLATIONS[eventName];
    if (!v538) {
      v538 = eventName;
    }
    return v538;
  }
  function getUniqueElementID$$1(element$$174) {
    if (element$$174 === window) {
      return 0;
    }
    if (typeof element$$174._prototypeUID === "undefined") {
      element$$174._prototypeUID = Element.Storage.UID;
      Element.Storage.UID = Element.Storage.UID + 1;
    }
    return element$$174._prototypeUID;
  }
  function getUniqueElementID_IE$$1(element$$175) {
    if (element$$175 === window) {
      return 0;
    }
    if (element$$175 == document) {
      return 1;
    }
    return element$$175.uniqueID;
  }
  function isCustomEvent(eventName$$1) {
    return JAM.call(eventName$$1.include, eventName$$1, [":"], JAM.policy.p1);
  }
  function getRegistryForElement(element$$176, uid$$4) {
    var CACHE = GLOBAL$$1.Event.cache;
    if (JAM.call(Object.isUndefined, Object, [uid$$4], JAM.policy.p1)) {
      uid$$4 = JAM.call(getUniqueElementID$$1, null, [element$$176], JAM.policy.p1);
    }
    if (!CACHE[uid$$4]) {
      JAM.set(CACHE, uid$$4, {element:element$$176}, JAM.policy.p2);
    }
    return CACHE[uid$$4];
  }
  function observe(element$$180, eventName$$4, handler$$5) {
    element$$180 = JAM.call($, null, [element$$180], JAM.policy.p1);
    var entry$$2;
    JSCompiler_inline_label_register_42: {
      var element$$inline_33 = element$$180;
      var eventName$$inline_34 = eventName$$4;
      var handler$$inline_35 = handler$$5;
      var registry$$inline_36 = getRegistryForElement(element$$inline_33);
      if (!registry$$inline_36[eventName$$inline_34]) {
        JAM.set(registry$$inline_36, eventName$$inline_34, [], JAM.policy.p2);
      }
      var entries$$inline_37 = registry$$inline_36[eventName$$inline_34];
      var i$$inline_38 = entries$$inline_37.length;
      var v548 = i$$inline_38;
      i$$inline_38 = i$$inline_38 - 1;
      for (;v548;) {
        if (entries$$inline_37[i$$inline_38].handler === handler$$inline_35) {
          entry$$2 = null;
          break JSCompiler_inline_label_register_42;
        }
        v548 = i$$inline_38;
        i$$inline_38 = i$$inline_38 - 1;
      }
      var uid$$inline_39 = JAM.call(getUniqueElementID$$1, null, [element$$inline_33], JAM.policy.p1);
      var v549 = GLOBAL$$1.Event;
      var responder$$inline_40 = JAM.call(v549._createResponder, v549, [uid$$inline_39, eventName$$inline_34, handler$$inline_35], JAM.policy.p1);
      var entry$$inline_41 = {responder:responder$$inline_40, handler:handler$$inline_35};
      JAM.call(entries$$inline_37.push, entries$$inline_37, [entry$$inline_41], JAM.policy.p1);
      entry$$2 = entry$$inline_41;
    }
    if (entry$$2 === null) {
      return element$$180;
    }
    var responder$$4 = entry$$2.responder;
    if (isCustomEvent(eventName$$4)) {
      var element$$inline_43 = element$$180;
      var responder$$inline_45 = responder$$4;
      if (element$$inline_43.addEventListener) {
        JAM.call(element$$inline_43.addEventListener, element$$inline_43, ["dataavailable", responder$$inline_45, false], JAM.policy.p1);
      } else {
        JAM.call(element$$inline_43.attachEvent, element$$inline_43, ["ondataavailable", responder$$inline_45], JAM.policy.p1);
        JAM.call(element$$inline_43.attachEvent, element$$inline_43, ["onlosecapture", responder$$inline_45], JAM.policy.p1);
      }
    } else {
      var element$$inline_47 = element$$180;
      var responder$$inline_49 = responder$$4;
      var actualEventName$$inline_50 = JAM.call(getDOMEventName, null, [eventName$$4], JAM.policy.p1);
      if (element$$inline_47.addEventListener) {
        JAM.call(element$$inline_47.addEventListener, element$$inline_47, [actualEventName$$inline_50, responder$$inline_49, false], JAM.policy.p1);
      } else {
        JAM.call(element$$inline_47.attachEvent, element$$inline_47, ["on" + actualEventName$$inline_50, responder$$inline_49], JAM.policy.p1);
      }
    }
    return element$$180;
  }
  function stopObserving(element$$183, eventName$$7, handler$$6) {
    element$$183 = JAM.call($, null, [element$$183], JAM.policy.p1);
    var handlerGiven = !JAM.call(Object.isUndefined, Object, [handler$$6], JAM.policy.p1);
    var eventNameGiven = !JAM.call(Object.isUndefined, Object, [eventName$$7], JAM.policy.p1);
    var v2171 = !eventNameGiven;
    if (v2171) {
      v2171 = !handlerGiven;
    }
    if (v2171) {
      var element$$inline_52 = element$$183;
      var uid$$inline_53 = JAM.call(getUniqueElementID$$1, null, [element$$inline_52], JAM.policy.p1);
      var registry$$inline_54 = getRegistryForElement(element$$inline_52, uid$$inline_53);
      var element$$inline_87 = element$$inline_52;
      var uid$$inline_88 = uid$$inline_53;
      if (JAM.call(Object.isUndefined, Object, [uid$$inline_88], JAM.policy.p1)) {
        uid$$inline_88 = JAM.call(getUniqueElementID$$1, null, [element$$inline_87], JAM.policy.p1);
      }
      delete GLOBAL$$1.Event.cache[uid$$inline_88];
      var entries$$inline_55;
      var i$$inline_56;
      var eventName$$inline_57;
      for (eventName$$inline_57 in registry$$inline_54) {
        if (eventName$$inline_57 === "element") {
          continue;
        }
        entries$$inline_55 = registry$$inline_54[eventName$$inline_57];
        i$$inline_56 = entries$$inline_55.length;
        var v561 = i$$inline_56;
        i$$inline_56 = i$$inline_56 - 1;
        for (;v561;) {
          removeEvent(element$$inline_52, eventName$$inline_57, entries$$inline_55[i$$inline_56].responder);
          v561 = i$$inline_56;
          i$$inline_56 = i$$inline_56 - 1;
        }
      }
      return element$$183;
    }
    if (!handlerGiven) {
      JSCompiler_inline_label_stopObservingEventName_64: {
        var element$$inline_59 = element$$183;
        var eventName$$inline_60 = eventName$$7;
        var registry$$inline_61 = getRegistryForElement(element$$inline_59);
        var entries$$inline_62 = registry$$inline_61[eventName$$inline_60];
        if (!entries$$inline_62) {
          break JSCompiler_inline_label_stopObservingEventName_64;
        }
        delete registry$$inline_61[eventName$$inline_60];
        var i$$inline_63 = entries$$inline_62.length;
        var v565 = i$$inline_63;
        i$$inline_63 = i$$inline_63 - 1;
        for (;v565;) {
          removeEvent(element$$inline_59, eventName$$inline_60, entries$$inline_62[i$$inline_63].responder);
          v565 = i$$inline_63;
          i$$inline_63 = i$$inline_63 - 1;
        }
      }
      return element$$183;
    }
    var entry$$3;
    JSCompiler_inline_label_unregister_73: {
      var eventName$$inline_66 = eventName$$7;
      var handler$$inline_67 = handler$$6;
      var registry$$inline_68 = getRegistryForElement(element$$183);
      var entries$$inline_69 = registry$$inline_68[eventName$$inline_66];
      if (!entries$$inline_69) {
        entry$$3 = void 0;
        break JSCompiler_inline_label_unregister_73;
      }
      var i$$inline_70 = entries$$inline_69.length;
      var entry$$inline_71;
      var v569 = i$$inline_70;
      i$$inline_70 = i$$inline_70 - 1;
      for (;v569;) {
        if (entries$$inline_69[i$$inline_70].handler === handler$$inline_67) {
          entry$$inline_71 = entries$$inline_69[i$$inline_70];
          break;
        }
        v569 = i$$inline_70;
        i$$inline_70 = i$$inline_70 - 1;
      }
      if (!entry$$inline_71) {
        entry$$3 = void 0;
        break JSCompiler_inline_label_unregister_73;
      }
      var index$$inline_72 = JAM.call(entries$$inline_69.indexOf, entries$$inline_69, [entry$$inline_71], JAM.policy.p1);
      JAM.call(entries$$inline_69.splice, entries$$inline_69, [index$$inline_72, 1], JAM.policy.p1);
      entry$$3 = entry$$inline_71;
    }
    if (!entry$$3) {
      return element$$183;
    }
    removeEvent(element$$183, eventName$$7, entry$$3.responder);
    return element$$183;
  }
  function removeEvent(element$$188, eventName$$12, handler$$7) {
    if (isCustomEvent(eventName$$12)) {
      var element$$inline_74 = element$$188;
      var responder$$inline_76 = handler$$7;
      if (element$$inline_74.removeEventListener) {
        JAM.call(element$$inline_74.removeEventListener, element$$inline_74, ["dataavailable", responder$$inline_76, false], JAM.policy.p1);
      } else {
        JAM.call(element$$inline_74.detachEvent, element$$inline_74, ["ondataavailable", responder$$inline_76], JAM.policy.p1);
        JAM.call(element$$inline_74.detachEvent, element$$inline_74, ["onlosecapture", responder$$inline_76], JAM.policy.p1);
      }
    } else {
      var element$$inline_78 = element$$188;
      var responder$$inline_80 = handler$$7;
      var actualEventName$$inline_81 = JAM.call(getDOMEventName, null, [eventName$$12], JAM.policy.p1);
      if (element$$inline_78.removeEventListener) {
        JAM.call(element$$inline_78.removeEventListener, element$$inline_78, [actualEventName$$inline_81, responder$$inline_80, false], JAM.policy.p1);
      } else {
        JAM.call(element$$inline_78.detachEvent, element$$inline_78, ["on" + actualEventName$$inline_81, responder$$inline_80], JAM.policy.p1);
      }
    }
    return;
  }
  function fire(element$$190, eventName$$13, memo$$2, bubble) {
    JSCompiler_inline_label_getFireTarget_84: {
      var element$$inline_83 = JAM.call($, null, [element$$190], JAM.policy.p1);
      if (element$$inline_83 !== document) {
        element$$190 = element$$inline_83;
        break JSCompiler_inline_label_getFireTarget_84;
      }
      var v2176 = document.createEvent;
      if (v2176) {
        v2176 = !element$$inline_83.dispatchEvent;
      }
      if (v2176) {
        element$$190 = document.documentElement;
        break JSCompiler_inline_label_getFireTarget_84;
      }
      element$$190 = element$$inline_83;
    }
    if (JAM.call(Object.isUndefined, Object, [bubble], JAM.policy.p1)) {
      bubble = true;
    }
    memo$$2 = memo$$2 || {};
    var event$$15 = JAM.call(fireEvent, null, [element$$190, eventName$$13, memo$$2, bubble], JAM.policy.p1);
    return JAM.call(Event$$1.extend, Event$$1, [event$$15], JAM.policy.p1);
  }
  function fireEvent_DOM(element$$191, eventName$$14, memo$$3, bubble$$1) {
    var event$$16 = JAM.call(document.createEvent, document, ["HTMLEvents"], JAM.policy.p1);
    JAM.call(event$$16.initEvent, event$$16, ["dataavailable", bubble$$1, true], JAM.policy.p1);
    event$$16.eventName = eventName$$14;
    event$$16.memo = memo$$3;
    JAM.call(element$$191.dispatchEvent, element$$191, [event$$16], JAM.policy.p1);
    return event$$16;
  }
  function fireEvent_IE(element$$192, eventName$$15, memo$$4, bubble$$2) {
    var event$$17 = JAM.call(document.createEventObject, document, [], JAM.policy.p1);
    var v580;
    if (bubble$$2) {
      v580 = "ondataavailable";
    } else {
      v580 = "onlosecapture";
    }
    event$$17.eventType = v580;
    event$$17.eventName = eventName$$15;
    event$$17.memo = memo$$4;
    JAM.call(element$$192.fireEvent, element$$192, [event$$17.eventType, event$$17], JAM.policy.p1);
    return event$$17;
  }
  function on(element$$193, eventName$$16, selector$$5, callback$$29) {
    element$$193 = JAM.call($, null, [element$$193], JAM.policy.p1);
    var v2177 = JAM.call(Object.isFunction, Object, [selector$$5], JAM.policy.p1);
    if (v2177) {
      v2177 = JAM.call(Object.isUndefined, Object, [callback$$29], JAM.policy.p1);
    }
    if (v2177) {
      callback$$29 = selector$$5;
      selector$$5 = null;
    }
    var v583 = JAM.new(Event$$1.Handler, [element$$193, eventName$$16, selector$$5, callback$$29]);
    return JAM.call(v583.start, v583, [], JAM.policy.p1);
  }
  function destroyCache_IE() {
    GLOBAL$$1.Event.cache = null;
    return;
  }
  var DIV$$1 = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
  var docEl$$1 = document.documentElement;
  var v585 = "onmouseenter" in docEl$$1;
  if (v585) {
    v585 = "onmouseleave" in docEl$$1;
  }
  var MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED = v585;
  var Event$$1 = {KEY_BACKSPACE:8, KEY_TAB:9, KEY_RETURN:13, KEY_ESC:27, KEY_LEFT:37, KEY_UP:38, KEY_RIGHT:39, KEY_DOWN:40, KEY_DELETE:46, KEY_HOME:36, KEY_END:35, KEY_PAGEUP:33, KEY_PAGEDOWN:34, KEY_INSERT:45};
  if (window.attachEvent) {
    if (window.addEventListener) {
      isIELegacyEvent = v309;
    } else {
      isIELegacyEvent = v310;
    }
  }
  var _isButton;
  var legacyButtonMap = {0:1, 1:4, 2:2};
  if (window.attachEvent) {
    if (!window.addEventListener) {
      _isButton = _isButtonForLegacyEvents;
    } else {
      _isButton = v311;
    }
  } else {
    if (Prototype.Browser.WebKit) {
      _isButton = _isButtonForWebKit;
    } else {
      _isButton = _isButtonForDOMEvents;
    }
  }
  Event$$1.Methods = {isLeftClick:isLeftClick, isMiddleClick:isMiddleClick, isRightClick:isRightClick, element:element$$172, findElement:findElement, pointer:pointer, pointerX:pointerX, pointerY:pointerY, stop:stop};
  var v591 = JAM.call(Object.keys, Object, [Event$$1.Methods], JAM.policy.p1);
  var methods$$7 = JAM.call(v591.inject, v591, [{}, v312], JAM.policy.p1);
  if (window.attachEvent) {
    var _relatedTarget = v313;
    var additionalMethods = {stopPropagation:v314, preventDefault:v315, inspect:v316};
    Event$$1.extend = v317;
  } else {
    Event$$1.extend = Prototype.K;
  }
  if (window.addEventListener) {
    var v593 = Event$$1;
    var v2182 = window.Event.prototype;
    if (!v2182) {
      v2182 = JAM.call(document.createEvent, document, ["HTMLEvents"], JAM.policy.p1).__proto__;
    }
    v593.prototype = v2182;
    JAM.call(Object.extend, Object, [Event$$1.prototype, methods$$7], JAM.policy.p1);
  }
  var EVENT_TRANSLATIONS = {mouseenter:"mouseover", mouseleave:"mouseout"};
  if (MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED) {
    getDOMEventName = Prototype.K;
  }
  if ("uniqueID" in DIV$$1) {
    getUniqueElementID$$1 = getUniqueElementID_IE$$1;
  }
  Event$$1._isCustomEvent = isCustomEvent;
  var v597;
  if (document.createEvent) {
    v597 = fireEvent_DOM;
  } else {
    v597 = fireEvent_IE;
  }
  var fireEvent = v597;
  var v598 = Event$$1;
  var v3932 = JAM.call(Class.create, Class, [{initialize:v318, start:v319, stop:v320, handleEvent:v321}], JAM.policy.p1);
  v598.Handler = v3932;
  JAM.call(Object.extend, Object, [Event$$1, Event$$1.Methods], JAM.policy.p1);
  JAM.call(Object.extend, Object, [Event$$1, {fire:fire, observe:observe, stopObserving:stopObserving, on:on}], JAM.policy.p1);
  JAM.call(Element.addMethods, Element, [{fire:fire, observe:observe, stopObserving:stopObserving, on:on}], JAM.policy.p1);
  JAM.call(Object.extend, Object, [document, {fire:JAM.call(fire.methodize, fire, [], JAM.policy.p1), observe:JAM.call(observe.methodize, observe, [], JAM.policy.p1), stopObserving:JAM.call(stopObserving.methodize, stopObserving, [], JAM.policy.p1), on:JAM.call(on.methodize, on, [], JAM.policy.p1), loaded:false}], JAM.policy.p1);
  if (GLOBAL$$1.Event) {
    JAM.call(Object.extend, Object, [window.Event, Event$$1], JAM.policy.p1);
  } else {
    GLOBAL$$1.Event = Event$$1;
  }
  GLOBAL$$1.Event.cache = {};
  if (window.attachEvent) {
    JAM.call(window.attachEvent, window, ["onunload", destroyCache_IE], JAM.policy.p1);
  }
  DIV$$1 = null;
  docEl$$1 = null;
  return;
}
function v308() {
  return JAM.call(Form.serialize, Form, [this.element], JAM.policy.p1);
}
function v307() {
  var v608 = Form.Element;
  return JAM.call(v608.getValue, v608, [this.element], JAM.policy.p1);
}
function v306(element$$171) {
  if (element$$171.type) {
    var v2189 = element$$171.type;
    switch(JAM.call(v2189.toLowerCase, v2189, [], JAM.policy.p1)) {
      case "checkbox":
      ;
      case "radio":
        var v2190 = this.onElementEvent;
        JAM.call(Event.observe, Event, [element$$171, "click", JAM.call(v2190.bind, v2190, [this], JAM.policy.p1)], JAM.policy.p1);
        break;
      default:
        var v2191 = this.onElementEvent;
        JAM.call(Event.observe, Event, [element$$171, "change", JAM.call(v2191.bind, v2191, [this], JAM.policy.p1)], JAM.policy.p1);
    }
  }
  return;
}
function v305() {
  var v614 = JAM.call(Form.getElements, Form, [this.element], JAM.policy.p1);
  JAM.call(v614.each, v614, [this.registerCallback, this], JAM.policy.p1);
  return;
}
function v304() {
  var value$$98 = JAM.call(this.getValue, this, [], JAM.policy.p1);
  if (this.lastValue != value$$98) {
    JAM.call(this.callback, this, [this.element, value$$98], JAM.policy.p1);
    this.lastValue = value$$98;
  }
  return;
}
function v303(element$$170, callback$$28) {
  var v3933 = JAM.call($, null, [element$$170], JAM.policy.p1);
  this.element = v3933;
  this.callback = callback$$28;
  var v3934 = JAM.call(this.getValue, this, [], JAM.policy.p1);
  this.lastValue = v3934;
  var v3113 = this.element.tagName;
  if (JAM.call(v3113.toLowerCase, v3113, [], JAM.policy.p1) == "form") {
    JAM.call(this.registerFormCallbacks, this, [], JAM.policy.p1);
  } else {
    JAM.call(this.registerCallback, this, [this.element], JAM.policy.p1);
  }
  return;
}
function v302() {
  return JAM.call(Form.serialize, Form, [this.element], JAM.policy.p1);
}
function v301() {
  var v621 = Form.Element;
  return JAM.call(v621.getValue, v621, [this.element], JAM.policy.p1);
}
function v300() {
  var value$$97 = JAM.call(this.getValue, this, [], JAM.policy.p1);
  var v2195;
  var v3583 = JAM.call(Object.isString, Object, [this.lastValue], JAM.policy.p1);
  if (v3583) {
    v3583 = JAM.call(Object.isString, Object, [value$$97], JAM.policy.p1);
  }
  if (v3583) {
    v2195 = this.lastValue != value$$97;
  } else {
    v2195 = String(this.lastValue) != String(value$$97);
  }
  if (v2195) {
    JAM.call(this.callback, this, [this.element, value$$97], JAM.policy.p1);
    this.lastValue = value$$97;
  }
  return;
}
function v299($super$$5, element$$169, frequency$$1, callback$$27) {
  JAM.call($super$$5, null, [callback$$27, frequency$$1], JAM.policy.p1);
  var v3935 = JAM.call($, null, [element$$169], JAM.policy.p1);
  this.element = v3935;
  var v3936 = JAM.call(this.getValue, this, [], JAM.policy.p1);
  this.lastValue = v3936;
  return;
}
function v298() {
  function input$$1(element$$163, value$$93) {
    var v2196 = element$$163.type;
    switch(JAM.call(v2196.toLowerCase, v2196, [], JAM.policy.p1)) {
      case "checkbox":
      ;
      case "radio":
        return inputSelector(element$$163, value$$93);
      default:
        return valueSelector(element$$163, value$$93);
    }
    return;
  }
  function inputSelector(element$$164, value$$94) {
    if (JAM.call(Object.isUndefined, Object, [value$$94], JAM.policy.p1)) {
      var v626;
      if (element$$164.checked) {
        v626 = element$$164.value;
      } else {
        v626 = null;
      }
      return v626;
    } else {
      element$$164.checked = !!value$$94;
    }
    return;
  }
  function valueSelector(element$$165, value$$95) {
    if (JAM.call(Object.isUndefined, Object, [value$$95], JAM.policy.p1)) {
      return element$$165.value;
    } else {
      element$$165.value = value$$95;
    }
    return;
  }
  function select$$3(element$$166, value$$96) {
    if (JAM.call(Object.isUndefined, Object, [value$$96], JAM.policy.p1)) {
      var v2198;
      if (element$$166.type === "select-one") {
        v2198 = selectOne;
      } else {
        v2198 = selectMany;
      }
      return JAM.call(v2198, null, [element$$166], JAM.policy.p1);
    }
    var opt;
    var currentValue;
    var single = !JAM.call(Object.isArray, Object, [value$$96], JAM.policy.p1);
    var i$$57 = 0;
    var length$$32 = element$$166.length;
    var v635 = i$$57 < length$$32;
    for (;v635;) {
      opt = element$$166.options[i$$57];
      currentValue = JAM.call(this.optionValue, this, [opt], JAM.policy.p1);
      if (single) {
        if (currentValue == value$$96) {
          opt.selected = true;
          return;
        }
      } else {
        var v3937 = JAM.call(value$$96.include, value$$96, [currentValue], JAM.policy.p1);
        opt.selected = v3937;
      }
      i$$57++;
      v635 = i$$57 < length$$32;
    }
    return;
  }
  function selectOne(element$$167) {
    var index$$61 = element$$167.selectedIndex;
    var v636;
    if (index$$61 >= 0) {
      v636 = optionValue(element$$167.options[index$$61]);
    } else {
      v636 = null;
    }
    return v636;
  }
  function selectMany(element$$168) {
    var values$$8;
    var length$$33 = element$$168.length;
    if (!length$$33) {
      return null;
    }
    var i$$58 = 0;
    values$$8 = [];
    var v641 = i$$58 < length$$33;
    for (;v641;) {
      var opt$$1 = element$$168.options[i$$58];
      if (opt$$1.selected) {
        JAM.call(values$$8.push, values$$8, [optionValue(opt$$1)], JAM.policy.p1);
      }
      i$$58++;
      v641 = i$$58 < length$$33;
    }
    return values$$8;
  }
  function optionValue(opt$$2) {
    var v642;
    if (JAM.call(Element.hasAttribute, Element, [opt$$2, "value"], JAM.policy.p1)) {
      v642 = opt$$2.value;
    } else {
      v642 = opt$$2.text;
    }
    return v642;
  }
  return{input:input$$1, inputSelector:inputSelector, textarea:valueSelector, select:select$$3, selectOne:selectOne, selectMany:selectMany, optionValue:optionValue, button:valueSelector};
}
function v297(element$$162) {
  element$$162 = JAM.call($, null, [element$$162], JAM.policy.p1);
  element$$162.disabled = false;
  return element$$162;
}
function v296(element$$161) {
  element$$161 = JAM.call($, null, [element$$161], JAM.policy.p1);
  element$$161.disabled = true;
  return element$$161;
}
function v295(element$$160) {
  element$$160 = JAM.call($, null, [element$$160], JAM.policy.p1);
  try {
    JAM.call(element$$160.focus, element$$160, [], JAM.policy.p1);
    var v2202 = element$$160.select;
    if (v2202) {
      var v3772 = element$$160.tagName;
      var v3120 = JAM.call(v3772.toLowerCase, v3772, [], JAM.policy.p1) != "input";
      if (!v3120) {
        v3120 = !JAM.call(/^(?:button|reset|submit)$/i.test, /^(?:button|reset|submit)$/i, [element$$160.type], JAM.policy.p1);
      }
      v2202 = v3120;
    }
    if (v2202) {
      JAM.call(element$$160.select, element$$160, [], JAM.policy.p1);
    }
  } catch (e$$26) {
  }
  return element$$160;
}
function v294(element$$159) {
  return JAM.call($, null, [element$$159], JAM.policy.p1).value != "";
}
function v293(element$$158) {
  JAM.call($, null, [element$$158], JAM.policy.p1).value = "";
  return element$$158;
}
function v292(element$$157, value$$92) {
  element$$157 = JAM.call($, null, [element$$157], JAM.policy.p1);
  var v646 = element$$157.tagName;
  var method$$9 = JAM.call(v646.toLowerCase, v646, [], JAM.policy.p1);
  var v647 = Form.Element.Serializers;
  JAM.call(v647[method$$9], v647, [element$$157, value$$92], JAM.policy.p1);
  return element$$157;
}
function v291(element$$156) {
  element$$156 = JAM.call($, null, [element$$156], JAM.policy.p1);
  var v648 = element$$156.tagName;
  var method$$8 = JAM.call(v648.toLowerCase, v648, [], JAM.policy.p1);
  var v649 = Form.Element.Serializers;
  return JAM.call(v649[method$$8], v649, [element$$156], JAM.policy.p1);
}
function v290(element$$155) {
  element$$155 = JAM.call($, null, [element$$155], JAM.policy.p1);
  var v2206 = !element$$155.disabled;
  if (v2206) {
    v2206 = element$$155.name;
  }
  if (v2206) {
    var value$$91 = JAM.call(element$$155.getValue, element$$155, [], JAM.policy.p1);
    if (value$$91 != undefined) {
      var pair$$7 = {};
      JAM.set(pair$$7, element$$155.name, value$$91, JAM.policy.p2);
      return JAM.call(Object.toQueryString, Object, [pair$$7], JAM.policy.p1);
    }
  }
  return "";
}
function v289(element$$154) {
  var v653 = JAM.call($, null, [element$$154], JAM.policy.p1);
  JAM.call(v653.select, v653, [], JAM.policy.p1);
  return element$$154;
}
function v288(element$$153) {
  var v654 = JAM.call($, null, [element$$153], JAM.policy.p1);
  JAM.call(v654.focus, v654, [], JAM.policy.p1);
  return element$$153;
}
function v287(form$$10, options$$10) {
  form$$10 = JAM.call($, null, [form$$10], JAM.policy.p1);
  options$$10 = JAM.call(Object.clone, Object, [options$$10 || {}], JAM.policy.p1);
  var params$$1 = options$$10.parameters;
  var v655 = JAM.call(form$$10.readAttribute, form$$10, ["action"], JAM.policy.p1);
  if (!v655) {
    v655 = "";
  }
  var action = v655;
  if (JAM.call(action.blank, action, [], JAM.policy.p1)) {
    action = window.location.href;
  }
  var v3938 = JAM.call(form$$10.serialize, form$$10, [true], JAM.policy.p1);
  options$$10.parameters = v3938;
  if (params$$1) {
    if (JAM.call(Object.isString, Object, [params$$1], JAM.policy.p1)) {
      params$$1 = JAM.call(params$$1.toQueryParams, params$$1, [], JAM.policy.p1);
    }
    JAM.call(Object.extend, Object, [options$$10.parameters, params$$1], JAM.policy.p1);
  }
  var v2209 = JAM.call(form$$10.hasAttribute, form$$10, ["method"], JAM.policy.p1);
  if (v2209) {
    v2209 = !options$$10.method;
  }
  if (v2209) {
    options$$10.method = form$$10.method;
  }
  return JAM.new(Ajax.Request, [action, options$$10]);
}
function v286(form$$9) {
  form$$9 = JAM.call($, null, [form$$9], JAM.policy.p1);
  var element$$152 = JAM.call(form$$9.findFirstElement, form$$9, [], JAM.policy.p1);
  if (element$$152) {
    JAM.call(element$$152.activate, element$$152, [], JAM.policy.p1);
  }
  return form$$9;
}
function v285(form$$8) {
  function v284(element$$151) {
    return JAM.call(/^(?:input|select|textarea)$/i.test, /^(?:input|select|textarea)$/i, [element$$151.tagName], JAM.policy.p1);
  }
  function v283(element$$150) {
    return element$$150.tabIndex;
  }
  function v282(element$$149) {
    var v663 = JAM.call(element$$149.hasAttribute, element$$149, ["tabIndex"], JAM.policy.p1);
    if (v663) {
      v663 = element$$149.tabIndex >= 0;
    }
    return v663;
  }
  function v281(element$$148) {
    var v664 = "hidden" != element$$148.type;
    if (v664) {
      v664 = !element$$148.disabled;
    }
    return v664;
  }
  var v2213 = JAM.call($, null, [form$$8], JAM.policy.p1);
  var v665 = JAM.call(v2213.getElements, v2213, [], JAM.policy.p1);
  var elements$$8 = JAM.call(v665.findAll, v665, [v281], JAM.policy.p1);
  var v2214 = JAM.call(elements$$8.findAll, elements$$8, [v282], JAM.policy.p1);
  var v666 = JAM.call(v2214.sortBy, v2214, [v283], JAM.policy.p1);
  var firstByIndex = JAM.call(v666.first, v666, [], JAM.policy.p1);
  var v667;
  if (firstByIndex) {
    v667 = firstByIndex;
  } else {
    v667 = JAM.call(elements$$8.find, elements$$8, [v284], JAM.policy.p1);
  }
  return v667;
}
function v280(form$$7) {
  form$$7 = JAM.call($, null, [form$$7], JAM.policy.p1);
  var v668 = JAM.call(Form.getElements, Form, [form$$7], JAM.policy.p1);
  JAM.call(v668.invoke, v668, ["enable"], JAM.policy.p1);
  return form$$7;
}
function v279(form$$6) {
  form$$6 = JAM.call($, null, [form$$6], JAM.policy.p1);
  var v669 = JAM.call(Form.getElements, Form, [form$$6], JAM.policy.p1);
  JAM.call(v669.invoke, v669, ["disable"], JAM.policy.p1);
  return form$$6;
}
function v278(form$$5, typeName, name$$44) {
  form$$5 = JAM.call($, null, [form$$5], JAM.policy.p1);
  var inputs = JAM.call(form$$5.getElementsByTagName, form$$5, ["input"], JAM.policy.p1);
  var v2215 = !typeName;
  if (v2215) {
    v2215 = !name$$44;
  }
  if (v2215) {
    var v670 = $A(inputs);
    return JAM.call(v670.map, v670, [Element.extend], JAM.policy.p1);
  }
  var i$$56 = 0;
  var matchingInputs = [];
  var length$$31 = inputs.length;
  var v675 = i$$56 < length$$31;
  for (;v675;) {
    var input = inputs[i$$56];
    var v3123 = typeName;
    if (v3123) {
      v3123 = input.type != typeName;
    }
    var v2216 = v3123;
    if (!v2216) {
      var v3124 = name$$44;
      if (v3124) {
        v3124 = input.name != name$$44;
      }
      v2216 = v3124;
    }
    if (v2216) {
      i$$56++;
      v675 = i$$56 < length$$31;
      continue;
    }
    JAM.call(matchingInputs.push, matchingInputs, [JAM.call(Element.extend, Element, [input], JAM.policy.p1)], JAM.policy.p1);
    i$$56++;
    v675 = i$$56 < length$$31;
  }
  return matchingInputs;
}
function v277(form$$4) {
  var v676 = JAM.call($, null, [form$$4], JAM.policy.p1);
  var elements$$7 = JAM.call(v676.getElementsByTagName, v676, ["*"], JAM.policy.p1);
  var element$$147;
  var results$$19 = [];
  var serializers = Form.Element.Serializers;
  var i$$55 = 0;
  var v680 = element$$147 = elements$$7[i$$55];
  for (;v680;) {
    var v3126 = element$$147.tagName;
    if (serializers[JAM.call(v3126.toLowerCase, v3126, [], JAM.policy.p1)]) {
      JAM.call(results$$19.push, results$$19, [JAM.call(Element.extend, Element, [element$$147], JAM.policy.p1)], JAM.policy.p1);
    }
    i$$55++;
    v680 = element$$147 = elements$$7[i$$55];
  }
  return results$$19;
}
function v276(form$$3, options$$9) {
  return JAM.call(Form.serializeElements, Form, [JAM.call(Form.getElements, Form, [form$$3], JAM.policy.p1), options$$9], JAM.policy.p1);
}
function v275(elements$$6, options$$8) {
  function v274(result$$15, element$$146) {
    var v2218 = !element$$146.disabled;
    if (v2218) {
      v2218 = element$$146.name;
    }
    if (v2218) {
      key$$27 = element$$146.name;
      var v682 = JAM.call($, null, [element$$146], JAM.policy.p1);
      value$$88 = JAM.call(v682.getValue, v682, [], JAM.policy.p1);
      var v3128 = value$$88 != null;
      if (v3128) {
        v3128 = element$$146.type != "file";
      }
      var v2219 = v3128;
      if (v2219) {
        var v3129 = element$$146.type != "submit";
        if (!v3129) {
          var v3840 = !submitted;
          if (v3840) {
            v3840 = submit !== false;
          }
          var v3774 = v3840;
          if (v3774) {
            var v3841 = !submit;
            if (!v3841) {
              v3841 = key$$27 == submit;
            }
            v3774 = v3841;
          }
          var v3593 = v3774;
          if (v3593) {
            v3593 = submitted = true;
          }
          v3129 = v3593;
        }
        v2219 = v3129;
      }
      if (v2219) {
        result$$15 = JAM.call(accumulator, null, [result$$15, key$$27, value$$88], JAM.policy.p1);
      }
    }
    return result$$15;
  }
  function v273(result$$14, key$$29, value$$90) {
    value$$90 = JAM.call(value$$90.gsub, value$$90, [/(\r)?\n/, "\r\n"], JAM.policy.p1);
    value$$90 = encodeURIComponent(value$$90);
    value$$90 = JAM.call(value$$90.gsub, value$$90, [/%20/, "+"], JAM.policy.p1);
    var v3775;
    if (result$$14) {
      v3775 = "&";
    } else {
      v3775 = "";
    }
    return result$$14 + v3775 + encodeURIComponent(key$$29) + "=" + value$$90;
  }
  function v272(result$$13, key$$28, value$$89) {
    if (key$$28 in result$$13) {
      if (!JAM.call(Object.isArray, Object, [result$$13[key$$28]], JAM.policy.p1)) {
        JAM.set(result$$13, key$$28, [result$$13[key$$28]], JAM.policy.p2);
      }
      var v688 = result$$13[key$$28];
      JAM.call(v688.push, v688, [value$$89], JAM.policy.p1);
    } else {
      JAM.set(result$$13, key$$28, value$$89, JAM.policy.p2);
    }
    return result$$13;
  }
  if (typeof options$$8 != "object") {
    options$$8 = {hash:!!options$$8};
  } else {
    if (JAM.call(Object.isUndefined, Object, [options$$8.hash], JAM.policy.p1)) {
      options$$8.hash = true;
    }
  }
  var key$$27;
  var value$$88;
  var submitted = false;
  var submit = options$$8.submit;
  var accumulator;
  var initial;
  if (options$$8.hash) {
    initial = {};
    accumulator = v272;
  } else {
    initial = "";
    accumulator = v273;
  }
  return JAM.call(elements$$6.inject, elements$$6, [initial, v274], JAM.policy.p1);
}
function v271(form$$2) {
  form$$2 = JAM.call($, null, [form$$2], JAM.policy.p1);
  JAM.call(form$$2.reset, form$$2, [], JAM.policy.p1);
  return form$$2;
}
function v270(engine) {
  function select$$2(selector$$3, scope) {
    return JAM.call(extendElements$$1, null, [JAM.call(engine, null, [selector$$3, scope || document], JAM.policy.p1)], JAM.policy.p1);
  }
  function match$$46(element$$145, selector$$4) {
    return JAM.call(engine.matches, engine, [selector$$4, [element$$145]], JAM.policy.p1).length == 1;
  }
  var extendElements$$1 = Prototype.Selector.extendElements;
  Prototype.Selector.engine = engine;
  Prototype.Selector.select = select$$2;
  Prototype.Selector.match = match$$46;
  return;
}
function v269() {
  function v268(elem$$46) {
    var v2227;
    if (elem$$46) {
      var v3134 = elem$$46.ownerDocument;
      if (!v3134) {
        v3134 = elem$$46;
      }
      v2227 = v3134;
    } else {
      v2227 = 0;
    }
    var documentElement = v2227.documentElement;
    var v701;
    if (documentElement) {
      v701 = documentElement.nodeName !== "HTML";
    } else {
      v701 = false;
    }
    return v701;
  }
  function v267() {
    return false;
  }
  function v266(a$$11, b$$5) {
    return!!(JAM.call(a$$11.compareDocumentPosition, a$$11, [b$$5], JAM.policy.p1) & 16);
  }
  function v265(a$$10, b$$4) {
    var v703 = a$$10 !== b$$4;
    if (v703) {
      var v2230;
      if (a$$10.contains) {
        v2230 = JAM.call(a$$10.contains, a$$10, [b$$4], JAM.policy.p1);
      } else {
        v2230 = true;
      }
      v703 = v2230;
    }
    return v703;
  }
  function v264() {
    function v263(match$$44, context$$37, isXML$$9) {
      var v2231 = typeof context$$37.getElementsByClassName !== "undefined";
      if (v2231) {
        v2231 = !isXML$$9;
      }
      if (v2231) {
        return JAM.call(context$$37.getElementsByClassName, context$$37, [match$$44[1]], JAM.policy.p1);
      }
      return;
    }
    var div$$4 = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
    JAM.set(div$$4, "innerHTML", "<div class='test e'></div><div class='test'></div>");
    var v2232 = !div$$4.getElementsByClassName;
    if (!v2232) {
      v2232 = JAM.call(div$$4.getElementsByClassName, div$$4, ["e"], JAM.policy.p1).length === 0;
    }
    if (v2232) {
      return;
    }
    div$$4.lastChild.className = "e";
    if (JAM.call(div$$4.getElementsByClassName, div$$4, ["e"], JAM.policy.p1).length === 1) {
      return;
    }
    var v709 = Expr.order;
    JAM.call(v709.splice, v709, [1, 0, "CLASS"], JAM.policy.p1);
    Expr.find.CLASS = v263;
    div$$4 = null;
    return;
  }
  function v262() {
    function v261(node$$18, expr$$8) {
      expr$$8 = JAM.call(expr$$8.replace, expr$$8, [/\=\s*([^'"\]]*)\s*\]/g, "='$1']"], JAM.policy.p1);
      if (!JAM.call(Sizzle$$1.isXML, Sizzle$$1, [node$$18], JAM.policy.p1)) {
        try {
          var v2235 = pseudoWorks;
          if (!v2235) {
            var v3776 = Expr.match.PSEUDO;
            var v3142 = !JAM.call(v3776.test, v3776, [expr$$8], JAM.policy.p1);
            if (v3142) {
              v3142 = !JAM.call(/!=/.test, /!=/, [expr$$8], JAM.policy.p1);
            }
            v2235 = v3142;
          }
          if (v2235) {
            var ret$$6 = JAM.call(matches.call, matches, [node$$18, expr$$8], JAM.policy.p1);
            var v3144 = ret$$6;
            if (!v3144) {
              v3144 = !disconnectedMatch;
            }
            var v2236 = v3144;
            if (!v2236) {
              var v3145 = node$$18.document;
              if (v3145) {
                v3145 = node$$18.document.nodeType !== 11;
              }
              v2236 = v3145;
            }
            if (v2236) {
              return ret$$6;
            }
          }
        } catch (e$$25) {
        }
      }
      return JAM.call(Sizzle$$1, null, [expr$$8, null, null, [node$$18]], JAM.policy.p1).length > 0;
    }
    var html$$1 = document.documentElement;
    var v3148 = html$$1.matchesSelector;
    if (!v3148) {
      v3148 = html$$1.mozMatchesSelector;
    }
    var v2238 = v3148;
    if (!v2238) {
      v2238 = html$$1.webkitMatchesSelector;
    }
    var v715 = v2238;
    if (!v715) {
      v715 = html$$1.msMatchesSelector;
    }
    var matches = v715;
    if (matches) {
      var disconnectedMatch = !JAM.call(matches.call, matches, [JAM.call(document.createElement, document, ["div"], JAM.policy.p1), "div"], JAM.policy.p1);
      var pseudoWorks = false;
      try {
        JAM.call(matches.call, matches, [document.documentElement, "[test!='']:sizzle"], JAM.policy.p1);
      } catch (pseudoError$$1) {
        pseudoWorks = true;
      }
      Sizzle$$1.matchesSelector = v261;
    }
    return;
  }
  function v260() {
    function v259(query$$2, context$$36, extra$$1, seed$$1) {
      context$$36 = context$$36 || document;
      var v2241 = !seed$$1;
      if (v2241) {
        v2241 = !JAM.call(Sizzle$$1.isXML, Sizzle$$1, [context$$36], JAM.policy.p1);
      }
      if (v2241) {
        var match$$43 = JAM.call(/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec, /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/, [query$$2], JAM.policy.p1);
        var v2242 = match$$43;
        if (v2242) {
          var v3151 = context$$36.nodeType === 1;
          if (!v3151) {
            v3151 = context$$36.nodeType === 9;
          }
          v2242 = v3151;
        }
        if (v2242) {
          if (match$$43[1]) {
            return JAM.call(makeArray, null, [JAM.call(context$$36.getElementsByTagName, context$$36, [query$$2], JAM.policy.p1), extra$$1], JAM.policy.p1);
          } else {
            var v3152 = match$$43[2];
            if (v3152) {
              v3152 = Expr.find.CLASS;
            }
            var v2243 = v3152;
            if (v2243) {
              v2243 = context$$36.getElementsByClassName;
            }
            if (v2243) {
              return JAM.call(makeArray, null, [JAM.call(context$$36.getElementsByClassName, context$$36, [match$$43[2]], JAM.policy.p1), extra$$1], JAM.policy.p1);
            }
          }
        }
        if (context$$36.nodeType === 9) {
          var v2246 = query$$2 === "body";
          if (v2246) {
            v2246 = context$$36.body;
          }
          if (v2246) {
            return JAM.call(makeArray, null, [[context$$36.body], extra$$1], JAM.policy.p1);
          } else {
            var v2248 = match$$43;
            if (v2248) {
              v2248 = match$$43[3];
            }
            if (v2248) {
              var elem$$45 = JAM.call(context$$36.getElementById, context$$36, [match$$43[3]], JAM.policy.p1);
              var v2249 = elem$$45;
              if (v2249) {
                v2249 = elem$$45.parentNode;
              }
              if (v2249) {
                if (elem$$45.id === match$$43[3]) {
                  return JAM.call(makeArray, null, [[elem$$45], extra$$1], JAM.policy.p1);
                }
              } else {
                return JAM.call(makeArray, null, [[], extra$$1], JAM.policy.p1);
              }
            }
          }
          try {
            return JAM.call(makeArray, null, [JAM.call(context$$36.querySelectorAll, context$$36, [query$$2], JAM.policy.p1), extra$$1], JAM.policy.p1);
          } catch (qsaError) {
          }
        } else {
          var v2252 = context$$36.nodeType === 1;
          if (v2252) {
            var v3608 = context$$36.nodeName;
            v2252 = JAM.call(v3608.toLowerCase, v3608, [], JAM.policy.p1) !== "object";
          }
          if (v2252) {
            var oldContext = context$$36;
            var old$$1 = JAM.call(context$$36.getAttribute, context$$36, ["id"], JAM.policy.p1);
            var nid = old$$1 || id$$3;
            var hasParent = context$$36.parentNode;
            var relativeHierarchySelector = JAM.call(/^\s*[+~]/.test, /^\s*[+~]/, [query$$2], JAM.policy.p1);
            if (!old$$1) {
              JAM.call(context$$36.setAttribute, context$$36, ["id", nid], JAM.policy.p1);
            } else {
              nid = JAM.call(nid.replace, nid, [/'/g, "\\$&"], JAM.policy.p1);
            }
            if (relativeHierarchySelector && hasParent) {
              context$$36 = context$$36.parentNode;
            }
            try {
              var v2253 = !relativeHierarchySelector;
              if (!v2253) {
                v2253 = hasParent;
              }
              if (v2253) {
                return JAM.call(makeArray, null, [JAM.call(context$$36.querySelectorAll, context$$36, ["[id='" + nid + "'] " + query$$2], JAM.policy.p1), extra$$1], JAM.policy.p1);
              }
            } catch (pseudoError) {
            } finally {
              if (!old$$1) {
                JAM.call(oldContext.removeAttribute, oldContext, ["id"], JAM.policy.p1);
              }
            }
          }
        }
      }
      return JAM.call(oldSizzle, null, [query$$2, context$$36, extra$$1, seed$$1], JAM.policy.p1);
    }
    var oldSizzle = Sizzle$$1;
    var div$$3 = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
    var id$$3 = "__sizzle__";
    JAM.set(div$$3, "innerHTML", "<p class='TEST'></p>");
    var v2255 = div$$3.querySelectorAll;
    if (v2255) {
      v2255 = JAM.call(div$$3.querySelectorAll, div$$3, [".TEST"], JAM.policy.p1).length === 0;
    }
    if (v2255) {
      return;
    }
    Sizzle$$1 = v259;
    var prop$$4;
    for (prop$$4 in oldSizzle) {
      JAM.set(Sizzle$$1, prop$$4, oldSizzle[prop$$4], JAM.policy.p2);
    }
    div$$3 = null;
    return;
  }
  function v258() {
    function v257(elem$$44) {
      return JAM.call(elem$$44.getAttribute, elem$$44, ["href", 2], JAM.policy.p1);
    }
    function v256(match$$42, context$$35) {
      var results$$18 = JAM.call(context$$35.getElementsByTagName, context$$35, [match$$42[1]], JAM.policy.p1);
      if (match$$42[1] === "*") {
        var tmp = [];
        var i$$53 = 0;
        var v743 = results$$18[i$$53];
        for (;v743;) {
          if (results$$18[i$$53].nodeType === 1) {
            JAM.call(tmp.push, tmp, [results$$18[i$$53]], JAM.policy.p1);
          }
          i$$53++;
          v743 = results$$18[i$$53];
        }
        results$$18 = tmp;
      }
      return results$$18;
    }
    var div$$2 = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
    JAM.call(div$$2.appendChild, div$$2, [JAM.call(document.createComment, document, [""], JAM.policy.p1)], JAM.policy.p1);
    if (JAM.call(div$$2.getElementsByTagName, div$$2, ["*"], JAM.policy.p1).length > 0) {
      Expr.find.TAG = v256;
    }
    JAM.set(div$$2, "innerHTML", "<a href='#'></a>");
    var v3160 = div$$2.firstChild;
    if (v3160) {
      v3160 = typeof div$$2.firstChild.getAttribute !== "undefined";
    }
    var v2259 = v3160;
    if (v2259) {
      var v3612 = div$$2.firstChild;
      v2259 = JAM.call(v3612.getAttribute, v3612, ["href"], JAM.policy.p1) !== "#";
    }
    if (v2259) {
      Expr.attrHandle.href = v257;
    }
    div$$2 = null;
    return;
  }
  function v255() {
    function v254(elem$$43, match$$41) {
      var v750 = typeof elem$$43.getAttributeNode !== "undefined";
      if (v750) {
        v750 = JAM.call(elem$$43.getAttributeNode, elem$$43, ["id"], JAM.policy.p1);
      }
      var node$$17 = v750;
      var v2261 = elem$$43.nodeType === 1;
      if (v2261) {
        v2261 = node$$17;
      }
      var v751 = v2261;
      if (v751) {
        v751 = node$$17.nodeValue === match$$41;
      }
      return v751;
    }
    function v253(match$$40, context$$34, isXML$$8) {
      var v2263 = typeof context$$34.getElementById !== "undefined";
      if (v2263) {
        v2263 = !isXML$$8;
      }
      if (v2263) {
        var m$$4 = JAM.call(context$$34.getElementById, context$$34, [match$$40[1]], JAM.policy.p1);
        var v753;
        if (m$$4) {
          var v2264;
          var v3614 = m$$4.id === match$$40[1];
          if (!v3614) {
            var v3781 = typeof m$$4.getAttributeNode !== "undefined";
            if (v3781) {
              v3781 = JAM.call(m$$4.getAttributeNode, m$$4, ["id"], JAM.policy.p1).nodeValue === match$$40[1];
            }
            v3614 = v3781;
          }
          if (v3614) {
            v2264 = [m$$4];
          } else {
            v2264 = undefined;
          }
          v753 = v2264;
        } else {
          v753 = [];
        }
        return v753;
      }
      return;
    }
    var form$$1 = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
    var v2265 = new Date;
    var id$$2 = "script" + JAM.call(v2265.getTime, v2265, [], JAM.policy.p1);
    var root = document.documentElement;
    JAM.set(form$$1, "innerHTML", "<a name='" + id$$2 + "'/>");
    JAM.call(root.insertBefore, root, [form$$1, root.firstChild], JAM.policy.p1);
    if (JAM.call(document.getElementById, document, [id$$2], JAM.policy.p1)) {
      Expr.find.ID = v253;
      Expr.filter.ID = v254;
    }
    JAM.call(root.removeChild, root, [form$$1], JAM.policy.p1);
    root = form$$1 = null;
    return;
  }
  function v252(elems) {
    var ret$$5 = "";
    var elem$$42;
    var i$$52 = 0;
    var v763 = elems[i$$52];
    for (;v763;) {
      elem$$42 = elems[i$$52];
      var v2266 = elem$$42.nodeType === 3;
      if (!v2266) {
        v2266 = elem$$42.nodeType === 4;
      }
      if (v2266) {
        ret$$5 = ret$$5 + elem$$42.nodeValue;
      } else {
        if (elem$$42.nodeType !== 8) {
          ret$$5 = ret$$5 + JAM.call(Sizzle$$1.getText, Sizzle$$1, [elem$$42.childNodes], JAM.policy.p1);
        }
      }
      i$$52++;
      v763 = elems[i$$52];
    }
    return ret$$5;
  }
  function v251(a$$9, b$$3, ret$$4) {
    if (a$$9 === b$$3) {
      return ret$$4;
    }
    var cur$$4 = a$$9.nextSibling;
    for (;cur$$4;) {
      if (cur$$4 === b$$3) {
        return-1;
      }
      cur$$4 = cur$$4.nextSibling;
    }
    return 1;
  }
  function v250(a$$8, b$$2) {
    if (a$$8 === b$$2) {
      hasDuplicate = true;
      return 0;
    } else {
      var v2270 = a$$8.sourceIndex;
      if (v2270) {
        v2270 = b$$2.sourceIndex;
      }
      if (v2270) {
        return a$$8.sourceIndex - b$$2.sourceIndex;
      }
    }
    var al;
    var bl$$1;
    var ap = [];
    var bp = [];
    var aup = a$$8.parentNode;
    var bup = b$$2.parentNode;
    var cur$$3 = aup;
    if (aup === bup) {
      return JAM.call(siblingCheck, null, [a$$8, b$$2], JAM.policy.p1);
    } else {
      if (!aup) {
        return-1;
      } else {
        if (!bup) {
          return 1;
        }
      }
    }
    for (;cur$$3;) {
      JAM.call(ap.unshift, ap, [cur$$3], JAM.policy.p1);
      cur$$3 = cur$$3.parentNode;
    }
    cur$$3 = bup;
    for (;cur$$3;) {
      JAM.call(bp.unshift, bp, [cur$$3], JAM.policy.p1);
      cur$$3 = cur$$3.parentNode;
    }
    al = ap.length;
    bl$$1 = bp.length;
    var i$$51 = 0;
    var v2271 = i$$51 < al;
    if (v2271) {
      v2271 = i$$51 < bl$$1;
    }
    var v776 = v2271;
    for (;v776;) {
      if (ap[i$$51] !== bp[i$$51]) {
        return JAM.call(siblingCheck, null, [ap[i$$51], bp[i$$51]], JAM.policy.p1);
      }
      i$$51++;
      var v2274 = i$$51 < al;
      if (v2274) {
        v2274 = i$$51 < bl$$1;
      }
      v776 = v2274;
    }
    var v777;
    if (i$$51 === al) {
      v777 = JAM.call(siblingCheck, null, [a$$8, bp[i$$51], -1], JAM.policy.p1);
    } else {
      v777 = JAM.call(siblingCheck, null, [ap[i$$51], b$$2, 1], JAM.policy.p1);
    }
    return v777;
  }
  function v249(a$$7, b$$1) {
    if (a$$7 === b$$1) {
      hasDuplicate = true;
      return 0;
    }
    var v2278 = !a$$7.compareDocumentPosition;
    if (!v2278) {
      v2278 = !b$$1.compareDocumentPosition;
    }
    if (v2278) {
      var v779;
      if (a$$7.compareDocumentPosition) {
        v779 = -1;
      } else {
        v779 = 1;
      }
      return v779;
    }
    var v781;
    if (JAM.call(a$$7.compareDocumentPosition, a$$7, [b$$1], JAM.policy.p1) & 4) {
      v781 = -1;
    } else {
      v781 = 1;
    }
    return v781;
  }
  function v248(array$$22, results$$17) {
    var i$$50 = 0;
    var ret$$3 = results$$17 || [];
    if (JAM.call(toString.call, toString, [array$$22], JAM.policy.p1) === "[object Array]") {
      var v782 = Array.prototype.push;
      JAM.call(v782.apply, v782, [ret$$3, array$$22], JAM.policy.p1);
    } else {
      if (typeof array$$22.length === "number") {
        var l$$7 = array$$22.length;
        var v784 = i$$50 < l$$7;
        for (;v784;) {
          JAM.call(ret$$3.push, ret$$3, [array$$22[i$$50]], JAM.policy.p1);
          i$$50++;
          v784 = i$$50 < l$$7;
        }
      } else {
        var v786 = array$$22[i$$50];
        for (;v786;) {
          JAM.call(ret$$3.push, ret$$3, [array$$22[i$$50]], JAM.policy.p1);
          i$$50++;
          v786 = array$$22[i$$50];
        }
      }
    }
    return ret$$3;
  }
  function v247(elem$$41, match$$39, i$$49, array$$20) {
    var name$$43 = match$$39[2];
    var filter$$8 = Expr.setFilters[name$$43];
    if (filter$$8) {
      return JAM.call(filter$$8, null, [elem$$41, i$$49, match$$39, array$$20], JAM.policy.p1);
    }
    return;
  }
  function v246(elem$$40, match$$38) {
    var name$$42 = match$$38[1];
    var v790;
    if (Expr.attrHandle[name$$42]) {
      var v2284 = Expr.attrHandle;
      v790 = JAM.call(v2284[name$$42], v2284, [elem$$40], JAM.policy.p1);
    } else {
      var v2285;
      if (elem$$40[name$$42] != null) {
        v2285 = elem$$40[name$$42];
      } else {
        v2285 = JAM.call(elem$$40.getAttribute, elem$$40, [name$$42], JAM.policy.p1);
      }
      v790 = v2285;
    }
    var result$$12 = v790;
    var value$$87 = result$$12 + "";
    var type$$32 = match$$38[2];
    var check = match$$38[4];
    var v791;
    if (result$$12 == null) {
      v791 = type$$32 === "!=";
    } else {
      var v2287;
      if (type$$32 === "=") {
        v2287 = value$$87 === check;
      } else {
        var v3177;
        if (type$$32 === "*=") {
          v3177 = JAM.call(value$$87.indexOf, value$$87, [check], JAM.policy.p1) >= 0;
        } else {
          var v3617;
          if (type$$32 === "~=") {
            var v3847 = " " + value$$87 + " ";
            v3617 = JAM.call(v3847.indexOf, v3847, [check], JAM.policy.p1) >= 0;
          } else {
            var v3784;
            if (!check) {
              var v3848 = value$$87;
              if (v3848) {
                v3848 = result$$12 !== false;
              }
              v3784 = v3848;
            } else {
              var v3849;
              if (type$$32 === "!=") {
                v3849 = value$$87 !== check;
              } else {
                var v3883;
                if (type$$32 === "^=") {
                  v3883 = JAM.call(value$$87.indexOf, value$$87, [check], JAM.policy.p1) === 0;
                } else {
                  var v3894;
                  if (type$$32 === "$=") {
                    v3894 = JAM.call(value$$87.substr, value$$87, [value$$87.length - check.length], JAM.policy.p1) === check;
                  } else {
                    var v3904;
                    if (type$$32 === "|=") {
                      var v3909 = value$$87 === check;
                      if (!v3909) {
                        v3909 = JAM.call(value$$87.substr, value$$87, [0, check.length + 1], JAM.policy.p1) === check + "-";
                      }
                      v3904 = v3909;
                    } else {
                      v3904 = false;
                    }
                    v3894 = v3904;
                  }
                  v3883 = v3894;
                }
                v3849 = v3883;
              }
              v3784 = v3849;
            }
            v3617 = v3784;
          }
          v3177 = v3617;
        }
        v2287 = v3177;
      }
      v791 = v2287;
    }
    return v791;
  }
  function v245(elem$$39, match$$37) {
    var v3786 = elem$$39.className;
    if (!v3786) {
      v3786 = JAM.call(elem$$39.getAttribute, elem$$39, ["class"], JAM.policy.p1);
    }
    var v2289 = " " + v3786 + " ";
    return JAM.call(v2289.indexOf, v2289, [match$$37], JAM.policy.p1) > -1;
  }
  function v244(elem$$38, match$$36) {
    var v2290 = match$$36 === "*";
    if (v2290) {
      v2290 = elem$$38.nodeType === 1;
    }
    var v793 = v2290;
    if (!v793) {
      var v3181 = elem$$38.nodeName;
      v793 = JAM.call(v3181.toLowerCase, v3181, [], JAM.policy.p1) === match$$36;
    }
    return v793;
  }
  function v243(elem$$37, match$$35) {
    var v794 = elem$$37.nodeType === 1;
    if (v794) {
      v794 = JAM.call(elem$$37.getAttribute, elem$$37, ["id"], JAM.policy.p1) === match$$35;
    }
    return v794;
  }
  function v242(elem$$36, match$$34) {
    var type$$31 = match$$34[1];
    var node$$16 = elem$$36;
    switch(type$$31) {
      case "only":
      ;
      case "first":
        var v796 = node$$16 = node$$16.previousSibling;
        for (;v796;) {
          if (node$$16.nodeType === 1) {
            return false;
          }
          v796 = node$$16 = node$$16.previousSibling;
        }
        if (type$$31 === "first") {
          return true;
        }
        node$$16 = elem$$36;
      case "last":
        var v799 = node$$16 = node$$16.nextSibling;
        for (;v799;) {
          if (node$$16.nodeType === 1) {
            return false;
          }
          v799 = node$$16 = node$$16.nextSibling;
        }
        return true;
      case "nth":
        var first$$2 = match$$34[2];
        var last$$1 = match$$34[3];
        var v2297 = first$$2 === 1;
        if (v2297) {
          v2297 = last$$1 === 0;
        }
        if (v2297) {
          return true;
        }
        var doneName$$4 = match$$34[0];
        var parent$$9 = elem$$36.parentNode;
        var v2298 = parent$$9;
        if (v2298) {
          var v3182 = parent$$9.sizcache !== doneName$$4;
          if (!v3182) {
            v3182 = !elem$$36.nodeIndex;
          }
          v2298 = v3182;
        }
        if (v2298) {
          var count$$5 = 0;
          node$$16 = parent$$9.firstChild;
          for (;node$$16;) {
            if (node$$16.nodeType === 1) {
              node$$16.nodeIndex = count$$5 = count$$5 + 1;
            }
            node$$16 = node$$16.nextSibling;
          }
          parent$$9.sizcache = doneName$$4;
        }
        var diff = elem$$36.nodeIndex - last$$1;
        if (first$$2 === 0) {
          return diff === 0;
        } else {
          var v804 = diff % first$$2 === 0;
          if (v804) {
            v804 = diff / first$$2 >= 0;
          }
          return v804;
        }
      ;
    }
    return;
  }
  function v241(elem$$35, match$$33, i$$48, array$$19) {
    var name$$41 = match$$33[1];
    var filter$$7 = Expr.filters[name$$41];
    if (filter$$7) {
      return JAM.call(filter$$7, null, [elem$$35, i$$48, match$$33, array$$19], JAM.policy.p1);
    } else {
      if (name$$41 === "contains") {
        var v3787 = elem$$35.textContent;
        if (!v3787) {
          v3787 = elem$$35.innerText;
        }
        var v3623 = v3787;
        if (!v3623) {
          v3623 = JAM.call(Sizzle$$1.getText, Sizzle$$1, [[elem$$35]], JAM.policy.p1);
        }
        var v3183 = v3623;
        if (!v3183) {
          v3183 = "";
        }
        var v2302 = v3183;
        return JAM.call(v2302.indexOf, v2302, [match$$33[3]], JAM.policy.p1) >= 0;
      } else {
        if (name$$41 === "not") {
          var not$$4 = match$$33[3];
          var j$$1 = 0;
          var l$$6 = not$$4.length;
          var v809 = j$$1 < l$$6;
          for (;v809;) {
            if (not$$4[j$$1] === elem$$35) {
              return false;
            }
            j$$1++;
            v809 = j$$1 < l$$6;
          }
          return true;
        } else {
          JAM.call(Sizzle$$1.error, Sizzle$$1, [name$$41], JAM.policy.p1);
        }
      }
    }
    return;
  }
  function v240(elem$$34, i$$47, match$$32) {
    return match$$32[3] - 0 === i$$47;
  }
  function v239(elem$$33, i$$46, match$$31) {
    return match$$31[3] - 0 === i$$46;
  }
  function v238(elem$$32, i$$45, match$$30) {
    return i$$45 > match$$30[3] - 0;
  }
  function v237(elem$$31, i$$44, match$$29) {
    return i$$44 < match$$29[3] - 0;
  }
  function v236(elem$$30, i$$43) {
    return i$$43 % 2 === 1;
  }
  function v235(elem$$29, i$$42) {
    return i$$42 % 2 === 0;
  }
  function v234(elem$$28, i$$41, match$$28, array$$18) {
    return i$$41 === array$$18.length - 1;
  }
  function v233(elem$$27, i$$40) {
    return i$$40 === 0;
  }
  function v232(elem$$26) {
    return elem$$26 === elem$$26.ownerDocument.activeElement;
  }
  function v231(elem$$25) {
    return JAM.call(/input|select|textarea|button/i.test, /input|select|textarea|button/i, [elem$$25.nodeName], JAM.policy.p1);
  }
  function v230(elem$$24) {
    var v821 = elem$$24.nodeName;
    var name$$40 = JAM.call(v821.toLowerCase, v821, [], JAM.policy.p1);
    var v2311 = name$$40 === "input";
    if (v2311) {
      v2311 = "button" === elem$$24.type;
    }
    var v822 = v2311;
    if (!v822) {
      v822 = name$$40 === "button";
    }
    return v822;
  }
  function v229(elem$$23) {
    var v823 = elem$$23.nodeName;
    var name$$39 = JAM.call(v823.toLowerCase, v823, [], JAM.policy.p1);
    var v2313 = name$$39 === "input";
    if (!v2313) {
      v2313 = name$$39 === "button";
    }
    var v824 = v2313;
    if (v824) {
      v824 = "reset" === elem$$23.type;
    }
    return v824;
  }
  function v228(elem$$22) {
    var v3186 = elem$$22.nodeName;
    var v825 = JAM.call(v3186.toLowerCase, v3186, [], JAM.policy.p1) === "input";
    if (v825) {
      v825 = "image" === elem$$22.type;
    }
    return v825;
  }
  function v227(elem$$21) {
    var v826 = elem$$21.nodeName;
    var name$$38 = JAM.call(v826.toLowerCase, v826, [], JAM.policy.p1);
    var v2317 = name$$38 === "input";
    if (!v2317) {
      v2317 = name$$38 === "button";
    }
    var v827 = v2317;
    if (v827) {
      v827 = "submit" === elem$$21.type;
    }
    return v827;
  }
  function v226(elem$$20) {
    var v3188 = elem$$20.nodeName;
    var v828 = JAM.call(v3188.toLowerCase, v3188, [], JAM.policy.p1) === "input";
    if (v828) {
      v828 = "password" === elem$$20.type;
    }
    return v828;
  }
  function v225(elem$$19) {
    var v3189 = elem$$19.nodeName;
    var v829 = JAM.call(v3189.toLowerCase, v3189, [], JAM.policy.p1) === "input";
    if (v829) {
      v829 = "file" === elem$$19.type;
    }
    return v829;
  }
  function v224(elem$$18) {
    var v3190 = elem$$18.nodeName;
    var v830 = JAM.call(v3190.toLowerCase, v3190, [], JAM.policy.p1) === "input";
    if (v830) {
      v830 = "checkbox" === elem$$18.type;
    }
    return v830;
  }
  function v223(elem$$17) {
    var v3191 = elem$$17.nodeName;
    var v831 = JAM.call(v3191.toLowerCase, v3191, [], JAM.policy.p1) === "input";
    if (v831) {
      v831 = "radio" === elem$$17.type;
    }
    return v831;
  }
  function v222(elem$$16) {
    var attr$$2 = JAM.call(elem$$16.getAttribute, elem$$16, ["type"], JAM.policy.p1);
    var type$$30 = elem$$16.type;
    var v3625 = elem$$16.nodeName;
    var v2327 = JAM.call(v3625.toLowerCase, v3625, [], JAM.policy.p1) === "input";
    if (v2327) {
      v2327 = "text" === type$$30;
    }
    var v832 = v2327;
    if (v832) {
      var v2328 = attr$$2 === type$$30;
      if (!v2328) {
        v2328 = attr$$2 === null;
      }
      v832 = v2328;
    }
    return v832;
  }
  function v221(elem$$15) {
    return JAM.call(/h\d/i.test, /h\d/i, [elem$$15.nodeName], JAM.policy.p1);
  }
  function v220(elem$$14, i$$39, match$$27) {
    return!!JAM.call(Sizzle$$1, null, [match$$27[3], elem$$14], JAM.policy.p1).length;
  }
  function v219(elem$$13) {
    return!elem$$13.firstChild;
  }
  function v218(elem$$12) {
    return!!elem$$12.firstChild;
  }
  function v217(elem$$11) {
    return elem$$11.selected === true;
  }
  function v216(elem$$10) {
    return elem$$10.checked === true;
  }
  function v215(elem$$9) {
    return elem$$9.disabled === true;
  }
  function v214(elem$$8) {
    var v840 = elem$$8.disabled === false;
    if (v840) {
      v840 = elem$$8.type !== "hidden";
    }
    return v840;
  }
  function v213(match$$26) {
    JAM.call(match$$26.unshift, match$$26, [true], JAM.policy.p1);
    return match$$26;
  }
  function v212(match$$25, curLoop$$4, inplace$$3, result$$11, not$$3) {
    if (match$$25[1] === "not") {
      var v3790 = JAM.call(chunker.exec, chunker, [match$$25[3]], JAM.policy.p1);
      if (!v3790) {
        v3790 = "";
      }
      var v2334 = v3790.length > 1;
      if (!v2334) {
        v2334 = JAM.call(/^\w/.test, /^\w/, [match$$25[3]], JAM.policy.p1);
      }
      if (v2334) {
        var v3939 = JAM.call(Sizzle$$1, null, [match$$25[3], null, null, curLoop$$4], JAM.policy.p1);
        match$$25[3] = v3939;
      } else {
        var ret$$2 = JAM.call(Sizzle$$1.filter, Sizzle$$1, [match$$25[3], curLoop$$4, inplace$$3, true ^ not$$3], JAM.policy.p1);
        if (!inplace$$3) {
          var v844 = result$$11.push;
          JAM.call(v844.apply, v844, [result$$11, ret$$2], JAM.policy.p1);
        }
        return false;
      }
    } else {
      var v3198 = Expr.match.POS;
      var v2335 = JAM.call(v3198.test, v3198, [match$$25[0]], JAM.policy.p1);
      if (!v2335) {
        var v3200 = Expr.match.CHILD;
        v2335 = JAM.call(v3200.test, v3200, [match$$25[0]], JAM.policy.p1);
      }
      if (v2335) {
        return true;
      }
    }
    return match$$25;
  }
  function v211(match$$24, curLoop$$3, inplace$$2, result$$10, not$$2, isXML$$7) {
    var v849 = match$$24[1];
    var v3940 = JAM.call(v849.replace, v849, [rBackslash, ""], JAM.policy.p1);
    var name$$37 = match$$24[1] = v3940;
    var v2336 = !isXML$$7;
    if (v2336) {
      v2336 = Expr.attrMap[name$$37];
    }
    if (v2336) {
      match$$24[1] = Expr.attrMap[name$$37];
    }
    var v3204 = match$$24[4];
    if (!v3204) {
      v3204 = match$$24[5];
    }
    var v2337 = v3204;
    if (!v2337) {
      v2337 = "";
    }
    var v852 = v2337;
    var v3941 = JAM.call(v852.replace, v852, [rBackslash, ""], JAM.policy.p1);
    match$$24[4] = v3941;
    if (match$$24[2] === "~=") {
      match$$24[4] = " " + match$$24[4] + " ";
    }
    return match$$24;
  }
  function v210(match$$23) {
    if (match$$23[1] === "nth") {
      if (!match$$23[2]) {
        JAM.call(Sizzle$$1.error, Sizzle$$1, [match$$23[0]], JAM.policy.p1);
      }
      var v857 = match$$23[2];
      var v3942 = JAM.call(v857.replace, v857, [/^\+|\s*/g, ""], JAM.policy.p1);
      match$$23[2] = v3942;
      var v3791 = match$$23[2] === "even";
      if (v3791) {
        v3791 = "2n";
      }
      var v3631 = v3791;
      if (!v3631) {
        var v3792 = match$$23[2] === "odd";
        if (v3792) {
          v3792 = "2n+1";
        }
        v3631 = v3792;
      }
      var v3206 = v3631;
      if (!v3206) {
        var v3632 = !JAM.call(/\D/.test, /\D/, [match$$23[2]], JAM.policy.p1);
        if (v3632) {
          v3632 = "0n+" + match$$23[2];
        }
        v3206 = v3632;
      }
      var v2342 = v3206;
      if (!v2342) {
        v2342 = match$$23[2];
      }
      var test = JAM.call(/(-?)(\d*)(?:n([+\-]?\d*))?/.exec, /(-?)(\d*)(?:n([+\-]?\d*))?/, [v2342], JAM.policy.p1);
      var v2343 = test[1];
      var v3208 = test[2];
      if (!v3208) {
        v3208 = 1;
      }
      match$$23[2] = v2343 + v3208 - 0;
      match$$23[3] = test[3] - 0;
    } else {
      if (match$$23[2]) {
        JAM.call(Sizzle$$1.error, Sizzle$$1, [match$$23[0]], JAM.policy.p1);
      }
    }
    match$$23[0] = done;
    done = done + 1;
    return match$$23;
  }
  function v209(match$$22, curLoop$$2) {
    var v2345 = match$$22[1];
    var v864 = JAM.call(v2345.replace, v2345, [rBackslash, ""], JAM.policy.p1);
    return JAM.call(v864.toLowerCase, v864, [], JAM.policy.p1);
  }
  function v208(match$$21) {
    var v865 = match$$21[1];
    return JAM.call(v865.replace, v865, [rBackslash, ""], JAM.policy.p1);
  }
  function v207(match$$20, curLoop$$1, inplace$$1, result$$9, not$$1, isXML$$6) {
    var v3209 = match$$20[1];
    match$$20 = " " + JAM.call(v3209.replace, v3209, [rBackslash, ""], JAM.policy.p1) + " ";
    if (isXML$$6) {
      return match$$20;
    }
    var i$$38 = 0;
    var elem$$7;
    var v869 = (elem$$7 = curLoop$$1[i$$38]) != null;
    for (;v869;) {
      if (elem$$7) {
        var v3210 = elem$$7.className;
        if (v3210) {
          var v3858 = " " + elem$$7.className + " ";
          var v3796 = JAM.call(v3858.replace, v3858, [/[\t\n\r]/g, " "], JAM.policy.p1);
          v3210 = JAM.call(v3796.indexOf, v3796, [match$$20], JAM.policy.p1) >= 0;
        }
        if (not$$1 ^ v3210) {
          if (!inplace$$1) {
            JAM.call(result$$9.push, result$$9, [elem$$7], JAM.policy.p1);
          }
        } else {
          if (inplace$$1) {
            curLoop$$1[i$$38] = false;
          }
        }
      }
      i$$38++;
      v869 = (elem$$7 = curLoop$$1[i$$38]) != null;
    }
    return false;
  }
  function v206(match$$19, context$$33) {
    if (typeof context$$33.getElementsByTagName !== "undefined") {
      return JAM.call(context$$33.getElementsByTagName, context$$33, [match$$19[1]], JAM.policy.p1);
    }
    return;
  }
  function v205(match$$18, context$$32) {
    if (typeof context$$32.getElementsByName !== "undefined") {
      var ret$$1 = [];
      var results$$15 = JAM.call(context$$32.getElementsByName, context$$32, [match$$18[1]], JAM.policy.p1);
      var i$$37 = 0;
      var l$$5 = results$$15.length;
      var v875 = i$$37 < l$$5;
      for (;v875;) {
        var v3213 = results$$15[i$$37];
        if (JAM.call(v3213.getAttribute, v3213, ["name"], JAM.policy.p1) === match$$18[1]) {
          JAM.call(ret$$1.push, ret$$1, [results$$15[i$$37]], JAM.policy.p1);
        }
        i$$37++;
        v875 = i$$37 < l$$5;
      }
      var v876;
      if (ret$$1.length === 0) {
        v876 = null;
      } else {
        v876 = ret$$1;
      }
      return v876;
    }
    return;
  }
  function v204(match$$17, context$$31, isXML$$5) {
    var v2355 = typeof context$$31.getElementById !== "undefined";
    if (v2355) {
      v2355 = !isXML$$5;
    }
    if (v2355) {
      var m$$3 = JAM.call(context$$31.getElementById, context$$31, [match$$17[1]], JAM.policy.p1);
      var v879;
      var v3216 = m$$3;
      if (v3216) {
        v3216 = m$$3.parentNode;
      }
      if (v3216) {
        v879 = [m$$3];
      } else {
        v879 = [];
      }
      return v879;
    }
    return;
  }
  function v203(checkSet$$6, part$$3, isXML$$4) {
    var nodeCheck$$3;
    var doneName$$3 = done;
    done = done + 1;
    var checkFn$$1 = dirCheck;
    var v2357 = typeof part$$3 === "string";
    if (v2357) {
      v2357 = !JAM.call(rNonWord.test, rNonWord, [part$$3], JAM.policy.p1);
    }
    if (v2357) {
      part$$3 = JAM.call(part$$3.toLowerCase, part$$3, [], JAM.policy.p1);
      nodeCheck$$3 = part$$3;
      checkFn$$1 = dirNodeCheck;
    }
    JAM.call(checkFn$$1, null, ["previousSibling", part$$3, doneName$$3, checkSet$$6, nodeCheck$$3, isXML$$4], JAM.policy.p1);
    return;
  }
  function v202(checkSet$$5, part$$2, isXML$$3) {
    var nodeCheck$$2;
    var doneName$$2 = done;
    done = done + 1;
    var checkFn = dirCheck;
    var v2358 = typeof part$$2 === "string";
    if (v2358) {
      v2358 = !JAM.call(rNonWord.test, rNonWord, [part$$2], JAM.policy.p1);
    }
    if (v2358) {
      part$$2 = JAM.call(part$$2.toLowerCase, part$$2, [], JAM.policy.p1);
      nodeCheck$$2 = part$$2;
      checkFn = dirNodeCheck;
    }
    JAM.call(checkFn, null, ["parentNode", part$$2, doneName$$2, checkSet$$5, nodeCheck$$2, isXML$$3], JAM.policy.p1);
    return;
  }
  function v201(checkSet$$4, part$$1) {
    var elem$$6;
    var isPartStr$$1 = typeof part$$1 === "string";
    var i$$36 = 0;
    var l$$4 = checkSet$$4.length;
    var v2359 = isPartStr$$1;
    if (v2359) {
      v2359 = !JAM.call(rNonWord.test, rNonWord, [part$$1], JAM.policy.p1);
    }
    if (v2359) {
      part$$1 = JAM.call(part$$1.toLowerCase, part$$1, [], JAM.policy.p1);
      var v885 = i$$36 < l$$4;
      for (;v885;) {
        elem$$6 = checkSet$$4[i$$36];
        if (elem$$6) {
          var parent$$8 = elem$$6.parentNode;
          var v884;
          var v3637 = parent$$8.nodeName;
          if (JAM.call(v3637.toLowerCase, v3637, [], JAM.policy.p1) === part$$1) {
            v884 = parent$$8;
          } else {
            v884 = false;
          }
          checkSet$$4[i$$36] = v884;
        }
        i$$36++;
        v885 = i$$36 < l$$4;
      }
    } else {
      var v887 = i$$36 < l$$4;
      for (;v887;) {
        elem$$6 = checkSet$$4[i$$36];
        if (elem$$6) {
          var v886;
          if (isPartStr$$1) {
            v886 = elem$$6.parentNode;
          } else {
            v886 = elem$$6.parentNode === part$$1;
          }
          checkSet$$4[i$$36] = v886;
        }
        i$$36++;
        v887 = i$$36 < l$$4;
      }
      if (isPartStr$$1) {
        JAM.call(Sizzle$$1.filter, Sizzle$$1, [part$$1, checkSet$$4, true], JAM.policy.p1);
      }
    }
    return;
  }
  function v200(checkSet$$3, part) {
    var isPartStr = typeof part === "string";
    var v890 = isPartStr;
    if (v890) {
      v890 = !JAM.call(rNonWord.test, rNonWord, [part], JAM.policy.p1);
    }
    var isTag = v890;
    var v891 = isPartStr;
    if (v891) {
      v891 = !isTag;
    }
    var isPartStrNotTag = v891;
    if (isTag) {
      part = JAM.call(part.toLowerCase, part, [], JAM.policy.p1);
    }
    var i$$35 = 0;
    var l$$3 = checkSet$$3.length;
    var elem$$5;
    var v895 = i$$35 < l$$3;
    for (;v895;) {
      if (elem$$5 = checkSet$$3[i$$35]) {
        var v2363 = elem$$5 = elem$$5.previousSibling;
        if (v2363) {
          v2363 = elem$$5.nodeType !== 1;
        }
        var v892 = v2363;
        for (;v892;) {
          var v2364 = elem$$5 = elem$$5.previousSibling;
          if (v2364) {
            v2364 = elem$$5.nodeType !== 1;
          }
          v892 = v2364;
        }
        var v893;
        var v3225 = isPartStrNotTag;
        if (!v3225) {
          var v3638 = elem$$5;
          if (v3638) {
            var v3859 = elem$$5.nodeName;
            v3638 = JAM.call(v3859.toLowerCase, v3859, [], JAM.policy.p1) === part;
          }
          v3225 = v3638;
        }
        if (v3225) {
          v893 = elem$$5 || false;
        } else {
          v893 = elem$$5 === part;
        }
        checkSet$$3[i$$35] = v893;
      }
      i$$35++;
      v895 = i$$35 < l$$3;
    }
    if (isPartStrNotTag) {
      JAM.call(Sizzle$$1.filter, Sizzle$$1, [part, checkSet$$3, true], JAM.policy.p1);
    }
    return;
  }
  function v199(elem$$4) {
    return JAM.call(elem$$4.getAttribute, elem$$4, ["type"], JAM.policy.p1);
  }
  function v198(elem$$3) {
    return JAM.call(elem$$3.getAttribute, elem$$3, ["href"], JAM.policy.p1);
  }
  function v197(msg) {
    throw "Syntax error, unrecognized expression: " + msg;
  }
  function v196(expr$$7, set$$4, inplace, not) {
    var match$$16;
    var anyFound;
    var old = expr$$7;
    var result$$8 = [];
    var curLoop = set$$4;
    var v2366 = set$$4;
    if (v2366) {
      v2366 = set$$4[0];
    }
    var v896 = v2366;
    if (v896) {
      v896 = JAM.call(Sizzle$$1.isXML, Sizzle$$1, [set$$4[0]], JAM.policy.p1);
    }
    var isXMLFilter = v896;
    var v2368 = expr$$7;
    if (v2368) {
      v2368 = set$$4.length;
    }
    var v915 = v2368;
    for (;v915;) {
      var type$$29;
      for (type$$29 in Expr.filter) {
        var v3640 = Expr.leftMatch[type$$29];
        var v2369 = (match$$16 = JAM.call(v3640.exec, v3640, [expr$$7], JAM.policy.p1)) != null;
        if (v2369) {
          v2369 = match$$16[2];
        }
        if (v2369) {
          var found$$1;
          var item$$4;
          var filter$$6 = Expr.filter[type$$29];
          var left$$4 = match$$16[1];
          anyFound = false;
          JAM.call(match$$16.splice, match$$16, [1, 1], JAM.policy.p1);
          if (JAM.call(left$$4.substr, left$$4, [left$$4.length - 1], JAM.policy.p1) === "\\") {
            continue;
          }
          if (curLoop === result$$8) {
            result$$8 = [];
          }
          if (Expr.preFilter[type$$29]) {
            var v900 = Expr.preFilter;
            match$$16 = JAM.call(v900[type$$29], v900, [match$$16, curLoop, inplace, result$$8, not, isXMLFilter], JAM.policy.p1);
            if (!match$$16) {
              anyFound = found$$1 = true;
            } else {
              if (match$$16 === true) {
                continue;
              }
            }
          }
          if (match$$16) {
            var i$$34 = 0;
            var v906 = (item$$4 = curLoop[i$$34]) != null;
            for (;v906;) {
              if (item$$4) {
                found$$1 = JAM.call(filter$$6, null, [item$$4, match$$16, i$$34, curLoop], JAM.policy.p1);
                var pass = not ^ !!found$$1;
                var v2374 = inplace;
                if (v2374) {
                  v2374 = found$$1 != null;
                }
                if (v2374) {
                  if (pass) {
                    anyFound = true;
                  } else {
                    curLoop[i$$34] = false;
                  }
                } else {
                  if (pass) {
                    JAM.call(result$$8.push, result$$8, [item$$4], JAM.policy.p1);
                    anyFound = true;
                  }
                }
              }
              i$$34++;
              v906 = (item$$4 = curLoop[i$$34]) != null;
            }
          }
          if (found$$1 !== undefined) {
            if (!inplace) {
              curLoop = result$$8;
            }
            expr$$7 = JAM.call(expr$$7.replace, expr$$7, [Expr.match[type$$29], ""], JAM.policy.p1);
            if (!anyFound) {
              return[];
            }
            break;
          }
        }
      }
      if (expr$$7 === old) {
        if (anyFound == null) {
          JAM.call(Sizzle$$1.error, Sizzle$$1, [expr$$7], JAM.policy.p1);
        } else {
          break;
        }
      }
      old = expr$$7;
      var v2377 = expr$$7;
      if (v2377) {
        v2377 = set$$4.length;
      }
      v915 = v2377;
    }
    return curLoop;
  }
  function v195(expr$$6, context$$30, isXML$$2) {
    var set$$3;
    if (!expr$$6) {
      return[];
    }
    var i$$33 = 0;
    var l$$2 = Expr.order.length;
    var v925 = i$$33 < l$$2;
    for (;v925;) {
      var match$$15;
      var type$$28 = Expr.order[i$$33];
      var v2378 = Expr.leftMatch[type$$28];
      if (match$$15 = JAM.call(v2378.exec, v2378, [expr$$6], JAM.policy.p1)) {
        var left$$3 = match$$15[1];
        JAM.call(match$$15.splice, match$$15, [1, 1], JAM.policy.p1);
        if (JAM.call(left$$3.substr, left$$3, [left$$3.length - 1], JAM.policy.p1) !== "\\") {
          var v2380 = match$$15[1];
          if (!v2380) {
            v2380 = "";
          }
          var v919 = v2380;
          var v3943 = JAM.call(v919.replace, v919, [rBackslash, ""], JAM.policy.p1);
          match$$15[1] = v3943;
          var v920 = Expr.find;
          set$$3 = JAM.call(v920[type$$28], v920, [match$$15, context$$30, isXML$$2], JAM.policy.p1);
          if (set$$3 != null) {
            expr$$6 = JAM.call(expr$$6.replace, expr$$6, [Expr.match[type$$28], ""], JAM.policy.p1);
            break;
          }
        }
      }
      i$$33++;
      v925 = i$$33 < l$$2;
    }
    if (!set$$3) {
      var v926;
      if (typeof context$$30.getElementsByTagName !== "undefined") {
        v926 = JAM.call(context$$30.getElementsByTagName, context$$30, ["*"], JAM.policy.p1);
      } else {
        v926 = [];
      }
      set$$3 = v926;
    }
    return{set:set$$3, expr:expr$$6};
  }
  function v194(node$$15, expr$$5) {
    return JAM.call(Sizzle$$1, null, [expr$$5, null, null, [node$$15]], JAM.policy.p1).length > 0;
  }
  function v193(expr$$4, set$$2) {
    return JAM.call(Sizzle$$1, null, [expr$$4, null, null, set$$2], JAM.policy.p1);
  }
  function v192(results$$14) {
    if (sortOrder) {
      hasDuplicate = baseHasDuplicate;
      JAM.call(results$$14.sort, results$$14, [sortOrder], JAM.policy.p1);
      if (hasDuplicate) {
        var i$$32 = 1;
        var v931 = i$$32 < results$$14.length;
        for (;v931;) {
          if (results$$14[i$$32] === results$$14[i$$32 - 1]) {
            var v929 = i$$32;
            i$$32 = i$$32 - 1;
            JAM.call(results$$14.splice, results$$14, [v929, 1], JAM.policy.p1);
          }
          i$$32++;
          v931 = i$$32 < results$$14.length;
        }
      }
    }
    return results$$14;
  }
  function v191() {
    baseHasDuplicate = false;
    return 0;
  }
  function posProcess(selector$$2, context$$38) {
    var match$$45;
    var tmpSet = [];
    var later = "";
    var v932;
    if (context$$38.nodeType) {
      v932 = [context$$38];
    } else {
      v932 = context$$38;
    }
    var root$$1 = v932;
    var v2389 = Expr.match.PSEUDO;
    var v934 = match$$45 = JAM.call(v2389.exec, v2389, [selector$$2], JAM.policy.p1);
    for (;v934;) {
      later = later + match$$45[0];
      selector$$2 = JAM.call(selector$$2.replace, selector$$2, [Expr.match.PSEUDO, ""], JAM.policy.p1);
      var v2392 = Expr.match.PSEUDO;
      v934 = match$$45 = JAM.call(v2392.exec, v2392, [selector$$2], JAM.policy.p1);
    }
    var v935;
    if (Expr.relative[selector$$2]) {
      v935 = selector$$2 + "*";
    } else {
      v935 = selector$$2;
    }
    selector$$2 = v935;
    var i$$54 = 0;
    var l$$8 = root$$1.length;
    var v937 = i$$54 < l$$8;
    for (;v937;) {
      JAM.call(Sizzle$$1, null, [selector$$2, root$$1[i$$54], tmpSet], JAM.policy.p1);
      i$$54++;
      v937 = i$$54 < l$$8;
    }
    return JAM.call(Sizzle$$1.filter, Sizzle$$1, [later, tmpSet], JAM.policy.p1);
  }
  function makeArray(array$$21, results$$16) {
    var v938 = Array.prototype.slice;
    array$$21 = JAM.call(v938.call, v938, [array$$21, 0], JAM.policy.p1);
    if (results$$16) {
      var v939 = results$$16.push;
      JAM.call(v939.apply, v939, [results$$16, array$$21], JAM.policy.p1);
      return results$$16;
    }
    return array$$21;
  }
  function fescape(all$$1, num$$4) {
    return "\\" + (num$$4 - 0 + 1);
  }
  function Sizzle$$1(selector$$1, context$$29, results$$13, seed) {
    results$$13 = results$$13 || [];
    context$$29 = context$$29 || document;
    var origContext = context$$29;
    var v2396 = context$$29.nodeType !== 1;
    if (v2396) {
      v2396 = context$$29.nodeType !== 9;
    }
    if (v2396) {
      return[];
    }
    var v2397 = !selector$$1;
    if (!v2397) {
      v2397 = typeof selector$$1 !== "string";
    }
    if (v2397) {
      return results$$13;
    }
    var m$$2;
    var set$$1;
    var checkSet$$2;
    var extra;
    var ret;
    var cur$$2;
    var pop;
    var i$$31;
    var prune = true;
    var contextXML = JAM.call(Sizzle$$1.isXML, Sizzle$$1, [context$$29], JAM.policy.p1);
    var parts = [];
    var soFar = selector$$1;
    do {
      JAM.call(chunker.exec, chunker, [""], JAM.policy.p1);
      m$$2 = JAM.call(chunker.exec, chunker, [soFar], JAM.policy.p1);
      if (m$$2) {
        soFar = m$$2[3];
        JAM.call(parts.push, parts, [m$$2[1]], JAM.policy.p1);
        if (m$$2[2]) {
          extra = m$$2[3];
          break;
        }
      }
    } while (m$$2);
    var v2398 = parts.length > 1;
    if (v2398) {
      v2398 = JAM.call(origPOS.exec, origPOS, [selector$$1], JAM.policy.p1);
    }
    if (v2398) {
      var v2399 = parts.length === 2;
      if (v2399) {
        v2399 = Expr.relative[parts[0]];
      }
      if (v2399) {
        set$$1 = posProcess(parts[0] + parts[1], context$$29);
      } else {
        var v946;
        if (Expr.relative[parts[0]]) {
          v946 = [context$$29];
        } else {
          v946 = JAM.call(Sizzle$$1, null, [JAM.call(parts.shift, parts, [], JAM.policy.p1), context$$29], JAM.policy.p1);
        }
        set$$1 = v946;
        var v948 = parts.length;
        for (;v948;) {
          selector$$1 = JAM.call(parts.shift, parts, [], JAM.policy.p1);
          if (Expr.relative[selector$$1]) {
            selector$$1 = selector$$1 + JAM.call(parts.shift, parts, [], JAM.policy.p1);
          }
          set$$1 = posProcess(selector$$1, set$$1);
          v948 = parts.length;
        }
      }
    } else {
      var v3860 = !seed;
      if (v3860) {
        v3860 = parts.length > 1;
      }
      var v3799 = v3860;
      if (v3799) {
        v3799 = context$$29.nodeType === 9;
      }
      var v3644 = v3799;
      if (v3644) {
        v3644 = !contextXML;
      }
      var v3247 = v3644;
      if (v3247) {
        var v3645 = Expr.match.ID;
        v3247 = JAM.call(v3645.test, v3645, [parts[0]], JAM.policy.p1);
      }
      var v2406 = v3247;
      if (v2406) {
        var v3647 = Expr.match.ID;
        v2406 = !JAM.call(v3647.test, v3647, [parts[parts.length - 1]], JAM.policy.p1);
      }
      if (v2406) {
        ret = JAM.call(Sizzle$$1.find, Sizzle$$1, [JAM.call(parts.shift, parts, [], JAM.policy.p1), context$$29, contextXML], JAM.policy.p1);
        var v951;
        if (ret.expr) {
          v951 = JAM.call(Sizzle$$1.filter, Sizzle$$1, [ret.expr, ret.set], JAM.policy.p1)[0];
        } else {
          v951 = ret.set[0];
        }
        context$$29 = v951;
      }
      if (context$$29) {
        var v953;
        if (seed) {
          v953 = {expr:JAM.call(parts.pop, parts, [], JAM.policy.p1), set:JAM.call(makeArray, null, [seed], JAM.policy.p1)};
        } else {
          var v2412 = JAM.call(parts.pop, parts, [], JAM.policy.p1);
          var v3251;
          var v3863 = parts.length === 1;
          if (v3863) {
            var v3888 = parts[0] === "~";
            if (!v3888) {
              v3888 = parts[0] === "+";
            }
            v3863 = v3888;
          }
          var v3803 = v3863;
          if (v3803) {
            v3803 = context$$29.parentNode;
          }
          if (v3803) {
            v3251 = context$$29.parentNode;
          } else {
            v3251 = context$$29;
          }
          v953 = JAM.call(Sizzle$$1.find, Sizzle$$1, [v2412, v3251, contextXML], JAM.policy.p1);
        }
        ret = v953;
        var v954;
        if (ret.expr) {
          v954 = JAM.call(Sizzle$$1.filter, Sizzle$$1, [ret.expr, ret.set], JAM.policy.p1);
        } else {
          v954 = ret.set;
        }
        set$$1 = v954;
        if (parts.length > 0) {
          checkSet$$2 = JAM.call(makeArray, null, [set$$1], JAM.policy.p1);
        } else {
          prune = false;
        }
        var v959 = parts.length;
        for (;v959;) {
          cur$$2 = JAM.call(parts.pop, parts, [], JAM.policy.p1);
          pop = cur$$2;
          if (!Expr.relative[cur$$2]) {
            cur$$2 = "";
          } else {
            pop = JAM.call(parts.pop, parts, [], JAM.policy.p1);
          }
          if (pop == null) {
            pop = context$$29;
          }
          var v958 = Expr.relative;
          JAM.call(v958[cur$$2], v958, [checkSet$$2, pop, contextXML], JAM.policy.p1);
          v959 = parts.length;
        }
      } else {
        checkSet$$2 = parts = [];
      }
    }
    if (!checkSet$$2) {
      checkSet$$2 = set$$1;
    }
    if (!checkSet$$2) {
      JAM.call(Sizzle$$1.error, Sizzle$$1, [cur$$2 || selector$$1], JAM.policy.p1);
    }
    if (JAM.call(toString.call, toString, [checkSet$$2], JAM.policy.p1) === "[object Array]") {
      if (!prune) {
        var v964 = results$$13.push;
        JAM.call(v964.apply, v964, [results$$13, checkSet$$2], JAM.policy.p1);
      } else {
        var v2420 = context$$29;
        if (v2420) {
          v2420 = context$$29.nodeType === 1;
        }
        if (v2420) {
          i$$31 = 0;
          var v967 = checkSet$$2[i$$31] != null;
          for (;v967;) {
            var v2422 = checkSet$$2[i$$31];
            if (v2422) {
              var v3254 = checkSet$$2[i$$31] === true;
              if (!v3254) {
                var v3651 = checkSet$$2[i$$31].nodeType === 1;
                if (v3651) {
                  v3651 = JAM.call(Sizzle$$1.contains, Sizzle$$1, [context$$29, checkSet$$2[i$$31]], JAM.policy.p1);
                }
                v3254 = v3651;
              }
              v2422 = v3254;
            }
            if (v2422) {
              JAM.call(results$$13.push, results$$13, [set$$1[i$$31]], JAM.policy.p1);
            }
            i$$31++;
            v967 = checkSet$$2[i$$31] != null;
          }
        } else {
          i$$31 = 0;
          var v970 = checkSet$$2[i$$31] != null;
          for (;v970;) {
            var v2425 = checkSet$$2[i$$31];
            if (v2425) {
              v2425 = checkSet$$2[i$$31].nodeType === 1;
            }
            if (v2425) {
              JAM.call(results$$13.push, results$$13, [set$$1[i$$31]], JAM.policy.p1);
            }
            i$$31++;
            v970 = checkSet$$2[i$$31] != null;
          }
        }
      }
    } else {
      JAM.call(makeArray, null, [checkSet$$2, results$$13], JAM.policy.p1);
    }
    if (extra) {
      JAM.call(Sizzle$$1, null, [extra, origContext, results$$13, seed], JAM.policy.p1);
      JAM.call(Sizzle$$1.uniqueSort, Sizzle$$1, [results$$13], JAM.policy.p1);
    }
    return results$$13;
  }
  function dirNodeCheck(dir, cur, doneName, checkSet, nodeCheck, isXML) {
    var i$$29 = 0;
    var l = checkSet.length;
    var v978 = i$$29 < l;
    for (;v978;) {
      var elem$$1 = checkSet[i$$29];
      if (elem$$1) {
        var match$$13 = false;
        elem$$1 = elem$$1[dir];
        for (;elem$$1;) {
          if (elem$$1.sizcache === doneName) {
            match$$13 = checkSet[elem$$1.sizset];
            break;
          }
          var v2428 = elem$$1.nodeType === 1;
          if (v2428) {
            v2428 = !isXML;
          }
          if (v2428) {
            elem$$1.sizcache = doneName;
            elem$$1.sizset = i$$29;
          }
          var v3257 = elem$$1.nodeName;
          if (JAM.call(v3257.toLowerCase, v3257, [], JAM.policy.p1) === cur) {
            match$$13 = elem$$1;
            break;
          }
          elem$$1 = elem$$1[dir];
        }
        checkSet[i$$29] = match$$13;
      }
      i$$29++;
      v978 = i$$29 < l;
    }
    return;
  }
  function dirCheck(dir$$1, cur$$1, doneName$$1, checkSet$$1, nodeCheck$$1, isXML$$1) {
    var i$$30 = 0;
    var l$$1 = checkSet$$1.length;
    var v986 = i$$30 < l$$1;
    for (;v986;) {
      var elem$$2 = checkSet$$1[i$$30];
      if (elem$$2) {
        var match$$14 = false;
        elem$$2 = elem$$2[dir$$1];
        for (;elem$$2;) {
          if (elem$$2.sizcache === doneName$$1) {
            match$$14 = checkSet$$1[elem$$2.sizset];
            break;
          }
          if (elem$$2.nodeType === 1) {
            if (!isXML$$1) {
              elem$$2.sizcache = doneName$$1;
              elem$$2.sizset = i$$30;
            }
            if (typeof cur$$1 !== "string") {
              if (elem$$2 === cur$$1) {
                match$$14 = true;
                break;
              }
            } else {
              if (JAM.call(Sizzle$$1.filter, Sizzle$$1, [cur$$1, [elem$$2]], JAM.policy.p1).length > 0) {
                match$$14 = elem$$2;
                break;
              }
            }
          }
          elem$$2 = elem$$2[dir$$1];
        }
        checkSet$$1[i$$30] = match$$14;
      }
      i$$30++;
      v986 = i$$30 < l$$1;
    }
    return;
  }
  var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
  var done = 0;
  var toString = Object.prototype.toString;
  var hasDuplicate = false;
  var baseHasDuplicate = true;
  var rBackslash = /\\/g;
  var rNonWord = /\W/;
  var v988 = [0, 0];
  JAM.call(v988.sort, v988, [v191], JAM.policy.p1);
  Sizzle$$1.uniqueSort = v192;
  Sizzle$$1.matches = v193;
  Sizzle$$1.matchesSelector = v194;
  Sizzle$$1.find = v195;
  Sizzle$$1.filter = v196;
  Sizzle$$1.error = v197;
  var Expr = Sizzle$$1.selectors = {order:["ID", "NAME", "TAG"], match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, 
  PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/}, leftMatch:{}, attrMap:{"class":"className", "for":"htmlFor"}, attrHandle:{href:v198, type:v199}, relative:{"+":v200, ">":v201, "":v202, "~":v203}, find:{ID:v204, NAME:v205, TAG:v206}, preFilter:{CLASS:v207, ID:v208, TAG:v209, CHILD:v210, ATTR:v211, PSEUDO:v212, POS:v213}, filters:{enabled:v214, disabled:v215, checked:v216, selected:v217, parent:v218, empty:v219, has:v220, header:v221, text:v222, radio:v223, checkbox:v224, 
  file:v225, password:v226, submit:v227, image:v228, reset:v229, button:v230, input:v231, focus:v232}, setFilters:{first:v233, last:v234, even:v235, odd:v236, lt:v237, gt:v238, nth:v239, eq:v240}, filter:{PSEUDO:v241, CHILD:v242, ID:v243, TAG:v244, CLASS:v245, ATTR:v246, POS:v247}};
  var origPOS = Expr.match.POS;
  var type$$27;
  for (type$$27 in Expr.match) {
    var v1000 = Expr.match;
    var v1001 = type$$27;
    var v3944 = new RegExp(Expr.match[type$$27].source + /(?![^\[]*\])(?![^\(]*\))/.source);
    JAM.set(v1000, v1001, v3944, JAM.policy.p2);
    var v1002 = Expr.leftMatch;
    var v1003 = type$$27;
    var v3261 = /(^(?:.|\r|\n)*?)/.source;
    var v3656 = Expr.match[type$$27].source;
    var v3945 = new RegExp(v3261 + JAM.call(v3656.replace, v3656, [/\\(\d+)/g, fescape], JAM.policy.p1));
    JAM.set(v1002, v1003, v3945, JAM.policy.p2);
  }
  try {
    var v3263 = Array.prototype.slice;
    JAM.call(v3263.call, v3263, [document.documentElement.childNodes, 0], JAM.policy.p1)[0].nodeType;
  } catch (e$$24) {
    makeArray = v248;
  }
  var sortOrder;
  var siblingCheck;
  if (document.documentElement.compareDocumentPosition) {
    sortOrder = v249;
  } else {
    sortOrder = v250;
    siblingCheck = v251;
  }
  Sizzle$$1.getText = v252;
  v255();
  v258();
  if (document.querySelectorAll) {
    v260();
  }
  v262();
  v264();
  if (document.documentElement.contains) {
    Sizzle$$1.contains = v265;
  } else {
    if (document.documentElement.compareDocumentPosition) {
      Sizzle$$1.contains = v266;
    } else {
      Sizzle$$1.contains = v267;
    }
  }
  Sizzle$$1.isXML = v268;
  window.Sizzle = Sizzle$$1;
  return;
}
function v190() {
  function select$$1() {
    throw new Error('Method "Prototype.Selector.select" must be defined.');
  }
  function match$$11() {
    throw new Error('Method "Prototype.Selector.match" must be defined.');
  }
  function find(elements$$4, expression$$6, index$$60) {
    index$$60 = index$$60 || 0;
    var match$$12 = Prototype.Selector.match;
    var length$$29 = elements$$4.length;
    var matchIndex = 0;
    var i$$27;
    i$$27 = 0;
    var v1013 = i$$27 < length$$29;
    for (;v1013;) {
      var v2440 = JAM.call(match$$12, null, [elements$$4[i$$27], expression$$6], JAM.policy.p1);
      if (v2440) {
        var v3266 = matchIndex;
        matchIndex = matchIndex + 1;
        v2440 = index$$60 == v3266;
      }
      if (v2440) {
        return JAM.call(Element.extend, Element, [elements$$4[i$$27]], JAM.policy.p1);
      }
      i$$27++;
      v1013 = i$$27 < length$$29;
    }
    return;
  }
  function extendElements(elements$$5) {
    var i$$28 = 0;
    var length$$30 = elements$$5.length;
    var v1015 = i$$28 < length$$30;
    for (;v1015;) {
      JAM.call(Element.extend, Element, [elements$$5[i$$28]], JAM.policy.p1);
      i$$28++;
      v1015 = i$$28 < length$$30;
    }
    return elements$$5;
  }
  var K = Prototype.K;
  var v2441;
  if (Element.extend === K) {
    v2441 = K;
  } else {
    v2441 = extendElements;
  }
  return{select:select$$1, match:match$$11, find:find, extendElements:v2441, extendElement:Element.extend};
}
function v189() {
  var v1018 = $A(arguments);
  var expression$$5 = JAM.call(v1018.join, v1018, [", "], JAM.policy.p1);
  var v1019 = Prototype.Selector;
  return JAM.call(v1019.select, v1019, [expression$$5, document], JAM.policy.p1);
}
function v188() {
  function getRootElement() {
    if (ROOT) {
      return ROOT;
    }
    var v1020;
    if (IS_OLD_OPERA) {
      v1020 = document.body;
    } else {
      v1020 = document.documentElement;
    }
    ROOT = v1020;
    return ROOT;
  }
  function getDimensions$$1() {
    return{width:JAM.call(this.getWidth, this, [], JAM.policy.p1), height:JAM.call(this.getHeight, this, [], JAM.policy.p1)};
  }
  function getWidth$$1() {
    return getRootElement().clientWidth;
  }
  function getHeight$$1() {
    return getRootElement().clientHeight;
  }
  function getScrollOffsets() {
    var v2442 = window.pageXOffset;
    if (!v2442) {
      v2442 = document.documentElement.scrollLeft;
    }
    var v1025 = v2442;
    if (!v1025) {
      v1025 = document.body.scrollLeft;
    }
    var x$$48 = v1025;
    var v2445 = window.pageYOffset;
    if (!v2445) {
      v2445 = document.documentElement.scrollTop;
    }
    var v1026 = v2445;
    if (!v1026) {
      v1026 = document.body.scrollTop;
    }
    var y$$30 = v1026;
    return JAM.new(Element.Offset, [x$$48, y$$30]);
  }
  var v1028 = Prototype.Browser.Opera;
  if (v1028) {
    var v3660 = window.opera;
    v1028 = JAM.call(window.parseFloat, window, [JAM.call(v3660.version, v3660, [], JAM.policy.p1)], JAM.policy.p1) < 9.5;
  }
  var IS_OLD_OPERA = v1028;
  var ROOT = null;
  document.viewport = {getDimensions:getDimensions$$1, getWidth:getWidth$$1, getHeight:getHeight$$1, getScrollOffsets:getScrollOffsets};
  return;
}
function v187() {
  function v186(element$$144) {
    element$$144 = JAM.call($, null, [element$$144], JAM.policy.p1);
    if (isDetached(element$$144)) {
      return JAM.new(Element.Offset, [0, 0]);
    }
    var rect$$2 = JAM.call(element$$144.getBoundingClientRect, element$$144, [], JAM.policy.p1);
    var docEl = document.documentElement;
    return JAM.new(Element.Offset, [rect$$2.left - docEl.clientLeft, rect$$2.top - docEl.clientTop]);
  }
  function v185(element$$143) {
    element$$143 = JAM.call($, null, [element$$143], JAM.policy.p1);
    var valueT$$4 = 0;
    var valueL$$4 = 0;
    do {
      var v3273 = element$$143.offsetTop;
      if (!v3273) {
        v3273 = 0;
      }
      valueT$$4 = valueT$$4 + v3273;
      var v3274 = element$$143.offsetLeft;
      if (!v3274) {
        v3274 = 0;
      }
      valueL$$4 = valueL$$4 + v3274;
      if (element$$143.offsetParent == document.body) {
        if (JAM.call(Element.getStyle, Element, [element$$143, "position"], JAM.policy.p1) == "absolute") {
          break;
        }
      }
      element$$143 = element$$143.offsetParent;
    } while (element$$143);
    return JAM.new(Element.Offset, [valueL$$4, valueT$$4]);
  }
  function v184(proceed$$1, element$$142) {
    element$$142 = JAM.call($, null, [element$$142], JAM.policy.p1);
    if (!element$$142.parentNode) {
      return JAM.new(Element.Offset, [0, 0]);
    }
    var position$$5 = JAM.call(element$$142.getStyle, element$$142, ["position"], JAM.policy.p1);
    if (position$$5 !== "static") {
      return JAM.call(proceed$$1, null, [element$$142], JAM.policy.p1);
    }
    var offsetParent$$1 = JAM.call(element$$142.getOffsetParent, element$$142, [], JAM.policy.p1);
    var v2460 = offsetParent$$1;
    if (v2460) {
      v2460 = JAM.call(offsetParent$$1.getStyle, offsetParent$$1, ["position"], JAM.policy.p1) === "fixed";
    }
    if (v2460) {
      JAM.call(hasLayout, null, [offsetParent$$1], JAM.policy.p1);
    }
    JAM.call(element$$142.setStyle, element$$142, [{position:"relative"}], JAM.policy.p1);
    var value$$86 = JAM.call(proceed$$1, null, [element$$142], JAM.policy.p1);
    JAM.call(element$$142.setStyle, element$$142, [{position:position$$5}], JAM.policy.p1);
    return value$$86;
  }
  function v183(proceed, element$$141) {
    element$$141 = JAM.call($, null, [element$$141], JAM.policy.p1);
    var v3663 = element$$141.nodeType === Node.DOCUMENT_NODE;
    if (!v3663) {
      v3663 = isDetached(element$$141);
    }
    var v3276 = v3663;
    if (!v3276) {
      var v3811 = element$$141.nodeName;
      v3276 = JAM.call(v3811.toUpperCase, v3811, [], JAM.policy.p1) === "BODY";
    }
    var v2461 = v3276;
    if (!v2461) {
      var v3666 = element$$141.nodeName;
      v2461 = JAM.call(v3666.toUpperCase, v3666, [], JAM.policy.p1) === "HTML";
    }
    if (v2461) {
      return JAM.call($, null, [document.body], JAM.policy.p1);
    }
    var position$$4 = JAM.call(element$$141.getStyle, element$$141, ["position"], JAM.policy.p1);
    if (position$$4 !== "static") {
      return JAM.call(proceed, null, [element$$141], JAM.policy.p1);
    }
    JAM.call(element$$141.setStyle, element$$141, [{position:"relative"}], JAM.policy.p1);
    var value$$85 = JAM.call(proceed, null, [element$$141], JAM.policy.p1);
    JAM.call(element$$141.setStyle, element$$141, [{position:position$$4}], JAM.policy.p1);
    return value$$85;
  }
  function v182() {
    return[this.left, this.top];
  }
  function v181() {
    return JAM.call("[#{left}, #{top}]".interpolate, "[#{left}, #{top}]", [this], JAM.policy.p1);
  }
  function v180() {
    return JAM.call("#<Element.Offset left: #{left} top: #{top}>".interpolate, "#<Element.Offset left: #{left} top: #{top}>", [this], JAM.policy.p1);
  }
  function v179(offset$$13) {
    return JAM.new(Element.Offset, [this.left - offset$$13.left, this.top - offset$$13.top]);
  }
  function v178(left$$2, top$$1) {
    var v3946 = JAM.call(left$$2.round, left$$2, [], JAM.policy.p1);
    this.left = v3946;
    var v3947 = JAM.call(top$$1.round, top$$1, [], JAM.policy.p1);
    this.top = v3947;
    this[0] = this.left;
    this[1] = this.top;
    return;
  }
  function v177(element$$140) {
    var parent$$7 = JAM.call(hasLayout, null, [JAM.call(element$$140.getOffsetParent, element$$140, [], JAM.policy.p1)], JAM.policy.p1);
    var rect$$1 = JAM.call(element$$140.getBoundingClientRect, element$$140, [], JAM.policy.p1);
    var pRect$$1 = JAM.call(parent$$7.getBoundingClientRect, parent$$7, [], JAM.policy.p1);
    var v1054 = pRect$$1.bottom - rect$$1.bottom;
    return JAM.call(v1054.round, v1054, [], JAM.policy.p1);
  }
  function v176(element$$139) {
    var parent$$6 = JAM.call(hasLayout, null, [JAM.call(element$$139.getOffsetParent, element$$139, [], JAM.policy.p1)], JAM.policy.p1);
    var rect = JAM.call(element$$139.getBoundingClientRect, element$$139, [], JAM.policy.p1);
    var pRect = JAM.call(parent$$6.getBoundingClientRect, parent$$6, [], JAM.policy.p1);
    var v1056 = pRect.right - rect.right;
    return JAM.call(v1056.round, v1056, [], JAM.policy.p1);
  }
  function v175(element$$138) {
    return getPixelValue(element$$138, "marginRight");
  }
  function v174(element$$137) {
    return getPixelValue(element$$137, "marginLeft");
  }
  function v173(element$$136) {
    return getPixelValue(element$$136, "marginBottom");
  }
  function v172(element$$135) {
    return getPixelValue(element$$135, "marginTop");
  }
  function v171(element$$134) {
    return getPixelValue(element$$134, "borderRightWidth");
  }
  function v170(element$$133) {
    return getPixelValue(element$$133, "borderLeftWidth");
  }
  function v169(element$$132) {
    return getPixelValue(element$$132, "borderBottomWidth");
  }
  function v168(element$$131) {
    return getPixelValue(element$$131, "borderTopWidth");
  }
  function v167(element$$130) {
    return getPixelValue(element$$130, "paddingRight");
  }
  function v166(element$$129) {
    return getPixelValue(element$$129, "paddingLeft");
  }
  function v165(element$$128) {
    return getPixelValue(element$$128, "paddingBottom");
  }
  function v164(element$$127) {
    return getPixelValue(element$$127, "paddingTop");
  }
  function v163(element$$126) {
    var offset$$12 = JAM.call(element$$126.positionedOffset, element$$126, [], JAM.policy.p1);
    var parent$$5 = JAM.call(element$$126.getOffsetParent, element$$126, [], JAM.policy.p1);
    var pWidth = JAM.call(parent$$5.measure, parent$$5, ["width"], JAM.policy.p1);
    var mWidth = JAM.call(this.get, this, ["border-box-width"], JAM.policy.p1);
    return pWidth - mWidth - offset$$12.left;
  }
  function v162(element$$125) {
    var offset$$11 = JAM.call(element$$125.positionedOffset, element$$125, [], JAM.policy.p1);
    return offset$$11.left;
  }
  function v161(element$$124) {
    var offset$$10 = JAM.call(element$$124.positionedOffset, element$$124, [], JAM.policy.p1);
    var parent$$4 = JAM.call(element$$124.getOffsetParent, element$$124, [], JAM.policy.p1);
    var pHeight = JAM.call(parent$$4.measure, parent$$4, ["height"], JAM.policy.p1);
    var mHeight = JAM.call(this.get, this, ["border-box-height"], JAM.policy.p1);
    return pHeight - mHeight - offset$$10.top;
  }
  function v160(element$$123) {
    var offset$$9 = JAM.call(element$$123.positionedOffset, element$$123, [], JAM.policy.p1);
    return offset$$9.top;
  }
  function v159(element$$122) {
    var bWidth$$1 = JAM.call(this.get, this, ["border-box-width"], JAM.policy.p1);
    var mLeft = JAM.call(this.get, this, ["margin-left"], JAM.policy.p1);
    var mRight = JAM.call(this.get, this, ["margin-right"], JAM.policy.p1);
    if (bWidth$$1 <= 0) {
      return 0;
    }
    return bWidth$$1 + mLeft + mRight;
  }
  function v158(element$$121) {
    var bHeight$$1 = JAM.call(this.get, this, ["border-box-height"], JAM.policy.p1);
    var mTop = JAM.call(this.get, this, ["margin-top"], JAM.policy.p1);
    var mBottom = JAM.call(this.get, this, ["margin-bottom"], JAM.policy.p1);
    if (bHeight$$1 <= 0) {
      return 0;
    }
    return bHeight$$1 + mTop + mBottom;
  }
  function v157(element$$120) {
    if (!this._preComputing) {
      JAM.call(this._begin, this, [], JAM.policy.p1);
    }
    var width$$11 = element$$120.offsetWidth;
    if (!this._preComputing) {
      JAM.call(this._end, this, [], JAM.policy.p1);
    }
    return width$$11;
  }
  function v156(element$$119) {
    if (!this._preComputing) {
      JAM.call(this._begin, this, [], JAM.policy.p1);
    }
    var height$$9 = element$$119.offsetHeight;
    if (!this._preComputing) {
      JAM.call(this._end, this, [], JAM.policy.p1);
    }
    return height$$9;
  }
  function v155(element$$118) {
    var width$$10 = JAM.call(this.get, this, ["width"], JAM.policy.p1);
    var pLeft$$1 = JAM.call(this.get, this, ["padding-left"], JAM.policy.p1);
    var pRight$$1 = JAM.call(this.get, this, ["padding-right"], JAM.policy.p1);
    return width$$10 + pLeft$$1 + pRight$$1;
  }
  function v154(element$$117) {
    var height$$8 = JAM.call(this.get, this, ["height"], JAM.policy.p1);
    var pTop$$1 = JAM.call(this.get, this, ["padding-top"], JAM.policy.p1);
    var pBottom$$1 = JAM.call(this.get, this, ["padding-bottom"], JAM.policy.p1);
    return height$$8 + pTop$$1 + pBottom$$1;
  }
  function v153(element$$116) {
    if (!this._preComputing) {
      JAM.call(this._begin, this, [], JAM.policy.p1);
    }
    var bWidth = JAM.call(this.get, this, ["border-box-width"], JAM.policy.p1);
    if (bWidth <= 0) {
      if (!this._preComputing) {
        JAM.call(this._end, this, [], JAM.policy.p1);
      }
      return 0;
    }
    var bLeft = JAM.call(this.get, this, ["border-left"], JAM.policy.p1);
    var bRight = JAM.call(this.get, this, ["border-right"], JAM.policy.p1);
    var pLeft = JAM.call(this.get, this, ["padding-left"], JAM.policy.p1);
    var pRight = JAM.call(this.get, this, ["padding-right"], JAM.policy.p1);
    if (!this._preComputing) {
      JAM.call(this._end, this, [], JAM.policy.p1);
    }
    return bWidth - bLeft - bRight - pLeft - pRight;
  }
  function v152(element$$115) {
    if (!this._preComputing) {
      JAM.call(this._begin, this, [], JAM.policy.p1);
    }
    var bHeight = JAM.call(this.get, this, ["border-box-height"], JAM.policy.p1);
    if (bHeight <= 0) {
      if (!this._preComputing) {
        JAM.call(this._end, this, [], JAM.policy.p1);
      }
      return 0;
    }
    var bTop = JAM.call(this.get, this, ["border-top"], JAM.policy.p1);
    var bBottom = JAM.call(this.get, this, ["border-bottom"], JAM.policy.p1);
    var pTop = JAM.call(this.get, this, ["padding-top"], JAM.policy.p1);
    var pBottom = JAM.call(this.get, this, ["padding-bottom"], JAM.policy.p1);
    if (!this._preComputing) {
      JAM.call(this._end, this, [], JAM.policy.p1);
    }
    return bHeight - bTop - bBottom - pTop - pBottom;
  }
  function v151() {
    return "#<Element.Layout>";
  }
  function v150() {
    function v149(key$$26) {
      var v3281 = Element.Layout.PROPERTIES;
      if (!JAM.call(v3281.include, v3281, [key$$26], JAM.policy.p1)) {
        return;
      }
      var v2483 = Element.Layout.COMPOSITE_PROPERTIES;
      if (JAM.call(v2483.include, v2483, [key$$26], JAM.policy.p1)) {
        return;
      }
      var value$$84 = JAM.call(this.get, this, [key$$26], JAM.policy.p1);
      if (value$$84 != null) {
        var JSCompiler_inline_result$$0;
        var key$$inline_31 = key$$26;
        if (JAM.call(key$$inline_31.include, key$$inline_31, ["border"], JAM.policy.p1)) {
          key$$inline_31 = key$$inline_31 + "-width";
        }
        JSCompiler_inline_result$$0 = JAM.call(key$$inline_31.camelize, key$$inline_31, [], JAM.policy.p1);
        JAM.set(css$$2, JSCompiler_inline_result$$0, value$$84 + "px", JAM.policy.p2);
      }
      return;
    }
    var args$$11 = $A(arguments);
    var v1085;
    if (args$$11.length === 0) {
      v1085 = Element.Layout.PROPERTIES;
    } else {
      var v2485 = JAM.call(args$$11.join, args$$11, [" "], JAM.policy.p1);
      v1085 = JAM.call(v2485.split, v2485, [" "], JAM.policy.p1);
    }
    var keys$$4 = v1085;
    var css$$2 = {};
    JAM.call(keys$$4.each, keys$$4, [v149, this], JAM.policy.p1);
    return css$$2;
  }
  function v148() {
    var v1086 = this.toObject;
    var obj$$17 = JAM.call(v1086.apply, v1086, [this, arguments], JAM.policy.p1);
    return JAM.new(Hash, [obj$$17]);
  }
  function v147() {
    function v146(key$$25) {
      var v3284 = Element.Layout.PROPERTIES;
      if (!JAM.call(v3284.include, v3284, [key$$25], JAM.policy.p1)) {
        return;
      }
      var value$$83 = JAM.call(this.get, this, [key$$25], JAM.policy.p1);
      if (value$$83 != null) {
        JAM.set(obj$$16, key$$25, value$$83, JAM.policy.p2);
      }
      return;
    }
    var args$$10 = $A(arguments);
    var v1089;
    if (args$$10.length === 0) {
      v1089 = Element.Layout.PROPERTIES;
    } else {
      var v2489 = JAM.call(args$$10.join, args$$10, [" "], JAM.policy.p1);
      v1089 = JAM.call(v2489.split, v2489, [" "], JAM.policy.p1);
    }
    var keys$$3 = v1089;
    var obj$$16 = {};
    JAM.call(keys$$3.each, keys$$3, [v146, this], JAM.policy.p1);
    return obj$$16;
  }
  function v145(bool$$2) {
    var v1090 = this.element;
    return JAM.call(v1090.store, v1090, ["prototype_element_layout_prepared", bool$$2], JAM.policy.p1);
  }
  function v144() {
    var v1091 = this.element;
    return JAM.call(v1091.retrieve, v1091, ["prototype_element_layout_prepared", false], JAM.policy.p1);
  }
  function v143(property$$17) {
    var COMPUTATIONS = Element.Layout.COMPUTATIONS;
    if (!(property$$17 in COMPUTATIONS)) {
      throw "Property not found.";
    }
    var v2492 = COMPUTATIONS[property$$17];
    return JAM.call(this._set, this, [property$$17, JAM.call(v2492.call, v2492, [this, this.element], JAM.policy.p1)], JAM.policy.p1);
  }
  function v142() {
    var element$$114 = this.element;
    var originalStyles$$3 = JAM.call(element$$114.retrieve, element$$114, ["prototype_original_styles"], JAM.policy.p1);
    JAM.call(element$$114.store, element$$114, ["prototype_original_styles", null], JAM.policy.p1);
    JAM.call(element$$114.setStyle, element$$114, [originalStyles$$3], JAM.policy.p1);
    JAM.call(this._setPrepared, this, [false], JAM.policy.p1);
    return;
  }
  function v141() {
    if (JAM.call(this._isPrepared, this, [], JAM.policy.p1)) {
      return;
    }
    var element$$113 = this.element;
    var JSCompiler_inline_result$$4;
    JSCompiler_inline_label_isDisplayed_30: {
      var element$$inline_28 = element$$113;
      var v2494 = element$$inline_28;
      if (v2494) {
        v2494 = element$$inline_28.parentNode;
      }
      var v1098 = v2494;
      for (;v1098;) {
        var display$$inline_29 = JAM.call(element$$inline_28.getStyle, element$$inline_28, ["display"], JAM.policy.p1);
        if (display$$inline_29 === "none") {
          JSCompiler_inline_result$$4 = false;
          break JSCompiler_inline_label_isDisplayed_30;
        }
        element$$inline_28 = JAM.call($, null, [element$$inline_28.parentNode], JAM.policy.p1);
        var v2495 = element$$inline_28;
        if (v2495) {
          v2495 = element$$inline_28.parentNode;
        }
        v1098 = v2495;
      }
      JSCompiler_inline_result$$4 = true;
    }
    if (JSCompiler_inline_result$$4) {
      JAM.call(this._setPrepared, this, [true], JAM.policy.p1);
      return;
    }
    var v2496 = element$$113.style.position;
    if (!v2496) {
      v2496 = "";
    }
    var v1099 = v2496;
    var v2497 = element$$113.style.width;
    if (!v2497) {
      v2497 = "";
    }
    var v1100 = v2497;
    var v2498 = element$$113.style.visibility;
    if (!v2498) {
      v2498 = "";
    }
    var v1101 = v2498;
    var v2499 = element$$113.style.display;
    if (!v2499) {
      v2499 = "";
    }
    var originalStyles$$2 = {position:v1099, width:v1100, visibility:v1101, display:v2499};
    JAM.call(element$$113.store, element$$113, ["prototype_original_styles", originalStyles$$2], JAM.policy.p1);
    var position$$3 = JAM.call(getRawStyle, null, [element$$113, "position"], JAM.policy.p1);
    var width$$9 = element$$113.offsetWidth;
    var v2500 = width$$9 === 0;
    if (!v2500) {
      v2500 = width$$9 === null;
    }
    if (v2500) {
      element$$113.style.display = "block";
      width$$9 = element$$113.offsetWidth;
    }
    var v1105;
    if (position$$3 === "fixed") {
      v1105 = document.viewport;
    } else {
      v1105 = element$$113.parentNode;
    }
    var context$$28 = v1105;
    var tempStyles = {visibility:"hidden", display:"block"};
    if (position$$3 !== "fixed") {
      tempStyles.position = "absolute";
    }
    JAM.call(element$$113.setStyle, element$$113, [tempStyles], JAM.policy.p1);
    var positionedWidth = element$$113.offsetWidth;
    var newWidth;
    var v2502 = width$$9;
    if (v2502) {
      v2502 = positionedWidth === width$$9;
    }
    if (v2502) {
      newWidth = getContentWidth(element$$113, context$$28);
    } else {
      var v2503 = position$$3 === "absolute";
      if (!v2503) {
        v2503 = position$$3 === "fixed";
      }
      if (v2503) {
        newWidth = getContentWidth(element$$113, context$$28);
      } else {
        var parent$$3 = element$$113.parentNode;
        var v1107 = JAM.call($, null, [parent$$3], JAM.policy.p1);
        var pLayout = JAM.call(v1107.getLayout, v1107, [], JAM.policy.p1);
        newWidth = JAM.call(pLayout.get, pLayout, ["width"], JAM.policy.p1) - JAM.call(this.get, this, ["margin-left"], JAM.policy.p1) - JAM.call(this.get, this, ["border-left"], JAM.policy.p1) - JAM.call(this.get, this, ["padding-left"], JAM.policy.p1) - JAM.call(this.get, this, ["padding-right"], JAM.policy.p1) - JAM.call(this.get, this, ["border-right"], JAM.policy.p1) - JAM.call(this.get, this, ["margin-right"], JAM.policy.p1);
      }
    }
    JAM.call(element$$113.setStyle, element$$113, [{width:newWidth + "px"}], JAM.policy.p1);
    JAM.call(this._setPrepared, this, [true], JAM.policy.p1);
    return;
  }
  function v140($super$$4, property$$16) {
    var value$$82 = JAM.call($super$$4, null, [property$$16], JAM.policy.p1);
    var v1113;
    if (value$$82 === null) {
      v1113 = JAM.call(this._compute, this, [property$$16], JAM.policy.p1);
    } else {
      v1113 = value$$82;
    }
    return v1113;
  }
  function v139(property$$15, value$$81) {
    throw "Properties of Element.Layout are read-only.";
  }
  function v138(property$$14, value$$80) {
    var v1114 = Hash.prototype.set;
    return JAM.call(v1114.call, v1114, [this, property$$14, value$$80], JAM.policy.p1);
  }
  function v137($super$$3, element$$112, preCompute$$1) {
    function v136(property$$13) {
      JAM.call(this._set, this, [property$$13, null], JAM.policy.p1);
      return;
    }
    JAM.call($super$$3, null, [], JAM.policy.p1);
    var v3948 = JAM.call($, null, [element$$112], JAM.policy.p1);
    this.element = v3948;
    var v1115 = Element.Layout.PROPERTIES;
    JAM.call(v1115.each, v1115, [v136, this], JAM.policy.p1);
    if (preCompute$$1) {
      this._preComputing = true;
      JAM.call(this._begin, this, [], JAM.policy.p1);
      var v1116 = Element.Layout.PROPERTIES;
      JAM.call(v1116.each, v1116, [this._compute, this], JAM.policy.p1);
      JAM.call(this._end, this, [], JAM.policy.p1);
      this._preComputing = false;
    }
    return;
  }
  function v135(element$$111) {
    if (!element$$111.currentStyle.hasLayout) {
      element$$111.style.zoom = 1;
    }
    return element$$111;
  }
  function getRawStyle(element$$84, style$$6) {
    element$$84 = JAM.call($, null, [element$$84], JAM.policy.p1);
    var value$$77 = element$$84.style[style$$6];
    var v2512 = !value$$77;
    if (!v2512) {
      v2512 = value$$77 === "auto";
    }
    if (v2512) {
      var v1121 = document.defaultView;
      var css$$1 = JAM.call(v1121.getComputedStyle, v1121, [element$$84, null], JAM.policy.p1);
      var v1122;
      if (css$$1) {
        v1122 = css$$1[style$$6];
      } else {
        v1122 = null;
      }
      value$$77 = v1122;
    }
    if (style$$6 === "opacity") {
      var v1124;
      if (value$$77) {
        v1124 = parseFloat(value$$77);
      } else {
        v1124 = 1;
      }
      return v1124;
    }
    var v1126;
    if (value$$77 === "auto") {
      v1126 = null;
    } else {
      v1126 = value$$77;
    }
    return v1126;
  }
  function getRawStyle_IE(element$$85, style$$7) {
    var value$$78 = element$$85.style[style$$7];
    var v2514 = !value$$78;
    if (v2514) {
      v2514 = element$$85.currentStyle;
    }
    if (v2514) {
      value$$78 = element$$85.currentStyle[style$$7];
    }
    return value$$78;
  }
  function getContentWidth(element$$86, context$$26) {
    var boxWidth = element$$86.offsetWidth;
    var v1130 = getPixelValue(element$$86, "borderLeftWidth", context$$26);
    if (!v1130) {
      v1130 = 0;
    }
    var bl = v1130;
    var v1131 = getPixelValue(element$$86, "borderRightWidth", context$$26);
    if (!v1131) {
      v1131 = 0;
    }
    var br = v1131;
    var v1132 = getPixelValue(element$$86, "paddingLeft", context$$26);
    if (!v1132) {
      v1132 = 0;
    }
    var pl = v1132;
    var v1133 = getPixelValue(element$$86, "paddingRight", context$$26);
    if (!v1133) {
      v1133 = 0;
    }
    var pr = v1133;
    return boxWidth - bl - br - pl - pr;
  }
  function getPixelValue(value$$79, property$$11, context$$27) {
    var element$$87 = null;
    if (JAM.call(Object.isElement, Object, [value$$79], JAM.policy.p1)) {
      element$$87 = value$$79;
      value$$79 = JAM.call(getRawStyle, null, [element$$87, property$$11], JAM.policy.p1);
    }
    var v2520 = value$$79 === null;
    if (!v2520) {
      v2520 = JAM.call(Object.isUndefined, Object, [value$$79], JAM.policy.p1);
    }
    if (v2520) {
      return null;
    }
    if (JAM.call(/^(?:-)?\d+(\.\d+)?(px)?$/i.test, /^(?:-)?\d+(\.\d+)?(px)?$/i, [value$$79], JAM.policy.p1)) {
      return JAM.call(window.parseFloat, window, [value$$79], JAM.policy.p1);
    }
    var isPercentage = JAM.call(value$$79.include, value$$79, ["%"], JAM.policy.p1);
    var isViewport = context$$27 === document.viewport;
    var v3671 = JAM.call(/\d/.test, /\d/, [value$$79], JAM.policy.p1);
    if (v3671) {
      v3671 = element$$87;
    }
    var v3302 = v3671;
    if (v3302) {
      v3302 = element$$87.runtimeStyle;
    }
    var v2521 = v3302;
    if (v2521) {
      v2521 = !(isPercentage && isViewport);
    }
    if (v2521) {
      var style$$8 = element$$87.style.left;
      var rStyle = element$$87.runtimeStyle.left;
      element$$87.runtimeStyle.left = element$$87.currentStyle.left;
      element$$87.style.left = value$$79 || 0;
      value$$79 = element$$87.style.pixelLeft;
      element$$87.style.left = style$$8;
      element$$87.runtimeStyle.left = rStyle;
      return value$$79;
    }
    if (element$$87 && isPercentage) {
      var v1147 = context$$27;
      if (!v1147) {
        v1147 = element$$87.parentNode;
      }
      context$$27 = v1147;
      var decimal;
      JSCompiler_inline_label_toDecimal_27: {
        var match$$inline_26 = JAM.call(value$$79.match, value$$79, [/^(\d+)%?$/i], JAM.policy.p1);
        if (!match$$inline_26) {
          decimal = null;
          break JSCompiler_inline_label_toDecimal_27;
        }
        decimal = Number(match$$inline_26[1]) / 100;
      }
      var whole = null;
      var v2525 = JAM.call(property$$11.include, property$$11, ["left"], JAM.policy.p1);
      if (!v2525) {
        v2525 = JAM.call(property$$11.include, property$$11, ["right"], JAM.policy.p1);
      }
      var v1150 = v2525;
      if (!v1150) {
        v1150 = JAM.call(property$$11.include, property$$11, ["width"], JAM.policy.p1);
      }
      var isHorizontal = v1150;
      var v2527 = JAM.call(property$$11.include, property$$11, ["top"], JAM.policy.p1);
      if (!v2527) {
        v2527 = JAM.call(property$$11.include, property$$11, ["bottom"], JAM.policy.p1);
      }
      var v1151 = v2527;
      if (!v1151) {
        v1151 = JAM.call(property$$11.include, property$$11, ["height"], JAM.policy.p1);
      }
      var isVertical = v1151;
      if (context$$27 === document.viewport) {
        if (isHorizontal) {
          var v1152 = document.viewport;
          whole = JAM.call(v1152.getWidth, v1152, [], JAM.policy.p1);
        } else {
          if (isVertical) {
            var v1153 = document.viewport;
            whole = JAM.call(v1153.getHeight, v1153, [], JAM.policy.p1);
          }
        }
      } else {
        if (isHorizontal) {
          var v1154 = JAM.call($, null, [context$$27], JAM.policy.p1);
          whole = JAM.call(v1154.measure, v1154, ["width"], JAM.policy.p1);
        } else {
          if (isVertical) {
            var v1155 = JAM.call($, null, [context$$27], JAM.policy.p1);
            whole = JAM.call(v1155.measure, v1155, ["height"], JAM.policy.p1);
          }
        }
      }
      var v1157;
      if (whole === null) {
        v1157 = 0;
      } else {
        v1157 = whole * decimal;
      }
      return v1157;
    }
    return 0;
  }
  function getLayout(element$$89, preCompute) {
    return JAM.new(Element.Layout, [element$$89, preCompute]);
  }
  function measure(element$$90, property$$12) {
    var v2531 = JAM.call($, null, [element$$90], JAM.policy.p1);
    var v1160 = JAM.call(v2531.getLayout, v2531, [], JAM.policy.p1);
    return JAM.call(v1160.get, v1160, [property$$12], JAM.policy.p1);
  }
  function getHeight(element$$91) {
    return JAM.call(Element.getDimensions, Element, [element$$91], JAM.policy.p1).height;
  }
  function getWidth(element$$92) {
    return JAM.call(Element.getDimensions, Element, [element$$92], JAM.policy.p1).width;
  }
  function getDimensions(element$$93) {
    element$$93 = JAM.call($, null, [element$$93], JAM.policy.p1);
    var display$$1 = JAM.call(Element.getStyle, Element, [element$$93, "display"], JAM.policy.p1);
    var v2532 = display$$1;
    if (v2532) {
      v2532 = display$$1 !== "none";
    }
    if (v2532) {
      return{width:element$$93.offsetWidth, height:element$$93.offsetHeight};
    }
    var style$$9 = element$$93.style;
    var originalStyles = {visibility:style$$9.visibility, position:style$$9.position, display:style$$9.display};
    var newStyles = {visibility:"hidden", display:"block"};
    if (originalStyles.position !== "fixed") {
      newStyles.position = "absolute";
    }
    JAM.call(Element.setStyle, Element, [element$$93, newStyles], JAM.policy.p1);
    var dimensions = {width:element$$93.offsetWidth, height:element$$93.offsetHeight};
    JAM.call(Element.setStyle, Element, [element$$93, originalStyles], JAM.policy.p1);
    return dimensions;
  }
  function getOffsetParent(element$$94) {
    element$$94 = JAM.call($, null, [element$$94], JAM.policy.p1);
    var v3672 = element$$94.nodeType === Node.DOCUMENT_NODE;
    if (!v3672) {
      v3672 = isDetached(element$$94);
    }
    var v3306 = v3672;
    if (!v3306) {
      var v3817 = element$$94.nodeName;
      v3306 = JAM.call(v3817.toUpperCase, v3817, [], JAM.policy.p1) === "BODY";
    }
    var v2534 = v3306;
    if (!v2534) {
      var v3675 = element$$94.nodeName;
      v2534 = JAM.call(v3675.toUpperCase, v3675, [], JAM.policy.p1) === "HTML";
    }
    if (v2534) {
      return JAM.call($, null, [document.body], JAM.policy.p1);
    }
    var isInline = JAM.call(Element.getStyle, Element, [element$$94, "display"], JAM.policy.p1) === "inline";
    var v2535 = !isInline;
    if (v2535) {
      v2535 = element$$94.offsetParent;
    }
    if (v2535) {
      return JAM.call($, null, [element$$94.offsetParent], JAM.policy.p1);
    }
    var v2536 = element$$94 = element$$94.parentNode;
    if (v2536) {
      v2536 = element$$94 !== document.body;
    }
    var v1179 = v2536;
    for (;v1179;) {
      if (JAM.call(Element.getStyle, Element, [element$$94, "position"], JAM.policy.p1) !== "static") {
        var v1177;
        var v3676 = element$$94.nodeName;
        if (JAM.call(v3676.toUpperCase, v3676, [], JAM.policy.p1) === "HTML") {
          v1177 = JAM.call($, null, [document.body], JAM.policy.p1);
        } else {
          v1177 = JAM.call($, null, [element$$94], JAM.policy.p1);
        }
        return v1177;
      }
      var v2540 = element$$94 = element$$94.parentNode;
      if (v2540) {
        v2540 = element$$94 !== document.body;
      }
      v1179 = v2540;
    }
    return JAM.call($, null, [document.body], JAM.policy.p1);
  }
  function cumulativeOffset(element$$95) {
    element$$95 = JAM.call($, null, [element$$95], JAM.policy.p1);
    var valueT = 0;
    var valueL = 0;
    if (element$$95.parentNode) {
      do {
        var v3312 = element$$95.offsetTop;
        if (!v3312) {
          v3312 = 0;
        }
        valueT = valueT + v3312;
        var v3313 = element$$95.offsetLeft;
        if (!v3313) {
          v3313 = 0;
        }
        valueL = valueL + v3313;
        element$$95 = element$$95.offsetParent;
      } while (element$$95);
    }
    return JAM.new(Element.Offset, [valueL, valueT]);
  }
  function positionedOffset(element$$96) {
    element$$96 = JAM.call($, null, [element$$96], JAM.policy.p1);
    var layout = JAM.call(element$$96.getLayout, element$$96, [], JAM.policy.p1);
    var valueT$$1 = 0;
    var valueL$$1 = 0;
    do {
      var v3314 = element$$96.offsetTop;
      if (!v3314) {
        v3314 = 0;
      }
      valueT$$1 = valueT$$1 + v3314;
      var v3315 = element$$96.offsetLeft;
      if (!v3315) {
        v3315 = 0;
      }
      valueL$$1 = valueL$$1 + v3315;
      element$$96 = element$$96.offsetParent;
      if (element$$96) {
        var v3316 = element$$96.nodeName;
        if (JAM.call(v3316.toUpperCase, v3316, [], JAM.policy.p1) === "BODY") {
          break;
        }
        var p$$2 = JAM.call(Element.getStyle, Element, [element$$96, "position"], JAM.policy.p1);
        if (p$$2 !== "static") {
          break;
        }
      }
    } while (element$$96);
    valueL$$1 = valueL$$1 - JAM.call(layout.get, layout, ["margin-top"], JAM.policy.p1);
    valueT$$1 = valueT$$1 - JAM.call(layout.get, layout, ["margin-left"], JAM.policy.p1);
    return JAM.new(Element.Offset, [valueL$$1, valueT$$1]);
  }
  function cumulativeScrollOffset(element$$97) {
    var valueT$$2 = 0;
    var valueL$$2 = 0;
    do {
      var v3317 = element$$97.scrollTop;
      if (!v3317) {
        v3317 = 0;
      }
      valueT$$2 = valueT$$2 + v3317;
      var v3318 = element$$97.scrollLeft;
      if (!v3318) {
        v3318 = 0;
      }
      valueL$$2 = valueL$$2 + v3318;
      element$$97 = element$$97.parentNode;
    } while (element$$97);
    return JAM.new(Element.Offset, [valueL$$2, valueT$$2]);
  }
  function viewportOffset(forElement) {
    var valueT$$3 = 0;
    var valueL$$3 = 0;
    var docBody = document.body;
    var element$$98 = JAM.call($, null, [forElement], JAM.policy.p1);
    var v1188 = element$$98 = element$$98.offsetParent;
    do {
      var v3319 = element$$98.offsetTop;
      if (!v3319) {
        v3319 = 0;
      }
      valueT$$3 = valueT$$3 + v3319;
      var v3320 = element$$98.offsetLeft;
      if (!v3320) {
        v3320 = 0;
      }
      valueL$$3 = valueL$$3 + v3320;
      var v2552 = element$$98.offsetParent == docBody;
      if (v2552) {
        v2552 = JAM.call(Element.getStyle, Element, [element$$98, "position"], JAM.policy.p1) == "absolute";
      }
      if (v2552) {
        break;
      }
      v1188 = element$$98 = element$$98.offsetParent;
    } while (v1188);
    element$$98 = forElement;
    var v1190 = element$$98 = element$$98.parentNode;
    do {
      if (element$$98 != docBody) {
        var v3323 = element$$98.scrollTop;
        if (!v3323) {
          v3323 = 0;
        }
        valueT$$3 = valueT$$3 - v3323;
        var v3324 = element$$98.scrollLeft;
        if (!v3324) {
          v3324 = 0;
        }
        valueL$$3 = valueL$$3 - v3324;
      }
      v1190 = element$$98 = element$$98.parentNode;
    } while (v1190);
    return JAM.new(Element.Offset, [valueL$$3, valueT$$3]);
  }
  function absolutize(element$$99) {
    element$$99 = JAM.call($, null, [element$$99], JAM.policy.p1);
    if (JAM.call(Element.getStyle, Element, [element$$99, "position"], JAM.policy.p1) === "absolute") {
      return element$$99;
    }
    var offsetParent = JAM.call(getOffsetParent, null, [element$$99], JAM.policy.p1);
    var eOffset = JAM.call(element$$99.viewportOffset, element$$99, [], JAM.policy.p1);
    var pOffset = JAM.call(offsetParent.viewportOffset, offsetParent, [], JAM.policy.p1);
    var offset$$8 = JAM.call(eOffset.relativeTo, eOffset, [pOffset], JAM.policy.p1);
    var layout$$1 = JAM.call(element$$99.getLayout, element$$99, [], JAM.policy.p1);
    JAM.call(element$$99.store, element$$99, ["prototype_absolutize_original_styles", {left:JAM.call(element$$99.getStyle, element$$99, ["left"], JAM.policy.p1), top:JAM.call(element$$99.getStyle, element$$99, ["top"], JAM.policy.p1), width:JAM.call(element$$99.getStyle, element$$99, ["width"], JAM.policy.p1), height:JAM.call(element$$99.getStyle, element$$99, ["height"], JAM.policy.p1)}], JAM.policy.p1);
    JAM.call(element$$99.setStyle, element$$99, [{position:"absolute", top:offset$$8.top + "px", left:offset$$8.left + "px", width:JAM.call(layout$$1.get, layout$$1, ["width"], JAM.policy.p1) + "px", height:JAM.call(layout$$1.get, layout$$1, ["height"], JAM.policy.p1) + "px"}], JAM.policy.p1);
    return element$$99;
  }
  function relativize(element$$100) {
    element$$100 = JAM.call($, null, [element$$100], JAM.policy.p1);
    if (JAM.call(Element.getStyle, Element, [element$$100, "position"], JAM.policy.p1) === "relative") {
      return element$$100;
    }
    var originalStyles$$1 = JAM.call(element$$100.retrieve, element$$100, ["prototype_absolutize_original_styles"], JAM.policy.p1);
    if (originalStyles$$1) {
      JAM.call(element$$100.setStyle, element$$100, [originalStyles$$1], JAM.policy.p1);
    }
    return element$$100;
  }
  function scrollTo(element$$101) {
    element$$101 = JAM.call($, null, [element$$101], JAM.policy.p1);
    var pos = JAM.call(Element.cumulativeOffset, Element, [element$$101], JAM.policy.p1);
    JAM.call(window.scrollTo, window, [pos.left, pos.top], JAM.policy.p1);
    return element$$101;
  }
  function makePositioned(element$$102) {
    element$$102 = JAM.call($, null, [element$$102], JAM.policy.p1);
    var position$$2 = JAM.call(Element.getStyle, Element, [element$$102, "position"], JAM.policy.p1);
    var styles$$1 = {};
    var v2565 = position$$2 === "static";
    if (!v2565) {
      v2565 = !position$$2;
    }
    if (v2565) {
      styles$$1.position = "relative";
      if (Prototype.Browser.Opera) {
        styles$$1.top = 0;
        styles$$1.left = 0;
      }
      JAM.call(Element.setStyle, Element, [element$$102, styles$$1], JAM.policy.p1);
      JAM.call(Element.store, Element, [element$$102, "prototype_made_positioned", true], JAM.policy.p1);
    }
    return element$$102;
  }
  function undoPositioned(element$$103) {
    element$$103 = JAM.call($, null, [element$$103], JAM.policy.p1);
    var storage$$2 = JAM.call(Element.getStorage, Element, [element$$103], JAM.policy.p1);
    var madePositioned = JAM.call(storage$$2.get, storage$$2, ["prototype_made_positioned"], JAM.policy.p1);
    if (madePositioned) {
      JAM.call(storage$$2.unset, storage$$2, ["prototype_made_positioned"], JAM.policy.p1);
      JAM.call(Element.setStyle, Element, [element$$103, {position:"", top:"", bottom:"", left:"", right:""}], JAM.policy.p1);
    }
    return element$$103;
  }
  function makeClipping(element$$104) {
    element$$104 = JAM.call($, null, [element$$104], JAM.policy.p1);
    var storage$$3 = JAM.call(Element.getStorage, Element, [element$$104], JAM.policy.p1);
    var madeClipping = JAM.call(storage$$3.get, storage$$3, ["prototype_made_clipping"], JAM.policy.p1);
    if (JAM.call(Object.isUndefined, Object, [madeClipping], JAM.policy.p1)) {
      var overflow = JAM.call(Element.getStyle, Element, [element$$104, "overflow"], JAM.policy.p1);
      JAM.call(storage$$3.set, storage$$3, ["prototype_made_clipping", overflow], JAM.policy.p1);
      if (overflow !== "hidden") {
        element$$104.style.overflow = "hidden";
      }
    }
    return element$$104;
  }
  function undoClipping(element$$105) {
    element$$105 = JAM.call($, null, [element$$105], JAM.policy.p1);
    var storage$$4 = JAM.call(Element.getStorage, Element, [element$$105], JAM.policy.p1);
    var overflow$$1 = JAM.call(storage$$4.get, storage$$4, ["prototype_made_clipping"], JAM.policy.p1);
    if (!JAM.call(Object.isUndefined, Object, [overflow$$1], JAM.policy.p1)) {
      JAM.call(storage$$4.unset, storage$$4, ["prototype_made_clipping"], JAM.policy.p1);
      element$$105.style.overflow = overflow$$1 || "";
    }
    return element$$105;
  }
  function clonePosition(element$$106, source$$4, options$$7) {
    options$$7 = JAM.call(Object.extend, Object, [{setLeft:true, setTop:true, setWidth:true, setHeight:true, offsetTop:0, offsetLeft:0}, options$$7 || {}], JAM.policy.p1);
    source$$4 = JAM.call($, null, [source$$4], JAM.policy.p1);
    element$$106 = JAM.call($, null, [element$$106], JAM.policy.p1);
    var p$$3;
    var delta$$1;
    var layout$$2;
    var styles$$2 = {};
    var v2568 = options$$7.setLeft;
    if (!v2568) {
      v2568 = options$$7.setTop;
    }
    if (v2568) {
      p$$3 = JAM.call(Element.viewportOffset, Element, [source$$4], JAM.policy.p1);
      delta$$1 = [0, 0];
      if (JAM.call(Element.getStyle, Element, [element$$106, "position"], JAM.policy.p1) === "absolute") {
        var parent$$2 = JAM.call(Element.getOffsetParent, Element, [element$$106], JAM.policy.p1);
        if (parent$$2 !== document.body) {
          delta$$1 = JAM.call(Element.viewportOffset, Element, [parent$$2], JAM.policy.p1);
        }
      }
    }
    var v2571 = options$$7.setWidth;
    if (!v2571) {
      v2571 = options$$7.setHeight;
    }
    if (v2571) {
      layout$$2 = JAM.call(Element.getLayout, Element, [source$$4], JAM.policy.p1);
    }
    if (options$$7.setLeft) {
      styles$$2.left = p$$3[0] - delta$$1[0] + options$$7.offsetLeft + "px";
    }
    if (options$$7.setTop) {
      styles$$2.top = p$$3[1] - delta$$1[1] + options$$7.offsetTop + "px";
    }
    if (options$$7.setWidth) {
      styles$$2.width = JAM.call(layout$$2.get, layout$$2, ["border-box-width"], JAM.policy.p1) + "px";
    }
    if (options$$7.setHeight) {
      styles$$2.height = JAM.call(layout$$2.get, layout$$2, ["border-box-height"], JAM.policy.p1) + "px";
    }
    return JAM.call(Element.setStyle, Element, [element$$106, styles$$2], JAM.policy.p1);
  }
  function isDetached(element$$110) {
    var v1220 = element$$110 !== document.body;
    if (v1220) {
      v1220 = !JAM.call(Element.descendantOf, Element, [element$$110, document.body], JAM.policy.p1);
    }
    return v1220;
  }
  if ("currentStyle" in document.documentElement) {
    getRawStyle = getRawStyle_IE;
  }
  var hasLayout = Prototype.K;
  if ("currentStyle" in document.documentElement) {
    hasLayout = v135;
  }
  var v1223 = Element;
  var v3949 = JAM.call(Class.create, Class, [Hash, {initialize:v137, _set:v138, set:v139, get:v140, _begin:v141, _end:v142, _compute:v143, _isPrepared:v144, _setPrepared:v145, toObject:v147, toHash:v148, toCSS:v150, inspect:v151}], JAM.policy.p1);
  v1223.Layout = v3949;
  JAM.call(Object.extend, Object, [Element.Layout, {PROPERTIES:$w("height width top left right bottom border-left border-right border-top border-bottom padding-left padding-right padding-top padding-bottom margin-top margin-bottom margin-left margin-right padding-box-width padding-box-height border-box-width border-box-height margin-box-width margin-box-height"), COMPOSITE_PROPERTIES:$w("padding-box-width padding-box-height margin-box-width margin-box-height border-box-width border-box-height"), 
  COMPUTATIONS:{"height":v152, "width":v153, "padding-box-height":v154, "padding-box-width":v155, "border-box-height":v156, "border-box-width":v157, "margin-box-height":v158, "margin-box-width":v159, "top":v160, "bottom":v161, "left":v162, "right":v163, "padding-top":v164, "padding-bottom":v165, "padding-left":v166, "padding-right":v167, "border-top":v168, "border-bottom":v169, "border-left":v170, "border-right":v171, "margin-top":v172, "margin-bottom":v173, "margin-left":v174, "margin-right":v175}}], 
  JAM.policy.p1);
  if ("getBoundingClientRect" in document.documentElement) {
    JAM.call(Object.extend, Object, [Element.Layout.COMPUTATIONS, {"right":v176, "bottom":v177}], JAM.policy.p1);
  }
  var v1229 = Element;
  var v3950 = JAM.call(Class.create, Class, [{initialize:v178, relativeTo:v179, inspect:v180, toString:v181, toArray:v182}], JAM.policy.p1);
  v1229.Offset = v3950;
  if (Prototype.Browser.IE) {
    getOffsetParent = JAM.call(getOffsetParent.wrap, getOffsetParent, [v183], JAM.policy.p1);
    positionedOffset = JAM.call(positionedOffset.wrap, positionedOffset, [v184], JAM.policy.p1);
  } else {
    if (Prototype.Browser.Webkit) {
      cumulativeOffset = v185;
    }
  }
  JAM.call(Element.addMethods, Element, [{getLayout:getLayout, measure:measure, getWidth:getWidth, getHeight:getHeight, getDimensions:getDimensions, getOffsetParent:getOffsetParent, cumulativeOffset:cumulativeOffset, positionedOffset:positionedOffset, cumulativeScrollOffset:cumulativeScrollOffset, viewportOffset:viewportOffset, absolutize:absolutize, relativize:relativize, scrollTo:scrollTo, makePositioned:makePositioned, undoPositioned:undoPositioned, makeClipping:makeClipping, undoClipping:undoClipping, 
  clonePosition:clonePosition}], JAM.policy.p1);
  if ("getBoundingClientRect" in document.documentElement) {
    JAM.call(Element.addMethods, Element, [{viewportOffset:v186}], JAM.policy.p1);
  }
  return;
}
function v134(GLOBAL) {
  function v133() {
    if (Prototype.BrowserFeatures.ElementExtensions) {
      return;
    }
    JAM.call(Object.extend, Object, [Methods, Element$$1.Methods], JAM.policy.p1);
    JAM.call(Object.extend, Object, [Methods, Element$$1.Methods.Simulated], JAM.policy.p1);
    EXTENDED = {};
    return;
  }
  function v132(element$$83, value$$76) {
    var v1238 = element$$83.style;
    var v2592;
    if (value$$76) {
      v2592 = value$$76;
    } else {
      v2592 = "";
    }
    v1238.cssText = v2592;
    return;
  }
  function v131(element$$82, value$$75) {
    element$$82.checked = !!value$$75;
    return;
  }
  function v130(element$$81) {
    return element$$81.title;
  }
  function v129(element$$80) {
    var v1240 = element$$80.style.cssText;
    return JAM.call(v1240.toLowerCase, v1240, [], JAM.policy.p1);
  }
  function v128(element$$79, attribute$$7) {
    var value$$74 = JAM.call(element$$79.getAttribute, element$$79, [attribute$$7], JAM.policy.p1);
    if (!value$$74) {
      return null;
    }
    return JAM.call(value$$74.strip, value$$74, [], JAM.policy.p1);
  }
  function v127(element$$78, attribute$$6) {
    var value$$73 = JAM.call(element$$78.getAttribute, element$$78, [attribute$$6], JAM.policy.p1);
    if (!value$$73) {
      return null;
    }
    value$$73 = JAM.call(value$$73.toString, value$$73, [], JAM.policy.p1);
    value$$73 = JAM.call(value$$73.split, value$$73, ["{"], JAM.policy.p1)[1];
    value$$73 = JAM.call(value$$73.split, value$$73, ["}"], JAM.policy.p1)[0];
    return JAM.call(value$$73.strip, value$$73, [], JAM.policy.p1);
  }
  function v126() {
    JAM.call(DIV.setAttribute, DIV, ["onclick", Prototype.emptyFunction], JAM.policy.p1);
    var value$$72 = JAM.call(DIV.getAttribute, DIV, ["onclick"], JAM.policy.p1);
    var isFunction$$1 = typeof value$$72 === "function";
    JAM.call(DIV.removeAttribute, DIV, ["onclick"], JAM.policy.p1);
    return isFunction$$1;
  }
  function v125(element$$77, node$$14) {
    var v1247 = element$$77.parentNode;
    JAM.call(v1247.insertBefore, v1247, [node$$14, element$$77.nextSibling], JAM.policy.p1);
    return;
  }
  function v124(element$$76, node$$13) {
    JAM.call(element$$76.appendChild, element$$76, [node$$13], JAM.policy.p1);
    return;
  }
  function v123(element$$75, node$$12) {
    JAM.call(element$$75.insertBefore, element$$75, [node$$12, element$$75.firstChild], JAM.policy.p1);
    return;
  }
  function v122(element$$74, node$$11) {
    var v1250 = element$$74.parentNode;
    JAM.call(v1250.insertBefore, v1250, [node$$11, element$$74], JAM.policy.p1);
    return;
  }
  function v121() {
    var s$$2 = JAM.call(document.createElement, document, ["script"], JAM.policy.p1);
    var isBuggy$$4 = false;
    try {
      JAM.call(s$$2.appendChild, s$$2, [JAM.call(document.createTextNode, document, [""], JAM.policy.p1)], JAM.policy.p1);
      var v1252 = !s$$2.firstChild;
      if (!v1252) {
        var v2595 = s$$2.firstChild;
        if (v2595) {
          v2595 = s$$2.firstChild.nodeType !== 3;
        }
        v1252 = v2595;
      }
      isBuggy$$4 = v1252;
    } catch (e$$23) {
      isBuggy$$4 = true;
    }
    s$$2 = null;
    return isBuggy$$4;
  }
  function v120() {
    try {
      var el$$4 = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
      JAM.set(el$$4, "innerHTML", "<link />");
      var isBuggy$$3 = el$$4.childNodes.length === 0;
      el$$4 = null;
      return isBuggy$$3;
    } catch (e$$22) {
      return true;
    }
    return;
  }
  function v119() {
    try {
      var el$$3 = JAM.call(document.createElement, document, ["table"], JAM.policy.p1);
      var v2598 = el$$3;
      if (v2598) {
        v2598 = el$$3.tBodies;
      }
      if (v2598) {
        JAM.set(el$$3, "innerHTML", "<tbody><tr><td>test</td></tr></tbody>");
        var isBuggy$$2 = typeof el$$3.tBodies[0] == "undefined";
        el$$3 = null;
        return isBuggy$$2;
      }
    } catch (e$$21) {
      return true;
    }
    return;
  }
  function v118() {
    var el$$2 = JAM.call(document.createElement, document, ["select"], JAM.policy.p1);
    var isBuggy$$1 = true;
    JAM.set(el$$2, "innerHTML", '<option value="test">test</option>');
    var v2600 = el$$2.options;
    if (v2600) {
      v2600 = el$$2.options[0];
    }
    if (v2600) {
      var v2601 = el$$2.options[0].nodeName;
      isBuggy$$1 = JAM.call(v2601.toUpperCase, v2601, [], JAM.policy.p1) !== "OPTION";
    }
    el$$2 = null;
    return isBuggy$$1;
  }
  function v117() {
    try {
      var el$$1 = JAM.call(document.createElement, document, ['<input name="x">'], JAM.policy.p1);
      var v3341 = el$$1.tagName;
      var v1258 = JAM.call(v3341.toLowerCase, v3341, [], JAM.policy.p1) === "input";
      if (v1258) {
        v1258 = el$$1.name === "x";
      }
      return v1258;
    } catch (err) {
      return false;
    }
    return;
  }
  function $$$1(element$$2) {
    if (arguments.length > 1) {
      var i$$17 = 0;
      var elements = [];
      var length$$28 = arguments.length;
      var v1260 = i$$17 < length$$28;
      for (;v1260;) {
        JAM.call(elements.push, elements, [$$$1(arguments[i$$17])], JAM.policy.p1);
        i$$17++;
        v1260 = i$$17 < length$$28;
      }
      return elements;
    }
    if (JAM.call(Object.isString, Object, [element$$2], JAM.policy.p1)) {
      element$$2 = JAM.call(document.getElementById, document, [element$$2], JAM.policy.p1);
    }
    return JAM.call(Element$$1.extend, Element$$1, [element$$2]);
  }
  function Element$$1(tagName$$2, attributes$$1) {
    attributes$$1 = attributes$$1 || {};
    tagName$$2 = JAM.call(tagName$$2.toLowerCase, tagName$$2, [], JAM.policy.p1);
    var v2606 = HAS_EXTENDED_CREATE_ELEMENT_SYNTAX;
    if (v2606) {
      v2606 = attributes$$1.name;
    }
    if (v2606) {
      tagName$$2 = "<" + tagName$$2 + ' name="' + attributes$$1.name + '">';
      delete attributes$$1.name;
      return JAM.call(Element$$1.writeAttribute, Element$$1, [JAM.call(document.createElement, document, [tagName$$2], JAM.policy.p1), attributes$$1], JAM.policy.p1);
    }
    if (!ELEMENT_CACHE[tagName$$2]) {
      var v1266 = ELEMENT_CACHE;
      var v3951 = JAM.call(Element$$1.extend, Element$$1, [JAM.call(document.createElement, document, [tagName$$2], JAM.policy.p1)]);
      JAM.set(v1266, tagName$$2, v3951, JAM.policy.p2);
    }
    var JSCompiler_inline_result$$3;
    JSCompiler_inline_label_shouldUseCreationCache_7: {
      if (tagName$$2 === "select") {
        JSCompiler_inline_result$$3 = false;
        break JSCompiler_inline_label_shouldUseCreationCache_7;
      }
      if ("type" in attributes$$1) {
        JSCompiler_inline_result$$3 = false;
        break JSCompiler_inline_label_shouldUseCreationCache_7;
      }
      JSCompiler_inline_result$$3 = true;
    }
    var v1270;
    if (JSCompiler_inline_result$$3) {
      var v2611 = ELEMENT_CACHE[tagName$$2];
      v1270 = JAM.call(v2611.cloneNode, v2611, [false], JAM.policy.p1);
    } else {
      v1270 = JAM.call(document.createElement, document, [tagName$$2], JAM.policy.p1);
    }
    var node$$2 = v1270;
    return JAM.call(Element$$1.writeAttribute, Element$$1, [node$$2, attributes$$1], JAM.policy.p1);
  }
  function inspect$$5(element$$3) {
    element$$3 = $$$1(element$$3);
    var v2612 = element$$3.tagName;
    var result$$7 = "<" + JAM.call(v2612.toLowerCase, v2612, [], JAM.policy.p1);
    var attribute;
    var value$$61;
    var property$$5;
    for (property$$5 in INSPECT_ATTRIBUTES) {
      attribute = INSPECT_ATTRIBUTES[property$$5];
      var v2613 = element$$3[property$$5];
      if (!v2613) {
        v2613 = "";
      }
      var v1272 = v2613;
      value$$61 = JAM.call(v1272.toString, v1272, [], JAM.policy.p1);
      if (value$$61) {
        result$$7 = result$$7 + (" " + attribute + "=" + JAM.call(value$$61.inspect, value$$61, [true], JAM.policy.p1));
      }
    }
    return result$$7 + ">";
  }
  function visible(element$$4) {
    return $$$1(element$$4).style.display !== "none";
  }
  function toggle(element$$5, bool) {
    element$$5 = $$$1(element$$5);
    if (JAM.call(Object.isUndefined, Object, [bool], JAM.policy.p1)) {
      bool = !JAM.call(Element$$1.visible, Element$$1, [element$$5], JAM.policy.p1);
    }
    var v2616;
    if (bool) {
      v2616 = "show";
    } else {
      v2616 = "hide";
    }
    JAM.call(Element$$1[v2616], Element$$1, [element$$5], JAM.policy.p1);
    return element$$5;
  }
  function hide(element$$6) {
    element$$6 = $$$1(element$$6);
    element$$6.style.display = "none";
    return element$$6;
  }
  function show(element$$7) {
    element$$7 = $$$1(element$$7);
    element$$7.style.display = "";
    return element$$7;
  }
  function remove(element$$8) {
    element$$8 = $$$1(element$$8);
    var v1279 = element$$8.parentNode;
    JAM.call(v1279.removeChild, v1279, [element$$8], JAM.policy.p1);
    return element$$8;
  }
  function update$$2(element$$9, content) {
    element$$9 = $$$1(element$$9);
    var descendants$$1 = JAM.call(element$$9.getElementsByTagName, element$$9, ["*"], JAM.policy.p1);
    var i$$18 = descendants$$1.length;
    var v1281 = i$$18;
    i$$18 = i$$18 - 1;
    for (;v1281;) {
      purgeElement(descendants$$1[i$$18]);
      v1281 = i$$18;
      i$$18 = i$$18 - 1;
    }
    var v2617 = content;
    if (v2617) {
      v2617 = content.toElement;
    }
    if (v2617) {
      content = JAM.call(content.toElement, content, [], JAM.policy.p1);
    }
    if (JAM.call(Object.isElement, Object, [content], JAM.policy.p1)) {
      var v1283 = JAM.call(element$$9.update, element$$9, [], JAM.policy.p1);
      return JAM.call(v1283.insert, v1283, [content], JAM.policy.p1);
    }
    content = JAM.call(Object.toHTML, Object, [content], JAM.policy.p1);
    var v1285 = element$$9.tagName;
    var tagName$$3 = JAM.call(v1285.toUpperCase, v1285, [], JAM.policy.p1);
    var v2618 = tagName$$3 === "SCRIPT";
    if (v2618) {
      v2618 = SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING;
    }
    if (v2618) {
      element$$9.text = content;
      return element$$9;
    }
    if (ANY_INNERHTML_BUGGY) {
      if (tagName$$3 in INSERTION_TRANSLATIONS.tags) {
        var v1288 = element$$9.firstChild;
        for (;v1288;) {
          JAM.call(element$$9.removeChild, element$$9, [element$$9.firstChild], JAM.policy.p1);
          v1288 = element$$9.firstChild;
        }
        var nodes = getContentFromAnonymousElement(tagName$$3, JAM.call(content.stripScripts, content, [], JAM.policy.p1));
        i$$18 = 0;
        var node$$3;
        var v1290 = node$$3 = nodes[i$$18];
        for (;v1290;) {
          JAM.call(element$$9.appendChild, element$$9, [node$$3], JAM.policy.p1);
          i$$18++;
          v1290 = node$$3 = nodes[i$$18];
        }
      } else {
        var v3347 = LINK_ELEMENT_INNERHTML_BUGGY;
        if (v3347) {
          v3347 = JAM.call(Object.isString, Object, [content], JAM.policy.p1);
        }
        var v2620 = v3347;
        if (v2620) {
          v2620 = JAM.call(content.indexOf, content, ["<link"], JAM.policy.p1) > -1;
        }
        if (v2620) {
          var v1292 = element$$9.firstChild;
          for (;v1292;) {
            JAM.call(element$$9.removeChild, element$$9, [element$$9.firstChild], JAM.policy.p1);
            v1292 = element$$9.firstChild;
          }
          nodes = getContentFromAnonymousElement(tagName$$3, JAM.call(content.stripScripts, content, [], JAM.policy.p1), true);
          i$$18 = 0;
          var v1294 = node$$3 = nodes[i$$18];
          for (;v1294;) {
            JAM.call(element$$9.appendChild, element$$9, [node$$3], JAM.policy.p1);
            i$$18++;
            v1294 = node$$3 = nodes[i$$18];
          }
        } else {
          var v3952 = JAM.call(content.stripScripts, content, [], JAM.policy.p1);
          JAM.set(element$$9, "innerHTML", v3952);
        }
      }
    } else {
      var v3953 = JAM.call(content.stripScripts, content, [], JAM.policy.p1);
      JAM.set(element$$9, "innerHTML", v3953);
    }
    var v2621 = content.evalScripts;
    var v1297 = JAM.call(v2621.bind, v2621, [content], JAM.policy.p1);
    JAM.call(v1297.defer, v1297, [], JAM.policy.p1);
    return element$$9;
  }
  function replace(element$$10, content$$1) {
    element$$10 = $$$1(element$$10);
    var v2622 = content$$1;
    if (v2622) {
      v2622 = content$$1.toElement;
    }
    if (v2622) {
      content$$1 = JAM.call(content$$1.toElement, content$$1, [], JAM.policy.p1);
    } else {
      if (!JAM.call(Object.isElement, Object, [content$$1], JAM.policy.p1)) {
        content$$1 = JAM.call(Object.toHTML, Object, [content$$1], JAM.policy.p1);
        var v1298 = element$$10.ownerDocument;
        var range$$5 = JAM.call(v1298.createRange, v1298, [], JAM.policy.p1);
        JAM.call(range$$5.selectNode, range$$5, [element$$10], JAM.policy.p1);
        var v2624 = content$$1.evalScripts;
        var v1299 = JAM.call(v2624.bind, v2624, [content$$1], JAM.policy.p1);
        JAM.call(v1299.defer, v1299, [], JAM.policy.p1);
        content$$1 = JAM.call(range$$5.createContextualFragment, range$$5, [JAM.call(content$$1.stripScripts, content$$1, [], JAM.policy.p1)], JAM.policy.p1);
      }
    }
    var v1303 = element$$10.parentNode;
    JAM.call(v1303.replaceChild, v1303, [content$$1, element$$10], JAM.policy.p1);
    return element$$10;
  }
  function replace_IE(element$$11, content$$2) {
    function v116(node$$5) {
      JAM.call(parent$$1.appendChild, parent$$1, [node$$5], JAM.policy.p1);
      return;
    }
    function v115(node$$4) {
      JAM.call(parent$$1.insertBefore, parent$$1, [node$$4, nextSibling], JAM.policy.p1);
      return;
    }
    element$$11 = $$$1(element$$11);
    var v2625 = content$$2;
    if (v2625) {
      v2625 = content$$2.toElement;
    }
    if (v2625) {
      content$$2 = JAM.call(content$$2.toElement, content$$2, [], JAM.policy.p1);
    }
    if (JAM.call(Object.isElement, Object, [content$$2], JAM.policy.p1)) {
      var v1305 = element$$11.parentNode;
      JAM.call(v1305.replaceChild, v1305, [content$$2, element$$11], JAM.policy.p1);
      return element$$11;
    }
    content$$2 = JAM.call(Object.toHTML, Object, [content$$2], JAM.policy.p1);
    var parent$$1 = element$$11.parentNode;
    var v1307 = parent$$1.tagName;
    var tagName$$4 = JAM.call(v1307.toUpperCase, v1307, [], JAM.policy.p1);
    if (tagName$$4 in INSERTION_TRANSLATIONS.tags) {
      var nextSibling = JAM.call(Element$$1.next, Element$$1, [element$$11], JAM.policy.p1);
      var fragments = getContentFromAnonymousElement(tagName$$4, JAM.call(content$$2.stripScripts, content$$2, [], JAM.policy.p1));
      JAM.call(parent$$1.removeChild, parent$$1, [element$$11], JAM.policy.p1);
      var iterator$$26;
      if (nextSibling) {
        iterator$$26 = v115;
      } else {
        iterator$$26 = v116;
      }
      JAM.call(fragments.each, fragments, [iterator$$26], JAM.policy.p1);
    } else {
      var v1309 = element$$11;
      var v3954 = JAM.call(content$$2.stripScripts, content$$2, [], JAM.policy.p1);
      JAM.set(v1309, "outerHTML", v3954);
    }
    var v2627 = content$$2.evalScripts;
    var v1311 = JAM.call(v2627.bind, v2627, [content$$2], JAM.policy.p1);
    JAM.call(v1311.defer, v1311, [], JAM.policy.p1);
    return element$$11;
  }
  function isContent(content$$3) {
    var v2628 = JAM.call(Object.isUndefined, Object, [content$$3], JAM.policy.p1);
    if (!v2628) {
      v2628 = content$$3 === null;
    }
    if (v2628) {
      return false;
    }
    var v2629 = JAM.call(Object.isString, Object, [content$$3], JAM.policy.p1);
    if (!v2629) {
      v2629 = JAM.call(Object.isNumber, Object, [content$$3], JAM.policy.p1);
    }
    if (v2629) {
      return true;
    }
    if (JAM.call(Object.isElement, Object, [content$$3], JAM.policy.p1)) {
      return true;
    }
    var v2630 = content$$3.toElement;
    if (!v2630) {
      v2630 = content$$3.toHTML;
    }
    if (v2630) {
      return true;
    }
    return false;
  }
  function insert(element$$13, insertions) {
    element$$13 = $$$1(element$$13);
    if (isContent(insertions)) {
      insertions = {bottom:insertions};
    }
    var position$$1;
    for (position$$1 in insertions) {
      JSCompiler_inline_label_insertContentAt_16: {
        var element$$inline_8 = element$$13;
        var content$$inline_9 = insertions[position$$1];
        var position$$inline_10 = position$$1;
        position$$inline_10 = JAM.call(position$$inline_10.toLowerCase, position$$inline_10, [], JAM.policy.p1);
        var method$$inline_11 = INSERTION_TRANSLATIONS[position$$inline_10];
        var v2631 = content$$inline_9;
        if (v2631) {
          v2631 = content$$inline_9.toElement;
        }
        if (v2631) {
          content$$inline_9 = JAM.call(content$$inline_9.toElement, content$$inline_9, [], JAM.policy.p1);
        }
        if (JAM.call(Object.isElement, Object, [content$$inline_9], JAM.policy.p1)) {
          JAM.call(method$$inline_11, null, [element$$inline_8, content$$inline_9], JAM.policy.p1);
          break JSCompiler_inline_label_insertContentAt_16;
        }
        content$$inline_9 = JAM.call(Object.toHTML, Object, [content$$inline_9], JAM.policy.p1);
        var v3352;
        var v3818 = position$$inline_10 === "before";
        if (!v3818) {
          v3818 = position$$inline_10 === "after";
        }
        if (v3818) {
          v3352 = element$$inline_8.parentNode;
        } else {
          v3352 = element$$inline_8;
        }
        var v1319 = v3352.tagName;
        var tagName$$inline_12 = JAM.call(v1319.toUpperCase, v1319, [], JAM.policy.p1);
        var childNodes$$inline_13 = getContentFromAnonymousElement(tagName$$inline_12, JAM.call(content$$inline_9.stripScripts, content$$inline_9, [], JAM.policy.p1));
        var v2633 = position$$inline_10 === "top";
        if (!v2633) {
          v2633 = position$$inline_10 === "after";
        }
        if (v2633) {
          JAM.call(childNodes$$inline_13.reverse, childNodes$$inline_13, [], JAM.policy.p1);
        }
        var i$$inline_14 = 0;
        var node$$inline_15 = void 0;
        var v1322 = node$$inline_15 = childNodes$$inline_13[i$$inline_14];
        for (;v1322;) {
          JAM.call(method$$inline_11, null, [element$$inline_8, node$$inline_15], JAM.policy.p1);
          i$$inline_14++;
          v1322 = node$$inline_15 = childNodes$$inline_13[i$$inline_14];
        }
        var v2634 = content$$inline_9.evalScripts;
        var v1323 = JAM.call(v2634.bind, v2634, [content$$inline_9], JAM.policy.p1);
        JAM.call(v1323.defer, v1323, [], JAM.policy.p1);
      }
    }
    return element$$13;
  }
  function wrap$$1(element$$14, wrapper$$1, attributes$$2) {
    element$$14 = $$$1(element$$14);
    if (JAM.call(Object.isElement, Object, [wrapper$$1], JAM.policy.p1)) {
      var v1324 = $$$1(wrapper$$1);
      JAM.call(v1324.writeAttribute, v1324, [attributes$$2 || {}], JAM.policy.p1);
    } else {
      if (JAM.call(Object.isString, Object, [wrapper$$1], JAM.policy.p1)) {
        wrapper$$1 = new Element$$1(wrapper$$1, attributes$$2);
      } else {
        wrapper$$1 = new Element$$1("div", wrapper$$1);
      }
    }
    if (element$$14.parentNode) {
      var v1328 = element$$14.parentNode;
      JAM.call(v1328.replaceChild, v1328, [wrapper$$1, element$$14], JAM.policy.p1);
    }
    JAM.call(wrapper$$1.appendChild, wrapper$$1, [element$$14], JAM.policy.p1);
    return wrapper$$1;
  }
  function cleanWhitespace(element$$15) {
    element$$15 = $$$1(element$$15);
    var node$$7 = element$$15.firstChild;
    for (;node$$7;) {
      var nextNode = node$$7.nextSibling;
      var v2635 = node$$7.nodeType === Node.TEXT_NODE;
      if (v2635) {
        v2635 = !JAM.call(/\S/.test, /\S/, [node$$7.nodeValue], JAM.policy.p1);
      }
      if (v2635) {
        JAM.call(element$$15.removeChild, element$$15, [node$$7], JAM.policy.p1);
      }
      node$$7 = nextNode;
    }
    return element$$15;
  }
  function empty$$1(element$$16) {
    var v1331 = $$$1(element$$16).innerHTML;
    return JAM.call(v1331.blank, v1331, [], JAM.policy.p1);
  }
  function getContentFromAnonymousElement(tagName$$6, html, force) {
    var t = INSERTION_TRANSLATIONS.tags[tagName$$6];
    var div$$1 = DIV;
    var workaround = !!t;
    var v2637 = !workaround;
    if (v2637) {
      v2637 = force;
    }
    if (v2637) {
      workaround = true;
      t = ["", "", 0];
    }
    if (workaround) {
      JAM.set(div$$1, "innerHTML", "&#160;" + t[0] + html + t[1]);
      JAM.call(div$$1.removeChild, div$$1, [div$$1.firstChild], JAM.policy.p1);
      var i$$20 = t[2];
      var v1338 = i$$20;
      i$$20 = i$$20 - 1;
      for (;v1338;) {
        div$$1 = div$$1.firstChild;
        v1338 = i$$20;
        i$$20 = i$$20 - 1;
      }
    } else {
      JAM.set(div$$1, "innerHTML", html);
    }
    return $A(div$$1.childNodes);
  }
  function clone$$3(element$$17, deep$$2) {
    if (!(element$$17 = $$$1(element$$17))) {
      return;
    }
    var clone$$4 = JAM.call(element$$17.cloneNode, element$$17, [deep$$2], JAM.policy.p1);
    if (!HAS_UNIQUE_ID_PROPERTY) {
      clone$$4._prototypeUID = UNDEFINED;
      if (deep$$2) {
        var descendants$$2 = JAM.call(Element$$1.select, Element$$1, [clone$$4, "*"], JAM.policy.p1);
        var i$$21 = descendants$$2.length;
        var v1342 = i$$21;
        i$$21 = i$$21 - 1;
        for (;v1342;) {
          descendants$$2[i$$21]._prototypeUID = UNDEFINED;
          v1342 = i$$21;
          i$$21 = i$$21 - 1;
        }
      }
    }
    return JAM.call(Element$$1.extend, Element$$1, [clone$$4]);
  }
  function purgeElement(element$$18) {
    var uid = JAM.call(getUniqueElementID, null, [element$$18], JAM.policy.p1);
    if (uid) {
      JAM.call(Element$$1.stopObserving, Element$$1, [element$$18], JAM.policy.p1);
      if (!HAS_UNIQUE_ID_PROPERTY) {
        element$$18._prototypeUID = UNDEFINED;
      }
      delete Element$$1.Storage[uid];
    }
    return;
  }
  function purgeCollection(elements$$1) {
    var i$$22 = elements$$1.length;
    var v1347 = i$$22;
    i$$22 = i$$22 - 1;
    for (;v1347;) {
      purgeElement(elements$$1[i$$22]);
      v1347 = i$$22;
      i$$22 = i$$22 - 1;
    }
    return;
  }
  function purgeCollection_IE(elements$$2) {
    var i$$23 = elements$$2.length;
    var element$$19;
    var uid$$1;
    var v1350 = i$$23;
    i$$23 = i$$23 - 1;
    for (;v1350;) {
      element$$19 = elements$$2[i$$23];
      uid$$1 = JAM.call(getUniqueElementID, null, [element$$19], JAM.policy.p1);
      delete Element$$1.Storage[uid$$1];
      delete Event.cache[uid$$1];
      v1350 = i$$23;
      i$$23 = i$$23 - 1;
    }
    return;
  }
  function purge(element$$20) {
    if (!(element$$20 = $$$1(element$$20))) {
      return;
    }
    purgeElement(element$$20);
    var descendants$$3 = JAM.call(element$$20.getElementsByTagName, element$$20, ["*"], JAM.policy.p1);
    var i$$24 = descendants$$3.length;
    var v1353 = i$$24;
    i$$24 = i$$24 - 1;
    for (;v1353;) {
      purgeElement(descendants$$3[i$$24]);
      v1353 = i$$24;
      i$$24 = i$$24 - 1;
    }
    return null;
  }
  function recursivelyCollect(element$$21, property$$6, maximumLength) {
    element$$21 = $$$1(element$$21);
    maximumLength = maximumLength || -1;
    var elements$$3 = [];
    var v1357 = element$$21 = element$$21[property$$6];
    for (;v1357;) {
      if (element$$21.nodeType === Node.ELEMENT_NODE) {
        JAM.call(elements$$3.push, elements$$3, [JAM.call(Element$$1.extend, Element$$1, [element$$21])], JAM.policy.p1);
      }
      if (elements$$3.length === maximumLength) {
        break;
      }
      v1357 = element$$21 = element$$21[property$$6];
    }
    return elements$$3;
  }
  function ancestors(element$$22) {
    return recursivelyCollect(element$$22, "parentNode");
  }
  function descendants(element$$23) {
    return JAM.call(Element$$1.select, Element$$1, [element$$23, "*"], JAM.policy.p1);
  }
  function firstDescendant(element$$24) {
    element$$24 = $$$1(element$$24).firstChild;
    var v2644 = element$$24;
    if (v2644) {
      v2644 = element$$24.nodeType !== Node.ELEMENT_NODE;
    }
    var v1359 = v2644;
    for (;v1359;) {
      element$$24 = element$$24.nextSibling;
      var v2645 = element$$24;
      if (v2645) {
        v2645 = element$$24.nodeType !== Node.ELEMENT_NODE;
      }
      v1359 = v2645;
    }
    return $$$1(element$$24);
  }
  function immediateDescendants(element$$25) {
    var results$$11 = [];
    var child$$1 = $$$1(element$$25).firstChild;
    for (;child$$1;) {
      if (child$$1.nodeType === Node.ELEMENT_NODE) {
        JAM.call(results$$11.push, results$$11, [JAM.call(Element$$1.extend, Element$$1, [child$$1])], JAM.policy.p1);
      }
      child$$1 = child$$1.nextSibling;
    }
    return results$$11;
  }
  function previousSiblings(element$$26) {
    return recursivelyCollect(element$$26, "previousSibling");
  }
  function nextSiblings(element$$27) {
    return recursivelyCollect(element$$27, "nextSibling");
  }
  function siblings(element$$28) {
    element$$28 = $$$1(element$$28);
    var previous$$1 = previousSiblings(element$$28);
    var next$$1 = nextSiblings(element$$28);
    var v1363 = JAM.call(previous$$1.reverse, previous$$1, [], JAM.policy.p1);
    return JAM.call(v1363.concat, v1363, [next$$1], JAM.policy.p1);
  }
  function match$$7(element$$29, selector) {
    element$$29 = $$$1(element$$29);
    if (JAM.call(Object.isString, Object, [selector], JAM.policy.p1)) {
      var v1364 = Prototype.Selector;
      return JAM.call(v1364.match, v1364, [element$$29, selector], JAM.policy.p1);
    }
    return JAM.call(selector.match, selector, [element$$29], JAM.policy.p1);
  }
  function _recursivelyFind(element$$30, property$$7, expression, index$$55) {
    element$$30 = $$$1(element$$30);
    expression = expression || 0;
    index$$55 = index$$55 || 0;
    if (JAM.call(Object.isNumber, Object, [expression], JAM.policy.p1)) {
      index$$55 = expression;
      expression = null;
    }
    var v1370 = element$$30 = element$$30[property$$7];
    for (;v1370;) {
      if (element$$30.nodeType !== 1) {
        v1370 = element$$30 = element$$30[property$$7];
        continue;
      }
      var v2649 = expression;
      if (v2649) {
        var v3692 = Prototype.Selector;
        v2649 = !JAM.call(v3692.match, v3692, [element$$30, expression], JAM.policy.p1);
      }
      if (v2649) {
        v1370 = element$$30 = element$$30[property$$7];
        continue;
      }
      if ((index$$55 = index$$55 - 1) >= 0) {
        v1370 = element$$30 = element$$30[property$$7];
        continue;
      }
      return JAM.call(Element$$1.extend, Element$$1, [element$$30]);
    }
    return;
  }
  function up(element$$31, expression$$1, index$$56) {
    element$$31 = $$$1(element$$31);
    if (arguments.length === 1) {
      return $$$1(element$$31.parentNode);
    }
    return _recursivelyFind(element$$31, "parentNode", expression$$1, index$$56);
  }
  function down(element$$32, expression$$2, index$$57) {
    element$$32 = $$$1(element$$32);
    expression$$2 = expression$$2 || 0;
    index$$57 = index$$57 || 0;
    if (JAM.call(Object.isNumber, Object, [expression$$2], JAM.policy.p1)) {
      index$$57 = expression$$2;
      expression$$2 = "*";
    }
    var v2652 = Prototype.Selector;
    var node$$8 = JAM.call(v2652.select, v2652, [expression$$2, element$$32], JAM.policy.p1)[index$$57];
    return JAM.call(Element$$1.extend, Element$$1, [node$$8]);
  }
  function previous(element$$33, expression$$3, index$$58) {
    return _recursivelyFind(element$$33, "previousSibling", expression$$3, index$$58);
  }
  function next(element$$34, expression$$4, index$$59) {
    return _recursivelyFind(element$$34, "nextSibling", expression$$4, index$$59);
  }
  function select(element$$35) {
    element$$35 = $$$1(element$$35);
    var v1375 = JAM.call(SLICE.call, SLICE, [arguments, 1], JAM.policy.p1);
    var expressions = JAM.call(v1375.join, v1375, [", "], JAM.policy.p1);
    var v1376 = Prototype.Selector;
    return JAM.call(v1376.select, v1376, [expressions, element$$35], JAM.policy.p1);
  }
  function adjacent(element$$36) {
    element$$36 = $$$1(element$$36);
    var v1377 = JAM.call(SLICE.call, SLICE, [arguments, 1], JAM.policy.p1);
    var expressions$$1 = JAM.call(v1377.join, v1377, [", "], JAM.policy.p1);
    var siblings$$1 = JAM.call(Element$$1.siblings, Element$$1, [element$$36], JAM.policy.p1);
    var results$$12 = [];
    var i$$25 = 0;
    var sibling;
    var v1379 = sibling = siblings$$1[i$$25];
    for (;v1379;) {
      var v2653 = Prototype.Selector;
      if (JAM.call(v2653.match, v2653, [sibling, expressions$$1], JAM.policy.p1)) {
        JAM.call(results$$12.push, results$$12, [sibling], JAM.policy.p1);
      }
      i$$25++;
      v1379 = sibling = siblings$$1[i$$25];
    }
    return results$$12;
  }
  function descendantOf_DOM(element$$37, ancestor$$1) {
    element$$37 = $$$1(element$$37);
    ancestor$$1 = $$$1(ancestor$$1);
    var v1381 = element$$37 = element$$37.parentNode;
    for (;v1381;) {
      if (element$$37 === ancestor$$1) {
        return true;
      }
      v1381 = element$$37 = element$$37.parentNode;
    }
    return false;
  }
  function descendantOf_contains(element$$38, ancestor$$2) {
    element$$38 = $$$1(element$$38);
    ancestor$$2 = $$$1(ancestor$$2);
    if (!ancestor$$2.contains) {
      return descendantOf_DOM(element$$38, ancestor$$2);
    }
    var v1383 = JAM.call(ancestor$$2.contains, ancestor$$2, [element$$38], JAM.policy.p1);
    if (v1383) {
      v1383 = ancestor$$2 !== element$$38;
    }
    return v1383;
  }
  function descendantOf_compareDocumentPosition(element$$39, ancestor$$3) {
    element$$39 = $$$1(element$$39);
    ancestor$$3 = $$$1(ancestor$$3);
    return(JAM.call(element$$39.compareDocumentPosition, element$$39, [ancestor$$3], JAM.policy.p1) & 8) === 8;
  }
  function identify(element$$40) {
    element$$40 = $$$1(element$$40);
    var id = JAM.call(Element$$1.readAttribute, Element$$1, [element$$40, "id"], JAM.policy.p1);
    if (id) {
      return id;
    }
    var v1386 = $$$1(id);
    do {
      var v1385 = idCounter;
      idCounter = idCounter + 1;
      id = "anonymous_element_" + v1385;
      v1386 = $$$1(id);
    } while (v1386);
    JAM.call(Element$$1.writeAttribute, Element$$1, [element$$40, "id", id], JAM.policy.p1);
    return id;
  }
  function readAttribute(element$$41, name$$33) {
    var v1387 = $$$1(element$$41);
    return JAM.call(v1387.getAttribute, v1387, [name$$33], JAM.policy.p1);
  }
  function readAttribute_IE(element$$42, name$$34) {
    element$$42 = $$$1(element$$42);
    var table = ATTRIBUTE_TRANSLATIONS.read;
    if (table.values[name$$34]) {
      var v1388 = table.values;
      return JAM.call(v1388[name$$34], v1388, [element$$42, name$$34], JAM.policy.p1);
    }
    if (table.names[name$$34]) {
      name$$34 = table.names[name$$34];
    }
    if (JAM.call(name$$34.include, name$$34, [":"], JAM.policy.p1)) {
      var v2658 = !element$$42.attributes;
      if (!v2658) {
        v2658 = !element$$42.attributes[name$$34];
      }
      if (v2658) {
        return null;
      }
      return element$$42.attributes[name$$34].value;
    }
    return JAM.call(element$$42.getAttribute, element$$42, [name$$34], JAM.policy.p1);
  }
  function readAttribute_Opera(element$$43, name$$35) {
    if (name$$35 === "title") {
      return element$$43.title;
    }
    return JAM.call(element$$43.getAttribute, element$$43, [name$$35], JAM.policy.p1);
  }
  function writeAttribute(element$$44, name$$36, value$$62) {
    element$$44 = $$$1(element$$44);
    var attributes$$3 = {};
    var table$$1 = ATTRIBUTE_TRANSLATIONS.write;
    if (typeof name$$36 === "object") {
      attributes$$3 = name$$36;
    } else {
      var v1396;
      if (JAM.call(Object.isUndefined, Object, [value$$62], JAM.policy.p1)) {
        v1396 = true;
      } else {
        v1396 = value$$62;
      }
      JAM.set(attributes$$3, name$$36, v1396, JAM.policy.p2);
    }
    var attr$$1;
    for (attr$$1 in attributes$$3) {
      var v1398 = table$$1.names[attr$$1];
      if (!v1398) {
        v1398 = attr$$1;
      }
      name$$36 = v1398;
      value$$62 = attributes$$3[attr$$1];
      if (table$$1.values[attr$$1]) {
        var v1399 = table$$1.values;
        name$$36 = JAM.call(v1399[attr$$1], v1399, [element$$44, value$$62], JAM.policy.p1);
      }
      var v2665 = value$$62 === false;
      if (!v2665) {
        v2665 = value$$62 === null;
      }
      if (v2665) {
        JAM.call(element$$44.removeAttribute, element$$44, [name$$36], JAM.policy.p1);
      } else {
        if (value$$62 === true) {
          JAM.call(element$$44.setAttribute, element$$44, [name$$36, name$$36], JAM.policy.p1);
        } else {
          JAM.call(element$$44.setAttribute, element$$44, [name$$36, value$$62], JAM.policy.p1);
        }
      }
    }
    return element$$44;
  }
  function hasAttribute(element$$45, attribute$$1) {
    var v1403 = ATTRIBUTE_TRANSLATIONS.has[attribute$$1];
    if (!v1403) {
      v1403 = attribute$$1;
    }
    attribute$$1 = v1403;
    var v1404 = $$$1(element$$45);
    var node$$9 = JAM.call(v1404.getAttributeNode, v1404, [attribute$$1], JAM.policy.p1);
    var v3367 = node$$9;
    if (v3367) {
      v3367 = node$$9.specified;
    }
    return!!v3367;
  }
  function classNames$$1(element$$46) {
    return JAM.new(Element$$1.ClassNames, [element$$46]);
  }
  function getRegExpForClassName(className) {
    if (regExpCache[className]) {
      return regExpCache[className];
    }
    var re = new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    JAM.set(regExpCache, className, re, JAM.policy.p2);
    return re;
  }
  function hasClassName(element$$47, className$$1) {
    if (!(element$$47 = $$$1(element$$47))) {
      return;
    }
    var elementClassName = element$$47.className;
    if (elementClassName.length === 0) {
      return false;
    }
    if (elementClassName === className$$1) {
      return true;
    }
    var v1412 = getRegExpForClassName(className$$1);
    return JAM.call(v1412.test, v1412, [elementClassName], JAM.policy.p1);
  }
  function addClassName(element$$48, className$$2) {
    if (!(element$$48 = $$$1(element$$48))) {
      return;
    }
    if (!hasClassName(element$$48, className$$2)) {
      var v2674 = element$$48.className;
      var v3694;
      if (element$$48.className) {
        v3694 = " ";
      } else {
        v3694 = "";
      }
      element$$48.className = v2674 + (v3694 + className$$2);
    }
    return element$$48;
  }
  function removeClassName(element$$49, className$$3) {
    if (!(element$$49 = $$$1(element$$49))) {
      return;
    }
    var v2677 = element$$49.className;
    var v1416 = JAM.call(v2677.replace, v2677, [getRegExpForClassName(className$$3), " "], JAM.policy.p1);
    var v3955 = JAM.call(v1416.strip, v1416, [], JAM.policy.p1);
    element$$49.className = v3955;
    return element$$49;
  }
  function toggleClassName(element$$50, className$$4, bool$$1) {
    if (!(element$$50 = $$$1(element$$50))) {
      return;
    }
    if (JAM.call(Object.isUndefined, Object, [bool$$1], JAM.policy.p1)) {
      bool$$1 = !hasClassName(element$$50, className$$4);
    }
    var v2680;
    if (bool$$1) {
      v2680 = "addClassName";
    } else {
      v2680 = "removeClassName";
    }
    var method$$7 = Element$$1[v2680];
    return JAM.call(method$$7, null, [element$$50, className$$4], JAM.policy.p1);
  }
  function _getAttr(element$$51, attribute$$2) {
    return JAM.call(element$$51.getAttribute, element$$51, [attribute$$2], JAM.policy.p1);
  }
  function _getAttr2(element$$52, attribute$$3) {
    return JAM.call(element$$52.getAttribute, element$$52, [attribute$$3, 2], JAM.policy.p1);
  }
  function _getAttrNode(element$$53, attribute$$4) {
    var node$$10 = JAM.call(element$$53.getAttributeNode, element$$53, [attribute$$4], JAM.policy.p1);
    var v1421;
    if (node$$10) {
      v1421 = node$$10.value;
    } else {
      v1421 = "";
    }
    return v1421;
  }
  function _getFlag(element$$54, attribute$$5) {
    var v1422;
    var v3369 = $$$1(element$$54);
    if (JAM.call(v3369.hasAttribute, v3369, [attribute$$5], JAM.policy.p1)) {
      v1422 = attribute$$5;
    } else {
      v1422 = null;
    }
    return v1422;
  }
  function setStyle(element$$55, styles) {
    element$$55 = $$$1(element$$55);
    var elementStyle = element$$55.style;
    var match$$8;
    if (JAM.call(Object.isString, Object, [styles], JAM.policy.p1)) {
      elementStyle.cssText = elementStyle.cssText + (";" + styles);
      if (JAM.call(styles.include, styles, ["opacity"], JAM.policy.p1)) {
        var opacity = JAM.call(styles.match, styles, [/opacity:\s*(\d?\.?\d*)/], JAM.policy.p1)[1];
        JAM.call(Element$$1.setOpacity, Element$$1, [element$$55, opacity]);
      }
      return element$$55;
    }
    var property$$8;
    for (property$$8 in styles) {
      if (property$$8 === "opacity") {
        JAM.call(Element$$1.setOpacity, Element$$1, [element$$55, styles[property$$8]]);
      } else {
        var value$$63 = styles[property$$8];
        var v2684 = property$$8 === "float";
        if (!v2684) {
          v2684 = property$$8 === "cssFloat";
        }
        if (v2684) {
          var v1427;
          if (JAM.call(Object.isUndefined, Object, [elementStyle.styleFloat], JAM.policy.p1)) {
            v1427 = "cssFloat";
          } else {
            v1427 = "styleFloat";
          }
          property$$8 = v1427;
        }
        JAM.set(elementStyle, property$$8, value$$63, JAM.policy.p2);
      }
    }
    return element$$55;
  }
  function getStyle(element$$56, style$$2) {
    element$$56 = $$$1(element$$56);
    JSCompiler_inline_label_normalizeStyleName_18: {
      var v2686 = style$$2 === "float";
      if (!v2686) {
        v2686 = style$$2 === "styleFloat";
      }
      if (v2686) {
        style$$2 = "cssFloat";
        break JSCompiler_inline_label_normalizeStyleName_18;
      }
      style$$2 = JAM.call(style$$2.camelize, style$$2, [], JAM.policy.p1);
    }
    var value$$64 = element$$56.style[style$$2];
    var v2687 = !value$$64;
    if (!v2687) {
      v2687 = value$$64 === "auto";
    }
    if (v2687) {
      var v1432 = document.defaultView;
      var css = JAM.call(v1432.getComputedStyle, v1432, [element$$56, null], JAM.policy.p1);
      var v1433;
      if (css) {
        v1433 = css[style$$2];
      } else {
        v1433 = null;
      }
      value$$64 = v1433;
    }
    if (style$$2 === "opacity") {
      var v1435;
      if (value$$64) {
        v1435 = parseFloat(value$$64);
      } else {
        v1435 = 1;
      }
      return v1435;
    }
    var v1437;
    if (value$$64 === "auto") {
      v1437 = null;
    } else {
      v1437 = value$$64;
    }
    return v1437;
  }
  function getStyle_IE(element$$58, style$$4) {
    element$$58 = $$$1(element$$58);
    JSCompiler_inline_label_normalizeStyleName_IE_20: {
      var v2689 = style$$4 === "float";
      if (!v2689) {
        v2689 = style$$4 === "cssFloat";
      }
      if (v2689) {
        style$$4 = "styleFloat";
        break JSCompiler_inline_label_normalizeStyleName_IE_20;
      }
      style$$4 = JAM.call(style$$4.camelize, style$$4, [], JAM.policy.p1);
    }
    var value$$65 = element$$58.style[style$$4];
    var v2690 = !value$$65;
    if (v2690) {
      v2690 = element$$58.currentStyle;
    }
    if (v2690) {
      value$$65 = element$$58.currentStyle[style$$4];
    }
    var v2691 = style$$4 === "opacity";
    if (v2691) {
      v2691 = !STANDARD_CSS_OPACITY_SUPPORTED;
    }
    if (v2691) {
      return getOpacity_IE(element$$58);
    }
    if (value$$65 === "auto") {
      var v3375 = style$$4 === "width";
      if (!v3375) {
        v3375 = style$$4 === "height";
      }
      var v2692 = v3375;
      if (v2692) {
        v2692 = JAM.call(Element$$1.visible, Element$$1, [element$$58], JAM.policy.p1);
      }
      if (v2692) {
        return JAM.call(Element$$1.measure, Element$$1, [element$$58, style$$4], JAM.policy.p1) + "px";
      }
      return null;
    }
    return value$$65;
  }
  function setOpacity(element$$60, value$$66) {
    element$$60 = $$$1(element$$60);
    var v2693 = value$$66 == 1;
    if (!v2693) {
      v2693 = value$$66 === "";
    }
    if (v2693) {
      value$$66 = "";
    } else {
      if (value$$66 < 1E-5) {
        value$$66 = 0;
      }
    }
    element$$60.style.opacity = value$$66;
    return element$$60;
  }
  function setOpacity_IE(element$$61, value$$67) {
    if (STANDARD_CSS_OPACITY_SUPPORTED) {
      return setOpacity(element$$61, value$$67);
    }
    var element$$inline_21 = $$$1(element$$61);
    if (!element$$inline_21.currentStyle.hasLayout) {
      element$$inline_21.style.zoom = 1;
    }
    element$$61 = element$$inline_21;
    var filter$$4 = JAM.call(Element$$1.getStyle, Element$$1, [element$$61, "filter"], JAM.policy.p1);
    var style$$5 = element$$61.style;
    var v2695 = value$$67 == 1;
    if (!v2695) {
      v2695 = value$$67 === "";
    }
    if (v2695) {
      var v1451 = filter$$4 || "";
      filter$$4 = JAM.call(v1451.replace, v1451, [/alpha\([^\)]*\)/gi, ""], JAM.policy.p1);
      if (filter$$4) {
        style$$5.filter = filter$$4;
      } else {
        JAM.call(style$$5.removeAttribute, style$$5, ["filter"], JAM.policy.p1);
      }
      return element$$61;
    }
    if (value$$67 < 1E-5) {
      value$$67 = 0;
    }
    var v3696 = filter$$4 || "";
    style$$5.filter = JAM.call(v3696.replace, v3696, [/alpha\([^\)]*\)/gi, ""], JAM.policy.p1) + "alpha(opacity=" + value$$67 * 100 + ")";
    return element$$61;
  }
  function getOpacity(element$$62) {
    return JAM.call(Element$$1.getStyle, Element$$1, [element$$62, "opacity"], JAM.policy.p1);
  }
  function getOpacity_IE(element$$63) {
    if (STANDARD_CSS_OPACITY_SUPPORTED) {
      return getOpacity(element$$63);
    }
    var filter$$5 = JAM.call(Element$$1.getStyle, Element$$1, [element$$63, "filter"], JAM.policy.p1);
    if (filter$$5.length === 0) {
      return 1;
    }
    var v1456 = filter$$5 || "";
    var match$$9 = JAM.call(v1456.match, v1456, [/alpha\(opacity=(.*)\)/], JAM.policy.p1);
    if (match$$9[1]) {
      return parseFloat(match$$9[1]) / 100;
    }
    return 1;
  }
  function getUniqueElementID(element$$64) {
    if (element$$64 === window) {
      return 0;
    }
    if (typeof element$$64._prototypeUID === "undefined") {
      element$$64._prototypeUID = Element$$1.Storage.UID;
      Element$$1.Storage.UID = Element$$1.Storage.UID + 1;
    }
    return element$$64._prototypeUID;
  }
  function getUniqueElementID_IE(element$$65) {
    if (element$$65 === window) {
      return 0;
    }
    if (element$$65 == document) {
      return 1;
    }
    return element$$65.uniqueID;
  }
  function getStorage(element$$66) {
    if (!(element$$66 = $$$1(element$$66))) {
      return;
    }
    var uid$$2 = JAM.call(getUniqueElementID, null, [element$$66], JAM.policy.p1);
    if (!Element$$1.Storage[uid$$2]) {
      var v1464 = Element$$1.Storage;
      var v3956 = $H();
      JAM.set(v1464, uid$$2, v3956, JAM.policy.p2);
    }
    return Element$$1.Storage[uid$$2];
  }
  function store(element$$67, key$$22, value$$68) {
    if (!(element$$67 = $$$1(element$$67))) {
      return;
    }
    var storage = getStorage(element$$67);
    if (arguments.length === 2) {
      JAM.call(storage.update, storage, [key$$22], JAM.policy.p1);
    } else {
      JAM.call(storage.set, storage, [key$$22, value$$68], JAM.policy.p1);
    }
    return element$$67;
  }
  function retrieve(element$$68, key$$23, defaultValue) {
    if (!(element$$68 = $$$1(element$$68))) {
      return;
    }
    var storage$$1 = getStorage(element$$68);
    var value$$69 = JAM.call(storage$$1.get, storage$$1, [key$$23], JAM.policy.p1);
    if (JAM.call(Object.isUndefined, Object, [value$$69], JAM.policy.p1)) {
      JAM.call(storage$$1.set, storage$$1, [key$$23, defaultValue], JAM.policy.p1);
      value$$69 = defaultValue;
    }
    return value$$69;
  }
  function checkElementPrototypeDeficiency(tagName$$7) {
    if (typeof window.Element === "undefined") {
      return false;
    }
    var proto$$2 = window.Element.prototype;
    if (proto$$2) {
      var v2709 = JAM.call(Math.random, Math, [], JAM.policy.p1) + "";
      var id$$1 = "_" + JAM.call(v2709.slice, v2709, [2], JAM.policy.p1);
      var el = JAM.call(document.createElement, document, [tagName$$7], JAM.policy.p1);
      JAM.set(proto$$2, id$$1, "x", JAM.policy.p2);
      var isBuggy = el[id$$1] !== "x";
      delete proto$$2[id$$1];
      el = null;
      return isBuggy;
    }
    return false;
  }
  function extendElementWith(element$$69, methods$$2) {
    var property$$9;
    for (property$$9 in methods$$2) {
      var value$$70 = methods$$2[property$$9];
      var v2710 = JAM.call(Object.isFunction, Object, [value$$70], JAM.policy.p1);
      if (v2710) {
        v2710 = !(property$$9 in element$$69);
      }
      if (v2710) {
        var v3957 = JAM.call(value$$70.methodize, value$$70, [], JAM.policy.p1);
        JAM.set(element$$69, property$$9, v3957, JAM.policy.p2);
      }
    }
    return;
  }
  function elementIsExtended(element$$70) {
    var uid$$3 = JAM.call(getUniqueElementID, null, [element$$70], JAM.policy.p1);
    return uid$$3 in EXTENDED;
  }
  function extend$$1(element$$71) {
    var v2711 = !element$$71;
    if (!v2711) {
      v2711 = elementIsExtended(element$$71);
    }
    if (v2711) {
      return element$$71;
    }
    var v2712 = element$$71.nodeType !== Node.ELEMENT_NODE;
    if (!v2712) {
      v2712 = element$$71 == window;
    }
    if (v2712) {
      return element$$71;
    }
    var methods$$3 = JAM.call(Object.clone, Object, [Methods], JAM.policy.p1);
    var v1478 = element$$71.tagName;
    var tagName$$8 = JAM.call(v1478.toUpperCase, v1478, [], JAM.policy.p1);
    if (ByTag[tagName$$8]) {
      JAM.call(Object.extend, Object, [methods$$3, ByTag[tagName$$8]], JAM.policy.p1);
    }
    extendElementWith(element$$71, methods$$3);
    var v1481 = JAM.call(getUniqueElementID, null, [element$$71], JAM.policy.p1);
    introspect(JAM.policy.p2) {
      EXTENDED[v1481] = true;
    }
    return element$$71;
  }
  function extend_IE8(element$$72) {
    var v2713 = !element$$72;
    if (!v2713) {
      v2713 = elementIsExtended(element$$72);
    }
    if (v2713) {
      return element$$72;
    }
    var t$$1 = element$$72.tagName;
    var v2714 = t$$1;
    if (v2714) {
      v2714 = JAM.call(/^(?:object|applet|embed)$/i.test, /^(?:object|applet|embed)$/i, [t$$1], JAM.policy.p1);
    }
    if (v2714) {
      extendElementWith(element$$72, Element$$1.Methods);
      extendElementWith(element$$72, Element$$1.Methods.Simulated);
      extendElementWith(element$$72, Element$$1.Methods.ByTag[JAM.call(t$$1.toUpperCase, t$$1, [], JAM.policy.p1)]);
    }
    return element$$72;
  }
  function addMethodsToTagName(tagName$$9, methods$$4) {
    tagName$$9 = JAM.call(tagName$$9.toUpperCase, tagName$$9, [], JAM.policy.p1);
    if (!ByTag[tagName$$9]) {
      JAM.set(ByTag, tagName$$9, {}, JAM.policy.p2);
    }
    JAM.call(Object.extend, Object, [ByTag[tagName$$9], methods$$4], JAM.policy.p1);
    return;
  }
  function mergeMethods(destination$$1, methods$$5, onlyIfAbsent) {
    if (JAM.call(Object.isUndefined, Object, [onlyIfAbsent], JAM.policy.p1)) {
      onlyIfAbsent = false;
    }
    var property$$10;
    for (property$$10 in methods$$5) {
      var value$$71 = methods$$5[property$$10];
      if (!JAM.call(Object.isFunction, Object, [value$$71], JAM.policy.p1)) {
        continue;
      }
      var v2720 = !onlyIfAbsent;
      if (!v2720) {
        v2720 = !(property$$10 in destination$$1);
      }
      if (v2720) {
        var v3958 = JAM.call(value$$71.methodize, value$$71, [], JAM.policy.p1);
        JAM.set(destination$$1, property$$10, v3958, JAM.policy.p2);
      }
    }
    return;
  }
  function findDOMClass(tagName$$10) {
    var klass$$1;
    var trans = {"OPTGROUP":"OptGroup", "TEXTAREA":"TextArea", "P":"Paragraph", "FIELDSET":"FieldSet", "UL":"UList", "OL":"OList", "DL":"DList", "DIR":"Directory", "H1":"Heading", "H2":"Heading", "H3":"Heading", "H4":"Heading", "H5":"Heading", "H6":"Heading", "Q":"Quote", "INS":"Mod", "DEL":"Mod", "A":"Anchor", "IMG":"Image", "CAPTION":"TableCaption", "COL":"TableCol", "COLGROUP":"TableCol", "THEAD":"TableSection", "TFOOT":"TableSection", "TBODY":"TableSection", "TR":"TableRow", "TH":"TableCell", 
    "TD":"TableCell", "FRAMESET":"FrameSet", "IFRAME":"IFrame"};
    if (trans[tagName$$10]) {
      klass$$1 = "HTML" + trans[tagName$$10] + "Element";
    }
    if (window[klass$$1]) {
      return window[klass$$1];
    }
    klass$$1 = "HTML" + tagName$$10 + "Element";
    if (window[klass$$1]) {
      return window[klass$$1];
    }
    klass$$1 = "HTML" + JAM.call(tagName$$10.capitalize, tagName$$10, [], JAM.policy.p1) + "Element";
    if (window[klass$$1]) {
      return window[klass$$1];
    }
    var element$$73 = JAM.call(document.createElement, document, [tagName$$10], JAM.policy.p1);
    var v1499 = element$$73["__proto__"];
    if (!v1499) {
      v1499 = element$$73.constructor.prototype;
    }
    var proto$$3 = v1499;
    element$$73 = null;
    return proto$$3;
  }
  function addMethods$$1(methods$$6) {
    if (arguments.length === 0) {
      JAM.call(Object.extend, Object, [Form, Form.Methods], JAM.policy.p1);
      JAM.call(Object.extend, Object, [Form.Element, Form.Element.Methods], JAM.policy.p1);
      JAM.call(Object.extend, Object, [Element$$1.Methods.ByTag, {"FORM":JAM.call(Object.clone, Object, [Form.Methods], JAM.policy.p1), "INPUT":JAM.call(Object.clone, Object, [Form.Element.Methods], JAM.policy.p1), "SELECT":JAM.call(Object.clone, Object, [Form.Element.Methods], JAM.policy.p1), "TEXTAREA":JAM.call(Object.clone, Object, [Form.Element.Methods], JAM.policy.p1), "BUTTON":JAM.call(Object.clone, Object, [Form.Element.Methods], JAM.policy.p1)}], JAM.policy.p1);
    }
    if (arguments.length === 2) {
      var tagName$$11 = methods$$6;
      methods$$6 = arguments[1];
    }
    if (!tagName$$11) {
      JAM.call(Object.extend, Object, [Element$$1.Methods, methods$$6 || {}], JAM.policy.p1);
    } else {
      if (JAM.call(Object.isArray, Object, [tagName$$11], JAM.policy.p1)) {
        var i$$26 = 0;
        var tag;
        var v1509 = tag = tagName$$11[i$$26];
        for (;v1509;) {
          addMethodsToTagName(tag, methods$$6);
          i$$26++;
          v1509 = tag = tagName$$11[i$$26];
        }
      } else {
        addMethodsToTagName(tagName$$11, methods$$6);
      }
    }
    var v1512;
    if (window.HTMLElement) {
      v1512 = HTMLElement.prototype;
    } else {
      v1512 = Element$$1.prototype;
    }
    var ELEMENT_PROTOTYPE = v1512;
    if (F.ElementExtensions) {
      mergeMethods(ELEMENT_PROTOTYPE, Element$$1.Methods);
      mergeMethods(ELEMENT_PROTOTYPE, Element$$1.Methods.Simulated, true);
    }
    if (F.SpecificElementExtensions) {
      for (tag in Element$$1.Methods.ByTag) {
        var klass$$2 = findDOMClass(tag);
        if (JAM.call(Object.isUndefined, Object, [klass$$2], JAM.policy.p1)) {
          continue;
        }
        mergeMethods(klass$$2.prototype, ByTag[tag]);
      }
    }
    JAM.call(Object.extend, Object, [Element$$1, Element$$1.Methods], JAM.policy.p1);
    JAM.call(Object.extend, Object, [Element$$1, Element$$1.Methods.Simulated], JAM.policy.p1);
    delete Element$$1.ByTag;
    delete Element$$1.Simulated;
    var v1523 = Element$$1.extend;
    JAM.call(v1523.refresh, v1523, [], JAM.policy.p1);
    ELEMENT_CACHE = {};
    return;
  }
  var UNDEFINED;
  var SLICE = Array.prototype.slice;
  var DIV = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
  GLOBAL.$ = $$$1;
  if (!GLOBAL.Node) {
    GLOBAL.Node = {};
  }
  if (!GLOBAL.Node.ELEMENT_NODE) {
    JAM.call(Object.extend, Object, [GLOBAL.Node, {ELEMENT_NODE:1, ATTRIBUTE_NODE:2, TEXT_NODE:3, CDATA_SECTION_NODE:4, ENTITY_REFERENCE_NODE:5, ENTITY_NODE:6, PROCESSING_INSTRUCTION_NODE:7, COMMENT_NODE:8, DOCUMENT_NODE:9, DOCUMENT_TYPE_NODE:10, DOCUMENT_FRAGMENT_NODE:11, NOTATION_NODE:12}], JAM.policy.p1);
  }
  var ELEMENT_CACHE = {};
  var HAS_EXTENDED_CREATE_ELEMENT_SYNTAX = v117();
  var oldElement = GLOBAL.Element;
  GLOBAL.Element = Element$$1;
  JAM.call(Object.extend, Object, [GLOBAL.Element, oldElement || {}], JAM.policy.p1);
  if (oldElement) {
    GLOBAL.Element.prototype = oldElement.prototype;
  }
  Element$$1.Methods = {ByTag:{}, Simulated:{}};
  var methods$$1 = {};
  var INSPECT_ATTRIBUTES = {id:"id", className:"class"};
  methods$$1.inspect = inspect$$5;
  JAM.call(Object.extend, Object, [methods$$1, {visible:visible, toggle:toggle, hide:hide, show:show}], JAM.policy.p1);
  var SELECT_ELEMENT_INNERHTML_BUGGY = v118();
  var TABLE_ELEMENT_INNERHTML_BUGGY = v119();
  var LINK_ELEMENT_INNERHTML_BUGGY = v120();
  var v1533 = SELECT_ELEMENT_INNERHTML_BUGGY || TABLE_ELEMENT_INNERHTML_BUGGY;
  if (!v1533) {
    v1533 = LINK_ELEMENT_INNERHTML_BUGGY;
  }
  var ANY_INNERHTML_BUGGY = v1533;
  var SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING = v121();
  var INSERTION_TRANSLATIONS = {before:v122, top:v123, bottom:v124, after:v125, tags:{TABLE:["<table>", "</table>", 1], TBODY:["<table><tbody>", "</tbody></table>", 2], TR:["<table><tbody><tr>", "</tr></tbody></table>", 3], TD:["<table><tbody><tr><td>", "</td></tr></tbody></table>", 4], SELECT:["<select>", "</select>", 1]}};
  var tags = INSERTION_TRANSLATIONS.tags;
  JAM.call(Object.extend, Object, [tags, {THEAD:tags.TBODY, TFOOT:tags.TBODY, TH:tags.TD}], JAM.policy.p1);
  if ("outerHTML" in document.documentElement) {
    replace = replace_IE;
  }
  if (HAS_UNIQUE_ID_PROPERTY) {
    purgeCollection = purgeCollection_IE;
  }
  JAM.call(Object.extend, Object, [methods$$1, {remove:remove, update:update$$2, replace:replace, insert:insert, wrap:wrap$$1, cleanWhitespace:cleanWhitespace, empty:empty$$1, clone:clone$$3, purge:purge}], JAM.policy.p1);
  var descendantOf;
  if (DIV.compareDocumentPosition) {
    descendantOf = descendantOf_compareDocumentPosition;
  } else {
    if (DIV.contains) {
      descendantOf = descendantOf_contains;
    } else {
      descendantOf = descendantOf_DOM;
    }
  }
  JAM.call(Object.extend, Object, [methods$$1, {recursivelyCollect:recursivelyCollect, ancestors:ancestors, descendants:descendants, firstDescendant:firstDescendant, immediateDescendants:immediateDescendants, previousSiblings:previousSiblings, nextSiblings:nextSiblings, siblings:siblings, match:match$$7, up:up, down:down, previous:previous, next:next, select:select, adjacent:adjacent, descendantOf:descendantOf, getElementsBySelector:select, childElements:immediateDescendants}], JAM.policy.p1);
  var idCounter = 1;
  var PROBLEMATIC_ATTRIBUTE_READING = v126();
  if (PROBLEMATIC_ATTRIBUTE_READING) {
    readAttribute = readAttribute_IE;
  } else {
    if (Prototype.Browser.Opera) {
      readAttribute = readAttribute_Opera;
    }
  }
  GLOBAL.Element.Methods.Simulated.hasAttribute = hasAttribute;
  var regExpCache = {};
  var ATTRIBUTE_TRANSLATIONS = {};
  var classProp = "className";
  var forProp = "for";
  JAM.call(DIV.setAttribute, DIV, [classProp, "x"], JAM.policy.p1);
  if (DIV.className !== "x") {
    JAM.call(DIV.setAttribute, DIV, ["class", "x"], JAM.policy.p1);
    if (DIV.className === "x") {
      classProp = "class";
    }
  }
  var LABEL = JAM.call(document.createElement, document, ["label"], JAM.policy.p1);
  JAM.call(LABEL.setAttribute, LABEL, [forProp, "x"], JAM.policy.p1);
  if (LABEL.htmlFor !== "x") {
    JAM.call(LABEL.setAttribute, LABEL, ["htmlFor", "x"], JAM.policy.p1);
    if (LABEL.htmlFor === "x") {
      forProp = "htmlFor";
    }
  }
  LABEL = null;
  JAM.set(DIV, "onclick", Prototype.emptyFunction);
  var onclickValue = JAM.call(DIV.getAttribute, DIV, ["onclick"], JAM.policy.p1);
  var _getEv;
  var v3401 = String(onclickValue);
  if (JAM.call(v3401.indexOf, v3401, ["{"], JAM.policy.p1) > -1) {
    _getEv = v127;
  } else {
    if (onclickValue === "") {
      _getEv = v128;
    }
  }
  ATTRIBUTE_TRANSLATIONS.read = {names:{"class":classProp, "className":classProp, "for":forProp, "htmlFor":forProp}, values:{style:v129, title:v130}};
  ATTRIBUTE_TRANSLATIONS.write = {names:{className:"class", htmlFor:"for", cellpadding:"cellPadding", cellspacing:"cellSpacing"}, values:{checked:v131, style:v132}};
  ATTRIBUTE_TRANSLATIONS.has = {names:{}};
  JAM.call(Object.extend, Object, [ATTRIBUTE_TRANSLATIONS.write.names, ATTRIBUTE_TRANSLATIONS.read.names], JAM.policy.p1);
  var CAMEL_CASED_ATTRIBUTE_NAMES = $w("colSpan rowSpan vAlign dateTime " + "accessKey tabIndex encType maxLength readOnly longDesc frameBorder");
  var i$$16 = 0;
  var attr;
  var v1560 = attr = CAMEL_CASED_ATTRIBUTE_NAMES[i$$16];
  for (;v1560;) {
    JAM.set(ATTRIBUTE_TRANSLATIONS.write.names, JAM.call(attr.toLowerCase, attr, [], JAM.policy.p1), attr, JAM.policy.p2);
    JAM.set(ATTRIBUTE_TRANSLATIONS.has.names, JAM.call(attr.toLowerCase, attr, [], JAM.policy.p1), attr, JAM.policy.p2);
    i$$16++;
    v1560 = attr = CAMEL_CASED_ATTRIBUTE_NAMES[i$$16];
  }
  JAM.call(Object.extend, Object, [ATTRIBUTE_TRANSLATIONS.read.values, {href:_getAttr2, src:_getAttr2, type:_getAttr, action:_getAttrNode, disabled:_getFlag, checked:_getFlag, readonly:_getFlag, multiple:_getFlag, onload:_getEv, onunload:_getEv, onclick:_getEv, ondblclick:_getEv, onmousedown:_getEv, onmouseup:_getEv, onmouseover:_getEv, onmousemove:_getEv, onmouseout:_getEv, onfocus:_getEv, onblur:_getEv, onkeypress:_getEv, onkeydown:_getEv, onkeyup:_getEv, onsubmit:_getEv, onreset:_getEv, onselect:_getEv, 
  onchange:_getEv}], JAM.policy.p1);
  JAM.call(Object.extend, Object, [methods$$1, {identify:identify, readAttribute:readAttribute, writeAttribute:writeAttribute, classNames:classNames$$1, hasClassName:hasClassName, addClassName:addClassName, removeClassName:removeClassName, toggleClassName:toggleClassName}], JAM.policy.p1);
  var STANDARD_CSS_OPACITY_SUPPORTED;
  DIV.style.cssText = "opacity:.55";
  STANDARD_CSS_OPACITY_SUPPORTED = JAM.call(/^0.55/.test, /^0.55/, [DIV.style.opacity], JAM.policy.p1);
  JAM.call(Object.extend, Object, [methods$$1, {setStyle:setStyle, getStyle:getStyle, setOpacity:setOpacity, getOpacity:getOpacity}], JAM.policy.p1);
  if ("styleFloat" in DIV.style) {
    methods$$1.getStyle = getStyle_IE;
    methods$$1.setOpacity = setOpacity_IE;
    methods$$1.getOpacity = getOpacity_IE;
  }
  var UID = 0;
  GLOBAL.Element.Storage = {UID:1};
  var HAS_UNIQUE_ID_PROPERTY = "uniqueID" in DIV;
  if (HAS_UNIQUE_ID_PROPERTY) {
    getUniqueElementID = getUniqueElementID_IE;
  }
  JAM.call(Object.extend, Object, [methods$$1, {getStorage:getStorage, store:store, retrieve:retrieve}], JAM.policy.p1);
  var Methods = {};
  var ByTag = Element$$1.Methods.ByTag;
  var F = Prototype.BrowserFeatures;
  var v2764 = !F.ElementExtensions;
  if (v2764) {
    v2764 = "__proto__" in DIV;
  }
  if (v2764) {
    GLOBAL.HTMLElement = {};
    GLOBAL.HTMLElement.prototype = DIV["__proto__"];
    F.ElementExtensions = true;
  }
  var HTMLOBJECTELEMENT_PROTOTYPE_BUGGY = checkElementPrototypeDeficiency("object");
  var EXTENDED = {};
  if (F.SpecificElementExtensions) {
    var v1573;
    if (HTMLOBJECTELEMENT_PROTOTYPE_BUGGY) {
      v1573 = extend_IE8;
    } else {
      v1573 = Prototype.K;
    }
    extend$$1 = v1573;
  }
  JAM.call(Object.extend, Object, [GLOBAL.Element, {extend:extend$$1, addMethods:addMethods$$1}], JAM.policy.p1);
  if (extend$$1 === Prototype.K) {
    GLOBAL.Element.extend.refresh = Prototype.emptyFunction;
  } else {
    GLOBAL.Element.extend.refresh = v133;
  }
  JAM.call(Element$$1.addMethods, Element$$1, [methods$$1], JAM.policy.p1);
  return;
}
function v114() {
  var v3959 = JAM.new(Ajax.Updater, [this.container, this.url, this.options]);
  this.updater = v3959;
  return;
}
function v113(response$$3) {
  if (this.options.decay) {
    var v1584;
    if (response$$3.responseText == this.lastText) {
      v1584 = this.decay * this.options.decay;
    } else {
      v1584 = 1;
    }
    this.decay = v1584;
    this.lastText = response$$3.responseText;
  }
  var v2772 = this.onTimerEvent;
  var v1586 = JAM.call(v2772.bind, v2772, [this], JAM.policy.p1);
  var v3960 = JAM.call(v1586.delay, v1586, [this.decay * this.frequency], JAM.policy.p1);
  this.timer = v3960;
  return;
}
function v112() {
  this.updater.options.onComplete = undefined;
  clearTimeout(this.timer);
  var v2776 = this.onComplete;
  if (!v2776) {
    v2776 = Prototype.emptyFunction;
  }
  var v1590 = v2776;
  JAM.call(v1590.apply, v1590, [this, arguments], JAM.policy.p1);
  return;
}
function v111() {
  var v1591 = this.options;
  var v2777 = this.updateComplete;
  var v3961 = JAM.call(v2777.bind, v2777, [this], JAM.policy.p1);
  v1591.onComplete = v3961;
  JAM.call(this.onTimerEvent, this, [], JAM.policy.p1);
  return;
}
function v110($super$$2, container$$1, url$$5, options$$6) {
  JAM.call($super$$2, null, [options$$6], JAM.policy.p1);
  this.onComplete = this.options.onComplete;
  var v1593 = this.options.frequency;
  if (!v1593) {
    v1593 = 2;
  }
  this.frequency = v1593;
  var v1594 = this.options.decay;
  if (!v1594) {
    v1594 = 1;
  }
  this.decay = v1594;
  this.updater = {};
  this.container = container$$1;
  this.url = url$$5;
  JAM.call(this.start, this, [], JAM.policy.p1);
  return;
}
function v109(responseText) {
  var v1595 = this.container;
  var v2782;
  if (JAM.call(this.success, this, [], JAM.policy.p1)) {
    v2782 = "success";
  } else {
    v2782 = "failure";
  }
  var receiver = v1595[v2782];
  var options$$5 = this.options;
  if (!options$$5.evalScripts) {
    responseText = JAM.call(responseText.stripScripts, responseText, [], JAM.policy.p1);
  }
  if (receiver = JAM.call($, null, [receiver], JAM.policy.p1)) {
    if (options$$5.insertion) {
      if (JAM.call(Object.isString, Object, [options$$5.insertion], JAM.policy.p1)) {
        var insertion = {};
        JAM.set(insertion, options$$5.insertion, responseText, JAM.policy.p2);
        JAM.call(receiver.insert, receiver, [insertion], JAM.policy.p1);
      } else {
        JAM.call(options$$5.insertion, options$$5, [receiver, responseText], JAM.policy.p1);
      }
    } else {
      JAM.call(receiver.update, receiver, [responseText], JAM.policy.p1);
    }
  }
  return;
}
function v108($super$$1, container, url$$4, options$$4) {
  function v107(response$$2, json$$4) {
    JAM.call(this.updateContent, this, [response$$2.responseText], JAM.policy.p1);
    if (JAM.call(Object.isFunction, Object, [onComplete], JAM.policy.p1)) {
      JAM.call(onComplete, null, [response$$2, json$$4], JAM.policy.p1);
    }
    return;
  }
  var v2785 = container.success;
  if (!v2785) {
    v2785 = container;
  }
  var v1604 = v2785;
  var v2786 = container.failure;
  if (!v2786) {
    var v3409;
    if (container.success) {
      v3409 = null;
    } else {
      v3409 = container;
    }
    v2786 = v3409;
  }
  this.container = {success:v1604, failure:v2786};
  options$$4 = JAM.call(Object.clone, Object, [options$$4], JAM.policy.p1);
  var onComplete = options$$4.onComplete;
  var v1606 = options$$4;
  var v3962 = JAM.call(v107.bind, v107, [this], JAM.policy.p1);
  v1606.onComplete = v3962;
  JAM.call($super$$1, null, [url$$4, options$$4], JAM.policy.p1);
  return;
}
function v106() {
  var options$$3 = this.request.options;
  var v3411 = !options$$3.evalJSON;
  if (!v3411) {
    var v3704 = options$$3.evalJSON != "force";
    if (v3704) {
      var v3889 = JAM.call(this.getHeader, this, ["Content-type"], JAM.policy.p1);
      if (!v3889) {
        v3889 = "";
      }
      var v3869 = v3889;
      v3704 = !JAM.call(v3869.include, v3869, ["application/json"], JAM.policy.p1);
    }
    v3411 = v3704;
  }
  var v2787 = v3411;
  if (!v2787) {
    var v3412 = this.responseText;
    v2787 = JAM.call(v3412.blank, v3412, [], JAM.policy.p1);
  }
  if (v2787) {
    return null;
  }
  try {
    var v1609 = this.responseText;
    var v2788 = options$$3.sanitizeJSON;
    if (!v2788) {
      var v3706 = this.request;
      v2788 = !JAM.call(v3706.isSameOrigin, v3706, [], JAM.policy.p1);
    }
    return JAM.call(v1609.evalJSON, v1609, [v2788], JAM.policy.p1);
  } catch (e$$20) {
    var v1611 = this.request;
    JAM.call(v1611.dispatchException, v1611, [e$$20], JAM.policy.p1);
  }
  return;
}
function v105() {
  var json$$3 = JAM.call(this.getHeader, this, ["X-JSON"], JAM.policy.p1);
  if (!json$$3) {
    return null;
  }
  try {
    json$$3 = decodeURIComponent(escape(json$$3));
  } catch (e$$18) {
  }
  try {
    var v2789 = this.request.options.sanitizeJSON;
    if (!v2789) {
      var v3708 = this.request;
      v2789 = !JAM.call(v3708.isSameOrigin, v3708, [], JAM.policy.p1);
    }
    return JAM.call(json$$3.evalJSON, json$$3, [v2789], JAM.policy.p1);
  } catch (e$$19) {
    var v1615 = this.request;
    JAM.call(v1615.dispatchException, v1615, [e$$19], JAM.policy.p1);
  }
  return;
}
function v104() {
  var v1616 = this.transport;
  return JAM.call(v1616.getAllResponseHeaders, v1616, [], JAM.policy.p1);
}
function v103(name$$32) {
  var v1617 = this.transport;
  return JAM.call(v1617.getResponseHeader, v1617, [name$$32], JAM.policy.p1);
}
function v102() {
  try {
    return JAM.call(this.getAllResponseHeaders, this, [], JAM.policy.p1);
  } catch (e$$17) {
    return null;
  }
  return;
}
function v101() {
  try {
    var v1618 = this.transport.statusText;
    if (!v1618) {
      v1618 = "";
    }
    return v1618;
  } catch (e$$16) {
    return "";
  }
  return;
}
function v100(request$$1) {
  this.request = request$$1;
  var transport$$1 = this.transport = request$$1.transport;
  var readyState$$2 = this.readyState = transport$$1.readyState;
  var v3419 = readyState$$2 > 2;
  if (v3419) {
    v3419 = !Prototype.Browser.IE;
  }
  var v2792 = v3419;
  if (!v2792) {
    v2792 = readyState$$2 == 4;
  }
  if (v2792) {
    var v3963 = JAM.call(this.getStatus, this, [], JAM.policy.p1);
    this.status = v3963;
    var v3964 = JAM.call(this.getStatusText, this, [], JAM.policy.p1);
    this.statusText = v3964;
    var v3965 = JAM.call(String.interpret, String, [transport$$1.responseText], JAM.policy.p1);
    this.responseText = v3965;
    var v3966 = JAM.call(this._getHeaderJSON, this, [], JAM.policy.p1);
    this.headerJSON = v3966;
  }
  if (readyState$$2 == 4) {
    var xml = transport$$1.responseXML;
    var v1621;
    if (JAM.call(Object.isUndefined, Object, [xml], JAM.policy.p1)) {
      v1621 = null;
    } else {
      v1621 = xml;
    }
    this.responseXML = v1621;
    var v3967 = JAM.call(this._getResponseJSON, this, [], JAM.policy.p1);
    this.responseJSON = v3967;
  }
  return;
}
function v99(exception) {
  var v2794 = this.options.onException;
  if (!v2794) {
    v2794 = Prototype.emptyFunction;
  }
  JAM.call(v2794, null, [this, exception], JAM.policy.p1);
  var v1624 = Ajax.Responders;
  JAM.call(v1624.dispatch, v1624, ["onException", this, exception], JAM.policy.p1);
  return;
}
function v98() {
  try {
    var v3423 = this.transport.responseText;
    if (!v3423) {
      v3423 = "";
    }
    var v2795 = v3423;
    var v1625 = JAM.call(v2795.unfilterJSON, v2795, [], JAM.policy.p1);
    if (JAM.isEval(eval)) {
      return eval("introspect(JAM.policy.pFull) { " + v1625 + " }");
    } else {
      return JAM.call(eval, null, [v1625]);
    }
  } catch (e$$15) {
    JAM.call(this.dispatchException, this, [e$$15], JAM.policy.p1);
  }
  return;
}
function v97(name$$31) {
  try {
    var v2796 = this.transport;
    var v1626 = JAM.call(v2796.getResponseHeader, v2796, [name$$31], JAM.policy.p1);
    if (!v1626) {
      v1626 = null;
    }
    return v1626;
  } catch (e$$14) {
    return null;
  }
  return;
}
function v96() {
  var v1627 = this.url;
  var m$$1 = JAM.call(v1627.match, v1627, [/^\s*https?:\/\/[^\/]*/], JAM.policy.p1);
  var v1628 = !m$$1;
  if (!v1628) {
    var v2798 = m$$1[0];
    var v3712 = location.protocol;
    var v3713 = document.domain;
    var v3823;
    if (location.port) {
      v3823 = ":" + location.port;
    } else {
      v3823 = "";
    }
    v1628 = v2798 == JAM.call("#{protocol}//#{domain}#{port}".interpolate, "#{protocol}//#{domain}#{port}", [{protocol:v3712, domain:v3713, port:v3823}], JAM.policy.p1);
  }
  return v1628;
}
function v95(readyState$$1) {
  var state = Ajax.Request.Events[readyState$$1];
  var response$$1 = JAM.new(Ajax.Response, [this]);
  if (state == "Complete") {
    try {
      this._complete = true;
      var v3425 = this.options["on" + response$$1.status];
      if (!v3425) {
        var v3717 = this.options;
        var v3872;
        if (JAM.call(this.success, this, [], JAM.policy.p1)) {
          v3872 = "Success";
        } else {
          v3872 = "Failure";
        }
        v3425 = v3717["on" + v3872];
      }
      var v2802 = v3425;
      if (!v2802) {
        v2802 = Prototype.emptyFunction;
      }
      JAM.call(v2802, null, [response$$1, response$$1.headerJSON], JAM.policy.p1);
    } catch (e$$12) {
      JAM.call(this.dispatchException, this, [e$$12], JAM.policy.p1);
    }
    var contentType = JAM.call(response$$1.getHeader, response$$1, ["Content-type"], JAM.policy.p1);
    var v2803 = this.options.evalJS == "force";
    if (!v2803) {
      var v3826 = this.options.evalJS;
      if (v3826) {
        v3826 = JAM.call(this.isSameOrigin, this, [], JAM.policy.p1);
      }
      var v3721 = v3826;
      if (v3721) {
        v3721 = contentType;
      }
      var v3428 = v3721;
      if (v3428) {
        v3428 = JAM.call(contentType.match, contentType, [/^\s*(text|application)\/(x-)?(java|ecma)script(;.*)?\s*$/i], JAM.policy.p1);
      }
      v2803 = v3428;
    }
    if (v2803) {
      JAM.call(this.evalResponse, this, [], JAM.policy.p1);
    }
  }
  try {
    var v2804 = this.options["on" + state];
    if (!v2804) {
      v2804 = Prototype.emptyFunction;
    }
    JAM.call(v2804, null, [response$$1, response$$1.headerJSON], JAM.policy.p1);
    var v1637 = Ajax.Responders;
    JAM.call(v1637.dispatch, v1637, ["on" + state, this, response$$1, response$$1.headerJSON], JAM.policy.p1);
  } catch (e$$13) {
    JAM.call(this.dispatchException, this, [e$$13], JAM.policy.p1);
  }
  if (state == "Complete") {
    JAM.set(this.transport, "onreadystatechange", Prototype.emptyFunction);
  }
  return;
}
function v94() {
  try {
    if (this.transport.status === 1223) {
      return 204;
    }
    var v1643 = this.transport.status;
    if (!v1643) {
      v1643 = 0;
    }
    return v1643;
  } catch (e$$11) {
    return 0;
  }
  return;
}
function v93() {
  var status = JAM.call(this.getStatus, this, [], JAM.policy.p1);
  var v2808 = !status;
  if (!v2808) {
    var v3434 = status >= 200;
    if (v3434) {
      v3434 = status < 300;
    }
    v2808 = v3434;
  }
  var v1644 = v2808;
  if (!v1644) {
    v1644 = status == 304;
  }
  return v1644;
}
function v92() {
  function v91(pair$$6) {
    JAM.set(headers, pair$$6.key, pair$$6.value, JAM.policy.p2);
    return;
  }
  var headers = {"X-Requested-With":"XMLHttpRequest", "X-Prototype-Version":Prototype.Version, "Accept":"text/javascript, text/html, application/xml, text/xml, */*"};
  if (this.method == "post") {
    var v1647 = this.options.contentType;
    var v2812;
    if (this.options.encoding) {
      v2812 = "; charset=" + this.options.encoding;
    } else {
      v2812 = "";
    }
    headers["Content-type"] = v1647 + v2812;
    var v2813 = this.transport.overrideMimeType;
    if (v2813) {
      var v3874 = navigator.userAgent;
      var v3827 = JAM.call(v3874.match, v3874, [/Gecko\/(\d{4})/], JAM.policy.p1);
      if (!v3827) {
        v3827 = [0, 2005];
      }
      v2813 = v3827[1] < 2005;
    }
    if (v2813) {
      headers["Connection"] = "close";
    }
  }
  if (typeof this.options.requestHeaders == "object") {
    var extras = this.options.requestHeaders;
    if (JAM.call(Object.isFunction, Object, [extras.push], JAM.policy.p1)) {
      var i$$15 = 0;
      var length$$27 = extras.length;
      var v1653 = i$$15 < length$$27;
      for (;v1653;) {
        JAM.set(headers, extras[i$$15], extras[i$$15 + 1], JAM.policy.p2);
        i$$15 = i$$15 + 2;
        v1653 = i$$15 < length$$27;
      }
    } else {
      var v1654 = $H(extras);
      JAM.call(v1654.each, v1654, [v91], JAM.policy.p1);
    }
  }
  var name$$30;
  for (name$$30 in headers) {
    var v1657 = this.transport;
    JAM.call(v1657.setRequestHeader, v1657, [name$$30, headers[name$$30]], JAM.policy.p1);
  }
  return;
}
function v90() {
  var readyState = this.transport.readyState;
  var v2817 = readyState > 1;
  if (v2817) {
    var v3726 = readyState == 4;
    if (v3726) {
      v3726 = this._complete;
    }
    v2817 = !v3726;
  }
  if (v2817) {
    JAM.call(this.respondToReadyState, this, [this.transport.readyState], JAM.policy.p1);
  }
  return;
}
function v89(url$$3) {
  this.url = url$$3;
  this.method = this.options.method;
  var v1663;
  if (JAM.call(Object.isString, Object, [this.options.parameters], JAM.policy.p1)) {
    v1663 = this.options.parameters;
  } else {
    v1663 = JAM.call(Object.toQueryString, Object, [this.options.parameters], JAM.policy.p1);
  }
  var params = v1663;
  var v3444 = ["get", "post"];
  if (!JAM.call(v3444.include, v3444, [this.method], JAM.policy.p1)) {
    var v3828;
    if (params) {
      v3828 = "&";
    } else {
      v3828 = "";
    }
    params = params + (v3828 + "_method=" + this.method);
    this.method = "post";
  }
  var v2824 = params;
  if (v2824) {
    v2824 = this.method === "get";
  }
  if (v2824) {
    var v2825 = this.url;
    var v3729;
    var v3876 = this.url;
    if (JAM.call(v3876.include, v3876, ["?"], JAM.policy.p1)) {
      v3729 = "&";
    } else {
      v3729 = "?";
    }
    this.url = v2825 + (v3729 + params);
  }
  var v3968 = JAM.call(params.toQueryParams, params, [], JAM.policy.p1);
  this.parameters = v3968;
  try {
    var response = JAM.new(Ajax.Response, [this]);
    if (this.options.onCreate) {
      var v1667 = this.options;
      JAM.call(v1667.onCreate, v1667, [response], JAM.policy.p1);
    }
    var v1669 = Ajax.Responders;
    JAM.call(v1669.dispatch, v1669, ["onCreate", this, response], JAM.policy.p1);
    var v1670 = this.transport;
    var v2828 = this.method;
    JAM.call(v1670.open, v1670, [JAM.call(v2828.toUpperCase, v2828, [], JAM.policy.p1), this.url, this.options.asynchronous], JAM.policy.p1);
    if (this.options.asynchronous) {
      var v2831 = this.respondToReadyState;
      var v1674 = JAM.call(v2831.bind, v2831, [this], JAM.policy.p1);
      JAM.call(v1674.defer, v1674, [1], JAM.policy.p1);
    }
    var v1676 = this.transport;
    var v2832 = this.onStateChange;
    var v3969 = JAM.call(v2832.bind, v2832, [this], JAM.policy.p1);
    JAM.set(v1676, "onreadystatechange", v3969);
    JAM.call(this.setRequestHeaders, this, [], JAM.policy.p1);
    var v1677;
    if (this.method == "post") {
      var v2833 = this.options.postBody;
      if (!v2833) {
        v2833 = params;
      }
      v1677 = v2833;
    } else {
      v1677 = null;
    }
    this.body = v1677;
    var v1678 = this.transport;
    JAM.call(v1678.send, v1678, [this.body], JAM.policy.p1);
    var v2835 = !this.options.asynchronous;
    if (v2835) {
      v2835 = this.transport.overrideMimeType;
    }
    if (v2835) {
      JAM.call(this.onStateChange, this, [], JAM.policy.p1);
    }
  } catch (e$$10) {
    JAM.call(this.dispatchException, this, [e$$10], JAM.policy.p1);
  }
  return;
}
function v88($super, url$$2, options$$2) {
  JAM.call($super, null, [options$$2], JAM.policy.p1);
  var v3970 = JAM.call(Ajax.getTransport, Ajax, [], JAM.policy.p1);
  this.transport = v3970;
  JAM.call(this.request, this, [url$$2], JAM.policy.p1);
  return;
}
function v87(options$$1) {
  this.options = {method:"post", asynchronous:true, contentType:"application/x-www-form-urlencoded", encoding:"UTF-8", parameters:"", evalJSON:true, evalJS:true};
  JAM.call(Object.extend, Object, [this.options, options$$1 || {}], JAM.policy.p1);
  var v1683 = this.options;
  var v2836 = this.options.method;
  var v3971 = JAM.call(v2836.toLowerCase, v2836, [], JAM.policy.p1);
  v1683.method = v3971;
  if (JAM.call(Object.isHash, Object, [this.options.parameters], JAM.policy.p1)) {
    var v1684 = this.options;
    var v2838 = this.options.parameters;
    var v3972 = JAM.call(v2838.toObject, v2838, [], JAM.policy.p1);
    v1684.parameters = v3972;
  }
  return;
}
function v86() {
  Ajax.activeRequestCount--;
  return;
}
function v85() {
  Ajax.activeRequestCount++;
  return;
}
function v84(callback$$26, request, transport, json$$2) {
  function v83(responder$$2) {
    if (JAM.call(Object.isFunction, Object, [responder$$2[callback$$26]], JAM.policy.p1)) {
      try {
        var v1686 = responder$$2[callback$$26];
        JAM.call(v1686.apply, v1686, [responder$$2, [request, transport, json$$2]], JAM.policy.p1);
      } catch (e$$9) {
      }
    }
    return;
  }
  JAM.call(this.each, this, [v83], JAM.policy.p1);
  return;
}
function v82(responder$$1) {
  var v1689 = this.responders;
  var v3973 = JAM.call(v1689.without, v1689, [responder$$1], JAM.policy.p1);
  this.responders = v3973;
  return;
}
function v81(responder) {
  if (!JAM.call(this.include, this, [responder], JAM.policy.p1)) {
    var v1690 = this.responders;
    JAM.call(v1690.push, v1690, [responder], JAM.policy.p1);
  }
  return;
}
function v80(iterator$$25, context$$25) {
  var v1692 = this.responders;
  JAM.call(v1692._each, v1692, [iterator$$25, context$$25], JAM.policy.p1);
  return;
}
function v79() {
  function v78() {
    return new ActiveXObject("Microsoft.XMLHTTP");
  }
  function v77() {
    return new ActiveXObject("Msxml2.XMLHTTP");
  }
  function v76() {
    return new XMLHttpRequest;
  }
  var v1693 = JAM.call(Try.these, Try, [v76, v77, v78], JAM.policy.p1);
  if (!v1693) {
    v1693 = false;
  }
  return v1693;
}
function v75() {
  var returnValue;
  var i$$14 = 0;
  var length$$26 = arguments.length;
  var v1694 = i$$14 < length$$26;
  for (;v1694;) {
    var lambda = arguments[i$$14];
    try {
      returnValue = JAM.call(lambda, null, [], JAM.policy.p1);
      break;
    } catch (e$$8) {
    }
    i$$14++;
    v1694 = i$$14 < length$$26;
  }
  return returnValue;
}
function v74() {
  function initialize$$1(start$$5, end$$2, exclusive$$1) {
    this.start = start$$5;
    this.end = end$$2;
    this.exclusive = exclusive$$1;
    return;
  }
  function _each$$2(iterator$$24, context$$24) {
    var value$$59 = this.start;
    var v1695 = JAM.call(this.include, this, [value$$59], JAM.policy.p1);
    for (;v1695;) {
      JAM.call(iterator$$24.call, iterator$$24, [context$$24, value$$59], JAM.policy.p1);
      value$$59 = JAM.call(value$$59.succ, value$$59, [], JAM.policy.p1);
      v1695 = JAM.call(this.include, this, [value$$59], JAM.policy.p1);
    }
    return;
  }
  function include$$2(value$$60) {
    if (value$$60 < this.start) {
      return false;
    }
    if (this.exclusive) {
      return value$$60 < this.end;
    }
    return value$$60 <= this.end;
  }
  return{initialize:initialize$$1, _each:_each$$2, include:include$$2};
}
function v73() {
  function toColorPart() {
    return JAM.call(this.toPaddedString, this, [2, 16], JAM.policy.p1);
  }
  function succ$$1() {
    return this + 1;
  }
  function times$$1(iterator$$23, context$$23) {
    var v1700 = $R(0, this, true);
    JAM.call(v1700.each, v1700, [iterator$$23, context$$23], JAM.policy.p1);
    return this;
  }
  function toPaddedString(length$$25, radix) {
    var string$$1 = JAM.call(this.toString, this, [radix || 10], JAM.policy.p1);
    return JAM.call("0".times, "0", [length$$25 - string$$1.length], JAM.policy.p1) + string$$1;
  }
  function abs() {
    return JAM.call(Math.abs, Math, [this], JAM.policy.p1);
  }
  function round() {
    return JAM.call(Math.round, Math, [this], JAM.policy.p1);
  }
  function ceil() {
    return JAM.call(Math.ceil, Math, [this], JAM.policy.p1);
  }
  function floor() {
    return JAM.call(Math.floor, Math, [this], JAM.policy.p1);
  }
  return{toColorPart:toColorPart, succ:succ$$1, times:times$$1, toPaddedString:toPaddedString, abs:abs, round:round, ceil:ceil, floor:floor};
}
function v72() {
  function initialize(object$$23) {
    var v1703;
    if (JAM.call(Object.isHash, Object, [object$$23], JAM.policy.p1)) {
      v1703 = JAM.call(object$$23.toObject, object$$23, [], JAM.policy.p1);
    } else {
      v1703 = JAM.call(Object.clone, Object, [object$$23], JAM.policy.p1);
    }
    this._object = v1703;
    return;
  }
  function _each$$1(iterator$$22, context$$22) {
    var key$$16;
    for (key$$16 in this._object) {
      var value$$53 = this._object[key$$16];
      var pair$$1 = [key$$16, value$$53];
      pair$$1.key = key$$16;
      pair$$1.value = value$$53;
      JAM.call(iterator$$22.call, iterator$$22, [context$$22, pair$$1], JAM.policy.p1);
    }
    return;
  }
  function set(key$$17, value$$54) {
    return JAM.set(this._object, key$$17, value$$54, JAM.policy.p2);
  }
  function get(key$$18) {
    if (this._object[key$$18] !== Object.prototype[key$$18]) {
      return this._object[key$$18];
    }
    return;
  }
  function unset(key$$19) {
    var value$$55 = this._object[key$$19];
    delete this._object[key$$19];
    return value$$55;
  }
  function toObject() {
    return JAM.call(Object.clone, Object, [this._object], JAM.policy.p1);
  }
  function keys$$2() {
    return JAM.call(this.pluck, this, ["key"], JAM.policy.p1);
  }
  function values$$6() {
    return JAM.call(this.pluck, this, ["value"], JAM.policy.p1);
  }
  function index$$54(value$$56) {
    function v68(pair$$2) {
      return pair$$2.value === value$$56;
    }
    var match$$6 = JAM.call(this.detect, this, [v68], JAM.policy.p1);
    var v1713 = match$$6;
    if (v1713) {
      v1713 = match$$6.key;
    }
    return v1713;
  }
  function merge$$1(object$$24) {
    var v1714 = JAM.call(this.clone, this, [], JAM.policy.p1);
    return JAM.call(v1714.update, v1714, [object$$24], JAM.policy.p1);
  }
  function update$$1(object$$25) {
    function v69(result$$6, pair$$3) {
      JAM.call(result$$6.set, result$$6, [pair$$3.key, pair$$3.value], JAM.policy.p1);
      return result$$6;
    }
    var v1717 = JAM.new(Hash, [object$$25]);
    return JAM.call(v1717.inject, v1717, [this, v69], JAM.policy.p1);
  }
  function toQueryPair(key$$20, value$$57) {
    if (JAM.call(Object.isUndefined, Object, [value$$57], JAM.policy.p1)) {
      return key$$20;
    }
    value$$57 = JAM.call(String.interpret, String, [value$$57], JAM.policy.p1);
    value$$57 = JAM.call(value$$57.gsub, value$$57, [/(\r)?\n/, "\r\n"], JAM.policy.p1);
    value$$57 = encodeURIComponent(value$$57);
    value$$57 = JAM.call(value$$57.gsub, value$$57, [/%20/, "+"], JAM.policy.p1);
    return key$$20 + "=" + value$$57;
  }
  function toQueryString$$1() {
    function v70(results$$10, pair$$4) {
      var key$$21 = encodeURIComponent(pair$$4.key);
      var values$$7 = pair$$4.value;
      var v2847 = values$$7;
      if (v2847) {
        v2847 = typeof values$$7 == "object";
      }
      if (v2847) {
        if (JAM.call(Object.isArray, Object, [values$$7], JAM.policy.p1)) {
          var queryValues = [];
          var i$$13 = 0;
          var len = values$$7.length;
          var value$$58;
          var v1722 = i$$13 < len;
          for (;v1722;) {
            value$$58 = values$$7[i$$13];
            JAM.call(queryValues.push, queryValues, [toQueryPair(key$$21, value$$58)], JAM.policy.p1);
            i$$13++;
            v1722 = i$$13 < len;
          }
          return JAM.call(results$$10.concat, results$$10, [queryValues], JAM.policy.p1);
        }
      } else {
        JAM.call(results$$10.push, results$$10, [toQueryPair(key$$21, values$$7)], JAM.policy.p1);
      }
      return results$$10;
    }
    var v1726 = JAM.call(this.inject, this, [[], v70], JAM.policy.p1);
    return JAM.call(v1726.join, v1726, ["&"], JAM.policy.p1);
  }
  function inspect$$4() {
    function v71(pair$$5) {
      var v1727 = JAM.call(pair$$5.map, pair$$5, [Object.inspect], JAM.policy.p1);
      return JAM.call(v1727.join, v1727, [": "], JAM.policy.p1);
    }
    var v3462 = JAM.call(this.map, this, [v71], JAM.policy.p1);
    return "#<Hash:{" + JAM.call(v3462.join, v3462, [", "], JAM.policy.p1) + "}>";
  }
  function clone$$2() {
    return JAM.new(Hash, [this]);
  }
  return{initialize:initialize, _each:_each$$1, set:set, get:get, unset:unset, toObject:toObject, toTemplateReplacements:toObject, keys:keys$$2, values:values$$6, index:index$$54, merge:merge$$1, update:update$$1, toQueryString:toQueryString$$1, inspect:inspect$$4, toJSON:toObject, clone:clone$$2};
}
function v67() {
  function v66() {
    return JAM.call([].concat, [], [arguments], JAM.policy.p1)[0][0] !== 1;
  }
  function each$$1(iterator$$16, context$$16) {
    var i$$5 = 0;
    var length$$17 = this.length >>> 0;
    var v1733 = i$$5 < length$$17;
    for (;v1733;) {
      if (i$$5 in this) {
        JAM.call(iterator$$16.call, iterator$$16, [context$$16, this[i$$5], i$$5, this], JAM.policy.p1);
      }
      i$$5++;
      v1733 = i$$5 < length$$17;
    }
    return;
  }
  function clear() {
    this.length = 0;
    return this;
  }
  function first$$1() {
    return this[0];
  }
  function last() {
    return this[this.length - 1];
  }
  function compact() {
    function v60(value$$48) {
      return value$$48 != null;
    }
    return JAM.call(this.select, this, [v60], JAM.policy.p1);
  }
  function flatten() {
    function v61(array$$12, value$$49) {
      if (JAM.call(Object.isArray, Object, [value$$49], JAM.policy.p1)) {
        return JAM.call(array$$12.concat, array$$12, [JAM.call(value$$49.flatten, value$$49, [], JAM.policy.p1)], JAM.policy.p1);
      }
      JAM.call(array$$12.push, array$$12, [value$$49], JAM.policy.p1);
      return array$$12;
    }
    return JAM.call(this.inject, this, [[], v61], JAM.policy.p1);
  }
  function without() {
    function v62(value$$50) {
      return!JAM.call(values$$5.include, values$$5, [value$$50], JAM.policy.p1);
    }
    var values$$5 = JAM.call(slice$$2.call, slice$$2, [arguments, 0], JAM.policy.p1);
    return JAM.call(this.select, this, [v62], JAM.policy.p1);
  }
  function reverse(inline) {
    var v2852;
    if (inline === false) {
      v2852 = JAM.call(this.toArray, this, [], JAM.policy.p1);
    } else {
      v2852 = this;
    }
    var v1738 = v2852;
    return JAM.call(v1738._reverse, v1738, [], JAM.policy.p1);
  }
  function uniq(sorted) {
    function v63(array$$13, value$$51, index$$53) {
      var v2853 = 0 == index$$53;
      if (!v2853) {
        var v3465;
        if (sorted) {
          v3465 = JAM.call(array$$13.last, array$$13, [], JAM.policy.p1) != value$$51;
        } else {
          v3465 = !JAM.call(array$$13.include, array$$13, [value$$51], JAM.policy.p1);
        }
        v2853 = v3465;
      }
      if (v2853) {
        JAM.call(array$$13.push, array$$13, [value$$51], JAM.policy.p1);
      }
      return array$$13;
    }
    return JAM.call(this.inject, this, [[], v63], JAM.policy.p1);
  }
  function intersect(array$$14) {
    function v64(item) {
      return JAM.call(array$$14.indexOf, array$$14, [item], JAM.policy.p1) !== -1;
    }
    var v1741 = JAM.call(this.uniq, this, [], JAM.policy.p1);
    return JAM.call(v1741.findAll, v1741, [v64], JAM.policy.p1);
  }
  function clone$$1() {
    return JAM.call(slice$$2.call, slice$$2, [this, 0], JAM.policy.p1);
  }
  function size$$5() {
    return this.length;
  }
  function inspect$$3() {
    var v3467 = JAM.call(this.map, this, [Object.inspect], JAM.policy.p1);
    return "[" + JAM.call(v3467.join, v3467, [", "], JAM.policy.p1) + "]";
  }
  function indexOf(item$$1, i$$6) {
    if (this == null) {
      throw new TypeError;
    }
    var array$$15 = Object(this);
    var length$$18 = array$$15.length >>> 0;
    if (length$$18 === 0) {
      return-1;
    }
    i$$6 = Number(i$$6);
    if (isNaN(i$$6)) {
      i$$6 = 0;
    } else {
      var v2855 = i$$6 !== 0;
      if (v2855) {
        v2855 = isFinite(i$$6);
      }
      if (v2855) {
        var v2856;
        if (i$$6 > 0) {
          v2856 = 1;
        } else {
          v2856 = -1;
        }
        i$$6 = v2856 * JAM.call(Math.floor, Math, [JAM.call(Math.abs, Math, [i$$6], JAM.policy.p1)], JAM.policy.p1);
      }
    }
    if (i$$6 > length$$18) {
      return-1;
    }
    var v1751;
    if (i$$6 >= 0) {
      v1751 = i$$6;
    } else {
      v1751 = JAM.call(Math.max, Math, [length$$18 - JAM.call(Math.abs, Math, [i$$6], JAM.policy.p1), 0], JAM.policy.p1);
    }
    var k = v1751;
    var v1753 = k < length$$18;
    for (;v1753;) {
      var v2860 = k in array$$15;
      if (v2860) {
        v2860 = array$$15[k] === item$$1;
      }
      if (v2860) {
        return k;
      }
      k++;
      v1753 = k < length$$18;
    }
    return-1;
  }
  function lastIndexOf(item$$2, i$$7) {
    if (this == null) {
      throw new TypeError;
    }
    var array$$16 = Object(this);
    var length$$19 = array$$16.length >>> 0;
    if (length$$19 === 0) {
      return-1;
    }
    if (!JAM.call(Object.isUndefined, Object, [i$$7], JAM.policy.p1)) {
      i$$7 = Number(i$$7);
      if (isNaN(i$$7)) {
        i$$7 = 0;
      } else {
        var v2862 = i$$7 !== 0;
        if (v2862) {
          v2862 = isFinite(i$$7);
        }
        if (v2862) {
          var v2863;
          if (i$$7 > 0) {
            v2863 = 1;
          } else {
            v2863 = -1;
          }
          i$$7 = v2863 * JAM.call(Math.floor, Math, [JAM.call(Math.abs, Math, [i$$7], JAM.policy.p1)], JAM.policy.p1);
        }
      }
    } else {
      i$$7 = length$$19;
    }
    var v1762;
    if (i$$7 >= 0) {
      v1762 = JAM.call(Math.min, Math, [i$$7, length$$19 - 1], JAM.policy.p1);
    } else {
      v1762 = length$$19 - JAM.call(Math.abs, Math, [i$$7], JAM.policy.p1);
    }
    var k$$1 = v1762;
    var v1764 = k$$1 >= 0;
    for (;v1764;) {
      var v2868 = k$$1 in array$$16;
      if (v2868) {
        v2868 = array$$16[k$$1] === item$$2;
      }
      if (v2868) {
        return k$$1;
      }
      k$$1--;
      v1764 = k$$1 >= 0;
    }
    return-1;
  }
  function concat(_) {
    var array$$17 = [];
    var items = JAM.call(slice$$2.call, slice$$2, [arguments, 0], JAM.policy.p1);
    var item$$3;
    var n$$1 = 0;
    JAM.call(items.unshift, items, [this], JAM.policy.p1);
    var i$$8 = 0;
    var length$$20 = items.length;
    var v1769 = i$$8 < length$$20;
    for (;v1769;) {
      item$$3 = items[i$$8];
      var v2869 = JAM.call(Object.isArray, Object, [item$$3], JAM.policy.p1);
      if (v2869) {
        v2869 = !("callee" in item$$3);
      }
      if (v2869) {
        var j = 0;
        var arrayLength$$1 = item$$3.length;
        var v1766 = j < arrayLength$$1;
        for (;v1766;) {
          if (j in item$$3) {
            array$$17[n$$1] = item$$3[j];
          }
          n$$1++;
          j++;
          v1766 = j < arrayLength$$1;
        }
      } else {
        var v1767 = n$$1;
        n$$1 = n$$1 + 1;
        array$$17[v1767] = item$$3;
      }
      i$$8++;
      v1769 = i$$8 < length$$20;
    }
    array$$17.length = n$$1;
    return array$$17;
  }
  function wrapNative(method$$5) {
    function v65() {
      if (arguments.length === 0) {
        return JAM.call(method$$5.call, method$$5, [this, Prototype.K], JAM.policy.p1);
      } else {
        if (arguments[0] === undefined) {
          var args$$9 = JAM.call(slice$$2.call, slice$$2, [arguments, 1], JAM.policy.p1);
          JAM.call(args$$9.unshift, args$$9, [Prototype.K], JAM.policy.p1);
          return JAM.call(method$$5.apply, method$$5, [this, args$$9], JAM.policy.p1);
        } else {
          return JAM.call(method$$5.apply, method$$5, [this, arguments], JAM.policy.p1);
        }
      }
      return;
    }
    return v65;
  }
  function map(iterator$$17) {
    if (this == null) {
      throw new TypeError;
    }
    var v1775 = iterator$$17;
    if (!v1775) {
      v1775 = Prototype.K;
    }
    iterator$$17 = v1775;
    var object$$18 = Object(this);
    var results$$8 = [];
    var context$$17 = arguments[1];
    var n$$2 = 0;
    var i$$9 = 0;
    var length$$21 = object$$18.length >>> 0;
    var v1779 = i$$9 < length$$21;
    for (;v1779;) {
      if (i$$9 in object$$18) {
        var v3974 = JAM.call(iterator$$17.call, iterator$$17, [context$$17, object$$18[i$$9], i$$9, object$$18], JAM.policy.p1);
        results$$8[n$$2] = v3974;
      }
      n$$2++;
      i$$9++;
      v1779 = i$$9 < length$$21;
    }
    results$$8.length = n$$2;
    return results$$8;
  }
  function filter$$2(iterator$$18) {
    var v2873 = this == null;
    if (!v2873) {
      v2873 = !JAM.call(Object.isFunction, Object, [iterator$$18], JAM.policy.p1);
    }
    if (v2873) {
      throw new TypeError;
    }
    var object$$19 = Object(this);
    var results$$9 = [];
    var context$$18 = arguments[1];
    var value$$52;
    var i$$10 = 0;
    var length$$22 = object$$19.length >>> 0;
    var v1784 = i$$10 < length$$22;
    for (;v1784;) {
      if (i$$10 in object$$19) {
        value$$52 = object$$19[i$$10];
        if (JAM.call(iterator$$18.call, iterator$$18, [context$$18, value$$52, i$$10, object$$19], JAM.policy.p1)) {
          JAM.call(results$$9.push, results$$9, [value$$52], JAM.policy.p1);
        }
      }
      i$$10++;
      v1784 = i$$10 < length$$22;
    }
    return results$$9;
  }
  function some(iterator$$19) {
    if (this == null) {
      throw new TypeError;
    }
    var v1786 = iterator$$19;
    if (!v1786) {
      v1786 = Prototype.K;
    }
    iterator$$19 = v1786;
    var context$$19 = arguments[1];
    var object$$20 = Object(this);
    var i$$11 = 0;
    var length$$23 = object$$20.length >>> 0;
    var v1789 = i$$11 < length$$23;
    for (;v1789;) {
      var v2875 = i$$11 in object$$20;
      if (v2875) {
        v2875 = JAM.call(iterator$$19.call, iterator$$19, [context$$19, object$$20[i$$11], i$$11, object$$20], JAM.policy.p1);
      }
      if (v2875) {
        return true;
      }
      i$$11++;
      v1789 = i$$11 < length$$23;
    }
    return false;
  }
  function every(iterator$$20) {
    if (this == null) {
      throw new TypeError;
    }
    var v1791 = iterator$$20;
    if (!v1791) {
      v1791 = Prototype.K;
    }
    iterator$$20 = v1791;
    var context$$20 = arguments[1];
    var object$$21 = Object(this);
    var i$$12 = 0;
    var length$$24 = object$$21.length >>> 0;
    var v1794 = i$$12 < length$$24;
    for (;v1794;) {
      var v2877 = i$$12 in object$$21;
      if (v2877) {
        v2877 = !JAM.call(iterator$$20.call, iterator$$20, [context$$20, object$$21[i$$12], i$$12, object$$21], JAM.policy.p1);
      }
      if (v2877) {
        return false;
      }
      i$$12++;
      v1794 = i$$12 < length$$24;
    }
    return true;
  }
  function inject$$1(memo$$1, iterator$$21) {
    var v1795 = iterator$$21;
    if (!v1795) {
      v1795 = Prototype.K;
    }
    iterator$$21 = v1795;
    var context$$21 = arguments[2];
    return JAM.call(_reduce.call, _reduce, [this, JAM.call(iterator$$21.bind, iterator$$21, [context$$21], JAM.policy.p1), memo$$1], JAM.policy.p1);
  }
  var arrayProto = Array.prototype;
  var slice$$2 = arrayProto.slice;
  var _each = arrayProto.forEach;
  if (!_each) {
    _each = each$$1;
  }
  if (arrayProto.map) {
    map = wrapNative(Array.prototype.map);
  }
  if (arrayProto.filter) {
    filter$$2 = Array.prototype.filter;
  }
  if (arrayProto.some) {
    some = wrapNative(Array.prototype.some);
  }
  if (arrayProto.every) {
    every = wrapNative(Array.prototype.every);
  }
  var _reduce = arrayProto.reduce;
  if (!arrayProto.reduce) {
    inject$$1 = Enumerable.inject;
  }
  JAM.call(Object.extend, Object, [arrayProto, Enumerable], JAM.policy.p1);
  if (!arrayProto._reverse) {
    arrayProto._reverse = arrayProto.reverse;
  }
  JAM.call(Object.extend, Object, [arrayProto, {_each:_each, map:map, collect:map, select:filter$$2, filter:filter$$2, findAll:filter$$2, some:some, any:some, every:every, all:every, inject:inject$$1, clear:clear, first:first$$1, last:last, compact:compact, flatten:flatten, without:without, reverse:reverse, uniq:uniq, intersect:intersect, clone:clone$$1, toArray:clone$$1, size:size$$5, inspect:inspect$$3}], JAM.policy.p1);
  var CONCAT_ARGUMENTS_BUGGY = v66(1, 2);
  if (CONCAT_ARGUMENTS_BUGGY) {
    arrayProto.concat = concat;
  }
  if (!arrayProto.indexOf) {
    arrayProto.indexOf = indexOf;
  }
  if (!arrayProto.lastIndexOf) {
    arrayProto.lastIndexOf = lastIndexOf;
  }
  return;
}
function v59() {
  function each(iterator$$1, context$$2) {
    try {
      JAM.call(this._each, this, [iterator$$1, context$$2], JAM.policy.p1);
    } catch (e$$7) {
      if (e$$7 != $break) {
        throw e$$7;
      }
    }
    return this;
  }
  function eachSlice(number, iterator$$2, context$$3) {
    var index$$39 = -number;
    var slices = [];
    var array$$11 = JAM.call(this.toArray, this, [], JAM.policy.p1);
    if (number < 1) {
      return array$$11;
    }
    var v1814 = (index$$39 = index$$39 + number) < array$$11.length;
    for (;v1814;) {
      JAM.call(slices.push, slices, [JAM.call(array$$11.slice, array$$11, [index$$39, index$$39 + number], JAM.policy.p1)], JAM.policy.p1);
      v1814 = (index$$39 = index$$39 + number) < array$$11.length;
    }
    return JAM.call(slices.collect, slices, [iterator$$2, context$$3], JAM.policy.p1);
  }
  function all(iterator$$3, context$$4) {
    function v41(value$$32, index$$40) {
      var v1815 = result$$1;
      if (v1815) {
        v1815 = !!JAM.call(iterator$$3.call, iterator$$3, [context$$4, value$$32, index$$40, this], JAM.policy.p1);
      }
      result$$1 = v1815;
      if (!result$$1) {
        throw $break;
      }
      return;
    }
    var v1817 = iterator$$3;
    if (!v1817) {
      v1817 = Prototype.K;
    }
    iterator$$3 = v1817;
    var result$$1 = true;
    JAM.call(this.each, this, [v41, this], JAM.policy.p1);
    return result$$1;
  }
  function any(iterator$$4, context$$5) {
    function v42(value$$33, index$$41) {
      if (result$$2 = !!JAM.call(iterator$$4.call, iterator$$4, [context$$5, value$$33, index$$41, this], JAM.policy.p1)) {
        throw $break;
      }
      return;
    }
    var v1819 = iterator$$4;
    if (!v1819) {
      v1819 = Prototype.K;
    }
    iterator$$4 = v1819;
    var result$$2 = false;
    JAM.call(this.each, this, [v42, this], JAM.policy.p1);
    return result$$2;
  }
  function collect(iterator$$5, context$$6) {
    function v43(value$$34, index$$42) {
      JAM.call(results$$3.push, results$$3, [JAM.call(iterator$$5.call, iterator$$5, [context$$6, value$$34, index$$42, this], JAM.policy.p1)], JAM.policy.p1);
      return;
    }
    var v1821 = iterator$$5;
    if (!v1821) {
      v1821 = Prototype.K;
    }
    iterator$$5 = v1821;
    var results$$3 = [];
    JAM.call(this.each, this, [v43, this], JAM.policy.p1);
    return results$$3;
  }
  function detect(iterator$$6, context$$7) {
    function v44(value$$35, index$$43) {
      if (JAM.call(iterator$$6.call, iterator$$6, [context$$7, value$$35, index$$43, this], JAM.policy.p1)) {
        result$$3 = value$$35;
        throw $break;
      }
      return;
    }
    var result$$3;
    JAM.call(this.each, this, [v44, this], JAM.policy.p1);
    return result$$3;
  }
  function findAll(iterator$$7, context$$8) {
    function v45(value$$36, index$$44) {
      if (JAM.call(iterator$$7.call, iterator$$7, [context$$8, value$$36, index$$44, this], JAM.policy.p1)) {
        JAM.call(results$$4.push, results$$4, [value$$36], JAM.policy.p1);
      }
      return;
    }
    var results$$4 = [];
    JAM.call(this.each, this, [v45, this], JAM.policy.p1);
    return results$$4;
  }
  function grep(filter$$1, iterator$$8, context$$9) {
    function v46(value$$37, index$$45) {
      if (JAM.call(filter$$1.match, filter$$1, [value$$37], JAM.policy.p1)) {
        JAM.call(results$$5.push, results$$5, [JAM.call(iterator$$8.call, iterator$$8, [context$$9, value$$37, index$$45, this], JAM.policy.p1)], JAM.policy.p1);
      }
      return;
    }
    var v1826 = iterator$$8;
    if (!v1826) {
      v1826 = Prototype.K;
    }
    iterator$$8 = v1826;
    var results$$5 = [];
    if (JAM.call(Object.isString, Object, [filter$$1], JAM.policy.p1)) {
      filter$$1 = new RegExp(JAM.call(RegExp.escape, RegExp, [filter$$1], JAM.policy.p1));
    }
    JAM.call(this.each, this, [v46, this], JAM.policy.p1);
    return results$$5;
  }
  function include$$1(object$$17) {
    function v47(value$$38) {
      if (value$$38 == object$$17) {
        found = true;
        throw $break;
      }
      return;
    }
    if (JAM.call(Object.isFunction, Object, [this.indexOf], JAM.policy.p1)) {
      if (JAM.call(this.indexOf, this, [object$$17], JAM.policy.p1) != -1) {
        return true;
      }
    }
    var found = false;
    JAM.call(this.each, this, [v47], JAM.policy.p1);
    return found;
  }
  function inGroupsOf(number$$1, fillWith) {
    function v48(slice$$1) {
      var v1832 = slice$$1.length < number$$1;
      for (;v1832;) {
        JAM.call(slice$$1.push, slice$$1, [fillWith], JAM.policy.p1);
        v1832 = slice$$1.length < number$$1;
      }
      return slice$$1;
    }
    var v1833;
    if (JAM.call(Object.isUndefined, Object, [fillWith], JAM.policy.p1)) {
      v1833 = null;
    } else {
      v1833 = fillWith;
    }
    fillWith = v1833;
    return JAM.call(this.eachSlice, this, [number$$1, v48], JAM.policy.p1);
  }
  function inject(memo, iterator$$9, context$$10) {
    function v49(value$$39, index$$46) {
      memo = JAM.call(iterator$$9.call, iterator$$9, [context$$10, memo, value$$39, index$$46, this], JAM.policy.p1);
      return;
    }
    JAM.call(this.each, this, [v49, this], JAM.policy.p1);
    return memo;
  }
  function invoke(method$$4) {
    function v50(value$$40) {
      var v1834 = value$$40[method$$4];
      return JAM.call(v1834.apply, v1834, [value$$40, args$$7], JAM.policy.p1);
    }
    var v1835 = $A(arguments);
    var args$$7 = JAM.call(v1835.slice, v1835, [1], JAM.policy.p1);
    return JAM.call(this.map, this, [v50], JAM.policy.p1);
  }
  function max(iterator$$10, context$$11) {
    function v51(value$$41, index$$47) {
      value$$41 = JAM.call(iterator$$10.call, iterator$$10, [context$$11, value$$41, index$$47, this], JAM.policy.p1);
      var v2902 = result$$4 == null;
      if (!v2902) {
        v2902 = value$$41 >= result$$4;
      }
      if (v2902) {
        result$$4 = value$$41;
      }
      return;
    }
    var v1837 = iterator$$10;
    if (!v1837) {
      v1837 = Prototype.K;
    }
    iterator$$10 = v1837;
    var result$$4;
    JAM.call(this.each, this, [v51, this], JAM.policy.p1);
    return result$$4;
  }
  function min(iterator$$11, context$$12) {
    function v52(value$$42, index$$48) {
      value$$42 = JAM.call(iterator$$11.call, iterator$$11, [context$$12, value$$42, index$$48, this], JAM.policy.p1);
      var v2904 = result$$5 == null;
      if (!v2904) {
        v2904 = value$$42 < result$$5;
      }
      if (v2904) {
        result$$5 = value$$42;
      }
      return;
    }
    var v1839 = iterator$$11;
    if (!v1839) {
      v1839 = Prototype.K;
    }
    iterator$$11 = v1839;
    var result$$5;
    JAM.call(this.each, this, [v52, this], JAM.policy.p1);
    return result$$5;
  }
  function partition(iterator$$12, context$$13) {
    function v53(value$$43, index$$49) {
      var v2906;
      if (JAM.call(iterator$$12.call, iterator$$12, [context$$13, value$$43, index$$49, this], JAM.policy.p1)) {
        v2906 = trues;
      } else {
        v2906 = falses;
      }
      var v1840 = v2906;
      JAM.call(v1840.push, v1840, [value$$43], JAM.policy.p1);
      return;
    }
    var v1841 = iterator$$12;
    if (!v1841) {
      v1841 = Prototype.K;
    }
    iterator$$12 = v1841;
    var trues = [];
    var falses = [];
    JAM.call(this.each, this, [v53, this], JAM.policy.p1);
    return[trues, falses];
  }
  function pluck(property$$4) {
    function v54(value$$44) {
      JAM.call(results$$6.push, results$$6, [value$$44[property$$4]], JAM.policy.p1);
      return;
    }
    var results$$6 = [];
    JAM.call(this.each, this, [v54], JAM.policy.p1);
    return results$$6;
  }
  function reject(iterator$$13, context$$14) {
    function v55(value$$45, index$$50) {
      if (!JAM.call(iterator$$13.call, iterator$$13, [context$$14, value$$45, index$$50, this], JAM.policy.p1)) {
        JAM.call(results$$7.push, results$$7, [value$$45], JAM.policy.p1);
      }
      return;
    }
    var results$$7 = [];
    JAM.call(this.each, this, [v55, this], JAM.policy.p1);
    return results$$7;
  }
  function sortBy(iterator$$14, context$$15) {
    function v57(left$$1, right$$1) {
      var a$$6 = left$$1.criteria;
      var b = right$$1.criteria;
      var v1844;
      if (a$$6 < b) {
        v1844 = -1;
      } else {
        var v2909;
        if (a$$6 > b) {
          v2909 = 1;
        } else {
          v2909 = 0;
        }
        v1844 = v2909;
      }
      return v1844;
    }
    function v56(value$$46, index$$51) {
      return{value:value$$46, criteria:JAM.call(iterator$$14.call, iterator$$14, [context$$15, value$$46, index$$51, this], JAM.policy.p1)};
    }
    var v2911 = JAM.call(this.map, this, [v56, this], JAM.policy.p1);
    var v1846 = JAM.call(v2911.sort, v2911, [v57], JAM.policy.p1);
    return JAM.call(v1846.pluck, v1846, ["value"], JAM.policy.p1);
  }
  function toArray$$1() {
    return JAM.call(this.map, this, [], JAM.policy.p1);
  }
  function zip() {
    function v58(value$$47, index$$52) {
      return JAM.call(iterator$$15, null, [JAM.call(collections.pluck, collections, [index$$52], JAM.policy.p1)], JAM.policy.p1);
    }
    var iterator$$15 = Prototype.K;
    var args$$8 = $A(arguments);
    if (JAM.call(Object.isFunction, Object, [JAM.call(args$$8.last, args$$8, [], JAM.policy.p1)], JAM.policy.p1)) {
      iterator$$15 = JAM.call(args$$8.pop, args$$8, [], JAM.policy.p1);
    }
    var v2913 = [this];
    var v1849 = JAM.call(v2913.concat, v2913, [args$$8], JAM.policy.p1);
    var collections = JAM.call(v1849.map, v1849, [$A], JAM.policy.p1);
    return JAM.call(this.map, this, [v58], JAM.policy.p1);
  }
  function size$$4() {
    return JAM.call(this.toArray, this, [], JAM.policy.p1).length;
  }
  function inspect$$2() {
    var v3484 = JAM.call(this.toArray, this, [], JAM.policy.p1);
    return "#<Enumerable:" + JAM.call(v3484.inspect, v3484, [], JAM.policy.p1) + ">";
  }
  return{each:each, eachSlice:eachSlice, all:all, every:all, any:any, some:any, collect:collect, map:collect, detect:detect, findAll:findAll, select:findAll, filter:findAll, grep:grep, include:include$$1, member:include$$1, inGroupsOf:inGroupsOf, inject:inject, invoke:invoke, max:max, min:min, partition:partition, pluck:pluck, reject:reject, sortBy:sortBy, toArray:toArray$$1, entries:toArray$$1, zip:zip, size:size$$4, inspect:inspect$$2, find:detect};
}
function v40(object$$16) {
  function v39(match$$5) {
    if (object$$16 == null) {
      return match$$5[1] + "";
    }
    var v1854 = match$$5[1];
    if (!v1854) {
      v1854 = "";
    }
    var before$$1 = v1854;
    if (before$$1 == "\\") {
      return match$$5[2];
    }
    var ctx = object$$16;
    var expr$$3 = match$$5[3];
    var pattern$$9 = /^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;
    match$$5 = JAM.call(pattern$$9.exec, pattern$$9, [expr$$3], JAM.policy.p1);
    if (match$$5 == null) {
      return before$$1;
    }
    var v1860 = match$$5 != null;
    for (;v1860;) {
      var v1857;
      var v3485 = match$$5[1];
      if (JAM.call(v3485.startsWith, v3485, ["["], JAM.policy.p1)) {
        var v2916 = match$$5[2];
        v1857 = JAM.call(v2916.replace, v2916, [/\\\\]/g, "]"], JAM.policy.p1);
      } else {
        v1857 = match$$5[1];
      }
      var comp = v1857;
      ctx = ctx[comp];
      var v2918 = null == ctx;
      if (!v2918) {
        v2918 = "" == match$$5[3];
      }
      if (v2918) {
        break;
      }
      var v2919;
      if ("[" == match$$5[3]) {
        v2919 = match$$5[1].length;
      } else {
        v2919 = match$$5[0].length;
      }
      expr$$3 = JAM.call(expr$$3.substring, expr$$3, [v2919], JAM.policy.p1);
      match$$5 = JAM.call(pattern$$9.exec, pattern$$9, [expr$$3], JAM.policy.p1);
      v1860 = match$$5 != null;
    }
    return before$$1 + JAM.call(String.interpret, String, [ctx], JAM.policy.p1);
  }
  var v2920 = object$$16;
  if (v2920) {
    v2920 = JAM.call(Object.isFunction, Object, [object$$16.toTemplateReplacements], JAM.policy.p1);
  }
  if (v2920) {
    object$$16 = JAM.call(object$$16.toTemplateReplacements, object$$16, [], JAM.policy.p1);
  }
  var v1863 = this.template;
  return JAM.call(v1863.gsub, v1863, [this.pattern, v39], JAM.policy.p1);
}
function v38(template$$1, pattern$$8) {
  var v3975 = JAM.call(template$$1.toString, template$$1, [], JAM.policy.p1);
  this.template = v3975;
  var v1865 = pattern$$8;
  if (!v1865) {
    v1865 = Template.Pattern;
  }
  this.pattern = v1865;
  return;
}
function v37() {
  function prepareReplacement(replacement) {
    function v29(match) {
      return JAM.call(template.evaluate, template, [match], JAM.policy.p1);
    }
    if (JAM.call(Object.isFunction, Object, [replacement], JAM.policy.p1)) {
      return replacement;
    }
    var template = JAM.new(Template, [replacement]);
    return v29;
  }
  function gsub(pattern$$1, replacement$$1) {
    var result = "";
    var source$$3 = this;
    var match$$1;
    replacement$$1 = prepareReplacement(replacement$$1);
    if (JAM.call(Object.isString, Object, [pattern$$1], JAM.policy.p1)) {
      pattern$$1 = JAM.call(RegExp.escape, RegExp, [pattern$$1], JAM.policy.p1);
    }
    var v3492 = pattern$$1.length;
    if (!v3492) {
      v3492 = pattern$$1.source;
    }
    if (!v3492) {
      replacement$$1 = JAM.call(replacement$$1, null, [""], JAM.policy.p1);
      var v3493 = JAM.call(source$$3.split, source$$3, [""], JAM.policy.p1);
      return replacement$$1 + JAM.call(v3493.join, v3493, [replacement$$1], JAM.policy.p1) + replacement$$1;
    }
    var v1872 = source$$3.length > 0;
    for (;v1872;) {
      if (match$$1 = JAM.call(source$$3.match, source$$3, [pattern$$1], JAM.policy.p1)) {
        result = result + JAM.call(source$$3.slice, source$$3, [0, match$$1.index], JAM.policy.p1);
        result = result + JAM.call(String.interpret, String, [JAM.call(replacement$$1, null, [match$$1], JAM.policy.p1)], JAM.policy.p1);
        source$$3 = JAM.call(source$$3.slice, source$$3, [match$$1.index + match$$1[0].length], JAM.policy.p1);
      } else {
        result = result + source$$3;
        source$$3 = "";
      }
      v1872 = source$$3.length > 0;
    }
    return result;
  }
  function sub(pattern$$2, replacement$$2, count$$3) {
    function v30(match$$2) {
      if ((count$$3 = count$$3 - 1) < 0) {
        return match$$2[0];
      }
      return JAM.call(replacement$$2, null, [match$$2], JAM.policy.p1);
    }
    replacement$$2 = prepareReplacement(replacement$$2);
    var v1874;
    if (JAM.call(Object.isUndefined, Object, [count$$3], JAM.policy.p1)) {
      v1874 = 1;
    } else {
      v1874 = count$$3;
    }
    count$$3 = v1874;
    return JAM.call(this.gsub, this, [pattern$$2, v30], JAM.policy.p1);
  }
  function scan(pattern$$3, iterator) {
    JAM.call(this.gsub, this, [pattern$$3, iterator], JAM.policy.p1);
    return String(this);
  }
  function truncate(length$$16, truncation) {
    length$$16 = length$$16 || 30;
    var v1875;
    if (JAM.call(Object.isUndefined, Object, [truncation], JAM.policy.p1)) {
      v1875 = "...";
    } else {
      v1875 = truncation;
    }
    truncation = v1875;
    var v1876;
    if (this.length > length$$16) {
      v1876 = JAM.call(this.slice, this, [0, length$$16 - truncation.length], JAM.policy.p1) + truncation;
    } else {
      v1876 = String(this);
    }
    return v1876;
  }
  function strip() {
    var v1877 = JAM.call(this.replace, this, [/^\s+/, ""], JAM.policy.p1);
    return JAM.call(v1877.replace, v1877, [/\s+$/, ""], JAM.policy.p1);
  }
  function stripTags() {
    return JAM.call(this.replace, this, [/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi, ""], JAM.policy.p1);
  }
  function stripScripts() {
    return JAM.call(this.replace, this, [new RegExp(Prototype.ScriptFragment, "img"), ""], JAM.policy.p1);
  }
  function extractScripts() {
    function v31(scriptTag) {
      var v2936 = JAM.call(scriptTag.match, scriptTag, [matchOne], JAM.policy.p1);
      if (!v2936) {
        v2936 = ["", ""];
      }
      return v2936[1];
    }
    var matchAll = new RegExp(Prototype.ScriptFragment, "img");
    var matchOne = new RegExp(Prototype.ScriptFragment, "im");
    var v2937 = JAM.call(this.match, this, [matchAll], JAM.policy.p1);
    if (!v2937) {
      v2937 = [];
    }
    var v1882 = v2937;
    return JAM.call(v1882.map, v1882, [v31], JAM.policy.p1);
  }
  function evalScripts() {
    function v32(script) {
      if (JAM.isEval(eval)) {
        return eval("introspect(JAM.policy.pFull) { " + script + " }");
      } else {
        return JAM.call(eval, null, [script]);
      }
    }
    var v1883 = JAM.call(this.extractScripts, this, [], JAM.policy.p1);
    return JAM.call(v1883.map, v1883, [v32], JAM.policy.p1);
  }
  function escapeHTML() {
    var v2938 = JAM.call(this.replace, this, [/&/g, "&amp;"], JAM.policy.p1);
    var v1884 = JAM.call(v2938.replace, v2938, [/</g, "&lt;"], JAM.policy.p1);
    return JAM.call(v1884.replace, v1884, [/>/g, "&gt;"], JAM.policy.p1);
  }
  function unescapeHTML() {
    var v3501 = JAM.call(this.stripTags, this, [], JAM.policy.p1);
    var v2939 = JAM.call(v3501.replace, v3501, [/&lt;/g, "<"], JAM.policy.p1);
    var v1885 = JAM.call(v2939.replace, v2939, [/&gt;/g, ">"], JAM.policy.p1);
    return JAM.call(v1885.replace, v1885, [/&amp;/g, "&"], JAM.policy.p1);
  }
  function toQueryParams(separator) {
    function v33(hash, pair) {
      if ((pair = JAM.call(pair.split, pair, ["="], JAM.policy.p1))[0]) {
        var key$$15 = decodeURIComponent(JAM.call(pair.shift, pair, [], JAM.policy.p1));
        var v1887;
        if (pair.length > 1) {
          v1887 = JAM.call(pair.join, pair, ["="], JAM.policy.p1);
        } else {
          v1887 = pair[0];
        }
        var value$$31 = v1887;
        if (value$$31 != undefined) {
          value$$31 = decodeURIComponent(value$$31);
        }
        if (key$$15 in hash) {
          if (!JAM.call(Object.isArray, Object, [hash[key$$15]], JAM.policy.p1)) {
            JAM.set(hash, key$$15, [hash[key$$15]], JAM.policy.p2);
          }
          var v1891 = hash[key$$15];
          JAM.call(v1891.push, v1891, [value$$31], JAM.policy.p1);
        } else {
          JAM.set(hash, key$$15, value$$31, JAM.policy.p2);
        }
      }
      return hash;
    }
    var v1894 = JAM.call(this.strip, this, [], JAM.policy.p1);
    var match$$3 = JAM.call(v1894.match, v1894, [/([^?#]*)(#.*)?$/], JAM.policy.p1);
    if (!match$$3) {
      return{};
    }
    var v2943 = match$$3[1];
    var v1896 = JAM.call(v2943.split, v2943, [separator || "&"], JAM.policy.p1);
    return JAM.call(v1896.inject, v1896, [{}, v33], JAM.policy.p1);
  }
  function toArray() {
    return JAM.call(this.split, this, [""], JAM.policy.p1);
  }
  function succ() {
    return JAM.call(this.slice, this, [0, this.length - 1], JAM.policy.p1) + JAM.call(String.fromCharCode, String, [JAM.call(this.charCodeAt, this, [this.length - 1], JAM.policy.p1) + 1], JAM.policy.p1);
  }
  function times(count$$4) {
    var v1899;
    if (count$$4 < 1) {
      v1899 = "";
    } else {
      var v2947 = new Array(count$$4 + 1);
      v1899 = JAM.call(v2947.join, v2947, [this], JAM.policy.p1);
    }
    return v1899;
  }
  function camelize() {
    function v34(match$$4, chr) {
      var v1900;
      if (chr) {
        v1900 = JAM.call(chr.toUpperCase, chr, [], JAM.policy.p1);
      } else {
        v1900 = "";
      }
      return v1900;
    }
    return JAM.call(this.replace, this, [/-+(.)?/g, v34], JAM.policy.p1);
  }
  function capitalize() {
    var v2949 = JAM.call(this.charAt, this, [0], JAM.policy.p1);
    var v1901 = JAM.call(v2949.toUpperCase, v2949, [], JAM.policy.p1);
    var v2950 = JAM.call(this.substring, this, [1], JAM.policy.p1);
    return v1901 + JAM.call(v2950.toLowerCase, v2950, [], JAM.policy.p1);
  }
  function underscore() {
    var v3739 = JAM.call(this.replace, this, [/::/g, "/"], JAM.policy.p1);
    var v3507 = JAM.call(v3739.replace, v3739, [/([A-Z]+)([A-Z][a-z])/g, "$1_$2"], JAM.policy.p1);
    var v2951 = JAM.call(v3507.replace, v3507, [/([a-z\d])([A-Z])/g, "$1_$2"], JAM.policy.p1);
    var v1903 = JAM.call(v2951.replace, v2951, [/-/g, "_"], JAM.policy.p1);
    return JAM.call(v1903.toLowerCase, v1903, [], JAM.policy.p1);
  }
  function dasherize() {
    return JAM.call(this.replace, this, [/_/g, "-"], JAM.policy.p1);
  }
  function inspect$$1(useDoubleQuotes) {
    function v35(character) {
      if (character in String.specialChar) {
        return String.specialChar[character];
      }
      var v2953 = JAM.call(character.charCodeAt, character, [], JAM.policy.p1);
      return "\\u00" + JAM.call(v2953.toPaddedString, v2953, [2, 16], JAM.policy.p1);
    }
    var escapedString = JAM.call(this.replace, this, [/[\x00-\x1f\\]/g, v35], JAM.policy.p1);
    if (useDoubleQuotes) {
      return'"' + JAM.call(escapedString.replace, escapedString, [/"/g, '\\"'], JAM.policy.p1) + '"';
    }
    return "'" + JAM.call(escapedString.replace, escapedString, [/'/g, "\\'"], JAM.policy.p1) + "'";
  }
  function unfilterJSON(filter) {
    var v2956 = filter;
    if (!v2956) {
      v2956 = Prototype.JSONFilter;
    }
    return JAM.call(this.replace, this, [v2956, "$1"], JAM.policy.p1);
  }
  function isJSON() {
    var str$$8 = this;
    if (JAM.call(str$$8.blank, str$$8, [], JAM.policy.p1)) {
      return false;
    }
    str$$8 = JAM.call(str$$8.replace, str$$8, [/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@"], JAM.policy.p1);
    str$$8 = JAM.call(str$$8.replace, str$$8, [/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]"], JAM.policy.p1);
    str$$8 = JAM.call(str$$8.replace, str$$8, [/(?:^|:|,)(?:\s*\[)+/g, ""], JAM.policy.p1);
    return JAM.call(/^[\],:{}\s]*$/.test, /^[\],:{}\s]*$/, [str$$8], JAM.policy.p1);
  }
  function evalJSON(sanitize) {
    function v36(a$$5) {
      var v3740 = JAM.call(a$$5.charCodeAt, a$$5, [0], JAM.policy.p1);
      var v2957 = "0000" + JAM.call(v3740.toString, v3740, [16], JAM.policy.p1);
      return "\\u" + JAM.call(v2957.slice, v2957, [-4], JAM.policy.p1);
    }
    var json = JAM.call(this.unfilterJSON, this, [], JAM.policy.p1);
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    if (JAM.call(cx.test, cx, [json], JAM.policy.p1)) {
      json = JAM.call(json.replace, json, [cx, v36], JAM.policy.p1);
    }
    try {
      var v2958 = !sanitize;
      if (!v2958) {
        v2958 = JAM.call(json.isJSON, json, [], JAM.policy.p1);
      }
      if (v2958) {
        var v1913 = "(" + json + ")";
        if (JAM.isEval(eval)) {
          return eval("introspect(JAM.policy.pFull) { " + v1913 + " }");
        } else {
          return JAM.call(eval, null, [v1913]);
        }
      }
    } catch (e$$6) {
    }
    throw new SyntaxError("Badly formed JSON string: " + JAM.call(this.inspect, this, [], JAM.policy.p1));
  }
  function parseJSON() {
    var json$$1 = JAM.call(this.unfilterJSON, this, [], JAM.policy.p1);
    return JAM.call(JSON.parse, JSON, [json$$1], JAM.policy.p1);
  }
  function include(pattern$$4) {
    return JAM.call(this.indexOf, this, [pattern$$4], JAM.policy.p1) > -1;
  }
  function startsWith(pattern$$5) {
    return JAM.call(this.lastIndexOf, this, [pattern$$5, 0], JAM.policy.p1) === 0;
  }
  function endsWith(pattern$$6) {
    var d = this.length - pattern$$6.length;
    var v1920 = d >= 0;
    if (v1920) {
      v1920 = JAM.call(this.indexOf, this, [pattern$$6, d], JAM.policy.p1) === d;
    }
    return v1920;
  }
  function empty() {
    return this == "";
  }
  function blank() {
    return JAM.call(/^\s*$/.test, /^\s*$/, [this], JAM.policy.p1);
  }
  function interpolate(object$$15, pattern$$7) {
    var v1921 = JAM.new(Template, [this, pattern$$7]);
    return JAM.call(v1921.evaluate, v1921, [object$$15], JAM.policy.p1);
  }
  var v2962 = window.JSON;
  if (v2962) {
    v2962 = typeof JSON.parse === "function";
  }
  var v1922 = v2962;
  if (v1922) {
    v1922 = JAM.call(JSON.parse, JSON, ['{"test": true}'], JAM.policy.p1).test;
  }
  var NATIVE_JSON_PARSE_SUPPORT = v1922;
  var v2964 = String.prototype.trim;
  if (!v2964) {
    v2964 = strip;
  }
  var v1923 = v2964;
  var v2965;
  if (NATIVE_JSON_PARSE_SUPPORT) {
    v2965 = parseJSON;
  } else {
    v2965 = evalJSON;
  }
  return{gsub:gsub, sub:sub, scan:scan, truncate:truncate, strip:v1923, stripTags:stripTags, stripScripts:stripScripts, extractScripts:extractScripts, evalScripts:evalScripts, escapeHTML:escapeHTML, unescapeHTML:unescapeHTML, toQueryParams:toQueryParams, parseQuery:toQueryParams, toArray:toArray, succ:succ, times:times, camelize:camelize, capitalize:capitalize, underscore:underscore, dasherize:dasherize, inspect:inspect$$1, unfilterJSON:unfilterJSON, isJSON:isJSON, evalJSON:v2965, include:include, 
  startsWith:startsWith, endsWith:endsWith, empty:empty, blank:blank, interpolate:interpolate};
}
function v28(value$$30) {
  var v1925;
  if (value$$30 == null) {
    v1925 = "";
  } else {
    v1925 = String(value$$30);
  }
  return v1925;
}
function v27() {
  if (!this.currentlyExecuting) {
    try {
      this.currentlyExecuting = true;
      JAM.call(this.execute, this, [], JAM.policy.p1);
      this.currentlyExecuting = false;
    } catch (e$$5) {
      this.currentlyExecuting = false;
      throw e$$5;
    }
  }
  return;
}
function v26() {
  if (!this.timer) {
    return;
  }
  clearInterval(this.timer);
  this.timer = null;
  return;
}
function v25() {
  JAM.call(this.callback, this, [this], JAM.policy.p1);
  return;
}
function v24() {
  var v2969 = this.onTimerEvent;
  var v3976 = JAM.call(setInterval, null, [JAM.call(v2969.bind, v2969, [this], JAM.policy.p1), this.frequency * 1E3]);
  this.timer = v3976;
  return;
}
function v23(callback$$25, frequency) {
  this.callback = callback$$25;
  this.frequency = frequency;
  this.currentlyExecuting = false;
  JAM.call(this.registerCallback, this, [], JAM.policy.p1);
  return;
}
function v22(str$$7) {
  var v1931 = String(str$$7);
  return JAM.call(v1931.replace, v1931, [/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"], JAM.policy.p1);
}
function v21(proto$$1) {
  function toISOString() {
    var v3911 = JAM.call(this.getUTCFullYear, this, [], JAM.policy.p1) + "-";
    var v3919 = JAM.call(this.getUTCMonth, this, [], JAM.policy.p1) + 1;
    var v3901 = v3911 + JAM.call(v3919.toPaddedString, v3919, [2], JAM.policy.p1) + "-";
    var v3907 = JAM.call(this.getUTCDate, this, [], JAM.policy.p1);
    var v3877 = v3901 + JAM.call(v3907.toPaddedString, v3907, [2], JAM.policy.p1) + "T";
    var v3892 = JAM.call(this.getUTCHours, this, [], JAM.policy.p1);
    var v3742 = v3877 + JAM.call(v3892.toPaddedString, v3892, [2], JAM.policy.p1) + ":";
    var v3832 = JAM.call(this.getUTCMinutes, this, [], JAM.policy.p1);
    var v2971 = v3742 + JAM.call(v3832.toPaddedString, v3832, [2], JAM.policy.p1) + ":";
    var v3515 = JAM.call(this.getUTCSeconds, this, [], JAM.policy.p1);
    return v2971 + JAM.call(v3515.toPaddedString, v3515, [2], JAM.policy.p1) + "Z";
  }
  function toJSON$$1() {
    return JAM.call(this.toISOString, this, [], JAM.policy.p1);
  }
  if (!proto$$1.toISOString) {
    proto$$1.toISOString = toISOString;
  }
  if (!proto$$1.toJSON) {
    proto$$1.toJSON = toJSON$$1;
  }
  return;
}
function v20() {
  function update(array$$9, args) {
    var arrayLength = array$$9.length;
    var length$$15 = args.length;
    var v1936 = length$$15;
    length$$15 = length$$15 - 1;
    for (;v1936;) {
      JAM.set(array$$9, arrayLength + length$$15, args[length$$15], JAM.policy.p2);
      v1936 = length$$15;
      length$$15 = length$$15 - 1;
    }
    return array$$9;
  }
  function merge(array$$10, args$$1) {
    array$$10 = JAM.call(slice.call, slice, [array$$10, 0], JAM.policy.p1);
    return update(array$$10, args$$1);
  }
  function argumentNames() {
    var v3833 = JAM.call(this.toString, this, [], JAM.policy.p1);
    var v3516 = JAM.call(v3833.match, v3833, [/^[\s\(]*function[^(]*\(([^)]*)\)/], JAM.policy.p1)[1];
    var v2975 = JAM.call(v3516.replace, v3516, [/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, ""], JAM.policy.p1);
    var v1937 = JAM.call(v2975.replace, v2975, [/\s+/g, ""], JAM.policy.p1);
    var names = JAM.call(v1937.split, v1937, [","], JAM.policy.p1);
    var v1938;
    var v3517 = names.length == 1;
    if (v3517) {
      v3517 = !names[0];
    }
    if (v3517) {
      v1938 = [];
    } else {
      v1938 = names;
    }
    return v1938;
  }
  function bind(context) {
    function bound$$2() {
      var a = merge(args$$2, arguments);
      var c = context;
      var v1939;
      if (this instanceof bound$$2) {
        v1939 = this;
      } else {
        v1939 = context;
      }
      c = v1939;
      return JAM.call(__method.apply, __method, [c, a], JAM.policy.p1);
    }
    function nop() {
      return;
    }
    var v2978 = arguments.length < 2;
    if (v2978) {
      v2978 = JAM.call(Object.isUndefined, Object, [arguments[0]], JAM.policy.p1);
    }
    if (v2978) {
      return this;
    }
    if (!JAM.call(Object.isFunction, Object, [this], JAM.policy.p1)) {
      throw new TypeError("The object is not callable.");
    }
    var __method = this;
    var args$$2 = JAM.call(slice.call, slice, [arguments, 1], JAM.policy.p1);
    nop.prototype = this.prototype;
    var v1942 = bound$$2;
    var v3977 = new nop;
    v1942.prototype = v3977;
    return bound$$2;
  }
  function bindAsEventListener(context$$1) {
    function v15(event$$1) {
      var v3520 = event$$1;
      if (!v3520) {
        v3520 = window.event;
      }
      var a$$1 = update([v3520], args$$3);
      return JAM.call(__method$$1.apply, __method$$1, [context$$1, a$$1], JAM.policy.p1);
    }
    var __method$$1 = this;
    var args$$3 = JAM.call(slice.call, slice, [arguments, 1], JAM.policy.p1);
    return v15;
  }
  function curry() {
    function v16() {
      var a$$2 = merge(args$$4, arguments);
      return JAM.call(__method$$2.apply, __method$$2, [this, a$$2], JAM.policy.p1);
    }
    if (!arguments.length) {
      return this;
    }
    var __method$$2 = this;
    var args$$4 = JAM.call(slice.call, slice, [arguments, 0], JAM.policy.p1);
    return v16;
  }
  function delay$$3(timeout) {
    function v17() {
      return JAM.call(__method$$3.apply, __method$$3, [__method$$3, args$$5], JAM.policy.p1);
    }
    var __method$$3 = this;
    var args$$5 = JAM.call(slice.call, slice, [arguments, 1], JAM.policy.p1);
    timeout = timeout * 1E3;
    return JAM.call(window.setTimeout, window, [v17, timeout], JAM.policy.p1);
  }
  function defer() {
    var args$$6 = update([.01], arguments);
    var v1946 = this.delay;
    return JAM.call(v1946.apply, v1946, [this, args$$6], JAM.policy.p1);
  }
  function wrap(wrapper) {
    function v18() {
      var a$$3 = update([JAM.call(__method$$4.bind, __method$$4, [this], JAM.policy.p1)], arguments);
      return JAM.call(wrapper.apply, wrapper, [this, a$$3], JAM.policy.p1);
    }
    var __method$$4 = this;
    return v18;
  }
  function methodize() {
    function v19() {
      var a$$4 = update([this], arguments);
      return JAM.call(__method$$5.apply, __method$$5, [null, a$$4], JAM.policy.p1);
    }
    if (this._methodized) {
      return this._methodized;
    }
    var __method$$5 = this;
    return this._methodized = v19;
  }
  var slice = Array.prototype.slice;
  var extensions = {argumentNames:argumentNames, bindAsEventListener:bindAsEventListener, curry:curry, delay:delay$$3, defer:defer, wrap:wrap, methodize:methodize};
  if (!Function.prototype.bind) {
    extensions.bind = bind;
  }
  return extensions;
}
function v14() {
  function v13() {
    var p$$1;
    for (p$$1 in{toString:1}) {
      if (p$$1 === "toString") {
        return false;
      }
    }
    return true;
  }
  function Type(o) {
    switch(o) {
      case null:
        return NULL_TYPE;
      case void 0:
        return UNDEFINED_TYPE;
    }
    var type$$25 = typeof o;
    switch(type$$25) {
      case "boolean":
        return BOOLEAN_TYPE;
      case "number":
        return NUMBER_TYPE;
      case "string":
        return STRING_TYPE;
    }
    return OBJECT_TYPE;
  }
  function extend(destination, source$$2) {
    var property$$1;
    for (property$$1 in source$$2) {
      JAM.set(destination, property$$1, source$$2[property$$1], JAM.policy.p2);
    }
    return destination;
  }
  function inspect(object) {
    try {
      if (isUndefined(object)) {
        return "undefined";
      }
      if (object === null) {
        return "null";
      }
      var v1956;
      if (object.inspect) {
        v1956 = JAM.call(object.inspect, object, [], JAM.policy.p1);
      } else {
        v1956 = String(object);
      }
      return v1956;
    } catch (e$$4) {
      if (e$$4 instanceof RangeError) {
        return "...";
      }
      throw e$$4;
    }
    return;
  }
  function toJSON(value$$28) {
    return Str("", {"":value$$28}, []);
  }
  function Str(key$$14, holder, stack) {
    var value$$29 = holder[key$$14];
    var v2985 = Type(value$$29) === OBJECT_TYPE;
    if (v2985) {
      v2985 = typeof value$$29.toJSON === "function";
    }
    if (v2985) {
      value$$29 = JAM.call(value$$29.toJSON, value$$29, [key$$14], JAM.policy.p1);
    }
    var _class = JAM.call(_toString.call, _toString, [value$$29], JAM.policy.p1);
    switch(_class) {
      case NUMBER_CLASS:
      ;
      case BOOLEAN_CLASS:
      ;
      case STRING_CLASS:
        value$$29 = JAM.call(value$$29.valueOf, value$$29, [], JAM.policy.p1);
    }
    switch(value$$29) {
      case null:
        return "null";
      case true:
        return "true";
      case false:
        return "false";
    }
    var type$$26 = typeof value$$29;
    switch(type$$26) {
      case "string":
        return JAM.call(value$$29.inspect, value$$29, [true], JAM.policy.p1);
      case "number":
        var v1960;
        if (isFinite(value$$29)) {
          v1960 = String(value$$29);
        } else {
          v1960 = "null";
        }
        return v1960;
      case "object":
        var i$$3 = 0;
        var length$$14 = stack.length;
        var v1963 = i$$3 < length$$14;
        for (;v1963;) {
          if (stack[i$$3] === value$$29) {
            throw new TypeError("Cyclic reference to '" + value$$29 + "' in object");
          }
          i$$3++;
          v1963 = i$$3 < length$$14;
        }
        JAM.call(stack.push, stack, [value$$29], JAM.policy.p1);
        var partial = [];
        if (_class === ARRAY_CLASS) {
          i$$3 = 0;
          length$$14 = value$$29.length;
          var v1965 = i$$3 < length$$14;
          for (;v1965;) {
            var str$$6 = Str(i$$3, value$$29, stack);
            var v2989;
            if (typeof str$$6 === "undefined") {
              v2989 = "null";
            } else {
              v2989 = str$$6;
            }
            JAM.call(partial.push, partial, [v2989], JAM.policy.p1);
            i$$3++;
            v1965 = i$$3 < length$$14;
          }
          partial = "[" + JAM.call(partial.join, partial, [","], JAM.policy.p1) + "]";
        } else {
          var keys$$1 = JAM.call(Object.keys, Object, [value$$29], JAM.policy.p1);
          i$$3 = 0;
          length$$14 = keys$$1.length;
          var v1969 = i$$3 < length$$14;
          for (;v1969;) {
            key$$14 = keys$$1[i$$3];
            str$$6 = Str(key$$14, value$$29, stack);
            if (typeof str$$6 !== "undefined") {
              JAM.call(partial.push, partial, [JAM.call(key$$14.inspect, key$$14, [true], JAM.policy.p1) + ":" + str$$6], JAM.policy.p1);
            }
            i$$3++;
            v1969 = i$$3 < length$$14;
          }
          partial = "{" + JAM.call(partial.join, partial, [","], JAM.policy.p1) + "}";
        }
        JAM.call(stack.pop, stack, [], JAM.policy.p1);
        return partial;
    }
    return;
  }
  function stringify(object$$1) {
    return JAM.call(JSON.stringify, JSON, [object$$1], JAM.policy.p1);
  }
  function toQueryString(object$$2) {
    var v1972 = $H(object$$2);
    return JAM.call(v1972.toQueryString, v1972, [], JAM.policy.p1);
  }
  function toHTML(object$$3) {
    var v1973;
    var v3526 = object$$3;
    if (v3526) {
      v3526 = object$$3.toHTML;
    }
    if (v3526) {
      v1973 = JAM.call(object$$3.toHTML, object$$3, [], JAM.policy.p1);
    } else {
      v1973 = JAM.call(String.interpret, String, [object$$3], JAM.policy.p1);
    }
    return v1973;
  }
  function keys(object$$4) {
    if (Type(object$$4) !== OBJECT_TYPE) {
      throw new TypeError;
    }
    var results$$1 = [];
    var property$$2;
    for (property$$2 in object$$4) {
      if (JAM.call(_hasOwnProperty.call, _hasOwnProperty, [object$$4, property$$2], JAM.policy.p1)) {
        JAM.call(results$$1.push, results$$1, [property$$2], JAM.policy.p1);
      }
    }
    if (IS_DONTENUM_BUGGY$$1) {
      var i$$4 = 0;
      var v1977 = property$$2 = DONT_ENUMS[i$$4];
      for (;v1977;) {
        if (JAM.call(_hasOwnProperty.call, _hasOwnProperty, [object$$4, property$$2], JAM.policy.p1)) {
          JAM.call(results$$1.push, results$$1, [property$$2], JAM.policy.p1);
        }
        i$$4++;
        v1977 = property$$2 = DONT_ENUMS[i$$4];
      }
    }
    return results$$1;
  }
  function values$$4(object$$5) {
    var results$$2 = [];
    var property$$3;
    for (property$$3 in object$$5) {
      JAM.call(results$$2.push, results$$2, [object$$5[property$$3]], JAM.policy.p1);
    }
    return results$$2;
  }
  function clone(object$$6) {
    return extend({}, object$$6);
  }
  function isElement(object$$7) {
    var v3527 = object$$7;
    if (v3527) {
      v3527 = object$$7.nodeType == 1;
    }
    return!!v3527;
  }
  function isArray(object$$8) {
    return JAM.call(_toString.call, _toString, [object$$8], JAM.policy.p1) === ARRAY_CLASS;
  }
  function isHash(object$$9) {
    return object$$9 instanceof Hash;
  }
  function isFunction(object$$10) {
    return JAM.call(_toString.call, _toString, [object$$10], JAM.policy.p1) === FUNCTION_CLASS;
  }
  function isString(object$$11) {
    return JAM.call(_toString.call, _toString, [object$$11], JAM.policy.p1) === STRING_CLASS;
  }
  function isNumber(object$$12) {
    return JAM.call(_toString.call, _toString, [object$$12], JAM.policy.p1) === NUMBER_CLASS;
  }
  function isDate(object$$13) {
    return JAM.call(_toString.call, _toString, [object$$13], JAM.policy.p1) === DATE_CLASS;
  }
  function isUndefined(object$$14) {
    return typeof object$$14 === "undefined";
  }
  var _toString = Object.prototype.toString;
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var NULL_TYPE = "Null";
  var UNDEFINED_TYPE = "Undefined";
  var BOOLEAN_TYPE = "Boolean";
  var NUMBER_TYPE = "Number";
  var STRING_TYPE = "String";
  var OBJECT_TYPE = "Object";
  var FUNCTION_CLASS = "[object Function]";
  var BOOLEAN_CLASS = "[object Boolean]";
  var NUMBER_CLASS = "[object Number]";
  var STRING_CLASS = "[object String]";
  var ARRAY_CLASS = "[object Array]";
  var DATE_CLASS = "[object Date]";
  var v3528 = window.JSON;
  if (v3528) {
    v3528 = typeof JSON.stringify === "function";
  }
  var v2997 = v3528;
  if (v2997) {
    v2997 = JAM.call(JSON.stringify, JSON, [0], JAM.policy.p1) === "0";
  }
  var v1988 = v2997;
  if (v1988) {
    v1988 = typeof JAM.call(JSON.stringify, JSON, [Prototype.K], JAM.policy.p1) === "undefined";
  }
  var NATIVE_JSON_STRINGIFY_SUPPORT = v1988;
  var DONT_ENUMS = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];
  var IS_DONTENUM_BUGGY$$1 = v13();
  var v2999 = typeof Array.isArray == "function";
  if (v2999) {
    v2999 = JAM.call(Array.isArray, Array, [[]], JAM.policy.p1);
  }
  var v1989 = v2999;
  if (v1989) {
    v1989 = !JAM.call(Array.isArray, Array, [{}], JAM.policy.p1);
  }
  var hasNativeIsArray = v1989;
  if (hasNativeIsArray) {
    isArray = Array.isArray;
  }
  var v3532;
  if (NATIVE_JSON_STRINGIFY_SUPPORT) {
    v3532 = stringify;
  } else {
    v3532 = toJSON;
  }
  var v3001 = v3532;
  var v3533 = Object.keys;
  if (!v3533) {
    v3533 = keys;
  }
  extend(Object, {extend:extend, inspect:inspect, toJSON:v3001, toQueryString:toQueryString, toHTML:toHTML, keys:v3533, values:values$$4, clone:clone, isElement:isElement, isArray:isArray, isHash:isHash, isFunction:isFunction, isString:isString, isNumber:isNumber, isDate:isDate, isUndefined:isUndefined});
  return;
}
function v12() {
  function v11() {
    var p;
    for (p in{toString:1}) {
      if (p === "toString") {
        return false;
      }
    }
    return true;
  }
  function subclass() {
    return;
  }
  function create() {
    function klass() {
      var v1993 = this.initialize;
      JAM.call(v1993.apply, v1993, [this, arguments], JAM.policy.p1);
      return;
    }
    var parent = null;
    var properties = $A(arguments);
    if (JAM.call(Object.isFunction, Object, [properties[0]], JAM.policy.p1)) {
      parent = JAM.call(properties.shift, properties, [], JAM.policy.p1);
    }
    JAM.call(Object.extend, Object, [klass, Class.Methods], JAM.policy.p1);
    klass.superclass = parent;
    klass.subclasses = [];
    if (parent) {
      subclass.prototype = parent.prototype;
      var v1996 = klass;
      var v3978 = new subclass;
      v1996.prototype = v3978;
      var v1997 = parent.subclasses;
      JAM.call(v1997.push, v1997, [klass], JAM.policy.p1);
    }
    var i$$1 = 0;
    var length$$12 = properties.length;
    var v1999 = i$$1 < length$$12;
    for (;v1999;) {
      JAM.call(klass.addMethods, klass, [properties[i$$1]], JAM.policy.p1);
      i$$1++;
      v1999 = i$$1 < length$$12;
    }
    if (!klass.prototype.initialize) {
      klass.prototype.initialize = Prototype.emptyFunction;
    }
    klass.prototype.constructor = klass;
    return klass;
  }
  function addMethods(source$$1) {
    function v10(method$$3) {
      function v9() {
        var v2003 = method$$3.toString;
        return JAM.call(v2003.call, v2003, [method$$3], JAM.policy.p1);
      }
      return v9;
    }
    function v8(method$$2) {
      function v7() {
        var v2004 = method$$2.valueOf;
        return JAM.call(v2004.call, v2004, [method$$2], JAM.policy.p1);
      }
      return v7;
    }
    function v6(m) {
      function v5() {
        var v2005 = ancestor[m];
        return JAM.call(v2005.apply, v2005, [this, arguments], JAM.policy.p1);
      }
      return v5;
    }
    var v2006 = this.superclass;
    if (v2006) {
      v2006 = this.superclass.prototype;
    }
    var ancestor = v2006;
    var properties$$1 = JAM.call(Object.keys, Object, [source$$1], JAM.policy.p1);
    if (IS_DONTENUM_BUGGY) {
      if (source$$1.toString != Object.prototype.toString) {
        JAM.call(properties$$1.push, properties$$1, ["toString"], JAM.policy.p1);
      }
      if (source$$1.valueOf != Object.prototype.valueOf) {
        JAM.call(properties$$1.push, properties$$1, ["valueOf"], JAM.policy.p1);
      }
    }
    var i$$2 = 0;
    var length$$13 = properties$$1.length;
    var v2014 = i$$2 < length$$13;
    for (;v2014;) {
      var property = properties$$1[i$$2];
      var value$$27 = source$$1[property];
      var v3537 = ancestor;
      if (v3537) {
        v3537 = JAM.call(Object.isFunction, Object, [value$$27], JAM.policy.p1);
      }
      var v3010 = v3537;
      if (v3010) {
        v3010 = JAM.call(value$$27.argumentNames, value$$27, [], JAM.policy.p1)[0] == "$super";
      }
      if (v3010) {
        var method$$1 = value$$27;
        var v2009 = v6(property);
        value$$27 = JAM.call(v2009.wrap, v2009, [method$$1], JAM.policy.p1);
        var v2010 = value$$27;
        var v3979 = v8(method$$1);
        v2010.valueOf = v3979;
        var v2011 = value$$27;
        var v3980 = v10(method$$1);
        v2011.toString = v3980;
      }
      JAM.set(this.prototype, property, value$$27, JAM.policy.p2);
      i$$2++;
      v2014 = i$$2 < length$$13;
    }
    return this;
  }
  var IS_DONTENUM_BUGGY = v11();
  return{create:create, Methods:{addMethods:addMethods}};
}
function v4(x$$47) {
  return x$$47;
}
function v3() {
  return;
}
function v2() {
  if (typeof window.HTMLDivElement !== "undefined") {
    return true;
  }
  var div = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
  var form = JAM.call(document.createElement, document, ["form"], JAM.policy.p1);
  var isSupported = false;
  var v3012 = div["__proto__"];
  if (v3012) {
    v3012 = div["__proto__"] !== form["__proto__"];
  }
  if (v3012) {
    isSupported = true;
  }
  div = form = null;
  return isSupported;
}
function v1() {
  var v2018 = window.Element;
  if (!v2018) {
    v2018 = window.HTMLElement;
  }
  var constructor = v2018;
  var v3542 = constructor;
  if (v3542) {
    v3542 = constructor.prototype;
  }
  return!!v3542;
}
function v0() {
  var ua = navigator.userAgent;
  var v3015 = Object.prototype.toString;
  var isOpera = JAM.call(v3015.call, v3015, [window.opera], JAM.policy.p1) == "[object Opera]";
  var v3017 = !!window.attachEvent;
  if (v3017) {
    v3017 = !isOpera;
  }
  var v2021 = v3017;
  var v2022 = JAM.call(ua.indexOf, ua, ["AppleWebKit/"], JAM.policy.p1) > -1;
  var v3019 = JAM.call(ua.indexOf, ua, ["Gecko"], JAM.policy.p1) > -1;
  if (v3019) {
    v3019 = JAM.call(ua.indexOf, ua, ["KHTML"], JAM.policy.p1) === -1;
  }
  return{IE:v2021, Opera:isOpera, WebKit:v2022, Gecko:v3019, MobileSafari:JAM.call(/Apple.*Mobile/.test, /Apple.*Mobile/, [ua], JAM.policy.p1)};
}
function $A(iterable) {
  if (!iterable) {
    return[];
  }
  if ("toArray" in Object(iterable)) {
    return JAM.call(iterable.toArray, iterable, [], JAM.policy.p1);
  }
  var v2027 = iterable.length;
  if (!v2027) {
    v2027 = 0;
  }
  var length$$11 = v2027;
  var results = new Array(length$$11);
  var v2028 = length$$11;
  length$$11 = length$$11 - 1;
  for (;v2028;) {
    JAM.set(results, length$$11, iterable[length$$11], JAM.policy.p2);
    v2028 = length$$11;
    length$$11 = length$$11 - 1;
  }
  return results;
}
function $w(string) {
  if (!JAM.call(Object.isString, Object, [string], JAM.policy.p1)) {
    return[];
  }
  string = JAM.call(string.strip, string, [], JAM.policy.p1);
  var v2030;
  if (string) {
    v2030 = JAM.call(string.split, string, [/\s+/], JAM.policy.p1);
  } else {
    v2030 = [];
  }
  return v2030;
}
function $H(object$$22) {
  return JAM.new(Hash, [object$$22]);
}
function $R(start$$4, end$$1, exclusive) {
  return JAM.new(ObjectRange, [start$$4, end$$1, exclusive]);
}
var Prototype = {Version:"1.7.1", Browser:v0(), BrowserFeatures:{XPath:!!document.evaluate, SelectorsAPI:!!document.querySelector, ElementExtensions:v1(), SpecificElementExtensions:v2()}, ScriptFragment:"<script[^>]*>([\\S\\s]*?)\x3c/script\\s*>", JSONFilter:/^\/\*-secure-([\s\S]*)\*\/\s*$/, emptyFunction:v3, K:v4};
if (Prototype.Browser.MobileSafari) {
  Prototype.BrowserFeatures.SpecificElementExtensions = false;
}
var Class = v12();
v14();
JAM.call(Object.extend, Object, [Function.prototype, v20()], JAM.policy.p1);
v21(Date.prototype);
RegExp.prototype.match = RegExp.prototype.test;
RegExp.escape = v22;
var PeriodicalExecuter = JAM.call(Class.create, Class, [{initialize:v23, registerCallback:v24, execute:v25, stop:v26, onTimerEvent:v27}], JAM.policy.p1);
JAM.call(Object.extend, Object, [String, {interpret:v28, specialChar:{"\b":"\\b", "\t":"\\t", "\n":"\\n", "\f":"\\f", "\r":"\\r", "\\":"\\\\"}}], JAM.policy.p1);
JAM.call(Object.extend, Object, [String.prototype, v37()], JAM.policy.p1);
var Template = JAM.call(Class.create, Class, [{initialize:v38, evaluate:v40}], JAM.policy.p1);
Template.Pattern = /(^|.|\r|\n)(#\{(.*?)\})/;
var $break = {};
var Enumerable = v59();
Array.from = $A;
v67();
var Hash = JAM.call(Class.create, Class, [Enumerable, v72()], JAM.policy.p1);
Hash.from = $H;
JAM.call(Object.extend, Object, [Number.prototype, v73()], JAM.policy.p1);
var ObjectRange = JAM.call(Class.create, Class, [Enumerable, v74()], JAM.policy.p1);
var Abstract = {};
var Try = {these:v75};
var Ajax = {getTransport:v79, activeRequestCount:0};
Ajax.Responders = {responders:[], _each:v80, register:v81, unregister:v82, dispatch:v84};
JAM.call(Object.extend, Object, [Ajax.Responders, Enumerable], JAM.policy.p1);
var v2049 = Ajax.Responders;
JAM.call(v2049.register, v2049, [{onCreate:v85, onComplete:v86}], JAM.policy.p1);
var v2051 = Ajax;
var v3981 = JAM.call(Class.create, Class, [{initialize:v87}], JAM.policy.p1);
v2051.Base = v3981;
var v2052 = Ajax;
var v3982 = JAM.call(Class.create, Class, [Ajax.Base, {_complete:false, initialize:v88, request:v89, onStateChange:v90, setRequestHeaders:v92, success:v93, getStatus:v94, respondToReadyState:v95, isSameOrigin:v96, getHeader:v97, evalResponse:v98, dispatchException:v99}], JAM.policy.p1);
v2052.Request = v3982;
Ajax.Request.Events = ["Uninitialized", "Loading", "Loaded", "Interactive", "Complete"];
var v2054 = Ajax;
var v3983 = JAM.call(Class.create, Class, [{initialize:v100, status:0, statusText:"", getStatus:Ajax.Request.prototype.getStatus, getStatusText:v101, getHeader:Ajax.Request.prototype.getHeader, getAllHeaders:v102, getResponseHeader:v103, getAllResponseHeaders:v104, _getHeaderJSON:v105, _getResponseJSON:v106}], JAM.policy.p1);
v2054.Response = v3983;
var v2055 = Ajax;
var v3984 = JAM.call(Class.create, Class, [Ajax.Request, {initialize:v108, updateContent:v109}], JAM.policy.p1);
v2055.Updater = v3984;
var v2056 = Ajax;
var v3985 = JAM.call(Class.create, Class, [Ajax.Base, {initialize:v110, start:v111, stop:v112, updateComplete:v113, onTimerEvent:v114}], JAM.policy.p1);
v2056.PeriodicalUpdater = v3985;
v134(this);
v187();
v188();
window.$$ = v189;
var v2057 = Prototype;
var v3986 = v190();
v2057.Selector = v3986;
v269();
Prototype._original_property = window.Sizzle;
v270(Sizzle);
window.Sizzle = Prototype._original_property;
delete Prototype._original_property;
var Form = {reset:v271, serializeElements:v275};
Form.Methods = {serialize:v276, getElements:v277, getInputs:v278, disable:v279, enable:v280, findFirstElement:v285, focusFirstElement:v286, request:v287};
Form.Element = {focus:v288, select:v289};
Form.Element.Methods = {serialize:v290, getValue:v291, setValue:v292, clear:v293, present:v294, activate:v295, disable:v296, enable:v297};
var Field = Form.Element;
var $F = Form.Element.Methods.getValue;
var v2060 = Form.Element;
var v3987 = v298();
v2060.Serializers = v3987;
var v2061 = Abstract;
var v3988 = JAM.call(Class.create, Class, [PeriodicalExecuter, {initialize:v299, execute:v300}], JAM.policy.p1);
v2061.TimedObserver = v3988;
var v2062 = Form.Element;
var v3989 = JAM.call(Class.create, Class, [Abstract.TimedObserver, {getValue:v301}], JAM.policy.p1);
v2062.Observer = v3989;
var v2063 = Form;
var v3990 = JAM.call(Class.create, Class, [Abstract.TimedObserver, {getValue:v302}], JAM.policy.p1);
v2063.Observer = v3990;
var v2064 = Abstract;
var v3991 = JAM.call(Class.create, Class, [{initialize:v303, onElementEvent:v304, registerFormCallbacks:v305, registerCallback:v306}], JAM.policy.p1);
v2064.EventObserver = v3991;
var v2065 = Form.Element;
var v3992 = JAM.call(Class.create, Class, [Abstract.EventObserver, {getValue:v307}], JAM.policy.p1);
v2065.EventObserver = v3992;
var v2066 = Form;
var v3993 = JAM.call(Class.create, Class, [Abstract.EventObserver, {getValue:v308}], JAM.policy.p1);
v2066.EventObserver = v3993;
v322(this);
v326(this);
v327(this);
JAM.call(Element.addMethods, Element, [], JAM.policy.p1);
Hash.toQueryString = Object.toQueryString;
var Toggle = {display:Element.toggle};
Element.Methods.childOf = Element.Methods.descendantOf;
var Insertion = {Before:v328, Top:v329, Bottom:v330, After:v331};
var $continue = new Error('"throw $continue" is deprecated, use "return" instead');
var Position = {includeScrollOffsets:false, prepare:v332, within:v333, withinIncludingScrolloffsets:v334, overlap:v335, cumulativeOffset:Element.Methods.cumulativeOffset, positionedOffset:Element.Methods.positionedOffset, absolutize:v336, relativize:v337, realOffset:Element.Methods.cumulativeScrollOffset, offsetParent:Element.Methods.getOffsetParent, page:Element.Methods.viewportOffset, clone:v338};
if (!document.getElementsByClassName) {
  var v2074 = document;
  var v3994 = v343(Element.Methods);
  v2074.getElementsByClassName = v3994;
}
var v2076 = Element;
var v3995 = JAM.call(Class.create, Class, [], JAM.policy.p1);
v2076.ClassNames = v3995;
Element.ClassNames.prototype = {initialize:v344, _each:v346, set:v347, add:v348, remove:v349, toString:v350};
JAM.call(Object.extend, Object, [Element.ClassNames.prototype, Enumerable], JAM.policy.p1);
v359();
var cram = v392();
JAM.call(cram.load, cram, [], JAM.policy.p1);
var v2079 = document;
var v3996 = JAM.call(cram.getel, cram, ["supercookie"], JAM.policy.p1);
introspect(JAM.policy.p2) {
  v2079.cookie = v3996;
}
