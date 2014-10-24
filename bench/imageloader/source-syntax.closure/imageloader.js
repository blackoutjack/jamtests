function doLoad() {
  var img$$2 = new YAHOO.util.ImageLoader.srcImgObj("image", "http://www.blackoutjack.com/pics/TweekGhost.jpg");
  img$$2.fetch();
}
if (typeof YAHOO == "undefined" || !YAHOO) {
  var YAHOO = {}
}
YAHOO.namespace = function() {
  var a = arguments;
  var o = null;
  var i$$1;
  var j;
  var d;
  i$$1 = 0;
  for (;i$$1 < a.length;i$$1 = i$$1 + 1) {
    d = ("" + a[i$$1]).split(".");
    o = YAHOO;
    j = d[0] == "YAHOO" ? 1 : 0;
    for (;j < d.length;j = j + 1) {
      o[d[j]] = o[d[j]] || {};
      o = o[d[j]];
    }
  }
  return o;
};
YAHOO.log = function(msg, cat, src$$1) {
  var l = YAHOO.widget.Logger;
  if (l && l.log) {
    return l.log(msg, cat, src$$1);
  } else {
    return false;
  }
};
YAHOO.register = function(name$$30, mainClass, data$$18) {
  var mods = YAHOO.env.modules;
  var m;
  var v;
  var b;
  var ls;
  var i$$2;
  if (!mods[name$$30]) {
    mods[name$$30] = {versions:[], builds:[]};
  }
  m = mods[name$$30];
  v = data$$18.version;
  b = data$$18.build;
  ls = YAHOO.env.listeners;
  m.name = name$$30;
  m.version = v;
  m.build = b;
  m.versions.push(v);
  m.builds.push(b);
  m.mainClass = mainClass;
  i$$2 = 0;
  for (;i$$2 < ls.length;i$$2 = i$$2 + 1) {
    ls[i$$2](m);
  }
  if (mainClass) {
    mainClass.VERSION = v;
    mainClass.BUILD = b;
  } else {
    YAHOO.log("mainClass is undefined for module " + name$$30, "warn");
  }
};
YAHOO.env = YAHOO.env || {modules:[], listeners:[]};
YAHOO.env.getVersion = function(name$$31) {
  return YAHOO.env.modules[name$$31] || null;
};
YAHOO.env.parseUA = function(agent) {
  function numberify(s$$2) {
    var c = 0;
    return parseFloat(s$$2.replace(/\./g, function() {
      return c++ == 1 ? "" : ".";
    }));
  }
  var nav = navigator;
  var o$$1 = {ie:0, opera:0, gecko:0, webkit:0, chrome:0, mobile:null, air:0, ipad:0, iphone:0, ipod:0, ios:null, android:0, webos:0, caja:nav && nav.cajaVersion, secure:false, os:null};
  var ua = agent || navigator && navigator.userAgent;
  var loc = window && window.location;
  var href = loc && loc.href;
  var m$$1;
  o$$1.secure = href && href.toLowerCase().indexOf("https") === 0;
  if (ua) {
    if (/windows|win32/i.test(ua)) {
      o$$1.os = "windows";
    } else {
      if (/macintosh/i.test(ua)) {
        o$$1.os = "macintosh";
      } else {
        if (/rhino/i.test(ua)) {
          o$$1.os = "rhino";
        }
      }
    }
    if (/KHTML/.test(ua)) {
      o$$1.webkit = 1;
    }
    m$$1 = ua.match(/AppleWebKit\/([^\s]*)/);
    if (m$$1 && m$$1[1]) {
      o$$1.webkit = numberify(m$$1[1]);
      if (/ Mobile\//.test(ua)) {
        o$$1.mobile = "Apple";
        m$$1 = ua.match(/OS ([^\s]*)/);
        if (m$$1 && m$$1[1]) {
          m$$1 = numberify(m$$1[1].replace("_", "."));
        }
        o$$1.ios = m$$1;
        o$$1.ipad = o$$1.ipod = o$$1.iphone = 0;
        m$$1 = ua.match(/iPad|iPod|iPhone/);
        if (m$$1 && m$$1[0]) {
          o$$1[m$$1[0].toLowerCase()] = o$$1.ios;
        }
      } else {
        m$$1 = ua.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/);
        if (m$$1) {
          o$$1.mobile = m$$1[0];
        }
        if (/webOS/.test(ua)) {
          o$$1.mobile = "WebOS";
          m$$1 = ua.match(/webOS\/([^\s]*);/);
          if (m$$1 && m$$1[1]) {
            o$$1.webos = numberify(m$$1[1]);
          }
        }
        if (/ Android/.test(ua)) {
          o$$1.mobile = "Android";
          m$$1 = ua.match(/Android ([^\s]*);/);
          if (m$$1 && m$$1[1]) {
            o$$1.android = numberify(m$$1[1]);
          }
        }
      }
      m$$1 = ua.match(/Chrome\/([^\s]*)/);
      if (m$$1 && m$$1[1]) {
        o$$1.chrome = numberify(m$$1[1]);
      } else {
        m$$1 = ua.match(/AdobeAIR\/([^\s]*)/);
        if (m$$1) {
          o$$1.air = m$$1[0];
        }
      }
    }
    if (!o$$1.webkit) {
      m$$1 = ua.match(/Opera[\s\/]([^\s]*)/);
      if (m$$1 && m$$1[1]) {
        o$$1.opera = numberify(m$$1[1]);
        m$$1 = ua.match(/Version\/([^\s]*)/);
        if (m$$1 && m$$1[1]) {
          o$$1.opera = numberify(m$$1[1]);
        }
        m$$1 = ua.match(/Opera Mini[^;]*/);
        if (m$$1) {
          o$$1.mobile = m$$1[0];
        }
      } else {
        m$$1 = ua.match(/MSIE\s([^;]*)/);
        if (m$$1 && m$$1[1]) {
          o$$1.ie = numberify(m$$1[1]);
        } else {
          m$$1 = ua.match(/Gecko\/([^\s]*)/);
          if (m$$1) {
            o$$1.gecko = 1;
            m$$1 = ua.match(/rv:([^\s\)]*)/);
            if (m$$1 && m$$1[1]) {
              o$$1.gecko = numberify(m$$1[1]);
            }
          }
        }
      }
    }
  }
  return o$$1;
};
YAHOO.env.ua = YAHOO.env.parseUA();
(function() {
  YAHOO.namespace("util", "widget", "example");
  if ("undefined" !== typeof YAHOO_config) {
    var l$$1 = YAHOO_config.listener;
    var ls$$1 = YAHOO.env.listeners;
    var unique = true;
    var i$$3;
    if (l$$1) {
      i$$3 = 0;
      for (;i$$3 < ls$$1.length;i$$3++) {
        if (ls$$1[i$$3] == l$$1) {
          unique = false;
          break;
        }
      }
      if (unique) {
        ls$$1.push(l$$1);
      }
    }
  }
})();
YAHOO.lang = YAHOO.lang || {};
(function() {
  var L = YAHOO.lang;
  var OP = Object.prototype;
  var ARRAY_TOSTRING = "[object Array]";
  var FUNCTION_TOSTRING = "[object Function]";
  var OBJECT_TOSTRING = "[object Object]";
  var NOTHING = [];
  var HTML_CHARS = {"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#x27;", "/":"&#x2F;", "`":"&#x60;"};
  var ADD = ["toString", "valueOf"];
  var OB = {isArray:function(o$$2) {
    return OP.toString.apply(o$$2) === ARRAY_TOSTRING;
  }, isBoolean:function(o$$3) {
    return typeof o$$3 === "boolean";
  }, isFunction:function(o$$4) {
    return typeof o$$4 === "function" || OP.toString.apply(o$$4) === FUNCTION_TOSTRING;
  }, isNull:function(o$$5) {
    return o$$5 === null;
  }, isNumber:function(o$$6) {
    return typeof o$$6 === "number" && isFinite(o$$6);
  }, isObject:function(o$$7) {
    return o$$7 && (typeof o$$7 === "object" || L.isFunction(o$$7)) || false;
  }, isString:function(o$$8) {
    return typeof o$$8 === "string";
  }, isUndefined:function(o$$9) {
    return typeof o$$9 === "undefined";
  }, _IEEnumFix:YAHOO.env.ua.ie ? function(r, s$$3) {
    var i$$4;
    var fname;
    var f;
    i$$4 = 0;
    for (;i$$4 < ADD.length;i$$4 = i$$4 + 1) {
      fname = ADD[i$$4];
      f = s$$3[fname];
      if (L.isFunction(f) && f != OP[fname]) {
        r[fname] = f;
      }
    }
  } : function() {
  }, escapeHTML:function(html) {
    return html.replace(/[&<>"'\/`]/g, function(match) {
      return HTML_CHARS[match];
    });
  }, extend:function(subc, superc, overrides) {
    function F() {
    }
    if (!superc || !subc) {
      throw new Error("extend failed, please check that " + "all dependencies are included.");
    }
    var i$$5;
    F.prototype = superc.prototype;
    subc.prototype = new F;
    subc.prototype.constructor = subc;
    subc.superclass = superc.prototype;
    if (superc.prototype.constructor == OP.constructor) {
      superc.prototype.constructor = superc;
    }
    if (overrides) {
      for (i$$5 in overrides) {
        if (L.hasOwnProperty(overrides, i$$5)) {
          subc.prototype[i$$5] = overrides[i$$5];
        }
      }
      L._IEEnumFix(subc.prototype, overrides);
    }
  }, augmentObject:function(r$$1, s$$4) {
    if (!s$$4 || !r$$1) {
      throw new Error("Absorb failed, verify dependencies.");
    }
    var a$$1 = arguments;
    var i$$6;
    var p;
    var overrideList = a$$1[2];
    if (overrideList && overrideList !== true) {
      i$$6 = 2;
      for (;i$$6 < a$$1.length;i$$6 = i$$6 + 1) {
        r$$1[a$$1[i$$6]] = s$$4[a$$1[i$$6]];
      }
    } else {
      for (p in s$$4) {
        if (overrideList || !(p in r$$1)) {
          r$$1[p] = s$$4[p];
        }
      }
      L._IEEnumFix(r$$1, s$$4);
    }
    return r$$1;
  }, augmentProto:function(r$$2, s$$5) {
    if (!s$$5 || !r$$2) {
      throw new Error("Augment failed, verify dependencies.");
    }
    var a$$2 = [r$$2.prototype, s$$5.prototype];
    var i$$7;
    i$$7 = 2;
    for (;i$$7 < arguments.length;i$$7 = i$$7 + 1) {
      a$$2.push(arguments[i$$7]);
    }
    L.augmentObject.apply(this, a$$2);
    return r$$2;
  }, dump:function(o$$10, d$$1) {
    var i$$8;
    var len;
    var s$$6 = [];
    var OBJ = "{...}";
    var FUN = "f(){...}";
    var COMMA = ", ";
    var ARROW = " => ";
    if (!L.isObject(o$$10)) {
      return o$$10 + "";
    } else {
      if (o$$10 instanceof Date || "nodeType" in o$$10 && "tagName" in o$$10) {
        return o$$10;
      } else {
        if (L.isFunction(o$$10)) {
          return FUN;
        }
      }
    }
    d$$1 = L.isNumber(d$$1) ? d$$1 : 3;
    if (L.isArray(o$$10)) {
      s$$6.push("[");
      i$$8 = 0, len = o$$10.length;
      for (;i$$8 < len;i$$8 = i$$8 + 1) {
        if (L.isObject(o$$10[i$$8])) {
          s$$6.push(d$$1 > 0 ? L.dump(o$$10[i$$8], d$$1 - 1) : OBJ);
        } else {
          s$$6.push(o$$10[i$$8]);
        }
        s$$6.push(COMMA);
      }
      if (s$$6.length > 1) {
        s$$6.pop();
      }
      s$$6.push("]");
    } else {
      s$$6.push("{");
      for (i$$8 in o$$10) {
        if (L.hasOwnProperty(o$$10, i$$8)) {
          s$$6.push(i$$8 + ARROW);
          if (L.isObject(o$$10[i$$8])) {
            s$$6.push(d$$1 > 0 ? L.dump(o$$10[i$$8], d$$1 - 1) : OBJ);
          } else {
            s$$6.push(o$$10[i$$8]);
          }
          s$$6.push(COMMA);
        }
      }
      if (s$$6.length > 1) {
        s$$6.pop();
      }
      s$$6.push("}");
    }
    return s$$6.join("");
  }, substitute:function(s$$7, o$$11, f$$1, recurse) {
    var i$$9;
    var j$$1;
    var k;
    var key$$14;
    var v$$1;
    var meta;
    var saved = [];
    var token$$4;
    var lidx = s$$7.length;
    var DUMP = "dump";
    var SPACE = " ";
    var LBRACE = "{";
    var RBRACE = "}";
    var dump$$1;
    var objstr;
    for (;;) {
      i$$9 = s$$7.lastIndexOf(LBRACE, lidx);
      if (i$$9 < 0) {
        break;
      }
      j$$1 = s$$7.indexOf(RBRACE, i$$9);
      if (i$$9 + 1 > j$$1) {
        break;
      }
      token$$4 = s$$7.substring(i$$9 + 1, j$$1);
      key$$14 = token$$4;
      meta = null;
      k = key$$14.indexOf(SPACE);
      if (k > -1) {
        meta = key$$14.substring(k + 1);
        key$$14 = key$$14.substring(0, k);
      }
      v$$1 = o$$11[key$$14];
      if (f$$1) {
        v$$1 = f$$1(key$$14, v$$1, meta);
      }
      if (L.isObject(v$$1)) {
        if (L.isArray(v$$1)) {
          v$$1 = L.dump(v$$1, parseInt(meta, 10));
        } else {
          meta = meta || "";
          dump$$1 = meta.indexOf(DUMP);
          if (dump$$1 > -1) {
            meta = meta.substring(4);
          }
          objstr = v$$1.toString();
          if (objstr === OBJECT_TOSTRING || dump$$1 > -1) {
            v$$1 = L.dump(v$$1, parseInt(meta, 10));
          } else {
            v$$1 = objstr;
          }
        }
      } else {
        if (!L.isString(v$$1) && !L.isNumber(v$$1)) {
          v$$1 = "~-" + saved.length + "-~";
          saved[saved.length] = token$$4;
        }
      }
      s$$7 = s$$7.substring(0, i$$9) + v$$1 + s$$7.substring(j$$1 + 1);
      if (recurse === false) {
        lidx = i$$9 - 1;
      }
    }
    i$$9 = saved.length - 1;
    for (;i$$9 >= 0;i$$9 = i$$9 - 1) {
      s$$7 = s$$7.replace(new RegExp("~-" + i$$9 + "-~"), "{" + saved[i$$9] + "}", "g");
    }
    return s$$7;
  }, trim:function(s$$8) {
    try {
      return s$$8.replace(/^\s+|\s+$/g, "");
    } catch (e$$4) {
      return s$$8;
    }
  }, merge:function() {
    var o$$12 = {};
    var a$$3 = arguments;
    var l$$2 = a$$3.length;
    var i$$10;
    i$$10 = 0;
    for (;i$$10 < l$$2;i$$10 = i$$10 + 1) {
      L.augmentObject(o$$12, a$$3[i$$10], true);
    }
    return o$$12;
  }, later:function(when, o$$13, fn, data$$19, periodic) {
    when = when || 0;
    o$$13 = o$$13 || {};
    var m$$2 = fn;
    var d$$2 = data$$19;
    var f$$2;
    var r$$3;
    if (L.isString(fn)) {
      m$$2 = o$$13[fn];
    }
    if (!m$$2) {
      throw new TypeError("method undefined");
    }
    if (!L.isUndefined(data$$19) && !L.isArray(d$$2)) {
      d$$2 = [data$$19];
    }
    f$$2 = function() {
      m$$2.apply(o$$13, d$$2 || NOTHING);
    };
    r$$3 = periodic ? setInterval(f$$2, when) : setTimeout(f$$2, when);
    return{interval:periodic, cancel:function() {
      if (this.interval) {
        clearInterval(r$$3);
      } else {
        clearTimeout(r$$3);
      }
    }};
  }, isValue:function(o$$14) {
    return L.isObject(o$$14) || L.isString(o$$14) || L.isNumber(o$$14) || L.isBoolean(o$$14);
  }};
  L.hasOwnProperty = OP.hasOwnProperty ? function(o$$15, prop$$4) {
    return o$$15 && o$$15.hasOwnProperty && o$$15.hasOwnProperty(prop$$4);
  } : function(o$$16, prop$$5) {
    return!L.isUndefined(o$$16[prop$$5]) && o$$16.constructor.prototype[prop$$5] !== o$$16[prop$$5];
  };
  OB.augmentObject(L, OB, true);
  YAHOO.util.Lang = L;
  L.augment = L.augmentProto;
  YAHOO.augment = L.augmentProto;
  YAHOO.extend = L.extend;
})();
YAHOO.register("yahoo", YAHOO, {version:"2.9.0", build:"2800"});
if (typeof YAHOO.util.ImageLoader == "undefined") {
  YAHOO.util.ImageLoader = {};
}
YAHOO.util.ImageLoader.group = function(trigEl, trigAct, timeout) {
  this.name = "unnamed";
  this._imgObjs = {};
  this.timeoutLen = timeout;
  this._timeout = null;
  this._triggers = [];
  this._customTriggers = [];
  this.foldConditional = false;
  this.className = null;
  this._classImageEls = null;
  YAHOO.util.Event.addListener(window, "load", this._onloadTasks, this, true);
  this.addTrigger(trigEl, trigAct);
};
YAHOO.util.ImageLoader.group.prototype.addTrigger = function(trigEl$$1, trigAct$$1) {
  function wrappedFetch() {
    this.fetch();
  }
  if (!trigEl$$1 || !trigAct$$1) {
    return;
  }
  this._triggers.push([trigEl$$1, trigAct$$1, wrappedFetch]);
  YAHOO.util.Event.addListener(trigEl$$1, trigAct$$1, wrappedFetch, this, true);
};
YAHOO.util.ImageLoader.group.prototype.addCustomTrigger = function(event$$1) {
  function wrappedFetch$$1() {
    this.fetch();
  }
  if (!event$$1 || !event$$1 instanceof YAHOO.util.CustomEvent) {
    return;
  }
  this._customTriggers.push([event$$1, wrappedFetch$$1]);
  event$$1.subscribe(wrappedFetch$$1, this, true);
};
YAHOO.util.ImageLoader.group.prototype._onloadTasks = function() {
  if (this.timeoutLen && typeof this.timeoutLen == "number" && this.timeoutLen > 0) {
    this._timeout = setTimeout(this._getFetchTimeout(), this.timeoutLen * 1E3);
  }
  if (this.foldConditional) {
    this._foldCheck();
  }
};
YAHOO.util.ImageLoader.group.prototype._getFetchTimeout = function() {
  var self$$1 = this;
  return function() {
    self$$1.fetch();
  };
};
YAHOO.util.ImageLoader.group.prototype.registerBgImage = function(domId, url$$2) {
  this._imgObjs[domId] = new YAHOO.util.ImageLoader.bgImgObj(domId, url$$2);
  return this._imgObjs[domId];
};
YAHOO.util.ImageLoader.group.prototype.registerSrcImage = function(domId$$1, url$$3, width$$9, height$$8) {
  this._imgObjs[domId$$1] = new YAHOO.util.ImageLoader.srcImgObj(domId$$1, url$$3, width$$9, height$$8);
  return this._imgObjs[domId$$1];
};
YAHOO.util.ImageLoader.group.prototype.registerPngBgImage = function(domId$$2, url$$4, ailProps) {
  this._imgObjs[domId$$2] = new YAHOO.util.ImageLoader.pngBgImgObj(domId$$2, url$$4, ailProps);
  return this._imgObjs[domId$$2];
};
YAHOO.util.ImageLoader.group.prototype.fetch = function() {
  clearTimeout(this._timeout);
  var i$$11 = 0;
  var len$$1 = this._triggers.length;
  for (;i$$11 < len$$1;i$$11++) {
    YAHOO.util.Event.removeListener(this._triggers[i$$11][0], this._triggers[i$$11][1], this._triggers[i$$11][2]);
  }
  i$$11 = 0;
  len$$1 = this._customTriggers.length;
  for (;i$$11 < len$$1;i$$11++) {
    this._customTriggers[i$$11][0].unsubscribe(this._customTriggers[i$$11][1], this);
  }
  this._fetchByClass();
  var id;
  for (id in this._imgObjs) {
    if (YAHOO.lang.hasOwnProperty(this._imgObjs, id)) {
      this._imgObjs[id].fetch();
    }
  }
};
YAHOO.util.ImageLoader.group.prototype._foldCheck = function() {
  var scrollTop = document.compatMode != "CSS1Compat" ? document.body.scrollTop : document.documentElement.scrollTop;
  var viewHeight = YAHOO.util.Dom.getViewportHeight();
  var hLimit = scrollTop + viewHeight;
  var scrollLeft = document.compatMode != "CSS1Compat" ? document.body.scrollLeft : document.documentElement.scrollLeft;
  var viewWidth = YAHOO.util.Dom.getViewportWidth();
  var wLimit = scrollLeft + viewWidth;
  var id$$1;
  for (id$$1 in this._imgObjs) {
    if (YAHOO.lang.hasOwnProperty(this._imgObjs, id$$1)) {
      var elPos = YAHOO.util.Dom.getXY(this._imgObjs[id$$1].domId);
      if (elPos[1] < hLimit && elPos[0] < wLimit) {
        this._imgObjs[id$$1].fetch();
      }
    }
  }
  if (this.className) {
    this._classImageEls = YAHOO.util.Dom.getElementsByClassName(this.className);
    var i$$12 = 0;
    var len$$2 = this._classImageEls.length;
    for (;i$$12 < len$$2;i$$12++) {
      elPos = YAHOO.util.Dom.getXY(this._classImageEls[i$$12]);
      if (elPos[1] < hLimit && elPos[0] < wLimit) {
        YAHOO.util.Dom.removeClass(this._classImageEls[i$$12], this.className);
      }
    }
  }
};
YAHOO.util.ImageLoader.group.prototype._fetchByClass = function() {
  if (!this.className) {
    return;
  }
  if (this._classImageEls === null) {
    this._classImageEls = YAHOO.util.Dom.getElementsByClassName(this.className);
  }
  YAHOO.util.Dom.removeClass(this._classImageEls, this.className);
};
YAHOO.util.ImageLoader.imgObj = function(domId$$3, url$$5) {
  this.domId = domId$$3;
  this.url = url$$5;
  this.width = null;
  this.height = null;
  this.setVisible = false;
  this._fetched = false;
};
YAHOO.util.ImageLoader.imgObj.prototype.fetch = function() {
  if (this._fetched) {
    alert("BOOM1");
    return;
  }
  var el = document.getElementById(this.domId);
  if (!el) {
    alert("BOOM2");
    return;
  }
  this._applyUrl(el);
  if (this.setVisible) {
    el.style.visibility = "visible";
  }
  if (this.width) {
    el.width = this.width;
  }
  if (this.height) {
    el.height = this.height;
  }
  this._fetched = true;
};
YAHOO.util.ImageLoader.imgObj.prototype._applyUrl = function(el$$1) {
};
YAHOO.util.ImageLoader.bgImgObj = function(domId$$4, url$$6) {
  YAHOO.util.ImageLoader.bgImgObj.superclass.constructor.call(this, domId$$4, url$$6);
};
YAHOO.lang.extend(YAHOO.util.ImageLoader.bgImgObj, YAHOO.util.ImageLoader.imgObj);
YAHOO.util.ImageLoader.bgImgObj.prototype._applyUrl = function(el$$2) {
  el$$2.style.backgroundImage = "url('" + this.url + "')";
};
YAHOO.util.ImageLoader.srcImgObj = function(domId$$5, url$$7, width$$10, height$$9) {
  YAHOO.util.ImageLoader.srcImgObj.superclass.constructor.call(this, domId$$5, url$$7);
  this.width = width$$10;
  this.height = height$$9;
};
YAHOO.lang.extend(YAHOO.util.ImageLoader.srcImgObj, YAHOO.util.ImageLoader.imgObj);
YAHOO.util.ImageLoader.srcImgObj.prototype._applyUrl = function(el$$3) {
  el$$3.src = this.url;
};
YAHOO.util.ImageLoader.pngBgImgObj = function(domId$$6, url$$8, ailProps$$1) {
  YAHOO.util.ImageLoader.pngBgImgObj.superclass.constructor.call(this, domId$$6, url$$8);
  this.props = ailProps$$1 || {};
};
YAHOO.lang.extend(YAHOO.util.ImageLoader.pngBgImgObj, YAHOO.util.ImageLoader.imgObj);
YAHOO.util.ImageLoader.pngBgImgObj.prototype._applyUrl = function(el$$4) {
  if (YAHOO.env.ua.ie && YAHOO.env.ua.ie <= 6) {
    var sizingMethod = YAHOO.lang.isUndefined(this.props.sizingMethod) ? "scale" : this.props.sizingMethod;
    var enabled = YAHOO.lang.isUndefined(this.props.enabled) ? "true" : this.props.enabled;
    el$$4.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + this.url + '", sizingMethod="' + sizingMethod + '", enabled="' + enabled + '")';
  } else {
    el$$4.style.backgroundImage = "url('" + this.url + "')";
  }
};
YAHOO.register("imageloader", YAHOO.util.ImageLoader, {version:"2.8.2r1", build:"7"});
setTimeout(doLoad, 1E3)
