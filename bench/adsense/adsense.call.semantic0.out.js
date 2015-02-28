// adsense.js
function v254() {
  function v253() {
    var a$$530 = v$$1;
    var b$$402 = JAM.call(a$$530.createElement, a$$530, ["script"], JAM.policy.p3);
    b$$402.async = !0;
    b$$402.type = "text/javascript";
    var v5012 = di();
    b$$402.src = v5012;
    a$$530 = JAM.call(a$$530.getElementsByTagName, a$$530, ["script"], JAM.policy.p3)[0];
    var v256 = a$$530.parentNode;
    JAM.call(v256.insertBefore, v256, [b$$402, a$$530], JAM.policy.p3);
    return;
  }
  function v252(a$$527) {
    function b$$401(a$$528) {
      var v257;
      var v3381 = void 0 !== a$$528;
      if (v3381) {
        v3381 = null !== a$$528;
      }
      if (v3381) {
        a$$528 = JAM.call(Math.min, Math, [JAM.call(Math.max, Math, [a$$528, -30], JAM.policy.p3), 30], JAM.policy.p3);
        a$$528 = JAM.call(Math.round, Math, [546 * (a$$528 + 30)], JAM.policy.p3);
        v257 = [JAM.call(Math.floor, Math, [a$$528 / 256], JAM.policy.p3), a$$528 % 256];
      } else {
        v257 = [128, 0];
      }
      return v257;
    }
    var c$$270 = [];
    if (a$$527) {
      var v2066 = b$$401(a$$527.x);
      var v258 = JAM.call(v2066.concat, v2066, [b$$401(a$$527.y)], JAM.policy.p3);
      c$$270 = JAM.call(v258.concat, v258, [b$$401(a$$527.z)], JAM.policy.p3);
    } else {
      a$$527 = 0;
      var v261 = 3 > a$$527;
      for (;v261;) {
        c$$270 = JAM.call(c$$270.concat, c$$270, [[128, 0]], JAM.policy.p3);
        ++a$$527;
        v261 = 3 > a$$527;
      }
    }
    return c$$270;
  }
  function v251(a$$525) {
    function b$$400(a$$526) {
      var v262;
      var v3386 = void 0 !== a$$526;
      if (v3386) {
        v3386 = null !== a$$526;
      }
      if (v3386) {
        a$$526 = a$$526 + 360;
        v262 = [JAM.call(Math.floor, Math, [a$$526 / 256], JAM.policy.p3), a$$526 % 256];
      } else {
        v262 = [128, 0];
      }
      return v262;
    }
    var c$$269 = [];
    if (a$$525) {
      var v2070 = b$$400(a$$525.beta);
      var v263 = JAM.call(v2070.concat, v2070, [b$$400(a$$525.gamma)], JAM.policy.p3);
      c$$269 = JAM.call(v263.concat, v263, [b$$400(a$$525.alpha)], JAM.policy.p3);
    } else {
      a$$525 = 0;
      var v266 = 3 > a$$525;
      for (;v266;) {
        c$$269 = JAM.call(c$$269.concat, c$$269, [[128, 0]], JAM.policy.p3);
        ++a$$525;
        v266 = 3 > a$$525;
      }
    }
    return c$$269;
  }
  function v250() {
    var a$$524 = JAM.call(this.Eb, this, [this.t.j.deviceOrientation], JAM.policy.p3);
    var b$$399 = JAM.call(this.Ea, this, [this.t.j.deviceAccelerationWithoutGravity], JAM.policy.p3);
    var c$$268 = JAM.call(this.Ea, this, [this.t.j.deviceAccelerationWithGravity], JAM.policy.p3);
    a$$524 = JAM.call(a$$524.concat, a$$524, [b$$399, c$$268], JAM.policy.p3);
    var JSCompiler_inline_result$$65;
    var a$$inline_333 = a$$524;
    var b$$inline_334 = !0;
    if (!ca$$1(a$$inline_333)) {
      throw Error("encodeByteArray takes an array as a parameter");
    }
    if (!Qh) {
      Qh = {};
      Rh = {};
      var a$$inline_564 = 0;
      var v271 = 65 > a$$inline_564;
      for (;v271;) {
        var v2077 = Qh;
        var v5013 = JAM.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", [a$$inline_564], JAM.policy.p3);
        v2077[a$$inline_564] = v5013;
        var v2078 = Rh;
        var v5014 = JAM.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.", [a$$inline_564], JAM.policy.p3);
        v2078[a$$inline_564] = v5014;
        a$$inline_564++;
        v271 = 65 > a$$inline_564;
      }
    }
    var v273;
    if (b$$inline_334) {
      v273 = Rh;
    } else {
      v273 = Qh;
    }
    var c$$inline_335 = v273;
    var d$$inline_336 = [];
    var e$$inline_337 = 0;
    var v288 = e$$inline_337 < a$$inline_333.length;
    for (;v288;) {
      var f$$inline_338 = a$$inline_333[e$$inline_337];
      var g$$inline_339 = e$$inline_337 + 1 < a$$inline_333.length;
      var v276;
      if (g$$inline_339) {
        v276 = a$$inline_333[e$$inline_337 + 1];
      } else {
        v276 = 0;
      }
      var h$$inline_340 = v276;
      var k$$inline_341 = e$$inline_337 + 2 < a$$inline_333.length;
      var v279;
      if (k$$inline_341) {
        v279 = a$$inline_333[e$$inline_337 + 2];
      } else {
        v279 = 0;
      }
      var l$$inline_342 = v279;
      var z$$inline_343 = f$$inline_338 >> 2;
      f$$inline_338 = (f$$inline_338 & 3) << 4 | h$$inline_340 >> 4;
      h$$inline_340 = (h$$inline_340 & 15) << 2 | l$$inline_342 >> 6;
      l$$inline_342 = l$$inline_342 & 63;
      if (!k$$inline_341) {
        l$$inline_342 = 64;
        if (!g$$inline_339) {
          h$$inline_340 = 64;
        }
      }
      JAM.call(d$$inline_336.push, d$$inline_336, [c$$inline_335[z$$inline_343], c$$inline_335[f$$inline_338], c$$inline_335[h$$inline_340], c$$inline_335[l$$inline_342]], JAM.policy.p3);
      e$$inline_337 = e$$inline_337 + 3;
      v288 = e$$inline_337 < a$$inline_333.length;
    }
    JSCompiler_inline_result$$65 = JAM.call(d$$inline_336.join, d$$inline_336, [""], JAM.policy.p3);
    return JSCompiler_inline_result$$65;
  }
  function v249() {
    var v2086 = !!this.t.j.deviceAccelerationWithGravity;
    if (!v2086) {
      v2086 = !!this.t.j.deviceAccelerationWithoutGravity;
    }
    var v289 = v2086;
    if (!v289) {
      v289 = !!this.t.j.deviceOrientation;
    }
    return v289;
  }
  function v248() {
    var v290 = this.j;
    var v2089 = new Date;
    var v5015 = JAM.call(v2089.getTime, v2089, [], JAM.policy.p3);
    v290.stopTimeStamp = v5015;
    return;
  }
  function v247() {
    var v291 = this.j;
    var v2090 = new Date;
    var v5016 = JAM.call(v2090.getTime, v2090, [], JAM.policy.p3);
    v291.startTimeStamp = v5016;
    return;
  }
  function v246() {
    var v2091 = "ds_wfea" === this.j.sensorsExperiment;
    if (v2091) {
      v2091 = this.j.isDeviceOrientationEventListenerRegistered;
    }
    var v292 = v2091;
    if (v292) {
      v292 = !this.j.deviceOrientation;
    }
    return v292;
  }
  function v245() {
    var v3401 = "ds_wfea" === this.j.sensorsExperiment;
    if (v3401) {
      v3401 = this.j.isDeviceMotionEventListenerRegistered;
    }
    var v2093 = v3401;
    if (v2093) {
      v2093 = !this.j.deviceAccelerationWithGravity;
    }
    var v293 = v2093;
    if (v293) {
      v293 = !this.j.deviceAccelerationWithoutGravity;
    }
    return v293;
  }
  function v244() {
    var v294 = JAM.call(this.O, this, [], JAM.policy.p3);
    if (!v294) {
      v294 = JAM.call(this.P, this, [], JAM.policy.p3);
    }
    return v294;
  }
  function v243(a$$517) {
    function v242() {
      c$$264.didDeviceMotionCallbacksTimeoutExpire = !0;
      return;
    }
    var b$$394 = 1E3;
    var c$$264 = this.j;
    Nh(c$$264.deviceMotionEventCallbacks, a$$517, b$$394, v242);
    return;
  }
  function v241(a$$516) {
    function v240() {
      c$$263.didDeviceOrientationCallbacksTimeoutExpire = !0;
      return;
    }
    var b$$393 = 1E3;
    var c$$263 = this.j;
    Nh(c$$263.deviceOrientationEventCallbacks, a$$516, b$$393, v240);
    return;
  }
  function v239() {
    var v297;
    var v3404 = this.j.startTimeStamp;
    if (v3404) {
      v3404 = this.j.stopTimeStamp;
    }
    if (v3404) {
      v297 = this.j.stopTimeStamp - this.j.startTimeStamp;
    } else {
      v297 = null;
    }
    return v297;
  }
  function v238() {
    return this.j.deviceOrientation;
  }
  function v237() {
    return this.j.deviceAccelerationWithoutGravity;
  }
  function v236() {
    return this.j.deviceAccelerationWithGravity;
  }
  function v235() {
    return this.j.didDeviceOrientationCallbacksTimeoutExpire;
  }
  function v234() {
    return this.j.didDeviceMotionCallbacksTimeoutExpire;
  }
  function v233(a$$502) {
    var b$$381 = this.G;
    a$$502.iclk_url = b$$381.iclk_url;
    var v303 = b$$381.iclk_ltx;
    if (v303) {
      a$$502.iclk_ltx = b$$381.iclk_ltx;
    }
    var v304 = b$$381.iclk_ltl;
    if (v304) {
      a$$502.iclk_ltl = b$$381.iclk_ltl;
    }
    return;
  }
  function v232() {
    try {
      var a$$501 = {msg_type:"i-prepare"};
      JAM.call(this.Bc, this, [a$$501], JAM.policy.p3);
      var v305 = this.s.contentWindow;
      var v2100 = new hg(void 0);
      JAM.call(v305.postMessage, v305, [JAM.call(v2100.serialize, v2100, [a$$501], JAM.policy.p3), "http://doubleclick"], JAM.policy.p3);
      return !0;
    } catch (b$$380) {
    }
    return !1;
  }
  function v231(a$$500) {
    var v307 = this.G;
    var v5017 = JAM.call(a$$500.getAttribute, a$$500, ["href"], JAM.policy.p3);
    v307.iclk_url = v5017;
    var JSCompiler_temp_const$$34 = this.G;
    var JSCompiler_inline_result$$35;
    var a$$inline_313 = a$$500;
    var v2101 = Xc;
    if (v2101) {
      v2101 = "innerText" in a$$inline_313;
    }
    if (v2101) {
      var v308 = a$$inline_313.innerText;
      a$$inline_313 = JAM.call(v308.replace, v308, [/(\r\n|\r|\n)/g, "\n"], JAM.policy.p3);
    } else {
      var b$$inline_314 = [];
      ud(a$$inline_313, b$$inline_314, !0);
      a$$inline_313 = JAM.call(b$$inline_314.join, b$$inline_314, [""], JAM.policy.p3);
    }
    var v311 = JAM.call(a$$inline_313.replace, a$$inline_313, [/ \xAD /g, " "], JAM.policy.p3);
    a$$inline_313 = JAM.call(v311.replace, v311, [/\xAD/g, ""], JAM.policy.p3);
    a$$inline_313 = JAM.call(a$$inline_313.replace, a$$inline_313, [/\u200B/g, ""], JAM.policy.p3);
    if (!Xc) {
      a$$inline_313 = JAM.call(a$$inline_313.replace, a$$inline_313, [/ +/g, " "], JAM.policy.p3);
    }
    var v312 = " " != a$$inline_313;
    if (v312) {
      a$$inline_313 = JAM.call(a$$inline_313.replace, a$$inline_313, [/^\s*/, ""], JAM.policy.p3);
    }
    JSCompiler_inline_result$$35 = a$$inline_313;
    JSCompiler_temp_const$$34.iclk_ltx = JSCompiler_inline_result$$35;
    var v313 = a$$500 = JAM.call(a$$500.getAttribute, a$$500, ["title"], JAM.policy.p3);
    if (v313) {
      this.G.iclk_ltl = a$$500;
    }
    return;
  }
  function v230() {
    var a$$499 = xe("ias::nav", JAM.call(r$$2, null, [this.Va, this], JAM.policy.p3));
    var v315 = this.i;
    var v5018 = JAM.call(v315.setTimeout, v315, [a$$499, 1E3], JAM.policy.p3);
    this.Jc = v5018;
    return;
  }
  function v229(a$$498) {
    if (JAM.call(this.T, this, [], JAM.policy.p3)) {
      JAM.call(a$$498.preventDefault, a$$498, [], JAM.policy.p3);
      return !1;
    }
    var v2105 = a$$498;
    if (v2105) {
      v2105 = a$$498.target;
    }
    var v317 = v2105;
    if (v317) {
      v317 = a$$498.target.href;
    }
    var b$$379 = v317;
    var c$$253 = og(this.i);
    var v2107 = !b$$379;
    if (!v2107) {
      v2107 = !c$$253;
    }
    if (v2107) {
      return !0;
    }
    JAM.call(this.uc, this, [a$$498.target], JAM.policy.p3);
    if (!JAM.call(this.wc, this, [], JAM.policy.p3)) {
      return !0;
    }
    JAM.call(this.qc, this, [], JAM.policy.p3);
    JAM.call(a$$498.preventDefault, a$$498, [], JAM.policy.p3);
    return !1;
  }
  function v228() {
    var v322 = this.i.location;
    var v5019 = JAM.call(this.T, this, [], JAM.policy.p3);
    v322.href = v5019;
    return;
  }
  function v227() {
    var v323 = this.Z;
    if (!v323) {
      this.Z = !0;
      var v4186 = this.i;
      JAM.call(v4186.clearTimeout, v4186, [this.Jc], JAM.policy.p3);
      JAM.call(this.Va, this, [], JAM.policy.p3);
    }
    return;
  }
  function v226() {
    if (!this.Z) {
      this.Z = !0;
      var v324 = this.i;
      JAM.call(v324.clearTimeout, v324, [this.Jc], JAM.policy.p3);
      var v326 = this.Zb;
      JAM.call(v326.A, v326, [JAM.call(this.T, this, [], JAM.policy.p3)], JAM.policy.p3);
      var a$$497 = {msg_type:"i-view"};
      var v328 = this.s.contentWindow;
      var v2113 = new hg(void 0);
      JAM.call(v328.postMessage, v328, [JAM.call(v2113.serialize, v2113, [a$$497], JAM.policy.p3), "http://doubleclick"], JAM.policy.p3);
    }
    return;
  }
  function v225() {
    if (!this.H) {
      this.H = !0;
      var a$$496 = ye("ias::chdlr", JAM.call(r$$2, null, [this.dc, this], JAM.policy.p3));
      var v332 = this.Zb;
      JAM.call(v332.mb, v332, [a$$496], JAM.policy.p3);
    }
    return;
  }
  function v224() {
    var v334 = this.G.iclk_url;
    if (!v334) {
      v334 = null;
    }
    return v334;
  }
  function v223(a$$495) {
    a$$495["i-fill"] = this.Hb;
    a$$495["i-go"] = this.Nb;
    a$$495["i-no"] = this.Mb;
    return;
  }
  function v222(a$$493) {
    var b$$377 = JAM.call(this.u, this, [], JAM.policy.p3);
    if (b$$377) {
      var v2118 = b$$377.style;
      var v3410;
      if (a$$493) {
        v3410 = "block";
      } else {
        v3410 = "none";
      }
      v2118.display = v3410;
    }
    return;
  }
  function v221() {
    var a$$492 = JAM.call(this.ba, this, [], JAM.policy.p3);
    var v2119 = a$$492;
    if (v2119) {
      v2119 = !(2 > a$$492.length);
    }
    if (v2119) {
      var b$$376 = a$$492[a$$492.length - 1];
      if (b$$376) {
        var c$$251 = 0;
        var v337 = c$$251 < a$$492.length;
        for (;v337;) {
          Q$$1(a$$492[c$$251], mh);
          ++c$$251;
          v337 = c$$251 < a$$492.length;
        }
        Q$$1(this.s, mh);
        a$$492 = this.sb.contentWindow.document;
        Q$$1(a$$492.documentElement, mh);
        Q$$1(a$$492.body, nh);
        Q$$1(b$$376, lh);
        JAM.call(this.N, this, [!1], JAM.policy.p3);
      }
    }
    return;
  }
  function v220() {
    var v344 = this.i.document.body;
    JAM.call(v344.removeChild, v344, [this.kc], JAM.policy.p3);
    var v346 = this.i.document.body;
    JAM.call(v346.removeChild, v346, [this.ic], JAM.policy.p3);
    return;
  }
  function v219(a$$491) {
    var v348 = this.ea;
    JAM.call(v348.push, v348, [a$$491], JAM.policy.p3);
    y$$31(a$$491, "click", this.rc);
    JAM.call(a$$491.setAttribute, a$$491, ["data-google-reveal-ad", "true"], JAM.policy.p3);
    return;
  }
  function v218() {
    var a$$490 = this.i.document.links;
    var b$$375 = 0;
    var v352 = b$$375 < a$$490.length;
    for (;v352;) {
      var c$$250 = a$$490[b$$375];
      var v351 = JAM.call(this.rb, this, [c$$250], JAM.policy.p3);
      if (v351) {
        JAM.call(this.Xb, this, [c$$250], JAM.policy.p3);
      }
      ++b$$375;
      v352 = b$$375 < a$$490.length;
    }
    return;
  }
  function v217() {
    var a$$489 = 0;
    var v355 = a$$489 < this.ea.length;
    for (;v355;) {
      var b$$374 = this.ea[a$$489];
      A$$1(b$$374, "click", this.rc);
      JAM.call(b$$374.removeAttribute, b$$374, ["data-google-reveal-ad"], JAM.policy.p3);
      ++a$$489;
      v355 = a$$489 < this.ea.length;
    }
    this.ea = [];
    return;
  }
  function v216(a$$488) {
    var v5020 = JAM.call(this.Ba, this, [a$$488, "prerender"], JAM.policy.p3);
    this.kc = v5020;
    var v5021 = JAM.call(this.Ba, this, [a$$488, "prefetch"], JAM.policy.p3);
    this.ic = v5021;
    var v356 = this.i.document.body;
    JAM.call(v356.appendChild, v356, [this.kc], JAM.policy.p3);
    var v358 = this.i.document.body;
    JAM.call(v358.appendChild, v358, [this.ic], JAM.policy.p3);
    return;
  }
  function v215(a$$487, b$$373) {
    var v360 = this.i.document;
    var c$$249 = JAM.call(v360.createElement, v360, ["link"], JAM.policy.p3);
    JAM.call(c$$249.setAttribute, c$$249, ["rel", b$$373], JAM.policy.p3);
    JAM.call(c$$249.setAttribute, c$$249, ["href", a$$487], JAM.policy.p3);
    return c$$249;
  }
  function v214() {
    JAM.call(this.N, this, [!1], JAM.policy.p3);
    JAM.call(this.xb, this, [], JAM.policy.p3);
    JAM.call(this.sc, this, [], JAM.policy.p3);
    return;
  }
  function v213(a$$486) {
    var v2134 = a$$486.onclick;
    if (!v2134) {
      v2134 = !a$$486.href;
    }
    if (v2134) {
      return !1;
    }
    var b$$372 = Re(a$$486.href);
    var c$$248 = b$$372[3];
    a$$486 = kh(a$$486.href);
    b$$372 = b$$372[7];
    var v365;
    var v4189 = !c$$248;
    if (!v4189) {
      v4189 = c$$248 != this.Wc;
    }
    var v3420 = v4189;
    if (!v3420) {
      var v4190 = a$$486 == this.Xc;
      if (v4190) {
        v4190 = b$$372;
      }
      v3420 = v4190;
    }
    if (v3420) {
      v365 = !1;
    } else {
      v365 = !0;
    }
    return v365;
  }
  function v212(a$$485) {
    JAM.call(this.N, this, [!0], JAM.policy.p3);
    var b$$371 = ye("ifr::hide", JAM.call(r$$2, null, [this.tb, this], JAM.policy.p3));
    y$$31(this.i, "pagehide", b$$371);
    JAM.call(this.vb, this, [a$$485], JAM.policy.p3);
    return;
  }
  function v211(a$$484) {
    var v369 = this.ob;
    if (!v369) {
      this.ob = !0;
      this.rc = a$$484;
      JAM.call(this.Yb, this, [], JAM.policy.p3);
    }
    return;
  }
  function v210(a$$481) {
    a$$481.fill = this.Gb;
    a$$481.dismiss = this.Bb;
    return;
  }
  function v209() {
    var v370 = this.H;
    if (!v370) {
      this.H = !0;
      var v3421 = this.Kb;
      JAM.call(v3421.A, v3421, [], JAM.policy.p3);
    }
    return;
  }
  function v208() {
    var v371 = this.Cb;
    if (!v371) {
      this.Cb = !0;
      var v3422 = this.Kb;
      JAM.call(v3422.dismiss, v3422, [], JAM.policy.p3);
    }
    return;
  }
  function v207(a$$479) {
    var v3423 = a$$479;
    if (v3423) {
      v3423 = a$$479.data;
    }
    var v2140 = v3423;
    if (v2140) {
      v2140 = mg[a$$479.origin];
    }
    if (v2140) {
      var b$$367 = 0;
      var v374 = 2 > b$$367;
      for (;v374;) {
        var c$$246;
        var d$$154;
        switch(b$$367) {
          case 0:
            d$$154 = c$$246 = a$$479.data;
            break;
          default:
            try {
              var v372 = d$$154 = gg(a$$479.data);
              if (v372) {
                v372 = d$$154.msg_type;
              }
              c$$246 = v372;
            } catch (e$$90) {
              d$$154 = c$$246 = null;
            }
          ;
        }
        var f$$52 = this.cc[c$$246];
        if (f$$52) {
          JAM.call(f$$52.call, f$$52, [this, d$$154], JAM.policy.p3);
          break;
        }
        b$$367++;
        v374 = 2 > b$$367;
      }
    }
    return;
  }
  function v206() {
    JAM.call(this.pa, this, [this.cc], JAM.policy.p3);
    var a$$478 = ye("ras::hdlr", JAM.call(r$$2, null, [this.gc, this], JAM.policy.p3));
    y$$31(this.i, "message", a$$478);
    return;
  }
  function v205() {
    var v379;
    var v4846 = !JAM.call(this.Sa, this, [], JAM.policy.p3);
    if (!v4846) {
      v4846 = !og(this.i);
    }
    var v4627 = v4846;
    if (!v4627) {
      var v4847 = 2 <= this.B;
      if (v4847) {
        v4847 = this.I;
      }
      v4627 = v4847;
    }
    var v4192 = v4627;
    if (!v4192) {
      v4192 = !this.Ib;
    }
    var v3425 = v4192;
    if (!v3425) {
      v3425 = this.Da;
    }
    if (v3425) {
      v379 = JAM.call(this.hide, this, [], JAM.policy.p3);
    } else {
      JAM.call(this.A, this, [], JAM.policy.p3);
      v379 = JAM.call(this.show, this, [], JAM.policy.p3);
    }
    v379;
    return;
  }
  function v204(a$$476, b$$366) {
    Q$$1(a$$476, {paddingTop:b$$366.top + "px", paddingLeft:b$$366.left + "px", paddingRight:b$$366.right + "px", paddingBottom:b$$366.bottom + "px"});
    return;
  }
  function v203() {
    JAM.call(this.cb, this, [this.i.document.body, this.Vc], JAM.policy.p3);
    return;
  }
  function v202(a$$475) {
    this.w = "touchstart";
    this.B = a$$475.touches.length;
    this.I = !1;
    JAM.call(this.o, this, [], JAM.policy.p3);
    return;
  }
  function v201(a$$474) {
    this.w = "touchmove";
    this.B = a$$474.touches.length;
    this.I = !0;
    JAM.call(this.o, this, [], JAM.policy.p3);
    return;
  }
  function v200(a$$473) {
    function v199() {
      var v385 = "touchend" == this.w;
      if (v385) {
        this.B = b$$365;
        this.I = !1;
        JAM.call(this.o, this, [], JAM.policy.p3);
      }
      return;
    }
    this.w = "touchend";
    var b$$365 = a$$473.touches.length;
    var v387;
    if (2 > b$$365) {
      var v2150 = this.i;
      v387 = JAM.call(v2150.setTimeout, v2150, [JAM.call(r$$2, null, [v199, this], JAM.policy.p3), 1E3], JAM.policy.p3);
    } else {
      this.B = b$$365;
      v387 = JAM.call(this.o, this, [], JAM.policy.p3);
    }
    v387;
    return;
  }
  function v198() {
    function v197() {
      var v388 = "touchcancel" == this.w;
      if (v388) {
        this.B = 0;
        this.I = !1;
        JAM.call(this.o, this, [], JAM.policy.p3);
      }
      return;
    }
    this.w = "touchcancel";
    var v389 = this.i;
    JAM.call(v389.setTimeout, v389, [JAM.call(r$$2, null, [v197, this], JAM.policy.p3), 1E3], JAM.policy.p3);
    return;
  }
  function v196() {
    JAM.call(this.o, this, [], JAM.policy.p3);
    return;
  }
  function v195() {
    JAM.call(this.o, this, [], JAM.policy.p3);
    return;
  }
  function v194() {
    JAM.call(this.o, this, [], JAM.policy.p3);
    return;
  }
  function v193() {
    return this.i.innerHeight >= this.i.innerWidth;
  }
  function v192(a$$472) {
    var b$$364 = this.i.innerWidth;
    var c$$245;
    switch(a$$472) {
      case "bottom":
        c$$245 = new u$$2(b$$364, this.gd.height);
    }
    return c$$245;
  }
  function v191(a$$471, b$$363) {
    var c$$244;
    switch(a$$471) {
      case "bottom":
        if (c$$244 = Qd(this.i.document.body)) {
          c$$244.bottom = c$$244.bottom + b$$363.height;
        }
      ;
    }
    return c$$244;
  }
  function v190(a$$470) {
    var b$$362 = {};
    switch(a$$470) {
      case "bottom":
        b$$362 = {left:"0px", bottom:"0px"};
    }
    return b$$362;
  }
  function v189() {
    var a$$469 = JAM.call(this.ba, this, [], JAM.policy.p3);
    var v2160 = a$$469;
    if (v2160) {
      v2160 = !(2 > a$$469.length);
    }
    if (v2160) {
      var b$$361 = a$$469[a$$469.length - 1];
      var c$$243 = a$$469[0];
      if (b$$361 && c$$243) {
        c$$243 = JAM.call(this.Ma, this, [this.ua], JAM.policy.p3);
        var d$$153 = JAM.call(this.Qb, this, [this.ua, c$$243], JAM.policy.p3);
        Q$$1(b$$361, d$$153);
        b$$361 = a$$469.length - 1;
        var v401 = 0 <= b$$361;
        for (;v401;) {
          Id(a$$469[b$$361], c$$243);
          --b$$361;
          v401 = 0 <= b$$361;
        }
        Id(this.s, c$$243);
      }
    }
    return;
  }
  function v188() {
    var a$$468 = JAM.call(this.Ma, this, [this.ua], JAM.policy.p3);
    a$$468 = JAM.call(this.Rb, this, [this.ua, a$$468], JAM.policy.p3);
    JAM.call(this.cb, this, [this.i.document.body, a$$468], JAM.policy.p3);
    return;
  }
  function v187() {
    var v408 = this.ga;
    if (!v408) {
      JAM.call(this.pb, this, [], JAM.policy.p3);
      var v4196 = JAM.call(this.u, this, [], JAM.policy.p3);
      var v4849;
      if (this.Ra) {
        v4849 = 1;
      } else {
        v4849 = 0;
      }
      Q$$1(v4196, {display:"block", opacity:v4849});
      this.ga = !0;
    }
    return;
  }
  function v186() {
    this.Ib = !0;
    var v3434 = JAM.call(this.Sa, this, [], JAM.policy.p3);
    if (v3434) {
      v3434 = og(this.i);
    }
    var v2164 = v3434;
    if (v2164) {
      v2164 = !this.Ra;
    }
    if (v2164) {
      var a$$467 = JAM.call(this.u, this, [], JAM.policy.p3);
      if (a$$467) {
        JAM.call(this.show, this, [], JAM.policy.p3);
        Q$$1(a$$467, {position:"fixed", background:"rgba(0,0,0,0.65)", boxShadow:"0 -5px 5px -5px rgba(0,0,0,0.5)", zIndex:999999});
        JAM.call(this.qb, this, [], JAM.policy.p3);
        a$$467 = new fh(a$$467, 350);
        JAM.call(a$$467.play, a$$467, [], JAM.policy.p3);
        this.Ra = !0;
      }
    }
    return;
  }
  function v185() {
    var v410 = this.ga;
    if (v410) {
      Q$$1(JAM.call(this.u, this, [], JAM.policy.p3), "display", "none");
      JAM.call(this.$a, this, [], JAM.policy.p3);
      this.ga = !1;
    }
    return;
  }
  function v184() {
    if (!this.Da) {
      this.Da = !0;
      A$$1(this.i, "orientationchange", this.Zc);
      A$$1(this.i, "resize", this.$c);
      A$$1(this.i, "scroll", this.ad);
      A$$1(this.i, "touchcancel", this.bd);
      A$$1(this.i, "touchend", this.cd);
      A$$1(this.i, "touchmove", this.dd);
      A$$1(this.i, "touchstart", this.ed);
      var a$$466 = new gh(JAM.call(this.u, this, [], JAM.policy.p3), 250, JAM.call(r$$2, null, [this.$a, this], JAM.policy.p3));
      JAM.call(a$$466.play, a$$466, [], JAM.policy.p3);
    }
    return;
  }
  function v183() {
    if (!this.Ub) {
      var a$$464 = JAM.call(this.ba, this, [], JAM.policy.p3);
      var v2168 = !a$$464;
      if (!v2168) {
        v2168 = 2 > a$$464.length;
      }
      if (v2168) {
        return null;
      }
      this.Ub = a$$464[a$$464.length - 1];
    }
    return this.Ub;
  }
  function v182() {
    return "adsbygoogle";
  }
  function v181() {
    if (!this.X) {
      this.X = [];
      var a$$463 = this.sb;
      var v2171 = a$$463;
      if (v2171) {
        v2171 = !bd(a$$463);
      }
      var v431 = v2171;
      for (;v431;) {
        var v2172 = this.X;
        JAM.call(v2172.push, v2172, [a$$463], JAM.policy.p3);
        a$$463 = a$$463.parentNode;
        var v2173 = a$$463;
        if (v2173) {
          v2173 = !bd(a$$463);
        }
        v431 = v2173;
      }
      if (a$$463) {
        var v2174 = this.X;
        JAM.call(v2174.push, v2174, [a$$463], JAM.policy.p3);
      }
    }
    return this.X;
  }
  function v180() {
    Nd(this.W, this.current[0]);
    return;
  }
  function v179() {
    qd(this.W);
    if (this.onEndCallback) {
      JAM.call(this.onEndCallback, this, [], JAM.policy.p3);
    }
    return;
  }
  function v178() {
    Nd(this.W, this.current[0]);
    return;
  }
  function v177() {
    this.Ic = !0;
    return;
  }
  function v176() {
    var v5022 = JAM.call(ha$$1, null, [], JAM.policy.p3);
    this.hb = v5022;
    this.Sc = this.hb + this.jd;
    JAM.call(this.Ca, this, [], JAM.policy.p3);
    return;
  }
  function v175(a$$459) {
    this.current = [];
    var b$$356 = 0;
    var v443 = b$$356 < this.ib.length;
    for (;v443;) {
      var v441 = this.current;
      JAM.call(v441.push, v441, [(this.Tc[b$$356] - this.ib[b$$356]) * a$$459 + this.ib[b$$356]], JAM.policy.p3);
      b$$356++;
      v443 = b$$356 < this.ib.length;
    }
    return;
  }
  function v174() {
    return;
  }
  function v173() {
    return;
  }
  function v172() {
    if (!this.Ic) {
      var a$$458 = JAM.call(ha$$1, null, [], JAM.policy.p3);
      a$$458 = (a$$458 - this.hb) / (this.Sc - this.hb);
      var v446 = 1 <= a$$458;
      if (v446) {
        a$$458 = 1;
      }
      JAM.call(this.Pc, this, [a$$458], JAM.policy.p3);
      JAM.call(this.C, this, [], JAM.policy.p3);
      var v447;
      if (1 == a$$458) {
        v447 = JAM.call(this.ka, this, [], JAM.policy.p3);
      } else {
        v447 = JAM.call(w$$6.setTimeout, w$$6, [JAM.call(r$$2, null, [this.Ca, this], JAM.policy.p3), 20], JAM.policy.p3);
      }
      v447;
    }
    return;
  }
  function v171(a$$456) {
    var v2187 = a$$456;
    if (v2187) {
      v2187 = mg[a$$456.origin];
    }
    if (v2187) {
      var b$$354;
      try {
        b$$354 = gg(a$$456.data);
      } catch (c$$238) {
      }
      if (b$$354) {
        var v450 = a$$456 = b$$354.adType;
        if (!v450) {
          a$$456 = 1;
        }
        var d$$151 = rg(this.lc);
        if (!d$$151.wasReactiveAdConfigReceived[a$$456]) {
          var e$$89 = Yg(a$$456);
          var v2190 = e$$89;
          if (v2190) {
            v2190 = JAM.call(e$$89.ia, e$$89, [b$$354], JAM.policy.p3);
          }
          var v452 = v2190;
          if (v452) {
            var v3447 = d$$151.wasReactiveAdConfigReceived;
            introspect(JAM.policy.p2) {
              v3447[a$$456] = !0;
            }
            JAM.call(e$$89.D, e$$89, [this.lc], JAM.policy.p3);
          }
        }
      }
    }
    return;
  }
  function v170(a$$441) {
    if (this.l) {
      var b$$343 = this.l;
      var v455 = a$$441.document;
      var c$$227 = JAM.call(v455.createElement, v455, ["ins"], JAM.policy.p3);
      c$$227.className = "adsbygoogle";
      c$$227.style.display = "none";
      var v457 = a$$441.document.body;
      JAM.call(v457.appendChild, v457, [c$$227], JAM.policy.p3);
      var d$$144 = a$$441.document.documentElement.clientHeight;
      var e$$85 = a$$441.document.documentElement.clientWidth;
      d$$144 = {google_ad_client:b$$343.adClient, google_ad_width:e$$85, google_ad_height:d$$144, google_reactive_ad_format:8};
      var v461 = b$$343.adTest;
      if (v461) {
        d$$144.google_ad_test = b$$343.adTest;
      }
      var a$$inline_297 = c$$227;
      var b$$inline_298 = d$$144;
      var c$$inline_299 = a$$441;
      c$$inline_299 = c$$inline_299 || window;
      Cg(a$$inline_297);
      Dg(a$$inline_297, b$$inline_298, c$$inline_299);
    }
    return;
  }
  function v169(a$$440) {
    var JSCompiler_inline_result$$61;
    JSCompiler_inline_label_Pg_296: {
      var a$$inline_293 = a$$440;
      if (!a$$inline_293) {
        JSCompiler_inline_result$$61 = null;
        break JSCompiler_inline_label_Pg_296;
      }
      var b$$inline_294 = new Og;
      var c$$inline_295 = a$$inline_293.adClient;
      var v464 = p$$1(c$$inline_295);
      if (v464) {
        b$$inline_294.adClient = c$$inline_295;
      }
      a$$inline_293 = a$$inline_293.adTest;
      var v465 = p$$1(a$$inline_293);
      if (v465) {
        b$$inline_294.adTest = a$$inline_293;
      }
      var v466;
      if (b$$inline_294.adClient) {
        v466 = b$$inline_294;
      } else {
        v466 = null;
      }
      JSCompiler_inline_result$$61 = v466;
    }
    var v467;
    if (this.l = JSCompiler_inline_result$$61) {
      v467 = !0;
    } else {
      v467 = !1;
    }
    return v467;
  }
  function v168(a$$439, b$$342) {
    var v5023 = new Og;
    this.l = v5023;
    this.l.adClient = b$$342;
    this.l.adTest = "on";
    JAM.call(this.D, this, [a$$439], JAM.policy.p3);
    return;
  }
  function v167(a$$436) {
    if (this.l) {
      var b$$339 = this.l;
      var v470 = a$$436.document;
      var c$$225 = JAM.call(v470.createElement, v470, ["ins"], JAM.policy.p3);
      c$$225.className = "adsbygoogle";
      var v471 = a$$436.document.body;
      JAM.call(v471.appendChild, v471, [c$$225], JAM.policy.p3);
      var d$$143 = String(JAM.call(Math.random, Math, [], JAM.policy.p3));
      d$$143 = JAM.call(d$$143.slice, d$$143, [-3], JAM.policy.p3);
      d$$143 = {google_ad_client:b$$339.adClient, google_ad_width:b$$339.adWidth, google_ad_height:b$$339.adHeight, google_ad_format:b$$339.adWidth + "x" + b$$339.adHeight + "_as", google_reactive_ad_format:1, google_ad_section:d$$143};
      var v477 = b$$339.adSlot;
      if (v477) {
        d$$143.google_ad_slot = b$$339.adSlot;
      }
      d$$143.google_ad_channel = "GoogleAnchorAd";
      var v478 = b$$339.adChannel;
      if (v478) {
        d$$143.google_ad_channel = d$$143.google_ad_channel + ("+" + b$$339.adChannel);
      }
      var v479 = b$$339.adTest;
      if (v479) {
        d$$143.google_adtest = b$$339.adTest;
      }
      var a$$inline_289 = c$$225;
      var b$$inline_290 = d$$143;
      var c$$inline_291 = a$$436;
      c$$inline_291 = c$$inline_291 || window;
      Cg(a$$inline_289);
      Dg(a$$inline_289, b$$inline_290, c$$inline_291);
    }
    return;
  }
  function v166(a$$435) {
    var JSCompiler_inline_result$$59;
    JSCompiler_inline_label_Lg_288: {
      var a$$inline_285 = a$$435;
      if (!a$$inline_285) {
        JSCompiler_inline_result$$59 = null;
        break JSCompiler_inline_label_Lg_288;
      }
      var b$$inline_286 = new Kg;
      var c$$inline_287 = a$$inline_285.adClient;
      var v482 = p$$1(c$$inline_287);
      if (v482) {
        b$$inline_286.adClient = c$$inline_287;
      }
      c$$inline_287 = a$$inline_285.adWidth;
      var v2198 = q$$3(c$$inline_287);
      if (v2198) {
        v2198 = 0 < c$$inline_287;
      }
      var v483 = v2198;
      if (v483) {
        b$$inline_286.adWidth = c$$inline_287;
      }
      c$$inline_287 = a$$inline_285.adHeight;
      var v2199 = q$$3(c$$inline_287);
      if (v2199) {
        v2199 = 0 < c$$inline_287;
      }
      var v484 = v2199;
      if (v484) {
        b$$inline_286.adHeight = c$$inline_287;
      }
      c$$inline_287 = a$$inline_285.adSlot;
      var v485 = p$$1(c$$inline_287);
      if (v485) {
        b$$inline_286.adSlot = c$$inline_287;
      }
      c$$inline_287 = a$$inline_285.adChannel;
      var v486 = p$$1(c$$inline_287);
      if (v486) {
        b$$inline_286.adChannel = c$$inline_287;
      }
      a$$inline_285 = a$$inline_285.adTest;
      var v487 = p$$1(a$$inline_285);
      if (v487) {
        b$$inline_286.adTest = a$$inline_285;
      }
      var v488;
      var v4204 = b$$inline_286.adClient;
      if (v4204) {
        v4204 = b$$inline_286.adWidth;
      }
      var v3453 = v4204;
      if (v3453) {
        v3453 = b$$inline_286.adHeight;
      }
      if (v3453) {
        v488 = b$$inline_286;
      } else {
        v488 = null;
      }
      JSCompiler_inline_result$$59 = v488;
    }
    var v489;
    if (this.l = JSCompiler_inline_result$$59) {
      v489 = !0;
    } else {
      v489 = !1;
    }
    return v489;
  }
  function v165(a$$434, b$$338) {
    var JSCompiler_inline_result$$60;
    var a$$inline_282 = b$$338;
    var b$$inline_283 = new Kg;
    b$$inline_283.adClient = a$$inline_282;
    b$$inline_283.adWidth = 320;
    b$$inline_283.adHeight = 50;
    b$$inline_283.adTest = "on";
    JSCompiler_inline_result$$60 = b$$inline_283;
    this.l = JSCompiler_inline_result$$60;
    JAM.call(this.D, this, [a$$434], JAM.policy.p3);
    return;
  }
  function v164(a$$412, b$$326) {
    JAM.call(b$$326.push, b$$326, ["{"], JAM.policy.p3);
    var c$$215 = "";
    var d$$137;
    for (d$$137 in a$$412) {
      var v2202 = Object.prototype.hasOwnProperty;
      if (JAM.call(v2202.call, v2202, [a$$412, d$$137], JAM.policy.p3)) {
        var e$$80 = a$$412[d$$137];
        var v490 = "function" != typeof e$$80;
        if (v490) {
          JAM.call(b$$326.push, b$$326, [c$$215], JAM.policy.p3);
          JAM.call(this.r, this, [d$$137, b$$326], JAM.policy.p3);
          JAM.call(b$$326.push, b$$326, [":"], JAM.policy.p3);
          var v4633;
          if (this.qa) {
            var v4850 = this.qa;
            v4633 = JAM.call(v4850.call, v4850, [a$$412, d$$137, e$$80], JAM.policy.p3);
          } else {
            v4633 = e$$80;
          }
          JAM.call(this.n, this, [v4633, b$$326], JAM.policy.p3);
          c$$215 = ",";
        }
      }
    }
    JAM.call(b$$326.push, b$$326, ["}"], JAM.policy.p3);
    return;
  }
  function v163(a$$411, b$$325) {
    var c$$214 = a$$411.length;
    JAM.call(b$$325.push, b$$325, ["["], JAM.policy.p3);
    var d$$136 = "";
    var e$$79 = 0;
    var v492 = e$$79 < c$$214;
    for (;v492;) {
      JAM.call(b$$325.push, b$$325, [d$$136], JAM.policy.p3);
      d$$136 = a$$411[e$$79];
      var v4206;
      if (this.qa) {
        var v4634 = this.qa;
        v4206 = JAM.call(v4634.call, v4634, [a$$411, String(e$$79), d$$136], JAM.policy.p3);
      } else {
        v4206 = d$$136;
      }
      JAM.call(this.n, this, [v4206, b$$325], JAM.policy.p3);
      d$$136 = ",";
      e$$79++;
      v492 = e$$79 < c$$214;
    }
    JAM.call(b$$325.push, b$$325, ["]"], JAM.policy.p3);
    return;
  }
  function v162(a$$410, b$$324) {
    var v2204;
    var v4207 = isFinite(a$$410);
    if (v4207) {
      v4207 = !isNaN(a$$410);
    }
    if (v4207) {
      v2204 = a$$410;
    } else {
      v2204 = "null";
    }
    JAM.call(b$$324.push, b$$324, [v2204], JAM.policy.p3);
    return;
  }
  function v161(a$$408, b$$322) {
    function v160(a$$409) {
      if (a$$409 in ig) {
        return ig[a$$409];
      }
      var b$$323 = JAM.call(a$$409.charCodeAt, a$$409, [0], JAM.policy.p3);
      var e$$78 = "\\u";
      var v495;
      if (16 > b$$323) {
        v495 = e$$78 = e$$78 + "000";
      } else {
        var v2205;
        if (256 > b$$323) {
          v2205 = e$$78 = e$$78 + "00";
        } else {
          var v3457 = 4096 > b$$323;
          if (v3457) {
            v3457 = e$$78 = e$$78 + "0";
          }
          v2205 = v3457;
        }
        v495 = v2205;
      }
      v495;
      var v496 = ig;
      var v2207 = JAM.call(b$$323.toString, b$$323, [16], JAM.policy.p3);
      introspect(JAM.policy.p2) {
        return v496[a$$409] = e$$78 + v2207;
      }
    }
    JAM.call(b$$322.push, b$$322, ['"', JAM.call(a$$408.replace, a$$408, [jg, v160], JAM.policy.p3), '"'], JAM.policy.p3);
    return;
  }
  function v159(a$$407, b$$321) {
    switch(typeof a$$407) {
      case "string":
        JAM.call(this.r, this, [a$$407, b$$321], JAM.policy.p3);
        break;
      case "number":
        JAM.call(this.L, this, [a$$407, b$$321], JAM.policy.p3);
        break;
      case "boolean":
        JAM.call(b$$321.push, b$$321, [a$$407], JAM.policy.p3);
        break;
      case "undefined":
        JAM.call(b$$321.push, b$$321, ["null"], JAM.policy.p3);
        break;
      case "object":
        if (null == a$$407) {
          JAM.call(b$$321.push, b$$321, ["null"], JAM.policy.p3);
          break;
        }
        if (n$$2(a$$407)) {
          JAM.call(this.xc, this, [a$$407, b$$321], JAM.policy.p3);
          break;
        }
        JAM.call(this.M, this, [a$$407, b$$321], JAM.policy.p3);
        break;
      case "function":
        break;
      default:
        throw Error("Unknown type: " + typeof a$$407);;
    }
    return;
  }
  function v158(a$$406) {
    var b$$320 = [];
    JAM.call(this.n, this, [a$$406, b$$320], JAM.policy.p3);
    return JAM.call(b$$320.join, b$$320, [""], JAM.policy.p3);
  }
  function v157() {
    function v156(b$$317) {
      var v2209 = !e$$76;
      if (v2209) {
        v2209 = JAM.call(c$$212, null, [b$$317], JAM.policy.p3);
      }
      var v502 = v2209;
      if (v502) {
        JAM.call(d$$134, null, [b$$317, a$$402, f$$49], JAM.policy.p3);
        e$$76 = !0;
      }
      return;
    }
    var v2210 = JAM.call(this.Rc, this, [], JAM.policy.p3);
    if (v2210) {
      v2210 = !this.Pa;
    }
    if (v2210) {
      var a$$402 = JAM.call(this.J, this, [], JAM.policy.p3);
      var v503 = a$$402;
      if (v503) {
        v503 = a$$402.contentWindow;
      }
      var b$$316 = v503;
      if (b$$316) {
        var c$$212 = ga$$1(eg, b$$316);
        var d$$134 = JAM.call(r$$2, null, [V$$1.prototype.da, this], JAM.policy.p3);
        b$$316 = ag;
        var e$$76 = !1;
        var f$$49 = !1;
        x$$50(b$$316, v156);
      }
    }
    return;
  }
  function v155(a$$400) {
    JAM.call(this.eb, this, [a$$400], JAM.policy.p3);
    this.hc = !0;
    return;
  }
  function v154(a$$399, b$$314) {
    JAM.call(this.eb, this, [a$$399], JAM.policy.p3);
    this.ma = !0;
    switch(b$$314) {
      case Zf:
        this.za = 453848234;
        break;
      case $f:
        this.za = 453848236;
    }
    return;
  }
  function v153(a$$398) {
    var v506 = this.jc;
    if (!v506) {
      var v2212;
      if (a$$398) {
        v2212 = this.Tb = !0;
      } else {
        v2212 = this.Pa = !0;
      }
      v2212;
    }
    return;
  }
  function v152(a$$397) {
    var v507 = this.va;
    if (!v507) {
      JAM.call(this.ta, this, [a$$397, this.F], JAM.policy.p3);
      this.va = !0;
      a$$397.style.display = "";
    }
    return;
  }
  function v151(a$$396, b$$313) {
    var v2215 = a$$396;
    if (v2215) {
      v2215 = a$$396.contentWindow;
    }
    var v508 = v2215;
    if (v508) {
      var v2216 = a$$396.contentWindow;
      JAM.call(v2216.postMessage, v2216, [b$$313, this.Fb], JAM.policy.p3);
    }
    return;
  }
  function v150() {
    var v509 = this.Q.document;
    return JAM.call(v509.getElementById, v509, ["zrt_ads_frame" + this.Q.google_unique_id], JAM.policy.p3);
  }
  function v149(a$$395) {
    var b$$312 = JAM.call(this.J, this, [], JAM.policy.p3);
    var v3462 = this.Fb == a$$395.origin;
    if (v3462) {
      v3462 = b$$312;
    }
    var v2220 = v3462;
    if (v2220) {
      v2220 = b$$312.contentWindow == a$$395.source;
    }
    if (v2220) {
      a$$395 = a$$395.data;
      var c$$210 = !0;
      var v511 = JAM.call(this.da, this, [a$$395, b$$312, c$$210], JAM.policy.p3);
      if (v511) {
        A$$1(this.Q, "message", this.K);
        JAM.call(this.R, this, [], JAM.policy.p3);
        var v3465 = this.ma;
        if (v3465) {
          JAM.call(this.ta, this, [b$$312, Yf], JAM.policy.p3);
          b$$312 = this.U;
          this.U = null;
          if (b$$312) {
            JAM.call(b$$312, null, [JAM.call(this.v, this, [], JAM.policy.p3), this.za, !0], JAM.policy.p3);
          }
        }
      }
    }
    return;
  }
  function v148(a$$394, b$$311, c$$209) {
    var v513;
    if (Wf[a$$394]) {
      JAM.call(this.Ac, this, [c$$209, a$$394], JAM.policy.p3);
      v513 = !0;
    } else {
      var v2221;
      if ("zr" == a$$394) {
        JAM.call(this.Dc, this, [c$$209], JAM.policy.p3);
        var v4638 = this.F;
        if (v4638) {
          JAM.call(this.gb, this, [b$$311], JAM.policy.p3);
        }
        v2221 = !0;
      } else {
        v2221 = !1;
      }
      v513 = v2221;
    }
    return v513;
  }
  function v147() {
    this.Fc = !0;
    return;
  }
  function v146() {
    var JSCompiler_inline_result$$51;
    var a$$inline_259 = this.Fc;
    var b$$inline_260 = this.Tb;
    var c$$inline_261 = this.Pa;
    var d$$inline_262 = this.Sb;
    var v514;
    if (a$$inline_259) {
      v514 = 8;
    } else {
      v514 = 0;
    }
    a$$inline_259 = v514;
    var v515;
    if (b$$inline_260) {
      v515 = 16;
    } else {
      v515 = 0;
    }
    b$$inline_260 = v515;
    var v516;
    if (c$$inline_261) {
      v516 = 32;
    } else {
      v516 = 0;
    }
    c$$inline_261 = v516;
    var v517;
    if (d$$inline_262) {
      v517 = 64;
    } else {
      v517 = 0;
    }
    d$$inline_262 = v517;
    JSCompiler_inline_result$$51 = a$$inline_259 | b$$inline_260 | c$$inline_261 | d$$inline_262;
    return JSCompiler_inline_result$$51;
  }
  function v145() {
    var a$$392 = this.F;
    if (a$$392) {
      var b$$309 = ce(a$$392, "w");
      var c$$207 = ce(a$$392, "h");
      var d$$132 = ce(a$$392, "ifi");
      d$$132 = Lb(d$$132);
      d$$132 = {id:d$$132, name:d$$132};
      Ff(d$$132, b$$309, c$$207, !1, Df(a$$392));
      var v521 = this.Q.document;
      JAM.call(v521.write, v521, [Cf(d$$132)], JAM.policy.p3);
      this.va = !0;
    }
    return;
  }
  function v144(a$$391, b$$308) {
    if (!this.ma) {
      this.F = a$$391;
      this.U = b$$308;
      if (this.hc) {
        try {
          JAM.call(this.gb, this, [JAM.call(this.J, this, [], JAM.policy.p3)], JAM.policy.p3);
        } catch (c$$206) {
          this.Sb = !0;
          JAM.call(b$$308, null, [JAM.call(this.v, this, [], JAM.policy.p3), null, !1], JAM.policy.p3);
        }
      } else {
        var v524 = "AZ" == this.Za;
        if (v524) {
          JAM.call(this.wb, this, [], JAM.policy.p3);
        }
      }
    }
    return;
  }
  function v143() {
    this.F = "";
    this.ma = this.jc = !0;
    this.U = null;
    var v527 = this.hc;
    if (v527) {
      A$$1(this.Q, "message", this.K);
      JAM.call(this.ta, this, [JAM.call(this.J, this, [], JAM.policy.p3), Yf], JAM.policy.p3);
    }
    return;
  }
  function v142() {
    var a$$390 = Ge;
    var v528 = this.Za == a$$390.IFRAME_SIGNALING;
    if (!v528) {
      v528 = this.Za == a$$390.ALWAYS_ZRT;
    }
    return v528;
  }
  function v141() {
    var v529 = this.va;
    if (!v529) {
      v529 = this.ma;
    }
    return v529;
  }
  function v140() {
    return this.za;
  }
  function v139() {
    return this.hc;
  }
  function v138() {
    return this.ma;
  }
  function v137() {
    return this.va;
  }
  function v136(a$$355) {
    this.j = 0;
    JAM.call(a$$355.fn, a$$355, [], JAM.policy.p3);
    return;
  }
  function v135() {
    var v2235 = 0 == this.j;
    if (v2235) {
      v2235 = this.oa.length;
    }
    if (v2235) {
      var v530 = this.oa;
      var a$$354 = JAM.call(v530.shift, v530, [], JAM.policy.p3);
      this.j = 2;
      var b$$282 = xe("sjr::run", JAM.call(r$$2, null, [this.ab, this, a$$354], JAM.policy.p3));
      var v532 = a$$354.win;
      JAM.call(v532.setTimeout, v532, [b$$282, 0], JAM.policy.p3);
      JAM.call(this.sa, this, [], JAM.policy.p3);
    }
    return;
  }
  function v134() {
    var a$$353 = xe("sjr::tryrun", JAM.call(r$$2, null, [this.Oc, this], JAM.policy.p3));
    var v535 = this.p;
    JAM.call(v535.setTimeout, v535, [a$$353, 0], JAM.policy.p3);
    return;
  }
  function v133() {
    var v2238 = !window;
    if (!v2238) {
      v2238 = !Array;
    }
    return !v2238;
  }
  function v132() {
    var v537 = 1 == this.j;
    if (v537) {
      var v3473 = null != this.na;
      if (v3473) {
        var v4639 = this.p;
        JAM.call(v4639.clearTimeout, v4639, [this.na], JAM.policy.p3);
        this.na = null;
      }
      this.j = 0;
    }
    JAM.call(this.sa, this, [], JAM.policy.p3);
    return;
  }
  function v131(a$$352) {
    this.j = 1;
    if (a$$352) {
      var b$$281 = xe("sjr::timeout", JAM.call(r$$2, null, [this.ra, this], JAM.policy.p3));
      var v539 = this.p;
      var v5024 = JAM.call(v539.setTimeout, v539, [b$$281, a$$352], JAM.policy.p3);
      this.na = v5024;
    }
    return;
  }
  function v130(a$$351, b$$280) {
    var v540 = this.oa;
    var v3474 = b$$280;
    if (!v3474) {
      v3474 = this.p;
    }
    JAM.call(v540.push, v540, [new nf(a$$351, v3474)], JAM.policy.p3);
    JAM.call(this.sa, this, [], JAM.policy.p3);
    return;
  }
  function v129(a$$350, b$$279) {
    var v542;
    var v4215 = 0 != this.j;
    if (!v4215) {
      v4215 = 0 != this.oa.length;
    }
    var v3475 = v4215;
    if (!v3475) {
      var v4216 = b$$279;
      if (v4216) {
        v4216 = b$$279 != window;
      }
      v3475 = v4216;
    }
    if (v3475) {
      v542 = JAM.call(this.Y, this, [a$$350, b$$279], JAM.policy.p3);
    } else {
      this.j = 2;
      v542 = JAM.call(this.ab, this, [new nf(a$$350, window)], JAM.policy.p3);
    }
    v542;
    return;
  }
  function v128(a$$342, b$$273, c$$185) {
    var d$$116;
    var e$$71 = {signature:"", adFrames:0};
    if (c$$185 > T$$1.MAXIMUM_IFRAME_DEPTH) {
      return e$$71;
    }
    try {
      d$$116 = a$$342[T$$1.NAME_FIRST_GOOGLE_WINDOW];
    } catch (f$$43) {
    }
    if (d$$116) {
      var v3477;
      if (a$$342 == b$$273) {
        v3477 = "I";
      } else {
        v3477 = "A";
      }
      e$$71.signature = v3477;
      e$$71.adFrames = 1;
    }
    var g$$27 = 0;
    var v546 = g$$27 < a$$342.length;
    for (;v546;) {
      var h$$19 = a$$342[g$$27];
      var v545 = h$$19 != d$$116;
      if (v545) {
        h$$19 = JAM.call(T$$1.Ha, T$$1, [h$$19, b$$273, c$$185 + 1], JAM.policy.p3);
        e$$71.adFrames = e$$71.adFrames + h$$19.adFrames;
        var v3478;
        if (h$$19.signature) {
          v3478 = e$$71.signature + ("!" + h$$19.signature + "~");
        } else {
          v3478 = e$$71.signature + "o";
        }
        e$$71.signature = v3478;
      }
      g$$27++;
      v546 = g$$27 < a$$342.length;
    }
    return e$$71;
  }
  function v127(a$$341, b$$272, c$$184, d$$115, e$$70) {
    a$$341 = JAM.call(T$$1.Ha, T$$1, [a$$341.top, a$$341, 0], JAM.policy.p3);
    var v548 = a$$341.signature;
    var f$$42 = JAM.call(v548.substring, v548, [0, 1800], JAM.policy.p3);
    b$$272 = {frmn:a$$341.adFrames, frms:f$$42, adk:b$$272, correlator:c$$184, frm:d$$115, frmn0:e$$70};
    c$$184 = L$$1(La$$1(), "/pagead/gen_204?id=frmn");
    var JSCompiler_inline_result$$48;
    var a$$inline_197 = [c$$184];
    var b$$inline_198 = b$$272;
    var c$$inline_199;
    for (c$$inline_199 in b$$inline_198) {
      Ve(c$$inline_199, b$$inline_198[c$$inline_199], a$$inline_197);
    }
    JSCompiler_inline_result$$48 = a$$inline_197;
    var a$$inline_201 = JSCompiler_inline_result$$48;
    if (a$$inline_201[1]) {
      var b$$inline_202 = a$$inline_201[0];
      var c$$inline_203 = JAM.call(b$$inline_202.indexOf, b$$inline_202, ["#"], JAM.policy.p3);
      var v552 = 0 <= c$$inline_203;
      if (v552) {
        JAM.call(a$$inline_201.push, a$$inline_201, [JAM.call(b$$inline_202.substr, b$$inline_202, [c$$inline_203], JAM.policy.p3)], JAM.policy.p3);
        a$$inline_201[0] = b$$inline_202 = JAM.call(b$$inline_202.substr, b$$inline_202, [0, c$$inline_203], JAM.policy.p3);
      }
      c$$inline_203 = JAM.call(b$$inline_202.indexOf, b$$inline_202, ["?"], JAM.policy.p3);
      var v553;
      if (0 > c$$inline_203) {
        v553 = a$$inline_201[1] = "?";
      } else {
        var v2246 = c$$inline_203 == b$$inline_202.length - 1;
        if (v2246) {
          v2246 = a$$inline_201[1] = void 0;
        }
        v553 = v2246;
      }
      v553;
    }
    c$$184 = JAM.call(a$$inline_201.join, a$$inline_201, [""], JAM.policy.p3);
    nb$$1(w$$6, c$$184);
    return;
  }
  function v126(a$$340, b$$271, c$$183, d$$114) {
    var e$$69 = JAM.call(T$$1.Ha, T$$1, [a$$340.top, a$$340, 0], JAM.policy.p3);
    JAM.call(window.setTimeout, window, [ga$$1(T$$1.Uc, a$$340, b$$271, c$$183, d$$114, e$$69.adFrames), T$$1.IFRAME_COUNTS_DELAY], JAM.policy.p3);
    return e$$69.adFrames;
  }
  function v125(a$$339, b$$270) {
    var c$$182 = T$$1;
    if (a$$339.top == a$$339) {
      return c$$182.NO_IFRAMING;
    }
    if (b$$270) {
      var d$$113 = a$$339.location.ancestorOrigins;
      if (d$$113) {
        var v560;
        if (d$$113[d$$113.length - 1] == a$$339.location.origin) {
          v560 = c$$182.SAME_DOMAIN_IFRAMING;
        } else {
          v560 = c$$182.CROSS_DOMAIN_IFRAMING;
        }
        return v560;
      }
    }
    var v561;
    if (Kb(a$$339.top)) {
      v561 = c$$182.SAME_DOMAIN_IFRAMING;
    } else {
      v561 = c$$182.CROSS_DOMAIN_IFRAMING;
    }
    return v561;
  }
  function v124(a$$331, b$$264) {
    var c$$177 = Oe("rs", a$$331);
    var d$$110 = ce(a$$331, "dt");
    c$$177 = JAM.call(c$$177.replace, c$$177, [/&dtd=(\d+|M)/, "&dtd=" + Hb(d$$110)], JAM.policy.p3);
    JAM.call(this.set, this, [b$$264, c$$177], JAM.policy.p3);
    return c$$177;
  }
  function v123(a$$330) {
    var v563 = this.p.document;
    a$$330 = JAM.call(v563.getElementById, v563, [a$$330], JAM.policy.p3);
    var b$$263 = a$$330.contentWindow.document;
    var v3484 = a$$330.onload;
    if (v3484) {
      v3484 = b$$263;
    }
    var v2255 = v3484;
    if (v2255) {
      var v3485 = !b$$263.body;
      if (!v3485) {
        v3485 = !b$$263.body.firstChild;
      }
      v2255 = v3485;
    }
    if (v2255) {
      JAM.call(a$$330.onload, a$$330, [], JAM.policy.p3);
    }
    return;
  }
  function v122(a$$329, b$$262) {
    var v566 = this.hd.handlers;
    introspect(JAM.policy.p2) {
      v566[a$$329] = b$$262;
    }
    var v567 = this.p.addEventListener;
    if (v567) {
      var v2258 = this.p;
      JAM.call(v2258.addEventListener, v2258, ["load", JAM.call(r$$2, null, [this.Jb, this, a$$329], JAM.policy.p3), !1], JAM.policy.p3);
    }
    return;
  }
  function v121(a$$322, b$$256) {
    JAM.call(b$$256.push, b$$256, ["{"], JAM.policy.p3);
    var c$$173 = "";
    var d$$109;
    for (d$$109 in a$$322) {
      if (JAM.call(a$$322.hasOwnProperty, a$$322, [d$$109], JAM.policy.p3)) {
        var e$$68 = a$$322[d$$109];
        var v568 = "function" != typeof e$$68;
        if (v568) {
          JAM.call(b$$256.push, b$$256, [c$$173], JAM.policy.p3);
          JAM.call(this.r, this, [d$$109, b$$256], JAM.policy.p3);
          JAM.call(b$$256.push, b$$256, [":"], JAM.policy.p3);
          JAM.call(this.n, this, [e$$68, b$$256], JAM.policy.p3);
          c$$173 = ",";
        }
      }
    }
    JAM.call(b$$256.push, b$$256, ["}"], JAM.policy.p3);
    return;
  }
  function v120(a$$321, b$$255) {
    var c$$172 = a$$321.length;
    JAM.call(b$$255.push, b$$255, ["["], JAM.policy.p3);
    var d$$108 = "";
    var e$$67 = 0;
    var v570 = e$$67 < c$$172;
    for (;v570;) {
      JAM.call(b$$255.push, b$$255, [d$$108], JAM.policy.p3);
      JAM.call(this.n, this, [a$$321[e$$67], b$$255], JAM.policy.p3);
      d$$108 = ",";
      e$$67++;
      v570 = e$$67 < c$$172;
    }
    JAM.call(b$$255.push, b$$255, ["]"], JAM.policy.p3);
    return;
  }
  function v119(a$$320, b$$254) {
    var v2262;
    var v4230 = isFinite(a$$320);
    if (v4230) {
      v4230 = !isNaN(a$$320);
    }
    if (v4230) {
      v2262 = a$$320;
    } else {
      v2262 = "null";
    }
    JAM.call(b$$254.push, b$$254, [v2262], JAM.policy.p3);
    return;
  }
  function v118(a$$318, b$$252) {
    function v117(a$$319) {
      if (a$$319 in Ce) {
        return Ce[a$$319];
      }
      var b$$253 = JAM.call(a$$319.charCodeAt, a$$319, [0], JAM.policy.p3);
      var e$$66 = "\\u";
      var v573;
      if (16 > b$$253) {
        v573 = e$$66 = e$$66 + "000";
      } else {
        var v2263;
        if (256 > b$$253) {
          v2263 = e$$66 = e$$66 + "00";
        } else {
          var v3489 = 4096 > b$$253;
          if (v3489) {
            v3489 = e$$66 = e$$66 + "0";
          }
          v2263 = v3489;
        }
        v573 = v2263;
      }
      v573;
      var v574 = Ce;
      var v2265 = JAM.call(b$$253.toString, b$$253, [16], JAM.policy.p3);
      introspect(JAM.policy.p2) {
        return v574[a$$319] = e$$66 + v2265;
      }
    }
    JAM.call(b$$252.push, b$$252, ['"'], JAM.policy.p3);
    JAM.call(b$$252.push, b$$252, [JAM.call(a$$318.replace, a$$318, [De, v117], JAM.policy.p3)], JAM.policy.p3);
    JAM.call(b$$252.push, b$$252, ['"'], JAM.policy.p3);
    return;
  }
  function v116(a$$317, b$$251) {
    switch(typeof a$$317) {
      case "string":
        JAM.call(this.r, this, [a$$317, b$$251], JAM.policy.p3);
        break;
      case "number":
        JAM.call(this.L, this, [a$$317, b$$251], JAM.policy.p3);
        break;
      case "boolean":
        JAM.call(b$$251.push, b$$251, [a$$317], JAM.policy.p3);
        break;
      case "undefined":
        JAM.call(b$$251.push, b$$251, ["null"], JAM.policy.p3);
        break;
      case "object":
        if (null == a$$317) {
          JAM.call(b$$251.push, b$$251, ["null"], JAM.policy.p3);
          break;
        }
        if (a$$317 instanceof Array) {
          JAM.call(this.yc, this, [a$$317, b$$251], JAM.policy.p3);
          break;
        }
        JAM.call(this.M, this, [a$$317, b$$251], JAM.policy.p3);
        break;
      case "function":
        break;
      default:
        throw Error("Unknown type: " + typeof a$$317);;
    }
    return;
  }
  function v115(a$$316) {
    var b$$250 = [];
    JAM.call(this.n, this, [a$$316, b$$250], JAM.policy.p3);
    return JAM.call(b$$250.join, b$$250, [""], JAM.policy.p3);
  }
  function v114() {
    return this.Lb;
  }
  function v113() {
    var v580 = window.google_enable_ose_periscope;
    if (v580) {
      this.Lb = !0;
    }
    return;
  }
  function v112(a$$299, b$$236, c$$162, d$$98, e$$60, f$$36) {
    function v111() {
      h$$17.lb = !0;
      return;
    }
    var g$$24 = null;
    var v581 = e$$60 && f$$36;
    if (v581) {
      g$$24 = new u$$2(e$$60, f$$36);
    }
    var v2267 = this.xa;
    if (v2267) {
      v2267 = d$$98;
    }
    if (v2267) {
      JAM.call(this.xa, this, [d$$98, a$$299, b$$236, !0, "", g$$24, ""], JAM.policy.p3);
    } else {
      if ("js" == c$$162) {
        JAM.call(this.oc, this, [a$$299], JAM.policy.p3);
      } else {
        var h$$17 = new le(a$$299, b$$236, c$$162, d$$98, g$$24);
        var v583 = this.q;
        JAM.call(v583.push, v583, [h$$17], JAM.policy.p3);
        if (d$$98) {
          a$$299 = v111;
          fe(d$$98, a$$299);
        }
      }
      JAM.call(this.bc, this, [], JAM.policy.p3);
    }
    return;
  }
  function v110() {
    return this.ha.length + this.q.length;
  }
  function v109() {
    return this.Aa;
  }
  function v108() {
    var v588;
    if (window) {
      v588 = this.Wa;
    } else {
      v588 = 0;
    }
    return v588;
  }
  function v107() {
    return this.Db;
  }
  function v106() {
    return "";
  }
  function v105(a$$298) {
    if (JAM.call(this.getOseId, this, [], JAM.policy.p3)) {
      return JAM.call(this.getOseId, this, [], JAM.policy.p3);
    }
    var b$$235 = window.google_enable_ose;
    var c$$161;
    var v590;
    if (!0 === b$$235) {
      v590 = c$$161 = 2;
    } else {
      var v2270 = !1 !== b$$235;
      if (v2270) {
        var v3493 = c$$161 = vb([2], ie);
        if (!v3493) {
          v3493 = c$$161 = vb([3], je);
        }
        v2270 = v3493;
      }
      v590 = v2270;
    }
    v590;
    if (!c$$161) {
      return 0;
    }
    this.Wa = c$$161;
    var v5025 = String(a$$298 || 0);
    this.Aa = v5025;
    return JAM.call(this.getOseId, this, [], JAM.policy.p3);
  }
  function v104() {
    var a$$297 = [];
    var b$$234 = this.q.length;
    var c$$160 = 0;
    var v596 = c$$160 < b$$234;
    for (;v596;) {
      var d$$97 = this.q[c$$160];
      JAM.call(a$$297.push, a$$297, [d$$97.nb], JAM.policy.p3);
      c$$160++;
      v596 = c$$160 < b$$234;
    }
    return a$$297;
  }
  function v103(a$$296, b$$233) {
    if (b$$233) {
      JAM.call(this.Fa, this, [this.wa, a$$296, 1], JAM.policy.p3);
    }
    var c$$159 = this.q.length;
    var d$$96 = 0;
    var v600 = d$$96 < c$$159;
    for (;v600;) {
      var e$$59 = this.q[d$$96];
      var v2273 = !e$$59.Vb;
      if (v2273) {
        v2273 = e$$59.kb;
      }
      var v599 = v2273;
      if (v599) {
        JAM.call(a$$296, null, [e$$59.kb, e$$59.nb, e$$59.fd, e$$59.lb, "", e$$59.Yc, ""], JAM.policy.p3);
        e$$59.Vb = !0;
      }
      d$$96++;
      v600 = d$$96 < c$$159;
    }
    if (b$$233) {
      this.xa = a$$296;
    }
    return;
  }
  function v102(a$$295, b$$232, c$$158) {
    var d$$95 = this.ha;
    if (0 < d$$95.length) {
      var v601 = a$$295.document;
      var e$$58 = JAM.call(v601.getElementsByTagName, v601, ["a"], JAM.policy.p3);
      var f$$35 = 0;
      var v614 = f$$35 < e$$58.length;
      for (;v614;) {
        var g$$23 = 0;
        var v613 = g$$23 < d$$95.length;
        for (;v613;) {
          var h$$16 = d$$95[g$$23][1];
          var v3500 = e$$58[f$$35].href;
          if (0 <= JAM.call(v3500.indexOf, v3500, [h$$16], JAM.policy.p3)) {
            h$$16 = e$$58[f$$35].parentNode;
            if (d$$95[g$$23][2]) {
              var k$$6 = h$$16;
              var l$$9 = 0;
              var v605 = 4 > l$$9;
              for (;v605;) {
                var v3501 = k$$6.innerHTML;
                if (0 <= JAM.call(v3501.indexOf, v3501, [d$$95[g$$23][2]], JAM.policy.p3)) {
                  h$$16 = k$$6;
                  break;
                }
                k$$6 = k$$6.parentNode;
                l$$9++;
                v605 = 4 > l$$9;
              }
            }
            k$$6 = !0;
            l$$9 = d$$95[g$$23][3];
            var z$$4 = d$$95[g$$23][5];
            JAM.call(b$$232, null, [h$$16, d$$95[g$$23][0], c$$158 || 0, k$$6, l$$9, void 0, z$$4], JAM.policy.p3);
            JAM.call(d$$95.splice, d$$95, [g$$23, 1], JAM.policy.p3);
            break;
          }
          g$$23++;
          v613 = g$$23 < d$$95.length;
        }
        f$$35++;
        v614 = f$$35 < e$$58.length;
      }
    }
    var v2283 = 0 < d$$95.length;
    if (v2283) {
      v2283 = a$$295 != hc();
    }
    if (v2283) {
      try {
        JAM.call(this.Fa, this, [a$$295.parent, b$$232, c$$158], JAM.policy.p3);
      } catch (C$$2) {
      }
    }
    return;
  }
  function v101() {
    var v618 = this.Ua;
    if (!v618) {
      mb$$1(D$$1());
      jb$$1(he);
      this.Ua = !0;
    }
    return;
  }
  function v100(a$$294) {
    function v99(b$$231) {
      var v2285 = b$$231;
      if (v2285) {
        v2285 = 0 < b$$231.length;
      }
      if (v2285) {
        var v619;
        if (1 < b$$231.length) {
          v619 = b$$231[1].url;
        } else {
          v619 = null;
        }
        var f$$34 = v619;
        var v620 = b$$231[0].log_info;
        if (!v620) {
          v620 = null;
        }
        var g$$22 = v620;
        var v621 = b$$231[0].activeview_url;
        if (!v621) {
          v621 = null;
        }
        var h$$15 = v621;
        JAM.call(c$$157.push, c$$157, [[a$$294, Va$$1(b$$231[0].url), f$$34, g$$22, null, h$$15]], JAM.policy.p3);
      }
      JAM.call(d$$94, null, [b$$231], JAM.policy.p3);
      return;
    }
    var b$$230 = "google_ad_request_done";
    var c$$157 = this.ha;
    var d$$94 = this.wa[b$$230];
    if (d$$94) {
      var v4238 = d$$94.orig_callback;
      if (!v4238) {
        v4238 = d$$94;
      }
      d$$94 = v4238;
      var v4239 = this.wa;
      introspect(JAM.policy.p2) {
        v4239[b$$230] = v99;
      }
      this.wa[b$$230].orig_callback = d$$94;
    }
    return;
  }
  function v98(a$$254, b$$194) {
    var v625;
    if (q$$3(b$$194)) {
      v625 = b$$194;
    } else {
      v625 = a$$254;
    }
    var c$$127 = v625;
    this.left = this.left * a$$254;
    this.right = this.right * a$$254;
    this.top = this.top * c$$127;
    this.bottom = this.bottom * c$$127;
    return this;
  }
  function v97(a$$253, b$$193) {
    var v626;
    if (a$$253 instanceof M$$1) {
      this.left = this.left + a$$253.x;
      this.right = this.right + a$$253.x;
      this.top = this.top + a$$253.y;
      v626 = this.bottom = this.bottom + a$$253.y;
    } else {
      this.left = this.left + a$$253;
      this.right = this.right + a$$253;
      var v3509 = q$$3(b$$193);
      if (v3509) {
        this.top = this.top + b$$193;
        v3509 = this.bottom = this.bottom + b$$193;
      }
      v626 = v3509;
    }
    v626;
    return this;
  }
  function v96() {
    var v5026 = JAM.call(Math.round, Math, [this.top], JAM.policy.p3);
    this.top = v5026;
    var v5027 = JAM.call(Math.round, Math, [this.right], JAM.policy.p3);
    this.right = v5027;
    var v5028 = JAM.call(Math.round, Math, [this.bottom], JAM.policy.p3);
    this.bottom = v5028;
    var v5029 = JAM.call(Math.round, Math, [this.left], JAM.policy.p3);
    this.left = v5029;
    return this;
  }
  function v95() {
    var v5030 = JAM.call(Math.floor, Math, [this.top], JAM.policy.p3);
    this.top = v5030;
    var v5031 = JAM.call(Math.floor, Math, [this.right], JAM.policy.p3);
    this.right = v5031;
    var v5032 = JAM.call(Math.floor, Math, [this.bottom], JAM.policy.p3);
    this.bottom = v5032;
    var v5033 = JAM.call(Math.floor, Math, [this.left], JAM.policy.p3);
    this.left = v5033;
    return this;
  }
  function v94() {
    var v5034 = JAM.call(Math.ceil, Math, [this.top], JAM.policy.p3);
    this.top = v5034;
    var v5035 = JAM.call(Math.ceil, Math, [this.right], JAM.policy.p3);
    this.right = v5035;
    var v5036 = JAM.call(Math.ceil, Math, [this.bottom], JAM.policy.p3);
    this.bottom = v5036;
    var v5037 = JAM.call(Math.ceil, Math, [this.left], JAM.policy.p3);
    this.left = v5037;
    return this;
  }
  function v93(a$$252, b$$192, c$$126, d$$78) {
    var v639;
    if (da$$1(a$$252)) {
      this.top = this.top - a$$252.top;
      this.right = this.right + a$$252.right;
      this.bottom = this.bottom + a$$252.bottom;
      v639 = this.left = this.left - a$$252.left;
    } else {
      this.top = this.top - a$$252;
      this.right = this.right + b$$192;
      this.bottom = this.bottom + c$$126;
      v639 = this.left = this.left - d$$78;
    }
    v639;
    return this;
  }
  function v92(a$$251) {
    var v640;
    if (this && a$$251) {
      var v2300;
      if (a$$251 instanceof P$$1) {
        var v4658 = a$$251.left >= this.left;
        if (v4658) {
          v4658 = a$$251.right <= this.right;
        }
        var v4246 = v4658;
        if (v4246) {
          v4246 = a$$251.top >= this.top;
        }
        var v3510 = v4246;
        if (v3510) {
          v3510 = a$$251.bottom <= this.bottom;
        }
        v2300 = v3510;
      } else {
        var v4661 = a$$251.x >= this.left;
        if (v4661) {
          v4661 = a$$251.x <= this.right;
        }
        var v4249 = v4661;
        if (v4249) {
          v4249 = a$$251.y >= this.top;
        }
        var v3511 = v4249;
        if (v3511) {
          v3511 = a$$251.y <= this.bottom;
        }
        v2300 = v3511;
      }
      v640 = v2300;
    } else {
      v640 = !1;
    }
    return v640;
  }
  function v91() {
    var JSCompiler_inline_result$$32;
    var a$$inline_147 = this.V;
    var v641;
    var v3513 = Pc;
    if (!v3513) {
      v3513 = "CSS1Compat" != a$$inline_147.compatMode;
    }
    if (v3513) {
      var v2302 = a$$inline_147.body;
      if (!v2302) {
        v2302 = a$$inline_147.documentElement;
      }
      v641 = v2302;
    } else {
      v641 = a$$inline_147.documentElement;
    }
    var b$$inline_148 = v641;
    var v642 = a$$inline_147.parentWindow;
    if (!v642) {
      v642 = a$$inline_147.defaultView;
    }
    a$$inline_147 = v642;
    var v643;
    var v4254 = N$$1;
    if (v4254) {
      v4254 = Uc("10");
    }
    var v3515 = v4254;
    if (v3515) {
      v3515 = a$$inline_147.pageYOffset != b$$inline_148.scrollTop;
    }
    if (v3515) {
      v643 = new M$$1(b$$inline_148.scrollLeft, b$$inline_148.scrollTop);
    } else {
      var v3516 = a$$inline_147.pageXOffset;
      if (!v3516) {
        v3516 = b$$inline_148.scrollLeft;
      }
      var v2307 = v3516;
      var v3517 = a$$inline_147.pageYOffset;
      if (!v3517) {
        v3517 = b$$inline_148.scrollTop;
      }
      v643 = new M$$1(v2307, v3517);
    }
    JSCompiler_inline_result$$32 = v643;
    return JSCompiler_inline_result$$32;
  }
  function v90() {
    return "CSS1Compat" == this.V.compatMode;
  }
  function v89(a$$249) {
    var v645 = this.V;
    return JAM.call(v645.createTextNode, v645, [String(a$$249)], JAM.policy.p3);
  }
  function v88(a$$248) {
    var v647 = this.V;
    return JAM.call(v647.createElement, v647, [a$$248], JAM.policy.p3);
  }
  function v87() {
    var a$$224 = m$$3.document;
    if (a$$224 && N$$1) {
      var b$$175 = Qc();
      var v648 = b$$175;
      if (!v648) {
        var v2311;
        if ("CSS1Compat" == a$$224.compatMode) {
          v2311 = parseInt(Sc, 10);
        } else {
          v2311 = 5;
        }
        v648 = v2311;
      }
      return v648;
    }
    return;
  }
  function v86(a$$216, b$$169) {
    var v650;
    if (q$$3(b$$169)) {
      v650 = b$$169;
    } else {
      v650 = a$$216;
    }
    var c$$114 = v650;
    this.x = this.x * a$$216;
    this.y = this.y * c$$114;
    return this;
  }
  function v85(a$$215, b$$168) {
    var v651;
    if (a$$215 instanceof M$$1) {
      this.x = this.x + a$$215.x;
      v651 = this.y = this.y + a$$215.y;
    } else {
      this.x = this.x + a$$215;
      var v3519 = q$$3(b$$168);
      if (v3519) {
        v3519 = this.y = this.y + b$$168;
      }
      v651 = v3519;
    }
    v651;
    return this;
  }
  function v84() {
    var v5038 = JAM.call(Math.round, Math, [this.x], JAM.policy.p3);
    this.x = v5038;
    var v5039 = JAM.call(Math.round, Math, [this.y], JAM.policy.p3);
    this.y = v5039;
    return this;
  }
  function v83() {
    var v5040 = JAM.call(Math.floor, Math, [this.x], JAM.policy.p3);
    this.x = v5040;
    var v5041 = JAM.call(Math.floor, Math, [this.y], JAM.policy.p3);
    this.y = v5041;
    return this;
  }
  function v82() {
    var v5042 = JAM.call(Math.ceil, Math, [this.x], JAM.policy.p3);
    this.x = v5042;
    var v5043 = JAM.call(Math.ceil, Math, [this.y], JAM.policy.p3);
    this.y = v5043;
    return this;
  }
  function v81() {
    function b$$153(b$$154) {
      var v658 = "" != b$$154;
      if (v658) {
        JAM.call(a$$192.push, a$$192, [b$$154], JAM.policy.p3);
      }
      return;
    }
    var a$$192 = [];
    x$$50(this.layers, b$$153);
    var v660;
    var v3520 = 0 < this.defaultBucket.length;
    if (v3520) {
      v3520 = 0 < a$$192.length;
    }
    if (v3520) {
      var v4267 = this.defaultBucket;
      v660 = JAM.call(v4267.join, v4267, [","], JAM.policy.p3) + "," + JAM.call(a$$192.join, a$$192, [","], JAM.policy.p3);
    } else {
      var v3522 = this.defaultBucket;
      v660 = JAM.call(v3522.join, v3522, [","], JAM.policy.p3) + JAM.call(a$$192.join, a$$192, [","], JAM.policy.p3);
    }
    return v660;
  }
  function v80(a$$191) {
    var v661;
    var v3523 = this.layers;
    if (JAM.call(v3523.hasOwnProperty, v3523, [a$$191], JAM.policy.p3)) {
      v661 = this.layers[a$$191];
    } else {
      v661 = "";
    }
    return v661;
  }
  function v79(a$$190) {
    var v662;
    if (a$$190) {
      var v3524 = this.layers;
      var v2324 = JAM.call(v3524.hasOwnProperty, v3524, [a$$190], JAM.policy.p3);
      if (v2324) {
        v2324 = "" == this.layers[a$$190];
      }
      v662 = v2324;
    } else {
      v662 = !0;
    }
    return v662;
  }
  function v78(a$$189, b$$152, c$$107) {
    var v663;
    var v3526 = JAM.call(this.ac, this, [c$$107], JAM.policy.p3);
    if (v3526) {
      v3526 = a$$189 = vb(a$$189, b$$152);
    }
    if (v3526) {
      v663 = JAM.call(this.bb, this, [a$$189, c$$107], JAM.policy.p3);
    } else {
      v663 = "";
    }
    return v663;
  }
  function v77(a$$188, b$$151) {
    var v664;
    if ("" == a$$188) {
      v664 = "";
    } else {
      var v2326;
      if (b$$151) {
        var v3527;
        var v4666 = this.layers;
        if (JAM.call(v4666.hasOwnProperty, v4666, [b$$151], JAM.policy.p3)) {
          var v4269 = this.layers;
          introspect(JAM.policy.p2) {
            v3527 = v4269[b$$151] = a$$188;
          }
        } else {
          v3527 = "";
        }
        v2326 = v3527;
      } else {
        var v4271 = this.defaultBucket;
        JAM.call(v4271.push, v4271, [a$$188], JAM.policy.p3);
        v2326 = a$$188;
      }
      v664 = v2326;
    }
    return v664;
  }
  function v76(a$$187, b$$150) {
    var v665 = this.layers;
    introspect(JAM.policy.p2) {
      v665[b$$150] = a$$187;
    }
    return;
  }
  function v75() {
    return !0;
  }
  function v74(a$$181, b$$144, c$$102) {
    var d$$66 = a$$181.length;
    var v666;
    if (p$$1(a$$181)) {
      v666 = JAM.call(a$$181.split, a$$181, [""], JAM.policy.p3);
    } else {
      v666 = a$$181;
    }
    var e$$45 = v666;
    var f$$25 = 0;
    var v668 = f$$25 < d$$66;
    for (;v668;) {
      var v667 = f$$25 in e$$45;
      if (v667) {
        JAM.call(b$$144.call, b$$144, [c$$102, e$$45[f$$25], f$$25, a$$181], JAM.policy.p3);
      }
      f$$25++;
      v668 = f$$25 < d$$66;
    }
    return;
  }
  function v73(a$$180, b$$143, c$$101) {
    var v669 = Xb.forEach;
    JAM.call(v669.call, v669, [a$$180, b$$143, c$$101], JAM.policy.p3);
    return;
  }
  function v72(a$$179, b$$142, c$$100) {
    var v670;
    if (null == c$$100) {
      v670 = 0;
    } else {
      var v2330;
      if (0 > c$$100) {
        v2330 = JAM.call(Math.max, Math, [0, a$$179.length + c$$100], JAM.policy.p3);
      } else {
        v2330 = c$$100;
      }
      v670 = v2330;
    }
    c$$100 = v670;
    if (p$$1(a$$179)) {
      var v671;
      var v3530 = p$$1(b$$142);
      if (v3530) {
        v3530 = 1 == b$$142.length;
      }
      if (v3530) {
        v671 = JAM.call(a$$179.indexOf, a$$179, [b$$142, c$$100], JAM.policy.p3);
      } else {
        v671 = -1;
      }
      return v671;
    }
    var v674 = c$$100 < a$$179.length;
    for (;v674;) {
      var v2334 = c$$100 in a$$179;
      if (v2334) {
        v2334 = a$$179[c$$100] === b$$142;
      }
      if (v2334) {
        return c$$100;
      }
      c$$100++;
      v674 = c$$100 < a$$179.length;
    }
    return -1;
  }
  function v71(a$$178, b$$141, c$$99) {
    var v675 = Xb.indexOf;
    return JAM.call(v675.call, v675, [a$$178, b$$141, c$$99], JAM.policy.p3);
  }
  function v70(a$$140, b$$111) {
    var v676;
    if (q$$3(b$$111)) {
      v676 = b$$111;
    } else {
      v676 = a$$140;
    }
    var c$$75 = v676;
    this.width = this.width * a$$140;
    this.height = this.height * c$$75;
    return this;
  }
  function v69() {
    var v5044 = JAM.call(Math.round, Math, [this.width], JAM.policy.p3);
    this.width = v5044;
    var v5045 = JAM.call(Math.round, Math, [this.height], JAM.policy.p3);
    this.height = v5045;
    return this;
  }
  function v68() {
    var v5046 = JAM.call(Math.floor, Math, [this.width], JAM.policy.p3);
    this.width = v5046;
    var v5047 = JAM.call(Math.floor, Math, [this.height], JAM.policy.p3);
    this.height = v5047;
    return this;
  }
  function v67() {
    var v5048 = JAM.call(Math.ceil, Math, [this.width], JAM.policy.p3);
    this.width = v5048;
    var v5049 = JAM.call(Math.ceil, Math, [this.height], JAM.policy.p3);
    this.height = v5049;
    return this;
  }
  function v66() {
    return +new Date;
  }
  function gi() {
    var v2339 = H$$1();
    return JAM.call(v2339.m, v2339, [18], JAM.policy.p3) == K$$1.ASYNC_EXPANSION_EMBED.EXPERIMENT;
  }
  function mi(a$$568) {
    var b$$441 = vf;
    return ki({dtd:Hb(b$$441)}, a$$568);
  }
  function Zi(a$$567) {
    var b$$440 = window.google_container_id;
    var v2342 = b$$440;
    if (v2342) {
      v2342 = JAM.call(document.getElementById, document, [b$$440], JAM.policy.p3);
    }
    var v687 = v2342;
    if (!v687) {
      v687 = JAM.call(document.getElementById, document, [a$$567], JAM.policy.p3);
    }
    var c$$299 = v687;
    var v2344 = c$$299 || b$$440;
    if (!v2344) {
      v2344 = !a$$567;
    }
    var v688 = v2344;
    if (!v688) {
      JAM.call(document.write, document, ["<span id=" + a$$567 + "></span>"], JAM.policy.p3);
      c$$299 = JAM.call(document.getElementById, document, [a$$567], JAM.policy.p3);
    }
    return c$$299;
  }
  function Gi() {
    var a$$565 = !1;
    var b$$438 = mc();
    var c$$298 = G$$1(b$$438, 8);
    var d$$183 = G$$1(b$$438, 9);
    var e$$108 = window.google_ad_section;
    if (ub(window)) {
      var v2346 = 3 < oc(b$$438, 5, G$$1(b$$438, 5) + 1);
      if (v2346) {
        v2346 = !a$$565;
      }
      if (v2346) {
        return !1;
      }
    } else {
      var f$$65 = oc(b$$438, 6, G$$1(b$$438, 6) + 1);
      if (window.google_num_slots_to_rotate) {
        var JSCompiler_inline_result$$46;
        ze = ze | 1;
        JSCompiler_inline_result$$46 = void 0;
        JSCompiler_inline_result$$46;
        introspect(JAM.policy.p2) {
          c$$298[e$$108] = "";
        }
        introspect(JAM.policy.p2) {
          var JSCompiler_temp_const$$27 = d$$183[e$$108] = ""
        }
        var JSCompiler_temp$$28;
        if (JSCompiler_temp$$28 = G$$1(b$$438, 12)) {
        } else {
          var a$$inline_439 = b$$438;
          var v3535 = new Date;
          var b$$inline_440 = JAM.call(v3535.getTime, v3535, [], JAM.policy.p3) % window.google_num_slots_to_rotate + 1;
          oc(a$$inline_439, 12, b$$inline_440);
          JSCompiler_temp$$28 = void 0;
        }
        JSCompiler_temp_const$$27;
        JSCompiler_temp$$28;
        if (G$$1(b$$438, 12) != f$$65) {
          return !1;
        }
      } else {
        var v3537 = !a$$565;
        if (v3537) {
          v3537 = 6 < f$$65;
        }
        var v2350 = v3537;
        if (v2350) {
          v2350 = "" == e$$108;
        }
        if (v2350) {
          return !1;
        }
      }
    }
    return !0;
  }
  function xi(a$$561, b$$434) {
    var c$$295 = b$$434.src;
    var d$$180;
    var a$$inline_432 = c$$295;
    var c$$inline_433 = a$$561;
    var b$$inline_434 = "/pagead/blank.gif#?";
    var d$$inline_435 = JAM.call(a$$inline_432.indexOf, a$$inline_432, [b$$inline_434], JAM.policy.p3);
    var v697;
    if (-1 == d$$inline_435) {
      v697 = a$$inline_432;
    } else {
      v697 = c$$inline_433 + JAM.call(a$$inline_432.substr, a$$inline_432, [d$$inline_435 + b$$inline_434.length], JAM.policy.p3);
    }
    d$$180 = v697;
    var v698 = d$$180 !== c$$295;
    if (v698) {
      b$$434.src = d$$180;
    }
    return;
  }
  function $i(a$$558) {
    function v25(b$$431, c$$292) {
      introspect(JAM.policy.p2) {
        a$$558[b$$431] = window[c$$292];
      }
      return;
    }
    function v24(b$$430, c$$291) {
      introspect(JAM.policy.p2) {
        a$$558[b$$430] = window[c$$291];
      }
      return;
    }
    function v23(b$$429, c$$290) {
      introspect(JAM.policy.p2) {
        a$$558[b$$429] = window[c$$290];
      }
      return;
    }
    x$$50(wh, v23);
    x$$50(vh, v24);
    x$$50(xh, v25);
    return;
  }
  function Yi(a$$557, b$$428, c$$289, d$$178) {
    if (d$$178) {
      var e$$105 = 0;
      var v700 = e$$105 < d$$178.length;
      for (;v700;) {
        var f$$63 = d$$178[e$$105];
        if (!JAM.call(f$$63, null, [], JAM.policy.p3)) {
          return;
        }
        ++e$$105;
        v700 = e$$105 < d$$178.length;
      }
    }
    if (Xi) {
      var v3539 = new Date;
      Xi = JAM.call(v3539.getTime, v3539, [], JAM.policy.p3) - Xi;
    }
    var v2357 = c$$289;
    if (v2357) {
      v2357 = JAM.call(c$$289.fb, c$$289, [], JAM.policy.p3);
    }
    var v701 = v2357;
    if (v701) {
      JAM.call(c$$289.Hc, c$$289, [], JAM.policy.p3);
    }
    JSCompiler_inline_label_Ki_417: {
      var a$$inline_414 = a$$557;
      var a$$inline_620 = window;
      var b$$inline_621;
      var a$$inline_749 = a$$inline_620;
      var b$$inline_750 = D$$1().document;
      var c$$inline_751 = {};
      var d$$inline_752;
      var a$$inline_885 = window;
      a$$inline_885 = dc(a$$inline_885, !1);
      d$$inline_752 = a$$inline_885.win;
      var e$$inline_753 = cf(d$$inline_752);
      var f$$inline_754 = Ze(D$$1(), b$$inline_750, a$$inline_749.google_ad_width, a$$inline_749.google_ad_height);
      var JSCompiler_inline_result$$868;
      var a$$inline_887 = a$$inline_749;
      var b$$inline_888 = f$$inline_754;
      var c$$inline_889 = e$$inline_753.isTopUrl;
      var d$$inline_890 = JAM.call(T$$1.getIframingState, T$$1, [D$$1()], JAM.policy.p3);
      var e$$inline_891 = 4;
      var v708;
      var v3540 = b$$inline_888;
      if (!v3540) {
        v3540 = d$$inline_890 != T$$1.SAME_DOMAIN_IFRAMING;
      }
      if (v3540) {
        var v2358;
        var v4279 = b$$inline_888;
        if (!v4279) {
          v4279 = d$$inline_890 != T$$1.CROSS_DOMAIN_IFRAMING;
        }
        if (v4279) {
          var v3541;
          var v4670 = b$$inline_888;
          if (v4670) {
            v4670 = d$$inline_890 == T$$1.SAME_DOMAIN_IFRAMING;
          }
          if (v4670) {
            v3541 = e$$inline_891 = 7;
          } else {
            var v4671 = b$$inline_888;
            if (v4671) {
              v4671 = d$$inline_890 == T$$1.CROSS_DOMAIN_IFRAMING;
            }
            var v4280 = v4671;
            if (v4280) {
              v4280 = e$$inline_891 = 8;
            }
            v3541 = v4280;
          }
          v2358 = v3541;
        } else {
          v2358 = e$$inline_891 = 6;
        }
        v708 = v2358;
      } else {
        v708 = e$$inline_891 = 5;
      }
      v708;
      var v709 = !!a$$inline_887.google_referrer_url;
      if (v709) {
        v709 = !Ye();
      }
      a$$inline_887 = v709;
      e$$inline_891 = e$$inline_891 + 5 * a$$inline_887;
      if (c$$inline_889) {
        e$$inline_891 = e$$inline_891 | 16;
      }
      JSCompiler_inline_result$$868 = "" + e$$inline_891;
      c$$inline_751.iframing = JSCompiler_inline_result$$868;
      var v2363 = !a$$inline_749.google_page_url;
      if (v2363) {
        v2363 = "yieldmanager" == b$$inline_750.domain;
      }
      if (v2363) {
        var v710 = b$$inline_750.URL;
        var v2364 = b$$inline_750.URL;
        e$$inline_753 = JAM.call(v710.substring, v710, [JAM.call(v2364.lastIndexOf, v2364, ["http"], JAM.policy.p3)], JAM.policy.p3);
        var v712 = -1 < JAM.call(e$$inline_753.indexOf, e$$inline_753, ["%"], JAM.policy.p3);
        for (;v712;) {
          try {
            e$$inline_753 = decodeURIComponent(e$$inline_753);
          } catch (g$$inline_755) {
            break;
          }
          v712 = -1 < JAM.call(e$$inline_753.indexOf, e$$inline_753, ["%"], JAM.policy.p3);
        }
        a$$inline_749.google_page_url = e$$inline_753;
      }
      var JSCompiler_inline_result$$872;
      var a$$inline_893 = a$$inline_749;
      var b$$inline_894 = af();
      var v714 = !b$$inline_894;
      if (v714) {
        v714 = !!a$$inline_893.google_page_url;
      }
      JSCompiler_inline_result$$872 = v714;
      if (JSCompiler_inline_result$$872) {
        var a$$inline_896 = c$$inline_751;
        var c$$inline_898 = b$$inline_750;
        var d$$inline_899 = f$$inline_754;
        a$$inline_896.page_url = a$$inline_749.google_page_url;
        var v715 = bf(c$$inline_898, d$$inline_899);
        if (!v715) {
          v715 = "EMPTY";
        }
        a$$inline_896.page_location = v715;
      } else {
        var a$$inline_901 = c$$inline_751;
        var v5050 = bf(b$$inline_750, f$$inline_754);
        a$$inline_901.page_url = v5050;
        a$$inline_901.page_location = null;
      }
      var v716;
      if (b$$inline_750.URL == c$$inline_751.page_url) {
        v716 = JAM.call(Date.parse, Date, [b$$inline_750.lastModified], JAM.policy.p3) / 1E3;
      } else {
        v716 = null;
      }
      c$$inline_751.last_modified_time = v716;
      if (Ye()) {
        var JSCompiler_inline_result$$883;
        var a$$inline_905 = d$$inline_752;
        var v717;
        if (a$$inline_905 == a$$inline_905.top) {
          v717 = a$$inline_905.document.referrer;
        } else {
          var v2372 = a$$inline_905 = af(!0);
          if (!v2372) {
            v2372 = "";
          }
          v717 = v2372;
        }
        JSCompiler_inline_result$$883 = v717;
        c$$inline_751.referrer_url = JSCompiler_inline_result$$883;
      } else {
        var JSCompiler_inline_result$$870;
        var a$$inline_907 = a$$inline_749;
        var b$$inline_908 = b$$inline_750;
        var c$$inline_909 = f$$inline_754;
        var d$$inline_910 = af();
        var v718;
        if (d$$inline_910) {
          v718 = "";
        } else {
          var v2374;
          if (c$$inline_909) {
            v2374 = a$$inline_907.google_referrer_url;
          } else {
            var v3553;
            var v4672 = a$$inline_907.google_page_url;
            if (v4672) {
              v4672 = a$$inline_907.google_referrer_url;
            }
            if (v4672) {
              v3553 = a$$inline_907.google_referrer_url;
            } else {
              v3553 = b$$inline_908.referrer;
            }
            v2374 = v3553;
          }
          v718 = v2374;
        }
        JSCompiler_inline_result$$870 = v718;
        c$$inline_751.referrer_url = JSCompiler_inline_result$$870;
      }
      b$$inline_621 = c$$inline_751;
      $e(a$$inline_620, b$$inline_621);
      var v3554 = window.google_page_url;
      if (!v3554) {
        v3554 = window.google_referrer_url;
      }
      var v2375 = v3554;
      if (!v2375) {
        v2375 = window.google_page_location;
      }
      if (v2375) {
      } else {
        var a$$inline_623 = K$$1;
        var v720 = J$$1();
        JAM.call(v720.k, v720, [[a$$inline_623.TOP_URL_REPLACES_MISSING_URL.CONTROL, a$$inline_623.TOP_URL_REPLACES_MISSING_URL.EXPERIMENT], wa$$1, 4], JAM.policy.p3);
      }
      if (!Gi()) {
        c$$289 = !1;
        break JSCompiler_inline_label_Ki_417;
      }
      var v724;
      if (Bc(window)) {
        v724 = ma$$1("googlesyndication");
      } else {
        v724 = ma$$1("doubleclick");
      }
      var b$$inline_415 = v724;
      var a$$inline_625 = a$$inline_414;
      var b$$inline_626 = {};
      $i(b$$inline_626);
      var a$$inline_627 = b$$inline_626;
      a$$inline_627.dt = vf;
      var v2380 = B$$2;
      if (v2380) {
        v2380 = window.google_bpp;
      }
      var v725 = v2380;
      if (v725) {
        a$$inline_627.bpp = window.google_bpp;
      }
      var b$$inline_628;
      JSCompiler_inline_label_Mi_761: {
        var a$$inline_757;
        var b$$inline_758 = D$$1();
        var c$$inline_759 = b$$inline_758.performance;
        var v3558 = c$$inline_759;
        if (v3558) {
          v3558 = c$$inline_759.timing;
        }
        var v2381 = v3558;
        if (v2381) {
          v2381 = c$$inline_759.now;
        }
        if (v2381) {
          var d$$inline_760 = c$$inline_759.timing.navigationStart + JAM.call(Math.round, Math, [JAM.call(c$$inline_759.now, c$$inline_759, [], JAM.policy.p3)], JAM.policy.p3);
          d$$inline_760 = d$$inline_760 - c$$inline_759.timing.domLoading;
        }
        if (!d$$inline_760) {
          b$$inline_628 = null;
          break JSCompiler_inline_label_Mi_761;
        }
        a$$inline_757 = a$$inline_757 || vf;
        var v2385 = b$$inline_758.Date;
        b$$inline_758 = JAM.call(v2385.now, v2385, [], JAM.policy.p3) - a$$inline_757;
        b$$inline_758 = d$$inline_760 - b$$inline_758;
        var v732;
        if (0 > b$$inline_758) {
          v732 = "-M";
        } else {
          var v2386;
          if (1E6 < b$$inline_758) {
            v2386 = "M";
          } else {
            v2386 = b$$inline_758;
          }
          v732 = v2386;
        }
        b$$inline_628 = v732;
      }
      if (b$$inline_628) {
        a$$inline_627.bdt = b$$inline_628;
      }
      var v5051 = Da$$1();
      a$$inline_627.shv = v5051;
      b$$inline_628 = !!window.google_test_1;
      var c$$inline_629 = !!window.google_test_2;
      if (b$$inline_628) {
        var v2390;
        if (c$$inline_629) {
          v2390 = "3";
        } else {
          v2390 = "2";
        }
        a$$inline_627.tsi = v2390;
      }
      var v5052 = JAM.call("/r20130906".replace, "/r20130906", ["/", ""], JAM.policy.p3);
      a$$inline_627.cbv = v5052;
      var v735 = JAM.call(/^\w{1,3}$/.test, /^\w{1,3}$/, [window.google_loader_used], JAM.policy.p3);
      if (v735) {
        a$$inline_627.saldr = window.google_loader_used;
      }
      b$$inline_628 = mc();
      if (Zg(window)) {
      } else {
        var a$$inline_762 = b$$inline_628;
        var b$$inline_763 = a$$inline_627;
        var c$$inline_764 = G$$1(a$$inline_762, 8);
        var d$$inline_765 = window.google_ad_section;
        var e$$inline_766 = window.google_ad_format;
        var f$$inline_767 = window.google_ad_slot;
        var v736 = c$$inline_764[d$$inline_765];
        if (v736) {
          b$$inline_763.prev_fmts = c$$inline_764[d$$inline_765];
        }
        var g$$inline_768 = G$$1(a$$inline_762, 9);
        var v737 = g$$inline_768[d$$inline_765];
        if (v737) {
          var v2392 = g$$inline_768[d$$inline_765];
          var v5053 = JAM.call(v2392.toLowerCase, v2392, [], JAM.policy.p3);
          b$$inline_763.prev_slotnames = v5053;
        }
        var v738;
        if (e$$inline_766) {
          var v2393;
          if (c$$inline_764[d$$inline_765]) {
            v2393 = c$$inline_764[d$$inline_765] + ("," + e$$inline_766);
          } else {
            v2393 = e$$inline_766;
          }
          introspect(JAM.policy.p2) {
            v738 = c$$inline_764[d$$inline_765] = v2393;
          }
        } else {
          var v2394 = f$$inline_767;
          if (v2394) {
            var v3563;
            if (g$$inline_768[d$$inline_765]) {
              v3563 = g$$inline_768[d$$inline_765] + ("," + f$$inline_767);
            } else {
              v3563 = f$$inline_767;
            }
            introspect(JAM.policy.p2) {
              v2394 = g$$inline_768[d$$inline_765] = v3563;
            }
          }
          v738 = v2394;
        }
        v738;
      }
      var v5054 = G$$1(b$$inline_628, 7);
      a$$inline_627.correlator = v5054;
      if (window.google_ad_channel) {
        c$$inline_629 = G$$1(b$$inline_628, 10);
        var d$$inline_630 = "";
        var v740 = window.google_ad_channel;
        var e$$inline_631 = JAM.call(v740.split, v740, [Ni], JAM.policy.p3);
        var f$$inline_632 = 0;
        var v742 = f$$inline_632 < e$$inline_631.length;
        for (;v742;) {
          var g$$inline_633 = e$$inline_631[f$$inline_632];
          var v741;
          if (c$$inline_629[g$$inline_633]) {
            v741 = d$$inline_630 = d$$inline_630 + (g$$inline_633 + "+");
          } else {
            introspect(JAM.policy.p2) {
              v741 = c$$inline_629[g$$inline_633] = !0;
            }
          }
          v741;
          f$$inline_632++;
          v742 = f$$inline_632 < e$$inline_631.length;
        }
        a$$inline_627.pv_ch = d$$inline_630;
      }
      if (window.google_ad_host_channel) {
        var JSCompiler_inline_result$$712;
        var b$$inline_771 = G$$1(b$$inline_628, 11);
        var v744 = window.google_ad_host_channel;
        var c$$inline_772 = JAM.call(v744.split, v744, ["|"], JAM.policy.p3);
        var d$$inline_773 = -1;
        var e$$inline_774 = [];
        var f$$inline_775 = 0;
        var v750 = f$$inline_775 < c$$inline_772.length;
        for (;v750;) {
          var v745 = c$$inline_772[f$$inline_775];
          var g$$inline_776 = JAM.call(v745.split, v745, [Ni], JAM.policy.p3);
          var v746 = b$$inline_771[f$$inline_775];
          if (!v746) {
            b$$inline_771[f$$inline_775] = {};
          }
          var h$$inline_777 = "";
          var k$$inline_778 = 0;
          var v748 = k$$inline_778 < g$$inline_776.length;
          for (;v748;) {
            var l$$inline_779 = g$$inline_776[k$$inline_778];
            var v747 = "" != l$$inline_779;
            if (v747) {
              var v2401;
              if (b$$inline_771[f$$inline_775][l$$inline_779]) {
                v2401 = h$$inline_777 = h$$inline_777 + ("+" + l$$inline_779);
              } else {
                var v3565 = b$$inline_771[f$$inline_775];
                introspect(JAM.policy.p2) {
                  v2401 = v3565[l$$inline_779] = !0;
                }
              }
              v2401;
            }
            k$$inline_778++;
            v748 = k$$inline_778 < g$$inline_776.length;
          }
          h$$inline_777 = JAM.call(h$$inline_777.slice, h$$inline_777, [1], JAM.policy.p3);
          e$$inline_774[f$$inline_775] = h$$inline_777;
          var v749 = "" != h$$inline_777;
          if (v749) {
            d$$inline_773 = f$$inline_775;
          }
          f$$inline_775++;
          v750 = f$$inline_775 < c$$inline_772.length;
        }
        c$$inline_772 = "";
        if (-1 < d$$inline_773) {
          f$$inline_775 = 0;
          var v751 = f$$inline_775 < d$$inline_773;
          for (;v751;) {
            c$$inline_772 = c$$inline_772 + (e$$inline_774[f$$inline_775] + "|");
            f$$inline_775++;
            v751 = f$$inline_775 < d$$inline_773;
          }
          c$$inline_772 = c$$inline_772 + e$$inline_774[d$$inline_773];
        }
        JSCompiler_inline_result$$712 = c$$inline_772;
        b$$inline_628 = JSCompiler_inline_result$$712;
        a$$inline_627.pv_h_ch = b$$inline_628;
      }
      if (Ea$$1) {
        a$$inline_627.jscb = 1;
      }
      if (Fa$$1) {
        a$$inline_627.jscd = 1;
      }
      a$$inline_627.frm = window.google_iframing;
      b$$inline_628 = D$$1().document;
      c$$inline_629 = "";
      try {
        c$$inline_629 = b$$inline_628.cookie;
      } catch (h$$inline_662) {
      }
      var a$$inline_781 = b$$inline_628.domain;
      var b$$inline_782 = c$$inline_629;
      var c$$inline_783 = ob$$1();
      var e$$inline_784 = b$$inline_628.referrer;
      var d$$inline_785 = window.screen;
      var v3568 = new Date;
      var f$$inline_786 = JAM.call(Math.round, Math, [JAM.call(v3568.getTime, v3568, [], JAM.policy.p3) / 1E3], JAM.policy.p3);
      var g$$inline_787 = window.google_analytics_domain_name;
      var v756;
      if ("undefined" == typeof g$$inline_787) {
        v756 = Fh("auto", a$$inline_781);
      } else {
        v756 = Fh(g$$inline_787, a$$inline_781);
      }
      a$$inline_781 = v756;
      var h$$inline_788 = -1 < JAM.call(b$$inline_782.indexOf, b$$inline_782, ["__utma=" + a$$inline_781 + "."], JAM.policy.p3);
      g$$inline_787 = -1 < JAM.call(b$$inline_782.indexOf, b$$inline_782, ["__utmb=" + a$$inline_781], JAM.policy.p3);
      var k$$inline_789 = mc("google_persistent_state");
      var JSCompiler_temp$$881;
      if (JSCompiler_temp$$881 = G$$1(k$$inline_789, 14)) {
      } else {
        var b$$inline_913 = {};
        JSCompiler_temp$$881 = oc(k$$inline_789, 14, b$$inline_913);
      }
      k$$inline_789 = JSCompiler_temp$$881;
      var l$$inline_790 = !1;
      if (h$$inline_788) {
        var v4879 = JAM.call(b$$inline_782.split, b$$inline_782, ["__utma=" + a$$inline_781 + "."], JAM.policy.p3)[1];
        var v4289 = JAM.call(v4879.split, v4879, [";"], JAM.policy.p3)[0];
        c$$inline_783 = JAM.call(v4289.split, v4289, ["."], JAM.policy.p3);
        var v4290;
        if (g$$inline_787) {
          v4290 = k$$inline_789.sid = c$$inline_783[3] + "";
        } else {
          var v4675 = k$$inline_789.sid;
          if (!v4675) {
            v4675 = k$$inline_789.sid = f$$inline_786 + "";
          }
          v4290 = v4675;
        }
        v4290;
        k$$inline_789.vid = c$$inline_783[0] + "." + c$$inline_783[1];
        k$$inline_789.from_cookie = !0;
      } else {
        var v760 = k$$inline_789.sid;
        if (!v760) {
          v760 = k$$inline_789.sid = f$$inline_786 + "";
        }
        var JSCompiler_temp_const$$874 = v760;
        var JSCompiler_temp$$875;
        if (JSCompiler_temp$$875 = k$$inline_789.vid) {
        } else {
          var JSCompiler_temp_const$$877 = l$$inline_790 = !0;
          var JSCompiler_temp_const$$876 = k$$inline_789;
          var JSCompiler_inline_result$$878;
          var a$$inline_915 = b$$inline_782;
          var b$$inline_916 = c$$inline_783;
          var c$$inline_917 = d$$inline_785;
          var d$$inline_918 = e$$inline_784;
          var JSCompiler_temp_const$$inline_919 = JAM.call(Math.round, Math, [2147483647 * JAM.call(Math.random, Math, [], JAM.policy.p3)], JAM.policy.p3);
          var JSCompiler_inline_result$$inline_920;
          var a$$inline_921 = a$$inline_915;
          var b$$inline_922 = b$$inline_916;
          var c$$inline_923 = c$$inline_917;
          var d$$inline_924 = d$$inline_918;
          var v2412 = Dh.appName;
          var v2413 = Dh.version;
          var v3573;
          if (Dh.language) {
            v3573 = Dh.language;
          } else {
            v3573 = Dh.browserLanguage;
          }
          var v2414 = v3573;
          var v2415 = Dh.platform;
          var v2416 = Dh.userAgent;
          var v3574;
          if (JAM.call(Dh.javaEnabled, Dh, [], JAM.policy.p3)) {
            v3574 = 1;
          } else {
            v3574 = 0;
          }
          var v762 = [v2412, v2413, v2414, v2415, v2416, v3574];
          var e$$inline_925 = JAM.call(v762.join, v762, [""], JAM.policy.p3);
          var v763;
          if (c$$inline_923) {
            v763 = e$$inline_925 = e$$inline_925 + (c$$inline_923.width + "x" + c$$inline_923.height + c$$inline_923.colorDepth);
          } else {
            var v2418 = window.java;
            if (v2418) {
              var v4678 = java.awt.Toolkit;
              var v4296 = JAM.call(v4678.getDefaultToolkit, v4678, [], JAM.policy.p3);
              c$$inline_923 = JAM.call(v4296.getScreenSize, v4296, [], JAM.policy.p3);
              v2418 = e$$inline_925 = e$$inline_925 + (c$$inline_923.screen.width + "x" + c$$inline_923.screen.height);
            }
            v763 = v2418;
          }
          v763;
          e$$inline_925 = e$$inline_925 + a$$inline_921;
          e$$inline_925 = e$$inline_925 + (d$$inline_924 || "");
          a$$inline_921 = e$$inline_925.length;
          var v764 = 0 < b$$inline_922;
          for (;v764;) {
            var v3576 = b$$inline_922;
            b$$inline_922 = b$$inline_922 - 1;
            var v3577 = a$$inline_921;
            a$$inline_921 = a$$inline_921 + 1;
            e$$inline_925 = e$$inline_925 + (v3576 ^ v3577);
            v764 = 0 < b$$inline_922;
          }
          JSCompiler_inline_result$$inline_920 = Jh(e$$inline_925);
          JSCompiler_inline_result$$878 = JSCompiler_temp_const$$inline_919 ^ JSCompiler_inline_result$$inline_920 & 2147483647;
          JSCompiler_temp_const$$877;
          JSCompiler_temp$$875 = JSCompiler_temp_const$$876.vid = JSCompiler_inline_result$$878 + "." + f$$inline_786;
        }
        JSCompiler_temp_const$$874;
        JSCompiler_temp$$875;
        k$$inline_789.from_cookie = !1;
      }
      if (k$$inline_789.cid) {
      } else {
        var JSCompiler_inline_result$$880;
        JSCompiler_inline_label_Hh_933: {
          var a$$inline_927 = b$$inline_782;
          var b$$inline_928 = 999;
          var c$$inline_929 = window.google_analytics_domain_name;
          if (c$$inline_929) {
            var v3578;
            if (0 == JAM.call(c$$inline_929.indexOf, c$$inline_929, ["."], JAM.policy.p3)) {
              v3578 = JAM.call(c$$inline_929.substr, c$$inline_929, [1], JAM.policy.p3);
            } else {
              v3578 = c$$inline_929;
            }
            c$$inline_929 = v3578;
            var v4298 = "" + c$$inline_929;
            b$$inline_928 = JAM.call(v4298.split, v4298, ["."], JAM.policy.p3).length;
          }
          var d$$inline_930;
          c$$inline_929 = 999;
          a$$inline_927 = JAM.call(a$$inline_927.split, a$$inline_927, [";"], JAM.policy.p3);
          var e$$inline_931 = 0;
          var v770 = e$$inline_931 < a$$inline_927.length;
          for (;v770;) {
            var v767 = JAM.call(Kh.exec, Kh, [a$$inline_927[e$$inline_931]], JAM.policy.p3);
            if (!v767) {
              v767 = JAM.call(Lh.exec, Lh, [a$$inline_927[e$$inline_931]], JAM.policy.p3);
            }
            var f$$inline_932 = v767;
            if (f$$inline_932) {
              if (f$$inline_932[1] == b$$inline_928) {
                JSCompiler_inline_result$$880 = f$$inline_932[2];
                break JSCompiler_inline_label_Hh_933;
              }
              var v769 = f$$inline_932[1] < c$$inline_929;
              if (v769) {
                c$$inline_929 = f$$inline_932[1];
                d$$inline_930 = f$$inline_932[2];
              }
            }
            e$$inline_931++;
            v770 = e$$inline_931 < a$$inline_927.length;
          }
          JSCompiler_inline_result$$880 = d$$inline_930;
        }
        b$$inline_782 = JSCompiler_inline_result$$880;
        var v2429;
        var v4299 = l$$inline_790 && b$$inline_782;
        if (v4299) {
          v4299 = -1 != JAM.call(b$$inline_782.search, b$$inline_782, [/^\d+\.\d+$/], JAM.policy.p3);
        }
        if (v4299) {
          v2429 = k$$inline_789.vid = b$$inline_782;
        } else {
          var v3580 = b$$inline_782 != k$$inline_789.vid;
          if (v3580) {
            v3580 = k$$inline_789.cid = b$$inline_782;
          }
          v2429 = v3580;
        }
        v2429;
      }
      k$$inline_789.dh = a$$inline_781;
      var v772 = k$$inline_789.hid;
      if (!v772) {
        var v5055 = JAM.call(Math.round, Math, [2147483647 * JAM.call(Math.random, Math, [], JAM.policy.p3)], JAM.policy.p3);
        k$$inline_789.hid = v5055;
      }
      b$$inline_628 = k$$inline_789;
      a$$inline_627.ga_vid = b$$inline_628.vid;
      a$$inline_627.ga_sid = b$$inline_628.sid;
      a$$inline_627.ga_hid = b$$inline_628.hid;
      a$$inline_627.ga_fc = b$$inline_628.from_cookie;
      a$$inline_627.ga_cid = b$$inline_628.cid;
      a$$inline_627.ga_wpids = window.google_analytics_uacct;
      var a$$inline_634 = b$$inline_626;
      var v2432 = new Date;
      a$$inline_634.u_tz = -JAM.call(v2432.getTimezoneOffset, v2432, [], JAM.policy.p3);
      var v5056 = ob$$1();
      a$$inline_634.u_his = v5056;
      var v5057 = JAM.call(navigator.javaEnabled, navigator, [], JAM.policy.p3);
      a$$inline_634.u_java = v5057;
      var v774 = window.screen;
      if (v774) {
        a$$inline_634.u_h = window.screen.height;
        a$$inline_634.u_w = window.screen.width;
        a$$inline_634.u_ah = window.screen.availHeight;
        a$$inline_634.u_aw = window.screen.availWidth;
        a$$inline_634.u_cd = window.screen.colorDepth;
      }
      var v775 = navigator.plugins;
      if (v775) {
        a$$inline_634.u_nplug = navigator.plugins.length;
      }
      var v776 = navigator.mimeTypes;
      if (v776) {
        a$$inline_634.u_nmime = navigator.mimeTypes.length;
      }
      if (a$$inline_625) {
        var JSCompiler_inline_result$$inline_635;
        var a$$inline_636 = a$$inline_625;
        var b$$inline_637 = b$$inline_626;
        var JSCompiler_temp_const$$719 = b$$inline_637;
        var JSCompiler_inline_result$$720;
        var a$$inline_792 = a$$inline_636;
        var b$$inline_793 = cd(a$$inline_792);
        var c$$inline_794 = "";
        if (b$$inline_793.body.createTextRange) {
          var v777 = b$$inline_793.body;
          b$$inline_793 = JAM.call(v777.createTextRange, v777, [], JAM.policy.p3);
          JAM.call(b$$inline_793.moveToElementText, b$$inline_793, [a$$inline_792], JAM.policy.p3);
          try {
            c$$inline_794 = JAM.call(b$$inline_793.queryCommandValue, b$$inline_793, ["FontName"], JAM.policy.p3);
          } catch (d$$inline_795) {
            c$$inline_794 = "";
          }
        }
        if (!c$$inline_794) {
          c$$inline_794 = R$$1(a$$inline_792, "fontFamily");
        }
        a$$inline_792 = JAM.call(c$$inline_794.split, c$$inline_794, [","], JAM.policy.p3);
        var v779 = 1 < a$$inline_792.length;
        if (v779) {
          c$$inline_794 = a$$inline_792[0];
        }
        JSCompiler_inline_label_Xa$$1_939: {
          var a$$inline_934 = c$$inline_794;
          var b$$inline_935 = "\"'";
          var c$$inline_936 = b$$inline_935.length;
          var d$$inline_937 = 0;
          var v783 = d$$inline_937 < c$$inline_936;
          for (;v783;) {
            var v780;
            if (1 == c$$inline_936) {
              v780 = b$$inline_935;
            } else {
              v780 = JAM.call(b$$inline_935.charAt, b$$inline_935, [d$$inline_937], JAM.policy.p3);
            }
            var e$$inline_938 = v780;
            var v2439 = JAM.call(a$$inline_934.charAt, a$$inline_934, [0], JAM.policy.p3) == e$$inline_938;
            if (v2439) {
              v2439 = JAM.call(a$$inline_934.charAt, a$$inline_934, [a$$inline_934.length - 1], JAM.policy.p3) == e$$inline_938;
            }
            if (v2439) {
              JSCompiler_inline_result$$720 = JAM.call(a$$inline_934.substring, a$$inline_934, [1, a$$inline_934.length - 1], JAM.policy.p3);
              break JSCompiler_inline_label_Xa$$1_939;
            }
            d$$inline_937++;
            v783 = d$$inline_937 < c$$inline_936;
          }
          JSCompiler_inline_result$$720 = a$$inline_934;
        }
        var v5058 = JAM.call(JSCompiler_inline_result$$720.toLowerCase, JSCompiler_inline_result$$720, [], JAM.policy.p3);
        JSCompiler_temp_const$$719.dff = v5058;
        var v5059 = Wd(a$$inline_636);
        b$$inline_637.dfs = v5059;
        JSCompiler_inline_result$$inline_635 = void 0;
        var JSCompiler_temp_const$$inline_638 = JSCompiler_inline_result$$inline_635;
        var JSCompiler_inline_result$$inline_639;
        var a$$inline_640 = a$$inline_625;
        var b$$inline_641 = b$$inline_626;
        if ("html" == w$$6.google_ad_output) {
          var c$$inline_642 = D$$1();
          if (c$$inline_642.google_top_values) {
            var d$$inline_643;
            var a$$inline_797 = c$$inline_642.google_top_values;
            var b$$inline_798 = w$$6.google_ad_width;
            var c$$inline_799 = w$$6.google_ad_height;
            var d$$inline_800 = parseInt(a$$inline_797[6], 10);
            var e$$inline_801 = parseInt(a$$inline_797[7], 10);
            var f$$inline_802 = parseInt(a$$inline_797[8], 10);
            a$$inline_797 = parseInt(a$$inline_797[9], 10);
            var v788;
            var v4887 = 0 < d$$inline_800;
            if (v4887) {
              v4887 = 0 < e$$inline_801;
            }
            var v4684 = v4887;
            if (v4684) {
              v4684 = 0 < f$$inline_802;
            }
            var v4303 = v4684;
            if (v4303) {
              v4303 = 0 < a$$inline_797;
            }
            var v3586 = v4303;
            if (v3586) {
              b$$inline_798 = JAM.call(Math.abs, Math, [f$$inline_802 - b$$inline_798], JAM.policy.p3);
              c$$inline_799 = JAM.call(Math.abs, Math, [a$$inline_797 - c$$inline_799], JAM.policy.p3);
              v3586 = 10 >= b$$inline_798 + c$$inline_799;
            }
            if (v3586) {
              v788 = new M$$1(d$$inline_800, e$$inline_801);
            } else {
              v788 = new M$$1(-12245933, -12245933);
            }
            d$$inline_643 = v788;
            var v5060 = JAM.call(Math.round, Math, [d$$inline_643.x], JAM.policy.p3);
            b$$inline_641.adx = v5060;
            var v5061 = JAM.call(Math.round, Math, [d$$inline_643.y], JAM.policy.p3);
            b$$inline_641.ady = v5061;
          }
          var v4304 = !b$$inline_641.adx;
          if (!v4304) {
            v4304 = -12245933 == b$$inline_641.adx;
          }
          var v3587 = v4304;
          if (!v3587) {
            v3587 = !b$$inline_641.ady;
          }
          var v2443 = v3587;
          if (!v2443) {
            v2443 = -12245933 == b$$inline_641.ady;
          }
          if (v2443) {
            try {
              var JSCompiler_inline_result$$718;
              var a$$inline_804 = a$$inline_640;
              var b$$inline_805 = window.top;
              var c$$inline_806 = new M$$1(0, 0);
              var d$$inline_807;
              var a$$inline_940 = cd(a$$inline_804);
              var v792;
              if (a$$inline_940) {
                var v2444 = a$$inline_940.parentWindow;
                if (!v2444) {
                  v2444 = a$$inline_940.defaultView;
                }
                v792 = v2444;
              } else {
                v792 = window;
              }
              d$$inline_807 = v792;
              var e$$inline_808 = a$$inline_804;
              var v4307 = d$$inline_807;
              if (v4307) {
                v4307 = d$$inline_807 != b$$inline_805;
              }
              var v3591 = v4307;
              if (v3591) {
                v3591 = e$$inline_808 = d$$inline_807.frameElement;
              }
              var v2445 = v3591;
              if (v2445) {
                v2445 = d$$inline_807 = d$$inline_807.parent;
              }
              var v803 = v2445;
              do {
                var JSCompiler_temp$$882;
                if (d$$inline_807 == b$$inline_805) {
                  JSCompiler_temp$$882 = Cd(e$$inline_808);
                } else {
                  var a$$inline_942 = e$$inline_808;
                  var b$$inline_943 = void 0;
                  if (a$$inline_942.getBoundingClientRect) {
                    b$$inline_943 = Ad(a$$inline_942);
                    b$$inline_943 = new M$$1(b$$inline_943.left, b$$inline_943.top);
                  } else {
                    var v793 = dd(a$$inline_942);
                    b$$inline_943 = JAM.call(v793.Ja, v793, [], JAM.policy.p3);
                    var c$$inline_944 = Cd(a$$inline_942);
                    b$$inline_943 = new M$$1(c$$inline_944.x - b$$inline_943.x, c$$inline_944.y - b$$inline_943.y);
                  }
                  var JSCompiler_temp$$inline_945 = void 0;
                  var v2452 = Oc;
                  if (v2452) {
                    v2452 = !Uc(12);
                  }
                  if (v2452) {
                    var JSCompiler_temp_const$$inline_946 = b$$inline_943;
                    var JSCompiler_inline_result$$inline_947 = void 0;
                    var a$$inline_948 = a$$inline_942;
                    var b$$inline_949 = void 0;
                    var v797;
                    if (N$$1) {
                      v797 = b$$inline_949 = "-ms-transform";
                    } else {
                      var v2453;
                      if (Pc) {
                        v2453 = b$$inline_949 = "-webkit-transform";
                      } else {
                        var v3593;
                        if (Nc) {
                          v3593 = b$$inline_949 = "-o-transform";
                        } else {
                          var v4308 = Oc;
                          if (v4308) {
                            v4308 = b$$inline_949 = "-moz-transform";
                          }
                          v3593 = v4308;
                        }
                        v2453 = v3593;
                      }
                      v797 = v2453;
                    }
                    v797;
                    var c$$inline_950 = void 0;
                    if (b$$inline_949) {
                      c$$inline_950 = R$$1(a$$inline_948, b$$inline_949);
                    }
                    if (!c$$inline_950) {
                      c$$inline_950 = R$$1(a$$inline_948, "transform");
                    }
                    var v798;
                    if (c$$inline_950) {
                      var v2455;
                      if (a$$inline_948 = JAM.call(c$$inline_950.match, c$$inline_950, [Xd], JAM.policy.p3)) {
                        v2455 = new M$$1(parseFloat(a$$inline_948[1]), parseFloat(a$$inline_948[2]));
                      } else {
                        v2455 = new M$$1(0, 0);
                      }
                      v798 = v2455;
                    } else {
                      v798 = new M$$1(0, 0);
                    }
                    JSCompiler_inline_result$$inline_947 = v798;
                    JSCompiler_temp$$inline_945 = new M$$1(JSCompiler_temp_const$$inline_946.x + JSCompiler_inline_result$$inline_947.x, JSCompiler_temp_const$$inline_946.y + JSCompiler_inline_result$$inline_947.y);
                  } else {
                    JSCompiler_temp$$inline_945 = b$$inline_943;
                  }
                  JSCompiler_temp$$882 = JSCompiler_temp$$inline_945;
                }
                var f$$inline_809 = JSCompiler_temp$$882;
                c$$inline_806.x = c$$inline_806.x + f$$inline_809.x;
                c$$inline_806.y = c$$inline_806.y + f$$inline_809.y;
                var v4311 = d$$inline_807;
                if (v4311) {
                  v4311 = d$$inline_807 != b$$inline_805;
                }
                var v3597 = v4311;
                if (v3597) {
                  v3597 = e$$inline_808 = d$$inline_807.frameElement;
                }
                var v2464 = v3597;
                if (v2464) {
                  v2464 = d$$inline_807 = d$$inline_807.parent;
                }
                v803 = v2464;
              } while (v803);
              JSCompiler_inline_result$$718 = c$$inline_806;
              d$$inline_643 = JSCompiler_inline_result$$718;
              var v5062 = JAM.call(Math.round, Math, [d$$inline_643.x], JAM.policy.p3);
              b$$inline_641.adx = v5062;
              var v5063 = JAM.call(Math.round, Math, [d$$inline_643.y], JAM.policy.p3);
              b$$inline_641.ady = v5063;
            } catch (e$$inline_663) {
              b$$inline_641.adx = -12245933;
              b$$inline_641.ady = -12245933;
            }
          }
        }
        JSCompiler_inline_result$$inline_639 = void 0;
      }
      var a$$inline_644 = b$$inline_626;
      var b$$inline_645 = D$$1();
      var c$$inline_646 = !1;
      var d$$inline_647 = de(c$$inline_646, b$$inline_645.top);
      if (d$$inline_647) {
        var JSCompiler_temp$$722;
        var v2466 = -12245933 == d$$inline_647.width;
        if (v2466) {
          v2466 = b$$inline_645.google_top_values;
        }
        if (JSCompiler_temp$$722 = v2466) {
          var JSCompiler_inline_result$$723;
          var a$$inline_811 = b$$inline_645.google_top_values;
          var b$$inline_812 = parseInt(a$$inline_811[10], 10);
          a$$inline_811 = parseInt(a$$inline_811[11], 10);
          var v809;
          var v3600 = 0 < b$$inline_812;
          if (v3600) {
            v3600 = 0 < a$$inline_811;
          }
          if (v3600) {
            v809 = new u$$2(b$$inline_812, a$$inline_811);
          } else {
            v809 = new u$$2(-12245933, -12245933);
          }
          JSCompiler_inline_result$$723 = v809;
          JSCompiler_temp$$722 = d$$inline_647 = JSCompiler_inline_result$$723;
        }
        JSCompiler_temp$$722;
        a$$inline_644.biw = d$$inline_647.width;
        a$$inline_644.bih = d$$inline_647.height;
      }
      var v2468 = b$$inline_645.top != b$$inline_645;
      if (v2468) {
        v2468 = b$$inline_645 = de(c$$inline_646, b$$inline_645);
      }
      var v811 = v2468;
      if (v811) {
        a$$inline_644.isw = b$$inline_645.width;
        a$$inline_644.ish = b$$inline_645.height;
      }
      var a$$inline_648 = b$$inline_626;
      var b$$inline_649;
      JSCompiler_inline_label_ee_817: {
        var a$$inline_814 = D$$1();
        if (a$$inline_814 == a$$inline_814.top) {
          b$$inline_649 = 0;
          break JSCompiler_inline_label_ee_817;
        }
        var b$$inline_815 = [];
        JAM.call(b$$inline_815.push, b$$inline_815, [a$$inline_814.document.URL], JAM.policy.p3);
        var v814 = a$$inline_814.name;
        if (v814) {
          JAM.call(b$$inline_815.push, b$$inline_815, [a$$inline_814.name], JAM.policy.p3);
        }
        var c$$inline_816 = !0;
        a$$inline_814 = de(!c$$inline_816, a$$inline_814);
        var v2472 = a$$inline_814.width;
        JAM.call(b$$inline_815.push, b$$inline_815, [JAM.call(v2472.toString, v2472, [], JAM.policy.p3)], JAM.policy.p3);
        var v2473 = a$$inline_814.height;
        JAM.call(b$$inline_815.push, b$$inline_815, [JAM.call(v2473.toString, v2473, [], JAM.policy.p3)], JAM.policy.p3);
        b$$inline_649 = Ab(JAM.call(b$$inline_815.join, b$$inline_815, [""], JAM.policy.p3));
      }
      var v819 = 0 != b$$inline_649;
      if (v819) {
        var v5064 = JAM.call(b$$inline_649.toString, b$$inline_649, [], JAM.policy.p3);
        a$$inline_648.ifk = v5064;
      }
      var a$$inline_650 = b$$inline_626;
      var b$$inline_651 = J$$1();
      var v2474 = n$$2(window.google_eids);
      if (v2474) {
        v2474 = 0 !== window.google_eids.length;
      }
      if (v2474) {
        ze = ze | 64;
        var c$$inline_652 = 0;
        var v821 = c$$inline_652 < window.google_eids.length;
        for (;v821;) {
          var v820 = p$$1(window.google_eids[c$$inline_652]);
          if (v820) {
            JAM.call(b$$inline_651.bb, b$$inline_651, [window.google_eids[c$$inline_652]], JAM.policy.p3);
          }
          c$$inline_652++;
          v821 = c$$inline_652 < window.google_eids.length;
        }
      }
      var v5065 = JAM.call(b$$inline_651.Ka, b$$inline_651, [], JAM.policy.p3);
      a$$inline_650.eid = v5065;
      var a$$inline_653 = b$$inline_626;
      var b$$inline_654 = me();
      var v823 = b$$inline_654 = JAM.call(b$$inline_654.getOseId, b$$inline_654, [], JAM.policy.p3);
      if (v823) {
        a$$inline_653.oid = b$$inline_654;
      }
      var a$$inline_655 = b$$inline_626;
      var b$$inline_656 = D$$1();
      a$$inline_655.ref = window.google_referrer_url;
      a$$inline_655.loc = window.google_page_location;
      var c$$inline_657 = hc();
      c$$inline_657 = cf(c$$inline_657);
      var d$$inline_658 = K$$1;
      var e$$inline_659 = 4;
      var f$$inline_660 = J$$1();
      var g$$inline_661 = d$$inline_658.TOP_URL_REPLACES_MISSING_URL.EXPERIMENT;
      if (JAM.call(f$$inline_660.m, f$$inline_660, [e$$inline_659], JAM.policy.p3) == g$$inline_661) {
        var b$$inline_821 = c$$inline_657.url;
        var v4313 = a$$inline_655.url;
        if (!v4313) {
          v4313 = a$$inline_655.ref;
        }
        var v3608 = v4313;
        if (!v3608) {
          v3608 = a$$inline_655.loc;
        }
        var v2480 = v3608;
        if (!v2480) {
          v2480 = !b$$inline_821;
        }
        var v825 = v2480;
        if (!v825) {
          a$$inline_655.url = b$$inline_821;
        }
      }
      d$$inline_658 = d$$inline_658.ALWAYS_USE_DELAYED_IMPRESSIONS.EXPERIMENT;
      if (JAM.call(f$$inline_660.m, f$$inline_660, [e$$inline_659], JAM.policy.p3) == d$$inline_658) {
        a$$inline_655.unviewed_position_start = "1";
      }
      var v829 = a$$inline_655.loc;
      if (!v829) {
        v829 = a$$inline_655.url;
      }
      e$$inline_659 = v829;
      var v830 = !Ye();
      if (v830) {
        v830 = c$$inline_657.url == a$$inline_655.ref;
      }
      f$$inline_660 = v830;
      var v2487 = f$$inline_660;
      if (!v2487) {
        v2487 = c$$inline_657.url == e$$inline_659;
      }
      var v831 = v2487;
      if (!v831) {
        a$$inline_655.top = c$$inline_657.url;
      }
      var v832 = window.google_async_rrc;
      if (v832) {
        a$$inline_655.rr = window.google_async_rrc;
      }
      a$$inline_655.rs = 0;
      var v833 = c$$inline_657 = b$$inline_656.google_top_js_status;
      if (v833) {
        a$$inline_655.jp = c$$inline_657;
      }
      if (Xi) {
        a$$inline_655.jpd = Xi;
      }
      if (c$$inline_657 = Mh(b$$inline_656)) {
        e$$inline_659 = new Uh(c$$inline_657);
        var v3612 = JAM.call(e$$inline_659.yb, e$$inline_659, [], JAM.policy.p3);
        if (v3612) {
          var v5066 = JAM.call(e$$inline_659.Ob, e$$inline_659, [], JAM.policy.p3);
          a$$inline_655.dss = v5066;
        }
        var v2489 = JAM.call(c$$inline_657.Oa, c$$inline_657, [], JAM.policy.p3);
        if (v2489) {
          var v5067 = JAM.call(c$$inline_657.Oa, c$$inline_657, [], JAM.policy.p3);
          a$$inline_655.dsd = v5067;
        }
      }
      if (ch(b$$inline_656)) {
        var a$$inline_825 = b$$inline_656;
        var b$$inline_826 = window.google_ad_client;
        var c$$inline_827;
        JSCompiler_inline_label_bh_956: {
          var a$$inline_952 = a$$inline_825;
          var b$$inline_953 = b$$inline_826;
          var c$$inline_954 = a$$inline_952.location.hash;
          var v2490 = !c$$inline_954;
          if (!v2490) {
            v2490 = !c$$inline_954.indexOf;
          }
          if (v2490) {
            c$$inline_827 = !1;
            break JSCompiler_inline_label_bh_956;
          }
          var d$$inline_955;
          var v837 = -1 != JAM.call(c$$inline_954.indexOf, c$$inline_954, ["google_anchor_debug"], JAM.policy.p3);
          if (v837) {
            d$$inline_955 = Yg(1);
          }
          if (!d$$inline_955) {
            c$$inline_827 = !1;
            break JSCompiler_inline_label_bh_956;
          }
          JAM.call(d$$inline_955.ja, d$$inline_955, [a$$inline_952, b$$inline_953], JAM.policy.p3);
          c$$inline_827 = !0;
        }
        if (!c$$inline_827) {
          new dh(a$$inline_825);
        }
      }
      c$$inline_657 = rg(b$$inline_656);
      var v840 = c$$inline_657.wasReactiveAdConfigHandlerRegistered;
      if (v840) {
        var v5068 = ah(b$$inline_656);
        a$$inline_655.fc = v5068;
      }
      if (ub(w$$6)) {
      } else {
        var JSCompiler_temp_const$$727 = a$$inline_655;
        var JSCompiler_inline_result$$728;
        var a$$inline_829 = "";
        if (document.documentMode) {
          var b$$inline_830 = JAM.call(document.createElement, document, ["IFRAME"], JAM.policy.p3);
          b$$inline_830.frameBorder = 0;
          b$$inline_830.style.height = 0;
          b$$inline_830.style.width = 0;
          b$$inline_830.style.position = "absolute";
          if (document.body) {
            var v844 = document.body;
            JAM.call(v844.appendChild, v844, [b$$inline_830], JAM.policy.p3);
            try {
              var c$$inline_831 = b$$inline_830.contentWindow.document;
              JAM.call(c$$inline_831.open, c$$inline_831, [], JAM.policy.p3);
              JAM.call(c$$inline_831.write, c$$inline_831, ["<!DOCTYPE html>"], JAM.policy.p3);
              JAM.call(c$$inline_831.close, c$$inline_831, [], JAM.policy.p3);
              a$$inline_829 = a$$inline_829 + c$$inline_831.documentMode;
            } catch (d$$inline_832) {
            }
            var v846 = document.body;
            JAM.call(v846.removeChild, v846, [b$$inline_830], JAM.policy.p3);
          }
        }
        JSCompiler_inline_result$$728 = a$$inline_829;
        JSCompiler_temp_const$$727.docm = JSCompiler_inline_result$$728;
      }
      c$$inline_657 = K$$1.SS;
      var v850 = J$$1();
      e$$inline_659 = JAM.call(v850.m, v850, [14], JAM.policy.p3);
      var v851 = e$$inline_659 == c$$inline_657.COUNT_AD_FRAMES_ON_PAGE_EXPERIMENT;
      if (v851) {
        var v5069 = JAM.call(T$$1.frameCountsWithDelayedPingback, T$$1, [b$$inline_656, a$$inline_655.adk, a$$inline_655.correlator, a$$inline_655.frm], JAM.policy.p3);
        a$$inline_655.frmn = v5069;
      }
      if (e$$inline_659 == c$$inline_657.BROWSER_DIMENSIONS_EXPERIMENT) {
        var JSCompiler_inline_result$$730;
        try {
          var b$$inline_835 = b$$inline_656.screenX;
          var c$$inline_836 = b$$inline_656.screenY;
        } catch (d$$inline_841) {
        }
        try {
          var e$$inline_837 = b$$inline_656.outerWidth;
          var f$$inline_838 = b$$inline_656.outerHeight;
        } catch (g$$inline_842) {
        }
        try {
          var h$$inline_839 = b$$inline_656.innerWidth;
          var k$$inline_840 = b$$inline_656.innerHeight;
        } catch (l$$inline_843) {
        }
        var v852 = b$$inline_656.screenLeft;
        var v853 = b$$inline_656.screenTop;
        var v2499;
        if (b$$inline_656.screen) {
          v2499 = b$$inline_656.screen.availWidth;
        } else {
          v2499 = void 0;
        }
        var v854 = v2499;
        var v2500;
        if (b$$inline_656.screen) {
          v2500 = b$$inline_656.screen.availTop;
        } else {
          v2500 = void 0;
        }
        JSCompiler_inline_result$$730 = [v852, v853, b$$inline_835, c$$inline_836, v854, v2500, e$$inline_837, f$$inline_838, h$$inline_839, k$$inline_840];
        b$$inline_656 = JSCompiler_inline_result$$730;
        var v5070 = JAM.call(b$$inline_656.join, b$$inline_656, [","], JAM.policy.p3);
        a$$inline_655.brdim = v5070;
      }
      var a$$inline_845 = 0;
      var v857 = void 0 === w$$6.postMessage;
      if (v857) {
        a$$inline_845 = a$$inline_845 | 1;
      }
      b$$inline_656 = a$$inline_845;
      var v858 = 0 < b$$inline_656;
      if (v858) {
        a$$inline_655.osd = b$$inline_656;
      }
      var v5071 = Xe(document);
      a$$inline_655.vis = v5071;
      b$$inline_626.fu = ze;
      a$$inline_414 = b$$inline_626;
      var c$$inline_416 = L$$1(b$$inline_415, "/pagead/ads?");
      var JSCompiler_inline_result$$505;
      var v859 = J$$1();
      var a$$inline_665 = JAM.call(v859.m, v859, [19], JAM.policy.p3);
      var b$$inline_666 = K$$1.PRERENDERING_DELAYED_IMPRESSION;
      var v860 = a$$inline_665 == b$$inline_666.EXPERIMENT;
      if (v860) {
        v860 = "html" == window.google_ad_output;
      }
      JSCompiler_inline_result$$505 = v860;
      if (JSCompiler_inline_result$$505) {
        a$$inline_414.unviewed_position_start = "1";
      }
      var v4315 = a$$inline_414.unviewed_position_start;
      if (!v4315) {
        var v4690 = w$$6.google_ad_output;
        if (v4690) {
          v4690 = "html" !== w$$6.google_ad_output;
        }
        v4315 = v4690;
      }
      var v3619 = v4315;
      if (!v3619) {
        v3619 = 3 != Xe(v$$1);
      }
      var v2505 = v3619;
      if (!v2505) {
        v2505 = !Ia$$1;
      }
      var v861 = v2505;
      if (!v861) {
        zi = !0;
        yi = c$$inline_416;
        c$$inline_416 = L$$1(b$$inline_415, "/pagead/blank.gif#?");
      }
      var v862 = window;
      var v5072 = ki(a$$inline_414, c$$inline_416 + "");
      v862.google_ad_url = v5072;
      c$$289 = !0;
    }
    var v2508 = a$$557;
    if (v2508) {
      v2508 = a$$557.id == b$$428;
    }
    var v863 = v2508;
    if (v863) {
      qd(a$$557);
    }
    if (c$$289) {
      var JSCompiler_inline_result$$3;
      var d$$inline_418;
      var a$$inline_419 = window;
      var b$$inline_420 = document;
      var c$$inline_421 = window.google_ad_url;
      if (!B$$2) {
        wb(a$$inline_419);
      }
      var e$$inline_422 = yb(a$$inline_419);
      c$$inline_421 = ki({ifi:e$$inline_422}, c$$inline_421);
      var v865;
      if (1991 < c$$inline_421.length) {
        v865 = JAM.call(c$$inline_421.substring, c$$inline_421, [0, 1983], JAM.policy.p3) + "&trunc=1";
      } else {
        v865 = c$$inline_421;
      }
      c$$inline_421 = v865;
      c$$inline_421 = JAM.call(c$$inline_421.replace, c$$inline_421, [/%\w?$/, ""], JAM.policy.p3);
      var f$$inline_423 = "script";
      var g$$inline_424 = Lb(e$$inline_422);
      H$$1();
      var v3623 = "js" != a$$inline_419.google_ad_output;
      if (v3623) {
        v3623 = "json_html" != a$$inline_419.google_ad_output;
      }
      var v2512 = v3623;
      if (!v2512) {
        var v3624 = !a$$inline_419.google_ad_request_done;
        if (v3624) {
          v3624 = !a$$inline_419.google_radlink_request_done;
        }
        v2512 = v3624;
      }
      if (v2512) {
        if ("html" == a$$inline_419.google_ad_output) {
          var a$$inline_668 = a$$inline_419;
          var b$$inline_669 = b$$inline_420;
          var c$$inline_670 = c$$inline_421;
          var d$$inline_671 = e$$inline_422;
          var e$$inline_672 = ci;
          var f$$inline_673 = d$$inline_418;
          var v866;
          if (e$$inline_672) {
            v866 = JAM.call(c$$inline_670.replace, c$$inline_670, [/&ea=[^&]*/, ""], JAM.policy.p3) + "&ea=0";
          } else {
            v866 = c$$inline_670;
          }
          var g$$inline_674 = v866;
          var h$$inline_675 = Lb(d$$inline_671);
          var k$$inline_676 = {id:h$$inline_675, name:h$$inline_675};
          Ff(k$$inline_676, a$$inline_668.google_ad_width, a$$inline_668.google_ad_height, !1, mi(g$$inline_674));
          var l$$inline_677 = Cf(k$$inline_676);
          var v2515 = a$$inline_668.google_container_id;
          if (!v2515) {
            v2515 = f$$inline_673;
          }
          var v871 = v2515;
          if (!v871) {
            v871 = null;
          }
          var z$$inline_678 = v871;
          f$$inline_673 = a$$inline_668.google_async_iframe_id;
          var C$$inline_679 = a$$inline_668.google_container_id;
          var v872 = e$$inline_672;
          if (v872) {
            var v2517 = zf();
            if (!v2517) {
              v2517 = gi();
            }
            v872 = v2517;
          }
          e$$inline_672 = v872;
          var I$$inline_680 = "";
          if (e$$inline_672) {
            if (gi()) {
              var JSCompiler_inline_result$$inline_681;
              var b$$inline_682;
              var a$$inline_683 = 10;
              var c$$inline_684 = b$$inline_682 || th;
              var d$$inline_685 = c$$inline_684.length;
              var e$$inline_686 = "";
              var v2518 = a$$inline_683;
              a$$inline_683 = a$$inline_683 - 1;
              var v873 = 0 < v2518;
              for (;v873;) {
                e$$inline_686 = e$$inline_686 + JAM.call(c$$inline_684.charAt, c$$inline_684, [JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p3) * d$$inline_685], JAM.policy.p3)], JAM.policy.p3);
                var v2520 = a$$inline_683;
                a$$inline_683 = a$$inline_683 - 1;
                v873 = 0 < v2520;
              }
              JSCompiler_inline_result$$inline_681 = e$$inline_686;
              var JSCompiler_temp_const$$inline_687 = I$$inline_680 = JSCompiler_inline_result$$inline_681;
              var JSCompiler_temp_const$$inline_688 = c$$inline_670;
              var JSCompiler_temp_const$$inline_689 = I$$inline_680;
              var JSCompiler_inline_result$$inline_690;
              var a$$inline_691 = v$$1.URL;
              var v874 = !!a$$inline_691;
              if (v874) {
                var v2522 = 0 < JAM.call(a$$inline_691.indexOf, a$$inline_691, ["?google_debug"], JAM.policy.p3);
                if (!v2522) {
                  v2522 = 0 < JAM.call(a$$inline_691.indexOf, a$$inline_691, ["&google_debug"], JAM.policy.p3);
                }
                v874 = v2522;
              }
              JSCompiler_inline_result$$inline_690 = v874;
              JSCompiler_temp_const$$inline_687;
              c$$inline_670 = Zd(JSCompiler_temp_const$$inline_688, JSCompiler_temp_const$$inline_689, JSCompiler_inline_result$$inline_690);
            }
          } else {
            c$$inline_670 = g$$inline_674;
          }
          if (Zg(a$$inline_668)) {
            var a$$inline_692 = a$$inline_668;
            var b$$inline_693 = b$$inline_669;
            var c$$inline_694 = c$$inline_670;
            var d$$inline_695 = k$$inline_676;
            var e$$inline_696 = f$$inline_673;
            var f$$inline_697 = D$$1();
            var JSCompiler_inline_result$$724;
            JSCompiler_inline_label_Xg_854: {
              var a$$inline_849 = f$$inline_697;
              var b$$inline_850 = a$$inline_692;
              var c$$inline_851 = b$$inline_850.google_reactive_ad_format;
              if (!Ec(lg, c$$inline_851)) {
                JSCompiler_inline_result$$724 = !1;
                break JSCompiler_inline_label_Xg_854;
              }
              var v877 = Ug[c$$inline_851];
              if (!v877) {
                v877 = null;
              }
              c$$inline_851 = v877;
              var JSCompiler_inline_result$$884;
              JSCompiler_inline_label_Vg_960: {
                var a$$inline_957 = a$$inline_849;
                var b$$inline_958 = b$$inline_850;
                switch(c$$inline_851) {
                  case 1:
                    var JSCompiler_temp$$963;
                    if (JSCompiler_temp$$963 = Hg(a$$inline_957)) {
                      rg(a$$inline_957);
                      JSCompiler_temp$$963 = !0;
                    }
                    JSCompiler_inline_result$$884 = JSCompiler_temp$$963;
                    break JSCompiler_inline_label_Vg_960;
                  case 2:
                    var a$$inline_966 = a$$inline_957;
                    var JSCompiler_temp$$969;
                    if (JSCompiler_temp$$969 = Rg(a$$inline_966, b$$inline_958)) {
                      var a$$inline_970 = a$$inline_966;
                      a$$inline_970 = rg(a$$inline_970);
                      JSCompiler_temp$$969 = !!a$$inline_970.wasReactiveAdConfigReceived[2];
                    }
                    JSCompiler_inline_result$$884 = JSCompiler_temp$$969;
                    break JSCompiler_inline_label_Vg_960;
                }
                JSCompiler_inline_result$$884 = !1;
              }
              if (!JSCompiler_inline_result$$884) {
                JSCompiler_inline_result$$724 = !1;
                break JSCompiler_inline_label_Xg_854;
              }
              var d$$inline_852 = rg(a$$inline_849);
              var e$$inline_853 = d$$inline_852.wasReactiveAdCreated[c$$inline_851];
              var v883 = d$$inline_852.wasReactiveAdCreated;
              introspect(JAM.policy.p2) {
                v883[c$$inline_851] = !0;
              }
              JSCompiler_inline_result$$724 = !e$$inline_853;
            }
            if (JSCompiler_inline_result$$724) {
              f$$inline_697 = Zg(a$$inline_692);
              var g$$inline_698 = {};
              g$$inline_698.fa = f$$inline_697;
              c$$inline_694 = ki(g$$inline_698, c$$inline_694);
              var v5073 = mi(c$$inline_694);
              d$$inline_695.src = v5073;
              c$$inline_694 = Bf(b$$inline_693, d$$inline_695);
              var v884 = b$$inline_693.body;
              JAM.call(v884.appendChild, v884, [c$$inline_694], JAM.policy.p3);
              JSCompiler_inline_label_qh_867: {
                var a$$inline_855 = a$$inline_692;
                var b$$inline_856 = e$$inline_696;
                var c$$inline_857 = c$$inline_694;
                var d$$inline_858 = D$$1();
                var v4323 = a$$inline_855 && b$$inline_856;
                if (v4323) {
                  v4323 = c$$inline_857;
                }
                var v3633 = v4323;
                if (v3633) {
                  v3633 = d$$inline_858;
                }
                if (!v3633) {
                  break JSCompiler_inline_label_qh_867;
                }
                var v886 = d$$inline_858.document;
                b$$inline_856 = JAM.call(v886.getElementById, v886, [b$$inline_856], JAM.policy.p3);
                if (!b$$inline_856) {
                  break JSCompiler_inline_label_qh_867;
                }
                var v888 = Ug[a$$inline_855.google_reactive_ad_format];
                if (!v888) {
                  v888 = null;
                }
                var e$$inline_859 = v888;
                switch(e$$inline_859) {
                  case 1:
                    var a$$inline_860 = a$$inline_855;
                    var b$$inline_861 = b$$inline_856;
                    var c$$inline_862 = c$$inline_857;
                    var d$$inline_863 = d$$inline_858;
                    JSCompiler_inline_label_Ig_962: {
                      switch(a$$inline_860.google_reactive_ad_format) {
                        case 1:
                          a$$inline_860 = "bottom";
                          break JSCompiler_inline_label_Ig_962;
                      }
                      a$$inline_860 = null;
                    }
                    b$$inline_861 = new X$$1(b$$inline_861, c$$inline_862, d$$inline_863, a$$inline_860);
                    new jh(d$$inline_863, b$$inline_861);
                    break JSCompiler_inline_label_qh_867;
                  case 2:
                    var a$$inline_864 = a$$inline_855;
                    var c$$inline_865 = c$$inline_857;
                    var d$$inline_866 = d$$inline_858;
                    a$$inline_864 = new Y$$1(b$$inline_856, c$$inline_865, d$$inline_866);
                    new Z$$1(d$$inline_866, c$$inline_865, a$$inline_864);
                }
              }
            }
          } else {
            if (hi(a$$inline_668)) {
              g$$inline_674 = ga$$1(qi, a$$inline_668, b$$inline_669, e$$inline_672, c$$inline_670, h$$inline_675, k$$inline_676, a$$inline_668.google_ad_width, a$$inline_668.google_ad_height, z$$inline_678, f$$inline_673, C$$inline_679);
              g$$inline_674 = Mb(g$$inline_674);
              ni(a$$inline_668, c$$inline_670, g$$inline_674);
            } else {
              if ("S" == a$$inline_668.google_ad_handling_mode) {
                var a$$inline_699 = a$$inline_668;
                var b$$inline_700 = c$$inline_670;
                var c$$inline_701 = ce(b$$inline_700, "w");
                var d$$inline_702 = ce(b$$inline_700, "h");
                var e$$inline_703 = ce(b$$inline_700, "ifi");
                e$$inline_703 = Lb(e$$inline_703);
                e$$inline_703 = {id:e$$inline_703, name:e$$inline_703};
                var f$$inline_704 = "U-" + b$$inline_700;
                Ff(e$$inline_703, c$$inline_701, d$$inline_702, !1, Df(f$$inline_704));
                var v892 = a$$inline_699.document;
                JAM.call(v892.write, v892, [Cf(e$$inline_703)], JAM.policy.p3);
              } else {
                oi(a$$inline_668, b$$inline_669, e$$inline_672, c$$inline_670, h$$inline_675, k$$inline_676, a$$inline_668.google_ad_width, a$$inline_668.google_ad_height, z$$inline_678, f$$inline_673, C$$inline_679);
              }
            }
          }
          var v2530 = e$$inline_672;
          if (v2530) {
            v2530 = gi();
          }
          var v899 = v2530;
          if (v899) {
            var v3636 = zf();
            if (!v3636) {
              JAM.call(setTimeout, null, [xe("ac::write_ee", ei, xc), 0]);
            }
            var v3637 = w$$6.google_eas_queue;
            var v4326 = a$$inline_668.google_ad_width;
            var v4327 = a$$inline_668.google_ad_height;
            var v4328 = D$$1();
            var v4693 = f$$inline_673;
            if (!v4693) {
              v4693 = void 0;
            }
            JAM.call(v3637.push, v3637, [Yd(h$$inline_675, c$$inline_670, v4326, v4327, I$$inline_680, v4328, v4693, "google_expandable_ad_slot" + d$$inline_671)], JAM.policy.p3);
          }
          if (B$$2) {
            var a$$inline_705 = a$$inline_668.google_async_iframe_id;
            var v3639 = ["<!DOCTYPE html><html><body>", l$$inline_677, "</body></html>"];
            var c$$inline_706 = "javascript:" + ab$$1(JAM.call(v3639.join, v3639, [""], JAM.policy.p3));
            var d$$inline_707 = D$$1();
            var v901 = new Me(d$$inline_707);
            JAM.call(v901.set, v901, [a$$inline_705, c$$inline_706], JAM.policy.p3);
          }
          a$$inline_668 = JAM.call(document.getElementById, document, [h$$inline_675], JAM.policy.p3);
          var v902 = zi && a$$inline_668;
          if (v902) {
            Ai(a$$inline_668, b$$inline_669);
          }
        }
      } else {
        JAM.call(b$$inline_420.write, b$$inline_420, ["<" + f$$inline_423 + ' language="JavaScript1.1" src=' + ji(mi(c$$inline_421)) + "></" + f$$inline_423 + ">"], JAM.policy.p3);
      }
      sc = ga$$1(wi, g$$inline_424, c$$inline_421, a$$inline_419.google_ad_output, a$$inline_419.google_ad_width, a$$inline_419.google_ad_height);
      JSCompiler_inline_result$$3 = void 0;
      var JSCompiler_temp_const$$4 = JSCompiler_inline_result$$3;
      var JSCompiler_inline_result$$5;
      var a$$inline_426 = window;
      Bh(a$$inline_426);
      JSCompiler_inline_result$$5 = void 0;
      JSCompiler_temp_const$$4;
      var JSCompiler_temp_const$$70 = JSCompiler_inline_result$$5;
      var JSCompiler_temp$$71;
      var v2533 = a$$557 = bg;
      if (v2533) {
        v2533 = !JAM.call(a$$557.Ta, a$$557, [], JAM.policy.p3);
      }
      if (JSCompiler_temp$$71 = v2533) {
      } else {
        if (sc) {
          JAM.call(sc, null, [], JAM.policy.p3);
        }
        JSCompiler_temp$$71 = void 0;
      }
    } else {
      if (B$$2) {
        uf();
        Wb();
      }
    }
    return;
  }
  function Vi() {
    var a$$556 = w$$6;
    var v2534 = "html" != a$$556.google_ad_output;
    if (!v2534) {
      v2534 = ub(a$$556);
    }
    var v910 = v2534;
    if (!v910) {
      var v2535 = J$$1();
      JAM.call(v2535.k, v2535, [[K$$1.SEND_LOAD_TIME_PINGBACKS.EXPERIMENT], ra$$1, 16], JAM.policy.p3);
    }
    return;
  }
  function Ai(a$$541, b$$413) {
    function v26() {
      xi(yi, a$$541);
      A$$1(v$$1, "webkitvisibilitychange", c$$278);
      return;
    }
    if (3 != Xe(b$$413)) {
      xi(yi, a$$541);
    } else {
      var c$$278 = v26;
      y$$31(b$$413, "webkitvisibilitychange", c$$278);
    }
    zi = !1;
    return;
  }
  function wi(a$$540, b$$412, c$$277, d$$169, e$$100) {
    a$$540 = JAM.call(document.getElementById, document, [a$$540], JAM.policy.p3);
    var a$$inline_370 = b$$412;
    var b$$inline_371 = a$$540;
    var c$$inline_372 = c$$277;
    var d$$inline_373 = d$$169;
    var e$$inline_374 = e$$100;
    var f$$inline_375 = me();
    var v912 = JAM.call(f$$inline_375.getOseId, f$$inline_375, [], JAM.policy.p3);
    if (v912) {
      JAM.call(f$$inline_375.registerAdBlock, f$$inline_375, [a$$inline_370, 1, String(c$$inline_372 || ""), b$$inline_371, d$$inline_373, e$$inline_374], JAM.policy.p3);
    }
    if (B$$2) {
      uf();
      Wb();
    }
    return;
  }
  function oi(a$$537, b$$409, c$$274, d$$166, e$$97, f$$56, g$$34, h$$26, k$$13, l$$15, z$$8) {
    var v2540 = !c$$274;
    if (!v2540) {
      v2540 = gi();
    }
    if (v2540) {
      var v5074 = mi(d$$166);
      f$$56.src = v5074;
      var JSCompiler_temp_const$$7 = a$$537 = Cf(f$$56);
      var JSCompiler_temp$$8;
      if (z$$8) {
        var a$$inline_366 = z$$8;
        var c$$inline_368 = a$$537;
        var v4333 = a$$inline_366;
        if (v4333) {
          v4333 = a$$inline_366 = JAM.call(b$$409.getElementById, b$$409, [a$$inline_366], JAM.policy.p3);
        }
        var v3647 = v4333;
        if (v3647) {
          v3647 = c$$inline_368;
        }
        var v2541 = v3647;
        if (v2541) {
          v2541 = "" != c$$inline_368.length;
        }
        var v913 = v2541;
        if (v913) {
          a$$inline_366.style.visibility = "visible";
          JAM.set(a$$inline_366, "innerHTML", c$$inline_368);
        }
        JSCompiler_temp$$8 = void 0;
      } else {
        JSCompiler_temp$$8 = JAM.call(b$$409.write, b$$409, [a$$537], JAM.policy.p3);
      }
    } else {
      b$$409 = yb(a$$537);
      var v2542 = "google_expandable_ad_slot" + b$$409;
      var v3650 = mi(d$$166);
      var v4334 = k$$13;
      if (!v4334) {
        v4334 = void 0;
      }
      var v3651 = v4334;
      var v3652 = D$$1();
      var v4335 = l$$15;
      if (!v4335) {
        v4335 = void 0;
      }
      var v5075 = JAM.call(ExpandableAdSlotFactory.createIframe, ExpandableAdSlotFactory, [e$$97, v3650, g$$34, h$$26, v3651, v3652, v4335], JAM.policy.p3);
      introspect(JAM.policy.p2) {
        a$$537[v2542] = v5075;
      }
    }
    return;
  }
  function qi(a$$536, b$$408, c$$273, d$$165, e$$96, f$$55, g$$33, h$$25, k$$12, l$$14, z$$7, C$$4, I$$2, xb$$1) {
    var a$$inline_361 = d$$165;
    var b$$inline_362 = C$$4;
    var c$$inline_363 = I$$2;
    a$$inline_361 = be(a$$inline_361, "pfi", b$$inline_362, void 0, !0);
    if (c$$inline_363) {
      var v4336;
      if (b$$inline_362 = ce(a$$inline_361, "eid")) {
        v4336 = c$$inline_363 + "%2C" + b$$inline_362;
      } else {
        v4336 = c$$inline_363;
      }
      b$$inline_362 = v4336;
      a$$inline_361 = be(a$$inline_361, "eid", b$$inline_362);
      var v3654 = 453848236 == c$$inline_363;
      if (v3654) {
        a$$inline_361 = be(a$$inline_361, "unviewed_position_start", 1, void 0, !0);
      }
    }
    d$$165 = a$$inline_361;
    var v2543 = 453848234 == I$$2;
    if (!v2543) {
      v2543 = 453848236 == I$$2;
    }
    if (v2543) {
      d$$165 = JAM.call(d$$165.replace, d$$165, [/&(adx|ady|oid|jp|top)=[^&]*/g, ""], JAM.policy.p3);
      d$$165 = d$$165 + "&ea=0";
      c$$273 = !1;
    }
    oi(a$$536, b$$408, c$$273, d$$165, e$$96, f$$55, g$$33, h$$25, k$$12, l$$14, z$$7);
    if (xb$$1) {
      if (sc) {
        JAM.call(sc, null, [], JAM.policy.p3);
      }
    }
    return;
  }
  function ni(a$$535, b$$407, c$$272) {
    function v27() {
      JAM.call(d$$164.R, d$$164, [], JAM.policy.p3);
      var v918 = JAM.call(d$$164.Ta, d$$164, [], JAM.policy.p3);
      if (!v918) {
        JAM.call(d$$164.ya, d$$164, [], JAM.policy.p3);
        JAM.call(c$$272, null, [JAM.call(d$$164.v, d$$164, [], JAM.policy.p3), null, !0], JAM.policy.p3);
      }
      return;
    }
    var d$$164 = bg;
    if (!d$$164) {
      JAM.call(c$$272, null, [-1, null, !1], JAM.policy.p3);
    }
    JAM.call(d$$164.R, d$$164, [], JAM.policy.p3);
    var v919;
    if (d$$164.ma) {
      v919 = JAM.call(c$$272, null, [JAM.call(d$$164.v, d$$164, [], JAM.policy.p3), d$$164.za, !1], JAM.policy.p3);
    } else {
      JAM.call(d$$164.zc, d$$164, [mi(b$$407), c$$272], JAM.policy.p3);
      var v3659 = d$$164.va;
      if (!v3659) {
        b$$407 = Fe;
        var v4700;
        if (JAM.call(b$$407.test, b$$407, [navigator.userAgent], JAM.policy.p3)) {
          JAM.call(d$$164.Ec, d$$164, [], JAM.policy.p3);
          b$$407 = v27;
          v4700 = JAM.call(a$$535.setTimeout, a$$535, [b$$407, Wh], JAM.policy.p3);
        } else {
          JAM.call(d$$164.ya, d$$164, [], JAM.policy.p3);
          v4700 = JAM.call(c$$272, null, [JAM.call(d$$164.v, d$$164, [], JAM.policy.p3), null, !1], JAM.policy.p3);
        }
        v3659 = v4700;
      }
      v919 = v3659;
    }
    v919;
    return;
  }
  function hi(a$$534) {
    var b$$406 = a$$534.google_ad_handling_mode;
    var v2551;
    if (B$$2) {
      v2551 = 1 == yb(a$$534);
    } else {
      v2551 = !yb(a$$534);
    }
    var v920 = v2551;
    if (v920) {
      v920 = Le(b$$406);
    }
    return v920;
  }
  function li() {
    var a$$533 = me();
    var b$$405 = mc();
    var v921 = a$$533.setUpForcePeriscope;
    if (v921) {
      JAM.call(a$$533.setUpForcePeriscope, a$$533, [], JAM.policy.p3);
    }
    JAM.call(a$$533.setupOse, a$$533, [G$$1(b$$405, 7)], JAM.policy.p3);
    return;
  }
  function ki(a$$531, b$$403) {
    function v28(a$$532, b$$404) {
      var v3662 = a$$532;
      if (!v3662) {
        v3662 = 0 === a$$532;
      }
      var v2552 = v3662;
      if (!v2552) {
        v2552 = !1 === a$$532;
      }
      if (v2552) {
        var v3665 = "boolean" == typeof a$$532;
        if (v3665) {
          var v4342;
          if (a$$532) {
            v4342 = 1;
          } else {
            v4342 = 0;
          }
          a$$532 = v4342;
        }
        var v4343;
        if ("function" == typeof encodeURIComponent) {
          v4343 = encodeURIComponent(a$$532);
        } else {
          v4343 = escape(a$$532);
        }
        ib$$1(e$$95, d$$163, b$$404, "=", v4343);
        d$$163 = "&";
      }
      return;
    }
    var c$$271 = JAM.call(b$$403.slice, b$$403, [-1], JAM.policy.p3);
    var v924;
    var v3667 = "?" == c$$271;
    if (!v3667) {
      v3667 = "#" == c$$271;
    }
    if (v3667) {
      v924 = "";
    } else {
      v924 = "&";
    }
    var d$$163 = v924;
    var e$$95 = [b$$403];
    c$$271 = v28;
    x$$50(a$$531, c$$271);
    return JAM.call(e$$95.join, e$$95, [""], JAM.policy.p3);
  }
  function di() {
    return L$$1(Vh, "/pagead/expansion_embed.js");
  }
  function bi() {
    if (!JAM.call(/_sdo/.test, /_sdo/, [window.google_ad_format], JAM.policy.p3)) {
      if (!wc()) {
        var a$$inline_345 = H$$1();
        if (w$$6.google_top_experiment) {
          var a$$inline_566 = Of;
          var b$$inline_567 = K$$1.PERISCOPE_FOR_TARGETING;
          if (window.google_top_experiment) {
            var c$$inline_568;
            switch(window.google_top_experiment) {
              case a$$inline_566.CONTROL:
                c$$inline_568 = b$$inline_567.CONTROL;
                break;
              case a$$inline_566.EXPERIMENT_ZERO_LATENCY:
                c$$inline_568 = b$$inline_567.EXPERIMENT_ZERO_LATENCY;
                break;
              case a$$inline_566.EXPERIMENT_WAIT_FOR_POST_MESSAGE_RESPONSE:
                c$$inline_568 = b$$inline_567.EXPERIMENT_WAIT_FOR_POST_MESSAGE_RESPONSE;
            }
            if (c$$inline_568) {
              var v2556 = H$$1();
              JAM.call(v2556.k, v2556, [[c$$inline_568], 1, 10], JAM.policy.p3);
            }
          }
        }
        var a$$inline_570 = D$$1();
        var b$$inline_571 = K$$1.DEVICE_SENSORS;
        if (a$$inline_570.google_sensors) {
          a$$inline_570 = a$$inline_570.google_sensors.sensorsExperiment;
          var c$$inline_572;
          switch(a$$inline_570) {
            case "ds_c":
              c$$inline_572 = b$$inline_571.CONTROL;
              break;
            case "ds_zl":
              c$$inline_572 = b$$inline_571.EXPERIMENT_ZERO_LATENCY;
              break;
            case "ds_wfea":
              c$$inline_572 = b$$inline_571.EXPERIMENT_WAIT_FOR_EVENT_ARRIVAL;
          }
          if (c$$inline_572) {
            var v2558 = H$$1();
            JAM.call(v2558.k, v2558, [[c$$inline_572], 1, 10], JAM.policy.p3);
          }
        }
        var b$$inline_346 = [K$$1.EXPANDABLE_MOBILE_REVERSE.CONTROL, K$$1.EXPANDABLE_MOBILE_REVERSE.EXPERIMENT];
        JAM.call(a$$inline_345.k, a$$inline_345, [b$$inline_346, na$$1, 13], JAM.policy.p3);
        var b$$inline_575 = Ge;
        var c$$inline_576 = K$$1.PREFETCH_AD_HANDLING;
        var d$$inline_577;
        switch(w$$6.google_ad_handling_mode) {
          case b$$inline_575.CONTROL_NO_FRAME:
            d$$inline_577 = c$$inline_576.CONTROL_NO_FRAME;
            break;
          case b$$inline_575.ALWAYS_ZRT:
            d$$inline_577 = c$$inline_576.ALWAYS_ZRT;
            break;
          case b$$inline_575.SERIAL:
            d$$inline_577 = c$$inline_576.SERIAL;
        }
        if (d$$inline_577) {
          var v2562 = H$$1();
          JAM.call(v2562.k, v2562, [[d$$inline_577], 1, 4], JAM.policy.p3);
        }
        var c$$inline_347 = K$$1.SS;
        b$$inline_346 = [c$$inline_347.COUNT_AD_FRAMES_ON_PAGE_CONTROL, c$$inline_347.COUNT_AD_FRAMES_ON_PAGE_EXPERIMENT];
        JAM.call(a$$inline_345.k, a$$inline_345, [b$$inline_346, va$$1, 14], JAM.policy.p3);
        b$$inline_346 = [c$$inline_347.BROWSER_DIMENSIONS_CONTROL, c$$inline_347.BROWSER_DIMENSIONS_EXPERIMENT];
        JAM.call(a$$inline_345.k, a$$inline_345, [b$$inline_346, Ca$$1, 14], JAM.policy.p3);
        b$$inline_346 = K$$1.PERISCOPE_FOR_TARGETING;
        b$$inline_346 = [b$$inline_346.CONTROL_REFERER_CLEANUP, b$$inline_346.EXPERIMENT_REFERER_CLEANUP];
        JAM.call(a$$inline_345.k, a$$inline_345, [b$$inline_346, qa$$1, 10], JAM.policy.p3);
        if (window.google_ad_unit_key_2) {
          var a$$inline_579;
          var v939;
          if ("ctrl" == window.google_ad_unit_key_2) {
            v939 = a$$inline_579 = K$$1.ADD_ADK2.CONTROL;
          } else {
            var v2565 = JAM.call(/[0-9]+/.test, /[0-9]+/, [window.google_ad_unit_key_2], JAM.policy.p3);
            if (v2565) {
              v2565 = a$$inline_579 = K$$1.ADD_ADK2.EXPERIMENT;
            }
            v939 = v2565;
          }
          v939;
          if (a$$inline_579) {
            var v2567 = H$$1();
            JAM.call(v2567.k, v2567, [[a$$inline_579], 1, 4], JAM.policy.p3);
          }
        }
        b$$inline_346 = [K$$1.ASYNC_EXPANSION_EMBED.EXPERIMENT, K$$1.ASYNC_EXPANSION_EMBED.CONTROL];
        JAM.call(a$$inline_345.k, a$$inline_345, [b$$inline_346, ya$$1, 18], JAM.policy.p3);
        var a$$inline_581;
        var b$$inline_582 = Pb;
        var c$$inline_583 = K$$1.ASYNC_FOR_OPERA_ANDROID;
        var v943 = a$$inline_581;
        if (!v943) {
          v943 = navigator.userAgent;
        }
        a$$inline_581 = v943;
        if (window.google_async_for_oa_experiment) {
          var d$$inline_584;
          a$$inline_581 = JAM.call(/Chrome/.test, /Chrome/, [a$$inline_581], JAM.policy.p3);
          var v944;
          if (window.google_async_for_oa_experiment == b$$inline_582.CONTROL) {
            var v2572;
            if (a$$inline_581) {
              v2572 = c$$inline_583.CONTROL_ANDROID_CHROME;
            } else {
              v2572 = c$$inline_583.CONTROL_ANDROID;
            }
            v944 = d$$inline_584 = v2572;
          } else {
            var v2573 = window.google_async_for_oa_experiment == b$$inline_582.EXPERIMENT;
            if (v2573) {
              var v3676;
              if (a$$inline_581) {
                v3676 = c$$inline_583.EXPERIMENT_ANDROID_CHROME;
              } else {
                v3676 = c$$inline_583.EXPERIMENT_ANDROID;
              }
              v2573 = d$$inline_584 = v3676;
            }
            v944 = v2573;
          }
          v944;
          if (d$$inline_584) {
            var v2575 = H$$1();
            JAM.call(v2575.k, v2575, [[d$$inline_584], 1, 4], JAM.policy.p3);
          }
        }
        b$$inline_346 = [K$$1.JS_RNG.CONTROL, K$$1.JS_RNG.EXPERIMENT];
        JAM.call(a$$inline_345.k, a$$inline_345, [b$$inline_346, za$$1, 17], JAM.policy.p3);
        var a$$inline_586 = v$$1;
        a$$inline_586 = Xe(a$$inline_586);
        if (3 == a$$inline_586) {
          a$$inline_586 = K$$1.PRERENDERING_DELAYED_IMPRESSION;
          var b$$inline_587 = H$$1();
          JAM.call(b$$inline_587.k, b$$inline_587, [[a$$inline_586.CONTROL, a$$inline_586.EXPERIMENT], ua$$1, 19], JAM.policy.p3);
        }
      }
      var a$$inline_589 = Uf;
      var b$$inline_590 = K$$1.APPEND_AS_FOR_FORMAT_OVERRIDE;
      var c$$inline_591 = window.google_append_as_for_format_override;
      if (c$$inline_591) {
        var v2581;
        if (c$$inline_591 == a$$inline_589.EXPERIMENT) {
          v2581 = b$$inline_590.EXPERIMENT;
        } else {
          v2581 = b$$inline_590.CONTROL;
        }
        a$$inline_589 = v2581;
        var v2582 = J$$1();
        JAM.call(v2582.k, v2582, [[a$$inline_589], 1, 15], JAM.policy.p3);
      }
      var a$$inline_593 = Sf;
      var b$$inline_594 = K$$1.ALWAYS_USE_DELAYED_IMPRESSIONS;
      var c$$inline_595 = window.google_always_use_delayed_impressions_experiment;
      var d$$inline_596 = window.google_ad_output;
      var v2584 = c$$inline_595;
      if (v2584) {
        var v3678 = !d$$inline_596;
        if (!v3678) {
          v3678 = "html" == d$$inline_596;
        }
        v2584 = v3678;
      }
      if (v2584) {
        var v2585;
        if (c$$inline_595 == a$$inline_593.EXPERIMENT) {
          v2585 = b$$inline_594.EXPERIMENT;
        } else {
          v2585 = b$$inline_594.CONTROL;
        }
        a$$inline_593 = v2585;
        var v2586 = J$$1();
        JAM.call(v2586.k, v2586, [[a$$inline_593], 1, 4], JAM.policy.p3);
      }
      var a$$inline_350 = window;
      var b$$inline_351;
      var a$$inline_598 = document.URL;
      var b$$inline_599 = {};
      a$$inline_598 = JAM.call(a$$inline_598.split, a$$inline_598, ["?"], JAM.policy.p3);
      var v952 = a$$inline_598[a$$inline_598.length - 1];
      a$$inline_598 = JAM.call(v952.split, v952, ["&"], JAM.policy.p3);
      var c$$inline_600 = 0;
      var v958 = c$$inline_600 < a$$inline_598.length;
      for (;v958;) {
        var v953 = a$$inline_598[c$$inline_600];
        var d$$inline_601 = JAM.call(v953.split, v953, ["="], JAM.policy.p3);
        if (d$$inline_601[0]) {
          try {
            var v954 = d$$inline_601[0];
            var JSCompiler_temp_const$$713 = JAM.call(v954.toLowerCase, v954, [], JAM.policy.p3);
            var JSCompiler_temp$$714;
            if (1 < d$$inline_601.length) {
              var a$$inline_740 = d$$inline_601[1];
              var v955;
              if (window.decodeURIComponent) {
                v955 = decodeURIComponent(JAM.call(a$$inline_740.replace, a$$inline_740, [/\+/g, " "], JAM.policy.p3));
              } else {
                v955 = unescape(a$$inline_740);
              }
              JSCompiler_temp$$714 = v955;
            } else {
              JSCompiler_temp$$714 = "";
            }
            introspect(JAM.policy.p2) {
              b$$inline_599[JSCompiler_temp_const$$713] = JSCompiler_temp$$714;
            }
          } catch (e$$inline_602) {
          }
        }
        c$$inline_600++;
        v958 = c$$inline_600 < a$$inline_598.length;
      }
      b$$inline_351 = b$$inline_599;
      var v959 = b$$inline_351.google_ad_override;
      if (v959) {
        a$$inline_350.google_ad_override = b$$inline_351.google_ad_override;
        a$$inline_350.google_adtest = "on";
      }
      var a$$529 = window.google_start_time;
      var v960 = q$$3(a$$529);
      if (v960) {
        vf = a$$529;
        window.google_start_time = null;
      }
      te("show_ads::init_globals", ve, $h);
      var c$$inline_353;
      var a$$inline_354 = window;
      var b$$inline_355 = document;
      var d$$inline_356 = "script";
      var a$$inline_604 = a$$inline_354;
      var b$$inline_605 = a$$inline_604.google_ad_width;
      var c$$inline_606 = a$$inline_604.google_ad_height;
      var d$$inline_607 = D$$1();
      var JSCompiler_inline_result$$inline_608;
      JSCompiler_inline_label_612: {
        var a$$inline_609 = a$$inline_604;
        var b$$inline_610 = d$$inline_607.document;
        try {
          var JSCompiler_temp$$715;
          var v4962 = !1 === a$$inline_609.google_allow_expandable_ads;
          if (!v4962) {
            v4962 = !b$$inline_610.body;
          }
          var v4896 = v4962;
          if (!v4896) {
            var v4963 = a$$inline_609.google_ad_output;
            if (v4963) {
              v4963 = "html" != a$$inline_609.google_ad_output;
            }
            v4896 = v4963;
          }
          var v4702 = v4896;
          if (!v4702) {
            v4702 = isNaN(a$$inline_609.google_ad_height);
          }
          var v4348 = v4702;
          if (!v4348) {
            v4348 = isNaN(a$$inline_609.google_ad_width);
          }
          var v3681 = v4348;
          if (!v3681) {
            v3681 = b$$inline_610.domain != a$$inline_609.location.hostname;
          }
          var v2594 = v3681;
          if (!v2594) {
            v2594 = !JAM.call(/^http/.test, /^http/, [b$$inline_610.location.protocol], JAM.policy.p3);
          }
          if (JSCompiler_temp$$715 = v2594) {
          } else {
            var JSCompiler_inline_result$$716;
            JSCompiler_inline_label_Jb_748: {
              var b$$inline_742 = b$$inline_610;
              var v961;
              var v4353 = J$$1();
              if (JAM.call(v4353.m, v4353, [13], JAM.policy.p3) == K$$1.EXPANDABLE_MOBILE_REVERSE.EXPERIMENT) {
                v961 = /Win|Mac|Linux/;
              } else {
                v961 = /Win|Mac|Linux|iPad|iPod|iPhone/;
              }
              var c$$inline_743 = v961;
              var a$$inline_744 = navigator;
              var d$$inline_745 = a$$inline_744.userAgent;
              var e$$inline_746 = a$$inline_744.platform;
              c$$inline_743 = c$$inline_743 || /Win|Mac|Linux|iPad|iPod|iPhone/;
              var v2596 = JAM.call(c$$inline_743.test, c$$inline_743, [e$$inline_746], JAM.policy.p3);
              if (v2596) {
                v2596 = !JAM.call(/^Opera/.test, /^Opera/, [d$$inline_745], JAM.policy.p3);
              }
              if (v2596) {
                var v2597 = JAM.call(/WebKit\/(\d+)/.exec, /WebKit\/(\d+)/, [d$$inline_745], JAM.policy.p3);
                if (!v2597) {
                  v2597 = [0, 0];
                }
                c$$inline_743 = v2597[1];
                var v2598 = JAM.call(/rv\:(\d+\.\d+)/.exec, /rv\:(\d+\.\d+)/, [d$$inline_745], JAM.policy.p3);
                if (!v2598) {
                  v2598 = [0, 0];
                }
                var f$$inline_747 = v2598[1];
                var v4707 = JAM.call(/Win/.test, /Win/, [e$$inline_746], JAM.policy.p3);
                if (v4707) {
                  v4707 = JAM.call(/MSIE.*Trident/.test, /MSIE.*Trident/, [d$$inline_745], JAM.policy.p3);
                }
                var v4355 = v4707;
                if (v4355) {
                  v4355 = 8 < b$$inline_742.documentMode;
                }
                var v3689 = v4355;
                if (!v3689) {
                  var v4899 = !c$$inline_743;
                  if (v4899) {
                    v4899 = "Gecko" == a$$inline_744.product;
                  }
                  var v4709 = v4899;
                  if (v4709) {
                    v4709 = 1.7 < f$$inline_747;
                  }
                  var v4356 = v4709;
                  if (v4356) {
                    v4356 = !JAM.call(/rv\:1\.8([^.]|\.0)/.test, /rv\:1\.8([^.]|\.0)/, [d$$inline_745], JAM.policy.p3);
                  }
                  v3689 = v4356;
                }
                var v2599 = v3689;
                if (!v2599) {
                  v2599 = 524 < c$$inline_743;
                }
                if (v2599) {
                  JSCompiler_inline_result$$716 = !0;
                  break JSCompiler_inline_label_Jb_748;
                }
              }
              JSCompiler_inline_result$$716 = !1;
            }
            JSCompiler_temp$$715 = !JSCompiler_inline_result$$716;
          }
          if (JSCompiler_temp$$715) {
            JSCompiler_inline_result$$inline_608 = !0;
            break JSCompiler_inline_label_612;
          }
        } catch (c$$inline_611) {
          JSCompiler_inline_result$$inline_608 = !0;
          break JSCompiler_inline_label_612;
        }
        JSCompiler_inline_result$$inline_608 = !1;
      }
      var v967;
      var v4358 = JSCompiler_inline_result$$inline_608;
      if (!v4358) {
        v4358 = Ze(d$$inline_607, d$$inline_607.document, b$$inline_605, c$$inline_606);
      }
      var v3691 = v4358;
      if (!v3691) {
        v3691 = Zg(a$$inline_604);
      }
      if (v3691) {
        v967 = !1;
      } else {
        v967 = !0;
      }
      ci = v967;
      if (!ci) {
        a$$inline_354.google_allow_expandable_ads = !1;
        var v968 = J$$1();
        var e$$inline_357 = JAM.call(v968.k, v968, [[K$$1.DIRECT_CALL_RENDER_AD.CONTROL, K$$1.DIRECT_CALL_RENDER_AD.EXPERIMENT], Aa$$1, 4], JAM.policy.p3);
      }
      var v971 = ci;
      if (v971) {
        v971 = !zf();
      }
      var f$$inline_358 = v971;
      var v972 = gi();
      if (v972) {
        f$$inline_358 = !1;
      }
      if (f$$inline_358) {
        JAM.call(b$$inline_355.write, b$$inline_355, ["<" + d$$inline_356 + ' src="' + di() + '"></' + d$$inline_356 + ">"], JAM.policy.p3);
      }
      if (hi(a$$inline_354)) {
        var g$$inline_359 = L$$1(ma$$1("doubleclick"), "");
        bg = new V$$1(a$$inline_354, g$$inline_359, a$$inline_354.google_ad_handling_mode, xc);
      }
      var v976;
      var v3695 = a$$inline_354 = f$$inline_358 || c$$inline_353;
      if (v3695) {
        var v4361 = pb$$1();
        if (v4361) {
          v4361 = !window.opera;
        }
        v3695 = v4361;
      }
      if (v3695) {
        v976 = JAM.call(b$$inline_355.write, b$$inline_355, ["<" + d$$inline_356 + ' src="' + L$$1(Vh, "/pagead/render_ads.js") + '"></' + d$$inline_356 + ">"], JAM.policy.p3);
      } else {
        var v2606;
        var v4363 = a$$inline_354;
        if (!v4363) {
          v4363 = e$$inline_357 != K$$1.DIRECT_CALL_RENDER_AD.EXPERIMENT;
        }
        if (v4363) {
          v2606 = JAM.call(b$$inline_355.write, b$$inline_355, ["<" + d$$inline_356 + '>google_protectAndRun("ads_core.google_render_ad", google_handleError, google_render_ad);</' + d$$inline_356 + ">"], JAM.policy.p3);
        } else {
          v2606 = ii();
        }
        v976 = v2606;
      }
      v976;
    }
    return;
  }
  function Uh(a$$523) {
    this.t = a$$523;
    return;
  }
  function Nh(a$$518, b$$395, c$$265, d$$161) {
    function v29() {
      var v2608 = d$$161;
      if (v2608) {
        v2608 = 0 < a$$518.length;
      }
      var v978 = v2608;
      if (v978) {
        JAM.call(d$$161, null, [], JAM.policy.p3);
      }
      var a$$inline_330 = a$$518;
      var b$$inline_331 = 0;
      var v979 = b$$inline_331 < a$$inline_330.length;
      for (;v979;) {
        JAM.call(a$$inline_330[b$$inline_331], a$$inline_330, [], JAM.policy.p3);
        ++b$$inline_331;
        v979 = b$$inline_331 < a$$inline_330.length;
      }
      a$$inline_330.length = 0;
      return;
    }
    JAM.call(a$$518.push, a$$518, [b$$395], JAM.policy.p3);
    if (c$$265) {
      JAM.call(window.setTimeout, window, [v29, c$$265], JAM.policy.p3);
    }
    return;
  }
  function Mh(a$$515) {
    var v980;
    if (a$$515.google_sensors) {
      a$$515 = a$$515.google_sensors;
      v980 = new $$$1(a$$515);
    } else {
      v980 = null;
    }
    return v980;
  }
  function $$$1(a$$514) {
    this.j = a$$514;
    return;
  }
  function zh(a$$511, b$$391) {
    ze = ze | 2;
    return a$$511[b$$391 % a$$511.length];
  }
  function Bh(a$$510) {
    function v32(b$$390, c$$262) {
      introspect(JAM.policy.p2) {
        a$$510[c$$262] = null;
      }
      return;
    }
    function v31(b$$389, c$$261) {
      introspect(JAM.policy.p2) {
        a$$510[c$$261] = null;
      }
      return;
    }
    function v30(b$$388, c$$260) {
      introspect(JAM.policy.p2) {
        a$$510[c$$260] = null;
      }
      return;
    }
    x$$50(vh, v30);
    x$$50(wh, v31);
    x$$50(xh, v32);
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
    return;
  }
  function Z$$1(a$$494, b$$378, c$$252) {
    JAM.call(ih.call, ih, [this, a$$494], JAM.policy.p3);
    this.s = b$$378;
    this.Zb = c$$252;
    this.G = {};
    this.Z = this.H = !1;
    return;
  }
  function kh(a$$483) {
    var b$$370 = Re(a$$483);
    var v982 = b$$370[5];
    if (!v982) {
      v982 = "";
    }
    a$$483 = v982;
    b$$370 = b$$370[6];
    var v2614;
    if (b$$370) {
      v2614 = "?" + b$$370;
    } else {
      v2614 = "";
    }
    return a$$483 + v2614;
  }
  function Y$$1(a$$482, b$$369, c$$247) {
    JAM.call(hh.call, hh, [this, a$$482, b$$369, c$$247], JAM.policy.p3);
    this.Wc = c$$247.location.hostname;
    var v5076 = kh(c$$247.location.href);
    this.Xc = v5076;
    this.ea = [];
    this.ob = this.kd = !1;
    JAM.call(this.N, this, [!1], JAM.policy.p3);
    JAM.call(this.Cc, this, [], JAM.policy.p3);
    return;
  }
  function jh(a$$480, b$$368) {
    JAM.call(ih.call, ih, [this, a$$480], JAM.policy.p3);
    this.Kb = b$$368;
    this.H = this.Cb = !1;
    return;
  }
  function ih(a$$477) {
    this.i = a$$477;
    this.cc = {};
    JAM.call(this.Wb, this, [], JAM.policy.p3);
    return;
  }
  function X$$1(a$$465, b$$360, c$$242, d$$152) {
    JAM.call(hh.call, hh, [this, a$$465, b$$360, c$$242], JAM.policy.p3);
    this.I = this.Ib = this.Da = !1;
    this.w = null;
    var v5077 = Qd(c$$242.document.body);
    this.Vc = v5077;
    this.B = 0;
    this.Ra = !1;
    this.ga = !0;
    var JSCompiler_inline_result$$37;
    JSCompiler_inline_label_Kd_312: {
      var a$$inline_305 = Ld;
      var b$$inline_306 = this.s;
      if ("none" != R$$1(b$$inline_306, "display")) {
        JSCompiler_inline_result$$37 = JAM.call(a$$inline_305, null, [b$$inline_306], JAM.policy.p3);
        break JSCompiler_inline_label_Kd_312;
      }
      var c$$inline_307 = b$$inline_306.style;
      var d$$inline_308 = c$$inline_307.display;
      var e$$inline_309 = c$$inline_307.visibility;
      var f$$inline_310 = c$$inline_307.position;
      c$$inline_307.visibility = "hidden";
      c$$inline_307.position = "absolute";
      c$$inline_307.display = "inline";
      var g$$inline_311 = JAM.call(a$$inline_305, null, [b$$inline_306], JAM.policy.p3);
      c$$inline_307.display = d$$inline_308;
      c$$inline_307.position = f$$inline_310;
      c$$inline_307.visibility = e$$inline_309;
      JSCompiler_inline_result$$37 = g$$inline_311;
    }
    this.gd = JSCompiler_inline_result$$37;
    this.ua = d$$152;
    JAM.call(this.hide, this, [], JAM.policy.p3);
    var v5078 = lb$$1(this.i, "orientationchange", this, this.ec);
    this.Zc = v5078;
    var v5079 = lb$$1(this.i, "resize", this, this.tc);
    this.$c = v5079;
    var v5080 = lb$$1(this.i, "scroll", this, this.vc);
    this.ad = v5080;
    var v5081 = lb$$1(this.i, "touchcancel", this, this.Kc);
    this.bd = v5081;
    var v5082 = lb$$1(this.i, "touchend", this, this.Lc);
    this.cd = v5082;
    var v5083 = lb$$1(this.i, "touchmove", this, this.Mc);
    this.dd = v5083;
    var v5084 = lb$$1(this.i, "touchstart", this, this.Nc);
    this.ed = v5084;
    return;
  }
  function hh(a$$462, b$$359, c$$241) {
    this.sb = a$$462;
    this.s = b$$359;
    this.i = c$$241;
    return;
  }
  function gh(a$$461, b$$358, c$$240) {
    this.W = a$$461;
    var v1003;
    if (c$$240) {
      v1003 = c$$240;
    } else {
      v1003 = null;
    }
    this.onEndCallback = v1003;
    JAM.call(W$$1.call, W$$1, [this, [Number(Md(a$$461))], [0], b$$358], JAM.policy.p3);
    return;
  }
  function fh(a$$460, b$$357) {
    this.W = a$$460;
    JAM.call(W$$1.call, W$$1, [this, [Number(Md(a$$460))], [1], b$$357], JAM.policy.p3);
    return;
  }
  function W$$1(a$$457, b$$355, c$$239) {
    this.ib = a$$457;
    this.Tc = b$$355;
    this.jd = c$$239;
    this.Ic = !1;
    this.current = null;
    return;
  }
  function dh(a$$454) {
    this.lc = a$$454;
    var v5085 = ye("rach::hdlr", JAM.call(r$$2, null, [this.ub, this], JAM.policy.p3));
    this.K = v5085;
    y$$31(a$$454, "message", this.K);
    return;
  }
  function $g(a$$453, b$$352, c$$236) {
    var d$$150 = rg(b$$352);
    var v1010 = Ug[a$$453.google_reactive_ad_format];
    if (!v1010) {
      v1010 = null;
    }
    var e$$88 = v1010;
    var JSCompiler_inline_result$$62;
    JSCompiler_inline_label_Wg_304: {
      var a$$inline_301 = b$$352;
      var b$$inline_302 = a$$453;
      switch(c$$236) {
        case 1:
          JSCompiler_inline_result$$62 = Hg(a$$inline_301);
          break JSCompiler_inline_label_Wg_304;
        case 2:
          JSCompiler_inline_result$$62 = Rg(a$$inline_301, b$$inline_302);
          break JSCompiler_inline_label_Wg_304;
      }
      JSCompiler_inline_result$$62 = !1;
    }
    var v2623 = JSCompiler_inline_result$$62;
    if (v2623) {
      v2623 = e$$88 != c$$236;
    }
    var v1011 = v2623;
    if (v1011) {
      v1011 = !d$$150.wasReactiveAdCreated[c$$236];
    }
    return v1011;
  }
  function ch(b$$351) {
    function v33(c$$235) {
      var v1012 = $g(a$$452, b$$351, c$$235);
      if (v1012) {
        e$$87 = !0;
      }
      return;
    }
    var a$$452 = window;
    var c$$234 = rg(b$$351);
    var d$$149 = !0;
    var v2625 = c$$234.wasReactiveAdConfigHandlerRegistered;
    if (!v2625) {
      v2625 = !d$$149;
    }
    if (v2625) {
      return !1;
    }
    var e$$87 = !1;
    x$$50(kg, v33);
    return c$$234.wasReactiveAdConfigHandlerRegistered = e$$87;
  }
  function ah(b$$349) {
    function v34(d$$147) {
      var v1014 = $g(a$$450, b$$349, d$$147);
      if (v1014) {
        c$$232 = c$$232 | d$$147;
      }
      return;
    }
    var a$$450 = window;
    var c$$232 = 0;
    x$$50(kg, v34);
    var v1015;
    if (c$$232) {
      v1015 = "" + c$$232;
    } else {
      v1015 = null;
    }
    return v1015;
  }
  function Zg(a$$449) {
    a$$449 = a$$449.google_reactive_ad_format;
    var v1016;
    if (Ec(lg, a$$449)) {
      v1016 = "" + a$$449;
    } else {
      v1016 = null;
    }
    return v1016;
  }
  function Yg(a$$448) {
    switch(a$$448) {
      case 1:
        return new Mg;
      case 2:
        return new Qg;
    }
    return null;
  }
  function Rg(a$$443, b$$345) {
    var c$$228 = !1;
    try {
      var v4719 = a$$443.top == a$$443;
      if (v4719) {
        v4719 = !!a$$443.postMessage;
      }
      var v4365 = v4719;
      if (v4365) {
        v4365 = og(a$$443);
      }
      var v3704 = v4365;
      if (v3704) {
        v3704 = ng(a$$443);
      }
      var v2627 = v3704;
      if (v2627) {
        v2627 = !Bc(b$$345);
      }
      var v1017 = v2627;
      if (v1017) {
        v1017 = !Ha$$1;
      }
      c$$228 = v1017;
    } catch (d$$145) {
    }
    return c$$228;
  }
  function Qg() {
    this.l = null;
    return;
  }
  function Og() {
    return;
  }
  function Mg() {
    this.l = null;
    return;
  }
  function Kg() {
    return;
  }
  function Hg(a$$429) {
    var b$$336 = !1;
    try {
      var JSCompiler_temp$$57;
      if (JSCompiler_temp$$57 = a$$429.top == a$$429) {
        var JSCompiler_inline_result$$58;
        var a$$inline_280 = a$$429.navigator.userAgent;
        var v3706 = !JAM.call(/(Android|iPhone OS|Windows Phone)/.test, /(Android|iPhone OS|Windows Phone)/, [a$$inline_280], JAM.policy.p3);
        if (!v3706) {
          v3706 = JAM.call(/Android 2/.test, /Android 2/, [a$$inline_280], JAM.policy.p3);
        }
        var v2629 = v3706;
        if (!v2629) {
          v2629 = JAM.call(/iPhone OS [34]_/.test, /iPhone OS [34]_/, [a$$inline_280], JAM.policy.p3);
        }
        var v1019 = v2629;
        if (!v1019) {
          v1019 = JAM.call(/Windows Phone (?:OS )?[67]/.test, /Windows Phone (?:OS )?[67]/, [a$$inline_280], JAM.policy.p3);
        }
        JSCompiler_inline_result$$58 = v1019;
        JSCompiler_temp$$57 = !JSCompiler_inline_result$$58;
      }
      var v4368 = JSCompiler_temp$$57;
      if (v4368) {
        v4368 = !!a$$429.postMessage;
      }
      var v3708 = v4368;
      if (v3708) {
        v3708 = a$$429.innerHeight >= a$$429.innerWidth;
      }
      var v2631 = v3708;
      if (v2631) {
        v2631 = ng(a$$429);
      }
      var v1021 = v2631;
      if (v1021) {
        v1021 = og(a$$429);
      }
      b$$336 = v1021;
    } catch (c$$223) {
    }
    return b$$336;
  }
  function Fg(a$$428, b$$335, c$$222) {
    var d$$142 = a$$428.attributes;
    var e$$84 = d$$142.length;
    var f$$51 = 0;
    var v1025 = f$$51 < e$$84;
    for (;v1025;) {
      var g$$30 = d$$142[f$$51];
      if (JAM.call(/data-/.test, /data-/, [g$$30.nodeName], JAM.policy.p3)) {
        var v2633 = g$$30.nodeName;
        var v1022 = JAM.call(v2633.replace, v2633, ["data", "google"], JAM.policy.p3);
        var h$$22 = JAM.call(v1022.replace, v1022, [/-/g, "_"], JAM.policy.p3);
        var v1023 = JAM.call(b$$335.hasOwnProperty, b$$335, [h$$22], JAM.policy.p3);
        if (!v1023) {
          introspect(JAM.policy.p2) {
            b$$335[h$$22] = g$$30.nodeValue;
          }
        }
      }
      f$$51++;
      v1025 = f$$51 < e$$84;
    }
    var JSCompiler_inline_result$$52;
    var a$$inline_266 = b$$335.google_ad_format;
    var v1026 = "auto" == a$$inline_266;
    if (!v1026) {
      v1026 = JAM.call(/^((^|,)(horizontal|vertical|rectangle))+$/.test, /^((^|,)(horizontal|vertical|rectangle))+$/, [a$$inline_266], JAM.policy.p3);
    }
    JSCompiler_inline_result$$52 = v1026;
    if (JSCompiler_inline_result$$52) {
      var JSCompiler_inline_result$$56;
      var a$$inline_268 = a$$428;
      var b$$inline_269 = b$$335;
      var c$$inline_270 = c$$222;
      var d$$inline_271 = a$$inline_268.offsetWidth;
      var e$$inline_272 = b$$inline_269.google_ad_format;
      c$$inline_270 = yg(d$$inline_271, e$$inline_272, c$$inline_270);
      if (!c$$inline_270) {
        throw Error("Cannot find a responsive size for a container of width=" + d$$inline_271 + "px and data-ad-format=" + e$$inline_272);
      }
      b$$inline_269.google_ad_height = c$$inline_270.height;
      var v1029;
      var v3710 = 300 < d$$inline_271;
      if (v3710) {
        v3710 = 300 < c$$inline_270.height;
      }
      if (v3710) {
        v1029 = c$$inline_270.width;
      } else {
        var v2637;
        if (1200 < d$$inline_271) {
          v2637 = 1200;
        } else {
          v2637 = JAM.call(Math.round, Math, [d$$inline_271], JAM.policy.p3);
        }
        v1029 = v2637;
      }
      b$$inline_269.google_ad_width = v1029;
      a$$inline_268.style.height = b$$inline_269.google_ad_height + "px";
      delete b$$inline_269.google_ad_format;
      JSCompiler_inline_result$$56 = void 0;
      JSCompiler_inline_result$$56;
      b$$335.google_loader_features_used = 128;
    } else {
      var JSCompiler_inline_result$$54;
      var a$$inline_274 = a$$428;
      var v1031 = !JAM.call(sg.test, sg, [a$$inline_274.style.width], JAM.policy.p3);
      if (!v1031) {
        v1031 = !JAM.call(sg.test, sg, [a$$inline_274.style.height], JAM.policy.p3);
      }
      JSCompiler_inline_result$$54 = v1031;
      if (JSCompiler_inline_result$$54) {
        var a$$inline_276 = a$$428;
        var b$$inline_277 = b$$335;
        var c$$inline_278 = c$$222;
        var v1032;
        if (c$$inline_278.getComputedStyle) {
          v1032 = JAM.call(c$$inline_278.getComputedStyle, c$$inline_278, [a$$inline_276, null], JAM.policy.p3);
        } else {
          v1032 = a$$inline_276.currentStyle;
        }
        c$$inline_278 = v1032;
        a$$inline_276.style.width = c$$inline_278.width;
        a$$inline_276.style.height = c$$inline_278.height;
        wg(c$$inline_278, b$$inline_277);
      } else {
        wg(a$$428.style, b$$335);
      }
    }
    return;
  }
  function Dg(a$$427, b$$334, c$$221) {
    function v35() {
      Kf(c$$221, b$$334, a$$427);
      return;
    }
    var v2644 = a$$427.style;
    if (v2644) {
      v2644 = "none" == a$$427.style.display;
    }
    var v1036 = v2644;
    if (v1036) {
      b$$334.google_dn = 1;
    }
    wb(c$$221);
    Fg(a$$427, b$$334, c$$221);
    var d$$141 = Bg;
    var e$$83 = 0;
    var v1038 = e$$83 < d$$141.length;
    for (;v1038;) {
      var v1037 = d$$141[e$$83];
      var v2646 = b$$334[d$$141[e$$83]];
      if (!v2646) {
        v2646 = c$$221[d$$141[e$$83]];
      }
      introspect(JAM.policy.p2) {
        b$$334[v1037] = v2646;
      }
      e$$83++;
      v1038 = e$$83 < d$$141.length;
    }
    b$$334.google_loader_used = "aa";
    var v2648 = d$$141 = b$$334.google_ad_output;
    if (v2648) {
      v2648 = "html" != d$$141;
    }
    if (v2648) {
      throw Error("No support for google_ad_output=" + d$$141);
    }
    te("aa::main", ve, v35);
    return;
  }
  function Cg(a$$426) {
    JAM.call(a$$426.setAttribute, a$$426, ["data-adsbygoogle-status", "done"], JAM.policy.p3);
    return;
  }
  function Ag(a$$424) {
    a$$424 = a$$424.document;
    var v1041 = a$$424.documentElement.clientWidth;
    if (!v1041) {
      v1041 = a$$424.body.clientWidth;
    }
    return v1041;
  }
  function yg(a$$422, b$$331, c$$219) {
    function v36(a$$423, b$$332) {
      var v1042 = a$$423.width - b$$332.width;
      if (!v1042) {
        v1042 = a$$423.height - b$$332.height;
      }
      return v1042;
    }
    var d$$140 = tg;
    JAM.call(d$$140.sort, d$$140, [v36], JAM.policy.p3);
    var v1043 = "auto" == b$$331;
    if (v1043) {
      b$$331 = a$$422 / Ag(c$$219);
      var v3720;
      if (.25 > b$$331) {
        v3720 = "vertical";
      } else {
        v3720 = "horizontal,rectangle";
      }
      b$$331 = v3720;
    }
    c$$219 = d$$140.length;
    var v1045 = c$$219;
    c$$219 = c$$219 - 1;
    for (;v1045;) {
      var v2657 = d$$140[c$$219].width <= a$$422;
      if (v2657) {
        v2657 = -1 != JAM.call(b$$331.indexOf, b$$331, [d$$140[c$$219].format], JAM.policy.p3);
      }
      if (v2657) {
        return d$$140[c$$219];
      }
      v1045 = c$$219;
      c$$219 = c$$219 - 1;
    }
    return null;
  }
  function wg(a$$420, b$$329) {
    var c$$217 = ["width", "height"];
    var d$$138 = 0;
    var v1049 = d$$138 < c$$217.length;
    for (;v1049;) {
      var e$$81 = "google_ad_" + c$$217[d$$138];
      if (!JAM.call(b$$329.hasOwnProperty, b$$329, [e$$81], JAM.policy.p3)) {
        var f$$50 = JAM.call(sg.exec, sg, [a$$420[c$$217[d$$138]]], JAM.policy.p3);
        if (f$$50) {
          var v5086 = JAM.call(Math.round, Math, [f$$50[1]], JAM.policy.p3);
          introspect(JAM.policy.p2) {
            b$$329[e$$81] = v5086;
          }
        }
      }
      d$$138++;
      v1049 = d$$138 < c$$217.length;
    }
    return;
  }
  function rg(a$$415) {
    var v1050 = a$$415.google_reactive_ads_global_state;
    if (!v1050) {
      var v5087 = new pg;
      a$$415.google_reactive_ads_global_state = v5087;
    }
    return a$$415.google_reactive_ads_global_state;
  }
  function pg() {
    this.wasReactiveAdConfigReceived = {};
    this.wasReactiveAdCreated = {};
    this.wasReactiveAdConfigHandlerRegistered = !1;
    return;
  }
  function og(a$$414) {
    var b$$327 = a$$414.document.documentElement.clientWidth;
    a$$414 = a$$414.innerWidth;
    return .05 > JAM.call(Math.abs, Math, [b$$327 / a$$414 - 1], JAM.policy.p3);
  }
  function ng(a$$413) {
    a$$413 = a$$413.document.documentElement.clientWidth;
    var v1054 = 320 <= a$$413;
    if (v1054) {
      v1054 = 420 >= a$$413;
    }
    return v1054;
  }
  function hg(a$$405) {
    this.qa = a$$405;
    return;
  }
  function gg(a$$404) {
    a$$404 = String(a$$404);
    if (fg(a$$404)) {
      try {
        var v1055 = "(" + a$$404 + ")";
        if (JAM.isEval(eval)) {
          return eval("introspect(JAM.policy.pFull) { " + v1055 + " }");
        } else {
          return JAM.call(eval, null, [v1055]);
        }
      } catch (b$$319) {
      }
    }
    throw Error("Invalid JSON string: " + a$$404);
  }
  function fg(a$$403) {
    if (JAM.call(/^\s*$/.test, /^\s*$/, [a$$403], JAM.policy.p3)) {
      return !1;
    }
    var b$$318 = /\\["\\\/bfnrtu]/g;
    var c$$213 = /"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var d$$135 = /(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g;
    var e$$77 = /^[\],:{}\s\u2028\u2029]*$/;
    var v3724 = JAM.call(a$$403.replace, a$$403, [b$$318, "@"], JAM.policy.p3);
    var v2668 = JAM.call(v3724.replace, v3724, [c$$213, "]"], JAM.policy.p3);
    return JAM.call(e$$77.test, e$$77, [JAM.call(v2668.replace, v2668, [d$$135, ""], JAM.policy.p3)], JAM.policy.p3);
  }
  function eg(a$$401, b$$315) {
    try {
      return void 0 != a$$401.frames[b$$315];
    } catch (c$$211) {
      return !1;
    }
    return;
  }
  function Xf(a$$388) {
    introspect(JAM.policy.p2) {
      Wf[a$$388] = !0;
    }
    return a$$388;
  }
  function V$$1(a$$387, b$$306, c$$204, d$$130) {
    this.Q = a$$387;
    this.Fb = b$$306;
    this.Za = c$$204;
    this.hc = !1;
    this.F = "";
    this.za = this.U = null;
    this.Sb = this.Fc = this.Pa = this.Tb = this.jc = this.ma = this.va = !1;
    var v5088 = ye("zrt_mh::handler", JAM.call(r$$2, null, [V$$1.prototype.Qa, this], JAM.policy.p3), d$$130);
    this.K = v5088;
    y$$31(a$$387, "message", this.K);
    return;
  }
  function Jf(a$$378, b$$299, c$$197, e$$75) {
    var d$$125 = !1;
    var f$$48 = "script";
    var g$$29 = b$$299.google_ad_width;
    var h$$21 = b$$299.google_ad_height;
    var k$$9 = {};
    Ff(k$$9, g$$29, h$$21, !0);
    JAM.set(k$$9, "onload", '"' + Ne + '"');
    e$$75 = JAM.call(e$$75, null, [a$$378, k$$9, b$$299], JAM.policy.p3);
    JSCompiler_inline_label_Lf_238: {
      var v2671 = window.google_override_format;
      if (!v2671) {
        var v3726 = !wf[window.google_ad_width + "x" + window.google_ad_height];
        if (v3726) {
          v3726 = "aa" == window.google_loader_used;
        }
        v2671 = v3726;
      }
      if (v2671) {
        var a$$inline_237 = Uf;
        k$$9 = vb([a$$inline_237.CONTROL, a$$inline_237.EXPERIMENT], Ba$$1);
        break JSCompiler_inline_label_Lf_238;
      }
      k$$9 = null;
    }
    var a$$inline_239 = c$$197;
    var b$$inline_240 = d$$125;
    var c$$inline_241 = b$$299;
    var a$$inline_546 = c$$inline_241;
    var c$$inline_548 = a$$inline_546.google_ad_output;
    var d$$inline_549 = a$$inline_546.google_ad_format;
    var v2674 = d$$inline_549;
    if (!v2674) {
      var v3728 = "html" != c$$inline_548;
      if (v3728) {
        v3728 = null != c$$inline_548;
      }
      v2674 = v3728;
    }
    var v1068 = v2674;
    if (!v1068) {
      d$$inline_549 = a$$inline_546.google_ad_width + "x" + a$$inline_546.google_ad_height;
      var v3732 = "e" == k$$9;
      if (v3732) {
        d$$inline_549 = d$$inline_549 + "_as";
      }
    }
    var v2676 = !a$$inline_546.google_ad_slot;
    if (!v2676) {
      v2676 = a$$inline_546.google_override_format;
    }
    var v1069 = v2676;
    if (!v1069) {
      var v2677 = !wf[a$$inline_546.google_ad_width + "x" + a$$inline_546.google_ad_height];
      if (v2677) {
        v2677 = "aa" == a$$inline_546.google_loader_used;
      }
      v1069 = v2677;
    }
    c$$inline_548 = v1069;
    var v1070;
    if (d$$inline_549 && c$$inline_548) {
      v1070 = JAM.call(d$$inline_549.toLowerCase, d$$inline_549, [], JAM.policy.p3);
    } else {
      v1070 = "";
    }
    d$$inline_549 = v1070;
    a$$inline_546.google_ad_format = d$$inline_549;
    var JSCompiler_temp_const$$488 = c$$inline_241;
    var JSCompiler_inline_result$$489;
    var a$$inline_551 = a$$inline_239;
    var v1071;
    if (b$$inline_240) {
      v1071 = a$$inline_551.parentElement;
    } else {
      v1071 = a$$inline_551;
    }
    a$$inline_551 = v1071;
    JSCompiler_inline_result$$489 = Fb(a$$inline_551, c$$inline_241, !0);
    JSCompiler_temp_const$$488.google_ad_unit_key = JSCompiler_inline_result$$489;
    var v1073 = window;
    var v3737 = window.google_adk2_experiment;
    if (!v3737) {
      v3737 = vb(["C", "E"], xa$$1);
    }
    var v2680 = v3737;
    if (!v2680) {
      v2680 = "N";
    }
    b$$inline_240 = v1073.google_adk2_experiment = v2680;
    var v1074;
    if ("E" == b$$inline_240) {
      var v5089 = Fb(a$$inline_239, c$$inline_241);
      v1074 = c$$inline_241.google_ad_unit_key_2 = v5089;
    } else {
      var v2681 = "C" == b$$inline_240;
      if (v2681) {
        v2681 = c$$inline_241.google_ad_unit_key_2 = "ctrl";
      }
      v1074 = v2681;
    }
    v1074;
    c$$197 = Ee(b$$299);
    var a$$inline_244 = a$$378;
    var b$$inline_245 = Ke(a$$inline_244);
    var c$$inline_246 = 3 == Xe(a$$inline_244.document);
    var d$$inline_247 = Ge;
    var v3739 = b$$inline_245;
    if (v3739) {
      v3739 = !c$$inline_246;
    }
    var v2684 = v3739;
    if (v2684) {
      v2684 = void 0 === a$$inline_244.google_ad_handling_mode;
    }
    var v1076 = v2684;
    if (v1076) {
      var v2685 = vb([d$$inline_247.CONTROL_NO_FRAME, d$$inline_247.ALWAYS_ZRT, d$$inline_247.SERIAL], sa$$1);
      if (!v2685) {
        v2685 = vb([d$$inline_247.IFRAME_SIGNALING], ta$$1);
      }
      a$$inline_244.google_ad_handling_mode = v2685;
    }
    var v1077;
    if (a$$inline_244.google_ad_handling_mode) {
      v1077 = String(a$$inline_244.google_ad_handling_mode);
    } else {
      v1077 = null;
    }
    d$$125 = v1077;
    JSCompiler_inline_label_If_258: {
      var a$$inline_249 = a$$378;
      var b$$inline_250 = d$$125;
      var c$$inline_251 = b$$299;
      var d$$inline_252 = g$$29;
      var e$$inline_253 = h$$21;
      var f$$inline_254 = Ge;
      var v4388 = Ke(a$$inline_249);
      if (v4388) {
        v4388 = 1 == a$$inline_249.google_unique_id;
      }
      var v3745 = v4388;
      if (v3745) {
        v3745 = b$$inline_250 != f$$inline_254.CONTROL_NO_FRAME;
      }
      var v2688 = v3745;
      if (v2688) {
        v2688 = b$$inline_250 != f$$inline_254.SERIAL;
      }
      if (v2688) {
        var g$$inline_255 = "zrt_ads_frame" + a$$inline_249.google_unique_id;
        var h$$inline_256;
        var a$$inline_555 = a$$inline_249;
        var d$$inline_558 = c$$inline_251.google_page_url;
        if (!d$$inline_558) {
          var v2689;
          if (Ze(a$$inline_555, a$$inline_555.document, d$$inline_252, e$$inline_253)) {
            v2689 = a$$inline_555.document.referrer;
          } else {
            v2689 = a$$inline_555.document.URL;
          }
          d$$inline_558 = v2689;
        }
        h$$inline_256 = encodeURIComponent(d$$inline_558);
        var k$$inline_257 = null;
        if (Le(b$$inline_250)) {
          k$$inline_257 = He;
          switch(b$$inline_250) {
            case f$$inline_254.IFRAME_SIGNALING:
              b$$inline_250 = k$$inline_257.PARALLEL_W_IFRAME_SIGNALING;
              break;
            case f$$inline_254.ALWAYS_ZRT:
              b$$inline_250 = k$$inline_257.PARALLEL_W_ALWAYS_ZRT;
              break;
            default:
              b$$inline_250 = k$$inline_257.PARALLEL;
          }
          k$$inline_257 = b$$inline_250 + "-" + (h$$inline_256 + "/" + c$$inline_251.google_ad_unit_key + "/" + a$$inline_249.google_unique_id);
        }
        a$$inline_249 = {};
        Ff(a$$inline_249, d$$inline_252, e$$inline_253, !1);
        a$$inline_249.style = "display:none";
        var a$$inline_560 = k$$inline_257;
        var b$$inline_561 = g$$inline_255;
        var c$$inline_562 = a$$inline_249;
        c$$inline_562.id = b$$inline_561;
        c$$inline_562.name = b$$inline_561;
        var v5090 = Df(a$$inline_560);
        c$$inline_562.src = v5090;
        b$$299 = Cf(c$$inline_562);
        break JSCompiler_inline_label_If_258;
      }
      b$$299 = null;
    }
    g$$29 = vf;
    var v1084 = new Date;
    h$$21 = JAM.call(v1084.getTime, v1084, [], JAM.policy.p3);
    var l$$11 = a$$378.google_top_experiment;
    var z$$5 = a$$378.google_async_for_oa_experiment;
    var C$$3 = a$$378.google_always_use_delayed_impressions_experiment;
    var v2693 = a$$378.google_unique_id;
    var v3751;
    if (l$$11) {
      v3751 = 'google_top_experiment="' + l$$11 + '";';
    } else {
      v3751 = "";
    }
    var v2694 = v3751;
    var v3752;
    if (d$$125) {
      v3752 = 'google_ad_handling_mode="' + d$$125 + '";';
    } else {
      v3752 = "";
    }
    var v2695 = v3752;
    var v3753;
    if (z$$5) {
      v3753 = 'google_async_for_oa_experiment="' + z$$5 + '";';
    } else {
      v3753 = "";
    }
    var v2696 = v3753;
    var v3754;
    if (C$$3) {
      v3754 = 'google_always_use_delayed_impressions_experiment="' + C$$3 + '";';
    } else {
      v3754 = "";
    }
    var v2697 = v3754;
    var v3755;
    if (k$$9) {
      v3755 = 'google_append_as_for_format_override="' + k$$9 + '";';
    } else {
      v3755 = "";
    }
    var v2698 = v3755;
    var v3756;
    if (h$$21 > g$$29) {
      v3756 = h$$21 - g$$29;
    } else {
      v3756 = 1;
    }
    var v1085 = ["<!doctype html><html><body>", b$$299, "<", f$$48, ">", c$$197, "google_show_ads_impl=true;google_unique_id=", v2693, ';google_async_iframe_id="', e$$75, '";google_start_time=', g$$29, ";", v2694, v2695, v2696, v2697, v2698, "google_bpp=", v3756, ";google_async_rrc=0;</", f$$48, ">", xf(), "</body></html>"];
    k$$9 = JAM.call(v1085.join, v1085, [""], JAM.policy.p3);
    var v1086;
    var v3757 = a$$378.document;
    if (JAM.call(v3757.getElementById, v3757, [e$$75], JAM.policy.p3)) {
      v1086 = rf;
    } else {
      v1086 = sf;
    }
    c$$197 = v1086;
    JAM.call(c$$197, null, [Af(a$$378, e$$75, k$$9, !0)], JAM.policy.p3);
    return;
  }
  function Kf(a$$376, b$$297, c$$196) {
    function v37(a$$377, b$$298, f$$47) {
      var JSCompiler_inline_result$$22;
      var a$$inline_232 = a$$377;
      var b$$inline_233 = b$$298;
      var c$$inline_234 = f$$47;
      var d$$inline_235 = c$$196;
      a$$inline_232 = a$$inline_232.document;
      var a$$inline_535 = a$$inline_232;
      var b$$inline_536 = b$$inline_233;
      var c$$inline_537 = b$$inline_536.id;
      var d$$inline_538 = 0;
      var v2703 = !c$$inline_537;
      if (!v2703) {
        v2703 = JAM.call(a$$inline_535.getElementById, a$$inline_535, [c$$inline_537], JAM.policy.p3);
      }
      var v1089 = v2703;
      for (;v1089;) {
        var v1088 = d$$inline_538;
        d$$inline_538 = d$$inline_538 + 1;
        c$$inline_537 = "aswift_" + v1088;
        var v2704 = !c$$inline_537;
        if (!v2704) {
          v2704 = JAM.call(a$$inline_535.getElementById, a$$inline_535, [c$$inline_537], JAM.policy.p3);
        }
        v1089 = v2704;
      }
      b$$inline_536.id = c$$inline_537;
      b$$inline_536.name = c$$inline_537;
      a$$inline_232 = Number(c$$inline_234.google_ad_width);
      c$$inline_234 = Number(c$$inline_234.google_ad_height);
      var JSCompiler_temp_const$$490 = d$$inline_235;
      var JSCompiler_inline_result$$491;
      var a$$inline_540 = b$$inline_233;
      var b$$inline_541 = a$$inline_232;
      var c$$inline_542 = c$$inline_234;
      var d$$inline_543 = ["<iframe"];
      var e$$inline_544;
      for (e$$inline_544 in a$$inline_540) {
        var v1092 = JAM.call(a$$inline_540.hasOwnProperty, a$$inline_540, [e$$inline_544], JAM.policy.p3);
        if (v1092) {
          ib$$1(d$$inline_543, e$$inline_544 + "=" + a$$inline_540[e$$inline_544]);
        }
      }
      JAM.call(d$$inline_543.push, d$$inline_543, ['style="left:0;position:absolute;top:0;"'], JAM.policy.p3);
      JAM.call(d$$inline_543.push, d$$inline_543, ["></iframe>"], JAM.policy.p3);
      d$$inline_543 = JAM.call(d$$inline_543.join, d$$inline_543, [" "], JAM.policy.p3);
      var JSCompiler_inline_result$$717;
      var a$$inline_735 = a$$inline_540.id + "_anchor";
      var b$$inline_736 = b$$inline_541;
      b$$inline_736 = "border:none;height:" + c$$inline_542 + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + b$$inline_736 + "px;background-color:transparent";
      a$$inline_735 = ['<ins style="display:inline-table;', b$$inline_736, '">', '<ins id="', a$$inline_735, '" style="display:block;', b$$inline_736, '">', d$$inline_543, "</ins></ins>"];
      JSCompiler_inline_result$$717 = JAM.call(a$$inline_735.join, a$$inline_735, [""], JAM.policy.p3);
      JSCompiler_inline_result$$491 = a$$inline_540 = JSCompiler_inline_result$$717;
      JAM.set(JSCompiler_temp_const$$490, "innerHTML", JSCompiler_inline_result$$491);
      JSCompiler_inline_result$$22 = b$$inline_233.id;
      return JSCompiler_inline_result$$22;
    }
    Jf(a$$376, b$$297, c$$196, v37);
    return;
  }
  function Ff(a$$372, b$$293, c$$192, d$$121, e$$73) {
    var v1095;
    if (d$$121) {
      v1095 = '"';
    } else {
      v1095 = "";
    }
    d$$121 = v1095;
    var f$$45 = d$$121 + "0" + d$$121;
    a$$372.width = d$$121 + b$$293 + d$$121;
    a$$372.height = d$$121 + c$$192 + d$$121;
    a$$372.frameborder = f$$45;
    if (e$$73) {
      a$$372.src = d$$121 + e$$73 + d$$121;
    }
    a$$372.marginwidth = f$$45;
    a$$372.marginheight = f$$45;
    a$$372.vspace = f$$45;
    a$$372.hspace = f$$45;
    a$$372.allowtransparency = d$$121 + "true" + d$$121;
    a$$372.scrolling = d$$121 + "no" + d$$121;
    return;
  }
  function Df(a$$370) {
    var v1101 = ma$$1("doubleclick");
    var v3763 = Da$$1();
    var v4399;
    if (a$$370) {
      v4399 = "#" + encodeURIComponent(a$$370);
    } else {
      v4399 = "";
    }
    var v2708 = ["/pagead/html/", v3763, "/r20130906/zrt_lookup.html", v4399];
    return L$$1(v1101, JAM.call(v2708.join, v2708, [""], JAM.policy.p3));
  }
  function Cf(a$$368) {
    function v38(a$$369, d$$120) {
      var v1103 = null != a$$369;
      if (v1103) {
        JAM.call(b$$291.push, b$$291, [" " + d$$120 + '="' + a$$369 + '"'], JAM.policy.p3);
      }
      return;
    }
    var b$$291 = ["<iframe"];
    x$$50(a$$368, v38);
    JAM.call(b$$291.push, b$$291, ["></iframe>"], JAM.policy.p3);
    return JAM.call(b$$291.join, b$$291, [""], JAM.policy.p3);
  }
  function Bf(a$$366, b$$289) {
    function v39(a$$367, b$$290) {
      var v1104 = null != a$$367;
      if (v1104) {
        JAM.call(d$$119.setAttribute, d$$119, [b$$290, a$$367], JAM.policy.p3);
      }
      return;
    }
    var c$$190;
    var d$$119 = JAM.call(a$$366.createElement, a$$366, ["iframe"], JAM.policy.p3);
    x$$50(b$$289, v39);
    if (c$$190) {
      d$$119.style.display = c$$190;
    }
    return d$$119;
  }
  function Af(a$$365, b$$288, c$$189, d$$118) {
    function v40() {
      var e$$72 = !1;
      if (d$$118) {
        var a$$inline_225 = 3E4;
        var v1105 = qf();
        JAM.call(v1105.al, v1105, [a$$inline_225], JAM.policy.p3);
      }
      try {
        var JSCompiler_inline_result$$23;
        var a$$inline_227 = a$$365;
        var b$$inline_228 = b$$288;
        var c$$inline_229 = c$$189;
        var v1106 = a$$inline_227.document;
        var d$$inline_230 = JAM.call(v1106.getElementById, v1106, [b$$inline_228], JAM.policy.p3);
        d$$inline_230 = d$$inline_230.contentWindow;
        if (Kb(d$$inline_230)) {
          var a$$inline_527 = a$$inline_227;
          var b$$inline_528 = b$$inline_228;
          var c$$inline_529 = c$$inline_229;
          var v2711 = a$$inline_527.document;
          a$$inline_527 = JAM.call(v2711.getElementById, v2711, [b$$inline_528], JAM.policy.p3).contentWindow;
          b$$inline_528 = a$$inline_527.document;
          var v2712 = b$$inline_528.body;
          if (v2712) {
            v2712 = b$$inline_528.body.firstChild;
          }
          var v1108 = v2712;
          if (!v1108) {
            JAM.call(b$$inline_528.open, b$$inline_528, [], JAM.policy.p3);
            a$$inline_527.google_async_iframe_close = !0;
            JAM.call(b$$inline_528.write, b$$inline_528, [c$$inline_529], JAM.policy.p3);
          }
        } else {
          var a$$inline_531 = a$$inline_227;
          var c$$inline_533 = c$$inline_229;
          var v2714 = a$$inline_531.document;
          a$$inline_531 = JAM.call(v2714.getElementById, v2714, [b$$inline_228], JAM.policy.p3).contentWindow;
          c$$inline_533 = "javascript:" + ab$$1(c$$inline_533);
          var v1111 = a$$inline_531.location;
          JAM.call(v1111.replace, v1111, [c$$inline_533], JAM.policy.p3);
        }
        JSCompiler_inline_result$$23 = void 0;
        JSCompiler_inline_result$$23;
        e$$72 = !0;
      } catch (f$$44) {
        uf();
      }
      if (e$$72) {
        e$$72 = Oe("google_async_rrc", c$$189);
        var v3767 = new Me(a$$365);
        JAM.call(v3767.set, v3767, [b$$288, Af(a$$365, b$$288, e$$72, !1)], JAM.policy.p3);
      }
      return;
    }
    return v40;
  }
  function zf() {
    var v1113 = "object" == typeof window.ExpandableAdSlotFactory;
    if (v1113) {
      v1113 = "function" == typeof window.ExpandableAdSlotFactory.createIframe;
    }
    return v1113;
  }
  function xf() {
    var a$$363 = "script";
    var v3771 = La$$1();
    var v4403 = ["/pagead/js/", Da$$1(), "/r20130906/show_ads_impl.js"];
    var v1114 = ["<", a$$363, ' src="', L$$1(v3771, JAM.call(v4403.join, v4403, [""], JAM.policy.p3), ""), '"></', a$$363, ">"];
    return JAM.call(v1114.join, v1114, [""], JAM.policy.p3);
  }
  function uf() {
    var a$$362 = hc().google_jobrunner;
    var v1116 = pf(a$$362);
    if (v1116) {
      JAM.call(a$$362.rl, a$$362, [], JAM.policy.p3);
    }
    return;
  }
  function sf(a$$360, b$$286) {
    var v1117 = qf();
    JAM.call(v1117.nqa, v1117, [a$$360, b$$286], JAM.policy.p3);
    return;
  }
  function rf(a$$359, b$$285) {
    var v1118 = qf();
    JAM.call(v1118.nq, v1118, [a$$359, b$$285], JAM.policy.p3);
    return;
  }
  function qf() {
    var v2718 = mf;
    if (v2718) {
      v2718 = of(mf);
    }
    if (v2718) {
      return mf;
    }
    var a$$358 = hc();
    var b$$284 = a$$358.google_jobrunner;
    var v1120;
    if (pf(b$$284)) {
      v1120 = mf = b$$284;
    } else {
      v1120 = a$$358.google_jobrunner = mf = new U$$1(a$$358);
    }
    return v1120;
  }
  function pf(a$$357) {
    var v4729 = gb$$1(a$$357);
    if (v4729) {
      v4729 = of(a$$357);
    }
    var v4404 = v4729;
    if (v4404) {
      v4404 = fb$$1(a$$357.nq);
    }
    var v3773 = v4404;
    if (v3773) {
      v3773 = fb$$1(a$$357.nqa);
    }
    var v2720 = v3773;
    if (v2720) {
      v2720 = fb$$1(a$$357.al);
    }
    var v1121 = v2720;
    if (v1121) {
      v1121 = fb$$1(a$$357.rl);
    }
    return v1121;
  }
  function of(a$$356) {
    try {
      return JAM.call(a$$356.sz, a$$356, [], JAM.policy.p3);
    } catch (b$$283) {
      return !1;
    }
    return;
  }
  function nf(a$$349, b$$278) {
    this.fn = a$$349;
    this.win = b$$278;
    return;
  }
  function U$$1(a$$348) {
    this.oa = [];
    this.p = a$$348 || window;
    this.j = 0;
    this.na = null;
    return;
  }
  function cf(a$$346) {
    var b$$277 = af();
    if (b$$277) {
      return {url:b$$277, isTopUrl:!0};
    }
    b$$277 = a$$346.location.href;
    if (a$$346 == a$$346.top) {
      return {url:b$$277, isTopUrl:!0};
    }
    var c$$187 = !1;
    var d$$117 = a$$346.document;
    var v2723 = d$$117;
    if (v2723) {
      v2723 = d$$117.referrer;
    }
    var v1126 = v2723;
    if (v1126) {
      b$$277 = d$$117.referrer;
      var v3775 = a$$346.parent == a$$346.top;
      if (v3775) {
        c$$187 = !0;
      }
    }
    var v3776 = a$$346 = a$$346.location.ancestorOrigins;
    if (v3776) {
      v3776 = a$$346 = a$$346[a$$346.length - 1];
    }
    var v2724 = v3776;
    if (v2724) {
      v2724 = -1 == JAM.call(b$$277.indexOf, b$$277, [a$$346], JAM.policy.p3);
    }
    var v1127 = v2724;
    if (v1127) {
      c$$187 = !1;
      b$$277 = a$$346;
    }
    return {url:b$$277, isTopUrl:c$$187};
  }
  function af(a$$345) {
    var b$$276 = D$$1().google_top_values;
    if (b$$276) {
      var c$$186 = b$$276[3];
      if (a$$345) {
        c$$186 = b$$276[4];
      }
      if (c$$186) {
        return c$$186 + "";
      }
    }
    return null;
  }
  function Ye() {
    var v1129 = H$$1();
    var a$$344 = JAM.call(v1129.m, v1129, [10], JAM.policy.p3);
    var b$$275 = K$$1.PERISCOPE_FOR_TARGETING;
    return a$$344 === b$$275.EXPERIMENT_REFERER_CLEANUP;
  }
  function Xe(a$$343) {
    var v3778 = a$$343.webkitVisibilityState;
    if (!v3778) {
      v3778 = a$$343.mozVisibilityState;
    }
    var v2725 = v3778;
    if (!v2725) {
      v2725 = a$$343.visibilityState;
    }
    var v1131 = v2725;
    if (!v1131) {
      v1131 = "";
    }
    a$$343 = v1131;
    var b$$274 = {visible:1, hidden:2, prerender:3, preview:4};
    var v1132 = b$$274[a$$343];
    if (!v1132) {
      v1132 = 0;
    }
    return v1132;
  }
  function Ve(a$$337, b$$268, c$$180) {
    if (n$$2(b$$268)) {
      var d$$112 = 0;
      var v1134 = d$$112 < b$$268.length;
      for (;v1134;) {
        Ve(a$$337, String(b$$268[d$$112]), c$$180);
        d$$112++;
        v1134 = d$$112 < b$$268.length;
      }
    } else {
      var v1135 = null != b$$268;
      if (v1135) {
        var v3780;
        if ("" === b$$268) {
          v3780 = "";
        } else {
          v3780 = "=";
        }
        JAM.call(c$$180.push, c$$180, ["&", a$$337, v3780, encodeURIComponent(String(b$$268))], JAM.policy.p3);
      }
    }
    return;
  }
  function Re(a$$333) {
    if (Se) {
      Se = !1;
      var a$$inline_194 = m$$3.location;
      if (a$$inline_194) {
        var b$$inline_195 = a$$inline_194.href;
        var JSCompiler_temp$$498;
        if (JSCompiler_temp$$498 = b$$inline_195) {
          var JSCompiler_inline_result$$499;
          var v1137 = Re(b$$inline_195)[3];
          if (!v1137) {
            v1137 = null;
          }
          var a$$inline_525 = v1137;
          var v1138 = a$$inline_525;
          if (v1138) {
            v1138 = decodeURIComponent(a$$inline_525);
          }
          JSCompiler_inline_result$$499 = v1138;
          JSCompiler_temp$$498 = b$$inline_195 = JSCompiler_inline_result$$499;
        }
        var v2735 = JSCompiler_temp$$498;
        if (v2735) {
          v2735 = b$$inline_195 != a$$inline_194.hostname;
        }
        if (v2735) {
          Se = !0;
          throw Error();
        }
      }
    }
    return JAM.call(a$$333.match, a$$333, [Pe], JAM.policy.p3);
  }
  function Oe(a$$332, b$$265) {
    var c$$178 = RegExp("\\b" + a$$332 + "=(\\d+)");
    var d$$111 = JAM.call(c$$178.exec, c$$178, [b$$265], JAM.policy.p3);
    if (d$$111) {
      var v3783 = +d$$111[1] + 1;
      if (!v3783) {
        v3783 = 1;
      }
      d$$111 = v3783;
      b$$265 = JAM.call(b$$265.replace, b$$265, [c$$178, a$$332 + "=" + d$$111], JAM.policy.p3);
    }
    return b$$265;
  }
  function Me(a$$328) {
    this.p = a$$328;
    var v1142 = a$$328.google_iframe_oncopy;
    if (!v1142) {
      a$$328.google_iframe_oncopy = {handlers:{}, upd:JAM.call(r$$2, null, [this.Qc, this], JAM.policy.p3)};
    }
    this.hd = a$$328.google_iframe_oncopy;
    return;
  }
  function Le(a$$327) {
    var b$$261 = Ge;
    var v2739 = a$$327 == b$$261.PARALLEL_CANCEL_ON_NO_AD;
    if (!v2739) {
      v2739 = a$$327 == b$$261.IFRAME_SIGNALING;
    }
    var v1143 = v2739;
    if (!v1143) {
      v1143 = a$$327 == b$$261.ALWAYS_ZRT;
    }
    return v1143;
  }
  function Ke(a$$326) {
    try {
      var b$$260 = JAM.call(Ie.test, Ie, [a$$326.location.host], JAM.policy.p3);
      var v4415 = !a$$326.postMessage;
      if (!v4415) {
        v4415 = !a$$326.localStorage;
      }
      var v3789 = v4415;
      if (!v3789) {
        v3789 = !a$$326.JSON;
      }
      var v2743 = v3789;
      if (!v2743) {
        v2743 = b$$260;
      }
      return !v2743;
    } catch (c$$176) {
      return !1;
    }
    return;
  }
  function Ee(a$$323) {
    function v41(a$$324, b$$258) {
      if (null != a$$324) {
        var f$$41;
        try {
          var v1146 = new Be;
          f$$41 = JAM.call(v1146.serialize, v1146, [a$$324], JAM.policy.p3);
        } catch (g$$26) {
        }
        if (f$$41) {
          ib$$1(c$$174, b$$258, "=", f$$41, ";");
        }
      }
      return;
    }
    var b$$257 = "google_page_url";
    var v1148 = a$$323[b$$257];
    if (v1148) {
      var v2744 = a$$323;
      var v2745 = b$$257;
      var v5091 = String(a$$323[b$$257]);
      introspect(JAM.policy.p2) {
        v2744[v2745] = v5091;
      }
    }
    var c$$174 = [];
    x$$50(a$$323, v41);
    return JAM.call(c$$174.join, c$$174, [""], JAM.policy.p3);
  }
  function Be() {
    return;
  }
  function we(a$$312) {
    function v42(a$$313, d$$106) {
      var v2746 = 0 === a$$313;
      if (!v2746) {
        v2746 = a$$313;
      }
      if (v2746) {
        var v2747 = b$$247;
        var v3793 = "&" + d$$106 + "=";
        var v4419;
        if ("function" == typeof encodeURIComponent) {
          v4419 = encodeURIComponent(a$$313);
        } else {
          v4419 = escape(a$$313);
        }
        b$$247 = v2747 + (v3793 + v4419);
      }
      return;
    }
    var b$$247 = "";
    x$$50(a$$312, v42);
    return b$$247;
  }
  function ye(a$$310, b$$246, c$$170) {
    function v43(e$$65) {
      e$$65 = ga$$1(b$$246, e$$65);
      var f$$40 = d$$105 || ve;
      te(a$$310, f$$40, e$$65, c$$170);
      return;
    }
    var d$$105;
    return v43;
  }
  function xe(a$$309, b$$245, c$$169) {
    var d$$104;
    return ga$$1(te, a$$309, d$$104 || ve, b$$245, c$$169);
  }
  function ue(a$$307) {
    function v44(a$$308, d$$103) {
      introspect(JAM.policy.p2) {
        b$$244[d$$103] = w$$6[a$$308];
      }
      return;
    }
    var b$$244 = a$$307 || {};
    x$$50(pe, v44);
    return;
  }
  function se(b$$243) {
    var c$$168;
    var a$$306 = "jserror";
    c$$168 = c$$168 || .01;
    var v1151 = JAM.call(Math.random, Math, [], JAM.policy.p3) < c$$168;
    if (v1151) {
      a$$306 = "/pagead/gen_204?id=" + a$$306 + we(b$$243);
      a$$306 = L$$1(ma$$1("googlesyndication"), a$$306);
      a$$306 = JAM.call(a$$306.substring, a$$306, [0, 2E3], JAM.policy.p3);
      nb$$1(w$$6, a$$306);
    }
    return;
  }
  function ve(a$$305, b$$242, c$$167, d$$102, e$$64) {
    var f$$39 = v$$1;
    var v2750;
    if (Ea$$1) {
      v2750 = 1;
    } else {
      v2750 = 0;
    }
    var v1152 = v2750;
    var v2751;
    if (Fa$$1) {
      v2751 = 1;
    } else {
      v2751 = 0;
    }
    var v1153 = v2751;
    var v1154 = JAM.call(b$$242.substring, b$$242, [0, 512], JAM.policy.p3);
    var v2752 = e$$64;
    if (v2752) {
      v2752 = JAM.call(e$$64.substring, e$$64, [0, 40], JAM.policy.p3);
    }
    var v1155 = v2752;
    var v1156 = JAM.call(d$$102.toString, d$$102, [], JAM.policy.p3);
    var v2753 = f$$39.URL;
    var v1157 = JAM.call(v2753.substring, v2753, [0, 512], JAM.policy.p3);
    var v2754 = f$$39.referrer;
    a$$305 = {jscb:v1152, jscd:v1153, context:a$$305, msg:v1154, eid:v1155, file:c$$167, line:v1156, url:v1157, ref:JAM.call(v2754.substring, v2754, [0, 512], JAM.policy.p3)};
    ue(a$$305);
    se(a$$305);
    return !Ga$$1;
  }
  function te(a$$304, b$$241, c$$166, d$$101) {
    try {
      JAM.call(c$$166, null, [], JAM.policy.p3);
    } catch (e$$63) {
      c$$166 = !Ga$$1;
      try {
        var f$$38 = JAM.call(e$$63.toString, e$$63, [], JAM.policy.p3);
        var v2755 = e$$63.name;
        if (v2755) {
          v2755 = -1 == JAM.call(f$$38.indexOf, f$$38, [e$$63.name], JAM.policy.p3);
        }
        var v1159 = v2755;
        if (v1159) {
          f$$38 = f$$38 + (": " + e$$63.name);
        }
        var v2756 = e$$63.message;
        if (v2756) {
          v2756 = -1 == JAM.call(f$$38.indexOf, f$$38, [e$$63.message], JAM.policy.p3);
        }
        var v1160 = v2756;
        if (v1160) {
          f$$38 = f$$38 + (": " + e$$63.message);
        }
        if (e$$63.stack) {
          JSCompiler_inline_label_qe_190: {
            var a$$inline_186 = e$$63.stack;
            var b$$inline_187 = f$$38;
            try {
              var v1161 = -1 == JAM.call(a$$inline_186.indexOf, a$$inline_186, [b$$inline_187], JAM.policy.p3);
              if (v1161) {
                a$$inline_186 = b$$inline_187 + "\n" + a$$inline_186;
              }
              var c$$inline_188;
              var v1162 = a$$inline_186 != c$$inline_188;
              for (;v1162;) {
                c$$inline_188 = a$$inline_186;
                a$$inline_186 = JAM.call(a$$inline_186.replace, a$$inline_186, [/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1"], JAM.policy.p3);
                v1162 = a$$inline_186 != c$$inline_188;
              }
              f$$38 = JAM.call(a$$inline_186.replace, a$$inline_186, [/\n */g, "\n"], JAM.policy.p3);
            } catch (d$$inline_189) {
              f$$38 = b$$inline_187;
            }
          }
        }
        var g$$25 = "";
        var v1164 = e$$63.fileName;
        if (v1164) {
          g$$25 = e$$63.fileName;
        }
        var h$$18 = -1;
        var v1165 = e$$63.lineNumber;
        if (v1165) {
          h$$18 = e$$63.lineNumber;
        }
        var k$$7;
        JSCompiler_inline_label_re_193: {
          try {
            var v1166;
            if (d$$101) {
              v1166 = JAM.call(d$$101, null, [], JAM.policy.p3);
            } else {
              v1166 = "";
            }
            k$$7 = v1166;
            break JSCompiler_inline_label_re_193;
          } catch (b$$inline_192) {
          }
          k$$7 = "";
        }
        c$$166 = JAM.call(b$$241, null, [a$$304, f$$38, g$$25, h$$18, k$$7], JAM.policy.p3);
      } catch (l$$10) {
        var v3799 = JAM.call(l$$10.toString, l$$10, [], JAM.policy.p3) + "\n";
        var v4425 = l$$10.stack;
        if (!v4425) {
          v4425 = "";
        }
        se({context:"protectAndRun", msg:v3799 + v4425});
      }
      if (!c$$166) {
        throw e$$63;
      }
    }
    return;
  }
  function le(a$$301, b$$238, c$$164, d$$99, e$$61) {
    this.nb = a$$301;
    this.fd = b$$238;
    this.ld = c$$164;
    this.kb = d$$99;
    this.Vb = this.lb = !1;
    this.Yc = e$$61 || null;
    return;
  }
  function me() {
    var a$$300 = D$$1();
    var b$$237 = a$$300.__google_ad_urls;
    if (!b$$237) {
      var v5092 = new S$$1(a$$300);
      return a$$300.__google_ad_urls = v5092;
    }
    try {
      if (JAM.call(b$$237.getOseId, b$$237, [], JAM.policy.p3)) {
        return b$$237;
      }
    } catch (c$$163) {
    }
    var v5093 = new S$$1(a$$300, b$$237);
    return a$$300.__google_ad_urls = v5093;
  }
  function ke(a$$293, b$$229, c$$156, d$$93) {
    var v2760;
    if (a$$293) {
      v2760 = "https";
    } else {
      v2760 = "http";
    }
    he = L$$1(b$$229, "/pagead/osd.js", v2760);
    ie = c$$156;
    je = d$$93;
    return;
  }
  function S$$1(a$$292, b$$228) {
    this.wa = a$$292;
    var v1172;
    if (b$$228) {
      v1172 = b$$228.ha;
    } else {
      v1172 = [];
    }
    this.ha = v1172;
    var v1173;
    if (b$$228) {
      v1173 = b$$228.Ua;
    } else {
      v1173 = !1;
    }
    this.Ua = v1173;
    var v1174;
    if (b$$228) {
      v1174 = b$$228.Db;
    } else {
      v1174 = "";
    }
    this.Db = v1174;
    var v1175;
    if (b$$228) {
      v1175 = b$$228.Wa;
    } else {
      v1175 = 0;
    }
    this.Wa = v1175;
    var v1176;
    if (b$$228) {
      v1176 = b$$228.Aa;
    } else {
      v1176 = "";
    }
    this.Aa = v1176;
    var v1177;
    if (b$$228) {
      v1177 = b$$228.q;
    } else {
      v1177 = [];
    }
    this.q = v1177;
    this.xa = null;
    this.Lb = !1;
    return;
  }
  function fe(a$$290, b$$227) {
    function v45() {
      var v1178 = "complete" == a$$290.readyState;
      if (v1178) {
        JAM.call(b$$227, null, [], JAM.policy.p3);
      }
      return;
    }
    var v2762 = pb$$1();
    if (v2762) {
      v2762 = !window.opera;
    }
    if (v2762) {
      var c$$155 = v45;
      y$$31(a$$290, "readystatechange", c$$155);
    } else {
      y$$31(a$$290, "load", b$$227);
    }
    return;
  }
  function de(a$$288, b$$225) {
    var c$$153 = b$$225 || w$$6;
    var v2763 = a$$288;
    if (v2763) {
      v2763 = c$$153.top != c$$153;
    }
    var v1180 = v2763;
    if (v1180) {
      c$$153 = c$$153.top;
    }
    try {
      var JSCompiler_temp$$31;
      var v2764 = c$$153.document;
      if (v2764) {
        v2764 = !c$$153.document.body;
      }
      if (v2764) {
        JSCompiler_temp$$31 = new u$$2(-1, -1);
      } else {
        var a$$inline_184 = c$$153 || window;
        a$$inline_184 = a$$inline_184.document;
        var v1181;
        if ("CSS1Compat" == a$$inline_184.compatMode) {
          v1181 = a$$inline_184.documentElement;
        } else {
          v1181 = a$$inline_184.body;
        }
        a$$inline_184 = v1181;
        JSCompiler_temp$$31 = new u$$2(a$$inline_184.clientWidth, a$$inline_184.clientHeight);
      }
      return JSCompiler_temp$$31;
    } catch (d$$92) {
      return new u$$2(-12245933, -12245933);
    }
    return;
  }
  function ce(a$$287, b$$224) {
    if (a$$287) {
      var c$$152 = JAM.call(a$$287.match, a$$287, [b$$224 + "=([^&]+)"], JAM.policy.p3);
      var v2766 = c$$152;
      if (v2766) {
        v2766 = 2 == c$$152.length;
      }
      if (v2766) {
        return c$$152[1];
      }
    }
    return "";
  }
  function be(a$$286, b$$223, c$$151, d$$91, e$$57) {
    var JSCompiler_temp$$40;
    if (e$$57) {
      var b$$inline_176 = b$$223;
      b$$inline_176 = "&" + b$$inline_176 + "=" + c$$151;
      JSCompiler_temp$$40 = a$$286 + b$$inline_176;
    } else {
      var a$$inline_179 = a$$286;
      var b$$inline_180 = b$$223;
      var c$$inline_181 = c$$151;
      var d$$inline_182 = "&" + b$$inline_180 + "=";
      b$$inline_180 = JAM.call(a$$inline_179.indexOf, a$$inline_179, [d$$inline_182], JAM.policy.p3);
      var v1189;
      if (0 > b$$inline_180) {
        v1189 = a$$inline_179 = a$$inline_179 + d$$inline_182 + c$$inline_181;
      } else {
        b$$inline_180 = b$$inline_180 + d$$inline_182.length;
        d$$inline_182 = JAM.call(a$$inline_179.indexOf, a$$inline_179, ["&", b$$inline_180], JAM.policy.p3);
        var v3806;
        if (0 <= d$$inline_182) {
          v3806 = JAM.call(a$$inline_179.substring, a$$inline_179, [0, b$$inline_180], JAM.policy.p3) + c$$inline_181 + JAM.call(a$$inline_179.substring, a$$inline_179, [d$$inline_182], JAM.policy.p3);
        } else {
          v3806 = JAM.call(a$$inline_179.substring, a$$inline_179, [0, b$$inline_180], JAM.policy.p3) + c$$inline_181;
        }
        v1189 = a$$inline_179 = v3806;
      }
      v1189;
      JSCompiler_temp$$40 = a$$inline_179;
    }
    c$$151 = JSCompiler_temp$$40;
    var v1190;
    if (2E3 < c$$151.length) {
      var v2770;
      if (void 0 !== d$$91) {
        v2770 = be(a$$286, b$$223, d$$91, void 0, e$$57);
      } else {
        v2770 = a$$286;
      }
      v1190 = v2770;
    } else {
      v1190 = c$$151;
    }
    return v1190;
  }
  function Zd(a$$282, b$$220, c$$148) {
    function v46(a$$283) {
      return a$$283;
    }
    var d$$89;
    var v3810;
    if (c$$148) {
      v3810 = "google_debug&";
    } else {
      v3810 = "";
    }
    var v1191 = [v3810, "xpc=", b$$220, "&p=", encodeURIComponent(v$$1.location.protocol), "//", encodeURIComponent(v$$1.location.host)];
    b$$220 = JAM.call(v1191.join, v1191, [""], JAM.policy.p3);
    var v1192;
    if (d$$89) {
      v1192 = encodeURIComponent;
    } else {
      v1192 = v46;
    }
    d$$89 = v1192;
    var v2775 = a$$282;
    var v3813;
    if (-1 == JAM.call(a$$282.indexOf, a$$282, [JAM.call(d$$89, null, ["?"], JAM.policy.p3)], JAM.policy.p3)) {
      v3813 = JAM.call(d$$89, null, ["?"], JAM.policy.p3);
    } else {
      v3813 = JAM.call(d$$89, null, ["&"], JAM.policy.p3);
    }
    return v2775 + v3813 + JAM.call(d$$89, null, [b$$220], JAM.policy.p3);
  }
  function Yd(a$$281, b$$219, c$$147, d$$88, e$$56, f$$33, g$$21, h$$14) {
    return {a:a$$281, b:b$$219, c:c$$147, d:d$$88, e:e$$56, f:f$$33, g:g$$21, h:h$$14};
  }
  function Wd(a$$279) {
    var b$$217 = R$$1(a$$279, "fontSize");
    var c$$145;
    var a$$inline_170 = b$$217;
    var v2777 = a$$inline_170 = JAM.call(a$$inline_170.match, a$$inline_170, [Sd], JAM.policy.p3);
    if (v2777) {
      v2777 = a$$inline_170[0];
    }
    var v1195 = v2777;
    if (!v1195) {
      v1195 = null;
    }
    c$$145 = v1195;
    var v2779 = b$$217;
    if (v2779) {
      v2779 = "px" == c$$145;
    }
    if (v2779) {
      return parseInt(b$$217, 10);
    }
    if (N$$1) {
      if (c$$145 in Ud) {
        return Od(a$$279, b$$217);
      }
      var v3814 = a$$279.parentNode;
      if (v3814) {
        v3814 = 1 == a$$279.parentNode.nodeType;
      }
      var v2780 = v3814;
      if (v2780) {
        v2780 = c$$145 in Vd;
      }
      if (v2780) {
        a$$279 = a$$279.parentNode;
        c$$145 = R$$1(a$$279, "fontSize");
        var v3815;
        if (b$$217 == c$$145) {
          v3815 = "1em";
        } else {
          v3815 = b$$217;
        }
        return Od(a$$279, v3815);
      }
    }
    c$$145 = kd("span", {style:"visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"});
    JAM.call(a$$279.appendChild, a$$279, [c$$145], JAM.policy.p3);
    b$$217 = c$$145.offsetHeight;
    qd(c$$145);
    return b$$217;
  }
  function Qd(a$$276) {
    var b$$215 = "padding";
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
  }
  function Pd(a$$275, b$$214) {
    var v1212;
    if (a$$275.currentStyle) {
      v1212 = a$$275.currentStyle[b$$214];
    } else {
      v1212 = null;
    }
    var c$$142 = v1212;
    var v1213;
    if (c$$142) {
      v1213 = Od(a$$275, c$$142);
    } else {
      v1213 = 0;
    }
    return v1213;
  }
  function Od(a$$274, b$$213) {
    var c$$141 = "left";
    var d$$85 = "pixelLeft";
    if (JAM.call(/^\d+px?$/.test, /^\d+px?$/, [b$$213], JAM.policy.p3)) {
      return parseInt(b$$213, 10);
    }
    var e$$54 = a$$274.style[c$$141];
    var f$$31 = a$$274.runtimeStyle[c$$141];
    var v1217 = a$$274.runtimeStyle;
    var v2784 = a$$274.currentStyle;
    introspect(JAM.policy.p2) {
      v1217[c$$141] = v2784[c$$141];
    }
    var v1218 = a$$274.style;
    introspect(JAM.policy.p2) {
      v1218[c$$141] = b$$213;
    }
    b$$213 = a$$274.style[d$$85];
    var v1220 = a$$274.style;
    introspect(JAM.policy.p2) {
      v1220[c$$141] = e$$54;
    }
    var v1221 = a$$274.runtimeStyle;
    introspect(JAM.policy.p2) {
      v1221[c$$141] = f$$31;
    }
    return b$$213;
  }
  function Nd(a$$273, b$$212) {
    var c$$140 = a$$273.style;
    var v1222;
    if ("opacity" in c$$140) {
      v1222 = c$$140.opacity = b$$212;
    } else {
      var v2785;
      if ("MozOpacity" in c$$140) {
        v2785 = c$$140.MozOpacity = b$$212;
      } else {
        var v3816 = "filter" in c$$140;
        if (v3816) {
          var v4437;
          if ("" === b$$212) {
            v4437 = "";
          } else {
            v4437 = "alpha(opacity=" + 100 * b$$212 + ")";
          }
          v3816 = c$$140.filter = v4437;
        }
        v2785 = v3816;
      }
      v1222 = v2785;
    }
    v1222;
    return;
  }
  function Md(a$$272) {
    var b$$211 = a$$272.style;
    a$$272 = "";
    var v1223;
    if ("opacity" in b$$211) {
      v1223 = a$$272 = b$$211.opacity;
    } else {
      var v2787;
      if ("MozOpacity" in b$$211) {
        v2787 = a$$272 = b$$211.MozOpacity;
      } else {
        var v4438 = "filter" in b$$211;
        if (v4438) {
          var v4747 = b$$211.filter;
          v4438 = b$$211 = JAM.call(v4747.match, v4747, [/alpha\(opacity=([\d.]+)\)/], JAM.policy.p3);
        }
        var v3818 = v4438;
        if (v3818) {
          v3818 = a$$272 = String(b$$211[1] / 100);
        }
        v2787 = v3818;
      }
      v1223 = v2787;
    }
    v1223;
    var v1224;
    if ("" == a$$272) {
      v1224 = a$$272;
    } else {
      v1224 = Number(a$$272);
    }
    return v1224;
  }
  function Ld(a$$271) {
    var b$$210 = a$$271.offsetWidth;
    var c$$139 = a$$271.offsetHeight;
    var v2790 = Pc;
    if (v2790) {
      v2790 = !b$$210;
    }
    var v1225 = v2790;
    if (v1225) {
      v1225 = !c$$139;
    }
    var d$$84 = v1225;
    var v1226;
    var v4440 = void 0 === b$$210;
    if (!v4440) {
      v4440 = d$$84;
    }
    var v3820 = v4440;
    if (v3820) {
      v3820 = a$$271.getBoundingClientRect;
    }
    if (v3820) {
      a$$271 = Ad(a$$271);
      v1226 = new u$$2(a$$271.right - a$$271.left, a$$271.bottom - a$$271.top);
    } else {
      v1226 = new u$$2(b$$210, c$$139);
    }
    return v1226;
  }
  function Jd(a$$267) {
    var b$$206 = !0;
    var v1227 = "number" == typeof a$$267;
    if (v1227) {
      var v3823;
      if (b$$206) {
        v3823 = JAM.call(Math.round, Math, [a$$267], JAM.policy.p3);
      } else {
        v3823 = a$$267;
      }
      a$$267 = v3823 + "px";
    }
    return a$$267;
  }
  function Id(a$$266, b$$205) {
    var c$$137;
    if (b$$205 instanceof u$$2) {
      c$$137 = b$$205.height;
      b$$205 = b$$205.width;
    } else {
      if (void 0 == c$$137) {
        throw Error("missing height argument");
      }
    }
    var v1230 = a$$266.style;
    var v5094 = Jd(b$$205);
    v1230.width = v5094;
    var v1231 = a$$266.style;
    var v5095 = Jd(c$$137);
    v1231.height = v5095;
    return;
  }
  function Cd(a$$263) {
    var b$$202;
    var c$$134 = cd(a$$263);
    var d$$81 = R$$1(a$$263, "position");
    var v4751 = Oc;
    if (v4751) {
      v4751 = c$$134.getBoxObjectFor;
    }
    var v4445 = v4751;
    if (v4445) {
      v4445 = !a$$263.getBoundingClientRect;
    }
    var v3824 = v4445;
    if (v3824) {
      v3824 = "absolute" == d$$81;
    }
    var v2795 = v3824;
    if (v2795) {
      v2795 = b$$202 = JAM.call(c$$134.getBoxObjectFor, c$$134, [a$$263], JAM.policy.p3);
    }
    var v1232 = v2795;
    if (v1232) {
      var v2796 = 0 > b$$202.screenX;
      if (!v2796) {
        v2796 = 0 > b$$202.screenY;
      }
      v1232 = v2796;
    }
    var e$$51 = v1232;
    var f$$28 = new M$$1(0, 0);
    var g$$19;
    var a$$inline_155 = c$$134;
    var v1233;
    if (a$$inline_155) {
      v1233 = cd(a$$inline_155);
    } else {
      v1233 = document;
    }
    a$$inline_155 = v1233;
    var v1234;
    var v4446 = !N$$1;
    if (!v4446) {
      var v4753 = N$$1;
      if (v4753) {
        v4753 = 9 <= Vc;
      }
      v4446 = v4753;
    }
    var v3828 = v4446;
    if (!v3828) {
      var v4447 = dd(a$$inline_155);
      v3828 = JAM.call(v4447.$b, v4447, [], JAM.policy.p3);
    }
    if (v3828) {
      v1234 = a$$inline_155.documentElement;
    } else {
      v1234 = a$$inline_155.body;
    }
    g$$19 = v1234;
    if (a$$263 == g$$19) {
      return f$$28;
    }
    if (a$$263.getBoundingClientRect) {
      b$$202 = Ad(a$$263);
      var v4449 = dd(c$$134);
      a$$263 = JAM.call(v4449.Ja, v4449, [], JAM.policy.p3);
      f$$28.x = b$$202.left + a$$263.x;
      f$$28.y = b$$202.top + a$$263.y;
    } else {
      var v2800 = c$$134.getBoxObjectFor;
      if (v2800) {
        v2800 = !e$$51;
      }
      if (v2800) {
        b$$202 = JAM.call(c$$134.getBoxObjectFor, c$$134, [a$$263], JAM.policy.p3);
        a$$263 = JAM.call(c$$134.getBoxObjectFor, c$$134, [g$$19], JAM.policy.p3);
        f$$28.x = b$$202.screenX - a$$263.screenX;
        f$$28.y = b$$202.screenY - a$$263.screenY;
      } else {
        b$$202 = a$$263;
        var v2803 = b$$202;
        if (v2803) {
          v2803 = b$$202 != a$$263;
        }
        var v1238 = v2803;
        do {
          f$$28.x = f$$28.x + b$$202.offsetLeft;
          f$$28.y = f$$28.y + b$$202.offsetTop;
          var v1236 = b$$202 != a$$263;
          if (v1236) {
            var v4450 = f$$28.x;
            var v4755 = b$$202.clientLeft;
            if (!v4755) {
              v4755 = 0;
            }
            f$$28.x = v4450 + v4755;
            var v4452 = f$$28.y;
            var v4756 = b$$202.clientTop;
            if (!v4756) {
              v4756 = 0;
            }
            f$$28.y = v4452 + v4756;
          }
          var v2808 = Pc;
          if (v2808) {
            v2808 = "fixed" == R$$1(b$$202, "position");
          }
          if (v2808) {
            f$$28.x = f$$28.x + c$$134.body.scrollLeft;
            f$$28.y = f$$28.y + c$$134.body.scrollTop;
            break;
          }
          b$$202 = b$$202.offsetParent;
          var v2813 = b$$202;
          if (v2813) {
            v2813 = b$$202 != a$$263;
          }
          v1238 = v2813;
        } while (v1238);
        var v2814 = Nc;
        if (!v2814) {
          var v3836 = Pc;
          if (v3836) {
            v3836 = "absolute" == d$$81;
          }
          v2814 = v3836;
        }
        if (v2814) {
          f$$28.y = f$$28.y - c$$134.body.offsetTop;
        }
        b$$202 = a$$263;
        var v3839 = b$$202 = Bd(b$$202);
        if (v3839) {
          v3839 = b$$202 != c$$134.body;
        }
        var v2817 = v3839;
        if (v2817) {
          v2817 = b$$202 != g$$19;
        }
        var v1240 = v2817;
        for (;v1240;) {
          f$$28.x = f$$28.x - b$$202.scrollLeft;
          var v3842 = Nc;
          if (v3842) {
            v3842 = "TR" == b$$202.tagName;
          }
          var v2818 = v3842;
          if (!v2818) {
            f$$28.y = f$$28.y - b$$202.scrollTop;
          }
          var v3844 = b$$202 = Bd(b$$202);
          if (v3844) {
            v3844 = b$$202 != c$$134.body;
          }
          var v2819 = v3844;
          if (v2819) {
            v2819 = b$$202 != g$$19;
          }
          v1240 = v2819;
        }
      }
    }
    return f$$28;
  }
  function Bd(a$$262) {
    var v2820 = N$$1;
    if (v2820) {
      var v4459 = N$$1;
      if (v4459) {
        v4459 = 8 <= Vc;
      }
      v2820 = !v4459;
    }
    if (v2820) {
      return a$$262.offsetParent;
    }
    var b$$201 = cd(a$$262);
    var c$$133 = R$$1(a$$262, "position");
    var v1244 = "fixed" == c$$133;
    if (!v1244) {
      v1244 = "absolute" == c$$133;
    }
    var d$$80 = v1244;
    a$$262 = a$$262.parentNode;
    var v2822 = a$$262;
    if (v2822) {
      v2822 = a$$262 != b$$201;
    }
    var v1246 = v2822;
    for (;v1246;) {
      c$$133 = R$$1(a$$262, "position");
      var v4917 = d$$80;
      if (v4917) {
        v4917 = "static" == c$$133;
      }
      var v4757 = v4917;
      if (v4757) {
        v4757 = a$$262 != b$$201.documentElement;
      }
      var v4460 = v4757;
      if (v4460) {
        v4460 = a$$262 != b$$201.body;
      }
      d$$80 = v4460;
      var v3846 = !d$$80;
      if (v3846) {
        var v4970 = a$$262.scrollWidth > a$$262.clientWidth;
        if (!v4970) {
          v4970 = a$$262.scrollHeight > a$$262.clientHeight;
        }
        var v4919 = v4970;
        if (!v4919) {
          v4919 = "fixed" == c$$133;
        }
        var v4759 = v4919;
        if (!v4759) {
          v4759 = "absolute" == c$$133;
        }
        var v4461 = v4759;
        if (!v4461) {
          v4461 = "relative" == c$$133;
        }
        v3846 = v4461;
      }
      if (v3846) {
        return a$$262;
      }
      a$$262 = a$$262.parentNode;
      var v2823 = a$$262;
      if (v2823) {
        v2823 = a$$262 != b$$201;
      }
      v1246 = v2823;
    }
    return null;
  }
  function Ad(a$$261) {
    var b$$200;
    try {
      b$$200 = JAM.call(a$$261.getBoundingClientRect, a$$261, [], JAM.policy.p3);
    } catch (c$$132) {
      return {left:0, top:0, right:0, bottom:0};
    }
    var v2824 = N$$1;
    if (v2824) {
      v2824 = a$$261.ownerDocument.body;
    }
    var v1247 = v2824;
    if (v1247) {
      a$$261 = a$$261.ownerDocument;
      b$$200.left = b$$200.left - (a$$261.documentElement.clientLeft + a$$261.body.clientLeft);
      b$$200.top = b$$200.top - (a$$261.documentElement.clientTop + a$$261.body.clientTop);
    }
    return b$$200;
  }
  function R$$1(a$$259, b$$199) {
    var v2825 = yd(a$$259, b$$199);
    if (!v2825) {
      var v3848;
      if (a$$259.currentStyle) {
        v3848 = a$$259.currentStyle[b$$199];
      } else {
        v3848 = null;
      }
      v2825 = v3848;
    }
    var v1248 = v2825;
    if (!v1248) {
      var v2826 = a$$259.style;
      if (v2826) {
        v2826 = a$$259.style[b$$199];
      }
      v1248 = v2826;
    }
    return v1248;
  }
  function yd(a$$258, b$$198) {
    var c$$131 = cd(a$$258);
    var v1249;
    var v4466 = c$$131.defaultView;
    if (v4466) {
      v4466 = c$$131.defaultView.getComputedStyle;
    }
    var v3851 = v4466;
    if (v3851) {
      var v4467 = c$$131.defaultView;
      v3851 = c$$131 = JAM.call(v4467.getComputedStyle, v4467, [a$$258, null], JAM.policy.p3);
    }
    if (v3851) {
      var v3852 = c$$131[b$$198];
      if (!v3852) {
        v3852 = JAM.call(c$$131.getPropertyValue, c$$131, [b$$198], JAM.policy.p3);
      }
      var v2828 = v3852;
      if (!v2828) {
        v2828 = "";
      }
      v1249 = v2828;
    } else {
      v1249 = "";
    }
    return v1249;
  }
  function wd(a$$256, b$$196, c$$129) {
    var JSCompiler_inline_result$$36;
    JSCompiler_inline_label_xd_154: {
      var a$$inline_150 = a$$256;
      var b$$inline_151 = c$$129;
      var c$$inline_152 = db$$1(b$$inline_151);
      if (void 0 === a$$inline_150.style[c$$inline_152]) {
        var v2832;
        if (Pc) {
          v2832 = "Webkit";
        } else {
          var v3855;
          if (Oc) {
            v3855 = "Moz";
          } else {
            var v4469;
            if (N$$1) {
              v4469 = "ms";
            } else {
              var v4766;
              if (Nc) {
                v4766 = "O";
              } else {
                v4766 = null;
              }
              v4469 = v4766;
            }
            v3855 = v4469;
          }
          v2832 = v3855;
        }
        var d$$inline_153 = v2832 + eb$$1(b$$inline_151);
        if (void 0 !== a$$inline_150.style[d$$inline_153]) {
          JSCompiler_inline_result$$36 = d$$inline_153;
          break JSCompiler_inline_label_xd_154;
        }
      }
      JSCompiler_inline_result$$36 = c$$inline_152;
    }
    var v1254 = c$$129 = JSCompiler_inline_result$$36;
    if (v1254) {
      var v2835 = a$$256.style;
      introspect(JAM.policy.p2) {
        v2835[c$$129] = b$$196;
      }
    }
    return;
  }
  function Q$$1(a$$255, b$$195, c$$128) {
    var v1255;
    if (p$$1(b$$195)) {
      v1255 = wd(a$$255, c$$128, b$$195);
    } else {
      v1255 = Dc(b$$195, ga$$1(wd, a$$255));
    }
    v1255;
    return;
  }
  function P$$1(a$$250, b$$191, c$$125, d$$77) {
    this.top = a$$250;
    this.right = b$$191;
    this.bottom = c$$125;
    this.left = d$$77;
    return;
  }
  function O$$1(a$$247) {
    var v2838 = a$$247;
    if (!v2838) {
      v2838 = m$$3.document;
    }
    var v1256 = v2838;
    if (!v1256) {
      v1256 = document;
    }
    this.V = v1256;
    return;
  }
  function md(a$$246) {
    var v2840 = a$$246;
    if (v2840) {
      v2840 = "number" == typeof a$$246.length;
    }
    if (v2840) {
      if (da$$1(a$$246)) {
        var v1257 = "function" == typeof a$$246.item;
        if (!v1257) {
          v1257 = "string" == typeof a$$246.item;
        }
        return v1257;
      }
      if ("function" == ba$$1(a$$246)) {
        return "function" == typeof a$$246.item;
      }
    }
    return !1;
  }
  function ud(a$$245, b$$190, c$$124) {
    if (!(a$$245.nodeName in sd)) {
      if (3 == a$$245.nodeType) {
        var v1262;
        if (c$$124) {
          var v3862 = String(a$$245.nodeValue);
          v1262 = JAM.call(b$$190.push, b$$190, [JAM.call(v3862.replace, v3862, [/(\r\n|\r|\n)/g, ""], JAM.policy.p3)], JAM.policy.p3);
        } else {
          v1262 = JAM.call(b$$190.push, b$$190, [a$$245.nodeValue], JAM.policy.p3);
        }
        v1262;
      } else {
        if (a$$245.nodeName in td) {
          JAM.call(b$$190.push, b$$190, [td[a$$245.nodeName]], JAM.policy.p3);
        } else {
          a$$245 = a$$245.firstChild;
          for (;a$$245;) {
            ud(a$$245, b$$190, c$$124);
            a$$245 = a$$245.nextSibling;
          }
        }
      }
    }
    return;
  }
  function cd(a$$243) {
    var v1267;
    if (9 == a$$243.nodeType) {
      v1267 = a$$243;
    } else {
      var v2852 = a$$243.ownerDocument;
      if (!v2852) {
        v2852 = a$$243.document;
      }
      v1267 = v2852;
    }
    return v1267;
  }
  function rd(a$$242, b$$188) {
    var v2854 = a$$242.contains;
    if (v2854) {
      v2854 = 1 == b$$188.nodeType;
    }
    if (v2854) {
      var v1268 = a$$242 == b$$188;
      if (!v1268) {
        v1268 = JAM.call(a$$242.contains, a$$242, [b$$188], JAM.policy.p3);
      }
      return v1268;
    }
    if ("undefined" != typeof a$$242.compareDocumentPosition) {
      var v1270 = a$$242 == b$$188;
      if (!v1270) {
        v1270 = Boolean(JAM.call(a$$242.compareDocumentPosition, a$$242, [b$$188], JAM.policy.p3) & 16);
      }
      return v1270;
    }
    var v2859 = b$$188;
    if (v2859) {
      v2859 = a$$242 != b$$188;
    }
    var v1272 = v2859;
    for (;v1272;) {
      b$$188 = b$$188.parentNode;
      var v2860 = b$$188;
      if (v2860) {
        v2860 = a$$242 != b$$188;
      }
      v1272 = v2860;
    }
    return b$$188 == a$$242;
  }
  function qd(a$$241) {
    var v1273;
    var v3868 = a$$241;
    if (v3868) {
      v3868 = a$$241.parentNode;
    }
    if (v3868) {
      var v2861 = a$$241.parentNode;
      v1273 = JAM.call(v2861.removeChild, v2861, [a$$241], JAM.policy.p3);
    } else {
      v1273 = null;
    }
    return v1273;
  }
  function pd(a$$240, b$$187) {
    ld(cd(a$$240), a$$240, arguments, 1);
    return;
  }
  function od(a$$239, b$$186) {
    JAM.call(a$$239.appendChild, a$$239, [b$$186], JAM.policy.p3);
    return;
  }
  function nd(a$$238) {
    if (1 != a$$238.nodeType) {
      return !1;
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
        return !1;
    }
    return !0;
  }
  function ld(a$$237, b$$185, c$$122, d$$76) {
    function e$$50(c$$123) {
      if (c$$123) {
        var v3869;
        if (p$$1(c$$123)) {
          v3869 = JAM.call(a$$237.createTextNode, a$$237, [c$$123], JAM.policy.p3);
        } else {
          v3869 = c$$123;
        }
        JAM.call(b$$185.appendChild, b$$185, [v3869], JAM.policy.p3);
      }
      return;
    }
    var v1278 = d$$76 < c$$122.length;
    for (;v1278;) {
      var f$$27 = c$$122[d$$76];
      var v1277;
      var v3870 = !ca$$1(f$$27);
      if (!v3870) {
        var v4474 = da$$1(f$$27);
        if (v4474) {
          v4474 = 0 < f$$27.nodeType;
        }
        v3870 = v4474;
      }
      if (v3870) {
        v1277 = e$$50(f$$27);
      } else {
        var v3871;
        if (md(f$$27)) {
          v3871 = ac(f$$27);
        } else {
          v3871 = f$$27;
        }
        v1277 = JAM.call(Zb, null, [v3871, e$$50], JAM.policy.p3);
      }
      v1277;
      d$$76++;
      v1278 = d$$76 < c$$122.length;
    }
    return;
  }
  function kd(a$$235, b$$183, c$$120) {
    var JSCompiler_inline_result$$33;
    var b$$inline_141 = arguments;
    var a$$inline_142 = document;
    var c$$inline_143 = b$$inline_141[0];
    var d$$inline_144 = b$$inline_141[1];
    var v3872 = !Wc;
    if (v3872) {
      v3872 = d$$inline_144;
    }
    var v2869 = v3872;
    if (v2869) {
      var v3873 = d$$inline_144.name;
      if (!v3873) {
        v3873 = d$$inline_144.type;
      }
      v2869 = v3873;
    }
    if (v2869) {
      c$$inline_143 = ["<", c$$inline_143];
      var v1279 = d$$inline_144.name;
      if (v1279) {
        JAM.call(c$$inline_143.push, c$$inline_143, [' name="', Sa$$1(d$$inline_144.name), '"'], JAM.policy.p3);
      }
      if (d$$inline_144.type) {
        JAM.call(c$$inline_143.push, c$$inline_143, [' type="', Sa$$1(d$$inline_144.type), '"'], JAM.policy.p3);
        var e$$inline_145 = {};
        Gc(e$$inline_145, d$$inline_144);
        delete e$$inline_145.type;
        d$$inline_144 = e$$inline_145;
      }
      JAM.call(c$$inline_143.push, c$$inline_143, [">"], JAM.policy.p3);
      c$$inline_143 = JAM.call(c$$inline_143.join, c$$inline_143, [""], JAM.policy.p3);
    }
    c$$inline_143 = JAM.call(a$$inline_142.createElement, a$$inline_142, [c$$inline_143], JAM.policy.p3);
    if (d$$inline_144) {
      var v2872;
      if (p$$1(d$$inline_144)) {
        v2872 = c$$inline_143.className = d$$inline_144;
      } else {
        var v3875;
        if (n$$2(d$$inline_144)) {
          var v4768 = [c$$inline_143];
          v3875 = JAM.call(ad.apply, ad, [null, JAM.call(v4768.concat, v4768, [d$$inline_144], JAM.policy.p3)], JAM.policy.p3);
        } else {
          v3875 = fd(c$$inline_143, d$$inline_144);
        }
        v2872 = v3875;
      }
      v2872;
    }
    var v1283 = 2 < b$$inline_141.length;
    if (v1283) {
      ld(a$$inline_142, c$$inline_143, b$$inline_141, 2);
    }
    JSCompiler_inline_result$$33 = c$$inline_143;
    return JSCompiler_inline_result$$33;
  }
  function fd(a$$231, b$$180) {
    function v47(b$$181, d$$74) {
      var v1284;
      if ("style" == d$$74) {
        v1284 = a$$231.style.cssText = b$$181;
      } else {
        var v2875;
        if ("class" == d$$74) {
          v2875 = a$$231.className = b$$181;
        } else {
          var v3877;
          if ("for" == d$$74) {
            v3877 = a$$231.htmlFor = b$$181;
          } else {
            var v4480;
            if (d$$74 in ed) {
              v4480 = JAM.call(a$$231.setAttribute, a$$231, [ed[d$$74], b$$181], JAM.policy.p3);
            } else {
              var v4770;
              var v4974 = 0 == JAM.call(d$$74.lastIndexOf, d$$74, ["aria-", 0], JAM.policy.p3);
              if (!v4974) {
                v4974 = 0 == JAM.call(d$$74.lastIndexOf, d$$74, ["data-", 0], JAM.policy.p3);
              }
              if (v4974) {
                v4770 = JAM.call(a$$231.setAttribute, a$$231, [d$$74, b$$181], JAM.policy.p3);
              } else {
                introspect(JAM.policy.p2) {
                  v4770 = a$$231[d$$74] = b$$181;
                }
              }
              v4480 = v4770;
            }
            v3877 = v4480;
          }
          v2875 = v3877;
        }
        v1284 = v2875;
      }
      v1284;
      return;
    }
    Dc(b$$180, v47);
    return;
  }
  function dd(a$$230) {
    var v1285;
    if (a$$230) {
      v1285 = new O$$1(cd(a$$230));
    } else {
      var v2878 = Ma$$1;
      if (!v2878) {
        v2878 = Ma$$1 = new O$$1;
      }
      v1285 = v2878;
    }
    return v1285;
  }
  function bd(a$$229) {
    var b$$179 = "adsbygoogle";
    var JSCompiler_inline_result$$493;
    var a$$inline_522 = Zc(a$$229);
    JSCompiler_inline_result$$493 = 0 <= JAM.call(Yb, null, [a$$inline_522, b$$179], JAM.policy.p3);
    return JSCompiler_inline_result$$493;
  }
  function ad(a$$227, b$$177) {
    var c$$118 = Zc(a$$227);
    var d$$73 = bc(arguments, 1);
    var e$$48 = c$$118.length + d$$73.length;
    var a$$inline_134 = c$$118;
    var b$$inline_135 = d$$73;
    var c$$inline_136 = 0;
    var v1290 = c$$inline_136 < b$$inline_135.length;
    for (;v1290;) {
      var v1289 = 0 <= JAM.call(Yb, null, [a$$inline_134, b$$inline_135[c$$inline_136]], JAM.policy.p3);
      if (!v1289) {
        JAM.call(a$$inline_134.push, a$$inline_134, [b$$inline_135[c$$inline_136]], JAM.policy.p3);
      }
      c$$inline_136++;
      v1290 = c$$inline_136 < b$$inline_135.length;
    }
    var b$$inline_139 = JAM.call(c$$118.join, c$$118, [" "], JAM.policy.p3);
    a$$227.className = b$$inline_139;
    return c$$118.length == e$$48;
  }
  function Zc(a$$226) {
    a$$226 = a$$226.className;
    var v2884 = p$$1(a$$226);
    if (v2884) {
      v2884 = JAM.call(a$$226.match, a$$226, [/\S+/g], JAM.policy.p3);
    }
    var v1292 = v2884;
    if (!v1292) {
      v1292 = [];
    }
    return v1292;
  }
  function Uc(a$$223) {
    var JSCompiler_temp$$12;
    if (JSCompiler_temp$$12 = Tc[a$$223]) {
    } else {
      var JSCompiler_inline_result$$13;
      var b$$inline_120 = a$$223;
      var c$$inline_121 = 0;
      var v2886 = String(Sc);
      var v1293 = JAM.call(v2886.replace, v2886, [/^[\s\xa0]+|[\s\xa0]+$/g, ""], JAM.policy.p3);
      var d$$inline_122 = JAM.call(v1293.split, v1293, ["."], JAM.policy.p3);
      var v2887 = String(b$$inline_120);
      var v1294 = JAM.call(v2887.replace, v2887, [/^[\s\xa0]+|[\s\xa0]+$/g, ""], JAM.policy.p3);
      var e$$inline_123 = JAM.call(v1294.split, v1294, ["."], JAM.policy.p3);
      var f$$inline_124 = JAM.call(Math.max, Math, [d$$inline_122.length, e$$inline_123.length], JAM.policy.p3);
      var g$$inline_125 = 0;
      var v2888 = 0 == c$$inline_121;
      if (v2888) {
        v2888 = g$$inline_125 < f$$inline_124;
      }
      var v1306 = v2888;
      for (;v1306;) {
        var v1297 = d$$inline_122[g$$inline_125];
        if (!v1297) {
          v1297 = "";
        }
        var h$$inline_126 = v1297;
        var v1298 = e$$inline_123[g$$inline_125];
        if (!v1298) {
          v1298 = "";
        }
        var k$$inline_127 = v1298;
        var l$$inline_128 = RegExp("(\\d*)(\\D*)", "g");
        var z$$inline_129 = RegExp("(\\d*)(\\D*)", "g");
        var v1305 = 0 == c$$inline_121;
        do {
          var v1299 = JAM.call(l$$inline_128.exec, l$$inline_128, [h$$inline_126], JAM.policy.p3);
          if (!v1299) {
            v1299 = ["", "", ""];
          }
          var C$$inline_130 = v1299;
          var v1300 = JAM.call(z$$inline_129.exec, z$$inline_129, [k$$inline_127], JAM.policy.p3);
          if (!v1300) {
            v1300 = ["", "", ""];
          }
          var I$$inline_131 = v1300;
          var v2893 = 0 == C$$inline_130[0].length;
          if (v2893) {
            v2893 = 0 == I$$inline_131[0].length;
          }
          if (v2893) {
            break;
          }
          var v1302;
          if (0 == C$$inline_130[1].length) {
            v1302 = 0;
          } else {
            v1302 = parseInt(C$$inline_130[1], 10);
          }
          c$$inline_121 = v1302;
          var v1303;
          if (0 == I$$inline_131[1].length) {
            v1303 = 0;
          } else {
            v1303 = parseInt(I$$inline_131[1], 10);
          }
          var xb$$inline_132 = v1303;
          var v2898 = bb$$1(c$$inline_121, xb$$inline_132);
          if (!v2898) {
            v2898 = bb$$1(0 == C$$inline_130[2].length, 0 == I$$inline_131[2].length);
          }
          var v1304 = v2898;
          if (!v1304) {
            v1304 = bb$$1(C$$inline_130[2], I$$inline_131[2]);
          }
          c$$inline_121 = v1304;
          v1305 = 0 == c$$inline_121;
        } while (v1305);
        g$$inline_125++;
        var v2902 = 0 == c$$inline_121;
        if (v2902) {
          v2902 = g$$inline_125 < f$$inline_124;
        }
        v1306 = v2902;
      }
      JSCompiler_inline_result$$13 = c$$inline_121;
      introspect(JAM.policy.p2) {
        JSCompiler_temp$$12 = Tc[a$$223] = 0 <= JSCompiler_inline_result$$13;
      }
    }
    return JSCompiler_temp$$12;
  }
  function Qc() {
    var a$$222 = m$$3.document;
    var v1308;
    if (a$$222) {
      v1308 = a$$222.documentMode;
    } else {
      v1308 = void 0;
    }
    return v1308;
  }
  function Rc() {
    var a$$221 = "";
    var b$$174;
    var v1309;
    var v3888 = Nc;
    if (v3888) {
      v3888 = m$$3.opera;
    }
    if (v3888) {
      a$$221 = m$$3.opera.version;
      var v3890;
      if ("function" == typeof a$$221) {
        v3890 = JAM.call(a$$221, null, [], JAM.policy.p3);
      } else {
        v3890 = a$$221;
      }
      v1309 = a$$221 = v3890;
    } else {
      var v3891;
      if (Oc) {
        v3891 = b$$174 = /rv\:([^\);]+)(\)|;)/;
      } else {
        var v4489;
        if (N$$1) {
          v4489 = b$$174 = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/;
        } else {
          var v4775 = Pc;
          if (v4775) {
            v4775 = b$$174 = /WebKit\/(\S+)/;
          }
          v4489 = v4775;
        }
        v3891 = v4489;
      }
      v3891;
      var v3892 = b$$174;
      if (v3892) {
        var v4490;
        var v4975;
        if (m$$3.navigator) {
          v4975 = m$$3.navigator.userAgent;
        } else {
          v4975 = null;
        }
        if (a$$221 = JAM.call(b$$174.exec, b$$174, [v4975], JAM.policy.p3)) {
          v4490 = a$$221[1];
        } else {
          v4490 = "";
        }
        v3892 = a$$221 = v4490;
      }
      v1309 = v3892;
    }
    v1309;
    var v1310;
    var v3893 = N$$1;
    if (v3893) {
      b$$174 = Qc();
      v3893 = b$$174 > parseFloat(a$$221);
    }
    if (v3893) {
      v1310 = String(b$$174);
    } else {
      v1310 = a$$221;
    }
    return v1310;
  }
  function Mc() {
    Kc = Jc = Ic = Hc = !1;
    var a$$220;
    var v2905;
    if (m$$3.navigator) {
      v2905 = m$$3.navigator.userAgent;
    } else {
      v2905 = null;
    }
    if (a$$220 = v2905) {
      var b$$173 = m$$3.navigator;
      Hc = 0 == JAM.call(a$$220.lastIndexOf, a$$220, ["Opera", 0], JAM.policy.p3);
      var v1312 = !Hc;
      if (v1312) {
        var v2906 = -1 != JAM.call(a$$220.indexOf, a$$220, ["MSIE"], JAM.policy.p3);
        if (!v2906) {
          v2906 = -1 != JAM.call(a$$220.indexOf, a$$220, ["Trident"], JAM.policy.p3);
        }
        v1312 = v2906;
      }
      Ic = v1312;
      var v1313 = !Hc;
      if (v1313) {
        v1313 = -1 != JAM.call(a$$220.indexOf, a$$220, ["WebKit"], JAM.policy.p3);
      }
      Jc = v1313;
      var v3899 = !Hc;
      if (v3899) {
        v3899 = !Jc;
      }
      var v2908 = v3899;
      if (v2908) {
        v2908 = !Ic;
      }
      var v1314 = v2908;
      if (v1314) {
        v1314 = "Gecko" == b$$173.product;
      }
      Kc = v1314;
    }
    return;
  }
  function Gc(a$$219, b$$172) {
    var c$$117;
    var d$$72;
    var e$$47 = 1;
    var v1317 = e$$47 < arguments.length;
    for (;v1317;) {
      d$$72 = arguments[e$$47];
      for (c$$117 in d$$72) {
        introspect(JAM.policy.p2) {
          a$$219[c$$117] = d$$72[c$$117];
        }
      }
      var f$$26 = 0;
      var v1316 = f$$26 < Fc.length;
      for (;v1316;) {
        c$$117 = Fc[f$$26];
        var v3900 = Object.prototype.hasOwnProperty;
        var v2912 = JAM.call(v3900.call, v3900, [d$$72, c$$117], JAM.policy.p3);
        if (v2912) {
          introspect(JAM.policy.p2) {
            a$$219[c$$117] = d$$72[c$$117];
          }
        }
        f$$26++;
        v1316 = f$$26 < Fc.length;
      }
      e$$47++;
      v1317 = e$$47 < arguments.length;
    }
    return;
  }
  function Ec(a$$218, b$$171) {
    var c$$116;
    for (c$$116 in a$$218) {
      if (a$$218[c$$116] == b$$171) {
        return !0;
      }
    }
    return !1;
  }
  function Dc(a$$217, b$$170) {
    var c$$115;
    var d$$71;
    for (d$$71 in a$$217) {
      JAM.call(b$$170.call, b$$170, [c$$115, a$$217[d$$71], d$$71, a$$217], JAM.policy.p3);
    }
    return;
  }
  function M$$1(a$$213, b$$166) {
    var v1320;
    if (void 0 !== a$$213) {
      v1320 = a$$213;
    } else {
      v1320 = 0;
    }
    this.x = v1320;
    var v1321;
    if (void 0 !== b$$166) {
      v1321 = b$$166;
    } else {
      v1321 = 0;
    }
    this.y = v1321;
    return;
  }
  function L$$1(a$$212, b$$165, c$$113) {
    if (!c$$113) {
      var v2918;
      if (Ha$$1) {
        v2918 = "https";
      } else {
        v2918 = "http";
      }
      c$$113 = v2918;
    }
    var v1322 = [c$$113, "://", a$$212, b$$165];
    return JAM.call(v1322.join, v1322, [""], JAM.policy.p3);
  }
  function Bc(a$$211) {
    var v1323 = a$$211.google_page_location;
    if (!v1323) {
      v1323 = a$$211.google_page_url;
    }
    var b$$164 = v1323;
    var v1324 = "EMPTY" == b$$164;
    if (v1324) {
      b$$164 = a$$211.google_page_url;
    }
    var JSCompiler_inline_result$$29;
    var a$$inline_117 = a$$211;
    a$$inline_117 = a$$inline_117.google_ad_channel;
    var v1325;
    if (JAM.call(zc.test, zc, [a$$inline_117], JAM.policy.p3)) {
      v1325 = !0;
    } else {
      v1325 = !1;
    }
    JSCompiler_inline_result$$29 = v1325;
    if (JSCompiler_inline_result$$29) {
      return !0;
    }
    var v2922 = Ga$$1;
    if (!v2922) {
      v2922 = !b$$164;
    }
    if (v2922) {
      return !1;
    }
    b$$164 = JAM.call(b$$164.toString, b$$164, [], JAM.policy.p3);
    var v1327;
    if (0 == JAM.call(b$$164.indexOf, b$$164, ["http://"], JAM.policy.p3)) {
      v1327 = b$$164 = JAM.call(b$$164.substring, b$$164, [7, b$$164.length], JAM.policy.p3);
    } else {
      var v2924 = 0 == JAM.call(b$$164.indexOf, b$$164, ["https://"], JAM.policy.p3);
      if (v2924) {
        v2924 = b$$164 = JAM.call(b$$164.substring, b$$164, [8, b$$164.length], JAM.policy.p3);
      }
      v1327 = v2924;
    }
    v1327;
    a$$211 = JAM.call(b$$164.indexOf, b$$164, ["/"], JAM.policy.p3);
    var v1328 = -1 == a$$211;
    if (v1328) {
      a$$211 = b$$164.length;
    }
    b$$164 = JAM.call(b$$164.substring, b$$164, [0, a$$211], JAM.policy.p3);
    b$$164 = JAM.call(b$$164.split, b$$164, ["."], JAM.policy.p3);
    a$$211 = !1;
    var v1329 = 3 <= b$$164.length;
    if (v1329) {
      a$$211 = b$$164[b$$164.length - 3] in yc;
    }
    var v1330 = 2 <= b$$164.length;
    if (v1330) {
      var v2929 = a$$211;
      if (!v2929) {
        v2929 = b$$164[b$$164.length - 2] in yc;
      }
      a$$211 = v2929;
    }
    return a$$211;
  }
  function xc() {
    var a$$209 = J$$1();
    var v1331;
    if (a$$209) {
      v1331 = JAM.call(a$$209.Ka, a$$209, [], JAM.policy.p3);
    } else {
      v1331 = "";
    }
    return v1331;
  }
  function J$$1() {
    if (uc) {
    } else {
      var a$$inline_112 = H$$1();
      var b$$inline_113 = new E$$1;
      var c$$inline_114 = 0;
      var d$$inline_115 = a$$inline_112.defaultBucket.length;
      var v1335 = c$$inline_114 < d$$inline_115;
      for (;v1335;) {
        var v1333 = b$$inline_113.defaultBucket;
        JAM.call(v1333.push, v1333, [a$$inline_112.defaultBucket[c$$inline_114]], JAM.policy.p3);
        ++c$$inline_114;
        v1335 = c$$inline_114 < d$$inline_115;
      }
      x$$50(a$$inline_112.layers, JAM.call(r$$2, null, [E$$1.prototype.Ga, b$$inline_113], JAM.policy.p3));
      uc = b$$inline_113;
    }
    return uc;
  }
  function H$$1() {
    if (wc()) {
      var a$$208 = tc;
      return a$$208;
    }
    a$$208 = mc();
    var JSCompiler_inline_result$$26;
    var b$$inline_110 = new E$$1(1, 3, 4, 7, 10, 12, 13, 14, 16, 17, 18, 19);
    JSCompiler_inline_result$$26 = oc(a$$208, 3, b$$inline_110);
    return tc = JSCompiler_inline_result$$26;
  }
  function wc() {
    var v2932 = tc;
    if (v2932) {
      v2932 = vc(tc);
    }
    if (v2932) {
      return !0;
    }
    var a$$207 = mc();
    var v1340;
    var v4779 = a$$207 = G$$1(a$$207, 3);
    if (v4779) {
      v4779 = gb$$1(a$$207);
    }
    var v4494 = v4779;
    if (v4494) {
      v4494 = hb$$1(a$$207, E$$1.prototype);
    }
    var v3911 = v4494;
    if (v3911) {
      v3911 = vc(a$$207);
    }
    if (v3911) {
      tc = a$$207;
      v1340 = !0;
    } else {
      v1340 = !1;
    }
    return v1340;
  }
  function vc(a$$206) {
    try {
      return JAM.call(a$$206.statusz, a$$206, [], JAM.policy.p3);
    } catch (b$$163) {
      return !1;
    }
    return;
  }
  function F$$1(a$$202, b$$159, c$$112) {
    a$$202 = a$$202.S;
    b$$159 = nc(b$$159);
    var v1341;
    if (void 0 === a$$202[b$$159]) {
      introspect(JAM.policy.p2) {
        v1341 = a$$202[b$$159] = c$$112;
      }
    } else {
      v1341 = a$$202[b$$159];
    }
    v1341;
    return;
  }
  function oc(a$$201, b$$158, c$$111) {
    var v1342 = a$$201.S;
    var v1343 = nc(b$$158);
    introspect(JAM.policy.p2) {
      return v1342[v1343] = c$$111;
    }
  }
  function G$$1(a$$200, b$$157) {
    var c$$110 = nc(b$$157);
    return c$$110 = a$$200.S[c$$110];
  }
  function nc(a$$199) {
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
    return;
  }
  function mc(a$$197) {
    var v1345;
    var v3914 = a$$197;
    if (v3914) {
      v3914 = kc[a$$197];
    }
    if (v3914) {
      v1345 = a$$197;
    } else {
      var v2935;
      if (B$$2) {
        v2935 = "google_persistent_state_async";
      } else {
        v2935 = "google_persistent_state";
      }
      v1345 = v2935;
    }
    a$$197 = v1345;
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
    var v1348;
    var v3915 = "object" != typeof d$$70;
    if (!v3915) {
      v3915 = "object" != typeof d$$70.S;
    }
    if (v3915) {
      var v5096 = new jc(c$$109);
      introspect(JAM.policy.p2) {
        v1348 = b$$156[a$$197] = lc[a$$197] = v5096;
      }
    } else {
      introspect(JAM.policy.p2) {
        v1348 = lc[a$$197] = d$$70;
      }
    }
    return v1348;
  }
  function jc(a$$196) {
    this.S = a$$196;
    F$$1(this, 3, null);
    F$$1(this, 4, 0);
    F$$1(this, 5, 0);
    F$$1(this, 6, 0);
    var v2938 = new Date;
    F$$1(this, 7, JAM.call(v2938.getTime, v2938, [], JAM.policy.p3));
    F$$1(this, 8, {});
    F$$1(this, 9, {});
    F$$1(this, 10, {});
    F$$1(this, 11, []);
    F$$1(this, 12, 0);
    F$$1(this, 14, {});
    return;
  }
  function hc() {
    if (gc) {
    } else {
      var a$$inline_105 = window;
      a$$inline_105 = dc(a$$inline_105, !0);
      gc = a$$inline_105.win;
    }
    return gc;
  }
  function dc(a$$193, b$$155) {
    var c$$108 = 0;
    var d$$69 = a$$193;
    var e$$46 = 0;
    var v1352 = a$$193 != a$$193.parent;
    for (;v1352;) {
      a$$193 = a$$193.parent;
      e$$46++;
      if (Kb(a$$193)) {
        d$$69 = a$$193;
        c$$108 = e$$46;
      } else {
        if (b$$155) {
          break;
        }
      }
      v1352 = a$$193 != a$$193.parent;
    }
    return {win:d$$69, level:c$$108};
  }
  function E$$1(a$$185) {
    this.defaultBucket = [];
    this.layers = {};
    var b$$148 = 0;
    var c$$105 = arguments.length;
    var v1355 = b$$148 < c$$105;
    for (;v1355;) {
      var v1353 = this.layers;
      var v1354 = arguments[b$$148];
      introspect(JAM.policy.p2) {
        v1353[v1354] = "";
      }
      ++b$$148;
      v1355 = b$$148 < c$$105;
    }
    return;
  }
  function bc(a$$184, b$$147, c$$104) {
    var v1356;
    if (2 >= arguments.length) {
      var v2941 = Xb.slice;
      v1356 = JAM.call(v2941.call, v2941, [a$$184, b$$147], JAM.policy.p3);
    } else {
      var v2942 = Xb.slice;
      v1356 = JAM.call(v2942.call, v2942, [a$$184, b$$147, c$$104], JAM.policy.p3);
    }
    return v1356;
  }
  function ac(a$$183) {
    var b$$146 = a$$183.length;
    if (0 < b$$146) {
      var c$$103 = Array(b$$146);
      var d$$67 = 0;
      var v1357 = d$$67 < b$$146;
      for (;v1357;) {
        c$$103[d$$67] = a$$183[d$$67];
        d$$67++;
        v1357 = d$$67 < b$$146;
      }
      return c$$103;
    }
    return [];
  }
  function Wb() {
    function v48() {
      var v1359 = a$$177.document;
      JAM.call(v1359.close, v1359, [], JAM.policy.p3);
      return;
    }
    var a$$177 = window;
    var v3917 = B$$2;
    if (v3917) {
      v3917 = a$$177 != a$$177.parent;
    }
    var v2944 = v3917;
    if (v2944) {
      v2944 = a$$177.google_async_iframe_close;
    }
    var v1360 = v2944;
    if (v1360) {
      JAM.call(a$$177.setTimeout, a$$177, [v48, 0], JAM.policy.p3);
    }
    return;
  }
  function D$$1() {
    var v2945 = B$$2;
    if (v2945) {
      v2945 = !Kb(Ob);
    }
    if (v2945) {
      var a$$170 = "." + v$$1.domain;
      var v2946 = 2 < JAM.call(a$$170.split, a$$170, ["."], JAM.policy.p3).length;
      if (v2946) {
        v2946 = !Kb(Ob);
      }
      var v1362 = v2946;
      for (;v1362;) {
        v$$1.domain = a$$170 = JAM.call(a$$170.substr, a$$170, [JAM.call(a$$170.indexOf, a$$170, ["."], JAM.policy.p3) + 1], JAM.policy.p3);
        Ob = window.parent;
        var v2948 = 2 < JAM.call(a$$170.split, a$$170, ["."], JAM.policy.p3).length;
        if (v2948) {
          v2948 = !Kb(Ob);
        }
        v1362 = v2948;
      }
      var v1363 = Kb(Ob);
      if (!v1363) {
        Ob = window;
      }
    }
    return Ob;
  }
  function Mb(a$$168) {
    function v49() {
      if (a$$168) {
        var b$$133 = a$$168;
        a$$168 = null;
        JAM.call(b$$133.apply, b$$133, [null, arguments], JAM.policy.p3);
      }
      return;
    }
    return v49;
  }
  function Lb(a$$167) {
    return "google_ads_frame" + a$$167;
  }
  function Kb(a$$166) {
    try {
      var v1365 = !!a$$166.location.href;
      if (!v1365) {
        v1365 = "" === a$$166.location.href;
      }
      return v1365;
    } catch (b$$132) {
      return !1;
    }
    return;
  }
  function Hb(a$$163) {
    var v2953 = new Date;
    a$$163 = JAM.call(v2953.getTime, v2953, [], JAM.policy.p3) - a$$163;
    var v1367;
    if (1E4 > a$$163) {
      v1367 = a$$163 + "";
    } else {
      v1367 = "M";
    }
    return v1367;
  }
  function Fb(a$$162, b$$130, c$$90) {
    b$$130 = [b$$130.google_ad_slot, b$$130.google_ad_format, b$$130.google_ad_type, b$$130.google_ad_width, b$$130.google_ad_height];
    if (c$$90) {
      var JSCompiler_inline_result$$15;
      var a$$inline_101 = a$$162;
      var b$$inline_102 = [];
      var c$$inline_103 = 0;
      var v2955 = a$$inline_101;
      if (v2955) {
        v2955 = 25 > c$$inline_103;
      }
      var v1374 = v2955;
      for (;v1374;) {
        var v3926 = 9 != a$$inline_101.nodeType;
        if (v3926) {
          v3926 = a$$inline_101.id;
        }
        var v2956 = v3926;
        if (!v2956) {
          v2956 = "";
        }
        JAM.call(b$$inline_102.push, b$$inline_102, [v2956], JAM.policy.p3);
        a$$inline_101 = a$$inline_101.parentNode;
        ++c$$inline_103;
        var v2957 = a$$inline_101;
        if (v2957) {
          v2957 = 25 > c$$inline_103;
        }
        v1374 = v2957;
      }
      JSCompiler_inline_result$$15 = JAM.call(b$$inline_102.join, b$$inline_102, [], JAM.policy.p3);
      var v1375 = a$$162 = JSCompiler_inline_result$$15;
      if (v1375) {
        JAM.call(b$$130.push, b$$130, [a$$162], JAM.policy.p3);
      }
    } else {
      JAM.call(b$$130.push, b$$130, [Db(a$$162)], JAM.policy.p3);
      JAM.call(b$$130.push, b$$130, [Eb(w$$6)], JAM.policy.p3);
    }
    var v1376 = Ab(JAM.call(b$$130.join, b$$130, [":"], JAM.policy.p3));
    return JAM.call(v1376.toString, v1376, [], JAM.policy.p3);
  }
  function Eb(a$$160) {
    var b$$128 = [];
    if (a$$160) {
      try {
        var c$$88 = a$$160.parent;
        var d$$59 = 0;
        var v3928 = c$$88;
        if (v3928) {
          v3928 = c$$88 != a$$160;
        }
        var v2961 = v3928;
        if (v2961) {
          v2961 = 25 > d$$59;
        }
        var v1379 = v2961;
        for (;v1379;) {
          var e$$42 = c$$88.frames;
          var f$$23 = 0;
          var v1378 = f$$23 < e$$42.length;
          for (;v1378;) {
            if (a$$160 == e$$42[f$$23]) {
              JAM.call(b$$128.push, b$$128, [f$$23], JAM.policy.p3);
              break;
            }
            ++f$$23;
            v1378 = f$$23 < e$$42.length;
          }
          a$$160 = c$$88;
          c$$88 = a$$160.parent;
          ++d$$59;
          var v3929 = c$$88;
          if (v3929) {
            v3929 = c$$88 != a$$160;
          }
          var v2965 = v3929;
          if (v2965) {
            v2965 = 25 > d$$59;
          }
          v1379 = v2965;
        }
      } catch (g$$18) {
      }
    }
    return JAM.call(b$$128.join, b$$128, [], JAM.policy.p3);
  }
  function Db(a$$159) {
    var b$$127 = [];
    var c$$87 = 0;
    var v2966 = a$$159;
    if (v2966) {
      v2966 = 25 > c$$87;
    }
    var v1384 = v2966;
    for (;v1384;) {
      var v1380 = 9 != a$$159.nodeType;
      if (v1380) {
        v1380 = a$$159.id;
      }
      var d$$58 = v1380;
      var v1381;
      if (d$$58) {
        v1381 = "/" + d$$58;
      } else {
        v1381 = "";
      }
      d$$58 = v1381;
      var v1382 = a$$159.nodeName;
      if (v1382) {
        var v2968 = a$$159.nodeName;
        v1382 = JAM.call(v2968.toLowerCase, v2968, [], JAM.policy.p3);
      }
      var e$$41 = v1382;
      JAM.call(b$$127.push, b$$127, [e$$41 + d$$58 + Cb(a$$159)], JAM.policy.p3);
      a$$159 = a$$159.parentElement;
      ++c$$87;
      var v2971 = a$$159;
      if (v2971) {
        v2971 = 25 > c$$87;
      }
      v1384 = v2971;
    }
    return JAM.call(b$$127.join, b$$127, [], JAM.policy.p3);
  }
  function Cb(a$$158) {
    var b$$126 = a$$158.parentElement;
    var v1385 = a$$158.nodeName;
    var c$$86 = JAM.call(v1385.toLowerCase, v1385, [], JAM.policy.p3);
    if (b$$126) {
      b$$126 = b$$126.childNodes;
      var d$$57 = 0;
      var e$$40 = 0;
      var v1388 = e$$40 < b$$126.length;
      for (;v1388;) {
        var f$$22 = b$$126[e$$40];
        var v2973 = f$$22.nodeName;
        if (v2973) {
          var v4504 = f$$22.nodeName;
          v2973 = JAM.call(v4504.toLowerCase, v4504, [], JAM.policy.p3) == c$$86;
        }
        if (v2973) {
          if (a$$158 == f$$22) {
            return "." + d$$57;
          }
          ++d$$57;
        }
        ++e$$40;
        v1388 = e$$40 < b$$126.length;
      }
    }
    return "";
  }
  function Ab(a$$156) {
    var b$$124;
    var c$$84 = a$$156.length;
    if (0 == c$$84) {
      return 0;
    }
    var d$$56 = b$$124 || 305419896;
    var e$$39 = 0;
    var v1391 = e$$39 < c$$84;
    for (;v1391;) {
      var f$$21 = JAM.call(a$$156.charCodeAt, a$$156, [e$$39], JAM.policy.p3);
      d$$56 = d$$56 ^ (d$$56 << 5) + (d$$56 >> 2) + f$$21 & 4294967295;
      e$$39++;
      v1391 = e$$39 < c$$84;
    }
    var v1392;
    if (0 < d$$56) {
      v1392 = d$$56;
    } else {
      v1392 = 4294967296 + d$$56;
    }
    return v1392;
  }
  function yb(a$$154) {
    var b$$123 = "google_unique_id";
    a$$154 = a$$154[b$$123];
    var v1393;
    if ("number" == typeof a$$154) {
      v1393 = a$$154;
    } else {
      v1393 = 0;
    }
    return v1393;
  }
  function wb(a$$153) {
    var b$$122 = "google_unique_id";
    var v1394;
    if (a$$153[b$$122]) {
      var v3933 = a$$153[b$$122];
      introspect(JAM.policy.p2) {
        v1394 = a$$153[b$$122] = v3933 + 1;
      }
    } else {
      introspect(JAM.policy.p2) {
        v1394 = a$$153[b$$122] = 1;
      }
    }
    v1394;
    return;
  }
  function vb(a$$152, b$$121) {
    if (!(1E-4 > JAM.call(Math.random, Math, [], JAM.policy.p3))) {
      var c$$83 = JAM.call(Math.random, Math, [], JAM.policy.p3);
      if (c$$83 < b$$121) {
        try {
          var d$$55 = new Uint16Array(1);
          var v1395 = window.crypto;
          JAM.call(v1395.getRandomValues, v1395, [d$$55], JAM.policy.p3);
          c$$83 = d$$55[0] / 65536;
        } catch (e$$38) {
          c$$83 = JAM.call(Math.random, Math, [], JAM.policy.p3);
        }
        c$$83 = JAM.call(Math.floor, Math, [c$$83 * a$$152.length], JAM.policy.p3);
        return a$$152[c$$83];
      }
    }
    return null;
  }
  function ob$$1() {
    var a$$151;
    a$$151 = a$$151 || window;
    try {
      return a$$151.history.length;
    } catch (b$$120) {
      return 0;
    }
    return;
  }
  function nb$$1(a$$150, b$$119) {
    var v1401 = a$$150.google_image_requests;
    if (!v1401) {
      a$$150.google_image_requests = [];
    }
    var v1402 = a$$150.document;
    var c$$82 = JAM.call(v1402.createElement, v1402, ["img"], JAM.policy.p3);
    c$$82.src = b$$119;
    var v1403 = a$$150.google_image_requests;
    JAM.call(v1403.push, v1403, [c$$82], JAM.policy.p3);
    return;
  }
  function mb$$1(a$$149) {
    function v50() {
      a$$149.google_onload_fired = !0;
      return;
    }
    var v1404 = "google_onload_fired" in a$$149;
    if (!v1404) {
      a$$149.google_onload_fired = !1;
      kb$$1(a$$149, v50);
    }
    return;
  }
  function A$$1(a$$148, b$$118, c$$81) {
    var d$$54;
    var v1405;
    if (a$$148.removeEventListener) {
      var v4507 = d$$54;
      if (!v4507) {
        v4507 = !1;
      }
      JAM.call(a$$148.removeEventListener, a$$148, [b$$118, c$$81, v4507], JAM.policy.p3);
      v1405 = !0;
    } else {
      var v2983;
      if (a$$148.detachEvent) {
        JAM.call(a$$148.detachEvent, a$$148, ["on" + b$$118, c$$81], JAM.policy.p3);
        v2983 = !0;
      } else {
        v2983 = !1;
      }
      v1405 = v2983;
    }
    v1405;
    return;
  }
  function lb$$1(a$$147, b$$117, c$$80, d$$53) {
    var e$$37;
    c$$80 = JAM.call(r$$2, null, [d$$53, c$$80], JAM.policy.p3);
    var v1406;
    if (y$$31(a$$147, b$$117, c$$80, e$$37)) {
      v1406 = c$$80;
    } else {
      v1406 = null;
    }
    return v1406;
  }
  function y$$31(a$$146, b$$116, c$$79, d$$52) {
    var v1407;
    if (a$$146.addEventListener) {
      var v4509 = d$$52;
      if (!v4509) {
        v4509 = !1;
      }
      JAM.call(a$$146.addEventListener, a$$146, [b$$116, c$$79, v4509], JAM.policy.p3);
      v1407 = !0;
    } else {
      var v2986;
      if (a$$146.attachEvent) {
        JAM.call(a$$146.attachEvent, a$$146, ["on" + b$$116, c$$79], JAM.policy.p3);
        v2986 = !0;
      } else {
        v2986 = !1;
      }
      v1407 = v2986;
    }
    return v1407;
  }
  function ib$$1(a$$145, b$$115) {
    if (2 > arguments.length) {
      return;
    }
    var c$$78 = 1;
    var d$$51 = arguments.length;
    var v1410 = c$$78 < d$$51;
    for (;v1410;) {
      JAM.call(a$$145.push, a$$145, [arguments[c$$78]], JAM.policy.p3);
      ++c$$78;
      v1410 = c$$78 < d$$51;
    }
    return;
  }
  function hb$$1(a$$144, b$$113) {
    function v51(b$$114, e$$36) {
      var v3939 = c$$77;
      if (v3939) {
        v3939 = e$$36 in a$$144;
      }
      var v2989 = v3939;
      if (v2989) {
        v2989 = typeof b$$114 == typeof a$$144[e$$36];
      }
      var v1411 = v2989;
      if (!v1411) {
        c$$77 = !1;
      }
      return;
    }
    if (!a$$144) {
      return !1;
    }
    var c$$77 = !0;
    x$$50(b$$113, v51);
    return c$$77;
  }
  function gb$$1(a$$143) {
    var v1413 = !!a$$143;
    if (v1413) {
      var v2992 = "object" == typeof a$$143;
      if (!v2992) {
        v2992 = "function" == typeof a$$143;
      }
      v1413 = v2992;
    }
    return v1413;
  }
  function fb$$1(a$$142) {
    var v2993 = !!a$$142;
    if (v2993) {
      v2993 = "function" == typeof a$$142;
    }
    var v1414 = v2993;
    if (v1414) {
      v1414 = !!a$$142.call;
    }
    return v1414;
  }
  function x$$50(a$$141, b$$112) {
    var c$$76;
    for (c$$76 in a$$141) {
      var v2995 = Object.prototype.hasOwnProperty;
      var v1415 = JAM.call(v2995.call, v2995, [a$$141, c$$76], JAM.policy.p3);
      if (v1415) {
        JAM.call(b$$112.call, b$$112, [null, a$$141[c$$76], c$$76, a$$141], JAM.policy.p3);
      }
    }
    return;
  }
  function u$$2(a$$139, b$$110) {
    this.width = a$$139;
    this.height = b$$110;
    return;
  }
  function eb$$1(a$$137) {
    function v52(a$$138, b$$109, c$$74) {
      return b$$109 + JAM.call(c$$74.toUpperCase, c$$74, [], JAM.policy.p3);
    }
    var b$$108;
    var v1417;
    if (p$$1(b$$108)) {
      var v3949 = String(b$$108);
      var v2997 = JAM.call(v3949.replace, v3949, [/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1"], JAM.policy.p3);
      v1417 = JAM.call(v2997.replace, v2997, [/\x08/g, "\\x08"], JAM.policy.p3);
    } else {
      v1417 = "\\s";
    }
    var c$$73 = v1417;
    var v1418;
    if (c$$73) {
      v1418 = "|[" + c$$73 + "]+";
    } else {
      v1418 = "";
    }
    c$$73 = v1418;
    c$$73 = RegExp("(^" + c$$73 + ")([a-z])", "g");
    return JAM.call(a$$137.replace, a$$137, [c$$73, v52], JAM.policy.p3);
  }
  function db$$1(a$$135) {
    function v53(a$$136, c$$72) {
      return JAM.call(c$$72.toUpperCase, c$$72, [], JAM.policy.p3);
    }
    var v1420 = String(a$$135);
    return JAM.call(v1420.replace, v1420, [/\-([a-z])/g, v53], JAM.policy.p3);
  }
  function bb$$1(a$$134, b$$107) {
    var v1421;
    if (a$$134 < b$$107) {
      v1421 = -1;
    } else {
      var v3001;
      if (a$$134 > b$$107) {
        v3001 = 1;
      } else {
        v3001 = 0;
      }
      v1421 = v3001;
    }
    return v1421;
  }
  function ab$$1(a$$131) {
    a$$131 = String(a$$131);
    if (a$$131.quote) {
      return JAM.call(a$$131.quote, a$$131, [], JAM.policy.p3);
    }
    var b$$104 = ['"'];
    var c$$69 = 0;
    var v1430 = c$$69 < a$$131.length;
    for (;v1430;) {
      var d$$49 = JAM.call(a$$131.charAt, a$$131, [c$$69], JAM.policy.p3);
      var e$$34 = JAM.call(d$$49.charCodeAt, d$$49, [0], JAM.policy.p3);
      var JSCompiler_temp_const$$9 = c$$69 + 1;
      var JSCompiler_temp$$10;
      if (JSCompiler_temp$$10 = Ya$$1[d$$49]) {
      } else {
        var JSCompiler_temp$$11;
        var v3004 = 31 < e$$34;
        if (v3004) {
          v3004 = 127 > e$$34;
        }
        if (v3004) {
          JSCompiler_temp$$11 = d$$49;
        } else {
          JSCompiler_inline_label_$a$$1_100: {
            var a$$inline_97 = d$$49;
            if (a$$inline_97 in Za$$1) {
              JSCompiler_temp$$11 = Za$$1[a$$inline_97];
              break JSCompiler_inline_label_$a$$1_100;
            }
            if (a$$inline_97 in Ya$$1) {
              introspect(JAM.policy.p2) {
                JSCompiler_temp$$11 = Za$$1[a$$inline_97] = Ya$$1[a$$inline_97];
              }
              break JSCompiler_inline_label_$a$$1_100;
            }
            var b$$inline_98 = a$$inline_97;
            var c$$inline_99 = JAM.call(a$$inline_97.charCodeAt, a$$inline_97, [0], JAM.policy.p3);
            var v3005 = 31 < c$$inline_99;
            if (v3005) {
              v3005 = 127 > c$$inline_99;
            }
            if (v3005) {
              b$$inline_98 = a$$inline_97;
            } else {
              if (256 > c$$inline_99) {
                b$$inline_98 = "\\x";
                var v3951 = 16 > c$$inline_99;
                if (!v3951) {
                  v3951 = 256 < c$$inline_99;
                }
                if (v3951) {
                  b$$inline_98 = b$$inline_98 + "0";
                }
              } else {
                b$$inline_98 = "\\u";
                var v3006 = 4096 > c$$inline_99;
                if (v3006) {
                  b$$inline_98 = b$$inline_98 + "0";
                }
              }
              var v3952 = JAM.call(c$$inline_99.toString, c$$inline_99, [16], JAM.policy.p3);
              b$$inline_98 = b$$inline_98 + JAM.call(v3952.toUpperCase, v3952, [], JAM.policy.p3);
            }
            introspect(JAM.policy.p2) {
              JSCompiler_temp$$11 = Za$$1[a$$inline_97] = b$$inline_98;
            }
          }
        }
        JSCompiler_temp$$10 = JSCompiler_temp$$11;
      }
      b$$104[JSCompiler_temp_const$$9] = JSCompiler_temp$$10;
      c$$69++;
      v1430 = c$$69 < a$$131.length;
    }
    JAM.call(b$$104.push, b$$104, ['"'], JAM.policy.p3);
    return JAM.call(b$$104.join, b$$104, [""], JAM.policy.p3);
  }
  function Ua$$1(a$$128) {
    function v54(a$$129, c$$67) {
      switch(c$$67) {
        case "amp":
          return "&";
        case "lt":
          return "<";
        case "gt":
          return ">";
        case "quot":
          return '"';
        default:
          if ("#" == JAM.call(c$$67.charAt, c$$67, [0], JAM.policy.p3)) {
            var d$$47 = Number("0" + JAM.call(c$$67.substr, c$$67, [1], JAM.policy.p3));
            if (!isNaN(d$$47)) {
              return JAM.call(String.fromCharCode, String, [d$$47], JAM.policy.p3);
            }
          }
          return a$$129;
      }
      return;
    }
    return JAM.call(a$$128.replace, a$$128, [/&([^;]+);/g, v54], JAM.policy.p3);
  }
  function Ta$$1(a$$126) {
    function v55(a$$127, b$$102) {
      var g$$16 = c$$66[a$$127];
      if (g$$16) {
        return g$$16;
      }
      if ("#" == JAM.call(b$$102.charAt, b$$102, [0], JAM.policy.p3)) {
        var h$$12 = Number("0" + JAM.call(b$$102.substr, b$$102, [1], JAM.policy.p3));
        var v1435 = isNaN(h$$12);
        if (!v1435) {
          g$$16 = JAM.call(String.fromCharCode, String, [h$$12], JAM.policy.p3);
        }
      }
      if (!g$$16) {
        JAM.set(d$$46, "innerHTML", a$$127 + " ");
        var v3953 = d$$46.firstChild.nodeValue;
        g$$16 = JAM.call(v3953.slice, v3953, [0, -1], JAM.policy.p3);
      }
      introspect(JAM.policy.p2) {
        return c$$66[a$$127] = g$$16;
      }
    }
    var b$$101;
    var c$$66 = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'};
    var d$$46;
    var v1437;
    if (b$$101) {
      v1437 = JAM.call(b$$101.createElement, b$$101, ["div"], JAM.policy.p3);
    } else {
      v1437 = JAM.call(document.createElement, document, ["div"], JAM.policy.p3);
    }
    d$$46 = v1437;
    return JAM.call(a$$126.replace, a$$126, [Wa$$1, v55], JAM.policy.p3);
  }
  function Va$$1(a$$125) {
    var v1438;
    if (-1 != JAM.call(a$$125.indexOf, a$$125, ["&"], JAM.policy.p3)) {
      var v3016;
      if ("document" in m$$3) {
        v3016 = Ta$$1(a$$125);
      } else {
        v3016 = Ua$$1(a$$125);
      }
      v1438 = v3016;
    } else {
      v1438 = a$$125;
    }
    return v1438;
  }
  function Sa$$1(a$$124) {
    var b$$100;
    if (b$$100) {
      var v3956 = JAM.call(a$$124.replace, a$$124, [Na$$1, "&amp;"], JAM.policy.p3);
      var v3018 = JAM.call(v3956.replace, v3956, [Oa$$1, "&lt;"], JAM.policy.p3);
      var v1439 = JAM.call(v3018.replace, v3018, [Pa$$1, "&gt;"], JAM.policy.p3);
      return JAM.call(v1439.replace, v1439, [Qa$$1, "&quot;"], JAM.policy.p3);
    }
    if (!JAM.call(Ra$$1.test, Ra$$1, [a$$124], JAM.policy.p3)) {
      return a$$124;
    }
    var v1441 = -1 != JAM.call(a$$124.indexOf, a$$124, ["&"], JAM.policy.p3);
    if (v1441) {
      a$$124 = JAM.call(a$$124.replace, a$$124, [Na$$1, "&amp;"], JAM.policy.p3);
    }
    var v1442 = -1 != JAM.call(a$$124.indexOf, a$$124, ["<"], JAM.policy.p3);
    if (v1442) {
      a$$124 = JAM.call(a$$124.replace, a$$124, [Oa$$1, "&lt;"], JAM.policy.p3);
    }
    var v1443 = -1 != JAM.call(a$$124.indexOf, a$$124, [">"], JAM.policy.p3);
    if (v1443) {
      a$$124 = JAM.call(a$$124.replace, a$$124, [Pa$$1, "&gt;"], JAM.policy.p3);
    }
    var v1444 = -1 != JAM.call(a$$124.indexOf, a$$124, ['"'], JAM.policy.p3);
    if (v1444) {
      a$$124 = JAM.call(a$$124.replace, a$$124, [Qa$$1, "&quot;"], JAM.policy.p3);
    }
    return a$$124;
  }
  function La$$1(a$$123) {
    var v1445;
    if (a$$123) {
      v1445 = "googlesyndication";
    } else {
      v1445 = ma$$1("googlesyndication");
    }
    return v1445;
  }
  function Da$$1() {
    var a$$122 = "r20131120";
    return a$$122;
  }
  function ma$$1(b$$99) {
    var a$$121 = "";
    if (!a$$121) {
      return b$$99;
    }
    var c$$65 = JAM.call(a$$121.match, a$$121, [la$$1], JAM.policy.p3);
    var v1447;
    if (c$$65) {
      v1447 = c$$65[0];
    } else {
      v1447 = b$$99;
    }
    return v1447;
  }
  function ka$$1(a$$120) {
    var b$$98 = !1;
    var v1448;
    if (JAM.call(/^true$/.test, /^true$/, [a$$120], JAM.policy.p3)) {
      v1448 = !0;
    } else {
      var v3024;
      if (JAM.call(/^false$/.test, /^false$/, [a$$120], JAM.policy.p3)) {
        v3024 = !1;
      } else {
        v3024 = b$$98;
      }
      v1448 = v3024;
    }
    return v1448;
  }
  function t$$1(a$$119) {
    var b$$97 = 0;
    var c$$64 = parseFloat(a$$119);
    var v1449;
    var v4514 = isNaN(c$$64);
    if (!v4514) {
      v4514 = 1 < c$$64;
    }
    var v3958 = v4514;
    if (!v3958) {
      v3958 = 0 > c$$64;
    }
    if (v3958) {
      v1449 = b$$97;
    } else {
      v1449 = c$$64;
    }
    return v1449;
  }
  function ja$$1(a$$118, b$$96) {
    function c$$63() {
      return;
    }
    c$$63.prototype = b$$96.prototype;
    a$$118.md = b$$96.prototype;
    var v1450 = a$$118;
    var v5097 = new c$$63;
    v1450.prototype = v5097;
    a$$118.prototype.constructor = a$$118;
    return;
  }
  function s$$3(a$$116, b$$94) {
    var c$$61;
    var a$$inline_92 = a$$116;
    var b$$inline_93 = b$$94;
    var c$$inline_94 = c$$61;
    a$$inline_92 = JAM.call(a$$inline_92.split, a$$inline_92, ["."], JAM.policy.p3);
    c$$inline_94 = c$$inline_94 || m$$3;
    var v3027 = a$$inline_92[0] in c$$inline_94;
    if (!v3027) {
      v3027 = !c$$inline_94.execScript;
    }
    var v1452 = v3027;
    if (!v1452) {
      JAM.call(c$$inline_94.execScript, c$$inline_94, ["var " + a$$inline_92[0]], JAM.policy.p3);
    }
    var d$$inline_95;
    var v3030 = a$$inline_92.length;
    if (v3030) {
      v3030 = d$$inline_95 = JAM.call(a$$inline_92.shift, a$$inline_92, [], JAM.policy.p3);
    }
    var v1454 = v3030;
    for (;v1454;) {
      var v1453;
      var v3963 = a$$inline_92.length;
      if (!v3963) {
        v3963 = void 0 === b$$inline_93;
      }
      if (v3963) {
        var v3031;
        if (c$$inline_94[d$$inline_95]) {
          v3031 = c$$inline_94[d$$inline_95];
        } else {
          introspect(JAM.policy.p2) {
            v3031 = c$$inline_94[d$$inline_95] = {};
          }
        }
        v1453 = c$$inline_94 = v3031;
      } else {
        introspect(JAM.policy.p2) {
          v1453 = c$$inline_94[d$$inline_95] = b$$inline_93;
        }
      }
      v1453;
      var v3033 = a$$inline_92.length;
      if (v3033) {
        v3033 = d$$inline_95 = JAM.call(a$$inline_92.shift, a$$inline_92, [], JAM.policy.p3);
      }
      v1454 = v3033;
    }
    return;
  }
  function ga$$1(a$$115, b$$92) {
    function v56() {
      var b$$93 = JAM.call(c$$60.slice, c$$60, [], JAM.policy.p3);
      var v1455 = b$$93.push;
      JAM.call(v1455.apply, v1455, [b$$93, arguments], JAM.policy.p3);
      return JAM.call(a$$115.apply, a$$115, [this, b$$93], JAM.policy.p3);
    }
    var v1456 = Array.prototype.slice;
    var c$$60 = JAM.call(v1456.call, v1456, [arguments, 1], JAM.policy.p3);
    return v56;
  }
  function r$$2(a$$114, b$$91, c$$59) {
    var v1457;
    var v3965 = Function.prototype.bind;
    if (v3965) {
      var v4927 = Function.prototype.bind;
      var v4785 = JAM.call(v4927.toString, v4927, [], JAM.policy.p3);
      v3965 = -1 != JAM.call(v4785.indexOf, v4785, ["native code"], JAM.policy.p3);
    }
    if (v3965) {
      v1457 = ea$$1;
    } else {
      v1457 = fa$$1;
    }
    r$$2 = v1457;
    return JAM.call(r$$2.apply, r$$2, [null, arguments], JAM.policy.p3);
  }
  function fa$$1(a$$113, b$$90, c$$57) {
    function v58() {
      return JAM.call(a$$113.apply, a$$113, [b$$90, arguments], JAM.policy.p3);
    }
    function v57() {
      var v1458 = Array.prototype.slice;
      var c$$58 = JAM.call(v1458.call, v1458, [arguments], JAM.policy.p3);
      var v1459 = Array.prototype.unshift;
      JAM.call(v1459.apply, v1459, [c$$58, d$$45], JAM.policy.p3);
      return JAM.call(a$$113.apply, a$$113, [b$$90, c$$58], JAM.policy.p3);
    }
    if (!a$$113) {
      throw Error();
    }
    if (2 < arguments.length) {
      var v1461 = Array.prototype.slice;
      var d$$45 = JAM.call(v1461.call, v1461, [arguments, 2], JAM.policy.p3);
      return v57;
    }
    return v58;
  }
  function ea$$1(a$$112, b$$89, c$$56) {
    var v1463 = a$$112.call;
    return JAM.call(v1463.apply, v1463, [a$$112.bind, arguments], JAM.policy.p3);
  }
  function da$$1(a$$111) {
    var b$$88 = typeof a$$111;
    var v3040 = "object" == b$$88;
    if (v3040) {
      v3040 = null != a$$111;
    }
    var v1465 = v3040;
    if (!v1465) {
      v1465 = "function" == b$$88;
    }
    return v1465;
  }
  function q$$3(a$$110) {
    return "number" == typeof a$$110;
  }
  function p$$1(a$$109) {
    return "string" == typeof a$$109;
  }
  function ca$$1(a$$108) {
    var b$$87 = ba$$1(a$$108);
    var v1468 = "array" == b$$87;
    if (!v1468) {
      var v3042 = "object" == b$$87;
      if (v3042) {
        v3042 = "number" == typeof a$$108.length;
      }
      v1468 = v3042;
    }
    return v1468;
  }
  function n$$2(a$$107) {
    return "array" == ba$$1(a$$107);
  }
  function ba$$1(a$$106) {
    var b$$86 = typeof a$$106;
    if ("object" == b$$86) {
      if (a$$106) {
        if (a$$106 instanceof Array) {
          return "array";
        }
        if (a$$106 instanceof Object) {
          return b$$86;
        }
        var v1472 = Object.prototype.toString;
        var c$$55 = JAM.call(v1472.call, v1472, [a$$106], JAM.policy.p3);
        if ("[object Window]" == c$$55) {
          return "object";
        }
        var v3045 = "[object Array]" == c$$55;
        if (!v3045) {
          var v4786 = "number" == typeof a$$106.length;
          if (v4786) {
            v4786 = "undefined" != typeof a$$106.splice;
          }
          var v4521 = v4786;
          if (v4521) {
            v4521 = "undefined" != typeof a$$106.propertyIsEnumerable;
          }
          var v3967 = v4521;
          if (v3967) {
            v3967 = !JAM.call(a$$106.propertyIsEnumerable, a$$106, ["splice"], JAM.policy.p3);
          }
          v3045 = v3967;
        }
        if (v3045) {
          return "array";
        }
        var v3046 = "[object Function]" == c$$55;
        if (!v3046) {
          var v4523 = "undefined" != typeof a$$106.call;
          if (v4523) {
            v4523 = "undefined" != typeof a$$106.propertyIsEnumerable;
          }
          var v3969 = v4523;
          if (v3969) {
            v3969 = !JAM.call(a$$106.propertyIsEnumerable, a$$106, ["call"], JAM.policy.p3);
          }
          v3046 = v3969;
        }
        if (v3046) {
          return "function";
        }
      } else {
        return "null";
      }
    } else {
      var v3047 = "function" == b$$86;
      if (v3047) {
        v3047 = "undefined" == typeof a$$106.call;
      }
      if (v3047) {
        return "object";
      }
    }
    return b$$86;
  }
  function jb$$1(a$$70) {
    function v60() {
      JAM.call(f$$10.appendChild, f$$10, [e$$20], JAM.policy.p3);
      return;
    }
    function v59() {
      var v3048 = "complete" == e$$20.readyState;
      if (!v3048) {
        v3048 = "loaded" == e$$20.readyState;
      }
      if (v3048) {
        try {
          JAM.call(b$$56, null, [], JAM.policy.p3);
        } catch (a$$71) {
        }
      }
      return;
    }
    var b$$56;
    var c$$33;
    var d$$25;
    d$$25 = d$$25 || document;
    var e$$20 = JAM.call(d$$25.createElement, d$$25, ["script"], JAM.policy.p3);
    e$$20.type = "text/javascript";
    if (b$$56) {
      var v3049;
      if (void 0 !== e$$20.onreadystatechange) {
        v3049 = JAM.set(e$$20, "onreadystatechange", v59);
      } else {
        v3049 = JAM.set(e$$20, "onload", b$$56);
      }
      v3049;
    }
    if (c$$33) {
      e$$20.id = c$$33;
    }
    e$$20.src = a$$70;
    var f$$10 = JAM.call(d$$25.getElementsByTagName, d$$25, ["head"], JAM.policy.p3)[0];
    if (!f$$10) {
      return;
    }
    try {
      JAM.call(window.setTimeout, window, [v60, 0], JAM.policy.p3);
    } catch (g$$8) {
    }
    return;
  }
  function kb$$1(a$$72, b$$57) {
    y$$31(a$$72, "load", b$$57);
    return;
  }
  function pb$$1() {
    var a$$73 = "msie";
    var v1481;
    if (a$$73 in qb$$1) {
      v1481 = qb$$1[a$$73];
    } else {
      var v3050 = qb$$1;
      var v4790 = navigator.userAgent;
      var v4528 = JAM.call(v4790.toLowerCase, v4790, [], JAM.policy.p3);
      var v3976 = JAM.call(v4528.indexOf, v4528, [a$$73], JAM.policy.p3);
      introspect(JAM.policy.p2) {
        v1481 = v3050[a$$73] = -1 != v3976;
      }
    }
    return v1481;
  }
  function tb() {
    var v3052 = navigator.plugins;
    if (v3052) {
      v3052 = navigator.mimeTypes.length;
    }
    if (v3052) {
      var a$$75 = navigator.plugins["Shockwave Flash"];
      var v3053 = a$$75;
      if (v3053) {
        v3053 = a$$75.description;
      }
      if (v3053) {
        var v3054 = a$$75.description;
        var v1483 = JAM.call(v3054.replace, v3054, [/([a-zA-Z]|\s)+/, ""], JAM.policy.p3);
        return JAM.call(v1483.replace, v1483, [/(\s)+r/, "."], JAM.policy.p3);
      }
    } else {
      var v3055 = navigator.userAgent;
      if (v3055) {
        var v4529 = navigator.userAgent;
        v3055 = 0 <= JAM.call(v4529.indexOf, v4529, ["Windows CE"], JAM.policy.p3);
      }
      if (v3055) {
        a$$75 = 3;
        var b$$58 = 1;
        for (;b$$58;) {
          try {
            b$$58 = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + (a$$75 + 1));
            a$$75++;
          } catch (c$$34) {
            b$$58 = null;
          }
        }
        return JAM.call(a$$75.toString, a$$75, [], JAM.policy.p3);
      }
      var v3057 = pb$$1();
      if (v3057) {
        v3057 = !window.opera;
      }
      if (v3057) {
        b$$58 = null;
        try {
          b$$58 = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
        } catch (d$$26) {
          a$$75 = 0;
          try {
            b$$58 = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
            a$$75 = 6;
            b$$58.AllowScriptAccess = "always";
          } catch (e$$21) {
            if (6 == a$$75) {
              return JAM.call(a$$75.toString, a$$75, [], JAM.policy.p3);
            }
          }
          try {
            b$$58 = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
          } catch (f$$11) {
          }
        }
        if (b$$58) {
          var v3981 = JAM.call(b$$58.GetVariable, b$$58, ["$version"], JAM.policy.p3);
          a$$75 = JAM.call(v3981.split, v3981, [" "], JAM.policy.p3)[1];
          return JAM.call(a$$75.replace, a$$75, [/,/g, "."], JAM.policy.p3);
        }
      }
    }
    return "0";
  }
  function ub(a$$76) {
    var b$$59 = a$$76.google_ad_format;
    var v1489;
    if (b$$59) {
      v1489 = 0 < JAM.call(b$$59.indexOf, b$$59, ["_0ads"], JAM.policy.p3);
    } else {
      var v3060 = "html" != a$$76.google_ad_output;
      if (v3060) {
        v3060 = 0 < a$$76.google_num_radlinks;
      }
      v1489 = v3060;
    }
    return v1489;
  }
  function Ze(a$$77, b$$60, c$$35, d$$27) {
    var v1490 = c$$35;
    if (!v1490) {
      v1490 = a$$77.google_ad_width;
    }
    c$$35 = v1490;
    var v1491 = d$$27;
    if (!v1491) {
      v1491 = a$$77.google_ad_height;
    }
    d$$27 = v1491;
    if (a$$77.top == a$$77) {
      return !1;
    }
    var e$$22 = b$$60.documentElement;
    if (c$$35 && d$$27) {
      var f$$12 = 1;
      var g$$9 = 1;
      var v1493;
      if (a$$77.innerHeight) {
        f$$12 = a$$77.innerWidth;
        v1493 = g$$9 = a$$77.innerHeight;
      } else {
        var v3064;
        var v4530 = e$$22;
        if (v4530) {
          v4530 = e$$22.clientHeight;
        }
        if (v4530) {
          f$$12 = e$$22.clientWidth;
          v3064 = g$$9 = e$$22.clientHeight;
        } else {
          var v3984 = b$$60.body;
          if (v3984) {
            f$$12 = b$$60.body.clientWidth;
            v3984 = g$$9 = b$$60.body.clientHeight;
          }
          v3064 = v3984;
        }
        v1493 = v3064;
      }
      v1493;
      var v3066 = g$$9 > 2 * d$$27;
      if (!v3066) {
        v3066 = f$$12 > 2 * c$$35;
      }
      if (v3066) {
        return !1;
      }
    }
    return !0;
  }
  function $e(a$$78, b$$61) {
    function v61(b$$62, d$$28) {
      var v1496 = "google_" + d$$28;
      introspect(JAM.policy.p2) {
        a$$78[v1496] = b$$62;
      }
      return;
    }
    x$$50(b$$61, v61);
    return;
  }
  function bf(a$$79, b$$63) {
    var c$$36 = af();
    var v1497;
    if (c$$36) {
      v1497 = c$$36;
    } else {
      var v3067;
      if (b$$63) {
        v3067 = a$$79.referrer;
      } else {
        v3067 = a$$79.URL;
      }
      v1497 = v3067;
    }
    return v1497;
  }
  function Jh(a$$90) {
    var b$$74 = 1;
    var c$$45 = 0;
    var d$$36;
    var v3068 = void 0 != a$$90;
    if (v3068) {
      v3068 = "" != a$$90;
    }
    if (v3068) {
      b$$74 = 0;
      d$$36 = a$$90.length - 1;
      var v1498 = 0 <= d$$36;
      for (;v1498;) {
        c$$45 = JAM.call(a$$90.charCodeAt, a$$90, [d$$36], JAM.policy.p3);
        b$$74 = (b$$74 << 6 & 268435455) + c$$45 + (c$$45 << 14);
        c$$45 = b$$74 & 266338304;
        var v3070;
        if (0 != c$$45) {
          v3070 = b$$74 ^ c$$45 >> 21;
        } else {
          v3070 = b$$74;
        }
        b$$74 = v3070;
        d$$36--;
        v1498 = 0 <= d$$36;
      }
    }
    return b$$74;
  }
  function Fh(a$$91, b$$75) {
    var v3071 = !a$$91;
    if (!v3071) {
      v3071 = "none" == a$$91;
    }
    if (v3071) {
      return 1;
    }
    a$$91 = String(a$$91);
    var v1501 = "auto" == a$$91;
    if (v1501) {
      a$$91 = b$$75;
      var v3993 = "www." == JAM.call(a$$91.substring, a$$91, [0, 4], JAM.policy.p3);
      if (v3993) {
        a$$91 = JAM.call(a$$91.substring, a$$91, [4, a$$91.length], JAM.policy.p3);
      }
    }
    return Jh(JAM.call(a$$91.toLowerCase, a$$91, [], JAM.policy.p3));
  }
  function ji(a$$94) {
    var v1503;
    if (null != a$$94) {
      v1503 = '"' + a$$94 + '"';
    } else {
      v1503 = '""';
    }
    return v1503;
  }
  function ii() {
    function v65() {
      f$$19 = !0;
      var a$$100 = 0;
      var v1505 = a$$100 < c$$51.google_top_js_callbacks.length;
      for (;v1505;) {
        var v1504 = c$$51.google_top_js_callbacks[a$$100] === h$$11;
        if (v1504) {
          var v3996 = c$$51.google_top_js_callbacks;
          JAM.call(v3996.splice, v3996, [a$$100, 1], JAM.policy.p3);
          JAM.call(h$$11, null, [], JAM.policy.p3);
        }
        a$$100++;
        v1505 = a$$100 < c$$51.google_top_js_callbacks.length;
      }
      return;
    }
    function v64() {
      var v3077 = null != e$$31.j.deviceAccelerationWithGravity;
      if (!v3077) {
        v3077 = null != e$$31.j.deviceAccelerationWithoutGravity;
      }
      var v1506 = v3077;
      if (!v1506) {
        v1506 = e$$31.j.didDeviceMotionCallbacksTimeoutExpire;
      }
      return v1506;
    }
    function v63() {
      var v1507 = null != e$$31.j.deviceOrientation;
      if (!v1507) {
        v1507 = e$$31.j.didDeviceOrientationCallbacksTimeoutExpire;
      }
      return v1507;
    }
    function v62() {
      var v1508 = 3 != c$$51.google_top_js_status;
      if (!v1508) {
        v1508 = f$$19;
      }
      return v1508;
    }
    if (hc() != D$$1()) {
      ze = ze | 4;
    }
    if (Ha$$1) {
      ze = ze | 16;
    }
    if (3 == Xe(document)) {
      ze = ze | 32;
    }
    if ("google_dn" in window) {
      ze = ze | 8;
    }
    if (window.google_loader_features_used) {
      ze = ze | window.google_loader_features_used;
    }
    var v3089;
    if (B$$2) {
      v3089 = 1 == yb(window);
    } else {
      v3089 = !yb(window);
    }
    var v1513 = v3089;
    if (v1513) {
      li();
    }
    Vi();
    var a$$99 = null;
    var b$$81 = "";
    a$$99 = window.google_async_iframe_id;
    var c$$51 = D$$1();
    var v1514;
    if (a$$99) {
      var v3090 = c$$51.document;
      v1514 = a$$99 = JAM.call(v3090.getElementById, v3090, [a$$99], JAM.policy.p3);
    } else {
      b$$81 = "google_temp_span";
      v1514 = a$$99 = Zi(b$$81);
    }
    v1514;
    var d$$42 = Of;
    var v1515 = c$$51.google_top_experiment !== d$$42.EXPERIMENT_ZERO_LATENCY;
    if (v1515) {
      v1515 = 3 === c$$51.google_top_js_status;
    }
    d$$42 = v1515;
    var e$$31 = Mh(c$$51);
    var v3094 = d$$42;
    if (!v3094) {
      var v4004 = e$$31;
      if (v4004) {
        var v4537 = JAM.call(e$$31.P, e$$31, [], JAM.policy.p3);
        if (!v4537) {
          v4537 = JAM.call(e$$31.O, e$$31, [], JAM.policy.p3);
        }
        v4004 = v4537;
      }
      v3094 = v4004;
    }
    if (v3094) {
      var f$$19 = !1;
      var g$$15 = [];
      if (d$$42) {
        JAM.call(g$$15.push, g$$15, [v62], JAM.policy.p3);
      }
      var v3095 = e$$31;
      if (v3095) {
        v3095 = JAM.call(e$$31.P, e$$31, [], JAM.policy.p3);
      }
      var v1516 = v3095;
      if (v1516) {
        JAM.call(g$$15.push, g$$15, [v63], JAM.policy.p3);
      }
      var v3096 = e$$31;
      if (v3096) {
        v3096 = JAM.call(e$$31.O, e$$31, [], JAM.policy.p3);
      }
      var v1517 = v3096;
      if (v1517) {
        JAM.call(g$$15.push, g$$15, [v64], JAM.policy.p3);
      }
      var h$$11 = ga$$1(Yi, a$$99, b$$81, e$$31, g$$15);
      if (d$$42) {
        var v4934 = new Date;
        Xi = JAM.call(v4934.getTime, v4934, [], JAM.policy.p3);
        var v4935 = c$$51.google_top_js_callbacks;
        if (!v4935) {
          v4935 = [];
        }
        c$$51.google_top_js_callbacks = v4935;
        var v4795 = c$$51.google_top_js_callbacks;
        JAM.call(v4795.push, v4795, [h$$11], JAM.policy.p3);
        b$$81 = v65;
        JAM.call(window.setTimeout, window, [b$$81, 150], JAM.policy.p3);
      }
      var v3097 = e$$31;
      if (v3097) {
        v3097 = JAM.call(e$$31.fb, e$$31, [], JAM.policy.p3);
      }
      var v1518 = v3097;
      if (v1518) {
        JAM.call(e$$31.Gc, e$$31, [], JAM.policy.p3);
      }
      var v3098 = e$$31;
      if (v3098) {
        v3098 = JAM.call(e$$31.P, e$$31, [], JAM.policy.p3);
      }
      var v1519 = v3098;
      if (v1519) {
        JAM.call(e$$31.nc, e$$31, [h$$11], JAM.policy.p3);
      }
      var v3099 = e$$31;
      if (v3099) {
        v3099 = JAM.call(e$$31.O, e$$31, [], JAM.policy.p3);
      }
      var v1520 = v3099;
      if (v1520) {
        JAM.call(e$$31.mc, e$$31, [h$$11], JAM.policy.p3);
      }
    } else {
      Yi(a$$99, b$$81);
    }
    return;
  }
  function $h() {
    var v1522 = null == window.google_ad_output;
    if (v1522) {
      window.google_ad_output = "html";
    }
    var JSCompiler_temp_const$$501 = window;
    var JSCompiler_inline_result$$502;
    JSCompiler_inline_label_yh_519: {
      var a$$inline_515 = window.google_ad_format;
      var b$$inline_516 = window.google_ad_client;
      if (!b$$inline_516) {
        JSCompiler_inline_result$$502 = "";
        break JSCompiler_inline_label_yh_519;
      }
      b$$inline_516 = JAM.call(b$$inline_516.toLowerCase, b$$inline_516, [], JAM.policy.p3);
      var JSCompiler_inline_result$$inline_517;
      var a$$inline_518 = b$$inline_516;
      var v3101 = a$$inline_518;
      if (v3101) {
        v3101 = "ca-" != JAM.call(a$$inline_518.substring, a$$inline_518, [0, 3], JAM.policy.p3);
      }
      var v1524 = v3101;
      if (v1524) {
        a$$inline_518 = "ca-" + a$$inline_518;
      }
      JSCompiler_inline_result$$inline_517 = a$$inline_518;
      JSCompiler_inline_result$$502 = b$$inline_516 = JSCompiler_inline_result$$inline_517;
    }
    JSCompiler_temp_const$$501.google_ad_client = JSCompiler_inline_result$$502;
    if (null == window.google_flash_version) {
      var JSCompiler_temp_const$$486 = window;
      var JSCompiler_inline_result$$487;
      JSCompiler_inline_label_sb$$1_521: {
        try {
          JSCompiler_inline_result$$487 = tb();
        } catch (a$$inline_520) {
          JSCompiler_inline_result$$487 = "0";
        }
      }
      JSCompiler_temp_const$$486.google_flash_version = JSCompiler_inline_result$$487;
    }
    var v3103 = window.google_ad_section;
    if (!v3103) {
      v3103 = window.google_ad_region;
    }
    var v1526 = v3103;
    if (!v1526) {
      v1526 = "";
    }
    window.google_ad_section = v1526;
    var v3105 = window.google_country;
    if (!v3105) {
      v3105 = window.google_gl;
    }
    var v1527 = v3105;
    if (!v1527) {
      v1527 = "";
    }
    window.google_country = v1527;
    var v1528 = new Date;
    var a$$inline_90 = JAM.call(v1528.getTime, v1528, [], JAM.policy.p3);
    var v1529 = n$$2(window.google_color_bg);
    if (v1529) {
      var v3108 = window;
      var v5098 = zh(window.google_color_bg, a$$inline_90);
      v3108.google_color_bg = v5098;
    }
    var v1530 = n$$2(window.google_color_text);
    if (v1530) {
      var v3110 = window;
      var v5099 = zh(window.google_color_text, a$$inline_90);
      v3110.google_color_text = v5099;
    }
    var v1531 = n$$2(window.google_color_link);
    if (v1531) {
      var v3112 = window;
      var v5100 = zh(window.google_color_link, a$$inline_90);
      v3112.google_color_link = v5100;
    }
    var v1532 = n$$2(window.google_color_url);
    if (v1532) {
      var v3114 = window;
      var v5101 = zh(window.google_color_url, a$$inline_90);
      v3114.google_color_url = v5101;
    }
    var v1533 = n$$2(window.google_color_border);
    if (v1533) {
      var v3116 = window;
      var v5102 = zh(window.google_color_border, a$$inline_90);
      v3116.google_color_border = v5102;
    }
    var v1534 = n$$2(window.google_color_line);
    if (v1534) {
      var v3118 = window;
      var v5103 = zh(window.google_color_line, a$$inline_90);
      v3118.google_color_line = v5103;
    }
    return;
  }
  var m$$3 = this;
  var v1535 = Date.now;
  if (!v1535) {
    v1535 = v66;
  }
  var ha$$1 = v1535;
  var la$$1 = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/;
  var na$$1 = t$$1("0.1");
  var oa$$1 = t$$1("0.02");
  var pa$$1 = t$$1("1");
  var qa$$1 = t$$1("0.04");
  var ra$$1 = t$$1("0.001");
  var sa$$1 = t$$1("");
  var ta$$1 = t$$1("");
  var ua$$1 = t$$1("0.01");
  var va$$1 = t$$1("0.001");
  var wa$$1 = t$$1("0.0");
  var xa$$1 = t$$1("");
  var ya$$1 = t$$1("0.01");
  var za$$1 = t$$1("0.001");
  var Aa$$1 = t$$1("0.001");
  var Ba$$1 = t$$1("");
  var Ca$$1 = t$$1("0.06");
  var Ea$$1 = ka$$1("false");
  var Fa$$1 = ka$$1("false");
  var Ga$$1 = ka$$1("false");
  var Ha$$1 = ka$$1("false");
  var Ia$$1 = ka$$1("true");
  var Ma$$1;
  var Na$$1 = /&/g;
  var Oa$$1 = /</g;
  var Pa$$1 = />/g;
  var Qa$$1 = /\"/g;
  var Ra$$1 = /[&<>\"]/;
  var Wa$$1 = /&([^;\s<&]+);?/g;
  var Ya$$1 = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
  var Za$$1 = {"'":"\\'"};
  u$$2.prototype.ceil = v67;
  u$$2.prototype.floor = v68;
  u$$2.prototype.round = v69;
  u$$2.prototype.scale = v70;
  var v$$1 = document;
  var w$$6 = window;
  La$$1();
  var qb$$1 = {};
  var B$$2 = !!window.google_async_iframe_id;
  var v3121 = B$$2;
  if (v3121) {
    v3121 = window.parent;
  }
  var v1541 = v3121;
  if (!v1541) {
    v1541 = window;
  }
  var Ob = v1541;
  var Pb = {CONTROL:"C", EXPERIMENT:"E"};
  var Xb = Array.prototype;
  var v1542;
  if (Xb.indexOf) {
    v1542 = v71;
  } else {
    v1542 = v72;
  }
  var Yb = v1542;
  var v1543;
  if (Xb.forEach) {
    v1543 = v73;
  } else {
    v1543 = v74;
  }
  var Zb = v1543;
  E$$1.prototype.statusz = v75;
  E$$1.prototype.Ga = v76;
  E$$1.prototype.bb = v77;
  E$$1.prototype.k = v78;
  E$$1.prototype.ac = v79;
  E$$1.prototype.m = v80;
  E$$1.prototype.geil = E$$1.prototype.m;
  E$$1.prototype.Ka = v81;
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
  M$$1.prototype.ceil = v82;
  M$$1.prototype.floor = v83;
  M$$1.prototype.round = v84;
  M$$1.prototype.translate = v85;
  M$$1.prototype.scale = v86;
  var Fc = JAM.call("constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split, "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf", [" "], JAM.policy.p3);
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
  var Vc = v87();
  var v1575 = !N$$1;
  if (!v1575) {
    var v3126 = N$$1;
    if (v3126) {
      v3126 = 9 <= Vc;
    }
    v1575 = v3126;
  }
  var Wc = v1575;
  var v4015 = !Oc;
  if (v4015) {
    v4015 = !N$$1;
  }
  var v3128 = v4015;
  if (!v3128) {
    var v4016 = N$$1 && N$$1;
    if (v4016) {
      v4016 = 9 <= Vc;
    }
    v3128 = v4016;
  }
  var v1576 = v3128;
  if (!v1576) {
    if (Oc) {
      Uc("1.9.1");
    }
  }
  var v1577 = N$$1;
  if (v1577) {
    v1577 = !Uc("9");
  }
  var Xc = v1577;
  var ed = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
  var sd = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1};
  var td = {IMG:" ", BR:"\n"};
  O$$1.prototype.createElement = v88;
  O$$1.prototype.createTextNode = v89;
  O$$1.prototype.$b = v90;
  O$$1.prototype.Ja = v91;
  O$$1.prototype.appendChild = od;
  O$$1.prototype.append = pd;
  O$$1.prototype.canHaveChildren = nd;
  O$$1.prototype.removeNode = qd;
  O$$1.prototype.contains = rd;
  P$$1.prototype.contains = v92;
  P$$1.prototype.expand = v93;
  P$$1.prototype.ceil = v94;
  P$$1.prototype.floor = v95;
  P$$1.prototype.round = v96;
  P$$1.prototype.translate = v97;
  P$$1.prototype.scale = v98;
  var Sd = /[^\d]+$/;
  var Ud = {cm:1, "in":1, mm:1, pc:1, pt:1};
  var Vd = {em:1, ex:1};
  var Xd = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
  var he = "";
  var ie = 0;
  var je = 0;
  ke(Ha$$1, La$$1(!1), oa$$1, pa$$1);
  S$$1.prototype.oc = v100;
  S$$1.prototype.bc = v101;
  S$$1.prototype.Fa = v102;
  S$$1.prototype.Na = v103;
  S$$1.prototype.getRegisteredAdblockUrls = v104;
  S$$1.prototype.setupOse = v105;
  S$$1.prototype.getEid = v106;
  S$$1.prototype.getOseExpId = v107;
  S$$1.prototype.getOseId = v108;
  S$$1.prototype.getCorrelator = v109;
  S$$1.prototype.La = v110;
  S$$1.prototype.registerAdBlock = v112;
  S$$1.prototype.setUpForcePeriscope = v113;
  S$$1.prototype.shouldForcePeriscope = v114;
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
  var pe = {client:"google_ad_client", format:"google_ad_format", slotname:"google_ad_slot", output:"google_ad_output", ad_type:"google_ad_type", async_oa:"google_async_for_oa_experiment", zrtm:"google_ad_handling_mode", dimpr:"google_always_use_delayed_impressions_experiment", peri:"google_top_experiment"};
  s$$3("google_protectAndRun", te);
  s$$3("google_handleError", ve);
  var ze = 0;
  Be.prototype.serialize = v115;
  Be.prototype.n = v116;
  var Ce = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
  var v1622;
  if (JAM.call(/\uffff/.test, /\uffff/, ["\uffff"], JAM.policy.p3)) {
    v1622 = /[\\\"\x00-\x1f\x7f-\uffff]/g;
  } else {
    v1622 = /[\\\"\x00-\x1f\x7f-\xff]/g;
  }
  var De = v1622;
  Be.prototype.r = v118;
  Be.prototype.L = v119;
  Be.prototype.yc = v120;
  Be.prototype.M = v121;
  var Fe = /Firefox/;
  var Ge = {CONTROL_NO_FRAME:"XN", PARALLEL_CANCEL_ON_NO_AD:"PC", IFRAME_SIGNALING:"EI", ALWAYS_ZRT:"AZ", SERIAL:"S"};
  var He = {PARALLEL:"K", PARALLEL_W_IFRAME_SIGNALING:"I", PARALLEL_W_ALWAYS_ZRT:"Z", SERIAL:"U"};
  var Ie = /\.((google(|groups|mail|images|print))|gmail)\./;
  var Ne = Sa$$1("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");
  Me.prototype.set = v122;
  Me.prototype.Jb = v123;
  Me.prototype.Qc = v124;
  var Pe = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
  var Se = Pc;
  var T$$1 = {getIframingState:v125, frameCountsWithDelayedPingback:v126, Uc:v127, Ha:v128, NO_IFRAMING:0, SAME_DOMAIN_IFRAMING:1, CROSS_DOMAIN_IFRAMING:2, NAME_FIRST_GOOGLE_WINDOW:"aswift_0", IFRAME_COUNTS_DELAY:2E3, MAXIMUM_IFRAME_DEPTH:20};
  var mf;
  U$$1.prototype.enqueue = v129;
  U$$1.prototype.Y = v130;
  U$$1.prototype.Xa = v131;
  U$$1.prototype.ra = v132;
  U$$1.prototype.statusz = v133;
  U$$1.prototype["nq"] = U$$1.prototype.enqueue;
  U$$1.prototype["nqa"] = U$$1.prototype.Y;
  U$$1.prototype["al"] = U$$1.prototype.Xa;
  U$$1.prototype["rl"] = U$$1.prototype.ra;
  U$$1.prototype["sz"] = U$$1.prototype.statusz;
  U$$1.prototype.sa = v134;
  U$$1.prototype.Oc = v135;
  U$$1.prototype.ab = v136;
  var v1643 = new Date;
  var vf = JAM.call(v1643.getTime, v1643, [], JAM.policy.p3);
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
  V$$1.prototype.jb = v137;
  V$$1.prototype.la = v138;
  V$$1.prototype.Ya = v139;
  V$$1.prototype.Ia = v140;
  V$$1.prototype.Ta = v141;
  V$$1.prototype.Rc = v142;
  V$$1.prototype.ya = v143;
  V$$1.prototype.zc = v144;
  V$$1.prototype.wb = v145;
  V$$1.prototype.v = v146;
  V$$1.prototype.Ec = v147;
  V$$1.prototype.da = v148;
  V$$1.prototype.Qa = v149;
  V$$1.prototype.J = v150;
  V$$1.prototype.ta = v151;
  V$$1.prototype.gb = v152;
  V$$1.prototype.eb = v153;
  V$$1.prototype.Ac = v154;
  V$$1.prototype.Dc = v155;
  V$$1.prototype.R = v157;
  hg.prototype.serialize = v158;
  hg.prototype.n = v159;
  var ig = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
  var v1672;
  if (JAM.call(/\uffff/.test, /\uffff/, ["\uffff"], JAM.policy.p3)) {
    v1672 = /[\\\"\x00-\x1f\x7f-\uffff]/g;
  } else {
    v1672 = /[\\\"\x00-\x1f\x7f-\xff]/g;
  }
  var jg = v1672;
  hg.prototype.r = v161;
  hg.prototype.L = v162;
  hg.prototype.xc = v163;
  hg.prototype.M = v164;
  var kg = {FLOATING:1, INTERSTITIAL:2};
  var lg = {FLOATING_BOTTOM:1, GDN_INTERSTITIAL:8};
  var mg = {"http://doubleclick":!0, "http://googlesyndication":!0, "https://doubleclick":!0, "https://googlesyndication":!0};
  var sg = /([0-9.]+)px/;
  var tg = [{width:120, height:240, format:"vertical"}, {width:120, height:600, format:"vertical"}, {width:125, height:125, format:"rectangle"}, {width:160, height:600, format:"vertical"}, {width:180, height:150, format:"rectangle"}, {width:200, height:200, format:"rectangle"}, {width:234, height:60, format:"horizontal"}, {width:250, height:250, format:"rectangle"}, {width:300, height:250, format:"rectangle"}, {width:300, height:600, format:"vertical"}, {width:320, height:50, format:"horizontal"}, 
  {width:336, height:280, format:"rectangle"}, {width:468, height:60, format:"horizontal"}, {width:728, height:90, format:"horizontal"}, {width:970, height:90, format:"horizontal"}];
  var Bg = ["google_analytics_uacct", "google_analytics_domain_name"];
  Mg.prototype.ja = v165;
  Mg.prototype.ia = v166;
  Mg.prototype.D = v167;
  Qg.prototype.ja = v168;
  Qg.prototype.ia = v169;
  Qg.prototype.D = v170;
  var Ug = {1:1, 8:2};
  dh.prototype.ub = v171;
  W$$1.prototype.Ca = v172;
  W$$1.prototype.ka = v173;
  W$$1.prototype.C = v174;
  W$$1.prototype.Pc = v175;
  W$$1.prototype.play = v176;
  W$$1.prototype.stop = v177;
  ja$$1(fh, W$$1);
  fh.prototype.C = v178;
  ja$$1(gh, W$$1);
  gh.prototype.ka = v179;
  gh.prototype.C = v180;
  hh.prototype.ba = v181;
  hh.prototype.Pb = v182;
  hh.prototype.u = v183;
  ja$$1(X$$1, hh);
  X$$1.prototype.dismiss = v184;
  X$$1.prototype.hide = v185;
  X$$1.prototype.A = v186;
  X$$1.prototype.show = v187;
  X$$1.prototype.pb = v188;
  X$$1.prototype.qb = v189;
  X$$1.prototype.Qb = v190;
  X$$1.prototype.Rb = v191;
  X$$1.prototype.Ma = v192;
  X$$1.prototype.Sa = v193;
  X$$1.prototype.ec = v194;
  X$$1.prototype.tc = v195;
  X$$1.prototype.vc = v196;
  X$$1.prototype.Kc = v198;
  X$$1.prototype.Lc = v200;
  X$$1.prototype.Mc = v201;
  X$$1.prototype.Nc = v202;
  X$$1.prototype.$a = v203;
  X$$1.prototype.cb = v204;
  X$$1.prototype.o = v205;
  ih.prototype.Wb = v206;
  ih.prototype.gc = v207;
  ja$$1(jh, ih);
  jh.prototype.Bb = v208;
  jh.prototype.Gb = v209;
  jh.prototype.pa = v210;
  ja$$1(Y$$1, hh);
  var lh = {backgroundColor:"white", opacity:"1", position:"fixed", left:"0px", top:"0px", display:"none", zIndex:"2147483647"};
  var mh = {width:"100%", height:"100%"};
  var nh = {width:"100%", "min-height":"100%"};
  Y$$1.prototype.mb = v211;
  Y$$1.prototype.A = v212;
  Y$$1.prototype.rb = v213;
  Y$$1.prototype.tb = v214;
  Y$$1.prototype.Ba = v215;
  Y$$1.prototype.vb = v216;
  Y$$1.prototype.xb = v217;
  Y$$1.prototype.Yb = v218;
  Y$$1.prototype.Xb = v219;
  Y$$1.prototype.sc = v220;
  Y$$1.prototype.Cc = v221;
  Y$$1.prototype.N = v222;
  ja$$1(Z$$1, ih);
  Z$$1.prototype.pa = v223;
  Z$$1.prototype.T = v224;
  Z$$1.prototype.Hb = v225;
  Z$$1.prototype.Nb = v226;
  Z$$1.prototype.Mb = v227;
  Z$$1.prototype.Va = v228;
  Z$$1.prototype.dc = v229;
  Z$$1.prototype.qc = v230;
  Z$$1.prototype.uc = v231;
  Z$$1.prototype.wc = v232;
  Z$$1.prototype.Bc = v233;
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
  $$$1.prototype.zb = v234;
  $$$1.prototype.Ab = v235;
  $$$1.prototype.$ = v236;
  $$$1.prototype.aa = v237;
  $$$1.prototype.ca = v238;
  $$$1.prototype.Oa = v239;
  $$$1.prototype.nc = v241;
  $$$1.prototype.mc = v243;
  $$$1.prototype.fb = v244;
  $$$1.prototype.O = v245;
  $$$1.prototype.P = v246;
  $$$1.prototype.Gc = v247;
  $$$1.prototype.Hc = v248;
  var Qh = null;
  var Rh = null;
  Uh.prototype.yb = v249;
  Uh.prototype.Ob = v250;
  Uh.prototype.Eb = v251;
  Uh.prototype.Ea = v252;
  var Vh = La$$1(!1);
  var Wh = 20;
  var ci = !1;
  var v1781 = w$$6.google_eas_queue;
  if (!v1781) {
    v1781 = [];
  }
  w$$6.google_eas_queue = v1781;
  var ei = Mb(v253);
  var zi = !1;
  var yi = "";
  var Xi = 0;
  var Ni = /[+, ]/;
  window.google_render_ad = ii;
  te("show_ads::main", ve, bi, xc);
  return;
}
function v22() {
  function v21(a$$45) {
    this.a = 0;
    JAM.call(a$$45.k, a$$45, [], JAM.policy.p3);
    return;
  }
  function v20() {
    var v3151 = 0 == this.a;
    if (v3151) {
      v3151 = this.c.length;
    }
    if (v3151) {
      var v1782 = this.c;
      var a$$44 = JAM.call(v1782.shift, v1782, [], JAM.policy.p3);
      this.a = 2;
      var b$$36 = M("sjr::run", JAM.call(p, null, [this.f, this, a$$44], JAM.policy.p3));
      var v1784 = a$$44.h;
      JAM.call(v1784.setTimeout, v1784, [b$$36, 0], JAM.policy.p3);
      Ua(this);
    }
    return;
  }
  function v19() {
    var v3153 = !window;
    if (!v3153) {
      v3153 = !Array;
    }
    return !v3153;
  }
  function v18() {
    var v1787 = 1 == this.a;
    if (v1787) {
      var v4021 = null != this.d;
      if (v4021) {
        var v4796 = this.b;
        JAM.call(v4796.clearTimeout, v4796, [this.d], JAM.policy.p3);
        this.d = null;
      }
      this.a = 0;
    }
    Ua(this);
    return;
  }
  function v17(a$$42) {
    this.a = 1;
    if (a$$42) {
      var b$$34 = M("sjr::timeout", JAM.call(p, null, [this.e, this], JAM.policy.p3));
      var v1789 = this.b;
      var v5104 = JAM.call(v1789.setTimeout, v1789, [b$$34, a$$42], JAM.policy.p3);
      this.d = v5104;
    }
    return;
  }
  function v16(a$$41, b$$33) {
    var v1790 = this.c;
    var v4022 = b$$33;
    if (!v4022) {
      v4022 = this.b;
    }
    JAM.call(v1790.push, v1790, [new Ta(a$$41, v4022)], JAM.policy.p3);
    Ua(this);
    return;
  }
  function v15(a$$40, b$$32) {
    var v1792;
    var v4540 = 0 != this.a;
    if (!v4540) {
      v4540 = 0 != this.c.length;
    }
    var v4023 = v4540;
    if (!v4023) {
      var v4541 = b$$32;
      if (v4541) {
        v4541 = b$$32 != window;
      }
      v4023 = v4541;
    }
    if (v4023) {
      v1792 = JAM.call(this.g, this, [a$$40, b$$32], JAM.policy.p3);
    } else {
      this.a = 2;
      v1792 = JAM.call(this.f, this, [new Ta(a$$40, window)], JAM.policy.p3);
    }
    v1792;
    return;
  }
  function v14(a$$36, b$$29) {
    var c$$19 = La("rs", a$$36);
    var d$$13;
    t: {
      var v4025 = a$$36;
      if (v4025) {
        v4025 = d$$13 = JAM.call(a$$36.match, a$$36, ["dt=([^&]+)"], JAM.policy.p3);
      }
      var v3158 = v4025;
      if (v3158) {
        v3158 = 2 == d$$13.length;
      }
      if (v3158) {
        d$$13 = d$$13[1];
        break t;
      }
      d$$13 = "";
    }
    var v3159 = new Date;
    d$$13 = JAM.call(v3159.getTime, v3159, [], JAM.policy.p3) - d$$13;
    var v4027;
    if (1E4 > d$$13) {
      v4027 = d$$13 + "";
    } else {
      v4027 = "M";
    }
    c$$19 = JAM.call(c$$19.replace, c$$19, [/&dtd=(\d+|M)/, "&dtd=" + v4027], JAM.policy.p3);
    JAM.call(this.set, this, [b$$29, c$$19], JAM.policy.p3);
    return c$$19;
  }
  function v13(a$$35) {
    var v1796 = this.b.document;
    a$$35 = JAM.call(v1796.getElementById, v1796, [a$$35], JAM.policy.p3);
    var b$$28 = a$$35.contentWindow.document;
    var v4028 = a$$35.onload;
    if (v4028) {
      v4028 = b$$28;
    }
    var v3162 = v4028;
    if (v3162) {
      var v4029 = !b$$28.body;
      if (!v4029) {
        v4029 = !b$$28.body.firstChild;
      }
      v3162 = v4029;
    }
    if (v3162) {
      JAM.call(a$$35.onload, a$$35, [], JAM.policy.p3);
    }
    return;
  }
  function v12(a$$34, b$$27) {
    var v1799 = this.i.handlers;
    introspect(JAM.policy.p2) {
      v1799[a$$34] = b$$27;
    }
    var v1800 = this.b.addEventListener;
    if (v1800) {
      var v3165 = this.b;
      JAM.call(v3165.addEventListener, v3165, ["load", JAM.call(p, null, [this.j, this, a$$34], JAM.policy.p3), !1], JAM.policy.p3);
    }
    return;
  }
  function rb() {
    var v3168 = !window.google_top_experiment;
    if (v3168) {
      v3168 = !window.google_top_js_status;
    }
    if (v3168) {
      var a$$69 = window;
      var v4033;
      if (a$$69.top == a$$69) {
        v4033 = 0;
      } else {
        var v4547;
        if (J(a$$69.top)) {
          v4547 = 1;
        } else {
          v4547 = 2;
        }
        v4033 = v4547;
      }
      if (2 !== v4033) {
        window.google_top_js_status = 0;
      } else {
        if (top.postMessage) {
          var b$$55;
          try {
            var v1801;
            if (D.top.frames.google_top_static_frame) {
              v1801 = !0;
            } else {
              v1801 = !1;
            }
            b$$55 = v1801;
          } catch (c$$32) {
            b$$55 = !1;
          }
          if (b$$55) {
            var v4035 = window;
            var v5105 = I(["jp_c", "jp_zl", "jp_wfpmr"], ja);
            v4035.google_top_experiment = v5105;
            if ("jp_c" !== window.google_top_experiment) {
              a$$69 = window;
              var v1802;
              if (a$$69.addEventListener) {
                v1802 = JAM.call(a$$69.addEventListener, a$$69, ["message", hb, !1], JAM.policy.p3);
              } else {
                var v3172 = a$$69.attachEvent;
                if (v3172) {
                  v3172 = JAM.call(a$$69.attachEvent, a$$69, ["onmessage", hb], JAM.policy.p3);
                }
                v1802 = v3172;
              }
              v1802;
              window.google_top_js_status = 3;
              a$$69 = {0:"google_loc_request", 1:gb};
              b$$55 = [];
              var d$$24;
              for (d$$24 in a$$69) {
                JAM.call(b$$55.push, b$$55, [d$$24 + "=" + a$$69[d$$24]], JAM.policy.p3);
              }
              JAM.call(top.postMessage, top, [JAM.call(b$$55.join, b$$55, ["\n"], JAM.policy.p3), "*"], JAM.policy.p3);
            }
          } else {
            window.google_top_js_status = 2;
          }
        } else {
          window.google_top_js_status = 1;
        }
      }
    }
    var v3176 = d$$24 = window.adsbygoogle;
    if (v3176) {
      v3176 = d$$24.shift;
    }
    if (v3176) {
      b$$55 = 20;
      var v3177 = a$$69 = JAM.call(d$$24.shift, d$$24, [], JAM.policy.p3);
      if (v3177) {
        var v4037 = b$$55;
        b$$55 = b$$55 - 1;
        v3177 = 0 < v4037;
      }
      var v1809 = v3177;
      for (;v1809;) {
        try {
          qb(a$$69);
        } catch (e$$19) {
          JAM.call(window.setTimeout, window, [rb, 0], JAM.policy.p3);
          throw e$$19;
        }
        var v3178 = a$$69 = JAM.call(d$$24.shift, d$$24, [], JAM.policy.p3);
        if (v3178) {
          var v4038 = b$$55;
          b$$55 = b$$55 - 1;
          v3178 = 0 < v4038;
        }
        v1809 = v3178;
      }
    }
    window.adsbygoogle = {push:qb};
    return;
  }
  function qb(a$$68) {
    var b$$54 = a$$68.element;
    var v1811 = a$$68.params;
    if (!v1811) {
      v1811 = {};
    }
    a$$68 = v1811;
    if (b$$54) {
      var v3180 = !mb(b$$54);
      if (v3180) {
        var v4551 = b$$54.id;
        if (v4551) {
          v4551 = pb(b$$54.id);
        }
        b$$54 = v4551;
        v3180 = !b$$54;
      }
      if (v3180) {
        throw Error("adsbygoogle: 'element' has already been filled.");
      }
      if (!("innerHTML" in b$$54)) {
        throw Error("adsbygoogle.push(): 'element' is not a good DOM element.");
      }
    } else {
      b$$54 = pb();
      if (!b$$54) {
        throw Error("adsbygoogle.push(): All ins elements in the DOM with class=adsbygoogle already have ads in them.");
      }
    }
    var c$$31 = window;
    JAM.call(b$$54.setAttribute, b$$54, ["data-adsbygoogle-status", "done"], JAM.policy.p3);
    ob(b$$54, a$$68, c$$31);
    return;
  }
  function pb(a$$67) {
    var b$$53 = JAM.call(document.getElementsByTagName, document, ["ins"], JAM.policy.p3);
    var c$$30 = 0;
    var d$$23 = b$$53[c$$30];
    var v1816 = c$$30 < b$$53.length;
    for (;v1816;) {
      var v3183 = mb(d$$23);
      if (v3183) {
        var v4040 = !a$$67;
        if (!v4040) {
          v4040 = d$$23.id == a$$67;
        }
        v3183 = v4040;
      }
      if (v3183) {
        return d$$23;
      }
      d$$23 = b$$53[c$$30 = c$$30 + 1];
      v1816 = c$$30 < b$$53.length;
    }
    return null;
  }
  function nb(a$$66, b$$52, c$$29) {
    var d$$22 = a$$66.attributes;
    var e$$18 = d$$22.length;
    var f$$9 = 0;
    var v1820 = f$$9 < e$$18;
    for (;v1820;) {
      var g$$7 = d$$22[f$$9];
      if (JAM.call(/data-/.test, /data-/, [g$$7.nodeName], JAM.policy.p3)) {
        var v3187 = g$$7.nodeName;
        var v1817 = JAM.call(v3187.replace, v3187, ["data", "google"], JAM.policy.p3);
        var l$$5 = JAM.call(v1817.replace, v1817, [/-/g, "_"], JAM.policy.p3);
        var v1818 = JAM.call(b$$52.hasOwnProperty, b$$52, [l$$5], JAM.policy.p3);
        if (!v1818) {
          introspect(JAM.policy.p2) {
            b$$52[l$$5] = g$$7.nodeValue;
          }
        }
      }
      f$$9++;
      v1820 = f$$9 < e$$18;
    }
    d$$22 = b$$52.google_ad_format;
    var v3189 = "auto" == d$$22;
    if (!v3189) {
      v3189 = JAM.call(/^((^|,)(horizontal|vertical|rectangle))+$/.test, /^((^|,)(horizontal|vertical|rectangle))+$/, [d$$22], JAM.policy.p3);
    }
    if (v3189) {
      d$$22 = a$$66.offsetWidth;
      e$$18 = b$$52.google_ad_format;
      c$$29 = lb(d$$22, e$$18, c$$29);
      if (!c$$29) {
        throw Error("Cannot find a responsive size for a container of width=" + d$$22 + "px and data-ad-format=" + e$$18);
      }
      b$$52.google_ad_height = c$$29.height;
      var v1823;
      var v4043 = 300 < d$$22;
      if (v4043) {
        v4043 = 300 < c$$29.height;
      }
      if (v4043) {
        v1823 = c$$29.width;
      } else {
        var v3191;
        if (1200 < d$$22) {
          v3191 = 1200;
        } else {
          v3191 = JAM.call(Math.round, Math, [d$$22], JAM.policy.p3);
        }
        v1823 = v3191;
      }
      b$$52.google_ad_width = v1823;
      a$$66.style.height = b$$52.google_ad_height + "px";
      delete b$$52.google_ad_format;
      b$$52.google_loader_features_used = 128;
    } else {
      var v1825;
      var v4045 = JAM.call(ib.test, ib, [a$$66.style.width], JAM.policy.p3);
      if (v4045) {
        v4045 = JAM.call(ib.test, ib, [a$$66.style.height], JAM.policy.p3);
      }
      if (v4045) {
        v1825 = jb(a$$66.style, b$$52);
      } else {
        var v4807;
        if (c$$29.getComputedStyle) {
          v4807 = JAM.call(c$$29.getComputedStyle, c$$29, [a$$66, null], JAM.policy.p3);
        } else {
          v4807 = a$$66.currentStyle;
        }
        c$$29 = v4807;
        a$$66.style.width = c$$29.width;
        a$$66.style.height = c$$29.height;
        v1825 = jb(c$$29, b$$52);
      }
      v1825;
    }
    return;
  }
  function ob(a$$65, b$$51, c$$28) {
    function v0() {
      fb(c$$28, b$$51, a$$65);
      return;
    }
    var v3196 = a$$65.style;
    if (v3196) {
      v3196 = "none" == a$$65.style.display;
    }
    var v1827 = v3196;
    if (v1827) {
      b$$51.google_dn = 1;
    }
    va(c$$28);
    nb(a$$65, b$$51, c$$28);
    var d$$21 = 0;
    var v1829 = d$$21 < $.length;
    for (;v1829;) {
      var v1828 = $[d$$21];
      var v3198 = b$$51[$[d$$21]];
      if (!v3198) {
        v3198 = c$$28[$[d$$21]];
      }
      introspect(JAM.policy.p2) {
        b$$51[v1828] = v3198;
      }
      d$$21++;
      v1829 = d$$21 < $.length;
    }
    b$$51.google_loader_used = "aa";
    var v3200 = d$$21 = b$$51.google_ad_output;
    if (v3200) {
      v3200 = "html" != d$$21;
    }
    if (v3200) {
      throw Error("No support for google_ad_output=" + d$$21);
    }
    K("aa::main", L, v0);
    return;
  }
  function mb(a$$64) {
    var v1832 = JAM.call(/(^| )adsbygoogle($| )/.test, /(^| )adsbygoogle($| )/, [a$$64.className], JAM.policy.p3);
    if (v1832) {
      v1832 = "done" != JAM.call(a$$64.getAttribute, a$$64, ["data-adsbygoogle-status"], JAM.policy.p3);
    }
    return v1832;
  }
  function kb(a$$63) {
    a$$63 = a$$63.document;
    var v1833 = a$$63.documentElement.clientWidth;
    if (!v1833) {
      v1833 = a$$63.body.clientWidth;
    }
    return v1833;
  }
  function lb(a$$61, b$$49, c$$27) {
    function v1(a$$62, b$$50) {
      var v1834 = a$$62.width - b$$50.width;
      if (!v1834) {
        v1834 = a$$62.height - b$$50.height;
      }
      return v1834;
    }
    JAM.call(Z.sort, Z, [v1], JAM.policy.p3);
    var v1835 = "auto" == b$$49;
    if (v1835) {
      var v3211;
      if (.25 > a$$61 / kb(c$$27)) {
        v3211 = "vertical";
      } else {
        v3211 = "horizontal,rectangle";
      }
      b$$49 = v3211;
    }
    c$$27 = Z.length;
    var v1837 = c$$27;
    c$$27 = c$$27 - 1;
    for (;v1837;) {
      var v3212 = Z[c$$27].width <= a$$61;
      if (v3212) {
        v3212 = -1 != JAM.call(b$$49.indexOf, b$$49, [Z[c$$27].format], JAM.policy.p3);
      }
      if (v3212) {
        return Z[c$$27];
      }
      v1837 = c$$27;
      c$$27 = c$$27 - 1;
    }
    return null;
  }
  function jb(a$$60, b$$48) {
    var c$$26 = ["width", "height"];
    var d$$20 = 0;
    var v1841 = d$$20 < c$$26.length;
    for (;v1841;) {
      var e$$17 = "google_ad_" + c$$26[d$$20];
      if (!JAM.call(b$$48.hasOwnProperty, b$$48, [e$$17], JAM.policy.p3)) {
        var f$$8 = JAM.call(ib.exec, ib, [a$$60[c$$26[d$$20]]], JAM.policy.p3);
        if (f$$8) {
          var v5106 = JAM.call(Math.round, Math, [f$$8[1]], JAM.policy.p3);
          introspect(JAM.policy.p2) {
            b$$48[e$$17] = v5106;
          }
        }
      }
      d$$20++;
      v1841 = d$$20 < c$$26.length;
    }
    return;
  }
  function hb(a$$59) {
    var v1842 = a$$59.data;
    var b$$47 = JAM.call(v1842.split, v1842, ["\n"], JAM.policy.p3);
    var c$$25 = {};
    var d$$19 = 0;
    var v1845 = d$$19 < b$$47.length;
    for (;v1845;) {
      var v1843 = b$$47[d$$19];
      var e$$16 = JAM.call(v1843.indexOf, v1843, ["="], JAM.policy.p3);
      var v1844 = -1 != e$$16;
      if (v1844) {
        var v4053 = b$$47[d$$19];
        var v3219 = JAM.call(v4053.substr, v4053, [0, e$$16], JAM.policy.p3);
        var v4054 = b$$47[d$$19];
        var v5107 = JAM.call(v4054.substr, v4054, [e$$16 + 1], JAM.policy.p3);
        introspect(JAM.policy.p2) {
          c$$25[v3219] = v5107;
        }
      }
      d$$19++;
      v1845 = d$$19 < b$$47.length;
    }
    b$$47 = c$$25[3];
    var v3221 = c$$25[1] == gb;
    if (v3221) {
      window.google_top_js_status = 4;
      var v4939 = a$$59.source == top;
      if (v4939) {
        v4939 = 0 == JAM.call(b$$47.indexOf, b$$47, [a$$59.origin], JAM.policy.p3);
      }
      var v4812 = v4939;
      if (v4812) {
        window.google_top_values = c$$25;
        window.google_top_js_status = 5;
      }
      v3221 = window.google_top_js_callbacks;
    }
    if (v3221) {
      a$$59 = 0;
      var v1847 = a$$59 < window.google_top_js_callbacks.length;
      for (;v1847;) {
        var v1846 = window.google_top_js_callbacks;
        JAM.call(v1846[a$$59], v1846, [], JAM.policy.p3);
        a$$59++;
        v1847 = a$$59 < window.google_top_js_callbacks.length;
      }
      window.google_top_js_callbacks.length = 0;
    }
    return;
  }
  function eb(a$$58, b$$46, c$$24, d$$18) {
    var e$$15 = "script";
    var f$$7 = b$$46.google_ad_width;
    var g$$6 = b$$46.google_ad_height;
    var l$$4 = {};
    db(l$$4, f$$7, g$$6, !0);
    JAM.set(l$$4, "onload", '"' + Ka + '"');
    d$$18 = JAM.call(d$$18, null, [a$$58, l$$4, b$$46], JAM.policy.p3);
    var v1852;
    var v4059 = window.google_override_format;
    if (!v4059) {
      var v4562 = !$a[window.google_ad_width + "x" + window.google_ad_height];
      if (v4562) {
        v4562 = "aa" == window.google_loader_used;
      }
      v4059 = v4562;
    }
    if (v4059) {
      v1852 = I(["c", "e"], na);
    } else {
      v1852 = null;
    }
    l$$4 = v1852;
    var h$$8 = b$$46.google_ad_output;
    var k$$2 = b$$46.google_ad_format;
    var v3226 = k$$2;
    if (!v3226) {
      var v4060 = "html" != h$$8;
      if (v4060) {
        v4060 = null != h$$8;
      }
      v3226 = v4060;
    }
    var v1853 = v3226;
    if (!v1853) {
      k$$2 = b$$46.google_ad_width + "x" + b$$46.google_ad_height;
      var v4064 = "e" == l$$4;
      if (v4064) {
        k$$2 = k$$2 + "_as";
      }
    }
    var v3228 = !b$$46.google_ad_slot;
    if (!v3228) {
      v3228 = b$$46.google_override_format;
    }
    var v1854 = v3228;
    if (!v1854) {
      var v3229 = !$a[b$$46.google_ad_width + "x" + b$$46.google_ad_height];
      if (v3229) {
        v3229 = "aa" == b$$46.google_loader_used;
      }
      v1854 = v3229;
    }
    h$$8 = v1854;
    var v1855;
    if (k$$2 && h$$8) {
      v1855 = JAM.call(k$$2.toLowerCase, k$$2, [], JAM.policy.p3);
    } else {
      v1855 = "";
    }
    k$$2 = v1855;
    b$$46.google_ad_format = k$$2;
    k$$2 = ya(c$$24, b$$46, !0);
    b$$46.google_ad_unit_key = k$$2;
    var v1857 = window;
    var v4069 = window.google_adk2_experiment;
    if (!v4069) {
      v4069 = I(["C", "E"], ma);
    }
    var v3232 = v4069;
    if (!v3232) {
      v3232 = "N";
    }
    k$$2 = v1857.google_adk2_experiment = v3232;
    var v1858;
    if ("E" == k$$2) {
      var v5108 = ya(c$$24, b$$46);
      v1858 = b$$46.google_ad_unit_key_2 = v5108;
    } else {
      var v3233 = "C" == k$$2;
      if (v3233) {
        v3233 = b$$46.google_ad_unit_key_2 = "ctrl";
      }
      v1858 = v3233;
    }
    v1858;
    c$$24 = Ha(b$$46);
    k$$2 = Ja(a$$58);
    h$$8 = a$$58.document;
    var v4071 = {visible:1, hidden:2, prerender:3, preview:4};
    var v4942 = h$$8.webkitVisibilityState;
    if (!v4942) {
      v4942 = h$$8.mozVisibilityState;
    }
    var v4817 = v4942;
    if (!v4817) {
      v4817 = h$$8.visibilityState;
    }
    var v4568 = v4817;
    if (!v4568) {
      v4568 = "";
    }
    var v3235 = v4071[v4568];
    if (!v3235) {
      v3235 = 0;
    }
    h$$8 = 3 == v3235;
    var v4074 = k$$2;
    if (v4074) {
      v4074 = !h$$8;
    }
    var v3236 = v4074;
    if (v3236) {
      v3236 = void 0 === a$$58.google_ad_handling_mode;
    }
    var v1860 = v3236;
    if (v1860) {
      var v3237 = I(["XN", "AZ", "S"], ka);
      if (!v3237) {
        v3237 = I(["EI"], la);
      }
      a$$58.google_ad_handling_mode = v3237;
    }
    var v1861;
    if (a$$58.google_ad_handling_mode) {
      v1861 = String(a$$58.google_ad_handling_mode);
    } else {
      v1861 = null;
    }
    k$$2 = v1861;
    var v4569 = Ja(a$$58);
    if (v4569) {
      v4569 = 1 == a$$58.google_unique_id;
    }
    var v4080 = v4569;
    if (v4080) {
      v4080 = "XN" != k$$2;
    }
    var v3240 = v4080;
    if (v3240) {
      v3240 = "S" != k$$2;
    }
    if (v3240) {
      h$$8 = "zrt_ads_frame" + a$$58.google_unique_id;
      var m$$2;
      m$$2 = b$$46.google_page_url;
      if (!m$$2) {
        r: {
          m$$2 = a$$58.document;
          var v1863 = f$$7;
          if (!v1863) {
            v1863 = a$$58.google_ad_width;
          }
          var q$$2 = v1863;
          var v1864 = g$$6;
          if (!v1864) {
            v1864 = a$$58.google_ad_height;
          }
          var x$$49 = v1864;
          if (a$$58.top == a$$58) {
            m$$2 = !1;
          } else {
            var B$$1 = m$$2.documentElement;
            if (q$$2 && x$$49) {
              var u$$1 = 1;
              var r$$1 = 1;
              var v1865;
              if (a$$58.innerHeight) {
                u$$1 = a$$58.innerWidth;
                v1865 = r$$1 = a$$58.innerHeight;
              } else {
                var v3244;
                var v4570 = B$$1;
                if (v4570) {
                  v4570 = B$$1.clientHeight;
                }
                if (v4570) {
                  u$$1 = B$$1.clientWidth;
                  v3244 = r$$1 = B$$1.clientHeight;
                } else {
                  var v4081 = m$$2.body;
                  if (v4081) {
                    u$$1 = m$$2.body.clientWidth;
                    v4081 = r$$1 = m$$2.body.clientHeight;
                  }
                  v3244 = v4081;
                }
                v1865 = v3244;
              }
              v1865;
              var v3246 = r$$1 > 2 * x$$49;
              if (!v3246) {
                v3246 = u$$1 > 2 * q$$2;
              }
              if (v3246) {
                m$$2 = !1;
                break r;
              }
            }
            m$$2 = !0;
          }
        }
        var v1869;
        if (m$$2) {
          v1869 = a$$58.document.referrer;
        } else {
          v1869 = a$$58.document.URL;
        }
        m$$2 = v1869;
      }
      m$$2 = encodeURIComponent(m$$2);
      q$$2 = null;
      var v4086 = "PC" == k$$2;
      if (!v4086) {
        v4086 = "EI" == k$$2;
      }
      var v3249 = v4086;
      if (!v3249) {
        v3249 = "AZ" == k$$2;
      }
      if (v3249) {
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
      var v1875 = A("doubleclick");
      var v4574;
      if (f$$7) {
        v4574 = "#" + encodeURIComponent(f$$7);
      } else {
        v4574 = "";
      }
      var v3252 = ["/pagead/html/r20131120/r20130906/zrt_lookup.html", v4574];
      f$$7 = C(v1875, JAM.call(v3252.join, v3252, [""], JAM.policy.p3));
      b$$46.src = f$$7;
      f$$7 = cb(b$$46);
    } else {
      f$$7 = null;
    }
    var v1878 = new Date;
    g$$6 = JAM.call(v1878.getTime, v1878, [], JAM.policy.p3);
    b$$46 = a$$58.google_top_experiment;
    h$$8 = a$$58.google_async_for_oa_experiment;
    m$$2 = a$$58.google_always_use_delayed_impressions_experiment;
    var v3253 = a$$58.google_unique_id;
    var v4090;
    if (b$$46) {
      v4090 = 'google_top_experiment="' + b$$46 + '";';
    } else {
      v4090 = "";
    }
    var v3254 = v4090;
    var v4091;
    if (k$$2) {
      v4091 = 'google_ad_handling_mode="' + k$$2 + '";';
    } else {
      v4091 = "";
    }
    var v3255 = v4091;
    var v4092;
    if (h$$8) {
      v4092 = 'google_async_for_oa_experiment="' + h$$8 + '";';
    } else {
      v4092 = "";
    }
    var v3256 = v4092;
    var v4093;
    if (m$$2) {
      v4093 = 'google_always_use_delayed_impressions_experiment="' + m$$2 + '";';
    } else {
      v4093 = "";
    }
    var v3257 = v4093;
    var v4094;
    if (l$$4) {
      v4094 = 'google_append_as_for_format_override="' + l$$4 + '";';
    } else {
      v4094 = "";
    }
    var v3258 = v4094;
    var v4095;
    if (g$$6 > v) {
      v4095 = g$$6 - v;
    } else {
      v4095 = 1;
    }
    var v1879 = ["<!doctype html><html><body>", f$$7, "<", e$$15, ">", c$$24, "google_show_ads_impl=true;google_unique_id=", v3253, ';google_async_iframe_id="', d$$18, '";google_start_time=', v, ";", v3254, v3255, v3256, v3257, v3258, "google_bpp=", v4095, ";google_async_rrc=0;</", e$$15, ">", ab(), "</body></html>"];
    l$$4 = JAM.call(v1879.join, v1879, [""], JAM.policy.p3);
    var v3261;
    var v4581 = a$$58.document;
    if (JAM.call(v4581.getElementById, v4581, [d$$18], JAM.policy.p3)) {
      v3261 = Ya;
    } else {
      v3261 = Za;
    }
    JAM.call(v3261, null, [bb(a$$58, d$$18, l$$4, !0)], JAM.policy.p3);
    return;
  }
  function fb(a$$56, b$$44, c$$23) {
    function v2(a$$57, b$$45, f$$6) {
      var g$$5 = b$$45.id;
      var l$$3 = 0;
      var v3263 = !g$$5;
      if (!v3263) {
        var v4097 = a$$57.document;
        v3263 = JAM.call(v4097.getElementById, v4097, [g$$5], JAM.policy.p3);
      }
      var v1883 = v3263;
      for (;v1883;) {
        var v1882 = l$$3;
        l$$3 = l$$3 + 1;
        g$$5 = "aswift_" + v1882;
        var v3264 = !g$$5;
        if (!v3264) {
          var v4099 = a$$57.document;
          v3264 = JAM.call(v4099.getElementById, v4099, [g$$5], JAM.policy.p3);
        }
        v1883 = v3264;
      }
      b$$45.id = g$$5;
      b$$45.name = g$$5;
      a$$57 = Number(f$$6.google_ad_width);
      g$$5 = Number(f$$6.google_ad_height);
      f$$6 = ["<iframe"];
      var h$$7;
      for (h$$7 in b$$45) {
        var v1886 = JAM.call(b$$45.hasOwnProperty, b$$45, [h$$7], JAM.policy.p3);
        if (v1886) {
          ua(f$$6, h$$7 + "=" + b$$45[h$$7]);
        }
      }
      JAM.call(f$$6.push, f$$6, ['style="left:0;position:absolute;top:0;"'], JAM.policy.p3);
      JAM.call(f$$6.push, f$$6, ["></iframe>"], JAM.policy.p3);
      h$$7 = "border:none;height:" + g$$5 + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + a$$57 + "px;background-color:transparent";
      var v1888 = c$$23;
      var v3267 = ['<ins style="display:inline-table;', h$$7, '"><ins id="', b$$45.id + "_anchor", '" style="display:block;', h$$7, '">', JAM.call(f$$6.join, f$$6, [" "], JAM.policy.p3), "</ins></ins>"];
      var v5109 = JAM.call(v3267.join, v3267, [""], JAM.policy.p3);
      JAM.set(v1888, "innerHTML", v5109);
      return b$$45.id;
    }
    eb(a$$56, b$$44, c$$23, v2);
    return;
  }
  function db(a$$55, b$$43, c$$22, d$$17) {
    var v1889;
    if (d$$17) {
      v1889 = '"';
    } else {
      v1889 = "";
    }
    d$$17 = v1889;
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
    return;
  }
  function cb(a$$53) {
    function v3(a$$54, d$$16) {
      var v1895 = null != a$$54;
      if (v1895) {
        JAM.call(b$$42.push, b$$42, [" " + d$$16 + '="' + a$$54 + '"'], JAM.policy.p3);
      }
      return;
    }
    var b$$42 = ["<iframe"];
    G(a$$53, v3);
    JAM.call(b$$42.push, b$$42, ["></iframe>"], JAM.policy.p3);
    return JAM.call(b$$42.join, b$$42, [""], JAM.policy.p3);
  }
  function bb(a$$52, b$$41, c$$21, d$$15) {
    function v4() {
      var e$$13 = !1;
      if (d$$15) {
        var v3269 = Xa();
        JAM.call(v3269.al, v3269, [3E4], JAM.policy.p3);
      }
      try {
        var v4584 = a$$52.document;
        if (J(JAM.call(v4584.getElementById, v4584, [b$$41], JAM.policy.p3).contentWindow)) {
          var v3271 = a$$52.document;
          var f$$5 = JAM.call(v3271.getElementById, v3271, [b$$41], JAM.policy.p3).contentWindow;
          var g$$4 = f$$5.document;
          var v3272 = g$$4.body;
          if (v3272) {
            v3272 = g$$4.body.firstChild;
          }
          var v1897 = v3272;
          if (!v1897) {
            JAM.call(g$$4.open, g$$4, [], JAM.policy.p3);
            f$$5.google_async_iframe_close = !0;
            JAM.call(g$$4.write, g$$4, [c$$21], JAM.policy.p3);
          }
        } else {
          var v3274 = a$$52.document;
          var l$$2 = JAM.call(v3274.getElementById, v3274, [b$$41], JAM.policy.p3).contentWindow;
          var h$$6;
          f$$5 = c$$21;
          f$$5 = String(f$$5);
          if (f$$5.quote) {
            h$$6 = JAM.call(f$$5.quote, f$$5, [], JAM.policy.p3);
          } else {
            g$$4 = ['"'];
            var k$$1 = 0;
            var v1906 = k$$1 < f$$5.length;
            for (;v1906;) {
              var m$$1 = JAM.call(f$$5.charAt, f$$5, [k$$1], JAM.policy.p3);
              var q$$1 = JAM.call(m$$1.charCodeAt, m$$1, [0], JAM.policy.p3);
              var x$$48 = g$$4;
              var B = k$$1 + 1;
              var u;
              if (!(u = E[m$$1])) {
                var r;
                var v3277 = 31 < q$$1;
                if (v3277) {
                  v3277 = 127 > q$$1;
                }
                if (v3277) {
                  r = m$$1;
                } else {
                  var t = m$$1;
                  if (t in F) {
                    r = F[t];
                  } else {
                    if (t in E) {
                      introspect(JAM.policy.p2) {
                        r = F[t] = E[t];
                      }
                    } else {
                      var s$$2 = t;
                      var y$$30 = JAM.call(t.charCodeAt, t, [0], JAM.policy.p3);
                      var v3278 = 31 < y$$30;
                      if (v3278) {
                        v3278 = 127 > y$$30;
                      }
                      if (v3278) {
                        s$$2 = t;
                      } else {
                        if (256 > y$$30) {
                          s$$2 = "\\x";
                          var v4109 = 16 > y$$30;
                          if (!v4109) {
                            v4109 = 256 < y$$30;
                          }
                          if (v4109) {
                            s$$2 = s$$2 + "0";
                          }
                        } else {
                          s$$2 = "\\u";
                          var v3279 = 4096 > y$$30;
                          if (v3279) {
                            s$$2 = s$$2 + "0";
                          }
                        }
                        var v4110 = JAM.call(y$$30.toString, y$$30, [16], JAM.policy.p3);
                        s$$2 = s$$2 + JAM.call(v4110.toUpperCase, v4110, [], JAM.policy.p3);
                      }
                      introspect(JAM.policy.p2) {
                        r = F[t] = s$$2;
                      }
                    }
                  }
                }
                u = r;
              }
              x$$48[B] = u;
              k$$1++;
              v1906 = k$$1 < f$$5.length;
            }
            JAM.call(g$$4.push, g$$4, ['"'], JAM.policy.p3);
            h$$6 = JAM.call(g$$4.join, g$$4, [""], JAM.policy.p3);
          }
          var v1908 = l$$2.location;
          JAM.call(v1908.replace, v1908, ["javascript:" + h$$6], JAM.policy.p3);
        }
        e$$13 = !0;
      } catch (sb) {
        l$$2 = Da().google_jobrunner;
        var v3283 = Wa(l$$2);
        if (v3283) {
          JAM.call(l$$2.rl, l$$2, [], JAM.policy.p3);
        }
      }
      if (e$$13) {
        e$$13 = La("google_async_rrc", c$$21);
        var v4111 = new Q(a$$52);
        JAM.call(v4111.set, v4111, [b$$41, bb(a$$52, b$$41, e$$13, !1)], JAM.policy.p3);
      }
      return;
    }
    return v4;
  }
  function ab() {
    var a$$51 = "script";
    var v1911 = ["<", a$$51, ' src="', C(A("googlesyndication"), "/pagead/js/r20131120/r20130906/show_ads_impl.js", ""), '"></', a$$51, ">"];
    return JAM.call(v1911.join, v1911, [""], JAM.policy.p3);
  }
  function Za(a$$50, b$$40) {
    var v1912 = Xa();
    JAM.call(v1912.nqa, v1912, [a$$50, b$$40], JAM.policy.p3);
    return;
  }
  function Ya(a$$49, b$$39) {
    var v1913 = Xa();
    JAM.call(v1913.nq, v1913, [a$$49, b$$39], JAM.policy.p3);
    return;
  }
  function Xa() {
    var v3285 = X;
    if (v3285) {
      v3285 = Va(X);
    }
    if (v3285) {
      return X;
    }
    var a$$48 = Da();
    var b$$38 = a$$48.google_jobrunner;
    var v1915;
    if (Wa(b$$38)) {
      v1915 = X = b$$38;
    } else {
      v1915 = a$$48.google_jobrunner = X = new Y(a$$48);
    }
    return v1915;
  }
  function Wa(a$$47) {
    var v4944 = !!a$$47;
    if (v4944) {
      var v4986 = "object" == typeof a$$47;
      if (!v4986) {
        v4986 = "function" == typeof a$$47;
      }
      v4944 = v4986;
    }
    var v4824 = v4944;
    if (v4824) {
      v4824 = Va(a$$47);
    }
    var v4587 = v4824;
    if (v4587) {
      v4587 = H(a$$47.nq);
    }
    var v4114 = v4587;
    if (v4114) {
      v4114 = H(a$$47.nqa);
    }
    var v3287 = v4114;
    if (v3287) {
      v3287 = H(a$$47.al);
    }
    var v1916 = v3287;
    if (v1916) {
      v1916 = H(a$$47.rl);
    }
    return v1916;
  }
  function Va(a$$46) {
    try {
      return JAM.call(a$$46.sz, a$$46, [], JAM.policy.p3);
    } catch (b$$37) {
      return !1;
    }
    return;
  }
  function Ua(a$$43) {
    var b$$35 = M("sjr::tryrun", JAM.call(p, null, [a$$43.m, a$$43], JAM.policy.p3));
    var v1918 = a$$43.b;
    JAM.call(v1918.setTimeout, v1918, [b$$35, 0], JAM.policy.p3);
    return;
  }
  function Ta(a$$39, b$$31) {
    this.k = a$$39;
    this.h = b$$31;
    return;
  }
  function Y(a$$38) {
    this.c = [];
    this.b = a$$38 || window;
    this.a = 0;
    this.d = null;
    return;
  }
  function La(a$$37, b$$30) {
    var c$$20 = RegExp("\\b" + a$$37 + "=(\\d+)");
    var d$$14 = JAM.call(c$$20.exec, c$$20, [b$$30], JAM.policy.p3);
    if (d$$14) {
      var v4116 = a$$37 + "=";
      var v4589 = +d$$14[1] + 1;
      if (!v4589) {
        v4589 = 1;
      }
      b$$30 = JAM.call(b$$30.replace, b$$30, [c$$20, v4116 + v4589], JAM.policy.p3);
    }
    return b$$30;
  }
  function Q(a$$33) {
    this.b = a$$33;
    var v1920 = a$$33.google_iframe_oncopy;
    if (!v1920) {
      a$$33.google_iframe_oncopy = {handlers:{}, upd:JAM.call(p, null, [this.l, this], JAM.policy.p3)};
    }
    this.i = a$$33.google_iframe_oncopy;
    return;
  }
  function Ja(a$$32) {
    try {
      var b$$26 = JAM.call(Ia.test, Ia, [a$$32.location.host], JAM.policy.p3);
      var v4590 = !a$$32.postMessage;
      if (!v4590) {
        v4590 = !a$$32.localStorage;
      }
      var v4119 = v4590;
      if (!v4119) {
        v4119 = !a$$32.JSON;
      }
      var v3295 = v4119;
      if (!v3295) {
        v3295 = b$$26;
      }
      return !v3295;
    } catch (c$$18) {
      return !1;
    }
    return;
  }
  function Ha(a$$30) {
    function v5(a$$31, d$$12) {
      if (null != a$$31) {
        var e$$12;
        try {
          var f$$4 = [];
          O(new Ea, a$$31, f$$4);
          e$$12 = JAM.call(f$$4.join, f$$4, [""], JAM.policy.p3);
        } catch (g$$3) {
        }
        if (e$$12) {
          ua(b$$25, d$$12, "=", e$$12, ";");
        }
      }
      return;
    }
    var v1925 = a$$30.google_page_url;
    if (v1925) {
      var v3296 = a$$30;
      var v5110 = String(a$$30.google_page_url);
      v3296.google_page_url = v5110;
    }
    var b$$25 = [];
    G(a$$30, v5);
    return JAM.call(b$$25.join, b$$25, [""], JAM.policy.p3);
  }
  function Fa(a$$28, b$$23) {
    function v6(a$$29) {
      if (a$$29 in P) {
        return P[a$$29];
      }
      var b$$24 = JAM.call(a$$29.charCodeAt, a$$29, [0], JAM.policy.p3);
      var e$$11 = "\\u";
      var v1927;
      if (16 > b$$24) {
        v1927 = e$$11 = e$$11 + "000";
      } else {
        var v3297;
        if (256 > b$$24) {
          v3297 = e$$11 = e$$11 + "00";
        } else {
          var v4122 = 4096 > b$$24;
          if (v4122) {
            v4122 = e$$11 = e$$11 + "0";
          }
          v3297 = v4122;
        }
        v1927 = v3297;
      }
      v1927;
      var v1928 = P;
      var v3299 = JAM.call(b$$24.toString, b$$24, [16], JAM.policy.p3);
      introspect(JAM.policy.p2) {
        return v1928[a$$29] = e$$11 + v3299;
      }
    }
    JAM.call(b$$23.push, b$$23, ['"'], JAM.policy.p3);
    JAM.call(b$$23.push, b$$23, [JAM.call(a$$28.replace, a$$28, [Ga, v6], JAM.policy.p3)], JAM.policy.p3);
    JAM.call(b$$23.push, b$$23, ['"'], JAM.policy.p3);
    return;
  }
  function O(a$$27, b$$22, c$$17) {
    switch(typeof b$$22) {
      case "string":
        Fa(b$$22, c$$17);
        break;
      case "number":
        var v3300;
        var v4593 = isFinite(b$$22);
        if (v4593) {
          v4593 = !isNaN(b$$22);
        }
        if (v4593) {
          v3300 = b$$22;
        } else {
          v3300 = "null";
        }
        JAM.call(c$$17.push, c$$17, [v3300], JAM.policy.p3);
        break;
      case "boolean":
        JAM.call(c$$17.push, c$$17, [b$$22], JAM.policy.p3);
        break;
      case "undefined":
        JAM.call(c$$17.push, c$$17, ["null"], JAM.policy.p3);
        break;
      case "object":
        if (null == b$$22) {
          JAM.call(c$$17.push, c$$17, ["null"], JAM.policy.p3);
          break;
        }
        if (b$$22 instanceof Array) {
          var d$$11 = b$$22.length;
          JAM.call(c$$17.push, c$$17, ["["], JAM.policy.p3);
          var e$$10 = "";
          var f$$3 = 0;
          var v1932 = f$$3 < d$$11;
          for (;v1932;) {
            JAM.call(c$$17.push, c$$17, [e$$10], JAM.policy.p3);
            O(a$$27, b$$22[f$$3], c$$17);
            e$$10 = ",";
            f$$3++;
            v1932 = f$$3 < d$$11;
          }
          JAM.call(c$$17.push, c$$17, ["]"], JAM.policy.p3);
          break;
        }
        JAM.call(c$$17.push, c$$17, ["{"], JAM.policy.p3);
        d$$11 = "";
        for (e$$10 in b$$22) {
          var v1934 = JAM.call(b$$22.hasOwnProperty, b$$22, [e$$10], JAM.policy.p3);
          if (v1934) {
            f$$3 = b$$22[e$$10];
            var v4126 = "function" != typeof f$$3;
            if (v4126) {
              JAM.call(c$$17.push, c$$17, [d$$11], JAM.policy.p3);
              Fa(e$$10, c$$17);
              JAM.call(c$$17.push, c$$17, [":"], JAM.policy.p3);
              O(a$$27, f$$3, c$$17);
              d$$11 = ",";
            }
          }
        }
        JAM.call(c$$17.push, c$$17, ["}"], JAM.policy.p3);
        break;
      case "function":
        break;
      default:
        throw Error("Unknown type: " + typeof b$$22);;
    }
    return;
  }
  function Ea() {
    return;
  }
  function Da() {
    if (!N) {
      var a$$26 = window;
      var b$$21 = a$$26;
      var c$$16 = 0;
      var v1938 = a$$26 != a$$26.parent;
      for (;v1938;) {
        a$$26 = a$$26.parent;
        c$$16++;
        if (J(a$$26)) {
          b$$21 = a$$26;
        } else {
          break;
        }
        v1938 = a$$26 != a$$26.parent;
      }
      N = b$$21;
    }
    return N;
  }
  function Ca(a$$24) {
    function v7(a$$25, d$$10) {
      var v3304 = 0 === a$$25;
      if (!v3304) {
        v3304 = a$$25;
      }
      if (v3304) {
        var v3305 = b$$20;
        var v4128 = "&" + d$$10 + "=";
        var v4596;
        if ("function" == typeof encodeURIComponent) {
          v4596 = encodeURIComponent(a$$25);
        } else {
          v4596 = escape(a$$25);
        }
        b$$20 = v3305 + (v4128 + v4596);
      }
      return;
    }
    var b$$20 = "";
    G(a$$24, v7);
    return b$$20;
  }
  function M(a$$23, b$$19) {
    return da(K, a$$23, L, b$$19, void 0);
  }
  function Ba(a$$21) {
    function v8(a$$22, d$$9) {
      introspect(JAM.policy.p2) {
        b$$18[d$$9] = D[a$$22];
      }
      return;
    }
    var b$$18 = a$$21 || {};
    G(za, v8);
    return;
  }
  function Aa(a$$20) {
    if (.01 > JAM.call(Math.random, Math, [], JAM.policy.p3)) {
      a$$20 = "/pagead/gen_204?id=jserror" + Ca(a$$20);
      a$$20 = C(A("googlesyndication"), a$$20);
      a$$20 = JAM.call(a$$20.substring, a$$20, [0, 2E3], JAM.policy.p3);
      var v1944 = D.google_image_requests;
      if (!v1944) {
        D.google_image_requests = [];
      }
      var v1945 = D.document;
      var b$$17 = JAM.call(v1945.createElement, v1945, ["img"], JAM.policy.p3);
      b$$17.src = a$$20;
      var v1946 = D.google_image_requests;
      JAM.call(v1946.push, v1946, [b$$17], JAM.policy.p3);
    }
    return;
  }
  function L(a$$19, b$$16, c$$15, d$$8, e$$9) {
    var v3309;
    if (fa) {
      v3309 = 1;
    } else {
      v3309 = 0;
    }
    var v1948 = v3309;
    var v3310;
    if (ga) {
      v3310 = 1;
    } else {
      v3310 = 0;
    }
    var v1949 = v3310;
    var v1950 = JAM.call(b$$16.substring, b$$16, [0, 512], JAM.policy.p3);
    var v3311 = e$$9;
    if (v3311) {
      v3311 = JAM.call(e$$9.substring, e$$9, [0, 40], JAM.policy.p3);
    }
    var v1951 = v3311;
    var v1952 = JAM.call(d$$8.toString, d$$8, [], JAM.policy.p3);
    var v3312 = pa.URL;
    var v1953 = JAM.call(v3312.substring, v3312, [0, 512], JAM.policy.p3);
    var v3313 = pa.referrer;
    a$$19 = {jscb:v1948, jscd:v1949, context:a$$19, msg:v1950, eid:v1951, file:c$$15, line:v1952, url:v1953, ref:JAM.call(v3313.substring, v3313, [0, 512], JAM.policy.p3)};
    Ba(a$$19);
    Aa(a$$19);
    return !ha;
  }
  function K(a$$18, b$$15, c$$14, d$$7) {
    try {
      JAM.call(c$$14, null, [], JAM.policy.p3);
    } catch (e$$8) {
      c$$14 = !ha;
      try {
        var f$$2 = JAM.call(e$$8.toString, e$$8, [], JAM.policy.p3);
        var v3314 = e$$8.name;
        if (v3314) {
          v3314 = -1 == JAM.call(f$$2.indexOf, f$$2, [e$$8.name], JAM.policy.p3);
        }
        var v1955 = v3314;
        if (v1955) {
          f$$2 = f$$2 + (": " + e$$8.name);
        }
        var v3315 = e$$8.message;
        if (v3315) {
          v3315 = -1 == JAM.call(f$$2.indexOf, f$$2, [e$$8.message], JAM.policy.p3);
        }
        var v1956 = v3315;
        if (v1956) {
          f$$2 = f$$2 + (": " + e$$8.message);
        }
        if (e$$8.stack) {
          var g$$2 = e$$8.stack;
          var l$$1 = f$$2;
          try {
            var v1957 = -1 == JAM.call(g$$2.indexOf, g$$2, [l$$1], JAM.policy.p3);
            if (v1957) {
              g$$2 = l$$1 + "\n" + g$$2;
            }
            var h$$5;
            var v1958 = g$$2 != h$$5;
            for (;v1958;) {
              h$$5 = g$$2;
              g$$2 = JAM.call(g$$2.replace, g$$2, [/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1"], JAM.policy.p3);
              v1958 = g$$2 != h$$5;
            }
            f$$2 = JAM.call(g$$2.replace, g$$2, [/\n */g, "\n"], JAM.policy.p3);
          } catch (k) {
            f$$2 = l$$1;
          }
        }
        g$$2 = "";
        var v1960 = e$$8.fileName;
        if (v1960) {
          g$$2 = e$$8.fileName;
        }
        h$$5 = -1;
        var v1961 = e$$8.lineNumber;
        if (v1961) {
          h$$5 = e$$8.lineNumber;
        }
        var m;
        t: {
          try {
            var v1962;
            if (d$$7) {
              v1962 = JAM.call(d$$7, null, [], JAM.policy.p3);
            } else {
              v1962 = "";
            }
            m = v1962;
            break t;
          } catch (q) {
          }
          m = "";
        }
        c$$14 = JAM.call(b$$15, null, [a$$18, f$$2, g$$2, h$$5, m], JAM.policy.p3);
      } catch (x$$47) {
        var v4134 = JAM.call(x$$47.toString, x$$47, [], JAM.policy.p3) + "\n";
        var v4602 = x$$47.stack;
        if (!v4602) {
          v4602 = "";
        }
        Aa({context:"protectAndRun", msg:v4134 + v4602});
      }
      if (!c$$14) {
        throw e$$8;
      }
    }
    return;
  }
  function J(a$$17) {
    try {
      var v1965 = !!a$$17.location.href;
      if (!v1965) {
        v1965 = "" === a$$17.location.href;
      }
      return v1965;
    } catch (b$$14) {
      return !1;
    }
    return;
  }
  function ya(a$$16, b$$13, c$$13) {
    b$$13 = [b$$13.google_ad_slot, b$$13.google_ad_format, b$$13.google_ad_type, b$$13.google_ad_width, b$$13.google_ad_height];
    if (c$$13) {
      c$$13 = [];
      var d$$6 = 0;
      var v3322 = a$$16;
      if (v3322) {
        v3322 = 25 > d$$6;
      }
      var v1972 = v3322;
      for (;v1972;) {
        var v4138 = 9 != a$$16.nodeType;
        if (v4138) {
          v4138 = a$$16.id;
        }
        var v3323 = v4138;
        if (!v3323) {
          v3323 = "";
        }
        JAM.call(c$$13.push, c$$13, [v3323], JAM.policy.p3);
        a$$16 = a$$16.parentNode;
        ++d$$6;
        var v3324 = a$$16;
        if (v3324) {
          v3324 = 25 > d$$6;
        }
        v1972 = v3324;
      }
      var v1973 = a$$16 = JAM.call(c$$13.join, c$$13, [], JAM.policy.p3);
      if (v1973) {
        JAM.call(b$$13.push, b$$13, [a$$16], JAM.policy.p3);
      }
    } else {
      JAM.call(b$$13.push, b$$13, [wa(a$$16)], JAM.policy.p3);
      JAM.call(b$$13.push, b$$13, [xa()], JAM.policy.p3);
    }
    b$$13 = JAM.call(b$$13.join, b$$13, [":"], JAM.policy.p3);
    a$$16 = b$$13.length;
    if (0 == a$$16) {
      b$$13 = 0;
    } else {
      c$$13 = 305419896;
      d$$6 = 0;
      var v1974 = d$$6 < a$$16;
      for (;v1974;) {
        c$$13 = c$$13 ^ (c$$13 << 5) + (c$$13 >> 2) + JAM.call(b$$13.charCodeAt, b$$13, [d$$6], JAM.policy.p3) & 4294967295;
        d$$6++;
        v1974 = d$$6 < a$$16;
      }
      var v1975;
      if (0 < c$$13) {
        v1975 = c$$13;
      } else {
        v1975 = 4294967296 + c$$13;
      }
      b$$13 = v1975;
    }
    return JAM.call(b$$13.toString, b$$13, [], JAM.policy.p3);
  }
  function xa() {
    var a$$15 = D;
    var b$$12 = [];
    if (a$$15) {
      try {
        var c$$12 = a$$15.parent;
        var d$$5 = 0;
        var v4141 = c$$12;
        if (v4141) {
          v4141 = c$$12 != a$$15;
        }
        var v3329 = v4141;
        if (v3329) {
          v3329 = 25 > d$$5;
        }
        var v1979 = v3329;
        for (;v1979;) {
          var e$$7 = c$$12.frames;
          var f$$1 = 0;
          var v1978 = f$$1 < e$$7.length;
          for (;v1978;) {
            if (a$$15 == e$$7[f$$1]) {
              JAM.call(b$$12.push, b$$12, [f$$1], JAM.policy.p3);
              break;
            }
            ++f$$1;
            v1978 = f$$1 < e$$7.length;
          }
          a$$15 = c$$12;
          c$$12 = a$$15.parent;
          ++d$$5;
          var v4142 = c$$12;
          if (v4142) {
            v4142 = c$$12 != a$$15;
          }
          var v3333 = v4142;
          if (v3333) {
            v3333 = 25 > d$$5;
          }
          v1979 = v3333;
        }
      } catch (g$$1) {
      }
    }
    return JAM.call(b$$12.join, b$$12, [], JAM.policy.p3);
  }
  function wa(a$$14) {
    var b$$11 = [];
    var c$$11 = 0;
    var v3334 = a$$14;
    if (v3334) {
      v3334 = 25 > c$$11;
    }
    var v1987 = v3334;
    for (;v1987;) {
      var v1980 = 9 != a$$14.nodeType;
      if (v1980) {
        v1980 = a$$14.id;
      }
      var d$$4 = v1980;
      var v1981;
      if (d$$4) {
        v1981 = "/" + d$$4;
      } else {
        v1981 = "";
      }
      d$$4 = v1981;
      var e$$6;
      t: {
        var f = a$$14.parentElement;
        var v1982 = a$$14.nodeName;
        e$$6 = JAM.call(v1982.toLowerCase, v1982, [], JAM.policy.p3);
        if (f) {
          f = f.childNodes;
          var g = 0;
          var l = 0;
          var v1985 = l < f.length;
          for (;v1985;) {
            var h$$4 = f[l];
            var v3337 = h$$4.nodeName;
            if (v3337) {
              var v4607 = h$$4.nodeName;
              v3337 = JAM.call(v4607.toLowerCase, v4607, [], JAM.policy.p3) == e$$6;
            }
            if (v3337) {
              if (a$$14 == h$$4) {
                e$$6 = "." + g;
                break t;
              }
              ++g;
            }
            ++l;
            v1985 = l < f.length;
          }
        }
        e$$6 = "";
      }
      var v4608 = a$$14.nodeName;
      if (v4608) {
        var v4836 = a$$14.nodeName;
        v4608 = JAM.call(v4836.toLowerCase, v4836, [], JAM.policy.p3);
      }
      JAM.call(b$$11.push, b$$11, [v4608 + d$$4 + e$$6], JAM.policy.p3);
      a$$14 = a$$14.parentElement;
      ++c$$11;
      var v3340 = a$$14;
      if (v3340) {
        v3340 = 25 > c$$11;
      }
      v1987 = v3340;
    }
    return JAM.call(b$$11.join, b$$11, [], JAM.policy.p3);
  }
  function va(a$$13) {
    var v1988;
    if (a$$13.google_unique_id) {
      v1988 = a$$13.google_unique_id = a$$13.google_unique_id + 1;
    } else {
      v1988 = a$$13.google_unique_id = 1;
    }
    v1988;
    return;
  }
  function I(a$$12, b$$10) {
    if (!(1E-4 > JAM.call(Math.random, Math, [], JAM.policy.p3))) {
      var c$$10 = JAM.call(Math.random, Math, [], JAM.policy.p3);
      if (c$$10 < b$$10) {
        try {
          var d$$3 = new Uint16Array(1);
          var v1989 = window.crypto;
          JAM.call(v1989.getRandomValues, v1989, [d$$3], JAM.policy.p3);
          c$$10 = d$$3[0] / 65536;
        } catch (e$$5) {
          c$$10 = JAM.call(Math.random, Math, [], JAM.policy.p3);
        }
        return a$$12[JAM.call(Math.floor, Math, [c$$10 * a$$12.length], JAM.policy.p3)];
      }
    }
    return null;
  }
  function ua(a$$11, b$$9) {
    if (!(2 > arguments.length)) {
      var c$$9 = 1;
      var d$$2 = arguments.length;
      var v1995 = c$$9 < d$$2;
      for (;v1995;) {
        JAM.call(a$$11.push, a$$11, [arguments[c$$9]], JAM.policy.p3);
        ++c$$9;
        v1995 = c$$9 < d$$2;
      }
    }
    return;
  }
  function H(a$$10) {
    var v3345 = !!a$$10;
    if (v3345) {
      v3345 = "function" == typeof a$$10;
    }
    var v1997 = v3345;
    if (v1997) {
      v1997 = !!a$$10.call;
    }
    return v1997;
  }
  function G(a$$9, b$$8) {
    var c$$8;
    for (c$$8 in a$$9) {
      var v3347 = Object.prototype.hasOwnProperty;
      var v1998 = JAM.call(v3347.call, v3347, [a$$9, c$$8], JAM.policy.p3);
      if (v1998) {
        JAM.call(b$$8.call, b$$8, [null, a$$9[c$$8], c$$8, a$$9], JAM.policy.p3);
      }
    }
    return;
  }
  function C(a$$8, b$$7, c$$7) {
    if (!c$$7) {
      var v3349;
      if (ia) {
        v3349 = "https";
      } else {
        v3349 = "http";
      }
      c$$7 = v3349;
    }
    var v1999 = [c$$7, "://", a$$8, b$$7];
    return JAM.call(v1999.join, v1999, [""], JAM.policy.p3);
  }
  function A(b$$6) {
    var a$$7 = "";
    if (!a$$7) {
      return b$$6;
    }
    var c$$6 = JAM.call(a$$7.match, a$$7, [ea], JAM.policy.p3);
    var v2001;
    if (c$$6) {
      v2001 = c$$6[0];
    } else {
      v2001 = b$$6;
    }
    return v2001;
  }
  function z$$2() {
    var a$$6 = "false";
    var v2002;
    if (JAM.call(/^true$/.test, /^true$/, [a$$6], JAM.policy.p3)) {
      v2002 = !0;
    } else {
      v2002 = !1;
    }
    return v2002;
  }
  function w$$5(a$$5) {
    a$$5 = parseFloat(a$$5);
    var v2003;
    var v4609 = isNaN(a$$5);
    if (!v4609) {
      v4609 = 1 < a$$5;
    }
    var v4153 = v4609;
    if (!v4153) {
      v4153 = 0 > a$$5;
    }
    if (v4153) {
      v2003 = 0;
    } else {
      v2003 = a$$5;
    }
    return v2003;
  }
  function da(a$$4, b$$4) {
    function v9() {
      var b$$5 = JAM.call(c$$5.slice, c$$5, [], JAM.policy.p3);
      var v2004 = b$$5.push;
      JAM.call(v2004.apply, v2004, [b$$5, arguments], JAM.policy.p3);
      return JAM.call(a$$4.apply, a$$4, [this, b$$5], JAM.policy.p3);
    }
    var v2005 = Array.prototype.slice;
    var c$$5 = JAM.call(v2005.call, v2005, [arguments, 1], JAM.policy.p3);
    return v9;
  }
  function p(a$$3, b$$3, c$$4) {
    var v2006;
    var v4154 = Function.prototype.bind;
    if (v4154) {
      var v4947 = Function.prototype.bind;
      var v4838 = JAM.call(v4947.toString, v4947, [], JAM.policy.p3);
      v4154 = -1 != JAM.call(v4838.indexOf, v4838, ["native code"], JAM.policy.p3);
    }
    if (v4154) {
      v2006 = ba;
    } else {
      v2006 = ca;
    }
    p = v2006;
    return JAM.call(p.apply, p, [null, arguments], JAM.policy.p3);
  }
  function ca(a$$2, b$$2, c$$2) {
    function v11() {
      return JAM.call(a$$2.apply, a$$2, [b$$2, arguments], JAM.policy.p3);
    }
    function v10() {
      var v2007 = Array.prototype.slice;
      var c$$3 = JAM.call(v2007.call, v2007, [arguments], JAM.policy.p3);
      var v2008 = Array.prototype.unshift;
      JAM.call(v2008.apply, v2008, [c$$3, d$$1], JAM.policy.p3);
      return JAM.call(a$$2.apply, a$$2, [b$$2, c$$3], JAM.policy.p3);
    }
    if (!a$$2) {
      throw Error();
    }
    if (2 < arguments.length) {
      var v2010 = Array.prototype.slice;
      var d$$1 = JAM.call(v2010.call, v2010, [arguments, 2], JAM.policy.p3);
      return v10;
    }
    return v11;
  }
  function ba(a$$1, b$$1, c$$1) {
    var v2012 = a$$1.call;
    return JAM.call(v2012.apply, v2012, [a$$1.bind, arguments], JAM.policy.p3);
  }
  function aa(a, b) {
    var c = JAM.call(a.split, a, ["."], JAM.policy.p3);
    var d = n$$1;
    var v3359 = c[0] in d;
    if (!v3359) {
      v3359 = !d.execScript;
    }
    var v2014 = v3359;
    if (!v2014) {
      JAM.call(d.execScript, d, ["var " + c[0]], JAM.policy.p3);
    }
    var e$$4;
    var v3362 = c.length;
    if (v3362) {
      v3362 = e$$4 = JAM.call(c.shift, c, [], JAM.policy.p3);
    }
    var v2016 = v3362;
    for (;v2016;) {
      var v2015;
      var v4159 = c.length;
      if (!v4159) {
        v4159 = void 0 === b;
      }
      if (v4159) {
        var v3363;
        if (d[e$$4]) {
          v3363 = d[e$$4];
        } else {
          introspect(JAM.policy.p2) {
            v3363 = d[e$$4] = {};
          }
        }
        v2015 = d = v3363;
      } else {
        introspect(JAM.policy.p2) {
          v2015 = d[e$$4] = b;
        }
      }
      v2015;
      var v3365 = c.length;
      if (v3365) {
        v3365 = e$$4 = JAM.call(c.shift, c, [], JAM.policy.p3);
      }
      v2016 = v3365;
    }
    return;
  }
  var n$$1 = this;
  var v2017 = new Date;
  var v = JAM.call(v2017.getTime, v2017, [], JAM.policy.p3);
  var ea = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/;
  var fa = z$$2();
  var ga = z$$2();
  var ha = z$$2();
  var ia = z$$2();
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
  A("googlesyndication");
  var za = {client:"google_ad_client", format:"google_ad_format", slotname:"google_ad_slot", output:"google_ad_output", ad_type:"google_ad_type", async_oa:"google_async_for_oa_experiment", zrtm:"google_ad_handling_mode", dimpr:"google_always_use_delayed_impressions_experiment", peri:"google_top_experiment"};
  aa("google_protectAndRun", K);
  aa("google_handleError", L);
  var N = null;
  var P = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
  var v2018;
  if (JAM.call(/\uffff/.test, /\uffff/, ["\uffff"], JAM.policy.p3)) {
    v2018 = /[\\\"\x00-\x1f\x7f-\uffff]/g;
  } else {
    v2018 = /[\\\"\x00-\x1f\x7f-\xff]/g;
  }
  var Ga = v2018;
  var Ia = /\.((google(|groups|mail|images|print))|gmail)\./;
  var Ka;
  var R = "var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
  var v2019 = JAM.call(/[&<>\"]/.test, /[&<>\"]/, [R], JAM.policy.p3);
  if (v2019) {
    var v4839 = -1 != JAM.call(R.indexOf, R, ["&"], JAM.policy.p3);
    if (v4839) {
      R = JAM.call(R.replace, R, [qa, "&amp;"], JAM.policy.p3);
    }
    var v4840 = -1 != JAM.call(R.indexOf, R, ["<"], JAM.policy.p3);
    if (v4840) {
      R = JAM.call(R.replace, R, [ra, "&lt;"], JAM.policy.p3);
    }
    var v4615 = -1 != JAM.call(R.indexOf, R, [">"], JAM.policy.p3);
    if (v4615) {
      R = JAM.call(R.replace, R, [sa, "&gt;"], JAM.policy.p3);
    }
    var v4161 = -1 != JAM.call(R.indexOf, R, ['"'], JAM.policy.p3);
    if (v4161) {
      R = JAM.call(R.replace, R, [ta, "&quot;"], JAM.policy.p3);
    }
  }
  Ka = R;
  Q.prototype.set = v12;
  Q.prototype.j = v13;
  Q.prototype.l = v14;
  var S;
  var T;
  var U;
  var Ma;
  Ma = U = T = S = !1;
  var V;
  var v3367;
  if (n$$1.navigator) {
    v3367 = n$$1.navigator.userAgent;
  } else {
    v3367 = null;
  }
  if (V = v3367) {
    var Oa = n$$1.navigator;
    S = 0 == JAM.call(V.lastIndexOf, V, ["Opera", 0], JAM.policy.p3);
    var v2024 = !S;
    if (v2024) {
      var v3368 = -1 != JAM.call(V.indexOf, V, ["MSIE"], JAM.policy.p3);
      if (!v3368) {
        v3368 = -1 != JAM.call(V.indexOf, V, ["Trident"], JAM.policy.p3);
      }
      v2024 = v3368;
    }
    T = v2024;
    var v2025 = !S;
    if (v2025) {
      v2025 = -1 != JAM.call(V.indexOf, V, ["WebKit"], JAM.policy.p3);
    }
    U = v2025;
    var v4167 = !S;
    if (v4167) {
      v4167 = !U;
    }
    var v3370 = v4167;
    if (v3370) {
      v3370 = !T;
    }
    var v2026 = v3370;
    if (v2026) {
      v2026 = "Gecko" == Oa.product;
    }
    Ma = v2026;
  }
  var Pa = T;
  var Qa = Ma;
  var Ra = U;
  var W;
  var v3372 = S;
  if (v3372) {
    v3372 = n$$1.opera;
  }
  if (v3372) {
    var Sa = n$$1.opera.version;
    var v2029 = "function" == typeof Sa;
    if (v2029) {
      JAM.call(Sa, null, [], JAM.policy.p3);
    }
  } else {
    var v3374;
    if (Qa) {
      v3374 = W = /rv\:([^\);]+)(\)|;)/;
    } else {
      var v4168;
      if (Pa) {
        v4168 = W = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/;
      } else {
        var v4617 = Ra;
        if (v4617) {
          v4617 = W = /WebKit\/(\S+)/;
        }
        v4168 = v4617;
      }
      v3374 = v4168;
    }
    v3374;
    if (W) {
      var v4618;
      if (n$$1.navigator) {
        v4618 = n$$1.navigator.userAgent;
      } else {
        v4618 = null;
      }
      JAM.call(W.exec, W, [v4618], JAM.policy.p3);
    }
  }
  var X;
  Y.prototype.n = v15;
  Y.prototype.g = v16;
  Y.prototype.o = v17;
  Y.prototype.e = v18;
  Y.prototype.p = v19;
  Y.prototype.nq = Y.prototype.n;
  Y.prototype.nqa = Y.prototype.g;
  Y.prototype.al = Y.prototype.o;
  Y.prototype.rl = Y.prototype.e;
  Y.prototype.sz = Y.prototype.p;
  Y.prototype.m = v20;
  Y.prototype.f = v21;
  var $a = {"120x90":!0, "160x90":!0, "180x90":!0, "200x90":!0, "468x15":!0, "728x15":!0};
  var gb = JAM.call(Math.floor, Math, [1E6 * JAM.call(Math.random, Math, [], JAM.policy.p3)], JAM.policy.p3);
  var ib = /([0-9.]+)px/;
  var Z = [{width:120, height:240, format:"vertical"}, {width:120, height:600, format:"vertical"}, {width:125, height:125, format:"rectangle"}, {width:160, height:600, format:"vertical"}, {width:180, height:150, format:"rectangle"}, {width:200, height:200, format:"rectangle"}, {width:234, height:60, format:"horizontal"}, {width:250, height:250, format:"rectangle"}, {width:300, height:250, format:"rectangle"}, {width:300, height:600, format:"vertical"}, {width:320, height:50, format:"horizontal"}, 
  {width:336, height:280, format:"rectangle"}, {width:468, height:60, format:"horizontal"}, {width:728, height:90, format:"horizontal"}, {width:970, height:90, format:"horizontal"}];
  var $ = ["google_analytics_uacct", "google_analytics_domain_name"];
  rb();
  return;
}
v22();
v254()
