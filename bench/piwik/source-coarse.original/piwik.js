introspect(JAM.policy.pFull) {
if (!this.JSON2) {
  this.JSON2 = {};
}
(function() {
  function d(f) {
    return f < 10 ? "0" + f : f;
  }
  function l(n$$1, m) {
    var f$$1 = Object.prototype.toString.apply(n$$1);
    if (f$$1 === "[object Date]") {
      return isFinite(n$$1.valueOf()) ? n$$1.getUTCFullYear() + "-" + d(n$$1.getUTCMonth() + 1) + "-" + d(n$$1.getUTCDate()) + "T" + d(n$$1.getUTCHours()) + ":" + d(n$$1.getUTCMinutes()) + ":" + d(n$$1.getUTCSeconds()) + "Z" : null;
    }
    if (f$$1 === "[object String]" || f$$1 === "[object Number]" || f$$1 === "[object Boolean]") {
      return n$$1.valueOf();
    }
    if (f$$1 !== "[object Array]" && typeof n$$1.toJSON === "function") {
      return n$$1.toJSON(m);
    }
    return n$$1;
  }
  function a(f$$2) {
    i$$1.lastIndex = 0;
    return i$$1.test(f$$2) ? '"' + f$$2.replace(i$$1, function(m$$1) {
      var n$$2 = k[m$$1];
      return typeof n$$2 === "string" ? n$$2 : "\\u" + ("0000" + m$$1.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + f$$2 + '"';
  }
  function g(s$$2, p) {
    var n$$3;
    var m$$2;
    var t;
    var f$$3;
    var q = j;
    var o;
    var r = p[s$$2];
    if (r && typeof r === "object") {
      r = l(r, s$$2);
    }
    if (typeof h$$4 === "function") {
      r = h$$4.call(p, s$$2, r);
    }
    switch(typeof r) {
      case "string":
        return a(r);
      case "number":
        return isFinite(r) ? String(r) : "null";
      case "boolean":
      ;
      case "null":
        return String(r);
      case "object":
        if (!r) {
          return "null";
        }
        j += b;
        o = [];
        if (Object.prototype.toString.apply(r) === "[object Array]") {
          f$$3 = r.length;
          n$$3 = 0;
          for (;n$$3 < f$$3;n$$3 += 1) {
            o[n$$3] = g(n$$3, r) || "null";
          }
          t = o.length === 0 ? "[]" : j ? "[\n" + j + o.join(",\n" + j) + "\n" + q + "]" : "[" + o.join(",") + "]";
          j = q;
          return t;
        }
        if (h$$4 && typeof h$$4 === "object") {
          f$$3 = h$$4.length;
          n$$3 = 0;
          for (;n$$3 < f$$3;n$$3 += 1) {
            if (typeof h$$4[n$$3] === "string") {
              m$$2 = h$$4[n$$3];
              t = g(m$$2, r);
              if (t) {
                o.push(a(m$$2) + (j ? ": " : ":") + t);
              }
            }
          }
        } else {
          for (m$$2 in r) {
            if (Object.prototype.hasOwnProperty.call(r, m$$2)) {
              t = g(m$$2, r);
              if (t) {
                o.push(a(m$$2) + (j ? ": " : ":") + t);
              }
            }
          }
        }
        t = o.length === 0 ? "{}" : j ? "{\n" + j + o.join(",\n" + j) + "\n" + q + "}" : "{" + o.join(",") + "}";
        j = q;
        return t;
    }
  }
  var c = new RegExp("[\x00\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]", "g");
  var e$$4 = '\\\\\\"\x00-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]';
  var i$$1 = new RegExp("[" + e$$4, "g");
  var j;
  var b;
  var k = {"\b":"\\b", "\t":"\\t", "\n":"\\n", "\f":"\\f", "\r":"\\r", '"':'\\"', "\\":"\\\\"};
  var h$$4;
  if (typeof JSON2.stringify !== "function") {
    JSON2.stringify = function(o$$1, m$$3, n$$4) {
      var f$$4;
      j = "";
      b = "";
      if (typeof n$$4 === "number") {
        f$$4 = 0;
        for (;f$$4 < n$$4;f$$4 += 1) {
          b += " ";
        }
      } else {
        if (typeof n$$4 === "string") {
          b = n$$4;
        }
      }
      h$$4 = m$$3;
      if (m$$3 && typeof m$$3 !== "function" && (typeof m$$3 !== "object" || typeof m$$3.length !== "number")) {
        throw new Error("JSON.stringify");
      }
      return g("", {"":o$$1});
    };
  }
  if (typeof JSON2.parse !== "function") {
    JSON2.parse = function(o$$2, f$$5) {
      function m$$4(s$$3, r$$1) {
        var q$$1;
        var p$$1;
        var t$$1 = s$$3[r$$1];
        if (t$$1 && typeof t$$1 === "object") {
          for (q$$1 in t$$1) {
            if (Object.prototype.hasOwnProperty.call(t$$1, q$$1)) {
              p$$1 = m$$4(t$$1, q$$1);
              if (p$$1 !== undefined) {
                t$$1[q$$1] = p$$1;
              } else {
                delete t$$1[q$$1];
              }
            }
          }
        }
        return f$$5.call(s$$3, r$$1, t$$1);
      }
      var n$$5;
      o$$2 = String(o$$2);
      c.lastIndex = 0;
      if (c.test(o$$2)) {
        o$$2 = o$$2.replace(c, function(p$$2) {
          return "\\u" + ("0000" + p$$2.charCodeAt(0).toString(16)).slice(-4);
        });
      }
      if ((new RegExp("^[\\],:{}\\s]*$")).test(o$$2.replace(new RegExp('\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})', "g"), "@").replace(new RegExp('"[^"\\\\\n\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?', "g"), "]").replace(new RegExp("(?:^|:|,)(?:\\s*\\[)+", "g"), ""))) {
        n$$5 = eval("(" + o$$2 + ")");
        return typeof f$$5 === "function" ? m$$4({"":n$$5}, "") : n$$5;
      }
      throw new SyntaxError("JSON.parse");
    };
  }
})();
var _paq = _paq || [];
var Piwik = Piwik || function() {
  function p$$3(i$$2) {
    return "undefined" !== typeof i$$2;
  }
  function l$$1(i$$3) {
    return typeof i$$3 === "function";
  }
  function y$$30(i$$4) {
    return typeof i$$4 === "object";
  }
  function h$$5(i$$5) {
    return typeof i$$5 === "string" || i$$5 instanceof String;
  }
  function G() {
    var L;
    var N;
    var M;
    L = 0;
    for (;L < arguments.length;L += 1) {
      M = arguments[L];
      N = M.shift();
      if (h$$5(N)) {
        A[N].apply(A, M);
      } else {
        N.apply(A, M);
      }
    }
  }
  function J(N$$1, M$$1, L$$1, i$$6) {
    if (N$$1.addEventListener) {
      N$$1.addEventListener(M$$1, L$$1, i$$6);
      return true;
    }
    if (N$$1.attachEvent) {
      return N$$1.attachEvent("on" + M$$1, L$$1);
    }
    N$$1["on" + M$$1] = L$$1;
  }
  function E(M$$2, P) {
    var L$$2 = "";
    var O;
    var N$$2;
    for (O in a$$1) {
      if (Object.prototype.hasOwnProperty.call(a$$1, O)) {
        N$$2 = a$$1[O][M$$2];
        if (l$$1(N$$2)) {
          L$$2 += N$$2(P);
        }
      }
    }
    return L$$2;
  }
  function H() {
    var i$$7;
    E("unload");
    if (e$$5) {
      do {
        i$$7 = new Date;
      } while (i$$7.getTimeAlias() < e$$5);
    }
  }
  function F() {
    var L$$3;
    if (!k$$1) {
      k$$1 = true;
      E("load");
      L$$3 = 0;
      for (;L$$3 < u.length;L$$3++) {
        u[L$$3]();
      }
    }
    return true;
  }
  function j$$1() {
    var L$$4;
    if (n$$6.addEventListener) {
      J(n$$6, "DOMContentLoaded", function i$$8() {
        n$$6.removeEventListener("DOMContentLoaded", i$$8, false);
        F();
      });
    } else {
      if (n$$6.attachEvent) {
        n$$6.attachEvent("onreadystatechange", function i$$9() {
          if (n$$6.readyState === "complete") {
            n$$6.detachEvent("onreadystatechange", i$$9);
            F();
          }
        });
        if (n$$6.documentElement.doScroll && w$$5 === w$$5.top) {
          (function i$$10() {
            if (!k$$1) {
              try {
                n$$6.documentElement.doScroll("left");
              } catch (M$$3) {
                setTimeout(i$$10, 0);
                return;
              }
              F();
            }
          })();
        }
      }
    }
    if ((new RegExp("WebKit")).test(c$$1.userAgent)) {
      L$$4 = setInterval(function() {
        if (k$$1 || /loaded|complete/.test(n$$6.readyState)) {
          clearInterval(L$$4);
          F();
        }
      }, 10);
    }
    J(w$$5, "load", F, false);
  }
  function q$$2() {
    var i$$11 = "";
    try {
      i$$11 = w$$5.top.document.referrer;
    } catch (M$$4) {
      if (w$$5.parent) {
        try {
          i$$11 = w$$5.parent.document.referrer;
        } catch (L$$5) {
          i$$11 = "";
        }
      }
    }
    if (i$$11 === "") {
      i$$11 = n$$6.referrer;
    }
    return i$$11;
  }
  function f$$6(i$$12) {
    var M$$5 = new RegExp("^([a-z]+):");
    var L$$6 = M$$5.exec(i$$12);
    return L$$6 ? L$$6[1] : null;
  }
  function b$$1(i$$13) {
    var M$$6 = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)");
    var L$$7 = M$$6.exec(i$$13);
    return L$$7 ? L$$7[1] : i$$13;
  }
  function x$$47(M$$7, L$$8) {
    var P$$1 = new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+)[?])([^#]+)");
    var O$$1 = P$$1.exec(M$$7);
    var N$$3 = new RegExp("(?:^|&)" + L$$8 + "=([^&]*)");
    var i$$14 = O$$1 ? N$$3.exec(O$$1[1]) : 0;
    return i$$14 ? v(i$$14[1]) : "";
  }
  function m$$5(i$$15) {
    return d$$1(g$$1(i$$15));
  }
  function I(ab) {
    var N$$4 = function(W, i$$16) {
      return W << i$$16 | W >>> 32 - i$$16;
    };
    var ac = function(ai) {
      var ah = "";
      var ag;
      var W$$1;
      ag = 7;
      for (;ag >= 0;ag--) {
        W$$1 = ai >>> ag * 4 & 15;
        ah += W$$1.toString(16);
      }
      return ah;
    };
    var Q;
    var ae;
    var ad;
    var M$$8 = [];
    var U = 1732584193;
    var S = 4023233417;
    var R = 2562383102;
    var P$$2 = 271733878;
    var O$$2 = 3285377520;
    var aa;
    var Z;
    var Y;
    var X;
    var V;
    var af;
    var L$$9;
    var T = [];
    ab = m$$5(ab);
    L$$9 = ab.length;
    ae = 0;
    for (;ae < L$$9 - 3;ae += 4) {
      ad = ab.charCodeAt(ae) << 24 | ab.charCodeAt(ae + 1) << 16 | ab.charCodeAt(ae + 2) << 8 | ab.charCodeAt(ae + 3);
      T.push(ad);
    }
    switch(L$$9 & 3) {
      case 0:
        ae = 2147483648;
        break;
      case 1:
        ae = ab.charCodeAt(L$$9 - 1) << 24 | 8388608;
        break;
      case 2:
        ae = ab.charCodeAt(L$$9 - 2) << 24 | ab.charCodeAt(L$$9 - 1) << 16 | 32768;
        break;
      case 3:
        ae = ab.charCodeAt(L$$9 - 3) << 24 | ab.charCodeAt(L$$9 - 2) << 16 | ab.charCodeAt(L$$9 - 1) << 8 | 128;
        break;
    }
    T.push(ae);
    for (;(T.length & 15) !== 14;) {
      T.push(0);
    }
    T.push(L$$9 >>> 29);
    T.push(L$$9 << 3 & 4294967295);
    Q = 0;
    for (;Q < T.length;Q += 16) {
      ae = 0;
      for (;ae < 16;ae++) {
        M$$8[ae] = T[Q + ae];
      }
      ae = 16;
      for (;ae <= 79;ae++) {
        M$$8[ae] = N$$4(M$$8[ae - 3] ^ M$$8[ae - 8] ^ M$$8[ae - 14] ^ M$$8[ae - 16], 1);
      }
      aa = U;
      Z = S;
      Y = R;
      X = P$$2;
      V = O$$2;
      ae = 0;
      for (;ae <= 19;ae++) {
        af = N$$4(aa, 5) + (Z & Y | ~Z & X) + V + M$$8[ae] + 1518500249 & 4294967295;
        V = X;
        X = Y;
        Y = N$$4(Z, 30);
        Z = aa;
        aa = af;
      }
      ae = 20;
      for (;ae <= 39;ae++) {
        af = N$$4(aa, 5) + (Z ^ Y ^ X) + V + M$$8[ae] + 1859775393 & 4294967295;
        V = X;
        X = Y;
        Y = N$$4(Z, 30);
        Z = aa;
        aa = af;
      }
      ae = 40;
      for (;ae <= 59;ae++) {
        af = N$$4(aa, 5) + (Z & Y | Z & X | Y & X) + V + M$$8[ae] + 2400959708 & 4294967295;
        V = X;
        X = Y;
        Y = N$$4(Z, 30);
        Z = aa;
        aa = af;
      }
      ae = 60;
      for (;ae <= 79;ae++) {
        af = N$$4(aa, 5) + (Z ^ Y ^ X) + V + M$$8[ae] + 3395469782 & 4294967295;
        V = X;
        X = Y;
        Y = N$$4(Z, 30);
        Z = aa;
        aa = af;
      }
      U = U + aa & 4294967295;
      S = S + Z & 4294967295;
      R = R + Y & 4294967295;
      P$$2 = P$$2 + X & 4294967295;
      O$$2 = O$$2 + V & 4294967295;
    }
    af = ac(U) + ac(S) + ac(R) + ac(P$$2) + ac(O$$2);
    return af.toLowerCase();
  }
  function C(M$$9, i$$17, L$$10) {
    if (M$$9 === "translate.googleusercontent.com") {
      if (L$$10 === "") {
        L$$10 = i$$17;
      }
      i$$17 = x$$47(i$$17, "u");
      M$$9 = b$$1(i$$17);
    } else {
      if (M$$9 === "cc.bingj.com" || M$$9 === "webcache.googleusercontent.com" || M$$9.slice(0, 5) === "74.6.") {
        i$$17 = n$$6.links[0].href;
        M$$9 = b$$1(i$$17);
      }
    }
    return[M$$9, i$$17, L$$10];
  }
  function r$$2(L$$11) {
    var i$$18 = L$$11.length;
    if (L$$11.charAt(--i$$18) === ".") {
      L$$11 = L$$11.slice(0, i$$18);
    }
    if (L$$11.slice(0, 2) === "*.") {
      L$$11 = L$$11.slice(1);
    }
    return L$$11;
  }
  function K(L$$12) {
    if (!h$$5(L$$12)) {
      L$$12 = L$$12.text || "";
      var i$$19 = n$$6.getElementsByTagName("title");
      if (i$$19 && p$$3(i$$19[0])) {
        L$$12 = i$$19[0].text;
      }
    }
    return L$$12;
  }
  function s$$4(O$$3, S$$1) {
    var U$$1 = "Piwik_Overlay";
    var R$$1 = n$$6.referrer;
    var i$$20 = O$$3;
    i$$20 = i$$20.substring(0, i$$20.length - 9);
    i$$20.substring(i$$20.substring(0, 7) === "http://" ? 7 : 8, i$$20.length);
    R$$1.substring(R$$1.substring(0, 7) === "http://" ? 7 : 8, R$$1.length);
    if (R$$1.substring(0, i$$20.length) === i$$20) {
      var M$$10 = new RegExp("^" + i$$20 + "index\\.php\\?module=Overlay&action=startOverlaySession&idsite=([0-9]+)&period=([^&]+)&date=([^&]+)$");
      var N$$5 = R$$1.match(M$$10);
      if (N$$5) {
        var P$$3 = N$$5[1];
        if (parseInt(P$$3, 10) !== S$$1) {
          return false;
        }
        var Q$$1 = N$$5[2];
        var L$$13 = N$$5[3];
        window.name = U$$1 + "###" + Q$$1 + "###" + L$$13;
      }
    }
    var T$$1 = w$$5.name.split("###");
    return T$$1.length === 3 && T$$1[0] === U$$1;
  }
  function B(M$$11, S$$2) {
    var T$$2 = window.name.split("###");
    var R$$2 = M$$11.substring(0, M$$11.length - 9);
    var N$$6 = T$$2[1];
    var i$$21 = T$$2[2];
    var L$$14 = false;
    var O$$4 = function() {
      if (!L$$14) {
        L$$14 = true;
        Piwik_Overlay_Client.initialize(R$$2, S$$2, N$$6, i$$21);
      }
    };
    var Q$$2 = document.createElement("script");
    Q$$2.type = "text/javascript";
    Q$$2.onreadystatechange = function() {
      if (this.readyState === "loaded" || this.readyState === "complete") {
        O$$4();
      }
    };
    Q$$2.onload = O$$4;
    Q$$2.src = R$$2 + "plugins/Overlay/client/client.js?v=1";
    var P$$4 = document.getElementsByTagName("head")[0];
    P$$4.appendChild(Q$$2);
  }
  function t$$2(af$$1, aE) {
    function aS(bk, bh, bg, bj, bf, bi) {
      if (V$$1) {
        return;
      }
      var be;
      if (bg) {
        be = new Date;
        be.setTime(be.getTime() + bg);
      }
      n$$6.cookie = bk + "=" + g$$1(bh) + (bg ? ";expires=" + be.toGMTString() : "") + ";path=" + (bj || "/") + (bf ? ";domain=" + bf : "") + (bi ? ";secure" : "");
    }
    function ab$$1(bg$$1) {
      if (V$$1) {
        return 0;
      }
      var be$$1 = new RegExp("(^|;)[ ]*" + bg$$1 + "=([^;]*)");
      var bf$$1 = be$$1.exec(n$$6.cookie);
      return bf$$1 ? v(bf$$1[2]) : 0;
    }
    function a6(be$$2) {
      var bf$$2;
      if (T$$3) {
        bf$$2 = new RegExp("#.*");
        return be$$2.replace(bf$$2, "");
      }
      return be$$2;
    }
    function aW(bg$$2, be$$3) {
      var bh$$1 = f$$6(be$$3);
      var bf$$3;
      if (bh$$1) {
        return be$$3;
      }
      if (be$$3.slice(0, 1) === "/") {
        return f$$6(bg$$2) + "://" + b$$1(bg$$2) + be$$3;
      }
      bg$$2 = a6(bg$$2);
      if ((bf$$3 = bg$$2.indexOf("?")) >= 0) {
        bg$$2 = bg$$2.slice(0, bf$$3);
      }
      if ((bf$$3 = bg$$2.lastIndexOf("/")) !== bg$$2.length - 1) {
        bg$$2 = bg$$2.slice(0, bf$$3 + 1);
      }
      return bg$$2 + be$$3;
    }
    function aH(bh$$2) {
      var bf$$4;
      var be$$4;
      var bg$$3;
      bf$$4 = 0;
      for (;bf$$4 < aG.length;bf$$4++) {
        be$$4 = r$$2(aG[bf$$4].toLowerCase());
        if (bh$$2 === be$$4) {
          return true;
        }
        if (be$$4.slice(0, 1) === ".") {
          if (bh$$2 === be$$4.slice(1)) {
            return true;
          }
          bg$$3 = bh$$2.length - be$$4.length;
          if (bg$$3 > 0 && bh$$2.slice(bg$$3) === be$$4) {
            return true;
          }
        }
      }
      return false;
    }
    function bd(be$$5) {
      var bf$$5 = new Image(1, 1);
      bf$$5.onload = function() {
      };
      bf$$5.src = N$$7 + (N$$7.indexOf("?") < 0 ? "?" : "&") + be$$5;
    }
    function aT(be$$6) {
      try {
        var bg$$4 = w$$5.XMLHttpRequest ? new w$$5.XMLHttpRequest : w$$5.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : null;
        bg$$4.open("POST", N$$7, true);
        bg$$4.onreadystatechange = function() {
          if (this.readyState === 4 && this.status !== 200) {
            bd(be$$6);
          }
        };
        bg$$4.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        bg$$4.send(be$$6);
      } catch (bf$$6) {
        bd(be$$6);
      }
    }
    function aq(bg$$5, bf$$7) {
      var be$$7 = new Date;
      if (!a4) {
        if (aI === "POST") {
          aT(bg$$5);
        } else {
          bd(bg$$5);
        }
        e$$5 = be$$7.getTime() + bf$$7;
      }
    }
    function aR(be$$8) {
      return a9 + be$$8 + "." + a1 + "." + aM;
    }
    function P$$5() {
      if (V$$1) {
        return "0";
      }
      if (!p$$3(c$$1.cookieEnabled)) {
        var be$$9 = aR("testcookie");
        aS(be$$9, "1");
        return ab$$1(be$$9) === "1" ? "1" : "0";
      }
      return c$$1.cookieEnabled ? "1" : "0";
    }
    function aC() {
      aM = ao((X$$1 || aX) + (ba || "/")).slice(0, 4);
    }
    function Z$$1() {
      var bf$$8 = aR("cvar");
      var be$$10 = ab$$1(bf$$8);
      if (be$$10.length) {
        be$$10 = JSON2.parse(be$$10);
        if (y$$30(be$$10)) {
          return be$$10;
        }
      }
      return{};
    }
    function M$$12() {
      if (Q$$3 === false) {
        Q$$3 = Z$$1();
      }
    }
    function a0() {
      var be$$11 = new Date;
      aJ = be$$11.getTime();
    }
    function W$$2(bi$$1, bf$$9, be$$12, bh$$3, bg$$6, bj$$1) {
      aS(aR("id"), bi$$1 + "." + bf$$9 + "." + be$$12 + "." + bh$$3 + "." + bg$$6 + "." + bj$$1, ac$$1, ba, X$$1, aa$$1);
    }
    function L$$15() {
      var bf$$10 = new Date;
      var be$$13 = Math.round(bf$$10.getTime() / 1E3);
      var bh$$4 = ab$$1(aR("id"));
      var bg$$7;
      if (bh$$4) {
        bg$$7 = bh$$4.split(".");
        bg$$7.unshift("0");
      } else {
        if (!at) {
          at = ao((c$$1.userAgent || "") + (c$$1.platform || "") + JSON2.stringify(a2) + be$$13).slice(0, 16);
        }
        bg$$7 = ["1", at, be$$13, 0, be$$13, "", ""];
      }
      return bg$$7;
    }
    function i$$22() {
      var be$$14 = ab$$1(aR("ref"));
      if (be$$14.length) {
        try {
          be$$14 = JSON2.parse(be$$14);
          if (y$$30(be$$14)) {
            return be$$14;
          }
        } catch (bf$$11) {
        }
      }
      return["", "", 0, ""];
    }
    function am(bg$$8, bF, bG, bi$$2) {
      var bD;
      var bf$$12 = new Date;
      var bo = Math.round(bf$$12.getTime() / 1E3);
      var bI;
      var bE;
      var bk$$1;
      var bw;
      var bA;
      var bn;
      var by;
      var bl;
      var bC;
      var bj$$2 = 1024;
      var bJ;
      var br;
      var bz = Q$$3;
      var bu = aR("id");
      var bp = aR("ses");
      var bq = aR("ref");
      var bK = aR("cvar");
      var bx = L$$15();
      var bt = ab$$1(bp);
      var bB = i$$22();
      var bH = av || bb;
      var bm;
      var be$$15;
      if (V$$1) {
        V$$1 = false;
        aS(bu, "", -86400, ba, X$$1);
        aS(bp, "", -86400, ba, X$$1);
        aS(bK, "", -86400, ba, X$$1);
        aS(bq, "", -86400, ba, X$$1);
        V$$1 = true;
      }
      if (a4) {
        return "";
      }
      bI = bx[0];
      bE = bx[1];
      bw = bx[2];
      bk$$1 = bx[3];
      bA = bx[4];
      bn = bx[5];
      if (!p$$3(bx[6])) {
        bx[6] = "";
      }
      by = bx[6];
      if (!p$$3(bi$$2)) {
        bi$$2 = "";
      }
      var bs = document.characterSet || document.charset;
      if (!bs || bs.toLowerCase() === "utf-8") {
        bs = null;
      }
      bm = bB[0];
      be$$15 = bB[1];
      bl = bB[2];
      bC = bB[3];
      if (!bt) {
        bk$$1++;
        bn = bA;
        if (!au || !bm.length) {
          for (bD in ap) {
            if (Object.prototype.hasOwnProperty.call(ap, bD)) {
              bm = x$$47(bH, ap[bD]);
              if (bm.length) {
                break;
              }
            }
          }
          for (bD in ak) {
            if (Object.prototype.hasOwnProperty.call(ak, bD)) {
              be$$15 = x$$47(bH, ak[bD]);
              if (be$$15.length) {
                break;
              }
            }
          }
        }
        bJ = b$$1(aK);
        br = bC.length ? b$$1(bC) : "";
        if (bJ.length && !aH(bJ) && (!au || !br.length || aH(br))) {
          bC = aK;
        }
        if (bC.length || bm.length) {
          bl = bo;
          bB = [bm, be$$15, bl, a6(bC.slice(0, bj$$2))];
          aS(bq, JSON2.stringify(bB), aw, ba, X$$1, aa$$1);
        }
      }
      bg$$8 += "&idsite=" + a1 + "&rec=1&r=" + String(Math.random()).slice(2, 8) + "&h=" + bf$$12.getHours() + "&m=" + bf$$12.getMinutes() + "&s=" + bf$$12.getSeconds() + "&url=" + g$$1(a6(bH)) + (aK.length ? "&urlref=" + g$$1(a6(aK)) : "") + "&_id=" + bE + "&_idts=" + bw + "&_idvc=" + bk$$1 + "&_idn=" + bI + (bm.length ? "&_rcn=" + g$$1(bm) : "") + (be$$15.length ? "&_rck=" + g$$1(be$$15) : "") + "&_refts=" + bl + "&_viewts=" + bn + (String(by).length ? "&_ects=" + by : "") + (String(bC).length ? 
      "&_ref=" + g$$1(a6(bC.slice(0, bj$$2))) : "") + (bs ? "&cs=" + g$$1(bs) : "");
      var bh$$5 = JSON2.stringify(aA);
      if (bh$$5.length > 2) {
        bg$$8 += "&cvar=" + g$$1(bh$$5);
      }
      for (bD in a2) {
        if (Object.prototype.hasOwnProperty.call(a2, bD)) {
          bg$$8 += "&" + bD + "=" + a2[bD];
        }
      }
      if (bF) {
        bg$$8 += "&data=" + g$$1(JSON2.stringify(bF));
      } else {
        if (U$$2) {
          bg$$8 += "&data=" + g$$1(JSON2.stringify(U$$2));
        }
      }
      if (Q$$3) {
        var bv = JSON2.stringify(Q$$3);
        if (bv.length > 2) {
          bg$$8 += "&_cvar=" + g$$1(bv);
        }
        for (bD in bz) {
          if (Object.prototype.hasOwnProperty.call(bz, bD)) {
            if (Q$$3[bD][0] === "" || Q$$3[bD][1] === "") {
              delete Q$$3[bD];
            }
          }
        }
        aS(bK, JSON2.stringify(Q$$3), ad$$1, ba, X$$1, aa$$1);
      }
      W$$2(bE, bw, bk$$1, bo, bn, p$$3(bi$$2) && String(bi$$2).length ? bi$$2 : by);
      aS(bp, "*", ad$$1, ba, X$$1, aa$$1);
      bg$$8 += E(bG);
      return bg$$8;
    }
    function aV(bh$$6, bg$$9, bl$$1, bi$$3, be$$16, bo$$1) {
      var bj$$3 = "idgoal=0";
      var bk$$2;
      var bf$$13 = new Date;
      var bm$$1 = [];
      var bn$$1;
      if (String(bh$$6).length) {
        bj$$3 += "&ec_id=" + g$$1(bh$$6);
        bk$$2 = Math.round(bf$$13.getTime() / 1E3);
      }
      bj$$3 += "&revenue=" + bg$$9;
      if (String(bl$$1).length) {
        bj$$3 += "&ec_st=" + bl$$1;
      }
      if (String(bi$$3).length) {
        bj$$3 += "&ec_tx=" + bi$$3;
      }
      if (String(be$$16).length) {
        bj$$3 += "&ec_sh=" + be$$16;
      }
      if (String(bo$$1).length) {
        bj$$3 += "&ec_dt=" + bo$$1;
      }
      if (aQ) {
        for (bn$$1 in aQ) {
          if (Object.prototype.hasOwnProperty.call(aQ, bn$$1)) {
            if (!p$$3(aQ[bn$$1][1])) {
              aQ[bn$$1][1] = "";
            }
            if (!p$$3(aQ[bn$$1][2])) {
              aQ[bn$$1][2] = "";
            }
            if (!p$$3(aQ[bn$$1][3]) || String(aQ[bn$$1][3]).length === 0) {
              aQ[bn$$1][3] = 0;
            }
            if (!p$$3(aQ[bn$$1][4]) || String(aQ[bn$$1][4]).length === 0) {
              aQ[bn$$1][4] = 1;
            }
            bm$$1.push(aQ[bn$$1]);
          }
        }
        bj$$3 += "&ec_items=" + g$$1(JSON2.stringify(bm$$1));
      }
      bj$$3 = am(bj$$3, U$$2, "ecommerce", bk$$2);
      aq(bj$$3, aF);
    }
    function aU(be$$17, bi$$4, bh$$7, bg$$10, bf$$14, bj$$4) {
      if (String(be$$17).length && p$$3(bi$$4)) {
        aV(be$$17, bi$$4, bh$$7, bg$$10, bf$$14, bj$$4);
      }
    }
    function a8(be$$18) {
      if (p$$3(be$$18)) {
        aV("", be$$18, "", "", "", "");
      }
    }
    function ay(bh$$8, bi$$5) {
      var be$$19 = new Date;
      var bg$$11 = am("action_name=" + g$$1(K(bh$$8 || al)), bi$$5, "log");
      aq(bg$$11, aF);
      if (S$$3 && ag$$1 && !aL) {
        aL = true;
        J(n$$6, "click", a0);
        J(n$$6, "mouseup", a0);
        J(n$$6, "mousedown", a0);
        J(n$$6, "mousemove", a0);
        J(n$$6, "mousewheel", a0);
        J(w$$5, "DOMMouseScroll", a0);
        J(w$$5, "scroll", a0);
        J(n$$6, "keypress", a0);
        J(n$$6, "keydown", a0);
        J(n$$6, "keyup", a0);
        J(w$$5, "resize", a0);
        J(w$$5, "focus", a0);
        J(w$$5, "blur", a0);
        aJ = be$$19.getTime();
        setTimeout(function bf$$15() {
          var bj$$5 = new Date;
          var bk$$3;
          if (aJ + ag$$1 > bj$$5.getTime()) {
            if (S$$3 < bj$$5.getTime()) {
              bk$$3 = am("ping=1", bi$$5, "ping");
              aq(bk$$3, aF);
            }
            setTimeout(bf$$15, ag$$1);
          }
        }, ag$$1);
      }
    }
    function aj(be$$20, bh$$9, bf$$16, bi$$6) {
      var bg$$12 = am("search=" + g$$1(be$$20) + (bh$$9 ? "&search_cat=" + g$$1(bh$$9) : "") + (p$$3(bf$$16) ? "&search_count=" + bf$$16 : ""), bi$$6, "sitesearch");
      aq(bg$$12, aF);
    }
    function aD(be$$21, bh$$10, bg$$13) {
      var bf$$17 = am("idgoal=" + be$$21 + (bh$$10 ? "&revenue=" + bh$$10 : ""), bg$$13, "goal");
      aq(bf$$17, aF);
    }
    function aZ(bf$$18, be$$22, bh$$11) {
      var bg$$14 = am(be$$22 + "=" + g$$1(a6(bf$$18)), bh$$11, "link");
      aq(bg$$14, aF);
    }
    function a3(bf$$19, be$$23) {
      if (bf$$19 !== "") {
        return bf$$19 + be$$23.charAt(0).toUpperCase() + be$$23.slice(1);
      }
      return be$$23;
    }
    function ai$$1(bj$$6) {
      var bi$$7;
      var be$$24;
      var bh$$12 = ["", "webkit", "ms", "moz"];
      var bg$$15;
      if (!ar) {
        be$$24 = 0;
        for (;be$$24 < bh$$12.length;be$$24++) {
          bg$$15 = bh$$12[be$$24];
          if (Object.prototype.hasOwnProperty.call(n$$6, a3(bg$$15, "hidden"))) {
            if (n$$6[a3(bg$$15, "visibilityState")] === "prerender") {
              bi$$7 = true;
            }
            break;
          }
        }
      }
      if (bi$$7) {
        J(n$$6, bg$$15 + "visibilitychange", function bf$$20() {
          n$$6.removeEventListener(bg$$15 + "visibilitychange", bf$$20, false);
          bj$$6();
        });
        return;
      }
      bj$$6();
    }
    function ah$$1(bg$$16, bf$$21) {
      var bh$$13;
      var be$$25 = "(^| )(piwik[_-]" + bf$$21;
      if (bg$$16) {
        bh$$13 = 0;
        for (;bh$$13 < bg$$16.length;bh$$13++) {
          be$$25 += "|" + bg$$16[bh$$13];
        }
      }
      be$$25 += ")( |$)";
      return new RegExp(be$$25);
    }
    function aY(bh$$14, be$$26, bi$$8) {
      var bg$$17 = ah$$1(az, "download");
      var bf$$22 = ah$$1(ae$$1, "link");
      var bj$$7 = new RegExp("\\.(" + an + ")([?&#]|$)", "i");
      return bf$$22.test(bh$$14) ? "link" : bg$$17.test(bh$$14) || bj$$7.test(be$$26) ? "download" : bi$$8 ? 0 : "link";
    }
    function aP(bj$$8) {
      var bh$$15;
      var bf$$23;
      var be$$27;
      for (;(bh$$15 = bj$$8.parentNode) !== null && p$$3(bh$$15) && ((bf$$23 = bj$$8.tagName.toUpperCase()) !== "A" && bf$$23 !== "AREA");) {
        bj$$8 = bh$$15;
      }
      if (p$$3(bj$$8.href)) {
        var bk$$4 = bj$$8.hostname || b$$1(bj$$8.href);
        var bl$$2 = bk$$4.toLowerCase();
        var bg$$18 = bj$$8.href.replace(bk$$4, bl$$2);
        var bi$$9 = new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):", "i");
        if (!bi$$9.test(bg$$18)) {
          be$$27 = aY(bj$$8.className, bg$$18, aH(bl$$2));
          if (be$$27) {
            bg$$18 = d$$1(bg$$18);
            aZ(bg$$18, be$$27);
          }
        }
      }
    }
    function bc(be$$28) {
      var bf$$24;
      var bg$$19;
      be$$28 = be$$28 || w$$5.event;
      bf$$24 = be$$28.which || be$$28.button;
      bg$$19 = be$$28.target || be$$28.srcElement;
      if (be$$28.type === "click") {
        if (bg$$19) {
          aP(bg$$19);
        }
      } else {
        if (be$$28.type === "mousedown") {
          if ((bf$$24 === 1 || bf$$24 === 2) && bg$$19) {
            aB = bf$$24;
            Y$$1 = bg$$19;
          } else {
            aB = Y$$1 = null;
          }
        } else {
          if (be$$28.type === "mouseup") {
            if (bf$$24 === aB && bg$$19 === Y$$1) {
              aP(bg$$19);
            }
            aB = Y$$1 = null;
          }
        }
      }
    }
    function aO(bf$$25, be$$29) {
      if (be$$29) {
        J(bf$$25, "mouseup", bc, false);
        J(bf$$25, "mousedown", bc, false);
      } else {
        J(bf$$25, "click", bc, false);
      }
    }
    function ax(bf$$26) {
      if (!aN) {
        aN = true;
        var bg$$20;
        var be$$30 = ah$$1(R$$3, "ignore");
        var bh$$16 = n$$6.links;
        if (bh$$16) {
          bg$$20 = 0;
          for (;bg$$20 < bh$$16.length;bg$$20++) {
            if (!be$$30.test(bh$$16[bg$$20].className)) {
              aO(bh$$16[bg$$20], bf$$26);
            }
          }
        }
      }
    }
    function a7() {
      var bf$$27;
      var bg$$21;
      var bh$$17 = {pdf:"application/pdf", qt:"video/quicktime", realp:"audio/x-pn-realaudio-plugin", wma:"application/x-mplayer2", dir:"application/x-director", fla:"application/x-shockwave-flash", java:"application/x-java-vm", gears:"application/x-googlegears", ag:"application/x-silverlight"};
      var be$$31 = (new RegExp("Mac OS X.*Safari/")).test(c$$1.userAgent) ? w$$5.devicePixelRatio || 1 : 1;
      if (!(new RegExp("MSIE")).test(c$$1.userAgent)) {
        if (c$$1.mimeTypes && c$$1.mimeTypes.length) {
          for (bf$$27 in bh$$17) {
            if (Object.prototype.hasOwnProperty.call(bh$$17, bf$$27)) {
              bg$$21 = c$$1.mimeTypes[bh$$17[bf$$27]];
              a2[bf$$27] = bg$$21 && bg$$21.enabledPlugin ? "1" : "0";
            }
          }
        }
        if (typeof navigator.javaEnabled !== "unknown" && p$$3(c$$1.javaEnabled) && c$$1.javaEnabled()) {
          a2.java = "1";
        }
        if (l$$1(w$$5.GearsFactory)) {
          a2.gears = "1";
        }
        a2.cookie = P$$5();
      }
      a2.res = z$$2.width * be$$31 + "x" + z$$2.height * be$$31;
    }
    var O$$5 = C(n$$6.domain, w$$5.location.href, q$$2());
    var aX = r$$2(O$$5[0]);
    var bb = O$$5[1];
    var aK = O$$5[2];
    var aI = "GET";
    var N$$7 = af$$1 || "";
    var a1 = aE || "";
    var av;
    var al = n$$6.title;
    var an = "7z|aac|ar[cj]|as[fx]|avi|bin|csv|deb|dmg|doc|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|ppt|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xls|xml|z|zip";
    var aG = [aX];
    var R$$3 = [];
    var az = [];
    var ae$$1 = [];
    var aF = 500;
    var S$$3;
    var ag$$1;
    var T$$3;
    var U$$2;
    var ap = ["pk_campaign", "piwik_campaign", "utm_campaign", "utm_source", "utm_medium"];
    var ak = ["pk_kwd", "piwik_kwd", "utm_term"];
    var a9 = "_pk_";
    var X$$1;
    var ba;
    var V$$1 = false;
    var a4;
    var ar;
    var au;
    var ac$$1 = 63072E6;
    var ad$$1 = 18E5;
    var aw = 15768E6;
    var aa$$1 = n$$6.location.protocol === "https";
    var Q$$3 = false;
    var aA = {};
    var a5 = 200;
    var aQ = {};
    var a2 = {};
    var aN = false;
    var aL = false;
    var aJ;
    var aB;
    var Y$$1;
    var ao = I;
    var aM;
    var at;
    a7();
    aC();
    return{getVisitorId:function() {
      return L$$15()[1];
    }, getVisitorInfo:function() {
      return L$$15();
    }, getAttributionInfo:function() {
      return i$$22();
    }, getAttributionCampaignName:function() {
      return i$$22()[0];
    }, getAttributionCampaignKeyword:function() {
      return i$$22()[1];
    }, getAttributionReferrerTimestamp:function() {
      return i$$22()[2];
    }, getAttributionReferrerUrl:function() {
      return i$$22()[3];
    }, setTrackerUrl:function(be$$32) {
      N$$7 = be$$32;
    }, setSiteId:function(be$$33) {
      a1 = be$$33;
    }, setCustomData:function(be$$34, bf$$28) {
      if (y$$30(be$$34)) {
        U$$2 = be$$34;
      } else {
        if (!U$$2) {
          U$$2 = [];
        }
        U$$2[be$$34] = bf$$28;
      }
    }, getCustomData:function() {
      return U$$2;
    }, setCustomVariable:function(bf$$29, be$$35, bi$$10, bg$$22) {
      var bh$$18;
      if (!p$$3(bg$$22)) {
        bg$$22 = "visit";
      }
      if (bf$$29 > 0) {
        be$$35 = p$$3(be$$35) && !h$$5(be$$35) ? String(be$$35) : be$$35;
        bi$$10 = p$$3(bi$$10) && !h$$5(bi$$10) ? String(bi$$10) : bi$$10;
        bh$$18 = [be$$35.slice(0, a5), bi$$10.slice(0, a5)];
        if (bg$$22 === "visit" || bg$$22 === 2) {
          M$$12();
          Q$$3[bf$$29] = bh$$18;
        } else {
          if (bg$$22 === "page" || bg$$22 === 3) {
            aA[bf$$29] = bh$$18;
          }
        }
      }
    }, getCustomVariable:function(bf$$30, bg$$23) {
      var be$$36;
      if (!p$$3(bg$$23)) {
        bg$$23 = "visit";
      }
      if (bg$$23 === "page" || bg$$23 === 3) {
        be$$36 = aA[bf$$30];
      } else {
        if (bg$$23 === "visit" || bg$$23 === 2) {
          M$$12();
          be$$36 = Q$$3[bf$$30];
        }
      }
      if (!p$$3(be$$36) || be$$36 && be$$36[0] === "") {
        return false;
      }
      return be$$36;
    }, deleteCustomVariable:function(be$$37, bf$$31) {
      if (this.getCustomVariable(be$$37, bf$$31)) {
        this.setCustomVariable(be$$37, "", "", bf$$31);
      }
    }, setLinkTrackingTimer:function(be$$38) {
      aF = be$$38;
    }, setDownloadExtensions:function(be$$39) {
      an = be$$39;
    }, addDownloadExtensions:function(be$$40) {
      an += "|" + be$$40;
    }, setDomains:function(be$$41) {
      aG = h$$5(be$$41) ? [be$$41] : be$$41;
      aG.push(aX);
    }, setIgnoreClasses:function(be$$42) {
      R$$3 = h$$5(be$$42) ? [be$$42] : be$$42;
    }, setRequestMethod:function(be$$43) {
      aI = be$$43 || "GET";
    }, setReferrerUrl:function(be$$44) {
      aK = be$$44;
    }, setCustomUrl:function(be$$45) {
      av = aW(bb, be$$45);
    }, setDocumentTitle:function(be$$46) {
      al = be$$46;
    }, setDownloadClasses:function(be$$47) {
      az = h$$5(be$$47) ? [be$$47] : be$$47;
    }, setLinkClasses:function(be$$48) {
      ae$$1 = h$$5(be$$48) ? [be$$48] : be$$48;
    }, setCampaignNameKey:function(be$$49) {
      ap = h$$5(be$$49) ? [be$$49] : be$$49;
    }, setCampaignKeywordKey:function(be$$50) {
      ak = h$$5(be$$50) ? [be$$50] : be$$50;
    }, discardHashTag:function(be$$51) {
      T$$3 = be$$51;
    }, setCookieNamePrefix:function(be$$52) {
      a9 = be$$52;
      Q$$3 = Z$$1();
    }, setCookieDomain:function(be$$53) {
      X$$1 = r$$2(be$$53);
      aC();
    }, setCookiePath:function(be$$54) {
      ba = be$$54;
      aC();
    }, setVisitorCookieTimeout:function(be$$55) {
      ac$$1 = be$$55 * 1E3;
    }, setSessionCookieTimeout:function(be$$56) {
      ad$$1 = be$$56 * 1E3;
    }, setReferralCookieTimeout:function(be$$57) {
      aw = be$$57 * 1E3;
    }, setConversionAttributionFirstReferrer:function(be$$58) {
      au = be$$58;
    }, disableCookies:function() {
      V$$1 = true;
      a2.cookie = "0";
    }, setDoNotTrack:function(bf$$32) {
      var be$$59 = c$$1.doNotTrack || c$$1.msDoNotTrack;
      a4 = bf$$32 && (be$$59 === "yes" || be$$59 === "1");
      if (a4) {
        this.disableCookies();
      }
    }, addListener:function(bf$$33, be$$60) {
      aO(bf$$33, be$$60);
    }, enableLinkTracking:function(be$$61) {
      if (k$$1) {
        ax(be$$61);
      } else {
        u.push(function() {
          ax(be$$61);
        });
      }
    }, setHeartBeatTimer:function(bg$$24, bf$$34) {
      var be$$62 = new Date;
      S$$3 = be$$62.getTime() + bg$$24 * 1E3;
      ag$$1 = bf$$34 * 1E3;
    }, killFrame:function() {
      if (w$$5.location !== w$$5.top.location) {
        w$$5.top.location = w$$5.location;
      }
    }, redirectFile:function(be$$63) {
      if (w$$5.location.protocol === "file:") {
        w$$5.location = be$$63;
      }
    }, setCountPreRendered:function(be$$64) {
      ar = be$$64;
    }, trackGoal:function(be$$65, bg$$25, bf$$35) {
      ai$$1(function() {
        aD(be$$65, bg$$25, bf$$35);
      });
    }, trackLink:function(bf$$36, be$$66, bg$$26) {
      ai$$1(function() {
        aZ(bf$$36, be$$66, bg$$26);
      });
    }, trackPageView:function(be$$67, bf$$37) {
      if (s$$4(N$$7, a1)) {
        ai$$1(function() {
          B(N$$7, a1);
        });
      } else {
        ai$$1(function() {
          ay(be$$67, bf$$37);
        });
      }
    }, trackSiteSearch:function(be$$68, bg$$27, bf$$38) {
      ai$$1(function() {
        aj(be$$68, bg$$27, bf$$38);
      });
    }, setEcommerceView:function(bh$$19, be$$69, bg$$28, bf$$39) {
      if (!p$$3(bg$$28) || !bg$$28.length) {
        bg$$28 = "";
      } else {
        if (bg$$28 instanceof Array) {
          bg$$28 = JSON2.stringify(bg$$28);
        }
      }
      aA[5] = ["_pkc", bg$$28];
      if (p$$3(bf$$39) && String(bf$$39).length) {
        aA[2] = ["_pkp", bf$$39];
      }
      if ((!p$$3(bh$$19) || !bh$$19.length) && (!p$$3(be$$69) || !be$$69.length)) {
        return;
      }
      if (p$$3(bh$$19) && bh$$19.length) {
        aA[3] = ["_pks", bh$$19];
      }
      if (!p$$3(be$$69) || !be$$69.length) {
        be$$69 = "";
      }
      aA[4] = ["_pkn", be$$69];
    }, addEcommerceItem:function(bi$$11, be$$70, bg$$29, bf$$40, bh$$20) {
      if (bi$$11.length) {
        aQ[bi$$11] = [bi$$11, be$$70, bg$$29, bf$$40, bh$$20];
      }
    }, trackEcommerceOrder:function(be$$71, bi$$12, bh$$21, bg$$30, bf$$41, bj$$9) {
      aU(be$$71, bi$$12, bh$$21, bg$$30, bf$$41, bj$$9);
    }, trackEcommerceCartUpdate:function(be$$72) {
      a8(be$$72);
    }};
  }
  function o$$3() {
    return{push:G};
  }
  var e$$5;
  var a$$1 = {};
  var n$$6 = document;
  var c$$1 = navigator;
  var z$$2 = screen;
  var w$$5 = window;
  var k$$1 = false;
  var u = [];
  var g$$1 = w$$5.encodeURIComponent;
  var v = w$$5.decodeURIComponent;
  var d$$1 = unescape;
  var A;
  var D;
  J(w$$5, "beforeunload", H, false);
  j$$1();
  Date.prototype.getTimeAlias = Date.prototype.getTime;
  A = new t$$2;
  D = 0;
  for (;D < _paq.length;D++) {
    G(_paq[D]);
  }
  _paq = new o$$3;
  return{addPlugin:function(i$$23, L$$16) {
    a$$1[i$$23] = L$$16;
  }, getTracker:function(i$$24, L$$17) {
    return new t$$2(i$$24, L$$17);
  }, getAsyncTracker:function() {
    return A;
  }};
}();
var piwik_track;
var piwik_log = function(b$$2, f$$7, d$$2, g$$2) {
  function a$$2(h$$6) {
    try {
      return eval("piwik_" + h$$6);
    } catch (i$$25) {
    }
    return;
  }
  var c$$2;
  var e$$6 = Piwik.getTracker(d$$2, f$$7);
  e$$6.setDocumentTitle(b$$2);
  e$$6.setCustomData(g$$2);
  c$$2 = a$$2("tracker_pause");
  if (c$$2) {
    e$$6.setLinkTrackingTimer(c$$2);
  }
  c$$2 = a$$2("download_extensions");
  if (c$$2) {
    e$$6.setDownloadExtensions(c$$2);
  }
  c$$2 = a$$2("hosts_alias");
  if (c$$2) {
    e$$6.setDomains(c$$2);
  }
  c$$2 = a$$2("ignore_classes");
  if (c$$2) {
    e$$6.setIgnoreClasses(c$$2);
  }
  e$$6.trackPageView();
  if (a$$2("install_tracker")) {
    piwik_track = function(i$$26, k$$2, j$$2, h$$7) {
      e$$6.setSiteId(k$$2);
      e$$6.setTrackerUrl(j$$2);
      e$$6.trackLink(i$$26, h$$7);
    };
    e$$6.enableLinkTracking();
  }
};
var pkBaseURL = "https:" == document.location.protocol ? "https://cms.demo.crash" : "http://cms.demo.crash";
var piwikTracker = Piwik.getTracker(pkBaseURL + "piwik.php", "crash");
piwikTracker.trackPageView();
piwikTracker.enableLinkTracking()

}
