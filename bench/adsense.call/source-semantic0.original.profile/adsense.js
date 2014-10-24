
JAM.startProfile('load');
(function() {
  var n$$1 = this;
  var aa = function(a, b) {
    var c = a.split(".");
    var d = n$$1;
    c[0] in d || !d.execScript || d.execScript("var " + c[0]);
    var e$$4;
    for (;c.length && (e$$4 = c.shift());) {
      c.length || void 0 === b ? d = d[e$$4] ? d[e$$4] : d[e$$4] = {} : d[e$$4] = b;
    }
  };
  var ba = function(a$$1, b$$1, c$$1) {
    return a$$1.call.apply(a$$1.bind, arguments);
  };
  var ca = function(a$$2, b$$2, c$$2) {
    if (!a$$2) {
      throw Error();
    }
    if (2 < arguments.length) {
      var d$$1 = Array.prototype.slice.call(arguments, 2);
      return function() {
        var c$$3 = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c$$3, d$$1);
        return a$$2.apply(b$$2, c$$3);
      };
    }
    return function() {
      return a$$2.apply(b$$2, arguments);
    };
  };
  var p = function(a$$3, b$$3, c$$4) {
    p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ba : ca;
    return p.apply(null, arguments);
  };
  var da = function(a$$4, b$$4) {
    var c$$5 = Array.prototype.slice.call(arguments, 1);
    return function() {
      var b$$5 = c$$5.slice();
      b$$5.push.apply(b$$5, arguments);
      return a$$4.apply(this, b$$5);
    };
  };
  var v = (new Date).getTime();
  var w$$5 = function(a$$5) {
    a$$5 = parseFloat(a$$5);
    return isNaN(a$$5) || 1 < a$$5 || 0 > a$$5 ? 0 : a$$5;
  };
  var z$$2 = function(a$$6) {
    return/^true$/.test(a$$6) ? !0 : !1;
  };
  var ea = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/;
  var A = function(a$$7, b$$6) {
    if (!a$$7) {
      return b$$6;
    }
    var c$$6 = a$$7.match(ea);
    return c$$6 ? c$$6[0] : b$$6;
  };
  var fa = z$$2("false");
  var ga = z$$2("false");
  var ha = z$$2("false");
  var ia = z$$2("false");
  var C = function(a$$8, b$$7, c$$7) {
    c$$7 || (c$$7 = ia ? "https" : "http");
    return[c$$7, "://", a$$8, b$$7].join("");
  };
  var ja = w$$5("0.15");
  var ka = w$$5("0");
  var la = w$$5("");
  var ma = w$$5("0.001");
  var na = w$$5("0.2");
  var oa = function() {
    return A("", "googlesyndication");
  };
  var pa = document;
  var D = window;
  var qa = /&/g;
  var ra = /</g;
  var sa = />/g;
  var ta = /\"/g;
  var E = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
  var F = {"'":"\\'"};
  oa();
  var G = function(a$$9, b$$8) {
    var c$$8;
    for (c$$8 in a$$9) {
      Object.prototype.hasOwnProperty.call(a$$9, c$$8) && b$$8.call(null, a$$9[c$$8], c$$8, a$$9);
    }
  };
  var H = function(a$$10) {
    return!!a$$10 && "function" == typeof a$$10 && !!a$$10.call;
  };
  var ua = function(a$$11, b$$9) {
    if (!(2 > arguments.length)) {
      var c$$9 = 1;
      var d$$2 = arguments.length;
      for (;c$$9 < d$$2;++c$$9) {
        a$$11.push(arguments[c$$9]);
      }
    }
  };
  var I = function(a$$12, b$$10) {
    if (!(1E-4 > Math.random())) {
      var c$$10 = Math.random();
      if (c$$10 < b$$10) {
        try {
          var d$$3 = new Uint16Array(1);
          window.crypto.getRandomValues(d$$3);
          c$$10 = d$$3[0] / 65536;
        } catch (e$$5) {
          c$$10 = Math.random();
        }
        return a$$12[Math.floor(c$$10 * a$$12.length)];
      }
    }
    return null;
  };
  var va = function(a$$13) {
    a$$13.google_unique_id ? ++a$$13.google_unique_id : a$$13.google_unique_id = 1;
  };
  var wa = function(a$$14) {
    var b$$11 = [];
    var c$$11 = 0;
    for (;a$$14 && 25 > c$$11;++c$$11) {
      var d$$4 = 9 != a$$14.nodeType && a$$14.id;
      d$$4 = d$$4 ? "/" + d$$4 : "";
      var e$$6;
      t: {
        var f = a$$14.parentElement;
        e$$6 = a$$14.nodeName.toLowerCase();
        if (f) {
          f = f.childNodes;
          var g = 0;
          var l = 0;
          for (;l < f.length;++l) {
            var h$$4 = f[l];
            if (h$$4.nodeName && h$$4.nodeName.toLowerCase() == e$$6) {
              if (a$$14 == h$$4) {
                e$$6 = "." + g;
                break t;
              }
              ++g;
            }
          }
        }
        e$$6 = "";
      }
      b$$11.push((a$$14.nodeName && a$$14.nodeName.toLowerCase()) + d$$4 + e$$6);
      a$$14 = a$$14.parentElement;
    }
    return b$$11.join();
  };
  var xa = function() {
    var a$$15 = D;
    var b$$12 = [];
    if (a$$15) {
      try {
        var c$$12 = a$$15.parent;
        var d$$5 = 0;
        for (;c$$12 && c$$12 != a$$15 && 25 > d$$5;++d$$5) {
          var e$$7 = c$$12.frames;
          var f$$1 = 0;
          for (;f$$1 < e$$7.length;++f$$1) {
            if (a$$15 == e$$7[f$$1]) {
              b$$12.push(f$$1);
              break;
            }
          }
          a$$15 = c$$12;
          c$$12 = a$$15.parent;
        }
      } catch (g$$1) {
      }
    }
    return b$$12.join();
  };
  var ya = function(a$$16, b$$13, c$$13) {
    b$$13 = [b$$13.google_ad_slot, b$$13.google_ad_format, b$$13.google_ad_type, b$$13.google_ad_width, b$$13.google_ad_height];
    if (c$$13) {
      c$$13 = [];
      var d$$6 = 0;
      for (;a$$16 && 25 > d$$6;a$$16 = a$$16.parentNode, ++d$$6) {
        c$$13.push(9 != a$$16.nodeType && a$$16.id || "");
      }
      (a$$16 = c$$13.join()) && b$$13.push(a$$16);
    } else {
      b$$13.push(wa(a$$16)), b$$13.push(xa());
    }
    b$$13 = b$$13.join(":");
    a$$16 = b$$13.length;
    if (0 == a$$16) {
      b$$13 = 0;
    } else {
      c$$13 = 305419896;
      d$$6 = 0;
      for (;d$$6 < a$$16;d$$6++) {
        c$$13 ^= (c$$13 << 5) + (c$$13 >> 2) + b$$13.charCodeAt(d$$6) & 4294967295;
      }
      b$$13 = 0 < c$$13 ? c$$13 : 4294967296 + c$$13;
    }
    return b$$13.toString();
  };
  var J = function(a$$17) {
    try {
      return!!a$$17.location.href || "" === a$$17.location.href;
    } catch (b$$14) {
      return!1;
    }
  };
  var za = {client:"google_ad_client", format:"google_ad_format", slotname:"google_ad_slot", output:"google_ad_output", ad_type:"google_ad_type", async_oa:"google_async_for_oa_experiment", zrtm:"google_ad_handling_mode", dimpr:"google_always_use_delayed_impressions_experiment", peri:"google_top_experiment"};
  var K = function(a$$18, b$$15, c$$14, d$$7) {
    try {
      c$$14();
    } catch (e$$8) {
      c$$14 = !ha;
      try {
        var f$$2 = e$$8.toString();
        e$$8.name && -1 == f$$2.indexOf(e$$8.name) && (f$$2 += ": " + e$$8.name);
        e$$8.message && -1 == f$$2.indexOf(e$$8.message) && (f$$2 += ": " + e$$8.message);
        if (e$$8.stack) {
          var g$$2 = e$$8.stack;
          var l$$1 = f$$2;
          try {
            -1 == g$$2.indexOf(l$$1) && (g$$2 = l$$1 + "\n" + g$$2);
            var h$$5;
            for (;g$$2 != h$$5;) {
              h$$5 = g$$2, g$$2 = g$$2.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
            }
            f$$2 = g$$2.replace(/\n */g, "\n");
          } catch (k) {
            f$$2 = l$$1;
          }
        }
        g$$2 = "";
        e$$8.fileName && (g$$2 = e$$8.fileName);
        h$$5 = -1;
        e$$8.lineNumber && (h$$5 = e$$8.lineNumber);
        var m;
        t: {
          try {
            m = d$$7 ? d$$7() : "";
            break t;
          } catch (q) {
          }
          m = "";
        }
        c$$14 = b$$15(a$$18, f$$2, g$$2, h$$5, m);
      } catch (x$$47) {
        Aa({context:"protectAndRun", msg:x$$47.toString() + "\n" + (x$$47.stack || "")});
      }
      if (!c$$14) {
        throw e$$8;
      }
    }
  };
  aa("google_protectAndRun", K);
  var L = function(a$$19, b$$16, c$$15, d$$8, e$$9) {
    a$$19 = {jscb:fa ? 1 : 0, jscd:ga ? 1 : 0, context:a$$19, msg:b$$16.substring(0, 512), eid:e$$9 && e$$9.substring(0, 40), file:c$$15, line:d$$8.toString(), url:pa.URL.substring(0, 512), ref:pa.referrer.substring(0, 512)};
    Ba(a$$19);
    Aa(a$$19);
    return!ha;
  };
  aa("google_handleError", L);
  var Aa = function(a$$20) {
    if (.01 > Math.random()) {
      a$$20 = "/pagead/gen_204?id=jserror" + Ca(a$$20);
      a$$20 = C(A("", "googlesyndication"), a$$20);
      a$$20 = a$$20.substring(0, 2E3);
      D.google_image_requests || (D.google_image_requests = []);
      var b$$17 = D.document.createElement("img");
      b$$17.src = a$$20;
      D.google_image_requests.push(b$$17);
    }
  };
  var Ba = function(a$$21) {
    var b$$18 = a$$21 || {};
    G(za, function(a$$22, d$$9) {
      b$$18[d$$9] = D[a$$22];
    });
  };
  var M = function(a$$23, b$$19) {
    return da(K, a$$23, L, b$$19, void 0);
  };
  var Ca = function(a$$24) {
    var b$$20 = "";
    G(a$$24, function(a$$25, d$$10) {
      if (0 === a$$25 || a$$25) {
        b$$20 += "&" + d$$10 + "=" + ("function" == typeof encodeURIComponent ? encodeURIComponent(a$$25) : escape(a$$25));
      }
    });
    return b$$20;
  };
  var N = null;
  var Da = function() {
    if (!N) {
      var a$$26 = window;
      var b$$21 = a$$26;
      var c$$16 = 0;
      for (;a$$26 != a$$26.parent;) {
        if (a$$26 = a$$26.parent, c$$16++, J(a$$26)) {
          b$$21 = a$$26;
        } else {
          break;
        }
      }
      N = b$$21;
    }
    return N;
  };
  var Ea = function() {
  };
  var O = function(a$$27, b$$22, c$$17) {
    switch(typeof b$$22) {
      case "string":
        Fa(b$$22, c$$17);
        break;
      case "number":
        c$$17.push(isFinite(b$$22) && !isNaN(b$$22) ? b$$22 : "null");
        break;
      case "boolean":
        c$$17.push(b$$22);
        break;
      case "undefined":
        c$$17.push("null");
        break;
      case "object":
        if (null == b$$22) {
          c$$17.push("null");
          break;
        }
        if (b$$22 instanceof Array) {
          var d$$11 = b$$22.length;
          c$$17.push("[");
          var e$$10 = "";
          var f$$3 = 0;
          for (;f$$3 < d$$11;f$$3++) {
            c$$17.push(e$$10), O(a$$27, b$$22[f$$3], c$$17), e$$10 = ",";
          }
          c$$17.push("]");
          break;
        }
        c$$17.push("{");
        d$$11 = "";
        for (e$$10 in b$$22) {
          b$$22.hasOwnProperty(e$$10) && (f$$3 = b$$22[e$$10], "function" != typeof f$$3 && (c$$17.push(d$$11), Fa(e$$10, c$$17), c$$17.push(":"), O(a$$27, f$$3, c$$17), d$$11 = ","));
        }
        c$$17.push("}");
        break;
      case "function":
        break;
      default:
        throw Error("Unknown type: " + typeof b$$22);;
    }
  };
  var P = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
  var Ga = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
  var Fa = function(a$$28, b$$23) {
    b$$23.push('"');
    b$$23.push(a$$28.replace(Ga, function(a$$29) {
      if (a$$29 in P) {
        return P[a$$29];
      }
      var b$$24 = a$$29.charCodeAt(0);
      var e$$11 = "\\u";
      16 > b$$24 ? e$$11 += "000" : 256 > b$$24 ? e$$11 += "00" : 4096 > b$$24 && (e$$11 += "0");
      return P[a$$29] = e$$11 + b$$24.toString(16);
    }));
    b$$23.push('"');
  };
  var Ha = function(a$$30) {
    a$$30.google_page_url && (a$$30.google_page_url = String(a$$30.google_page_url));
    var b$$25 = [];
    G(a$$30, function(a$$31, d$$12) {
      if (null != a$$31) {
        var e$$12;
        try {
          var f$$4 = [];
          O(new Ea, a$$31, f$$4);
          e$$12 = f$$4.join("");
        } catch (g$$3) {
        }
        e$$12 && ua(b$$25, d$$12, "=", e$$12, ";");
      }
    });
    return b$$25.join("");
  };
  var Ia = /\.((google(|groups|mail|images|print))|gmail)\./;
  var Ja = function(a$$32) {
    try {
      var b$$26 = Ia.test(a$$32.location.host);
      return!(!a$$32.postMessage || !a$$32.localStorage || !a$$32.JSON || b$$26);
    } catch (c$$18) {
      return!1;
    }
  };
  var Q = function(a$$33) {
    this.b = a$$33;
    a$$33.google_iframe_oncopy || (a$$33.google_iframe_oncopy = {handlers:{}, upd:p(this.l, this)});
    this.i = a$$33.google_iframe_oncopy;
  };
  var Ka;
  var R = "var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
  /[&<>\"]/.test(R) && (-1 != R.indexOf("&") && (R = R.replace(qa, "&amp;")), -1 != R.indexOf("<") && (R = R.replace(ra, "&lt;")), -1 != R.indexOf(">") && (R = R.replace(sa, "&gt;")), -1 != R.indexOf('"') && (R = R.replace(ta, "&quot;")));
  Ka = R;
  Q.prototype.set = function(a$$34, b$$27) {
    this.i.handlers[a$$34] = b$$27;
    this.b.addEventListener && this.b.addEventListener("load", p(this.j, this, a$$34), !1);
  };
  Q.prototype.j = function(a$$35) {
    a$$35 = this.b.document.getElementById(a$$35);
    var b$$28 = a$$35.contentWindow.document;
    if (a$$35.onload && b$$28 && (!b$$28.body || !b$$28.body.firstChild)) {
      a$$35.onload();
    }
  };
  Q.prototype.l = function(a$$36, b$$29) {
    var c$$19 = La("rs", a$$36);
    var d$$13;
    t: {
      if (a$$36 && (d$$13 = a$$36.match("dt=([^&]+)")) && 2 == d$$13.length) {
        d$$13 = d$$13[1];
        break t;
      }
      d$$13 = "";
    }
    d$$13 = (new Date).getTime() - d$$13;
    c$$19 = c$$19.replace(/&dtd=(\d+|M)/, "&dtd=" + (1E4 > d$$13 ? d$$13 + "" : "M"));
    this.set(b$$29, c$$19);
    return c$$19;
  };
  var La = function(a$$37, b$$30) {
    var c$$20 = RegExp("\\b" + a$$37 + "=(\\d+)");
    var d$$14 = c$$20.exec(b$$30);
    d$$14 && (b$$30 = b$$30.replace(c$$20, a$$37 + "=" + (+d$$14[1] + 1 || 1)));
    return b$$30;
  };
  var S;
  var T;
  var U;
  var Ma;
  var Na = function() {
    return n$$1.navigator ? n$$1.navigator.userAgent : null;
  };
  Ma = U = T = S = !1;
  var V;
  if (V = Na()) {
    var Oa = n$$1.navigator;
    S = 0 == V.lastIndexOf("Opera", 0);
    T = !S && (-1 != V.indexOf("MSIE") || -1 != V.indexOf("Trident"));
    U = !S && -1 != V.indexOf("WebKit");
    Ma = !S && !U && !T && "Gecko" == Oa.product;
  }
  var Pa = T;
  var Qa = Ma;
  var Ra = U;
  var W;
  if (S && n$$1.opera) {
    var Sa = n$$1.opera.version;
    "function" == typeof Sa && Sa();
  } else {
    Qa ? W = /rv\:([^\);]+)(\)|;)/ : Pa ? W = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Ra && (W = /WebKit\/(\S+)/), W && W.exec(Na());
  }
  var X;
  var Y = function(a$$38) {
    this.c = [];
    this.b = a$$38 || window;
    this.a = 0;
    this.d = null;
  };
  var Ta = function(a$$39, b$$31) {
    this.k = a$$39;
    this.h = b$$31;
  };
  Y.prototype.n = function(a$$40, b$$32) {
    0 != this.a || 0 != this.c.length || b$$32 && b$$32 != window ? this.g(a$$40, b$$32) : (this.a = 2, this.f(new Ta(a$$40, window)));
  };
  Y.prototype.g = function(a$$41, b$$33) {
    this.c.push(new Ta(a$$41, b$$33 || this.b));
    Ua(this);
  };
  Y.prototype.o = function(a$$42) {
    this.a = 1;
    if (a$$42) {
      var b$$34 = M("sjr::timeout", p(this.e, this));
      this.d = this.b.setTimeout(b$$34, a$$42);
    }
  };
  Y.prototype.e = function() {
    1 == this.a && (null != this.d && (this.b.clearTimeout(this.d), this.d = null), this.a = 0);
    Ua(this);
  };
  Y.prototype.p = function() {
    return!(!window || !Array);
  };
  Y.prototype.nq = Y.prototype.n;
  Y.prototype.nqa = Y.prototype.g;
  Y.prototype.al = Y.prototype.o;
  Y.prototype.rl = Y.prototype.e;
  Y.prototype.sz = Y.prototype.p;
  var Ua = function(a$$43) {
    var b$$35 = M("sjr::tryrun", p(a$$43.m, a$$43));
    a$$43.b.setTimeout(b$$35, 0);
  };
  Y.prototype.m = function() {
    if (0 == this.a && this.c.length) {
      var a$$44 = this.c.shift();
      this.a = 2;
      var b$$36 = M("sjr::run", p(this.f, this, a$$44));
      a$$44.h.setTimeout(b$$36, 0);
      Ua(this);
    }
  };
  Y.prototype.f = function(a$$45) {
    this.a = 0;
    a$$45.k();
  };
  var Va = function(a$$46) {
    try {
      return a$$46.sz();
    } catch (b$$37) {
      return!1;
    }
  };
  var Wa = function(a$$47) {
    return!!a$$47 && ("object" == typeof a$$47 || "function" == typeof a$$47) && Va(a$$47) && H(a$$47.nq) && H(a$$47.nqa) && H(a$$47.al) && H(a$$47.rl);
  };
  var Xa = function() {
    if (X && Va(X)) {
      return X;
    }
    var a$$48 = Da();
    var b$$38 = a$$48.google_jobrunner;
    return Wa(b$$38) ? X = b$$38 : a$$48.google_jobrunner = X = new Y(a$$48);
  };
  var Ya = function(a$$49, b$$39) {
    Xa().nq(a$$49, b$$39);
  };
  var Za = function(a$$50, b$$40) {
    Xa().nqa(a$$50, b$$40);
  };
  var $a = {"120x90":!0, "160x90":!0, "180x90":!0, "200x90":!0, "468x15":!0, "728x15":!0};
  var ab = function() {
    var a$$51 = "script";
    return["<", a$$51, ' src="', C(oa(), "/pagead/js/r20131120/r20130906/show_ads_impl.js", ""), '"></', a$$51, ">"].join("");
  };
  var bb = function(a$$52, b$$41, c$$21, d$$15) {
    return function() {
      var e$$13 = !1;
      d$$15 && Xa().al(3E4);
      try {
        if (J(a$$52.document.getElementById(b$$41).contentWindow)) {
          var f$$5 = a$$52.document.getElementById(b$$41).contentWindow;
          var g$$4 = f$$5.document;
          g$$4.body && g$$4.body.firstChild || (g$$4.open(), f$$5.google_async_iframe_close = !0, g$$4.write(c$$21));
        } else {
          var l$$2 = a$$52.document.getElementById(b$$41).contentWindow;
          var h$$6;
          f$$5 = c$$21;
          f$$5 = String(f$$5);
          if (f$$5.quote) {
            h$$6 = f$$5.quote();
          } else {
            g$$4 = ['"'];
            var k$$1 = 0;
            for (;k$$1 < f$$5.length;k$$1++) {
              var m$$1 = f$$5.charAt(k$$1);
              var q$$1 = m$$1.charCodeAt(0);
              var x$$48 = g$$4;
              var B = k$$1 + 1;
              var u;
              if (!(u = E[m$$1])) {
                var r;
                if (31 < q$$1 && 127 > q$$1) {
                  r = m$$1;
                } else {
                  var t = m$$1;
                  if (t in F) {
                    r = F[t];
                  } else {
                    if (t in E) {
                      r = F[t] = E[t];
                    } else {
                      var s$$2 = t;
                      var y$$30 = t.charCodeAt(0);
                      if (31 < y$$30 && 127 > y$$30) {
                        s$$2 = t;
                      } else {
                        if (256 > y$$30) {
                          if (s$$2 = "\\x", 16 > y$$30 || 256 < y$$30) {
                            s$$2 += "0";
                          }
                        } else {
                          s$$2 = "\\u", 4096 > y$$30 && (s$$2 += "0");
                        }
                        s$$2 += y$$30.toString(16).toUpperCase();
                      }
                      r = F[t] = s$$2;
                    }
                  }
                }
                u = r;
              }
              x$$48[B] = u;
            }
            g$$4.push('"');
            h$$6 = g$$4.join("");
          }
          l$$2.location.replace("javascript:" + h$$6);
        }
        e$$13 = !0;
      } catch (sb) {
        l$$2 = Da().google_jobrunner, Wa(l$$2) && l$$2.rl();
      }
      e$$13 && (e$$13 = La("google_async_rrc", c$$21), (new Q(a$$52)).set(b$$41, bb(a$$52, b$$41, e$$13, !1)));
    };
  };
  var cb = function(a$$53) {
    var b$$42 = ["<iframe"];
    G(a$$53, function(a$$54, d$$16) {
      null != a$$54 && b$$42.push(" " + d$$16 + '="' + a$$54 + '"');
    });
    b$$42.push("></iframe>");
    return b$$42.join("");
  };
  var db = function(a$$55, b$$43, c$$22, d$$17) {
    d$$17 = d$$17 ? '"' : "";
    var e$$14 = d$$17 + "0" + d$$17;
    a$$55.width = d$$17 + b$$43 + d$$17;
    a$$55.height = d$$17 + c$$22 + d$$17;
    a$$55.frameborder = e$$14;
    a$$55.marginwidth = e$$14;
    a$$55.marginheight = e$$14;
    a$$55.vspace = e$$14;
    a$$55.hspace = e$$14;
    a$$55.allowtransparency = d$$17 + "true" + d$$17;
    a$$55.scrolling = d$$17 + "no" + d$$17;
  };
  var fb = function(a$$56, b$$44, c$$23) {
    eb(a$$56, b$$44, c$$23, function(a$$57, b$$45, f$$6) {
      var g$$5 = b$$45.id;
      var l$$3 = 0;
      for (;!g$$5 || a$$57.document.getElementById(g$$5);) {
        g$$5 = "aswift_" + l$$3++;
      }
      b$$45.id = g$$5;
      b$$45.name = g$$5;
      a$$57 = Number(f$$6.google_ad_width);
      g$$5 = Number(f$$6.google_ad_height);
      f$$6 = ["<iframe"];
      var h$$7;
      for (h$$7 in b$$45) {
        b$$45.hasOwnProperty(h$$7) && ua(f$$6, h$$7 + "=" + b$$45[h$$7]);
      }
      f$$6.push('style="left:0;position:absolute;top:0;"');
      f$$6.push("></iframe>");
      h$$7 = "border:none;height:" + g$$5 + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + a$$57 + "px;background-color:transparent";
      c$$23.innerHTML = ['<ins style="display:inline-table;', h$$7, '"><ins id="', b$$45.id + "_anchor", '" style="display:block;', h$$7, '">', f$$6.join(" "), "</ins></ins>"].join("");
      return b$$45.id;
    });
  };
  var eb = function(a$$58, b$$46, c$$24, d$$18) {
    var e$$15 = "script";
    var f$$7 = b$$46.google_ad_width;
    var g$$6 = b$$46.google_ad_height;
    var l$$4 = {};
    db(l$$4, f$$7, g$$6, !0);
    l$$4.onload = '"' + Ka + '"';
    d$$18 = d$$18(a$$58, l$$4, b$$46);
    l$$4 = window.google_override_format || !$a[window.google_ad_width + "x" + window.google_ad_height] && "aa" == window.google_loader_used ? I(["c", "e"], na) : null;
    var h$$8 = b$$46.google_ad_output;
    var k$$2 = b$$46.google_ad_format;
    k$$2 || "html" != h$$8 && null != h$$8 || (k$$2 = b$$46.google_ad_width + "x" + b$$46.google_ad_height, "e" == l$$4 && (k$$2 += "_as"));
    h$$8 = !b$$46.google_ad_slot || b$$46.google_override_format || !$a[b$$46.google_ad_width + "x" + b$$46.google_ad_height] && "aa" == b$$46.google_loader_used;
    k$$2 = k$$2 && h$$8 ? k$$2.toLowerCase() : "";
    b$$46.google_ad_format = k$$2;
    k$$2 = ya(c$$24, b$$46, !0);
    b$$46.google_ad_unit_key = k$$2;
    k$$2 = window.google_adk2_experiment = window.google_adk2_experiment || I(["C", "E"], ma) || "N";
    "E" == k$$2 ? b$$46.google_ad_unit_key_2 = ya(c$$24, b$$46) : "C" == k$$2 && (b$$46.google_ad_unit_key_2 = "ctrl");
    c$$24 = Ha(b$$46);
    k$$2 = Ja(a$$58);
    h$$8 = a$$58.document;
    h$$8 = 3 == ({visible:1, hidden:2, prerender:3, preview:4}[h$$8.webkitVisibilityState || h$$8.mozVisibilityState || h$$8.visibilityState || ""] || 0);
    k$$2 && !h$$8 && void 0 === a$$58.google_ad_handling_mode && (a$$58.google_ad_handling_mode = I(["XN", "AZ", "S"], ka) || I(["EI"], la));
    k$$2 = a$$58.google_ad_handling_mode ? String(a$$58.google_ad_handling_mode) : null;
    if (Ja(a$$58) && 1 == a$$58.google_unique_id && "XN" != k$$2 && "S" != k$$2) {
      h$$8 = "zrt_ads_frame" + a$$58.google_unique_id;
      var m$$2;
      m$$2 = b$$46.google_page_url;
      if (!m$$2) {
        r: {
          m$$2 = a$$58.document;
          var q$$2 = f$$7 || a$$58.google_ad_width;
          var x$$49 = g$$6 || a$$58.google_ad_height;
          if (a$$58.top == a$$58) {
            m$$2 = !1;
          } else {
            var B$$1 = m$$2.documentElement;
            if (q$$2 && x$$49) {
              var u$$1 = 1;
              var r$$1 = 1;
              a$$58.innerHeight ? (u$$1 = a$$58.innerWidth, r$$1 = a$$58.innerHeight) : B$$1 && B$$1.clientHeight ? (u$$1 = B$$1.clientWidth, r$$1 = B$$1.clientHeight) : m$$2.body && (u$$1 = m$$2.body.clientWidth, r$$1 = m$$2.body.clientHeight);
              if (r$$1 > 2 * x$$49 || u$$1 > 2 * q$$2) {
                m$$2 = !1;
                break r;
              }
            }
            m$$2 = !0;
          }
        }
        m$$2 = m$$2 ? a$$58.document.referrer : a$$58.document.URL;
      }
      m$$2 = encodeURIComponent(m$$2);
      q$$2 = null;
      if ("PC" == k$$2 || "EI" == k$$2 || "AZ" == k$$2) {
        switch(k$$2) {
          case "EI":
            q$$2 = "I";
            break;
          case "AZ":
            q$$2 = "Z";
            break;
          default:
            q$$2 = "K";
        }
        q$$2 = q$$2 + "-" + (m$$2 + "/" + b$$46.google_ad_unit_key + "/" + a$$58.google_unique_id);
      }
      b$$46 = {};
      db(b$$46, f$$7, g$$6, !1);
      b$$46.style = "display:none";
      f$$7 = q$$2;
      b$$46.id = h$$8;
      b$$46.name = h$$8;
      f$$7 = C(A("", "doubleclick"), ["/pagead/html/r20131120/r20130906/zrt_lookup.html", f$$7 ? "#" + encodeURIComponent(f$$7) : ""].join(""));
      b$$46.src = f$$7;
      f$$7 = cb(b$$46);
    } else {
      f$$7 = null;
    }
    g$$6 = (new Date).getTime();
    b$$46 = a$$58.google_top_experiment;
    h$$8 = a$$58.google_async_for_oa_experiment;
    m$$2 = a$$58.google_always_use_delayed_impressions_experiment;
    l$$4 = ["<!doctype html><html><body>", f$$7, "<", e$$15, ">", c$$24, "google_show_ads_impl=true;google_unique_id=", a$$58.google_unique_id, ';google_async_iframe_id="', d$$18, '";google_start_time=', v, ";", b$$46 ? 'google_top_experiment="' + b$$46 + '";' : "", k$$2 ? 'google_ad_handling_mode="' + k$$2 + '";' : "", h$$8 ? 'google_async_for_oa_experiment="' + h$$8 + '";' : "", m$$2 ? 'google_always_use_delayed_impressions_experiment="' + m$$2 + '";' : "", l$$4 ? 'google_append_as_for_format_override="' + 
    l$$4 + '";' : "", "google_bpp=", g$$6 > v ? g$$6 - v : 1, ";google_async_rrc=0;</", e$$15, ">", ab(), "</body></html>"].join("");
    (a$$58.document.getElementById(d$$18) ? Ya : Za)(bb(a$$58, d$$18, l$$4, !0));
  };
  var gb = Math.floor(1E6 * Math.random());
  var hb = function(a$$59) {
    var b$$47 = a$$59.data.split("\n");
    var c$$25 = {};
    var d$$19 = 0;
    for (;d$$19 < b$$47.length;d$$19++) {
      var e$$16 = b$$47[d$$19].indexOf("=");
      -1 != e$$16 && (c$$25[b$$47[d$$19].substr(0, e$$16)] = b$$47[d$$19].substr(e$$16 + 1));
    }
    b$$47 = c$$25[3];
    if (c$$25[1] == gb && (window.google_top_js_status = 4, a$$59.source == top && 0 == b$$47.indexOf(a$$59.origin) && (window.google_top_values = c$$25, window.google_top_js_status = 5), window.google_top_js_callbacks)) {
      a$$59 = 0;
      for (;a$$59 < window.google_top_js_callbacks.length;a$$59++) {
        window.google_top_js_callbacks[a$$59]();
      }
      window.google_top_js_callbacks.length = 0;
    }
  };
  var ib = /([0-9.]+)px/;
  var Z = [{width:120, height:240, format:"vertical"}, {width:120, height:600, format:"vertical"}, {width:125, height:125, format:"rectangle"}, {width:160, height:600, format:"vertical"}, {width:180, height:150, format:"rectangle"}, {width:200, height:200, format:"rectangle"}, {width:234, height:60, format:"horizontal"}, {width:250, height:250, format:"rectangle"}, {width:300, height:250, format:"rectangle"}, {width:300, height:600, format:"vertical"}, {width:320, height:50, format:"horizontal"}, 
  {width:336, height:280, format:"rectangle"}, {width:468, height:60, format:"horizontal"}, {width:728, height:90, format:"horizontal"}, {width:970, height:90, format:"horizontal"}];
  var jb = function(a$$60, b$$48) {
    var c$$26 = ["width", "height"];
    var d$$20 = 0;
    for (;d$$20 < c$$26.length;d$$20++) {
      var e$$17 = "google_ad_" + c$$26[d$$20];
      if (!b$$48.hasOwnProperty(e$$17)) {
        var f$$8 = ib.exec(a$$60[c$$26[d$$20]]);
        f$$8 && (b$$48[e$$17] = Math.round(f$$8[1]));
      }
    }
  };
  var lb = function(a$$61, b$$49, c$$27) {
    Z.sort(function(a$$62, b$$50) {
      return a$$62.width - b$$50.width || a$$62.height - b$$50.height;
    });
    "auto" == b$$49 && (b$$49 = .25 > a$$61 / kb(c$$27) ? "vertical" : "horizontal,rectangle");
    c$$27 = Z.length;
    for (;c$$27--;) {
      if (Z[c$$27].width <= a$$61 && -1 != b$$49.indexOf(Z[c$$27].format)) {
        return Z[c$$27];
      }
    }
    return null;
  };
  var kb = function(a$$63) {
    a$$63 = a$$63.document;
    return a$$63.documentElement.clientWidth || a$$63.body.clientWidth;
  };
  var $ = ["google_analytics_uacct", "google_analytics_domain_name"];
  var mb = function(a$$64) {
    return/(^| )adsbygoogle($| )/.test(a$$64.className) && "done" != a$$64.getAttribute("data-adsbygoogle-status");
  };
  var ob = function(a$$65, b$$51, c$$28) {
    a$$65.style && "none" == a$$65.style.display && (b$$51.google_dn = 1);
    va(c$$28);
    nb(a$$65, b$$51, c$$28);
    var d$$21 = 0;
    for (;d$$21 < $.length;d$$21++) {
      b$$51[$[d$$21]] = b$$51[$[d$$21]] || c$$28[$[d$$21]];
    }
    b$$51.google_loader_used = "aa";
    if ((d$$21 = b$$51.google_ad_output) && "html" != d$$21) {
      throw Error("No support for google_ad_output=" + d$$21);
    }
    K("aa::main", L, function() {
      fb(c$$28, b$$51, a$$65);
    });
  };
  var nb = function(a$$66, b$$52, c$$29) {
    var d$$22 = a$$66.attributes;
    var e$$18 = d$$22.length;
    var f$$9 = 0;
    for (;f$$9 < e$$18;f$$9++) {
      var g$$7 = d$$22[f$$9];
      if (/data-/.test(g$$7.nodeName)) {
        var l$$5 = g$$7.nodeName.replace("data", "google").replace(/-/g, "_");
        b$$52.hasOwnProperty(l$$5) || (b$$52[l$$5] = g$$7.nodeValue);
      }
    }
    d$$22 = b$$52.google_ad_format;
    if ("auto" == d$$22 || /^((^|,)(horizontal|vertical|rectangle))+$/.test(d$$22)) {
      d$$22 = a$$66.offsetWidth;
      e$$18 = b$$52.google_ad_format;
      c$$29 = lb(d$$22, e$$18, c$$29);
      if (!c$$29) {
        throw Error("Cannot find a responsive size for a container of width=" + d$$22 + "px and data-ad-format=" + e$$18);
      }
      b$$52.google_ad_height = c$$29.height;
      b$$52.google_ad_width = 300 < d$$22 && 300 < c$$29.height ? c$$29.width : 1200 < d$$22 ? 1200 : Math.round(d$$22);
      a$$66.style.height = b$$52.google_ad_height + "px";
      delete b$$52.google_ad_format;
      b$$52.google_loader_features_used = 128;
    } else {
      ib.test(a$$66.style.width) && ib.test(a$$66.style.height) ? jb(a$$66.style, b$$52) : (c$$29 = c$$29.getComputedStyle ? c$$29.getComputedStyle(a$$66, null) : a$$66.currentStyle, a$$66.style.width = c$$29.width, a$$66.style.height = c$$29.height, jb(c$$29, b$$52));
    }
  };
  var pb = function(a$$67) {
    var b$$53 = document.getElementsByTagName("ins");
    var c$$30 = 0;
    var d$$23 = b$$53[c$$30];
    for (;c$$30 < b$$53.length;d$$23 = b$$53[++c$$30]) {
      if (mb(d$$23) && (!a$$67 || d$$23.id == a$$67)) {
        return d$$23;
      }
    }
    return null;
  };
  var qb = function(a$$68) {
    var b$$54 = a$$68.element;
    a$$68 = a$$68.params || {};
    if (b$$54) {
      if (!mb(b$$54) && (b$$54 = b$$54.id && pb(b$$54.id), !b$$54)) {
        throw Error("adsbygoogle: 'element' has already been filled.");
      }
      if (!("innerHTML" in b$$54)) {
        throw Error("adsbygoogle.push(): 'element' is not a good DOM element.");
      }
    } else {
      if (b$$54 = pb(), !b$$54) {
        throw Error("adsbygoogle.push(): All ins elements in the DOM with class=adsbygoogle already have ads in them.");
      }
    }
    var c$$31 = window;
    b$$54.setAttribute("data-adsbygoogle-status", "done");
    ob(b$$54, a$$68, c$$31);
  };
  var rb = function() {
    if (!window.google_top_experiment && !window.google_top_js_status) {
      var a$$69 = window;
      if (2 !== (a$$69.top == a$$69 ? 0 : J(a$$69.top) ? 1 : 2)) {
        window.google_top_js_status = 0;
      } else {
        if (top.postMessage) {
          var b$$55;
          try {
            b$$55 = D.top.frames.google_top_static_frame ? !0 : !1;
          } catch (c$$32) {
            b$$55 = !1;
          }
          if (b$$55) {
            if (window.google_top_experiment = I(["jp_c", "jp_zl", "jp_wfpmr"], ja), "jp_c" !== window.google_top_experiment) {
              a$$69 = window;
              a$$69.addEventListener ? a$$69.addEventListener("message", hb, !1) : a$$69.attachEvent && a$$69.attachEvent("onmessage", hb);
              window.google_top_js_status = 3;
              a$$69 = {0:"google_loc_request", 1:gb};
              b$$55 = [];
              var d$$24;
              for (d$$24 in a$$69) {
                b$$55.push(d$$24 + "=" + a$$69[d$$24]);
              }
              top.postMessage(b$$55.join("\n"), "*");
            }
          } else {
            window.google_top_js_status = 2;
          }
        } else {
          window.google_top_js_status = 1;
        }
      }
    }
    if ((d$$24 = window.adsbygoogle) && d$$24.shift) {
      b$$55 = 20;
      for (;(a$$69 = d$$24.shift()) && 0 < b$$55--;) {
        try {
          qb(a$$69);
        } catch (e$$19) {
          throw window.setTimeout(rb, 0), e$$19;
        }
      }
    }
    window.adsbygoogle = {push:qb};
  };
  rb();
})();
(function() {
  function jb$$1(a$$70, b$$56, c$$33, d$$25) {
    d$$25 = d$$25 || document;
    var e$$20 = d$$25.createElement("script");
    e$$20.type = "text/javascript";
    b$$56 && (void 0 !== e$$20.onreadystatechange ? e$$20.onreadystatechange = function() {
      if ("complete" == e$$20.readyState || "loaded" == e$$20.readyState) {
        try {
          b$$56();
        } catch (a$$71) {
        }
      }
    } : e$$20.onload = b$$56);
    c$$33 && (e$$20.id = c$$33);
    e$$20.src = a$$70;
    var f$$10 = d$$25.getElementsByTagName("head")[0];
    if (!f$$10) {
      return!1;
    }
    try {
      window.setTimeout(function() {
        f$$10.appendChild(e$$20);
      }, 0);
    } catch (g$$8) {
      return!1;
    }
    return!0;
  }
  function kb$$1(a$$72, b$$57) {
    return y$$31(a$$72, "load", b$$57);
  }
  function pb$$1(a$$73) {
    return a$$73 in qb$$1 ? qb$$1[a$$73] : qb$$1[a$$73] = -1 != navigator.userAgent.toLowerCase().indexOf(a$$73);
  }
  function rb$$1() {
    return pb$$1("msie") && !window.opera;
  }
  function sb$$1() {
    try {
      return tb();
    } catch (a$$74) {
      return "0";
    }
  }
  function tb() {
    if (navigator.plugins && navigator.mimeTypes.length) {
      var a$$75 = navigator.plugins["Shockwave Flash"];
      if (a$$75 && a$$75.description) {
        return a$$75.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".");
      }
    } else {
      if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
        a$$75 = 3;
        var b$$58 = 1;
        for (;b$$58;) {
          try {
            b$$58 = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + (a$$75 + 1)), a$$75++;
          } catch (c$$34) {
            b$$58 = null;
          }
        }
        return a$$75.toString();
      }
      if (rb$$1()) {
        b$$58 = null;
        try {
          b$$58 = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
        } catch (d$$26) {
          a$$75 = 0;
          try {
            b$$58 = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), a$$75 = 6, b$$58.AllowScriptAccess = "always";
          } catch (e$$21) {
            if (6 == a$$75) {
              return a$$75.toString();
            }
          }
          try {
            b$$58 = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
          } catch (f$$11) {
          }
        }
        if (b$$58) {
          return a$$75 = b$$58.GetVariable("$version").split(" ")[1], a$$75.replace(/,/g, ".");
        }
      }
    }
    return "0";
  }
  function ub(a$$76) {
    var b$$59 = a$$76.google_ad_format;
    return b$$59 ? 0 < b$$59.indexOf("_0ads") : "html" != a$$76.google_ad_output && 0 < a$$76.google_num_radlinks;
  }
  function Ze(a$$77, b$$60, c$$35, d$$27) {
    c$$35 = c$$35 || a$$77.google_ad_width;
    d$$27 = d$$27 || a$$77.google_ad_height;
    if (a$$77.top == a$$77) {
      return!1;
    }
    var e$$22 = b$$60.documentElement;
    if (c$$35 && d$$27) {
      var f$$12 = 1;
      var g$$9 = 1;
      a$$77.innerHeight ? (f$$12 = a$$77.innerWidth, g$$9 = a$$77.innerHeight) : e$$22 && e$$22.clientHeight ? (f$$12 = e$$22.clientWidth, g$$9 = e$$22.clientHeight) : b$$60.body && (f$$12 = b$$60.body.clientWidth, g$$9 = b$$60.body.clientHeight);
      if (g$$9 > 2 * d$$27 || f$$12 > 2 * c$$35) {
        return!1;
      }
    }
    return!0;
  }
  function $e(a$$78, b$$61) {
    x$$50(b$$61, function(b$$62, d$$28) {
      a$$78["google_" + d$$28] = b$$62;
    });
  }
  function bf(a$$79, b$$63) {
    var c$$36 = af();
    return c$$36 ? c$$36 : b$$63 ? a$$79.referrer : a$$79.URL;
  }
  function df(a$$80, b$$64, c$$37) {
    var d$$29 = T$$1.getIframingState(D$$1());
    var e$$23 = 4;
    b$$64 || d$$29 != T$$1.SAME_DOMAIN_IFRAMING ? b$$64 || d$$29 != T$$1.CROSS_DOMAIN_IFRAMING ? b$$64 && d$$29 == T$$1.SAME_DOMAIN_IFRAMING ? e$$23 = 7 : b$$64 && d$$29 == T$$1.CROSS_DOMAIN_IFRAMING && (e$$23 = 8) : e$$23 = 6 : e$$23 = 5;
    a$$80 = !!a$$80.google_referrer_url && !Ye();
    e$$23 += 5 * a$$80;
    c$$37 && (e$$23 |= 16);
    return "" + e$$23;
  }
  function ff(a$$81, b$$65, c$$38) {
    var d$$30 = af();
    return d$$30 ? "" : c$$38 ? a$$81.google_referrer_url : a$$81.google_page_url && a$$81.google_referrer_url ? a$$81.google_referrer_url : b$$65.referrer;
  }
  function gf(a$$82, b$$66, c$$39) {
    a$$82.page_url = bf(b$$66, c$$39);
    a$$82.page_location = null;
  }
  function hf(a$$83, b$$67, c$$40, d$$31) {
    a$$83.page_url = b$$67.google_page_url;
    a$$83.page_location = bf(c$$40, d$$31) || "EMPTY";
  }
  function jf(a$$84) {
    var b$$68 = af();
    return!b$$68 && !!a$$84.google_page_url;
  }
  function kf(a$$85, b$$69) {
    var c$$41 = {};
    var d$$32 = fc(window);
    var e$$24 = cf(d$$32);
    var f$$13 = Ze(D$$1(), b$$69, a$$85.google_ad_width, a$$85.google_ad_height);
    c$$41.iframing = df(a$$85, f$$13, e$$24.isTopUrl);
    if (!a$$85.google_page_url && "yieldmanager" == b$$69.domain) {
      e$$24 = b$$69.URL.substring(b$$69.URL.lastIndexOf("http"));
      for (;-1 < e$$24.indexOf("%");) {
        try {
          e$$24 = decodeURIComponent(e$$24);
        } catch (g$$10) {
          break;
        }
      }
      a$$85.google_page_url = e$$24;
    }
    jf(a$$85) ? hf(c$$41, a$$85, b$$69, f$$13) : gf(c$$41, b$$69, f$$13);
    c$$41.last_modified_time = b$$69.URL == c$$41.page_url ? Date.parse(b$$69.lastModified) / 1E3 : null;
    Ye() ? c$$41.referrer_url = ef(d$$32) : c$$41.referrer_url = ff(a$$85, b$$69, f$$13);
    return c$$41;
  }
  function lf(a$$86) {
    var b$$70 = kf(a$$86, D$$1().document);
    $e(a$$86, b$$70);
  }
  function Eh(a$$87, b$$71, c$$42, d$$33, e$$25) {
    var f$$14 = Math.round((new Date).getTime() / 1E3);
    var g$$11 = window.google_analytics_domain_name;
    a$$87 = "undefined" == typeof g$$11 ? Fh("auto", a$$87) : Fh(g$$11, a$$87);
    var h$$9 = -1 < b$$71.indexOf("__utma=" + a$$87 + ".");
    g$$11 = -1 < b$$71.indexOf("__utmb=" + a$$87);
    var k$$3 = mc("google_persistent_state");
    k$$3 = G$$1(k$$3, 14) || rc(k$$3, {});
    var l$$6 = !1;
    h$$9 ? (c$$42 = b$$71.split("__utma=" + a$$87 + ".")[1].split(";")[0].split("."), g$$11 ? k$$3.sid = c$$42[3] + "" : k$$3.sid || (k$$3.sid = f$$14 + ""), k$$3.vid = c$$42[0] + "." + c$$42[1], k$$3.from_cookie = !0) : (k$$3.sid || (k$$3.sid = f$$14 + ""), k$$3.vid || (l$$6 = !0, k$$3.vid = Gh(b$$71, c$$42, d$$33, e$$25) + "." + f$$14), k$$3.from_cookie = !1);
    k$$3.cid || (b$$71 = Hh(b$$71), l$$6 && b$$71 && -1 != b$$71.search(/^\d+\.\d+$/) ? k$$3.vid = b$$71 : b$$71 != k$$3.vid && (k$$3.cid = b$$71));
    k$$3.dh = a$$87;
    k$$3.hid || (k$$3.hid = Math.round(2147483647 * Math.random()));
    return k$$3;
  }
  function Gh(a$$88, b$$72, c$$43, d$$34) {
    return Math.round(2147483647 * Math.random()) ^ Ih(a$$88, b$$72, c$$43, d$$34) & 2147483647;
  }
  function Ih(a$$89, b$$73, c$$44, d$$35) {
    var e$$26 = [Dh.appName, Dh.version, Dh.language ? Dh.language : Dh.browserLanguage, Dh.platform, Dh.userAgent, Dh.javaEnabled() ? 1 : 0].join("");
    c$$44 ? e$$26 += c$$44.width + "x" + c$$44.height + c$$44.colorDepth : window.java && (c$$44 = java.awt.Toolkit.getDefaultToolkit().getScreenSize(), e$$26 += c$$44.screen.width + "x" + c$$44.screen.height);
    e$$26 += a$$89;
    e$$26 += d$$35 || "";
    a$$89 = e$$26.length;
    for (;0 < b$$73;) {
      e$$26 += b$$73-- ^ a$$89++;
    }
    return Jh(e$$26);
  }
  function Jh(a$$90) {
    var b$$74 = 1;
    var c$$45 = 0;
    var d$$36;
    if (void 0 != a$$90 && "" != a$$90) {
      b$$74 = 0, d$$36 = a$$90.length - 1;
      for (;0 <= d$$36;d$$36--) {
        c$$45 = a$$90.charCodeAt(d$$36), b$$74 = (b$$74 << 6 & 268435455) + c$$45 + (c$$45 << 14), c$$45 = b$$74 & 266338304, b$$74 = 0 != c$$45 ? b$$74 ^ c$$45 >> 21 : b$$74;
      }
    }
    return b$$74;
  }
  function Fh(a$$91, b$$75) {
    if (!a$$91 || "none" == a$$91) {
      return 1;
    }
    a$$91 = String(a$$91);
    "auto" == a$$91 && (a$$91 = b$$75, "www." == a$$91.substring(0, 4) && (a$$91 = a$$91.substring(4, a$$91.length)));
    return Jh(a$$91.toLowerCase());
  }
  function Hh(a$$92) {
    var b$$76 = 999;
    var c$$46 = window.google_analytics_domain_name;
    c$$46 && (c$$46 = 0 == c$$46.indexOf(".") ? c$$46.substr(1) : c$$46, b$$76 = ("" + c$$46).split(".").length);
    var d$$37;
    c$$46 = 999;
    a$$92 = a$$92.split(";");
    var e$$27 = 0;
    for (;e$$27 < a$$92.length;e$$27++) {
      var f$$15 = Kh.exec(a$$92[e$$27]) || Lh.exec(a$$92[e$$27]);
      if (f$$15) {
        if (f$$15[1] == b$$76) {
          return f$$15[2];
        }
        f$$15[1] < c$$46 && (c$$46 = f$$15[1], d$$37 = f$$15[2]);
      }
    }
    return d$$37;
  }
  function ai(a$$93, b$$77, c$$47) {
    var d$$38 = "script";
    ci = fi(a$$93, b$$77);
    if (!ci) {
      a$$93.google_allow_expandable_ads = !1;
      var e$$28 = J$$1().k([K$$1.DIRECT_CALL_RENDER_AD.CONTROL, K$$1.DIRECT_CALL_RENDER_AD.EXPERIMENT], Aa$$1, 4);
    }
    var f$$16 = ci && !zf();
    gi() && (f$$16 = !1);
    f$$16 && b$$77.write("<" + d$$38 + ' src="' + di() + '"></' + d$$38 + ">");
    if (hi(a$$93)) {
      var g$$12 = L$$1(Ja$$1(), "");
      cg(a$$93, g$$12, a$$93.google_ad_handling_mode, xc);
    }
    (a$$93 = f$$16 || c$$47) && rb$$1() ? b$$77.write("<" + d$$38 + ' src="' + L$$1(Vh, "/pagead/render_ads.js") + '"></' + d$$38 + ">") : a$$93 || e$$28 != K$$1.DIRECT_CALL_RENDER_AD.EXPERIMENT ? b$$77.write("<" + d$$38 + '>google_protectAndRun("ads_core.google_render_ad", google_handleError, google_render_ad);</' + d$$38 + ">") : ii();
  }
  function ji(a$$94) {
    return null != a$$94 ? '"' + a$$94 + '"' : '""';
  }
  function fi(a$$95) {
    var b$$78 = a$$95.google_ad_width;
    var c$$48 = a$$95.google_ad_height;
    var d$$39 = D$$1();
    return yf(a$$95, d$$39.document) || Ze(d$$39, d$$39.document, b$$78, c$$48) || Zg(a$$95) ? !1 : !0;
  }
  function Di(a$$96, b$$79, c$$49, d$$40) {
    B$$2 || wb(a$$96);
    var e$$29 = yb(a$$96);
    c$$49 = ki({ifi:e$$29}, c$$49);
    c$$49 = 1991 < c$$49.length ? c$$49.substring(0, 1983) + "&trunc=1" : c$$49;
    c$$49 = c$$49.replace(/%\w?$/, "");
    var f$$17 = "script";
    var g$$13 = Lb(e$$29);
    H$$1();
    "js" != a$$96.google_ad_output && "json_html" != a$$96.google_ad_output || !a$$96.google_ad_request_done && !a$$96.google_radlink_request_done ? "html" == a$$96.google_ad_output && Ci(a$$96, b$$79, c$$49, e$$29, ci, d$$40) : b$$79.write("<" + f$$17 + ' language="JavaScript1.1" src=' + ji(mi(c$$49)) + "></" + f$$17 + ">");
    sc = ga$$1(wi, g$$13, c$$49, a$$96.google_ad_output, a$$96.google_ad_width, a$$96.google_ad_height);
    return c$$49;
  }
  function Ei(a$$97) {
    Bh(a$$97);
  }
  function Oi(a$$98, b$$80) {
    var c$$50 = a$$98.split("|");
    var d$$41 = -1;
    var e$$30 = [];
    var f$$18 = 0;
    for (;f$$18 < c$$50.length;f$$18++) {
      var g$$14 = c$$50[f$$18].split(Ni);
      b$$80[f$$18] || (b$$80[f$$18] = {});
      var h$$10 = "";
      var k$$4 = 0;
      for (;k$$4 < g$$14.length;k$$4++) {
        var l$$7 = g$$14[k$$4];
        "" != l$$7 && (b$$80[f$$18][l$$7] ? h$$10 += "+" + l$$7 : b$$80[f$$18][l$$7] = !0);
      }
      h$$10 = h$$10.slice(1);
      e$$30[f$$18] = h$$10;
      "" != h$$10 && (d$$41 = f$$18);
    }
    c$$50 = "";
    if (-1 < d$$41) {
      f$$18 = 0;
      for (;f$$18 < d$$41;f$$18++) {
        c$$50 += e$$30[f$$18] + "|";
      }
      c$$50 += e$$30[d$$41];
    }
    return c$$50;
  }
  function ii() {
    Wi();
    window.google_loader_features_used && Ae(window.google_loader_features_used);
    (B$$2 ? 1 == yb(window) : !yb(window)) && li();
    Vi();
    var a$$99 = null;
    var b$$81 = "";
    a$$99 = window.google_async_iframe_id;
    var c$$51 = D$$1();
    a$$99 ? a$$99 = c$$51.document.getElementById(a$$99) : (b$$81 = "google_temp_span", a$$99 = Zi(b$$81));
    var d$$42 = Of;
    d$$42 = c$$51.google_top_experiment !== d$$42.EXPERIMENT_ZERO_LATENCY && 3 === c$$51.google_top_js_status;
    var e$$31 = Mh(c$$51);
    if (d$$42 || e$$31 && (e$$31.P() || e$$31.O())) {
      var f$$19 = !1;
      var g$$15 = [];
      d$$42 && g$$15.push(function() {
        return 3 != c$$51.google_top_js_status || f$$19;
      });
      e$$31 && e$$31.P() && g$$15.push(function() {
        return null != e$$31.ca() || e$$31.Ab();
      });
      e$$31 && e$$31.O() && g$$15.push(function() {
        return null != e$$31.$() || null != e$$31.aa() || e$$31.zb();
      });
      var h$$11 = ga$$1(Yi, a$$99, b$$81, e$$31, g$$15);
      d$$42 && (Xi = (new Date).getTime(), c$$51.google_top_js_callbacks = c$$51.google_top_js_callbacks || [], c$$51.google_top_js_callbacks.push(h$$11), b$$81 = function() {
        f$$19 = !0;
        var a$$100 = 0;
        for (;a$$100 < c$$51.google_top_js_callbacks.length;a$$100++) {
          c$$51.google_top_js_callbacks[a$$100] === h$$11 && (c$$51.google_top_js_callbacks.splice(a$$100, 1), h$$11());
        }
      }, window.setTimeout(b$$81, 150));
      e$$31 && e$$31.fb() && e$$31.Gc();
      e$$31 && e$$31.P() && e$$31.nc(h$$11, 1E3);
      e$$31 && e$$31.O() && e$$31.mc(h$$11, 1E3);
    } else {
      Yi(a$$99, b$$81);
    }
  }
  function $h() {
    Ah();
  }
  function bj(a$$101) {
    return window.decodeURIComponent ? decodeURIComponent(a$$101.replace(/\+/g, " ")) : unescape(a$$101);
  }
  function cj(a$$102) {
    var b$$82 = {};
    a$$102 = a$$102.split("?");
    a$$102 = a$$102[a$$102.length - 1].split("&");
    var c$$52 = 0;
    for (;c$$52 < a$$102.length;c$$52++) {
      var d$$43 = a$$102[c$$52].split("=");
      if (d$$43[0]) {
        try {
          b$$82[d$$43[0].toLowerCase()] = 1 < d$$43.length ? bj(d$$43[1]) : "";
        } catch (e$$32) {
        }
      }
    }
    return b$$82;
  }
  function Zh() {
    var a$$103 = window;
    var b$$83 = cj(document.URL);
    b$$83.google_ad_override && (a$$103.google_ad_override = b$$83.google_ad_override, a$$103.google_adtest = "on");
  }
  function ri(a$$104, b$$84, c$$53) {
    a$$104 && (a$$104 = b$$84.getElementById(a$$104)) && c$$53 && "" != c$$53.length && (a$$104.style.visibility = "visible", a$$104.innerHTML = c$$53);
  }
  var m$$3 = this;
  var aa$$1 = function(a$$105, b$$85, c$$54) {
    a$$105 = a$$105.split(".");
    c$$54 = c$$54 || m$$3;
    a$$105[0] in c$$54 || !c$$54.execScript || c$$54.execScript("var " + a$$105[0]);
    var d$$44;
    for (;a$$105.length && (d$$44 = a$$105.shift());) {
      a$$105.length || void 0 === b$$85 ? c$$54 = c$$54[d$$44] ? c$$54[d$$44] : c$$54[d$$44] = {} : c$$54[d$$44] = b$$85;
    }
  };
  var ba$$1 = function(a$$106) {
    var b$$86 = typeof a$$106;
    if ("object" == b$$86) {
      if (a$$106) {
        if (a$$106 instanceof Array) {
          return "array";
        }
        if (a$$106 instanceof Object) {
          return b$$86;
        }
        var c$$55 = Object.prototype.toString.call(a$$106);
        if ("[object Window]" == c$$55) {
          return "object";
        }
        if ("[object Array]" == c$$55 || "number" == typeof a$$106.length && "undefined" != typeof a$$106.splice && "undefined" != typeof a$$106.propertyIsEnumerable && !a$$106.propertyIsEnumerable("splice")) {
          return "array";
        }
        if ("[object Function]" == c$$55 || "undefined" != typeof a$$106.call && "undefined" != typeof a$$106.propertyIsEnumerable && !a$$106.propertyIsEnumerable("call")) {
          return "function";
        }
      } else {
        return "null";
      }
    } else {
      if ("function" == b$$86 && "undefined" == typeof a$$106.call) {
        return "object";
      }
    }
    return b$$86;
  };
  var n$$2 = function(a$$107) {
    return "array" == ba$$1(a$$107);
  };
  var ca$$1 = function(a$$108) {
    var b$$87 = ba$$1(a$$108);
    return "array" == b$$87 || "object" == b$$87 && "number" == typeof a$$108.length;
  };
  var p$$1 = function(a$$109) {
    return "string" == typeof a$$109;
  };
  var q$$3 = function(a$$110) {
    return "number" == typeof a$$110;
  };
  var da$$1 = function(a$$111) {
    var b$$88 = typeof a$$111;
    return "object" == b$$88 && null != a$$111 || "function" == b$$88;
  };
  var ea$$1 = function(a$$112, b$$89, c$$56) {
    return a$$112.call.apply(a$$112.bind, arguments);
  };
  var fa$$1 = function(a$$113, b$$90, c$$57) {
    if (!a$$113) {
      throw Error();
    }
    if (2 < arguments.length) {
      var d$$45 = Array.prototype.slice.call(arguments, 2);
      return function() {
        var c$$58 = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c$$58, d$$45);
        return a$$113.apply(b$$90, c$$58);
      };
    }
    return function() {
      return a$$113.apply(b$$90, arguments);
    };
  };
  var r$$2 = function(a$$114, b$$91, c$$59) {
    r$$2 = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ea$$1 : fa$$1;
    return r$$2.apply(null, arguments);
  };
  var ga$$1 = function(a$$115, b$$92) {
    var c$$60 = Array.prototype.slice.call(arguments, 1);
    return function() {
      var b$$93 = c$$60.slice();
      b$$93.push.apply(b$$93, arguments);
      return a$$115.apply(this, b$$93);
    };
  };
  var ha$$1 = Date.now || function() {
    return+new Date;
  };
  var s$$3 = function(a$$116, b$$94, c$$61) {
    aa$$1(a$$116, b$$94, c$$61);
  };
  var ia$$1 = function(a$$117, b$$95, c$$62) {
    a$$117[b$$95] = c$$62;
  };
  var ja$$1 = function(a$$118, b$$96) {
    function c$$63() {
    }
    c$$63.prototype = b$$96.prototype;
    a$$118.md = b$$96.prototype;
    a$$118.prototype = new c$$63;
    a$$118.prototype.constructor = a$$118;
  };
  var t$$1 = function(a$$119, b$$97) {
    var c$$64 = parseFloat(a$$119);
    return isNaN(c$$64) || 1 < c$$64 || 0 > c$$64 ? b$$97 : c$$64;
  };
  var ka$$1 = function(a$$120, b$$98) {
    return/^true$/.test(a$$120) ? !0 : /^false$/.test(a$$120) ? !1 : b$$98;
  };
  var la$$1 = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/;
  var ma$$1 = function(a$$121, b$$99) {
    if (!a$$121) {
      return b$$99;
    }
    var c$$65 = a$$121.match(la$$1);
    return c$$65 ? c$$65[0] : b$$99;
  };
  var na$$1 = t$$1("0.1", 0);
  var oa$$1 = t$$1("0.02", 0);
  var pa$$1 = t$$1("1", 0);
  var qa$$1 = t$$1("0.04", 0);
  var ra$$1 = t$$1("0.001", 0);
  var sa$$1 = t$$1("", 0);
  var ta$$1 = t$$1("", 0);
  var ua$$1 = t$$1("0.01", 0);
  var va$$1 = t$$1("0.001", 0);
  var wa$$1 = t$$1("0.0", 0);
  var xa$$1 = t$$1("", 0);
  var ya$$1 = t$$1("0.01", 0);
  var za$$1 = t$$1("0.001", 0);
  var Aa$$1 = t$$1("0.001", 0);
  var Ba$$1 = t$$1("", 0);
  var Ca$$1 = t$$1("0.06", 0);
  var Da$$1 = function() {
    var a$$122 = "r20131120";
    return a$$122;
  };
  var Ea$$1 = ka$$1("false", !1);
  var Fa$$1 = ka$$1("false", !1);
  var Ga$$1 = ka$$1("false", !1);
  var Ha$$1 = ka$$1("false", !1);
  var Ia$$1 = ka$$1("true", !1);
  var Ja$$1 = function() {
    return ma$$1("", "doubleclick");
  };
  var Ka$$1 = function() {
    return ma$$1("", "googlesyndication");
  };
  var La$$1 = function(a$$123) {
    return a$$123 ? "googlesyndication" : ma$$1("", "googlesyndication");
  };
  var Ma$$1;
  var Sa$$1 = function(a$$124, b$$100) {
    if (b$$100) {
      return a$$124.replace(Na$$1, "&amp;").replace(Oa$$1, "&lt;").replace(Pa$$1, "&gt;").replace(Qa$$1, "&quot;");
    }
    if (!Ra$$1.test(a$$124)) {
      return a$$124;
    }
    -1 != a$$124.indexOf("&") && (a$$124 = a$$124.replace(Na$$1, "&amp;"));
    -1 != a$$124.indexOf("<") && (a$$124 = a$$124.replace(Oa$$1, "&lt;"));
    -1 != a$$124.indexOf(">") && (a$$124 = a$$124.replace(Pa$$1, "&gt;"));
    -1 != a$$124.indexOf('"') && (a$$124 = a$$124.replace(Qa$$1, "&quot;"));
    return a$$124;
  };
  var Na$$1 = /&/g;
  var Oa$$1 = /</g;
  var Pa$$1 = />/g;
  var Qa$$1 = /\"/g;
  var Ra$$1 = /[&<>\"]/;
  var Va$$1 = function(a$$125) {
    return-1 != a$$125.indexOf("&") ? "document" in m$$3 ? Ta$$1(a$$125) : Ua$$1(a$$125) : a$$125;
  };
  var Ta$$1 = function(a$$126, b$$101) {
    var c$$66 = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'};
    var d$$46;
    d$$46 = b$$101 ? b$$101.createElement("div") : document.createElement("div");
    return a$$126.replace(Wa$$1, function(a$$127, b$$102) {
      var g$$16 = c$$66[a$$127];
      if (g$$16) {
        return g$$16;
      }
      if ("#" == b$$102.charAt(0)) {
        var h$$12 = Number("0" + b$$102.substr(1));
        isNaN(h$$12) || (g$$16 = String.fromCharCode(h$$12));
      }
      g$$16 || (d$$46.innerHTML = a$$127 + " ", g$$16 = d$$46.firstChild.nodeValue.slice(0, -1));
      return c$$66[a$$127] = g$$16;
    });
  };
  var Ua$$1 = function(a$$128) {
    return a$$128.replace(/&([^;]+);/g, function(a$$129, c$$67) {
      switch(c$$67) {
        case "amp":
          return "&";
        case "lt":
          return "<";
        case "gt":
          return ">";
        case "quot":
          return'"';
        default:
          if ("#" == c$$67.charAt(0)) {
            var d$$47 = Number("0" + c$$67.substr(1));
            if (!isNaN(d$$47)) {
              return String.fromCharCode(d$$47);
            }
          }
          return a$$129;
      }
    });
  };
  var Wa$$1 = /&([^;\s<&]+);?/g;
  var Xa$$1 = function(a$$130, b$$103) {
    var c$$68 = b$$103.length;
    var d$$48 = 0;
    for (;d$$48 < c$$68;d$$48++) {
      var e$$33 = 1 == c$$68 ? b$$103 : b$$103.charAt(d$$48);
      if (a$$130.charAt(0) == e$$33 && a$$130.charAt(a$$130.length - 1) == e$$33) {
        return a$$130.substring(1, a$$130.length - 1);
      }
    }
    return a$$130;
  };
  var Ya$$1 = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
  var Za$$1 = {"'":"\\'"};
  var ab$$1 = function(a$$131) {
    a$$131 = String(a$$131);
    if (a$$131.quote) {
      return a$$131.quote();
    }
    var b$$104 = ['"'];
    var c$$69 = 0;
    for (;c$$69 < a$$131.length;c$$69++) {
      var d$$49 = a$$131.charAt(c$$69);
      var e$$34 = d$$49.charCodeAt(0);
      b$$104[c$$69 + 1] = Ya$$1[d$$49] || (31 < e$$34 && 127 > e$$34 ? d$$49 : $a$$1(d$$49));
    }
    b$$104.push('"');
    return b$$104.join("");
  };
  var $a$$1 = function(a$$132) {
    if (a$$132 in Za$$1) {
      return Za$$1[a$$132];
    }
    if (a$$132 in Ya$$1) {
      return Za$$1[a$$132] = Ya$$1[a$$132];
    }
    var b$$105 = a$$132;
    var c$$70 = a$$132.charCodeAt(0);
    if (31 < c$$70 && 127 > c$$70) {
      b$$105 = a$$132;
    } else {
      if (256 > c$$70) {
        if (b$$105 = "\\x", 16 > c$$70 || 256 < c$$70) {
          b$$105 += "0";
        }
      } else {
        b$$105 = "\\u", 4096 > c$$70 && (b$$105 += "0");
      }
      b$$105 += c$$70.toString(16).toUpperCase();
    }
    return Za$$1[a$$132] = b$$105;
  };
  var cb$$1 = function(a$$133, b$$106) {
    var c$$71 = 0;
    var d$$50 = String(a$$133).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split(".");
    var e$$35 = String(b$$106).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split(".");
    var f$$20 = Math.max(d$$50.length, e$$35.length);
    var g$$17 = 0;
    for (;0 == c$$71 && g$$17 < f$$20;g$$17++) {
      var h$$13 = d$$50[g$$17] || "";
      var k$$5 = e$$35[g$$17] || "";
      var l$$8 = RegExp("(\\d*)(\\D*)", "g");
      var z$$3 = RegExp("(\\d*)(\\D*)", "g");
      do {
        var C$$1 = l$$8.exec(h$$13) || ["", "", ""];
        var I$$1 = z$$3.exec(k$$5) || ["", "", ""];
        if (0 == C$$1[0].length && 0 == I$$1[0].length) {
          break;
        }
        c$$71 = 0 == C$$1[1].length ? 0 : parseInt(C$$1[1], 10);
        var xb = 0 == I$$1[1].length ? 0 : parseInt(I$$1[1], 10);
        c$$71 = bb$$1(c$$71, xb) || bb$$1(0 == C$$1[2].length, 0 == I$$1[2].length) || bb$$1(C$$1[2], I$$1[2]);
      } while (0 == c$$71);
    }
    return c$$71;
  };
  var bb$$1 = function(a$$134, b$$107) {
    return a$$134 < b$$107 ? -1 : a$$134 > b$$107 ? 1 : 0;
  };
  var db$$1 = function(a$$135) {
    return String(a$$135).replace(/\-([a-z])/g, function(a$$136, c$$72) {
      return c$$72.toUpperCase();
    });
  };
  var eb$$1 = function(a$$137, b$$108) {
    var c$$73 = p$$1(b$$108) ? String(b$$108).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
    c$$73 = c$$73 ? "|[" + c$$73 + "]+" : "";
    c$$73 = RegExp("(^" + c$$73 + ")([a-z])", "g");
    return a$$137.replace(c$$73, function(a$$138, b$$109, c$$74) {
      return b$$109 + c$$74.toUpperCase();
    });
  };
  var u$$2 = function(a$$139, b$$110) {
    this.width = a$$139;
    this.height = b$$110;
  };
  u$$2.prototype.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  u$$2.prototype.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  u$$2.prototype.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  u$$2.prototype.scale = function(a$$140, b$$111) {
    var c$$75 = q$$3(b$$111) ? b$$111 : a$$140;
    this.width *= a$$140;
    this.height *= c$$75;
    return this;
  };
  var v$$1 = document;
  var w$$6 = window;
  La$$1();
  var x$$50 = function(a$$141, b$$112) {
    var c$$76;
    for (c$$76 in a$$141) {
      Object.prototype.hasOwnProperty.call(a$$141, c$$76) && b$$112.call(null, a$$141[c$$76], c$$76, a$$141);
    }
  };
  var fb$$1 = function(a$$142) {
    return!!a$$142 && "function" == typeof a$$142 && !!a$$142.call;
  };
  var gb$$1 = function(a$$143) {
    return!!a$$143 && ("object" == typeof a$$143 || "function" == typeof a$$143);
  };
  var hb$$1 = function(a$$144, b$$113) {
    if (!a$$144) {
      return!1;
    }
    var c$$77 = !0;
    x$$50(b$$113, function(b$$114, e$$36) {
      c$$77 && e$$36 in a$$144 && typeof b$$114 == typeof a$$144[e$$36] || (c$$77 = !1);
    });
    return c$$77;
  };
  var ib$$1 = function(a$$145, b$$115) {
    if (2 > arguments.length) {
      return a$$145.length;
    }
    var c$$78 = 1;
    var d$$51 = arguments.length;
    for (;c$$78 < d$$51;++c$$78) {
      a$$145.push(arguments[c$$78]);
    }
    return a$$145.length;
  };
  var y$$31 = function(a$$146, b$$116, c$$79, d$$52) {
    return a$$146.addEventListener ? (a$$146.addEventListener(b$$116, c$$79, d$$52 || !1), !0) : a$$146.attachEvent ? (a$$146.attachEvent("on" + b$$116, c$$79), !0) : !1;
  };
  var lb$$1 = function(a$$147, b$$117, c$$80, d$$53, e$$37) {
    c$$80 = r$$2(d$$53, c$$80);
    return y$$31(a$$147, b$$117, c$$80, e$$37) ? c$$80 : null;
  };
  var A$$1 = function(a$$148, b$$118, c$$81, d$$54) {
    return a$$148.removeEventListener ? (a$$148.removeEventListener(b$$118, c$$81, d$$54 || !1), !0) : a$$148.detachEvent ? (a$$148.detachEvent("on" + b$$118, c$$81), !0) : !1;
  };
  var mb$$1 = function(a$$149) {
    "google_onload_fired" in a$$149 || (a$$149.google_onload_fired = !1, kb$$1(a$$149, function() {
      a$$149.google_onload_fired = !0;
    }));
  };
  var nb$$1 = function(a$$150, b$$119) {
    a$$150.google_image_requests || (a$$150.google_image_requests = []);
    var c$$82 = a$$150.document.createElement("img");
    c$$82.src = b$$119;
    a$$150.google_image_requests.push(c$$82);
  };
  var ob$$1 = function(a$$151) {
    a$$151 = a$$151 || window;
    try {
      return a$$151.history.length;
    } catch (b$$120) {
      return 0;
    }
  };
  var qb$$1 = {};
  var vb = function(a$$152, b$$121) {
    if (!(1E-4 > Math.random())) {
      var c$$83 = Math.random();
      if (c$$83 < b$$121) {
        try {
          var d$$55 = new Uint16Array(1);
          window.crypto.getRandomValues(d$$55);
          c$$83 = d$$55[0] / 65536;
        } catch (e$$38) {
          c$$83 = Math.random();
        }
        c$$83 = Math.floor(c$$83 * a$$152.length);
        return a$$152[c$$83];
      }
    }
    return null;
  };
  var wb = function(a$$153) {
    var b$$122 = "google_unique_id";
    a$$153[b$$122] ? ++a$$153[b$$122] : a$$153[b$$122] = 1;
    return a$$153[b$$122];
  };
  var yb = function(a$$154) {
    var b$$123 = "google_unique_id";
    a$$154 = a$$154[b$$123];
    return "number" == typeof a$$154 ? a$$154 : 0;
  };
  var zb = function(a$$155) {
    a$$155.u_tz = -(new Date).getTimezoneOffset();
    a$$155.u_his = ob$$1();
    a$$155.u_java = navigator.javaEnabled();
    window.screen && (a$$155.u_h = window.screen.height, a$$155.u_w = window.screen.width, a$$155.u_ah = window.screen.availHeight, a$$155.u_aw = window.screen.availWidth, a$$155.u_cd = window.screen.colorDepth);
    navigator.plugins && (a$$155.u_nplug = navigator.plugins.length);
    navigator.mimeTypes && (a$$155.u_nmime = navigator.mimeTypes.length);
  };
  var Ab = function(a$$156, b$$124) {
    var c$$84 = a$$156.length;
    if (0 == c$$84) {
      return 0;
    }
    var d$$56 = b$$124 || 305419896;
    var e$$39 = 0;
    for (;e$$39 < c$$84;e$$39++) {
      var f$$21 = a$$156.charCodeAt(e$$39);
      d$$56 = d$$56 ^ (d$$56 << 5) + (d$$56 >> 2) + f$$21 & 4294967295;
    }
    return 0 < d$$56 ? d$$56 : 4294967296 + d$$56;
  };
  var Bb = function(a$$157) {
    var b$$125 = [];
    var c$$85 = 0;
    for (;a$$157 && 25 > c$$85;a$$157 = a$$157.parentNode, ++c$$85) {
      b$$125.push(9 != a$$157.nodeType && a$$157.id || "");
    }
    return b$$125.join();
  };
  var Cb = function(a$$158) {
    var b$$126 = a$$158.parentElement;
    var c$$86 = a$$158.nodeName.toLowerCase();
    if (b$$126) {
      b$$126 = b$$126.childNodes;
      var d$$57 = 0;
      var e$$40 = 0;
      for (;e$$40 < b$$126.length;++e$$40) {
        var f$$22 = b$$126[e$$40];
        if (f$$22.nodeName && f$$22.nodeName.toLowerCase() == c$$86) {
          if (a$$158 == f$$22) {
            return "." + d$$57;
          }
          ++d$$57;
        }
      }
    }
    return "";
  };
  var Db = function(a$$159) {
    var b$$127 = [];
    var c$$87 = 0;
    for (;a$$159 && 25 > c$$87;++c$$87) {
      var d$$58 = 9 != a$$159.nodeType && a$$159.id;
      d$$58 = d$$58 ? "/" + d$$58 : "";
      var e$$41 = a$$159.nodeName && a$$159.nodeName.toLowerCase();
      b$$127.push(e$$41 + d$$58 + Cb(a$$159));
      a$$159 = a$$159.parentElement;
    }
    return b$$127.join();
  };
  var Eb = function(a$$160) {
    var b$$128 = [];
    if (a$$160) {
      try {
        var c$$88 = a$$160.parent;
        var d$$59 = 0;
        for (;c$$88 && c$$88 != a$$160 && 25 > d$$59;++d$$59) {
          var e$$42 = c$$88.frames;
          var f$$23 = 0;
          for (;f$$23 < e$$42.length;++f$$23) {
            if (a$$160 == e$$42[f$$23]) {
              b$$128.push(f$$23);
              break;
            }
          }
          a$$160 = c$$88;
          c$$88 = a$$160.parent;
        }
      } catch (g$$18) {
      }
    }
    return b$$128.join();
  };
  var Gb = function(a$$161, b$$129, c$$89) {
    a$$161 = c$$89 ? a$$161.parentElement : a$$161;
    return Fb(a$$161, b$$129, !0);
  };
  var Fb = function(a$$162, b$$130, c$$90) {
    b$$130 = [b$$130.google_ad_slot, b$$130.google_ad_format, b$$130.google_ad_type, b$$130.google_ad_width, b$$130.google_ad_height];
    c$$90 ? (a$$162 = Bb(a$$162)) && b$$130.push(a$$162) : (b$$130.push(Db(a$$162)), b$$130.push(Eb(w$$6)));
    return Ab(b$$130.join(":")).toString();
  };
  var Hb = function(a$$163) {
    a$$163 = (new Date).getTime() - a$$163;
    return 1E4 > a$$163 ? a$$163 + "" : "M";
  };
  var Ib = function(a$$164) {
    return!!a$$164 && (0 < a$$164.indexOf("?google_debug") || 0 < a$$164.indexOf("&google_debug"));
  };
  var Jb = function(a$$165, b$$131, c$$91) {
    var d$$60 = a$$165.userAgent;
    var e$$43 = a$$165.platform;
    c$$91 = c$$91 || /Win|Mac|Linux|iPad|iPod|iPhone/;
    if (c$$91.test(e$$43) && !/^Opera/.test(d$$60)) {
      c$$91 = (/WebKit\/(\d+)/.exec(d$$60) || [0, 0])[1];
      var f$$24 = (/rv\:(\d+\.\d+)/.exec(d$$60) || [0, 0])[1];
      if (/Win/.test(e$$43) && /MSIE.*Trident/.test(d$$60) && 8 < b$$131.documentMode || !c$$91 && "Gecko" == a$$165.product && 1.7 < f$$24 && !/rv\:1\.8([^.]|\.0)/.test(d$$60) || 524 < c$$91) {
        return!0;
      }
    }
    return!1;
  };
  var Kb = function(a$$166) {
    try {
      return!!a$$166.location.href || "" === a$$166.location.href;
    } catch (b$$132) {
      return!1;
    }
  };
  var Lb = function(a$$167) {
    return "google_ads_frame" + a$$167;
  };
  var Mb = function(a$$168) {
    return function() {
      if (a$$168) {
        var b$$133 = a$$168;
        a$$168 = null;
        b$$133.apply(null, arguments);
      }
    };
  };
  var Nb = function(a$$169, b$$134, c$$92, d$$61) {
    b$$134 = "border:none;height:" + c$$92 + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + b$$134 + "px;background-color:transparent";
    a$$169 = ['<ins style="display:inline-table;', b$$134, '">', '<ins id="', a$$169, '" style="display:block;', b$$134, '">', d$$61, "</ins></ins>"];
    return a$$169.join("");
  };
  var B$$2 = !!window.google_async_iframe_id;
  var Ob = B$$2 && window.parent || window;
  var Pb = {CONTROL:"C", EXPERIMENT:"E"};
  var D$$1 = function() {
    if (B$$2 && !Kb(Ob)) {
      var a$$170 = "." + v$$1.domain;
      for (;2 < a$$170.split(".").length && !Kb(Ob);) {
        v$$1.domain = a$$170 = a$$170.substr(a$$170.indexOf(".") + 1), Ob = window.parent;
      }
      Kb(Ob) || (Ob = window);
    }
    return Ob;
  };
  var Qb = function(a$$171, b$$135, c$$93) {
    var d$$62 = ["<iframe"];
    var e$$44;
    for (e$$44 in a$$171) {
      a$$171.hasOwnProperty(e$$44) && ib$$1(d$$62, e$$44 + "=" + a$$171[e$$44]);
    }
    d$$62.push('style="left:0;position:absolute;top:0;"');
    d$$62.push("></iframe>");
    d$$62 = d$$62.join(" ");
    return a$$171 = Nb(a$$171.id + "_anchor", b$$135, c$$93, d$$62);
  };
  var Rb = function(a$$172, b$$136) {
    var c$$94 = b$$136.id;
    var d$$63 = 0;
    for (;!c$$94 || a$$172.getElementById(c$$94);) {
      c$$94 = "aswift_" + d$$63++;
    }
    b$$136.id = c$$94;
    b$$136.name = c$$94;
  };
  var Sb = function(a$$173, b$$137, c$$95, d$$64) {
    a$$173 = a$$173.document;
    Rb(a$$173, b$$137);
    a$$173 = Number(c$$95.google_ad_width);
    c$$95 = Number(c$$95.google_ad_height);
    d$$64.innerHTML = Qb(b$$137, a$$173, c$$95);
    return b$$137.id;
  };
  var Tb = function(a$$174, b$$138, c$$96) {
    a$$174 = a$$174.document.getElementById(b$$138).contentWindow;
    b$$138 = a$$174.document;
    b$$138.body && b$$138.body.firstChild || (b$$138.open(), a$$174.google_async_iframe_close = !0, b$$138.write(c$$96));
  };
  var Ub = function(a$$175, b$$139, c$$97) {
    a$$175 = a$$175.document.getElementById(b$$139).contentWindow;
    c$$97 = "javascript:" + ab$$1(c$$97);
    a$$175.location.replace(c$$97);
  };
  var Vb = function(a$$176, b$$140, c$$98) {
    var d$$65 = a$$176.document.getElementById(b$$140);
    d$$65 = d$$65.contentWindow;
    Kb(d$$65) ? Tb(a$$176, b$$140, c$$98) : Ub(a$$176, b$$140, c$$98);
  };
  var Wb = function(a$$177) {
    B$$2 && a$$177 != a$$177.parent && a$$177.google_async_iframe_close && a$$177.setTimeout(function() {
      a$$177.document.close();
    }, 0);
  };
  var Xb = Array.prototype;
  var Yb = Xb.indexOf ? function(a$$178, b$$141, c$$99) {
    return Xb.indexOf.call(a$$178, b$$141, c$$99);
  } : function(a$$179, b$$142, c$$100) {
    c$$100 = null == c$$100 ? 0 : 0 > c$$100 ? Math.max(0, a$$179.length + c$$100) : c$$100;
    if (p$$1(a$$179)) {
      return p$$1(b$$142) && 1 == b$$142.length ? a$$179.indexOf(b$$142, c$$100) : -1;
    }
    for (;c$$100 < a$$179.length;c$$100++) {
      if (c$$100 in a$$179 && a$$179[c$$100] === b$$142) {
        return c$$100;
      }
    }
    return-1;
  };
  var Zb = Xb.forEach ? function(a$$180, b$$143, c$$101) {
    Xb.forEach.call(a$$180, b$$143, c$$101);
  } : function(a$$181, b$$144, c$$102) {
    var d$$66 = a$$181.length;
    var e$$45 = p$$1(a$$181) ? a$$181.split("") : a$$181;
    var f$$25 = 0;
    for (;f$$25 < d$$66;f$$25++) {
      f$$25 in e$$45 && b$$144.call(c$$102, e$$45[f$$25], f$$25, a$$181);
    }
  };
  var $b = function(a$$182, b$$145) {
    return 0 <= Yb(a$$182, b$$145);
  };
  var ac = function(a$$183) {
    var b$$146 = a$$183.length;
    if (0 < b$$146) {
      var c$$103 = Array(b$$146);
      var d$$67 = 0;
      for (;d$$67 < b$$146;d$$67++) {
        c$$103[d$$67] = a$$183[d$$67];
      }
      return c$$103;
    }
    return[];
  };
  var bc = function(a$$184, b$$147, c$$104) {
    return 2 >= arguments.length ? Xb.slice.call(a$$184, b$$147) : Xb.slice.call(a$$184, b$$147, c$$104);
  };
  var E$$1 = function(a$$185) {
    this.defaultBucket = [];
    this.layers = {};
    var b$$148 = 0;
    var c$$105 = arguments.length;
    for (;b$$148 < c$$105;++b$$148) {
      this.layers[arguments[b$$148]] = "";
    }
  };
  var cc = function(a$$186) {
    var b$$149 = new E$$1;
    var c$$106 = 0;
    var d$$68 = a$$186.defaultBucket.length;
    for (;c$$106 < d$$68;++c$$106) {
      b$$149.defaultBucket.push(a$$186.defaultBucket[c$$106]);
    }
    x$$50(a$$186.layers, r$$2(E$$1.prototype.Ga, b$$149));
    return b$$149;
  };
  E$$1.prototype.statusz = function() {
    return!0;
  };
  E$$1.prototype.Ga = function(a$$187, b$$150) {
    this.layers[b$$150] = a$$187;
  };
  E$$1.prototype.bb = function(a$$188, b$$151) {
    return "" == a$$188 ? "" : b$$151 ? this.layers.hasOwnProperty(b$$151) ? this.layers[b$$151] = a$$188 : "" : (this.defaultBucket.push(a$$188), a$$188);
  };
  E$$1.prototype.k = function(a$$189, b$$152, c$$107) {
    return this.ac(c$$107) && (a$$189 = vb(a$$189, b$$152)) ? this.bb(a$$189, c$$107) : "";
  };
  E$$1.prototype.ac = function(a$$190) {
    return a$$190 ? this.layers.hasOwnProperty(a$$190) && "" == this.layers[a$$190] : !0;
  };
  E$$1.prototype.m = function(a$$191) {
    return this.layers.hasOwnProperty(a$$191) ? this.layers[a$$191] : "";
  };
  E$$1.prototype.geil = E$$1.prototype.m;
  E$$1.prototype.Ka = function() {
    var a$$192 = [];
    var b$$153 = function(b$$154) {
      "" != b$$154 && a$$192.push(b$$154);
    };
    x$$50(this.layers, b$$153);
    return 0 < this.defaultBucket.length && 0 < a$$192.length ? this.defaultBucket.join(",") + "," + a$$192.join(",") : this.defaultBucket.join(",") + a$$192.join(",");
  };
  var dc = function(a$$193, b$$155) {
    var c$$108 = 0;
    var d$$69 = a$$193;
    var e$$46 = 0;
    for (;a$$193 != a$$193.parent;) {
      if (a$$193 = a$$193.parent, e$$46++, Kb(a$$193)) {
        d$$69 = a$$193, c$$108 = e$$46;
      } else {
        if (b$$155) {
          break;
        }
      }
    }
    return{win:d$$69, level:c$$108};
  };
  var ec = function(a$$194) {
    a$$194 = dc(a$$194, !0);
    return a$$194.win;
  };
  var fc = function(a$$195) {
    a$$195 = dc(a$$195, !1);
    return a$$195.win;
  };
  var gc = null;
  var hc = function() {
    gc || (gc = ec(window));
    return gc;
  };
  var jc = function(a$$196) {
    this.S = a$$196;
    ic(this);
  };
  var kc = {google_persistent_state:!0, google_persistent_state_async:!0};
  var lc = {};
  var mc = function(a$$197) {
    a$$197 = a$$197 && kc[a$$197] ? a$$197 : B$$2 ? "google_persistent_state_async" : "google_persistent_state";
    if (lc[a$$197]) {
      return lc[a$$197];
    }
    if ("google_persistent_state_async" == a$$197) {
      var b$$156 = D$$1();
      var c$$109 = {};
    } else {
      c$$109 = b$$156 = D$$1();
    }
    var d$$70 = b$$156[a$$197];
    return "object" != typeof d$$70 || "object" != typeof d$$70.S ? b$$156[a$$197] = lc[a$$197] = new jc(c$$109) : lc[a$$197] = d$$70;
  };
  var ic = function(a$$198) {
    F$$1(a$$198, 3, null);
    F$$1(a$$198, 4, 0);
    F$$1(a$$198, 5, 0);
    F$$1(a$$198, 6, 0);
    F$$1(a$$198, 7, (new Date).getTime());
    F$$1(a$$198, 8, {});
    F$$1(a$$198, 9, {});
    F$$1(a$$198, 10, {});
    F$$1(a$$198, 11, []);
    F$$1(a$$198, 12, 0);
    F$$1(a$$198, 14, {});
  };
  var nc = function(a$$199) {
    switch(a$$199) {
      case 3:
        return "google_exp_persistent";
      case 4:
        return "google_num_sdo_slots";
      case 5:
        return "google_num_0ad_slots";
      case 6:
        return "google_num_ad_slots";
      case 7:
        return "google_correlator";
      case 8:
        return "google_prev_ad_formats_by_region";
      case 9:
        return "google_prev_ad_slotnames_by_region";
      case 10:
        return "google_num_slots_by_channel";
      case 11:
        return "google_viewed_host_channels";
      case 12:
        return "google_num_slot_to_show";
      case 14:
        return "gaGlobal";
    }
  };
  var G$$1 = function(a$$200, b$$157) {
    var c$$110 = nc(b$$157);
    return c$$110 = a$$200.S[c$$110];
  };
  var oc = function(a$$201, b$$158, c$$111) {
    return a$$201.S[nc(b$$158)] = c$$111;
  };
  var F$$1 = function(a$$202, b$$159, c$$112) {
    a$$202 = a$$202.S;
    b$$159 = nc(b$$159);
    return void 0 === a$$202[b$$159] ? a$$202[b$$159] = c$$112 : a$$202[b$$159];
  };
  var pc = function(a$$203, b$$160) {
    return oc(a$$203, 3, b$$160);
  };
  var qc = function(a$$204, b$$161) {
    return oc(a$$204, 12, b$$161);
  };
  var rc = function(a$$205, b$$162) {
    return oc(a$$205, 14, b$$162);
  };
  var sc;
  var tc;
  var uc;
  var vc = function(a$$206) {
    try {
      return a$$206.statusz();
    } catch (b$$163) {
      return!1;
    }
  };
  var wc = function() {
    if (tc && vc(tc)) {
      return!0;
    }
    var a$$207 = mc();
    return(a$$207 = G$$1(a$$207, 3)) && gb$$1(a$$207) && hb$$1(a$$207, E$$1.prototype) && vc(a$$207) ? (tc = a$$207, !0) : !1;
  };
  var H$$1 = function() {
    if (wc()) {
      var a$$208 = tc;
      return a$$208;
    }
    a$$208 = mc();
    return tc = pc(a$$208, new E$$1(1, 3, 4, 7, 10, 12, 13, 14, 16, 17, 18, 19));
  };
  var J$$1 = function() {
    uc || (uc = cc(H$$1()));
    return uc;
  };
  var xc = function() {
    var a$$209 = J$$1();
    return a$$209 ? a$$209.Ka() : "";
  };
  var K$$1 = {PERISCOPE_FOR_TARGETING:{CONTROL:"317150300", EXPERIMENT_ZERO_LATENCY:"317150301", EXPERIMENT_WAIT_FOR_POST_MESSAGE_RESPONSE:"317150302", CONTROL_REFERER_CLEANUP:"317150303", EXPERIMENT_REFERER_CLEANUP:"317150304"}, EXPANDABLE_MOBILE_UPDATE:{CONTROL:"86860100", EXPERIMENT:"86860101"}, EXPANDABLE_MOBILE_REVERSE:{CONTROL:"86860104", EXPERIMENT:"86860105"}, PREFETCH_AD_HANDLING:{CONTROL_NO_FRAME:"42631020", ALWAYS_ZRT:"42631021", SERIAL_ZRT:"42631022"}, ASYNC_FOR_OPERA_ANDROID:{CONTROL_ANDROID:"33895177", 
  EXPERIMENT_ANDROID:"33895178", CONTROL_ANDROID_CHROME:"33895187", EXPERIMENT_ANDROID_CHROME:"33895188"}, DEVICE_SENSORS:{CONTROL:"586900001", EXPERIMENT_ZERO_LATENCY:"586900002", EXPERIMENT_WAIT_FOR_EVENT_ARRIVAL:"586900003"}, SS:{COUNT_AD_FRAMES_ON_PAGE_CONTROL:"317150310", COUNT_AD_FRAMES_ON_PAGE_EXPERIMENT:"317150311", BROWSER_DIMENSIONS_CONTROL:"317150312", BROWSER_DIMENSIONS_EXPERIMENT:"317150313"}, TOP_URL_REPLACES_MISSING_URL:{CONTROL:"33895310", EXPERIMENT:"33895311"}, ADD_ADK2:{CONTROL:"33895400", 
  EXPERIMENT:"33895401"}, ASYNC_EXPANSION_EMBED:{CONTROL:"42631004", EXPERIMENT:"42631005"}, JS_RNG:{CONTROL:"42631002", EXPERIMENT:"42631003"}, DIRECT_CALL_RENDER_AD:{CONTROL:"33895322", EXPERIMENT:"33895323"}, ALWAYS_USE_DELAYED_IMPRESSIONS:{CONTROL:"33895330", EXPERIMENT:"33895331"}, PRERENDERING_DELAYED_IMPRESSION:{CONTROL:"33895332", EXPERIMENT:"33895333"}, APPEND_AS_FOR_FORMAT_OVERRIDE:{CONTROL:"373855270", EXPERIMENT:"373855271"}, SEND_LOAD_TIME_PINGBACKS:{EXPERIMENT:"947190536"}};
  var yc = {google:1, googlegroups:1, gmail:1, googlemail:1, googleimages:1, googleprint:1};
  var zc = /PyvSearchAfcNewTemplate/;
  var Ac = function(a$$210) {
    a$$210 = a$$210.google_ad_channel;
    return zc.test(a$$210) ? !0 : !1;
  };
  var Bc = function(a$$211) {
    var b$$164 = a$$211.google_page_location || a$$211.google_page_url;
    "EMPTY" == b$$164 && (b$$164 = a$$211.google_page_url);
    if (Ac(a$$211)) {
      return!0;
    }
    if (Ga$$1 || !b$$164) {
      return!1;
    }
    b$$164 = b$$164.toString();
    0 == b$$164.indexOf("http://") ? b$$164 = b$$164.substring(7, b$$164.length) : 0 == b$$164.indexOf("https://") && (b$$164 = b$$164.substring(8, b$$164.length));
    a$$211 = b$$164.indexOf("/");
    -1 == a$$211 && (a$$211 = b$$164.length);
    b$$164 = b$$164.substring(0, a$$211);
    b$$164 = b$$164.split(".");
    a$$211 = !1;
    3 <= b$$164.length && (a$$211 = b$$164[b$$164.length - 3] in yc);
    2 <= b$$164.length && (a$$211 = a$$211 || b$$164[b$$164.length - 2] in yc);
    return a$$211;
  };
  var L$$1 = function(a$$212, b$$165, c$$113) {
    c$$113 || (c$$113 = Ha$$1 ? "https" : "http");
    return[c$$113, "://", a$$212, b$$165].join("");
  };
  var M$$1 = function(a$$213, b$$166) {
    this.x = void 0 !== a$$213 ? a$$213 : 0;
    this.y = void 0 !== b$$166 ? b$$166 : 0;
  };
  var Cc = function(a$$214, b$$167) {
    return new M$$1(a$$214.x + b$$167.x, a$$214.y + b$$167.y);
  };
  M$$1.prototype.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  M$$1.prototype.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  M$$1.prototype.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  M$$1.prototype.translate = function(a$$215, b$$168) {
    a$$215 instanceof M$$1 ? (this.x += a$$215.x, this.y += a$$215.y) : (this.x += a$$215, q$$3(b$$168) && (this.y += b$$168));
    return this;
  };
  M$$1.prototype.scale = function(a$$216, b$$169) {
    var c$$114 = q$$3(b$$169) ? b$$169 : a$$216;
    this.x *= a$$216;
    this.y *= c$$114;
    return this;
  };
  var Dc = function(a$$217, b$$170, c$$115) {
    var d$$71;
    for (d$$71 in a$$217) {
      b$$170.call(c$$115, a$$217[d$$71], d$$71, a$$217);
    }
  };
  var Ec = function(a$$218, b$$171) {
    var c$$116;
    for (c$$116 in a$$218) {
      if (a$$218[c$$116] == b$$171) {
        return!0;
      }
    }
    return!1;
  };
  var Fc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  var Gc = function(a$$219, b$$172) {
    var c$$117;
    var d$$72;
    var e$$47 = 1;
    for (;e$$47 < arguments.length;e$$47++) {
      d$$72 = arguments[e$$47];
      for (c$$117 in d$$72) {
        a$$219[c$$117] = d$$72[c$$117];
      }
      var f$$26 = 0;
      for (;f$$26 < Fc.length;f$$26++) {
        c$$117 = Fc[f$$26], Object.prototype.hasOwnProperty.call(d$$72, c$$117) && (a$$219[c$$117] = d$$72[c$$117]);
      }
    }
  };
  var Hc;
  var Ic;
  var Jc;
  var Kc;
  var Lc = function() {
    return m$$3.navigator ? m$$3.navigator.userAgent : null;
  };
  var Mc = function() {
    Kc = Jc = Ic = Hc = !1;
    var a$$220;
    if (a$$220 = Lc()) {
      var b$$173 = m$$3.navigator;
      Hc = 0 == a$$220.lastIndexOf("Opera", 0);
      Ic = !Hc && (-1 != a$$220.indexOf("MSIE") || -1 != a$$220.indexOf("Trident"));
      Jc = !Hc && -1 != a$$220.indexOf("WebKit");
      Kc = !Hc && !Jc && !Ic && "Gecko" == b$$173.product;
    }
  };
  Mc();
  var Nc = Hc;
  var N$$1 = Ic;
  var Oc = Kc;
  var Pc = Jc;
  var Rc = function() {
    var a$$221 = "";
    var b$$174;
    Nc && m$$3.opera ? (a$$221 = m$$3.opera.version, a$$221 = "function" == typeof a$$221 ? a$$221() : a$$221) : (Oc ? b$$174 = /rv\:([^\);]+)(\)|;)/ : N$$1 ? b$$174 = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Pc && (b$$174 = /WebKit\/(\S+)/), b$$174 && (a$$221 = (a$$221 = b$$174.exec(Lc())) ? a$$221[1] : ""));
    return N$$1 && (b$$174 = Qc(), b$$174 > parseFloat(a$$221)) ? String(b$$174) : a$$221;
  };
  var Qc = function() {
    var a$$222 = m$$3.document;
    return a$$222 ? a$$222.documentMode : void 0;
  };
  var Sc = Rc();
  var Tc = {};
  var Uc = function(a$$223) {
    return Tc[a$$223] || (Tc[a$$223] = 0 <= cb$$1(Sc, a$$223));
  };
  var Vc = function() {
    var a$$224 = m$$3.document;
    if (a$$224 && N$$1) {
      var b$$175 = Qc();
      return b$$175 || ("CSS1Compat" == a$$224.compatMode ? parseInt(Sc, 10) : 5);
    }
  }();
  var Wc = !N$$1 || N$$1 && 9 <= Vc;
  !Oc && !N$$1 || N$$1 && N$$1 && 9 <= Vc || Oc && Uc("1.9.1");
  var Xc = N$$1 && !Uc("9");
  var Yc = function(a$$225, b$$176) {
    a$$225.className = b$$176;
  };
  var Zc = function(a$$226) {
    a$$226 = a$$226.className;
    return p$$1(a$$226) && a$$226.match(/\S+/g) || [];
  };
  var ad = function(a$$227, b$$177) {
    var c$$118 = Zc(a$$227);
    var d$$73 = bc(arguments, 1);
    var e$$48 = c$$118.length + d$$73.length;
    $c(c$$118, d$$73);
    Yc(a$$227, c$$118.join(" "));
    return c$$118.length == e$$48;
  };
  var $c = function(a$$228, b$$178) {
    var c$$119 = 0;
    for (;c$$119 < b$$178.length;c$$119++) {
      $b(a$$228, b$$178[c$$119]) || a$$228.push(b$$178[c$$119]);
    }
  };
  var bd = function(a$$229, b$$179) {
    return $b(Zc(a$$229), b$$179);
  };
  var dd = function(a$$230) {
    return a$$230 ? new O$$1(cd(a$$230)) : Ma$$1 || (Ma$$1 = new O$$1);
  };
  var fd = function(a$$231, b$$180) {
    Dc(b$$180, function(b$$181, d$$74) {
      "style" == d$$74 ? a$$231.style.cssText = b$$181 : "class" == d$$74 ? a$$231.className = b$$181 : "for" == d$$74 ? a$$231.htmlFor = b$$181 : d$$74 in ed ? a$$231.setAttribute(ed[d$$74], b$$181) : 0 == d$$74.lastIndexOf("aria-", 0) || 0 == d$$74.lastIndexOf("data-", 0) ? a$$231.setAttribute(d$$74, b$$181) : a$$231[d$$74] = b$$181;
    });
  };
  var ed = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
  var gd = function(a$$232) {
    a$$232 = a$$232.document;
    a$$232 = "CSS1Compat" == a$$232.compatMode ? a$$232.documentElement : a$$232.body;
    return new u$$2(a$$232.clientWidth, a$$232.clientHeight);
  };
  var hd = function(a$$233) {
    var b$$182 = Pc || "CSS1Compat" != a$$233.compatMode ? a$$233.body || a$$233.documentElement : a$$233.documentElement;
    a$$233 = a$$233.parentWindow || a$$233.defaultView;
    return N$$1 && Uc("10") && a$$233.pageYOffset != b$$182.scrollTop ? new M$$1(b$$182.scrollLeft, b$$182.scrollTop) : new M$$1(a$$233.pageXOffset || b$$182.scrollLeft, a$$233.pageYOffset || b$$182.scrollTop);
  };
  var id = function(a$$234) {
    return a$$234 ? a$$234.parentWindow || a$$234.defaultView : window;
  };
  var kd = function(a$$235, b$$183, c$$120) {
    return jd(document, arguments);
  };
  var jd = function(a$$236, b$$184) {
    var c$$121 = b$$184[0];
    var d$$75 = b$$184[1];
    if (!Wc && d$$75 && (d$$75.name || d$$75.type)) {
      c$$121 = ["<", c$$121];
      d$$75.name && c$$121.push(' name="', Sa$$1(d$$75.name), '"');
      if (d$$75.type) {
        c$$121.push(' type="', Sa$$1(d$$75.type), '"');
        var e$$49 = {};
        Gc(e$$49, d$$75);
        delete e$$49.type;
        d$$75 = e$$49;
      }
      c$$121.push(">");
      c$$121 = c$$121.join("");
    }
    c$$121 = a$$236.createElement(c$$121);
    d$$75 && (p$$1(d$$75) ? c$$121.className = d$$75 : n$$2(d$$75) ? ad.apply(null, [c$$121].concat(d$$75)) : fd(c$$121, d$$75));
    2 < b$$184.length && ld(a$$236, c$$121, b$$184, 2);
    return c$$121;
  };
  var ld = function(a$$237, b$$185, c$$122, d$$76) {
    function e$$50(c$$123) {
      c$$123 && b$$185.appendChild(p$$1(c$$123) ? a$$237.createTextNode(c$$123) : c$$123);
    }
    for (;d$$76 < c$$122.length;d$$76++) {
      var f$$27 = c$$122[d$$76];
      !ca$$1(f$$27) || da$$1(f$$27) && 0 < f$$27.nodeType ? e$$50(f$$27) : Zb(md(f$$27) ? ac(f$$27) : f$$27, e$$50);
    }
  };
  var nd = function(a$$238) {
    if (1 != a$$238.nodeType) {
      return!1;
    }
    switch(a$$238.tagName) {
      case "APPLET":
      ;
      case "AREA":
      ;
      case "BASE":
      ;
      case "BR":
      ;
      case "COL":
      ;
      case "COMMAND":
      ;
      case "EMBED":
      ;
      case "FRAME":
      ;
      case "HR":
      ;
      case "IMG":
      ;
      case "INPUT":
      ;
      case "IFRAME":
      ;
      case "ISINDEX":
      ;
      case "KEYGEN":
      ;
      case "LINK":
      ;
      case "NOFRAMES":
      ;
      case "NOSCRIPT":
      ;
      case "META":
      ;
      case "OBJECT":
      ;
      case "PARAM":
      ;
      case "SCRIPT":
      ;
      case "SOURCE":
      ;
      case "STYLE":
      ;
      case "TRACK":
      ;
      case "WBR":
        return!1;
    }
    return!0;
  };
  var od = function(a$$239, b$$186) {
    a$$239.appendChild(b$$186);
  };
  var pd = function(a$$240, b$$187) {
    ld(cd(a$$240), a$$240, arguments, 1);
  };
  var qd = function(a$$241) {
    return a$$241 && a$$241.parentNode ? a$$241.parentNode.removeChild(a$$241) : null;
  };
  var rd = function(a$$242, b$$188) {
    if (a$$242.contains && 1 == b$$188.nodeType) {
      return a$$242 == b$$188 || a$$242.contains(b$$188);
    }
    if ("undefined" != typeof a$$242.compareDocumentPosition) {
      return a$$242 == b$$188 || Boolean(a$$242.compareDocumentPosition(b$$188) & 16);
    }
    for (;b$$188 && a$$242 != b$$188;) {
      b$$188 = b$$188.parentNode;
    }
    return b$$188 == a$$242;
  };
  var cd = function(a$$243) {
    return 9 == a$$243.nodeType ? a$$243 : a$$243.ownerDocument || a$$243.document;
  };
  var sd = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1};
  var td = {IMG:" ", BR:"\n"};
  var vd = function(a$$244) {
    if (Xc && "innerText" in a$$244) {
      a$$244 = a$$244.innerText.replace(/(\r\n|\r|\n)/g, "\n");
    } else {
      var b$$189 = [];
      ud(a$$244, b$$189, !0);
      a$$244 = b$$189.join("");
    }
    a$$244 = a$$244.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a$$244 = a$$244.replace(/\u200B/g, "");
    Xc || (a$$244 = a$$244.replace(/ +/g, " "));
    " " != a$$244 && (a$$244 = a$$244.replace(/^\s*/, ""));
    return a$$244;
  };
  var ud = function(a$$245, b$$190, c$$124) {
    if (!(a$$245.nodeName in sd)) {
      if (3 == a$$245.nodeType) {
        c$$124 ? b$$190.push(String(a$$245.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b$$190.push(a$$245.nodeValue);
      } else {
        if (a$$245.nodeName in td) {
          b$$190.push(td[a$$245.nodeName]);
        } else {
          a$$245 = a$$245.firstChild;
          for (;a$$245;) {
            ud(a$$245, b$$190, c$$124), a$$245 = a$$245.nextSibling;
          }
        }
      }
    }
  };
  var md = function(a$$246) {
    if (a$$246 && "number" == typeof a$$246.length) {
      if (da$$1(a$$246)) {
        return "function" == typeof a$$246.item || "string" == typeof a$$246.item;
      }
      if ("function" == ba$$1(a$$246)) {
        return "function" == typeof a$$246.item;
      }
    }
    return!1;
  };
  var O$$1 = function(a$$247) {
    this.V = a$$247 || m$$3.document || document;
  };
  O$$1.prototype.createElement = function(a$$248) {
    return this.V.createElement(a$$248);
  };
  O$$1.prototype.createTextNode = function(a$$249) {
    return this.V.createTextNode(String(a$$249));
  };
  O$$1.prototype.$b = function() {
    return "CSS1Compat" == this.V.compatMode;
  };
  O$$1.prototype.Ja = function() {
    return hd(this.V);
  };
  O$$1.prototype.appendChild = od;
  O$$1.prototype.append = pd;
  O$$1.prototype.canHaveChildren = nd;
  O$$1.prototype.removeNode = qd;
  O$$1.prototype.contains = rd;
  var P$$1 = function(a$$250, b$$191, c$$125, d$$77) {
    this.top = a$$250;
    this.right = b$$191;
    this.bottom = c$$125;
    this.left = d$$77;
  };
  P$$1.prototype.contains = function(a$$251) {
    return this && a$$251 ? a$$251 instanceof P$$1 ? a$$251.left >= this.left && a$$251.right <= this.right && a$$251.top >= this.top && a$$251.bottom <= this.bottom : a$$251.x >= this.left && a$$251.x <= this.right && a$$251.y >= this.top && a$$251.y <= this.bottom : !1;
  };
  P$$1.prototype.expand = function(a$$252, b$$192, c$$126, d$$78) {
    da$$1(a$$252) ? (this.top -= a$$252.top, this.right += a$$252.right, this.bottom += a$$252.bottom, this.left -= a$$252.left) : (this.top -= a$$252, this.right += b$$192, this.bottom += c$$126, this.left -= d$$78);
    return this;
  };
  P$$1.prototype.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this;
  };
  P$$1.prototype.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this;
  };
  P$$1.prototype.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this;
  };
  P$$1.prototype.translate = function(a$$253, b$$193) {
    a$$253 instanceof M$$1 ? (this.left += a$$253.x, this.right += a$$253.x, this.top += a$$253.y, this.bottom += a$$253.y) : (this.left += a$$253, this.right += a$$253, q$$3(b$$193) && (this.top += b$$193, this.bottom += b$$193));
    return this;
  };
  P$$1.prototype.scale = function(a$$254, b$$194) {
    var c$$127 = q$$3(b$$194) ? b$$194 : a$$254;
    this.left *= a$$254;
    this.right *= a$$254;
    this.top *= c$$127;
    this.bottom *= c$$127;
    return this;
  };
  var Q$$1 = function(a$$255, b$$195, c$$128) {
    p$$1(b$$195) ? wd(a$$255, c$$128, b$$195) : Dc(b$$195, ga$$1(wd, a$$255));
  };
  var wd = function(a$$256, b$$196, c$$129) {
    (c$$129 = xd(a$$256, c$$129)) && (a$$256.style[c$$129] = b$$196);
  };
  var xd = function(a$$257, b$$197) {
    var c$$130 = db$$1(b$$197);
    if (void 0 === a$$257.style[c$$130]) {
      var d$$79 = (Pc ? "Webkit" : Oc ? "Moz" : N$$1 ? "ms" : Nc ? "O" : null) + eb$$1(b$$197);
      if (void 0 !== a$$257.style[d$$79]) {
        return d$$79;
      }
    }
    return c$$130;
  };
  var yd = function(a$$258, b$$198) {
    var c$$131 = cd(a$$258);
    return c$$131.defaultView && c$$131.defaultView.getComputedStyle && (c$$131 = c$$131.defaultView.getComputedStyle(a$$258, null)) ? c$$131[b$$198] || c$$131.getPropertyValue(b$$198) || "" : "";
  };
  var R$$1 = function(a$$259, b$$199) {
    return yd(a$$259, b$$199) || (a$$259.currentStyle ? a$$259.currentStyle[b$$199] : null) || a$$259.style && a$$259.style[b$$199];
  };
  var zd = function(a$$260) {
    a$$260 = a$$260 ? cd(a$$260) : document;
    return!N$$1 || N$$1 && 9 <= Vc || dd(a$$260).$b() ? a$$260.documentElement : a$$260.body;
  };
  var Ad = function(a$$261) {
    var b$$200;
    try {
      b$$200 = a$$261.getBoundingClientRect();
    } catch (c$$132) {
      return{left:0, top:0, right:0, bottom:0};
    }
    N$$1 && a$$261.ownerDocument.body && (a$$261 = a$$261.ownerDocument, b$$200.left -= a$$261.documentElement.clientLeft + a$$261.body.clientLeft, b$$200.top -= a$$261.documentElement.clientTop + a$$261.body.clientTop);
    return b$$200;
  };
  var Bd = function(a$$262) {
    if (N$$1 && !(N$$1 && 8 <= Vc)) {
      return a$$262.offsetParent;
    }
    var b$$201 = cd(a$$262);
    var c$$133 = R$$1(a$$262, "position");
    var d$$80 = "fixed" == c$$133 || "absolute" == c$$133;
    a$$262 = a$$262.parentNode;
    for (;a$$262 && a$$262 != b$$201;a$$262 = a$$262.parentNode) {
      if (c$$133 = R$$1(a$$262, "position"), d$$80 = d$$80 && "static" == c$$133 && a$$262 != b$$201.documentElement && a$$262 != b$$201.body, !d$$80 && (a$$262.scrollWidth > a$$262.clientWidth || a$$262.scrollHeight > a$$262.clientHeight || "fixed" == c$$133 || "absolute" == c$$133 || "relative" == c$$133)) {
        return a$$262;
      }
    }
    return null;
  };
  var Cd = function(a$$263) {
    var b$$202;
    var c$$134 = cd(a$$263);
    var d$$81 = R$$1(a$$263, "position");
    var e$$51 = Oc && c$$134.getBoxObjectFor && !a$$263.getBoundingClientRect && "absolute" == d$$81 && (b$$202 = c$$134.getBoxObjectFor(a$$263)) && (0 > b$$202.screenX || 0 > b$$202.screenY);
    var f$$28 = new M$$1(0, 0);
    var g$$19 = zd(c$$134);
    if (a$$263 == g$$19) {
      return f$$28;
    }
    if (a$$263.getBoundingClientRect) {
      b$$202 = Ad(a$$263), a$$263 = dd(c$$134).Ja(), f$$28.x = b$$202.left + a$$263.x, f$$28.y = b$$202.top + a$$263.y;
    } else {
      if (c$$134.getBoxObjectFor && !e$$51) {
        b$$202 = c$$134.getBoxObjectFor(a$$263), a$$263 = c$$134.getBoxObjectFor(g$$19), f$$28.x = b$$202.screenX - a$$263.screenX, f$$28.y = b$$202.screenY - a$$263.screenY;
      } else {
        b$$202 = a$$263;
        do {
          f$$28.x += b$$202.offsetLeft;
          f$$28.y += b$$202.offsetTop;
          b$$202 != a$$263 && (f$$28.x += b$$202.clientLeft || 0, f$$28.y += b$$202.clientTop || 0);
          if (Pc && "fixed" == R$$1(b$$202, "position")) {
            f$$28.x += c$$134.body.scrollLeft;
            f$$28.y += c$$134.body.scrollTop;
            break;
          }
          b$$202 = b$$202.offsetParent;
        } while (b$$202 && b$$202 != a$$263);
        if (Nc || Pc && "absolute" == d$$81) {
          f$$28.y -= c$$134.body.offsetTop;
        }
        b$$202 = a$$263;
        for (;(b$$202 = Bd(b$$202)) && b$$202 != c$$134.body && b$$202 != g$$19;) {
          f$$28.x -= b$$202.scrollLeft, Nc && "TR" == b$$202.tagName || (f$$28.y -= b$$202.scrollTop);
        }
      }
    }
    return f$$28;
  };
  var Ed = function(a$$264, b$$203) {
    var c$$135 = new M$$1(0, 0);
    var d$$82 = id(cd(a$$264));
    var e$$52 = a$$264;
    do {
      var f$$29 = d$$82 == b$$203 ? Cd(e$$52) : Dd(e$$52);
      c$$135.x += f$$29.x;
      c$$135.y += f$$29.y;
    } while (d$$82 && d$$82 != b$$203 && (e$$52 = d$$82.frameElement) && (d$$82 = d$$82.parent));
    return c$$135;
  };
  var Dd = function(a$$265) {
    var b$$204;
    if (a$$265.getBoundingClientRect) {
      b$$204 = Ad(a$$265), b$$204 = new M$$1(b$$204.left, b$$204.top);
    } else {
      b$$204 = dd(a$$265).Ja();
      var c$$136 = Cd(a$$265);
      b$$204 = new M$$1(c$$136.x - b$$204.x, c$$136.y - b$$204.y);
    }
    return Oc && !Uc(12) ? Cc(b$$204, Fd(a$$265)) : b$$204;
  };
  var Id = function(a$$266, b$$205, c$$137) {
    if (b$$205 instanceof u$$2) {
      c$$137 = b$$205.height, b$$205 = b$$205.width;
    } else {
      if (void 0 == c$$137) {
        throw Error("missing height argument");
      }
    }
    Gd(a$$266, b$$205);
    Hd(a$$266, c$$137);
  };
  var Jd = function(a$$267, b$$206) {
    "number" == typeof a$$267 && (a$$267 = (b$$206 ? Math.round(a$$267) : a$$267) + "px");
    return a$$267;
  };
  var Hd = function(a$$268, b$$207) {
    a$$268.style.height = Jd(b$$207, !0);
  };
  var Gd = function(a$$269, b$$208) {
    a$$269.style.width = Jd(b$$208, !0);
  };
  var Kd = function(a$$270, b$$209) {
    if ("none" != R$$1(b$$209, "display")) {
      return a$$270(b$$209);
    }
    var c$$138 = b$$209.style;
    var d$$83 = c$$138.display;
    var e$$53 = c$$138.visibility;
    var f$$30 = c$$138.position;
    c$$138.visibility = "hidden";
    c$$138.position = "absolute";
    c$$138.display = "inline";
    var g$$20 = a$$270(b$$209);
    c$$138.display = d$$83;
    c$$138.position = f$$30;
    c$$138.visibility = e$$53;
    return g$$20;
  };
  var Ld = function(a$$271) {
    var b$$210 = a$$271.offsetWidth;
    var c$$139 = a$$271.offsetHeight;
    var d$$84 = Pc && !b$$210 && !c$$139;
    return(void 0 === b$$210 || d$$84) && a$$271.getBoundingClientRect ? (a$$271 = Ad(a$$271), new u$$2(a$$271.right - a$$271.left, a$$271.bottom - a$$271.top)) : new u$$2(b$$210, c$$139);
  };
  var Md = function(a$$272) {
    var b$$211 = a$$272.style;
    a$$272 = "";
    "opacity" in b$$211 ? a$$272 = b$$211.opacity : "MozOpacity" in b$$211 ? a$$272 = b$$211.MozOpacity : "filter" in b$$211 && (b$$211 = b$$211.filter.match(/alpha\(opacity=([\d.]+)\)/)) && (a$$272 = String(b$$211[1] / 100));
    return "" == a$$272 ? a$$272 : Number(a$$272);
  };
  var Nd = function(a$$273, b$$212) {
    var c$$140 = a$$273.style;
    "opacity" in c$$140 ? c$$140.opacity = b$$212 : "MozOpacity" in c$$140 ? c$$140.MozOpacity = b$$212 : "filter" in c$$140 && (c$$140.filter = "" === b$$212 ? "" : "alpha(opacity=" + 100 * b$$212 + ")");
  };
  var Od = function(a$$274, b$$213, c$$141, d$$85) {
    if (/^\d+px?$/.test(b$$213)) {
      return parseInt(b$$213, 10);
    }
    var e$$54 = a$$274.style[c$$141];
    var f$$31 = a$$274.runtimeStyle[c$$141];
    a$$274.runtimeStyle[c$$141] = a$$274.currentStyle[c$$141];
    a$$274.style[c$$141] = b$$213;
    b$$213 = a$$274.style[d$$85];
    a$$274.style[c$$141] = e$$54;
    a$$274.runtimeStyle[c$$141] = f$$31;
    return b$$213;
  };
  var Pd = function(a$$275, b$$214) {
    var c$$142 = a$$275.currentStyle ? a$$275.currentStyle[b$$214] : null;
    return c$$142 ? Od(a$$275, c$$142, "left", "pixelLeft") : 0;
  };
  var Qd = function(a$$276, b$$215) {
    if (N$$1) {
      var c$$143 = Pd(a$$276, b$$215 + "Left");
      var d$$86 = Pd(a$$276, b$$215 + "Right");
      var e$$55 = Pd(a$$276, b$$215 + "Top");
      var f$$32 = Pd(a$$276, b$$215 + "Bottom");
      return new P$$1(e$$55, d$$86, f$$32, c$$143);
    }
    c$$143 = yd(a$$276, b$$215 + "Left");
    d$$86 = yd(a$$276, b$$215 + "Right");
    e$$55 = yd(a$$276, b$$215 + "Top");
    f$$32 = yd(a$$276, b$$215 + "Bottom");
    return new P$$1(parseFloat(e$$55), parseFloat(d$$86), parseFloat(f$$32), parseFloat(c$$143));
  };
  var Rd = function(a$$277) {
    var b$$216 = cd(a$$277);
    var c$$144 = "";
    if (b$$216.body.createTextRange) {
      b$$216 = b$$216.body.createTextRange();
      b$$216.moveToElementText(a$$277);
      try {
        c$$144 = b$$216.queryCommandValue("FontName");
      } catch (d$$87) {
        c$$144 = "";
      }
    }
    c$$144 || (c$$144 = R$$1(a$$277, "fontFamily"));
    a$$277 = c$$144.split(",");
    1 < a$$277.length && (c$$144 = a$$277[0]);
    return Xa$$1(c$$144, "\"'");
  };
  var Sd = /[^\d]+$/;
  var Td = function(a$$278) {
    return(a$$278 = a$$278.match(Sd)) && a$$278[0] || null;
  };
  var Ud = {cm:1, "in":1, mm:1, pc:1, pt:1};
  var Vd = {em:1, ex:1};
  var Wd = function(a$$279) {
    var b$$217 = R$$1(a$$279, "fontSize");
    var c$$145 = Td(b$$217);
    if (b$$217 && "px" == c$$145) {
      return parseInt(b$$217, 10);
    }
    if (N$$1) {
      if (c$$145 in Ud) {
        return Od(a$$279, b$$217, "left", "pixelLeft");
      }
      if (a$$279.parentNode && 1 == a$$279.parentNode.nodeType && c$$145 in Vd) {
        return a$$279 = a$$279.parentNode, c$$145 = R$$1(a$$279, "fontSize"), Od(a$$279, b$$217 == c$$145 ? "1em" : b$$217, "left", "pixelLeft");
      }
    }
    c$$145 = kd("span", {style:"visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"});
    od(a$$279, c$$145);
    b$$217 = c$$145.offsetHeight;
    qd(c$$145);
    return b$$217;
  };
  var Xd = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
  var Fd = function(a$$280) {
    var b$$218;
    N$$1 ? b$$218 = "-ms-transform" : Pc ? b$$218 = "-webkit-transform" : Nc ? b$$218 = "-o-transform" : Oc && (b$$218 = "-moz-transform");
    var c$$146;
    b$$218 && (c$$146 = R$$1(a$$280, b$$218));
    c$$146 || (c$$146 = R$$1(a$$280, "transform"));
    return c$$146 ? (a$$280 = c$$146.match(Xd)) ? new M$$1(parseFloat(a$$280[1]), parseFloat(a$$280[2])) : new M$$1(0, 0) : new M$$1(0, 0);
  };
  var Yd = function(a$$281, b$$219, c$$147, d$$88, e$$56, f$$33, g$$21, h$$14) {
    return{a:a$$281, b:b$$219, c:c$$147, d:d$$88, e:e$$56, f:f$$33, g:g$$21, h:h$$14};
  };
  var Zd = function(a$$282, b$$220, c$$148, d$$89) {
    b$$220 = [c$$148 ? "google_debug&" : "", "xpc=", b$$220, "&p=", encodeURIComponent(v$$1.location.protocol), "//", encodeURIComponent(v$$1.location.host)].join("");
    d$$89 = d$$89 ? encodeURIComponent : function(a$$283) {
      return a$$283;
    };
    return a$$282 + (-1 == a$$282.indexOf(d$$89("?")) ? d$$89("?") : d$$89("&")) + d$$89(b$$220);
  };
  var $d = function(a$$284, b$$221, c$$149) {
    var d$$90 = "&" + b$$221 + "=";
    b$$221 = a$$284.indexOf(d$$90);
    0 > b$$221 ? a$$284 = a$$284 + d$$90 + c$$149 : (b$$221 += d$$90.length, d$$90 = a$$284.indexOf("&", b$$221), a$$284 = 0 <= d$$90 ? a$$284.substring(0, b$$221) + c$$149 + a$$284.substring(d$$90) : a$$284.substring(0, b$$221) + c$$149);
    return a$$284;
  };
  var ae = function(a$$285, b$$222, c$$150) {
    b$$222 = "&" + b$$222 + "=" + c$$150;
    return a$$285 + b$$222;
  };
  var be = function(a$$286, b$$223, c$$151, d$$91, e$$57) {
    c$$151 = e$$57 ? ae(a$$286, b$$223, c$$151) : $d(a$$286, b$$223, c$$151);
    return 2E3 < c$$151.length ? void 0 !== d$$91 ? be(a$$286, b$$223, d$$91, void 0, e$$57) : a$$286 : c$$151;
  };
  var ce = function(a$$287, b$$224) {
    if (a$$287) {
      var c$$152 = a$$287.match(b$$224 + "=([^&]+)");
      if (c$$152 && 2 == c$$152.length) {
        return c$$152[1];
      }
    }
    return "";
  };
  var de = function(a$$288, b$$225) {
    var c$$153 = b$$225 || w$$6;
    a$$288 && c$$153.top != c$$153 && (c$$153 = c$$153.top);
    try {
      return c$$153.document && !c$$153.document.body ? new u$$2(-1, -1) : gd(c$$153 || window);
    } catch (d$$92) {
      return new u$$2(-12245933, -12245933);
    }
  };
  var ee = function(a$$289) {
    if (a$$289 == a$$289.top) {
      return 0;
    }
    var b$$226 = [];
    b$$226.push(a$$289.document.URL);
    a$$289.name && b$$226.push(a$$289.name);
    var c$$154 = !0;
    a$$289 = de(!c$$154, a$$289);
    b$$226.push(a$$289.width.toString());
    b$$226.push(a$$289.height.toString());
    return Ab(b$$226.join(""));
  };
  var fe = function(a$$290, b$$227) {
    if (rb$$1()) {
      var c$$155 = function() {
        "complete" == a$$290.readyState && b$$227();
      };
      y$$31(a$$290, "readystatechange", c$$155);
    } else {
      y$$31(a$$290, "load", b$$227);
    }
  };
  var ge = function() {
    var a$$291 = 0;
    void 0 === w$$6.postMessage && (a$$291 |= 1);
    return a$$291;
  };
  var S$$1 = function(a$$292, b$$228) {
    this.wa = a$$292;
    this.ha = b$$228 ? b$$228.ha : [];
    this.Ua = b$$228 ? b$$228.Ua : !1;
    this.Db = b$$228 ? b$$228.Db : "";
    this.Wa = b$$228 ? b$$228.Wa : 0;
    this.Aa = b$$228 ? b$$228.Aa : "";
    this.q = b$$228 ? b$$228.q : [];
    this.xa = null;
    this.Lb = !1;
  };
  var he = "";
  var ie = 0;
  var je = 0;
  var ke = function(a$$293, b$$229, c$$156, d$$93) {
    he = L$$1(b$$229, "/pagead/osd.js", a$$293 ? "https" : "http");
    ie = c$$156;
    je = d$$93;
  };
  ke(Ha$$1, La$$1(!1), oa$$1, pa$$1);
  S$$1.prototype.oc = function(a$$294, b$$230) {
    var c$$157 = this.ha;
    var d$$94 = this.wa[b$$230];
    d$$94 && (d$$94 = d$$94.orig_callback || d$$94, this.wa[b$$230] = function(b$$231) {
      if (b$$231 && 0 < b$$231.length) {
        var f$$34 = 1 < b$$231.length ? b$$231[1].url : null;
        var g$$22 = b$$231[0].log_info || null;
        var h$$15 = b$$231[0].activeview_url || null;
        c$$157.push([a$$294, Va$$1(b$$231[0].url), f$$34, g$$22, null, h$$15]);
      }
      d$$94(b$$231);
    }, this.wa[b$$230].orig_callback = d$$94);
  };
  S$$1.prototype.bc = function() {
    this.Ua || (mb$$1(D$$1()), jb$$1(he), this.Ua = !0);
  };
  S$$1.prototype.Fa = function(a$$295, b$$232, c$$158) {
    var d$$95 = this.ha;
    if (0 < d$$95.length) {
      var e$$58 = a$$295.document.getElementsByTagName("a");
      var f$$35 = 0;
      for (;f$$35 < e$$58.length;f$$35++) {
        var g$$23 = 0;
        for (;g$$23 < d$$95.length;g$$23++) {
          var h$$16 = d$$95[g$$23][1];
          if (0 <= e$$58[f$$35].href.indexOf(h$$16)) {
            h$$16 = e$$58[f$$35].parentNode;
            if (d$$95[g$$23][2]) {
              var k$$6 = h$$16;
              var l$$9 = 0;
              for (;4 > l$$9;l$$9++) {
                if (0 <= k$$6.innerHTML.indexOf(d$$95[g$$23][2])) {
                  h$$16 = k$$6;
                  break;
                }
                k$$6 = k$$6.parentNode;
              }
            }
            k$$6 = !0;
            l$$9 = d$$95[g$$23][3];
            var z$$4 = d$$95[g$$23][5];
            b$$232(h$$16, d$$95[g$$23][0], c$$158 || 0, k$$6, l$$9, void 0, z$$4);
            d$$95.splice(g$$23, 1);
            break;
          }
        }
      }
    }
    if (0 < d$$95.length && a$$295 != hc()) {
      try {
        this.Fa(a$$295.parent, b$$232, c$$158);
      } catch (C$$2) {
      }
    }
  };
  S$$1.prototype.Na = function(a$$296, b$$233) {
    b$$233 && this.Fa(this.wa, a$$296, 1);
    var c$$159 = this.q.length;
    var d$$96 = 0;
    for (;d$$96 < c$$159;d$$96++) {
      var e$$59 = this.q[d$$96];
      !e$$59.Vb && e$$59.kb && (a$$296(e$$59.kb, e$$59.nb, e$$59.fd, e$$59.lb, "", e$$59.Yc, ""), e$$59.Vb = !0);
    }
    b$$233 && (this.xa = a$$296);
  };
  S$$1.prototype.getRegisteredAdblockUrls = function() {
    var a$$297 = [];
    var b$$234 = this.q.length;
    var c$$160 = 0;
    for (;c$$160 < b$$234;c$$160++) {
      var d$$97 = this.q[c$$160];
      a$$297.push(d$$97.nb);
    }
    return a$$297;
  };
  S$$1.prototype.setupOse = function(a$$298) {
    if (this.getOseId()) {
      return this.getOseId();
    }
    var b$$235 = window.google_enable_ose;
    var c$$161;
    !0 === b$$235 ? c$$161 = 2 : !1 !== b$$235 && ((c$$161 = vb([2], ie)) || (c$$161 = vb([3], je)));
    if (!c$$161) {
      return 0;
    }
    this.Wa = c$$161;
    this.Aa = String(a$$298 || 0);
    return this.getOseId();
  };
  S$$1.prototype.getEid = function() {
    return "";
  };
  S$$1.prototype.getOseExpId = function() {
    return this.Db;
  };
  S$$1.prototype.getOseId = function() {
    return window ? this.Wa : 0;
  };
  S$$1.prototype.getCorrelator = function() {
    return this.Aa;
  };
  S$$1.prototype.La = function() {
    return this.ha.length + this.q.length;
  };
  S$$1.prototype.registerAdBlock = function(a$$299, b$$236, c$$162, d$$98, e$$60, f$$36) {
    var g$$24 = null;
    e$$60 && f$$36 && (g$$24 = new u$$2(e$$60, f$$36));
    if (this.xa && d$$98) {
      this.xa(d$$98, a$$299, b$$236, !0, "", g$$24, "");
    } else {
      if ("js" == c$$162) {
        this.oc(a$$299, "google_ad_request_done");
      } else {
        var h$$17 = new le(a$$299, b$$236, c$$162, d$$98, g$$24);
        this.q.push(h$$17);
        d$$98 && (a$$299 = function() {
          h$$17.lb = !0;
        }, fe(d$$98, a$$299));
      }
      this.bc();
    }
  };
  S$$1.prototype.setUpForcePeriscope = function() {
    window.google_enable_ose_periscope && (this.Lb = !0);
  };
  S$$1.prototype.shouldForcePeriscope = function() {
    return this.Lb;
  };
  var me = function() {
    var a$$300 = D$$1();
    var b$$237 = a$$300.__google_ad_urls;
    if (!b$$237) {
      return a$$300.__google_ad_urls = new S$$1(a$$300);
    }
    try {
      if (b$$237.getOseId()) {
        return b$$237;
      }
    } catch (c$$163) {
    }
    return a$$300.__google_ad_urls = new S$$1(a$$300, b$$237);
  };
  var le = function(a$$301, b$$238, c$$164, d$$99, e$$61) {
    this.nb = a$$301;
    this.fd = b$$238;
    this.ld = c$$164;
    this.kb = d$$99;
    this.Vb = this.lb = !1;
    this.Yc = e$$61 || null;
  };
  s$$3("Goog_AdSense_getAdAdapterInstance", me);
  s$$3("Goog_AdSense_OsdAdapter", S$$1);
  s$$3("Goog_AdSense_OsdAdapter.prototype.numBlocks", S$$1.prototype.La);
  s$$3("Goog_AdSense_OsdAdapter.prototype.getNewBlocks", S$$1.prototype.Na);
  s$$3("Goog_AdSense_OsdAdapter.prototype.getEid", S$$1.prototype.getEid);
  s$$3("Goog_AdSense_OsdAdapter.prototype.getOseExpId", S$$1.prototype.getOseExpId);
  s$$3("Goog_AdSense_OsdAdapter.prototype.getOseId", S$$1.prototype.getOseId);
  s$$3("Goog_AdSense_OsdAdapter.prototype.getCorrelator", S$$1.prototype.getCorrelator);
  s$$3("Goog_AdSense_OsdAdapter.prototype.getRegisteredAdblockUrls", S$$1.prototype.getRegisteredAdblockUrls);
  s$$3("Goog_AdSense_OsdAdapter.prototype.setupOse", S$$1.prototype.setupOse);
  s$$3("Goog_AdSense_OsdAdapter.prototype.registerAdBlock", S$$1.prototype.registerAdBlock);
  s$$3("Goog_AdSense_OsdAdapter.prototype.setUpForcePeriscope", S$$1.prototype.setUpForcePeriscope);
  s$$3("Goog_AdSense_OsdAdapter.prototype.shouldForcePeriscope", S$$1.prototype.shouldForcePeriscope);
  var ne = function(a$$302) {
    var b$$239 = parseInt(a$$302[10], 10);
    a$$302 = parseInt(a$$302[11], 10);
    return 0 < b$$239 && 0 < a$$302 ? new u$$2(b$$239, a$$302) : new u$$2(-12245933, -12245933);
  };
  var oe = function(a$$303, b$$240, c$$165) {
    var d$$100 = parseInt(a$$303[6], 10);
    var e$$62 = parseInt(a$$303[7], 10);
    var f$$37 = parseInt(a$$303[8], 10);
    a$$303 = parseInt(a$$303[9], 10);
    return 0 < d$$100 && 0 < e$$62 && 0 < f$$37 && 0 < a$$303 && (b$$240 = Math.abs(f$$37 - b$$240), c$$165 = Math.abs(a$$303 - c$$165), 10 >= b$$240 + c$$165) ? new M$$1(d$$100, e$$62) : new M$$1(-12245933, -12245933);
  };
  var pe = {client:"google_ad_client", format:"google_ad_format", slotname:"google_ad_slot", output:"google_ad_output", ad_type:"google_ad_type", async_oa:"google_async_for_oa_experiment", zrtm:"google_ad_handling_mode", dimpr:"google_always_use_delayed_impressions_experiment", peri:"google_top_experiment"};
  var te = function(a$$304, b$$241, c$$166, d$$101) {
    try {
      c$$166();
    } catch (e$$63) {
      c$$166 = !Ga$$1;
      try {
        var f$$38 = e$$63.toString();
        e$$63.name && -1 == f$$38.indexOf(e$$63.name) && (f$$38 += ": " + e$$63.name);
        e$$63.message && -1 == f$$38.indexOf(e$$63.message) && (f$$38 += ": " + e$$63.message);
        e$$63.stack && (f$$38 = qe(e$$63.stack, f$$38));
        var g$$25 = "";
        e$$63.fileName && (g$$25 = e$$63.fileName);
        var h$$18 = -1;
        e$$63.lineNumber && (h$$18 = e$$63.lineNumber);
        var k$$7 = re(d$$101);
        c$$166 = b$$241(a$$304, f$$38, g$$25, h$$18, k$$7);
      } catch (l$$10) {
        se("jserror", {context:"protectAndRun", msg:l$$10.toString() + "\n" + (l$$10.stack || "")});
      }
      if (!c$$166) {
        throw e$$63;
      }
    }
  };
  s$$3("google_protectAndRun", te);
  var ve = function(a$$305, b$$242, c$$167, d$$102, e$$64) {
    var f$$39 = v$$1;
    a$$305 = {jscb:Ea$$1 ? 1 : 0, jscd:Fa$$1 ? 1 : 0, context:a$$305, msg:b$$242.substring(0, 512), eid:e$$64 && e$$64.substring(0, 40), file:c$$167, line:d$$102.toString(), url:f$$39.URL.substring(0, 512), ref:f$$39.referrer.substring(0, 512)};
    ue(a$$305);
    se("jserror", a$$305);
    return!Ga$$1;
  };
  s$$3("google_handleError", ve);
  var se = function(a$$306, b$$243, c$$168) {
    c$$168 = c$$168 || .01;
    Math.random() < c$$168 && (a$$306 = "/pagead/gen_204?id=" + a$$306 + we(b$$243), a$$306 = L$$1(Ka$$1(), a$$306), a$$306 = a$$306.substring(0, 2E3), nb$$1(w$$6, a$$306));
  };
  var ue = function(a$$307) {
    var b$$244 = a$$307 || {};
    x$$50(pe, function(a$$308, d$$103) {
      b$$244[d$$103] = w$$6[a$$308];
    });
    return b$$244;
  };
  var xe = function(a$$309, b$$245, c$$169, d$$104) {
    return ga$$1(te, a$$309, d$$104 || ve, b$$245, c$$169);
  };
  var ye = function(a$$310, b$$246, c$$170, d$$105) {
    return function(e$$65) {
      e$$65 = ga$$1(b$$246, e$$65);
      var f$$40 = d$$105 || ve;
      te(a$$310, f$$40, e$$65, c$$170);
    };
  };
  var Ae = function(a$$311) {
    ze |= a$$311;
  };
  var ze = 0;
  var we = function(a$$312) {
    var b$$247 = "";
    x$$50(a$$312, function(a$$313, d$$106) {
      if (0 === a$$313 || a$$313) {
        b$$247 += "&" + d$$106 + "=" + ("function" == typeof encodeURIComponent ? encodeURIComponent(a$$313) : escape(a$$313));
      }
    });
    return b$$247;
  };
  var qe = function(a$$314, b$$248) {
    try {
      -1 == a$$314.indexOf(b$$248) && (a$$314 = b$$248 + "\n" + a$$314);
      var c$$171;
      for (;a$$314 != c$$171;) {
        c$$171 = a$$314, a$$314 = a$$314.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
      }
      return a$$314.replace(/\n */g, "\n");
    } catch (d$$107) {
      return b$$248;
    }
  };
  var re = function(a$$315) {
    try {
      return a$$315 ? a$$315() : "";
    } catch (b$$249) {
    }
    return "";
  };
  var Be = function() {
  };
  Be.prototype.serialize = function(a$$316) {
    var b$$250 = [];
    this.n(a$$316, b$$250);
    return b$$250.join("");
  };
  Be.prototype.n = function(a$$317, b$$251) {
    switch(typeof a$$317) {
      case "string":
        this.r(a$$317, b$$251);
        break;
      case "number":
        this.L(a$$317, b$$251);
        break;
      case "boolean":
        b$$251.push(a$$317);
        break;
      case "undefined":
        b$$251.push("null");
        break;
      case "object":
        if (null == a$$317) {
          b$$251.push("null");
          break;
        }
        if (a$$317 instanceof Array) {
          this.yc(a$$317, b$$251);
          break;
        }
        this.M(a$$317, b$$251);
        break;
      case "function":
        break;
      default:
        throw Error("Unknown type: " + typeof a$$317);;
    }
  };
  var Ce = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
  var De = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
  Be.prototype.r = function(a$$318, b$$252) {
    b$$252.push('"');
    b$$252.push(a$$318.replace(De, function(a$$319) {
      if (a$$319 in Ce) {
        return Ce[a$$319];
      }
      var b$$253 = a$$319.charCodeAt(0);
      var e$$66 = "\\u";
      16 > b$$253 ? e$$66 += "000" : 256 > b$$253 ? e$$66 += "00" : 4096 > b$$253 && (e$$66 += "0");
      return Ce[a$$319] = e$$66 + b$$253.toString(16);
    }));
    b$$252.push('"');
  };
  Be.prototype.L = function(a$$320, b$$254) {
    b$$254.push(isFinite(a$$320) && !isNaN(a$$320) ? a$$320 : "null");
  };
  Be.prototype.yc = function(a$$321, b$$255) {
    var c$$172 = a$$321.length;
    b$$255.push("[");
    var d$$108 = "";
    var e$$67 = 0;
    for (;e$$67 < c$$172;e$$67++) {
      b$$255.push(d$$108), this.n(a$$321[e$$67], b$$255), d$$108 = ",";
    }
    b$$255.push("]");
  };
  Be.prototype.M = function(a$$322, b$$256) {
    b$$256.push("{");
    var c$$173 = "";
    var d$$109;
    for (d$$109 in a$$322) {
      if (a$$322.hasOwnProperty(d$$109)) {
        var e$$68 = a$$322[d$$109];
        "function" != typeof e$$68 && (b$$256.push(c$$173), this.r(d$$109, b$$256), b$$256.push(":"), this.n(e$$68, b$$256), c$$173 = ",");
      }
    }
    b$$256.push("}");
  };
  var Ee = function(a$$323) {
    var b$$257 = "google_page_url";
    a$$323[b$$257] && (a$$323[b$$257] = String(a$$323[b$$257]));
    var c$$174 = [];
    x$$50(a$$323, function(a$$324, b$$258) {
      if (null != a$$324) {
        var f$$41;
        try {
          f$$41 = (new Be).serialize(a$$324);
        } catch (g$$26) {
        }
        f$$41 && ib$$1(c$$174, b$$258, "=", f$$41, ";");
      }
    });
    return c$$174.join("");
  };
  var Fe = /Firefox/;
  var Ge = {CONTROL_NO_FRAME:"XN", PARALLEL_CANCEL_ON_NO_AD:"PC", IFRAME_SIGNALING:"EI", ALWAYS_ZRT:"AZ", SERIAL:"S"};
  var He = {PARALLEL:"K", PARALLEL_W_IFRAME_SIGNALING:"I", PARALLEL_W_ALWAYS_ZRT:"Z", SERIAL:"U"};
  var Ie = /\.((google(|groups|mail|images|print))|gmail)\./;
  var Je = function(a$$325, b$$259, c$$175) {
    a$$325 = be(a$$325, "pfi", b$$259, void 0, !0);
    c$$175 && (b$$259 = (b$$259 = ce(a$$325, "eid")) ? c$$175 + "%2C" + b$$259 : c$$175, a$$325 = be(a$$325, "eid", b$$259), 453848236 == c$$175 && (a$$325 = be(a$$325, "unviewed_position_start", 1, void 0, !0)));
    return a$$325;
  };
  var Ke = function(a$$326) {
    try {
      var b$$260 = Ie.test(a$$326.location.host);
      return!(!a$$326.postMessage || !a$$326.localStorage || !a$$326.JSON || b$$260);
    } catch (c$$176) {
      return!1;
    }
  };
  var Le = function(a$$327) {
    var b$$261 = Ge;
    return a$$327 == b$$261.PARALLEL_CANCEL_ON_NO_AD || a$$327 == b$$261.IFRAME_SIGNALING || a$$327 == b$$261.ALWAYS_ZRT;
  };
  var Me = function(a$$328) {
    this.p = a$$328;
    a$$328.google_iframe_oncopy || (a$$328.google_iframe_oncopy = {handlers:{}, upd:r$$2(this.Qc, this)});
    this.hd = a$$328.google_iframe_oncopy;
  };
  var Ne = Sa$$1("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");
  Me.prototype.set = function(a$$329, b$$262) {
    this.hd.handlers[a$$329] = b$$262;
    this.p.addEventListener && this.p.addEventListener("load", r$$2(this.Jb, this, a$$329), !1);
  };
  Me.prototype.Jb = function(a$$330) {
    a$$330 = this.p.document.getElementById(a$$330);
    var b$$263 = a$$330.contentWindow.document;
    if (a$$330.onload && b$$263 && (!b$$263.body || !b$$263.body.firstChild)) {
      a$$330.onload();
    }
  };
  Me.prototype.Qc = function(a$$331, b$$264) {
    var c$$177 = Oe("rs", a$$331);
    var d$$110 = ce(a$$331, "dt");
    c$$177 = c$$177.replace(/&dtd=(\d+|M)/, "&dtd=" + Hb(d$$110));
    this.set(b$$264, c$$177);
    return c$$177;
  };
  var Oe = function(a$$332, b$$265) {
    var c$$178 = RegExp("\\b" + a$$332 + "=(\\d+)");
    var d$$111 = c$$178.exec(b$$265);
    d$$111 && (d$$111 = +d$$111[1] + 1 || 1, b$$265 = b$$265.replace(c$$178, a$$332 + "=" + d$$111));
    return b$$265;
  };
  var Pe = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
  var Re = function(a$$333) {
    Qe();
    return a$$333.match(Pe);
  };
  var Se = Pc;
  var Qe = function() {
    if (Se) {
      Se = !1;
      var a$$334 = m$$3.location;
      if (a$$334) {
        var b$$266 = a$$334.href;
        if (b$$266 && (b$$266 = Te(Re(b$$266)[3] || null)) && b$$266 != a$$334.hostname) {
          throw Se = !0, Error();
        }
      }
    }
  };
  var Te = function(a$$335) {
    return a$$335 && decodeURIComponent(a$$335);
  };
  var Ue = function(a$$336) {
    if (a$$336[1]) {
      var b$$267 = a$$336[0];
      var c$$179 = b$$267.indexOf("#");
      0 <= c$$179 && (a$$336.push(b$$267.substr(c$$179)), a$$336[0] = b$$267 = b$$267.substr(0, c$$179));
      c$$179 = b$$267.indexOf("?");
      0 > c$$179 ? a$$336[1] = "?" : c$$179 == b$$267.length - 1 && (a$$336[1] = void 0);
    }
    return a$$336.join("");
  };
  var Ve = function(a$$337, b$$268, c$$180) {
    if (n$$2(b$$268)) {
      var d$$112 = 0;
      for (;d$$112 < b$$268.length;d$$112++) {
        Ve(a$$337, String(b$$268[d$$112]), c$$180);
      }
    } else {
      null != b$$268 && c$$180.push("&", a$$337, "" === b$$268 ? "" : "=", encodeURIComponent(String(b$$268)));
    }
  };
  var We = function(a$$338, b$$269) {
    var c$$181;
    for (c$$181 in b$$269) {
      Ve(c$$181, b$$269[c$$181], a$$338);
    }
    return a$$338;
  };
  var T$$1 = {getIframingState:function(a$$339, b$$270) {
    var c$$182 = T$$1;
    if (a$$339.top == a$$339) {
      return c$$182.NO_IFRAMING;
    }
    if (b$$270) {
      var d$$113 = a$$339.location.ancestorOrigins;
      if (d$$113) {
        return d$$113[d$$113.length - 1] == a$$339.location.origin ? c$$182.SAME_DOMAIN_IFRAMING : c$$182.CROSS_DOMAIN_IFRAMING;
      }
    }
    return Kb(a$$339.top) ? c$$182.SAME_DOMAIN_IFRAMING : c$$182.CROSS_DOMAIN_IFRAMING;
  }, frameCountsWithDelayedPingback:function(a$$340, b$$271, c$$183, d$$114) {
    var e$$69 = T$$1.Ha(a$$340.top, a$$340, 0);
    window.setTimeout(ga$$1(T$$1.Uc, a$$340, b$$271, c$$183, d$$114, e$$69.adFrames), T$$1.IFRAME_COUNTS_DELAY);
    return e$$69.adFrames;
  }, Uc:function(a$$341, b$$272, c$$184, d$$115, e$$70) {
    a$$341 = T$$1.Ha(a$$341.top, a$$341, 0);
    var f$$42 = a$$341.signature.substring(0, 1800);
    b$$272 = {frmn:a$$341.adFrames, frms:f$$42, adk:b$$272, correlator:c$$184, frm:d$$115, frmn0:e$$70};
    c$$184 = L$$1(La$$1(), "/pagead/gen_204?id=frmn");
    c$$184 = Ue(We([c$$184], b$$272));
    nb$$1(w$$6, c$$184);
  }, Ha:function(a$$342, b$$273, c$$185) {
    var d$$116;
    var e$$71 = {signature:"", adFrames:0};
    if (c$$185 > T$$1.MAXIMUM_IFRAME_DEPTH) {
      return e$$71;
    }
    try {
      d$$116 = a$$342[T$$1.NAME_FIRST_GOOGLE_WINDOW];
    } catch (f$$43) {
    }
    d$$116 && (e$$71.signature = a$$342 == b$$273 ? "I" : "A", e$$71.adFrames = 1);
    var g$$27 = 0;
    for (;g$$27 < a$$342.length;g$$27++) {
      var h$$19 = a$$342[g$$27];
      h$$19 != d$$116 && (h$$19 = T$$1.Ha(h$$19, b$$273, c$$185 + 1), e$$71.adFrames += h$$19.adFrames, e$$71.signature = h$$19.signature ? e$$71.signature + ("!" + h$$19.signature + "~") : e$$71.signature + "o");
    }
    return e$$71;
  }, NO_IFRAMING:0, SAME_DOMAIN_IFRAMING:1, CROSS_DOMAIN_IFRAMING:2, NAME_FIRST_GOOGLE_WINDOW:"aswift_0", IFRAME_COUNTS_DELAY:2E3, MAXIMUM_IFRAME_DEPTH:20};
  var Xe = function(a$$343) {
    a$$343 = a$$343.webkitVisibilityState || a$$343.mozVisibilityState || a$$343.visibilityState || "";
    var b$$274 = {visible:1, hidden:2, prerender:3, preview:4};
    return b$$274[a$$343] || 0;
  };
  var Ye = function() {
    var a$$344 = H$$1().m(10);
    var b$$275 = K$$1.PERISCOPE_FOR_TARGETING;
    return a$$344 === b$$275.EXPERIMENT_REFERER_CLEANUP;
  };
  var af = function(a$$345) {
    var b$$276 = D$$1().google_top_values;
    if (b$$276) {
      var c$$186 = b$$276[3];
      a$$345 && (c$$186 = b$$276[4]);
      if (c$$186) {
        return c$$186 + "";
      }
    }
    return null;
  };
  var cf = function(a$$346) {
    var b$$277 = af();
    if (b$$277) {
      return{url:b$$277, isTopUrl:!0};
    }
    b$$277 = a$$346.location.href;
    if (a$$346 == a$$346.top) {
      return{url:b$$277, isTopUrl:!0};
    }
    var c$$187 = !1;
    var d$$117 = a$$346.document;
    d$$117 && d$$117.referrer && (b$$277 = d$$117.referrer, a$$346.parent == a$$346.top && (c$$187 = !0));
    (a$$346 = a$$346.location.ancestorOrigins) && (a$$346 = a$$346[a$$346.length - 1]) && -1 == b$$277.indexOf(a$$346) && (c$$187 = !1, b$$277 = a$$346);
    return{url:b$$277, isTopUrl:c$$187};
  };
  var ef = function(a$$347) {
    return a$$347 == a$$347.top ? a$$347.document.referrer : (a$$347 = af(!0)) || "";
  };
  var mf;
  var U$$1 = function(a$$348) {
    this.oa = [];
    this.p = a$$348 || window;
    this.j = 0;
    this.na = null;
  };
  var nf = function(a$$349, b$$278) {
    this.fn = a$$349;
    this.win = b$$278;
  };
  U$$1.prototype.enqueue = function(a$$350, b$$279) {
    0 != this.j || 0 != this.oa.length || b$$279 && b$$279 != window ? this.Y(a$$350, b$$279) : (this.j = 2, this.ab(new nf(a$$350, window)));
  };
  U$$1.prototype.Y = function(a$$351, b$$280) {
    this.oa.push(new nf(a$$351, b$$280 || this.p));
    this.sa();
  };
  U$$1.prototype.Xa = function(a$$352) {
    this.j = 1;
    if (a$$352) {
      var b$$281 = xe("sjr::timeout", r$$2(this.ra, this));
      this.na = this.p.setTimeout(b$$281, a$$352);
    }
  };
  U$$1.prototype.ra = function() {
    1 == this.j && (null != this.na && (this.p.clearTimeout(this.na), this.na = null), this.j = 0);
    this.sa();
  };
  U$$1.prototype.statusz = function() {
    return!(!window || !Array);
  };
  ia$$1(U$$1.prototype, "nq", U$$1.prototype.enqueue);
  ia$$1(U$$1.prototype, "nqa", U$$1.prototype.Y);
  ia$$1(U$$1.prototype, "al", U$$1.prototype.Xa);
  ia$$1(U$$1.prototype, "rl", U$$1.prototype.ra);
  ia$$1(U$$1.prototype, "sz", U$$1.prototype.statusz);
  U$$1.prototype.sa = function() {
    var a$$353 = xe("sjr::tryrun", r$$2(this.Oc, this));
    this.p.setTimeout(a$$353, 0);
  };
  U$$1.prototype.Oc = function() {
    if (0 == this.j && this.oa.length) {
      var a$$354 = this.oa.shift();
      this.j = 2;
      var b$$282 = xe("sjr::run", r$$2(this.ab, this, a$$354));
      a$$354.win.setTimeout(b$$282, 0);
      this.sa();
    }
  };
  U$$1.prototype.ab = function(a$$355) {
    this.j = 0;
    a$$355.fn();
  };
  var of = function(a$$356) {
    try {
      return a$$356.sz();
    } catch (b$$283) {
      return!1;
    }
  };
  var pf = function(a$$357) {
    return gb$$1(a$$357) && of(a$$357) && fb$$1(a$$357.nq) && fb$$1(a$$357.nqa) && fb$$1(a$$357.al) && fb$$1(a$$357.rl);
  };
  var qf = function() {
    if (mf && of(mf)) {
      return mf;
    }
    var a$$358 = hc();
    var b$$284 = a$$358.google_jobrunner;
    return pf(b$$284) ? mf = b$$284 : a$$358.google_jobrunner = mf = new U$$1(a$$358);
  };
  var rf = function(a$$359, b$$285) {
    qf().nq(a$$359, b$$285);
  };
  var sf = function(a$$360, b$$286) {
    qf().nqa(a$$360, b$$286);
  };
  var tf = function(a$$361) {
    qf().al(a$$361);
  };
  var uf = function() {
    var a$$362 = hc().google_jobrunner;
    pf(a$$362) && a$$362.rl();
  };
  var vf = (new Date).getTime();
  var wf = {"120x90":!0, "160x90":!0, "180x90":!0, "200x90":!0, "468x15":!0, "728x15":!0};
  var xf = function() {
    var a$$363 = "script";
    return["<", a$$363, ' src="', L$$1(La$$1(), ["/pagead/js/", Da$$1(), "/r20130906/show_ads_impl.js"].join(""), ""), '"></', a$$363, ">"].join("");
  };
  var yf = function(a$$364, b$$287) {
    try {
      if (!1 === a$$364.google_allow_expandable_ads || !b$$287.body || a$$364.google_ad_output && "html" != a$$364.google_ad_output || isNaN(a$$364.google_ad_height) || isNaN(a$$364.google_ad_width) || b$$287.domain != a$$364.location.hostname || !/^http/.test(b$$287.location.protocol) || !Jb(navigator, b$$287, J$$1().m(13) == K$$1.EXPANDABLE_MOBILE_REVERSE.EXPERIMENT ? /Win|Mac|Linux/ : /Win|Mac|Linux|iPad|iPod|iPhone/)) {
        return!0;
      }
    } catch (c$$188) {
      return!0;
    }
    return!1;
  };
  var zf = function() {
    return "object" == typeof window.ExpandableAdSlotFactory && "function" == typeof window.ExpandableAdSlotFactory.createIframe;
  };
  var Af = function(a$$365, b$$288, c$$189, d$$118) {
    return function() {
      var e$$72 = !1;
      d$$118 && tf(3E4);
      try {
        Vb(a$$365, b$$288, c$$189), e$$72 = !0;
      } catch (f$$44) {
        uf();
      }
      e$$72 && (e$$72 = Oe("google_async_rrc", c$$189), (new Me(a$$365)).set(b$$288, Af(a$$365, b$$288, e$$72, !1)));
    };
  };
  var Bf = function(a$$366, b$$289, c$$190) {
    var d$$119 = a$$366.createElement("iframe");
    x$$50(b$$289, function(a$$367, b$$290) {
      null != a$$367 && d$$119.setAttribute(b$$290, a$$367);
    });
    c$$190 && (d$$119.style.display = c$$190);
    return d$$119;
  };
  var Cf = function(a$$368) {
    var b$$291 = ["<iframe"];
    x$$50(a$$368, function(a$$369, d$$120) {
      null != a$$369 && b$$291.push(" " + d$$120 + '="' + a$$369 + '"');
    });
    b$$291.push("></iframe>");
    return b$$291.join("");
  };
  var Df = function(a$$370) {
    return L$$1(Ja$$1(), ["/pagead/html/", Da$$1(), "/r20130906/zrt_lookup.html", a$$370 ? "#" + encodeURIComponent(a$$370) : ""].join(""));
  };
  var Ef = function(a$$371, b$$292, c$$191) {
    c$$191.id = b$$292;
    c$$191.name = b$$292;
    c$$191.src = Df(a$$371);
    return Cf(c$$191);
  };
  var Ff = function(a$$372, b$$293, c$$192, d$$121, e$$73) {
    d$$121 = d$$121 ? '"' : "";
    var f$$45 = d$$121 + "0" + d$$121;
    a$$372.width = d$$121 + b$$293 + d$$121;
    a$$372.height = d$$121 + c$$192 + d$$121;
    a$$372.frameborder = f$$45;
    e$$73 && (a$$372.src = d$$121 + e$$73 + d$$121);
    a$$372.marginwidth = f$$45;
    a$$372.marginheight = f$$45;
    a$$372.vspace = f$$45;
    a$$372.hspace = f$$45;
    a$$372.allowtransparency = d$$121 + "true" + d$$121;
    a$$372.scrolling = d$$121 + "no" + d$$121;
  };
  var Gf = function(a$$373) {
    var b$$294 = Ke(a$$373);
    var c$$193 = 3 == Xe(a$$373.document);
    var d$$122 = Ge;
    b$$294 && !c$$193 && void 0 === a$$373.google_ad_handling_mode && (a$$373.google_ad_handling_mode = vb([d$$122.CONTROL_NO_FRAME, d$$122.ALWAYS_ZRT, d$$122.SERIAL], sa$$1) || vb([d$$122.IFRAME_SIGNALING], ta$$1));
    return a$$373.google_ad_handling_mode ? String(a$$373.google_ad_handling_mode) : null;
  };
  var Hf = function(a$$374, b$$295, c$$194, d$$123) {
    d$$123 || (d$$123 = Ze(a$$374, a$$374.document, b$$295, c$$194) ? a$$374.document.referrer : a$$374.document.URL);
    return encodeURIComponent(d$$123);
  };
  var If = function(a$$375, b$$296, c$$195, d$$124, e$$74) {
    var f$$46 = Ge;
    if (Ke(a$$375) && 1 == a$$375.google_unique_id && b$$296 != f$$46.CONTROL_NO_FRAME && b$$296 != f$$46.SERIAL) {
      var g$$28 = "zrt_ads_frame" + a$$375.google_unique_id;
      var h$$20 = Hf(a$$375, d$$124, e$$74, c$$195.google_page_url);
      var k$$8 = null;
      if (Le(b$$296)) {
        k$$8 = He;
        switch(b$$296) {
          case f$$46.IFRAME_SIGNALING:
            b$$296 = k$$8.PARALLEL_W_IFRAME_SIGNALING;
            break;
          case f$$46.ALWAYS_ZRT:
            b$$296 = k$$8.PARALLEL_W_ALWAYS_ZRT;
            break;
          default:
            b$$296 = k$$8.PARALLEL;
        }
        k$$8 = b$$296 + "-" + (h$$20 + "/" + c$$195.google_ad_unit_key + "/" + a$$375.google_unique_id);
      }
      a$$375 = {};
      Ff(a$$375, d$$124, e$$74, !1);
      a$$375.style = "display:none";
      return Ef(k$$8, g$$28, a$$375);
    }
    return null;
  };
  var Kf = function(a$$376, b$$297, c$$196) {
    Jf(a$$376, b$$297, c$$196, !1, function(a$$377, b$$298, f$$47) {
      return Sb(a$$377, b$$298, f$$47, c$$196);
    });
  };
  var Jf = function(a$$378, b$$299, c$$197, d$$125, e$$75) {
    var f$$48 = "script";
    var g$$29 = b$$299.google_ad_width;
    var h$$21 = b$$299.google_ad_height;
    var k$$9 = {};
    Ff(k$$9, g$$29, h$$21, !0);
    k$$9.onload = '"' + Ne + '"';
    e$$75 = e$$75(a$$378, k$$9, b$$299);
    k$$9 = Lf();
    Mf(c$$197, d$$125, b$$299, "e" == k$$9);
    c$$197 = Ee(b$$299);
    d$$125 = Gf(a$$378);
    b$$299 = If(a$$378, d$$125, b$$299, g$$29, h$$21);
    g$$29 = vf;
    h$$21 = (new Date).getTime();
    var l$$11 = a$$378.google_top_experiment;
    var z$$5 = a$$378.google_async_for_oa_experiment;
    var C$$3 = a$$378.google_always_use_delayed_impressions_experiment;
    k$$9 = ["<!doctype html><html><body>", b$$299, "<", f$$48, ">", c$$197, "google_show_ads_impl=true;google_unique_id=", a$$378.google_unique_id, ';google_async_iframe_id="', e$$75, '";google_start_time=', g$$29, ";", l$$11 ? 'google_top_experiment="' + l$$11 + '";' : "", d$$125 ? 'google_ad_handling_mode="' + d$$125 + '";' : "", z$$5 ? 'google_async_for_oa_experiment="' + z$$5 + '";' : "", C$$3 ? 'google_always_use_delayed_impressions_experiment="' + C$$3 + '";' : "", k$$9 ? 'google_append_as_for_format_override="' + 
    k$$9 + '";' : "", "google_bpp=", h$$21 > g$$29 ? h$$21 - g$$29 : 1, ";google_async_rrc=0;</", f$$48, ">", xf(), "</body></html>"].join("");
    c$$197 = a$$378.document.getElementById(e$$75) ? rf : sf;
    c$$197(Af(a$$378, e$$75, k$$9, !0));
  };
  var Nf = function(a$$379, b$$300) {
    var c$$198 = a$$379.google_ad_output;
    var d$$126 = a$$379.google_ad_format;
    d$$126 || "html" != c$$198 && null != c$$198 || (d$$126 = a$$379.google_ad_width + "x" + a$$379.google_ad_height, b$$300 && (d$$126 += "_as"));
    c$$198 = !a$$379.google_ad_slot || a$$379.google_override_format || !wf[a$$379.google_ad_width + "x" + a$$379.google_ad_height] && "aa" == a$$379.google_loader_used;
    d$$126 = d$$126 && c$$198 ? d$$126.toLowerCase() : "";
    a$$379.google_ad_format = d$$126;
  };
  var Mf = function(a$$380, b$$301, c$$199, d$$127) {
    Nf(c$$199, d$$127);
    c$$199.google_ad_unit_key = Gb(a$$380, c$$199, b$$301);
    b$$301 = window.google_adk2_experiment = window.google_adk2_experiment || vb(["C", "E"], xa$$1) || "N";
    "E" == b$$301 ? c$$199.google_ad_unit_key_2 = Fb(a$$380, c$$199) : "C" == b$$301 && (c$$199.google_ad_unit_key_2 = "ctrl");
  };
  var Pf = function() {
    var a$$381 = Of;
    var b$$302 = K$$1.PERISCOPE_FOR_TARGETING;
    if (window.google_top_experiment) {
      var c$$200;
      switch(window.google_top_experiment) {
        case a$$381.CONTROL:
          c$$200 = b$$302.CONTROL;
          break;
        case a$$381.EXPERIMENT_ZERO_LATENCY:
          c$$200 = b$$302.EXPERIMENT_ZERO_LATENCY;
          break;
        case a$$381.EXPERIMENT_WAIT_FOR_POST_MESSAGE_RESPONSE:
          c$$200 = b$$302.EXPERIMENT_WAIT_FOR_POST_MESSAGE_RESPONSE;
      }
      c$$200 && H$$1().k([c$$200], 1, 10);
    }
  };
  var Qf = function() {
    if (window.google_ad_unit_key_2) {
      var a$$382;
      "ctrl" == window.google_ad_unit_key_2 ? a$$382 = K$$1.ADD_ADK2.CONTROL : /[0-9]+/.test(window.google_ad_unit_key_2) && (a$$382 = K$$1.ADD_ADK2.EXPERIMENT);
      a$$382 && H$$1().k([a$$382], 1, 4);
    }
  };
  var Rf = function(a$$383) {
    var b$$303 = Pb;
    var c$$201 = K$$1.ASYNC_FOR_OPERA_ANDROID;
    a$$383 = a$$383 || navigator.userAgent;
    if (window.google_async_for_oa_experiment) {
      var d$$128;
      a$$383 = /Chrome/.test(a$$383);
      window.google_async_for_oa_experiment == b$$303.CONTROL ? d$$128 = a$$383 ? c$$201.CONTROL_ANDROID_CHROME : c$$201.CONTROL_ANDROID : window.google_async_for_oa_experiment == b$$303.EXPERIMENT && (d$$128 = a$$383 ? c$$201.EXPERIMENT_ANDROID_CHROME : c$$201.EXPERIMENT_ANDROID);
      d$$128 && H$$1().k([d$$128], 1, 4);
    }
  };
  var Sf = {EXPERIMENT:"E", CONTROL:"C"};
  var Tf = function() {
    var a$$384 = Sf;
    var b$$304 = K$$1.ALWAYS_USE_DELAYED_IMPRESSIONS;
    var c$$202 = window.google_always_use_delayed_impressions_experiment;
    var d$$129 = window.google_ad_output;
    if (c$$202 && (!d$$129 || "html" == d$$129)) {
      return a$$384 = c$$202 == a$$384.EXPERIMENT ? b$$304.EXPERIMENT : b$$304.CONTROL, J$$1().k([a$$384], 1, 4);
    }
  };
  var Vf = function() {
    var a$$385 = Uf;
    var b$$305 = K$$1.APPEND_AS_FOR_FORMAT_OVERRIDE;
    var c$$203 = window.google_append_as_for_format_override;
    if (c$$203) {
      return a$$385 = c$$203 == a$$385.EXPERIMENT ? b$$305.EXPERIMENT : b$$305.CONTROL, J$$1().k([a$$385], 1, 15);
    }
  };
  var Lf = function() {
    if (window.google_override_format || !wf[window.google_ad_width + "x" + window.google_ad_height] && "aa" == window.google_loader_used) {
      var a$$386 = Uf;
      return vb([a$$386.CONTROL, a$$386.EXPERIMENT], Ba$$1);
    }
    return null;
  };
  var Of = {CONTROL:"jp_c", EXPERIMENT_ZERO_LATENCY:"jp_zl", EXPERIMENT_WAIT_FOR_POST_MESSAGE_RESPONSE:"jp_wfpmr"};
  var Uf = {CONTROL:"c", EXPERIMENT:"e"};
  var V$$1 = function(a$$387, b$$306, c$$204, d$$130) {
    this.Q = a$$387;
    this.Fb = b$$306;
    this.Za = c$$204;
    this.hc = !1;
    this.F = "";
    this.za = this.U = null;
    this.Sb = this.Fc = this.Pa = this.Tb = this.jc = this.ma = this.va = !1;
    this.K = ye("zrt_mh::handler", r$$2(V$$1.prototype.Qa, this), d$$130);
    y$$31(a$$387, "message", this.K);
  };
  var Wf = {};
  var Xf = function(a$$388) {
    Wf[a$$388] = !0;
    return a$$388;
  };
  var Yf = Xf("zx");
  var Zf = Xf("zc");
  var $f = Xf("zd");
  var ag = {READY:"zr", CANCEL:Yf, CANCEL_CTRL:Zf, CANCEL_CTRL_DELAYED_IMPR:$f};
  var bg = null;
  var cg = function(a$$389, b$$307, c$$205, d$$131) {
    bg = new V$$1(a$$389, b$$307, c$$205, d$$131);
  };
  V$$1.prototype.jb = function() {
    return this.va;
  };
  V$$1.prototype.la = function() {
    return this.ma;
  };
  V$$1.prototype.Ya = function() {
    return this.hc;
  };
  V$$1.prototype.Ia = function() {
    return this.za;
  };
  V$$1.prototype.Ta = function() {
    return this.jb() || this.la();
  };
  V$$1.prototype.Rc = function() {
    var a$$390 = Ge;
    return this.Za == a$$390.IFRAME_SIGNALING || this.Za == a$$390.ALWAYS_ZRT;
  };
  V$$1.prototype.ya = function() {
    this.F = "";
    this.ma = this.jc = !0;
    this.U = null;
    this.Ya() && (A$$1(this.Q, "message", this.K), this.ta(this.J(), Yf));
  };
  V$$1.prototype.zc = function(a$$391, b$$308) {
    if (!this.la()) {
      if (this.F = a$$391, this.U = b$$308, this.Ya()) {
        try {
          this.gb(this.J());
        } catch (c$$206) {
          this.Sb = !0, b$$308(this.v(), null, !1);
        }
      } else {
        "AZ" == this.Za && this.wb();
      }
    }
  };
  V$$1.prototype.wb = function() {
    var a$$392 = this.F;
    if (a$$392) {
      var b$$309 = ce(a$$392, "w");
      var c$$207 = ce(a$$392, "h");
      var d$$132 = ce(a$$392, "ifi");
      d$$132 = Lb(d$$132);
      d$$132 = {id:d$$132, name:d$$132};
      Ff(d$$132, b$$309, c$$207, !1, Df(a$$392));
      this.Q.document.write(Cf(d$$132));
      this.va = !0;
    }
  };
  var dg = function(a$$393, b$$310, c$$208, d$$133) {
    a$$393 = a$$393 ? 8 : 0;
    b$$310 = b$$310 ? 16 : 0;
    c$$208 = c$$208 ? 32 : 0;
    d$$133 = d$$133 ? 64 : 0;
    return a$$393 | b$$310 | c$$208 | d$$133;
  };
  V$$1.prototype.v = function() {
    return dg(this.Fc, this.Tb, this.Pa, this.Sb);
  };
  V$$1.prototype.Ec = function() {
    this.Fc = !0;
  };
  V$$1.prototype.da = function(a$$394, b$$311, c$$209) {
    return Wf[a$$394] ? (this.Ac(c$$209, a$$394), !0) : "zr" == a$$394 ? (this.Dc(c$$209), this.F && this.gb(b$$311), !0) : !1;
  };
  V$$1.prototype.Qa = function(a$$395) {
    var b$$312 = this.J();
    if (this.Fb == a$$395.origin && b$$312 && b$$312.contentWindow == a$$395.source) {
      a$$395 = a$$395.data;
      var c$$210 = !0;
      this.da(a$$395, b$$312, c$$210) && (A$$1(this.Q, "message", this.K), this.R(), this.ma && (this.ta(b$$312, Yf), b$$312 = this.U, this.U = null, b$$312 && b$$312(this.v(), this.Ia(), !0)));
    }
  };
  V$$1.prototype.J = function() {
    return this.Q.document.getElementById("zrt_ads_frame" + this.Q.google_unique_id);
  };
  V$$1.prototype.ta = function(a$$396, b$$313) {
    a$$396 && a$$396.contentWindow && a$$396.contentWindow.postMessage(b$$313, this.Fb);
  };
  V$$1.prototype.gb = function(a$$397) {
    this.va || (this.ta(a$$397, this.F), this.va = !0, a$$397.style.display = "");
  };
  V$$1.prototype.eb = function(a$$398) {
    this.jc || (a$$398 ? this.Tb = !0 : this.Pa = !0);
  };
  V$$1.prototype.Ac = function(a$$399, b$$314) {
    this.eb(a$$399);
    this.ma = !0;
    switch(b$$314) {
      case Zf:
        this.za = 453848234;
        break;
      case $f:
        this.za = 453848236;
    }
  };
  V$$1.prototype.Dc = function(a$$400) {
    this.eb(a$$400);
    this.hc = !0;
  };
  var eg = function(a$$401, b$$315) {
    try {
      return void 0 != a$$401.frames[b$$315];
    } catch (c$$211) {
      return!1;
    }
  };
  V$$1.prototype.R = function() {
    if (this.Rc() && !this.Pa) {
      var a$$402 = this.J();
      var b$$316 = a$$402 && a$$402.contentWindow;
      if (b$$316) {
        var c$$212 = ga$$1(eg, b$$316);
        var d$$134 = r$$2(V$$1.prototype.da, this);
        b$$316 = ag;
        var e$$76 = !1;
        var f$$49 = !1;
        x$$50(b$$316, function(b$$317) {
          !e$$76 && c$$212(b$$317) && (d$$134(b$$317, a$$402, f$$49), e$$76 = !0);
        });
      }
    }
  };
  var fg = function(a$$403) {
    if (/^\s*$/.test(a$$403)) {
      return!1;
    }
    var b$$318 = /\\["\\\/bfnrtu]/g;
    var c$$213 = /"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var d$$135 = /(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g;
    var e$$77 = /^[\],:{}\s\u2028\u2029]*$/;
    return e$$77.test(a$$403.replace(b$$318, "@").replace(c$$213, "]").replace(d$$135, ""));
  };
  var gg = function(a$$404) {
    a$$404 = String(a$$404);
    if (fg(a$$404)) {
      try {
        return eval("(" + a$$404 + ")");
      } catch (b$$319) {
      }
    }
    throw Error("Invalid JSON string: " + a$$404);
  };
  var hg = function(a$$405) {
    this.qa = a$$405;
  };
  hg.prototype.serialize = function(a$$406) {
    var b$$320 = [];
    this.n(a$$406, b$$320);
    return b$$320.join("");
  };
  hg.prototype.n = function(a$$407, b$$321) {
    switch(typeof a$$407) {
      case "string":
        this.r(a$$407, b$$321);
        break;
      case "number":
        this.L(a$$407, b$$321);
        break;
      case "boolean":
        b$$321.push(a$$407);
        break;
      case "undefined":
        b$$321.push("null");
        break;
      case "object":
        if (null == a$$407) {
          b$$321.push("null");
          break;
        }
        if (n$$2(a$$407)) {
          this.xc(a$$407, b$$321);
          break;
        }
        this.M(a$$407, b$$321);
        break;
      case "function":
        break;
      default:
        throw Error("Unknown type: " + typeof a$$407);;
    }
  };
  var ig = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
  var jg = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
  hg.prototype.r = function(a$$408, b$$322) {
    b$$322.push('"', a$$408.replace(jg, function(a$$409) {
      if (a$$409 in ig) {
        return ig[a$$409];
      }
      var b$$323 = a$$409.charCodeAt(0);
      var e$$78 = "\\u";
      16 > b$$323 ? e$$78 += "000" : 256 > b$$323 ? e$$78 += "00" : 4096 > b$$323 && (e$$78 += "0");
      return ig[a$$409] = e$$78 + b$$323.toString(16);
    }), '"');
  };
  hg.prototype.L = function(a$$410, b$$324) {
    b$$324.push(isFinite(a$$410) && !isNaN(a$$410) ? a$$410 : "null");
  };
  hg.prototype.xc = function(a$$411, b$$325) {
    var c$$214 = a$$411.length;
    b$$325.push("[");
    var d$$136 = "";
    var e$$79 = 0;
    for (;e$$79 < c$$214;e$$79++) {
      b$$325.push(d$$136), d$$136 = a$$411[e$$79], this.n(this.qa ? this.qa.call(a$$411, String(e$$79), d$$136) : d$$136, b$$325), d$$136 = ",";
    }
    b$$325.push("]");
  };
  hg.prototype.M = function(a$$412, b$$326) {
    b$$326.push("{");
    var c$$215 = "";
    var d$$137;
    for (d$$137 in a$$412) {
      if (Object.prototype.hasOwnProperty.call(a$$412, d$$137)) {
        var e$$80 = a$$412[d$$137];
        "function" != typeof e$$80 && (b$$326.push(c$$215), this.r(d$$137, b$$326), b$$326.push(":"), this.n(this.qa ? this.qa.call(a$$412, d$$137, e$$80) : e$$80, b$$326), c$$215 = ",");
      }
    }
    b$$326.push("}");
  };
  var kg = {FLOATING:1, INTERSTITIAL:2};
  var lg = {FLOATING_BOTTOM:1, GDN_INTERSTITIAL:8};
  var mg = {"http://doubleclick":!0, "http://googlesyndication":!0, "https://doubleclick":!0, "https://googlesyndication":!0};
  var ng = function(a$$413) {
    a$$413 = a$$413.document.documentElement.clientWidth;
    return 320 <= a$$413 && 420 >= a$$413;
  };
  var og = function(a$$414) {
    var b$$327 = a$$414.document.documentElement.clientWidth;
    a$$414 = a$$414.innerWidth;
    return.05 > Math.abs(b$$327 / a$$414 - 1);
  };
  var pg = function() {
    this.wasReactiveAdConfigReceived = {};
    this.wasReactiveAdCreated = {};
    this.wasReactiveAdConfigHandlerRegistered = !1;
  };
  var rg = function(a$$415) {
    qg(a$$415);
    return a$$415.google_reactive_ads_global_state;
  };
  var qg = function(a$$416) {
    a$$416.google_reactive_ads_global_state || (a$$416.google_reactive_ads_global_state = new pg);
  };
  var sg = /([0-9.]+)px/;
  var tg = [{width:120, height:240, format:"vertical"}, {width:120, height:600, format:"vertical"}, {width:125, height:125, format:"rectangle"}, {width:160, height:600, format:"vertical"}, {width:180, height:150, format:"rectangle"}, {width:200, height:200, format:"rectangle"}, {width:234, height:60, format:"horizontal"}, {width:250, height:250, format:"rectangle"}, {width:300, height:250, format:"rectangle"}, {width:300, height:600, format:"vertical"}, {width:320, height:50, format:"horizontal"}, 
  {width:336, height:280, format:"rectangle"}, {width:468, height:60, format:"horizontal"}, {width:728, height:90, format:"horizontal"}, {width:970, height:90, format:"horizontal"}];
  var ug = function(a$$417) {
    return "auto" == a$$417 || /^((^|,)(horizontal|vertical|rectangle))+$/.test(a$$417);
  };
  var vg = function(a$$418) {
    return!sg.test(a$$418.style.width) || !sg.test(a$$418.style.height);
  };
  var xg = function(a$$419, b$$328, c$$216) {
    c$$216 = c$$216.getComputedStyle ? c$$216.getComputedStyle(a$$419, null) : a$$419.currentStyle;
    a$$419.style.width = c$$216.width;
    a$$419.style.height = c$$216.height;
    wg(c$$216, b$$328);
  };
  var wg = function(a$$420, b$$329) {
    var c$$217 = ["width", "height"];
    var d$$138 = 0;
    for (;d$$138 < c$$217.length;d$$138++) {
      var e$$81 = "google_ad_" + c$$217[d$$138];
      if (!b$$329.hasOwnProperty(e$$81)) {
        var f$$50 = sg.exec(a$$420[c$$217[d$$138]]);
        f$$50 && (b$$329[e$$81] = Math.round(f$$50[1]));
      }
    }
  };
  var zg = function(a$$421, b$$330, c$$218) {
    var d$$139 = a$$421.offsetWidth;
    var e$$82 = b$$330.google_ad_format;
    c$$218 = yg(d$$139, e$$82, c$$218);
    if (!c$$218) {
      throw Error("Cannot find a responsive size for a container of width=" + d$$139 + "px and data-ad-format=" + e$$82);
    }
    b$$330.google_ad_height = c$$218.height;
    b$$330.google_ad_width = 300 < d$$139 && 300 < c$$218.height ? c$$218.width : 1200 < d$$139 ? 1200 : Math.round(d$$139);
    a$$421.style.height = b$$330.google_ad_height + "px";
    delete b$$330.google_ad_format;
  };
  var yg = function(a$$422, b$$331, c$$219) {
    var d$$140 = tg;
    d$$140.sort(function(a$$423, b$$332) {
      return a$$423.width - b$$332.width || a$$423.height - b$$332.height;
    });
    "auto" == b$$331 && (b$$331 = a$$422 / Ag(c$$219), b$$331 = .25 > b$$331 ? "vertical" : "horizontal,rectangle");
    c$$219 = d$$140.length;
    for (;c$$219--;) {
      if (d$$140[c$$219].width <= a$$422 && -1 != b$$331.indexOf(d$$140[c$$219].format)) {
        return d$$140[c$$219];
      }
    }
    return null;
  };
  var Ag = function(a$$424) {
    a$$424 = a$$424.document;
    return a$$424.documentElement.clientWidth || a$$424.body.clientWidth;
  };
  var Bg = ["google_analytics_uacct", "google_analytics_domain_name"];
  var Eg = function(a$$425, b$$333, c$$220) {
    c$$220 = c$$220 || window;
    Cg(a$$425);
    Dg(a$$425, b$$333, c$$220);
  };
  var Cg = function(a$$426) {
    a$$426.setAttribute("data-adsbygoogle-status", "done");
  };
  var Dg = function(a$$427, b$$334, c$$221) {
    a$$427.style && "none" == a$$427.style.display && (b$$334.google_dn = 1);
    wb(c$$221);
    Fg(a$$427, b$$334, c$$221);
    var d$$141 = Bg;
    var e$$83 = 0;
    for (;e$$83 < d$$141.length;e$$83++) {
      b$$334[d$$141[e$$83]] = b$$334[d$$141[e$$83]] || c$$221[d$$141[e$$83]];
    }
    b$$334.google_loader_used = "aa";
    if ((d$$141 = b$$334.google_ad_output) && "html" != d$$141) {
      throw Error("No support for google_ad_output=" + d$$141);
    }
    te("aa::main", ve, function() {
      Kf(c$$221, b$$334, a$$427);
    });
  };
  var Fg = function(a$$428, b$$335, c$$222) {
    var d$$142 = a$$428.attributes;
    var e$$84 = d$$142.length;
    var f$$51 = 0;
    for (;f$$51 < e$$84;f$$51++) {
      var g$$30 = d$$142[f$$51];
      if (/data-/.test(g$$30.nodeName)) {
        var h$$22 = g$$30.nodeName.replace("data", "google").replace(/-/g, "_");
        b$$335.hasOwnProperty(h$$22) || (b$$335[h$$22] = g$$30.nodeValue);
      }
    }
    ug(b$$335.google_ad_format) ? (zg(a$$428, b$$335, c$$222), b$$335.google_loader_features_used = 128) : vg(a$$428) ? xg(a$$428, b$$335, c$$222) : wg(a$$428.style, b$$335);
  };
  var Hg = function(a$$429) {
    var b$$336 = !1;
    try {
      b$$336 = a$$429.top == a$$429 && !Gg(a$$429.navigator.userAgent) && !!a$$429.postMessage && a$$429.innerHeight >= a$$429.innerWidth && ng(a$$429) && og(a$$429);
    } catch (c$$223) {
    }
    return b$$336;
  };
  var Ig = function(a$$430) {
    switch(a$$430.google_reactive_ad_format) {
      case 1:
        return "bottom";
    }
    return null;
  };
  var Jg = function(a$$431) {
    rg(a$$431);
    return!0;
  };
  var Gg = function(a$$432) {
    return!/(Android|iPhone OS|Windows Phone)/.test(a$$432) || /Android 2/.test(a$$432) || /iPhone OS [34]_/.test(a$$432) || /Windows Phone (?:OS )?[67]/.test(a$$432);
  };
  var Kg = function() {
  };
  var Lg = function(a$$433) {
    if (!a$$433) {
      return null;
    }
    var b$$337 = new Kg;
    var c$$224 = a$$433.adClient;
    p$$1(c$$224) && (b$$337.adClient = c$$224);
    c$$224 = a$$433.adWidth;
    q$$3(c$$224) && 0 < c$$224 && (b$$337.adWidth = c$$224);
    c$$224 = a$$433.adHeight;
    q$$3(c$$224) && 0 < c$$224 && (b$$337.adHeight = c$$224);
    c$$224 = a$$433.adSlot;
    p$$1(c$$224) && (b$$337.adSlot = c$$224);
    c$$224 = a$$433.adChannel;
    p$$1(c$$224) && (b$$337.adChannel = c$$224);
    a$$433 = a$$433.adTest;
    p$$1(a$$433) && (b$$337.adTest = a$$433);
    return b$$337.adClient && b$$337.adWidth && b$$337.adHeight ? b$$337 : null;
  };
  var Mg = function() {
    this.l = null;
  };
  Mg.prototype.ja = function(a$$434, b$$338) {
    this.l = Ng(b$$338);
    this.D(a$$434);
  };
  Mg.prototype.ia = function(a$$435) {
    return(this.l = Lg(a$$435)) ? !0 : !1;
  };
  Mg.prototype.D = function(a$$436) {
    if (this.l) {
      var b$$339 = this.l;
      var c$$225 = a$$436.document.createElement("ins");
      c$$225.className = "adsbygoogle";
      a$$436.document.body.appendChild(c$$225);
      var d$$143 = String(Math.random());
      d$$143 = d$$143.slice(-3);
      d$$143 = {google_ad_client:b$$339.adClient, google_ad_width:b$$339.adWidth, google_ad_height:b$$339.adHeight, google_ad_format:b$$339.adWidth + "x" + b$$339.adHeight + "_as", google_reactive_ad_format:1, google_ad_section:d$$143};
      b$$339.adSlot && (d$$143.google_ad_slot = b$$339.adSlot);
      d$$143.google_ad_channel = "GoogleAnchorAd";
      b$$339.adChannel && (d$$143.google_ad_channel += "+" + b$$339.adChannel);
      b$$339.adTest && (d$$143.google_adtest = b$$339.adTest);
      Eg(c$$225, d$$143, a$$436);
    }
  };
  var Ng = function(a$$437) {
    var b$$340 = new Kg;
    b$$340.adClient = a$$437;
    b$$340.adWidth = 320;
    b$$340.adHeight = 50;
    b$$340.adTest = "on";
    return b$$340;
  };
  var Og = function() {
  };
  var Pg = function(a$$438) {
    if (!a$$438) {
      return null;
    }
    var b$$341 = new Og;
    var c$$226 = a$$438.adClient;
    p$$1(c$$226) && (b$$341.adClient = c$$226);
    a$$438 = a$$438.adTest;
    p$$1(a$$438) && (b$$341.adTest = a$$438);
    return b$$341.adClient ? b$$341 : null;
  };
  var Qg = function() {
    this.l = null;
  };
  Qg.prototype.ja = function(a$$439, b$$342) {
    this.l = new Og;
    this.l.adClient = b$$342;
    this.l.adTest = "on";
    this.D(a$$439);
  };
  Qg.prototype.ia = function(a$$440) {
    return(this.l = Pg(a$$440)) ? !0 : !1;
  };
  Qg.prototype.D = function(a$$441) {
    if (this.l) {
      var b$$343 = this.l;
      var c$$227 = a$$441.document.createElement("ins");
      c$$227.className = "adsbygoogle";
      c$$227.style.display = "none";
      a$$441.document.body.appendChild(c$$227);
      var d$$144 = a$$441.document.documentElement.clientHeight;
      var e$$85 = a$$441.document.documentElement.clientWidth;
      d$$144 = {google_ad_client:b$$343.adClient, google_ad_width:e$$85, google_ad_height:d$$144, google_reactive_ad_format:8};
      b$$343.adTest && (d$$144.google_ad_test = b$$343.adTest);
      Eg(c$$227, d$$144, a$$441);
    }
  };
  var Tg = function(a$$442, b$$344) {
    return Rg(a$$442, b$$344) && Sg(a$$442);
  };
  var Rg = function(a$$443, b$$345) {
    var c$$228 = !1;
    try {
      c$$228 = a$$443.top == a$$443 && !!a$$443.postMessage && og(a$$443) && ng(a$$443) && !Bc(b$$345) && !Ha$$1;
    } catch (d$$145) {
    }
    return c$$228;
  };
  var Sg = function(a$$444) {
    a$$444 = rg(a$$444);
    return!!a$$444.wasReactiveAdConfigReceived[2];
  };
  var Ug = {1:1, 8:2};
  var Vg = function(a$$445, b$$346, c$$229) {
    switch(c$$229) {
      case 1:
        return Hg(a$$445) && Jg(a$$445);
      case 2:
        return Tg(a$$445, b$$346);
    }
    return!1;
  };
  var Wg = function(a$$446, b$$347, c$$230) {
    switch(c$$230) {
      case 1:
        return Hg(a$$446);
      case 2:
        return Rg(a$$446, b$$347);
    }
    return!1;
  };
  var Xg = function(a$$447, b$$348) {
    var c$$231 = b$$348.google_reactive_ad_format;
    if (!Ec(lg, c$$231)) {
      return!1;
    }
    c$$231 = Ug[c$$231] || null;
    if (!Vg(a$$447, b$$348, c$$231)) {
      return!1;
    }
    var d$$146 = rg(a$$447);
    var e$$86 = d$$146.wasReactiveAdCreated[c$$231];
    d$$146.wasReactiveAdCreated[c$$231] = !0;
    return!e$$86;
  };
  var Yg = function(a$$448) {
    switch(a$$448) {
      case 1:
        return new Mg;
      case 2:
        return new Qg;
    }
    return null;
  };
  var Zg = function(a$$449) {
    a$$449 = a$$449.google_reactive_ad_format;
    return Ec(lg, a$$449) ? "" + a$$449 : null;
  };
  var ah = function(a$$450, b$$349) {
    var c$$232 = 0;
    x$$50(kg, function(d$$147) {
      $g(a$$450, b$$349, d$$147) && (c$$232 |= d$$147);
    });
    return c$$232 ? "" + c$$232 : null;
  };
  var bh = function(a$$451, b$$350) {
    var c$$233 = a$$451.location.hash;
    if (!c$$233 || !c$$233.indexOf) {
      return!1;
    }
    var d$$148;
    -1 != c$$233.indexOf("google_anchor_debug") && (d$$148 = Yg(1));
    if (!d$$148) {
      return!1;
    }
    d$$148.ja(a$$451, b$$350);
    return!0;
  };
  var ch = function(a$$452, b$$351) {
    var c$$234 = rg(b$$351);
    var d$$149 = !0;
    if (c$$234.wasReactiveAdConfigHandlerRegistered || !d$$149) {
      return!1;
    }
    var e$$87 = !1;
    x$$50(kg, function(c$$235) {
      $g(a$$452, b$$351, c$$235) && (e$$87 = !0);
    });
    return c$$234.wasReactiveAdConfigHandlerRegistered = e$$87;
  };
  var $g = function(a$$453, b$$352, c$$236) {
    var d$$150 = rg(b$$352);
    var e$$88 = Ug[a$$453.google_reactive_ad_format] || null;
    return Wg(b$$352, a$$453, c$$236) && e$$88 != c$$236 && !d$$150.wasReactiveAdCreated[c$$236];
  };
  var dh = function(a$$454) {
    this.lc = a$$454;
    this.K = ye("rach::hdlr", r$$2(this.ub, this));
    y$$31(a$$454, "message", this.K);
  };
  var eh = function(a$$455, b$$353) {
    var c$$237 = bh(a$$455, b$$353);
    c$$237 || new dh(a$$455);
  };
  dh.prototype.ub = function(a$$456) {
    if (a$$456 && mg[a$$456.origin]) {
      var b$$354;
      try {
        b$$354 = gg(a$$456.data);
      } catch (c$$238) {
      }
      if (b$$354) {
        (a$$456 = b$$354.adType) || (a$$456 = 1);
        var d$$151 = rg(this.lc);
        if (!d$$151.wasReactiveAdConfigReceived[a$$456]) {
          var e$$89 = Yg(a$$456);
          e$$89 && e$$89.ia(b$$354) && (d$$151.wasReactiveAdConfigReceived[a$$456] = !0, e$$89.D(this.lc));
        }
      }
    }
  };
  var W$$1 = function(a$$457, b$$355, c$$239) {
    this.ib = a$$457;
    this.Tc = b$$355;
    this.jd = c$$239;
    this.Ic = !1;
    this.current = null;
  };
  W$$1.prototype.Ca = function() {
    if (!this.Ic) {
      var a$$458 = ha$$1();
      a$$458 = (a$$458 - this.hb) / (this.Sc - this.hb);
      1 <= a$$458 && (a$$458 = 1);
      this.Pc(a$$458);
      this.C();
      1 == a$$458 ? this.ka() : w$$6.setTimeout(r$$2(this.Ca, this), 20);
    }
  };
  W$$1.prototype.ka = function() {
  };
  W$$1.prototype.C = function() {
  };
  W$$1.prototype.Pc = function(a$$459) {
    this.current = [];
    var b$$356 = 0;
    for (;b$$356 < this.ib.length;b$$356++) {
      this.current.push((this.Tc[b$$356] - this.ib[b$$356]) * a$$459 + this.ib[b$$356]);
    }
  };
  W$$1.prototype.play = function() {
    this.hb = ha$$1();
    this.Sc = this.hb + this.jd;
    this.Ca();
  };
  W$$1.prototype.stop = function() {
    this.Ic = !0;
  };
  var fh = function(a$$460, b$$357) {
    this.W = a$$460;
    W$$1.call(this, [Number(Md(a$$460))], [1], b$$357);
  };
  ja$$1(fh, W$$1);
  fh.prototype.C = function() {
    Nd(this.W, this.current[0]);
  };
  var gh = function(a$$461, b$$358, c$$240) {
    this.W = a$$461;
    this.onEndCallback = c$$240 ? c$$240 : null;
    W$$1.call(this, [Number(Md(a$$461))], [0], b$$358);
  };
  ja$$1(gh, W$$1);
  gh.prototype.ka = function() {
    qd(this.W);
    if (this.onEndCallback) {
      this.onEndCallback();
    }
  };
  gh.prototype.C = function() {
    Nd(this.W, this.current[0]);
  };
  var hh = function(a$$462, b$$359, c$$241) {
    this.sb = a$$462;
    this.s = b$$359;
    this.i = c$$241;
  };
  hh.prototype.ba = function() {
    if (!this.X) {
      this.X = [];
      var a$$463 = this.sb;
      for (;a$$463 && !bd(a$$463, this.Pb());) {
        this.X.push(a$$463), a$$463 = a$$463.parentNode;
      }
      a$$463 && this.X.push(a$$463);
    }
    return this.X;
  };
  hh.prototype.Pb = function() {
    return "adsbygoogle";
  };
  hh.prototype.u = function() {
    if (!this.Ub) {
      var a$$464 = this.ba();
      if (!a$$464 || 2 > a$$464.length) {
        return null;
      }
      this.Ub = a$$464[a$$464.length - 1];
    }
    return this.Ub;
  };
  var X$$1 = function(a$$465, b$$360, c$$242, d$$152) {
    hh.call(this, a$$465, b$$360, c$$242);
    this.I = this.Ib = this.Da = !1;
    this.w = null;
    this.Vc = Qd(c$$242.document.body, "padding");
    this.B = 0;
    this.Ra = !1;
    this.ga = !0;
    this.gd = Kd(Ld, this.s);
    this.ua = d$$152;
    this.hide();
    this.Zc = lb$$1(this.i, "orientationchange", this, this.ec);
    this.$c = lb$$1(this.i, "resize", this, this.tc);
    this.ad = lb$$1(this.i, "scroll", this, this.vc);
    this.bd = lb$$1(this.i, "touchcancel", this, this.Kc);
    this.cd = lb$$1(this.i, "touchend", this, this.Lc);
    this.dd = lb$$1(this.i, "touchmove", this, this.Mc);
    this.ed = lb$$1(this.i, "touchstart", this, this.Nc);
  };
  ja$$1(X$$1, hh);
  X$$1.prototype.dismiss = function() {
    if (!this.Da) {
      this.Da = !0;
      A$$1(this.i, "orientationchange", this.Zc);
      A$$1(this.i, "resize", this.$c);
      A$$1(this.i, "scroll", this.ad);
      A$$1(this.i, "touchcancel", this.bd);
      A$$1(this.i, "touchend", this.cd);
      A$$1(this.i, "touchmove", this.dd);
      A$$1(this.i, "touchstart", this.ed);
      var a$$466 = new gh(this.u(), 250, r$$2(this.$a, this));
      a$$466.play();
    }
  };
  X$$1.prototype.hide = function() {
    this.ga && (Q$$1(this.u(), "display", "none"), this.$a(), this.ga = !1);
  };
  X$$1.prototype.A = function() {
    this.Ib = !0;
    if (this.Sa() && og(this.i) && !this.Ra) {
      var a$$467 = this.u();
      a$$467 && (this.show(), Q$$1(a$$467, {position:"fixed", background:"rgba(0,0,0,0.65)", boxShadow:"0 -5px 5px -5px rgba(0,0,0,0.5)", zIndex:999999}), this.qb(), a$$467 = new fh(a$$467, 350), a$$467.play(), this.Ra = !0);
    }
  };
  X$$1.prototype.show = function() {
    this.ga || (this.pb(), Q$$1(this.u(), {display:"block", opacity:this.Ra ? 1 : 0}), this.ga = !0);
  };
  X$$1.prototype.pb = function() {
    var a$$468 = this.Ma(this.ua);
    a$$468 = this.Rb(this.ua, a$$468);
    this.cb(this.i.document.body, a$$468);
  };
  X$$1.prototype.qb = function() {
    var a$$469 = this.ba();
    if (a$$469 && !(2 > a$$469.length)) {
      var b$$361 = a$$469[a$$469.length - 1];
      var c$$243 = a$$469[0];
      if (b$$361 && c$$243) {
        c$$243 = this.Ma(this.ua);
        var d$$153 = this.Qb(this.ua, c$$243);
        Q$$1(b$$361, d$$153);
        b$$361 = a$$469.length - 1;
        for (;0 <= b$$361;--b$$361) {
          Id(a$$469[b$$361], c$$243);
        }
        Id(this.s, c$$243);
      }
    }
  };
  X$$1.prototype.Qb = function(a$$470) {
    var b$$362 = {};
    switch(a$$470) {
      case "bottom":
        b$$362 = {left:"0px", bottom:"0px"};
    }
    return b$$362;
  };
  X$$1.prototype.Rb = function(a$$471, b$$363) {
    var c$$244;
    switch(a$$471) {
      case "bottom":
        if (c$$244 = Qd(this.i.document.body, "padding")) {
          c$$244.bottom += b$$363.height;
        }
      ;
    }
    return c$$244;
  };
  X$$1.prototype.Ma = function(a$$472) {
    var b$$364 = this.i.innerWidth;
    var c$$245;
    switch(a$$472) {
      case "bottom":
        c$$245 = new u$$2(b$$364, this.gd.height);
    }
    return c$$245;
  };
  X$$1.prototype.Sa = function() {
    return this.i.innerHeight >= this.i.innerWidth;
  };
  X$$1.prototype.ec = function() {
    this.o();
  };
  X$$1.prototype.tc = function() {
    this.o();
  };
  X$$1.prototype.vc = function() {
    this.o();
  };
  X$$1.prototype.Kc = function() {
    this.w = "touchcancel";
    this.i.setTimeout(r$$2(function() {
      "touchcancel" == this.w && (this.B = 0, this.I = !1, this.o());
    }, this), 1E3);
  };
  X$$1.prototype.Lc = function(a$$473) {
    this.w = "touchend";
    var b$$365 = a$$473.touches.length;
    2 > b$$365 ? this.i.setTimeout(r$$2(function() {
      "touchend" == this.w && (this.B = b$$365, this.I = !1, this.o());
    }, this), 1E3) : (this.B = b$$365, this.o());
  };
  X$$1.prototype.Mc = function(a$$474) {
    this.w = "touchmove";
    this.B = a$$474.touches.length;
    this.I = !0;
    this.o();
  };
  X$$1.prototype.Nc = function(a$$475) {
    this.w = "touchstart";
    this.B = a$$475.touches.length;
    this.I = !1;
    this.o();
  };
  X$$1.prototype.$a = function() {
    this.cb(this.i.document.body, this.Vc);
  };
  X$$1.prototype.cb = function(a$$476, b$$366) {
    Q$$1(a$$476, {paddingTop:b$$366.top + "px", paddingLeft:b$$366.left + "px", paddingRight:b$$366.right + "px", paddingBottom:b$$366.bottom + "px"});
  };
  X$$1.prototype.o = function() {
    !this.Sa() || !og(this.i) || 2 <= this.B && this.I || !this.Ib || this.Da ? this.hide() : (this.A(), this.show());
  };
  var ih = function(a$$477) {
    this.i = a$$477;
    this.cc = {};
    this.Wb();
  };
  ih.prototype.Wb = function() {
    this.pa(this.cc);
    var a$$478 = ye("ras::hdlr", r$$2(this.gc, this));
    y$$31(this.i, "message", a$$478);
  };
  ih.prototype.gc = function(a$$479) {
    if (a$$479 && a$$479.data && mg[a$$479.origin]) {
      var b$$367 = 0;
      for (;2 > b$$367;b$$367++) {
        var c$$246;
        var d$$154;
        switch(b$$367) {
          case 0:
            d$$154 = c$$246 = a$$479.data;
            break;
          default:
            try {
              c$$246 = (d$$154 = gg(a$$479.data)) && d$$154.msg_type;
            } catch (e$$90) {
              d$$154 = c$$246 = null;
            }
          ;
        }
        var f$$52 = this.cc[c$$246];
        if (f$$52) {
          f$$52.call(this, d$$154);
          break;
        }
      }
    }
  };
  var jh = function(a$$480, b$$368) {
    ih.call(this, a$$480);
    this.Kb = b$$368;
    this.H = this.Cb = !1;
  };
  ja$$1(jh, ih);
  jh.prototype.Bb = function() {
    this.Cb || (this.Cb = !0, this.Kb.dismiss());
  };
  jh.prototype.Gb = function() {
    this.H || (this.H = !0, this.Kb.A());
  };
  jh.prototype.pa = function(a$$481) {
    a$$481.fill = this.Gb;
    a$$481.dismiss = this.Bb;
  };
  var Y$$1 = function(a$$482, b$$369, c$$247) {
    hh.call(this, a$$482, b$$369, c$$247);
    this.Wc = c$$247.location.hostname;
    this.Xc = kh(c$$247.location.href);
    this.ea = [];
    this.ob = this.kd = !1;
    this.N(!1);
    this.Cc();
  };
  ja$$1(Y$$1, hh);
  var lh = {backgroundColor:"white", opacity:"1", position:"fixed", left:"0px", top:"0px", display:"none", zIndex:"2147483647"};
  var mh = {width:"100%", height:"100%"};
  var nh = {width:"100%", "min-height":"100%"};
  var kh = function(a$$483) {
    var b$$370 = Re(a$$483);
    a$$483 = b$$370[5] || "";
    b$$370 = b$$370[6];
    return a$$483 + (b$$370 ? "?" + b$$370 : "");
  };
  Y$$1.prototype.mb = function(a$$484) {
    this.ob || (this.ob = !0, this.rc = a$$484, this.Yb());
  };
  Y$$1.prototype.A = function(a$$485) {
    this.N(!0);
    var b$$371 = ye("ifr::hide", r$$2(this.tb, this));
    y$$31(this.i, "pagehide", b$$371);
    this.vb(a$$485);
  };
  Y$$1.prototype.rb = function(a$$486) {
    if (a$$486.onclick || !a$$486.href) {
      return!1;
    }
    var b$$372 = Re(a$$486.href);
    var c$$248 = b$$372[3];
    a$$486 = kh(a$$486.href);
    b$$372 = b$$372[7];
    return!c$$248 || c$$248 != this.Wc || a$$486 == this.Xc && b$$372 ? !1 : !0;
  };
  Y$$1.prototype.tb = function() {
    this.N(!1);
    this.xb();
    this.sc();
  };
  Y$$1.prototype.Ba = function(a$$487, b$$373) {
    var c$$249 = this.i.document.createElement("link");
    c$$249.setAttribute("rel", b$$373);
    c$$249.setAttribute("href", a$$487);
    return c$$249;
  };
  Y$$1.prototype.vb = function(a$$488) {
    this.kc = this.Ba(a$$488, "prerender");
    this.ic = this.Ba(a$$488, "prefetch");
    this.i.document.body.appendChild(this.kc);
    this.i.document.body.appendChild(this.ic);
  };
  Y$$1.prototype.xb = function() {
    var a$$489 = 0;
    for (;a$$489 < this.ea.length;++a$$489) {
      var b$$374 = this.ea[a$$489];
      A$$1(b$$374, "click", this.rc);
      b$$374.removeAttribute("data-google-reveal-ad");
    }
    this.ea = [];
  };
  Y$$1.prototype.Yb = function() {
    var a$$490 = this.i.document.links;
    var b$$375 = 0;
    for (;b$$375 < a$$490.length;++b$$375) {
      var c$$250 = a$$490[b$$375];
      this.rb(c$$250) && this.Xb(c$$250);
    }
  };
  Y$$1.prototype.Xb = function(a$$491) {
    this.ea.push(a$$491);
    y$$31(a$$491, "click", this.rc);
    a$$491.setAttribute("data-google-reveal-ad", "true");
  };
  Y$$1.prototype.sc = function() {
    this.i.document.body.removeChild(this.kc);
    this.i.document.body.removeChild(this.ic);
  };
  Y$$1.prototype.Cc = function() {
    var a$$492 = this.ba();
    if (a$$492 && !(2 > a$$492.length)) {
      var b$$376 = a$$492[a$$492.length - 1];
      if (b$$376) {
        var c$$251 = 0;
        for (;c$$251 < a$$492.length;++c$$251) {
          Q$$1(a$$492[c$$251], mh);
        }
        Q$$1(this.s, mh);
        a$$492 = this.sb.contentWindow.document;
        Q$$1(a$$492.documentElement, mh);
        Q$$1(a$$492.body, nh);
        Q$$1(b$$376, lh);
        this.N(!1);
      }
    }
  };
  Y$$1.prototype.N = function(a$$493) {
    var b$$377 = this.u();
    b$$377 && (b$$377.style.display = a$$493 ? "block" : "none");
  };
  var Z$$1 = function(a$$494, b$$378, c$$252) {
    ih.call(this, a$$494);
    this.s = b$$378;
    this.Zb = c$$252;
    this.G = {};
    this.Z = this.H = !1;
  };
  ja$$1(Z$$1, ih);
  Z$$1.prototype.pa = function(a$$495) {
    a$$495["i-fill"] = this.Hb;
    a$$495["i-go"] = this.Nb;
    a$$495["i-no"] = this.Mb;
  };
  Z$$1.prototype.T = function() {
    return this.G.iclk_url || null;
  };
  Z$$1.prototype.Hb = function() {
    if (!this.H) {
      this.H = !0;
      var a$$496 = ye("ias::chdlr", r$$2(this.dc, this));
      this.Zb.mb(a$$496);
    }
  };
  Z$$1.prototype.Nb = function() {
    if (!this.Z) {
      this.Z = !0;
      this.i.clearTimeout(this.Jc);
      this.Zb.A(this.T());
      var a$$497 = {msg_type:"i-view"};
      this.s.contentWindow.postMessage((new hg(void 0)).serialize(a$$497), "http://doubleclick");
    }
  };
  Z$$1.prototype.Mb = function() {
    this.Z || (this.Z = !0, this.i.clearTimeout(this.Jc), this.Va());
  };
  Z$$1.prototype.Va = function() {
    this.i.location.href = this.T();
  };
  Z$$1.prototype.dc = function(a$$498) {
    if (this.T()) {
      return a$$498.preventDefault(), !1;
    }
    var b$$379 = a$$498 && a$$498.target && a$$498.target.href;
    var c$$253 = og(this.i);
    if (!b$$379 || !c$$253) {
      return!0;
    }
    this.uc(a$$498.target);
    if (!this.wc()) {
      return!0;
    }
    this.qc();
    a$$498.preventDefault();
    return!1;
  };
  Z$$1.prototype.qc = function() {
    var a$$499 = xe("ias::nav", r$$2(this.Va, this));
    this.Jc = this.i.setTimeout(a$$499, 1E3);
  };
  Z$$1.prototype.uc = function(a$$500) {
    this.G.iclk_url = a$$500.getAttribute("href");
    this.G.iclk_ltx = vd(a$$500);
    (a$$500 = a$$500.getAttribute("title")) && (this.G.iclk_ltl = a$$500);
  };
  Z$$1.prototype.wc = function() {
    try {
      var a$$501 = {msg_type:"i-prepare"};
      this.Bc(a$$501);
      this.s.contentWindow.postMessage((new hg(void 0)).serialize(a$$501), "http://doubleclick");
      return!0;
    } catch (b$$380) {
    }
    return!1;
  };
  Z$$1.prototype.Bc = function(a$$502) {
    var b$$381 = this.G;
    a$$502.iclk_url = b$$381.iclk_url;
    b$$381.iclk_ltx && (a$$502.iclk_ltx = b$$381.iclk_ltx);
    b$$381.iclk_ltl && (a$$502.iclk_ltl = b$$381.iclk_ltl);
  };
  var qh = function(a$$503, b$$382, c$$254, d$$155) {
    if (!(a$$503 && b$$382 && c$$254 && d$$155)) {
      return null;
    }
    b$$382 = d$$155.document.getElementById(b$$382);
    if (!b$$382) {
      return null;
    }
    var e$$91 = Ug[a$$503.google_reactive_ad_format] || null;
    switch(e$$91) {
      case 1:
        return oh(a$$503, b$$382, c$$254, d$$155);
      case 2:
        return ph(a$$503, b$$382, c$$254, d$$155);
    }
    return null;
  };
  var oh = function(a$$504, b$$383, c$$255, d$$156) {
    a$$504 = Ig(a$$504);
    b$$383 = new X$$1(b$$383, c$$255, d$$156, a$$504);
    return new jh(d$$156, b$$383);
  };
  var ph = function(a$$505, b$$384, c$$256, d$$157) {
    a$$505 = new Y$$1(b$$384, c$$256, d$$157);
    return new Z$$1(d$$157, c$$256, a$$505);
  };
  var rh = function() {
    var a$$506 = "";
    if (document.documentMode) {
      var b$$385 = document.createElement("IFRAME");
      b$$385.frameBorder = 0;
      b$$385.style.height = 0;
      b$$385.style.width = 0;
      b$$385.style.position = "absolute";
      if (document.body) {
        document.body.appendChild(b$$385);
        try {
          var c$$257 = b$$385.contentWindow.document;
          c$$257.open();
          c$$257.write("<!DOCTYPE html>");
          c$$257.close();
          a$$506 += c$$257.documentMode;
        } catch (d$$158) {
        }
        document.body.removeChild(b$$385);
      }
    }
    return a$$506;
  };
  var sh$$2 = function(a$$507) {
    try {
      var b$$386 = a$$507.screenX;
      var c$$258 = a$$507.screenY;
    } catch (d$$159) {
    }
    try {
      var e$$92 = a$$507.outerWidth;
      var f$$53 = a$$507.outerHeight;
    } catch (g$$31) {
    }
    try {
      var h$$23 = a$$507.innerWidth;
      var k$$10 = a$$507.innerHeight;
    } catch (l$$12) {
    }
    return[a$$507.screenLeft, a$$507.screenTop, b$$386, c$$258, a$$507.screen ? a$$507.screen.availWidth : void 0, a$$507.screen ? a$$507.screen.availTop : void 0, e$$92, f$$53, h$$23, k$$10];
  };
  var uh = function(a$$508, b$$387) {
    var c$$259 = b$$387 || th;
    var d$$160 = c$$259.length;
    var e$$93 = "";
    for (;0 < a$$508--;) {
      e$$93 += c$$259.charAt(Math.floor(Math.random() * d$$160));
    }
    return e$$93;
  };
  var th = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var vh = {google_ad_channel:"channel", google_ad_host:"host", google_ad_host_channel:"h_ch", google_ad_host_tier_id:"ht_id", google_ad_section:"region", google_ad_type:"ad_type", google_adtest:"adtest", google_allow_expandable_ads:"ea", google_alternate_ad_url:"alternate_ad_url", google_alternate_color:"alt_color", google_bid:"bid", google_city:"gcs", google_color_bg:"color_bg", google_color_border:"color_border", google_color_line:"color_line", google_color_link:"color_link", google_color_text:"color_text", 
  google_color_url:"color_url", google_contents:"contents", google_country:"gl", google_cpm:"cpm", google_cust_age:"cust_age", google_cust_ch:"cust_ch", google_cust_gender:"cust_gender", google_cust_id:"cust_id", google_cust_interests:"cust_interests", google_cust_job:"cust_job", google_cust_l:"cust_l", google_cust_lh:"cust_lh", google_cust_u_url:"cust_u_url", google_disable_video_autoplay:"disable_video_autoplay", google_ed:"ed", google_encoding:"oe", google_feedback:"feedback_link", google_flash_version:"flash", 
  google_font_face:"f", google_font_size:"fs", google_hints:"hints", google_kw:"kw", google_kw_type:"kw_type", google_language:"hl", google_page_url:"url", google_region:"gr", google_reuse_colors:"reuse_colors", google_safe:"adsafe", google_sc_id:"sc_id", google_tag_info:"gut", google_targeting:"targeting", google_ui_features:"ui", google_ui_version:"uiv", google_video_doc_id:"video_doc_id", google_video_product_type:"video_product_type"};
  var wh = {google_ad_block:"ad_block", google_ad_client:"client", google_ad_format:"format", google_ad_output:"output", google_ad_callback:"callback", google_ad_height:"h", google_ad_override:"google_ad_override", google_ad_slot:"slotname", google_ad_unit_key:"adk", google_ad_unit_key_2:"adk2", google_ad_width:"w", google_captcha_token:"captok", google_ctr_threshold:"ctr_t", google_cust_criteria:"cust_params", google_image_size:"image_size", google_last_modified_time:"lmt", google_loeid:"loeid", 
  google_max_num_ads:"num_ads", google_max_radlink_len:"max_radlink_len", google_mtl:"mtl", google_num_radlinks:"num_radlinks", google_num_radlinks_per_unit:"num_radlinks_per_unit", google_only_ads_with_video:"only_ads_with_video", google_rl_dest_url:"rl_dest_url", google_rl_filtering:"rl_filtering", google_rl_mode:"rl_mode", google_rt:"rt", google_sui:"sui", google_skip:"skip", google_tag_for_child_directed_treatment:"tfcd", google_tdsma:"tdsma", google_tfs:"tfs", google_tl:"tl"};
  var xh = {google_lact:"lact", google_only_pyv_ads:"pyv", google_only_userchoice_ads:"uc", google_scs:"scs", google_with_pyv_ads:"withpyv", google_previous_watch:"p_w", google_previous_searches:"p_s", google_video_url_to_fetch:"durl", google_yt_pt:"yt_pt", google_yt_up:"yt_up"};
  var Ah = function() {
    null == window.google_ad_output && (window.google_ad_output = "html");
    window.google_ad_client = yh(window.google_ad_format, window.google_ad_client);
    null == window.google_flash_version && (window.google_flash_version = sb$$1());
    window.google_ad_section = window.google_ad_section || window.google_ad_region || "";
    window.google_country = window.google_country || window.google_gl || "";
    var a$$509 = (new Date).getTime();
    n$$2(window.google_color_bg) && (window.google_color_bg = zh(window.google_color_bg, a$$509));
    n$$2(window.google_color_text) && (window.google_color_text = zh(window.google_color_text, a$$509));
    n$$2(window.google_color_link) && (window.google_color_link = zh(window.google_color_link, a$$509));
    n$$2(window.google_color_url) && (window.google_color_url = zh(window.google_color_url, a$$509));
    n$$2(window.google_color_border) && (window.google_color_border = zh(window.google_color_border, a$$509));
    n$$2(window.google_color_line) && (window.google_color_line = zh(window.google_color_line, a$$509));
  };
  var Bh = function(a$$510) {
    x$$50(vh, function(b$$388, c$$260) {
      a$$510[c$$260] = null;
    });
    x$$50(wh, function(b$$389, c$$261) {
      a$$510[c$$261] = null;
    });
    x$$50(xh, function(b$$390, c$$262) {
      a$$510[c$$262] = null;
    });
    a$$510.google_container_id = null;
    a$$510.google_enable_async = null;
    a$$510.google_eids = null;
    a$$510.google_page_location = null;
    a$$510.google_referrer_url = null;
    a$$510.google_show_ads_impl = null;
    a$$510.google_ad_region = null;
    a$$510.google_gl = null;
    a$$510.google_iframe_name = null;
    a$$510.google_loader_used = null;
    a$$510.google_loader_features_used = null;
  };
  var zh = function(a$$511, b$$391) {
    Ae(2);
    return a$$511[b$$391 % a$$511.length];
  };
  var yh = function(a$$512, b$$392) {
    if (!b$$392) {
      return "";
    }
    b$$392 = b$$392.toLowerCase();
    return b$$392 = Ch(b$$392);
  };
  var Ch = function(a$$513) {
    a$$513 && "ca-" != a$$513.substring(0, 3) && (a$$513 = "ca-" + a$$513);
    return a$$513;
  };
  var Dh = navigator;
  var Kh = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/;
  var Lh = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/;
  var $$$1 = function(a$$514) {
    this.j = a$$514;
  };
  var Mh = function(a$$515) {
    return a$$515.google_sensors ? (a$$515 = a$$515.google_sensors, new $$$1(a$$515)) : null;
  };
  $$$1.prototype.zb = function() {
    return this.j.didDeviceMotionCallbacksTimeoutExpire;
  };
  $$$1.prototype.Ab = function() {
    return this.j.didDeviceOrientationCallbacksTimeoutExpire;
  };
  $$$1.prototype.$ = function() {
    return this.j.deviceAccelerationWithGravity;
  };
  $$$1.prototype.aa = function() {
    return this.j.deviceAccelerationWithoutGravity;
  };
  $$$1.prototype.ca = function() {
    return this.j.deviceOrientation;
  };
  $$$1.prototype.Oa = function() {
    return this.j.startTimeStamp && this.j.stopTimeStamp ? this.j.stopTimeStamp - this.j.startTimeStamp : null;
  };
  $$$1.prototype.nc = function(a$$516, b$$393) {
    var c$$263 = this.j;
    Nh(c$$263.deviceOrientationEventCallbacks, a$$516, b$$393, function() {
      c$$263.didDeviceOrientationCallbacksTimeoutExpire = !0;
    });
  };
  $$$1.prototype.mc = function(a$$517, b$$394) {
    var c$$264 = this.j;
    Nh(c$$264.deviceMotionEventCallbacks, a$$517, b$$394, function() {
      c$$264.didDeviceMotionCallbacksTimeoutExpire = !0;
    });
  };
  $$$1.prototype.fb = function() {
    return this.O() || this.P();
  };
  $$$1.prototype.O = function() {
    return "ds_wfea" === this.j.sensorsExperiment && this.j.isDeviceMotionEventListenerRegistered && !this.j.deviceAccelerationWithGravity && !this.j.deviceAccelerationWithoutGravity;
  };
  $$$1.prototype.P = function() {
    return "ds_wfea" === this.j.sensorsExperiment && this.j.isDeviceOrientationEventListenerRegistered && !this.j.deviceOrientation;
  };
  $$$1.prototype.Gc = function() {
    this.j.startTimeStamp = (new Date).getTime();
  };
  $$$1.prototype.Hc = function() {
    this.j.stopTimeStamp = (new Date).getTime();
  };
  var Nh = function(a$$518, b$$395, c$$265, d$$161) {
    a$$518.push(b$$395);
    c$$265 && window.setTimeout(function() {
      d$$161 && 0 < a$$518.length && d$$161();
      Oh(a$$518);
    }, c$$265);
  };
  var Oh = function(a$$519) {
    var b$$396 = 0;
    for (;b$$396 < a$$519.length;++b$$396) {
      a$$519[b$$396]();
    }
    a$$519.length = 0;
  };
  var Ph = function(a$$520) {
    var b$$397 = K$$1.DEVICE_SENSORS;
    if (a$$520.google_sensors) {
      a$$520 = a$$520.google_sensors.sensorsExperiment;
      var c$$266;
      switch(a$$520) {
        case "ds_c":
          c$$266 = b$$397.CONTROL;
          break;
        case "ds_zl":
          c$$266 = b$$397.EXPERIMENT_ZERO_LATENCY;
          break;
        case "ds_wfea":
          c$$266 = b$$397.EXPERIMENT_WAIT_FOR_EVENT_ARRIVAL;
      }
      c$$266 && H$$1().k([c$$266], 1, 10);
    }
  };
  var Qh = null;
  var Rh = null;
  var Th = function(a$$521, b$$398) {
    if (!ca$$1(a$$521)) {
      throw Error("encodeByteArray takes an array as a parameter");
    }
    Sh();
    var c$$267 = b$$398 ? Rh : Qh;
    var d$$162 = [];
    var e$$94 = 0;
    for (;e$$94 < a$$521.length;e$$94 += 3) {
      var f$$54 = a$$521[e$$94];
      var g$$32 = e$$94 + 1 < a$$521.length;
      var h$$24 = g$$32 ? a$$521[e$$94 + 1] : 0;
      var k$$11 = e$$94 + 2 < a$$521.length;
      var l$$13 = k$$11 ? a$$521[e$$94 + 2] : 0;
      var z$$6 = f$$54 >> 2;
      f$$54 = (f$$54 & 3) << 4 | h$$24 >> 4;
      h$$24 = (h$$24 & 15) << 2 | l$$13 >> 6;
      l$$13 = l$$13 & 63;
      k$$11 || (l$$13 = 64, g$$32 || (h$$24 = 64));
      d$$162.push(c$$267[z$$6], c$$267[f$$54], c$$267[h$$24], c$$267[l$$13]);
    }
    return d$$162.join("");
  };
  var Sh = function() {
    if (!Qh) {
      Qh = {};
      Rh = {};
      var a$$522 = 0;
      for (;65 > a$$522;a$$522++) {
        Qh[a$$522] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a$$522), Rh[a$$522] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a$$522);
      }
    }
  };
  var Uh = function(a$$523) {
    this.t = a$$523;
  };
  Uh.prototype.yb = function() {
    return!!this.t.$() || !!this.t.aa() || !!this.t.ca();
  };
  Uh.prototype.Ob = function() {
    var a$$524 = this.Eb(this.t.ca());
    var b$$399 = this.Ea(this.t.aa());
    var c$$268 = this.Ea(this.t.$());
    a$$524 = a$$524.concat(b$$399, c$$268);
    return Th(a$$524, !0);
  };
  Uh.prototype.Eb = function(a$$525) {
    var b$$400 = function(a$$526) {
      return void 0 !== a$$526 && null !== a$$526 ? (a$$526 += 360, [Math.floor(a$$526 / 256), a$$526 % 256]) : [128, 0];
    };
    var c$$269 = [];
    if (a$$525) {
      c$$269 = b$$400(a$$525.beta).concat(b$$400(a$$525.gamma)).concat(b$$400(a$$525.alpha));
    } else {
      a$$525 = 0;
      for (;3 > a$$525;++a$$525) {
        c$$269 = c$$269.concat([128, 0]);
      }
    }
    return c$$269;
  };
  Uh.prototype.Ea = function(a$$527) {
    var b$$401 = function(a$$528) {
      return void 0 !== a$$528 && null !== a$$528 ? (a$$528 = Math.min(Math.max(a$$528, -30), 30), a$$528 = Math.round(546 * (a$$528 + 30)), [Math.floor(a$$528 / 256), a$$528 % 256]) : [128, 0];
    };
    var c$$270 = [];
    if (a$$527) {
      c$$270 = b$$401(a$$527.x).concat(b$$401(a$$527.y)).concat(b$$401(a$$527.z));
    } else {
      a$$527 = 0;
      for (;3 > a$$527;++a$$527) {
        c$$270 = c$$270.concat([128, 0]);
      }
    }
    return c$$270;
  };
  var Vh = La$$1(!1);
  var Wh = 20;
  var bi = function() {
    if (!/_sdo/.test(window.google_ad_format)) {
      Xh();
      Yh();
      Zh();
      var a$$529 = window.google_start_time;
      q$$3(a$$529) && (vf = a$$529, window.google_start_time = null);
      te("show_ads::init_globals", ve, $h);
      ai(window, document);
    }
  };
  var ci = !1;
  w$$6.google_eas_queue = w$$6.google_eas_queue || [];
  var di = function() {
    return L$$1(Vh, "/pagead/expansion_embed.js");
  };
  var ei = Mb(function() {
    var a$$530 = v$$1;
    var b$$402 = a$$530.createElement("script");
    b$$402.async = !0;
    b$$402.type = "text/javascript";
    b$$402.src = di();
    a$$530 = a$$530.getElementsByTagName("script")[0];
    a$$530.parentNode.insertBefore(b$$402, a$$530);
  });
  var ki = function(a$$531, b$$403) {
    var c$$271 = b$$403.slice(-1);
    var d$$163 = "?" == c$$271 || "#" == c$$271 ? "" : "&";
    var e$$95 = [b$$403];
    c$$271 = function(a$$532, b$$404) {
      if (a$$532 || 0 === a$$532 || !1 === a$$532) {
        "boolean" == typeof a$$532 && (a$$532 = a$$532 ? 1 : 0), ib$$1(e$$95, d$$163, b$$404, "=", "function" == typeof encodeURIComponent ? encodeURIComponent(a$$532) : escape(a$$532)), d$$163 = "&";
      }
    };
    x$$50(a$$531, c$$271);
    return e$$95.join("");
  };
  var li = function() {
    var a$$533 = me();
    var b$$405 = mc();
    a$$533.setUpForcePeriscope && a$$533.setUpForcePeriscope();
    return a$$533.setupOse(G$$1(b$$405, 7));
  };
  var hi = function(a$$534) {
    var b$$406 = a$$534.google_ad_handling_mode;
    return(B$$2 ? 1 == yb(a$$534) : !yb(a$$534)) && Le(b$$406);
  };
  var ni = function(a$$535, b$$407, c$$272) {
    var d$$164 = bg;
    d$$164 || c$$272(-1, null, !1);
    d$$164.R();
    d$$164.la() ? c$$272(d$$164.v(), d$$164.Ia(), !1) : (d$$164.zc(mi(b$$407), c$$272), d$$164.jb() || (b$$407 = Fe, b$$407.test(navigator.userAgent) ? (d$$164.Ec(), b$$407 = function() {
      d$$164.R();
      d$$164.Ta() || (d$$164.ya(), c$$272(d$$164.v(), null, !0));
    }, a$$535.setTimeout(b$$407, Wh)) : (d$$164.ya(), c$$272(d$$164.v(), null, !1))));
  };
  var qi = function(a$$536, b$$408, c$$273, d$$165, e$$96, f$$55, g$$33, h$$25, k$$12, l$$14, z$$7, C$$4, I$$2, xb$$1) {
    d$$165 = Je(d$$165, C$$4, I$$2);
    if (453848234 == I$$2 || 453848236 == I$$2) {
      d$$165 = d$$165.replace(/&(adx|ady|oid|jp|top)=[^&]*/g, ""), d$$165 += "&ea=0", c$$273 = !1;
    }
    oi(a$$536, b$$408, c$$273, d$$165, e$$96, f$$55, g$$33, h$$25, k$$12, l$$14, z$$7);
    xb$$1 && pi();
  };
  var oi = function(a$$537, b$$409, c$$274, d$$166, e$$97, f$$56, g$$34, h$$26, k$$13, l$$15, z$$8) {
    !c$$274 || gi() ? (f$$56.src = mi(d$$166), a$$537 = Cf(f$$56), z$$8 ? ri(z$$8, b$$409, a$$537) : b$$409.write(a$$537)) : (b$$409 = yb(a$$537), a$$537["google_expandable_ad_slot" + b$$409] = ExpandableAdSlotFactory.createIframe(e$$97, mi(d$$166), g$$34, h$$26, k$$13 || void 0, D$$1(), l$$15 || void 0));
  };
  var si = function(a$$538, b$$410, c$$275, d$$167, e$$98) {
    var f$$57 = D$$1();
    if (Xg(f$$57, a$$538)) {
      f$$57 = Zg(a$$538);
      var g$$35 = {};
      g$$35.fa = f$$57;
      c$$275 = ki(g$$35, c$$275);
      d$$167.src = mi(c$$275);
      c$$275 = Bf(b$$410, d$$167);
      b$$410.body.appendChild(c$$275);
      qh(a$$538, e$$98, c$$275, D$$1());
    }
  };
  var ti = function(a$$539, b$$411) {
    var c$$276 = ce(b$$411, "w");
    var d$$168 = ce(b$$411, "h");
    var e$$99 = ce(b$$411, "ifi");
    e$$99 = Lb(e$$99);
    e$$99 = {id:e$$99, name:e$$99};
    var f$$58 = "U-" + b$$411;
    Ff(e$$99, c$$276, d$$168, !1, Df(f$$58));
    a$$539.document.write(Cf(e$$99));
  };
  var wi = function(a$$540, b$$412, c$$277, d$$169, e$$100) {
    a$$540 = document.getElementById(a$$540);
    ui(b$$412, a$$540, c$$277, d$$169, e$$100);
    vi();
  };
  var vi = function() {
    B$$2 && (uf(), Wb(window));
  };
  var pi = function() {
    sc && sc();
  };
  var Ai = function(a$$541, b$$413) {
    if (3 != Xe(b$$413)) {
      xi(yi, a$$541);
    } else {
      var c$$278 = function() {
        xi(yi, a$$541);
        A$$1(v$$1, "webkitvisibilitychange", c$$278);
      };
      y$$31(b$$413, "webkitvisibilitychange", c$$278);
    }
    zi = !1;
  };
  var Ci = function(a$$542, b$$414, c$$279, d$$170, e$$101, f$$59) {
    var g$$36 = e$$101 ? c$$279.replace(/&ea=[^&]*/, "") + "&ea=0" : c$$279;
    var h$$27 = Lb(d$$170);
    var k$$14 = {id:h$$27, name:h$$27};
    Ff(k$$14, a$$542.google_ad_width, a$$542.google_ad_height, !1, mi(g$$36));
    var l$$16 = Cf(k$$14);
    var z$$9 = a$$542.google_container_id || f$$59 || null;
    f$$59 = a$$542.google_async_iframe_id;
    var C$$5 = a$$542.google_container_id;
    e$$101 = e$$101 && (zf() || gi());
    var I$$3 = "";
    e$$101 ? gi() && (I$$3 = uh(10), c$$279 = Zd(c$$279, I$$3, Ib(v$$1.URL))) : c$$279 = g$$36;
    Zg(a$$542) ? si(a$$542, b$$414, c$$279, k$$14, f$$59) : hi(a$$542) ? (g$$36 = ga$$1(qi, a$$542, b$$414, e$$101, c$$279, h$$27, k$$14, a$$542.google_ad_width, a$$542.google_ad_height, z$$9, f$$59, C$$5), g$$36 = Mb(g$$36), ni(a$$542, c$$279, g$$36)) : "S" == a$$542.google_ad_handling_mode ? ti(a$$542, c$$279) : oi(a$$542, b$$414, e$$101, c$$279, h$$27, k$$14, a$$542.google_ad_width, a$$542.google_ad_height, z$$9, f$$59, C$$5);
    e$$101 && gi() && (zf() || setTimeout(xe("ac::write_ee", ei, xc), 0), w$$6.google_eas_queue.push(Yd(h$$27, c$$279, a$$542.google_ad_width, a$$542.google_ad_height, I$$3, D$$1(), f$$59 || void 0, "google_expandable_ad_slot" + d$$170)));
    B$$2 && Bi(a$$542.google_async_iframe_id, l$$16);
    a$$542 = document.getElementById(h$$27);
    zi && a$$542 && Ai(a$$542, b$$414);
  };
  var ui = function(a$$543, b$$415, c$$280, d$$171, e$$102) {
    var f$$60 = me();
    f$$60.getOseId() && f$$60.registerAdBlock(a$$543, 1, String(c$$280 || ""), b$$415, d$$171, e$$102);
  };
  var Bi = function(a$$544, b$$416) {
    var c$$281 = "javascript:" + ab$$1(["<!DOCTYPE html><html><body>", b$$416, "</body></html>"].join(""));
    var d$$172 = D$$1();
    (new Me(d$$172)).set(a$$544, c$$281);
  };
  var Ki = function(a$$545) {
    lf(window);
    window.google_page_url || window.google_referrer_url || window.google_page_location || Fi();
    if (!Gi(!1)) {
      return!1;
    }
    var b$$417 = Bc(window) ? Ka$$1() : Ja$$1();
    a$$545 = Hi(a$$545);
    var c$$282 = L$$1(b$$417, "/pagead/ads?");
    Ii() && Ji(a$$545);
    a$$545.unviewed_position_start || w$$6.google_ad_output && "html" !== w$$6.google_ad_output || 3 != Xe(v$$1) || !Ia$$1 || (zi = !0, yi = c$$282, c$$282 = L$$1(b$$417, "/pagead/blank.gif#?"));
    window.google_ad_url = ki(a$$545, c$$282 + "");
    return!0;
  };
  var Ii = function() {
    var a$$546 = J$$1().m(19);
    var b$$418 = K$$1.PRERENDERING_DELAYED_IMPRESSION;
    return a$$546 == b$$418.EXPERIMENT && "html" == window.google_ad_output;
  };
  var zi = !1;
  var yi = "";
  var Li = function(a$$547, b$$419) {
    var c$$283 = G$$1(a$$547, 8);
    var d$$173 = window.google_ad_section;
    var e$$103 = window.google_ad_format;
    var f$$61 = window.google_ad_slot;
    c$$283[d$$173] && (b$$419.prev_fmts = c$$283[d$$173]);
    var g$$37 = G$$1(a$$547, 9);
    g$$37[d$$173] && (b$$419.prev_slotnames = g$$37[d$$173].toLowerCase());
    e$$103 ? c$$283[d$$173] = c$$283[d$$173] ? c$$283[d$$173] + ("," + e$$103) : e$$103 : f$$61 && (g$$37[d$$173] = g$$37[d$$173] ? g$$37[d$$173] + ("," + f$$61) : f$$61);
  };
  var Pi = function(a$$548) {
    a$$548.dt = vf;
    B$$2 && window.google_bpp && (a$$548.bpp = window.google_bpp);
    var b$$420 = Mi();
    b$$420 && (a$$548.bdt = b$$420);
    a$$548.shv = Da$$1();
    b$$420 = !!window.google_test_1;
    var c$$284 = !!window.google_test_2;
    b$$420 && (a$$548.tsi = c$$284 ? "3" : "2");
    a$$548.cbv = "/r20130906".replace("/", "");
    /^\w{1,3}$/.test(window.google_loader_used) && (a$$548.saldr = window.google_loader_used);
    b$$420 = mc();
    Zg(window) || Li(b$$420, a$$548);
    a$$548.correlator = G$$1(b$$420, 7);
    if (window.google_ad_channel) {
      c$$284 = G$$1(b$$420, 10);
      var d$$174 = "";
      var e$$104 = window.google_ad_channel.split(Ni);
      var f$$62 = 0;
      for (;f$$62 < e$$104.length;f$$62++) {
        var g$$38 = e$$104[f$$62];
        c$$284[g$$38] ? d$$174 += g$$38 + "+" : c$$284[g$$38] = !0;
      }
      a$$548.pv_ch = d$$174;
    }
    window.google_ad_host_channel && (b$$420 = Oi(window.google_ad_host_channel, G$$1(b$$420, 11)), a$$548.pv_h_ch = b$$420);
    Ea$$1 && (a$$548.jscb = 1);
    Fa$$1 && (a$$548.jscd = 1);
    a$$548.frm = window.google_iframing;
    b$$420 = D$$1().document;
    c$$284 = "";
    try {
      c$$284 = b$$420.cookie;
    } catch (h$$28) {
    }
    b$$420 = Eh(b$$420.domain, c$$284, ob$$1(), window.screen, b$$420.referrer);
    a$$548.ga_vid = b$$420.vid;
    a$$548.ga_sid = b$$420.sid;
    a$$548.ga_hid = b$$420.hid;
    a$$548.ga_fc = b$$420.from_cookie;
    a$$548.ga_cid = b$$420.cid;
    a$$548.ga_wpids = window.google_analytics_uacct;
  };
  var Qi = function(a$$549) {
    var b$$421 = D$$1();
    var c$$285 = !1;
    var d$$175 = de(c$$285, b$$421.top);
    d$$175 && (-12245933 == d$$175.width && b$$421.google_top_values && (d$$175 = ne(b$$421.google_top_values)), a$$549.biw = d$$175.width, a$$549.bih = d$$175.height);
    b$$421.top != b$$421 && (b$$421 = de(c$$285, b$$421)) && (a$$549.isw = b$$421.width, a$$549.ish = b$$421.height);
  };
  var Mi = function(a$$550) {
    var b$$422 = D$$1();
    var c$$286 = b$$422.performance;
    if (c$$286 && c$$286.timing && c$$286.now) {
      var d$$176 = c$$286.timing.navigationStart + Math.round(c$$286.now());
      d$$176 = d$$176 - c$$286.timing.domLoading;
    }
    if (!d$$176) {
      return null;
    }
    a$$550 = a$$550 || vf;
    b$$422 = b$$422.Date.now() - a$$550;
    b$$422 = d$$176 - b$$422;
    return 0 > b$$422 ? "-M" : 1E6 < b$$422 ? "M" : b$$422;
  };
  var Ri = function(a$$551) {
    var b$$423 = ee(D$$1());
    0 != b$$423 && (a$$551.ifk = b$$423.toString());
  };
  var Si = function(a$$552) {
    var b$$424 = me();
    (b$$424 = b$$424.getOseId()) && (a$$552.oid = b$$424);
  };
  var Xh = function() {
    if (!wc()) {
      var a$$553 = H$$1();
      w$$6.google_top_experiment && Pf();
      Ph(D$$1());
      var b$$425 = [K$$1.EXPANDABLE_MOBILE_REVERSE.CONTROL, K$$1.EXPANDABLE_MOBILE_REVERSE.EXPERIMENT];
      a$$553.k(b$$425, na$$1, 13);
      Ti(w$$6.google_ad_handling_mode);
      var c$$287 = K$$1.SS;
      b$$425 = [c$$287.COUNT_AD_FRAMES_ON_PAGE_CONTROL, c$$287.COUNT_AD_FRAMES_ON_PAGE_EXPERIMENT];
      a$$553.k(b$$425, va$$1, 14);
      b$$425 = [c$$287.BROWSER_DIMENSIONS_CONTROL, c$$287.BROWSER_DIMENSIONS_EXPERIMENT];
      a$$553.k(b$$425, Ca$$1, 14);
      b$$425 = K$$1.PERISCOPE_FOR_TARGETING;
      b$$425 = [b$$425.CONTROL_REFERER_CLEANUP, b$$425.EXPERIMENT_REFERER_CLEANUP];
      a$$553.k(b$$425, qa$$1, 10);
      Qf();
      b$$425 = [K$$1.ASYNC_EXPANSION_EMBED.EXPERIMENT, K$$1.ASYNC_EXPANSION_EMBED.CONTROL];
      a$$553.k(b$$425, ya$$1, 18);
      Rf();
      b$$425 = [K$$1.JS_RNG.CONTROL, K$$1.JS_RNG.EXPERIMENT];
      a$$553.k(b$$425, za$$1, 17);
      Ui();
    }
  };
  var Yh = function() {
    Vf();
    Tf();
  };
  var Ti = function(a$$554) {
    var b$$426 = Ge;
    var c$$288 = K$$1.PREFETCH_AD_HANDLING;
    var d$$177;
    switch(a$$554) {
      case b$$426.CONTROL_NO_FRAME:
        d$$177 = c$$288.CONTROL_NO_FRAME;
        break;
      case b$$426.ALWAYS_ZRT:
        d$$177 = c$$288.ALWAYS_ZRT;
        break;
      case b$$426.SERIAL:
        d$$177 = c$$288.SERIAL;
    }
    d$$177 && H$$1().k([d$$177], 1, 4);
  };
  var Ui = function() {
    var a$$555 = v$$1;
    a$$555 = Xe(a$$555);
    if (3 == a$$555) {
      a$$555 = K$$1.PRERENDERING_DELAYED_IMPRESSION;
      var b$$427 = H$$1();
      b$$427.k([a$$555.CONTROL, a$$555.EXPERIMENT], ua$$1, 19);
    }
  };
  var Vi = function() {
    var a$$556 = w$$6;
    "html" != a$$556.google_ad_output || ub(a$$556) || J$$1().k([K$$1.SEND_LOAD_TIME_PINGBACKS.EXPERIMENT], ra$$1, 16);
  };
  var Wi = function() {
    hc() != D$$1() && Ae(4);
    Ha$$1 && Ae(16);
    3 == Xe(document) && Ae(32);
    "google_dn" in window && Ae(8);
  };
  var Xi = 0;
  var Yi = function(a$$557, b$$428, c$$289, d$$178) {
    if (d$$178) {
      var e$$105 = 0;
      for (;e$$105 < d$$178.length;++e$$105) {
        var f$$63 = d$$178[e$$105];
        if (!f$$63()) {
          return;
        }
      }
    }
    Xi && (Xi = (new Date).getTime() - Xi);
    c$$289 && c$$289.fb() && c$$289.Hc();
    c$$289 = Ki(a$$557);
    a$$557 && a$$557.id == b$$428 && qd(a$$557);
    c$$289 ? (Di(window, document, window.google_ad_url), Ei(window), (a$$557 = bg) && !a$$557.Ta() || pi()) : vi();
  };
  var $i = function(a$$558) {
    x$$50(wh, function(b$$429, c$$290) {
      a$$558[b$$429] = window[c$$290];
    });
    x$$50(vh, function(b$$430, c$$291) {
      a$$558[b$$430] = window[c$$291];
    });
    x$$50(xh, function(b$$431, c$$292) {
      a$$558[b$$431] = window[c$$292];
    });
  };
  var aj = function(a$$559) {
    var b$$432 = J$$1();
    if (n$$2(window.google_eids) && 0 !== window.google_eids.length) {
      Ae(64);
      var c$$293 = 0;
      for (;c$$293 < window.google_eids.length;c$$293++) {
        p$$1(window.google_eids[c$$293]) && b$$432.bb(window.google_eids[c$$293]);
      }
    }
    a$$559.eid = b$$432.Ka();
  };
  var dj = function(a$$560, b$$433, c$$294) {
    var d$$179 = a$$560.indexOf(b$$433);
    return-1 == d$$179 ? a$$560 : c$$294 + a$$560.substr(d$$179 + b$$433.length);
  };
  var xi = function(a$$561, b$$434) {
    var c$$295 = b$$434.src;
    var d$$180 = dj(c$$295, "/pagead/blank.gif#?", a$$561);
    d$$180 !== c$$295 && (b$$434.src = d$$180);
  };
  var ej = function(a$$562, b$$435) {
    b$$435.dff = Rd(a$$562).toLowerCase();
    b$$435.dfs = Wd(a$$562);
  };
  var fj = function(a$$563, b$$436) {
    if ("html" == w$$6.google_ad_output) {
      var c$$296 = D$$1();
      if (c$$296.google_top_values) {
        var d$$181 = oe(c$$296.google_top_values, w$$6.google_ad_width, w$$6.google_ad_height);
        b$$436.adx = Math.round(d$$181.x);
        b$$436.ady = Math.round(d$$181.y);
      }
      if (!b$$436.adx || -12245933 == b$$436.adx || !b$$436.ady || -12245933 == b$$436.ady) {
        try {
          d$$181 = Ed(a$$563, window.top), b$$436.adx = Math.round(d$$181.x), b$$436.ady = Math.round(d$$181.y);
        } catch (e$$106) {
          b$$436.adx = -12245933, b$$436.ady = -12245933;
        }
      }
    }
  };
  var hj = function(a$$564) {
    var b$$437 = D$$1();
    a$$564.ref = window.google_referrer_url;
    a$$564.loc = window.google_page_location;
    var c$$297 = hc();
    c$$297 = cf(c$$297);
    var d$$182 = K$$1;
    var e$$107 = 4;
    var f$$64 = J$$1();
    var g$$39 = d$$182.TOP_URL_REPLACES_MISSING_URL.EXPERIMENT;
    f$$64.m(e$$107) == g$$39 && gj(a$$564, c$$297.url);
    d$$182 = d$$182.ALWAYS_USE_DELAYED_IMPRESSIONS.EXPERIMENT;
    f$$64.m(e$$107) == d$$182 && Ji(a$$564);
    e$$107 = a$$564.loc || a$$564.url;
    f$$64 = !Ye() && c$$297.url == a$$564.ref;
    f$$64 || c$$297.url == e$$107 || (a$$564.top = c$$297.url);
    window.google_async_rrc && (a$$564.rr = window.google_async_rrc);
    a$$564.rs = 0;
    (c$$297 = b$$437.google_top_js_status) && (a$$564.jp = c$$297);
    Xi && (a$$564.jpd = Xi);
    if (c$$297 = Mh(b$$437)) {
      e$$107 = new Uh(c$$297), e$$107.yb() && (a$$564.dss = e$$107.Ob()), c$$297.Oa() && (a$$564.dsd = c$$297.Oa());
    }
    ch(window, b$$437) && eh(b$$437, window.google_ad_client);
    c$$297 = rg(b$$437);
    c$$297.wasReactiveAdConfigHandlerRegistered && (a$$564.fc = ah(window, b$$437));
    ub(w$$6) || (a$$564.docm = rh());
    c$$297 = K$$1.SS;
    e$$107 = J$$1().m(14);
    e$$107 == c$$297.COUNT_AD_FRAMES_ON_PAGE_EXPERIMENT && (a$$564.frmn = T$$1.frameCountsWithDelayedPingback(b$$437, a$$564.adk, a$$564.correlator, a$$564.frm));
    e$$107 == c$$297.BROWSER_DIMENSIONS_EXPERIMENT && (b$$437 = sh$$2(b$$437), a$$564.brdim = b$$437.join(","));
    b$$437 = ge();
    0 < b$$437 && (a$$564.osd = b$$437);
    a$$564.vis = Xe(document);
  };
  var Gi = function(a$$565) {
    var b$$438 = mc();
    var c$$298 = G$$1(b$$438, 8);
    var d$$183 = G$$1(b$$438, 9);
    var e$$108 = window.google_ad_section;
    if (ub(window)) {
      if (3 < oc(b$$438, 5, G$$1(b$$438, 5) + 1) && !a$$565) {
        return!1;
      }
    } else {
      var f$$65 = oc(b$$438, 6, G$$1(b$$438, 6) + 1);
      if (window.google_num_slots_to_rotate) {
        if (Ae(1), c$$298[e$$108] = "", d$$183[e$$108] = "", G$$1(b$$438, 12) || qc(b$$438, (new Date).getTime() % window.google_num_slots_to_rotate + 1), G$$1(b$$438, 12) != f$$65) {
          return!1;
        }
      } else {
        if (!a$$565 && 6 < f$$65 && "" == e$$108) {
          return!1;
        }
      }
    }
    return!0;
  };
  var Hi = function(a$$566) {
    var b$$439 = {};
    $i(b$$439);
    Pi(b$$439);
    zb(b$$439);
    a$$566 && (ej(a$$566, b$$439), fj(a$$566, b$$439));
    Qi(b$$439);
    Ri(b$$439);
    aj(b$$439);
    Si(b$$439);
    hj(b$$439);
    b$$439.fu = ze;
    return b$$439;
  };
  var Zi = function(a$$567) {
    var b$$440 = window.google_container_id;
    var c$$299 = b$$440 && document.getElementById(b$$440) || document.getElementById(a$$567);
    c$$299 || b$$440 || !a$$567 || (document.write("<span id=" + a$$567 + "></span>"), c$$299 = document.getElementById(a$$567));
    return c$$299;
  };
  var mi = function(a$$568) {
    var b$$441 = vf;
    return ki({dtd:Hb(b$$441)}, a$$568);
  };
  var Fi = function() {
    var a$$569 = K$$1;
    J$$1().k([a$$569.TOP_URL_REPLACES_MISSING_URL.CONTROL, a$$569.TOP_URL_REPLACES_MISSING_URL.EXPERIMENT], wa$$1, 4);
  };
  var gj = function(a$$570, b$$442) {
    a$$570.url || a$$570.ref || a$$570.loc || !b$$442 || (a$$570.url = b$$442);
  };
  var Ji = function(a$$571) {
    a$$571.unviewed_position_start = "1";
  };
  var gi = function() {
    return H$$1().m(18) == K$$1.ASYNC_EXPANSION_EMBED.EXPERIMENT;
  };
  var Ni = /[+, ]/;
  window.google_render_ad = ii;
  te("show_ads::main", ve, bi, xc);
})()

JAM.stopProfile('load');
