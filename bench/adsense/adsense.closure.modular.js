introspect(JAMScript.introspectors.processAll) {
(function() {
  function rb() {
    if(!window.google_top_experiment && !window.google_top_js_status) {
      var a$$69 = window;
      if(2 !== (a$$69.top == a$$69 ? 0 : J(a$$69.top) ? 1 : 2)) {
        window.google_top_js_status = 0
      }else {
        if(top.postMessage) {
          var b$$55;
          try {
            b$$55 = D.top.frames.google_top_static_frame ? !0 : !1
          }catch(c$$32) {
            b$$55 = !1
          }
          if(b$$55) {
            if(window.google_top_experiment = I(["jp_c", "jp_zl", "jp_wfpmr"], ja), "jp_c" !== window.google_top_experiment) {
              a$$69 = window;
              a$$69.addEventListener ? a$$69.addEventListener("message", hb, !1) : a$$69.attachEvent && a$$69.attachEvent("onmessage", hb);
              window.google_top_js_status = 3;
              a$$69 = {0:"google_loc_request", 1:gb};
              b$$55 = [];
              var d$$24;
              for(d$$24 in a$$69) {
                b$$55.push(d$$24 + "=" + a$$69[d$$24])
              }
              top.postMessage(b$$55.join("\n"), "*")
            }
          }else {
            window.google_top_js_status = 2
          }
        }else {
          window.google_top_js_status = 1
        }
      }
    }
    if((d$$24 = window.adsbygoogle) && d$$24.shift) {
      b$$55 = 20;
      for(;(a$$69 = d$$24.shift()) && 0 < b$$55--;) {
        try {
          qb(a$$69)
        }catch(e$$19) {
          throw window.setTimeout(rb, 0), e$$19;
        }
      }
    }
    window.adsbygoogle = {push:qb}
  }
  function qb(a$$68) {
    var b$$54 = a$$68.element;
    a$$68 = a$$68.params || {};
    if(b$$54) {
      if(!mb(b$$54) && (b$$54 = b$$54.id && pb(b$$54.id), !b$$54)) {
        throw Error("adsbygoogle: 'element' has already been filled.");
      }
      if(!("innerHTML" in b$$54)) {
        throw Error("adsbygoogle.push(): 'element' is not a good DOM element.");
      }
    }else {
      if(b$$54 = pb(), !b$$54) {
        throw Error("adsbygoogle.push(): All ins elements in the DOM with class=adsbygoogle already have ads in them.");
      }
    }
    var c$$31 = window;
    b$$54.setAttribute("data-adsbygoogle-status", "done");
    ob(b$$54, a$$68, c$$31)
  }
  function pb(a$$67) {
    var b$$53 = document.getElementsByTagName("ins");
    var c$$30 = 0;
    var d$$23 = b$$53[c$$30];
    for(;c$$30 < b$$53.length;d$$23 = b$$53[++c$$30]) {
      if(mb(d$$23) && (!a$$67 || d$$23.id == a$$67)) {
        return d$$23
      }
    }
    return null
  }
  function nb(a$$66, b$$52, c$$29) {
    var d$$22 = a$$66.attributes;
    var e$$18 = d$$22.length;
    var f$$9 = 0;
    for(;f$$9 < e$$18;f$$9++) {
      var g$$7 = d$$22[f$$9];
      if(/data-/.test(g$$7.nodeName)) {
        var l$$5 = g$$7.nodeName.replace("data", "google").replace(/-/g, "_");
        b$$52.hasOwnProperty(l$$5) || (b$$52[l$$5] = g$$7.nodeValue)
      }
    }
    d$$22 = b$$52.google_ad_format;
    if("auto" == d$$22 || /^((^|,)(horizontal|vertical|rectangle))+$/.test(d$$22)) {
      d$$22 = a$$66.offsetWidth;
      e$$18 = b$$52.google_ad_format;
      c$$29 = lb(d$$22, e$$18, c$$29);
      if(!c$$29) {
        throw Error("Cannot find a responsive size for a container of width=" + d$$22 + "px and data-ad-format=" + e$$18);
      }
      b$$52.google_ad_height = c$$29.height;
      b$$52.google_ad_width = 300 < d$$22 && 300 < c$$29.height ? c$$29.width : 1200 < d$$22 ? 1200 : Math.round(d$$22);
      a$$66.style.height = b$$52.google_ad_height + "px";
      delete b$$52.google_ad_format;
      b$$52.google_loader_features_used = 128
    }else {
      ib.test(a$$66.style.width) && ib.test(a$$66.style.height) ? jb(a$$66.style, b$$52) : (c$$29 = c$$29.getComputedStyle ? c$$29.getComputedStyle(a$$66, null) : a$$66.currentStyle, a$$66.style.width = c$$29.width, a$$66.style.height = c$$29.height, jb(c$$29, b$$52))
    }
  }
  function ob(a$$65, b$$51, c$$28) {
    a$$65.style && "none" == a$$65.style.display && (b$$51.google_dn = 1);
    va(c$$28);
    nb(a$$65, b$$51, c$$28);
    var d$$21 = 0;
    for(;d$$21 < $.length;d$$21++) {
      b$$51[$[d$$21]] = b$$51[$[d$$21]] || c$$28[$[d$$21]]
    }
    b$$51.google_loader_used = "aa";
    if((d$$21 = b$$51.google_ad_output) && "html" != d$$21) {
      throw Error("No support for google_ad_output=" + d$$21);
    }
    K("aa::main", L, function() {
      fb(c$$28, b$$51, a$$65)
    })
  }
  function mb(a$$64) {
    return/(^| )adsbygoogle($| )/.test(a$$64.className) && "done" != a$$64.getAttribute("data-adsbygoogle-status")
  }
  function kb(a$$63) {
    a$$63 = a$$63.document;
    return a$$63.documentElement.clientWidth || a$$63.body.clientWidth
  }
  function lb(a$$61, b$$49, c$$27) {
    Z.sort(function(a$$62, b$$50) {
      return a$$62.width - b$$50.width || a$$62.height - b$$50.height
    });
    "auto" == b$$49 && (b$$49 = 0.25 > a$$61 / kb(c$$27) ? "vertical" : "horizontal,rectangle");
    c$$27 = Z.length;
    for(;c$$27--;) {
      if(Z[c$$27].width <= a$$61 && -1 != b$$49.indexOf(Z[c$$27].format)) {
        return Z[c$$27]
      }
    }
    return null
  }
  function jb(a$$60, b$$48) {
    var c$$26 = ["width", "height"];
    var d$$20 = 0;
    for(;d$$20 < c$$26.length;d$$20++) {
      var e$$17 = "google_ad_" + c$$26[d$$20];
      if(!b$$48.hasOwnProperty(e$$17)) {
        var f$$8 = ib.exec(a$$60[c$$26[d$$20]]);
        f$$8 && (b$$48[e$$17] = Math.round(f$$8[1]))
      }
    }
  }
  function hb(a$$59) {
    var b$$47 = a$$59.data.split("\n");
    var c$$25 = {};
    var d$$19 = 0;
    for(;d$$19 < b$$47.length;d$$19++) {
      var e$$16 = b$$47[d$$19].indexOf("=");
      -1 != e$$16 && (c$$25[b$$47[d$$19].substr(0, e$$16)] = b$$47[d$$19].substr(e$$16 + 1))
    }
    b$$47 = c$$25[3];
    if(c$$25[1] == gb && (window.google_top_js_status = 4, a$$59.source == top && 0 == b$$47.indexOf(a$$59.origin) && (window.google_top_values = c$$25, window.google_top_js_status = 5), window.google_top_js_callbacks)) {
      a$$59 = 0;
      for(;a$$59 < window.google_top_js_callbacks.length;a$$59++) {
        window.google_top_js_callbacks[a$$59]()
      }
      window.google_top_js_callbacks.length = 0
    }
  }
  function eb(a$$58, b$$46, c$$24, d$$18) {
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
    if(Ja(a$$58) && 1 == a$$58.google_unique_id && "XN" != k$$2 && "S" != k$$2) {
      h$$8 = "zrt_ads_frame" + a$$58.google_unique_id;
      var m$$2;
      m$$2 = b$$46.google_page_url;
      if(!m$$2) {
        r: {
          m$$2 = a$$58.document;
          var q$$2 = f$$7 || a$$58.google_ad_width;
          var x$$50 = g$$6 || a$$58.google_ad_height;
          if(a$$58.top == a$$58) {
            m$$2 = !1
          }else {
            var B$$1 = m$$2.documentElement;
            if(q$$2 && x$$50) {
              var u$$1 = 1;
              var r$$1 = 1;
              a$$58.innerHeight ? (u$$1 = a$$58.innerWidth, r$$1 = a$$58.innerHeight) : B$$1 && B$$1.clientHeight ? (u$$1 = B$$1.clientWidth, r$$1 = B$$1.clientHeight) : m$$2.body && (u$$1 = m$$2.body.clientWidth, r$$1 = m$$2.body.clientHeight);
              if(r$$1 > 2 * x$$50 || u$$1 > 2 * q$$2) {
                m$$2 = !1;
                break r
              }
            }
            m$$2 = !0
          }
        }
        m$$2 = m$$2 ? a$$58.document.referrer : a$$58.document.URL
      }
      m$$2 = encodeURIComponent(m$$2);
      q$$2 = null;
      if("PC" == k$$2 || "EI" == k$$2 || "AZ" == k$$2) {
        switch(k$$2) {
          case "EI":
            q$$2 = "I";
            break;
          case "AZ":
            q$$2 = "Z";
            break;
          default:
            q$$2 = "K"
        }
        q$$2 = q$$2 + "-" + (m$$2 + "/" + b$$46.google_ad_unit_key + "/" + a$$58.google_unique_id)
      }
      b$$46 = {};
      db(b$$46, f$$7, g$$6, !1);
      b$$46.style = "display:none";
      f$$7 = q$$2;
      b$$46.id = h$$8;
      b$$46.name = h$$8;
      f$$7 = C(A("", "doubleclick"), ["/pagead/html/r20131120/r20130906/zrt_lookup.html", f$$7 ? "#" + encodeURIComponent(f$$7) : ""].join(""));
      b$$46.src = f$$7;
      f$$7 = cb(b$$46)
    }else {
      f$$7 = null
    }
    g$$6 = (new Date).getTime();
    b$$46 = a$$58.google_top_experiment;
    h$$8 = a$$58.google_async_for_oa_experiment;
    m$$2 = a$$58.google_always_use_delayed_impressions_experiment;
    l$$4 = ["<!doctype html><html><body>", f$$7, "<", e$$15, ">", c$$24, "google_show_ads_impl=true;google_unique_id=", a$$58.google_unique_id, ';google_async_iframe_id="', d$$18, '";google_start_time=', v, ";", b$$46 ? 'google_top_experiment="' + b$$46 + '";' : "", k$$2 ? 'google_ad_handling_mode="' + k$$2 + '";' : "", h$$8 ? 'google_async_for_oa_experiment="' + h$$8 + '";' : "", m$$2 ? 'google_always_use_delayed_impressions_experiment="' + m$$2 + '";' : "", l$$4 ? 'google_append_as_for_format_override="' + 
    l$$4 + '";' : "", "google_bpp=", g$$6 > v ? g$$6 - v : 1, ";google_async_rrc=0;</", e$$15, ">", ab(), "</body></html>"].join("");
    (a$$58.document.getElementById(d$$18) ? Ya : Za)(bb(a$$58, d$$18, l$$4, !0))
  }
  function fb(a$$56, b$$44, c$$23) {
    eb(a$$56, b$$44, c$$23, function(a$$57, b$$45, f$$6) {
      var g$$5 = b$$45.id;
      var l$$3 = 0;
      for(;!g$$5 || a$$57.document.getElementById(g$$5);) {
        g$$5 = "aswift_" + l$$3++
      }
      b$$45.id = g$$5;
      b$$45.name = g$$5;
      a$$57 = Number(f$$6.google_ad_width);
      g$$5 = Number(f$$6.google_ad_height);
      f$$6 = ["<iframe"];
      var h$$7;
      for(h$$7 in b$$45) {
        b$$45.hasOwnProperty(h$$7) && ua(f$$6, h$$7 + "=" + b$$45[h$$7])
      }
      f$$6.push('style="left:0;position:absolute;top:0;"');
      f$$6.push("></iframe>");
      h$$7 = "border:none;height:" + g$$5 + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + a$$57 + "px;background-color:transparent";
      c$$23.innerHTML = ['<ins style="display:inline-table;', h$$7, '"><ins id="', b$$45.id + "_anchor", '" style="display:block;', h$$7, '">', f$$6.join(" "), "</ins></ins>"].join("");
      return b$$45.id
    })
  }
  function db(a$$55, b$$43, c$$22, d$$17) {
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
    a$$55.scrolling = d$$17 + "no" + d$$17
  }
  function cb(a$$53) {
    var b$$42 = ["<iframe"];
    G(a$$53, function(a$$54, d$$16) {
      null != a$$54 && b$$42.push(" " + d$$16 + '="' + a$$54 + '"')
    });
    b$$42.push("></iframe>");
    return b$$42.join("")
  }
  function bb(a$$52, b$$41, c$$21, d$$15) {
    return function() {
      var e$$13 = !1;
      d$$15 && Xa().al(3E4);
      try {
        if(J(a$$52.document.getElementById(b$$41).contentWindow)) {
          var f$$5 = a$$52.document.getElementById(b$$41).contentWindow;
          var g$$4 = f$$5.document;
          g$$4.body && g$$4.body.firstChild || (g$$4.open(), f$$5.google_async_iframe_close = !0, g$$4.write(c$$21))
        }else {
          var l$$2 = a$$52.document.getElementById(b$$41).contentWindow;
          var h$$6;
          f$$5 = c$$21;
          f$$5 = String(f$$5);
          if(f$$5.quote) {
            h$$6 = f$$5.quote()
          }else {
            g$$4 = ['"'];
            var k$$1 = 0;
            for(;k$$1 < f$$5.length;k$$1++) {
              var m$$1 = f$$5.charAt(k$$1);
              var q$$1 = m$$1.charCodeAt(0);
              var x$$49 = g$$4;
              var B = k$$1 + 1;
              var u;
              if(!(u = E[m$$1])) {
                var r;
                if(31 < q$$1 && 127 > q$$1) {
                  r = m$$1
                }else {
                  var t = m$$1;
                  if(t in F) {
                    r = F[t]
                  }else {
                    if(t in E) {
                      r = F[t] = E[t]
                    }else {
                      var s$$2 = t;
                      var y$$31 = t.charCodeAt(0);
                      if(31 < y$$31 && 127 > y$$31) {
                        s$$2 = t
                      }else {
                        if(256 > y$$31) {
                          if(s$$2 = "\\x", 16 > y$$31 || 256 < y$$31) {
                            s$$2 += "0"
                          }
                        }else {
                          s$$2 = "\\u", 4096 > y$$31 && (s$$2 += "0")
                        }
                        s$$2 += y$$31.toString(16).toUpperCase()
                      }
                      r = F[t] = s$$2
                    }
                  }
                }
                u = r
              }
              x$$49[B] = u
            }
            g$$4.push('"');
            h$$6 = g$$4.join("")
          }
          l$$2.location.replace("javascript:" + h$$6)
        }
        e$$13 = !0
      }catch(sb) {
        l$$2 = Da().google_jobrunner, Wa(l$$2) && l$$2.rl()
      }
      e$$13 && (e$$13 = La("google_async_rrc", c$$21), (new Q(a$$52)).set(b$$41, bb(a$$52, b$$41, e$$13, !1)))
    }
  }
  function ab() {
    var a$$51 = "script";
    return["<", a$$51, ' src="', C(A("", "googlesyndication"), "/pagead/js/r20131120/r20130906/show_ads_impl.js", ""), '"></', a$$51, ">"].join("")
  }
  function Za(a$$50, b$$40) {
    Xa().nqa(a$$50, b$$40)
  }
  function Ya(a$$49, b$$39) {
    Xa().nq(a$$49, b$$39)
  }
  function Xa() {
    if(X && Va(X)) {
      return X
    }
    var a$$48 = Da();
    var b$$38 = a$$48.google_jobrunner;
    return Wa(b$$38) ? X = b$$38 : a$$48.google_jobrunner = X = new Y(a$$48)
  }
  function Wa(a$$47) {
    return!!a$$47 && ("object" == typeof a$$47 || "function" == typeof a$$47) && Va(a$$47) && H(a$$47.nq) && H(a$$47.nqa) && H(a$$47.al) && H(a$$47.rl)
  }
  function Va(a$$46) {
    try {
      return a$$46.sz()
    }catch(b$$37) {
      return!1
    }
  }
  function Ua(a$$43) {
    var b$$35 = M("sjr::tryrun", p(a$$43.m, a$$43));
    a$$43.b.setTimeout(b$$35, 0)
  }
  function Ta(a$$39, b$$31) {
    this.k = a$$39;
    this.h = b$$31
  }
  function Y(a$$38) {
    this.c = [];
    this.b = a$$38 || window;
    this.a = 0;
    this.d = null
  }
  function La(a$$37, b$$30) {
    var c$$20 = RegExp("\\b" + a$$37 + "=(\\d+)");
    var d$$14 = c$$20.exec(b$$30);
    d$$14 && (b$$30 = b$$30.replace(c$$20, a$$37 + "=" + (+d$$14[1] + 1 || 1)));
    return b$$30
  }
  function Q(a$$33) {
    this.b = a$$33;
    a$$33.google_iframe_oncopy || (a$$33.google_iframe_oncopy = {handlers:{}, upd:p(this.l, this)});
    this.i = a$$33.google_iframe_oncopy
  }
  function Ja(a$$32) {
    try {
      var b$$26 = Ia.test(a$$32.location.host);
      return!(!a$$32.postMessage || !a$$32.localStorage || !a$$32.JSON || b$$26)
    }catch(c$$18) {
      return!1
    }
  }
  function Ha(a$$30) {
    a$$30.google_page_url && (a$$30.google_page_url = String(a$$30.google_page_url));
    var b$$25 = [];
    G(a$$30, function(a$$31, d$$12) {
      if(null != a$$31) {
        var e$$12;
        try {
          var f$$4 = [];
          O(new Ea, a$$31, f$$4);
          e$$12 = f$$4.join("")
        }catch(g$$3) {
        }
        e$$12 && ua(b$$25, d$$12, "=", e$$12, ";")
      }
    });
    return b$$25.join("")
  }
  function Fa(a$$28, b$$23) {
    b$$23.push('"');
    b$$23.push(a$$28.replace(Ga, function(a$$29) {
      if(a$$29 in P) {
        return P[a$$29]
      }
      var b$$24 = a$$29.charCodeAt(0);
      var e$$11 = "\\u";
      16 > b$$24 ? e$$11 += "000" : 256 > b$$24 ? e$$11 += "00" : 4096 > b$$24 && (e$$11 += "0");
      return P[a$$29] = e$$11 + b$$24.toString(16)
    }));
    b$$23.push('"')
  }
  function O(a$$27, b$$22, c$$17) {
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
        if(null == b$$22) {
          c$$17.push("null");
          break
        }
        if(b$$22 instanceof Array) {
          var d$$11 = b$$22.length;
          c$$17.push("[");
          var e$$10 = "";
          var f$$3 = 0;
          for(;f$$3 < d$$11;f$$3++) {
            c$$17.push(e$$10), O(a$$27, b$$22[f$$3], c$$17), e$$10 = ","
          }
          c$$17.push("]");
          break
        }
        c$$17.push("{");
        d$$11 = "";
        for(e$$10 in b$$22) {
          b$$22.hasOwnProperty(e$$10) && (f$$3 = b$$22[e$$10], "function" != typeof f$$3 && (c$$17.push(d$$11), Fa(e$$10, c$$17), c$$17.push(":"), O(a$$27, f$$3, c$$17), d$$11 = ","))
        }
        c$$17.push("}");
        break;
      case "function":
        break;
      default:
        throw Error("Unknown type: " + typeof b$$22);
    }
  }
  function Ea() {
  }
  function Da() {
    if(!N) {
      var a$$26 = window;
      var b$$21 = a$$26;
      var c$$16 = 0;
      for(;a$$26 != a$$26.parent;) {
        if(a$$26 = a$$26.parent, c$$16++, J(a$$26)) {
          b$$21 = a$$26
        }else {
          break
        }
      }
      N = b$$21
    }
    return N
  }
  function Ca(a$$24) {
    var b$$20 = "";
    G(a$$24, function(a$$25, d$$10) {
      if(0 === a$$25 || a$$25) {
        b$$20 += "&" + d$$10 + "=" + ("function" == typeof encodeURIComponent ? encodeURIComponent(a$$25) : escape(a$$25))
      }
    });
    return b$$20
  }
  function M(a$$23, b$$19) {
    return da(K, a$$23, L, b$$19, void 0)
  }
  function Ba(a$$21) {
    var b$$18 = a$$21 || {};
    G(za, function(a$$22, d$$9) {
      b$$18[d$$9] = D[a$$22]
    })
  }
  function Aa(a$$20) {
    if(0.01 > Math.random()) {
      a$$20 = "/pagead/gen_204?id=jserror" + Ca(a$$20);
      a$$20 = C(A("", "googlesyndication"), a$$20);
      a$$20 = a$$20.substring(0, 2E3);
      D.google_image_requests || (D.google_image_requests = []);
      var b$$17 = D.document.createElement("img");
      b$$17.src = a$$20;
      D.google_image_requests.push(b$$17)
    }
  }
  function L(a$$19, b$$16, c$$15, d$$8, e$$9) {
    a$$19 = {jscb:fa ? 1 : 0, jscd:ga ? 1 : 0, context:a$$19, msg:b$$16.substring(0, 512), eid:e$$9 && e$$9.substring(0, 40), file:c$$15, line:d$$8.toString(), url:pa.URL.substring(0, 512), ref:pa.referrer.substring(0, 512)};
    Ba(a$$19);
    Aa(a$$19);
    return!ha
  }
  function K(a$$18, b$$15, c$$14, d$$7) {
    try {
      c$$14()
    }catch(e$$8) {
      c$$14 = !ha;
      try {
        var f$$2 = e$$8.toString();
        e$$8.name && -1 == f$$2.indexOf(e$$8.name) && (f$$2 += ": " + e$$8.name);
        e$$8.message && -1 == f$$2.indexOf(e$$8.message) && (f$$2 += ": " + e$$8.message);
        if(e$$8.stack) {
          var g$$2 = e$$8.stack;
          var l$$1 = f$$2;
          try {
            -1 == g$$2.indexOf(l$$1) && (g$$2 = l$$1 + "\n" + g$$2);
            var h$$5;
            for(;g$$2 != h$$5;) {
              h$$5 = g$$2, g$$2 = g$$2.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1")
            }
            f$$2 = g$$2.replace(/\n */g, "\n")
          }catch(k) {
            f$$2 = l$$1
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
            break t
          }catch(q) {
          }
          m = ""
        }
        c$$14 = b$$15(a$$18, f$$2, g$$2, h$$5, m)
      }catch(x$$48) {
        Aa({context:"protectAndRun", msg:x$$48.toString() + "\n" + (x$$48.stack || "")})
      }
      if(!c$$14) {
        throw e$$8;
      }
    }
  }
  function J(a$$17) {
    try {
      return!!a$$17.location.href || "" === a$$17.location.href
    }catch(b$$14) {
      return!1
    }
  }
  function ya(a$$16, b$$13, c$$13) {
    b$$13 = [b$$13.google_ad_slot, b$$13.google_ad_format, b$$13.google_ad_type, b$$13.google_ad_width, b$$13.google_ad_height];
    if(c$$13) {
      c$$13 = [];
      var d$$6 = 0;
      for(;a$$16 && 25 > d$$6;a$$16 = a$$16.parentNode, ++d$$6) {
        c$$13.push(9 != a$$16.nodeType && a$$16.id || "")
      }
      (a$$16 = c$$13.join()) && b$$13.push(a$$16)
    }else {
      b$$13.push(wa(a$$16)), b$$13.push(xa())
    }
    b$$13 = b$$13.join(":");
    a$$16 = b$$13.length;
    if(0 == a$$16) {
      b$$13 = 0
    }else {
      c$$13 = 305419896;
      d$$6 = 0;
      for(;d$$6 < a$$16;d$$6++) {
        c$$13 ^= (c$$13 << 5) + (c$$13 >> 2) + b$$13.charCodeAt(d$$6) & 4294967295
      }
      b$$13 = 0 < c$$13 ? c$$13 : 4294967296 + c$$13
    }
    return b$$13.toString()
  }
  function xa() {
    var a$$15 = D;
    var b$$12 = [];
    if(a$$15) {
      try {
        var c$$12 = a$$15.parent;
        var d$$5 = 0;
        for(;c$$12 && c$$12 != a$$15 && 25 > d$$5;++d$$5) {
          var e$$7 = c$$12.frames;
          var f$$1 = 0;
          for(;f$$1 < e$$7.length;++f$$1) {
            if(a$$15 == e$$7[f$$1]) {
              b$$12.push(f$$1);
              break
            }
          }
          a$$15 = c$$12;
          c$$12 = a$$15.parent
        }
      }catch(g$$1) {
      }
    }
    return b$$12.join()
  }
  function wa(a$$14) {
    var b$$11 = [];
    var c$$11 = 0;
    for(;a$$14 && 25 > c$$11;++c$$11) {
      var d$$4 = 9 != a$$14.nodeType && a$$14.id;
      d$$4 = d$$4 ? "/" + d$$4 : "";
      var e$$6;
      t: {
        var f = a$$14.parentElement;
        e$$6 = a$$14.nodeName.toLowerCase();
        if(f) {
          f = f.childNodes;
          var g = 0;
          var l = 0;
          for(;l < f.length;++l) {
            var h$$4 = f[l];
            if(h$$4.nodeName && h$$4.nodeName.toLowerCase() == e$$6) {
              if(a$$14 == h$$4) {
                e$$6 = "." + g;
                break t
              }
              ++g
            }
          }
        }
        e$$6 = ""
      }
      b$$11.push((a$$14.nodeName && a$$14.nodeName.toLowerCase()) + d$$4 + e$$6);
      a$$14 = a$$14.parentElement
    }
    return b$$11.join()
  }
  function va(a$$13) {
    a$$13.google_unique_id ? ++a$$13.google_unique_id : a$$13.google_unique_id = 1
  }
  function I(a$$12, b$$10) {
    if(!(1E-4 > Math.random())) {
      var c$$10 = Math.random();
      if(c$$10 < b$$10) {
        try {
          var d$$3 = new Uint16Array(1);
          window.crypto.getRandomValues(d$$3);
          c$$10 = d$$3[0] / 65536
        }catch(e$$5) {
          c$$10 = Math.random()
        }
        return a$$12[Math.floor(c$$10 * a$$12.length)]
      }
    }
    return null
  }
  function ua(a$$11, b$$9) {
    if(!(2 > arguments.length)) {
      var c$$9 = 1;
      var d$$2 = arguments.length;
      for(;c$$9 < d$$2;++c$$9) {
        a$$11.push(arguments[c$$9])
      }
    }
  }
  function H(a$$10) {
    return!!a$$10 && "function" == typeof a$$10 && !!a$$10.call
  }
  function G(a$$9, b$$8) {
    var c$$8;
    for(c$$8 in a$$9) {
      Object.prototype.hasOwnProperty.call(a$$9, c$$8) && b$$8.call(null, a$$9[c$$8], c$$8, a$$9)
    }
  }
  function C(a$$8, b$$7, c$$7) {
    c$$7 || (c$$7 = ia ? "https" : "http");
    return[c$$7, "://", a$$8, b$$7].join("")
  }
  function A(a$$7, b$$6) {
    if(!a$$7) {
      return b$$6
    }
    var c$$6 = a$$7.match(ea);
    return c$$6 ? c$$6[0] : b$$6
  }
  function z$$2(a$$6) {
    return/^true$/.test(a$$6) ? !0 : !1
  }
  function w$$5(a$$5) {
    a$$5 = parseFloat(a$$5);
    return isNaN(a$$5) || 1 < a$$5 || 0 > a$$5 ? 0 : a$$5
  }
  function da(a$$4, b$$4) {
    var c$$5 = Array.prototype.slice.call(arguments, 1);
    return function() {
      var b$$5 = c$$5.slice();
      b$$5.push.apply(b$$5, arguments);
      return a$$4.apply(this, b$$5)
    }
  }
  function p(a$$3, b$$3, c$$4) {
    p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ba : ca;
    return p.apply(null, arguments)
  }
  function ca(a$$2, b$$2, c$$2) {
    if(!a$$2) {
      throw Error();
    }
    if(2 < arguments.length) {
      var d$$1 = Array.prototype.slice.call(arguments, 2);
      return function() {
        var c$$3 = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c$$3, d$$1);
        return a$$2.apply(b$$2, c$$3)
      }
    }
    return function() {
      return a$$2.apply(b$$2, arguments)
    }
  }
  function ba(a$$1, b$$1, c$$1) {
    return a$$1.call.apply(a$$1.bind, arguments)
  }
  function aa(a, b) {
    var c = a.split(".");
    var d = n$$1;
    c[0] in d || !d.execScript || d.execScript("var " + c[0]);
    var e$$4;
    for(;c.length && (e$$4 = c.shift());) {
      c.length || void 0 === b ? d = d[e$$4] ? d[e$$4] : d[e$$4] = {} : d[e$$4] = b
    }
  }
  var n$$1 = this;
  var v = (new Date).getTime();
  var ea = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/;
  var fa = z$$2("false");
  var ga = z$$2("false");
  var ha = z$$2("false");
  var ia = z$$2("false");
  var ja = w$$5("0.15");
  var ka = w$$5("0");
  var la = w$$5("");
  var ma = w$$5("0.001");
  var na = w$$5("0.2");
  var pa = document;
  var D = window;
  var qa = /&/g;
  var ra = /</g;
  var sa = />/g;
  var ta = /\"/g;
  var E = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
  var F = {"'":"\\'"};
  A("", "googlesyndication");
  var za = {client:"google_ad_client", format:"google_ad_format", slotname:"google_ad_slot", output:"google_ad_output", ad_type:"google_ad_type", async_oa:"google_async_for_oa_experiment", zrtm:"google_ad_handling_mode", dimpr:"google_always_use_delayed_impressions_experiment", peri:"google_top_experiment"};
  aa("google_protectAndRun", K);
  aa("google_handleError", L);
  var N = null;
  var P = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
  var Ga = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
  var Ia = /\.((google(|groups|mail|images|print))|gmail)\./;
  var Ka;
  var R = "var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
  /[&<>\"]/.test(R) && (-1 != R.indexOf("&") && (R = R.replace(qa, "&amp;")), -1 != R.indexOf("<") && (R = R.replace(ra, "&lt;")), -1 != R.indexOf(">") && (R = R.replace(sa, "&gt;")), -1 != R.indexOf('"') && (R = R.replace(ta, "&quot;")));
  Ka = R;
  Q.prototype.set = function(a$$34, b$$27) {
    this.i.handlers[a$$34] = b$$27;
    this.b.addEventListener && this.b.addEventListener("load", p(this.j, this, a$$34), !1)
  };
  Q.prototype.j = function(a$$35) {
    a$$35 = this.b.document.getElementById(a$$35);
    var b$$28 = a$$35.contentWindow.document;
    if(a$$35.onload && b$$28 && (!b$$28.body || !b$$28.body.firstChild)) {
      a$$35.onload()
    }
  };
  Q.prototype.l = function(a$$36, b$$29) {
    var c$$19 = La("rs", a$$36);
    var d$$13;
    t: {
      if(a$$36 && (d$$13 = a$$36.match("dt=([^&]+)")) && 2 == d$$13.length) {
        d$$13 = d$$13[1];
        break t
      }
      d$$13 = ""
    }
    d$$13 = (new Date).getTime() - d$$13;
    c$$19 = c$$19.replace(/&dtd=(\d+|M)/, "&dtd=" + (1E4 > d$$13 ? d$$13 + "" : "M"));
    this.set(b$$29, c$$19);
    return c$$19
  };
  var S;
  var T;
  var U;
  var Ma;
  Ma = U = T = S = !1;
  var V;
  if(V = n$$1.navigator ? n$$1.navigator.userAgent : null) {
    var Oa = n$$1.navigator;
    S = 0 == V.lastIndexOf("Opera", 0);
    T = !S && (-1 != V.indexOf("MSIE") || -1 != V.indexOf("Trident"));
    U = !S && -1 != V.indexOf("WebKit");
    Ma = !S && !U && !T && "Gecko" == Oa.product
  }
  var Pa = T;
  var Qa = Ma;
  var Ra = U;
  var W;
  if(S && n$$1.opera) {
    var Sa = n$$1.opera.version;
    "function" == typeof Sa && Sa()
  }else {
    Qa ? W = /rv\:([^\);]+)(\)|;)/ : Pa ? W = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Ra && (W = /WebKit\/(\S+)/), W && W.exec(n$$1.navigator ? n$$1.navigator.userAgent : null)
  }
  var X;
  Y.prototype.n = function(a$$40, b$$32) {
    0 != this.a || 0 != this.c.length || b$$32 && b$$32 != window ? this.g(a$$40, b$$32) : (this.a = 2, this.f(new Ta(a$$40, window)))
  };
  Y.prototype.g = function(a$$41, b$$33) {
    this.c.push(new Ta(a$$41, b$$33 || this.b));
    Ua(this)
  };
  Y.prototype.o = function(a$$42) {
    this.a = 1;
    if(a$$42) {
      var b$$34 = M("sjr::timeout", p(this.e, this));
      this.d = this.b.setTimeout(b$$34, a$$42)
    }
  };
  Y.prototype.e = function() {
    1 == this.a && (null != this.d && (this.b.clearTimeout(this.d), this.d = null), this.a = 0);
    Ua(this)
  };
  Y.prototype.p = function() {
    return!(!window || !Array)
  };
  Y.prototype.nq = Y.prototype.n;
  Y.prototype.nqa = Y.prototype.g;
  Y.prototype.al = Y.prototype.o;
  Y.prototype.rl = Y.prototype.e;
  Y.prototype.sz = Y.prototype.p;
  Y.prototype.m = function() {
    if(0 == this.a && this.c.length) {
      var a$$44 = this.c.shift();
      this.a = 2;
      var b$$36 = M("sjr::run", p(this.f, this, a$$44));
      a$$44.h.setTimeout(b$$36, 0);
      Ua(this)
    }
  };
  Y.prototype.f = function(a$$45) {
    this.a = 0;
    a$$45.k()
  };
  var $a = {"120x90":!0, "160x90":!0, "180x90":!0, "200x90":!0, "468x15":!0, "728x15":!0};
  var gb = Math.floor(1E6 * Math.random());
  var ib = /([0-9.]+)px/;
  var Z = [{width:120, height:240, format:"vertical"}, {width:120, height:600, format:"vertical"}, {width:125, height:125, format:"rectangle"}, {width:160, height:600, format:"vertical"}, {width:180, height:150, format:"rectangle"}, {width:200, height:200, format:"rectangle"}, {width:234, height:60, format:"horizontal"}, {width:250, height:250, format:"rectangle"}, {width:300, height:250, format:"rectangle"}, {width:300, height:600, format:"vertical"}, {width:320, height:50, format:"horizontal"}, 
  {width:336, height:280, format:"rectangle"}, {width:468, height:60, format:"horizontal"}, {width:728, height:90, format:"horizontal"}, {width:970, height:90, format:"horizontal"}];
  var $ = ["google_analytics_uacct", "google_analytics_domain_name"];
  rb()
})();
(function() {
  function gi() {
    return H$$1().m(18) == K$$1.ASYNC_EXPANSION_EMBED.EXPERIMENT
  }
  function mi(a$$568) {
    var b$$441 = vf;
    return ki({dtd:Hb(b$$441)}, a$$568)
  }
  function Zi(a$$567) {
    var b$$440 = window.google_container_id;
    var c$$299 = b$$440 && document.getElementById(b$$440) || document.getElementById(a$$567);
    c$$299 || b$$440 || !a$$567 || (document.write("<span id=" + a$$567 + "></span>"), c$$299 = document.getElementById(a$$567));
    return c$$299
  }
  function Gi(a$$565) {
    var b$$438 = mc();
    var c$$298 = G$$1(b$$438, 8);
    var d$$183 = G$$1(b$$438, 9);
    var e$$108 = window.google_ad_section;
    if(ub(window)) {
      var JSCompiler_inline_result$$575;
      var c$$inline_735 = G$$1(b$$438, 5) + 1;
      JSCompiler_inline_result$$575 = b$$438.S[nc(5)] = c$$inline_735;
      if(3 < JSCompiler_inline_result$$575 && !a$$565) {
        return!1
      }
    }else {
      var f$$65;
      var c$$inline_739 = G$$1(b$$438, 6) + 1;
      f$$65 = b$$438.S[nc(6)] = c$$inline_739;
      if(window.google_num_slots_to_rotate) {
        var JSCompiler_inline_result$$19;
        ze |= 1;
        JSCompiler_inline_result$$19 = void 0;
        var JSCompiler_temp_const$$75 = (JSCompiler_inline_result$$19, c$$298[e$$108] = "", d$$183[e$$108] = "");
        var JSCompiler_temp$$76;
        if(JSCompiler_temp$$76 = G$$1(b$$438, 12)) {
        }else {
          var b$$inline_549 = (new Date).getTime() % window.google_num_slots_to_rotate + 1;
          JSCompiler_temp$$76 = b$$438.S[nc(12)] = b$$inline_549
        }
        if(JSCompiler_temp_const$$75, JSCompiler_temp$$76, G$$1(b$$438, 12) != f$$65) {
          return!1
        }
      }else {
        if(!a$$565 && 6 < f$$65 && "" == e$$108) {
          return!1
        }
      }
    }
    return!0
  }
  function xi(a$$561, b$$434) {
    var c$$295 = b$$434.src;
    var d$$180;
    var a$$inline_516 = c$$295;
    var b$$inline_517 = "/pagead/blank.gif#?";
    var c$$inline_518 = a$$561;
    var d$$inline_519 = a$$inline_516.indexOf(b$$inline_517);
    d$$180 = -1 == d$$inline_519 ? a$$inline_516 : c$$inline_518 + a$$inline_516.substr(d$$inline_519 + b$$inline_517.length);
    d$$180 !== c$$295 && (b$$434.src = d$$180)
  }
  function $i(a$$558) {
    x$$51(wh, function(b$$429, c$$290) {
      a$$558[b$$429] = window[c$$290]
    });
    x$$51(vh, function(b$$430, c$$291) {
      a$$558[b$$430] = window[c$$291]
    });
    x$$51(xh, function(b$$431, c$$292) {
      a$$558[b$$431] = window[c$$292]
    })
  }
  function Yi(a$$557, b$$428, c$$289, d$$178) {
    if(d$$178) {
      var e$$105 = 0;
      for(;e$$105 < d$$178.length;++e$$105) {
        var f$$63 = d$$178[e$$105];
        if(!f$$63()) {
          return
        }
      }
    }
    Xi && (Xi = (new Date).getTime() - Xi);
    c$$289 && c$$289.fb() && c$$289.Hc();
    JSCompiler_inline_label_Ki_501: {
      var a$$inline_498 = a$$557;
      var a$$inline_699 = window;
      var b$$inline_700;
      var a$$inline_776 = a$$inline_699;
      var b$$inline_777 = D$$1().document;
      var c$$inline_778 = {};
      var d$$inline_779;
      var a$$inline_951 = window;
      a$$inline_951 = dc(a$$inline_951, !1);
      d$$inline_779 = a$$inline_951.win;
      var e$$inline_780 = cf(d$$inline_779);
      var f$$inline_781 = Ze(D$$1(), b$$inline_777, a$$inline_776.google_ad_width, a$$inline_776.google_ad_height);
      var JSCompiler_temp_const$$935 = c$$inline_778;
      var JSCompiler_inline_result$$936;
      var a$$inline_953 = a$$inline_776;
      var b$$inline_954 = f$$inline_781;
      var c$$inline_955 = e$$inline_780.isTopUrl;
      var d$$inline_956 = T$$1.getIframingState(D$$1());
      var e$$inline_957 = 4;
      b$$inline_954 || d$$inline_956 != T$$1.SAME_DOMAIN_IFRAMING ? b$$inline_954 || d$$inline_956 != T$$1.CROSS_DOMAIN_IFRAMING ? b$$inline_954 && d$$inline_956 == T$$1.SAME_DOMAIN_IFRAMING ? e$$inline_957 = 7 : b$$inline_954 && d$$inline_956 == T$$1.CROSS_DOMAIN_IFRAMING && (e$$inline_957 = 8) : e$$inline_957 = 6 : e$$inline_957 = 5;
      a$$inline_953 = !!a$$inline_953.google_referrer_url && !Ye();
      e$$inline_957 += 5 * a$$inline_953;
      c$$inline_955 && (e$$inline_957 |= 16);
      JSCompiler_inline_result$$936 = "" + e$$inline_957;
      JSCompiler_temp_const$$935.iframing = JSCompiler_inline_result$$936;
      if(!a$$inline_776.google_page_url && "yieldmanager" == b$$inline_777.domain) {
        e$$inline_780 = b$$inline_777.URL.substring(b$$inline_777.URL.lastIndexOf("http"));
        for(;-1 < e$$inline_780.indexOf("%");) {
          try {
            e$$inline_780 = decodeURIComponent(e$$inline_780)
          }catch(g$$inline_782) {
            break
          }
        }
        a$$inline_776.google_page_url = e$$inline_780
      }
      var JSCompiler_inline_result$$950;
      var a$$inline_959 = a$$inline_776;
      var b$$inline_960 = af();
      JSCompiler_inline_result$$950 = !b$$inline_960 && !!a$$inline_959.google_page_url;
      if(JSCompiler_inline_result$$950) {
        var a$$inline_962 = c$$inline_778;
        var c$$inline_964 = b$$inline_777;
        var d$$inline_965 = f$$inline_781;
        a$$inline_962.page_url = a$$inline_776.google_page_url;
        a$$inline_962.page_location = bf(c$$inline_964, d$$inline_965) || "EMPTY"
      }else {
        var a$$inline_967 = c$$inline_778;
        a$$inline_967.page_url = bf(b$$inline_777, f$$inline_781);
        a$$inline_967.page_location = null
      }
      c$$inline_778.last_modified_time = b$$inline_777.URL == c$$inline_778.page_url ? Date.parse(b$$inline_777.lastModified) / 1E3 : null;
      if(Ye()) {
        var JSCompiler_temp_const$$937 = c$$inline_778;
        var JSCompiler_inline_result$$938;
        var a$$inline_971 = d$$inline_779;
        JSCompiler_inline_result$$938 = a$$inline_971 == a$$inline_971.top ? a$$inline_971.document.referrer : (a$$inline_971 = af(!0)) || "";
        JSCompiler_temp_const$$937.referrer_url = JSCompiler_inline_result$$938
      }else {
        var JSCompiler_temp_const$$932 = c$$inline_778;
        var JSCompiler_inline_result$$933;
        var a$$inline_973 = a$$inline_776;
        var b$$inline_974 = b$$inline_777;
        var c$$inline_975 = f$$inline_781;
        var d$$inline_976 = af();
        JSCompiler_inline_result$$933 = d$$inline_976 ? "" : c$$inline_975 ? a$$inline_973.google_referrer_url : a$$inline_973.google_page_url && a$$inline_973.google_referrer_url ? a$$inline_973.google_referrer_url : b$$inline_974.referrer;
        JSCompiler_temp_const$$932.referrer_url = JSCompiler_inline_result$$933
      }
      b$$inline_700 = c$$inline_778;
      $e(a$$inline_699, b$$inline_700);
      if(window.google_page_url) {
      }else {
        if(window.google_referrer_url) {
        }else {
          if(window.google_page_location) {
          }else {
            var a$$inline_702 = K$$1;
            J$$1().k([a$$inline_702.TOP_URL_REPLACES_MISSING_URL.CONTROL, a$$inline_702.TOP_URL_REPLACES_MISSING_URL.EXPERIMENT], wa$$1, 4)
          }
        }
      }
      if(!Gi(!1)) {
        c$$289 = !1;
        break JSCompiler_inline_label_Ki_501
      }
      var b$$inline_499 = Bc(window) ? ma$$1("", "googlesyndication") : Ja$$1();
      var a$$inline_704 = a$$inline_498;
      var b$$inline_705 = {};
      $i(b$$inline_705);
      var a$$inline_784 = b$$inline_705;
      a$$inline_784.dt = vf;
      B$$2 && window.google_bpp && (a$$inline_784.bpp = window.google_bpp);
      var b$$inline_785;
      JSCompiler_inline_label_823: {
        var a$$inline_786 = void 0;
        var b$$inline_787 = D$$1();
        var c$$inline_788 = b$$inline_787.performance;
        if(c$$inline_788 && c$$inline_788.timing && c$$inline_788.now) {
          var d$$inline_789 = c$$inline_788.timing.navigationStart + Math.round(c$$inline_788.now());
          d$$inline_789 = d$$inline_789 - c$$inline_788.timing.domLoading
        }
        if(!d$$inline_789) {
          b$$inline_785 = null;
          break JSCompiler_inline_label_823
        }
        a$$inline_786 = a$$inline_786 || vf;
        b$$inline_787 = b$$inline_787.Date.now() - a$$inline_786;
        b$$inline_787 = d$$inline_789 - b$$inline_787;
        b$$inline_785 = 0 > b$$inline_787 ? "-M" : 1E6 < b$$inline_787 ? "M" : b$$inline_787
      }
      b$$inline_785 && (a$$inline_784.bdt = b$$inline_785);
      a$$inline_784.shv = Da$$1();
      b$$inline_785 = !!window.google_test_1;
      var c$$inline_790 = !!window.google_test_2;
      b$$inline_785 && (a$$inline_784.tsi = c$$inline_790 ? "3" : "2");
      a$$inline_784.cbv = "/r20130906".replace("/", "");
      /^\w{1,3}$/.test(window.google_loader_used) && (a$$inline_784.saldr = window.google_loader_used);
      b$$inline_785 = mc();
      if(Zg(window)) {
      }else {
        var a$$inline_791 = b$$inline_785;
        var b$$inline_792 = a$$inline_784;
        var c$$inline_793 = G$$1(a$$inline_791, 8);
        var d$$inline_794 = window.google_ad_section;
        var e$$inline_795 = window.google_ad_format;
        var f$$inline_796 = window.google_ad_slot;
        c$$inline_793[d$$inline_794] && (b$$inline_792.prev_fmts = c$$inline_793[d$$inline_794]);
        var g$$inline_797 = G$$1(a$$inline_791, 9);
        g$$inline_797[d$$inline_794] && (b$$inline_792.prev_slotnames = g$$inline_797[d$$inline_794].toLowerCase());
        e$$inline_795 ? c$$inline_793[d$$inline_794] = c$$inline_793[d$$inline_794] ? c$$inline_793[d$$inline_794] + ("," + e$$inline_795) : e$$inline_795 : f$$inline_796 && (g$$inline_797[d$$inline_794] = g$$inline_797[d$$inline_794] ? g$$inline_797[d$$inline_794] + ("," + f$$inline_796) : f$$inline_796)
      }
      a$$inline_784.correlator = G$$1(b$$inline_785, 7);
      if(window.google_ad_channel) {
        c$$inline_790 = G$$1(b$$inline_785, 10);
        var d$$inline_798 = "";
        var e$$inline_799 = window.google_ad_channel.split(Ni);
        var f$$inline_800 = 0;
        for(;f$$inline_800 < e$$inline_799.length;f$$inline_800++) {
          var g$$inline_801 = e$$inline_799[f$$inline_800];
          c$$inline_790[g$$inline_801] ? d$$inline_798 += g$$inline_801 + "+" : c$$inline_790[g$$inline_801] = !0
        }
        a$$inline_784.pv_ch = d$$inline_798
      }
      if(window.google_ad_host_channel) {
        var JSCompiler_inline_result$$inline_802;
        var b$$inline_803 = G$$1(b$$inline_785, 11);
        var c$$inline_804 = window.google_ad_host_channel.split("|");
        var d$$inline_805 = -1;
        var e$$inline_806 = [];
        var f$$inline_807 = 0;
        for(;f$$inline_807 < c$$inline_804.length;f$$inline_807++) {
          var g$$inline_808 = c$$inline_804[f$$inline_807].split(Ni);
          b$$inline_803[f$$inline_807] || (b$$inline_803[f$$inline_807] = {});
          var h$$inline_809 = "";
          var k$$inline_810 = 0;
          for(;k$$inline_810 < g$$inline_808.length;k$$inline_810++) {
            var l$$inline_811 = g$$inline_808[k$$inline_810];
            "" != l$$inline_811 && (b$$inline_803[f$$inline_807][l$$inline_811] ? h$$inline_809 += "+" + l$$inline_811 : b$$inline_803[f$$inline_807][l$$inline_811] = !0)
          }
          h$$inline_809 = h$$inline_809.slice(1);
          e$$inline_806[f$$inline_807] = h$$inline_809;
          "" != h$$inline_809 && (d$$inline_805 = f$$inline_807)
        }
        c$$inline_804 = "";
        if(-1 < d$$inline_805) {
          f$$inline_807 = 0;
          for(;f$$inline_807 < d$$inline_805;f$$inline_807++) {
            c$$inline_804 += e$$inline_806[f$$inline_807] + "|"
          }
          c$$inline_804 += e$$inline_806[d$$inline_805]
        }
        JSCompiler_inline_result$$inline_802 = c$$inline_804;
        b$$inline_785 = JSCompiler_inline_result$$inline_802, a$$inline_784.pv_h_ch = b$$inline_785
      }
      Ea$$1 && (a$$inline_784.jscb = 1);
      Fa$$1 && (a$$inline_784.jscd = 1);
      a$$inline_784.frm = window.google_iframing;
      b$$inline_785 = D$$1().document;
      c$$inline_790 = "";
      try {
        c$$inline_790 = b$$inline_785.cookie
      }catch(h$$inline_822) {
      }
      var a$$inline_812 = b$$inline_785.domain;
      var b$$inline_813 = c$$inline_790;
      var c$$inline_814 = ob$$1();
      var d$$inline_815 = window.screen;
      var e$$inline_816 = b$$inline_785.referrer;
      var f$$inline_817 = Math.round((new Date).getTime() / 1E3);
      var g$$inline_818 = window.google_analytics_domain_name;
      a$$inline_812 = "undefined" == typeof g$$inline_818 ? Fh("auto", a$$inline_812) : Fh(g$$inline_818, a$$inline_812);
      var h$$inline_819 = -1 < b$$inline_813.indexOf("__utma=" + a$$inline_812 + ".");
      g$$inline_818 = -1 < b$$inline_813.indexOf("__utmb=" + a$$inline_812);
      var k$$inline_820 = mc("google_persistent_state");
      k$$inline_820 = G$$1(k$$inline_820, 14) || (k$$inline_820.S[nc(14)] = {});
      var l$$inline_821 = !1;
      if(h$$inline_819) {
        c$$inline_814 = b$$inline_813.split("__utma=" + a$$inline_812 + ".")[1].split(";")[0].split("."), g$$inline_818 ? k$$inline_820.sid = c$$inline_814[3] + "" : k$$inline_820.sid || (k$$inline_820.sid = f$$inline_817 + ""), k$$inline_820.vid = c$$inline_814[0] + "." + c$$inline_814[1], k$$inline_820.from_cookie = !0
      }else {
        var JSCompiler_temp_const$$942 = k$$inline_820.sid || (k$$inline_820.sid = f$$inline_817 + "");
        var JSCompiler_temp$$943;
        if(JSCompiler_temp$$943 = k$$inline_820.vid) {
        }else {
          var JSCompiler_temp_const$$945 = l$$inline_821 = !0;
          var JSCompiler_temp_const$$944 = k$$inline_820;
          var JSCompiler_inline_result$$946;
          var a$$inline_978 = b$$inline_813;
          var b$$inline_979 = c$$inline_814;
          var c$$inline_980 = d$$inline_815;
          var d$$inline_981 = e$$inline_816;
          var JSCompiler_temp_const$$inline_982 = Math.round(2147483647 * Math.random());
          var JSCompiler_inline_result$$inline_983;
          var a$$inline_984 = a$$inline_978;
          var b$$inline_985 = b$$inline_979;
          var c$$inline_986 = c$$inline_980;
          var d$$inline_987 = d$$inline_981;
          var e$$inline_988 = [Dh.appName, Dh.version, Dh.language ? Dh.language : Dh.browserLanguage, Dh.platform, Dh.userAgent, Dh.javaEnabled() ? 1 : 0].join("");
          c$$inline_986 ? e$$inline_988 += c$$inline_986.width + "x" + c$$inline_986.height + c$$inline_986.colorDepth : window.java && (c$$inline_986 = java.awt.Toolkit.getDefaultToolkit().getScreenSize(), e$$inline_988 += c$$inline_986.screen.width + "x" + c$$inline_986.screen.height);
          e$$inline_988 += a$$inline_984;
          e$$inline_988 += d$$inline_987 || "";
          a$$inline_984 = e$$inline_988.length;
          for(;0 < b$$inline_985;) {
            e$$inline_988 += b$$inline_985-- ^ a$$inline_984++
          }
          JSCompiler_inline_result$$inline_983 = Jh(e$$inline_988);
          JSCompiler_inline_result$$946 = JSCompiler_temp_const$$inline_982 ^ JSCompiler_inline_result$$inline_983 & 2147483647;
          JSCompiler_temp$$943 = (JSCompiler_temp_const$$945, JSCompiler_temp_const$$944.vid = JSCompiler_inline_result$$946 + "." + f$$inline_817)
        }
        JSCompiler_temp_const$$942, JSCompiler_temp$$943, k$$inline_820.from_cookie = !1
      }
      if(k$$inline_820.cid) {
      }else {
        var JSCompiler_inline_result$$948;
        JSCompiler_inline_label_Hh_996: {
          var a$$inline_990 = b$$inline_813;
          var b$$inline_991 = 999;
          var c$$inline_992 = window.google_analytics_domain_name;
          c$$inline_992 && (c$$inline_992 = 0 == c$$inline_992.indexOf(".") ? c$$inline_992.substr(1) : c$$inline_992, b$$inline_991 = ("" + c$$inline_992).split(".").length);
          var d$$inline_993;
          c$$inline_992 = 999;
          a$$inline_990 = a$$inline_990.split(";");
          var e$$inline_994 = 0;
          for(;e$$inline_994 < a$$inline_990.length;e$$inline_994++) {
            var f$$inline_995 = Kh.exec(a$$inline_990[e$$inline_994]) || Lh.exec(a$$inline_990[e$$inline_994]);
            if(f$$inline_995) {
              if(f$$inline_995[1] == b$$inline_991) {
                JSCompiler_inline_result$$948 = f$$inline_995[2];
                break JSCompiler_inline_label_Hh_996
              }
              f$$inline_995[1] < c$$inline_992 && (c$$inline_992 = f$$inline_995[1], d$$inline_993 = f$$inline_995[2])
            }
          }
          JSCompiler_inline_result$$948 = d$$inline_993
        }
        b$$inline_813 = JSCompiler_inline_result$$948, l$$inline_821 && b$$inline_813 && -1 != b$$inline_813.search(/^\d+\.\d+$/) ? k$$inline_820.vid = b$$inline_813 : b$$inline_813 != k$$inline_820.vid && (k$$inline_820.cid = b$$inline_813)
      }
      k$$inline_820.dh = a$$inline_812;
      k$$inline_820.hid || (k$$inline_820.hid = Math.round(2147483647 * Math.random()));
      b$$inline_785 = k$$inline_820;
      a$$inline_784.ga_vid = b$$inline_785.vid;
      a$$inline_784.ga_sid = b$$inline_785.sid;
      a$$inline_784.ga_hid = b$$inline_785.hid;
      a$$inline_784.ga_fc = b$$inline_785.from_cookie;
      a$$inline_784.ga_cid = b$$inline_785.cid;
      a$$inline_784.ga_wpids = window.google_analytics_uacct;
      var a$$inline_825 = b$$inline_705;
      a$$inline_825.u_tz = -(new Date).getTimezoneOffset();
      a$$inline_825.u_his = ob$$1();
      a$$inline_825.u_java = navigator.javaEnabled();
      window.screen && (a$$inline_825.u_h = window.screen.height, a$$inline_825.u_w = window.screen.width, a$$inline_825.u_ah = window.screen.availHeight, a$$inline_825.u_aw = window.screen.availWidth, a$$inline_825.u_cd = window.screen.colorDepth);
      navigator.plugins && (a$$inline_825.u_nplug = navigator.plugins.length);
      navigator.mimeTypes && (a$$inline_825.u_nmime = navigator.mimeTypes.length);
      if(a$$inline_704) {
        var JSCompiler_temp_const$$742;
        var a$$inline_827 = a$$inline_704;
        var b$$inline_828 = b$$inline_705;
        var JSCompiler_temp_const$$939 = b$$inline_828;
        var JSCompiler_inline_result$$940;
        var a$$inline_997 = a$$inline_827;
        var b$$inline_998 = cd(a$$inline_997);
        var c$$inline_999 = "";
        if(b$$inline_998.body.createTextRange) {
          b$$inline_998 = b$$inline_998.body.createTextRange();
          b$$inline_998.moveToElementText(a$$inline_997);
          try {
            c$$inline_999 = b$$inline_998.queryCommandValue("FontName")
          }catch(d$$inline_1006) {
            c$$inline_999 = ""
          }
        }
        c$$inline_999 || (c$$inline_999 = R$$1(a$$inline_997, "fontFamily"));
        a$$inline_997 = c$$inline_999.split(",");
        1 < a$$inline_997.length && (c$$inline_999 = a$$inline_997[0]);
        var JSCompiler_inline_result$$inline_1000;
        JSCompiler_inline_label_1007: {
          var a$$inline_1001 = c$$inline_999;
          var b$$inline_1002 = "\"'";
          var c$$inline_1003 = b$$inline_1002.length;
          var d$$inline_1004 = 0;
          for(;d$$inline_1004 < c$$inline_1003;d$$inline_1004++) {
            var e$$inline_1005 = 1 == c$$inline_1003 ? b$$inline_1002 : b$$inline_1002.charAt(d$$inline_1004);
            if(a$$inline_1001.charAt(0) == e$$inline_1005 && a$$inline_1001.charAt(a$$inline_1001.length - 1) == e$$inline_1005) {
              JSCompiler_inline_result$$inline_1000 = a$$inline_1001.substring(1, a$$inline_1001.length - 1);
              break JSCompiler_inline_label_1007
            }
          }
          JSCompiler_inline_result$$inline_1000 = a$$inline_1001
        }
        JSCompiler_inline_result$$940 = JSCompiler_inline_result$$inline_1000;
        JSCompiler_temp_const$$939.dff = JSCompiler_inline_result$$940.toLowerCase();
        b$$inline_828.dfs = Wd(a$$inline_827);
        JSCompiler_temp_const$$742 = void 0;
        var JSCompiler_inline_result$$743;
        var a$$inline_830 = a$$inline_704;
        var b$$inline_831 = b$$inline_705;
        if("html" == w$$6.google_ad_output) {
          var c$$inline_832 = D$$1();
          if(c$$inline_832.google_top_values) {
            var d$$inline_833;
            var a$$inline_1009 = c$$inline_832.google_top_values;
            var b$$inline_1010 = w$$6.google_ad_width;
            var c$$inline_1011 = w$$6.google_ad_height;
            var d$$inline_1012 = parseInt(a$$inline_1009[6], 10);
            var e$$inline_1013 = parseInt(a$$inline_1009[7], 10);
            var f$$inline_1014 = parseInt(a$$inline_1009[8], 10);
            a$$inline_1009 = parseInt(a$$inline_1009[9], 10);
            d$$inline_833 = 0 < d$$inline_1012 && 0 < e$$inline_1013 && 0 < f$$inline_1014 && 0 < a$$inline_1009 && (b$$inline_1010 = Math.abs(f$$inline_1014 - b$$inline_1010), c$$inline_1011 = Math.abs(a$$inline_1009 - c$$inline_1011), 10 >= b$$inline_1010 + c$$inline_1011) ? new M$$1(d$$inline_1012, e$$inline_1013) : new M$$1(-12245933, -12245933);
            b$$inline_831.adx = Math.round(d$$inline_833.x);
            b$$inline_831.ady = Math.round(d$$inline_833.y)
          }
          if(!b$$inline_831.adx || -12245933 == b$$inline_831.adx || !b$$inline_831.ady || -12245933 == b$$inline_831.ady) {
            try {
              var JSCompiler_inline_result$$934;
              var a$$inline_1016 = a$$inline_830;
              var b$$inline_1017 = window.top;
              var c$$inline_1018 = new M$$1(0, 0);
              var d$$inline_1019;
              var a$$inline_1020 = cd(a$$inline_1016);
              d$$inline_1019 = a$$inline_1020 ? a$$inline_1020.parentWindow || a$$inline_1020.defaultView : window;
              var e$$inline_1021 = a$$inline_1016;
              do {
                var JSCompiler_temp$$inline_1022;
                if(d$$inline_1019 == b$$inline_1017) {
                  JSCompiler_temp$$inline_1022 = Cd(e$$inline_1021)
                }else {
                  var a$$inline_1023 = e$$inline_1021;
                  var b$$inline_1024 = void 0;
                  if(a$$inline_1023.getBoundingClientRect) {
                    b$$inline_1024 = Ad(a$$inline_1023), b$$inline_1024 = new M$$1(b$$inline_1024.left, b$$inline_1024.top)
                  }else {
                    b$$inline_1024 = dd(a$$inline_1023).Ja();
                    var c$$inline_1025 = Cd(a$$inline_1023);
                    b$$inline_1024 = new M$$1(c$$inline_1025.x - b$$inline_1024.x, c$$inline_1025.y - b$$inline_1024.y)
                  }
                  var JSCompiler_temp$$inline_1026;
                  if(Oc && !Uc(12)) {
                    var JSCompiler_temp_const$$inline_1027 = b$$inline_1024;
                    var JSCompiler_inline_result$$inline_1028;
                    var a$$inline_1029 = a$$inline_1023;
                    var b$$inline_1030 = void 0;
                    N$$1 ? b$$inline_1030 = "-ms-transform" : Pc ? b$$inline_1030 = "-webkit-transform" : Nc ? b$$inline_1030 = "-o-transform" : Oc && (b$$inline_1030 = "-moz-transform");
                    var c$$inline_1031 = void 0;
                    b$$inline_1030 && (c$$inline_1031 = R$$1(a$$inline_1029, b$$inline_1030));
                    c$$inline_1031 || (c$$inline_1031 = R$$1(a$$inline_1029, "transform"));
                    JSCompiler_inline_result$$inline_1028 = c$$inline_1031 ? (a$$inline_1029 = c$$inline_1031.match(Xd)) ? new M$$1(parseFloat(a$$inline_1029[1]), parseFloat(a$$inline_1029[2])) : new M$$1(0, 0) : new M$$1(0, 0);
                    JSCompiler_temp$$inline_1026 = new M$$1(JSCompiler_temp_const$$inline_1027.x + JSCompiler_inline_result$$inline_1028.x, JSCompiler_temp_const$$inline_1027.y + JSCompiler_inline_result$$inline_1028.y)
                  }else {
                    JSCompiler_temp$$inline_1026 = b$$inline_1024
                  }
                  JSCompiler_temp$$inline_1022 = JSCompiler_temp$$inline_1026
                }
                var f$$inline_1032 = JSCompiler_temp$$inline_1022;
                c$$inline_1018.x += f$$inline_1032.x;
                c$$inline_1018.y += f$$inline_1032.y
              }while(d$$inline_1019 && d$$inline_1019 != b$$inline_1017 && (e$$inline_1021 = d$$inline_1019.frameElement) && (d$$inline_1019 = d$$inline_1019.parent));
              JSCompiler_inline_result$$934 = c$$inline_1018;
              d$$inline_833 = JSCompiler_inline_result$$934, b$$inline_831.adx = Math.round(d$$inline_833.x), b$$inline_831.ady = Math.round(d$$inline_833.y)
            }catch(e$$inline_834) {
              b$$inline_831.adx = -12245933, b$$inline_831.ady = -12245933
            }
          }
        }
        JSCompiler_inline_result$$743 = void 0
      }
      var a$$inline_836 = b$$inline_705;
      var b$$inline_837 = D$$1();
      var c$$inline_838 = !1;
      var d$$inline_839 = de(c$$inline_838, b$$inline_837.top);
      if(d$$inline_839) {
        var JSCompiler_temp$$inline_840;
        if(JSCompiler_temp$$inline_840 = -12245933 == d$$inline_839.width) {
          var JSCompiler_temp$$inline_841;
          if(JSCompiler_temp$$inline_841 = b$$inline_837.google_top_values) {
            var JSCompiler_inline_result$$inline_842;
            var a$$inline_843 = b$$inline_837.google_top_values;
            var b$$inline_844 = parseInt(a$$inline_843[10], 10);
            a$$inline_843 = parseInt(a$$inline_843[11], 10);
            JSCompiler_inline_result$$inline_842 = 0 < b$$inline_844 && 0 < a$$inline_843 ? new u$$2(b$$inline_844, a$$inline_843) : new u$$2(-12245933, -12245933);
            JSCompiler_temp$$inline_841 = d$$inline_839 = JSCompiler_inline_result$$inline_842
          }
          JSCompiler_temp$$inline_840 = JSCompiler_temp$$inline_841
        }
        JSCompiler_temp$$inline_840, a$$inline_836.biw = d$$inline_839.width, a$$inline_836.bih = d$$inline_839.height
      }
      b$$inline_837.top != b$$inline_837 && (b$$inline_837 = de(c$$inline_838, b$$inline_837)) && (a$$inline_836.isw = b$$inline_837.width, a$$inline_836.ish = b$$inline_837.height);
      var a$$inline_846 = b$$inline_705;
      var b$$inline_847;
      JSCompiler_inline_label_851: {
        var a$$inline_848 = D$$1();
        if(a$$inline_848 == a$$inline_848.top) {
          b$$inline_847 = 0;
          break JSCompiler_inline_label_851
        }
        var b$$inline_849 = [];
        b$$inline_849.push(a$$inline_848.document.URL);
        a$$inline_848.name && b$$inline_849.push(a$$inline_848.name);
        var c$$inline_850 = !0;
        a$$inline_848 = de(!c$$inline_850, a$$inline_848);
        b$$inline_849.push(a$$inline_848.width.toString());
        b$$inline_849.push(a$$inline_848.height.toString());
        b$$inline_847 = Ab(b$$inline_849.join(""))
      }
      0 != b$$inline_847 && (a$$inline_846.ifk = b$$inline_847.toString());
      var a$$inline_853 = b$$inline_705;
      var b$$inline_854 = J$$1();
      if(n$$2(window.google_eids) && 0 !== window.google_eids.length) {
        ze |= 64;
        var c$$inline_855 = 0;
        for(;c$$inline_855 < window.google_eids.length;c$$inline_855++) {
          p$$1(window.google_eids[c$$inline_855]) && b$$inline_854.bb(window.google_eids[c$$inline_855])
        }
      }
      a$$inline_853.eid = b$$inline_854.Ka();
      var a$$inline_857 = b$$inline_705;
      var b$$inline_858 = me();
      (b$$inline_858 = b$$inline_858.getOseId()) && (a$$inline_857.oid = b$$inline_858);
      var a$$inline_860 = b$$inline_705;
      var b$$inline_861 = D$$1();
      a$$inline_860.ref = window.google_referrer_url;
      a$$inline_860.loc = window.google_page_location;
      var c$$inline_862 = hc();
      c$$inline_862 = cf(c$$inline_862);
      var d$$inline_863 = K$$1;
      var e$$inline_864 = 4;
      var f$$inline_865 = J$$1();
      var g$$inline_866 = d$$inline_863.TOP_URL_REPLACES_MISSING_URL.EXPERIMENT;
      if(f$$inline_865.m(e$$inline_864) == g$$inline_866) {
        var b$$inline_867 = c$$inline_862.url;
        a$$inline_860.url || a$$inline_860.ref || a$$inline_860.loc || !b$$inline_867 || (a$$inline_860.url = b$$inline_867)
      }
      d$$inline_863 = d$$inline_863.ALWAYS_USE_DELAYED_IMPRESSIONS.EXPERIMENT;
      if(f$$inline_865.m(e$$inline_864) == d$$inline_863) {
        a$$inline_860.unviewed_position_start = "1"
      }
      e$$inline_864 = a$$inline_860.loc || a$$inline_860.url;
      f$$inline_865 = !Ye() && c$$inline_862.url == a$$inline_860.ref;
      f$$inline_865 || c$$inline_862.url == e$$inline_864 || (a$$inline_860.top = c$$inline_862.url);
      window.google_async_rrc && (a$$inline_860.rr = window.google_async_rrc);
      a$$inline_860.rs = 0;
      (c$$inline_862 = b$$inline_861.google_top_js_status) && (a$$inline_860.jp = c$$inline_862);
      Xi && (a$$inline_860.jpd = Xi);
      if(c$$inline_862 = Mh(b$$inline_861)) {
        e$$inline_864 = new Uh(c$$inline_862), e$$inline_864.yb() && (a$$inline_860.dss = e$$inline_864.Ob()), c$$inline_862.Oa() && (a$$inline_860.dsd = c$$inline_862.Oa())
      }
      if(ch(window, b$$inline_861)) {
        var a$$inline_868 = b$$inline_861;
        var c$$inline_869;
        JSCompiler_inline_label_891: {
          var a$$inline_870 = a$$inline_868;
          var b$$inline_871 = window.google_ad_client;
          var c$$inline_872 = a$$inline_870.location.hash;
          if(!c$$inline_872 || !c$$inline_872.indexOf) {
            c$$inline_869 = !1;
            break JSCompiler_inline_label_891
          }
          var d$$inline_873;
          -1 != c$$inline_872.indexOf("google_anchor_debug") && (d$$inline_873 = Yg(1));
          if(!d$$inline_873) {
            c$$inline_869 = !1;
            break JSCompiler_inline_label_891
          }
          d$$inline_873.ja(a$$inline_870, b$$inline_871);
          c$$inline_869 = !0
        }
        c$$inline_869 || new dh(a$$inline_868)
      }
      c$$inline_862 = rg(b$$inline_861);
      c$$inline_862.wasReactiveAdConfigHandlerRegistered && (a$$inline_860.fc = ah(window, b$$inline_861));
      if(ub(w$$6)) {
      }else {
        var JSCompiler_temp_const$$inline_874 = a$$inline_860;
        var JSCompiler_inline_result$$inline_875;
        var a$$inline_876 = "";
        if(document.documentMode) {
          var b$$inline_877 = document.createElement("IFRAME");
          b$$inline_877.frameBorder = 0;
          b$$inline_877.style.height = 0;
          b$$inline_877.style.width = 0;
          b$$inline_877.style.position = "absolute";
          if(document.body) {
            document.body.appendChild(b$$inline_877);
            try {
              var c$$inline_878 = b$$inline_877.contentWindow.document;
              c$$inline_878.open();
              c$$inline_878.write("<!DOCTYPE html>");
              c$$inline_878.close();
              a$$inline_876 += c$$inline_878.documentMode
            }catch(d$$inline_887) {
            }
            document.body.removeChild(b$$inline_877)
          }
        }
        JSCompiler_inline_result$$inline_875 = a$$inline_876;
        JSCompiler_temp_const$$inline_874.docm = JSCompiler_inline_result$$inline_875
      }
      c$$inline_862 = K$$1.SS;
      e$$inline_864 = J$$1().m(14);
      e$$inline_864 == c$$inline_862.COUNT_AD_FRAMES_ON_PAGE_EXPERIMENT && (a$$inline_860.frmn = T$$1.frameCountsWithDelayedPingback(b$$inline_861, a$$inline_860.adk, a$$inline_860.correlator, a$$inline_860.frm));
      if(e$$inline_864 == c$$inline_862.BROWSER_DIMENSIONS_EXPERIMENT) {
        var JSCompiler_inline_result$$inline_879;
        try {
          var b$$inline_880 = b$$inline_861.screenX;
          var c$$inline_881 = b$$inline_861.screenY
        }catch(d$$inline_888) {
        }
        try {
          var e$$inline_882 = b$$inline_861.outerWidth;
          var f$$inline_883 = b$$inline_861.outerHeight
        }catch(g$$inline_889) {
        }
        try {
          var h$$inline_884 = b$$inline_861.innerWidth;
          var k$$inline_885 = b$$inline_861.innerHeight
        }catch(l$$inline_890) {
        }
        JSCompiler_inline_result$$inline_879 = [b$$inline_861.screenLeft, b$$inline_861.screenTop, b$$inline_880, c$$inline_881, b$$inline_861.screen ? b$$inline_861.screen.availWidth : void 0, b$$inline_861.screen ? b$$inline_861.screen.availTop : void 0, e$$inline_882, f$$inline_883, h$$inline_884, k$$inline_885];
        b$$inline_861 = JSCompiler_inline_result$$inline_879, a$$inline_860.brdim = b$$inline_861.join(",")
      }
      var a$$inline_886 = 0;
      void 0 === w$$6.postMessage && (a$$inline_886 |= 1);
      b$$inline_861 = a$$inline_886;
      0 < b$$inline_861 && (a$$inline_860.osd = b$$inline_861);
      a$$inline_860.vis = Xe(document);
      b$$inline_705.fu = ze;
      a$$inline_498 = b$$inline_705;
      var c$$inline_500 = L$$1(b$$inline_499, "/pagead/ads?");
      var JSCompiler_inline_result$$576;
      var a$$inline_707 = J$$1().m(19);
      var b$$inline_708 = K$$1.PRERENDERING_DELAYED_IMPRESSION;
      JSCompiler_inline_result$$576 = a$$inline_707 == b$$inline_708.EXPERIMENT && "html" == window.google_ad_output;
      if(JSCompiler_inline_result$$576) {
        a$$inline_498.unviewed_position_start = "1"
      }
      a$$inline_498.unviewed_position_start || w$$6.google_ad_output && "html" !== w$$6.google_ad_output || 3 != Xe(v$$1) || !Ia$$1 || (zi = !0, yi = c$$inline_500, c$$inline_500 = L$$1(b$$inline_499, "/pagead/blank.gif#?"));
      window.google_ad_url = ki(a$$inline_498, c$$inline_500 + "");
      c$$289 = !0
    }
    a$$557 && a$$557.id == b$$428 && qd(a$$557);
    if(c$$289) {
      var JSCompiler_inline_result$$6;
      var a$$inline_502 = window;
      var c$$inline_504 = window.google_ad_url;
      B$$2 || wb(a$$inline_502);
      var e$$inline_506 = yb(a$$inline_502);
      c$$inline_504 = ki({ifi:e$$inline_506}, c$$inline_504);
      c$$inline_504 = 1991 < c$$inline_504.length ? c$$inline_504.substring(0, 1983) + "&trunc=1" : c$$inline_504;
      c$$inline_504 = c$$inline_504.replace(/%\w?$/, "");
      var f$$inline_507 = "script";
      var g$$inline_508 = Lb(e$$inline_506);
      H$$1();
      if("js" != a$$inline_502.google_ad_output && "json_html" != a$$inline_502.google_ad_output || !a$$inline_502.google_ad_request_done && !a$$inline_502.google_radlink_request_done) {
        if("html" == a$$inline_502.google_ad_output) {
          var a$$inline_712 = a$$inline_502;
          var c$$inline_714 = c$$inline_504;
          var d$$inline_715 = e$$inline_506;
          var e$$inline_716 = ci;
          var f$$inline_717 = void 0;
          var g$$inline_718 = e$$inline_716 ? c$$inline_714.replace(/&ea=[^&]*/, "") + "&ea=0" : c$$inline_714;
          var h$$inline_719 = Lb(d$$inline_715);
          var k$$inline_720 = {id:h$$inline_719, name:h$$inline_719};
          Ff(k$$inline_720, a$$inline_712.google_ad_width, a$$inline_712.google_ad_height, !1, mi(g$$inline_718));
          var l$$inline_721 = Cf(k$$inline_720);
          var z$$inline_722 = a$$inline_712.google_container_id || f$$inline_717 || null;
          f$$inline_717 = a$$inline_712.google_async_iframe_id;
          var C$$inline_723 = a$$inline_712.google_container_id;
          e$$inline_716 = e$$inline_716 && (zf() || gi());
          var I$$inline_724 = "";
          if(e$$inline_716) {
            if(gi()) {
              var JSCompiler_inline_result$$746;
              var a$$inline_893 = 10;
              var c$$inline_895 = void 0 || th;
              var d$$inline_896 = c$$inline_895.length;
              var e$$inline_897 = "";
              for(;0 < a$$inline_893--;) {
                e$$inline_897 += c$$inline_895.charAt(Math.floor(Math.random() * d$$inline_896))
              }
              JSCompiler_inline_result$$746 = e$$inline_897;
              I$$inline_724 = JSCompiler_inline_result$$746, c$$inline_714 = Zd(c$$inline_714, I$$inline_724, !!v$$1.URL && (0 < v$$1.URL.indexOf("?google_debug") || 0 < v$$1.URL.indexOf("&google_debug")))
            }
          }else {
            c$$inline_714 = g$$inline_718
          }
          if(Zg(a$$inline_712)) {
            var a$$inline_899 = a$$inline_712;
            var c$$inline_901 = c$$inline_714;
            var d$$inline_902 = k$$inline_720;
            var e$$inline_903 = f$$inline_717;
            var f$$inline_904 = D$$1();
            var JSCompiler_inline_result$$inline_905;
            JSCompiler_inline_label_915: {
              var a$$inline_906 = f$$inline_904;
              var b$$inline_907 = a$$inline_899;
              var c$$inline_908 = b$$inline_907.google_reactive_ad_format;
              if(!Ec(lg, c$$inline_908)) {
                JSCompiler_inline_result$$inline_905 = !1;
                break JSCompiler_inline_label_915
              }
              c$$inline_908 = Ug[c$$inline_908] || null;
              var JSCompiler_inline_result$$inline_909;
              JSCompiler_inline_label_916: {
                var a$$inline_910 = a$$inline_906;
                var b$$inline_911 = b$$inline_907;
                switch(c$$inline_908) {
                  case 1:
                    var JSCompiler_temp$$949;
                    if(JSCompiler_temp$$949 = Hg(a$$inline_910)) {
                      rg(a$$inline_910);
                      JSCompiler_temp$$949 = !0
                    }
                    JSCompiler_inline_result$$inline_909 = JSCompiler_temp$$949;
                    break JSCompiler_inline_label_916;
                  case 2:
                    var JSCompiler_temp$$1036;
                    if(JSCompiler_temp$$1036 = Rg(a$$inline_910, b$$inline_911)) {
                      var a$$inline_1037 = a$$inline_910;
                      a$$inline_1037 = rg(a$$inline_1037);
                      JSCompiler_temp$$1036 = !!a$$inline_1037.wasReactiveAdConfigReceived[2]
                    }
                    JSCompiler_inline_result$$inline_909 = JSCompiler_temp$$1036;
                    break JSCompiler_inline_label_916
                }
                JSCompiler_inline_result$$inline_909 = !1
              }
              if(!JSCompiler_inline_result$$inline_909) {
                JSCompiler_inline_result$$inline_905 = !1;
                break JSCompiler_inline_label_915
              }
              var d$$inline_912 = rg(a$$inline_906);
              var e$$inline_913 = d$$inline_912.wasReactiveAdCreated[c$$inline_908];
              d$$inline_912.wasReactiveAdCreated[c$$inline_908] = !0;
              JSCompiler_inline_result$$inline_905 = !e$$inline_913
            }
            if(JSCompiler_inline_result$$inline_905) {
              f$$inline_904 = Zg(a$$inline_899);
              var g$$inline_914 = {};
              g$$inline_914.fa = f$$inline_904;
              c$$inline_901 = ki(g$$inline_914, c$$inline_901);
              d$$inline_902.src = mi(c$$inline_901);
              c$$inline_901 = Bf(document, d$$inline_902);
              document.body.appendChild(c$$inline_901);
              qh(a$$inline_899, e$$inline_903, c$$inline_901, D$$1())
            }
          }else {
            if(hi(a$$inline_712)) {
              g$$inline_718 = ga$$1(qi, a$$inline_712, document, e$$inline_716, c$$inline_714, h$$inline_719, k$$inline_720, a$$inline_712.google_ad_width, a$$inline_712.google_ad_height, z$$inline_722, f$$inline_717, C$$inline_723), g$$inline_718 = Mb(g$$inline_718), ni(a$$inline_712, c$$inline_714, g$$inline_718)
            }else {
              if("S" == a$$inline_712.google_ad_handling_mode) {
                var a$$inline_918 = a$$inline_712;
                var b$$inline_919 = c$$inline_714;
                var c$$inline_920 = ce(b$$inline_919, "w");
                var d$$inline_921 = ce(b$$inline_919, "h");
                var e$$inline_922 = ce(b$$inline_919, "ifi");
                e$$inline_922 = Lb(e$$inline_922);
                e$$inline_922 = {id:e$$inline_922, name:e$$inline_922};
                var f$$inline_923 = "U-" + b$$inline_919;
                Ff(e$$inline_922, c$$inline_920, d$$inline_921, !1, Df(f$$inline_923));
                a$$inline_918.document.write(Cf(e$$inline_922))
              }else {
                oi(a$$inline_712, document, e$$inline_716, c$$inline_714, h$$inline_719, k$$inline_720, a$$inline_712.google_ad_width, a$$inline_712.google_ad_height, z$$inline_722, f$$inline_717, C$$inline_723)
              }
            }
          }
          e$$inline_716 && gi() && (zf() || setTimeout(xe("ac::write_ee", ei, xc), 0), w$$6.google_eas_queue.push(Yd(h$$inline_719, c$$inline_714, a$$inline_712.google_ad_width, a$$inline_712.google_ad_height, I$$inline_724, D$$1(), f$$inline_717 || void 0, "google_expandable_ad_slot" + d$$inline_715)));
          if(B$$2) {
            var a$$inline_925 = a$$inline_712.google_async_iframe_id;
            var c$$inline_927 = "javascript:" + ab$$1(["<!DOCTYPE html><html><body>", l$$inline_721, "</body></html>"].join(""));
            var d$$inline_928 = D$$1();
            (new Me(d$$inline_928)).set(a$$inline_925, c$$inline_927)
          }
          a$$inline_712 = document.getElementById(h$$inline_719);
          zi && a$$inline_712 && Ai(a$$inline_712, document)
        }
      }else {
        document.write("<" + f$$inline_507 + ' language="JavaScript1.1" src=' + ji(mi(c$$inline_504)) + "></" + f$$inline_507 + ">")
      }
      sc = ga$$1(wi, g$$inline_508, c$$inline_504, a$$inline_502.google_ad_output, a$$inline_502.google_ad_width, a$$inline_502.google_ad_height);
      JSCompiler_inline_result$$6 = c$$inline_504;
      var JSCompiler_temp_const$$9 = JSCompiler_inline_result$$6;
      var JSCompiler_inline_result$$10;
      Bh(window);
      JSCompiler_inline_result$$10 = void 0;
      var JSCompiler_temp_const$$33 = (JSCompiler_temp_const$$9, JSCompiler_inline_result$$10);
      var JSCompiler_temp$$34;
      if(JSCompiler_temp$$34 = (a$$557 = bg) && !a$$557.Ta()) {
      }else {
        sc && sc();
        JSCompiler_temp$$34 = void 0
      }
    }else {
      B$$2 && (uf(), Wb(window))
    }
  }
  function Vi() {
    var a$$556 = w$$6;
    "html" != a$$556.google_ad_output || ub(a$$556) || J$$1().k([K$$1.SEND_LOAD_TIME_PINGBACKS.EXPERIMENT], ra$$1, 16)
  }
  function Ai(a$$541, b$$413) {
    if(3 != Xe(b$$413)) {
      xi(yi, a$$541)
    }else {
      var c$$278 = function() {
        xi(yi, a$$541);
        A$$1(v$$1, "webkitvisibilitychange", c$$278)
      };
      y$$32(b$$413, "webkitvisibilitychange", c$$278)
    }
    zi = !1
  }
  function wi(a$$540, b$$412, c$$277, d$$169, e$$100) {
    a$$540 = document.getElementById(a$$540);
    var a$$inline_440 = b$$412;
    var b$$inline_441 = a$$540;
    var c$$inline_442 = c$$277;
    var d$$inline_443 = d$$169;
    var e$$inline_444 = e$$100;
    var f$$inline_445 = me();
    f$$inline_445.getOseId() && f$$inline_445.registerAdBlock(a$$inline_440, 1, String(c$$inline_442 || ""), b$$inline_441, d$$inline_443, e$$inline_444);
    B$$2 && (uf(), Wb(window))
  }
  function oi(a$$537, b$$409, c$$274, d$$166, e$$97, f$$56, g$$34, h$$26, k$$13, l$$15, z$$8) {
    if(!c$$274 || gi()) {
      var JSCompiler_temp_const$$68 = (f$$56.src = mi(d$$166), a$$537 = Cf(f$$56));
      var JSCompiler_temp$$69;
      if(z$$8) {
        var a$$inline_430 = z$$8;
        var c$$inline_432 = a$$537;
        a$$inline_430 && (a$$inline_430 = b$$409.getElementById(a$$inline_430)) && c$$inline_432 && "" != c$$inline_432.length && (a$$inline_430.style.visibility = "visible", a$$inline_430.innerHTML = c$$inline_432);
        JSCompiler_temp$$69 = void 0
      }else {
        JSCompiler_temp$$69 = b$$409.write(a$$537)
      }
    }else {
      b$$409 = yb(a$$537), a$$537["google_expandable_ad_slot" + b$$409] = ExpandableAdSlotFactory.createIframe(e$$97, mi(d$$166), g$$34, h$$26, k$$13 || void 0, D$$1(), l$$15 || void 0)
    }
  }
  function qi(a$$536, b$$408, c$$273, d$$165, e$$96, f$$55, g$$33, h$$25, k$$12, l$$14, z$$7, C$$4, I$$2, xb$$1) {
    var a$$inline_425 = d$$165;
    var b$$inline_426 = C$$4;
    var c$$inline_427 = I$$2;
    a$$inline_425 = be(a$$inline_425, "pfi", b$$inline_426, void 0, !0);
    c$$inline_427 && (b$$inline_426 = (b$$inline_426 = ce(a$$inline_425, "eid")) ? c$$inline_427 + "%2C" + b$$inline_426 : c$$inline_427, a$$inline_425 = be(a$$inline_425, "eid", b$$inline_426), 453848236 == c$$inline_427 && (a$$inline_425 = be(a$$inline_425, "unviewed_position_start", 1, void 0, !0)));
    d$$165 = a$$inline_425;
    if(453848234 == I$$2 || 453848236 == I$$2) {
      d$$165 = d$$165.replace(/&(adx|ady|oid|jp|top)=[^&]*/g, ""), d$$165 += "&ea=0", c$$273 = !1
    }
    oi(a$$536, b$$408, c$$273, d$$165, e$$96, f$$55, g$$33, h$$25, k$$12, l$$14, z$$7);
    if(xb$$1) {
      sc && sc()
    }
  }
  function ni(a$$535, b$$407, c$$272) {
    var d$$164 = bg;
    d$$164 || c$$272(-1, null, !1);
    d$$164.R();
    d$$164.ma ? c$$272(d$$164.v(), d$$164.za, !1) : (d$$164.zc(mi(b$$407), c$$272), d$$164.va || (b$$407 = Fe, b$$407.test(navigator.userAgent) ? (d$$164.Ec(), b$$407 = function() {
      d$$164.R();
      d$$164.Ta() || (d$$164.ya(), c$$272(d$$164.v(), null, !0))
    }, a$$535.setTimeout(b$$407, Wh)) : (d$$164.ya(), c$$272(d$$164.v(), null, !1))))
  }
  function hi(a$$534) {
    var b$$406 = a$$534.google_ad_handling_mode;
    return(B$$2 ? 1 == yb(a$$534) : !yb(a$$534)) && Le(b$$406)
  }
  function li() {
    var a$$533 = me();
    var b$$405 = mc();
    a$$533.setUpForcePeriscope && a$$533.setUpForcePeriscope();
    return a$$533.setupOse(G$$1(b$$405, 7))
  }
  function ki(a$$531, b$$403) {
    var c$$271 = b$$403.slice(-1);
    var d$$163 = "?" == c$$271 || "#" == c$$271 ? "" : "&";
    var e$$95 = [b$$403];
    c$$271 = function(a$$532, b$$404) {
      if(a$$532 || 0 === a$$532 || !1 === a$$532) {
        "boolean" == typeof a$$532 && (a$$532 = a$$532 ? 1 : 0), ib$$1(e$$95, d$$163, b$$404, "=", "function" == typeof encodeURIComponent ? encodeURIComponent(a$$532) : escape(a$$532)), d$$163 = "&"
      }
    };
    x$$51(a$$531, c$$271);
    return e$$95.join("")
  }
  function di() {
    return L$$1(Vh, "/pagead/expansion_embed.js")
  }
  function bi() {
    if(!/_sdo/.test(window.google_ad_format)) {
      if(!wc()) {
        var a$$inline_409 = H$$1();
        if(w$$6.google_top_experiment) {
          var a$$inline_646 = Of;
          var b$$inline_647 = K$$1.PERISCOPE_FOR_TARGETING;
          if(window.google_top_experiment) {
            var c$$inline_648;
            switch(window.google_top_experiment) {
              case a$$inline_646.CONTROL:
                c$$inline_648 = b$$inline_647.CONTROL;
                break;
              case a$$inline_646.EXPERIMENT_ZERO_LATENCY:
                c$$inline_648 = b$$inline_647.EXPERIMENT_ZERO_LATENCY;
                break;
              case a$$inline_646.EXPERIMENT_WAIT_FOR_POST_MESSAGE_RESPONSE:
                c$$inline_648 = b$$inline_647.EXPERIMENT_WAIT_FOR_POST_MESSAGE_RESPONSE
            }
            c$$inline_648 && H$$1().k([c$$inline_648], 1, 10)
          }
        }
        var a$$inline_650 = D$$1();
        var b$$inline_651 = K$$1.DEVICE_SENSORS;
        if(a$$inline_650.google_sensors) {
          a$$inline_650 = a$$inline_650.google_sensors.sensorsExperiment;
          var c$$inline_652;
          switch(a$$inline_650) {
            case "ds_c":
              c$$inline_652 = b$$inline_651.CONTROL;
              break;
            case "ds_zl":
              c$$inline_652 = b$$inline_651.EXPERIMENT_ZERO_LATENCY;
              break;
            case "ds_wfea":
              c$$inline_652 = b$$inline_651.EXPERIMENT_WAIT_FOR_EVENT_ARRIVAL
          }
          c$$inline_652 && H$$1().k([c$$inline_652], 1, 10)
        }
        var b$$inline_410 = [K$$1.EXPANDABLE_MOBILE_REVERSE.CONTROL, K$$1.EXPANDABLE_MOBILE_REVERSE.EXPERIMENT];
        a$$inline_409.k(b$$inline_410, na$$1, 13);
        var b$$inline_655 = Ge;
        var c$$inline_656 = K$$1.PREFETCH_AD_HANDLING;
        var d$$inline_657;
        switch(w$$6.google_ad_handling_mode) {
          case b$$inline_655.CONTROL_NO_FRAME:
            d$$inline_657 = c$$inline_656.CONTROL_NO_FRAME;
            break;
          case b$$inline_655.ALWAYS_ZRT:
            d$$inline_657 = c$$inline_656.ALWAYS_ZRT;
            break;
          case b$$inline_655.SERIAL:
            d$$inline_657 = c$$inline_656.SERIAL
        }
        d$$inline_657 && H$$1().k([d$$inline_657], 1, 4);
        var c$$inline_411 = K$$1.SS;
        b$$inline_410 = [c$$inline_411.COUNT_AD_FRAMES_ON_PAGE_CONTROL, c$$inline_411.COUNT_AD_FRAMES_ON_PAGE_EXPERIMENT];
        a$$inline_409.k(b$$inline_410, va$$1, 14);
        b$$inline_410 = [c$$inline_411.BROWSER_DIMENSIONS_CONTROL, c$$inline_411.BROWSER_DIMENSIONS_EXPERIMENT];
        a$$inline_409.k(b$$inline_410, Ca$$1, 14);
        b$$inline_410 = K$$1.PERISCOPE_FOR_TARGETING;
        b$$inline_410 = [b$$inline_410.CONTROL_REFERER_CLEANUP, b$$inline_410.EXPERIMENT_REFERER_CLEANUP];
        a$$inline_409.k(b$$inline_410, qa$$1, 10);
        if(window.google_ad_unit_key_2) {
          var a$$inline_659;
          "ctrl" == window.google_ad_unit_key_2 ? a$$inline_659 = K$$1.ADD_ADK2.CONTROL : /[0-9]+/.test(window.google_ad_unit_key_2) && (a$$inline_659 = K$$1.ADD_ADK2.EXPERIMENT);
          a$$inline_659 && H$$1().k([a$$inline_659], 1, 4)
        }
        b$$inline_410 = [K$$1.ASYNC_EXPANSION_EMBED.EXPERIMENT, K$$1.ASYNC_EXPANSION_EMBED.CONTROL];
        a$$inline_409.k(b$$inline_410, ya$$1, 18);
        var a$$inline_661 = void 0;
        var b$$inline_662 = Pb;
        var c$$inline_663 = K$$1.ASYNC_FOR_OPERA_ANDROID;
        a$$inline_661 = a$$inline_661 || navigator.userAgent;
        if(window.google_async_for_oa_experiment) {
          var d$$inline_664;
          a$$inline_661 = /Chrome/.test(a$$inline_661);
          window.google_async_for_oa_experiment == b$$inline_662.CONTROL ? d$$inline_664 = a$$inline_661 ? c$$inline_663.CONTROL_ANDROID_CHROME : c$$inline_663.CONTROL_ANDROID : window.google_async_for_oa_experiment == b$$inline_662.EXPERIMENT && (d$$inline_664 = a$$inline_661 ? c$$inline_663.EXPERIMENT_ANDROID_CHROME : c$$inline_663.EXPERIMENT_ANDROID);
          d$$inline_664 && H$$1().k([d$$inline_664], 1, 4)
        }
        b$$inline_410 = [K$$1.JS_RNG.CONTROL, K$$1.JS_RNG.EXPERIMENT];
        a$$inline_409.k(b$$inline_410, za$$1, 17);
        var a$$inline_666 = v$$1;
        a$$inline_666 = Xe(a$$inline_666);
        if(3 == a$$inline_666) {
          a$$inline_666 = K$$1.PRERENDERING_DELAYED_IMPRESSION;
          var b$$inline_667 = H$$1();
          b$$inline_667.k([a$$inline_666.CONTROL, a$$inline_666.EXPERIMENT], ua$$1, 19)
        }
      }
      JSCompiler_inline_label_Vf_672: {
        var a$$inline_669 = Uf;
        var b$$inline_670 = K$$1.APPEND_AS_FOR_FORMAT_OVERRIDE;
        var c$$inline_671 = window.google_append_as_for_format_override;
        if(c$$inline_671) {
          a$$inline_669 = c$$inline_671 == a$$inline_669.EXPERIMENT ? b$$inline_670.EXPERIMENT : b$$inline_670.CONTROL, J$$1().k([a$$inline_669], 1, 15);
          break JSCompiler_inline_label_Vf_672
        }
      }
      JSCompiler_inline_label_Tf_677: {
        var a$$inline_673 = Sf;
        var b$$inline_674 = K$$1.ALWAYS_USE_DELAYED_IMPRESSIONS;
        var c$$inline_675 = window.google_always_use_delayed_impressions_experiment;
        var d$$inline_676 = window.google_ad_output;
        if(c$$inline_675 && (!d$$inline_676 || "html" == d$$inline_676)) {
          a$$inline_673 = c$$inline_675 == a$$inline_673.EXPERIMENT ? b$$inline_674.EXPERIMENT : b$$inline_674.CONTROL, J$$1().k([a$$inline_673], 1, 4);
          break JSCompiler_inline_label_Tf_677
        }
      }
      var a$$inline_414 = window;
      var b$$inline_415;
      var a$$inline_678 = document.URL;
      var b$$inline_679 = {};
      a$$inline_678 = a$$inline_678.split("?");
      a$$inline_678 = a$$inline_678[a$$inline_678.length - 1].split("&");
      var c$$inline_680 = 0;
      for(;c$$inline_680 < a$$inline_678.length;c$$inline_680++) {
        var d$$inline_681 = a$$inline_678[c$$inline_680].split("=");
        if(d$$inline_681[0]) {
          try {
            b$$inline_679[d$$inline_681[0].toLowerCase()] = 1 < d$$inline_681.length ? window.decodeURIComponent ? decodeURIComponent(d$$inline_681[1].replace(/\+/g, " ")) : unescape(d$$inline_681[1]) : ""
          }catch(e$$inline_682) {
          }
        }
      }
      b$$inline_415 = b$$inline_679;
      b$$inline_415.google_ad_override && (a$$inline_414.google_ad_override = b$$inline_415.google_ad_override, a$$inline_414.google_adtest = "on");
      var a$$529 = window.google_start_time;
      q$$3(a$$529) && (vf = a$$529, window.google_start_time = null);
      te("show_ads::init_globals", ve, $h);
      var a$$inline_417 = window;
      var d$$inline_420 = "script";
      var a$$inline_684 = a$$inline_417;
      var b$$inline_685 = a$$inline_684.google_ad_width;
      var c$$inline_686 = a$$inline_684.google_ad_height;
      var d$$inline_687 = D$$1();
      var JSCompiler_inline_result$$752;
      JSCompiler_inline_label_yf_775: {
        var a$$inline_758 = a$$inline_684;
        var b$$inline_759 = d$$inline_687.document;
        try {
          var JSCompiler_temp$$inline_760;
          if(JSCompiler_temp$$inline_760 = !1 === a$$inline_758.google_allow_expandable_ads) {
          }else {
            var JSCompiler_temp$$inline_761;
            if(JSCompiler_temp$$inline_761 = !b$$inline_759.body) {
            }else {
              var JSCompiler_temp$$inline_762;
              if(JSCompiler_temp$$inline_762 = a$$inline_758.google_ad_output && "html" != a$$inline_758.google_ad_output) {
              }else {
                var JSCompiler_temp$$inline_763;
                if(JSCompiler_temp$$inline_763 = isNaN(a$$inline_758.google_ad_height)) {
                }else {
                  var JSCompiler_temp$$inline_764;
                  if(JSCompiler_temp$$inline_764 = isNaN(a$$inline_758.google_ad_width)) {
                  }else {
                    var JSCompiler_temp$$inline_765;
                    if(JSCompiler_temp$$inline_765 = b$$inline_759.domain != a$$inline_758.location.hostname) {
                    }else {
                      var JSCompiler_temp$$inline_766;
                      if(JSCompiler_temp$$inline_766 = !/^http/.test(b$$inline_759.location.protocol)) {
                      }else {
                        var JSCompiler_inline_result$$inline_767;
                        JSCompiler_inline_label_774: {
                          var b$$inline_768 = b$$inline_759;
                          var c$$inline_769 = J$$1().m(13) == K$$1.EXPANDABLE_MOBILE_REVERSE.EXPERIMENT ? /Win|Mac|Linux/ : /Win|Mac|Linux|iPad|iPod|iPhone/;
                          var d$$inline_770 = navigator.userAgent;
                          var e$$inline_771 = navigator.platform;
                          c$$inline_769 = c$$inline_769 || /Win|Mac|Linux|iPad|iPod|iPhone/;
                          if(c$$inline_769.test(e$$inline_771) && !/^Opera/.test(d$$inline_770)) {
                            c$$inline_769 = (/WebKit\/(\d+)/.exec(d$$inline_770) || [0, 0])[1];
                            var f$$inline_772 = (/rv\:(\d+\.\d+)/.exec(d$$inline_770) || [0, 0])[1];
                            if(/Win/.test(e$$inline_771) && /MSIE.*Trident/.test(d$$inline_770) && 8 < b$$inline_768.documentMode || !c$$inline_769 && "Gecko" == navigator.product && 1.7 < f$$inline_772 && !/rv\:1\.8([^.]|\.0)/.test(d$$inline_770) || 524 < c$$inline_769) {
                              JSCompiler_inline_result$$inline_767 = !0;
                              break JSCompiler_inline_label_774
                            }
                          }
                          JSCompiler_inline_result$$inline_767 = !1
                        }
                        JSCompiler_temp$$inline_766 = !JSCompiler_inline_result$$inline_767
                      }
                      JSCompiler_temp$$inline_765 = JSCompiler_temp$$inline_766
                    }
                    JSCompiler_temp$$inline_764 = JSCompiler_temp$$inline_765
                  }
                  JSCompiler_temp$$inline_763 = JSCompiler_temp$$inline_764
                }
                JSCompiler_temp$$inline_762 = JSCompiler_temp$$inline_763
              }
              JSCompiler_temp$$inline_761 = JSCompiler_temp$$inline_762
            }
            JSCompiler_temp$$inline_760 = JSCompiler_temp$$inline_761
          }
          if(JSCompiler_temp$$inline_760) {
            JSCompiler_inline_result$$752 = !0;
            break JSCompiler_inline_label_yf_775
          }
        }catch(c$$inline_773) {
          JSCompiler_inline_result$$752 = !0;
          break JSCompiler_inline_label_yf_775
        }
        JSCompiler_inline_result$$752 = !1
      }
      ci = JSCompiler_inline_result$$752 || Ze(d$$inline_687, d$$inline_687.document, b$$inline_685, c$$inline_686) || Zg(a$$inline_684) ? !1 : !0;
      if(!ci) {
        a$$inline_417.google_allow_expandable_ads = !1;
        var e$$inline_421 = J$$1().k([K$$1.DIRECT_CALL_RENDER_AD.CONTROL, K$$1.DIRECT_CALL_RENDER_AD.EXPERIMENT], Aa$$1, 4)
      }
      var f$$inline_422 = ci && !zf();
      gi() && (f$$inline_422 = !1);
      f$$inline_422 && document.write("<" + d$$inline_420 + ' src="' + di() + '"></' + d$$inline_420 + ">");
      if(hi(a$$inline_417)) {
        var g$$inline_423 = L$$1(Ja$$1(), "");
        bg = new V$$1(a$$inline_417, g$$inline_423, a$$inline_417.google_ad_handling_mode, xc)
      }
      (a$$inline_417 = f$$inline_422 || void 0) && rb$$1() ? document.write("<" + d$$inline_420 + ' src="' + L$$1(Vh, "/pagead/render_ads.js") + '"></' + d$$inline_420 + ">") : a$$inline_417 || e$$inline_421 != K$$1.DIRECT_CALL_RENDER_AD.EXPERIMENT ? document.write("<" + d$$inline_420 + '>google_protectAndRun("ads_core.google_render_ad", google_handleError, google_render_ad);</' + d$$inline_420 + ">") : ii()
    }
  }
  function Uh(a$$523) {
    this.t = a$$523
  }
  function Nh(a$$518, b$$395, c$$265, d$$161) {
    a$$518.push(b$$395);
    c$$265 && window.setTimeout(function() {
      d$$161 && 0 < a$$518.length && d$$161();
      var a$$inline_394 = a$$518;
      var b$$inline_395 = 0;
      for(;b$$inline_395 < a$$inline_394.length;++b$$inline_395) {
        a$$inline_394[b$$inline_395]()
      }
      a$$inline_394.length = 0
    }, c$$265)
  }
  function Mh(a$$515) {
    return a$$515.google_sensors ? (a$$515 = a$$515.google_sensors, new $$$1(a$$515)) : null
  }
  function $$$1(a$$514) {
    this.j = a$$514
  }
  function zh(a$$511, b$$391) {
    ze |= 2;
    return a$$511[b$$391 % a$$511.length]
  }
  function Bh(a$$510) {
    x$$51(vh, function(b$$388, c$$260) {
      a$$510[c$$260] = null
    });
    x$$51(wh, function(b$$389, c$$261) {
      a$$510[c$$261] = null
    });
    x$$51(xh, function(b$$390, c$$262) {
      a$$510[c$$262] = null
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
    a$$510.google_loader_features_used = null
  }
  function qh(a$$503, b$$382, c$$254, d$$155) {
    if(!(a$$503 && b$$382 && c$$254 && d$$155)) {
      return null
    }
    b$$382 = d$$155.document.getElementById(b$$382);
    if(!b$$382) {
      return null
    }
    var e$$91 = Ug[a$$503.google_reactive_ad_format] || null;
    switch(e$$91) {
      case 1:
        var JSCompiler_inline_result$$29;
        var a$$inline_380 = a$$503;
        var b$$inline_381 = b$$382;
        var c$$inline_382 = c$$254;
        var d$$inline_383 = d$$155;
        JSCompiler_inline_label_Ig_643: {
          switch(a$$inline_380.google_reactive_ad_format) {
            case 1:
              a$$inline_380 = "bottom";
              break JSCompiler_inline_label_Ig_643
          }
          a$$inline_380 = null
        }
        b$$inline_381 = new X$$1(b$$inline_381, c$$inline_382, d$$inline_383, a$$inline_380);
        JSCompiler_inline_result$$29 = new jh(d$$inline_383, b$$inline_381);
        return JSCompiler_inline_result$$29;
      case 2:
        var JSCompiler_inline_result$$31;
        var a$$inline_385 = a$$503;
        var c$$inline_387 = c$$254;
        var d$$inline_388 = d$$155;
        a$$inline_385 = new Y$$1(b$$382, c$$inline_387, d$$inline_388);
        JSCompiler_inline_result$$31 = new Z$$1(d$$inline_388, c$$inline_387, a$$inline_385);
        return JSCompiler_inline_result$$31
    }
    return null
  }
  function Z$$1(a$$494, b$$378, c$$252) {
    ih.call(this, a$$494);
    this.s = b$$378;
    this.Zb = c$$252;
    this.G = {};
    this.Z = this.H = !1
  }
  function kh(a$$483) {
    var b$$370 = Re(a$$483);
    a$$483 = b$$370[5] || "";
    b$$370 = b$$370[6];
    return a$$483 + (b$$370 ? "?" + b$$370 : "")
  }
  function Y$$1(a$$482, b$$369, c$$247) {
    hh.call(this, a$$482, b$$369, c$$247);
    this.Wc = c$$247.location.hostname;
    this.Xc = kh(c$$247.location.href);
    this.ea = [];
    this.ob = this.kd = !1;
    this.N(!1);
    this.Cc()
  }
  function jh(a$$480, b$$368) {
    ih.call(this, a$$480);
    this.Kb = b$$368;
    this.H = this.Cb = !1
  }
  function ih(a$$477) {
    this.i = a$$477;
    this.cc = {};
    this.Wb()
  }
  function X$$1(a$$465, b$$360, c$$242, d$$152) {
    hh.call(this, a$$465, b$$360, c$$242);
    this.I = this.Ib = this.Da = !1;
    this.w = null;
    this.Vc = Qd(c$$242.document.body, "padding");
    this.B = 0;
    this.Ra = !1;
    this.ga = !0;
    var JSCompiler_inline_result$$55;
    JSCompiler_inline_label_Kd_376: {
      var a$$inline_369 = Ld;
      var b$$inline_370 = this.s;
      if("none" != R$$1(b$$inline_370, "display")) {
        JSCompiler_inline_result$$55 = a$$inline_369(b$$inline_370);
        break JSCompiler_inline_label_Kd_376
      }
      var c$$inline_371 = b$$inline_370.style;
      var d$$inline_372 = c$$inline_371.display;
      var e$$inline_373 = c$$inline_371.visibility;
      var f$$inline_374 = c$$inline_371.position;
      c$$inline_371.visibility = "hidden";
      c$$inline_371.position = "absolute";
      c$$inline_371.display = "inline";
      var g$$inline_375 = a$$inline_369(b$$inline_370);
      c$$inline_371.display = d$$inline_372;
      c$$inline_371.position = f$$inline_374;
      c$$inline_371.visibility = e$$inline_373;
      JSCompiler_inline_result$$55 = g$$inline_375
    }
    this.gd = JSCompiler_inline_result$$55;
    this.ua = d$$152;
    this.hide();
    this.Zc = lb$$1(this.i, "orientationchange", this, this.ec);
    this.$c = lb$$1(this.i, "resize", this, this.tc);
    this.ad = lb$$1(this.i, "scroll", this, this.vc);
    this.bd = lb$$1(this.i, "touchcancel", this, this.Kc);
    this.cd = lb$$1(this.i, "touchend", this, this.Lc);
    this.dd = lb$$1(this.i, "touchmove", this, this.Mc);
    this.ed = lb$$1(this.i, "touchstart", this, this.Nc)
  }
  function hh(a$$462, b$$359, c$$241) {
    this.sb = a$$462;
    this.s = b$$359;
    this.i = c$$241
  }
  function gh(a$$461, b$$358, c$$240) {
    this.W = a$$461;
    this.onEndCallback = c$$240 ? c$$240 : null;
    W$$1.call(this, [Number(Md(a$$461))], [0], b$$358)
  }
  function fh(a$$460, b$$357) {
    this.W = a$$460;
    W$$1.call(this, [Number(Md(a$$460))], [1], b$$357)
  }
  function W$$1(a$$457, b$$355, c$$239) {
    this.ib = a$$457;
    this.Tc = b$$355;
    this.jd = c$$239;
    this.Ic = !1;
    this.current = null
  }
  function dh(a$$454) {
    this.lc = a$$454;
    this.K = ye("rach::hdlr", r$$2(this.ub, this));
    y$$32(a$$454, "message", this.K)
  }
  function $g(a$$453, b$$352, c$$236) {
    var d$$150 = rg(b$$352);
    var e$$88 = Ug[a$$453.google_reactive_ad_format] || null;
    var JSCompiler_inline_result$$60;
    JSCompiler_inline_label_Wg_368: {
      var a$$inline_365 = b$$352;
      var b$$inline_366 = a$$453;
      switch(c$$236) {
        case 1:
          JSCompiler_inline_result$$60 = Hg(a$$inline_365);
          break JSCompiler_inline_label_Wg_368;
        case 2:
          JSCompiler_inline_result$$60 = Rg(a$$inline_365, b$$inline_366);
          break JSCompiler_inline_label_Wg_368
      }
      JSCompiler_inline_result$$60 = !1
    }
    return JSCompiler_inline_result$$60 && e$$88 != c$$236 && !d$$150.wasReactiveAdCreated[c$$236]
  }
  function ch(a$$452, b$$351) {
    var c$$234 = rg(b$$351);
    var d$$149 = !0;
    if(c$$234.wasReactiveAdConfigHandlerRegistered || !d$$149) {
      return!1
    }
    var e$$87 = !1;
    x$$51(kg, function(c$$235) {
      $g(a$$452, b$$351, c$$235) && (e$$87 = !0)
    });
    return c$$234.wasReactiveAdConfigHandlerRegistered = e$$87
  }
  function ah(a$$450, b$$349) {
    var c$$232 = 0;
    x$$51(kg, function(d$$147) {
      $g(a$$450, b$$349, d$$147) && (c$$232 |= d$$147)
    });
    return c$$232 ? "" + c$$232 : null
  }
  function Zg(a$$449) {
    a$$449 = a$$449.google_reactive_ad_format;
    return Ec(lg, a$$449) ? "" + a$$449 : null
  }
  function Yg(a$$448) {
    switch(a$$448) {
      case 1:
        return new Mg;
      case 2:
        return new Qg
    }
    return null
  }
  function Rg(a$$443, b$$345) {
    var c$$228 = !1;
    try {
      c$$228 = a$$443.top == a$$443 && !!a$$443.postMessage && og(a$$443) && ng(a$$443) && !Bc(b$$345) && !Ha$$1
    }catch(d$$145) {
    }
    return c$$228
  }
  function Qg() {
    this.l = null
  }
  function Og() {
  }
  function Mg() {
    this.l = null
  }
  function Kg() {
  }
  function Hg(a$$429) {
    var b$$336 = !1;
    try {
      b$$336 = a$$429.top == a$$429 && !(!/(Android|iPhone OS|Windows Phone)/.test(a$$429.navigator.userAgent) || /Android 2/.test(a$$429.navigator.userAgent) || /iPhone OS [34]_/.test(a$$429.navigator.userAgent) || /Windows Phone (?:OS )?[67]/.test(a$$429.navigator.userAgent)) && !!a$$429.postMessage && a$$429.innerHeight >= a$$429.innerWidth && ng(a$$429) && og(a$$429)
    }catch(c$$223) {
    }
    return b$$336
  }
  function Fg(a$$428, b$$335, c$$222) {
    var d$$142 = a$$428.attributes;
    var e$$84 = d$$142.length;
    var f$$51 = 0;
    for(;f$$51 < e$$84;f$$51++) {
      var g$$30 = d$$142[f$$51];
      if(/data-/.test(g$$30.nodeName)) {
        var h$$22 = g$$30.nodeName.replace("data", "google").replace(/-/g, "_");
        b$$335.hasOwnProperty(h$$22) || (b$$335[h$$22] = g$$30.nodeValue)
      }
    }
    if("auto" == b$$335.google_ad_format || /^((^|,)(horizontal|vertical|rectangle))+$/.test(b$$335.google_ad_format)) {
      var JSCompiler_inline_result$$83;
      var a$$inline_336 = a$$428;
      var b$$inline_337 = b$$335;
      var c$$inline_338 = c$$222;
      var d$$inline_339 = a$$inline_336.offsetWidth;
      var e$$inline_340 = b$$inline_337.google_ad_format;
      c$$inline_338 = yg(d$$inline_339, e$$inline_340, c$$inline_338);
      if(!c$$inline_338) {
        throw Error("Cannot find a responsive size for a container of width=" + d$$inline_339 + "px and data-ad-format=" + e$$inline_340);
      }
      b$$inline_337.google_ad_height = c$$inline_338.height;
      b$$inline_337.google_ad_width = 300 < d$$inline_339 && 300 < c$$inline_338.height ? c$$inline_338.width : 1200 < d$$inline_339 ? 1200 : Math.round(d$$inline_339);
      a$$inline_336.style.height = b$$inline_337.google_ad_height + "px";
      delete b$$inline_337.google_ad_format;
      JSCompiler_inline_result$$83 = void 0;
      JSCompiler_inline_result$$83, b$$335.google_loader_features_used = 128
    }else {
      if(!sg.test(a$$428.style.width) || !sg.test(a$$428.style.height)) {
        var a$$inline_342 = a$$428;
        var b$$inline_343 = b$$335;
        var c$$inline_344 = c$$222;
        c$$inline_344 = c$$inline_344.getComputedStyle ? c$$inline_344.getComputedStyle(a$$inline_342, null) : a$$inline_342.currentStyle;
        a$$inline_342.style.width = c$$inline_344.width;
        a$$inline_342.style.height = c$$inline_344.height;
        wg(c$$inline_344, b$$inline_343)
      }else {
        wg(a$$428.style, b$$335)
      }
    }
  }
  function Dg(a$$427, b$$334, c$$221) {
    a$$427.style && "none" == a$$427.style.display && (b$$334.google_dn = 1);
    wb(c$$221);
    Fg(a$$427, b$$334, c$$221);
    var d$$141 = Bg;
    var e$$83 = 0;
    for(;e$$83 < d$$141.length;e$$83++) {
      b$$334[d$$141[e$$83]] = b$$334[d$$141[e$$83]] || c$$221[d$$141[e$$83]]
    }
    b$$334.google_loader_used = "aa";
    if((d$$141 = b$$334.google_ad_output) && "html" != d$$141) {
      throw Error("No support for google_ad_output=" + d$$141);
    }
    te("aa::main", ve, function() {
      Kf(c$$221, b$$334, a$$427)
    })
  }
  function Cg(a$$426) {
    a$$426.setAttribute("data-adsbygoogle-status", "done")
  }
  function Ag(a$$424) {
    a$$424 = a$$424.document;
    return a$$424.documentElement.clientWidth || a$$424.body.clientWidth
  }
  function yg(a$$422, b$$331, c$$219) {
    var d$$140 = tg;
    d$$140.sort(function(a$$423, b$$332) {
      return a$$423.width - b$$332.width || a$$423.height - b$$332.height
    });
    "auto" == b$$331 && (b$$331 = a$$422 / Ag(c$$219), b$$331 = 0.25 > b$$331 ? "vertical" : "horizontal,rectangle");
    c$$219 = d$$140.length;
    for(;c$$219--;) {
      if(d$$140[c$$219].width <= a$$422 && -1 != b$$331.indexOf(d$$140[c$$219].format)) {
        return d$$140[c$$219]
      }
    }
    return null
  }
  function wg(a$$420, b$$329) {
    var c$$217 = ["width", "height"];
    var d$$138 = 0;
    for(;d$$138 < c$$217.length;d$$138++) {
      var e$$81 = "google_ad_" + c$$217[d$$138];
      if(!b$$329.hasOwnProperty(e$$81)) {
        var f$$50 = sg.exec(a$$420[c$$217[d$$138]]);
        f$$50 && (b$$329[e$$81] = Math.round(f$$50[1]))
      }
    }
  }
  function rg(a$$415) {
    a$$415.google_reactive_ads_global_state || (a$$415.google_reactive_ads_global_state = new pg);
    return a$$415.google_reactive_ads_global_state
  }
  function pg() {
    this.wasReactiveAdConfigReceived = {};
    this.wasReactiveAdCreated = {};
    this.wasReactiveAdConfigHandlerRegistered = !1
  }
  function og(a$$414) {
    var b$$327 = a$$414.document.documentElement.clientWidth;
    a$$414 = a$$414.innerWidth;
    return 0.05 > Math.abs(b$$327 / a$$414 - 1)
  }
  function ng(a$$413) {
    a$$413 = a$$413.document.documentElement.clientWidth;
    return 320 <= a$$413 && 420 >= a$$413
  }
  function hg(a$$405) {
    this.qa = a$$405
  }
  function gg(a$$404) {
    a$$404 = String(a$$404);
    if(fg(a$$404)) {
      try {
        return eval("(" + a$$404 + ")")
      }catch(b$$319) {
      }
    }
    throw Error("Invalid JSON string: " + a$$404);
  }
  function fg(a$$403) {
    if(/^\s*$/.test(a$$403)) {
      return!1
    }
    var b$$318 = /\\["\\\/bfnrtu]/g;
    var c$$213 = /"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var d$$135 = /(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g;
    var e$$77 = /^[\],:{}\s\u2028\u2029]*$/;
    return e$$77.test(a$$403.replace(b$$318, "@").replace(c$$213, "]").replace(d$$135, ""))
  }
  function eg(a$$401, b$$315) {
    try {
      return void 0 != a$$401.frames[b$$315]
    }catch(c$$211) {
      return!1
    }
  }
  function Xf(a$$388) {
    Wf[a$$388] = !0;
    return a$$388
  }
  function V$$1(a$$387, b$$306, c$$204, d$$130) {
    this.Q = a$$387;
    this.Fb = b$$306;
    this.Za = c$$204;
    this.hc = !1;
    this.F = "";
    this.za = this.U = null;
    this.Sb = this.Fc = this.Pa = this.Tb = this.jc = this.ma = this.va = !1;
    this.K = ye("zrt_mh::handler", r$$2(V$$1.prototype.Qa, this), d$$130);
    y$$32(a$$387, "message", this.K)
  }
  function Jf(a$$378, b$$299, c$$197, d$$125, e$$75) {
    var f$$48 = "script";
    var g$$29 = b$$299.google_ad_width;
    var h$$21 = b$$299.google_ad_height;
    var k$$9 = {};
    Ff(k$$9, g$$29, h$$21, !0);
    k$$9.onload = '"' + Ne + '"';
    e$$75 = e$$75(a$$378, k$$9, b$$299);
    JSCompiler_inline_label_Lf_308: {
      if(window.google_override_format || !wf[window.google_ad_width + "x" + window.google_ad_height] && "aa" == window.google_loader_used) {
        var a$$inline_307 = Uf;
        k$$9 = vb([a$$inline_307.CONTROL, a$$inline_307.EXPERIMENT], Ba$$1);
        break JSCompiler_inline_label_Lf_308
      }
      k$$9 = null
    }
    var a$$inline_309 = c$$197;
    var b$$inline_310 = d$$125;
    var c$$inline_311 = b$$299;
    var a$$inline_624 = c$$inline_311;
    var c$$inline_626 = a$$inline_624.google_ad_output;
    var d$$inline_627 = a$$inline_624.google_ad_format;
    d$$inline_627 || "html" != c$$inline_626 && null != c$$inline_626 || (d$$inline_627 = a$$inline_624.google_ad_width + "x" + a$$inline_624.google_ad_height, "e" == k$$9 && (d$$inline_627 += "_as"));
    c$$inline_626 = !a$$inline_624.google_ad_slot || a$$inline_624.google_override_format || !wf[a$$inline_624.google_ad_width + "x" + a$$inline_624.google_ad_height] && "aa" == a$$inline_624.google_loader_used;
    d$$inline_627 = d$$inline_627 && c$$inline_626 ? d$$inline_627.toLowerCase() : "";
    a$$inline_624.google_ad_format = d$$inline_627;
    var JSCompiler_temp_const$$562 = c$$inline_311;
    var JSCompiler_inline_result$$563;
    var a$$inline_629 = a$$inline_309;
    a$$inline_629 = b$$inline_310 ? a$$inline_629.parentElement : a$$inline_629;
    JSCompiler_inline_result$$563 = Fb(a$$inline_629, c$$inline_311, !0);
    JSCompiler_temp_const$$562.google_ad_unit_key = JSCompiler_inline_result$$563;
    b$$inline_310 = window.google_adk2_experiment = window.google_adk2_experiment || vb(["C", "E"], xa$$1) || "N";
    "E" == b$$inline_310 ? c$$inline_311.google_ad_unit_key_2 = Fb(a$$inline_309, c$$inline_311) : "C" == b$$inline_310 && (c$$inline_311.google_ad_unit_key_2 = "ctrl");
    c$$197 = Ee(b$$299);
    var a$$inline_314 = a$$378;
    var b$$inline_315 = Ke(a$$inline_314);
    var c$$inline_316 = 3 == Xe(a$$inline_314.document);
    var d$$inline_317 = Ge;
    b$$inline_315 && !c$$inline_316 && void 0 === a$$inline_314.google_ad_handling_mode && (a$$inline_314.google_ad_handling_mode = vb([d$$inline_317.CONTROL_NO_FRAME, d$$inline_317.ALWAYS_ZRT, d$$inline_317.SERIAL], sa$$1) || vb([d$$inline_317.IFRAME_SIGNALING], ta$$1));
    d$$125 = a$$inline_314.google_ad_handling_mode ? String(a$$inline_314.google_ad_handling_mode) : null;
    JSCompiler_inline_label_If_328: {
      var a$$inline_319 = a$$378;
      var b$$inline_320 = d$$125;
      var c$$inline_321 = b$$299;
      var d$$inline_322 = g$$29;
      var e$$inline_323 = h$$21;
      var f$$inline_324 = Ge;
      if(Ke(a$$inline_319) && 1 == a$$inline_319.google_unique_id && b$$inline_320 != f$$inline_324.CONTROL_NO_FRAME && b$$inline_320 != f$$inline_324.SERIAL) {
        var g$$inline_325 = "zrt_ads_frame" + a$$inline_319.google_unique_id;
        var h$$inline_326;
        var a$$inline_633 = a$$inline_319;
        var d$$inline_636 = c$$inline_321.google_page_url;
        d$$inline_636 || (d$$inline_636 = Ze(a$$inline_633, a$$inline_633.document, d$$inline_322, e$$inline_323) ? a$$inline_633.document.referrer : a$$inline_633.document.URL);
        h$$inline_326 = encodeURIComponent(d$$inline_636);
        var k$$inline_327 = null;
        if(Le(b$$inline_320)) {
          k$$inline_327 = He;
          switch(b$$inline_320) {
            case f$$inline_324.IFRAME_SIGNALING:
              b$$inline_320 = k$$inline_327.PARALLEL_W_IFRAME_SIGNALING;
              break;
            case f$$inline_324.ALWAYS_ZRT:
              b$$inline_320 = k$$inline_327.PARALLEL_W_ALWAYS_ZRT;
              break;
            default:
              b$$inline_320 = k$$inline_327.PARALLEL
          }
          k$$inline_327 = b$$inline_320 + "-" + (h$$inline_326 + "/" + c$$inline_321.google_ad_unit_key + "/" + a$$inline_319.google_unique_id)
        }
        a$$inline_319 = {};
        Ff(a$$inline_319, d$$inline_322, e$$inline_323, !1);
        a$$inline_319.style = "display:none";
        var a$$inline_638 = k$$inline_327;
        var b$$inline_639 = g$$inline_325;
        var c$$inline_640 = a$$inline_319;
        c$$inline_640.id = b$$inline_639;
        c$$inline_640.name = b$$inline_639;
        c$$inline_640.src = Df(a$$inline_638);
        b$$299 = Cf(c$$inline_640);
        break JSCompiler_inline_label_If_328
      }
      b$$299 = null
    }
    g$$29 = vf;
    h$$21 = (new Date).getTime();
    var l$$11 = a$$378.google_top_experiment;
    var z$$5 = a$$378.google_async_for_oa_experiment;
    var C$$3 = a$$378.google_always_use_delayed_impressions_experiment;
    k$$9 = ["<!doctype html><html><body>", b$$299, "<", f$$48, ">", c$$197, "google_show_ads_impl=true;google_unique_id=", a$$378.google_unique_id, ';google_async_iframe_id="', e$$75, '";google_start_time=', g$$29, ";", l$$11 ? 'google_top_experiment="' + l$$11 + '";' : "", d$$125 ? 'google_ad_handling_mode="' + d$$125 + '";' : "", z$$5 ? 'google_async_for_oa_experiment="' + z$$5 + '";' : "", C$$3 ? 'google_always_use_delayed_impressions_experiment="' + C$$3 + '";' : "", k$$9 ? 'google_append_as_for_format_override="' + 
    k$$9 + '";' : "", "google_bpp=", h$$21 > g$$29 ? h$$21 - g$$29 : 1, ";google_async_rrc=0;</", f$$48, ">", xf(), "</body></html>"].join("");
    c$$197 = a$$378.document.getElementById(e$$75) ? rf : sf;
    c$$197(Af(a$$378, e$$75, k$$9, !0))
  }
  function Kf(a$$376, b$$297, c$$196) {
    Jf(a$$376, b$$297, c$$196, !1, function(a$$377, b$$298, f$$47) {
      var JSCompiler_inline_result$$73;
      var a$$inline_302 = a$$377;
      var b$$inline_303 = b$$298;
      var c$$inline_304 = f$$47;
      var d$$inline_305 = c$$196;
      a$$inline_302 = a$$inline_302.document;
      var a$$inline_613 = a$$inline_302;
      var b$$inline_614 = b$$inline_303;
      var c$$inline_615 = b$$inline_614.id;
      var d$$inline_616 = 0;
      for(;!c$$inline_615 || a$$inline_613.getElementById(c$$inline_615);) {
        c$$inline_615 = "aswift_" + d$$inline_616++
      }
      b$$inline_614.id = c$$inline_615;
      b$$inline_614.name = c$$inline_615;
      a$$inline_302 = Number(c$$inline_304.google_ad_width);
      c$$inline_304 = Number(c$$inline_304.google_ad_height);
      var JSCompiler_temp_const$$568 = d$$inline_305;
      var JSCompiler_inline_result$$569;
      var a$$inline_618 = b$$inline_303;
      var b$$inline_619 = a$$inline_302;
      var c$$inline_620 = c$$inline_304;
      var d$$inline_621 = ["<iframe"];
      var e$$inline_622;
      for(e$$inline_622 in a$$inline_618) {
        a$$inline_618.hasOwnProperty(e$$inline_622) && ib$$1(d$$inline_621, e$$inline_622 + "=" + a$$inline_618[e$$inline_622])
      }
      d$$inline_621.push('style="left:0;position:absolute;top:0;"');
      d$$inline_621.push("></iframe>");
      d$$inline_621 = d$$inline_621.join(" ");
      var JSCompiler_inline_result$$751;
      var a$$inline_753 = a$$inline_618.id + "_anchor";
      var b$$inline_754 = b$$inline_619;
      b$$inline_754 = "border:none;height:" + c$$inline_620 + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + b$$inline_754 + "px;background-color:transparent";
      a$$inline_753 = ['<ins style="display:inline-table;', b$$inline_754, '">', '<ins id="', a$$inline_753, '" style="display:block;', b$$inline_754, '">', d$$inline_621, "</ins></ins>"];
      JSCompiler_inline_result$$751 = a$$inline_753.join("");
      JSCompiler_inline_result$$569 = a$$inline_618 = JSCompiler_inline_result$$751;
      JSCompiler_temp_const$$568.innerHTML = JSCompiler_inline_result$$569;
      JSCompiler_inline_result$$73 = b$$inline_303.id;
      return JSCompiler_inline_result$$73
    })
  }
  function Ff(a$$372, b$$293, c$$192, d$$121, e$$73) {
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
    a$$372.scrolling = d$$121 + "no" + d$$121
  }
  function Df(a$$370) {
    return L$$1(Ja$$1(), ["/pagead/html/", Da$$1(), "/r20130906/zrt_lookup.html", a$$370 ? "#" + encodeURIComponent(a$$370) : ""].join(""))
  }
  function Cf(a$$368) {
    var b$$291 = ["<iframe"];
    x$$51(a$$368, function(a$$369, d$$120) {
      null != a$$369 && b$$291.push(" " + d$$120 + '="' + a$$369 + '"')
    });
    b$$291.push("></iframe>");
    return b$$291.join("")
  }
  function Bf(a$$366, b$$289, c$$190) {
    var d$$119 = a$$366.createElement("iframe");
    x$$51(b$$289, function(a$$367, b$$290) {
      null != a$$367 && d$$119.setAttribute(b$$290, a$$367)
    });
    c$$190 && (d$$119.style.display = c$$190);
    return d$$119
  }
  function Af(a$$365, b$$288, c$$189, d$$118) {
    return function() {
      var e$$72 = !1;
      if(d$$118) {
        qf().al(3E4)
      }
      try {
        var JSCompiler_inline_result$$64;
        var a$$inline_297 = a$$365;
        var b$$inline_298 = b$$288;
        var c$$inline_299 = c$$189;
        var d$$inline_300 = a$$inline_297.document.getElementById(b$$inline_298);
        d$$inline_300 = d$$inline_300.contentWindow;
        if(Kb(d$$inline_300)) {
          var a$$inline_605 = a$$inline_297;
          var b$$inline_606 = b$$inline_298;
          var c$$inline_607 = c$$inline_299;
          a$$inline_605 = a$$inline_605.document.getElementById(b$$inline_606).contentWindow;
          b$$inline_606 = a$$inline_605.document;
          b$$inline_606.body && b$$inline_606.body.firstChild || (b$$inline_606.open(), a$$inline_605.google_async_iframe_close = !0, b$$inline_606.write(c$$inline_607))
        }else {
          var a$$inline_609 = a$$inline_297;
          var c$$inline_611 = c$$inline_299;
          a$$inline_609 = a$$inline_609.document.getElementById(b$$inline_298).contentWindow;
          c$$inline_611 = "javascript:" + ab$$1(c$$inline_611);
          a$$inline_609.location.replace(c$$inline_611)
        }
        JSCompiler_inline_result$$64 = void 0;
        JSCompiler_inline_result$$64, e$$72 = !0
      }catch(f$$44) {
        uf()
      }
      e$$72 && (e$$72 = Oe("google_async_rrc", c$$189), (new Me(a$$365)).set(b$$288, Af(a$$365, b$$288, e$$72, !1)))
    }
  }
  function zf() {
    return"object" == typeof window.ExpandableAdSlotFactory && "function" == typeof window.ExpandableAdSlotFactory.createIframe
  }
  function xf() {
    var a$$363 = "script";
    return["<", a$$363, ' src="', L$$1(La$$1(), ["/pagead/js/", Da$$1(), "/r20130906/show_ads_impl.js"].join(""), ""), '"></', a$$363, ">"].join("")
  }
  function uf() {
    var a$$362 = hc().google_jobrunner;
    pf(a$$362) && a$$362.rl()
  }
  function sf(a$$360, b$$286) {
    qf().nqa(a$$360, b$$286)
  }
  function rf(a$$359, b$$285) {
    qf().nq(a$$359, b$$285)
  }
  function qf() {
    if(mf && of(mf)) {
      return mf
    }
    var a$$358 = hc();
    var b$$284 = a$$358.google_jobrunner;
    return pf(b$$284) ? mf = b$$284 : a$$358.google_jobrunner = mf = new U$$1(a$$358)
  }
  function pf(a$$357) {
    return gb$$1(a$$357) && of(a$$357) && fb$$1(a$$357.nq) && fb$$1(a$$357.nqa) && fb$$1(a$$357.al) && fb$$1(a$$357.rl)
  }
  function of(a$$356) {
    try {
      return a$$356.sz()
    }catch(b$$283) {
      return!1
    }
  }
  function nf(a$$349, b$$278) {
    this.fn = a$$349;
    this.win = b$$278
  }
  function U$$1(a$$348) {
    this.oa = [];
    this.p = a$$348 || window;
    this.j = 0;
    this.na = null
  }
  function cf(a$$346) {
    var b$$277 = af();
    if(b$$277) {
      return{url:b$$277, isTopUrl:!0}
    }
    b$$277 = a$$346.location.href;
    if(a$$346 == a$$346.top) {
      return{url:b$$277, isTopUrl:!0}
    }
    var c$$187 = !1;
    var d$$117 = a$$346.document;
    d$$117 && d$$117.referrer && (b$$277 = d$$117.referrer, a$$346.parent == a$$346.top && (c$$187 = !0));
    (a$$346 = a$$346.location.ancestorOrigins) && (a$$346 = a$$346[a$$346.length - 1]) && -1 == b$$277.indexOf(a$$346) && (c$$187 = !1, b$$277 = a$$346);
    return{url:b$$277, isTopUrl:c$$187}
  }
  function af(a$$345) {
    var b$$276 = D$$1().google_top_values;
    if(b$$276) {
      var c$$186 = b$$276[3];
      a$$345 && (c$$186 = b$$276[4]);
      if(c$$186) {
        return c$$186 + ""
      }
    }
    return null
  }
  function Ye() {
    var a$$344 = H$$1().m(10);
    var b$$275 = K$$1.PERISCOPE_FOR_TARGETING;
    return a$$344 === b$$275.EXPERIMENT_REFERER_CLEANUP
  }
  function Xe(a$$343) {
    a$$343 = a$$343.webkitVisibilityState || a$$343.mozVisibilityState || a$$343.visibilityState || "";
    var b$$274 = {visible:1, hidden:2, prerender:3, preview:4};
    return b$$274[a$$343] || 0
  }
  function Ve(a$$337, b$$268, c$$180) {
    if(n$$2(b$$268)) {
      var d$$112 = 0;
      for(;d$$112 < b$$268.length;d$$112++) {
        Ve(a$$337, String(b$$268[d$$112]), c$$180)
      }
    }else {
      null != b$$268 && c$$180.push("&", a$$337, "" === b$$268 ? "" : "=", encodeURIComponent(String(b$$268)))
    }
  }
  function Re(a$$333) {
    if(Se) {
      Se = !1;
      var a$$inline_257 = m$$3.location;
      if(a$$inline_257) {
        var b$$inline_258 = a$$inline_257.href;
        var JSCompiler_temp$$558;
        if(JSCompiler_temp$$558 = b$$inline_258) {
          var JSCompiler_inline_result$$559;
          var a$$inline_603 = Re(b$$inline_258)[3] || null;
          JSCompiler_inline_result$$559 = a$$inline_603 && decodeURIComponent(a$$inline_603);
          JSCompiler_temp$$558 = (b$$inline_258 = JSCompiler_inline_result$$559) && b$$inline_258 != a$$inline_257.hostname
        }
        if(JSCompiler_temp$$558) {
          throw Se = !0, Error();
        }
      }
    }
    return a$$333.match(Pe)
  }
  function Oe(a$$332, b$$265) {
    var c$$178 = RegExp("\\b" + a$$332 + "=(\\d+)");
    var d$$111 = c$$178.exec(b$$265);
    d$$111 && (d$$111 = +d$$111[1] + 1 || 1, b$$265 = b$$265.replace(c$$178, a$$332 + "=" + d$$111));
    return b$$265
  }
  function Me(a$$328) {
    this.p = a$$328;
    a$$328.google_iframe_oncopy || (a$$328.google_iframe_oncopy = {handlers:{}, upd:r$$2(this.Qc, this)});
    this.hd = a$$328.google_iframe_oncopy
  }
  function Le(a$$327) {
    var b$$261 = Ge;
    return a$$327 == b$$261.PARALLEL_CANCEL_ON_NO_AD || a$$327 == b$$261.IFRAME_SIGNALING || a$$327 == b$$261.ALWAYS_ZRT
  }
  function Ke(a$$326) {
    try {
      var b$$260 = Ie.test(a$$326.location.host);
      return!(!a$$326.postMessage || !a$$326.localStorage || !a$$326.JSON || b$$260)
    }catch(c$$176) {
      return!1
    }
  }
  function Ee(a$$323) {
    var b$$257 = "google_page_url";
    a$$323[b$$257] && (a$$323[b$$257] = String(a$$323[b$$257]));
    var c$$174 = [];
    x$$51(a$$323, function(a$$324, b$$258) {
      if(null != a$$324) {
        var f$$41;
        try {
          f$$41 = (new Be).serialize(a$$324)
        }catch(g$$26) {
        }
        f$$41 && ib$$1(c$$174, b$$258, "=", f$$41, ";")
      }
    });
    return c$$174.join("")
  }
  function Be() {
  }
  function we(a$$312) {
    var b$$247 = "";
    x$$51(a$$312, function(a$$313, d$$106) {
      if(0 === a$$313 || a$$313) {
        b$$247 += "&" + d$$106 + "=" + ("function" == typeof encodeURIComponent ? encodeURIComponent(a$$313) : escape(a$$313))
      }
    });
    return b$$247
  }
  function ye(a$$310, b$$246, c$$170, d$$105) {
    return function(e$$65) {
      e$$65 = ga$$1(b$$246, e$$65);
      var f$$40 = d$$105 || ve;
      te(a$$310, f$$40, e$$65, c$$170)
    }
  }
  function xe(a$$309, b$$245, c$$169, d$$104) {
    return ga$$1(te, a$$309, d$$104 || ve, b$$245, c$$169)
  }
  function ue(a$$307) {
    var b$$244 = a$$307 || {};
    x$$51(pe, function(a$$308, d$$103) {
      b$$244[d$$103] = w$$6[a$$308]
    });
    return b$$244
  }
  function se(a$$306, b$$243, c$$168) {
    c$$168 = c$$168 || 0.01;
    Math.random() < c$$168 && (a$$306 = "/pagead/gen_204?id=" + a$$306 + we(b$$243), a$$306 = L$$1(ma$$1("", "googlesyndication"), a$$306), a$$306 = a$$306.substring(0, 2E3), nb$$1(w$$6, a$$306))
  }
  function ve(a$$305, b$$242, c$$167, d$$102, e$$64) {
    var f$$39 = v$$1;
    a$$305 = {jscb:Ea$$1 ? 1 : 0, jscd:Fa$$1 ? 1 : 0, context:a$$305, msg:b$$242.substring(0, 512), eid:e$$64 && e$$64.substring(0, 40), file:c$$167, line:d$$102.toString(), url:f$$39.URL.substring(0, 512), ref:f$$39.referrer.substring(0, 512)};
    ue(a$$305);
    se("jserror", a$$305);
    return!Ga$$1
  }
  function te(a$$304, b$$241, c$$166, d$$101) {
    try {
      c$$166()
    }catch(e$$63) {
      c$$166 = !Ga$$1;
      try {
        var f$$38 = e$$63.toString();
        e$$63.name && -1 == f$$38.indexOf(e$$63.name) && (f$$38 += ": " + e$$63.name);
        e$$63.message && -1 == f$$38.indexOf(e$$63.message) && (f$$38 += ": " + e$$63.message);
        if(e$$63.stack) {
          JSCompiler_inline_label_qe_245: {
            var a$$inline_241 = e$$63.stack;
            var b$$inline_242 = f$$38;
            try {
              -1 == a$$inline_241.indexOf(b$$inline_242) && (a$$inline_241 = b$$inline_242 + "\n" + a$$inline_241);
              var c$$inline_243;
              for(;a$$inline_241 != c$$inline_243;) {
                c$$inline_243 = a$$inline_241, a$$inline_241 = a$$inline_241.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1")
              }
              f$$38 = a$$inline_241.replace(/\n */g, "\n")
            }catch(d$$inline_244) {
              f$$38 = b$$inline_242
            }
          }
        }
        var g$$25 = "";
        e$$63.fileName && (g$$25 = e$$63.fileName);
        var h$$18 = -1;
        e$$63.lineNumber && (h$$18 = e$$63.lineNumber);
        var k$$7;
        JSCompiler_inline_label_re_248: {
          try {
            k$$7 = d$$101 ? d$$101() : "";
            break JSCompiler_inline_label_re_248
          }catch(b$$inline_247) {
          }
          k$$7 = ""
        }
        c$$166 = b$$241(a$$304, f$$38, g$$25, h$$18, k$$7)
      }catch(l$$10) {
        se("jserror", {context:"protectAndRun", msg:l$$10.toString() + "\n" + (l$$10.stack || "")})
      }
      if(!c$$166) {
        throw e$$63;
      }
    }
  }
  function le(a$$301, b$$238, c$$164, d$$99, e$$61) {
    this.nb = a$$301;
    this.fd = b$$238;
    this.ld = c$$164;
    this.kb = d$$99;
    this.Vb = this.lb = !1;
    this.Yc = e$$61 || null
  }
  function me() {
    var a$$300 = D$$1();
    var b$$237 = a$$300.__google_ad_urls;
    if(!b$$237) {
      return a$$300.__google_ad_urls = new S$$1(a$$300)
    }
    try {
      if(b$$237.getOseId()) {
        return b$$237
      }
    }catch(c$$163) {
    }
    return a$$300.__google_ad_urls = new S$$1(a$$300, b$$237)
  }
  function ke(a$$293, b$$229, c$$156, d$$93) {
    he = L$$1(b$$229, "/pagead/osd.js", a$$293 ? "https" : "http");
    ie = c$$156;
    je = d$$93
  }
  function S$$1(a$$292, b$$228) {
    this.wa = a$$292;
    this.ha = b$$228 ? b$$228.ha : [];
    this.Ua = b$$228 ? b$$228.Ua : !1;
    this.Db = b$$228 ? b$$228.Db : "";
    this.Wa = b$$228 ? b$$228.Wa : 0;
    this.Aa = b$$228 ? b$$228.Aa : "";
    this.q = b$$228 ? b$$228.q : [];
    this.xa = null;
    this.Lb = !1
  }
  function fe(a$$290, b$$227) {
    if(rb$$1()) {
      var c$$155 = function() {
        "complete" == a$$290.readyState && b$$227()
      };
      y$$32(a$$290, "readystatechange", c$$155)
    }else {
      y$$32(a$$290, "load", b$$227)
    }
  }
  function de(a$$288, b$$225) {
    var c$$153 = b$$225 || w$$6;
    a$$288 && c$$153.top != c$$153 && (c$$153 = c$$153.top);
    try {
      var JSCompiler_temp$$0;
      if(c$$153.document && !c$$153.document.body) {
        JSCompiler_temp$$0 = new u$$2(-1, -1)
      }else {
        var a$$inline_187 = c$$153 || window;
        a$$inline_187 = a$$inline_187.document;
        a$$inline_187 = "CSS1Compat" == a$$inline_187.compatMode ? a$$inline_187.documentElement : a$$inline_187.body;
        JSCompiler_temp$$0 = new u$$2(a$$inline_187.clientWidth, a$$inline_187.clientHeight)
      }
      return JSCompiler_temp$$0
    }catch(d$$92) {
      return new u$$2(-12245933, -12245933)
    }
  }
  function ce(a$$287, b$$224) {
    if(a$$287) {
      var c$$152 = a$$287.match(b$$224 + "=([^&]+)");
      if(c$$152 && 2 == c$$152.length) {
        return c$$152[1]
      }
    }
    return""
  }
  function be(a$$286, b$$223, c$$151, d$$91, e$$57) {
    var JSCompiler_temp$$12;
    if(e$$57) {
      var b$$inline_179 = b$$223;
      b$$inline_179 = "&" + b$$inline_179 + "=" + c$$151;
      JSCompiler_temp$$12 = a$$286 + b$$inline_179
    }else {
      var a$$inline_182 = a$$286;
      var b$$inline_183 = b$$223;
      var c$$inline_184 = c$$151;
      var d$$inline_185 = "&" + b$$inline_183 + "=";
      b$$inline_183 = a$$inline_182.indexOf(d$$inline_185);
      0 > b$$inline_183 ? a$$inline_182 = a$$inline_182 + d$$inline_185 + c$$inline_184 : (b$$inline_183 += d$$inline_185.length, d$$inline_185 = a$$inline_182.indexOf("&", b$$inline_183), a$$inline_182 = 0 <= d$$inline_185 ? a$$inline_182.substring(0, b$$inline_183) + c$$inline_184 + a$$inline_182.substring(d$$inline_185) : a$$inline_182.substring(0, b$$inline_183) + c$$inline_184);
      JSCompiler_temp$$12 = a$$inline_182
    }
    c$$151 = JSCompiler_temp$$12;
    return 2E3 < c$$151.length ? void 0 !== d$$91 ? be(a$$286, b$$223, d$$91, void 0, e$$57) : a$$286 : c$$151
  }
  function Zd(a$$282, b$$220, c$$148, d$$89) {
    b$$220 = [c$$148 ? "google_debug&" : "", "xpc=", b$$220, "&p=", encodeURIComponent(v$$1.location.protocol), "//", encodeURIComponent(v$$1.location.host)].join("");
    d$$89 = d$$89 ? encodeURIComponent : function(a$$283) {
      return a$$283
    };
    return a$$282 + (-1 == a$$282.indexOf(d$$89("?")) ? d$$89("?") : d$$89("&")) + d$$89(b$$220)
  }
  function Yd(a$$281, b$$219, c$$147, d$$88, e$$56, f$$33, g$$21, h$$14) {
    return{a:a$$281, b:b$$219, c:c$$147, d:d$$88, e:e$$56, f:f$$33, g:g$$21, h:h$$14}
  }
  function Wd(a$$279) {
    var b$$217 = R$$1(a$$279, "fontSize");
    var c$$145;
    var a$$inline_173 = b$$217;
    c$$145 = (a$$inline_173 = a$$inline_173.match(Sd)) && a$$inline_173[0] || null;
    if(b$$217 && "px" == c$$145) {
      return parseInt(b$$217, 10)
    }
    if(N$$1) {
      if(c$$145 in Ud) {
        return Od(a$$279, b$$217, "left", "pixelLeft")
      }
      if(a$$279.parentNode && 1 == a$$279.parentNode.nodeType && c$$145 in Vd) {
        return a$$279 = a$$279.parentNode, c$$145 = R$$1(a$$279, "fontSize"), Od(a$$279, b$$217 == c$$145 ? "1em" : b$$217, "left", "pixelLeft")
      }
    }
    c$$145 = kd("span", {style:"visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"});
    a$$279.appendChild(c$$145);
    b$$217 = c$$145.offsetHeight;
    qd(c$$145);
    return b$$217
  }
  function Qd(a$$276, b$$215) {
    if(N$$1) {
      var c$$143 = Pd(a$$276, b$$215 + "Left");
      var d$$86 = Pd(a$$276, b$$215 + "Right");
      var e$$55 = Pd(a$$276, b$$215 + "Top");
      var f$$32 = Pd(a$$276, b$$215 + "Bottom");
      return new P$$1(e$$55, d$$86, f$$32, c$$143)
    }
    c$$143 = yd(a$$276, b$$215 + "Left");
    d$$86 = yd(a$$276, b$$215 + "Right");
    e$$55 = yd(a$$276, b$$215 + "Top");
    f$$32 = yd(a$$276, b$$215 + "Bottom");
    return new P$$1(parseFloat(e$$55), parseFloat(d$$86), parseFloat(f$$32), parseFloat(c$$143))
  }
  function Pd(a$$275, b$$214) {
    var c$$142 = a$$275.currentStyle ? a$$275.currentStyle[b$$214] : null;
    return c$$142 ? Od(a$$275, c$$142, "left", "pixelLeft") : 0
  }
  function Od(a$$274, b$$213, c$$141, d$$85) {
    if(/^\d+px?$/.test(b$$213)) {
      return parseInt(b$$213, 10)
    }
    var e$$54 = a$$274.style[c$$141];
    var f$$31 = a$$274.runtimeStyle[c$$141];
    a$$274.runtimeStyle[c$$141] = a$$274.currentStyle[c$$141];
    a$$274.style[c$$141] = b$$213;
    b$$213 = a$$274.style[d$$85];
    a$$274.style[c$$141] = e$$54;
    a$$274.runtimeStyle[c$$141] = f$$31;
    return b$$213
  }
  function Nd(a$$273, b$$212) {
    var c$$140 = a$$273.style;
    "opacity" in c$$140 ? c$$140.opacity = b$$212 : "MozOpacity" in c$$140 ? c$$140.MozOpacity = b$$212 : "filter" in c$$140 && (c$$140.filter = "" === b$$212 ? "" : "alpha(opacity=" + 100 * b$$212 + ")")
  }
  function Md(a$$272) {
    var b$$211 = a$$272.style;
    a$$272 = "";
    "opacity" in b$$211 ? a$$272 = b$$211.opacity : "MozOpacity" in b$$211 ? a$$272 = b$$211.MozOpacity : "filter" in b$$211 && (b$$211 = b$$211.filter.match(/alpha\(opacity=([\d.]+)\)/)) && (a$$272 = String(b$$211[1] / 100));
    return"" == a$$272 ? a$$272 : Number(a$$272)
  }
  function Ld(a$$271) {
    var b$$210 = a$$271.offsetWidth;
    var c$$139 = a$$271.offsetHeight;
    var d$$84 = Pc && !b$$210 && !c$$139;
    return(void 0 === b$$210 || d$$84) && a$$271.getBoundingClientRect ? (a$$271 = Ad(a$$271), new u$$2(a$$271.right - a$$271.left, a$$271.bottom - a$$271.top)) : new u$$2(b$$210, c$$139)
  }
  function Jd(a$$267, b$$206) {
    "number" == typeof a$$267 && (a$$267 = (b$$206 ? Math.round(a$$267) : a$$267) + "px");
    return a$$267
  }
  function Id(a$$266, b$$205, c$$137) {
    if(b$$205 instanceof u$$2) {
      c$$137 = b$$205.height, b$$205 = b$$205.width
    }else {
      if(void 0 == c$$137) {
        throw Error("missing height argument");
      }
    }
    a$$266.style.width = Jd(b$$205, !0);
    a$$266.style.height = Jd(c$$137, !0)
  }
  function Cd(a$$263) {
    var b$$202;
    var c$$134 = cd(a$$263);
    var d$$81 = R$$1(a$$263, "position");
    var e$$51 = Oc && c$$134.getBoxObjectFor && !a$$263.getBoundingClientRect && "absolute" == d$$81 && (b$$202 = c$$134.getBoxObjectFor(a$$263)) && (0 > b$$202.screenX || 0 > b$$202.screenY);
    var f$$28 = new M$$1(0, 0);
    var g$$19;
    var a$$inline_153 = c$$134;
    a$$inline_153 = a$$inline_153 ? cd(a$$inline_153) : document;
    g$$19 = !N$$1 || N$$1 && 9 <= Vc || dd(a$$inline_153).$b() ? a$$inline_153.documentElement : a$$inline_153.body;
    if(a$$263 == g$$19) {
      return f$$28
    }
    if(a$$263.getBoundingClientRect) {
      b$$202 = Ad(a$$263), a$$263 = dd(c$$134).Ja(), f$$28.x = b$$202.left + a$$263.x, f$$28.y = b$$202.top + a$$263.y
    }else {
      if(c$$134.getBoxObjectFor && !e$$51) {
        b$$202 = c$$134.getBoxObjectFor(a$$263), a$$263 = c$$134.getBoxObjectFor(g$$19), f$$28.x = b$$202.screenX - a$$263.screenX, f$$28.y = b$$202.screenY - a$$263.screenY
      }else {
        b$$202 = a$$263;
        do {
          f$$28.x += b$$202.offsetLeft;
          f$$28.y += b$$202.offsetTop;
          b$$202 != a$$263 && (f$$28.x += b$$202.clientLeft || 0, f$$28.y += b$$202.clientTop || 0);
          if(Pc && "fixed" == R$$1(b$$202, "position")) {
            f$$28.x += c$$134.body.scrollLeft;
            f$$28.y += c$$134.body.scrollTop;
            break
          }
          b$$202 = b$$202.offsetParent
        }while(b$$202 && b$$202 != a$$263);
        if(Nc || Pc && "absolute" == d$$81) {
          f$$28.y -= c$$134.body.offsetTop
        }
        b$$202 = a$$263;
        for(;(b$$202 = Bd(b$$202)) && b$$202 != c$$134.body && b$$202 != g$$19;) {
          f$$28.x -= b$$202.scrollLeft, Nc && "TR" == b$$202.tagName || (f$$28.y -= b$$202.scrollTop)
        }
      }
    }
    return f$$28
  }
  function Bd(a$$262) {
    if(N$$1 && !(N$$1 && 8 <= Vc)) {
      return a$$262.offsetParent
    }
    var b$$201 = cd(a$$262);
    var c$$133 = R$$1(a$$262, "position");
    var d$$80 = "fixed" == c$$133 || "absolute" == c$$133;
    a$$262 = a$$262.parentNode;
    for(;a$$262 && a$$262 != b$$201;a$$262 = a$$262.parentNode) {
      if(c$$133 = R$$1(a$$262, "position"), d$$80 = d$$80 && "static" == c$$133 && a$$262 != b$$201.documentElement && a$$262 != b$$201.body, !d$$80 && (a$$262.scrollWidth > a$$262.clientWidth || a$$262.scrollHeight > a$$262.clientHeight || "fixed" == c$$133 || "absolute" == c$$133 || "relative" == c$$133)) {
        return a$$262
      }
    }
    return null
  }
  function Ad(a$$261) {
    var b$$200;
    try {
      b$$200 = a$$261.getBoundingClientRect()
    }catch(c$$132) {
      return{left:0, top:0, right:0, bottom:0}
    }
    N$$1 && a$$261.ownerDocument.body && (a$$261 = a$$261.ownerDocument, b$$200.left -= a$$261.documentElement.clientLeft + a$$261.body.clientLeft, b$$200.top -= a$$261.documentElement.clientTop + a$$261.body.clientTop);
    return b$$200
  }
  function R$$1(a$$259, b$$199) {
    return yd(a$$259, b$$199) || (a$$259.currentStyle ? a$$259.currentStyle[b$$199] : null) || a$$259.style && a$$259.style[b$$199]
  }
  function yd(a$$258, b$$198) {
    var c$$131 = cd(a$$258);
    return c$$131.defaultView && c$$131.defaultView.getComputedStyle && (c$$131 = c$$131.defaultView.getComputedStyle(a$$258, null)) ? c$$131[b$$198] || c$$131.getPropertyValue(b$$198) || "" : ""
  }
  function wd(a$$256, b$$196, c$$129) {
    var JSCompiler_inline_result$$58;
    JSCompiler_inline_label_xd_152: {
      var a$$inline_148 = a$$256;
      var b$$inline_149 = c$$129;
      var c$$inline_150 = db$$1(b$$inline_149);
      if(void 0 === a$$inline_148.style[c$$inline_150]) {
        var d$$inline_151 = (Pc ? "Webkit" : Oc ? "Moz" : N$$1 ? "ms" : Nc ? "O" : null) + eb$$1(b$$inline_149);
        if(void 0 !== a$$inline_148.style[d$$inline_151]) {
          JSCompiler_inline_result$$58 = d$$inline_151;
          break JSCompiler_inline_label_xd_152
        }
      }
      JSCompiler_inline_result$$58 = c$$inline_150
    }
    (c$$129 = JSCompiler_inline_result$$58) && (a$$256.style[c$$129] = b$$196)
  }
  function Q$$1(a$$255, b$$195, c$$128) {
    p$$1(b$$195) ? wd(a$$255, c$$128, b$$195) : Dc(b$$195, ga$$1(wd, a$$255))
  }
  function P$$1(a$$250, b$$191, c$$125, d$$77) {
    this.top = a$$250;
    this.right = b$$191;
    this.bottom = c$$125;
    this.left = d$$77
  }
  function O$$1(a$$247) {
    this.V = a$$247 || m$$3.document || document
  }
  function md(a$$246) {
    if(a$$246 && "number" == typeof a$$246.length) {
      if(da$$1(a$$246)) {
        return"function" == typeof a$$246.item || "string" == typeof a$$246.item
      }
      if("function" == ba$$1(a$$246)) {
        return"function" == typeof a$$246.item
      }
    }
    return!1
  }
  function ud(a$$245, b$$190, c$$124) {
    if(!(a$$245.nodeName in sd)) {
      if(3 == a$$245.nodeType) {
        c$$124 ? b$$190.push(String(a$$245.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b$$190.push(a$$245.nodeValue)
      }else {
        if(a$$245.nodeName in td) {
          b$$190.push(td[a$$245.nodeName])
        }else {
          a$$245 = a$$245.firstChild;
          for(;a$$245;) {
            ud(a$$245, b$$190, c$$124), a$$245 = a$$245.nextSibling
          }
        }
      }
    }
  }
  function cd(a$$243) {
    return 9 == a$$243.nodeType ? a$$243 : a$$243.ownerDocument || a$$243.document
  }
  function rd(a$$242, b$$188) {
    if(a$$242.contains && 1 == b$$188.nodeType) {
      return a$$242 == b$$188 || a$$242.contains(b$$188)
    }
    if("undefined" != typeof a$$242.compareDocumentPosition) {
      return a$$242 == b$$188 || Boolean(a$$242.compareDocumentPosition(b$$188) & 16)
    }
    for(;b$$188 && a$$242 != b$$188;) {
      b$$188 = b$$188.parentNode
    }
    return b$$188 == a$$242
  }
  function qd(a$$241) {
    return a$$241 && a$$241.parentNode ? a$$241.parentNode.removeChild(a$$241) : null
  }
  function pd(a$$240, b$$187) {
    ld(cd(a$$240), a$$240, arguments, 1)
  }
  function od(a$$239, b$$186) {
    a$$239.appendChild(b$$186)
  }
  function nd(a$$238) {
    if(1 != a$$238.nodeType) {
      return!1
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
        return!1
    }
    return!0
  }
  function ld(a$$237, b$$185, c$$122, d$$76) {
    function e$$50(c$$123) {
      c$$123 && b$$185.appendChild(p$$1(c$$123) ? a$$237.createTextNode(c$$123) : c$$123)
    }
    for(;d$$76 < c$$122.length;d$$76++) {
      var f$$27 = c$$122[d$$76];
      !ca$$1(f$$27) || da$$1(f$$27) && 0 < f$$27.nodeType ? e$$50(f$$27) : Zb(md(f$$27) ? ac(f$$27) : f$$27, e$$50)
    }
  }
  function kd(a$$235, b$$183, c$$120) {
    var JSCompiler_inline_result$$54;
    var b$$inline_140 = arguments;
    var c$$inline_141 = b$$inline_140[0];
    var d$$inline_142 = b$$inline_140[1];
    if(!Wc && d$$inline_142 && (d$$inline_142.name || d$$inline_142.type)) {
      c$$inline_141 = ["<", c$$inline_141];
      d$$inline_142.name && c$$inline_141.push(' name="', Sa$$1(d$$inline_142.name), '"');
      if(d$$inline_142.type) {
        c$$inline_141.push(' type="', Sa$$1(d$$inline_142.type), '"');
        var e$$inline_143 = {};
        Gc(e$$inline_143, d$$inline_142);
        delete e$$inline_143.type;
        d$$inline_142 = e$$inline_143
      }
      c$$inline_141.push(">");
      c$$inline_141 = c$$inline_141.join("")
    }
    c$$inline_141 = document.createElement(c$$inline_141);
    d$$inline_142 && (p$$1(d$$inline_142) ? c$$inline_141.className = d$$inline_142 : n$$2(d$$inline_142) ? ad.apply(null, [c$$inline_141].concat(d$$inline_142)) : fd(c$$inline_141, d$$inline_142));
    2 < b$$inline_140.length && ld(document, c$$inline_141, b$$inline_140, 2);
    JSCompiler_inline_result$$54 = c$$inline_141;
    return JSCompiler_inline_result$$54
  }
  function fd(a$$231, b$$180) {
    Dc(b$$180, function(b$$181, d$$74) {
      "style" == d$$74 ? a$$231.style.cssText = b$$181 : "class" == d$$74 ? a$$231.className = b$$181 : "for" == d$$74 ? a$$231.htmlFor = b$$181 : d$$74 in ed ? a$$231.setAttribute(ed[d$$74], b$$181) : 0 == d$$74.lastIndexOf("aria-", 0) || 0 == d$$74.lastIndexOf("data-", 0) ? a$$231.setAttribute(d$$74, b$$181) : a$$231[d$$74] = b$$181
    })
  }
  function dd(a$$230) {
    return a$$230 ? new O$$1(cd(a$$230)) : Ma$$1 || (Ma$$1 = new O$$1)
  }
  function ad(a$$227, b$$177) {
    var c$$118 = Zc(a$$227);
    var d$$73 = bc(arguments, 1);
    var e$$48 = c$$118.length + d$$73.length;
    var a$$inline_132 = c$$118;
    var b$$inline_133 = d$$73;
    var c$$inline_134 = 0;
    for(;c$$inline_134 < b$$inline_133.length;c$$inline_134++) {
      $b(a$$inline_132, b$$inline_133[c$$inline_134]) || a$$inline_132.push(b$$inline_133[c$$inline_134])
    }
    var b$$inline_137 = c$$118.join(" ");
    a$$227.className = b$$inline_137;
    return c$$118.length == e$$48
  }
  function Zc(a$$226) {
    a$$226 = a$$226.className;
    return p$$1(a$$226) && a$$226.match(/\S+/g) || []
  }
  function Uc(a$$223) {
    var JSCompiler_temp$$77;
    if(JSCompiler_temp$$77 = Tc[a$$223]) {
    }else {
      var JSCompiler_temp_const$$79 = Tc;
      var JSCompiler_temp_const$$78 = a$$223;
      var JSCompiler_inline_result$$80;
      var b$$inline_118 = a$$223;
      var c$$inline_119 = 0;
      var d$$inline_120 = String(Sc).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split(".");
      var e$$inline_121 = String(b$$inline_118).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split(".");
      var f$$inline_122 = Math.max(d$$inline_120.length, e$$inline_121.length);
      var g$$inline_123 = 0;
      for(;0 == c$$inline_119 && g$$inline_123 < f$$inline_122;g$$inline_123++) {
        var h$$inline_124 = d$$inline_120[g$$inline_123] || "";
        var k$$inline_125 = e$$inline_121[g$$inline_123] || "";
        var l$$inline_126 = RegExp("(\\d*)(\\D*)", "g");
        var z$$inline_127 = RegExp("(\\d*)(\\D*)", "g");
        do {
          var C$$inline_128 = l$$inline_126.exec(h$$inline_124) || ["", "", ""];
          var I$$inline_129 = z$$inline_127.exec(k$$inline_125) || ["", "", ""];
          if(0 == C$$inline_128[0].length && 0 == I$$inline_129[0].length) {
            break
          }
          c$$inline_119 = 0 == C$$inline_128[1].length ? 0 : parseInt(C$$inline_128[1], 10);
          var xb$$inline_130 = 0 == I$$inline_129[1].length ? 0 : parseInt(I$$inline_129[1], 10);
          c$$inline_119 = (c$$inline_119 < xb$$inline_130 ? -1 : c$$inline_119 > xb$$inline_130 ? 1 : 0) || ((0 == C$$inline_128[2].length) < (0 == I$$inline_129[2].length) ? -1 : (0 == C$$inline_128[2].length) > (0 == I$$inline_129[2].length) ? 1 : 0) || (C$$inline_128[2] < I$$inline_129[2] ? -1 : C$$inline_128[2] > I$$inline_129[2] ? 1 : 0)
        }while(0 == c$$inline_119)
      }
      JSCompiler_inline_result$$80 = c$$inline_119;
      JSCompiler_temp$$77 = JSCompiler_temp_const$$79[JSCompiler_temp_const$$78] = 0 <= JSCompiler_inline_result$$80
    }
    return JSCompiler_temp$$77
  }
  function Qc() {
    var a$$222 = m$$3.document;
    return a$$222 ? a$$222.documentMode : void 0
  }
  function Rc() {
    var a$$221 = "";
    var b$$174;
    Nc && m$$3.opera ? (a$$221 = m$$3.opera.version, a$$221 = "function" == typeof a$$221 ? a$$221() : a$$221) : (Oc ? b$$174 = /rv\:([^\);]+)(\)|;)/ : N$$1 ? b$$174 = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Pc && (b$$174 = /WebKit\/(\S+)/), b$$174 && (a$$221 = (a$$221 = b$$174.exec(m$$3.navigator ? m$$3.navigator.userAgent : null)) ? a$$221[1] : ""));
    return N$$1 && (b$$174 = Qc(), b$$174 > parseFloat(a$$221)) ? String(b$$174) : a$$221
  }
  function Mc() {
    Kc = Jc = Ic = Hc = !1;
    var a$$220;
    if(a$$220 = m$$3.navigator ? m$$3.navigator.userAgent : null) {
      var b$$173 = m$$3.navigator;
      Hc = 0 == a$$220.lastIndexOf("Opera", 0);
      Ic = !Hc && (-1 != a$$220.indexOf("MSIE") || -1 != a$$220.indexOf("Trident"));
      Jc = !Hc && -1 != a$$220.indexOf("WebKit");
      Kc = !Hc && !Jc && !Ic && "Gecko" == b$$173.product
    }
  }
  function Gc(a$$219, b$$172) {
    var c$$117;
    var d$$72;
    var e$$47 = 1;
    for(;e$$47 < arguments.length;e$$47++) {
      d$$72 = arguments[e$$47];
      for(c$$117 in d$$72) {
        a$$219[c$$117] = d$$72[c$$117]
      }
      var f$$26 = 0;
      for(;f$$26 < Fc.length;f$$26++) {
        c$$117 = Fc[f$$26], Object.prototype.hasOwnProperty.call(d$$72, c$$117) && (a$$219[c$$117] = d$$72[c$$117])
      }
    }
  }
  function Ec(a$$218, b$$171) {
    var c$$116;
    for(c$$116 in a$$218) {
      if(a$$218[c$$116] == b$$171) {
        return!0
      }
    }
    return!1
  }
  function Dc(a$$217, b$$170, c$$115) {
    var d$$71;
    for(d$$71 in a$$217) {
      b$$170.call(c$$115, a$$217[d$$71], d$$71, a$$217)
    }
  }
  function M$$1(a$$213, b$$166) {
    this.x = void 0 !== a$$213 ? a$$213 : 0;
    this.y = void 0 !== b$$166 ? b$$166 : 0
  }
  function L$$1(a$$212, b$$165, c$$113) {
    c$$113 || (c$$113 = Ha$$1 ? "https" : "http");
    return[c$$113, "://", a$$212, b$$165].join("")
  }
  function Bc(a$$211) {
    var b$$164 = a$$211.google_page_location || a$$211.google_page_url;
    "EMPTY" == b$$164 && (b$$164 = a$$211.google_page_url);
    var JSCompiler_inline_result$$20;
    var a$$inline_115 = a$$211;
    a$$inline_115 = a$$inline_115.google_ad_channel;
    JSCompiler_inline_result$$20 = zc.test(a$$inline_115) ? !0 : !1;
    if(JSCompiler_inline_result$$20) {
      return!0
    }
    if(Ga$$1 || !b$$164) {
      return!1
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
    return a$$211
  }
  function xc() {
    var a$$209 = J$$1();
    return a$$209 ? a$$209.Ka() : ""
  }
  function J$$1() {
    if(uc) {
    }else {
      var a$$inline_110 = H$$1();
      var b$$inline_111 = new E$$1;
      var c$$inline_112 = 0;
      var d$$inline_113 = a$$inline_110.defaultBucket.length;
      for(;c$$inline_112 < d$$inline_113;++c$$inline_112) {
        b$$inline_111.defaultBucket.push(a$$inline_110.defaultBucket[c$$inline_112])
      }
      x$$51(a$$inline_110.layers, r$$2(E$$1.prototype.Ga, b$$inline_111));
      uc = b$$inline_111
    }
    return uc
  }
  function H$$1() {
    if(wc()) {
      var a$$208 = tc;
      return a$$208
    }
    a$$208 = mc();
    var JSCompiler_inline_result$$30;
    var b$$inline_108 = new E$$1(1, 3, 4, 7, 10, 12, 13, 14, 16, 17, 18, 19);
    JSCompiler_inline_result$$30 = a$$208.S[nc(3)] = b$$inline_108;
    return tc = JSCompiler_inline_result$$30
  }
  function wc() {
    if(tc && vc(tc)) {
      return!0
    }
    var a$$207 = mc();
    return(a$$207 = G$$1(a$$207, 3)) && gb$$1(a$$207) && hb$$1(a$$207, E$$1.prototype) && vc(a$$207) ? (tc = a$$207, !0) : !1
  }
  function vc(a$$206) {
    try {
      return a$$206.statusz()
    }catch(b$$163) {
      return!1
    }
  }
  function F$$1(a$$202, b$$159, c$$112) {
    a$$202 = a$$202.S;
    b$$159 = nc(b$$159);
    return void 0 === a$$202[b$$159] ? a$$202[b$$159] = c$$112 : a$$202[b$$159]
  }
  function G$$1(a$$200, b$$157) {
    var c$$110 = nc(b$$157);
    return c$$110 = a$$200.S[c$$110]
  }
  function nc(a$$199) {
    switch(a$$199) {
      case 3:
        return"google_exp_persistent";
      case 4:
        return"google_num_sdo_slots";
      case 5:
        return"google_num_0ad_slots";
      case 6:
        return"google_num_ad_slots";
      case 7:
        return"google_correlator";
      case 8:
        return"google_prev_ad_formats_by_region";
      case 9:
        return"google_prev_ad_slotnames_by_region";
      case 10:
        return"google_num_slots_by_channel";
      case 11:
        return"google_viewed_host_channels";
      case 12:
        return"google_num_slot_to_show";
      case 14:
        return"gaGlobal"
    }
  }
  function mc(a$$197) {
    a$$197 = a$$197 && kc[a$$197] ? a$$197 : B$$2 ? "google_persistent_state_async" : "google_persistent_state";
    if(lc[a$$197]) {
      return lc[a$$197]
    }
    if("google_persistent_state_async" == a$$197) {
      var b$$156 = D$$1();
      var c$$109 = {}
    }else {
      c$$109 = b$$156 = D$$1()
    }
    var d$$70 = b$$156[a$$197];
    return"object" != typeof d$$70 || "object" != typeof d$$70.S ? b$$156[a$$197] = lc[a$$197] = new jc(c$$109) : lc[a$$197] = d$$70
  }
  function jc(a$$196) {
    this.S = a$$196;
    F$$1(this, 3, null);
    F$$1(this, 4, 0);
    F$$1(this, 5, 0);
    F$$1(this, 6, 0);
    F$$1(this, 7, (new Date).getTime());
    F$$1(this, 8, {});
    F$$1(this, 9, {});
    F$$1(this, 10, {});
    F$$1(this, 11, []);
    F$$1(this, 12, 0);
    F$$1(this, 14, {})
  }
  function hc() {
    if(gc) {
    }else {
      var a$$inline_103 = window;
      a$$inline_103 = dc(a$$inline_103, !0);
      gc = a$$inline_103.win
    }
    return gc
  }
  function dc(a$$193, b$$155) {
    var c$$108 = 0;
    var d$$69 = a$$193;
    var e$$46 = 0;
    for(;a$$193 != a$$193.parent;) {
      if(a$$193 = a$$193.parent, e$$46++, Kb(a$$193)) {
        d$$69 = a$$193, c$$108 = e$$46
      }else {
        if(b$$155) {
          break
        }
      }
    }
    return{win:d$$69, level:c$$108}
  }
  function E$$1(a$$185) {
    this.defaultBucket = [];
    this.layers = {};
    var b$$148 = 0;
    var c$$105 = arguments.length;
    for(;b$$148 < c$$105;++b$$148) {
      this.layers[arguments[b$$148]] = ""
    }
  }
  function bc(a$$184, b$$147, c$$104) {
    return 2 >= arguments.length ? Xb.slice.call(a$$184, b$$147) : Xb.slice.call(a$$184, b$$147, c$$104)
  }
  function ac(a$$183) {
    var b$$146 = a$$183.length;
    if(0 < b$$146) {
      var c$$103 = Array(b$$146);
      var d$$67 = 0;
      for(;d$$67 < b$$146;d$$67++) {
        c$$103[d$$67] = a$$183[d$$67]
      }
      return c$$103
    }
    return[]
  }
  function $b(a$$182, b$$145) {
    return 0 <= Yb(a$$182, b$$145)
  }
  function Wb(a$$177) {
    B$$2 && a$$177 != a$$177.parent && a$$177.google_async_iframe_close && a$$177.setTimeout(function() {
      a$$177.document.close()
    }, 0)
  }
  function D$$1() {
    if(B$$2 && !Kb(Ob)) {
      var a$$170 = "." + v$$1.domain;
      for(;2 < a$$170.split(".").length && !Kb(Ob);) {
        v$$1.domain = a$$170 = a$$170.substr(a$$170.indexOf(".") + 1), Ob = window.parent
      }
      Kb(Ob) || (Ob = window)
    }
    return Ob
  }
  function Mb(a$$168) {
    return function() {
      if(a$$168) {
        var b$$133 = a$$168;
        a$$168 = null;
        b$$133.apply(null, arguments)
      }
    }
  }
  function Lb(a$$167) {
    return"google_ads_frame" + a$$167
  }
  function Kb(a$$166) {
    try {
      return!!a$$166.location.href || "" === a$$166.location.href
    }catch(b$$132) {
      return!1
    }
  }
  function Hb(a$$163) {
    a$$163 = (new Date).getTime() - a$$163;
    return 1E4 > a$$163 ? a$$163 + "" : "M"
  }
  function Fb(a$$162, b$$130, c$$90) {
    b$$130 = [b$$130.google_ad_slot, b$$130.google_ad_format, b$$130.google_ad_type, b$$130.google_ad_width, b$$130.google_ad_height];
    if(c$$90) {
      var JSCompiler_inline_result$$22;
      var a$$inline_99 = a$$162;
      var b$$inline_100 = [];
      var c$$inline_101 = 0;
      for(;a$$inline_99 && 25 > c$$inline_101;a$$inline_99 = a$$inline_99.parentNode, ++c$$inline_101) {
        b$$inline_100.push(9 != a$$inline_99.nodeType && a$$inline_99.id || "")
      }
      JSCompiler_inline_result$$22 = b$$inline_100.join();
      (a$$162 = JSCompiler_inline_result$$22) && b$$130.push(a$$162)
    }else {
      b$$130.push(Db(a$$162)), b$$130.push(Eb(w$$6))
    }
    return Ab(b$$130.join(":")).toString()
  }
  function Eb(a$$160) {
    var b$$128 = [];
    if(a$$160) {
      try {
        var c$$88 = a$$160.parent;
        var d$$59 = 0;
        for(;c$$88 && c$$88 != a$$160 && 25 > d$$59;++d$$59) {
          var e$$42 = c$$88.frames;
          var f$$23 = 0;
          for(;f$$23 < e$$42.length;++f$$23) {
            if(a$$160 == e$$42[f$$23]) {
              b$$128.push(f$$23);
              break
            }
          }
          a$$160 = c$$88;
          c$$88 = a$$160.parent
        }
      }catch(g$$18) {
      }
    }
    return b$$128.join()
  }
  function Db(a$$159) {
    var b$$127 = [];
    var c$$87 = 0;
    for(;a$$159 && 25 > c$$87;++c$$87) {
      var d$$58 = 9 != a$$159.nodeType && a$$159.id;
      d$$58 = d$$58 ? "/" + d$$58 : "";
      var e$$41 = a$$159.nodeName && a$$159.nodeName.toLowerCase();
      b$$127.push(e$$41 + d$$58 + Cb(a$$159));
      a$$159 = a$$159.parentElement
    }
    return b$$127.join()
  }
  function Cb(a$$158) {
    var b$$126 = a$$158.parentElement;
    var c$$86 = a$$158.nodeName.toLowerCase();
    if(b$$126) {
      b$$126 = b$$126.childNodes;
      var d$$57 = 0;
      var e$$40 = 0;
      for(;e$$40 < b$$126.length;++e$$40) {
        var f$$22 = b$$126[e$$40];
        if(f$$22.nodeName && f$$22.nodeName.toLowerCase() == c$$86) {
          if(a$$158 == f$$22) {
            return"." + d$$57
          }
          ++d$$57
        }
      }
    }
    return""
  }
  function Ab(a$$156, b$$124) {
    var c$$84 = a$$156.length;
    if(0 == c$$84) {
      return 0
    }
    var d$$56 = b$$124 || 305419896;
    var e$$39 = 0;
    for(;e$$39 < c$$84;e$$39++) {
      var f$$21 = a$$156.charCodeAt(e$$39);
      d$$56 = d$$56 ^ (d$$56 << 5) + (d$$56 >> 2) + f$$21 & 4294967295
    }
    return 0 < d$$56 ? d$$56 : 4294967296 + d$$56
  }
  function yb(a$$154) {
    var b$$123 = "google_unique_id";
    a$$154 = a$$154[b$$123];
    return"number" == typeof a$$154 ? a$$154 : 0
  }
  function wb(a$$153) {
    var b$$122 = "google_unique_id";
    a$$153[b$$122] ? ++a$$153[b$$122] : a$$153[b$$122] = 1;
    return a$$153[b$$122]
  }
  function vb(a$$152, b$$121) {
    if(!(1E-4 > Math.random())) {
      var c$$83 = Math.random();
      if(c$$83 < b$$121) {
        try {
          var d$$55 = new Uint16Array(1);
          window.crypto.getRandomValues(d$$55);
          c$$83 = d$$55[0] / 65536
        }catch(e$$38) {
          c$$83 = Math.random()
        }
        c$$83 = Math.floor(c$$83 * a$$152.length);
        return a$$152[c$$83]
      }
    }
    return null
  }
  function ob$$1(a$$151) {
    a$$151 = a$$151 || window;
    try {
      return a$$151.history.length
    }catch(b$$120) {
      return 0
    }
  }
  function nb$$1(a$$150, b$$119) {
    a$$150.google_image_requests || (a$$150.google_image_requests = []);
    var c$$82 = a$$150.document.createElement("img");
    c$$82.src = b$$119;
    a$$150.google_image_requests.push(c$$82)
  }
  function mb$$1(a$$149) {
    "google_onload_fired" in a$$149 || (a$$149.google_onload_fired = !1, y$$32(a$$149, "load", function() {
      a$$149.google_onload_fired = !0
    }))
  }
  function A$$1(a$$148, b$$118, c$$81, d$$54) {
    return a$$148.removeEventListener ? (a$$148.removeEventListener(b$$118, c$$81, d$$54 || !1), !0) : a$$148.detachEvent ? (a$$148.detachEvent("on" + b$$118, c$$81), !0) : !1
  }
  function lb$$1(a$$147, b$$117, c$$80, d$$53, e$$37) {
    c$$80 = r$$2(d$$53, c$$80);
    return y$$32(a$$147, b$$117, c$$80, e$$37) ? c$$80 : null
  }
  function y$$32(a$$146, b$$116, c$$79, d$$52) {
    return a$$146.addEventListener ? (a$$146.addEventListener(b$$116, c$$79, d$$52 || !1), !0) : a$$146.attachEvent ? (a$$146.attachEvent("on" + b$$116, c$$79), !0) : !1
  }
  function ib$$1(a$$145, b$$115) {
    if(2 > arguments.length) {
      return a$$145.length
    }
    var c$$78 = 1;
    var d$$51 = arguments.length;
    for(;c$$78 < d$$51;++c$$78) {
      a$$145.push(arguments[c$$78])
    }
    return a$$145.length
  }
  function hb$$1(a$$144, b$$113) {
    if(!a$$144) {
      return!1
    }
    var c$$77 = !0;
    x$$51(b$$113, function(b$$114, e$$36) {
      c$$77 && e$$36 in a$$144 && typeof b$$114 == typeof a$$144[e$$36] || (c$$77 = !1)
    });
    return c$$77
  }
  function gb$$1(a$$143) {
    return!!a$$143 && ("object" == typeof a$$143 || "function" == typeof a$$143)
  }
  function fb$$1(a$$142) {
    return!!a$$142 && "function" == typeof a$$142 && !!a$$142.call
  }
  function x$$51(a$$141, b$$112) {
    var c$$76;
    for(c$$76 in a$$141) {
      Object.prototype.hasOwnProperty.call(a$$141, c$$76) && b$$112.call(null, a$$141[c$$76], c$$76, a$$141)
    }
  }
  function u$$2(a$$139, b$$110) {
    this.width = a$$139;
    this.height = b$$110
  }
  function eb$$1(a$$137, b$$108) {
    var c$$73 = p$$1(b$$108) ? String(b$$108).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
    c$$73 = c$$73 ? "|[" + c$$73 + "]+" : "";
    c$$73 = RegExp("(^" + c$$73 + ")([a-z])", "g");
    return a$$137.replace(c$$73, function(a$$138, b$$109, c$$74) {
      return b$$109 + c$$74.toUpperCase()
    })
  }
  function db$$1(a$$135) {
    return String(a$$135).replace(/\-([a-z])/g, function(a$$136, c$$72) {
      return c$$72.toUpperCase()
    })
  }
  function ab$$1(a$$131) {
    a$$131 = String(a$$131);
    if(a$$131.quote) {
      return a$$131.quote()
    }
    var b$$104 = ['"'];
    var c$$69 = 0;
    for(;c$$69 < a$$131.length;c$$69++) {
      var d$$49 = a$$131.charAt(c$$69);
      var e$$34 = d$$49.charCodeAt(0);
      var JSCompiler_temp_const$$25 = b$$104;
      var JSCompiler_temp_const$$24 = c$$69 + 1;
      var JSCompiler_temp$$26;
      if(JSCompiler_temp$$26 = Ya$$1[d$$49]) {
      }else {
        var JSCompiler_temp$$27;
        if(31 < e$$34 && 127 > e$$34) {
          JSCompiler_temp$$27 = d$$49
        }else {
          JSCompiler_inline_label_$a$$1_98: {
            var a$$inline_95 = d$$49;
            if(a$$inline_95 in Za$$1) {
              JSCompiler_temp$$27 = Za$$1[a$$inline_95];
              break JSCompiler_inline_label_$a$$1_98
            }
            if(a$$inline_95 in Ya$$1) {
              JSCompiler_temp$$27 = Za$$1[a$$inline_95] = Ya$$1[a$$inline_95];
              break JSCompiler_inline_label_$a$$1_98
            }
            var b$$inline_96 = a$$inline_95;
            var c$$inline_97 = a$$inline_95.charCodeAt(0);
            if(31 < c$$inline_97 && 127 > c$$inline_97) {
              b$$inline_96 = a$$inline_95
            }else {
              if(256 > c$$inline_97) {
                if(b$$inline_96 = "\\x", 16 > c$$inline_97 || 256 < c$$inline_97) {
                  b$$inline_96 += "0"
                }
              }else {
                b$$inline_96 = "\\u", 4096 > c$$inline_97 && (b$$inline_96 += "0")
              }
              b$$inline_96 += c$$inline_97.toString(16).toUpperCase()
            }
            JSCompiler_temp$$27 = Za$$1[a$$inline_95] = b$$inline_96
          }
        }
        JSCompiler_temp$$26 = JSCompiler_temp$$27
      }
      JSCompiler_temp_const$$25[JSCompiler_temp_const$$24] = JSCompiler_temp$$26
    }
    b$$104.push('"');
    return b$$104.join("")
  }
  function Ua$$1(a$$128) {
    return a$$128.replace(/&([^;]+);/g, function(a$$129, c$$67) {
      switch(c$$67) {
        case "amp":
          return"&";
        case "lt":
          return"<";
        case "gt":
          return">";
        case "quot":
          return'"';
        default:
          if("#" == c$$67.charAt(0)) {
            var d$$47 = Number("0" + c$$67.substr(1));
            if(!isNaN(d$$47)) {
              return String.fromCharCode(d$$47)
            }
          }
          return a$$129
      }
    })
  }
  function Ta$$1(a$$126, b$$101) {
    var c$$66 = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'};
    var d$$46;
    d$$46 = b$$101 ? b$$101.createElement("div") : document.createElement("div");
    return a$$126.replace(Wa$$1, function(a$$127, b$$102) {
      var g$$16 = c$$66[a$$127];
      if(g$$16) {
        return g$$16
      }
      if("#" == b$$102.charAt(0)) {
        var h$$12 = Number("0" + b$$102.substr(1));
        isNaN(h$$12) || (g$$16 = String.fromCharCode(h$$12))
      }
      g$$16 || (d$$46.innerHTML = a$$127 + " ", g$$16 = d$$46.firstChild.nodeValue.slice(0, -1));
      return c$$66[a$$127] = g$$16
    })
  }
  function Sa$$1(a$$124, b$$100) {
    if(b$$100) {
      return a$$124.replace(Na$$1, "&amp;").replace(Oa$$1, "&lt;").replace(Pa$$1, "&gt;").replace(Qa$$1, "&quot;")
    }
    if(!Ra$$1.test(a$$124)) {
      return a$$124
    }
    -1 != a$$124.indexOf("&") && (a$$124 = a$$124.replace(Na$$1, "&amp;"));
    -1 != a$$124.indexOf("<") && (a$$124 = a$$124.replace(Oa$$1, "&lt;"));
    -1 != a$$124.indexOf(">") && (a$$124 = a$$124.replace(Pa$$1, "&gt;"));
    -1 != a$$124.indexOf('"') && (a$$124 = a$$124.replace(Qa$$1, "&quot;"));
    return a$$124
  }
  function La$$1(a$$123) {
    return a$$123 ? "googlesyndication" : ma$$1("", "googlesyndication")
  }
  function Ja$$1() {
    return ma$$1("", "doubleclick")
  }
  function Da$$1() {
    var a$$122 = "r20131120";
    return a$$122
  }
  function ma$$1(a$$121, b$$99) {
    if(!a$$121) {
      return b$$99
    }
    var c$$65 = a$$121.match(la$$1);
    return c$$65 ? c$$65[0] : b$$99
  }
  function ka$$1(a$$120, b$$98) {
    return/^true$/.test(a$$120) ? !0 : /^false$/.test(a$$120) ? !1 : b$$98
  }
  function t$$1(a$$119, b$$97) {
    var c$$64 = parseFloat(a$$119);
    return isNaN(c$$64) || 1 < c$$64 || 0 > c$$64 ? b$$97 : c$$64
  }
  function ja$$1(a$$118, b$$96) {
    function c$$63() {
    }
    c$$63.prototype = b$$96.prototype;
    a$$118.md = b$$96.prototype;
    a$$118.prototype = new c$$63;
    a$$118.prototype.constructor = a$$118
  }
  function ga$$1(a$$115, b$$92) {
    var c$$60 = Array.prototype.slice.call(arguments, 1);
    return function() {
      var b$$93 = c$$60.slice();
      b$$93.push.apply(b$$93, arguments);
      return a$$115.apply(this, b$$93)
    }
  }
  function r$$2(a$$114, b$$91, c$$59) {
    r$$2 = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ea$$1 : fa$$1;
    return r$$2.apply(null, arguments)
  }
  function fa$$1(a$$113, b$$90, c$$57) {
    if(!a$$113) {
      throw Error();
    }
    if(2 < arguments.length) {
      var d$$45 = Array.prototype.slice.call(arguments, 2);
      return function() {
        var c$$58 = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(c$$58, d$$45);
        return a$$113.apply(b$$90, c$$58)
      }
    }
    return function() {
      return a$$113.apply(b$$90, arguments)
    }
  }
  function ea$$1(a$$112, b$$89, c$$56) {
    return a$$112.call.apply(a$$112.bind, arguments)
  }
  function da$$1(a$$111) {
    var b$$88 = typeof a$$111;
    return"object" == b$$88 && null != a$$111 || "function" == b$$88
  }
  function q$$3(a$$110) {
    return"number" == typeof a$$110
  }
  function p$$1(a$$109) {
    return"string" == typeof a$$109
  }
  function ca$$1(a$$108) {
    var b$$87 = ba$$1(a$$108);
    return"array" == b$$87 || "object" == b$$87 && "number" == typeof a$$108.length
  }
  function n$$2(a$$107) {
    return"array" == ba$$1(a$$107)
  }
  function ba$$1(a$$106) {
    var b$$86 = typeof a$$106;
    if("object" == b$$86) {
      if(a$$106) {
        if(a$$106 instanceof Array) {
          return"array"
        }
        if(a$$106 instanceof Object) {
          return b$$86
        }
        var c$$55 = Object.prototype.toString.call(a$$106);
        if("[object Window]" == c$$55) {
          return"object"
        }
        if("[object Array]" == c$$55 || "number" == typeof a$$106.length && "undefined" != typeof a$$106.splice && "undefined" != typeof a$$106.propertyIsEnumerable && !a$$106.propertyIsEnumerable("splice")) {
          return"array"
        }
        if("[object Function]" == c$$55 || "undefined" != typeof a$$106.call && "undefined" != typeof a$$106.propertyIsEnumerable && !a$$106.propertyIsEnumerable("call")) {
          return"function"
        }
      }else {
        return"null"
      }
    }else {
      if("function" == b$$86 && "undefined" == typeof a$$106.call) {
        return"object"
      }
    }
    return b$$86
  }
  function aa$$1(a$$105, b$$85, c$$54) {
    a$$105 = a$$105.split(".");
    c$$54 = c$$54 || m$$3;
    a$$105[0] in c$$54 || !c$$54.execScript || c$$54.execScript("var " + a$$105[0]);
    var d$$44;
    for(;a$$105.length && (d$$44 = a$$105.shift());) {
      a$$105.length || void 0 === b$$85 ? c$$54 = c$$54[d$$44] ? c$$54[d$$44] : c$$54[d$$44] = {} : c$$54[d$$44] = b$$85
    }
  }
  function jb$$1(a$$70, b$$56, c$$33, d$$25) {
    d$$25 = d$$25 || document;
    var e$$20 = d$$25.createElement("script");
    e$$20.type = "text/javascript";
    b$$56 && (void 0 !== e$$20.onreadystatechange ? e$$20.onreadystatechange = function() {
      if("complete" == e$$20.readyState || "loaded" == e$$20.readyState) {
        try {
          b$$56()
        }catch(a$$71) {
        }
      }
    } : e$$20.onload = b$$56);
    c$$33 && (e$$20.id = c$$33);
    e$$20.src = a$$70;
    var f$$10 = d$$25.getElementsByTagName("head")[0];
    if(!f$$10) {
      return!1
    }
    try {
      window.setTimeout(function() {
        f$$10.appendChild(e$$20)
      }, 0)
    }catch(g$$8) {
      return!1
    }
    return!0
  }
  function rb$$1() {
    return("msie" in qb$$1 ? qb$$1["msie"] : qb$$1["msie"] = -1 != navigator.userAgent.toLowerCase().indexOf("msie")) && !window.opera
  }
  function tb() {
    if(navigator.plugins && navigator.mimeTypes.length) {
      var a$$75 = navigator.plugins["Shockwave Flash"];
      if(a$$75 && a$$75.description) {
        return a$$75.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
      }
    }else {
      if(navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
        a$$75 = 3;
        var b$$58 = 1;
        for(;b$$58;) {
          try {
            b$$58 = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + (a$$75 + 1)), a$$75++
          }catch(c$$34) {
            b$$58 = null
          }
        }
        return a$$75.toString()
      }
      if(rb$$1()) {
        b$$58 = null;
        try {
          b$$58 = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
        }catch(d$$26) {
          a$$75 = 0;
          try {
            b$$58 = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), a$$75 = 6, b$$58.AllowScriptAccess = "always"
          }catch(e$$21) {
            if(6 == a$$75) {
              return a$$75.toString()
            }
          }
          try {
            b$$58 = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
          }catch(f$$11) {
          }
        }
        if(b$$58) {
          return a$$75 = b$$58.GetVariable("$version").split(" ")[1], a$$75.replace(/,/g, ".")
        }
      }
    }
    return"0"
  }
  function ub(a$$76) {
    var b$$59 = a$$76.google_ad_format;
    return b$$59 ? 0 < b$$59.indexOf("_0ads") : "html" != a$$76.google_ad_output && 0 < a$$76.google_num_radlinks
  }
  function Ze(a$$77, b$$60, c$$35, d$$27) {
    c$$35 = c$$35 || a$$77.google_ad_width;
    d$$27 = d$$27 || a$$77.google_ad_height;
    if(a$$77.top == a$$77) {
      return!1
    }
    var e$$22 = b$$60.documentElement;
    if(c$$35 && d$$27) {
      var f$$12 = 1;
      var g$$9 = 1;
      a$$77.innerHeight ? (f$$12 = a$$77.innerWidth, g$$9 = a$$77.innerHeight) : e$$22 && e$$22.clientHeight ? (f$$12 = e$$22.clientWidth, g$$9 = e$$22.clientHeight) : b$$60.body && (f$$12 = b$$60.body.clientWidth, g$$9 = b$$60.body.clientHeight);
      if(g$$9 > 2 * d$$27 || f$$12 > 2 * c$$35) {
        return!1
      }
    }
    return!0
  }
  function $e(a$$78, b$$61) {
    x$$51(b$$61, function(b$$62, d$$28) {
      a$$78["google_" + d$$28] = b$$62
    })
  }
  function bf(a$$79, b$$63) {
    var c$$36 = af();
    return c$$36 ? c$$36 : b$$63 ? a$$79.referrer : a$$79.URL
  }
  function Jh(a$$90) {
    var b$$74 = 1;
    var c$$45 = 0;
    var d$$36;
    if(void 0 != a$$90 && "" != a$$90) {
      b$$74 = 0, d$$36 = a$$90.length - 1;
      for(;0 <= d$$36;d$$36--) {
        c$$45 = a$$90.charCodeAt(d$$36), b$$74 = (b$$74 << 6 & 268435455) + c$$45 + (c$$45 << 14), c$$45 = b$$74 & 266338304, b$$74 = 0 != c$$45 ? b$$74 ^ c$$45 >> 21 : b$$74
      }
    }
    return b$$74
  }
  function Fh(a$$91, b$$75) {
    if(!a$$91 || "none" == a$$91) {
      return 1
    }
    a$$91 = String(a$$91);
    "auto" == a$$91 && (a$$91 = b$$75, "www." == a$$91.substring(0, 4) && (a$$91 = a$$91.substring(4, a$$91.length)));
    return Jh(a$$91.toLowerCase())
  }
  function ji(a$$94) {
    return null != a$$94 ? '"' + a$$94 + '"' : '""'
  }
  function ii() {
    if(hc() != D$$1()) {
      ze |= 4
    }
    if(Ha$$1) {
      ze |= 16
    }
    if(3 == Xe(document)) {
      ze |= 32
    }
    if("google_dn" in window) {
      ze |= 8
    }
    if(window.google_loader_features_used) {
      ze |= window.google_loader_features_used
    }
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
    if(d$$42 || e$$31 && (e$$31.P() || e$$31.O())) {
      var f$$19 = !1;
      var g$$15 = [];
      d$$42 && g$$15.push(function() {
        return 3 != c$$51.google_top_js_status || f$$19
      });
      e$$31 && e$$31.P() && g$$15.push(function() {
        return null != e$$31.j.deviceOrientation || e$$31.j.didDeviceOrientationCallbacksTimeoutExpire
      });
      e$$31 && e$$31.O() && g$$15.push(function() {
        return null != e$$31.j.deviceAccelerationWithGravity || null != e$$31.j.deviceAccelerationWithoutGravity || e$$31.j.didDeviceMotionCallbacksTimeoutExpire
      });
      var h$$11 = ga$$1(Yi, a$$99, b$$81, e$$31, g$$15);
      d$$42 && (Xi = (new Date).getTime(), c$$51.google_top_js_callbacks = c$$51.google_top_js_callbacks || [], c$$51.google_top_js_callbacks.push(h$$11), b$$81 = function() {
        f$$19 = !0;
        var a$$100 = 0;
        for(;a$$100 < c$$51.google_top_js_callbacks.length;a$$100++) {
          c$$51.google_top_js_callbacks[a$$100] === h$$11 && (c$$51.google_top_js_callbacks.splice(a$$100, 1), h$$11())
        }
      }, window.setTimeout(b$$81, 150));
      e$$31 && e$$31.fb() && e$$31.Gc();
      e$$31 && e$$31.P() && e$$31.nc(h$$11, 1E3);
      e$$31 && e$$31.O() && e$$31.mc(h$$11, 1E3)
    }else {
      Yi(a$$99, b$$81)
    }
  }
  function $h() {
    null == window.google_ad_output && (window.google_ad_output = "html");
    var JSCompiler_temp_const$$579 = window;
    var JSCompiler_inline_result$$580;
    JSCompiler_inline_label_yh_593: {
      var b$$inline_590 = window.google_ad_client;
      if(!b$$inline_590) {
        JSCompiler_inline_result$$580 = "";
        break JSCompiler_inline_label_yh_593
      }
      b$$inline_590 = b$$inline_590.toLowerCase();
      var JSCompiler_inline_result$$inline_591;
      var a$$inline_592 = b$$inline_590;
      a$$inline_592 && "ca-" != a$$inline_592.substring(0, 3) && (a$$inline_592 = "ca-" + a$$inline_592);
      JSCompiler_inline_result$$inline_591 = a$$inline_592;
      JSCompiler_inline_result$$580 = b$$inline_590 = JSCompiler_inline_result$$inline_591
    }
    JSCompiler_temp_const$$579.google_ad_client = JSCompiler_inline_result$$580;
    if(null == window.google_flash_version) {
      var JSCompiler_temp_const$$553 = window;
      var JSCompiler_inline_result$$554;
      JSCompiler_inline_label_sb$$1_595: {
        try {
          JSCompiler_inline_result$$554 = tb()
        }catch(a$$inline_594) {
          JSCompiler_inline_result$$554 = "0"
        }
      }
      JSCompiler_temp_const$$553.google_flash_version = JSCompiler_inline_result$$554
    }
    window.google_ad_section = window.google_ad_section || window.google_ad_region || "";
    window.google_country = window.google_country || window.google_gl || "";
    var a$$inline_93 = (new Date).getTime();
    n$$2(window.google_color_bg) && (window.google_color_bg = zh(window.google_color_bg, a$$inline_93));
    n$$2(window.google_color_text) && (window.google_color_text = zh(window.google_color_text, a$$inline_93));
    n$$2(window.google_color_link) && (window.google_color_link = zh(window.google_color_link, a$$inline_93));
    n$$2(window.google_color_url) && (window.google_color_url = zh(window.google_color_url, a$$inline_93));
    n$$2(window.google_color_border) && (window.google_color_border = zh(window.google_color_border, a$$inline_93));
    n$$2(window.google_color_line) && (window.google_color_line = zh(window.google_color_line, a$$inline_93))
  }
  var m$$3 = this;
  var ha$$1 = Date.now || function() {
    return+new Date
  };
  var la$$1 = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/;
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
  var Ea$$1 = ka$$1("false", !1);
  var Fa$$1 = ka$$1("false", !1);
  var Ga$$1 = ka$$1("false", !1);
  var Ha$$1 = ka$$1("false", !1);
  var Ia$$1 = ka$$1("true", !1);
  var Ma$$1;
  var Na$$1 = /&/g;
  var Oa$$1 = /</g;
  var Pa$$1 = />/g;
  var Qa$$1 = /\"/g;
  var Ra$$1 = /[&<>\"]/;
  var Wa$$1 = /&([^;\s<&]+);?/g;
  var Ya$$1 = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
  var Za$$1 = {"'":"\\'"};
  u$$2.prototype.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
  };
  u$$2.prototype.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
  };
  u$$2.prototype.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
  };
  u$$2.prototype.scale = function(a$$140, b$$111) {
    var c$$75 = q$$3(b$$111) ? b$$111 : a$$140;
    this.width *= a$$140;
    this.height *= c$$75;
    return this
  };
  var v$$1 = document;
  var w$$6 = window;
  La$$1();
  var qb$$1 = {};
  var B$$2 = !!window.google_async_iframe_id;
  var Ob = B$$2 && window.parent || window;
  var Pb = {CONTROL:"C", EXPERIMENT:"E"};
  var Xb = Array.prototype;
  var Yb = Xb.indexOf ? function(a$$178, b$$141, c$$99) {
    return Xb.indexOf.call(a$$178, b$$141, c$$99)
  } : function(a$$179, b$$142, c$$100) {
    c$$100 = null == c$$100 ? 0 : 0 > c$$100 ? Math.max(0, a$$179.length + c$$100) : c$$100;
    if(p$$1(a$$179)) {
      return p$$1(b$$142) && 1 == b$$142.length ? a$$179.indexOf(b$$142, c$$100) : -1
    }
    for(;c$$100 < a$$179.length;c$$100++) {
      if(c$$100 in a$$179 && a$$179[c$$100] === b$$142) {
        return c$$100
      }
    }
    return-1
  };
  var Zb = Xb.forEach ? function(a$$180, b$$143, c$$101) {
    Xb.forEach.call(a$$180, b$$143, c$$101)
  } : function(a$$181, b$$144, c$$102) {
    var d$$66 = a$$181.length;
    var e$$45 = p$$1(a$$181) ? a$$181.split("") : a$$181;
    var f$$25 = 0;
    for(;f$$25 < d$$66;f$$25++) {
      f$$25 in e$$45 && b$$144.call(c$$102, e$$45[f$$25], f$$25, a$$181)
    }
  };
  E$$1.prototype.statusz = function() {
    return!0
  };
  E$$1.prototype.Ga = function(a$$187, b$$150) {
    this.layers[b$$150] = a$$187
  };
  E$$1.prototype.bb = function(a$$188, b$$151) {
    return"" == a$$188 ? "" : b$$151 ? this.layers.hasOwnProperty(b$$151) ? this.layers[b$$151] = a$$188 : "" : (this.defaultBucket.push(a$$188), a$$188)
  };
  E$$1.prototype.k = function(a$$189, b$$152, c$$107) {
    return this.ac(c$$107) && (a$$189 = vb(a$$189, b$$152)) ? this.bb(a$$189, c$$107) : ""
  };
  E$$1.prototype.ac = function(a$$190) {
    return a$$190 ? this.layers.hasOwnProperty(a$$190) && "" == this.layers[a$$190] : !0
  };
  E$$1.prototype.m = function(a$$191) {
    return this.layers.hasOwnProperty(a$$191) ? this.layers[a$$191] : ""
  };
  E$$1.prototype.geil = E$$1.prototype.m;
  E$$1.prototype.Ka = function() {
    function b$$153(b$$154) {
      "" != b$$154 && a$$192.push(b$$154)
    }
    var a$$192 = [];
    x$$51(this.layers, b$$153);
    return 0 < this.defaultBucket.length && 0 < a$$192.length ? this.defaultBucket.join(",") + "," + a$$192.join(",") : this.defaultBucket.join(",") + a$$192.join(",")
  };
  var gc = null;
  var kc = {google_persistent_state:!0, google_persistent_state_async:!0};
  var lc = {};
  var sc;
  var tc;
  var uc;
  var K$$1 = {PERISCOPE_FOR_TARGETING:{CONTROL:"317150300", EXPERIMENT_ZERO_LATENCY:"317150301", EXPERIMENT_WAIT_FOR_POST_MESSAGE_RESPONSE:"317150302", CONTROL_REFERER_CLEANUP:"317150303", EXPERIMENT_REFERER_CLEANUP:"317150304"}, EXPANDABLE_MOBILE_UPDATE:{CONTROL:"86860100", EXPERIMENT:"86860101"}, EXPANDABLE_MOBILE_REVERSE:{CONTROL:"86860104", EXPERIMENT:"86860105"}, PREFETCH_AD_HANDLING:{CONTROL_NO_FRAME:"42631020", ALWAYS_ZRT:"42631021", SERIAL_ZRT:"42631022"}, ASYNC_FOR_OPERA_ANDROID:{CONTROL_ANDROID:"33895177", 
  EXPERIMENT_ANDROID:"33895178", CONTROL_ANDROID_CHROME:"33895187", EXPERIMENT_ANDROID_CHROME:"33895188"}, DEVICE_SENSORS:{CONTROL:"586900001", EXPERIMENT_ZERO_LATENCY:"586900002", EXPERIMENT_WAIT_FOR_EVENT_ARRIVAL:"586900003"}, SS:{COUNT_AD_FRAMES_ON_PAGE_CONTROL:"317150310", COUNT_AD_FRAMES_ON_PAGE_EXPERIMENT:"317150311", BROWSER_DIMENSIONS_CONTROL:"317150312", BROWSER_DIMENSIONS_EXPERIMENT:"317150313"}, TOP_URL_REPLACES_MISSING_URL:{CONTROL:"33895310", EXPERIMENT:"33895311"}, ADD_ADK2:{CONTROL:"33895400", 
  EXPERIMENT:"33895401"}, ASYNC_EXPANSION_EMBED:{CONTROL:"42631004", EXPERIMENT:"42631005"}, JS_RNG:{CONTROL:"42631002", EXPERIMENT:"42631003"}, DIRECT_CALL_RENDER_AD:{CONTROL:"33895322", EXPERIMENT:"33895323"}, ALWAYS_USE_DELAYED_IMPRESSIONS:{CONTROL:"33895330", EXPERIMENT:"33895331"}, PRERENDERING_DELAYED_IMPRESSION:{CONTROL:"33895332", EXPERIMENT:"33895333"}, APPEND_AS_FOR_FORMAT_OVERRIDE:{CONTROL:"373855270", EXPERIMENT:"373855271"}, SEND_LOAD_TIME_PINGBACKS:{EXPERIMENT:"947190536"}};
  var yc = {google:1, googlegroups:1, gmail:1, googlemail:1, googleimages:1, googleprint:1};
  var zc = /PyvSearchAfcNewTemplate/;
  M$$1.prototype.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
  };
  M$$1.prototype.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
  };
  M$$1.prototype.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
  };
  M$$1.prototype.translate = function(a$$215, b$$168) {
    a$$215 instanceof M$$1 ? (this.x += a$$215.x, this.y += a$$215.y) : (this.x += a$$215, q$$3(b$$168) && (this.y += b$$168));
    return this
  };
  M$$1.prototype.scale = function(a$$216, b$$169) {
    var c$$114 = q$$3(b$$169) ? b$$169 : a$$216;
    this.x *= a$$216;
    this.y *= c$$114;
    return this
  };
  var Fc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  var Hc;
  var Ic;
  var Jc;
  var Kc;
  Mc();
  var Nc = Hc;
  var N$$1 = Ic;
  var Oc = Kc;
  var Pc = Jc;
  var Sc = Rc();
  var Tc = {};
  var Vc = function() {
    var a$$224 = m$$3.document;
    if(a$$224 && N$$1) {
      var b$$175 = Qc();
      return b$$175 || ("CSS1Compat" == a$$224.compatMode ? parseInt(Sc, 10) : 5)
    }
  }();
  var Wc = !N$$1 || N$$1 && 9 <= Vc;
  !Oc && !N$$1 || N$$1 && N$$1 && 9 <= Vc || Oc && Uc("1.9.1");
  var Xc = N$$1 && !Uc("9");
  var ed = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
  var sd = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1};
  var td = {IMG:" ", BR:"\n"};
  O$$1.prototype.createElement = function(a$$248) {
    return this.V.createElement(a$$248)
  };
  O$$1.prototype.createTextNode = function(a$$249) {
    return this.V.createTextNode(String(a$$249))
  };
  O$$1.prototype.$b = function() {
    return"CSS1Compat" == this.V.compatMode
  };
  O$$1.prototype.Ja = function() {
    var JSCompiler_inline_result$$2;
    var a$$inline_145 = this.V;
    var b$$inline_146 = Pc || "CSS1Compat" != a$$inline_145.compatMode ? a$$inline_145.body || a$$inline_145.documentElement : a$$inline_145.documentElement;
    a$$inline_145 = a$$inline_145.parentWindow || a$$inline_145.defaultView;
    JSCompiler_inline_result$$2 = N$$1 && Uc("10") && a$$inline_145.pageYOffset != b$$inline_146.scrollTop ? new M$$1(b$$inline_146.scrollLeft, b$$inline_146.scrollTop) : new M$$1(a$$inline_145.pageXOffset || b$$inline_146.scrollLeft, a$$inline_145.pageYOffset || b$$inline_146.scrollTop);
    return JSCompiler_inline_result$$2
  };
  O$$1.prototype.appendChild = od;
  O$$1.prototype.append = pd;
  O$$1.prototype.canHaveChildren = nd;
  O$$1.prototype.removeNode = qd;
  O$$1.prototype.contains = rd;
  P$$1.prototype.contains = function(a$$251) {
    return this && a$$251 ? a$$251 instanceof P$$1 ? a$$251.left >= this.left && a$$251.right <= this.right && a$$251.top >= this.top && a$$251.bottom <= this.bottom : a$$251.x >= this.left && a$$251.x <= this.right && a$$251.y >= this.top && a$$251.y <= this.bottom : !1
  };
  P$$1.prototype.expand = function(a$$252, b$$192, c$$126, d$$78) {
    da$$1(a$$252) ? (this.top -= a$$252.top, this.right += a$$252.right, this.bottom += a$$252.bottom, this.left -= a$$252.left) : (this.top -= a$$252, this.right += b$$192, this.bottom += c$$126, this.left -= d$$78);
    return this
  };
  P$$1.prototype.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
  };
  P$$1.prototype.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
  };
  P$$1.prototype.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
  };
  P$$1.prototype.translate = function(a$$253, b$$193) {
    a$$253 instanceof M$$1 ? (this.left += a$$253.x, this.right += a$$253.x, this.top += a$$253.y, this.bottom += a$$253.y) : (this.left += a$$253, this.right += a$$253, q$$3(b$$193) && (this.top += b$$193, this.bottom += b$$193));
    return this
  };
  P$$1.prototype.scale = function(a$$254, b$$194) {
    var c$$127 = q$$3(b$$194) ? b$$194 : a$$254;
    this.left *= a$$254;
    this.right *= a$$254;
    this.top *= c$$127;
    this.bottom *= c$$127;
    return this
  };
  var Sd = /[^\d]+$/;
  var Ud = {cm:1, "in":1, mm:1, pc:1, pt:1};
  var Vd = {em:1, ex:1};
  var Xd = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
  var he = "";
  var ie = 0;
  var je = 0;
  ke(Ha$$1, La$$1(!1), oa$$1, pa$$1);
  S$$1.prototype.oc = function(a$$294, b$$230) {
    var c$$157 = this.ha;
    var d$$94 = this.wa[b$$230];
    d$$94 && (d$$94 = d$$94.orig_callback || d$$94, this.wa[b$$230] = function(b$$231) {
      if(b$$231 && 0 < b$$231.length) {
        var f$$34 = 1 < b$$231.length ? b$$231[1].url : null;
        var g$$22 = b$$231[0].log_info || null;
        var h$$15 = b$$231[0].activeview_url || null;
        c$$157.push([a$$294, -1 != b$$231[0].url.indexOf("&") ? "document" in m$$3 ? Ta$$1(b$$231[0].url) : Ua$$1(b$$231[0].url) : b$$231[0].url, f$$34, g$$22, null, h$$15])
      }
      d$$94(b$$231)
    }, this.wa[b$$230].orig_callback = d$$94)
  };
  S$$1.prototype.bc = function() {
    this.Ua || (mb$$1(D$$1()), jb$$1(he), this.Ua = !0)
  };
  S$$1.prototype.Fa = function(a$$295, b$$232, c$$158) {
    var d$$95 = this.ha;
    if(0 < d$$95.length) {
      var e$$58 = a$$295.document.getElementsByTagName("a");
      var f$$35 = 0;
      for(;f$$35 < e$$58.length;f$$35++) {
        var g$$23 = 0;
        for(;g$$23 < d$$95.length;g$$23++) {
          var h$$16 = d$$95[g$$23][1];
          if(0 <= e$$58[f$$35].href.indexOf(h$$16)) {
            h$$16 = e$$58[f$$35].parentNode;
            if(d$$95[g$$23][2]) {
              var k$$6 = h$$16;
              var l$$9 = 0;
              for(;4 > l$$9;l$$9++) {
                if(0 <= k$$6.innerHTML.indexOf(d$$95[g$$23][2])) {
                  h$$16 = k$$6;
                  break
                }
                k$$6 = k$$6.parentNode
              }
            }
            k$$6 = !0;
            l$$9 = d$$95[g$$23][3];
            var z$$4 = d$$95[g$$23][5];
            b$$232(h$$16, d$$95[g$$23][0], c$$158 || 0, k$$6, l$$9, void 0, z$$4);
            d$$95.splice(g$$23, 1);
            break
          }
        }
      }
    }
    if(0 < d$$95.length && a$$295 != hc()) {
      try {
        this.Fa(a$$295.parent, b$$232, c$$158)
      }catch(C$$2) {
      }
    }
  };
  S$$1.prototype.Na = function(a$$296, b$$233) {
    b$$233 && this.Fa(this.wa, a$$296, 1);
    var c$$159 = this.q.length;
    var d$$96 = 0;
    for(;d$$96 < c$$159;d$$96++) {
      var e$$59 = this.q[d$$96];
      !e$$59.Vb && e$$59.kb && (a$$296(e$$59.kb, e$$59.nb, e$$59.fd, e$$59.lb, "", e$$59.Yc, ""), e$$59.Vb = !0)
    }
    b$$233 && (this.xa = a$$296)
  };
  S$$1.prototype.getRegisteredAdblockUrls = function() {
    var a$$297 = [];
    var b$$234 = this.q.length;
    var c$$160 = 0;
    for(;c$$160 < b$$234;c$$160++) {
      var d$$97 = this.q[c$$160];
      a$$297.push(d$$97.nb)
    }
    return a$$297
  };
  S$$1.prototype.setupOse = function(a$$298) {
    if(this.getOseId()) {
      return this.getOseId()
    }
    var b$$235 = window.google_enable_ose;
    var c$$161;
    !0 === b$$235 ? c$$161 = 2 : !1 !== b$$235 && ((c$$161 = vb([2], ie)) || (c$$161 = vb([3], je)));
    if(!c$$161) {
      return 0
    }
    this.Wa = c$$161;
    this.Aa = String(a$$298 || 0);
    return this.getOseId()
  };
  S$$1.prototype.getEid = function() {
    return""
  };
  S$$1.prototype.getOseExpId = function() {
    return this.Db
  };
  S$$1.prototype.getOseId = function() {
    return window ? this.Wa : 0
  };
  S$$1.prototype.getCorrelator = function() {
    return this.Aa
  };
  S$$1.prototype.La = function() {
    return this.ha.length + this.q.length
  };
  S$$1.prototype.registerAdBlock = function(a$$299, b$$236, c$$162, d$$98, e$$60, f$$36) {
    var g$$24 = null;
    e$$60 && f$$36 && (g$$24 = new u$$2(e$$60, f$$36));
    if(this.xa && d$$98) {
      this.xa(d$$98, a$$299, b$$236, !0, "", g$$24, "")
    }else {
      if("js" == c$$162) {
        this.oc(a$$299, "google_ad_request_done")
      }else {
        var h$$17 = new le(a$$299, b$$236, c$$162, d$$98, g$$24);
        this.q.push(h$$17);
        d$$98 && (a$$299 = function() {
          h$$17.lb = !0
        }, fe(d$$98, a$$299))
      }
      this.bc()
    }
  };
  S$$1.prototype.setUpForcePeriscope = function() {
    window.google_enable_ose_periscope && (this.Lb = !0)
  };
  S$$1.prototype.shouldForcePeriscope = function() {
    return this.Lb
  };
  aa$$1("Goog_AdSense_getAdAdapterInstance", me, void 0);
  aa$$1("Goog_AdSense_OsdAdapter", S$$1, void 0);
  aa$$1("Goog_AdSense_OsdAdapter.prototype.numBlocks", S$$1.prototype.La, void 0);
  aa$$1("Goog_AdSense_OsdAdapter.prototype.getNewBlocks", S$$1.prototype.Na, void 0);
  aa$$1("Goog_AdSense_OsdAdapter.prototype.getEid", S$$1.prototype.getEid, void 0);
  aa$$1("Goog_AdSense_OsdAdapter.prototype.getOseExpId", S$$1.prototype.getOseExpId, void 0);
  aa$$1("Goog_AdSense_OsdAdapter.prototype.getOseId", S$$1.prototype.getOseId, void 0);
  aa$$1("Goog_AdSense_OsdAdapter.prototype.getCorrelator", S$$1.prototype.getCorrelator, void 0);
  aa$$1("Goog_AdSense_OsdAdapter.prototype.getRegisteredAdblockUrls", S$$1.prototype.getRegisteredAdblockUrls, void 0);
  aa$$1("Goog_AdSense_OsdAdapter.prototype.setupOse", S$$1.prototype.setupOse, void 0);
  aa$$1("Goog_AdSense_OsdAdapter.prototype.registerAdBlock", S$$1.prototype.registerAdBlock, void 0);
  aa$$1("Goog_AdSense_OsdAdapter.prototype.setUpForcePeriscope", S$$1.prototype.setUpForcePeriscope, void 0);
  aa$$1("Goog_AdSense_OsdAdapter.prototype.shouldForcePeriscope", S$$1.prototype.shouldForcePeriscope, void 0);
  var pe = {client:"google_ad_client", format:"google_ad_format", slotname:"google_ad_slot", output:"google_ad_output", ad_type:"google_ad_type", async_oa:"google_async_for_oa_experiment", zrtm:"google_ad_handling_mode", dimpr:"google_always_use_delayed_impressions_experiment", peri:"google_top_experiment"};
  aa$$1("google_protectAndRun", te, void 0);
  aa$$1("google_handleError", ve, void 0);
  var ze = 0;
  Be.prototype.serialize = function(a$$316) {
    var b$$250 = [];
    this.n(a$$316, b$$250);
    return b$$250.join("")
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
        if(null == a$$317) {
          b$$251.push("null");
          break
        }
        if(a$$317 instanceof Array) {
          this.yc(a$$317, b$$251);
          break
        }
        this.M(a$$317, b$$251);
        break;
      case "function":
        break;
      default:
        throw Error("Unknown type: " + typeof a$$317);
    }
  };
  var Ce = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
  var De = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
  Be.prototype.r = function(a$$318, b$$252) {
    b$$252.push('"');
    b$$252.push(a$$318.replace(De, function(a$$319) {
      if(a$$319 in Ce) {
        return Ce[a$$319]
      }
      var b$$253 = a$$319.charCodeAt(0);
      var e$$66 = "\\u";
      16 > b$$253 ? e$$66 += "000" : 256 > b$$253 ? e$$66 += "00" : 4096 > b$$253 && (e$$66 += "0");
      return Ce[a$$319] = e$$66 + b$$253.toString(16)
    }));
    b$$252.push('"')
  };
  Be.prototype.L = function(a$$320, b$$254) {
    b$$254.push(isFinite(a$$320) && !isNaN(a$$320) ? a$$320 : "null")
  };
  Be.prototype.yc = function(a$$321, b$$255) {
    var c$$172 = a$$321.length;
    b$$255.push("[");
    var d$$108 = "";
    var e$$67 = 0;
    for(;e$$67 < c$$172;e$$67++) {
      b$$255.push(d$$108), this.n(a$$321[e$$67], b$$255), d$$108 = ","
    }
    b$$255.push("]")
  };
  Be.prototype.M = function(a$$322, b$$256) {
    b$$256.push("{");
    var c$$173 = "";
    var d$$109;
    for(d$$109 in a$$322) {
      if(a$$322.hasOwnProperty(d$$109)) {
        var e$$68 = a$$322[d$$109];
        "function" != typeof e$$68 && (b$$256.push(c$$173), this.r(d$$109, b$$256), b$$256.push(":"), this.n(e$$68, b$$256), c$$173 = ",")
      }
    }
    b$$256.push("}")
  };
  var Fe = /Firefox/;
  var Ge = {CONTROL_NO_FRAME:"XN", PARALLEL_CANCEL_ON_NO_AD:"PC", IFRAME_SIGNALING:"EI", ALWAYS_ZRT:"AZ", SERIAL:"S"};
  var He = {PARALLEL:"K", PARALLEL_W_IFRAME_SIGNALING:"I", PARALLEL_W_ALWAYS_ZRT:"Z", SERIAL:"U"};
  var Ie = /\.((google(|groups|mail|images|print))|gmail)\./;
  var Ne = Sa$$1("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");
  Me.prototype.set = function(a$$329, b$$262) {
    this.hd.handlers[a$$329] = b$$262;
    this.p.addEventListener && this.p.addEventListener("load", r$$2(this.Jb, this, a$$329), !1)
  };
  Me.prototype.Jb = function(a$$330) {
    a$$330 = this.p.document.getElementById(a$$330);
    var b$$263 = a$$330.contentWindow.document;
    if(a$$330.onload && b$$263 && (!b$$263.body || !b$$263.body.firstChild)) {
      a$$330.onload()
    }
  };
  Me.prototype.Qc = function(a$$331, b$$264) {
    var c$$177 = Oe("rs", a$$331);
    var d$$110 = ce(a$$331, "dt");
    c$$177 = c$$177.replace(/&dtd=(\d+|M)/, "&dtd=" + Hb(d$$110));
    this.set(b$$264, c$$177);
    return c$$177
  };
  var Pe = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
  var Se = Pc;
  var T$$1 = {getIframingState:function(a$$339, b$$270) {
    var c$$182 = T$$1;
    if(a$$339.top == a$$339) {
      return c$$182.NO_IFRAMING
    }
    if(b$$270) {
      var d$$113 = a$$339.location.ancestorOrigins;
      if(d$$113) {
        return d$$113[d$$113.length - 1] == a$$339.location.origin ? c$$182.SAME_DOMAIN_IFRAMING : c$$182.CROSS_DOMAIN_IFRAMING
      }
    }
    return Kb(a$$339.top) ? c$$182.SAME_DOMAIN_IFRAMING : c$$182.CROSS_DOMAIN_IFRAMING
  }, frameCountsWithDelayedPingback:function(a$$340, b$$271, c$$183, d$$114) {
    var e$$69 = T$$1.Ha(a$$340.top, a$$340, 0);
    window.setTimeout(ga$$1(T$$1.Uc, a$$340, b$$271, c$$183, d$$114, e$$69.adFrames), T$$1.IFRAME_COUNTS_DELAY);
    return e$$69.adFrames
  }, Uc:function(a$$341, b$$272, c$$184, d$$115, e$$70) {
    a$$341 = T$$1.Ha(a$$341.top, a$$341, 0);
    var f$$42 = a$$341.signature.substring(0, 1800);
    b$$272 = {frmn:a$$341.adFrames, frms:f$$42, adk:b$$272, correlator:c$$184, frm:d$$115, frmn0:e$$70};
    c$$184 = L$$1(La$$1(), "/pagead/gen_204?id=frmn");
    var JSCompiler_inline_result$$61;
    var a$$inline_260 = [c$$184];
    var b$$inline_261 = b$$272;
    var c$$inline_262;
    for(c$$inline_262 in b$$inline_261) {
      Ve(c$$inline_262, b$$inline_261[c$$inline_262], a$$inline_260)
    }
    JSCompiler_inline_result$$61 = a$$inline_260;
    var a$$inline_264 = JSCompiler_inline_result$$61;
    if(a$$inline_264[1]) {
      var b$$inline_265 = a$$inline_264[0];
      var c$$inline_266 = b$$inline_265.indexOf("#");
      0 <= c$$inline_266 && (a$$inline_264.push(b$$inline_265.substr(c$$inline_266)), a$$inline_264[0] = b$$inline_265 = b$$inline_265.substr(0, c$$inline_266));
      c$$inline_266 = b$$inline_265.indexOf("?");
      0 > c$$inline_266 ? a$$inline_264[1] = "?" : c$$inline_266 == b$$inline_265.length - 1 && (a$$inline_264[1] = void 0)
    }
    c$$184 = a$$inline_264.join("");
    nb$$1(w$$6, c$$184)
  }, Ha:function(a$$342, b$$273, c$$185) {
    var d$$116;
    var e$$71 = {signature:"", adFrames:0};
    if(c$$185 > T$$1.MAXIMUM_IFRAME_DEPTH) {
      return e$$71
    }
    try {
      d$$116 = a$$342[T$$1.NAME_FIRST_GOOGLE_WINDOW]
    }catch(f$$43) {
    }
    d$$116 && (e$$71.signature = a$$342 == b$$273 ? "I" : "A", e$$71.adFrames = 1);
    var g$$27 = 0;
    for(;g$$27 < a$$342.length;g$$27++) {
      var h$$19 = a$$342[g$$27];
      h$$19 != d$$116 && (h$$19 = T$$1.Ha(h$$19, b$$273, c$$185 + 1), e$$71.adFrames += h$$19.adFrames, e$$71.signature = h$$19.signature ? e$$71.signature + ("!" + h$$19.signature + "~") : e$$71.signature + "o")
    }
    return e$$71
  }, NO_IFRAMING:0, SAME_DOMAIN_IFRAMING:1, CROSS_DOMAIN_IFRAMING:2, NAME_FIRST_GOOGLE_WINDOW:"aswift_0", IFRAME_COUNTS_DELAY:2E3, MAXIMUM_IFRAME_DEPTH:20};
  var mf;
  U$$1.prototype.enqueue = function(a$$350, b$$279) {
    0 != this.j || 0 != this.oa.length || b$$279 && b$$279 != window ? this.Y(a$$350, b$$279) : (this.j = 2, this.ab(new nf(a$$350, window)))
  };
  U$$1.prototype.Y = function(a$$351, b$$280) {
    this.oa.push(new nf(a$$351, b$$280 || this.p));
    this.sa()
  };
  U$$1.prototype.Xa = function(a$$352) {
    this.j = 1;
    if(a$$352) {
      var b$$281 = xe("sjr::timeout", r$$2(this.ra, this));
      this.na = this.p.setTimeout(b$$281, a$$352)
    }
  };
  U$$1.prototype.ra = function() {
    1 == this.j && (null != this.na && (this.p.clearTimeout(this.na), this.na = null), this.j = 0);
    this.sa()
  };
  U$$1.prototype.statusz = function() {
    return!(!window || !Array)
  };
  U$$1.prototype["nq"] = U$$1.prototype.enqueue;
  U$$1.prototype["nqa"] = U$$1.prototype.Y;
  U$$1.prototype["al"] = U$$1.prototype.Xa;
  U$$1.prototype["rl"] = U$$1.prototype.ra;
  U$$1.prototype["sz"] = U$$1.prototype.statusz;
  U$$1.prototype.sa = function() {
    var a$$353 = xe("sjr::tryrun", r$$2(this.Oc, this));
    this.p.setTimeout(a$$353, 0)
  };
  U$$1.prototype.Oc = function() {
    if(0 == this.j && this.oa.length) {
      var a$$354 = this.oa.shift();
      this.j = 2;
      var b$$282 = xe("sjr::run", r$$2(this.ab, this, a$$354));
      a$$354.win.setTimeout(b$$282, 0);
      this.sa()
    }
  };
  U$$1.prototype.ab = function(a$$355) {
    this.j = 0;
    a$$355.fn()
  };
  var vf = (new Date).getTime();
  var wf = {"120x90":!0, "160x90":!0, "180x90":!0, "200x90":!0, "468x15":!0, "728x15":!0};
  var Sf = {EXPERIMENT:"E", CONTROL:"C"};
  var Of = {CONTROL:"jp_c", EXPERIMENT_ZERO_LATENCY:"jp_zl", EXPERIMENT_WAIT_FOR_POST_MESSAGE_RESPONSE:"jp_wfpmr"};
  var Uf = {CONTROL:"c", EXPERIMENT:"e"};
  var Wf = {};
  var Yf = Xf("zx");
  var Zf = Xf("zc");
  var $f = Xf("zd");
  var ag = {READY:"zr", CANCEL:Yf, CANCEL_CTRL:Zf, CANCEL_CTRL_DELAYED_IMPR:$f};
  var bg = null;
  V$$1.prototype.jb = function() {
    return this.va
  };
  V$$1.prototype.la = function() {
    return this.ma
  };
  V$$1.prototype.Ya = function() {
    return this.hc
  };
  V$$1.prototype.Ia = function() {
    return this.za
  };
  V$$1.prototype.Ta = function() {
    return this.va || this.ma
  };
  V$$1.prototype.Rc = function() {
    var a$$390 = Ge;
    return this.Za == a$$390.IFRAME_SIGNALING || this.Za == a$$390.ALWAYS_ZRT
  };
  V$$1.prototype.ya = function() {
    this.F = "";
    this.ma = this.jc = !0;
    this.U = null;
    this.hc && (A$$1(this.Q, "message", this.K), this.ta(this.J(), Yf))
  };
  V$$1.prototype.zc = function(a$$391, b$$308) {
    if(!this.ma) {
      if(this.F = a$$391, this.U = b$$308, this.hc) {
        try {
          this.gb(this.J())
        }catch(c$$206) {
          this.Sb = !0, b$$308(this.v(), null, !1)
        }
      }else {
        "AZ" == this.Za && this.wb()
      }
    }
  };
  V$$1.prototype.wb = function() {
    var a$$392 = this.F;
    if(a$$392) {
      var b$$309 = ce(a$$392, "w");
      var c$$207 = ce(a$$392, "h");
      var d$$132 = ce(a$$392, "ifi");
      d$$132 = Lb(d$$132);
      d$$132 = {id:d$$132, name:d$$132};
      Ff(d$$132, b$$309, c$$207, !1, Df(a$$392));
      this.Q.document.write(Cf(d$$132));
      this.va = !0
    }
  };
  V$$1.prototype.v = function() {
    var JSCompiler_inline_result$$8;
    var a$$inline_329 = this.Fc;
    var b$$inline_330 = this.Tb;
    var c$$inline_331 = this.Pa;
    var d$$inline_332 = this.Sb;
    a$$inline_329 = a$$inline_329 ? 8 : 0;
    b$$inline_330 = b$$inline_330 ? 16 : 0;
    c$$inline_331 = c$$inline_331 ? 32 : 0;
    d$$inline_332 = d$$inline_332 ? 64 : 0;
    JSCompiler_inline_result$$8 = a$$inline_329 | b$$inline_330 | c$$inline_331 | d$$inline_332;
    return JSCompiler_inline_result$$8
  };
  V$$1.prototype.Ec = function() {
    this.Fc = !0
  };
  V$$1.prototype.da = function(a$$394, b$$311, c$$209) {
    return Wf[a$$394] ? (this.Ac(c$$209, a$$394), !0) : "zr" == a$$394 ? (this.Dc(c$$209), this.F && this.gb(b$$311), !0) : !1
  };
  V$$1.prototype.Qa = function(a$$395) {
    var b$$312 = this.J();
    if(this.Fb == a$$395.origin && b$$312 && b$$312.contentWindow == a$$395.source) {
      a$$395 = a$$395.data;
      var c$$210 = !0;
      this.da(a$$395, b$$312, c$$210) && (A$$1(this.Q, "message", this.K), this.R(), this.ma && (this.ta(b$$312, Yf), b$$312 = this.U, this.U = null, b$$312 && b$$312(this.v(), this.za, !0)))
    }
  };
  V$$1.prototype.J = function() {
    return this.Q.document.getElementById("zrt_ads_frame" + this.Q.google_unique_id)
  };
  V$$1.prototype.ta = function(a$$396, b$$313) {
    a$$396 && a$$396.contentWindow && a$$396.contentWindow.postMessage(b$$313, this.Fb)
  };
  V$$1.prototype.gb = function(a$$397) {
    this.va || (this.ta(a$$397, this.F), this.va = !0, a$$397.style.display = "")
  };
  V$$1.prototype.eb = function(a$$398) {
    this.jc || (a$$398 ? this.Tb = !0 : this.Pa = !0)
  };
  V$$1.prototype.Ac = function(a$$399, b$$314) {
    this.eb(a$$399);
    this.ma = !0;
    switch(b$$314) {
      case Zf:
        this.za = 453848234;
        break;
      case $f:
        this.za = 453848236
    }
  };
  V$$1.prototype.Dc = function(a$$400) {
    this.eb(a$$400);
    this.hc = !0
  };
  V$$1.prototype.R = function() {
    if(this.Rc() && !this.Pa) {
      var a$$402 = this.J();
      var b$$316 = a$$402 && a$$402.contentWindow;
      if(b$$316) {
        var c$$212 = ga$$1(eg, b$$316);
        var d$$134 = r$$2(V$$1.prototype.da, this);
        b$$316 = ag;
        var e$$76 = !1;
        var f$$49 = !1;
        x$$51(b$$316, function(b$$317) {
          !e$$76 && c$$212(b$$317) && (d$$134(b$$317, a$$402, f$$49), e$$76 = !0)
        })
      }
    }
  };
  hg.prototype.serialize = function(a$$406) {
    var b$$320 = [];
    this.n(a$$406, b$$320);
    return b$$320.join("")
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
        if(null == a$$407) {
          b$$321.push("null");
          break
        }
        if(n$$2(a$$407)) {
          this.xc(a$$407, b$$321);
          break
        }
        this.M(a$$407, b$$321);
        break;
      case "function":
        break;
      default:
        throw Error("Unknown type: " + typeof a$$407);
    }
  };
  var ig = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
  var jg = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
  hg.prototype.r = function(a$$408, b$$322) {
    b$$322.push('"', a$$408.replace(jg, function(a$$409) {
      if(a$$409 in ig) {
        return ig[a$$409]
      }
      var b$$323 = a$$409.charCodeAt(0);
      var e$$78 = "\\u";
      16 > b$$323 ? e$$78 += "000" : 256 > b$$323 ? e$$78 += "00" : 4096 > b$$323 && (e$$78 += "0");
      return ig[a$$409] = e$$78 + b$$323.toString(16)
    }), '"')
  };
  hg.prototype.L = function(a$$410, b$$324) {
    b$$324.push(isFinite(a$$410) && !isNaN(a$$410) ? a$$410 : "null")
  };
  hg.prototype.xc = function(a$$411, b$$325) {
    var c$$214 = a$$411.length;
    b$$325.push("[");
    var d$$136 = "";
    var e$$79 = 0;
    for(;e$$79 < c$$214;e$$79++) {
      b$$325.push(d$$136), d$$136 = a$$411[e$$79], this.n(this.qa ? this.qa.call(a$$411, String(e$$79), d$$136) : d$$136, b$$325), d$$136 = ","
    }
    b$$325.push("]")
  };
  hg.prototype.M = function(a$$412, b$$326) {
    b$$326.push("{");
    var c$$215 = "";
    var d$$137;
    for(d$$137 in a$$412) {
      if(Object.prototype.hasOwnProperty.call(a$$412, d$$137)) {
        var e$$80 = a$$412[d$$137];
        "function" != typeof e$$80 && (b$$326.push(c$$215), this.r(d$$137, b$$326), b$$326.push(":"), this.n(this.qa ? this.qa.call(a$$412, d$$137, e$$80) : e$$80, b$$326), c$$215 = ",")
      }
    }
    b$$326.push("}")
  };
  var kg = {FLOATING:1, INTERSTITIAL:2};
  var lg = {FLOATING_BOTTOM:1, GDN_INTERSTITIAL:8};
  var mg = {"http://doubleclick":!0, "http://googlesyndication":!0, "https://doubleclick":!0, "https://googlesyndication":!0};
  var sg = /([0-9.]+)px/;
  var tg = [{width:120, height:240, format:"vertical"}, {width:120, height:600, format:"vertical"}, {width:125, height:125, format:"rectangle"}, {width:160, height:600, format:"vertical"}, {width:180, height:150, format:"rectangle"}, {width:200, height:200, format:"rectangle"}, {width:234, height:60, format:"horizontal"}, {width:250, height:250, format:"rectangle"}, {width:300, height:250, format:"rectangle"}, {width:300, height:600, format:"vertical"}, {width:320, height:50, format:"horizontal"}, 
  {width:336, height:280, format:"rectangle"}, {width:468, height:60, format:"horizontal"}, {width:728, height:90, format:"horizontal"}, {width:970, height:90, format:"horizontal"}];
  var Bg = ["google_analytics_uacct", "google_analytics_domain_name"];
  Mg.prototype.ja = function(a$$434, b$$338) {
    var JSCompiler_inline_result$$35;
    var a$$inline_346 = b$$338;
    var b$$inline_347 = new Kg;
    b$$inline_347.adClient = a$$inline_346;
    b$$inline_347.adWidth = 320;
    b$$inline_347.adHeight = 50;
    b$$inline_347.adTest = "on";
    JSCompiler_inline_result$$35 = b$$inline_347;
    this.l = JSCompiler_inline_result$$35;
    this.D(a$$434)
  };
  Mg.prototype.ia = function(a$$435) {
    var JSCompiler_inline_result$$23;
    JSCompiler_inline_label_Lg_352: {
      var a$$inline_349 = a$$435;
      if(!a$$inline_349) {
        JSCompiler_inline_result$$23 = null;
        break JSCompiler_inline_label_Lg_352
      }
      var b$$inline_350 = new Kg;
      var c$$inline_351 = a$$inline_349.adClient;
      p$$1(c$$inline_351) && (b$$inline_350.adClient = c$$inline_351);
      c$$inline_351 = a$$inline_349.adWidth;
      q$$3(c$$inline_351) && 0 < c$$inline_351 && (b$$inline_350.adWidth = c$$inline_351);
      c$$inline_351 = a$$inline_349.adHeight;
      q$$3(c$$inline_351) && 0 < c$$inline_351 && (b$$inline_350.adHeight = c$$inline_351);
      c$$inline_351 = a$$inline_349.adSlot;
      p$$1(c$$inline_351) && (b$$inline_350.adSlot = c$$inline_351);
      c$$inline_351 = a$$inline_349.adChannel;
      p$$1(c$$inline_351) && (b$$inline_350.adChannel = c$$inline_351);
      a$$inline_349 = a$$inline_349.adTest;
      p$$1(a$$inline_349) && (b$$inline_350.adTest = a$$inline_349);
      JSCompiler_inline_result$$23 = b$$inline_350.adClient && b$$inline_350.adWidth && b$$inline_350.adHeight ? b$$inline_350 : null
    }
    return(this.l = JSCompiler_inline_result$$23) ? !0 : !1
  };
  Mg.prototype.D = function(a$$436) {
    if(this.l) {
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
      var a$$inline_353 = c$$225;
      var b$$inline_354 = d$$143;
      var c$$inline_355 = a$$436;
      c$$inline_355 = c$$inline_355 || window;
      Cg(a$$inline_353);
      Dg(a$$inline_353, b$$inline_354, c$$inline_355)
    }
  };
  Qg.prototype.ja = function(a$$439, b$$342) {
    this.l = new Og;
    this.l.adClient = b$$342;
    this.l.adTest = "on";
    this.D(a$$439)
  };
  Qg.prototype.ia = function(a$$440) {
    var JSCompiler_inline_result$$66;
    JSCompiler_inline_label_Pg_360: {
      var a$$inline_357 = a$$440;
      if(!a$$inline_357) {
        JSCompiler_inline_result$$66 = null;
        break JSCompiler_inline_label_Pg_360
      }
      var b$$inline_358 = new Og;
      var c$$inline_359 = a$$inline_357.adClient;
      p$$1(c$$inline_359) && (b$$inline_358.adClient = c$$inline_359);
      a$$inline_357 = a$$inline_357.adTest;
      p$$1(a$$inline_357) && (b$$inline_358.adTest = a$$inline_357);
      JSCompiler_inline_result$$66 = b$$inline_358.adClient ? b$$inline_358 : null
    }
    return(this.l = JSCompiler_inline_result$$66) ? !0 : !1
  };
  Qg.prototype.D = function(a$$441) {
    if(this.l) {
      var b$$343 = this.l;
      var c$$227 = a$$441.document.createElement("ins");
      c$$227.className = "adsbygoogle";
      c$$227.style.display = "none";
      a$$441.document.body.appendChild(c$$227);
      var d$$144 = a$$441.document.documentElement.clientHeight;
      var e$$85 = a$$441.document.documentElement.clientWidth;
      d$$144 = {google_ad_client:b$$343.adClient, google_ad_width:e$$85, google_ad_height:d$$144, google_reactive_ad_format:8};
      b$$343.adTest && (d$$144.google_ad_test = b$$343.adTest);
      var a$$inline_361 = c$$227;
      var b$$inline_362 = d$$144;
      var c$$inline_363 = a$$441;
      c$$inline_363 = c$$inline_363 || window;
      Cg(a$$inline_361);
      Dg(a$$inline_361, b$$inline_362, c$$inline_363)
    }
  };
  var Ug = {1:1, 8:2};
  dh.prototype.ub = function(a$$456) {
    if(a$$456 && mg[a$$456.origin]) {
      var b$$354;
      try {
        b$$354 = gg(a$$456.data)
      }catch(c$$238) {
      }
      if(b$$354) {
        (a$$456 = b$$354.adType) || (a$$456 = 1);
        var d$$151 = rg(this.lc);
        if(!d$$151.wasReactiveAdConfigReceived[a$$456]) {
          var e$$89 = Yg(a$$456);
          e$$89 && e$$89.ia(b$$354) && (d$$151.wasReactiveAdConfigReceived[a$$456] = !0, e$$89.D(this.lc))
        }
      }
    }
  };
  W$$1.prototype.Ca = function() {
    if(!this.Ic) {
      var a$$458 = ha$$1();
      a$$458 = (a$$458 - this.hb) / (this.Sc - this.hb);
      1 <= a$$458 && (a$$458 = 1);
      this.Pc(a$$458);
      this.C();
      1 == a$$458 ? this.ka() : w$$6.setTimeout(r$$2(this.Ca, this), 20)
    }
  };
  W$$1.prototype.ka = function() {
  };
  W$$1.prototype.C = function() {
  };
  W$$1.prototype.Pc = function(a$$459) {
    this.current = [];
    var b$$356 = 0;
    for(;b$$356 < this.ib.length;b$$356++) {
      this.current.push((this.Tc[b$$356] - this.ib[b$$356]) * a$$459 + this.ib[b$$356])
    }
  };
  W$$1.prototype.play = function() {
    this.hb = ha$$1();
    this.Sc = this.hb + this.jd;
    this.Ca()
  };
  W$$1.prototype.stop = function() {
    this.Ic = !0
  };
  ja$$1(fh, W$$1);
  fh.prototype.C = function() {
    Nd(this.W, this.current[0])
  };
  ja$$1(gh, W$$1);
  gh.prototype.ka = function() {
    qd(this.W);
    if(this.onEndCallback) {
      this.onEndCallback()
    }
  };
  gh.prototype.C = function() {
    Nd(this.W, this.current[0])
  };
  hh.prototype.ba = function() {
    if(!this.X) {
      this.X = [];
      var a$$463 = this.sb;
      for(;a$$463 && !$b(Zc(a$$463), "adsbygoogle");) {
        this.X.push(a$$463), a$$463 = a$$463.parentNode
      }
      a$$463 && this.X.push(a$$463)
    }
    return this.X
  };
  hh.prototype.Pb = function() {
    return"adsbygoogle"
  };
  hh.prototype.u = function() {
    if(!this.Ub) {
      var a$$464 = this.ba();
      if(!a$$464 || 2 > a$$464.length) {
        return null
      }
      this.Ub = a$$464[a$$464.length - 1]
    }
    return this.Ub
  };
  ja$$1(X$$1, hh);
  X$$1.prototype.dismiss = function() {
    if(!this.Da) {
      this.Da = !0;
      A$$1(this.i, "orientationchange", this.Zc);
      A$$1(this.i, "resize", this.$c);
      A$$1(this.i, "scroll", this.ad);
      A$$1(this.i, "touchcancel", this.bd);
      A$$1(this.i, "touchend", this.cd);
      A$$1(this.i, "touchmove", this.dd);
      A$$1(this.i, "touchstart", this.ed);
      var a$$466 = new gh(this.u(), 250, r$$2(this.$a, this));
      a$$466.play()
    }
  };
  X$$1.prototype.hide = function() {
    this.ga && (Q$$1(this.u(), "display", "none"), this.$a(), this.ga = !1)
  };
  X$$1.prototype.A = function() {
    this.Ib = !0;
    if(this.Sa() && og(this.i) && !this.Ra) {
      var a$$467 = this.u();
      a$$467 && (this.show(), Q$$1(a$$467, {position:"fixed", background:"rgba(0,0,0,0.65)", boxShadow:"0 -5px 5px -5px rgba(0,0,0,0.5)", zIndex:999999}), this.qb(), a$$467 = new fh(a$$467, 350), a$$467.play(), this.Ra = !0)
    }
  };
  X$$1.prototype.show = function() {
    this.ga || (this.pb(), Q$$1(this.u(), {display:"block", opacity:this.Ra ? 1 : 0}), this.ga = !0)
  };
  X$$1.prototype.pb = function() {
    var a$$468 = this.Ma(this.ua);
    a$$468 = this.Rb(this.ua, a$$468);
    this.cb(this.i.document.body, a$$468)
  };
  X$$1.prototype.qb = function() {
    var a$$469 = this.ba();
    if(a$$469 && !(2 > a$$469.length)) {
      var b$$361 = a$$469[a$$469.length - 1];
      var c$$243 = a$$469[0];
      if(b$$361 && c$$243) {
        c$$243 = this.Ma(this.ua);
        var d$$153 = this.Qb(this.ua, c$$243);
        Q$$1(b$$361, d$$153);
        b$$361 = a$$469.length - 1;
        for(;0 <= b$$361;--b$$361) {
          Id(a$$469[b$$361], c$$243)
        }
        Id(this.s, c$$243)
      }
    }
  };
  X$$1.prototype.Qb = function(a$$470) {
    var b$$362 = {};
    switch(a$$470) {
      case "bottom":
        b$$362 = {left:"0px", bottom:"0px"}
    }
    return b$$362
  };
  X$$1.prototype.Rb = function(a$$471, b$$363) {
    var c$$244;
    switch(a$$471) {
      case "bottom":
        if(c$$244 = Qd(this.i.document.body, "padding")) {
          c$$244.bottom += b$$363.height
        }
    }
    return c$$244
  };
  X$$1.prototype.Ma = function(a$$472) {
    var b$$364 = this.i.innerWidth;
    var c$$245;
    switch(a$$472) {
      case "bottom":
        c$$245 = new u$$2(b$$364, this.gd.height)
    }
    return c$$245
  };
  X$$1.prototype.Sa = function() {
    return this.i.innerHeight >= this.i.innerWidth
  };
  X$$1.prototype.ec = function() {
    this.o()
  };
  X$$1.prototype.tc = function() {
    this.o()
  };
  X$$1.prototype.vc = function() {
    this.o()
  };
  X$$1.prototype.Kc = function() {
    this.w = "touchcancel";
    this.i.setTimeout(r$$2(function() {
      "touchcancel" == this.w && (this.B = 0, this.I = !1, this.o())
    }, this), 1E3)
  };
  X$$1.prototype.Lc = function(a$$473) {
    this.w = "touchend";
    var b$$365 = a$$473.touches.length;
    2 > b$$365 ? this.i.setTimeout(r$$2(function() {
      "touchend" == this.w && (this.B = b$$365, this.I = !1, this.o())
    }, this), 1E3) : (this.B = b$$365, this.o())
  };
  X$$1.prototype.Mc = function(a$$474) {
    this.w = "touchmove";
    this.B = a$$474.touches.length;
    this.I = !0;
    this.o()
  };
  X$$1.prototype.Nc = function(a$$475) {
    this.w = "touchstart";
    this.B = a$$475.touches.length;
    this.I = !1;
    this.o()
  };
  X$$1.prototype.$a = function() {
    this.cb(this.i.document.body, this.Vc)
  };
  X$$1.prototype.cb = function(a$$476, b$$366) {
    Q$$1(a$$476, {paddingTop:b$$366.top + "px", paddingLeft:b$$366.left + "px", paddingRight:b$$366.right + "px", paddingBottom:b$$366.bottom + "px"})
  };
  X$$1.prototype.o = function() {
    !this.Sa() || !og(this.i) || 2 <= this.B && this.I || !this.Ib || this.Da ? this.hide() : (this.A(), this.show())
  };
  ih.prototype.Wb = function() {
    this.pa(this.cc);
    var a$$478 = ye("ras::hdlr", r$$2(this.gc, this));
    y$$32(this.i, "message", a$$478)
  };
  ih.prototype.gc = function(a$$479) {
    if(a$$479 && a$$479.data && mg[a$$479.origin]) {
      var b$$367 = 0;
      for(;2 > b$$367;b$$367++) {
        var c$$246;
        var d$$154;
        switch(b$$367) {
          case 0:
            d$$154 = c$$246 = a$$479.data;
            break;
          default:
            try {
              c$$246 = (d$$154 = gg(a$$479.data)) && d$$154.msg_type
            }catch(e$$90) {
              d$$154 = c$$246 = null
            }
        }
        var f$$52 = this.cc[c$$246];
        if(f$$52) {
          f$$52.call(this, d$$154);
          break
        }
      }
    }
  };
  ja$$1(jh, ih);
  jh.prototype.Bb = function() {
    this.Cb || (this.Cb = !0, this.Kb.dismiss())
  };
  jh.prototype.Gb = function() {
    this.H || (this.H = !0, this.Kb.A())
  };
  jh.prototype.pa = function(a$$481) {
    a$$481.fill = this.Gb;
    a$$481.dismiss = this.Bb
  };
  ja$$1(Y$$1, hh);
  var lh = {backgroundColor:"white", opacity:"1", position:"fixed", left:"0px", top:"0px", display:"none", zIndex:"2147483647"};
  var mh = {width:"100%", height:"100%"};
  var nh = {width:"100%", "min-height":"100%"};
  Y$$1.prototype.mb = function(a$$484) {
    this.ob || (this.ob = !0, this.rc = a$$484, this.Yb())
  };
  Y$$1.prototype.A = function(a$$485) {
    this.N(!0);
    var b$$371 = ye("ifr::hide", r$$2(this.tb, this));
    y$$32(this.i, "pagehide", b$$371);
    this.vb(a$$485)
  };
  Y$$1.prototype.rb = function(a$$486) {
    if(a$$486.onclick || !a$$486.href) {
      return!1
    }
    var b$$372 = Re(a$$486.href);
    var c$$248 = b$$372[3];
    a$$486 = kh(a$$486.href);
    b$$372 = b$$372[7];
    return!c$$248 || c$$248 != this.Wc || a$$486 == this.Xc && b$$372 ? !1 : !0
  };
  Y$$1.prototype.tb = function() {
    this.N(!1);
    this.xb();
    this.sc()
  };
  Y$$1.prototype.Ba = function(a$$487, b$$373) {
    var c$$249 = this.i.document.createElement("link");
    c$$249.setAttribute("rel", b$$373);
    c$$249.setAttribute("href", a$$487);
    return c$$249
  };
  Y$$1.prototype.vb = function(a$$488) {
    this.kc = this.Ba(a$$488, "prerender");
    this.ic = this.Ba(a$$488, "prefetch");
    this.i.document.body.appendChild(this.kc);
    this.i.document.body.appendChild(this.ic)
  };
  Y$$1.prototype.xb = function() {
    var a$$489 = 0;
    for(;a$$489 < this.ea.length;++a$$489) {
      var b$$374 = this.ea[a$$489];
      A$$1(b$$374, "click", this.rc);
      b$$374.removeAttribute("data-google-reveal-ad")
    }
    this.ea = []
  };
  Y$$1.prototype.Yb = function() {
    var a$$490 = this.i.document.links;
    var b$$375 = 0;
    for(;b$$375 < a$$490.length;++b$$375) {
      var c$$250 = a$$490[b$$375];
      this.rb(c$$250) && this.Xb(c$$250)
    }
  };
  Y$$1.prototype.Xb = function(a$$491) {
    this.ea.push(a$$491);
    y$$32(a$$491, "click", this.rc);
    a$$491.setAttribute("data-google-reveal-ad", "true")
  };
  Y$$1.prototype.sc = function() {
    this.i.document.body.removeChild(this.kc);
    this.i.document.body.removeChild(this.ic)
  };
  Y$$1.prototype.Cc = function() {
    var a$$492 = this.ba();
    if(a$$492 && !(2 > a$$492.length)) {
      var b$$376 = a$$492[a$$492.length - 1];
      if(b$$376) {
        var c$$251 = 0;
        for(;c$$251 < a$$492.length;++c$$251) {
          Q$$1(a$$492[c$$251], mh)
        }
        Q$$1(this.s, mh);
        a$$492 = this.sb.contentWindow.document;
        Q$$1(a$$492.documentElement, mh);
        Q$$1(a$$492.body, nh);
        Q$$1(b$$376, lh);
        this.N(!1)
      }
    }
  };
  Y$$1.prototype.N = function(a$$493) {
    var b$$377 = this.u();
    b$$377 && (b$$377.style.display = a$$493 ? "block" : "none")
  };
  ja$$1(Z$$1, ih);
  Z$$1.prototype.pa = function(a$$495) {
    a$$495["i-fill"] = this.Hb;
    a$$495["i-go"] = this.Nb;
    a$$495["i-no"] = this.Mb
  };
  Z$$1.prototype.T = function() {
    return this.G.iclk_url || null
  };
  Z$$1.prototype.Hb = function() {
    if(!this.H) {
      this.H = !0;
      var a$$496 = ye("ias::chdlr", r$$2(this.dc, this));
      this.Zb.mb(a$$496)
    }
  };
  Z$$1.prototype.Nb = function() {
    if(!this.Z) {
      this.Z = !0;
      this.i.clearTimeout(this.Jc);
      this.Zb.A(this.T());
      var a$$497 = {msg_type:"i-view"};
      this.s.contentWindow.postMessage((new hg(void 0)).serialize(a$$497), "http://doubleclick")
    }
  };
  Z$$1.prototype.Mb = function() {
    this.Z || (this.Z = !0, this.i.clearTimeout(this.Jc), this.Va())
  };
  Z$$1.prototype.Va = function() {
    this.i.location.href = this.T()
  };
  Z$$1.prototype.dc = function(a$$498) {
    if(this.T()) {
      return a$$498.preventDefault(), !1
    }
    var b$$379 = a$$498 && a$$498.target && a$$498.target.href;
    var c$$253 = og(this.i);
    if(!b$$379 || !c$$253) {
      return!0
    }
    this.uc(a$$498.target);
    if(!this.wc()) {
      return!0
    }
    this.qc();
    a$$498.preventDefault();
    return!1
  };
  Z$$1.prototype.qc = function() {
    var a$$499 = xe("ias::nav", r$$2(this.Va, this));
    this.Jc = this.i.setTimeout(a$$499, 1E3)
  };
  Z$$1.prototype.uc = function(a$$500) {
    this.G.iclk_url = a$$500.getAttribute("href");
    var JSCompiler_temp_const$$62 = this.G;
    var JSCompiler_inline_result$$63;
    var a$$inline_377 = a$$500;
    if(Xc && "innerText" in a$$inline_377) {
      a$$inline_377 = a$$inline_377.innerText.replace(/(\r\n|\r|\n)/g, "\n")
    }else {
      var b$$inline_378 = [];
      ud(a$$inline_377, b$$inline_378, !0);
      a$$inline_377 = b$$inline_378.join("")
    }
    a$$inline_377 = a$$inline_377.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a$$inline_377 = a$$inline_377.replace(/\u200B/g, "");
    Xc || (a$$inline_377 = a$$inline_377.replace(/ +/g, " "));
    " " != a$$inline_377 && (a$$inline_377 = a$$inline_377.replace(/^\s*/, ""));
    JSCompiler_inline_result$$63 = a$$inline_377;
    JSCompiler_temp_const$$62.iclk_ltx = JSCompiler_inline_result$$63;
    (a$$500 = a$$500.getAttribute("title")) && (this.G.iclk_ltl = a$$500)
  };
  Z$$1.prototype.wc = function() {
    try {
      var a$$501 = {msg_type:"i-prepare"};
      this.Bc(a$$501);
      this.s.contentWindow.postMessage((new hg(void 0)).serialize(a$$501), "http://doubleclick");
      return!0
    }catch(b$$380) {
    }
    return!1
  };
  Z$$1.prototype.Bc = function(a$$502) {
    var b$$381 = this.G;
    a$$502.iclk_url = b$$381.iclk_url;
    b$$381.iclk_ltx && (a$$502.iclk_ltx = b$$381.iclk_ltx);
    b$$381.iclk_ltl && (a$$502.iclk_ltl = b$$381.iclk_ltl)
  };
  var th = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var vh = {google_ad_channel:"channel", google_ad_host:"host", google_ad_host_channel:"h_ch", google_ad_host_tier_id:"ht_id", google_ad_section:"region", google_ad_type:"ad_type", google_adtest:"adtest", google_allow_expandable_ads:"ea", google_alternate_ad_url:"alternate_ad_url", google_alternate_color:"alt_color", google_bid:"bid", google_city:"gcs", google_color_bg:"color_bg", google_color_border:"color_border", google_color_line:"color_line", google_color_link:"color_link", google_color_text:"color_text", 
  google_color_url:"color_url", google_contents:"contents", google_country:"gl", google_cpm:"cpm", google_cust_age:"cust_age", google_cust_ch:"cust_ch", google_cust_gender:"cust_gender", google_cust_id:"cust_id", google_cust_interests:"cust_interests", google_cust_job:"cust_job", google_cust_l:"cust_l", google_cust_lh:"cust_lh", google_cust_u_url:"cust_u_url", google_disable_video_autoplay:"disable_video_autoplay", google_ed:"ed", google_encoding:"oe", google_feedback:"feedback_link", google_flash_version:"flash", 
  google_font_face:"f", google_font_size:"fs", google_hints:"hints", google_kw:"kw", google_kw_type:"kw_type", google_language:"hl", google_page_url:"url", google_region:"gr", google_reuse_colors:"reuse_colors", google_safe:"adsafe", google_sc_id:"sc_id", google_tag_info:"gut", google_targeting:"targeting", google_ui_features:"ui", google_ui_version:"uiv", google_video_doc_id:"video_doc_id", google_video_product_type:"video_product_type"};
  var wh = {google_ad_block:"ad_block", google_ad_client:"client", google_ad_format:"format", google_ad_output:"output", google_ad_callback:"callback", google_ad_height:"h", google_ad_override:"google_ad_override", google_ad_slot:"slotname", google_ad_unit_key:"adk", google_ad_unit_key_2:"adk2", google_ad_width:"w", google_captcha_token:"captok", google_ctr_threshold:"ctr_t", google_cust_criteria:"cust_params", google_image_size:"image_size", google_last_modified_time:"lmt", google_loeid:"loeid", 
  google_max_num_ads:"num_ads", google_max_radlink_len:"max_radlink_len", google_mtl:"mtl", google_num_radlinks:"num_radlinks", google_num_radlinks_per_unit:"num_radlinks_per_unit", google_only_ads_with_video:"only_ads_with_video", google_rl_dest_url:"rl_dest_url", google_rl_filtering:"rl_filtering", google_rl_mode:"rl_mode", google_rt:"rt", google_sui:"sui", google_skip:"skip", google_tag_for_child_directed_treatment:"tfcd", google_tdsma:"tdsma", google_tfs:"tfs", google_tl:"tl"};
  var xh = {google_lact:"lact", google_only_pyv_ads:"pyv", google_only_userchoice_ads:"uc", google_scs:"scs", google_with_pyv_ads:"withpyv", google_previous_watch:"p_w", google_previous_searches:"p_s", google_video_url_to_fetch:"durl", google_yt_pt:"yt_pt", google_yt_up:"yt_up"};
  var Dh = navigator;
  var Kh = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/;
  var Lh = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/;
  $$$1.prototype.zb = function() {
    return this.j.didDeviceMotionCallbacksTimeoutExpire
  };
  $$$1.prototype.Ab = function() {
    return this.j.didDeviceOrientationCallbacksTimeoutExpire
  };
  $$$1.prototype.$ = function() {
    return this.j.deviceAccelerationWithGravity
  };
  $$$1.prototype.aa = function() {
    return this.j.deviceAccelerationWithoutGravity
  };
  $$$1.prototype.ca = function() {
    return this.j.deviceOrientation
  };
  $$$1.prototype.Oa = function() {
    return this.j.startTimeStamp && this.j.stopTimeStamp ? this.j.stopTimeStamp - this.j.startTimeStamp : null
  };
  $$$1.prototype.nc = function(a$$516, b$$393) {
    var c$$263 = this.j;
    Nh(c$$263.deviceOrientationEventCallbacks, a$$516, b$$393, function() {
      c$$263.didDeviceOrientationCallbacksTimeoutExpire = !0
    })
  };
  $$$1.prototype.mc = function(a$$517, b$$394) {
    var c$$264 = this.j;
    Nh(c$$264.deviceMotionEventCallbacks, a$$517, b$$394, function() {
      c$$264.didDeviceMotionCallbacksTimeoutExpire = !0
    })
  };
  $$$1.prototype.fb = function() {
    return this.O() || this.P()
  };
  $$$1.prototype.O = function() {
    return"ds_wfea" === this.j.sensorsExperiment && this.j.isDeviceMotionEventListenerRegistered && !this.j.deviceAccelerationWithGravity && !this.j.deviceAccelerationWithoutGravity
  };
  $$$1.prototype.P = function() {
    return"ds_wfea" === this.j.sensorsExperiment && this.j.isDeviceOrientationEventListenerRegistered && !this.j.deviceOrientation
  };
  $$$1.prototype.Gc = function() {
    this.j.startTimeStamp = (new Date).getTime()
  };
  $$$1.prototype.Hc = function() {
    this.j.stopTimeStamp = (new Date).getTime()
  };
  var Qh = null;
  var Rh = null;
  Uh.prototype.yb = function() {
    return!!this.t.j.deviceAccelerationWithGravity || !!this.t.j.deviceAccelerationWithoutGravity || !!this.t.j.deviceOrientation
  };
  Uh.prototype.Ob = function() {
    var a$$524 = this.Eb(this.t.j.deviceOrientation);
    var b$$399 = this.Ea(this.t.j.deviceAccelerationWithoutGravity);
    var c$$268 = this.Ea(this.t.j.deviceAccelerationWithGravity);
    a$$524 = a$$524.concat(b$$399, c$$268);
    var JSCompiler_inline_result$$59;
    var a$$inline_397 = a$$524;
    if(!ca$$1(a$$inline_397)) {
      throw Error("encodeByteArray takes an array as a parameter");
    }
    if(!Qh) {
      Qh = {};
      Rh = {};
      var a$$inline_644 = 0;
      for(;65 > a$$inline_644;a$$inline_644++) {
        Qh[a$$inline_644] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a$$inline_644), Rh[a$$inline_644] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a$$inline_644)
      }
    }
    var c$$inline_399 = !0 ? Rh : Qh;
    var d$$inline_400 = [];
    var e$$inline_401 = 0;
    for(;e$$inline_401 < a$$inline_397.length;e$$inline_401 += 3) {
      var f$$inline_402 = a$$inline_397[e$$inline_401];
      var g$$inline_403 = e$$inline_401 + 1 < a$$inline_397.length;
      var h$$inline_404 = g$$inline_403 ? a$$inline_397[e$$inline_401 + 1] : 0;
      var k$$inline_405 = e$$inline_401 + 2 < a$$inline_397.length;
      var l$$inline_406 = k$$inline_405 ? a$$inline_397[e$$inline_401 + 2] : 0;
      var z$$inline_407 = f$$inline_402 >> 2;
      f$$inline_402 = (f$$inline_402 & 3) << 4 | h$$inline_404 >> 4;
      h$$inline_404 = (h$$inline_404 & 15) << 2 | l$$inline_406 >> 6;
      l$$inline_406 = l$$inline_406 & 63;
      k$$inline_405 || (l$$inline_406 = 64, g$$inline_403 || (h$$inline_404 = 64));
      d$$inline_400.push(c$$inline_399[z$$inline_407], c$$inline_399[f$$inline_402], c$$inline_399[h$$inline_404], c$$inline_399[l$$inline_406])
    }
    JSCompiler_inline_result$$59 = d$$inline_400.join("");
    return JSCompiler_inline_result$$59
  };
  Uh.prototype.Eb = function(a$$525) {
    function b$$400(a$$526) {
      return void 0 !== a$$526 && null !== a$$526 ? (a$$526 += 360, [Math.floor(a$$526 / 256), a$$526 % 256]) : [128, 0]
    }
    var c$$269 = [];
    if(a$$525) {
      c$$269 = b$$400(a$$525.beta).concat(b$$400(a$$525.gamma)).concat(b$$400(a$$525.alpha))
    }else {
      a$$525 = 0;
      for(;3 > a$$525;++a$$525) {
        c$$269 = c$$269.concat([128, 0])
      }
    }
    return c$$269
  };
  Uh.prototype.Ea = function(a$$527) {
    function b$$401(a$$528) {
      return void 0 !== a$$528 && null !== a$$528 ? (a$$528 = Math.min(Math.max(a$$528, -30), 30), a$$528 = Math.round(546 * (a$$528 + 30)), [Math.floor(a$$528 / 256), a$$528 % 256]) : [128, 0]
    }
    var c$$270 = [];
    if(a$$527) {
      c$$270 = b$$401(a$$527.x).concat(b$$401(a$$527.y)).concat(b$$401(a$$527.z))
    }else {
      a$$527 = 0;
      for(;3 > a$$527;++a$$527) {
        c$$270 = c$$270.concat([128, 0])
      }
    }
    return c$$270
  };
  var Vh = La$$1(!1);
  var Wh = 20;
  var ci = !1;
  w$$6.google_eas_queue = w$$6.google_eas_queue || [];
  var ei = Mb(function() {
    var a$$530 = v$$1;
    var b$$402 = a$$530.createElement("script");
    b$$402.async = !0;
    b$$402.type = "text/javascript";
    b$$402.src = di();
    a$$530 = a$$530.getElementsByTagName("script")[0];
    a$$530.parentNode.insertBefore(b$$402, a$$530)
  });
  var zi = !1;
  var yi = "";
  var Xi = 0;
  var Ni = /[+, ]/;
  window.google_render_ad = ii;
  te("show_ads::main", ve, bi, xc)
})();

}

