function v254() {
  function v253() {
    var a$$530 = v$$1;
    var b$$402 = JAM.call(a$$530.createElement, a$$530, ["script"], JAM.policy.p3);
    b$$402.async = !0;
    b$$402.type = "text/javascript";
    var v5039 = di();
    b$$402.src = v5039;
    a$$530 = JAM.call(a$$530.getElementsByTagName, a$$530, ["script"], JAM.policy.p3)[0];
    var v256 = a$$530.parentNode;
    JAM.call(v256.insertBefore, v256, [b$$402, a$$530], JAM.policy.p3);
    return;
  }
  function v252(a$$527) {
    function b$$401(a$$528) {
      var v257;
      var v3408 = void 0 !== a$$528;
      if (v3408) {
        v3408 = null !== a$$528;
      }
      if (v3408) {
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
      var v2090 = b$$401(a$$527.x);
      var v258 = JAM.call(v2090.concat, v2090, [b$$401(a$$527.y)], JAM.policy.p3);
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
      var v3413 = void 0 !== a$$526;
      if (v3413) {
        v3413 = null !== a$$526;
      }
      if (v3413) {
        a$$526 = a$$526 + 360;
        v262 = [JAM.call(Math.floor, Math, [a$$526 / 256], JAM.policy.p3), a$$526 % 256];
      } else {
        v262 = [128, 0];
      }
      return v262;
    }
    var c$$269 = [];
    if (a$$525) {
      var v2094 = b$$400(a$$525.beta);
      var v263 = JAM.call(v2094.concat, v2094, [b$$400(a$$525.gamma)], JAM.policy.p3);
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
    var JSCompiler_inline_result$$53;
    var a$$inline_399 = a$$524;
    if (!ca$$1(a$$inline_399)) {
      throw Error("encodeByteArray takes an array as a parameter");
    }
    if (!Qh) {
      Qh = {};
      Rh = {};
      var a$$inline_643 = 0;
      var v271 = 65 > a$$inline_643;
      for (;v271;) {
        var v2101 = Qh;
        var v5040 = JAM.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", [a$$inline_643], JAM.policy.p3);
        v2101[a$$inline_643] = v5040;
        var v2102 = Rh;
        var v5041 = JAM.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.", [a$$inline_643], JAM.policy.p3);
        v2102[a$$inline_643] = v5041;
        a$$inline_643++;
        v271 = 65 > a$$inline_643;
      }
    }
    var v273;
    if (!0) {
      v273 = Rh;
    } else {
      v273 = Qh;
    }
    var c$$inline_401 = v273;
    var d$$inline_402 = [];
    var e$$inline_403 = 0;
    var v288 = e$$inline_403 < a$$inline_399.length;
    for (;v288;) {
      var f$$inline_404 = a$$inline_399[e$$inline_403];
      var g$$inline_405 = e$$inline_403 + 1 < a$$inline_399.length;
      var v276;
      if (g$$inline_405) {
        v276 = a$$inline_399[e$$inline_403 + 1];
      } else {
        v276 = 0;
      }
      var h$$inline_406 = v276;
      var k$$inline_407 = e$$inline_403 + 2 < a$$inline_399.length;
      var v279;
      if (k$$inline_407) {
        v279 = a$$inline_399[e$$inline_403 + 2];
      } else {
        v279 = 0;
      }
      var l$$inline_408 = v279;
      var z$$inline_409 = f$$inline_404 >> 2;
      f$$inline_404 = (f$$inline_404 & 3) << 4 | h$$inline_406 >> 4;
      h$$inline_406 = (h$$inline_406 & 15) << 2 | l$$inline_408 >> 6;
      l$$inline_408 = l$$inline_408 & 63;
      if (!k$$inline_407) {
        l$$inline_408 = 64;
        if (!g$$inline_405) {
          h$$inline_406 = 64;
        }
      }
      JAM.call(d$$inline_402.push, d$$inline_402, [c$$inline_401[z$$inline_409], c$$inline_401[f$$inline_404], c$$inline_401[h$$inline_406], c$$inline_401[l$$inline_408]], JAM.policy.p3);
      e$$inline_403 = e$$inline_403 + 3;
      v288 = e$$inline_403 < a$$inline_399.length;
    }
    JSCompiler_inline_result$$53 = JAM.call(d$$inline_402.join, d$$inline_402, [""], JAM.policy.p3);
    return JSCompiler_inline_result$$53;
  }
  function v249() {
    var v2111 = !!this.t.j.deviceAccelerationWithGravity;
    if (!v2111) {
      v2111 = !!this.t.j.deviceAccelerationWithoutGravity;
    }
    var v289 = v2111;
    if (!v289) {
      v289 = !!this.t.j.deviceOrientation;
    }
    return v289;
  }
  function v248() {
    var v290 = this.j;
    var v2114 = new Date;
    var v5042 = JAM.call(v2114.getTime, v2114, [], JAM.policy.p3);
    v290.stopTimeStamp = v5042;
    return;
  }
  function v247() {
    var v291 = this.j;
    var v2115 = new Date;
    var v5043 = JAM.call(v2115.getTime, v2115, [], JAM.policy.p3);
    v291.startTimeStamp = v5043;
    return;
  }
  function v246() {
    var v2116 = "ds_wfea" === this.j.sensorsExperiment;
    if (v2116) {
      v2116 = this.j.isDeviceOrientationEventListenerRegistered;
    }
    var v292 = v2116;
    if (v292) {
      v292 = !this.j.deviceOrientation;
    }
    return v292;
  }
  function v245() {
    var v3428 = "ds_wfea" === this.j.sensorsExperiment;
    if (v3428) {
      v3428 = this.j.isDeviceMotionEventListenerRegistered;
    }
    var v2118 = v3428;
    if (v2118) {
      v2118 = !this.j.deviceAccelerationWithGravity;
    }
    var v293 = v2118;
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
  function v243(a$$517, b$$394) {
    function v242() {
      c$$264.didDeviceMotionCallbacksTimeoutExpire = !0;
      return;
    }
    var c$$264 = this.j;
    Nh(c$$264.deviceMotionEventCallbacks, a$$517, b$$394, v242);
    return;
  }
  function v241(a$$516, b$$393) {
    function v240() {
      c$$263.didDeviceOrientationCallbacksTimeoutExpire = !0;
      return;
    }
    var c$$263 = this.j;
    Nh(c$$263.deviceOrientationEventCallbacks, a$$516, b$$393, v240);
    return;
  }
  function v239() {
    var v297;
    var v3431 = this.j.startTimeStamp;
    if (v3431) {
      v3431 = this.j.stopTimeStamp;
    }
    if (v3431) {
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
      var v2125 = new hg(void 0);
      JAM.call(v305.postMessage, v305, [JAM.call(v2125.serialize, v2125, [a$$501], JAM.policy.p3), "http://doubleclick"], JAM.policy.p3);
      return!0;
    } catch (b$$380) {
    }
    return!1;
  }
  function v231(a$$500) {
    var v307 = this.G;
    var v5044 = JAM.call(a$$500.getAttribute, a$$500, ["href"], JAM.policy.p3);
    v307.iclk_url = v5044;
    var JSCompiler_temp_const$$57 = this.G;
    var JSCompiler_inline_result$$58;
    var a$$inline_379 = a$$500;
    var v2126 = Xc;
    if (v2126) {
      v2126 = "innerText" in a$$inline_379;
    }
    if (v2126) {
      var v308 = a$$inline_379.innerText;
      a$$inline_379 = JAM.call(v308.replace, v308, [/(\r\n|\r|\n)/g, "\n"], JAM.policy.p3);
    } else {
      var b$$inline_380 = [];
      ud(a$$inline_379, b$$inline_380, !0);
      a$$inline_379 = JAM.call(b$$inline_380.join, b$$inline_380, [""], JAM.policy.p3);
    }
    var v311 = JAM.call(a$$inline_379.replace, a$$inline_379, [/ \xAD /g, " "], JAM.policy.p3);
    a$$inline_379 = JAM.call(v311.replace, v311, [/\xAD/g, ""], JAM.policy.p3);
    a$$inline_379 = JAM.call(a$$inline_379.replace, a$$inline_379, [/\u200B/g, ""], JAM.policy.p3);
    if (!Xc) {
      a$$inline_379 = JAM.call(a$$inline_379.replace, a$$inline_379, [/ +/g, " "], JAM.policy.p3);
    }
    var v312 = " " != a$$inline_379;
    if (v312) {
      a$$inline_379 = JAM.call(a$$inline_379.replace, a$$inline_379, [/^\s*/, ""], JAM.policy.p3);
    }
    JSCompiler_inline_result$$58 = a$$inline_379;
    JSCompiler_temp_const$$57.iclk_ltx = JSCompiler_inline_result$$58;
    var v313 = a$$500 = JAM.call(a$$500.getAttribute, a$$500, ["title"], JAM.policy.p3);
    if (v313) {
      this.G.iclk_ltl = a$$500;
    }
    return;
  }
  function v230() {
    var a$$499 = xe("ias::nav", JAM.call(r$$2, null, [this.Va, this], JAM.policy.p3));
    var v315 = this.i;
    var v5045 = JAM.call(v315.setTimeout, v315, [a$$499, 1E3], JAM.policy.p3);
    this.Jc = v5045;
    return;
  }
  function v229(a$$498) {
    if (JAM.call(this.T, this, [], JAM.policy.p3)) {
      JAM.call(a$$498.preventDefault, a$$498, [], JAM.policy.p3);
      return!1;
    }
    var v2130 = a$$498;
    if (v2130) {
      v2130 = a$$498.target;
    }
    var v317 = v2130;
    if (v317) {
      v317 = a$$498.target.href;
    }
    var b$$379 = v317;
    var c$$253 = og(this.i);
    var v2132 = !b$$379;
    if (!v2132) {
      v2132 = !c$$253;
    }
    if (v2132) {
      return!0;
    }
    JAM.call(this.uc, this, [a$$498.target], JAM.policy.p3);
    if (!JAM.call(this.wc, this, [], JAM.policy.p3)) {
      return!0;
    }
    JAM.call(this.qc, this, [], JAM.policy.p3);
    JAM.call(a$$498.preventDefault, a$$498, [], JAM.policy.p3);
    return!1;
  }
  function v228() {
    var v322 = this.i.location;
    var v5046 = JAM.call(this.T, this, [], JAM.policy.p3);
    v322.href = v5046;
    return;
  }
  function v227() {
    var v323 = this.Z;
    if (!v323) {
      this.Z = !0;
      var v4211 = this.i;
      JAM.call(v4211.clearTimeout, v4211, [this.Jc], JAM.policy.p3);
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
      var v2138 = new hg(void 0);
      JAM.call(v328.postMessage, v328, [JAM.call(v2138.serialize, v2138, [a$$497], JAM.policy.p3), "http://doubleclick"], JAM.policy.p3);
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
      var v2143 = b$$377.style;
      var v3437;
      if (a$$493) {
        v3437 = "block";
      } else {
        v3437 = "none";
      }
      v2143.display = v3437;
    }
    return;
  }
  function v221() {
    var a$$492 = JAM.call(this.ba, this, [], JAM.policy.p3);
    var v2144 = a$$492;
    if (v2144) {
      v2144 = !(2 > a$$492.length);
    }
    if (v2144) {
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
    var v5047 = JAM.call(this.Ba, this, [a$$488, "prerender"], JAM.policy.p3);
    this.kc = v5047;
    var v5048 = JAM.call(this.Ba, this, [a$$488, "prefetch"], JAM.policy.p3);
    this.ic = v5048;
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
    var v2159 = a$$486.onclick;
    if (!v2159) {
      v2159 = !a$$486.href;
    }
    if (v2159) {
      return!1;
    }
    var b$$372 = Re(a$$486.href);
    var c$$248 = b$$372[3];
    a$$486 = kh(a$$486.href);
    b$$372 = b$$372[7];
    var v365;
    var v4214 = !c$$248;
    if (!v4214) {
      v4214 = c$$248 != this.Wc;
    }
    var v3447 = v4214;
    if (!v3447) {
      var v4215 = a$$486 == this.Xc;
      if (v4215) {
        v4215 = b$$372;
      }
      v3447 = v4215;
    }
    if (v3447) {
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
      var v3448 = this.Kb;
      JAM.call(v3448.A, v3448, [], JAM.policy.p3);
    }
    return;
  }
  function v208() {
    var v371 = this.Cb;
    if (!v371) {
      this.Cb = !0;
      var v3449 = this.Kb;
      JAM.call(v3449.dismiss, v3449, [], JAM.policy.p3);
    }
    return;
  }
  function v207(a$$479) {
    var v3450 = a$$479;
    if (v3450) {
      v3450 = a$$479.data;
    }
    var v2165 = v3450;
    if (v2165) {
      v2165 = mg[a$$479.origin];
    }
    if (v2165) {
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
    var v4873 = !JAM.call(this.Sa, this, [], JAM.policy.p3);
    if (!v4873) {
      v4873 = !og(this.i);
    }
    var v4654 = v4873;
    if (!v4654) {
      var v4874 = 2 <= this.B;
      if (v4874) {
        v4874 = this.I;
      }
      v4654 = v4874;
    }
    var v4217 = v4654;
    if (!v4217) {
      v4217 = !this.Ib;
    }
    var v3452 = v4217;
    if (!v3452) {
      v3452 = this.Da;
    }
    if (v3452) {
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
      var v2175 = this.i;
      v387 = JAM.call(v2175.setTimeout, v2175, [JAM.call(r$$2, null, [v199, this], JAM.policy.p3), 1E3], JAM.policy.p3);
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
        if (c$$244 = Qd(this.i.document.body, "padding")) {
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
    var v2185 = a$$469;
    if (v2185) {
      v2185 = !(2 > a$$469.length);
    }
    if (v2185) {
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
      var v4221 = JAM.call(this.u, this, [], JAM.policy.p3);
      var v4876;
      if (this.Ra) {
        v4876 = 1;
      } else {
        v4876 = 0;
      }
      Q$$1(v4221, {display:"block", opacity:v4876});
      this.ga = !0;
    }
    return;
  }
  function v186() {
    this.Ib = !0;
    var v3461 = JAM.call(this.Sa, this, [], JAM.policy.p3);
    if (v3461) {
      v3461 = og(this.i);
    }
    var v2189 = v3461;
    if (v2189) {
      v2189 = !this.Ra;
    }
    if (v2189) {
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
      var v2193 = !a$$464;
      if (!v2193) {
        v2193 = 2 > a$$464.length;
      }
      if (v2193) {
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
      var v2196 = a$$463;
      if (v2196) {
        v2196 = !$b(Zc(a$$463), "adsbygoogle");
      }
      var v431 = v2196;
      for (;v431;) {
        var v2197 = this.X;
        JAM.call(v2197.push, v2197, [a$$463], JAM.policy.p3);
        a$$463 = a$$463.parentNode;
        var v2198 = a$$463;
        if (v2198) {
          v2198 = !$b(Zc(a$$463), "adsbygoogle");
        }
        v431 = v2198;
      }
      if (a$$463) {
        var v2199 = this.X;
        JAM.call(v2199.push, v2199, [a$$463], JAM.policy.p3);
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
    var v5049 = JAM.call(ha$$1, null, [], JAM.policy.p3);
    this.hb = v5049;
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
    var v2212 = a$$456;
    if (v2212) {
      v2212 = mg[a$$456.origin];
    }
    if (v2212) {
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
          var v2215 = e$$89;
          if (v2215) {
            v2215 = JAM.call(e$$89.ia, e$$89, [b$$354], JAM.policy.p3);
          }
          var v452 = v2215;
          if (v452) {
            var v3474 = d$$151.wasReactiveAdConfigReceived;
            introspect(JAM.policy.p2) {
              v3474[a$$456] = !0;
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
      var a$$inline_363 = c$$227;
      var b$$inline_364 = d$$144;
      var c$$inline_365 = a$$441;
      c$$inline_365 = c$$inline_365 || window;
      Cg(a$$inline_363);
      Dg(a$$inline_363, b$$inline_364, c$$inline_365);
    }
    return;
  }
  function v169(a$$440) {
    var JSCompiler_inline_result$$62;
    JSCompiler_inline_label_Pg_362: {
      var a$$inline_359 = a$$440;
      if (!a$$inline_359) {
        JSCompiler_inline_result$$62 = null;
        break JSCompiler_inline_label_Pg_362;
      }
      var b$$inline_360 = new Og;
      var c$$inline_361 = a$$inline_359.adClient;
      var v464 = p$$1(c$$inline_361);
      if (v464) {
        b$$inline_360.adClient = c$$inline_361;
      }
      a$$inline_359 = a$$inline_359.adTest;
      var v465 = p$$1(a$$inline_359);
      if (v465) {
        b$$inline_360.adTest = a$$inline_359;
      }
      var v466;
      if (b$$inline_360.adClient) {
        v466 = b$$inline_360;
      } else {
        v466 = null;
      }
      JSCompiler_inline_result$$62 = v466;
    }
    var v467;
    if (this.l = JSCompiler_inline_result$$62) {
      v467 = !0;
    } else {
      v467 = !1;
    }
    return v467;
  }
  function v168(a$$439, b$$342) {
    var v5050 = new Og;
    this.l = v5050;
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
      var a$$inline_355 = c$$225;
      var b$$inline_356 = d$$143;
      var c$$inline_357 = a$$436;
      c$$inline_357 = c$$inline_357 || window;
      Cg(a$$inline_355);
      Dg(a$$inline_355, b$$inline_356, c$$inline_357);
    }
    return;
  }
  function v166(a$$435) {
    var JSCompiler_inline_result$$23;
    JSCompiler_inline_label_Lg_354: {
      var a$$inline_351 = a$$435;
      if (!a$$inline_351) {
        JSCompiler_inline_result$$23 = null;
        break JSCompiler_inline_label_Lg_354;
      }
      var b$$inline_352 = new Kg;
      var c$$inline_353 = a$$inline_351.adClient;
      var v482 = p$$1(c$$inline_353);
      if (v482) {
        b$$inline_352.adClient = c$$inline_353;
      }
      c$$inline_353 = a$$inline_351.adWidth;
      var v2223 = q$$3(c$$inline_353);
      if (v2223) {
        v2223 = 0 < c$$inline_353;
      }
      var v483 = v2223;
      if (v483) {
        b$$inline_352.adWidth = c$$inline_353;
      }
      c$$inline_353 = a$$inline_351.adHeight;
      var v2224 = q$$3(c$$inline_353);
      if (v2224) {
        v2224 = 0 < c$$inline_353;
      }
      var v484 = v2224;
      if (v484) {
        b$$inline_352.adHeight = c$$inline_353;
      }
      c$$inline_353 = a$$inline_351.adSlot;
      var v485 = p$$1(c$$inline_353);
      if (v485) {
        b$$inline_352.adSlot = c$$inline_353;
      }
      c$$inline_353 = a$$inline_351.adChannel;
      var v486 = p$$1(c$$inline_353);
      if (v486) {
        b$$inline_352.adChannel = c$$inline_353;
      }
      a$$inline_351 = a$$inline_351.adTest;
      var v487 = p$$1(a$$inline_351);
      if (v487) {
        b$$inline_352.adTest = a$$inline_351;
      }
      var v488;
      var v4231 = b$$inline_352.adClient;
      if (v4231) {
        v4231 = b$$inline_352.adWidth;
      }
      var v3480 = v4231;
      if (v3480) {
        v3480 = b$$inline_352.adHeight;
      }
      if (v3480) {
        v488 = b$$inline_352;
      } else {
        v488 = null;
      }
      JSCompiler_inline_result$$23 = v488;
    }
    var v489;
    if (this.l = JSCompiler_inline_result$$23) {
      v489 = !0;
    } else {
      v489 = !1;
    }
    return v489;
  }
  function v165(a$$434, b$$338) {
    var JSCompiler_inline_result$$34;
    var a$$inline_348 = b$$338;
    var b$$inline_349 = new Kg;
    b$$inline_349.adClient = a$$inline_348;
    b$$inline_349.adWidth = 320;
    b$$inline_349.adHeight = 50;
    b$$inline_349.adTest = "on";
    JSCompiler_inline_result$$34 = b$$inline_349;
    this.l = JSCompiler_inline_result$$34;
    JAM.call(this.D, this, [a$$434], JAM.policy.p3);
    return;
  }
  function v164(a$$412, b$$326) {
    JAM.call(b$$326.push, b$$326, ["{"], JAM.policy.p3);
    var c$$215 = "";
    var d$$137;
    for (d$$137 in a$$412) {
      var v2227 = Object.prototype.hasOwnProperty;
      if (JAM.call(v2227.call, v2227, [a$$412, d$$137], JAM.policy.p3)) {
        var e$$80 = a$$412[d$$137];
        var v490 = "function" != typeof e$$80;
        if (v490) {
          JAM.call(b$$326.push, b$$326, [c$$215], JAM.policy.p3);
          JAM.call(this.r, this, [d$$137, b$$326], JAM.policy.p3);
          JAM.call(b$$326.push, b$$326, [":"], JAM.policy.p3);
          var v4660;
          if (this.qa) {
            var v4877 = this.qa;
            v4660 = JAM.call(v4877.call, v4877, [a$$412, d$$137, e$$80], JAM.policy.p3);
          } else {
            v4660 = e$$80;
          }
          JAM.call(this.n, this, [v4660, b$$326], JAM.policy.p3);
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
      var v4233;
      if (this.qa) {
        var v4661 = this.qa;
        v4233 = JAM.call(v4661.call, v4661, [a$$411, String(e$$79), d$$136], JAM.policy.p3);
      } else {
        v4233 = d$$136;
      }
      JAM.call(this.n, this, [v4233, b$$325], JAM.policy.p3);
      d$$136 = ",";
      e$$79++;
      v492 = e$$79 < c$$214;
    }
    JAM.call(b$$325.push, b$$325, ["]"], JAM.policy.p3);
    return;
  }
  function v162(a$$410, b$$324) {
    var v2229;
    var v4234 = isFinite(a$$410);
    if (v4234) {
      v4234 = !isNaN(a$$410);
    }
    if (v4234) {
      v2229 = a$$410;
    } else {
      v2229 = "null";
    }
    JAM.call(b$$324.push, b$$324, [v2229], JAM.policy.p3);
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
        var v2230;
        if (256 > b$$323) {
          v2230 = e$$78 = e$$78 + "00";
        } else {
          var v3484 = 4096 > b$$323;
          if (v3484) {
            v3484 = e$$78 = e$$78 + "0";
          }
          v2230 = v3484;
        }
        v495 = v2230;
      }
      v495;
      return JAM.set(ig, a$$409, e$$78 + JAM.call(b$$323.toString, b$$323, [16], JAM.policy.p3), JAM.policy.p2);
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
      var v2234 = !e$$76;
      if (v2234) {
        v2234 = JAM.call(c$$212, null, [b$$317], JAM.policy.p3);
      }
      var v502 = v2234;
      if (v502) {
        JAM.call(d$$134, null, [b$$317, a$$402, f$$49], JAM.policy.p3);
        e$$76 = !0;
      }
      return;
    }
    var v2235 = JAM.call(this.Rc, this, [], JAM.policy.p3);
    if (v2235) {
      v2235 = !this.Pa;
    }
    if (v2235) {
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
      var v2237;
      if (a$$398) {
        v2237 = this.Tb = !0;
      } else {
        v2237 = this.Pa = !0;
      }
      v2237;
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
    var v2240 = a$$396;
    if (v2240) {
      v2240 = a$$396.contentWindow;
    }
    var v508 = v2240;
    if (v508) {
      var v2241 = a$$396.contentWindow;
      JAM.call(v2241.postMessage, v2241, [b$$313, this.Fb], JAM.policy.p3);
    }
    return;
  }
  function v150() {
    var v509 = this.Q.document;
    return JAM.call(v509.getElementById, v509, ["zrt_ads_frame" + this.Q.google_unique_id], JAM.policy.p3);
  }
  function v149(a$$395) {
    var b$$312 = JAM.call(this.J, this, [], JAM.policy.p3);
    var v3489 = this.Fb == a$$395.origin;
    if (v3489) {
      v3489 = b$$312;
    }
    var v2245 = v3489;
    if (v2245) {
      v2245 = b$$312.contentWindow == a$$395.source;
    }
    if (v2245) {
      a$$395 = a$$395.data;
      var c$$210 = !0;
      var v511 = JAM.call(this.da, this, [a$$395, b$$312, c$$210], JAM.policy.p3);
      if (v511) {
        A$$1(this.Q, "message", this.K);
        JAM.call(this.R, this, [], JAM.policy.p3);
        var v3492 = this.ma;
        if (v3492) {
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
      var v2246;
      if ("zr" == a$$394) {
        JAM.call(this.Dc, this, [c$$209], JAM.policy.p3);
        var v4665 = this.F;
        if (v4665) {
          JAM.call(this.gb, this, [b$$311], JAM.policy.p3);
        }
        v2246 = !0;
      } else {
        v2246 = !1;
      }
      v513 = v2246;
    }
    return v513;
  }
  function v147() {
    this.Fc = !0;
    return;
  }
  function v146() {
    var JSCompiler_inline_result$$8;
    var a$$inline_325 = this.Fc;
    var b$$inline_326 = this.Tb;
    var c$$inline_327 = this.Pa;
    var d$$inline_328 = this.Sb;
    var v514;
    if (a$$inline_325) {
      v514 = 8;
    } else {
      v514 = 0;
    }
    a$$inline_325 = v514;
    var v515;
    if (b$$inline_326) {
      v515 = 16;
    } else {
      v515 = 0;
    }
    b$$inline_326 = v515;
    var v516;
    if (c$$inline_327) {
      v516 = 32;
    } else {
      v516 = 0;
    }
    c$$inline_327 = v516;
    var v517;
    if (d$$inline_328) {
      v517 = 64;
    } else {
      v517 = 0;
    }
    d$$inline_328 = v517;
    JSCompiler_inline_result$$8 = a$$inline_325 | b$$inline_326 | c$$inline_327 | d$$inline_328;
    return JSCompiler_inline_result$$8;
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
    var v2260 = 0 == this.j;
    if (v2260) {
      v2260 = this.oa.length;
    }
    if (v2260) {
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
    var v2263 = !window;
    if (!v2263) {
      v2263 = !Array;
    }
    return!v2263;
  }
  function v132() {
    var v537 = 1 == this.j;
    if (v537) {
      var v3500 = null != this.na;
      if (v3500) {
        var v4666 = this.p;
        JAM.call(v4666.clearTimeout, v4666, [this.na], JAM.policy.p3);
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
      var v5051 = JAM.call(v539.setTimeout, v539, [b$$281, a$$352], JAM.policy.p3);
      this.na = v5051;
    }
    return;
  }
  function v130(a$$351, b$$280) {
    var v540 = this.oa;
    var v3501 = b$$280;
    if (!v3501) {
      v3501 = this.p;
    }
    JAM.call(v540.push, v540, [new nf(a$$351, v3501)], JAM.policy.p3);
    JAM.call(this.sa, this, [], JAM.policy.p3);
    return;
  }
  function v129(a$$350, b$$279) {
    var v542;
    var v4242 = 0 != this.j;
    if (!v4242) {
      v4242 = 0 != this.oa.length;
    }
    var v3502 = v4242;
    if (!v3502) {
      var v4243 = b$$279;
      if (v4243) {
        v4243 = b$$279 != window;
      }
      v3502 = v4243;
    }
    if (v3502) {
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
      var v3504;
      if (a$$342 == b$$273) {
        v3504 = "I";
      } else {
        v3504 = "A";
      }
      e$$71.signature = v3504;
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
        var v3505;
        if (h$$19.signature) {
          v3505 = e$$71.signature + ("!" + h$$19.signature + "~");
        } else {
          v3505 = e$$71.signature + "o";
        }
        e$$71.signature = v3505;
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
    var JSCompiler_inline_result$$56;
    var a$$inline_256 = [c$$184];
    var b$$inline_257 = b$$272;
    var c$$inline_258;
    for (c$$inline_258 in b$$inline_257) {
      Ve(c$$inline_258, b$$inline_257[c$$inline_258], a$$inline_256);
    }
    JSCompiler_inline_result$$56 = a$$inline_256;
    var a$$inline_260 = JSCompiler_inline_result$$56;
    if (a$$inline_260[1]) {
      var b$$inline_261 = a$$inline_260[0];
      var c$$inline_262 = JAM.call(b$$inline_261.indexOf, b$$inline_261, ["#"], JAM.policy.p3);
      var v552 = 0 <= c$$inline_262;
      if (v552) {
        JAM.call(a$$inline_260.push, a$$inline_260, [JAM.call(b$$inline_261.substr, b$$inline_261, [c$$inline_262], JAM.policy.p3)], JAM.policy.p3);
        a$$inline_260[0] = b$$inline_261 = JAM.call(b$$inline_261.substr, b$$inline_261, [0, c$$inline_262], JAM.policy.p3);
      }
      c$$inline_262 = JAM.call(b$$inline_261.indexOf, b$$inline_261, ["?"], JAM.policy.p3);
      var v553;
      if (0 > c$$inline_262) {
        v553 = a$$inline_260[1] = "?";
      } else {
        var v2271 = c$$inline_262 == b$$inline_261.length - 1;
        if (v2271) {
          v2271 = a$$inline_260[1] = void 0;
        }
        v553 = v2271;
      }
      v553;
    }
    c$$184 = JAM.call(a$$inline_260.join, a$$inline_260, [""], JAM.policy.p3);
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
    var v3511 = a$$330.onload;
    if (v3511) {
      v3511 = b$$263;
    }
    var v2280 = v3511;
    if (v2280) {
      var v3512 = !b$$263.body;
      if (!v3512) {
        v3512 = !b$$263.body.firstChild;
      }
      v2280 = v3512;
    }
    if (v2280) {
      JAM.call(a$$330.onload, a$$330, [], JAM.policy.p3);
    }
    return;
  }
  function v122(a$$329, b$$262) {
    JAM.set(this.hd.handlers, a$$329, b$$262, JAM.policy.p2);
    var v567 = this.p.addEventListener;
    if (v567) {
      var v2283 = this.p;
      JAM.call(v2283.addEventListener, v2283, ["load", JAM.call(r$$2, null, [this.Jb, this, a$$329], JAM.policy.p3), !1], JAM.policy.p3);
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
    var v2287;
    var v4257 = isFinite(a$$320);
    if (v4257) {
      v4257 = !isNaN(a$$320);
    }
    if (v4257) {
      v2287 = a$$320;
    } else {
      v2287 = "null";
    }
    JAM.call(b$$254.push, b$$254, [v2287], JAM.policy.p3);
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
        var v2288;
        if (256 > b$$253) {
          v2288 = e$$66 = e$$66 + "00";
        } else {
          var v3516 = 4096 > b$$253;
          if (v3516) {
            v3516 = e$$66 = e$$66 + "0";
          }
          v2288 = v3516;
        }
        v573 = v2288;
      }
      v573;
      return JAM.set(Ce, a$$319, e$$66 + JAM.call(b$$253.toString, b$$253, [16], JAM.policy.p3), JAM.policy.p2);
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
    var v2292 = this.xa;
    if (v2292) {
      v2292 = d$$98;
    }
    if (v2292) {
      JAM.call(this.xa, this, [d$$98, a$$299, b$$236, !0, "", g$$24, ""], JAM.policy.p3);
    } else {
      if ("js" == c$$162) {
        JAM.call(this.oc, this, [a$$299, "google_ad_request_done"], JAM.policy.p3);
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
      var v2295 = !1 !== b$$235;
      if (v2295) {
        var v3520 = c$$161 = vb([2], ie);
        if (!v3520) {
          v3520 = c$$161 = vb([3], je);
        }
        v2295 = v3520;
      }
      v590 = v2295;
    }
    v590;
    if (!c$$161) {
      return 0;
    }
    this.Wa = c$$161;
    var v5052 = String(a$$298 || 0);
    this.Aa = v5052;
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
      var v2298 = !e$$59.Vb;
      if (v2298) {
        v2298 = e$$59.kb;
      }
      var v599 = v2298;
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
          var v3527 = e$$58[f$$35].href;
          if (0 <= JAM.call(v3527.indexOf, v3527, [h$$16], JAM.policy.p3)) {
            h$$16 = e$$58[f$$35].parentNode;
            if (d$$95[g$$23][2]) {
              var k$$6 = h$$16;
              var l$$9 = 0;
              var v605 = 4 > l$$9;
              for (;v605;) {
                var v3528 = k$$6.innerHTML;
                if (0 <= JAM.call(v3528.indexOf, v3528, [d$$95[g$$23][2]], JAM.policy.p3)) {
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
    var v2308 = 0 < d$$95.length;
    if (v2308) {
      v2308 = a$$295 != hc();
    }
    if (v2308) {
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
  function v100(a$$294, b$$230) {
    function v99(b$$231) {
      var v2310 = b$$231;
      if (v2310) {
        v2310 = 0 < b$$231.length;
      }
      if (v2310) {
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
    var c$$157 = this.ha;
    var d$$94 = this.wa[b$$230];
    if (d$$94) {
      var v4265 = d$$94.orig_callback;
      if (!v4265) {
        v4265 = d$$94;
      }
      d$$94 = v4265;
      JAM.set(this.wa, b$$230, v99, JAM.policy.p2);
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
      var v3536 = q$$3(b$$193);
      if (v3536) {
        this.top = this.top + b$$193;
        v3536 = this.bottom = this.bottom + b$$193;
      }
      v626 = v3536;
    }
    v626;
    return this;
  }
  function v96() {
    var v5053 = JAM.call(Math.round, Math, [this.top], JAM.policy.p3);
    this.top = v5053;
    var v5054 = JAM.call(Math.round, Math, [this.right], JAM.policy.p3);
    this.right = v5054;
    var v5055 = JAM.call(Math.round, Math, [this.bottom], JAM.policy.p3);
    this.bottom = v5055;
    var v5056 = JAM.call(Math.round, Math, [this.left], JAM.policy.p3);
    this.left = v5056;
    return this;
  }
  function v95() {
    var v5057 = JAM.call(Math.floor, Math, [this.top], JAM.policy.p3);
    this.top = v5057;
    var v5058 = JAM.call(Math.floor, Math, [this.right], JAM.policy.p3);
    this.right = v5058;
    var v5059 = JAM.call(Math.floor, Math, [this.bottom], JAM.policy.p3);
    this.bottom = v5059;
    var v5060 = JAM.call(Math.floor, Math, [this.left], JAM.policy.p3);
    this.left = v5060;
    return this;
  }
  function v94() {
    var v5061 = JAM.call(Math.ceil, Math, [this.top], JAM.policy.p3);
    this.top = v5061;
    var v5062 = JAM.call(Math.ceil, Math, [this.right], JAM.policy.p3);
    this.right = v5062;
    var v5063 = JAM.call(Math.ceil, Math, [this.bottom], JAM.policy.p3);
    this.bottom = v5063;
    var v5064 = JAM.call(Math.ceil, Math, [this.left], JAM.policy.p3);
    this.left = v5064;
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
      var v2325;
      if (a$$251 instanceof P$$1) {
        var v4685 = a$$251.left >= this.left;
        if (v4685) {
          v4685 = a$$251.right <= this.right;
        }
        var v4273 = v4685;
        if (v4273) {
          v4273 = a$$251.top >= this.top;
        }
        var v3537 = v4273;
        if (v3537) {
          v3537 = a$$251.bottom <= this.bottom;
        }
        v2325 = v3537;
      } else {
        var v4688 = a$$251.x >= this.left;
        if (v4688) {
          v4688 = a$$251.x <= this.right;
        }
        var v4276 = v4688;
        if (v4276) {
          v4276 = a$$251.y >= this.top;
        }
        var v3538 = v4276;
        if (v3538) {
          v3538 = a$$251.y <= this.bottom;
        }
        v2325 = v3538;
      }
      v640 = v2325;
    } else {
      v640 = !1;
    }
    return v640;
  }
  function v91() {
    var JSCompiler_inline_result$$2;
    var a$$inline_141 = this.V;
    var v641;
    var v3540 = Pc;
    if (!v3540) {
      v3540 = "CSS1Compat" != a$$inline_141.compatMode;
    }
    if (v3540) {
      var v2327 = a$$inline_141.body;
      if (!v2327) {
        v2327 = a$$inline_141.documentElement;
      }
      v641 = v2327;
    } else {
      v641 = a$$inline_141.documentElement;
    }
    var b$$inline_142 = v641;
    var v642 = a$$inline_141.parentWindow;
    if (!v642) {
      v642 = a$$inline_141.defaultView;
    }
    a$$inline_141 = v642;
    var v643;
    var v4281 = N$$1;
    if (v4281) {
      v4281 = Uc("10");
    }
    var v3542 = v4281;
    if (v3542) {
      v3542 = a$$inline_141.pageYOffset != b$$inline_142.scrollTop;
    }
    if (v3542) {
      v643 = new M$$1(b$$inline_142.scrollLeft, b$$inline_142.scrollTop);
    } else {
      var v3543 = a$$inline_141.pageXOffset;
      if (!v3543) {
        v3543 = b$$inline_142.scrollLeft;
      }
      var v2332 = v3543;
      var v3544 = a$$inline_141.pageYOffset;
      if (!v3544) {
        v3544 = b$$inline_142.scrollTop;
      }
      v643 = new M$$1(v2332, v3544);
    }
    JSCompiler_inline_result$$2 = v643;
    return JSCompiler_inline_result$$2;
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
        var v2336;
        if ("CSS1Compat" == a$$224.compatMode) {
          v2336 = parseInt(Sc, 10);
        } else {
          v2336 = 5;
        }
        v648 = v2336;
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
      var v3546 = q$$3(b$$168);
      if (v3546) {
        v3546 = this.y = this.y + b$$168;
      }
      v651 = v3546;
    }
    v651;
    return this;
  }
  function v84() {
    var v5065 = JAM.call(Math.round, Math, [this.x], JAM.policy.p3);
    this.x = v5065;
    var v5066 = JAM.call(Math.round, Math, [this.y], JAM.policy.p3);
    this.y = v5066;
    return this;
  }
  function v83() {
    var v5067 = JAM.call(Math.floor, Math, [this.x], JAM.policy.p3);
    this.x = v5067;
    var v5068 = JAM.call(Math.floor, Math, [this.y], JAM.policy.p3);
    this.y = v5068;
    return this;
  }
  function v82() {
    var v5069 = JAM.call(Math.ceil, Math, [this.x], JAM.policy.p3);
    this.x = v5069;
    var v5070 = JAM.call(Math.ceil, Math, [this.y], JAM.policy.p3);
    this.y = v5070;
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
    var v3547 = 0 < this.defaultBucket.length;
    if (v3547) {
      v3547 = 0 < a$$192.length;
    }
    if (v3547) {
      var v4294 = this.defaultBucket;
      v660 = JAM.call(v4294.join, v4294, [","], JAM.policy.p3) + "," + JAM.call(a$$192.join, a$$192, [","], JAM.policy.p3);
    } else {
      var v3549 = this.defaultBucket;
      v660 = JAM.call(v3549.join, v3549, [","], JAM.policy.p3) + JAM.call(a$$192.join, a$$192, [","], JAM.policy.p3);
    }
    return v660;
  }
  function v80(a$$191) {
    var v661;
    var v3550 = this.layers;
    if (JAM.call(v3550.hasOwnProperty, v3550, [a$$191], JAM.policy.p3)) {
      v661 = this.layers[a$$191];
    } else {
      v661 = "";
    }
    return v661;
  }
  function v79(a$$190) {
    var v662;
    if (a$$190) {
      var v3551 = this.layers;
      var v2349 = JAM.call(v3551.hasOwnProperty, v3551, [a$$190], JAM.policy.p3);
      if (v2349) {
        v2349 = "" == this.layers[a$$190];
      }
      v662 = v2349;
    } else {
      v662 = !0;
    }
    return v662;
  }
  function v78(a$$189, b$$152, c$$107) {
    var v663;
    var v3553 = JAM.call(this.ac, this, [c$$107], JAM.policy.p3);
    if (v3553) {
      v3553 = a$$189 = vb(a$$189, b$$152);
    }
    if (v3553) {
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
      var v2351;
      if (b$$151) {
        var v3554;
        var v4693 = this.layers;
        if (JAM.call(v4693.hasOwnProperty, v4693, [b$$151], JAM.policy.p3)) {
          v3554 = JAM.set(this.layers, b$$151, a$$188, JAM.policy.p2);
        } else {
          v3554 = "";
        }
        v2351 = v3554;
      } else {
        var v4298 = this.defaultBucket;
        JAM.call(v4298.push, v4298, [a$$188], JAM.policy.p3);
        v2351 = a$$188;
      }
      v664 = v2351;
    }
    return v664;
  }
  function v76(a$$187, b$$150) {
    JAM.set(this.layers, b$$150, a$$187, JAM.policy.p2);
    return;
  }
  function v75() {
    return!0;
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
      var v2355;
      if (0 > c$$100) {
        v2355 = JAM.call(Math.max, Math, [0, a$$179.length + c$$100], JAM.policy.p3);
      } else {
        v2355 = c$$100;
      }
      v670 = v2355;
    }
    c$$100 = v670;
    if (p$$1(a$$179)) {
      var v671;
      var v3557 = p$$1(b$$142);
      if (v3557) {
        v3557 = 1 == b$$142.length;
      }
      if (v3557) {
        v671 = JAM.call(a$$179.indexOf, a$$179, [b$$142, c$$100], JAM.policy.p3);
      } else {
        v671 = -1;
      }
      return v671;
    }
    var v674 = c$$100 < a$$179.length;
    for (;v674;) {
      var v2359 = c$$100 in a$$179;
      if (v2359) {
        v2359 = a$$179[c$$100] === b$$142;
      }
      if (v2359) {
        return c$$100;
      }
      c$$100++;
      v674 = c$$100 < a$$179.length;
    }
    return-1;
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
    var v5071 = JAM.call(Math.round, Math, [this.width], JAM.policy.p3);
    this.width = v5071;
    var v5072 = JAM.call(Math.round, Math, [this.height], JAM.policy.p3);
    this.height = v5072;
    return this;
  }
  function v68() {
    var v5073 = JAM.call(Math.floor, Math, [this.width], JAM.policy.p3);
    this.width = v5073;
    var v5074 = JAM.call(Math.floor, Math, [this.height], JAM.policy.p3);
    this.height = v5074;
    return this;
  }
  function v67() {
    var v5075 = JAM.call(Math.ceil, Math, [this.width], JAM.policy.p3);
    this.width = v5075;
    var v5076 = JAM.call(Math.ceil, Math, [this.height], JAM.policy.p3);
    this.height = v5076;
    return this;
  }
  function v66() {
    return+new Date;
  }
  function gi() {
    var v2364 = H$$1();
    return JAM.call(v2364.m, v2364, [18], JAM.policy.p3) == K$$1.ASYNC_EXPANSION_EMBED.EXPERIMENT;
  }
  function mi(a$$568) {
    var b$$441 = vf;
    return ki({dtd:Hb(b$$441)}, a$$568);
  }
  function Zi(a$$567) {
    var b$$440 = window.google_container_id;
    var v2367 = b$$440;
    if (v2367) {
      v2367 = JAM.call(document.getElementById, document, [b$$440], JAM.policy.p3);
    }
    var v687 = v2367;
    if (!v687) {
      v687 = JAM.call(document.getElementById, document, [a$$567], JAM.policy.p3);
    }
    var c$$299 = v687;
    var v2369 = c$$299 || b$$440;
    if (!v2369) {
      v2369 = !a$$567;
    }
    var v688 = v2369;
    if (!v688) {
      JAM.call(document.write, document, ["<span id=" + a$$567 + "></span>"], JAM.policy.p3);
      c$$299 = JAM.call(document.getElementById, document, [a$$567], JAM.policy.p3);
    }
    return c$$299;
  }
  function Gi(a$$565) {
    var b$$438 = mc();
    var c$$298 = G$$1(b$$438, 8);
    var d$$183 = G$$1(b$$438, 9);
    var e$$108 = window.google_ad_section;
    if (ub(window)) {
      var v2371 = 3 < oc(b$$438, 5, G$$1(b$$438, 5) + 1);
      if (v2371) {
        v2371 = !a$$565;
      }
      if (v2371) {
        return!1;
      }
    } else {
      var f$$65 = oc(b$$438, 6, G$$1(b$$438, 6) + 1);
      if (window.google_num_slots_to_rotate) {
        var JSCompiler_inline_result$$19;
        ze = ze | 1;
        JSCompiler_inline_result$$19 = void 0;
        JSCompiler_inline_result$$19;
        JAM.set(c$$298, e$$108, "", JAM.policy.p2);
        var JSCompiler_temp_const$$70 = JAM.set(d$$183, e$$108, "", JAM.policy.p2);
        var JSCompiler_temp$$71;
        if (JSCompiler_temp$$71 = G$$1(b$$438, 12)) {
        } else {
          var v3562 = new Date;
          var b$$inline_551 = JAM.call(v3562.getTime, v3562, [], JAM.policy.p3) % window.google_num_slots_to_rotate + 1;
          JSCompiler_temp$$71 = oc(b$$438, 12, b$$inline_551);
        }
        JSCompiler_temp_const$$70;
        JSCompiler_temp$$71;
        if (G$$1(b$$438, 12) != f$$65) {
          return!1;
        }
      } else {
        var v3564 = !a$$565;
        if (v3564) {
          v3564 = 6 < f$$65;
        }
        var v2375 = v3564;
        if (v2375) {
          v2375 = "" == e$$108;
        }
        if (v2375) {
          return!1;
        }
      }
    }
    return!0;
  }
  function xi(a$$561, b$$434) {
    var c$$295 = b$$434.src;
    var d$$180;
    var a$$inline_518 = c$$295;
    var b$$inline_519 = "/pagead/blank.gif#?";
    var c$$inline_520 = a$$561;
    var d$$inline_521 = JAM.call(a$$inline_518.indexOf, a$$inline_518, [b$$inline_519], JAM.policy.p3);
    var v697;
    if (-1 == d$$inline_521) {
      v697 = a$$inline_518;
    } else {
      v697 = c$$inline_520 + JAM.call(a$$inline_518.substr, a$$inline_518, [d$$inline_521 + b$$inline_519.length], JAM.policy.p3);
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
      JAM.set(a$$558, b$$431, window[c$$292], JAM.policy.p2);
      return;
    }
    function v24(b$$430, c$$291) {
      JAM.set(a$$558, b$$430, window[c$$291], JAM.policy.p2);
      return;
    }
    function v23(b$$429, c$$290) {
      JAM.set(a$$558, b$$429, window[c$$290], JAM.policy.p2);
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
      var v3566 = new Date;
      Xi = JAM.call(v3566.getTime, v3566, [], JAM.policy.p3) - Xi;
    }
    var v2382 = c$$289;
    if (v2382) {
      v2382 = JAM.call(c$$289.fb, c$$289, [], JAM.policy.p3);
    }
    var v701 = v2382;
    if (v701) {
      JAM.call(c$$289.Hc, c$$289, [], JAM.policy.p3);
    }
    JSCompiler_inline_label_Ki_503: {
      var a$$inline_500 = a$$557;
      var a$$inline_698 = window;
      var b$$inline_699;
      var a$$inline_769 = a$$inline_698;
      var b$$inline_770 = D$$1().document;
      var c$$inline_771 = {};
      var d$$inline_772;
      var a$$inline_942 = window;
      a$$inline_942 = dc(a$$inline_942, !1);
      d$$inline_772 = a$$inline_942.win;
      var e$$inline_773 = cf(d$$inline_772);
      var f$$inline_774 = Ze(D$$1(), b$$inline_770, a$$inline_769.google_ad_width, a$$inline_769.google_ad_height);
      var JSCompiler_inline_result$$927;
      var a$$inline_944 = a$$inline_769;
      var b$$inline_945 = f$$inline_774;
      var c$$inline_946 = e$$inline_773.isTopUrl;
      var d$$inline_947 = JAM.call(T$$1.getIframingState, T$$1, [D$$1()], JAM.policy.p3);
      var e$$inline_948 = 4;
      var v708;
      var v3567 = b$$inline_945;
      if (!v3567) {
        v3567 = d$$inline_947 != T$$1.SAME_DOMAIN_IFRAMING;
      }
      if (v3567) {
        var v2383;
        var v4306 = b$$inline_945;
        if (!v4306) {
          v4306 = d$$inline_947 != T$$1.CROSS_DOMAIN_IFRAMING;
        }
        if (v4306) {
          var v3568;
          var v4697 = b$$inline_945;
          if (v4697) {
            v4697 = d$$inline_947 == T$$1.SAME_DOMAIN_IFRAMING;
          }
          if (v4697) {
            v3568 = e$$inline_948 = 7;
          } else {
            var v4698 = b$$inline_945;
            if (v4698) {
              v4698 = d$$inline_947 == T$$1.CROSS_DOMAIN_IFRAMING;
            }
            var v4307 = v4698;
            if (v4307) {
              v4307 = e$$inline_948 = 8;
            }
            v3568 = v4307;
          }
          v2383 = v3568;
        } else {
          v2383 = e$$inline_948 = 6;
        }
        v708 = v2383;
      } else {
        v708 = e$$inline_948 = 5;
      }
      v708;
      var v709 = !!a$$inline_944.google_referrer_url;
      if (v709) {
        v709 = !Ye();
      }
      a$$inline_944 = v709;
      e$$inline_948 = e$$inline_948 + 5 * a$$inline_944;
      if (c$$inline_946) {
        e$$inline_948 = e$$inline_948 | 16;
      }
      JSCompiler_inline_result$$927 = "" + e$$inline_948;
      c$$inline_771.iframing = JSCompiler_inline_result$$927;
      var v2388 = !a$$inline_769.google_page_url;
      if (v2388) {
        v2388 = "yieldmanager" == b$$inline_770.domain;
      }
      if (v2388) {
        var v710 = b$$inline_770.URL;
        var v2389 = b$$inline_770.URL;
        e$$inline_773 = JAM.call(v710.substring, v710, [JAM.call(v2389.lastIndexOf, v2389, ["http"], JAM.policy.p3)], JAM.policy.p3);
        var v712 = -1 < JAM.call(e$$inline_773.indexOf, e$$inline_773, ["%"], JAM.policy.p3);
        for (;v712;) {
          try {
            e$$inline_773 = decodeURIComponent(e$$inline_773);
          } catch (g$$inline_775) {
            break;
          }
          v712 = -1 < JAM.call(e$$inline_773.indexOf, e$$inline_773, ["%"], JAM.policy.p3);
        }
        a$$inline_769.google_page_url = e$$inline_773;
      }
      var JSCompiler_inline_result$$941;
      var a$$inline_950 = a$$inline_769;
      var b$$inline_951 = af();
      var v714 = !b$$inline_951;
      if (v714) {
        v714 = !!a$$inline_950.google_page_url;
      }
      JSCompiler_inline_result$$941 = v714;
      if (JSCompiler_inline_result$$941) {
        var a$$inline_953 = c$$inline_771;
        var c$$inline_955 = b$$inline_770;
        var d$$inline_956 = f$$inline_774;
        a$$inline_953.page_url = a$$inline_769.google_page_url;
        var v715 = bf(c$$inline_955, d$$inline_956);
        if (!v715) {
          v715 = "EMPTY";
        }
        a$$inline_953.page_location = v715;
      } else {
        var a$$inline_958 = c$$inline_771;
        var v5077 = bf(b$$inline_770, f$$inline_774);
        a$$inline_958.page_url = v5077;
        a$$inline_958.page_location = null;
      }
      var v716;
      if (b$$inline_770.URL == c$$inline_771.page_url) {
        v716 = JAM.call(Date.parse, Date, [b$$inline_770.lastModified], JAM.policy.p3) / 1E3;
      } else {
        v716 = null;
      }
      c$$inline_771.last_modified_time = v716;
      if (Ye()) {
        var JSCompiler_inline_result$$928;
        var a$$inline_962 = d$$inline_772;
        var v717;
        if (a$$inline_962 == a$$inline_962.top) {
          v717 = a$$inline_962.document.referrer;
        } else {
          var v2397 = a$$inline_962 = af(!0);
          if (!v2397) {
            v2397 = "";
          }
          v717 = v2397;
        }
        JSCompiler_inline_result$$928 = v717;
        c$$inline_771.referrer_url = JSCompiler_inline_result$$928;
      } else {
        var JSCompiler_inline_result$$925;
        var a$$inline_964 = a$$inline_769;
        var b$$inline_965 = b$$inline_770;
        var c$$inline_966 = f$$inline_774;
        var d$$inline_967 = af();
        var v718;
        if (d$$inline_967) {
          v718 = "";
        } else {
          var v2399;
          if (c$$inline_966) {
            v2399 = a$$inline_964.google_referrer_url;
          } else {
            var v3580;
            var v4699 = a$$inline_964.google_page_url;
            if (v4699) {
              v4699 = a$$inline_964.google_referrer_url;
            }
            if (v4699) {
              v3580 = a$$inline_964.google_referrer_url;
            } else {
              v3580 = b$$inline_965.referrer;
            }
            v2399 = v3580;
          }
          v718 = v2399;
        }
        JSCompiler_inline_result$$925 = v718;
        c$$inline_771.referrer_url = JSCompiler_inline_result$$925;
      }
      b$$inline_699 = c$$inline_771;
      $e(a$$inline_698, b$$inline_699);
      var v3581 = window.google_page_url;
      if (!v3581) {
        v3581 = window.google_referrer_url;
      }
      var v2400 = v3581;
      if (!v2400) {
        v2400 = window.google_page_location;
      }
      if (v2400) {
      } else {
        var a$$inline_701 = K$$1;
        var v720 = J$$1();
        JAM.call(v720.k, v720, [[a$$inline_701.TOP_URL_REPLACES_MISSING_URL.CONTROL, a$$inline_701.TOP_URL_REPLACES_MISSING_URL.EXPERIMENT], wa$$1, 4], JAM.policy.p3);
      }
      if (!Gi(!1)) {
        c$$289 = !1;
        break JSCompiler_inline_label_Ki_503;
      }
      var v724;
      if (Bc(window)) {
        v724 = ma$$1("", "googlesyndication");
      } else {
        v724 = Ja$$1();
      }
      var b$$inline_501 = v724;
      var a$$inline_703 = a$$inline_500;
      var b$$inline_704 = {};
      $i(b$$inline_704);
      var a$$inline_777 = b$$inline_704;
      a$$inline_777.dt = vf;
      var v2405 = B$$2;
      if (v2405) {
        v2405 = window.google_bpp;
      }
      var v725 = v2405;
      if (v725) {
        a$$inline_777.bpp = window.google_bpp;
      }
      var b$$inline_778;
      JSCompiler_inline_label_816: {
        var a$$inline_779 = void 0;
        var b$$inline_780 = D$$1();
        var c$$inline_781 = b$$inline_780.performance;
        var v3586 = c$$inline_781;
        if (v3586) {
          v3586 = c$$inline_781.timing;
        }
        var v2406 = v3586;
        if (v2406) {
          v2406 = c$$inline_781.now;
        }
        if (v2406) {
          var d$$inline_782 = c$$inline_781.timing.navigationStart + JAM.call(Math.round, Math, [JAM.call(c$$inline_781.now, c$$inline_781, [], JAM.policy.p3)], JAM.policy.p3);
          d$$inline_782 = d$$inline_782 - c$$inline_781.timing.domLoading;
        }
        if (!d$$inline_782) {
          b$$inline_778 = null;
          break JSCompiler_inline_label_816;
        }
        a$$inline_779 = a$$inline_779 || vf;
        var v2410 = b$$inline_780.Date;
        b$$inline_780 = JAM.call(v2410.now, v2410, [], JAM.policy.p3) - a$$inline_779;
        b$$inline_780 = d$$inline_782 - b$$inline_780;
        var v732;
        if (0 > b$$inline_780) {
          v732 = "-M";
        } else {
          var v2411;
          if (1E6 < b$$inline_780) {
            v2411 = "M";
          } else {
            v2411 = b$$inline_780;
          }
          v732 = v2411;
        }
        b$$inline_778 = v732;
      }
      if (b$$inline_778) {
        a$$inline_777.bdt = b$$inline_778;
      }
      var v5078 = Da$$1();
      a$$inline_777.shv = v5078;
      b$$inline_778 = !!window.google_test_1;
      var c$$inline_783 = !!window.google_test_2;
      if (b$$inline_778) {
        var v2415;
        if (c$$inline_783) {
          v2415 = "3";
        } else {
          v2415 = "2";
        }
        a$$inline_777.tsi = v2415;
      }
      var v5079 = JAM.call("/r20130906".replace, "/r20130906", ["/", ""], JAM.policy.p3);
      a$$inline_777.cbv = v5079;
      var v735 = JAM.call(/^\w{1,3}$/.test, /^\w{1,3}$/, [window.google_loader_used], JAM.policy.p3);
      if (v735) {
        a$$inline_777.saldr = window.google_loader_used;
      }
      b$$inline_778 = mc();
      if (Zg(window)) {
      } else {
        var a$$inline_784 = b$$inline_778;
        var b$$inline_785 = a$$inline_777;
        var c$$inline_786 = G$$1(a$$inline_784, 8);
        var d$$inline_787 = window.google_ad_section;
        var e$$inline_788 = window.google_ad_format;
        var f$$inline_789 = window.google_ad_slot;
        var v736 = c$$inline_786[d$$inline_787];
        if (v736) {
          b$$inline_785.prev_fmts = c$$inline_786[d$$inline_787];
        }
        var g$$inline_790 = G$$1(a$$inline_784, 9);
        var v737 = g$$inline_790[d$$inline_787];
        if (v737) {
          var v2417 = g$$inline_790[d$$inline_787];
          var v5080 = JAM.call(v2417.toLowerCase, v2417, [], JAM.policy.p3);
          b$$inline_785.prev_slotnames = v5080;
        }
        var v738;
        if (e$$inline_788) {
          var v2418;
          if (c$$inline_786[d$$inline_787]) {
            v2418 = c$$inline_786[d$$inline_787] + ("," + e$$inline_788);
          } else {
            v2418 = e$$inline_788;
          }
          v738 = JAM.set(c$$inline_786, d$$inline_787, v2418, JAM.policy.p2);
        } else {
          var v2419 = f$$inline_789;
          if (v2419) {
            var v3591;
            if (g$$inline_790[d$$inline_787]) {
              v3591 = g$$inline_790[d$$inline_787] + ("," + f$$inline_789);
            } else {
              v3591 = f$$inline_789;
            }
            v2419 = JAM.set(g$$inline_790, d$$inline_787, v3591, JAM.policy.p2);
          }
          v738 = v2419;
        }
        v738;
      }
      var v5081 = G$$1(b$$inline_778, 7);
      a$$inline_777.correlator = v5081;
      if (window.google_ad_channel) {
        c$$inline_783 = G$$1(b$$inline_778, 10);
        var d$$inline_791 = "";
        var v740 = window.google_ad_channel;
        var e$$inline_792 = JAM.call(v740.split, v740, [Ni], JAM.policy.p3);
        var f$$inline_793 = 0;
        var v742 = f$$inline_793 < e$$inline_792.length;
        for (;v742;) {
          var g$$inline_794 = e$$inline_792[f$$inline_793];
          var v741;
          if (c$$inline_783[g$$inline_794]) {
            v741 = d$$inline_791 = d$$inline_791 + (g$$inline_794 + "+");
          } else {
            introspect(JAM.policy.p2) {
              v741 = c$$inline_783[g$$inline_794] = !0;
            }
          }
          v741;
          f$$inline_793++;
          v742 = f$$inline_793 < e$$inline_792.length;
        }
        a$$inline_777.pv_ch = d$$inline_791;
      }
      if (window.google_ad_host_channel) {
        var JSCompiler_inline_result$$inline_795;
        var b$$inline_796 = G$$1(b$$inline_778, 11);
        var v744 = window.google_ad_host_channel;
        var c$$inline_797 = JAM.call(v744.split, v744, ["|"], JAM.policy.p3);
        var d$$inline_798 = -1;
        var e$$inline_799 = [];
        var f$$inline_800 = 0;
        var v750 = f$$inline_800 < c$$inline_797.length;
        for (;v750;) {
          var v745 = c$$inline_797[f$$inline_800];
          var g$$inline_801 = JAM.call(v745.split, v745, [Ni], JAM.policy.p3);
          var v746 = b$$inline_796[f$$inline_800];
          if (!v746) {
            b$$inline_796[f$$inline_800] = {};
          }
          var h$$inline_802 = "";
          var k$$inline_803 = 0;
          var v748 = k$$inline_803 < g$$inline_801.length;
          for (;v748;) {
            var l$$inline_804 = g$$inline_801[k$$inline_803];
            var v747 = "" != l$$inline_804;
            if (v747) {
              var v2426;
              if (b$$inline_796[f$$inline_800][l$$inline_804]) {
                v2426 = h$$inline_802 = h$$inline_802 + ("+" + l$$inline_804);
              } else {
                var v3593 = b$$inline_796[f$$inline_800];
                introspect(JAM.policy.p2) {
                  v2426 = v3593[l$$inline_804] = !0;
                }
              }
              v2426;
            }
            k$$inline_803++;
            v748 = k$$inline_803 < g$$inline_801.length;
          }
          h$$inline_802 = JAM.call(h$$inline_802.slice, h$$inline_802, [1], JAM.policy.p3);
          e$$inline_799[f$$inline_800] = h$$inline_802;
          var v749 = "" != h$$inline_802;
          if (v749) {
            d$$inline_798 = f$$inline_800;
          }
          f$$inline_800++;
          v750 = f$$inline_800 < c$$inline_797.length;
        }
        c$$inline_797 = "";
        if (-1 < d$$inline_798) {
          f$$inline_800 = 0;
          var v751 = f$$inline_800 < d$$inline_798;
          for (;v751;) {
            c$$inline_797 = c$$inline_797 + (e$$inline_799[f$$inline_800] + "|");
            f$$inline_800++;
            v751 = f$$inline_800 < d$$inline_798;
          }
          c$$inline_797 = c$$inline_797 + e$$inline_799[d$$inline_798];
        }
        JSCompiler_inline_result$$inline_795 = c$$inline_797;
        b$$inline_778 = JSCompiler_inline_result$$inline_795;
        a$$inline_777.pv_h_ch = b$$inline_778;
      }
      if (Ea$$1) {
        a$$inline_777.jscb = 1;
      }
      if (Fa$$1) {
        a$$inline_777.jscd = 1;
      }
      a$$inline_777.frm = window.google_iframing;
      b$$inline_778 = D$$1().document;
      c$$inline_783 = "";
      try {
        c$$inline_783 = b$$inline_778.cookie;
      } catch (h$$inline_815) {
      }
      var a$$inline_805 = b$$inline_778.domain;
      var b$$inline_806 = c$$inline_783;
      var c$$inline_807 = ob$$1();
      var d$$inline_808 = window.screen;
      var e$$inline_809 = b$$inline_778.referrer;
      var v3596 = new Date;
      var f$$inline_810 = JAM.call(Math.round, Math, [JAM.call(v3596.getTime, v3596, [], JAM.policy.p3) / 1E3], JAM.policy.p3);
      var g$$inline_811 = window.google_analytics_domain_name;
      var v756;
      if ("undefined" == typeof g$$inline_811) {
        v756 = Fh("auto", a$$inline_805);
      } else {
        v756 = Fh(g$$inline_811, a$$inline_805);
      }
      a$$inline_805 = v756;
      var h$$inline_812 = -1 < JAM.call(b$$inline_806.indexOf, b$$inline_806, ["__utma=" + a$$inline_805 + "."], JAM.policy.p3);
      g$$inline_811 = -1 < JAM.call(b$$inline_806.indexOf, b$$inline_806, ["__utmb=" + a$$inline_805], JAM.policy.p3);
      var k$$inline_813 = mc("google_persistent_state");
      var JSCompiler_temp$$929;
      if (JSCompiler_temp$$929 = G$$1(k$$inline_813, 14)) {
      } else {
        var b$$inline_970 = {};
        JSCompiler_temp$$929 = oc(k$$inline_813, 14, b$$inline_970);
      }
      k$$inline_813 = JSCompiler_temp$$929;
      var l$$inline_814 = !1;
      if (h$$inline_812) {
        var v4906 = JAM.call(b$$inline_806.split, b$$inline_806, ["__utma=" + a$$inline_805 + "."], JAM.policy.p3)[1];
        var v4316 = JAM.call(v4906.split, v4906, [";"], JAM.policy.p3)[0];
        c$$inline_807 = JAM.call(v4316.split, v4316, ["."], JAM.policy.p3);
        var v4317;
        if (g$$inline_811) {
          v4317 = k$$inline_813.sid = c$$inline_807[3] + "";
        } else {
          var v4702 = k$$inline_813.sid;
          if (!v4702) {
            v4702 = k$$inline_813.sid = f$$inline_810 + "";
          }
          v4317 = v4702;
        }
        v4317;
        k$$inline_813.vid = c$$inline_807[0] + "." + c$$inline_807[1];
        k$$inline_813.from_cookie = !0;
      } else {
        var v760 = k$$inline_813.sid;
        if (!v760) {
          v760 = k$$inline_813.sid = f$$inline_810 + "";
        }
        var JSCompiler_temp_const$$933 = v760;
        var JSCompiler_temp$$934;
        if (JSCompiler_temp$$934 = k$$inline_813.vid) {
        } else {
          var JSCompiler_temp_const$$936 = l$$inline_814 = !0;
          var JSCompiler_temp_const$$935 = k$$inline_813;
          var JSCompiler_inline_result$$937;
          var a$$inline_972 = b$$inline_806;
          var b$$inline_973 = c$$inline_807;
          var c$$inline_974 = d$$inline_808;
          var d$$inline_975 = e$$inline_809;
          var JSCompiler_temp_const$$inline_976 = JAM.call(Math.round, Math, [2147483647 * JAM.call(Math.random, Math, [], JAM.policy.p3)], JAM.policy.p3);
          var JSCompiler_inline_result$$inline_977;
          var a$$inline_978 = a$$inline_972;
          var b$$inline_979 = b$$inline_973;
          var c$$inline_980 = c$$inline_974;
          var d$$inline_981 = d$$inline_975;
          var v2437 = Dh.appName;
          var v2438 = Dh.version;
          var v3601;
          if (Dh.language) {
            v3601 = Dh.language;
          } else {
            v3601 = Dh.browserLanguage;
          }
          var v2439 = v3601;
          var v2440 = Dh.platform;
          var v2441 = Dh.userAgent;
          var v3602;
          if (JAM.call(Dh.javaEnabled, Dh, [], JAM.policy.p3)) {
            v3602 = 1;
          } else {
            v3602 = 0;
          }
          var v762 = [v2437, v2438, v2439, v2440, v2441, v3602];
          var e$$inline_982 = JAM.call(v762.join, v762, [""], JAM.policy.p3);
          var v763;
          if (c$$inline_980) {
            v763 = e$$inline_982 = e$$inline_982 + (c$$inline_980.width + "x" + c$$inline_980.height + c$$inline_980.colorDepth);
          } else {
            var v2443 = window.java;
            if (v2443) {
              var v4705 = java.awt.Toolkit;
              var v4323 = JAM.call(v4705.getDefaultToolkit, v4705, [], JAM.policy.p3);
              c$$inline_980 = JAM.call(v4323.getScreenSize, v4323, [], JAM.policy.p3);
              v2443 = e$$inline_982 = e$$inline_982 + (c$$inline_980.screen.width + "x" + c$$inline_980.screen.height);
            }
            v763 = v2443;
          }
          v763;
          e$$inline_982 = e$$inline_982 + a$$inline_978;
          e$$inline_982 = e$$inline_982 + (d$$inline_981 || "");
          a$$inline_978 = e$$inline_982.length;
          var v764 = 0 < b$$inline_979;
          for (;v764;) {
            var v3604 = b$$inline_979;
            b$$inline_979 = b$$inline_979 - 1;
            var v3605 = a$$inline_978;
            a$$inline_978 = a$$inline_978 + 1;
            e$$inline_982 = e$$inline_982 + (v3604 ^ v3605);
            v764 = 0 < b$$inline_979;
          }
          JSCompiler_inline_result$$inline_977 = Jh(e$$inline_982);
          JSCompiler_inline_result$$937 = JSCompiler_temp_const$$inline_976 ^ JSCompiler_inline_result$$inline_977 & 2147483647;
          JSCompiler_temp_const$$936;
          JSCompiler_temp$$934 = JSCompiler_temp_const$$935.vid = JSCompiler_inline_result$$937 + "." + f$$inline_810;
        }
        JSCompiler_temp_const$$933;
        JSCompiler_temp$$934;
        k$$inline_813.from_cookie = !1;
      }
      if (k$$inline_813.cid) {
      } else {
        var JSCompiler_inline_result$$939;
        JSCompiler_inline_label_Hh_990: {
          var a$$inline_984 = b$$inline_806;
          var b$$inline_985 = 999;
          var c$$inline_986 = window.google_analytics_domain_name;
          if (c$$inline_986) {
            var v3606;
            if (0 == JAM.call(c$$inline_986.indexOf, c$$inline_986, ["."], JAM.policy.p3)) {
              v3606 = JAM.call(c$$inline_986.substr, c$$inline_986, [1], JAM.policy.p3);
            } else {
              v3606 = c$$inline_986;
            }
            c$$inline_986 = v3606;
            var v4325 = "" + c$$inline_986;
            b$$inline_985 = JAM.call(v4325.split, v4325, ["."], JAM.policy.p3).length;
          }
          var d$$inline_987;
          c$$inline_986 = 999;
          a$$inline_984 = JAM.call(a$$inline_984.split, a$$inline_984, [";"], JAM.policy.p3);
          var e$$inline_988 = 0;
          var v770 = e$$inline_988 < a$$inline_984.length;
          for (;v770;) {
            var v767 = JAM.call(Kh.exec, Kh, [a$$inline_984[e$$inline_988]], JAM.policy.p3);
            if (!v767) {
              v767 = JAM.call(Lh.exec, Lh, [a$$inline_984[e$$inline_988]], JAM.policy.p3);
            }
            var f$$inline_989 = v767;
            if (f$$inline_989) {
              if (f$$inline_989[1] == b$$inline_985) {
                JSCompiler_inline_result$$939 = f$$inline_989[2];
                break JSCompiler_inline_label_Hh_990;
              }
              var v769 = f$$inline_989[1] < c$$inline_986;
              if (v769) {
                c$$inline_986 = f$$inline_989[1];
                d$$inline_987 = f$$inline_989[2];
              }
            }
            e$$inline_988++;
            v770 = e$$inline_988 < a$$inline_984.length;
          }
          JSCompiler_inline_result$$939 = d$$inline_987;
        }
        b$$inline_806 = JSCompiler_inline_result$$939;
        var v2454;
        var v4326 = l$$inline_814 && b$$inline_806;
        if (v4326) {
          v4326 = -1 != JAM.call(b$$inline_806.search, b$$inline_806, [/^\d+\.\d+$/], JAM.policy.p3);
        }
        if (v4326) {
          v2454 = k$$inline_813.vid = b$$inline_806;
        } else {
          var v3608 = b$$inline_806 != k$$inline_813.vid;
          if (v3608) {
            v3608 = k$$inline_813.cid = b$$inline_806;
          }
          v2454 = v3608;
        }
        v2454;
      }
      k$$inline_813.dh = a$$inline_805;
      var v772 = k$$inline_813.hid;
      if (!v772) {
        var v5082 = JAM.call(Math.round, Math, [2147483647 * JAM.call(Math.random, Math, [], JAM.policy.p3)], JAM.policy.p3);
        k$$inline_813.hid = v5082;
      }
      b$$inline_778 = k$$inline_813;
      a$$inline_777.ga_vid = b$$inline_778.vid;
      a$$inline_777.ga_sid = b$$inline_778.sid;
      a$$inline_777.ga_hid = b$$inline_778.hid;
      a$$inline_777.ga_fc = b$$inline_778.from_cookie;
      a$$inline_777.ga_cid = b$$inline_778.cid;
      a$$inline_777.ga_wpids = window.google_analytics_uacct;
      var a$$inline_818 = b$$inline_704;
      var v2457 = new Date;
      a$$inline_818.u_tz = -JAM.call(v2457.getTimezoneOffset, v2457, [], JAM.policy.p3);
      var v5083 = ob$$1();
      a$$inline_818.u_his = v5083;
      var v5084 = JAM.call(navigator.javaEnabled, navigator, [], JAM.policy.p3);
      a$$inline_818.u_java = v5084;
      var v774 = window.screen;
      if (v774) {
        a$$inline_818.u_h = window.screen.height;
        a$$inline_818.u_w = window.screen.width;
        a$$inline_818.u_ah = window.screen.availHeight;
        a$$inline_818.u_aw = window.screen.availWidth;
        a$$inline_818.u_cd = window.screen.colorDepth;
      }
      var v775 = navigator.plugins;
      if (v775) {
        a$$inline_818.u_nplug = navigator.plugins.length;
      }
      var v776 = navigator.mimeTypes;
      if (v776) {
        a$$inline_818.u_nmime = navigator.mimeTypes.length;
      }
      if (a$$inline_703) {
        var JSCompiler_temp_const$$733;
        var a$$inline_820 = a$$inline_703;
        var b$$inline_821 = b$$inline_704;
        var JSCompiler_temp_const$$930 = b$$inline_821;
        var JSCompiler_inline_result$$931;
        var a$$inline_991 = a$$inline_820;
        var b$$inline_992 = cd(a$$inline_991);
        var c$$inline_993 = "";
        if (b$$inline_992.body.createTextRange) {
          var v777 = b$$inline_992.body;
          b$$inline_992 = JAM.call(v777.createTextRange, v777, [], JAM.policy.p3);
          JAM.call(b$$inline_992.moveToElementText, b$$inline_992, [a$$inline_991], JAM.policy.p3);
          try {
            c$$inline_993 = JAM.call(b$$inline_992.queryCommandValue, b$$inline_992, ["FontName"], JAM.policy.p3);
          } catch (d$$inline_1000) {
            c$$inline_993 = "";
          }
        }
        if (!c$$inline_993) {
          c$$inline_993 = R$$1(a$$inline_991, "fontFamily");
        }
        a$$inline_991 = JAM.call(c$$inline_993.split, c$$inline_993, [","], JAM.policy.p3);
        var v779 = 1 < a$$inline_991.length;
        if (v779) {
          c$$inline_993 = a$$inline_991[0];
        }
        var JSCompiler_inline_result$$inline_994;
        JSCompiler_inline_label_1001: {
          var a$$inline_995 = c$$inline_993;
          var b$$inline_996 = "\"'";
          var c$$inline_997 = b$$inline_996.length;
          var d$$inline_998 = 0;
          var v783 = d$$inline_998 < c$$inline_997;
          for (;v783;) {
            var v780;
            if (1 == c$$inline_997) {
              v780 = b$$inline_996;
            } else {
              v780 = JAM.call(b$$inline_996.charAt, b$$inline_996, [d$$inline_998], JAM.policy.p3);
            }
            var e$$inline_999 = v780;
            var v2464 = JAM.call(a$$inline_995.charAt, a$$inline_995, [0], JAM.policy.p3) == e$$inline_999;
            if (v2464) {
              v2464 = JAM.call(a$$inline_995.charAt, a$$inline_995, [a$$inline_995.length - 1], JAM.policy.p3) == e$$inline_999;
            }
            if (v2464) {
              JSCompiler_inline_result$$inline_994 = JAM.call(a$$inline_995.substring, a$$inline_995, [1, a$$inline_995.length - 1], JAM.policy.p3);
              break JSCompiler_inline_label_1001;
            }
            d$$inline_998++;
            v783 = d$$inline_998 < c$$inline_997;
          }
          JSCompiler_inline_result$$inline_994 = a$$inline_995;
        }
        JSCompiler_inline_result$$931 = JSCompiler_inline_result$$inline_994;
        var v5085 = JAM.call(JSCompiler_inline_result$$931.toLowerCase, JSCompiler_inline_result$$931, [], JAM.policy.p3);
        JSCompiler_temp_const$$930.dff = v5085;
        var v5086 = Wd(a$$inline_820);
        b$$inline_821.dfs = v5086;
        JSCompiler_temp_const$$733 = void 0;
        var JSCompiler_inline_result$$734;
        var a$$inline_823 = a$$inline_703;
        var b$$inline_824 = b$$inline_704;
        if ("html" == w$$6.google_ad_output) {
          var c$$inline_825 = D$$1();
          if (c$$inline_825.google_top_values) {
            var d$$inline_826;
            var a$$inline_1003 = c$$inline_825.google_top_values;
            var b$$inline_1004 = w$$6.google_ad_width;
            var c$$inline_1005 = w$$6.google_ad_height;
            var d$$inline_1006 = parseInt(a$$inline_1003[6], 10);
            var e$$inline_1007 = parseInt(a$$inline_1003[7], 10);
            var f$$inline_1008 = parseInt(a$$inline_1003[8], 10);
            a$$inline_1003 = parseInt(a$$inline_1003[9], 10);
            var v788;
            var v4914 = 0 < d$$inline_1006;
            if (v4914) {
              v4914 = 0 < e$$inline_1007;
            }
            var v4711 = v4914;
            if (v4711) {
              v4711 = 0 < f$$inline_1008;
            }
            var v4330 = v4711;
            if (v4330) {
              v4330 = 0 < a$$inline_1003;
            }
            var v3614 = v4330;
            if (v3614) {
              b$$inline_1004 = JAM.call(Math.abs, Math, [f$$inline_1008 - b$$inline_1004], JAM.policy.p3);
              c$$inline_1005 = JAM.call(Math.abs, Math, [a$$inline_1003 - c$$inline_1005], JAM.policy.p3);
              v3614 = 10 >= b$$inline_1004 + c$$inline_1005;
            }
            if (v3614) {
              v788 = new M$$1(d$$inline_1006, e$$inline_1007);
            } else {
              v788 = new M$$1(-12245933, -12245933);
            }
            d$$inline_826 = v788;
            var v5087 = JAM.call(Math.round, Math, [d$$inline_826.x], JAM.policy.p3);
            b$$inline_824.adx = v5087;
            var v5088 = JAM.call(Math.round, Math, [d$$inline_826.y], JAM.policy.p3);
            b$$inline_824.ady = v5088;
          }
          var v4331 = !b$$inline_824.adx;
          if (!v4331) {
            v4331 = -12245933 == b$$inline_824.adx;
          }
          var v3615 = v4331;
          if (!v3615) {
            v3615 = !b$$inline_824.ady;
          }
          var v2468 = v3615;
          if (!v2468) {
            v2468 = -12245933 == b$$inline_824.ady;
          }
          if (v2468) {
            try {
              var JSCompiler_inline_result$$926;
              var a$$inline_1010 = a$$inline_823;
              var b$$inline_1011 = window.top;
              var c$$inline_1012 = new M$$1(0, 0);
              var d$$inline_1013;
              var a$$inline_1014 = cd(a$$inline_1010);
              var v792;
              if (a$$inline_1014) {
                var v2469 = a$$inline_1014.parentWindow;
                if (!v2469) {
                  v2469 = a$$inline_1014.defaultView;
                }
                v792 = v2469;
              } else {
                v792 = window;
              }
              d$$inline_1013 = v792;
              var e$$inline_1015 = a$$inline_1010;
              var v4334 = d$$inline_1013;
              if (v4334) {
                v4334 = d$$inline_1013 != b$$inline_1011;
              }
              var v3619 = v4334;
              if (v3619) {
                v3619 = e$$inline_1015 = d$$inline_1013.frameElement;
              }
              var v2470 = v3619;
              if (v2470) {
                v2470 = d$$inline_1013 = d$$inline_1013.parent;
              }
              var v803 = v2470;
              do {
                var JSCompiler_temp$$inline_1016;
                if (d$$inline_1013 == b$$inline_1011) {
                  JSCompiler_temp$$inline_1016 = Cd(e$$inline_1015);
                } else {
                  var a$$inline_1017 = e$$inline_1015;
                  var b$$inline_1018 = void 0;
                  if (a$$inline_1017.getBoundingClientRect) {
                    b$$inline_1018 = Ad(a$$inline_1017);
                    b$$inline_1018 = new M$$1(b$$inline_1018.left, b$$inline_1018.top);
                  } else {
                    var v793 = dd(a$$inline_1017);
                    b$$inline_1018 = JAM.call(v793.Ja, v793, [], JAM.policy.p3);
                    var c$$inline_1019 = Cd(a$$inline_1017);
                    b$$inline_1018 = new M$$1(c$$inline_1019.x - b$$inline_1018.x, c$$inline_1019.y - b$$inline_1018.y);
                  }
                  var JSCompiler_temp$$inline_1020;
                  var v2477 = Oc;
                  if (v2477) {
                    v2477 = !Uc(12);
                  }
                  if (v2477) {
                    var JSCompiler_temp_const$$inline_1021 = b$$inline_1018;
                    var JSCompiler_inline_result$$inline_1022;
                    var a$$inline_1023 = a$$inline_1017;
                    var b$$inline_1024 = void 0;
                    var v797;
                    if (N$$1) {
                      v797 = b$$inline_1024 = "-ms-transform";
                    } else {
                      var v2478;
                      if (Pc) {
                        v2478 = b$$inline_1024 = "-webkit-transform";
                      } else {
                        var v3621;
                        if (Nc) {
                          v3621 = b$$inline_1024 = "-o-transform";
                        } else {
                          var v4335 = Oc;
                          if (v4335) {
                            v4335 = b$$inline_1024 = "-moz-transform";
                          }
                          v3621 = v4335;
                        }
                        v2478 = v3621;
                      }
                      v797 = v2478;
                    }
                    v797;
                    var c$$inline_1025 = void 0;
                    if (b$$inline_1024) {
                      c$$inline_1025 = R$$1(a$$inline_1023, b$$inline_1024);
                    }
                    if (!c$$inline_1025) {
                      c$$inline_1025 = R$$1(a$$inline_1023, "transform");
                    }
                    var v798;
                    if (c$$inline_1025) {
                      var v2480;
                      if (a$$inline_1023 = JAM.call(c$$inline_1025.match, c$$inline_1025, [Xd], JAM.policy.p3)) {
                        v2480 = new M$$1(parseFloat(a$$inline_1023[1]), parseFloat(a$$inline_1023[2]));
                      } else {
                        v2480 = new M$$1(0, 0);
                      }
                      v798 = v2480;
                    } else {
                      v798 = new M$$1(0, 0);
                    }
                    JSCompiler_inline_result$$inline_1022 = v798;
                    JSCompiler_temp$$inline_1020 = new M$$1(JSCompiler_temp_const$$inline_1021.x + JSCompiler_inline_result$$inline_1022.x, JSCompiler_temp_const$$inline_1021.y + JSCompiler_inline_result$$inline_1022.y);
                  } else {
                    JSCompiler_temp$$inline_1020 = b$$inline_1018;
                  }
                  JSCompiler_temp$$inline_1016 = JSCompiler_temp$$inline_1020;
                }
                var f$$inline_1026 = JSCompiler_temp$$inline_1016;
                c$$inline_1012.x = c$$inline_1012.x + f$$inline_1026.x;
                c$$inline_1012.y = c$$inline_1012.y + f$$inline_1026.y;
                var v4338 = d$$inline_1013;
                if (v4338) {
                  v4338 = d$$inline_1013 != b$$inline_1011;
                }
                var v3625 = v4338;
                if (v3625) {
                  v3625 = e$$inline_1015 = d$$inline_1013.frameElement;
                }
                var v2489 = v3625;
                if (v2489) {
                  v2489 = d$$inline_1013 = d$$inline_1013.parent;
                }
                v803 = v2489;
              } while (v803);
              JSCompiler_inline_result$$926 = c$$inline_1012;
              d$$inline_826 = JSCompiler_inline_result$$926;
              var v5089 = JAM.call(Math.round, Math, [d$$inline_826.x], JAM.policy.p3);
              b$$inline_824.adx = v5089;
              var v5090 = JAM.call(Math.round, Math, [d$$inline_826.y], JAM.policy.p3);
              b$$inline_824.ady = v5090;
            } catch (e$$inline_827) {
              b$$inline_824.adx = -12245933;
              b$$inline_824.ady = -12245933;
            }
          }
        }
        JSCompiler_inline_result$$734 = void 0;
      }
      var a$$inline_829 = b$$inline_704;
      var b$$inline_830 = D$$1();
      var c$$inline_831 = !1;
      var d$$inline_832 = de(c$$inline_831, b$$inline_830.top);
      if (d$$inline_832) {
        var JSCompiler_temp$$inline_833;
        var v2491 = -12245933 == d$$inline_832.width;
        if (v2491) {
          v2491 = b$$inline_830.google_top_values;
        }
        if (JSCompiler_temp$$inline_833 = v2491) {
          var JSCompiler_inline_result$$inline_834;
          var a$$inline_835 = b$$inline_830.google_top_values;
          var b$$inline_836 = parseInt(a$$inline_835[10], 10);
          a$$inline_835 = parseInt(a$$inline_835[11], 10);
          var v809;
          var v3628 = 0 < b$$inline_836;
          if (v3628) {
            v3628 = 0 < a$$inline_835;
          }
          if (v3628) {
            v809 = new u$$2(b$$inline_836, a$$inline_835);
          } else {
            v809 = new u$$2(-12245933, -12245933);
          }
          JSCompiler_inline_result$$inline_834 = v809;
          JSCompiler_temp$$inline_833 = d$$inline_832 = JSCompiler_inline_result$$inline_834;
        }
        JSCompiler_temp$$inline_833;
        a$$inline_829.biw = d$$inline_832.width;
        a$$inline_829.bih = d$$inline_832.height;
      }
      var v2493 = b$$inline_830.top != b$$inline_830;
      if (v2493) {
        v2493 = b$$inline_830 = de(c$$inline_831, b$$inline_830);
      }
      var v811 = v2493;
      if (v811) {
        a$$inline_829.isw = b$$inline_830.width;
        a$$inline_829.ish = b$$inline_830.height;
      }
      var a$$inline_838 = b$$inline_704;
      var b$$inline_839;
      JSCompiler_inline_label_843: {
        var a$$inline_840 = D$$1();
        if (a$$inline_840 == a$$inline_840.top) {
          b$$inline_839 = 0;
          break JSCompiler_inline_label_843;
        }
        var b$$inline_841 = [];
        JAM.call(b$$inline_841.push, b$$inline_841, [a$$inline_840.document.URL], JAM.policy.p3);
        var v814 = a$$inline_840.name;
        if (v814) {
          JAM.call(b$$inline_841.push, b$$inline_841, [a$$inline_840.name], JAM.policy.p3);
        }
        var c$$inline_842 = !0;
        a$$inline_840 = de(!c$$inline_842, a$$inline_840);
        var v2497 = a$$inline_840.width;
        JAM.call(b$$inline_841.push, b$$inline_841, [JAM.call(v2497.toString, v2497, [], JAM.policy.p3)], JAM.policy.p3);
        var v2498 = a$$inline_840.height;
        JAM.call(b$$inline_841.push, b$$inline_841, [JAM.call(v2498.toString, v2498, [], JAM.policy.p3)], JAM.policy.p3);
        b$$inline_839 = Ab(JAM.call(b$$inline_841.join, b$$inline_841, [""], JAM.policy.p3));
      }
      var v819 = 0 != b$$inline_839;
      if (v819) {
        var v5091 = JAM.call(b$$inline_839.toString, b$$inline_839, [], JAM.policy.p3);
        a$$inline_838.ifk = v5091;
      }
      var a$$inline_845 = b$$inline_704;
      var b$$inline_846 = J$$1();
      var v2499 = n$$2(window.google_eids);
      if (v2499) {
        v2499 = 0 !== window.google_eids.length;
      }
      if (v2499) {
        ze = ze | 64;
        var c$$inline_847 = 0;
        var v821 = c$$inline_847 < window.google_eids.length;
        for (;v821;) {
          var v820 = p$$1(window.google_eids[c$$inline_847]);
          if (v820) {
            JAM.call(b$$inline_846.bb, b$$inline_846, [window.google_eids[c$$inline_847]], JAM.policy.p3);
          }
          c$$inline_847++;
          v821 = c$$inline_847 < window.google_eids.length;
        }
      }
      var v5092 = JAM.call(b$$inline_846.Ka, b$$inline_846, [], JAM.policy.p3);
      a$$inline_845.eid = v5092;
      var a$$inline_849 = b$$inline_704;
      var b$$inline_850 = me();
      var v823 = b$$inline_850 = JAM.call(b$$inline_850.getOseId, b$$inline_850, [], JAM.policy.p3);
      if (v823) {
        a$$inline_849.oid = b$$inline_850;
      }
      var a$$inline_852 = b$$inline_704;
      var b$$inline_853 = D$$1();
      a$$inline_852.ref = window.google_referrer_url;
      a$$inline_852.loc = window.google_page_location;
      var c$$inline_854 = hc();
      c$$inline_854 = cf(c$$inline_854);
      var d$$inline_855 = K$$1;
      var e$$inline_856 = 4;
      var f$$inline_857 = J$$1();
      var g$$inline_858 = d$$inline_855.TOP_URL_REPLACES_MISSING_URL.EXPERIMENT;
      if (JAM.call(f$$inline_857.m, f$$inline_857, [e$$inline_856], JAM.policy.p3) == g$$inline_858) {
        var b$$inline_859 = c$$inline_854.url;
        var v4340 = a$$inline_852.url;
        if (!v4340) {
          v4340 = a$$inline_852.ref;
        }
        var v3636 = v4340;
        if (!v3636) {
          v3636 = a$$inline_852.loc;
        }
        var v2505 = v3636;
        if (!v2505) {
          v2505 = !b$$inline_859;
        }
        var v825 = v2505;
        if (!v825) {
          a$$inline_852.url = b$$inline_859;
        }
      }
      d$$inline_855 = d$$inline_855.ALWAYS_USE_DELAYED_IMPRESSIONS.EXPERIMENT;
      if (JAM.call(f$$inline_857.m, f$$inline_857, [e$$inline_856], JAM.policy.p3) == d$$inline_855) {
        a$$inline_852.unviewed_position_start = "1";
      }
      var v829 = a$$inline_852.loc;
      if (!v829) {
        v829 = a$$inline_852.url;
      }
      e$$inline_856 = v829;
      var v830 = !Ye();
      if (v830) {
        v830 = c$$inline_854.url == a$$inline_852.ref;
      }
      f$$inline_857 = v830;
      var v2512 = f$$inline_857;
      if (!v2512) {
        v2512 = c$$inline_854.url == e$$inline_856;
      }
      var v831 = v2512;
      if (!v831) {
        a$$inline_852.top = c$$inline_854.url;
      }
      var v832 = window.google_async_rrc;
      if (v832) {
        a$$inline_852.rr = window.google_async_rrc;
      }
      a$$inline_852.rs = 0;
      var v833 = c$$inline_854 = b$$inline_853.google_top_js_status;
      if (v833) {
        a$$inline_852.jp = c$$inline_854;
      }
      if (Xi) {
        a$$inline_852.jpd = Xi;
      }
      if (c$$inline_854 = Mh(b$$inline_853)) {
        e$$inline_856 = new Uh(c$$inline_854);
        var v3640 = JAM.call(e$$inline_856.yb, e$$inline_856, [], JAM.policy.p3);
        if (v3640) {
          var v5093 = JAM.call(e$$inline_856.Ob, e$$inline_856, [], JAM.policy.p3);
          a$$inline_852.dss = v5093;
        }
        var v2514 = JAM.call(c$$inline_854.Oa, c$$inline_854, [], JAM.policy.p3);
        if (v2514) {
          var v5094 = JAM.call(c$$inline_854.Oa, c$$inline_854, [], JAM.policy.p3);
          a$$inline_852.dsd = v5094;
        }
      }
      if (ch(window, b$$inline_853)) {
        var a$$inline_860 = b$$inline_853;
        var c$$inline_861;
        JSCompiler_inline_label_882: {
          var a$$inline_862 = a$$inline_860;
          var b$$inline_863 = window.google_ad_client;
          var c$$inline_864 = a$$inline_862.location.hash;
          var v2515 = !c$$inline_864;
          if (!v2515) {
            v2515 = !c$$inline_864.indexOf;
          }
          if (v2515) {
            c$$inline_861 = !1;
            break JSCompiler_inline_label_882;
          }
          var d$$inline_865;
          var v837 = -1 != JAM.call(c$$inline_864.indexOf, c$$inline_864, ["google_anchor_debug"], JAM.policy.p3);
          if (v837) {
            d$$inline_865 = Yg(1);
          }
          if (!d$$inline_865) {
            c$$inline_861 = !1;
            break JSCompiler_inline_label_882;
          }
          JAM.call(d$$inline_865.ja, d$$inline_865, [a$$inline_862, b$$inline_863], JAM.policy.p3);
          c$$inline_861 = !0;
        }
        if (!c$$inline_861) {
          new dh(a$$inline_860);
        }
      }
      c$$inline_854 = rg(b$$inline_853);
      var v840 = c$$inline_854.wasReactiveAdConfigHandlerRegistered;
      if (v840) {
        var v5095 = ah(window, b$$inline_853);
        a$$inline_852.fc = v5095;
      }
      if (ub(w$$6)) {
      } else {
        var JSCompiler_inline_result$$inline_866;
        var a$$inline_867 = "";
        if (document.documentMode) {
          var b$$inline_868 = JAM.call(document.createElement, document, ["IFRAME"], JAM.policy.p3);
          b$$inline_868.frameBorder = 0;
          b$$inline_868.style.height = 0;
          b$$inline_868.style.width = 0;
          b$$inline_868.style.position = "absolute";
          if (document.body) {
            var v844 = document.body;
            JAM.call(v844.appendChild, v844, [b$$inline_868], JAM.policy.p3);
            try {
              var c$$inline_869 = b$$inline_868.contentWindow.document;
              JAM.call(c$$inline_869.open, c$$inline_869, [], JAM.policy.p3);
              JAM.call(c$$inline_869.write, c$$inline_869, ["<!DOCTYPE html>"], JAM.policy.p3);
              JAM.call(c$$inline_869.close, c$$inline_869, [], JAM.policy.p3);
              a$$inline_867 = a$$inline_867 + c$$inline_869.documentMode;
            } catch (d$$inline_878) {
            }
            var v846 = document.body;
            JAM.call(v846.removeChild, v846, [b$$inline_868], JAM.policy.p3);
          }
        }
        JSCompiler_inline_result$$inline_866 = a$$inline_867;
        a$$inline_852.docm = JSCompiler_inline_result$$inline_866;
      }
      c$$inline_854 = K$$1.SS;
      var v850 = J$$1();
      e$$inline_856 = JAM.call(v850.m, v850, [14], JAM.policy.p3);
      var v851 = e$$inline_856 == c$$inline_854.COUNT_AD_FRAMES_ON_PAGE_EXPERIMENT;
      if (v851) {
        var v5096 = JAM.call(T$$1.frameCountsWithDelayedPingback, T$$1, [b$$inline_853, a$$inline_852.adk, a$$inline_852.correlator, a$$inline_852.frm], JAM.policy.p3);
        a$$inline_852.frmn = v5096;
      }
      if (e$$inline_856 == c$$inline_854.BROWSER_DIMENSIONS_EXPERIMENT) {
        var JSCompiler_inline_result$$inline_870;
        try {
          var b$$inline_871 = b$$inline_853.screenX;
          var c$$inline_872 = b$$inline_853.screenY;
        } catch (d$$inline_879) {
        }
        try {
          var e$$inline_873 = b$$inline_853.outerWidth;
          var f$$inline_874 = b$$inline_853.outerHeight;
        } catch (g$$inline_880) {
        }
        try {
          var h$$inline_875 = b$$inline_853.innerWidth;
          var k$$inline_876 = b$$inline_853.innerHeight;
        } catch (l$$inline_881) {
        }
        var v852 = b$$inline_853.screenLeft;
        var v853 = b$$inline_853.screenTop;
        var v2524;
        if (b$$inline_853.screen) {
          v2524 = b$$inline_853.screen.availWidth;
        } else {
          v2524 = void 0;
        }
        var v854 = v2524;
        var v2525;
        if (b$$inline_853.screen) {
          v2525 = b$$inline_853.screen.availTop;
        } else {
          v2525 = void 0;
        }
        JSCompiler_inline_result$$inline_870 = [v852, v853, b$$inline_871, c$$inline_872, v854, v2525, e$$inline_873, f$$inline_874, h$$inline_875, k$$inline_876];
        b$$inline_853 = JSCompiler_inline_result$$inline_870;
        var v5097 = JAM.call(b$$inline_853.join, b$$inline_853, [","], JAM.policy.p3);
        a$$inline_852.brdim = v5097;
      }
      var a$$inline_877 = 0;
      var v857 = void 0 === w$$6.postMessage;
      if (v857) {
        a$$inline_877 = a$$inline_877 | 1;
      }
      b$$inline_853 = a$$inline_877;
      var v858 = 0 < b$$inline_853;
      if (v858) {
        a$$inline_852.osd = b$$inline_853;
      }
      var v5098 = Xe(document);
      a$$inline_852.vis = v5098;
      b$$inline_704.fu = ze;
      a$$inline_500 = b$$inline_704;
      var c$$inline_502 = L$$1(b$$inline_501, "/pagead/ads?");
      var JSCompiler_inline_result$$575;
      var v859 = J$$1();
      var a$$inline_706 = JAM.call(v859.m, v859, [19], JAM.policy.p3);
      var b$$inline_707 = K$$1.PRERENDERING_DELAYED_IMPRESSION;
      var v860 = a$$inline_706 == b$$inline_707.EXPERIMENT;
      if (v860) {
        v860 = "html" == window.google_ad_output;
      }
      JSCompiler_inline_result$$575 = v860;
      if (JSCompiler_inline_result$$575) {
        a$$inline_500.unviewed_position_start = "1";
      }
      var v4342 = a$$inline_500.unviewed_position_start;
      if (!v4342) {
        var v4717 = w$$6.google_ad_output;
        if (v4717) {
          v4717 = "html" !== w$$6.google_ad_output;
        }
        v4342 = v4717;
      }
      var v3647 = v4342;
      if (!v3647) {
        v3647 = 3 != Xe(v$$1);
      }
      var v2530 = v3647;
      if (!v2530) {
        v2530 = !Ia$$1;
      }
      var v861 = v2530;
      if (!v861) {
        zi = !0;
        yi = c$$inline_502;
        c$$inline_502 = L$$1(b$$inline_501, "/pagead/blank.gif#?");
      }
      var v862 = window;
      var v5099 = ki(a$$inline_500, c$$inline_502 + "");
      v862.google_ad_url = v5099;
      c$$289 = !0;
    }
    var v2533 = a$$557;
    if (v2533) {
      v2533 = a$$557.id == b$$428;
    }
    var v863 = v2533;
    if (v863) {
      qd(a$$557);
    }
    if (c$$289) {
      var JSCompiler_inline_result$$6;
      var a$$inline_504 = window;
      var c$$inline_506 = window.google_ad_url;
      if (!B$$2) {
        wb(a$$inline_504);
      }
      var e$$inline_508 = yb(a$$inline_504);
      c$$inline_506 = ki({ifi:e$$inline_508}, c$$inline_506);
      var v865;
      if (1991 < c$$inline_506.length) {
        v865 = JAM.call(c$$inline_506.substring, c$$inline_506, [0, 1983], JAM.policy.p3) + "&trunc=1";
      } else {
        v865 = c$$inline_506;
      }
      c$$inline_506 = v865;
      c$$inline_506 = JAM.call(c$$inline_506.replace, c$$inline_506, [/%\w?$/, ""], JAM.policy.p3);
      var f$$inline_509 = "script";
      var g$$inline_510 = Lb(e$$inline_508);
      H$$1();
      var v3651 = "js" != a$$inline_504.google_ad_output;
      if (v3651) {
        v3651 = "json_html" != a$$inline_504.google_ad_output;
      }
      var v2537 = v3651;
      if (!v2537) {
        var v3652 = !a$$inline_504.google_ad_request_done;
        if (v3652) {
          v3652 = !a$$inline_504.google_radlink_request_done;
        }
        v2537 = v3652;
      }
      if (v2537) {
        if ("html" == a$$inline_504.google_ad_output) {
          var a$$inline_711 = a$$inline_504;
          var c$$inline_713 = c$$inline_506;
          var d$$inline_714 = e$$inline_508;
          var e$$inline_715 = ci;
          var f$$inline_716 = void 0;
          var v866;
          if (e$$inline_715) {
            v866 = JAM.call(c$$inline_713.replace, c$$inline_713, [/&ea=[^&]*/, ""], JAM.policy.p3) + "&ea=0";
          } else {
            v866 = c$$inline_713;
          }
          var g$$inline_717 = v866;
          var h$$inline_718 = Lb(d$$inline_714);
          var k$$inline_719 = {id:h$$inline_718, name:h$$inline_718};
          Ff(k$$inline_719, a$$inline_711.google_ad_width, a$$inline_711.google_ad_height, !1, mi(g$$inline_717));
          var l$$inline_720 = Cf(k$$inline_719);
          var v2540 = a$$inline_711.google_container_id;
          if (!v2540) {
            v2540 = f$$inline_716;
          }
          var v871 = v2540;
          if (!v871) {
            v871 = null;
          }
          var z$$inline_721 = v871;
          f$$inline_716 = a$$inline_711.google_async_iframe_id;
          var C$$inline_722 = a$$inline_711.google_container_id;
          var v872 = e$$inline_715;
          if (v872) {
            var v2542 = zf();
            if (!v2542) {
              v2542 = gi();
            }
            v872 = v2542;
          }
          e$$inline_715 = v872;
          var I$$inline_723 = "";
          if (e$$inline_715) {
            if (gi()) {
              var JSCompiler_inline_result$$737;
              var a$$inline_884 = 10;
              var v873 = void 0;
              if (!v873) {
                v873 = th;
              }
              var c$$inline_886 = v873;
              var d$$inline_887 = c$$inline_886.length;
              var e$$inline_888 = "";
              var v2544 = a$$inline_884;
              a$$inline_884 = a$$inline_884 - 1;
              var v874 = 0 < v2544;
              for (;v874;) {
                e$$inline_888 = e$$inline_888 + JAM.call(c$$inline_886.charAt, c$$inline_886, [JAM.call(Math.floor, Math, [JAM.call(Math.random, Math, [], JAM.policy.p3) * d$$inline_887], JAM.policy.p3)], JAM.policy.p3);
                var v2546 = a$$inline_884;
                a$$inline_884 = a$$inline_884 - 1;
                v874 = 0 < v2546;
              }
              JSCompiler_inline_result$$737 = e$$inline_888;
              var JSCompiler_temp_const$$747 = I$$inline_723 = JSCompiler_inline_result$$737;
              var JSCompiler_temp_const$$746 = c$$inline_713;
              var JSCompiler_temp_const$$745 = I$$inline_723;
              var JSCompiler_inline_result$$748;
              var a$$inline_890 = v$$1.URL;
              var v875 = !!a$$inline_890;
              if (v875) {
                var v2548 = 0 < JAM.call(a$$inline_890.indexOf, a$$inline_890, ["?google_debug"], JAM.policy.p3);
                if (!v2548) {
                  v2548 = 0 < JAM.call(a$$inline_890.indexOf, a$$inline_890, ["&google_debug"], JAM.policy.p3);
                }
                v875 = v2548;
              }
              JSCompiler_inline_result$$748 = v875;
              JSCompiler_temp_const$$747;
              c$$inline_713 = Zd(JSCompiler_temp_const$$746, JSCompiler_temp_const$$745, JSCompiler_inline_result$$748);
            }
          } else {
            c$$inline_713 = g$$inline_717;
          }
          if (Zg(a$$inline_711)) {
            var a$$inline_892 = a$$inline_711;
            var c$$inline_894 = c$$inline_713;
            var d$$inline_895 = k$$inline_719;
            var e$$inline_896 = f$$inline_716;
            var f$$inline_897 = D$$1();
            var JSCompiler_inline_result$$inline_898;
            JSCompiler_inline_label_908: {
              var a$$inline_899 = f$$inline_897;
              var b$$inline_900 = a$$inline_892;
              var c$$inline_901 = b$$inline_900.google_reactive_ad_format;
              if (!Ec(lg, c$$inline_901)) {
                JSCompiler_inline_result$$inline_898 = !1;
                break JSCompiler_inline_label_908;
              }
              var v878 = Ug[c$$inline_901];
              if (!v878) {
                v878 = null;
              }
              c$$inline_901 = v878;
              var JSCompiler_inline_result$$inline_902;
              JSCompiler_inline_label_909: {
                var a$$inline_903 = a$$inline_899;
                var b$$inline_904 = b$$inline_900;
                switch(c$$inline_901) {
                  case 1:
                    var JSCompiler_temp$$940;
                    if (JSCompiler_temp$$940 = Hg(a$$inline_903)) {
                      rg(a$$inline_903);
                      JSCompiler_temp$$940 = !0;
                    }
                    JSCompiler_inline_result$$inline_902 = JSCompiler_temp$$940;
                    break JSCompiler_inline_label_909;
                  case 2:
                    var a$$inline_1030 = a$$inline_903;
                    var JSCompiler_temp$$1033;
                    if (JSCompiler_temp$$1033 = Rg(a$$inline_1030, b$$inline_904)) {
                      var a$$inline_1034 = a$$inline_1030;
                      a$$inline_1034 = rg(a$$inline_1034);
                      JSCompiler_temp$$1033 = !!a$$inline_1034.wasReactiveAdConfigReceived[2];
                    }
                    JSCompiler_inline_result$$inline_902 = JSCompiler_temp$$1033;
                    break JSCompiler_inline_label_909;
                }
                JSCompiler_inline_result$$inline_902 = !1;
              }
              if (!JSCompiler_inline_result$$inline_902) {
                JSCompiler_inline_result$$inline_898 = !1;
                break JSCompiler_inline_label_908;
              }
              var d$$inline_905 = rg(a$$inline_899);
              var e$$inline_906 = d$$inline_905.wasReactiveAdCreated[c$$inline_901];
              var v884 = d$$inline_905.wasReactiveAdCreated;
              introspect(JAM.policy.p2) {
                v884[c$$inline_901] = !0;
              }
              JSCompiler_inline_result$$inline_898 = !e$$inline_906;
            }
            if (JSCompiler_inline_result$$inline_898) {
              f$$inline_897 = Zg(a$$inline_892);
              var g$$inline_907 = {};
              g$$inline_907.fa = f$$inline_897;
              c$$inline_894 = ki(g$$inline_907, c$$inline_894);
              var v5100 = mi(c$$inline_894);
              d$$inline_895.src = v5100;
              c$$inline_894 = Bf(document, d$$inline_895);
              var v885 = document.body;
              JAM.call(v885.appendChild, v885, [c$$inline_894], JAM.policy.p3);
              qh(a$$inline_892, e$$inline_896, c$$inline_894, D$$1());
            }
          } else {
            if (hi(a$$inline_711)) {
              g$$inline_717 = ga$$1(qi, a$$inline_711, document, e$$inline_715, c$$inline_713, h$$inline_718, k$$inline_719, a$$inline_711.google_ad_width, a$$inline_711.google_ad_height, z$$inline_721, f$$inline_716, C$$inline_722);
              g$$inline_717 = Mb(g$$inline_717);
              ni(a$$inline_711, c$$inline_713, g$$inline_717);
            } else {
              if ("S" == a$$inline_711.google_ad_handling_mode) {
                var a$$inline_911 = a$$inline_711;
                var b$$inline_912 = c$$inline_713;
                var c$$inline_913 = ce(b$$inline_912, "w");
                var d$$inline_914 = ce(b$$inline_912, "h");
                var e$$inline_915 = ce(b$$inline_912, "ifi");
                e$$inline_915 = Lb(e$$inline_915);
                e$$inline_915 = {id:e$$inline_915, name:e$$inline_915};
                var f$$inline_916 = "U-" + b$$inline_912;
                Ff(e$$inline_915, c$$inline_913, d$$inline_914, !1, Df(f$$inline_916));
                var v889 = a$$inline_911.document;
                JAM.call(v889.write, v889, [Cf(e$$inline_915)], JAM.policy.p3);
              } else {
                oi(a$$inline_711, document, e$$inline_715, c$$inline_713, h$$inline_718, k$$inline_719, a$$inline_711.google_ad_width, a$$inline_711.google_ad_height, z$$inline_721, f$$inline_716, C$$inline_722);
              }
            }
          }
          var v2553 = e$$inline_715;
          if (v2553) {
            v2553 = gi();
          }
          var v896 = v2553;
          if (v896) {
            var v3663 = zf();
            if (!v3663) {
              JAM.call(setTimeout, null, [xe("ac::write_ee", ei, xc), 0]);
            }
            var v3664 = w$$6.google_eas_queue;
            var v4352 = a$$inline_711.google_ad_width;
            var v4353 = a$$inline_711.google_ad_height;
            var v4354 = D$$1();
            var v4720 = f$$inline_716;
            if (!v4720) {
              v4720 = void 0;
            }
            JAM.call(v3664.push, v3664, [Yd(h$$inline_718, c$$inline_713, v4352, v4353, I$$inline_723, v4354, v4720, "google_expandable_ad_slot" + d$$inline_714)], JAM.policy.p3);
          }
          if (B$$2) {
            var a$$inline_918 = a$$inline_711.google_async_iframe_id;
            var v3666 = ["<!DOCTYPE html><html><body>", l$$inline_720, "</body></html>"];
            var c$$inline_920 = "javascript:" + ab$$1(JAM.call(v3666.join, v3666, [""], JAM.policy.p3));
            var d$$inline_921 = D$$1();
            var v898 = new Me(d$$inline_921);
            JAM.call(v898.set, v898, [a$$inline_918, c$$inline_920], JAM.policy.p3);
          }
          a$$inline_711 = JAM.call(document.getElementById, document, [h$$inline_718], JAM.policy.p3);
          var v899 = zi && a$$inline_711;
          if (v899) {
            Ai(a$$inline_711, document);
          }
        }
      } else {
        JAM.call(document.write, document, ["<" + f$$inline_509 + ' language="JavaScript1.1" src=' + ji(mi(c$$inline_506)) + "></" + f$$inline_509 + ">"], JAM.policy.p3);
      }
      sc = ga$$1(wi, g$$inline_510, c$$inline_506, a$$inline_504.google_ad_output, a$$inline_504.google_ad_width, a$$inline_504.google_ad_height);
      JSCompiler_inline_result$$6 = c$$inline_506;
      var JSCompiler_temp_const$$9 = JSCompiler_inline_result$$6;
      var JSCompiler_inline_result$$10;
      Bh(window);
      JSCompiler_inline_result$$10 = void 0;
      JSCompiler_temp_const$$9;
      var JSCompiler_temp_const$$32 = JSCompiler_inline_result$$10;
      var JSCompiler_temp$$33;
      var v2556 = a$$557 = bg;
      if (v2556) {
        v2556 = !JAM.call(a$$557.Ta, a$$557, [], JAM.policy.p3);
      }
      if (JSCompiler_temp$$33 = v2556) {
      } else {
        if (sc) {
          JAM.call(sc, null, [], JAM.policy.p3);
        }
        JSCompiler_temp$$33 = void 0;
      }
    } else {
      if (B$$2) {
        uf();
        Wb(window);
      }
    }
    return;
  }
  function Vi() {
    var a$$556 = w$$6;
    var v2557 = "html" != a$$556.google_ad_output;
    if (!v2557) {
      v2557 = ub(a$$556);
    }
    var v907 = v2557;
    if (!v907) {
      var v2558 = J$$1();
      JAM.call(v2558.k, v2558, [[K$$1.SEND_LOAD_TIME_PINGBACKS.EXPERIMENT], ra$$1, 16], JAM.policy.p3);
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
    var a$$inline_442 = b$$412;
    var b$$inline_443 = a$$540;
    var c$$inline_444 = c$$277;
    var d$$inline_445 = d$$169;
    var e$$inline_446 = e$$100;
    var f$$inline_447 = me();
    var v909 = JAM.call(f$$inline_447.getOseId, f$$inline_447, [], JAM.policy.p3);
    if (v909) {
      JAM.call(f$$inline_447.registerAdBlock, f$$inline_447, [a$$inline_442, 1, String(c$$inline_444 || ""), b$$inline_443, d$$inline_445, e$$inline_446], JAM.policy.p3);
    }
    if (B$$2) {
      uf();
      Wb(window);
    }
    return;
  }
  function oi(a$$537, b$$409, c$$274, d$$166, e$$97, f$$56, g$$34, h$$26, k$$13, l$$15, z$$8) {
    var v2563 = !c$$274;
    if (!v2563) {
      v2563 = gi();
    }
    if (v2563) {
      var v5101 = mi(d$$166);
      f$$56.src = v5101;
      var JSCompiler_temp_const$$64 = a$$537 = Cf(f$$56);
      var JSCompiler_temp$$65;
      if (z$$8) {
        var a$$inline_432 = z$$8;
        var c$$inline_434 = a$$537;
        var v4359 = a$$inline_432;
        if (v4359) {
          v4359 = a$$inline_432 = JAM.call(b$$409.getElementById, b$$409, [a$$inline_432], JAM.policy.p3);
        }
        var v3674 = v4359;
        if (v3674) {
          v3674 = c$$inline_434;
        }
        var v2564 = v3674;
        if (v2564) {
          v2564 = "" != c$$inline_434.length;
        }
        var v910 = v2564;
        if (v910) {
          a$$inline_432.style.visibility = "visible";
          JAM.set(a$$inline_432, "innerHTML", c$$inline_434);
        }
        JSCompiler_temp$$65 = void 0;
      } else {
        JSCompiler_temp$$65 = JAM.call(b$$409.write, b$$409, [a$$537], JAM.policy.p3);
      }
    } else {
      b$$409 = yb(a$$537);
      var v2565 = "google_expandable_ad_slot" + b$$409;
      var v3677 = mi(d$$166);
      var v4360 = k$$13;
      if (!v4360) {
        v4360 = void 0;
      }
      var v3678 = v4360;
      var v3679 = D$$1();
      var v4361 = l$$15;
      if (!v4361) {
        v4361 = void 0;
      }
      var v5102 = JAM.call(ExpandableAdSlotFactory.createIframe, ExpandableAdSlotFactory, [e$$97, v3677, g$$34, h$$26, v3678, v3679, v4361], JAM.policy.p3);
      JAM.set(a$$537, v2565, v5102, JAM.policy.p2);
    }
    return;
  }
  function qi(a$$536, b$$408, c$$273, d$$165, e$$96, f$$55, g$$33, h$$25, k$$12, l$$14, z$$7, C$$4, I$$2, xb$$1) {
    var a$$inline_427 = d$$165;
    var b$$inline_428 = C$$4;
    var c$$inline_429 = I$$2;
    a$$inline_427 = be(a$$inline_427, "pfi", b$$inline_428, void 0, !0);
    if (c$$inline_429) {
      var v4362;
      if (b$$inline_428 = ce(a$$inline_427, "eid")) {
        v4362 = c$$inline_429 + "%2C" + b$$inline_428;
      } else {
        v4362 = c$$inline_429;
      }
      b$$inline_428 = v4362;
      a$$inline_427 = be(a$$inline_427, "eid", b$$inline_428);
      var v3681 = 453848236 == c$$inline_429;
      if (v3681) {
        a$$inline_427 = be(a$$inline_427, "unviewed_position_start", 1, void 0, !0);
      }
    }
    d$$165 = a$$inline_427;
    var v2566 = 453848234 == I$$2;
    if (!v2566) {
      v2566 = 453848236 == I$$2;
    }
    if (v2566) {
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
      var v915 = JAM.call(d$$164.Ta, d$$164, [], JAM.policy.p3);
      if (!v915) {
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
    var v916;
    if (d$$164.ma) {
      v916 = JAM.call(c$$272, null, [JAM.call(d$$164.v, d$$164, [], JAM.policy.p3), d$$164.za, !1], JAM.policy.p3);
    } else {
      JAM.call(d$$164.zc, d$$164, [mi(b$$407), c$$272], JAM.policy.p3);
      var v3686 = d$$164.va;
      if (!v3686) {
        b$$407 = Fe;
        var v4727;
        if (JAM.call(b$$407.test, b$$407, [navigator.userAgent], JAM.policy.p3)) {
          JAM.call(d$$164.Ec, d$$164, [], JAM.policy.p3);
          b$$407 = v27;
          v4727 = JAM.call(a$$535.setTimeout, a$$535, [b$$407, Wh], JAM.policy.p3);
        } else {
          JAM.call(d$$164.ya, d$$164, [], JAM.policy.p3);
          v4727 = JAM.call(c$$272, null, [JAM.call(d$$164.v, d$$164, [], JAM.policy.p3), null, !1], JAM.policy.p3);
        }
        v3686 = v4727;
      }
      v916 = v3686;
    }
    v916;
    return;
  }
  function hi(a$$534) {
    var b$$406 = a$$534.google_ad_handling_mode;
    var v2574;
    if (B$$2) {
      v2574 = 1 == yb(a$$534);
    } else {
      v2574 = !yb(a$$534);
    }
    var v917 = v2574;
    if (v917) {
      v917 = Le(b$$406);
    }
    return v917;
  }
  function li() {
    var a$$533 = me();
    var b$$405 = mc();
    var v918 = a$$533.setUpForcePeriscope;
    if (v918) {
      JAM.call(a$$533.setUpForcePeriscope, a$$533, [], JAM.policy.p3);
    }
    return JAM.call(a$$533.setupOse, a$$533, [G$$1(b$$405, 7)], JAM.policy.p3);
  }
  function ki(a$$531, b$$403) {
    function v28(a$$532, b$$404) {
      var v3689 = a$$532;
      if (!v3689) {
        v3689 = 0 === a$$532;
      }
      var v2575 = v3689;
      if (!v2575) {
        v2575 = !1 === a$$532;
      }
      if (v2575) {
        var v3692 = "boolean" == typeof a$$532;
        if (v3692) {
          var v4368;
          if (a$$532) {
            v4368 = 1;
          } else {
            v4368 = 0;
          }
          a$$532 = v4368;
        }
        var v4369;
        if ("function" == typeof encodeURIComponent) {
          v4369 = encodeURIComponent(a$$532);
        } else {
          v4369 = escape(a$$532);
        }
        ib$$1(e$$95, d$$163, b$$404, "=", v4369);
        d$$163 = "&";
      }
      return;
    }
    var c$$271 = JAM.call(b$$403.slice, b$$403, [-1], JAM.policy.p3);
    var v921;
    var v3694 = "?" == c$$271;
    if (!v3694) {
      v3694 = "#" == c$$271;
    }
    if (v3694) {
      v921 = "";
    } else {
      v921 = "&";
    }
    var d$$163 = v921;
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
        var a$$inline_411 = H$$1();
        if (w$$6.google_top_experiment) {
          var a$$inline_645 = Of;
          var b$$inline_646 = K$$1.PERISCOPE_FOR_TARGETING;
          if (window.google_top_experiment) {
            var c$$inline_647;
            switch(window.google_top_experiment) {
              case a$$inline_645.CONTROL:
                c$$inline_647 = b$$inline_646.CONTROL;
                break;
              case a$$inline_645.EXPERIMENT_ZERO_LATENCY:
                c$$inline_647 = b$$inline_646.EXPERIMENT_ZERO_LATENCY;
                break;
              case a$$inline_645.EXPERIMENT_WAIT_FOR_POST_MESSAGE_RESPONSE:
                c$$inline_647 = b$$inline_646.EXPERIMENT_WAIT_FOR_POST_MESSAGE_RESPONSE;
            }
            if (c$$inline_647) {
              var v2579 = H$$1();
              JAM.call(v2579.k, v2579, [[c$$inline_647], 1, 10], JAM.policy.p3);
            }
          }
        }
        var a$$inline_649 = D$$1();
        var b$$inline_650 = K$$1.DEVICE_SENSORS;
        if (a$$inline_649.google_sensors) {
          a$$inline_649 = a$$inline_649.google_sensors.sensorsExperiment;
          var c$$inline_651;
          switch(a$$inline_649) {
            case "ds_c":
              c$$inline_651 = b$$inline_650.CONTROL;
              break;
            case "ds_zl":
              c$$inline_651 = b$$inline_650.EXPERIMENT_ZERO_LATENCY;
              break;
            case "ds_wfea":
              c$$inline_651 = b$$inline_650.EXPERIMENT_WAIT_FOR_EVENT_ARRIVAL;
          }
          if (c$$inline_651) {
            var v2581 = H$$1();
            JAM.call(v2581.k, v2581, [[c$$inline_651], 1, 10], JAM.policy.p3);
          }
        }
        var b$$inline_412 = [K$$1.EXPANDABLE_MOBILE_REVERSE.CONTROL, K$$1.EXPANDABLE_MOBILE_REVERSE.EXPERIMENT];
        JAM.call(a$$inline_411.k, a$$inline_411, [b$$inline_412, na$$1, 13], JAM.policy.p3);
        var b$$inline_654 = Ge;
        var c$$inline_655 = K$$1.PREFETCH_AD_HANDLING;
        var d$$inline_656;
        switch(w$$6.google_ad_handling_mode) {
          case b$$inline_654.CONTROL_NO_FRAME:
            d$$inline_656 = c$$inline_655.CONTROL_NO_FRAME;
            break;
          case b$$inline_654.ALWAYS_ZRT:
            d$$inline_656 = c$$inline_655.ALWAYS_ZRT;
            break;
          case b$$inline_654.SERIAL:
            d$$inline_656 = c$$inline_655.SERIAL;
        }
        if (d$$inline_656) {
          var v2585 = H$$1();
          JAM.call(v2585.k, v2585, [[d$$inline_656], 1, 4], JAM.policy.p3);
        }
        var c$$inline_413 = K$$1.SS;
        b$$inline_412 = [c$$inline_413.COUNT_AD_FRAMES_ON_PAGE_CONTROL, c$$inline_413.COUNT_AD_FRAMES_ON_PAGE_EXPERIMENT];
        JAM.call(a$$inline_411.k, a$$inline_411, [b$$inline_412, va$$1, 14], JAM.policy.p3);
        b$$inline_412 = [c$$inline_413.BROWSER_DIMENSIONS_CONTROL, c$$inline_413.BROWSER_DIMENSIONS_EXPERIMENT];
        JAM.call(a$$inline_411.k, a$$inline_411, [b$$inline_412, Ca$$1, 14], JAM.policy.p3);
        b$$inline_412 = K$$1.PERISCOPE_FOR_TARGETING;
        b$$inline_412 = [b$$inline_412.CONTROL_REFERER_CLEANUP, b$$inline_412.EXPERIMENT_REFERER_CLEANUP];
        JAM.call(a$$inline_411.k, a$$inline_411, [b$$inline_412, qa$$1, 10], JAM.policy.p3);
        if (window.google_ad_unit_key_2) {
          var a$$inline_658;
          var v936;
          if ("ctrl" == window.google_ad_unit_key_2) {
            v936 = a$$inline_658 = K$$1.ADD_ADK2.CONTROL;
          } else {
            var v2588 = JAM.call(/[0-9]+/.test, /[0-9]+/, [window.google_ad_unit_key_2], JAM.policy.p3);
            if (v2588) {
              v2588 = a$$inline_658 = K$$1.ADD_ADK2.EXPERIMENT;
            }
            v936 = v2588;
          }
          v936;
          if (a$$inline_658) {
            var v2590 = H$$1();
            JAM.call(v2590.k, v2590, [[a$$inline_658], 1, 4], JAM.policy.p3);
          }
        }
        b$$inline_412 = [K$$1.ASYNC_EXPANSION_EMBED.EXPERIMENT, K$$1.ASYNC_EXPANSION_EMBED.CONTROL];
        JAM.call(a$$inline_411.k, a$$inline_411, [b$$inline_412, ya$$1, 18], JAM.policy.p3);
        var a$$inline_660 = void 0;
        var b$$inline_661 = Pb;
        var c$$inline_662 = K$$1.ASYNC_FOR_OPERA_ANDROID;
        var v940 = a$$inline_660;
        if (!v940) {
          v940 = navigator.userAgent;
        }
        a$$inline_660 = v940;
        if (window.google_async_for_oa_experiment) {
          var d$$inline_663;
          a$$inline_660 = JAM.call(/Chrome/.test, /Chrome/, [a$$inline_660], JAM.policy.p3);
          var v941;
          if (window.google_async_for_oa_experiment == b$$inline_661.CONTROL) {
            var v2595;
            if (a$$inline_660) {
              v2595 = c$$inline_662.CONTROL_ANDROID_CHROME;
            } else {
              v2595 = c$$inline_662.CONTROL_ANDROID;
            }
            v941 = d$$inline_663 = v2595;
          } else {
            var v2596 = window.google_async_for_oa_experiment == b$$inline_661.EXPERIMENT;
            if (v2596) {
              var v3703;
              if (a$$inline_660) {
                v3703 = c$$inline_662.EXPERIMENT_ANDROID_CHROME;
              } else {
                v3703 = c$$inline_662.EXPERIMENT_ANDROID;
              }
              v2596 = d$$inline_663 = v3703;
            }
            v941 = v2596;
          }
          v941;
          if (d$$inline_663) {
            var v2598 = H$$1();
            JAM.call(v2598.k, v2598, [[d$$inline_663], 1, 4], JAM.policy.p3);
          }
        }
        b$$inline_412 = [K$$1.JS_RNG.CONTROL, K$$1.JS_RNG.EXPERIMENT];
        JAM.call(a$$inline_411.k, a$$inline_411, [b$$inline_412, za$$1, 17], JAM.policy.p3);
        var a$$inline_665 = v$$1;
        a$$inline_665 = Xe(a$$inline_665);
        if (3 == a$$inline_665) {
          a$$inline_665 = K$$1.PRERENDERING_DELAYED_IMPRESSION;
          var b$$inline_666 = H$$1();
          JAM.call(b$$inline_666.k, b$$inline_666, [[a$$inline_665.CONTROL, a$$inline_665.EXPERIMENT], ua$$1, 19], JAM.policy.p3);
        }
      }
      JSCompiler_inline_label_Vf_671: {
        var a$$inline_668 = Uf;
        var b$$inline_669 = K$$1.APPEND_AS_FOR_FORMAT_OVERRIDE;
        var c$$inline_670 = window.google_append_as_for_format_override;
        if (c$$inline_670) {
          var v2604;
          if (c$$inline_670 == a$$inline_668.EXPERIMENT) {
            v2604 = b$$inline_669.EXPERIMENT;
          } else {
            v2604 = b$$inline_669.CONTROL;
          }
          a$$inline_668 = v2604;
          var v2605 = J$$1();
          JAM.call(v2605.k, v2605, [[a$$inline_668], 1, 15], JAM.policy.p3);
          break JSCompiler_inline_label_Vf_671;
        }
      }
      JSCompiler_inline_label_Tf_676: {
        var a$$inline_672 = Sf;
        var b$$inline_673 = K$$1.ALWAYS_USE_DELAYED_IMPRESSIONS;
        var c$$inline_674 = window.google_always_use_delayed_impressions_experiment;
        var d$$inline_675 = window.google_ad_output;
        var v2607 = c$$inline_674;
        if (v2607) {
          var v3705 = !d$$inline_675;
          if (!v3705) {
            v3705 = "html" == d$$inline_675;
          }
          v2607 = v3705;
        }
        if (v2607) {
          var v2608;
          if (c$$inline_674 == a$$inline_672.EXPERIMENT) {
            v2608 = b$$inline_673.EXPERIMENT;
          } else {
            v2608 = b$$inline_673.CONTROL;
          }
          a$$inline_672 = v2608;
          var v2609 = J$$1();
          JAM.call(v2609.k, v2609, [[a$$inline_672], 1, 4], JAM.policy.p3);
          break JSCompiler_inline_label_Tf_676;
        }
      }
      var a$$inline_416 = window;
      var b$$inline_417;
      var a$$inline_677 = document.URL;
      var b$$inline_678 = {};
      a$$inline_677 = JAM.call(a$$inline_677.split, a$$inline_677, ["?"], JAM.policy.p3);
      var v949 = a$$inline_677[a$$inline_677.length - 1];
      a$$inline_677 = JAM.call(v949.split, v949, ["&"], JAM.policy.p3);
      var c$$inline_679 = 0;
      var v955 = c$$inline_679 < a$$inline_677.length;
      for (;v955;) {
        var v950 = a$$inline_677[c$$inline_679];
        var d$$inline_680 = JAM.call(v950.split, v950, ["="], JAM.policy.p3);
        if (d$$inline_680[0]) {
          try {
            var v951 = d$$inline_680[0];
            var JSCompiler_temp_const$$741 = JAM.call(v951.toLowerCase, v951, [], JAM.policy.p3);
            var JSCompiler_temp$$742;
            if (1 < d$$inline_680.length) {
              var a$$inline_755 = d$$inline_680[1];
              var v952;
              if (window.decodeURIComponent) {
                v952 = decodeURIComponent(JAM.call(a$$inline_755.replace, a$$inline_755, [/\+/g, " "], JAM.policy.p3));
              } else {
                v952 = unescape(a$$inline_755);
              }
              JSCompiler_temp$$742 = v952;
            } else {
              JSCompiler_temp$$742 = "";
            }
            JAM.set(b$$inline_678, JSCompiler_temp_const$$741, JSCompiler_temp$$742, JAM.policy.p2);
          } catch (e$$inline_681) {
          }
        }
        c$$inline_679++;
        v955 = c$$inline_679 < a$$inline_677.length;
      }
      b$$inline_417 = b$$inline_678;
      var v956 = b$$inline_417.google_ad_override;
      if (v956) {
        a$$inline_416.google_ad_override = b$$inline_417.google_ad_override;
        a$$inline_416.google_adtest = "on";
      }
      var a$$529 = window.google_start_time;
      var v957 = q$$3(a$$529);
      if (v957) {
        vf = a$$529;
        window.google_start_time = null;
      }
      te("show_ads::init_globals", ve, $h);
      var a$$inline_419 = window;
      var d$$inline_422 = "script";
      var a$$inline_683 = a$$inline_419;
      var b$$inline_684 = a$$inline_683.google_ad_width;
      var c$$inline_685 = a$$inline_683.google_ad_height;
      var d$$inline_686 = D$$1();
      var JSCompiler_inline_result$$749;
      JSCompiler_inline_label_yf_768: {
        var a$$inline_757 = a$$inline_683;
        var b$$inline_758 = d$$inline_686.document;
        try {
          var JSCompiler_temp$$inline_759;
          var v4989 = !1 === a$$inline_757.google_allow_expandable_ads;
          if (!v4989) {
            v4989 = !b$$inline_758.body;
          }
          var v4923 = v4989;
          if (!v4923) {
            var v4990 = a$$inline_757.google_ad_output;
            if (v4990) {
              v4990 = "html" != a$$inline_757.google_ad_output;
            }
            v4923 = v4990;
          }
          var v4729 = v4923;
          if (!v4729) {
            v4729 = isNaN(a$$inline_757.google_ad_height);
          }
          var v4374 = v4729;
          if (!v4374) {
            v4374 = isNaN(a$$inline_757.google_ad_width);
          }
          var v3708 = v4374;
          if (!v3708) {
            v3708 = b$$inline_758.domain != a$$inline_757.location.hostname;
          }
          var v2617 = v3708;
          if (!v2617) {
            v2617 = !JAM.call(/^http/.test, /^http/, [b$$inline_758.location.protocol], JAM.policy.p3);
          }
          if (JSCompiler_temp$$inline_759 = v2617) {
          } else {
            var JSCompiler_inline_result$$inline_760;
            JSCompiler_inline_label_767: {
              var b$$inline_761 = b$$inline_758;
              var v958;
              var v4379 = J$$1();
              if (JAM.call(v4379.m, v4379, [13], JAM.policy.p3) == K$$1.EXPANDABLE_MOBILE_REVERSE.EXPERIMENT) {
                v958 = /Win|Mac|Linux/;
              } else {
                v958 = /Win|Mac|Linux|iPad|iPod|iPhone/;
              }
              var c$$inline_762 = v958;
              var d$$inline_763 = navigator.userAgent;
              var e$$inline_764 = navigator.platform;
              c$$inline_762 = c$$inline_762 || /Win|Mac|Linux|iPad|iPod|iPhone/;
              var v2619 = JAM.call(c$$inline_762.test, c$$inline_762, [e$$inline_764], JAM.policy.p3);
              if (v2619) {
                v2619 = !JAM.call(/^Opera/.test, /^Opera/, [d$$inline_763], JAM.policy.p3);
              }
              if (v2619) {
                var v2620 = JAM.call(/WebKit\/(\d+)/.exec, /WebKit\/(\d+)/, [d$$inline_763], JAM.policy.p3);
                if (!v2620) {
                  v2620 = [0, 0];
                }
                c$$inline_762 = v2620[1];
                var v2621 = JAM.call(/rv\:(\d+\.\d+)/.exec, /rv\:(\d+\.\d+)/, [d$$inline_763], JAM.policy.p3);
                if (!v2621) {
                  v2621 = [0, 0];
                }
                var f$$inline_765 = v2621[1];
                var v4734 = JAM.call(/Win/.test, /Win/, [e$$inline_764], JAM.policy.p3);
                if (v4734) {
                  v4734 = JAM.call(/MSIE.*Trident/.test, /MSIE.*Trident/, [d$$inline_763], JAM.policy.p3);
                }
                var v4381 = v4734;
                if (v4381) {
                  v4381 = 8 < b$$inline_761.documentMode;
                }
                var v3716 = v4381;
                if (!v3716) {
                  var v4926 = !c$$inline_762;
                  if (v4926) {
                    v4926 = "Gecko" == navigator.product;
                  }
                  var v4736 = v4926;
                  if (v4736) {
                    v4736 = 1.7 < f$$inline_765;
                  }
                  var v4382 = v4736;
                  if (v4382) {
                    v4382 = !JAM.call(/rv\:1\.8([^.]|\.0)/.test, /rv\:1\.8([^.]|\.0)/, [d$$inline_763], JAM.policy.p3);
                  }
                  v3716 = v4382;
                }
                var v2622 = v3716;
                if (!v2622) {
                  v2622 = 524 < c$$inline_762;
                }
                if (v2622) {
                  JSCompiler_inline_result$$inline_760 = !0;
                  break JSCompiler_inline_label_767;
                }
              }
              JSCompiler_inline_result$$inline_760 = !1;
            }
            JSCompiler_temp$$inline_759 = !JSCompiler_inline_result$$inline_760;
          }
          if (JSCompiler_temp$$inline_759) {
            JSCompiler_inline_result$$749 = !0;
            break JSCompiler_inline_label_yf_768;
          }
        } catch (c$$inline_766) {
          JSCompiler_inline_result$$749 = !0;
          break JSCompiler_inline_label_yf_768;
        }
        JSCompiler_inline_result$$749 = !1;
      }
      var v964;
      var v4384 = JSCompiler_inline_result$$749;
      if (!v4384) {
        v4384 = Ze(d$$inline_686, d$$inline_686.document, b$$inline_684, c$$inline_685);
      }
      var v3718 = v4384;
      if (!v3718) {
        v3718 = Zg(a$$inline_683);
      }
      if (v3718) {
        v964 = !1;
      } else {
        v964 = !0;
      }
      ci = v964;
      if (!ci) {
        a$$inline_419.google_allow_expandable_ads = !1;
        var v965 = J$$1();
        var e$$inline_423 = JAM.call(v965.k, v965, [[K$$1.DIRECT_CALL_RENDER_AD.CONTROL, K$$1.DIRECT_CALL_RENDER_AD.EXPERIMENT], Aa$$1, 4], JAM.policy.p3);
      }
      var v968 = ci;
      if (v968) {
        v968 = !zf();
      }
      var f$$inline_424 = v968;
      var v969 = gi();
      if (v969) {
        f$$inline_424 = !1;
      }
      if (f$$inline_424) {
        JAM.call(document.write, document, ["<" + d$$inline_422 + ' src="' + di() + '"></' + d$$inline_422 + ">"], JAM.policy.p3);
      }
      if (hi(a$$inline_419)) {
        var g$$inline_425 = L$$1(Ja$$1(), "");
        bg = new V$$1(a$$inline_419, g$$inline_425, a$$inline_419.google_ad_handling_mode, xc);
      }
      var v973;
      var v4387 = f$$inline_424;
      if (!v4387) {
        v4387 = void 0;
      }
      var v3722 = a$$inline_419 = v4387;
      if (v3722) {
        v3722 = rb$$1();
      }
      if (v3722) {
        v973 = JAM.call(document.write, document, ["<" + d$$inline_422 + ' src="' + L$$1(Vh, "/pagead/render_ads.js") + '"></' + d$$inline_422 + ">"], JAM.policy.p3);
      } else {
        var v2629;
        var v4389 = a$$inline_419;
        if (!v4389) {
          v4389 = e$$inline_423 != K$$1.DIRECT_CALL_RENDER_AD.EXPERIMENT;
        }
        if (v4389) {
          v2629 = JAM.call(document.write, document, ["<" + d$$inline_422 + '>google_protectAndRun("ads_core.google_render_ad", google_handleError, google_render_ad);</' + d$$inline_422 + ">"], JAM.policy.p3);
        } else {
          v2629 = ii();
        }
        v973 = v2629;
      }
      v973;
    }
    return;
  }
  function Uh(a$$523) {
    this.t = a$$523;
    return;
  }
  function Nh(a$$518, b$$395, c$$265, d$$161) {
    function v29() {
      var v2631 = d$$161;
      if (v2631) {
        v2631 = 0 < a$$518.length;
      }
      var v975 = v2631;
      if (v975) {
        JAM.call(d$$161, null, [], JAM.policy.p3);
      }
      var a$$inline_396 = a$$518;
      var b$$inline_397 = 0;
      var v976 = b$$inline_397 < a$$inline_396.length;
      for (;v976;) {
        JAM.call(a$$inline_396[b$$inline_397], a$$inline_396, [], JAM.policy.p3);
        ++b$$inline_397;
        v976 = b$$inline_397 < a$$inline_396.length;
      }
      a$$inline_396.length = 0;
      return;
    }
    JAM.call(a$$518.push, a$$518, [b$$395], JAM.policy.p3);
    if (c$$265) {
      JAM.call(window.setTimeout, window, [v29, c$$265], JAM.policy.p3);
    }
    return;
  }
  function Mh(a$$515) {
    var v977;
    if (a$$515.google_sensors) {
      a$$515 = a$$515.google_sensors;
      v977 = new $$$1(a$$515);
    } else {
      v977 = null;
    }
    return v977;
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
      JAM.set(a$$510, c$$262, null, JAM.policy.p2);
      return;
    }
    function v31(b$$389, c$$261) {
      JAM.set(a$$510, c$$261, null, JAM.policy.p2);
      return;
    }
    function v30(b$$388, c$$260) {
      JAM.set(a$$510, c$$260, null, JAM.policy.p2);
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
  function qh(a$$503, b$$382, c$$254, d$$155) {
    var v4391 = a$$503 && b$$382;
    if (v4391) {
      v4391 = c$$254;
    }
    var v3727 = v4391;
    if (v3727) {
      v3727 = d$$155;
    }
    if (!v3727) {
      return null;
    }
    var v980 = d$$155.document;
    b$$382 = JAM.call(v980.getElementById, v980, [b$$382], JAM.policy.p3);
    if (!b$$382) {
      return null;
    }
    var v982 = Ug[a$$503.google_reactive_ad_format];
    if (!v982) {
      v982 = null;
    }
    var e$$91 = v982;
    switch(e$$91) {
      case 1:
        var JSCompiler_inline_result$$28;
        var a$$inline_382 = a$$503;
        var b$$inline_383 = b$$382;
        var c$$inline_384 = c$$254;
        var d$$inline_385 = d$$155;
        JSCompiler_inline_label_Ig_642: {
          switch(a$$inline_382.google_reactive_ad_format) {
            case 1:
              a$$inline_382 = "bottom";
              break JSCompiler_inline_label_Ig_642;
          }
          a$$inline_382 = null;
        }
        b$$inline_383 = new X$$1(b$$inline_383, c$$inline_384, d$$inline_385, a$$inline_382);
        JSCompiler_inline_result$$28 = new jh(d$$inline_385, b$$inline_383);
        return JSCompiler_inline_result$$28;
      case 2:
        var JSCompiler_inline_result$$30;
        var a$$inline_387 = a$$503;
        var c$$inline_389 = c$$254;
        var d$$inline_390 = d$$155;
        a$$inline_387 = new Y$$1(b$$382, c$$inline_389, d$$inline_390);
        JSCompiler_inline_result$$30 = new Z$$1(d$$inline_390, c$$inline_389, a$$inline_387);
        return JSCompiler_inline_result$$30;
    }
    return null;
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
    var v984 = b$$370[5];
    if (!v984) {
      v984 = "";
    }
    a$$483 = v984;
    b$$370 = b$$370[6];
    var v2640;
    if (b$$370) {
      v2640 = "?" + b$$370;
    } else {
      v2640 = "";
    }
    return a$$483 + v2640;
  }
  function Y$$1(a$$482, b$$369, c$$247) {
    JAM.call(hh.call, hh, [this, a$$482, b$$369, c$$247], JAM.policy.p3);
    this.Wc = c$$247.location.hostname;
    var v5103 = kh(c$$247.location.href);
    this.Xc = v5103;
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
    var v5104 = Qd(c$$242.document.body, "padding");
    this.Vc = v5104;
    this.B = 0;
    this.Ra = !1;
    this.ga = !0;
    var JSCompiler_inline_result$$49;
    JSCompiler_inline_label_Kd_378: {
      var a$$inline_371 = Ld;
      var b$$inline_372 = this.s;
      if ("none" != R$$1(b$$inline_372, "display")) {
        JSCompiler_inline_result$$49 = JAM.call(a$$inline_371, null, [b$$inline_372], JAM.policy.p3);
        break JSCompiler_inline_label_Kd_378;
      }
      var c$$inline_373 = b$$inline_372.style;
      var d$$inline_374 = c$$inline_373.display;
      var e$$inline_375 = c$$inline_373.visibility;
      var f$$inline_376 = c$$inline_373.position;
      c$$inline_373.visibility = "hidden";
      c$$inline_373.position = "absolute";
      c$$inline_373.display = "inline";
      var g$$inline_377 = JAM.call(a$$inline_371, null, [b$$inline_372], JAM.policy.p3);
      c$$inline_373.display = d$$inline_374;
      c$$inline_373.position = f$$inline_376;
      c$$inline_373.visibility = e$$inline_375;
      JSCompiler_inline_result$$49 = g$$inline_377;
    }
    this.gd = JSCompiler_inline_result$$49;
    this.ua = d$$152;
    JAM.call(this.hide, this, [], JAM.policy.p3);
    var v5105 = lb$$1(this.i, "orientationchange", this, this.ec);
    this.Zc = v5105;
    var v5106 = lb$$1(this.i, "resize", this, this.tc);
    this.$c = v5106;
    var v5107 = lb$$1(this.i, "scroll", this, this.vc);
    this.ad = v5107;
    var v5108 = lb$$1(this.i, "touchcancel", this, this.Kc);
    this.bd = v5108;
    var v5109 = lb$$1(this.i, "touchend", this, this.Lc);
    this.cd = v5109;
    var v5110 = lb$$1(this.i, "touchmove", this, this.Mc);
    this.dd = v5110;
    var v5111 = lb$$1(this.i, "touchstart", this, this.Nc);
    this.ed = v5111;
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
    var v1005;
    if (c$$240) {
      v1005 = c$$240;
    } else {
      v1005 = null;
    }
    this.onEndCallback = v1005;
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
    var v5112 = ye("rach::hdlr", JAM.call(r$$2, null, [this.ub, this], JAM.policy.p3));
    this.K = v5112;
    y$$31(a$$454, "message", this.K);
    return;
  }
  function $g(a$$453, b$$352, c$$236) {
    var d$$150 = rg(b$$352);
    var v1012 = Ug[a$$453.google_reactive_ad_format];
    if (!v1012) {
      v1012 = null;
    }
    var e$$88 = v1012;
    var JSCompiler_inline_result$$55;
    JSCompiler_inline_label_Wg_370: {
      var a$$inline_367 = b$$352;
      var b$$inline_368 = a$$453;
      switch(c$$236) {
        case 1:
          JSCompiler_inline_result$$55 = Hg(a$$inline_367);
          break JSCompiler_inline_label_Wg_370;
        case 2:
          JSCompiler_inline_result$$55 = Rg(a$$inline_367, b$$inline_368);
          break JSCompiler_inline_label_Wg_370;
      }
      JSCompiler_inline_result$$55 = !1;
    }
    var v2649 = JSCompiler_inline_result$$55;
    if (v2649) {
      v2649 = e$$88 != c$$236;
    }
    var v1013 = v2649;
    if (v1013) {
      v1013 = !d$$150.wasReactiveAdCreated[c$$236];
    }
    return v1013;
  }
  function ch(a$$452, b$$351) {
    function v33(c$$235) {
      var v1014 = $g(a$$452, b$$351, c$$235);
      if (v1014) {
        e$$87 = !0;
      }
      return;
    }
    var c$$234 = rg(b$$351);
    var d$$149 = !0;
    var v2651 = c$$234.wasReactiveAdConfigHandlerRegistered;
    if (!v2651) {
      v2651 = !d$$149;
    }
    if (v2651) {
      return!1;
    }
    var e$$87 = !1;
    x$$50(kg, v33);
    return c$$234.wasReactiveAdConfigHandlerRegistered = e$$87;
  }
  function ah(a$$450, b$$349) {
    function v34(d$$147) {
      var v1016 = $g(a$$450, b$$349, d$$147);
      if (v1016) {
        c$$232 = c$$232 | d$$147;
      }
      return;
    }
    var c$$232 = 0;
    x$$50(kg, v34);
    var v1017;
    if (c$$232) {
      v1017 = "" + c$$232;
    } else {
      v1017 = null;
    }
    return v1017;
  }
  function Zg(a$$449) {
    a$$449 = a$$449.google_reactive_ad_format;
    var v1018;
    if (Ec(lg, a$$449)) {
      v1018 = "" + a$$449;
    } else {
      v1018 = null;
    }
    return v1018;
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
      var v4746 = a$$443.top == a$$443;
      if (v4746) {
        v4746 = !!a$$443.postMessage;
      }
      var v4392 = v4746;
      if (v4392) {
        v4392 = og(a$$443);
      }
      var v3732 = v4392;
      if (v3732) {
        v3732 = ng(a$$443);
      }
      var v2653 = v3732;
      if (v2653) {
        v2653 = !Bc(b$$345);
      }
      var v1019 = v2653;
      if (v1019) {
        v1019 = !Ha$$1;
      }
      c$$228 = v1019;
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
      var JSCompiler_temp$$40;
      if (JSCompiler_temp$$40 = a$$429.top == a$$429) {
        var JSCompiler_inline_result$$41;
        var a$$inline_346 = a$$429.navigator.userAgent;
        var v3734 = !JAM.call(/(Android|iPhone OS|Windows Phone)/.test, /(Android|iPhone OS|Windows Phone)/, [a$$inline_346], JAM.policy.p3);
        if (!v3734) {
          v3734 = JAM.call(/Android 2/.test, /Android 2/, [a$$inline_346], JAM.policy.p3);
        }
        var v2655 = v3734;
        if (!v2655) {
          v2655 = JAM.call(/iPhone OS [34]_/.test, /iPhone OS [34]_/, [a$$inline_346], JAM.policy.p3);
        }
        var v1021 = v2655;
        if (!v1021) {
          v1021 = JAM.call(/Windows Phone (?:OS )?[67]/.test, /Windows Phone (?:OS )?[67]/, [a$$inline_346], JAM.policy.p3);
        }
        JSCompiler_inline_result$$41 = v1021;
        JSCompiler_temp$$40 = !JSCompiler_inline_result$$41;
      }
      var v4395 = JSCompiler_temp$$40;
      if (v4395) {
        v4395 = !!a$$429.postMessage;
      }
      var v3736 = v4395;
      if (v3736) {
        v3736 = a$$429.innerHeight >= a$$429.innerWidth;
      }
      var v2657 = v3736;
      if (v2657) {
        v2657 = ng(a$$429);
      }
      var v1023 = v2657;
      if (v1023) {
        v1023 = og(a$$429);
      }
      b$$336 = v1023;
    } catch (c$$223) {
    }
    return b$$336;
  }
  function Fg(a$$428, b$$335, c$$222) {
    var d$$142 = a$$428.attributes;
    var e$$84 = d$$142.length;
    var f$$51 = 0;
    var v1027 = f$$51 < e$$84;
    for (;v1027;) {
      var g$$30 = d$$142[f$$51];
      if (JAM.call(/data-/.test, /data-/, [g$$30.nodeName], JAM.policy.p3)) {
        var v2659 = g$$30.nodeName;
        var v1024 = JAM.call(v2659.replace, v2659, ["data", "google"], JAM.policy.p3);
        var h$$22 = JAM.call(v1024.replace, v1024, [/-/g, "_"], JAM.policy.p3);
        var v1025 = JAM.call(b$$335.hasOwnProperty, b$$335, [h$$22], JAM.policy.p3);
        if (!v1025) {
          JAM.set(b$$335, h$$22, g$$30.nodeValue, JAM.policy.p2);
        }
      }
      f$$51++;
      v1027 = f$$51 < e$$84;
    }
    var JSCompiler_inline_result$$59;
    var a$$inline_332 = b$$335.google_ad_format;
    var v1028 = "auto" == a$$inline_332;
    if (!v1028) {
      v1028 = JAM.call(/^((^|,)(horizontal|vertical|rectangle))+$/.test, /^((^|,)(horizontal|vertical|rectangle))+$/, [a$$inline_332], JAM.policy.p3);
    }
    JSCompiler_inline_result$$59 = v1028;
    if (JSCompiler_inline_result$$59) {
      var JSCompiler_inline_result$$77;
      var a$$inline_334 = a$$428;
      var b$$inline_335 = b$$335;
      var c$$inline_336 = c$$222;
      var d$$inline_337 = a$$inline_334.offsetWidth;
      var e$$inline_338 = b$$inline_335.google_ad_format;
      c$$inline_336 = yg(d$$inline_337, e$$inline_338, c$$inline_336);
      if (!c$$inline_336) {
        throw Error("Cannot find a responsive size for a container of width=" + d$$inline_337 + "px and data-ad-format=" + e$$inline_338);
      }
      b$$inline_335.google_ad_height = c$$inline_336.height;
      var v1031;
      var v3738 = 300 < d$$inline_337;
      if (v3738) {
        v3738 = 300 < c$$inline_336.height;
      }
      if (v3738) {
        v1031 = c$$inline_336.width;
      } else {
        var v2663;
        if (1200 < d$$inline_337) {
          v2663 = 1200;
        } else {
          v2663 = JAM.call(Math.round, Math, [d$$inline_337], JAM.policy.p3);
        }
        v1031 = v2663;
      }
      b$$inline_335.google_ad_width = v1031;
      a$$inline_334.style.height = b$$inline_335.google_ad_height + "px";
      delete b$$inline_335.google_ad_format;
      JSCompiler_inline_result$$77 = void 0;
      JSCompiler_inline_result$$77;
      b$$335.google_loader_features_used = 128;
    } else {
      var JSCompiler_inline_result$$54;
      var a$$inline_340 = a$$428;
      var v1033 = !JAM.call(sg.test, sg, [a$$inline_340.style.width], JAM.policy.p3);
      if (!v1033) {
        v1033 = !JAM.call(sg.test, sg, [a$$inline_340.style.height], JAM.policy.p3);
      }
      JSCompiler_inline_result$$54 = v1033;
      if (JSCompiler_inline_result$$54) {
        var a$$inline_342 = a$$428;
        var b$$inline_343 = b$$335;
        var c$$inline_344 = c$$222;
        var v1034;
        if (c$$inline_344.getComputedStyle) {
          v1034 = JAM.call(c$$inline_344.getComputedStyle, c$$inline_344, [a$$inline_342, null], JAM.policy.p3);
        } else {
          v1034 = a$$inline_342.currentStyle;
        }
        c$$inline_344 = v1034;
        a$$inline_342.style.width = c$$inline_344.width;
        a$$inline_342.style.height = c$$inline_344.height;
        wg(c$$inline_344, b$$inline_343);
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
    var v2670 = a$$427.style;
    if (v2670) {
      v2670 = "none" == a$$427.style.display;
    }
    var v1038 = v2670;
    if (v1038) {
      b$$334.google_dn = 1;
    }
    wb(c$$221);
    Fg(a$$427, b$$334, c$$221);
    var d$$141 = Bg;
    var e$$83 = 0;
    var v1040 = e$$83 < d$$141.length;
    for (;v1040;) {
      var v1039 = d$$141[e$$83];
      var v2672 = b$$334[d$$141[e$$83]];
      if (!v2672) {
        v2672 = c$$221[d$$141[e$$83]];
      }
      JAM.set(b$$334, v1039, v2672, JAM.policy.p2);
      e$$83++;
      v1040 = e$$83 < d$$141.length;
    }
    b$$334.google_loader_used = "aa";
    var v2674 = d$$141 = b$$334.google_ad_output;
    if (v2674) {
      v2674 = "html" != d$$141;
    }
    if (v2674) {
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
    var v1043 = a$$424.documentElement.clientWidth;
    if (!v1043) {
      v1043 = a$$424.body.clientWidth;
    }
    return v1043;
  }
  function yg(a$$422, b$$331, c$$219) {
    function v36(a$$423, b$$332) {
      var v1044 = a$$423.width - b$$332.width;
      if (!v1044) {
        v1044 = a$$423.height - b$$332.height;
      }
      return v1044;
    }
    var d$$140 = tg;
    JAM.call(d$$140.sort, d$$140, [v36], JAM.policy.p3);
    var v1045 = "auto" == b$$331;
    if (v1045) {
      b$$331 = a$$422 / Ag(c$$219);
      var v3748;
      if (.25 > b$$331) {
        v3748 = "vertical";
      } else {
        v3748 = "horizontal,rectangle";
      }
      b$$331 = v3748;
    }
    c$$219 = d$$140.length;
    var v1047 = c$$219;
    c$$219 = c$$219 - 1;
    for (;v1047;) {
      var v2683 = d$$140[c$$219].width <= a$$422;
      if (v2683) {
        v2683 = -1 != JAM.call(b$$331.indexOf, b$$331, [d$$140[c$$219].format], JAM.policy.p3);
      }
      if (v2683) {
        return d$$140[c$$219];
      }
      v1047 = c$$219;
      c$$219 = c$$219 - 1;
    }
    return null;
  }
  function wg(a$$420, b$$329) {
    var c$$217 = ["width", "height"];
    var d$$138 = 0;
    var v1051 = d$$138 < c$$217.length;
    for (;v1051;) {
      var e$$81 = "google_ad_" + c$$217[d$$138];
      if (!JAM.call(b$$329.hasOwnProperty, b$$329, [e$$81], JAM.policy.p3)) {
        var f$$50 = JAM.call(sg.exec, sg, [a$$420[c$$217[d$$138]]], JAM.policy.p3);
        if (f$$50) {
          var v5113 = JAM.call(Math.round, Math, [f$$50[1]], JAM.policy.p3);
          introspect(JAM.policy.p2) {
            b$$329[e$$81] = v5113;
          }
        }
      }
      d$$138++;
      v1051 = d$$138 < c$$217.length;
    }
    return;
  }
  function rg(a$$415) {
    var v1052 = a$$415.google_reactive_ads_global_state;
    if (!v1052) {
      var v5114 = new pg;
      a$$415.google_reactive_ads_global_state = v5114;
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
    return.05 > JAM.call(Math.abs, Math, [b$$327 / a$$414 - 1], JAM.policy.p3);
  }
  function ng(a$$413) {
    a$$413 = a$$413.document.documentElement.clientWidth;
    var v1056 = 320 <= a$$413;
    if (v1056) {
      v1056 = 420 >= a$$413;
    }
    return v1056;
  }
  function hg(a$$405) {
    this.qa = a$$405;
    return;
  }
  function gg(a$$404) {
    a$$404 = String(a$$404);
    if (fg(a$$404)) {
      try {
        var v1057 = "(" + a$$404 + ")";
        if (JAM.isEval(eval)) {
          return eval("introspect(JAM.policy.pFull) { " + v1057 + " }");
        } else {
          return JAM.call(eval, null, [v1057]);
        }
      } catch (b$$319) {
      }
    }
    throw Error("Invalid JSON string: " + a$$404);
  }
  function fg(a$$403) {
    if (JAM.call(/^\s*$/.test, /^\s*$/, [a$$403], JAM.policy.p3)) {
      return!1;
    }
    var b$$318 = /\\["\\\/bfnrtu]/g;
    var c$$213 = /"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var d$$135 = /(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g;
    var e$$77 = /^[\],:{}\s\u2028\u2029]*$/;
    var v3752 = JAM.call(a$$403.replace, a$$403, [b$$318, "@"], JAM.policy.p3);
    var v2694 = JAM.call(v3752.replace, v3752, [c$$213, "]"], JAM.policy.p3);
    return JAM.call(e$$77.test, e$$77, [JAM.call(v2694.replace, v2694, [d$$135, ""], JAM.policy.p3)], JAM.policy.p3);
  }
  function eg(a$$401, b$$315) {
    try {
      return void 0 != a$$401.frames[b$$315];
    } catch (c$$211) {
      return!1;
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
    var v5115 = ye("zrt_mh::handler", JAM.call(r$$2, null, [V$$1.prototype.Qa, this], JAM.policy.p3), d$$130);
    this.K = v5115;
    y$$31(a$$387, "message", this.K);
    return;
  }
  function Jf(a$$378, b$$299, c$$197, d$$125, e$$75) {
    var f$$48 = "script";
    var g$$29 = b$$299.google_ad_width;
    var h$$21 = b$$299.google_ad_height;
    var k$$9 = {};
    Ff(k$$9, g$$29, h$$21, !0);
    JAM.set(k$$9, "onload", '"' + Ne + '"');
    e$$75 = JAM.call(e$$75, null, [a$$378, k$$9, b$$299], JAM.policy.p3);
    JSCompiler_inline_label_Lf_304: {
      var v2697 = window.google_override_format;
      if (!v2697) {
        var v3754 = !wf[window.google_ad_width + "x" + window.google_ad_height];
        if (v3754) {
          v3754 = "aa" == window.google_loader_used;
        }
        v2697 = v3754;
      }
      if (v2697) {
        var a$$inline_303 = Uf;
        k$$9 = vb([a$$inline_303.CONTROL, a$$inline_303.EXPERIMENT], Ba$$1);
        break JSCompiler_inline_label_Lf_304;
      }
      k$$9 = null;
    }
    var a$$inline_305 = c$$197;
    var b$$inline_306 = d$$125;
    var c$$inline_307 = b$$299;
    var a$$inline_623 = c$$inline_307;
    var c$$inline_625 = a$$inline_623.google_ad_output;
    var d$$inline_626 = a$$inline_623.google_ad_format;
    var v2700 = d$$inline_626;
    if (!v2700) {
      var v3756 = "html" != c$$inline_625;
      if (v3756) {
        v3756 = null != c$$inline_625;
      }
      v2700 = v3756;
    }
    var v1070 = v2700;
    if (!v1070) {
      d$$inline_626 = a$$inline_623.google_ad_width + "x" + a$$inline_623.google_ad_height;
      var v3760 = "e" == k$$9;
      if (v3760) {
        d$$inline_626 = d$$inline_626 + "_as";
      }
    }
    var v2702 = !a$$inline_623.google_ad_slot;
    if (!v2702) {
      v2702 = a$$inline_623.google_override_format;
    }
    var v1071 = v2702;
    if (!v1071) {
      var v2703 = !wf[a$$inline_623.google_ad_width + "x" + a$$inline_623.google_ad_height];
      if (v2703) {
        v2703 = "aa" == a$$inline_623.google_loader_used;
      }
      v1071 = v2703;
    }
    c$$inline_625 = v1071;
    var v1072;
    if (d$$inline_626 && c$$inline_625) {
      v1072 = JAM.call(d$$inline_626.toLowerCase, d$$inline_626, [], JAM.policy.p3);
    } else {
      v1072 = "";
    }
    d$$inline_626 = v1072;
    a$$inline_623.google_ad_format = d$$inline_626;
    var JSCompiler_temp_const$$564 = c$$inline_307;
    var JSCompiler_inline_result$$565;
    var a$$inline_628 = a$$inline_305;
    var v1073;
    if (b$$inline_306) {
      v1073 = a$$inline_628.parentElement;
    } else {
      v1073 = a$$inline_628;
    }
    a$$inline_628 = v1073;
    JSCompiler_inline_result$$565 = Fb(a$$inline_628, c$$inline_307, !0);
    JSCompiler_temp_const$$564.google_ad_unit_key = JSCompiler_inline_result$$565;
    var v1075 = window;
    var v3765 = window.google_adk2_experiment;
    if (!v3765) {
      v3765 = vb(["C", "E"], xa$$1);
    }
    var v2706 = v3765;
    if (!v2706) {
      v2706 = "N";
    }
    b$$inline_306 = v1075.google_adk2_experiment = v2706;
    var v1076;
    if ("E" == b$$inline_306) {
      var v5116 = Fb(a$$inline_305, c$$inline_307);
      v1076 = c$$inline_307.google_ad_unit_key_2 = v5116;
    } else {
      var v2707 = "C" == b$$inline_306;
      if (v2707) {
        v2707 = c$$inline_307.google_ad_unit_key_2 = "ctrl";
      }
      v1076 = v2707;
    }
    v1076;
    c$$197 = Ee(b$$299);
    var a$$inline_310 = a$$378;
    var b$$inline_311 = Ke(a$$inline_310);
    var c$$inline_312 = 3 == Xe(a$$inline_310.document);
    var d$$inline_313 = Ge;
    var v3767 = b$$inline_311;
    if (v3767) {
      v3767 = !c$$inline_312;
    }
    var v2710 = v3767;
    if (v2710) {
      v2710 = void 0 === a$$inline_310.google_ad_handling_mode;
    }
    var v1078 = v2710;
    if (v1078) {
      var v2711 = vb([d$$inline_313.CONTROL_NO_FRAME, d$$inline_313.ALWAYS_ZRT, d$$inline_313.SERIAL], sa$$1);
      if (!v2711) {
        v2711 = vb([d$$inline_313.IFRAME_SIGNALING], ta$$1);
      }
      a$$inline_310.google_ad_handling_mode = v2711;
    }
    var v1079;
    if (a$$inline_310.google_ad_handling_mode) {
      v1079 = String(a$$inline_310.google_ad_handling_mode);
    } else {
      v1079 = null;
    }
    d$$125 = v1079;
    JSCompiler_inline_label_If_324: {
      var a$$inline_315 = a$$378;
      var b$$inline_316 = d$$125;
      var c$$inline_317 = b$$299;
      var d$$inline_318 = g$$29;
      var e$$inline_319 = h$$21;
      var f$$inline_320 = Ge;
      var v4415 = Ke(a$$inline_315);
      if (v4415) {
        v4415 = 1 == a$$inline_315.google_unique_id;
      }
      var v3773 = v4415;
      if (v3773) {
        v3773 = b$$inline_316 != f$$inline_320.CONTROL_NO_FRAME;
      }
      var v2714 = v3773;
      if (v2714) {
        v2714 = b$$inline_316 != f$$inline_320.SERIAL;
      }
      if (v2714) {
        var g$$inline_321 = "zrt_ads_frame" + a$$inline_315.google_unique_id;
        var h$$inline_322;
        var a$$inline_632 = a$$inline_315;
        var d$$inline_635 = c$$inline_317.google_page_url;
        if (!d$$inline_635) {
          var v2715;
          if (Ze(a$$inline_632, a$$inline_632.document, d$$inline_318, e$$inline_319)) {
            v2715 = a$$inline_632.document.referrer;
          } else {
            v2715 = a$$inline_632.document.URL;
          }
          d$$inline_635 = v2715;
        }
        h$$inline_322 = encodeURIComponent(d$$inline_635);
        var k$$inline_323 = null;
        if (Le(b$$inline_316)) {
          k$$inline_323 = He;
          switch(b$$inline_316) {
            case f$$inline_320.IFRAME_SIGNALING:
              b$$inline_316 = k$$inline_323.PARALLEL_W_IFRAME_SIGNALING;
              break;
            case f$$inline_320.ALWAYS_ZRT:
              b$$inline_316 = k$$inline_323.PARALLEL_W_ALWAYS_ZRT;
              break;
            default:
              b$$inline_316 = k$$inline_323.PARALLEL;
          }
          k$$inline_323 = b$$inline_316 + "-" + (h$$inline_322 + "/" + c$$inline_317.google_ad_unit_key + "/" + a$$inline_315.google_unique_id);
        }
        a$$inline_315 = {};
        Ff(a$$inline_315, d$$inline_318, e$$inline_319, !1);
        a$$inline_315.style = "display:none";
        var a$$inline_637 = k$$inline_323;
        var b$$inline_638 = g$$inline_321;
        var c$$inline_639 = a$$inline_315;
        c$$inline_639.id = b$$inline_638;
        c$$inline_639.name = b$$inline_638;
        var v5117 = Df(a$$inline_637);
        c$$inline_639.src = v5117;
        b$$299 = Cf(c$$inline_639);
        break JSCompiler_inline_label_If_324;
      }
      b$$299 = null;
    }
    g$$29 = vf;
    var v1086 = new Date;
    h$$21 = JAM.call(v1086.getTime, v1086, [], JAM.policy.p3);
    var l$$11 = a$$378.google_top_experiment;
    var z$$5 = a$$378.google_async_for_oa_experiment;
    var C$$3 = a$$378.google_always_use_delayed_impressions_experiment;
    var v2719 = a$$378.google_unique_id;
    var v3779;
    if (l$$11) {
      v3779 = 'google_top_experiment="' + l$$11 + '";';
    } else {
      v3779 = "";
    }
    var v2720 = v3779;
    var v3780;
    if (d$$125) {
      v3780 = 'google_ad_handling_mode="' + d$$125 + '";';
    } else {
      v3780 = "";
    }
    var v2721 = v3780;
    var v3781;
    if (z$$5) {
      v3781 = 'google_async_for_oa_experiment="' + z$$5 + '";';
    } else {
      v3781 = "";
    }
    var v2722 = v3781;
    var v3782;
    if (C$$3) {
      v3782 = 'google_always_use_delayed_impressions_experiment="' + C$$3 + '";';
    } else {
      v3782 = "";
    }
    var v2723 = v3782;
    var v3783;
    if (k$$9) {
      v3783 = 'google_append_as_for_format_override="' + k$$9 + '";';
    } else {
      v3783 = "";
    }
    var v2724 = v3783;
    var v3784;
    if (h$$21 > g$$29) {
      v3784 = h$$21 - g$$29;
    } else {
      v3784 = 1;
    }
    var v1087 = ["<!doctype html><html><body>", b$$299, "<", f$$48, ">", c$$197, "google_show_ads_impl=true;google_unique_id=", v2719, ';google_async_iframe_id="', e$$75, '";google_start_time=', g$$29, ";", v2720, v2721, v2722, v2723, v2724, "google_bpp=", v3784, ";google_async_rrc=0;</", f$$48, ">", xf(), "</body></html>"];
    k$$9 = JAM.call(v1087.join, v1087, [""], JAM.policy.p3);
    var v1088;
    var v3785 = a$$378.document;
    if (JAM.call(v3785.getElementById, v3785, [e$$75], JAM.policy.p3)) {
      v1088 = rf;
    } else {
      v1088 = sf;
    }
    c$$197 = v1088;
    JAM.call(c$$197, null, [Af(a$$378, e$$75, k$$9, !0)], JAM.policy.p3);
    return;
  }
  function Kf(a$$376, b$$297, c$$196) {
    function v37(a$$377, b$$298, f$$47) {
      var JSCompiler_inline_result$$68;
      var a$$inline_298 = a$$377;
      var b$$inline_299 = b$$298;
      var c$$inline_300 = f$$47;
      var d$$inline_301 = c$$196;
      a$$inline_298 = a$$inline_298.document;
      var a$$inline_612 = a$$inline_298;
      var b$$inline_613 = b$$inline_299;
      var c$$inline_614 = b$$inline_613.id;
      var d$$inline_615 = 0;
      var v2729 = !c$$inline_614;
      if (!v2729) {
        v2729 = JAM.call(a$$inline_612.getElementById, a$$inline_612, [c$$inline_614], JAM.policy.p3);
      }
      var v1091 = v2729;
      for (;v1091;) {
        var v1090 = d$$inline_615;
        d$$inline_615 = d$$inline_615 + 1;
        c$$inline_614 = "aswift_" + v1090;
        var v2730 = !c$$inline_614;
        if (!v2730) {
          v2730 = JAM.call(a$$inline_612.getElementById, a$$inline_612, [c$$inline_614], JAM.policy.p3);
        }
        v1091 = v2730;
      }
      b$$inline_613.id = c$$inline_614;
      b$$inline_613.name = c$$inline_614;
      a$$inline_298 = Number(c$$inline_300.google_ad_width);
      c$$inline_300 = Number(c$$inline_300.google_ad_height);
      var JSCompiler_temp_const$$568 = d$$inline_301;
      var JSCompiler_inline_result$$569;
      var a$$inline_617 = b$$inline_299;
      var b$$inline_618 = a$$inline_298;
      var c$$inline_619 = c$$inline_300;
      var d$$inline_620 = ["<iframe"];
      var e$$inline_621;
      for (e$$inline_621 in a$$inline_617) {
        var v1094 = JAM.call(a$$inline_617.hasOwnProperty, a$$inline_617, [e$$inline_621], JAM.policy.p3);
        if (v1094) {
          ib$$1(d$$inline_620, e$$inline_621 + "=" + a$$inline_617[e$$inline_621]);
        }
      }
      JAM.call(d$$inline_620.push, d$$inline_620, ['style="left:0;position:absolute;top:0;"'], JAM.policy.p3);
      JAM.call(d$$inline_620.push, d$$inline_620, ["></iframe>"], JAM.policy.p3);
      d$$inline_620 = JAM.call(d$$inline_620.join, d$$inline_620, [" "], JAM.policy.p3);
      var JSCompiler_inline_result$$744;
      var a$$inline_750 = a$$inline_617.id + "_anchor";
      var b$$inline_751 = b$$inline_618;
      b$$inline_751 = "border:none;height:" + c$$inline_619 + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + b$$inline_751 + "px;background-color:transparent";
      a$$inline_750 = ['<ins style="display:inline-table;', b$$inline_751, '">', '<ins id="', a$$inline_750, '" style="display:block;', b$$inline_751, '">', d$$inline_620, "</ins></ins>"];
      JSCompiler_inline_result$$744 = JAM.call(a$$inline_750.join, a$$inline_750, [""], JAM.policy.p3);
      JSCompiler_inline_result$$569 = a$$inline_617 = JSCompiler_inline_result$$744;
      JAM.set(JSCompiler_temp_const$$568, "innerHTML", JSCompiler_inline_result$$569);
      JSCompiler_inline_result$$68 = b$$inline_299.id;
      return JSCompiler_inline_result$$68;
    }
    Jf(a$$376, b$$297, c$$196, !1, v37);
    return;
  }
  function Ff(a$$372, b$$293, c$$192, d$$121, e$$73) {
    var v1098;
    if (d$$121) {
      v1098 = '"';
    } else {
      v1098 = "";
    }
    d$$121 = v1098;
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
    var v1104 = Ja$$1();
    var v3791 = Da$$1();
    var v4426;
    if (a$$370) {
      v4426 = "#" + encodeURIComponent(a$$370);
    } else {
      v4426 = "";
    }
    var v2734 = ["/pagead/html/", v3791, "/r20130906/zrt_lookup.html", v4426];
    return L$$1(v1104, JAM.call(v2734.join, v2734, [""], JAM.policy.p3));
  }
  function Cf(a$$368) {
    function v38(a$$369, d$$120) {
      var v1106 = null != a$$369;
      if (v1106) {
        JAM.call(b$$291.push, b$$291, [" " + d$$120 + '="' + a$$369 + '"'], JAM.policy.p3);
      }
      return;
    }
    var b$$291 = ["<iframe"];
    x$$50(a$$368, v38);
    JAM.call(b$$291.push, b$$291, ["></iframe>"], JAM.policy.p3);
    return JAM.call(b$$291.join, b$$291, [""], JAM.policy.p3);
  }
  function Bf(a$$366, b$$289, c$$190) {
    function v39(a$$367, b$$290) {
      var v1107 = null != a$$367;
      if (v1107) {
        JAM.call(d$$119.setAttribute, d$$119, [b$$290, a$$367], JAM.policy.p3);
      }
      return;
    }
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
        var v1108 = qf();
        JAM.call(v1108.al, v1108, [3E4], JAM.policy.p3);
      }
      try {
        var JSCompiler_inline_result$$60;
        var a$$inline_293 = a$$365;
        var b$$inline_294 = b$$288;
        var c$$inline_295 = c$$189;
        var v1109 = a$$inline_293.document;
        var d$$inline_296 = JAM.call(v1109.getElementById, v1109, [b$$inline_294], JAM.policy.p3);
        d$$inline_296 = d$$inline_296.contentWindow;
        if (Kb(d$$inline_296)) {
          var a$$inline_604 = a$$inline_293;
          var b$$inline_605 = b$$inline_294;
          var c$$inline_606 = c$$inline_295;
          var v2737 = a$$inline_604.document;
          a$$inline_604 = JAM.call(v2737.getElementById, v2737, [b$$inline_605], JAM.policy.p3).contentWindow;
          b$$inline_605 = a$$inline_604.document;
          var v2738 = b$$inline_605.body;
          if (v2738) {
            v2738 = b$$inline_605.body.firstChild;
          }
          var v1111 = v2738;
          if (!v1111) {
            JAM.call(b$$inline_605.open, b$$inline_605, [], JAM.policy.p3);
            a$$inline_604.google_async_iframe_close = !0;
            JAM.call(b$$inline_605.write, b$$inline_605, [c$$inline_606], JAM.policy.p3);
          }
        } else {
          var a$$inline_608 = a$$inline_293;
          var c$$inline_610 = c$$inline_295;
          var v2740 = a$$inline_608.document;
          a$$inline_608 = JAM.call(v2740.getElementById, v2740, [b$$inline_294], JAM.policy.p3).contentWindow;
          c$$inline_610 = "javascript:" + ab$$1(c$$inline_610);
          var v1114 = a$$inline_608.location;
          JAM.call(v1114.replace, v1114, [c$$inline_610], JAM.policy.p3);
        }
        JSCompiler_inline_result$$60 = void 0;
        JSCompiler_inline_result$$60;
        e$$72 = !0;
      } catch (f$$44) {
        uf();
      }
      if (e$$72) {
        e$$72 = Oe("google_async_rrc", c$$189);
        var v3795 = new Me(a$$365);
        JAM.call(v3795.set, v3795, [b$$288, Af(a$$365, b$$288, e$$72, !1)], JAM.policy.p3);
      }
      return;
    }
    return v40;
  }
  function zf() {
    var v1116 = "object" == typeof window.ExpandableAdSlotFactory;
    if (v1116) {
      v1116 = "function" == typeof window.ExpandableAdSlotFactory.createIframe;
    }
    return v1116;
  }
  function xf() {
    var a$$363 = "script";
    var v3799 = La$$1();
    var v4430 = ["/pagead/js/", Da$$1(), "/r20130906/show_ads_impl.js"];
    var v1117 = ["<", a$$363, ' src="', L$$1(v3799, JAM.call(v4430.join, v4430, [""], JAM.policy.p3), ""), '"></', a$$363, ">"];
    return JAM.call(v1117.join, v1117, [""], JAM.policy.p3);
  }
  function uf() {
    var a$$362 = hc().google_jobrunner;
    var v1119 = pf(a$$362);
    if (v1119) {
      JAM.call(a$$362.rl, a$$362, [], JAM.policy.p3);
    }
    return;
  }
  function sf(a$$360, b$$286) {
    var v1120 = qf();
    JAM.call(v1120.nqa, v1120, [a$$360, b$$286], JAM.policy.p3);
    return;
  }
  function rf(a$$359, b$$285) {
    var v1121 = qf();
    JAM.call(v1121.nq, v1121, [a$$359, b$$285], JAM.policy.p3);
    return;
  }
  function qf() {
    var v2744 = mf;
    if (v2744) {
      v2744 = of(mf);
    }
    if (v2744) {
      return mf;
    }
    var a$$358 = hc();
    var b$$284 = a$$358.google_jobrunner;
    var v1123;
    if (pf(b$$284)) {
      v1123 = mf = b$$284;
    } else {
      v1123 = a$$358.google_jobrunner = mf = new U$$1(a$$358);
    }
    return v1123;
  }
  function pf(a$$357) {
    var v4756 = gb$$1(a$$357);
    if (v4756) {
      v4756 = of(a$$357);
    }
    var v4431 = v4756;
    if (v4431) {
      v4431 = fb$$1(a$$357.nq);
    }
    var v3801 = v4431;
    if (v3801) {
      v3801 = fb$$1(a$$357.nqa);
    }
    var v2746 = v3801;
    if (v2746) {
      v2746 = fb$$1(a$$357.al);
    }
    var v1124 = v2746;
    if (v1124) {
      v1124 = fb$$1(a$$357.rl);
    }
    return v1124;
  }
  function of(a$$356) {
    try {
      return JAM.call(a$$356.sz, a$$356, [], JAM.policy.p3);
    } catch (b$$283) {
      return!1;
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
      return{url:b$$277, isTopUrl:!0};
    }
    b$$277 = a$$346.location.href;
    if (a$$346 == a$$346.top) {
      return{url:b$$277, isTopUrl:!0};
    }
    var c$$187 = !1;
    var d$$117 = a$$346.document;
    var v2749 = d$$117;
    if (v2749) {
      v2749 = d$$117.referrer;
    }
    var v1129 = v2749;
    if (v1129) {
      b$$277 = d$$117.referrer;
      var v3803 = a$$346.parent == a$$346.top;
      if (v3803) {
        c$$187 = !0;
      }
    }
    var v3804 = a$$346 = a$$346.location.ancestorOrigins;
    if (v3804) {
      v3804 = a$$346 = a$$346[a$$346.length - 1];
    }
    var v2750 = v3804;
    if (v2750) {
      v2750 = -1 == JAM.call(b$$277.indexOf, b$$277, [a$$346], JAM.policy.p3);
    }
    var v1130 = v2750;
    if (v1130) {
      c$$187 = !1;
      b$$277 = a$$346;
    }
    return{url:b$$277, isTopUrl:c$$187};
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
    var v1132 = H$$1();
    var a$$344 = JAM.call(v1132.m, v1132, [10], JAM.policy.p3);
    var b$$275 = K$$1.PERISCOPE_FOR_TARGETING;
    return a$$344 === b$$275.EXPERIMENT_REFERER_CLEANUP;
  }
  function Xe(a$$343) {
    var v3806 = a$$343.webkitVisibilityState;
    if (!v3806) {
      v3806 = a$$343.mozVisibilityState;
    }
    var v2751 = v3806;
    if (!v2751) {
      v2751 = a$$343.visibilityState;
    }
    var v1134 = v2751;
    if (!v1134) {
      v1134 = "";
    }
    a$$343 = v1134;
    var b$$274 = {visible:1, hidden:2, prerender:3, preview:4};
    var v1135 = b$$274[a$$343];
    if (!v1135) {
      v1135 = 0;
    }
    return v1135;
  }
  function Ve(a$$337, b$$268, c$$180) {
    if (n$$2(b$$268)) {
      var d$$112 = 0;
      var v1137 = d$$112 < b$$268.length;
      for (;v1137;) {
        Ve(a$$337, String(b$$268[d$$112]), c$$180);
        d$$112++;
        v1137 = d$$112 < b$$268.length;
      }
    } else {
      var v1138 = null != b$$268;
      if (v1138) {
        var v3808;
        if ("" === b$$268) {
          v3808 = "";
        } else {
          v3808 = "=";
        }
        JAM.call(c$$180.push, c$$180, ["&", a$$337, v3808, encodeURIComponent(String(b$$268))], JAM.policy.p3);
      }
    }
    return;
  }
  function Re(a$$333) {
    if (Se) {
      Se = !1;
      var a$$inline_253 = m$$3.location;
      if (a$$inline_253) {
        var b$$inline_254 = a$$inline_253.href;
        var JSCompiler_temp$$560;
        if (JSCompiler_temp$$560 = b$$inline_254) {
          var JSCompiler_inline_result$$561;
          var v1140 = Re(b$$inline_254)[3];
          if (!v1140) {
            v1140 = null;
          }
          var a$$inline_602 = v1140;
          var v1141 = a$$inline_602;
          if (v1141) {
            v1141 = decodeURIComponent(a$$inline_602);
          }
          JSCompiler_inline_result$$561 = v1141;
          JSCompiler_temp$$560 = b$$inline_254 = JSCompiler_inline_result$$561;
        }
        var v2761 = JSCompiler_temp$$560;
        if (v2761) {
          v2761 = b$$inline_254 != a$$inline_253.hostname;
        }
        if (v2761) {
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
      var v3811 = +d$$111[1] + 1;
      if (!v3811) {
        v3811 = 1;
      }
      d$$111 = v3811;
      b$$265 = JAM.call(b$$265.replace, b$$265, [c$$178, a$$332 + "=" + d$$111], JAM.policy.p3);
    }
    return b$$265;
  }
  function Me(a$$328) {
    this.p = a$$328;
    var v1145 = a$$328.google_iframe_oncopy;
    if (!v1145) {
      a$$328.google_iframe_oncopy = {handlers:{}, upd:JAM.call(r$$2, null, [this.Qc, this], JAM.policy.p3)};
    }
    this.hd = a$$328.google_iframe_oncopy;
    return;
  }
  function Le(a$$327) {
    var b$$261 = Ge;
    var v2765 = a$$327 == b$$261.PARALLEL_CANCEL_ON_NO_AD;
    if (!v2765) {
      v2765 = a$$327 == b$$261.IFRAME_SIGNALING;
    }
    var v1146 = v2765;
    if (!v1146) {
      v1146 = a$$327 == b$$261.ALWAYS_ZRT;
    }
    return v1146;
  }
  function Ke(a$$326) {
    try {
      var b$$260 = JAM.call(Ie.test, Ie, [a$$326.location.host], JAM.policy.p3);
      var v4442 = !a$$326.postMessage;
      if (!v4442) {
        v4442 = !a$$326.localStorage;
      }
      var v3817 = v4442;
      if (!v3817) {
        v3817 = !a$$326.JSON;
      }
      var v2769 = v3817;
      if (!v2769) {
        v2769 = b$$260;
      }
      return!v2769;
    } catch (c$$176) {
      return!1;
    }
    return;
  }
  function Ee(a$$323) {
    function v41(a$$324, b$$258) {
      if (null != a$$324) {
        var f$$41;
        try {
          var v1149 = new Be;
          f$$41 = JAM.call(v1149.serialize, v1149, [a$$324], JAM.policy.p3);
        } catch (g$$26) {
        }
        if (f$$41) {
          ib$$1(c$$174, b$$258, "=", f$$41, ";");
        }
      }
      return;
    }
    var b$$257 = "google_page_url";
    var v1151 = a$$323[b$$257];
    if (v1151) {
      var v2770 = a$$323;
      var v2771 = b$$257;
      var v5118 = String(a$$323[b$$257]);
      JAM.set(v2770, v2771, v5118, JAM.policy.p2);
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
      var v2772 = 0 === a$$313;
      if (!v2772) {
        v2772 = a$$313;
      }
      if (v2772) {
        var v2773 = b$$247;
        var v3821 = "&" + d$$106 + "=";
        var v4446;
        if ("function" == typeof encodeURIComponent) {
          v4446 = encodeURIComponent(a$$313);
        } else {
          v4446 = escape(a$$313);
        }
        b$$247 = v2773 + (v3821 + v4446);
      }
      return;
    }
    var b$$247 = "";
    x$$50(a$$312, v42);
    return b$$247;
  }
  function ye(a$$310, b$$246, c$$170, d$$105) {
    function v43(e$$65) {
      e$$65 = ga$$1(b$$246, e$$65);
      var f$$40 = d$$105 || ve;
      te(a$$310, f$$40, e$$65, c$$170);
      return;
    }
    return v43;
  }
  function xe(a$$309, b$$245, c$$169, d$$104) {
    return ga$$1(te, a$$309, d$$104 || ve, b$$245, c$$169);
  }
  function ue(a$$307) {
    function v44(a$$308, d$$103) {
      JAM.set(b$$244, d$$103, w$$6[a$$308], JAM.policy.p2);
      return;
    }
    var b$$244 = a$$307 || {};
    x$$50(pe, v44);
    return b$$244;
  }
  function se(a$$306, b$$243, c$$168) {
    c$$168 = c$$168 || .01;
    var v1154 = JAM.call(Math.random, Math, [], JAM.policy.p3) < c$$168;
    if (v1154) {
      a$$306 = "/pagead/gen_204?id=" + a$$306 + we(b$$243);
      a$$306 = L$$1(ma$$1("", "googlesyndication"), a$$306);
      a$$306 = JAM.call(a$$306.substring, a$$306, [0, 2E3], JAM.policy.p3);
      nb$$1(w$$6, a$$306);
    }
    return;
  }
  function ve(a$$305, b$$242, c$$167, d$$102, e$$64) {
    var f$$39 = v$$1;
    var v2776;
    if (Ea$$1) {
      v2776 = 1;
    } else {
      v2776 = 0;
    }
    var v1155 = v2776;
    var v2777;
    if (Fa$$1) {
      v2777 = 1;
    } else {
      v2777 = 0;
    }
    var v1156 = v2777;
    var v1157 = JAM.call(b$$242.substring, b$$242, [0, 512], JAM.policy.p3);
    var v2778 = e$$64;
    if (v2778) {
      v2778 = JAM.call(e$$64.substring, e$$64, [0, 40], JAM.policy.p3);
    }
    var v1158 = v2778;
    var v1159 = JAM.call(d$$102.toString, d$$102, [], JAM.policy.p3);
    var v2779 = f$$39.URL;
    var v1160 = JAM.call(v2779.substring, v2779, [0, 512], JAM.policy.p3);
    var v2780 = f$$39.referrer;
    a$$305 = {jscb:v1155, jscd:v1156, context:a$$305, msg:v1157, eid:v1158, file:c$$167, line:v1159, url:v1160, ref:JAM.call(v2780.substring, v2780, [0, 512], JAM.policy.p3)};
    ue(a$$305);
    se("jserror", a$$305);
    return!Ga$$1;
  }
  function te(a$$304, b$$241, c$$166, d$$101) {
    try {
      JAM.call(c$$166, null, [], JAM.policy.p3);
    } catch (e$$63) {
      c$$166 = !Ga$$1;
      try {
        var f$$38 = JAM.call(e$$63.toString, e$$63, [], JAM.policy.p3);
        var v2781 = e$$63.name;
        if (v2781) {
          v2781 = -1 == JAM.call(f$$38.indexOf, f$$38, [e$$63.name], JAM.policy.p3);
        }
        var v1162 = v2781;
        if (v1162) {
          f$$38 = f$$38 + (": " + e$$63.name);
        }
        var v2782 = e$$63.message;
        if (v2782) {
          v2782 = -1 == JAM.call(f$$38.indexOf, f$$38, [e$$63.message], JAM.policy.p3);
        }
        var v1163 = v2782;
        if (v1163) {
          f$$38 = f$$38 + (": " + e$$63.message);
        }
        if (e$$63.stack) {
          JSCompiler_inline_label_qe_241: {
            var a$$inline_237 = e$$63.stack;
            var b$$inline_238 = f$$38;
            try {
              var v1164 = -1 == JAM.call(a$$inline_237.indexOf, a$$inline_237, [b$$inline_238], JAM.policy.p3);
              if (v1164) {
                a$$inline_237 = b$$inline_238 + "\n" + a$$inline_237;
              }
              var c$$inline_239;
              var v1165 = a$$inline_237 != c$$inline_239;
              for (;v1165;) {
                c$$inline_239 = a$$inline_237;
                a$$inline_237 = JAM.call(a$$inline_237.replace, a$$inline_237, [/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1"], JAM.policy.p3);
                v1165 = a$$inline_237 != c$$inline_239;
              }
              f$$38 = JAM.call(a$$inline_237.replace, a$$inline_237, [/\n */g, "\n"], JAM.policy.p3);
            } catch (d$$inline_240) {
              f$$38 = b$$inline_238;
            }
          }
        }
        var g$$25 = "";
        var v1167 = e$$63.fileName;
        if (v1167) {
          g$$25 = e$$63.fileName;
        }
        var h$$18 = -1;
        var v1168 = e$$63.lineNumber;
        if (v1168) {
          h$$18 = e$$63.lineNumber;
        }
        var k$$7;
        JSCompiler_inline_label_re_244: {
          try {
            var v1169;
            if (d$$101) {
              v1169 = JAM.call(d$$101, null, [], JAM.policy.p3);
            } else {
              v1169 = "";
            }
            k$$7 = v1169;
            break JSCompiler_inline_label_re_244;
          } catch (b$$inline_243) {
          }
          k$$7 = "";
        }
        c$$166 = JAM.call(b$$241, null, [a$$304, f$$38, g$$25, h$$18, k$$7], JAM.policy.p3);
      } catch (l$$10) {
        var v3827 = JAM.call(l$$10.toString, l$$10, [], JAM.policy.p3) + "\n";
        var v4452 = l$$10.stack;
        if (!v4452) {
          v4452 = "";
        }
        se("jserror", {context:"protectAndRun", msg:v3827 + v4452});
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
      var v5119 = new S$$1(a$$300);
      return a$$300.__google_ad_urls = v5119;
    }
    try {
      if (JAM.call(b$$237.getOseId, b$$237, [], JAM.policy.p3)) {
        return b$$237;
      }
    } catch (c$$163) {
    }
    var v5120 = new S$$1(a$$300, b$$237);
    return a$$300.__google_ad_urls = v5120;
  }
  function ke(a$$293, b$$229, c$$156, d$$93) {
    var v2786;
    if (a$$293) {
      v2786 = "https";
    } else {
      v2786 = "http";
    }
    he = L$$1(b$$229, "/pagead/osd.js", v2786);
    ie = c$$156;
    je = d$$93;
    return;
  }
  function S$$1(a$$292, b$$228) {
    this.wa = a$$292;
    var v1175;
    if (b$$228) {
      v1175 = b$$228.ha;
    } else {
      v1175 = [];
    }
    this.ha = v1175;
    var v1176;
    if (b$$228) {
      v1176 = b$$228.Ua;
    } else {
      v1176 = !1;
    }
    this.Ua = v1176;
    var v1177;
    if (b$$228) {
      v1177 = b$$228.Db;
    } else {
      v1177 = "";
    }
    this.Db = v1177;
    var v1178;
    if (b$$228) {
      v1178 = b$$228.Wa;
    } else {
      v1178 = 0;
    }
    this.Wa = v1178;
    var v1179;
    if (b$$228) {
      v1179 = b$$228.Aa;
    } else {
      v1179 = "";
    }
    this.Aa = v1179;
    var v1180;
    if (b$$228) {
      v1180 = b$$228.q;
    } else {
      v1180 = [];
    }
    this.q = v1180;
    this.xa = null;
    this.Lb = !1;
    return;
  }
  function fe(a$$290, b$$227) {
    function v45() {
      var v1181 = "complete" == a$$290.readyState;
      if (v1181) {
        JAM.call(b$$227, null, [], JAM.policy.p3);
      }
      return;
    }
    if (rb$$1()) {
      var c$$155 = v45;
      y$$31(a$$290, "readystatechange", c$$155);
    } else {
      y$$31(a$$290, "load", b$$227);
    }
    return;
  }
  function de(a$$288, b$$225) {
    var c$$153 = b$$225 || w$$6;
    var v2788 = a$$288;
    if (v2788) {
      v2788 = c$$153.top != c$$153;
    }
    var v1183 = v2788;
    if (v1183) {
      c$$153 = c$$153.top;
    }
    try {
      var JSCompiler_temp$$0;
      var v2789 = c$$153.document;
      if (v2789) {
        v2789 = !c$$153.document.body;
      }
      if (v2789) {
        JSCompiler_temp$$0 = new u$$2(-1, -1);
      } else {
        var a$$inline_183 = c$$153 || window;
        a$$inline_183 = a$$inline_183.document;
        var v1184;
        if ("CSS1Compat" == a$$inline_183.compatMode) {
          v1184 = a$$inline_183.documentElement;
        } else {
          v1184 = a$$inline_183.body;
        }
        a$$inline_183 = v1184;
        JSCompiler_temp$$0 = new u$$2(a$$inline_183.clientWidth, a$$inline_183.clientHeight);
      }
      return JSCompiler_temp$$0;
    } catch (d$$92) {
      return new u$$2(-12245933, -12245933);
    }
    return;
  }
  function ce(a$$287, b$$224) {
    if (a$$287) {
      var c$$152 = JAM.call(a$$287.match, a$$287, [b$$224 + "=([^&]+)"], JAM.policy.p3);
      var v2791 = c$$152;
      if (v2791) {
        v2791 = 2 == c$$152.length;
      }
      if (v2791) {
        return c$$152[1];
      }
    }
    return "";
  }
  function be(a$$286, b$$223, c$$151, d$$91, e$$57) {
    var JSCompiler_temp$$12;
    if (e$$57) {
      var b$$inline_175 = b$$223;
      b$$inline_175 = "&" + b$$inline_175 + "=" + c$$151;
      JSCompiler_temp$$12 = a$$286 + b$$inline_175;
    } else {
      var a$$inline_178 = a$$286;
      var b$$inline_179 = b$$223;
      var c$$inline_180 = c$$151;
      var d$$inline_181 = "&" + b$$inline_179 + "=";
      b$$inline_179 = JAM.call(a$$inline_178.indexOf, a$$inline_178, [d$$inline_181], JAM.policy.p3);
      var v1192;
      if (0 > b$$inline_179) {
        v1192 = a$$inline_178 = a$$inline_178 + d$$inline_181 + c$$inline_180;
      } else {
        b$$inline_179 = b$$inline_179 + d$$inline_181.length;
        d$$inline_181 = JAM.call(a$$inline_178.indexOf, a$$inline_178, ["&", b$$inline_179], JAM.policy.p3);
        var v3833;
        if (0 <= d$$inline_181) {
          v3833 = JAM.call(a$$inline_178.substring, a$$inline_178, [0, b$$inline_179], JAM.policy.p3) + c$$inline_180 + JAM.call(a$$inline_178.substring, a$$inline_178, [d$$inline_181], JAM.policy.p3);
        } else {
          v3833 = JAM.call(a$$inline_178.substring, a$$inline_178, [0, b$$inline_179], JAM.policy.p3) + c$$inline_180;
        }
        v1192 = a$$inline_178 = v3833;
      }
      v1192;
      JSCompiler_temp$$12 = a$$inline_178;
    }
    c$$151 = JSCompiler_temp$$12;
    var v1193;
    if (2E3 < c$$151.length) {
      var v2795;
      if (void 0 !== d$$91) {
        v2795 = be(a$$286, b$$223, d$$91, void 0, e$$57);
      } else {
        v2795 = a$$286;
      }
      v1193 = v2795;
    } else {
      v1193 = c$$151;
    }
    return v1193;
  }
  function Zd(a$$282, b$$220, c$$148, d$$89) {
    function v46(a$$283) {
      return a$$283;
    }
    var v3837;
    if (c$$148) {
      v3837 = "google_debug&";
    } else {
      v3837 = "";
    }
    var v1194 = [v3837, "xpc=", b$$220, "&p=", encodeURIComponent(v$$1.location.protocol), "//", encodeURIComponent(v$$1.location.host)];
    b$$220 = JAM.call(v1194.join, v1194, [""], JAM.policy.p3);
    var v1195;
    if (d$$89) {
      v1195 = encodeURIComponent;
    } else {
      v1195 = v46;
    }
    d$$89 = v1195;
    var v2800 = a$$282;
    var v3840;
    if (-1 == JAM.call(a$$282.indexOf, a$$282, [JAM.call(d$$89, null, ["?"], JAM.policy.p3)], JAM.policy.p3)) {
      v3840 = JAM.call(d$$89, null, ["?"], JAM.policy.p3);
    } else {
      v3840 = JAM.call(d$$89, null, ["&"], JAM.policy.p3);
    }
    return v2800 + v3840 + JAM.call(d$$89, null, [b$$220], JAM.policy.p3);
  }
  function Yd(a$$281, b$$219, c$$147, d$$88, e$$56, f$$33, g$$21, h$$14) {
    return{a:a$$281, b:b$$219, c:c$$147, d:d$$88, e:e$$56, f:f$$33, g:g$$21, h:h$$14};
  }
  function Wd(a$$279) {
    var b$$217 = R$$1(a$$279, "fontSize");
    var c$$145;
    var a$$inline_169 = b$$217;
    var v2802 = a$$inline_169 = JAM.call(a$$inline_169.match, a$$inline_169, [Sd], JAM.policy.p3);
    if (v2802) {
      v2802 = a$$inline_169[0];
    }
    var v1198 = v2802;
    if (!v1198) {
      v1198 = null;
    }
    c$$145 = v1198;
    var v2804 = b$$217;
    if (v2804) {
      v2804 = "px" == c$$145;
    }
    if (v2804) {
      return parseInt(b$$217, 10);
    }
    if (N$$1) {
      if (c$$145 in Ud) {
        return Od(a$$279, b$$217, "left", "pixelLeft");
      }
      var v3841 = a$$279.parentNode;
      if (v3841) {
        v3841 = 1 == a$$279.parentNode.nodeType;
      }
      var v2805 = v3841;
      if (v2805) {
        v2805 = c$$145 in Vd;
      }
      if (v2805) {
        a$$279 = a$$279.parentNode;
        c$$145 = R$$1(a$$279, "fontSize");
        var v3842;
        if (b$$217 == c$$145) {
          v3842 = "1em";
        } else {
          v3842 = b$$217;
        }
        return Od(a$$279, v3842, "left", "pixelLeft");
      }
    }
    c$$145 = kd("span", {style:"visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"});
    JAM.call(a$$279.appendChild, a$$279, [c$$145], JAM.policy.p3);
    b$$217 = c$$145.offsetHeight;
    qd(c$$145);
    return b$$217;
  }
  function Qd(a$$276, b$$215) {
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
    var v1215;
    if (a$$275.currentStyle) {
      v1215 = a$$275.currentStyle[b$$214];
    } else {
      v1215 = null;
    }
    var c$$142 = v1215;
    var v1216;
    if (c$$142) {
      v1216 = Od(a$$275, c$$142, "left", "pixelLeft");
    } else {
      v1216 = 0;
    }
    return v1216;
  }
  function Od(a$$274, b$$213, c$$141, d$$85) {
    if (JAM.call(/^\d+px?$/.test, /^\d+px?$/, [b$$213], JAM.policy.p3)) {
      return parseInt(b$$213, 10);
    }
    var e$$54 = a$$274.style[c$$141];
    var f$$31 = a$$274.runtimeStyle[c$$141];
    JAM.set(a$$274.runtimeStyle, c$$141, a$$274.currentStyle[c$$141], JAM.policy.p2);
    JAM.set(a$$274.style, c$$141, b$$213, JAM.policy.p2);
    b$$213 = a$$274.style[d$$85];
    JAM.set(a$$274.style, c$$141, e$$54, JAM.policy.p2);
    JAM.set(a$$274.runtimeStyle, c$$141, f$$31, JAM.policy.p2);
    return b$$213;
  }
  function Nd(a$$273, b$$212) {
    var c$$140 = a$$273.style;
    var v1225;
    if ("opacity" in c$$140) {
      v1225 = c$$140.opacity = b$$212;
    } else {
      var v2810;
      if ("MozOpacity" in c$$140) {
        v2810 = c$$140.MozOpacity = b$$212;
      } else {
        var v3843 = "filter" in c$$140;
        if (v3843) {
          var v4464;
          if ("" === b$$212) {
            v4464 = "";
          } else {
            v4464 = "alpha(opacity=" + 100 * b$$212 + ")";
          }
          v3843 = c$$140.filter = v4464;
        }
        v2810 = v3843;
      }
      v1225 = v2810;
    }
    v1225;
    return;
  }
  function Md(a$$272) {
    var b$$211 = a$$272.style;
    a$$272 = "";
    var v1226;
    if ("opacity" in b$$211) {
      v1226 = a$$272 = b$$211.opacity;
    } else {
      var v2812;
      if ("MozOpacity" in b$$211) {
        v2812 = a$$272 = b$$211.MozOpacity;
      } else {
        var v4465 = "filter" in b$$211;
        if (v4465) {
          var v4774 = b$$211.filter;
          v4465 = b$$211 = JAM.call(v4774.match, v4774, [/alpha\(opacity=([\d.]+)\)/], JAM.policy.p3);
        }
        var v3845 = v4465;
        if (v3845) {
          v3845 = a$$272 = String(b$$211[1] / 100);
        }
        v2812 = v3845;
      }
      v1226 = v2812;
    }
    v1226;
    var v1227;
    if ("" == a$$272) {
      v1227 = a$$272;
    } else {
      v1227 = Number(a$$272);
    }
    return v1227;
  }
  function Ld(a$$271) {
    var b$$210 = a$$271.offsetWidth;
    var c$$139 = a$$271.offsetHeight;
    var v2815 = Pc;
    if (v2815) {
      v2815 = !b$$210;
    }
    var v1228 = v2815;
    if (v1228) {
      v1228 = !c$$139;
    }
    var d$$84 = v1228;
    var v1229;
    var v4467 = void 0 === b$$210;
    if (!v4467) {
      v4467 = d$$84;
    }
    var v3847 = v4467;
    if (v3847) {
      v3847 = a$$271.getBoundingClientRect;
    }
    if (v3847) {
      a$$271 = Ad(a$$271);
      v1229 = new u$$2(a$$271.right - a$$271.left, a$$271.bottom - a$$271.top);
    } else {
      v1229 = new u$$2(b$$210, c$$139);
    }
    return v1229;
  }
  function Jd(a$$267, b$$206) {
    var v1230 = "number" == typeof a$$267;
    if (v1230) {
      var v3850;
      if (b$$206) {
        v3850 = JAM.call(Math.round, Math, [a$$267], JAM.policy.p3);
      } else {
        v3850 = a$$267;
      }
      a$$267 = v3850 + "px";
    }
    return a$$267;
  }
  function Id(a$$266, b$$205, c$$137) {
    if (b$$205 instanceof u$$2) {
      c$$137 = b$$205.height;
      b$$205 = b$$205.width;
    } else {
      if (void 0 == c$$137) {
        throw Error("missing height argument");
      }
    }
    var v1233 = a$$266.style;
    var v5121 = Jd(b$$205, !0);
    v1233.width = v5121;
    var v1234 = a$$266.style;
    var v5122 = Jd(c$$137, !0);
    v1234.height = v5122;
    return;
  }
  function Cd(a$$263) {
    var b$$202;
    var c$$134 = cd(a$$263);
    var d$$81 = R$$1(a$$263, "position");
    var v4778 = Oc;
    if (v4778) {
      v4778 = c$$134.getBoxObjectFor;
    }
    var v4472 = v4778;
    if (v4472) {
      v4472 = !a$$263.getBoundingClientRect;
    }
    var v3851 = v4472;
    if (v3851) {
      v3851 = "absolute" == d$$81;
    }
    var v2822 = v3851;
    if (v2822) {
      v2822 = b$$202 = JAM.call(c$$134.getBoxObjectFor, c$$134, [a$$263], JAM.policy.p3);
    }
    var v1235 = v2822;
    if (v1235) {
      var v2823 = 0 > b$$202.screenX;
      if (!v2823) {
        v2823 = 0 > b$$202.screenY;
      }
      v1235 = v2823;
    }
    var e$$51 = v1235;
    var f$$28 = new M$$1(0, 0);
    var g$$19;
    var a$$inline_149 = c$$134;
    var v1236;
    if (a$$inline_149) {
      v1236 = cd(a$$inline_149);
    } else {
      v1236 = document;
    }
    a$$inline_149 = v1236;
    var v1237;
    var v4473 = !N$$1;
    if (!v4473) {
      var v4780 = N$$1;
      if (v4780) {
        v4780 = 9 <= Vc;
      }
      v4473 = v4780;
    }
    var v3855 = v4473;
    if (!v3855) {
      var v4474 = dd(a$$inline_149);
      v3855 = JAM.call(v4474.$b, v4474, [], JAM.policy.p3);
    }
    if (v3855) {
      v1237 = a$$inline_149.documentElement;
    } else {
      v1237 = a$$inline_149.body;
    }
    g$$19 = v1237;
    if (a$$263 == g$$19) {
      return f$$28;
    }
    if (a$$263.getBoundingClientRect) {
      b$$202 = Ad(a$$263);
      var v4476 = dd(c$$134);
      a$$263 = JAM.call(v4476.Ja, v4476, [], JAM.policy.p3);
      f$$28.x = b$$202.left + a$$263.x;
      f$$28.y = b$$202.top + a$$263.y;
    } else {
      var v2827 = c$$134.getBoxObjectFor;
      if (v2827) {
        v2827 = !e$$51;
      }
      if (v2827) {
        b$$202 = JAM.call(c$$134.getBoxObjectFor, c$$134, [a$$263], JAM.policy.p3);
        a$$263 = JAM.call(c$$134.getBoxObjectFor, c$$134, [g$$19], JAM.policy.p3);
        f$$28.x = b$$202.screenX - a$$263.screenX;
        f$$28.y = b$$202.screenY - a$$263.screenY;
      } else {
        b$$202 = a$$263;
        var v2830 = b$$202;
        if (v2830) {
          v2830 = b$$202 != a$$263;
        }
        var v1241 = v2830;
        do {
          f$$28.x = f$$28.x + b$$202.offsetLeft;
          f$$28.y = f$$28.y + b$$202.offsetTop;
          var v1239 = b$$202 != a$$263;
          if (v1239) {
            var v4477 = f$$28.x;
            var v4782 = b$$202.clientLeft;
            if (!v4782) {
              v4782 = 0;
            }
            f$$28.x = v4477 + v4782;
            var v4479 = f$$28.y;
            var v4783 = b$$202.clientTop;
            if (!v4783) {
              v4783 = 0;
            }
            f$$28.y = v4479 + v4783;
          }
          var v2835 = Pc;
          if (v2835) {
            v2835 = "fixed" == R$$1(b$$202, "position");
          }
          if (v2835) {
            f$$28.x = f$$28.x + c$$134.body.scrollLeft;
            f$$28.y = f$$28.y + c$$134.body.scrollTop;
            break;
          }
          b$$202 = b$$202.offsetParent;
          var v2840 = b$$202;
          if (v2840) {
            v2840 = b$$202 != a$$263;
          }
          v1241 = v2840;
        } while (v1241);
        var v2841 = Nc;
        if (!v2841) {
          var v3863 = Pc;
          if (v3863) {
            v3863 = "absolute" == d$$81;
          }
          v2841 = v3863;
        }
        if (v2841) {
          f$$28.y = f$$28.y - c$$134.body.offsetTop;
        }
        b$$202 = a$$263;
        var v3866 = b$$202 = Bd(b$$202);
        if (v3866) {
          v3866 = b$$202 != c$$134.body;
        }
        var v2844 = v3866;
        if (v2844) {
          v2844 = b$$202 != g$$19;
        }
        var v1243 = v2844;
        for (;v1243;) {
          f$$28.x = f$$28.x - b$$202.scrollLeft;
          var v3869 = Nc;
          if (v3869) {
            v3869 = "TR" == b$$202.tagName;
          }
          var v2845 = v3869;
          if (!v2845) {
            f$$28.y = f$$28.y - b$$202.scrollTop;
          }
          var v3871 = b$$202 = Bd(b$$202);
          if (v3871) {
            v3871 = b$$202 != c$$134.body;
          }
          var v2846 = v3871;
          if (v2846) {
            v2846 = b$$202 != g$$19;
          }
          v1243 = v2846;
        }
      }
    }
    return f$$28;
  }
  function Bd(a$$262) {
    var v2847 = N$$1;
    if (v2847) {
      var v4486 = N$$1;
      if (v4486) {
        v4486 = 8 <= Vc;
      }
      v2847 = !v4486;
    }
    if (v2847) {
      return a$$262.offsetParent;
    }
    var b$$201 = cd(a$$262);
    var c$$133 = R$$1(a$$262, "position");
    var v1247 = "fixed" == c$$133;
    if (!v1247) {
      v1247 = "absolute" == c$$133;
    }
    var d$$80 = v1247;
    a$$262 = a$$262.parentNode;
    var v2849 = a$$262;
    if (v2849) {
      v2849 = a$$262 != b$$201;
    }
    var v1249 = v2849;
    for (;v1249;) {
      c$$133 = R$$1(a$$262, "position");
      var v4944 = d$$80;
      if (v4944) {
        v4944 = "static" == c$$133;
      }
      var v4784 = v4944;
      if (v4784) {
        v4784 = a$$262 != b$$201.documentElement;
      }
      var v4487 = v4784;
      if (v4487) {
        v4487 = a$$262 != b$$201.body;
      }
      d$$80 = v4487;
      var v3873 = !d$$80;
      if (v3873) {
        var v4997 = a$$262.scrollWidth > a$$262.clientWidth;
        if (!v4997) {
          v4997 = a$$262.scrollHeight > a$$262.clientHeight;
        }
        var v4946 = v4997;
        if (!v4946) {
          v4946 = "fixed" == c$$133;
        }
        var v4786 = v4946;
        if (!v4786) {
          v4786 = "absolute" == c$$133;
        }
        var v4488 = v4786;
        if (!v4488) {
          v4488 = "relative" == c$$133;
        }
        v3873 = v4488;
      }
      if (v3873) {
        return a$$262;
      }
      a$$262 = a$$262.parentNode;
      var v2850 = a$$262;
      if (v2850) {
        v2850 = a$$262 != b$$201;
      }
      v1249 = v2850;
    }
    return null;
  }
  function Ad(a$$261) {
    var b$$200;
    try {
      b$$200 = JAM.call(a$$261.getBoundingClientRect, a$$261, [], JAM.policy.p3);
    } catch (c$$132) {
      return{left:0, top:0, right:0, bottom:0};
    }
    var v2851 = N$$1;
    if (v2851) {
      v2851 = a$$261.ownerDocument.body;
    }
    var v1250 = v2851;
    if (v1250) {
      a$$261 = a$$261.ownerDocument;
      b$$200.left = b$$200.left - (a$$261.documentElement.clientLeft + a$$261.body.clientLeft);
      b$$200.top = b$$200.top - (a$$261.documentElement.clientTop + a$$261.body.clientTop);
    }
    return b$$200;
  }
  function R$$1(a$$259, b$$199) {
    var v2852 = yd(a$$259, b$$199);
    if (!v2852) {
      var v3875;
      if (a$$259.currentStyle) {
        v3875 = a$$259.currentStyle[b$$199];
      } else {
        v3875 = null;
      }
      v2852 = v3875;
    }
    var v1251 = v2852;
    if (!v1251) {
      var v2853 = a$$259.style;
      if (v2853) {
        v2853 = a$$259.style[b$$199];
      }
      v1251 = v2853;
    }
    return v1251;
  }
  function yd(a$$258, b$$198) {
    var c$$131 = cd(a$$258);
    var v1252;
    var v4493 = c$$131.defaultView;
    if (v4493) {
      v4493 = c$$131.defaultView.getComputedStyle;
    }
    var v3878 = v4493;
    if (v3878) {
      var v4494 = c$$131.defaultView;
      v3878 = c$$131 = JAM.call(v4494.getComputedStyle, v4494, [a$$258, null], JAM.policy.p3);
    }
    if (v3878) {
      var v3879 = c$$131[b$$198];
      if (!v3879) {
        v3879 = JAM.call(c$$131.getPropertyValue, c$$131, [b$$198], JAM.policy.p3);
      }
      var v2855 = v3879;
      if (!v2855) {
        v2855 = "";
      }
      v1252 = v2855;
    } else {
      v1252 = "";
    }
    return v1252;
  }
  function wd(a$$256, b$$196, c$$129) {
    var JSCompiler_inline_result$$52;
    JSCompiler_inline_label_xd_148: {
      var a$$inline_144 = a$$256;
      var b$$inline_145 = c$$129;
      var c$$inline_146 = db$$1(b$$inline_145);
      if (void 0 === a$$inline_144.style[c$$inline_146]) {
        var v2859;
        if (Pc) {
          v2859 = "Webkit";
        } else {
          var v3882;
          if (Oc) {
            v3882 = "Moz";
          } else {
            var v4496;
            if (N$$1) {
              v4496 = "ms";
            } else {
              var v4793;
              if (Nc) {
                v4793 = "O";
              } else {
                v4793 = null;
              }
              v4496 = v4793;
            }
            v3882 = v4496;
          }
          v2859 = v3882;
        }
        var d$$inline_147 = v2859 + eb$$1(b$$inline_145);
        if (void 0 !== a$$inline_144.style[d$$inline_147]) {
          JSCompiler_inline_result$$52 = d$$inline_147;
          break JSCompiler_inline_label_xd_148;
        }
      }
      JSCompiler_inline_result$$52 = c$$inline_146;
    }
    var v1257 = c$$129 = JSCompiler_inline_result$$52;
    if (v1257) {
      JAM.set(a$$256.style, c$$129, b$$196, JAM.policy.p2);
    }
    return;
  }
  function Q$$1(a$$255, b$$195, c$$128) {
    var v1258;
    if (p$$1(b$$195)) {
      v1258 = wd(a$$255, c$$128, b$$195);
    } else {
      v1258 = Dc(b$$195, ga$$1(wd, a$$255));
    }
    v1258;
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
    var v2865 = a$$247;
    if (!v2865) {
      v2865 = m$$3.document;
    }
    var v1259 = v2865;
    if (!v1259) {
      v1259 = document;
    }
    this.V = v1259;
    return;
  }
  function md(a$$246) {
    var v2867 = a$$246;
    if (v2867) {
      v2867 = "number" == typeof a$$246.length;
    }
    if (v2867) {
      if (da$$1(a$$246)) {
        var v1260 = "function" == typeof a$$246.item;
        if (!v1260) {
          v1260 = "string" == typeof a$$246.item;
        }
        return v1260;
      }
      if ("function" == ba$$1(a$$246)) {
        return "function" == typeof a$$246.item;
      }
    }
    return!1;
  }
  function ud(a$$245, b$$190, c$$124) {
    if (!(a$$245.nodeName in sd)) {
      if (3 == a$$245.nodeType) {
        var v1265;
        if (c$$124) {
          var v3889 = String(a$$245.nodeValue);
          v1265 = JAM.call(b$$190.push, b$$190, [JAM.call(v3889.replace, v3889, [/(\r\n|\r|\n)/g, ""], JAM.policy.p3)], JAM.policy.p3);
        } else {
          v1265 = JAM.call(b$$190.push, b$$190, [a$$245.nodeValue], JAM.policy.p3);
        }
        v1265;
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
    var v1270;
    if (9 == a$$243.nodeType) {
      v1270 = a$$243;
    } else {
      var v2879 = a$$243.ownerDocument;
      if (!v2879) {
        v2879 = a$$243.document;
      }
      v1270 = v2879;
    }
    return v1270;
  }
  function rd(a$$242, b$$188) {
    var v2881 = a$$242.contains;
    if (v2881) {
      v2881 = 1 == b$$188.nodeType;
    }
    if (v2881) {
      var v1271 = a$$242 == b$$188;
      if (!v1271) {
        v1271 = JAM.call(a$$242.contains, a$$242, [b$$188], JAM.policy.p3);
      }
      return v1271;
    }
    if ("undefined" != typeof a$$242.compareDocumentPosition) {
      var v1273 = a$$242 == b$$188;
      if (!v1273) {
        v1273 = Boolean(JAM.call(a$$242.compareDocumentPosition, a$$242, [b$$188], JAM.policy.p3) & 16);
      }
      return v1273;
    }
    var v2886 = b$$188;
    if (v2886) {
      v2886 = a$$242 != b$$188;
    }
    var v1275 = v2886;
    for (;v1275;) {
      b$$188 = b$$188.parentNode;
      var v2887 = b$$188;
      if (v2887) {
        v2887 = a$$242 != b$$188;
      }
      v1275 = v2887;
    }
    return b$$188 == a$$242;
  }
  function qd(a$$241) {
    var v1276;
    var v3895 = a$$241;
    if (v3895) {
      v3895 = a$$241.parentNode;
    }
    if (v3895) {
      var v2888 = a$$241.parentNode;
      v1276 = JAM.call(v2888.removeChild, v2888, [a$$241], JAM.policy.p3);
    } else {
      v1276 = null;
    }
    return v1276;
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
  }
  function ld(a$$237, b$$185, c$$122, d$$76) {
    function e$$50(c$$123) {
      if (c$$123) {
        var v3896;
        if (p$$1(c$$123)) {
          v3896 = JAM.call(a$$237.createTextNode, a$$237, [c$$123], JAM.policy.p3);
        } else {
          v3896 = c$$123;
        }
        JAM.call(b$$185.appendChild, b$$185, [v3896], JAM.policy.p3);
      }
      return;
    }
    var v1281 = d$$76 < c$$122.length;
    for (;v1281;) {
      var f$$27 = c$$122[d$$76];
      var v1280;
      var v3897 = !ca$$1(f$$27);
      if (!v3897) {
        var v4501 = da$$1(f$$27);
        if (v4501) {
          v4501 = 0 < f$$27.nodeType;
        }
        v3897 = v4501;
      }
      if (v3897) {
        v1280 = e$$50(f$$27);
      } else {
        var v3898;
        if (md(f$$27)) {
          v3898 = ac(f$$27);
        } else {
          v3898 = f$$27;
        }
        v1280 = JAM.call(Zb, null, [v3898, e$$50], JAM.policy.p3);
      }
      v1280;
      d$$76++;
      v1281 = d$$76 < c$$122.length;
    }
    return;
  }
  function kd(a$$235, b$$183, c$$120) {
    var JSCompiler_inline_result$$48;
    var b$$inline_136 = arguments;
    var c$$inline_137 = b$$inline_136[0];
    var d$$inline_138 = b$$inline_136[1];
    var v3899 = !Wc;
    if (v3899) {
      v3899 = d$$inline_138;
    }
    var v2896 = v3899;
    if (v2896) {
      var v3900 = d$$inline_138.name;
      if (!v3900) {
        v3900 = d$$inline_138.type;
      }
      v2896 = v3900;
    }
    if (v2896) {
      c$$inline_137 = ["<", c$$inline_137];
      var v1282 = d$$inline_138.name;
      if (v1282) {
        JAM.call(c$$inline_137.push, c$$inline_137, [' name="', Sa$$1(d$$inline_138.name), '"'], JAM.policy.p3);
      }
      if (d$$inline_138.type) {
        JAM.call(c$$inline_137.push, c$$inline_137, [' type="', Sa$$1(d$$inline_138.type), '"'], JAM.policy.p3);
        var e$$inline_139 = {};
        Gc(e$$inline_139, d$$inline_138);
        delete e$$inline_139.type;
        d$$inline_138 = e$$inline_139;
      }
      JAM.call(c$$inline_137.push, c$$inline_137, [">"], JAM.policy.p3);
      c$$inline_137 = JAM.call(c$$inline_137.join, c$$inline_137, [""], JAM.policy.p3);
    }
    c$$inline_137 = JAM.call(document.createElement, document, [c$$inline_137], JAM.policy.p3);
    if (d$$inline_138) {
      var v2899;
      if (p$$1(d$$inline_138)) {
        v2899 = c$$inline_137.className = d$$inline_138;
      } else {
        var v3902;
        if (n$$2(d$$inline_138)) {
          var v4795 = [c$$inline_137];
          v3902 = JAM.call(ad.apply, ad, [null, JAM.call(v4795.concat, v4795, [d$$inline_138], JAM.policy.p3)], JAM.policy.p3);
        } else {
          v3902 = fd(c$$inline_137, d$$inline_138);
        }
        v2899 = v3902;
      }
      v2899;
    }
    var v1286 = 2 < b$$inline_136.length;
    if (v1286) {
      ld(document, c$$inline_137, b$$inline_136, 2);
    }
    JSCompiler_inline_result$$48 = c$$inline_137;
    return JSCompiler_inline_result$$48;
  }
  function fd(a$$231, b$$180) {
    function v47(b$$181, d$$74) {
      var v1287;
      if ("style" == d$$74) {
        v1287 = a$$231.style.cssText = b$$181;
      } else {
        var v2902;
        if ("class" == d$$74) {
          v2902 = a$$231.className = b$$181;
        } else {
          var v3904;
          if ("for" == d$$74) {
            v3904 = a$$231.htmlFor = b$$181;
          } else {
            var v4507;
            if (d$$74 in ed) {
              v4507 = JAM.call(a$$231.setAttribute, a$$231, [ed[d$$74], b$$181], JAM.policy.p3);
            } else {
              var v4797;
              var v5001 = 0 == JAM.call(d$$74.lastIndexOf, d$$74, ["aria-", 0], JAM.policy.p3);
              if (!v5001) {
                v5001 = 0 == JAM.call(d$$74.lastIndexOf, d$$74, ["data-", 0], JAM.policy.p3);
              }
              if (v5001) {
                v4797 = JAM.call(a$$231.setAttribute, a$$231, [d$$74, b$$181], JAM.policy.p3);
              } else {
                v4797 = JAM.set(a$$231, d$$74, b$$181, JAM.policy.p2);
              }
              v4507 = v4797;
            }
            v3904 = v4507;
          }
          v2902 = v3904;
        }
        v1287 = v2902;
      }
      v1287;
      return;
    }
    Dc(b$$180, v47);
    return;
  }
  function dd(a$$230) {
    var v1288;
    if (a$$230) {
      v1288 = new O$$1(cd(a$$230));
    } else {
      var v2905 = Ma$$1;
      if (!v2905) {
        v2905 = Ma$$1 = new O$$1;
      }
      v1288 = v2905;
    }
    return v1288;
  }
  function ad(a$$227, b$$177) {
    var c$$118 = Zc(a$$227);
    var d$$73 = bc(arguments, 1);
    var e$$48 = c$$118.length + d$$73.length;
    var a$$inline_128 = c$$118;
    var b$$inline_129 = d$$73;
    var c$$inline_130 = 0;
    var v1292 = c$$inline_130 < b$$inline_129.length;
    for (;v1292;) {
      var v1291 = $b(a$$inline_128, b$$inline_129[c$$inline_130]);
      if (!v1291) {
        JAM.call(a$$inline_128.push, a$$inline_128, [b$$inline_129[c$$inline_130]], JAM.policy.p3);
      }
      c$$inline_130++;
      v1292 = c$$inline_130 < b$$inline_129.length;
    }
    var b$$inline_133 = JAM.call(c$$118.join, c$$118, [" "], JAM.policy.p3);
    a$$227.className = b$$inline_133;
    return c$$118.length == e$$48;
  }
  function Zc(a$$226) {
    a$$226 = a$$226.className;
    var v2911 = p$$1(a$$226);
    if (v2911) {
      v2911 = JAM.call(a$$226.match, a$$226, [/\S+/g], JAM.policy.p3);
    }
    var v1294 = v2911;
    if (!v1294) {
      v1294 = [];
    }
    return v1294;
  }
  function Uc(a$$223) {
    var JSCompiler_temp$$72;
    if (JSCompiler_temp$$72 = Tc[a$$223]) {
    } else {
      var JSCompiler_inline_result$$73;
      var b$$inline_114 = a$$223;
      var c$$inline_115 = 0;
      var v2913 = String(Sc);
      var v1295 = JAM.call(v2913.replace, v2913, [/^[\s\xa0]+|[\s\xa0]+$/g, ""], JAM.policy.p3);
      var d$$inline_116 = JAM.call(v1295.split, v1295, ["."], JAM.policy.p3);
      var v2914 = String(b$$inline_114);
      var v1296 = JAM.call(v2914.replace, v2914, [/^[\s\xa0]+|[\s\xa0]+$/g, ""], JAM.policy.p3);
      var e$$inline_117 = JAM.call(v1296.split, v1296, ["."], JAM.policy.p3);
      var f$$inline_118 = JAM.call(Math.max, Math, [d$$inline_116.length, e$$inline_117.length], JAM.policy.p3);
      var g$$inline_119 = 0;
      var v2915 = 0 == c$$inline_115;
      if (v2915) {
        v2915 = g$$inline_119 < f$$inline_118;
      }
      var v1308 = v2915;
      for (;v1308;) {
        var v1299 = d$$inline_116[g$$inline_119];
        if (!v1299) {
          v1299 = "";
        }
        var h$$inline_120 = v1299;
        var v1300 = e$$inline_117[g$$inline_119];
        if (!v1300) {
          v1300 = "";
        }
        var k$$inline_121 = v1300;
        var l$$inline_122 = RegExp("(\\d*)(\\D*)", "g");
        var z$$inline_123 = RegExp("(\\d*)(\\D*)", "g");
        var v1307 = 0 == c$$inline_115;
        do {
          var v1301 = JAM.call(l$$inline_122.exec, l$$inline_122, [h$$inline_120], JAM.policy.p3);
          if (!v1301) {
            v1301 = ["", "", ""];
          }
          var C$$inline_124 = v1301;
          var v1302 = JAM.call(z$$inline_123.exec, z$$inline_123, [k$$inline_121], JAM.policy.p3);
          if (!v1302) {
            v1302 = ["", "", ""];
          }
          var I$$inline_125 = v1302;
          var v2920 = 0 == C$$inline_124[0].length;
          if (v2920) {
            v2920 = 0 == I$$inline_125[0].length;
          }
          if (v2920) {
            break;
          }
          var v1304;
          if (0 == C$$inline_124[1].length) {
            v1304 = 0;
          } else {
            v1304 = parseInt(C$$inline_124[1], 10);
          }
          c$$inline_115 = v1304;
          var v1305;
          if (0 == I$$inline_125[1].length) {
            v1305 = 0;
          } else {
            v1305 = parseInt(I$$inline_125[1], 10);
          }
          var xb$$inline_126 = v1305;
          var v2925 = bb$$1(c$$inline_115, xb$$inline_126);
          if (!v2925) {
            v2925 = bb$$1(0 == C$$inline_124[2].length, 0 == I$$inline_125[2].length);
          }
          var v1306 = v2925;
          if (!v1306) {
            v1306 = bb$$1(C$$inline_124[2], I$$inline_125[2]);
          }
          c$$inline_115 = v1306;
          v1307 = 0 == c$$inline_115;
        } while (v1307);
        g$$inline_119++;
        var v2929 = 0 == c$$inline_115;
        if (v2929) {
          v2929 = g$$inline_119 < f$$inline_118;
        }
        v1308 = v2929;
      }
      JSCompiler_inline_result$$73 = c$$inline_115;
      introspect(JAM.policy.p2) {
        JSCompiler_temp$$72 = Tc[a$$223] = 0 <= JSCompiler_inline_result$$73;
      }
    }
    return JSCompiler_temp$$72;
  }
  function Qc() {
    var a$$222 = m$$3.document;
    var v1310;
    if (a$$222) {
      v1310 = a$$222.documentMode;
    } else {
      v1310 = void 0;
    }
    return v1310;
  }
  function Rc() {
    var a$$221 = "";
    var b$$174;
    var v1311;
    var v3914 = Nc;
    if (v3914) {
      v3914 = m$$3.opera;
    }
    if (v3914) {
      a$$221 = m$$3.opera.version;
      var v3916;
      if ("function" == typeof a$$221) {
        v3916 = JAM.call(a$$221, null, [], JAM.policy.p3);
      } else {
        v3916 = a$$221;
      }
      v1311 = a$$221 = v3916;
    } else {
      var v3917;
      if (Oc) {
        v3917 = b$$174 = /rv\:([^\);]+)(\)|;)/;
      } else {
        var v4516;
        if (N$$1) {
          v4516 = b$$174 = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/;
        } else {
          var v4802 = Pc;
          if (v4802) {
            v4802 = b$$174 = /WebKit\/(\S+)/;
          }
          v4516 = v4802;
        }
        v3917 = v4516;
      }
      v3917;
      var v3918 = b$$174;
      if (v3918) {
        var v4517;
        var v5002;
        if (m$$3.navigator) {
          v5002 = m$$3.navigator.userAgent;
        } else {
          v5002 = null;
        }
        if (a$$221 = JAM.call(b$$174.exec, b$$174, [v5002], JAM.policy.p3)) {
          v4517 = a$$221[1];
        } else {
          v4517 = "";
        }
        v3918 = a$$221 = v4517;
      }
      v1311 = v3918;
    }
    v1311;
    var v1312;
    var v3919 = N$$1;
    if (v3919) {
      b$$174 = Qc();
      v3919 = b$$174 > parseFloat(a$$221);
    }
    if (v3919) {
      v1312 = String(b$$174);
    } else {
      v1312 = a$$221;
    }
    return v1312;
  }
  function Mc() {
    Kc = Jc = Ic = Hc = !1;
    var a$$220;
    var v2932;
    if (m$$3.navigator) {
      v2932 = m$$3.navigator.userAgent;
    } else {
      v2932 = null;
    }
    if (a$$220 = v2932) {
      var b$$173 = m$$3.navigator;
      Hc = 0 == JAM.call(a$$220.lastIndexOf, a$$220, ["Opera", 0], JAM.policy.p3);
      var v1314 = !Hc;
      if (v1314) {
        var v2933 = -1 != JAM.call(a$$220.indexOf, a$$220, ["MSIE"], JAM.policy.p3);
        if (!v2933) {
          v2933 = -1 != JAM.call(a$$220.indexOf, a$$220, ["Trident"], JAM.policy.p3);
        }
        v1314 = v2933;
      }
      Ic = v1314;
      var v1315 = !Hc;
      if (v1315) {
        v1315 = -1 != JAM.call(a$$220.indexOf, a$$220, ["WebKit"], JAM.policy.p3);
      }
      Jc = v1315;
      var v3925 = !Hc;
      if (v3925) {
        v3925 = !Jc;
      }
      var v2935 = v3925;
      if (v2935) {
        v2935 = !Ic;
      }
      var v1316 = v2935;
      if (v1316) {
        v1316 = "Gecko" == b$$173.product;
      }
      Kc = v1316;
    }
    return;
  }
  function Gc(a$$219, b$$172) {
    var c$$117;
    var d$$72;
    var e$$47 = 1;
    var v1319 = e$$47 < arguments.length;
    for (;v1319;) {
      d$$72 = arguments[e$$47];
      for (c$$117 in d$$72) {
        JAM.set(a$$219, c$$117, d$$72[c$$117], JAM.policy.p2);
      }
      var f$$26 = 0;
      var v1318 = f$$26 < Fc.length;
      for (;v1318;) {
        c$$117 = Fc[f$$26];
        var v3926 = Object.prototype.hasOwnProperty;
        var v2939 = JAM.call(v3926.call, v3926, [d$$72, c$$117], JAM.policy.p3);
        if (v2939) {
          JAM.set(a$$219, c$$117, d$$72[c$$117], JAM.policy.p2);
        }
        f$$26++;
        v1318 = f$$26 < Fc.length;
      }
      e$$47++;
      v1319 = e$$47 < arguments.length;
    }
    return;
  }
  function Ec(a$$218, b$$171) {
    var c$$116;
    for (c$$116 in a$$218) {
      if (a$$218[c$$116] == b$$171) {
        return!0;
      }
    }
    return!1;
  }
  function Dc(a$$217, b$$170, c$$115) {
    var d$$71;
    for (d$$71 in a$$217) {
      JAM.call(b$$170.call, b$$170, [c$$115, a$$217[d$$71], d$$71, a$$217], JAM.policy.p3);
    }
    return;
  }
  function M$$1(a$$213, b$$166) {
    var v1322;
    if (void 0 !== a$$213) {
      v1322 = a$$213;
    } else {
      v1322 = 0;
    }
    this.x = v1322;
    var v1323;
    if (void 0 !== b$$166) {
      v1323 = b$$166;
    } else {
      v1323 = 0;
    }
    this.y = v1323;
    return;
  }
  function L$$1(a$$212, b$$165, c$$113) {
    if (!c$$113) {
      var v2945;
      if (Ha$$1) {
        v2945 = "https";
      } else {
        v2945 = "http";
      }
      c$$113 = v2945;
    }
    var v1324 = [c$$113, "://", a$$212, b$$165];
    return JAM.call(v1324.join, v1324, [""], JAM.policy.p3);
  }
  function Bc(a$$211) {
    var v1325 = a$$211.google_page_location;
    if (!v1325) {
      v1325 = a$$211.google_page_url;
    }
    var b$$164 = v1325;
    var v1326 = "EMPTY" == b$$164;
    if (v1326) {
      b$$164 = a$$211.google_page_url;
    }
    var JSCompiler_inline_result$$20;
    var a$$inline_111 = a$$211;
    a$$inline_111 = a$$inline_111.google_ad_channel;
    var v1327;
    if (JAM.call(zc.test, zc, [a$$inline_111], JAM.policy.p3)) {
      v1327 = !0;
    } else {
      v1327 = !1;
    }
    JSCompiler_inline_result$$20 = v1327;
    if (JSCompiler_inline_result$$20) {
      return!0;
    }
    var v2949 = Ga$$1;
    if (!v2949) {
      v2949 = !b$$164;
    }
    if (v2949) {
      return!1;
    }
    b$$164 = JAM.call(b$$164.toString, b$$164, [], JAM.policy.p3);
    var v1329;
    if (0 == JAM.call(b$$164.indexOf, b$$164, ["http://"], JAM.policy.p3)) {
      v1329 = b$$164 = JAM.call(b$$164.substring, b$$164, [7, b$$164.length], JAM.policy.p3);
    } else {
      var v2951 = 0 == JAM.call(b$$164.indexOf, b$$164, ["https://"], JAM.policy.p3);
      if (v2951) {
        v2951 = b$$164 = JAM.call(b$$164.substring, b$$164, [8, b$$164.length], JAM.policy.p3);
      }
      v1329 = v2951;
    }
    v1329;
    a$$211 = JAM.call(b$$164.indexOf, b$$164, ["/"], JAM.policy.p3);
    var v1330 = -1 == a$$211;
    if (v1330) {
      a$$211 = b$$164.length;
    }
    b$$164 = JAM.call(b$$164.substring, b$$164, [0, a$$211], JAM.policy.p3);
    b$$164 = JAM.call(b$$164.split, b$$164, ["."], JAM.policy.p3);
    a$$211 = !1;
    var v1331 = 3 <= b$$164.length;
    if (v1331) {
      a$$211 = b$$164[b$$164.length - 3] in yc;
    }
    var v1332 = 2 <= b$$164.length;
    if (v1332) {
      var v2956 = a$$211;
      if (!v2956) {
        v2956 = b$$164[b$$164.length - 2] in yc;
      }
      a$$211 = v2956;
    }
    return a$$211;
  }
  function xc() {
    var a$$209 = J$$1();
    var v1333;
    if (a$$209) {
      v1333 = JAM.call(a$$209.Ka, a$$209, [], JAM.policy.p3);
    } else {
      v1333 = "";
    }
    return v1333;
  }
  function J$$1() {
    if (uc) {
    } else {
      var a$$inline_106 = H$$1();
      var b$$inline_107 = new E$$1;
      var c$$inline_108 = 0;
      var d$$inline_109 = a$$inline_106.defaultBucket.length;
      var v1337 = c$$inline_108 < d$$inline_109;
      for (;v1337;) {
        var v1335 = b$$inline_107.defaultBucket;
        JAM.call(v1335.push, v1335, [a$$inline_106.defaultBucket[c$$inline_108]], JAM.policy.p3);
        ++c$$inline_108;
        v1337 = c$$inline_108 < d$$inline_109;
      }
      x$$50(a$$inline_106.layers, JAM.call(r$$2, null, [E$$1.prototype.Ga, b$$inline_107], JAM.policy.p3));
      uc = b$$inline_107;
    }
    return uc;
  }
  function H$$1() {
    if (wc()) {
      var a$$208 = tc;
      return a$$208;
    }
    a$$208 = mc();
    var JSCompiler_inline_result$$29;
    var b$$inline_104 = new E$$1(1, 3, 4, 7, 10, 12, 13, 14, 16, 17, 18, 19);
    JSCompiler_inline_result$$29 = oc(a$$208, 3, b$$inline_104);
    return tc = JSCompiler_inline_result$$29;
  }
  function wc() {
    var v2959 = tc;
    if (v2959) {
      v2959 = vc(tc);
    }
    if (v2959) {
      return!0;
    }
    var a$$207 = mc();
    var v1342;
    var v4806 = a$$207 = G$$1(a$$207, 3);
    if (v4806) {
      v4806 = gb$$1(a$$207);
    }
    var v4521 = v4806;
    if (v4521) {
      v4521 = hb$$1(a$$207, E$$1.prototype);
    }
    var v3937 = v4521;
    if (v3937) {
      v3937 = vc(a$$207);
    }
    if (v3937) {
      tc = a$$207;
      v1342 = !0;
    } else {
      v1342 = !1;
    }
    return v1342;
  }
  function vc(a$$206) {
    try {
      return JAM.call(a$$206.statusz, a$$206, [], JAM.policy.p3);
    } catch (b$$163) {
      return!1;
    }
    return;
  }
  function F$$1(a$$202, b$$159, c$$112) {
    a$$202 = a$$202.S;
    b$$159 = nc(b$$159);
    var v1343;
    if (void 0 === a$$202[b$$159]) {
      v1343 = JAM.set(a$$202, b$$159, c$$112, JAM.policy.p2);
    } else {
      v1343 = a$$202[b$$159];
    }
    return v1343;
  }
  function oc(a$$201, b$$158, c$$111) {
    return JAM.set(a$$201.S, nc(b$$158), c$$111, JAM.policy.p2);
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
    var v1347;
    var v3940 = a$$197;
    if (v3940) {
      v3940 = kc[a$$197];
    }
    if (v3940) {
      v1347 = a$$197;
    } else {
      var v2962;
      if (B$$2) {
        v2962 = "google_persistent_state_async";
      } else {
        v2962 = "google_persistent_state";
      }
      v1347 = v2962;
    }
    a$$197 = v1347;
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
    var v1350;
    var v3941 = "object" != typeof d$$70;
    if (!v3941) {
      v3941 = "object" != typeof d$$70.S;
    }
    if (v3941) {
      var v5123 = new jc(c$$109);
      v1350 = JAM.set(b$$156, a$$197, JAM.set(lc, a$$197, v5123, JAM.policy.p2), JAM.policy.p2);
    } else {
      v1350 = JAM.set(lc, a$$197, d$$70, JAM.policy.p2);
    }
    return v1350;
  }
  function jc(a$$196) {
    this.S = a$$196;
    F$$1(this, 3, null);
    F$$1(this, 4, 0);
    F$$1(this, 5, 0);
    F$$1(this, 6, 0);
    var v2965 = new Date;
    F$$1(this, 7, JAM.call(v2965.getTime, v2965, [], JAM.policy.p3));
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
      var a$$inline_99 = window;
      a$$inline_99 = dc(a$$inline_99, !0);
      gc = a$$inline_99.win;
    }
    return gc;
  }
  function dc(a$$193, b$$155) {
    var c$$108 = 0;
    var d$$69 = a$$193;
    var e$$46 = 0;
    var v1354 = a$$193 != a$$193.parent;
    for (;v1354;) {
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
      v1354 = a$$193 != a$$193.parent;
    }
    return{win:d$$69, level:c$$108};
  }
  function E$$1(a$$185) {
    this.defaultBucket = [];
    this.layers = {};
    var b$$148 = 0;
    var c$$105 = arguments.length;
    var v1357 = b$$148 < c$$105;
    for (;v1357;) {
      JAM.set(this.layers, arguments[b$$148], "", JAM.policy.p2);
      ++b$$148;
      v1357 = b$$148 < c$$105;
    }
    return;
  }
  function bc(a$$184, b$$147, c$$104) {
    var v1358;
    if (2 >= arguments.length) {
      var v2968 = Xb.slice;
      v1358 = JAM.call(v2968.call, v2968, [a$$184, b$$147], JAM.policy.p3);
    } else {
      var v2969 = Xb.slice;
      v1358 = JAM.call(v2969.call, v2969, [a$$184, b$$147, c$$104], JAM.policy.p3);
    }
    return v1358;
  }
  function ac(a$$183) {
    var b$$146 = a$$183.length;
    if (0 < b$$146) {
      var c$$103 = Array(b$$146);
      var d$$67 = 0;
      var v1359 = d$$67 < b$$146;
      for (;v1359;) {
        c$$103[d$$67] = a$$183[d$$67];
        d$$67++;
        v1359 = d$$67 < b$$146;
      }
      return c$$103;
    }
    return[];
  }
  function $b(a$$182, b$$145) {
    return 0 <= JAM.call(Yb, null, [a$$182, b$$145], JAM.policy.p3);
  }
  function Wb(a$$177) {
    function v48() {
      var v1362 = a$$177.document;
      JAM.call(v1362.close, v1362, [], JAM.policy.p3);
      return;
    }
    var v3943 = B$$2;
    if (v3943) {
      v3943 = a$$177 != a$$177.parent;
    }
    var v2971 = v3943;
    if (v2971) {
      v2971 = a$$177.google_async_iframe_close;
    }
    var v1363 = v2971;
    if (v1363) {
      JAM.call(a$$177.setTimeout, a$$177, [v48, 0], JAM.policy.p3);
    }
    return;
  }
  function D$$1() {
    var v2972 = B$$2;
    if (v2972) {
      v2972 = !Kb(Ob);
    }
    if (v2972) {
      var a$$170 = "." + v$$1.domain;
      var v2973 = 2 < JAM.call(a$$170.split, a$$170, ["."], JAM.policy.p3).length;
      if (v2973) {
        v2973 = !Kb(Ob);
      }
      var v1365 = v2973;
      for (;v1365;) {
        v$$1.domain = a$$170 = JAM.call(a$$170.substr, a$$170, [JAM.call(a$$170.indexOf, a$$170, ["."], JAM.policy.p3) + 1], JAM.policy.p3);
        Ob = window.parent;
        var v2975 = 2 < JAM.call(a$$170.split, a$$170, ["."], JAM.policy.p3).length;
        if (v2975) {
          v2975 = !Kb(Ob);
        }
        v1365 = v2975;
      }
      var v1366 = Kb(Ob);
      if (!v1366) {
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
      var v1368 = !!a$$166.location.href;
      if (!v1368) {
        v1368 = "" === a$$166.location.href;
      }
      return v1368;
    } catch (b$$132) {
      return!1;
    }
    return;
  }
  function Hb(a$$163) {
    var v2980 = new Date;
    a$$163 = JAM.call(v2980.getTime, v2980, [], JAM.policy.p3) - a$$163;
    var v1370;
    if (1E4 > a$$163) {
      v1370 = a$$163 + "";
    } else {
      v1370 = "M";
    }
    return v1370;
  }
  function Fb(a$$162, b$$130, c$$90) {
    b$$130 = [b$$130.google_ad_slot, b$$130.google_ad_format, b$$130.google_ad_type, b$$130.google_ad_width, b$$130.google_ad_height];
    if (c$$90) {
      var JSCompiler_inline_result$$22;
      var a$$inline_95 = a$$162;
      var b$$inline_96 = [];
      var c$$inline_97 = 0;
      var v2982 = a$$inline_95;
      if (v2982) {
        v2982 = 25 > c$$inline_97;
      }
      var v1377 = v2982;
      for (;v1377;) {
        var v3952 = 9 != a$$inline_95.nodeType;
        if (v3952) {
          v3952 = a$$inline_95.id;
        }
        var v2983 = v3952;
        if (!v2983) {
          v2983 = "";
        }
        JAM.call(b$$inline_96.push, b$$inline_96, [v2983], JAM.policy.p3);
        a$$inline_95 = a$$inline_95.parentNode;
        ++c$$inline_97;
        var v2984 = a$$inline_95;
        if (v2984) {
          v2984 = 25 > c$$inline_97;
        }
        v1377 = v2984;
      }
      JSCompiler_inline_result$$22 = JAM.call(b$$inline_96.join, b$$inline_96, [], JAM.policy.p3);
      var v1378 = a$$162 = JSCompiler_inline_result$$22;
      if (v1378) {
        JAM.call(b$$130.push, b$$130, [a$$162], JAM.policy.p3);
      }
    } else {
      JAM.call(b$$130.push, b$$130, [Db(a$$162)], JAM.policy.p3);
      JAM.call(b$$130.push, b$$130, [Eb(w$$6)], JAM.policy.p3);
    }
    var v1379 = Ab(JAM.call(b$$130.join, b$$130, [":"], JAM.policy.p3));
    return JAM.call(v1379.toString, v1379, [], JAM.policy.p3);
  }
  function Eb(a$$160) {
    var b$$128 = [];
    if (a$$160) {
      try {
        var c$$88 = a$$160.parent;
        var d$$59 = 0;
        var v3954 = c$$88;
        if (v3954) {
          v3954 = c$$88 != a$$160;
        }
        var v2988 = v3954;
        if (v2988) {
          v2988 = 25 > d$$59;
        }
        var v1382 = v2988;
        for (;v1382;) {
          var e$$42 = c$$88.frames;
          var f$$23 = 0;
          var v1381 = f$$23 < e$$42.length;
          for (;v1381;) {
            if (a$$160 == e$$42[f$$23]) {
              JAM.call(b$$128.push, b$$128, [f$$23], JAM.policy.p3);
              break;
            }
            ++f$$23;
            v1381 = f$$23 < e$$42.length;
          }
          a$$160 = c$$88;
          c$$88 = a$$160.parent;
          ++d$$59;
          var v3955 = c$$88;
          if (v3955) {
            v3955 = c$$88 != a$$160;
          }
          var v2992 = v3955;
          if (v2992) {
            v2992 = 25 > d$$59;
          }
          v1382 = v2992;
        }
      } catch (g$$18) {
      }
    }
    return JAM.call(b$$128.join, b$$128, [], JAM.policy.p3);
  }
  function Db(a$$159) {
    var b$$127 = [];
    var c$$87 = 0;
    var v2993 = a$$159;
    if (v2993) {
      v2993 = 25 > c$$87;
    }
    var v1387 = v2993;
    for (;v1387;) {
      var v1383 = 9 != a$$159.nodeType;
      if (v1383) {
        v1383 = a$$159.id;
      }
      var d$$58 = v1383;
      var v1384;
      if (d$$58) {
        v1384 = "/" + d$$58;
      } else {
        v1384 = "";
      }
      d$$58 = v1384;
      var v1385 = a$$159.nodeName;
      if (v1385) {
        var v2995 = a$$159.nodeName;
        v1385 = JAM.call(v2995.toLowerCase, v2995, [], JAM.policy.p3);
      }
      var e$$41 = v1385;
      JAM.call(b$$127.push, b$$127, [e$$41 + d$$58 + Cb(a$$159)], JAM.policy.p3);
      a$$159 = a$$159.parentElement;
      ++c$$87;
      var v2998 = a$$159;
      if (v2998) {
        v2998 = 25 > c$$87;
      }
      v1387 = v2998;
    }
    return JAM.call(b$$127.join, b$$127, [], JAM.policy.p3);
  }
  function Cb(a$$158) {
    var b$$126 = a$$158.parentElement;
    var v1388 = a$$158.nodeName;
    var c$$86 = JAM.call(v1388.toLowerCase, v1388, [], JAM.policy.p3);
    if (b$$126) {
      b$$126 = b$$126.childNodes;
      var d$$57 = 0;
      var e$$40 = 0;
      var v1391 = e$$40 < b$$126.length;
      for (;v1391;) {
        var f$$22 = b$$126[e$$40];
        var v3000 = f$$22.nodeName;
        if (v3000) {
          var v4531 = f$$22.nodeName;
          v3000 = JAM.call(v4531.toLowerCase, v4531, [], JAM.policy.p3) == c$$86;
        }
        if (v3000) {
          if (a$$158 == f$$22) {
            return "." + d$$57;
          }
          ++d$$57;
        }
        ++e$$40;
        v1391 = e$$40 < b$$126.length;
      }
    }
    return "";
  }
  function Ab(a$$156, b$$124) {
    var c$$84 = a$$156.length;
    if (0 == c$$84) {
      return 0;
    }
    var d$$56 = b$$124 || 305419896;
    var e$$39 = 0;
    var v1394 = e$$39 < c$$84;
    for (;v1394;) {
      var f$$21 = JAM.call(a$$156.charCodeAt, a$$156, [e$$39], JAM.policy.p3);
      d$$56 = d$$56 ^ (d$$56 << 5) + (d$$56 >> 2) + f$$21 & 4294967295;
      e$$39++;
      v1394 = e$$39 < c$$84;
    }
    var v1395;
    if (0 < d$$56) {
      v1395 = d$$56;
    } else {
      v1395 = 4294967296 + d$$56;
    }
    return v1395;
  }
  function yb(a$$154) {
    var b$$123 = "google_unique_id";
    a$$154 = a$$154[b$$123];
    var v1396;
    if ("number" == typeof a$$154) {
      v1396 = a$$154;
    } else {
      v1396 = 0;
    }
    return v1396;
  }
  function wb(a$$153) {
    var b$$122 = "google_unique_id";
    var v1397;
    if (a$$153[b$$122]) {
      v1397 = JAM.set(a$$153, b$$122, a$$153[b$$122] + 1, JAM.policy.p2);
    } else {
      introspect(JAM.policy.p2) {
        v1397 = a$$153[b$$122] = 1;
      }
    }
    v1397;
    return a$$153[b$$122];
  }
  function vb(a$$152, b$$121) {
    if (!(1E-4 > JAM.call(Math.random, Math, [], JAM.policy.p3))) {
      var c$$83 = JAM.call(Math.random, Math, [], JAM.policy.p3);
      if (c$$83 < b$$121) {
        try {
          var d$$55 = new Uint16Array(1);
          var v1398 = window.crypto;
          JAM.call(v1398.getRandomValues, v1398, [d$$55], JAM.policy.p3);
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
  function ob$$1(a$$151) {
    a$$151 = a$$151 || window;
    try {
      return a$$151.history.length;
    } catch (b$$120) {
      return 0;
    }
    return;
  }
  function nb$$1(a$$150, b$$119) {
    var v1404 = a$$150.google_image_requests;
    if (!v1404) {
      a$$150.google_image_requests = [];
    }
    var v1405 = a$$150.document;
    var c$$82 = JAM.call(v1405.createElement, v1405, ["img"], JAM.policy.p3);
    c$$82.src = b$$119;
    var v1406 = a$$150.google_image_requests;
    JAM.call(v1406.push, v1406, [c$$82], JAM.policy.p3);
    return;
  }
  function mb$$1(a$$149) {
    function v50() {
      a$$149.google_onload_fired = !0;
      return;
    }
    var v1407 = "google_onload_fired" in a$$149;
    if (!v1407) {
      a$$149.google_onload_fired = !1;
      kb$$1(a$$149, v50);
    }
    return;
  }
  function A$$1(a$$148, b$$118, c$$81, d$$54) {
    var v1408;
    if (a$$148.removeEventListener) {
      var v4534 = d$$54;
      if (!v4534) {
        v4534 = !1;
      }
      JAM.call(a$$148.removeEventListener, a$$148, [b$$118, c$$81, v4534], JAM.policy.p3);
      v1408 = !0;
    } else {
      var v3010;
      if (a$$148.detachEvent) {
        JAM.call(a$$148.detachEvent, a$$148, ["on" + b$$118, c$$81], JAM.policy.p3);
        v3010 = !0;
      } else {
        v3010 = !1;
      }
      v1408 = v3010;
    }
    return v1408;
  }
  function lb$$1(a$$147, b$$117, c$$80, d$$53, e$$37) {
    c$$80 = JAM.call(r$$2, null, [d$$53, c$$80], JAM.policy.p3);
    var v1409;
    if (y$$31(a$$147, b$$117, c$$80, e$$37)) {
      v1409 = c$$80;
    } else {
      v1409 = null;
    }
    return v1409;
  }
  function y$$31(a$$146, b$$116, c$$79, d$$52) {
    var v1410;
    if (a$$146.addEventListener) {
      var v4536 = d$$52;
      if (!v4536) {
        v4536 = !1;
      }
      JAM.call(a$$146.addEventListener, a$$146, [b$$116, c$$79, v4536], JAM.policy.p3);
      v1410 = !0;
    } else {
      var v3013;
      if (a$$146.attachEvent) {
        JAM.call(a$$146.attachEvent, a$$146, ["on" + b$$116, c$$79], JAM.policy.p3);
        v3013 = !0;
      } else {
        v3013 = !1;
      }
      v1410 = v3013;
    }
    return v1410;
  }
  function ib$$1(a$$145, b$$115) {
    if (2 > arguments.length) {
      return a$$145.length;
    }
    var c$$78 = 1;
    var d$$51 = arguments.length;
    var v1413 = c$$78 < d$$51;
    for (;v1413;) {
      JAM.call(a$$145.push, a$$145, [arguments[c$$78]], JAM.policy.p3);
      ++c$$78;
      v1413 = c$$78 < d$$51;
    }
    return a$$145.length;
  }
  function hb$$1(a$$144, b$$113) {
    function v51(b$$114, e$$36) {
      var v3965 = c$$77;
      if (v3965) {
        v3965 = e$$36 in a$$144;
      }
      var v3016 = v3965;
      if (v3016) {
        v3016 = typeof b$$114 == typeof a$$144[e$$36];
      }
      var v1414 = v3016;
      if (!v1414) {
        c$$77 = !1;
      }
      return;
    }
    if (!a$$144) {
      return!1;
    }
    var c$$77 = !0;
    x$$50(b$$113, v51);
    return c$$77;
  }
  function gb$$1(a$$143) {
    var v1416 = !!a$$143;
    if (v1416) {
      var v3019 = "object" == typeof a$$143;
      if (!v3019) {
        v3019 = "function" == typeof a$$143;
      }
      v1416 = v3019;
    }
    return v1416;
  }
  function fb$$1(a$$142) {
    var v3020 = !!a$$142;
    if (v3020) {
      v3020 = "function" == typeof a$$142;
    }
    var v1417 = v3020;
    if (v1417) {
      v1417 = !!a$$142.call;
    }
    return v1417;
  }
  function x$$50(a$$141, b$$112) {
    var c$$76;
    for (c$$76 in a$$141) {
      var v3022 = Object.prototype.hasOwnProperty;
      var v1418 = JAM.call(v3022.call, v3022, [a$$141, c$$76], JAM.policy.p3);
      if (v1418) {
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
  function eb$$1(a$$137, b$$108) {
    function v52(a$$138, b$$109, c$$74) {
      return b$$109 + JAM.call(c$$74.toUpperCase, c$$74, [], JAM.policy.p3);
    }
    var v1420;
    if (p$$1(b$$108)) {
      var v3975 = String(b$$108);
      var v3024 = JAM.call(v3975.replace, v3975, [/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1"], JAM.policy.p3);
      v1420 = JAM.call(v3024.replace, v3024, [/\x08/g, "\\x08"], JAM.policy.p3);
    } else {
      v1420 = "\\s";
    }
    var c$$73 = v1420;
    var v1421;
    if (c$$73) {
      v1421 = "|[" + c$$73 + "]+";
    } else {
      v1421 = "";
    }
    c$$73 = v1421;
    c$$73 = RegExp("(^" + c$$73 + ")([a-z])", "g");
    return JAM.call(a$$137.replace, a$$137, [c$$73, v52], JAM.policy.p3);
  }
  function db$$1(a$$135) {
    function v53(a$$136, c$$72) {
      return JAM.call(c$$72.toUpperCase, c$$72, [], JAM.policy.p3);
    }
    var v1423 = String(a$$135);
    return JAM.call(v1423.replace, v1423, [/\-([a-z])/g, v53], JAM.policy.p3);
  }
  function bb$$1(a$$134, b$$107) {
    var v1424;
    if (a$$134 < b$$107) {
      v1424 = -1;
    } else {
      var v3028;
      if (a$$134 > b$$107) {
        v3028 = 1;
      } else {
        v3028 = 0;
      }
      v1424 = v3028;
    }
    return v1424;
  }
  function ab$$1(a$$131) {
    a$$131 = String(a$$131);
    if (a$$131.quote) {
      return JAM.call(a$$131.quote, a$$131, [], JAM.policy.p3);
    }
    var b$$104 = ['"'];
    var c$$69 = 0;
    var v1433 = c$$69 < a$$131.length;
    for (;v1433;) {
      var d$$49 = JAM.call(a$$131.charAt, a$$131, [c$$69], JAM.policy.p3);
      var e$$34 = JAM.call(d$$49.charCodeAt, d$$49, [0], JAM.policy.p3);
      var JSCompiler_temp_const$$24 = c$$69 + 1;
      var JSCompiler_temp$$25;
      if (JSCompiler_temp$$25 = Ya$$1[d$$49]) {
      } else {
        var JSCompiler_temp$$26;
        var v3031 = 31 < e$$34;
        if (v3031) {
          v3031 = 127 > e$$34;
        }
        if (v3031) {
          JSCompiler_temp$$26 = d$$49;
        } else {
          JSCompiler_inline_label_$a$$1_94: {
            var a$$inline_91 = d$$49;
            if (a$$inline_91 in Za$$1) {
              JSCompiler_temp$$26 = Za$$1[a$$inline_91];
              break JSCompiler_inline_label_$a$$1_94;
            }
            if (a$$inline_91 in Ya$$1) {
              JSCompiler_temp$$26 = JAM.set(Za$$1, a$$inline_91, Ya$$1[a$$inline_91], JAM.policy.p2);
              break JSCompiler_inline_label_$a$$1_94;
            }
            var b$$inline_92 = a$$inline_91;
            var c$$inline_93 = JAM.call(a$$inline_91.charCodeAt, a$$inline_91, [0], JAM.policy.p3);
            var v3032 = 31 < c$$inline_93;
            if (v3032) {
              v3032 = 127 > c$$inline_93;
            }
            if (v3032) {
              b$$inline_92 = a$$inline_91;
            } else {
              if (256 > c$$inline_93) {
                b$$inline_92 = "\\x";
                var v3977 = 16 > c$$inline_93;
                if (!v3977) {
                  v3977 = 256 < c$$inline_93;
                }
                if (v3977) {
                  b$$inline_92 = b$$inline_92 + "0";
                }
              } else {
                b$$inline_92 = "\\u";
                var v3033 = 4096 > c$$inline_93;
                if (v3033) {
                  b$$inline_92 = b$$inline_92 + "0";
                }
              }
              var v3978 = JAM.call(c$$inline_93.toString, c$$inline_93, [16], JAM.policy.p3);
              b$$inline_92 = b$$inline_92 + JAM.call(v3978.toUpperCase, v3978, [], JAM.policy.p3);
            }
            JSCompiler_temp$$26 = JAM.set(Za$$1, a$$inline_91, b$$inline_92, JAM.policy.p2);
          }
        }
        JSCompiler_temp$$25 = JSCompiler_temp$$26;
      }
      b$$104[JSCompiler_temp_const$$24] = JSCompiler_temp$$25;
      c$$69++;
      v1433 = c$$69 < a$$131.length;
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
          return'"';
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
  function Ta$$1(a$$126, b$$101) {
    function v55(a$$127, b$$102) {
      var g$$16 = c$$66[a$$127];
      if (g$$16) {
        return g$$16;
      }
      if ("#" == JAM.call(b$$102.charAt, b$$102, [0], JAM.policy.p3)) {
        var h$$12 = Number("0" + JAM.call(b$$102.substr, b$$102, [1], JAM.policy.p3));
        var v1438 = isNaN(h$$12);
        if (!v1438) {
          g$$16 = JAM.call(String.fromCharCode, String, [h$$12], JAM.policy.p3);
        }
      }
      if (!g$$16) {
        JAM.set(d$$46, "innerHTML", a$$127 + " ");
        var v3979 = d$$46.firstChild.nodeValue;
        g$$16 = JAM.call(v3979.slice, v3979, [0, -1], JAM.policy.p3);
      }
      return JAM.set(c$$66, a$$127, g$$16, JAM.policy.p2);
    }
    var c$$66 = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'};
    var d$$46;
    var v1440;
    if (b$$101) {
      v1440 = JAM.call(b$$101.createElement, b$$101, ["div"], JAM.policy.p3);
    } else {
      v1440 = JAM.call(document.createElement, document, ["div"], JAM.policy.p3);
    }
    d$$46 = v1440;
    return JAM.call(a$$126.replace, a$$126, [Wa$$1, v55], JAM.policy.p3);
  }
  function Va$$1(a$$125) {
    var v1441;
    if (-1 != JAM.call(a$$125.indexOf, a$$125, ["&"], JAM.policy.p3)) {
      var v3043;
      if ("document" in m$$3) {
        v3043 = Ta$$1(a$$125);
      } else {
        v3043 = Ua$$1(a$$125);
      }
      v1441 = v3043;
    } else {
      v1441 = a$$125;
    }
    return v1441;
  }
  function Sa$$1(a$$124, b$$100) {
    if (b$$100) {
      var v3982 = JAM.call(a$$124.replace, a$$124, [Na$$1, "&amp;"], JAM.policy.p3);
      var v3045 = JAM.call(v3982.replace, v3982, [Oa$$1, "&lt;"], JAM.policy.p3);
      var v1442 = JAM.call(v3045.replace, v3045, [Pa$$1, "&gt;"], JAM.policy.p3);
      return JAM.call(v1442.replace, v1442, [Qa$$1, "&quot;"], JAM.policy.p3);
    }
    if (!JAM.call(Ra$$1.test, Ra$$1, [a$$124], JAM.policy.p3)) {
      return a$$124;
    }
    var v1444 = -1 != JAM.call(a$$124.indexOf, a$$124, ["&"], JAM.policy.p3);
    if (v1444) {
      a$$124 = JAM.call(a$$124.replace, a$$124, [Na$$1, "&amp;"], JAM.policy.p3);
    }
    var v1445 = -1 != JAM.call(a$$124.indexOf, a$$124, ["<"], JAM.policy.p3);
    if (v1445) {
      a$$124 = JAM.call(a$$124.replace, a$$124, [Oa$$1, "&lt;"], JAM.policy.p3);
    }
    var v1446 = -1 != JAM.call(a$$124.indexOf, a$$124, [">"], JAM.policy.p3);
    if (v1446) {
      a$$124 = JAM.call(a$$124.replace, a$$124, [Pa$$1, "&gt;"], JAM.policy.p3);
    }
    var v1447 = -1 != JAM.call(a$$124.indexOf, a$$124, ['"'], JAM.policy.p3);
    if (v1447) {
      a$$124 = JAM.call(a$$124.replace, a$$124, [Qa$$1, "&quot;"], JAM.policy.p3);
    }
    return a$$124;
  }
  function La$$1(a$$123) {
    var v1448;
    if (a$$123) {
      v1448 = "googlesyndication";
    } else {
      v1448 = ma$$1("", "googlesyndication");
    }
    return v1448;
  }
  function Ja$$1() {
    return ma$$1("", "doubleclick");
  }
  function Da$$1() {
    var a$$122 = "r20131120";
    return a$$122;
  }
  function ma$$1(a$$121, b$$99) {
    if (!a$$121) {
      return b$$99;
    }
    var c$$65 = JAM.call(a$$121.match, a$$121, [la$$1], JAM.policy.p3);
    var v1450;
    if (c$$65) {
      v1450 = c$$65[0];
    } else {
      v1450 = b$$99;
    }
    return v1450;
  }
  function ka$$1(a$$120, b$$98) {
    var v1451;
    if (JAM.call(/^true$/.test, /^true$/, [a$$120], JAM.policy.p3)) {
      v1451 = !0;
    } else {
      var v3051;
      if (JAM.call(/^false$/.test, /^false$/, [a$$120], JAM.policy.p3)) {
        v3051 = !1;
      } else {
        v3051 = b$$98;
      }
      v1451 = v3051;
    }
    return v1451;
  }
  function t$$1(a$$119, b$$97) {
    var c$$64 = parseFloat(a$$119);
    var v1452;
    var v4541 = isNaN(c$$64);
    if (!v4541) {
      v4541 = 1 < c$$64;
    }
    var v3984 = v4541;
    if (!v3984) {
      v3984 = 0 > c$$64;
    }
    if (v3984) {
      v1452 = b$$97;
    } else {
      v1452 = c$$64;
    }
    return v1452;
  }
  function ja$$1(a$$118, b$$96) {
    function c$$63() {
      return;
    }
    c$$63.prototype = b$$96.prototype;
    a$$118.md = b$$96.prototype;
    var v1453 = a$$118;
    var v5124 = new c$$63;
    v1453.prototype = v5124;
    a$$118.prototype.constructor = a$$118;
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
    var v3985 = Function.prototype.bind;
    if (v3985) {
      var v4954 = Function.prototype.bind;
      var v4812 = JAM.call(v4954.toString, v4954, [], JAM.policy.p3);
      v3985 = -1 != JAM.call(v4812.indexOf, v4812, ["native code"], JAM.policy.p3);
    }
    if (v3985) {
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
    var v3060 = "object" == b$$88;
    if (v3060) {
      v3060 = null != a$$111;
    }
    var v1465 = v3060;
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
      var v3062 = "object" == b$$87;
      if (v3062) {
        v3062 = "number" == typeof a$$108.length;
      }
      v1468 = v3062;
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
        var v3065 = "[object Array]" == c$$55;
        if (!v3065) {
          var v4813 = "number" == typeof a$$106.length;
          if (v4813) {
            v4813 = "undefined" != typeof a$$106.splice;
          }
          var v4546 = v4813;
          if (v4546) {
            v4546 = "undefined" != typeof a$$106.propertyIsEnumerable;
          }
          var v3987 = v4546;
          if (v3987) {
            v3987 = !JAM.call(a$$106.propertyIsEnumerable, a$$106, ["splice"], JAM.policy.p3);
          }
          v3065 = v3987;
        }
        if (v3065) {
          return "array";
        }
        var v3066 = "[object Function]" == c$$55;
        if (!v3066) {
          var v4548 = "undefined" != typeof a$$106.call;
          if (v4548) {
            v4548 = "undefined" != typeof a$$106.propertyIsEnumerable;
          }
          var v3989 = v4548;
          if (v3989) {
            v3989 = !JAM.call(a$$106.propertyIsEnumerable, a$$106, ["call"], JAM.policy.p3);
          }
          v3066 = v3989;
        }
        if (v3066) {
          return "function";
        }
      } else {
        return "null";
      }
    } else {
      var v3067 = "function" == b$$86;
      if (v3067) {
        v3067 = "undefined" == typeof a$$106.call;
      }
      if (v3067) {
        return "object";
      }
    }
    return b$$86;
  }
  function aa$$1(a$$105, b$$85, c$$54) {
    a$$105 = JAM.call(a$$105.split, a$$105, ["."], JAM.policy.p3);
    c$$54 = c$$54 || m$$3;
    var v3068 = a$$105[0] in c$$54;
    if (!v3068) {
      v3068 = !c$$54.execScript;
    }
    var v1478 = v3068;
    if (!v1478) {
      JAM.call(c$$54.execScript, c$$54, ["var " + a$$105[0]], JAM.policy.p3);
    }
    var d$$44;
    var v3071 = a$$105.length;
    if (v3071) {
      v3071 = d$$44 = JAM.call(a$$105.shift, a$$105, [], JAM.policy.p3);
    }
    var v1480 = v3071;
    for (;v1480;) {
      var v1479;
      var v3996 = a$$105.length;
      if (!v3996) {
        v3996 = void 0 === b$$85;
      }
      if (v3996) {
        var v3072;
        if (c$$54[d$$44]) {
          v3072 = c$$54[d$$44];
        } else {
          v3072 = JAM.set(c$$54, d$$44, {}, JAM.policy.p2);
        }
        v1479 = c$$54 = v3072;
      } else {
        v1479 = JAM.set(c$$54, d$$44, b$$85, JAM.policy.p2);
      }
      v1479;
      var v3074 = a$$105.length;
      if (v3074) {
        v3074 = d$$44 = JAM.call(a$$105.shift, a$$105, [], JAM.policy.p3);
      }
      v1480 = v3074;
    }
    return;
  }
  function jb$$1(a$$70, b$$56, c$$33, d$$25) {
    function v60() {
      JAM.call(f$$10.appendChild, f$$10, [e$$20], JAM.policy.p3);
      return;
    }
    function v59() {
      var v3075 = "complete" == e$$20.readyState;
      if (!v3075) {
        v3075 = "loaded" == e$$20.readyState;
      }
      if (v3075) {
        try {
          JAM.call(b$$56, null, [], JAM.policy.p3);
        } catch (a$$71) {
        }
      }
      return;
    }
    d$$25 = d$$25 || document;
    var e$$20 = JAM.call(d$$25.createElement, d$$25, ["script"], JAM.policy.p3);
    e$$20.type = "text/javascript";
    if (b$$56) {
      var v3076;
      if (void 0 !== e$$20.onreadystatechange) {
        v3076 = JAM.set(e$$20, "onreadystatechange", v59);
      } else {
        v3076 = JAM.set(e$$20, "onload", b$$56);
      }
      v3076;
    }
    if (c$$33) {
      e$$20.id = c$$33;
    }
    e$$20.src = a$$70;
    var f$$10 = JAM.call(d$$25.getElementsByTagName, d$$25, ["head"], JAM.policy.p3)[0];
    if (!f$$10) {
      return!1;
    }
    try {
      JAM.call(window.setTimeout, window, [v60, 0], JAM.policy.p3);
    } catch (g$$8) {
      return!1;
    }
    return!0;
  }
  function kb$$1(a$$72, b$$57) {
    return y$$31(a$$72, "load", b$$57);
  }
  function rb$$1() {
    var JSCompiler_inline_result$$74;
    var a$$inline_78 = "msie";
    var v1484;
    if (a$$inline_78 in qb$$1) {
      v1484 = qb$$1[a$$inline_78];
    } else {
      var v3077 = qb$$1;
      var v4817 = navigator.userAgent;
      var v4555 = JAM.call(v4817.toLowerCase, v4817, [], JAM.policy.p3);
      var v4002 = JAM.call(v4555.indexOf, v4555, [a$$inline_78], JAM.policy.p3);
      introspect(JAM.policy.p2) {
        v1484 = v3077[a$$inline_78] = -1 != v4002;
      }
    }
    JSCompiler_inline_result$$74 = v1484;
    var v1485 = JSCompiler_inline_result$$74;
    if (v1485) {
      v1485 = !window.opera;
    }
    return v1485;
  }
  function tb() {
    var v3080 = navigator.plugins;
    if (v3080) {
      v3080 = navigator.mimeTypes.length;
    }
    if (v3080) {
      var a$$75 = navigator.plugins["Shockwave Flash"];
      var v3081 = a$$75;
      if (v3081) {
        v3081 = a$$75.description;
      }
      if (v3081) {
        var v3082 = a$$75.description;
        var v1487 = JAM.call(v3082.replace, v3082, [/([a-zA-Z]|\s)+/, ""], JAM.policy.p3);
        return JAM.call(v1487.replace, v1487, [/(\s)+r/, "."], JAM.policy.p3);
      }
    } else {
      var v3083 = navigator.userAgent;
      if (v3083) {
        var v4556 = navigator.userAgent;
        v3083 = 0 <= JAM.call(v4556.indexOf, v4556, ["Windows CE"], JAM.policy.p3);
      }
      if (v3083) {
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
      if (rb$$1()) {
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
          var v4006 = JAM.call(b$$58.GetVariable, b$$58, ["$version"], JAM.policy.p3);
          a$$75 = JAM.call(v4006.split, v4006, [" "], JAM.policy.p3)[1];
          return JAM.call(a$$75.replace, a$$75, [/,/g, "."], JAM.policy.p3);
        }
      }
    }
    return "0";
  }
  function ub(a$$76) {
    var b$$59 = a$$76.google_ad_format;
    var v1493;
    if (b$$59) {
      v1493 = 0 < JAM.call(b$$59.indexOf, b$$59, ["_0ads"], JAM.policy.p3);
    } else {
      var v3087 = "html" != a$$76.google_ad_output;
      if (v3087) {
        v3087 = 0 < a$$76.google_num_radlinks;
      }
      v1493 = v3087;
    }
    return v1493;
  }
  function Ze(a$$77, b$$60, c$$35, d$$27) {
    var v1494 = c$$35;
    if (!v1494) {
      v1494 = a$$77.google_ad_width;
    }
    c$$35 = v1494;
    var v1495 = d$$27;
    if (!v1495) {
      v1495 = a$$77.google_ad_height;
    }
    d$$27 = v1495;
    if (a$$77.top == a$$77) {
      return!1;
    }
    var e$$22 = b$$60.documentElement;
    if (c$$35 && d$$27) {
      var f$$12 = 1;
      var g$$9 = 1;
      var v1497;
      if (a$$77.innerHeight) {
        f$$12 = a$$77.innerWidth;
        v1497 = g$$9 = a$$77.innerHeight;
      } else {
        var v3091;
        var v4557 = e$$22;
        if (v4557) {
          v4557 = e$$22.clientHeight;
        }
        if (v4557) {
          f$$12 = e$$22.clientWidth;
          v3091 = g$$9 = e$$22.clientHeight;
        } else {
          var v4009 = b$$60.body;
          if (v4009) {
            f$$12 = b$$60.body.clientWidth;
            v4009 = g$$9 = b$$60.body.clientHeight;
          }
          v3091 = v4009;
        }
        v1497 = v3091;
      }
      v1497;
      var v3093 = g$$9 > 2 * d$$27;
      if (!v3093) {
        v3093 = f$$12 > 2 * c$$35;
      }
      if (v3093) {
        return!1;
      }
    }
    return!0;
  }
  function $e(a$$78, b$$61) {
    function v61(b$$62, d$$28) {
      JAM.set(a$$78, "google_" + d$$28, b$$62, JAM.policy.p2);
      return;
    }
    x$$50(b$$61, v61);
    return;
  }
  function bf(a$$79, b$$63) {
    var c$$36 = af();
    var v1501;
    if (c$$36) {
      v1501 = c$$36;
    } else {
      var v3094;
      if (b$$63) {
        v3094 = a$$79.referrer;
      } else {
        v3094 = a$$79.URL;
      }
      v1501 = v3094;
    }
    return v1501;
  }
  function Jh(a$$90) {
    var b$$74 = 1;
    var c$$45 = 0;
    var d$$36;
    var v3095 = void 0 != a$$90;
    if (v3095) {
      v3095 = "" != a$$90;
    }
    if (v3095) {
      b$$74 = 0;
      d$$36 = a$$90.length - 1;
      var v1502 = 0 <= d$$36;
      for (;v1502;) {
        c$$45 = JAM.call(a$$90.charCodeAt, a$$90, [d$$36], JAM.policy.p3);
        b$$74 = (b$$74 << 6 & 268435455) + c$$45 + (c$$45 << 14);
        c$$45 = b$$74 & 266338304;
        var v3097;
        if (0 != c$$45) {
          v3097 = b$$74 ^ c$$45 >> 21;
        } else {
          v3097 = b$$74;
        }
        b$$74 = v3097;
        d$$36--;
        v1502 = 0 <= d$$36;
      }
    }
    return b$$74;
  }
  function Fh(a$$91, b$$75) {
    var v3098 = !a$$91;
    if (!v3098) {
      v3098 = "none" == a$$91;
    }
    if (v3098) {
      return 1;
    }
    a$$91 = String(a$$91);
    var v1505 = "auto" == a$$91;
    if (v1505) {
      a$$91 = b$$75;
      var v4018 = "www." == JAM.call(a$$91.substring, a$$91, [0, 4], JAM.policy.p3);
      if (v4018) {
        a$$91 = JAM.call(a$$91.substring, a$$91, [4, a$$91.length], JAM.policy.p3);
      }
    }
    return Jh(JAM.call(a$$91.toLowerCase, a$$91, [], JAM.policy.p3));
  }
  function ji(a$$94) {
    var v1507;
    if (null != a$$94) {
      v1507 = '"' + a$$94 + '"';
    } else {
      v1507 = '""';
    }
    return v1507;
  }
  function ii() {
    function v65() {
      f$$19 = !0;
      var a$$100 = 0;
      var v1509 = a$$100 < c$$51.google_top_js_callbacks.length;
      for (;v1509;) {
        var v1508 = c$$51.google_top_js_callbacks[a$$100] === h$$11;
        if (v1508) {
          var v4021 = c$$51.google_top_js_callbacks;
          JAM.call(v4021.splice, v4021, [a$$100, 1], JAM.policy.p3);
          JAM.call(h$$11, null, [], JAM.policy.p3);
        }
        a$$100++;
        v1509 = a$$100 < c$$51.google_top_js_callbacks.length;
      }
      return;
    }
    function v64() {
      var v3104 = null != e$$31.j.deviceAccelerationWithGravity;
      if (!v3104) {
        v3104 = null != e$$31.j.deviceAccelerationWithoutGravity;
      }
      var v1510 = v3104;
      if (!v1510) {
        v1510 = e$$31.j.didDeviceMotionCallbacksTimeoutExpire;
      }
      return v1510;
    }
    function v63() {
      var v1511 = null != e$$31.j.deviceOrientation;
      if (!v1511) {
        v1511 = e$$31.j.didDeviceOrientationCallbacksTimeoutExpire;
      }
      return v1511;
    }
    function v62() {
      var v1512 = 3 != c$$51.google_top_js_status;
      if (!v1512) {
        v1512 = f$$19;
      }
      return v1512;
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
    var v3116;
    if (B$$2) {
      v3116 = 1 == yb(window);
    } else {
      v3116 = !yb(window);
    }
    var v1517 = v3116;
    if (v1517) {
      li();
    }
    Vi();
    var a$$99 = null;
    var b$$81 = "";
    a$$99 = window.google_async_iframe_id;
    var c$$51 = D$$1();
    var v1518;
    if (a$$99) {
      var v3117 = c$$51.document;
      v1518 = a$$99 = JAM.call(v3117.getElementById, v3117, [a$$99], JAM.policy.p3);
    } else {
      b$$81 = "google_temp_span";
      v1518 = a$$99 = Zi(b$$81);
    }
    v1518;
    var d$$42 = Of;
    var v1519 = c$$51.google_top_experiment !== d$$42.EXPERIMENT_ZERO_LATENCY;
    if (v1519) {
      v1519 = 3 === c$$51.google_top_js_status;
    }
    d$$42 = v1519;
    var e$$31 = Mh(c$$51);
    var v3121 = d$$42;
    if (!v3121) {
      var v4029 = e$$31;
      if (v4029) {
        var v4564 = JAM.call(e$$31.P, e$$31, [], JAM.policy.p3);
        if (!v4564) {
          v4564 = JAM.call(e$$31.O, e$$31, [], JAM.policy.p3);
        }
        v4029 = v4564;
      }
      v3121 = v4029;
    }
    if (v3121) {
      var f$$19 = !1;
      var g$$15 = [];
      if (d$$42) {
        JAM.call(g$$15.push, g$$15, [v62], JAM.policy.p3);
      }
      var v3122 = e$$31;
      if (v3122) {
        v3122 = JAM.call(e$$31.P, e$$31, [], JAM.policy.p3);
      }
      var v1520 = v3122;
      if (v1520) {
        JAM.call(g$$15.push, g$$15, [v63], JAM.policy.p3);
      }
      var v3123 = e$$31;
      if (v3123) {
        v3123 = JAM.call(e$$31.O, e$$31, [], JAM.policy.p3);
      }
      var v1521 = v3123;
      if (v1521) {
        JAM.call(g$$15.push, g$$15, [v64], JAM.policy.p3);
      }
      var h$$11 = ga$$1(Yi, a$$99, b$$81, e$$31, g$$15);
      if (d$$42) {
        var v4961 = new Date;
        Xi = JAM.call(v4961.getTime, v4961, [], JAM.policy.p3);
        var v4962 = c$$51.google_top_js_callbacks;
        if (!v4962) {
          v4962 = [];
        }
        c$$51.google_top_js_callbacks = v4962;
        var v4822 = c$$51.google_top_js_callbacks;
        JAM.call(v4822.push, v4822, [h$$11], JAM.policy.p3);
        b$$81 = v65;
        JAM.call(window.setTimeout, window, [b$$81, 150], JAM.policy.p3);
      }
      var v3124 = e$$31;
      if (v3124) {
        v3124 = JAM.call(e$$31.fb, e$$31, [], JAM.policy.p3);
      }
      var v1522 = v3124;
      if (v1522) {
        JAM.call(e$$31.Gc, e$$31, [], JAM.policy.p3);
      }
      var v3125 = e$$31;
      if (v3125) {
        v3125 = JAM.call(e$$31.P, e$$31, [], JAM.policy.p3);
      }
      var v1523 = v3125;
      if (v1523) {
        JAM.call(e$$31.nc, e$$31, [h$$11, 1E3], JAM.policy.p3);
      }
      var v3126 = e$$31;
      if (v3126) {
        v3126 = JAM.call(e$$31.O, e$$31, [], JAM.policy.p3);
      }
      var v1524 = v3126;
      if (v1524) {
        JAM.call(e$$31.mc, e$$31, [h$$11, 1E3], JAM.policy.p3);
      }
    } else {
      Yi(a$$99, b$$81);
    }
    return;
  }
  function $h() {
    var v1526 = null == window.google_ad_output;
    if (v1526) {
      window.google_ad_output = "html";
    }
    var JSCompiler_temp_const$$578 = window;
    var JSCompiler_inline_result$$579;
    JSCompiler_inline_label_yh_592: {
      var b$$inline_589 = window.google_ad_client;
      if (!b$$inline_589) {
        JSCompiler_inline_result$$579 = "";
        break JSCompiler_inline_label_yh_592;
      }
      b$$inline_589 = JAM.call(b$$inline_589.toLowerCase, b$$inline_589, [], JAM.policy.p3);
      var JSCompiler_inline_result$$inline_590;
      var a$$inline_591 = b$$inline_589;
      var v3128 = a$$inline_591;
      if (v3128) {
        v3128 = "ca-" != JAM.call(a$$inline_591.substring, a$$inline_591, [0, 3], JAM.policy.p3);
      }
      var v1528 = v3128;
      if (v1528) {
        a$$inline_591 = "ca-" + a$$inline_591;
      }
      JSCompiler_inline_result$$inline_590 = a$$inline_591;
      JSCompiler_inline_result$$579 = b$$inline_589 = JSCompiler_inline_result$$inline_590;
    }
    JSCompiler_temp_const$$578.google_ad_client = JSCompiler_inline_result$$579;
    if (null == window.google_flash_version) {
      var JSCompiler_temp_const$$555 = window;
      var JSCompiler_inline_result$$556;
      JSCompiler_inline_label_sb$$1_594: {
        try {
          JSCompiler_inline_result$$556 = tb();
        } catch (a$$inline_593) {
          JSCompiler_inline_result$$556 = "0";
        }
      }
      JSCompiler_temp_const$$555.google_flash_version = JSCompiler_inline_result$$556;
    }
    var v3130 = window.google_ad_section;
    if (!v3130) {
      v3130 = window.google_ad_region;
    }
    var v1530 = v3130;
    if (!v1530) {
      v1530 = "";
    }
    window.google_ad_section = v1530;
    var v3132 = window.google_country;
    if (!v3132) {
      v3132 = window.google_gl;
    }
    var v1531 = v3132;
    if (!v1531) {
      v1531 = "";
    }
    window.google_country = v1531;
    var v1532 = new Date;
    var a$$inline_89 = JAM.call(v1532.getTime, v1532, [], JAM.policy.p3);
    var v1533 = n$$2(window.google_color_bg);
    if (v1533) {
      var v3135 = window;
      var v5125 = zh(window.google_color_bg, a$$inline_89);
      v3135.google_color_bg = v5125;
    }
    var v1534 = n$$2(window.google_color_text);
    if (v1534) {
      var v3137 = window;
      var v5126 = zh(window.google_color_text, a$$inline_89);
      v3137.google_color_text = v5126;
    }
    var v1535 = n$$2(window.google_color_link);
    if (v1535) {
      var v3139 = window;
      var v5127 = zh(window.google_color_link, a$$inline_89);
      v3139.google_color_link = v5127;
    }
    var v1536 = n$$2(window.google_color_url);
    if (v1536) {
      var v3141 = window;
      var v5128 = zh(window.google_color_url, a$$inline_89);
      v3141.google_color_url = v5128;
    }
    var v1537 = n$$2(window.google_color_border);
    if (v1537) {
      var v3143 = window;
      var v5129 = zh(window.google_color_border, a$$inline_89);
      v3143.google_color_border = v5129;
    }
    var v1538 = n$$2(window.google_color_line);
    if (v1538) {
      var v3145 = window;
      var v5130 = zh(window.google_color_line, a$$inline_89);
      v3145.google_color_line = v5130;
    }
    return;
  }
  var m$$3 = this;
  var v1539 = Date.now;
  if (!v1539) {
    v1539 = v66;
  }
  var ha$$1 = v1539;
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
  u$$2.prototype.ceil = v67;
  u$$2.prototype.floor = v68;
  u$$2.prototype.round = v69;
  u$$2.prototype.scale = v70;
  var v$$1 = document;
  var w$$6 = window;
  La$$1();
  var qb$$1 = {};
  var B$$2 = !!window.google_async_iframe_id;
  var v3148 = B$$2;
  if (v3148) {
    v3148 = window.parent;
  }
  var v1550 = v3148;
  if (!v1550) {
    v1550 = window;
  }
  var Ob = v1550;
  var Pb = {CONTROL:"C", EXPERIMENT:"E"};
  var Xb = Array.prototype;
  var v1551;
  if (Xb.indexOf) {
    v1551 = v71;
  } else {
    v1551 = v72;
  }
  var Yb = v1551;
  var v1552;
  if (Xb.forEach) {
    v1552 = v73;
  } else {
    v1552 = v74;
  }
  var Zb = v1552;
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
  var v1584 = !N$$1;
  if (!v1584) {
    var v3153 = N$$1;
    if (v3153) {
      v3153 = 9 <= Vc;
    }
    v1584 = v3153;
  }
  var Wc = v1584;
  var v4040 = !Oc;
  if (v4040) {
    v4040 = !N$$1;
  }
  var v3155 = v4040;
  if (!v3155) {
    var v4041 = N$$1 && N$$1;
    if (v4041) {
      v4041 = 9 <= Vc;
    }
    v3155 = v4041;
  }
  var v1585 = v3155;
  if (!v1585) {
    if (Oc) {
      Uc("1.9.1");
    }
  }
  var v1586 = N$$1;
  if (v1586) {
    v1586 = !Uc("9");
  }
  var Xc = v1586;
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
  Be.prototype.serialize = v115;
  Be.prototype.n = v116;
  var Ce = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
  var v1646;
  if (JAM.call(/\uffff/.test, /\uffff/, ["\uffff"], JAM.policy.p3)) {
    v1646 = /[\\\"\x00-\x1f\x7f-\uffff]/g;
  } else {
    v1646 = /[\\\"\x00-\x1f\x7f-\xff]/g;
  }
  var De = v1646;
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
  var v1667 = new Date;
  var vf = JAM.call(v1667.getTime, v1667, [], JAM.policy.p3);
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
  var v1696;
  if (JAM.call(/\uffff/.test, /\uffff/, ["\uffff"], JAM.policy.p3)) {
    v1696 = /[\\\"\x00-\x1f\x7f-\uffff]/g;
  } else {
    v1696 = /[\\\"\x00-\x1f\x7f-\xff]/g;
  }
  var jg = v1696;
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
  var v1805 = w$$6.google_eas_queue;
  if (!v1805) {
    v1805 = [];
  }
  w$$6.google_eas_queue = v1805;
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
    var v3178 = 0 == this.a;
    if (v3178) {
      v3178 = this.c.length;
    }
    if (v3178) {
      var v1806 = this.c;
      var a$$44 = JAM.call(v1806.shift, v1806, [], JAM.policy.p3);
      this.a = 2;
      var b$$36 = M("sjr::run", JAM.call(p, null, [this.f, this, a$$44], JAM.policy.p3));
      var v1808 = a$$44.h;
      JAM.call(v1808.setTimeout, v1808, [b$$36, 0], JAM.policy.p3);
      Ua(this);
    }
    return;
  }
  function v19() {
    var v3180 = !window;
    if (!v3180) {
      v3180 = !Array;
    }
    return!v3180;
  }
  function v18() {
    var v1811 = 1 == this.a;
    if (v1811) {
      var v4046 = null != this.d;
      if (v4046) {
        var v4823 = this.b;
        JAM.call(v4823.clearTimeout, v4823, [this.d], JAM.policy.p3);
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
      var v1813 = this.b;
      var v5131 = JAM.call(v1813.setTimeout, v1813, [b$$34, a$$42], JAM.policy.p3);
      this.d = v5131;
    }
    return;
  }
  function v16(a$$41, b$$33) {
    var v1814 = this.c;
    var v4047 = b$$33;
    if (!v4047) {
      v4047 = this.b;
    }
    JAM.call(v1814.push, v1814, [new Ta(a$$41, v4047)], JAM.policy.p3);
    Ua(this);
    return;
  }
  function v15(a$$40, b$$32) {
    var v1816;
    var v4567 = 0 != this.a;
    if (!v4567) {
      v4567 = 0 != this.c.length;
    }
    var v4048 = v4567;
    if (!v4048) {
      var v4568 = b$$32;
      if (v4568) {
        v4568 = b$$32 != window;
      }
      v4048 = v4568;
    }
    if (v4048) {
      v1816 = JAM.call(this.g, this, [a$$40, b$$32], JAM.policy.p3);
    } else {
      this.a = 2;
      v1816 = JAM.call(this.f, this, [new Ta(a$$40, window)], JAM.policy.p3);
    }
    v1816;
    return;
  }
  function v14(a$$36, b$$29) {
    var c$$19 = La("rs", a$$36);
    var d$$13;
    t: {
      var v4050 = a$$36;
      if (v4050) {
        v4050 = d$$13 = JAM.call(a$$36.match, a$$36, ["dt=([^&]+)"], JAM.policy.p3);
      }
      var v3185 = v4050;
      if (v3185) {
        v3185 = 2 == d$$13.length;
      }
      if (v3185) {
        d$$13 = d$$13[1];
        break t;
      }
      d$$13 = "";
    }
    var v3186 = new Date;
    d$$13 = JAM.call(v3186.getTime, v3186, [], JAM.policy.p3) - d$$13;
    var v4052;
    if (1E4 > d$$13) {
      v4052 = d$$13 + "";
    } else {
      v4052 = "M";
    }
    c$$19 = JAM.call(c$$19.replace, c$$19, [/&dtd=(\d+|M)/, "&dtd=" + v4052], JAM.policy.p3);
    JAM.call(this.set, this, [b$$29, c$$19], JAM.policy.p3);
    return c$$19;
  }
  function v13(a$$35) {
    var v1820 = this.b.document;
    a$$35 = JAM.call(v1820.getElementById, v1820, [a$$35], JAM.policy.p3);
    var b$$28 = a$$35.contentWindow.document;
    var v4053 = a$$35.onload;
    if (v4053) {
      v4053 = b$$28;
    }
    var v3189 = v4053;
    if (v3189) {
      var v4054 = !b$$28.body;
      if (!v4054) {
        v4054 = !b$$28.body.firstChild;
      }
      v3189 = v4054;
    }
    if (v3189) {
      JAM.call(a$$35.onload, a$$35, [], JAM.policy.p3);
    }
    return;
  }
  function v12(a$$34, b$$27) {
    JAM.set(this.i.handlers, a$$34, b$$27, JAM.policy.p2);
    var v1824 = this.b.addEventListener;
    if (v1824) {
      var v3192 = this.b;
      JAM.call(v3192.addEventListener, v3192, ["load", JAM.call(p, null, [this.j, this, a$$34], JAM.policy.p3), !1], JAM.policy.p3);
    }
    return;
  }
  function rb() {
    var v3195 = !window.google_top_experiment;
    if (v3195) {
      v3195 = !window.google_top_js_status;
    }
    if (v3195) {
      var a$$69 = window;
      var v4058;
      if (a$$69.top == a$$69) {
        v4058 = 0;
      } else {
        var v4574;
        if (J(a$$69.top)) {
          v4574 = 1;
        } else {
          v4574 = 2;
        }
        v4058 = v4574;
      }
      if (2 !== v4058) {
        window.google_top_js_status = 0;
      } else {
        if (top.postMessage) {
          var b$$55;
          try {
            var v1825;
            if (D.top.frames.google_top_static_frame) {
              v1825 = !0;
            } else {
              v1825 = !1;
            }
            b$$55 = v1825;
          } catch (c$$32) {
            b$$55 = !1;
          }
          if (b$$55) {
            var v4060 = window;
            var v5132 = I(["jp_c", "jp_zl", "jp_wfpmr"], ja);
            v4060.google_top_experiment = v5132;
            if ("jp_c" !== window.google_top_experiment) {
              a$$69 = window;
              var v1826;
              if (a$$69.addEventListener) {
                v1826 = JAM.call(a$$69.addEventListener, a$$69, ["message", hb, !1], JAM.policy.p3);
              } else {
                var v3199 = a$$69.attachEvent;
                if (v3199) {
                  v3199 = JAM.call(a$$69.attachEvent, a$$69, ["onmessage", hb], JAM.policy.p3);
                }
                v1826 = v3199;
              }
              v1826;
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
    var v3203 = d$$24 = window.adsbygoogle;
    if (v3203) {
      v3203 = d$$24.shift;
    }
    if (v3203) {
      b$$55 = 20;
      var v3204 = a$$69 = JAM.call(d$$24.shift, d$$24, [], JAM.policy.p3);
      if (v3204) {
        var v4062 = b$$55;
        b$$55 = b$$55 - 1;
        v3204 = 0 < v4062;
      }
      var v1833 = v3204;
      for (;v1833;) {
        try {
          qb(a$$69);
        } catch (e$$19) {
          JAM.call(window.setTimeout, window, [rb, 0], JAM.policy.p3);
          throw e$$19;
        }
        var v3205 = a$$69 = JAM.call(d$$24.shift, d$$24, [], JAM.policy.p3);
        if (v3205) {
          var v4063 = b$$55;
          b$$55 = b$$55 - 1;
          v3205 = 0 < v4063;
        }
        v1833 = v3205;
      }
    }
    window.adsbygoogle = {push:qb};
    return;
  }
  function qb(a$$68) {
    var b$$54 = a$$68.element;
    var v1835 = a$$68.params;
    if (!v1835) {
      v1835 = {};
    }
    a$$68 = v1835;
    if (b$$54) {
      var v3207 = !mb(b$$54);
      if (v3207) {
        var v4578 = b$$54.id;
        if (v4578) {
          v4578 = pb(b$$54.id);
        }
        b$$54 = v4578;
        v3207 = !b$$54;
      }
      if (v3207) {
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
    var v1840 = c$$30 < b$$53.length;
    for (;v1840;) {
      var v3210 = mb(d$$23);
      if (v3210) {
        var v4065 = !a$$67;
        if (!v4065) {
          v4065 = d$$23.id == a$$67;
        }
        v3210 = v4065;
      }
      if (v3210) {
        return d$$23;
      }
      d$$23 = b$$53[c$$30 = c$$30 + 1];
      v1840 = c$$30 < b$$53.length;
    }
    return null;
  }
  function nb(a$$66, b$$52, c$$29) {
    var d$$22 = a$$66.attributes;
    var e$$18 = d$$22.length;
    var f$$9 = 0;
    var v1844 = f$$9 < e$$18;
    for (;v1844;) {
      var g$$7 = d$$22[f$$9];
      if (JAM.call(/data-/.test, /data-/, [g$$7.nodeName], JAM.policy.p3)) {
        var v3214 = g$$7.nodeName;
        var v1841 = JAM.call(v3214.replace, v3214, ["data", "google"], JAM.policy.p3);
        var l$$5 = JAM.call(v1841.replace, v1841, [/-/g, "_"], JAM.policy.p3);
        var v1842 = JAM.call(b$$52.hasOwnProperty, b$$52, [l$$5], JAM.policy.p3);
        if (!v1842) {
          JAM.set(b$$52, l$$5, g$$7.nodeValue, JAM.policy.p2);
        }
      }
      f$$9++;
      v1844 = f$$9 < e$$18;
    }
    d$$22 = b$$52.google_ad_format;
    var v3216 = "auto" == d$$22;
    if (!v3216) {
      v3216 = JAM.call(/^((^|,)(horizontal|vertical|rectangle))+$/.test, /^((^|,)(horizontal|vertical|rectangle))+$/, [d$$22], JAM.policy.p3);
    }
    if (v3216) {
      d$$22 = a$$66.offsetWidth;
      e$$18 = b$$52.google_ad_format;
      c$$29 = lb(d$$22, e$$18, c$$29);
      if (!c$$29) {
        throw Error("Cannot find a responsive size for a container of width=" + d$$22 + "px and data-ad-format=" + e$$18);
      }
      b$$52.google_ad_height = c$$29.height;
      var v1847;
      var v4068 = 300 < d$$22;
      if (v4068) {
        v4068 = 300 < c$$29.height;
      }
      if (v4068) {
        v1847 = c$$29.width;
      } else {
        var v3218;
        if (1200 < d$$22) {
          v3218 = 1200;
        } else {
          v3218 = JAM.call(Math.round, Math, [d$$22], JAM.policy.p3);
        }
        v1847 = v3218;
      }
      b$$52.google_ad_width = v1847;
      a$$66.style.height = b$$52.google_ad_height + "px";
      delete b$$52.google_ad_format;
      b$$52.google_loader_features_used = 128;
    } else {
      var v1849;
      var v4070 = JAM.call(ib.test, ib, [a$$66.style.width], JAM.policy.p3);
      if (v4070) {
        v4070 = JAM.call(ib.test, ib, [a$$66.style.height], JAM.policy.p3);
      }
      if (v4070) {
        v1849 = jb(a$$66.style, b$$52);
      } else {
        var v4834;
        if (c$$29.getComputedStyle) {
          v4834 = JAM.call(c$$29.getComputedStyle, c$$29, [a$$66, null], JAM.policy.p3);
        } else {
          v4834 = a$$66.currentStyle;
        }
        c$$29 = v4834;
        a$$66.style.width = c$$29.width;
        a$$66.style.height = c$$29.height;
        v1849 = jb(c$$29, b$$52);
      }
      v1849;
    }
    return;
  }
  function ob(a$$65, b$$51, c$$28) {
    function v0() {
      fb(c$$28, b$$51, a$$65);
      return;
    }
    var v3223 = a$$65.style;
    if (v3223) {
      v3223 = "none" == a$$65.style.display;
    }
    var v1851 = v3223;
    if (v1851) {
      b$$51.google_dn = 1;
    }
    va(c$$28);
    nb(a$$65, b$$51, c$$28);
    var d$$21 = 0;
    var v1853 = d$$21 < $.length;
    for (;v1853;) {
      var v1852 = $[d$$21];
      var v3225 = b$$51[$[d$$21]];
      if (!v3225) {
        v3225 = c$$28[$[d$$21]];
      }
      JAM.set(b$$51, v1852, v3225, JAM.policy.p2);
      d$$21++;
      v1853 = d$$21 < $.length;
    }
    b$$51.google_loader_used = "aa";
    var v3227 = d$$21 = b$$51.google_ad_output;
    if (v3227) {
      v3227 = "html" != d$$21;
    }
    if (v3227) {
      throw Error("No support for google_ad_output=" + d$$21);
    }
    K("aa::main", L, v0);
    return;
  }
  function mb(a$$64) {
    var v1856 = JAM.call(/(^| )adsbygoogle($| )/.test, /(^| )adsbygoogle($| )/, [a$$64.className], JAM.policy.p3);
    if (v1856) {
      v1856 = "done" != JAM.call(a$$64.getAttribute, a$$64, ["data-adsbygoogle-status"], JAM.policy.p3);
    }
    return v1856;
  }
  function kb(a$$63) {
    a$$63 = a$$63.document;
    var v1857 = a$$63.documentElement.clientWidth;
    if (!v1857) {
      v1857 = a$$63.body.clientWidth;
    }
    return v1857;
  }
  function lb(a$$61, b$$49, c$$27) {
    function v1(a$$62, b$$50) {
      var v1858 = a$$62.width - b$$50.width;
      if (!v1858) {
        v1858 = a$$62.height - b$$50.height;
      }
      return v1858;
    }
    JAM.call(Z.sort, Z, [v1], JAM.policy.p3);
    var v1859 = "auto" == b$$49;
    if (v1859) {
      var v3238;
      if (.25 > a$$61 / kb(c$$27)) {
        v3238 = "vertical";
      } else {
        v3238 = "horizontal,rectangle";
      }
      b$$49 = v3238;
    }
    c$$27 = Z.length;
    var v1861 = c$$27;
    c$$27 = c$$27 - 1;
    for (;v1861;) {
      var v3239 = Z[c$$27].width <= a$$61;
      if (v3239) {
        v3239 = -1 != JAM.call(b$$49.indexOf, b$$49, [Z[c$$27].format], JAM.policy.p3);
      }
      if (v3239) {
        return Z[c$$27];
      }
      v1861 = c$$27;
      c$$27 = c$$27 - 1;
    }
    return null;
  }
  function jb(a$$60, b$$48) {
    var c$$26 = ["width", "height"];
    var d$$20 = 0;
    var v1865 = d$$20 < c$$26.length;
    for (;v1865;) {
      var e$$17 = "google_ad_" + c$$26[d$$20];
      if (!JAM.call(b$$48.hasOwnProperty, b$$48, [e$$17], JAM.policy.p3)) {
        var f$$8 = JAM.call(ib.exec, ib, [a$$60[c$$26[d$$20]]], JAM.policy.p3);
        if (f$$8) {
          var v5133 = JAM.call(Math.round, Math, [f$$8[1]], JAM.policy.p3);
          introspect(JAM.policy.p2) {
            b$$48[e$$17] = v5133;
          }
        }
      }
      d$$20++;
      v1865 = d$$20 < c$$26.length;
    }
    return;
  }
  function hb(a$$59) {
    var v1866 = a$$59.data;
    var b$$47 = JAM.call(v1866.split, v1866, ["\n"], JAM.policy.p3);
    var c$$25 = {};
    var d$$19 = 0;
    var v1869 = d$$19 < b$$47.length;
    for (;v1869;) {
      var v1867 = b$$47[d$$19];
      var e$$16 = JAM.call(v1867.indexOf, v1867, ["="], JAM.policy.p3);
      var v1868 = -1 != e$$16;
      if (v1868) {
        var v4078 = b$$47[d$$19];
        var v3246 = JAM.call(v4078.substr, v4078, [0, e$$16], JAM.policy.p3);
        var v4079 = b$$47[d$$19];
        var v5134 = JAM.call(v4079.substr, v4079, [e$$16 + 1], JAM.policy.p3);
        JAM.set(c$$25, v3246, v5134, JAM.policy.p2);
      }
      d$$19++;
      v1869 = d$$19 < b$$47.length;
    }
    b$$47 = c$$25[3];
    var v3248 = c$$25[1] == gb;
    if (v3248) {
      window.google_top_js_status = 4;
      var v4966 = a$$59.source == top;
      if (v4966) {
        v4966 = 0 == JAM.call(b$$47.indexOf, b$$47, [a$$59.origin], JAM.policy.p3);
      }
      var v4839 = v4966;
      if (v4839) {
        window.google_top_values = c$$25;
        window.google_top_js_status = 5;
      }
      v3248 = window.google_top_js_callbacks;
    }
    if (v3248) {
      a$$59 = 0;
      var v1871 = a$$59 < window.google_top_js_callbacks.length;
      for (;v1871;) {
        var v1870 = window.google_top_js_callbacks;
        JAM.call(v1870[a$$59], v1870, [], JAM.policy.p3);
        a$$59++;
        v1871 = a$$59 < window.google_top_js_callbacks.length;
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
    var v1876;
    var v4084 = window.google_override_format;
    if (!v4084) {
      var v4589 = !$a[window.google_ad_width + "x" + window.google_ad_height];
      if (v4589) {
        v4589 = "aa" == window.google_loader_used;
      }
      v4084 = v4589;
    }
    if (v4084) {
      v1876 = I(["c", "e"], na);
    } else {
      v1876 = null;
    }
    l$$4 = v1876;
    var h$$8 = b$$46.google_ad_output;
    var k$$2 = b$$46.google_ad_format;
    var v3253 = k$$2;
    if (!v3253) {
      var v4085 = "html" != h$$8;
      if (v4085) {
        v4085 = null != h$$8;
      }
      v3253 = v4085;
    }
    var v1877 = v3253;
    if (!v1877) {
      k$$2 = b$$46.google_ad_width + "x" + b$$46.google_ad_height;
      var v4089 = "e" == l$$4;
      if (v4089) {
        k$$2 = k$$2 + "_as";
      }
    }
    var v3255 = !b$$46.google_ad_slot;
    if (!v3255) {
      v3255 = b$$46.google_override_format;
    }
    var v1878 = v3255;
    if (!v1878) {
      var v3256 = !$a[b$$46.google_ad_width + "x" + b$$46.google_ad_height];
      if (v3256) {
        v3256 = "aa" == b$$46.google_loader_used;
      }
      v1878 = v3256;
    }
    h$$8 = v1878;
    var v1879;
    if (k$$2 && h$$8) {
      v1879 = JAM.call(k$$2.toLowerCase, k$$2, [], JAM.policy.p3);
    } else {
      v1879 = "";
    }
    k$$2 = v1879;
    b$$46.google_ad_format = k$$2;
    k$$2 = ya(c$$24, b$$46, !0);
    b$$46.google_ad_unit_key = k$$2;
    var v1881 = window;
    var v4094 = window.google_adk2_experiment;
    if (!v4094) {
      v4094 = I(["C", "E"], ma);
    }
    var v3259 = v4094;
    if (!v3259) {
      v3259 = "N";
    }
    k$$2 = v1881.google_adk2_experiment = v3259;
    var v1882;
    if ("E" == k$$2) {
      var v5135 = ya(c$$24, b$$46);
      v1882 = b$$46.google_ad_unit_key_2 = v5135;
    } else {
      var v3260 = "C" == k$$2;
      if (v3260) {
        v3260 = b$$46.google_ad_unit_key_2 = "ctrl";
      }
      v1882 = v3260;
    }
    v1882;
    c$$24 = Ha(b$$46);
    k$$2 = Ja(a$$58);
    h$$8 = a$$58.document;
    var v4096 = {visible:1, hidden:2, prerender:3, preview:4};
    var v4969 = h$$8.webkitVisibilityState;
    if (!v4969) {
      v4969 = h$$8.mozVisibilityState;
    }
    var v4844 = v4969;
    if (!v4844) {
      v4844 = h$$8.visibilityState;
    }
    var v4595 = v4844;
    if (!v4595) {
      v4595 = "";
    }
    var v3262 = v4096[v4595];
    if (!v3262) {
      v3262 = 0;
    }
    h$$8 = 3 == v3262;
    var v4099 = k$$2;
    if (v4099) {
      v4099 = !h$$8;
    }
    var v3263 = v4099;
    if (v3263) {
      v3263 = void 0 === a$$58.google_ad_handling_mode;
    }
    var v1884 = v3263;
    if (v1884) {
      var v3264 = I(["XN", "AZ", "S"], ka);
      if (!v3264) {
        v3264 = I(["EI"], la);
      }
      a$$58.google_ad_handling_mode = v3264;
    }
    var v1885;
    if (a$$58.google_ad_handling_mode) {
      v1885 = String(a$$58.google_ad_handling_mode);
    } else {
      v1885 = null;
    }
    k$$2 = v1885;
    var v4596 = Ja(a$$58);
    if (v4596) {
      v4596 = 1 == a$$58.google_unique_id;
    }
    var v4105 = v4596;
    if (v4105) {
      v4105 = "XN" != k$$2;
    }
    var v3267 = v4105;
    if (v3267) {
      v3267 = "S" != k$$2;
    }
    if (v3267) {
      h$$8 = "zrt_ads_frame" + a$$58.google_unique_id;
      var m$$2;
      m$$2 = b$$46.google_page_url;
      if (!m$$2) {
        r: {
          m$$2 = a$$58.document;
          var v1887 = f$$7;
          if (!v1887) {
            v1887 = a$$58.google_ad_width;
          }
          var q$$2 = v1887;
          var v1888 = g$$6;
          if (!v1888) {
            v1888 = a$$58.google_ad_height;
          }
          var x$$49 = v1888;
          if (a$$58.top == a$$58) {
            m$$2 = !1;
          } else {
            var B$$1 = m$$2.documentElement;
            if (q$$2 && x$$49) {
              var u$$1 = 1;
              var r$$1 = 1;
              var v1889;
              if (a$$58.innerHeight) {
                u$$1 = a$$58.innerWidth;
                v1889 = r$$1 = a$$58.innerHeight;
              } else {
                var v3271;
                var v4597 = B$$1;
                if (v4597) {
                  v4597 = B$$1.clientHeight;
                }
                if (v4597) {
                  u$$1 = B$$1.clientWidth;
                  v3271 = r$$1 = B$$1.clientHeight;
                } else {
                  var v4106 = m$$2.body;
                  if (v4106) {
                    u$$1 = m$$2.body.clientWidth;
                    v4106 = r$$1 = m$$2.body.clientHeight;
                  }
                  v3271 = v4106;
                }
                v1889 = v3271;
              }
              v1889;
              var v3273 = r$$1 > 2 * x$$49;
              if (!v3273) {
                v3273 = u$$1 > 2 * q$$2;
              }
              if (v3273) {
                m$$2 = !1;
                break r;
              }
            }
            m$$2 = !0;
          }
        }
        var v1893;
        if (m$$2) {
          v1893 = a$$58.document.referrer;
        } else {
          v1893 = a$$58.document.URL;
        }
        m$$2 = v1893;
      }
      m$$2 = encodeURIComponent(m$$2);
      q$$2 = null;
      var v4111 = "PC" == k$$2;
      if (!v4111) {
        v4111 = "EI" == k$$2;
      }
      var v3276 = v4111;
      if (!v3276) {
        v3276 = "AZ" == k$$2;
      }
      if (v3276) {
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
      var v1899 = A("", "doubleclick");
      var v4601;
      if (f$$7) {
        v4601 = "#" + encodeURIComponent(f$$7);
      } else {
        v4601 = "";
      }
      var v3279 = ["/pagead/html/r20131120/r20130906/zrt_lookup.html", v4601];
      f$$7 = C(v1899, JAM.call(v3279.join, v3279, [""], JAM.policy.p3));
      b$$46.src = f$$7;
      f$$7 = cb(b$$46);
    } else {
      f$$7 = null;
    }
    var v1902 = new Date;
    g$$6 = JAM.call(v1902.getTime, v1902, [], JAM.policy.p3);
    b$$46 = a$$58.google_top_experiment;
    h$$8 = a$$58.google_async_for_oa_experiment;
    m$$2 = a$$58.google_always_use_delayed_impressions_experiment;
    var v3280 = a$$58.google_unique_id;
    var v4115;
    if (b$$46) {
      v4115 = 'google_top_experiment="' + b$$46 + '";';
    } else {
      v4115 = "";
    }
    var v3281 = v4115;
    var v4116;
    if (k$$2) {
      v4116 = 'google_ad_handling_mode="' + k$$2 + '";';
    } else {
      v4116 = "";
    }
    var v3282 = v4116;
    var v4117;
    if (h$$8) {
      v4117 = 'google_async_for_oa_experiment="' + h$$8 + '";';
    } else {
      v4117 = "";
    }
    var v3283 = v4117;
    var v4118;
    if (m$$2) {
      v4118 = 'google_always_use_delayed_impressions_experiment="' + m$$2 + '";';
    } else {
      v4118 = "";
    }
    var v3284 = v4118;
    var v4119;
    if (l$$4) {
      v4119 = 'google_append_as_for_format_override="' + l$$4 + '";';
    } else {
      v4119 = "";
    }
    var v3285 = v4119;
    var v4120;
    if (g$$6 > v) {
      v4120 = g$$6 - v;
    } else {
      v4120 = 1;
    }
    var v1903 = ["<!doctype html><html><body>", f$$7, "<", e$$15, ">", c$$24, "google_show_ads_impl=true;google_unique_id=", v3280, ';google_async_iframe_id="', d$$18, '";google_start_time=', v, ";", v3281, v3282, v3283, v3284, v3285, "google_bpp=", v4120, ";google_async_rrc=0;</", e$$15, ">", ab(), "</body></html>"];
    l$$4 = JAM.call(v1903.join, v1903, [""], JAM.policy.p3);
    var v3288;
    var v4608 = a$$58.document;
    if (JAM.call(v4608.getElementById, v4608, [d$$18], JAM.policy.p3)) {
      v3288 = Ya;
    } else {
      v3288 = Za;
    }
    JAM.call(v3288, null, [bb(a$$58, d$$18, l$$4, !0)], JAM.policy.p3);
    return;
  }
  function fb(a$$56, b$$44, c$$23) {
    function v2(a$$57, b$$45, f$$6) {
      var g$$5 = b$$45.id;
      var l$$3 = 0;
      var v3290 = !g$$5;
      if (!v3290) {
        var v4122 = a$$57.document;
        v3290 = JAM.call(v4122.getElementById, v4122, [g$$5], JAM.policy.p3);
      }
      var v1907 = v3290;
      for (;v1907;) {
        var v1906 = l$$3;
        l$$3 = l$$3 + 1;
        g$$5 = "aswift_" + v1906;
        var v3291 = !g$$5;
        if (!v3291) {
          var v4124 = a$$57.document;
          v3291 = JAM.call(v4124.getElementById, v4124, [g$$5], JAM.policy.p3);
        }
        v1907 = v3291;
      }
      b$$45.id = g$$5;
      b$$45.name = g$$5;
      a$$57 = Number(f$$6.google_ad_width);
      g$$5 = Number(f$$6.google_ad_height);
      f$$6 = ["<iframe"];
      var h$$7;
      for (h$$7 in b$$45) {
        var v1910 = JAM.call(b$$45.hasOwnProperty, b$$45, [h$$7], JAM.policy.p3);
        if (v1910) {
          ua(f$$6, h$$7 + "=" + b$$45[h$$7]);
        }
      }
      JAM.call(f$$6.push, f$$6, ['style="left:0;position:absolute;top:0;"'], JAM.policy.p3);
      JAM.call(f$$6.push, f$$6, ["></iframe>"], JAM.policy.p3);
      h$$7 = "border:none;height:" + g$$5 + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + a$$57 + "px;background-color:transparent";
      var v1912 = c$$23;
      var v3294 = ['<ins style="display:inline-table;', h$$7, '"><ins id="', b$$45.id + "_anchor", '" style="display:block;', h$$7, '">', JAM.call(f$$6.join, f$$6, [" "], JAM.policy.p3), "</ins></ins>"];
      var v5136 = JAM.call(v3294.join, v3294, [""], JAM.policy.p3);
      JAM.set(v1912, "innerHTML", v5136);
      return b$$45.id;
    }
    eb(a$$56, b$$44, c$$23, v2);
    return;
  }
  function db(a$$55, b$$43, c$$22, d$$17) {
    var v1913;
    if (d$$17) {
      v1913 = '"';
    } else {
      v1913 = "";
    }
    d$$17 = v1913;
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
      var v1919 = null != a$$54;
      if (v1919) {
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
        var v3296 = Xa();
        JAM.call(v3296.al, v3296, [3E4], JAM.policy.p3);
      }
      try {
        var v4611 = a$$52.document;
        if (J(JAM.call(v4611.getElementById, v4611, [b$$41], JAM.policy.p3).contentWindow)) {
          var v3298 = a$$52.document;
          var f$$5 = JAM.call(v3298.getElementById, v3298, [b$$41], JAM.policy.p3).contentWindow;
          var g$$4 = f$$5.document;
          var v3299 = g$$4.body;
          if (v3299) {
            v3299 = g$$4.body.firstChild;
          }
          var v1921 = v3299;
          if (!v1921) {
            JAM.call(g$$4.open, g$$4, [], JAM.policy.p3);
            f$$5.google_async_iframe_close = !0;
            JAM.call(g$$4.write, g$$4, [c$$21], JAM.policy.p3);
          }
        } else {
          var v3301 = a$$52.document;
          var l$$2 = JAM.call(v3301.getElementById, v3301, [b$$41], JAM.policy.p3).contentWindow;
          var h$$6;
          f$$5 = c$$21;
          f$$5 = String(f$$5);
          if (f$$5.quote) {
            h$$6 = JAM.call(f$$5.quote, f$$5, [], JAM.policy.p3);
          } else {
            g$$4 = ['"'];
            var k$$1 = 0;
            var v1930 = k$$1 < f$$5.length;
            for (;v1930;) {
              var m$$1 = JAM.call(f$$5.charAt, f$$5, [k$$1], JAM.policy.p3);
              var q$$1 = JAM.call(m$$1.charCodeAt, m$$1, [0], JAM.policy.p3);
              var x$$48 = g$$4;
              var B = k$$1 + 1;
              var u;
              if (!(u = E[m$$1])) {
                var r;
                var v3304 = 31 < q$$1;
                if (v3304) {
                  v3304 = 127 > q$$1;
                }
                if (v3304) {
                  r = m$$1;
                } else {
                  var t = m$$1;
                  if (t in F) {
                    r = F[t];
                  } else {
                    if (t in E) {
                      r = JAM.set(F, t, E[t], JAM.policy.p2);
                    } else {
                      var s$$2 = t;
                      var y$$30 = JAM.call(t.charCodeAt, t, [0], JAM.policy.p3);
                      var v3305 = 31 < y$$30;
                      if (v3305) {
                        v3305 = 127 > y$$30;
                      }
                      if (v3305) {
                        s$$2 = t;
                      } else {
                        if (256 > y$$30) {
                          s$$2 = "\\x";
                          var v4134 = 16 > y$$30;
                          if (!v4134) {
                            v4134 = 256 < y$$30;
                          }
                          if (v4134) {
                            s$$2 = s$$2 + "0";
                          }
                        } else {
                          s$$2 = "\\u";
                          var v3306 = 4096 > y$$30;
                          if (v3306) {
                            s$$2 = s$$2 + "0";
                          }
                        }
                        var v4135 = JAM.call(y$$30.toString, y$$30, [16], JAM.policy.p3);
                        s$$2 = s$$2 + JAM.call(v4135.toUpperCase, v4135, [], JAM.policy.p3);
                      }
                      r = JAM.set(F, t, s$$2, JAM.policy.p2);
                    }
                  }
                }
                u = r;
              }
              x$$48[B] = u;
              k$$1++;
              v1930 = k$$1 < f$$5.length;
            }
            JAM.call(g$$4.push, g$$4, ['"'], JAM.policy.p3);
            h$$6 = JAM.call(g$$4.join, g$$4, [""], JAM.policy.p3);
          }
          var v1932 = l$$2.location;
          JAM.call(v1932.replace, v1932, ["javascript:" + h$$6], JAM.policy.p3);
        }
        e$$13 = !0;
      } catch (sb) {
        l$$2 = Da().google_jobrunner;
        var v3310 = Wa(l$$2);
        if (v3310) {
          JAM.call(l$$2.rl, l$$2, [], JAM.policy.p3);
        }
      }
      if (e$$13) {
        e$$13 = La("google_async_rrc", c$$21);
        var v4136 = new Q(a$$52);
        JAM.call(v4136.set, v4136, [b$$41, bb(a$$52, b$$41, e$$13, !1)], JAM.policy.p3);
      }
      return;
    }
    return v4;
  }
  function ab() {
    var a$$51 = "script";
    var v1935 = ["<", a$$51, ' src="', C(A("", "googlesyndication"), "/pagead/js/r20131120/r20130906/show_ads_impl.js", ""), '"></', a$$51, ">"];
    return JAM.call(v1935.join, v1935, [""], JAM.policy.p3);
  }
  function Za(a$$50, b$$40) {
    var v1936 = Xa();
    JAM.call(v1936.nqa, v1936, [a$$50, b$$40], JAM.policy.p3);
    return;
  }
  function Ya(a$$49, b$$39) {
    var v1937 = Xa();
    JAM.call(v1937.nq, v1937, [a$$49, b$$39], JAM.policy.p3);
    return;
  }
  function Xa() {
    var v3312 = X;
    if (v3312) {
      v3312 = Va(X);
    }
    if (v3312) {
      return X;
    }
    var a$$48 = Da();
    var b$$38 = a$$48.google_jobrunner;
    var v1939;
    if (Wa(b$$38)) {
      v1939 = X = b$$38;
    } else {
      v1939 = a$$48.google_jobrunner = X = new Y(a$$48);
    }
    return v1939;
  }
  function Wa(a$$47) {
    var v4971 = !!a$$47;
    if (v4971) {
      var v5013 = "object" == typeof a$$47;
      if (!v5013) {
        v5013 = "function" == typeof a$$47;
      }
      v4971 = v5013;
    }
    var v4851 = v4971;
    if (v4851) {
      v4851 = Va(a$$47);
    }
    var v4614 = v4851;
    if (v4614) {
      v4614 = H(a$$47.nq);
    }
    var v4139 = v4614;
    if (v4139) {
      v4139 = H(a$$47.nqa);
    }
    var v3314 = v4139;
    if (v3314) {
      v3314 = H(a$$47.al);
    }
    var v1940 = v3314;
    if (v1940) {
      v1940 = H(a$$47.rl);
    }
    return v1940;
  }
  function Va(a$$46) {
    try {
      return JAM.call(a$$46.sz, a$$46, [], JAM.policy.p3);
    } catch (b$$37) {
      return!1;
    }
    return;
  }
  function Ua(a$$43) {
    var b$$35 = M("sjr::tryrun", JAM.call(p, null, [a$$43.m, a$$43], JAM.policy.p3));
    var v1942 = a$$43.b;
    JAM.call(v1942.setTimeout, v1942, [b$$35, 0], JAM.policy.p3);
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
      var v4141 = a$$37 + "=";
      var v4616 = +d$$14[1] + 1;
      if (!v4616) {
        v4616 = 1;
      }
      b$$30 = JAM.call(b$$30.replace, b$$30, [c$$20, v4141 + v4616], JAM.policy.p3);
    }
    return b$$30;
  }
  function Q(a$$33) {
    this.b = a$$33;
    var v1944 = a$$33.google_iframe_oncopy;
    if (!v1944) {
      a$$33.google_iframe_oncopy = {handlers:{}, upd:JAM.call(p, null, [this.l, this], JAM.policy.p3)};
    }
    this.i = a$$33.google_iframe_oncopy;
    return;
  }
  function Ja(a$$32) {
    try {
      var b$$26 = JAM.call(Ia.test, Ia, [a$$32.location.host], JAM.policy.p3);
      var v4617 = !a$$32.postMessage;
      if (!v4617) {
        v4617 = !a$$32.localStorage;
      }
      var v4144 = v4617;
      if (!v4144) {
        v4144 = !a$$32.JSON;
      }
      var v3322 = v4144;
      if (!v3322) {
        v3322 = b$$26;
      }
      return!v3322;
    } catch (c$$18) {
      return!1;
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
    var v1949 = a$$30.google_page_url;
    if (v1949) {
      var v3323 = a$$30;
      var v5137 = String(a$$30.google_page_url);
      v3323.google_page_url = v5137;
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
      var v1951;
      if (16 > b$$24) {
        v1951 = e$$11 = e$$11 + "000";
      } else {
        var v3324;
        if (256 > b$$24) {
          v3324 = e$$11 = e$$11 + "00";
        } else {
          var v4147 = 4096 > b$$24;
          if (v4147) {
            v4147 = e$$11 = e$$11 + "0";
          }
          v3324 = v4147;
        }
        v1951 = v3324;
      }
      v1951;
      return JAM.set(P, a$$29, e$$11 + JAM.call(b$$24.toString, b$$24, [16], JAM.policy.p3), JAM.policy.p2);
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
        var v3327;
        var v4620 = isFinite(b$$22);
        if (v4620) {
          v4620 = !isNaN(b$$22);
        }
        if (v4620) {
          v3327 = b$$22;
        } else {
          v3327 = "null";
        }
        JAM.call(c$$17.push, c$$17, [v3327], JAM.policy.p3);
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
          var v1956 = f$$3 < d$$11;
          for (;v1956;) {
            JAM.call(c$$17.push, c$$17, [e$$10], JAM.policy.p3);
            O(a$$27, b$$22[f$$3], c$$17);
            e$$10 = ",";
            f$$3++;
            v1956 = f$$3 < d$$11;
          }
          JAM.call(c$$17.push, c$$17, ["]"], JAM.policy.p3);
          break;
        }
        JAM.call(c$$17.push, c$$17, ["{"], JAM.policy.p3);
        d$$11 = "";
        for (e$$10 in b$$22) {
          var v1958 = JAM.call(b$$22.hasOwnProperty, b$$22, [e$$10], JAM.policy.p3);
          if (v1958) {
            f$$3 = b$$22[e$$10];
            var v4151 = "function" != typeof f$$3;
            if (v4151) {
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
      var v1962 = a$$26 != a$$26.parent;
      for (;v1962;) {
        a$$26 = a$$26.parent;
        c$$16++;
        if (J(a$$26)) {
          b$$21 = a$$26;
        } else {
          break;
        }
        v1962 = a$$26 != a$$26.parent;
      }
      N = b$$21;
    }
    return N;
  }
  function Ca(a$$24) {
    function v7(a$$25, d$$10) {
      var v3331 = 0 === a$$25;
      if (!v3331) {
        v3331 = a$$25;
      }
      if (v3331) {
        var v3332 = b$$20;
        var v4153 = "&" + d$$10 + "=";
        var v4623;
        if ("function" == typeof encodeURIComponent) {
          v4623 = encodeURIComponent(a$$25);
        } else {
          v4623 = escape(a$$25);
        }
        b$$20 = v3332 + (v4153 + v4623);
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
      JAM.set(b$$18, d$$9, D[a$$22], JAM.policy.p2);
      return;
    }
    var b$$18 = a$$21 || {};
    G(za, v8);
    return;
  }
  function Aa(a$$20) {
    if (.01 > JAM.call(Math.random, Math, [], JAM.policy.p3)) {
      a$$20 = "/pagead/gen_204?id=jserror" + Ca(a$$20);
      a$$20 = C(A("", "googlesyndication"), a$$20);
      a$$20 = JAM.call(a$$20.substring, a$$20, [0, 2E3], JAM.policy.p3);
      var v1968 = D.google_image_requests;
      if (!v1968) {
        D.google_image_requests = [];
      }
      var v1969 = D.document;
      var b$$17 = JAM.call(v1969.createElement, v1969, ["img"], JAM.policy.p3);
      b$$17.src = a$$20;
      var v1970 = D.google_image_requests;
      JAM.call(v1970.push, v1970, [b$$17], JAM.policy.p3);
    }
    return;
  }
  function L(a$$19, b$$16, c$$15, d$$8, e$$9) {
    var v3336;
    if (fa) {
      v3336 = 1;
    } else {
      v3336 = 0;
    }
    var v1972 = v3336;
    var v3337;
    if (ga) {
      v3337 = 1;
    } else {
      v3337 = 0;
    }
    var v1973 = v3337;
    var v1974 = JAM.call(b$$16.substring, b$$16, [0, 512], JAM.policy.p3);
    var v3338 = e$$9;
    if (v3338) {
      v3338 = JAM.call(e$$9.substring, e$$9, [0, 40], JAM.policy.p3);
    }
    var v1975 = v3338;
    var v1976 = JAM.call(d$$8.toString, d$$8, [], JAM.policy.p3);
    var v3339 = pa.URL;
    var v1977 = JAM.call(v3339.substring, v3339, [0, 512], JAM.policy.p3);
    var v3340 = pa.referrer;
    a$$19 = {jscb:v1972, jscd:v1973, context:a$$19, msg:v1974, eid:v1975, file:c$$15, line:v1976, url:v1977, ref:JAM.call(v3340.substring, v3340, [0, 512], JAM.policy.p3)};
    Ba(a$$19);
    Aa(a$$19);
    return!ha;
  }
  function K(a$$18, b$$15, c$$14, d$$7) {
    try {
      JAM.call(c$$14, null, [], JAM.policy.p3);
    } catch (e$$8) {
      c$$14 = !ha;
      try {
        var f$$2 = JAM.call(e$$8.toString, e$$8, [], JAM.policy.p3);
        var v3341 = e$$8.name;
        if (v3341) {
          v3341 = -1 == JAM.call(f$$2.indexOf, f$$2, [e$$8.name], JAM.policy.p3);
        }
        var v1979 = v3341;
        if (v1979) {
          f$$2 = f$$2 + (": " + e$$8.name);
        }
        var v3342 = e$$8.message;
        if (v3342) {
          v3342 = -1 == JAM.call(f$$2.indexOf, f$$2, [e$$8.message], JAM.policy.p3);
        }
        var v1980 = v3342;
        if (v1980) {
          f$$2 = f$$2 + (": " + e$$8.message);
        }
        if (e$$8.stack) {
          var g$$2 = e$$8.stack;
          var l$$1 = f$$2;
          try {
            var v1981 = -1 == JAM.call(g$$2.indexOf, g$$2, [l$$1], JAM.policy.p3);
            if (v1981) {
              g$$2 = l$$1 + "\n" + g$$2;
            }
            var h$$5;
            var v1982 = g$$2 != h$$5;
            for (;v1982;) {
              h$$5 = g$$2;
              g$$2 = JAM.call(g$$2.replace, g$$2, [/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1"], JAM.policy.p3);
              v1982 = g$$2 != h$$5;
            }
            f$$2 = JAM.call(g$$2.replace, g$$2, [/\n */g, "\n"], JAM.policy.p3);
          } catch (k) {
            f$$2 = l$$1;
          }
        }
        g$$2 = "";
        var v1984 = e$$8.fileName;
        if (v1984) {
          g$$2 = e$$8.fileName;
        }
        h$$5 = -1;
        var v1985 = e$$8.lineNumber;
        if (v1985) {
          h$$5 = e$$8.lineNumber;
        }
        var m;
        t: {
          try {
            var v1986;
            if (d$$7) {
              v1986 = JAM.call(d$$7, null, [], JAM.policy.p3);
            } else {
              v1986 = "";
            }
            m = v1986;
            break t;
          } catch (q) {
          }
          m = "";
        }
        c$$14 = JAM.call(b$$15, null, [a$$18, f$$2, g$$2, h$$5, m], JAM.policy.p3);
      } catch (x$$47) {
        var v4159 = JAM.call(x$$47.toString, x$$47, [], JAM.policy.p3) + "\n";
        var v4629 = x$$47.stack;
        if (!v4629) {
          v4629 = "";
        }
        Aa({context:"protectAndRun", msg:v4159 + v4629});
      }
      if (!c$$14) {
        throw e$$8;
      }
    }
    return;
  }
  function J(a$$17) {
    try {
      var v1989 = !!a$$17.location.href;
      if (!v1989) {
        v1989 = "" === a$$17.location.href;
      }
      return v1989;
    } catch (b$$14) {
      return!1;
    }
    return;
  }
  function ya(a$$16, b$$13, c$$13) {
    b$$13 = [b$$13.google_ad_slot, b$$13.google_ad_format, b$$13.google_ad_type, b$$13.google_ad_width, b$$13.google_ad_height];
    if (c$$13) {
      c$$13 = [];
      var d$$6 = 0;
      var v3349 = a$$16;
      if (v3349) {
        v3349 = 25 > d$$6;
      }
      var v1996 = v3349;
      for (;v1996;) {
        var v4163 = 9 != a$$16.nodeType;
        if (v4163) {
          v4163 = a$$16.id;
        }
        var v3350 = v4163;
        if (!v3350) {
          v3350 = "";
        }
        JAM.call(c$$13.push, c$$13, [v3350], JAM.policy.p3);
        a$$16 = a$$16.parentNode;
        ++d$$6;
        var v3351 = a$$16;
        if (v3351) {
          v3351 = 25 > d$$6;
        }
        v1996 = v3351;
      }
      var v1997 = a$$16 = JAM.call(c$$13.join, c$$13, [], JAM.policy.p3);
      if (v1997) {
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
      var v1998 = d$$6 < a$$16;
      for (;v1998;) {
        c$$13 = c$$13 ^ (c$$13 << 5) + (c$$13 >> 2) + JAM.call(b$$13.charCodeAt, b$$13, [d$$6], JAM.policy.p3) & 4294967295;
        d$$6++;
        v1998 = d$$6 < a$$16;
      }
      var v1999;
      if (0 < c$$13) {
        v1999 = c$$13;
      } else {
        v1999 = 4294967296 + c$$13;
      }
      b$$13 = v1999;
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
        var v4166 = c$$12;
        if (v4166) {
          v4166 = c$$12 != a$$15;
        }
        var v3356 = v4166;
        if (v3356) {
          v3356 = 25 > d$$5;
        }
        var v2003 = v3356;
        for (;v2003;) {
          var e$$7 = c$$12.frames;
          var f$$1 = 0;
          var v2002 = f$$1 < e$$7.length;
          for (;v2002;) {
            if (a$$15 == e$$7[f$$1]) {
              JAM.call(b$$12.push, b$$12, [f$$1], JAM.policy.p3);
              break;
            }
            ++f$$1;
            v2002 = f$$1 < e$$7.length;
          }
          a$$15 = c$$12;
          c$$12 = a$$15.parent;
          ++d$$5;
          var v4167 = c$$12;
          if (v4167) {
            v4167 = c$$12 != a$$15;
          }
          var v3360 = v4167;
          if (v3360) {
            v3360 = 25 > d$$5;
          }
          v2003 = v3360;
        }
      } catch (g$$1) {
      }
    }
    return JAM.call(b$$12.join, b$$12, [], JAM.policy.p3);
  }
  function wa(a$$14) {
    var b$$11 = [];
    var c$$11 = 0;
    var v3361 = a$$14;
    if (v3361) {
      v3361 = 25 > c$$11;
    }
    var v2011 = v3361;
    for (;v2011;) {
      var v2004 = 9 != a$$14.nodeType;
      if (v2004) {
        v2004 = a$$14.id;
      }
      var d$$4 = v2004;
      var v2005;
      if (d$$4) {
        v2005 = "/" + d$$4;
      } else {
        v2005 = "";
      }
      d$$4 = v2005;
      var e$$6;
      t: {
        var f = a$$14.parentElement;
        var v2006 = a$$14.nodeName;
        e$$6 = JAM.call(v2006.toLowerCase, v2006, [], JAM.policy.p3);
        if (f) {
          f = f.childNodes;
          var g = 0;
          var l = 0;
          var v2009 = l < f.length;
          for (;v2009;) {
            var h$$4 = f[l];
            var v3364 = h$$4.nodeName;
            if (v3364) {
              var v4634 = h$$4.nodeName;
              v3364 = JAM.call(v4634.toLowerCase, v4634, [], JAM.policy.p3) == e$$6;
            }
            if (v3364) {
              if (a$$14 == h$$4) {
                e$$6 = "." + g;
                break t;
              }
              ++g;
            }
            ++l;
            v2009 = l < f.length;
          }
        }
        e$$6 = "";
      }
      var v4635 = a$$14.nodeName;
      if (v4635) {
        var v4863 = a$$14.nodeName;
        v4635 = JAM.call(v4863.toLowerCase, v4863, [], JAM.policy.p3);
      }
      JAM.call(b$$11.push, b$$11, [v4635 + d$$4 + e$$6], JAM.policy.p3);
      a$$14 = a$$14.parentElement;
      ++c$$11;
      var v3367 = a$$14;
      if (v3367) {
        v3367 = 25 > c$$11;
      }
      v2011 = v3367;
    }
    return JAM.call(b$$11.join, b$$11, [], JAM.policy.p3);
  }
  function va(a$$13) {
    var v2012;
    if (a$$13.google_unique_id) {
      v2012 = a$$13.google_unique_id = a$$13.google_unique_id + 1;
    } else {
      v2012 = a$$13.google_unique_id = 1;
    }
    v2012;
    return;
  }
  function I(a$$12, b$$10) {
    if (!(1E-4 > JAM.call(Math.random, Math, [], JAM.policy.p3))) {
      var c$$10 = JAM.call(Math.random, Math, [], JAM.policy.p3);
      if (c$$10 < b$$10) {
        try {
          var d$$3 = new Uint16Array(1);
          var v2013 = window.crypto;
          JAM.call(v2013.getRandomValues, v2013, [d$$3], JAM.policy.p3);
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
      var v2019 = c$$9 < d$$2;
      for (;v2019;) {
        JAM.call(a$$11.push, a$$11, [arguments[c$$9]], JAM.policy.p3);
        ++c$$9;
        v2019 = c$$9 < d$$2;
      }
    }
    return;
  }
  function H(a$$10) {
    var v3372 = !!a$$10;
    if (v3372) {
      v3372 = "function" == typeof a$$10;
    }
    var v2021 = v3372;
    if (v2021) {
      v2021 = !!a$$10.call;
    }
    return v2021;
  }
  function G(a$$9, b$$8) {
    var c$$8;
    for (c$$8 in a$$9) {
      var v3374 = Object.prototype.hasOwnProperty;
      var v2022 = JAM.call(v3374.call, v3374, [a$$9, c$$8], JAM.policy.p3);
      if (v2022) {
        JAM.call(b$$8.call, b$$8, [null, a$$9[c$$8], c$$8, a$$9], JAM.policy.p3);
      }
    }
    return;
  }
  function C(a$$8, b$$7, c$$7) {
    if (!c$$7) {
      var v3376;
      if (ia) {
        v3376 = "https";
      } else {
        v3376 = "http";
      }
      c$$7 = v3376;
    }
    var v2023 = [c$$7, "://", a$$8, b$$7];
    return JAM.call(v2023.join, v2023, [""], JAM.policy.p3);
  }
  function A(a$$7, b$$6) {
    if (!a$$7) {
      return b$$6;
    }
    var c$$6 = JAM.call(a$$7.match, a$$7, [ea], JAM.policy.p3);
    var v2025;
    if (c$$6) {
      v2025 = c$$6[0];
    } else {
      v2025 = b$$6;
    }
    return v2025;
  }
  function z$$2(a$$6) {
    var v2026;
    if (JAM.call(/^true$/.test, /^true$/, [a$$6], JAM.policy.p3)) {
      v2026 = !0;
    } else {
      v2026 = !1;
    }
    return v2026;
  }
  function w$$5(a$$5) {
    a$$5 = parseFloat(a$$5);
    var v2027;
    var v4636 = isNaN(a$$5);
    if (!v4636) {
      v4636 = 1 < a$$5;
    }
    var v4178 = v4636;
    if (!v4178) {
      v4178 = 0 > a$$5;
    }
    if (v4178) {
      v2027 = 0;
    } else {
      v2027 = a$$5;
    }
    return v2027;
  }
  function da(a$$4, b$$4) {
    function v9() {
      var b$$5 = JAM.call(c$$5.slice, c$$5, [], JAM.policy.p3);
      var v2028 = b$$5.push;
      JAM.call(v2028.apply, v2028, [b$$5, arguments], JAM.policy.p3);
      return JAM.call(a$$4.apply, a$$4, [this, b$$5], JAM.policy.p3);
    }
    var v2029 = Array.prototype.slice;
    var c$$5 = JAM.call(v2029.call, v2029, [arguments, 1], JAM.policy.p3);
    return v9;
  }
  function p(a$$3, b$$3, c$$4) {
    var v2030;
    var v4179 = Function.prototype.bind;
    if (v4179) {
      var v4974 = Function.prototype.bind;
      var v4865 = JAM.call(v4974.toString, v4974, [], JAM.policy.p3);
      v4179 = -1 != JAM.call(v4865.indexOf, v4865, ["native code"], JAM.policy.p3);
    }
    if (v4179) {
      v2030 = ba;
    } else {
      v2030 = ca;
    }
    p = v2030;
    return JAM.call(p.apply, p, [null, arguments], JAM.policy.p3);
  }
  function ca(a$$2, b$$2, c$$2) {
    function v11() {
      return JAM.call(a$$2.apply, a$$2, [b$$2, arguments], JAM.policy.p3);
    }
    function v10() {
      var v2031 = Array.prototype.slice;
      var c$$3 = JAM.call(v2031.call, v2031, [arguments], JAM.policy.p3);
      var v2032 = Array.prototype.unshift;
      JAM.call(v2032.apply, v2032, [c$$3, d$$1], JAM.policy.p3);
      return JAM.call(a$$2.apply, a$$2, [b$$2, c$$3], JAM.policy.p3);
    }
    if (!a$$2) {
      throw Error();
    }
    if (2 < arguments.length) {
      var v2034 = Array.prototype.slice;
      var d$$1 = JAM.call(v2034.call, v2034, [arguments, 2], JAM.policy.p3);
      return v10;
    }
    return v11;
  }
  function ba(a$$1, b$$1, c$$1) {
    var v2036 = a$$1.call;
    return JAM.call(v2036.apply, v2036, [a$$1.bind, arguments], JAM.policy.p3);
  }
  function aa(a, b) {
    var c = JAM.call(a.split, a, ["."], JAM.policy.p3);
    var d = n$$1;
    var v3386 = c[0] in d;
    if (!v3386) {
      v3386 = !d.execScript;
    }
    var v2038 = v3386;
    if (!v2038) {
      JAM.call(d.execScript, d, ["var " + c[0]], JAM.policy.p3);
    }
    var e$$4;
    var v3389 = c.length;
    if (v3389) {
      v3389 = e$$4 = JAM.call(c.shift, c, [], JAM.policy.p3);
    }
    var v2040 = v3389;
    for (;v2040;) {
      var v2039;
      var v4184 = c.length;
      if (!v4184) {
        v4184 = void 0 === b;
      }
      if (v4184) {
        var v3390;
        if (d[e$$4]) {
          v3390 = d[e$$4];
        } else {
          v3390 = JAM.set(d, e$$4, {}, JAM.policy.p2);
        }
        v2039 = d = v3390;
      } else {
        v2039 = JAM.set(d, e$$4, b, JAM.policy.p2);
      }
      v2039;
      var v3392 = c.length;
      if (v3392) {
        v3392 = e$$4 = JAM.call(c.shift, c, [], JAM.policy.p3);
      }
      v2040 = v3392;
    }
    return;
  }
  var n$$1 = this;
  var v2041 = new Date;
  var v = JAM.call(v2041.getTime, v2041, [], JAM.policy.p3);
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
  var v2042;
  if (JAM.call(/\uffff/.test, /\uffff/, ["\uffff"], JAM.policy.p3)) {
    v2042 = /[\\\"\x00-\x1f\x7f-\uffff]/g;
  } else {
    v2042 = /[\\\"\x00-\x1f\x7f-\xff]/g;
  }
  var Ga = v2042;
  var Ia = /\.((google(|groups|mail|images|print))|gmail)\./;
  var Ka;
  var R = "var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
  var v2043 = JAM.call(/[&<>\"]/.test, /[&<>\"]/, [R], JAM.policy.p3);
  if (v2043) {
    var v4866 = -1 != JAM.call(R.indexOf, R, ["&"], JAM.policy.p3);
    if (v4866) {
      R = JAM.call(R.replace, R, [qa, "&amp;"], JAM.policy.p3);
    }
    var v4867 = -1 != JAM.call(R.indexOf, R, ["<"], JAM.policy.p3);
    if (v4867) {
      R = JAM.call(R.replace, R, [ra, "&lt;"], JAM.policy.p3);
    }
    var v4642 = -1 != JAM.call(R.indexOf, R, [">"], JAM.policy.p3);
    if (v4642) {
      R = JAM.call(R.replace, R, [sa, "&gt;"], JAM.policy.p3);
    }
    var v4186 = -1 != JAM.call(R.indexOf, R, ['"'], JAM.policy.p3);
    if (v4186) {
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
  var v3394;
  if (n$$1.navigator) {
    v3394 = n$$1.navigator.userAgent;
  } else {
    v3394 = null;
  }
  if (V = v3394) {
    var Oa = n$$1.navigator;
    S = 0 == JAM.call(V.lastIndexOf, V, ["Opera", 0], JAM.policy.p3);
    var v2048 = !S;
    if (v2048) {
      var v3395 = -1 != JAM.call(V.indexOf, V, ["MSIE"], JAM.policy.p3);
      if (!v3395) {
        v3395 = -1 != JAM.call(V.indexOf, V, ["Trident"], JAM.policy.p3);
      }
      v2048 = v3395;
    }
    T = v2048;
    var v2049 = !S;
    if (v2049) {
      v2049 = -1 != JAM.call(V.indexOf, V, ["WebKit"], JAM.policy.p3);
    }
    U = v2049;
    var v4192 = !S;
    if (v4192) {
      v4192 = !U;
    }
    var v3397 = v4192;
    if (v3397) {
      v3397 = !T;
    }
    var v2050 = v3397;
    if (v2050) {
      v2050 = "Gecko" == Oa.product;
    }
    Ma = v2050;
  }
  var Pa = T;
  var Qa = Ma;
  var Ra = U;
  var W;
  var v3399 = S;
  if (v3399) {
    v3399 = n$$1.opera;
  }
  if (v3399) {
    var Sa = n$$1.opera.version;
    var v2053 = "function" == typeof Sa;
    if (v2053) {
      JAM.call(Sa, null, [], JAM.policy.p3);
    }
  } else {
    var v3401;
    if (Qa) {
      v3401 = W = /rv\:([^\);]+)(\)|;)/;
    } else {
      var v4193;
      if (Pa) {
        v4193 = W = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/;
      } else {
        var v4644 = Ra;
        if (v4644) {
          v4644 = W = /WebKit\/(\S+)/;
        }
        v4193 = v4644;
      }
      v3401 = v4193;
    }
    v3401;
    if (W) {
      var v4645;
      if (n$$1.navigator) {
        v4645 = n$$1.navigator.userAgent;
      } else {
        v4645 = null;
      }
      JAM.call(W.exec, W, [v4645], JAM.policy.p3);
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
