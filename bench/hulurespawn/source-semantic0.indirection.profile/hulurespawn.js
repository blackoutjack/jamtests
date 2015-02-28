
JAM.startProfile('load');
function v392() {
  function v391(key$$37) {
    if (store$$1) {
      JAM.call(store$$1.remove, store$$1, [key$$37], JAM.policy.p1);
    }
    return;
  }
  function v390(key$$36, value$$101) {
    if (store$$1) {
      var v2080 = JAM.call(Object.toJSON, Object, [value$$101], JAM.policy.p1);
      var v393 = escape(v2080);
      JAM.call(store$$1.set, store$$1, [key$$36, v393], JAM.policy.p1);
    }
    return;
  }
  function v389(key$$35) {
    var r = null;
    if (store$$1) {
      var v394 = JAM.call(store$$1.getel, store$$1, [key$$35], JAM.policy.p1);
      var v2081 = !v394;
      if (v2081) {
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
    var v396 = v2082;
    if (v396) {
      JAM.call(store$$1.free, store$$1, [], JAM.policy.p1);
    }
    JAM.call(document.fire, document, ["cram:unload"], JAM.policy.p1);
    return;
  }
  function v386() {
    var v397 = !store$$1;
    return !v397;
  }
  function v385() {
    var i$$66 = 0;
    var v2083 = order.length;
    var v400 = i$$66 < v2083;
    for (;v400;) {
      var v398 = order[i$$66];
      var method$$10 = methods$$8[v398];
      var v399 = JAM.call(method$$10.valid, method$$10, [], JAM.policy.p1);
      if (v399) {
        store$$1 = new method$$10;
        break;
      }
      i$$66++;
      var v2084 = order.length;
      v400 = i$$66 < v2084;
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
      var v401 = v2085;
      if (v401) {
        JAM.call(swf.remove, swf, [k$$9], JAM.policy.p1);
      }
      return;
    }
    function v381(k$$8, v$$2) {
      var v2086 = swf;
      if (v2086) {
        v2086 = swf.set;
      }
      var v402 = v2086;
      if (v402) {
        JAM.call(swf.set, swf, [k$$8, v$$2], JAM.policy.p1);
      }
      return;
    }
    function v380(k$$7) {
      var v2087 = swf;
      if (v2087) {
        v2087 = swf.get;
      }
      var v403 = v2087;
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
    var JSCompiler_temp$$3;
    var v3058 = window.ActiveXObject;
    var v2088 = !v3058;
    var v413 = JSCompiler_temp$$3 = !v2088;
    if (v413) {
      var JSCompiler_inline_result$$4;
      JSCompiler_inline_label_msieVersion_86: {
        var reg$$inline_85 = /MSIE ([0-9]+[\.0-9]*)/;
        var v3059 = navigator.appName;
        var v2089 = v3059 == "Microsoft Internet Explorer";
        if (v2089) {
          var v3060 = navigator.userAgent;
          v2089 = JAM.call(reg$$inline_85.test, reg$$inline_85, [v3060], JAM.policy.p1);
        }
        var v412 = v2089;
        if (v412) {
          var v411 = RegExp.$1;
          JSCompiler_inline_result$$4 = parseFloat(v411);
          break JSCompiler_inline_label_msieVersion_86;
        }
        JSCompiler_inline_result$$4 = 0;
      }
      JSCompiler_temp$$3 = JSCompiler_inline_result$$4 >= 7;
    }
    return JSCompiler_temp$$3;
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
      var v2090 = window.localStorage;
      v414 = v2090.getItem;
    }
    return v414;
  }
  function v365(valid, init) {
    function v364() {
      return;
    }
    var k$$2 = init || v364;
    var v415 = valid;
    var v2091 = !v415;
    if (v2091) {
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
      var v417 = this.store;
      delete v417[key$$32];
      return;
    }
    function v361(key$$31, value$$99) {
      var v418 = this.store;
      introspect(JAM.policy.p2) {
        v418[key$$31] = value$$99;
      }
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
    var v2092 = document.createElement;
    var v420 = !v2092;
    if (v420) {
      return null;
    }
    var body$$2 = JAM.call(document.getElementsByTagName, document, ["body"], JAM.policy.p1);
    var v421;
    var v3061 = body$$2.length;
    var v2093 = v3061 > 0;
    if (v2093) {
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
      var v3062 = Prototype.Selector;
      var v2094 = JAM.call(v3062.match, v3062, [element$$215, expression$$10], JAM.policy.p1);
      if (v2094) {
        var v3063 = matchIndex$$1;
        matchIndex$$1 = matchIndex$$1 + 1;
        v2094 = index$$63 === v3063;
      }
      var v429 = v2094;
      if (v429) {
        return JAM.call(Element.extend, Element, [element$$215], JAM.policy.p1);
      }
      i$$65++;
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
      i$$64++;
      v434 = i$$64 < length$$34;
    }
    return results$$20;
  }
  function v355() {
    var v2095 = this.expression;
    var v435 = "#<Selector: " + v2095;
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
    var v3924 = JAM.call(expression$$8.strip, expression$$8, [], JAM.policy.p1);
    this.expression = v3924;
    return;
  }
  var v440 = window;
  var v2096 = {initialize:v351, findElements:v352, match:v353, toString:v354, inspect:v355};
  var v3925 = JAM.call(Class.create, Class, [v2096], JAM.policy.p1);
  v440.Selector = v3925;
  var v441 = {matchElements:v356, findElement:v357, findChildElements:v358};
  JAM.call(Object.extend, Object, [Selector, v441], JAM.policy.p1);
  return;
}
function v350() {
  var v442 = $A(this);
  return JAM.call(v442.join, v442, [" "], JAM.policy.p1);
}
function v349(classNameToRemove) {
  var v2097 = JAM.call(this.include, this, [classNameToRemove], JAM.policy.p1);
  var v443 = !v2097;
  if (v443) {
    return;
  }
  var v3064 = $A(this);
  var v2098 = JAM.call(v3064.without, v3064, [classNameToRemove], JAM.policy.p1);
  var v444 = JAM.call(v2098.join, v2098, [" "], JAM.policy.p1);
  JAM.call(this.set, this, [v444], JAM.policy.p1);
  return;
}
function v348(classNameToAdd) {
  var v445 = JAM.call(this.include, this, [classNameToAdd], JAM.policy.p1);
  if (v445) {
    return;
  }
  var v3065 = $A(this);
  var v2099 = JAM.call(v3065.concat, v3065, [classNameToAdd], JAM.policy.p1);
  var v446 = JAM.call(v2099.join, v2099, [" "], JAM.policy.p1);
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
  var v3551 = this.element;
  var v3066 = v3551.className;
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
    var v3552 = !v3067;
    if (v3552) {
      v3067 = document.body;
    }
    var v2101 = v3067;
    var v450 = JAM.call($, null, [v2101], JAM.policy.p1);
    return JAM.call(v450.getElementsByClassName, v450, [className$$7], JAM.policy.p1);
  }
  function v341(element$$211, className$$6) {
    function v340(name$$47) {
      var v3068 = JAM.call(name$$47.toString, name$$47, [], JAM.policy.p1);
      var v2102 = JAM.call(v3068.blank, v3068, [], JAM.policy.p1);
      var v451 = !v2102;
      if (v451) {
        var v3069 = " " + name$$47;
        var v2103 = v3069 + " ";
        v451 = JAM.call(cn.include, cn, [v2103], JAM.policy.p1);
      }
      return v451;
    }
    var v452 = JAM.call(className$$6.toString, className$$6, [], JAM.policy.p1);
    className$$6 = JAM.call(v452.strip, v452, [], JAM.policy.p1);
    var elements$$9 = [];
    var v453;
    var v2104 = JAM.call(/\s/.test, /\s/, [className$$6], JAM.policy.p1);
    if (v2104) {
      v453 = $w(className$$6);
    } else {
      v453 = null;
    }
    var classNames$$2 = v453;
    var v2105 = !classNames$$2;
    if (v2105) {
      v2105 = !className$$6;
    }
    var v454 = v2105;
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
      var v3070 = child$$2.className;
      if (v3070) {
        var v3761 = child$$2.className;
        var v3553 = " " + v3761;
        v3070 = cn = v3553 + " ";
      }
      var v2106 = v3070;
      if (v2106) {
        var v3071 = JAM.call(cn.include, cn, [className$$6], JAM.policy.p1);
        var v3555 = !v3071;
        if (v3555) {
          var v3554 = classNames$$2;
          if (v3554) {
            v3554 = JAM.call(classNames$$2.all, classNames$$2, [v340], JAM.policy.p1);
          }
          v3071 = v3554;
        }
        v2106 = v3071;
      }
      var v458 = v2106;
      if (v458) {
        var v457 = JAM.call(Element.extend, Element, [child$$2], JAM.policy.p1);
        JAM.call(elements$$9.push, elements$$9, [v457], JAM.policy.p1);
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
    var v2108 = JAM.call(/\s/.test, /\s/, [className$$5], JAM.policy.p1);
    if (v2108) {
      var v3072 = $w(className$$5);
      var v2107 = JAM.call(v3072.map, v3072, [iter], JAM.policy.p1);
      v461 = JAM.call(v2107.join, v2107, [""], JAM.policy.p1);
    } else {
      v461 = iter(className$$5);
    }
    var cond = v461;
    var v462;
    if (cond) {
      var v2109 = ".//*" + cond;
      v462 = JAM.call(document._getElementsByXPath, document, [v2109, element$$210], JAM.policy.p1);
    } else {
      v462 = [];
    }
    return v462;
  }
  function iter(name$$46) {
    var v463;
    var v2111 = JAM.call(name$$46.blank, name$$46, [], JAM.policy.p1);
    if (v2111) {
      v463 = null;
    } else {
      var v2110 = "[contains(concat(' ', @class, ' '), ' " + name$$46;
      v463 = v2110 + " ')]";
    }
    return v463;
  }
  var v464;
  var v3073 = Prototype.BrowserFeatures;
  var v2112 = v3073.XPath;
  if (v2112) {
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
    var v3556 = this.offset;
    var v3074 = v3556[1];
    var v3075 = element$$207.offsetHeight;
    var v2113 = v3074 + v3075;
    var v2114 = this.ycomp;
    var v466 = v2113 - v2114;
    var v467 = element$$207.offsetHeight;
    return v466 / v467;
  }
  var v471 = mode$$7 == "horizontal";
  if (v471) {
    var v3557 = this.offset;
    var v3076 = v3557[0];
    var v3077 = element$$207.offsetWidth;
    var v2115 = v3076 + v3077;
    var v2116 = this.xcomp;
    var v469 = v2115 - v2116;
    var v470 = element$$207.offsetWidth;
    return v469 / v470;
  }
  return;
}
function v334(element$$206, x$$50, y$$32) {
  var offsetcache = JAM.call(Element.cumulativeScrollOffset, Element, [element$$206], JAM.policy.p1);
  var v2117 = offsetcache[0];
  var v472 = x$$50 + v2117;
  var v473 = this.deltaX;
  this.xcomp = v472 - v473;
  var v2118 = offsetcache[1];
  var v474 = y$$32 + v2118;
  var v475 = this.deltaY;
  this.ycomp = v474 - v475;
  var v3927 = JAM.call(Element.cumulativeOffset, Element, [element$$206], JAM.policy.p1);
  this.offset = v3927;
  var v3558 = this.ycomp;
  var v3762 = this.offset;
  var v3559 = v3762[1];
  var v3078 = v3558 >= v3559;
  if (v3078) {
    var v3560 = this.ycomp;
    var v3837 = this.offset;
    var v3763 = v3837[1];
    var v3764 = element$$206.offsetHeight;
    var v3561 = v3763 + v3764;
    v3078 = v3560 < v3561;
  }
  var v2119 = v3078;
  if (v2119) {
    var v3079 = this.xcomp;
    var v3562 = this.offset;
    var v3080 = v3562[0];
    v2119 = v3079 >= v3080;
  }
  var v476 = v2119;
  if (v476) {
    var v2120 = this.xcomp;
    var v3563 = this.offset;
    var v3081 = v3563[0];
    var v3082 = element$$206.offsetWidth;
    var v2121 = v3081 + v3082;
    v476 = v2120 < v2121;
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
  var v3928 = JAM.call(Element.cumulativeOffset, Element, [element$$205], JAM.policy.p1);
  this.offset = v3928;
  var v3765 = this.offset;
  var v3564 = v3765[1];
  var v3083 = y$$31 >= v3564;
  if (v3083) {
    var v3838 = this.offset;
    var v3766 = v3838[1];
    var v3767 = element$$205.offsetHeight;
    var v3565 = v3766 + v3767;
    v3083 = y$$31 < v3565;
  }
  var v2122 = v3083;
  if (v2122) {
    var v3566 = this.offset;
    var v3084 = v3566[0];
    v2122 = x$$49 >= v3084;
  }
  var v478 = v2122;
  if (v478) {
    var v3567 = this.offset;
    var v3085 = v3567[0];
    var v3086 = element$$205.offsetWidth;
    var v2123 = v3085 + v3086;
    v478 = x$$49 < v2123;
  }
  return v478;
}
function v332() {
  var v3087 = window.pageXOffset;
  var v3569 = !v3087;
  if (v3569) {
    var v3568 = document.documentElement;
    v3087 = v3568.scrollLeft;
  }
  var v2124 = v3087;
  var v3089 = !v2124;
  if (v3089) {
    var v3088 = document.body;
    v2124 = v3088.scrollLeft;
  }
  var v479 = v2124;
  var v2125 = !v479;
  if (v2125) {
    v479 = 0;
  }
  this.deltaX = v479;
  var v3090 = window.pageYOffset;
  var v3571 = !v3090;
  if (v3571) {
    var v3570 = document.documentElement;
    v3090 = v3570.scrollTop;
  }
  var v2126 = v3090;
  var v3092 = !v2126;
  if (v3092) {
    var v3091 = document.body;
    v2126 = v3091.scrollTop;
  }
  var v480 = v2126;
  var v2127 = !v480;
  if (v2127) {
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
    var v2128 = document.readyState;
    var v486 = v2128 === "complete";
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
    var v2129 = !MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED$$1;
    if (v2129) {
      var v3093 = eventName$$19 === "mouseenter";
      var v3572 = !v3093;
      if (v3572) {
        v3093 = eventName$$19 === "mouseleave";
      }
      v2129 = v3093;
    }
    var v492 = v2129;
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
      var v2130 = event$$26.eventName;
      var v494 = JAM.call(Object.isUndefined, Object, [v2130], JAM.policy.p1);
      if (v494) {
        return false;
      }
      var v2131 = event$$26.eventName;
      var v495 = v2131 !== eventName$$20;
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
    var v511 = !event$$23;
    if (v511) {
      return false;
    }
    var v2134 = JAM.call(isIELegacyEvent, null, [event$$23], JAM.policy.p1);
    var v512 = !v2134;
    if (v512) {
      return event$$23;
    }
    var v513 = event$$23._extendedByPrototype;
    if (v513) {
      return event$$23;
    }
    event$$23._extendedByPrototype = Prototype.emptyFunction;
    var pointer$$1 = JAM.call(Event$$1.pointer, Event$$1, [event$$23], JAM.policy.p1);
    var v3094 = event$$23.srcElement;
    var v3573 = !v3094;
    if (v3573) {
      v3094 = element$$195;
    }
    var v2135 = v3094;
    var v2136 = JAM.call(_relatedTarget, null, [event$$23], JAM.policy.p1);
    var v2137 = pointer$$1.x;
    var v2138 = pointer$$1.y;
    var v514 = {target:v2135, relatedTarget:v2136, pageX:v2137, pageY:v2138};
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
    var v2139 = Event$$1.Methods;
    var v516 = v2139[name$$45];
    var v3931 = JAM.call(v516.methodize, v516, [], JAM.policy.p1);
    introspect(JAM.policy.p2) {
      m$$5[name$$45] = v3931;
    }
    return m$$5;
  }
  function v311(event$$21, code$$5) {
    var v517;
    var v2140 = JAM.call(isIELegacyEvent, null, [event$$21], JAM.policy.p1);
    if (v2140) {
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
    var v2141 = window.Event;
    var v518 = event$$19 instanceof v2141;
    return !v518;
  }
  function isIELegacyEvent(event$$18) {
    return false;
  }
  function _isButtonForDOMEvents(event$$2, code$$2) {
    var v519;
    var v2145 = event$$2.which;
    if (v2145) {
      var v2142 = event$$2.which;
      var v2143 = code$$2 + 1;
      v519 = v2142 === v2143;
    } else {
      var v2144 = event$$2.button;
      v519 = v2144 === code$$2;
    }
    return v519;
  }
  function _isButtonForLegacyEvents(event$$3, code$$3) {
    var v520 = event$$3.button;
    var v521 = legacyButtonMap[code$$3];
    return v520 === v521;
  }
  function _isButtonForWebKit(event$$4, code$$4) {
    switch(code$$4) {
      case 0:
        var v2146 = event$$4.which;
        var v522 = v2146 == 1;
        if (v522) {
          var v2147 = event$$4.metaKey;
          v522 = !v2147;
        }
        return v522;
      case 1:
        var v2148 = event$$4.which;
        var v523 = v2148 == 2;
        var v2150 = !v523;
        if (v2150) {
          var v3095 = event$$4.which;
          var v2149 = v3095 == 1;
          if (v2149) {
            v2149 = event$$4.metaKey;
          }
          v523 = v2149;
        }
        return v523;
      case 2:
        var v524 = event$$4.which;
        return v524 == 3;
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
    var v525 = _element(event$$8);
    return JAM.call(Element.extend, Element, [v525], JAM.policy.p1);
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
    var v527 = v2151;
    if (v527) {
      var v3096 = type$$33 === "load";
      var v3574 = !v3096;
      if (v3574) {
        v3096 = type$$33 === "error";
      }
      var v2152 = v3096;
      var v3098 = !v2152;
      if (v3098) {
        var v3575 = type$$33 === "click";
        if (v3575) {
          var v3839 = currentTarget.tagName;
          var v3768 = JAM.call(v3839.toLowerCase, v3839, [], JAM.policy.p1);
          v3575 = v3768 === "input";
        }
        var v3097 = v3575;
        if (v3097) {
          var v3576 = currentTarget.type;
          v3097 = v3576 === "radio";
        }
        v2152 = v3097;
      }
      var v526 = v2152;
      if (v526) {
        node$$19 = currentTarget;
      }
    }
    var v2153 = node$$19.nodeType;
    var v2154 = Node.TEXT_NODE;
    var v528 = v2153 == v2154;
    if (v528) {
      node$$19 = node$$19.parentNode;
    }
    return JAM.call(Element.extend, Element, [node$$19], JAM.policy.p1);
  }
  function findElement(event$$10, expression$$7) {
    var element$$173 = _element(event$$10);
    var v529 = Prototype.Selector;
    var match$$47 = v529.match;
    var v530 = !expression$$7;
    if (v530) {
      return JAM.call(Element.extend, Element, [element$$173], JAM.policy.p1);
    }
    for (;element$$173;) {
      var v2155 = JAM.call(Object.isElement, Object, [element$$173], JAM.policy.p1);
      if (v2155) {
        v2155 = JAM.call(match$$47, null, [element$$173, expression$$7], JAM.policy.p1);
      }
      var v531 = v2155;
      if (v531) {
        return JAM.call(Element.extend, Element, [element$$173], JAM.policy.p1);
      }
      element$$173 = element$$173.parentNode;
    }
    return;
  }
  function pointer(event$$11) {
    var v532 = pointerX(event$$11);
    var v533 = pointerY(event$$11);
    return {x:v532, y:v533};
  }
  function pointerX(event$$12) {
    var docElement = document.documentElement;
    var v534 = document.body;
    var v2156 = !v534;
    if (v2156) {
      v534 = {scrollLeft:0};
    }
    var body = v534;
    var v535 = event$$12.pageX;
    var v2159 = !v535;
    if (v2159) {
      var v3099 = event$$12.clientX;
      var v3577 = docElement.scrollLeft;
      var v3769 = !v3577;
      if (v3769) {
        v3577 = body.scrollLeft;
      }
      var v3100 = v3577;
      var v2157 = v3099 + v3100;
      var v3101 = docElement.clientLeft;
      var v3578 = !v3101;
      if (v3578) {
        v3101 = 0;
      }
      var v2158 = v3101;
      v535 = v2157 - v2158;
    }
    return v535;
  }
  function pointerY(event$$13) {
    var docElement$$1 = document.documentElement;
    var v536 = document.body;
    var v2160 = !v536;
    if (v2160) {
      v536 = {scrollTop:0};
    }
    var body$$1 = v536;
    var v537 = event$$13.pageY;
    var v2163 = !v537;
    if (v2163) {
      var v3102 = event$$13.clientY;
      var v3579 = docElement$$1.scrollTop;
      var v3770 = !v3579;
      if (v3770) {
        v3579 = body$$1.scrollTop;
      }
      var v3103 = v3579;
      var v2161 = v3102 + v3103;
      var v3104 = docElement$$1.clientTop;
      var v3580 = !v3104;
      if (v3580) {
        v3104 = 0;
      }
      var v2162 = v3104;
      v537 = v2161 - v2162;
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
    var v2164 = !v538;
    if (v2164) {
      v538 = eventName;
    }
    return v538;
  }
  function getUniqueElementID$$1(element$$174) {
    var v539 = element$$174 === window;
    if (v539) {
      return 0;
    }
    var v3105 = element$$174._prototypeUID;
    var v2165 = typeof v3105;
    var v540 = v2165 === "undefined";
    if (v540) {
      var v2166 = Element.Storage;
      element$$174._prototypeUID = v2166.UID;
      var v2167 = Element.Storage;
      var v3581 = Element.Storage;
      var v3106 = v3581.UID;
      v2167.UID = v3106 + 1;
    }
    return element$$174._prototypeUID;
  }
  function getUniqueElementID_IE$$1(element$$175) {
    var v541 = element$$175 === window;
    if (v541) {
      return 0;
    }
    var v542 = element$$175 == document;
    if (v542) {
      return 1;
    }
    return element$$175.uniqueID;
  }
  function isCustomEvent(eventName$$1) {
    return JAM.call(eventName$$1.include, eventName$$1, [":"], JAM.policy.p1);
  }
  function getRegistryForElement(element$$176, uid$$4) {
    var v543 = GLOBAL$$1.Event;
    var CACHE = v543.cache;
    var v544 = JAM.call(Object.isUndefined, Object, [uid$$4], JAM.policy.p1);
    if (v544) {
      uid$$4 = JAM.call(getUniqueElementID$$1, null, [element$$176], JAM.policy.p1);
    }
    var v2168 = CACHE[uid$$4];
    var v545 = !v2168;
    if (v545) {
      introspect(JAM.policy.p2) {
        CACHE[uid$$4] = {element:element$$176};
      }
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
      var v2169 = registry$$inline_36[eventName$$inline_34];
      var v546 = !v2169;
      if (v546) {
        introspect(JAM.policy.p2) {
          registry$$inline_36[eventName$$inline_34] = [];
        }
      }
      var entries$$inline_37 = registry$$inline_36[eventName$$inline_34];
      var i$$inline_38 = entries$$inline_37.length;
      var v548 = i$$inline_38;
      i$$inline_38 = i$$inline_38 - 1;
      for (;v548;) {
        var v3107 = entries$$inline_37[i$$inline_38];
        var v2170 = v3107.handler;
        var v547 = v2170 === handler$$inline_35;
        if (v547) {
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
    var v550 = entry$$2 === null;
    if (v550) {
      return element$$180;
    }
    var responder$$4 = entry$$2.responder;
    var v554 = isCustomEvent(eventName$$4);
    if (v554) {
      var element$$inline_43 = element$$180;
      var responder$$inline_45 = responder$$4;
      var v551 = element$$inline_43.addEventListener;
      if (v551) {
        JAM.call(element$$inline_43.addEventListener, element$$inline_43, ["dataavailable", responder$$inline_45, false], JAM.policy.p1);
      } else {
        JAM.call(element$$inline_43.attachEvent, element$$inline_43, ["ondataavailable", responder$$inline_45], JAM.policy.p1);
        JAM.call(element$$inline_43.attachEvent, element$$inline_43, ["onlosecapture", responder$$inline_45], JAM.policy.p1);
      }
    } else {
      var element$$inline_47 = element$$180;
      var responder$$inline_49 = responder$$4;
      var actualEventName$$inline_50 = JAM.call(getDOMEventName, null, [eventName$$4], JAM.policy.p1);
      var v553 = element$$inline_47.addEventListener;
      if (v553) {
        JAM.call(element$$inline_47.addEventListener, element$$inline_47, [actualEventName$$inline_50, responder$$inline_49, false], JAM.policy.p1);
      } else {
        var v552 = "on" + actualEventName$$inline_50;
        JAM.call(element$$inline_47.attachEvent, element$$inline_47, [v552, responder$$inline_49], JAM.policy.p1);
      }
    }
    return element$$180;
  }
  function stopObserving(element$$183, eventName$$7, handler$$6) {
    element$$183 = JAM.call($, null, [element$$183], JAM.policy.p1);
    var v555 = JAM.call(Object.isUndefined, Object, [handler$$6], JAM.policy.p1);
    var handlerGiven = !v555;
    var v556 = JAM.call(Object.isUndefined, Object, [eventName$$7], JAM.policy.p1);
    var eventNameGiven = !v556;
    var v2171 = !eventNameGiven;
    if (v2171) {
      v2171 = !handlerGiven;
    }
    var v562 = v2171;
    if (v562) {
      var element$$inline_52 = element$$183;
      var uid$$inline_53 = JAM.call(getUniqueElementID$$1, null, [element$$inline_52], JAM.policy.p1);
      var registry$$inline_54 = getRegistryForElement(element$$inline_52, uid$$inline_53);
      var element$$inline_87 = element$$inline_52;
      var uid$$inline_88 = uid$$inline_53;
      var v557 = JAM.call(Object.isUndefined, Object, [uid$$inline_88], JAM.policy.p1);
      if (v557) {
        uid$$inline_88 = JAM.call(getUniqueElementID$$1, null, [element$$inline_87], JAM.policy.p1);
      }
      var v2172 = GLOBAL$$1.Event;
      var v558 = v2172.cache;
      delete v558[uid$$inline_88];
      var entries$$inline_55;
      var i$$inline_56;
      var eventName$$inline_57;
      for (eventName$$inline_57 in registry$$inline_54) {
        var v559 = eventName$$inline_57 === "element";
        if (v559) {
          continue;
        }
        entries$$inline_55 = registry$$inline_54[eventName$$inline_57];
        i$$inline_56 = entries$$inline_55.length;
        var v561 = i$$inline_56;
        i$$inline_56 = i$$inline_56 - 1;
        for (;v561;) {
          var v2173 = entries$$inline_55[i$$inline_56];
          var v560 = v2173.responder;
          removeEvent(element$$inline_52, eventName$$inline_57, v560);
          v561 = i$$inline_56;
          i$$inline_56 = i$$inline_56 - 1;
        }
      }
      return element$$183;
    }
    var v566 = !handlerGiven;
    if (v566) {
      JSCompiler_inline_label_stopObservingEventName_64: {
        var element$$inline_59 = element$$183;
        var eventName$$inline_60 = eventName$$7;
        var registry$$inline_61 = getRegistryForElement(element$$inline_59);
        var entries$$inline_62 = registry$$inline_61[eventName$$inline_60];
        var v563 = !entries$$inline_62;
        if (v563) {
          break JSCompiler_inline_label_stopObservingEventName_64;
        }
        delete registry$$inline_61[eventName$$inline_60];
        var i$$inline_63 = entries$$inline_62.length;
        var v565 = i$$inline_63;
        i$$inline_63 = i$$inline_63 - 1;
        for (;v565;) {
          var v2174 = entries$$inline_62[i$$inline_63];
          var v564 = v2174.responder;
          removeEvent(element$$inline_59, eventName$$inline_60, v564);
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
      var v567 = !entries$$inline_69;
      if (v567) {
        entry$$3 = void 0;
        break JSCompiler_inline_label_unregister_73;
      }
      var i$$inline_70 = entries$$inline_69.length;
      var entry$$inline_71;
      var v569 = i$$inline_70;
      i$$inline_70 = i$$inline_70 - 1;
      for (;v569;) {
        var v3108 = entries$$inline_69[i$$inline_70];
        var v2175 = v3108.handler;
        var v568 = v2175 === handler$$inline_67;
        if (v568) {
          entry$$inline_71 = entries$$inline_69[i$$inline_70];
          break;
        }
        v569 = i$$inline_70;
        i$$inline_70 = i$$inline_70 - 1;
      }
      var v570 = !entry$$inline_71;
      if (v570) {
        entry$$3 = void 0;
        break JSCompiler_inline_label_unregister_73;
      }
      var index$$inline_72 = JAM.call(entries$$inline_69.indexOf, entries$$inline_69, [entry$$inline_71], JAM.policy.p1);
      JAM.call(entries$$inline_69.splice, entries$$inline_69, [index$$inline_72, 1], JAM.policy.p1);
      entry$$3 = entry$$inline_71;
    }
    var v571 = !entry$$3;
    if (v571) {
      return element$$183;
    }
    var v572 = entry$$3.responder;
    removeEvent(element$$183, eventName$$7, v572);
    return element$$183;
  }
  function removeEvent(element$$188, eventName$$12, handler$$7) {
    var v576 = isCustomEvent(eventName$$12);
    if (v576) {
      var element$$inline_74 = element$$188;
      var responder$$inline_76 = handler$$7;
      var v573 = element$$inline_74.removeEventListener;
      if (v573) {
        JAM.call(element$$inline_74.removeEventListener, element$$inline_74, ["dataavailable", responder$$inline_76, false], JAM.policy.p1);
      } else {
        JAM.call(element$$inline_74.detachEvent, element$$inline_74, ["ondataavailable", responder$$inline_76], JAM.policy.p1);
        JAM.call(element$$inline_74.detachEvent, element$$inline_74, ["onlosecapture", responder$$inline_76], JAM.policy.p1);
      }
    } else {
      var element$$inline_78 = element$$188;
      var responder$$inline_80 = handler$$7;
      var actualEventName$$inline_81 = JAM.call(getDOMEventName, null, [eventName$$12], JAM.policy.p1);
      var v575 = element$$inline_78.removeEventListener;
      if (v575) {
        JAM.call(element$$inline_78.removeEventListener, element$$inline_78, [actualEventName$$inline_81, responder$$inline_80, false], JAM.policy.p1);
      } else {
        var v574 = "on" + actualEventName$$inline_81;
        JAM.call(element$$inline_78.detachEvent, element$$inline_78, [v574, responder$$inline_80], JAM.policy.p1);
      }
    }
    return;
  }
  function fire(element$$190, eventName$$13, memo$$2, bubble) {
    JSCompiler_inline_label_getFireTarget_84: {
      var element$$inline_83 = JAM.call($, null, [element$$190], JAM.policy.p1);
      var v577 = element$$inline_83 !== document;
      if (v577) {
        element$$190 = element$$inline_83;
        break JSCompiler_inline_label_getFireTarget_84;
      }
      var v2176 = document.createEvent;
      if (v2176) {
        var v3109 = element$$inline_83.dispatchEvent;
        v2176 = !v3109;
      }
      var v578 = v2176;
      if (v578) {
        element$$190 = document.documentElement;
        break JSCompiler_inline_label_getFireTarget_84;
      }
      element$$190 = element$$inline_83;
    }
    var v579 = JAM.call(Object.isUndefined, Object, [bubble], JAM.policy.p1);
    if (v579) {
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
    var v581 = event$$17.eventType;
    JAM.call(element$$192.fireEvent, element$$192, [v581, event$$17], JAM.policy.p1);
    return event$$17;
  }
  function on(element$$193, eventName$$16, selector$$5, callback$$29) {
    element$$193 = JAM.call($, null, [element$$193], JAM.policy.p1);
    var v2177 = JAM.call(Object.isFunction, Object, [selector$$5], JAM.policy.p1);
    if (v2177) {
      v2177 = JAM.call(Object.isUndefined, Object, [callback$$29], JAM.policy.p1);
    }
    var v582 = v2177;
    if (v582) {
      callback$$29 = selector$$5;
      selector$$5 = null;
    }
    var v2178 = Event$$1.Handler;
    var v583 = JAM.new(v2178, [element$$193, eventName$$16, selector$$5, callback$$29]);
    return JAM.call(v583.start, v583, [], JAM.policy.p1);
  }
  function destroyCache_IE() {
    var v584 = GLOBAL$$1.Event;
    v584.cache = null;
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
  var v587 = window.attachEvent;
  if (v587) {
    var v586 = window.addEventListener;
    if (v586) {
      isIELegacyEvent = v309;
    } else {
      isIELegacyEvent = v310;
    }
  }
  var _isButton;
  var legacyButtonMap = {0:1, 1:4, 2:2};
  var v590 = window.attachEvent;
  if (v590) {
    var v2179 = window.addEventListener;
    var v588 = !v2179;
    if (v588) {
      _isButton = _isButtonForLegacyEvents;
    } else {
      _isButton = v311;
    }
  } else {
    var v2180 = Prototype.Browser;
    var v589 = v2180.WebKit;
    if (v589) {
      _isButton = _isButtonForWebKit;
    } else {
      _isButton = _isButtonForDOMEvents;
    }
  }
  Event$$1.Methods = {isLeftClick:isLeftClick, isMiddleClick:isMiddleClick, isRightClick:isRightClick, element:element$$172, findElement:findElement, pointer:pointer, pointerX:pointerX, pointerY:pointerY, stop:stop};
  var v2181 = Event$$1.Methods;
  var v591 = JAM.call(Object.keys, Object, [v2181], JAM.policy.p1);
  var methods$$7 = JAM.call(v591.inject, v591, [{}, v312], JAM.policy.p1);
  var v592 = window.attachEvent;
  if (v592) {
    var _relatedTarget = v313;
    var additionalMethods = {stopPropagation:v314, preventDefault:v315, inspect:v316};
    Event$$1.extend = v317;
  } else {
    Event$$1.extend = Prototype.K;
  }
  var v595 = window.addEventListener;
  if (v595) {
    var v593 = Event$$1;
    var v3110 = window.Event;
    var v2182 = v3110.prototype;
    var v3112 = !v2182;
    if (v3112) {
      var v3111 = JAM.call(document.createEvent, document, ["HTMLEvents"], JAM.policy.p1);
      v2182 = v3111.__proto__;
    }
    v593.prototype = v2182;
    var v594 = Event$$1.prototype;
    JAM.call(Object.extend, Object, [v594, methods$$7], JAM.policy.p1);
  }
  var EVENT_TRANSLATIONS = {mouseenter:"mouseover", mouseleave:"mouseout"};
  if (MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED) {
    getDOMEventName = Prototype.K;
  }
  var v596 = "uniqueID" in DIV$$1;
  if (v596) {
    getUniqueElementID$$1 = getUniqueElementID_IE$$1;
  }
  Event$$1._isCustomEvent = isCustomEvent;
  var v597;
  var v2183 = document.createEvent;
  if (v2183) {
    v597 = fireEvent_DOM;
  } else {
    v597 = fireEvent_IE;
  }
  var fireEvent = v597;
  var v598 = Event$$1;
  var v2184 = {initialize:v318, start:v319, stop:v320, handleEvent:v321};
  var v3932 = JAM.call(Class.create, Class, [v2184], JAM.policy.p1);
  v598.Handler = v3932;
  var v599 = Event$$1.Methods;
  JAM.call(Object.extend, Object, [Event$$1, v599], JAM.policy.p1);
  var v600 = {fire:fire, observe:observe, stopObserving:stopObserving, on:on};
  JAM.call(Object.extend, Object, [Event$$1, v600], JAM.policy.p1);
  var v601 = {fire:fire, observe:observe, stopObserving:stopObserving, on:on};
  JAM.call(Element.addMethods, Element, [v601], JAM.policy.p1);
  var v2185 = JAM.call(fire.methodize, fire, [], JAM.policy.p1);
  var v2186 = JAM.call(observe.methodize, observe, [], JAM.policy.p1);
  var v2187 = JAM.call(stopObserving.methodize, stopObserving, [], JAM.policy.p1);
  var v2188 = JAM.call(on.methodize, on, [], JAM.policy.p1);
  var v602 = {fire:v2185, observe:v2186, stopObserving:v2187, on:v2188, loaded:false};
  JAM.call(Object.extend, Object, [document, v602], JAM.policy.p1);
  var v604 = GLOBAL$$1.Event;
  if (v604) {
    var v603 = window.Event;
    JAM.call(Object.extend, Object, [v603, Event$$1], JAM.policy.p1);
  } else {
    GLOBAL$$1.Event = Event$$1;
  }
  var v605 = GLOBAL$$1.Event;
  v605.cache = {};
  var v606 = window.attachEvent;
  if (v606) {
    JAM.call(window.attachEvent, window, ["onunload", destroyCache_IE], JAM.policy.p1);
  }
  DIV$$1 = null;
  docEl$$1 = null;
  return;
}
function v308() {
  var v607 = this.element;
  return JAM.call(Form.serialize, Form, [v607], JAM.policy.p1);
}
function v307() {
  var v608 = Form.Element;
  var v609 = this.element;
  return JAM.call(v608.getValue, v608, [v609], JAM.policy.p1);
}
function v306(element$$171) {
  var v613 = element$$171.type;
  if (v613) {
    var v2189 = element$$171.type;
    var v612 = JAM.call(v2189.toLowerCase, v2189, [], JAM.policy.p1);
    switch(v612) {
      case "checkbox":
      ;
      case "radio":
        var v2190 = this.onElementEvent;
        var v610 = JAM.call(v2190.bind, v2190, [this], JAM.policy.p1);
        JAM.call(Event.observe, Event, [element$$171, "click", v610], JAM.policy.p1);
        break;
      default:
        var v2191 = this.onElementEvent;
        var v611 = JAM.call(v2191.bind, v2191, [this], JAM.policy.p1);
        JAM.call(Event.observe, Event, [element$$171, "change", v611], JAM.policy.p1);
    }
  }
  return;
}
function v305() {
  var v2192 = this.element;
  var v614 = JAM.call(Form.getElements, Form, [v2192], JAM.policy.p1);
  var v615 = this.registerCallback;
  JAM.call(v614.each, v614, [v615, this], JAM.policy.p1);
  return;
}
function v304() {
  var value$$98 = JAM.call(this.getValue, this, [], JAM.policy.p1);
  var v2193 = this.lastValue;
  var v617 = v2193 != value$$98;
  if (v617) {
    var v616 = this.element;
    JAM.call(this.callback, this, [v616, value$$98], JAM.policy.p1);
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
  var v3582 = this.element;
  var v3113 = v3582.tagName;
  var v2194 = JAM.call(v3113.toLowerCase, v3113, [], JAM.policy.p1);
  var v619 = v2194 == "form";
  if (v619) {
    JAM.call(this.registerFormCallbacks, this, [], JAM.policy.p1);
  } else {
    var v618 = this.element;
    JAM.call(this.registerCallback, this, [v618], JAM.policy.p1);
  }
  return;
}
function v302() {
  var v620 = this.element;
  return JAM.call(Form.serialize, Form, [v620], JAM.policy.p1);
}
function v301() {
  var v621 = Form.Element;
  var v622 = this.element;
  return JAM.call(v621.getValue, v621, [v622], JAM.policy.p1);
}
function v300() {
  var value$$97 = JAM.call(this.getValue, this, [], JAM.policy.p1);
  var v2195;
  var v3771 = this.lastValue;
  var v3583 = JAM.call(Object.isString, Object, [v3771], JAM.policy.p1);
  if (v3583) {
    v3583 = JAM.call(Object.isString, Object, [value$$97], JAM.policy.p1);
  }
  var v3117 = v3583;
  if (v3117) {
    var v3114 = this.lastValue;
    v2195 = v3114 != value$$97;
  } else {
    var v3584 = this.lastValue;
    var v3115 = String(v3584);
    var v3116 = String(value$$97);
    v2195 = v3115 != v3116;
  }
  var v624 = v2195;
  if (v624) {
    var v623 = this.element;
    JAM.call(this.callback, this, [v623, value$$97], JAM.policy.p1);
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
    var v625 = JAM.call(v2196.toLowerCase, v2196, [], JAM.policy.p1);
    switch(v625) {
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
    var v628 = JAM.call(Object.isUndefined, Object, [value$$94], JAM.policy.p1);
    if (v628) {
      var v626;
      var v2197 = element$$164.checked;
      if (v2197) {
        v626 = element$$164.value;
      } else {
        v626 = null;
      }
      return v626;
    } else {
      var v627 = !value$$94;
      element$$164.checked = !v627;
    }
    return;
  }
  function valueSelector(element$$165, value$$95) {
    var v629 = JAM.call(Object.isUndefined, Object, [value$$95], JAM.policy.p1);
    if (v629) {
      return element$$165.value;
    } else {
      element$$165.value = value$$95;
    }
    return;
  }
  function select$$3(element$$166, value$$96) {
    var v631 = JAM.call(Object.isUndefined, Object, [value$$96], JAM.policy.p1);
    if (v631) {
      var v2198;
      var v3585 = element$$166.type;
      var v3118 = v3585 === "select-one";
      if (v3118) {
        v2198 = selectOne;
      } else {
        v2198 = selectMany;
      }
      var v630 = v2198;
      return JAM.call(v630, null, [element$$166], JAM.policy.p1);
    }
    var opt;
    var currentValue;
    var v632 = JAM.call(Object.isArray, Object, [value$$96], JAM.policy.p1);
    var single = !v632;
    var i$$57 = 0;
    var length$$32 = element$$166.length;
    var v635 = i$$57 < length$$32;
    for (;v635;) {
      var v633 = element$$166.options;
      opt = v633[i$$57];
      currentValue = JAM.call(this.optionValue, this, [opt], JAM.policy.p1);
      if (single) {
        var v634 = currentValue == value$$96;
        if (v634) {
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
    var v2200 = index$$61 >= 0;
    if (v2200) {
      var v3119 = element$$167.options;
      var v2199 = v3119[index$$61];
      v636 = optionValue(v2199);
    } else {
      v636 = null;
    }
    return v636;
  }
  function selectMany(element$$168) {
    var values$$8;
    var length$$33 = element$$168.length;
    var v637 = !length$$33;
    if (v637) {
      return null;
    }
    var i$$58 = 0;
    values$$8 = [];
    var v641 = i$$58 < length$$33;
    for (;v641;) {
      var v638 = element$$168.options;
      var opt$$1 = v638[i$$58];
      var v640 = opt$$1.selected;
      if (v640) {
        var v639 = optionValue(opt$$1);
        JAM.call(values$$8.push, values$$8, [v639], JAM.policy.p1);
      }
      i$$58++;
      v641 = i$$58 < length$$33;
    }
    return values$$8;
  }
  function optionValue(opt$$2) {
    var v642;
    var v2201 = JAM.call(Element.hasAttribute, Element, [opt$$2, "value"], JAM.policy.p1);
    if (v2201) {
      v642 = opt$$2.value;
    } else {
      v642 = opt$$2.text;
    }
    return v642;
  }
  return {input:input$$1, inputSelector:inputSelector, textarea:valueSelector, select:select$$3, selectOne:selectOne, selectMany:selectMany, optionValue:optionValue, button:valueSelector};
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
      var v3586 = JAM.call(v3772.toLowerCase, v3772, [], JAM.policy.p1);
      var v3120 = v3586 != "input";
      var v3588 = !v3120;
      if (v3588) {
        var v3773 = element$$160.type;
        var v3587 = JAM.call(/^(?:button|reset|submit)$/i.test, /^(?:button|reset|submit)$/i, [v3773], JAM.policy.p1);
        v3120 = !v3587;
      }
      v2202 = v3120;
    }
    var v643 = v2202;
    if (v643) {
      JAM.call(element$$160.select, element$$160, [], JAM.policy.p1);
    }
  } catch (e$$26) {
  }
  return element$$160;
}
function v294(element$$159) {
  var v2203 = JAM.call($, null, [element$$159], JAM.policy.p1);
  var v644 = v2203.value;
  return v644 != "";
}
function v293(element$$158) {
  var v645 = JAM.call($, null, [element$$158], JAM.policy.p1);
  v645.value = "";
  return element$$158;
}
function v292(element$$157, value$$92) {
  element$$157 = JAM.call($, null, [element$$157], JAM.policy.p1);
  var v646 = element$$157.tagName;
  var method$$9 = JAM.call(v646.toLowerCase, v646, [], JAM.policy.p1);
  var v2204 = Form.Element;
  var v647 = v2204.Serializers;
  JAM.call(v647[method$$9], v647, [element$$157, value$$92], JAM.policy.p1);
  return element$$157;
}
function v291(element$$156) {
  element$$156 = JAM.call($, null, [element$$156], JAM.policy.p1);
  var v648 = element$$156.tagName;
  var method$$8 = JAM.call(v648.toLowerCase, v648, [], JAM.policy.p1);
  var v2205 = Form.Element;
  var v649 = v2205.Serializers;
  return JAM.call(v649[method$$8], v649, [element$$156], JAM.policy.p1);
}
function v290(element$$155) {
  element$$155 = JAM.call($, null, [element$$155], JAM.policy.p1);
  var v3121 = element$$155.disabled;
  var v2206 = !v3121;
  if (v2206) {
    v2206 = element$$155.name;
  }
  var v652 = v2206;
  if (v652) {
    var value$$91 = JAM.call(element$$155.getValue, element$$155, [], JAM.policy.p1);
    var v651 = value$$91 != undefined;
    if (v651) {
      var pair$$7 = {};
      var v650 = element$$155.name;
      introspect(JAM.policy.p2) {
        pair$$7[v650] = value$$91;
      }
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
  var v2207 = options$$10 || {};
  options$$10 = JAM.call(Object.clone, Object, [v2207], JAM.policy.p1);
  var params$$1 = options$$10.parameters;
  var v655 = JAM.call(form$$10.readAttribute, form$$10, ["action"], JAM.policy.p1);
  var v2208 = !v655;
  if (v2208) {
    v655 = "";
  }
  var action = v655;
  var v657 = JAM.call(action.blank, action, [], JAM.policy.p1);
  if (v657) {
    var v656 = window.location;
    action = v656.href;
  }
  var v3938 = JAM.call(form$$10.serialize, form$$10, [true], JAM.policy.p1);
  options$$10.parameters = v3938;
  if (params$$1) {
    var v658 = JAM.call(Object.isString, Object, [params$$1], JAM.policy.p1);
    if (v658) {
      params$$1 = JAM.call(params$$1.toQueryParams, params$$1, [], JAM.policy.p1);
    }
    var v659 = options$$10.parameters;
    JAM.call(Object.extend, Object, [v659, params$$1], JAM.policy.p1);
  }
  var v2209 = JAM.call(form$$10.hasAttribute, form$$10, ["method"], JAM.policy.p1);
  if (v2209) {
    var v3122 = options$$10.method;
    v2209 = !v3122;
  }
  var v660 = v2209;
  if (v660) {
    options$$10.method = form$$10.method;
  }
  var v661 = Ajax.Request;
  return JAM.new(v661, [action, options$$10]);
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
    var v662 = element$$151.tagName;
    return JAM.call(/^(?:input|select|textarea)$/i.test, /^(?:input|select|textarea)$/i, [v662], JAM.policy.p1);
  }
  function v283(element$$150) {
    return element$$150.tabIndex;
  }
  function v282(element$$149) {
    var v663 = JAM.call(element$$149.hasAttribute, element$$149, ["tabIndex"], JAM.policy.p1);
    if (v663) {
      var v2210 = element$$149.tabIndex;
      v663 = v2210 >= 0;
    }
    return v663;
  }
  function v281(element$$148) {
    var v2211 = element$$148.type;
    var v664 = "hidden" != v2211;
    if (v664) {
      var v2212 = element$$148.disabled;
      v664 = !v2212;
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
  var v672 = v2215;
  if (v672) {
    var v670 = $A(inputs);
    var v671 = Element.extend;
    return JAM.call(v670.map, v670, [v671], JAM.policy.p1);
  }
  var i$$56 = 0;
  var matchingInputs = [];
  var length$$31 = inputs.length;
  var v675 = i$$56 < length$$31;
  for (;v675;) {
    var input = inputs[i$$56];
    var v3123 = typeName;
    if (v3123) {
      var v3589 = input.type;
      v3123 = v3589 != typeName;
    }
    var v2216 = v3123;
    var v3125 = !v2216;
    if (v3125) {
      var v3124 = name$$44;
      if (v3124) {
        var v3590 = input.name;
        v3124 = v3590 != name$$44;
      }
      v2216 = v3124;
    }
    var v673 = v2216;
    if (v673) {
      i$$56++;
      v675 = i$$56 < length$$31;
      continue;
    }
    var v674 = JAM.call(Element.extend, Element, [input], JAM.policy.p1);
    JAM.call(matchingInputs.push, matchingInputs, [v674], JAM.policy.p1);
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
  var v677 = Form.Element;
  var serializers = v677.Serializers;
  var i$$55 = 0;
  var v680 = element$$147 = elements$$7[i$$55];
  for (;v680;) {
    var v3126 = element$$147.tagName;
    var v2217 = JAM.call(v3126.toLowerCase, v3126, [], JAM.policy.p1);
    var v679 = serializers[v2217];
    if (v679) {
      var v678 = JAM.call(Element.extend, Element, [element$$147], JAM.policy.p1);
      JAM.call(results$$19.push, results$$19, [v678], JAM.policy.p1);
    }
    i$$55++;
    v680 = element$$147 = elements$$7[i$$55];
  }
  return results$$19;
}
function v276(form$$3, options$$9) {
  var v681 = JAM.call(Form.getElements, Form, [form$$3], JAM.policy.p1);
  return JAM.call(Form.serializeElements, Form, [v681, options$$9], JAM.policy.p1);
}
function v275(elements$$6, options$$8) {
  function v274(result$$15, element$$146) {
    var v3127 = element$$146.disabled;
    var v2218 = !v3127;
    if (v2218) {
      v2218 = element$$146.name;
    }
    var v684 = v2218;
    if (v684) {
      key$$27 = element$$146.name;
      var v682 = JAM.call($, null, [element$$146], JAM.policy.p1);
      value$$88 = JAM.call(v682.getValue, v682, [], JAM.policy.p1);
      var v3128 = value$$88 != null;
      if (v3128) {
        var v3591 = element$$146.type;
        v3128 = v3591 != "file";
      }
      var v2219 = v3128;
      if (v2219) {
        var v3592 = element$$146.type;
        var v3129 = v3592 != "submit";
        var v3594 = !v3129;
        if (v3594) {
          var v3840 = !submitted;
          if (v3840) {
            v3840 = submit !== false;
          }
          var v3774 = v3840;
          if (v3774) {
            var v3841 = !submit;
            var v3879 = !v3841;
            if (v3879) {
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
      var v683 = v2219;
      if (v683) {
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
    var v3595 = v3775;
    var v3130 = result$$14 + v3595;
    var v3131 = encodeURIComponent(key$$29);
    var v2220 = v3130 + v3131;
    var v685 = v2220 + "=";
    return v685 + value$$90;
  }
  function v272(result$$13, key$$28, value$$89) {
    var v689 = key$$28 in result$$13;
    if (v689) {
      var v3132 = result$$13[key$$28];
      var v2221 = JAM.call(Object.isArray, Object, [v3132], JAM.policy.p1);
      var v687 = !v2221;
      if (v687) {
        var v686 = result$$13[key$$28];
        introspect(JAM.policy.p2) {
          result$$13[key$$28] = [v686];
        }
      }
      var v688 = result$$13[key$$28];
      JAM.call(v688.push, v688, [value$$89], JAM.policy.p1);
    } else {
      introspect(JAM.policy.p2) {
        result$$13[key$$28] = value$$89;
      }
    }
    return result$$13;
  }
  var v2222 = typeof options$$8;
  var v692 = v2222 != "object";
  if (v692) {
    var v2223 = !options$$8;
    var v690 = !v2223;
    options$$8 = {hash:v690};
  } else {
    var v2224 = options$$8.hash;
    var v691 = JAM.call(Object.isUndefined, Object, [v2224], JAM.policy.p1);
    if (v691) {
      options$$8.hash = true;
    }
  }
  var key$$27;
  var value$$88;
  var submitted = false;
  var submit = options$$8.submit;
  var accumulator;
  var initial;
  var v693 = options$$8.hash;
  if (v693) {
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
    var v2225 = scope || document;
    var v694 = JAM.call(engine, null, [selector$$3, v2225], JAM.policy.p1);
    return JAM.call(extendElements$$1, null, [v694], JAM.policy.p1);
  }
  function match$$46(element$$145, selector$$4) {
    var v3133 = [element$$145];
    var v2226 = JAM.call(engine.matches, engine, [selector$$4, v3133], JAM.policy.p1);
    var v695 = v2226.length;
    return v695 == 1;
  }
  var v696 = Prototype.Selector;
  var extendElements$$1 = v696.extendElements;
  var v697 = Prototype.Selector;
  v697.engine = engine;
  var v698 = Prototype.Selector;
  v698.select = select$$2;
  var v699 = Prototype.Selector;
  v699.match = match$$46;
  return;
}
function v269() {
  function v268(elem$$46) {
    var v2227;
    if (elem$$46) {
      var v3134 = elem$$46.ownerDocument;
      var v3596 = !v3134;
      if (v3596) {
        v3134 = elem$$46;
      }
      v2227 = v3134;
    } else {
      v2227 = 0;
    }
    var v700 = v2227;
    var documentElement = v700.documentElement;
    var v701;
    if (documentElement) {
      var v2228 = documentElement.nodeName;
      v701 = v2228 !== "HTML";
    } else {
      v701 = false;
    }
    return v701;
  }
  function v267() {
    return false;
  }
  function v266(a$$11, b$$5) {
    var v3135 = JAM.call(a$$11.compareDocumentPosition, a$$11, [b$$5], JAM.policy.p1);
    var v2229 = v3135 & 16;
    var v702 = !v2229;
    return !v702;
  }
  function v265(a$$10, b$$4) {
    var v703 = a$$10 !== b$$4;
    if (v703) {
      var v2230;
      var v3136 = a$$10.contains;
      if (v3136) {
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
      var v3597 = context$$37.getElementsByClassName;
      var v3137 = typeof v3597;
      var v2231 = v3137 !== "undefined";
      if (v2231) {
        v2231 = !isXML$$9;
      }
      var v705 = v2231;
      if (v705) {
        var v704 = match$$44[1];
        return JAM.call(context$$37.getElementsByClassName, context$$37, [v704], JAM.policy.p1);
      }
      return;
    }
    var div$$4 = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
    JAM.set(div$$4, "innerHTML", "<div class='test e'></div><div class='test'></div>");
    var v3138 = div$$4.getElementsByClassName;
    var v2232 = !v3138;
    var v3140 = !v2232;
    if (v3140) {
      var v3598 = JAM.call(div$$4.getElementsByClassName, div$$4, ["e"], JAM.policy.p1);
      var v3139 = v3598.length;
      v2232 = v3139 === 0;
    }
    var v706 = v2232;
    if (v706) {
      return;
    }
    var v707 = div$$4.lastChild;
    v707.className = "e";
    var v3141 = JAM.call(div$$4.getElementsByClassName, div$$4, ["e"], JAM.policy.p1);
    var v2233 = v3141.length;
    var v708 = v2233 === 1;
    if (v708) {
      return;
    }
    var v709 = Expr.order;
    JAM.call(v709.splice, v709, [1, 0, "CLASS"], JAM.policy.p1);
    var v710 = Expr.find;
    v710.CLASS = v263;
    div$$4 = null;
    return;
  }
  function v262() {
    function v261(node$$18, expr$$8) {
      expr$$8 = JAM.call(expr$$8.replace, expr$$8, [/\=\s*([^'"\]]*)\s*\]/g, "='$1']"], JAM.policy.p1);
      var v2234 = JAM.call(Sizzle$$1.isXML, Sizzle$$1, [node$$18], JAM.policy.p1);
      var v713 = !v2234;
      if (v713) {
        try {
          var v2235 = pseudoWorks;
          var v3143 = !v2235;
          if (v3143) {
            var v3842 = Expr.match;
            var v3776 = v3842.PSEUDO;
            var v3599 = JAM.call(v3776.test, v3776, [expr$$8], JAM.policy.p1);
            var v3142 = !v3599;
            if (v3142) {
              var v3600 = JAM.call(/!=/.test, /!=/, [expr$$8], JAM.policy.p1);
              v3142 = !v3600;
            }
            v2235 = v3142;
          }
          var v712 = v2235;
          if (v712) {
            var ret$$6 = JAM.call(matches.call, matches, [node$$18, expr$$8], JAM.policy.p1);
            var v3144 = ret$$6;
            var v3601 = !v3144;
            if (v3601) {
              v3144 = !disconnectedMatch;
            }
            var v2236 = v3144;
            var v3146 = !v2236;
            if (v3146) {
              var v3145 = node$$18.document;
              if (v3145) {
                var v3777 = node$$18.document;
                var v3602 = v3777.nodeType;
                v3145 = v3602 !== 11;
              }
              v2236 = v3145;
            }
            var v711 = v2236;
            if (v711) {
              return ret$$6;
            }
          }
        } catch (e$$25) {
        }
      }
      var v3147 = [node$$18];
      var v2237 = JAM.call(Sizzle$$1, null, [expr$$8, null, null, v3147], JAM.policy.p1);
      var v714 = v2237.length;
      return v714 > 0;
    }
    var html$$1 = document.documentElement;
    var v3148 = html$$1.matchesSelector;
    var v3603 = !v3148;
    if (v3603) {
      v3148 = html$$1.mozMatchesSelector;
    }
    var v2238 = v3148;
    var v3149 = !v2238;
    if (v3149) {
      v2238 = html$$1.webkitMatchesSelector;
    }
    var v715 = v2238;
    var v2239 = !v715;
    if (v2239) {
      v715 = html$$1.msMatchesSelector;
    }
    var matches = v715;
    if (matches) {
      var v2240 = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
      var v716 = JAM.call(matches.call, matches, [v2240, "div"], JAM.policy.p1);
      var disconnectedMatch = !v716;
      var pseudoWorks = false;
      try {
        var v717 = document.documentElement;
        JAM.call(matches.call, matches, [v717, "[test!='']:sizzle"], JAM.policy.p1);
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
        var v3150 = JAM.call(Sizzle$$1.isXML, Sizzle$$1, [context$$36], JAM.policy.p1);
        v2241 = !v3150;
      }
      var v738 = v2241;
      if (v738) {
        var match$$43 = JAM.call(/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec, /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/, [query$$2], JAM.policy.p1);
        var v2242 = match$$43;
        if (v2242) {
          var v3604 = context$$36.nodeType;
          var v3151 = v3604 === 1;
          var v3606 = !v3151;
          if (v3606) {
            var v3605 = context$$36.nodeType;
            v3151 = v3605 === 9;
          }
          v2242 = v3151;
        }
        var v722 = v2242;
        if (v722) {
          var v721 = match$$43[1];
          if (v721) {
            var v718 = JAM.call(context$$36.getElementsByTagName, context$$36, [query$$2], JAM.policy.p1);
            return JAM.call(makeArray, null, [v718, extra$$1], JAM.policy.p1);
          } else {
            var v3152 = match$$43[2];
            if (v3152) {
              var v3607 = Expr.find;
              v3152 = v3607.CLASS;
            }
            var v2243 = v3152;
            if (v2243) {
              v2243 = context$$36.getElementsByClassName;
            }
            var v720 = v2243;
            if (v720) {
              var v2244 = match$$43[2];
              var v719 = JAM.call(context$$36.getElementsByClassName, context$$36, [v2244], JAM.policy.p1);
              return JAM.call(makeArray, null, [v719, extra$$1], JAM.policy.p1);
            }
          }
        }
        var v2245 = context$$36.nodeType;
        var v737 = v2245 === 9;
        if (v737) {
          var v2246 = query$$2 === "body";
          if (v2246) {
            v2246 = context$$36.body;
          }
          var v729 = v2246;
          if (v729) {
            var v2247 = context$$36.body;
            var v723 = [v2247];
            return JAM.call(makeArray, null, [v723, extra$$1], JAM.policy.p1);
          } else {
            var v2248 = match$$43;
            if (v2248) {
              v2248 = match$$43[3];
            }
            var v728 = v2248;
            if (v728) {
              var v724 = match$$43[3];
              var elem$$45 = JAM.call(context$$36.getElementById, context$$36, [v724], JAM.policy.p1);
              var v2249 = elem$$45;
              if (v2249) {
                v2249 = elem$$45.parentNode;
              }
              var v727 = v2249;
              if (v727) {
                var v2250 = elem$$45.id;
                var v2251 = match$$43[3];
                var v726 = v2250 === v2251;
                if (v726) {
                  var v725 = [elem$$45];
                  return JAM.call(makeArray, null, [v725, extra$$1], JAM.policy.p1);
                }
              } else {
                return JAM.call(makeArray, null, [[], extra$$1], JAM.policy.p1);
              }
            }
          }
          try {
            var v730 = JAM.call(context$$36.querySelectorAll, context$$36, [query$$2], JAM.policy.p1);
            return JAM.call(makeArray, null, [v730, extra$$1], JAM.policy.p1);
          } catch (qsaError) {
          }
        } else {
          var v3153 = context$$36.nodeType;
          var v2252 = v3153 === 1;
          if (v2252) {
            var v3608 = context$$36.nodeName;
            var v3154 = JAM.call(v3608.toLowerCase, v3608, [], JAM.policy.p1);
            v2252 = v3154 !== "object";
          }
          var v736 = v2252;
          if (v736) {
            var oldContext = context$$36;
            var old$$1 = JAM.call(context$$36.getAttribute, context$$36, ["id"], JAM.policy.p1);
            var nid = old$$1 || id$$3;
            var hasParent = context$$36.parentNode;
            var relativeHierarchySelector = JAM.call(/^\s*[+~]/.test, /^\s*[+~]/, [query$$2], JAM.policy.p1);
            var v731 = !old$$1;
            if (v731) {
              JAM.call(context$$36.setAttribute, context$$36, ["id", nid], JAM.policy.p1);
            } else {
              nid = JAM.call(nid.replace, nid, [/'/g, "\\$&"], JAM.policy.p1);
            }
            var v732 = relativeHierarchySelector && hasParent;
            if (v732) {
              context$$36 = context$$36.parentNode;
            }
            try {
              var v2253 = !relativeHierarchySelector;
              var v3155 = !v2253;
              if (v3155) {
                v2253 = hasParent;
              }
              var v734 = v2253;
              if (v734) {
                var v3609 = "[id='" + nid;
                var v3156 = v3609 + "'] ";
                var v2254 = v3156 + query$$2;
                var v733 = JAM.call(context$$36.querySelectorAll, context$$36, [v2254], JAM.policy.p1);
                return JAM.call(makeArray, null, [v733, extra$$1], JAM.policy.p1);
              }
            } catch (pseudoError) {
            } finally {
              var v735 = !old$$1;
              if (v735) {
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
      var v3610 = JAM.call(div$$3.querySelectorAll, div$$3, [".TEST"], JAM.policy.p1);
      var v3157 = v3610.length;
      v2255 = v3157 === 0;
    }
    var v739 = v2255;
    if (v739) {
      return;
    }
    Sizzle$$1 = v259;
    var prop$$4;
    for (prop$$4 in oldSizzle) {
      introspect(JAM.policy.p2) {
        Sizzle$$1[prop$$4] = oldSizzle[prop$$4];
      }
    }
    div$$3 = null;
    return;
  }
  function v258() {
    function v257(elem$$44) {
      return JAM.call(elem$$44.getAttribute, elem$$44, ["href", 2], JAM.policy.p1);
    }
    function v256(match$$42, context$$35) {
      var v740 = match$$42[1];
      var results$$18 = JAM.call(context$$35.getElementsByTagName, context$$35, [v740], JAM.policy.p1);
      var v2256 = match$$42[1];
      var v744 = v2256 === "*";
      if (v744) {
        var tmp = [];
        var i$$53 = 0;
        var v743 = results$$18[i$$53];
        for (;v743;) {
          var v3158 = results$$18[i$$53];
          var v2257 = v3158.nodeType;
          var v742 = v2257 === 1;
          if (v742) {
            var v741 = results$$18[i$$53];
            JAM.call(tmp.push, tmp, [v741], JAM.policy.p1);
          }
          i$$53++;
          v743 = results$$18[i$$53];
        }
        results$$18 = tmp;
      }
      return results$$18;
    }
    var div$$2 = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
    var v745 = JAM.call(document.createComment, document, [""], JAM.policy.p1);
    JAM.call(div$$2.appendChild, div$$2, [v745], JAM.policy.p1);
    var v3159 = JAM.call(div$$2.getElementsByTagName, div$$2, ["*"], JAM.policy.p1);
    var v2258 = v3159.length;
    var v747 = v2258 > 0;
    if (v747) {
      var v746 = Expr.find;
      v746.TAG = v256;
    }
    JAM.set(div$$2, "innerHTML", "<a href='#'></a>");
    var v3160 = div$$2.firstChild;
    if (v3160) {
      var v3843 = div$$2.firstChild;
      var v3778 = v3843.getAttribute;
      var v3611 = typeof v3778;
      v3160 = v3611 !== "undefined";
    }
    var v2259 = v3160;
    if (v2259) {
      var v3612 = div$$2.firstChild;
      var v3161 = JAM.call(v3612.getAttribute, v3612, ["href"], JAM.policy.p1);
      v2259 = v3161 !== "#";
    }
    var v749 = v2259;
    if (v749) {
      var v748 = Expr.attrHandle;
      v748.href = v257;
    }
    div$$2 = null;
    return;
  }
  function v255() {
    function v254(elem$$43, match$$41) {
      var v3162 = elem$$43.getAttributeNode;
      var v2260 = typeof v3162;
      var v750 = v2260 !== "undefined";
      if (v750) {
        v750 = JAM.call(elem$$43.getAttributeNode, elem$$43, ["id"], JAM.policy.p1);
      }
      var node$$17 = v750;
      var v3163 = elem$$43.nodeType;
      var v2261 = v3163 === 1;
      if (v2261) {
        v2261 = node$$17;
      }
      var v751 = v2261;
      if (v751) {
        var v2262 = node$$17.nodeValue;
        v751 = v2262 === match$$41;
      }
      return v751;
    }
    function v253(match$$40, context$$34, isXML$$8) {
      var v3613 = context$$34.getElementById;
      var v3164 = typeof v3613;
      var v2263 = v3164 !== "undefined";
      if (v2263) {
        v2263 = !isXML$$8;
      }
      var v754 = v2263;
      if (v754) {
        var v752 = match$$40[1];
        var m$$4 = JAM.call(context$$34.getElementById, context$$34, [v752], JAM.policy.p1);
        var v753;
        if (m$$4) {
          var v2264;
          var v3779 = m$$4.id;
          var v3780 = match$$40[1];
          var v3614 = v3779 === v3780;
          var v3782 = !v3614;
          if (v3782) {
            var v3880 = m$$4.getAttributeNode;
            var v3844 = typeof v3880;
            var v3781 = v3844 !== "undefined";
            if (v3781) {
              var v3881 = JAM.call(m$$4.getAttributeNode, m$$4, ["id"], JAM.policy.p1);
              var v3845 = v3881.nodeValue;
              var v3846 = match$$40[1];
              v3781 = v3845 === v3846;
            }
            v3614 = v3781;
          }
          var v3165 = v3614;
          if (v3165) {
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
    var v755 = JAM.call(v2265.getTime, v2265, [], JAM.policy.p1);
    var id$$2 = "script" + v755;
    var root = document.documentElement;
    var v756 = "<a name='" + id$$2;
    JAM.set(form$$1, "innerHTML", v756 + "'/>");
    var v757 = root.firstChild;
    JAM.call(root.insertBefore, root, [form$$1, v757], JAM.policy.p1);
    var v760 = JAM.call(document.getElementById, document, [id$$2], JAM.policy.p1);
    if (v760) {
      var v758 = Expr.find;
      v758.ID = v253;
      var v759 = Expr.filter;
      v759.ID = v254;
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
      var v3166 = elem$$42.nodeType;
      var v2266 = v3166 === 3;
      var v3168 = !v2266;
      if (v3168) {
        var v3167 = elem$$42.nodeType;
        v2266 = v3167 === 4;
      }
      var v762 = v2266;
      if (v762) {
        var v2267 = elem$$42.nodeValue;
        ret$$5 = ret$$5 + v2267;
      } else {
        var v2268 = elem$$42.nodeType;
        var v761 = v2268 !== 8;
        if (v761) {
          var v3169 = elem$$42.childNodes;
          var v2269 = JAM.call(Sizzle$$1.getText, Sizzle$$1, [v3169], JAM.policy.p1);
          ret$$5 = ret$$5 + v2269;
        }
      }
      i$$52++;
      v763 = elems[i$$52];
    }
    return ret$$5;
  }
  function v251(a$$9, b$$3, ret$$4) {
    var v764 = a$$9 === b$$3;
    if (v764) {
      return ret$$4;
    }
    var cur$$4 = a$$9.nextSibling;
    for (;cur$$4;) {
      var v765 = cur$$4 === b$$3;
      if (v765) {
        return -1;
      }
      cur$$4 = cur$$4.nextSibling;
    }
    return 1;
  }
  function v250(a$$8, b$$2) {
    var v769 = a$$8 === b$$2;
    if (v769) {
      hasDuplicate = true;
      return 0;
    } else {
      var v2270 = a$$8.sourceIndex;
      if (v2270) {
        v2270 = b$$2.sourceIndex;
      }
      var v768 = v2270;
      if (v768) {
        var v766 = a$$8.sourceIndex;
        var v767 = b$$2.sourceIndex;
        return v766 - v767;
      }
    }
    var al;
    var bl$$1;
    var ap = [];
    var bp = [];
    var aup = a$$8.parentNode;
    var bup = b$$2.parentNode;
    var cur$$3 = aup;
    var v772 = aup === bup;
    if (v772) {
      return JAM.call(siblingCheck, null, [a$$8, b$$2], JAM.policy.p1);
    } else {
      var v771 = !aup;
      if (v771) {
        return -1;
      } else {
        var v770 = !bup;
        if (v770) {
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
      var v2272 = ap[i$$51];
      var v2273 = bp[i$$51];
      var v775 = v2272 !== v2273;
      if (v775) {
        var v773 = ap[i$$51];
        var v774 = bp[i$$51];
        return JAM.call(siblingCheck, null, [v773, v774], JAM.policy.p1);
      }
      i$$51++;
      var v2274 = i$$51 < al;
      if (v2274) {
        v2274 = i$$51 < bl$$1;
      }
      v776 = v2274;
    }
    var v777;
    var v2277 = i$$51 === al;
    if (v2277) {
      var v2275 = bp[i$$51];
      v777 = JAM.call(siblingCheck, null, [a$$8, v2275, -1], JAM.policy.p1);
    } else {
      var v2276 = ap[i$$51];
      v777 = JAM.call(siblingCheck, null, [v2276, b$$2, 1], JAM.policy.p1);
    }
    return v777;
  }
  function v249(a$$7, b$$1) {
    var v778 = a$$7 === b$$1;
    if (v778) {
      hasDuplicate = true;
      return 0;
    }
    var v3170 = a$$7.compareDocumentPosition;
    var v2278 = !v3170;
    var v3172 = !v2278;
    if (v3172) {
      var v3171 = b$$1.compareDocumentPosition;
      v2278 = !v3171;
    }
    var v780 = v2278;
    if (v780) {
      var v779;
      var v2279 = a$$7.compareDocumentPosition;
      if (v2279) {
        v779 = -1;
      } else {
        v779 = 1;
      }
      return v779;
    }
    var v781;
    var v3173 = JAM.call(a$$7.compareDocumentPosition, a$$7, [b$$1], JAM.policy.p1);
    var v2280 = v3173 & 4;
    if (v2280) {
      v781 = -1;
    } else {
      v781 = 1;
    }
    return v781;
  }
  function v248(array$$22, results$$17) {
    var i$$50 = 0;
    var ret$$3 = results$$17 || [];
    var v2281 = JAM.call(toString.call, toString, [array$$22], JAM.policy.p1);
    var v788 = v2281 === "[object Array]";
    if (v788) {
      var v2282 = Array.prototype;
      var v782 = v2282.push;
      JAM.call(v782.apply, v782, [ret$$3, array$$22], JAM.policy.p1);
    } else {
      var v3174 = array$$22.length;
      var v2283 = typeof v3174;
      var v787 = v2283 === "number";
      if (v787) {
        var l$$7 = array$$22.length;
        var v784 = i$$50 < l$$7;
        for (;v784;) {
          var v783 = array$$22[i$$50];
          JAM.call(ret$$3.push, ret$$3, [v783], JAM.policy.p1);
          i$$50++;
          v784 = i$$50 < l$$7;
        }
      } else {
        var v786 = array$$22[i$$50];
        for (;v786;) {
          var v785 = array$$22[i$$50];
          JAM.call(ret$$3.push, ret$$3, [v785], JAM.policy.p1);
          i$$50++;
          v786 = array$$22[i$$50];
        }
      }
    }
    return ret$$3;
  }
  function v247(elem$$41, match$$39, i$$49, array$$20) {
    var name$$43 = match$$39[2];
    var v789 = Expr.setFilters;
    var filter$$8 = v789[name$$43];
    if (filter$$8) {
      return JAM.call(filter$$8, null, [elem$$41, i$$49, match$$39, array$$20], JAM.policy.p1);
    }
    return;
  }
  function v246(elem$$40, match$$38) {
    var name$$42 = match$$38[1];
    var v790;
    var v3175 = Expr.attrHandle;
    var v2286 = v3175[name$$42];
    if (v2286) {
      var v2284 = Expr.attrHandle;
      v790 = JAM.call(v2284[name$$42], v2284, [elem$$40], JAM.policy.p1);
    } else {
      var v2285;
      var v3615 = elem$$40[name$$42];
      var v3176 = v3615 != null;
      if (v3176) {
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
    var v2288 = result$$12 == null;
    if (v2288) {
      v791 = type$$32 === "!=";
    } else {
      var v2287;
      var v3178 = type$$32 === "=";
      if (v3178) {
        v2287 = value$$87 === check;
      } else {
        var v3177;
        var v3618 = type$$32 === "*=";
        if (v3618) {
          var v3616 = JAM.call(value$$87.indexOf, value$$87, [check], JAM.policy.p1);
          v3177 = v3616 >= 0;
        } else {
          var v3617;
          var v3785 = type$$32 === "~=";
          if (v3785) {
            var v3882 = " " + value$$87;
            var v3847 = v3882 + " ";
            var v3783 = JAM.call(v3847.indexOf, v3847, [check], JAM.policy.p1);
            v3617 = v3783 >= 0;
          } else {
            var v3784;
            var v3850 = !check;
            if (v3850) {
              var v3848 = value$$87;
              if (v3848) {
                v3848 = result$$12 !== false;
              }
              v3784 = v3848;
            } else {
              var v3849;
              var v3884 = type$$32 === "!=";
              if (v3884) {
                v3849 = value$$87 !== check;
              } else {
                var v3883;
                var v3895 = type$$32 === "^=";
                if (v3895) {
                  var v3893 = JAM.call(value$$87.indexOf, value$$87, [check], JAM.policy.p1);
                  v3883 = v3893 === 0;
                } else {
                  var v3894;
                  var v3905 = type$$32 === "$=";
                  if (v3905) {
                    var v3913 = value$$87.length;
                    var v3914 = check.length;
                    var v3908 = v3913 - v3914;
                    var v3903 = JAM.call(value$$87.substr, value$$87, [v3908], JAM.policy.p1);
                    v3894 = v3903 === check;
                  } else {
                    var v3904;
                    var v3910 = type$$32 === "|=";
                    if (v3910) {
                      var v3909 = value$$87 === check;
                      var v3917 = !v3909;
                      if (v3917) {
                        var v3922 = check.length;
                        var v3920 = v3922 + 1;
                        var v3915 = JAM.call(value$$87.substr, value$$87, [0, v3920], JAM.policy.p1);
                        var v3916 = check + "-";
                        v3909 = v3915 === v3916;
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
    var v3851 = !v3786;
    if (v3851) {
      v3786 = JAM.call(elem$$39.getAttribute, elem$$39, ["class"], JAM.policy.p1);
    }
    var v3619 = v3786;
    var v3179 = " " + v3619;
    var v2289 = v3179 + " ";
    var v792 = JAM.call(v2289.indexOf, v2289, [match$$37], JAM.policy.p1);
    return v792 > -1;
  }
  function v244(elem$$38, match$$36) {
    var v2290 = match$$36 === "*";
    if (v2290) {
      var v3180 = elem$$38.nodeType;
      v2290 = v3180 === 1;
    }
    var v793 = v2290;
    var v2292 = !v793;
    if (v2292) {
      var v3181 = elem$$38.nodeName;
      var v2291 = JAM.call(v3181.toLowerCase, v3181, [], JAM.policy.p1);
      v793 = v2291 === match$$36;
    }
    return v793;
  }
  function v243(elem$$37, match$$35) {
    var v2293 = elem$$37.nodeType;
    var v794 = v2293 === 1;
    if (v794) {
      var v2294 = JAM.call(elem$$37.getAttribute, elem$$37, ["id"], JAM.policy.p1);
      v794 = v2294 === match$$35;
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
          var v2295 = node$$16.nodeType;
          var v795 = v2295 === 1;
          if (v795) {
            return false;
          }
          v796 = node$$16 = node$$16.previousSibling;
        }
        var v797 = type$$31 === "first";
        if (v797) {
          return true;
        }
        node$$16 = elem$$36;
      case "last":
        var v799 = node$$16 = node$$16.nextSibling;
        for (;v799;) {
          var v2296 = node$$16.nodeType;
          var v798 = v2296 === 1;
          if (v798) {
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
        var v800 = v2297;
        if (v800) {
          return true;
        }
        var doneName$$4 = match$$34[0];
        var parent$$9 = elem$$36.parentNode;
        var v2298 = parent$$9;
        if (v2298) {
          var v3620 = parent$$9.sizcache;
          var v3182 = v3620 !== doneName$$4;
          var v3622 = !v3182;
          if (v3622) {
            var v3621 = elem$$36.nodeIndex;
            v3182 = !v3621;
          }
          v2298 = v3182;
        }
        var v802 = v2298;
        if (v802) {
          var count$$5 = 0;
          node$$16 = parent$$9.firstChild;
          for (;node$$16;) {
            var v2299 = node$$16.nodeType;
            var v801 = v2299 === 1;
            if (v801) {
              node$$16.nodeIndex = count$$5 = count$$5 + 1;
            }
            node$$16 = node$$16.nextSibling;
          }
          parent$$9.sizcache = doneName$$4;
        }
        var v803 = elem$$36.nodeIndex;
        var diff = v803 - last$$1;
        var v805 = first$$2 === 0;
        if (v805) {
          return diff === 0;
        } else {
          var v2300 = diff % first$$2;
          var v804 = v2300 === 0;
          if (v804) {
            var v2301 = diff / first$$2;
            v804 = v2301 >= 0;
          }
          return v804;
        }
      ;
    }
    return;
  }
  function v241(elem$$35, match$$33, i$$48, array$$19) {
    var name$$41 = match$$33[1];
    var v806 = Expr.filters;
    var filter$$7 = v806[name$$41];
    if (filter$$7) {
      return JAM.call(filter$$7, null, [elem$$35, i$$48, match$$33, array$$19], JAM.policy.p1);
    } else {
      var v811 = name$$41 === "contains";
      if (v811) {
        var v3787 = elem$$35.textContent;
        var v3852 = !v3787;
        if (v3852) {
          v3787 = elem$$35.innerText;
        }
        var v3623 = v3787;
        var v3789 = !v3623;
        if (v3789) {
          var v3788 = [elem$$35];
          v3623 = JAM.call(Sizzle$$1.getText, Sizzle$$1, [v3788], JAM.policy.p1);
        }
        var v3183 = v3623;
        var v3624 = !v3183;
        if (v3624) {
          v3183 = "";
        }
        var v2302 = v3183;
        var v2303 = match$$33[3];
        var v807 = JAM.call(v2302.indexOf, v2302, [v2303], JAM.policy.p1);
        return v807 >= 0;
      } else {
        var v810 = name$$41 === "not";
        if (v810) {
          var not$$4 = match$$33[3];
          var j$$1 = 0;
          var l$$6 = not$$4.length;
          var v809 = j$$1 < l$$6;
          for (;v809;) {
            var v2304 = not$$4[j$$1];
            var v808 = v2304 === elem$$35;
            if (v808) {
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
    var v2305 = match$$32[3];
    var v812 = v2305 - 0;
    return v812 === i$$47;
  }
  function v239(elem$$33, i$$46, match$$31) {
    var v2306 = match$$31[3];
    var v813 = v2306 - 0;
    return v813 === i$$46;
  }
  function v238(elem$$32, i$$45, match$$30) {
    var v2307 = match$$30[3];
    var v814 = v2307 - 0;
    return i$$45 > v814;
  }
  function v237(elem$$31, i$$44, match$$29) {
    var v2308 = match$$29[3];
    var v815 = v2308 - 0;
    return i$$44 < v815;
  }
  function v236(elem$$30, i$$43) {
    var v816 = i$$43 % 2;
    return v816 === 1;
  }
  function v235(elem$$29, i$$42) {
    var v817 = i$$42 % 2;
    return v817 === 0;
  }
  function v234(elem$$28, i$$41, match$$28, array$$18) {
    var v2309 = array$$18.length;
    var v818 = v2309 - 1;
    return i$$41 === v818;
  }
  function v233(elem$$27, i$$40) {
    return i$$40 === 0;
  }
  function v232(elem$$26) {
    var v2310 = elem$$26.ownerDocument;
    var v819 = v2310.activeElement;
    return elem$$26 === v819;
  }
  function v231(elem$$25) {
    var v820 = elem$$25.nodeName;
    return JAM.call(/input|select|textarea|button/i.test, /input|select|textarea|button/i, [v820], JAM.policy.p1);
  }
  function v230(elem$$24) {
    var v821 = elem$$24.nodeName;
    var name$$40 = JAM.call(v821.toLowerCase, v821, [], JAM.policy.p1);
    var v2311 = name$$40 === "input";
    if (v2311) {
      var v3184 = elem$$24.type;
      v2311 = "button" === v3184;
    }
    var v822 = v2311;
    var v2312 = !v822;
    if (v2312) {
      v822 = name$$40 === "button";
    }
    return v822;
  }
  function v229(elem$$23) {
    var v823 = elem$$23.nodeName;
    var name$$39 = JAM.call(v823.toLowerCase, v823, [], JAM.policy.p1);
    var v2313 = name$$39 === "input";
    var v3185 = !v2313;
    if (v3185) {
      v2313 = name$$39 === "button";
    }
    var v824 = v2313;
    if (v824) {
      var v2314 = elem$$23.type;
      v824 = "reset" === v2314;
    }
    return v824;
  }
  function v228(elem$$22) {
    var v3186 = elem$$22.nodeName;
    var v2315 = JAM.call(v3186.toLowerCase, v3186, [], JAM.policy.p1);
    var v825 = v2315 === "input";
    if (v825) {
      var v2316 = elem$$22.type;
      v825 = "image" === v2316;
    }
    return v825;
  }
  function v227(elem$$21) {
    var v826 = elem$$21.nodeName;
    var name$$38 = JAM.call(v826.toLowerCase, v826, [], JAM.policy.p1);
    var v2317 = name$$38 === "input";
    var v3187 = !v2317;
    if (v3187) {
      v2317 = name$$38 === "button";
    }
    var v827 = v2317;
    if (v827) {
      var v2318 = elem$$21.type;
      v827 = "submit" === v2318;
    }
    return v827;
  }
  function v226(elem$$20) {
    var v3188 = elem$$20.nodeName;
    var v2319 = JAM.call(v3188.toLowerCase, v3188, [], JAM.policy.p1);
    var v828 = v2319 === "input";
    if (v828) {
      var v2320 = elem$$20.type;
      v828 = "password" === v2320;
    }
    return v828;
  }
  function v225(elem$$19) {
    var v3189 = elem$$19.nodeName;
    var v2321 = JAM.call(v3189.toLowerCase, v3189, [], JAM.policy.p1);
    var v829 = v2321 === "input";
    if (v829) {
      var v2322 = elem$$19.type;
      v829 = "file" === v2322;
    }
    return v829;
  }
  function v224(elem$$18) {
    var v3190 = elem$$18.nodeName;
    var v2323 = JAM.call(v3190.toLowerCase, v3190, [], JAM.policy.p1);
    var v830 = v2323 === "input";
    if (v830) {
      var v2324 = elem$$18.type;
      v830 = "checkbox" === v2324;
    }
    return v830;
  }
  function v223(elem$$17) {
    var v3191 = elem$$17.nodeName;
    var v2325 = JAM.call(v3191.toLowerCase, v3191, [], JAM.policy.p1);
    var v831 = v2325 === "input";
    if (v831) {
      var v2326 = elem$$17.type;
      v831 = "radio" === v2326;
    }
    return v831;
  }
  function v222(elem$$16) {
    var attr$$2 = JAM.call(elem$$16.getAttribute, elem$$16, ["type"], JAM.policy.p1);
    var type$$30 = elem$$16.type;
    var v3625 = elem$$16.nodeName;
    var v3192 = JAM.call(v3625.toLowerCase, v3625, [], JAM.policy.p1);
    var v2327 = v3192 === "input";
    if (v2327) {
      v2327 = "text" === type$$30;
    }
    var v832 = v2327;
    if (v832) {
      var v2328 = attr$$2 === type$$30;
      var v3193 = !v2328;
      if (v3193) {
        v2328 = attr$$2 === null;
      }
      v832 = v2328;
    }
    return v832;
  }
  function v221(elem$$15) {
    var v833 = elem$$15.nodeName;
    return JAM.call(/h\d/i.test, /h\d/i, [v833], JAM.policy.p1);
  }
  function v220(elem$$14, i$$39, match$$27) {
    var v3626 = match$$27[3];
    var v3194 = JAM.call(Sizzle$$1, null, [v3626, elem$$14], JAM.policy.p1);
    var v2329 = v3194.length;
    var v834 = !v2329;
    return !v834;
  }
  function v219(elem$$13) {
    var v835 = elem$$13.firstChild;
    return !v835;
  }
  function v218(elem$$12) {
    var v2330 = elem$$12.firstChild;
    var v836 = !v2330;
    return !v836;
  }
  function v217(elem$$11) {
    var v837 = elem$$11.selected;
    return v837 === true;
  }
  function v216(elem$$10) {
    var v838 = elem$$10.checked;
    return v838 === true;
  }
  function v215(elem$$9) {
    var v839 = elem$$9.disabled;
    return v839 === true;
  }
  function v214(elem$$8) {
    var v2331 = elem$$8.disabled;
    var v840 = v2331 === false;
    if (v840) {
      var v2332 = elem$$8.type;
      v840 = v2332 !== "hidden";
    }
    return v840;
  }
  function v213(match$$26) {
    JAM.call(match$$26.unshift, match$$26, [true], JAM.policy.p1);
    return match$$26;
  }
  function v212(match$$25, curLoop$$4, inplace$$3, result$$11, not$$3) {
    var v2333 = match$$25[1];
    var v848 = v2333 === "not";
    if (v848) {
      var v3853 = match$$25[3];
      var v3790 = JAM.call(chunker.exec, chunker, [v3853], JAM.policy.p1);
      var v3854 = !v3790;
      if (v3854) {
        v3790 = "";
      }
      var v3627 = v3790;
      var v3195 = v3627.length;
      var v2334 = v3195 > 1;
      var v3197 = !v2334;
      if (v3197) {
        var v3196 = match$$25[3];
        v2334 = JAM.call(/^\w/.test, /^\w/, [v3196], JAM.policy.p1);
      }
      var v846 = v2334;
      if (v846) {
        var v841 = match$$25[3];
        var v3939 = JAM.call(Sizzle$$1, null, [v841, null, null, curLoop$$4], JAM.policy.p1);
        match$$25[3] = v3939;
      } else {
        var v842 = match$$25[3];
        var v843 = true ^ not$$3;
        var ret$$2 = JAM.call(Sizzle$$1.filter, Sizzle$$1, [v842, curLoop$$4, inplace$$3, v843], JAM.policy.p1);
        var v845 = !inplace$$3;
        if (v845) {
          var v844 = result$$11.push;
          JAM.call(v844.apply, v844, [result$$11, ret$$2], JAM.policy.p1);
        }
        return false;
      }
    } else {
      var v3628 = Expr.match;
      var v3198 = v3628.POS;
      var v3199 = match$$25[0];
      var v2335 = JAM.call(v3198.test, v3198, [v3199], JAM.policy.p1);
      var v3202 = !v2335;
      if (v3202) {
        var v3629 = Expr.match;
        var v3200 = v3629.CHILD;
        var v3201 = match$$25[0];
        v2335 = JAM.call(v3200.test, v3200, [v3201], JAM.policy.p1);
      }
      var v847 = v2335;
      if (v847) {
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
      var v3203 = Expr.attrMap;
      v2336 = v3203[name$$37];
    }
    var v851 = v2336;
    if (v851) {
      var v850 = Expr.attrMap;
      match$$24[1] = v850[name$$37];
    }
    var v3204 = match$$24[4];
    var v3630 = !v3204;
    if (v3630) {
      v3204 = match$$24[5];
    }
    var v2337 = v3204;
    var v3205 = !v2337;
    if (v3205) {
      v2337 = "";
    }
    var v852 = v2337;
    var v3941 = JAM.call(v852.replace, v852, [rBackslash, ""], JAM.policy.p1);
    match$$24[4] = v3941;
    var v2338 = match$$24[2];
    var v854 = v2338 === "~=";
    if (v854) {
      var v2339 = match$$24[4];
      var v853 = " " + v2339;
      match$$24[4] = v853 + " ";
    }
    return match$$24;
  }
  function v210(match$$23) {
    var v2340 = match$$23[1];
    var v863 = v2340 === "nth";
    if (v863) {
      var v2341 = match$$23[2];
      var v856 = !v2341;
      if (v856) {
        var v855 = match$$23[0];
        JAM.call(Sizzle$$1.error, Sizzle$$1, [v855], JAM.policy.p1);
      }
      var v857 = match$$23[2];
      var v3942 = JAM.call(v857.replace, v857, [/^\+|\s*/g, ""], JAM.policy.p1);
      match$$23[2] = v3942;
      var v3855 = match$$23[2];
      var v3791 = v3855 === "even";
      if (v3791) {
        v3791 = "2n";
      }
      var v3631 = v3791;
      var v3793 = !v3631;
      if (v3793) {
        var v3856 = match$$23[2];
        var v3792 = v3856 === "odd";
        if (v3792) {
          v3792 = "2n+1";
        }
        v3631 = v3792;
      }
      var v3206 = v3631;
      var v3633 = !v3206;
      if (v3633) {
        var v3857 = match$$23[2];
        var v3794 = JAM.call(/\D/.test, /\D/, [v3857], JAM.policy.p1);
        var v3632 = !v3794;
        if (v3632) {
          var v3795 = match$$23[2];
          v3632 = "0n+" + v3795;
        }
        v3206 = v3632;
      }
      var v2342 = v3206;
      var v3207 = !v2342;
      if (v3207) {
        v2342 = match$$23[2];
      }
      var v858 = v2342;
      var test = JAM.call(/(-?)(\d*)(?:n([+\-]?\d*))?/.exec, /(-?)(\d*)(?:n([+\-]?\d*))?/, [v858], JAM.policy.p1);
      var v2343 = test[1];
      var v3208 = test[2];
      var v3634 = !v3208;
      if (v3634) {
        v3208 = 1;
      }
      var v2344 = v3208;
      var v859 = v2343 + v2344;
      match$$23[2] = v859 - 0;
      var v860 = test[3];
      match$$23[3] = v860 - 0;
    } else {
      var v862 = match$$23[2];
      if (v862) {
        var v861 = match$$23[0];
        JAM.call(Sizzle$$1.error, Sizzle$$1, [v861], JAM.policy.p1);
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
    var v2346 = JAM.call(v3209.replace, v3209, [rBackslash, ""], JAM.policy.p1);
    var v866 = " " + v2346;
    match$$20 = v866 + " ";
    if (isXML$$6) {
      return match$$20;
    }
    var i$$38 = 0;
    var elem$$7;
    var v2347 = elem$$7 = curLoop$$1[i$$38];
    var v869 = v2347 != null;
    for (;v869;) {
      if (elem$$7) {
        var v3210 = elem$$7.className;
        if (v3210) {
          var v3896 = elem$$7.className;
          var v3885 = " " + v3896;
          var v3858 = v3885 + " ";
          var v3796 = JAM.call(v3858.replace, v3858, [/[\t\n\r]/g, " "], JAM.policy.p1);
          var v3635 = JAM.call(v3796.indexOf, v3796, [match$$20], JAM.policy.p1);
          v3210 = v3635 >= 0;
        }
        var v2348 = v3210;
        var v868 = not$$1 ^ v2348;
        if (v868) {
          var v867 = !inplace$$1;
          if (v867) {
            JAM.call(result$$9.push, result$$9, [elem$$7], JAM.policy.p1);
          }
        } else {
          if (inplace$$1) {
            curLoop$$1[i$$38] = false;
          }
        }
      }
      i$$38++;
      var v2349 = elem$$7 = curLoop$$1[i$$38];
      v869 = v2349 != null;
    }
    return false;
  }
  function v206(match$$19, context$$33) {
    var v3211 = context$$33.getElementsByTagName;
    var v2350 = typeof v3211;
    var v871 = v2350 !== "undefined";
    if (v871) {
      var v870 = match$$19[1];
      return JAM.call(context$$33.getElementsByTagName, context$$33, [v870], JAM.policy.p1);
    }
    return;
  }
  function v205(match$$18, context$$32) {
    var v3212 = context$$32.getElementsByName;
    var v2351 = typeof v3212;
    var v877 = v2351 !== "undefined";
    if (v877) {
      var ret$$1 = [];
      var v872 = match$$18[1];
      var results$$15 = JAM.call(context$$32.getElementsByName, context$$32, [v872], JAM.policy.p1);
      var i$$37 = 0;
      var l$$5 = results$$15.length;
      var v875 = i$$37 < l$$5;
      for (;v875;) {
        var v3213 = results$$15[i$$37];
        var v2352 = JAM.call(v3213.getAttribute, v3213, ["name"], JAM.policy.p1);
        var v2353 = match$$18[1];
        var v874 = v2352 === v2353;
        if (v874) {
          var v873 = results$$15[i$$37];
          JAM.call(ret$$1.push, ret$$1, [v873], JAM.policy.p1);
        }
        i$$37++;
        v875 = i$$37 < l$$5;
      }
      var v876;
      var v3214 = ret$$1.length;
      var v2354 = v3214 === 0;
      if (v2354) {
        v876 = null;
      } else {
        v876 = ret$$1;
      }
      return v876;
    }
    return;
  }
  function v204(match$$17, context$$31, isXML$$5) {
    var v3636 = context$$31.getElementById;
    var v3215 = typeof v3636;
    var v2355 = v3215 !== "undefined";
    if (v2355) {
      v2355 = !isXML$$5;
    }
    var v880 = v2355;
    if (v880) {
      var v878 = match$$17[1];
      var m$$3 = JAM.call(context$$31.getElementById, context$$31, [v878], JAM.policy.p1);
      var v879;
      var v3216 = m$$3;
      if (v3216) {
        v3216 = m$$3.parentNode;
      }
      var v2356 = v3216;
      if (v2356) {
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
    var v3217 = typeof part$$3;
    var v2357 = v3217 === "string";
    if (v2357) {
      var v3218 = JAM.call(rNonWord.test, rNonWord, [part$$3], JAM.policy.p1);
      v2357 = !v3218;
    }
    var v881 = v2357;
    if (v881) {
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
    var v3219 = typeof part$$2;
    var v2358 = v3219 === "string";
    if (v2358) {
      var v3220 = JAM.call(rNonWord.test, rNonWord, [part$$2], JAM.policy.p1);
      v2358 = !v3220;
    }
    var v882 = v2358;
    if (v882) {
      part$$2 = JAM.call(part$$2.toLowerCase, part$$2, [], JAM.policy.p1);
      nodeCheck$$2 = part$$2;
      checkFn = dirNodeCheck;
    }
    JAM.call(checkFn, null, ["parentNode", part$$2, doneName$$2, checkSet$$5, nodeCheck$$2, isXML$$3], JAM.policy.p1);
    return;
  }
  function v201(checkSet$$4, part$$1) {
    var elem$$6;
    var v883 = typeof part$$1;
    var isPartStr$$1 = v883 === "string";
    var i$$36 = 0;
    var l$$4 = checkSet$$4.length;
    var v2359 = isPartStr$$1;
    if (v2359) {
      var v3221 = JAM.call(rNonWord.test, rNonWord, [part$$1], JAM.policy.p1);
      v2359 = !v3221;
    }
    var v888 = v2359;
    if (v888) {
      part$$1 = JAM.call(part$$1.toLowerCase, part$$1, [], JAM.policy.p1);
      var v885 = i$$36 < l$$4;
      for (;v885;) {
        elem$$6 = checkSet$$4[i$$36];
        if (elem$$6) {
          var parent$$8 = elem$$6.parentNode;
          var v884;
          var v3637 = parent$$8.nodeName;
          var v3222 = JAM.call(v3637.toLowerCase, v3637, [], JAM.policy.p1);
          var v2360 = v3222 === part$$1;
          if (v2360) {
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
            var v2361 = elem$$6.parentNode;
            v886 = v2361 === part$$1;
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
    var v889 = typeof part;
    var isPartStr = v889 === "string";
    var v890 = isPartStr;
    if (v890) {
      var v2362 = JAM.call(rNonWord.test, rNonWord, [part], JAM.policy.p1);
      v890 = !v2362;
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
      var v894 = elem$$5 = checkSet$$3[i$$35];
      if (v894) {
        var v2363 = elem$$5 = elem$$5.previousSibling;
        if (v2363) {
          var v3223 = elem$$5.nodeType;
          v2363 = v3223 !== 1;
        }
        var v892 = v2363;
        for (;v892;) {
          var v2364 = elem$$5 = elem$$5.previousSibling;
          if (v2364) {
            var v3224 = elem$$5.nodeType;
            v2364 = v3224 !== 1;
          }
          v892 = v2364;
        }
        var v893;
        var v3225 = isPartStrNotTag;
        var v3639 = !v3225;
        if (v3639) {
          var v3638 = elem$$5;
          if (v3638) {
            var v3859 = elem$$5.nodeName;
            var v3797 = JAM.call(v3859.toLowerCase, v3859, [], JAM.policy.p1);
            v3638 = v3797 === part;
          }
          v3225 = v3638;
        }
        var v2365 = v3225;
        if (v2365) {
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
      var v2367 = set$$4[0];
      v896 = JAM.call(Sizzle$$1.isXML, Sizzle$$1, [v2367], JAM.policy.p1);
    }
    var isXMLFilter = v896;
    var v2368 = expr$$7;
    if (v2368) {
      v2368 = set$$4.length;
    }
    var v915 = v2368;
    for (;v915;) {
      var type$$29;
      var v912 = Expr.filter;
      for (type$$29 in v912) {
        var v3798 = Expr.leftMatch;
        var v3640 = v3798[type$$29];
        var v3226 = match$$16 = JAM.call(v3640.exec, v3640, [expr$$7], JAM.policy.p1);
        var v2369 = v3226 != null;
        if (v2369) {
          v2369 = match$$16[2];
        }
        var v911 = v2369;
        if (v911) {
          var found$$1;
          var item$$4;
          var v897 = Expr.filter;
          var filter$$6 = v897[type$$29];
          var left$$4 = match$$16[1];
          anyFound = false;
          JAM.call(match$$16.splice, match$$16, [1, 1], JAM.policy.p1);
          var v3641 = left$$4.length;
          var v3227 = v3641 - 1;
          var v2370 = JAM.call(left$$4.substr, left$$4, [v3227], JAM.policy.p1);
          var v898 = v2370 === "\\";
          if (v898) {
            continue;
          }
          var v899 = curLoop === result$$8;
          if (v899) {
            result$$8 = [];
          }
          var v2371 = Expr.preFilter;
          var v903 = v2371[type$$29];
          if (v903) {
            var v900 = Expr.preFilter;
            match$$16 = JAM.call(v900[type$$29], v900, [match$$16, curLoop, inplace, result$$8, not, isXMLFilter], JAM.policy.p1);
            var v902 = !match$$16;
            if (v902) {
              anyFound = found$$1 = true;
            } else {
              var v901 = match$$16 === true;
              if (v901) {
                continue;
              }
            }
          }
          if (match$$16) {
            var i$$34 = 0;
            var v2372 = item$$4 = curLoop[i$$34];
            var v906 = v2372 != null;
            for (;v906;) {
              if (item$$4) {
                found$$1 = JAM.call(filter$$6, null, [item$$4, match$$16, i$$34, curLoop], JAM.policy.p1);
                var v2373 = !found$$1;
                var v904 = !v2373;
                var pass = not ^ v904;
                var v2374 = inplace;
                if (v2374) {
                  v2374 = found$$1 != null;
                }
                var v905 = v2374;
                if (v905) {
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
              var v2375 = item$$4 = curLoop[i$$34];
              v906 = v2375 != null;
            }
          }
          var v910 = found$$1 !== undefined;
          if (v910) {
            var v907 = !inplace;
            if (v907) {
              curLoop = result$$8;
            }
            var v2376 = Expr.match;
            var v908 = v2376[type$$29];
            expr$$7 = JAM.call(expr$$7.replace, expr$$7, [v908, ""], JAM.policy.p1);
            var v909 = !anyFound;
            if (v909) {
              return [];
            }
            break;
          }
        }
      }
      var v914 = expr$$7 === old;
      if (v914) {
        var v913 = anyFound == null;
        if (v913) {
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
    var v916 = !expr$$6;
    if (v916) {
      return [];
    }
    var i$$33 = 0;
    var v917 = Expr.order;
    var l$$2 = v917.length;
    var v925 = i$$33 < l$$2;
    for (;v925;) {
      var match$$15;
      var v918 = Expr.order;
      var type$$28 = v918[i$$33];
      var v3228 = Expr.leftMatch;
      var v2378 = v3228[type$$28];
      var v924 = match$$15 = JAM.call(v2378.exec, v2378, [expr$$6], JAM.policy.p1);
      if (v924) {
        var left$$3 = match$$15[1];
        JAM.call(match$$15.splice, match$$15, [1, 1], JAM.policy.p1);
        var v3642 = left$$3.length;
        var v3229 = v3642 - 1;
        var v2379 = JAM.call(left$$3.substr, left$$3, [v3229], JAM.policy.p1);
        var v923 = v2379 !== "\\";
        if (v923) {
          var v2380 = match$$15[1];
          var v3230 = !v2380;
          if (v3230) {
            v2380 = "";
          }
          var v919 = v2380;
          var v3943 = JAM.call(v919.replace, v919, [rBackslash, ""], JAM.policy.p1);
          match$$15[1] = v3943;
          var v920 = Expr.find;
          set$$3 = JAM.call(v920[type$$28], v920, [match$$15, context$$30, isXML$$2], JAM.policy.p1);
          var v922 = set$$3 != null;
          if (v922) {
            var v2381 = Expr.match;
            var v921 = v2381[type$$28];
            expr$$6 = JAM.call(expr$$6.replace, expr$$6, [v921, ""], JAM.policy.p1);
            break;
          }
        }
      }
      i$$33++;
      v925 = i$$33 < l$$2;
    }
    var v927 = !set$$3;
    if (v927) {
      var v926;
      var v3643 = context$$30.getElementsByTagName;
      var v3231 = typeof v3643;
      var v2382 = v3231 !== "undefined";
      if (v2382) {
        v926 = JAM.call(context$$30.getElementsByTagName, context$$30, ["*"], JAM.policy.p1);
      } else {
        v926 = [];
      }
      set$$3 = v926;
    }
    return {set:set$$3, expr:expr$$6};
  }
  function v194(node$$15, expr$$5) {
    var v3232 = [node$$15];
    var v2383 = JAM.call(Sizzle$$1, null, [expr$$5, null, null, v3232], JAM.policy.p1);
    var v928 = v2383.length;
    return v928 > 0;
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
        var v2384 = results$$14.length;
        var v931 = i$$32 < v2384;
        for (;v931;) {
          var v2385 = results$$14[i$$32];
          var v3233 = i$$32 - 1;
          var v2386 = results$$14[v3233];
          var v930 = v2385 === v2386;
          if (v930) {
            var v929 = i$$32;
            i$$32 = i$$32 - 1;
            JAM.call(results$$14.splice, results$$14, [v929, 1], JAM.policy.p1);
          }
          i$$32++;
          var v2387 = results$$14.length;
          v931 = i$$32 < v2387;
        }
      }
    }
    return;
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
    var v2388 = context$$38.nodeType;
    if (v2388) {
      v932 = [context$$38];
    } else {
      v932 = context$$38;
    }
    var root$$1 = v932;
    var v3234 = Expr.match;
    var v2389 = v3234.PSEUDO;
    var v934 = match$$45 = JAM.call(v2389.exec, v2389, [selector$$2], JAM.policy.p1);
    for (;v934;) {
      var v2390 = match$$45[0];
      later = later + v2390;
      var v2391 = Expr.match;
      var v933 = v2391.PSEUDO;
      selector$$2 = JAM.call(selector$$2.replace, selector$$2, [v933, ""], JAM.policy.p1);
      var v3235 = Expr.match;
      var v2392 = v3235.PSEUDO;
      v934 = match$$45 = JAM.call(v2392.exec, v2392, [selector$$2], JAM.policy.p1);
    }
    var v935;
    var v3236 = Expr.relative;
    var v2393 = v3236[selector$$2];
    if (v2393) {
      v935 = selector$$2 + "*";
    } else {
      v935 = selector$$2;
    }
    selector$$2 = v935;
    var i$$54 = 0;
    var l$$8 = root$$1.length;
    var v937 = i$$54 < l$$8;
    for (;v937;) {
      var v936 = root$$1[i$$54];
      JAM.call(Sizzle$$1, null, [selector$$2, v936, tmpSet], JAM.policy.p1);
      i$$54++;
      v937 = i$$54 < l$$8;
    }
    return JAM.call(Sizzle$$1.filter, Sizzle$$1, [later, tmpSet], JAM.policy.p1);
  }
  function makeArray(array$$21, results$$16) {
    var v2394 = Array.prototype;
    var v938 = v2394.slice;
    array$$21 = JAM.call(v938.call, v938, [array$$21, 0], JAM.policy.p1);
    if (results$$16) {
      var v939 = results$$16.push;
      JAM.call(v939.apply, v939, [results$$16, array$$21], JAM.policy.p1);
      return results$$16;
    }
    return array$$21;
  }
  function fescape(all$$1, num$$4) {
    var v2395 = num$$4 - 0;
    var v940 = v2395 + 1;
    return "\\" + v940;
  }
  function Sizzle$$1(selector$$1, context$$29, results$$13, seed) {
    results$$13 = results$$13 || [];
    context$$29 = context$$29 || document;
    var origContext = context$$29;
    var v3237 = context$$29.nodeType;
    var v2396 = v3237 !== 1;
    if (v2396) {
      var v3238 = context$$29.nodeType;
      v2396 = v3238 !== 9;
    }
    var v941 = v2396;
    if (v941) {
      return [];
    }
    var v2397 = !selector$$1;
    var v3240 = !v2397;
    if (v3240) {
      var v3239 = typeof selector$$1;
      v2397 = v3239 !== "string";
    }
    var v942 = v2397;
    if (v942) {
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
        var v943 = m$$2[1];
        JAM.call(parts.push, parts, [v943], JAM.policy.p1);
        var v944 = m$$2[2];
        if (v944) {
          extra = m$$2[3];
          break;
        }
      }
    } while (m$$2);
    var v3241 = parts.length;
    var v2398 = v3241 > 1;
    if (v2398) {
      v2398 = JAM.call(origPOS.exec, origPOS, [selector$$1], JAM.policy.p1);
    }
    var v960 = v2398;
    if (v960) {
      var v3242 = parts.length;
      var v2399 = v3242 === 2;
      if (v2399) {
        var v3243 = Expr.relative;
        var v3244 = parts[0];
        v2399 = v3243[v3244];
      }
      var v949 = v2399;
      if (v949) {
        var v2400 = parts[0];
        var v2401 = parts[1];
        var v945 = v2400 + v2401;
        set$$1 = posProcess(v945, context$$29);
      } else {
        var v946;
        var v3245 = Expr.relative;
        var v3246 = parts[0];
        var v2403 = v3245[v3246];
        if (v2403) {
          v946 = [context$$29];
        } else {
          var v2402 = JAM.call(parts.shift, parts, [], JAM.policy.p1);
          v946 = JAM.call(Sizzle$$1, null, [v2402, context$$29], JAM.policy.p1);
        }
        set$$1 = v946;
        var v948 = parts.length;
        for (;v948;) {
          selector$$1 = JAM.call(parts.shift, parts, [], JAM.policy.p1);
          var v2404 = Expr.relative;
          var v947 = v2404[selector$$1];
          if (v947) {
            var v2405 = JAM.call(parts.shift, parts, [], JAM.policy.p1);
            selector$$1 = selector$$1 + v2405;
          }
          set$$1 = posProcess(selector$$1, set$$1);
          v948 = parts.length;
        }
      }
    } else {
      var v3860 = !seed;
      if (v3860) {
        var v3886 = parts.length;
        v3860 = v3886 > 1;
      }
      var v3799 = v3860;
      if (v3799) {
        var v3861 = context$$29.nodeType;
        v3799 = v3861 === 9;
      }
      var v3644 = v3799;
      if (v3644) {
        v3644 = !contextXML;
      }
      var v3247 = v3644;
      if (v3247) {
        var v3800 = Expr.match;
        var v3645 = v3800.ID;
        var v3646 = parts[0];
        v3247 = JAM.call(v3645.test, v3645, [v3646], JAM.policy.p1);
      }
      var v2406 = v3247;
      if (v2406) {
        var v3801 = Expr.match;
        var v3647 = v3801.ID;
        var v3862 = parts.length;
        var v3802 = v3862 - 1;
        var v3648 = parts[v3802];
        var v3248 = JAM.call(v3647.test, v3647, [v3648], JAM.policy.p1);
        v2406 = !v3248;
      }
      var v952 = v2406;
      if (v952) {
        var v950 = JAM.call(parts.shift, parts, [], JAM.policy.p1);
        ret = JAM.call(Sizzle$$1.find, Sizzle$$1, [v950, context$$29, contextXML], JAM.policy.p1);
        var v951;
        var v2409 = ret.expr;
        if (v2409) {
          var v3249 = ret.expr;
          var v3250 = ret.set;
          var v2407 = JAM.call(Sizzle$$1.filter, Sizzle$$1, [v3249, v3250], JAM.policy.p1);
          v951 = v2407[0];
        } else {
          var v2408 = ret.set;
          v951 = v2408[0];
        }
        context$$29 = v951;
      }
      if (context$$29) {
        var v953;
        if (seed) {
          var v2410 = JAM.call(parts.pop, parts, [], JAM.policy.p1);
          var v2411 = JAM.call(makeArray, null, [seed], JAM.policy.p1);
          v953 = {expr:v2410, set:v2411};
        } else {
          var v2412 = JAM.call(parts.pop, parts, [], JAM.policy.p1);
          var v3251;
          var v3887 = parts.length;
          var v3863 = v3887 === 1;
          if (v3863) {
            var v3897 = parts[0];
            var v3888 = v3897 === "~";
            var v3899 = !v3888;
            if (v3899) {
              var v3898 = parts[0];
              v3888 = v3898 === "+";
            }
            v3863 = v3888;
          }
          var v3803 = v3863;
          if (v3803) {
            v3803 = context$$29.parentNode;
          }
          var v3649 = v3803;
          if (v3649) {
            v3251 = context$$29.parentNode;
          } else {
            v3251 = context$$29;
          }
          var v2413 = v3251;
          v953 = JAM.call(Sizzle$$1.find, Sizzle$$1, [v2412, v2413, contextXML], JAM.policy.p1);
        }
        ret = v953;
        var v954;
        var v2416 = ret.expr;
        if (v2416) {
          var v2414 = ret.expr;
          var v2415 = ret.set;
          v954 = JAM.call(Sizzle$$1.filter, Sizzle$$1, [v2414, v2415], JAM.policy.p1);
        } else {
          v954 = ret.set;
        }
        set$$1 = v954;
        var v2417 = parts.length;
        var v955 = v2417 > 0;
        if (v955) {
          checkSet$$2 = JAM.call(makeArray, null, [set$$1], JAM.policy.p1);
        } else {
          prune = false;
        }
        var v959 = parts.length;
        for (;v959;) {
          cur$$2 = JAM.call(parts.pop, parts, [], JAM.policy.p1);
          pop = cur$$2;
          var v3252 = Expr.relative;
          var v2418 = v3252[cur$$2];
          var v956 = !v2418;
          if (v956) {
            cur$$2 = "";
          } else {
            pop = JAM.call(parts.pop, parts, [], JAM.policy.p1);
          }
          var v957 = pop == null;
          if (v957) {
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
    var v961 = !checkSet$$2;
    if (v961) {
      checkSet$$2 = set$$1;
    }
    var v963 = !checkSet$$2;
    if (v963) {
      var v962 = cur$$2 || selector$$1;
      JAM.call(Sizzle$$1.error, Sizzle$$1, [v962], JAM.policy.p1);
    }
    var v2419 = JAM.call(toString.call, toString, [checkSet$$2], JAM.policy.p1);
    var v973 = v2419 === "[object Array]";
    if (v973) {
      var v972 = !prune;
      if (v972) {
        var v964 = results$$13.push;
        JAM.call(v964.apply, v964, [results$$13, checkSet$$2], JAM.policy.p1);
      } else {
        var v2420 = context$$29;
        if (v2420) {
          var v3253 = context$$29.nodeType;
          v2420 = v3253 === 1;
        }
        var v971 = v2420;
        if (v971) {
          i$$31 = 0;
          var v2421 = checkSet$$2[i$$31];
          var v967 = v2421 != null;
          for (;v967;) {
            var v2422 = checkSet$$2[i$$31];
            if (v2422) {
              var v3650 = checkSet$$2[i$$31];
              var v3254 = v3650 === true;
              var v3652 = !v3254;
              if (v3652) {
                var v3864 = checkSet$$2[i$$31];
                var v3804 = v3864.nodeType;
                var v3651 = v3804 === 1;
                if (v3651) {
                  var v3805 = checkSet$$2[i$$31];
                  v3651 = JAM.call(Sizzle$$1.contains, Sizzle$$1, [context$$29, v3805], JAM.policy.p1);
                }
                v3254 = v3651;
              }
              v2422 = v3254;
            }
            var v966 = v2422;
            if (v966) {
              var v965 = set$$1[i$$31];
              JAM.call(results$$13.push, results$$13, [v965], JAM.policy.p1);
            }
            i$$31++;
            var v2423 = checkSet$$2[i$$31];
            v967 = v2423 != null;
          }
        } else {
          i$$31 = 0;
          var v2424 = checkSet$$2[i$$31];
          var v970 = v2424 != null;
          for (;v970;) {
            var v2425 = checkSet$$2[i$$31];
            if (v2425) {
              var v3653 = checkSet$$2[i$$31];
              var v3255 = v3653.nodeType;
              v2425 = v3255 === 1;
            }
            var v969 = v2425;
            if (v969) {
              var v968 = set$$1[i$$31];
              JAM.call(results$$13.push, results$$13, [v968], JAM.policy.p1);
            }
            i$$31++;
            var v2426 = checkSet$$2[i$$31];
            v970 = v2426 != null;
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
          var v2427 = elem$$1.sizcache;
          var v975 = v2427 === doneName;
          if (v975) {
            var v974 = elem$$1.sizset;
            match$$13 = checkSet[v974];
            break;
          }
          var v3256 = elem$$1.nodeType;
          var v2428 = v3256 === 1;
          if (v2428) {
            v2428 = !isXML;
          }
          var v976 = v2428;
          if (v976) {
            elem$$1.sizcache = doneName;
            elem$$1.sizset = i$$29;
          }
          var v3257 = elem$$1.nodeName;
          var v2429 = JAM.call(v3257.toLowerCase, v3257, [], JAM.policy.p1);
          var v977 = v2429 === cur;
          if (v977) {
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
          var v2430 = elem$$2.sizcache;
          var v980 = v2430 === doneName$$1;
          if (v980) {
            var v979 = elem$$2.sizset;
            match$$14 = checkSet$$1[v979];
            break;
          }
          var v2431 = elem$$2.nodeType;
          var v985 = v2431 === 1;
          if (v985) {
            var v981 = !isXML$$1;
            if (v981) {
              elem$$2.sizcache = doneName$$1;
              elem$$2.sizset = i$$30;
            }
            var v2432 = typeof cur$$1;
            var v984 = v2432 !== "string";
            if (v984) {
              var v982 = elem$$2 === cur$$1;
              if (v982) {
                match$$14 = true;
                break;
              }
            } else {
              var v3654 = [elem$$2];
              var v3258 = JAM.call(Sizzle$$1.filter, Sizzle$$1, [cur$$1, v3654], JAM.policy.p1);
              var v2433 = v3258.length;
              var v983 = v2433 > 0;
              if (v983) {
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
  var v987 = Object.prototype;
  var toString = v987.toString;
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
  var v989 = ["ID", "NAME", "TAG"];
  var v990 = {ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/};
  var v991 = {"class":"className", "for":"htmlFor"};
  var v992 = {href:v198, type:v199};
  var v993 = {"+":v200, ">":v201, "":v202, "~":v203};
  var v994 = {ID:v204, NAME:v205, TAG:v206};
  var v995 = {CLASS:v207, ID:v208, TAG:v209, CHILD:v210, ATTR:v211, PSEUDO:v212, POS:v213};
  var v996 = {enabled:v214, disabled:v215, checked:v216, selected:v217, parent:v218, empty:v219, has:v220, header:v221, text:v222, radio:v223, checkbox:v224, file:v225, password:v226, submit:v227, image:v228, reset:v229, button:v230, input:v231, focus:v232};
  var v997 = {first:v233, last:v234, even:v235, odd:v236, lt:v237, gt:v238, nth:v239, eq:v240};
  var v998 = {PSEUDO:v241, CHILD:v242, ID:v243, TAG:v244, CLASS:v245, ATTR:v246, POS:v247};
  var Expr = Sizzle$$1.selectors = {order:v989, match:v990, leftMatch:{}, attrMap:v991, attrHandle:v992, relative:v993, find:v994, preFilter:v995, filters:v996, setFilters:v997, filter:v998};
  var v999 = Expr.match;
  var origPOS = v999.POS;
  var type$$27;
  var v1004 = Expr.match;
  for (type$$27 in v1004) {
    var v1000 = Expr.match;
    var v1001 = type$$27;
    var v3806 = Expr.match;
    var v3655 = v3806[type$$27];
    var v3259 = v3655.source;
    var v3260 = /(?![^\[]*\])(?![^\(]*\))/.source;
    var v2434 = v3259 + v3260;
    var v3944 = new RegExp(v2434);
    introspect(JAM.policy.p2) {
      v1000[v1001] = v3944;
    }
    var v1002 = Expr.leftMatch;
    var v1003 = type$$27;
    var v3261 = /(^(?:.|\r|\n)*?)/.source;
    var v3865 = Expr.match;
    var v3807 = v3865[type$$27];
    var v3656 = v3807.source;
    var v3262 = JAM.call(v3656.replace, v3656, [/\\(\d+)/g, fescape], JAM.policy.p1);
    var v2435 = v3261 + v3262;
    var v3945 = new RegExp(v2435);
    introspect(JAM.policy.p2) {
      v1002[v1003] = v3945;
    }
  }
  try {
    var v3657 = Array.prototype;
    var v3263 = v3657.slice;
    var v3658 = document.documentElement;
    var v3264 = v3658.childNodes;
    var v2436 = JAM.call(v3263.call, v3263, [v3264, 0], JAM.policy.p1);
    var v1005 = v2436[0];
    v1005.nodeType;
  } catch (e$$24) {
    makeArray = v248;
  }
  var sortOrder;
  var siblingCheck;
  var v2437 = document.documentElement;
  var v1006 = v2437.compareDocumentPosition;
  if (v1006) {
    sortOrder = v249;
  } else {
    sortOrder = v250;
    siblingCheck = v251;
  }
  Sizzle$$1.getText = v252;
  v255();
  v258();
  var v1007 = document.querySelectorAll;
  if (v1007) {
    v260();
  }
  v262();
  v264();
  var v2438 = document.documentElement;
  var v1009 = v2438.contains;
  if (v1009) {
    Sizzle$$1.contains = v265;
  } else {
    var v2439 = document.documentElement;
    var v1008 = v2439.compareDocumentPosition;
    if (v1008) {
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
    var v1010 = Prototype.Selector;
    var match$$12 = v1010.match;
    var length$$29 = elements$$4.length;
    var matchIndex = 0;
    var i$$27;
    i$$27 = 0;
    var v1013 = i$$27 < length$$29;
    for (;v1013;) {
      var v3265 = elements$$4[i$$27];
      var v2440 = JAM.call(match$$12, null, [v3265, expression$$6], JAM.policy.p1);
      if (v2440) {
        var v3266 = matchIndex;
        matchIndex = matchIndex + 1;
        v2440 = index$$60 == v3266;
      }
      var v1012 = v2440;
      if (v1012) {
        var v1011 = elements$$4[i$$27];
        return JAM.call(Element.extend, Element, [v1011], JAM.policy.p1);
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
      var v1014 = elements$$5[i$$28];
      JAM.call(Element.extend, Element, [v1014], JAM.policy.p1);
      i$$28++;
      v1015 = i$$28 < length$$30;
    }
    return elements$$5;
  }
  var K = Prototype.K;
  var v2441;
  var v3659 = Element.extend;
  var v3267 = v3659 === K;
  if (v3267) {
    v2441 = K;
  } else {
    v2441 = extendElements;
  }
  var v1016 = v2441;
  var v1017 = Element.extend;
  return {select:select$$1, match:match$$11, find:find, extendElements:v1016, extendElement:v1017};
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
    var v1021 = JAM.call(this.getWidth, this, [], JAM.policy.p1);
    var v1022 = JAM.call(this.getHeight, this, [], JAM.policy.p1);
    return {width:v1021, height:v1022};
  }
  function getWidth$$1() {
    var v1023 = getRootElement();
    return v1023.clientWidth;
  }
  function getHeight$$1() {
    var v1024 = getRootElement();
    return v1024.clientHeight;
  }
  function getScrollOffsets() {
    var v2442 = window.pageXOffset;
    var v3269 = !v2442;
    if (v3269) {
      var v3268 = document.documentElement;
      v2442 = v3268.scrollLeft;
    }
    var v1025 = v2442;
    var v2444 = !v1025;
    if (v2444) {
      var v2443 = document.body;
      v1025 = v2443.scrollLeft;
    }
    var x$$48 = v1025;
    var v2445 = window.pageYOffset;
    var v3271 = !v2445;
    if (v3271) {
      var v3270 = document.documentElement;
      v2445 = v3270.scrollTop;
    }
    var v1026 = v2445;
    var v2447 = !v1026;
    if (v2447) {
      var v2446 = document.body;
      v1026 = v2446.scrollTop;
    }
    var y$$30 = v1026;
    var v1027 = Element.Offset;
    return JAM.new(v1027, [x$$48, y$$30]);
  }
  var v2448 = Prototype.Browser;
  var v1028 = v2448.Opera;
  if (v1028) {
    var v3660 = window.opera;
    var v3272 = JAM.call(v3660.version, v3660, [], JAM.policy.p1);
    var v2449 = JAM.call(window.parseFloat, window, [v3272], JAM.policy.p1);
    v1028 = v2449 < 9.5;
  }
  var IS_OLD_OPERA = v1028;
  var ROOT = null;
  document.viewport = {getDimensions:getDimensions$$1, getWidth:getWidth$$1, getHeight:getHeight$$1, getScrollOffsets:getScrollOffsets};
  return;
}
function v187() {
  function v186(element$$144) {
    element$$144 = JAM.call($, null, [element$$144], JAM.policy.p1);
    var v1030 = isDetached(element$$144);
    if (v1030) {
      var v1029 = Element.Offset;
      return JAM.new(v1029, [0, 0]);
    }
    var rect$$2 = JAM.call(element$$144.getBoundingClientRect, element$$144, [], JAM.policy.p1);
    var docEl = document.documentElement;
    var v1031 = Element.Offset;
    var v2450 = rect$$2.left;
    var v2451 = docEl.clientLeft;
    var v1032 = v2450 - v2451;
    var v2452 = rect$$2.top;
    var v2453 = docEl.clientTop;
    var v1033 = v2452 - v2453;
    return JAM.new(v1031, [v1032, v1033]);
  }
  function v185(element$$143) {
    element$$143 = JAM.call($, null, [element$$143], JAM.policy.p1);
    var valueT$$4 = 0;
    var valueL$$4 = 0;
    do {
      var v3273 = element$$143.offsetTop;
      var v3661 = !v3273;
      if (v3661) {
        v3273 = 0;
      }
      var v2454 = v3273;
      valueT$$4 = valueT$$4 + v2454;
      var v3274 = element$$143.offsetLeft;
      var v3662 = !v3274;
      if (v3662) {
        v3274 = 0;
      }
      var v2455 = v3274;
      valueL$$4 = valueL$$4 + v2455;
      var v2456 = element$$143.offsetParent;
      var v2457 = document.body;
      var v1035 = v2456 == v2457;
      if (v1035) {
        var v2458 = JAM.call(Element.getStyle, Element, [element$$143, "position"], JAM.policy.p1);
        var v1034 = v2458 == "absolute";
        if (v1034) {
          break;
        }
      }
      element$$143 = element$$143.offsetParent;
    } while (element$$143);
    var v1036 = Element.Offset;
    return JAM.new(v1036, [valueL$$4, valueT$$4]);
  }
  function v184(proceed$$1, element$$142) {
    element$$142 = JAM.call($, null, [element$$142], JAM.policy.p1);
    var v2459 = element$$142.parentNode;
    var v1038 = !v2459;
    if (v1038) {
      var v1037 = Element.Offset;
      return JAM.new(v1037, [0, 0]);
    }
    var position$$5 = JAM.call(element$$142.getStyle, element$$142, ["position"], JAM.policy.p1);
    var v1039 = position$$5 !== "static";
    if (v1039) {
      return JAM.call(proceed$$1, null, [element$$142], JAM.policy.p1);
    }
    var offsetParent$$1 = JAM.call(element$$142.getOffsetParent, element$$142, [], JAM.policy.p1);
    var v2460 = offsetParent$$1;
    if (v2460) {
      var v3275 = JAM.call(offsetParent$$1.getStyle, offsetParent$$1, ["position"], JAM.policy.p1);
      v2460 = v3275 === "fixed";
    }
    var v1040 = v2460;
    if (v1040) {
      JAM.call(hasLayout, null, [offsetParent$$1], JAM.policy.p1);
    }
    var v1041 = {position:"relative"};
    JAM.call(element$$142.setStyle, element$$142, [v1041], JAM.policy.p1);
    var value$$86 = JAM.call(proceed$$1, null, [element$$142], JAM.policy.p1);
    var v1042 = {position:position$$5};
    JAM.call(element$$142.setStyle, element$$142, [v1042], JAM.policy.p1);
    return value$$86;
  }
  function v183(proceed, element$$141) {
    element$$141 = JAM.call($, null, [element$$141], JAM.policy.p1);
    var v3808 = element$$141.nodeType;
    var v3809 = Node.DOCUMENT_NODE;
    var v3663 = v3808 === v3809;
    var v3810 = !v3663;
    if (v3810) {
      v3663 = isDetached(element$$141);
    }
    var v3276 = v3663;
    var v3665 = !v3276;
    if (v3665) {
      var v3811 = element$$141.nodeName;
      var v3664 = JAM.call(v3811.toUpperCase, v3811, [], JAM.policy.p1);
      v3276 = v3664 === "BODY";
    }
    var v2461 = v3276;
    var v3278 = !v2461;
    if (v3278) {
      var v3666 = element$$141.nodeName;
      var v3277 = JAM.call(v3666.toUpperCase, v3666, [], JAM.policy.p1);
      v2461 = v3277 === "HTML";
    }
    var v1044 = v2461;
    if (v1044) {
      var v1043 = document.body;
      return JAM.call($, null, [v1043], JAM.policy.p1);
    }
    var position$$4 = JAM.call(element$$141.getStyle, element$$141, ["position"], JAM.policy.p1);
    var v1045 = position$$4 !== "static";
    if (v1045) {
      return JAM.call(proceed, null, [element$$141], JAM.policy.p1);
    }
    var v1046 = {position:"relative"};
    JAM.call(element$$141.setStyle, element$$141, [v1046], JAM.policy.p1);
    var value$$85 = JAM.call(proceed, null, [element$$141], JAM.policy.p1);
    var v1047 = {position:position$$4};
    JAM.call(element$$141.setStyle, element$$141, [v1047], JAM.policy.p1);
    return value$$85;
  }
  function v182() {
    var v1048 = this.left;
    var v1049 = this.top;
    return [v1048, v1049];
  }
  function v181() {
    return JAM.call("[#{left}, #{top}]".interpolate, "[#{left}, #{top}]", [this], JAM.policy.p1);
  }
  function v180() {
    return JAM.call("#<Element.Offset left: #{left} top: #{top}>".interpolate, "#<Element.Offset left: #{left} top: #{top}>", [this], JAM.policy.p1);
  }
  function v179(offset$$13) {
    var v1050 = Element.Offset;
    var v2462 = this.left;
    var v2463 = offset$$13.left;
    var v1051 = v2462 - v2463;
    var v2464 = this.top;
    var v2465 = offset$$13.top;
    var v1052 = v2464 - v2465;
    return JAM.new(v1050, [v1051, v1052]);
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
    var v1053 = JAM.call(element$$140.getOffsetParent, element$$140, [], JAM.policy.p1);
    var parent$$7 = JAM.call(hasLayout, null, [v1053], JAM.policy.p1);
    var rect$$1 = JAM.call(element$$140.getBoundingClientRect, element$$140, [], JAM.policy.p1);
    var pRect$$1 = JAM.call(parent$$7.getBoundingClientRect, parent$$7, [], JAM.policy.p1);
    var v2466 = pRect$$1.bottom;
    var v2467 = rect$$1.bottom;
    var v1054 = v2466 - v2467;
    return JAM.call(v1054.round, v1054, [], JAM.policy.p1);
  }
  function v176(element$$139) {
    var v1055 = JAM.call(element$$139.getOffsetParent, element$$139, [], JAM.policy.p1);
    var parent$$6 = JAM.call(hasLayout, null, [v1055], JAM.policy.p1);
    var rect = JAM.call(element$$139.getBoundingClientRect, element$$139, [], JAM.policy.p1);
    var pRect = JAM.call(parent$$6.getBoundingClientRect, parent$$6, [], JAM.policy.p1);
    var v2468 = pRect.right;
    var v2469 = rect.right;
    var v1056 = v2468 - v2469;
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
    var v1057 = pWidth - mWidth;
    var v1058 = offset$$12.left;
    return v1057 - v1058;
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
    var v1059 = pHeight - mHeight;
    var v1060 = offset$$10.top;
    return v1059 - v1060;
  }
  function v160(element$$123) {
    var offset$$9 = JAM.call(element$$123.positionedOffset, element$$123, [], JAM.policy.p1);
    return offset$$9.top;
  }
  function v159(element$$122) {
    var bWidth$$1 = JAM.call(this.get, this, ["border-box-width"], JAM.policy.p1);
    var mLeft = JAM.call(this.get, this, ["margin-left"], JAM.policy.p1);
    var mRight = JAM.call(this.get, this, ["margin-right"], JAM.policy.p1);
    var v1061 = bWidth$$1 <= 0;
    if (v1061) {
      return 0;
    }
    var v1062 = bWidth$$1 + mLeft;
    return v1062 + mRight;
  }
  function v158(element$$121) {
    var bHeight$$1 = JAM.call(this.get, this, ["border-box-height"], JAM.policy.p1);
    var mTop = JAM.call(this.get, this, ["margin-top"], JAM.policy.p1);
    var mBottom = JAM.call(this.get, this, ["margin-bottom"], JAM.policy.p1);
    var v1063 = bHeight$$1 <= 0;
    if (v1063) {
      return 0;
    }
    var v1064 = bHeight$$1 + mTop;
    return v1064 + mBottom;
  }
  function v157(element$$120) {
    var v2470 = this._preComputing;
    var v1065 = !v2470;
    if (v1065) {
      JAM.call(this._begin, this, [], JAM.policy.p1);
    }
    var width$$11 = element$$120.offsetWidth;
    var v2471 = this._preComputing;
    var v1066 = !v2471;
    if (v1066) {
      JAM.call(this._end, this, [], JAM.policy.p1);
    }
    return width$$11;
  }
  function v156(element$$119) {
    var v2472 = this._preComputing;
    var v1067 = !v2472;
    if (v1067) {
      JAM.call(this._begin, this, [], JAM.policy.p1);
    }
    var height$$9 = element$$119.offsetHeight;
    var v2473 = this._preComputing;
    var v1068 = !v2473;
    if (v1068) {
      JAM.call(this._end, this, [], JAM.policy.p1);
    }
    return height$$9;
  }
  function v155(element$$118) {
    var width$$10 = JAM.call(this.get, this, ["width"], JAM.policy.p1);
    var pLeft$$1 = JAM.call(this.get, this, ["padding-left"], JAM.policy.p1);
    var pRight$$1 = JAM.call(this.get, this, ["padding-right"], JAM.policy.p1);
    var v1069 = width$$10 + pLeft$$1;
    return v1069 + pRight$$1;
  }
  function v154(element$$117) {
    var height$$8 = JAM.call(this.get, this, ["height"], JAM.policy.p1);
    var pTop$$1 = JAM.call(this.get, this, ["padding-top"], JAM.policy.p1);
    var pBottom$$1 = JAM.call(this.get, this, ["padding-bottom"], JAM.policy.p1);
    var v1070 = height$$8 + pTop$$1;
    return v1070 + pBottom$$1;
  }
  function v153(element$$116) {
    var v2474 = this._preComputing;
    var v1071 = !v2474;
    if (v1071) {
      JAM.call(this._begin, this, [], JAM.policy.p1);
    }
    var bWidth = JAM.call(this.get, this, ["border-box-width"], JAM.policy.p1);
    var v1073 = bWidth <= 0;
    if (v1073) {
      var v2475 = this._preComputing;
      var v1072 = !v2475;
      if (v1072) {
        JAM.call(this._end, this, [], JAM.policy.p1);
      }
      return 0;
    }
    var bLeft = JAM.call(this.get, this, ["border-left"], JAM.policy.p1);
    var bRight = JAM.call(this.get, this, ["border-right"], JAM.policy.p1);
    var pLeft = JAM.call(this.get, this, ["padding-left"], JAM.policy.p1);
    var pRight = JAM.call(this.get, this, ["padding-right"], JAM.policy.p1);
    var v2476 = this._preComputing;
    var v1074 = !v2476;
    if (v1074) {
      JAM.call(this._end, this, [], JAM.policy.p1);
    }
    var v3279 = bWidth - bLeft;
    var v2477 = v3279 - bRight;
    var v1075 = v2477 - pLeft;
    return v1075 - pRight;
  }
  function v152(element$$115) {
    var v2478 = this._preComputing;
    var v1076 = !v2478;
    if (v1076) {
      JAM.call(this._begin, this, [], JAM.policy.p1);
    }
    var bHeight = JAM.call(this.get, this, ["border-box-height"], JAM.policy.p1);
    var v1078 = bHeight <= 0;
    if (v1078) {
      var v2479 = this._preComputing;
      var v1077 = !v2479;
      if (v1077) {
        JAM.call(this._end, this, [], JAM.policy.p1);
      }
      return 0;
    }
    var bTop = JAM.call(this.get, this, ["border-top"], JAM.policy.p1);
    var bBottom = JAM.call(this.get, this, ["border-bottom"], JAM.policy.p1);
    var pTop = JAM.call(this.get, this, ["padding-top"], JAM.policy.p1);
    var pBottom = JAM.call(this.get, this, ["padding-bottom"], JAM.policy.p1);
    var v2480 = this._preComputing;
    var v1079 = !v2480;
    if (v1079) {
      JAM.call(this._end, this, [], JAM.policy.p1);
    }
    var v3280 = bHeight - bTop;
    var v2481 = v3280 - bBottom;
    var v1080 = v2481 - pTop;
    return v1080 - pBottom;
  }
  function v151() {
    return "#<Element.Layout>";
  }
  function v150() {
    function v149(key$$26) {
      var v3667 = Element.Layout;
      var v3281 = v3667.PROPERTIES;
      var v2482 = JAM.call(v3281.include, v3281, [key$$26], JAM.policy.p1);
      var v1081 = !v2482;
      if (v1081) {
        return;
      }
      var v3282 = Element.Layout;
      var v2483 = v3282.COMPOSITE_PROPERTIES;
      var v1082 = JAM.call(v2483.include, v2483, [key$$26], JAM.policy.p1);
      if (v1082) {
        return;
      }
      var value$$84 = JAM.call(this.get, this, [key$$26], JAM.policy.p1);
      var v1084 = value$$84 != null;
      if (v1084) {
        var JSCompiler_inline_result$$2;
        var key$$inline_31 = key$$26;
        var v1083 = JAM.call(key$$inline_31.include, key$$inline_31, ["border"], JAM.policy.p1);
        if (v1083) {
          key$$inline_31 = key$$inline_31 + "-width";
        }
        JSCompiler_inline_result$$2 = JAM.call(key$$inline_31.camelize, key$$inline_31, [], JAM.policy.p1);
        introspect(JAM.policy.p2) {
          css$$2[JSCompiler_inline_result$$2] = value$$84 + "px";
        }
      }
      return;
    }
    var args$$11 = $A(arguments);
    var v1085;
    var v3283 = args$$11.length;
    var v2486 = v3283 === 0;
    if (v2486) {
      var v2484 = Element.Layout;
      v1085 = v2484.PROPERTIES;
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
      var v3668 = Element.Layout;
      var v3284 = v3668.PROPERTIES;
      var v2487 = JAM.call(v3284.include, v3284, [key$$25], JAM.policy.p1);
      var v1087 = !v2487;
      if (v1087) {
        return;
      }
      var value$$83 = JAM.call(this.get, this, [key$$25], JAM.policy.p1);
      var v1088 = value$$83 != null;
      if (v1088) {
        introspect(JAM.policy.p2) {
          obj$$16[key$$25] = value$$83;
        }
      }
      return;
    }
    var args$$10 = $A(arguments);
    var v1089;
    var v3285 = args$$10.length;
    var v2490 = v3285 === 0;
    if (v2490) {
      var v2488 = Element.Layout;
      v1089 = v2488.PROPERTIES;
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
    var v1092 = Element.Layout;
    var COMPUTATIONS = v1092.COMPUTATIONS;
    var v2491 = property$$17 in COMPUTATIONS;
    var v1093 = !v2491;
    if (v1093) {
      throw "Property not found.";
    }
    var v2492 = COMPUTATIONS[property$$17];
    var v2493 = this.element;
    var v1094 = JAM.call(v2492.call, v2492, [this, v2493], JAM.policy.p1);
    return JAM.call(this._set, this, [property$$17, v1094], JAM.policy.p1);
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
    var v1095 = JAM.call(this._isPrepared, this, [], JAM.policy.p1);
    if (v1095) {
      return;
    }
    var element$$113 = this.element;
    var JSCompiler_inline_result$$1;
    JSCompiler_inline_label_isDisplayed_30: {
      var element$$inline_28 = element$$113;
      var v2494 = element$$inline_28;
      if (v2494) {
        v2494 = element$$inline_28.parentNode;
      }
      var v1098 = v2494;
      for (;v1098;) {
        var display$$inline_29 = JAM.call(element$$inline_28.getStyle, element$$inline_28, ["display"], JAM.policy.p1);
        var v1096 = display$$inline_29 === "none";
        if (v1096) {
          JSCompiler_inline_result$$1 = false;
          break JSCompiler_inline_label_isDisplayed_30;
        }
        var v1097 = element$$inline_28.parentNode;
        element$$inline_28 = JAM.call($, null, [v1097], JAM.policy.p1);
        var v2495 = element$$inline_28;
        if (v2495) {
          v2495 = element$$inline_28.parentNode;
        }
        v1098 = v2495;
      }
      JSCompiler_inline_result$$1 = true;
    }
    if (JSCompiler_inline_result$$1) {
      JAM.call(this._setPrepared, this, [true], JAM.policy.p1);
      return;
    }
    var v3286 = element$$113.style;
    var v2496 = v3286.position;
    var v3287 = !v2496;
    if (v3287) {
      v2496 = "";
    }
    var v1099 = v2496;
    var v3288 = element$$113.style;
    var v2497 = v3288.width;
    var v3289 = !v2497;
    if (v3289) {
      v2497 = "";
    }
    var v1100 = v2497;
    var v3290 = element$$113.style;
    var v2498 = v3290.visibility;
    var v3291 = !v2498;
    if (v3291) {
      v2498 = "";
    }
    var v1101 = v2498;
    var v3292 = element$$113.style;
    var v2499 = v3292.display;
    var v3293 = !v2499;
    if (v3293) {
      v2499 = "";
    }
    var v1102 = v2499;
    var originalStyles$$2 = {position:v1099, width:v1100, visibility:v1101, display:v1102};
    JAM.call(element$$113.store, element$$113, ["prototype_original_styles", originalStyles$$2], JAM.policy.p1);
    var position$$3 = JAM.call(getRawStyle, null, [element$$113, "position"], JAM.policy.p1);
    var width$$9 = element$$113.offsetWidth;
    var v2500 = width$$9 === 0;
    var v3294 = !v2500;
    if (v3294) {
      v2500 = width$$9 === null;
    }
    var v1104 = v2500;
    if (v1104) {
      var v1103 = element$$113.style;
      v1103.display = "block";
      width$$9 = element$$113.offsetWidth;
    }
    var v1105;
    var v2501 = position$$3 === "fixed";
    if (v2501) {
      v1105 = document.viewport;
    } else {
      v1105 = element$$113.parentNode;
    }
    var context$$28 = v1105;
    var tempStyles = {visibility:"hidden", display:"block"};
    var v1106 = position$$3 !== "fixed";
    if (v1106) {
      tempStyles.position = "absolute";
    }
    JAM.call(element$$113.setStyle, element$$113, [tempStyles], JAM.policy.p1);
    var positionedWidth = element$$113.offsetWidth;
    var newWidth;
    var v2502 = width$$9;
    if (v2502) {
      v2502 = positionedWidth === width$$9;
    }
    var v1111 = v2502;
    if (v1111) {
      newWidth = getContentWidth(element$$113, context$$28);
    } else {
      var v2503 = position$$3 === "absolute";
      var v3295 = !v2503;
      if (v3295) {
        v2503 = position$$3 === "fixed";
      }
      var v1110 = v2503;
      if (v1110) {
        newWidth = getContentWidth(element$$113, context$$28);
      } else {
        var parent$$3 = element$$113.parentNode;
        var v1107 = JAM.call($, null, [parent$$3], JAM.policy.p1);
        var pLayout = JAM.call(v1107.getLayout, v1107, [], JAM.policy.p1);
        var v3866 = JAM.call(pLayout.get, pLayout, ["width"], JAM.policy.p1);
        var v3867 = JAM.call(this.get, this, ["margin-left"], JAM.policy.p1);
        var v3812 = v3866 - v3867;
        var v3813 = JAM.call(this.get, this, ["border-left"], JAM.policy.p1);
        var v3669 = v3812 - v3813;
        var v3670 = JAM.call(this.get, this, ["padding-left"], JAM.policy.p1);
        var v3296 = v3669 - v3670;
        var v3297 = JAM.call(this.get, this, ["padding-right"], JAM.policy.p1);
        var v2504 = v3296 - v3297;
        var v2505 = JAM.call(this.get, this, ["border-right"], JAM.policy.p1);
        var v1108 = v2504 - v2505;
        var v1109 = JAM.call(this.get, this, ["margin-right"], JAM.policy.p1);
        newWidth = v1108 - v1109;
      }
    }
    var v2506 = newWidth + "px";
    var v1112 = {width:v2506};
    JAM.call(element$$113.setStyle, element$$113, [v1112], JAM.policy.p1);
    JAM.call(this._setPrepared, this, [true], JAM.policy.p1);
    return;
  }
  function v140($super$$4, property$$16) {
    var value$$82 = JAM.call($super$$4, null, [property$$16], JAM.policy.p1);
    var v1113;
    var v2507 = value$$82 === null;
    if (v2507) {
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
    var v2508 = Hash.prototype;
    var v1114 = v2508.set;
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
    var v2509 = Element.Layout;
    var v1115 = v2509.PROPERTIES;
    JAM.call(v1115.each, v1115, [v136, this], JAM.policy.p1);
    if (preCompute$$1) {
      this._preComputing = true;
      JAM.call(this._begin, this, [], JAM.policy.p1);
      var v2510 = Element.Layout;
      var v1116 = v2510.PROPERTIES;
      var v1117 = this._compute;
      JAM.call(v1116.each, v1116, [v1117, this], JAM.policy.p1);
      JAM.call(this._end, this, [], JAM.policy.p1);
      this._preComputing = false;
    }
    return;
  }
  function v135(element$$111) {
    var v3298 = element$$111.currentStyle;
    var v2511 = v3298.hasLayout;
    var v1119 = !v2511;
    if (v1119) {
      var v1118 = element$$111.style;
      v1118.zoom = 1;
    }
    return element$$111;
  }
  function getRawStyle(element$$84, style$$6) {
    element$$84 = JAM.call($, null, [element$$84], JAM.policy.p1);
    var v1120 = element$$84.style;
    var value$$77 = v1120[style$$6];
    var v2512 = !value$$77;
    var v3299 = !v2512;
    if (v3299) {
      v2512 = value$$77 === "auto";
    }
    var v1123 = v2512;
    if (v1123) {
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
    var v1125 = style$$6 === "opacity";
    if (v1125) {
      var v1124;
      if (value$$77) {
        v1124 = parseFloat(value$$77);
      } else {
        v1124 = 1;
      }
      return v1124;
    }
    var v1126;
    var v2513 = value$$77 === "auto";
    if (v2513) {
      v1126 = null;
    } else {
      v1126 = value$$77;
    }
    return v1126;
  }
  function getRawStyle_IE(element$$85, style$$7) {
    var v1127 = element$$85.style;
    var value$$78 = v1127[style$$7];
    var v2514 = !value$$78;
    if (v2514) {
      v2514 = element$$85.currentStyle;
    }
    var v1129 = v2514;
    if (v1129) {
      var v1128 = element$$85.currentStyle;
      value$$78 = v1128[style$$7];
    }
    return value$$78;
  }
  function getContentWidth(element$$86, context$$26) {
    var boxWidth = element$$86.offsetWidth;
    var v1130 = getPixelValue(element$$86, "borderLeftWidth", context$$26);
    var v2515 = !v1130;
    if (v2515) {
      v1130 = 0;
    }
    var bl = v1130;
    var v1131 = getPixelValue(element$$86, "borderRightWidth", context$$26);
    var v2516 = !v1131;
    if (v2516) {
      v1131 = 0;
    }
    var br = v1131;
    var v1132 = getPixelValue(element$$86, "paddingLeft", context$$26);
    var v2517 = !v1132;
    if (v2517) {
      v1132 = 0;
    }
    var pl = v1132;
    var v1133 = getPixelValue(element$$86, "paddingRight", context$$26);
    var v2518 = !v1133;
    if (v2518) {
      v1133 = 0;
    }
    var pr = v1133;
    var v3300 = boxWidth - bl;
    var v2519 = v3300 - br;
    var v1134 = v2519 - pl;
    return v1134 - pr;
  }
  function getPixelValue(value$$79, property$$11, context$$27) {
    var element$$87 = null;
    var v1135 = JAM.call(Object.isElement, Object, [value$$79], JAM.policy.p1);
    if (v1135) {
      element$$87 = value$$79;
      value$$79 = JAM.call(getRawStyle, null, [element$$87, property$$11], JAM.policy.p1);
    }
    var v2520 = value$$79 === null;
    var v3301 = !v2520;
    if (v3301) {
      v2520 = JAM.call(Object.isUndefined, Object, [value$$79], JAM.policy.p1);
    }
    var v1136 = v2520;
    if (v1136) {
      return null;
    }
    var v1137 = JAM.call(/^(?:-)?\d+(\.\d+)?(px)?$/i.test, /^(?:-)?\d+(\.\d+)?(px)?$/i, [value$$79], JAM.policy.p1);
    if (v1137) {
      return JAM.call(window.parseFloat, window, [value$$79], JAM.policy.p1);
    }
    var isPercentage = JAM.call(value$$79.include, value$$79, ["%"], JAM.policy.p1);
    var v1138 = document.viewport;
    var isViewport = context$$27 === v1138;
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
      var v3303 = isPercentage && isViewport;
      v2521 = !v3303;
    }
    var v1146 = v2521;
    if (v1146) {
      var v1139 = element$$87.style;
      var style$$8 = v1139.left;
      var v1140 = element$$87.runtimeStyle;
      var rStyle = v1140.left;
      var v1141 = element$$87.runtimeStyle;
      var v2522 = element$$87.currentStyle;
      v1141.left = v2522.left;
      var v1142 = element$$87.style;
      v1142.left = value$$79 || 0;
      var v1143 = element$$87.style;
      value$$79 = v1143.pixelLeft;
      var v1144 = element$$87.style;
      v1144.left = style$$8;
      var v1145 = element$$87.runtimeStyle;
      v1145.left = rStyle;
      return value$$79;
    }
    var v1158 = element$$87 && isPercentage;
    if (v1158) {
      var v1147 = context$$27;
      var v2523 = !v1147;
      if (v2523) {
        v1147 = element$$87.parentNode;
      }
      context$$27 = v1147;
      var decimal;
      JSCompiler_inline_label_toDecimal_27: {
        var match$$inline_26 = JAM.call(value$$79.match, value$$79, [/^(\d+)%?$/i], JAM.policy.p1);
        var v1148 = !match$$inline_26;
        if (v1148) {
          decimal = null;
          break JSCompiler_inline_label_toDecimal_27;
        }
        var v2524 = match$$inline_26[1];
        var v1149 = Number(v2524);
        decimal = v1149 / 100;
      }
      var whole = null;
      var v2525 = JAM.call(property$$11.include, property$$11, ["left"], JAM.policy.p1);
      var v3304 = !v2525;
      if (v3304) {
        v2525 = JAM.call(property$$11.include, property$$11, ["right"], JAM.policy.p1);
      }
      var v1150 = v2525;
      var v2526 = !v1150;
      if (v2526) {
        v1150 = JAM.call(property$$11.include, property$$11, ["width"], JAM.policy.p1);
      }
      var isHorizontal = v1150;
      var v2527 = JAM.call(property$$11.include, property$$11, ["top"], JAM.policy.p1);
      var v3305 = !v2527;
      if (v3305) {
        v2527 = JAM.call(property$$11.include, property$$11, ["bottom"], JAM.policy.p1);
      }
      var v1151 = v2527;
      var v2528 = !v1151;
      if (v2528) {
        v1151 = JAM.call(property$$11.include, property$$11, ["height"], JAM.policy.p1);
      }
      var isVertical = v1151;
      var v2529 = document.viewport;
      var v1156 = context$$27 === v2529;
      if (v1156) {
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
      var v2530 = whole === null;
      if (v2530) {
        v1157 = 0;
      } else {
        v1157 = whole * decimal;
      }
      return v1157;
    }
    return 0;
  }
  function getLayout(element$$89, preCompute) {
    var v1159 = Element.Layout;
    return JAM.new(v1159, [element$$89, preCompute]);
  }
  function measure(element$$90, property$$12) {
    var v2531 = JAM.call($, null, [element$$90], JAM.policy.p1);
    var v1160 = JAM.call(v2531.getLayout, v2531, [], JAM.policy.p1);
    return JAM.call(v1160.get, v1160, [property$$12], JAM.policy.p1);
  }
  function getHeight(element$$91) {
    var v1161 = JAM.call(Element.getDimensions, Element, [element$$91], JAM.policy.p1);
    return v1161.height;
  }
  function getWidth(element$$92) {
    var v1162 = JAM.call(Element.getDimensions, Element, [element$$92], JAM.policy.p1);
    return v1162.width;
  }
  function getDimensions(element$$93) {
    element$$93 = JAM.call($, null, [element$$93], JAM.policy.p1);
    var display$$1 = JAM.call(Element.getStyle, Element, [element$$93, "display"], JAM.policy.p1);
    var v2532 = display$$1;
    if (v2532) {
      v2532 = display$$1 !== "none";
    }
    var v1165 = v2532;
    if (v1165) {
      var v1163 = element$$93.offsetWidth;
      var v1164 = element$$93.offsetHeight;
      return {width:v1163, height:v1164};
    }
    var style$$9 = element$$93.style;
    var v1166 = style$$9.visibility;
    var v1167 = style$$9.position;
    var v1168 = style$$9.display;
    var originalStyles = {visibility:v1166, position:v1167, display:v1168};
    var newStyles = {visibility:"hidden", display:"block"};
    var v2533 = originalStyles.position;
    var v1169 = v2533 !== "fixed";
    if (v1169) {
      newStyles.position = "absolute";
    }
    JAM.call(Element.setStyle, Element, [element$$93, newStyles], JAM.policy.p1);
    var v1170 = element$$93.offsetWidth;
    var v1171 = element$$93.offsetHeight;
    var dimensions = {width:v1170, height:v1171};
    JAM.call(Element.setStyle, Element, [element$$93, originalStyles], JAM.policy.p1);
    return dimensions;
  }
  function getOffsetParent(element$$94) {
    element$$94 = JAM.call($, null, [element$$94], JAM.policy.p1);
    var v3814 = element$$94.nodeType;
    var v3815 = Node.DOCUMENT_NODE;
    var v3672 = v3814 === v3815;
    var v3816 = !v3672;
    if (v3816) {
      v3672 = isDetached(element$$94);
    }
    var v3306 = v3672;
    var v3674 = !v3306;
    if (v3674) {
      var v3817 = element$$94.nodeName;
      var v3673 = JAM.call(v3817.toUpperCase, v3817, [], JAM.policy.p1);
      v3306 = v3673 === "BODY";
    }
    var v2534 = v3306;
    var v3308 = !v2534;
    if (v3308) {
      var v3675 = element$$94.nodeName;
      var v3307 = JAM.call(v3675.toUpperCase, v3675, [], JAM.policy.p1);
      v2534 = v3307 === "HTML";
    }
    var v1173 = v2534;
    if (v1173) {
      var v1172 = document.body;
      return JAM.call($, null, [v1172], JAM.policy.p1);
    }
    var v1174 = JAM.call(Element.getStyle, Element, [element$$94, "display"], JAM.policy.p1);
    var isInline = v1174 === "inline";
    var v2535 = !isInline;
    if (v2535) {
      v2535 = element$$94.offsetParent;
    }
    var v1176 = v2535;
    if (v1176) {
      var v1175 = element$$94.offsetParent;
      return JAM.call($, null, [v1175], JAM.policy.p1);
    }
    var v2536 = element$$94 = element$$94.parentNode;
    if (v2536) {
      var v3309 = document.body;
      v2536 = element$$94 !== v3309;
    }
    var v1179 = v2536;
    for (;v1179;) {
      var v2537 = JAM.call(Element.getStyle, Element, [element$$94, "position"], JAM.policy.p1);
      var v1178 = v2537 !== "static";
      if (v1178) {
        var v1177;
        var v3676 = element$$94.nodeName;
        var v3310 = JAM.call(v3676.toUpperCase, v3676, [], JAM.policy.p1);
        var v2539 = v3310 === "HTML";
        if (v2539) {
          var v2538 = document.body;
          v1177 = JAM.call($, null, [v2538], JAM.policy.p1);
        } else {
          v1177 = JAM.call($, null, [element$$94], JAM.policy.p1);
        }
        return v1177;
      }
      var v2540 = element$$94 = element$$94.parentNode;
      if (v2540) {
        var v3311 = document.body;
        v2540 = element$$94 !== v3311;
      }
      v1179 = v2540;
    }
    var v1180 = document.body;
    return JAM.call($, null, [v1180], JAM.policy.p1);
  }
  function cumulativeOffset(element$$95) {
    element$$95 = JAM.call($, null, [element$$95], JAM.policy.p1);
    var valueT = 0;
    var valueL = 0;
    var v1181 = element$$95.parentNode;
    if (v1181) {
      do {
        var v3312 = element$$95.offsetTop;
        var v3677 = !v3312;
        if (v3677) {
          v3312 = 0;
        }
        var v2541 = v3312;
        valueT = valueT + v2541;
        var v3313 = element$$95.offsetLeft;
        var v3678 = !v3313;
        if (v3678) {
          v3313 = 0;
        }
        var v2542 = v3313;
        valueL = valueL + v2542;
        element$$95 = element$$95.offsetParent;
      } while (element$$95);
    }
    var v1182 = Element.Offset;
    return JAM.new(v1182, [valueL, valueT]);
  }
  function positionedOffset(element$$96) {
    element$$96 = JAM.call($, null, [element$$96], JAM.policy.p1);
    var layout = JAM.call(element$$96.getLayout, element$$96, [], JAM.policy.p1);
    var valueT$$1 = 0;
    var valueL$$1 = 0;
    do {
      var v3314 = element$$96.offsetTop;
      var v3679 = !v3314;
      if (v3679) {
        v3314 = 0;
      }
      var v2543 = v3314;
      valueT$$1 = valueT$$1 + v2543;
      var v3315 = element$$96.offsetLeft;
      var v3680 = !v3315;
      if (v3680) {
        v3315 = 0;
      }
      var v2544 = v3315;
      valueL$$1 = valueL$$1 + v2544;
      element$$96 = element$$96.offsetParent;
      if (element$$96) {
        var v3316 = element$$96.nodeName;
        var v2545 = JAM.call(v3316.toUpperCase, v3316, [], JAM.policy.p1);
        var v1183 = v2545 === "BODY";
        if (v1183) {
          break;
        }
        var p$$2 = JAM.call(Element.getStyle, Element, [element$$96, "position"], JAM.policy.p1);
        var v1184 = p$$2 !== "static";
        if (v1184) {
          break;
        }
      }
    } while (element$$96);
    var v2546 = JAM.call(layout.get, layout, ["margin-top"], JAM.policy.p1);
    valueL$$1 = valueL$$1 - v2546;
    var v2547 = JAM.call(layout.get, layout, ["margin-left"], JAM.policy.p1);
    valueT$$1 = valueT$$1 - v2547;
    var v1185 = Element.Offset;
    return JAM.new(v1185, [valueL$$1, valueT$$1]);
  }
  function cumulativeScrollOffset(element$$97) {
    var valueT$$2 = 0;
    var valueL$$2 = 0;
    do {
      var v3317 = element$$97.scrollTop;
      var v3681 = !v3317;
      if (v3681) {
        v3317 = 0;
      }
      var v2548 = v3317;
      valueT$$2 = valueT$$2 + v2548;
      var v3318 = element$$97.scrollLeft;
      var v3682 = !v3318;
      if (v3682) {
        v3318 = 0;
      }
      var v2549 = v3318;
      valueL$$2 = valueL$$2 + v2549;
      element$$97 = element$$97.parentNode;
    } while (element$$97);
    var v1186 = Element.Offset;
    return JAM.new(v1186, [valueL$$2, valueT$$2]);
  }
  function viewportOffset(forElement) {
    var valueT$$3 = 0;
    var valueL$$3 = 0;
    var docBody = document.body;
    var element$$98 = JAM.call($, null, [forElement], JAM.policy.p1);
    var v1188 = element$$98 = element$$98.offsetParent;
    do {
      var v3319 = element$$98.offsetTop;
      var v3683 = !v3319;
      if (v3683) {
        v3319 = 0;
      }
      var v2550 = v3319;
      valueT$$3 = valueT$$3 + v2550;
      var v3320 = element$$98.offsetLeft;
      var v3684 = !v3320;
      if (v3684) {
        v3320 = 0;
      }
      var v2551 = v3320;
      valueL$$3 = valueL$$3 + v2551;
      var v3321 = element$$98.offsetParent;
      var v2552 = v3321 == docBody;
      if (v2552) {
        var v3322 = JAM.call(Element.getStyle, Element, [element$$98, "position"], JAM.policy.p1);
        v2552 = v3322 == "absolute";
      }
      var v1187 = v2552;
      if (v1187) {
        break;
      }
      v1188 = element$$98 = element$$98.offsetParent;
    } while (v1188);
    element$$98 = forElement;
    var v1190 = element$$98 = element$$98.parentNode;
    do {
      var v1189 = element$$98 != docBody;
      if (v1189) {
        var v3323 = element$$98.scrollTop;
        var v3685 = !v3323;
        if (v3685) {
          v3323 = 0;
        }
        var v2553 = v3323;
        valueT$$3 = valueT$$3 - v2553;
        var v3324 = element$$98.scrollLeft;
        var v3686 = !v3324;
        if (v3686) {
          v3324 = 0;
        }
        var v2554 = v3324;
        valueL$$3 = valueL$$3 - v2554;
      }
      v1190 = element$$98 = element$$98.parentNode;
    } while (v1190);
    var v1191 = Element.Offset;
    return JAM.new(v1191, [valueL$$3, valueT$$3]);
  }
  function absolutize(element$$99) {
    element$$99 = JAM.call($, null, [element$$99], JAM.policy.p1);
    var v2555 = JAM.call(Element.getStyle, Element, [element$$99, "position"], JAM.policy.p1);
    var v1192 = v2555 === "absolute";
    if (v1192) {
      return element$$99;
    }
    var offsetParent = JAM.call(getOffsetParent, null, [element$$99], JAM.policy.p1);
    var eOffset = JAM.call(element$$99.viewportOffset, element$$99, [], JAM.policy.p1);
    var pOffset = JAM.call(offsetParent.viewportOffset, offsetParent, [], JAM.policy.p1);
    var offset$$8 = JAM.call(eOffset.relativeTo, eOffset, [pOffset], JAM.policy.p1);
    var layout$$1 = JAM.call(element$$99.getLayout, element$$99, [], JAM.policy.p1);
    var v2556 = JAM.call(element$$99.getStyle, element$$99, ["left"], JAM.policy.p1);
    var v2557 = JAM.call(element$$99.getStyle, element$$99, ["top"], JAM.policy.p1);
    var v2558 = JAM.call(element$$99.getStyle, element$$99, ["width"], JAM.policy.p1);
    var v2559 = JAM.call(element$$99.getStyle, element$$99, ["height"], JAM.policy.p1);
    var v1193 = {left:v2556, top:v2557, width:v2558, height:v2559};
    JAM.call(element$$99.store, element$$99, ["prototype_absolutize_original_styles", v1193], JAM.policy.p1);
    var v3325 = offset$$8.top;
    var v2560 = v3325 + "px";
    var v3326 = offset$$8.left;
    var v2561 = v3326 + "px";
    var v3327 = JAM.call(layout$$1.get, layout$$1, ["width"], JAM.policy.p1);
    var v2562 = v3327 + "px";
    var v3328 = JAM.call(layout$$1.get, layout$$1, ["height"], JAM.policy.p1);
    var v2563 = v3328 + "px";
    var v1194 = {position:"absolute", top:v2560, left:v2561, width:v2562, height:v2563};
    JAM.call(element$$99.setStyle, element$$99, [v1194], JAM.policy.p1);
    return element$$99;
  }
  function relativize(element$$100) {
    element$$100 = JAM.call($, null, [element$$100], JAM.policy.p1);
    var v2564 = JAM.call(Element.getStyle, Element, [element$$100, "position"], JAM.policy.p1);
    var v1195 = v2564 === "relative";
    if (v1195) {
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
    var v1196 = pos.left;
    var v1197 = pos.top;
    JAM.call(window.scrollTo, window, [v1196, v1197], JAM.policy.p1);
    return element$$101;
  }
  function makePositioned(element$$102) {
    element$$102 = JAM.call($, null, [element$$102], JAM.policy.p1);
    var position$$2 = JAM.call(Element.getStyle, Element, [element$$102, "position"], JAM.policy.p1);
    var styles$$1 = {};
    var v2565 = position$$2 === "static";
    var v3329 = !v2565;
    if (v3329) {
      v2565 = !position$$2;
    }
    var v1199 = v2565;
    if (v1199) {
      styles$$1.position = "relative";
      var v2566 = Prototype.Browser;
      var v1198 = v2566.Opera;
      if (v1198) {
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
      var v1200 = {position:"", top:"", bottom:"", left:"", right:""};
      JAM.call(Element.setStyle, Element, [element$$103, v1200], JAM.policy.p1);
    }
    return element$$103;
  }
  function makeClipping(element$$104) {
    element$$104 = JAM.call($, null, [element$$104], JAM.policy.p1);
    var storage$$3 = JAM.call(Element.getStorage, Element, [element$$104], JAM.policy.p1);
    var madeClipping = JAM.call(storage$$3.get, storage$$3, ["prototype_made_clipping"], JAM.policy.p1);
    var v1203 = JAM.call(Object.isUndefined, Object, [madeClipping], JAM.policy.p1);
    if (v1203) {
      var overflow = JAM.call(Element.getStyle, Element, [element$$104, "overflow"], JAM.policy.p1);
      JAM.call(storage$$3.set, storage$$3, ["prototype_made_clipping", overflow], JAM.policy.p1);
      var v1202 = overflow !== "hidden";
      if (v1202) {
        var v1201 = element$$104.style;
        v1201.overflow = "hidden";
      }
    }
    return element$$104;
  }
  function undoClipping(element$$105) {
    element$$105 = JAM.call($, null, [element$$105], JAM.policy.p1);
    var storage$$4 = JAM.call(Element.getStorage, Element, [element$$105], JAM.policy.p1);
    var overflow$$1 = JAM.call(storage$$4.get, storage$$4, ["prototype_made_clipping"], JAM.policy.p1);
    var v2567 = JAM.call(Object.isUndefined, Object, [overflow$$1], JAM.policy.p1);
    var v1205 = !v2567;
    if (v1205) {
      JAM.call(storage$$4.unset, storage$$4, ["prototype_made_clipping"], JAM.policy.p1);
      var v1204 = element$$105.style;
      v1204.overflow = overflow$$1 || "";
    }
    return element$$105;
  }
  function clonePosition(element$$106, source$$4, options$$7) {
    var v1206 = {setLeft:true, setTop:true, setWidth:true, setHeight:true, offsetTop:0, offsetLeft:0};
    var v1207 = options$$7 || {};
    options$$7 = JAM.call(Object.extend, Object, [v1206, v1207], JAM.policy.p1);
    source$$4 = JAM.call($, null, [source$$4], JAM.policy.p1);
    element$$106 = JAM.call($, null, [element$$106], JAM.policy.p1);
    var p$$3;
    var delta$$1;
    var layout$$2;
    var styles$$2 = {};
    var v2568 = options$$7.setLeft;
    var v3330 = !v2568;
    if (v3330) {
      v2568 = options$$7.setTop;
    }
    var v1210 = v2568;
    if (v1210) {
      p$$3 = JAM.call(Element.viewportOffset, Element, [source$$4], JAM.policy.p1);
      delta$$1 = [0, 0];
      var v2569 = JAM.call(Element.getStyle, Element, [element$$106, "position"], JAM.policy.p1);
      var v1209 = v2569 === "absolute";
      if (v1209) {
        var parent$$2 = JAM.call(Element.getOffsetParent, Element, [element$$106], JAM.policy.p1);
        var v2570 = document.body;
        var v1208 = parent$$2 !== v2570;
        if (v1208) {
          delta$$1 = JAM.call(Element.viewportOffset, Element, [parent$$2], JAM.policy.p1);
        }
      }
    }
    var v2571 = options$$7.setWidth;
    var v3331 = !v2571;
    if (v3331) {
      v2571 = options$$7.setHeight;
    }
    var v1211 = v2571;
    if (v1211) {
      layout$$2 = JAM.call(Element.getLayout, Element, [source$$4], JAM.policy.p1);
    }
    var v1213 = options$$7.setLeft;
    if (v1213) {
      var v3332 = p$$3[0];
      var v3333 = delta$$1[0];
      var v2572 = v3332 - v3333;
      var v2573 = options$$7.offsetLeft;
      var v1212 = v2572 + v2573;
      styles$$2.left = v1212 + "px";
    }
    var v1215 = options$$7.setTop;
    if (v1215) {
      var v3334 = p$$3[1];
      var v3335 = delta$$1[1];
      var v2574 = v3334 - v3335;
      var v2575 = options$$7.offsetTop;
      var v1214 = v2574 + v2575;
      styles$$2.top = v1214 + "px";
    }
    var v1217 = options$$7.setWidth;
    if (v1217) {
      var v1216 = JAM.call(layout$$2.get, layout$$2, ["border-box-width"], JAM.policy.p1);
      styles$$2.width = v1216 + "px";
    }
    var v1219 = options$$7.setHeight;
    if (v1219) {
      var v1218 = JAM.call(layout$$2.get, layout$$2, ["border-box-height"], JAM.policy.p1);
      styles$$2.height = v1218 + "px";
    }
    return JAM.call(Element.setStyle, Element, [element$$106, styles$$2], JAM.policy.p1);
  }
  function isDetached(element$$110) {
    var v2576 = document.body;
    var v1220 = element$$110 !== v2576;
    if (v1220) {
      var v3336 = document.body;
      var v2577 = JAM.call(Element.descendantOf, Element, [element$$110, v3336], JAM.policy.p1);
      v1220 = !v2577;
    }
    return v1220;
  }
  var v2578 = document.documentElement;
  var v1221 = "currentStyle" in v2578;
  if (v1221) {
    getRawStyle = getRawStyle_IE;
  }
  var hasLayout = Prototype.K;
  var v2579 = document.documentElement;
  var v1222 = "currentStyle" in v2579;
  if (v1222) {
    hasLayout = v135;
  }
  var v1223 = Element;
  var v2580 = {initialize:v137, _set:v138, set:v139, get:v140, _begin:v141, _end:v142, _compute:v143, _isPrepared:v144, _setPrepared:v145, toObject:v147, toHash:v148, toCSS:v150, inspect:v151};
  var v3949 = JAM.call(Class.create, Class, [Hash, v2580], JAM.policy.p1);
  v1223.Layout = v3949;
  var v1224 = Element.Layout;
  var v2581 = $w("height width top left right bottom border-left border-right border-top border-bottom padding-left padding-right padding-top padding-bottom margin-top margin-bottom margin-left margin-right padding-box-width padding-box-height border-box-width border-box-height margin-box-width margin-box-height");
  var v2582 = $w("padding-box-width padding-box-height margin-box-width margin-box-height border-box-width border-box-height");
  var v2583 = {"height":v152, "width":v153, "padding-box-height":v154, "padding-box-width":v155, "border-box-height":v156, "border-box-width":v157, "margin-box-height":v158, "margin-box-width":v159, "top":v160, "bottom":v161, "left":v162, "right":v163, "padding-top":v164, "padding-bottom":v165, "padding-left":v166, "padding-right":v167, "border-top":v168, "border-bottom":v169, "border-left":v170, "border-right":v171, "margin-top":v172, "margin-bottom":v173, "margin-left":v174, "margin-right":v175};
  var v1225 = {PROPERTIES:v2581, COMPOSITE_PROPERTIES:v2582, COMPUTATIONS:v2583};
  JAM.call(Object.extend, Object, [v1224, v1225], JAM.policy.p1);
  var v2584 = document.documentElement;
  var v1228 = "getBoundingClientRect" in v2584;
  if (v1228) {
    var v2585 = Element.Layout;
    var v1226 = v2585.COMPUTATIONS;
    var v1227 = {"right":v176, "bottom":v177};
    JAM.call(Object.extend, Object, [v1226, v1227], JAM.policy.p1);
  }
  var v1229 = Element;
  var v2586 = {initialize:v178, relativeTo:v179, inspect:v180, toString:v181, toArray:v182};
  var v3950 = JAM.call(Class.create, Class, [v2586], JAM.policy.p1);
  v1229.Offset = v3950;
  var v2587 = Prototype.Browser;
  var v1231 = v2587.IE;
  if (v1231) {
    getOffsetParent = JAM.call(getOffsetParent.wrap, getOffsetParent, [v183], JAM.policy.p1);
    positionedOffset = JAM.call(positionedOffset.wrap, positionedOffset, [v184], JAM.policy.p1);
  } else {
    var v2588 = Prototype.Browser;
    var v1230 = v2588.Webkit;
    if (v1230) {
      cumulativeOffset = v185;
    }
  }
  var v1232 = {getLayout:getLayout, measure:measure, getWidth:getWidth, getHeight:getHeight, getDimensions:getDimensions, getOffsetParent:getOffsetParent, cumulativeOffset:cumulativeOffset, positionedOffset:positionedOffset, cumulativeScrollOffset:cumulativeScrollOffset, viewportOffset:viewportOffset, absolutize:absolutize, relativize:relativize, scrollTo:scrollTo, makePositioned:makePositioned, undoPositioned:undoPositioned, makeClipping:makeClipping, undoClipping:undoClipping, clonePosition:clonePosition};
  JAM.call(Element.addMethods, Element, [v1232], JAM.policy.p1);
  var v2589 = document.documentElement;
  var v1234 = "getBoundingClientRect" in v2589;
  if (v1234) {
    var v1233 = {viewportOffset:v186};
    JAM.call(Element.addMethods, Element, [v1233], JAM.policy.p1);
  }
  return;
}
function v134(GLOBAL) {
  function v133() {
    var v2590 = Prototype.BrowserFeatures;
    var v1235 = v2590.ElementExtensions;
    if (v1235) {
      return;
    }
    var v1236 = Element$$1.Methods;
    JAM.call(Object.extend, Object, [Methods, v1236], JAM.policy.p1);
    var v2591 = Element$$1.Methods;
    var v1237 = v2591.Simulated;
    JAM.call(Object.extend, Object, [Methods, v1237], JAM.policy.p1);
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
    var v1239 = !value$$75;
    element$$82.checked = !v1239;
    return;
  }
  function v130(element$$81) {
    return element$$81.title;
  }
  function v129(element$$80) {
    var v2593 = element$$80.style;
    var v1240 = v2593.cssText;
    return JAM.call(v1240.toLowerCase, v1240, [], JAM.policy.p1);
  }
  function v128(element$$79, attribute$$7) {
    var value$$74 = JAM.call(element$$79.getAttribute, element$$79, [attribute$$7], JAM.policy.p1);
    var v1241 = !value$$74;
    if (v1241) {
      return null;
    }
    return JAM.call(value$$74.strip, value$$74, [], JAM.policy.p1);
  }
  function v127(element$$78, attribute$$6) {
    var value$$73 = JAM.call(element$$78.getAttribute, element$$78, [attribute$$6], JAM.policy.p1);
    var v1242 = !value$$73;
    if (v1242) {
      return null;
    }
    value$$73 = JAM.call(value$$73.toString, value$$73, [], JAM.policy.p1);
    var v1243 = JAM.call(value$$73.split, value$$73, ["{"], JAM.policy.p1);
    value$$73 = v1243[1];
    var v1244 = JAM.call(value$$73.split, value$$73, ["}"], JAM.policy.p1);
    value$$73 = v1244[0];
    return JAM.call(value$$73.strip, value$$73, [], JAM.policy.p1);
  }
  function v126() {
    var v1245 = Prototype.emptyFunction;
    JAM.call(DIV.setAttribute, DIV, ["onclick", v1245], JAM.policy.p1);
    var value$$72 = JAM.call(DIV.getAttribute, DIV, ["onclick"], JAM.policy.p1);
    var v1246 = typeof value$$72;
    var isFunction$$1 = v1246 === "function";
    JAM.call(DIV.removeAttribute, DIV, ["onclick"], JAM.policy.p1);
    return isFunction$$1;
  }
  function v125(element$$77, node$$14) {
    var v1247 = element$$77.parentNode;
    var v1248 = element$$77.nextSibling;
    JAM.call(v1247.insertBefore, v1247, [node$$14, v1248], JAM.policy.p1);
    return;
  }
  function v124(element$$76, node$$13) {
    JAM.call(element$$76.appendChild, element$$76, [node$$13], JAM.policy.p1);
    return;
  }
  function v123(element$$75, node$$12) {
    var v1249 = element$$75.firstChild;
    JAM.call(element$$75.insertBefore, element$$75, [node$$12, v1249], JAM.policy.p1);
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
      var v1251 = JAM.call(document.createTextNode, document, [""], JAM.policy.p1);
      JAM.call(s$$2.appendChild, s$$2, [v1251], JAM.policy.p1);
      var v2594 = s$$2.firstChild;
      var v1252 = !v2594;
      var v2596 = !v1252;
      if (v2596) {
        var v2595 = s$$2.firstChild;
        if (v2595) {
          var v3687 = s$$2.firstChild;
          var v3337 = v3687.nodeType;
          v2595 = v3337 !== 3;
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
      var v2597 = el$$4.childNodes;
      var v1253 = v2597.length;
      var isBuggy$$3 = v1253 === 0;
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
      var v1255 = v2598;
      if (v1255) {
        JAM.set(el$$3, "innerHTML", "<tbody><tr><td>test</td></tr></tbody>");
        var v3338 = el$$3.tBodies;
        var v2599 = v3338[0];
        var v1254 = typeof v2599;
        var isBuggy$$2 = v1254 == "undefined";
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
      var v3339 = el$$2.options;
      v2600 = v3339[0];
    }
    var v1257 = v2600;
    if (v1257) {
      var v3688 = el$$2.options;
      var v3340 = v3688[0];
      var v2601 = v3340.nodeName;
      var v1256 = JAM.call(v2601.toUpperCase, v2601, [], JAM.policy.p1);
      isBuggy$$1 = v1256 !== "OPTION";
    }
    el$$2 = null;
    return isBuggy$$1;
  }
  function v117() {
    try {
      var el$$1 = JAM.call(document.createElement, document, ['<input name="x">'], JAM.policy.p1);
      var v3341 = el$$1.tagName;
      var v2602 = JAM.call(v3341.toLowerCase, v3341, [], JAM.policy.p1);
      var v1258 = v2602 === "input";
      if (v1258) {
        var v2603 = el$$1.name;
        v1258 = v2603 === "x";
      }
      return v1258;
    } catch (err) {
      return false;
    }
    return;
  }
  function $$$1(element$$2) {
    var v2604 = arguments.length;
    var v1261 = v2604 > 1;
    if (v1261) {
      var i$$17 = 0;
      var elements = [];
      var length$$28 = arguments.length;
      var v1260 = i$$17 < length$$28;
      for (;v1260;) {
        var v2605 = arguments[i$$17];
        var v1259 = $$$1(v2605);
        JAM.call(elements.push, elements, [v1259], JAM.policy.p1);
        i$$17++;
        v1260 = i$$17 < length$$28;
      }
      return elements;
    }
    var v1262 = JAM.call(Object.isString, Object, [element$$2], JAM.policy.p1);
    if (v1262) {
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
    var v1265 = v2606;
    if (v1265) {
      var v3342 = "<" + tagName$$2;
      var v2607 = v3342 + ' name="';
      var v2608 = attributes$$1.name;
      var v1263 = v2607 + v2608;
      tagName$$2 = v1263 + '">';
      delete attributes$$1.name;
      var v1264 = JAM.call(document.createElement, document, [tagName$$2], JAM.policy.p1);
      return JAM.call(Element$$1.writeAttribute, Element$$1, [v1264, attributes$$1], JAM.policy.p1);
    }
    var v2609 = ELEMENT_CACHE[tagName$$2];
    var v1267 = !v2609;
    if (v1267) {
      var v1266 = ELEMENT_CACHE;
      var v2610 = JAM.call(document.createElement, document, [tagName$$2], JAM.policy.p1);
      var v3951 = JAM.call(Element$$1.extend, Element$$1, [v2610]);
      introspect(JAM.policy.p2) {
        v1266[tagName$$2] = v3951;
      }
    }
    var JSCompiler_inline_result$$0;
    JSCompiler_inline_label_shouldUseCreationCache_7: {
      var v1268 = tagName$$2 === "select";
      if (v1268) {
        JSCompiler_inline_result$$0 = false;
        break JSCompiler_inline_label_shouldUseCreationCache_7;
      }
      var v1269 = "type" in attributes$$1;
      if (v1269) {
        JSCompiler_inline_result$$0 = false;
        break JSCompiler_inline_label_shouldUseCreationCache_7;
      }
      JSCompiler_inline_result$$0 = true;
    }
    var v1270;
    if (JSCompiler_inline_result$$0) {
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
    var v1271 = JAM.call(v2612.toLowerCase, v2612, [], JAM.policy.p1);
    var result$$7 = "<" + v1271;
    var attribute;
    var value$$61;
    var property$$5;
    for (property$$5 in INSPECT_ATTRIBUTES) {
      attribute = INSPECT_ATTRIBUTES[property$$5];
      var v2613 = element$$3[property$$5];
      var v3343 = !v2613;
      if (v3343) {
        v2613 = "";
      }
      var v1272 = v2613;
      value$$61 = JAM.call(v1272.toString, v1272, [], JAM.policy.p1);
      if (value$$61) {
        var v3689 = " " + attribute;
        var v3344 = v3689 + "=";
        var v3345 = JAM.call(value$$61.inspect, value$$61, [true], JAM.policy.p1);
        var v2614 = v3344 + v3345;
        result$$7 = result$$7 + v2614;
      }
    }
    return result$$7 + ">";
  }
  function visible(element$$4) {
    var v3346 = $$$1(element$$4);
    var v2615 = v3346.style;
    var v1273 = v2615.display;
    return v1273 !== "none";
  }
  function toggle(element$$5, bool) {
    element$$5 = $$$1(element$$5);
    var v1275 = JAM.call(Object.isUndefined, Object, [bool], JAM.policy.p1);
    if (v1275) {
      var v1274 = JAM.call(Element$$1.visible, Element$$1, [element$$5], JAM.policy.p1);
      bool = !v1274;
    }
    var v2616;
    if (bool) {
      v2616 = "show";
    } else {
      v2616 = "hide";
    }
    var v1276 = v2616;
    JAM.call(Element$$1[v1276], Element$$1, [element$$5], JAM.policy.p1);
    return element$$5;
  }
  function hide(element$$6) {
    element$$6 = $$$1(element$$6);
    var v1277 = element$$6.style;
    v1277.display = "none";
    return element$$6;
  }
  function show(element$$7) {
    element$$7 = $$$1(element$$7);
    var v1278 = element$$7.style;
    v1278.display = "";
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
      var v1280 = descendants$$1[i$$18];
      purgeElement(v1280);
      v1281 = i$$18;
      i$$18 = i$$18 - 1;
    }
    var v2617 = content;
    if (v2617) {
      v2617 = content.toElement;
    }
    var v1282 = v2617;
    if (v1282) {
      content = JAM.call(content.toElement, content, [], JAM.policy.p1);
    }
    var v1284 = JAM.call(Object.isElement, Object, [content], JAM.policy.p1);
    if (v1284) {
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
    var v1286 = v2618;
    if (v1286) {
      element$$9.text = content;
      return element$$9;
    }
    if (ANY_INNERHTML_BUGGY) {
      var v2619 = INSERTION_TRANSLATIONS.tags;
      var v1296 = tagName$$3 in v2619;
      if (v1296) {
        var v1288 = element$$9.firstChild;
        for (;v1288;) {
          var v1287 = element$$9.firstChild;
          JAM.call(element$$9.removeChild, element$$9, [v1287], JAM.policy.p1);
          v1288 = element$$9.firstChild;
        }
        var v1289 = JAM.call(content.stripScripts, content, [], JAM.policy.p1);
        var nodes = getContentFromAnonymousElement(tagName$$3, v1289);
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
          var v3348 = JAM.call(content.indexOf, content, ["<link"], JAM.policy.p1);
          v2620 = v3348 > -1;
        }
        var v1295 = v2620;
        if (v1295) {
          var v1292 = element$$9.firstChild;
          for (;v1292;) {
            var v1291 = element$$9.firstChild;
            JAM.call(element$$9.removeChild, element$$9, [v1291], JAM.policy.p1);
            v1292 = element$$9.firstChild;
          }
          var v1293 = JAM.call(content.stripScripts, content, [], JAM.policy.p1);
          nodes = getContentFromAnonymousElement(tagName$$3, v1293, true);
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
    var v1302 = v2622;
    if (v1302) {
      content$$1 = JAM.call(content$$1.toElement, content$$1, [], JAM.policy.p1);
    } else {
      var v2623 = JAM.call(Object.isElement, Object, [content$$1], JAM.policy.p1);
      var v1301 = !v2623;
      if (v1301) {
        content$$1 = JAM.call(Object.toHTML, Object, [content$$1], JAM.policy.p1);
        var v1298 = element$$10.ownerDocument;
        var range$$5 = JAM.call(v1298.createRange, v1298, [], JAM.policy.p1);
        JAM.call(range$$5.selectNode, range$$5, [element$$10], JAM.policy.p1);
        var v2624 = content$$1.evalScripts;
        var v1299 = JAM.call(v2624.bind, v2624, [content$$1], JAM.policy.p1);
        JAM.call(v1299.defer, v1299, [], JAM.policy.p1);
        var v1300 = JAM.call(content$$1.stripScripts, content$$1, [], JAM.policy.p1);
        content$$1 = JAM.call(range$$5.createContextualFragment, range$$5, [v1300], JAM.policy.p1);
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
    var v1304 = v2625;
    if (v1304) {
      content$$2 = JAM.call(content$$2.toElement, content$$2, [], JAM.policy.p1);
    }
    var v1306 = JAM.call(Object.isElement, Object, [content$$2], JAM.policy.p1);
    if (v1306) {
      var v1305 = element$$11.parentNode;
      JAM.call(v1305.replaceChild, v1305, [content$$2, element$$11], JAM.policy.p1);
      return element$$11;
    }
    content$$2 = JAM.call(Object.toHTML, Object, [content$$2], JAM.policy.p1);
    var parent$$1 = element$$11.parentNode;
    var v1307 = parent$$1.tagName;
    var tagName$$4 = JAM.call(v1307.toUpperCase, v1307, [], JAM.policy.p1);
    var v2626 = INSERTION_TRANSLATIONS.tags;
    var v1310 = tagName$$4 in v2626;
    if (v1310) {
      var nextSibling = JAM.call(Element$$1.next, Element$$1, [element$$11], JAM.policy.p1);
      var v1308 = JAM.call(content$$2.stripScripts, content$$2, [], JAM.policy.p1);
      var fragments = getContentFromAnonymousElement(tagName$$4, v1308);
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
    var v3349 = !v2628;
    if (v3349) {
      v2628 = content$$3 === null;
    }
    var v1312 = v2628;
    if (v1312) {
      return false;
    }
    var v2629 = JAM.call(Object.isString, Object, [content$$3], JAM.policy.p1);
    var v3350 = !v2629;
    if (v3350) {
      v2629 = JAM.call(Object.isNumber, Object, [content$$3], JAM.policy.p1);
    }
    var v1313 = v2629;
    if (v1313) {
      return true;
    }
    var v1314 = JAM.call(Object.isElement, Object, [content$$3], JAM.policy.p1);
    if (v1314) {
      return true;
    }
    var v2630 = content$$3.toElement;
    var v3351 = !v2630;
    if (v3351) {
      v2630 = content$$3.toHTML;
    }
    var v1315 = v2630;
    if (v1315) {
      return true;
    }
    return false;
  }
  function insert(element$$13, insertions) {
    element$$13 = $$$1(element$$13);
    var v1316 = isContent(insertions);
    if (v1316) {
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
        var v1317 = v2631;
        if (v1317) {
          content$$inline_9 = JAM.call(content$$inline_9.toElement, content$$inline_9, [], JAM.policy.p1);
        }
        var v1318 = JAM.call(Object.isElement, Object, [content$$inline_9], JAM.policy.p1);
        if (v1318) {
          JAM.call(method$$inline_11, null, [element$$inline_8, content$$inline_9], JAM.policy.p1);
          break JSCompiler_inline_label_insertContentAt_16;
        }
        content$$inline_9 = JAM.call(Object.toHTML, Object, [content$$inline_9], JAM.policy.p1);
        var v3352;
        var v3818 = position$$inline_10 === "before";
        var v3868 = !v3818;
        if (v3868) {
          v3818 = position$$inline_10 === "after";
        }
        var v3690 = v3818;
        if (v3690) {
          v3352 = element$$inline_8.parentNode;
        } else {
          v3352 = element$$inline_8;
        }
        var v2632 = v3352;
        var v1319 = v2632.tagName;
        var tagName$$inline_12 = JAM.call(v1319.toUpperCase, v1319, [], JAM.policy.p1);
        var v1320 = JAM.call(content$$inline_9.stripScripts, content$$inline_9, [], JAM.policy.p1);
        var childNodes$$inline_13 = getContentFromAnonymousElement(tagName$$inline_12, v1320);
        var v2633 = position$$inline_10 === "top";
        var v3353 = !v2633;
        if (v3353) {
          v2633 = position$$inline_10 === "after";
        }
        var v1321 = v2633;
        if (v1321) {
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
    var v1327 = JAM.call(Object.isElement, Object, [wrapper$$1], JAM.policy.p1);
    if (v1327) {
      var v1324 = $$$1(wrapper$$1);
      var v1325 = attributes$$2 || {};
      JAM.call(v1324.writeAttribute, v1324, [v1325], JAM.policy.p1);
    } else {
      var v1326 = JAM.call(Object.isString, Object, [wrapper$$1], JAM.policy.p1);
      if (v1326) {
        wrapper$$1 = new Element$$1(wrapper$$1, attributes$$2);
      } else {
        wrapper$$1 = new Element$$1("div", wrapper$$1);
      }
    }
    var v1329 = element$$14.parentNode;
    if (v1329) {
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
      var v3354 = node$$7.nodeType;
      var v3355 = Node.TEXT_NODE;
      var v2635 = v3354 === v3355;
      if (v2635) {
        var v3691 = node$$7.nodeValue;
        var v3356 = JAM.call(/\S/.test, /\S/, [v3691], JAM.policy.p1);
        v2635 = !v3356;
      }
      var v1330 = v2635;
      if (v1330) {
        JAM.call(element$$15.removeChild, element$$15, [node$$7], JAM.policy.p1);
      }
      node$$7 = nextNode;
    }
    return element$$15;
  }
  function empty$$1(element$$16) {
    var v2636 = $$$1(element$$16);
    var v1331 = v2636.innerHTML;
    return JAM.call(v1331.blank, v1331, [], JAM.policy.p1);
  }
  function getContentFromAnonymousElement(tagName$$6, html, force) {
    var v1332 = INSERTION_TRANSLATIONS.tags;
    var t = v1332[tagName$$6];
    var div$$1 = DIV;
    var v1333 = !t;
    var workaround = !v1333;
    var v2637 = !workaround;
    if (v2637) {
      v2637 = force;
    }
    var v1334 = v2637;
    if (v1334) {
      workaround = true;
      t = ["", "", 0];
    }
    if (workaround) {
      var v3357 = t[0];
      var v2638 = "&#160;" + v3357;
      var v1335 = v2638 + html;
      var v1336 = t[1];
      JAM.set(div$$1, "innerHTML", v1335 + v1336);
      var v1337 = div$$1.firstChild;
      JAM.call(div$$1.removeChild, div$$1, [v1337], JAM.policy.p1);
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
    var v1339 = div$$1.childNodes;
    return $A(v1339);
  }
  function clone$$3(element$$17, deep$$2) {
    var v2639 = element$$17 = $$$1(element$$17);
    var v1340 = !v2639;
    if (v1340) {
      return;
    }
    var clone$$4 = JAM.call(element$$17.cloneNode, element$$17, [deep$$2], JAM.policy.p1);
    var v1343 = !HAS_UNIQUE_ID_PROPERTY;
    if (v1343) {
      clone$$4._prototypeUID = UNDEFINED;
      if (deep$$2) {
        var descendants$$2 = JAM.call(Element$$1.select, Element$$1, [clone$$4, "*"], JAM.policy.p1);
        var i$$21 = descendants$$2.length;
        var v1342 = i$$21;
        i$$21 = i$$21 - 1;
        for (;v1342;) {
          var v1341 = descendants$$2[i$$21];
          v1341._prototypeUID = UNDEFINED;
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
      var v1344 = !HAS_UNIQUE_ID_PROPERTY;
      if (v1344) {
        element$$18._prototypeUID = UNDEFINED;
      }
      var v1345 = Element$$1.Storage;
      delete v1345[uid];
    }
    return;
  }
  function purgeCollection(elements$$1) {
    var i$$22 = elements$$1.length;
    var v1347 = i$$22;
    i$$22 = i$$22 - 1;
    for (;v1347;) {
      var v1346 = elements$$1[i$$22];
      purgeElement(v1346);
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
      var v1348 = Element$$1.Storage;
      delete v1348[uid$$1];
      var v1349 = Event.cache;
      delete v1349[uid$$1];
      v1350 = i$$23;
      i$$23 = i$$23 - 1;
    }
    return;
  }
  function purge(element$$20) {
    var v2640 = element$$20 = $$$1(element$$20);
    var v1351 = !v2640;
    if (v1351) {
      return;
    }
    purgeElement(element$$20);
    var descendants$$3 = JAM.call(element$$20.getElementsByTagName, element$$20, ["*"], JAM.policy.p1);
    var i$$24 = descendants$$3.length;
    var v1353 = i$$24;
    i$$24 = i$$24 - 1;
    for (;v1353;) {
      var v1352 = descendants$$3[i$$24];
      purgeElement(v1352);
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
      var v2641 = element$$21.nodeType;
      var v2642 = Node.ELEMENT_NODE;
      var v1355 = v2641 === v2642;
      if (v1355) {
        var v1354 = JAM.call(Element$$1.extend, Element$$1, [element$$21]);
        JAM.call(elements$$3.push, elements$$3, [v1354], JAM.policy.p1);
      }
      var v2643 = elements$$3.length;
      var v1356 = v2643 === maximumLength;
      if (v1356) {
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
    var v1358 = $$$1(element$$24);
    element$$24 = v1358.firstChild;
    var v2644 = element$$24;
    if (v2644) {
      var v3358 = element$$24.nodeType;
      var v3359 = Node.ELEMENT_NODE;
      v2644 = v3358 !== v3359;
    }
    var v1359 = v2644;
    for (;v1359;) {
      element$$24 = element$$24.nextSibling;
      var v2645 = element$$24;
      if (v2645) {
        var v3360 = element$$24.nodeType;
        var v3361 = Node.ELEMENT_NODE;
        v2645 = v3360 !== v3361;
      }
      v1359 = v2645;
    }
    return $$$1(element$$24);
  }
  function immediateDescendants(element$$25) {
    var results$$11 = [];
    var v1360 = $$$1(element$$25);
    var child$$1 = v1360.firstChild;
    for (;child$$1;) {
      var v2646 = child$$1.nodeType;
      var v2647 = Node.ELEMENT_NODE;
      var v1362 = v2646 === v2647;
      if (v1362) {
        var v1361 = JAM.call(Element$$1.extend, Element$$1, [child$$1]);
        JAM.call(results$$11.push, results$$11, [v1361], JAM.policy.p1);
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
    var v1365 = JAM.call(Object.isString, Object, [selector], JAM.policy.p1);
    if (v1365) {
      var v1364 = Prototype.Selector;
      return JAM.call(v1364.match, v1364, [element$$29, selector], JAM.policy.p1);
    }
    return JAM.call(selector.match, selector, [element$$29], JAM.policy.p1);
  }
  function _recursivelyFind(element$$30, property$$7, expression, index$$55) {
    element$$30 = $$$1(element$$30);
    expression = expression || 0;
    index$$55 = index$$55 || 0;
    var v1366 = JAM.call(Object.isNumber, Object, [expression], JAM.policy.p1);
    if (v1366) {
      index$$55 = expression;
      expression = null;
    }
    var v1370 = element$$30 = element$$30[property$$7];
    for (;v1370;) {
      var v2648 = element$$30.nodeType;
      var v1367 = v2648 !== 1;
      if (v1367) {
        v1370 = element$$30 = element$$30[property$$7];
        continue;
      }
      var v2649 = expression;
      if (v2649) {
        var v3692 = Prototype.Selector;
        var v3362 = JAM.call(v3692.match, v3692, [element$$30, expression], JAM.policy.p1);
        v2649 = !v3362;
      }
      var v1368 = v2649;
      if (v1368) {
        v1370 = element$$30 = element$$30[property$$7];
        continue;
      }
      var v2650 = index$$55 = index$$55 - 1;
      var v1369 = v2650 >= 0;
      if (v1369) {
        v1370 = element$$30 = element$$30[property$$7];
        continue;
      }
      return JAM.call(Element$$1.extend, Element$$1, [element$$30]);
    }
    return;
  }
  function up(element$$31, expression$$1, index$$56) {
    element$$31 = $$$1(element$$31);
    var v2651 = arguments.length;
    var v1372 = v2651 === 1;
    if (v1372) {
      var v1371 = element$$31.parentNode;
      return $$$1(v1371);
    }
    return _recursivelyFind(element$$31, "parentNode", expression$$1, index$$56);
  }
  function down(element$$32, expression$$2, index$$57) {
    element$$32 = $$$1(element$$32);
    expression$$2 = expression$$2 || 0;
    index$$57 = index$$57 || 0;
    var v1373 = JAM.call(Object.isNumber, Object, [expression$$2], JAM.policy.p1);
    if (v1373) {
      index$$57 = expression$$2;
      expression$$2 = "*";
    }
    var v2652 = Prototype.Selector;
    var v1374 = JAM.call(v2652.select, v2652, [expression$$2, element$$32], JAM.policy.p1);
    var node$$8 = v1374[index$$57];
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
      var v1378 = JAM.call(v2653.match, v2653, [sibling, expressions$$1], JAM.policy.p1);
      if (v1378) {
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
      var v1380 = element$$37 === ancestor$$1;
      if (v1380) {
        return true;
      }
      v1381 = element$$37 = element$$37.parentNode;
    }
    return false;
  }
  function descendantOf_contains(element$$38, ancestor$$2) {
    element$$38 = $$$1(element$$38);
    ancestor$$2 = $$$1(ancestor$$2);
    var v2654 = ancestor$$2.contains;
    var v1382 = !v2654;
    if (v1382) {
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
    var v2655 = JAM.call(element$$39.compareDocumentPosition, element$$39, [ancestor$$3], JAM.policy.p1);
    var v1384 = v2655 & 8;
    return v1384 === 8;
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
    var v2656 = table.values;
    var v1389 = v2656[name$$34];
    if (v1389) {
      var v1388 = table.values;
      return JAM.call(v1388[name$$34], v1388, [element$$42, name$$34], JAM.policy.p1);
    }
    var v2657 = table.names;
    var v1391 = v2657[name$$34];
    if (v1391) {
      var v1390 = table.names;
      name$$34 = v1390[name$$34];
    }
    var v1394 = JAM.call(name$$34.include, name$$34, [":"], JAM.policy.p1);
    if (v1394) {
      var v3363 = element$$42.attributes;
      var v2658 = !v3363;
      var v3365 = !v2658;
      if (v3365) {
        var v3693 = element$$42.attributes;
        var v3364 = v3693[name$$34];
        v2658 = !v3364;
      }
      var v1392 = v2658;
      if (v1392) {
        return null;
      }
      var v2659 = element$$42.attributes;
      var v1393 = v2659[name$$34];
      return v1393.value;
    }
    return JAM.call(element$$42.getAttribute, element$$42, [name$$34], JAM.policy.p1);
  }
  function readAttribute_Opera(element$$43, name$$35) {
    var v1395 = name$$35 === "title";
    if (v1395) {
      return element$$43.title;
    }
    return JAM.call(element$$43.getAttribute, element$$43, [name$$35], JAM.policy.p1);
  }
  function writeAttribute(element$$44, name$$36, value$$62) {
    element$$44 = $$$1(element$$44);
    var attributes$$3 = {};
    var table$$1 = ATTRIBUTE_TRANSLATIONS.write;
    var v2660 = typeof name$$36;
    var v1397 = v2660 === "object";
    if (v1397) {
      attributes$$3 = name$$36;
    } else {
      var v1396;
      var v2661 = JAM.call(Object.isUndefined, Object, [value$$62], JAM.policy.p1);
      if (v2661) {
        v1396 = true;
      } else {
        v1396 = value$$62;
      }
      introspect(JAM.policy.p2) {
        attributes$$3[name$$36] = v1396;
      }
    }
    var attr$$1;
    for (attr$$1 in attributes$$3) {
      var v2662 = table$$1.names;
      var v1398 = v2662[attr$$1];
      var v2663 = !v1398;
      if (v2663) {
        v1398 = attr$$1;
      }
      name$$36 = v1398;
      value$$62 = attributes$$3[attr$$1];
      var v2664 = table$$1.values;
      var v1400 = v2664[attr$$1];
      if (v1400) {
        var v1399 = table$$1.values;
        name$$36 = JAM.call(v1399[attr$$1], v1399, [element$$44, value$$62], JAM.policy.p1);
      }
      var v2665 = value$$62 === false;
      var v3366 = !v2665;
      if (v3366) {
        v2665 = value$$62 === null;
      }
      var v1402 = v2665;
      if (v1402) {
        JAM.call(element$$44.removeAttribute, element$$44, [name$$36], JAM.policy.p1);
      } else {
        var v1401 = value$$62 === true;
        if (v1401) {
          JAM.call(element$$44.setAttribute, element$$44, [name$$36, name$$36], JAM.policy.p1);
        } else {
          JAM.call(element$$44.setAttribute, element$$44, [name$$36, value$$62], JAM.policy.p1);
        }
      }
    }
    return element$$44;
  }
  function hasAttribute(element$$45, attribute$$1) {
    var v2666 = ATTRIBUTE_TRANSLATIONS.has;
    var v1403 = v2666[attribute$$1];
    var v2667 = !v1403;
    if (v2667) {
      v1403 = attribute$$1;
    }
    attribute$$1 = v1403;
    var v1404 = $$$1(element$$45);
    var node$$9 = JAM.call(v1404.getAttributeNode, v1404, [attribute$$1], JAM.policy.p1);
    var v3367 = node$$9;
    if (v3367) {
      v3367 = node$$9.specified;
    }
    var v2668 = v3367;
    var v1405 = !v2668;
    return !v1405;
  }
  function classNames$$1(element$$46) {
    var v1406 = Element$$1.ClassNames;
    return JAM.new(v1406, [element$$46]);
  }
  function getRegExpForClassName(className) {
    var v1407 = regExpCache[className];
    if (v1407) {
      return regExpCache[className];
    }
    var v2669 = "(^|\\s+)" + className;
    var v1408 = v2669 + "(\\s+|$)";
    var re = new RegExp(v1408);
    introspect(JAM.policy.p2) {
      regExpCache[className] = re;
    }
    return re;
  }
  function hasClassName(element$$47, className$$1) {
    var v2670 = element$$47 = $$$1(element$$47);
    var v1409 = !v2670;
    if (v1409) {
      return;
    }
    var elementClassName = element$$47.className;
    var v2671 = elementClassName.length;
    var v1410 = v2671 === 0;
    if (v1410) {
      return false;
    }
    var v1411 = elementClassName === className$$1;
    if (v1411) {
      return true;
    }
    var v1412 = getRegExpForClassName(className$$1);
    return JAM.call(v1412.test, v1412, [elementClassName], JAM.policy.p1);
  }
  function addClassName(element$$48, className$$2) {
    var v2672 = element$$48 = $$$1(element$$48);
    var v1413 = !v2672;
    if (v1413) {
      return;
    }
    var v2673 = hasClassName(element$$48, className$$2);
    var v1414 = !v2673;
    if (v1414) {
      var v2674 = element$$48.className;
      var v3694;
      var v3819 = element$$48.className;
      if (v3819) {
        v3694 = " ";
      } else {
        v3694 = "";
      }
      var v3368 = v3694;
      var v2675 = v3368 + className$$2;
      element$$48.className = v2674 + v2675;
    }
    return element$$48;
  }
  function removeClassName(element$$49, className$$3) {
    var v2676 = element$$49 = $$$1(element$$49);
    var v1415 = !v2676;
    if (v1415) {
      return;
    }
    var v2677 = element$$49.className;
    var v2678 = getRegExpForClassName(className$$3);
    var v1416 = JAM.call(v2677.replace, v2677, [v2678, " "], JAM.policy.p1);
    var v3955 = JAM.call(v1416.strip, v1416, [], JAM.policy.p1);
    element$$49.className = v3955;
    return element$$49;
  }
  function toggleClassName(element$$50, className$$4, bool$$1) {
    var v2679 = element$$50 = $$$1(element$$50);
    var v1417 = !v2679;
    if (v1417) {
      return;
    }
    var v1419 = JAM.call(Object.isUndefined, Object, [bool$$1], JAM.policy.p1);
    if (v1419) {
      var v1418 = hasClassName(element$$50, className$$4);
      bool$$1 = !v1418;
    }
    var v2680;
    if (bool$$1) {
      v2680 = "addClassName";
    } else {
      v2680 = "removeClassName";
    }
    var v1420 = v2680;
    var method$$7 = Element$$1[v1420];
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
    var v2681 = JAM.call(v3369.hasAttribute, v3369, [attribute$$5], JAM.policy.p1);
    if (v2681) {
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
    var v1425 = JAM.call(Object.isString, Object, [styles], JAM.policy.p1);
    if (v1425) {
      var v2682 = elementStyle.cssText;
      var v2683 = ";" + styles;
      elementStyle.cssText = v2682 + v2683;
      var v1424 = JAM.call(styles.include, styles, ["opacity"], JAM.policy.p1);
      if (v1424) {
        var v1423 = JAM.call(styles.match, styles, [/opacity:\s*(\d?\.?\d*)/], JAM.policy.p1);
        var opacity = v1423[1];
        JAM.call(Element$$1.setOpacity, Element$$1, [element$$55, opacity]);
      }
      return element$$55;
    }
    var property$$8;
    for (property$$8 in styles) {
      var v1429 = property$$8 === "opacity";
      if (v1429) {
        var v1426 = styles[property$$8];
        JAM.call(Element$$1.setOpacity, Element$$1, [element$$55, v1426]);
      } else {
        var value$$63 = styles[property$$8];
        var v2684 = property$$8 === "float";
        var v3370 = !v2684;
        if (v3370) {
          v2684 = property$$8 === "cssFloat";
        }
        var v1428 = v2684;
        if (v1428) {
          var v1427;
          var v3371 = elementStyle.styleFloat;
          var v2685 = JAM.call(Object.isUndefined, Object, [v3371], JAM.policy.p1);
          if (v2685) {
            v1427 = "cssFloat";
          } else {
            v1427 = "styleFloat";
          }
          property$$8 = v1427;
        }
        introspect(JAM.policy.p2) {
          elementStyle[property$$8] = value$$63;
        }
      }
    }
    return element$$55;
  }
  function getStyle(element$$56, style$$2) {
    element$$56 = $$$1(element$$56);
    JSCompiler_inline_label_normalizeStyleName_18: {
      var v2686 = style$$2 === "float";
      var v3372 = !v2686;
      if (v3372) {
        v2686 = style$$2 === "styleFloat";
      }
      var v1430 = v2686;
      if (v1430) {
        style$$2 = "cssFloat";
        break JSCompiler_inline_label_normalizeStyleName_18;
      }
      style$$2 = JAM.call(style$$2.camelize, style$$2, [], JAM.policy.p1);
    }
    var v1431 = element$$56.style;
    var value$$64 = v1431[style$$2];
    var v2687 = !value$$64;
    var v3373 = !v2687;
    if (v3373) {
      v2687 = value$$64 === "auto";
    }
    var v1434 = v2687;
    if (v1434) {
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
    var v1436 = style$$2 === "opacity";
    if (v1436) {
      var v1435;
      if (value$$64) {
        v1435 = parseFloat(value$$64);
      } else {
        v1435 = 1;
      }
      return v1435;
    }
    var v1437;
    var v2688 = value$$64 === "auto";
    if (v2688) {
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
      var v3374 = !v2689;
      if (v3374) {
        v2689 = style$$4 === "cssFloat";
      }
      var v1438 = v2689;
      if (v1438) {
        style$$4 = "styleFloat";
        break JSCompiler_inline_label_normalizeStyleName_IE_20;
      }
      style$$4 = JAM.call(style$$4.camelize, style$$4, [], JAM.policy.p1);
    }
    var v1439 = element$$58.style;
    var value$$65 = v1439[style$$4];
    var v2690 = !value$$65;
    if (v2690) {
      v2690 = element$$58.currentStyle;
    }
    var v1441 = v2690;
    if (v1441) {
      var v1440 = element$$58.currentStyle;
      value$$65 = v1440[style$$4];
    }
    var v2691 = style$$4 === "opacity";
    if (v2691) {
      v2691 = !STANDARD_CSS_OPACITY_SUPPORTED;
    }
    var v1442 = v2691;
    if (v1442) {
      return getOpacity_IE(element$$58);
    }
    var v1445 = value$$65 === "auto";
    if (v1445) {
      var v3375 = style$$4 === "width";
      var v3695 = !v3375;
      if (v3695) {
        v3375 = style$$4 === "height";
      }
      var v2692 = v3375;
      if (v2692) {
        v2692 = JAM.call(Element$$1.visible, Element$$1, [element$$58], JAM.policy.p1);
      }
      var v1444 = v2692;
      if (v1444) {
        var v1443 = JAM.call(Element$$1.measure, Element$$1, [element$$58, style$$4], JAM.policy.p1);
        return v1443 + "px";
      }
      return null;
    }
    return value$$65;
  }
  function setOpacity(element$$60, value$$66) {
    element$$60 = $$$1(element$$60);
    var v2693 = value$$66 == 1;
    var v3376 = !v2693;
    if (v3376) {
      v2693 = value$$66 === "";
    }
    var v1447 = v2693;
    if (v1447) {
      value$$66 = "";
    } else {
      var v1446 = value$$66 < 1E-5;
      if (v1446) {
        value$$66 = 0;
      }
    }
    var v1448 = element$$60.style;
    v1448.opacity = value$$66;
    return element$$60;
  }
  function setOpacity_IE(element$$61, value$$67) {
    if (STANDARD_CSS_OPACITY_SUPPORTED) {
      return setOpacity(element$$61, value$$67);
    }
    var element$$inline_21 = $$$1(element$$61);
    var v3377 = element$$inline_21.currentStyle;
    var v2694 = v3377.hasLayout;
    var v1450 = !v2694;
    if (v1450) {
      var v1449 = element$$inline_21.style;
      v1449.zoom = 1;
    }
    element$$61 = element$$inline_21;
    var filter$$4 = JAM.call(Element$$1.getStyle, Element$$1, [element$$61, "filter"], JAM.policy.p1);
    var style$$5 = element$$61.style;
    var v2695 = value$$67 == 1;
    var v3378 = !v2695;
    if (v3378) {
      v2695 = value$$67 === "";
    }
    var v1452 = v2695;
    if (v1452) {
      var v1451 = filter$$4 || "";
      filter$$4 = JAM.call(v1451.replace, v1451, [/alpha\([^\)]*\)/gi, ""], JAM.policy.p1);
      if (filter$$4) {
        style$$5.filter = filter$$4;
      } else {
        JAM.call(style$$5.removeAttribute, style$$5, ["filter"], JAM.policy.p1);
      }
      return element$$61;
    }
    var v1453 = value$$67 < 1E-5;
    if (v1453) {
      value$$67 = 0;
    }
    var v3696 = filter$$4 || "";
    var v3379 = JAM.call(v3696.replace, v3696, [/alpha\([^\)]*\)/gi, ""], JAM.policy.p1);
    var v2696 = v3379 + "alpha(opacity=";
    var v2697 = value$$67 * 100;
    var v1454 = v2696 + v2697;
    style$$5.filter = v1454 + ")";
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
    var v2698 = filter$$5.length;
    var v1455 = v2698 === 0;
    if (v1455) {
      return 1;
    }
    var v1456 = filter$$5 || "";
    var match$$9 = JAM.call(v1456.match, v1456, [/alpha\(opacity=(.*)\)/], JAM.policy.p1);
    var v1458 = match$$9[1];
    if (v1458) {
      var v2699 = match$$9[1];
      var v1457 = parseFloat(v2699);
      return v1457 / 100;
    }
    return 1;
  }
  function getUniqueElementID(element$$64) {
    var v1459 = element$$64 === window;
    if (v1459) {
      return 0;
    }
    var v3380 = element$$64._prototypeUID;
    var v2700 = typeof v3380;
    var v1460 = v2700 === "undefined";
    if (v1460) {
      var v2701 = Element$$1.Storage;
      element$$64._prototypeUID = v2701.UID;
      var v2702 = Element$$1.Storage;
      var v3697 = Element$$1.Storage;
      var v3381 = v3697.UID;
      v2702.UID = v3381 + 1;
    }
    return element$$64._prototypeUID;
  }
  function getUniqueElementID_IE(element$$65) {
    var v1461 = element$$65 === window;
    if (v1461) {
      return 0;
    }
    var v1462 = element$$65 == document;
    if (v1462) {
      return 1;
    }
    return element$$65.uniqueID;
  }
  function getStorage(element$$66) {
    var v2703 = element$$66 = $$$1(element$$66);
    var v1463 = !v2703;
    if (v1463) {
      return;
    }
    var uid$$2 = JAM.call(getUniqueElementID, null, [element$$66], JAM.policy.p1);
    var v3382 = Element$$1.Storage;
    var v2704 = v3382[uid$$2];
    var v1465 = !v2704;
    if (v1465) {
      var v1464 = Element$$1.Storage;
      var v3956 = $H();
      introspect(JAM.policy.p2) {
        v1464[uid$$2] = v3956;
      }
    }
    var v1466 = Element$$1.Storage;
    return v1466[uid$$2];
  }
  function store(element$$67, key$$22, value$$68) {
    var v2705 = element$$67 = $$$1(element$$67);
    var v1467 = !v2705;
    if (v1467) {
      return;
    }
    var storage = getStorage(element$$67);
    var v2706 = arguments.length;
    var v1468 = v2706 === 2;
    if (v1468) {
      JAM.call(storage.update, storage, [key$$22], JAM.policy.p1);
    } else {
      JAM.call(storage.set, storage, [key$$22, value$$68], JAM.policy.p1);
    }
    return element$$67;
  }
  function retrieve(element$$68, key$$23, defaultValue) {
    var v2707 = element$$68 = $$$1(element$$68);
    var v1469 = !v2707;
    if (v1469) {
      return;
    }
    var storage$$1 = getStorage(element$$68);
    var value$$69 = JAM.call(storage$$1.get, storage$$1, [key$$23], JAM.policy.p1);
    var v1470 = JAM.call(Object.isUndefined, Object, [value$$69], JAM.policy.p1);
    if (v1470) {
      JAM.call(storage$$1.set, storage$$1, [key$$23, defaultValue], JAM.policy.p1);
      value$$69 = defaultValue;
    }
    return value$$69;
  }
  function checkElementPrototypeDeficiency() {
    var tagName$$7 = "object";
    var v3383 = window.Element;
    var v2708 = typeof v3383;
    var v1471 = v2708 === "undefined";
    if (v1471) {
      return false;
    }
    var v1472 = window.Element;
    var proto$$2 = v1472.prototype;
    if (proto$$2) {
      var v3384 = JAM.call(Math.random, Math, [], JAM.policy.p1);
      var v2709 = v3384 + "";
      var v1473 = JAM.call(v2709.slice, v2709, [2], JAM.policy.p1);
      var id$$1 = "_" + v1473;
      var el = JAM.call(document.createElement, document, [tagName$$7], JAM.policy.p1);
      introspect(JAM.policy.p2) {
        proto$$2[id$$1] = "x";
      }
      var v1474 = el[id$$1];
      var isBuggy = v1474 !== "x";
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
        var v3385 = property$$9 in element$$69;
        v2710 = !v3385;
      }
      var v1475 = v2710;
      if (v1475) {
        var v3957 = JAM.call(value$$70.methodize, value$$70, [], JAM.policy.p1);
        introspect(JAM.policy.p2) {
          element$$69[property$$9] = v3957;
        }
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
    var v3386 = !v2711;
    if (v3386) {
      v2711 = elementIsExtended(element$$71);
    }
    var v1476 = v2711;
    if (v1476) {
      return element$$71;
    }
    var v3387 = element$$71.nodeType;
    var v3388 = Node.ELEMENT_NODE;
    var v2712 = v3387 !== v3388;
    var v3389 = !v2712;
    if (v3389) {
      v2712 = element$$71 == window;
    }
    var v1477 = v2712;
    if (v1477) {
      return element$$71;
    }
    var methods$$3 = JAM.call(Object.clone, Object, [Methods], JAM.policy.p1);
    var v1478 = element$$71.tagName;
    var tagName$$8 = JAM.call(v1478.toUpperCase, v1478, [], JAM.policy.p1);
    var v1480 = ByTag[tagName$$8];
    if (v1480) {
      var v1479 = ByTag[tagName$$8];
      JAM.call(Object.extend, Object, [methods$$3, v1479], JAM.policy.p1);
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
    var v3390 = !v2713;
    if (v3390) {
      v2713 = elementIsExtended(element$$72);
    }
    var v1482 = v2713;
    if (v1482) {
      return element$$72;
    }
    var t$$1 = element$$72.tagName;
    var v2714 = t$$1;
    if (v2714) {
      v2714 = JAM.call(/^(?:object|applet|embed)$/i.test, /^(?:object|applet|embed)$/i, [t$$1], JAM.policy.p1);
    }
    var v1486 = v2714;
    if (v1486) {
      var v1483 = Element$$1.Methods;
      extendElementWith(element$$72, v1483);
      var v2715 = Element$$1.Methods;
      var v1484 = v2715.Simulated;
      extendElementWith(element$$72, v1484);
      var v3391 = Element$$1.Methods;
      var v2716 = v3391.ByTag;
      var v2717 = JAM.call(t$$1.toUpperCase, t$$1, [], JAM.policy.p1);
      var v1485 = v2716[v2717];
      extendElementWith(element$$72, v1485);
    }
    return element$$72;
  }
  function addMethodsToTagName(tagName$$9, methods$$4) {
    tagName$$9 = JAM.call(tagName$$9.toUpperCase, tagName$$9, [], JAM.policy.p1);
    var v2718 = ByTag[tagName$$9];
    var v1487 = !v2718;
    if (v1487) {
      introspect(JAM.policy.p2) {
        ByTag[tagName$$9] = {};
      }
    }
    var v1488 = ByTag[tagName$$9];
    JAM.call(Object.extend, Object, [v1488, methods$$4], JAM.policy.p1);
    return;
  }
  function mergeMethods(destination$$1, methods$$5, onlyIfAbsent) {
    var v1489 = JAM.call(Object.isUndefined, Object, [onlyIfAbsent], JAM.policy.p1);
    if (v1489) {
      onlyIfAbsent = false;
    }
    var property$$10;
    for (property$$10 in methods$$5) {
      var value$$71 = methods$$5[property$$10];
      var v2719 = JAM.call(Object.isFunction, Object, [value$$71], JAM.policy.p1);
      var v1490 = !v2719;
      if (v1490) {
        continue;
      }
      var v2720 = !onlyIfAbsent;
      var v3393 = !v2720;
      if (v3393) {
        var v3392 = property$$10 in destination$$1;
        v2720 = !v3392;
      }
      var v1491 = v2720;
      if (v1491) {
        var v3958 = JAM.call(value$$71.methodize, value$$71, [], JAM.policy.p1);
        introspect(JAM.policy.p2) {
          destination$$1[property$$10] = v3958;
        }
      }
    }
    return;
  }
  function findDOMClass(tagName$$10) {
    var klass$$1;
    var trans = {"OPTGROUP":"OptGroup", "TEXTAREA":"TextArea", "P":"Paragraph", "FIELDSET":"FieldSet", "UL":"UList", "OL":"OList", "DL":"DList", "DIR":"Directory", "H1":"Heading", "H2":"Heading", "H3":"Heading", "H4":"Heading", "H5":"Heading", "H6":"Heading", "Q":"Quote", "INS":"Mod", "DEL":"Mod", "A":"Anchor", "IMG":"Image", "CAPTION":"TableCaption", "COL":"TableCol", "COLGROUP":"TableCol", "THEAD":"TableSection", "TFOOT":"TableSection", "TBODY":"TableSection", "TR":"TableRow", "TH":"TableCell", 
    "TD":"TableCell", "FRAMESET":"FrameSet", "IFRAME":"IFrame"};
    var v1493 = trans[tagName$$10];
    if (v1493) {
      var v2721 = trans[tagName$$10];
      var v1492 = "HTML" + v2721;
      klass$$1 = v1492 + "Element";
    }
    var v1494 = window[klass$$1];
    if (v1494) {
      return window[klass$$1];
    }
    var v1495 = "HTML" + tagName$$10;
    klass$$1 = v1495 + "Element";
    var v1496 = window[klass$$1];
    if (v1496) {
      return window[klass$$1];
    }
    var v2722 = JAM.call(tagName$$10.capitalize, tagName$$10, [], JAM.policy.p1);
    var v1497 = "HTML" + v2722;
    klass$$1 = v1497 + "Element";
    var v1498 = window[klass$$1];
    if (v1498) {
      return window[klass$$1];
    }
    var element$$73 = JAM.call(document.createElement, document, [tagName$$10], JAM.policy.p1);
    var v1499 = element$$73["__proto__"];
    var v2724 = !v1499;
    if (v2724) {
      var v2723 = element$$73.constructor;
      v1499 = v2723.prototype;
    }
    var proto$$3 = v1499;
    element$$73 = null;
    return proto$$3;
  }
  function addMethods$$1(methods$$6) {
    var v2725 = arguments.length;
    var v1505 = v2725 === 0;
    if (v1505) {
      var v1500 = Form.Methods;
      JAM.call(Object.extend, Object, [Form, v1500], JAM.policy.p1);
      var v1501 = Form.Element;
      var v2726 = Form.Element;
      var v1502 = v2726.Methods;
      JAM.call(Object.extend, Object, [v1501, v1502], JAM.policy.p1);
      var v2727 = Element$$1.Methods;
      var v1503 = v2727.ByTag;
      var v3394 = Form.Methods;
      var v2728 = JAM.call(Object.clone, Object, [v3394], JAM.policy.p1);
      var v3698 = Form.Element;
      var v3395 = v3698.Methods;
      var v2729 = JAM.call(Object.clone, Object, [v3395], JAM.policy.p1);
      var v3699 = Form.Element;
      var v3396 = v3699.Methods;
      var v2730 = JAM.call(Object.clone, Object, [v3396], JAM.policy.p1);
      var v3700 = Form.Element;
      var v3397 = v3700.Methods;
      var v2731 = JAM.call(Object.clone, Object, [v3397], JAM.policy.p1);
      var v3701 = Form.Element;
      var v3398 = v3701.Methods;
      var v2732 = JAM.call(Object.clone, Object, [v3398], JAM.policy.p1);
      var v1504 = {"FORM":v2728, "INPUT":v2729, "SELECT":v2730, "TEXTAREA":v2731, "BUTTON":v2732};
      JAM.call(Object.extend, Object, [v1503, v1504], JAM.policy.p1);
    }
    var v2733 = arguments.length;
    var v1506 = v2733 === 2;
    if (v1506) {
      var tagName$$11 = methods$$6;
      methods$$6 = arguments[1];
    }
    var v1511 = !tagName$$11;
    if (v1511) {
      var v1507 = Element$$1.Methods;
      var v1508 = methods$$6 || {};
      JAM.call(Object.extend, Object, [v1507, v1508], JAM.policy.p1);
    } else {
      var v1510 = JAM.call(Object.isArray, Object, [tagName$$11], JAM.policy.p1);
      if (v1510) {
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
    var v2734 = window.HTMLElement;
    if (v2734) {
      v1512 = HTMLElement.prototype;
    } else {
      v1512 = Element$$1.prototype;
    }
    var ELEMENT_PROTOTYPE = v1512;
    var v1515 = F.ElementExtensions;
    if (v1515) {
      var v1513 = Element$$1.Methods;
      mergeMethods(ELEMENT_PROTOTYPE, v1513);
      var v2735 = Element$$1.Methods;
      var v1514 = v2735.Simulated;
      mergeMethods(ELEMENT_PROTOTYPE, v1514, true);
    }
    var v1520 = F.SpecificElementExtensions;
    if (v1520) {
      var v2736 = Element$$1.Methods;
      var v1519 = v2736.ByTag;
      for (tag in v1519) {
        var klass$$2 = findDOMClass(tag);
        var v1516 = JAM.call(Object.isUndefined, Object, [klass$$2], JAM.policy.p1);
        if (v1516) {
          continue;
        }
        var v1517 = klass$$2.prototype;
        var v1518 = ByTag[tag];
        mergeMethods(v1517, v1518);
      }
    }
    var v1521 = Element$$1.Methods;
    JAM.call(Object.extend, Object, [Element$$1, v1521], JAM.policy.p1);
    var v2737 = Element$$1.Methods;
    var v1522 = v2737.Simulated;
    JAM.call(Object.extend, Object, [Element$$1, v1522], JAM.policy.p1);
    delete Element$$1.ByTag;
    delete Element$$1.Simulated;
    var v1523 = Element$$1.extend;
    JAM.call(v1523.refresh, v1523, [], JAM.policy.p1);
    ELEMENT_CACHE = {};
    return;
  }
  var UNDEFINED;
  var v1524 = Array.prototype;
  var SLICE = v1524.slice;
  var DIV = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
  GLOBAL.$ = $$$1;
  var v2738 = GLOBAL.Node;
  var v1525 = !v2738;
  if (v1525) {
    GLOBAL.Node = {};
  }
  var v3399 = GLOBAL.Node;
  var v2739 = v3399.ELEMENT_NODE;
  var v1528 = !v2739;
  if (v1528) {
    var v1526 = GLOBAL.Node;
    var v1527 = {ELEMENT_NODE:1, ATTRIBUTE_NODE:2, TEXT_NODE:3, CDATA_SECTION_NODE:4, ENTITY_REFERENCE_NODE:5, ENTITY_NODE:6, PROCESSING_INSTRUCTION_NODE:7, COMMENT_NODE:8, DOCUMENT_NODE:9, DOCUMENT_TYPE_NODE:10, DOCUMENT_FRAGMENT_NODE:11, NOTATION_NODE:12};
    JAM.call(Object.extend, Object, [v1526, v1527], JAM.policy.p1);
  }
  var ELEMENT_CACHE = {};
  var HAS_EXTENDED_CREATE_ELEMENT_SYNTAX = v117();
  var oldElement = GLOBAL.Element;
  GLOBAL.Element = Element$$1;
  var v1529 = GLOBAL.Element;
  var v1530 = oldElement || {};
  JAM.call(Object.extend, Object, [v1529, v1530], JAM.policy.p1);
  if (oldElement) {
    var v1531 = GLOBAL.Element;
    v1531.prototype = oldElement.prototype;
  }
  Element$$1.Methods = {ByTag:{}, Simulated:{}};
  var methods$$1 = {};
  var INSPECT_ATTRIBUTES = {id:"id", className:"class"};
  methods$$1.inspect = inspect$$5;
  var v1532 = {visible:visible, toggle:toggle, hide:hide, show:show};
  JAM.call(Object.extend, Object, [methods$$1, v1532], JAM.policy.p1);
  var SELECT_ELEMENT_INNERHTML_BUGGY = v118();
  var TABLE_ELEMENT_INNERHTML_BUGGY = v119();
  var LINK_ELEMENT_INNERHTML_BUGGY = v120();
  var v1533 = SELECT_ELEMENT_INNERHTML_BUGGY || TABLE_ELEMENT_INNERHTML_BUGGY;
  var v2740 = !v1533;
  if (v2740) {
    v1533 = LINK_ELEMENT_INNERHTML_BUGGY;
  }
  var ANY_INNERHTML_BUGGY = v1533;
  var SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING = v121();
  var v2741 = ["<table>", "</table>", 1];
  var v2742 = ["<table><tbody>", "</tbody></table>", 2];
  var v2743 = ["<table><tbody><tr>", "</tr></tbody></table>", 3];
  var v2744 = ["<table><tbody><tr><td>", "</td></tr></tbody></table>", 4];
  var v2745 = ["<select>", "</select>", 1];
  var v1534 = {TABLE:v2741, TBODY:v2742, TR:v2743, TD:v2744, SELECT:v2745};
  var INSERTION_TRANSLATIONS = {before:v122, top:v123, bottom:v124, after:v125, tags:v1534};
  var tags = INSERTION_TRANSLATIONS.tags;
  var v2746 = tags.TBODY;
  var v2747 = tags.TBODY;
  var v2748 = tags.TD;
  var v1535 = {THEAD:v2746, TFOOT:v2747, TH:v2748};
  JAM.call(Object.extend, Object, [tags, v1535], JAM.policy.p1);
  var v2749 = document.documentElement;
  var v1536 = "outerHTML" in v2749;
  if (v1536) {
    replace = replace_IE;
  }
  if (HAS_UNIQUE_ID_PROPERTY) {
    purgeCollection = purgeCollection_IE;
  }
  var v1537 = {remove:remove, update:update$$2, replace:replace, insert:insert, wrap:wrap$$1, cleanWhitespace:cleanWhitespace, empty:empty$$1, clone:clone$$3, purge:purge};
  JAM.call(Object.extend, Object, [methods$$1, v1537], JAM.policy.p1);
  var descendantOf;
  var v1539 = DIV.compareDocumentPosition;
  if (v1539) {
    descendantOf = descendantOf_compareDocumentPosition;
  } else {
    var v1538 = DIV.contains;
    if (v1538) {
      descendantOf = descendantOf_contains;
    } else {
      descendantOf = descendantOf_DOM;
    }
  }
  var v1540 = {recursivelyCollect:recursivelyCollect, ancestors:ancestors, descendants:descendants, firstDescendant:firstDescendant, immediateDescendants:immediateDescendants, previousSiblings:previousSiblings, nextSiblings:nextSiblings, siblings:siblings, match:match$$7, up:up, down:down, previous:previous, next:next, select:select, adjacent:adjacent, descendantOf:descendantOf, getElementsBySelector:select, childElements:immediateDescendants};
  JAM.call(Object.extend, Object, [methods$$1, v1540], JAM.policy.p1);
  var idCounter = 1;
  var PROBLEMATIC_ATTRIBUTE_READING = v126();
  if (PROBLEMATIC_ATTRIBUTE_READING) {
    readAttribute = readAttribute_IE;
  } else {
    var v2750 = Prototype.Browser;
    var v1541 = v2750.Opera;
    if (v1541) {
      readAttribute = readAttribute_Opera;
    }
  }
  var v3400 = GLOBAL.Element;
  var v2751 = v3400.Methods;
  var v1542 = v2751.Simulated;
  v1542.hasAttribute = hasAttribute;
  var regExpCache = {};
  var ATTRIBUTE_TRANSLATIONS = {};
  var classProp = "className";
  var forProp = "for";
  JAM.call(DIV.setAttribute, DIV, [classProp, "x"], JAM.policy.p1);
  var v2752 = DIV.className;
  var v1544 = v2752 !== "x";
  if (v1544) {
    JAM.call(DIV.setAttribute, DIV, ["class", "x"], JAM.policy.p1);
    var v2753 = DIV.className;
    var v1543 = v2753 === "x";
    if (v1543) {
      classProp = "class";
    }
  }
  var LABEL = JAM.call(document.createElement, document, ["label"], JAM.policy.p1);
  JAM.call(LABEL.setAttribute, LABEL, [forProp, "x"], JAM.policy.p1);
  var v2754 = LABEL.htmlFor;
  var v1546 = v2754 !== "x";
  if (v1546) {
    JAM.call(LABEL.setAttribute, LABEL, ["htmlFor", "x"], JAM.policy.p1);
    var v2755 = LABEL.htmlFor;
    var v1545 = v2755 === "x";
    if (v1545) {
      forProp = "htmlFor";
    }
  }
  LABEL = null;
  JAM.set(DIV, "onclick", Prototype.emptyFunction);
  var onclickValue = JAM.call(DIV.getAttribute, DIV, ["onclick"], JAM.policy.p1);
  var _getEv;
  var v3401 = String(onclickValue);
  var v2756 = JAM.call(v3401.indexOf, v3401, ["{"], JAM.policy.p1);
  var v1548 = v2756 > -1;
  if (v1548) {
    _getEv = v127;
  } else {
    var v1547 = onclickValue === "";
    if (v1547) {
      _getEv = v128;
    }
  }
  var v1549 = {"class":classProp, "className":classProp, "for":forProp, "htmlFor":forProp};
  var v1550 = {style:v129, title:v130};
  ATTRIBUTE_TRANSLATIONS.read = {names:v1549, values:v1550};
  var v1551 = {className:"class", htmlFor:"for", cellpadding:"cellPadding", cellspacing:"cellSpacing"};
  var v1552 = {checked:v131, style:v132};
  ATTRIBUTE_TRANSLATIONS.write = {names:v1551, values:v1552};
  ATTRIBUTE_TRANSLATIONS.has = {names:{}};
  var v2757 = ATTRIBUTE_TRANSLATIONS.write;
  var v1553 = v2757.names;
  var v2758 = ATTRIBUTE_TRANSLATIONS.read;
  var v1554 = v2758.names;
  JAM.call(Object.extend, Object, [v1553, v1554], JAM.policy.p1);
  var v1555 = "colSpan rowSpan vAlign dateTime " + "accessKey tabIndex encType maxLength readOnly longDesc frameBorder";
  var CAMEL_CASED_ATTRIBUTE_NAMES = $w(v1555);
  var i$$16 = 0;
  var attr;
  var v1560 = attr = CAMEL_CASED_ATTRIBUTE_NAMES[i$$16];
  for (;v1560;) {
    var v2759 = ATTRIBUTE_TRANSLATIONS.write;
    var v1556 = v2759.names;
    var v1557 = JAM.call(attr.toLowerCase, attr, [], JAM.policy.p1);
    introspect(JAM.policy.p2) {
      v1556[v1557] = attr;
    }
    var v2760 = ATTRIBUTE_TRANSLATIONS.has;
    var v1558 = v2760.names;
    var v1559 = JAM.call(attr.toLowerCase, attr, [], JAM.policy.p1);
    introspect(JAM.policy.p2) {
      v1558[v1559] = attr;
    }
    i$$16++;
    v1560 = attr = CAMEL_CASED_ATTRIBUTE_NAMES[i$$16];
  }
  var v2761 = ATTRIBUTE_TRANSLATIONS.read;
  var v1561 = v2761.values;
  var v1562 = {href:_getAttr2, src:_getAttr2, type:_getAttr, action:_getAttrNode, disabled:_getFlag, checked:_getFlag, readonly:_getFlag, multiple:_getFlag, onload:_getEv, onunload:_getEv, onclick:_getEv, ondblclick:_getEv, onmousedown:_getEv, onmouseup:_getEv, onmouseover:_getEv, onmousemove:_getEv, onmouseout:_getEv, onfocus:_getEv, onblur:_getEv, onkeypress:_getEv, onkeydown:_getEv, onkeyup:_getEv, onsubmit:_getEv, onreset:_getEv, onselect:_getEv, onchange:_getEv};
  JAM.call(Object.extend, Object, [v1561, v1562], JAM.policy.p1);
  var v1563 = {identify:identify, readAttribute:readAttribute, writeAttribute:writeAttribute, classNames:classNames$$1, hasClassName:hasClassName, addClassName:addClassName, removeClassName:removeClassName, toggleClassName:toggleClassName};
  JAM.call(Object.extend, Object, [methods$$1, v1563], JAM.policy.p1);
  var STANDARD_CSS_OPACITY_SUPPORTED;
  var v1564 = DIV.style;
  v1564.cssText = "opacity:.55";
  var v2762 = DIV.style;
  var v1565 = v2762.opacity;
  STANDARD_CSS_OPACITY_SUPPORTED = JAM.call(/^0.55/.test, /^0.55/, [v1565], JAM.policy.p1);
  var v1566 = {setStyle:setStyle, getStyle:getStyle, setOpacity:setOpacity, getOpacity:getOpacity};
  JAM.call(Object.extend, Object, [methods$$1, v1566], JAM.policy.p1);
  var v2763 = DIV.style;
  var v1567 = "styleFloat" in v2763;
  if (v1567) {
    methods$$1.getStyle = getStyle_IE;
    methods$$1.setOpacity = setOpacity_IE;
    methods$$1.getOpacity = getOpacity_IE;
  }
  var UID = 0;
  var v1568 = GLOBAL.Element;
  v1568.Storage = {UID:1};
  var HAS_UNIQUE_ID_PROPERTY = "uniqueID" in DIV;
  if (HAS_UNIQUE_ID_PROPERTY) {
    getUniqueElementID = getUniqueElementID_IE;
  }
  var v1569 = {getStorage:getStorage, store:store, retrieve:retrieve};
  JAM.call(Object.extend, Object, [methods$$1, v1569], JAM.policy.p1);
  var Methods = {};
  var v1570 = Element$$1.Methods;
  var ByTag = v1570.ByTag;
  var F = Prototype.BrowserFeatures;
  var v3402 = F.ElementExtensions;
  var v2764 = !v3402;
  if (v2764) {
    v2764 = "__proto__" in DIV;
  }
  var v1572 = v2764;
  if (v1572) {
    GLOBAL.HTMLElement = {};
    var v1571 = GLOBAL.HTMLElement;
    v1571.prototype = DIV["__proto__"];
    F.ElementExtensions = true;
  }
  var HTMLOBJECTELEMENT_PROTOTYPE_BUGGY = checkElementPrototypeDeficiency();
  var EXTENDED = {};
  var v1574 = F.SpecificElementExtensions;
  if (v1574) {
    var v1573;
    if (HTMLOBJECTELEMENT_PROTOTYPE_BUGGY) {
      v1573 = extend_IE8;
    } else {
      v1573 = Prototype.K;
    }
    extend$$1 = v1573;
  }
  var v1575 = GLOBAL.Element;
  var v1576 = {extend:extend$$1, addMethods:addMethods$$1};
  JAM.call(Object.extend, Object, [v1575, v1576], JAM.policy.p1);
  var v2765 = Prototype.K;
  var v1579 = extend$$1 === v2765;
  if (v1579) {
    var v2766 = GLOBAL.Element;
    var v1577 = v2766.extend;
    v1577.refresh = Prototype.emptyFunction;
  } else {
    var v2767 = GLOBAL.Element;
    var v1578 = v2767.extend;
    v1578.refresh = v133;
  }
  JAM.call(Element$$1.addMethods, Element$$1, [methods$$1], JAM.policy.p1);
  return;
}
function v114() {
  var v1580 = Ajax.Updater;
  var v1581 = this.container;
  var v1582 = this.url;
  var v1583 = this.options;
  var v3959 = JAM.new(v1580, [v1581, v1582, v1583]);
  this.updater = v3959;
  return;
}
function v113(response$$3) {
  var v2768 = this.options;
  var v1585 = v2768.decay;
  if (v1585) {
    var v1584;
    var v3403 = response$$3.responseText;
    var v3404 = this.lastText;
    var v2771 = v3403 == v3404;
    if (v2771) {
      var v2769 = this.decay;
      var v3405 = this.options;
      var v2770 = v3405.decay;
      v1584 = v2769 * v2770;
    } else {
      v1584 = 1;
    }
    this.decay = v1584;
    this.lastText = response$$3.responseText;
  }
  var v2772 = this.onTimerEvent;
  var v1586 = JAM.call(v2772.bind, v2772, [this], JAM.policy.p1);
  var v2773 = this.decay;
  var v2774 = this.frequency;
  var v1587 = v2773 * v2774;
  var v3960 = JAM.call(v1586.delay, v1586, [v1587], JAM.policy.p1);
  this.timer = v3960;
  return;
}
function v112() {
  var v2775 = this.updater;
  var v1588 = v2775.options;
  v1588.onComplete = undefined;
  var v1589 = this.timer;
  clearTimeout(v1589);
  var v2776 = this.onComplete;
  var v3406 = !v2776;
  if (v3406) {
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
  var v1592 = this.options;
  this.onComplete = v1592.onComplete;
  var v2778 = this.options;
  var v1593 = v2778.frequency;
  var v2779 = !v1593;
  if (v2779) {
    v1593 = 2;
  }
  this.frequency = v1593;
  var v2780 = this.options;
  var v1594 = v2780.decay;
  var v2781 = !v1594;
  if (v2781) {
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
  var v3407 = JAM.call(this.success, this, [], JAM.policy.p1);
  if (v3407) {
    v2782 = "success";
  } else {
    v2782 = "failure";
  }
  var v1596 = v2782;
  var receiver = v1595[v1596];
  var options$$5 = this.options;
  var v2783 = options$$5.evalScripts;
  var v1597 = !v2783;
  if (v1597) {
    responseText = JAM.call(responseText.stripScripts, responseText, [], JAM.policy.p1);
  }
  var v1601 = receiver = JAM.call($, null, [receiver], JAM.policy.p1);
  if (v1601) {
    var v1600 = options$$5.insertion;
    if (v1600) {
      var v2784 = options$$5.insertion;
      var v1599 = JAM.call(Object.isString, Object, [v2784], JAM.policy.p1);
      if (v1599) {
        var insertion = {};
        var v1598 = options$$5.insertion;
        introspect(JAM.policy.p2) {
          insertion[v1598] = responseText;
        }
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
    var v1602 = response$$2.responseText;
    JAM.call(this.updateContent, this, [v1602], JAM.policy.p1);
    var v1603 = JAM.call(Object.isFunction, Object, [onComplete], JAM.policy.p1);
    if (v1603) {
      JAM.call(onComplete, null, [response$$2, json$$4], JAM.policy.p1);
    }
    return;
  }
  var v2785 = container.success;
  var v3408 = !v2785;
  if (v3408) {
    v2785 = container;
  }
  var v1604 = v2785;
  var v2786 = container.failure;
  var v3410 = !v2786;
  if (v3410) {
    var v3409;
    var v3702 = container.success;
    if (v3702) {
      v3409 = null;
    } else {
      v3409 = container;
    }
    v2786 = v3409;
  }
  var v1605 = v2786;
  this.container = {success:v1604, failure:v1605};
  options$$4 = JAM.call(Object.clone, Object, [options$$4], JAM.policy.p1);
  var onComplete = options$$4.onComplete;
  var v1606 = options$$4;
  var v3962 = JAM.call(v107.bind, v107, [this], JAM.policy.p1);
  v1606.onComplete = v3962;
  JAM.call($super$$1, null, [url$$4, options$$4], JAM.policy.p1);
  return;
}
function v106() {
  var v1607 = this.request;
  var options$$3 = v1607.options;
  var v3703 = options$$3.evalJSON;
  var v3411 = !v3703;
  var v3705 = !v3411;
  if (v3705) {
    var v3820 = options$$3.evalJSON;
    var v3704 = v3820 != "force";
    if (v3704) {
      var v3889 = JAM.call(this.getHeader, this, ["Content-type"], JAM.policy.p1);
      var v3900 = !v3889;
      if (v3900) {
        v3889 = "";
      }
      var v3869 = v3889;
      var v3821 = JAM.call(v3869.include, v3869, ["application/json"], JAM.policy.p1);
      v3704 = !v3821;
    }
    v3411 = v3704;
  }
  var v2787 = v3411;
  var v3413 = !v2787;
  if (v3413) {
    var v3412 = this.responseText;
    v2787 = JAM.call(v3412.blank, v3412, [], JAM.policy.p1);
  }
  var v1608 = v2787;
  if (v1608) {
    return null;
  }
  try {
    var v1609 = this.responseText;
    var v2788 = options$$3.sanitizeJSON;
    var v3415 = !v2788;
    if (v3415) {
      var v3706 = this.request;
      var v3414 = JAM.call(v3706.isSameOrigin, v3706, [], JAM.policy.p1);
      v2788 = !v3414;
    }
    var v1610 = v2788;
    return JAM.call(v1609.evalJSON, v1609, [v1610], JAM.policy.p1);
  } catch (e$$20) {
    var v1611 = this.request;
    JAM.call(v1611.dispatchException, v1611, [e$$20], JAM.policy.p1);
  }
  return;
}
function v105() {
  var json$$3 = JAM.call(this.getHeader, this, ["X-JSON"], JAM.policy.p1);
  var v1612 = !json$$3;
  if (v1612) {
    return null;
  }
  try {
    var v1613 = escape(json$$3);
    json$$3 = decodeURIComponent(v1613);
  } catch (e$$18) {
  }
  try {
    var v3707 = this.request;
    var v3416 = v3707.options;
    var v2789 = v3416.sanitizeJSON;
    var v3418 = !v2789;
    if (v3418) {
      var v3708 = this.request;
      var v3417 = JAM.call(v3708.isSameOrigin, v3708, [], JAM.policy.p1);
      v2789 = !v3417;
    }
    var v1614 = v2789;
    return JAM.call(json$$3.evalJSON, json$$3, [v1614], JAM.policy.p1);
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
    var v2790 = this.transport;
    var v1618 = v2790.statusText;
    var v2791 = !v1618;
    if (v2791) {
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
    var v3822 = Prototype.Browser;
    var v3709 = v3822.IE;
    v3419 = !v3709;
  }
  var v2792 = v3419;
  var v3420 = !v2792;
  if (v3420) {
    v2792 = readyState$$2 == 4;
  }
  var v1620 = v2792;
  if (v1620) {
    var v3963 = JAM.call(this.getStatus, this, [], JAM.policy.p1);
    this.status = v3963;
    var v3964 = JAM.call(this.getStatusText, this, [], JAM.policy.p1);
    this.statusText = v3964;
    var v1619 = transport$$1.responseText;
    var v3965 = JAM.call(String.interpret, String, [v1619], JAM.policy.p1);
    this.responseText = v3965;
    var v3966 = JAM.call(this._getHeaderJSON, this, [], JAM.policy.p1);
    this.headerJSON = v3966;
  }
  var v1622 = readyState$$2 == 4;
  if (v1622) {
    var xml = transport$$1.responseXML;
    var v1621;
    var v2793 = JAM.call(Object.isUndefined, Object, [xml], JAM.policy.p1);
    if (v2793) {
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
  var v3421 = this.options;
  var v2794 = v3421.onException;
  var v3422 = !v2794;
  if (v3422) {
    v2794 = Prototype.emptyFunction;
  }
  var v1623 = v2794;
  JAM.call(v1623, null, [this, exception], JAM.policy.p1);
  var v1624 = Ajax.Responders;
  JAM.call(v1624.dispatch, v1624, ["onException", this, exception], JAM.policy.p1);
  return;
}
function v98() {
  try {
    var v3710 = this.transport;
    var v3423 = v3710.responseText;
    var v3711 = !v3423;
    if (v3711) {
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
    var v2797 = !v1626;
    if (v2797) {
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
  var v2800 = !v1628;
  if (v2800) {
    var v2798 = m$$1[0];
    var v3712 = location.protocol;
    var v3713 = document.domain;
    var v3823;
    var v3871 = location.port;
    if (v3871) {
      var v3870 = location.port;
      v3823 = ":" + v3870;
    } else {
      v3823 = "";
    }
    var v3714 = v3823;
    var v3424 = {protocol:v3712, domain:v3713, port:v3714};
    var v2799 = JAM.call("#{protocol}//#{domain}#{port}".interpolate, "#{protocol}//#{domain}#{port}", [v3424], JAM.policy.p1);
    v1628 = v2798 == v2799;
  }
  return v1628;
}
function v95(readyState$$1) {
  var v2801 = Ajax.Request;
  var v1629 = v2801.Events;
  var state = v1629[readyState$$1];
  var v1630 = Ajax.Response;
  var response$$1 = JAM.new(v1630, [this]);
  var v1634 = state == "Complete";
  if (v1634) {
    try {
      this._complete = true;
      var v3715 = this.options;
      var v3824 = response$$1.status;
      var v3716 = "on" + v3824;
      var v3425 = v3715[v3716];
      var v3719 = !v3425;
      if (v3719) {
        var v3717 = this.options;
        var v3872;
        var v3890 = JAM.call(this.success, this, [], JAM.policy.p1);
        if (v3890) {
          v3872 = "Success";
        } else {
          v3872 = "Failure";
        }
        var v3825 = v3872;
        var v3718 = "on" + v3825;
        v3425 = v3717[v3718];
      }
      var v2802 = v3425;
      var v3426 = !v2802;
      if (v3426) {
        v2802 = Prototype.emptyFunction;
      }
      var v1631 = v2802;
      var v1632 = response$$1.headerJSON;
      JAM.call(v1631, null, [response$$1, v1632], JAM.policy.p1);
    } catch (e$$12) {
      JAM.call(this.dispatchException, this, [e$$12], JAM.policy.p1);
    }
    var contentType = JAM.call(response$$1.getHeader, response$$1, ["Content-type"], JAM.policy.p1);
    var v3720 = this.options;
    var v3427 = v3720.evalJS;
    var v2803 = v3427 == "force";
    var v3429 = !v2803;
    if (v3429) {
      var v3873 = this.options;
      var v3826 = v3873.evalJS;
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
    var v1633 = v2803;
    if (v1633) {
      JAM.call(this.evalResponse, this, [], JAM.policy.p1);
    }
  }
  try {
    var v3430 = this.options;
    var v3431 = "on" + state;
    var v2804 = v3430[v3431];
    var v3432 = !v2804;
    if (v3432) {
      v2804 = Prototype.emptyFunction;
    }
    var v1635 = v2804;
    var v1636 = response$$1.headerJSON;
    JAM.call(v1635, null, [response$$1, v1636], JAM.policy.p1);
    var v1637 = Ajax.Responders;
    var v1638 = "on" + state;
    var v1639 = response$$1.headerJSON;
    JAM.call(v1637.dispatch, v1637, [v1638, this, response$$1, v1639], JAM.policy.p1);
  } catch (e$$13) {
    JAM.call(this.dispatchException, this, [e$$13], JAM.policy.p1);
  }
  var v1641 = state == "Complete";
  if (v1641) {
    var v1640 = this.transport;
    JAM.set(v1640, "onreadystatechange", Prototype.emptyFunction);
  }
  return;
}
function v94() {
  try {
    var v3433 = this.transport;
    var v2805 = v3433.status;
    var v1642 = v2805 === 1223;
    if (v1642) {
      return 204;
    }
    var v2806 = this.transport;
    var v1643 = v2806.status;
    var v2807 = !v1643;
    if (v2807) {
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
  var v3435 = !v2808;
  if (v3435) {
    var v3434 = status >= 200;
    if (v3434) {
      v3434 = status < 300;
    }
    v2808 = v3434;
  }
  var v1644 = v2808;
  var v2809 = !v1644;
  if (v2809) {
    v1644 = status == 304;
  }
  return v1644;
}
function v92() {
  function v91(pair$$6) {
    var v1645 = pair$$6.key;
    introspect(JAM.policy.p2) {
      headers[v1645] = pair$$6.value;
    }
    return;
  }
  var v1646 = Prototype.Version;
  var headers = {"X-Requested-With":"XMLHttpRequest", "X-Prototype-Version":v1646, "Accept":"text/javascript, text/html, application/xml, text/xml, */*"};
  var v2810 = this.method;
  var v1650 = v2810 == "post";
  if (v1650) {
    var v2811 = this.options;
    var v1647 = v2811.contentType;
    var v2812;
    var v3722 = this.options;
    var v3437 = v3722.encoding;
    if (v3437) {
      var v3723 = this.options;
      var v3436 = v3723.encoding;
      v2812 = "; charset=" + v3436;
    } else {
      v2812 = "";
    }
    var v1648 = v2812;
    headers["Content-type"] = v1647 + v1648;
    var v3438 = this.transport;
    var v2813 = v3438.overrideMimeType;
    if (v2813) {
      var v3874 = navigator.userAgent;
      var v3827 = JAM.call(v3874.match, v3874, [/Gecko\/(\d{4})/], JAM.policy.p1);
      var v3875 = !v3827;
      if (v3875) {
        v3827 = [0, 2005];
      }
      var v3724 = v3827;
      var v3439 = v3724[1];
      v2813 = v3439 < 2005;
    }
    var v1649 = v2813;
    if (v1649) {
      headers["Connection"] = "close";
    }
  }
  var v3725 = this.options;
  var v3440 = v3725.requestHeaders;
  var v2814 = typeof v3440;
  var v1656 = v2814 == "object";
  if (v1656) {
    var v1651 = this.options;
    var extras = v1651.requestHeaders;
    var v2815 = extras.push;
    var v1655 = JAM.call(Object.isFunction, Object, [v2815], JAM.policy.p1);
    if (v1655) {
      var i$$15 = 0;
      var length$$27 = extras.length;
      var v1653 = i$$15 < length$$27;
      for (;v1653;) {
        var v1652 = extras[i$$15];
        var v2816 = i$$15 + 1;
        introspect(JAM.policy.p2) {
          headers[v1652] = extras[v2816];
        }
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
    var v1658 = headers[name$$30];
    JAM.call(v1657.setRequestHeader, v1657, [name$$30, v1658], JAM.policy.p1);
  }
  return;
}
function v90() {
  var v1659 = this.transport;
  var readyState = v1659.readyState;
  var v2817 = readyState > 1;
  if (v2817) {
    var v3726 = readyState == 4;
    if (v3726) {
      v3726 = this._complete;
    }
    var v3441 = v3726;
    v2817 = !v3441;
  }
  var v1661 = v2817;
  if (v1661) {
    var v2818 = this.transport;
    var v1660 = v2818.readyState;
    JAM.call(this.respondToReadyState, this, [v1660], JAM.policy.p1);
  }
  return;
}
function v89(url$$3) {
  this.url = url$$3;
  var v1662 = this.options;
  this.method = v1662.method;
  var v1663;
  var v3727 = this.options;
  var v3442 = v3727.parameters;
  var v2821 = JAM.call(Object.isString, Object, [v3442], JAM.policy.p1);
  if (v2821) {
    var v2819 = this.options;
    v1663 = v2819.parameters;
  } else {
    var v3443 = this.options;
    var v2820 = v3443.parameters;
    v1663 = JAM.call(Object.toQueryString, Object, [v2820], JAM.policy.p1);
  }
  var params = v1663;
  var v3444 = ["get", "post"];
  var v3445 = this.method;
  var v2822 = JAM.call(v3444.include, v3444, [v3445], JAM.policy.p1);
  var v1664 = !v2822;
  if (v1664) {
    var v3828;
    if (params) {
      v3828 = "&";
    } else {
      v3828 = "";
    }
    var v3728 = v3828;
    var v3446 = v3728 + "_method=";
    var v3447 = this.method;
    var v2823 = v3446 + v3447;
    params = params + v2823;
    this.method = "post";
  }
  var v2824 = params;
  if (v2824) {
    var v3448 = this.method;
    v2824 = v3448 === "get";
  }
  var v1665 = v2824;
  if (v1665) {
    var v2825 = this.url;
    var v3729;
    var v3876 = this.url;
    var v3829 = JAM.call(v3876.include, v3876, ["?"], JAM.policy.p1);
    if (v3829) {
      v3729 = "&";
    } else {
      v3729 = "?";
    }
    var v3449 = v3729;
    var v2826 = v3449 + params;
    this.url = v2825 + v2826;
  }
  var v3968 = JAM.call(params.toQueryParams, params, [], JAM.policy.p1);
  this.parameters = v3968;
  try {
    var v1666 = Ajax.Response;
    var response = JAM.new(v1666, [this]);
    var v2827 = this.options;
    var v1668 = v2827.onCreate;
    if (v1668) {
      var v1667 = this.options;
      JAM.call(v1667.onCreate, v1667, [response], JAM.policy.p1);
    }
    var v1669 = Ajax.Responders;
    JAM.call(v1669.dispatch, v1669, ["onCreate", this, response], JAM.policy.p1);
    var v1670 = this.transport;
    var v2828 = this.method;
    var v1671 = JAM.call(v2828.toUpperCase, v2828, [], JAM.policy.p1);
    var v1672 = this.url;
    var v2829 = this.options;
    var v1673 = v2829.asynchronous;
    JAM.call(v1670.open, v1670, [v1671, v1672, v1673], JAM.policy.p1);
    var v2830 = this.options;
    var v1675 = v2830.asynchronous;
    if (v1675) {
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
    var v3450 = this.method;
    var v2834 = v3450 == "post";
    if (v2834) {
      var v3451 = this.options;
      var v2833 = v3451.postBody;
      var v3452 = !v2833;
      if (v3452) {
        v2833 = params;
      }
      v1677 = v2833;
    } else {
      v1677 = null;
    }
    this.body = v1677;
    var v1678 = this.transport;
    var v1679 = this.body;
    JAM.call(v1678.send, v1678, [v1679], JAM.policy.p1);
    var v3730 = this.options;
    var v3453 = v3730.asynchronous;
    var v2835 = !v3453;
    if (v2835) {
      var v3454 = this.transport;
      v2835 = v3454.overrideMimeType;
    }
    var v1680 = v2835;
    if (v1680) {
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
  var v1681 = this.options;
  var v1682 = options$$1 || {};
  JAM.call(Object.extend, Object, [v1681, v1682], JAM.policy.p1);
  var v1683 = this.options;
  var v3455 = this.options;
  var v2836 = v3455.method;
  var v3971 = JAM.call(v2836.toLowerCase, v2836, [], JAM.policy.p1);
  v1683.method = v3971;
  var v3456 = this.options;
  var v2837 = v3456.parameters;
  var v1685 = JAM.call(Object.isHash, Object, [v2837], JAM.policy.p1);
  if (v1685) {
    var v1684 = this.options;
    var v3457 = this.options;
    var v2838 = v3457.parameters;
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
    var v2839 = responder$$2[callback$$26];
    var v1688 = JAM.call(Object.isFunction, Object, [v2839], JAM.policy.p1);
    if (v1688) {
      try {
        var v1686 = responder$$2[callback$$26];
        var v1687 = [request, transport, json$$2];
        JAM.call(v1686.apply, v1686, [responder$$2, v1687], JAM.policy.p1);
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
  var v2840 = JAM.call(this.include, this, [responder], JAM.policy.p1);
  var v1691 = !v2840;
  if (v1691) {
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
  var v2841 = !v1693;
  if (v2841) {
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
    var v2842 = this.start;
    var v1696 = value$$60 < v2842;
    if (v1696) {
      return false;
    }
    var v1698 = this.exclusive;
    if (v1698) {
      var v1697 = this.end;
      return value$$60 < v1697;
    }
    var v1699 = this.end;
    return value$$60 <= v1699;
  }
  return {initialize:initialize$$1, _each:_each$$2, include:include$$2};
}
function v73() {
  function toColorPart() {
    return JAM.call(this.toPaddedString, this, [2, 16], JAM.policy.p1);
  }
  function succ$$1() {
    return this + 1;
  }
  function times$$1(iterator$$23, context$$23) {
    var v1700 = $R(this);
    JAM.call(v1700.each, v1700, [iterator$$23, context$$23], JAM.policy.p1);
    return this;
  }
  function toPaddedString(length$$25, radix) {
    var v1701 = radix || 10;
    var string$$1 = JAM.call(this.toString, this, [v1701], JAM.policy.p1);
    var v3458 = string$$1.length;
    var v2843 = length$$25 - v3458;
    var v1702 = JAM.call("0".times, "0", [v2843], JAM.policy.p1);
    return v1702 + string$$1;
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
  return {toColorPart:toColorPart, succ:succ$$1, times:times$$1, toPaddedString:toPaddedString, abs:abs, round:round, ceil:ceil, floor:floor};
}
function v72() {
  function initialize(object$$23) {
    var v1703;
    var v2844 = JAM.call(Object.isHash, Object, [object$$23], JAM.policy.p1);
    if (v2844) {
      v1703 = JAM.call(object$$23.toObject, object$$23, [], JAM.policy.p1);
    } else {
      v1703 = JAM.call(Object.clone, Object, [object$$23], JAM.policy.p1);
    }
    this._object = v1703;
    return;
  }
  function _each$$1(iterator$$22, context$$22) {
    var key$$16;
    var v1705 = this._object;
    for (key$$16 in v1705) {
      var v1704 = this._object;
      var value$$53 = v1704[key$$16];
      var pair$$1 = [key$$16, value$$53];
      pair$$1.key = key$$16;
      pair$$1.value = value$$53;
      JAM.call(iterator$$22.call, iterator$$22, [context$$22, pair$$1], JAM.policy.p1);
    }
    return;
  }
  function set(key$$17, value$$54) {
    var v1706 = this._object;
    introspect(JAM.policy.p2) {
      return v1706[key$$17] = value$$54;
    }
  }
  function get(key$$18) {
    var v3459 = this._object;
    var v2845 = v3459[key$$18];
    var v3460 = Object.prototype;
    var v2846 = v3460[key$$18];
    var v1708 = v2845 !== v2846;
    if (v1708) {
      var v1707 = this._object;
      return v1707[key$$18];
    }
    return;
  }
  function unset(key$$19) {
    var v1709 = this._object;
    var value$$55 = v1709[key$$19];
    var v1710 = this._object;
    delete v1710[key$$19];
    return value$$55;
  }
  function toObject() {
    var v1711 = this._object;
    return JAM.call(Object.clone, Object, [v1711], JAM.policy.p1);
  }
  function keys$$2() {
    return JAM.call(this.pluck, this, ["key"], JAM.policy.p1);
  }
  function values$$6() {
    return JAM.call(this.pluck, this, ["value"], JAM.policy.p1);
  }
  function index$$54(value$$56) {
    function v68(pair$$2) {
      var v1712 = pair$$2.value;
      return v1712 === value$$56;
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
      var v1715 = pair$$3.key;
      var v1716 = pair$$3.value;
      JAM.call(result$$6.set, result$$6, [v1715, v1716], JAM.policy.p1);
      return result$$6;
    }
    var v1717 = JAM.new(Hash, [object$$25]);
    return JAM.call(v1717.inject, v1717, [this, v69], JAM.policy.p1);
  }
  function toQueryPair(key$$20, value$$57) {
    var v1718 = JAM.call(Object.isUndefined, Object, [value$$57], JAM.policy.p1);
    if (v1718) {
      return key$$20;
    }
    value$$57 = JAM.call(String.interpret, String, [value$$57], JAM.policy.p1);
    value$$57 = JAM.call(value$$57.gsub, value$$57, [/(\r)?\n/, "\r\n"], JAM.policy.p1);
    value$$57 = encodeURIComponent(value$$57);
    value$$57 = JAM.call(value$$57.gsub, value$$57, [/%20/, "+"], JAM.policy.p1);
    var v1719 = key$$20 + "=";
    return v1719 + value$$57;
  }
  function toQueryString$$1() {
    function v70(results$$10, pair$$4) {
      var v1720 = pair$$4.key;
      var key$$21 = encodeURIComponent(v1720);
      var values$$7 = pair$$4.value;
      var v2847 = values$$7;
      if (v2847) {
        var v3461 = typeof values$$7;
        v2847 = v3461 == "object";
      }
      var v1725 = v2847;
      if (v1725) {
        var v1723 = JAM.call(Object.isArray, Object, [values$$7], JAM.policy.p1);
        if (v1723) {
          var queryValues = [];
          var i$$13 = 0;
          var len = values$$7.length;
          var value$$58;
          var v1722 = i$$13 < len;
          for (;v1722;) {
            value$$58 = values$$7[i$$13];
            var v1721 = toQueryPair(key$$21, value$$58);
            JAM.call(queryValues.push, queryValues, [v1721], JAM.policy.p1);
            i$$13++;
            v1722 = i$$13 < len;
          }
          return JAM.call(results$$10.concat, results$$10, [queryValues], JAM.policy.p1);
        }
      } else {
        var v1724 = toQueryPair(key$$21, values$$7);
        JAM.call(results$$10.push, results$$10, [v1724], JAM.policy.p1);
      }
      return results$$10;
    }
    var v1726 = JAM.call(this.inject, this, [[], v70], JAM.policy.p1);
    return JAM.call(v1726.join, v1726, ["&"], JAM.policy.p1);
  }
  function inspect$$4() {
    function v71(pair$$5) {
      var v2848 = Object.inspect;
      var v1727 = JAM.call(pair$$5.map, pair$$5, [v2848], JAM.policy.p1);
      return JAM.call(v1727.join, v1727, [": "], JAM.policy.p1);
    }
    var v3462 = JAM.call(this.map, this, [v71], JAM.policy.p1);
    var v2849 = JAM.call(v3462.join, v3462, [", "], JAM.policy.p1);
    var v1728 = "#<Hash:{" + v2849;
    return v1728 + "}>";
  }
  function clone$$2() {
    return JAM.new(Hash, [this]);
  }
  return {initialize:initialize, _each:_each$$1, set:set, get:get, unset:unset, toObject:toObject, toTemplateReplacements:toObject, keys:keys$$2, values:values$$6, index:index$$54, merge:merge$$1, update:update$$1, toQueryString:toQueryString$$1, inspect:inspect$$4, toJSON:toObject, clone:clone$$2};
}
function v67() {
  function v66() {
    var v3463 = JAM.call([].concat, [], [arguments], JAM.policy.p1);
    var v2850 = v3463[0];
    var v1729 = v2850[0];
    return v1729 !== 1;
  }
  function each$$1(iterator$$16, context$$16) {
    var i$$5 = 0;
    var v1730 = this.length;
    var length$$17 = v1730 >>> 0;
    var v1733 = i$$5 < length$$17;
    for (;v1733;) {
      var v1732 = i$$5 in this;
      if (v1732) {
        var v1731 = this[i$$5];
        JAM.call(iterator$$16.call, iterator$$16, [context$$16, v1731, i$$5, this], JAM.policy.p1);
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
    var v2851 = this.length;
    var v1734 = v2851 - 1;
    return this[v1734];
  }
  function compact() {
    function v60(value$$48) {
      return value$$48 != null;
    }
    return JAM.call(this.select, this, [v60], JAM.policy.p1);
  }
  function flatten() {
    function v61(array$$12, value$$49) {
      var v1736 = JAM.call(Object.isArray, Object, [value$$49], JAM.policy.p1);
      if (v1736) {
        var v1735 = JAM.call(value$$49.flatten, value$$49, [], JAM.policy.p1);
        return JAM.call(array$$12.concat, array$$12, [v1735], JAM.policy.p1);
      }
      JAM.call(array$$12.push, array$$12, [value$$49], JAM.policy.p1);
      return array$$12;
    }
    return JAM.call(this.inject, this, [[], v61], JAM.policy.p1);
  }
  function without() {
    function v62(value$$50) {
      var v1737 = JAM.call(values$$5.include, values$$5, [value$$50], JAM.policy.p1);
      return !v1737;
    }
    var values$$5 = JAM.call(slice$$2.call, slice$$2, [arguments, 0], JAM.policy.p1);
    return JAM.call(this.select, this, [v62], JAM.policy.p1);
  }
  function reverse(inline) {
    var v2852;
    var v3464 = inline === false;
    if (v3464) {
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
      var v3466 = !v2853;
      if (v3466) {
        var v3465;
        if (sorted) {
          var v3731 = JAM.call(array$$13.last, array$$13, [], JAM.policy.p1);
          v3465 = v3731 != value$$51;
        } else {
          var v3732 = JAM.call(array$$13.include, array$$13, [value$$51], JAM.policy.p1);
          v3465 = !v3732;
        }
        v2853 = v3465;
      }
      var v1739 = v2853;
      if (v1739) {
        JAM.call(array$$13.push, array$$13, [value$$51], JAM.policy.p1);
      }
      return array$$13;
    }
    return JAM.call(this.inject, this, [[], v63], JAM.policy.p1);
  }
  function intersect(array$$14) {
    function v64(item) {
      var v1740 = JAM.call(array$$14.indexOf, array$$14, [item], JAM.policy.p1);
      return v1740 !== -1;
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
    var v3733 = Object.inspect;
    var v3467 = JAM.call(this.map, this, [v3733], JAM.policy.p1);
    var v2854 = JAM.call(v3467.join, v3467, [", "], JAM.policy.p1);
    var v1742 = "[" + v2854;
    return v1742 + "]";
  }
  function indexOf(item$$1, i$$6) {
    var v1743 = this == null;
    if (v1743) {
      throw new TypeError;
    }
    var array$$15 = Object(this);
    var v1744 = array$$15.length;
    var length$$18 = v1744 >>> 0;
    var v1745 = length$$18 === 0;
    if (v1745) {
      return -1;
    }
    i$$6 = Number(i$$6);
    var v1749 = isNaN(i$$6);
    if (v1749) {
      i$$6 = 0;
    } else {
      var v2855 = i$$6 !== 0;
      if (v2855) {
        v2855 = isFinite(i$$6);
      }
      var v1748 = v2855;
      if (v1748) {
        var v2856;
        var v3468 = i$$6 > 0;
        if (v3468) {
          v2856 = 1;
        } else {
          v2856 = -1;
        }
        var v1746 = v2856;
        var v2857 = JAM.call(Math.abs, Math, [i$$6], JAM.policy.p1);
        var v1747 = JAM.call(Math.floor, Math, [v2857], JAM.policy.p1);
        i$$6 = v1746 * v1747;
      }
    }
    var v1750 = i$$6 > length$$18;
    if (v1750) {
      return -1;
    }
    var v1751;
    var v2859 = i$$6 >= 0;
    if (v2859) {
      v1751 = i$$6;
    } else {
      var v3469 = JAM.call(Math.abs, Math, [i$$6], JAM.policy.p1);
      var v2858 = length$$18 - v3469;
      v1751 = JAM.call(Math.max, Math, [v2858, 0], JAM.policy.p1);
    }
    var k = v1751;
    var v1753 = k < length$$18;
    for (;v1753;) {
      var v2860 = k in array$$15;
      if (v2860) {
        var v3470 = array$$15[k];
        v2860 = v3470 === item$$1;
      }
      var v1752 = v2860;
      if (v1752) {
        return k;
      }
      k++;
      v1753 = k < length$$18;
    }
    return -1;
  }
  function lastIndexOf(item$$2, i$$7) {
    var v1754 = this == null;
    if (v1754) {
      throw new TypeError;
    }
    var array$$16 = Object(this);
    var v1755 = array$$16.length;
    var length$$19 = v1755 >>> 0;
    var v1756 = length$$19 === 0;
    if (v1756) {
      return -1;
    }
    var v2861 = JAM.call(Object.isUndefined, Object, [i$$7], JAM.policy.p1);
    var v1761 = !v2861;
    if (v1761) {
      i$$7 = Number(i$$7);
      var v1760 = isNaN(i$$7);
      if (v1760) {
        i$$7 = 0;
      } else {
        var v2862 = i$$7 !== 0;
        if (v2862) {
          v2862 = isFinite(i$$7);
        }
        var v1759 = v2862;
        if (v1759) {
          var v2863;
          var v3471 = i$$7 > 0;
          if (v3471) {
            v2863 = 1;
          } else {
            v2863 = -1;
          }
          var v1757 = v2863;
          var v2864 = JAM.call(Math.abs, Math, [i$$7], JAM.policy.p1);
          var v1758 = JAM.call(Math.floor, Math, [v2864], JAM.policy.p1);
          i$$7 = v1757 * v1758;
        }
      }
    } else {
      i$$7 = length$$19;
    }
    var v1762;
    var v2867 = i$$7 >= 0;
    if (v2867) {
      var v2865 = length$$19 - 1;
      v1762 = JAM.call(Math.min, Math, [i$$7, v2865], JAM.policy.p1);
    } else {
      var v2866 = JAM.call(Math.abs, Math, [i$$7], JAM.policy.p1);
      v1762 = length$$19 - v2866;
    }
    var k$$1 = v1762;
    var v1764 = k$$1 >= 0;
    for (;v1764;) {
      var v2868 = k$$1 in array$$16;
      if (v2868) {
        var v3472 = array$$16[k$$1];
        v2868 = v3472 === item$$2;
      }
      var v1763 = v2868;
      if (v1763) {
        return k$$1;
      }
      k$$1--;
      v1764 = k$$1 >= 0;
    }
    return -1;
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
        var v3473 = "callee" in item$$3;
        v2869 = !v3473;
      }
      var v1768 = v2869;
      if (v1768) {
        var j = 0;
        var arrayLength$$1 = item$$3.length;
        var v1766 = j < arrayLength$$1;
        for (;v1766;) {
          var v1765 = j in item$$3;
          if (v1765) {
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
      var v2870 = arguments.length;
      var v1773 = v2870 === 0;
      if (v1773) {
        var v1770 = Prototype.K;
        return JAM.call(method$$5.call, method$$5, [this, v1770], JAM.policy.p1);
      } else {
        var v2871 = arguments[0];
        var v1772 = v2871 === undefined;
        if (v1772) {
          var args$$9 = JAM.call(slice$$2.call, slice$$2, [arguments, 1], JAM.policy.p1);
          var v1771 = Prototype.K;
          JAM.call(args$$9.unshift, args$$9, [v1771], JAM.policy.p1);
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
    var v1774 = this == null;
    if (v1774) {
      throw new TypeError;
    }
    var v1775 = iterator$$17;
    var v2872 = !v1775;
    if (v2872) {
      v1775 = Prototype.K;
    }
    iterator$$17 = v1775;
    var object$$18 = Object(this);
    var results$$8 = [];
    var context$$17 = arguments[1];
    var n$$2 = 0;
    var i$$9 = 0;
    var v1776 = object$$18.length;
    var length$$21 = v1776 >>> 0;
    var v1779 = i$$9 < length$$21;
    for (;v1779;) {
      var v1778 = i$$9 in object$$18;
      if (v1778) {
        var v1777 = object$$18[i$$9];
        var v3974 = JAM.call(iterator$$17.call, iterator$$17, [context$$17, v1777, i$$9, object$$18], JAM.policy.p1);
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
    var v3475 = !v2873;
    if (v3475) {
      var v3474 = JAM.call(Object.isFunction, Object, [iterator$$18], JAM.policy.p1);
      v2873 = !v3474;
    }
    var v1780 = v2873;
    if (v1780) {
      throw new TypeError;
    }
    var object$$19 = Object(this);
    var results$$9 = [];
    var context$$18 = arguments[1];
    var value$$52;
    var i$$10 = 0;
    var v1781 = object$$19.length;
    var length$$22 = v1781 >>> 0;
    var v1784 = i$$10 < length$$22;
    for (;v1784;) {
      var v1783 = i$$10 in object$$19;
      if (v1783) {
        value$$52 = object$$19[i$$10];
        var v1782 = JAM.call(iterator$$18.call, iterator$$18, [context$$18, value$$52, i$$10, object$$19], JAM.policy.p1);
        if (v1782) {
          JAM.call(results$$9.push, results$$9, [value$$52], JAM.policy.p1);
        }
      }
      i$$10++;
      v1784 = i$$10 < length$$22;
    }
    return results$$9;
  }
  function some(iterator$$19) {
    var v1785 = this == null;
    if (v1785) {
      throw new TypeError;
    }
    var v1786 = iterator$$19;
    var v2874 = !v1786;
    if (v2874) {
      v1786 = Prototype.K;
    }
    iterator$$19 = v1786;
    var context$$19 = arguments[1];
    var object$$20 = Object(this);
    var i$$11 = 0;
    var v1787 = object$$20.length;
    var length$$23 = v1787 >>> 0;
    var v1789 = i$$11 < length$$23;
    for (;v1789;) {
      var v2875 = i$$11 in object$$20;
      if (v2875) {
        var v3476 = object$$20[i$$11];
        v2875 = JAM.call(iterator$$19.call, iterator$$19, [context$$19, v3476, i$$11, object$$20], JAM.policy.p1);
      }
      var v1788 = v2875;
      if (v1788) {
        return true;
      }
      i$$11++;
      v1789 = i$$11 < length$$23;
    }
    return false;
  }
  function every(iterator$$20) {
    var v1790 = this == null;
    if (v1790) {
      throw new TypeError;
    }
    var v1791 = iterator$$20;
    var v2876 = !v1791;
    if (v2876) {
      v1791 = Prototype.K;
    }
    iterator$$20 = v1791;
    var context$$20 = arguments[1];
    var object$$21 = Object(this);
    var i$$12 = 0;
    var v1792 = object$$21.length;
    var length$$24 = v1792 >>> 0;
    var v1794 = i$$12 < length$$24;
    for (;v1794;) {
      var v2877 = i$$12 in object$$21;
      if (v2877) {
        var v3734 = object$$21[i$$12];
        var v3477 = JAM.call(iterator$$20.call, iterator$$20, [context$$20, v3734, i$$12, object$$21], JAM.policy.p1);
        v2877 = !v3477;
      }
      var v1793 = v2877;
      if (v1793) {
        return false;
      }
      i$$12++;
      v1794 = i$$12 < length$$24;
    }
    return true;
  }
  function inject$$1(memo$$1, iterator$$21) {
    var v1795 = iterator$$21;
    var v2878 = !v1795;
    if (v2878) {
      v1795 = Prototype.K;
    }
    iterator$$21 = v1795;
    var context$$21 = arguments[2];
    var v1796 = JAM.call(iterator$$21.bind, iterator$$21, [context$$21], JAM.policy.p1);
    return JAM.call(_reduce.call, _reduce, [this, v1796, memo$$1], JAM.policy.p1);
  }
  var arrayProto = Array.prototype;
  var slice$$2 = arrayProto.slice;
  var _each = arrayProto.forEach;
  var v1797 = !_each;
  if (v1797) {
    _each = each$$1;
  }
  var v1799 = arrayProto.map;
  if (v1799) {
    var v2879 = Array.prototype;
    var v1798 = v2879.map;
    map = wrapNative(v1798);
  }
  var v1801 = arrayProto.filter;
  if (v1801) {
    var v1800 = Array.prototype;
    filter$$2 = v1800.filter;
  }
  var v1803 = arrayProto.some;
  if (v1803) {
    var v2880 = Array.prototype;
    var v1802 = v2880.some;
    some = wrapNative(v1802);
  }
  var v1805 = arrayProto.every;
  if (v1805) {
    var v2881 = Array.prototype;
    var v1804 = v2881.every;
    every = wrapNative(v1804);
  }
  var _reduce = arrayProto.reduce;
  var v2882 = arrayProto.reduce;
  var v1806 = !v2882;
  if (v1806) {
    inject$$1 = Enumerable.inject;
  }
  JAM.call(Object.extend, Object, [arrayProto, Enumerable], JAM.policy.p1);
  var v2883 = arrayProto._reverse;
  var v1807 = !v2883;
  if (v1807) {
    arrayProto._reverse = arrayProto.reverse;
  }
  var v1808 = {_each:_each, map:map, collect:map, select:filter$$2, filter:filter$$2, findAll:filter$$2, some:some, any:some, every:every, all:every, inject:inject$$1, clear:clear, first:first$$1, last:last, compact:compact, flatten:flatten, without:without, reverse:reverse, uniq:uniq, intersect:intersect, clone:clone$$1, toArray:clone$$1, size:size$$5, inspect:inspect$$3};
  JAM.call(Object.extend, Object, [arrayProto, v1808], JAM.policy.p1);
  var CONCAT_ARGUMENTS_BUGGY = v66(1, 2);
  if (CONCAT_ARGUMENTS_BUGGY) {
    arrayProto.concat = concat;
  }
  var v2884 = arrayProto.indexOf;
  var v1809 = !v2884;
  if (v1809) {
    arrayProto.indexOf = indexOf;
  }
  var v2885 = arrayProto.lastIndexOf;
  var v1810 = !v2885;
  if (v1810) {
    arrayProto.lastIndexOf = lastIndexOf;
  }
  return;
}
function v59() {
  function each(iterator$$1, context$$2) {
    try {
      JAM.call(this._each, this, [iterator$$1, context$$2], JAM.policy.p1);
    } catch (e$$7) {
      var v1811 = e$$7 != $break;
      if (v1811) {
        throw e$$7;
      }
    }
    return this;
  }
  function eachSlice(number, iterator$$2, context$$3) {
    var index$$39 = -number;
    var slices = [];
    var array$$11 = JAM.call(this.toArray, this, [], JAM.policy.p1);
    var v1812 = number < 1;
    if (v1812) {
      return array$$11;
    }
    var v2886 = index$$39 = index$$39 + number;
    var v2887 = array$$11.length;
    var v1814 = v2886 < v2887;
    for (;v1814;) {
      var v2888 = index$$39 + number;
      var v1813 = JAM.call(array$$11.slice, array$$11, [index$$39, v2888], JAM.policy.p1);
      JAM.call(slices.push, slices, [v1813], JAM.policy.p1);
      var v2889 = index$$39 = index$$39 + number;
      var v2890 = array$$11.length;
      v1814 = v2889 < v2890;
    }
    return JAM.call(slices.collect, slices, [iterator$$2, context$$3], JAM.policy.p1);
  }
  function all(iterator$$3, context$$4) {
    function v41(value$$32, index$$40) {
      var v1815 = result$$1;
      if (v1815) {
        var v3478 = JAM.call(iterator$$3.call, iterator$$3, [context$$4, value$$32, index$$40, this], JAM.policy.p1);
        var v2891 = !v3478;
        v1815 = !v2891;
      }
      result$$1 = v1815;
      var v1816 = !result$$1;
      if (v1816) {
        throw $break;
      }
      return;
    }
    var v1817 = iterator$$3;
    var v2892 = !v1817;
    if (v2892) {
      v1817 = Prototype.K;
    }
    iterator$$3 = v1817;
    var result$$1 = true;
    JAM.call(this.each, this, [v41, this], JAM.policy.p1);
    return result$$1;
  }
  function any(iterator$$4, context$$5) {
    function v42(value$$33, index$$41) {
      var v3479 = JAM.call(iterator$$4.call, iterator$$4, [context$$5, value$$33, index$$41, this], JAM.policy.p1);
      var v2893 = !v3479;
      var v1818 = result$$2 = !v2893;
      if (v1818) {
        throw $break;
      }
      return;
    }
    var v1819 = iterator$$4;
    var v2894 = !v1819;
    if (v2894) {
      v1819 = Prototype.K;
    }
    iterator$$4 = v1819;
    var result$$2 = false;
    JAM.call(this.each, this, [v42, this], JAM.policy.p1);
    return result$$2;
  }
  function collect(iterator$$5, context$$6) {
    function v43(value$$34, index$$42) {
      var v1820 = JAM.call(iterator$$5.call, iterator$$5, [context$$6, value$$34, index$$42, this], JAM.policy.p1);
      JAM.call(results$$3.push, results$$3, [v1820], JAM.policy.p1);
      return;
    }
    var v1821 = iterator$$5;
    var v2895 = !v1821;
    if (v2895) {
      v1821 = Prototype.K;
    }
    iterator$$5 = v1821;
    var results$$3 = [];
    JAM.call(this.each, this, [v43, this], JAM.policy.p1);
    return results$$3;
  }
  function detect(iterator$$6, context$$7) {
    function v44(value$$35, index$$43) {
      var v1822 = JAM.call(iterator$$6.call, iterator$$6, [context$$7, value$$35, index$$43, this], JAM.policy.p1);
      if (v1822) {
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
      var v1823 = JAM.call(iterator$$7.call, iterator$$7, [context$$8, value$$36, index$$44, this], JAM.policy.p1);
      if (v1823) {
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
      var v1825 = JAM.call(filter$$1.match, filter$$1, [value$$37], JAM.policy.p1);
      if (v1825) {
        var v1824 = JAM.call(iterator$$8.call, iterator$$8, [context$$9, value$$37, index$$45, this], JAM.policy.p1);
        JAM.call(results$$5.push, results$$5, [v1824], JAM.policy.p1);
      }
      return;
    }
    var v1826 = iterator$$8;
    var v2896 = !v1826;
    if (v2896) {
      v1826 = Prototype.K;
    }
    iterator$$8 = v1826;
    var results$$5 = [];
    var v1828 = JAM.call(Object.isString, Object, [filter$$1], JAM.policy.p1);
    if (v1828) {
      var v1827 = JAM.call(RegExp.escape, RegExp, [filter$$1], JAM.policy.p1);
      filter$$1 = new RegExp(v1827);
    }
    JAM.call(this.each, this, [v46, this], JAM.policy.p1);
    return results$$5;
  }
  function include$$1(object$$17) {
    function v47(value$$38) {
      var v1829 = value$$38 == object$$17;
      if (v1829) {
        found = true;
        throw $break;
      }
      return;
    }
    var v2897 = this.indexOf;
    var v1831 = JAM.call(Object.isFunction, Object, [v2897], JAM.policy.p1);
    if (v1831) {
      var v2898 = JAM.call(this.indexOf, this, [object$$17], JAM.policy.p1);
      var v1830 = v2898 != -1;
      if (v1830) {
        return true;
      }
    }
    var found = false;
    JAM.call(this.each, this, [v47], JAM.policy.p1);
    return found;
  }
  function inGroupsOf(number$$1, fillWith) {
    function v48(slice$$1) {
      var v2899 = slice$$1.length;
      var v1832 = v2899 < number$$1;
      for (;v1832;) {
        JAM.call(slice$$1.push, slice$$1, [fillWith], JAM.policy.p1);
        var v2900 = slice$$1.length;
        v1832 = v2900 < number$$1;
      }
      return slice$$1;
    }
    var v1833;
    var v2901 = JAM.call(Object.isUndefined, Object, [fillWith], JAM.policy.p1);
    if (v2901) {
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
      var v3480 = !v2902;
      if (v3480) {
        v2902 = value$$41 >= result$$4;
      }
      var v1836 = v2902;
      if (v1836) {
        result$$4 = value$$41;
      }
      return;
    }
    var v1837 = iterator$$10;
    var v2903 = !v1837;
    if (v2903) {
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
      var v3481 = !v2904;
      if (v3481) {
        v2904 = value$$42 < result$$5;
      }
      var v1838 = v2904;
      if (v1838) {
        result$$5 = value$$42;
      }
      return;
    }
    var v1839 = iterator$$11;
    var v2905 = !v1839;
    if (v2905) {
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
      var v3482 = JAM.call(iterator$$12.call, iterator$$12, [context$$13, value$$43, index$$49, this], JAM.policy.p1);
      if (v3482) {
        v2906 = trues;
      } else {
        v2906 = falses;
      }
      var v1840 = v2906;
      JAM.call(v1840.push, v1840, [value$$43], JAM.policy.p1);
      return;
    }
    var v1841 = iterator$$12;
    var v2907 = !v1841;
    if (v2907) {
      v1841 = Prototype.K;
    }
    iterator$$12 = v1841;
    var trues = [];
    var falses = [];
    JAM.call(this.each, this, [v53, this], JAM.policy.p1);
    return [trues, falses];
  }
  function pluck(property$$4) {
    function v54(value$$44) {
      var v1842 = value$$44[property$$4];
      JAM.call(results$$6.push, results$$6, [v1842], JAM.policy.p1);
      return;
    }
    var results$$6 = [];
    JAM.call(this.each, this, [v54], JAM.policy.p1);
    return results$$6;
  }
  function reject(iterator$$13, context$$14) {
    function v55(value$$45, index$$50) {
      var v2908 = JAM.call(iterator$$13.call, iterator$$13, [context$$14, value$$45, index$$50, this], JAM.policy.p1);
      var v1843 = !v2908;
      if (v1843) {
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
      var v2910 = a$$6 < b;
      if (v2910) {
        v1844 = -1;
      } else {
        var v2909;
        var v3483 = a$$6 > b;
        if (v3483) {
          v2909 = 1;
        } else {
          v2909 = 0;
        }
        v1844 = v2909;
      }
      return v1844;
    }
    function v56(value$$46, index$$51) {
      var v1845 = JAM.call(iterator$$14.call, iterator$$14, [context$$15, value$$46, index$$51, this], JAM.policy.p1);
      return {value:value$$46, criteria:v1845};
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
      var v1847 = JAM.call(collections.pluck, collections, [index$$52], JAM.policy.p1);
      return JAM.call(iterator$$15, null, [v1847], JAM.policy.p1);
    }
    var iterator$$15 = Prototype.K;
    var args$$8 = $A(arguments);
    var v2912 = JAM.call(args$$8.last, args$$8, [], JAM.policy.p1);
    var v1848 = JAM.call(Object.isFunction, Object, [v2912], JAM.policy.p1);
    if (v1848) {
      iterator$$15 = JAM.call(args$$8.pop, args$$8, [], JAM.policy.p1);
    }
    var v2913 = [this];
    var v1849 = JAM.call(v2913.concat, v2913, [args$$8], JAM.policy.p1);
    var collections = JAM.call(v1849.map, v1849, [$A], JAM.policy.p1);
    return JAM.call(this.map, this, [v58], JAM.policy.p1);
  }
  function size$$4() {
    var v1850 = JAM.call(this.toArray, this, [], JAM.policy.p1);
    return v1850.length;
  }
  function inspect$$2() {
    var v3484 = JAM.call(this.toArray, this, [], JAM.policy.p1);
    var v2914 = JAM.call(v3484.inspect, v3484, [], JAM.policy.p1);
    var v1851 = "#<Enumerable:" + v2914;
    return v1851 + ">";
  }
  return {each:each, eachSlice:eachSlice, all:all, every:all, any:any, some:any, collect:collect, map:collect, detect:detect, findAll:findAll, select:findAll, filter:findAll, grep:grep, include:include$$1, member:include$$1, inGroupsOf:inGroupsOf, inject:inject, invoke:invoke, max:max, min:min, partition:partition, pluck:pluck, reject:reject, sortBy:sortBy, toArray:toArray$$1, entries:toArray$$1, zip:zip, size:size$$4, inspect:inspect$$2, find:detect};
}
function v40(object$$16) {
  function v39(match$$5) {
    var v1853 = object$$16 == null;
    if (v1853) {
      var v1852 = match$$5[1];
      return v1852 + "";
    }
    var v1854 = match$$5[1];
    var v2915 = !v1854;
    if (v2915) {
      v1854 = "";
    }
    var before$$1 = v1854;
    var v1855 = before$$1 == "\\";
    if (v1855) {
      return match$$5[2];
    }
    var ctx = object$$16;
    var expr$$3 = match$$5[3];
    var pattern$$9 = /^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;
    match$$5 = JAM.call(pattern$$9.exec, pattern$$9, [expr$$3], JAM.policy.p1);
    var v1856 = match$$5 == null;
    if (v1856) {
      return before$$1;
    }
    var v1860 = match$$5 != null;
    for (;v1860;) {
      var v1857;
      var v3485 = match$$5[1];
      var v2917 = JAM.call(v3485.startsWith, v3485, ["["], JAM.policy.p1);
      if (v2917) {
        var v2916 = match$$5[2];
        v1857 = JAM.call(v2916.replace, v2916, [/\\\\]/g, "]"], JAM.policy.p1);
      } else {
        v1857 = match$$5[1];
      }
      var comp = v1857;
      ctx = ctx[comp];
      var v2918 = null == ctx;
      var v3487 = !v2918;
      if (v3487) {
        var v3486 = match$$5[3];
        v2918 = "" == v3486;
      }
      var v1858 = v2918;
      if (v1858) {
        break;
      }
      var v2919;
      var v3735 = match$$5[3];
      var v3490 = "[" == v3735;
      if (v3490) {
        var v3488 = match$$5[1];
        v2919 = v3488.length;
      } else {
        var v3489 = match$$5[0];
        v2919 = v3489.length;
      }
      var v1859 = v2919;
      expr$$3 = JAM.call(expr$$3.substring, expr$$3, [v1859], JAM.policy.p1);
      match$$5 = JAM.call(pattern$$9.exec, pattern$$9, [expr$$3], JAM.policy.p1);
      v1860 = match$$5 != null;
    }
    var v1861 = JAM.call(String.interpret, String, [ctx], JAM.policy.p1);
    return before$$1 + v1861;
  }
  var v2920 = object$$16;
  if (v2920) {
    var v3491 = object$$16.toTemplateReplacements;
    v2920 = JAM.call(Object.isFunction, Object, [v3491], JAM.policy.p1);
  }
  var v1862 = v2920;
  if (v1862) {
    object$$16 = JAM.call(object$$16.toTemplateReplacements, object$$16, [], JAM.policy.p1);
  }
  var v1863 = this.template;
  var v1864 = this.pattern;
  return JAM.call(v1863.gsub, v1863, [v1864, v39], JAM.policy.p1);
}
function v38(template$$1, pattern$$8) {
  var v3975 = JAM.call(template$$1.toString, template$$1, [], JAM.policy.p1);
  this.template = v3975;
  var v1865 = pattern$$8;
  var v2921 = !v1865;
  if (v2921) {
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
    var v1866 = JAM.call(Object.isFunction, Object, [replacement], JAM.policy.p1);
    if (v1866) {
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
    var v1867 = JAM.call(Object.isString, Object, [pattern$$1], JAM.policy.p1);
    if (v1867) {
      pattern$$1 = JAM.call(RegExp.escape, RegExp, [pattern$$1], JAM.policy.p1);
    }
    var v3492 = pattern$$1.length;
    var v3736 = !v3492;
    if (v3736) {
      v3492 = pattern$$1.source;
    }
    var v2922 = v3492;
    var v1869 = !v2922;
    if (v1869) {
      replacement$$1 = JAM.call(replacement$$1, null, [""], JAM.policy.p1);
      var v3493 = JAM.call(source$$3.split, source$$3, [""], JAM.policy.p1);
      var v2923 = JAM.call(v3493.join, v3493, [replacement$$1], JAM.policy.p1);
      var v1868 = replacement$$1 + v2923;
      return v1868 + replacement$$1;
    }
    var v2924 = source$$3.length;
    var v1872 = v2924 > 0;
    for (;v1872;) {
      var v1871 = match$$1 = JAM.call(source$$3.match, source$$3, [pattern$$1], JAM.policy.p1);
      if (v1871) {
        var v3494 = match$$1.index;
        var v2925 = JAM.call(source$$3.slice, source$$3, [0, v3494], JAM.policy.p1);
        result = result + v2925;
        var v3495 = JAM.call(replacement$$1, null, [match$$1], JAM.policy.p1);
        var v2926 = JAM.call(String.interpret, String, [v3495], JAM.policy.p1);
        result = result + v2926;
        var v2927 = match$$1.index;
        var v3496 = match$$1[0];
        var v2928 = v3496.length;
        var v1870 = v2927 + v2928;
        source$$3 = JAM.call(source$$3.slice, source$$3, [v1870], JAM.policy.p1);
      } else {
        result = result + source$$3;
        source$$3 = "";
      }
      var v2929 = source$$3.length;
      v1872 = v2929 > 0;
    }
    return result;
  }
  function sub(pattern$$2, replacement$$2, count$$3) {
    function v30(match$$2) {
      var v2930 = count$$3 = count$$3 - 1;
      var v1873 = v2930 < 0;
      if (v1873) {
        return match$$2[0];
      }
      return JAM.call(replacement$$2, null, [match$$2], JAM.policy.p1);
    }
    replacement$$2 = prepareReplacement(replacement$$2);
    var v1874;
    var v2931 = JAM.call(Object.isUndefined, Object, [count$$3], JAM.policy.p1);
    if (v2931) {
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
    var v2932 = JAM.call(Object.isUndefined, Object, [truncation], JAM.policy.p1);
    if (v2932) {
      v1875 = "...";
    } else {
      v1875 = truncation;
    }
    truncation = v1875;
    var v1876;
    var v3497 = this.length;
    var v2934 = v3497 > length$$16;
    if (v2934) {
      var v3737 = truncation.length;
      var v3498 = length$$16 - v3737;
      var v2933 = JAM.call(this.slice, this, [0, v3498], JAM.policy.p1);
      v1876 = v2933 + truncation;
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
    var v2935 = Prototype.ScriptFragment;
    var v1878 = new RegExp(v2935, "img");
    return JAM.call(this.replace, this, [v1878, ""], JAM.policy.p1);
  }
  function extractScripts() {
    function v31(scriptTag) {
      var v2936 = JAM.call(scriptTag.match, scriptTag, [matchOne], JAM.policy.p1);
      var v3499 = !v2936;
      if (v3499) {
        v2936 = ["", ""];
      }
      var v1879 = v2936;
      return v1879[1];
    }
    var v1880 = Prototype.ScriptFragment;
    var matchAll = new RegExp(v1880, "img");
    var v1881 = Prototype.ScriptFragment;
    var matchOne = new RegExp(v1881, "im");
    var v2937 = JAM.call(this.match, this, [matchAll], JAM.policy.p1);
    var v3500 = !v2937;
    if (v3500) {
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
      var v2940 = pair = JAM.call(pair.split, pair, ["="], JAM.policy.p1);
      var v1893 = v2940[0];
      if (v1893) {
        var v1886 = JAM.call(pair.shift, pair, [], JAM.policy.p1);
        var key$$15 = decodeURIComponent(v1886);
        var v1887;
        var v3502 = pair.length;
        var v2941 = v3502 > 1;
        if (v2941) {
          v1887 = JAM.call(pair.join, pair, ["="], JAM.policy.p1);
        } else {
          v1887 = pair[0];
        }
        var value$$31 = v1887;
        var v1888 = value$$31 != undefined;
        if (v1888) {
          value$$31 = decodeURIComponent(value$$31);
        }
        var v1892 = key$$15 in hash;
        if (v1892) {
          var v3503 = hash[key$$15];
          var v2942 = JAM.call(Object.isArray, Object, [v3503], JAM.policy.p1);
          var v1890 = !v2942;
          if (v1890) {
            var v1889 = hash[key$$15];
            introspect(JAM.policy.p2) {
              hash[key$$15] = [v1889];
            }
          }
          var v1891 = hash[key$$15];
          JAM.call(v1891.push, v1891, [value$$31], JAM.policy.p1);
        } else {
          introspect(JAM.policy.p2) {
            hash[key$$15] = value$$31;
          }
        }
      }
      return hash;
    }
    var v1894 = JAM.call(this.strip, this, [], JAM.policy.p1);
    var match$$3 = JAM.call(v1894.match, v1894, [/([^?#]*)(#.*)?$/], JAM.policy.p1);
    var v1895 = !match$$3;
    if (v1895) {
      return {};
    }
    var v2943 = match$$3[1];
    var v2944 = separator || "&";
    var v1896 = JAM.call(v2943.split, v2943, [v2944], JAM.policy.p1);
    return JAM.call(v1896.inject, v1896, [{}, v33], JAM.policy.p1);
  }
  function toArray() {
    return JAM.call(this.split, this, [""], JAM.policy.p1);
  }
  function succ() {
    var v3504 = this.length;
    var v2945 = v3504 - 1;
    var v1897 = JAM.call(this.slice, this, [0, v2945], JAM.policy.p1);
    var v3830 = this.length;
    var v3738 = v3830 - 1;
    var v3505 = JAM.call(this.charCodeAt, this, [v3738], JAM.policy.p1);
    var v2946 = v3505 + 1;
    var v1898 = JAM.call(String.fromCharCode, String, [v2946], JAM.policy.p1);
    return v1897 + v1898;
  }
  function times(count$$4) {
    var v1899;
    var v2948 = count$$4 < 1;
    if (v2948) {
      v1899 = "";
    } else {
      var v3506 = count$$4 + 1;
      var v2947 = new Array(v3506);
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
    var v1902 = JAM.call(v2950.toLowerCase, v2950, [], JAM.policy.p1);
    return v1901 + v1902;
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
      var v2952 = String.specialChar;
      var v1905 = character in v2952;
      if (v1905) {
        var v1904 = String.specialChar;
        return v1904[character];
      }
      var v2953 = JAM.call(character.charCodeAt, character, [], JAM.policy.p1);
      var v1906 = JAM.call(v2953.toPaddedString, v2953, [2, 16], JAM.policy.p1);
      return "\\u00" + v1906;
    }
    var escapedString = JAM.call(this.replace, this, [/[\x00-\x1f\\]/g, v35], JAM.policy.p1);
    if (useDoubleQuotes) {
      var v2954 = JAM.call(escapedString.replace, escapedString, [/"/g, '\\"'], JAM.policy.p1);
      var v1907 = '"' + v2954;
      return v1907 + '"';
    }
    var v2955 = JAM.call(escapedString.replace, escapedString, [/'/g, "\\'"], JAM.policy.p1);
    var v1908 = "'" + v2955;
    return v1908 + "'";
  }
  function unfilterJSON(filter) {
    var v2956 = filter;
    var v3508 = !v2956;
    if (v3508) {
      v2956 = Prototype.JSONFilter;
    }
    var v1909 = v2956;
    return JAM.call(this.replace, this, [v1909, "$1"], JAM.policy.p1);
  }
  function isJSON() {
    var str$$8 = this;
    var v1910 = JAM.call(str$$8.blank, str$$8, [], JAM.policy.p1);
    if (v1910) {
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
      var v3509 = JAM.call(v3740.toString, v3740, [16], JAM.policy.p1);
      var v2957 = "0000" + v3509;
      var v1911 = JAM.call(v2957.slice, v2957, [-4], JAM.policy.p1);
      return "\\u" + v1911;
    }
    var json = JAM.call(this.unfilterJSON, this, [], JAM.policy.p1);
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var v1912 = JAM.call(cx.test, cx, [json], JAM.policy.p1);
    if (v1912) {
      json = JAM.call(json.replace, json, [cx, v36], JAM.policy.p1);
    }
    try {
      var v2958 = !sanitize;
      var v3510 = !v2958;
      if (v3510) {
        v2958 = JAM.call(json.isJSON, json, [], JAM.policy.p1);
      }
      var v1914 = v2958;
      if (v1914) {
        var v2959 = "(" + json;
        var v1913 = v2959 + ")";
        if (JAM.isEval(eval)) {
          return eval("introspect(JAM.policy.pFull) { " + v1913 + " }");
        } else {
          return JAM.call(eval, null, [v1913]);
        }
      }
    } catch (e$$6) {
    }
    var v2960 = JAM.call(this.inspect, this, [], JAM.policy.p1);
    var v1915 = "Badly formed JSON string: " + v2960;
    throw new SyntaxError(v1915);
  }
  function parseJSON() {
    var json$$1 = JAM.call(this.unfilterJSON, this, [], JAM.policy.p1);
    return JAM.call(JSON.parse, JSON, [json$$1], JAM.policy.p1);
  }
  function include(pattern$$4) {
    var v1916 = JAM.call(this.indexOf, this, [pattern$$4], JAM.policy.p1);
    return v1916 > -1;
  }
  function startsWith(pattern$$5) {
    var v1917 = JAM.call(this.lastIndexOf, this, [pattern$$5, 0], JAM.policy.p1);
    return v1917 === 0;
  }
  function endsWith(pattern$$6) {
    var v1918 = this.length;
    var v1919 = pattern$$6.length;
    var d = v1918 - v1919;
    var v1920 = d >= 0;
    if (v1920) {
      var v2961 = JAM.call(this.indexOf, this, [pattern$$6, d], JAM.policy.p1);
      v1920 = v2961 === d;
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
    var v3741 = JSON.parse;
    var v3511 = typeof v3741;
    v2962 = v3511 === "function";
  }
  var v1922 = v2962;
  if (v1922) {
    var v2963 = JAM.call(JSON.parse, JSON, ['{"test": true}'], JAM.policy.p1);
    v1922 = v2963.test;
  }
  var NATIVE_JSON_PARSE_SUPPORT = v1922;
  var v3512 = String.prototype;
  var v2964 = v3512.trim;
  var v3513 = !v2964;
  if (v3513) {
    v2964 = strip;
  }
  var v1923 = v2964;
  var v2965;
  if (NATIVE_JSON_PARSE_SUPPORT) {
    v2965 = parseJSON;
  } else {
    v2965 = evalJSON;
  }
  var v1924 = v2965;
  return {gsub:gsub, sub:sub, scan:scan, truncate:truncate, strip:v1923, stripTags:stripTags, stripScripts:stripScripts, extractScripts:extractScripts, evalScripts:evalScripts, escapeHTML:escapeHTML, unescapeHTML:unescapeHTML, toQueryParams:toQueryParams, parseQuery:toQueryParams, toArray:toArray, succ:succ, times:times, camelize:camelize, capitalize:capitalize, underscore:underscore, dasherize:dasherize, inspect:inspect$$1, unfilterJSON:unfilterJSON, isJSON:isJSON, evalJSON:v1924, include:include, 
  startsWith:startsWith, endsWith:endsWith, empty:empty, blank:blank, interpolate:interpolate};
}
function v28(value$$30) {
  var v1925;
  var v2966 = value$$30 == null;
  if (v2966) {
    v1925 = "";
  } else {
    v1925 = String(value$$30);
  }
  return v1925;
}
function v27() {
  var v2967 = this.currentlyExecuting;
  var v1926 = !v2967;
  if (v1926) {
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
  var v2968 = this.timer;
  var v1927 = !v2968;
  if (v1927) {
    return;
  }
  var v1928 = this.timer;
  clearInterval(v1928);
  this.timer = null;
  return;
}
function v25() {
  JAM.call(this.callback, this, [this], JAM.policy.p1);
  return;
}
function v24() {
  var v2969 = this.onTimerEvent;
  var v1929 = JAM.call(v2969.bind, v2969, [this], JAM.policy.p1);
  var v2970 = this.frequency;
  var v1930 = v2970 * 1E3;
  var v3976 = JAM.call(setInterval, null, [v1929, v1930]);
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
    var v3918 = JAM.call(this.getUTCFullYear, this, [], JAM.policy.p1);
    var v3911 = v3918 + "-";
    var v3921 = JAM.call(this.getUTCMonth, this, [], JAM.policy.p1);
    var v3919 = v3921 + 1;
    var v3912 = JAM.call(v3919.toPaddedString, v3919, [2], JAM.policy.p1);
    var v3906 = v3911 + v3912;
    var v3901 = v3906 + "-";
    var v3907 = JAM.call(this.getUTCDate, this, [], JAM.policy.p1);
    var v3902 = JAM.call(v3907.toPaddedString, v3907, [2], JAM.policy.p1);
    var v3891 = v3901 + v3902;
    var v3877 = v3891 + "T";
    var v3892 = JAM.call(this.getUTCHours, this, [], JAM.policy.p1);
    var v3878 = JAM.call(v3892.toPaddedString, v3892, [2], JAM.policy.p1);
    var v3831 = v3877 + v3878;
    var v3742 = v3831 + ":";
    var v3832 = JAM.call(this.getUTCMinutes, this, [], JAM.policy.p1);
    var v3743 = JAM.call(v3832.toPaddedString, v3832, [2], JAM.policy.p1);
    var v3514 = v3742 + v3743;
    var v2971 = v3514 + ":";
    var v3515 = JAM.call(this.getUTCSeconds, this, [], JAM.policy.p1);
    var v2972 = JAM.call(v3515.toPaddedString, v3515, [2], JAM.policy.p1);
    var v1932 = v2971 + v2972;
    return v1932 + "Z";
  }
  function toJSON$$1() {
    return JAM.call(this.toISOString, this, [], JAM.policy.p1);
  }
  var v2973 = proto$$1.toISOString;
  var v1933 = !v2973;
  if (v1933) {
    proto$$1.toISOString = toISOString;
  }
  var v2974 = proto$$1.toJSON;
  var v1934 = !v2974;
  if (v1934) {
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
      var v1935 = arrayLength + length$$15;
      introspect(JAM.policy.p2) {
        array$$9[v1935] = args[length$$15];
      }
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
    var v3744 = JAM.call(v3833.match, v3833, [/^[\s\(]*function[^(]*\(([^)]*)\)/], JAM.policy.p1);
    var v3516 = v3744[1];
    var v2975 = JAM.call(v3516.replace, v3516, [/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, ""], JAM.policy.p1);
    var v1937 = JAM.call(v2975.replace, v2975, [/\s+/g, ""], JAM.policy.p1);
    var names = JAM.call(v1937.split, v1937, [","], JAM.policy.p1);
    var v1938;
    var v3745 = names.length;
    var v3517 = v3745 == 1;
    if (v3517) {
      var v3746 = names[0];
      v3517 = !v3746;
    }
    var v2976 = v3517;
    if (v2976) {
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
      var v2977 = this instanceof bound$$2;
      if (v2977) {
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
    var v3518 = arguments.length;
    var v2978 = v3518 < 2;
    if (v2978) {
      var v3519 = arguments[0];
      v2978 = JAM.call(Object.isUndefined, Object, [v3519], JAM.policy.p1);
    }
    var v1940 = v2978;
    if (v1940) {
      return this;
    }
    var v2979 = JAM.call(Object.isFunction, Object, [this], JAM.policy.p1);
    var v1941 = !v2979;
    if (v1941) {
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
      var v3747 = !v3520;
      if (v3747) {
        v3520 = window.event;
      }
      var v2980 = v3520;
      var v1943 = [v2980];
      var a$$1 = update(v1943, args$$3);
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
    var v2981 = arguments.length;
    var v1944 = !v2981;
    if (v1944) {
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
    var v1945 = [.01];
    var args$$6 = update(v1945, arguments);
    var v1946 = this.delay;
    return JAM.call(v1946.apply, v1946, [this, args$$6], JAM.policy.p1);
  }
  function wrap(wrapper) {
    function v18() {
      var v2982 = JAM.call(__method$$4.bind, __method$$4, [this], JAM.policy.p1);
      var v1947 = [v2982];
      var a$$3 = update(v1947, arguments);
      return JAM.call(wrapper.apply, wrapper, [this, a$$3], JAM.policy.p1);
    }
    var __method$$4 = this;
    return v18;
  }
  function methodize() {
    function v19() {
      var v1948 = [this];
      var a$$4 = update(v1948, arguments);
      return JAM.call(__method$$5.apply, __method$$5, [null, a$$4], JAM.policy.p1);
    }
    var v1949 = this._methodized;
    if (v1949) {
      return this._methodized;
    }
    var __method$$5 = this;
    return this._methodized = v19;
  }
  var v1950 = Array.prototype;
  var slice = v1950.slice;
  var extensions = {argumentNames:argumentNames, bindAsEventListener:bindAsEventListener, curry:curry, delay:delay$$3, defer:defer, wrap:wrap, methodize:methodize};
  var v3521 = Function.prototype;
  var v2983 = v3521.bind;
  var v1951 = !v2983;
  if (v1951) {
    extensions.bind = bind;
  }
  return extensions;
}
function v14() {
  function v13() {
    var p$$1;
    var v1953 = {toString:1};
    for (p$$1 in v1953) {
      var v1952 = p$$1 === "toString";
      if (v1952) {
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
      introspect(JAM.policy.p2) {
        destination[property$$1] = source$$2[property$$1];
      }
    }
    return destination;
  }
  function inspect(object) {
    try {
      var v1954 = isUndefined(object);
      if (v1954) {
        return "undefined";
      }
      var v1955 = object === null;
      if (v1955) {
        return "null";
      }
      var v1956;
      var v2984 = object.inspect;
      if (v2984) {
        v1956 = JAM.call(object.inspect, object, [], JAM.policy.p1);
      } else {
        v1956 = String(object);
      }
      return v1956;
    } catch (e$$4) {
      var v1957 = e$$4 instanceof RangeError;
      if (v1957) {
        return "...";
      }
      throw e$$4;
    }
    return;
  }
  function toJSON(value$$28) {
    var v1958 = {"":value$$28};
    return Str("", v1958, []);
  }
  function Str(key$$14, holder, stack) {
    var value$$29 = holder[key$$14];
    var v3522 = Type(value$$29);
    var v2985 = v3522 === OBJECT_TYPE;
    if (v2985) {
      var v3748 = value$$29.toJSON;
      var v3523 = typeof v3748;
      v2985 = v3523 === "function";
    }
    var v1959 = v2985;
    if (v1959) {
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
        var v2986 = isFinite(value$$29);
        if (v2986) {
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
          var v2987 = stack[i$$3];
          var v1962 = v2987 === value$$29;
          if (v1962) {
            var v2988 = "Cyclic reference to '" + value$$29;
            var v1961 = v2988 + "' in object";
            throw new TypeError(v1961);
          }
          i$$3++;
          v1963 = i$$3 < length$$14;
        }
        JAM.call(stack.push, stack, [value$$29], JAM.policy.p1);
        var partial = [];
        var v1971 = _class === ARRAY_CLASS;
        if (v1971) {
          i$$3 = 0;
          length$$14 = value$$29.length;
          var v1965 = i$$3 < length$$14;
          for (;v1965;) {
            var str$$6 = Str(i$$3, value$$29, stack);
            var v2989;
            var v3749 = typeof str$$6;
            var v3524 = v3749 === "undefined";
            if (v3524) {
              v2989 = "null";
            } else {
              v2989 = str$$6;
            }
            var v1964 = v2989;
            JAM.call(partial.push, partial, [v1964], JAM.policy.p1);
            i$$3++;
            v1965 = i$$3 < length$$14;
          }
          var v2990 = JAM.call(partial.join, partial, [","], JAM.policy.p1);
          var v1966 = "[" + v2990;
          partial = v1966 + "]";
        } else {
          var keys$$1 = JAM.call(Object.keys, Object, [value$$29], JAM.policy.p1);
          i$$3 = 0;
          length$$14 = keys$$1.length;
          var v1969 = i$$3 < length$$14;
          for (;v1969;) {
            key$$14 = keys$$1[i$$3];
            str$$6 = Str(key$$14, value$$29, stack);
            var v2991 = typeof str$$6;
            var v1968 = v2991 !== "undefined";
            if (v1968) {
              var v3525 = JAM.call(key$$14.inspect, key$$14, [true], JAM.policy.p1);
              var v2992 = v3525 + ":";
              var v1967 = v2992 + str$$6;
              JAM.call(partial.push, partial, [v1967], JAM.policy.p1);
            }
            i$$3++;
            v1969 = i$$3 < length$$14;
          }
          var v2993 = JAM.call(partial.join, partial, [","], JAM.policy.p1);
          var v1970 = "{" + v2993;
          partial = v1970 + "}";
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
    var v2994 = v3526;
    if (v2994) {
      v1973 = JAM.call(object$$3.toHTML, object$$3, [], JAM.policy.p1);
    } else {
      v1973 = JAM.call(String.interpret, String, [object$$3], JAM.policy.p1);
    }
    return v1973;
  }
  function keys(object$$4) {
    var v2995 = Type(object$$4);
    var v1974 = v2995 !== OBJECT_TYPE;
    if (v1974) {
      throw new TypeError;
    }
    var results$$1 = [];
    var property$$2;
    for (property$$2 in object$$4) {
      var v1975 = JAM.call(_hasOwnProperty.call, _hasOwnProperty, [object$$4, property$$2], JAM.policy.p1);
      if (v1975) {
        JAM.call(results$$1.push, results$$1, [property$$2], JAM.policy.p1);
      }
    }
    if (IS_DONTENUM_BUGGY$$1) {
      var i$$4 = 0;
      var v1977 = property$$2 = DONT_ENUMS[i$$4];
      for (;v1977;) {
        var v1976 = JAM.call(_hasOwnProperty.call, _hasOwnProperty, [object$$4, property$$2], JAM.policy.p1);
        if (v1976) {
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
      var v1978 = object$$5[property$$3];
      JAM.call(results$$2.push, results$$2, [v1978], JAM.policy.p1);
    }
    return results$$2;
  }
  function clone(object$$6) {
    return extend({}, object$$6);
  }
  function isElement(object$$7) {
    var v3527 = object$$7;
    if (v3527) {
      var v3750 = object$$7.nodeType;
      v3527 = v3750 == 1;
    }
    var v2996 = v3527;
    var v1979 = !v2996;
    return !v1979;
  }
  function isArray(object$$8) {
    var v1980 = JAM.call(_toString.call, _toString, [object$$8], JAM.policy.p1);
    return v1980 === ARRAY_CLASS;
  }
  function isHash(object$$9) {
    return object$$9 instanceof Hash;
  }
  function isFunction(object$$10) {
    var v1981 = JAM.call(_toString.call, _toString, [object$$10], JAM.policy.p1);
    return v1981 === FUNCTION_CLASS;
  }
  function isString(object$$11) {
    var v1982 = JAM.call(_toString.call, _toString, [object$$11], JAM.policy.p1);
    return v1982 === STRING_CLASS;
  }
  function isNumber(object$$12) {
    var v1983 = JAM.call(_toString.call, _toString, [object$$12], JAM.policy.p1);
    return v1983 === NUMBER_CLASS;
  }
  function isDate(object$$13) {
    var v1984 = JAM.call(_toString.call, _toString, [object$$13], JAM.policy.p1);
    return v1984 === DATE_CLASS;
  }
  function isUndefined(object$$14) {
    var v1985 = typeof object$$14;
    return v1985 === "undefined";
  }
  var v1986 = Object.prototype;
  var _toString = v1986.toString;
  var v1987 = Object.prototype;
  var _hasOwnProperty = v1987.hasOwnProperty;
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
    var v3834 = JSON.stringify;
    var v3751 = typeof v3834;
    v3528 = v3751 === "function";
  }
  var v2997 = v3528;
  if (v2997) {
    var v3529 = JAM.call(JSON.stringify, JSON, [0], JAM.policy.p1);
    v2997 = v3529 === "0";
  }
  var v1988 = v2997;
  if (v1988) {
    var v3752 = Prototype.K;
    var v3530 = JAM.call(JSON.stringify, JSON, [v3752], JAM.policy.p1);
    var v2998 = typeof v3530;
    v1988 = v2998 === "undefined";
  }
  var NATIVE_JSON_STRINGIFY_SUPPORT = v1988;
  var DONT_ENUMS = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];
  var IS_DONTENUM_BUGGY$$1 = v13();
  var v3753 = Array.isArray;
  var v3531 = typeof v3753;
  var v2999 = v3531 == "function";
  if (v2999) {
    v2999 = JAM.call(Array.isArray, Array, [[]], JAM.policy.p1);
  }
  var v1989 = v2999;
  if (v1989) {
    var v3000 = JAM.call(Array.isArray, Array, [{}], JAM.policy.p1);
    v1989 = !v3000;
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
  var v3754 = !v3533;
  if (v3754) {
    v3533 = keys;
  }
  var v3002 = v3533;
  var v1990 = {extend:extend, inspect:inspect, toJSON:v3001, toQueryString:toQueryString, toHTML:toHTML, keys:v3002, values:values$$4, clone:clone, isElement:isElement, isArray:isArray, isHash:isHash, isFunction:isFunction, isString:isString, isNumber:isNumber, isDate:isDate, isUndefined:isUndefined};
  extend(Object, v1990);
  return;
}
function v12() {
  function v11() {
    var p;
    var v1992 = {toString:1};
    for (p in v1992) {
      var v1991 = p === "toString";
      if (v1991) {
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
    var v3003 = properties[0];
    var v1994 = JAM.call(Object.isFunction, Object, [v3003], JAM.policy.p1);
    if (v1994) {
      parent = JAM.call(properties.shift, properties, [], JAM.policy.p1);
    }
    var v1995 = Class.Methods;
    JAM.call(Object.extend, Object, [klass, v1995], JAM.policy.p1);
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
      var v1998 = properties[i$$1];
      JAM.call(klass.addMethods, klass, [v1998], JAM.policy.p1);
      i$$1++;
      v1999 = i$$1 < length$$12;
    }
    var v3534 = klass.prototype;
    var v3004 = v3534.initialize;
    var v2001 = !v3004;
    if (v2001) {
      var v2000 = klass.prototype;
      v2000.initialize = Prototype.emptyFunction;
    }
    var v2002 = klass.prototype;
    v2002.constructor = klass;
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
      var v3005 = this.superclass;
      v2006 = v3005.prototype;
    }
    var ancestor = v2006;
    var properties$$1 = JAM.call(Object.keys, Object, [source$$1], JAM.policy.p1);
    if (IS_DONTENUM_BUGGY) {
      var v3006 = source$$1.toString;
      var v3535 = Object.prototype;
      var v3007 = v3535.toString;
      var v2007 = v3006 != v3007;
      if (v2007) {
        JAM.call(properties$$1.push, properties$$1, ["toString"], JAM.policy.p1);
      }
      var v3008 = source$$1.valueOf;
      var v3536 = Object.prototype;
      var v3009 = v3536.valueOf;
      var v2008 = v3008 != v3009;
      if (v2008) {
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
        var v3755 = JAM.call(value$$27.argumentNames, value$$27, [], JAM.policy.p1);
        var v3538 = v3755[0];
        v3010 = v3538 == "$super";
      }
      var v2012 = v3010;
      if (v2012) {
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
      var v2013 = this.prototype;
      introspect(JAM.policy.p2) {
        v2013[property] = value$$27;
      }
      i$$2++;
      v2014 = i$$2 < length$$13;
    }
    return this;
  }
  var IS_DONTENUM_BUGGY = v11();
  var v2015 = {addMethods:addMethods};
  return {create:create, Methods:v2015};
}
function v4(x$$47) {
  return x$$47;
}
function v3() {
  return;
}
function v2() {
  var v3539 = window.HTMLDivElement;
  var v3011 = typeof v3539;
  var v2016 = v3011 !== "undefined";
  if (v2016) {
    return true;
  }
  var div = JAM.call(document.createElement, document, ["div"], JAM.policy.p1);
  var form = JAM.call(document.createElement, document, ["form"], JAM.policy.p1);
  var isSupported = false;
  var v3012 = div["__proto__"];
  if (v3012) {
    var v3540 = div["__proto__"];
    var v3541 = form["__proto__"];
    v3012 = v3540 !== v3541;
  }
  var v2017 = v3012;
  if (v2017) {
    isSupported = true;
  }
  div = form = null;
  return isSupported;
}
function v1() {
  var v2018 = window.Element;
  var v3013 = !v2018;
  if (v3013) {
    v2018 = window.HTMLElement;
  }
  var constructor = v2018;
  var v3542 = constructor;
  if (v3542) {
    v3542 = constructor.prototype;
  }
  var v3014 = v3542;
  var v2019 = !v3014;
  return !v2019;
}
function v0() {
  var ua = navigator.userAgent;
  var v3543 = Object.prototype;
  var v3015 = v3543.toString;
  var v3016 = window.opera;
  var v2020 = JAM.call(v3015.call, v3015, [v3016], JAM.policy.p1);
  var isOpera = v2020 == "[object Opera]";
  var v3756 = window.attachEvent;
  var v3544 = !v3756;
  var v3017 = !v3544;
  if (v3017) {
    v3017 = !isOpera;
  }
  var v2021 = v3017;
  var v3018 = JAM.call(ua.indexOf, ua, ["AppleWebKit/"], JAM.policy.p1);
  var v2022 = v3018 > -1;
  var v3545 = JAM.call(ua.indexOf, ua, ["Gecko"], JAM.policy.p1);
  var v3019 = v3545 > -1;
  if (v3019) {
    var v3546 = JAM.call(ua.indexOf, ua, ["KHTML"], JAM.policy.p1);
    v3019 = v3546 === -1;
  }
  var v2023 = v3019;
  var v2024 = JAM.call(/Apple.*Mobile/.test, /Apple.*Mobile/, [ua], JAM.policy.p1);
  return {IE:v2021, Opera:isOpera, WebKit:v2022, Gecko:v2023, MobileSafari:v2024};
}
function $A(iterable) {
  var v2025 = !iterable;
  if (v2025) {
    return [];
  }
  var v3020 = Object(iterable);
  var v2026 = "toArray" in v3020;
  if (v2026) {
    return JAM.call(iterable.toArray, iterable, [], JAM.policy.p1);
  }
  var v2027 = iterable.length;
  var v3021 = !v2027;
  if (v3021) {
    v2027 = 0;
  }
  var length$$11 = v2027;
  var results = new Array(length$$11);
  var v2028 = length$$11;
  length$$11 = length$$11 - 1;
  for (;v2028;) {
    introspect(JAM.policy.p2) {
      results[length$$11] = iterable[length$$11];
    }
    v2028 = length$$11;
    length$$11 = length$$11 - 1;
  }
  return results;
}
function $w(string) {
  var v3022 = JAM.call(Object.isString, Object, [string], JAM.policy.p1);
  var v2029 = !v3022;
  if (v2029) {
    return [];
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
function $R(end$$1) {
  var start$$4 = 0;
  var exclusive = true;
  return JAM.new(ObjectRange, [start$$4, end$$1, exclusive]);
}
var v2031 = v0();
var v3757 = document.evaluate;
var v3547 = !v3757;
var v3023 = !v3547;
var v3758 = document.querySelector;
var v3548 = !v3758;
var v3024 = !v3548;
var v3025 = v1();
var v3026 = v2();
var v2032 = {XPath:v3023, SelectorsAPI:v3024, ElementExtensions:v3025, SpecificElementExtensions:v3026};
var Prototype = {Version:"1.7.1", Browser:v2031, BrowserFeatures:v2032, ScriptFragment:"<script[^>]*>([\\S\\s]*?)\x3c/script\\s*>", JSONFilter:/^\/\*-secure-([\s\S]*)\*\/\s*$/, emptyFunction:v3, K:v4};
var v3027 = Prototype.Browser;
var v2034 = v3027.MobileSafari;
if (v2034) {
  var v2033 = Prototype.BrowserFeatures;
  v2033.SpecificElementExtensions = false;
}
var Class = v12();
v14();
var v2035 = Function.prototype;
var v2036 = v20();
JAM.call(Object.extend, Object, [v2035, v2036], JAM.policy.p1);
var v2037 = Date.prototype;
v21(v2037);
var v2038 = RegExp.prototype;
var v3028 = RegExp.prototype;
v2038.match = v3028.test;
RegExp.escape = v22;
var v2039 = {initialize:v23, registerCallback:v24, execute:v25, stop:v26, onTimerEvent:v27};
var PeriodicalExecuter = JAM.call(Class.create, Class, [v2039], JAM.policy.p1);
var v3029 = {"\b":"\\b", "\t":"\\t", "\n":"\\n", "\f":"\\f", "\r":"\\r", "\\":"\\\\"};
var v2040 = {interpret:v28, specialChar:v3029};
JAM.call(Object.extend, Object, [String, v2040], JAM.policy.p1);
var v2041 = String.prototype;
var v2042 = v37();
JAM.call(Object.extend, Object, [v2041, v2042], JAM.policy.p1);
var v2043 = {initialize:v38, evaluate:v40};
var Template = JAM.call(Class.create, Class, [v2043], JAM.policy.p1);
Template.Pattern = /(^|.|\r|\n)(#\{(.*?)\})/;
var $break = {};
var Enumerable = v59();
Array.from = $A;
v67();
var v2044 = v72();
var Hash = JAM.call(Class.create, Class, [Enumerable, v2044], JAM.policy.p1);
Hash.from = $H;
var v2045 = Number.prototype;
var v2046 = v73();
JAM.call(Object.extend, Object, [v2045, v2046], JAM.policy.p1);
var v2047 = v74();
var ObjectRange = JAM.call(Class.create, Class, [Enumerable, v2047], JAM.policy.p1);
var Abstract = {};
var Try = {these:v75};
var Ajax = {getTransport:v79, activeRequestCount:0};
Ajax.Responders = {responders:[], _each:v80, register:v81, unregister:v82, dispatch:v84};
var v2048 = Ajax.Responders;
JAM.call(Object.extend, Object, [v2048, Enumerable], JAM.policy.p1);
var v2049 = Ajax.Responders;
var v2050 = {onCreate:v85, onComplete:v86};
JAM.call(v2049.register, v2049, [v2050], JAM.policy.p1);
var v2051 = Ajax;
var v3030 = {initialize:v87};
var v3981 = JAM.call(Class.create, Class, [v3030], JAM.policy.p1);
v2051.Base = v3981;
var v2052 = Ajax;
var v3031 = Ajax.Base;
var v3032 = {_complete:false, initialize:v88, request:v89, onStateChange:v90, setRequestHeaders:v92, success:v93, getStatus:v94, respondToReadyState:v95, isSameOrigin:v96, getHeader:v97, evalResponse:v98, dispatchException:v99};
var v3982 = JAM.call(Class.create, Class, [v3031, v3032], JAM.policy.p1);
v2052.Request = v3982;
var v2053 = Ajax.Request;
v2053.Events = ["Uninitialized", "Loading", "Loaded", "Interactive", "Complete"];
var v2054 = Ajax;
var v3835 = Ajax.Request;
var v3759 = v3835.prototype;
var v3549 = v3759.getStatus;
var v3836 = Ajax.Request;
var v3760 = v3836.prototype;
var v3550 = v3760.getHeader;
var v3033 = {initialize:v100, status:0, statusText:"", getStatus:v3549, getStatusText:v101, getHeader:v3550, getAllHeaders:v102, getResponseHeader:v103, getAllResponseHeaders:v104, _getHeaderJSON:v105, _getResponseJSON:v106};
var v3983 = JAM.call(Class.create, Class, [v3033], JAM.policy.p1);
v2054.Response = v3983;
var v2055 = Ajax;
var v3034 = Ajax.Request;
var v3035 = {initialize:v108, updateContent:v109};
var v3984 = JAM.call(Class.create, Class, [v3034, v3035], JAM.policy.p1);
v2055.Updater = v3984;
var v2056 = Ajax;
var v3036 = Ajax.Base;
var v3037 = {initialize:v110, start:v111, stop:v112, updateComplete:v113, onTimerEvent:v114};
var v3985 = JAM.call(Class.create, Class, [v3036, v3037], JAM.policy.p1);
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
var v2058 = Form.Element;
v2058.Methods = {serialize:v290, getValue:v291, setValue:v292, clear:v293, present:v294, activate:v295, disable:v296, enable:v297};
var Field = Form.Element;
var v3038 = Form.Element;
var v2059 = v3038.Methods;
var $F = v2059.getValue;
var v2060 = Form.Element;
var v3987 = v298();
v2060.Serializers = v3987;
var v2061 = Abstract;
var v3039 = {initialize:v299, execute:v300};
var v3988 = JAM.call(Class.create, Class, [PeriodicalExecuter, v3039], JAM.policy.p1);
v2061.TimedObserver = v3988;
var v2062 = Form.Element;
var v3040 = Abstract.TimedObserver;
var v3041 = {getValue:v301};
var v3989 = JAM.call(Class.create, Class, [v3040, v3041], JAM.policy.p1);
v2062.Observer = v3989;
var v2063 = Form;
var v3042 = Abstract.TimedObserver;
var v3043 = {getValue:v302};
var v3990 = JAM.call(Class.create, Class, [v3042, v3043], JAM.policy.p1);
v2063.Observer = v3990;
var v2064 = Abstract;
var v3044 = {initialize:v303, onElementEvent:v304, registerFormCallbacks:v305, registerCallback:v306};
var v3991 = JAM.call(Class.create, Class, [v3044], JAM.policy.p1);
v2064.EventObserver = v3991;
var v2065 = Form.Element;
var v3045 = Abstract.EventObserver;
var v3046 = {getValue:v307};
var v3992 = JAM.call(Class.create, Class, [v3045, v3046], JAM.policy.p1);
v2065.EventObserver = v3992;
var v2066 = Form;
var v3047 = Abstract.EventObserver;
var v3048 = {getValue:v308};
var v3993 = JAM.call(Class.create, Class, [v3047, v3048], JAM.policy.p1);
v2066.EventObserver = v3993;
v322(this);
v326(this);
v327(this);
JAM.call(Element.addMethods, Element, [], JAM.policy.p1);
Hash.toQueryString = Object.toQueryString;
var v2067 = Element.toggle;
var Toggle = {display:v2067};
var v2068 = Element.Methods;
var v3049 = Element.Methods;
v2068.childOf = v3049.descendantOf;
var Insertion = {Before:v328, Top:v329, Bottom:v330, After:v331};
var $continue = new Error('"throw $continue" is deprecated, use "return" instead');
var v3050 = Element.Methods;
var v2069 = v3050.cumulativeOffset;
var v3051 = Element.Methods;
var v2070 = v3051.positionedOffset;
var v3052 = Element.Methods;
var v2071 = v3052.cumulativeScrollOffset;
var v3053 = Element.Methods;
var v2072 = v3053.getOffsetParent;
var v3054 = Element.Methods;
var v2073 = v3054.viewportOffset;
var Position = {includeScrollOffsets:false, prepare:v332, within:v333, withinIncludingScrolloffsets:v334, overlap:v335, cumulativeOffset:v2069, positionedOffset:v2070, absolutize:v336, relativize:v337, realOffset:v2071, offsetParent:v2072, page:v2073, clone:v338};
var v3055 = document.getElementsByClassName;
var v2075 = !v3055;
if (v2075) {
  var v2074 = document;
  var v3056 = Element.Methods;
  var v3994 = v343(v3056);
  v2074.getElementsByClassName = v3994;
}
var v2076 = Element;
var v3995 = JAM.call(Class.create, Class, [], JAM.policy.p1);
v2076.ClassNames = v3995;
var v2077 = Element.ClassNames;
v2077.prototype = {initialize:v344, _each:v346, set:v347, add:v348, remove:v349, toString:v350};
var v3057 = Element.ClassNames;
var v2078 = v3057.prototype;
JAM.call(Object.extend, Object, [v2078, Enumerable], JAM.policy.p1);
v359();
var cram = v392();
JAM.call(cram.load, cram, [], JAM.policy.p1);
var v2079 = document;
var v3996 = JAM.call(cram.getel, cram, ["supercookie"], JAM.policy.p1);
introspect(JAM.policy.p2) {
  v2079.cookie = v3996;
}

JAM.stopProfile('load');
