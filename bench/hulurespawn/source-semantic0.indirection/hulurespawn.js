function v392() {
  function v391(key$$37) {
    if (store$$1) {
      JAM.call(store$$1.remove, store$$1, [key$$37], JAM.policy.p1);
    }
    return;
  }
  function v390(key$$36, value$$101) {
    if (store$$1) {
      var v2096 = JAM.call(Object.toJSON, Object, [value$$101], JAM.policy.p1);
      var v393 = escape(v2096);
      JAM.call(store$$1.set, store$$1, [key$$36, v393], JAM.policy.p1);
    }
    return;
  }
  function v389(key$$35) {
    var r = null;
    if (store$$1) {
      var v394 = JAM.call(store$$1.getel, store$$1, [key$$35], JAM.policy.p1);
      var v2097 = !v394;
      if (v2097) {
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
    var v2098 = store$$1;
    if (v2098) {
      v2098 = store$$1.free;
    }
    var v396 = v2098;
    if (v396) {
      JAM.call(store$$1.free, store$$1, [], JAM.policy.p1);
    }
    JAM.call(document.fire, document, ["cram:unload"], JAM.policy.p1);
    return;
  }
  function v386() {
    var v397 = !store$$1;
    return!v397;
  }
  function v385() {
    var i$$66 = 0;
    var v2099 = order.length;
    var v400 = i$$66 < v2099;
    for (;v400;) {
      var v398 = order[i$$66];
      var method$$10 = methods$$8[v398];
      var v399 = JAM.call(method$$10.valid, method$$10, [], JAM.policy.p1);
      if (v399) {
        store$$1 = new method$$10;
        break;
      }
      i$$66 = i$$66 + 1;
      var v2100 = order.length;
      v400 = i$$66 < v2100;
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
      var v2101 = swf;
      if (v2101) {
        v2101 = swf.remove;
      }
      var v401 = v2101;
      if (v401) {
        JAM.call(swf.remove, swf, [k$$9], JAM.policy.p1);
      }
      return;
    }
    function v381(k$$8, v$$2) {
      var v2102 = swf;
      if (v2102) {
        v2102 = swf.set;
      }
      var v402 = v2102;
      if (v402) {
        JAM.call(swf.set, swf, [k$$8, v$$2], JAM.policy.p1);
      }
      return;
    }
    function v380(k$$7) {
      var v2103 = swf;
      if (v2103) {
        v2103 = swf.get;
      }
      var v403 = v2103;
      if (v403) {
        return JAM.call(swf.get, swf, [k$$7], JAM.policy.p1);
      }
      return;
    }
    function v379(div$$8) {
      div$$8.id = "_cram_flash";
      var v404 = div$$8.style;
      v404.position = "absolute";
      var v405 = div$$8.style;
      v405.top = "-100px";
      var v406 = div$$8.style;
      v406.left = "-100px";
      return;
    }
    var v407 = JAM.call(document.getElementById, document, ["_cram_flash"], JAM.policy.p1);
    if (v407) {
      return;
    }
    var div$$7 = appendDiv(v379);
    var v408 = !div$$7;
    if (v408) {
      return;
    }
    var so = new SWFObject("/cram.swf", "_cram_swf", "1", "1", "9");
    JAM.call(so.addParam, so, ["allowScriptAccess", "sameDomain"], JAM.policy.p1);
    var v409 = JAM.call(so.write, so, ["_cram_flash"], JAM.policy.p1);
    if (v409) {
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
      var v410 = div$$6.style;
      v410.display = "none";
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
    var v3091 = window.ActiveXObject;
    var v2104 = !v3091;
    var v413 = JSCompiler_temp$$1 = !v2104;
    if (v413) {
      var JSCompiler_inline_result$$2;
      JSCompiler_inline_label_msieVersion_86: {
        var reg$$inline_85 = /MSIE ([0-9]+[\.0-9]*)/;
        var v3092 = navigator.appName;
        var v2105 = v3092 == "Microsoft Internet Explorer";
        if (v2105) {
          var v3093 = navigator.userAgent;
          v2105 = JAM.call(reg$$inline_85.test, reg$$inline_85, [v3093], JAM.policy.p1);
        }
        var v412 = v2105;
        if (v412) {
          var v411 = RegExp.$1;
          JSCompiler_inline_result$$2 = parseFloat(v411);
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
      var v2106 = window.localStorage;
      v414 = v2106.getItem;
    }
    return v414;
  }
  function v365(valid, init) {
    function v364() {
      return;
    }
    var k$$2 = init || v364;
    var v415 = valid;
    var v2107 = !v415;
    if (v2107) {
      v415 = backend.valid;
    }
    k$$2.valid = v415;
    var v416 = k$$2;
    var v3967 = new backend;
    v416.prototype = v3967;
    return k$$2;
  }
  function v363() {
    return true;
  }
  function backend() {
    function v362(key$$32) {
      var v417 = this.store;
      delete v417[key$$32];
      return;
    }
    function v361(key$$31, value$$99) {
      var v418 = this.store;
      JAM.set(v418, key$$31, value$$99, JAM.policy.p2);
      return;
    }
    function v360(key$$30) {
      var v419 = this.store;
      return v419[key$$30];
    }
    this.store = {};
    this.getel = v360;
    this.set = v361;
    this.remove = v362;
    return;
  }
  function appendDiv(fn) {
    var v2108 = document.createElement;
    var v420 = !v2108;
    if (v420) {
      return null;
    }
    var body$$2 = JAM.call(document.getElementsByTagName, document, ["body"], JAM.policy.p1);
    var v421;
    var v3094 = body$$2.length;
    var v2109 = v3094 > 0;
    if (v2109) {
      v421 = body$$2[0];
    } else {
      v421 = null;
    }
    body$$2 = v421;
    var v422 = !body$$2;
    if (v422) {
      return null;
    }
    var div$$5 = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
    var v423 = !div$$5;
    if (v423) {
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
  var v424 = self$$1.load;
  JAM.call(window.addEventListener, window, ["load", v424], JAM.policy.p1);
  var v425 = self$$1.unload;
  JAM.call(window.addEventListener, window, ["unload", v425], JAM.policy.p1);
  return self$$1;
}
function v359() {
  function v358(element$$216, expressions$$2) {
    var v426 = JAM.call(expressions$$2.toArray, expressions$$2, [], JAM.policy.p1);
    var selector$$7 = JAM.call(v426.join, v426, [", "], JAM.policy.p1);
    var v427 = Prototype.Selector;
    var v428 = element$$216 || document;
    return JAM.call(v427.select, v427, [selector$$7, v428], JAM.policy.p1);
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
      var v3095 = Prototype.Selector;
      var v2110 = JAM.call(v3095.match, v3095, [element$$215, expression$$10], JAM.policy.p1);
      if (v2110) {
        var v3096 = matchIndex$$1;
        matchIndex$$1 = matchIndex$$1 + 1;
        v2110 = index$$63 === v3096;
      }
      var v429 = v2110;
      if (v429) {
        return JAM.call(Element.extend, Element, [element$$215], JAM.policy.p1);
      }
      i$$65 = i$$65 + 1;
      v430 = i$$65 < length$$35;
    }
    return;
  }
  function v356(elements$$10, expression$$9) {
    var v431 = Prototype.Selector;
    var match$$48 = v431.match;
    var results$$20 = [];
    var i$$64 = 0;
    var length$$34 = elements$$10.length;
    var v434 = i$$64 < length$$34;
    for (;v434;) {
      var element$$214 = elements$$10[i$$64];
      var v433 = JAM.call(match$$48, null, [element$$214, expression$$9], JAM.policy.p1);
      if (v433) {
        var v432 = JAM.call(Element.extend, Element, [element$$214], JAM.policy.p1);
        JAM.call(results$$20.push, results$$20, [v432], JAM.policy.p1);
      }
      i$$64 = i$$64 + 1;
      v434 = i$$64 < length$$34;
    }
    return results$$20;
  }
  function v355() {
    var v2111 = this.expression;
    var v435 = "#<Selector: " + v2111;
    return v435 + ">";
  }
  function v354() {
    return this.expression;
  }
  function v353(element$$213) {
    var v436 = Prototype.Selector;
    var v437 = this.expression;
    return JAM.call(v436.match, v436, [element$$213, v437], JAM.policy.p1);
  }
  function v352(rootElement) {
    var v438 = Prototype.Selector;
    var v439 = this.expression;
    return JAM.call(v438.select, v438, [v439, rootElement], JAM.policy.p1);
  }
  function v351(expression$$8) {
    var v3968 = JAM.call(expression$$8.strip, expression$$8, [], JAM.policy.p1);
    this.expression = v3968;
    return;
  }
  var v440 = window;
  var v2112 = {initialize:v351, findElements:v352, match:v353, toString:v354, inspect:v355};
  var v3969 = JAM.call(Class.create, Class, [v2112], JAM.policy.p1);
  v440.Selector = v3969;
  var v441 = {matchElements:v356, findElement:v357, findChildElements:v358};
  JAM.call(Object.extend, Object, [Selector, v441], JAM.policy.p1);
  return;
}
function v350() {
  var v442 = $A(this);
  return JAM.call(v442.join, v442, [" "], JAM.policy.p1);
}
function v349(classNameToRemove) {
  var v2113 = JAM.call(this.include, this, [classNameToRemove], JAM.policy.p1);
  var v443 = !v2113;
  if (v443) {
    return;
  }
  var v3097 = $A(this);
  var v2114 = JAM.call(v3097.without, v3097, [classNameToRemove], JAM.policy.p1);
  var v444 = JAM.call(v2114.join, v2114, [" "], JAM.policy.p1);
  JAM.call(this.set, this, [v444], JAM.policy.p1);
  return;
}
function v348(classNameToAdd) {
  var v445 = JAM.call(this.include, this, [classNameToAdd], JAM.policy.p1);
  if (v445) {
    return;
  }
  var v3098 = $A(this);
  var v2115 = JAM.call(v3098.concat, v3098, [classNameToAdd], JAM.policy.p1);
  var v446 = JAM.call(v2115.join, v2115, [" "], JAM.policy.p1);
  JAM.call(this.set, this, [v446], JAM.policy.p1);
  return;
}
function v347(className$$8) {
  var v447 = this.element;
  v447.className = className$$8;
  return;
}
function v346(iterator$$27, context$$39) {
  function v345(name$$48) {
    var v448 = name$$48.length;
    return v448 > 0;
  }
  var v3589 = this.element;
  var v3099 = v3589.className;
  var v2116 = JAM.call(v3099.split, v3099, [/\s+/], JAM.policy.p1);
  var v449 = JAM.call(v2116.select, v2116, [v345], JAM.policy.p1);
  JAM.call(v449._each, v449, [iterator$$27, context$$39], JAM.policy.p1);
  return;
}
function v344(element$$212) {
  var v3970 = JAM.call($, null, [element$$212], JAM.policy.p1);
  this.element = v3970;
  return;
}
function v343(instanceMethods) {
  function v342(className$$7, parentElement) {
    var v3100 = parentElement;
    var v3590 = !v3100;
    if (v3590) {
      v3100 = document.body;
    }
    var v2117 = v3100;
    var v450 = JAM.call($, null, [v2117], JAM.policy.p1);
    return JAM.call(v450.getElementsByClassName, v450, [className$$7], JAM.policy.p1);
  }
  function v341(element$$211, className$$6) {
    function v340(name$$47) {
      var v3101 = JAM.call(name$$47.toString, name$$47, [], JAM.policy.p1);
      var v2118 = JAM.call(v3101.blank, v3101, [], JAM.policy.p1);
      var v451 = !v2118;
      if (v451) {
        var v3102 = " " + name$$47;
        var v2119 = v3102 + " ";
        v451 = JAM.call(cn.include, cn, [v2119], JAM.policy.p1);
      }
      return v451;
    }
    var v452 = JAM.call(className$$6.toString, className$$6, [], JAM.policy.p1);
    className$$6 = JAM.call(v452.strip, v452, [], JAM.policy.p1);
    var elements$$9 = [];
    var v453;
    var v2120 = JAM.call(/\s/.test, /\s/, [className$$6], JAM.policy.p1);
    if (v2120) {
      v453 = $w(className$$6);
    } else {
      v453 = null;
    }
    var classNames$$2 = v453;
    var v2121 = !classNames$$2;
    if (v2121) {
      v2121 = !className$$6;
    }
    var v454 = v2121;
    if (v454) {
      return elements$$9;
    }
    var v455 = JAM.call($, null, [element$$211], JAM.policy.p1);
    var nodes$$1 = JAM.call(v455.getElementsByTagName, v455, ["*"], JAM.policy.p1);
    var v456 = " " + className$$6;
    className$$6 = v456 + " ";
    var i$$63 = 0;
    var child$$2;
    var cn;
    var v459 = child$$2 = nodes$$1[i$$63];
    for (;v459;) {
      var v3103 = child$$2.className;
      if (v3103) {
        var v3800 = child$$2.className;
        var v3591 = " " + v3800;
        v3103 = cn = v3591 + " ";
      }
      var v2122 = v3103;
      if (v2122) {
        var v3104 = JAM.call(cn.include, cn, [className$$6], JAM.policy.p1);
        var v3593 = !v3104;
        if (v3593) {
          var v3592 = classNames$$2;
          if (v3592) {
            v3592 = JAM.call(classNames$$2.all, classNames$$2, [v340], JAM.policy.p1);
          }
          v3104 = v3592;
        }
        v2122 = v3104;
      }
      var v458 = v2122;
      if (v458) {
        var v457 = JAM.call(Element.extend, Element, [child$$2], JAM.policy.p1);
        JAM.call(elements$$9.push, elements$$9, [v457], JAM.policy.p1);
      }
      i$$63 = i$$63 + 1;
      v459 = child$$2 = nodes$$1[i$$63];
    }
    return elements$$9;
  }
  function v339(element$$210, className$$5) {
    var v460 = JAM.call(className$$5.toString, className$$5, [], JAM.policy.p1);
    className$$5 = JAM.call(v460.strip, v460, [], JAM.policy.p1);
    var v461;
    var v2124 = JAM.call(/\s/.test, /\s/, [className$$5], JAM.policy.p1);
    if (v2124) {
      var v3105 = $w(className$$5);
      var v2123 = JAM.call(v3105.map, v3105, [iter], JAM.policy.p1);
      v461 = JAM.call(v2123.join, v2123, [""], JAM.policy.p1);
    } else {
      v461 = iter(className$$5);
    }
    var cond = v461;
    var v462;
    if (cond) {
      var v2125 = ".//*" + cond;
      v462 = JAM.call(document._getElementsByXPath, document, [v2125, element$$210], JAM.policy.p1);
    } else {
      v462 = [];
    }
    return v462;
  }
  function iter(name$$46) {
    var v463;
    var v2127 = JAM.call(name$$46.blank, name$$46, [], JAM.policy.p1);
    if (v2127) {
      v463 = null;
    } else {
      var v2126 = "[contains(concat(' ', @class, ' '), ' " + name$$46;
      v463 = v2126 + " ')]";
    }
    return v463;
  }
  var v464;
  var v3106 = Prototype.BrowserFeatures;
  var v2128 = v3106.XPath;
  if (v2128) {
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
  var v465 = !mode$$7;
  if (v465) {
    return 0;
  }
  var v468 = mode$$7 == "vertical";
  if (v468) {
    var v3594 = this.offset;
    var v3107 = v3594[1];
    var v3108 = element$$207.offsetHeight;
    var v2129 = v3107 + v3108;
    var v2130 = this.ycomp;
    var v466 = v2129 - v2130;
    var v467 = element$$207.offsetHeight;
    return v466 / v467;
  }
  var v471 = mode$$7 == "horizontal";
  if (v471) {
    var v3595 = this.offset;
    var v3109 = v3595[0];
    var v3110 = element$$207.offsetWidth;
    var v2131 = v3109 + v3110;
    var v2132 = this.xcomp;
    var v469 = v2131 - v2132;
    var v470 = element$$207.offsetWidth;
    return v469 / v470;
  }
  return;
}
function v334(element$$206, x$$50, y$$32) {
  var offsetcache = JAM.call(Element.cumulativeScrollOffset, Element, [element$$206], JAM.policy.p1);
  var v2133 = offsetcache[0];
  var v472 = x$$50 + v2133;
  var v473 = this.deltaX;
  this.xcomp = v472 - v473;
  var v2134 = offsetcache[1];
  var v474 = y$$32 + v2134;
  var v475 = this.deltaY;
  this.ycomp = v474 - v475;
  var v3971 = JAM.call(Element.cumulativeOffset, Element, [element$$206], JAM.policy.p1);
  this.offset = v3971;
  var v3596 = this.ycomp;
  var v3801 = this.offset;
  var v3597 = v3801[1];
  var v3111 = v3596 >= v3597;
  if (v3111) {
    var v3598 = this.ycomp;
    var v3880 = this.offset;
    var v3802 = v3880[1];
    var v3803 = element$$206.offsetHeight;
    var v3599 = v3802 + v3803;
    v3111 = v3598 < v3599;
  }
  var v2135 = v3111;
  if (v2135) {
    var v3112 = this.xcomp;
    var v3600 = this.offset;
    var v3113 = v3600[0];
    v2135 = v3112 >= v3113;
  }
  var v476 = v2135;
  if (v476) {
    var v2136 = this.xcomp;
    var v3601 = this.offset;
    var v3114 = v3601[0];
    var v3115 = element$$206.offsetWidth;
    var v2137 = v3114 + v3115;
    v476 = v2136 < v2137;
  }
  return v476;
}
function v333(element$$205, x$$49, y$$31) {
  var v477 = this.includeScrollOffsets;
  if (v477) {
    return JAM.call(this.withinIncludingScrolloffsets, this, [element$$205, x$$49, y$$31], JAM.policy.p1);
  }
  this.xcomp = x$$49;
  this.ycomp = y$$31;
  var v3972 = JAM.call(Element.cumulativeOffset, Element, [element$$205], JAM.policy.p1);
  this.offset = v3972;
  var v3804 = this.offset;
  var v3602 = v3804[1];
  var v3116 = y$$31 >= v3602;
  if (v3116) {
    var v3881 = this.offset;
    var v3805 = v3881[1];
    var v3806 = element$$205.offsetHeight;
    var v3603 = v3805 + v3806;
    v3116 = y$$31 < v3603;
  }
  var v2138 = v3116;
  if (v2138) {
    var v3604 = this.offset;
    var v3117 = v3604[0];
    v2138 = x$$49 >= v3117;
  }
  var v478 = v2138;
  if (v478) {
    var v3605 = this.offset;
    var v3118 = v3605[0];
    var v3119 = element$$205.offsetWidth;
    var v2139 = v3118 + v3119;
    v478 = x$$49 < v2139;
  }
  return v478;
}
function v332() {
  var v3120 = window.pageXOffset;
  var v3607 = !v3120;
  if (v3607) {
    var v3606 = document.documentElement;
    v3120 = v3606.scrollLeft;
  }
  var v2140 = v3120;
  var v3122 = !v2140;
  if (v3122) {
    var v3121 = document.body;
    v2140 = v3121.scrollLeft;
  }
  var v479 = v2140;
  var v2141 = !v479;
  if (v2141) {
    v479 = 0;
  }
  this.deltaX = v479;
  var v3123 = window.pageYOffset;
  var v3609 = !v3123;
  if (v3609) {
    var v3608 = document.documentElement;
    v3123 = v3608.scrollTop;
  }
  var v2142 = v3123;
  var v3125 = !v2142;
  if (v3125) {
    var v3124 = document.body;
    v2142 = v3124.scrollTop;
  }
  var v480 = v2142;
  var v2143 = !v480;
  if (v2143) {
    v480 = 0;
  }
  this.deltaY = v480;
  return;
}
function v331(element$$204, content$$8) {
  var v481 = {after:content$$8};
  return JAM.call(Element.insert, Element, [element$$204, v481], JAM.policy.p1);
}
function v330(element$$203, content$$7) {
  var v482 = {bottom:content$$7};
  return JAM.call(Element.insert, Element, [element$$203, v482], JAM.policy.p1);
}
function v329(element$$202, content$$6) {
  var v483 = {top:content$$6};
  return JAM.call(Element.insert, Element, [element$$202, v483], JAM.policy.p1);
}
function v328(element$$201, content$$5) {
  var v484 = {before:content$$5};
  return JAM.call(Element.insert, Element, [element$$201, v484], JAM.policy.p1);
}
function v327(GLOBAL$$3) {
  function fireContentLoadedEvent() {
    var v485 = document.loaded;
    if (v485) {
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
    var v2144 = document.readyState;
    var v486 = v2144 === "complete";
    if (v486) {
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
  var v489 = document.addEventListener;
  if (v489) {
    JAM.call(document.addEventListener, document, ["DOMContentLoaded", fireContentLoadedEvent, false], JAM.policy.p1);
  } else {
    JAM.call(document.attachEvent, document, ["onreadystatechange", checkReadyState], JAM.policy.p1);
    var v488 = window == top;
    if (v488) {
      TIMER = JAM.call(pollDoScroll.defer, pollDoScroll, [], JAM.policy.p1);
    }
  }
  JAM.call(Event.observe, Event, [window, "load", fireContentLoadedEvent], JAM.policy.p1);
  return;
}
function v326(GLOBAL$$2) {
  function createResponder(uid$$8, eventName$$19, handler$$8) {
    function v323(event$$25) {
      var v490 = Event.cache;
      var cacheEntry = v490[uid$$8];
      var element$$198 = cacheEntry.element;
      JAM.call(Event.extend, Event, [event$$25, element$$198], JAM.policy.p1);
      JAM.call(handler$$8.call, handler$$8, [element$$198, event$$25], JAM.policy.p1);
      return;
    }
    var v491 = JAM.call(Event._isCustomEvent, Event, [eventName$$19], JAM.policy.p1);
    if (v491) {
      return createResponderForCustomEvent(uid$$8, eventName$$19, handler$$8);
    }
    var v2145 = !MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED$$1;
    if (v2145) {
      var v3126 = eventName$$19 === "mouseenter";
      var v3610 = !v3126;
      if (v3610) {
        v3126 = eventName$$19 === "mouseleave";
      }
      v2145 = v3126;
    }
    var v492 = v2145;
    if (v492) {
      return createMouseEnterLeaveResponder(uid$$8, eventName$$19, handler$$8);
    }
    return v323;
  }
  function createResponderForCustomEvent(uid$$9, eventName$$20, handler$$9) {
    function v324(event$$26) {
      var v493 = Event.cache;
      var cacheEntry$$1 = v493[uid$$9];
      var element$$199 = cacheEntry$$1.element;
      var v2146 = event$$26.eventName;
      var v494 = JAM.call(Object.isUndefined, Object, [v2146], JAM.policy.p1);
      if (v494) {
        return false;
      }
      var v2147 = event$$26.eventName;
      var v495 = v2147 !== eventName$$20;
      if (v495) {
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
      var v496 = Event.cache;
      var cacheEntry$$2 = v496[uid$$10];
      var element$$200 = cacheEntry$$2.element;
      JAM.call(Event.extend, Event, [event$$27, element$$200], JAM.policy.p1);
      var parent$$10 = event$$27.relatedTarget;
      var v2148 = parent$$10;
      if (v2148) {
        v2148 = parent$$10 !== element$$200;
      }
      var v497 = v2148;
      for (;v497;) {
        try {
          parent$$10 = parent$$10.parentNode;
        } catch (e$$27) {
          parent$$10 = element$$200;
        }
        var v2149 = parent$$10;
        if (v2149) {
          v2149 = parent$$10 !== element$$200;
        }
        v497 = v2149;
      }
      var v498 = parent$$10 === element$$200;
      if (v498) {
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
  var v500 = GLOBAL$$2.Event;
  v500._createResponder = createResponder;
  docEl$$2 = null;
  return;
}
function v322(GLOBAL$$1) {
  function v321(event$$24) {
    var v501 = this.selector;
    var element$$197 = JAM.call(Event$$1.findElement, Event$$1, [event$$24, v501], JAM.policy.p1);
    if (element$$197) {
      var v502 = this.callback;
      var v503 = this.element;
      JAM.call(v502.call, v502, [v503, event$$24, element$$197], JAM.policy.p1);
    }
    return;
  }
  function v320() {
    var v504 = this.element;
    var v505 = this.eventName;
    var v506 = this.handler;
    JAM.call(Event$$1.stopObserving, Event$$1, [v504, v505, v506], JAM.policy.p1);
    return this;
  }
  function v319() {
    var v507 = this.element;
    var v508 = this.eventName;
    var v509 = this.handler;
    JAM.call(Event$$1.observe, Event$$1, [v507, v508, v509], JAM.policy.p1);
    return this;
  }
  function v318(element$$196, eventName$$17, selector$$6, callback$$30) {
    var v3973 = JAM.call($, null, [element$$196], JAM.policy.p1);
    this.element = v3973;
    this.eventName = eventName$$17;
    this.selector = selector$$6;
    this.callback = callback$$30;
    var v510 = this.handleEvent;
    var v3974 = JAM.call(v510.bind, v510, [this], JAM.policy.p1);
    this.handler = v3974;
    return;
  }
  function v317(event$$23, element$$195) {
    var v511 = !event$$23;
    if (v511) {
      return false;
    }
    var v2150 = JAM.call(isIELegacyEvent, null, [event$$23], JAM.policy.p1);
    var v512 = !v2150;
    if (v512) {
      return event$$23;
    }
    var v513 = event$$23._extendedByPrototype;
    if (v513) {
      return event$$23;
    }
    event$$23._extendedByPrototype = Prototype.emptyFunction;
    var pointer$$1 = JAM.call(Event$$1.pointer, Event$$1, [event$$23], JAM.policy.p1);
    var v3127 = event$$23.srcElement;
    var v3611 = !v3127;
    if (v3611) {
      v3127 = element$$195;
    }
    var v2151 = v3127;
    var v2152 = JAM.call(_relatedTarget, null, [event$$23], JAM.policy.p1);
    var v2153 = pointer$$1.x;
    var v2154 = pointer$$1.y;
    var v514 = {target:v2151, relatedTarget:v2152, pageX:v2153, pageY:v2154};
    JAM.call(Object.extend, Object, [event$$23, v514], JAM.policy.p1);
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
    var v515 = event$$22.type;
    switch(v515) {
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
    var v516 = m$$5;
    var v517 = name$$45;
    var v3128 = Event$$1.Methods;
    var v2155 = v3128[name$$45];
    var v3975 = JAM.call(v2155.methodize, v2155, [], JAM.policy.p1);
    JAM.set(v516, v517, v3975, JAM.policy.p2);
    return m$$5;
  }
  function v311(event$$21, code$$5) {
    var v518;
    var v2156 = JAM.call(isIELegacyEvent, null, [event$$21], JAM.policy.p1);
    if (v2156) {
      v518 = _isButtonForLegacyEvents(event$$21, code$$5);
    } else {
      v518 = _isButtonForDOMEvents(event$$21, code$$5);
    }
    return v518;
  }
  function v310(event$$20) {
    return true;
  }
  function v309(event$$19) {
    var v2157 = window.Event;
    var v519 = event$$19 instanceof v2157;
    return!v519;
  }
  function isIELegacyEvent(event$$18) {
    return false;
  }
  function _isButtonForDOMEvents(event$$2, code$$2) {
    var v520;
    var v2161 = event$$2.which;
    if (v2161) {
      var v2158 = event$$2.which;
      var v2159 = code$$2 + 1;
      v520 = v2158 === v2159;
    } else {
      var v2160 = event$$2.button;
      v520 = v2160 === code$$2;
    }
    return v520;
  }
  function _isButtonForLegacyEvents(event$$3, code$$3) {
    var v521 = event$$3.button;
    var v522 = legacyButtonMap[code$$3];
    return v521 === v522;
  }
  function _isButtonForWebKit(event$$4, code$$4) {
    switch(code$$4) {
      case 0:
        var v2162 = event$$4.which;
        var v523 = v2162 == 1;
        if (v523) {
          var v2163 = event$$4.metaKey;
          v523 = !v2163;
        }
        return v523;
      case 1:
        var v2164 = event$$4.which;
        var v524 = v2164 == 2;
        var v2166 = !v524;
        if (v2166) {
          var v3129 = event$$4.which;
          var v2165 = v3129 == 1;
          if (v2165) {
            v2165 = event$$4.metaKey;
          }
          v524 = v2165;
        }
        return v524;
      case 2:
        var v525 = event$$4.which;
        return v525 == 3;
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
    var v526 = _element(event$$8);
    return JAM.call(Element.extend, Element, [v526], JAM.policy.p1);
  }
  function _element(event$$9) {
    event$$9 = JAM.call(Event$$1.extend, Event$$1, [event$$9], JAM.policy.p1);
    var node$$19 = event$$9.target;
    var type$$33 = event$$9.type;
    var currentTarget = event$$9.currentTarget;
    var v2167 = currentTarget;
    if (v2167) {
      v2167 = currentTarget.tagName;
    }
    var v528 = v2167;
    if (v528) {
      var v3130 = type$$33 === "load";
      var v3612 = !v3130;
      if (v3612) {
        v3130 = type$$33 === "error";
      }
      var v2168 = v3130;
      var v3132 = !v2168;
      if (v3132) {
        var v3613 = type$$33 === "click";
        if (v3613) {
          var v3882 = currentTarget.tagName;
          var v3807 = JAM.call(v3882.toLowerCase, v3882, [], JAM.policy.p1);
          v3613 = v3807 === "input";
        }
        var v3131 = v3613;
        if (v3131) {
          var v3614 = currentTarget.type;
          v3131 = v3614 === "radio";
        }
        v2168 = v3131;
      }
      var v527 = v2168;
      if (v527) {
        node$$19 = currentTarget;
      }
    }
    var v2169 = node$$19.nodeType;
    var v2170 = Node.TEXT_NODE;
    var v529 = v2169 == v2170;
    if (v529) {
      node$$19 = node$$19.parentNode;
    }
    return JAM.call(Element.extend, Element, [node$$19], JAM.policy.p1);
  }
  function findElement(event$$10, expression$$7) {
    var element$$173 = _element(event$$10);
    var v530 = Prototype.Selector;
    var match$$47 = v530.match;
    var v531 = !expression$$7;
    if (v531) {
      return JAM.call(Element.extend, Element, [element$$173], JAM.policy.p1);
    }
    for (;element$$173;) {
      var v2171 = JAM.call(Object.isElement, Object, [element$$173], JAM.policy.p1);
      if (v2171) {
        v2171 = JAM.call(match$$47, null, [element$$173, expression$$7], JAM.policy.p1);
      }
      var v532 = v2171;
      if (v532) {
        return JAM.call(Element.extend, Element, [element$$173], JAM.policy.p1);
      }
      element$$173 = element$$173.parentNode;
    }
    return;
  }
  function pointer(event$$11) {
    var v533 = pointerX(event$$11);
    var v534 = pointerY(event$$11);
    return{x:v533, y:v534};
  }
  function pointerX(event$$12) {
    var docElement = document.documentElement;
    var v535 = document.body;
    var v2172 = !v535;
    if (v2172) {
      v535 = {scrollLeft:0};
    }
    var body = v535;
    var v536 = event$$12.pageX;
    var v2175 = !v536;
    if (v2175) {
      var v3133 = event$$12.clientX;
      var v3615 = docElement.scrollLeft;
      var v3808 = !v3615;
      if (v3808) {
        v3615 = body.scrollLeft;
      }
      var v3134 = v3615;
      var v2173 = v3133 + v3134;
      var v3135 = docElement.clientLeft;
      var v3616 = !v3135;
      if (v3616) {
        v3135 = 0;
      }
      var v2174 = v3135;
      v536 = v2173 - v2174;
    }
    return v536;
  }
  function pointerY(event$$13) {
    var docElement$$1 = document.documentElement;
    var v537 = document.body;
    var v2176 = !v537;
    if (v2176) {
      v537 = {scrollTop:0};
    }
    var body$$1 = v537;
    var v538 = event$$13.pageY;
    var v2179 = !v538;
    if (v2179) {
      var v3136 = event$$13.clientY;
      var v3617 = docElement$$1.scrollTop;
      var v3809 = !v3617;
      if (v3809) {
        v3617 = body$$1.scrollTop;
      }
      var v3137 = v3617;
      var v2177 = v3136 + v3137;
      var v3138 = docElement$$1.clientTop;
      var v3618 = !v3138;
      if (v3618) {
        v3138 = 0;
      }
      var v2178 = v3138;
      v538 = v2177 - v2178;
    }
    return v538;
  }
  function stop(event$$14) {
    JAM.call(Event$$1.extend, Event$$1, [event$$14], JAM.policy.p1);
    JAM.call(event$$14.preventDefault, event$$14, [], JAM.policy.p1);
    JAM.call(event$$14.stopPropagation, event$$14, [], JAM.policy.p1);
    event$$14.stopped = true;
    return;
  }
  function getDOMEventName(eventName) {
    var v539 = EVENT_TRANSLATIONS[eventName];
    var v2180 = !v539;
    if (v2180) {
      v539 = eventName;
    }
    return v539;
  }
  function getUniqueElementID$$1(element$$174) {
    var v540 = element$$174 === window;
    if (v540) {
      return 0;
    }
    var v3139 = element$$174._prototypeUID;
    var v2181 = typeof v3139;
    var v541 = v2181 === "undefined";
    if (v541) {
      var v2182 = Element.Storage;
      element$$174._prototypeUID = v2182.UID;
      var v2183 = Element.Storage;
      var v3619 = Element.Storage;
      var v3140 = v3619.UID;
      v2183.UID = v3140 + 1;
    }
    return element$$174._prototypeUID;
  }
  function getUniqueElementID_IE$$1(element$$175) {
    var v542 = element$$175 === window;
    if (v542) {
      return 0;
    }
    var v543 = element$$175 == document;
    if (v543) {
      return 1;
    }
    return element$$175.uniqueID;
  }
  function isCustomEvent(eventName$$1) {
    return JAM.call(eventName$$1.include, eventName$$1, [":"], JAM.policy.p1);
  }
  function getRegistryForElement(element$$176, uid$$4) {
    var v544 = GLOBAL$$1.Event;
    var CACHE = v544.cache;
    var v545 = JAM.call(Object.isUndefined, Object, [uid$$4], JAM.policy.p1);
    if (v545) {
      uid$$4 = JAM.call(getUniqueElementID$$1, null, [element$$176], JAM.policy.p1);
    }
    var v2184 = CACHE[uid$$4];
    var v546 = !v2184;
    if (v546) {
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
      var v2185 = registry$$inline_36[eventName$$inline_34];
      var v547 = !v2185;
      if (v547) {
        JAM.set(registry$$inline_36, eventName$$inline_34, [], JAM.policy.p2);
      }
      var entries$$inline_37 = registry$$inline_36[eventName$$inline_34];
      var i$$inline_38 = entries$$inline_37.length;
      var v549 = i$$inline_38;
      i$$inline_38 = i$$inline_38 - 1;
      for (;v549;) {
        var v3141 = entries$$inline_37[i$$inline_38];
        var v2186 = v3141.handler;
        var v548 = v2186 === handler$$inline_35;
        if (v548) {
          entry$$2 = null;
          break JSCompiler_inline_label_register_42;
        }
        v549 = i$$inline_38;
        i$$inline_38 = i$$inline_38 - 1;
      }
      var uid$$inline_39 = JAM.call(getUniqueElementID$$1, null, [element$$inline_33], JAM.policy.p1);
      var v550 = GLOBAL$$1.Event;
      var responder$$inline_40 = JAM.call(v550._createResponder, v550, [uid$$inline_39, eventName$$inline_34, handler$$inline_35], JAM.policy.p1);
      var entry$$inline_41 = {responder:responder$$inline_40, handler:handler$$inline_35};
      JAM.call(entries$$inline_37.push, entries$$inline_37, [entry$$inline_41], JAM.policy.p1);
      entry$$2 = entry$$inline_41;
    }
    var v551 = entry$$2 === null;
    if (v551) {
      return element$$180;
    }
    var responder$$4 = entry$$2.responder;
    var v555 = isCustomEvent(eventName$$4);
    if (v555) {
      var element$$inline_43 = element$$180;
      var responder$$inline_45 = responder$$4;
      var v552 = element$$inline_43.addEventListener;
      if (v552) {
        JAM.call(element$$inline_43.addEventListener, element$$inline_43, ["dataavailable", responder$$inline_45, false], JAM.policy.p1);
      } else {
        JAM.call(element$$inline_43.attachEvent, element$$inline_43, ["ondataavailable", responder$$inline_45], JAM.policy.p1);
        JAM.call(element$$inline_43.attachEvent, element$$inline_43, ["onlosecapture", responder$$inline_45], JAM.policy.p1);
      }
    } else {
      var element$$inline_47 = element$$180;
      var responder$$inline_49 = responder$$4;
      var actualEventName$$inline_50 = JAM.call(getDOMEventName, null, [eventName$$4], JAM.policy.p1);
      var v554 = element$$inline_47.addEventListener;
      if (v554) {
        JAM.call(element$$inline_47.addEventListener, element$$inline_47, [actualEventName$$inline_50, responder$$inline_49, false], JAM.policy.p1);
      } else {
        var v553 = "on" + actualEventName$$inline_50;
        JAM.call(element$$inline_47.attachEvent, element$$inline_47, [v553, responder$$inline_49], JAM.policy.p1);
      }
    }
    return element$$180;
  }
  function stopObserving(element$$183, eventName$$7, handler$$6) {
    element$$183 = JAM.call($, null, [element$$183], JAM.policy.p1);
    var v556 = JAM.call(Object.isUndefined, Object, [handler$$6], JAM.policy.p1);
    var handlerGiven = !v556;
    var v557 = JAM.call(Object.isUndefined, Object, [eventName$$7], JAM.policy.p1);
    var eventNameGiven = !v557;
    var v2187 = !eventNameGiven;
    if (v2187) {
      v2187 = !handlerGiven;
    }
    var v563 = v2187;
    if (v563) {
      var element$$inline_52 = element$$183;
      var uid$$inline_53 = JAM.call(getUniqueElementID$$1, null, [element$$inline_52], JAM.policy.p1);
      var registry$$inline_54 = getRegistryForElement(element$$inline_52, uid$$inline_53);
      var element$$inline_87 = element$$inline_52;
      var uid$$inline_88 = uid$$inline_53;
      var v558 = JAM.call(Object.isUndefined, Object, [uid$$inline_88], JAM.policy.p1);
      if (v558) {
        uid$$inline_88 = JAM.call(getUniqueElementID$$1, null, [element$$inline_87], JAM.policy.p1);
      }
      var v2188 = GLOBAL$$1.Event;
      var v559 = v2188.cache;
      delete v559[uid$$inline_88];
      var entries$$inline_55;
      var i$$inline_56;
      var eventName$$inline_57;
      for (eventName$$inline_57 in registry$$inline_54) {
        var v560 = eventName$$inline_57 === "element";
        if (v560) {
          continue;
        }
        entries$$inline_55 = registry$$inline_54[eventName$$inline_57];
        i$$inline_56 = entries$$inline_55.length;
        var v562 = i$$inline_56;
        i$$inline_56 = i$$inline_56 - 1;
        for (;v562;) {
          var v2189 = entries$$inline_55[i$$inline_56];
          var v561 = v2189.responder;
          removeEvent(element$$inline_52, eventName$$inline_57, v561);
          v562 = i$$inline_56;
          i$$inline_56 = i$$inline_56 - 1;
        }
      }
      return element$$183;
    }
    var v567 = !handlerGiven;
    if (v567) {
      JSCompiler_inline_label_stopObservingEventName_64: {
        var element$$inline_59 = element$$183;
        var eventName$$inline_60 = eventName$$7;
        var registry$$inline_61 = getRegistryForElement(element$$inline_59);
        var entries$$inline_62 = registry$$inline_61[eventName$$inline_60];
        var v564 = !entries$$inline_62;
        if (v564) {
          break JSCompiler_inline_label_stopObservingEventName_64;
        }
        delete registry$$inline_61[eventName$$inline_60];
        var i$$inline_63 = entries$$inline_62.length;
        var v566 = i$$inline_63;
        i$$inline_63 = i$$inline_63 - 1;
        for (;v566;) {
          var v2190 = entries$$inline_62[i$$inline_63];
          var v565 = v2190.responder;
          removeEvent(element$$inline_59, eventName$$inline_60, v565);
          v566 = i$$inline_63;
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
      var v568 = !entries$$inline_69;
      if (v568) {
        entry$$3 = void 0;
        break JSCompiler_inline_label_unregister_73;
      }
      var i$$inline_70 = entries$$inline_69.length;
      var entry$$inline_71;
      var v570 = i$$inline_70;
      i$$inline_70 = i$$inline_70 - 1;
      for (;v570;) {
        var v3142 = entries$$inline_69[i$$inline_70];
        var v2191 = v3142.handler;
        var v569 = v2191 === handler$$inline_67;
        if (v569) {
          entry$$inline_71 = entries$$inline_69[i$$inline_70];
          break;
        }
        v570 = i$$inline_70;
        i$$inline_70 = i$$inline_70 - 1;
      }
      var v571 = !entry$$inline_71;
      if (v571) {
        entry$$3 = void 0;
        break JSCompiler_inline_label_unregister_73;
      }
      var index$$inline_72 = JAM.call(entries$$inline_69.indexOf, entries$$inline_69, [entry$$inline_71], JAM.policy.p1);
      JAM.call(entries$$inline_69.splice, entries$$inline_69, [index$$inline_72, 1], JAM.policy.p1);
      entry$$3 = entry$$inline_71;
    }
    var v572 = !entry$$3;
    if (v572) {
      return element$$183;
    }
    var v573 = entry$$3.responder;
    removeEvent(element$$183, eventName$$7, v573);
    return element$$183;
  }
  function removeEvent(element$$188, eventName$$12, handler$$7) {
    var v577 = isCustomEvent(eventName$$12);
    if (v577) {
      var element$$inline_74 = element$$188;
      var responder$$inline_76 = handler$$7;
      var v574 = element$$inline_74.removeEventListener;
      if (v574) {
        JAM.call(element$$inline_74.removeEventListener, element$$inline_74, ["dataavailable", responder$$inline_76, false], JAM.policy.p1);
      } else {
        JAM.call(element$$inline_74.detachEvent, element$$inline_74, ["ondataavailable", responder$$inline_76], JAM.policy.p1);
        JAM.call(element$$inline_74.detachEvent, element$$inline_74, ["onlosecapture", responder$$inline_76], JAM.policy.p1);
      }
    } else {
      var element$$inline_78 = element$$188;
      var responder$$inline_80 = handler$$7;
      var actualEventName$$inline_81 = JAM.call(getDOMEventName, null, [eventName$$12], JAM.policy.p1);
      var v576 = element$$inline_78.removeEventListener;
      if (v576) {
        JAM.call(element$$inline_78.removeEventListener, element$$inline_78, [actualEventName$$inline_81, responder$$inline_80, false], JAM.policy.p1);
      } else {
        var v575 = "on" + actualEventName$$inline_81;
        JAM.call(element$$inline_78.detachEvent, element$$inline_78, [v575, responder$$inline_80], JAM.policy.p1);
      }
    }
    return;
  }
  function fire(element$$190, eventName$$13, memo$$2, bubble) {
    JSCompiler_inline_label_getFireTarget_84: {
      var element$$inline_83 = JAM.call($, null, [element$$190], JAM.policy.p1);
      var v578 = element$$inline_83 !== document;
      if (v578) {
        element$$190 = element$$inline_83;
        break JSCompiler_inline_label_getFireTarget_84;
      }
      var v2192 = document.createEvent;
      if (v2192) {
        var v3143 = element$$inline_83.dispatchEvent;
        v2192 = !v3143;
      }
      var v579 = v2192;
      if (v579) {
        element$$190 = document.documentElement;
        break JSCompiler_inline_label_getFireTarget_84;
      }
      element$$190 = element$$inline_83;
    }
    var v580 = JAM.call(Object.isUndefined, Object, [bubble], JAM.policy.p1);
    if (v580) {
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
    var v581;
    if (bubble$$2) {
      v581 = "ondataavailable";
    } else {
      v581 = "onlosecapture";
    }
    event$$17.eventType = v581;
    event$$17.eventName = eventName$$15;
    event$$17.memo = memo$$4;
    var v582 = event$$17.eventType;
    JAM.call(element$$192.fireEvent, element$$192, [v582, event$$17], JAM.policy.p1);
    return event$$17;
  }
  function on(element$$193, eventName$$16, selector$$5, callback$$29) {
    element$$193 = JAM.call($, null, [element$$193], JAM.policy.p1);
    var v2193 = JAM.call(Object.isFunction, Object, [selector$$5], JAM.policy.p1);
    if (v2193) {
      v2193 = JAM.call(Object.isUndefined, Object, [callback$$29], JAM.policy.p1);
    }
    var v583 = v2193;
    if (v583) {
      callback$$29 = selector$$5;
      selector$$5 = null;
    }
    var v2194 = Event$$1.Handler;
    var v584 = JAM.new(v2194, [element$$193, eventName$$16, selector$$5, callback$$29]);
    return JAM.call(v584.start, v584, [], JAM.policy.p1);
  }
  function destroyCache_IE() {
    var v585 = GLOBAL$$1.Event;
    v585.cache = null;
    return;
  }
  var DIV$$1 = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
  var docEl$$1 = document.documentElement;
  var v586 = "onmouseenter" in docEl$$1;
  if (v586) {
    v586 = "onmouseleave" in docEl$$1;
  }
  var MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED = v586;
  var Event$$1 = {KEY_BACKSPACE:8, KEY_TAB:9, KEY_RETURN:13, KEY_ESC:27, KEY_LEFT:37, KEY_UP:38, KEY_RIGHT:39, KEY_DOWN:40, KEY_DELETE:46, KEY_HOME:36, KEY_END:35, KEY_PAGEUP:33, KEY_PAGEDOWN:34, KEY_INSERT:45};
  var v588 = window.attachEvent;
  if (v588) {
    var v587 = window.addEventListener;
    if (v587) {
      isIELegacyEvent = v309;
    } else {
      isIELegacyEvent = v310;
    }
  }
  var _isButton;
  var legacyButtonMap = {0:1, 1:4, 2:2};
  var v591 = window.attachEvent;
  if (v591) {
    var v2195 = window.addEventListener;
    var v589 = !v2195;
    if (v589) {
      _isButton = _isButtonForLegacyEvents;
    } else {
      _isButton = v311;
    }
  } else {
    var v2196 = Prototype.Browser;
    var v590 = v2196.WebKit;
    if (v590) {
      _isButton = _isButtonForWebKit;
    } else {
      _isButton = _isButtonForDOMEvents;
    }
  }
  Event$$1.Methods = {isLeftClick:isLeftClick, isMiddleClick:isMiddleClick, isRightClick:isRightClick, element:element$$172, findElement:findElement, pointer:pointer, pointerX:pointerX, pointerY:pointerY, stop:stop};
  var v2197 = Event$$1.Methods;
  var v592 = JAM.call(Object.keys, Object, [v2197], JAM.policy.p1);
  var methods$$7 = JAM.call(v592.inject, v592, [{}, v312], JAM.policy.p1);
  var v593 = window.attachEvent;
  if (v593) {
    var _relatedTarget = v313;
    var additionalMethods = {stopPropagation:v314, preventDefault:v315, inspect:v316};
    Event$$1.extend = v317;
  } else {
    Event$$1.extend = Prototype.K;
  }
  var v596 = window.addEventListener;
  if (v596) {
    var v594 = Event$$1;
    var v3144 = window.Event;
    var v2198 = v3144.prototype;
    var v3146 = !v2198;
    if (v3146) {
      var v3145 = JAM.call(document.createEvent, document, ["HTMLEvents"], JAM.policy.p1);
      v2198 = v3145.__proto__;
    }
    v594.prototype = v2198;
    var v595 = Event$$1.prototype;
    JAM.call(Object.extend, Object, [v595, methods$$7], JAM.policy.p1);
  }
  var EVENT_TRANSLATIONS = {mouseenter:"mouseover", mouseleave:"mouseout"};
  if (MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED) {
    getDOMEventName = Prototype.K;
  }
  var v597 = "uniqueID" in DIV$$1;
  if (v597) {
    getUniqueElementID$$1 = getUniqueElementID_IE$$1;
  }
  Event$$1._isCustomEvent = isCustomEvent;
  var v598;
  var v2199 = document.createEvent;
  if (v2199) {
    v598 = fireEvent_DOM;
  } else {
    v598 = fireEvent_IE;
  }
  var fireEvent = v598;
  var v599 = Event$$1;
  var v2200 = {initialize:v318, start:v319, stop:v320, handleEvent:v321};
  var v3976 = JAM.call(Class.create, Class, [v2200], JAM.policy.p1);
  v599.Handler = v3976;
  var v600 = Event$$1.Methods;
  JAM.call(Object.extend, Object, [Event$$1, v600], JAM.policy.p1);
  var v601 = {fire:fire, observe:observe, stopObserving:stopObserving, on:on};
  JAM.call(Object.extend, Object, [Event$$1, v601], JAM.policy.p1);
  var v602 = {fire:fire, observe:observe, stopObserving:stopObserving, on:on};
  JAM.call(Element.addMethods, Element, [v602], JAM.policy.p1);
  var v2201 = JAM.call(fire.methodize, fire, [], JAM.policy.p1);
  var v2202 = JAM.call(observe.methodize, observe, [], JAM.policy.p1);
  var v2203 = JAM.call(stopObserving.methodize, stopObserving, [], JAM.policy.p1);
  var v2204 = JAM.call(on.methodize, on, [], JAM.policy.p1);
  var v603 = {fire:v2201, observe:v2202, stopObserving:v2203, on:v2204, loaded:false};
  JAM.call(Object.extend, Object, [document, v603], JAM.policy.p1);
  var v605 = GLOBAL$$1.Event;
  if (v605) {
    var v604 = window.Event;
    JAM.call(Object.extend, Object, [v604, Event$$1], JAM.policy.p1);
  } else {
    GLOBAL$$1.Event = Event$$1;
  }
  var v606 = GLOBAL$$1.Event;
  v606.cache = {};
  var v607 = window.attachEvent;
  if (v607) {
    JAM.call(window.attachEvent, window, ["onunload", destroyCache_IE], JAM.policy.p1);
  }
  DIV$$1 = null;
  docEl$$1 = null;
  return;
}
function v308() {
  var v608 = this.element;
  return JAM.call(Form.serialize, Form, [v608], JAM.policy.p1);
}
function v307() {
  var v609 = Form.Element;
  var v610 = this.element;
  return JAM.call(v609.getValue, v609, [v610], JAM.policy.p1);
}
function v306(element$$171) {
  var v614 = element$$171.type;
  if (v614) {
    var v2205 = element$$171.type;
    var v613 = JAM.call(v2205.toLowerCase, v2205, [], JAM.policy.p1);
    switch(v613) {
      case "checkbox":
      ;
      case "radio":
        var v2206 = this.onElementEvent;
        var v611 = JAM.call(v2206.bind, v2206, [this], JAM.policy.p1);
        JAM.call(Event.observe, Event, [element$$171, "click", v611], JAM.policy.p1);
        break;
      default:
        var v2207 = this.onElementEvent;
        var v612 = JAM.call(v2207.bind, v2207, [this], JAM.policy.p1);
        JAM.call(Event.observe, Event, [element$$171, "change", v612], JAM.policy.p1);
    }
  }
  return;
}
function v305() {
  var v2208 = this.element;
  var v615 = JAM.call(Form.getElements, Form, [v2208], JAM.policy.p1);
  var v616 = this.registerCallback;
  JAM.call(v615.each, v615, [v616, this], JAM.policy.p1);
  return;
}
function v304() {
  var value$$98 = JAM.call(this.getValue, this, [], JAM.policy.p1);
  var v2209 = this.lastValue;
  var v618 = v2209 != value$$98;
  if (v618) {
    var v617 = this.element;
    JAM.call(this.callback, this, [v617, value$$98], JAM.policy.p1);
    this.lastValue = value$$98;
  }
  return;
}
function v303(element$$170, callback$$28) {
  var v3977 = JAM.call($, null, [element$$170], JAM.policy.p1);
  this.element = v3977;
  this.callback = callback$$28;
  var v3978 = JAM.call(this.getValue, this, [], JAM.policy.p1);
  this.lastValue = v3978;
  var v3620 = this.element;
  var v3147 = v3620.tagName;
  var v2210 = JAM.call(v3147.toLowerCase, v3147, [], JAM.policy.p1);
  var v620 = v2210 == "form";
  if (v620) {
    JAM.call(this.registerFormCallbacks, this, [], JAM.policy.p1);
  } else {
    var v619 = this.element;
    JAM.call(this.registerCallback, this, [v619], JAM.policy.p1);
  }
  return;
}
function v302() {
  var v621 = this.element;
  return JAM.call(Form.serialize, Form, [v621], JAM.policy.p1);
}
function v301() {
  var v622 = Form.Element;
  var v623 = this.element;
  return JAM.call(v622.getValue, v622, [v623], JAM.policy.p1);
}
function v300() {
  var value$$97 = JAM.call(this.getValue, this, [], JAM.policy.p1);
  var v2211;
  var v3810 = this.lastValue;
  var v3621 = JAM.call(Object.isString, Object, [v3810], JAM.policy.p1);
  if (v3621) {
    v3621 = JAM.call(Object.isString, Object, [value$$97], JAM.policy.p1);
  }
  var v3151 = v3621;
  if (v3151) {
    var v3148 = this.lastValue;
    v2211 = v3148 != value$$97;
  } else {
    var v3622 = this.lastValue;
    var v3149 = String(v3622);
    var v3150 = String(value$$97);
    v2211 = v3149 != v3150;
  }
  var v625 = v2211;
  if (v625) {
    var v624 = this.element;
    JAM.call(this.callback, this, [v624, value$$97], JAM.policy.p1);
    this.lastValue = value$$97;
  }
  return;
}
function v299($super$$5, element$$169, frequency$$1, callback$$27) {
  JAM.call($super$$5, null, [callback$$27, frequency$$1], JAM.policy.p1);
  var v3979 = JAM.call($, null, [element$$169], JAM.policy.p1);
  this.element = v3979;
  var v3980 = JAM.call(this.getValue, this, [], JAM.policy.p1);
  this.lastValue = v3980;
  return;
}
function v298() {
  function input$$1(element$$163, value$$93) {
    var v2212 = element$$163.type;
    var v626 = JAM.call(v2212.toLowerCase, v2212, [], JAM.policy.p1);
    switch(v626) {
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
    var v629 = JAM.call(Object.isUndefined, Object, [value$$94], JAM.policy.p1);
    if (v629) {
      var v627;
      var v2213 = element$$164.checked;
      if (v2213) {
        v627 = element$$164.value;
      } else {
        v627 = null;
      }
      return v627;
    } else {
      var v628 = !value$$94;
      element$$164.checked = !v628;
    }
    return;
  }
  function valueSelector(element$$165, value$$95) {
    var v630 = JAM.call(Object.isUndefined, Object, [value$$95], JAM.policy.p1);
    if (v630) {
      return element$$165.value;
    } else {
      element$$165.value = value$$95;
    }
    return;
  }
  function select$$3(element$$166, value$$96) {
    var v632 = JAM.call(Object.isUndefined, Object, [value$$96], JAM.policy.p1);
    if (v632) {
      var v2214;
      var v3623 = element$$166.type;
      var v3152 = v3623 === "select-one";
      if (v3152) {
        v2214 = selectOne;
      } else {
        v2214 = selectMany;
      }
      var v631 = v2214;
      return JAM.call(v631, null, [element$$166], JAM.policy.p1);
    }
    var opt;
    var currentValue;
    var v633 = JAM.call(Object.isArray, Object, [value$$96], JAM.policy.p1);
    var single = !v633;
    var i$$57 = 0;
    var length$$32 = element$$166.length;
    var v637 = i$$57 < length$$32;
    for (;v637;) {
      var v634 = element$$166.options;
      opt = v634[i$$57];
      currentValue = JAM.call(this.optionValue, this, [opt], JAM.policy.p1);
      if (single) {
        var v635 = currentValue == value$$96;
        if (v635) {
          opt.selected = true;
          return;
        }
      } else {
        var v636 = opt;
        var v3981 = JAM.call(value$$96.include, value$$96, [currentValue], JAM.policy.p1);
        v636.selected = v3981;
      }
      i$$57 = i$$57 + 1;
      v637 = i$$57 < length$$32;
    }
    return;
  }
  function selectOne(element$$167) {
    var index$$61 = element$$167.selectedIndex;
    var v638;
    var v2216 = index$$61 >= 0;
    if (v2216) {
      var v3153 = element$$167.options;
      var v2215 = v3153[index$$61];
      v638 = optionValue(v2215);
    } else {
      v638 = null;
    }
    return v638;
  }
  function selectMany(element$$168) {
    var values$$8;
    var length$$33 = element$$168.length;
    var v639 = !length$$33;
    if (v639) {
      return null;
    }
    var i$$58 = 0;
    values$$8 = [];
    var v643 = i$$58 < length$$33;
    for (;v643;) {
      var v640 = element$$168.options;
      var opt$$1 = v640[i$$58];
      var v642 = opt$$1.selected;
      if (v642) {
        var v641 = optionValue(opt$$1);
        JAM.call(values$$8.push, values$$8, [v641], JAM.policy.p1);
      }
      i$$58 = i$$58 + 1;
      v643 = i$$58 < length$$33;
    }
    return values$$8;
  }
  function optionValue(opt$$2) {
    var v644;
    var v2217 = JAM.call(Element.hasAttribute, Element, [opt$$2, "value"], JAM.policy.p1);
    if (v2217) {
      v644 = opt$$2.value;
    } else {
      v644 = opt$$2.text;
    }
    return v644;
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
    var v2218 = element$$160.select;
    if (v2218) {
      var v3811 = element$$160.tagName;
      var v3624 = JAM.call(v3811.toLowerCase, v3811, [], JAM.policy.p1);
      var v3154 = v3624 != "input";
      var v3626 = !v3154;
      if (v3626) {
        var v3812 = element$$160.type;
        var v3625 = JAM.call(/^(?:button|reset|submit)$/i.test, /^(?:button|reset|submit)$/i, [v3812], JAM.policy.p1);
        v3154 = !v3625;
      }
      v2218 = v3154;
    }
    var v645 = v2218;
    if (v645) {
      JAM.call(element$$160.select, element$$160, [], JAM.policy.p1);
    }
  } catch (e$$26) {
  }
  return element$$160;
}
function v294(element$$159) {
  var v2219 = JAM.call($, null, [element$$159], JAM.policy.p1);
  var v646 = v2219.value;
  return v646 != "";
}
function v293(element$$158) {
  var v647 = JAM.call($, null, [element$$158], JAM.policy.p1);
  v647.value = "";
  return element$$158;
}
function v292(element$$157, value$$92) {
  element$$157 = JAM.call($, null, [element$$157], JAM.policy.p1);
  var v648 = element$$157.tagName;
  var method$$9 = JAM.call(v648.toLowerCase, v648, [], JAM.policy.p1);
  var v2220 = Form.Element;
  var v649 = v2220.Serializers;
  JAM.call(v649[method$$9], v649, [element$$157, value$$92], JAM.policy.p1);
  return element$$157;
}
function v291(element$$156) {
  element$$156 = JAM.call($, null, [element$$156], JAM.policy.p1);
  var v650 = element$$156.tagName;
  var method$$8 = JAM.call(v650.toLowerCase, v650, [], JAM.policy.p1);
  var v2221 = Form.Element;
  var v651 = v2221.Serializers;
  return JAM.call(v651[method$$8], v651, [element$$156], JAM.policy.p1);
}
function v290(element$$155) {
  element$$155 = JAM.call($, null, [element$$155], JAM.policy.p1);
  var v3155 = element$$155.disabled;
  var v2222 = !v3155;
  if (v2222) {
    v2222 = element$$155.name;
  }
  var v654 = v2222;
  if (v654) {
    var value$$91 = JAM.call(element$$155.getValue, element$$155, [], JAM.policy.p1);
    var v653 = value$$91 != undefined;
    if (v653) {
      var pair$$7 = {};
      var v652 = element$$155.name;
      JAM.set(pair$$7, v652, value$$91, JAM.policy.p2);
      return JAM.call(Object.toQueryString, Object, [pair$$7], JAM.policy.p1);
    }
  }
  return "";
}
function v289(element$$154) {
  var v655 = JAM.call($, null, [element$$154], JAM.policy.p1);
  JAM.call(v655.select, v655, [], JAM.policy.p1);
  return element$$154;
}
function v288(element$$153) {
  var v656 = JAM.call($, null, [element$$153], JAM.policy.p1);
  JAM.call(v656.focus, v656, [], JAM.policy.p1);
  return element$$153;
}
function v287(form$$10, options$$10) {
  form$$10 = JAM.call($, null, [form$$10], JAM.policy.p1);
  var v2223 = options$$10 || {};
  options$$10 = JAM.call(Object.clone, Object, [v2223], JAM.policy.p1);
  var params$$1 = options$$10.parameters;
  var v657 = JAM.call(form$$10.readAttribute, form$$10, ["action"], JAM.policy.p1);
  var v2224 = !v657;
  if (v2224) {
    v657 = "";
  }
  var action = v657;
  var v659 = JAM.call(action.blank, action, [], JAM.policy.p1);
  if (v659) {
    var v658 = window.location;
    action = v658.href;
  }
  var v660 = options$$10;
  var v3982 = JAM.call(form$$10.serialize, form$$10, [true], JAM.policy.p1);
  v660.parameters = v3982;
  if (params$$1) {
    var v661 = JAM.call(Object.isString, Object, [params$$1], JAM.policy.p1);
    if (v661) {
      params$$1 = JAM.call(params$$1.toQueryParams, params$$1, [], JAM.policy.p1);
    }
    var v662 = options$$10.parameters;
    JAM.call(Object.extend, Object, [v662, params$$1], JAM.policy.p1);
  }
  var v2225 = JAM.call(form$$10.hasAttribute, form$$10, ["method"], JAM.policy.p1);
  if (v2225) {
    var v3156 = options$$10.method;
    v2225 = !v3156;
  }
  var v663 = v2225;
  if (v663) {
    options$$10.method = form$$10.method;
  }
  var v664 = Ajax.Request;
  return JAM.new(v664, [action, options$$10]);
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
    var v665 = element$$151.tagName;
    return JAM.call(/^(?:input|select|textarea)$/i.test, /^(?:input|select|textarea)$/i, [v665], JAM.policy.p1);
  }
  function v283(element$$150) {
    return element$$150.tabIndex;
  }
  function v282(element$$149) {
    var v666 = JAM.call(element$$149.hasAttribute, element$$149, ["tabIndex"], JAM.policy.p1);
    if (v666) {
      var v2226 = element$$149.tabIndex;
      v666 = v2226 >= 0;
    }
    return v666;
  }
  function v281(element$$148) {
    var v2227 = element$$148.type;
    var v667 = "hidden" != v2227;
    if (v667) {
      var v2228 = element$$148.disabled;
      v667 = !v2228;
    }
    return v667;
  }
  var v2229 = JAM.call($, null, [form$$8], JAM.policy.p1);
  var v668 = JAM.call(v2229.getElements, v2229, [], JAM.policy.p1);
  var elements$$8 = JAM.call(v668.findAll, v668, [v281], JAM.policy.p1);
  var v2230 = JAM.call(elements$$8.findAll, elements$$8, [v282], JAM.policy.p1);
  var v669 = JAM.call(v2230.sortBy, v2230, [v283], JAM.policy.p1);
  var firstByIndex = JAM.call(v669.first, v669, [], JAM.policy.p1);
  var v670;
  if (firstByIndex) {
    v670 = firstByIndex;
  } else {
    v670 = JAM.call(elements$$8.find, elements$$8, [v284], JAM.policy.p1);
  }
  return v670;
}
function v280(form$$7) {
  form$$7 = JAM.call($, null, [form$$7], JAM.policy.p1);
  var v671 = JAM.call(Form.getElements, Form, [form$$7], JAM.policy.p1);
  JAM.call(v671.invoke, v671, ["enable"], JAM.policy.p1);
  return form$$7;
}
function v279(form$$6) {
  form$$6 = JAM.call($, null, [form$$6], JAM.policy.p1);
  var v672 = JAM.call(Form.getElements, Form, [form$$6], JAM.policy.p1);
  JAM.call(v672.invoke, v672, ["disable"], JAM.policy.p1);
  return form$$6;
}
function v278(form$$5, typeName, name$$44) {
  form$$5 = JAM.call($, null, [form$$5], JAM.policy.p1);
  var inputs = JAM.call(form$$5.getElementsByTagName, form$$5, ["input"], JAM.policy.p1);
  var v2231 = !typeName;
  if (v2231) {
    v2231 = !name$$44;
  }
  var v675 = v2231;
  if (v675) {
    var v673 = $A(inputs);
    var v674 = Element.extend;
    return JAM.call(v673.map, v673, [v674], JAM.policy.p1);
  }
  var i$$56 = 0;
  var matchingInputs = [];
  var length$$31 = inputs.length;
  var v678 = i$$56 < length$$31;
  for (;v678;) {
    var input = inputs[i$$56];
    var v3157 = typeName;
    if (v3157) {
      var v3627 = input.type;
      v3157 = v3627 != typeName;
    }
    var v2232 = v3157;
    var v3159 = !v2232;
    if (v3159) {
      var v3158 = name$$44;
      if (v3158) {
        var v3628 = input.name;
        v3158 = v3628 != name$$44;
      }
      v2232 = v3158;
    }
    var v676 = v2232;
    if (v676) {
      i$$56 = i$$56 + 1;
      v678 = i$$56 < length$$31;
      continue;
    }
    var v677 = JAM.call(Element.extend, Element, [input], JAM.policy.p1);
    JAM.call(matchingInputs.push, matchingInputs, [v677], JAM.policy.p1);
    i$$56 = i$$56 + 1;
    v678 = i$$56 < length$$31;
  }
  return matchingInputs;
}
function v277(form$$4) {
  var v679 = JAM.call($, null, [form$$4], JAM.policy.p1);
  var elements$$7 = JAM.call(v679.getElementsByTagName, v679, ["*"], JAM.policy.p1);
  var element$$147;
  var results$$19 = [];
  var v680 = Form.Element;
  var serializers = v680.Serializers;
  var i$$55 = 0;
  var v683 = element$$147 = elements$$7[i$$55];
  for (;v683;) {
    var v2233 = serializers;
    var v3160 = element$$147.tagName;
    var v2234 = JAM.call(v3160.toLowerCase, v3160, [], JAM.policy.p1);
    var v682 = v2233[v2234];
    if (v682) {
      var v681 = JAM.call(Element.extend, Element, [element$$147], JAM.policy.p1);
      JAM.call(results$$19.push, results$$19, [v681], JAM.policy.p1);
    }
    i$$55 = i$$55 + 1;
    v683 = element$$147 = elements$$7[i$$55];
  }
  return results$$19;
}
function v276(form$$3, options$$9) {
  var v684 = JAM.call(Form.getElements, Form, [form$$3], JAM.policy.p1);
  return JAM.call(Form.serializeElements, Form, [v684, options$$9], JAM.policy.p1);
}
function v275(elements$$6, options$$8) {
  function v274(result$$15, element$$146) {
    var v3161 = element$$146.disabled;
    var v2235 = !v3161;
    if (v2235) {
      v2235 = element$$146.name;
    }
    var v687 = v2235;
    if (v687) {
      key$$27 = element$$146.name;
      var v685 = JAM.call($, null, [element$$146], JAM.policy.p1);
      value$$88 = JAM.call(v685.getValue, v685, [], JAM.policy.p1);
      var v3162 = value$$88 != null;
      if (v3162) {
        var v3629 = element$$146.type;
        v3162 = v3629 != "file";
      }
      var v2236 = v3162;
      if (v2236) {
        var v3630 = element$$146.type;
        var v3163 = v3630 != "submit";
        var v3632 = !v3163;
        if (v3632) {
          var v3883 = !submitted;
          if (v3883) {
            v3883 = submit !== false;
          }
          var v3813 = v3883;
          if (v3813) {
            var v3884 = !submit;
            var v3922 = !v3884;
            if (v3922) {
              v3884 = key$$27 == submit;
            }
            v3813 = v3884;
          }
          var v3631 = v3813;
          if (v3631) {
            v3631 = submitted = true;
          }
          v3163 = v3631;
        }
        v2236 = v3163;
      }
      var v686 = v2236;
      if (v686) {
        result$$15 = JAM.call(accumulator, null, [result$$15, key$$27, value$$88], JAM.policy.p1);
      }
    }
    return result$$15;
  }
  function v273(result$$14, key$$29, value$$90) {
    value$$90 = JAM.call(value$$90.gsub, value$$90, [/(\r)?\n/, "\r\n"], JAM.policy.p1);
    value$$90 = encodeURIComponent(value$$90);
    value$$90 = JAM.call(value$$90.gsub, value$$90, [/%20/, "+"], JAM.policy.p1);
    var v3814;
    if (result$$14) {
      v3814 = "&";
    } else {
      v3814 = "";
    }
    var v3633 = v3814;
    var v3164 = result$$14 + v3633;
    var v3165 = encodeURIComponent(key$$29);
    var v2237 = v3164 + v3165;
    var v688 = v2237 + "=";
    return v688 + value$$90;
  }
  function v272(result$$13, key$$28, value$$89) {
    var v692 = key$$28 in result$$13;
    if (v692) {
      var v3166 = result$$13[key$$28];
      var v2238 = JAM.call(Object.isArray, Object, [v3166], JAM.policy.p1);
      var v690 = !v2238;
      if (v690) {
        var v689 = result$$13[key$$28];
        JAM.set(result$$13, key$$28, [v689], JAM.policy.p2);
      }
      var v691 = result$$13[key$$28];
      JAM.call(v691.push, v691, [value$$89], JAM.policy.p1);
    } else {
      JAM.set(result$$13, key$$28, value$$89, JAM.policy.p2);
    }
    return result$$13;
  }
  var v2239 = typeof options$$8;
  var v695 = v2239 != "object";
  if (v695) {
    var v2240 = !options$$8;
    var v693 = !v2240;
    options$$8 = {hash:v693};
  } else {
    var v2241 = options$$8.hash;
    var v694 = JAM.call(Object.isUndefined, Object, [v2241], JAM.policy.p1);
    if (v694) {
      options$$8.hash = true;
    }
  }
  var key$$27;
  var value$$88;
  var submitted = false;
  var submit = options$$8.submit;
  var accumulator;
  var initial;
  var v696 = options$$8.hash;
  if (v696) {
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
    var v2242 = scope || document;
    var v697 = JAM.call(engine, null, [selector$$3, v2242], JAM.policy.p1);
    return JAM.call(extendElements$$1, null, [v697], JAM.policy.p1);
  }
  function match$$46(element$$145, selector$$4) {
    var v3167 = [element$$145];
    var v2243 = JAM.call(engine.matches, engine, [selector$$4, v3167], JAM.policy.p1);
    var v698 = v2243.length;
    return v698 == 1;
  }
  var v699 = Prototype.Selector;
  var extendElements$$1 = v699.extendElements;
  var v700 = Prototype.Selector;
  v700.engine = engine;
  var v701 = Prototype.Selector;
  v701.select = select$$2;
  var v702 = Prototype.Selector;
  v702.match = match$$46;
  return;
}
function v269() {
  function v268(elem$$46) {
    var v2244;
    if (elem$$46) {
      var v3168 = elem$$46.ownerDocument;
      var v3634 = !v3168;
      if (v3634) {
        v3168 = elem$$46;
      }
      v2244 = v3168;
    } else {
      v2244 = 0;
    }
    var v703 = v2244;
    var documentElement = v703.documentElement;
    var v704;
    if (documentElement) {
      var v2245 = documentElement.nodeName;
      v704 = v2245 !== "HTML";
    } else {
      v704 = false;
    }
    return v704;
  }
  function v267() {
    return false;
  }
  function v266(a$$11, b$$5) {
    var v3169 = JAM.call(a$$11.compareDocumentPosition, a$$11, [b$$5], JAM.policy.p1);
    var v2246 = v3169 & 16;
    var v705 = !v2246;
    return!v705;
  }
  function v265(a$$10, b$$4) {
    var v706 = a$$10 !== b$$4;
    if (v706) {
      var v2247;
      var v3170 = a$$10.contains;
      if (v3170) {
        v2247 = JAM.call(a$$10.contains, a$$10, [b$$4], JAM.policy.p1);
      } else {
        v2247 = true;
      }
      v706 = v2247;
    }
    return v706;
  }
  function v264() {
    function v263(match$$44, context$$37, isXML$$9) {
      var v3635 = context$$37.getElementsByClassName;
      var v3171 = typeof v3635;
      var v2248 = v3171 !== "undefined";
      if (v2248) {
        v2248 = !isXML$$9;
      }
      var v708 = v2248;
      if (v708) {
        var v707 = match$$44[1];
        return JAM.call(context$$37.getElementsByClassName, context$$37, [v707], JAM.policy.p1);
      }
      return;
    }
    var div$$4 = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
    JAM.set(div$$4, "innerHTML", "<div class='test e'></div><div class='test'></div>");
    var v3172 = div$$4.getElementsByClassName;
    var v2249 = !v3172;
    var v3174 = !v2249;
    if (v3174) {
      var v3636 = JAM.call(div$$4.getElementsByClassName, div$$4, ["e"], JAM.policy.p1);
      var v3173 = v3636.length;
      v2249 = v3173 === 0;
    }
    var v709 = v2249;
    if (v709) {
      return;
    }
    var v710 = div$$4.lastChild;
    v710.className = "e";
    var v3175 = JAM.call(div$$4.getElementsByClassName, div$$4, ["e"], JAM.policy.p1);
    var v2250 = v3175.length;
    var v711 = v2250 === 1;
    if (v711) {
      return;
    }
    var v712 = Expr.order;
    JAM.call(v712.splice, v712, [1, 0, "CLASS"], JAM.policy.p1);
    var v713 = Expr.find;
    v713.CLASS = v263;
    div$$4 = null;
    return;
  }
  function v262() {
    function v261(node$$18, expr$$8) {
      expr$$8 = JAM.call(expr$$8.replace, expr$$8, [/\=\s*([^'"\]]*)\s*\]/g, "='$1']"], JAM.policy.p1);
      var v2251 = JAM.call(Sizzle$$1.isXML, Sizzle$$1, [node$$18], JAM.policy.p1);
      var v716 = !v2251;
      if (v716) {
        try {
          var v2252 = pseudoWorks;
          var v3177 = !v2252;
          if (v3177) {
            var v3885 = Expr.match;
            var v3815 = v3885.PSEUDO;
            var v3637 = JAM.call(v3815.test, v3815, [expr$$8], JAM.policy.p1);
            var v3176 = !v3637;
            if (v3176) {
              var v3638 = JAM.call(/!=/.test, /!=/, [expr$$8], JAM.policy.p1);
              v3176 = !v3638;
            }
            v2252 = v3176;
          }
          var v715 = v2252;
          if (v715) {
            var ret$$6 = JAM.call(matches.call, matches, [node$$18, expr$$8], JAM.policy.p1);
            var v3178 = ret$$6;
            var v3639 = !v3178;
            if (v3639) {
              v3178 = !disconnectedMatch;
            }
            var v2253 = v3178;
            var v3180 = !v2253;
            if (v3180) {
              var v3179 = node$$18.document;
              if (v3179) {
                var v3816 = node$$18.document;
                var v3640 = v3816.nodeType;
                v3179 = v3640 !== 11;
              }
              v2253 = v3179;
            }
            var v714 = v2253;
            if (v714) {
              return ret$$6;
            }
          }
        } catch (e$$25) {
        }
      }
      var v3181 = [node$$18];
      var v2254 = JAM.call(Sizzle$$1, null, [expr$$8, null, null, v3181], JAM.policy.p1);
      var v717 = v2254.length;
      return v717 > 0;
    }
    var html$$1 = document.documentElement;
    var v3182 = html$$1.matchesSelector;
    var v3641 = !v3182;
    if (v3641) {
      v3182 = html$$1.mozMatchesSelector;
    }
    var v2255 = v3182;
    var v3183 = !v2255;
    if (v3183) {
      v2255 = html$$1.webkitMatchesSelector;
    }
    var v718 = v2255;
    var v2256 = !v718;
    if (v2256) {
      v718 = html$$1.msMatchesSelector;
    }
    var matches = v718;
    if (matches) {
      var v2257 = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
      var v719 = JAM.call(matches.call, matches, [v2257, "div"], JAM.policy.p1);
      var disconnectedMatch = !v719;
      var pseudoWorks = false;
      try {
        var v720 = document.documentElement;
        JAM.call(matches.call, matches, [v720, "[test!='']:sizzle"], JAM.policy.p1);
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
      var v2258 = !seed$$1;
      if (v2258) {
        var v3184 = JAM.call(Sizzle$$1.isXML, Sizzle$$1, [context$$36], JAM.policy.p1);
        v2258 = !v3184;
      }
      var v741 = v2258;
      if (v741) {
        var match$$43 = JAM.call(/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec, /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/, [query$$2], JAM.policy.p1);
        var v2259 = match$$43;
        if (v2259) {
          var v3642 = context$$36.nodeType;
          var v3185 = v3642 === 1;
          var v3644 = !v3185;
          if (v3644) {
            var v3643 = context$$36.nodeType;
            v3185 = v3643 === 9;
          }
          v2259 = v3185;
        }
        var v725 = v2259;
        if (v725) {
          var v724 = match$$43[1];
          if (v724) {
            var v721 = JAM.call(context$$36.getElementsByTagName, context$$36, [query$$2], JAM.policy.p1);
            return JAM.call(makeArray, null, [v721, extra$$1], JAM.policy.p1);
          } else {
            var v3186 = match$$43[2];
            if (v3186) {
              var v3645 = Expr.find;
              v3186 = v3645.CLASS;
            }
            var v2260 = v3186;
            if (v2260) {
              v2260 = context$$36.getElementsByClassName;
            }
            var v723 = v2260;
            if (v723) {
              var v2261 = match$$43[2];
              var v722 = JAM.call(context$$36.getElementsByClassName, context$$36, [v2261], JAM.policy.p1);
              return JAM.call(makeArray, null, [v722, extra$$1], JAM.policy.p1);
            }
          }
        }
        var v2262 = context$$36.nodeType;
        var v740 = v2262 === 9;
        if (v740) {
          var v2263 = query$$2 === "body";
          if (v2263) {
            v2263 = context$$36.body;
          }
          var v732 = v2263;
          if (v732) {
            var v2264 = context$$36.body;
            var v726 = [v2264];
            return JAM.call(makeArray, null, [v726, extra$$1], JAM.policy.p1);
          } else {
            var v2265 = match$$43;
            if (v2265) {
              v2265 = match$$43[3];
            }
            var v731 = v2265;
            if (v731) {
              var v727 = match$$43[3];
              var elem$$45 = JAM.call(context$$36.getElementById, context$$36, [v727], JAM.policy.p1);
              var v2266 = elem$$45;
              if (v2266) {
                v2266 = elem$$45.parentNode;
              }
              var v730 = v2266;
              if (v730) {
                var v2267 = elem$$45.id;
                var v2268 = match$$43[3];
                var v729 = v2267 === v2268;
                if (v729) {
                  var v728 = [elem$$45];
                  return JAM.call(makeArray, null, [v728, extra$$1], JAM.policy.p1);
                }
              } else {
                return JAM.call(makeArray, null, [[], extra$$1], JAM.policy.p1);
              }
            }
          }
          try {
            var v733 = JAM.call(context$$36.querySelectorAll, context$$36, [query$$2], JAM.policy.p1);
            return JAM.call(makeArray, null, [v733, extra$$1], JAM.policy.p1);
          } catch (qsaError) {
          }
        } else {
          var v3187 = context$$36.nodeType;
          var v2269 = v3187 === 1;
          if (v2269) {
            var v3646 = context$$36.nodeName;
            var v3188 = JAM.call(v3646.toLowerCase, v3646, [], JAM.policy.p1);
            v2269 = v3188 !== "object";
          }
          var v739 = v2269;
          if (v739) {
            var oldContext = context$$36;
            var old$$1 = JAM.call(context$$36.getAttribute, context$$36, ["id"], JAM.policy.p1);
            var nid = old$$1 || id$$3;
            var hasParent = context$$36.parentNode;
            var relativeHierarchySelector = JAM.call(/^\s*[+~]/.test, /^\s*[+~]/, [query$$2], JAM.policy.p1);
            var v734 = !old$$1;
            if (v734) {
              JAM.call(context$$36.setAttribute, context$$36, ["id", nid], JAM.policy.p1);
            } else {
              nid = JAM.call(nid.replace, nid, [/'/g, "\\$&"], JAM.policy.p1);
            }
            var v735 = relativeHierarchySelector && hasParent;
            if (v735) {
              context$$36 = context$$36.parentNode;
            }
            try {
              var v2270 = !relativeHierarchySelector;
              var v3189 = !v2270;
              if (v3189) {
                v2270 = hasParent;
              }
              var v737 = v2270;
              if (v737) {
                var v3647 = "[id='" + nid;
                var v3190 = v3647 + "'] ";
                var v2271 = v3190 + query$$2;
                var v736 = JAM.call(context$$36.querySelectorAll, context$$36, [v2271], JAM.policy.p1);
                return JAM.call(makeArray, null, [v736, extra$$1], JAM.policy.p1);
              }
            } catch (pseudoError) {
            } finally {
              var v738 = !old$$1;
              if (v738) {
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
    var v2272 = div$$3.querySelectorAll;
    if (v2272) {
      var v3648 = JAM.call(div$$3.querySelectorAll, div$$3, [".TEST"], JAM.policy.p1);
      var v3191 = v3648.length;
      v2272 = v3191 === 0;
    }
    var v742 = v2272;
    if (v742) {
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
      var v743 = match$$42[1];
      var results$$18 = JAM.call(context$$35.getElementsByTagName, context$$35, [v743], JAM.policy.p1);
      var v2273 = match$$42[1];
      var v747 = v2273 === "*";
      if (v747) {
        var tmp = [];
        var i$$53 = 0;
        var v746 = results$$18[i$$53];
        for (;v746;) {
          var v3192 = results$$18[i$$53];
          var v2274 = v3192.nodeType;
          var v745 = v2274 === 1;
          if (v745) {
            var v744 = results$$18[i$$53];
            JAM.call(tmp.push, tmp, [v744], JAM.policy.p1);
          }
          i$$53 = i$$53 + 1;
          v746 = results$$18[i$$53];
        }
        results$$18 = tmp;
      }
      return results$$18;
    }
    var div$$2 = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
    var v748 = JAM.call(document.createComment, document, [""], JAM.policy.p1);
    JAM.call(div$$2.appendChild, div$$2, [v748], JAM.policy.p1);
    var v3193 = JAM.call(div$$2.getElementsByTagName, div$$2, ["*"], JAM.policy.p1);
    var v2275 = v3193.length;
    var v750 = v2275 > 0;
    if (v750) {
      var v749 = Expr.find;
      v749.TAG = v256;
    }
    JAM.set(div$$2, "innerHTML", "<a href='#'></a>");
    var v3194 = div$$2.firstChild;
    if (v3194) {
      var v3886 = div$$2.firstChild;
      var v3817 = v3886.getAttribute;
      var v3649 = typeof v3817;
      v3194 = v3649 !== "undefined";
    }
    var v2276 = v3194;
    if (v2276) {
      var v3650 = div$$2.firstChild;
      var v3195 = JAM.call(v3650.getAttribute, v3650, ["href"], JAM.policy.p1);
      v2276 = v3195 !== "#";
    }
    var v752 = v2276;
    if (v752) {
      var v751 = Expr.attrHandle;
      v751.href = v257;
    }
    div$$2 = null;
    return;
  }
  function v255() {
    function v254(elem$$43, match$$41) {
      var v3196 = elem$$43.getAttributeNode;
      var v2277 = typeof v3196;
      var v753 = v2277 !== "undefined";
      if (v753) {
        v753 = JAM.call(elem$$43.getAttributeNode, elem$$43, ["id"], JAM.policy.p1);
      }
      var node$$17 = v753;
      var v3197 = elem$$43.nodeType;
      var v2278 = v3197 === 1;
      if (v2278) {
        v2278 = node$$17;
      }
      var v754 = v2278;
      if (v754) {
        var v2279 = node$$17.nodeValue;
        v754 = v2279 === match$$41;
      }
      return v754;
    }
    function v253(match$$40, context$$34, isXML$$8) {
      var v3651 = context$$34.getElementById;
      var v3198 = typeof v3651;
      var v2280 = v3198 !== "undefined";
      if (v2280) {
        v2280 = !isXML$$8;
      }
      var v757 = v2280;
      if (v757) {
        var v755 = match$$40[1];
        var m$$4 = JAM.call(context$$34.getElementById, context$$34, [v755], JAM.policy.p1);
        var v756;
        if (m$$4) {
          var v2281;
          var v3818 = m$$4.id;
          var v3819 = match$$40[1];
          var v3652 = v3818 === v3819;
          var v3821 = !v3652;
          if (v3821) {
            var v3923 = m$$4.getAttributeNode;
            var v3887 = typeof v3923;
            var v3820 = v3887 !== "undefined";
            if (v3820) {
              var v3924 = JAM.call(m$$4.getAttributeNode, m$$4, ["id"], JAM.policy.p1);
              var v3888 = v3924.nodeValue;
              var v3889 = match$$40[1];
              v3820 = v3888 === v3889;
            }
            v3652 = v3820;
          }
          var v3199 = v3652;
          if (v3199) {
            v2281 = [m$$4];
          } else {
            v2281 = undefined;
          }
          v756 = v2281;
        } else {
          v756 = [];
        }
        return v756;
      }
      return;
    }
    var form$$1 = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
    var v2282 = new Date;
    var v758 = JAM.call(v2282.getTime, v2282, [], JAM.policy.p1);
    var id$$2 = "script" + v758;
    var root = document.documentElement;
    var v759 = "<a name='" + id$$2;
    JAM.set(form$$1, "innerHTML", v759 + "'/>");
    var v760 = root.firstChild;
    JAM.call(root.insertBefore, root, [form$$1, v760], JAM.policy.p1);
    var v763 = JAM.call(document.getElementById, document, [id$$2], JAM.policy.p1);
    if (v763) {
      var v761 = Expr.find;
      v761.ID = v253;
      var v762 = Expr.filter;
      v762.ID = v254;
    }
    JAM.call(root.removeChild, root, [form$$1], JAM.policy.p1);
    root = form$$1 = null;
    return;
  }
  function v252(elems) {
    var ret$$5 = "";
    var elem$$42;
    var i$$52 = 0;
    var v766 = elems[i$$52];
    for (;v766;) {
      elem$$42 = elems[i$$52];
      var v3200 = elem$$42.nodeType;
      var v2283 = v3200 === 3;
      var v3202 = !v2283;
      if (v3202) {
        var v3201 = elem$$42.nodeType;
        v2283 = v3201 === 4;
      }
      var v765 = v2283;
      if (v765) {
        var v2284 = elem$$42.nodeValue;
        ret$$5 = ret$$5 + v2284;
      } else {
        var v2285 = elem$$42.nodeType;
        var v764 = v2285 !== 8;
        if (v764) {
          var v2286 = ret$$5;
          var v3203 = elem$$42.childNodes;
          var v2287 = JAM.call(Sizzle$$1.getText, Sizzle$$1, [v3203], JAM.policy.p1);
          ret$$5 = v2286 + v2287;
        }
      }
      i$$52 = i$$52 + 1;
      v766 = elems[i$$52];
    }
    return ret$$5;
  }
  function v251(a$$9, b$$3, ret$$4) {
    var v767 = a$$9 === b$$3;
    if (v767) {
      return ret$$4;
    }
    var cur$$4 = a$$9.nextSibling;
    for (;cur$$4;) {
      var v768 = cur$$4 === b$$3;
      if (v768) {
        return-1;
      }
      cur$$4 = cur$$4.nextSibling;
    }
    return 1;
  }
  function v250(a$$8, b$$2) {
    var v772 = a$$8 === b$$2;
    if (v772) {
      hasDuplicate = true;
      return 0;
    } else {
      var v2288 = a$$8.sourceIndex;
      if (v2288) {
        v2288 = b$$2.sourceIndex;
      }
      var v771 = v2288;
      if (v771) {
        var v769 = a$$8.sourceIndex;
        var v770 = b$$2.sourceIndex;
        return v769 - v770;
      }
    }
    var al;
    var bl$$1;
    var ap = [];
    var bp = [];
    var aup = a$$8.parentNode;
    var bup = b$$2.parentNode;
    var cur$$3 = aup;
    var v775 = aup === bup;
    if (v775) {
      return JAM.call(siblingCheck, null, [a$$8, b$$2], JAM.policy.p1);
    } else {
      var v774 = !aup;
      if (v774) {
        return-1;
      } else {
        var v773 = !bup;
        if (v773) {
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
    var v2289 = i$$51 < al;
    if (v2289) {
      v2289 = i$$51 < bl$$1;
    }
    var v779 = v2289;
    for (;v779;) {
      var v2290 = ap[i$$51];
      var v2291 = bp[i$$51];
      var v778 = v2290 !== v2291;
      if (v778) {
        var v776 = ap[i$$51];
        var v777 = bp[i$$51];
        return JAM.call(siblingCheck, null, [v776, v777], JAM.policy.p1);
      }
      i$$51 = i$$51 + 1;
      var v2292 = i$$51 < al;
      if (v2292) {
        v2292 = i$$51 < bl$$1;
      }
      v779 = v2292;
    }
    var v780;
    var v2295 = i$$51 === al;
    if (v2295) {
      var v2293 = bp[i$$51];
      v780 = JAM.call(siblingCheck, null, [a$$8, v2293, -1], JAM.policy.p1);
    } else {
      var v2294 = ap[i$$51];
      v780 = JAM.call(siblingCheck, null, [v2294, b$$2, 1], JAM.policy.p1);
    }
    return v780;
  }
  function v249(a$$7, b$$1) {
    var v781 = a$$7 === b$$1;
    if (v781) {
      hasDuplicate = true;
      return 0;
    }
    var v3204 = a$$7.compareDocumentPosition;
    var v2296 = !v3204;
    var v3206 = !v2296;
    if (v3206) {
      var v3205 = b$$1.compareDocumentPosition;
      v2296 = !v3205;
    }
    var v783 = v2296;
    if (v783) {
      var v782;
      var v2297 = a$$7.compareDocumentPosition;
      if (v2297) {
        v782 = -1;
      } else {
        v782 = 1;
      }
      return v782;
    }
    var v784;
    var v3207 = JAM.call(a$$7.compareDocumentPosition, a$$7, [b$$1], JAM.policy.p1);
    var v2298 = v3207 & 4;
    if (v2298) {
      v784 = -1;
    } else {
      v784 = 1;
    }
    return v784;
  }
  function v248(array$$22, results$$17) {
    var i$$50 = 0;
    var ret$$3 = results$$17 || [];
    var v2299 = JAM.call(toString.call, toString, [array$$22], JAM.policy.p1);
    var v791 = v2299 === "[object Array]";
    if (v791) {
      var v2300 = Array.prototype;
      var v785 = v2300.push;
      JAM.call(v785.apply, v785, [ret$$3, array$$22], JAM.policy.p1);
    } else {
      var v3208 = array$$22.length;
      var v2301 = typeof v3208;
      var v790 = v2301 === "number";
      if (v790) {
        var l$$7 = array$$22.length;
        var v787 = i$$50 < l$$7;
        for (;v787;) {
          var v786 = array$$22[i$$50];
          JAM.call(ret$$3.push, ret$$3, [v786], JAM.policy.p1);
          i$$50 = i$$50 + 1;
          v787 = i$$50 < l$$7;
        }
      } else {
        var v789 = array$$22[i$$50];
        for (;v789;) {
          var v788 = array$$22[i$$50];
          JAM.call(ret$$3.push, ret$$3, [v788], JAM.policy.p1);
          i$$50 = i$$50 + 1;
          v789 = array$$22[i$$50];
        }
      }
    }
    return ret$$3;
  }
  function v247(elem$$41, match$$39, i$$49, array$$20) {
    var name$$43 = match$$39[2];
    var v792 = Expr.setFilters;
    var filter$$8 = v792[name$$43];
    if (filter$$8) {
      return JAM.call(filter$$8, null, [elem$$41, i$$49, match$$39, array$$20], JAM.policy.p1);
    }
    return;
  }
  function v246(elem$$40, match$$38) {
    var name$$42 = match$$38[1];
    var v793;
    var v3209 = Expr.attrHandle;
    var v2304 = v3209[name$$42];
    if (v2304) {
      var v2302 = Expr.attrHandle;
      v793 = JAM.call(v2302[name$$42], v2302, [elem$$40], JAM.policy.p1);
    } else {
      var v2303;
      var v3653 = elem$$40[name$$42];
      var v3210 = v3653 != null;
      if (v3210) {
        v2303 = elem$$40[name$$42];
      } else {
        v2303 = JAM.call(elem$$40.getAttribute, elem$$40, [name$$42], JAM.policy.p1);
      }
      v793 = v2303;
    }
    var result$$12 = v793;
    var value$$87 = result$$12 + "";
    var type$$32 = match$$38[2];
    var check = match$$38[4];
    var v794;
    var v2306 = result$$12 == null;
    if (v2306) {
      v794 = type$$32 === "!=";
    } else {
      var v2305;
      var v3212 = type$$32 === "=";
      if (v3212) {
        v2305 = value$$87 === check;
      } else {
        var v3211;
        var v3656 = type$$32 === "*=";
        if (v3656) {
          var v3654 = JAM.call(value$$87.indexOf, value$$87, [check], JAM.policy.p1);
          v3211 = v3654 >= 0;
        } else {
          var v3655;
          var v3824 = type$$32 === "~=";
          if (v3824) {
            var v3925 = " " + value$$87;
            var v3890 = v3925 + " ";
            var v3822 = JAM.call(v3890.indexOf, v3890, [check], JAM.policy.p1);
            v3655 = v3822 >= 0;
          } else {
            var v3823;
            var v3893 = !check;
            if (v3893) {
              var v3891 = value$$87;
              if (v3891) {
                v3891 = result$$12 !== false;
              }
              v3823 = v3891;
            } else {
              var v3892;
              var v3927 = type$$32 === "!=";
              if (v3927) {
                v3892 = value$$87 !== check;
              } else {
                var v3926;
                var v3939 = type$$32 === "^=";
                if (v3939) {
                  var v3937 = JAM.call(value$$87.indexOf, value$$87, [check], JAM.policy.p1);
                  v3926 = v3937 === 0;
                } else {
                  var v3938;
                  var v3949 = type$$32 === "$=";
                  if (v3949) {
                    var v3957 = value$$87.length;
                    var v3958 = check.length;
                    var v3952 = v3957 - v3958;
                    var v3947 = JAM.call(value$$87.substr, value$$87, [v3952], JAM.policy.p1);
                    v3938 = v3947 === check;
                  } else {
                    var v3948;
                    var v3954 = type$$32 === "|=";
                    if (v3954) {
                      var v3953 = value$$87 === check;
                      var v3961 = !v3953;
                      if (v3961) {
                        var v3966 = check.length;
                        var v3964 = v3966 + 1;
                        var v3959 = JAM.call(value$$87.substr, value$$87, [0, v3964], JAM.policy.p1);
                        var v3960 = check + "-";
                        v3953 = v3959 === v3960;
                      }
                      v3948 = v3953;
                    } else {
                      v3948 = false;
                    }
                    v3938 = v3948;
                  }
                  v3926 = v3938;
                }
                v3892 = v3926;
              }
              v3823 = v3892;
            }
            v3655 = v3823;
          }
          v3211 = v3655;
        }
        v2305 = v3211;
      }
      v794 = v2305;
    }
    return v794;
  }
  function v245(elem$$39, match$$37) {
    var v3825 = elem$$39.className;
    var v3894 = !v3825;
    if (v3894) {
      v3825 = JAM.call(elem$$39.getAttribute, elem$$39, ["class"], JAM.policy.p1);
    }
    var v3657 = v3825;
    var v3213 = " " + v3657;
    var v2307 = v3213 + " ";
    var v795 = JAM.call(v2307.indexOf, v2307, [match$$37], JAM.policy.p1);
    return v795 > -1;
  }
  function v244(elem$$38, match$$36) {
    var v2308 = match$$36 === "*";
    if (v2308) {
      var v3214 = elem$$38.nodeType;
      v2308 = v3214 === 1;
    }
    var v796 = v2308;
    var v2310 = !v796;
    if (v2310) {
      var v3215 = elem$$38.nodeName;
      var v2309 = JAM.call(v3215.toLowerCase, v3215, [], JAM.policy.p1);
      v796 = v2309 === match$$36;
    }
    return v796;
  }
  function v243(elem$$37, match$$35) {
    var v2311 = elem$$37.nodeType;
    var v797 = v2311 === 1;
    if (v797) {
      var v2312 = JAM.call(elem$$37.getAttribute, elem$$37, ["id"], JAM.policy.p1);
      v797 = v2312 === match$$35;
    }
    return v797;
  }
  function v242(elem$$36, match$$34) {
    var type$$31 = match$$34[1];
    var node$$16 = elem$$36;
    switch(type$$31) {
      case "only":
      ;
      case "first":
        var v799 = node$$16 = node$$16.previousSibling;
        for (;v799;) {
          var v2313 = node$$16.nodeType;
          var v798 = v2313 === 1;
          if (v798) {
            return false;
          }
          v799 = node$$16 = node$$16.previousSibling;
        }
        var v800 = type$$31 === "first";
        if (v800) {
          return true;
        }
        node$$16 = elem$$36;
      case "last":
        var v802 = node$$16 = node$$16.nextSibling;
        for (;v802;) {
          var v2314 = node$$16.nodeType;
          var v801 = v2314 === 1;
          if (v801) {
            return false;
          }
          v802 = node$$16 = node$$16.nextSibling;
        }
        return true;
      case "nth":
        var first$$2 = match$$34[2];
        var last$$1 = match$$34[3];
        var v2315 = first$$2 === 1;
        if (v2315) {
          v2315 = last$$1 === 0;
        }
        var v803 = v2315;
        if (v803) {
          return true;
        }
        var doneName$$4 = match$$34[0];
        var parent$$9 = elem$$36.parentNode;
        var v2316 = parent$$9;
        if (v2316) {
          var v3658 = parent$$9.sizcache;
          var v3216 = v3658 !== doneName$$4;
          var v3660 = !v3216;
          if (v3660) {
            var v3659 = elem$$36.nodeIndex;
            v3216 = !v3659;
          }
          v2316 = v3216;
        }
        var v805 = v2316;
        if (v805) {
          var count$$5 = 0;
          node$$16 = parent$$9.firstChild;
          for (;node$$16;) {
            var v2317 = node$$16.nodeType;
            var v804 = v2317 === 1;
            if (v804) {
              node$$16.nodeIndex = count$$5 = count$$5 + 1;
            }
            node$$16 = node$$16.nextSibling;
          }
          parent$$9.sizcache = doneName$$4;
        }
        var v806 = elem$$36.nodeIndex;
        var diff = v806 - last$$1;
        var v808 = first$$2 === 0;
        if (v808) {
          return diff === 0;
        } else {
          var v2318 = diff % first$$2;
          var v807 = v2318 === 0;
          if (v807) {
            var v2319 = diff / first$$2;
            v807 = v2319 >= 0;
          }
          return v807;
        }
      ;
    }
    return;
  }
  function v241(elem$$35, match$$33, i$$48, array$$19) {
    var name$$41 = match$$33[1];
    var v809 = Expr.filters;
    var filter$$7 = v809[name$$41];
    if (filter$$7) {
      return JAM.call(filter$$7, null, [elem$$35, i$$48, match$$33, array$$19], JAM.policy.p1);
    } else {
      var v814 = name$$41 === "contains";
      if (v814) {
        var v3826 = elem$$35.textContent;
        var v3895 = !v3826;
        if (v3895) {
          v3826 = elem$$35.innerText;
        }
        var v3661 = v3826;
        var v3828 = !v3661;
        if (v3828) {
          var v3827 = [elem$$35];
          v3661 = JAM.call(Sizzle$$1.getText, Sizzle$$1, [v3827], JAM.policy.p1);
        }
        var v3217 = v3661;
        var v3662 = !v3217;
        if (v3662) {
          v3217 = "";
        }
        var v2320 = v3217;
        var v2321 = match$$33[3];
        var v810 = JAM.call(v2320.indexOf, v2320, [v2321], JAM.policy.p1);
        return v810 >= 0;
      } else {
        var v813 = name$$41 === "not";
        if (v813) {
          var not$$4 = match$$33[3];
          var j$$1 = 0;
          var l$$6 = not$$4.length;
          var v812 = j$$1 < l$$6;
          for (;v812;) {
            var v2322 = not$$4[j$$1];
            var v811 = v2322 === elem$$35;
            if (v811) {
              return false;
            }
            j$$1 = j$$1 + 1;
            v812 = j$$1 < l$$6;
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
    var v2323 = match$$32[3];
    var v815 = v2323 - 0;
    return v815 === i$$47;
  }
  function v239(elem$$33, i$$46, match$$31) {
    var v2324 = match$$31[3];
    var v816 = v2324 - 0;
    return v816 === i$$46;
  }
  function v238(elem$$32, i$$45, match$$30) {
    var v2325 = match$$30[3];
    var v817 = v2325 - 0;
    return i$$45 > v817;
  }
  function v237(elem$$31, i$$44, match$$29) {
    var v2326 = match$$29[3];
    var v818 = v2326 - 0;
    return i$$44 < v818;
  }
  function v236(elem$$30, i$$43) {
    var v819 = i$$43 % 2;
    return v819 === 1;
  }
  function v235(elem$$29, i$$42) {
    var v820 = i$$42 % 2;
    return v820 === 0;
  }
  function v234(elem$$28, i$$41, match$$28, array$$18) {
    var v2327 = array$$18.length;
    var v821 = v2327 - 1;
    return i$$41 === v821;
  }
  function v233(elem$$27, i$$40) {
    return i$$40 === 0;
  }
  function v232(elem$$26) {
    var v2328 = elem$$26.ownerDocument;
    var v822 = v2328.activeElement;
    return elem$$26 === v822;
  }
  function v231(elem$$25) {
    var v823 = elem$$25.nodeName;
    return JAM.call(/input|select|textarea|button/i.test, /input|select|textarea|button/i, [v823], JAM.policy.p1);
  }
  function v230(elem$$24) {
    var v824 = elem$$24.nodeName;
    var name$$40 = JAM.call(v824.toLowerCase, v824, [], JAM.policy.p1);
    var v2329 = name$$40 === "input";
    if (v2329) {
      var v3218 = elem$$24.type;
      v2329 = "button" === v3218;
    }
    var v825 = v2329;
    var v2330 = !v825;
    if (v2330) {
      v825 = name$$40 === "button";
    }
    return v825;
  }
  function v229(elem$$23) {
    var v826 = elem$$23.nodeName;
    var name$$39 = JAM.call(v826.toLowerCase, v826, [], JAM.policy.p1);
    var v2331 = name$$39 === "input";
    var v3219 = !v2331;
    if (v3219) {
      v2331 = name$$39 === "button";
    }
    var v827 = v2331;
    if (v827) {
      var v2332 = elem$$23.type;
      v827 = "reset" === v2332;
    }
    return v827;
  }
  function v228(elem$$22) {
    var v3220 = elem$$22.nodeName;
    var v2333 = JAM.call(v3220.toLowerCase, v3220, [], JAM.policy.p1);
    var v828 = v2333 === "input";
    if (v828) {
      var v2334 = elem$$22.type;
      v828 = "image" === v2334;
    }
    return v828;
  }
  function v227(elem$$21) {
    var v829 = elem$$21.nodeName;
    var name$$38 = JAM.call(v829.toLowerCase, v829, [], JAM.policy.p1);
    var v2335 = name$$38 === "input";
    var v3221 = !v2335;
    if (v3221) {
      v2335 = name$$38 === "button";
    }
    var v830 = v2335;
    if (v830) {
      var v2336 = elem$$21.type;
      v830 = "submit" === v2336;
    }
    return v830;
  }
  function v226(elem$$20) {
    var v3222 = elem$$20.nodeName;
    var v2337 = JAM.call(v3222.toLowerCase, v3222, [], JAM.policy.p1);
    var v831 = v2337 === "input";
    if (v831) {
      var v2338 = elem$$20.type;
      v831 = "password" === v2338;
    }
    return v831;
  }
  function v225(elem$$19) {
    var v3223 = elem$$19.nodeName;
    var v2339 = JAM.call(v3223.toLowerCase, v3223, [], JAM.policy.p1);
    var v832 = v2339 === "input";
    if (v832) {
      var v2340 = elem$$19.type;
      v832 = "file" === v2340;
    }
    return v832;
  }
  function v224(elem$$18) {
    var v3224 = elem$$18.nodeName;
    var v2341 = JAM.call(v3224.toLowerCase, v3224, [], JAM.policy.p1);
    var v833 = v2341 === "input";
    if (v833) {
      var v2342 = elem$$18.type;
      v833 = "checkbox" === v2342;
    }
    return v833;
  }
  function v223(elem$$17) {
    var v3225 = elem$$17.nodeName;
    var v2343 = JAM.call(v3225.toLowerCase, v3225, [], JAM.policy.p1);
    var v834 = v2343 === "input";
    if (v834) {
      var v2344 = elem$$17.type;
      v834 = "radio" === v2344;
    }
    return v834;
  }
  function v222(elem$$16) {
    var attr$$2 = JAM.call(elem$$16.getAttribute, elem$$16, ["type"], JAM.policy.p1);
    var type$$30 = elem$$16.type;
    var v3663 = elem$$16.nodeName;
    var v3226 = JAM.call(v3663.toLowerCase, v3663, [], JAM.policy.p1);
    var v2345 = v3226 === "input";
    if (v2345) {
      v2345 = "text" === type$$30;
    }
    var v835 = v2345;
    if (v835) {
      var v2346 = attr$$2 === type$$30;
      var v3227 = !v2346;
      if (v3227) {
        v2346 = attr$$2 === null;
      }
      v835 = v2346;
    }
    return v835;
  }
  function v221(elem$$15) {
    var v836 = elem$$15.nodeName;
    return JAM.call(/h\d/i.test, /h\d/i, [v836], JAM.policy.p1);
  }
  function v220(elem$$14, i$$39, match$$27) {
    var v3664 = match$$27[3];
    var v3228 = JAM.call(Sizzle$$1, null, [v3664, elem$$14], JAM.policy.p1);
    var v2347 = v3228.length;
    var v837 = !v2347;
    return!v837;
  }
  function v219(elem$$13) {
    var v838 = elem$$13.firstChild;
    return!v838;
  }
  function v218(elem$$12) {
    var v2348 = elem$$12.firstChild;
    var v839 = !v2348;
    return!v839;
  }
  function v217(elem$$11) {
    var v840 = elem$$11.selected;
    return v840 === true;
  }
  function v216(elem$$10) {
    var v841 = elem$$10.checked;
    return v841 === true;
  }
  function v215(elem$$9) {
    var v842 = elem$$9.disabled;
    return v842 === true;
  }
  function v214(elem$$8) {
    var v2349 = elem$$8.disabled;
    var v843 = v2349 === false;
    if (v843) {
      var v2350 = elem$$8.type;
      v843 = v2350 !== "hidden";
    }
    return v843;
  }
  function v213(match$$26) {
    JAM.call(match$$26.unshift, match$$26, [true], JAM.policy.p1);
    return match$$26;
  }
  function v212(match$$25, curLoop$$4, inplace$$3, result$$11, not$$3) {
    var v2351 = match$$25[1];
    var v851 = v2351 === "not";
    if (v851) {
      var v3896 = match$$25[3];
      var v3829 = JAM.call(chunker.exec, chunker, [v3896], JAM.policy.p1);
      var v3897 = !v3829;
      if (v3897) {
        v3829 = "";
      }
      var v3665 = v3829;
      var v3229 = v3665.length;
      var v2352 = v3229 > 1;
      var v3231 = !v2352;
      if (v3231) {
        var v3230 = match$$25[3];
        v2352 = JAM.call(/^\w/.test, /^\w/, [v3230], JAM.policy.p1);
      }
      var v849 = v2352;
      if (v849) {
        var v844 = match$$25;
        var v2353 = match$$25[3];
        var v3983 = JAM.call(Sizzle$$1, null, [v2353, null, null, curLoop$$4], JAM.policy.p1);
        v844[3] = v3983;
      } else {
        var v845 = match$$25[3];
        var v846 = true ^ not$$3;
        var ret$$2 = JAM.call(Sizzle$$1.filter, Sizzle$$1, [v845, curLoop$$4, inplace$$3, v846], JAM.policy.p1);
        var v848 = !inplace$$3;
        if (v848) {
          var v847 = result$$11.push;
          JAM.call(v847.apply, v847, [result$$11, ret$$2], JAM.policy.p1);
        }
        return false;
      }
    } else {
      var v3666 = Expr.match;
      var v3232 = v3666.POS;
      var v3233 = match$$25[0];
      var v2354 = JAM.call(v3232.test, v3232, [v3233], JAM.policy.p1);
      var v3236 = !v2354;
      if (v3236) {
        var v3667 = Expr.match;
        var v3234 = v3667.CHILD;
        var v3235 = match$$25[0];
        v2354 = JAM.call(v3234.test, v3234, [v3235], JAM.policy.p1);
      }
      var v850 = v2354;
      if (v850) {
        return true;
      }
    }
    return match$$25;
  }
  function v211(match$$24, curLoop$$3, inplace$$2, result$$10, not$$2, isXML$$7) {
    var v852 = match$$24;
    var v2355 = match$$24[1];
    var v3984 = JAM.call(v2355.replace, v2355, [rBackslash, ""], JAM.policy.p1);
    var name$$37 = v852[1] = v3984;
    var v2356 = !isXML$$7;
    if (v2356) {
      var v3237 = Expr.attrMap;
      v2356 = v3237[name$$37];
    }
    var v854 = v2356;
    if (v854) {
      var v853 = Expr.attrMap;
      match$$24[1] = v853[name$$37];
    }
    var v855 = match$$24;
    var v3668 = match$$24[4];
    var v3830 = !v3668;
    if (v3830) {
      v3668 = match$$24[5];
    }
    var v3238 = v3668;
    var v3669 = !v3238;
    if (v3669) {
      v3238 = "";
    }
    var v2357 = v3238;
    var v3985 = JAM.call(v2357.replace, v2357, [rBackslash, ""], JAM.policy.p1);
    v855[4] = v3985;
    var v2358 = match$$24[2];
    var v857 = v2358 === "~=";
    if (v857) {
      var v2359 = match$$24[4];
      var v856 = " " + v2359;
      match$$24[4] = v856 + " ";
    }
    return match$$24;
  }
  function v210(match$$23) {
    var v2360 = match$$23[1];
    var v866 = v2360 === "nth";
    if (v866) {
      var v2361 = match$$23[2];
      var v859 = !v2361;
      if (v859) {
        var v858 = match$$23[0];
        JAM.call(Sizzle$$1.error, Sizzle$$1, [v858], JAM.policy.p1);
      }
      var v860 = match$$23;
      var v2362 = match$$23[2];
      var v3986 = JAM.call(v2362.replace, v2362, [/^\+|\s*/g, ""], JAM.policy.p1);
      v860[2] = v3986;
      var v3898 = match$$23[2];
      var v3831 = v3898 === "even";
      if (v3831) {
        v3831 = "2n";
      }
      var v3670 = v3831;
      var v3833 = !v3670;
      if (v3833) {
        var v3899 = match$$23[2];
        var v3832 = v3899 === "odd";
        if (v3832) {
          v3832 = "2n+1";
        }
        v3670 = v3832;
      }
      var v3239 = v3670;
      var v3672 = !v3239;
      if (v3672) {
        var v3900 = match$$23[2];
        var v3834 = JAM.call(/\D/.test, /\D/, [v3900], JAM.policy.p1);
        var v3671 = !v3834;
        if (v3671) {
          var v3835 = match$$23[2];
          v3671 = "0n+" + v3835;
        }
        v3239 = v3671;
      }
      var v2363 = v3239;
      var v3240 = !v2363;
      if (v3240) {
        v2363 = match$$23[2];
      }
      var v861 = v2363;
      var test = JAM.call(/(-?)(\d*)(?:n([+\-]?\d*))?/.exec, /(-?)(\d*)(?:n([+\-]?\d*))?/, [v861], JAM.policy.p1);
      var v2364 = test[1];
      var v3241 = test[2];
      var v3673 = !v3241;
      if (v3673) {
        v3241 = 1;
      }
      var v2365 = v3241;
      var v862 = v2364 + v2365;
      match$$23[2] = v862 - 0;
      var v863 = test[3];
      match$$23[3] = v863 - 0;
    } else {
      var v865 = match$$23[2];
      if (v865) {
        var v864 = match$$23[0];
        JAM.call(Sizzle$$1.error, Sizzle$$1, [v864], JAM.policy.p1);
      }
    }
    match$$23[0] = done;
    done = done + 1;
    return match$$23;
  }
  function v209(match$$22, curLoop$$2) {
    var v2366 = match$$22[1];
    var v867 = JAM.call(v2366.replace, v2366, [rBackslash, ""], JAM.policy.p1);
    return JAM.call(v867.toLowerCase, v867, [], JAM.policy.p1);
  }
  function v208(match$$21) {
    var v868 = match$$21[1];
    return JAM.call(v868.replace, v868, [rBackslash, ""], JAM.policy.p1);
  }
  function v207(match$$20, curLoop$$1, inplace$$1, result$$9, not$$1, isXML$$6) {
    var v3242 = match$$20[1];
    var v2367 = JAM.call(v3242.replace, v3242, [rBackslash, ""], JAM.policy.p1);
    var v869 = " " + v2367;
    match$$20 = v869 + " ";
    if (isXML$$6) {
      return match$$20;
    }
    var i$$38 = 0;
    var elem$$7;
    var v2368 = elem$$7 = curLoop$$1[i$$38];
    var v872 = v2368 != null;
    for (;v872;) {
      if (elem$$7) {
        var v2369 = not$$1;
        var v3243 = elem$$7.className;
        if (v3243) {
          var v3940 = elem$$7.className;
          var v3928 = " " + v3940;
          var v3901 = v3928 + " ";
          var v3836 = JAM.call(v3901.replace, v3901, [/[\t\n\r]/g, " "], JAM.policy.p1);
          var v3674 = JAM.call(v3836.indexOf, v3836, [match$$20], JAM.policy.p1);
          v3243 = v3674 >= 0;
        }
        var v2370 = v3243;
        var v871 = v2369 ^ v2370;
        if (v871) {
          var v870 = !inplace$$1;
          if (v870) {
            JAM.call(result$$9.push, result$$9, [elem$$7], JAM.policy.p1);
          }
        } else {
          if (inplace$$1) {
            introspect(JAM.policy.p2) {
              curLoop$$1[i$$38] = false;
            }
          }
        }
      }
      i$$38 = i$$38 + 1;
      var v2371 = elem$$7 = curLoop$$1[i$$38];
      v872 = v2371 != null;
    }
    return false;
  }
  function v206(match$$19, context$$33) {
    var v3244 = context$$33.getElementsByTagName;
    var v2372 = typeof v3244;
    var v874 = v2372 !== "undefined";
    if (v874) {
      var v873 = match$$19[1];
      return JAM.call(context$$33.getElementsByTagName, context$$33, [v873], JAM.policy.p1);
    }
    return;
  }
  function v205(match$$18, context$$32) {
    var v3245 = context$$32.getElementsByName;
    var v2373 = typeof v3245;
    var v880 = v2373 !== "undefined";
    if (v880) {
      var ret$$1 = [];
      var v875 = match$$18[1];
      var results$$15 = JAM.call(context$$32.getElementsByName, context$$32, [v875], JAM.policy.p1);
      var i$$37 = 0;
      var l$$5 = results$$15.length;
      var v878 = i$$37 < l$$5;
      for (;v878;) {
        var v3246 = results$$15[i$$37];
        var v2374 = JAM.call(v3246.getAttribute, v3246, ["name"], JAM.policy.p1);
        var v2375 = match$$18[1];
        var v877 = v2374 === v2375;
        if (v877) {
          var v876 = results$$15[i$$37];
          JAM.call(ret$$1.push, ret$$1, [v876], JAM.policy.p1);
        }
        i$$37 = i$$37 + 1;
        v878 = i$$37 < l$$5;
      }
      var v879;
      var v3247 = ret$$1.length;
      var v2376 = v3247 === 0;
      if (v2376) {
        v879 = null;
      } else {
        v879 = ret$$1;
      }
      return v879;
    }
    return;
  }
  function v204(match$$17, context$$31, isXML$$5) {
    var v3675 = context$$31.getElementById;
    var v3248 = typeof v3675;
    var v2377 = v3248 !== "undefined";
    if (v2377) {
      v2377 = !isXML$$5;
    }
    var v883 = v2377;
    if (v883) {
      var v881 = match$$17[1];
      var m$$3 = JAM.call(context$$31.getElementById, context$$31, [v881], JAM.policy.p1);
      var v882;
      var v3249 = m$$3;
      if (v3249) {
        v3249 = m$$3.parentNode;
      }
      var v2378 = v3249;
      if (v2378) {
        v882 = [m$$3];
      } else {
        v882 = [];
      }
      return v882;
    }
    return;
  }
  function v203(checkSet$$6, part$$3, isXML$$4) {
    var nodeCheck$$3;
    var doneName$$3 = done;
    done = done + 1;
    var checkFn$$1 = dirCheck;
    var v3250 = typeof part$$3;
    var v2379 = v3250 === "string";
    if (v2379) {
      var v3251 = JAM.call(rNonWord.test, rNonWord, [part$$3], JAM.policy.p1);
      v2379 = !v3251;
    }
    var v884 = v2379;
    if (v884) {
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
    var v3252 = typeof part$$2;
    var v2380 = v3252 === "string";
    if (v2380) {
      var v3253 = JAM.call(rNonWord.test, rNonWord, [part$$2], JAM.policy.p1);
      v2380 = !v3253;
    }
    var v885 = v2380;
    if (v885) {
      part$$2 = JAM.call(part$$2.toLowerCase, part$$2, [], JAM.policy.p1);
      nodeCheck$$2 = part$$2;
      checkFn = dirNodeCheck;
    }
    JAM.call(checkFn, null, ["parentNode", part$$2, doneName$$2, checkSet$$5, nodeCheck$$2, isXML$$3], JAM.policy.p1);
    return;
  }
  function v201(checkSet$$4, part$$1) {
    var elem$$6;
    var v886 = typeof part$$1;
    var isPartStr$$1 = v886 === "string";
    var i$$36 = 0;
    var l$$4 = checkSet$$4.length;
    var v2381 = isPartStr$$1;
    if (v2381) {
      var v3254 = JAM.call(rNonWord.test, rNonWord, [part$$1], JAM.policy.p1);
      v2381 = !v3254;
    }
    var v892 = v2381;
    if (v892) {
      part$$1 = JAM.call(part$$1.toLowerCase, part$$1, [], JAM.policy.p1);
      var v889 = i$$36 < l$$4;
      for (;v889;) {
        elem$$6 = checkSet$$4[i$$36];
        if (elem$$6) {
          var parent$$8 = elem$$6.parentNode;
          var v887 = checkSet$$4;
          var v888 = i$$36;
          var v2382;
          var v3837 = parent$$8.nodeName;
          var v3676 = JAM.call(v3837.toLowerCase, v3837, [], JAM.policy.p1);
          var v3255 = v3676 === part$$1;
          if (v3255) {
            v2382 = parent$$8;
          } else {
            v2382 = false;
          }
          introspect(JAM.policy.p2) {
            v887[v888] = v2382;
          }
        }
        i$$36 = i$$36 + 1;
        v889 = i$$36 < l$$4;
      }
    } else {
      var v891 = i$$36 < l$$4;
      for (;v891;) {
        elem$$6 = checkSet$$4[i$$36];
        if (elem$$6) {
          var v890;
          if (isPartStr$$1) {
            v890 = elem$$6.parentNode;
          } else {
            var v2383 = elem$$6.parentNode;
            v890 = v2383 === part$$1;
          }
          introspect(JAM.policy.p2) {
            checkSet$$4[i$$36] = v890;
          }
        }
        i$$36 = i$$36 + 1;
        v891 = i$$36 < l$$4;
      }
      if (isPartStr$$1) {
        JAM.call(Sizzle$$1.filter, Sizzle$$1, [part$$1, checkSet$$4, true], JAM.policy.p1);
      }
    }
    return;
  }
  function v200(checkSet$$3, part) {
    var v893 = typeof part;
    var isPartStr = v893 === "string";
    var v894 = isPartStr;
    if (v894) {
      var v2384 = JAM.call(rNonWord.test, rNonWord, [part], JAM.policy.p1);
      v894 = !v2384;
    }
    var isTag = v894;
    var v895 = isPartStr;
    if (v895) {
      v895 = !isTag;
    }
    var isPartStrNotTag = v895;
    if (isTag) {
      part = JAM.call(part.toLowerCase, part, [], JAM.policy.p1);
    }
    var i$$35 = 0;
    var l$$3 = checkSet$$3.length;
    var elem$$5;
    var v900 = i$$35 < l$$3;
    for (;v900;) {
      var v899 = elem$$5 = checkSet$$3[i$$35];
      if (v899) {
        var v2385 = elem$$5 = elem$$5.previousSibling;
        if (v2385) {
          var v3256 = elem$$5.nodeType;
          v2385 = v3256 !== 1;
        }
        var v896 = v2385;
        for (;v896;) {
          var v2386 = elem$$5 = elem$$5.previousSibling;
          if (v2386) {
            var v3257 = elem$$5.nodeType;
            v2386 = v3257 !== 1;
          }
          v896 = v2386;
        }
        var v897 = checkSet$$3;
        var v898 = i$$35;
        var v2387;
        var v3677 = isPartStrNotTag;
        var v3839 = !v3677;
        if (v3839) {
          var v3838 = elem$$5;
          if (v3838) {
            var v3929 = elem$$5.nodeName;
            var v3902 = JAM.call(v3929.toLowerCase, v3929, [], JAM.policy.p1);
            v3838 = v3902 === part;
          }
          v3677 = v3838;
        }
        var v3258 = v3677;
        if (v3258) {
          v2387 = elem$$5 || false;
        } else {
          v2387 = elem$$5 === part;
        }
        introspect(JAM.policy.p2) {
          v897[v898] = v2387;
        }
      }
      i$$35 = i$$35 + 1;
      v900 = i$$35 < l$$3;
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
    var v2388 = set$$4;
    if (v2388) {
      v2388 = set$$4[0];
    }
    var v901 = v2388;
    if (v901) {
      var v2389 = set$$4[0];
      v901 = JAM.call(Sizzle$$1.isXML, Sizzle$$1, [v2389], JAM.policy.p1);
    }
    var isXMLFilter = v901;
    var v2390 = expr$$7;
    if (v2390) {
      v2390 = set$$4.length;
    }
    var v920 = v2390;
    for (;v920;) {
      var type$$29;
      var v917 = Expr.filter;
      for (type$$29 in v917) {
        var v3840 = Expr.leftMatch;
        var v3678 = v3840[type$$29];
        var v3259 = match$$16 = JAM.call(v3678.exec, v3678, [expr$$7], JAM.policy.p1);
        var v2391 = v3259 != null;
        if (v2391) {
          v2391 = match$$16[2];
        }
        var v916 = v2391;
        if (v916) {
          var found$$1;
          var item$$4;
          var v902 = Expr.filter;
          var filter$$6 = v902[type$$29];
          var left$$4 = match$$16[1];
          anyFound = false;
          JAM.call(match$$16.splice, match$$16, [1, 1], JAM.policy.p1);
          var v3679 = left$$4.length;
          var v3260 = v3679 - 1;
          var v2392 = JAM.call(left$$4.substr, left$$4, [v3260], JAM.policy.p1);
          var v903 = v2392 === "\\";
          if (v903) {
            continue;
          }
          var v904 = curLoop === result$$8;
          if (v904) {
            result$$8 = [];
          }
          var v2393 = Expr.preFilter;
          var v908 = v2393[type$$29];
          if (v908) {
            var v905 = Expr.preFilter;
            match$$16 = JAM.call(v905[type$$29], v905, [match$$16, curLoop, inplace, result$$8, not, isXMLFilter], JAM.policy.p1);
            var v907 = !match$$16;
            if (v907) {
              anyFound = found$$1 = true;
            } else {
              var v906 = match$$16 === true;
              if (v906) {
                continue;
              }
            }
          }
          if (match$$16) {
            var i$$34 = 0;
            var v2394 = item$$4 = curLoop[i$$34];
            var v911 = v2394 != null;
            for (;v911;) {
              if (item$$4) {
                found$$1 = JAM.call(filter$$6, null, [item$$4, match$$16, i$$34, curLoop], JAM.policy.p1);
                var v2395 = !found$$1;
                var v909 = !v2395;
                var pass = not ^ v909;
                var v2396 = inplace;
                if (v2396) {
                  v2396 = found$$1 != null;
                }
                var v910 = v2396;
                if (v910) {
                  if (pass) {
                    anyFound = true;
                  } else {
                    introspect(JAM.policy.p2) {
                      curLoop[i$$34] = false;
                    }
                  }
                } else {
                  if (pass) {
                    JAM.call(result$$8.push, result$$8, [item$$4], JAM.policy.p1);
                    anyFound = true;
                  }
                }
              }
              i$$34 = i$$34 + 1;
              var v2397 = item$$4 = curLoop[i$$34];
              v911 = v2397 != null;
            }
          }
          var v915 = found$$1 !== undefined;
          if (v915) {
            var v912 = !inplace;
            if (v912) {
              curLoop = result$$8;
            }
            var v2398 = Expr.match;
            var v913 = v2398[type$$29];
            expr$$7 = JAM.call(expr$$7.replace, expr$$7, [v913, ""], JAM.policy.p1);
            var v914 = !anyFound;
            if (v914) {
              return[];
            }
            break;
          }
        }
      }
      var v919 = expr$$7 === old;
      if (v919) {
        var v918 = anyFound == null;
        if (v918) {
          JAM.call(Sizzle$$1.error, Sizzle$$1, [expr$$7], JAM.policy.p1);
        } else {
          break;
        }
      }
      old = expr$$7;
      var v2399 = expr$$7;
      if (v2399) {
        v2399 = set$$4.length;
      }
      v920 = v2399;
    }
    return curLoop;
  }
  function v195(expr$$6, context$$30, isXML$$2) {
    var set$$3;
    var v921 = !expr$$6;
    if (v921) {
      return[];
    }
    var i$$33 = 0;
    var v922 = Expr.order;
    var l$$2 = v922.length;
    var v930 = i$$33 < l$$2;
    for (;v930;) {
      var match$$15;
      var v923 = Expr.order;
      var type$$28 = v923[i$$33];
      var v3261 = Expr.leftMatch;
      var v2400 = v3261[type$$28];
      var v929 = match$$15 = JAM.call(v2400.exec, v2400, [expr$$6], JAM.policy.p1);
      if (v929) {
        var left$$3 = match$$15[1];
        JAM.call(match$$15.splice, match$$15, [1, 1], JAM.policy.p1);
        var v3680 = left$$3.length;
        var v3262 = v3680 - 1;
        var v2401 = JAM.call(left$$3.substr, left$$3, [v3262], JAM.policy.p1);
        var v928 = v2401 !== "\\";
        if (v928) {
          var v924 = match$$15;
          var v3263 = match$$15[1];
          var v3681 = !v3263;
          if (v3681) {
            v3263 = "";
          }
          var v2402 = v3263;
          var v3987 = JAM.call(v2402.replace, v2402, [rBackslash, ""], JAM.policy.p1);
          v924[1] = v3987;
          var v925 = Expr.find;
          set$$3 = JAM.call(v925[type$$28], v925, [match$$15, context$$30, isXML$$2], JAM.policy.p1);
          var v927 = set$$3 != null;
          if (v927) {
            var v2403 = Expr.match;
            var v926 = v2403[type$$28];
            expr$$6 = JAM.call(expr$$6.replace, expr$$6, [v926, ""], JAM.policy.p1);
            break;
          }
        }
      }
      i$$33 = i$$33 + 1;
      v930 = i$$33 < l$$2;
    }
    var v932 = !set$$3;
    if (v932) {
      var v931;
      var v3682 = context$$30.getElementsByTagName;
      var v3264 = typeof v3682;
      var v2404 = v3264 !== "undefined";
      if (v2404) {
        v931 = JAM.call(context$$30.getElementsByTagName, context$$30, ["*"], JAM.policy.p1);
      } else {
        v931 = [];
      }
      set$$3 = v931;
    }
    return{set:set$$3, expr:expr$$6};
  }
  function v194(node$$15, expr$$5) {
    var v3265 = [node$$15];
    var v2405 = JAM.call(Sizzle$$1, null, [expr$$5, null, null, v3265], JAM.policy.p1);
    var v933 = v2405.length;
    return v933 > 0;
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
        var v2406 = results$$14.length;
        var v936 = i$$32 < v2406;
        for (;v936;) {
          var v2407 = results$$14[i$$32];
          var v3266 = i$$32 - 1;
          var v2408 = results$$14[v3266];
          var v935 = v2407 === v2408;
          if (v935) {
            var v934 = i$$32;
            i$$32 = i$$32 - 1;
            JAM.call(results$$14.splice, results$$14, [v934, 1], JAM.policy.p1);
          }
          i$$32 = i$$32 + 1;
          var v2409 = results$$14.length;
          v936 = i$$32 < v2409;
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
    var v937;
    var v2410 = context$$38.nodeType;
    if (v2410) {
      v937 = [context$$38];
    } else {
      v937 = context$$38;
    }
    var root$$1 = v937;
    var v3267 = Expr.match;
    var v2411 = v3267.PSEUDO;
    var v939 = match$$45 = JAM.call(v2411.exec, v2411, [selector$$2], JAM.policy.p1);
    for (;v939;) {
      var v2412 = match$$45[0];
      later = later + v2412;
      var v2413 = Expr.match;
      var v938 = v2413.PSEUDO;
      selector$$2 = JAM.call(selector$$2.replace, selector$$2, [v938, ""], JAM.policy.p1);
      var v3268 = Expr.match;
      var v2414 = v3268.PSEUDO;
      v939 = match$$45 = JAM.call(v2414.exec, v2414, [selector$$2], JAM.policy.p1);
    }
    var v940;
    var v3269 = Expr.relative;
    var v2415 = v3269[selector$$2];
    if (v2415) {
      v940 = selector$$2 + "*";
    } else {
      v940 = selector$$2;
    }
    selector$$2 = v940;
    var i$$54 = 0;
    var l$$8 = root$$1.length;
    var v942 = i$$54 < l$$8;
    for (;v942;) {
      var v941 = root$$1[i$$54];
      JAM.call(Sizzle$$1, null, [selector$$2, v941, tmpSet], JAM.policy.p1);
      i$$54 = i$$54 + 1;
      v942 = i$$54 < l$$8;
    }
    return JAM.call(Sizzle$$1.filter, Sizzle$$1, [later, tmpSet], JAM.policy.p1);
  }
  function makeArray(array$$21, results$$16) {
    var v2416 = Array.prototype;
    var v943 = v2416.slice;
    array$$21 = JAM.call(v943.call, v943, [array$$21, 0], JAM.policy.p1);
    if (results$$16) {
      var v944 = results$$16.push;
      JAM.call(v944.apply, v944, [results$$16, array$$21], JAM.policy.p1);
      return results$$16;
    }
    return array$$21;
  }
  function fescape(all$$1, num$$4) {
    var v2417 = num$$4 - 0;
    var v945 = v2417 + 1;
    return "\\" + v945;
  }
  function Sizzle$$1(selector$$1, context$$29, results$$13, seed) {
    results$$13 = results$$13 || [];
    context$$29 = context$$29 || document;
    var origContext = context$$29;
    var v3270 = context$$29.nodeType;
    var v2418 = v3270 !== 1;
    if (v2418) {
      var v3271 = context$$29.nodeType;
      v2418 = v3271 !== 9;
    }
    var v946 = v2418;
    if (v946) {
      return[];
    }
    var v2419 = !selector$$1;
    var v3273 = !v2419;
    if (v3273) {
      var v3272 = typeof selector$$1;
      v2419 = v3272 !== "string";
    }
    var v947 = v2419;
    if (v947) {
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
        var v948 = m$$2[1];
        JAM.call(parts.push, parts, [v948], JAM.policy.p1);
        var v949 = m$$2[2];
        if (v949) {
          extra = m$$2[3];
          break;
        }
      }
    } while (m$$2);
    var v3274 = parts.length;
    var v2420 = v3274 > 1;
    if (v2420) {
      v2420 = JAM.call(origPOS.exec, origPOS, [selector$$1], JAM.policy.p1);
    }
    var v965 = v2420;
    if (v965) {
      var v3275 = parts.length;
      var v2421 = v3275 === 2;
      if (v2421) {
        var v3276 = Expr.relative;
        var v3277 = parts[0];
        v2421 = v3276[v3277];
      }
      var v954 = v2421;
      if (v954) {
        var v2422 = parts[0];
        var v2423 = parts[1];
        var v950 = v2422 + v2423;
        set$$1 = posProcess(v950, context$$29);
      } else {
        var v951;
        var v3278 = Expr.relative;
        var v3279 = parts[0];
        var v2425 = v3278[v3279];
        if (v2425) {
          v951 = [context$$29];
        } else {
          var v2424 = JAM.call(parts.shift, parts, [], JAM.policy.p1);
          v951 = JAM.call(Sizzle$$1, null, [v2424, context$$29], JAM.policy.p1);
        }
        set$$1 = v951;
        var v953 = parts.length;
        for (;v953;) {
          selector$$1 = JAM.call(parts.shift, parts, [], JAM.policy.p1);
          var v2426 = Expr.relative;
          var v952 = v2426[selector$$1];
          if (v952) {
            var v2427 = selector$$1;
            var v2428 = JAM.call(parts.shift, parts, [], JAM.policy.p1);
            selector$$1 = v2427 + v2428;
          }
          set$$1 = posProcess(selector$$1, set$$1);
          v953 = parts.length;
        }
      }
    } else {
      var v3903 = !seed;
      if (v3903) {
        var v3930 = parts.length;
        v3903 = v3930 > 1;
      }
      var v3841 = v3903;
      if (v3841) {
        var v3904 = context$$29.nodeType;
        v3841 = v3904 === 9;
      }
      var v3683 = v3841;
      if (v3683) {
        v3683 = !contextXML;
      }
      var v3280 = v3683;
      if (v3280) {
        var v3842 = Expr.match;
        var v3684 = v3842.ID;
        var v3685 = parts[0];
        v3280 = JAM.call(v3684.test, v3684, [v3685], JAM.policy.p1);
      }
      var v2429 = v3280;
      if (v2429) {
        var v3843 = Expr.match;
        var v3686 = v3843.ID;
        var v3905 = parts.length;
        var v3844 = v3905 - 1;
        var v3687 = parts[v3844];
        var v3281 = JAM.call(v3686.test, v3686, [v3687], JAM.policy.p1);
        v2429 = !v3281;
      }
      var v957 = v2429;
      if (v957) {
        var v955 = JAM.call(parts.shift, parts, [], JAM.policy.p1);
        ret = JAM.call(Sizzle$$1.find, Sizzle$$1, [v955, context$$29, contextXML], JAM.policy.p1);
        var v956;
        var v2432 = ret.expr;
        if (v2432) {
          var v3282 = ret.expr;
          var v3283 = ret.set;
          var v2430 = JAM.call(Sizzle$$1.filter, Sizzle$$1, [v3282, v3283], JAM.policy.p1);
          v956 = v2430[0];
        } else {
          var v2431 = ret.set;
          v956 = v2431[0];
        }
        context$$29 = v956;
      }
      if (context$$29) {
        var v958;
        if (seed) {
          var v2433 = JAM.call(parts.pop, parts, [], JAM.policy.p1);
          var v2434 = JAM.call(makeArray, null, [seed], JAM.policy.p1);
          v958 = {expr:v2433, set:v2434};
        } else {
          var v2435 = JAM.call(parts.pop, parts, [], JAM.policy.p1);
          var v3284;
          var v3931 = parts.length;
          var v3906 = v3931 === 1;
          if (v3906) {
            var v3941 = parts[0];
            var v3932 = v3941 === "~";
            var v3943 = !v3932;
            if (v3943) {
              var v3942 = parts[0];
              v3932 = v3942 === "+";
            }
            v3906 = v3932;
          }
          var v3845 = v3906;
          if (v3845) {
            v3845 = context$$29.parentNode;
          }
          var v3688 = v3845;
          if (v3688) {
            v3284 = context$$29.parentNode;
          } else {
            v3284 = context$$29;
          }
          var v2436 = v3284;
          v958 = JAM.call(Sizzle$$1.find, Sizzle$$1, [v2435, v2436, contextXML], JAM.policy.p1);
        }
        ret = v958;
        var v959;
        var v2439 = ret.expr;
        if (v2439) {
          var v2437 = ret.expr;
          var v2438 = ret.set;
          v959 = JAM.call(Sizzle$$1.filter, Sizzle$$1, [v2437, v2438], JAM.policy.p1);
        } else {
          v959 = ret.set;
        }
        set$$1 = v959;
        var v2440 = parts.length;
        var v960 = v2440 > 0;
        if (v960) {
          checkSet$$2 = JAM.call(makeArray, null, [set$$1], JAM.policy.p1);
        } else {
          prune = false;
        }
        var v964 = parts.length;
        for (;v964;) {
          cur$$2 = JAM.call(parts.pop, parts, [], JAM.policy.p1);
          pop = cur$$2;
          var v3285 = Expr.relative;
          var v2441 = v3285[cur$$2];
          var v961 = !v2441;
          if (v961) {
            cur$$2 = "";
          } else {
            pop = JAM.call(parts.pop, parts, [], JAM.policy.p1);
          }
          var v962 = pop == null;
          if (v962) {
            pop = context$$29;
          }
          var v963 = Expr.relative;
          JAM.call(v963[cur$$2], v963, [checkSet$$2, pop, contextXML], JAM.policy.p1);
          v964 = parts.length;
        }
      } else {
        checkSet$$2 = parts = [];
      }
    }
    var v966 = !checkSet$$2;
    if (v966) {
      checkSet$$2 = set$$1;
    }
    var v968 = !checkSet$$2;
    if (v968) {
      var v967 = cur$$2 || selector$$1;
      JAM.call(Sizzle$$1.error, Sizzle$$1, [v967], JAM.policy.p1);
    }
    var v2442 = JAM.call(toString.call, toString, [checkSet$$2], JAM.policy.p1);
    var v978 = v2442 === "[object Array]";
    if (v978) {
      var v977 = !prune;
      if (v977) {
        var v969 = results$$13.push;
        JAM.call(v969.apply, v969, [results$$13, checkSet$$2], JAM.policy.p1);
      } else {
        var v2443 = context$$29;
        if (v2443) {
          var v3286 = context$$29.nodeType;
          v2443 = v3286 === 1;
        }
        var v976 = v2443;
        if (v976) {
          i$$31 = 0;
          var v2444 = checkSet$$2[i$$31];
          var v972 = v2444 != null;
          for (;v972;) {
            var v2445 = checkSet$$2[i$$31];
            if (v2445) {
              var v3689 = checkSet$$2[i$$31];
              var v3287 = v3689 === true;
              var v3691 = !v3287;
              if (v3691) {
                var v3907 = checkSet$$2[i$$31];
                var v3846 = v3907.nodeType;
                var v3690 = v3846 === 1;
                if (v3690) {
                  var v3847 = checkSet$$2[i$$31];
                  v3690 = JAM.call(Sizzle$$1.contains, Sizzle$$1, [context$$29, v3847], JAM.policy.p1);
                }
                v3287 = v3690;
              }
              v2445 = v3287;
            }
            var v971 = v2445;
            if (v971) {
              var v970 = set$$1[i$$31];
              JAM.call(results$$13.push, results$$13, [v970], JAM.policy.p1);
            }
            i$$31 = i$$31 + 1;
            var v2446 = checkSet$$2[i$$31];
            v972 = v2446 != null;
          }
        } else {
          i$$31 = 0;
          var v2447 = checkSet$$2[i$$31];
          var v975 = v2447 != null;
          for (;v975;) {
            var v2448 = checkSet$$2[i$$31];
            if (v2448) {
              var v3692 = checkSet$$2[i$$31];
              var v3288 = v3692.nodeType;
              v2448 = v3288 === 1;
            }
            var v974 = v2448;
            if (v974) {
              var v973 = set$$1[i$$31];
              JAM.call(results$$13.push, results$$13, [v973], JAM.policy.p1);
            }
            i$$31 = i$$31 + 1;
            var v2449 = checkSet$$2[i$$31];
            v975 = v2449 != null;
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
    var v983 = i$$29 < l;
    for (;v983;) {
      var elem$$1 = checkSet[i$$29];
      if (elem$$1) {
        var match$$13 = false;
        elem$$1 = elem$$1[dir];
        for (;elem$$1;) {
          var v2450 = elem$$1.sizcache;
          var v980 = v2450 === doneName;
          if (v980) {
            var v979 = elem$$1.sizset;
            match$$13 = checkSet[v979];
            break;
          }
          var v3289 = elem$$1.nodeType;
          var v2451 = v3289 === 1;
          if (v2451) {
            v2451 = !isXML;
          }
          var v981 = v2451;
          if (v981) {
            elem$$1.sizcache = doneName;
            elem$$1.sizset = i$$29;
          }
          var v3290 = elem$$1.nodeName;
          var v2452 = JAM.call(v3290.toLowerCase, v3290, [], JAM.policy.p1);
          var v982 = v2452 === cur;
          if (v982) {
            match$$13 = elem$$1;
            break;
          }
          elem$$1 = elem$$1[dir];
        }
        introspect(JAM.policy.p2) {
          checkSet[i$$29] = match$$13;
        }
      }
      i$$29 = i$$29 + 1;
      v983 = i$$29 < l;
    }
    return;
  }
  function dirCheck(dir$$1, cur$$1, doneName$$1, checkSet$$1, nodeCheck$$1, isXML$$1) {
    var i$$30 = 0;
    var l$$1 = checkSet$$1.length;
    var v991 = i$$30 < l$$1;
    for (;v991;) {
      var elem$$2 = checkSet$$1[i$$30];
      if (elem$$2) {
        var match$$14 = false;
        elem$$2 = elem$$2[dir$$1];
        for (;elem$$2;) {
          var v2453 = elem$$2.sizcache;
          var v985 = v2453 === doneName$$1;
          if (v985) {
            var v984 = elem$$2.sizset;
            match$$14 = checkSet$$1[v984];
            break;
          }
          var v2454 = elem$$2.nodeType;
          var v990 = v2454 === 1;
          if (v990) {
            var v986 = !isXML$$1;
            if (v986) {
              elem$$2.sizcache = doneName$$1;
              elem$$2.sizset = i$$30;
            }
            var v2455 = typeof cur$$1;
            var v989 = v2455 !== "string";
            if (v989) {
              var v987 = elem$$2 === cur$$1;
              if (v987) {
                match$$14 = true;
                break;
              }
            } else {
              var v3693 = [elem$$2];
              var v3291 = JAM.call(Sizzle$$1.filter, Sizzle$$1, [cur$$1, v3693], JAM.policy.p1);
              var v2456 = v3291.length;
              var v988 = v2456 > 0;
              if (v988) {
                match$$14 = elem$$2;
                break;
              }
            }
          }
          elem$$2 = elem$$2[dir$$1];
        }
        introspect(JAM.policy.p2) {
          checkSet$$1[i$$30] = match$$14;
        }
      }
      i$$30 = i$$30 + 1;
      v991 = i$$30 < l$$1;
    }
    return;
  }
  var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
  var done = 0;
  var v992 = Object.prototype;
  var toString = v992.toString;
  var hasDuplicate = false;
  var baseHasDuplicate = true;
  var rBackslash = /\\/g;
  var rNonWord = /\W/;
  var v993 = [0, 0];
  JAM.call(v993.sort, v993, [v191], JAM.policy.p1);
  Sizzle$$1.uniqueSort = v192;
  Sizzle$$1.matches = v193;
  Sizzle$$1.matchesSelector = v194;
  Sizzle$$1.find = v195;
  Sizzle$$1.filter = v196;
  Sizzle$$1.error = v197;
  var v994 = ["ID", "NAME", "TAG"];
  var v995 = {ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/};
  var v996 = {"class":"className", "for":"htmlFor"};
  var v997 = {href:v198, type:v199};
  var v998 = {"+":v200, ">":v201, "":v202, "~":v203};
  var v999 = {ID:v204, NAME:v205, TAG:v206};
  var v1000 = {CLASS:v207, ID:v208, TAG:v209, CHILD:v210, ATTR:v211, PSEUDO:v212, POS:v213};
  var v1001 = {enabled:v214, disabled:v215, checked:v216, selected:v217, parent:v218, empty:v219, has:v220, header:v221, text:v222, radio:v223, checkbox:v224, file:v225, password:v226, submit:v227, image:v228, reset:v229, button:v230, input:v231, focus:v232};
  var v1002 = {first:v233, last:v234, even:v235, odd:v236, lt:v237, gt:v238, nth:v239, eq:v240};
  var v1003 = {PSEUDO:v241, CHILD:v242, ID:v243, TAG:v244, CLASS:v245, ATTR:v246, POS:v247};
  var Expr = Sizzle$$1.selectors = {order:v994, match:v995, leftMatch:{}, attrMap:v996, attrHandle:v997, relative:v998, find:v999, preFilter:v1000, filters:v1001, setFilters:v1002, filter:v1003};
  var v1004 = Expr.match;
  var origPOS = v1004.POS;
  var type$$27;
  var v1009 = Expr.match;
  for (type$$27 in v1009) {
    var v1005 = Expr.match;
    var v1006 = type$$27;
    var v3848 = Expr.match;
    var v3694 = v3848[type$$27];
    var v3292 = v3694.source;
    var v3293 = /(?![^\[]*\])(?![^\(]*\))/.source;
    var v2457 = v3292 + v3293;
    var v3988 = new RegExp(v2457);
    JAM.set(v1005, v1006, v3988, JAM.policy.p2);
    var v1007 = Expr.leftMatch;
    var v1008 = type$$27;
    var v3294 = /(^(?:.|\r|\n)*?)/.source;
    var v3908 = Expr.match;
    var v3849 = v3908[type$$27];
    var v3695 = v3849.source;
    var v3295 = JAM.call(v3695.replace, v3695, [/\\(\d+)/g, fescape], JAM.policy.p1);
    var v2458 = v3294 + v3295;
    var v3989 = new RegExp(v2458);
    JAM.set(v1007, v1008, v3989, JAM.policy.p2);
  }
  try {
    var v3696 = Array.prototype;
    var v3296 = v3696.slice;
    var v3697 = document.documentElement;
    var v3297 = v3697.childNodes;
    var v2459 = JAM.call(v3296.call, v3296, [v3297, 0], JAM.policy.p1);
    var v1010 = v2459[0];
    v1010.nodeType;
  } catch (e$$24) {
    makeArray = v248;
  }
  var sortOrder;
  var siblingCheck;
  var v2460 = document.documentElement;
  var v1011 = v2460.compareDocumentPosition;
  if (v1011) {
    sortOrder = v249;
  } else {
    sortOrder = v250;
    siblingCheck = v251;
  }
  Sizzle$$1.getText = v252;
  v255();
  v258();
  var v1012 = document.querySelectorAll;
  if (v1012) {
    v260();
  }
  v262();
  v264();
  var v2461 = document.documentElement;
  var v1014 = v2461.contains;
  if (v1014) {
    Sizzle$$1.contains = v265;
  } else {
    var v2462 = document.documentElement;
    var v1013 = v2462.compareDocumentPosition;
    if (v1013) {
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
    var v1015 = Prototype.Selector;
    var match$$12 = v1015.match;
    var length$$29 = elements$$4.length;
    var matchIndex = 0;
    var i$$27;
    i$$27 = 0;
    var v1018 = i$$27 < length$$29;
    for (;v1018;) {
      var v3298 = elements$$4[i$$27];
      var v2463 = JAM.call(match$$12, null, [v3298, expression$$6], JAM.policy.p1);
      if (v2463) {
        var v3299 = matchIndex;
        matchIndex = matchIndex + 1;
        v2463 = index$$60 == v3299;
      }
      var v1017 = v2463;
      if (v1017) {
        var v1016 = elements$$4[i$$27];
        return JAM.call(Element.extend, Element, [v1016], JAM.policy.p1);
      }
      i$$27 = i$$27 + 1;
      v1018 = i$$27 < length$$29;
    }
    return;
  }
  function extendElements(elements$$5) {
    var i$$28 = 0;
    var length$$30 = elements$$5.length;
    var v1020 = i$$28 < length$$30;
    for (;v1020;) {
      var v1019 = elements$$5[i$$28];
      JAM.call(Element.extend, Element, [v1019], JAM.policy.p1);
      i$$28 = i$$28 + 1;
      v1020 = i$$28 < length$$30;
    }
    return elements$$5;
  }
  var K = Prototype.K;
  var v2464;
  var v3698 = Element.extend;
  var v3300 = v3698 === K;
  if (v3300) {
    v2464 = K;
  } else {
    v2464 = extendElements;
  }
  var v1021 = v2464;
  var v1022 = Element.extend;
  return{select:select$$1, match:match$$11, find:find, extendElements:v1021, extendElement:v1022};
}
function v189() {
  var v1023 = $A(arguments);
  var expression$$5 = JAM.call(v1023.join, v1023, [", "], JAM.policy.p1);
  var v1024 = Prototype.Selector;
  return JAM.call(v1024.select, v1024, [expression$$5, document], JAM.policy.p1);
}
function v188() {
  function getRootElement() {
    if (ROOT) {
      return ROOT;
    }
    var v1025;
    if (IS_OLD_OPERA) {
      v1025 = document.body;
    } else {
      v1025 = document.documentElement;
    }
    ROOT = v1025;
    return ROOT;
  }
  function getDimensions$$1() {
    var v1026 = JAM.call(this.getWidth, this, [], JAM.policy.p1);
    var v1027 = JAM.call(this.getHeight, this, [], JAM.policy.p1);
    return{width:v1026, height:v1027};
  }
  function getWidth$$1() {
    var v1028 = getRootElement();
    return v1028.clientWidth;
  }
  function getHeight$$1() {
    var v1029 = getRootElement();
    return v1029.clientHeight;
  }
  function getScrollOffsets() {
    var v2465 = window.pageXOffset;
    var v3302 = !v2465;
    if (v3302) {
      var v3301 = document.documentElement;
      v2465 = v3301.scrollLeft;
    }
    var v1030 = v2465;
    var v2467 = !v1030;
    if (v2467) {
      var v2466 = document.body;
      v1030 = v2466.scrollLeft;
    }
    var x$$48 = v1030;
    var v2468 = window.pageYOffset;
    var v3304 = !v2468;
    if (v3304) {
      var v3303 = document.documentElement;
      v2468 = v3303.scrollTop;
    }
    var v1031 = v2468;
    var v2470 = !v1031;
    if (v2470) {
      var v2469 = document.body;
      v1031 = v2469.scrollTop;
    }
    var y$$30 = v1031;
    var v1032 = Element.Offset;
    return JAM.new(v1032, [x$$48, y$$30]);
  }
  var v2471 = Prototype.Browser;
  var v1033 = v2471.Opera;
  if (v1033) {
    var v3699 = window.opera;
    var v3305 = JAM.call(v3699.version, v3699, [], JAM.policy.p1);
    var v2472 = JAM.call(window.parseFloat, window, [v3305], JAM.policy.p1);
    v1033 = v2472 < 9.5;
  }
  var IS_OLD_OPERA = v1033;
  var ROOT = null;
  document.viewport = {getDimensions:getDimensions$$1, getWidth:getWidth$$1, getHeight:getHeight$$1, getScrollOffsets:getScrollOffsets};
  return;
}
function v187() {
  function v186(element$$144) {
    element$$144 = JAM.call($, null, [element$$144], JAM.policy.p1);
    var v1035 = isDetached(element$$144);
    if (v1035) {
      var v1034 = Element.Offset;
      return JAM.new(v1034, [0, 0]);
    }
    var rect$$2 = JAM.call(element$$144.getBoundingClientRect, element$$144, [], JAM.policy.p1);
    var docEl = document.documentElement;
    var v1036 = Element.Offset;
    var v2473 = rect$$2.left;
    var v2474 = docEl.clientLeft;
    var v1037 = v2473 - v2474;
    var v2475 = rect$$2.top;
    var v2476 = docEl.clientTop;
    var v1038 = v2475 - v2476;
    return JAM.new(v1036, [v1037, v1038]);
  }
  function v185(element$$143) {
    element$$143 = JAM.call($, null, [element$$143], JAM.policy.p1);
    var valueT$$4 = 0;
    var valueL$$4 = 0;
    do {
      var v3306 = element$$143.offsetTop;
      var v3700 = !v3306;
      if (v3700) {
        v3306 = 0;
      }
      var v2477 = v3306;
      valueT$$4 = valueT$$4 + v2477;
      var v3307 = element$$143.offsetLeft;
      var v3701 = !v3307;
      if (v3701) {
        v3307 = 0;
      }
      var v2478 = v3307;
      valueL$$4 = valueL$$4 + v2478;
      var v2479 = element$$143.offsetParent;
      var v2480 = document.body;
      var v1040 = v2479 == v2480;
      if (v1040) {
        var v2481 = JAM.call(Element.getStyle, Element, [element$$143, "position"], JAM.policy.p1);
        var v1039 = v2481 == "absolute";
        if (v1039) {
          break;
        }
      }
      element$$143 = element$$143.offsetParent;
    } while (element$$143);
    var v1041 = Element.Offset;
    return JAM.new(v1041, [valueL$$4, valueT$$4]);
  }
  function v184(proceed$$1, element$$142) {
    element$$142 = JAM.call($, null, [element$$142], JAM.policy.p1);
    var v2482 = element$$142.parentNode;
    var v1043 = !v2482;
    if (v1043) {
      var v1042 = Element.Offset;
      return JAM.new(v1042, [0, 0]);
    }
    var position$$5 = JAM.call(element$$142.getStyle, element$$142, ["position"], JAM.policy.p1);
    var v1044 = position$$5 !== "static";
    if (v1044) {
      return JAM.call(proceed$$1, null, [element$$142], JAM.policy.p1);
    }
    var offsetParent$$1 = JAM.call(element$$142.getOffsetParent, element$$142, [], JAM.policy.p1);
    var v2483 = offsetParent$$1;
    if (v2483) {
      var v3308 = JAM.call(offsetParent$$1.getStyle, offsetParent$$1, ["position"], JAM.policy.p1);
      v2483 = v3308 === "fixed";
    }
    var v1045 = v2483;
    if (v1045) {
      JAM.call(hasLayout, null, [offsetParent$$1], JAM.policy.p1);
    }
    var v1046 = {position:"relative"};
    JAM.call(element$$142.setStyle, element$$142, [v1046], JAM.policy.p1);
    var value$$86 = JAM.call(proceed$$1, null, [element$$142], JAM.policy.p1);
    var v1047 = {position:position$$5};
    JAM.call(element$$142.setStyle, element$$142, [v1047], JAM.policy.p1);
    return value$$86;
  }
  function v183(proceed, element$$141) {
    element$$141 = JAM.call($, null, [element$$141], JAM.policy.p1);
    var v3850 = element$$141.nodeType;
    var v3851 = Node.DOCUMENT_NODE;
    var v3702 = v3850 === v3851;
    var v3852 = !v3702;
    if (v3852) {
      v3702 = isDetached(element$$141);
    }
    var v3309 = v3702;
    var v3704 = !v3309;
    if (v3704) {
      var v3853 = element$$141.nodeName;
      var v3703 = JAM.call(v3853.toUpperCase, v3853, [], JAM.policy.p1);
      v3309 = v3703 === "BODY";
    }
    var v2484 = v3309;
    var v3311 = !v2484;
    if (v3311) {
      var v3705 = element$$141.nodeName;
      var v3310 = JAM.call(v3705.toUpperCase, v3705, [], JAM.policy.p1);
      v2484 = v3310 === "HTML";
    }
    var v1049 = v2484;
    if (v1049) {
      var v1048 = document.body;
      return JAM.call($, null, [v1048], JAM.policy.p1);
    }
    var position$$4 = JAM.call(element$$141.getStyle, element$$141, ["position"], JAM.policy.p1);
    var v1050 = position$$4 !== "static";
    if (v1050) {
      return JAM.call(proceed, null, [element$$141], JAM.policy.p1);
    }
    var v1051 = {position:"relative"};
    JAM.call(element$$141.setStyle, element$$141, [v1051], JAM.policy.p1);
    var value$$85 = JAM.call(proceed, null, [element$$141], JAM.policy.p1);
    var v1052 = {position:position$$4};
    JAM.call(element$$141.setStyle, element$$141, [v1052], JAM.policy.p1);
    return value$$85;
  }
  function v182() {
    var v1053 = this.left;
    var v1054 = this.top;
    return[v1053, v1054];
  }
  function v181() {
    return JAM.call("[#{left}, #{top}]".interpolate, "[#{left}, #{top}]", [this], JAM.policy.p1);
  }
  function v180() {
    return JAM.call("#<Element.Offset left: #{left} top: #{top}>".interpolate, "#<Element.Offset left: #{left} top: #{top}>", [this], JAM.policy.p1);
  }
  function v179(offset$$13) {
    var v1055 = Element.Offset;
    var v2485 = this.left;
    var v2486 = offset$$13.left;
    var v1056 = v2485 - v2486;
    var v2487 = this.top;
    var v2488 = offset$$13.top;
    var v1057 = v2487 - v2488;
    return JAM.new(v1055, [v1056, v1057]);
  }
  function v178(left$$2, top$$1) {
    var v3990 = JAM.call(left$$2.round, left$$2, [], JAM.policy.p1);
    this.left = v3990;
    var v3991 = JAM.call(top$$1.round, top$$1, [], JAM.policy.p1);
    this.top = v3991;
    this[0] = this.left;
    this[1] = this.top;
    return;
  }
  function v177(element$$140) {
    var v1058 = JAM.call(element$$140.getOffsetParent, element$$140, [], JAM.policy.p1);
    var parent$$7 = JAM.call(hasLayout, null, [v1058], JAM.policy.p1);
    var rect$$1 = JAM.call(element$$140.getBoundingClientRect, element$$140, [], JAM.policy.p1);
    var pRect$$1 = JAM.call(parent$$7.getBoundingClientRect, parent$$7, [], JAM.policy.p1);
    var v2489 = pRect$$1.bottom;
    var v2490 = rect$$1.bottom;
    var v1059 = v2489 - v2490;
    return JAM.call(v1059.round, v1059, [], JAM.policy.p1);
  }
  function v176(element$$139) {
    var v1060 = JAM.call(element$$139.getOffsetParent, element$$139, [], JAM.policy.p1);
    var parent$$6 = JAM.call(hasLayout, null, [v1060], JAM.policy.p1);
    var rect = JAM.call(element$$139.getBoundingClientRect, element$$139, [], JAM.policy.p1);
    var pRect = JAM.call(parent$$6.getBoundingClientRect, parent$$6, [], JAM.policy.p1);
    var v2491 = pRect.right;
    var v2492 = rect.right;
    var v1061 = v2491 - v2492;
    return JAM.call(v1061.round, v1061, [], JAM.policy.p1);
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
    var v1062 = pWidth - mWidth;
    var v1063 = offset$$12.left;
    return v1062 - v1063;
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
    var v1064 = pHeight - mHeight;
    var v1065 = offset$$10.top;
    return v1064 - v1065;
  }
  function v160(element$$123) {
    var offset$$9 = JAM.call(element$$123.positionedOffset, element$$123, [], JAM.policy.p1);
    return offset$$9.top;
  }
  function v159(element$$122) {
    var bWidth$$1 = JAM.call(this.get, this, ["border-box-width"], JAM.policy.p1);
    var mLeft = JAM.call(this.get, this, ["margin-left"], JAM.policy.p1);
    var mRight = JAM.call(this.get, this, ["margin-right"], JAM.policy.p1);
    var v1066 = bWidth$$1 <= 0;
    if (v1066) {
      return 0;
    }
    var v1067 = bWidth$$1 + mLeft;
    return v1067 + mRight;
  }
  function v158(element$$121) {
    var bHeight$$1 = JAM.call(this.get, this, ["border-box-height"], JAM.policy.p1);
    var mTop = JAM.call(this.get, this, ["margin-top"], JAM.policy.p1);
    var mBottom = JAM.call(this.get, this, ["margin-bottom"], JAM.policy.p1);
    var v1068 = bHeight$$1 <= 0;
    if (v1068) {
      return 0;
    }
    var v1069 = bHeight$$1 + mTop;
    return v1069 + mBottom;
  }
  function v157(element$$120) {
    var v2493 = this._preComputing;
    var v1070 = !v2493;
    if (v1070) {
      JAM.call(this._begin, this, [], JAM.policy.p1);
    }
    var width$$11 = element$$120.offsetWidth;
    var v2494 = this._preComputing;
    var v1071 = !v2494;
    if (v1071) {
      JAM.call(this._end, this, [], JAM.policy.p1);
    }
    return width$$11;
  }
  function v156(element$$119) {
    var v2495 = this._preComputing;
    var v1072 = !v2495;
    if (v1072) {
      JAM.call(this._begin, this, [], JAM.policy.p1);
    }
    var height$$9 = element$$119.offsetHeight;
    var v2496 = this._preComputing;
    var v1073 = !v2496;
    if (v1073) {
      JAM.call(this._end, this, [], JAM.policy.p1);
    }
    return height$$9;
  }
  function v155(element$$118) {
    var width$$10 = JAM.call(this.get, this, ["width"], JAM.policy.p1);
    var pLeft$$1 = JAM.call(this.get, this, ["padding-left"], JAM.policy.p1);
    var pRight$$1 = JAM.call(this.get, this, ["padding-right"], JAM.policy.p1);
    var v1074 = width$$10 + pLeft$$1;
    return v1074 + pRight$$1;
  }
  function v154(element$$117) {
    var height$$8 = JAM.call(this.get, this, ["height"], JAM.policy.p1);
    var pTop$$1 = JAM.call(this.get, this, ["padding-top"], JAM.policy.p1);
    var pBottom$$1 = JAM.call(this.get, this, ["padding-bottom"], JAM.policy.p1);
    var v1075 = height$$8 + pTop$$1;
    return v1075 + pBottom$$1;
  }
  function v153(element$$116) {
    var v2497 = this._preComputing;
    var v1076 = !v2497;
    if (v1076) {
      JAM.call(this._begin, this, [], JAM.policy.p1);
    }
    var bWidth = JAM.call(this.get, this, ["border-box-width"], JAM.policy.p1);
    var v1078 = bWidth <= 0;
    if (v1078) {
      var v2498 = this._preComputing;
      var v1077 = !v2498;
      if (v1077) {
        JAM.call(this._end, this, [], JAM.policy.p1);
      }
      return 0;
    }
    var bLeft = JAM.call(this.get, this, ["border-left"], JAM.policy.p1);
    var bRight = JAM.call(this.get, this, ["border-right"], JAM.policy.p1);
    var pLeft = JAM.call(this.get, this, ["padding-left"], JAM.policy.p1);
    var pRight = JAM.call(this.get, this, ["padding-right"], JAM.policy.p1);
    var v2499 = this._preComputing;
    var v1079 = !v2499;
    if (v1079) {
      JAM.call(this._end, this, [], JAM.policy.p1);
    }
    var v3312 = bWidth - bLeft;
    var v2500 = v3312 - bRight;
    var v1080 = v2500 - pLeft;
    return v1080 - pRight;
  }
  function v152(element$$115) {
    var v2501 = this._preComputing;
    var v1081 = !v2501;
    if (v1081) {
      JAM.call(this._begin, this, [], JAM.policy.p1);
    }
    var bHeight = JAM.call(this.get, this, ["border-box-height"], JAM.policy.p1);
    var v1083 = bHeight <= 0;
    if (v1083) {
      var v2502 = this._preComputing;
      var v1082 = !v2502;
      if (v1082) {
        JAM.call(this._end, this, [], JAM.policy.p1);
      }
      return 0;
    }
    var bTop = JAM.call(this.get, this, ["border-top"], JAM.policy.p1);
    var bBottom = JAM.call(this.get, this, ["border-bottom"], JAM.policy.p1);
    var pTop = JAM.call(this.get, this, ["padding-top"], JAM.policy.p1);
    var pBottom = JAM.call(this.get, this, ["padding-bottom"], JAM.policy.p1);
    var v2503 = this._preComputing;
    var v1084 = !v2503;
    if (v1084) {
      JAM.call(this._end, this, [], JAM.policy.p1);
    }
    var v3313 = bHeight - bTop;
    var v2504 = v3313 - bBottom;
    var v1085 = v2504 - pTop;
    return v1085 - pBottom;
  }
  function v151() {
    return "#<Element.Layout>";
  }
  function v150() {
    function v149(key$$26) {
      var v3706 = Element.Layout;
      var v3314 = v3706.PROPERTIES;
      var v2505 = JAM.call(v3314.include, v3314, [key$$26], JAM.policy.p1);
      var v1086 = !v2505;
      if (v1086) {
        return;
      }
      var v3315 = Element.Layout;
      var v2506 = v3315.COMPOSITE_PROPERTIES;
      var v1087 = JAM.call(v2506.include, v2506, [key$$26], JAM.policy.p1);
      if (v1087) {
        return;
      }
      var value$$84 = JAM.call(this.get, this, [key$$26], JAM.policy.p1);
      var v1089 = value$$84 != null;
      if (v1089) {
        var JSCompiler_inline_result$$0;
        var key$$inline_31 = key$$26;
        var v1088 = JAM.call(key$$inline_31.include, key$$inline_31, ["border"], JAM.policy.p1);
        if (v1088) {
          key$$inline_31 = key$$inline_31 + "-width";
        }
        JSCompiler_inline_result$$0 = JAM.call(key$$inline_31.camelize, key$$inline_31, [], JAM.policy.p1);
        JAM.set(css$$2, JSCompiler_inline_result$$0, value$$84 + "px", JAM.policy.p2);
      }
      return;
    }
    var args$$11 = $A(arguments);
    var v1090;
    var v3316 = args$$11.length;
    var v2509 = v3316 === 0;
    if (v2509) {
      var v2507 = Element.Layout;
      v1090 = v2507.PROPERTIES;
    } else {
      var v2508 = JAM.call(args$$11.join, args$$11, [" "], JAM.policy.p1);
      v1090 = JAM.call(v2508.split, v2508, [" "], JAM.policy.p1);
    }
    var keys$$4 = v1090;
    var css$$2 = {};
    JAM.call(keys$$4.each, keys$$4, [v149, this], JAM.policy.p1);
    return css$$2;
  }
  function v148() {
    var v1091 = this.toObject;
    var obj$$17 = JAM.call(v1091.apply, v1091, [this, arguments], JAM.policy.p1);
    return JAM.new(Hash, [obj$$17]);
  }
  function v147() {
    function v146(key$$25) {
      var v3707 = Element.Layout;
      var v3317 = v3707.PROPERTIES;
      var v2510 = JAM.call(v3317.include, v3317, [key$$25], JAM.policy.p1);
      var v1092 = !v2510;
      if (v1092) {
        return;
      }
      var value$$83 = JAM.call(this.get, this, [key$$25], JAM.policy.p1);
      var v1093 = value$$83 != null;
      if (v1093) {
        JAM.set(obj$$16, key$$25, value$$83, JAM.policy.p2);
      }
      return;
    }
    var args$$10 = $A(arguments);
    var v1094;
    var v3318 = args$$10.length;
    var v2513 = v3318 === 0;
    if (v2513) {
      var v2511 = Element.Layout;
      v1094 = v2511.PROPERTIES;
    } else {
      var v2512 = JAM.call(args$$10.join, args$$10, [" "], JAM.policy.p1);
      v1094 = JAM.call(v2512.split, v2512, [" "], JAM.policy.p1);
    }
    var keys$$3 = v1094;
    var obj$$16 = {};
    JAM.call(keys$$3.each, keys$$3, [v146, this], JAM.policy.p1);
    return obj$$16;
  }
  function v145(bool$$2) {
    var v1095 = this.element;
    return JAM.call(v1095.store, v1095, ["prototype_element_layout_prepared", bool$$2], JAM.policy.p1);
  }
  function v144() {
    var v1096 = this.element;
    return JAM.call(v1096.retrieve, v1096, ["prototype_element_layout_prepared", false], JAM.policy.p1);
  }
  function v143(property$$17) {
    var v1097 = Element.Layout;
    var COMPUTATIONS = v1097.COMPUTATIONS;
    var v2514 = property$$17 in COMPUTATIONS;
    var v1098 = !v2514;
    if (v1098) {
      throw "Property not found.";
    }
    var v2515 = COMPUTATIONS[property$$17];
    var v2516 = this.element;
    var v1099 = JAM.call(v2515.call, v2515, [this, v2516], JAM.policy.p1);
    return JAM.call(this._set, this, [property$$17, v1099], JAM.policy.p1);
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
    var v1100 = JAM.call(this._isPrepared, this, [], JAM.policy.p1);
    if (v1100) {
      return;
    }
    var element$$113 = this.element;
    var JSCompiler_inline_result$$4;
    JSCompiler_inline_label_isDisplayed_30: {
      var element$$inline_28 = element$$113;
      var v2517 = element$$inline_28;
      if (v2517) {
        v2517 = element$$inline_28.parentNode;
      }
      var v1103 = v2517;
      for (;v1103;) {
        var display$$inline_29 = JAM.call(element$$inline_28.getStyle, element$$inline_28, ["display"], JAM.policy.p1);
        var v1101 = display$$inline_29 === "none";
        if (v1101) {
          JSCompiler_inline_result$$4 = false;
          break JSCompiler_inline_label_isDisplayed_30;
        }
        var v1102 = element$$inline_28.parentNode;
        element$$inline_28 = JAM.call($, null, [v1102], JAM.policy.p1);
        var v2518 = element$$inline_28;
        if (v2518) {
          v2518 = element$$inline_28.parentNode;
        }
        v1103 = v2518;
      }
      JSCompiler_inline_result$$4 = true;
    }
    if (JSCompiler_inline_result$$4) {
      JAM.call(this._setPrepared, this, [true], JAM.policy.p1);
      return;
    }
    var v3319 = element$$113.style;
    var v2519 = v3319.position;
    var v3320 = !v2519;
    if (v3320) {
      v2519 = "";
    }
    var v1104 = v2519;
    var v3321 = element$$113.style;
    var v2520 = v3321.width;
    var v3322 = !v2520;
    if (v3322) {
      v2520 = "";
    }
    var v1105 = v2520;
    var v3323 = element$$113.style;
    var v2521 = v3323.visibility;
    var v3324 = !v2521;
    if (v3324) {
      v2521 = "";
    }
    var v1106 = v2521;
    var v3325 = element$$113.style;
    var v2522 = v3325.display;
    var v3326 = !v2522;
    if (v3326) {
      v2522 = "";
    }
    var v1107 = v2522;
    var originalStyles$$2 = {position:v1104, width:v1105, visibility:v1106, display:v1107};
    JAM.call(element$$113.store, element$$113, ["prototype_original_styles", originalStyles$$2], JAM.policy.p1);
    var position$$3 = JAM.call(getRawStyle, null, [element$$113, "position"], JAM.policy.p1);
    var width$$9 = element$$113.offsetWidth;
    var v2523 = width$$9 === 0;
    var v3327 = !v2523;
    if (v3327) {
      v2523 = width$$9 === null;
    }
    var v1109 = v2523;
    if (v1109) {
      var v1108 = element$$113.style;
      v1108.display = "block";
      width$$9 = element$$113.offsetWidth;
    }
    var v1110;
    var v2524 = position$$3 === "fixed";
    if (v2524) {
      v1110 = document.viewport;
    } else {
      v1110 = element$$113.parentNode;
    }
    var context$$28 = v1110;
    var tempStyles = {visibility:"hidden", display:"block"};
    var v1111 = position$$3 !== "fixed";
    if (v1111) {
      tempStyles.position = "absolute";
    }
    JAM.call(element$$113.setStyle, element$$113, [tempStyles], JAM.policy.p1);
    var positionedWidth = element$$113.offsetWidth;
    var newWidth;
    var v2525 = width$$9;
    if (v2525) {
      v2525 = positionedWidth === width$$9;
    }
    var v1116 = v2525;
    if (v1116) {
      newWidth = getContentWidth(element$$113, context$$28);
    } else {
      var v2526 = position$$3 === "absolute";
      var v3328 = !v2526;
      if (v3328) {
        v2526 = position$$3 === "fixed";
      }
      var v1115 = v2526;
      if (v1115) {
        newWidth = getContentWidth(element$$113, context$$28);
      } else {
        var parent$$3 = element$$113.parentNode;
        var v1112 = JAM.call($, null, [parent$$3], JAM.policy.p1);
        var pLayout = JAM.call(v1112.getLayout, v1112, [], JAM.policy.p1);
        var v3909 = JAM.call(pLayout.get, pLayout, ["width"], JAM.policy.p1);
        var v3910 = JAM.call(this.get, this, ["margin-left"], JAM.policy.p1);
        var v3854 = v3909 - v3910;
        var v3855 = JAM.call(this.get, this, ["border-left"], JAM.policy.p1);
        var v3708 = v3854 - v3855;
        var v3709 = JAM.call(this.get, this, ["padding-left"], JAM.policy.p1);
        var v3329 = v3708 - v3709;
        var v3330 = JAM.call(this.get, this, ["padding-right"], JAM.policy.p1);
        var v2527 = v3329 - v3330;
        var v2528 = JAM.call(this.get, this, ["border-right"], JAM.policy.p1);
        var v1113 = v2527 - v2528;
        var v1114 = JAM.call(this.get, this, ["margin-right"], JAM.policy.p1);
        newWidth = v1113 - v1114;
      }
    }
    var v2529 = newWidth + "px";
    var v1117 = {width:v2529};
    JAM.call(element$$113.setStyle, element$$113, [v1117], JAM.policy.p1);
    JAM.call(this._setPrepared, this, [true], JAM.policy.p1);
    return;
  }
  function v140($super$$4, property$$16) {
    var value$$82 = JAM.call($super$$4, null, [property$$16], JAM.policy.p1);
    var v1118;
    var v2530 = value$$82 === null;
    if (v2530) {
      v1118 = JAM.call(this._compute, this, [property$$16], JAM.policy.p1);
    } else {
      v1118 = value$$82;
    }
    return v1118;
  }
  function v139(property$$15, value$$81) {
    throw "Properties of Element.Layout are read-only.";
  }
  function v138(property$$14, value$$80) {
    var v2531 = Hash.prototype;
    var v1119 = v2531.set;
    return JAM.call(v1119.call, v1119, [this, property$$14, value$$80], JAM.policy.p1);
  }
  function v137($super$$3, element$$112, preCompute$$1) {
    function v136(property$$13) {
      JAM.call(this._set, this, [property$$13, null], JAM.policy.p1);
      return;
    }
    JAM.call($super$$3, null, [], JAM.policy.p1);
    var v3992 = JAM.call($, null, [element$$112], JAM.policy.p1);
    this.element = v3992;
    var v2532 = Element.Layout;
    var v1120 = v2532.PROPERTIES;
    JAM.call(v1120.each, v1120, [v136, this], JAM.policy.p1);
    if (preCompute$$1) {
      this._preComputing = true;
      JAM.call(this._begin, this, [], JAM.policy.p1);
      var v2533 = Element.Layout;
      var v1121 = v2533.PROPERTIES;
      var v1122 = this._compute;
      JAM.call(v1121.each, v1121, [v1122, this], JAM.policy.p1);
      JAM.call(this._end, this, [], JAM.policy.p1);
      this._preComputing = false;
    }
    return;
  }
  function v135(element$$111) {
    var v3331 = element$$111.currentStyle;
    var v2534 = v3331.hasLayout;
    var v1124 = !v2534;
    if (v1124) {
      var v1123 = element$$111.style;
      v1123.zoom = 1;
    }
    return element$$111;
  }
  function getRawStyle(element$$84, style$$6) {
    element$$84 = JAM.call($, null, [element$$84], JAM.policy.p1);
    var v1125 = element$$84.style;
    var value$$77 = v1125[style$$6];
    var v2535 = !value$$77;
    var v3332 = !v2535;
    if (v3332) {
      v2535 = value$$77 === "auto";
    }
    var v1128 = v2535;
    if (v1128) {
      var v1126 = document.defaultView;
      var css$$1 = JAM.call(v1126.getComputedStyle, v1126, [element$$84, null], JAM.policy.p1);
      var v1127;
      if (css$$1) {
        v1127 = css$$1[style$$6];
      } else {
        v1127 = null;
      }
      value$$77 = v1127;
    }
    var v1130 = style$$6 === "opacity";
    if (v1130) {
      var v1129;
      if (value$$77) {
        v1129 = parseFloat(value$$77);
      } else {
        v1129 = 1;
      }
      return v1129;
    }
    var v1131;
    var v2536 = value$$77 === "auto";
    if (v2536) {
      v1131 = null;
    } else {
      v1131 = value$$77;
    }
    return v1131;
  }
  function getRawStyle_IE(element$$85, style$$7) {
    var v1132 = element$$85.style;
    var value$$78 = v1132[style$$7];
    var v2537 = !value$$78;
    if (v2537) {
      v2537 = element$$85.currentStyle;
    }
    var v1134 = v2537;
    if (v1134) {
      var v1133 = element$$85.currentStyle;
      value$$78 = v1133[style$$7];
    }
    return value$$78;
  }
  function getContentWidth(element$$86, context$$26) {
    var boxWidth = element$$86.offsetWidth;
    var v1135 = getPixelValue(element$$86, "borderLeftWidth", context$$26);
    var v2538 = !v1135;
    if (v2538) {
      v1135 = 0;
    }
    var bl = v1135;
    var v1136 = getPixelValue(element$$86, "borderRightWidth", context$$26);
    var v2539 = !v1136;
    if (v2539) {
      v1136 = 0;
    }
    var br = v1136;
    var v1137 = getPixelValue(element$$86, "paddingLeft", context$$26);
    var v2540 = !v1137;
    if (v2540) {
      v1137 = 0;
    }
    var pl = v1137;
    var v1138 = getPixelValue(element$$86, "paddingRight", context$$26);
    var v2541 = !v1138;
    if (v2541) {
      v1138 = 0;
    }
    var pr = v1138;
    var v3333 = boxWidth - bl;
    var v2542 = v3333 - br;
    var v1139 = v2542 - pl;
    return v1139 - pr;
  }
  function getPixelValue(value$$79, property$$11, context$$27) {
    var element$$87 = null;
    var v1140 = JAM.call(Object.isElement, Object, [value$$79], JAM.policy.p1);
    if (v1140) {
      element$$87 = value$$79;
      value$$79 = JAM.call(getRawStyle, null, [element$$87, property$$11], JAM.policy.p1);
    }
    var v2543 = value$$79 === null;
    var v3334 = !v2543;
    if (v3334) {
      v2543 = JAM.call(Object.isUndefined, Object, [value$$79], JAM.policy.p1);
    }
    var v1141 = v2543;
    if (v1141) {
      return null;
    }
    var v1142 = JAM.call(/^(?:-)?\d+(\.\d+)?(px)?$/i.test, /^(?:-)?\d+(\.\d+)?(px)?$/i, [value$$79], JAM.policy.p1);
    if (v1142) {
      return JAM.call(window.parseFloat, window, [value$$79], JAM.policy.p1);
    }
    var isPercentage = JAM.call(value$$79.include, value$$79, ["%"], JAM.policy.p1);
    var v1143 = document.viewport;
    var isViewport = context$$27 === v1143;
    var v3710 = JAM.call(/\d/.test, /\d/, [value$$79], JAM.policy.p1);
    if (v3710) {
      v3710 = element$$87;
    }
    var v3335 = v3710;
    if (v3335) {
      v3335 = element$$87.runtimeStyle;
    }
    var v2544 = v3335;
    if (v2544) {
      var v3336 = isPercentage && isViewport;
      v2544 = !v3336;
    }
    var v1151 = v2544;
    if (v1151) {
      var v1144 = element$$87.style;
      var style$$8 = v1144.left;
      var v1145 = element$$87.runtimeStyle;
      var rStyle = v1145.left;
      var v1146 = element$$87.runtimeStyle;
      var v2545 = element$$87.currentStyle;
      v1146.left = v2545.left;
      var v1147 = element$$87.style;
      v1147.left = value$$79 || 0;
      var v1148 = element$$87.style;
      value$$79 = v1148.pixelLeft;
      var v1149 = element$$87.style;
      v1149.left = style$$8;
      var v1150 = element$$87.runtimeStyle;
      v1150.left = rStyle;
      return value$$79;
    }
    var v1163 = element$$87 && isPercentage;
    if (v1163) {
      var v1152 = context$$27;
      var v2546 = !v1152;
      if (v2546) {
        v1152 = element$$87.parentNode;
      }
      context$$27 = v1152;
      var decimal;
      JSCompiler_inline_label_toDecimal_27: {
        var match$$inline_26 = JAM.call(value$$79.match, value$$79, [/^(\d+)%?$/i], JAM.policy.p1);
        var v1153 = !match$$inline_26;
        if (v1153) {
          decimal = null;
          break JSCompiler_inline_label_toDecimal_27;
        }
        var v2547 = match$$inline_26[1];
        var v1154 = Number(v2547);
        decimal = v1154 / 100;
      }
      var whole = null;
      var v2548 = JAM.call(property$$11.include, property$$11, ["left"], JAM.policy.p1);
      var v3337 = !v2548;
      if (v3337) {
        v2548 = JAM.call(property$$11.include, property$$11, ["right"], JAM.policy.p1);
      }
      var v1155 = v2548;
      var v2549 = !v1155;
      if (v2549) {
        v1155 = JAM.call(property$$11.include, property$$11, ["width"], JAM.policy.p1);
      }
      var isHorizontal = v1155;
      var v2550 = JAM.call(property$$11.include, property$$11, ["top"], JAM.policy.p1);
      var v3338 = !v2550;
      if (v3338) {
        v2550 = JAM.call(property$$11.include, property$$11, ["bottom"], JAM.policy.p1);
      }
      var v1156 = v2550;
      var v2551 = !v1156;
      if (v2551) {
        v1156 = JAM.call(property$$11.include, property$$11, ["height"], JAM.policy.p1);
      }
      var isVertical = v1156;
      var v2552 = document.viewport;
      var v1161 = context$$27 === v2552;
      if (v1161) {
        if (isHorizontal) {
          var v1157 = document.viewport;
          whole = JAM.call(v1157.getWidth, v1157, [], JAM.policy.p1);
        } else {
          if (isVertical) {
            var v1158 = document.viewport;
            whole = JAM.call(v1158.getHeight, v1158, [], JAM.policy.p1);
          }
        }
      } else {
        if (isHorizontal) {
          var v1159 = JAM.call($, null, [context$$27], JAM.policy.p1);
          whole = JAM.call(v1159.measure, v1159, ["width"], JAM.policy.p1);
        } else {
          if (isVertical) {
            var v1160 = JAM.call($, null, [context$$27], JAM.policy.p1);
            whole = JAM.call(v1160.measure, v1160, ["height"], JAM.policy.p1);
          }
        }
      }
      var v1162;
      var v2553 = whole === null;
      if (v2553) {
        v1162 = 0;
      } else {
        v1162 = whole * decimal;
      }
      return v1162;
    }
    return 0;
  }
  function getLayout(element$$89, preCompute) {
    var v1164 = Element.Layout;
    return JAM.new(v1164, [element$$89, preCompute]);
  }
  function measure(element$$90, property$$12) {
    var v2554 = JAM.call($, null, [element$$90], JAM.policy.p1);
    var v1165 = JAM.call(v2554.getLayout, v2554, [], JAM.policy.p1);
    return JAM.call(v1165.get, v1165, [property$$12], JAM.policy.p1);
  }
  function getHeight(element$$91) {
    var v1166 = JAM.call(Element.getDimensions, Element, [element$$91], JAM.policy.p1);
    return v1166.height;
  }
  function getWidth(element$$92) {
    var v1167 = JAM.call(Element.getDimensions, Element, [element$$92], JAM.policy.p1);
    return v1167.width;
  }
  function getDimensions(element$$93) {
    element$$93 = JAM.call($, null, [element$$93], JAM.policy.p1);
    var display$$1 = JAM.call(Element.getStyle, Element, [element$$93, "display"], JAM.policy.p1);
    var v2555 = display$$1;
    if (v2555) {
      v2555 = display$$1 !== "none";
    }
    var v1170 = v2555;
    if (v1170) {
      var v1168 = element$$93.offsetWidth;
      var v1169 = element$$93.offsetHeight;
      return{width:v1168, height:v1169};
    }
    var style$$9 = element$$93.style;
    var v1171 = style$$9.visibility;
    var v1172 = style$$9.position;
    var v1173 = style$$9.display;
    var originalStyles = {visibility:v1171, position:v1172, display:v1173};
    var newStyles = {visibility:"hidden", display:"block"};
    var v2556 = originalStyles.position;
    var v1174 = v2556 !== "fixed";
    if (v1174) {
      newStyles.position = "absolute";
    }
    JAM.call(Element.setStyle, Element, [element$$93, newStyles], JAM.policy.p1);
    var v1175 = element$$93.offsetWidth;
    var v1176 = element$$93.offsetHeight;
    var dimensions = {width:v1175, height:v1176};
    JAM.call(Element.setStyle, Element, [element$$93, originalStyles], JAM.policy.p1);
    return dimensions;
  }
  function getOffsetParent(element$$94) {
    element$$94 = JAM.call($, null, [element$$94], JAM.policy.p1);
    var v3856 = element$$94.nodeType;
    var v3857 = Node.DOCUMENT_NODE;
    var v3711 = v3856 === v3857;
    var v3858 = !v3711;
    if (v3858) {
      v3711 = isDetached(element$$94);
    }
    var v3339 = v3711;
    var v3713 = !v3339;
    if (v3713) {
      var v3859 = element$$94.nodeName;
      var v3712 = JAM.call(v3859.toUpperCase, v3859, [], JAM.policy.p1);
      v3339 = v3712 === "BODY";
    }
    var v2557 = v3339;
    var v3341 = !v2557;
    if (v3341) {
      var v3714 = element$$94.nodeName;
      var v3340 = JAM.call(v3714.toUpperCase, v3714, [], JAM.policy.p1);
      v2557 = v3340 === "HTML";
    }
    var v1178 = v2557;
    if (v1178) {
      var v1177 = document.body;
      return JAM.call($, null, [v1177], JAM.policy.p1);
    }
    var v1179 = JAM.call(Element.getStyle, Element, [element$$94, "display"], JAM.policy.p1);
    var isInline = v1179 === "inline";
    var v2558 = !isInline;
    if (v2558) {
      v2558 = element$$94.offsetParent;
    }
    var v1181 = v2558;
    if (v1181) {
      var v1180 = element$$94.offsetParent;
      return JAM.call($, null, [v1180], JAM.policy.p1);
    }
    var v2559 = element$$94 = element$$94.parentNode;
    if (v2559) {
      var v3342 = document.body;
      v2559 = element$$94 !== v3342;
    }
    var v1184 = v2559;
    for (;v1184;) {
      var v2560 = JAM.call(Element.getStyle, Element, [element$$94, "position"], JAM.policy.p1);
      var v1183 = v2560 !== "static";
      if (v1183) {
        var v1182;
        var v3715 = element$$94.nodeName;
        var v3343 = JAM.call(v3715.toUpperCase, v3715, [], JAM.policy.p1);
        var v2562 = v3343 === "HTML";
        if (v2562) {
          var v2561 = document.body;
          v1182 = JAM.call($, null, [v2561], JAM.policy.p1);
        } else {
          v1182 = JAM.call($, null, [element$$94], JAM.policy.p1);
        }
        return v1182;
      }
      var v2563 = element$$94 = element$$94.parentNode;
      if (v2563) {
        var v3344 = document.body;
        v2563 = element$$94 !== v3344;
      }
      v1184 = v2563;
    }
    var v1185 = document.body;
    return JAM.call($, null, [v1185], JAM.policy.p1);
  }
  function cumulativeOffset(element$$95) {
    element$$95 = JAM.call($, null, [element$$95], JAM.policy.p1);
    var valueT = 0;
    var valueL = 0;
    var v1186 = element$$95.parentNode;
    if (v1186) {
      do {
        var v3345 = element$$95.offsetTop;
        var v3716 = !v3345;
        if (v3716) {
          v3345 = 0;
        }
        var v2564 = v3345;
        valueT = valueT + v2564;
        var v3346 = element$$95.offsetLeft;
        var v3717 = !v3346;
        if (v3717) {
          v3346 = 0;
        }
        var v2565 = v3346;
        valueL = valueL + v2565;
        element$$95 = element$$95.offsetParent;
      } while (element$$95);
    }
    var v1187 = Element.Offset;
    return JAM.new(v1187, [valueL, valueT]);
  }
  function positionedOffset(element$$96) {
    element$$96 = JAM.call($, null, [element$$96], JAM.policy.p1);
    var layout = JAM.call(element$$96.getLayout, element$$96, [], JAM.policy.p1);
    var valueT$$1 = 0;
    var valueL$$1 = 0;
    do {
      var v3347 = element$$96.offsetTop;
      var v3718 = !v3347;
      if (v3718) {
        v3347 = 0;
      }
      var v2566 = v3347;
      valueT$$1 = valueT$$1 + v2566;
      var v3348 = element$$96.offsetLeft;
      var v3719 = !v3348;
      if (v3719) {
        v3348 = 0;
      }
      var v2567 = v3348;
      valueL$$1 = valueL$$1 + v2567;
      element$$96 = element$$96.offsetParent;
      if (element$$96) {
        var v3349 = element$$96.nodeName;
        var v2568 = JAM.call(v3349.toUpperCase, v3349, [], JAM.policy.p1);
        var v1188 = v2568 === "BODY";
        if (v1188) {
          break;
        }
        var p$$2 = JAM.call(Element.getStyle, Element, [element$$96, "position"], JAM.policy.p1);
        var v1189 = p$$2 !== "static";
        if (v1189) {
          break;
        }
      }
    } while (element$$96);
    var v2569 = valueL$$1;
    var v2570 = JAM.call(layout.get, layout, ["margin-top"], JAM.policy.p1);
    valueL$$1 = v2569 - v2570;
    var v2571 = valueT$$1;
    var v2572 = JAM.call(layout.get, layout, ["margin-left"], JAM.policy.p1);
    valueT$$1 = v2571 - v2572;
    var v1190 = Element.Offset;
    return JAM.new(v1190, [valueL$$1, valueT$$1]);
  }
  function cumulativeScrollOffset(element$$97) {
    var valueT$$2 = 0;
    var valueL$$2 = 0;
    do {
      var v3350 = element$$97.scrollTop;
      var v3720 = !v3350;
      if (v3720) {
        v3350 = 0;
      }
      var v2573 = v3350;
      valueT$$2 = valueT$$2 + v2573;
      var v3351 = element$$97.scrollLeft;
      var v3721 = !v3351;
      if (v3721) {
        v3351 = 0;
      }
      var v2574 = v3351;
      valueL$$2 = valueL$$2 + v2574;
      element$$97 = element$$97.parentNode;
    } while (element$$97);
    var v1191 = Element.Offset;
    return JAM.new(v1191, [valueL$$2, valueT$$2]);
  }
  function viewportOffset(forElement) {
    var valueT$$3 = 0;
    var valueL$$3 = 0;
    var docBody = document.body;
    var element$$98 = JAM.call($, null, [forElement], JAM.policy.p1);
    var v1193 = element$$98 = element$$98.offsetParent;
    do {
      var v3352 = element$$98.offsetTop;
      var v3722 = !v3352;
      if (v3722) {
        v3352 = 0;
      }
      var v2575 = v3352;
      valueT$$3 = valueT$$3 + v2575;
      var v3353 = element$$98.offsetLeft;
      var v3723 = !v3353;
      if (v3723) {
        v3353 = 0;
      }
      var v2576 = v3353;
      valueL$$3 = valueL$$3 + v2576;
      var v3354 = element$$98.offsetParent;
      var v2577 = v3354 == docBody;
      if (v2577) {
        var v3355 = JAM.call(Element.getStyle, Element, [element$$98, "position"], JAM.policy.p1);
        v2577 = v3355 == "absolute";
      }
      var v1192 = v2577;
      if (v1192) {
        break;
      }
      v1193 = element$$98 = element$$98.offsetParent;
    } while (v1193);
    element$$98 = forElement;
    var v1195 = element$$98 = element$$98.parentNode;
    do {
      var v1194 = element$$98 != docBody;
      if (v1194) {
        var v3356 = element$$98.scrollTop;
        var v3724 = !v3356;
        if (v3724) {
          v3356 = 0;
        }
        var v2578 = v3356;
        valueT$$3 = valueT$$3 - v2578;
        var v3357 = element$$98.scrollLeft;
        var v3725 = !v3357;
        if (v3725) {
          v3357 = 0;
        }
        var v2579 = v3357;
        valueL$$3 = valueL$$3 - v2579;
      }
      v1195 = element$$98 = element$$98.parentNode;
    } while (v1195);
    var v1196 = Element.Offset;
    return JAM.new(v1196, [valueL$$3, valueT$$3]);
  }
  function absolutize(element$$99) {
    element$$99 = JAM.call($, null, [element$$99], JAM.policy.p1);
    var v2580 = JAM.call(Element.getStyle, Element, [element$$99, "position"], JAM.policy.p1);
    var v1197 = v2580 === "absolute";
    if (v1197) {
      return element$$99;
    }
    var offsetParent = JAM.call(getOffsetParent, null, [element$$99], JAM.policy.p1);
    var eOffset = JAM.call(element$$99.viewportOffset, element$$99, [], JAM.policy.p1);
    var pOffset = JAM.call(offsetParent.viewportOffset, offsetParent, [], JAM.policy.p1);
    var offset$$8 = JAM.call(eOffset.relativeTo, eOffset, [pOffset], JAM.policy.p1);
    var layout$$1 = JAM.call(element$$99.getLayout, element$$99, [], JAM.policy.p1);
    var v2581 = JAM.call(element$$99.getStyle, element$$99, ["left"], JAM.policy.p1);
    var v2582 = JAM.call(element$$99.getStyle, element$$99, ["top"], JAM.policy.p1);
    var v2583 = JAM.call(element$$99.getStyle, element$$99, ["width"], JAM.policy.p1);
    var v2584 = JAM.call(element$$99.getStyle, element$$99, ["height"], JAM.policy.p1);
    var v1198 = {left:v2581, top:v2582, width:v2583, height:v2584};
    JAM.call(element$$99.store, element$$99, ["prototype_absolutize_original_styles", v1198], JAM.policy.p1);
    var v3358 = offset$$8.top;
    var v2585 = v3358 + "px";
    var v3359 = offset$$8.left;
    var v2586 = v3359 + "px";
    var v3360 = JAM.call(layout$$1.get, layout$$1, ["width"], JAM.policy.p1);
    var v2587 = v3360 + "px";
    var v3361 = JAM.call(layout$$1.get, layout$$1, ["height"], JAM.policy.p1);
    var v2588 = v3361 + "px";
    var v1199 = {position:"absolute", top:v2585, left:v2586, width:v2587, height:v2588};
    JAM.call(element$$99.setStyle, element$$99, [v1199], JAM.policy.p1);
    return element$$99;
  }
  function relativize(element$$100) {
    element$$100 = JAM.call($, null, [element$$100], JAM.policy.p1);
    var v2589 = JAM.call(Element.getStyle, Element, [element$$100, "position"], JAM.policy.p1);
    var v1200 = v2589 === "relative";
    if (v1200) {
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
    var v1201 = pos.left;
    var v1202 = pos.top;
    JAM.call(window.scrollTo, window, [v1201, v1202], JAM.policy.p1);
    return element$$101;
  }
  function makePositioned(element$$102) {
    element$$102 = JAM.call($, null, [element$$102], JAM.policy.p1);
    var position$$2 = JAM.call(Element.getStyle, Element, [element$$102, "position"], JAM.policy.p1);
    var styles$$1 = {};
    var v2590 = position$$2 === "static";
    var v3362 = !v2590;
    if (v3362) {
      v2590 = !position$$2;
    }
    var v1204 = v2590;
    if (v1204) {
      styles$$1.position = "relative";
      var v2591 = Prototype.Browser;
      var v1203 = v2591.Opera;
      if (v1203) {
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
      var v1205 = {position:"", top:"", bottom:"", left:"", right:""};
      JAM.call(Element.setStyle, Element, [element$$103, v1205], JAM.policy.p1);
    }
    return element$$103;
  }
  function makeClipping(element$$104) {
    element$$104 = JAM.call($, null, [element$$104], JAM.policy.p1);
    var storage$$3 = JAM.call(Element.getStorage, Element, [element$$104], JAM.policy.p1);
    var madeClipping = JAM.call(storage$$3.get, storage$$3, ["prototype_made_clipping"], JAM.policy.p1);
    var v1208 = JAM.call(Object.isUndefined, Object, [madeClipping], JAM.policy.p1);
    if (v1208) {
      var overflow = JAM.call(Element.getStyle, Element, [element$$104, "overflow"], JAM.policy.p1);
      JAM.call(storage$$3.set, storage$$3, ["prototype_made_clipping", overflow], JAM.policy.p1);
      var v1207 = overflow !== "hidden";
      if (v1207) {
        var v1206 = element$$104.style;
        v1206.overflow = "hidden";
      }
    }
    return element$$104;
  }
  function undoClipping(element$$105) {
    element$$105 = JAM.call($, null, [element$$105], JAM.policy.p1);
    var storage$$4 = JAM.call(Element.getStorage, Element, [element$$105], JAM.policy.p1);
    var overflow$$1 = JAM.call(storage$$4.get, storage$$4, ["prototype_made_clipping"], JAM.policy.p1);
    var v2592 = JAM.call(Object.isUndefined, Object, [overflow$$1], JAM.policy.p1);
    var v1210 = !v2592;
    if (v1210) {
      JAM.call(storage$$4.unset, storage$$4, ["prototype_made_clipping"], JAM.policy.p1);
      var v1209 = element$$105.style;
      v1209.overflow = overflow$$1 || "";
    }
    return element$$105;
  }
  function clonePosition(element$$106, source$$4, options$$7) {
    var v1211 = {setLeft:true, setTop:true, setWidth:true, setHeight:true, offsetTop:0, offsetLeft:0};
    var v1212 = options$$7 || {};
    options$$7 = JAM.call(Object.extend, Object, [v1211, v1212], JAM.policy.p1);
    source$$4 = JAM.call($, null, [source$$4], JAM.policy.p1);
    element$$106 = JAM.call($, null, [element$$106], JAM.policy.p1);
    var p$$3;
    var delta$$1;
    var layout$$2;
    var styles$$2 = {};
    var v2593 = options$$7.setLeft;
    var v3363 = !v2593;
    if (v3363) {
      v2593 = options$$7.setTop;
    }
    var v1215 = v2593;
    if (v1215) {
      p$$3 = JAM.call(Element.viewportOffset, Element, [source$$4], JAM.policy.p1);
      delta$$1 = [0, 0];
      var v2594 = JAM.call(Element.getStyle, Element, [element$$106, "position"], JAM.policy.p1);
      var v1214 = v2594 === "absolute";
      if (v1214) {
        var parent$$2 = JAM.call(Element.getOffsetParent, Element, [element$$106], JAM.policy.p1);
        var v2595 = document.body;
        var v1213 = parent$$2 !== v2595;
        if (v1213) {
          delta$$1 = JAM.call(Element.viewportOffset, Element, [parent$$2], JAM.policy.p1);
        }
      }
    }
    var v2596 = options$$7.setWidth;
    var v3364 = !v2596;
    if (v3364) {
      v2596 = options$$7.setHeight;
    }
    var v1216 = v2596;
    if (v1216) {
      layout$$2 = JAM.call(Element.getLayout, Element, [source$$4], JAM.policy.p1);
    }
    var v1218 = options$$7.setLeft;
    if (v1218) {
      var v3365 = p$$3[0];
      var v3366 = delta$$1[0];
      var v2597 = v3365 - v3366;
      var v2598 = options$$7.offsetLeft;
      var v1217 = v2597 + v2598;
      styles$$2.left = v1217 + "px";
    }
    var v1220 = options$$7.setTop;
    if (v1220) {
      var v3367 = p$$3[1];
      var v3368 = delta$$1[1];
      var v2599 = v3367 - v3368;
      var v2600 = options$$7.offsetTop;
      var v1219 = v2599 + v2600;
      styles$$2.top = v1219 + "px";
    }
    var v1222 = options$$7.setWidth;
    if (v1222) {
      var v1221 = styles$$2;
      var v2601 = JAM.call(layout$$2.get, layout$$2, ["border-box-width"], JAM.policy.p1);
      v1221.width = v2601 + "px";
    }
    var v1224 = options$$7.setHeight;
    if (v1224) {
      var v1223 = styles$$2;
      var v2602 = JAM.call(layout$$2.get, layout$$2, ["border-box-height"], JAM.policy.p1);
      v1223.height = v2602 + "px";
    }
    return JAM.call(Element.setStyle, Element, [element$$106, styles$$2], JAM.policy.p1);
  }
  function isDetached(element$$110) {
    var v2603 = document.body;
    var v1225 = element$$110 !== v2603;
    if (v1225) {
      var v3369 = document.body;
      var v2604 = JAM.call(Element.descendantOf, Element, [element$$110, v3369], JAM.policy.p1);
      v1225 = !v2604;
    }
    return v1225;
  }
  var v2605 = document.documentElement;
  var v1226 = "currentStyle" in v2605;
  if (v1226) {
    getRawStyle = getRawStyle_IE;
  }
  var hasLayout = Prototype.K;
  var v2606 = document.documentElement;
  var v1227 = "currentStyle" in v2606;
  if (v1227) {
    hasLayout = v135;
  }
  var v1228 = Element;
  var v2607 = {initialize:v137, _set:v138, set:v139, get:v140, _begin:v141, _end:v142, _compute:v143, _isPrepared:v144, _setPrepared:v145, toObject:v147, toHash:v148, toCSS:v150, inspect:v151};
  var v3993 = JAM.call(Class.create, Class, [Hash, v2607], JAM.policy.p1);
  v1228.Layout = v3993;
  var v1229 = Element.Layout;
  var v2608 = $w("height width top left right bottom border-left border-right border-top border-bottom padding-left padding-right padding-top padding-bottom margin-top margin-bottom margin-left margin-right padding-box-width padding-box-height border-box-width border-box-height margin-box-width margin-box-height");
  var v2609 = $w("padding-box-width padding-box-height margin-box-width margin-box-height border-box-width border-box-height");
  var v2610 = {"height":v152, "width":v153, "padding-box-height":v154, "padding-box-width":v155, "border-box-height":v156, "border-box-width":v157, "margin-box-height":v158, "margin-box-width":v159, "top":v160, "bottom":v161, "left":v162, "right":v163, "padding-top":v164, "padding-bottom":v165, "padding-left":v166, "padding-right":v167, "border-top":v168, "border-bottom":v169, "border-left":v170, "border-right":v171, "margin-top":v172, "margin-bottom":v173, "margin-left":v174, "margin-right":v175};
  var v1230 = {PROPERTIES:v2608, COMPOSITE_PROPERTIES:v2609, COMPUTATIONS:v2610};
  JAM.call(Object.extend, Object, [v1229, v1230], JAM.policy.p1);
  var v2611 = document.documentElement;
  var v1233 = "getBoundingClientRect" in v2611;
  if (v1233) {
    var v2612 = Element.Layout;
    var v1231 = v2612.COMPUTATIONS;
    var v1232 = {"right":v176, "bottom":v177};
    JAM.call(Object.extend, Object, [v1231, v1232], JAM.policy.p1);
  }
  var v1234 = Element;
  var v2613 = {initialize:v178, relativeTo:v179, inspect:v180, toString:v181, toArray:v182};
  var v3994 = JAM.call(Class.create, Class, [v2613], JAM.policy.p1);
  v1234.Offset = v3994;
  var v2614 = Prototype.Browser;
  var v1236 = v2614.IE;
  if (v1236) {
    getOffsetParent = JAM.call(getOffsetParent.wrap, getOffsetParent, [v183], JAM.policy.p1);
    positionedOffset = JAM.call(positionedOffset.wrap, positionedOffset, [v184], JAM.policy.p1);
  } else {
    var v2615 = Prototype.Browser;
    var v1235 = v2615.Webkit;
    if (v1235) {
      cumulativeOffset = v185;
    }
  }
  var v1237 = {getLayout:getLayout, measure:measure, getWidth:getWidth, getHeight:getHeight, getDimensions:getDimensions, getOffsetParent:getOffsetParent, cumulativeOffset:cumulativeOffset, positionedOffset:positionedOffset, cumulativeScrollOffset:cumulativeScrollOffset, viewportOffset:viewportOffset, absolutize:absolutize, relativize:relativize, scrollTo:scrollTo, makePositioned:makePositioned, undoPositioned:undoPositioned, makeClipping:makeClipping, undoClipping:undoClipping, clonePosition:clonePosition};
  JAM.call(Element.addMethods, Element, [v1237], JAM.policy.p1);
  var v2616 = document.documentElement;
  var v1239 = "getBoundingClientRect" in v2616;
  if (v1239) {
    var v1238 = {viewportOffset:v186};
    JAM.call(Element.addMethods, Element, [v1238], JAM.policy.p1);
  }
  return;
}
function v134(GLOBAL) {
  function v133() {
    var v2617 = Prototype.BrowserFeatures;
    var v1240 = v2617.ElementExtensions;
    if (v1240) {
      return;
    }
    var v1241 = Element$$1.Methods;
    JAM.call(Object.extend, Object, [Methods, v1241], JAM.policy.p1);
    var v2618 = Element$$1.Methods;
    var v1242 = v2618.Simulated;
    JAM.call(Object.extend, Object, [Methods, v1242], JAM.policy.p1);
    EXTENDED = {};
    return;
  }
  function v132(element$$83, value$$76) {
    var v1243 = element$$83.style;
    var v2619;
    if (value$$76) {
      v2619 = value$$76;
    } else {
      v2619 = "";
    }
    v1243.cssText = v2619;
    return;
  }
  function v131(element$$82, value$$75) {
    var v1244 = !value$$75;
    element$$82.checked = !v1244;
    return;
  }
  function v130(element$$81) {
    return element$$81.title;
  }
  function v129(element$$80) {
    var v2620 = element$$80.style;
    var v1245 = v2620.cssText;
    return JAM.call(v1245.toLowerCase, v1245, [], JAM.policy.p1);
  }
  function v128(element$$79, attribute$$7) {
    var value$$74 = JAM.call(element$$79.getAttribute, element$$79, [attribute$$7], JAM.policy.p1);
    var v1246 = !value$$74;
    if (v1246) {
      return null;
    }
    return JAM.call(value$$74.strip, value$$74, [], JAM.policy.p1);
  }
  function v127(element$$78, attribute$$6) {
    var value$$73 = JAM.call(element$$78.getAttribute, element$$78, [attribute$$6], JAM.policy.p1);
    var v1247 = !value$$73;
    if (v1247) {
      return null;
    }
    value$$73 = JAM.call(value$$73.toString, value$$73, [], JAM.policy.p1);
    var v1248 = JAM.call(value$$73.split, value$$73, ["{"], JAM.policy.p1);
    value$$73 = v1248[1];
    var v1249 = JAM.call(value$$73.split, value$$73, ["}"], JAM.policy.p1);
    value$$73 = v1249[0];
    return JAM.call(value$$73.strip, value$$73, [], JAM.policy.p1);
  }
  function v126() {
    var v1250 = Prototype.emptyFunction;
    JAM.call(DIV.setAttribute, DIV, ["onclick", v1250], JAM.policy.p1);
    var value$$72 = JAM.call(DIV.getAttribute, DIV, ["onclick"], JAM.policy.p1);
    var v1251 = typeof value$$72;
    var isFunction$$1 = v1251 === "function";
    JAM.call(DIV.removeAttribute, DIV, ["onclick"], JAM.policy.p1);
    return isFunction$$1;
  }
  function v125(element$$77, node$$14) {
    var v1252 = element$$77.parentNode;
    var v1253 = element$$77.nextSibling;
    JAM.call(v1252.insertBefore, v1252, [node$$14, v1253], JAM.policy.p1);
    return;
  }
  function v124(element$$76, node$$13) {
    JAM.call(element$$76.appendChild, element$$76, [node$$13], JAM.policy.p1);
    return;
  }
  function v123(element$$75, node$$12) {
    var v1254 = element$$75.firstChild;
    JAM.call(element$$75.insertBefore, element$$75, [node$$12, v1254], JAM.policy.p1);
    return;
  }
  function v122(element$$74, node$$11) {
    var v1255 = element$$74.parentNode;
    JAM.call(v1255.insertBefore, v1255, [node$$11, element$$74], JAM.policy.p1);
    return;
  }
  function v121() {
    var s$$2 = JAM.call(document.createElement, document, ["script"], JAM.policy.p1);
    var isBuggy$$4 = false;
    try {
      var v1256 = JAM.call(document.createTextNode, document, [""], JAM.policy.p1);
      JAM.call(s$$2.appendChild, s$$2, [v1256], JAM.policy.p1);
      var v2621 = s$$2.firstChild;
      var v1257 = !v2621;
      var v2623 = !v1257;
      if (v2623) {
        var v2622 = s$$2.firstChild;
        if (v2622) {
          var v3726 = s$$2.firstChild;
          var v3370 = v3726.nodeType;
          v2622 = v3370 !== 3;
        }
        v1257 = v2622;
      }
      isBuggy$$4 = v1257;
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
      var v2624 = el$$4.childNodes;
      var v1258 = v2624.length;
      var isBuggy$$3 = v1258 === 0;
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
      var v2625 = el$$3;
      if (v2625) {
        v2625 = el$$3.tBodies;
      }
      var v1260 = v2625;
      if (v1260) {
        JAM.set(el$$3, "innerHTML", "<tbody><tr><td>test</td></tr></tbody>");
        var v3371 = el$$3.tBodies;
        var v2626 = v3371[0];
        var v1259 = typeof v2626;
        var isBuggy$$2 = v1259 == "undefined";
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
    var v2627 = el$$2.options;
    if (v2627) {
      var v3372 = el$$2.options;
      v2627 = v3372[0];
    }
    var v1262 = v2627;
    if (v1262) {
      var v3727 = el$$2.options;
      var v3373 = v3727[0];
      var v2628 = v3373.nodeName;
      var v1261 = JAM.call(v2628.toUpperCase, v2628, [], JAM.policy.p1);
      isBuggy$$1 = v1261 !== "OPTION";
    }
    el$$2 = null;
    return isBuggy$$1;
  }
  function v117() {
    try {
      var el$$1 = JAM.call(document.createElement, document, ['<input name="x">'], JAM.policy.p1);
      var v3374 = el$$1.tagName;
      var v2629 = JAM.call(v3374.toLowerCase, v3374, [], JAM.policy.p1);
      var v1263 = v2629 === "input";
      if (v1263) {
        var v2630 = el$$1.name;
        v1263 = v2630 === "x";
      }
      return v1263;
    } catch (err) {
      return false;
    }
    return;
  }
  function $$$1(element$$2) {
    var v2631 = arguments.length;
    var v1266 = v2631 > 1;
    if (v1266) {
      var i$$17 = 0;
      var elements = [];
      var length$$28 = arguments.length;
      var v1265 = i$$17 < length$$28;
      for (;v1265;) {
        var v2632 = arguments[i$$17];
        var v1264 = $$$1(v2632);
        JAM.call(elements.push, elements, [v1264], JAM.policy.p1);
        i$$17 = i$$17 + 1;
        v1265 = i$$17 < length$$28;
      }
      return elements;
    }
    var v1267 = JAM.call(Object.isString, Object, [element$$2], JAM.policy.p1);
    if (v1267) {
      element$$2 = JAM.call(document.getElementById, document, [element$$2], JAM.policy.p1);
    }
    return JAM.call(Element$$1.extend, Element$$1, [element$$2]);
  }
  function Element$$1(tagName$$2, attributes$$1) {
    attributes$$1 = attributes$$1 || {};
    tagName$$2 = JAM.call(tagName$$2.toLowerCase, tagName$$2, [], JAM.policy.p1);
    var v2633 = HAS_EXTENDED_CREATE_ELEMENT_SYNTAX;
    if (v2633) {
      v2633 = attributes$$1.name;
    }
    var v1270 = v2633;
    if (v1270) {
      var v3375 = "<" + tagName$$2;
      var v2634 = v3375 + ' name="';
      var v2635 = attributes$$1.name;
      var v1268 = v2634 + v2635;
      tagName$$2 = v1268 + '">';
      delete attributes$$1.name;
      var v1269 = JAM.call(document.createElement, document, [tagName$$2], JAM.policy.p1);
      return JAM.call(Element$$1.writeAttribute, Element$$1, [v1269, attributes$$1], JAM.policy.p1);
    }
    var v2636 = ELEMENT_CACHE[tagName$$2];
    var v1273 = !v2636;
    if (v1273) {
      var v1271 = ELEMENT_CACHE;
      var v1272 = tagName$$2;
      var v2637 = JAM.call(document.createElement, document, [tagName$$2], JAM.policy.p1);
      var v3995 = JAM.call(Element$$1.extend, Element$$1, [v2637]);
      JAM.set(v1271, v1272, v3995, JAM.policy.p2);
    }
    var JSCompiler_inline_result$$3;
    JSCompiler_inline_label_shouldUseCreationCache_7: {
      var v1274 = tagName$$2 === "select";
      if (v1274) {
        JSCompiler_inline_result$$3 = false;
        break JSCompiler_inline_label_shouldUseCreationCache_7;
      }
      var v1275 = "type" in attributes$$1;
      if (v1275) {
        JSCompiler_inline_result$$3 = false;
        break JSCompiler_inline_label_shouldUseCreationCache_7;
      }
      JSCompiler_inline_result$$3 = true;
    }
    var v1276;
    if (JSCompiler_inline_result$$3) {
      var v2638 = ELEMENT_CACHE[tagName$$2];
      v1276 = JAM.call(v2638.cloneNode, v2638, [false], JAM.policy.p1);
    } else {
      v1276 = JAM.call(document.createElement, document, [tagName$$2], JAM.policy.p1);
    }
    var node$$2 = v1276;
    return JAM.call(Element$$1.writeAttribute, Element$$1, [node$$2, attributes$$1], JAM.policy.p1);
  }
  function inspect$$5(element$$3) {
    element$$3 = $$$1(element$$3);
    var v2639 = element$$3.tagName;
    var v1277 = JAM.call(v2639.toLowerCase, v2639, [], JAM.policy.p1);
    var result$$7 = "<" + v1277;
    var attribute;
    var value$$61;
    var property$$5;
    for (property$$5 in INSPECT_ATTRIBUTES) {
      attribute = INSPECT_ATTRIBUTES[property$$5];
      var v2640 = element$$3[property$$5];
      var v3376 = !v2640;
      if (v3376) {
        v2640 = "";
      }
      var v1278 = v2640;
      value$$61 = JAM.call(v1278.toString, v1278, [], JAM.policy.p1);
      if (value$$61) {
        var v2641 = result$$7;
        var v3728 = " " + attribute;
        var v3377 = v3728 + "=";
        var v3378 = JAM.call(value$$61.inspect, value$$61, [true], JAM.policy.p1);
        var v2642 = v3377 + v3378;
        result$$7 = v2641 + v2642;
      }
    }
    return result$$7 + ">";
  }
  function visible(element$$4) {
    var v3379 = $$$1(element$$4);
    var v2643 = v3379.style;
    var v1279 = v2643.display;
    return v1279 !== "none";
  }
  function toggle(element$$5, bool) {
    element$$5 = $$$1(element$$5);
    var v1281 = JAM.call(Object.isUndefined, Object, [bool], JAM.policy.p1);
    if (v1281) {
      var v1280 = JAM.call(Element$$1.visible, Element$$1, [element$$5], JAM.policy.p1);
      bool = !v1280;
    }
    var v2644;
    if (bool) {
      v2644 = "show";
    } else {
      v2644 = "hide";
    }
    var v1282 = v2644;
    JAM.call(Element$$1[v1282], Element$$1, [element$$5], JAM.policy.p1);
    return element$$5;
  }
  function hide(element$$6) {
    element$$6 = $$$1(element$$6);
    var v1283 = element$$6.style;
    v1283.display = "none";
    return element$$6;
  }
  function show(element$$7) {
    element$$7 = $$$1(element$$7);
    var v1284 = element$$7.style;
    v1284.display = "";
    return element$$7;
  }
  function remove(element$$8) {
    element$$8 = $$$1(element$$8);
    var v1285 = element$$8.parentNode;
    JAM.call(v1285.removeChild, v1285, [element$$8], JAM.policy.p1);
    return element$$8;
  }
  function update$$2(element$$9, content) {
    element$$9 = $$$1(element$$9);
    var descendants$$1 = JAM.call(element$$9.getElementsByTagName, element$$9, ["*"], JAM.policy.p1);
    var i$$18 = descendants$$1.length;
    var v1287 = i$$18;
    i$$18 = i$$18 - 1;
    for (;v1287;) {
      var v1286 = descendants$$1[i$$18];
      purgeElement(v1286);
      v1287 = i$$18;
      i$$18 = i$$18 - 1;
    }
    var v2645 = content;
    if (v2645) {
      v2645 = content.toElement;
    }
    var v1288 = v2645;
    if (v1288) {
      content = JAM.call(content.toElement, content, [], JAM.policy.p1);
    }
    var v1290 = JAM.call(Object.isElement, Object, [content], JAM.policy.p1);
    if (v1290) {
      var v1289 = JAM.call(element$$9.update, element$$9, [], JAM.policy.p1);
      return JAM.call(v1289.insert, v1289, [content], JAM.policy.p1);
    }
    content = JAM.call(Object.toHTML, Object, [content], JAM.policy.p1);
    var v1291 = element$$9.tagName;
    var tagName$$3 = JAM.call(v1291.toUpperCase, v1291, [], JAM.policy.p1);
    var v2646 = tagName$$3 === "SCRIPT";
    if (v2646) {
      v2646 = SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING;
    }
    var v1292 = v2646;
    if (v1292) {
      element$$9.text = content;
      return element$$9;
    }
    if (ANY_INNERHTML_BUGGY) {
      var v2647 = INSERTION_TRANSLATIONS.tags;
      var v1303 = tagName$$3 in v2647;
      if (v1303) {
        var v1294 = element$$9.firstChild;
        for (;v1294;) {
          var v1293 = element$$9.firstChild;
          JAM.call(element$$9.removeChild, element$$9, [v1293], JAM.policy.p1);
          v1294 = element$$9.firstChild;
        }
        var v1295 = JAM.call(content.stripScripts, content, [], JAM.policy.p1);
        var nodes = getContentFromAnonymousElement(tagName$$3, v1295);
        i$$18 = 0;
        var node$$3;
        var v1296 = node$$3 = nodes[i$$18];
        for (;v1296;) {
          JAM.call(element$$9.appendChild, element$$9, [node$$3], JAM.policy.p1);
          i$$18 = i$$18 + 1;
          v1296 = node$$3 = nodes[i$$18];
        }
      } else {
        var v3380 = LINK_ELEMENT_INNERHTML_BUGGY;
        if (v3380) {
          v3380 = JAM.call(Object.isString, Object, [content], JAM.policy.p1);
        }
        var v2648 = v3380;
        if (v2648) {
          var v3381 = JAM.call(content.indexOf, content, ["<link"], JAM.policy.p1);
          v2648 = v3381 > -1;
        }
        var v1302 = v2648;
        if (v1302) {
          var v1298 = element$$9.firstChild;
          for (;v1298;) {
            var v1297 = element$$9.firstChild;
            JAM.call(element$$9.removeChild, element$$9, [v1297], JAM.policy.p1);
            v1298 = element$$9.firstChild;
          }
          var v1299 = JAM.call(content.stripScripts, content, [], JAM.policy.p1);
          nodes = getContentFromAnonymousElement(tagName$$3, v1299, true);
          i$$18 = 0;
          var v1300 = node$$3 = nodes[i$$18];
          for (;v1300;) {
            JAM.call(element$$9.appendChild, element$$9, [node$$3], JAM.policy.p1);
            i$$18 = i$$18 + 1;
            v1300 = node$$3 = nodes[i$$18];
          }
        } else {
          var v1301 = element$$9;
          var v3996 = JAM.call(content.stripScripts, content, [], JAM.policy.p1);
          JAM.set(v1301, "innerHTML", v3996);
        }
      }
    } else {
      var v1304 = element$$9;
      var v3997 = JAM.call(content.stripScripts, content, [], JAM.policy.p1);
      JAM.set(v1304, "innerHTML", v3997);
    }
    var v2649 = content.evalScripts;
    var v1305 = JAM.call(v2649.bind, v2649, [content], JAM.policy.p1);
    JAM.call(v1305.defer, v1305, [], JAM.policy.p1);
    return element$$9;
  }
  function replace(element$$10, content$$1) {
    element$$10 = $$$1(element$$10);
    var v2650 = content$$1;
    if (v2650) {
      v2650 = content$$1.toElement;
    }
    var v1310 = v2650;
    if (v1310) {
      content$$1 = JAM.call(content$$1.toElement, content$$1, [], JAM.policy.p1);
    } else {
      var v2651 = JAM.call(Object.isElement, Object, [content$$1], JAM.policy.p1);
      var v1309 = !v2651;
      if (v1309) {
        content$$1 = JAM.call(Object.toHTML, Object, [content$$1], JAM.policy.p1);
        var v1306 = element$$10.ownerDocument;
        var range$$5 = JAM.call(v1306.createRange, v1306, [], JAM.policy.p1);
        JAM.call(range$$5.selectNode, range$$5, [element$$10], JAM.policy.p1);
        var v2652 = content$$1.evalScripts;
        var v1307 = JAM.call(v2652.bind, v2652, [content$$1], JAM.policy.p1);
        JAM.call(v1307.defer, v1307, [], JAM.policy.p1);
        var v1308 = JAM.call(content$$1.stripScripts, content$$1, [], JAM.policy.p1);
        content$$1 = JAM.call(range$$5.createContextualFragment, range$$5, [v1308], JAM.policy.p1);
      }
    }
    var v1311 = element$$10.parentNode;
    JAM.call(v1311.replaceChild, v1311, [content$$1, element$$10], JAM.policy.p1);
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
    var v2653 = content$$2;
    if (v2653) {
      v2653 = content$$2.toElement;
    }
    var v1312 = v2653;
    if (v1312) {
      content$$2 = JAM.call(content$$2.toElement, content$$2, [], JAM.policy.p1);
    }
    var v1314 = JAM.call(Object.isElement, Object, [content$$2], JAM.policy.p1);
    if (v1314) {
      var v1313 = element$$11.parentNode;
      JAM.call(v1313.replaceChild, v1313, [content$$2, element$$11], JAM.policy.p1);
      return element$$11;
    }
    content$$2 = JAM.call(Object.toHTML, Object, [content$$2], JAM.policy.p1);
    var parent$$1 = element$$11.parentNode;
    var v1315 = parent$$1.tagName;
    var tagName$$4 = JAM.call(v1315.toUpperCase, v1315, [], JAM.policy.p1);
    var v2654 = INSERTION_TRANSLATIONS.tags;
    var v1318 = tagName$$4 in v2654;
    if (v1318) {
      var nextSibling = JAM.call(Element$$1.next, Element$$1, [element$$11], JAM.policy.p1);
      var v1316 = JAM.call(content$$2.stripScripts, content$$2, [], JAM.policy.p1);
      var fragments = getContentFromAnonymousElement(tagName$$4, v1316);
      JAM.call(parent$$1.removeChild, parent$$1, [element$$11], JAM.policy.p1);
      var iterator$$26;
      if (nextSibling) {
        iterator$$26 = v115;
      } else {
        iterator$$26 = v116;
      }
      JAM.call(fragments.each, fragments, [iterator$$26], JAM.policy.p1);
    } else {
      var v1317 = element$$11;
      var v3998 = JAM.call(content$$2.stripScripts, content$$2, [], JAM.policy.p1);
      JAM.set(v1317, "outerHTML", v3998);
    }
    var v2655 = content$$2.evalScripts;
    var v1319 = JAM.call(v2655.bind, v2655, [content$$2], JAM.policy.p1);
    JAM.call(v1319.defer, v1319, [], JAM.policy.p1);
    return element$$11;
  }
  function isContent(content$$3) {
    var v2656 = JAM.call(Object.isUndefined, Object, [content$$3], JAM.policy.p1);
    var v3382 = !v2656;
    if (v3382) {
      v2656 = content$$3 === null;
    }
    var v1320 = v2656;
    if (v1320) {
      return false;
    }
    var v2657 = JAM.call(Object.isString, Object, [content$$3], JAM.policy.p1);
    var v3383 = !v2657;
    if (v3383) {
      v2657 = JAM.call(Object.isNumber, Object, [content$$3], JAM.policy.p1);
    }
    var v1321 = v2657;
    if (v1321) {
      return true;
    }
    var v1322 = JAM.call(Object.isElement, Object, [content$$3], JAM.policy.p1);
    if (v1322) {
      return true;
    }
    var v2658 = content$$3.toElement;
    var v3384 = !v2658;
    if (v3384) {
      v2658 = content$$3.toHTML;
    }
    var v1323 = v2658;
    if (v1323) {
      return true;
    }
    return false;
  }
  function insert(element$$13, insertions) {
    element$$13 = $$$1(element$$13);
    var v1324 = isContent(insertions);
    if (v1324) {
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
        var v2659 = content$$inline_9;
        if (v2659) {
          v2659 = content$$inline_9.toElement;
        }
        var v1325 = v2659;
        if (v1325) {
          content$$inline_9 = JAM.call(content$$inline_9.toElement, content$$inline_9, [], JAM.policy.p1);
        }
        var v1326 = JAM.call(Object.isElement, Object, [content$$inline_9], JAM.policy.p1);
        if (v1326) {
          JAM.call(method$$inline_11, null, [element$$inline_8, content$$inline_9], JAM.policy.p1);
          break JSCompiler_inline_label_insertContentAt_16;
        }
        content$$inline_9 = JAM.call(Object.toHTML, Object, [content$$inline_9], JAM.policy.p1);
        var v3385;
        var v3860 = position$$inline_10 === "before";
        var v3911 = !v3860;
        if (v3911) {
          v3860 = position$$inline_10 === "after";
        }
        var v3729 = v3860;
        if (v3729) {
          v3385 = element$$inline_8.parentNode;
        } else {
          v3385 = element$$inline_8;
        }
        var v2660 = v3385;
        var v1327 = v2660.tagName;
        var tagName$$inline_12 = JAM.call(v1327.toUpperCase, v1327, [], JAM.policy.p1);
        var v1328 = JAM.call(content$$inline_9.stripScripts, content$$inline_9, [], JAM.policy.p1);
        var childNodes$$inline_13 = getContentFromAnonymousElement(tagName$$inline_12, v1328);
        var v2661 = position$$inline_10 === "top";
        var v3386 = !v2661;
        if (v3386) {
          v2661 = position$$inline_10 === "after";
        }
        var v1329 = v2661;
        if (v1329) {
          JAM.call(childNodes$$inline_13.reverse, childNodes$$inline_13, [], JAM.policy.p1);
        }
        var i$$inline_14 = 0;
        var node$$inline_15 = void 0;
        var v1330 = node$$inline_15 = childNodes$$inline_13[i$$inline_14];
        for (;v1330;) {
          JAM.call(method$$inline_11, null, [element$$inline_8, node$$inline_15], JAM.policy.p1);
          i$$inline_14 = i$$inline_14 + 1;
          v1330 = node$$inline_15 = childNodes$$inline_13[i$$inline_14];
        }
        var v2662 = content$$inline_9.evalScripts;
        var v1331 = JAM.call(v2662.bind, v2662, [content$$inline_9], JAM.policy.p1);
        JAM.call(v1331.defer, v1331, [], JAM.policy.p1);
      }
    }
    return element$$13;
  }
  function wrap$$1(element$$14, wrapper$$1, attributes$$2) {
    element$$14 = $$$1(element$$14);
    var v1335 = JAM.call(Object.isElement, Object, [wrapper$$1], JAM.policy.p1);
    if (v1335) {
      var v1332 = $$$1(wrapper$$1);
      var v1333 = attributes$$2 || {};
      JAM.call(v1332.writeAttribute, v1332, [v1333], JAM.policy.p1);
    } else {
      var v1334 = JAM.call(Object.isString, Object, [wrapper$$1], JAM.policy.p1);
      if (v1334) {
        wrapper$$1 = new Element$$1(wrapper$$1, attributes$$2);
      } else {
        wrapper$$1 = new Element$$1("div", wrapper$$1);
      }
    }
    var v1337 = element$$14.parentNode;
    if (v1337) {
      var v1336 = element$$14.parentNode;
      JAM.call(v1336.replaceChild, v1336, [wrapper$$1, element$$14], JAM.policy.p1);
    }
    JAM.call(wrapper$$1.appendChild, wrapper$$1, [element$$14], JAM.policy.p1);
    return wrapper$$1;
  }
  function cleanWhitespace(element$$15) {
    element$$15 = $$$1(element$$15);
    var node$$7 = element$$15.firstChild;
    for (;node$$7;) {
      var nextNode = node$$7.nextSibling;
      var v3387 = node$$7.nodeType;
      var v3388 = Node.TEXT_NODE;
      var v2663 = v3387 === v3388;
      if (v2663) {
        var v3730 = node$$7.nodeValue;
        var v3389 = JAM.call(/\S/.test, /\S/, [v3730], JAM.policy.p1);
        v2663 = !v3389;
      }
      var v1338 = v2663;
      if (v1338) {
        JAM.call(element$$15.removeChild, element$$15, [node$$7], JAM.policy.p1);
      }
      node$$7 = nextNode;
    }
    return element$$15;
  }
  function empty$$1(element$$16) {
    var v2664 = $$$1(element$$16);
    var v1339 = v2664.innerHTML;
    return JAM.call(v1339.blank, v1339, [], JAM.policy.p1);
  }
  function getContentFromAnonymousElement(tagName$$6, html, force) {
    var v1340 = INSERTION_TRANSLATIONS.tags;
    var t = v1340[tagName$$6];
    var div$$1 = DIV;
    var v1341 = !t;
    var workaround = !v1341;
    var v2665 = !workaround;
    if (v2665) {
      v2665 = force;
    }
    var v1342 = v2665;
    if (v1342) {
      workaround = true;
      t = ["", "", 0];
    }
    if (workaround) {
      var v3390 = t[0];
      var v2666 = "&#160;" + v3390;
      var v1343 = v2666 + html;
      var v1344 = t[1];
      JAM.set(div$$1, "innerHTML", v1343 + v1344);
      var v1345 = div$$1.firstChild;
      JAM.call(div$$1.removeChild, div$$1, [v1345], JAM.policy.p1);
      var i$$20 = t[2];
      var v1346 = i$$20;
      i$$20 = i$$20 - 1;
      for (;v1346;) {
        div$$1 = div$$1.firstChild;
        v1346 = i$$20;
        i$$20 = i$$20 - 1;
      }
    } else {
      JAM.set(div$$1, "innerHTML", html);
    }
    var v1347 = div$$1.childNodes;
    return $A(v1347);
  }
  function clone$$3(element$$17, deep$$2) {
    var v2667 = element$$17 = $$$1(element$$17);
    var v1348 = !v2667;
    if (v1348) {
      return;
    }
    var clone$$4 = JAM.call(element$$17.cloneNode, element$$17, [deep$$2], JAM.policy.p1);
    var v1351 = !HAS_UNIQUE_ID_PROPERTY;
    if (v1351) {
      clone$$4._prototypeUID = UNDEFINED;
      if (deep$$2) {
        var descendants$$2 = JAM.call(Element$$1.select, Element$$1, [clone$$4, "*"], JAM.policy.p1);
        var i$$21 = descendants$$2.length;
        var v1350 = i$$21;
        i$$21 = i$$21 - 1;
        for (;v1350;) {
          var v1349 = descendants$$2[i$$21];
          v1349._prototypeUID = UNDEFINED;
          v1350 = i$$21;
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
      var v1352 = !HAS_UNIQUE_ID_PROPERTY;
      if (v1352) {
        element$$18._prototypeUID = UNDEFINED;
      }
      var v1353 = Element$$1.Storage;
      delete v1353[uid];
    }
    return;
  }
  function purgeCollection(elements$$1) {
    var i$$22 = elements$$1.length;
    var v1355 = i$$22;
    i$$22 = i$$22 - 1;
    for (;v1355;) {
      var v1354 = elements$$1[i$$22];
      purgeElement(v1354);
      v1355 = i$$22;
      i$$22 = i$$22 - 1;
    }
    return;
  }
  function purgeCollection_IE(elements$$2) {
    var i$$23 = elements$$2.length;
    var element$$19;
    var uid$$1;
    var v1358 = i$$23;
    i$$23 = i$$23 - 1;
    for (;v1358;) {
      element$$19 = elements$$2[i$$23];
      uid$$1 = JAM.call(getUniqueElementID, null, [element$$19], JAM.policy.p1);
      var v1356 = Element$$1.Storage;
      delete v1356[uid$$1];
      var v1357 = Event.cache;
      delete v1357[uid$$1];
      v1358 = i$$23;
      i$$23 = i$$23 - 1;
    }
    return;
  }
  function purge(element$$20) {
    var v2668 = element$$20 = $$$1(element$$20);
    var v1359 = !v2668;
    if (v1359) {
      return;
    }
    purgeElement(element$$20);
    var descendants$$3 = JAM.call(element$$20.getElementsByTagName, element$$20, ["*"], JAM.policy.p1);
    var i$$24 = descendants$$3.length;
    var v1361 = i$$24;
    i$$24 = i$$24 - 1;
    for (;v1361;) {
      var v1360 = descendants$$3[i$$24];
      purgeElement(v1360);
      v1361 = i$$24;
      i$$24 = i$$24 - 1;
    }
    return null;
  }
  function recursivelyCollect(element$$21, property$$6, maximumLength) {
    element$$21 = $$$1(element$$21);
    maximumLength = maximumLength || -1;
    var elements$$3 = [];
    var v1365 = element$$21 = element$$21[property$$6];
    for (;v1365;) {
      var v2669 = element$$21.nodeType;
      var v2670 = Node.ELEMENT_NODE;
      var v1363 = v2669 === v2670;
      if (v1363) {
        var v1362 = JAM.call(Element$$1.extend, Element$$1, [element$$21]);
        JAM.call(elements$$3.push, elements$$3, [v1362], JAM.policy.p1);
      }
      var v2671 = elements$$3.length;
      var v1364 = v2671 === maximumLength;
      if (v1364) {
        break;
      }
      v1365 = element$$21 = element$$21[property$$6];
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
    var v1366 = $$$1(element$$24);
    element$$24 = v1366.firstChild;
    var v2672 = element$$24;
    if (v2672) {
      var v3391 = element$$24.nodeType;
      var v3392 = Node.ELEMENT_NODE;
      v2672 = v3391 !== v3392;
    }
    var v1367 = v2672;
    for (;v1367;) {
      element$$24 = element$$24.nextSibling;
      var v2673 = element$$24;
      if (v2673) {
        var v3393 = element$$24.nodeType;
        var v3394 = Node.ELEMENT_NODE;
        v2673 = v3393 !== v3394;
      }
      v1367 = v2673;
    }
    return $$$1(element$$24);
  }
  function immediateDescendants(element$$25) {
    var results$$11 = [];
    var v1368 = $$$1(element$$25);
    var child$$1 = v1368.firstChild;
    for (;child$$1;) {
      var v2674 = child$$1.nodeType;
      var v2675 = Node.ELEMENT_NODE;
      var v1370 = v2674 === v2675;
      if (v1370) {
        var v1369 = JAM.call(Element$$1.extend, Element$$1, [child$$1]);
        JAM.call(results$$11.push, results$$11, [v1369], JAM.policy.p1);
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
    var v1371 = JAM.call(previous$$1.reverse, previous$$1, [], JAM.policy.p1);
    return JAM.call(v1371.concat, v1371, [next$$1], JAM.policy.p1);
  }
  function match$$7(element$$29, selector) {
    element$$29 = $$$1(element$$29);
    var v1373 = JAM.call(Object.isString, Object, [selector], JAM.policy.p1);
    if (v1373) {
      var v1372 = Prototype.Selector;
      return JAM.call(v1372.match, v1372, [element$$29, selector], JAM.policy.p1);
    }
    return JAM.call(selector.match, selector, [element$$29], JAM.policy.p1);
  }
  function _recursivelyFind(element$$30, property$$7, expression, index$$55) {
    element$$30 = $$$1(element$$30);
    expression = expression || 0;
    index$$55 = index$$55 || 0;
    var v1374 = JAM.call(Object.isNumber, Object, [expression], JAM.policy.p1);
    if (v1374) {
      index$$55 = expression;
      expression = null;
    }
    var v1378 = element$$30 = element$$30[property$$7];
    for (;v1378;) {
      var v2676 = element$$30.nodeType;
      var v1375 = v2676 !== 1;
      if (v1375) {
        v1378 = element$$30 = element$$30[property$$7];
        continue;
      }
      var v2677 = expression;
      if (v2677) {
        var v3731 = Prototype.Selector;
        var v3395 = JAM.call(v3731.match, v3731, [element$$30, expression], JAM.policy.p1);
        v2677 = !v3395;
      }
      var v1376 = v2677;
      if (v1376) {
        v1378 = element$$30 = element$$30[property$$7];
        continue;
      }
      var v2678 = index$$55 = index$$55 - 1;
      var v1377 = v2678 >= 0;
      if (v1377) {
        v1378 = element$$30 = element$$30[property$$7];
        continue;
      }
      return JAM.call(Element$$1.extend, Element$$1, [element$$30]);
    }
    return;
  }
  function up(element$$31, expression$$1, index$$56) {
    element$$31 = $$$1(element$$31);
    var v2679 = arguments.length;
    var v1380 = v2679 === 1;
    if (v1380) {
      var v1379 = element$$31.parentNode;
      return $$$1(v1379);
    }
    return _recursivelyFind(element$$31, "parentNode", expression$$1, index$$56);
  }
  function down(element$$32, expression$$2, index$$57) {
    element$$32 = $$$1(element$$32);
    expression$$2 = expression$$2 || 0;
    index$$57 = index$$57 || 0;
    var v1381 = JAM.call(Object.isNumber, Object, [expression$$2], JAM.policy.p1);
    if (v1381) {
      index$$57 = expression$$2;
      expression$$2 = "*";
    }
    var v2680 = Prototype.Selector;
    var v1382 = JAM.call(v2680.select, v2680, [expression$$2, element$$32], JAM.policy.p1);
    var node$$8 = v1382[index$$57];
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
    var v1383 = JAM.call(SLICE.call, SLICE, [arguments, 1], JAM.policy.p1);
    var expressions = JAM.call(v1383.join, v1383, [", "], JAM.policy.p1);
    var v1384 = Prototype.Selector;
    return JAM.call(v1384.select, v1384, [expressions, element$$35], JAM.policy.p1);
  }
  function adjacent(element$$36) {
    element$$36 = $$$1(element$$36);
    var v1385 = JAM.call(SLICE.call, SLICE, [arguments, 1], JAM.policy.p1);
    var expressions$$1 = JAM.call(v1385.join, v1385, [", "], JAM.policy.p1);
    var siblings$$1 = JAM.call(Element$$1.siblings, Element$$1, [element$$36], JAM.policy.p1);
    var results$$12 = [];
    var i$$25 = 0;
    var sibling;
    var v1387 = sibling = siblings$$1[i$$25];
    for (;v1387;) {
      var v2681 = Prototype.Selector;
      var v1386 = JAM.call(v2681.match, v2681, [sibling, expressions$$1], JAM.policy.p1);
      if (v1386) {
        JAM.call(results$$12.push, results$$12, [sibling], JAM.policy.p1);
      }
      i$$25 = i$$25 + 1;
      v1387 = sibling = siblings$$1[i$$25];
    }
    return results$$12;
  }
  function descendantOf_DOM(element$$37, ancestor$$1) {
    element$$37 = $$$1(element$$37);
    ancestor$$1 = $$$1(ancestor$$1);
    var v1389 = element$$37 = element$$37.parentNode;
    for (;v1389;) {
      var v1388 = element$$37 === ancestor$$1;
      if (v1388) {
        return true;
      }
      v1389 = element$$37 = element$$37.parentNode;
    }
    return false;
  }
  function descendantOf_contains(element$$38, ancestor$$2) {
    element$$38 = $$$1(element$$38);
    ancestor$$2 = $$$1(ancestor$$2);
    var v2682 = ancestor$$2.contains;
    var v1390 = !v2682;
    if (v1390) {
      return descendantOf_DOM(element$$38, ancestor$$2);
    }
    var v1391 = JAM.call(ancestor$$2.contains, ancestor$$2, [element$$38], JAM.policy.p1);
    if (v1391) {
      v1391 = ancestor$$2 !== element$$38;
    }
    return v1391;
  }
  function descendantOf_compareDocumentPosition(element$$39, ancestor$$3) {
    element$$39 = $$$1(element$$39);
    ancestor$$3 = $$$1(ancestor$$3);
    var v2683 = JAM.call(element$$39.compareDocumentPosition, element$$39, [ancestor$$3], JAM.policy.p1);
    var v1392 = v2683 & 8;
    return v1392 === 8;
  }
  function identify(element$$40) {
    element$$40 = $$$1(element$$40);
    var id = JAM.call(Element$$1.readAttribute, Element$$1, [element$$40, "id"], JAM.policy.p1);
    if (id) {
      return id;
    }
    var v1394 = $$$1(id);
    do {
      var v1393 = idCounter;
      idCounter = idCounter + 1;
      id = "anonymous_element_" + v1393;
      v1394 = $$$1(id);
    } while (v1394);
    JAM.call(Element$$1.writeAttribute, Element$$1, [element$$40, "id", id], JAM.policy.p1);
    return id;
  }
  function readAttribute(element$$41, name$$33) {
    var v1395 = $$$1(element$$41);
    return JAM.call(v1395.getAttribute, v1395, [name$$33], JAM.policy.p1);
  }
  function readAttribute_IE(element$$42, name$$34) {
    element$$42 = $$$1(element$$42);
    var table = ATTRIBUTE_TRANSLATIONS.read;
    var v2684 = table.values;
    var v1397 = v2684[name$$34];
    if (v1397) {
      var v1396 = table.values;
      return JAM.call(v1396[name$$34], v1396, [element$$42, name$$34], JAM.policy.p1);
    }
    var v2685 = table.names;
    var v1399 = v2685[name$$34];
    if (v1399) {
      var v1398 = table.names;
      name$$34 = v1398[name$$34];
    }
    var v1402 = JAM.call(name$$34.include, name$$34, [":"], JAM.policy.p1);
    if (v1402) {
      var v3396 = element$$42.attributes;
      var v2686 = !v3396;
      var v3398 = !v2686;
      if (v3398) {
        var v3732 = element$$42.attributes;
        var v3397 = v3732[name$$34];
        v2686 = !v3397;
      }
      var v1400 = v2686;
      if (v1400) {
        return null;
      }
      var v2687 = element$$42.attributes;
      var v1401 = v2687[name$$34];
      return v1401.value;
    }
    return JAM.call(element$$42.getAttribute, element$$42, [name$$34], JAM.policy.p1);
  }
  function readAttribute_Opera(element$$43, name$$35) {
    var v1403 = name$$35 === "title";
    if (v1403) {
      return element$$43.title;
    }
    return JAM.call(element$$43.getAttribute, element$$43, [name$$35], JAM.policy.p1);
  }
  function writeAttribute(element$$44, name$$36, value$$62) {
    element$$44 = $$$1(element$$44);
    var attributes$$3 = {};
    var table$$1 = ATTRIBUTE_TRANSLATIONS.write;
    var v2688 = typeof name$$36;
    var v1406 = v2688 === "object";
    if (v1406) {
      attributes$$3 = name$$36;
    } else {
      var v1404 = attributes$$3;
      var v1405 = name$$36;
      var v2689;
      var v3399 = JAM.call(Object.isUndefined, Object, [value$$62], JAM.policy.p1);
      if (v3399) {
        v2689 = true;
      } else {
        v2689 = value$$62;
      }
      JAM.set(v1404, v1405, v2689, JAM.policy.p2);
    }
    var attr$$1;
    for (attr$$1 in attributes$$3) {
      var v2690 = table$$1.names;
      var v1407 = v2690[attr$$1];
      var v2691 = !v1407;
      if (v2691) {
        v1407 = attr$$1;
      }
      name$$36 = v1407;
      value$$62 = attributes$$3[attr$$1];
      var v2692 = table$$1.values;
      var v1409 = v2692[attr$$1];
      if (v1409) {
        var v1408 = table$$1.values;
        name$$36 = JAM.call(v1408[attr$$1], v1408, [element$$44, value$$62], JAM.policy.p1);
      }
      var v2693 = value$$62 === false;
      var v3400 = !v2693;
      if (v3400) {
        v2693 = value$$62 === null;
      }
      var v1411 = v2693;
      if (v1411) {
        JAM.call(element$$44.removeAttribute, element$$44, [name$$36], JAM.policy.p1);
      } else {
        var v1410 = value$$62 === true;
        if (v1410) {
          JAM.call(element$$44.setAttribute, element$$44, [name$$36, name$$36], JAM.policy.p1);
        } else {
          JAM.call(element$$44.setAttribute, element$$44, [name$$36, value$$62], JAM.policy.p1);
        }
      }
    }
    return element$$44;
  }
  function hasAttribute(element$$45, attribute$$1) {
    var v2694 = ATTRIBUTE_TRANSLATIONS.has;
    var v1412 = v2694[attribute$$1];
    var v2695 = !v1412;
    if (v2695) {
      v1412 = attribute$$1;
    }
    attribute$$1 = v1412;
    var v1413 = $$$1(element$$45);
    var node$$9 = JAM.call(v1413.getAttributeNode, v1413, [attribute$$1], JAM.policy.p1);
    var v3401 = node$$9;
    if (v3401) {
      v3401 = node$$9.specified;
    }
    var v2696 = v3401;
    var v1414 = !v2696;
    return!v1414;
  }
  function classNames$$1(element$$46) {
    var v1415 = Element$$1.ClassNames;
    return JAM.new(v1415, [element$$46]);
  }
  function getRegExpForClassName(className) {
    var v1416 = regExpCache[className];
    if (v1416) {
      return regExpCache[className];
    }
    var v2697 = "(^|\\s+)" + className;
    var v1417 = v2697 + "(\\s+|$)";
    var re = new RegExp(v1417);
    JAM.set(regExpCache, className, re, JAM.policy.p2);
    return re;
  }
  function hasClassName(element$$47, className$$1) {
    var v2698 = element$$47 = $$$1(element$$47);
    var v1418 = !v2698;
    if (v1418) {
      return;
    }
    var elementClassName = element$$47.className;
    var v2699 = elementClassName.length;
    var v1419 = v2699 === 0;
    if (v1419) {
      return false;
    }
    var v1420 = elementClassName === className$$1;
    if (v1420) {
      return true;
    }
    var v1421 = getRegExpForClassName(className$$1);
    return JAM.call(v1421.test, v1421, [elementClassName], JAM.policy.p1);
  }
  function addClassName(element$$48, className$$2) {
    var v2700 = element$$48 = $$$1(element$$48);
    var v1422 = !v2700;
    if (v1422) {
      return;
    }
    var v2701 = hasClassName(element$$48, className$$2);
    var v1423 = !v2701;
    if (v1423) {
      var v2702 = element$$48.className;
      var v3733;
      var v3861 = element$$48.className;
      if (v3861) {
        v3733 = " ";
      } else {
        v3733 = "";
      }
      var v3402 = v3733;
      var v2703 = v3402 + className$$2;
      element$$48.className = v2702 + v2703;
    }
    return element$$48;
  }
  function removeClassName(element$$49, className$$3) {
    var v2704 = element$$49 = $$$1(element$$49);
    var v1424 = !v2704;
    if (v1424) {
      return;
    }
    var v1425 = element$$49;
    var v3403 = element$$49.className;
    var v3404 = getRegExpForClassName(className$$3);
    var v2705 = JAM.call(v3403.replace, v3403, [v3404, " "], JAM.policy.p1);
    var v3999 = JAM.call(v2705.strip, v2705, [], JAM.policy.p1);
    v1425.className = v3999;
    return element$$49;
  }
  function toggleClassName(element$$50, className$$4, bool$$1) {
    var v2706 = element$$50 = $$$1(element$$50);
    var v1426 = !v2706;
    if (v1426) {
      return;
    }
    var v1428 = JAM.call(Object.isUndefined, Object, [bool$$1], JAM.policy.p1);
    if (v1428) {
      var v1427 = hasClassName(element$$50, className$$4);
      bool$$1 = !v1427;
    }
    var v2707;
    if (bool$$1) {
      v2707 = "addClassName";
    } else {
      v2707 = "removeClassName";
    }
    var v1429 = v2707;
    var method$$7 = Element$$1[v1429];
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
    var v1430;
    if (node$$10) {
      v1430 = node$$10.value;
    } else {
      v1430 = "";
    }
    return v1430;
  }
  function _getFlag(element$$54, attribute$$5) {
    var v1431;
    var v3405 = $$$1(element$$54);
    var v2708 = JAM.call(v3405.hasAttribute, v3405, [attribute$$5], JAM.policy.p1);
    if (v2708) {
      v1431 = attribute$$5;
    } else {
      v1431 = null;
    }
    return v1431;
  }
  function setStyle(element$$55, styles) {
    element$$55 = $$$1(element$$55);
    var elementStyle = element$$55.style;
    var match$$8;
    var v1434 = JAM.call(Object.isString, Object, [styles], JAM.policy.p1);
    if (v1434) {
      var v2709 = elementStyle.cssText;
      var v2710 = ";" + styles;
      elementStyle.cssText = v2709 + v2710;
      var v1433 = JAM.call(styles.include, styles, ["opacity"], JAM.policy.p1);
      if (v1433) {
        var v1432 = JAM.call(styles.match, styles, [/opacity:\s*(\d?\.?\d*)/], JAM.policy.p1);
        var opacity = v1432[1];
        JAM.call(Element$$1.setOpacity, Element$$1, [element$$55, opacity]);
      }
      return element$$55;
    }
    var property$$8;
    for (property$$8 in styles) {
      var v1438 = property$$8 === "opacity";
      if (v1438) {
        var v1435 = styles[property$$8];
        JAM.call(Element$$1.setOpacity, Element$$1, [element$$55, v1435]);
      } else {
        var value$$63 = styles[property$$8];
        var v2711 = property$$8 === "float";
        var v3406 = !v2711;
        if (v3406) {
          v2711 = property$$8 === "cssFloat";
        }
        var v1437 = v2711;
        if (v1437) {
          var v1436;
          var v3407 = elementStyle.styleFloat;
          var v2712 = JAM.call(Object.isUndefined, Object, [v3407], JAM.policy.p1);
          if (v2712) {
            v1436 = "cssFloat";
          } else {
            v1436 = "styleFloat";
          }
          property$$8 = v1436;
        }
        JAM.set(elementStyle, property$$8, value$$63, JAM.policy.p2);
      }
    }
    return element$$55;
  }
  function getStyle(element$$56, style$$2) {
    element$$56 = $$$1(element$$56);
    JSCompiler_inline_label_normalizeStyleName_18: {
      var v2713 = style$$2 === "float";
      var v3408 = !v2713;
      if (v3408) {
        v2713 = style$$2 === "styleFloat";
      }
      var v1439 = v2713;
      if (v1439) {
        style$$2 = "cssFloat";
        break JSCompiler_inline_label_normalizeStyleName_18;
      }
      style$$2 = JAM.call(style$$2.camelize, style$$2, [], JAM.policy.p1);
    }
    var v1440 = element$$56.style;
    var value$$64 = v1440[style$$2];
    var v2714 = !value$$64;
    var v3409 = !v2714;
    if (v3409) {
      v2714 = value$$64 === "auto";
    }
    var v1443 = v2714;
    if (v1443) {
      var v1441 = document.defaultView;
      var css = JAM.call(v1441.getComputedStyle, v1441, [element$$56, null], JAM.policy.p1);
      var v1442;
      if (css) {
        v1442 = css[style$$2];
      } else {
        v1442 = null;
      }
      value$$64 = v1442;
    }
    var v1445 = style$$2 === "opacity";
    if (v1445) {
      var v1444;
      if (value$$64) {
        v1444 = parseFloat(value$$64);
      } else {
        v1444 = 1;
      }
      return v1444;
    }
    var v1446;
    var v2715 = value$$64 === "auto";
    if (v2715) {
      v1446 = null;
    } else {
      v1446 = value$$64;
    }
    return v1446;
  }
  function getStyle_IE(element$$58, style$$4) {
    element$$58 = $$$1(element$$58);
    JSCompiler_inline_label_normalizeStyleName_IE_20: {
      var v2716 = style$$4 === "float";
      var v3410 = !v2716;
      if (v3410) {
        v2716 = style$$4 === "cssFloat";
      }
      var v1447 = v2716;
      if (v1447) {
        style$$4 = "styleFloat";
        break JSCompiler_inline_label_normalizeStyleName_IE_20;
      }
      style$$4 = JAM.call(style$$4.camelize, style$$4, [], JAM.policy.p1);
    }
    var v1448 = element$$58.style;
    var value$$65 = v1448[style$$4];
    var v2717 = !value$$65;
    if (v2717) {
      v2717 = element$$58.currentStyle;
    }
    var v1450 = v2717;
    if (v1450) {
      var v1449 = element$$58.currentStyle;
      value$$65 = v1449[style$$4];
    }
    var v2718 = style$$4 === "opacity";
    if (v2718) {
      v2718 = !STANDARD_CSS_OPACITY_SUPPORTED;
    }
    var v1451 = v2718;
    if (v1451) {
      return getOpacity_IE(element$$58);
    }
    var v1454 = value$$65 === "auto";
    if (v1454) {
      var v3411 = style$$4 === "width";
      var v3734 = !v3411;
      if (v3734) {
        v3411 = style$$4 === "height";
      }
      var v2719 = v3411;
      if (v2719) {
        v2719 = JAM.call(Element$$1.visible, Element$$1, [element$$58], JAM.policy.p1);
      }
      var v1453 = v2719;
      if (v1453) {
        var v1452 = JAM.call(Element$$1.measure, Element$$1, [element$$58, style$$4], JAM.policy.p1);
        return v1452 + "px";
      }
      return null;
    }
    return value$$65;
  }
  function setOpacity(element$$60, value$$66) {
    element$$60 = $$$1(element$$60);
    var v2720 = value$$66 == 1;
    var v3412 = !v2720;
    if (v3412) {
      v2720 = value$$66 === "";
    }
    var v1456 = v2720;
    if (v1456) {
      value$$66 = "";
    } else {
      var v1455 = value$$66 < 1E-5;
      if (v1455) {
        value$$66 = 0;
      }
    }
    var v1457 = element$$60.style;
    v1457.opacity = value$$66;
    return element$$60;
  }
  function setOpacity_IE(element$$61, value$$67) {
    if (STANDARD_CSS_OPACITY_SUPPORTED) {
      return setOpacity(element$$61, value$$67);
    }
    var element$$inline_21 = $$$1(element$$61);
    var v3413 = element$$inline_21.currentStyle;
    var v2721 = v3413.hasLayout;
    var v1459 = !v2721;
    if (v1459) {
      var v1458 = element$$inline_21.style;
      v1458.zoom = 1;
    }
    element$$61 = element$$inline_21;
    var filter$$4 = JAM.call(Element$$1.getStyle, Element$$1, [element$$61, "filter"], JAM.policy.p1);
    var style$$5 = element$$61.style;
    var v2722 = value$$67 == 1;
    var v3414 = !v2722;
    if (v3414) {
      v2722 = value$$67 === "";
    }
    var v1461 = v2722;
    if (v1461) {
      var v1460 = filter$$4 || "";
      filter$$4 = JAM.call(v1460.replace, v1460, [/alpha\([^\)]*\)/gi, ""], JAM.policy.p1);
      if (filter$$4) {
        style$$5.filter = filter$$4;
      } else {
        JAM.call(style$$5.removeAttribute, style$$5, ["filter"], JAM.policy.p1);
      }
      return element$$61;
    }
    var v1462 = value$$67 < 1E-5;
    if (v1462) {
      value$$67 = 0;
    }
    var v1463 = style$$5;
    var v3862 = filter$$4 || "";
    var v3735 = JAM.call(v3862.replace, v3862, [/alpha\([^\)]*\)/gi, ""], JAM.policy.p1);
    var v3415 = v3735 + "alpha(opacity=";
    var v3416 = value$$67 * 100;
    var v2723 = v3415 + v3416;
    v1463.filter = v2723 + ")";
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
    var v2724 = filter$$5.length;
    var v1464 = v2724 === 0;
    if (v1464) {
      return 1;
    }
    var v1465 = filter$$5 || "";
    var match$$9 = JAM.call(v1465.match, v1465, [/alpha\(opacity=(.*)\)/], JAM.policy.p1);
    var v1467 = match$$9[1];
    if (v1467) {
      var v2725 = match$$9[1];
      var v1466 = parseFloat(v2725);
      return v1466 / 100;
    }
    return 1;
  }
  function getUniqueElementID(element$$64) {
    var v1468 = element$$64 === window;
    if (v1468) {
      return 0;
    }
    var v3417 = element$$64._prototypeUID;
    var v2726 = typeof v3417;
    var v1469 = v2726 === "undefined";
    if (v1469) {
      var v2727 = Element$$1.Storage;
      element$$64._prototypeUID = v2727.UID;
      var v2728 = Element$$1.Storage;
      var v3736 = Element$$1.Storage;
      var v3418 = v3736.UID;
      v2728.UID = v3418 + 1;
    }
    return element$$64._prototypeUID;
  }
  function getUniqueElementID_IE(element$$65) {
    var v1470 = element$$65 === window;
    if (v1470) {
      return 0;
    }
    var v1471 = element$$65 == document;
    if (v1471) {
      return 1;
    }
    return element$$65.uniqueID;
  }
  function getStorage(element$$66) {
    var v2729 = element$$66 = $$$1(element$$66);
    var v1472 = !v2729;
    if (v1472) {
      return;
    }
    var uid$$2 = JAM.call(getUniqueElementID, null, [element$$66], JAM.policy.p1);
    var v3419 = Element$$1.Storage;
    var v2730 = v3419[uid$$2];
    var v1475 = !v2730;
    if (v1475) {
      var v1473 = Element$$1.Storage;
      var v1474 = uid$$2;
      var v4000 = $H();
      JAM.set(v1473, v1474, v4000, JAM.policy.p2);
    }
    var v1476 = Element$$1.Storage;
    return v1476[uid$$2];
  }
  function store(element$$67, key$$22, value$$68) {
    var v2731 = element$$67 = $$$1(element$$67);
    var v1477 = !v2731;
    if (v1477) {
      return;
    }
    var storage = getStorage(element$$67);
    var v2732 = arguments.length;
    var v1478 = v2732 === 2;
    if (v1478) {
      JAM.call(storage.update, storage, [key$$22], JAM.policy.p1);
    } else {
      JAM.call(storage.set, storage, [key$$22, value$$68], JAM.policy.p1);
    }
    return element$$67;
  }
  function retrieve(element$$68, key$$23, defaultValue) {
    var v2733 = element$$68 = $$$1(element$$68);
    var v1479 = !v2733;
    if (v1479) {
      return;
    }
    var storage$$1 = getStorage(element$$68);
    var value$$69 = JAM.call(storage$$1.get, storage$$1, [key$$23], JAM.policy.p1);
    var v1480 = JAM.call(Object.isUndefined, Object, [value$$69], JAM.policy.p1);
    if (v1480) {
      JAM.call(storage$$1.set, storage$$1, [key$$23, defaultValue], JAM.policy.p1);
      value$$69 = defaultValue;
    }
    return value$$69;
  }
  function checkElementPrototypeDeficiency(tagName$$7) {
    var v3420 = window.Element;
    var v2734 = typeof v3420;
    var v1481 = v2734 === "undefined";
    if (v1481) {
      return false;
    }
    var v1482 = window.Element;
    var proto$$2 = v1482.prototype;
    if (proto$$2) {
      var v3421 = JAM.call(Math.random, Math, [], JAM.policy.p1);
      var v2735 = v3421 + "";
      var v1483 = JAM.call(v2735.slice, v2735, [2], JAM.policy.p1);
      var id$$1 = "_" + v1483;
      var el = JAM.call(document.createElement, document, [tagName$$7], JAM.policy.p1);
      JAM.set(proto$$2, id$$1, "x", JAM.policy.p2);
      var v1484 = el[id$$1];
      var isBuggy = v1484 !== "x";
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
      var v2736 = JAM.call(Object.isFunction, Object, [value$$70], JAM.policy.p1);
      if (v2736) {
        var v3422 = property$$9 in element$$69;
        v2736 = !v3422;
      }
      var v1487 = v2736;
      if (v1487) {
        var v1485 = element$$69;
        var v1486 = property$$9;
        var v4001 = JAM.call(value$$70.methodize, value$$70, [], JAM.policy.p1);
        JAM.set(v1485, v1486, v4001, JAM.policy.p2);
      }
    }
    return;
  }
  function elementIsExtended(element$$70) {
    var uid$$3 = JAM.call(getUniqueElementID, null, [element$$70], JAM.policy.p1);
    return uid$$3 in EXTENDED;
  }
  function extend$$1(element$$71) {
    var v2737 = !element$$71;
    var v3423 = !v2737;
    if (v3423) {
      v2737 = elementIsExtended(element$$71);
    }
    var v1488 = v2737;
    if (v1488) {
      return element$$71;
    }
    var v3424 = element$$71.nodeType;
    var v3425 = Node.ELEMENT_NODE;
    var v2738 = v3424 !== v3425;
    var v3426 = !v2738;
    if (v3426) {
      v2738 = element$$71 == window;
    }
    var v1489 = v2738;
    if (v1489) {
      return element$$71;
    }
    var methods$$3 = JAM.call(Object.clone, Object, [Methods], JAM.policy.p1);
    var v1490 = element$$71.tagName;
    var tagName$$8 = JAM.call(v1490.toUpperCase, v1490, [], JAM.policy.p1);
    var v1492 = ByTag[tagName$$8];
    if (v1492) {
      var v1491 = ByTag[tagName$$8];
      JAM.call(Object.extend, Object, [methods$$3, v1491], JAM.policy.p1);
    }
    extendElementWith(element$$71, methods$$3);
    var v1493 = JAM.call(getUniqueElementID, null, [element$$71], JAM.policy.p1);
    JAM.set(EXTENDED, v1493, true, JAM.policy.p2);
    return element$$71;
  }
  function extend_IE8(element$$72) {
    var v2739 = !element$$72;
    var v3427 = !v2739;
    if (v3427) {
      v2739 = elementIsExtended(element$$72);
    }
    var v1494 = v2739;
    if (v1494) {
      return element$$72;
    }
    var t$$1 = element$$72.tagName;
    var v2740 = t$$1;
    if (v2740) {
      v2740 = JAM.call(/^(?:object|applet|embed)$/i.test, /^(?:object|applet|embed)$/i, [t$$1], JAM.policy.p1);
    }
    var v1498 = v2740;
    if (v1498) {
      var v1495 = Element$$1.Methods;
      extendElementWith(element$$72, v1495);
      var v2741 = Element$$1.Methods;
      var v1496 = v2741.Simulated;
      extendElementWith(element$$72, v1496);
      var v3428 = Element$$1.Methods;
      var v2742 = v3428.ByTag;
      var v2743 = JAM.call(t$$1.toUpperCase, t$$1, [], JAM.policy.p1);
      var v1497 = v2742[v2743];
      extendElementWith(element$$72, v1497);
    }
    return element$$72;
  }
  function addMethodsToTagName(tagName$$9, methods$$4) {
    tagName$$9 = JAM.call(tagName$$9.toUpperCase, tagName$$9, [], JAM.policy.p1);
    var v2744 = ByTag[tagName$$9];
    var v1499 = !v2744;
    if (v1499) {
      JAM.set(ByTag, tagName$$9, {}, JAM.policy.p2);
    }
    var v1500 = ByTag[tagName$$9];
    JAM.call(Object.extend, Object, [v1500, methods$$4], JAM.policy.p1);
    return;
  }
  function mergeMethods(destination$$1, methods$$5, onlyIfAbsent) {
    var v1501 = JAM.call(Object.isUndefined, Object, [onlyIfAbsent], JAM.policy.p1);
    if (v1501) {
      onlyIfAbsent = false;
    }
    var property$$10;
    for (property$$10 in methods$$5) {
      var value$$71 = methods$$5[property$$10];
      var v2745 = JAM.call(Object.isFunction, Object, [value$$71], JAM.policy.p1);
      var v1502 = !v2745;
      if (v1502) {
        continue;
      }
      var v2746 = !onlyIfAbsent;
      var v3430 = !v2746;
      if (v3430) {
        var v3429 = property$$10 in destination$$1;
        v2746 = !v3429;
      }
      var v1505 = v2746;
      if (v1505) {
        var v1503 = destination$$1;
        var v1504 = property$$10;
        var v4002 = JAM.call(value$$71.methodize, value$$71, [], JAM.policy.p1);
        JAM.set(v1503, v1504, v4002, JAM.policy.p2);
      }
    }
    return;
  }
  function findDOMClass(tagName$$10) {
    var klass$$1;
    var trans = {"OPTGROUP":"OptGroup", "TEXTAREA":"TextArea", "P":"Paragraph", "FIELDSET":"FieldSet", "UL":"UList", "OL":"OList", "DL":"DList", "DIR":"Directory", "H1":"Heading", "H2":"Heading", "H3":"Heading", "H4":"Heading", "H5":"Heading", "H6":"Heading", "Q":"Quote", "INS":"Mod", "DEL":"Mod", "A":"Anchor", "IMG":"Image", "CAPTION":"TableCaption", "COL":"TableCol", "COLGROUP":"TableCol", "THEAD":"TableSection", "TFOOT":"TableSection", "TBODY":"TableSection", "TR":"TableRow", "TH":"TableCell", 
    "TD":"TableCell", "FRAMESET":"FrameSet", "IFRAME":"IFrame"};
    var v1507 = trans[tagName$$10];
    if (v1507) {
      var v2747 = trans[tagName$$10];
      var v1506 = "HTML" + v2747;
      klass$$1 = v1506 + "Element";
    }
    var v1508 = window[klass$$1];
    if (v1508) {
      return window[klass$$1];
    }
    var v1509 = "HTML" + tagName$$10;
    klass$$1 = v1509 + "Element";
    var v1510 = window[klass$$1];
    if (v1510) {
      return window[klass$$1];
    }
    var v2748 = JAM.call(tagName$$10.capitalize, tagName$$10, [], JAM.policy.p1);
    var v1511 = "HTML" + v2748;
    klass$$1 = v1511 + "Element";
    var v1512 = window[klass$$1];
    if (v1512) {
      return window[klass$$1];
    }
    var element$$73 = JAM.call(document.createElement, document, [tagName$$10], JAM.policy.p1);
    var v1513 = element$$73["__proto__"];
    var v2750 = !v1513;
    if (v2750) {
      var v2749 = element$$73.constructor;
      v1513 = v2749.prototype;
    }
    var proto$$3 = v1513;
    element$$73 = null;
    return proto$$3;
  }
  function addMethods$$1(methods$$6) {
    var v2751 = arguments.length;
    var v1519 = v2751 === 0;
    if (v1519) {
      var v1514 = Form.Methods;
      JAM.call(Object.extend, Object, [Form, v1514], JAM.policy.p1);
      var v1515 = Form.Element;
      var v2752 = Form.Element;
      var v1516 = v2752.Methods;
      JAM.call(Object.extend, Object, [v1515, v1516], JAM.policy.p1);
      var v2753 = Element$$1.Methods;
      var v1517 = v2753.ByTag;
      var v3431 = Form.Methods;
      var v2754 = JAM.call(Object.clone, Object, [v3431], JAM.policy.p1);
      var v3737 = Form.Element;
      var v3432 = v3737.Methods;
      var v2755 = JAM.call(Object.clone, Object, [v3432], JAM.policy.p1);
      var v3738 = Form.Element;
      var v3433 = v3738.Methods;
      var v2756 = JAM.call(Object.clone, Object, [v3433], JAM.policy.p1);
      var v3739 = Form.Element;
      var v3434 = v3739.Methods;
      var v2757 = JAM.call(Object.clone, Object, [v3434], JAM.policy.p1);
      var v3740 = Form.Element;
      var v3435 = v3740.Methods;
      var v2758 = JAM.call(Object.clone, Object, [v3435], JAM.policy.p1);
      var v1518 = {"FORM":v2754, "INPUT":v2755, "SELECT":v2756, "TEXTAREA":v2757, "BUTTON":v2758};
      JAM.call(Object.extend, Object, [v1517, v1518], JAM.policy.p1);
    }
    var v2759 = arguments.length;
    var v1520 = v2759 === 2;
    if (v1520) {
      var tagName$$11 = methods$$6;
      methods$$6 = arguments[1];
    }
    var v1525 = !tagName$$11;
    if (v1525) {
      var v1521 = Element$$1.Methods;
      var v1522 = methods$$6 || {};
      JAM.call(Object.extend, Object, [v1521, v1522], JAM.policy.p1);
    } else {
      var v1524 = JAM.call(Object.isArray, Object, [tagName$$11], JAM.policy.p1);
      if (v1524) {
        var i$$26 = 0;
        var tag;
        var v1523 = tag = tagName$$11[i$$26];
        for (;v1523;) {
          addMethodsToTagName(tag, methods$$6);
          i$$26 = i$$26 + 1;
          v1523 = tag = tagName$$11[i$$26];
        }
      } else {
        addMethodsToTagName(tagName$$11, methods$$6);
      }
    }
    var v1526;
    var v2760 = window.HTMLElement;
    if (v2760) {
      v1526 = HTMLElement.prototype;
    } else {
      v1526 = Element$$1.prototype;
    }
    var ELEMENT_PROTOTYPE = v1526;
    var v1529 = F.ElementExtensions;
    if (v1529) {
      var v1527 = Element$$1.Methods;
      mergeMethods(ELEMENT_PROTOTYPE, v1527);
      var v2761 = Element$$1.Methods;
      var v1528 = v2761.Simulated;
      mergeMethods(ELEMENT_PROTOTYPE, v1528, true);
    }
    var v1534 = F.SpecificElementExtensions;
    if (v1534) {
      var v2762 = Element$$1.Methods;
      var v1533 = v2762.ByTag;
      for (tag in v1533) {
        var klass$$2 = findDOMClass(tag);
        var v1530 = JAM.call(Object.isUndefined, Object, [klass$$2], JAM.policy.p1);
        if (v1530) {
          continue;
        }
        var v1531 = klass$$2.prototype;
        var v1532 = ByTag[tag];
        mergeMethods(v1531, v1532);
      }
    }
    var v1535 = Element$$1.Methods;
    JAM.call(Object.extend, Object, [Element$$1, v1535], JAM.policy.p1);
    var v2763 = Element$$1.Methods;
    var v1536 = v2763.Simulated;
    JAM.call(Object.extend, Object, [Element$$1, v1536], JAM.policy.p1);
    delete Element$$1.ByTag;
    delete Element$$1.Simulated;
    var v1537 = Element$$1.extend;
    JAM.call(v1537.refresh, v1537, [], JAM.policy.p1);
    ELEMENT_CACHE = {};
    return;
  }
  var UNDEFINED;
  var v1538 = Array.prototype;
  var SLICE = v1538.slice;
  var DIV = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
  GLOBAL.$ = $$$1;
  var v2764 = GLOBAL.Node;
  var v1539 = !v2764;
  if (v1539) {
    GLOBAL.Node = {};
  }
  var v3436 = GLOBAL.Node;
  var v2765 = v3436.ELEMENT_NODE;
  var v1542 = !v2765;
  if (v1542) {
    var v1540 = GLOBAL.Node;
    var v1541 = {ELEMENT_NODE:1, ATTRIBUTE_NODE:2, TEXT_NODE:3, CDATA_SECTION_NODE:4, ENTITY_REFERENCE_NODE:5, ENTITY_NODE:6, PROCESSING_INSTRUCTION_NODE:7, COMMENT_NODE:8, DOCUMENT_NODE:9, DOCUMENT_TYPE_NODE:10, DOCUMENT_FRAGMENT_NODE:11, NOTATION_NODE:12};
    JAM.call(Object.extend, Object, [v1540, v1541], JAM.policy.p1);
  }
  var ELEMENT_CACHE = {};
  var HAS_EXTENDED_CREATE_ELEMENT_SYNTAX = v117();
  var oldElement = GLOBAL.Element;
  GLOBAL.Element = Element$$1;
  var v1543 = GLOBAL.Element;
  var v1544 = oldElement || {};
  JAM.call(Object.extend, Object, [v1543, v1544], JAM.policy.p1);
  if (oldElement) {
    var v1545 = GLOBAL.Element;
    v1545.prototype = oldElement.prototype;
  }
  Element$$1.Methods = {ByTag:{}, Simulated:{}};
  var methods$$1 = {};
  var INSPECT_ATTRIBUTES = {id:"id", className:"class"};
  methods$$1.inspect = inspect$$5;
  var v1546 = {visible:visible, toggle:toggle, hide:hide, show:show};
  JAM.call(Object.extend, Object, [methods$$1, v1546], JAM.policy.p1);
  var SELECT_ELEMENT_INNERHTML_BUGGY = v118();
  var TABLE_ELEMENT_INNERHTML_BUGGY = v119();
  var LINK_ELEMENT_INNERHTML_BUGGY = v120();
  var v1547 = SELECT_ELEMENT_INNERHTML_BUGGY || TABLE_ELEMENT_INNERHTML_BUGGY;
  var v2766 = !v1547;
  if (v2766) {
    v1547 = LINK_ELEMENT_INNERHTML_BUGGY;
  }
  var ANY_INNERHTML_BUGGY = v1547;
  var SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING = v121();
  var v2767 = ["<table>", "</table>", 1];
  var v2768 = ["<table><tbody>", "</tbody></table>", 2];
  var v2769 = ["<table><tbody><tr>", "</tr></tbody></table>", 3];
  var v2770 = ["<table><tbody><tr><td>", "</td></tr></tbody></table>", 4];
  var v2771 = ["<select>", "</select>", 1];
  var v1548 = {TABLE:v2767, TBODY:v2768, TR:v2769, TD:v2770, SELECT:v2771};
  var INSERTION_TRANSLATIONS = {before:v122, top:v123, bottom:v124, after:v125, tags:v1548};
  var tags = INSERTION_TRANSLATIONS.tags;
  var v2772 = tags.TBODY;
  var v2773 = tags.TBODY;
  var v2774 = tags.TD;
  var v1549 = {THEAD:v2772, TFOOT:v2773, TH:v2774};
  JAM.call(Object.extend, Object, [tags, v1549], JAM.policy.p1);
  var v2775 = document.documentElement;
  var v1550 = "outerHTML" in v2775;
  if (v1550) {
    replace = replace_IE;
  }
  if (HAS_UNIQUE_ID_PROPERTY) {
    purgeCollection = purgeCollection_IE;
  }
  var v1551 = {remove:remove, update:update$$2, replace:replace, insert:insert, wrap:wrap$$1, cleanWhitespace:cleanWhitespace, empty:empty$$1, clone:clone$$3, purge:purge};
  JAM.call(Object.extend, Object, [methods$$1, v1551], JAM.policy.p1);
  var descendantOf;
  var v1553 = DIV.compareDocumentPosition;
  if (v1553) {
    descendantOf = descendantOf_compareDocumentPosition;
  } else {
    var v1552 = DIV.contains;
    if (v1552) {
      descendantOf = descendantOf_contains;
    } else {
      descendantOf = descendantOf_DOM;
    }
  }
  var v1554 = {recursivelyCollect:recursivelyCollect, ancestors:ancestors, descendants:descendants, firstDescendant:firstDescendant, immediateDescendants:immediateDescendants, previousSiblings:previousSiblings, nextSiblings:nextSiblings, siblings:siblings, match:match$$7, up:up, down:down, previous:previous, next:next, select:select, adjacent:adjacent, descendantOf:descendantOf, getElementsBySelector:select, childElements:immediateDescendants};
  JAM.call(Object.extend, Object, [methods$$1, v1554], JAM.policy.p1);
  var idCounter = 1;
  var PROBLEMATIC_ATTRIBUTE_READING = v126();
  if (PROBLEMATIC_ATTRIBUTE_READING) {
    readAttribute = readAttribute_IE;
  } else {
    var v2776 = Prototype.Browser;
    var v1555 = v2776.Opera;
    if (v1555) {
      readAttribute = readAttribute_Opera;
    }
  }
  var v3437 = GLOBAL.Element;
  var v2777 = v3437.Methods;
  var v1556 = v2777.Simulated;
  v1556.hasAttribute = hasAttribute;
  var regExpCache = {};
  var ATTRIBUTE_TRANSLATIONS = {};
  var classProp = "className";
  var forProp = "for";
  JAM.call(DIV.setAttribute, DIV, [classProp, "x"], JAM.policy.p1);
  var v2778 = DIV.className;
  var v1558 = v2778 !== "x";
  if (v1558) {
    JAM.call(DIV.setAttribute, DIV, ["class", "x"], JAM.policy.p1);
    var v2779 = DIV.className;
    var v1557 = v2779 === "x";
    if (v1557) {
      classProp = "class";
    }
  }
  var LABEL = JAM.call(document.createElement, document, ["label"], JAM.policy.p1);
  JAM.call(LABEL.setAttribute, LABEL, [forProp, "x"], JAM.policy.p1);
  var v2780 = LABEL.htmlFor;
  var v1560 = v2780 !== "x";
  if (v1560) {
    JAM.call(LABEL.setAttribute, LABEL, ["htmlFor", "x"], JAM.policy.p1);
    var v2781 = LABEL.htmlFor;
    var v1559 = v2781 === "x";
    if (v1559) {
      forProp = "htmlFor";
    }
  }
  LABEL = null;
  JAM.set(DIV, "onclick", Prototype.emptyFunction);
  var onclickValue = JAM.call(DIV.getAttribute, DIV, ["onclick"], JAM.policy.p1);
  var _getEv;
  var v3438 = String(onclickValue);
  var v2782 = JAM.call(v3438.indexOf, v3438, ["{"], JAM.policy.p1);
  var v1562 = v2782 > -1;
  if (v1562) {
    _getEv = v127;
  } else {
    var v1561 = onclickValue === "";
    if (v1561) {
      _getEv = v128;
    }
  }
  var v1563 = {"class":classProp, "className":classProp, "for":forProp, "htmlFor":forProp};
  var v1564 = {style:v129, title:v130};
  ATTRIBUTE_TRANSLATIONS.read = {names:v1563, values:v1564};
  var v1565 = {className:"class", htmlFor:"for", cellpadding:"cellPadding", cellspacing:"cellSpacing"};
  var v1566 = {checked:v131, style:v132};
  ATTRIBUTE_TRANSLATIONS.write = {names:v1565, values:v1566};
  ATTRIBUTE_TRANSLATIONS.has = {names:{}};
  var v2783 = ATTRIBUTE_TRANSLATIONS.write;
  var v1567 = v2783.names;
  var v2784 = ATTRIBUTE_TRANSLATIONS.read;
  var v1568 = v2784.names;
  JAM.call(Object.extend, Object, [v1567, v1568], JAM.policy.p1);
  var v1569 = "colSpan rowSpan vAlign dateTime " + "accessKey tabIndex encType maxLength readOnly longDesc frameBorder";
  var CAMEL_CASED_ATTRIBUTE_NAMES = $w(v1569);
  var i$$16 = 0;
  var attr;
  var v1574 = attr = CAMEL_CASED_ATTRIBUTE_NAMES[i$$16];
  for (;v1574;) {
    var v2785 = ATTRIBUTE_TRANSLATIONS.write;
    var v1570 = v2785.names;
    var v1571 = JAM.call(attr.toLowerCase, attr, [], JAM.policy.p1);
    JAM.set(v1570, v1571, attr, JAM.policy.p2);
    var v2786 = ATTRIBUTE_TRANSLATIONS.has;
    var v1572 = v2786.names;
    var v1573 = JAM.call(attr.toLowerCase, attr, [], JAM.policy.p1);
    JAM.set(v1572, v1573, attr, JAM.policy.p2);
    i$$16 = i$$16 + 1;
    v1574 = attr = CAMEL_CASED_ATTRIBUTE_NAMES[i$$16];
  }
  var v2787 = ATTRIBUTE_TRANSLATIONS.read;
  var v1575 = v2787.values;
  var v1576 = {href:_getAttr2, src:_getAttr2, type:_getAttr, action:_getAttrNode, disabled:_getFlag, checked:_getFlag, readonly:_getFlag, multiple:_getFlag, onload:_getEv, onunload:_getEv, onclick:_getEv, ondblclick:_getEv, onmousedown:_getEv, onmouseup:_getEv, onmouseover:_getEv, onmousemove:_getEv, onmouseout:_getEv, onfocus:_getEv, onblur:_getEv, onkeypress:_getEv, onkeydown:_getEv, onkeyup:_getEv, onsubmit:_getEv, onreset:_getEv, onselect:_getEv, onchange:_getEv};
  JAM.call(Object.extend, Object, [v1575, v1576], JAM.policy.p1);
  var v1577 = {identify:identify, readAttribute:readAttribute, writeAttribute:writeAttribute, classNames:classNames$$1, hasClassName:hasClassName, addClassName:addClassName, removeClassName:removeClassName, toggleClassName:toggleClassName};
  JAM.call(Object.extend, Object, [methods$$1, v1577], JAM.policy.p1);
  var STANDARD_CSS_OPACITY_SUPPORTED;
  var v1578 = DIV.style;
  v1578.cssText = "opacity:.55";
  var v2788 = DIV.style;
  var v1579 = v2788.opacity;
  STANDARD_CSS_OPACITY_SUPPORTED = JAM.call(/^0.55/.test, /^0.55/, [v1579], JAM.policy.p1);
  var v1580 = {setStyle:setStyle, getStyle:getStyle, setOpacity:setOpacity, getOpacity:getOpacity};
  JAM.call(Object.extend, Object, [methods$$1, v1580], JAM.policy.p1);
  var v2789 = DIV.style;
  var v1581 = "styleFloat" in v2789;
  if (v1581) {
    methods$$1.getStyle = getStyle_IE;
    methods$$1.setOpacity = setOpacity_IE;
    methods$$1.getOpacity = getOpacity_IE;
  }
  var UID = 0;
  var v1582 = GLOBAL.Element;
  v1582.Storage = {UID:1};
  var HAS_UNIQUE_ID_PROPERTY = "uniqueID" in DIV;
  if (HAS_UNIQUE_ID_PROPERTY) {
    getUniqueElementID = getUniqueElementID_IE;
  }
  var v1583 = {getStorage:getStorage, store:store, retrieve:retrieve};
  JAM.call(Object.extend, Object, [methods$$1, v1583], JAM.policy.p1);
  var Methods = {};
  var v1584 = Element$$1.Methods;
  var ByTag = v1584.ByTag;
  var F = Prototype.BrowserFeatures;
  var v3439 = F.ElementExtensions;
  var v2790 = !v3439;
  if (v2790) {
    v2790 = "__proto__" in DIV;
  }
  var v1586 = v2790;
  if (v1586) {
    GLOBAL.HTMLElement = {};
    var v1585 = GLOBAL.HTMLElement;
    v1585.prototype = DIV["__proto__"];
    F.ElementExtensions = true;
  }
  var HTMLOBJECTELEMENT_PROTOTYPE_BUGGY = checkElementPrototypeDeficiency("object");
  var EXTENDED = {};
  var v1588 = F.SpecificElementExtensions;
  if (v1588) {
    var v1587;
    if (HTMLOBJECTELEMENT_PROTOTYPE_BUGGY) {
      v1587 = extend_IE8;
    } else {
      v1587 = Prototype.K;
    }
    extend$$1 = v1587;
  }
  var v1589 = GLOBAL.Element;
  var v1590 = {extend:extend$$1, addMethods:addMethods$$1};
  JAM.call(Object.extend, Object, [v1589, v1590], JAM.policy.p1);
  var v2791 = Prototype.K;
  var v1593 = extend$$1 === v2791;
  if (v1593) {
    var v2792 = GLOBAL.Element;
    var v1591 = v2792.extend;
    v1591.refresh = Prototype.emptyFunction;
  } else {
    var v2793 = GLOBAL.Element;
    var v1592 = v2793.extend;
    v1592.refresh = v133;
  }
  JAM.call(Element$$1.addMethods, Element$$1, [methods$$1], JAM.policy.p1);
  return;
}
function v114() {
  var v1594 = Ajax.Updater;
  var v1595 = this.container;
  var v1596 = this.url;
  var v1597 = this.options;
  var v4003 = JAM.new(v1594, [v1595, v1596, v1597]);
  this.updater = v4003;
  return;
}
function v113(response$$3) {
  var v2794 = this.options;
  var v1599 = v2794.decay;
  if (v1599) {
    var v1598;
    var v3440 = response$$3.responseText;
    var v3441 = this.lastText;
    var v2797 = v3440 == v3441;
    if (v2797) {
      var v2795 = this.decay;
      var v3442 = this.options;
      var v2796 = v3442.decay;
      v1598 = v2795 * v2796;
    } else {
      v1598 = 1;
    }
    this.decay = v1598;
    this.lastText = response$$3.responseText;
  }
  var v2798 = this.onTimerEvent;
  var v1600 = JAM.call(v2798.bind, v2798, [this], JAM.policy.p1);
  var v2799 = this.decay;
  var v2800 = this.frequency;
  var v1601 = v2799 * v2800;
  var v4004 = JAM.call(v1600.delay, v1600, [v1601], JAM.policy.p1);
  this.timer = v4004;
  return;
}
function v112() {
  var v2801 = this.updater;
  var v1602 = v2801.options;
  v1602.onComplete = undefined;
  var v1603 = this.timer;
  clearTimeout(v1603);
  var v2802 = this.onComplete;
  var v3443 = !v2802;
  if (v3443) {
    v2802 = Prototype.emptyFunction;
  }
  var v1604 = v2802;
  JAM.call(v1604.apply, v1604, [this, arguments], JAM.policy.p1);
  return;
}
function v111() {
  var v1605 = this.options;
  var v2803 = this.updateComplete;
  var v4005 = JAM.call(v2803.bind, v2803, [this], JAM.policy.p1);
  v1605.onComplete = v4005;
  JAM.call(this.onTimerEvent, this, [], JAM.policy.p1);
  return;
}
function v110($super$$2, container$$1, url$$5, options$$6) {
  JAM.call($super$$2, null, [options$$6], JAM.policy.p1);
  var v1606 = this.options;
  this.onComplete = v1606.onComplete;
  var v2804 = this.options;
  var v1607 = v2804.frequency;
  var v2805 = !v1607;
  if (v2805) {
    v1607 = 2;
  }
  this.frequency = v1607;
  var v2806 = this.options;
  var v1608 = v2806.decay;
  var v2807 = !v1608;
  if (v2807) {
    v1608 = 1;
  }
  this.decay = v1608;
  this.updater = {};
  this.container = container$$1;
  this.url = url$$5;
  JAM.call(this.start, this, [], JAM.policy.p1);
  return;
}
function v109(responseText) {
  var v1609 = this.container;
  var v2808;
  var v3444 = JAM.call(this.success, this, [], JAM.policy.p1);
  if (v3444) {
    v2808 = "success";
  } else {
    v2808 = "failure";
  }
  var v1610 = v2808;
  var receiver = v1609[v1610];
  var options$$5 = this.options;
  var v2809 = options$$5.evalScripts;
  var v1611 = !v2809;
  if (v1611) {
    responseText = JAM.call(responseText.stripScripts, responseText, [], JAM.policy.p1);
  }
  var v1615 = receiver = JAM.call($, null, [receiver], JAM.policy.p1);
  if (v1615) {
    var v1614 = options$$5.insertion;
    if (v1614) {
      var v2810 = options$$5.insertion;
      var v1613 = JAM.call(Object.isString, Object, [v2810], JAM.policy.p1);
      if (v1613) {
        var insertion = {};
        var v1612 = options$$5.insertion;
        JAM.set(insertion, v1612, responseText, JAM.policy.p2);
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
    var v1616 = response$$2.responseText;
    JAM.call(this.updateContent, this, [v1616], JAM.policy.p1);
    var v1617 = JAM.call(Object.isFunction, Object, [onComplete], JAM.policy.p1);
    if (v1617) {
      JAM.call(onComplete, null, [response$$2, json$$4], JAM.policy.p1);
    }
    return;
  }
  var v2811 = container.success;
  var v3445 = !v2811;
  if (v3445) {
    v2811 = container;
  }
  var v1618 = v2811;
  var v2812 = container.failure;
  var v3447 = !v2812;
  if (v3447) {
    var v3446;
    var v3741 = container.success;
    if (v3741) {
      v3446 = null;
    } else {
      v3446 = container;
    }
    v2812 = v3446;
  }
  var v1619 = v2812;
  this.container = {success:v1618, failure:v1619};
  options$$4 = JAM.call(Object.clone, Object, [options$$4], JAM.policy.p1);
  var onComplete = options$$4.onComplete;
  var v1620 = options$$4;
  var v4006 = JAM.call(v107.bind, v107, [this], JAM.policy.p1);
  v1620.onComplete = v4006;
  JAM.call($super$$1, null, [url$$4, options$$4], JAM.policy.p1);
  return;
}
function v106() {
  var v1621 = this.request;
  var options$$3 = v1621.options;
  var v3742 = options$$3.evalJSON;
  var v3448 = !v3742;
  var v3744 = !v3448;
  if (v3744) {
    var v3863 = options$$3.evalJSON;
    var v3743 = v3863 != "force";
    if (v3743) {
      var v3933 = JAM.call(this.getHeader, this, ["Content-type"], JAM.policy.p1);
      var v3944 = !v3933;
      if (v3944) {
        v3933 = "";
      }
      var v3912 = v3933;
      var v3864 = JAM.call(v3912.include, v3912, ["application/json"], JAM.policy.p1);
      v3743 = !v3864;
    }
    v3448 = v3743;
  }
  var v2813 = v3448;
  var v3450 = !v2813;
  if (v3450) {
    var v3449 = this.responseText;
    v2813 = JAM.call(v3449.blank, v3449, [], JAM.policy.p1);
  }
  var v1622 = v2813;
  if (v1622) {
    return null;
  }
  try {
    var v1623 = this.responseText;
    var v2814 = options$$3.sanitizeJSON;
    var v3452 = !v2814;
    if (v3452) {
      var v3745 = this.request;
      var v3451 = JAM.call(v3745.isSameOrigin, v3745, [], JAM.policy.p1);
      v2814 = !v3451;
    }
    var v1624 = v2814;
    return JAM.call(v1623.evalJSON, v1623, [v1624], JAM.policy.p1);
  } catch (e$$20) {
    var v1625 = this.request;
    JAM.call(v1625.dispatchException, v1625, [e$$20], JAM.policy.p1);
  }
  return;
}
function v105() {
  var json$$3 = JAM.call(this.getHeader, this, ["X-JSON"], JAM.policy.p1);
  var v1626 = !json$$3;
  if (v1626) {
    return null;
  }
  try {
    var v1627 = escape(json$$3);
    json$$3 = decodeURIComponent(v1627);
  } catch (e$$18) {
  }
  try {
    var v3746 = this.request;
    var v3453 = v3746.options;
    var v2815 = v3453.sanitizeJSON;
    var v3455 = !v2815;
    if (v3455) {
      var v3747 = this.request;
      var v3454 = JAM.call(v3747.isSameOrigin, v3747, [], JAM.policy.p1);
      v2815 = !v3454;
    }
    var v1628 = v2815;
    return JAM.call(json$$3.evalJSON, json$$3, [v1628], JAM.policy.p1);
  } catch (e$$19) {
    var v1629 = this.request;
    JAM.call(v1629.dispatchException, v1629, [e$$19], JAM.policy.p1);
  }
  return;
}
function v104() {
  var v1630 = this.transport;
  return JAM.call(v1630.getAllResponseHeaders, v1630, [], JAM.policy.p1);
}
function v103(name$$32) {
  var v1631 = this.transport;
  return JAM.call(v1631.getResponseHeader, v1631, [name$$32], JAM.policy.p1);
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
    var v2816 = this.transport;
    var v1632 = v2816.statusText;
    var v2817 = !v1632;
    if (v2817) {
      v1632 = "";
    }
    return v1632;
  } catch (e$$16) {
    return "";
  }
  return;
}
function v100(request$$1) {
  this.request = request$$1;
  var transport$$1 = this.transport = request$$1.transport;
  var readyState$$2 = this.readyState = transport$$1.readyState;
  var v3456 = readyState$$2 > 2;
  if (v3456) {
    var v3865 = Prototype.Browser;
    var v3748 = v3865.IE;
    v3456 = !v3748;
  }
  var v2818 = v3456;
  var v3457 = !v2818;
  if (v3457) {
    v2818 = readyState$$2 == 4;
  }
  var v1634 = v2818;
  if (v1634) {
    var v4007 = JAM.call(this.getStatus, this, [], JAM.policy.p1);
    this.status = v4007;
    var v4008 = JAM.call(this.getStatusText, this, [], JAM.policy.p1);
    this.statusText = v4008;
    var v1633 = transport$$1.responseText;
    var v4009 = JAM.call(String.interpret, String, [v1633], JAM.policy.p1);
    this.responseText = v4009;
    var v4010 = JAM.call(this._getHeaderJSON, this, [], JAM.policy.p1);
    this.headerJSON = v4010;
  }
  var v1636 = readyState$$2 == 4;
  if (v1636) {
    var xml = transport$$1.responseXML;
    var v1635;
    var v2819 = JAM.call(Object.isUndefined, Object, [xml], JAM.policy.p1);
    if (v2819) {
      v1635 = null;
    } else {
      v1635 = xml;
    }
    this.responseXML = v1635;
    var v4011 = JAM.call(this._getResponseJSON, this, [], JAM.policy.p1);
    this.responseJSON = v4011;
  }
  return;
}
function v99(exception) {
  var v3458 = this.options;
  var v2820 = v3458.onException;
  var v3459 = !v2820;
  if (v3459) {
    v2820 = Prototype.emptyFunction;
  }
  var v1637 = v2820;
  JAM.call(v1637, null, [this, exception], JAM.policy.p1);
  var v1638 = Ajax.Responders;
  JAM.call(v1638.dispatch, v1638, ["onException", this, exception], JAM.policy.p1);
  return;
}
function v98() {
  try {
    var v3749 = this.transport;
    var v3460 = v3749.responseText;
    var v3750 = !v3460;
    if (v3750) {
      v3460 = "";
    }
    var v2821 = v3460;
    var v1639 = JAM.call(v2821.unfilterJSON, v2821, [], JAM.policy.p1);
    if (JAM.isEval(eval)) {
      return eval("introspect(JAM.policy.pFull) { " + v1639 + " }");
    } else {
      return JAM.call(eval, null, [v1639]);
    }
  } catch (e$$15) {
    JAM.call(this.dispatchException, this, [e$$15], JAM.policy.p1);
  }
  return;
}
function v97(name$$31) {
  try {
    var v2822 = this.transport;
    var v1640 = JAM.call(v2822.getResponseHeader, v2822, [name$$31], JAM.policy.p1);
    var v2823 = !v1640;
    if (v2823) {
      v1640 = null;
    }
    return v1640;
  } catch (e$$14) {
    return null;
  }
  return;
}
function v96() {
  var v1641 = this.url;
  var m$$1 = JAM.call(v1641.match, v1641, [/^\s*https?:\/\/[^\/]*/], JAM.policy.p1);
  var v1642 = !m$$1;
  var v2826 = !v1642;
  if (v2826) {
    var v2824 = m$$1[0];
    var v3751 = location.protocol;
    var v3752 = document.domain;
    var v3866;
    var v3914 = location.port;
    if (v3914) {
      var v3913 = location.port;
      v3866 = ":" + v3913;
    } else {
      v3866 = "";
    }
    var v3753 = v3866;
    var v3461 = {protocol:v3751, domain:v3752, port:v3753};
    var v2825 = JAM.call("#{protocol}//#{domain}#{port}".interpolate, "#{protocol}//#{domain}#{port}", [v3461], JAM.policy.p1);
    v1642 = v2824 == v2825;
  }
  return v1642;
}
function v95(readyState$$1) {
  var v2827 = Ajax.Request;
  var v1643 = v2827.Events;
  var state = v1643[readyState$$1];
  var v1644 = Ajax.Response;
  var response$$1 = JAM.new(v1644, [this]);
  var v1648 = state == "Complete";
  if (v1648) {
    try {
      this._complete = true;
      var v3754 = this.options;
      var v3867 = response$$1.status;
      var v3755 = "on" + v3867;
      var v3462 = v3754[v3755];
      var v3758 = !v3462;
      if (v3758) {
        var v3756 = this.options;
        var v3915;
        var v3934 = JAM.call(this.success, this, [], JAM.policy.p1);
        if (v3934) {
          v3915 = "Success";
        } else {
          v3915 = "Failure";
        }
        var v3868 = v3915;
        var v3757 = "on" + v3868;
        v3462 = v3756[v3757];
      }
      var v2828 = v3462;
      var v3463 = !v2828;
      if (v3463) {
        v2828 = Prototype.emptyFunction;
      }
      var v1645 = v2828;
      var v1646 = response$$1.headerJSON;
      JAM.call(v1645, null, [response$$1, v1646], JAM.policy.p1);
    } catch (e$$12) {
      JAM.call(this.dispatchException, this, [e$$12], JAM.policy.p1);
    }
    var contentType = JAM.call(response$$1.getHeader, response$$1, ["Content-type"], JAM.policy.p1);
    var v3759 = this.options;
    var v3464 = v3759.evalJS;
    var v2829 = v3464 == "force";
    var v3466 = !v2829;
    if (v3466) {
      var v3916 = this.options;
      var v3869 = v3916.evalJS;
      if (v3869) {
        v3869 = JAM.call(this.isSameOrigin, this, [], JAM.policy.p1);
      }
      var v3760 = v3869;
      if (v3760) {
        v3760 = contentType;
      }
      var v3465 = v3760;
      if (v3465) {
        v3465 = JAM.call(contentType.match, contentType, [/^\s*(text|application)\/(x-)?(java|ecma)script(;.*)?\s*$/i], JAM.policy.p1);
      }
      v2829 = v3465;
    }
    var v1647 = v2829;
    if (v1647) {
      JAM.call(this.evalResponse, this, [], JAM.policy.p1);
    }
  }
  try {
    var v3467 = this.options;
    var v3468 = "on" + state;
    var v2830 = v3467[v3468];
    var v3469 = !v2830;
    if (v3469) {
      v2830 = Prototype.emptyFunction;
    }
    var v1649 = v2830;
    var v1650 = response$$1.headerJSON;
    JAM.call(v1649, null, [response$$1, v1650], JAM.policy.p1);
    var v1651 = Ajax.Responders;
    var v1652 = "on" + state;
    var v1653 = response$$1.headerJSON;
    JAM.call(v1651.dispatch, v1651, [v1652, this, response$$1, v1653], JAM.policy.p1);
  } catch (e$$13) {
    JAM.call(this.dispatchException, this, [e$$13], JAM.policy.p1);
  }
  var v1655 = state == "Complete";
  if (v1655) {
    var v1654 = this.transport;
    JAM.set(v1654, "onreadystatechange", Prototype.emptyFunction);
  }
  return;
}
function v94() {
  try {
    var v3470 = this.transport;
    var v2831 = v3470.status;
    var v1656 = v2831 === 1223;
    if (v1656) {
      return 204;
    }
    var v2832 = this.transport;
    var v1657 = v2832.status;
    var v2833 = !v1657;
    if (v2833) {
      v1657 = 0;
    }
    return v1657;
  } catch (e$$11) {
    return 0;
  }
  return;
}
function v93() {
  var status = JAM.call(this.getStatus, this, [], JAM.policy.p1);
  var v2834 = !status;
  var v3472 = !v2834;
  if (v3472) {
    var v3471 = status >= 200;
    if (v3471) {
      v3471 = status < 300;
    }
    v2834 = v3471;
  }
  var v1658 = v2834;
  var v2835 = !v1658;
  if (v2835) {
    v1658 = status == 304;
  }
  return v1658;
}
function v92() {
  function v91(pair$$6) {
    var v1659 = pair$$6.key;
    JAM.set(headers, v1659, pair$$6.value, JAM.policy.p2);
    return;
  }
  var v1660 = Prototype.Version;
  var headers = {"X-Requested-With":"XMLHttpRequest", "X-Prototype-Version":v1660, "Accept":"text/javascript, text/html, application/xml, text/xml, */*"};
  var v2836 = this.method;
  var v1664 = v2836 == "post";
  if (v1664) {
    var v2837 = this.options;
    var v1661 = v2837.contentType;
    var v2838;
    var v3761 = this.options;
    var v3474 = v3761.encoding;
    if (v3474) {
      var v3762 = this.options;
      var v3473 = v3762.encoding;
      v2838 = "; charset=" + v3473;
    } else {
      v2838 = "";
    }
    var v1662 = v2838;
    headers["Content-type"] = v1661 + v1662;
    var v3475 = this.transport;
    var v2839 = v3475.overrideMimeType;
    if (v2839) {
      var v3917 = navigator.userAgent;
      var v3870 = JAM.call(v3917.match, v3917, [/Gecko\/(\d{4})/], JAM.policy.p1);
      var v3918 = !v3870;
      if (v3918) {
        v3870 = [0, 2005];
      }
      var v3763 = v3870;
      var v3476 = v3763[1];
      v2839 = v3476 < 2005;
    }
    var v1663 = v2839;
    if (v1663) {
      headers["Connection"] = "close";
    }
  }
  var v3764 = this.options;
  var v3477 = v3764.requestHeaders;
  var v2840 = typeof v3477;
  var v1670 = v2840 == "object";
  if (v1670) {
    var v1665 = this.options;
    var extras = v1665.requestHeaders;
    var v2841 = extras.push;
    var v1669 = JAM.call(Object.isFunction, Object, [v2841], JAM.policy.p1);
    if (v1669) {
      var i$$15 = 0;
      var length$$27 = extras.length;
      var v1667 = i$$15 < length$$27;
      for (;v1667;) {
        var v1666 = extras[i$$15];
        var v2842 = i$$15 + 1;
        JAM.set(headers, v1666, extras[v2842], JAM.policy.p2);
        i$$15 = i$$15 + 2;
        v1667 = i$$15 < length$$27;
      }
    } else {
      var v1668 = $H(extras);
      JAM.call(v1668.each, v1668, [v91], JAM.policy.p1);
    }
  }
  var name$$30;
  for (name$$30 in headers) {
    var v1671 = this.transport;
    var v1672 = headers[name$$30];
    JAM.call(v1671.setRequestHeader, v1671, [name$$30, v1672], JAM.policy.p1);
  }
  return;
}
function v90() {
  var v1673 = this.transport;
  var readyState = v1673.readyState;
  var v2843 = readyState > 1;
  if (v2843) {
    var v3765 = readyState == 4;
    if (v3765) {
      v3765 = this._complete;
    }
    var v3478 = v3765;
    v2843 = !v3478;
  }
  var v1675 = v2843;
  if (v1675) {
    var v2844 = this.transport;
    var v1674 = v2844.readyState;
    JAM.call(this.respondToReadyState, this, [v1674], JAM.policy.p1);
  }
  return;
}
function v89(url$$3) {
  this.url = url$$3;
  var v1676 = this.options;
  this.method = v1676.method;
  var v1677;
  var v3766 = this.options;
  var v3479 = v3766.parameters;
  var v2847 = JAM.call(Object.isString, Object, [v3479], JAM.policy.p1);
  if (v2847) {
    var v2845 = this.options;
    v1677 = v2845.parameters;
  } else {
    var v3480 = this.options;
    var v2846 = v3480.parameters;
    v1677 = JAM.call(Object.toQueryString, Object, [v2846], JAM.policy.p1);
  }
  var params = v1677;
  var v3481 = ["get", "post"];
  var v3482 = this.method;
  var v2848 = JAM.call(v3481.include, v3481, [v3482], JAM.policy.p1);
  var v1678 = !v2848;
  if (v1678) {
    var v3871;
    if (params) {
      v3871 = "&";
    } else {
      v3871 = "";
    }
    var v3767 = v3871;
    var v3483 = v3767 + "_method=";
    var v3484 = this.method;
    var v2849 = v3483 + v3484;
    params = params + v2849;
    this.method = "post";
  }
  var v2850 = params;
  if (v2850) {
    var v3485 = this.method;
    v2850 = v3485 === "get";
  }
  var v1679 = v2850;
  if (v1679) {
    var v2851 = this.url;
    var v3768;
    var v3919 = this.url;
    var v3872 = JAM.call(v3919.include, v3919, ["?"], JAM.policy.p1);
    if (v3872) {
      v3768 = "&";
    } else {
      v3768 = "?";
    }
    var v3486 = v3768;
    var v2852 = v3486 + params;
    this.url = v2851 + v2852;
  }
  var v4012 = JAM.call(params.toQueryParams, params, [], JAM.policy.p1);
  this.parameters = v4012;
  try {
    var v1680 = Ajax.Response;
    var response = JAM.new(v1680, [this]);
    var v2853 = this.options;
    var v1682 = v2853.onCreate;
    if (v1682) {
      var v1681 = this.options;
      JAM.call(v1681.onCreate, v1681, [response], JAM.policy.p1);
    }
    var v1683 = Ajax.Responders;
    JAM.call(v1683.dispatch, v1683, ["onCreate", this, response], JAM.policy.p1);
    var v1684 = this.transport;
    var v2854 = this.method;
    var v1685 = JAM.call(v2854.toUpperCase, v2854, [], JAM.policy.p1);
    var v1686 = this.url;
    var v2855 = this.options;
    var v1687 = v2855.asynchronous;
    JAM.call(v1684.open, v1684, [v1685, v1686, v1687], JAM.policy.p1);
    var v2856 = this.options;
    var v1689 = v2856.asynchronous;
    if (v1689) {
      var v2857 = this.respondToReadyState;
      var v1688 = JAM.call(v2857.bind, v2857, [this], JAM.policy.p1);
      JAM.call(v1688.defer, v1688, [1], JAM.policy.p1);
    }
    var v1690 = this.transport;
    var v2858 = this.onStateChange;
    var v4013 = JAM.call(v2858.bind, v2858, [this], JAM.policy.p1);
    JAM.set(v1690, "onreadystatechange", v4013);
    JAM.call(this.setRequestHeaders, this, [], JAM.policy.p1);
    var v1691;
    var v3487 = this.method;
    var v2860 = v3487 == "post";
    if (v2860) {
      var v3488 = this.options;
      var v2859 = v3488.postBody;
      var v3489 = !v2859;
      if (v3489) {
        v2859 = params;
      }
      v1691 = v2859;
    } else {
      v1691 = null;
    }
    this.body = v1691;
    var v1692 = this.transport;
    var v1693 = this.body;
    JAM.call(v1692.send, v1692, [v1693], JAM.policy.p1);
    var v3769 = this.options;
    var v3490 = v3769.asynchronous;
    var v2861 = !v3490;
    if (v2861) {
      var v3491 = this.transport;
      v2861 = v3491.overrideMimeType;
    }
    var v1694 = v2861;
    if (v1694) {
      JAM.call(this.onStateChange, this, [], JAM.policy.p1);
    }
  } catch (e$$10) {
    JAM.call(this.dispatchException, this, [e$$10], JAM.policy.p1);
  }
  return;
}
function v88($super, url$$2, options$$2) {
  JAM.call($super, null, [options$$2], JAM.policy.p1);
  var v4014 = JAM.call(Ajax.getTransport, Ajax, [], JAM.policy.p1);
  this.transport = v4014;
  JAM.call(this.request, this, [url$$2], JAM.policy.p1);
  return;
}
function v87(options$$1) {
  this.options = {method:"post", asynchronous:true, contentType:"application/x-www-form-urlencoded", encoding:"UTF-8", parameters:"", evalJSON:true, evalJS:true};
  var v1695 = this.options;
  var v1696 = options$$1 || {};
  JAM.call(Object.extend, Object, [v1695, v1696], JAM.policy.p1);
  var v1697 = this.options;
  var v3492 = this.options;
  var v2862 = v3492.method;
  var v4015 = JAM.call(v2862.toLowerCase, v2862, [], JAM.policy.p1);
  v1697.method = v4015;
  var v3493 = this.options;
  var v2863 = v3493.parameters;
  var v1699 = JAM.call(Object.isHash, Object, [v2863], JAM.policy.p1);
  if (v1699) {
    var v1698 = this.options;
    var v3494 = this.options;
    var v2864 = v3494.parameters;
    var v4016 = JAM.call(v2864.toObject, v2864, [], JAM.policy.p1);
    v1698.parameters = v4016;
  }
  return;
}
function v86() {
  var v2865 = Ajax.activeRequestCount;
  Ajax.activeRequestCount = v2865 - 1;
  return;
}
function v85() {
  var v2866 = Ajax.activeRequestCount;
  Ajax.activeRequestCount = v2866 + 1;
  return;
}
function v84(callback$$26, request, transport, json$$2) {
  function v83(responder$$2) {
    var v2867 = responder$$2[callback$$26];
    var v1702 = JAM.call(Object.isFunction, Object, [v2867], JAM.policy.p1);
    if (v1702) {
      try {
        var v1700 = responder$$2[callback$$26];
        var v1701 = [request, transport, json$$2];
        JAM.call(v1700.apply, v1700, [responder$$2, v1701], JAM.policy.p1);
      } catch (e$$9) {
      }
    }
    return;
  }
  JAM.call(this.each, this, [v83], JAM.policy.p1);
  return;
}
function v82(responder$$1) {
  var v1703 = this.responders;
  var v4017 = JAM.call(v1703.without, v1703, [responder$$1], JAM.policy.p1);
  this.responders = v4017;
  return;
}
function v81(responder) {
  var v2868 = JAM.call(this.include, this, [responder], JAM.policy.p1);
  var v1705 = !v2868;
  if (v1705) {
    var v1704 = this.responders;
    JAM.call(v1704.push, v1704, [responder], JAM.policy.p1);
  }
  return;
}
function v80(iterator$$25, context$$25) {
  var v1706 = this.responders;
  JAM.call(v1706._each, v1706, [iterator$$25, context$$25], JAM.policy.p1);
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
  var v1707 = JAM.call(Try.these, Try, [v76, v77, v78], JAM.policy.p1);
  var v2869 = !v1707;
  if (v2869) {
    v1707 = false;
  }
  return v1707;
}
function v75() {
  var returnValue;
  var i$$14 = 0;
  var length$$26 = arguments.length;
  var v1708 = i$$14 < length$$26;
  for (;v1708;) {
    var lambda = arguments[i$$14];
    try {
      returnValue = JAM.call(lambda, null, [], JAM.policy.p1);
      break;
    } catch (e$$8) {
    }
    i$$14 = i$$14 + 1;
    v1708 = i$$14 < length$$26;
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
    var v1709 = JAM.call(this.include, this, [value$$59], JAM.policy.p1);
    for (;v1709;) {
      JAM.call(iterator$$24.call, iterator$$24, [context$$24, value$$59], JAM.policy.p1);
      value$$59 = JAM.call(value$$59.succ, value$$59, [], JAM.policy.p1);
      v1709 = JAM.call(this.include, this, [value$$59], JAM.policy.p1);
    }
    return;
  }
  function include$$2(value$$60) {
    var v2870 = this.start;
    var v1710 = value$$60 < v2870;
    if (v1710) {
      return false;
    }
    var v1712 = this.exclusive;
    if (v1712) {
      var v1711 = this.end;
      return value$$60 < v1711;
    }
    var v1713 = this.end;
    return value$$60 <= v1713;
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
    var v1714 = $R(0, this, true);
    JAM.call(v1714.each, v1714, [iterator$$23, context$$23], JAM.policy.p1);
    return this;
  }
  function toPaddedString(length$$25, radix) {
    var v1715 = radix || 10;
    var string$$1 = JAM.call(this.toString, this, [v1715], JAM.policy.p1);
    var v3495 = string$$1.length;
    var v2871 = length$$25 - v3495;
    var v1716 = JAM.call("0".times, "0", [v2871], JAM.policy.p1);
    return v1716 + string$$1;
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
    var v1717;
    var v2872 = JAM.call(Object.isHash, Object, [object$$23], JAM.policy.p1);
    if (v2872) {
      v1717 = JAM.call(object$$23.toObject, object$$23, [], JAM.policy.p1);
    } else {
      v1717 = JAM.call(Object.clone, Object, [object$$23], JAM.policy.p1);
    }
    this._object = v1717;
    return;
  }
  function _each$$1(iterator$$22, context$$22) {
    var key$$16;
    var v1719 = this._object;
    for (key$$16 in v1719) {
      var v1718 = this._object;
      var value$$53 = v1718[key$$16];
      var pair$$1 = [key$$16, value$$53];
      pair$$1.key = key$$16;
      pair$$1.value = value$$53;
      JAM.call(iterator$$22.call, iterator$$22, [context$$22, pair$$1], JAM.policy.p1);
    }
    return;
  }
  function set(key$$17, value$$54) {
    var v1720 = this._object;
    return JAM.set(v1720, key$$17, value$$54, JAM.policy.p2);
  }
  function get(key$$18) {
    var v3496 = this._object;
    var v2873 = v3496[key$$18];
    var v3497 = Object.prototype;
    var v2874 = v3497[key$$18];
    var v1722 = v2873 !== v2874;
    if (v1722) {
      var v1721 = this._object;
      return v1721[key$$18];
    }
    return;
  }
  function unset(key$$19) {
    var v1723 = this._object;
    var value$$55 = v1723[key$$19];
    var v1724 = this._object;
    delete v1724[key$$19];
    return value$$55;
  }
  function toObject() {
    var v1725 = this._object;
    return JAM.call(Object.clone, Object, [v1725], JAM.policy.p1);
  }
  function keys$$2() {
    return JAM.call(this.pluck, this, ["key"], JAM.policy.p1);
  }
  function values$$6() {
    return JAM.call(this.pluck, this, ["value"], JAM.policy.p1);
  }
  function index$$54(value$$56) {
    function v68(pair$$2) {
      var v1726 = pair$$2.value;
      return v1726 === value$$56;
    }
    var match$$6 = JAM.call(this.detect, this, [v68], JAM.policy.p1);
    var v1727 = match$$6;
    if (v1727) {
      v1727 = match$$6.key;
    }
    return v1727;
  }
  function merge$$1(object$$24) {
    var v1728 = JAM.call(this.clone, this, [], JAM.policy.p1);
    return JAM.call(v1728.update, v1728, [object$$24], JAM.policy.p1);
  }
  function update$$1(object$$25) {
    function v69(result$$6, pair$$3) {
      var v1729 = pair$$3.key;
      var v1730 = pair$$3.value;
      JAM.call(result$$6.set, result$$6, [v1729, v1730], JAM.policy.p1);
      return result$$6;
    }
    var v1731 = JAM.new(Hash, [object$$25]);
    return JAM.call(v1731.inject, v1731, [this, v69], JAM.policy.p1);
  }
  function toQueryPair(key$$20, value$$57) {
    var v1732 = JAM.call(Object.isUndefined, Object, [value$$57], JAM.policy.p1);
    if (v1732) {
      return key$$20;
    }
    value$$57 = JAM.call(String.interpret, String, [value$$57], JAM.policy.p1);
    value$$57 = JAM.call(value$$57.gsub, value$$57, [/(\r)?\n/, "\r\n"], JAM.policy.p1);
    value$$57 = encodeURIComponent(value$$57);
    value$$57 = JAM.call(value$$57.gsub, value$$57, [/%20/, "+"], JAM.policy.p1);
    var v1733 = key$$20 + "=";
    return v1733 + value$$57;
  }
  function toQueryString$$1() {
    function v70(results$$10, pair$$4) {
      var v1734 = pair$$4.key;
      var key$$21 = encodeURIComponent(v1734);
      var values$$7 = pair$$4.value;
      var v2875 = values$$7;
      if (v2875) {
        var v3498 = typeof values$$7;
        v2875 = v3498 == "object";
      }
      var v1739 = v2875;
      if (v1739) {
        var v1737 = JAM.call(Object.isArray, Object, [values$$7], JAM.policy.p1);
        if (v1737) {
          var queryValues = [];
          var i$$13 = 0;
          var len = values$$7.length;
          var value$$58;
          var v1736 = i$$13 < len;
          for (;v1736;) {
            value$$58 = values$$7[i$$13];
            var v1735 = toQueryPair(key$$21, value$$58);
            JAM.call(queryValues.push, queryValues, [v1735], JAM.policy.p1);
            i$$13 = i$$13 + 1;
            v1736 = i$$13 < len;
          }
          return JAM.call(results$$10.concat, results$$10, [queryValues], JAM.policy.p1);
        }
      } else {
        var v1738 = toQueryPair(key$$21, values$$7);
        JAM.call(results$$10.push, results$$10, [v1738], JAM.policy.p1);
      }
      return results$$10;
    }
    var v1740 = JAM.call(this.inject, this, [[], v70], JAM.policy.p1);
    return JAM.call(v1740.join, v1740, ["&"], JAM.policy.p1);
  }
  function inspect$$4() {
    function v71(pair$$5) {
      var v2876 = Object.inspect;
      var v1741 = JAM.call(pair$$5.map, pair$$5, [v2876], JAM.policy.p1);
      return JAM.call(v1741.join, v1741, [": "], JAM.policy.p1);
    }
    var v3499 = JAM.call(this.map, this, [v71], JAM.policy.p1);
    var v2877 = JAM.call(v3499.join, v3499, [", "], JAM.policy.p1);
    var v1742 = "#<Hash:{" + v2877;
    return v1742 + "}>";
  }
  function clone$$2() {
    return JAM.new(Hash, [this]);
  }
  return{initialize:initialize, _each:_each$$1, set:set, get:get, unset:unset, toObject:toObject, toTemplateReplacements:toObject, keys:keys$$2, values:values$$6, index:index$$54, merge:merge$$1, update:update$$1, toQueryString:toQueryString$$1, inspect:inspect$$4, toJSON:toObject, clone:clone$$2};
}
function v67() {
  function v66() {
    var v3500 = JAM.call([].concat, [], [arguments], JAM.policy.p1);
    var v2878 = v3500[0];
    var v1743 = v2878[0];
    return v1743 !== 1;
  }
  function each$$1(iterator$$16, context$$16) {
    var i$$5 = 0;
    var v1744 = this.length;
    var length$$17 = v1744 >>> 0;
    var v1747 = i$$5 < length$$17;
    for (;v1747;) {
      var v1746 = i$$5 in this;
      if (v1746) {
        var v1745 = this[i$$5];
        JAM.call(iterator$$16.call, iterator$$16, [context$$16, v1745, i$$5, this], JAM.policy.p1);
      }
      i$$5 = i$$5 + 1;
      v1747 = i$$5 < length$$17;
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
    var v2879 = this.length;
    var v1748 = v2879 - 1;
    return this[v1748];
  }
  function compact() {
    function v60(value$$48) {
      return value$$48 != null;
    }
    return JAM.call(this.select, this, [v60], JAM.policy.p1);
  }
  function flatten() {
    function v61(array$$12, value$$49) {
      var v1750 = JAM.call(Object.isArray, Object, [value$$49], JAM.policy.p1);
      if (v1750) {
        var v1749 = JAM.call(value$$49.flatten, value$$49, [], JAM.policy.p1);
        return JAM.call(array$$12.concat, array$$12, [v1749], JAM.policy.p1);
      }
      JAM.call(array$$12.push, array$$12, [value$$49], JAM.policy.p1);
      return array$$12;
    }
    return JAM.call(this.inject, this, [[], v61], JAM.policy.p1);
  }
  function without() {
    function v62(value$$50) {
      var v1751 = JAM.call(values$$5.include, values$$5, [value$$50], JAM.policy.p1);
      return!v1751;
    }
    var values$$5 = JAM.call(slice$$2.call, slice$$2, [arguments, 0], JAM.policy.p1);
    return JAM.call(this.select, this, [v62], JAM.policy.p1);
  }
  function reverse(inline) {
    var v2880;
    var v3501 = inline === false;
    if (v3501) {
      v2880 = JAM.call(this.toArray, this, [], JAM.policy.p1);
    } else {
      v2880 = this;
    }
    var v1752 = v2880;
    return JAM.call(v1752._reverse, v1752, [], JAM.policy.p1);
  }
  function uniq(sorted) {
    function v63(array$$13, value$$51, index$$53) {
      var v2881 = 0 == index$$53;
      var v3503 = !v2881;
      if (v3503) {
        var v3502;
        if (sorted) {
          var v3770 = JAM.call(array$$13.last, array$$13, [], JAM.policy.p1);
          v3502 = v3770 != value$$51;
        } else {
          var v3771 = JAM.call(array$$13.include, array$$13, [value$$51], JAM.policy.p1);
          v3502 = !v3771;
        }
        v2881 = v3502;
      }
      var v1753 = v2881;
      if (v1753) {
        JAM.call(array$$13.push, array$$13, [value$$51], JAM.policy.p1);
      }
      return array$$13;
    }
    return JAM.call(this.inject, this, [[], v63], JAM.policy.p1);
  }
  function intersect(array$$14) {
    function v64(item) {
      var v1754 = JAM.call(array$$14.indexOf, array$$14, [item], JAM.policy.p1);
      return v1754 !== -1;
    }
    var v1755 = JAM.call(this.uniq, this, [], JAM.policy.p1);
    return JAM.call(v1755.findAll, v1755, [v64], JAM.policy.p1);
  }
  function clone$$1() {
    return JAM.call(slice$$2.call, slice$$2, [this, 0], JAM.policy.p1);
  }
  function size$$5() {
    return this.length;
  }
  function inspect$$3() {
    var v3772 = Object.inspect;
    var v3504 = JAM.call(this.map, this, [v3772], JAM.policy.p1);
    var v2882 = JAM.call(v3504.join, v3504, [", "], JAM.policy.p1);
    var v1756 = "[" + v2882;
    return v1756 + "]";
  }
  function indexOf(item$$1, i$$6) {
    var v1757 = this == null;
    if (v1757) {
      throw new TypeError;
    }
    var array$$15 = Object(this);
    var v1758 = array$$15.length;
    var length$$18 = v1758 >>> 0;
    var v1759 = length$$18 === 0;
    if (v1759) {
      return-1;
    }
    i$$6 = Number(i$$6);
    var v1763 = isNaN(i$$6);
    if (v1763) {
      i$$6 = 0;
    } else {
      var v2883 = i$$6 !== 0;
      if (v2883) {
        v2883 = isFinite(i$$6);
      }
      var v1762 = v2883;
      if (v1762) {
        var v2884;
        var v3505 = i$$6 > 0;
        if (v3505) {
          v2884 = 1;
        } else {
          v2884 = -1;
        }
        var v1760 = v2884;
        var v2885 = JAM.call(Math.abs, Math, [i$$6], JAM.policy.p1);
        var v1761 = JAM.call(Math.floor, Math, [v2885], JAM.policy.p1);
        i$$6 = v1760 * v1761;
      }
    }
    var v1764 = i$$6 > length$$18;
    if (v1764) {
      return-1;
    }
    var v1765;
    var v2887 = i$$6 >= 0;
    if (v2887) {
      v1765 = i$$6;
    } else {
      var v3506 = length$$18;
      var v3507 = JAM.call(Math.abs, Math, [i$$6], JAM.policy.p1);
      var v2886 = v3506 - v3507;
      v1765 = JAM.call(Math.max, Math, [v2886, 0], JAM.policy.p1);
    }
    var k = v1765;
    var v1767 = k < length$$18;
    for (;v1767;) {
      var v2888 = k in array$$15;
      if (v2888) {
        var v3508 = array$$15[k];
        v2888 = v3508 === item$$1;
      }
      var v1766 = v2888;
      if (v1766) {
        return k;
      }
      k = k + 1;
      v1767 = k < length$$18;
    }
    return-1;
  }
  function lastIndexOf(item$$2, i$$7) {
    var v1768 = this == null;
    if (v1768) {
      throw new TypeError;
    }
    var array$$16 = Object(this);
    var v1769 = array$$16.length;
    var length$$19 = v1769 >>> 0;
    var v1770 = length$$19 === 0;
    if (v1770) {
      return-1;
    }
    var v2889 = JAM.call(Object.isUndefined, Object, [i$$7], JAM.policy.p1);
    var v1775 = !v2889;
    if (v1775) {
      i$$7 = Number(i$$7);
      var v1774 = isNaN(i$$7);
      if (v1774) {
        i$$7 = 0;
      } else {
        var v2890 = i$$7 !== 0;
        if (v2890) {
          v2890 = isFinite(i$$7);
        }
        var v1773 = v2890;
        if (v1773) {
          var v2891;
          var v3509 = i$$7 > 0;
          if (v3509) {
            v2891 = 1;
          } else {
            v2891 = -1;
          }
          var v1771 = v2891;
          var v2892 = JAM.call(Math.abs, Math, [i$$7], JAM.policy.p1);
          var v1772 = JAM.call(Math.floor, Math, [v2892], JAM.policy.p1);
          i$$7 = v1771 * v1772;
        }
      }
    } else {
      i$$7 = length$$19;
    }
    var v1776;
    var v2896 = i$$7 >= 0;
    if (v2896) {
      var v2893 = length$$19 - 1;
      v1776 = JAM.call(Math.min, Math, [i$$7, v2893], JAM.policy.p1);
    } else {
      var v2894 = length$$19;
      var v2895 = JAM.call(Math.abs, Math, [i$$7], JAM.policy.p1);
      v1776 = v2894 - v2895;
    }
    var k$$1 = v1776;
    var v1778 = k$$1 >= 0;
    for (;v1778;) {
      var v2897 = k$$1 in array$$16;
      if (v2897) {
        var v3510 = array$$16[k$$1];
        v2897 = v3510 === item$$2;
      }
      var v1777 = v2897;
      if (v1777) {
        return k$$1;
      }
      k$$1 = k$$1 - 1;
      v1778 = k$$1 >= 0;
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
    var v1783 = i$$8 < length$$20;
    for (;v1783;) {
      item$$3 = items[i$$8];
      var v2898 = JAM.call(Object.isArray, Object, [item$$3], JAM.policy.p1);
      if (v2898) {
        var v3511 = "callee" in item$$3;
        v2898 = !v3511;
      }
      var v1782 = v2898;
      if (v1782) {
        var j = 0;
        var arrayLength$$1 = item$$3.length;
        var v1780 = j < arrayLength$$1;
        for (;v1780;) {
          var v1779 = j in item$$3;
          if (v1779) {
            introspect(JAM.policy.p2) {
              array$$17[n$$1] = item$$3[j];
            }
          }
          n$$1 = n$$1 + 1;
          j = j + 1;
          v1780 = j < arrayLength$$1;
        }
      } else {
        var v1781 = n$$1;
        n$$1 = n$$1 + 1;
        introspect(JAM.policy.p2) {
          array$$17[v1781] = item$$3;
        }
      }
      i$$8 = i$$8 + 1;
      v1783 = i$$8 < length$$20;
    }
    array$$17.length = n$$1;
    return array$$17;
  }
  function wrapNative(method$$5) {
    function v65() {
      var v2899 = arguments.length;
      var v1787 = v2899 === 0;
      if (v1787) {
        var v1784 = Prototype.K;
        return JAM.call(method$$5.call, method$$5, [this, v1784], JAM.policy.p1);
      } else {
        var v2900 = arguments[0];
        var v1786 = v2900 === undefined;
        if (v1786) {
          var args$$9 = JAM.call(slice$$2.call, slice$$2, [arguments, 1], JAM.policy.p1);
          var v1785 = Prototype.K;
          JAM.call(args$$9.unshift, args$$9, [v1785], JAM.policy.p1);
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
    var v1788 = this == null;
    if (v1788) {
      throw new TypeError;
    }
    var v1789 = iterator$$17;
    var v2901 = !v1789;
    if (v2901) {
      v1789 = Prototype.K;
    }
    iterator$$17 = v1789;
    var object$$18 = Object(this);
    var results$$8 = [];
    var context$$17 = arguments[1];
    var n$$2 = 0;
    var i$$9 = 0;
    var v1790 = object$$18.length;
    var length$$21 = v1790 >>> 0;
    var v1794 = i$$9 < length$$21;
    for (;v1794;) {
      var v1793 = i$$9 in object$$18;
      if (v1793) {
        var v1791 = results$$8;
        var v1792 = n$$2;
        var v2902 = object$$18[i$$9];
        var v4018 = JAM.call(iterator$$17.call, iterator$$17, [context$$17, v2902, i$$9, object$$18], JAM.policy.p1);
        introspect(JAM.policy.p2) {
          v1791[v1792] = v4018;
        }
      }
      n$$2 = n$$2 + 1;
      i$$9 = i$$9 + 1;
      v1794 = i$$9 < length$$21;
    }
    results$$8.length = n$$2;
    return results$$8;
  }
  function filter$$2(iterator$$18) {
    var v2903 = this == null;
    var v3513 = !v2903;
    if (v3513) {
      var v3512 = JAM.call(Object.isFunction, Object, [iterator$$18], JAM.policy.p1);
      v2903 = !v3512;
    }
    var v1795 = v2903;
    if (v1795) {
      throw new TypeError;
    }
    var object$$19 = Object(this);
    var results$$9 = [];
    var context$$18 = arguments[1];
    var value$$52;
    var i$$10 = 0;
    var v1796 = object$$19.length;
    var length$$22 = v1796 >>> 0;
    var v1799 = i$$10 < length$$22;
    for (;v1799;) {
      var v1798 = i$$10 in object$$19;
      if (v1798) {
        value$$52 = object$$19[i$$10];
        var v1797 = JAM.call(iterator$$18.call, iterator$$18, [context$$18, value$$52, i$$10, object$$19], JAM.policy.p1);
        if (v1797) {
          JAM.call(results$$9.push, results$$9, [value$$52], JAM.policy.p1);
        }
      }
      i$$10 = i$$10 + 1;
      v1799 = i$$10 < length$$22;
    }
    return results$$9;
  }
  function some(iterator$$19) {
    var v1800 = this == null;
    if (v1800) {
      throw new TypeError;
    }
    var v1801 = iterator$$19;
    var v2904 = !v1801;
    if (v2904) {
      v1801 = Prototype.K;
    }
    iterator$$19 = v1801;
    var context$$19 = arguments[1];
    var object$$20 = Object(this);
    var i$$11 = 0;
    var v1802 = object$$20.length;
    var length$$23 = v1802 >>> 0;
    var v1804 = i$$11 < length$$23;
    for (;v1804;) {
      var v2905 = i$$11 in object$$20;
      if (v2905) {
        var v3514 = object$$20[i$$11];
        v2905 = JAM.call(iterator$$19.call, iterator$$19, [context$$19, v3514, i$$11, object$$20], JAM.policy.p1);
      }
      var v1803 = v2905;
      if (v1803) {
        return true;
      }
      i$$11 = i$$11 + 1;
      v1804 = i$$11 < length$$23;
    }
    return false;
  }
  function every(iterator$$20) {
    var v1805 = this == null;
    if (v1805) {
      throw new TypeError;
    }
    var v1806 = iterator$$20;
    var v2906 = !v1806;
    if (v2906) {
      v1806 = Prototype.K;
    }
    iterator$$20 = v1806;
    var context$$20 = arguments[1];
    var object$$21 = Object(this);
    var i$$12 = 0;
    var v1807 = object$$21.length;
    var length$$24 = v1807 >>> 0;
    var v1809 = i$$12 < length$$24;
    for (;v1809;) {
      var v2907 = i$$12 in object$$21;
      if (v2907) {
        var v3773 = object$$21[i$$12];
        var v3515 = JAM.call(iterator$$20.call, iterator$$20, [context$$20, v3773, i$$12, object$$21], JAM.policy.p1);
        v2907 = !v3515;
      }
      var v1808 = v2907;
      if (v1808) {
        return false;
      }
      i$$12 = i$$12 + 1;
      v1809 = i$$12 < length$$24;
    }
    return true;
  }
  function inject$$1(memo$$1, iterator$$21) {
    var v1810 = iterator$$21;
    var v2908 = !v1810;
    if (v2908) {
      v1810 = Prototype.K;
    }
    iterator$$21 = v1810;
    var context$$21 = arguments[2];
    var v1811 = JAM.call(iterator$$21.bind, iterator$$21, [context$$21], JAM.policy.p1);
    return JAM.call(_reduce.call, _reduce, [this, v1811, memo$$1], JAM.policy.p1);
  }
  var arrayProto = Array.prototype;
  var slice$$2 = arrayProto.slice;
  var _each = arrayProto.forEach;
  var v1812 = !_each;
  if (v1812) {
    _each = each$$1;
  }
  var v1814 = arrayProto.map;
  if (v1814) {
    var v2909 = Array.prototype;
    var v1813 = v2909.map;
    map = wrapNative(v1813);
  }
  var v1816 = arrayProto.filter;
  if (v1816) {
    var v1815 = Array.prototype;
    filter$$2 = v1815.filter;
  }
  var v1818 = arrayProto.some;
  if (v1818) {
    var v2910 = Array.prototype;
    var v1817 = v2910.some;
    some = wrapNative(v1817);
  }
  var v1820 = arrayProto.every;
  if (v1820) {
    var v2911 = Array.prototype;
    var v1819 = v2911.every;
    every = wrapNative(v1819);
  }
  var _reduce = arrayProto.reduce;
  var v2912 = arrayProto.reduce;
  var v1821 = !v2912;
  if (v1821) {
    inject$$1 = Enumerable.inject;
  }
  JAM.call(Object.extend, Object, [arrayProto, Enumerable], JAM.policy.p1);
  var v2913 = arrayProto._reverse;
  var v1822 = !v2913;
  if (v1822) {
    arrayProto._reverse = arrayProto.reverse;
  }
  var v1823 = {_each:_each, map:map, collect:map, select:filter$$2, filter:filter$$2, findAll:filter$$2, some:some, any:some, every:every, all:every, inject:inject$$1, clear:clear, first:first$$1, last:last, compact:compact, flatten:flatten, without:without, reverse:reverse, uniq:uniq, intersect:intersect, clone:clone$$1, toArray:clone$$1, size:size$$5, inspect:inspect$$3};
  JAM.call(Object.extend, Object, [arrayProto, v1823], JAM.policy.p1);
  var CONCAT_ARGUMENTS_BUGGY = v66(1, 2);
  if (CONCAT_ARGUMENTS_BUGGY) {
    arrayProto.concat = concat;
  }
  var v2914 = arrayProto.indexOf;
  var v1824 = !v2914;
  if (v1824) {
    arrayProto.indexOf = indexOf;
  }
  var v2915 = arrayProto.lastIndexOf;
  var v1825 = !v2915;
  if (v1825) {
    arrayProto.lastIndexOf = lastIndexOf;
  }
  return;
}
function v59() {
  function each(iterator$$1, context$$2) {
    try {
      JAM.call(this._each, this, [iterator$$1, context$$2], JAM.policy.p1);
    } catch (e$$7) {
      var v1826 = e$$7 != $break;
      if (v1826) {
        throw e$$7;
      }
    }
    return this;
  }
  function eachSlice(number, iterator$$2, context$$3) {
    var index$$39 = -number;
    var slices = [];
    var array$$11 = JAM.call(this.toArray, this, [], JAM.policy.p1);
    var v1827 = number < 1;
    if (v1827) {
      return array$$11;
    }
    var v2916 = index$$39 = index$$39 + number;
    var v2917 = array$$11.length;
    var v1829 = v2916 < v2917;
    for (;v1829;) {
      var v2918 = index$$39 + number;
      var v1828 = JAM.call(array$$11.slice, array$$11, [index$$39, v2918], JAM.policy.p1);
      JAM.call(slices.push, slices, [v1828], JAM.policy.p1);
      var v2919 = index$$39 = index$$39 + number;
      var v2920 = array$$11.length;
      v1829 = v2919 < v2920;
    }
    return JAM.call(slices.collect, slices, [iterator$$2, context$$3], JAM.policy.p1);
  }
  function all(iterator$$3, context$$4) {
    function v41(value$$32, index$$40) {
      var v1830 = result$$1;
      if (v1830) {
        var v3516 = JAM.call(iterator$$3.call, iterator$$3, [context$$4, value$$32, index$$40, this], JAM.policy.p1);
        var v2921 = !v3516;
        v1830 = !v2921;
      }
      result$$1 = v1830;
      var v1831 = !result$$1;
      if (v1831) {
        throw $break;
      }
      return;
    }
    var v1832 = iterator$$3;
    var v2922 = !v1832;
    if (v2922) {
      v1832 = Prototype.K;
    }
    iterator$$3 = v1832;
    var result$$1 = true;
    JAM.call(this.each, this, [v41, this], JAM.policy.p1);
    return result$$1;
  }
  function any(iterator$$4, context$$5) {
    function v42(value$$33, index$$41) {
      var v3517 = JAM.call(iterator$$4.call, iterator$$4, [context$$5, value$$33, index$$41, this], JAM.policy.p1);
      var v2923 = !v3517;
      var v1833 = result$$2 = !v2923;
      if (v1833) {
        throw $break;
      }
      return;
    }
    var v1834 = iterator$$4;
    var v2924 = !v1834;
    if (v2924) {
      v1834 = Prototype.K;
    }
    iterator$$4 = v1834;
    var result$$2 = false;
    JAM.call(this.each, this, [v42, this], JAM.policy.p1);
    return result$$2;
  }
  function collect(iterator$$5, context$$6) {
    function v43(value$$34, index$$42) {
      var v1835 = JAM.call(iterator$$5.call, iterator$$5, [context$$6, value$$34, index$$42, this], JAM.policy.p1);
      JAM.call(results$$3.push, results$$3, [v1835], JAM.policy.p1);
      return;
    }
    var v1836 = iterator$$5;
    var v2925 = !v1836;
    if (v2925) {
      v1836 = Prototype.K;
    }
    iterator$$5 = v1836;
    var results$$3 = [];
    JAM.call(this.each, this, [v43, this], JAM.policy.p1);
    return results$$3;
  }
  function detect(iterator$$6, context$$7) {
    function v44(value$$35, index$$43) {
      var v1837 = JAM.call(iterator$$6.call, iterator$$6, [context$$7, value$$35, index$$43, this], JAM.policy.p1);
      if (v1837) {
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
      var v1838 = JAM.call(iterator$$7.call, iterator$$7, [context$$8, value$$36, index$$44, this], JAM.policy.p1);
      if (v1838) {
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
      var v1840 = JAM.call(filter$$1.match, filter$$1, [value$$37], JAM.policy.p1);
      if (v1840) {
        var v1839 = JAM.call(iterator$$8.call, iterator$$8, [context$$9, value$$37, index$$45, this], JAM.policy.p1);
        JAM.call(results$$5.push, results$$5, [v1839], JAM.policy.p1);
      }
      return;
    }
    var v1841 = iterator$$8;
    var v2926 = !v1841;
    if (v2926) {
      v1841 = Prototype.K;
    }
    iterator$$8 = v1841;
    var results$$5 = [];
    var v1843 = JAM.call(Object.isString, Object, [filter$$1], JAM.policy.p1);
    if (v1843) {
      var v1842 = JAM.call(RegExp.escape, RegExp, [filter$$1], JAM.policy.p1);
      filter$$1 = new RegExp(v1842);
    }
    JAM.call(this.each, this, [v46, this], JAM.policy.p1);
    return results$$5;
  }
  function include$$1(object$$17) {
    function v47(value$$38) {
      var v1844 = value$$38 == object$$17;
      if (v1844) {
        found = true;
        throw $break;
      }
      return;
    }
    var v2927 = this.indexOf;
    var v1846 = JAM.call(Object.isFunction, Object, [v2927], JAM.policy.p1);
    if (v1846) {
      var v2928 = JAM.call(this.indexOf, this, [object$$17], JAM.policy.p1);
      var v1845 = v2928 != -1;
      if (v1845) {
        return true;
      }
    }
    var found = false;
    JAM.call(this.each, this, [v47], JAM.policy.p1);
    return found;
  }
  function inGroupsOf(number$$1, fillWith) {
    function v48(slice$$1) {
      var v2929 = slice$$1.length;
      var v1847 = v2929 < number$$1;
      for (;v1847;) {
        JAM.call(slice$$1.push, slice$$1, [fillWith], JAM.policy.p1);
        var v2930 = slice$$1.length;
        v1847 = v2930 < number$$1;
      }
      return slice$$1;
    }
    var v1848;
    var v2931 = JAM.call(Object.isUndefined, Object, [fillWith], JAM.policy.p1);
    if (v2931) {
      v1848 = null;
    } else {
      v1848 = fillWith;
    }
    fillWith = v1848;
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
      var v1849 = value$$40[method$$4];
      return JAM.call(v1849.apply, v1849, [value$$40, args$$7], JAM.policy.p1);
    }
    var v1850 = $A(arguments);
    var args$$7 = JAM.call(v1850.slice, v1850, [1], JAM.policy.p1);
    return JAM.call(this.map, this, [v50], JAM.policy.p1);
  }
  function max(iterator$$10, context$$11) {
    function v51(value$$41, index$$47) {
      value$$41 = JAM.call(iterator$$10.call, iterator$$10, [context$$11, value$$41, index$$47, this], JAM.policy.p1);
      var v2932 = result$$4 == null;
      var v3518 = !v2932;
      if (v3518) {
        v2932 = value$$41 >= result$$4;
      }
      var v1851 = v2932;
      if (v1851) {
        result$$4 = value$$41;
      }
      return;
    }
    var v1852 = iterator$$10;
    var v2933 = !v1852;
    if (v2933) {
      v1852 = Prototype.K;
    }
    iterator$$10 = v1852;
    var result$$4;
    JAM.call(this.each, this, [v51, this], JAM.policy.p1);
    return result$$4;
  }
  function min(iterator$$11, context$$12) {
    function v52(value$$42, index$$48) {
      value$$42 = JAM.call(iterator$$11.call, iterator$$11, [context$$12, value$$42, index$$48, this], JAM.policy.p1);
      var v2934 = result$$5 == null;
      var v3519 = !v2934;
      if (v3519) {
        v2934 = value$$42 < result$$5;
      }
      var v1853 = v2934;
      if (v1853) {
        result$$5 = value$$42;
      }
      return;
    }
    var v1854 = iterator$$11;
    var v2935 = !v1854;
    if (v2935) {
      v1854 = Prototype.K;
    }
    iterator$$11 = v1854;
    var result$$5;
    JAM.call(this.each, this, [v52, this], JAM.policy.p1);
    return result$$5;
  }
  function partition(iterator$$12, context$$13) {
    function v53(value$$43, index$$49) {
      var v2936;
      var v3520 = JAM.call(iterator$$12.call, iterator$$12, [context$$13, value$$43, index$$49, this], JAM.policy.p1);
      if (v3520) {
        v2936 = trues;
      } else {
        v2936 = falses;
      }
      var v1855 = v2936;
      JAM.call(v1855.push, v1855, [value$$43], JAM.policy.p1);
      return;
    }
    var v1856 = iterator$$12;
    var v2937 = !v1856;
    if (v2937) {
      v1856 = Prototype.K;
    }
    iterator$$12 = v1856;
    var trues = [];
    var falses = [];
    JAM.call(this.each, this, [v53, this], JAM.policy.p1);
    return[trues, falses];
  }
  function pluck(property$$4) {
    function v54(value$$44) {
      var v1857 = value$$44[property$$4];
      JAM.call(results$$6.push, results$$6, [v1857], JAM.policy.p1);
      return;
    }
    var results$$6 = [];
    JAM.call(this.each, this, [v54], JAM.policy.p1);
    return results$$6;
  }
  function reject(iterator$$13, context$$14) {
    function v55(value$$45, index$$50) {
      var v2938 = JAM.call(iterator$$13.call, iterator$$13, [context$$14, value$$45, index$$50, this], JAM.policy.p1);
      var v1858 = !v2938;
      if (v1858) {
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
      var v1859;
      var v2940 = a$$6 < b;
      if (v2940) {
        v1859 = -1;
      } else {
        var v2939;
        var v3521 = a$$6 > b;
        if (v3521) {
          v2939 = 1;
        } else {
          v2939 = 0;
        }
        v1859 = v2939;
      }
      return v1859;
    }
    function v56(value$$46, index$$51) {
      var v1860 = JAM.call(iterator$$14.call, iterator$$14, [context$$15, value$$46, index$$51, this], JAM.policy.p1);
      return{value:value$$46, criteria:v1860};
    }
    var v2941 = JAM.call(this.map, this, [v56, this], JAM.policy.p1);
    var v1861 = JAM.call(v2941.sort, v2941, [v57], JAM.policy.p1);
    return JAM.call(v1861.pluck, v1861, ["value"], JAM.policy.p1);
  }
  function toArray$$1() {
    return JAM.call(this.map, this, [], JAM.policy.p1);
  }
  function zip() {
    function v58(value$$47, index$$52) {
      var v1862 = JAM.call(collections.pluck, collections, [index$$52], JAM.policy.p1);
      return JAM.call(iterator$$15, null, [v1862], JAM.policy.p1);
    }
    var iterator$$15 = Prototype.K;
    var args$$8 = $A(arguments);
    var v2942 = JAM.call(args$$8.last, args$$8, [], JAM.policy.p1);
    var v1863 = JAM.call(Object.isFunction, Object, [v2942], JAM.policy.p1);
    if (v1863) {
      iterator$$15 = JAM.call(args$$8.pop, args$$8, [], JAM.policy.p1);
    }
    var v2943 = [this];
    var v1864 = JAM.call(v2943.concat, v2943, [args$$8], JAM.policy.p1);
    var collections = JAM.call(v1864.map, v1864, [$A], JAM.policy.p1);
    return JAM.call(this.map, this, [v58], JAM.policy.p1);
  }
  function size$$4() {
    var v1865 = JAM.call(this.toArray, this, [], JAM.policy.p1);
    return v1865.length;
  }
  function inspect$$2() {
    var v3522 = JAM.call(this.toArray, this, [], JAM.policy.p1);
    var v2944 = JAM.call(v3522.inspect, v3522, [], JAM.policy.p1);
    var v1866 = "#<Enumerable:" + v2944;
    return v1866 + ">";
  }
  return{each:each, eachSlice:eachSlice, all:all, every:all, any:any, some:any, collect:collect, map:collect, detect:detect, findAll:findAll, select:findAll, filter:findAll, grep:grep, include:include$$1, member:include$$1, inGroupsOf:inGroupsOf, inject:inject, invoke:invoke, max:max, min:min, partition:partition, pluck:pluck, reject:reject, sortBy:sortBy, toArray:toArray$$1, entries:toArray$$1, zip:zip, size:size$$4, inspect:inspect$$2, find:detect};
}
function v40(object$$16) {
  function v39(match$$5) {
    var v1868 = object$$16 == null;
    if (v1868) {
      var v1867 = match$$5[1];
      return v1867 + "";
    }
    var v1869 = match$$5[1];
    var v2945 = !v1869;
    if (v2945) {
      v1869 = "";
    }
    var before$$1 = v1869;
    var v1870 = before$$1 == "\\";
    if (v1870) {
      return match$$5[2];
    }
    var ctx = object$$16;
    var expr$$3 = match$$5[3];
    var pattern$$9 = /^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;
    match$$5 = JAM.call(pattern$$9.exec, pattern$$9, [expr$$3], JAM.policy.p1);
    var v1871 = match$$5 == null;
    if (v1871) {
      return before$$1;
    }
    var v1875 = match$$5 != null;
    for (;v1875;) {
      var v1872;
      var v3523 = match$$5[1];
      var v2947 = JAM.call(v3523.startsWith, v3523, ["["], JAM.policy.p1);
      if (v2947) {
        var v2946 = match$$5[2];
        v1872 = JAM.call(v2946.replace, v2946, [/\\\\]/g, "]"], JAM.policy.p1);
      } else {
        v1872 = match$$5[1];
      }
      var comp = v1872;
      ctx = ctx[comp];
      var v2948 = null == ctx;
      var v3525 = !v2948;
      if (v3525) {
        var v3524 = match$$5[3];
        v2948 = "" == v3524;
      }
      var v1873 = v2948;
      if (v1873) {
        break;
      }
      var v2949;
      var v3774 = match$$5[3];
      var v3528 = "[" == v3774;
      if (v3528) {
        var v3526 = match$$5[1];
        v2949 = v3526.length;
      } else {
        var v3527 = match$$5[0];
        v2949 = v3527.length;
      }
      var v1874 = v2949;
      expr$$3 = JAM.call(expr$$3.substring, expr$$3, [v1874], JAM.policy.p1);
      match$$5 = JAM.call(pattern$$9.exec, pattern$$9, [expr$$3], JAM.policy.p1);
      v1875 = match$$5 != null;
    }
    var v1876 = before$$1;
    var v1877 = JAM.call(String.interpret, String, [ctx], JAM.policy.p1);
    return v1876 + v1877;
  }
  var v2950 = object$$16;
  if (v2950) {
    var v3529 = object$$16.toTemplateReplacements;
    v2950 = JAM.call(Object.isFunction, Object, [v3529], JAM.policy.p1);
  }
  var v1878 = v2950;
  if (v1878) {
    object$$16 = JAM.call(object$$16.toTemplateReplacements, object$$16, [], JAM.policy.p1);
  }
  var v1879 = this.template;
  var v1880 = this.pattern;
  return JAM.call(v1879.gsub, v1879, [v1880, v39], JAM.policy.p1);
}
function v38(template$$1, pattern$$8) {
  var v4019 = JAM.call(template$$1.toString, template$$1, [], JAM.policy.p1);
  this.template = v4019;
  var v1881 = pattern$$8;
  var v2951 = !v1881;
  if (v2951) {
    v1881 = Template.Pattern;
  }
  this.pattern = v1881;
  return;
}
function v37() {
  function prepareReplacement(replacement) {
    function v29(match) {
      return JAM.call(template.evaluate, template, [match], JAM.policy.p1);
    }
    var v1882 = JAM.call(Object.isFunction, Object, [replacement], JAM.policy.p1);
    if (v1882) {
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
    var v1883 = JAM.call(Object.isString, Object, [pattern$$1], JAM.policy.p1);
    if (v1883) {
      pattern$$1 = JAM.call(RegExp.escape, RegExp, [pattern$$1], JAM.policy.p1);
    }
    var v3530 = pattern$$1.length;
    var v3775 = !v3530;
    if (v3775) {
      v3530 = pattern$$1.source;
    }
    var v2952 = v3530;
    var v1885 = !v2952;
    if (v1885) {
      replacement$$1 = JAM.call(replacement$$1, null, [""], JAM.policy.p1);
      var v2953 = replacement$$1;
      var v3531 = JAM.call(source$$3.split, source$$3, [""], JAM.policy.p1);
      var v2954 = JAM.call(v3531.join, v3531, [replacement$$1], JAM.policy.p1);
      var v1884 = v2953 + v2954;
      return v1884 + replacement$$1;
    }
    var v2955 = source$$3.length;
    var v1888 = v2955 > 0;
    for (;v1888;) {
      var v1887 = match$$1 = JAM.call(source$$3.match, source$$3, [pattern$$1], JAM.policy.p1);
      if (v1887) {
        var v2956 = result;
        var v3532 = match$$1.index;
        var v2957 = JAM.call(source$$3.slice, source$$3, [0, v3532], JAM.policy.p1);
        result = v2956 + v2957;
        var v2958 = result;
        var v3533 = JAM.call(replacement$$1, null, [match$$1], JAM.policy.p1);
        var v2959 = JAM.call(String.interpret, String, [v3533], JAM.policy.p1);
        result = v2958 + v2959;
        var v2960 = match$$1.index;
        var v3534 = match$$1[0];
        var v2961 = v3534.length;
        var v1886 = v2960 + v2961;
        source$$3 = JAM.call(source$$3.slice, source$$3, [v1886], JAM.policy.p1);
      } else {
        result = result + source$$3;
        source$$3 = "";
      }
      var v2962 = source$$3.length;
      v1888 = v2962 > 0;
    }
    return result;
  }
  function sub(pattern$$2, replacement$$2, count$$3) {
    function v30(match$$2) {
      var v2963 = count$$3 = count$$3 - 1;
      var v1889 = v2963 < 0;
      if (v1889) {
        return match$$2[0];
      }
      return JAM.call(replacement$$2, null, [match$$2], JAM.policy.p1);
    }
    replacement$$2 = prepareReplacement(replacement$$2);
    var v1890;
    var v2964 = JAM.call(Object.isUndefined, Object, [count$$3], JAM.policy.p1);
    if (v2964) {
      v1890 = 1;
    } else {
      v1890 = count$$3;
    }
    count$$3 = v1890;
    return JAM.call(this.gsub, this, [pattern$$2, v30], JAM.policy.p1);
  }
  function scan(pattern$$3, iterator) {
    JAM.call(this.gsub, this, [pattern$$3, iterator], JAM.policy.p1);
    return String(this);
  }
  function truncate(length$$16, truncation) {
    length$$16 = length$$16 || 30;
    var v1891;
    var v2965 = JAM.call(Object.isUndefined, Object, [truncation], JAM.policy.p1);
    if (v2965) {
      v1891 = "...";
    } else {
      v1891 = truncation;
    }
    truncation = v1891;
    var v1892;
    var v3535 = this.length;
    var v2967 = v3535 > length$$16;
    if (v2967) {
      var v3776 = truncation.length;
      var v3536 = length$$16 - v3776;
      var v2966 = JAM.call(this.slice, this, [0, v3536], JAM.policy.p1);
      v1892 = v2966 + truncation;
    } else {
      v1892 = String(this);
    }
    return v1892;
  }
  function strip() {
    var v1893 = JAM.call(this.replace, this, [/^\s+/, ""], JAM.policy.p1);
    return JAM.call(v1893.replace, v1893, [/\s+$/, ""], JAM.policy.p1);
  }
  function stripTags() {
    return JAM.call(this.replace, this, [/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi, ""], JAM.policy.p1);
  }
  function stripScripts() {
    var v2968 = Prototype.ScriptFragment;
    var v1894 = new RegExp(v2968, "img");
    return JAM.call(this.replace, this, [v1894, ""], JAM.policy.p1);
  }
  function extractScripts() {
    function v31(scriptTag) {
      var v2969 = JAM.call(scriptTag.match, scriptTag, [matchOne], JAM.policy.p1);
      var v3537 = !v2969;
      if (v3537) {
        v2969 = ["", ""];
      }
      var v1895 = v2969;
      return v1895[1];
    }
    var v1896 = Prototype.ScriptFragment;
    var matchAll = new RegExp(v1896, "img");
    var v1897 = Prototype.ScriptFragment;
    var matchOne = new RegExp(v1897, "im");
    var v2970 = JAM.call(this.match, this, [matchAll], JAM.policy.p1);
    var v3538 = !v2970;
    if (v3538) {
      v2970 = [];
    }
    var v1898 = v2970;
    return JAM.call(v1898.map, v1898, [v31], JAM.policy.p1);
  }
  function evalScripts() {
    function v32(script) {
      if (JAM.isEval(eval)) {
        return eval("introspect(JAM.policy.pFull) { " + script + " }");
      } else {
        return JAM.call(eval, null, [script]);
      }
    }
    var v1899 = JAM.call(this.extractScripts, this, [], JAM.policy.p1);
    return JAM.call(v1899.map, v1899, [v32], JAM.policy.p1);
  }
  function escapeHTML() {
    var v2971 = JAM.call(this.replace, this, [/&/g, "&amp;"], JAM.policy.p1);
    var v1900 = JAM.call(v2971.replace, v2971, [/</g, "&lt;"], JAM.policy.p1);
    return JAM.call(v1900.replace, v1900, [/>/g, "&gt;"], JAM.policy.p1);
  }
  function unescapeHTML() {
    var v3539 = JAM.call(this.stripTags, this, [], JAM.policy.p1);
    var v2972 = JAM.call(v3539.replace, v3539, [/&lt;/g, "<"], JAM.policy.p1);
    var v1901 = JAM.call(v2972.replace, v2972, [/&gt;/g, ">"], JAM.policy.p1);
    return JAM.call(v1901.replace, v1901, [/&amp;/g, "&"], JAM.policy.p1);
  }
  function toQueryParams(separator) {
    function v33(hash, pair) {
      var v2973 = pair = JAM.call(pair.split, pair, ["="], JAM.policy.p1);
      var v1909 = v2973[0];
      if (v1909) {
        var v1902 = JAM.call(pair.shift, pair, [], JAM.policy.p1);
        var key$$15 = decodeURIComponent(v1902);
        var v1903;
        var v3540 = pair.length;
        var v2974 = v3540 > 1;
        if (v2974) {
          v1903 = JAM.call(pair.join, pair, ["="], JAM.policy.p1);
        } else {
          v1903 = pair[0];
        }
        var value$$31 = v1903;
        var v1904 = value$$31 != undefined;
        if (v1904) {
          value$$31 = decodeURIComponent(value$$31);
        }
        var v1908 = key$$15 in hash;
        if (v1908) {
          var v3541 = hash[key$$15];
          var v2975 = JAM.call(Object.isArray, Object, [v3541], JAM.policy.p1);
          var v1906 = !v2975;
          if (v1906) {
            var v1905 = hash[key$$15];
            JAM.set(hash, key$$15, [v1905], JAM.policy.p2);
          }
          var v1907 = hash[key$$15];
          JAM.call(v1907.push, v1907, [value$$31], JAM.policy.p1);
        } else {
          JAM.set(hash, key$$15, value$$31, JAM.policy.p2);
        }
      }
      return hash;
    }
    var v1910 = JAM.call(this.strip, this, [], JAM.policy.p1);
    var match$$3 = JAM.call(v1910.match, v1910, [/([^?#]*)(#.*)?$/], JAM.policy.p1);
    var v1911 = !match$$3;
    if (v1911) {
      return{};
    }
    var v2976 = match$$3[1];
    var v2977 = separator || "&";
    var v1912 = JAM.call(v2976.split, v2976, [v2977], JAM.policy.p1);
    return JAM.call(v1912.inject, v1912, [{}, v33], JAM.policy.p1);
  }
  function toArray() {
    return JAM.call(this.split, this, [""], JAM.policy.p1);
  }
  function succ() {
    var v3542 = this.length;
    var v2978 = v3542 - 1;
    var v1913 = JAM.call(this.slice, this, [0, v2978], JAM.policy.p1);
    var v3873 = this.length;
    var v3777 = v3873 - 1;
    var v3543 = JAM.call(this.charCodeAt, this, [v3777], JAM.policy.p1);
    var v2979 = v3543 + 1;
    var v1914 = JAM.call(String.fromCharCode, String, [v2979], JAM.policy.p1);
    return v1913 + v1914;
  }
  function times(count$$4) {
    var v1915;
    var v2981 = count$$4 < 1;
    if (v2981) {
      v1915 = "";
    } else {
      var v3544 = count$$4 + 1;
      var v2980 = new Array(v3544);
      v1915 = JAM.call(v2980.join, v2980, [this], JAM.policy.p1);
    }
    return v1915;
  }
  function camelize() {
    function v34(match$$4, chr) {
      var v1916;
      if (chr) {
        v1916 = JAM.call(chr.toUpperCase, chr, [], JAM.policy.p1);
      } else {
        v1916 = "";
      }
      return v1916;
    }
    return JAM.call(this.replace, this, [/-+(.)?/g, v34], JAM.policy.p1);
  }
  function capitalize() {
    var v2982 = JAM.call(this.charAt, this, [0], JAM.policy.p1);
    var v1917 = JAM.call(v2982.toUpperCase, v2982, [], JAM.policy.p1);
    var v2983 = JAM.call(this.substring, this, [1], JAM.policy.p1);
    var v1918 = JAM.call(v2983.toLowerCase, v2983, [], JAM.policy.p1);
    return v1917 + v1918;
  }
  function underscore() {
    var v3778 = JAM.call(this.replace, this, [/::/g, "/"], JAM.policy.p1);
    var v3545 = JAM.call(v3778.replace, v3778, [/([A-Z]+)([A-Z][a-z])/g, "$1_$2"], JAM.policy.p1);
    var v2984 = JAM.call(v3545.replace, v3545, [/([a-z\d])([A-Z])/g, "$1_$2"], JAM.policy.p1);
    var v1919 = JAM.call(v2984.replace, v2984, [/-/g, "_"], JAM.policy.p1);
    return JAM.call(v1919.toLowerCase, v1919, [], JAM.policy.p1);
  }
  function dasherize() {
    return JAM.call(this.replace, this, [/_/g, "-"], JAM.policy.p1);
  }
  function inspect$$1(useDoubleQuotes) {
    function v35(character) {
      var v2985 = String.specialChar;
      var v1921 = character in v2985;
      if (v1921) {
        var v1920 = String.specialChar;
        return v1920[character];
      }
      var v2986 = JAM.call(character.charCodeAt, character, [], JAM.policy.p1);
      var v1922 = JAM.call(v2986.toPaddedString, v2986, [2, 16], JAM.policy.p1);
      return "\\u00" + v1922;
    }
    var escapedString = JAM.call(this.replace, this, [/[\x00-\x1f\\]/g, v35], JAM.policy.p1);
    if (useDoubleQuotes) {
      var v2987 = JAM.call(escapedString.replace, escapedString, [/"/g, '\\"'], JAM.policy.p1);
      var v1923 = '"' + v2987;
      return v1923 + '"';
    }
    var v2988 = JAM.call(escapedString.replace, escapedString, [/'/g, "\\'"], JAM.policy.p1);
    var v1924 = "'" + v2988;
    return v1924 + "'";
  }
  function unfilterJSON(filter) {
    var v2989 = filter;
    var v3546 = !v2989;
    if (v3546) {
      v2989 = Prototype.JSONFilter;
    }
    var v1925 = v2989;
    return JAM.call(this.replace, this, [v1925, "$1"], JAM.policy.p1);
  }
  function isJSON() {
    var str$$8 = this;
    var v1926 = JAM.call(str$$8.blank, str$$8, [], JAM.policy.p1);
    if (v1926) {
      return false;
    }
    str$$8 = JAM.call(str$$8.replace, str$$8, [/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@"], JAM.policy.p1);
    str$$8 = JAM.call(str$$8.replace, str$$8, [/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]"], JAM.policy.p1);
    str$$8 = JAM.call(str$$8.replace, str$$8, [/(?:^|:|,)(?:\s*\[)+/g, ""], JAM.policy.p1);
    return JAM.call(/^[\],:{}\s]*$/.test, /^[\],:{}\s]*$/, [str$$8], JAM.policy.p1);
  }
  function evalJSON(sanitize) {
    function v36(a$$5) {
      var v3779 = JAM.call(a$$5.charCodeAt, a$$5, [0], JAM.policy.p1);
      var v3547 = JAM.call(v3779.toString, v3779, [16], JAM.policy.p1);
      var v2990 = "0000" + v3547;
      var v1927 = JAM.call(v2990.slice, v2990, [-4], JAM.policy.p1);
      return "\\u" + v1927;
    }
    var json = JAM.call(this.unfilterJSON, this, [], JAM.policy.p1);
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var v1928 = JAM.call(cx.test, cx, [json], JAM.policy.p1);
    if (v1928) {
      json = JAM.call(json.replace, json, [cx, v36], JAM.policy.p1);
    }
    try {
      var v2991 = !sanitize;
      var v3548 = !v2991;
      if (v3548) {
        v2991 = JAM.call(json.isJSON, json, [], JAM.policy.p1);
      }
      var v1930 = v2991;
      if (v1930) {
        var v2992 = "(" + json;
        var v1929 = v2992 + ")";
        if (JAM.isEval(eval)) {
          return eval("introspect(JAM.policy.pFull) { " + v1929 + " }");
        } else {
          return JAM.call(eval, null, [v1929]);
        }
      }
    } catch (e$$6) {
    }
    var v2993 = JAM.call(this.inspect, this, [], JAM.policy.p1);
    var v1931 = "Badly formed JSON string: " + v2993;
    throw new SyntaxError(v1931);
  }
  function parseJSON() {
    var json$$1 = JAM.call(this.unfilterJSON, this, [], JAM.policy.p1);
    return JAM.call(JSON.parse, JSON, [json$$1], JAM.policy.p1);
  }
  function include(pattern$$4) {
    var v1932 = JAM.call(this.indexOf, this, [pattern$$4], JAM.policy.p1);
    return v1932 > -1;
  }
  function startsWith(pattern$$5) {
    var v1933 = JAM.call(this.lastIndexOf, this, [pattern$$5, 0], JAM.policy.p1);
    return v1933 === 0;
  }
  function endsWith(pattern$$6) {
    var v1934 = this.length;
    var v1935 = pattern$$6.length;
    var d = v1934 - v1935;
    var v1936 = d >= 0;
    if (v1936) {
      var v2994 = JAM.call(this.indexOf, this, [pattern$$6, d], JAM.policy.p1);
      v1936 = v2994 === d;
    }
    return v1936;
  }
  function empty() {
    return this == "";
  }
  function blank() {
    return JAM.call(/^\s*$/.test, /^\s*$/, [this], JAM.policy.p1);
  }
  function interpolate(object$$15, pattern$$7) {
    var v1937 = JAM.new(Template, [this, pattern$$7]);
    return JAM.call(v1937.evaluate, v1937, [object$$15], JAM.policy.p1);
  }
  var v2995 = window.JSON;
  if (v2995) {
    var v3780 = JSON.parse;
    var v3549 = typeof v3780;
    v2995 = v3549 === "function";
  }
  var v1938 = v2995;
  if (v1938) {
    var v2996 = JAM.call(JSON.parse, JSON, ['{"test": true}'], JAM.policy.p1);
    v1938 = v2996.test;
  }
  var NATIVE_JSON_PARSE_SUPPORT = v1938;
  var v3550 = String.prototype;
  var v2997 = v3550.trim;
  var v3551 = !v2997;
  if (v3551) {
    v2997 = strip;
  }
  var v1939 = v2997;
  var v2998;
  if (NATIVE_JSON_PARSE_SUPPORT) {
    v2998 = parseJSON;
  } else {
    v2998 = evalJSON;
  }
  var v1940 = v2998;
  return{gsub:gsub, sub:sub, scan:scan, truncate:truncate, strip:v1939, stripTags:stripTags, stripScripts:stripScripts, extractScripts:extractScripts, evalScripts:evalScripts, escapeHTML:escapeHTML, unescapeHTML:unescapeHTML, toQueryParams:toQueryParams, parseQuery:toQueryParams, toArray:toArray, succ:succ, times:times, camelize:camelize, capitalize:capitalize, underscore:underscore, dasherize:dasherize, inspect:inspect$$1, unfilterJSON:unfilterJSON, isJSON:isJSON, evalJSON:v1940, include:include, 
  startsWith:startsWith, endsWith:endsWith, empty:empty, blank:blank, interpolate:interpolate};
}
function v28(value$$30) {
  var v1941;
  var v2999 = value$$30 == null;
  if (v2999) {
    v1941 = "";
  } else {
    v1941 = String(value$$30);
  }
  return v1941;
}
function v27() {
  var v3000 = this.currentlyExecuting;
  var v1942 = !v3000;
  if (v1942) {
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
  var v3001 = this.timer;
  var v1943 = !v3001;
  if (v1943) {
    return;
  }
  var v1944 = this.timer;
  clearInterval(v1944);
  this.timer = null;
  return;
}
function v25() {
  JAM.call(this.callback, this, [this], JAM.policy.p1);
  return;
}
function v24() {
  var v3002 = this.onTimerEvent;
  var v1945 = JAM.call(v3002.bind, v3002, [this], JAM.policy.p1);
  var v3003 = this.frequency;
  var v1946 = v3003 * 1E3;
  var v4020 = JAM.call(setInterval, null, [v1945, v1946]);
  this.timer = v4020;
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
  var v1947 = String(str$$7);
  return JAM.call(v1947.replace, v1947, [/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"], JAM.policy.p1);
}
function v21(proto$$1) {
  function toISOString() {
    var v3962 = JAM.call(this.getUTCFullYear, this, [], JAM.policy.p1);
    var v3955 = v3962 + "-";
    var v3965 = JAM.call(this.getUTCMonth, this, [], JAM.policy.p1);
    var v3963 = v3965 + 1;
    var v3956 = JAM.call(v3963.toPaddedString, v3963, [2], JAM.policy.p1);
    var v3950 = v3955 + v3956;
    var v3945 = v3950 + "-";
    var v3951 = JAM.call(this.getUTCDate, this, [], JAM.policy.p1);
    var v3946 = JAM.call(v3951.toPaddedString, v3951, [2], JAM.policy.p1);
    var v3935 = v3945 + v3946;
    var v3920 = v3935 + "T";
    var v3936 = JAM.call(this.getUTCHours, this, [], JAM.policy.p1);
    var v3921 = JAM.call(v3936.toPaddedString, v3936, [2], JAM.policy.p1);
    var v3874 = v3920 + v3921;
    var v3781 = v3874 + ":";
    var v3875 = JAM.call(this.getUTCMinutes, this, [], JAM.policy.p1);
    var v3782 = JAM.call(v3875.toPaddedString, v3875, [2], JAM.policy.p1);
    var v3552 = v3781 + v3782;
    var v3004 = v3552 + ":";
    var v3553 = JAM.call(this.getUTCSeconds, this, [], JAM.policy.p1);
    var v3005 = JAM.call(v3553.toPaddedString, v3553, [2], JAM.policy.p1);
    var v1948 = v3004 + v3005;
    return v1948 + "Z";
  }
  function toJSON$$1() {
    return JAM.call(this.toISOString, this, [], JAM.policy.p1);
  }
  var v3006 = proto$$1.toISOString;
  var v1949 = !v3006;
  if (v1949) {
    proto$$1.toISOString = toISOString;
  }
  var v3007 = proto$$1.toJSON;
  var v1950 = !v3007;
  if (v1950) {
    proto$$1.toJSON = toJSON$$1;
  }
  return;
}
function v20() {
  function update(array$$9, args) {
    var arrayLength = array$$9.length;
    var length$$15 = args.length;
    var v1952 = length$$15;
    length$$15 = length$$15 - 1;
    for (;v1952;) {
      var v1951 = arrayLength + length$$15;
      JAM.set(array$$9, v1951, args[length$$15], JAM.policy.p2);
      v1952 = length$$15;
      length$$15 = length$$15 - 1;
    }
    return array$$9;
  }
  function merge(array$$10, args$$1) {
    array$$10 = JAM.call(slice.call, slice, [array$$10, 0], JAM.policy.p1);
    return update(array$$10, args$$1);
  }
  function argumentNames() {
    var v3876 = JAM.call(this.toString, this, [], JAM.policy.p1);
    var v3783 = JAM.call(v3876.match, v3876, [/^[\s\(]*function[^(]*\(([^)]*)\)/], JAM.policy.p1);
    var v3554 = v3783[1];
    var v3008 = JAM.call(v3554.replace, v3554, [/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, ""], JAM.policy.p1);
    var v1953 = JAM.call(v3008.replace, v3008, [/\s+/g, ""], JAM.policy.p1);
    var names = JAM.call(v1953.split, v1953, [","], JAM.policy.p1);
    var v1954;
    var v3784 = names.length;
    var v3555 = v3784 == 1;
    if (v3555) {
      var v3785 = names[0];
      v3555 = !v3785;
    }
    var v3009 = v3555;
    if (v3009) {
      v1954 = [];
    } else {
      v1954 = names;
    }
    return v1954;
  }
  function bind(context) {
    function bound$$2() {
      var a = merge(args$$2, arguments);
      var c = context;
      var v1955;
      var v3010 = this instanceof bound$$2;
      if (v3010) {
        v1955 = this;
      } else {
        v1955 = context;
      }
      c = v1955;
      return JAM.call(__method.apply, __method, [c, a], JAM.policy.p1);
    }
    function nop() {
      return;
    }
    var v3556 = arguments.length;
    var v3011 = v3556 < 2;
    if (v3011) {
      var v3557 = arguments[0];
      v3011 = JAM.call(Object.isUndefined, Object, [v3557], JAM.policy.p1);
    }
    var v1956 = v3011;
    if (v1956) {
      return this;
    }
    var v3012 = JAM.call(Object.isFunction, Object, [this], JAM.policy.p1);
    var v1957 = !v3012;
    if (v1957) {
      throw new TypeError("The object is not callable.");
    }
    var __method = this;
    var args$$2 = JAM.call(slice.call, slice, [arguments, 1], JAM.policy.p1);
    nop.prototype = this.prototype;
    var v1958 = bound$$2;
    var v4021 = new nop;
    v1958.prototype = v4021;
    return bound$$2;
  }
  function bindAsEventListener(context$$1) {
    function v15(event$$1) {
      var v3558 = event$$1;
      var v3786 = !v3558;
      if (v3786) {
        v3558 = window.event;
      }
      var v3013 = v3558;
      var v1959 = [v3013];
      var a$$1 = update(v1959, args$$3);
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
    var v3014 = arguments.length;
    var v1960 = !v3014;
    if (v1960) {
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
    var v1961 = [.01];
    var args$$6 = update(v1961, arguments);
    var v1962 = this.delay;
    return JAM.call(v1962.apply, v1962, [this, args$$6], JAM.policy.p1);
  }
  function wrap(wrapper) {
    function v18() {
      var v3015 = JAM.call(__method$$4.bind, __method$$4, [this], JAM.policy.p1);
      var v1963 = [v3015];
      var a$$3 = update(v1963, arguments);
      return JAM.call(wrapper.apply, wrapper, [this, a$$3], JAM.policy.p1);
    }
    var __method$$4 = this;
    return v18;
  }
  function methodize() {
    function v19() {
      var v1964 = [this];
      var a$$4 = update(v1964, arguments);
      return JAM.call(__method$$5.apply, __method$$5, [null, a$$4], JAM.policy.p1);
    }
    var v1965 = this._methodized;
    if (v1965) {
      return this._methodized;
    }
    var __method$$5 = this;
    return this._methodized = v19;
  }
  var v1966 = Array.prototype;
  var slice = v1966.slice;
  var extensions = {argumentNames:argumentNames, bindAsEventListener:bindAsEventListener, curry:curry, delay:delay$$3, defer:defer, wrap:wrap, methodize:methodize};
  var v3559 = Function.prototype;
  var v3016 = v3559.bind;
  var v1967 = !v3016;
  if (v1967) {
    extensions.bind = bind;
  }
  return extensions;
}
function v14() {
  function v13() {
    var p$$1;
    var v1969 = {toString:1};
    for (p$$1 in v1969) {
      var v1968 = p$$1 === "toString";
      if (v1968) {
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
      var v1970 = isUndefined(object);
      if (v1970) {
        return "undefined";
      }
      var v1971 = object === null;
      if (v1971) {
        return "null";
      }
      var v1972;
      var v3017 = object.inspect;
      if (v3017) {
        v1972 = JAM.call(object.inspect, object, [], JAM.policy.p1);
      } else {
        v1972 = String(object);
      }
      return v1972;
    } catch (e$$4) {
      var v1973 = e$$4 instanceof RangeError;
      if (v1973) {
        return "...";
      }
      throw e$$4;
    }
    return;
  }
  function toJSON(value$$28) {
    var v1974 = {"":value$$28};
    return Str("", v1974, []);
  }
  function Str(key$$14, holder, stack) {
    var value$$29 = holder[key$$14];
    var v3560 = Type(value$$29);
    var v3018 = v3560 === OBJECT_TYPE;
    if (v3018) {
      var v3787 = value$$29.toJSON;
      var v3561 = typeof v3787;
      v3018 = v3561 === "function";
    }
    var v1975 = v3018;
    if (v1975) {
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
        var v1976;
        var v3019 = isFinite(value$$29);
        if (v3019) {
          v1976 = String(value$$29);
        } else {
          v1976 = "null";
        }
        return v1976;
      case "object":
        var i$$3 = 0;
        var length$$14 = stack.length;
        var v1979 = i$$3 < length$$14;
        for (;v1979;) {
          var v3020 = stack[i$$3];
          var v1978 = v3020 === value$$29;
          if (v1978) {
            var v3021 = "Cyclic reference to '" + value$$29;
            var v1977 = v3021 + "' in object";
            throw new TypeError(v1977);
          }
          i$$3 = i$$3 + 1;
          v1979 = i$$3 < length$$14;
        }
        JAM.call(stack.push, stack, [value$$29], JAM.policy.p1);
        var partial = [];
        var v1987 = _class === ARRAY_CLASS;
        if (v1987) {
          i$$3 = 0;
          length$$14 = value$$29.length;
          var v1981 = i$$3 < length$$14;
          for (;v1981;) {
            var str$$6 = Str(i$$3, value$$29, stack);
            var v3022;
            var v3788 = typeof str$$6;
            var v3562 = v3788 === "undefined";
            if (v3562) {
              v3022 = "null";
            } else {
              v3022 = str$$6;
            }
            var v1980 = v3022;
            JAM.call(partial.push, partial, [v1980], JAM.policy.p1);
            i$$3 = i$$3 + 1;
            v1981 = i$$3 < length$$14;
          }
          var v3023 = JAM.call(partial.join, partial, [","], JAM.policy.p1);
          var v1982 = "[" + v3023;
          partial = v1982 + "]";
        } else {
          var keys$$1 = JAM.call(Object.keys, Object, [value$$29], JAM.policy.p1);
          i$$3 = 0;
          length$$14 = keys$$1.length;
          var v1985 = i$$3 < length$$14;
          for (;v1985;) {
            key$$14 = keys$$1[i$$3];
            str$$6 = Str(key$$14, value$$29, stack);
            var v3024 = typeof str$$6;
            var v1984 = v3024 !== "undefined";
            if (v1984) {
              var v3563 = JAM.call(key$$14.inspect, key$$14, [true], JAM.policy.p1);
              var v3025 = v3563 + ":";
              var v1983 = v3025 + str$$6;
              JAM.call(partial.push, partial, [v1983], JAM.policy.p1);
            }
            i$$3 = i$$3 + 1;
            v1985 = i$$3 < length$$14;
          }
          var v3026 = JAM.call(partial.join, partial, [","], JAM.policy.p1);
          var v1986 = "{" + v3026;
          partial = v1986 + "}";
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
    var v1988 = $H(object$$2);
    return JAM.call(v1988.toQueryString, v1988, [], JAM.policy.p1);
  }
  function toHTML(object$$3) {
    var v1989;
    var v3564 = object$$3;
    if (v3564) {
      v3564 = object$$3.toHTML;
    }
    var v3027 = v3564;
    if (v3027) {
      v1989 = JAM.call(object$$3.toHTML, object$$3, [], JAM.policy.p1);
    } else {
      v1989 = JAM.call(String.interpret, String, [object$$3], JAM.policy.p1);
    }
    return v1989;
  }
  function keys(object$$4) {
    var v3028 = Type(object$$4);
    var v1990 = v3028 !== OBJECT_TYPE;
    if (v1990) {
      throw new TypeError;
    }
    var results$$1 = [];
    var property$$2;
    for (property$$2 in object$$4) {
      var v1991 = JAM.call(_hasOwnProperty.call, _hasOwnProperty, [object$$4, property$$2], JAM.policy.p1);
      if (v1991) {
        JAM.call(results$$1.push, results$$1, [property$$2], JAM.policy.p1);
      }
    }
    if (IS_DONTENUM_BUGGY$$1) {
      var i$$4 = 0;
      var v1993 = property$$2 = DONT_ENUMS[i$$4];
      for (;v1993;) {
        var v1992 = JAM.call(_hasOwnProperty.call, _hasOwnProperty, [object$$4, property$$2], JAM.policy.p1);
        if (v1992) {
          JAM.call(results$$1.push, results$$1, [property$$2], JAM.policy.p1);
        }
        i$$4 = i$$4 + 1;
        v1993 = property$$2 = DONT_ENUMS[i$$4];
      }
    }
    return results$$1;
  }
  function values$$4(object$$5) {
    var results$$2 = [];
    var property$$3;
    for (property$$3 in object$$5) {
      var v1994 = object$$5[property$$3];
      JAM.call(results$$2.push, results$$2, [v1994], JAM.policy.p1);
    }
    return results$$2;
  }
  function clone(object$$6) {
    return extend({}, object$$6);
  }
  function isElement(object$$7) {
    var v3565 = object$$7;
    if (v3565) {
      var v3789 = object$$7.nodeType;
      v3565 = v3789 == 1;
    }
    var v3029 = v3565;
    var v1995 = !v3029;
    return!v1995;
  }
  function isArray(object$$8) {
    var v1996 = JAM.call(_toString.call, _toString, [object$$8], JAM.policy.p1);
    return v1996 === ARRAY_CLASS;
  }
  function isHash(object$$9) {
    return object$$9 instanceof Hash;
  }
  function isFunction(object$$10) {
    var v1997 = JAM.call(_toString.call, _toString, [object$$10], JAM.policy.p1);
    return v1997 === FUNCTION_CLASS;
  }
  function isString(object$$11) {
    var v1998 = JAM.call(_toString.call, _toString, [object$$11], JAM.policy.p1);
    return v1998 === STRING_CLASS;
  }
  function isNumber(object$$12) {
    var v1999 = JAM.call(_toString.call, _toString, [object$$12], JAM.policy.p1);
    return v1999 === NUMBER_CLASS;
  }
  function isDate(object$$13) {
    var v2000 = JAM.call(_toString.call, _toString, [object$$13], JAM.policy.p1);
    return v2000 === DATE_CLASS;
  }
  function isUndefined(object$$14) {
    var v2001 = typeof object$$14;
    return v2001 === "undefined";
  }
  var v2002 = Object.prototype;
  var _toString = v2002.toString;
  var v2003 = Object.prototype;
  var _hasOwnProperty = v2003.hasOwnProperty;
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
  var v3566 = window.JSON;
  if (v3566) {
    var v3877 = JSON.stringify;
    var v3790 = typeof v3877;
    v3566 = v3790 === "function";
  }
  var v3030 = v3566;
  if (v3030) {
    var v3567 = JAM.call(JSON.stringify, JSON, [0], JAM.policy.p1);
    v3030 = v3567 === "0";
  }
  var v2004 = v3030;
  if (v2004) {
    var v3791 = Prototype.K;
    var v3568 = JAM.call(JSON.stringify, JSON, [v3791], JAM.policy.p1);
    var v3031 = typeof v3568;
    v2004 = v3031 === "undefined";
  }
  var NATIVE_JSON_STRINGIFY_SUPPORT = v2004;
  var DONT_ENUMS = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];
  var IS_DONTENUM_BUGGY$$1 = v13();
  var v3792 = Array.isArray;
  var v3569 = typeof v3792;
  var v3032 = v3569 == "function";
  if (v3032) {
    v3032 = JAM.call(Array.isArray, Array, [[]], JAM.policy.p1);
  }
  var v2005 = v3032;
  if (v2005) {
    var v3033 = JAM.call(Array.isArray, Array, [{}], JAM.policy.p1);
    v2005 = !v3033;
  }
  var hasNativeIsArray = v2005;
  if (hasNativeIsArray) {
    isArray = Array.isArray;
  }
  var v3570;
  if (NATIVE_JSON_STRINGIFY_SUPPORT) {
    v3570 = stringify;
  } else {
    v3570 = toJSON;
  }
  var v3034 = v3570;
  var v3571 = Object.keys;
  var v3793 = !v3571;
  if (v3793) {
    v3571 = keys;
  }
  var v3035 = v3571;
  var v2006 = {extend:extend, inspect:inspect, toJSON:v3034, toQueryString:toQueryString, toHTML:toHTML, keys:v3035, values:values$$4, clone:clone, isElement:isElement, isArray:isArray, isHash:isHash, isFunction:isFunction, isString:isString, isNumber:isNumber, isDate:isDate, isUndefined:isUndefined};
  extend(Object, v2006);
  return;
}
function v12() {
  function v11() {
    var p;
    var v2008 = {toString:1};
    for (p in v2008) {
      var v2007 = p === "toString";
      if (v2007) {
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
      var v2009 = this.initialize;
      JAM.call(v2009.apply, v2009, [this, arguments], JAM.policy.p1);
      return;
    }
    var parent = null;
    var properties = $A(arguments);
    var v3036 = properties[0];
    var v2010 = JAM.call(Object.isFunction, Object, [v3036], JAM.policy.p1);
    if (v2010) {
      parent = JAM.call(properties.shift, properties, [], JAM.policy.p1);
    }
    var v2011 = Class.Methods;
    JAM.call(Object.extend, Object, [klass, v2011], JAM.policy.p1);
    klass.superclass = parent;
    klass.subclasses = [];
    if (parent) {
      subclass.prototype = parent.prototype;
      var v2012 = klass;
      var v4022 = new subclass;
      v2012.prototype = v4022;
      var v2013 = parent.subclasses;
      JAM.call(v2013.push, v2013, [klass], JAM.policy.p1);
    }
    var i$$1 = 0;
    var length$$12 = properties.length;
    var v2015 = i$$1 < length$$12;
    for (;v2015;) {
      var v2014 = properties[i$$1];
      JAM.call(klass.addMethods, klass, [v2014], JAM.policy.p1);
      i$$1 = i$$1 + 1;
      v2015 = i$$1 < length$$12;
    }
    var v3572 = klass.prototype;
    var v3037 = v3572.initialize;
    var v2017 = !v3037;
    if (v2017) {
      var v2016 = klass.prototype;
      v2016.initialize = Prototype.emptyFunction;
    }
    var v2018 = klass.prototype;
    v2018.constructor = klass;
    return klass;
  }
  function addMethods(source$$1) {
    function v10(method$$3) {
      function v9() {
        var v2019 = method$$3.toString;
        return JAM.call(v2019.call, v2019, [method$$3], JAM.policy.p1);
      }
      return v9;
    }
    function v8(method$$2) {
      function v7() {
        var v2020 = method$$2.valueOf;
        return JAM.call(v2020.call, v2020, [method$$2], JAM.policy.p1);
      }
      return v7;
    }
    function v6(m) {
      function v5() {
        var v2021 = ancestor[m];
        return JAM.call(v2021.apply, v2021, [this, arguments], JAM.policy.p1);
      }
      return v5;
    }
    var v2022 = this.superclass;
    if (v2022) {
      var v3038 = this.superclass;
      v2022 = v3038.prototype;
    }
    var ancestor = v2022;
    var properties$$1 = JAM.call(Object.keys, Object, [source$$1], JAM.policy.p1);
    if (IS_DONTENUM_BUGGY) {
      var v3039 = source$$1.toString;
      var v3573 = Object.prototype;
      var v3040 = v3573.toString;
      var v2023 = v3039 != v3040;
      if (v2023) {
        JAM.call(properties$$1.push, properties$$1, ["toString"], JAM.policy.p1);
      }
      var v3041 = source$$1.valueOf;
      var v3574 = Object.prototype;
      var v3042 = v3574.valueOf;
      var v2024 = v3041 != v3042;
      if (v2024) {
        JAM.call(properties$$1.push, properties$$1, ["valueOf"], JAM.policy.p1);
      }
    }
    var i$$2 = 0;
    var length$$13 = properties$$1.length;
    var v2030 = i$$2 < length$$13;
    for (;v2030;) {
      var property = properties$$1[i$$2];
      var value$$27 = source$$1[property];
      var v3575 = ancestor;
      if (v3575) {
        v3575 = JAM.call(Object.isFunction, Object, [value$$27], JAM.policy.p1);
      }
      var v3043 = v3575;
      if (v3043) {
        var v3794 = JAM.call(value$$27.argumentNames, value$$27, [], JAM.policy.p1);
        var v3576 = v3794[0];
        v3043 = v3576 == "$super";
      }
      var v2028 = v3043;
      if (v2028) {
        var method$$1 = value$$27;
        var v2025 = v6(property);
        value$$27 = JAM.call(v2025.wrap, v2025, [method$$1], JAM.policy.p1);
        var v2026 = value$$27;
        var v4023 = v8(method$$1);
        v2026.valueOf = v4023;
        var v2027 = value$$27;
        var v4024 = v10(method$$1);
        v2027.toString = v4024;
      }
      var v2029 = this.prototype;
      JAM.set(v2029, property, value$$27, JAM.policy.p2);
      i$$2 = i$$2 + 1;
      v2030 = i$$2 < length$$13;
    }
    return this;
  }
  var IS_DONTENUM_BUGGY = v11();
  var v2031 = {addMethods:addMethods};
  return{create:create, Methods:v2031};
}
function v4(x$$47) {
  return x$$47;
}
function v3() {
  return;
}
function v2() {
  var v3577 = window.HTMLDivElement;
  var v3044 = typeof v3577;
  var v2032 = v3044 !== "undefined";
  if (v2032) {
    return true;
  }
  var div = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
  var form = JAM.call(document.createElement, document, ["form"], JAM.policy.p1);
  var isSupported = false;
  var v3045 = div["__proto__"];
  if (v3045) {
    var v3578 = div["__proto__"];
    var v3579 = form["__proto__"];
    v3045 = v3578 !== v3579;
  }
  var v2033 = v3045;
  if (v2033) {
    isSupported = true;
  }
  div = form = null;
  return isSupported;
}
function v1() {
  var v2034 = window.Element;
  var v3046 = !v2034;
  if (v3046) {
    v2034 = window.HTMLElement;
  }
  var constructor = v2034;
  var v3580 = constructor;
  if (v3580) {
    v3580 = constructor.prototype;
  }
  var v3047 = v3580;
  var v2035 = !v3047;
  return!v2035;
}
function v0() {
  var ua = navigator.userAgent;
  var v3581 = Object.prototype;
  var v3048 = v3581.toString;
  var v3049 = window.opera;
  var v2036 = JAM.call(v3048.call, v3048, [v3049], JAM.policy.p1);
  var isOpera = v2036 == "[object Opera]";
  var v3795 = window.attachEvent;
  var v3582 = !v3795;
  var v3050 = !v3582;
  if (v3050) {
    v3050 = !isOpera;
  }
  var v2037 = v3050;
  var v3051 = JAM.call(ua.indexOf, ua, ["AppleWebKit/"], JAM.policy.p1);
  var v2038 = v3051 > -1;
  var v3583 = JAM.call(ua.indexOf, ua, ["Gecko"], JAM.policy.p1);
  var v3052 = v3583 > -1;
  if (v3052) {
    var v3584 = JAM.call(ua.indexOf, ua, ["KHTML"], JAM.policy.p1);
    v3052 = v3584 === -1;
  }
  var v2039 = v3052;
  var v2040 = JAM.call(/Apple.*Mobile/.test, /Apple.*Mobile/, [ua], JAM.policy.p1);
  return{IE:v2037, Opera:isOpera, WebKit:v2038, Gecko:v2039, MobileSafari:v2040};
}
function $A(iterable) {
  var v2041 = !iterable;
  if (v2041) {
    return[];
  }
  var v3053 = Object(iterable);
  var v2042 = "toArray" in v3053;
  if (v2042) {
    return JAM.call(iterable.toArray, iterable, [], JAM.policy.p1);
  }
  var v2043 = iterable.length;
  var v3054 = !v2043;
  if (v3054) {
    v2043 = 0;
  }
  var length$$11 = v2043;
  var results = new Array(length$$11);
  var v2044 = length$$11;
  length$$11 = length$$11 - 1;
  for (;v2044;) {
    JAM.set(results, length$$11, iterable[length$$11], JAM.policy.p2);
    v2044 = length$$11;
    length$$11 = length$$11 - 1;
  }
  return results;
}
function $w(string) {
  var v3055 = JAM.call(Object.isString, Object, [string], JAM.policy.p1);
  var v2045 = !v3055;
  if (v2045) {
    return[];
  }
  string = JAM.call(string.strip, string, [], JAM.policy.p1);
  var v2046;
  if (string) {
    v2046 = JAM.call(string.split, string, [/\s+/], JAM.policy.p1);
  } else {
    v2046 = [];
  }
  return v2046;
}
function $H(object$$22) {
  return JAM.new(Hash, [object$$22]);
}
function $R(start$$4, end$$1, exclusive) {
  return JAM.new(ObjectRange, [start$$4, end$$1, exclusive]);
}
var v2047 = v0();
var v3796 = document.evaluate;
var v3585 = !v3796;
var v3056 = !v3585;
var v3797 = document.querySelector;
var v3586 = !v3797;
var v3057 = !v3586;
var v3058 = v1();
var v3059 = v2();
var v2048 = {XPath:v3056, SelectorsAPI:v3057, ElementExtensions:v3058, SpecificElementExtensions:v3059};
var Prototype = {Version:"1.7.1", Browser:v2047, BrowserFeatures:v2048, ScriptFragment:"<script[^>]*>([\\S\\s]*?)\x3c/script\\s*>", JSONFilter:/^\/\*-secure-([\s\S]*)\*\/\s*$/, emptyFunction:v3, K:v4};
var v3060 = Prototype.Browser;
var v2050 = v3060.MobileSafari;
if (v2050) {
  var v2049 = Prototype.BrowserFeatures;
  v2049.SpecificElementExtensions = false;
}
var Class = v12();
v14();
var v2051 = Function.prototype;
var v2052 = v20();
JAM.call(Object.extend, Object, [v2051, v2052], JAM.policy.p1);
var v2053 = Date.prototype;
v21(v2053);
var v2054 = RegExp.prototype;
var v3061 = RegExp.prototype;
v2054.match = v3061.test;
RegExp.escape = v22;
var v2055 = {initialize:v23, registerCallback:v24, execute:v25, stop:v26, onTimerEvent:v27};
var PeriodicalExecuter = JAM.call(Class.create, Class, [v2055], JAM.policy.p1);
var v3062 = {"\b":"\\b", "\t":"\\t", "\n":"\\n", "\f":"\\f", "\r":"\\r", "\\":"\\\\"};
var v2056 = {interpret:v28, specialChar:v3062};
JAM.call(Object.extend, Object, [String, v2056], JAM.policy.p1);
var v2057 = String.prototype;
var v2058 = v37();
JAM.call(Object.extend, Object, [v2057, v2058], JAM.policy.p1);
var v2059 = {initialize:v38, evaluate:v40};
var Template = JAM.call(Class.create, Class, [v2059], JAM.policy.p1);
Template.Pattern = /(^|.|\r|\n)(#\{(.*?)\})/;
var $break = {};
var Enumerable = v59();
Array.from = $A;
v67();
var v2060 = v72();
var Hash = JAM.call(Class.create, Class, [Enumerable, v2060], JAM.policy.p1);
Hash.from = $H;
var v2061 = Number.prototype;
var v2062 = v73();
JAM.call(Object.extend, Object, [v2061, v2062], JAM.policy.p1);
var v2063 = v74();
var ObjectRange = JAM.call(Class.create, Class, [Enumerable, v2063], JAM.policy.p1);
var Abstract = {};
var Try = {these:v75};
var Ajax = {getTransport:v79, activeRequestCount:0};
Ajax.Responders = {responders:[], _each:v80, register:v81, unregister:v82, dispatch:v84};
var v2064 = Ajax.Responders;
JAM.call(Object.extend, Object, [v2064, Enumerable], JAM.policy.p1);
var v2065 = Ajax.Responders;
var v2066 = {onCreate:v85, onComplete:v86};
JAM.call(v2065.register, v2065, [v2066], JAM.policy.p1);
var v2067 = Ajax;
var v3063 = {initialize:v87};
var v4025 = JAM.call(Class.create, Class, [v3063], JAM.policy.p1);
v2067.Base = v4025;
var v2068 = Ajax;
var v3064 = Ajax.Base;
var v3065 = {_complete:false, initialize:v88, request:v89, onStateChange:v90, setRequestHeaders:v92, success:v93, getStatus:v94, respondToReadyState:v95, isSameOrigin:v96, getHeader:v97, evalResponse:v98, dispatchException:v99};
var v4026 = JAM.call(Class.create, Class, [v3064, v3065], JAM.policy.p1);
v2068.Request = v4026;
var v2069 = Ajax.Request;
v2069.Events = ["Uninitialized", "Loading", "Loaded", "Interactive", "Complete"];
var v2070 = Ajax;
var v3878 = Ajax.Request;
var v3798 = v3878.prototype;
var v3587 = v3798.getStatus;
var v3879 = Ajax.Request;
var v3799 = v3879.prototype;
var v3588 = v3799.getHeader;
var v3066 = {initialize:v100, status:0, statusText:"", getStatus:v3587, getStatusText:v101, getHeader:v3588, getAllHeaders:v102, getResponseHeader:v103, getAllResponseHeaders:v104, _getHeaderJSON:v105, _getResponseJSON:v106};
var v4027 = JAM.call(Class.create, Class, [v3066], JAM.policy.p1);
v2070.Response = v4027;
var v2071 = Ajax;
var v3067 = Ajax.Request;
var v3068 = {initialize:v108, updateContent:v109};
var v4028 = JAM.call(Class.create, Class, [v3067, v3068], JAM.policy.p1);
v2071.Updater = v4028;
var v2072 = Ajax;
var v3069 = Ajax.Base;
var v3070 = {initialize:v110, start:v111, stop:v112, updateComplete:v113, onTimerEvent:v114};
var v4029 = JAM.call(Class.create, Class, [v3069, v3070], JAM.policy.p1);
v2072.PeriodicalUpdater = v4029;
v134(this);
v187();
v188();
window.$$ = v189;
var v2073 = Prototype;
var v4030 = v190();
v2073.Selector = v4030;
v269();
Prototype._original_property = window.Sizzle;
v270(Sizzle);
window.Sizzle = Prototype._original_property;
delete Prototype._original_property;
var Form = {reset:v271, serializeElements:v275};
Form.Methods = {serialize:v276, getElements:v277, getInputs:v278, disable:v279, enable:v280, findFirstElement:v285, focusFirstElement:v286, request:v287};
Form.Element = {focus:v288, select:v289};
var v2074 = Form.Element;
v2074.Methods = {serialize:v290, getValue:v291, setValue:v292, clear:v293, present:v294, activate:v295, disable:v296, enable:v297};
var Field = Form.Element;
var v3071 = Form.Element;
var v2075 = v3071.Methods;
var $F = v2075.getValue;
var v2076 = Form.Element;
var v4031 = v298();
v2076.Serializers = v4031;
var v2077 = Abstract;
var v3072 = {initialize:v299, execute:v300};
var v4032 = JAM.call(Class.create, Class, [PeriodicalExecuter, v3072], JAM.policy.p1);
v2077.TimedObserver = v4032;
var v2078 = Form.Element;
var v3073 = Abstract.TimedObserver;
var v3074 = {getValue:v301};
var v4033 = JAM.call(Class.create, Class, [v3073, v3074], JAM.policy.p1);
v2078.Observer = v4033;
var v2079 = Form;
var v3075 = Abstract.TimedObserver;
var v3076 = {getValue:v302};
var v4034 = JAM.call(Class.create, Class, [v3075, v3076], JAM.policy.p1);
v2079.Observer = v4034;
var v2080 = Abstract;
var v3077 = {initialize:v303, onElementEvent:v304, registerFormCallbacks:v305, registerCallback:v306};
var v4035 = JAM.call(Class.create, Class, [v3077], JAM.policy.p1);
v2080.EventObserver = v4035;
var v2081 = Form.Element;
var v3078 = Abstract.EventObserver;
var v3079 = {getValue:v307};
var v4036 = JAM.call(Class.create, Class, [v3078, v3079], JAM.policy.p1);
v2081.EventObserver = v4036;
var v2082 = Form;
var v3080 = Abstract.EventObserver;
var v3081 = {getValue:v308};
var v4037 = JAM.call(Class.create, Class, [v3080, v3081], JAM.policy.p1);
v2082.EventObserver = v4037;
v322(this);
v326(this);
v327(this);
JAM.call(Element.addMethods, Element, [], JAM.policy.p1);
Hash.toQueryString = Object.toQueryString;
var v2083 = Element.toggle;
var Toggle = {display:v2083};
var v2084 = Element.Methods;
var v3082 = Element.Methods;
v2084.childOf = v3082.descendantOf;
var Insertion = {Before:v328, Top:v329, Bottom:v330, After:v331};
var $continue = new Error('"throw $continue" is deprecated, use "return" instead');
var v3083 = Element.Methods;
var v2085 = v3083.cumulativeOffset;
var v3084 = Element.Methods;
var v2086 = v3084.positionedOffset;
var v3085 = Element.Methods;
var v2087 = v3085.cumulativeScrollOffset;
var v3086 = Element.Methods;
var v2088 = v3086.getOffsetParent;
var v3087 = Element.Methods;
var v2089 = v3087.viewportOffset;
var Position = {includeScrollOffsets:false, prepare:v332, within:v333, withinIncludingScrolloffsets:v334, overlap:v335, cumulativeOffset:v2085, positionedOffset:v2086, absolutize:v336, relativize:v337, realOffset:v2087, offsetParent:v2088, page:v2089, clone:v338};
var v3088 = document.getElementsByClassName;
var v2091 = !v3088;
if (v2091) {
  var v2090 = document;
  var v3089 = Element.Methods;
  var v4038 = v343(v3089);
  v2090.getElementsByClassName = v4038;
}
var v2092 = Element;
var v4039 = JAM.call(Class.create, Class, [], JAM.policy.p1);
v2092.ClassNames = v4039;
var v2093 = Element.ClassNames;
v2093.prototype = {initialize:v344, _each:v346, set:v347, add:v348, remove:v349, toString:v350};
var v3090 = Element.ClassNames;
var v2094 = v3090.prototype;
JAM.call(Object.extend, Object, [v2094, Enumerable], JAM.policy.p1);
v359();
var cram = v392();
JAM.call(cram.load, cram, [], JAM.policy.p1);
var v2095 = document;
var v4040 = JAM.call(cram.getel, cram, ["supercookie"], JAM.policy.p1);
introspect(JAM.policy.p2) {
  v2095.cookie = v4040;
}
