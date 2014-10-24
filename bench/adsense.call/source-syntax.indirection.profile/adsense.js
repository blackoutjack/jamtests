
JAM.startProfile('load');
function v254() {
  function v253() {
    var a$$530 = v$$1;
    var b$$402 = JAM.call(a$$530.createElement, a$$530, ["script"], JAM.policy.p4);
    b$$402.async = !0;
    b$$402.type = "text/javascript";
    var v255 = b$$402;
    var v5108 = JAM.call(di, null, [], JAM.policy.p4);
    v255.src = v5108;
    var v256 = JAM.call(a$$530.getElementsByTagName, a$$530, ["script"], JAM.policy.p4);
    a$$530 = v256[0];
    var v257 = a$$530.parentNode;
    JAM.call(v257.insertBefore, v257, [b$$402, a$$530], JAM.policy.p4);
    return;
  }
  function v252(a$$527) {
    function b$$401(a$$528) {
      var v258;
      var v4245 = void 0;
      var v3451 = v4245 !== a$$528;
      if (v3451) {
        v3451 = null !== a$$528;
      }
      var v2109 = v3451;
      if (v2109) {
        var v4246 = JAM.call(Math.max, Math, [a$$528, -30], JAM.policy.p4);
        a$$528 = JAM.call(Math.min, Math, [v4246, 30], JAM.policy.p4);
        var v4708 = a$$528 + 30;
        var v4247 = 546 * v4708;
        a$$528 = JAM.call(Math.round, Math, [v4247], JAM.policy.p4);
        var v4248 = a$$528 / 256;
        var v3452 = JAM.call(Math.floor, Math, [v4248], JAM.policy.p4);
        var v3453 = a$$528 % 256;
        v258 = [v3452, v3453];
      } else {
        v258 = [128, 0];
      }
      return v258;
    }
    var c$$270 = [];
    if (a$$527) {
      var v3454 = a$$527.x;
      var v2110 = JAM.call(b$$401, null, [v3454], JAM.policy.p4);
      var v3455 = a$$527.y;
      var v2111 = JAM.call(b$$401, null, [v3455], JAM.policy.p4);
      var v259 = JAM.call(v2110.concat, v2110, [v2111], JAM.policy.p4);
      var v2112 = a$$527.z;
      var v260 = JAM.call(b$$401, null, [v2112], JAM.policy.p4);
      c$$270 = JAM.call(v259.concat, v259, [v260], JAM.policy.p4);
    } else {
      a$$527 = 0;
      var v262 = 3 > a$$527;
      for (;v262;) {
        var v261 = [128, 0];
        c$$270 = JAM.call(c$$270.concat, c$$270, [v261], JAM.policy.p4);
        a$$527 = a$$527 + 1;
        v262 = 3 > a$$527;
      }
    }
    return c$$270;
  }
  function v251(a$$525) {
    function b$$400(a$$526) {
      var v263;
      var v4249 = void 0;
      var v3456 = v4249 !== a$$526;
      if (v3456) {
        v3456 = null !== a$$526;
      }
      var v2113 = v3456;
      if (v2113) {
        a$$526 = a$$526 + 360;
        var v4250 = a$$526 / 256;
        var v3457 = JAM.call(Math.floor, Math, [v4250], JAM.policy.p4);
        var v3458 = a$$526 % 256;
        v263 = [v3457, v3458];
      } else {
        v263 = [128, 0];
      }
      return v263;
    }
    var c$$269 = [];
    if (a$$525) {
      var v3459 = a$$525.beta;
      var v2114 = JAM.call(b$$400, null, [v3459], JAM.policy.p4);
      var v3460 = a$$525.gamma;
      var v2115 = JAM.call(b$$400, null, [v3460], JAM.policy.p4);
      var v264 = JAM.call(v2114.concat, v2114, [v2115], JAM.policy.p4);
      var v2116 = a$$525.alpha;
      var v265 = JAM.call(b$$400, null, [v2116], JAM.policy.p4);
      c$$269 = JAM.call(v264.concat, v264, [v265], JAM.policy.p4);
    } else {
      a$$525 = 0;
      var v267 = 3 > a$$525;
      for (;v267;) {
        var v266 = [128, 0];
        c$$269 = JAM.call(c$$269.concat, c$$269, [v266], JAM.policy.p4);
        a$$525 = a$$525 + 1;
        v267 = 3 > a$$525;
      }
    }
    return c$$269;
  }
  function v250() {
    var v3461 = this.t;
    var v2117 = v3461.j;
    var v268 = v2117.deviceOrientation;
    var a$$524 = JAM.call(this.Eb, this, [v268], JAM.policy.p4);
    var v3462 = this.t;
    var v2118 = v3462.j;
    var v269 = v2118.deviceAccelerationWithoutGravity;
    var b$$399 = JAM.call(this.Ea, this, [v269], JAM.policy.p4);
    var v3463 = this.t;
    var v2119 = v3463.j;
    var v270 = v2119.deviceAccelerationWithGravity;
    var c$$268 = JAM.call(this.Ea, this, [v270], JAM.policy.p4);
    a$$524 = JAM.call(a$$524.concat, a$$524, [b$$399, c$$268], JAM.policy.p4);
    var JSCompiler_inline_result$$53;
    var a$$inline_399 = a$$524;
    var v2120 = JAM.call(ca$$1, null, [a$$inline_399], JAM.policy.p4);
    var v271 = !v2120;
    if (v271) {
      throw JAM.call(Error, null, ["encodeByteArray takes an array as a parameter"], JAM.policy.p4);
    }
    var v273 = !Qh;
    if (v273) {
      Qh = {};
      Rh = {};
      var a$$inline_643 = 0;
      var v272 = 65 > a$$inline_643;
      for (;v272;) {
        var v2121 = Qh;
        var v2122 = a$$inline_643;
        var v5109 = JAM.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", [a$$inline_643], JAM.policy.p4);
        introspect(JAM.policy.p2) {
          v2121[v2122] = v5109;
        }
        var v2123 = Rh;
        var v2124 = a$$inline_643;
        var v5110 = JAM.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.", [a$$inline_643], JAM.policy.p4);
        introspect(JAM.policy.p2) {
          v2123[v2124] = v5110;
        }
        a$$inline_643 = a$$inline_643 + 1;
        v272 = 65 > a$$inline_643;
      }
    }
    var v274;
    var v2125 = !0;
    if (v2125) {
      v274 = Rh;
    } else {
      v274 = Qh;
    }
    var c$$inline_401 = v274;
    var d$$inline_402 = [];
    var e$$inline_403 = 0;
    var v2126 = a$$inline_399.length;
    var v289 = e$$inline_403 < v2126;
    for (;v289;) {
      var f$$inline_404 = a$$inline_399[e$$inline_403];
      var v275 = e$$inline_403 + 1;
      var v276 = a$$inline_399.length;
      var g$$inline_405 = v275 < v276;
      var v277;
      if (g$$inline_405) {
        var v2127 = e$$inline_403 + 1;
        v277 = a$$inline_399[v2127];
      } else {
        v277 = 0;
      }
      var h$$inline_406 = v277;
      var v278 = e$$inline_403 + 2;
      var v279 = a$$inline_399.length;
      var k$$inline_407 = v278 < v279;
      var v280;
      if (k$$inline_407) {
        var v2128 = e$$inline_403 + 2;
        v280 = a$$inline_399[v2128];
      } else {
        v280 = 0;
      }
      var l$$inline_408 = v280;
      var z$$inline_409 = f$$inline_404 >> 2;
      var v2129 = f$$inline_404 & 3;
      var v281 = v2129 << 4;
      var v282 = h$$inline_406 >> 4;
      f$$inline_404 = v281 | v282;
      var v2130 = h$$inline_406 & 15;
      var v283 = v2130 << 2;
      var v284 = l$$inline_408 >> 6;
      h$$inline_406 = v283 | v284;
      l$$inline_408 = l$$inline_408 & 63;
      var v2131 = !k$$inline_407;
      if (v2131) {
        l$$inline_408 = 64;
        var v4251 = !g$$inline_405;
        if (v4251) {
          h$$inline_406 = 64;
        }
      }
      var v285 = c$$inline_401[z$$inline_409];
      var v286 = c$$inline_401[f$$inline_404];
      var v287 = c$$inline_401[h$$inline_406];
      var v288 = c$$inline_401[l$$inline_408];
      JAM.call(d$$inline_402.push, d$$inline_402, [v285, v286, v287, v288], JAM.policy.p4);
      e$$inline_403 = e$$inline_403 + 3;
      var v2132 = a$$inline_399.length;
      v289 = e$$inline_403 < v2132;
    }
    JSCompiler_inline_result$$53 = JAM.call(d$$inline_402.join, d$$inline_402, [""], JAM.policy.p4);
    return JSCompiler_inline_result$$53;
  }
  function v249() {
    var v4940 = this.t;
    var v4709 = v4940.j;
    var v4252 = v4709.deviceAccelerationWithGravity;
    var v3464 = !v4252;
    var v2133 = !v3464;
    var v3466 = !v2133;
    if (v3466) {
      var v4941 = this.t;
      var v4710 = v4941.j;
      var v4253 = v4710.deviceAccelerationWithoutGravity;
      var v3465 = !v4253;
      v2133 = !v3465;
    }
    var v290 = v2133;
    var v2135 = !v290;
    if (v2135) {
      var v4711 = this.t;
      var v4254 = v4711.j;
      var v3467 = v4254.deviceOrientation;
      var v2134 = !v3467;
      v290 = !v2134;
    }
    return v290;
  }
  function v248() {
    var v291 = this.j;
    var v2136 = JAM.new(Date, [], JAM.policy.p4);
    var v5111 = JAM.call(v2136.getTime, v2136, [], JAM.policy.p4);
    v291.stopTimeStamp = v5111;
    return;
  }
  function v247() {
    var v292 = this.j;
    var v2137 = JAM.new(Date, [], JAM.policy.p4);
    var v5112 = JAM.call(v2137.getTime, v2137, [], JAM.policy.p4);
    v292.startTimeStamp = v5112;
    return;
  }
  function v246() {
    var v4255 = this.j;
    var v3468 = v4255.sensorsExperiment;
    var v2138 = "ds_wfea" === v3468;
    if (v2138) {
      var v3469 = this.j;
      v2138 = v3469.isDeviceOrientationEventListenerRegistered;
    }
    var v293 = v2138;
    if (v293) {
      var v3470 = this.j;
      var v2139 = v3470.deviceOrientation;
      v293 = !v2139;
    }
    return v293;
  }
  function v245() {
    var v4712 = this.j;
    var v4256 = v4712.sensorsExperiment;
    var v3471 = "ds_wfea" === v4256;
    if (v3471) {
      var v4257 = this.j;
      v3471 = v4257.isDeviceMotionEventListenerRegistered;
    }
    var v2140 = v3471;
    if (v2140) {
      var v4258 = this.j;
      var v3472 = v4258.deviceAccelerationWithGravity;
      v2140 = !v3472;
    }
    var v294 = v2140;
    if (v294) {
      var v3473 = this.j;
      var v2141 = v3473.deviceAccelerationWithoutGravity;
      v294 = !v2141;
    }
    return v294;
  }
  function v244() {
    var v295 = JAM.call(this.O, this, [], JAM.policy.p4);
    var v2142 = !v295;
    if (v2142) {
      v295 = JAM.call(this.P, this, [], JAM.policy.p4);
    }
    return v295;
  }
  function v243(a$$517, b$$394) {
    function v242() {
      c$$264.didDeviceMotionCallbacksTimeoutExpire = !0;
      return;
    }
    var c$$264 = this.j;
    var v296 = c$$264.deviceMotionEventCallbacks;
    JAM.call(Nh, null, [v296, a$$517, b$$394, v242], JAM.policy.p4);
    return;
  }
  function v241(a$$516, b$$393) {
    function v240() {
      c$$263.didDeviceOrientationCallbacksTimeoutExpire = !0;
      return;
    }
    var c$$263 = this.j;
    var v297 = c$$263.deviceOrientationEventCallbacks;
    JAM.call(Nh, null, [v297, a$$516, b$$393, v240], JAM.policy.p4);
    return;
  }
  function v239() {
    var v298;
    var v4259 = this.j;
    var v3474 = v4259.startTimeStamp;
    if (v3474) {
      var v4260 = this.j;
      v3474 = v4260.stopTimeStamp;
    }
    var v2145 = v3474;
    if (v2145) {
      var v3475 = this.j;
      var v2143 = v3475.stopTimeStamp;
      var v3476 = this.j;
      var v2144 = v3476.startTimeStamp;
      v298 = v2143 - v2144;
    } else {
      v298 = null;
    }
    return v298;
  }
  function v238() {
    var v299 = this.j;
    return v299.deviceOrientation;
  }
  function v237() {
    var v300 = this.j;
    return v300.deviceAccelerationWithoutGravity;
  }
  function v236() {
    var v301 = this.j;
    return v301.deviceAccelerationWithGravity;
  }
  function v235() {
    var v302 = this.j;
    return v302.didDeviceOrientationCallbacksTimeoutExpire;
  }
  function v234() {
    var v303 = this.j;
    return v303.didDeviceMotionCallbacksTimeoutExpire;
  }
  function v233(a$$502) {
    var b$$381 = this.G;
    a$$502.iclk_url = b$$381.iclk_url;
    var v304 = b$$381.iclk_ltx;
    if (v304) {
      a$$502.iclk_ltx = b$$381.iclk_ltx;
    }
    var v305 = b$$381.iclk_ltl;
    if (v305) {
      a$$502.iclk_ltl = b$$381.iclk_ltl;
    }
    return;
  }
  function v232() {
    try {
      var a$$501 = {msg_type:"i-prepare"};
      JAM.call(this.Bc, this, [a$$501], JAM.policy.p4);
      var v2146 = this.s;
      var v306 = v2146.contentWindow;
      var v3477 = void 0;
      var v2147 = JAM.new(hg, [v3477], JAM.policy.p4);
      var v307 = JAM.call(v2147.serialize, v2147, [a$$501], JAM.policy.p4);
      JAM.call(v306.postMessage, v306, [v307, "http://doubleclick"], JAM.policy.p4);
      return!0;
    } catch (b$$380) {
    }
    return!1;
  }
  function v231(a$$500) {
    var v308 = this.G;
    var v5113 = JAM.call(a$$500.getAttribute, a$$500, ["href"], JAM.policy.p4);
    v308.iclk_url = v5113;
    var JSCompiler_temp_const$$57 = this.G;
    var JSCompiler_inline_result$$58;
    var a$$inline_379 = a$$500;
    var v2148 = Xc;
    if (v2148) {
      v2148 = "innerText" in a$$inline_379;
    }
    var v311 = v2148;
    if (v311) {
      var v309 = a$$inline_379.innerText;
      a$$inline_379 = JAM.call(v309.replace, v309, [/(\r\n|\r|\n)/g, "\n"], JAM.policy.p4);
    } else {
      var b$$inline_380 = [];
      var v310 = !0;
      JAM.call(ud, null, [a$$inline_379, b$$inline_380, v310], JAM.policy.p4);
      a$$inline_379 = JAM.call(b$$inline_380.join, b$$inline_380, [""], JAM.policy.p4);
    }
    var v312 = JAM.call(a$$inline_379.replace, a$$inline_379, [/ \xAD /g, " "], JAM.policy.p4);
    a$$inline_379 = JAM.call(v312.replace, v312, [/\xAD/g, ""], JAM.policy.p4);
    a$$inline_379 = JAM.call(a$$inline_379.replace, a$$inline_379, [/\u200B/g, ""], JAM.policy.p4);
    var v2149 = !Xc;
    if (v2149) {
      a$$inline_379 = JAM.call(a$$inline_379.replace, a$$inline_379, [/ +/g, " "], JAM.policy.p4);
    }
    var v313 = " " != a$$inline_379;
    if (v313) {
      a$$inline_379 = JAM.call(a$$inline_379.replace, a$$inline_379, [/^\s*/, ""], JAM.policy.p4);
    }
    JSCompiler_inline_result$$58 = a$$inline_379;
    JSCompiler_temp_const$$57.iclk_ltx = JSCompiler_inline_result$$58;
    var v314 = a$$500 = JAM.call(a$$500.getAttribute, a$$500, ["title"], JAM.policy.p4);
    if (v314) {
      var v2150 = this.G;
      v2150.iclk_ltl = a$$500;
    }
    return;
  }
  function v230() {
    var v2151 = this.Va;
    var v315 = JAM.call(r$$2, null, [v2151, this], JAM.policy.p4);
    var a$$499 = JAM.call(xe, null, ["ias::nav", v315], JAM.policy.p4);
    var v316 = this.i;
    var v5114 = JAM.call(v316.setTimeout, v316, [a$$499, 1E3], JAM.policy.p4);
    this.Jc = v5114;
    return;
  }
  function v229(a$$498) {
    var v317 = JAM.call(this.T, this, [], JAM.policy.p4);
    if (v317) {
      JAM.call(a$$498.preventDefault, a$$498, [], JAM.policy.p4);
      return!1;
    }
    var v2152 = a$$498;
    if (v2152) {
      v2152 = a$$498.target;
    }
    var v318 = v2152;
    if (v318) {
      var v2153 = a$$498.target;
      v318 = v2153.href;
    }
    var b$$379 = v318;
    var v319 = this.i;
    var c$$253 = JAM.call(og, null, [v319], JAM.policy.p4);
    var v2154 = !b$$379;
    var v3478 = !v2154;
    if (v3478) {
      v2154 = !c$$253;
    }
    var v320 = v2154;
    if (v320) {
      return!0;
    }
    var v321 = a$$498.target;
    JAM.call(this.uc, this, [v321], JAM.policy.p4);
    var v2155 = JAM.call(this.wc, this, [], JAM.policy.p4);
    var v322 = !v2155;
    if (v322) {
      return!0;
    }
    JAM.call(this.qc, this, [], JAM.policy.p4);
    JAM.call(a$$498.preventDefault, a$$498, [], JAM.policy.p4);
    return!1;
  }
  function v228() {
    var v2156 = this.i;
    var v323 = v2156.location;
    var v5115 = JAM.call(this.T, this, [], JAM.policy.p4);
    v323.href = v5115;
    return;
  }
  function v227() {
    var v324 = this.Z;
    var v2157 = !v324;
    if (v2157) {
      this.Z = !0;
      var v4261 = this.i;
      var v4262 = this.Jc;
      JAM.call(v4261.clearTimeout, v4261, [v4262], JAM.policy.p4);
      JAM.call(this.Va, this, [], JAM.policy.p4);
    }
    return;
  }
  function v226() {
    var v2158 = this.Z;
    var v331 = !v2158;
    if (v331) {
      this.Z = !0;
      var v325 = this.i;
      var v326 = this.Jc;
      JAM.call(v325.clearTimeout, v325, [v326], JAM.policy.p4);
      var v327 = this.Zb;
      var v328 = JAM.call(this.T, this, [], JAM.policy.p4);
      JAM.call(v327.A, v327, [v328], JAM.policy.p4);
      var a$$497 = {msg_type:"i-view"};
      var v2159 = this.s;
      var v329 = v2159.contentWindow;
      var v3479 = void 0;
      var v2160 = JAM.new(hg, [v3479], JAM.policy.p4);
      var v330 = JAM.call(v2160.serialize, v2160, [a$$497], JAM.policy.p4);
      JAM.call(v329.postMessage, v329, [v330, "http://doubleclick"], JAM.policy.p4);
    }
    return;
  }
  function v225() {
    var v2161 = this.H;
    var v334 = !v2161;
    if (v334) {
      this.H = !0;
      var v2162 = this.dc;
      var v332 = JAM.call(r$$2, null, [v2162, this], JAM.policy.p4);
      var a$$496 = JAM.call(ye, null, ["ias::chdlr", v332], JAM.policy.p4);
      var v333 = this.Zb;
      JAM.call(v333.mb, v333, [a$$496], JAM.policy.p4);
    }
    return;
  }
  function v224() {
    var v2163 = this.G;
    var v335 = v2163.iclk_url;
    var v2164 = !v335;
    if (v2164) {
      v335 = null;
    }
    return v335;
  }
  function v223(a$$495) {
    a$$495["i-fill"] = this.Hb;
    a$$495["i-go"] = this.Nb;
    a$$495["i-no"] = this.Mb;
    return;
  }
  function v222(a$$493) {
    var b$$377 = JAM.call(this.u, this, [], JAM.policy.p4);
    if (b$$377) {
      var v2165 = b$$377.style;
      var v3480;
      if (a$$493) {
        v3480 = "block";
      } else {
        v3480 = "none";
      }
      v2165.display = v3480;
    }
    return;
  }
  function v221() {
    var a$$492 = JAM.call(this.ba, this, [], JAM.policy.p4);
    var v2166 = a$$492;
    if (v2166) {
      var v4263 = a$$492.length;
      var v3481 = 2 > v4263;
      v2166 = !v3481;
    }
    var v344 = v2166;
    if (v344) {
      var v2167 = a$$492.length;
      var v336 = v2167 - 1;
      var b$$376 = a$$492[v336];
      if (b$$376) {
        var c$$251 = 0;
        var v2168 = a$$492.length;
        var v338 = c$$251 < v2168;
        for (;v338;) {
          var v337 = a$$492[c$$251];
          JAM.call(Q$$1, null, [v337, mh], JAM.policy.p4);
          c$$251 = c$$251 + 1;
          var v2169 = a$$492.length;
          v338 = c$$251 < v2169;
        }
        var v339 = this.s;
        JAM.call(Q$$1, null, [v339, mh], JAM.policy.p4);
        var v2170 = this.sb;
        var v340 = v2170.contentWindow;
        a$$492 = v340.document;
        var v341 = a$$492.documentElement;
        JAM.call(Q$$1, null, [v341, mh], JAM.policy.p4);
        var v342 = a$$492.body;
        JAM.call(Q$$1, null, [v342, nh], JAM.policy.p4);
        JAM.call(Q$$1, null, [b$$376, lh], JAM.policy.p4);
        var v343 = !1;
        JAM.call(this.N, this, [v343], JAM.policy.p4);
      }
    }
    return;
  }
  function v220() {
    var v3482 = this.i;
    var v2171 = v3482.document;
    var v345 = v2171.body;
    var v346 = this.kc;
    JAM.call(v345.removeChild, v345, [v346], JAM.policy.p4);
    var v3483 = this.i;
    var v2172 = v3483.document;
    var v347 = v2172.body;
    var v348 = this.ic;
    JAM.call(v347.removeChild, v347, [v348], JAM.policy.p4);
    return;
  }
  function v219(a$$491) {
    var v349 = this.ea;
    JAM.call(v349.push, v349, [a$$491], JAM.policy.p4);
    var v350 = this.rc;
    JAM.call(y$$31, null, [a$$491, "click", v350], JAM.policy.p4);
    JAM.call(a$$491.setAttribute, a$$491, ["data-google-reveal-ad", "true"], JAM.policy.p4);
    return;
  }
  function v218() {
    var v2173 = this.i;
    var v351 = v2173.document;
    var a$$490 = v351.links;
    var b$$375 = 0;
    var v2174 = a$$490.length;
    var v353 = b$$375 < v2174;
    for (;v353;) {
      var c$$250 = a$$490[b$$375];
      var v352 = JAM.call(this.rb, this, [c$$250], JAM.policy.p4);
      if (v352) {
        JAM.call(this.Xb, this, [c$$250], JAM.policy.p4);
      }
      b$$375 = b$$375 + 1;
      var v2175 = a$$490.length;
      v353 = b$$375 < v2175;
    }
    return;
  }
  function v217() {
    var a$$489 = 0;
    var v3484 = this.ea;
    var v2176 = v3484.length;
    var v356 = a$$489 < v2176;
    for (;v356;) {
      var v354 = this.ea;
      var b$$374 = v354[a$$489];
      var v355 = this.rc;
      JAM.call(A$$1, null, [b$$374, "click", v355], JAM.policy.p4);
      JAM.call(b$$374.removeAttribute, b$$374, ["data-google-reveal-ad"], JAM.policy.p4);
      a$$489 = a$$489 + 1;
      var v3485 = this.ea;
      var v2177 = v3485.length;
      v356 = a$$489 < v2177;
    }
    this.ea = [];
    return;
  }
  function v216(a$$488) {
    var v5116 = JAM.call(this.Ba, this, [a$$488, "prerender"], JAM.policy.p4);
    this.kc = v5116;
    var v5117 = JAM.call(this.Ba, this, [a$$488, "prefetch"], JAM.policy.p4);
    this.ic = v5117;
    var v3486 = this.i;
    var v2178 = v3486.document;
    var v357 = v2178.body;
    var v358 = this.kc;
    JAM.call(v357.appendChild, v357, [v358], JAM.policy.p4);
    var v3487 = this.i;
    var v2179 = v3487.document;
    var v359 = v2179.body;
    var v360 = this.ic;
    JAM.call(v359.appendChild, v359, [v360], JAM.policy.p4);
    return;
  }
  function v215(a$$487, b$$373) {
    var v2180 = this.i;
    var v361 = v2180.document;
    var c$$249 = JAM.call(v361.createElement, v361, ["link"], JAM.policy.p4);
    JAM.call(c$$249.setAttribute, c$$249, ["rel", b$$373], JAM.policy.p4);
    JAM.call(c$$249.setAttribute, c$$249, ["href", a$$487], JAM.policy.p4);
    return c$$249;
  }
  function v214() {
    var v362 = !1;
    JAM.call(this.N, this, [v362], JAM.policy.p4);
    JAM.call(this.xb, this, [], JAM.policy.p4);
    JAM.call(this.sc, this, [], JAM.policy.p4);
    return;
  }
  function v213(a$$486) {
    var v2181 = a$$486.onclick;
    var v3489 = !v2181;
    if (v3489) {
      var v3488 = a$$486.href;
      v2181 = !v3488;
    }
    var v363 = v2181;
    if (v363) {
      return!1;
    }
    var v364 = a$$486.href;
    var b$$372 = JAM.call(Re, null, [v364], JAM.policy.p4);
    var c$$248 = b$$372[3];
    var v365 = a$$486.href;
    a$$486 = JAM.call(kh, null, [v365], JAM.policy.p4);
    b$$372 = b$$372[7];
    var v366;
    var v4264 = !c$$248;
    var v4714 = !v4264;
    if (v4714) {
      var v4713 = this.Wc;
      v4264 = c$$248 != v4713;
    }
    var v3490 = v4264;
    var v4266 = !v3490;
    if (v4266) {
      var v4715 = this.Xc;
      var v4265 = a$$486 == v4715;
      if (v4265) {
        v4265 = b$$372;
      }
      v3490 = v4265;
    }
    var v2182 = v3490;
    if (v2182) {
      v366 = !1;
    } else {
      v366 = !0;
    }
    return v366;
  }
  function v212(a$$485) {
    var v367 = !0;
    JAM.call(this.N, this, [v367], JAM.policy.p4);
    var v2183 = this.tb;
    var v368 = JAM.call(r$$2, null, [v2183, this], JAM.policy.p4);
    var b$$371 = JAM.call(ye, null, ["ifr::hide", v368], JAM.policy.p4);
    var v369 = this.i;
    JAM.call(y$$31, null, [v369, "pagehide", b$$371], JAM.policy.p4);
    JAM.call(this.vb, this, [a$$485], JAM.policy.p4);
    return;
  }
  function v211(a$$484) {
    var v370 = this.ob;
    var v2184 = !v370;
    if (v2184) {
      this.ob = !0;
      this.rc = a$$484;
      JAM.call(this.Yb, this, [], JAM.policy.p4);
    }
    return;
  }
  function v210(a$$481) {
    a$$481.fill = this.Gb;
    a$$481.dismiss = this.Bb;
    return;
  }
  function v209() {
    var v371 = this.H;
    var v2185 = !v371;
    if (v2185) {
      this.H = !0;
      var v3491 = this.Kb;
      JAM.call(v3491.A, v3491, [], JAM.policy.p4);
    }
    return;
  }
  function v208() {
    var v372 = this.Cb;
    var v2186 = !v372;
    if (v2186) {
      this.Cb = !0;
      var v3492 = this.Kb;
      JAM.call(v3492.dismiss, v3492, [], JAM.policy.p4);
    }
    return;
  }
  function v207(a$$479) {
    var v3493 = a$$479;
    if (v3493) {
      v3493 = a$$479.data;
    }
    var v2187 = v3493;
    if (v2187) {
      var v3494 = a$$479.origin;
      v2187 = mg[v3494];
    }
    var v376 = v2187;
    if (v376) {
      var b$$367 = 0;
      var v375 = 2 > b$$367;
      for (;v375;) {
        var c$$246;
        var d$$154;
        switch(b$$367) {
          case 0:
            d$$154 = c$$246 = a$$479.data;
            break;
          default:
            try {
              var v2188 = a$$479.data;
              var v373 = d$$154 = JAM.call(gg, null, [v2188], JAM.policy.p4);
              if (v373) {
                v373 = d$$154.msg_type;
              }
              c$$246 = v373;
            } catch (e$$90) {
              d$$154 = c$$246 = null;
            }
          ;
        }
        var v374 = this.cc;
        var f$$52 = v374[c$$246];
        if (f$$52) {
          JAM.call(f$$52.call, f$$52, [this, d$$154], JAM.policy.p4);
          break;
        }
        b$$367 = b$$367 + 1;
        v375 = 2 > b$$367;
      }
    }
    return;
  }
  function v206() {
    var v377 = this.cc;
    JAM.call(this.pa, this, [v377], JAM.policy.p4);
    var v2189 = this.gc;
    var v378 = JAM.call(r$$2, null, [v2189, this], JAM.policy.p4);
    var a$$478 = JAM.call(ye, null, ["ras::hdlr", v378], JAM.policy.p4);
    var v379 = this.i;
    JAM.call(y$$31, null, [v379, "message", a$$478], JAM.policy.p4);
    return;
  }
  function v205() {
    var v380;
    var v5046 = JAM.call(this.Sa, this, [], JAM.policy.p4);
    var v4942 = !v5046;
    var v5048 = !v4942;
    if (v5048) {
      var v5084 = this.i;
      var v5047 = JAM.call(og, null, [v5084], JAM.policy.p4);
      v4942 = !v5047;
    }
    var v4716 = v4942;
    var v4944 = !v4716;
    if (v4944) {
      var v5049 = this.B;
      var v4943 = 2 <= v5049;
      if (v4943) {
        v4943 = this.I;
      }
      v4716 = v4943;
    }
    var v4267 = v4716;
    var v4718 = !v4267;
    if (v4718) {
      var v4717 = this.Ib;
      v4267 = !v4717;
    }
    var v3495 = v4267;
    var v4268 = !v3495;
    if (v4268) {
      v3495 = this.Da;
    }
    var v2190 = v3495;
    if (v2190) {
      v380 = JAM.call(this.hide, this, [], JAM.policy.p4);
    } else {
      JAM.call(this.A, this, [], JAM.policy.p4);
      v380 = JAM.call(this.show, this, [], JAM.policy.p4);
    }
    v380;
    return;
  }
  function v204(a$$476, b$$366) {
    var v3496 = b$$366.top;
    var v2191 = v3496 + "px";
    var v3497 = b$$366.left;
    var v2192 = v3497 + "px";
    var v3498 = b$$366.right;
    var v2193 = v3498 + "px";
    var v3499 = b$$366.bottom;
    var v2194 = v3499 + "px";
    var v381 = {paddingTop:v2191, paddingLeft:v2192, paddingRight:v2193, paddingBottom:v2194};
    JAM.call(Q$$1, null, [a$$476, v381], JAM.policy.p4);
    return;
  }
  function v203() {
    var v3500 = this.i;
    var v2195 = v3500.document;
    var v382 = v2195.body;
    var v383 = this.Vc;
    JAM.call(this.cb, this, [v382, v383], JAM.policy.p4);
    return;
  }
  function v202(a$$475) {
    this.w = "touchstart";
    var v384 = a$$475.touches;
    this.B = v384.length;
    this.I = !1;
    JAM.call(this.o, this, [], JAM.policy.p4);
    return;
  }
  function v201(a$$474) {
    this.w = "touchmove";
    var v385 = a$$474.touches;
    this.B = v385.length;
    this.I = !0;
    JAM.call(this.o, this, [], JAM.policy.p4);
    return;
  }
  function v200(a$$473) {
    function v199() {
      var v2196 = this.w;
      var v386 = "touchend" == v2196;
      if (v386) {
        this.B = b$$365;
        this.I = !1;
        JAM.call(this.o, this, [], JAM.policy.p4);
      }
      return;
    }
    this.w = "touchend";
    var v387 = a$$473.touches;
    var b$$365 = v387.length;
    var v388;
    var v2199 = 2 > b$$365;
    if (v2199) {
      var v2197 = this.i;
      var v2198 = JAM.call(r$$2, null, [v199, this], JAM.policy.p4);
      v388 = JAM.call(v2197.setTimeout, v2197, [v2198, 1E3], JAM.policy.p4);
    } else {
      this.B = b$$365;
      v388 = JAM.call(this.o, this, [], JAM.policy.p4);
    }
    v388;
    return;
  }
  function v198() {
    function v197() {
      var v2200 = this.w;
      var v389 = "touchcancel" == v2200;
      if (v389) {
        this.B = 0;
        this.I = !1;
        JAM.call(this.o, this, [], JAM.policy.p4);
      }
      return;
    }
    this.w = "touchcancel";
    var v390 = this.i;
    var v391 = JAM.call(r$$2, null, [v197, this], JAM.policy.p4);
    JAM.call(v390.setTimeout, v390, [v391, 1E3], JAM.policy.p4);
    return;
  }
  function v196() {
    JAM.call(this.o, this, [], JAM.policy.p4);
    return;
  }
  function v195() {
    JAM.call(this.o, this, [], JAM.policy.p4);
    return;
  }
  function v194() {
    JAM.call(this.o, this, [], JAM.policy.p4);
    return;
  }
  function v193() {
    var v2201 = this.i;
    var v392 = v2201.innerHeight;
    var v2202 = this.i;
    var v393 = v2202.innerWidth;
    return v392 >= v393;
  }
  function v192(a$$472) {
    var v394 = this.i;
    var b$$364 = v394.innerWidth;
    var c$$245;
    switch(a$$472) {
      case "bottom":
        var v2203 = this.gd;
        var v395 = v2203.height;
        c$$245 = JAM.new(u$$2, [b$$364, v395], JAM.policy.p4);
    }
    return c$$245;
  }
  function v191(a$$471, b$$363) {
    var c$$244;
    switch(a$$471) {
      case "bottom":
        var v4269 = this.i;
        var v3501 = v4269.document;
        var v2204 = v3501.body;
        var v396 = c$$244 = JAM.call(Qd, null, [v2204, "padding"], JAM.policy.p4);
        if (v396) {
          var v2205 = c$$244.bottom;
          var v2206 = b$$363.height;
          c$$244.bottom = v2205 + v2206;
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
    var a$$469 = JAM.call(this.ba, this, [], JAM.policy.p4);
    var v2207 = a$$469;
    if (v2207) {
      var v4270 = a$$469.length;
      var v3502 = 2 > v4270;
      v2207 = !v3502;
    }
    var v405 = v2207;
    if (v405) {
      var v2208 = a$$469.length;
      var v397 = v2208 - 1;
      var b$$361 = a$$469[v397];
      var c$$243 = a$$469[0];
      var v404 = b$$361 && c$$243;
      if (v404) {
        var v398 = this.ua;
        c$$243 = JAM.call(this.Ma, this, [v398], JAM.policy.p4);
        var v399 = this.ua;
        var d$$153 = JAM.call(this.Qb, this, [v399, c$$243], JAM.policy.p4);
        JAM.call(Q$$1, null, [b$$361, d$$153], JAM.policy.p4);
        var v400 = a$$469.length;
        b$$361 = v400 - 1;
        var v402 = 0 <= b$$361;
        for (;v402;) {
          var v401 = a$$469[b$$361];
          JAM.call(Id, null, [v401, c$$243], JAM.policy.p4);
          b$$361 = b$$361 - 1;
          v402 = 0 <= b$$361;
        }
        var v403 = this.s;
        JAM.call(Id, null, [v403, c$$243], JAM.policy.p4);
      }
    }
    return;
  }
  function v188() {
    var v406 = this.ua;
    var a$$468 = JAM.call(this.Ma, this, [v406], JAM.policy.p4);
    var v407 = this.ua;
    a$$468 = JAM.call(this.Rb, this, [v407, a$$468], JAM.policy.p4);
    var v3503 = this.i;
    var v2209 = v3503.document;
    var v408 = v2209.body;
    JAM.call(this.cb, this, [v408, a$$468], JAM.policy.p4);
    return;
  }
  function v187() {
    var v409 = this.ga;
    var v2210 = !v409;
    if (v2210) {
      JAM.call(this.pb, this, [], JAM.policy.p4);
      var v4271 = JAM.call(this.u, this, [], JAM.policy.p4);
      var v4945;
      var v5050 = this.Ra;
      if (v5050) {
        v4945 = 1;
      } else {
        v4945 = 0;
      }
      var v4719 = v4945;
      var v4272 = {display:"block", opacity:v4719};
      JAM.call(Q$$1, null, [v4271, v4272], JAM.policy.p4);
      this.ga = !0;
    }
    return;
  }
  function v186() {
    this.Ib = !0;
    var v3504 = JAM.call(this.Sa, this, [], JAM.policy.p4);
    if (v3504) {
      var v4273 = this.i;
      v3504 = JAM.call(og, null, [v4273], JAM.policy.p4);
    }
    var v2211 = v3504;
    if (v2211) {
      var v3505 = this.Ra;
      v2211 = !v3505;
    }
    var v410 = v2211;
    if (v410) {
      var a$$467 = JAM.call(this.u, this, [], JAM.policy.p4);
      if (a$$467) {
        JAM.call(this.show, this, [], JAM.policy.p4);
        var v5051 = {position:"fixed", background:"rgba(0,0,0,0.65)", boxShadow:"0 -5px 5px -5px rgba(0,0,0,0.5)", zIndex:999999};
        JAM.call(Q$$1, null, [a$$467, v5051], JAM.policy.p4);
        JAM.call(this.qb, this, [], JAM.policy.p4);
        a$$467 = JAM.new(fh, [a$$467, 350], JAM.policy.p4);
        JAM.call(a$$467.play, a$$467, [], JAM.policy.p4);
        this.Ra = !0;
      }
    }
    return;
  }
  function v185() {
    var v411 = this.ga;
    if (v411) {
      var v4274 = JAM.call(this.u, this, [], JAM.policy.p4);
      JAM.call(Q$$1, null, [v4274, "display", "none"], JAM.policy.p4);
      JAM.call(this.$a, this, [], JAM.policy.p4);
      this.ga = !1;
    }
    return;
  }
  function v184() {
    var v2212 = this.Da;
    var v428 = !v2212;
    if (v428) {
      this.Da = !0;
      var v412 = this.i;
      var v413 = this.Zc;
      JAM.call(A$$1, null, [v412, "orientationchange", v413], JAM.policy.p4);
      var v414 = this.i;
      var v415 = this.$c;
      JAM.call(A$$1, null, [v414, "resize", v415], JAM.policy.p4);
      var v416 = this.i;
      var v417 = this.ad;
      JAM.call(A$$1, null, [v416, "scroll", v417], JAM.policy.p4);
      var v418 = this.i;
      var v419 = this.bd;
      JAM.call(A$$1, null, [v418, "touchcancel", v419], JAM.policy.p4);
      var v420 = this.i;
      var v421 = this.cd;
      JAM.call(A$$1, null, [v420, "touchend", v421], JAM.policy.p4);
      var v422 = this.i;
      var v423 = this.dd;
      JAM.call(A$$1, null, [v422, "touchmove", v423], JAM.policy.p4);
      var v424 = this.i;
      var v425 = this.ed;
      JAM.call(A$$1, null, [v424, "touchstart", v425], JAM.policy.p4);
      var v426 = JAM.call(this.u, this, [], JAM.policy.p4);
      var v2213 = this.$a;
      var v427 = JAM.call(r$$2, null, [v2213, this], JAM.policy.p4);
      var a$$466 = JAM.new(gh, [v426, 250, v427], JAM.policy.p4);
      JAM.call(a$$466.play, a$$466, [], JAM.policy.p4);
    }
    return;
  }
  function v183() {
    var v2214 = this.Ub;
    var v431 = !v2214;
    if (v431) {
      var a$$464 = JAM.call(this.ba, this, [], JAM.policy.p4);
      var v2215 = !a$$464;
      var v3507 = !v2215;
      if (v3507) {
        var v3506 = a$$464.length;
        v2215 = 2 > v3506;
      }
      var v429 = v2215;
      if (v429) {
        return null;
      }
      var v2216 = a$$464.length;
      var v430 = v2216 - 1;
      this.Ub = a$$464[v430];
    }
    return this.Ub;
  }
  function v182() {
    return "adsbygoogle";
  }
  function v181() {
    var v2217 = this.X;
    var v433 = !v2217;
    if (v433) {
      this.X = [];
      var a$$463 = this.sb;
      var v2218 = a$$463;
      if (v2218) {
        var v4275 = JAM.call(Zc, null, [a$$463], JAM.policy.p4);
        var v3508 = JAM.call($b, null, [v4275, "adsbygoogle"], JAM.policy.p4);
        v2218 = !v3508;
      }
      var v432 = v2218;
      for (;v432;) {
        var v2219 = this.X;
        JAM.call(v2219.push, v2219, [a$$463], JAM.policy.p4);
        a$$463 = a$$463.parentNode;
        var v2220 = a$$463;
        if (v2220) {
          var v4276 = JAM.call(Zc, null, [a$$463], JAM.policy.p4);
          var v3509 = JAM.call($b, null, [v4276, "adsbygoogle"], JAM.policy.p4);
          v2220 = !v3509;
        }
        v432 = v2220;
      }
      if (a$$463) {
        var v2221 = this.X;
        JAM.call(v2221.push, v2221, [a$$463], JAM.policy.p4);
      }
    }
    return this.X;
  }
  function v180() {
    var v434 = this.W;
    var v2222 = this.current;
    var v435 = v2222[0];
    JAM.call(Nd, null, [v434, v435], JAM.policy.p4);
    return;
  }
  function v179() {
    var v436 = this.W;
    JAM.call(qd, null, [v436], JAM.policy.p4);
    var v437 = this.onEndCallback;
    if (v437) {
      JAM.call(this.onEndCallback, this, [], JAM.policy.p4);
    }
    return;
  }
  function v178() {
    var v438 = this.W;
    var v2223 = this.current;
    var v439 = v2223[0];
    JAM.call(Nd, null, [v438, v439], JAM.policy.p4);
    return;
  }
  function v177() {
    this.Ic = !0;
    return;
  }
  function v176() {
    var v5118 = JAM.call(ha$$1, null, [], JAM.policy.p4);
    this.hb = v5118;
    var v440 = this.hb;
    var v441 = this.jd;
    this.Sc = v440 + v441;
    JAM.call(this.Ca, this, [], JAM.policy.p4);
    return;
  }
  function v175(a$$459) {
    this.current = [];
    var b$$356 = 0;
    var v3510 = this.ib;
    var v2224 = v3510.length;
    var v444 = b$$356 < v2224;
    for (;v444;) {
      var v442 = this.current;
      var v4720 = this.Tc;
      var v4277 = v4720[b$$356];
      var v4721 = this.ib;
      var v4278 = v4721[b$$356];
      var v3511 = v4277 - v4278;
      var v2225 = v3511 * a$$459;
      var v3512 = this.ib;
      var v2226 = v3512[b$$356];
      var v443 = v2225 + v2226;
      JAM.call(v442.push, v442, [v443], JAM.policy.p4);
      b$$356 = b$$356 + 1;
      var v3513 = this.ib;
      var v2227 = v3513.length;
      v444 = b$$356 < v2227;
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
    var v2228 = this.Ic;
    var v449 = !v2228;
    if (v449) {
      var a$$458 = JAM.call(ha$$1, null, [], JAM.policy.p4);
      var v2229 = this.hb;
      var v445 = a$$458 - v2229;
      var v2230 = this.Sc;
      var v2231 = this.hb;
      var v446 = v2230 - v2231;
      a$$458 = v445 / v446;
      var v447 = 1 <= a$$458;
      if (v447) {
        a$$458 = 1;
      }
      JAM.call(this.Pc, this, [a$$458], JAM.policy.p4);
      JAM.call(this.C, this, [], JAM.policy.p4);
      var v448;
      var v2233 = 1 == a$$458;
      if (v2233) {
        v448 = JAM.call(this.ka, this, [], JAM.policy.p4);
      } else {
        var v3514 = this.Ca;
        var v2232 = JAM.call(r$$2, null, [v3514, this], JAM.policy.p4);
        v448 = JAM.call(w$$6.setTimeout, w$$6, [v2232, 20], JAM.policy.p4);
      }
      v448;
    }
    return;
  }
  function v171(a$$456) {
    var v2234 = a$$456;
    if (v2234) {
      var v3515 = a$$456.origin;
      v2234 = mg[v3515];
    }
    var v455 = v2234;
    if (v455) {
      var b$$354;
      try {
        var v450 = a$$456.data;
        b$$354 = JAM.call(gg, null, [v450], JAM.policy.p4);
      } catch (c$$238) {
      }
      if (b$$354) {
        var v451 = a$$456 = b$$354.adType;
        var v2235 = !v451;
        if (v2235) {
          a$$456 = 1;
        }
        var v452 = this.lc;
        var d$$151 = JAM.call(rg, null, [v452], JAM.policy.p4);
        var v3516 = d$$151.wasReactiveAdConfigReceived;
        var v2236 = v3516[a$$456];
        var v454 = !v2236;
        if (v454) {
          var e$$89 = JAM.call(Yg, null, [a$$456], JAM.policy.p4);
          var v2237 = e$$89;
          if (v2237) {
            v2237 = JAM.call(e$$89.ia, e$$89, [b$$354], JAM.policy.p4);
          }
          var v453 = v2237;
          if (v453) {
            var v3517 = d$$151.wasReactiveAdConfigReceived;
            JAM.set(v3517, a$$456, !0, JAM.policy.p2);
            var v3518 = this.lc;
            JAM.call(e$$89.D, e$$89, [v3518], JAM.policy.p4);
          }
        }
      }
    }
    return;
  }
  function v170(a$$441) {
    var v463 = this.l;
    if (v463) {
      var b$$343 = this.l;
      var v456 = a$$441.document;
      var c$$227 = JAM.call(v456.createElement, v456, ["ins"], JAM.policy.p4);
      c$$227.className = "adsbygoogle";
      var v457 = c$$227.style;
      v457.display = "none";
      var v2238 = a$$441.document;
      var v458 = v2238.body;
      JAM.call(v458.appendChild, v458, [c$$227], JAM.policy.p4);
      var v2239 = a$$441.document;
      var v459 = v2239.documentElement;
      var d$$144 = v459.clientHeight;
      var v2240 = a$$441.document;
      var v460 = v2240.documentElement;
      var e$$85 = v460.clientWidth;
      var v461 = b$$343.adClient;
      d$$144 = {google_ad_client:v461, google_ad_width:e$$85, google_ad_height:d$$144, google_reactive_ad_format:8};
      var v462 = b$$343.adTest;
      if (v462) {
        d$$144.google_ad_test = b$$343.adTest;
      }
      var a$$inline_363 = c$$227;
      var b$$inline_364 = d$$144;
      var c$$inline_365 = a$$441;
      c$$inline_365 = c$$inline_365 || window;
      JAM.call(Cg, null, [a$$inline_363], JAM.policy.p4);
      JAM.call(Dg, null, [a$$inline_363, b$$inline_364, c$$inline_365], JAM.policy.p4);
    }
    return;
  }
  function v169(a$$440) {
    var JSCompiler_inline_result$$62;
    JSCompiler_inline_label_Pg_362: {
      var a$$inline_359 = a$$440;
      var v464 = !a$$inline_359;
      if (v464) {
        JSCompiler_inline_result$$62 = null;
        break JSCompiler_inline_label_Pg_362;
      }
      var b$$inline_360 = JAM.new(Og, [], JAM.policy.p4);
      var c$$inline_361 = a$$inline_359.adClient;
      var v465 = JAM.call(p$$1, null, [c$$inline_361], JAM.policy.p4);
      if (v465) {
        b$$inline_360.adClient = c$$inline_361;
      }
      a$$inline_359 = a$$inline_359.adTest;
      var v466 = JAM.call(p$$1, null, [a$$inline_359], JAM.policy.p4);
      if (v466) {
        b$$inline_360.adTest = a$$inline_359;
      }
      var v467;
      var v2241 = b$$inline_360.adClient;
      if (v2241) {
        v467 = b$$inline_360;
      } else {
        v467 = null;
      }
      JSCompiler_inline_result$$62 = v467;
    }
    var v468;
    var v2242 = this.l = JSCompiler_inline_result$$62;
    if (v2242) {
      v468 = !0;
    } else {
      v468 = !1;
    }
    return v468;
  }
  function v168(a$$439, b$$342) {
    var v5119 = JAM.new(Og, [], JAM.policy.p4);
    this.l = v5119;
    var v469 = this.l;
    v469.adClient = b$$342;
    var v470 = this.l;
    v470.adTest = "on";
    JAM.call(this.D, this, [a$$439], JAM.policy.p4);
    return;
  }
  function v167(a$$436) {
    var v481 = this.l;
    if (v481) {
      var b$$339 = this.l;
      var v471 = a$$436.document;
      var c$$225 = JAM.call(v471.createElement, v471, ["ins"], JAM.policy.p4);
      c$$225.className = "adsbygoogle";
      var v2243 = a$$436.document;
      var v472 = v2243.body;
      JAM.call(v472.appendChild, v472, [c$$225], JAM.policy.p4);
      var v473 = JAM.call(Math.random, Math, [], JAM.policy.p4);
      var d$$143 = JAM.call(String, null, [v473], JAM.policy.p4);
      d$$143 = JAM.call(d$$143.slice, d$$143, [-3], JAM.policy.p4);
      var v474 = b$$339.adClient;
      var v475 = b$$339.adWidth;
      var v476 = b$$339.adHeight;
      var v4279 = b$$339.adWidth;
      var v3519 = v4279 + "x";
      var v3520 = b$$339.adHeight;
      var v2244 = v3519 + v3520;
      var v477 = v2244 + "_as";
      d$$143 = {google_ad_client:v474, google_ad_width:v475, google_ad_height:v476, google_ad_format:v477, google_reactive_ad_format:1, google_ad_section:d$$143};
      var v478 = b$$339.adSlot;
      if (v478) {
        d$$143.google_ad_slot = b$$339.adSlot;
      }
      d$$143.google_ad_channel = "GoogleAnchorAd";
      var v479 = b$$339.adChannel;
      if (v479) {
        var v3521 = d$$143.google_ad_channel;
        var v4280 = b$$339.adChannel;
        var v3522 = "+" + v4280;
        d$$143.google_ad_channel = v3521 + v3522;
      }
      var v480 = b$$339.adTest;
      if (v480) {
        d$$143.google_adtest = b$$339.adTest;
      }
      var a$$inline_355 = c$$225;
      var b$$inline_356 = d$$143;
      var c$$inline_357 = a$$436;
      c$$inline_357 = c$$inline_357 || window;
      JAM.call(Cg, null, [a$$inline_355], JAM.policy.p4);
      JAM.call(Dg, null, [a$$inline_355, b$$inline_356, c$$inline_357], JAM.policy.p4);
    }
    return;
  }
  function v166(a$$435) {
    var JSCompiler_inline_result$$23;
    JSCompiler_inline_label_Lg_354: {
      var a$$inline_351 = a$$435;
      var v482 = !a$$inline_351;
      if (v482) {
        JSCompiler_inline_result$$23 = null;
        break JSCompiler_inline_label_Lg_354;
      }
      var b$$inline_352 = JAM.new(Kg, [], JAM.policy.p4);
      var c$$inline_353 = a$$inline_351.adClient;
      var v483 = JAM.call(p$$1, null, [c$$inline_353], JAM.policy.p4);
      if (v483) {
        b$$inline_352.adClient = c$$inline_353;
      }
      c$$inline_353 = a$$inline_351.adWidth;
      var v2245 = JAM.call(q$$3, null, [c$$inline_353], JAM.policy.p4);
      if (v2245) {
        v2245 = 0 < c$$inline_353;
      }
      var v484 = v2245;
      if (v484) {
        b$$inline_352.adWidth = c$$inline_353;
      }
      c$$inline_353 = a$$inline_351.adHeight;
      var v2246 = JAM.call(q$$3, null, [c$$inline_353], JAM.policy.p4);
      if (v2246) {
        v2246 = 0 < c$$inline_353;
      }
      var v485 = v2246;
      if (v485) {
        b$$inline_352.adHeight = c$$inline_353;
      }
      c$$inline_353 = a$$inline_351.adSlot;
      var v486 = JAM.call(p$$1, null, [c$$inline_353], JAM.policy.p4);
      if (v486) {
        b$$inline_352.adSlot = c$$inline_353;
      }
      c$$inline_353 = a$$inline_351.adChannel;
      var v487 = JAM.call(p$$1, null, [c$$inline_353], JAM.policy.p4);
      if (v487) {
        b$$inline_352.adChannel = c$$inline_353;
      }
      a$$inline_351 = a$$inline_351.adTest;
      var v488 = JAM.call(p$$1, null, [a$$inline_351], JAM.policy.p4);
      if (v488) {
        b$$inline_352.adTest = a$$inline_351;
      }
      var v489;
      var v4281 = b$$inline_352.adClient;
      if (v4281) {
        v4281 = b$$inline_352.adWidth;
      }
      var v3523 = v4281;
      if (v3523) {
        v3523 = b$$inline_352.adHeight;
      }
      var v2247 = v3523;
      if (v2247) {
        v489 = b$$inline_352;
      } else {
        v489 = null;
      }
      JSCompiler_inline_result$$23 = v489;
    }
    var v490;
    var v2248 = this.l = JSCompiler_inline_result$$23;
    if (v2248) {
      v490 = !0;
    } else {
      v490 = !1;
    }
    return v490;
  }
  function v165(a$$434, b$$338) {
    var JSCompiler_inline_result$$34;
    var a$$inline_348 = b$$338;
    var b$$inline_349 = JAM.new(Kg, [], JAM.policy.p4);
    b$$inline_349.adClient = a$$inline_348;
    b$$inline_349.adWidth = 320;
    b$$inline_349.adHeight = 50;
    b$$inline_349.adTest = "on";
    JSCompiler_inline_result$$34 = b$$inline_349;
    this.l = JSCompiler_inline_result$$34;
    JAM.call(this.D, this, [a$$434], JAM.policy.p4);
    return;
  }
  function v164(a$$412, b$$326) {
    JAM.call(b$$326.push, b$$326, ["{"], JAM.policy.p4);
    var c$$215 = "";
    var d$$137;
    for (d$$137 in a$$412) {
      var v3524 = Object.prototype;
      var v2249 = v3524.hasOwnProperty;
      var v492 = JAM.call(v2249.call, v2249, [a$$412, d$$137], JAM.policy.p4);
      if (v492) {
        var e$$80 = a$$412[d$$137];
        var v2250 = typeof e$$80;
        var v491 = "function" != v2250;
        if (v491) {
          JAM.call(b$$326.push, b$$326, [c$$215], JAM.policy.p4);
          JAM.call(this.r, this, [d$$137, b$$326], JAM.policy.p4);
          JAM.call(b$$326.push, b$$326, [":"], JAM.policy.p4);
          var v4722;
          var v4947 = this.qa;
          if (v4947) {
            var v4946 = this.qa;
            v4722 = JAM.call(v4946.call, v4946, [a$$412, d$$137, e$$80], JAM.policy.p4);
          } else {
            v4722 = e$$80;
          }
          var v4282 = v4722;
          JAM.call(this.n, this, [v4282, b$$326], JAM.policy.p4);
          c$$215 = ",";
        }
      }
    }
    JAM.call(b$$326.push, b$$326, ["}"], JAM.policy.p4);
    return;
  }
  function v163(a$$411, b$$325) {
    var c$$214 = a$$411.length;
    JAM.call(b$$325.push, b$$325, ["["], JAM.policy.p4);
    var d$$136 = "";
    var e$$79 = 0;
    var v493 = e$$79 < c$$214;
    for (;v493;) {
      JAM.call(b$$325.push, b$$325, [d$$136], JAM.policy.p4);
      d$$136 = a$$411[e$$79];
      var v4283;
      var v4725 = this.qa;
      if (v4725) {
        var v4723 = this.qa;
        var v4724 = JAM.call(String, null, [e$$79], JAM.policy.p4);
        v4283 = JAM.call(v4723.call, v4723, [a$$411, v4724, d$$136], JAM.policy.p4);
      } else {
        v4283 = d$$136;
      }
      var v3525 = v4283;
      JAM.call(this.n, this, [v3525, b$$325], JAM.policy.p4);
      d$$136 = ",";
      e$$79 = e$$79 + 1;
      v493 = e$$79 < c$$214;
    }
    JAM.call(b$$325.push, b$$325, ["]"], JAM.policy.p4);
    return;
  }
  function v162(a$$410, b$$324) {
    var v2251;
    var v4284 = JAM.call(isFinite, null, [a$$410], JAM.policy.p4);
    if (v4284) {
      var v4726 = JAM.call(isNaN, null, [a$$410], JAM.policy.p4);
      v4284 = !v4726;
    }
    var v3526 = v4284;
    if (v3526) {
      v2251 = a$$410;
    } else {
      v2251 = "null";
    }
    var v494 = v2251;
    JAM.call(b$$324.push, b$$324, [v494], JAM.policy.p4);
    return;
  }
  function v161(a$$408, b$$322) {
    function v160(a$$409) {
      var v495 = a$$409 in ig;
      if (v495) {
        return ig[a$$409];
      }
      var b$$323 = JAM.call(a$$409.charCodeAt, a$$409, [0], JAM.policy.p4);
      var e$$78 = "\\u";
      var v496;
      var v2253 = 16 > b$$323;
      if (v2253) {
        v496 = e$$78 = e$$78 + "000";
      } else {
        var v2252;
        var v3528 = 256 > b$$323;
        if (v3528) {
          v2252 = e$$78 = e$$78 + "00";
        } else {
          var v3527 = 4096 > b$$323;
          if (v3527) {
            v3527 = e$$78 = e$$78 + "0";
          }
          v2252 = v3527;
        }
        v496 = v2252;
      }
      v496;
      var v497 = ig;
      var v498 = a$$409;
      var v2254 = e$$78;
      var v2255 = JAM.call(b$$323.toString, b$$323, [16], JAM.policy.p4);
      return JAM.set(v497, v498, v2254 + v2255, JAM.policy.p2);
    }
    var v499 = JAM.call(a$$408.replace, a$$408, [jg, v160], JAM.policy.p4);
    JAM.call(b$$322.push, b$$322, ['"', v499, '"'], JAM.policy.p4);
    return;
  }
  function v159(a$$407, b$$321) {
    var v503 = typeof a$$407;
    switch(v503) {
      case "string":
        JAM.call(this.r, this, [a$$407, b$$321], JAM.policy.p4);
        break;
      case "number":
        JAM.call(this.L, this, [a$$407, b$$321], JAM.policy.p4);
        break;
      case "boolean":
        JAM.call(b$$321.push, b$$321, [a$$407], JAM.policy.p4);
        break;
      case "undefined":
        JAM.call(b$$321.push, b$$321, ["null"], JAM.policy.p4);
        break;
      case "object":
        var v500 = null == a$$407;
        if (v500) {
          JAM.call(b$$321.push, b$$321, ["null"], JAM.policy.p4);
          break;
        }
        var v501 = JAM.call(n$$2, null, [a$$407], JAM.policy.p4);
        if (v501) {
          JAM.call(this.xc, this, [a$$407, b$$321], JAM.policy.p4);
          break;
        }
        JAM.call(this.M, this, [a$$407, b$$321], JAM.policy.p4);
        break;
      case "function":
        break;
      default:
        var v2256 = typeof a$$407;
        var v502 = "Unknown type: " + v2256;
        throw JAM.call(Error, null, [v502], JAM.policy.p4);;
    }
    return;
  }
  function v158(a$$406) {
    var b$$320 = [];
    JAM.call(this.n, this, [a$$406, b$$320], JAM.policy.p4);
    return JAM.call(b$$320.join, b$$320, [""], JAM.policy.p4);
  }
  function v157() {
    function v156(b$$317) {
      var v2257 = !e$$76;
      if (v2257) {
        v2257 = JAM.call(c$$212, null, [b$$317], JAM.policy.p4);
      }
      var v504 = v2257;
      if (v504) {
        JAM.call(d$$134, null, [b$$317, a$$402, f$$49], JAM.policy.p4);
        e$$76 = !0;
      }
      return;
    }
    var v2258 = JAM.call(this.Rc, this, [], JAM.policy.p4);
    if (v2258) {
      var v3529 = this.Pa;
      v2258 = !v3529;
    }
    var v507 = v2258;
    if (v507) {
      var a$$402 = JAM.call(this.J, this, [], JAM.policy.p4);
      var v505 = a$$402;
      if (v505) {
        v505 = a$$402.contentWindow;
      }
      var b$$316 = v505;
      if (b$$316) {
        var c$$212 = JAM.call(ga$$1, null, [eg, b$$316], JAM.policy.p4);
        var v2259 = V$$1.prototype;
        var v506 = v2259.da;
        var d$$134 = JAM.call(r$$2, null, [v506, this], JAM.policy.p4);
        b$$316 = ag;
        var e$$76 = !1;
        var f$$49 = !1;
        JAM.call(x$$50, null, [b$$316, v156], JAM.policy.p4);
      }
    }
    return;
  }
  function v155(a$$400) {
    JAM.call(this.eb, this, [a$$400], JAM.policy.p4);
    this.hc = !0;
    return;
  }
  function v154(a$$399, b$$314) {
    JAM.call(this.eb, this, [a$$399], JAM.policy.p4);
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
    var v508 = this.jc;
    var v2261 = !v508;
    if (v2261) {
      var v2260;
      if (a$$398) {
        v2260 = this.Tb = !0;
      } else {
        v2260 = this.Pa = !0;
      }
      v2260;
    }
    return;
  }
  function v152(a$$397) {
    var v509 = this.va;
    var v2262 = !v509;
    if (v2262) {
      var v4285 = this.F;
      JAM.call(this.ta, this, [a$$397, v4285], JAM.policy.p4);
      this.va = !0;
      var v3530 = a$$397.style;
      v3530.display = "";
    }
    return;
  }
  function v151(a$$396, b$$313) {
    var v2263 = a$$396;
    if (v2263) {
      v2263 = a$$396.contentWindow;
    }
    var v510 = v2263;
    if (v510) {
      var v2264 = a$$396.contentWindow;
      var v2265 = this.Fb;
      JAM.call(v2264.postMessage, v2264, [b$$313, v2265], JAM.policy.p4);
    }
    return;
  }
  function v150() {
    var v2266 = this.Q;
    var v511 = v2266.document;
    var v3531 = this.Q;
    var v2267 = v3531.google_unique_id;
    var v512 = "zrt_ads_frame" + v2267;
    return JAM.call(v511.getElementById, v511, [v512], JAM.policy.p4);
  }
  function v149(a$$395) {
    var b$$312 = JAM.call(this.J, this, [], JAM.policy.p4);
    var v4286 = this.Fb;
    var v4287 = a$$395.origin;
    var v3532 = v4286 == v4287;
    if (v3532) {
      v3532 = b$$312;
    }
    var v2268 = v3532;
    if (v2268) {
      var v3533 = b$$312.contentWindow;
      var v3534 = a$$395.source;
      v2268 = v3533 == v3534;
    }
    var v514 = v2268;
    if (v514) {
      a$$395 = a$$395.data;
      var c$$210 = !0;
      var v513 = JAM.call(this.da, this, [a$$395, b$$312, c$$210], JAM.policy.p4);
      if (v513) {
        var v4288 = this.Q;
        var v4289 = this.K;
        JAM.call(A$$1, null, [v4288, "message", v4289], JAM.policy.p4);
        JAM.call(this.R, this, [], JAM.policy.p4);
        var v3535 = this.ma;
        if (v3535) {
          JAM.call(this.ta, this, [b$$312, Yf], JAM.policy.p4);
          b$$312 = this.U;
          this.U = null;
          if (b$$312) {
            var v4948 = JAM.call(this.v, this, [], JAM.policy.p4);
            var v4949 = this.za;
            var v4950 = !0;
            JAM.call(b$$312, null, [v4948, v4949, v4950], JAM.policy.p4);
          }
        }
      }
    }
    return;
  }
  function v148(a$$394, b$$311, c$$209) {
    var v515;
    var v2270 = Wf[a$$394];
    if (v2270) {
      JAM.call(this.Ac, this, [c$$209, a$$394], JAM.policy.p4);
      v515 = !0;
    } else {
      var v2269;
      var v3536 = "zr" == a$$394;
      if (v3536) {
        JAM.call(this.Dc, this, [c$$209], JAM.policy.p4);
        var v4727 = this.F;
        if (v4727) {
          JAM.call(this.gb, this, [b$$311], JAM.policy.p4);
        }
        v2269 = !0;
      } else {
        v2269 = !1;
      }
      v515 = v2269;
    }
    return v515;
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
    var v516;
    if (a$$inline_325) {
      v516 = 8;
    } else {
      v516 = 0;
    }
    a$$inline_325 = v516;
    var v517;
    if (b$$inline_326) {
      v517 = 16;
    } else {
      v517 = 0;
    }
    b$$inline_326 = v517;
    var v518;
    if (c$$inline_327) {
      v518 = 32;
    } else {
      v518 = 0;
    }
    c$$inline_327 = v518;
    var v519;
    if (d$$inline_328) {
      v519 = 64;
    } else {
      v519 = 0;
    }
    d$$inline_328 = v519;
    var v2271 = a$$inline_325 | b$$inline_326;
    var v520 = v2271 | c$$inline_327;
    JSCompiler_inline_result$$8 = v520 | d$$inline_328;
    return JSCompiler_inline_result$$8;
  }
  function v145() {
    var a$$392 = this.F;
    if (a$$392) {
      var b$$309 = JAM.call(ce, null, [a$$392, "w"], JAM.policy.p4);
      var c$$207 = JAM.call(ce, null, [a$$392, "h"], JAM.policy.p4);
      var d$$132 = JAM.call(ce, null, [a$$392, "ifi"], JAM.policy.p4);
      d$$132 = JAM.call(Lb, null, [d$$132], JAM.policy.p4);
      d$$132 = {id:d$$132, name:d$$132};
      var v521 = !1;
      var v522 = JAM.call(Df, null, [a$$392], JAM.policy.p4);
      JAM.call(Ff, null, [d$$132, b$$309, c$$207, v521, v522], JAM.policy.p4);
      var v2272 = this.Q;
      var v523 = v2272.document;
      var v524 = JAM.call(Cf, null, [d$$132], JAM.policy.p4);
      JAM.call(v523.write, v523, [v524], JAM.policy.p4);
      this.va = !0;
    }
    return;
  }
  function v144(a$$391, b$$308) {
    var v2273 = this.ma;
    var v528 = !v2273;
    if (v528) {
      this.F = a$$391;
      this.U = b$$308;
      var v527 = this.hc;
      if (v527) {
        try {
          var v525 = JAM.call(this.J, this, [], JAM.policy.p4);
          JAM.call(this.gb, this, [v525], JAM.policy.p4);
        } catch (c$$206) {
          this.Sb = !0;
          var v2274 = JAM.call(this.v, this, [], JAM.policy.p4);
          var v2275 = !1;
          JAM.call(b$$308, null, [v2274, null, v2275], JAM.policy.p4);
        }
      } else {
        var v2276 = this.Za;
        var v526 = "AZ" == v2276;
        if (v526) {
          JAM.call(this.wb, this, [], JAM.policy.p4);
        }
      }
    }
    return;
  }
  function v143() {
    this.F = "";
    this.ma = this.jc = !0;
    this.U = null;
    var v529 = this.hc;
    if (v529) {
      var v3537 = this.Q;
      var v3538 = this.K;
      JAM.call(A$$1, null, [v3537, "message", v3538], JAM.policy.p4);
      var v3539 = JAM.call(this.J, this, [], JAM.policy.p4);
      JAM.call(this.ta, this, [v3539, Yf], JAM.policy.p4);
    }
    return;
  }
  function v142() {
    var a$$390 = Ge;
    var v2277 = this.Za;
    var v2278 = a$$390.IFRAME_SIGNALING;
    var v530 = v2277 == v2278;
    var v2281 = !v530;
    if (v2281) {
      var v2279 = this.Za;
      var v2280 = a$$390.ALWAYS_ZRT;
      v530 = v2279 == v2280;
    }
    return v530;
  }
  function v141() {
    var v531 = this.va;
    var v2282 = !v531;
    if (v2282) {
      v531 = this.ma;
    }
    return v531;
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
    JAM.call(a$$355.fn, a$$355, [], JAM.policy.p4);
    return;
  }
  function v135() {
    var v3540 = this.j;
    var v2283 = 0 == v3540;
    if (v2283) {
      var v3541 = this.oa;
      v2283 = v3541.length;
    }
    var v535 = v2283;
    if (v535) {
      var v532 = this.oa;
      var a$$354 = JAM.call(v532.shift, v532, [], JAM.policy.p4);
      this.j = 2;
      var v2284 = this.ab;
      var v533 = JAM.call(r$$2, null, [v2284, this, a$$354], JAM.policy.p4);
      var b$$282 = JAM.call(xe, null, ["sjr::run", v533], JAM.policy.p4);
      var v534 = a$$354.win;
      JAM.call(v534.setTimeout, v534, [b$$282, 0], JAM.policy.p4);
      JAM.call(this.sa, this, [], JAM.policy.p4);
    }
    return;
  }
  function v134() {
    var v2285 = this.Oc;
    var v536 = JAM.call(r$$2, null, [v2285, this], JAM.policy.p4);
    var a$$353 = JAM.call(xe, null, ["sjr::tryrun", v536], JAM.policy.p4);
    var v537 = this.p;
    JAM.call(v537.setTimeout, v537, [a$$353, 0], JAM.policy.p4);
    return;
  }
  function v133() {
    var v2286 = !window;
    var v3542 = !v2286;
    if (v3542) {
      v2286 = !Array;
    }
    var v538 = v2286;
    return!v538;
  }
  function v132() {
    var v2287 = this.j;
    var v539 = 1 == v2287;
    if (v539) {
      var v4290 = this.na;
      var v3543 = null != v4290;
      if (v3543) {
        var v4728 = this.p;
        var v4729 = this.na;
        JAM.call(v4728.clearTimeout, v4728, [v4729], JAM.policy.p4);
        this.na = null;
      }
      this.j = 0;
    }
    JAM.call(this.sa, this, [], JAM.policy.p4);
    return;
  }
  function v131(a$$352) {
    this.j = 1;
    if (a$$352) {
      var v2288 = this.ra;
      var v540 = JAM.call(r$$2, null, [v2288, this], JAM.policy.p4);
      var b$$281 = JAM.call(xe, null, ["sjr::timeout", v540], JAM.policy.p4);
      var v541 = this.p;
      var v5120 = JAM.call(v541.setTimeout, v541, [b$$281, a$$352], JAM.policy.p4);
      this.na = v5120;
    }
    return;
  }
  function v130(a$$351, b$$280) {
    var v542 = this.oa;
    var v3544 = b$$280;
    var v4291 = !v3544;
    if (v4291) {
      v3544 = this.p;
    }
    var v2289 = v3544;
    var v543 = JAM.new(nf, [a$$351, v2289], JAM.policy.p4);
    JAM.call(v542.push, v542, [v543], JAM.policy.p4);
    JAM.call(this.sa, this, [], JAM.policy.p4);
    return;
  }
  function v129(a$$350, b$$279) {
    var v544;
    var v4730 = this.j;
    var v4292 = 0 != v4730;
    var v4732 = !v4292;
    if (v4732) {
      var v4951 = this.oa;
      var v4731 = v4951.length;
      v4292 = 0 != v4731;
    }
    var v3545 = v4292;
    var v4294 = !v3545;
    if (v4294) {
      var v4293 = b$$279;
      if (v4293) {
        v4293 = b$$279 != window;
      }
      v3545 = v4293;
    }
    var v2290 = v3545;
    if (v2290) {
      v544 = JAM.call(this.Y, this, [a$$350, b$$279], JAM.policy.p4);
    } else {
      this.j = 2;
      var v3546 = JAM.new(nf, [a$$350, window], JAM.policy.p4);
      v544 = JAM.call(this.ab, this, [v3546], JAM.policy.p4);
    }
    v544;
    return;
  }
  function v128(a$$342, b$$273, c$$185) {
    var d$$116;
    var e$$71 = {signature:"", adFrames:0};
    var v2291 = T$$1.MAXIMUM_IFRAME_DEPTH;
    var v545 = c$$185 > v2291;
    if (v545) {
      return e$$71;
    }
    try {
      var v546 = T$$1.NAME_FIRST_GOOGLE_WINDOW;
      d$$116 = a$$342[v546];
    } catch (f$$43) {
    }
    if (d$$116) {
      var v3547;
      var v4295 = a$$342 == b$$273;
      if (v4295) {
        v3547 = "I";
      } else {
        v3547 = "A";
      }
      e$$71.signature = v3547;
      e$$71.adFrames = 1;
    }
    var g$$27 = 0;
    var v2292 = a$$342.length;
    var v548 = g$$27 < v2292;
    for (;v548;) {
      var h$$19 = a$$342[g$$27];
      var v547 = h$$19 != d$$116;
      if (v547) {
        var v4296 = c$$185 + 1;
        h$$19 = JAM.call(T$$1.Ha, T$$1, [h$$19, b$$273, v4296], JAM.policy.p4);
        var v4733 = e$$71.adFrames;
        var v4734 = h$$19.adFrames;
        e$$71.adFrames = v4733 + v4734;
        var v3548;
        var v4300 = h$$19.signature;
        if (v4300) {
          var v4297 = e$$71.signature;
          var v4952 = h$$19.signature;
          var v4735 = "!" + v4952;
          var v4298 = v4735 + "~";
          v3548 = v4297 + v4298;
        } else {
          var v4299 = e$$71.signature;
          v3548 = v4299 + "o";
        }
        e$$71.signature = v3548;
      }
      g$$27 = g$$27 + 1;
      var v2293 = a$$342.length;
      v548 = g$$27 < v2293;
    }
    return e$$71;
  }
  function v127(a$$341, b$$272, c$$184, d$$115, e$$70) {
    var v549 = a$$341.top;
    a$$341 = JAM.call(T$$1.Ha, T$$1, [v549, a$$341, 0], JAM.policy.p4);
    var v550 = a$$341.signature;
    var f$$42 = JAM.call(v550.substring, v550, [0, 1800], JAM.policy.p4);
    var v551 = a$$341.adFrames;
    b$$272 = {frmn:v551, frms:f$$42, adk:b$$272, correlator:c$$184, frm:d$$115, frmn0:e$$70};
    var v552 = JAM.call(La$$1, null, [], JAM.policy.p4);
    c$$184 = JAM.call(L$$1, null, [v552, "/pagead/gen_204?id=frmn"], JAM.policy.p4);
    var JSCompiler_inline_result$$56;
    var a$$inline_256 = [c$$184];
    var b$$inline_257 = b$$272;
    var c$$inline_258;
    for (c$$inline_258 in b$$inline_257) {
      var v553 = b$$inline_257[c$$inline_258];
      JAM.call(Ve, null, [c$$inline_258, v553, a$$inline_256], JAM.policy.p4);
    }
    JSCompiler_inline_result$$56 = a$$inline_256;
    var a$$inline_260 = JSCompiler_inline_result$$56;
    var v556 = a$$inline_260[1];
    if (v556) {
      var b$$inline_261 = a$$inline_260[0];
      var c$$inline_262 = JAM.call(b$$inline_261.indexOf, b$$inline_261, ["#"], JAM.policy.p4);
      var v554 = 0 <= c$$inline_262;
      if (v554) {
        var v3549 = JAM.call(b$$inline_261.substr, b$$inline_261, [c$$inline_262], JAM.policy.p4);
        JAM.call(a$$inline_260.push, a$$inline_260, [v3549], JAM.policy.p4);
        var v3550 = a$$inline_260;
        JAM.set(v3550, 0, b$$inline_261 = JAM.call(b$$inline_261.substr, b$$inline_261, [0, c$$inline_262], JAM.policy.p5), JAM.policy.p5);
      }
      c$$inline_262 = JAM.call(b$$inline_261.indexOf, b$$inline_261, ["?"], JAM.policy.p4);
      var v555;
      var v2295 = 0 > c$$inline_262;
      if (v2295) {
        introspect(JAM.policy.p2) {
          v555 = a$$inline_260[1] = "?";
        }
      } else {
        var v4301 = b$$inline_261.length;
        var v3551 = v4301 - 1;
        var v2294 = c$$inline_262 == v3551;
        if (v2294) {
          introspect(JAM.policy.p2) {
            v2294 = a$$inline_260[1] = void 0;
          }
        }
        v555 = v2294;
      }
      v555;
    }
    c$$184 = JAM.call(a$$inline_260.join, a$$inline_260, [""], JAM.policy.p4);
    JAM.call(nb$$1, null, [w$$6, c$$184], JAM.policy.p4);
    return;
  }
  function v126(a$$340, b$$271, c$$183, d$$114) {
    var v557 = a$$340.top;
    var e$$69 = JAM.call(T$$1.Ha, T$$1, [v557, a$$340, 0], JAM.policy.p4);
    var v2296 = T$$1.Uc;
    var v2297 = e$$69.adFrames;
    var v558 = JAM.call(ga$$1, null, [v2296, a$$340, b$$271, c$$183, d$$114, v2297], JAM.policy.p4);
    var v559 = T$$1.IFRAME_COUNTS_DELAY;
    JAM.call(window.setTimeout, window, [v558, v559], JAM.policy.p4);
    return e$$69.adFrames;
  }
  function v125(a$$339, b$$270) {
    var c$$182 = T$$1;
    var v2298 = a$$339.top;
    var v560 = v2298 == a$$339;
    if (v560) {
      return c$$182.NO_IFRAMING;
    }
    if (b$$270) {
      var v561 = a$$339.location;
      var d$$113 = v561.ancestorOrigins;
      if (d$$113) {
        var v562;
        var v4736 = d$$113.length;
        var v4302 = v4736 - 1;
        var v3552 = d$$113[v4302];
        var v4303 = a$$339.location;
        var v3553 = v4303.origin;
        var v2299 = v3552 == v3553;
        if (v2299) {
          v562 = c$$182.SAME_DOMAIN_IFRAMING;
        } else {
          v562 = c$$182.CROSS_DOMAIN_IFRAMING;
        }
        return v562;
      }
    }
    var v563;
    var v3554 = a$$339.top;
    var v2300 = JAM.call(Kb, null, [v3554], JAM.policy.p4);
    if (v2300) {
      v563 = c$$182.SAME_DOMAIN_IFRAMING;
    } else {
      v563 = c$$182.CROSS_DOMAIN_IFRAMING;
    }
    return v563;
  }
  function v124(a$$331, b$$264) {
    var c$$177 = JAM.call(Oe, null, ["rs", a$$331], JAM.policy.p4);
    var d$$110 = JAM.call(ce, null, [a$$331, "dt"], JAM.policy.p4);
    var v2301 = JAM.call(Hb, null, [d$$110], JAM.policy.p4);
    var v564 = "&dtd=" + v2301;
    c$$177 = JAM.call(c$$177.replace, c$$177, [/&dtd=(\d+|M)/, v564], JAM.policy.p4);
    JAM.call(this.set, this, [b$$264, c$$177], JAM.policy.p4);
    return c$$177;
  }
  function v123(a$$330) {
    var v2302 = this.p;
    var v565 = v2302.document;
    a$$330 = JAM.call(v565.getElementById, v565, [a$$330], JAM.policy.p4);
    var v566 = a$$330.contentWindow;
    var b$$263 = v566.document;
    var v3555 = a$$330.onload;
    if (v3555) {
      v3555 = b$$263;
    }
    var v2303 = v3555;
    if (v2303) {
      var v4304 = b$$263.body;
      var v3556 = !v4304;
      var v4306 = !v3556;
      if (v4306) {
        var v4737 = b$$263.body;
        var v4305 = v4737.firstChild;
        v3556 = !v4305;
      }
      v2303 = v3556;
    }
    var v567 = v2303;
    if (v567) {
      JAM.call(a$$330.onload, a$$330, [], JAM.policy.p4);
    }
    return;
  }
  function v122(a$$329, b$$262) {
    var v2304 = this.hd;
    var v568 = v2304.handlers;
    JAM.set(v568, a$$329, b$$262, JAM.policy.p2);
    var v2305 = this.p;
    var v569 = v2305.addEventListener;
    if (v569) {
      var v2306 = this.p;
      var v3557 = this.Jb;
      var v2307 = JAM.call(r$$2, null, [v3557, this, a$$329], JAM.policy.p4);
      var v2308 = !1;
      JAM.call(v2306.addEventListener, v2306, ["load", v2307, v2308], JAM.policy.p4);
    }
    return;
  }
  function v121(a$$322, b$$256) {
    JAM.call(b$$256.push, b$$256, ["{"], JAM.policy.p4);
    var c$$173 = "";
    var d$$109;
    for (d$$109 in a$$322) {
      var v571 = JAM.call(a$$322.hasOwnProperty, a$$322, [d$$109], JAM.policy.p4);
      if (v571) {
        var e$$68 = a$$322[d$$109];
        var v2309 = typeof e$$68;
        var v570 = "function" != v2309;
        if (v570) {
          JAM.call(b$$256.push, b$$256, [c$$173], JAM.policy.p4);
          JAM.call(this.r, this, [d$$109, b$$256], JAM.policy.p4);
          JAM.call(b$$256.push, b$$256, [":"], JAM.policy.p4);
          JAM.call(this.n, this, [e$$68, b$$256], JAM.policy.p4);
          c$$173 = ",";
        }
      }
    }
    JAM.call(b$$256.push, b$$256, ["}"], JAM.policy.p4);
    return;
  }
  function v120(a$$321, b$$255) {
    var c$$172 = a$$321.length;
    JAM.call(b$$255.push, b$$255, ["["], JAM.policy.p4);
    var d$$108 = "";
    var e$$67 = 0;
    var v572 = e$$67 < c$$172;
    for (;v572;) {
      JAM.call(b$$255.push, b$$255, [d$$108], JAM.policy.p4);
      var v3558 = a$$321[e$$67];
      JAM.call(this.n, this, [v3558, b$$255], JAM.policy.p4);
      d$$108 = ",";
      e$$67 = e$$67 + 1;
      v572 = e$$67 < c$$172;
    }
    JAM.call(b$$255.push, b$$255, ["]"], JAM.policy.p4);
    return;
  }
  function v119(a$$320, b$$254) {
    var v2310;
    var v4307 = JAM.call(isFinite, null, [a$$320], JAM.policy.p4);
    if (v4307) {
      var v4738 = JAM.call(isNaN, null, [a$$320], JAM.policy.p4);
      v4307 = !v4738;
    }
    var v3559 = v4307;
    if (v3559) {
      v2310 = a$$320;
    } else {
      v2310 = "null";
    }
    var v573 = v2310;
    JAM.call(b$$254.push, b$$254, [v573], JAM.policy.p4);
    return;
  }
  function v118(a$$318, b$$252) {
    function v117(a$$319) {
      var v574 = a$$319 in Ce;
      if (v574) {
        return Ce[a$$319];
      }
      var b$$253 = JAM.call(a$$319.charCodeAt, a$$319, [0], JAM.policy.p4);
      var e$$66 = "\\u";
      var v575;
      var v2312 = 16 > b$$253;
      if (v2312) {
        v575 = e$$66 = e$$66 + "000";
      } else {
        var v2311;
        var v3561 = 256 > b$$253;
        if (v3561) {
          v2311 = e$$66 = e$$66 + "00";
        } else {
          var v3560 = 4096 > b$$253;
          if (v3560) {
            v3560 = e$$66 = e$$66 + "0";
          }
          v2311 = v3560;
        }
        v575 = v2311;
      }
      v575;
      var v576 = Ce;
      var v577 = a$$319;
      var v2313 = e$$66;
      var v2314 = JAM.call(b$$253.toString, b$$253, [16], JAM.policy.p4);
      return JAM.set(v576, v577, v2313 + v2314, JAM.policy.p2);
    }
    JAM.call(b$$252.push, b$$252, ['"'], JAM.policy.p4);
    var v578 = JAM.call(a$$318.replace, a$$318, [De, v117], JAM.policy.p4);
    JAM.call(b$$252.push, b$$252, [v578], JAM.policy.p4);
    JAM.call(b$$252.push, b$$252, ['"'], JAM.policy.p4);
    return;
  }
  function v116(a$$317, b$$251) {
    var v582 = typeof a$$317;
    switch(v582) {
      case "string":
        JAM.call(this.r, this, [a$$317, b$$251], JAM.policy.p4);
        break;
      case "number":
        JAM.call(this.L, this, [a$$317, b$$251], JAM.policy.p4);
        break;
      case "boolean":
        JAM.call(b$$251.push, b$$251, [a$$317], JAM.policy.p4);
        break;
      case "undefined":
        JAM.call(b$$251.push, b$$251, ["null"], JAM.policy.p4);
        break;
      case "object":
        var v579 = null == a$$317;
        if (v579) {
          JAM.call(b$$251.push, b$$251, ["null"], JAM.policy.p4);
          break;
        }
        var v580 = a$$317 instanceof Array;
        if (v580) {
          JAM.call(this.yc, this, [a$$317, b$$251], JAM.policy.p4);
          break;
        }
        JAM.call(this.M, this, [a$$317, b$$251], JAM.policy.p4);
        break;
      case "function":
        break;
      default:
        var v2315 = typeof a$$317;
        var v581 = "Unknown type: " + v2315;
        throw JAM.call(Error, null, [v581], JAM.policy.p4);;
    }
    return;
  }
  function v115(a$$316) {
    var b$$250 = [];
    JAM.call(this.n, this, [a$$316, b$$250], JAM.policy.p4);
    return JAM.call(b$$250.join, b$$250, [""], JAM.policy.p4);
  }
  function v114() {
    return this.Lb;
  }
  function v113() {
    var v583 = window.google_enable_ose_periscope;
    if (v583) {
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
    var v584 = e$$60 && f$$36;
    if (v584) {
      g$$24 = JAM.new(u$$2, [e$$60, f$$36], JAM.policy.p4);
    }
    var v2316 = this.xa;
    if (v2316) {
      v2316 = d$$98;
    }
    var v588 = v2316;
    if (v588) {
      var v585 = !0;
      JAM.call(this.xa, this, [d$$98, a$$299, b$$236, v585, "", g$$24, ""], JAM.policy.p4);
    } else {
      var v587 = "js" == c$$162;
      if (v587) {
        JAM.call(this.oc, this, [a$$299, "google_ad_request_done"], JAM.policy.p4);
      } else {
        var h$$17 = JAM.new(le, [a$$299, b$$236, c$$162, d$$98, g$$24], JAM.policy.p4);
        var v586 = this.q;
        JAM.call(v586.push, v586, [h$$17], JAM.policy.p4);
        if (d$$98) {
          a$$299 = v111;
          JAM.call(fe, null, [d$$98, a$$299], JAM.policy.p4);
        }
      }
      JAM.call(this.bc, this, [], JAM.policy.p4);
    }
    return;
  }
  function v110() {
    var v2317 = this.ha;
    var v589 = v2317.length;
    var v2318 = this.q;
    var v590 = v2318.length;
    return v589 + v590;
  }
  function v109() {
    return this.Aa;
  }
  function v108() {
    var v591;
    if (window) {
      v591 = this.Wa;
    } else {
      v591 = 0;
    }
    return v591;
  }
  function v107() {
    return this.Db;
  }
  function v106() {
    return "";
  }
  function v105(a$$298) {
    var v592 = JAM.call(this.getOseId, this, [], JAM.policy.p4);
    if (v592) {
      return JAM.call(this.getOseId, this, [], JAM.policy.p4);
    }
    var b$$235 = window.google_enable_ose;
    var c$$161;
    var v593;
    var v3562 = !0;
    var v2320 = v3562 === b$$235;
    if (v2320) {
      v593 = c$$161 = 2;
    } else {
      var v3563 = !1;
      var v2319 = v3563 !== b$$235;
      if (v2319) {
        var v4308 = [2];
        var v3564 = c$$161 = JAM.call(vb, null, [v4308, ie], JAM.policy.p4);
        var v4310 = !v3564;
        if (v4310) {
          var v4309 = [3];
          v3564 = c$$161 = JAM.call(vb, null, [v4309, je], JAM.policy.p4);
        }
        v2319 = v3564;
      }
      v593 = v2319;
    }
    v593;
    var v594 = !c$$161;
    if (v594) {
      return 0;
    }
    this.Wa = c$$161;
    var v595 = a$$298 || 0;
    var v5121 = JAM.call(String, null, [v595], JAM.policy.p4);
    this.Aa = v5121;
    return JAM.call(this.getOseId, this, [], JAM.policy.p4);
  }
  function v104() {
    var a$$297 = [];
    var v596 = this.q;
    var b$$234 = v596.length;
    var c$$160 = 0;
    var v599 = c$$160 < b$$234;
    for (;v599;) {
      var v597 = this.q;
      var d$$97 = v597[c$$160];
      var v598 = d$$97.nb;
      JAM.call(a$$297.push, a$$297, [v598], JAM.policy.p4);
      c$$160 = c$$160 + 1;
      v599 = c$$160 < b$$234;
    }
    return a$$297;
  }
  function v103(a$$296, b$$233) {
    if (b$$233) {
      var v2321 = this.wa;
      JAM.call(this.Fa, this, [v2321, a$$296, 1], JAM.policy.p4);
    }
    var v600 = this.q;
    var c$$159 = v600.length;
    var d$$96 = 0;
    var v603 = d$$96 < c$$159;
    for (;v603;) {
      var v601 = this.q;
      var e$$59 = v601[d$$96];
      var v3565 = e$$59.Vb;
      var v2322 = !v3565;
      if (v2322) {
        v2322 = e$$59.kb;
      }
      var v602 = v2322;
      if (v602) {
        var v3566 = e$$59.kb;
        var v3567 = e$$59.nb;
        var v3568 = e$$59.fd;
        var v3569 = e$$59.lb;
        var v3570 = e$$59.Yc;
        JAM.call(a$$296, null, [v3566, v3567, v3568, v3569, "", v3570, ""], JAM.policy.p4);
        e$$59.Vb = !0;
      }
      d$$96 = d$$96 + 1;
      v603 = d$$96 < c$$159;
    }
    if (b$$233) {
      this.xa = a$$296;
    }
    return;
  }
  function v102(a$$295, b$$232, c$$158) {
    var d$$95 = this.ha;
    var v2323 = d$$95.length;
    var v618 = 0 < v2323;
    if (v618) {
      var v604 = a$$295.document;
      var e$$58 = JAM.call(v604.getElementsByTagName, v604, ["a"], JAM.policy.p4);
      var f$$35 = 0;
      var v2324 = e$$58.length;
      var v617 = f$$35 < v2324;
      for (;v617;) {
        var g$$23 = 0;
        var v2325 = d$$95.length;
        var v616 = g$$23 < v2325;
        for (;v616;) {
          var v605 = d$$95[g$$23];
          var h$$16 = v605[1];
          var v4311 = e$$58[f$$35];
          var v3571 = v4311.href;
          var v2326 = JAM.call(v3571.indexOf, v3571, [h$$16], JAM.policy.p4);
          var v615 = 0 <= v2326;
          if (v615) {
            var v606 = e$$58[f$$35];
            h$$16 = v606.parentNode;
            var v2327 = d$$95[g$$23];
            var v609 = v2327[2];
            if (v609) {
              var k$$6 = h$$16;
              var l$$9 = 0;
              var v608 = 4 > l$$9;
              for (;v608;) {
                var v3572 = k$$6.innerHTML;
                var v4312 = d$$95[g$$23];
                var v3573 = v4312[2];
                var v2328 = JAM.call(v3572.indexOf, v3572, [v3573], JAM.policy.p4);
                var v607 = 0 <= v2328;
                if (v607) {
                  h$$16 = k$$6;
                  break;
                }
                k$$6 = k$$6.parentNode;
                l$$9 = l$$9 + 1;
                v608 = 4 > l$$9;
              }
            }
            k$$6 = !0;
            var v610 = d$$95[g$$23];
            l$$9 = v610[3];
            var v611 = d$$95[g$$23];
            var z$$4 = v611[5];
            var v2329 = d$$95[g$$23];
            var v612 = v2329[0];
            var v613 = c$$158 || 0;
            var v614 = void 0;
            JAM.call(b$$232, null, [h$$16, v612, v613, k$$6, l$$9, v614, z$$4], JAM.policy.p4);
            JAM.call(d$$95.splice, d$$95, [g$$23, 1], JAM.policy.p4);
            break;
          }
          g$$23 = g$$23 + 1;
          var v2330 = d$$95.length;
          v616 = g$$23 < v2330;
        }
        f$$35 = f$$35 + 1;
        var v2331 = e$$58.length;
        v617 = f$$35 < v2331;
      }
    }
    var v3574 = d$$95.length;
    var v2332 = 0 < v3574;
    if (v2332) {
      var v3575 = a$$295;
      var v3576 = JAM.call(hc, null, [], JAM.policy.p4);
      v2332 = v3575 != v3576;
    }
    var v620 = v2332;
    if (v620) {
      try {
        var v619 = a$$295.parent;
        JAM.call(this.Fa, this, [v619, b$$232, c$$158], JAM.policy.p4);
      } catch (C$$2) {
      }
    }
    return;
  }
  function v101() {
    var v621 = this.Ua;
    var v2333 = !v621;
    if (v2333) {
      var v4313 = JAM.call(D$$1, null, [], JAM.policy.p4);
      JAM.call(mb$$1, null, [v4313], JAM.policy.p4);
      JAM.call(jb$$1, null, [he], JAM.policy.p4);
      this.Ua = !0;
    }
    return;
  }
  function v100(a$$294, b$$230) {
    function v99(b$$231) {
      var v2334 = b$$231;
      if (v2334) {
        var v3577 = b$$231.length;
        v2334 = 0 < v3577;
      }
      var v626 = v2334;
      if (v626) {
        var v622;
        var v3578 = b$$231.length;
        var v2336 = 1 < v3578;
        if (v2336) {
          var v2335 = b$$231[1];
          v622 = v2335.url;
        } else {
          v622 = null;
        }
        var f$$34 = v622;
        var v2337 = b$$231[0];
        var v623 = v2337.log_info;
        var v2338 = !v623;
        if (v2338) {
          v623 = null;
        }
        var g$$22 = v623;
        var v2339 = b$$231[0];
        var v624 = v2339.activeview_url;
        var v2340 = !v624;
        if (v2340) {
          v624 = null;
        }
        var h$$15 = v624;
        var v4314 = b$$231[0];
        var v3579 = v4314.url;
        var v2341 = JAM.call(Va$$1, null, [v3579], JAM.policy.p4);
        var v625 = [a$$294, v2341, f$$34, g$$22, null, h$$15];
        JAM.call(c$$157.push, c$$157, [v625], JAM.policy.p4);
      }
      JAM.call(d$$94, null, [b$$231], JAM.policy.p4);
      return;
    }
    var c$$157 = this.ha;
    var v627 = this.wa;
    var d$$94 = v627[b$$230];
    if (d$$94) {
      var v4315 = d$$94.orig_callback;
      var v4739 = !v4315;
      if (v4739) {
        v4315 = d$$94;
      }
      d$$94 = v4315;
      var v4316 = this.wa;
      JAM.set(v4316, b$$230, v99, JAM.policy.p2);
      var v4317 = this.wa;
      var v3580 = v4317[b$$230];
      v3580.orig_callback = d$$94;
    }
    return;
  }
  function v98(a$$254, b$$194) {
    var v628;
    var v2342 = JAM.call(q$$3, null, [b$$194], JAM.policy.p4);
    if (v2342) {
      v628 = b$$194;
    } else {
      v628 = a$$254;
    }
    var c$$127 = v628;
    var v2343 = this.left;
    this.left = v2343 * a$$254;
    var v2344 = this.right;
    this.right = v2344 * a$$254;
    var v2345 = this.top;
    this.top = v2345 * c$$127;
    var v2346 = this.bottom;
    this.bottom = v2346 * c$$127;
    return this;
  }
  function v97(a$$253, b$$193) {
    var v629;
    var v2347 = a$$253 instanceof M$$1;
    if (v2347) {
      var v4953 = this.left;
      var v4954 = a$$253.x;
      this.left = v4953 + v4954;
      var v4955 = this.right;
      var v4956 = a$$253.x;
      this.right = v4955 + v4956;
      var v4740 = this.top;
      var v4741 = a$$253.y;
      this.top = v4740 + v4741;
      var v4318 = this.bottom;
      var v4319 = a$$253.y;
      v629 = this.bottom = v4318 + v4319;
    } else {
      var v4742 = this.left;
      this.left = v4742 + a$$253;
      var v4743 = this.right;
      this.right = v4743 + a$$253;
      var v3581 = JAM.call(q$$3, null, [b$$193], JAM.policy.p4);
      if (v3581) {
        var v4957 = this.top;
        this.top = v4957 + b$$193;
        var v4958 = this.bottom;
        v3581 = this.bottom = v4958 + b$$193;
      }
      v629 = v3581;
    }
    v629;
    return this;
  }
  function v96() {
    var v630 = this.top;
    var v5122 = JAM.call(Math.round, Math, [v630], JAM.policy.p4);
    this.top = v5122;
    var v631 = this.right;
    var v5123 = JAM.call(Math.round, Math, [v631], JAM.policy.p4);
    this.right = v5123;
    var v632 = this.bottom;
    var v5124 = JAM.call(Math.round, Math, [v632], JAM.policy.p4);
    this.bottom = v5124;
    var v633 = this.left;
    var v5125 = JAM.call(Math.round, Math, [v633], JAM.policy.p4);
    this.left = v5125;
    return this;
  }
  function v95() {
    var v634 = this.top;
    var v5126 = JAM.call(Math.floor, Math, [v634], JAM.policy.p4);
    this.top = v5126;
    var v635 = this.right;
    var v5127 = JAM.call(Math.floor, Math, [v635], JAM.policy.p4);
    this.right = v5127;
    var v636 = this.bottom;
    var v5128 = JAM.call(Math.floor, Math, [v636], JAM.policy.p4);
    this.bottom = v5128;
    var v637 = this.left;
    var v5129 = JAM.call(Math.floor, Math, [v637], JAM.policy.p4);
    this.left = v5129;
    return this;
  }
  function v94() {
    var v638 = this.top;
    var v5130 = JAM.call(Math.ceil, Math, [v638], JAM.policy.p4);
    this.top = v5130;
    var v639 = this.right;
    var v5131 = JAM.call(Math.ceil, Math, [v639], JAM.policy.p4);
    this.right = v5131;
    var v640 = this.bottom;
    var v5132 = JAM.call(Math.ceil, Math, [v640], JAM.policy.p4);
    this.bottom = v5132;
    var v641 = this.left;
    var v5133 = JAM.call(Math.ceil, Math, [v641], JAM.policy.p4);
    this.left = v5133;
    return this;
  }
  function v93(a$$252, b$$192, c$$126, d$$78) {
    var v642;
    var v2348 = JAM.call(da$$1, null, [a$$252], JAM.policy.p4);
    if (v2348) {
      var v4959 = this.top;
      var v4960 = a$$252.top;
      this.top = v4959 - v4960;
      var v4961 = this.right;
      var v4962 = a$$252.right;
      this.right = v4961 + v4962;
      var v4744 = this.bottom;
      var v4745 = a$$252.bottom;
      this.bottom = v4744 + v4745;
      var v4320 = this.left;
      var v4321 = a$$252.left;
      v642 = this.left = v4320 - v4321;
    } else {
      var v4963 = this.top;
      this.top = v4963 - a$$252;
      var v4964 = this.right;
      this.right = v4964 + b$$192;
      var v4746 = this.bottom;
      this.bottom = v4746 + c$$126;
      var v4322 = this.left;
      v642 = this.left = v4322 - d$$78;
    }
    v642;
    return this;
  }
  function v92(a$$251) {
    var v643;
    var v2350 = this && a$$251;
    if (v2350) {
      var v2349;
      var v3584 = a$$251 instanceof P$$1;
      if (v3584) {
        var v4965 = a$$251.left;
        var v4966 = this.left;
        var v4747 = v4965 >= v4966;
        if (v4747) {
          var v4967 = a$$251.right;
          var v4968 = this.right;
          v4747 = v4967 <= v4968;
        }
        var v4323 = v4747;
        if (v4323) {
          var v4748 = a$$251.top;
          var v4749 = this.top;
          v4323 = v4748 >= v4749;
        }
        var v3582 = v4323;
        if (v3582) {
          var v4324 = a$$251.bottom;
          var v4325 = this.bottom;
          v3582 = v4324 <= v4325;
        }
        v2349 = v3582;
      } else {
        var v4969 = a$$251.x;
        var v4970 = this.left;
        var v4750 = v4969 >= v4970;
        if (v4750) {
          var v4971 = a$$251.x;
          var v4972 = this.right;
          v4750 = v4971 <= v4972;
        }
        var v4326 = v4750;
        if (v4326) {
          var v4751 = a$$251.y;
          var v4752 = this.top;
          v4326 = v4751 >= v4752;
        }
        var v3583 = v4326;
        if (v3583) {
          var v4327 = a$$251.y;
          var v4328 = this.bottom;
          v3583 = v4327 <= v4328;
        }
        v2349 = v3583;
      }
      v643 = v2349;
    } else {
      v643 = !1;
    }
    return v643;
  }
  function v91() {
    var JSCompiler_inline_result$$2;
    var a$$inline_141 = this.V;
    var v644;
    var v3585 = Pc;
    var v4330 = !v3585;
    if (v4330) {
      var v4329 = a$$inline_141.compatMode;
      v3585 = "CSS1Compat" != v4329;
    }
    var v2352 = v3585;
    if (v2352) {
      var v2351 = a$$inline_141.body;
      var v3586 = !v2351;
      if (v3586) {
        v2351 = a$$inline_141.documentElement;
      }
      v644 = v2351;
    } else {
      v644 = a$$inline_141.documentElement;
    }
    var b$$inline_142 = v644;
    var v645 = a$$inline_141.parentWindow;
    var v2353 = !v645;
    if (v2353) {
      v645 = a$$inline_141.defaultView;
    }
    a$$inline_141 = v645;
    var v646;
    var v4331 = N$$1;
    if (v4331) {
      v4331 = JAM.call(Uc, null, ["10"], JAM.policy.p4);
    }
    var v3587 = v4331;
    if (v3587) {
      var v4332 = a$$inline_141.pageYOffset;
      var v4333 = b$$inline_142.scrollTop;
      v3587 = v4332 != v4333;
    }
    var v2358 = v3587;
    if (v2358) {
      var v2354 = b$$inline_142.scrollLeft;
      var v2355 = b$$inline_142.scrollTop;
      v646 = JAM.new(M$$1, [v2354, v2355], JAM.policy.p4);
    } else {
      var v3588 = a$$inline_141.pageXOffset;
      var v4334 = !v3588;
      if (v4334) {
        v3588 = b$$inline_142.scrollLeft;
      }
      var v2356 = v3588;
      var v3589 = a$$inline_141.pageYOffset;
      var v4335 = !v3589;
      if (v4335) {
        v3589 = b$$inline_142.scrollTop;
      }
      var v2357 = v3589;
      v646 = JAM.new(M$$1, [v2356, v2357], JAM.policy.p4);
    }
    JSCompiler_inline_result$$2 = v646;
    return JSCompiler_inline_result$$2;
  }
  function v90() {
    var v2359 = this.V;
    var v647 = v2359.compatMode;
    return "CSS1Compat" == v647;
  }
  function v89(a$$249) {
    var v648 = this.V;
    var v649 = JAM.call(String, null, [a$$249], JAM.policy.p4);
    return JAM.call(v648.createTextNode, v648, [v649], JAM.policy.p4);
  }
  function v88(a$$248) {
    var v650 = this.V;
    return JAM.call(v650.createElement, v650, [a$$248], JAM.policy.p4);
  }
  function v87() {
    var a$$224 = m$$3.document;
    var v652 = a$$224 && N$$1;
    if (v652) {
      var b$$175 = JAM.call(Qc, null, [], JAM.policy.p4);
      var v651 = b$$175;
      var v2361 = !v651;
      if (v2361) {
        var v2360;
        var v4336 = a$$224.compatMode;
        var v3590 = "CSS1Compat" == v4336;
        if (v3590) {
          v2360 = JAM.call(parseInt, null, [Sc, 10], JAM.policy.p4);
        } else {
          v2360 = 5;
        }
        v651 = v2360;
      }
      return v651;
    }
    return;
  }
  function v86(a$$216, b$$169) {
    var v653;
    var v2362 = JAM.call(q$$3, null, [b$$169], JAM.policy.p4);
    if (v2362) {
      v653 = b$$169;
    } else {
      v653 = a$$216;
    }
    var c$$114 = v653;
    var v2363 = this.x;
    this.x = v2363 * a$$216;
    var v2364 = this.y;
    this.y = v2364 * c$$114;
    return this;
  }
  function v85(a$$215, b$$168) {
    var v654;
    var v2365 = a$$215 instanceof M$$1;
    if (v2365) {
      var v4337 = this.x;
      var v4338 = a$$215.x;
      this.x = v4337 + v4338;
      var v4339 = this.y;
      var v4340 = a$$215.y;
      v654 = this.y = v4339 + v4340;
    } else {
      var v4341 = this.x;
      this.x = v4341 + a$$215;
      var v3591 = JAM.call(q$$3, null, [b$$168], JAM.policy.p4);
      if (v3591) {
        var v4753 = this.y;
        v3591 = this.y = v4753 + b$$168;
      }
      v654 = v3591;
    }
    v654;
    return this;
  }
  function v84() {
    var v655 = this.x;
    var v5134 = JAM.call(Math.round, Math, [v655], JAM.policy.p4);
    this.x = v5134;
    var v656 = this.y;
    var v5135 = JAM.call(Math.round, Math, [v656], JAM.policy.p4);
    this.y = v5135;
    return this;
  }
  function v83() {
    var v657 = this.x;
    var v5136 = JAM.call(Math.floor, Math, [v657], JAM.policy.p4);
    this.x = v5136;
    var v658 = this.y;
    var v5137 = JAM.call(Math.floor, Math, [v658], JAM.policy.p4);
    this.y = v5137;
    return this;
  }
  function v82() {
    var v659 = this.x;
    var v5138 = JAM.call(Math.ceil, Math, [v659], JAM.policy.p4);
    this.x = v5138;
    var v660 = this.y;
    var v5139 = JAM.call(Math.ceil, Math, [v660], JAM.policy.p4);
    this.y = v5139;
    return this;
  }
  function v81() {
    function b$$153(b$$154) {
      var v661 = "" != b$$154;
      if (v661) {
        JAM.call(a$$192.push, a$$192, [b$$154], JAM.policy.p4);
      }
      return;
    }
    var a$$192 = [];
    var v662 = this.layers;
    JAM.call(x$$50, null, [v662, b$$153], JAM.policy.p4);
    var v663;
    var v4754 = this.defaultBucket;
    var v4342 = v4754.length;
    var v3592 = 0 < v4342;
    if (v3592) {
      var v4343 = a$$192.length;
      v3592 = 0 < v4343;
    }
    var v2370 = v3592;
    if (v2370) {
      var v4344 = this.defaultBucket;
      var v3593 = JAM.call(v4344.join, v4344, [","], JAM.policy.p4);
      var v2366 = v3593 + ",";
      var v2367 = JAM.call(a$$192.join, a$$192, [","], JAM.policy.p4);
      v663 = v2366 + v2367;
    } else {
      var v3594 = this.defaultBucket;
      var v2368 = JAM.call(v3594.join, v3594, [","], JAM.policy.p4);
      var v2369 = JAM.call(a$$192.join, a$$192, [","], JAM.policy.p4);
      v663 = v2368 + v2369;
    }
    return v663;
  }
  function v80(a$$191) {
    var v664;
    var v3595 = this.layers;
    var v2372 = JAM.call(v3595.hasOwnProperty, v3595, [a$$191], JAM.policy.p4);
    if (v2372) {
      var v2371 = this.layers;
      v664 = v2371[a$$191];
    } else {
      v664 = "";
    }
    return v664;
  }
  function v79(a$$190) {
    var v665;
    if (a$$190) {
      var v3596 = this.layers;
      var v2373 = JAM.call(v3596.hasOwnProperty, v3596, [a$$190], JAM.policy.p4);
      if (v2373) {
        var v4345 = this.layers;
        var v3597 = v4345[a$$190];
        v2373 = "" == v3597;
      }
      v665 = v2373;
    } else {
      v665 = !0;
    }
    return v665;
  }
  function v78(a$$189, b$$152, c$$107) {
    var v666;
    var v3598 = JAM.call(this.ac, this, [c$$107], JAM.policy.p4);
    if (v3598) {
      v3598 = a$$189 = JAM.call(vb, null, [a$$189, b$$152], JAM.policy.p4);
    }
    var v2374 = v3598;
    if (v2374) {
      v666 = JAM.call(this.bb, this, [a$$189, c$$107], JAM.policy.p4);
    } else {
      v666 = "";
    }
    return v666;
  }
  function v77(a$$188, b$$151) {
    var v667;
    var v2376 = "" == a$$188;
    if (v2376) {
      v667 = "";
    } else {
      var v2375;
      if (b$$151) {
        var v3599;
        var v4755 = this.layers;
        var v4347 = JAM.call(v4755.hasOwnProperty, v4755, [b$$151], JAM.policy.p4);
        if (v4347) {
          var v4346 = this.layers;
          v3599 = JAM.set(v4346, b$$151, a$$188, JAM.policy.p2);
        } else {
          v3599 = "";
        }
        v2375 = v3599;
      } else {
        var v4348 = this.defaultBucket;
        JAM.call(v4348.push, v4348, [a$$188], JAM.policy.p4);
        v2375 = a$$188;
      }
      v667 = v2375;
    }
    return v667;
  }
  function v76(a$$187, b$$150) {
    var v668 = this.layers;
    JAM.set(v668, b$$150, a$$187, JAM.policy.p2);
    return;
  }
  function v75() {
    return!0;
  }
  function v74(a$$181, b$$144, c$$102) {
    var d$$66 = a$$181.length;
    var v669;
    var v2377 = JAM.call(p$$1, null, [a$$181], JAM.policy.p4);
    if (v2377) {
      v669 = JAM.call(a$$181.split, a$$181, [""], JAM.policy.p4);
    } else {
      v669 = a$$181;
    }
    var e$$45 = v669;
    var f$$25 = 0;
    var v671 = f$$25 < d$$66;
    for (;v671;) {
      var v670 = f$$25 in e$$45;
      if (v670) {
        var v2378 = e$$45[f$$25];
        JAM.call(b$$144.call, b$$144, [c$$102, v2378, f$$25, a$$181], JAM.policy.p4);
      }
      f$$25 = f$$25 + 1;
      v671 = f$$25 < d$$66;
    }
    return;
  }
  function v73(a$$180, b$$143, c$$101) {
    var v672 = Xb.forEach;
    JAM.call(v672.call, v672, [a$$180, b$$143, c$$101], JAM.policy.p4);
    return;
  }
  function v72(a$$179, b$$142, c$$100) {
    var v673;
    var v2380 = null == c$$100;
    if (v2380) {
      v673 = 0;
    } else {
      var v2379;
      var v3601 = 0 > c$$100;
      if (v3601) {
        var v4349 = a$$179.length;
        var v3600 = v4349 + c$$100;
        v2379 = JAM.call(Math.max, Math, [0, v3600], JAM.policy.p4);
      } else {
        v2379 = c$$100;
      }
      v673 = v2379;
    }
    c$$100 = v673;
    var v675 = JAM.call(p$$1, null, [a$$179], JAM.policy.p4);
    if (v675) {
      var v674;
      var v3602 = JAM.call(p$$1, null, [b$$142], JAM.policy.p4);
      if (v3602) {
        var v4350 = b$$142.length;
        v3602 = 1 == v4350;
      }
      var v2381 = v3602;
      if (v2381) {
        v674 = JAM.call(a$$179.indexOf, a$$179, [b$$142, c$$100], JAM.policy.p4);
      } else {
        v674 = -1;
      }
      return v674;
    }
    var v2382 = a$$179.length;
    var v677 = c$$100 < v2382;
    for (;v677;) {
      var v2383 = c$$100 in a$$179;
      if (v2383) {
        var v3603 = a$$179[c$$100];
        v2383 = v3603 === b$$142;
      }
      var v676 = v2383;
      if (v676) {
        return c$$100;
      }
      c$$100 = c$$100 + 1;
      var v2384 = a$$179.length;
      v677 = c$$100 < v2384;
    }
    return-1;
  }
  function v71(a$$178, b$$141, c$$99) {
    var v678 = Xb.indexOf;
    return JAM.call(v678.call, v678, [a$$178, b$$141, c$$99], JAM.policy.p4);
  }
  function v70(a$$140, b$$111) {
    var v679;
    var v2385 = JAM.call(q$$3, null, [b$$111], JAM.policy.p4);
    if (v2385) {
      v679 = b$$111;
    } else {
      v679 = a$$140;
    }
    var c$$75 = v679;
    var v2386 = this.width;
    this.width = v2386 * a$$140;
    var v2387 = this.height;
    this.height = v2387 * c$$75;
    return this;
  }
  function v69() {
    var v680 = this.width;
    var v5140 = JAM.call(Math.round, Math, [v680], JAM.policy.p4);
    this.width = v5140;
    var v681 = this.height;
    var v5141 = JAM.call(Math.round, Math, [v681], JAM.policy.p4);
    this.height = v5141;
    return this;
  }
  function v68() {
    var v682 = this.width;
    var v5142 = JAM.call(Math.floor, Math, [v682], JAM.policy.p4);
    this.width = v5142;
    var v683 = this.height;
    var v5143 = JAM.call(Math.floor, Math, [v683], JAM.policy.p4);
    this.height = v5143;
    return this;
  }
  function v67() {
    var v684 = this.width;
    var v5144 = JAM.call(Math.ceil, Math, [v684], JAM.policy.p4);
    this.width = v5144;
    var v685 = this.height;
    var v5145 = JAM.call(Math.ceil, Math, [v685], JAM.policy.p4);
    this.height = v5145;
    return this;
  }
  function v66() {
    var v686 = JAM.new(Date, [], JAM.policy.p4);
    return+v686;
  }
  function gi() {
    var v2388 = JAM.call(H$$1, null, [], JAM.policy.p4);
    var v687 = JAM.call(v2388.m, v2388, [18], JAM.policy.p4);
    var v2389 = K$$1.ASYNC_EXPANSION_EMBED;
    var v688 = v2389.EXPERIMENT;
    return v687 == v688;
  }
  function mi(a$$568) {
    var b$$441 = vf;
    var v2390 = JAM.call(Hb, null, [b$$441], JAM.policy.p4);
    var v689 = {dtd:v2390};
    return JAM.call(ki, null, [v689, a$$568], JAM.policy.p4);
  }
  function Zi(a$$567) {
    var b$$440 = window.google_container_id;
    var v2391 = b$$440;
    if (v2391) {
      v2391 = JAM.call(document.getElementById, document, [b$$440], JAM.policy.p4);
    }
    var v690 = v2391;
    var v2392 = !v690;
    if (v2392) {
      v690 = JAM.call(document.getElementById, document, [a$$567], JAM.policy.p4);
    }
    var c$$299 = v690;
    var v2393 = c$$299 || b$$440;
    var v3604 = !v2393;
    if (v3604) {
      v2393 = !a$$567;
    }
    var v691 = v2393;
    var v2394 = !v691;
    if (v2394) {
      var v4351 = "<span id=" + a$$567;
      var v3605 = v4351 + "></span>";
      JAM.call(document.write, document, [v3605], JAM.policy.p4);
      c$$299 = JAM.call(document.getElementById, document, [a$$567], JAM.policy.p4);
    }
    return c$$299;
  }
  function Gi(a$$565) {
    var b$$438 = JAM.call(mc, null, [], JAM.policy.p4);
    var c$$298 = JAM.call(G$$1, null, [b$$438, 8], JAM.policy.p4);
    var d$$183 = JAM.call(G$$1, null, [b$$438, 9], JAM.policy.p4);
    var e$$108 = window.google_ad_section;
    var v699 = JAM.call(ub, null, [window], JAM.policy.p4);
    if (v699) {
      var v4756 = JAM.call(G$$1, null, [b$$438, 5], JAM.policy.p4);
      var v4352 = v4756 + 1;
      var v3606 = JAM.call(oc, null, [b$$438, 5, v4352], JAM.policy.p4);
      var v2395 = 3 < v3606;
      if (v2395) {
        v2395 = !a$$565;
      }
      var v692 = v2395;
      if (v692) {
        return!1;
      }
    } else {
      var v2396 = JAM.call(G$$1, null, [b$$438, 6], JAM.policy.p4);
      var v693 = v2396 + 1;
      var f$$65 = JAM.call(oc, null, [b$$438, 6, v693], JAM.policy.p4);
      var v698 = window.google_num_slots_to_rotate;
      if (v698) {
        var JSCompiler_inline_result$$19;
        ze = ze | 1;
        JSCompiler_inline_result$$19 = void 0;
        JSCompiler_inline_result$$19;
        JAM.set(c$$298, e$$108, "", JAM.policy.p2);
        var JSCompiler_temp_const$$70 = JAM.set(d$$183, e$$108, "", JAM.policy.p2);
        var JSCompiler_temp$$71;
        var v695 = JSCompiler_temp$$71 = JAM.call(G$$1, null, [b$$438, 12], JAM.policy.p4);
        if (v695) {
        } else {
          var v3607 = JAM.new(Date, [], JAM.policy.p4);
          var v2397 = JAM.call(v3607.getTime, v3607, [], JAM.policy.p4);
          var v2398 = window.google_num_slots_to_rotate;
          var v694 = v2397 % v2398;
          var b$$inline_551 = v694 + 1;
          JSCompiler_temp$$71 = JAM.call(oc, null, [b$$438, 12, b$$inline_551], JAM.policy.p4);
        }
        JSCompiler_temp_const$$70;
        JSCompiler_temp$$71;
        var v3608 = JAM.call(G$$1, null, [b$$438, 12], JAM.policy.p4);
        var v696 = v3608 != f$$65;
        if (v696) {
          return!1;
        }
      } else {
        var v3609 = !a$$565;
        if (v3609) {
          v3609 = 6 < f$$65;
        }
        var v2399 = v3609;
        if (v2399) {
          v2399 = "" == e$$108;
        }
        var v697 = v2399;
        if (v697) {
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
    var d$$inline_521 = JAM.call(a$$inline_518.indexOf, a$$inline_518, [b$$inline_519], JAM.policy.p4);
    var v700;
    var v2402 = -1 == d$$inline_521;
    if (v2402) {
      v700 = a$$inline_518;
    } else {
      var v2400 = c$$inline_520;
      var v4353 = b$$inline_519.length;
      var v3610 = d$$inline_521 + v4353;
      var v2401 = JAM.call(a$$inline_518.substr, a$$inline_518, [v3610], JAM.policy.p4);
      v700 = v2400 + v2401;
    }
    d$$180 = v700;
    var v701 = d$$180 !== c$$295;
    if (v701) {
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
    JAM.call(x$$50, null, [wh, v23], JAM.policy.p4);
    JAM.call(x$$50, null, [vh, v24], JAM.policy.p4);
    JAM.call(x$$50, null, [xh, v25], JAM.policy.p4);
    return;
  }
  function Yi(a$$557, b$$428, c$$289, d$$178) {
    if (d$$178) {
      var e$$105 = 0;
      var v2403 = d$$178.length;
      var v703 = e$$105 < v2403;
      for (;v703;) {
        var f$$63 = d$$178[e$$105];
        var v2404 = JAM.call(f$$63, null, [], JAM.policy.p4);
        var v702 = !v2404;
        if (v702) {
          return;
        }
        e$$105 = e$$105 + 1;
        var v2405 = d$$178.length;
        v703 = e$$105 < v2405;
      }
    }
    if (Xi) {
      var v3611 = JAM.new(Date, [], JAM.policy.p4);
      var v2406 = JAM.call(v3611.getTime, v3611, [], JAM.policy.p4);
      Xi = v2406 - Xi;
    }
    var v2407 = c$$289;
    if (v2407) {
      v2407 = JAM.call(c$$289.fb, c$$289, [], JAM.policy.p4);
    }
    var v704 = v2407;
    if (v704) {
      JAM.call(c$$289.Hc, c$$289, [], JAM.policy.p4);
    }
    JSCompiler_inline_label_Ki_503: {
      var a$$inline_500 = a$$557;
      var a$$inline_698 = window;
      var b$$inline_699;
      var a$$inline_769 = a$$inline_698;
      var v705 = JAM.call(D$$1, null, [], JAM.policy.p4);
      var b$$inline_770 = v705.document;
      var c$$inline_771 = {};
      var d$$inline_772;
      var a$$inline_942 = window;
      var v706 = !1;
      a$$inline_942 = JAM.call(dc, null, [a$$inline_942, v706], JAM.policy.p4);
      d$$inline_772 = a$$inline_942.win;
      var e$$inline_773 = JAM.call(cf, null, [d$$inline_772], JAM.policy.p4);
      var v707 = JAM.call(D$$1, null, [], JAM.policy.p4);
      var v708 = a$$inline_769.google_ad_width;
      var v709 = a$$inline_769.google_ad_height;
      var f$$inline_774 = JAM.call(Ze, null, [v707, b$$inline_770, v708, v709], JAM.policy.p4);
      var JSCompiler_inline_result$$927;
      var a$$inline_944 = a$$inline_769;
      var b$$inline_945 = f$$inline_774;
      var c$$inline_946 = e$$inline_773.isTopUrl;
      var v710 = JAM.call(D$$1, null, [], JAM.policy.p4);
      var d$$inline_947 = JAM.call(T$$1.getIframingState, T$$1, [v710], JAM.policy.p4);
      var e$$inline_948 = 4;
      var v711;
      var v3612 = b$$inline_945;
      var v4355 = !v3612;
      if (v4355) {
        var v4354 = T$$1.SAME_DOMAIN_IFRAMING;
        v3612 = d$$inline_947 != v4354;
      }
      var v2409 = v3612;
      if (v2409) {
        var v2408;
        var v4356 = b$$inline_945;
        var v4758 = !v4356;
        if (v4758) {
          var v4757 = T$$1.CROSS_DOMAIN_IFRAMING;
          v4356 = d$$inline_947 != v4757;
        }
        var v3614 = v4356;
        if (v3614) {
          var v3613;
          var v4759 = b$$inline_945;
          if (v4759) {
            var v4973 = T$$1.SAME_DOMAIN_IFRAMING;
            v4759 = d$$inline_947 == v4973;
          }
          var v4358 = v4759;
          if (v4358) {
            v3613 = e$$inline_948 = 7;
          } else {
            var v4760 = b$$inline_945;
            if (v4760) {
              var v4974 = T$$1.CROSS_DOMAIN_IFRAMING;
              v4760 = d$$inline_947 == v4974;
            }
            var v4357 = v4760;
            if (v4357) {
              v4357 = e$$inline_948 = 8;
            }
            v3613 = v4357;
          }
          v2408 = v3613;
        } else {
          v2408 = e$$inline_948 = 6;
        }
        v711 = v2408;
      } else {
        v711 = e$$inline_948 = 5;
      }
      v711;
      var v3615 = a$$inline_944.google_referrer_url;
      var v2410 = !v3615;
      var v712 = !v2410;
      if (v712) {
        var v2411 = JAM.call(Ye, null, [], JAM.policy.p4);
        v712 = !v2411;
      }
      a$$inline_944 = v712;
      var v2412 = 5 * a$$inline_944;
      e$$inline_948 = e$$inline_948 + v2412;
      if (c$$inline_946) {
        e$$inline_948 = e$$inline_948 | 16;
      }
      JSCompiler_inline_result$$927 = "" + e$$inline_948;
      c$$inline_771.iframing = JSCompiler_inline_result$$927;
      var v3616 = a$$inline_769.google_page_url;
      var v2413 = !v3616;
      if (v2413) {
        var v3617 = b$$inline_770.domain;
        v2413 = "yieldmanager" == v3617;
      }
      var v716 = v2413;
      if (v716) {
        var v713 = b$$inline_770.URL;
        var v2414 = b$$inline_770.URL;
        var v714 = JAM.call(v2414.lastIndexOf, v2414, ["http"], JAM.policy.p4);
        e$$inline_773 = JAM.call(v713.substring, v713, [v714], JAM.policy.p4);
        var v2415 = JAM.call(e$$inline_773.indexOf, e$$inline_773, ["%"], JAM.policy.p4);
        var v715 = -1 < v2415;
        for (;v715;) {
          try {
            e$$inline_773 = JAM.call(decodeURIComponent, null, [e$$inline_773], JAM.policy.p4);
          } catch (g$$inline_775) {
            break;
          }
          var v2416 = JAM.call(e$$inline_773.indexOf, e$$inline_773, ["%"], JAM.policy.p4);
          v715 = -1 < v2416;
        }
        a$$inline_769.google_page_url = e$$inline_773;
      }
      var JSCompiler_inline_result$$941;
      var a$$inline_950 = a$$inline_769;
      var b$$inline_951 = JAM.call(af, null, [], JAM.policy.p4);
      var v717 = !b$$inline_951;
      if (v717) {
        var v3618 = a$$inline_950.google_page_url;
        var v2417 = !v3618;
        v717 = !v2417;
      }
      JSCompiler_inline_result$$941 = v717;
      if (JSCompiler_inline_result$$941) {
        var a$$inline_953 = c$$inline_771;
        var c$$inline_955 = b$$inline_770;
        var d$$inline_956 = f$$inline_774;
        a$$inline_953.page_url = a$$inline_769.google_page_url;
        var v718 = a$$inline_953;
        var v2418 = JAM.call(bf, null, [c$$inline_955, d$$inline_956], JAM.policy.p4);
        var v3619 = !v2418;
        if (v3619) {
          v2418 = "EMPTY";
        }
        v718.page_location = v2418;
      } else {
        var a$$inline_958 = c$$inline_771;
        var v719 = a$$inline_958;
        var v5146 = JAM.call(bf, null, [b$$inline_770, f$$inline_774], JAM.policy.p4);
        v719.page_url = v5146;
        a$$inline_958.page_location = null;
      }
      var v720 = c$$inline_771;
      var v2419;
      var v4359 = b$$inline_770.URL;
      var v4360 = c$$inline_771.page_url;
      var v3621 = v4359 == v4360;
      if (v3621) {
        var v4361 = b$$inline_770.lastModified;
        var v3620 = JAM.call(Date.parse, Date, [v4361], JAM.policy.p4);
        v2419 = v3620 / 1E3;
      } else {
        v2419 = null;
      }
      v720.last_modified_time = v2419;
      var v723 = JAM.call(Ye, null, [], JAM.policy.p4);
      if (v723) {
        var JSCompiler_inline_result$$928;
        var a$$inline_962 = d$$inline_772;
        var v721;
        var v3622 = a$$inline_962.top;
        var v2422 = a$$inline_962 == v3622;
        if (v2422) {
          var v2420 = a$$inline_962.document;
          v721 = v2420.referrer;
        } else {
          var v3623 = !0;
          var v2421 = a$$inline_962 = JAM.call(af, null, [v3623], JAM.policy.p4);
          var v3624 = !v2421;
          if (v3624) {
            v2421 = "";
          }
          v721 = v2421;
        }
        JSCompiler_inline_result$$928 = v721;
        c$$inline_771.referrer_url = JSCompiler_inline_result$$928;
      } else {
        var JSCompiler_inline_result$$925;
        var a$$inline_964 = a$$inline_769;
        var b$$inline_965 = b$$inline_770;
        var c$$inline_966 = f$$inline_774;
        var d$$inline_967 = JAM.call(af, null, [], JAM.policy.p4);
        var v722;
        if (d$$inline_967) {
          v722 = "";
        } else {
          var v2423;
          if (c$$inline_966) {
            v2423 = a$$inline_964.google_referrer_url;
          } else {
            var v3625;
            var v4761 = a$$inline_964.google_page_url;
            if (v4761) {
              v4761 = a$$inline_964.google_referrer_url;
            }
            var v4362 = v4761;
            if (v4362) {
              v3625 = a$$inline_964.google_referrer_url;
            } else {
              v3625 = b$$inline_965.referrer;
            }
            v2423 = v3625;
          }
          v722 = v2423;
        }
        JSCompiler_inline_result$$925 = v722;
        c$$inline_771.referrer_url = JSCompiler_inline_result$$925;
      }
      b$$inline_699 = c$$inline_771;
      JAM.call($e, null, [a$$inline_698, b$$inline_699], JAM.policy.p4);
      var v3626 = window.google_page_url;
      var v4363 = !v3626;
      if (v4363) {
        v3626 = window.google_referrer_url;
      }
      var v2424 = v3626;
      var v3627 = !v2424;
      if (v3627) {
        v2424 = window.google_page_location;
      }
      var v726 = v2424;
      if (v726) {
      } else {
        var a$$inline_701 = K$$1;
        var v724 = JAM.call(J$$1, null, [], JAM.policy.p4);
        var v3628 = a$$inline_701.TOP_URL_REPLACES_MISSING_URL;
        var v2425 = v3628.CONTROL;
        var v3629 = a$$inline_701.TOP_URL_REPLACES_MISSING_URL;
        var v2426 = v3629.EXPERIMENT;
        var v725 = [v2425, v2426];
        JAM.call(v724.k, v724, [v725, wa$$1, 4], JAM.policy.p4);
      }
      var v3630 = !1;
      var v2427 = JAM.call(Gi, null, [v3630], JAM.policy.p4);
      var v727 = !v2427;
      if (v727) {
        c$$289 = !1;
        break JSCompiler_inline_label_Ki_503;
      }
      var v728;
      var v2428 = JAM.call(Bc, null, [window], JAM.policy.p4);
      if (v2428) {
        v728 = JAM.call(ma$$1, null, ["", "googlesyndication"], JAM.policy.p4);
      } else {
        v728 = JAM.call(Ja$$1, null, [], JAM.policy.p4);
      }
      var b$$inline_501 = v728;
      var a$$inline_703 = a$$inline_500;
      var b$$inline_704 = {};
      JAM.call($i, null, [b$$inline_704], JAM.policy.p4);
      var a$$inline_777 = b$$inline_704;
      a$$inline_777.dt = vf;
      var v2429 = B$$2;
      if (v2429) {
        v2429 = window.google_bpp;
      }
      var v729 = v2429;
      if (v729) {
        a$$inline_777.bpp = window.google_bpp;
      }
      var b$$inline_778;
      JSCompiler_inline_label_816: {
        var a$$inline_779 = void 0;
        var b$$inline_780 = JAM.call(D$$1, null, [], JAM.policy.p4);
        var c$$inline_781 = b$$inline_780.performance;
        var v3631 = c$$inline_781;
        if (v3631) {
          v3631 = c$$inline_781.timing;
        }
        var v2430 = v3631;
        if (v2430) {
          v2430 = c$$inline_781.now;
        }
        var v733 = v2430;
        if (v733) {
          var v2431 = c$$inline_781.timing;
          var v730 = v2431.navigationStart;
          var v2432 = JAM.call(c$$inline_781.now, c$$inline_781, [], JAM.policy.p4);
          var v731 = JAM.call(Math.round, Math, [v2432], JAM.policy.p4);
          var d$$inline_782 = v730 + v731;
          var v2433 = c$$inline_781.timing;
          var v732 = v2433.domLoading;
          d$$inline_782 = d$$inline_782 - v732;
        }
        var v734 = !d$$inline_782;
        if (v734) {
          b$$inline_778 = null;
          break JSCompiler_inline_label_816;
        }
        a$$inline_779 = a$$inline_779 || vf;
        var v2434 = b$$inline_780.Date;
        var v735 = JAM.call(v2434.now, v2434, [], JAM.policy.p4);
        b$$inline_780 = v735 - a$$inline_779;
        b$$inline_780 = d$$inline_782 - b$$inline_780;
        var v736;
        var v2436 = 0 > b$$inline_780;
        if (v2436) {
          v736 = "-M";
        } else {
          var v2435;
          var v3632 = 1E6 < b$$inline_780;
          if (v3632) {
            v2435 = "M";
          } else {
            v2435 = b$$inline_780;
          }
          v736 = v2435;
        }
        b$$inline_778 = v736;
      }
      if (b$$inline_778) {
        a$$inline_777.bdt = b$$inline_778;
      }
      var v737 = a$$inline_777;
      var v5147 = JAM.call(Da$$1, null, [], JAM.policy.p4);
      v737.shv = v5147;
      var v2437 = window.google_test_1;
      var v738 = !v2437;
      b$$inline_778 = !v738;
      var v2438 = window.google_test_2;
      var v739 = !v2438;
      var c$$inline_783 = !v739;
      if (b$$inline_778) {
        var v2439;
        if (c$$inline_783) {
          v2439 = "3";
        } else {
          v2439 = "2";
        }
        a$$inline_777.tsi = v2439;
      }
      var v740 = a$$inline_777;
      var v5148 = JAM.call("/r20130906".replace, "/r20130906", ["/", ""], JAM.policy.p4);
      v740.cbv = v5148;
      var v2440 = window.google_loader_used;
      var v741 = JAM.call(/^\w{1,3}$/.test, /^\w{1,3}$/, [v2440], JAM.policy.p4);
      if (v741) {
        a$$inline_777.saldr = window.google_loader_used;
      }
      b$$inline_778 = JAM.call(mc, null, [], JAM.policy.p4);
      var v745 = JAM.call(Zg, null, [window], JAM.policy.p4);
      if (v745) {
      } else {
        var a$$inline_784 = b$$inline_778;
        var b$$inline_785 = a$$inline_777;
        var c$$inline_786 = JAM.call(G$$1, null, [a$$inline_784, 8], JAM.policy.p4);
        var d$$inline_787 = window.google_ad_section;
        var e$$inline_788 = window.google_ad_format;
        var f$$inline_789 = window.google_ad_slot;
        var v742 = c$$inline_786[d$$inline_787];
        if (v742) {
          b$$inline_785.prev_fmts = c$$inline_786[d$$inline_787];
        }
        var g$$inline_790 = JAM.call(G$$1, null, [a$$inline_784, 9], JAM.policy.p4);
        var v743 = g$$inline_790[d$$inline_787];
        if (v743) {
          var v2441 = b$$inline_785;
          var v3633 = g$$inline_790[d$$inline_787];
          var v5149 = JAM.call(v3633.toLowerCase, v3633, [], JAM.policy.p4);
          v2441.prev_slotnames = v5149;
        }
        var v744;
        if (e$$inline_788) {
          var v2442;
          var v3636 = c$$inline_786[d$$inline_787];
          if (v3636) {
            var v3634 = c$$inline_786[d$$inline_787];
            var v3635 = "," + e$$inline_788;
            v2442 = v3634 + v3635;
          } else {
            v2442 = e$$inline_788;
          }
          v744 = JAM.set(c$$inline_786, d$$inline_787, v2442, JAM.policy.p2);
        } else {
          var v2443 = f$$inline_789;
          if (v2443) {
            var v3637;
            var v4366 = g$$inline_790[d$$inline_787];
            if (v4366) {
              var v4364 = g$$inline_790[d$$inline_787];
              var v4365 = "," + f$$inline_789;
              v3637 = v4364 + v4365;
            } else {
              v3637 = f$$inline_789;
            }
            v2443 = JAM.set(g$$inline_790, d$$inline_787, v3637, JAM.policy.p2);
          }
          v744 = v2443;
        }
        v744;
      }
      var v746 = a$$inline_777;
      var v5150 = JAM.call(G$$1, null, [b$$inline_778, 7], JAM.policy.p4);
      v746.correlator = v5150;
      var v750 = window.google_ad_channel;
      if (v750) {
        c$$inline_783 = JAM.call(G$$1, null, [b$$inline_778, 10], JAM.policy.p4);
        var d$$inline_791 = "";
        var v747 = window.google_ad_channel;
        var e$$inline_792 = JAM.call(v747.split, v747, [Ni], JAM.policy.p4);
        var f$$inline_793 = 0;
        var v2444 = e$$inline_792.length;
        var v749 = f$$inline_793 < v2444;
        for (;v749;) {
          var g$$inline_794 = e$$inline_792[f$$inline_793];
          var v748;
          var v2445 = c$$inline_783[g$$inline_794];
          if (v2445) {
            var v3638 = g$$inline_794 + "+";
            v748 = d$$inline_791 = d$$inline_791 + v3638;
          } else {
            v748 = JAM.set(c$$inline_783, g$$inline_794, !0, JAM.policy.p2);
          }
          v748;
          f$$inline_793 = f$$inline_793 + 1;
          var v2446 = e$$inline_792.length;
          v749 = f$$inline_793 < v2446;
        }
        a$$inline_777.pv_ch = d$$inline_791;
      }
      var v760 = window.google_ad_host_channel;
      if (v760) {
        var JSCompiler_inline_result$$inline_795;
        var b$$inline_796 = JAM.call(G$$1, null, [b$$inline_778, 11], JAM.policy.p4);
        var v751 = window.google_ad_host_channel;
        var c$$inline_797 = JAM.call(v751.split, v751, ["|"], JAM.policy.p4);
        var d$$inline_798 = -1;
        var e$$inline_799 = [];
        var f$$inline_800 = 0;
        var v2447 = c$$inline_797.length;
        var v757 = f$$inline_800 < v2447;
        for (;v757;) {
          var v752 = c$$inline_797[f$$inline_800];
          var g$$inline_801 = JAM.call(v752.split, v752, [Ni], JAM.policy.p4);
          var v753 = b$$inline_796[f$$inline_800];
          var v2448 = !v753;
          if (v2448) {
            introspect(JAM.policy.p2) {
              b$$inline_796[f$$inline_800] = {};
            }
          }
          var h$$inline_802 = "";
          var k$$inline_803 = 0;
          var v2449 = g$$inline_801.length;
          var v755 = k$$inline_803 < v2449;
          for (;v755;) {
            var l$$inline_804 = g$$inline_801[k$$inline_803];
            var v754 = "" != l$$inline_804;
            if (v754) {
              var v2450;
              var v4367 = b$$inline_796[f$$inline_800];
              var v3640 = v4367[l$$inline_804];
              if (v3640) {
                var v4368 = "+" + l$$inline_804;
                v2450 = h$$inline_802 = h$$inline_802 + v4368;
              } else {
                var v3639 = b$$inline_796[f$$inline_800];
                v2450 = JAM.set(v3639, l$$inline_804, !0, JAM.policy.p2);
              }
              v2450;
            }
            k$$inline_803 = k$$inline_803 + 1;
            var v2451 = g$$inline_801.length;
            v755 = k$$inline_803 < v2451;
          }
          h$$inline_802 = JAM.call(h$$inline_802.slice, h$$inline_802, [1], JAM.policy.p4);
          introspect(JAM.policy.p2) {
            e$$inline_799[f$$inline_800] = h$$inline_802;
          }
          var v756 = "" != h$$inline_802;
          if (v756) {
            d$$inline_798 = f$$inline_800;
          }
          f$$inline_800 = f$$inline_800 + 1;
          var v2452 = c$$inline_797.length;
          v757 = f$$inline_800 < v2452;
        }
        c$$inline_797 = "";
        var v759 = -1 < d$$inline_798;
        if (v759) {
          f$$inline_800 = 0;
          var v758 = f$$inline_800 < d$$inline_798;
          for (;v758;) {
            var v3641 = e$$inline_799[f$$inline_800];
            var v2453 = v3641 + "|";
            c$$inline_797 = c$$inline_797 + v2453;
            f$$inline_800 = f$$inline_800 + 1;
            v758 = f$$inline_800 < d$$inline_798;
          }
          var v2454 = e$$inline_799[d$$inline_798];
          c$$inline_797 = c$$inline_797 + v2454;
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
      var v761 = JAM.call(D$$1, null, [], JAM.policy.p4);
      b$$inline_778 = v761.document;
      c$$inline_783 = "";
      try {
        c$$inline_783 = b$$inline_778.cookie;
      } catch (h$$inline_815) {
      }
      var a$$inline_805 = b$$inline_778.domain;
      var b$$inline_806 = c$$inline_783;
      var c$$inline_807 = JAM.call(ob$$1, null, [], JAM.policy.p4);
      var d$$inline_808 = window.screen;
      var e$$inline_809 = b$$inline_778.referrer;
      var v3642 = JAM.new(Date, [], JAM.policy.p4);
      var v2455 = JAM.call(v3642.getTime, v3642, [], JAM.policy.p4);
      var v762 = v2455 / 1E3;
      var f$$inline_810 = JAM.call(Math.round, Math, [v762], JAM.policy.p4);
      var g$$inline_811 = window.google_analytics_domain_name;
      var v763;
      var v3643 = typeof g$$inline_811;
      var v2456 = "undefined" == v3643;
      if (v2456) {
        v763 = JAM.call(Fh, null, ["auto", a$$inline_805], JAM.policy.p4);
      } else {
        v763 = JAM.call(Fh, null, [g$$inline_811, a$$inline_805], JAM.policy.p4);
      }
      a$$inline_805 = v763;
      var v3644 = "__utma=" + a$$inline_805;
      var v2457 = v3644 + ".";
      var v764 = JAM.call(b$$inline_806.indexOf, b$$inline_806, [v2457], JAM.policy.p4);
      var h$$inline_812 = -1 < v764;
      var v2458 = "__utmb=" + a$$inline_805;
      var v765 = JAM.call(b$$inline_806.indexOf, b$$inline_806, [v2458], JAM.policy.p4);
      g$$inline_811 = -1 < v765;
      var k$$inline_813 = JAM.call(mc, null, ["google_persistent_state"], JAM.policy.p4);
      var JSCompiler_temp$$929;
      var v766 = JSCompiler_temp$$929 = JAM.call(G$$1, null, [k$$inline_813, 14], JAM.policy.p4);
      if (v766) {
      } else {
        var b$$inline_970 = {};
        JSCompiler_temp$$929 = JAM.call(oc, null, [k$$inline_813, 14, b$$inline_970], JAM.policy.p4);
      }
      k$$inline_813 = JSCompiler_temp$$929;
      var l$$inline_814 = !1;
      if (h$$inline_812) {
        var v5107 = "__utma=" + a$$inline_805;
        var v5085 = v5107 + ".";
        var v5052 = JAM.call(b$$inline_806.split, b$$inline_806, [v5085], JAM.policy.p4);
        var v4975 = v5052[1];
        var v4762 = JAM.call(v4975.split, v4975, [";"], JAM.policy.p4);
        var v4369 = v4762[0];
        c$$inline_807 = JAM.call(v4369.split, v4369, ["."], JAM.policy.p4);
        var v4370;
        if (g$$inline_811) {
          var v4763 = c$$inline_807[3];
          v4370 = k$$inline_813.sid = v4763 + "";
        } else {
          var v4764 = k$$inline_813.sid;
          var v4976 = !v4764;
          if (v4976) {
            v4764 = k$$inline_813.sid = f$$inline_810 + "";
          }
          v4370 = v4764;
        }
        v4370;
        var v4371 = c$$inline_807[0];
        var v3645 = v4371 + ".";
        var v3646 = c$$inline_807[1];
        k$$inline_813.vid = v3645 + v3646;
        k$$inline_813.from_cookie = !0;
      } else {
        var v767 = k$$inline_813.sid;
        var v2459 = !v767;
        if (v2459) {
          v767 = k$$inline_813.sid = f$$inline_810 + "";
        }
        var JSCompiler_temp_const$$933 = v767;
        var JSCompiler_temp$$934;
        var v773 = JSCompiler_temp$$934 = k$$inline_813.vid;
        if (v773) {
        } else {
          var JSCompiler_temp_const$$936 = l$$inline_814 = !0;
          var JSCompiler_temp_const$$935 = k$$inline_813;
          var JSCompiler_inline_result$$937;
          var a$$inline_972 = b$$inline_806;
          var b$$inline_973 = c$$inline_807;
          var c$$inline_974 = d$$inline_808;
          var d$$inline_975 = e$$inline_809;
          var v2460 = JAM.call(Math.random, Math, [], JAM.policy.p4);
          var v768 = 2147483647 * v2460;
          var JSCompiler_temp_const$$inline_976 = JAM.call(Math.round, Math, [v768], JAM.policy.p4);
          var JSCompiler_inline_result$$inline_977;
          var a$$inline_978 = a$$inline_972;
          var b$$inline_979 = b$$inline_973;
          var c$$inline_980 = c$$inline_974;
          var d$$inline_981 = d$$inline_975;
          var v2461 = Dh.appName;
          var v2462 = Dh.version;
          var v3647;
          var v4372 = Dh.language;
          if (v4372) {
            v3647 = Dh.language;
          } else {
            v3647 = Dh.browserLanguage;
          }
          var v2463 = v3647;
          var v2464 = Dh.platform;
          var v2465 = Dh.userAgent;
          var v3648;
          var v4373 = JAM.call(Dh.javaEnabled, Dh, [], JAM.policy.p4);
          if (v4373) {
            v3648 = 1;
          } else {
            v3648 = 0;
          }
          var v2466 = v3648;
          var v769 = [v2461, v2462, v2463, v2464, v2465, v2466];
          var e$$inline_982 = JAM.call(v769.join, v769, [""], JAM.policy.p4);
          var v770;
          if (c$$inline_980) {
            var v4977 = c$$inline_980.width;
            var v4765 = v4977 + "x";
            var v4766 = c$$inline_980.height;
            var v4374 = v4765 + v4766;
            var v4375 = c$$inline_980.colorDepth;
            var v3649 = v4374 + v4375;
            v770 = e$$inline_982 = e$$inline_982 + v3649;
          } else {
            var v2467 = window.java;
            if (v2467) {
              var v4978 = java.awt;
              var v4767 = v4978.Toolkit;
              var v4376 = JAM.call(v4767.getDefaultToolkit, v4767, [], JAM.policy.p4);
              c$$inline_980 = JAM.call(v4376.getScreenSize, v4376, [], JAM.policy.p4);
              var v5086 = c$$inline_980.screen;
              var v5053 = v5086.width;
              var v4979 = v5053 + "x";
              var v5054 = c$$inline_980.screen;
              var v4980 = v5054.height;
              var v4768 = v4979 + v4980;
              v2467 = e$$inline_982 = e$$inline_982 + v4768;
            }
            v770 = v2467;
          }
          v770;
          e$$inline_982 = e$$inline_982 + a$$inline_978;
          var v2468 = d$$inline_981 || "";
          e$$inline_982 = e$$inline_982 + v2468;
          a$$inline_978 = e$$inline_982.length;
          var v771 = 0 < b$$inline_979;
          for (;v771;) {
            var v3650 = b$$inline_979;
            b$$inline_979 = b$$inline_979 - 1;
            var v3651 = a$$inline_978;
            a$$inline_978 = a$$inline_978 + 1;
            var v2469 = v3650 ^ v3651;
            e$$inline_982 = e$$inline_982 + v2469;
            v771 = 0 < b$$inline_979;
          }
          JSCompiler_inline_result$$inline_977 = JAM.call(Jh, null, [e$$inline_982], JAM.policy.p4);
          var v772 = JSCompiler_inline_result$$inline_977 & 2147483647;
          JSCompiler_inline_result$$937 = JSCompiler_temp_const$$inline_976 ^ v772;
          JSCompiler_temp_const$$936;
          var v2470 = JSCompiler_inline_result$$937 + ".";
          JSCompiler_temp$$934 = JSCompiler_temp_const$$935.vid = v2470 + f$$inline_810;
        }
        JSCompiler_temp_const$$933;
        JSCompiler_temp$$934;
        k$$inline_813.from_cookie = !1;
      }
      var v778 = k$$inline_813.cid;
      if (v778) {
      } else {
        var JSCompiler_inline_result$$939;
        JSCompiler_inline_label_Hh_990: {
          var a$$inline_984 = b$$inline_806;
          var b$$inline_985 = 999;
          var c$$inline_986 = window.google_analytics_domain_name;
          if (c$$inline_986) {
            var v3652;
            var v4769 = JAM.call(c$$inline_986.indexOf, c$$inline_986, ["."], JAM.policy.p4);
            var v4377 = 0 == v4769;
            if (v4377) {
              v3652 = JAM.call(c$$inline_986.substr, c$$inline_986, [1], JAM.policy.p4);
            } else {
              v3652 = c$$inline_986;
            }
            c$$inline_986 = v3652;
            var v4378 = "" + c$$inline_986;
            var v3653 = JAM.call(v4378.split, v4378, ["."], JAM.policy.p4);
            b$$inline_985 = v3653.length;
          }
          var d$$inline_987;
          c$$inline_986 = 999;
          a$$inline_984 = JAM.call(a$$inline_984.split, a$$inline_984, [";"], JAM.policy.p4);
          var e$$inline_988 = 0;
          var v2471 = a$$inline_984.length;
          var v777 = e$$inline_988 < v2471;
          for (;v777;) {
            var v2472 = a$$inline_984[e$$inline_988];
            var v774 = JAM.call(Kh.exec, Kh, [v2472], JAM.policy.p4);
            var v2474 = !v774;
            if (v2474) {
              var v2473 = a$$inline_984[e$$inline_988];
              v774 = JAM.call(Lh.exec, Lh, [v2473], JAM.policy.p4);
            }
            var f$$inline_989 = v774;
            if (f$$inline_989) {
              var v2475 = f$$inline_989[1];
              var v775 = v2475 == b$$inline_985;
              if (v775) {
                JSCompiler_inline_result$$939 = f$$inline_989[2];
                break JSCompiler_inline_label_Hh_990;
              }
              var v2476 = f$$inline_989[1];
              var v776 = v2476 < c$$inline_986;
              if (v776) {
                c$$inline_986 = f$$inline_989[1];
                d$$inline_987 = f$$inline_989[2];
              }
            }
            e$$inline_988 = e$$inline_988 + 1;
            var v2477 = a$$inline_984.length;
            v777 = e$$inline_988 < v2477;
          }
          JSCompiler_inline_result$$939 = d$$inline_987;
        }
        b$$inline_806 = JSCompiler_inline_result$$939;
        var v2478;
        var v4379 = l$$inline_814 && b$$inline_806;
        if (v4379) {
          var v4770 = JAM.call(b$$inline_806.search, b$$inline_806, [/^\d+\.\d+$/], JAM.policy.p4);
          v4379 = -1 != v4770;
        }
        var v3655 = v4379;
        if (v3655) {
          v2478 = k$$inline_813.vid = b$$inline_806;
        } else {
          var v4380 = k$$inline_813.vid;
          var v3654 = b$$inline_806 != v4380;
          if (v3654) {
            v3654 = k$$inline_813.cid = b$$inline_806;
          }
          v2478 = v3654;
        }
        v2478;
      }
      k$$inline_813.dh = a$$inline_805;
      var v779 = k$$inline_813.hid;
      var v2480 = !v779;
      if (v2480) {
        var v2479 = k$$inline_813;
        var v4381 = JAM.call(Math.random, Math, [], JAM.policy.p4);
        var v3656 = 2147483647 * v4381;
        var v5151 = JAM.call(Math.round, Math, [v3656], JAM.policy.p4);
        v2479.hid = v5151;
      }
      b$$inline_778 = k$$inline_813;
      a$$inline_777.ga_vid = b$$inline_778.vid;
      a$$inline_777.ga_sid = b$$inline_778.sid;
      a$$inline_777.ga_hid = b$$inline_778.hid;
      a$$inline_777.ga_fc = b$$inline_778.from_cookie;
      a$$inline_777.ga_cid = b$$inline_778.cid;
      a$$inline_777.ga_wpids = window.google_analytics_uacct;
      var a$$inline_818 = b$$inline_704;
      var v780 = a$$inline_818;
      var v3657 = JAM.new(Date, [], JAM.policy.p4);
      var v2481 = JAM.call(v3657.getTimezoneOffset, v3657, [], JAM.policy.p4);
      v780.u_tz = -v2481;
      var v781 = a$$inline_818;
      var v5152 = JAM.call(ob$$1, null, [], JAM.policy.p4);
      v781.u_his = v5152;
      var v782 = a$$inline_818;
      var v5153 = JAM.call(navigator.javaEnabled, navigator, [], JAM.policy.p4);
      v782.u_java = v5153;
      var v783 = window.screen;
      if (v783) {
        var v4981 = window.screen;
        a$$inline_818.u_h = v4981.height;
        var v4982 = window.screen;
        a$$inline_818.u_w = v4982.width;
        var v4771 = window.screen;
        a$$inline_818.u_ah = v4771.availHeight;
        var v4382 = window.screen;
        a$$inline_818.u_aw = v4382.availWidth;
        var v3658 = window.screen;
        a$$inline_818.u_cd = v3658.colorDepth;
      }
      var v784 = navigator.plugins;
      if (v784) {
        var v2482 = navigator.plugins;
        a$$inline_818.u_nplug = v2482.length;
      }
      var v785 = navigator.mimeTypes;
      if (v785) {
        var v2483 = navigator.mimeTypes;
        a$$inline_818.u_nmime = v2483.length;
      }
      if (a$$inline_703) {
        var JSCompiler_temp_const$$733;
        var a$$inline_820 = a$$inline_703;
        var b$$inline_821 = b$$inline_704;
        var JSCompiler_temp_const$$930 = b$$inline_821;
        var JSCompiler_inline_result$$931;
        var a$$inline_991 = a$$inline_820;
        var b$$inline_992 = JAM.call(cd, null, [a$$inline_991], JAM.policy.p4);
        var c$$inline_993 = "";
        var v2484 = b$$inline_992.body;
        var v787 = v2484.createTextRange;
        if (v787) {
          var v786 = b$$inline_992.body;
          b$$inline_992 = JAM.call(v786.createTextRange, v786, [], JAM.policy.p4);
          JAM.call(b$$inline_992.moveToElementText, b$$inline_992, [a$$inline_991], JAM.policy.p4);
          try {
            c$$inline_993 = JAM.call(b$$inline_992.queryCommandValue, b$$inline_992, ["FontName"], JAM.policy.p4);
          } catch (d$$inline_1000) {
            c$$inline_993 = "";
          }
        }
        var v2485 = !c$$inline_993;
        if (v2485) {
          c$$inline_993 = JAM.call(R$$1, null, [a$$inline_991, "fontFamily"], JAM.policy.p4);
        }
        a$$inline_991 = JAM.call(c$$inline_993.split, c$$inline_993, [","], JAM.policy.p4);
        var v2486 = a$$inline_991.length;
        var v788 = 1 < v2486;
        if (v788) {
          c$$inline_993 = a$$inline_991[0];
        }
        var JSCompiler_inline_result$$inline_994;
        JSCompiler_inline_label_1001: {
          var a$$inline_995 = c$$inline_993;
          var b$$inline_996 = "\"'";
          var c$$inline_997 = b$$inline_996.length;
          var d$$inline_998 = 0;
          var v792 = d$$inline_998 < c$$inline_997;
          for (;v792;) {
            var v789;
            var v2487 = 1 == c$$inline_997;
            if (v2487) {
              v789 = b$$inline_996;
            } else {
              v789 = JAM.call(b$$inline_996.charAt, b$$inline_996, [d$$inline_998], JAM.policy.p4);
            }
            var e$$inline_999 = v789;
            var v3659 = JAM.call(a$$inline_995.charAt, a$$inline_995, [0], JAM.policy.p4);
            var v2488 = v3659 == e$$inline_999;
            if (v2488) {
              var v4772 = a$$inline_995.length;
              var v4383 = v4772 - 1;
              var v3660 = JAM.call(a$$inline_995.charAt, a$$inline_995, [v4383], JAM.policy.p4);
              v2488 = v3660 == e$$inline_999;
            }
            var v791 = v2488;
            if (v791) {
              var v2489 = a$$inline_995.length;
              var v790 = v2489 - 1;
              JSCompiler_inline_result$$inline_994 = JAM.call(a$$inline_995.substring, a$$inline_995, [1, v790], JAM.policy.p4);
              break JSCompiler_inline_label_1001;
            }
            d$$inline_998 = d$$inline_998 + 1;
            v792 = d$$inline_998 < c$$inline_997;
          }
          JSCompiler_inline_result$$inline_994 = a$$inline_995;
        }
        JSCompiler_inline_result$$931 = JSCompiler_inline_result$$inline_994;
        var v793 = JSCompiler_temp_const$$930;
        var v5154 = JAM.call(JSCompiler_inline_result$$931.toLowerCase, JSCompiler_inline_result$$931, [], JAM.policy.p4);
        v793.dff = v5154;
        var v794 = b$$inline_821;
        var v5155 = JAM.call(Wd, null, [a$$inline_820], JAM.policy.p4);
        v794.dfs = v5155;
        JSCompiler_temp_const$$733 = void 0;
        var JSCompiler_inline_result$$734;
        var a$$inline_823 = a$$inline_703;
        var b$$inline_824 = b$$inline_704;
        var v2490 = w$$6.google_ad_output;
        var v816 = "html" == v2490;
        if (v816) {
          var c$$inline_825 = JAM.call(D$$1, null, [], JAM.policy.p4);
          var v802 = c$$inline_825.google_top_values;
          if (v802) {
            var d$$inline_826;
            var a$$inline_1003 = c$$inline_825.google_top_values;
            var b$$inline_1004 = w$$6.google_ad_width;
            var c$$inline_1005 = w$$6.google_ad_height;
            var v795 = a$$inline_1003[6];
            var d$$inline_1006 = JAM.call(parseInt, null, [v795, 10], JAM.policy.p4);
            var v796 = a$$inline_1003[7];
            var e$$inline_1007 = JAM.call(parseInt, null, [v796, 10], JAM.policy.p4);
            var v797 = a$$inline_1003[8];
            var f$$inline_1008 = JAM.call(parseInt, null, [v797, 10], JAM.policy.p4);
            var v798 = a$$inline_1003[9];
            a$$inline_1003 = JAM.call(parseInt, null, [v798, 10], JAM.policy.p4);
            var v799;
            var v4983 = 0 < d$$inline_1006;
            if (v4983) {
              v4983 = 0 < e$$inline_1007;
            }
            var v4773 = v4983;
            if (v4773) {
              v4773 = 0 < f$$inline_1008;
            }
            var v4384 = v4773;
            if (v4384) {
              v4384 = 0 < a$$inline_1003;
            }
            var v3661 = v4384;
            if (v3661) {
              var v4984 = f$$inline_1008 - b$$inline_1004;
              b$$inline_1004 = JAM.call(Math.abs, Math, [v4984], JAM.policy.p4);
              var v4985 = a$$inline_1003 - c$$inline_1005;
              c$$inline_1005 = JAM.call(Math.abs, Math, [v4985], JAM.policy.p4);
              var v4774 = b$$inline_1004 + c$$inline_1005;
              v3661 = 10 >= v4774;
            }
            var v2491 = v3661;
            if (v2491) {
              v799 = JAM.new(M$$1, [d$$inline_1006, e$$inline_1007], JAM.policy.p4);
            } else {
              v799 = JAM.new(M$$1, [-12245933, -12245933], JAM.policy.p4);
            }
            d$$inline_826 = v799;
            var v800 = b$$inline_824;
            var v2492 = d$$inline_826.x;
            var v5156 = JAM.call(Math.round, Math, [v2492], JAM.policy.p4);
            v800.adx = v5156;
            var v801 = b$$inline_824;
            var v2493 = d$$inline_826.y;
            var v5157 = JAM.call(Math.round, Math, [v2493], JAM.policy.p4);
            v801.ady = v5157;
          }
          var v4775 = b$$inline_824.adx;
          var v4385 = !v4775;
          var v4777 = !v4385;
          if (v4777) {
            var v4776 = b$$inline_824.adx;
            v4385 = -12245933 == v4776;
          }
          var v3662 = v4385;
          var v4387 = !v3662;
          if (v4387) {
            var v4386 = b$$inline_824.ady;
            v3662 = !v4386;
          }
          var v2494 = v3662;
          var v3664 = !v2494;
          if (v3664) {
            var v3663 = b$$inline_824.ady;
            v2494 = -12245933 == v3663;
          }
          var v815 = v2494;
          if (v815) {
            try {
              var JSCompiler_inline_result$$926;
              var a$$inline_1010 = a$$inline_823;
              var b$$inline_1011 = window.top;
              var c$$inline_1012 = JAM.new(M$$1, [0, 0], JAM.policy.p4);
              var d$$inline_1013;
              var a$$inline_1014 = JAM.call(cd, null, [a$$inline_1010], JAM.policy.p4);
              var v803;
              if (a$$inline_1014) {
                var v2495 = a$$inline_1014.parentWindow;
                var v3665 = !v2495;
                if (v3665) {
                  v2495 = a$$inline_1014.defaultView;
                }
                v803 = v2495;
              } else {
                v803 = window;
              }
              d$$inline_1013 = v803;
              var e$$inline_1015 = a$$inline_1010;
              var v4388 = d$$inline_1013;
              if (v4388) {
                v4388 = d$$inline_1013 != b$$inline_1011;
              }
              var v3666 = v4388;
              if (v3666) {
                v3666 = e$$inline_1015 = d$$inline_1013.frameElement;
              }
              var v2496 = v3666;
              if (v2496) {
                v2496 = d$$inline_1013 = d$$inline_1013.parent;
              }
              var v814 = v2496;
              do {
                var JSCompiler_temp$$inline_1016;
                var v813 = d$$inline_1013 == b$$inline_1011;
                if (v813) {
                  JSCompiler_temp$$inline_1016 = JAM.call(Cd, null, [e$$inline_1015], JAM.policy.p4);
                } else {
                  var a$$inline_1017 = e$$inline_1015;
                  var b$$inline_1018 = void 0;
                  var v807 = a$$inline_1017.getBoundingClientRect;
                  if (v807) {
                    b$$inline_1018 = JAM.call(Ad, null, [a$$inline_1017], JAM.policy.p4);
                    var v2497 = b$$inline_1018.left;
                    var v2498 = b$$inline_1018.top;
                    b$$inline_1018 = JAM.new(M$$1, [v2497, v2498], JAM.policy.p4);
                  } else {
                    var v804 = JAM.call(dd, null, [a$$inline_1017], JAM.policy.p4);
                    b$$inline_1018 = JAM.call(v804.Ja, v804, [], JAM.policy.p4);
                    var c$$inline_1019 = JAM.call(Cd, null, [a$$inline_1017], JAM.policy.p4);
                    var v2499 = c$$inline_1019.x;
                    var v2500 = b$$inline_1018.x;
                    var v805 = v2499 - v2500;
                    var v2501 = c$$inline_1019.y;
                    var v2502 = b$$inline_1018.y;
                    var v806 = v2501 - v2502;
                    b$$inline_1018 = JAM.new(M$$1, [v805, v806], JAM.policy.p4);
                  }
                  var JSCompiler_temp$$inline_1020;
                  var v2503 = Oc;
                  if (v2503) {
                    var v3667 = JAM.call(Uc, null, [12], JAM.policy.p4);
                    v2503 = !v3667;
                  }
                  var v812 = v2503;
                  if (v812) {
                    var JSCompiler_temp_const$$inline_1021 = b$$inline_1018;
                    var JSCompiler_inline_result$$inline_1022;
                    var a$$inline_1023 = a$$inline_1017;
                    var b$$inline_1024 = void 0;
                    var v808;
                    if (N$$1) {
                      v808 = b$$inline_1024 = "-ms-transform";
                    } else {
                      var v2504;
                      if (Pc) {
                        v2504 = b$$inline_1024 = "-webkit-transform";
                      } else {
                        var v3668;
                        if (Nc) {
                          v3668 = b$$inline_1024 = "-o-transform";
                        } else {
                          var v4389 = Oc;
                          if (v4389) {
                            v4389 = b$$inline_1024 = "-moz-transform";
                          }
                          v3668 = v4389;
                        }
                        v2504 = v3668;
                      }
                      v808 = v2504;
                    }
                    v808;
                    var c$$inline_1025 = void 0;
                    if (b$$inline_1024) {
                      c$$inline_1025 = JAM.call(R$$1, null, [a$$inline_1023, b$$inline_1024], JAM.policy.p4);
                    }
                    var v2505 = !c$$inline_1025;
                    if (v2505) {
                      c$$inline_1025 = JAM.call(R$$1, null, [a$$inline_1023, "transform"], JAM.policy.p4);
                    }
                    var v809;
                    if (c$$inline_1025) {
                      var v2506;
                      var v3671 = a$$inline_1023 = JAM.call(c$$inline_1025.match, c$$inline_1025, [Xd], JAM.policy.p4);
                      if (v3671) {
                        var v4390 = a$$inline_1023[1];
                        var v3669 = JAM.call(parseFloat, null, [v4390], JAM.policy.p4);
                        var v4391 = a$$inline_1023[2];
                        var v3670 = JAM.call(parseFloat, null, [v4391], JAM.policy.p4);
                        v2506 = JAM.new(M$$1, [v3669, v3670], JAM.policy.p4);
                      } else {
                        v2506 = JAM.new(M$$1, [0, 0], JAM.policy.p4);
                      }
                      v809 = v2506;
                    } else {
                      v809 = JAM.new(M$$1, [0, 0], JAM.policy.p4);
                    }
                    JSCompiler_inline_result$$inline_1022 = v809;
                    var v2507 = JSCompiler_temp_const$$inline_1021.x;
                    var v2508 = JSCompiler_inline_result$$inline_1022.x;
                    var v810 = v2507 + v2508;
                    var v2509 = JSCompiler_temp_const$$inline_1021.y;
                    var v2510 = JSCompiler_inline_result$$inline_1022.y;
                    var v811 = v2509 + v2510;
                    JSCompiler_temp$$inline_1020 = JAM.new(M$$1, [v810, v811], JAM.policy.p4);
                  } else {
                    JSCompiler_temp$$inline_1020 = b$$inline_1018;
                  }
                  JSCompiler_temp$$inline_1016 = JSCompiler_temp$$inline_1020;
                }
                var f$$inline_1026 = JSCompiler_temp$$inline_1016;
                var v2511 = c$$inline_1012.x;
                var v2512 = f$$inline_1026.x;
                c$$inline_1012.x = v2511 + v2512;
                var v2513 = c$$inline_1012.y;
                var v2514 = f$$inline_1026.y;
                c$$inline_1012.y = v2513 + v2514;
                var v4392 = d$$inline_1013;
                if (v4392) {
                  v4392 = d$$inline_1013 != b$$inline_1011;
                }
                var v3672 = v4392;
                if (v3672) {
                  v3672 = e$$inline_1015 = d$$inline_1013.frameElement;
                }
                var v2515 = v3672;
                if (v2515) {
                  v2515 = d$$inline_1013 = d$$inline_1013.parent;
                }
                v814 = v2515;
              } while (v814);
              JSCompiler_inline_result$$926 = c$$inline_1012;
              d$$inline_826 = JSCompiler_inline_result$$926;
              var v3673 = b$$inline_824;
              var v4393 = d$$inline_826.x;
              var v5158 = JAM.call(Math.round, Math, [v4393], JAM.policy.p4);
              v3673.adx = v5158;
              var v2516 = b$$inline_824;
              var v3674 = d$$inline_826.y;
              var v5159 = JAM.call(Math.round, Math, [v3674], JAM.policy.p4);
              v2516.ady = v5159;
            } catch (e$$inline_827) {
              b$$inline_824.adx = -12245933;
              b$$inline_824.ady = -12245933;
            }
          }
        }
        JSCompiler_inline_result$$734 = void 0;
      }
      var a$$inline_829 = b$$inline_704;
      var b$$inline_830 = JAM.call(D$$1, null, [], JAM.policy.p4);
      var c$$inline_831 = !1;
      var v817 = b$$inline_830.top;
      var d$$inline_832 = JAM.call(de, null, [c$$inline_831, v817], JAM.policy.p4);
      if (d$$inline_832) {
        var JSCompiler_temp$$inline_833;
        var v3675 = d$$inline_832.width;
        var v2517 = -12245933 == v3675;
        if (v2517) {
          v2517 = b$$inline_830.google_top_values;
        }
        var v821 = JSCompiler_temp$$inline_833 = v2517;
        if (v821) {
          var JSCompiler_inline_result$$inline_834;
          var a$$inline_835 = b$$inline_830.google_top_values;
          var v818 = a$$inline_835[10];
          var b$$inline_836 = JAM.call(parseInt, null, [v818, 10], JAM.policy.p4);
          var v819 = a$$inline_835[11];
          a$$inline_835 = JAM.call(parseInt, null, [v819, 10], JAM.policy.p4);
          var v820;
          var v3676 = 0 < b$$inline_836;
          if (v3676) {
            v3676 = 0 < a$$inline_835;
          }
          var v2518 = v3676;
          if (v2518) {
            v820 = JAM.new(u$$2, [b$$inline_836, a$$inline_835], JAM.policy.p4);
          } else {
            v820 = JAM.new(u$$2, [-12245933, -12245933], JAM.policy.p4);
          }
          JSCompiler_inline_result$$inline_834 = v820;
          JSCompiler_temp$$inline_833 = d$$inline_832 = JSCompiler_inline_result$$inline_834;
        }
        JSCompiler_temp$$inline_833;
        a$$inline_829.biw = d$$inline_832.width;
        a$$inline_829.bih = d$$inline_832.height;
      }
      var v3677 = b$$inline_830.top;
      var v2519 = v3677 != b$$inline_830;
      if (v2519) {
        v2519 = b$$inline_830 = JAM.call(de, null, [c$$inline_831, b$$inline_830], JAM.policy.p4);
      }
      var v822 = v2519;
      if (v822) {
        a$$inline_829.isw = b$$inline_830.width;
        a$$inline_829.ish = b$$inline_830.height;
      }
      var a$$inline_838 = b$$inline_704;
      var b$$inline_839;
      JSCompiler_inline_label_843: {
        var a$$inline_840 = JAM.call(D$$1, null, [], JAM.policy.p4);
        var v2520 = a$$inline_840.top;
        var v823 = a$$inline_840 == v2520;
        if (v823) {
          b$$inline_839 = 0;
          break JSCompiler_inline_label_843;
        }
        var b$$inline_841 = [];
        var v2521 = a$$inline_840.document;
        var v824 = v2521.URL;
        JAM.call(b$$inline_841.push, b$$inline_841, [v824], JAM.policy.p4);
        var v825 = a$$inline_840.name;
        if (v825) {
          var v2522 = a$$inline_840.name;
          JAM.call(b$$inline_841.push, b$$inline_841, [v2522], JAM.policy.p4);
        }
        var c$$inline_842 = !0;
        var v826 = !c$$inline_842;
        a$$inline_840 = JAM.call(de, null, [v826, a$$inline_840], JAM.policy.p4);
        var v2523 = a$$inline_840.width;
        var v827 = JAM.call(v2523.toString, v2523, [], JAM.policy.p4);
        JAM.call(b$$inline_841.push, b$$inline_841, [v827], JAM.policy.p4);
        var v2524 = a$$inline_840.height;
        var v828 = JAM.call(v2524.toString, v2524, [], JAM.policy.p4);
        JAM.call(b$$inline_841.push, b$$inline_841, [v828], JAM.policy.p4);
        var v829 = JAM.call(b$$inline_841.join, b$$inline_841, [""], JAM.policy.p4);
        b$$inline_839 = JAM.call(Ab, null, [v829], JAM.policy.p4);
      }
      var v830 = 0 != b$$inline_839;
      if (v830) {
        var v2525 = a$$inline_838;
        var v5160 = JAM.call(b$$inline_839.toString, b$$inline_839, [], JAM.policy.p4);
        v2525.ifk = v5160;
      }
      var a$$inline_845 = b$$inline_704;
      var b$$inline_846 = JAM.call(J$$1, null, [], JAM.policy.p4);
      var v3678 = window.google_eids;
      var v2526 = JAM.call(n$$2, null, [v3678], JAM.policy.p4);
      if (v2526) {
        var v4394 = window.google_eids;
        var v3679 = v4394.length;
        v2526 = 0 !== v3679;
      }
      var v833 = v2526;
      if (v833) {
        ze = ze | 64;
        var c$$inline_847 = 0;
        var v3680 = window.google_eids;
        var v2527 = v3680.length;
        var v832 = c$$inline_847 < v2527;
        for (;v832;) {
          var v3681 = window.google_eids;
          var v2528 = v3681[c$$inline_847];
          var v831 = JAM.call(p$$1, null, [v2528], JAM.policy.p4);
          if (v831) {
            var v3682 = window.google_eids;
            var v2529 = v3682[c$$inline_847];
            JAM.call(b$$inline_846.bb, b$$inline_846, [v2529], JAM.policy.p4);
          }
          c$$inline_847 = c$$inline_847 + 1;
          var v3683 = window.google_eids;
          var v2530 = v3683.length;
          v832 = c$$inline_847 < v2530;
        }
      }
      var v834 = a$$inline_845;
      var v5161 = JAM.call(b$$inline_846.Ka, b$$inline_846, [], JAM.policy.p4);
      v834.eid = v5161;
      var a$$inline_849 = b$$inline_704;
      var b$$inline_850 = JAM.call(me, null, [], JAM.policy.p4);
      var v835 = b$$inline_850 = JAM.call(b$$inline_850.getOseId, b$$inline_850, [], JAM.policy.p4);
      if (v835) {
        a$$inline_849.oid = b$$inline_850;
      }
      var a$$inline_852 = b$$inline_704;
      var b$$inline_853 = JAM.call(D$$1, null, [], JAM.policy.p4);
      a$$inline_852.ref = window.google_referrer_url;
      a$$inline_852.loc = window.google_page_location;
      var c$$inline_854 = JAM.call(hc, null, [], JAM.policy.p4);
      c$$inline_854 = JAM.call(cf, null, [c$$inline_854], JAM.policy.p4);
      var d$$inline_855 = K$$1;
      var e$$inline_856 = 4;
      var f$$inline_857 = JAM.call(J$$1, null, [], JAM.policy.p4);
      var v836 = d$$inline_855.TOP_URL_REPLACES_MISSING_URL;
      var g$$inline_858 = v836.EXPERIMENT;
      var v2531 = JAM.call(f$$inline_857.m, f$$inline_857, [e$$inline_856], JAM.policy.p4);
      var v838 = v2531 == g$$inline_858;
      if (v838) {
        var b$$inline_859 = c$$inline_854.url;
        var v4395 = a$$inline_852.url;
        var v4778 = !v4395;
        if (v4778) {
          v4395 = a$$inline_852.ref;
        }
        var v3684 = v4395;
        var v4396 = !v3684;
        if (v4396) {
          v3684 = a$$inline_852.loc;
        }
        var v2532 = v3684;
        var v3685 = !v2532;
        if (v3685) {
          v2532 = !b$$inline_859;
        }
        var v837 = v2532;
        var v2533 = !v837;
        if (v2533) {
          a$$inline_852.url = b$$inline_859;
        }
      }
      var v839 = d$$inline_855.ALWAYS_USE_DELAYED_IMPRESSIONS;
      d$$inline_855 = v839.EXPERIMENT;
      var v2534 = JAM.call(f$$inline_857.m, f$$inline_857, [e$$inline_856], JAM.policy.p4);
      var v840 = v2534 == d$$inline_855;
      if (v840) {
        a$$inline_852.unviewed_position_start = "1";
      }
      var v841 = a$$inline_852.loc;
      var v2535 = !v841;
      if (v2535) {
        v841 = a$$inline_852.url;
      }
      e$$inline_856 = v841;
      var v2536 = JAM.call(Ye, null, [], JAM.policy.p4);
      var v842 = !v2536;
      if (v842) {
        var v2537 = c$$inline_854.url;
        var v2538 = a$$inline_852.ref;
        v842 = v2537 == v2538;
      }
      f$$inline_857 = v842;
      var v2539 = f$$inline_857;
      var v3687 = !v2539;
      if (v3687) {
        var v3686 = c$$inline_854.url;
        v2539 = v3686 == e$$inline_856;
      }
      var v843 = v2539;
      var v2540 = !v843;
      if (v2540) {
        a$$inline_852.top = c$$inline_854.url;
      }
      var v844 = window.google_async_rrc;
      if (v844) {
        a$$inline_852.rr = window.google_async_rrc;
      }
      a$$inline_852.rs = 0;
      var v845 = c$$inline_854 = b$$inline_853.google_top_js_status;
      if (v845) {
        a$$inline_852.jp = c$$inline_854;
      }
      if (Xi) {
        a$$inline_852.jpd = Xi;
      }
      var v846 = c$$inline_854 = JAM.call(Mh, null, [b$$inline_853], JAM.policy.p4);
      if (v846) {
        e$$inline_856 = JAM.new(Uh, [c$$inline_854], JAM.policy.p4);
        var v3688 = JAM.call(e$$inline_856.yb, e$$inline_856, [], JAM.policy.p4);
        if (v3688) {
          var v4397 = a$$inline_852;
          var v5162 = JAM.call(e$$inline_856.Ob, e$$inline_856, [], JAM.policy.p4);
          v4397.dss = v5162;
        }
        var v2541 = JAM.call(c$$inline_854.Oa, c$$inline_854, [], JAM.policy.p4);
        if (v2541) {
          var v3689 = a$$inline_852;
          var v5163 = JAM.call(c$$inline_854.Oa, c$$inline_854, [], JAM.policy.p4);
          v3689.dsd = v5163;
        }
      }
      var v851 = JAM.call(ch, null, [window, b$$inline_853], JAM.policy.p4);
      if (v851) {
        var a$$inline_860 = b$$inline_853;
        var c$$inline_861;
        JSCompiler_inline_label_882: {
          var a$$inline_862 = a$$inline_860;
          var b$$inline_863 = window.google_ad_client;
          var v847 = a$$inline_862.location;
          var c$$inline_864 = v847.hash;
          var v2542 = !c$$inline_864;
          var v3691 = !v2542;
          if (v3691) {
            var v3690 = c$$inline_864.indexOf;
            v2542 = !v3690;
          }
          var v848 = v2542;
          if (v848) {
            c$$inline_861 = !1;
            break JSCompiler_inline_label_882;
          }
          var d$$inline_865;
          var v2543 = JAM.call(c$$inline_864.indexOf, c$$inline_864, ["google_anchor_debug"], JAM.policy.p4);
          var v849 = -1 != v2543;
          if (v849) {
            d$$inline_865 = JAM.call(Yg, null, [1], JAM.policy.p4);
          }
          var v850 = !d$$inline_865;
          if (v850) {
            c$$inline_861 = !1;
            break JSCompiler_inline_label_882;
          }
          JAM.call(d$$inline_865.ja, d$$inline_865, [a$$inline_862, b$$inline_863], JAM.policy.p4);
          c$$inline_861 = !0;
        }
        var v2544 = !c$$inline_861;
        if (v2544) {
          JAM.new(dh, [a$$inline_860], JAM.policy.p4);
        }
      }
      c$$inline_854 = JAM.call(rg, null, [b$$inline_853], JAM.policy.p4);
      var v852 = c$$inline_854.wasReactiveAdConfigHandlerRegistered;
      if (v852) {
        var v2545 = a$$inline_852;
        var v5164 = JAM.call(ah, null, [window, b$$inline_853], JAM.policy.p4);
        v2545.fc = v5164;
      }
      var v861 = JAM.call(ub, null, [w$$6], JAM.policy.p4);
      if (v861) {
      } else {
        var JSCompiler_inline_result$$inline_866;
        var a$$inline_867 = "";
        var v860 = document.documentMode;
        if (v860) {
          var b$$inline_868 = JAM.call(document.createElement, document, ["IFRAME"], JAM.policy.p4);
          b$$inline_868.frameBorder = 0;
          var v853 = b$$inline_868.style;
          v853.height = 0;
          var v854 = b$$inline_868.style;
          v854.width = 0;
          var v855 = b$$inline_868.style;
          v855.position = "absolute";
          var v859 = document.body;
          if (v859) {
            var v856 = document.body;
            JAM.call(v856.appendChild, v856, [b$$inline_868], JAM.policy.p4);
            try {
              var v857 = b$$inline_868.contentWindow;
              var c$$inline_869 = v857.document;
              JAM.call(c$$inline_869.open, c$$inline_869, [], JAM.policy.p4);
              JAM.call(c$$inline_869.write, c$$inline_869, ["<!DOCTYPE html>"], JAM.policy.p4);
              JAM.call(c$$inline_869.close, c$$inline_869, [], JAM.policy.p4);
              var v2546 = c$$inline_869.documentMode;
              a$$inline_867 = a$$inline_867 + v2546;
            } catch (d$$inline_878) {
            }
            var v858 = document.body;
            JAM.call(v858.removeChild, v858, [b$$inline_868], JAM.policy.p4);
          }
        }
        JSCompiler_inline_result$$inline_866 = a$$inline_867;
        a$$inline_852.docm = JSCompiler_inline_result$$inline_866;
      }
      c$$inline_854 = K$$1.SS;
      var v862 = JAM.call(J$$1, null, [], JAM.policy.p4);
      e$$inline_856 = JAM.call(v862.m, v862, [14], JAM.policy.p4);
      var v2547 = c$$inline_854.COUNT_AD_FRAMES_ON_PAGE_EXPERIMENT;
      var v863 = e$$inline_856 == v2547;
      if (v863) {
        var v2548 = a$$inline_852;
        var v3692 = a$$inline_852.adk;
        var v3693 = a$$inline_852.correlator;
        var v3694 = a$$inline_852.frm;
        var v5165 = JAM.call(T$$1.frameCountsWithDelayedPingback, T$$1, [b$$inline_853, v3692, v3693, v3694], JAM.policy.p4);
        v2548.frmn = v5165;
      }
      var v2549 = c$$inline_854.BROWSER_DIMENSIONS_EXPERIMENT;
      var v868 = e$$inline_856 == v2549;
      if (v868) {
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
        var v864 = b$$inline_853.screenLeft;
        var v865 = b$$inline_853.screenTop;
        var v2550;
        var v3696 = b$$inline_853.screen;
        if (v3696) {
          var v3695 = b$$inline_853.screen;
          v2550 = v3695.availWidth;
        } else {
          v2550 = void 0;
        }
        var v866 = v2550;
        var v2551;
        var v3698 = b$$inline_853.screen;
        if (v3698) {
          var v3697 = b$$inline_853.screen;
          v2551 = v3697.availTop;
        } else {
          v2551 = void 0;
        }
        var v867 = v2551;
        JSCompiler_inline_result$$inline_870 = [v864, v865, b$$inline_871, c$$inline_872, v866, v867, e$$inline_873, f$$inline_874, h$$inline_875, k$$inline_876];
        b$$inline_853 = JSCompiler_inline_result$$inline_870;
        var v2552 = a$$inline_852;
        var v5166 = JAM.call(b$$inline_853.join, b$$inline_853, [","], JAM.policy.p4);
        v2552.brdim = v5166;
      }
      var a$$inline_877 = 0;
      var v2553 = void 0;
      var v2554 = w$$6.postMessage;
      var v869 = v2553 === v2554;
      if (v869) {
        a$$inline_877 = a$$inline_877 | 1;
      }
      b$$inline_853 = a$$inline_877;
      var v870 = 0 < b$$inline_853;
      if (v870) {
        a$$inline_852.osd = b$$inline_853;
      }
      var v871 = a$$inline_852;
      var v5167 = JAM.call(Xe, null, [document], JAM.policy.p4);
      v871.vis = v5167;
      b$$inline_704.fu = ze;
      a$$inline_500 = b$$inline_704;
      var c$$inline_502 = JAM.call(L$$1, null, [b$$inline_501, "/pagead/ads?"], JAM.policy.p4);
      var JSCompiler_inline_result$$575;
      var v872 = JAM.call(J$$1, null, [], JAM.policy.p4);
      var a$$inline_706 = JAM.call(v872.m, v872, [19], JAM.policy.p4);
      var b$$inline_707 = K$$1.PRERENDERING_DELAYED_IMPRESSION;
      var v2555 = b$$inline_707.EXPERIMENT;
      var v873 = a$$inline_706 == v2555;
      if (v873) {
        var v2556 = window.google_ad_output;
        v873 = "html" == v2556;
      }
      JSCompiler_inline_result$$575 = v873;
      if (JSCompiler_inline_result$$575) {
        a$$inline_500.unviewed_position_start = "1";
      }
      var v4398 = a$$inline_500.unviewed_position_start;
      var v4780 = !v4398;
      if (v4780) {
        var v4779 = w$$6.google_ad_output;
        if (v4779) {
          var v4986 = w$$6.google_ad_output;
          v4779 = "html" !== v4986;
        }
        v4398 = v4779;
      }
      var v3699 = v4398;
      var v4400 = !v3699;
      if (v4400) {
        var v4399 = JAM.call(Xe, null, [v$$1], JAM.policy.p4);
        v3699 = 3 != v4399;
      }
      var v2557 = v3699;
      var v3700 = !v2557;
      if (v3700) {
        v2557 = !Ia$$1;
      }
      var v874 = v2557;
      var v2558 = !v874;
      if (v2558) {
        zi = !0;
        yi = c$$inline_502;
        c$$inline_502 = JAM.call(L$$1, null, [b$$inline_501, "/pagead/blank.gif#?"], JAM.policy.p4);
      }
      var v875 = window;
      var v2559 = c$$inline_502 + "";
      var v5168 = JAM.call(ki, null, [a$$inline_500, v2559], JAM.policy.p4);
      v875.google_ad_url = v5168;
      c$$289 = !0;
    }
    var v2560 = a$$557;
    if (v2560) {
      var v3701 = a$$557.id;
      v2560 = v3701 == b$$428;
    }
    var v876 = v2560;
    if (v876) {
      JAM.call(qd, null, [a$$557], JAM.policy.p4);
    }
    if (c$$289) {
      var JSCompiler_inline_result$$6;
      var a$$inline_504 = window;
      var c$$inline_506 = window.google_ad_url;
      var v2561 = !B$$2;
      if (v2561) {
        JAM.call(wb, null, [a$$inline_504], JAM.policy.p4);
      }
      var e$$inline_508 = JAM.call(yb, null, [a$$inline_504], JAM.policy.p4);
      var v877 = {ifi:e$$inline_508};
      c$$inline_506 = JAM.call(ki, null, [v877, c$$inline_506], JAM.policy.p4);
      var v878;
      var v3702 = c$$inline_506.length;
      var v2563 = 1991 < v3702;
      if (v2563) {
        var v2562 = JAM.call(c$$inline_506.substring, c$$inline_506, [0, 1983], JAM.policy.p4);
        v878 = v2562 + "&trunc=1";
      } else {
        v878 = c$$inline_506;
      }
      c$$inline_506 = v878;
      c$$inline_506 = JAM.call(c$$inline_506.replace, c$$inline_506, [/%\w?$/, ""], JAM.policy.p4);
      var f$$inline_509 = "script";
      var g$$inline_510 = JAM.call(Lb, null, [e$$inline_508], JAM.policy.p4);
      JAM.call(H$$1, null, [], JAM.policy.p4);
      var v4401 = a$$inline_504.google_ad_output;
      var v3703 = "js" != v4401;
      if (v3703) {
        var v4402 = a$$inline_504.google_ad_output;
        v3703 = "json_html" != v4402;
      }
      var v2564 = v3703;
      var v3705 = !v2564;
      if (v3705) {
        var v4403 = a$$inline_504.google_ad_request_done;
        var v3704 = !v4403;
        if (v3704) {
          var v4404 = a$$inline_504.google_radlink_request_done;
          v3704 = !v4404;
        }
        v2564 = v3704;
      }
      var v916 = v2564;
      if (v916) {
        var v2565 = a$$inline_504.google_ad_output;
        var v914 = "html" == v2565;
        if (v914) {
          var a$$inline_711 = a$$inline_504;
          var c$$inline_713 = c$$inline_506;
          var d$$inline_714 = e$$inline_508;
          var e$$inline_715 = ci;
          var f$$inline_716 = void 0;
          var v879;
          if (e$$inline_715) {
            var v2566 = JAM.call(c$$inline_713.replace, c$$inline_713, [/&ea=[^&]*/, ""], JAM.policy.p4);
            v879 = v2566 + "&ea=0";
          } else {
            v879 = c$$inline_713;
          }
          var g$$inline_717 = v879;
          var h$$inline_718 = JAM.call(Lb, null, [d$$inline_714], JAM.policy.p4);
          var k$$inline_719 = {id:h$$inline_718, name:h$$inline_718};
          var v880 = a$$inline_711.google_ad_width;
          var v881 = a$$inline_711.google_ad_height;
          var v882 = !1;
          var v883 = JAM.call(mi, null, [g$$inline_717], JAM.policy.p4);
          JAM.call(Ff, null, [k$$inline_719, v880, v881, v882, v883], JAM.policy.p4);
          var l$$inline_720 = JAM.call(Cf, null, [k$$inline_719], JAM.policy.p4);
          var v2567 = a$$inline_711.google_container_id;
          var v3706 = !v2567;
          if (v3706) {
            v2567 = f$$inline_716;
          }
          var v884 = v2567;
          var v2568 = !v884;
          if (v2568) {
            v884 = null;
          }
          var z$$inline_721 = v884;
          f$$inline_716 = a$$inline_711.google_async_iframe_id;
          var C$$inline_722 = a$$inline_711.google_container_id;
          var v885 = e$$inline_715;
          if (v885) {
            var v2569 = JAM.call(zf, null, [], JAM.policy.p4);
            var v3707 = !v2569;
            if (v3707) {
              v2569 = JAM.call(gi, null, [], JAM.policy.p4);
            }
            v885 = v2569;
          }
          e$$inline_715 = v885;
          var I$$inline_723 = "";
          if (e$$inline_715) {
            var v889 = JAM.call(gi, null, [], JAM.policy.p4);
            if (v889) {
              var JSCompiler_inline_result$$737;
              var a$$inline_884 = 10;
              var v886 = void 0;
              var v2570 = !v886;
              if (v2570) {
                v886 = th;
              }
              var c$$inline_886 = v886;
              var d$$inline_887 = c$$inline_886.length;
              var e$$inline_888 = "";
              var v2571 = a$$inline_884;
              a$$inline_884 = a$$inline_884 - 1;
              var v887 = 0 < v2571;
              for (;v887;) {
                var v2572 = e$$inline_888;
                var v4781 = JAM.call(Math.random, Math, [], JAM.policy.p4);
                var v4405 = v4781 * d$$inline_887;
                var v3708 = JAM.call(Math.floor, Math, [v4405], JAM.policy.p4);
                var v2573 = JAM.call(c$$inline_886.charAt, c$$inline_886, [v3708], JAM.policy.p4);
                e$$inline_888 = v2572 + v2573;
                var v2574 = a$$inline_884;
                a$$inline_884 = a$$inline_884 - 1;
                v887 = 0 < v2574;
              }
              JSCompiler_inline_result$$737 = e$$inline_888;
              var JSCompiler_temp_const$$747 = I$$inline_723 = JSCompiler_inline_result$$737;
              var JSCompiler_temp_const$$746 = c$$inline_713;
              var JSCompiler_temp_const$$745 = I$$inline_723;
              var JSCompiler_inline_result$$748;
              var a$$inline_890 = v$$1.URL;
              var v2575 = !a$$inline_890;
              var v888 = !v2575;
              if (v888) {
                var v3709 = JAM.call(a$$inline_890.indexOf, a$$inline_890, ["?google_debug"], JAM.policy.p4);
                var v2576 = 0 < v3709;
                var v3711 = !v2576;
                if (v3711) {
                  var v3710 = JAM.call(a$$inline_890.indexOf, a$$inline_890, ["&google_debug"], JAM.policy.p4);
                  v2576 = 0 < v3710;
                }
                v888 = v2576;
              }
              JSCompiler_inline_result$$748 = v888;
              JSCompiler_temp_const$$747;
              c$$inline_713 = JAM.call(Zd, null, [JSCompiler_temp_const$$746, JSCompiler_temp_const$$745, JSCompiler_inline_result$$748], JAM.policy.p4);
            }
          } else {
            c$$inline_713 = g$$inline_717;
          }
          var v909 = JAM.call(Zg, null, [a$$inline_711], JAM.policy.p4);
          if (v909) {
            var a$$inline_892 = a$$inline_711;
            var c$$inline_894 = c$$inline_713;
            var d$$inline_895 = k$$inline_719;
            var e$$inline_896 = f$$inline_716;
            var f$$inline_897 = JAM.call(D$$1, null, [], JAM.policy.p4);
            var JSCompiler_inline_result$$inline_898;
            JSCompiler_inline_label_908: {
              var a$$inline_899 = f$$inline_897;
              var b$$inline_900 = a$$inline_892;
              var c$$inline_901 = b$$inline_900.google_reactive_ad_format;
              var v2577 = JAM.call(Ec, null, [lg, c$$inline_901], JAM.policy.p4);
              var v890 = !v2577;
              if (v890) {
                JSCompiler_inline_result$$inline_898 = !1;
                break JSCompiler_inline_label_908;
              }
              var v891 = Ug[c$$inline_901];
              var v2578 = !v891;
              if (v2578) {
                v891 = null;
              }
              c$$inline_901 = v891;
              var JSCompiler_inline_result$$inline_902;
              JSCompiler_inline_label_909: {
                var a$$inline_903 = a$$inline_899;
                var b$$inline_904 = b$$inline_900;
                switch(c$$inline_901) {
                  case 1:
                    var JSCompiler_temp$$940;
                    var v892 = JSCompiler_temp$$940 = JAM.call(Hg, null, [a$$inline_903], JAM.policy.p4);
                    if (v892) {
                      JAM.call(rg, null, [a$$inline_903], JAM.policy.p4);
                      JSCompiler_temp$$940 = !0;
                    }
                    JSCompiler_inline_result$$inline_902 = JSCompiler_temp$$940;
                    break JSCompiler_inline_label_909;
                  case 2:
                    var a$$inline_1030 = a$$inline_903;
                    var JSCompiler_temp$$1033;
                    var v894 = JSCompiler_temp$$1033 = JAM.call(Rg, null, [a$$inline_1030, b$$inline_904], JAM.policy.p4);
                    if (v894) {
                      var a$$inline_1034 = a$$inline_1030;
                      a$$inline_1034 = JAM.call(rg, null, [a$$inline_1034], JAM.policy.p4);
                      var v3712 = a$$inline_1034.wasReactiveAdConfigReceived;
                      var v2579 = v3712[2];
                      var v893 = !v2579;
                      JSCompiler_temp$$1033 = !v893;
                    }
                    JSCompiler_inline_result$$inline_902 = JSCompiler_temp$$1033;
                    break JSCompiler_inline_label_909;
                }
                JSCompiler_inline_result$$inline_902 = !1;
              }
              var v895 = !JSCompiler_inline_result$$inline_902;
              if (v895) {
                JSCompiler_inline_result$$inline_898 = !1;
                break JSCompiler_inline_label_908;
              }
              var d$$inline_905 = JAM.call(rg, null, [a$$inline_899], JAM.policy.p4);
              var v896 = d$$inline_905.wasReactiveAdCreated;
              var e$$inline_906 = v896[c$$inline_901];
              var v897 = d$$inline_905.wasReactiveAdCreated;
              JAM.set(v897, c$$inline_901, !0, JAM.policy.p2);
              JSCompiler_inline_result$$inline_898 = !e$$inline_906;
            }
            if (JSCompiler_inline_result$$inline_898) {
              f$$inline_897 = JAM.call(Zg, null, [a$$inline_892], JAM.policy.p4);
              var g$$inline_907 = {};
              g$$inline_907.fa = f$$inline_897;
              c$$inline_894 = JAM.call(ki, null, [g$$inline_907, c$$inline_894], JAM.policy.p4);
              var v898 = d$$inline_895;
              var v5169 = JAM.call(mi, null, [c$$inline_894], JAM.policy.p4);
              v898.src = v5169;
              c$$inline_894 = JAM.call(Bf, null, [document, d$$inline_895], JAM.policy.p4);
              var v899 = document.body;
              JAM.call(v899.appendChild, v899, [c$$inline_894], JAM.policy.p4);
              var v900 = JAM.call(D$$1, null, [], JAM.policy.p4);
              JAM.call(qh, null, [a$$inline_892, e$$inline_896, c$$inline_894, v900], JAM.policy.p4);
            }
          } else {
            var v908 = JAM.call(hi, null, [a$$inline_711], JAM.policy.p4);
            if (v908) {
              var v3713 = a$$inline_711.google_ad_width;
              var v3714 = a$$inline_711.google_ad_height;
              g$$inline_717 = JAM.call(ga$$1, null, [qi, a$$inline_711, document, e$$inline_715, c$$inline_713, h$$inline_718, k$$inline_719, v3713, v3714, z$$inline_721, f$$inline_716, C$$inline_722], JAM.policy.p4);
              g$$inline_717 = JAM.call(Mb, null, [g$$inline_717], JAM.policy.p4);
              JAM.call(ni, null, [a$$inline_711, c$$inline_713, g$$inline_717], JAM.policy.p4);
            } else {
              var v2580 = a$$inline_711.google_ad_handling_mode;
              var v907 = "S" == v2580;
              if (v907) {
                var a$$inline_911 = a$$inline_711;
                var b$$inline_912 = c$$inline_713;
                var c$$inline_913 = JAM.call(ce, null, [b$$inline_912, "w"], JAM.policy.p4);
                var d$$inline_914 = JAM.call(ce, null, [b$$inline_912, "h"], JAM.policy.p4);
                var e$$inline_915 = JAM.call(ce, null, [b$$inline_912, "ifi"], JAM.policy.p4);
                e$$inline_915 = JAM.call(Lb, null, [e$$inline_915], JAM.policy.p4);
                e$$inline_915 = {id:e$$inline_915, name:e$$inline_915};
                var f$$inline_916 = "U-" + b$$inline_912;
                var v901 = !1;
                var v902 = JAM.call(Df, null, [f$$inline_916], JAM.policy.p4);
                JAM.call(Ff, null, [e$$inline_915, c$$inline_913, d$$inline_914, v901, v902], JAM.policy.p4);
                var v903 = a$$inline_911.document;
                var v904 = JAM.call(Cf, null, [e$$inline_915], JAM.policy.p4);
                JAM.call(v903.write, v903, [v904], JAM.policy.p4);
              } else {
                var v905 = a$$inline_711.google_ad_width;
                var v906 = a$$inline_711.google_ad_height;
                JAM.call(oi, null, [a$$inline_711, document, e$$inline_715, c$$inline_713, h$$inline_718, k$$inline_719, v905, v906, z$$inline_721, f$$inline_716, C$$inline_722], JAM.policy.p4);
              }
            }
          }
          var v2581 = e$$inline_715;
          if (v2581) {
            v2581 = JAM.call(gi, null, [], JAM.policy.p4);
          }
          var v910 = v2581;
          if (v910) {
            var v3715 = JAM.call(zf, null, [], JAM.policy.p4);
            var v4407 = !v3715;
            if (v4407) {
              var v4406 = JAM.call(xe, null, ["ac::write_ee", ei, xc], JAM.policy.p4);
              JAM.call(setTimeout, null, [v4406, 0], JAM.policy.p4);
            }
            var v3716 = w$$6.google_eas_queue;
            var v4408 = a$$inline_711.google_ad_width;
            var v4409 = a$$inline_711.google_ad_height;
            var v4410 = JAM.call(D$$1, null, [], JAM.policy.p4);
            var v4782 = f$$inline_716;
            var v4987 = !v4782;
            if (v4987) {
              v4782 = void 0;
            }
            var v4411 = v4782;
            var v4412 = "google_expandable_ad_slot" + d$$inline_714;
            var v3717 = JAM.call(Yd, null, [h$$inline_718, c$$inline_713, v4408, v4409, I$$inline_723, v4410, v4411, v4412], JAM.policy.p4);
            JAM.call(v3716.push, v3716, [v3717], JAM.policy.p4);
          }
          if (B$$2) {
            var a$$inline_918 = a$$inline_711.google_async_iframe_id;
            var v3718 = ["<!DOCTYPE html><html><body>", l$$inline_720, "</body></html>"];
            var v2582 = JAM.call(v3718.join, v3718, [""], JAM.policy.p4);
            var v911 = JAM.call(ab$$1, null, [v2582], JAM.policy.p4);
            var c$$inline_920 = "javascript:" + v911;
            var d$$inline_921 = JAM.call(D$$1, null, [], JAM.policy.p4);
            var v912 = JAM.new(Me, [d$$inline_921], JAM.policy.p4);
            JAM.call(v912.set, v912, [a$$inline_918, c$$inline_920], JAM.policy.p4);
          }
          a$$inline_711 = JAM.call(document.getElementById, document, [h$$inline_718], JAM.policy.p4);
          var v913 = zi && a$$inline_711;
          if (v913) {
            JAM.call(Ai, null, [a$$inline_711, document], JAM.policy.p4);
          }
        }
      } else {
        var v4988 = "<" + f$$inline_509;
        var v4783 = v4988 + ' language="JavaScript1.1" src=';
        var v4989 = JAM.call(mi, null, [c$$inline_506], JAM.policy.p4);
        var v4784 = JAM.call(ji, null, [v4989], JAM.policy.p4);
        var v4413 = v4783 + v4784;
        var v3719 = v4413 + "></";
        var v2583 = v3719 + f$$inline_509;
        var v915 = v2583 + ">";
        JAM.call(document.write, document, [v915], JAM.policy.p4);
      }
      var v917 = a$$inline_504.google_ad_output;
      var v918 = a$$inline_504.google_ad_width;
      var v919 = a$$inline_504.google_ad_height;
      sc = JAM.call(ga$$1, null, [wi, g$$inline_510, c$$inline_506, v917, v918, v919], JAM.policy.p4);
      JSCompiler_inline_result$$6 = c$$inline_506;
      var JSCompiler_temp_const$$9 = JSCompiler_inline_result$$6;
      var JSCompiler_inline_result$$10;
      JAM.call(Bh, null, [window], JAM.policy.p4);
      JSCompiler_inline_result$$10 = void 0;
      JSCompiler_temp_const$$9;
      var JSCompiler_temp_const$$32 = JSCompiler_inline_result$$10;
      var JSCompiler_temp$$33;
      var v2584 = a$$557 = bg;
      if (v2584) {
        var v3720 = JAM.call(a$$557.Ta, a$$557, [], JAM.policy.p4);
        v2584 = !v3720;
      }
      var v920 = JSCompiler_temp$$33 = v2584;
      if (v920) {
      } else {
        if (sc) {
          JAM.call(sc, null, [], JAM.policy.p4);
        }
        JSCompiler_temp$$33 = void 0;
      }
    } else {
      if (B$$2) {
        JAM.call(uf, null, [], JAM.policy.p4);
        JAM.call(Wb, null, [window], JAM.policy.p4);
      }
    }
    return;
  }
  function Vi() {
    var a$$556 = w$$6;
    var v3721 = a$$556.google_ad_output;
    var v2585 = "html" != v3721;
    var v3722 = !v2585;
    if (v3722) {
      v2585 = JAM.call(ub, null, [a$$556], JAM.policy.p4);
    }
    var v921 = v2585;
    var v2588 = !v921;
    if (v2588) {
      var v2586 = JAM.call(J$$1, null, [], JAM.policy.p4);
      var v4414 = K$$1.SEND_LOAD_TIME_PINGBACKS;
      var v3723 = v4414.EXPERIMENT;
      var v2587 = [v3723];
      JAM.call(v2586.k, v2586, [v2587, ra$$1, 16], JAM.policy.p4);
    }
    return;
  }
  function Ai(a$$541, b$$413) {
    function v26() {
      JAM.call(xi, null, [yi, a$$541], JAM.policy.p4);
      JAM.call(A$$1, null, [v$$1, "webkitvisibilitychange", c$$278], JAM.policy.p4);
      return;
    }
    var v2589 = JAM.call(Xe, null, [b$$413], JAM.policy.p4);
    var v922 = 3 != v2589;
    if (v922) {
      JAM.call(xi, null, [yi, a$$541], JAM.policy.p4);
    } else {
      var c$$278 = v26;
      JAM.call(y$$31, null, [b$$413, "webkitvisibilitychange", c$$278], JAM.policy.p4);
    }
    zi = !1;
    return;
  }
  function wi(a$$540, b$$412, c$$277, d$$169, e$$100) {
    a$$540 = JAM.call(document.getElementById, document, [a$$540], JAM.policy.p4);
    var a$$inline_442 = b$$412;
    var b$$inline_443 = a$$540;
    var c$$inline_444 = c$$277;
    var d$$inline_445 = d$$169;
    var e$$inline_446 = e$$100;
    var f$$inline_447 = JAM.call(me, null, [], JAM.policy.p4);
    var v923 = JAM.call(f$$inline_447.getOseId, f$$inline_447, [], JAM.policy.p4);
    if (v923) {
      var v3724 = c$$inline_444 || "";
      var v2590 = JAM.call(String, null, [v3724], JAM.policy.p4);
      JAM.call(f$$inline_447.registerAdBlock, f$$inline_447, [a$$inline_442, 1, v2590, b$$inline_443, d$$inline_445, e$$inline_446], JAM.policy.p4);
    }
    if (B$$2) {
      JAM.call(uf, null, [], JAM.policy.p4);
      JAM.call(Wb, null, [window], JAM.policy.p4);
    }
    return;
  }
  function oi(a$$537, b$$409, c$$274, d$$166, e$$97, f$$56, g$$34, h$$26, k$$13, l$$15, z$$8) {
    var v2591 = !c$$274;
    var v3725 = !v2591;
    if (v3725) {
      v2591 = JAM.call(gi, null, [], JAM.policy.p4);
    }
    var v925 = v2591;
    if (v925) {
      var v2592 = f$$56;
      var v5170 = JAM.call(mi, null, [d$$166], JAM.policy.p4);
      v2592.src = v5170;
      var JSCompiler_temp_const$$64 = a$$537 = JAM.call(Cf, null, [f$$56], JAM.policy.p4);
      var JSCompiler_temp$$65;
      if (z$$8) {
        var a$$inline_432 = z$$8;
        var c$$inline_434 = a$$537;
        var v4415 = a$$inline_432;
        if (v4415) {
          v4415 = a$$inline_432 = JAM.call(b$$409.getElementById, b$$409, [a$$inline_432], JAM.policy.p4);
        }
        var v3726 = v4415;
        if (v3726) {
          v3726 = c$$inline_434;
        }
        var v2593 = v3726;
        if (v2593) {
          var v3727 = c$$inline_434.length;
          v2593 = "" != v3727;
        }
        var v924 = v2593;
        if (v924) {
          var v3728 = a$$inline_432.style;
          v3728.visibility = "visible";
          JAM.set(a$$inline_432, "innerHTML", c$$inline_434);
        }
        JSCompiler_temp$$65 = void 0;
      } else {
        JSCompiler_temp$$65 = JAM.call(b$$409.write, b$$409, [a$$537], JAM.policy.p4);
      }
    } else {
      b$$409 = JAM.call(yb, null, [a$$537], JAM.policy.p4);
      var v2594 = a$$537;
      var v2595 = "google_expandable_ad_slot" + b$$409;
      var v3729 = JAM.call(mi, null, [d$$166], JAM.policy.p4);
      var v4416 = k$$13;
      var v4785 = !v4416;
      if (v4785) {
        v4416 = void 0;
      }
      var v3730 = v4416;
      var v3731 = JAM.call(D$$1, null, [], JAM.policy.p4);
      var v4417 = l$$15;
      var v4786 = !v4417;
      if (v4786) {
        v4417 = void 0;
      }
      var v3732 = v4417;
      var v5171 = JAM.call(ExpandableAdSlotFactory.createIframe, ExpandableAdSlotFactory, [e$$97, v3729, g$$34, h$$26, v3730, v3731, v3732], JAM.policy.p4);
      JAM.set(v2594, v2595, v5171, JAM.policy.p2);
    }
    return;
  }
  function qi(a$$536, b$$408, c$$273, d$$165, e$$96, f$$55, g$$33, h$$25, k$$12, l$$14, z$$7, C$$4, I$$2, xb$$1) {
    var a$$inline_427 = d$$165;
    var b$$inline_428 = C$$4;
    var c$$inline_429 = I$$2;
    var v926 = void 0;
    var v927 = !0;
    a$$inline_427 = JAM.call(be, null, [a$$inline_427, "pfi", b$$inline_428, v926, v927], JAM.policy.p4);
    if (c$$inline_429) {
      var v4418;
      var v4788 = b$$inline_428 = JAM.call(ce, null, [a$$inline_427, "eid"], JAM.policy.p4);
      if (v4788) {
        var v4787 = c$$inline_429 + "%2C";
        v4418 = v4787 + b$$inline_428;
      } else {
        v4418 = c$$inline_429;
      }
      b$$inline_428 = v4418;
      a$$inline_427 = JAM.call(be, null, [a$$inline_427, "eid", b$$inline_428], JAM.policy.p4);
      var v3733 = 453848236 == c$$inline_429;
      if (v3733) {
        var v4419 = void 0;
        var v4420 = !0;
        a$$inline_427 = JAM.call(be, null, [a$$inline_427, "unviewed_position_start", 1, v4419, v4420], JAM.policy.p4);
      }
    }
    d$$165 = a$$inline_427;
    var v2596 = 453848234 == I$$2;
    var v3734 = !v2596;
    if (v3734) {
      v2596 = 453848236 == I$$2;
    }
    var v928 = v2596;
    if (v928) {
      d$$165 = JAM.call(d$$165.replace, d$$165, [/&(adx|ady|oid|jp|top)=[^&]*/g, ""], JAM.policy.p4);
      d$$165 = d$$165 + "&ea=0";
      c$$273 = !1;
    }
    JAM.call(oi, null, [a$$536, b$$408, c$$273, d$$165, e$$96, f$$55, g$$33, h$$25, k$$12, l$$14, z$$7], JAM.policy.p4);
    if (xb$$1) {
      if (sc) {
        JAM.call(sc, null, [], JAM.policy.p4);
      }
    }
    return;
  }
  function ni(a$$535, b$$407, c$$272) {
    function v27() {
      JAM.call(d$$164.R, d$$164, [], JAM.policy.p4);
      var v929 = JAM.call(d$$164.Ta, d$$164, [], JAM.policy.p4);
      var v2597 = !v929;
      if (v2597) {
        JAM.call(d$$164.ya, d$$164, [], JAM.policy.p4);
        var v3735 = JAM.call(d$$164.v, d$$164, [], JAM.policy.p4);
        var v3736 = !0;
        JAM.call(c$$272, null, [v3735, null, v3736], JAM.policy.p4);
      }
      return;
    }
    var d$$164 = bg;
    var v2599 = !d$$164;
    if (v2599) {
      var v2598 = !1;
      JAM.call(c$$272, null, [-1, null, v2598], JAM.policy.p4);
    }
    JAM.call(d$$164.R, d$$164, [], JAM.policy.p4);
    var v930;
    var v2603 = d$$164.ma;
    if (v2603) {
      var v2600 = JAM.call(d$$164.v, d$$164, [], JAM.policy.p4);
      var v2601 = d$$164.za;
      var v2602 = !1;
      v930 = JAM.call(c$$272, null, [v2600, v2601, v2602], JAM.policy.p4);
    } else {
      var v3737 = JAM.call(mi, null, [b$$407], JAM.policy.p4);
      JAM.call(d$$164.zc, d$$164, [v3737, c$$272], JAM.policy.p4);
      var v3738 = d$$164.va;
      var v4421 = !v3738;
      if (v4421) {
        b$$407 = Fe;
        var v4789;
        var v5055 = navigator.userAgent;
        var v4990 = JAM.call(b$$407.test, b$$407, [v5055], JAM.policy.p4);
        if (v4990) {
          JAM.call(d$$164.Ec, d$$164, [], JAM.policy.p4);
          b$$407 = v27;
          v4789 = JAM.call(a$$535.setTimeout, a$$535, [b$$407, Wh], JAM.policy.p4);
        } else {
          JAM.call(d$$164.ya, d$$164, [], JAM.policy.p4);
          var v5056 = JAM.call(d$$164.v, d$$164, [], JAM.policy.p4);
          var v5057 = !1;
          v4789 = JAM.call(c$$272, null, [v5056, null, v5057], JAM.policy.p4);
        }
        v3738 = v4789;
      }
      v930 = v3738;
    }
    v930;
    return;
  }
  function hi(a$$534) {
    var b$$406 = a$$534.google_ad_handling_mode;
    var v2604;
    if (B$$2) {
      var v3739 = JAM.call(yb, null, [a$$534], JAM.policy.p4);
      v2604 = 1 == v3739;
    } else {
      var v3740 = JAM.call(yb, null, [a$$534], JAM.policy.p4);
      v2604 = !v3740;
    }
    var v931 = v2604;
    if (v931) {
      v931 = JAM.call(Le, null, [b$$406], JAM.policy.p4);
    }
    return v931;
  }
  function li() {
    var a$$533 = JAM.call(me, null, [], JAM.policy.p4);
    var b$$405 = JAM.call(mc, null, [], JAM.policy.p4);
    var v932 = a$$533.setUpForcePeriscope;
    if (v932) {
      JAM.call(a$$533.setUpForcePeriscope, a$$533, [], JAM.policy.p4);
    }
    var v933 = JAM.call(G$$1, null, [b$$405, 7], JAM.policy.p4);
    return JAM.call(a$$533.setupOse, a$$533, [v933], JAM.policy.p4);
  }
  function ki(a$$531, b$$403) {
    function v28(a$$532, b$$404) {
      var v3741 = a$$532;
      var v4422 = !v3741;
      if (v4422) {
        v3741 = 0 === a$$532;
      }
      var v2605 = v3741;
      var v3743 = !v2605;
      if (v3743) {
        var v3742 = !1;
        v2605 = v3742 === a$$532;
      }
      var v934 = v2605;
      if (v934) {
        var v4423 = typeof a$$532;
        var v3744 = "boolean" == v4423;
        if (v3744) {
          var v4424;
          if (a$$532) {
            v4424 = 1;
          } else {
            v4424 = 0;
          }
          a$$532 = v4424;
        }
        var v4425;
        var v4991 = typeof encodeURIComponent;
        var v4790 = "function" == v4991;
        if (v4790) {
          v4425 = JAM.call(encodeURIComponent, null, [a$$532], JAM.policy.p4);
        } else {
          v4425 = JAM.call(escape, null, [a$$532], JAM.policy.p4);
        }
        var v3745 = v4425;
        JAM.call(ib$$1, null, [e$$95, d$$163, b$$404, "=", v3745], JAM.policy.p4);
        d$$163 = "&";
      }
      return;
    }
    var c$$271 = JAM.call(b$$403.slice, b$$403, [-1], JAM.policy.p4);
    var v935;
    var v3746 = "?" == c$$271;
    var v4426 = !v3746;
    if (v4426) {
      v3746 = "#" == c$$271;
    }
    var v2606 = v3746;
    if (v2606) {
      v935 = "";
    } else {
      v935 = "&";
    }
    var d$$163 = v935;
    var e$$95 = [b$$403];
    c$$271 = v28;
    JAM.call(x$$50, null, [a$$531, c$$271], JAM.policy.p4);
    return JAM.call(e$$95.join, e$$95, [""], JAM.policy.p4);
  }
  function di() {
    return JAM.call(L$$1, null, [Vh, "/pagead/expansion_embed.js"], JAM.policy.p4);
  }
  function bi() {
    var v3747 = window.google_ad_format;
    var v2607 = JAM.call(/_sdo/.test, /_sdo/, [v3747], JAM.policy.p4);
    var v988 = !v2607;
    if (v988) {
      var v2608 = JAM.call(wc, null, [], JAM.policy.p4);
      var v961 = !v2608;
      if (v961) {
        var a$$inline_411 = JAM.call(H$$1, null, [], JAM.policy.p4);
        var v938 = w$$6.google_top_experiment;
        if (v938) {
          var a$$inline_645 = Of;
          var b$$inline_646 = K$$1.PERISCOPE_FOR_TARGETING;
          var v937 = window.google_top_experiment;
          if (v937) {
            var c$$inline_647;
            var v936 = window.google_top_experiment;
            switch(v936) {
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
              var v2609 = JAM.call(H$$1, null, [], JAM.policy.p4);
              var v2610 = [c$$inline_647];
              JAM.call(v2609.k, v2609, [v2610, 1, 10], JAM.policy.p4);
            }
          }
        }
        var a$$inline_649 = JAM.call(D$$1, null, [], JAM.policy.p4);
        var b$$inline_650 = K$$1.DEVICE_SENSORS;
        var v940 = a$$inline_649.google_sensors;
        if (v940) {
          var v939 = a$$inline_649.google_sensors;
          a$$inline_649 = v939.sensorsExperiment;
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
            var v2611 = JAM.call(H$$1, null, [], JAM.policy.p4);
            var v2612 = [c$$inline_651];
            JAM.call(v2611.k, v2611, [v2612, 1, 10], JAM.policy.p4);
          }
        }
        var v2613 = K$$1.EXPANDABLE_MOBILE_REVERSE;
        var v941 = v2613.CONTROL;
        var v2614 = K$$1.EXPANDABLE_MOBILE_REVERSE;
        var v942 = v2614.EXPERIMENT;
        var b$$inline_412 = [v941, v942];
        JAM.call(a$$inline_411.k, a$$inline_411, [b$$inline_412, na$$1, 13], JAM.policy.p4);
        var b$$inline_654 = Ge;
        var c$$inline_655 = K$$1.PREFETCH_AD_HANDLING;
        var d$$inline_656;
        var v943 = w$$6.google_ad_handling_mode;
        switch(v943) {
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
          var v2615 = JAM.call(H$$1, null, [], JAM.policy.p4);
          var v2616 = [d$$inline_656];
          JAM.call(v2615.k, v2615, [v2616, 1, 4], JAM.policy.p4);
        }
        var c$$inline_413 = K$$1.SS;
        var v944 = c$$inline_413.COUNT_AD_FRAMES_ON_PAGE_CONTROL;
        var v945 = c$$inline_413.COUNT_AD_FRAMES_ON_PAGE_EXPERIMENT;
        b$$inline_412 = [v944, v945];
        JAM.call(a$$inline_411.k, a$$inline_411, [b$$inline_412, va$$1, 14], JAM.policy.p4);
        var v946 = c$$inline_413.BROWSER_DIMENSIONS_CONTROL;
        var v947 = c$$inline_413.BROWSER_DIMENSIONS_EXPERIMENT;
        b$$inline_412 = [v946, v947];
        JAM.call(a$$inline_411.k, a$$inline_411, [b$$inline_412, Ca$$1, 14], JAM.policy.p4);
        b$$inline_412 = K$$1.PERISCOPE_FOR_TARGETING;
        var v948 = b$$inline_412.CONTROL_REFERER_CLEANUP;
        var v949 = b$$inline_412.EXPERIMENT_REFERER_CLEANUP;
        b$$inline_412 = [v948, v949];
        JAM.call(a$$inline_411.k, a$$inline_411, [b$$inline_412, qa$$1, 10], JAM.policy.p4);
        var v951 = window.google_ad_unit_key_2;
        if (v951) {
          var a$$inline_658;
          var v950;
          var v3748 = window.google_ad_unit_key_2;
          var v2619 = "ctrl" == v3748;
          if (v2619) {
            var v2617 = K$$1.ADD_ADK2;
            v950 = a$$inline_658 = v2617.CONTROL;
          } else {
            var v3749 = window.google_ad_unit_key_2;
            var v2618 = JAM.call(/[0-9]+/.test, /[0-9]+/, [v3749], JAM.policy.p4);
            if (v2618) {
              var v3750 = K$$1.ADD_ADK2;
              v2618 = a$$inline_658 = v3750.EXPERIMENT;
            }
            v950 = v2618;
          }
          v950;
          if (a$$inline_658) {
            var v2620 = JAM.call(H$$1, null, [], JAM.policy.p4);
            var v2621 = [a$$inline_658];
            JAM.call(v2620.k, v2620, [v2621, 1, 4], JAM.policy.p4);
          }
        }
        var v2622 = K$$1.ASYNC_EXPANSION_EMBED;
        var v952 = v2622.EXPERIMENT;
        var v2623 = K$$1.ASYNC_EXPANSION_EMBED;
        var v953 = v2623.CONTROL;
        b$$inline_412 = [v952, v953];
        JAM.call(a$$inline_411.k, a$$inline_411, [b$$inline_412, ya$$1, 18], JAM.policy.p4);
        var a$$inline_660 = void 0;
        var b$$inline_661 = Pb;
        var c$$inline_662 = K$$1.ASYNC_FOR_OPERA_ANDROID;
        var v954 = a$$inline_660;
        var v2624 = !v954;
        if (v2624) {
          v954 = navigator.userAgent;
        }
        a$$inline_660 = v954;
        var v956 = window.google_async_for_oa_experiment;
        if (v956) {
          var d$$inline_663;
          a$$inline_660 = JAM.call(/Chrome/.test, /Chrome/, [a$$inline_660], JAM.policy.p4);
          var v955;
          var v3751 = window.google_async_for_oa_experiment;
          var v3752 = b$$inline_661.CONTROL;
          var v2627 = v3751 == v3752;
          if (v2627) {
            var v2625;
            if (a$$inline_660) {
              v2625 = c$$inline_662.CONTROL_ANDROID_CHROME;
            } else {
              v2625 = c$$inline_662.CONTROL_ANDROID;
            }
            v955 = d$$inline_663 = v2625;
          } else {
            var v3753 = window.google_async_for_oa_experiment;
            var v3754 = b$$inline_661.EXPERIMENT;
            var v2626 = v3753 == v3754;
            if (v2626) {
              var v3755;
              if (a$$inline_660) {
                v3755 = c$$inline_662.EXPERIMENT_ANDROID_CHROME;
              } else {
                v3755 = c$$inline_662.EXPERIMENT_ANDROID;
              }
              v2626 = d$$inline_663 = v3755;
            }
            v955 = v2626;
          }
          v955;
          if (d$$inline_663) {
            var v2628 = JAM.call(H$$1, null, [], JAM.policy.p4);
            var v2629 = [d$$inline_663];
            JAM.call(v2628.k, v2628, [v2629, 1, 4], JAM.policy.p4);
          }
        }
        var v2630 = K$$1.JS_RNG;
        var v957 = v2630.CONTROL;
        var v2631 = K$$1.JS_RNG;
        var v958 = v2631.EXPERIMENT;
        b$$inline_412 = [v957, v958];
        JAM.call(a$$inline_411.k, a$$inline_411, [b$$inline_412, za$$1, 17], JAM.policy.p4);
        var a$$inline_665 = v$$1;
        a$$inline_665 = JAM.call(Xe, null, [a$$inline_665], JAM.policy.p4);
        var v960 = 3 == a$$inline_665;
        if (v960) {
          a$$inline_665 = K$$1.PRERENDERING_DELAYED_IMPRESSION;
          var b$$inline_666 = JAM.call(H$$1, null, [], JAM.policy.p4);
          var v2632 = a$$inline_665.CONTROL;
          var v2633 = a$$inline_665.EXPERIMENT;
          var v959 = [v2632, v2633];
          JAM.call(b$$inline_666.k, b$$inline_666, [v959, ua$$1, 19], JAM.policy.p4);
        }
      }
      JSCompiler_inline_label_Vf_671: {
        var a$$inline_668 = Uf;
        var b$$inline_669 = K$$1.APPEND_AS_FOR_FORMAT_OVERRIDE;
        var c$$inline_670 = window.google_append_as_for_format_override;
        if (c$$inline_670) {
          var v2634;
          var v4427 = a$$inline_668.EXPERIMENT;
          var v3756 = c$$inline_670 == v4427;
          if (v3756) {
            v2634 = b$$inline_669.EXPERIMENT;
          } else {
            v2634 = b$$inline_669.CONTROL;
          }
          a$$inline_668 = v2634;
          var v2635 = JAM.call(J$$1, null, [], JAM.policy.p4);
          var v2636 = [a$$inline_668];
          JAM.call(v2635.k, v2635, [v2636, 1, 15], JAM.policy.p4);
          break JSCompiler_inline_label_Vf_671;
        }
      }
      JSCompiler_inline_label_Tf_676: {
        var a$$inline_672 = Sf;
        var b$$inline_673 = K$$1.ALWAYS_USE_DELAYED_IMPRESSIONS;
        var c$$inline_674 = window.google_always_use_delayed_impressions_experiment;
        var d$$inline_675 = window.google_ad_output;
        var v2637 = c$$inline_674;
        if (v2637) {
          var v3757 = !d$$inline_675;
          var v4428 = !v3757;
          if (v4428) {
            v3757 = "html" == d$$inline_675;
          }
          v2637 = v3757;
        }
        var v962 = v2637;
        if (v962) {
          var v2638;
          var v4429 = a$$inline_672.EXPERIMENT;
          var v3758 = c$$inline_674 == v4429;
          if (v3758) {
            v2638 = b$$inline_673.EXPERIMENT;
          } else {
            v2638 = b$$inline_673.CONTROL;
          }
          a$$inline_672 = v2638;
          var v2639 = JAM.call(J$$1, null, [], JAM.policy.p4);
          var v2640 = [a$$inline_672];
          JAM.call(v2639.k, v2639, [v2640, 1, 4], JAM.policy.p4);
          break JSCompiler_inline_label_Tf_676;
        }
      }
      var a$$inline_416 = window;
      var b$$inline_417;
      var a$$inline_677 = document.URL;
      var b$$inline_678 = {};
      a$$inline_677 = JAM.call(a$$inline_677.split, a$$inline_677, ["?"], JAM.policy.p4);
      var v3759 = a$$inline_677.length;
      var v2641 = v3759 - 1;
      var v963 = a$$inline_677[v2641];
      a$$inline_677 = JAM.call(v963.split, v963, ["&"], JAM.policy.p4);
      var c$$inline_679 = 0;
      var v2642 = a$$inline_677.length;
      var v969 = c$$inline_679 < v2642;
      for (;v969;) {
        var v964 = a$$inline_677[c$$inline_679];
        var d$$inline_680 = JAM.call(v964.split, v964, ["="], JAM.policy.p4);
        var v968 = d$$inline_680[0];
        if (v968) {
          try {
            var v965 = d$$inline_680[0];
            var JSCompiler_temp_const$$741 = JAM.call(v965.toLowerCase, v965, [], JAM.policy.p4);
            var JSCompiler_temp$$742;
            var v2643 = d$$inline_680.length;
            var v967 = 1 < v2643;
            if (v967) {
              var a$$inline_755 = d$$inline_680[1];
              var v966;
              var v2645 = window.decodeURIComponent;
              if (v2645) {
                var v2644 = JAM.call(a$$inline_755.replace, a$$inline_755, [/\+/g, " "], JAM.policy.p4);
                v966 = JAM.call(decodeURIComponent, null, [v2644], JAM.policy.p4);
              } else {
                v966 = JAM.call(unescape, null, [a$$inline_755], JAM.policy.p4);
              }
              JSCompiler_temp$$742 = v966;
            } else {
              JSCompiler_temp$$742 = "";
            }
            JAM.set(b$$inline_678, JSCompiler_temp_const$$741, JSCompiler_temp$$742, JAM.policy.p2);
          } catch (e$$inline_681) {
          }
        }
        c$$inline_679 = c$$inline_679 + 1;
        var v2646 = a$$inline_677.length;
        v969 = c$$inline_679 < v2646;
      }
      b$$inline_417 = b$$inline_678;
      var v970 = b$$inline_417.google_ad_override;
      if (v970) {
        a$$inline_416.google_ad_override = b$$inline_417.google_ad_override;
        a$$inline_416.google_adtest = "on";
      }
      var a$$529 = window.google_start_time;
      var v971 = JAM.call(q$$3, null, [a$$529], JAM.policy.p4);
      if (v971) {
        vf = a$$529;
        window.google_start_time = null;
      }
      JAM.call(te, null, ["show_ads::init_globals", ve, $h], JAM.policy.p4);
      var a$$inline_419 = window;
      var d$$inline_422 = "script";
      var a$$inline_683 = a$$inline_419;
      var b$$inline_684 = a$$inline_683.google_ad_width;
      var c$$inline_685 = a$$inline_683.google_ad_height;
      var d$$inline_686 = JAM.call(D$$1, null, [], JAM.policy.p4);
      var JSCompiler_inline_result$$749;
      JSCompiler_inline_label_yf_768: {
        var a$$inline_757 = a$$inline_683;
        var b$$inline_758 = d$$inline_686.document;
        try {
          var JSCompiler_temp$$inline_759;
          var v5087 = !1;
          var v5088 = a$$inline_757.google_allow_expandable_ads;
          var v5058 = v5087 === v5088;
          var v5090 = !v5058;
          if (v5090) {
            var v5089 = b$$inline_758.body;
            v5058 = !v5089;
          }
          var v4992 = v5058;
          var v5060 = !v4992;
          if (v5060) {
            var v5059 = a$$inline_757.google_ad_output;
            if (v5059) {
              var v5091 = a$$inline_757.google_ad_output;
              v5059 = "html" != v5091;
            }
            v4992 = v5059;
          }
          var v4791 = v4992;
          var v4994 = !v4791;
          if (v4994) {
            var v4993 = a$$inline_757.google_ad_height;
            v4791 = JAM.call(isNaN, null, [v4993], JAM.policy.p4);
          }
          var v4430 = v4791;
          var v4793 = !v4430;
          if (v4793) {
            var v4792 = a$$inline_757.google_ad_width;
            v4430 = JAM.call(isNaN, null, [v4792], JAM.policy.p4);
          }
          var v3760 = v4430;
          var v4433 = !v3760;
          if (v4433) {
            var v4431 = b$$inline_758.domain;
            var v4794 = a$$inline_757.location;
            var v4432 = v4794.hostname;
            v3760 = v4431 != v4432;
          }
          var v2647 = v3760;
          var v3762 = !v2647;
          if (v3762) {
            var v4795 = b$$inline_758.location;
            var v4434 = v4795.protocol;
            var v3761 = JAM.call(/^http/.test, /^http/, [v4434], JAM.policy.p4);
            v2647 = !v3761;
          }
          var v977 = JSCompiler_temp$$inline_759 = v2647;
          if (v977) {
          } else {
            var JSCompiler_inline_result$$inline_760;
            JSCompiler_inline_label_767: {
              var b$$inline_761 = b$$inline_758;
              var v972;
              var v4435 = JAM.call(J$$1, null, [], JAM.policy.p4);
              var v3763 = JAM.call(v4435.m, v4435, [13], JAM.policy.p4);
              var v4436 = K$$1.EXPANDABLE_MOBILE_REVERSE;
              var v3764 = v4436.EXPERIMENT;
              var v2648 = v3763 == v3764;
              if (v2648) {
                v972 = /Win|Mac|Linux/;
              } else {
                v972 = /Win|Mac|Linux|iPad|iPod|iPhone/;
              }
              var c$$inline_762 = v972;
              var d$$inline_763 = navigator.userAgent;
              var e$$inline_764 = navigator.platform;
              c$$inline_762 = c$$inline_762 || /Win|Mac|Linux|iPad|iPod|iPhone/;
              var v2649 = JAM.call(c$$inline_762.test, c$$inline_762, [e$$inline_764], JAM.policy.p4);
              if (v2649) {
                var v3765 = JAM.call(/^Opera/.test, /^Opera/, [d$$inline_763], JAM.policy.p4);
                v2649 = !v3765;
              }
              var v976 = v2649;
              if (v976) {
                var v2650 = JAM.call(/WebKit\/(\d+)/.exec, /WebKit\/(\d+)/, [d$$inline_763], JAM.policy.p4);
                var v3766 = !v2650;
                if (v3766) {
                  v2650 = [0, 0];
                }
                var v973 = v2650;
                c$$inline_762 = v973[1];
                var v2651 = JAM.call(/rv\:(\d+\.\d+)/.exec, /rv\:(\d+\.\d+)/, [d$$inline_763], JAM.policy.p4);
                var v3767 = !v2651;
                if (v3767) {
                  v2651 = [0, 0];
                }
                var v974 = v2651;
                var f$$inline_765 = v974[1];
                var v4796 = JAM.call(/Win/.test, /Win/, [e$$inline_764], JAM.policy.p4);
                if (v4796) {
                  v4796 = JAM.call(/MSIE.*Trident/.test, /MSIE.*Trident/, [d$$inline_763], JAM.policy.p4);
                }
                var v4437 = v4796;
                if (v4437) {
                  var v4797 = b$$inline_761.documentMode;
                  v4437 = 8 < v4797;
                }
                var v3768 = v4437;
                var v4439 = !v3768;
                if (v4439) {
                  var v4995 = !c$$inline_762;
                  if (v4995) {
                    var v5061 = navigator.product;
                    v4995 = "Gecko" == v5061;
                  }
                  var v4798 = v4995;
                  if (v4798) {
                    v4798 = 1.7 < f$$inline_765;
                  }
                  var v4438 = v4798;
                  if (v4438) {
                    var v4799 = JAM.call(/rv\:1\.8([^.]|\.0)/.test, /rv\:1\.8([^.]|\.0)/, [d$$inline_763], JAM.policy.p4);
                    v4438 = !v4799;
                  }
                  v3768 = v4438;
                }
                var v2652 = v3768;
                var v3769 = !v2652;
                if (v3769) {
                  v2652 = 524 < c$$inline_762;
                }
                var v975 = v2652;
                if (v975) {
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
      var v978;
      var v4440 = JSCompiler_inline_result$$749;
      var v4801 = !v4440;
      if (v4801) {
        var v4800 = d$$inline_686.document;
        v4440 = JAM.call(Ze, null, [d$$inline_686, v4800, b$$inline_684, c$$inline_685], JAM.policy.p4);
      }
      var v3770 = v4440;
      var v4441 = !v3770;
      if (v4441) {
        v3770 = JAM.call(Zg, null, [a$$inline_683], JAM.policy.p4);
      }
      var v2653 = v3770;
      if (v2653) {
        v978 = !1;
      } else {
        v978 = !0;
      }
      ci = v978;
      var v981 = !ci;
      if (v981) {
        a$$inline_419.google_allow_expandable_ads = !1;
        var v979 = JAM.call(J$$1, null, [], JAM.policy.p4);
        var v3771 = K$$1.DIRECT_CALL_RENDER_AD;
        var v2654 = v3771.CONTROL;
        var v3772 = K$$1.DIRECT_CALL_RENDER_AD;
        var v2655 = v3772.EXPERIMENT;
        var v980 = [v2654, v2655];
        var e$$inline_423 = JAM.call(v979.k, v979, [v980, Aa$$1, 4], JAM.policy.p4);
      }
      var v982 = ci;
      if (v982) {
        var v2656 = JAM.call(zf, null, [], JAM.policy.p4);
        v982 = !v2656;
      }
      var f$$inline_424 = v982;
      var v983 = JAM.call(gi, null, [], JAM.policy.p4);
      if (v983) {
        f$$inline_424 = !1;
      }
      if (f$$inline_424) {
        var v5062 = "<" + d$$inline_422;
        var v4996 = v5062 + ' src="';
        var v4997 = JAM.call(di, null, [], JAM.policy.p4);
        var v4802 = v4996 + v4997;
        var v4442 = v4802 + '"></';
        var v3773 = v4442 + d$$inline_422;
        var v2657 = v3773 + ">";
        JAM.call(document.write, document, [v2657], JAM.policy.p4);
      }
      var v986 = JAM.call(hi, null, [a$$inline_419], JAM.policy.p4);
      if (v986) {
        var v984 = JAM.call(Ja$$1, null, [], JAM.policy.p4);
        var g$$inline_425 = JAM.call(L$$1, null, [v984, ""], JAM.policy.p4);
        var v985 = a$$inline_419.google_ad_handling_mode;
        bg = JAM.new(V$$1, [a$$inline_419, g$$inline_425, v985, xc], JAM.policy.p4);
      }
      var v987;
      var v4443 = f$$inline_424;
      var v4803 = !v4443;
      if (v4803) {
        v4443 = void 0;
      }
      var v3774 = a$$inline_419 = v4443;
      if (v3774) {
        v3774 = JAM.call(rb$$1, null, [], JAM.policy.p4);
      }
      var v2660 = v3774;
      if (v2660) {
        var v5063 = "<" + d$$inline_422;
        var v4998 = v5063 + ' src="';
        var v4999 = JAM.call(L$$1, null, [Vh, "/pagead/render_ads.js"], JAM.policy.p4);
        var v4804 = v4998 + v4999;
        var v4444 = v4804 + '"></';
        var v3775 = v4444 + d$$inline_422;
        var v2658 = v3775 + ">";
        v987 = JAM.call(document.write, document, [v2658], JAM.policy.p4);
      } else {
        var v2659;
        var v4445 = a$$inline_419;
        var v4806 = !v4445;
        if (v4806) {
          var v5000 = K$$1.DIRECT_CALL_RENDER_AD;
          var v4805 = v5000.EXPERIMENT;
          v4445 = e$$inline_423 != v4805;
        }
        var v3777 = v4445;
        if (v3777) {
          var v5001 = "<" + d$$inline_422;
          var v4807 = v5001 + '>google_protectAndRun("ads_core.google_render_ad", google_handleError, google_render_ad);</';
          var v4446 = v4807 + d$$inline_422;
          var v3776 = v4446 + ">";
          v2659 = JAM.call(document.write, document, [v3776], JAM.policy.p4);
        } else {
          v2659 = JAM.call(ii, null, [], JAM.policy.p4);
        }
        v987 = v2659;
      }
      v987;
    }
    return;
  }
  function Uh(a$$523) {
    this.t = a$$523;
    return;
  }
  function Nh(a$$518, b$$395, c$$265, d$$161) {
    function v29() {
      var v2661 = d$$161;
      if (v2661) {
        var v3778 = a$$518.length;
        v2661 = 0 < v3778;
      }
      var v989 = v2661;
      if (v989) {
        JAM.call(d$$161, null, [], JAM.policy.p4);
      }
      var a$$inline_396 = a$$518;
      var b$$inline_397 = 0;
      var v2662 = a$$inline_396.length;
      var v990 = b$$inline_397 < v2662;
      for (;v990;) {
        JAM.call(a$$inline_396[b$$inline_397], a$$inline_396, [], JAM.policy.p4);
        b$$inline_397 = b$$inline_397 + 1;
        var v2663 = a$$inline_396.length;
        v990 = b$$inline_397 < v2663;
      }
      a$$inline_396.length = 0;
      return;
    }
    JAM.call(a$$518.push, a$$518, [b$$395], JAM.policy.p4);
    if (c$$265) {
      JAM.call(window.setTimeout, window, [v29, c$$265], JAM.policy.p4);
    }
    return;
  }
  function Mh(a$$515) {
    var v991;
    var v2664 = a$$515.google_sensors;
    if (v2664) {
      a$$515 = a$$515.google_sensors;
      v991 = JAM.new($$$1, [a$$515], JAM.policy.p4);
    } else {
      v991 = null;
    }
    return v991;
  }
  function $$$1(a$$514) {
    this.j = a$$514;
    return;
  }
  function zh(a$$511, b$$391) {
    ze = ze | 2;
    var v2665 = a$$511.length;
    var v992 = b$$391 % v2665;
    return a$$511[v992];
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
    JAM.call(x$$50, null, [vh, v30], JAM.policy.p4);
    JAM.call(x$$50, null, [wh, v31], JAM.policy.p4);
    JAM.call(x$$50, null, [xh, v32], JAM.policy.p4);
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
    var v4447 = a$$503 && b$$382;
    if (v4447) {
      v4447 = c$$254;
    }
    var v3779 = v4447;
    if (v3779) {
      v3779 = d$$155;
    }
    var v2666 = v3779;
    var v993 = !v2666;
    if (v993) {
      return null;
    }
    var v994 = d$$155.document;
    b$$382 = JAM.call(v994.getElementById, v994, [b$$382], JAM.policy.p4);
    var v995 = !b$$382;
    if (v995) {
      return null;
    }
    var v2667 = a$$503.google_reactive_ad_format;
    var v996 = Ug[v2667];
    var v2668 = !v996;
    if (v2668) {
      v996 = null;
    }
    var e$$91 = v996;
    switch(e$$91) {
      case 1:
        var JSCompiler_inline_result$$28;
        var a$$inline_382 = a$$503;
        var b$$inline_383 = b$$382;
        var c$$inline_384 = c$$254;
        var d$$inline_385 = d$$155;
        JSCompiler_inline_label_Ig_642: {
          var v997 = a$$inline_382.google_reactive_ad_format;
          switch(v997) {
            case 1:
              a$$inline_382 = "bottom";
              break JSCompiler_inline_label_Ig_642;
          }
          a$$inline_382 = null;
        }
        b$$inline_383 = JAM.new(X$$1, [b$$inline_383, c$$inline_384, d$$inline_385, a$$inline_382], JAM.policy.p4);
        JSCompiler_inline_result$$28 = JAM.new(jh, [d$$inline_385, b$$inline_383], JAM.policy.p4);
        return JSCompiler_inline_result$$28;
      case 2:
        var JSCompiler_inline_result$$30;
        var a$$inline_387 = a$$503;
        var c$$inline_389 = c$$254;
        var d$$inline_390 = d$$155;
        a$$inline_387 = JAM.new(Y$$1, [b$$382, c$$inline_389, d$$inline_390], JAM.policy.p4);
        JSCompiler_inline_result$$30 = JAM.new(Z$$1, [d$$inline_390, c$$inline_389, a$$inline_387], JAM.policy.p4);
        return JSCompiler_inline_result$$30;
    }
    return null;
  }
  function Z$$1(a$$494, b$$378, c$$252) {
    JAM.call(ih.call, ih, [this, a$$494], JAM.policy.p4);
    this.s = b$$378;
    this.Zb = c$$252;
    this.G = {};
    this.Z = this.H = !1;
    return;
  }
  function kh(a$$483) {
    var b$$370 = JAM.call(Re, null, [a$$483], JAM.policy.p4);
    var v998 = b$$370[5];
    var v2669 = !v998;
    if (v2669) {
      v998 = "";
    }
    a$$483 = v998;
    b$$370 = b$$370[6];
    var v2670;
    if (b$$370) {
      v2670 = "?" + b$$370;
    } else {
      v2670 = "";
    }
    var v999 = v2670;
    return a$$483 + v999;
  }
  function Y$$1(a$$482, b$$369, c$$247) {
    JAM.call(hh.call, hh, [this, a$$482, b$$369, c$$247], JAM.policy.p4);
    var v1000 = c$$247.location;
    this.Wc = v1000.hostname;
    var v2671 = c$$247.location;
    var v1001 = v2671.href;
    var v5172 = JAM.call(kh, null, [v1001], JAM.policy.p4);
    this.Xc = v5172;
    this.ea = [];
    this.ob = this.kd = !1;
    var v1002 = !1;
    JAM.call(this.N, this, [v1002], JAM.policy.p4);
    JAM.call(this.Cc, this, [], JAM.policy.p4);
    return;
  }
  function jh(a$$480, b$$368) {
    JAM.call(ih.call, ih, [this, a$$480], JAM.policy.p4);
    this.Kb = b$$368;
    this.H = this.Cb = !1;
    return;
  }
  function ih(a$$477) {
    this.i = a$$477;
    this.cc = {};
    JAM.call(this.Wb, this, [], JAM.policy.p4);
    return;
  }
  function X$$1(a$$465, b$$360, c$$242, d$$152) {
    JAM.call(hh.call, hh, [this, a$$465, b$$360, c$$242], JAM.policy.p4);
    this.I = this.Ib = this.Da = !1;
    this.w = null;
    var v2672 = c$$242.document;
    var v1003 = v2672.body;
    var v5173 = JAM.call(Qd, null, [v1003, "padding"], JAM.policy.p4);
    this.Vc = v5173;
    this.B = 0;
    this.Ra = !1;
    this.ga = !0;
    var JSCompiler_inline_result$$49;
    JSCompiler_inline_label_Kd_378: {
      var a$$inline_371 = Ld;
      var b$$inline_372 = this.s;
      var v2673 = JAM.call(R$$1, null, [b$$inline_372, "display"], JAM.policy.p4);
      var v1004 = "none" != v2673;
      if (v1004) {
        JSCompiler_inline_result$$49 = JAM.call(a$$inline_371, null, [b$$inline_372], JAM.policy.p4);
        break JSCompiler_inline_label_Kd_378;
      }
      var c$$inline_373 = b$$inline_372.style;
      var d$$inline_374 = c$$inline_373.display;
      var e$$inline_375 = c$$inline_373.visibility;
      var f$$inline_376 = c$$inline_373.position;
      c$$inline_373.visibility = "hidden";
      c$$inline_373.position = "absolute";
      c$$inline_373.display = "inline";
      var g$$inline_377 = JAM.call(a$$inline_371, null, [b$$inline_372], JAM.policy.p4);
      c$$inline_373.display = d$$inline_374;
      c$$inline_373.position = f$$inline_376;
      c$$inline_373.visibility = e$$inline_375;
      JSCompiler_inline_result$$49 = g$$inline_377;
    }
    this.gd = JSCompiler_inline_result$$49;
    this.ua = d$$152;
    JAM.call(this.hide, this, [], JAM.policy.p4);
    var v1005 = this.i;
    var v1006 = this.ec;
    var v5174 = JAM.call(lb$$1, null, [v1005, "orientationchange", this, v1006], JAM.policy.p4);
    this.Zc = v5174;
    var v1007 = this.i;
    var v1008 = this.tc;
    var v5175 = JAM.call(lb$$1, null, [v1007, "resize", this, v1008], JAM.policy.p4);
    this.$c = v5175;
    var v1009 = this.i;
    var v1010 = this.vc;
    var v5176 = JAM.call(lb$$1, null, [v1009, "scroll", this, v1010], JAM.policy.p4);
    this.ad = v5176;
    var v1011 = this.i;
    var v1012 = this.Kc;
    var v5177 = JAM.call(lb$$1, null, [v1011, "touchcancel", this, v1012], JAM.policy.p4);
    this.bd = v5177;
    var v1013 = this.i;
    var v1014 = this.Lc;
    var v5178 = JAM.call(lb$$1, null, [v1013, "touchend", this, v1014], JAM.policy.p4);
    this.cd = v5178;
    var v1015 = this.i;
    var v1016 = this.Mc;
    var v5179 = JAM.call(lb$$1, null, [v1015, "touchmove", this, v1016], JAM.policy.p4);
    this.dd = v5179;
    var v1017 = this.i;
    var v1018 = this.Nc;
    var v5180 = JAM.call(lb$$1, null, [v1017, "touchstart", this, v1018], JAM.policy.p4);
    this.ed = v5180;
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
    var v1019;
    if (c$$240) {
      v1019 = c$$240;
    } else {
      v1019 = null;
    }
    this.onEndCallback = v1019;
    var v3780 = JAM.call(Md, null, [a$$461], JAM.policy.p4);
    var v2674 = JAM.call(Number, null, [v3780], JAM.policy.p4);
    var v1020 = [v2674];
    var v1021 = [0];
    JAM.call(W$$1.call, W$$1, [this, v1020, v1021, b$$358], JAM.policy.p4);
    return;
  }
  function fh(a$$460, b$$357) {
    this.W = a$$460;
    var v3781 = JAM.call(Md, null, [a$$460], JAM.policy.p4);
    var v2675 = JAM.call(Number, null, [v3781], JAM.policy.p4);
    var v1022 = [v2675];
    var v1023 = [1];
    JAM.call(W$$1.call, W$$1, [this, v1022, v1023, b$$357], JAM.policy.p4);
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
    var v2676 = this.ub;
    var v1024 = JAM.call(r$$2, null, [v2676, this], JAM.policy.p4);
    var v5181 = JAM.call(ye, null, ["rach::hdlr", v1024], JAM.policy.p4);
    this.K = v5181;
    var v1025 = this.K;
    JAM.call(y$$31, null, [a$$454, "message", v1025], JAM.policy.p4);
    return;
  }
  function $g(a$$453, b$$352, c$$236) {
    var d$$150 = JAM.call(rg, null, [b$$352], JAM.policy.p4);
    var v2677 = a$$453.google_reactive_ad_format;
    var v1026 = Ug[v2677];
    var v2678 = !v1026;
    if (v2678) {
      v1026 = null;
    }
    var e$$88 = v1026;
    var JSCompiler_inline_result$$55;
    JSCompiler_inline_label_Wg_370: {
      var a$$inline_367 = b$$352;
      var b$$inline_368 = a$$453;
      switch(c$$236) {
        case 1:
          JSCompiler_inline_result$$55 = JAM.call(Hg, null, [a$$inline_367], JAM.policy.p4);
          break JSCompiler_inline_label_Wg_370;
        case 2:
          JSCompiler_inline_result$$55 = JAM.call(Rg, null, [a$$inline_367, b$$inline_368], JAM.policy.p4);
          break JSCompiler_inline_label_Wg_370;
      }
      JSCompiler_inline_result$$55 = !1;
    }
    var v2679 = JSCompiler_inline_result$$55;
    if (v2679) {
      v2679 = e$$88 != c$$236;
    }
    var v1027 = v2679;
    if (v1027) {
      var v3782 = d$$150.wasReactiveAdCreated;
      var v2680 = v3782[c$$236];
      v1027 = !v2680;
    }
    return v1027;
  }
  function ch(a$$452, b$$351) {
    function v33(c$$235) {
      var v1028 = JAM.call($g, null, [a$$452, b$$351, c$$235], JAM.policy.p4);
      if (v1028) {
        e$$87 = !0;
      }
      return;
    }
    var c$$234 = JAM.call(rg, null, [b$$351], JAM.policy.p4);
    var d$$149 = !0;
    var v2681 = c$$234.wasReactiveAdConfigHandlerRegistered;
    var v3783 = !v2681;
    if (v3783) {
      v2681 = !d$$149;
    }
    var v1029 = v2681;
    if (v1029) {
      return!1;
    }
    var e$$87 = !1;
    JAM.call(x$$50, null, [kg, v33], JAM.policy.p4);
    return c$$234.wasReactiveAdConfigHandlerRegistered = e$$87;
  }
  function ah(a$$450, b$$349) {
    function v34(d$$147) {
      var v1030 = JAM.call($g, null, [a$$450, b$$349, d$$147], JAM.policy.p4);
      if (v1030) {
        c$$232 = c$$232 | d$$147;
      }
      return;
    }
    var c$$232 = 0;
    JAM.call(x$$50, null, [kg, v34], JAM.policy.p4);
    var v1031;
    if (c$$232) {
      v1031 = "" + c$$232;
    } else {
      v1031 = null;
    }
    return v1031;
  }
  function Zg(a$$449) {
    a$$449 = a$$449.google_reactive_ad_format;
    var v1032;
    var v2682 = JAM.call(Ec, null, [lg, a$$449], JAM.policy.p4);
    if (v2682) {
      v1032 = "" + a$$449;
    } else {
      v1032 = null;
    }
    return v1032;
  }
  function Yg(a$$448) {
    switch(a$$448) {
      case 1:
        return JAM.new(Mg, [], JAM.policy.p4);
      case 2:
        return JAM.new(Qg, [], JAM.policy.p4);
    }
    return null;
  }
  function Rg(a$$443, b$$345) {
    var c$$228 = !1;
    try {
      var v5002 = a$$443.top;
      var v4808 = v5002 == a$$443;
      if (v4808) {
        var v5064 = a$$443.postMessage;
        var v5003 = !v5064;
        v4808 = !v5003;
      }
      var v4448 = v4808;
      if (v4448) {
        v4448 = JAM.call(og, null, [a$$443], JAM.policy.p4);
      }
      var v3784 = v4448;
      if (v3784) {
        v3784 = JAM.call(ng, null, [a$$443], JAM.policy.p4);
      }
      var v2683 = v3784;
      if (v2683) {
        var v3785 = JAM.call(Bc, null, [b$$345], JAM.policy.p4);
        v2683 = !v3785;
      }
      var v1033 = v2683;
      if (v1033) {
        v1033 = !Ha$$1;
      }
      c$$228 = v1033;
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
      var v2684 = a$$429.top;
      var v1036 = JSCompiler_temp$$40 = v2684 == a$$429;
      if (v1036) {
        var JSCompiler_inline_result$$41;
        var v1034 = a$$429.navigator;
        var a$$inline_346 = v1034.userAgent;
        var v4449 = JAM.call(/(Android|iPhone OS|Windows Phone)/.test, /(Android|iPhone OS|Windows Phone)/, [a$$inline_346], JAM.policy.p4);
        var v3786 = !v4449;
        var v4450 = !v3786;
        if (v4450) {
          v3786 = JAM.call(/Android 2/.test, /Android 2/, [a$$inline_346], JAM.policy.p4);
        }
        var v2685 = v3786;
        var v3787 = !v2685;
        if (v3787) {
          v2685 = JAM.call(/iPhone OS [34]_/.test, /iPhone OS [34]_/, [a$$inline_346], JAM.policy.p4);
        }
        var v1035 = v2685;
        var v2686 = !v1035;
        if (v2686) {
          v1035 = JAM.call(/Windows Phone (?:OS )?[67]/.test, /Windows Phone (?:OS )?[67]/, [a$$inline_346], JAM.policy.p4);
        }
        JSCompiler_inline_result$$41 = v1035;
        JSCompiler_temp$$40 = !JSCompiler_inline_result$$41;
      }
      var v4451 = JSCompiler_temp$$40;
      if (v4451) {
        var v5004 = a$$429.postMessage;
        var v4809 = !v5004;
        v4451 = !v4809;
      }
      var v3788 = v4451;
      if (v3788) {
        var v4452 = a$$429.innerHeight;
        var v4453 = a$$429.innerWidth;
        v3788 = v4452 >= v4453;
      }
      var v2687 = v3788;
      if (v2687) {
        v2687 = JAM.call(ng, null, [a$$429], JAM.policy.p4);
      }
      var v1037 = v2687;
      if (v1037) {
        v1037 = JAM.call(og, null, [a$$429], JAM.policy.p4);
      }
      b$$336 = v1037;
    } catch (c$$223) {
    }
    return b$$336;
  }
  function Fg(a$$428, b$$335, c$$222) {
    var d$$142 = a$$428.attributes;
    var e$$84 = d$$142.length;
    var f$$51 = 0;
    var v1041 = f$$51 < e$$84;
    for (;v1041;) {
      var g$$30 = d$$142[f$$51];
      var v2688 = g$$30.nodeName;
      var v1040 = JAM.call(/data-/.test, /data-/, [v2688], JAM.policy.p4);
      if (v1040) {
        var v2689 = g$$30.nodeName;
        var v1038 = JAM.call(v2689.replace, v2689, ["data", "google"], JAM.policy.p4);
        var h$$22 = JAM.call(v1038.replace, v1038, [/-/g, "_"], JAM.policy.p4);
        var v1039 = JAM.call(b$$335.hasOwnProperty, b$$335, [h$$22], JAM.policy.p4);
        var v2690 = !v1039;
        if (v2690) {
          JAM.set(b$$335, h$$22, g$$30.nodeValue, JAM.policy.p2);
        }
      }
      f$$51 = f$$51 + 1;
      v1041 = f$$51 < e$$84;
    }
    var JSCompiler_inline_result$$59;
    var a$$inline_332 = b$$335.google_ad_format;
    var v1042 = "auto" == a$$inline_332;
    var v2691 = !v1042;
    if (v2691) {
      v1042 = JAM.call(/^((^|,)(horizontal|vertical|rectangle))+$/.test, /^((^|,)(horizontal|vertical|rectangle))+$/, [a$$inline_332], JAM.policy.p4);
    }
    JSCompiler_inline_result$$59 = v1042;
    if (JSCompiler_inline_result$$59) {
      var JSCompiler_inline_result$$77;
      var a$$inline_334 = a$$428;
      var b$$inline_335 = b$$335;
      var c$$inline_336 = c$$222;
      var d$$inline_337 = a$$inline_334.offsetWidth;
      var e$$inline_338 = b$$inline_335.google_ad_format;
      c$$inline_336 = JAM.call(yg, null, [d$$inline_337, e$$inline_338, c$$inline_336], JAM.policy.p4);
      var v1044 = !c$$inline_336;
      if (v1044) {
        var v3789 = "Cannot find a responsive size for a container of width=" + d$$inline_337;
        var v2692 = v3789 + "px and data-ad-format=";
        var v1043 = v2692 + e$$inline_338;
        throw JAM.call(Error, null, [v1043], JAM.policy.p4);
      }
      b$$inline_335.google_ad_height = c$$inline_336.height;
      var v1045 = b$$inline_335;
      var v2693;
      var v4454 = 300 < d$$inline_337;
      if (v4454) {
        var v4810 = c$$inline_336.height;
        v4454 = 300 < v4810;
      }
      var v3791 = v4454;
      if (v3791) {
        v2693 = c$$inline_336.width;
      } else {
        var v3790;
        var v4455 = 1200 < d$$inline_337;
        if (v4455) {
          v3790 = 1200;
        } else {
          v3790 = JAM.call(Math.round, Math, [d$$inline_337], JAM.policy.p4);
        }
        v2693 = v3790;
      }
      v1045.google_ad_width = v2693;
      var v1046 = a$$inline_334.style;
      var v2694 = b$$inline_335.google_ad_height;
      v1046.height = v2694 + "px";
      delete b$$inline_335.google_ad_format;
      JSCompiler_inline_result$$77 = void 0;
      JSCompiler_inline_result$$77;
      b$$335.google_loader_features_used = 128;
    } else {
      var JSCompiler_inline_result$$54;
      var a$$inline_340 = a$$428;
      var v4456 = a$$inline_340.style;
      var v3792 = v4456.width;
      var v2695 = JAM.call(sg.test, sg, [v3792], JAM.policy.p4);
      var v1047 = !v2695;
      var v2697 = !v1047;
      if (v2697) {
        var v4457 = a$$inline_340.style;
        var v3793 = v4457.height;
        var v2696 = JAM.call(sg.test, sg, [v3793], JAM.policy.p4);
        v1047 = !v2696;
      }
      JSCompiler_inline_result$$54 = v1047;
      if (JSCompiler_inline_result$$54) {
        var a$$inline_342 = a$$428;
        var b$$inline_343 = b$$335;
        var c$$inline_344 = c$$222;
        var v1048;
        var v2698 = c$$inline_344.getComputedStyle;
        if (v2698) {
          v1048 = JAM.call(c$$inline_344.getComputedStyle, c$$inline_344, [a$$inline_342, null], JAM.policy.p4);
        } else {
          v1048 = a$$inline_342.currentStyle;
        }
        c$$inline_344 = v1048;
        var v1049 = a$$inline_342.style;
        v1049.width = c$$inline_344.width;
        var v1050 = a$$inline_342.style;
        v1050.height = c$$inline_344.height;
        JAM.call(wg, null, [c$$inline_344, b$$inline_343], JAM.policy.p4);
      } else {
        var v1051 = a$$428.style;
        JAM.call(wg, null, [v1051, b$$335], JAM.policy.p4);
      }
    }
    return;
  }
  function Dg(a$$427, b$$334, c$$221) {
    function v35() {
      JAM.call(Kf, null, [c$$221, b$$334, a$$427], JAM.policy.p4);
      return;
    }
    var v2699 = a$$427.style;
    if (v2699) {
      var v4458 = a$$427.style;
      var v3794 = v4458.display;
      v2699 = "none" == v3794;
    }
    var v1052 = v2699;
    if (v1052) {
      b$$334.google_dn = 1;
    }
    JAM.call(wb, null, [c$$221], JAM.policy.p4);
    JAM.call(Fg, null, [a$$427, b$$334, c$$221], JAM.policy.p4);
    var d$$141 = Bg;
    var e$$83 = 0;
    var v2700 = d$$141.length;
    var v1054 = e$$83 < v2700;
    for (;v1054;) {
      var v1053 = d$$141[e$$83];
      var v3795 = d$$141[e$$83];
      var v2701 = b$$334[v3795];
      var v3797 = !v2701;
      if (v3797) {
        var v3796 = d$$141[e$$83];
        v2701 = c$$221[v3796];
      }
      JAM.set(b$$334, v1053, v2701, JAM.policy.p2);
      e$$83 = e$$83 + 1;
      var v2702 = d$$141.length;
      v1054 = e$$83 < v2702;
    }
    b$$334.google_loader_used = "aa";
    var v2703 = d$$141 = b$$334.google_ad_output;
    if (v2703) {
      v2703 = "html" != d$$141;
    }
    var v1056 = v2703;
    if (v1056) {
      var v1055 = "No support for google_ad_output=" + d$$141;
      throw JAM.call(Error, null, [v1055], JAM.policy.p4);
    }
    JAM.call(te, null, ["aa::main", ve, v35], JAM.policy.p4);
    return;
  }
  function Cg(a$$426) {
    JAM.call(a$$426.setAttribute, a$$426, ["data-adsbygoogle-status", "done"], JAM.policy.p4);
    return;
  }
  function Ag(a$$424) {
    a$$424 = a$$424.document;
    var v2704 = a$$424.documentElement;
    var v1057 = v2704.clientWidth;
    var v2706 = !v1057;
    if (v2706) {
      var v2705 = a$$424.body;
      v1057 = v2705.clientWidth;
    }
    return v1057;
  }
  function yg(a$$422, b$$331, c$$219) {
    function v36(a$$423, b$$332) {
      var v2707 = a$$423.width;
      var v2708 = b$$332.width;
      var v1058 = v2707 - v2708;
      var v2711 = !v1058;
      if (v2711) {
        var v2709 = a$$423.height;
        var v2710 = b$$332.height;
        v1058 = v2709 - v2710;
      }
      return v1058;
    }
    var d$$140 = tg;
    JAM.call(d$$140.sort, d$$140, [v36], JAM.policy.p4);
    var v1059 = "auto" == b$$331;
    if (v1059) {
      var v3798 = a$$422;
      var v3799 = JAM.call(Ag, null, [c$$219], JAM.policy.p4);
      b$$331 = v3798 / v3799;
      var v3800;
      var v4459 = .25 > b$$331;
      if (v4459) {
        v3800 = "vertical";
      } else {
        v3800 = "horizontal,rectangle";
      }
      b$$331 = v3800;
    }
    c$$219 = d$$140.length;
    var v1061 = c$$219;
    c$$219 = c$$219 - 1;
    for (;v1061;) {
      var v4460 = d$$140[c$$219];
      var v3801 = v4460.width;
      var v2712 = v3801 <= a$$422;
      if (v2712) {
        var v4811 = d$$140[c$$219];
        var v4461 = v4811.format;
        var v3802 = JAM.call(b$$331.indexOf, b$$331, [v4461], JAM.policy.p4);
        v2712 = -1 != v3802;
      }
      var v1060 = v2712;
      if (v1060) {
        return d$$140[c$$219];
      }
      v1061 = c$$219;
      c$$219 = c$$219 - 1;
    }
    return null;
  }
  function wg(a$$420, b$$329) {
    var c$$217 = ["width", "height"];
    var d$$138 = 0;
    var v2713 = c$$217.length;
    var v1065 = d$$138 < v2713;
    for (;v1065;) {
      var v1062 = c$$217[d$$138];
      var e$$81 = "google_ad_" + v1062;
      var v2714 = JAM.call(b$$329.hasOwnProperty, b$$329, [e$$81], JAM.policy.p4);
      var v1064 = !v2714;
      if (v1064) {
        var v2715 = c$$217[d$$138];
        var v1063 = a$$420[v2715];
        var f$$50 = JAM.call(sg.exec, sg, [v1063], JAM.policy.p4);
        if (f$$50) {
          var v2716 = b$$329;
          var v2717 = e$$81;
          var v3803 = f$$50[1];
          var v5182 = JAM.call(Math.round, Math, [v3803], JAM.policy.p4);
          JAM.set(v2716, v2717, v5182, JAM.policy.p2);
        }
      }
      d$$138 = d$$138 + 1;
      var v2718 = c$$217.length;
      v1065 = d$$138 < v2718;
    }
    return;
  }
  function rg(a$$415) {
    var v1066 = a$$415.google_reactive_ads_global_state;
    var v2720 = !v1066;
    if (v2720) {
      var v2719 = a$$415;
      var v5183 = JAM.new(pg, [], JAM.policy.p4);
      v2719.google_reactive_ads_global_state = v5183;
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
    var v2721 = a$$414.document;
    var v1067 = v2721.documentElement;
    var b$$327 = v1067.clientWidth;
    a$$414 = a$$414.innerWidth;
    var v3804 = b$$327 / a$$414;
    var v2722 = v3804 - 1;
    var v1068 = JAM.call(Math.abs, Math, [v2722], JAM.policy.p4);
    return.05 > v1068;
  }
  function ng(a$$413) {
    var v2723 = a$$413.document;
    var v1069 = v2723.documentElement;
    a$$413 = v1069.clientWidth;
    var v1070 = 320 <= a$$413;
    if (v1070) {
      v1070 = 420 >= a$$413;
    }
    return v1070;
  }
  function hg(a$$405) {
    this.qa = a$$405;
    return;
  }
  function gg(a$$404) {
    a$$404 = JAM.call(String, null, [a$$404], JAM.policy.p4);
    var v1072 = JAM.call(fg, null, [a$$404], JAM.policy.p4);
    if (v1072) {
      try {
        var v2724 = "(" + a$$404;
        var v1071 = v2724 + ")";
        if (JAM.isEval(eval)) {
          return eval("introspect(JAM.policy.pFull) { " + v1071 + " }");
        } else {
          return JAM.call(eval, null, [v1071]);
        }
      } catch (b$$319) {
      }
    }
    var v1073 = "Invalid JSON string: " + a$$404;
    throw JAM.call(Error, null, [v1073], JAM.policy.p4);
  }
  function fg(a$$403) {
    var v1074 = JAM.call(/^\s*$/.test, /^\s*$/, [a$$403], JAM.policy.p4);
    if (v1074) {
      return!1;
    }
    var b$$318 = /\\["\\\/bfnrtu]/g;
    var c$$213 = /"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var d$$135 = /(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g;
    var e$$77 = /^[\],:{}\s\u2028\u2029]*$/;
    var v3805 = JAM.call(a$$403.replace, a$$403, [b$$318, "@"], JAM.policy.p4);
    var v2725 = JAM.call(v3805.replace, v3805, [c$$213, "]"], JAM.policy.p4);
    var v1075 = JAM.call(v2725.replace, v2725, [d$$135, ""], JAM.policy.p4);
    return JAM.call(e$$77.test, e$$77, [v1075], JAM.policy.p4);
  }
  function eg(a$$401, b$$315) {
    try {
      var v1076 = void 0;
      var v2726 = a$$401.frames;
      var v1077 = v2726[b$$315];
      return v1076 != v1077;
    } catch (c$$211) {
      return!1;
    }
    return;
  }
  function Xf(a$$388) {
    JAM.set(Wf, a$$388, !0, JAM.policy.p2);
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
    var v3806 = V$$1.prototype;
    var v2727 = v3806.Qa;
    var v1078 = JAM.call(r$$2, null, [v2727, this], JAM.policy.p4);
    var v5184 = JAM.call(ye, null, ["zrt_mh::handler", v1078, d$$130], JAM.policy.p4);
    this.K = v5184;
    var v1079 = this.K;
    JAM.call(y$$31, null, [a$$387, "message", v1079], JAM.policy.p4);
    return;
  }
  function Jf(a$$378, b$$299, c$$197, d$$125, e$$75) {
    var f$$48 = "script";
    var g$$29 = b$$299.google_ad_width;
    var h$$21 = b$$299.google_ad_height;
    var k$$9 = {};
    var v1080 = !0;
    JAM.call(Ff, null, [k$$9, g$$29, h$$21, v1080], JAM.policy.p4);
    var v1081 = '"' + Ne;
    JAM.set(k$$9, "onload", v1081 + '"');
    e$$75 = JAM.call(e$$75, null, [a$$378, k$$9, b$$299], JAM.policy.p4);
    JSCompiler_inline_label_Lf_304: {
      var v2728 = window.google_override_format;
      var v3808 = !v2728;
      if (v3808) {
        var v5065 = window.google_ad_width;
        var v5005 = v5065 + "x";
        var v5006 = window.google_ad_height;
        var v4812 = v5005 + v5006;
        var v4462 = wf[v4812];
        var v3807 = !v4462;
        if (v3807) {
          var v4463 = window.google_loader_used;
          v3807 = "aa" == v4463;
        }
        v2728 = v3807;
      }
      var v1083 = v2728;
      if (v1083) {
        var a$$inline_303 = Uf;
        var v2729 = a$$inline_303.CONTROL;
        var v2730 = a$$inline_303.EXPERIMENT;
        var v1082 = [v2729, v2730];
        k$$9 = JAM.call(vb, null, [v1082, Ba$$1], JAM.policy.p4);
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
    var v2731 = d$$inline_626;
    var v3810 = !v2731;
    if (v3810) {
      var v3809 = "html" != c$$inline_625;
      if (v3809) {
        v3809 = null != c$$inline_625;
      }
      v2731 = v3809;
    }
    var v1084 = v2731;
    var v2732 = !v1084;
    if (v2732) {
      var v4464 = a$$inline_623.google_ad_width;
      var v3811 = v4464 + "x";
      var v3812 = a$$inline_623.google_ad_height;
      d$$inline_626 = v3811 + v3812;
      var v3813 = "e" == k$$9;
      if (v3813) {
        d$$inline_626 = d$$inline_626 + "_as";
      }
    }
    var v3814 = a$$inline_623.google_ad_slot;
    var v2733 = !v3814;
    var v3815 = !v2733;
    if (v3815) {
      v2733 = a$$inline_623.google_override_format;
    }
    var v1085 = v2733;
    var v2735 = !v1085;
    if (v2735) {
      var v5007 = a$$inline_623.google_ad_width;
      var v4813 = v5007 + "x";
      var v4814 = a$$inline_623.google_ad_height;
      var v4465 = v4813 + v4814;
      var v3816 = wf[v4465];
      var v2734 = !v3816;
      if (v2734) {
        var v3817 = a$$inline_623.google_loader_used;
        v2734 = "aa" == v3817;
      }
      v1085 = v2734;
    }
    c$$inline_625 = v1085;
    var v1086;
    var v2736 = d$$inline_626 && c$$inline_625;
    if (v2736) {
      v1086 = JAM.call(d$$inline_626.toLowerCase, d$$inline_626, [], JAM.policy.p4);
    } else {
      v1086 = "";
    }
    d$$inline_626 = v1086;
    a$$inline_623.google_ad_format = d$$inline_626;
    var JSCompiler_temp_const$$564 = c$$inline_307;
    var JSCompiler_inline_result$$565;
    var a$$inline_628 = a$$inline_305;
    var v1087;
    if (b$$inline_306) {
      v1087 = a$$inline_628.parentElement;
    } else {
      v1087 = a$$inline_628;
    }
    a$$inline_628 = v1087;
    var v1088 = !0;
    JSCompiler_inline_result$$565 = JAM.call(Fb, null, [a$$inline_628, c$$inline_307, v1088], JAM.policy.p4);
    JSCompiler_temp_const$$564.google_ad_unit_key = JSCompiler_inline_result$$565;
    var v1089 = window;
    var v3818 = window.google_adk2_experiment;
    var v4467 = !v3818;
    if (v4467) {
      var v4466 = ["C", "E"];
      v3818 = JAM.call(vb, null, [v4466, xa$$1], JAM.policy.p4);
    }
    var v2737 = v3818;
    var v3819 = !v2737;
    if (v3819) {
      v2737 = "N";
    }
    b$$inline_306 = v1089.google_adk2_experiment = v2737;
    var v1090;
    var v2740 = "E" == b$$inline_306;
    if (v2740) {
      var v2738 = c$$inline_307;
      var v5185 = JAM.call(Fb, null, [a$$inline_305, c$$inline_307], JAM.policy.p4);
      v1090 = v2738.google_ad_unit_key_2 = v5185;
    } else {
      var v2739 = "C" == b$$inline_306;
      if (v2739) {
        v2739 = c$$inline_307.google_ad_unit_key_2 = "ctrl";
      }
      v1090 = v2739;
    }
    v1090;
    c$$197 = JAM.call(Ee, null, [b$$299], JAM.policy.p4);
    var a$$inline_310 = a$$378;
    var b$$inline_311 = JAM.call(Ke, null, [a$$inline_310], JAM.policy.p4);
    var v2741 = a$$inline_310.document;
    var v1091 = JAM.call(Xe, null, [v2741], JAM.policy.p4);
    var c$$inline_312 = 3 == v1091;
    var d$$inline_313 = Ge;
    var v3820 = b$$inline_311;
    if (v3820) {
      v3820 = !c$$inline_312;
    }
    var v2742 = v3820;
    if (v2742) {
      var v3821 = void 0;
      var v3822 = a$$inline_310.google_ad_handling_mode;
      v2742 = v3821 === v3822;
    }
    var v1092 = v2742;
    if (v1092) {
      var v2743 = a$$inline_310;
      var v4815 = d$$inline_313.CONTROL_NO_FRAME;
      var v4816 = d$$inline_313.ALWAYS_ZRT;
      var v4817 = d$$inline_313.SERIAL;
      var v4468 = [v4815, v4816, v4817];
      var v3823 = JAM.call(vb, null, [v4468, sa$$1], JAM.policy.p4);
      var v4470 = !v3823;
      if (v4470) {
        var v4818 = d$$inline_313.IFRAME_SIGNALING;
        var v4469 = [v4818];
        v3823 = JAM.call(vb, null, [v4469, ta$$1], JAM.policy.p4);
      }
      v2743.google_ad_handling_mode = v3823;
    }
    var v1093;
    var v2745 = a$$inline_310.google_ad_handling_mode;
    if (v2745) {
      var v2744 = a$$inline_310.google_ad_handling_mode;
      v1093 = JAM.call(String, null, [v2744], JAM.policy.p4);
    } else {
      v1093 = null;
    }
    d$$125 = v1093;
    JSCompiler_inline_label_If_324: {
      var a$$inline_315 = a$$378;
      var b$$inline_316 = d$$125;
      var c$$inline_317 = b$$299;
      var d$$inline_318 = g$$29;
      var e$$inline_319 = h$$21;
      var f$$inline_320 = Ge;
      var v4471 = JAM.call(Ke, null, [a$$inline_315], JAM.policy.p4);
      if (v4471) {
        var v4819 = a$$inline_315.google_unique_id;
        v4471 = 1 == v4819;
      }
      var v3824 = v4471;
      if (v3824) {
        var v4472 = f$$inline_320.CONTROL_NO_FRAME;
        v3824 = b$$inline_316 != v4472;
      }
      var v2746 = v3824;
      if (v2746) {
        var v3825 = f$$inline_320.SERIAL;
        v2746 = b$$inline_316 != v3825;
      }
      var v1100 = v2746;
      if (v1100) {
        var v1094 = a$$inline_315.google_unique_id;
        var g$$inline_321 = "zrt_ads_frame" + v1094;
        var h$$inline_322;
        var a$$inline_632 = a$$inline_315;
        var d$$inline_635 = c$$inline_317.google_page_url;
        var v2748 = !d$$inline_635;
        if (v2748) {
          var v2747;
          var v4473 = a$$inline_632.document;
          var v3828 = JAM.call(Ze, null, [a$$inline_632, v4473, d$$inline_318, e$$inline_319], JAM.policy.p4);
          if (v3828) {
            var v3826 = a$$inline_632.document;
            v2747 = v3826.referrer;
          } else {
            var v3827 = a$$inline_632.document;
            v2747 = v3827.URL;
          }
          d$$inline_635 = v2747;
        }
        h$$inline_322 = JAM.call(encodeURIComponent, null, [d$$inline_635], JAM.policy.p4);
        var k$$inline_323 = null;
        var v1097 = JAM.call(Le, null, [b$$inline_316], JAM.policy.p4);
        if (v1097) {
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
          var v1095 = b$$inline_316 + "-";
          var v4474 = h$$inline_322 + "/";
          var v4475 = c$$inline_317.google_ad_unit_key;
          var v3829 = v4474 + v4475;
          var v2749 = v3829 + "/";
          var v2750 = a$$inline_315.google_unique_id;
          var v1096 = v2749 + v2750;
          k$$inline_323 = v1095 + v1096;
        }
        a$$inline_315 = {};
        var v1098 = !1;
        JAM.call(Ff, null, [a$$inline_315, d$$inline_318, e$$inline_319, v1098], JAM.policy.p4);
        a$$inline_315.style = "display:none";
        var a$$inline_637 = k$$inline_323;
        var b$$inline_638 = g$$inline_321;
        var c$$inline_639 = a$$inline_315;
        c$$inline_639.id = b$$inline_638;
        c$$inline_639.name = b$$inline_638;
        var v1099 = c$$inline_639;
        var v5186 = JAM.call(Df, null, [a$$inline_637], JAM.policy.p4);
        v1099.src = v5186;
        b$$299 = JAM.call(Cf, null, [c$$inline_639], JAM.policy.p4);
        break JSCompiler_inline_label_If_324;
      }
      b$$299 = null;
    }
    g$$29 = vf;
    var v1101 = JAM.new(Date, [], JAM.policy.p4);
    h$$21 = JAM.call(v1101.getTime, v1101, [], JAM.policy.p4);
    var l$$11 = a$$378.google_top_experiment;
    var z$$5 = a$$378.google_async_for_oa_experiment;
    var C$$3 = a$$378.google_always_use_delayed_impressions_experiment;
    var v2751 = a$$378.google_unique_id;
    var v3830;
    if (l$$11) {
      var v4476 = 'google_top_experiment="' + l$$11;
      v3830 = v4476 + '";';
    } else {
      v3830 = "";
    }
    var v2752 = v3830;
    var v3831;
    if (d$$125) {
      var v4477 = 'google_ad_handling_mode="' + d$$125;
      v3831 = v4477 + '";';
    } else {
      v3831 = "";
    }
    var v2753 = v3831;
    var v3832;
    if (z$$5) {
      var v4478 = 'google_async_for_oa_experiment="' + z$$5;
      v3832 = v4478 + '";';
    } else {
      v3832 = "";
    }
    var v2754 = v3832;
    var v3833;
    if (C$$3) {
      var v4479 = 'google_always_use_delayed_impressions_experiment="' + C$$3;
      v3833 = v4479 + '";';
    } else {
      v3833 = "";
    }
    var v2755 = v3833;
    var v3834;
    if (k$$9) {
      var v4480 = 'google_append_as_for_format_override="' + k$$9;
      v3834 = v4480 + '";';
    } else {
      v3834 = "";
    }
    var v2756 = v3834;
    var v3835;
    var v4481 = h$$21 > g$$29;
    if (v4481) {
      v3835 = h$$21 - g$$29;
    } else {
      v3835 = 1;
    }
    var v2757 = v3835;
    var v2758 = JAM.call(xf, null, [], JAM.policy.p4);
    var v1102 = ["<!doctype html><html><body>", b$$299, "<", f$$48, ">", c$$197, "google_show_ads_impl=true;google_unique_id=", v2751, ';google_async_iframe_id="', e$$75, '";google_start_time=', g$$29, ";", v2752, v2753, v2754, v2755, v2756, "google_bpp=", v2757, ";google_async_rrc=0;</", f$$48, ">", v2758, "</body></html>"];
    k$$9 = JAM.call(v1102.join, v1102, [""], JAM.policy.p4);
    var v1103;
    var v3836 = a$$378.document;
    var v2759 = JAM.call(v3836.getElementById, v3836, [e$$75], JAM.policy.p4);
    if (v2759) {
      v1103 = rf;
    } else {
      v1103 = sf;
    }
    c$$197 = v1103;
    var v2760 = !0;
    var v1104 = JAM.call(Af, null, [a$$378, e$$75, k$$9, v2760], JAM.policy.p4);
    JAM.call(c$$197, null, [v1104], JAM.policy.p4);
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
      var v2761 = !c$$inline_614;
      var v3837 = !v2761;
      if (v3837) {
        v2761 = JAM.call(a$$inline_612.getElementById, a$$inline_612, [c$$inline_614], JAM.policy.p4);
      }
      var v1106 = v2761;
      for (;v1106;) {
        var v1105 = d$$inline_615;
        d$$inline_615 = d$$inline_615 + 1;
        c$$inline_614 = "aswift_" + v1105;
        var v2762 = !c$$inline_614;
        var v3838 = !v2762;
        if (v3838) {
          v2762 = JAM.call(a$$inline_612.getElementById, a$$inline_612, [c$$inline_614], JAM.policy.p4);
        }
        v1106 = v2762;
      }
      b$$inline_613.id = c$$inline_614;
      b$$inline_613.name = c$$inline_614;
      var v1107 = c$$inline_300.google_ad_width;
      a$$inline_298 = JAM.call(Number, null, [v1107], JAM.policy.p4);
      var v1108 = c$$inline_300.google_ad_height;
      c$$inline_300 = JAM.call(Number, null, [v1108], JAM.policy.p4);
      var JSCompiler_temp_const$$568 = d$$inline_301;
      var JSCompiler_inline_result$$569;
      var a$$inline_617 = b$$inline_299;
      var b$$inline_618 = a$$inline_298;
      var c$$inline_619 = c$$inline_300;
      var d$$inline_620 = ["<iframe"];
      var e$$inline_621;
      for (e$$inline_621 in a$$inline_617) {
        var v1109 = JAM.call(a$$inline_617.hasOwnProperty, a$$inline_617, [e$$inline_621], JAM.policy.p4);
        if (v1109) {
          var v3839 = e$$inline_621 + "=";
          var v3840 = a$$inline_617[e$$inline_621];
          var v2763 = v3839 + v3840;
          JAM.call(ib$$1, null, [d$$inline_620, v2763], JAM.policy.p4);
        }
      }
      JAM.call(d$$inline_620.push, d$$inline_620, ['style="left:0;position:absolute;top:0;"'], JAM.policy.p4);
      JAM.call(d$$inline_620.push, d$$inline_620, ["></iframe>"], JAM.policy.p4);
      d$$inline_620 = JAM.call(d$$inline_620.join, d$$inline_620, [" "], JAM.policy.p4);
      var JSCompiler_inline_result$$744;
      var v1110 = a$$inline_617.id;
      var a$$inline_750 = v1110 + "_anchor";
      var b$$inline_751 = b$$inline_618;
      var v3841 = "border:none;height:" + c$$inline_619;
      var v2764 = v3841 + "px;margin:0;padding:0;position:relative;visibility:visible;width:";
      var v1111 = v2764 + b$$inline_751;
      b$$inline_751 = v1111 + "px;background-color:transparent";
      a$$inline_750 = ['<ins style="display:inline-table;', b$$inline_751, '">', '<ins id="', a$$inline_750, '" style="display:block;', b$$inline_751, '">', d$$inline_620, "</ins></ins>"];
      JSCompiler_inline_result$$744 = JAM.call(a$$inline_750.join, a$$inline_750, [""], JAM.policy.p4);
      JSCompiler_inline_result$$569 = a$$inline_617 = JSCompiler_inline_result$$744;
      JAM.set(JSCompiler_temp_const$$568, "innerHTML", JSCompiler_inline_result$$569);
      JSCompiler_inline_result$$68 = b$$inline_299.id;
      return JSCompiler_inline_result$$68;
    }
    var v1112 = !1;
    JAM.call(Jf, null, [a$$376, b$$297, c$$196, v1112, v37], JAM.policy.p4);
    return;
  }
  function Ff(a$$372, b$$293, c$$192, d$$121, e$$73) {
    var v1113;
    if (d$$121) {
      v1113 = '"';
    } else {
      v1113 = "";
    }
    d$$121 = v1113;
    var v1114 = d$$121 + "0";
    var f$$45 = v1114 + d$$121;
    var v1115 = d$$121 + b$$293;
    a$$372.width = v1115 + d$$121;
    var v1116 = d$$121 + c$$192;
    a$$372.height = v1116 + d$$121;
    a$$372.frameborder = f$$45;
    if (e$$73) {
      var v2765 = d$$121 + e$$73;
      a$$372.src = v2765 + d$$121;
    }
    a$$372.marginwidth = f$$45;
    a$$372.marginheight = f$$45;
    a$$372.vspace = f$$45;
    a$$372.hspace = f$$45;
    var v1117 = d$$121 + "true";
    a$$372.allowtransparency = v1117 + d$$121;
    var v1118 = d$$121 + "no";
    a$$372.scrolling = v1118 + d$$121;
    return;
  }
  function Df(a$$370) {
    var v1119 = JAM.call(Ja$$1, null, [], JAM.policy.p4);
    var v3842 = JAM.call(Da$$1, null, [], JAM.policy.p4);
    var v4482;
    if (a$$370) {
      var v4820 = JAM.call(encodeURIComponent, null, [a$$370], JAM.policy.p4);
      v4482 = "#" + v4820;
    } else {
      v4482 = "";
    }
    var v3843 = v4482;
    var v2766 = ["/pagead/html/", v3842, "/r20130906/zrt_lookup.html", v3843];
    var v1120 = JAM.call(v2766.join, v2766, [""], JAM.policy.p4);
    return JAM.call(L$$1, null, [v1119, v1120], JAM.policy.p4);
  }
  function Cf(a$$368) {
    function v38(a$$369, d$$120) {
      var v1121 = null != a$$369;
      if (v1121) {
        var v4821 = " " + d$$120;
        var v4483 = v4821 + '="';
        var v3844 = v4483 + a$$369;
        var v2767 = v3844 + '"';
        JAM.call(b$$291.push, b$$291, [v2767], JAM.policy.p4);
      }
      return;
    }
    var b$$291 = ["<iframe"];
    JAM.call(x$$50, null, [a$$368, v38], JAM.policy.p4);
    JAM.call(b$$291.push, b$$291, ["></iframe>"], JAM.policy.p4);
    return JAM.call(b$$291.join, b$$291, [""], JAM.policy.p4);
  }
  function Bf(a$$366, b$$289, c$$190) {
    function v39(a$$367, b$$290) {
      var v1122 = null != a$$367;
      if (v1122) {
        JAM.call(d$$119.setAttribute, d$$119, [b$$290, a$$367], JAM.policy.p4);
      }
      return;
    }
    var d$$119 = JAM.call(a$$366.createElement, a$$366, ["iframe"], JAM.policy.p4);
    JAM.call(x$$50, null, [b$$289, v39], JAM.policy.p4);
    if (c$$190) {
      var v2768 = d$$119.style;
      v2768.display = c$$190;
    }
    return d$$119;
  }
  function Af(a$$365, b$$288, c$$189, d$$118) {
    function v40() {
      var e$$72 = !1;
      if (d$$118) {
        var v1123 = JAM.call(qf, null, [], JAM.policy.p4);
        JAM.call(v1123.al, v1123, [3E4], JAM.policy.p4);
      }
      try {
        var JSCompiler_inline_result$$60;
        var a$$inline_293 = a$$365;
        var b$$inline_294 = b$$288;
        var c$$inline_295 = c$$189;
        var v1124 = a$$inline_293.document;
        var d$$inline_296 = JAM.call(v1124.getElementById, v1124, [b$$inline_294], JAM.policy.p4);
        d$$inline_296 = d$$inline_296.contentWindow;
        var v1130 = JAM.call(Kb, null, [d$$inline_296], JAM.policy.p4);
        if (v1130) {
          var a$$inline_604 = a$$inline_293;
          var b$$inline_605 = b$$inline_294;
          var c$$inline_606 = c$$inline_295;
          var v2769 = a$$inline_604.document;
          var v1125 = JAM.call(v2769.getElementById, v2769, [b$$inline_605], JAM.policy.p4);
          a$$inline_604 = v1125.contentWindow;
          b$$inline_605 = a$$inline_604.document;
          var v2770 = b$$inline_605.body;
          if (v2770) {
            var v3845 = b$$inline_605.body;
            v2770 = v3845.firstChild;
          }
          var v1126 = v2770;
          var v2771 = !v1126;
          if (v2771) {
            JAM.call(b$$inline_605.open, b$$inline_605, [], JAM.policy.p4);
            a$$inline_604.google_async_iframe_close = !0;
            JAM.call(b$$inline_605.write, b$$inline_605, [c$$inline_606], JAM.policy.p4);
          }
        } else {
          var a$$inline_608 = a$$inline_293;
          var c$$inline_610 = c$$inline_295;
          var v2772 = a$$inline_608.document;
          var v1127 = JAM.call(v2772.getElementById, v2772, [b$$inline_294], JAM.policy.p4);
          a$$inline_608 = v1127.contentWindow;
          var v1128 = JAM.call(ab$$1, null, [c$$inline_610], JAM.policy.p4);
          c$$inline_610 = "javascript:" + v1128;
          var v1129 = a$$inline_608.location;
          JAM.call(v1129.replace, v1129, [c$$inline_610], JAM.policy.p4);
        }
        JSCompiler_inline_result$$60 = void 0;
        JSCompiler_inline_result$$60;
        e$$72 = !0;
      } catch (f$$44) {
        JAM.call(uf, null, [], JAM.policy.p4);
      }
      if (e$$72) {
        e$$72 = JAM.call(Oe, null, ["google_async_rrc", c$$189], JAM.policy.p4);
        var v3846 = JAM.new(Me, [a$$365], JAM.policy.p4);
        var v4484 = !1;
        var v3847 = JAM.call(Af, null, [a$$365, b$$288, e$$72, v4484], JAM.policy.p4);
        JAM.call(v3846.set, v3846, [b$$288, v3847], JAM.policy.p4);
      }
      return;
    }
    return v40;
  }
  function zf() {
    var v3848 = window.ExpandableAdSlotFactory;
    var v2773 = typeof v3848;
    var v1131 = "object" == v2773;
    if (v1131) {
      var v4485 = window.ExpandableAdSlotFactory;
      var v3849 = v4485.createIframe;
      var v2774 = typeof v3849;
      v1131 = "function" == v2774;
    }
    return v1131;
  }
  function xf() {
    var a$$363 = "script";
    var v3850 = JAM.call(La$$1, null, [], JAM.policy.p4);
    var v4822 = JAM.call(Da$$1, null, [], JAM.policy.p4);
    var v4486 = ["/pagead/js/", v4822, "/r20130906/show_ads_impl.js"];
    var v3851 = JAM.call(v4486.join, v4486, [""], JAM.policy.p4);
    var v2775 = JAM.call(L$$1, null, [v3850, v3851, ""], JAM.policy.p4);
    var v1132 = ["<", a$$363, ' src="', v2775, '"></', a$$363, ">"];
    return JAM.call(v1132.join, v1132, [""], JAM.policy.p4);
  }
  function uf() {
    var v1133 = JAM.call(hc, null, [], JAM.policy.p4);
    var a$$362 = v1133.google_jobrunner;
    var v1134 = JAM.call(pf, null, [a$$362], JAM.policy.p4);
    if (v1134) {
      JAM.call(a$$362.rl, a$$362, [], JAM.policy.p4);
    }
    return;
  }
  function sf(a$$360, b$$286) {
    var v1135 = JAM.call(qf, null, [], JAM.policy.p4);
    JAM.call(v1135.nqa, v1135, [a$$360, b$$286], JAM.policy.p4);
    return;
  }
  function rf(a$$359, b$$285) {
    var v1136 = JAM.call(qf, null, [], JAM.policy.p4);
    JAM.call(v1136.nq, v1136, [a$$359, b$$285], JAM.policy.p4);
    return;
  }
  function qf() {
    var v2776 = mf;
    if (v2776) {
      v2776 = JAM.call(of, null, [mf], JAM.policy.p4);
    }
    var v1137 = v2776;
    if (v1137) {
      return mf;
    }
    var a$$358 = JAM.call(hc, null, [], JAM.policy.p4);
    var b$$284 = a$$358.google_jobrunner;
    var v1138;
    var v2778 = JAM.call(pf, null, [b$$284], JAM.policy.p4);
    if (v2778) {
      v1138 = mf = b$$284;
    } else {
      var v2777 = a$$358;
      v1138 = v2777.google_jobrunner = mf = JAM.new(U$$1, [a$$358], JAM.policy.p4);
    }
    return v1138;
  }
  function pf(a$$357) {
    var v4823 = JAM.call(gb$$1, null, [a$$357], JAM.policy.p4);
    if (v4823) {
      v4823 = JAM.call(of, null, [a$$357], JAM.policy.p4);
    }
    var v4487 = v4823;
    if (v4487) {
      var v4824 = a$$357.nq;
      v4487 = JAM.call(fb$$1, null, [v4824], JAM.policy.p4);
    }
    var v3852 = v4487;
    if (v3852) {
      var v4488 = a$$357.nqa;
      v3852 = JAM.call(fb$$1, null, [v4488], JAM.policy.p4);
    }
    var v2779 = v3852;
    if (v2779) {
      var v3853 = a$$357.al;
      v2779 = JAM.call(fb$$1, null, [v3853], JAM.policy.p4);
    }
    var v1139 = v2779;
    if (v1139) {
      var v2780 = a$$357.rl;
      v1139 = JAM.call(fb$$1, null, [v2780], JAM.policy.p4);
    }
    return v1139;
  }
  function of(a$$356) {
    try {
      return JAM.call(a$$356.sz, a$$356, [], JAM.policy.p4);
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
    var b$$277 = JAM.call(af, null, [], JAM.policy.p4);
    if (b$$277) {
      var v1140 = !0;
      return{url:b$$277, isTopUrl:v1140};
    }
    var v1141 = a$$346.location;
    b$$277 = v1141.href;
    var v2781 = a$$346.top;
    var v1143 = a$$346 == v2781;
    if (v1143) {
      var v1142 = !0;
      return{url:b$$277, isTopUrl:v1142};
    }
    var c$$187 = !1;
    var d$$117 = a$$346.document;
    var v2782 = d$$117;
    if (v2782) {
      v2782 = d$$117.referrer;
    }
    var v1144 = v2782;
    if (v1144) {
      b$$277 = d$$117.referrer;
      var v4489 = a$$346.parent;
      var v4490 = a$$346.top;
      var v3854 = v4489 == v4490;
      if (v3854) {
        c$$187 = !0;
      }
    }
    var v4491 = a$$346.location;
    var v3855 = a$$346 = v4491.ancestorOrigins;
    if (v3855) {
      var v4825 = a$$346.length;
      var v4492 = v4825 - 1;
      v3855 = a$$346 = a$$346[v4492];
    }
    var v2783 = v3855;
    if (v2783) {
      var v3856 = JAM.call(b$$277.indexOf, b$$277, [a$$346], JAM.policy.p4);
      v2783 = -1 == v3856;
    }
    var v1145 = v2783;
    if (v1145) {
      c$$187 = !1;
      b$$277 = a$$346;
    }
    return{url:b$$277, isTopUrl:c$$187};
  }
  function af(a$$345) {
    var v1146 = JAM.call(D$$1, null, [], JAM.policy.p4);
    var b$$276 = v1146.google_top_values;
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
    var v1147 = JAM.call(H$$1, null, [], JAM.policy.p4);
    var a$$344 = JAM.call(v1147.m, v1147, [10], JAM.policy.p4);
    var b$$275 = K$$1.PERISCOPE_FOR_TARGETING;
    var v1148 = b$$275.EXPERIMENT_REFERER_CLEANUP;
    return a$$344 === v1148;
  }
  function Xe(a$$343) {
    var v3857 = a$$343.webkitVisibilityState;
    var v4493 = !v3857;
    if (v4493) {
      v3857 = a$$343.mozVisibilityState;
    }
    var v2784 = v3857;
    var v3858 = !v2784;
    if (v3858) {
      v2784 = a$$343.visibilityState;
    }
    var v1149 = v2784;
    var v2785 = !v1149;
    if (v2785) {
      v1149 = "";
    }
    a$$343 = v1149;
    var b$$274 = {visible:1, hidden:2, prerender:3, preview:4};
    var v1150 = b$$274[a$$343];
    var v2786 = !v1150;
    if (v2786) {
      v1150 = 0;
    }
    return v1150;
  }
  function Ve(a$$337, b$$268, c$$180) {
    var v1154 = JAM.call(n$$2, null, [b$$268], JAM.policy.p4);
    if (v1154) {
      var d$$112 = 0;
      var v2787 = b$$268.length;
      var v1152 = d$$112 < v2787;
      for (;v1152;) {
        var v2788 = b$$268[d$$112];
        var v1151 = JAM.call(String, null, [v2788], JAM.policy.p4);
        JAM.call(Ve, null, [a$$337, v1151, c$$180], JAM.policy.p4);
        d$$112 = d$$112 + 1;
        var v2789 = b$$268.length;
        v1152 = d$$112 < v2789;
      }
    } else {
      var v1153 = null != b$$268;
      if (v1153) {
        var v3859;
        var v4494 = "" === b$$268;
        if (v4494) {
          v3859 = "";
        } else {
          v3859 = "=";
        }
        var v2790 = v3859;
        var v3860 = JAM.call(String, null, [b$$268], JAM.policy.p4);
        var v2791 = JAM.call(encodeURIComponent, null, [v3860], JAM.policy.p4);
        JAM.call(c$$180.push, c$$180, ["&", a$$337, v2790, v2791], JAM.policy.p4);
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
        var v1157 = JSCompiler_temp$$560 = b$$inline_254;
        if (v1157) {
          var JSCompiler_inline_result$$561;
          var v2792 = JAM.call(Re, null, [b$$inline_254], JAM.policy.p4);
          var v1155 = v2792[3];
          var v2793 = !v1155;
          if (v2793) {
            v1155 = null;
          }
          var a$$inline_602 = v1155;
          var v1156 = a$$inline_602;
          if (v1156) {
            v1156 = JAM.call(decodeURIComponent, null, [a$$inline_602], JAM.policy.p4);
          }
          JSCompiler_inline_result$$561 = v1156;
          JSCompiler_temp$$560 = b$$inline_254 = JSCompiler_inline_result$$561;
        }
        var v2794 = JSCompiler_temp$$560;
        if (v2794) {
          var v3861 = a$$inline_253.hostname;
          v2794 = b$$inline_254 != v3861;
        }
        var v1158 = v2794;
        if (v1158) {
          Se = !0;
          throw JAM.call(Error, null, [], JAM.policy.p4);
        }
      }
    }
    return JAM.call(a$$333.match, a$$333, [Pe], JAM.policy.p4);
  }
  function Oe(a$$332, b$$265) {
    var v2795 = "\\b" + a$$332;
    var v1159 = v2795 + "=(\\d+)";
    var c$$178 = JAM.call(RegExp, null, [v1159], JAM.policy.p4);
    var d$$111 = JAM.call(c$$178.exec, c$$178, [b$$265], JAM.policy.p4);
    if (d$$111) {
      var v4826 = d$$111[1];
      var v4495 = +v4826;
      var v3862 = v4495 + 1;
      var v4496 = !v3862;
      if (v4496) {
        v3862 = 1;
      }
      d$$111 = v3862;
      var v4497 = a$$332 + "=";
      var v3863 = v4497 + d$$111;
      b$$265 = JAM.call(b$$265.replace, b$$265, [c$$178, v3863], JAM.policy.p4);
    }
    return b$$265;
  }
  function Me(a$$328) {
    this.p = a$$328;
    var v1160 = a$$328.google_iframe_oncopy;
    var v2797 = !v1160;
    if (v2797) {
      var v2796 = a$$328;
      var v4498 = this.Qc;
      var v3864 = JAM.call(r$$2, null, [v4498, this], JAM.policy.p4);
      v2796.google_iframe_oncopy = {handlers:{}, upd:v3864};
    }
    this.hd = a$$328.google_iframe_oncopy;
    return;
  }
  function Le(a$$327) {
    var b$$261 = Ge;
    var v3865 = b$$261.PARALLEL_CANCEL_ON_NO_AD;
    var v2798 = a$$327 == v3865;
    var v3867 = !v2798;
    if (v3867) {
      var v3866 = b$$261.IFRAME_SIGNALING;
      v2798 = a$$327 == v3866;
    }
    var v1161 = v2798;
    var v2800 = !v1161;
    if (v2800) {
      var v2799 = b$$261.ALWAYS_ZRT;
      v1161 = a$$327 == v2799;
    }
    return v1161;
  }
  function Ke(a$$326) {
    try {
      var v2801 = a$$326.location;
      var v1162 = v2801.host;
      var b$$260 = JAM.call(Ie.test, Ie, [v1162], JAM.policy.p4);
      var v4827 = a$$326.postMessage;
      var v4499 = !v4827;
      var v4829 = !v4499;
      if (v4829) {
        var v4828 = a$$326.localStorage;
        v4499 = !v4828;
      }
      var v3868 = v4499;
      var v4501 = !v3868;
      if (v4501) {
        var v4500 = a$$326.JSON;
        v3868 = !v4500;
      }
      var v2802 = v3868;
      var v3869 = !v2802;
      if (v3869) {
        v2802 = b$$260;
      }
      var v1163 = v2802;
      return!v1163;
    } catch (c$$176) {
      return!1;
    }
    return;
  }
  function Ee(a$$323) {
    function v41(a$$324, b$$258) {
      var v1165 = null != a$$324;
      if (v1165) {
        var f$$41;
        try {
          var v1164 = JAM.new(Be, [], JAM.policy.p4);
          f$$41 = JAM.call(v1164.serialize, v1164, [a$$324], JAM.policy.p4);
        } catch (g$$26) {
        }
        if (f$$41) {
          JAM.call(ib$$1, null, [c$$174, b$$258, "=", f$$41, ";"], JAM.policy.p4);
        }
      }
      return;
    }
    var b$$257 = "google_page_url";
    var v1166 = a$$323[b$$257];
    if (v1166) {
      var v2803 = a$$323;
      var v2804 = b$$257;
      var v3870 = a$$323[b$$257];
      var v5187 = JAM.call(String, null, [v3870], JAM.policy.p4);
      JAM.set(v2803, v2804, v5187, JAM.policy.p2);
    }
    var c$$174 = [];
    JAM.call(x$$50, null, [a$$323, v41], JAM.policy.p4);
    return JAM.call(c$$174.join, c$$174, [""], JAM.policy.p4);
  }
  function Be() {
    return;
  }
  function we(a$$312) {
    function v42(a$$313, d$$106) {
      var v2805 = 0 === a$$313;
      var v3871 = !v2805;
      if (v3871) {
        v2805 = a$$313;
      }
      var v1167 = v2805;
      if (v1167) {
        var v2806 = b$$247;
        var v4502 = "&" + d$$106;
        var v3872 = v4502 + "=";
        var v4503;
        var v5008 = typeof encodeURIComponent;
        var v4830 = "function" == v5008;
        if (v4830) {
          v4503 = JAM.call(encodeURIComponent, null, [a$$313], JAM.policy.p4);
        } else {
          v4503 = JAM.call(escape, null, [a$$313], JAM.policy.p4);
        }
        var v3873 = v4503;
        var v2807 = v3872 + v3873;
        b$$247 = v2806 + v2807;
      }
      return;
    }
    var b$$247 = "";
    JAM.call(x$$50, null, [a$$312, v42], JAM.policy.p4);
    return b$$247;
  }
  function ye(a$$310, b$$246, c$$170, d$$105) {
    function v43(e$$65) {
      e$$65 = JAM.call(ga$$1, null, [b$$246, e$$65], JAM.policy.p4);
      var f$$40 = d$$105 || ve;
      JAM.call(te, null, [a$$310, f$$40, e$$65, c$$170], JAM.policy.p4);
      return;
    }
    return v43;
  }
  function xe(a$$309, b$$245, c$$169, d$$104) {
    var v1168 = d$$104 || ve;
    return JAM.call(ga$$1, null, [te, a$$309, v1168, b$$245, c$$169], JAM.policy.p4);
  }
  function ue(a$$307) {
    function v44(a$$308, d$$103) {
      JAM.set(b$$244, d$$103, w$$6[a$$308], JAM.policy.p2);
      return;
    }
    var b$$244 = a$$307 || {};
    JAM.call(x$$50, null, [pe, v44], JAM.policy.p4);
    return b$$244;
  }
  function se(a$$306, b$$243, c$$168) {
    c$$168 = c$$168 || .01;
    var v2808 = JAM.call(Math.random, Math, [], JAM.policy.p4);
    var v1169 = v2808 < c$$168;
    if (v1169) {
      var v4831 = "/pagead/gen_204?id=" + a$$306;
      var v4832 = JAM.call(we, null, [b$$243], JAM.policy.p4);
      a$$306 = v4831 + v4832;
      var v4833 = JAM.call(ma$$1, null, ["", "googlesyndication"], JAM.policy.p4);
      a$$306 = JAM.call(L$$1, null, [v4833, a$$306], JAM.policy.p4);
      a$$306 = JAM.call(a$$306.substring, a$$306, [0, 2E3], JAM.policy.p4);
      JAM.call(nb$$1, null, [w$$6, a$$306], JAM.policy.p4);
    }
    return;
  }
  function ve(a$$305, b$$242, c$$167, d$$102, e$$64) {
    var f$$39 = v$$1;
    var v2809;
    if (Ea$$1) {
      v2809 = 1;
    } else {
      v2809 = 0;
    }
    var v1170 = v2809;
    var v2810;
    if (Fa$$1) {
      v2810 = 1;
    } else {
      v2810 = 0;
    }
    var v1171 = v2810;
    var v1172 = JAM.call(b$$242.substring, b$$242, [0, 512], JAM.policy.p4);
    var v2811 = e$$64;
    if (v2811) {
      v2811 = JAM.call(e$$64.substring, e$$64, [0, 40], JAM.policy.p4);
    }
    var v1173 = v2811;
    var v1174 = JAM.call(d$$102.toString, d$$102, [], JAM.policy.p4);
    var v2812 = f$$39.URL;
    var v1175 = JAM.call(v2812.substring, v2812, [0, 512], JAM.policy.p4);
    var v2813 = f$$39.referrer;
    var v1176 = JAM.call(v2813.substring, v2813, [0, 512], JAM.policy.p4);
    a$$305 = {jscb:v1170, jscd:v1171, context:a$$305, msg:v1172, eid:v1173, file:c$$167, line:v1174, url:v1175, ref:v1176};
    JAM.call(ue, null, [a$$305], JAM.policy.p4);
    JAM.call(se, null, ["jserror", a$$305], JAM.policy.p4);
    return!Ga$$1;
  }
  function te(a$$304, b$$241, c$$166, d$$101) {
    try {
      JAM.call(c$$166, null, [], JAM.policy.p4);
    } catch (e$$63) {
      c$$166 = !Ga$$1;
      try {
        var f$$38 = JAM.call(e$$63.toString, e$$63, [], JAM.policy.p4);
        var v2814 = e$$63.name;
        if (v2814) {
          var v4504 = e$$63.name;
          var v3874 = JAM.call(f$$38.indexOf, f$$38, [v4504], JAM.policy.p4);
          v2814 = -1 == v3874;
        }
        var v1177 = v2814;
        if (v1177) {
          var v4505 = e$$63.name;
          var v3875 = ": " + v4505;
          f$$38 = f$$38 + v3875;
        }
        var v2815 = e$$63.message;
        if (v2815) {
          var v4506 = e$$63.message;
          var v3876 = JAM.call(f$$38.indexOf, f$$38, [v4506], JAM.policy.p4);
          v2815 = -1 == v3876;
        }
        var v1178 = v2815;
        if (v1178) {
          var v4507 = e$$63.message;
          var v3877 = ": " + v4507;
          f$$38 = f$$38 + v3877;
        }
        var v1181 = e$$63.stack;
        if (v1181) {
          JSCompiler_inline_label_qe_241: {
            var a$$inline_237 = e$$63.stack;
            var b$$inline_238 = f$$38;
            try {
              var v2816 = JAM.call(a$$inline_237.indexOf, a$$inline_237, [b$$inline_238], JAM.policy.p4);
              var v1179 = -1 == v2816;
              if (v1179) {
                var v2817 = b$$inline_238 + "\n";
                a$$inline_237 = v2817 + a$$inline_237;
              }
              var c$$inline_239;
              var v1180 = a$$inline_237 != c$$inline_239;
              for (;v1180;) {
                c$$inline_239 = a$$inline_237;
                a$$inline_237 = JAM.call(a$$inline_237.replace, a$$inline_237, [/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1"], JAM.policy.p4);
                v1180 = a$$inline_237 != c$$inline_239;
              }
              f$$38 = JAM.call(a$$inline_237.replace, a$$inline_237, [/\n */g, "\n"], JAM.policy.p4);
            } catch (d$$inline_240) {
              f$$38 = b$$inline_238;
            }
          }
        }
        var g$$25 = "";
        var v1182 = e$$63.fileName;
        if (v1182) {
          g$$25 = e$$63.fileName;
        }
        var h$$18 = -1;
        var v1183 = e$$63.lineNumber;
        if (v1183) {
          h$$18 = e$$63.lineNumber;
        }
        var k$$7;
        JSCompiler_inline_label_re_244: {
          try {
            var v1184;
            if (d$$101) {
              v1184 = JAM.call(d$$101, null, [], JAM.policy.p4);
            } else {
              v1184 = "";
            }
            k$$7 = v1184;
            break JSCompiler_inline_label_re_244;
          } catch (b$$inline_243) {
          }
          k$$7 = "";
        }
        c$$166 = JAM.call(b$$241, null, [a$$304, f$$38, g$$25, h$$18, k$$7], JAM.policy.p4);
      } catch (l$$10) {
        var v4508 = JAM.call(l$$10.toString, l$$10, [], JAM.policy.p4);
        var v3878 = v4508 + "\n";
        var v4509 = l$$10.stack;
        var v4834 = !v4509;
        if (v4834) {
          v4509 = "";
        }
        var v3879 = v4509;
        var v2818 = v3878 + v3879;
        var v1185 = {context:"protectAndRun", msg:v2818};
        JAM.call(se, null, ["jserror", v1185], JAM.policy.p4);
      }
      var v1186 = !c$$166;
      if (v1186) {
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
    var a$$300 = JAM.call(D$$1, null, [], JAM.policy.p4);
    var b$$237 = a$$300.__google_ad_urls;
    var v1188 = !b$$237;
    if (v1188) {
      var v1187 = a$$300;
      var v5188 = JAM.new(S$$1, [a$$300], JAM.policy.p4);
      return v1187.__google_ad_urls = v5188;
    }
    try {
      var v1189 = JAM.call(b$$237.getOseId, b$$237, [], JAM.policy.p4);
      if (v1189) {
        return b$$237;
      }
    } catch (c$$163) {
    }
    var v1190 = a$$300;
    var v5189 = JAM.new(S$$1, [a$$300, b$$237], JAM.policy.p4);
    return v1190.__google_ad_urls = v5189;
  }
  function ke(a$$293, b$$229, c$$156, d$$93) {
    var v2819;
    if (a$$293) {
      v2819 = "https";
    } else {
      v2819 = "http";
    }
    var v1191 = v2819;
    he = JAM.call(L$$1, null, [b$$229, "/pagead/osd.js", v1191], JAM.policy.p4);
    ie = c$$156;
    je = d$$93;
    return;
  }
  function S$$1(a$$292, b$$228) {
    this.wa = a$$292;
    var v1192;
    if (b$$228) {
      v1192 = b$$228.ha;
    } else {
      v1192 = [];
    }
    this.ha = v1192;
    var v1193;
    if (b$$228) {
      v1193 = b$$228.Ua;
    } else {
      v1193 = !1;
    }
    this.Ua = v1193;
    var v1194;
    if (b$$228) {
      v1194 = b$$228.Db;
    } else {
      v1194 = "";
    }
    this.Db = v1194;
    var v1195;
    if (b$$228) {
      v1195 = b$$228.Wa;
    } else {
      v1195 = 0;
    }
    this.Wa = v1195;
    var v1196;
    if (b$$228) {
      v1196 = b$$228.Aa;
    } else {
      v1196 = "";
    }
    this.Aa = v1196;
    var v1197;
    if (b$$228) {
      v1197 = b$$228.q;
    } else {
      v1197 = [];
    }
    this.q = v1197;
    this.xa = null;
    this.Lb = !1;
    return;
  }
  function fe(a$$290, b$$227) {
    function v45() {
      var v2820 = a$$290.readyState;
      var v1198 = "complete" == v2820;
      if (v1198) {
        JAM.call(b$$227, null, [], JAM.policy.p4);
      }
      return;
    }
    var v1199 = JAM.call(rb$$1, null, [], JAM.policy.p4);
    if (v1199) {
      var c$$155 = v45;
      JAM.call(y$$31, null, [a$$290, "readystatechange", c$$155], JAM.policy.p4);
    } else {
      JAM.call(y$$31, null, [a$$290, "load", b$$227], JAM.policy.p4);
    }
    return;
  }
  function de(a$$288, b$$225) {
    var c$$153 = b$$225 || w$$6;
    var v2821 = a$$288;
    if (v2821) {
      var v3880 = c$$153.top;
      v2821 = v3880 != c$$153;
    }
    var v1200 = v2821;
    if (v1200) {
      c$$153 = c$$153.top;
    }
    try {
      var JSCompiler_temp$$0;
      var v2822 = c$$153.document;
      if (v2822) {
        var v4510 = c$$153.document;
        var v3881 = v4510.body;
        v2822 = !v3881;
      }
      var v1204 = v2822;
      if (v1204) {
        JSCompiler_temp$$0 = JAM.new(u$$2, [-1, -1], JAM.policy.p4);
      } else {
        var a$$inline_183 = c$$153 || window;
        a$$inline_183 = a$$inline_183.document;
        var v1201;
        var v3882 = a$$inline_183.compatMode;
        var v2823 = "CSS1Compat" == v3882;
        if (v2823) {
          v1201 = a$$inline_183.documentElement;
        } else {
          v1201 = a$$inline_183.body;
        }
        a$$inline_183 = v1201;
        var v1202 = a$$inline_183.clientWidth;
        var v1203 = a$$inline_183.clientHeight;
        JSCompiler_temp$$0 = JAM.new(u$$2, [v1202, v1203], JAM.policy.p4);
      }
      return JSCompiler_temp$$0;
    } catch (d$$92) {
      return JAM.new(u$$2, [-12245933, -12245933], JAM.policy.p4);
    }
    return;
  }
  function ce(a$$287, b$$224) {
    if (a$$287) {
      var v1205 = b$$224 + "=([^&]+)";
      var c$$152 = JAM.call(a$$287.match, a$$287, [v1205], JAM.policy.p4);
      var v2824 = c$$152;
      if (v2824) {
        var v3883 = c$$152.length;
        v2824 = 2 == v3883;
      }
      var v1206 = v2824;
      if (v1206) {
        return c$$152[1];
      }
    }
    return "";
  }
  function be(a$$286, b$$223, c$$151, d$$91, e$$57) {
    var JSCompiler_temp$$12;
    if (e$$57) {
      var b$$inline_175 = b$$223;
      var v2825 = "&" + b$$inline_175;
      var v1207 = v2825 + "=";
      b$$inline_175 = v1207 + c$$151;
      JSCompiler_temp$$12 = a$$286 + b$$inline_175;
    } else {
      var a$$inline_178 = a$$286;
      var b$$inline_179 = b$$223;
      var c$$inline_180 = c$$151;
      var v1208 = "&" + b$$inline_179;
      var d$$inline_181 = v1208 + "=";
      b$$inline_179 = JAM.call(a$$inline_178.indexOf, a$$inline_178, [d$$inline_181], JAM.policy.p4);
      var v1209;
      var v2827 = 0 > b$$inline_179;
      if (v2827) {
        var v2826 = a$$inline_178 + d$$inline_181;
        v1209 = a$$inline_178 = v2826 + c$$inline_180;
      } else {
        var v4835 = d$$inline_181.length;
        b$$inline_179 = b$$inline_179 + v4835;
        d$$inline_181 = JAM.call(a$$inline_178.indexOf, a$$inline_178, ["&", b$$inline_179], JAM.policy.p4);
        var v3884;
        var v4514 = 0 <= d$$inline_181;
        if (v4514) {
          var v4836 = JAM.call(a$$inline_178.substring, a$$inline_178, [0, b$$inline_179], JAM.policy.p4);
          var v4511 = v4836 + c$$inline_180;
          var v4512 = JAM.call(a$$inline_178.substring, a$$inline_178, [d$$inline_181], JAM.policy.p4);
          v3884 = v4511 + v4512;
        } else {
          var v4513 = JAM.call(a$$inline_178.substring, a$$inline_178, [0, b$$inline_179], JAM.policy.p4);
          v3884 = v4513 + c$$inline_180;
        }
        v1209 = a$$inline_178 = v3884;
      }
      v1209;
      JSCompiler_temp$$12 = a$$inline_178;
    }
    c$$151 = JSCompiler_temp$$12;
    var v1210;
    var v3885 = c$$151.length;
    var v2829 = 2E3 < v3885;
    if (v2829) {
      var v2828;
      var v4515 = void 0;
      var v3887 = v4515 !== d$$91;
      if (v3887) {
        var v3886 = void 0;
        v2828 = JAM.call(be, null, [a$$286, b$$223, d$$91, v3886, e$$57], JAM.policy.p4);
      } else {
        v2828 = a$$286;
      }
      v1210 = v2828;
    } else {
      v1210 = c$$151;
    }
    return v1210;
  }
  function Zd(a$$282, b$$220, c$$148, d$$89) {
    function v46(a$$283) {
      return a$$283;
    }
    var v3888;
    if (c$$148) {
      v3888 = "google_debug&";
    } else {
      v3888 = "";
    }
    var v2830 = v3888;
    var v4516 = v$$1.location;
    var v3889 = v4516.protocol;
    var v2831 = JAM.call(encodeURIComponent, null, [v3889], JAM.policy.p4);
    var v4517 = v$$1.location;
    var v3890 = v4517.host;
    var v2832 = JAM.call(encodeURIComponent, null, [v3890], JAM.policy.p4);
    var v1211 = [v2830, "xpc=", b$$220, "&p=", v2831, "//", v2832];
    b$$220 = JAM.call(v1211.join, v1211, [""], JAM.policy.p4);
    var v1212;
    if (d$$89) {
      v1212 = encodeURIComponent;
    } else {
      v1212 = v46;
    }
    d$$89 = v1212;
    var v2833 = a$$282;
    var v3891;
    var v5009 = JAM.call(d$$89, null, ["?"], JAM.policy.p4);
    var v4837 = JAM.call(a$$282.indexOf, a$$282, [v5009], JAM.policy.p4);
    var v4518 = -1 == v4837;
    if (v4518) {
      v3891 = JAM.call(d$$89, null, ["?"], JAM.policy.p4);
    } else {
      v3891 = JAM.call(d$$89, null, ["&"], JAM.policy.p4);
    }
    var v2834 = v3891;
    var v1213 = v2833 + v2834;
    var v1214 = JAM.call(d$$89, null, [b$$220], JAM.policy.p4);
    return v1213 + v1214;
  }
  function Yd(a$$281, b$$219, c$$147, d$$88, e$$56, f$$33, g$$21, h$$14) {
    return{a:a$$281, b:b$$219, c:c$$147, d:d$$88, e:e$$56, f:f$$33, g:g$$21, h:h$$14};
  }
  function Wd(a$$279) {
    var b$$217 = JAM.call(R$$1, null, [a$$279, "fontSize"], JAM.policy.p4);
    var c$$145;
    var a$$inline_169 = b$$217;
    var v2835 = a$$inline_169 = JAM.call(a$$inline_169.match, a$$inline_169, [Sd], JAM.policy.p4);
    if (v2835) {
      v2835 = a$$inline_169[0];
    }
    var v1215 = v2835;
    var v2836 = !v1215;
    if (v2836) {
      v1215 = null;
    }
    c$$145 = v1215;
    var v2837 = b$$217;
    if (v2837) {
      v2837 = "px" == c$$145;
    }
    var v1216 = v2837;
    if (v1216) {
      return JAM.call(parseInt, null, [b$$217, 10], JAM.policy.p4);
    }
    if (N$$1) {
      var v1217 = c$$145 in Ud;
      if (v1217) {
        return JAM.call(Od, null, [a$$279, b$$217, "left", "pixelLeft"], JAM.policy.p4);
      }
      var v3892 = a$$279.parentNode;
      if (v3892) {
        var v4838 = a$$279.parentNode;
        var v4519 = v4838.nodeType;
        v3892 = 1 == v4519;
      }
      var v2838 = v3892;
      if (v2838) {
        v2838 = c$$145 in Vd;
      }
      var v1218 = v2838;
      if (v1218) {
        a$$279 = a$$279.parentNode;
        c$$145 = JAM.call(R$$1, null, [a$$279, "fontSize"], JAM.policy.p4);
        var v3893;
        var v4520 = b$$217 == c$$145;
        if (v4520) {
          v3893 = "1em";
        } else {
          v3893 = b$$217;
        }
        var v2839 = v3893;
        return JAM.call(Od, null, [a$$279, v2839, "left", "pixelLeft"], JAM.policy.p4);
      }
    }
    var v1219 = {style:"visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"};
    c$$145 = JAM.call(kd, null, ["span", v1219], JAM.policy.p4);
    JAM.call(a$$279.appendChild, a$$279, [c$$145], JAM.policy.p4);
    b$$217 = c$$145.offsetHeight;
    JAM.call(qd, null, [c$$145], JAM.policy.p4);
    return b$$217;
  }
  function Qd(a$$276, b$$215) {
    if (N$$1) {
      var v1220 = b$$215 + "Left";
      var c$$143 = JAM.call(Pd, null, [a$$276, v1220], JAM.policy.p4);
      var v1221 = b$$215 + "Right";
      var d$$86 = JAM.call(Pd, null, [a$$276, v1221], JAM.policy.p4);
      var v1222 = b$$215 + "Top";
      var e$$55 = JAM.call(Pd, null, [a$$276, v1222], JAM.policy.p4);
      var v1223 = b$$215 + "Bottom";
      var f$$32 = JAM.call(Pd, null, [a$$276, v1223], JAM.policy.p4);
      return JAM.new(P$$1, [e$$55, d$$86, f$$32, c$$143], JAM.policy.p4);
    }
    var v1224 = b$$215 + "Left";
    c$$143 = JAM.call(yd, null, [a$$276, v1224], JAM.policy.p4);
    var v1225 = b$$215 + "Right";
    d$$86 = JAM.call(yd, null, [a$$276, v1225], JAM.policy.p4);
    var v1226 = b$$215 + "Top";
    e$$55 = JAM.call(yd, null, [a$$276, v1226], JAM.policy.p4);
    var v1227 = b$$215 + "Bottom";
    f$$32 = JAM.call(yd, null, [a$$276, v1227], JAM.policy.p4);
    var v1228 = JAM.call(parseFloat, null, [e$$55], JAM.policy.p4);
    var v1229 = JAM.call(parseFloat, null, [d$$86], JAM.policy.p4);
    var v1230 = JAM.call(parseFloat, null, [f$$32], JAM.policy.p4);
    var v1231 = JAM.call(parseFloat, null, [c$$143], JAM.policy.p4);
    return JAM.new(P$$1, [v1228, v1229, v1230, v1231], JAM.policy.p4);
  }
  function Pd(a$$275, b$$214) {
    var v1232;
    var v2841 = a$$275.currentStyle;
    if (v2841) {
      var v2840 = a$$275.currentStyle;
      v1232 = v2840[b$$214];
    } else {
      v1232 = null;
    }
    var c$$142 = v1232;
    var v1233;
    if (c$$142) {
      v1233 = JAM.call(Od, null, [a$$275, c$$142, "left", "pixelLeft"], JAM.policy.p4);
    } else {
      v1233 = 0;
    }
    return v1233;
  }
  function Od(a$$274, b$$213, c$$141, d$$85) {
    var v1234 = JAM.call(/^\d+px?$/.test, /^\d+px?$/, [b$$213], JAM.policy.p4);
    if (v1234) {
      return JAM.call(parseInt, null, [b$$213, 10], JAM.policy.p4);
    }
    var v1235 = a$$274.style;
    var e$$54 = v1235[c$$141];
    var v1236 = a$$274.runtimeStyle;
    var f$$31 = v1236[c$$141];
    var v1237 = a$$274.runtimeStyle;
    var v2842 = a$$274.currentStyle;
    JAM.set(v1237, c$$141, v2842[c$$141], JAM.policy.p2);
    var v1238 = a$$274.style;
    JAM.set(v1238, c$$141, b$$213, JAM.policy.p2);
    var v1239 = a$$274.style;
    b$$213 = v1239[d$$85];
    var v1240 = a$$274.style;
    JAM.set(v1240, c$$141, e$$54, JAM.policy.p2);
    var v1241 = a$$274.runtimeStyle;
    JAM.set(v1241, c$$141, f$$31, JAM.policy.p2);
    return b$$213;
  }
  function Nd(a$$273, b$$212) {
    var c$$140 = a$$273.style;
    var v1242;
    var v2844 = "opacity" in c$$140;
    if (v2844) {
      v1242 = c$$140.opacity = b$$212;
    } else {
      var v2843;
      var v3895 = "MozOpacity" in c$$140;
      if (v3895) {
        v2843 = c$$140.MozOpacity = b$$212;
      } else {
        var v3894 = "filter" in c$$140;
        if (v3894) {
          var v4521;
          var v4840 = "" === b$$212;
          if (v4840) {
            v4521 = "";
          } else {
            var v5010 = 100 * b$$212;
            var v4839 = "alpha(opacity=" + v5010;
            v4521 = v4839 + ")";
          }
          v3894 = c$$140.filter = v4521;
        }
        v2843 = v3894;
      }
      v1242 = v2843;
    }
    v1242;
    return;
  }
  function Md(a$$272) {
    var b$$211 = a$$272.style;
    a$$272 = "";
    var v1243;
    var v2846 = "opacity" in b$$211;
    if (v2846) {
      v1243 = a$$272 = b$$211.opacity;
    } else {
      var v2845;
      var v3897 = "MozOpacity" in b$$211;
      if (v3897) {
        v2845 = a$$272 = b$$211.MozOpacity;
      } else {
        var v4522 = "filter" in b$$211;
        if (v4522) {
          var v4841 = b$$211.filter;
          v4522 = b$$211 = JAM.call(v4841.match, v4841, [/alpha\(opacity=([\d.]+)\)/], JAM.policy.p4);
        }
        var v3896 = v4522;
        if (v3896) {
          var v4842 = b$$211[1];
          var v4523 = v4842 / 100;
          v3896 = a$$272 = JAM.call(String, null, [v4523], JAM.policy.p4);
        }
        v2845 = v3896;
      }
      v1243 = v2845;
    }
    v1243;
    var v1244;
    var v2847 = "" == a$$272;
    if (v2847) {
      v1244 = a$$272;
    } else {
      v1244 = JAM.call(Number, null, [a$$272], JAM.policy.p4);
    }
    return v1244;
  }
  function Ld(a$$271) {
    var b$$210 = a$$271.offsetWidth;
    var c$$139 = a$$271.offsetHeight;
    var v2848 = Pc;
    if (v2848) {
      v2848 = !b$$210;
    }
    var v1245 = v2848;
    if (v1245) {
      v1245 = !c$$139;
    }
    var d$$84 = v1245;
    var v1246;
    var v4843 = void 0;
    var v4524 = v4843 === b$$210;
    var v4844 = !v4524;
    if (v4844) {
      v4524 = d$$84;
    }
    var v3898 = v4524;
    if (v3898) {
      v3898 = a$$271.getBoundingClientRect;
    }
    var v2849 = v3898;
    if (v2849) {
      a$$271 = JAM.call(Ad, null, [a$$271], JAM.policy.p4);
      var v4525 = a$$271.right;
      var v4526 = a$$271.left;
      var v3899 = v4525 - v4526;
      var v4527 = a$$271.bottom;
      var v4528 = a$$271.top;
      var v3900 = v4527 - v4528;
      v1246 = JAM.new(u$$2, [v3899, v3900], JAM.policy.p4);
    } else {
      v1246 = JAM.new(u$$2, [b$$210, c$$139], JAM.policy.p4);
    }
    return v1246;
  }
  function Jd(a$$267, b$$206) {
    var v2850 = typeof a$$267;
    var v1247 = "number" == v2850;
    if (v1247) {
      var v3901;
      if (b$$206) {
        v3901 = JAM.call(Math.round, Math, [a$$267], JAM.policy.p4);
      } else {
        v3901 = a$$267;
      }
      var v2851 = v3901;
      a$$267 = v2851 + "px";
    }
    return a$$267;
  }
  function Id(a$$266, b$$205, c$$137) {
    var v1249 = b$$205 instanceof u$$2;
    if (v1249) {
      c$$137 = b$$205.height;
      b$$205 = b$$205.width;
    } else {
      var v2852 = void 0;
      var v1248 = v2852 == c$$137;
      if (v1248) {
        throw JAM.call(Error, null, ["missing height argument"], JAM.policy.p4);
      }
    }
    var v1250 = a$$266.style;
    var v2853 = !0;
    var v5190 = JAM.call(Jd, null, [b$$205, v2853], JAM.policy.p4);
    v1250.width = v5190;
    var v1251 = a$$266.style;
    var v2854 = !0;
    var v5191 = JAM.call(Jd, null, [c$$137, v2854], JAM.policy.p4);
    v1251.height = v5191;
    return;
  }
  function Cd(a$$263) {
    var b$$202;
    var c$$134 = JAM.call(cd, null, [a$$263], JAM.policy.p4);
    var d$$81 = JAM.call(R$$1, null, [a$$263, "position"], JAM.policy.p4);
    var v4845 = Oc;
    if (v4845) {
      v4845 = c$$134.getBoxObjectFor;
    }
    var v4529 = v4845;
    if (v4529) {
      var v4846 = a$$263.getBoundingClientRect;
      v4529 = !v4846;
    }
    var v3902 = v4529;
    if (v3902) {
      v3902 = "absolute" == d$$81;
    }
    var v2855 = v3902;
    if (v2855) {
      v2855 = b$$202 = JAM.call(c$$134.getBoxObjectFor, c$$134, [a$$263], JAM.policy.p4);
    }
    var v1252 = v2855;
    if (v1252) {
      var v3903 = b$$202.screenX;
      var v2856 = 0 > v3903;
      var v3905 = !v2856;
      if (v3905) {
        var v3904 = b$$202.screenY;
        v2856 = 0 > v3904;
      }
      v1252 = v2856;
    }
    var e$$51 = v1252;
    var f$$28 = JAM.new(M$$1, [0, 0], JAM.policy.p4);
    var g$$19;
    var a$$inline_149 = c$$134;
    var v1253;
    if (a$$inline_149) {
      v1253 = JAM.call(cd, null, [a$$inline_149], JAM.policy.p4);
    } else {
      v1253 = document;
    }
    a$$inline_149 = v1253;
    var v1254;
    var v4530 = !N$$1;
    var v4848 = !v4530;
    if (v4848) {
      var v4847 = N$$1;
      if (v4847) {
        v4847 = 9 <= Vc;
      }
      v4530 = v4847;
    }
    var v3906 = v4530;
    var v4532 = !v3906;
    if (v4532) {
      var v4531 = JAM.call(dd, null, [a$$inline_149], JAM.policy.p4);
      v3906 = JAM.call(v4531.$b, v4531, [], JAM.policy.p4);
    }
    var v2857 = v3906;
    if (v2857) {
      v1254 = a$$inline_149.documentElement;
    } else {
      v1254 = a$$inline_149.body;
    }
    g$$19 = v1254;
    var v1255 = a$$263 == g$$19;
    if (v1255) {
      return f$$28;
    }
    var v1262 = a$$263.getBoundingClientRect;
    if (v1262) {
      b$$202 = JAM.call(Ad, null, [a$$263], JAM.policy.p4);
      var v4533 = JAM.call(dd, null, [c$$134], JAM.policy.p4);
      a$$263 = JAM.call(v4533.Ja, v4533, [], JAM.policy.p4);
      var v3907 = b$$202.left;
      var v3908 = a$$263.x;
      f$$28.x = v3907 + v3908;
      var v2858 = b$$202.top;
      var v2859 = a$$263.y;
      f$$28.y = v2858 + v2859;
    } else {
      var v2860 = c$$134.getBoxObjectFor;
      if (v2860) {
        v2860 = !e$$51;
      }
      var v1261 = v2860;
      if (v1261) {
        b$$202 = JAM.call(c$$134.getBoxObjectFor, c$$134, [a$$263], JAM.policy.p4);
        a$$263 = JAM.call(c$$134.getBoxObjectFor, c$$134, [g$$19], JAM.policy.p4);
        var v3909 = b$$202.screenX;
        var v3910 = a$$263.screenX;
        f$$28.x = v3909 - v3910;
        var v2861 = b$$202.screenY;
        var v2862 = a$$263.screenY;
        f$$28.y = v2861 - v2862;
      } else {
        b$$202 = a$$263;
        var v2863 = b$$202;
        if (v2863) {
          v2863 = b$$202 != a$$263;
        }
        var v1258 = v2863;
        do {
          var v2864 = f$$28.x;
          var v2865 = b$$202.offsetLeft;
          f$$28.x = v2864 + v2865;
          var v2866 = f$$28.y;
          var v2867 = b$$202.offsetTop;
          f$$28.y = v2866 + v2867;
          var v1256 = b$$202 != a$$263;
          if (v1256) {
            var v4534 = f$$28.x;
            var v4849 = b$$202.clientLeft;
            var v5011 = !v4849;
            if (v5011) {
              v4849 = 0;
            }
            var v4535 = v4849;
            f$$28.x = v4534 + v4535;
            var v4536 = f$$28.y;
            var v4850 = b$$202.clientTop;
            var v5012 = !v4850;
            if (v5012) {
              v4850 = 0;
            }
            var v4537 = v4850;
            f$$28.y = v4536 + v4537;
          }
          var v2868 = Pc;
          if (v2868) {
            var v3911 = JAM.call(R$$1, null, [b$$202, "position"], JAM.policy.p4);
            v2868 = "fixed" == v3911;
          }
          var v1257 = v2868;
          if (v1257) {
            var v2869 = f$$28.x;
            var v3912 = c$$134.body;
            var v2870 = v3912.scrollLeft;
            f$$28.x = v2869 + v2870;
            var v2871 = f$$28.y;
            var v3913 = c$$134.body;
            var v2872 = v3913.scrollTop;
            f$$28.y = v2871 + v2872;
            break;
          }
          b$$202 = b$$202.offsetParent;
          var v2873 = b$$202;
          if (v2873) {
            v2873 = b$$202 != a$$263;
          }
          v1258 = v2873;
        } while (v1258);
        var v2874 = Nc;
        var v3915 = !v2874;
        if (v3915) {
          var v3914 = Pc;
          if (v3914) {
            v3914 = "absolute" == d$$81;
          }
          v2874 = v3914;
        }
        var v1259 = v2874;
        if (v1259) {
          var v2875 = f$$28.y;
          var v3916 = c$$134.body;
          var v2876 = v3916.offsetTop;
          f$$28.y = v2875 - v2876;
        }
        b$$202 = a$$263;
        var v3917 = b$$202 = JAM.call(Bd, null, [b$$202], JAM.policy.p4);
        if (v3917) {
          var v4538 = c$$134.body;
          v3917 = b$$202 != v4538;
        }
        var v2877 = v3917;
        if (v2877) {
          v2877 = b$$202 != g$$19;
        }
        var v1260 = v2877;
        for (;v1260;) {
          var v3918 = f$$28.x;
          var v3919 = b$$202.scrollLeft;
          f$$28.x = v3918 - v3919;
          var v3920 = Nc;
          if (v3920) {
            var v4539 = b$$202.tagName;
            v3920 = "TR" == v4539;
          }
          var v2878 = v3920;
          var v3921 = !v2878;
          if (v3921) {
            var v4540 = f$$28.y;
            var v4541 = b$$202.scrollTop;
            f$$28.y = v4540 - v4541;
          }
          var v3922 = b$$202 = JAM.call(Bd, null, [b$$202], JAM.policy.p4);
          if (v3922) {
            var v4542 = c$$134.body;
            v3922 = b$$202 != v4542;
          }
          var v2879 = v3922;
          if (v2879) {
            v2879 = b$$202 != g$$19;
          }
          v1260 = v2879;
        }
      }
    }
    return f$$28;
  }
  function Bd(a$$262) {
    var v2880 = N$$1;
    if (v2880) {
      var v4543 = N$$1;
      if (v4543) {
        v4543 = 8 <= Vc;
      }
      var v3923 = v4543;
      v2880 = !v3923;
    }
    var v1263 = v2880;
    if (v1263) {
      return a$$262.offsetParent;
    }
    var b$$201 = JAM.call(cd, null, [a$$262], JAM.policy.p4);
    var c$$133 = JAM.call(R$$1, null, [a$$262, "position"], JAM.policy.p4);
    var v1264 = "fixed" == c$$133;
    var v2881 = !v1264;
    if (v2881) {
      v1264 = "absolute" == c$$133;
    }
    var d$$80 = v1264;
    a$$262 = a$$262.parentNode;
    var v2882 = a$$262;
    if (v2882) {
      v2882 = a$$262 != b$$201;
    }
    var v1266 = v2882;
    for (;v1266;) {
      c$$133 = JAM.call(R$$1, null, [a$$262, "position"], JAM.policy.p4);
      var v5013 = d$$80;
      if (v5013) {
        v5013 = "static" == c$$133;
      }
      var v4851 = v5013;
      if (v4851) {
        var v5014 = b$$201.documentElement;
        v4851 = a$$262 != v5014;
      }
      var v4544 = v4851;
      if (v4544) {
        var v4852 = b$$201.body;
        v4544 = a$$262 != v4852;
      }
      d$$80 = v4544;
      var v3924 = !d$$80;
      if (v3924) {
        var v5092 = a$$262.scrollWidth;
        var v5093 = a$$262.clientWidth;
        var v5066 = v5092 > v5093;
        var v5096 = !v5066;
        if (v5096) {
          var v5094 = a$$262.scrollHeight;
          var v5095 = a$$262.clientHeight;
          v5066 = v5094 > v5095;
        }
        var v5015 = v5066;
        var v5067 = !v5015;
        if (v5067) {
          v5015 = "fixed" == c$$133;
        }
        var v4853 = v5015;
        var v5016 = !v4853;
        if (v5016) {
          v4853 = "absolute" == c$$133;
        }
        var v4545 = v4853;
        var v4854 = !v4545;
        if (v4854) {
          v4545 = "relative" == c$$133;
        }
        v3924 = v4545;
      }
      var v1265 = v3924;
      if (v1265) {
        return a$$262;
      }
      a$$262 = a$$262.parentNode;
      var v2883 = a$$262;
      if (v2883) {
        v2883 = a$$262 != b$$201;
      }
      v1266 = v2883;
    }
    return null;
  }
  function Ad(a$$261) {
    var b$$200;
    try {
      b$$200 = JAM.call(a$$261.getBoundingClientRect, a$$261, [], JAM.policy.p4);
    } catch (c$$132) {
      return{left:0, top:0, right:0, bottom:0};
    }
    var v2884 = N$$1;
    if (v2884) {
      var v3925 = a$$261.ownerDocument;
      v2884 = v3925.body;
    }
    var v1267 = v2884;
    if (v1267) {
      a$$261 = a$$261.ownerDocument;
      var v4855 = b$$200.left;
      var v5068 = a$$261.documentElement;
      var v5017 = v5068.clientLeft;
      var v5069 = a$$261.body;
      var v5018 = v5069.clientLeft;
      var v4856 = v5017 + v5018;
      b$$200.left = v4855 - v4856;
      var v4546 = b$$200.top;
      var v5019 = a$$261.documentElement;
      var v4857 = v5019.clientTop;
      var v5020 = a$$261.body;
      var v4858 = v5020.clientTop;
      var v4547 = v4857 + v4858;
      b$$200.top = v4546 - v4547;
    }
    return b$$200;
  }
  function R$$1(a$$259, b$$199) {
    var v2885 = JAM.call(yd, null, [a$$259, b$$199], JAM.policy.p4);
    var v3927 = !v2885;
    if (v3927) {
      var v3926;
      var v4549 = a$$259.currentStyle;
      if (v4549) {
        var v4548 = a$$259.currentStyle;
        v3926 = v4548[b$$199];
      } else {
        v3926 = null;
      }
      v2885 = v3926;
    }
    var v1268 = v2885;
    var v2887 = !v1268;
    if (v2887) {
      var v2886 = a$$259.style;
      if (v2886) {
        var v3928 = a$$259.style;
        v2886 = v3928[b$$199];
      }
      v1268 = v2886;
    }
    return v1268;
  }
  function yd(a$$258, b$$198) {
    var c$$131 = JAM.call(cd, null, [a$$258], JAM.policy.p4);
    var v1269;
    var v4550 = c$$131.defaultView;
    if (v4550) {
      var v4859 = c$$131.defaultView;
      v4550 = v4859.getComputedStyle;
    }
    var v3929 = v4550;
    if (v3929) {
      var v4551 = c$$131.defaultView;
      v3929 = c$$131 = JAM.call(v4551.getComputedStyle, v4551, [a$$258, null], JAM.policy.p4);
    }
    var v2889 = v3929;
    if (v2889) {
      var v3930 = c$$131[b$$198];
      var v4552 = !v3930;
      if (v4552) {
        v3930 = JAM.call(c$$131.getPropertyValue, c$$131, [b$$198], JAM.policy.p4);
      }
      var v2888 = v3930;
      var v3931 = !v2888;
      if (v3931) {
        v2888 = "";
      }
      v1269 = v2888;
    } else {
      v1269 = "";
    }
    return v1269;
  }
  function wd(a$$256, b$$196, c$$129) {
    var JSCompiler_inline_result$$52;
    JSCompiler_inline_label_xd_148: {
      var a$$inline_144 = a$$256;
      var b$$inline_145 = c$$129;
      var c$$inline_146 = JAM.call(db$$1, null, [b$$inline_145], JAM.policy.p4);
      var v2890 = void 0;
      var v3932 = a$$inline_144.style;
      var v2891 = v3932[c$$inline_146];
      var v1273 = v2890 === v2891;
      if (v1273) {
        var v2892;
        if (Pc) {
          v2892 = "Webkit";
        } else {
          var v3933;
          if (Oc) {
            v3933 = "Moz";
          } else {
            var v4553;
            if (N$$1) {
              v4553 = "ms";
            } else {
              var v4860;
              if (Nc) {
                v4860 = "O";
              } else {
                v4860 = null;
              }
              v4553 = v4860;
            }
            v3933 = v4553;
          }
          v2892 = v3933;
        }
        var v1270 = v2892;
        var v1271 = JAM.call(eb$$1, null, [b$$inline_145], JAM.policy.p4);
        var d$$inline_147 = v1270 + v1271;
        var v2893 = void 0;
        var v3934 = a$$inline_144.style;
        var v2894 = v3934[d$$inline_147];
        var v1272 = v2893 !== v2894;
        if (v1272) {
          JSCompiler_inline_result$$52 = d$$inline_147;
          break JSCompiler_inline_label_xd_148;
        }
      }
      JSCompiler_inline_result$$52 = c$$inline_146;
    }
    var v1274 = c$$129 = JSCompiler_inline_result$$52;
    if (v1274) {
      var v2895 = a$$256.style;
      JAM.set(v2895, c$$129, b$$196, JAM.policy.p2);
    }
    return;
  }
  function Q$$1(a$$255, b$$195, c$$128) {
    var v1275;
    var v2897 = JAM.call(p$$1, null, [b$$195], JAM.policy.p4);
    if (v2897) {
      v1275 = JAM.call(wd, null, [a$$255, c$$128, b$$195], JAM.policy.p4);
    } else {
      var v2896 = JAM.call(ga$$1, null, [wd, a$$255], JAM.policy.p4);
      v1275 = JAM.call(Dc, null, [b$$195, v2896], JAM.policy.p4);
    }
    v1275;
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
    var v2898 = a$$247;
    var v3935 = !v2898;
    if (v3935) {
      v2898 = m$$3.document;
    }
    var v1276 = v2898;
    var v2899 = !v1276;
    if (v2899) {
      v1276 = document;
    }
    this.V = v1276;
    return;
  }
  function md(a$$246) {
    var v2900 = a$$246;
    if (v2900) {
      var v4554 = a$$246.length;
      var v3936 = typeof v4554;
      v2900 = "number" == v3936;
    }
    var v1281 = v2900;
    if (v1281) {
      var v1278 = JAM.call(da$$1, null, [a$$246], JAM.policy.p4);
      if (v1278) {
        var v3937 = a$$246.item;
        var v2901 = typeof v3937;
        var v1277 = "function" == v2901;
        var v2903 = !v1277;
        if (v2903) {
          var v3938 = a$$246.item;
          var v2902 = typeof v3938;
          v1277 = "string" == v2902;
        }
        return v1277;
      }
      var v2904 = JAM.call(ba$$1, null, [a$$246], JAM.policy.p4);
      var v1280 = "function" == v2904;
      if (v1280) {
        var v2905 = a$$246.item;
        var v1279 = typeof v2905;
        return "function" == v1279;
      }
    }
    return!1;
  }
  function ud(a$$245, b$$190, c$$124) {
    var v3939 = a$$245.nodeName;
    var v2906 = v3939 in sd;
    var v1286 = !v2906;
    if (v1286) {
      var v2907 = a$$245.nodeType;
      var v1285 = 3 == v2907;
      if (v1285) {
        var v1282;
        if (c$$124) {
          var v4555 = a$$245.nodeValue;
          var v3940 = JAM.call(String, null, [v4555], JAM.policy.p4);
          var v2908 = JAM.call(v3940.replace, v3940, [/(\r\n|\r|\n)/g, ""], JAM.policy.p4);
          v1282 = JAM.call(b$$190.push, b$$190, [v2908], JAM.policy.p4);
        } else {
          var v2909 = a$$245.nodeValue;
          v1282 = JAM.call(b$$190.push, b$$190, [v2909], JAM.policy.p4);
        }
        v1282;
      } else {
        var v2910 = a$$245.nodeName;
        var v1284 = v2910 in td;
        if (v1284) {
          var v2911 = a$$245.nodeName;
          var v1283 = td[v2911];
          JAM.call(b$$190.push, b$$190, [v1283], JAM.policy.p4);
        } else {
          a$$245 = a$$245.firstChild;
          for (;a$$245;) {
            JAM.call(ud, null, [a$$245, b$$190, c$$124], JAM.policy.p4);
            a$$245 = a$$245.nextSibling;
          }
        }
      }
    }
    return;
  }
  function cd(a$$243) {
    var v1287;
    var v3941 = a$$243.nodeType;
    var v2913 = 9 == v3941;
    if (v2913) {
      v1287 = a$$243;
    } else {
      var v2912 = a$$243.ownerDocument;
      var v3942 = !v2912;
      if (v3942) {
        v2912 = a$$243.document;
      }
      v1287 = v2912;
    }
    return v1287;
  }
  function rd(a$$242, b$$188) {
    var v2914 = a$$242.contains;
    if (v2914) {
      var v3943 = b$$188.nodeType;
      v2914 = 1 == v3943;
    }
    var v1289 = v2914;
    if (v1289) {
      var v1288 = a$$242 == b$$188;
      var v2915 = !v1288;
      if (v2915) {
        v1288 = JAM.call(a$$242.contains, a$$242, [b$$188], JAM.policy.p4);
      }
      return v1288;
    }
    var v3944 = a$$242.compareDocumentPosition;
    var v2916 = typeof v3944;
    var v1291 = "undefined" != v2916;
    if (v1291) {
      var v1290 = a$$242 == b$$188;
      var v2918 = !v1290;
      if (v2918) {
        var v3945 = JAM.call(a$$242.compareDocumentPosition, a$$242, [b$$188], JAM.policy.p4);
        var v2917 = v3945 & 16;
        v1290 = JAM.call(Boolean, null, [v2917], JAM.policy.p4);
      }
      return v1290;
    }
    var v2919 = b$$188;
    if (v2919) {
      v2919 = a$$242 != b$$188;
    }
    var v1292 = v2919;
    for (;v1292;) {
      b$$188 = b$$188.parentNode;
      var v2920 = b$$188;
      if (v2920) {
        v2920 = a$$242 != b$$188;
      }
      v1292 = v2920;
    }
    return b$$188 == a$$242;
  }
  function qd(a$$241) {
    var v1293;
    var v3946 = a$$241;
    if (v3946) {
      v3946 = a$$241.parentNode;
    }
    var v2922 = v3946;
    if (v2922) {
      var v2921 = a$$241.parentNode;
      v1293 = JAM.call(v2921.removeChild, v2921, [a$$241], JAM.policy.p4);
    } else {
      v1293 = null;
    }
    return v1293;
  }
  function pd(a$$240, b$$187) {
    var v1294 = JAM.call(cd, null, [a$$240], JAM.policy.p4);
    JAM.call(ld, null, [v1294, a$$240, arguments, 1], JAM.policy.p4);
    return;
  }
  function od(a$$239, b$$186) {
    JAM.call(a$$239.appendChild, a$$239, [b$$186], JAM.policy.p4);
    return;
  }
  function nd(a$$238) {
    var v2923 = a$$238.nodeType;
    var v1295 = 1 != v2923;
    if (v1295) {
      return!1;
    }
    var v1296 = a$$238.tagName;
    switch(v1296) {
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
        var v3947;
        var v4556 = JAM.call(p$$1, null, [c$$123], JAM.policy.p4);
        if (v4556) {
          v3947 = JAM.call(a$$237.createTextNode, a$$237, [c$$123], JAM.policy.p4);
        } else {
          v3947 = c$$123;
        }
        var v2924 = v3947;
        JAM.call(b$$185.appendChild, b$$185, [v2924], JAM.policy.p4);
      }
      return;
    }
    var v2925 = c$$122.length;
    var v1298 = d$$76 < v2925;
    for (;v1298;) {
      var f$$27 = c$$122[d$$76];
      var v1297;
      var v4557 = JAM.call(ca$$1, null, [f$$27], JAM.policy.p4);
      var v3948 = !v4557;
      var v4559 = !v3948;
      if (v4559) {
        var v4558 = JAM.call(da$$1, null, [f$$27], JAM.policy.p4);
        if (v4558) {
          var v4861 = f$$27.nodeType;
          v4558 = 0 < v4861;
        }
        v3948 = v4558;
      }
      var v2927 = v3948;
      if (v2927) {
        v1297 = JAM.call(e$$50, null, [f$$27], JAM.policy.p4);
      } else {
        var v3949;
        var v4560 = JAM.call(md, null, [f$$27], JAM.policy.p4);
        if (v4560) {
          v3949 = JAM.call(ac, null, [f$$27], JAM.policy.p4);
        } else {
          v3949 = f$$27;
        }
        var v2926 = v3949;
        v1297 = JAM.call(Zb, null, [v2926, e$$50], JAM.policy.p4);
      }
      v1297;
      d$$76 = d$$76 + 1;
      var v2928 = c$$122.length;
      v1298 = d$$76 < v2928;
    }
    return;
  }
  function kd(a$$235, b$$183, c$$120) {
    var JSCompiler_inline_result$$48;
    var b$$inline_136 = arguments;
    var c$$inline_137 = b$$inline_136[0];
    var d$$inline_138 = b$$inline_136[1];
    var v3950 = !Wc;
    if (v3950) {
      v3950 = d$$inline_138;
    }
    var v2929 = v3950;
    if (v2929) {
      var v3951 = d$$inline_138.name;
      var v4561 = !v3951;
      if (v4561) {
        v3951 = d$$inline_138.type;
      }
      v2929 = v3951;
    }
    var v1302 = v2929;
    if (v1302) {
      c$$inline_137 = ["<", c$$inline_137];
      var v1299 = d$$inline_138.name;
      if (v1299) {
        var v3952 = d$$inline_138.name;
        var v2930 = JAM.call(Sa$$1, null, [v3952], JAM.policy.p4);
        JAM.call(c$$inline_137.push, c$$inline_137, [' name="', v2930, '"'], JAM.policy.p4);
      }
      var v1301 = d$$inline_138.type;
      if (v1301) {
        var v2931 = d$$inline_138.type;
        var v1300 = JAM.call(Sa$$1, null, [v2931], JAM.policy.p4);
        JAM.call(c$$inline_137.push, c$$inline_137, [' type="', v1300, '"'], JAM.policy.p4);
        var e$$inline_139 = {};
        JAM.call(Gc, null, [e$$inline_139, d$$inline_138], JAM.policy.p4);
        delete e$$inline_139.type;
        d$$inline_138 = e$$inline_139;
      }
      JAM.call(c$$inline_137.push, c$$inline_137, [">"], JAM.policy.p4);
      c$$inline_137 = JAM.call(c$$inline_137.join, c$$inline_137, [""], JAM.policy.p4);
    }
    c$$inline_137 = JAM.call(document.createElement, document, [c$$inline_137], JAM.policy.p4);
    if (d$$inline_138) {
      var v2932;
      var v3954 = JAM.call(p$$1, null, [d$$inline_138], JAM.policy.p4);
      if (v3954) {
        v2932 = c$$inline_137.className = d$$inline_138;
      } else {
        var v3953;
        var v4563 = JAM.call(n$$2, null, [d$$inline_138], JAM.policy.p4);
        if (v4563) {
          var v4862 = [c$$inline_137];
          var v4562 = JAM.call(v4862.concat, v4862, [d$$inline_138], JAM.policy.p4);
          v3953 = JAM.call(ad.apply, ad, [null, v4562], JAM.policy.p4);
        } else {
          v3953 = JAM.call(fd, null, [c$$inline_137, d$$inline_138], JAM.policy.p4);
        }
        v2932 = v3953;
      }
      v2932;
    }
    var v2933 = b$$inline_136.length;
    var v1303 = 2 < v2933;
    if (v1303) {
      JAM.call(ld, null, [document, c$$inline_137, b$$inline_136, 2], JAM.policy.p4);
    }
    JSCompiler_inline_result$$48 = c$$inline_137;
    return JSCompiler_inline_result$$48;
  }
  function fd(a$$231, b$$180) {
    function v47(b$$181, d$$74) {
      var v1304;
      var v2936 = "style" == d$$74;
      if (v2936) {
        var v2934 = a$$231.style;
        v1304 = v2934.cssText = b$$181;
      } else {
        var v2935;
        var v3956 = "class" == d$$74;
        if (v3956) {
          v2935 = a$$231.className = b$$181;
        } else {
          var v3955;
          var v4565 = "for" == d$$74;
          if (v4565) {
            v3955 = a$$231.htmlFor = b$$181;
          } else {
            var v4564;
            var v4865 = d$$74 in ed;
            if (v4865) {
              var v4863 = ed[d$$74];
              v4564 = JAM.call(a$$231.setAttribute, a$$231, [v4863, b$$181], JAM.policy.p4);
            } else {
              var v4864;
              var v5097 = JAM.call(d$$74.lastIndexOf, d$$74, ["aria-", 0], JAM.policy.p4);
              var v5070 = 0 == v5097;
              var v5099 = !v5070;
              if (v5099) {
                var v5098 = JAM.call(d$$74.lastIndexOf, d$$74, ["data-", 0], JAM.policy.p4);
                v5070 = 0 == v5098;
              }
              var v5021 = v5070;
              if (v5021) {
                v4864 = JAM.call(a$$231.setAttribute, a$$231, [d$$74, b$$181], JAM.policy.p4);
              } else {
                v4864 = JAM.set(a$$231, d$$74, b$$181, JAM.policy.p2);
              }
              v4564 = v4864;
            }
            v3955 = v4564;
          }
          v2935 = v3955;
        }
        v1304 = v2935;
      }
      v1304;
      return;
    }
    JAM.call(Dc, null, [b$$180, v47], JAM.policy.p4);
    return;
  }
  function dd(a$$230) {
    var v1305;
    if (a$$230) {
      var v2937 = JAM.call(cd, null, [a$$230], JAM.policy.p4);
      v1305 = JAM.new(O$$1, [v2937], JAM.policy.p4);
    } else {
      var v2938 = Ma$$1;
      var v3957 = !v2938;
      if (v3957) {
        v2938 = Ma$$1 = JAM.new(O$$1, [], JAM.policy.p4);
      }
      v1305 = v2938;
    }
    return v1305;
  }
  function ad(a$$227, b$$177) {
    var c$$118 = JAM.call(Zc, null, [a$$227], JAM.policy.p4);
    var d$$73 = JAM.call(bc, null, [arguments, 1], JAM.policy.p4);
    var v1306 = c$$118.length;
    var v1307 = d$$73.length;
    var e$$48 = v1306 + v1307;
    var a$$inline_128 = c$$118;
    var b$$inline_129 = d$$73;
    var c$$inline_130 = 0;
    var v2939 = b$$inline_129.length;
    var v1309 = c$$inline_130 < v2939;
    for (;v1309;) {
      var v2940 = b$$inline_129[c$$inline_130];
      var v1308 = JAM.call($b, null, [a$$inline_128, v2940], JAM.policy.p4);
      var v2942 = !v1308;
      if (v2942) {
        var v2941 = b$$inline_129[c$$inline_130];
        JAM.call(a$$inline_128.push, a$$inline_128, [v2941], JAM.policy.p4);
      }
      c$$inline_130 = c$$inline_130 + 1;
      var v2943 = b$$inline_129.length;
      v1309 = c$$inline_130 < v2943;
    }
    var b$$inline_133 = JAM.call(c$$118.join, c$$118, [" "], JAM.policy.p4);
    a$$227.className = b$$inline_133;
    var v1310 = c$$118.length;
    return v1310 == e$$48;
  }
  function Zc(a$$226) {
    a$$226 = a$$226.className;
    var v2944 = JAM.call(p$$1, null, [a$$226], JAM.policy.p4);
    if (v2944) {
      v2944 = JAM.call(a$$226.match, a$$226, [/\S+/g], JAM.policy.p4);
    }
    var v1311 = v2944;
    var v2945 = !v1311;
    if (v2945) {
      v1311 = [];
    }
    return v1311;
  }
  function Uc(a$$223) {
    var JSCompiler_temp$$72;
    var v1326 = JSCompiler_temp$$72 = Tc[a$$223];
    if (v1326) {
    } else {
      var JSCompiler_inline_result$$73;
      var b$$inline_114 = a$$223;
      var c$$inline_115 = 0;
      var v2946 = JAM.call(String, null, [Sc], JAM.policy.p4);
      var v1312 = JAM.call(v2946.replace, v2946, [/^[\s\xa0]+|[\s\xa0]+$/g, ""], JAM.policy.p4);
      var d$$inline_116 = JAM.call(v1312.split, v1312, ["."], JAM.policy.p4);
      var v2947 = JAM.call(String, null, [b$$inline_114], JAM.policy.p4);
      var v1313 = JAM.call(v2947.replace, v2947, [/^[\s\xa0]+|[\s\xa0]+$/g, ""], JAM.policy.p4);
      var e$$inline_117 = JAM.call(v1313.split, v1313, ["."], JAM.policy.p4);
      var v1314 = d$$inline_116.length;
      var v1315 = e$$inline_117.length;
      var f$$inline_118 = JAM.call(Math.max, Math, [v1314, v1315], JAM.policy.p4);
      var g$$inline_119 = 0;
      var v2948 = 0 == c$$inline_115;
      if (v2948) {
        v2948 = g$$inline_119 < f$$inline_118;
      }
      var v1325 = v2948;
      for (;v1325;) {
        var v1316 = d$$inline_116[g$$inline_119];
        var v2949 = !v1316;
        if (v2949) {
          v1316 = "";
        }
        var h$$inline_120 = v1316;
        var v1317 = e$$inline_117[g$$inline_119];
        var v2950 = !v1317;
        if (v2950) {
          v1317 = "";
        }
        var k$$inline_121 = v1317;
        var l$$inline_122 = JAM.call(RegExp, null, ["(\\d*)(\\D*)", "g"], JAM.policy.p4);
        var z$$inline_123 = JAM.call(RegExp, null, ["(\\d*)(\\D*)", "g"], JAM.policy.p4);
        var v1324 = 0 == c$$inline_115;
        do {
          var v1318 = JAM.call(l$$inline_122.exec, l$$inline_122, [h$$inline_120], JAM.policy.p4);
          var v2951 = !v1318;
          if (v2951) {
            v1318 = ["", "", ""];
          }
          var C$$inline_124 = v1318;
          var v1319 = JAM.call(z$$inline_123.exec, z$$inline_123, [k$$inline_121], JAM.policy.p4);
          var v2952 = !v1319;
          if (v2952) {
            v1319 = ["", "", ""];
          }
          var I$$inline_125 = v1319;
          var v4566 = C$$inline_124[0];
          var v3958 = v4566.length;
          var v2953 = 0 == v3958;
          if (v2953) {
            var v4567 = I$$inline_125[0];
            var v3959 = v4567.length;
            v2953 = 0 == v3959;
          }
          var v1320 = v2953;
          if (v1320) {
            break;
          }
          var v1321;
          var v4568 = C$$inline_124[1];
          var v3960 = v4568.length;
          var v2955 = 0 == v3960;
          if (v2955) {
            v1321 = 0;
          } else {
            var v2954 = C$$inline_124[1];
            v1321 = JAM.call(parseInt, null, [v2954, 10], JAM.policy.p4);
          }
          c$$inline_115 = v1321;
          var v1322;
          var v4569 = I$$inline_125[1];
          var v3961 = v4569.length;
          var v2957 = 0 == v3961;
          if (v2957) {
            v1322 = 0;
          } else {
            var v2956 = I$$inline_125[1];
            v1322 = JAM.call(parseInt, null, [v2956, 10], JAM.policy.p4);
          }
          var xb$$inline_126 = v1322;
          var v2958 = JAM.call(bb$$1, null, [c$$inline_115, xb$$inline_126], JAM.policy.p4);
          var v3964 = !v2958;
          if (v3964) {
            var v4866 = C$$inline_124[2];
            var v4570 = v4866.length;
            var v3962 = 0 == v4570;
            var v4867 = I$$inline_125[2];
            var v4571 = v4867.length;
            var v3963 = 0 == v4571;
            v2958 = JAM.call(bb$$1, null, [v3962, v3963], JAM.policy.p4);
          }
          var v1323 = v2958;
          var v2961 = !v1323;
          if (v2961) {
            var v2959 = C$$inline_124[2];
            var v2960 = I$$inline_125[2];
            v1323 = JAM.call(bb$$1, null, [v2959, v2960], JAM.policy.p4);
          }
          c$$inline_115 = v1323;
          v1324 = 0 == c$$inline_115;
        } while (v1324);
        g$$inline_119 = g$$inline_119 + 1;
        var v2962 = 0 == c$$inline_115;
        if (v2962) {
          v2962 = g$$inline_119 < f$$inline_118;
        }
        v1325 = v2962;
      }
      JSCompiler_inline_result$$73 = c$$inline_115;
      JSCompiler_temp$$72 = JAM.set(Tc, a$$223, 0 <= JSCompiler_inline_result$$73, JAM.policy.p2);
    }
    return JSCompiler_temp$$72;
  }
  function Qc() {
    var a$$222 = m$$3.document;
    var v1327;
    if (a$$222) {
      v1327 = a$$222.documentMode;
    } else {
      v1327 = void 0;
    }
    return v1327;
  }
  function Rc() {
    var a$$221 = "";
    var b$$174;
    var v1328;
    var v3965 = Nc;
    if (v3965) {
      v3965 = m$$3.opera;
    }
    var v2963 = v3965;
    if (v2963) {
      var v3966 = m$$3.opera;
      a$$221 = v3966.version;
      var v3967;
      var v4868 = typeof a$$221;
      var v4572 = "function" == v4868;
      if (v4572) {
        v3967 = JAM.call(a$$221, null, [], JAM.policy.p4);
      } else {
        v3967 = a$$221;
      }
      v1328 = a$$221 = v3967;
    } else {
      var v3968;
      if (Oc) {
        v3968 = b$$174 = /rv\:([^\);]+)(\)|;)/;
      } else {
        var v4573;
        if (N$$1) {
          v4573 = b$$174 = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/;
        } else {
          var v4869 = Pc;
          if (v4869) {
            v4869 = b$$174 = /WebKit\/(\S+)/;
          }
          v4573 = v4869;
        }
        v3968 = v4573;
      }
      v3968;
      var v3969 = b$$174;
      if (v3969) {
        var v4574;
        var v5071;
        var v5101 = m$$3.navigator;
        if (v5101) {
          var v5100 = m$$3.navigator;
          v5071 = v5100.userAgent;
        } else {
          v5071 = null;
        }
        var v5022 = v5071;
        var v4870 = a$$221 = JAM.call(b$$174.exec, b$$174, [v5022], JAM.policy.p4);
        if (v4870) {
          v4574 = a$$221[1];
        } else {
          v4574 = "";
        }
        v3969 = a$$221 = v4574;
      }
      v1328 = v3969;
    }
    v1328;
    var v1329;
    var v3970 = N$$1;
    if (v3970) {
      b$$174 = JAM.call(Qc, null, [], JAM.policy.p4);
      var v4871 = b$$174;
      var v4872 = JAM.call(parseFloat, null, [a$$221], JAM.policy.p4);
      v3970 = v4871 > v4872;
    }
    var v2964 = v3970;
    if (v2964) {
      v1329 = JAM.call(String, null, [b$$174], JAM.policy.p4);
    } else {
      v1329 = a$$221;
    }
    return v1329;
  }
  function Mc() {
    Kc = Jc = Ic = Hc = !1;
    var a$$220;
    var v2965;
    var v3972 = m$$3.navigator;
    if (v3972) {
      var v3971 = m$$3.navigator;
      v2965 = v3971.userAgent;
    } else {
      v2965 = null;
    }
    var v1334 = a$$220 = v2965;
    if (v1334) {
      var b$$173 = m$$3.navigator;
      var v1330 = JAM.call(a$$220.lastIndexOf, a$$220, ["Opera", 0], JAM.policy.p4);
      Hc = 0 == v1330;
      var v1331 = !Hc;
      if (v1331) {
        var v3973 = JAM.call(a$$220.indexOf, a$$220, ["MSIE"], JAM.policy.p4);
        var v2966 = -1 != v3973;
        var v3975 = !v2966;
        if (v3975) {
          var v3974 = JAM.call(a$$220.indexOf, a$$220, ["Trident"], JAM.policy.p4);
          v2966 = -1 != v3974;
        }
        v1331 = v2966;
      }
      Ic = v1331;
      var v1332 = !Hc;
      if (v1332) {
        var v2967 = JAM.call(a$$220.indexOf, a$$220, ["WebKit"], JAM.policy.p4);
        v1332 = -1 != v2967;
      }
      Jc = v1332;
      var v3976 = !Hc;
      if (v3976) {
        v3976 = !Jc;
      }
      var v2968 = v3976;
      if (v2968) {
        v2968 = !Ic;
      }
      var v1333 = v2968;
      if (v1333) {
        var v2969 = b$$173.product;
        v1333 = "Gecko" == v2969;
      }
      Kc = v1333;
    }
    return;
  }
  function Gc(a$$219, b$$172) {
    var c$$117;
    var d$$72;
    var e$$47 = 1;
    var v2970 = arguments.length;
    var v1336 = e$$47 < v2970;
    for (;v1336;) {
      d$$72 = arguments[e$$47];
      for (c$$117 in d$$72) {
        JAM.set(a$$219, c$$117, d$$72[c$$117], JAM.policy.p2);
      }
      var f$$26 = 0;
      var v2971 = Fc.length;
      var v1335 = f$$26 < v2971;
      for (;v1335;) {
        c$$117 = Fc[f$$26];
        var v4575 = Object.prototype;
        var v3977 = v4575.hasOwnProperty;
        var v2972 = JAM.call(v3977.call, v3977, [d$$72, c$$117], JAM.policy.p4);
        if (v2972) {
          JAM.set(a$$219, c$$117, d$$72[c$$117], JAM.policy.p2);
        }
        f$$26 = f$$26 + 1;
        var v2973 = Fc.length;
        v1335 = f$$26 < v2973;
      }
      e$$47 = e$$47 + 1;
      var v2974 = arguments.length;
      v1336 = e$$47 < v2974;
    }
    return;
  }
  function Ec(a$$218, b$$171) {
    var c$$116;
    for (c$$116 in a$$218) {
      var v2975 = a$$218[c$$116];
      var v1337 = v2975 == b$$171;
      if (v1337) {
        return!0;
      }
    }
    return!1;
  }
  function Dc(a$$217, b$$170, c$$115) {
    var d$$71;
    for (d$$71 in a$$217) {
      var v1338 = a$$217[d$$71];
      JAM.call(b$$170.call, b$$170, [c$$115, v1338, d$$71, a$$217], JAM.policy.p4);
    }
    return;
  }
  function M$$1(a$$213, b$$166) {
    var v1339;
    var v3978 = void 0;
    var v2976 = v3978 !== a$$213;
    if (v2976) {
      v1339 = a$$213;
    } else {
      v1339 = 0;
    }
    this.x = v1339;
    var v1340;
    var v3979 = void 0;
    var v2977 = v3979 !== b$$166;
    if (v2977) {
      v1340 = b$$166;
    } else {
      v1340 = 0;
    }
    this.y = v1340;
    return;
  }
  function L$$1(a$$212, b$$165, c$$113) {
    var v2979 = !c$$113;
    if (v2979) {
      var v2978;
      if (Ha$$1) {
        v2978 = "https";
      } else {
        v2978 = "http";
      }
      c$$113 = v2978;
    }
    var v1341 = [c$$113, "://", a$$212, b$$165];
    return JAM.call(v1341.join, v1341, [""], JAM.policy.p4);
  }
  function Bc(a$$211) {
    var v1342 = a$$211.google_page_location;
    var v2980 = !v1342;
    if (v2980) {
      v1342 = a$$211.google_page_url;
    }
    var b$$164 = v1342;
    var v1343 = "EMPTY" == b$$164;
    if (v1343) {
      b$$164 = a$$211.google_page_url;
    }
    var JSCompiler_inline_result$$20;
    var a$$inline_111 = a$$211;
    a$$inline_111 = a$$inline_111.google_ad_channel;
    var v1344;
    var v2981 = JAM.call(zc.test, zc, [a$$inline_111], JAM.policy.p4);
    if (v2981) {
      v1344 = !0;
    } else {
      v1344 = !1;
    }
    JSCompiler_inline_result$$20 = v1344;
    if (JSCompiler_inline_result$$20) {
      return!0;
    }
    var v2982 = Ga$$1;
    var v3980 = !v2982;
    if (v3980) {
      v2982 = !b$$164;
    }
    var v1345 = v2982;
    if (v1345) {
      return!1;
    }
    b$$164 = JAM.call(b$$164.toString, b$$164, [], JAM.policy.p4);
    var v1346;
    var v3981 = JAM.call(b$$164.indexOf, b$$164, ["http://"], JAM.policy.p4);
    var v2985 = 0 == v3981;
    if (v2985) {
      var v2983 = b$$164.length;
      v1346 = b$$164 = JAM.call(b$$164.substring, b$$164, [7, v2983], JAM.policy.p4);
    } else {
      var v3982 = JAM.call(b$$164.indexOf, b$$164, ["https://"], JAM.policy.p4);
      var v2984 = 0 == v3982;
      if (v2984) {
        var v3983 = b$$164.length;
        v2984 = b$$164 = JAM.call(b$$164.substring, b$$164, [8, v3983], JAM.policy.p4);
      }
      v1346 = v2984;
    }
    v1346;
    a$$211 = JAM.call(b$$164.indexOf, b$$164, ["/"], JAM.policy.p4);
    var v1347 = -1 == a$$211;
    if (v1347) {
      a$$211 = b$$164.length;
    }
    b$$164 = JAM.call(b$$164.substring, b$$164, [0, a$$211], JAM.policy.p4);
    b$$164 = JAM.call(b$$164.split, b$$164, ["."], JAM.policy.p4);
    a$$211 = !1;
    var v2986 = b$$164.length;
    var v1348 = 3 <= v2986;
    if (v1348) {
      var v4576 = b$$164.length;
      var v3984 = v4576 - 3;
      var v2987 = b$$164[v3984];
      a$$211 = v2987 in yc;
    }
    var v2988 = b$$164.length;
    var v1349 = 2 <= v2988;
    if (v1349) {
      var v2989 = a$$211;
      var v3986 = !v2989;
      if (v3986) {
        var v4873 = b$$164.length;
        var v4577 = v4873 - 2;
        var v3985 = b$$164[v4577];
        v2989 = v3985 in yc;
      }
      a$$211 = v2989;
    }
    return a$$211;
  }
  function xc() {
    var a$$209 = JAM.call(J$$1, null, [], JAM.policy.p4);
    var v1350;
    if (a$$209) {
      v1350 = JAM.call(a$$209.Ka, a$$209, [], JAM.policy.p4);
    } else {
      v1350 = "";
    }
    return v1350;
  }
  function J$$1() {
    if (uc) {
    } else {
      var a$$inline_106 = JAM.call(H$$1, null, [], JAM.policy.p4);
      var b$$inline_107 = JAM.new(E$$1, [], JAM.policy.p4);
      var c$$inline_108 = 0;
      var v1351 = a$$inline_106.defaultBucket;
      var d$$inline_109 = v1351.length;
      var v1354 = c$$inline_108 < d$$inline_109;
      for (;v1354;) {
        var v1352 = b$$inline_107.defaultBucket;
        var v2990 = a$$inline_106.defaultBucket;
        var v1353 = v2990[c$$inline_108];
        JAM.call(v1352.push, v1352, [v1353], JAM.policy.p4);
        c$$inline_108 = c$$inline_108 + 1;
        v1354 = c$$inline_108 < d$$inline_109;
      }
      var v1355 = a$$inline_106.layers;
      var v3987 = E$$1.prototype;
      var v2991 = v3987.Ga;
      var v1356 = JAM.call(r$$2, null, [v2991, b$$inline_107], JAM.policy.p4);
      JAM.call(x$$50, null, [v1355, v1356], JAM.policy.p4);
      uc = b$$inline_107;
    }
    return uc;
  }
  function H$$1() {
    var v1357 = JAM.call(wc, null, [], JAM.policy.p4);
    if (v1357) {
      var a$$208 = tc;
      return a$$208;
    }
    a$$208 = JAM.call(mc, null, [], JAM.policy.p4);
    var JSCompiler_inline_result$$29;
    var b$$inline_104 = JAM.new(E$$1, [1, 3, 4, 7, 10, 12, 13, 14, 16, 17, 18, 19], JAM.policy.p4);
    JSCompiler_inline_result$$29 = JAM.call(oc, null, [a$$208, 3, b$$inline_104], JAM.policy.p4);
    return tc = JSCompiler_inline_result$$29;
  }
  function wc() {
    var v2992 = tc;
    if (v2992) {
      v2992 = JAM.call(vc, null, [tc], JAM.policy.p4);
    }
    var v1358 = v2992;
    if (v1358) {
      return!0;
    }
    var a$$207 = JAM.call(mc, null, [], JAM.policy.p4);
    var v1359;
    var v4874 = a$$207 = JAM.call(G$$1, null, [a$$207, 3], JAM.policy.p4);
    if (v4874) {
      v4874 = JAM.call(gb$$1, null, [a$$207], JAM.policy.p4);
    }
    var v4578 = v4874;
    if (v4578) {
      var v4875 = E$$1.prototype;
      v4578 = JAM.call(hb$$1, null, [a$$207, v4875], JAM.policy.p4);
    }
    var v3988 = v4578;
    if (v3988) {
      v3988 = JAM.call(vc, null, [a$$207], JAM.policy.p4);
    }
    var v2993 = v3988;
    if (v2993) {
      tc = a$$207;
      v1359 = !0;
    } else {
      v1359 = !1;
    }
    return v1359;
  }
  function vc(a$$206) {
    try {
      return JAM.call(a$$206.statusz, a$$206, [], JAM.policy.p4);
    } catch (b$$163) {
      return!1;
    }
    return;
  }
  function F$$1(a$$202, b$$159, c$$112) {
    a$$202 = a$$202.S;
    b$$159 = JAM.call(nc, null, [b$$159], JAM.policy.p4);
    var v1360;
    var v3989 = void 0;
    var v3990 = a$$202[b$$159];
    var v2994 = v3989 === v3990;
    if (v2994) {
      v1360 = JAM.set(a$$202, b$$159, c$$112, JAM.policy.p2);
    } else {
      v1360 = a$$202[b$$159];
    }
    return v1360;
  }
  function oc(a$$201, b$$158, c$$111) {
    var v1361 = a$$201.S;
    var v1362 = JAM.call(nc, null, [b$$158], JAM.policy.p4);
    return JAM.set(v1361, v1362, c$$111, JAM.policy.p2);
  }
  function G$$1(a$$200, b$$157) {
    var c$$110 = JAM.call(nc, null, [b$$157], JAM.policy.p4);
    var v1363 = a$$200.S;
    return c$$110 = v1363[c$$110];
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
    var v1364;
    var v3991 = a$$197;
    if (v3991) {
      v3991 = kc[a$$197];
    }
    var v2996 = v3991;
    if (v2996) {
      v1364 = a$$197;
    } else {
      var v2995;
      if (B$$2) {
        v2995 = "google_persistent_state_async";
      } else {
        v2995 = "google_persistent_state";
      }
      v1364 = v2995;
    }
    a$$197 = v1364;
    var v1365 = lc[a$$197];
    if (v1365) {
      return lc[a$$197];
    }
    var v1366 = "google_persistent_state_async" == a$$197;
    if (v1366) {
      var b$$156 = JAM.call(D$$1, null, [], JAM.policy.p4);
      var c$$109 = {};
    } else {
      c$$109 = b$$156 = JAM.call(D$$1, null, [], JAM.policy.p4);
    }
    var d$$70 = b$$156[a$$197];
    var v1367;
    var v4579 = typeof d$$70;
    var v3992 = "object" != v4579;
    var v4581 = !v3992;
    if (v4581) {
      var v4876 = d$$70.S;
      var v4580 = typeof v4876;
      v3992 = "object" != v4580;
    }
    var v2999 = v3992;
    if (v2999) {
      var v2997 = b$$156;
      var v2998 = a$$197;
      var v5192 = JAM.new(jc, [c$$109], JAM.policy.p4);
      v1367 = JAM.set(v2997, v2998, JAM.set(lc, a$$197, v5192, JAM.policy.p2), JAM.policy.p2);
    } else {
      v1367 = JAM.set(lc, a$$197, d$$70, JAM.policy.p2);
    }
    return v1367;
  }
  function jc(a$$196) {
    this.S = a$$196;
    JAM.call(F$$1, null, [this, 3, null], JAM.policy.p4);
    JAM.call(F$$1, null, [this, 4, 0], JAM.policy.p4);
    JAM.call(F$$1, null, [this, 5, 0], JAM.policy.p4);
    JAM.call(F$$1, null, [this, 6, 0], JAM.policy.p4);
    var v3000 = JAM.new(Date, [], JAM.policy.p4);
    var v1368 = JAM.call(v3000.getTime, v3000, [], JAM.policy.p4);
    JAM.call(F$$1, null, [this, 7, v1368], JAM.policy.p4);
    JAM.call(F$$1, null, [this, 8, {}], JAM.policy.p4);
    JAM.call(F$$1, null, [this, 9, {}], JAM.policy.p4);
    JAM.call(F$$1, null, [this, 10, {}], JAM.policy.p4);
    JAM.call(F$$1, null, [this, 11, []], JAM.policy.p4);
    JAM.call(F$$1, null, [this, 12, 0], JAM.policy.p4);
    JAM.call(F$$1, null, [this, 14, {}], JAM.policy.p4);
    return;
  }
  function hc() {
    if (gc) {
    } else {
      var a$$inline_99 = window;
      var v1369 = !0;
      a$$inline_99 = JAM.call(dc, null, [a$$inline_99, v1369], JAM.policy.p4);
      gc = a$$inline_99.win;
    }
    return gc;
  }
  function dc(a$$193, b$$155) {
    var c$$108 = 0;
    var d$$69 = a$$193;
    var e$$46 = 0;
    var v3001 = a$$193.parent;
    var v1371 = a$$193 != v3001;
    for (;v1371;) {
      a$$193 = a$$193.parent;
      e$$46 = e$$46 + 1;
      var v1370 = JAM.call(Kb, null, [a$$193], JAM.policy.p4);
      if (v1370) {
        d$$69 = a$$193;
        c$$108 = e$$46;
      } else {
        if (b$$155) {
          break;
        }
      }
      var v3002 = a$$193.parent;
      v1371 = a$$193 != v3002;
    }
    return{win:d$$69, level:c$$108};
  }
  function E$$1(a$$185) {
    this.defaultBucket = [];
    this.layers = {};
    var b$$148 = 0;
    var c$$105 = arguments.length;
    var v1374 = b$$148 < c$$105;
    for (;v1374;) {
      var v1372 = this.layers;
      var v1373 = arguments[b$$148];
      JAM.set(v1372, v1373, "", JAM.policy.p2);
      b$$148 = b$$148 + 1;
      v1374 = b$$148 < c$$105;
    }
    return;
  }
  function bc(a$$184, b$$147, c$$104) {
    var v1375;
    var v3993 = arguments.length;
    var v3005 = 2 >= v3993;
    if (v3005) {
      var v3003 = Xb.slice;
      v1375 = JAM.call(v3003.call, v3003, [a$$184, b$$147], JAM.policy.p4);
    } else {
      var v3004 = Xb.slice;
      v1375 = JAM.call(v3004.call, v3004, [a$$184, b$$147, c$$104], JAM.policy.p4);
    }
    return v1375;
  }
  function ac(a$$183) {
    var b$$146 = a$$183.length;
    var v1377 = 0 < b$$146;
    if (v1377) {
      var c$$103 = JAM.call(Array, null, [b$$146], JAM.policy.p4);
      var d$$67 = 0;
      var v1376 = d$$67 < b$$146;
      for (;v1376;) {
        introspect(JAM.policy.p2) {
          c$$103[d$$67] = a$$183[d$$67];
        }
        d$$67 = d$$67 + 1;
        v1376 = d$$67 < b$$146;
      }
      return c$$103;
    }
    return[];
  }
  function $b(a$$182, b$$145) {
    var v1378 = JAM.call(Yb, null, [a$$182, b$$145], JAM.policy.p4);
    return 0 <= v1378;
  }
  function Wb(a$$177) {
    function v48() {
      var v1379 = a$$177.document;
      JAM.call(v1379.close, v1379, [], JAM.policy.p4);
      return;
    }
    var v3994 = B$$2;
    if (v3994) {
      var v4582 = a$$177.parent;
      v3994 = a$$177 != v4582;
    }
    var v3006 = v3994;
    if (v3006) {
      v3006 = a$$177.google_async_iframe_close;
    }
    var v1380 = v3006;
    if (v1380) {
      JAM.call(a$$177.setTimeout, a$$177, [v48, 0], JAM.policy.p4);
    }
    return;
  }
  function D$$1() {
    var v3007 = B$$2;
    if (v3007) {
      var v3995 = JAM.call(Kb, null, [Ob], JAM.policy.p4);
      v3007 = !v3995;
    }
    var v1384 = v3007;
    if (v1384) {
      var v1381 = v$$1.domain;
      var a$$170 = "." + v1381;
      var v4583 = JAM.call(a$$170.split, a$$170, ["."], JAM.policy.p4);
      var v3996 = v4583.length;
      var v3008 = 2 < v3996;
      if (v3008) {
        var v3997 = JAM.call(Kb, null, [Ob], JAM.policy.p4);
        v3008 = !v3997;
      }
      var v1382 = v3008;
      for (;v1382;) {
        var v3009 = v$$1;
        var v4584 = JAM.call(a$$170.indexOf, a$$170, ["."], JAM.policy.p4);
        var v3998 = v4584 + 1;
        v3009.domain = a$$170 = JAM.call(a$$170.substr, a$$170, [v3998], JAM.policy.p4);
        Ob = window.parent;
        var v4585 = JAM.call(a$$170.split, a$$170, ["."], JAM.policy.p4);
        var v3999 = v4585.length;
        var v3010 = 2 < v3999;
        if (v3010) {
          var v4000 = JAM.call(Kb, null, [Ob], JAM.policy.p4);
          v3010 = !v4000;
        }
        v1382 = v3010;
      }
      var v1383 = JAM.call(Kb, null, [Ob], JAM.policy.p4);
      var v3011 = !v1383;
      if (v3011) {
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
        JAM.call(b$$133.apply, b$$133, [null, arguments], JAM.policy.p4);
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
      var v4586 = a$$166.location;
      var v4001 = v4586.href;
      var v3012 = !v4001;
      var v1385 = !v3012;
      var v3014 = !v1385;
      if (v3014) {
        var v4002 = a$$166.location;
        var v3013 = v4002.href;
        v1385 = "" === v3013;
      }
      return v1385;
    } catch (b$$132) {
      return!1;
    }
    return;
  }
  function Hb(a$$163) {
    var v3015 = JAM.new(Date, [], JAM.policy.p4);
    var v1386 = JAM.call(v3015.getTime, v3015, [], JAM.policy.p4);
    a$$163 = v1386 - a$$163;
    var v1387;
    var v3016 = 1E4 > a$$163;
    if (v3016) {
      v1387 = a$$163 + "";
    } else {
      v1387 = "M";
    }
    return v1387;
  }
  function Fb(a$$162, b$$130, c$$90) {
    var v1388 = b$$130.google_ad_slot;
    var v1389 = b$$130.google_ad_format;
    var v1390 = b$$130.google_ad_type;
    var v1391 = b$$130.google_ad_width;
    var v1392 = b$$130.google_ad_height;
    b$$130 = [v1388, v1389, v1390, v1391, v1392];
    if (c$$90) {
      var JSCompiler_inline_result$$22;
      var a$$inline_95 = a$$162;
      var b$$inline_96 = [];
      var c$$inline_97 = 0;
      var v3017 = a$$inline_95;
      if (v3017) {
        v3017 = 25 > c$$inline_97;
      }
      var v1394 = v3017;
      for (;v1394;) {
        var v4587 = a$$inline_95.nodeType;
        var v4003 = 9 != v4587;
        if (v4003) {
          v4003 = a$$inline_95.id;
        }
        var v3018 = v4003;
        var v4004 = !v3018;
        if (v4004) {
          v3018 = "";
        }
        var v1393 = v3018;
        JAM.call(b$$inline_96.push, b$$inline_96, [v1393], JAM.policy.p4);
        a$$inline_95 = a$$inline_95.parentNode;
        c$$inline_97 = c$$inline_97 + 1;
        var v3019 = a$$inline_95;
        if (v3019) {
          v3019 = 25 > c$$inline_97;
        }
        v1394 = v3019;
      }
      JSCompiler_inline_result$$22 = JAM.call(b$$inline_96.join, b$$inline_96, [], JAM.policy.p4);
      var v1395 = a$$162 = JSCompiler_inline_result$$22;
      if (v1395) {
        JAM.call(b$$130.push, b$$130, [a$$162], JAM.policy.p4);
      }
    } else {
      var v3020 = JAM.call(Db, null, [a$$162], JAM.policy.p4);
      JAM.call(b$$130.push, b$$130, [v3020], JAM.policy.p4);
      var v3021 = JAM.call(Eb, null, [w$$6], JAM.policy.p4);
      JAM.call(b$$130.push, b$$130, [v3021], JAM.policy.p4);
    }
    var v3022 = JAM.call(b$$130.join, b$$130, [":"], JAM.policy.p4);
    var v1396 = JAM.call(Ab, null, [v3022], JAM.policy.p4);
    return JAM.call(v1396.toString, v1396, [], JAM.policy.p4);
  }
  function Eb(a$$160) {
    var b$$128 = [];
    if (a$$160) {
      try {
        var c$$88 = a$$160.parent;
        var d$$59 = 0;
        var v4005 = c$$88;
        if (v4005) {
          v4005 = c$$88 != a$$160;
        }
        var v3023 = v4005;
        if (v3023) {
          v3023 = 25 > d$$59;
        }
        var v1399 = v3023;
        for (;v1399;) {
          var e$$42 = c$$88.frames;
          var f$$23 = 0;
          var v3024 = e$$42.length;
          var v1398 = f$$23 < v3024;
          for (;v1398;) {
            var v3025 = e$$42[f$$23];
            var v1397 = a$$160 == v3025;
            if (v1397) {
              JAM.call(b$$128.push, b$$128, [f$$23], JAM.policy.p4);
              break;
            }
            f$$23 = f$$23 + 1;
            var v3026 = e$$42.length;
            v1398 = f$$23 < v3026;
          }
          a$$160 = c$$88;
          c$$88 = a$$160.parent;
          d$$59 = d$$59 + 1;
          var v4006 = c$$88;
          if (v4006) {
            v4006 = c$$88 != a$$160;
          }
          var v3027 = v4006;
          if (v3027) {
            v3027 = 25 > d$$59;
          }
          v1399 = v3027;
        }
      } catch (g$$18) {
      }
    }
    return JAM.call(b$$128.join, b$$128, [], JAM.policy.p4);
  }
  function Db(a$$159) {
    var b$$127 = [];
    var c$$87 = 0;
    var v3028 = a$$159;
    if (v3028) {
      v3028 = 25 > c$$87;
    }
    var v1404 = v3028;
    for (;v1404;) {
      var v3029 = a$$159.nodeType;
      var v1400 = 9 != v3029;
      if (v1400) {
        v1400 = a$$159.id;
      }
      var d$$58 = v1400;
      var v1401;
      if (d$$58) {
        v1401 = "/" + d$$58;
      } else {
        v1401 = "";
      }
      d$$58 = v1401;
      var v1402 = a$$159.nodeName;
      if (v1402) {
        var v3030 = a$$159.nodeName;
        v1402 = JAM.call(v3030.toLowerCase, v3030, [], JAM.policy.p4);
      }
      var e$$41 = v1402;
      var v3031 = e$$41 + d$$58;
      var v3032 = JAM.call(Cb, null, [a$$159], JAM.policy.p4);
      var v1403 = v3031 + v3032;
      JAM.call(b$$127.push, b$$127, [v1403], JAM.policy.p4);
      a$$159 = a$$159.parentElement;
      c$$87 = c$$87 + 1;
      var v3033 = a$$159;
      if (v3033) {
        v3033 = 25 > c$$87;
      }
      v1404 = v3033;
    }
    return JAM.call(b$$127.join, b$$127, [], JAM.policy.p4);
  }
  function Cb(a$$158) {
    var b$$126 = a$$158.parentElement;
    var v1405 = a$$158.nodeName;
    var c$$86 = JAM.call(v1405.toLowerCase, v1405, [], JAM.policy.p4);
    if (b$$126) {
      b$$126 = b$$126.childNodes;
      var d$$57 = 0;
      var e$$40 = 0;
      var v3034 = b$$126.length;
      var v1408 = e$$40 < v3034;
      for (;v1408;) {
        var f$$22 = b$$126[e$$40];
        var v3035 = f$$22.nodeName;
        if (v3035) {
          var v4588 = f$$22.nodeName;
          var v4007 = JAM.call(v4588.toLowerCase, v4588, [], JAM.policy.p4);
          v3035 = v4007 == c$$86;
        }
        var v1407 = v3035;
        if (v1407) {
          var v1406 = a$$158 == f$$22;
          if (v1406) {
            return "." + d$$57;
          }
          d$$57 = d$$57 + 1;
        }
        e$$40 = e$$40 + 1;
        var v3036 = b$$126.length;
        v1408 = e$$40 < v3036;
      }
    }
    return "";
  }
  function Ab(a$$156, b$$124) {
    var c$$84 = a$$156.length;
    var v1409 = 0 == c$$84;
    if (v1409) {
      return 0;
    }
    var d$$56 = b$$124 || 305419896;
    var e$$39 = 0;
    var v1411 = e$$39 < c$$84;
    for (;v1411;) {
      var f$$21 = JAM.call(a$$156.charCodeAt, a$$156, [e$$39], JAM.policy.p4);
      var v4589 = d$$56 << 5;
      var v4590 = d$$56 >> 2;
      var v4008 = v4589 + v4590;
      var v3037 = v4008 + f$$21;
      var v1410 = v3037 & 4294967295;
      d$$56 = d$$56 ^ v1410;
      e$$39 = e$$39 + 1;
      v1411 = e$$39 < c$$84;
    }
    var v1412;
    var v3038 = 0 < d$$56;
    if (v3038) {
      v1412 = d$$56;
    } else {
      v1412 = 4294967296 + d$$56;
    }
    return v1412;
  }
  function yb(a$$154) {
    var b$$123 = "google_unique_id";
    a$$154 = a$$154[b$$123];
    var v1413;
    var v4009 = typeof a$$154;
    var v3039 = "number" == v4009;
    if (v3039) {
      v1413 = a$$154;
    } else {
      v1413 = 0;
    }
    return v1413;
  }
  function wb(a$$153) {
    var b$$122 = "google_unique_id";
    var v1414;
    var v3040 = a$$153[b$$122];
    if (v3040) {
      var v4010 = a$$153[b$$122];
      v1414 = JAM.set(a$$153, b$$122, v4010 + 1, JAM.policy.p2);
    } else {
      v1414 = JAM.set(a$$153, b$$122, 1, JAM.policy.p2);
    }
    v1414;
    return a$$153[b$$122];
  }
  function vb(a$$152, b$$121) {
    var v4011 = JAM.call(Math.random, Math, [], JAM.policy.p4);
    var v3041 = 1E-4 > v4011;
    var v1419 = !v3041;
    if (v1419) {
      var c$$83 = JAM.call(Math.random, Math, [], JAM.policy.p4);
      var v1418 = c$$83 < b$$121;
      if (v1418) {
        try {
          var d$$55 = JAM.new(Uint16Array, [1], JAM.policy.p4);
          var v1415 = window.crypto;
          JAM.call(v1415.getRandomValues, v1415, [d$$55], JAM.policy.p4);
          var v1416 = d$$55[0];
          c$$83 = v1416 / 65536;
        } catch (e$$38) {
          c$$83 = JAM.call(Math.random, Math, [], JAM.policy.p4);
        }
        var v3042 = a$$152.length;
        var v1417 = c$$83 * v3042;
        c$$83 = JAM.call(Math.floor, Math, [v1417], JAM.policy.p4);
        return a$$152[c$$83];
      }
    }
    return null;
  }
  function ob$$1(a$$151) {
    a$$151 = a$$151 || window;
    try {
      var v1420 = a$$151.history;
      return v1420.length;
    } catch (b$$120) {
      return 0;
    }
    return;
  }
  function nb$$1(a$$150, b$$119) {
    var v1421 = a$$150.google_image_requests;
    var v3043 = !v1421;
    if (v3043) {
      a$$150.google_image_requests = [];
    }
    var v1422 = a$$150.document;
    var c$$82 = JAM.call(v1422.createElement, v1422, ["img"], JAM.policy.p4);
    c$$82.src = b$$119;
    var v1423 = a$$150.google_image_requests;
    JAM.call(v1423.push, v1423, [c$$82], JAM.policy.p4);
    return;
  }
  function mb$$1(a$$149) {
    function v50() {
      a$$149.google_onload_fired = !0;
      return;
    }
    var v1424 = "google_onload_fired" in a$$149;
    var v3044 = !v1424;
    if (v3044) {
      a$$149.google_onload_fired = !1;
      JAM.call(kb$$1, null, [a$$149, v50], JAM.policy.p4);
    }
    return;
  }
  function A$$1(a$$148, b$$118, c$$81, d$$54) {
    var v1425;
    var v3046 = a$$148.removeEventListener;
    if (v3046) {
      var v4591 = d$$54;
      var v4877 = !v4591;
      if (v4877) {
        v4591 = !1;
      }
      var v4012 = v4591;
      JAM.call(a$$148.removeEventListener, a$$148, [b$$118, c$$81, v4012], JAM.policy.p4);
      v1425 = !0;
    } else {
      var v3045;
      var v4013 = a$$148.detachEvent;
      if (v4013) {
        var v4592 = "on" + b$$118;
        JAM.call(a$$148.detachEvent, a$$148, [v4592, c$$81], JAM.policy.p4);
        v3045 = !0;
      } else {
        v3045 = !1;
      }
      v1425 = v3045;
    }
    return v1425;
  }
  function lb$$1(a$$147, b$$117, c$$80, d$$53, e$$37) {
    c$$80 = JAM.call(r$$2, null, [d$$53, c$$80], JAM.policy.p4);
    var v1426;
    var v3047 = JAM.call(y$$31, null, [a$$147, b$$117, c$$80, e$$37], JAM.policy.p4);
    if (v3047) {
      v1426 = c$$80;
    } else {
      v1426 = null;
    }
    return v1426;
  }
  function y$$31(a$$146, b$$116, c$$79, d$$52) {
    var v1427;
    var v3049 = a$$146.addEventListener;
    if (v3049) {
      var v4593 = d$$52;
      var v4878 = !v4593;
      if (v4878) {
        v4593 = !1;
      }
      var v4014 = v4593;
      JAM.call(a$$146.addEventListener, a$$146, [b$$116, c$$79, v4014], JAM.policy.p4);
      v1427 = !0;
    } else {
      var v3048;
      var v4015 = a$$146.attachEvent;
      if (v4015) {
        var v4594 = "on" + b$$116;
        JAM.call(a$$146.attachEvent, a$$146, [v4594, c$$79], JAM.policy.p4);
        v3048 = !0;
      } else {
        v3048 = !1;
      }
      v1427 = v3048;
    }
    return v1427;
  }
  function ib$$1(a$$145, b$$115) {
    var v3050 = arguments.length;
    var v1428 = 2 > v3050;
    if (v1428) {
      return a$$145.length;
    }
    var c$$78 = 1;
    var d$$51 = arguments.length;
    var v1430 = c$$78 < d$$51;
    for (;v1430;) {
      var v1429 = arguments[c$$78];
      JAM.call(a$$145.push, a$$145, [v1429], JAM.policy.p4);
      c$$78 = c$$78 + 1;
      v1430 = c$$78 < d$$51;
    }
    return a$$145.length;
  }
  function hb$$1(a$$144, b$$113) {
    function v51(b$$114, e$$36) {
      var v4016 = c$$77;
      if (v4016) {
        v4016 = e$$36 in a$$144;
      }
      var v3051 = v4016;
      if (v3051) {
        var v4017 = typeof b$$114;
        var v4595 = a$$144[e$$36];
        var v4018 = typeof v4595;
        v3051 = v4017 == v4018;
      }
      var v1431 = v3051;
      var v3052 = !v1431;
      if (v3052) {
        c$$77 = !1;
      }
      return;
    }
    var v1432 = !a$$144;
    if (v1432) {
      return!1;
    }
    var c$$77 = !0;
    JAM.call(x$$50, null, [b$$113, v51], JAM.policy.p4);
    return c$$77;
  }
  function gb$$1(a$$143) {
    var v3053 = !a$$143;
    var v1433 = !v3053;
    if (v1433) {
      var v4019 = typeof a$$143;
      var v3054 = "object" == v4019;
      var v4021 = !v3054;
      if (v4021) {
        var v4020 = typeof a$$143;
        v3054 = "function" == v4020;
      }
      v1433 = v3054;
    }
    return v1433;
  }
  function fb$$1(a$$142) {
    var v4022 = !a$$142;
    var v3055 = !v4022;
    if (v3055) {
      var v4023 = typeof a$$142;
      v3055 = "function" == v4023;
    }
    var v1434 = v3055;
    if (v1434) {
      var v4024 = a$$142.call;
      var v3056 = !v4024;
      v1434 = !v3056;
    }
    return v1434;
  }
  function x$$50(a$$141, b$$112) {
    var c$$76;
    for (c$$76 in a$$141) {
      var v4025 = Object.prototype;
      var v3057 = v4025.hasOwnProperty;
      var v1435 = JAM.call(v3057.call, v3057, [a$$141, c$$76], JAM.policy.p4);
      if (v1435) {
        var v3058 = a$$141[c$$76];
        JAM.call(b$$112.call, b$$112, [null, v3058, c$$76, a$$141], JAM.policy.p4);
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
      var v1436 = b$$109;
      var v1437 = JAM.call(c$$74.toUpperCase, c$$74, [], JAM.policy.p4);
      return v1436 + v1437;
    }
    var v1438;
    var v3060 = JAM.call(p$$1, null, [b$$108], JAM.policy.p4);
    if (v3060) {
      var v4026 = JAM.call(String, null, [b$$108], JAM.policy.p4);
      var v3059 = JAM.call(v4026.replace, v4026, [/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1"], JAM.policy.p4);
      v1438 = JAM.call(v3059.replace, v3059, [/\x08/g, "\\x08"], JAM.policy.p4);
    } else {
      v1438 = "\\s";
    }
    var c$$73 = v1438;
    var v1439;
    if (c$$73) {
      var v3061 = "|[" + c$$73;
      v1439 = v3061 + "]+";
    } else {
      v1439 = "";
    }
    c$$73 = v1439;
    var v3062 = "(^" + c$$73;
    var v1440 = v3062 + ")([a-z])";
    c$$73 = JAM.call(RegExp, null, [v1440, "g"], JAM.policy.p4);
    return JAM.call(a$$137.replace, a$$137, [c$$73, v52], JAM.policy.p4);
  }
  function db$$1(a$$135) {
    function v53(a$$136, c$$72) {
      return JAM.call(c$$72.toUpperCase, c$$72, [], JAM.policy.p4);
    }
    var v1441 = JAM.call(String, null, [a$$135], JAM.policy.p4);
    return JAM.call(v1441.replace, v1441, [/\-([a-z])/g, v53], JAM.policy.p4);
  }
  function bb$$1(a$$134, b$$107) {
    var v1442;
    var v3064 = a$$134 < b$$107;
    if (v3064) {
      v1442 = -1;
    } else {
      var v3063;
      var v4027 = a$$134 > b$$107;
      if (v4027) {
        v3063 = 1;
      } else {
        v3063 = 0;
      }
      v1442 = v3063;
    }
    return v1442;
  }
  function ab$$1(a$$131) {
    a$$131 = JAM.call(String, null, [a$$131], JAM.policy.p4);
    var v1443 = a$$131.quote;
    if (v1443) {
      return JAM.call(a$$131.quote, a$$131, [], JAM.policy.p4);
    }
    var b$$104 = ['"'];
    var c$$69 = 0;
    var v3065 = a$$131.length;
    var v1451 = c$$69 < v3065;
    for (;v1451;) {
      var d$$49 = JAM.call(a$$131.charAt, a$$131, [c$$69], JAM.policy.p4);
      var e$$34 = JAM.call(d$$49.charCodeAt, d$$49, [0], JAM.policy.p4);
      var JSCompiler_temp_const$$24 = c$$69 + 1;
      var JSCompiler_temp$$25;
      var v1450 = JSCompiler_temp$$25 = Ya$$1[d$$49];
      if (v1450) {
      } else {
        var JSCompiler_temp$$26;
        var v3066 = 31 < e$$34;
        if (v3066) {
          v3066 = 127 > e$$34;
        }
        var v1449 = v3066;
        if (v1449) {
          JSCompiler_temp$$26 = d$$49;
        } else {
          JSCompiler_inline_label_$a$$1_94: {
            var a$$inline_91 = d$$49;
            var v1444 = a$$inline_91 in Za$$1;
            if (v1444) {
              JSCompiler_temp$$26 = Za$$1[a$$inline_91];
              break JSCompiler_inline_label_$a$$1_94;
            }
            var v1445 = a$$inline_91 in Ya$$1;
            if (v1445) {
              JSCompiler_temp$$26 = JAM.set(Za$$1, a$$inline_91, Ya$$1[a$$inline_91], JAM.policy.p2);
              break JSCompiler_inline_label_$a$$1_94;
            }
            var b$$inline_92 = a$$inline_91;
            var c$$inline_93 = JAM.call(a$$inline_91.charCodeAt, a$$inline_91, [0], JAM.policy.p4);
            var v3067 = 31 < c$$inline_93;
            if (v3067) {
              v3067 = 127 > c$$inline_93;
            }
            var v1448 = v3067;
            if (v1448) {
              b$$inline_92 = a$$inline_91;
            } else {
              var v1447 = 256 > c$$inline_93;
              if (v1447) {
                b$$inline_92 = "\\x";
                var v4028 = 16 > c$$inline_93;
                var v4596 = !v4028;
                if (v4596) {
                  v4028 = 256 < c$$inline_93;
                }
                var v1446 = v4028;
                if (v1446) {
                  b$$inline_92 = b$$inline_92 + "0";
                }
              } else {
                b$$inline_92 = "\\u";
                var v3068 = 4096 > c$$inline_93;
                if (v3068) {
                  b$$inline_92 = b$$inline_92 + "0";
                }
              }
              var v3069 = b$$inline_92;
              var v4029 = JAM.call(c$$inline_93.toString, c$$inline_93, [16], JAM.policy.p4);
              var v3070 = JAM.call(v4029.toUpperCase, v4029, [], JAM.policy.p4);
              b$$inline_92 = v3069 + v3070;
            }
            JSCompiler_temp$$26 = JAM.set(Za$$1, a$$inline_91, b$$inline_92, JAM.policy.p2);
          }
        }
        JSCompiler_temp$$25 = JSCompiler_temp$$26;
      }
      introspect(JAM.policy.p2) {
        b$$104[JSCompiler_temp_const$$24] = JSCompiler_temp$$25;
      }
      c$$69 = c$$69 + 1;
      var v3071 = a$$131.length;
      v1451 = c$$69 < v3071;
    }
    JAM.call(b$$104.push, b$$104, ['"'], JAM.policy.p4);
    return JAM.call(b$$104.join, b$$104, [""], JAM.policy.p4);
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
          var v3072 = JAM.call(c$$67.charAt, c$$67, [0], JAM.policy.p4);
          var v1454 = "#" == v3072;
          if (v1454) {
            var v3073 = JAM.call(c$$67.substr, c$$67, [1], JAM.policy.p4);
            var v1452 = "0" + v3073;
            var d$$47 = JAM.call(Number, null, [v1452], JAM.policy.p4);
            var v3074 = JAM.call(isNaN, null, [d$$47], JAM.policy.p4);
            var v1453 = !v3074;
            if (v1453) {
              return JAM.call(String.fromCharCode, String, [d$$47], JAM.policy.p4);
            }
          }
          return a$$129;
      }
      return;
    }
    return JAM.call(a$$128.replace, a$$128, [/&([^;]+);/g, v54], JAM.policy.p4);
  }
  function Ta$$1(a$$126, b$$101) {
    function v55(a$$127, b$$102) {
      var g$$16 = c$$66[a$$127];
      if (g$$16) {
        return g$$16;
      }
      var v3075 = JAM.call(b$$102.charAt, b$$102, [0], JAM.policy.p4);
      var v1457 = "#" == v3075;
      if (v1457) {
        var v3076 = JAM.call(b$$102.substr, b$$102, [1], JAM.policy.p4);
        var v1455 = "0" + v3076;
        var h$$12 = JAM.call(Number, null, [v1455], JAM.policy.p4);
        var v1456 = JAM.call(isNaN, null, [h$$12], JAM.policy.p4);
        var v3077 = !v1456;
        if (v3077) {
          g$$16 = JAM.call(String.fromCharCode, String, [h$$12], JAM.policy.p4);
        }
      }
      var v3078 = !g$$16;
      if (v3078) {
        JAM.set(d$$46, "innerHTML", a$$127 + " ");
        var v4597 = d$$46.firstChild;
        var v4030 = v4597.nodeValue;
        g$$16 = JAM.call(v4030.slice, v4030, [0, -1], JAM.policy.p4);
      }
      return JAM.set(c$$66, a$$127, g$$16, JAM.policy.p2);
    }
    var c$$66 = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'};
    var d$$46;
    var v1458;
    if (b$$101) {
      v1458 = JAM.call(b$$101.createElement, b$$101, ["div"], JAM.policy.p4);
    } else {
      v1458 = JAM.call(document.createElement, document, ["div"], JAM.policy.p4);
    }
    d$$46 = v1458;
    return JAM.call(a$$126.replace, a$$126, [Wa$$1, v55], JAM.policy.p4);
  }
  function Va$$1(a$$125) {
    var v1459;
    var v4031 = JAM.call(a$$125.indexOf, a$$125, ["&"], JAM.policy.p4);
    var v3080 = -1 != v4031;
    if (v3080) {
      var v3079;
      var v4032 = "document" in m$$3;
      if (v4032) {
        v3079 = JAM.call(Ta$$1, null, [a$$125], JAM.policy.p4);
      } else {
        v3079 = JAM.call(Ua$$1, null, [a$$125], JAM.policy.p4);
      }
      v1459 = v3079;
    } else {
      v1459 = a$$125;
    }
    return v1459;
  }
  function Sa$$1(a$$124, b$$100) {
    if (b$$100) {
      var v4033 = JAM.call(a$$124.replace, a$$124, [Na$$1, "&amp;"], JAM.policy.p4);
      var v3081 = JAM.call(v4033.replace, v4033, [Oa$$1, "&lt;"], JAM.policy.p4);
      var v1460 = JAM.call(v3081.replace, v3081, [Pa$$1, "&gt;"], JAM.policy.p4);
      return JAM.call(v1460.replace, v1460, [Qa$$1, "&quot;"], JAM.policy.p4);
    }
    var v3082 = JAM.call(Ra$$1.test, Ra$$1, [a$$124], JAM.policy.p4);
    var v1461 = !v3082;
    if (v1461) {
      return a$$124;
    }
    var v3083 = JAM.call(a$$124.indexOf, a$$124, ["&"], JAM.policy.p4);
    var v1462 = -1 != v3083;
    if (v1462) {
      a$$124 = JAM.call(a$$124.replace, a$$124, [Na$$1, "&amp;"], JAM.policy.p4);
    }
    var v3084 = JAM.call(a$$124.indexOf, a$$124, ["<"], JAM.policy.p4);
    var v1463 = -1 != v3084;
    if (v1463) {
      a$$124 = JAM.call(a$$124.replace, a$$124, [Oa$$1, "&lt;"], JAM.policy.p4);
    }
    var v3085 = JAM.call(a$$124.indexOf, a$$124, [">"], JAM.policy.p4);
    var v1464 = -1 != v3085;
    if (v1464) {
      a$$124 = JAM.call(a$$124.replace, a$$124, [Pa$$1, "&gt;"], JAM.policy.p4);
    }
    var v3086 = JAM.call(a$$124.indexOf, a$$124, ['"'], JAM.policy.p4);
    var v1465 = -1 != v3086;
    if (v1465) {
      a$$124 = JAM.call(a$$124.replace, a$$124, [Qa$$1, "&quot;"], JAM.policy.p4);
    }
    return a$$124;
  }
  function La$$1(a$$123) {
    var v1466;
    if (a$$123) {
      v1466 = "googlesyndication";
    } else {
      v1466 = JAM.call(ma$$1, null, ["", "googlesyndication"], JAM.policy.p4);
    }
    return v1466;
  }
  function Ja$$1() {
    return JAM.call(ma$$1, null, ["", "doubleclick"], JAM.policy.p4);
  }
  function Da$$1() {
    var a$$122 = "r20131120";
    return a$$122;
  }
  function ma$$1(a$$121, b$$99) {
    var v1467 = !a$$121;
    if (v1467) {
      return b$$99;
    }
    var c$$65 = JAM.call(a$$121.match, a$$121, [la$$1], JAM.policy.p4);
    var v1468;
    if (c$$65) {
      v1468 = c$$65[0];
    } else {
      v1468 = b$$99;
    }
    return v1468;
  }
  function ka$$1(a$$120, b$$98) {
    var v1469;
    var v3088 = JAM.call(/^true$/.test, /^true$/, [a$$120], JAM.policy.p4);
    if (v3088) {
      v1469 = !0;
    } else {
      var v3087;
      var v4034 = JAM.call(/^false$/.test, /^false$/, [a$$120], JAM.policy.p4);
      if (v4034) {
        v3087 = !1;
      } else {
        v3087 = b$$98;
      }
      v1469 = v3087;
    }
    return v1469;
  }
  function t$$1(a$$119, b$$97) {
    var c$$64 = JAM.call(parseFloat, null, [a$$119], JAM.policy.p4);
    var v1470;
    var v4598 = JAM.call(isNaN, null, [c$$64], JAM.policy.p4);
    var v4879 = !v4598;
    if (v4879) {
      v4598 = 1 < c$$64;
    }
    var v4035 = v4598;
    var v4599 = !v4035;
    if (v4599) {
      v4035 = 0 > c$$64;
    }
    var v3089 = v4035;
    if (v3089) {
      v1470 = b$$97;
    } else {
      v1470 = c$$64;
    }
    return v1470;
  }
  function ja$$1(a$$118, b$$96) {
    function c$$63() {
      return;
    }
    c$$63.prototype = b$$96.prototype;
    a$$118.md = b$$96.prototype;
    var v1471 = a$$118;
    var v5193 = JAM.new(c$$63, [], JAM.policy.p4);
    v1471.prototype = v5193;
    var v1472 = a$$118.prototype;
    v1472.constructor = a$$118;
    return;
  }
  function ga$$1(a$$115, b$$92) {
    function v56() {
      var b$$93 = JAM.call(c$$60.slice, c$$60, [], JAM.policy.p4);
      var v1473 = b$$93.push;
      JAM.call(v1473.apply, v1473, [b$$93, arguments], JAM.policy.p4);
      return JAM.call(a$$115.apply, a$$115, [this, b$$93], JAM.policy.p4);
    }
    var v3090 = Array.prototype;
    var v1474 = v3090.slice;
    var c$$60 = JAM.call(v1474.call, v1474, [arguments, 1], JAM.policy.p4);
    return v56;
  }
  function r$$2(a$$114, b$$91, c$$59) {
    var v1475;
    var v4600 = Function.prototype;
    var v4036 = v4600.bind;
    if (v4036) {
      var v5072 = Function.prototype;
      var v5023 = v5072.bind;
      var v4880 = JAM.call(v5023.toString, v5023, [], JAM.policy.p4);
      var v4601 = JAM.call(v4880.indexOf, v4880, ["native code"], JAM.policy.p4);
      v4036 = -1 != v4601;
    }
    var v3091 = v4036;
    if (v3091) {
      v1475 = ea$$1;
    } else {
      v1475 = fa$$1;
    }
    r$$2 = v1475;
    return JAM.call(r$$2.apply, r$$2, [null, arguments], JAM.policy.p4);
  }
  function fa$$1(a$$113, b$$90, c$$57) {
    function v58() {
      return JAM.call(a$$113.apply, a$$113, [b$$90, arguments], JAM.policy.p4);
    }
    function v57() {
      var v3092 = Array.prototype;
      var v1476 = v3092.slice;
      var c$$58 = JAM.call(v1476.call, v1476, [arguments], JAM.policy.p4);
      var v3093 = Array.prototype;
      var v1477 = v3093.unshift;
      JAM.call(v1477.apply, v1477, [c$$58, d$$45], JAM.policy.p4);
      return JAM.call(a$$113.apply, a$$113, [b$$90, c$$58], JAM.policy.p4);
    }
    var v1478 = !a$$113;
    if (v1478) {
      throw JAM.call(Error, null, [], JAM.policy.p4);
    }
    var v3094 = arguments.length;
    var v1480 = 2 < v3094;
    if (v1480) {
      var v3095 = Array.prototype;
      var v1479 = v3095.slice;
      var d$$45 = JAM.call(v1479.call, v1479, [arguments, 2], JAM.policy.p4);
      return v57;
    }
    return v58;
  }
  function ea$$1(a$$112, b$$89, c$$56) {
    var v1481 = a$$112.call;
    var v1482 = a$$112.bind;
    return JAM.call(v1481.apply, v1481, [v1482, arguments], JAM.policy.p4);
  }
  function da$$1(a$$111) {
    var b$$88 = typeof a$$111;
    var v3096 = "object" == b$$88;
    if (v3096) {
      v3096 = null != a$$111;
    }
    var v1483 = v3096;
    var v3097 = !v1483;
    if (v3097) {
      v1483 = "function" == b$$88;
    }
    return v1483;
  }
  function q$$3(a$$110) {
    var v1484 = typeof a$$110;
    return "number" == v1484;
  }
  function p$$1(a$$109) {
    var v1485 = typeof a$$109;
    return "string" == v1485;
  }
  function ca$$1(a$$108) {
    var b$$87 = JAM.call(ba$$1, null, [a$$108], JAM.policy.p4);
    var v1486 = "array" == b$$87;
    var v3099 = !v1486;
    if (v3099) {
      var v3098 = "object" == b$$87;
      if (v3098) {
        var v4602 = a$$108.length;
        var v4037 = typeof v4602;
        v3098 = "number" == v4037;
      }
      v1486 = v3098;
    }
    return v1486;
  }
  function n$$2(a$$107) {
    var v1487 = JAM.call(ba$$1, null, [a$$107], JAM.policy.p4);
    return "array" == v1487;
  }
  function ba$$1(a$$106) {
    var b$$86 = typeof a$$106;
    var v1495 = "object" == b$$86;
    if (v1495) {
      if (a$$106) {
        var v1488 = a$$106 instanceof Array;
        if (v1488) {
          return "array";
        }
        var v1489 = a$$106 instanceof Object;
        if (v1489) {
          return b$$86;
        }
        var v3100 = Object.prototype;
        var v1490 = v3100.toString;
        var c$$55 = JAM.call(v1490.call, v1490, [a$$106], JAM.policy.p4);
        var v1491 = "[object Window]" == c$$55;
        if (v1491) {
          return "object";
        }
        var v3101 = "[object Array]" == c$$55;
        var v4039 = !v3101;
        if (v4039) {
          var v5073 = a$$106.length;
          var v5024 = typeof v5073;
          var v4881 = "number" == v5024;
          if (v4881) {
            var v5074 = a$$106.splice;
            var v5025 = typeof v5074;
            v4881 = "undefined" != v5025;
          }
          var v4603 = v4881;
          if (v4603) {
            var v5026 = a$$106.propertyIsEnumerable;
            var v4882 = typeof v5026;
            v4603 = "undefined" != v4882;
          }
          var v4038 = v4603;
          if (v4038) {
            var v4604 = JAM.call(a$$106.propertyIsEnumerable, a$$106, ["splice"], JAM.policy.p4);
            v4038 = !v4604;
          }
          v3101 = v4038;
        }
        var v1492 = v3101;
        if (v1492) {
          return "array";
        }
        var v3102 = "[object Function]" == c$$55;
        var v4041 = !v3102;
        if (v4041) {
          var v5027 = a$$106.call;
          var v4883 = typeof v5027;
          var v4605 = "undefined" != v4883;
          if (v4605) {
            var v5028 = a$$106.propertyIsEnumerable;
            var v4884 = typeof v5028;
            v4605 = "undefined" != v4884;
          }
          var v4040 = v4605;
          if (v4040) {
            var v4606 = JAM.call(a$$106.propertyIsEnumerable, a$$106, ["call"], JAM.policy.p4);
            v4040 = !v4606;
          }
          v3102 = v4040;
        }
        var v1493 = v3102;
        if (v1493) {
          return "function";
        }
      } else {
        return "null";
      }
    } else {
      var v3103 = "function" == b$$86;
      if (v3103) {
        var v4607 = a$$106.call;
        var v4042 = typeof v4607;
        v3103 = "undefined" == v4042;
      }
      var v1494 = v3103;
      if (v1494) {
        return "object";
      }
    }
    return b$$86;
  }
  function aa$$1(a$$105, b$$85, c$$54) {
    a$$105 = JAM.call(a$$105.split, a$$105, ["."], JAM.policy.p4);
    c$$54 = c$$54 || m$$3;
    var v4043 = a$$105[0];
    var v3104 = v4043 in c$$54;
    var v4045 = !v3104;
    if (v4045) {
      var v4044 = c$$54.execScript;
      v3104 = !v4044;
    }
    var v1496 = v3104;
    var v3106 = !v1496;
    if (v3106) {
      var v4046 = a$$105[0];
      var v3105 = "var " + v4046;
      JAM.call(c$$54.execScript, c$$54, [v3105], JAM.policy.p4);
    }
    var d$$44;
    var v3107 = a$$105.length;
    if (v3107) {
      v3107 = d$$44 = JAM.call(a$$105.shift, a$$105, [], JAM.policy.p4);
    }
    var v1498 = v3107;
    for (;v1498;) {
      var v1497;
      var v4047 = a$$105.length;
      var v4609 = !v4047;
      if (v4609) {
        var v4608 = void 0;
        v4047 = v4608 === b$$85;
      }
      var v3109 = v4047;
      if (v3109) {
        var v3108;
        var v4048 = c$$54[d$$44];
        if (v4048) {
          v3108 = c$$54[d$$44];
        } else {
          v3108 = JAM.set(c$$54, d$$44, {}, JAM.policy.p2);
        }
        v1497 = c$$54 = v3108;
      } else {
        v1497 = JAM.set(c$$54, d$$44, b$$85, JAM.policy.p2);
      }
      v1497;
      var v3110 = a$$105.length;
      if (v3110) {
        v3110 = d$$44 = JAM.call(a$$105.shift, a$$105, [], JAM.policy.p4);
      }
      v1498 = v3110;
    }
    return;
  }
  function jb$$1(a$$70, b$$56, c$$33, d$$25) {
    function v60() {
      JAM.call(f$$10.appendChild, f$$10, [e$$20], JAM.policy.p4);
      return;
    }
    function v59() {
      var v4049 = e$$20.readyState;
      var v3111 = "complete" == v4049;
      var v4051 = !v3111;
      if (v4051) {
        var v4050 = e$$20.readyState;
        v3111 = "loaded" == v4050;
      }
      var v1499 = v3111;
      if (v1499) {
        try {
          JAM.call(b$$56, null, [], JAM.policy.p4);
        } catch (a$$71) {
        }
      }
      return;
    }
    d$$25 = d$$25 || document;
    var e$$20 = JAM.call(d$$25.createElement, d$$25, ["script"], JAM.policy.p4);
    e$$20.type = "text/javascript";
    if (b$$56) {
      var v3112;
      var v4610 = void 0;
      var v4611 = e$$20.onreadystatechange;
      var v4052 = v4610 !== v4611;
      if (v4052) {
        v3112 = JAM.set(e$$20, "onreadystatechange", v59);
      } else {
        v3112 = JAM.set(e$$20, "onload", b$$56);
      }
      v3112;
    }
    if (c$$33) {
      e$$20.id = c$$33;
    }
    e$$20.src = a$$70;
    var v1500 = JAM.call(d$$25.getElementsByTagName, d$$25, ["head"], JAM.policy.p4);
    var f$$10 = v1500[0];
    var v1501 = !f$$10;
    if (v1501) {
      return!1;
    }
    try {
      JAM.call(window.setTimeout, window, [v60, 0], JAM.policy.p4);
    } catch (g$$8) {
      return!1;
    }
    return!0;
  }
  function kb$$1(a$$72, b$$57) {
    return JAM.call(y$$31, null, [a$$72, "load", b$$57], JAM.policy.p4);
  }
  function rb$$1() {
    var JSCompiler_inline_result$$74;
    var a$$inline_78 = "msie";
    var v1502;
    var v3115 = a$$inline_78 in qb$$1;
    if (v3115) {
      v1502 = qb$$1[a$$inline_78];
    } else {
      var v3113 = qb$$1;
      var v3114 = a$$inline_78;
      var v4885 = navigator.userAgent;
      var v4612 = JAM.call(v4885.toLowerCase, v4885, [], JAM.policy.p4);
      var v4053 = JAM.call(v4612.indexOf, v4612, [a$$inline_78], JAM.policy.p4);
      v1502 = JAM.set(v3113, v3114, -1 != v4053, JAM.policy.p2);
    }
    JSCompiler_inline_result$$74 = v1502;
    var v1503 = JSCompiler_inline_result$$74;
    if (v1503) {
      var v3116 = window.opera;
      v1503 = !v3116;
    }
    return v1503;
  }
  function tb() {
    var v3117 = navigator.plugins;
    if (v3117) {
      var v4054 = navigator.mimeTypes;
      v3117 = v4054.length;
    }
    var v1510 = v3117;
    if (v1510) {
      var v1504 = navigator.plugins;
      var a$$75 = v1504["Shockwave Flash"];
      var v3118 = a$$75;
      if (v3118) {
        v3118 = a$$75.description;
      }
      var v1506 = v3118;
      if (v1506) {
        var v3119 = a$$75.description;
        var v1505 = JAM.call(v3119.replace, v3119, [/([a-zA-Z]|\s)+/, ""], JAM.policy.p4);
        return JAM.call(v1505.replace, v1505, [/(\s)+r/, "."], JAM.policy.p4);
      }
    } else {
      var v3120 = navigator.userAgent;
      if (v3120) {
        var v4613 = navigator.userAgent;
        var v4055 = JAM.call(v4613.indexOf, v4613, ["Windows CE"], JAM.policy.p4);
        v3120 = 0 <= v4055;
      }
      var v1507 = v3120;
      if (v1507) {
        a$$75 = 3;
        var b$$58 = 1;
        for (;b$$58;) {
          try {
            var v4056 = a$$75 + 1;
            var v3121 = "ShockwaveFlash.ShockwaveFlash." + v4056;
            b$$58 = JAM.new(ActiveXObject, [v3121], JAM.policy.p4);
            a$$75 = a$$75 + 1;
          } catch (c$$34) {
            b$$58 = null;
          }
        }
        return JAM.call(a$$75.toString, a$$75, [], JAM.policy.p4);
      }
      var v1509 = JAM.call(rb$$1, null, [], JAM.policy.p4);
      if (v1509) {
        b$$58 = null;
        try {
          b$$58 = JAM.new(ActiveXObject, ["ShockwaveFlash.ShockwaveFlash.7"], JAM.policy.p4);
        } catch (d$$26) {
          a$$75 = 0;
          try {
            b$$58 = JAM.new(ActiveXObject, ["ShockwaveFlash.ShockwaveFlash.6"], JAM.policy.p4);
            a$$75 = 6;
            b$$58.AllowScriptAccess = "always";
          } catch (e$$21) {
            var v1508 = 6 == a$$75;
            if (v1508) {
              return JAM.call(a$$75.toString, a$$75, [], JAM.policy.p4);
            }
          }
          try {
            b$$58 = JAM.new(ActiveXObject, ["ShockwaveFlash.ShockwaveFlash"], JAM.policy.p4);
          } catch (f$$11) {
          }
        }
        if (b$$58) {
          var v4057 = JAM.call(b$$58.GetVariable, b$$58, ["$version"], JAM.policy.p4);
          var v3122 = JAM.call(v4057.split, v4057, [" "], JAM.policy.p4);
          a$$75 = v3122[1];
          return JAM.call(a$$75.replace, a$$75, [/,/g, "."], JAM.policy.p4);
        }
      }
    }
    return "0";
  }
  function ub(a$$76) {
    var b$$59 = a$$76.google_ad_format;
    var v1511;
    if (b$$59) {
      var v3123 = JAM.call(b$$59.indexOf, b$$59, ["_0ads"], JAM.policy.p4);
      v1511 = 0 < v3123;
    } else {
      var v4058 = a$$76.google_ad_output;
      var v3124 = "html" != v4058;
      if (v3124) {
        var v4059 = a$$76.google_num_radlinks;
        v3124 = 0 < v4059;
      }
      v1511 = v3124;
    }
    return v1511;
  }
  function Ze(a$$77, b$$60, c$$35, d$$27) {
    var v1512 = c$$35;
    var v3125 = !v1512;
    if (v3125) {
      v1512 = a$$77.google_ad_width;
    }
    c$$35 = v1512;
    var v1513 = d$$27;
    var v3126 = !v1513;
    if (v3126) {
      v1513 = a$$77.google_ad_height;
    }
    d$$27 = v1513;
    var v3127 = a$$77.top;
    var v1514 = v3127 == a$$77;
    if (v1514) {
      return!1;
    }
    var e$$22 = b$$60.documentElement;
    var v1517 = c$$35 && d$$27;
    if (v1517) {
      var f$$12 = 1;
      var g$$9 = 1;
      var v1515;
      var v3129 = a$$77.innerHeight;
      if (v3129) {
        f$$12 = a$$77.innerWidth;
        v1515 = g$$9 = a$$77.innerHeight;
      } else {
        var v3128;
        var v4614 = e$$22;
        if (v4614) {
          v4614 = e$$22.clientHeight;
        }
        var v4061 = v4614;
        if (v4061) {
          f$$12 = e$$22.clientWidth;
          v3128 = g$$9 = e$$22.clientHeight;
        } else {
          var v4060 = b$$60.body;
          if (v4060) {
            var v4886 = b$$60.body;
            f$$12 = v4886.clientWidth;
            var v4887 = b$$60.body;
            v4060 = g$$9 = v4887.clientHeight;
          }
          v3128 = v4060;
        }
        v1515 = v3128;
      }
      v1515;
      var v4062 = 2 * d$$27;
      var v3130 = g$$9 > v4062;
      var v4064 = !v3130;
      if (v4064) {
        var v4063 = 2 * c$$35;
        v3130 = f$$12 > v4063;
      }
      var v1516 = v3130;
      if (v1516) {
        return!1;
      }
    }
    return!0;
  }
  function $e(a$$78, b$$61) {
    function v61(b$$62, d$$28) {
      var v1518 = "google_" + d$$28;
      JAM.set(a$$78, v1518, b$$62, JAM.policy.p2);
      return;
    }
    JAM.call(x$$50, null, [b$$61, v61], JAM.policy.p4);
    return;
  }
  function bf(a$$79, b$$63) {
    var c$$36 = JAM.call(af, null, [], JAM.policy.p4);
    var v1519;
    if (c$$36) {
      v1519 = c$$36;
    } else {
      var v3131;
      if (b$$63) {
        v3131 = a$$79.referrer;
      } else {
        v3131 = a$$79.URL;
      }
      v1519 = v3131;
    }
    return v1519;
  }
  function Jh(a$$90) {
    var b$$74 = 1;
    var c$$45 = 0;
    var d$$36;
    var v4065 = void 0;
    var v3132 = v4065 != a$$90;
    if (v3132) {
      v3132 = "" != a$$90;
    }
    var v1521 = v3132;
    if (v1521) {
      b$$74 = 0;
      var v3133 = a$$90.length;
      d$$36 = v3133 - 1;
      var v1520 = 0 <= d$$36;
      for (;v1520;) {
        c$$45 = JAM.call(a$$90.charCodeAt, a$$90, [d$$36], JAM.policy.p4);
        var v5029 = b$$74 << 6;
        var v4888 = v5029 & 268435455;
        var v4615 = v4888 + c$$45;
        var v4616 = c$$45 << 14;
        b$$74 = v4615 + v4616;
        c$$45 = b$$74 & 266338304;
        var v3134;
        var v4067 = 0 != c$$45;
        if (v4067) {
          var v4066 = c$$45 >> 21;
          v3134 = b$$74 ^ v4066;
        } else {
          v3134 = b$$74;
        }
        b$$74 = v3134;
        d$$36 = d$$36 - 1;
        v1520 = 0 <= d$$36;
      }
    }
    return b$$74;
  }
  function Fh(a$$91, b$$75) {
    var v3135 = !a$$91;
    var v4068 = !v3135;
    if (v4068) {
      v3135 = "none" == a$$91;
    }
    var v1522 = v3135;
    if (v1522) {
      return 1;
    }
    a$$91 = JAM.call(String, null, [a$$91], JAM.policy.p4);
    var v1523 = "auto" == a$$91;
    if (v1523) {
      a$$91 = b$$75;
      var v4617 = JAM.call(a$$91.substring, a$$91, [0, 4], JAM.policy.p4);
      var v4069 = "www." == v4617;
      if (v4069) {
        var v4618 = a$$91.length;
        a$$91 = JAM.call(a$$91.substring, a$$91, [4, v4618], JAM.policy.p4);
      }
    }
    var v1524 = JAM.call(a$$91.toLowerCase, a$$91, [], JAM.policy.p4);
    return JAM.call(Jh, null, [v1524], JAM.policy.p4);
  }
  function ji(a$$94) {
    var v1525;
    var v3137 = null != a$$94;
    if (v3137) {
      var v3136 = '"' + a$$94;
      v1525 = v3136 + '"';
    } else {
      v1525 = '""';
    }
    return v1525;
  }
  function ii() {
    function v65() {
      f$$19 = !0;
      var a$$100 = 0;
      var v4070 = c$$51.google_top_js_callbacks;
      var v3138 = v4070.length;
      var v1527 = a$$100 < v3138;
      for (;v1527;) {
        var v4071 = c$$51.google_top_js_callbacks;
        var v3139 = v4071[a$$100];
        var v1526 = v3139 === h$$11;
        if (v1526) {
          var v4072 = c$$51.google_top_js_callbacks;
          JAM.call(v4072.splice, v4072, [a$$100, 1], JAM.policy.p4);
          JAM.call(h$$11, null, [], JAM.policy.p4);
        }
        a$$100 = a$$100 + 1;
        var v4073 = c$$51.google_top_js_callbacks;
        var v3140 = v4073.length;
        v1527 = a$$100 < v3140;
      }
      return;
    }
    function v64() {
      var v4619 = e$$31.j;
      var v4074 = v4619.deviceAccelerationWithGravity;
      var v3141 = null != v4074;
      var v4076 = !v3141;
      if (v4076) {
        var v4620 = e$$31.j;
        var v4075 = v4620.deviceAccelerationWithoutGravity;
        v3141 = null != v4075;
      }
      var v1528 = v3141;
      var v3143 = !v1528;
      if (v3143) {
        var v3142 = e$$31.j;
        v1528 = v3142.didDeviceMotionCallbacksTimeoutExpire;
      }
      return v1528;
    }
    function v63() {
      var v4077 = e$$31.j;
      var v3144 = v4077.deviceOrientation;
      var v1529 = null != v3144;
      var v3146 = !v1529;
      if (v3146) {
        var v3145 = e$$31.j;
        v1529 = v3145.didDeviceOrientationCallbacksTimeoutExpire;
      }
      return v1529;
    }
    function v62() {
      var v3147 = c$$51.google_top_js_status;
      var v1530 = 3 != v3147;
      var v3148 = !v1530;
      if (v3148) {
        v1530 = f$$19;
      }
      return v1530;
    }
    var v3149 = JAM.call(hc, null, [], JAM.policy.p4);
    var v3150 = JAM.call(D$$1, null, [], JAM.policy.p4);
    var v1531 = v3149 != v3150;
    if (v1531) {
      ze = ze | 4;
    }
    if (Ha$$1) {
      ze = ze | 16;
    }
    var v3151 = JAM.call(Xe, null, [document], JAM.policy.p4);
    var v1532 = 3 == v3151;
    if (v1532) {
      ze = ze | 32;
    }
    var v1533 = "google_dn" in window;
    if (v1533) {
      ze = ze | 8;
    }
    var v1534 = window.google_loader_features_used;
    if (v1534) {
      var v3152 = window.google_loader_features_used;
      ze = ze | v3152;
    }
    var v3153;
    if (B$$2) {
      var v4078 = JAM.call(yb, null, [window], JAM.policy.p4);
      v3153 = 1 == v4078;
    } else {
      var v4079 = JAM.call(yb, null, [window], JAM.policy.p4);
      v3153 = !v4079;
    }
    var v1535 = v3153;
    if (v1535) {
      JAM.call(li, null, [], JAM.policy.p4);
    }
    JAM.call(Vi, null, [], JAM.policy.p4);
    var a$$99 = null;
    var b$$81 = "";
    a$$99 = window.google_async_iframe_id;
    var c$$51 = JAM.call(D$$1, null, [], JAM.policy.p4);
    var v1536;
    if (a$$99) {
      var v3154 = c$$51.document;
      v1536 = a$$99 = JAM.call(v3154.getElementById, v3154, [a$$99], JAM.policy.p4);
    } else {
      b$$81 = "google_temp_span";
      v1536 = a$$99 = JAM.call(Zi, null, [b$$81], JAM.policy.p4);
    }
    v1536;
    var d$$42 = Of;
    var v3155 = c$$51.google_top_experiment;
    var v3156 = d$$42.EXPERIMENT_ZERO_LATENCY;
    var v1537 = v3155 !== v3156;
    if (v1537) {
      var v3157 = c$$51.google_top_js_status;
      v1537 = 3 === v3157;
    }
    d$$42 = v1537;
    var e$$31 = JAM.call(Mh, null, [c$$51], JAM.policy.p4);
    var v3158 = d$$42;
    var v4081 = !v3158;
    if (v4081) {
      var v4080 = e$$31;
      if (v4080) {
        var v4621 = JAM.call(e$$31.P, e$$31, [], JAM.policy.p4);
        var v4889 = !v4621;
        if (v4889) {
          v4621 = JAM.call(e$$31.O, e$$31, [], JAM.policy.p4);
        }
        v4080 = v4621;
      }
      v3158 = v4080;
    }
    var v1543 = v3158;
    if (v1543) {
      var f$$19 = !1;
      var g$$15 = [];
      if (d$$42) {
        JAM.call(g$$15.push, g$$15, [v62], JAM.policy.p4);
      }
      var v3159 = e$$31;
      if (v3159) {
        v3159 = JAM.call(e$$31.P, e$$31, [], JAM.policy.p4);
      }
      var v1538 = v3159;
      if (v1538) {
        JAM.call(g$$15.push, g$$15, [v63], JAM.policy.p4);
      }
      var v3160 = e$$31;
      if (v3160) {
        v3160 = JAM.call(e$$31.O, e$$31, [], JAM.policy.p4);
      }
      var v1539 = v3160;
      if (v1539) {
        JAM.call(g$$15.push, g$$15, [v64], JAM.policy.p4);
      }
      var h$$11 = JAM.call(ga$$1, null, [Yi, a$$99, b$$81, e$$31, g$$15], JAM.policy.p4);
      if (d$$42) {
        var v5030 = JAM.new(Date, [], JAM.policy.p4);
        Xi = JAM.call(v5030.getTime, v5030, [], JAM.policy.p4);
        var v5031 = c$$51.google_top_js_callbacks;
        var v5075 = !v5031;
        if (v5075) {
          v5031 = [];
        }
        c$$51.google_top_js_callbacks = v5031;
        var v4890 = c$$51.google_top_js_callbacks;
        JAM.call(v4890.push, v4890, [h$$11], JAM.policy.p4);
        b$$81 = v65;
        JAM.call(window.setTimeout, window, [b$$81, 150], JAM.policy.p4);
      }
      var v3161 = e$$31;
      if (v3161) {
        v3161 = JAM.call(e$$31.fb, e$$31, [], JAM.policy.p4);
      }
      var v1540 = v3161;
      if (v1540) {
        JAM.call(e$$31.Gc, e$$31, [], JAM.policy.p4);
      }
      var v3162 = e$$31;
      if (v3162) {
        v3162 = JAM.call(e$$31.P, e$$31, [], JAM.policy.p4);
      }
      var v1541 = v3162;
      if (v1541) {
        JAM.call(e$$31.nc, e$$31, [h$$11, 1E3], JAM.policy.p4);
      }
      var v3163 = e$$31;
      if (v3163) {
        v3163 = JAM.call(e$$31.O, e$$31, [], JAM.policy.p4);
      }
      var v1542 = v3163;
      if (v1542) {
        JAM.call(e$$31.mc, e$$31, [h$$11, 1E3], JAM.policy.p4);
      }
    } else {
      JAM.call(Yi, null, [a$$99, b$$81], JAM.policy.p4);
    }
    return;
  }
  function $h() {
    var v3164 = window.google_ad_output;
    var v1544 = null == v3164;
    if (v1544) {
      window.google_ad_output = "html";
    }
    var JSCompiler_temp_const$$578 = window;
    var JSCompiler_inline_result$$579;
    JSCompiler_inline_label_yh_592: {
      var b$$inline_589 = window.google_ad_client;
      var v1545 = !b$$inline_589;
      if (v1545) {
        JSCompiler_inline_result$$579 = "";
        break JSCompiler_inline_label_yh_592;
      }
      b$$inline_589 = JAM.call(b$$inline_589.toLowerCase, b$$inline_589, [], JAM.policy.p4);
      var JSCompiler_inline_result$$inline_590;
      var a$$inline_591 = b$$inline_589;
      var v3165 = a$$inline_591;
      if (v3165) {
        var v4082 = JAM.call(a$$inline_591.substring, a$$inline_591, [0, 3], JAM.policy.p4);
        v3165 = "ca-" != v4082;
      }
      var v1546 = v3165;
      if (v1546) {
        a$$inline_591 = "ca-" + a$$inline_591;
      }
      JSCompiler_inline_result$$inline_590 = a$$inline_591;
      JSCompiler_inline_result$$579 = b$$inline_589 = JSCompiler_inline_result$$inline_590;
    }
    JSCompiler_temp_const$$578.google_ad_client = JSCompiler_inline_result$$579;
    var v3166 = window.google_flash_version;
    var v1547 = null == v3166;
    if (v1547) {
      var JSCompiler_temp_const$$555 = window;
      var JSCompiler_inline_result$$556;
      JSCompiler_inline_label_sb$$1_594: {
        try {
          JSCompiler_inline_result$$556 = JAM.call(tb, null, [], JAM.policy.p4);
        } catch (a$$inline_593) {
          JSCompiler_inline_result$$556 = "0";
        }
      }
      JSCompiler_temp_const$$555.google_flash_version = JSCompiler_inline_result$$556;
    }
    var v3167 = window.google_ad_section;
    var v4083 = !v3167;
    if (v4083) {
      v3167 = window.google_ad_region;
    }
    var v1548 = v3167;
    var v3168 = !v1548;
    if (v3168) {
      v1548 = "";
    }
    window.google_ad_section = v1548;
    var v3169 = window.google_country;
    var v4084 = !v3169;
    if (v4084) {
      v3169 = window.google_gl;
    }
    var v1549 = v3169;
    var v3170 = !v1549;
    if (v3170) {
      v1549 = "";
    }
    window.google_country = v1549;
    var v1550 = JAM.new(Date, [], JAM.policy.p4);
    var a$$inline_89 = JAM.call(v1550.getTime, v1550, [], JAM.policy.p4);
    var v3171 = window.google_color_bg;
    var v1551 = JAM.call(n$$2, null, [v3171], JAM.policy.p4);
    if (v1551) {
      var v3172 = window;
      var v4085 = window.google_color_bg;
      var v5194 = JAM.call(zh, null, [v4085, a$$inline_89], JAM.policy.p4);
      v3172.google_color_bg = v5194;
    }
    var v3173 = window.google_color_text;
    var v1552 = JAM.call(n$$2, null, [v3173], JAM.policy.p4);
    if (v1552) {
      var v3174 = window;
      var v4086 = window.google_color_text;
      var v5195 = JAM.call(zh, null, [v4086, a$$inline_89], JAM.policy.p4);
      v3174.google_color_text = v5195;
    }
    var v3175 = window.google_color_link;
    var v1553 = JAM.call(n$$2, null, [v3175], JAM.policy.p4);
    if (v1553) {
      var v3176 = window;
      var v4087 = window.google_color_link;
      var v5196 = JAM.call(zh, null, [v4087, a$$inline_89], JAM.policy.p4);
      v3176.google_color_link = v5196;
    }
    var v3177 = window.google_color_url;
    var v1554 = JAM.call(n$$2, null, [v3177], JAM.policy.p4);
    if (v1554) {
      var v3178 = window;
      var v4088 = window.google_color_url;
      var v5197 = JAM.call(zh, null, [v4088, a$$inline_89], JAM.policy.p4);
      v3178.google_color_url = v5197;
    }
    var v3179 = window.google_color_border;
    var v1555 = JAM.call(n$$2, null, [v3179], JAM.policy.p4);
    if (v1555) {
      var v3180 = window;
      var v4089 = window.google_color_border;
      var v5198 = JAM.call(zh, null, [v4089, a$$inline_89], JAM.policy.p4);
      v3180.google_color_border = v5198;
    }
    var v3181 = window.google_color_line;
    var v1556 = JAM.call(n$$2, null, [v3181], JAM.policy.p4);
    if (v1556) {
      var v3182 = window;
      var v4090 = window.google_color_line;
      var v5199 = JAM.call(zh, null, [v4090, a$$inline_89], JAM.policy.p4);
      v3182.google_color_line = v5199;
    }
    return;
  }
  var m$$3 = this;
  var v1557 = Date.now;
  var v3183 = !v1557;
  if (v3183) {
    v1557 = v66;
  }
  var ha$$1 = v1557;
  var la$$1 = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/;
  var na$$1 = JAM.call(t$$1, null, ["0.1", 0], JAM.policy.p4);
  var oa$$1 = JAM.call(t$$1, null, ["0.02", 0], JAM.policy.p4);
  var pa$$1 = JAM.call(t$$1, null, ["1", 0], JAM.policy.p4);
  var qa$$1 = JAM.call(t$$1, null, ["0.04", 0], JAM.policy.p4);
  var ra$$1 = JAM.call(t$$1, null, ["0.001", 0], JAM.policy.p4);
  var sa$$1 = JAM.call(t$$1, null, ["", 0], JAM.policy.p4);
  var ta$$1 = JAM.call(t$$1, null, ["", 0], JAM.policy.p4);
  var ua$$1 = JAM.call(t$$1, null, ["0.01", 0], JAM.policy.p4);
  var va$$1 = JAM.call(t$$1, null, ["0.001", 0], JAM.policy.p4);
  var wa$$1 = JAM.call(t$$1, null, ["0.0", 0], JAM.policy.p4);
  var xa$$1 = JAM.call(t$$1, null, ["", 0], JAM.policy.p4);
  var ya$$1 = JAM.call(t$$1, null, ["0.01", 0], JAM.policy.p4);
  var za$$1 = JAM.call(t$$1, null, ["0.001", 0], JAM.policy.p4);
  var Aa$$1 = JAM.call(t$$1, null, ["0.001", 0], JAM.policy.p4);
  var Ba$$1 = JAM.call(t$$1, null, ["", 0], JAM.policy.p4);
  var Ca$$1 = JAM.call(t$$1, null, ["0.06", 0], JAM.policy.p4);
  var v1558 = !1;
  var Ea$$1 = JAM.call(ka$$1, null, ["false", v1558], JAM.policy.p4);
  var v1559 = !1;
  var Fa$$1 = JAM.call(ka$$1, null, ["false", v1559], JAM.policy.p4);
  var v1560 = !1;
  var Ga$$1 = JAM.call(ka$$1, null, ["false", v1560], JAM.policy.p4);
  var v1561 = !1;
  var Ha$$1 = JAM.call(ka$$1, null, ["false", v1561], JAM.policy.p4);
  var v1562 = !1;
  var Ia$$1 = JAM.call(ka$$1, null, ["true", v1562], JAM.policy.p4);
  var Ma$$1;
  var Na$$1 = /&/g;
  var Oa$$1 = /</g;
  var Pa$$1 = />/g;
  var Qa$$1 = /\"/g;
  var Ra$$1 = /[&<>\"]/;
  var Wa$$1 = /&([^;\s<&]+);?/g;
  var Ya$$1 = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
  var Za$$1 = {"'":"\\'"};
  var v1563 = u$$2.prototype;
  v1563.ceil = v67;
  var v1564 = u$$2.prototype;
  v1564.floor = v68;
  var v1565 = u$$2.prototype;
  v1565.round = v69;
  var v1566 = u$$2.prototype;
  v1566.scale = v70;
  var v$$1 = document;
  var w$$6 = window;
  JAM.call(La$$1, null, [], JAM.policy.p4);
  var qb$$1 = {};
  var v3184 = window.google_async_iframe_id;
  var v1567 = !v3184;
  var B$$2 = !v1567;
  var v3185 = B$$2;
  if (v3185) {
    v3185 = window.parent;
  }
  var v1568 = v3185;
  var v3186 = !v1568;
  if (v3186) {
    v1568 = window;
  }
  var Ob = v1568;
  var Pb = {CONTROL:"C", EXPERIMENT:"E"};
  var Xb = Array.prototype;
  var v1569;
  var v3187 = Xb.indexOf;
  if (v3187) {
    v1569 = v71;
  } else {
    v1569 = v72;
  }
  var Yb = v1569;
  var v1570;
  var v3188 = Xb.forEach;
  if (v3188) {
    v1570 = v73;
  } else {
    v1570 = v74;
  }
  var Zb = v1570;
  var v1571 = E$$1.prototype;
  v1571.statusz = v75;
  var v1572 = E$$1.prototype;
  v1572.Ga = v76;
  var v1573 = E$$1.prototype;
  v1573.bb = v77;
  var v1574 = E$$1.prototype;
  v1574.k = v78;
  var v1575 = E$$1.prototype;
  v1575.ac = v79;
  var v1576 = E$$1.prototype;
  v1576.m = v80;
  var v1577 = E$$1.prototype;
  var v3189 = E$$1.prototype;
  v1577.geil = v3189.m;
  var v1578 = E$$1.prototype;
  v1578.Ka = v81;
  var gc = null;
  var v1579 = !0;
  var v1580 = !0;
  var kc = {google_persistent_state:v1579, google_persistent_state_async:v1580};
  var lc = {};
  var sc;
  var tc;
  var uc;
  var v1581 = {CONTROL:"317150300", EXPERIMENT_ZERO_LATENCY:"317150301", EXPERIMENT_WAIT_FOR_POST_MESSAGE_RESPONSE:"317150302", CONTROL_REFERER_CLEANUP:"317150303", EXPERIMENT_REFERER_CLEANUP:"317150304"};
  var v1582 = {CONTROL:"86860100", EXPERIMENT:"86860101"};
  var v1583 = {CONTROL:"86860104", EXPERIMENT:"86860105"};
  var v1584 = {CONTROL_NO_FRAME:"42631020", ALWAYS_ZRT:"42631021", SERIAL_ZRT:"42631022"};
  var v1585 = {CONTROL_ANDROID:"33895177", EXPERIMENT_ANDROID:"33895178", CONTROL_ANDROID_CHROME:"33895187", EXPERIMENT_ANDROID_CHROME:"33895188"};
  var v1586 = {CONTROL:"586900001", EXPERIMENT_ZERO_LATENCY:"586900002", EXPERIMENT_WAIT_FOR_EVENT_ARRIVAL:"586900003"};
  var v1587 = {COUNT_AD_FRAMES_ON_PAGE_CONTROL:"317150310", COUNT_AD_FRAMES_ON_PAGE_EXPERIMENT:"317150311", BROWSER_DIMENSIONS_CONTROL:"317150312", BROWSER_DIMENSIONS_EXPERIMENT:"317150313"};
  var v1588 = {CONTROL:"33895310", EXPERIMENT:"33895311"};
  var v1589 = {CONTROL:"33895400", EXPERIMENT:"33895401"};
  var v1590 = {CONTROL:"42631004", EXPERIMENT:"42631005"};
  var v1591 = {CONTROL:"42631002", EXPERIMENT:"42631003"};
  var v1592 = {CONTROL:"33895322", EXPERIMENT:"33895323"};
  var v1593 = {CONTROL:"33895330", EXPERIMENT:"33895331"};
  var v1594 = {CONTROL:"33895332", EXPERIMENT:"33895333"};
  var v1595 = {CONTROL:"373855270", EXPERIMENT:"373855271"};
  var v1596 = {EXPERIMENT:"947190536"};
  var K$$1 = {PERISCOPE_FOR_TARGETING:v1581, EXPANDABLE_MOBILE_UPDATE:v1582, EXPANDABLE_MOBILE_REVERSE:v1583, PREFETCH_AD_HANDLING:v1584, ASYNC_FOR_OPERA_ANDROID:v1585, DEVICE_SENSORS:v1586, SS:v1587, TOP_URL_REPLACES_MISSING_URL:v1588, ADD_ADK2:v1589, ASYNC_EXPANSION_EMBED:v1590, JS_RNG:v1591, DIRECT_CALL_RENDER_AD:v1592, ALWAYS_USE_DELAYED_IMPRESSIONS:v1593, PRERENDERING_DELAYED_IMPRESSION:v1594, APPEND_AS_FOR_FORMAT_OVERRIDE:v1595, SEND_LOAD_TIME_PINGBACKS:v1596};
  var yc = {google:1, googlegroups:1, gmail:1, googlemail:1, googleimages:1, googleprint:1};
  var zc = /PyvSearchAfcNewTemplate/;
  var v1597 = M$$1.prototype;
  v1597.ceil = v82;
  var v1598 = M$$1.prototype;
  v1598.floor = v83;
  var v1599 = M$$1.prototype;
  v1599.round = v84;
  var v1600 = M$$1.prototype;
  v1600.translate = v85;
  var v1601 = M$$1.prototype;
  v1601.scale = v86;
  var Fc = JAM.call("constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split, "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf", [" "], JAM.policy.p4);
  var Hc;
  var Ic;
  var Jc;
  var Kc;
  JAM.call(Mc, null, [], JAM.policy.p4);
  var Nc = Hc;
  var N$$1 = Ic;
  var Oc = Kc;
  var Pc = Jc;
  var Sc = JAM.call(Rc, null, [], JAM.policy.p4);
  var Tc = {};
  var Vc = JAM.call(v87, null, [], JAM.policy.p4);
  var v1602 = !N$$1;
  var v3191 = !v1602;
  if (v3191) {
    var v3190 = N$$1;
    if (v3190) {
      v3190 = 9 <= Vc;
    }
    v1602 = v3190;
  }
  var Wc = v1602;
  var v4091 = !Oc;
  if (v4091) {
    v4091 = !N$$1;
  }
  var v3192 = v4091;
  var v4093 = !v3192;
  if (v4093) {
    var v4092 = N$$1 && N$$1;
    if (v4092) {
      v4092 = 9 <= Vc;
    }
    v3192 = v4092;
  }
  var v1603 = v3192;
  var v3193 = !v1603;
  if (v3193) {
    if (Oc) {
      JAM.call(Uc, null, ["1.9.1"], JAM.policy.p4);
    }
  }
  var v1604 = N$$1;
  if (v1604) {
    var v3194 = JAM.call(Uc, null, ["9"], JAM.policy.p4);
    v1604 = !v3194;
  }
  var Xc = v1604;
  var ed = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
  var sd = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1};
  var td = {IMG:" ", BR:"\n"};
  var v1605 = O$$1.prototype;
  v1605.createElement = v88;
  var v1606 = O$$1.prototype;
  v1606.createTextNode = v89;
  var v1607 = O$$1.prototype;
  v1607.$b = v90;
  var v1608 = O$$1.prototype;
  v1608.Ja = v91;
  var v1609 = O$$1.prototype;
  v1609.appendChild = od;
  var v1610 = O$$1.prototype;
  v1610.append = pd;
  var v1611 = O$$1.prototype;
  v1611.canHaveChildren = nd;
  var v1612 = O$$1.prototype;
  v1612.removeNode = qd;
  var v1613 = O$$1.prototype;
  v1613.contains = rd;
  var v1614 = P$$1.prototype;
  v1614.contains = v92;
  var v1615 = P$$1.prototype;
  v1615.expand = v93;
  var v1616 = P$$1.prototype;
  v1616.ceil = v94;
  var v1617 = P$$1.prototype;
  v1617.floor = v95;
  var v1618 = P$$1.prototype;
  v1618.round = v96;
  var v1619 = P$$1.prototype;
  v1619.translate = v97;
  var v1620 = P$$1.prototype;
  v1620.scale = v98;
  var Sd = /[^\d]+$/;
  var Ud = {cm:1, "in":1, mm:1, pc:1, pt:1};
  var Vd = {em:1, ex:1};
  var Xd = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
  var he = "";
  var ie = 0;
  var je = 0;
  var v3195 = !1;
  var v1621 = JAM.call(La$$1, null, [v3195], JAM.policy.p4);
  JAM.call(ke, null, [Ha$$1, v1621, oa$$1, pa$$1], JAM.policy.p4);
  var v1622 = S$$1.prototype;
  v1622.oc = v100;
  var v1623 = S$$1.prototype;
  v1623.bc = v101;
  var v1624 = S$$1.prototype;
  v1624.Fa = v102;
  var v1625 = S$$1.prototype;
  v1625.Na = v103;
  var v1626 = S$$1.prototype;
  v1626.getRegisteredAdblockUrls = v104;
  var v1627 = S$$1.prototype;
  v1627.setupOse = v105;
  var v1628 = S$$1.prototype;
  v1628.getEid = v106;
  var v1629 = S$$1.prototype;
  v1629.getOseExpId = v107;
  var v1630 = S$$1.prototype;
  v1630.getOseId = v108;
  var v1631 = S$$1.prototype;
  v1631.getCorrelator = v109;
  var v1632 = S$$1.prototype;
  v1632.La = v110;
  var v1633 = S$$1.prototype;
  v1633.registerAdBlock = v112;
  var v1634 = S$$1.prototype;
  v1634.setUpForcePeriscope = v113;
  var v1635 = S$$1.prototype;
  v1635.shouldForcePeriscope = v114;
  var v1636 = void 0;
  JAM.call(aa$$1, null, ["Goog_AdSense_getAdAdapterInstance", me, v1636], JAM.policy.p4);
  var v1637 = void 0;
  JAM.call(aa$$1, null, ["Goog_AdSense_OsdAdapter", S$$1, v1637], JAM.policy.p4);
  var v3196 = S$$1.prototype;
  var v1638 = v3196.La;
  var v1639 = void 0;
  JAM.call(aa$$1, null, ["Goog_AdSense_OsdAdapter.prototype.numBlocks", v1638, v1639], JAM.policy.p4);
  var v3197 = S$$1.prototype;
  var v1640 = v3197.Na;
  var v1641 = void 0;
  JAM.call(aa$$1, null, ["Goog_AdSense_OsdAdapter.prototype.getNewBlocks", v1640, v1641], JAM.policy.p4);
  var v3198 = S$$1.prototype;
  var v1642 = v3198.getEid;
  var v1643 = void 0;
  JAM.call(aa$$1, null, ["Goog_AdSense_OsdAdapter.prototype.getEid", v1642, v1643], JAM.policy.p4);
  var v3199 = S$$1.prototype;
  var v1644 = v3199.getOseExpId;
  var v1645 = void 0;
  JAM.call(aa$$1, null, ["Goog_AdSense_OsdAdapter.prototype.getOseExpId", v1644, v1645], JAM.policy.p4);
  var v3200 = S$$1.prototype;
  var v1646 = v3200.getOseId;
  var v1647 = void 0;
  JAM.call(aa$$1, null, ["Goog_AdSense_OsdAdapter.prototype.getOseId", v1646, v1647], JAM.policy.p4);
  var v3201 = S$$1.prototype;
  var v1648 = v3201.getCorrelator;
  var v1649 = void 0;
  JAM.call(aa$$1, null, ["Goog_AdSense_OsdAdapter.prototype.getCorrelator", v1648, v1649], JAM.policy.p4);
  var v3202 = S$$1.prototype;
  var v1650 = v3202.getRegisteredAdblockUrls;
  var v1651 = void 0;
  JAM.call(aa$$1, null, ["Goog_AdSense_OsdAdapter.prototype.getRegisteredAdblockUrls", v1650, v1651], JAM.policy.p4);
  var v3203 = S$$1.prototype;
  var v1652 = v3203.setupOse;
  var v1653 = void 0;
  JAM.call(aa$$1, null, ["Goog_AdSense_OsdAdapter.prototype.setupOse", v1652, v1653], JAM.policy.p4);
  var v3204 = S$$1.prototype;
  var v1654 = v3204.registerAdBlock;
  var v1655 = void 0;
  JAM.call(aa$$1, null, ["Goog_AdSense_OsdAdapter.prototype.registerAdBlock", v1654, v1655], JAM.policy.p4);
  var v3205 = S$$1.prototype;
  var v1656 = v3205.setUpForcePeriscope;
  var v1657 = void 0;
  JAM.call(aa$$1, null, ["Goog_AdSense_OsdAdapter.prototype.setUpForcePeriscope", v1656, v1657], JAM.policy.p4);
  var v3206 = S$$1.prototype;
  var v1658 = v3206.shouldForcePeriscope;
  var v1659 = void 0;
  JAM.call(aa$$1, null, ["Goog_AdSense_OsdAdapter.prototype.shouldForcePeriscope", v1658, v1659], JAM.policy.p4);
  var pe = {client:"google_ad_client", format:"google_ad_format", slotname:"google_ad_slot", output:"google_ad_output", ad_type:"google_ad_type", async_oa:"google_async_for_oa_experiment", zrtm:"google_ad_handling_mode", dimpr:"google_always_use_delayed_impressions_experiment", peri:"google_top_experiment"};
  var v1660 = void 0;
  JAM.call(aa$$1, null, ["google_protectAndRun", te, v1660], JAM.policy.p4);
  var v1661 = void 0;
  JAM.call(aa$$1, null, ["google_handleError", ve, v1661], JAM.policy.p4);
  var ze = 0;
  var v1662 = Be.prototype;
  v1662.serialize = v115;
  var v1663 = Be.prototype;
  v1663.n = v116;
  var Ce = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
  var v1664;
  var v3207 = JAM.call(/\uffff/.test, /\uffff/, ["\uffff"], JAM.policy.p4);
  if (v3207) {
    v1664 = /[\\\"\x00-\x1f\x7f-\uffff]/g;
  } else {
    v1664 = /[\\\"\x00-\x1f\x7f-\xff]/g;
  }
  var De = v1664;
  var v1665 = Be.prototype;
  v1665.r = v118;
  var v1666 = Be.prototype;
  v1666.L = v119;
  var v1667 = Be.prototype;
  v1667.yc = v120;
  var v1668 = Be.prototype;
  v1668.M = v121;
  var Fe = /Firefox/;
  var Ge = {CONTROL_NO_FRAME:"XN", PARALLEL_CANCEL_ON_NO_AD:"PC", IFRAME_SIGNALING:"EI", ALWAYS_ZRT:"AZ", SERIAL:"S"};
  var He = {PARALLEL:"K", PARALLEL_W_IFRAME_SIGNALING:"I", PARALLEL_W_ALWAYS_ZRT:"Z", SERIAL:"U"};
  var Ie = /\.((google(|groups|mail|images|print))|gmail)\./;
  var Ne = JAM.call(Sa$$1, null, ["var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}"], JAM.policy.p4);
  var v1669 = Me.prototype;
  v1669.set = v122;
  var v1670 = Me.prototype;
  v1670.Jb = v123;
  var v1671 = Me.prototype;
  v1671.Qc = v124;
  var Pe = JAM.call(RegExp, null, ["^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"], JAM.policy.p4);
  var Se = Pc;
  var T$$1 = {getIframingState:v125, frameCountsWithDelayedPingback:v126, Uc:v127, Ha:v128, NO_IFRAMING:0, SAME_DOMAIN_IFRAMING:1, CROSS_DOMAIN_IFRAMING:2, NAME_FIRST_GOOGLE_WINDOW:"aswift_0", IFRAME_COUNTS_DELAY:2E3, MAXIMUM_IFRAME_DEPTH:20};
  var mf;
  var v1672 = U$$1.prototype;
  v1672.enqueue = v129;
  var v1673 = U$$1.prototype;
  v1673.Y = v130;
  var v1674 = U$$1.prototype;
  v1674.Xa = v131;
  var v1675 = U$$1.prototype;
  v1675.ra = v132;
  var v1676 = U$$1.prototype;
  v1676.statusz = v133;
  var v1677 = U$$1.prototype;
  var v3208 = U$$1.prototype;
  v1677["nq"] = v3208.enqueue;
  var v1678 = U$$1.prototype;
  var v3209 = U$$1.prototype;
  v1678["nqa"] = v3209.Y;
  var v1679 = U$$1.prototype;
  var v3210 = U$$1.prototype;
  v1679["al"] = v3210.Xa;
  var v1680 = U$$1.prototype;
  var v3211 = U$$1.prototype;
  v1680["rl"] = v3211.ra;
  var v1681 = U$$1.prototype;
  var v3212 = U$$1.prototype;
  v1681["sz"] = v3212.statusz;
  var v1682 = U$$1.prototype;
  v1682.sa = v134;
  var v1683 = U$$1.prototype;
  v1683.Oc = v135;
  var v1684 = U$$1.prototype;
  v1684.ab = v136;
  var v1685 = JAM.new(Date, [], JAM.policy.p4);
  var vf = JAM.call(v1685.getTime, v1685, [], JAM.policy.p4);
  var v1686 = !0;
  var v1687 = !0;
  var v1688 = !0;
  var v1689 = !0;
  var v1690 = !0;
  var v1691 = !0;
  var wf = {"120x90":v1686, "160x90":v1687, "180x90":v1688, "200x90":v1689, "468x15":v1690, "728x15":v1691};
  var Sf = {EXPERIMENT:"E", CONTROL:"C"};
  var Of = {CONTROL:"jp_c", EXPERIMENT_ZERO_LATENCY:"jp_zl", EXPERIMENT_WAIT_FOR_POST_MESSAGE_RESPONSE:"jp_wfpmr"};
  var Uf = {CONTROL:"c", EXPERIMENT:"e"};
  var Wf = {};
  var Yf = JAM.call(Xf, null, ["zx"], JAM.policy.p4);
  var Zf = JAM.call(Xf, null, ["zc"], JAM.policy.p4);
  var $f = JAM.call(Xf, null, ["zd"], JAM.policy.p4);
  var ag = {READY:"zr", CANCEL:Yf, CANCEL_CTRL:Zf, CANCEL_CTRL_DELAYED_IMPR:$f};
  var bg = null;
  var v1692 = V$$1.prototype;
  v1692.jb = v137;
  var v1693 = V$$1.prototype;
  v1693.la = v138;
  var v1694 = V$$1.prototype;
  v1694.Ya = v139;
  var v1695 = V$$1.prototype;
  v1695.Ia = v140;
  var v1696 = V$$1.prototype;
  v1696.Ta = v141;
  var v1697 = V$$1.prototype;
  v1697.Rc = v142;
  var v1698 = V$$1.prototype;
  v1698.ya = v143;
  var v1699 = V$$1.prototype;
  v1699.zc = v144;
  var v1700 = V$$1.prototype;
  v1700.wb = v145;
  var v1701 = V$$1.prototype;
  v1701.v = v146;
  var v1702 = V$$1.prototype;
  v1702.Ec = v147;
  var v1703 = V$$1.prototype;
  v1703.da = v148;
  var v1704 = V$$1.prototype;
  v1704.Qa = v149;
  var v1705 = V$$1.prototype;
  v1705.J = v150;
  var v1706 = V$$1.prototype;
  v1706.ta = v151;
  var v1707 = V$$1.prototype;
  v1707.gb = v152;
  var v1708 = V$$1.prototype;
  v1708.eb = v153;
  var v1709 = V$$1.prototype;
  v1709.Ac = v154;
  var v1710 = V$$1.prototype;
  v1710.Dc = v155;
  var v1711 = V$$1.prototype;
  v1711.R = v157;
  var v1712 = hg.prototype;
  v1712.serialize = v158;
  var v1713 = hg.prototype;
  v1713.n = v159;
  var ig = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
  var v1714;
  var v3213 = JAM.call(/\uffff/.test, /\uffff/, ["\uffff"], JAM.policy.p4);
  if (v3213) {
    v1714 = /[\\\"\x00-\x1f\x7f-\uffff]/g;
  } else {
    v1714 = /[\\\"\x00-\x1f\x7f-\xff]/g;
  }
  var jg = v1714;
  var v1715 = hg.prototype;
  v1715.r = v161;
  var v1716 = hg.prototype;
  v1716.L = v162;
  var v1717 = hg.prototype;
  v1717.xc = v163;
  var v1718 = hg.prototype;
  v1718.M = v164;
  var kg = {FLOATING:1, INTERSTITIAL:2};
  var lg = {FLOATING_BOTTOM:1, GDN_INTERSTITIAL:8};
  var v1719 = !0;
  var v1720 = !0;
  var v1721 = !0;
  var v1722 = !0;
  var mg = {"http://doubleclick":v1719, "http://googlesyndication":v1720, "https://doubleclick":v1721, "https://googlesyndication":v1722};
  var sg = /([0-9.]+)px/;
  var v1723 = {width:120, height:240, format:"vertical"};
  var v1724 = {width:120, height:600, format:"vertical"};
  var v1725 = {width:125, height:125, format:"rectangle"};
  var v1726 = {width:160, height:600, format:"vertical"};
  var v1727 = {width:180, height:150, format:"rectangle"};
  var v1728 = {width:200, height:200, format:"rectangle"};
  var v1729 = {width:234, height:60, format:"horizontal"};
  var v1730 = {width:250, height:250, format:"rectangle"};
  var v1731 = {width:300, height:250, format:"rectangle"};
  var v1732 = {width:300, height:600, format:"vertical"};
  var v1733 = {width:320, height:50, format:"horizontal"};
  var v1734 = {width:336, height:280, format:"rectangle"};
  var v1735 = {width:468, height:60, format:"horizontal"};
  var v1736 = {width:728, height:90, format:"horizontal"};
  var v1737 = {width:970, height:90, format:"horizontal"};
  var tg = [v1723, v1724, v1725, v1726, v1727, v1728, v1729, v1730, v1731, v1732, v1733, v1734, v1735, v1736, v1737];
  var Bg = ["google_analytics_uacct", "google_analytics_domain_name"];
  var v1738 = Mg.prototype;
  v1738.ja = v165;
  var v1739 = Mg.prototype;
  v1739.ia = v166;
  var v1740 = Mg.prototype;
  v1740.D = v167;
  var v1741 = Qg.prototype;
  v1741.ja = v168;
  var v1742 = Qg.prototype;
  v1742.ia = v169;
  var v1743 = Qg.prototype;
  v1743.D = v170;
  var Ug = {1:1, 8:2};
  var v1744 = dh.prototype;
  v1744.ub = v171;
  var v1745 = W$$1.prototype;
  v1745.Ca = v172;
  var v1746 = W$$1.prototype;
  v1746.ka = v173;
  var v1747 = W$$1.prototype;
  v1747.C = v174;
  var v1748 = W$$1.prototype;
  v1748.Pc = v175;
  var v1749 = W$$1.prototype;
  v1749.play = v176;
  var v1750 = W$$1.prototype;
  v1750.stop = v177;
  JAM.call(ja$$1, null, [fh, W$$1], JAM.policy.p4);
  var v1751 = fh.prototype;
  v1751.C = v178;
  JAM.call(ja$$1, null, [gh, W$$1], JAM.policy.p4);
  var v1752 = gh.prototype;
  v1752.ka = v179;
  var v1753 = gh.prototype;
  v1753.C = v180;
  var v1754 = hh.prototype;
  v1754.ba = v181;
  var v1755 = hh.prototype;
  v1755.Pb = v182;
  var v1756 = hh.prototype;
  v1756.u = v183;
  JAM.call(ja$$1, null, [X$$1, hh], JAM.policy.p4);
  var v1757 = X$$1.prototype;
  v1757.dismiss = v184;
  var v1758 = X$$1.prototype;
  v1758.hide = v185;
  var v1759 = X$$1.prototype;
  v1759.A = v186;
  var v1760 = X$$1.prototype;
  v1760.show = v187;
  var v1761 = X$$1.prototype;
  v1761.pb = v188;
  var v1762 = X$$1.prototype;
  v1762.qb = v189;
  var v1763 = X$$1.prototype;
  v1763.Qb = v190;
  var v1764 = X$$1.prototype;
  v1764.Rb = v191;
  var v1765 = X$$1.prototype;
  v1765.Ma = v192;
  var v1766 = X$$1.prototype;
  v1766.Sa = v193;
  var v1767 = X$$1.prototype;
  v1767.ec = v194;
  var v1768 = X$$1.prototype;
  v1768.tc = v195;
  var v1769 = X$$1.prototype;
  v1769.vc = v196;
  var v1770 = X$$1.prototype;
  v1770.Kc = v198;
  var v1771 = X$$1.prototype;
  v1771.Lc = v200;
  var v1772 = X$$1.prototype;
  v1772.Mc = v201;
  var v1773 = X$$1.prototype;
  v1773.Nc = v202;
  var v1774 = X$$1.prototype;
  v1774.$a = v203;
  var v1775 = X$$1.prototype;
  v1775.cb = v204;
  var v1776 = X$$1.prototype;
  v1776.o = v205;
  var v1777 = ih.prototype;
  v1777.Wb = v206;
  var v1778 = ih.prototype;
  v1778.gc = v207;
  JAM.call(ja$$1, null, [jh, ih], JAM.policy.p4);
  var v1779 = jh.prototype;
  v1779.Bb = v208;
  var v1780 = jh.prototype;
  v1780.Gb = v209;
  var v1781 = jh.prototype;
  v1781.pa = v210;
  JAM.call(ja$$1, null, [Y$$1, hh], JAM.policy.p4);
  var lh = {backgroundColor:"white", opacity:"1", position:"fixed", left:"0px", top:"0px", display:"none", zIndex:"2147483647"};
  var mh = {width:"100%", height:"100%"};
  var nh = {width:"100%", "min-height":"100%"};
  var v1782 = Y$$1.prototype;
  v1782.mb = v211;
  var v1783 = Y$$1.prototype;
  v1783.A = v212;
  var v1784 = Y$$1.prototype;
  v1784.rb = v213;
  var v1785 = Y$$1.prototype;
  v1785.tb = v214;
  var v1786 = Y$$1.prototype;
  v1786.Ba = v215;
  var v1787 = Y$$1.prototype;
  v1787.vb = v216;
  var v1788 = Y$$1.prototype;
  v1788.xb = v217;
  var v1789 = Y$$1.prototype;
  v1789.Yb = v218;
  var v1790 = Y$$1.prototype;
  v1790.Xb = v219;
  var v1791 = Y$$1.prototype;
  v1791.sc = v220;
  var v1792 = Y$$1.prototype;
  v1792.Cc = v221;
  var v1793 = Y$$1.prototype;
  v1793.N = v222;
  JAM.call(ja$$1, null, [Z$$1, ih], JAM.policy.p4);
  var v1794 = Z$$1.prototype;
  v1794.pa = v223;
  var v1795 = Z$$1.prototype;
  v1795.T = v224;
  var v1796 = Z$$1.prototype;
  v1796.Hb = v225;
  var v1797 = Z$$1.prototype;
  v1797.Nb = v226;
  var v1798 = Z$$1.prototype;
  v1798.Mb = v227;
  var v1799 = Z$$1.prototype;
  v1799.Va = v228;
  var v1800 = Z$$1.prototype;
  v1800.dc = v229;
  var v1801 = Z$$1.prototype;
  v1801.qc = v230;
  var v1802 = Z$$1.prototype;
  v1802.uc = v231;
  var v1803 = Z$$1.prototype;
  v1803.wc = v232;
  var v1804 = Z$$1.prototype;
  v1804.Bc = v233;
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
  var v1805 = $$$1.prototype;
  v1805.zb = v234;
  var v1806 = $$$1.prototype;
  v1806.Ab = v235;
  var v1807 = $$$1.prototype;
  v1807.$ = v236;
  var v1808 = $$$1.prototype;
  v1808.aa = v237;
  var v1809 = $$$1.prototype;
  v1809.ca = v238;
  var v1810 = $$$1.prototype;
  v1810.Oa = v239;
  var v1811 = $$$1.prototype;
  v1811.nc = v241;
  var v1812 = $$$1.prototype;
  v1812.mc = v243;
  var v1813 = $$$1.prototype;
  v1813.fb = v244;
  var v1814 = $$$1.prototype;
  v1814.O = v245;
  var v1815 = $$$1.prototype;
  v1815.P = v246;
  var v1816 = $$$1.prototype;
  v1816.Gc = v247;
  var v1817 = $$$1.prototype;
  v1817.Hc = v248;
  var Qh = null;
  var Rh = null;
  var v1818 = Uh.prototype;
  v1818.yb = v249;
  var v1819 = Uh.prototype;
  v1819.Ob = v250;
  var v1820 = Uh.prototype;
  v1820.Eb = v251;
  var v1821 = Uh.prototype;
  v1821.Ea = v252;
  var v1822 = !1;
  var Vh = JAM.call(La$$1, null, [v1822], JAM.policy.p4);
  var Wh = 20;
  var ci = !1;
  var v1823 = w$$6.google_eas_queue;
  var v3214 = !v1823;
  if (v3214) {
    v1823 = [];
  }
  w$$6.google_eas_queue = v1823;
  var ei = JAM.call(Mb, null, [v253], JAM.policy.p4);
  var zi = !1;
  var yi = "";
  var Xi = 0;
  var Ni = /[+, ]/;
  window.google_render_ad = ii;
  JAM.call(te, null, ["show_ads::main", ve, bi, xc], JAM.policy.p4);
  return;
}
function v22() {
  function v21(a$$45) {
    this.a = 0;
    JAM.call(a$$45.k, a$$45, [], JAM.policy.p4);
    return;
  }
  function v20() {
    var v4094 = this.a;
    var v3215 = 0 == v4094;
    if (v3215) {
      var v4095 = this.c;
      v3215 = v4095.length;
    }
    var v1827 = v3215;
    if (v1827) {
      var v1824 = this.c;
      var a$$44 = JAM.call(v1824.shift, v1824, [], JAM.policy.p4);
      this.a = 2;
      var v3216 = this.f;
      var v1825 = JAM.call(p, null, [v3216, this, a$$44], JAM.policy.p4);
      var b$$36 = JAM.call(M, null, ["sjr::run", v1825], JAM.policy.p4);
      var v1826 = a$$44.h;
      JAM.call(v1826.setTimeout, v1826, [b$$36, 0], JAM.policy.p4);
      JAM.call(Ua, null, [this], JAM.policy.p4);
    }
    return;
  }
  function v19() {
    var v3217 = !window;
    var v4096 = !v3217;
    if (v4096) {
      v3217 = !Array;
    }
    var v1828 = v3217;
    return!v1828;
  }
  function v18() {
    var v3218 = this.a;
    var v1829 = 1 == v3218;
    if (v1829) {
      var v4622 = this.d;
      var v4097 = null != v4622;
      if (v4097) {
        var v4891 = this.b;
        var v4892 = this.d;
        JAM.call(v4891.clearTimeout, v4891, [v4892], JAM.policy.p4);
        this.d = null;
      }
      this.a = 0;
    }
    JAM.call(Ua, null, [this], JAM.policy.p4);
    return;
  }
  function v17(a$$42) {
    this.a = 1;
    if (a$$42) {
      var v3219 = this.e;
      var v1830 = JAM.call(p, null, [v3219, this], JAM.policy.p4);
      var b$$34 = JAM.call(M, null, ["sjr::timeout", v1830], JAM.policy.p4);
      var v1831 = this.b;
      var v5200 = JAM.call(v1831.setTimeout, v1831, [b$$34, a$$42], JAM.policy.p4);
      this.d = v5200;
    }
    return;
  }
  function v16(a$$41, b$$33) {
    var v1832 = this.c;
    var v4098 = b$$33;
    var v4623 = !v4098;
    if (v4623) {
      v4098 = this.b;
    }
    var v3220 = v4098;
    var v1833 = JAM.new(Ta, [a$$41, v3220], JAM.policy.p4);
    JAM.call(v1832.push, v1832, [v1833], JAM.policy.p4);
    JAM.call(Ua, null, [this], JAM.policy.p4);
    return;
  }
  function v15(a$$40, b$$32) {
    var v1834;
    var v4893 = this.a;
    var v4624 = 0 != v4893;
    var v4895 = !v4624;
    if (v4895) {
      var v5032 = this.c;
      var v4894 = v5032.length;
      v4624 = 0 != v4894;
    }
    var v4099 = v4624;
    var v4626 = !v4099;
    if (v4626) {
      var v4625 = b$$32;
      if (v4625) {
        v4625 = b$$32 != window;
      }
      v4099 = v4625;
    }
    var v3221 = v4099;
    if (v3221) {
      v1834 = JAM.call(this.g, this, [a$$40, b$$32], JAM.policy.p4);
    } else {
      this.a = 2;
      var v4100 = JAM.new(Ta, [a$$40, window], JAM.policy.p4);
      v1834 = JAM.call(this.f, this, [v4100], JAM.policy.p4);
    }
    v1834;
    return;
  }
  function v14(a$$36, b$$29) {
    var c$$19 = JAM.call(La, null, ["rs", a$$36], JAM.policy.p4);
    var d$$13;
    t: {
      var v4101 = a$$36;
      if (v4101) {
        v4101 = d$$13 = JAM.call(a$$36.match, a$$36, ["dt=([^&]+)"], JAM.policy.p4);
      }
      var v3222 = v4101;
      if (v3222) {
        var v4102 = d$$13.length;
        v3222 = 2 == v4102;
      }
      var v1835 = v3222;
      if (v1835) {
        d$$13 = d$$13[1];
        break t;
      }
      d$$13 = "";
    }
    var v3223 = JAM.new(Date, [], JAM.policy.p4);
    var v1836 = JAM.call(v3223.getTime, v3223, [], JAM.policy.p4);
    d$$13 = v1836 - d$$13;
    var v4103;
    var v4627 = 1E4 > d$$13;
    if (v4627) {
      v4103 = d$$13 + "";
    } else {
      v4103 = "M";
    }
    var v3224 = v4103;
    var v1837 = "&dtd=" + v3224;
    c$$19 = JAM.call(c$$19.replace, c$$19, [/&dtd=(\d+|M)/, v1837], JAM.policy.p4);
    JAM.call(this.set, this, [b$$29, c$$19], JAM.policy.p4);
    return c$$19;
  }
  function v13(a$$35) {
    var v3225 = this.b;
    var v1838 = v3225.document;
    a$$35 = JAM.call(v1838.getElementById, v1838, [a$$35], JAM.policy.p4);
    var v1839 = a$$35.contentWindow;
    var b$$28 = v1839.document;
    var v4104 = a$$35.onload;
    if (v4104) {
      v4104 = b$$28;
    }
    var v3226 = v4104;
    if (v3226) {
      var v4628 = b$$28.body;
      var v4105 = !v4628;
      var v4630 = !v4105;
      if (v4630) {
        var v4896 = b$$28.body;
        var v4629 = v4896.firstChild;
        v4105 = !v4629;
      }
      v3226 = v4105;
    }
    var v1840 = v3226;
    if (v1840) {
      JAM.call(a$$35.onload, a$$35, [], JAM.policy.p4);
    }
    return;
  }
  function v12(a$$34, b$$27) {
    var v3227 = this.i;
    var v1841 = v3227.handlers;
    JAM.set(v1841, a$$34, b$$27, JAM.policy.p2);
    var v3228 = this.b;
    var v1842 = v3228.addEventListener;
    if (v1842) {
      var v3229 = this.b;
      var v4106 = this.j;
      var v3230 = JAM.call(p, null, [v4106, this, a$$34], JAM.policy.p4);
      var v3231 = !1;
      JAM.call(v3229.addEventListener, v3229, ["load", v3230, v3231], JAM.policy.p4);
    }
    return;
  }
  function rb() {
    var v4107 = window.google_top_experiment;
    var v3232 = !v4107;
    if (v3232) {
      var v4108 = window.google_top_js_status;
      v3232 = !v4108;
    }
    var v1850 = v3232;
    if (v1850) {
      var a$$69 = window;
      var v4109;
      var v4897 = a$$69.top;
      var v4632 = v4897 == a$$69;
      if (v4632) {
        v4109 = 0;
      } else {
        var v4631;
        var v5033 = a$$69.top;
        var v4898 = JAM.call(J, null, [v5033], JAM.policy.p4);
        if (v4898) {
          v4631 = 1;
        } else {
          v4631 = 2;
        }
        v4109 = v4631;
      }
      var v3233 = v4109;
      var v1849 = 2 !== v3233;
      if (v1849) {
        window.google_top_js_status = 0;
      } else {
        var v1848 = top.postMessage;
        if (v1848) {
          var b$$55;
          try {
            var v1843;
            var v4633 = D.top;
            var v4110 = v4633.frames;
            var v3234 = v4110.google_top_static_frame;
            if (v3234) {
              v1843 = !0;
            } else {
              v1843 = !1;
            }
            b$$55 = v1843;
          } catch (c$$32) {
            b$$55 = !1;
          }
          if (b$$55) {
            var v4111 = window;
            var v4634 = ["jp_c", "jp_zl", "jp_wfpmr"];
            var v5201 = JAM.call(I, null, [v4634, ja], JAM.policy.p4);
            v4111.google_top_experiment = v5201;
            var v4112 = window.google_top_experiment;
            var v1847 = "jp_c" !== v4112;
            if (v1847) {
              a$$69 = window;
              var v1844;
              var v3237 = a$$69.addEventListener;
              if (v3237) {
                var v3235 = !1;
                v1844 = JAM.call(a$$69.addEventListener, a$$69, ["message", hb, v3235], JAM.policy.p4);
              } else {
                var v3236 = a$$69.attachEvent;
                if (v3236) {
                  v3236 = JAM.call(a$$69.attachEvent, a$$69, ["onmessage", hb], JAM.policy.p4);
                }
                v1844 = v3236;
              }
              v1844;
              window.google_top_js_status = 3;
              a$$69 = {0:"google_loc_request", 1:gb};
              b$$55 = [];
              var d$$24;
              for (d$$24 in a$$69) {
                var v3238 = d$$24 + "=";
                var v3239 = a$$69[d$$24];
                var v1845 = v3238 + v3239;
                JAM.call(b$$55.push, b$$55, [v1845], JAM.policy.p4);
              }
              var v1846 = JAM.call(b$$55.join, b$$55, ["\n"], JAM.policy.p4);
              JAM.call(top.postMessage, top, [v1846, "*"], JAM.policy.p4);
            }
          } else {
            window.google_top_js_status = 2;
          }
        } else {
          window.google_top_js_status = 1;
        }
      }
    }
    var v3240 = d$$24 = window.adsbygoogle;
    if (v3240) {
      v3240 = d$$24.shift;
    }
    var v1852 = v3240;
    if (v1852) {
      b$$55 = 20;
      var v3241 = a$$69 = JAM.call(d$$24.shift, d$$24, [], JAM.policy.p4);
      if (v3241) {
        var v4113 = b$$55;
        b$$55 = b$$55 - 1;
        v3241 = 0 < v4113;
      }
      var v1851 = v3241;
      for (;v1851;) {
        try {
          JAM.call(qb, null, [a$$69], JAM.policy.p4);
        } catch (e$$19) {
          JAM.call(window.setTimeout, window, [rb, 0], JAM.policy.p4);
          throw e$$19;
        }
        var v3242 = a$$69 = JAM.call(d$$24.shift, d$$24, [], JAM.policy.p4);
        if (v3242) {
          var v4114 = b$$55;
          b$$55 = b$$55 - 1;
          v3242 = 0 < v4114;
        }
        v1851 = v3242;
      }
    }
    window.adsbygoogle = {push:qb};
    return;
  }
  function qb(a$$68) {
    var b$$54 = a$$68.element;
    var v1853 = a$$68.params;
    var v3243 = !v1853;
    if (v3243) {
      v1853 = {};
    }
    a$$68 = v1853;
    if (b$$54) {
      var v4115 = JAM.call(mb, null, [b$$54], JAM.policy.p4);
      var v3244 = !v4115;
      if (v3244) {
        var v4635 = b$$54.id;
        if (v4635) {
          var v4899 = b$$54.id;
          v4635 = JAM.call(pb, null, [v4899], JAM.policy.p4);
        }
        b$$54 = v4635;
        v3244 = !b$$54;
      }
      var v1854 = v3244;
      if (v1854) {
        throw JAM.call(Error, null, ["adsbygoogle: 'element' has already been filled."], JAM.policy.p4);
      }
      var v3245 = "innerHTML" in b$$54;
      var v1855 = !v3245;
      if (v1855) {
        throw JAM.call(Error, null, ["adsbygoogle.push(): 'element' is not a good DOM element."], JAM.policy.p4);
      }
    } else {
      b$$54 = JAM.call(pb, null, [], JAM.policy.p4);
      var v1856 = !b$$54;
      if (v1856) {
        throw JAM.call(Error, null, ["adsbygoogle.push(): All ins elements in the DOM with class=adsbygoogle already have ads in them."], JAM.policy.p4);
      }
    }
    var c$$31 = window;
    JAM.call(b$$54.setAttribute, b$$54, ["data-adsbygoogle-status", "done"], JAM.policy.p4);
    JAM.call(ob, null, [b$$54, a$$68, c$$31], JAM.policy.p4);
    return;
  }
  function pb(a$$67) {
    var b$$53 = JAM.call(document.getElementsByTagName, document, ["ins"], JAM.policy.p4);
    var c$$30 = 0;
    var d$$23 = b$$53[c$$30];
    var v3246 = b$$53.length;
    var v1858 = c$$30 < v3246;
    for (;v1858;) {
      var v3247 = JAM.call(mb, null, [d$$23], JAM.policy.p4);
      if (v3247) {
        var v4116 = !a$$67;
        var v4637 = !v4116;
        if (v4637) {
          var v4636 = d$$23.id;
          v4116 = v4636 == a$$67;
        }
        v3247 = v4116;
      }
      var v1857 = v3247;
      if (v1857) {
        return d$$23;
      }
      var v3248 = c$$30 = c$$30 + 1;
      d$$23 = b$$53[v3248];
      var v3249 = b$$53.length;
      v1858 = c$$30 < v3249;
    }
    return null;
  }
  function nb(a$$66, b$$52, c$$29) {
    var d$$22 = a$$66.attributes;
    var e$$18 = d$$22.length;
    var f$$9 = 0;
    var v1862 = f$$9 < e$$18;
    for (;v1862;) {
      var g$$7 = d$$22[f$$9];
      var v3250 = g$$7.nodeName;
      var v1861 = JAM.call(/data-/.test, /data-/, [v3250], JAM.policy.p4);
      if (v1861) {
        var v3251 = g$$7.nodeName;
        var v1859 = JAM.call(v3251.replace, v3251, ["data", "google"], JAM.policy.p4);
        var l$$5 = JAM.call(v1859.replace, v1859, [/-/g, "_"], JAM.policy.p4);
        var v1860 = JAM.call(b$$52.hasOwnProperty, b$$52, [l$$5], JAM.policy.p4);
        var v3252 = !v1860;
        if (v3252) {
          JAM.set(b$$52, l$$5, g$$7.nodeValue, JAM.policy.p2);
        }
      }
      f$$9 = f$$9 + 1;
      v1862 = f$$9 < e$$18;
    }
    d$$22 = b$$52.google_ad_format;
    var v3253 = "auto" == d$$22;
    var v4117 = !v3253;
    if (v4117) {
      v3253 = JAM.call(/^((^|,)(horizontal|vertical|rectangle))+$/.test, /^((^|,)(horizontal|vertical|rectangle))+$/, [d$$22], JAM.policy.p4);
    }
    var v1868 = v3253;
    if (v1868) {
      d$$22 = a$$66.offsetWidth;
      e$$18 = b$$52.google_ad_format;
      c$$29 = JAM.call(lb, null, [d$$22, e$$18, c$$29], JAM.policy.p4);
      var v1864 = !c$$29;
      if (v1864) {
        var v4118 = "Cannot find a responsive size for a container of width=" + d$$22;
        var v3254 = v4118 + "px and data-ad-format=";
        var v1863 = v3254 + e$$18;
        throw JAM.call(Error, null, [v1863], JAM.policy.p4);
      }
      b$$52.google_ad_height = c$$29.height;
      var v1865 = b$$52;
      var v3255;
      var v4638 = 300 < d$$22;
      if (v4638) {
        var v4900 = c$$29.height;
        v4638 = 300 < v4900;
      }
      var v4120 = v4638;
      if (v4120) {
        v3255 = c$$29.width;
      } else {
        var v4119;
        var v4639 = 1200 < d$$22;
        if (v4639) {
          v4119 = 1200;
        } else {
          v4119 = JAM.call(Math.round, Math, [d$$22], JAM.policy.p4);
        }
        v3255 = v4119;
      }
      v1865.google_ad_width = v3255;
      var v1866 = a$$66.style;
      var v3256 = b$$52.google_ad_height;
      v1866.height = v3256 + "px";
      delete b$$52.google_ad_format;
      b$$52.google_loader_features_used = 128;
    } else {
      var v1867;
      var v4901 = a$$66.style;
      var v4640 = v4901.width;
      var v4121 = JAM.call(ib.test, ib, [v4640], JAM.policy.p4);
      if (v4121) {
        var v4902 = a$$66.style;
        var v4641 = v4902.height;
        v4121 = JAM.call(ib.test, ib, [v4641], JAM.policy.p4);
      }
      var v3258 = v4121;
      if (v3258) {
        var v3257 = a$$66.style;
        v1867 = JAM.call(jb, null, [v3257, b$$52], JAM.policy.p4);
      } else {
        var v4903;
        var v5034 = c$$29.getComputedStyle;
        if (v5034) {
          v4903 = JAM.call(c$$29.getComputedStyle, c$$29, [a$$66, null], JAM.policy.p4);
        } else {
          v4903 = a$$66.currentStyle;
        }
        c$$29 = v4903;
        var v4904 = a$$66.style;
        v4904.width = c$$29.width;
        var v4642 = a$$66.style;
        v4642.height = c$$29.height;
        v1867 = JAM.call(jb, null, [c$$29, b$$52], JAM.policy.p4);
      }
      v1867;
    }
    return;
  }
  function ob(a$$65, b$$51, c$$28) {
    function v0() {
      JAM.call(fb, null, [c$$28, b$$51, a$$65], JAM.policy.p4);
      return;
    }
    var v3259 = a$$65.style;
    if (v3259) {
      var v4643 = a$$65.style;
      var v4122 = v4643.display;
      v3259 = "none" == v4122;
    }
    var v1869 = v3259;
    if (v1869) {
      b$$51.google_dn = 1;
    }
    JAM.call(va, null, [c$$28], JAM.policy.p4);
    JAM.call(nb, null, [a$$65, b$$51, c$$28], JAM.policy.p4);
    var d$$21 = 0;
    var v3260 = $.length;
    var v1871 = d$$21 < v3260;
    for (;v1871;) {
      var v1870 = $[d$$21];
      var v4123 = $[d$$21];
      var v3261 = b$$51[v4123];
      var v4125 = !v3261;
      if (v4125) {
        var v4124 = $[d$$21];
        v3261 = c$$28[v4124];
      }
      JAM.set(b$$51, v1870, v3261, JAM.policy.p2);
      d$$21 = d$$21 + 1;
      var v3262 = $.length;
      v1871 = d$$21 < v3262;
    }
    b$$51.google_loader_used = "aa";
    var v3263 = d$$21 = b$$51.google_ad_output;
    if (v3263) {
      v3263 = "html" != d$$21;
    }
    var v1873 = v3263;
    if (v1873) {
      var v1872 = "No support for google_ad_output=" + d$$21;
      throw JAM.call(Error, null, [v1872], JAM.policy.p4);
    }
    JAM.call(K, null, ["aa::main", L, v0], JAM.policy.p4);
    return;
  }
  function mb(a$$64) {
    var v3264 = a$$64.className;
    var v1874 = JAM.call(/(^| )adsbygoogle($| )/.test, /(^| )adsbygoogle($| )/, [v3264], JAM.policy.p4);
    if (v1874) {
      var v3265 = JAM.call(a$$64.getAttribute, a$$64, ["data-adsbygoogle-status"], JAM.policy.p4);
      v1874 = "done" != v3265;
    }
    return v1874;
  }
  function kb(a$$63) {
    a$$63 = a$$63.document;
    var v3266 = a$$63.documentElement;
    var v1875 = v3266.clientWidth;
    var v3268 = !v1875;
    if (v3268) {
      var v3267 = a$$63.body;
      v1875 = v3267.clientWidth;
    }
    return v1875;
  }
  function lb(a$$61, b$$49, c$$27) {
    function v1(a$$62, b$$50) {
      var v3269 = a$$62.width;
      var v3270 = b$$50.width;
      var v1876 = v3269 - v3270;
      var v3273 = !v1876;
      if (v3273) {
        var v3271 = a$$62.height;
        var v3272 = b$$50.height;
        v1876 = v3271 - v3272;
      }
      return v1876;
    }
    JAM.call(Z.sort, Z, [v1], JAM.policy.p4);
    var v1877 = "auto" == b$$49;
    if (v1877) {
      var v3274;
      var v4905 = a$$61;
      var v4906 = JAM.call(kb, null, [c$$27], JAM.policy.p4);
      var v4644 = v4905 / v4906;
      var v4126 = .25 > v4644;
      if (v4126) {
        v3274 = "vertical";
      } else {
        v3274 = "horizontal,rectangle";
      }
      b$$49 = v3274;
    }
    c$$27 = Z.length;
    var v1879 = c$$27;
    c$$27 = c$$27 - 1;
    for (;v1879;) {
      var v4645 = Z[c$$27];
      var v4127 = v4645.width;
      var v3275 = v4127 <= a$$61;
      if (v3275) {
        var v4907 = Z[c$$27];
        var v4646 = v4907.format;
        var v4128 = JAM.call(b$$49.indexOf, b$$49, [v4646], JAM.policy.p4);
        v3275 = -1 != v4128;
      }
      var v1878 = v3275;
      if (v1878) {
        return Z[c$$27];
      }
      v1879 = c$$27;
      c$$27 = c$$27 - 1;
    }
    return null;
  }
  function jb(a$$60, b$$48) {
    var c$$26 = ["width", "height"];
    var d$$20 = 0;
    var v3276 = c$$26.length;
    var v1883 = d$$20 < v3276;
    for (;v1883;) {
      var v1880 = c$$26[d$$20];
      var e$$17 = "google_ad_" + v1880;
      var v3277 = JAM.call(b$$48.hasOwnProperty, b$$48, [e$$17], JAM.policy.p4);
      var v1882 = !v3277;
      if (v1882) {
        var v3278 = c$$26[d$$20];
        var v1881 = a$$60[v3278];
        var f$$8 = JAM.call(ib.exec, ib, [v1881], JAM.policy.p4);
        if (f$$8) {
          var v3279 = b$$48;
          var v3280 = e$$17;
          var v4129 = f$$8[1];
          var v5202 = JAM.call(Math.round, Math, [v4129], JAM.policy.p4);
          JAM.set(v3279, v3280, v5202, JAM.policy.p2);
        }
      }
      d$$20 = d$$20 + 1;
      var v3281 = c$$26.length;
      v1883 = d$$20 < v3281;
    }
    return;
  }
  function hb(a$$59) {
    var v1884 = a$$59.data;
    var b$$47 = JAM.call(v1884.split, v1884, ["\n"], JAM.policy.p4);
    var c$$25 = {};
    var d$$19 = 0;
    var v3282 = b$$47.length;
    var v1887 = d$$19 < v3282;
    for (;v1887;) {
      var v1885 = b$$47[d$$19];
      var e$$16 = JAM.call(v1885.indexOf, v1885, ["="], JAM.policy.p4);
      var v1886 = -1 != e$$16;
      if (v1886) {
        var v3283 = c$$25;
        var v4130 = b$$47[d$$19];
        var v3284 = JAM.call(v4130.substr, v4130, [0, e$$16], JAM.policy.p4);
        var v4131 = b$$47[d$$19];
        var v4132 = e$$16 + 1;
        var v5203 = JAM.call(v4131.substr, v4131, [v4132], JAM.policy.p4);
        JAM.set(v3283, v3284, v5203, JAM.policy.p2);
      }
      d$$19 = d$$19 + 1;
      var v3285 = b$$47.length;
      v1887 = d$$19 < v3285;
    }
    b$$47 = c$$25[3];
    var v4133 = c$$25[1];
    var v3286 = v4133 == gb;
    if (v3286) {
      window.google_top_js_status = 4;
      var v5076 = a$$59.source;
      var v5035 = v5076 == top;
      if (v5035) {
        var v5102 = a$$59.origin;
        var v5077 = JAM.call(b$$47.indexOf, b$$47, [v5102], JAM.policy.p4);
        v5035 = 0 == v5077;
      }
      var v4908 = v5035;
      if (v4908) {
        window.google_top_values = c$$25;
        window.google_top_js_status = 5;
      }
      v3286 = window.google_top_js_callbacks;
    }
    var v1891 = v3286;
    if (v1891) {
      a$$59 = 0;
      var v4134 = window.google_top_js_callbacks;
      var v3287 = v4134.length;
      var v1889 = a$$59 < v3287;
      for (;v1889;) {
        var v1888 = window.google_top_js_callbacks;
        JAM.call(v1888[a$$59], v1888, [], JAM.policy.p4);
        a$$59 = a$$59 + 1;
        var v4135 = window.google_top_js_callbacks;
        var v3288 = v4135.length;
        v1889 = a$$59 < v3288;
      }
      var v1890 = window.google_top_js_callbacks;
      v1890.length = 0;
    }
    return;
  }
  function eb(a$$58, b$$46, c$$24, d$$18) {
    var e$$15 = "script";
    var f$$7 = b$$46.google_ad_width;
    var g$$6 = b$$46.google_ad_height;
    var l$$4 = {};
    var v1892 = !0;
    JAM.call(db, null, [l$$4, f$$7, g$$6, v1892], JAM.policy.p4);
    var v1893 = '"' + Ka;
    JAM.set(l$$4, "onload", v1893 + '"');
    d$$18 = JAM.call(d$$18, null, [a$$58, l$$4, b$$46], JAM.policy.p4);
    var v1894;
    var v4136 = window.google_override_format;
    var v4648 = !v4136;
    if (v4648) {
      var v5103 = window.google_ad_width;
      var v5078 = v5103 + "x";
      var v5079 = window.google_ad_height;
      var v5036 = v5078 + v5079;
      var v4909 = $a[v5036];
      var v4647 = !v4909;
      if (v4647) {
        var v4910 = window.google_loader_used;
        v4647 = "aa" == v4910;
      }
      v4136 = v4647;
    }
    var v3290 = v4136;
    if (v3290) {
      var v3289 = ["c", "e"];
      v1894 = JAM.call(I, null, [v3289, na], JAM.policy.p4);
    } else {
      v1894 = null;
    }
    l$$4 = v1894;
    var h$$8 = b$$46.google_ad_output;
    var k$$2 = b$$46.google_ad_format;
    var v3291 = k$$2;
    var v4138 = !v3291;
    if (v4138) {
      var v4137 = "html" != h$$8;
      if (v4137) {
        v4137 = null != h$$8;
      }
      v3291 = v4137;
    }
    var v1895 = v3291;
    var v3292 = !v1895;
    if (v3292) {
      var v4649 = b$$46.google_ad_width;
      var v4139 = v4649 + "x";
      var v4140 = b$$46.google_ad_height;
      k$$2 = v4139 + v4140;
      var v4141 = "e" == l$$4;
      if (v4141) {
        k$$2 = k$$2 + "_as";
      }
    }
    var v4142 = b$$46.google_ad_slot;
    var v3293 = !v4142;
    var v4143 = !v3293;
    if (v4143) {
      v3293 = b$$46.google_override_format;
    }
    var v1896 = v3293;
    var v3295 = !v1896;
    if (v3295) {
      var v5037 = b$$46.google_ad_width;
      var v4911 = v5037 + "x";
      var v4912 = b$$46.google_ad_height;
      var v4650 = v4911 + v4912;
      var v4144 = $a[v4650];
      var v3294 = !v4144;
      if (v3294) {
        var v4145 = b$$46.google_loader_used;
        v3294 = "aa" == v4145;
      }
      v1896 = v3294;
    }
    h$$8 = v1896;
    var v1897;
    var v3296 = k$$2 && h$$8;
    if (v3296) {
      v1897 = JAM.call(k$$2.toLowerCase, k$$2, [], JAM.policy.p4);
    } else {
      v1897 = "";
    }
    k$$2 = v1897;
    b$$46.google_ad_format = k$$2;
    var v1898 = !0;
    k$$2 = JAM.call(ya, null, [c$$24, b$$46, v1898], JAM.policy.p4);
    b$$46.google_ad_unit_key = k$$2;
    var v1899 = window;
    var v4146 = window.google_adk2_experiment;
    var v4652 = !v4146;
    if (v4652) {
      var v4651 = ["C", "E"];
      v4146 = JAM.call(I, null, [v4651, ma], JAM.policy.p4);
    }
    var v3297 = v4146;
    var v4147 = !v3297;
    if (v4147) {
      v3297 = "N";
    }
    k$$2 = v1899.google_adk2_experiment = v3297;
    var v1900;
    var v3300 = "E" == k$$2;
    if (v3300) {
      var v3298 = b$$46;
      var v5204 = JAM.call(ya, null, [c$$24, b$$46], JAM.policy.p4);
      v1900 = v3298.google_ad_unit_key_2 = v5204;
    } else {
      var v3299 = "C" == k$$2;
      if (v3299) {
        v3299 = b$$46.google_ad_unit_key_2 = "ctrl";
      }
      v1900 = v3299;
    }
    v1900;
    c$$24 = JAM.call(Ha, null, [b$$46], JAM.policy.p4);
    k$$2 = JAM.call(Ja, null, [a$$58], JAM.policy.p4);
    h$$8 = a$$58.document;
    var v4148 = {visible:1, hidden:2, prerender:3, preview:4};
    var v5038 = h$$8.webkitVisibilityState;
    var v5080 = !v5038;
    if (v5080) {
      v5038 = h$$8.mozVisibilityState;
    }
    var v4913 = v5038;
    var v5039 = !v4913;
    if (v5039) {
      v4913 = h$$8.visibilityState;
    }
    var v4653 = v4913;
    var v4914 = !v4653;
    if (v4914) {
      v4653 = "";
    }
    var v4149 = v4653;
    var v3301 = v4148[v4149];
    var v4150 = !v3301;
    if (v4150) {
      v3301 = 0;
    }
    var v1901 = v3301;
    h$$8 = 3 == v1901;
    var v4151 = k$$2;
    if (v4151) {
      v4151 = !h$$8;
    }
    var v3302 = v4151;
    if (v3302) {
      var v4152 = void 0;
      var v4153 = a$$58.google_ad_handling_mode;
      v3302 = v4152 === v4153;
    }
    var v1902 = v3302;
    if (v1902) {
      var v3303 = a$$58;
      var v4654 = ["XN", "AZ", "S"];
      var v4154 = JAM.call(I, null, [v4654, ka], JAM.policy.p4);
      var v4656 = !v4154;
      if (v4656) {
        var v4655 = ["EI"];
        v4154 = JAM.call(I, null, [v4655, la], JAM.policy.p4);
      }
      v3303.google_ad_handling_mode = v4154;
    }
    var v1903;
    var v3305 = a$$58.google_ad_handling_mode;
    if (v3305) {
      var v3304 = a$$58.google_ad_handling_mode;
      v1903 = JAM.call(String, null, [v3304], JAM.policy.p4);
    } else {
      v1903 = null;
    }
    k$$2 = v1903;
    var v4657 = JAM.call(Ja, null, [a$$58], JAM.policy.p4);
    if (v4657) {
      var v4915 = a$$58.google_unique_id;
      v4657 = 1 == v4915;
    }
    var v4155 = v4657;
    if (v4155) {
      v4155 = "XN" != k$$2;
    }
    var v3306 = v4155;
    if (v3306) {
      v3306 = "S" != k$$2;
    }
    var v1919 = v3306;
    if (v1919) {
      var v1904 = a$$58.google_unique_id;
      h$$8 = "zrt_ads_frame" + v1904;
      var m$$2;
      m$$2 = b$$46.google_page_url;
      var v1912 = !m$$2;
      if (v1912) {
        r: {
          m$$2 = a$$58.document;
          var v1905 = f$$7;
          var v3307 = !v1905;
          if (v3307) {
            v1905 = a$$58.google_ad_width;
          }
          var q$$2 = v1905;
          var v1906 = g$$6;
          var v3308 = !v1906;
          if (v3308) {
            v1906 = a$$58.google_ad_height;
          }
          var x$$49 = v1906;
          var v3309 = a$$58.top;
          var v1910 = v3309 == a$$58;
          if (v1910) {
            m$$2 = !1;
          } else {
            var B$$1 = m$$2.documentElement;
            var v1909 = q$$2 && x$$49;
            if (v1909) {
              var u$$1 = 1;
              var r$$1 = 1;
              var v1907;
              var v3311 = a$$58.innerHeight;
              if (v3311) {
                u$$1 = a$$58.innerWidth;
                v1907 = r$$1 = a$$58.innerHeight;
              } else {
                var v3310;
                var v4658 = B$$1;
                if (v4658) {
                  v4658 = B$$1.clientHeight;
                }
                var v4157 = v4658;
                if (v4157) {
                  u$$1 = B$$1.clientWidth;
                  v3310 = r$$1 = B$$1.clientHeight;
                } else {
                  var v4156 = m$$2.body;
                  if (v4156) {
                    var v4916 = m$$2.body;
                    u$$1 = v4916.clientWidth;
                    var v4917 = m$$2.body;
                    v4156 = r$$1 = v4917.clientHeight;
                  }
                  v3310 = v4156;
                }
                v1907 = v3310;
              }
              v1907;
              var v4158 = 2 * x$$49;
              var v3312 = r$$1 > v4158;
              var v4160 = !v3312;
              if (v4160) {
                var v4159 = 2 * q$$2;
                v3312 = u$$1 > v4159;
              }
              var v1908 = v3312;
              if (v1908) {
                m$$2 = !1;
                break r;
              }
            }
            m$$2 = !0;
          }
        }
        var v1911;
        if (m$$2) {
          var v3313 = a$$58.document;
          v1911 = v3313.referrer;
        } else {
          var v3314 = a$$58.document;
          v1911 = v3314.URL;
        }
        m$$2 = v1911;
      }
      m$$2 = JAM.call(encodeURIComponent, null, [m$$2], JAM.policy.p4);
      q$$2 = null;
      var v4161 = "PC" == k$$2;
      var v4659 = !v4161;
      if (v4659) {
        v4161 = "EI" == k$$2;
      }
      var v3315 = v4161;
      var v4162 = !v3315;
      if (v4162) {
        v3315 = "AZ" == k$$2;
      }
      var v1915 = v3315;
      if (v1915) {
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
        var v1913 = q$$2 + "-";
        var v4660 = m$$2 + "/";
        var v4661 = b$$46.google_ad_unit_key;
        var v4163 = v4660 + v4661;
        var v3316 = v4163 + "/";
        var v3317 = a$$58.google_unique_id;
        var v1914 = v3316 + v3317;
        q$$2 = v1913 + v1914;
      }
      b$$46 = {};
      var v1916 = !1;
      JAM.call(db, null, [b$$46, f$$7, g$$6, v1916], JAM.policy.p4);
      b$$46.style = "display:none";
      f$$7 = q$$2;
      b$$46.id = h$$8;
      b$$46.name = h$$8;
      var v1917 = JAM.call(A, null, ["", "doubleclick"], JAM.policy.p4);
      var v4662;
      if (f$$7) {
        var v4918 = JAM.call(encodeURIComponent, null, [f$$7], JAM.policy.p4);
        v4662 = "#" + v4918;
      } else {
        v4662 = "";
      }
      var v4164 = v4662;
      var v3318 = ["/pagead/html/r20131120/r20130906/zrt_lookup.html", v4164];
      var v1918 = JAM.call(v3318.join, v3318, [""], JAM.policy.p4);
      f$$7 = JAM.call(C, null, [v1917, v1918], JAM.policy.p4);
      b$$46.src = f$$7;
      f$$7 = JAM.call(cb, null, [b$$46], JAM.policy.p4);
    } else {
      f$$7 = null;
    }
    var v1920 = JAM.new(Date, [], JAM.policy.p4);
    g$$6 = JAM.call(v1920.getTime, v1920, [], JAM.policy.p4);
    b$$46 = a$$58.google_top_experiment;
    h$$8 = a$$58.google_async_for_oa_experiment;
    m$$2 = a$$58.google_always_use_delayed_impressions_experiment;
    var v3319 = a$$58.google_unique_id;
    var v4165;
    if (b$$46) {
      var v4663 = 'google_top_experiment="' + b$$46;
      v4165 = v4663 + '";';
    } else {
      v4165 = "";
    }
    var v3320 = v4165;
    var v4166;
    if (k$$2) {
      var v4664 = 'google_ad_handling_mode="' + k$$2;
      v4166 = v4664 + '";';
    } else {
      v4166 = "";
    }
    var v3321 = v4166;
    var v4167;
    if (h$$8) {
      var v4665 = 'google_async_for_oa_experiment="' + h$$8;
      v4167 = v4665 + '";';
    } else {
      v4167 = "";
    }
    var v3322 = v4167;
    var v4168;
    if (m$$2) {
      var v4666 = 'google_always_use_delayed_impressions_experiment="' + m$$2;
      v4168 = v4666 + '";';
    } else {
      v4168 = "";
    }
    var v3323 = v4168;
    var v4169;
    if (l$$4) {
      var v4667 = 'google_append_as_for_format_override="' + l$$4;
      v4169 = v4667 + '";';
    } else {
      v4169 = "";
    }
    var v3324 = v4169;
    var v4170;
    var v4668 = g$$6 > v;
    if (v4668) {
      v4170 = g$$6 - v;
    } else {
      v4170 = 1;
    }
    var v3325 = v4170;
    var v3326 = JAM.call(ab, null, [], JAM.policy.p4);
    var v1921 = ["<!doctype html><html><body>", f$$7, "<", e$$15, ">", c$$24, "google_show_ads_impl=true;google_unique_id=", v3319, ';google_async_iframe_id="', d$$18, '";google_start_time=', v, ";", v3320, v3321, v3322, v3323, v3324, "google_bpp=", v3325, ";google_async_rrc=0;</", e$$15, ">", v3326, "</body></html>"];
    l$$4 = JAM.call(v1921.join, v1921, [""], JAM.policy.p4);
    var v3327;
    var v4669 = a$$58.document;
    var v4171 = JAM.call(v4669.getElementById, v4669, [d$$18], JAM.policy.p4);
    if (v4171) {
      v3327 = Ya;
    } else {
      v3327 = Za;
    }
    var v1922 = v3327;
    var v3328 = !0;
    var v1923 = JAM.call(bb, null, [a$$58, d$$18, l$$4, v3328], JAM.policy.p4);
    JAM.call(v1922, null, [v1923], JAM.policy.p4);
    return;
  }
  function fb(a$$56, b$$44, c$$23) {
    function v2(a$$57, b$$45, f$$6) {
      var g$$5 = b$$45.id;
      var l$$3 = 0;
      var v3329 = !g$$5;
      var v4173 = !v3329;
      if (v4173) {
        var v4172 = a$$57.document;
        v3329 = JAM.call(v4172.getElementById, v4172, [g$$5], JAM.policy.p4);
      }
      var v1925 = v3329;
      for (;v1925;) {
        var v1924 = l$$3;
        l$$3 = l$$3 + 1;
        g$$5 = "aswift_" + v1924;
        var v3330 = !g$$5;
        var v4175 = !v3330;
        if (v4175) {
          var v4174 = a$$57.document;
          v3330 = JAM.call(v4174.getElementById, v4174, [g$$5], JAM.policy.p4);
        }
        v1925 = v3330;
      }
      b$$45.id = g$$5;
      b$$45.name = g$$5;
      var v1926 = f$$6.google_ad_width;
      a$$57 = JAM.call(Number, null, [v1926], JAM.policy.p4);
      var v1927 = f$$6.google_ad_height;
      g$$5 = JAM.call(Number, null, [v1927], JAM.policy.p4);
      f$$6 = ["<iframe"];
      var h$$7;
      for (h$$7 in b$$45) {
        var v1928 = JAM.call(b$$45.hasOwnProperty, b$$45, [h$$7], JAM.policy.p4);
        if (v1928) {
          var v4176 = h$$7 + "=";
          var v4177 = b$$45[h$$7];
          var v3331 = v4176 + v4177;
          JAM.call(ua, null, [f$$6, v3331], JAM.policy.p4);
        }
      }
      JAM.call(f$$6.push, f$$6, ['style="left:0;position:absolute;top:0;"'], JAM.policy.p4);
      JAM.call(f$$6.push, f$$6, ["></iframe>"], JAM.policy.p4);
      var v4178 = "border:none;height:" + g$$5;
      var v3332 = v4178 + "px;margin:0;padding:0;position:relative;visibility:visible;width:";
      var v1929 = v3332 + a$$57;
      h$$7 = v1929 + "px;background-color:transparent";
      var v1930 = c$$23;
      var v4670 = b$$45.id;
      var v4179 = v4670 + "_anchor";
      var v4180 = JAM.call(f$$6.join, f$$6, [" "], JAM.policy.p4);
      var v3333 = ['<ins style="display:inline-table;', h$$7, '"><ins id="', v4179, '" style="display:block;', h$$7, '">', v4180, "</ins></ins>"];
      var v5205 = JAM.call(v3333.join, v3333, [""], JAM.policy.p4);
      JAM.set(v1930, "innerHTML", v5205);
      return b$$45.id;
    }
    JAM.call(eb, null, [a$$56, b$$44, c$$23, v2], JAM.policy.p4);
    return;
  }
  function db(a$$55, b$$43, c$$22, d$$17) {
    var v1931;
    if (d$$17) {
      v1931 = '"';
    } else {
      v1931 = "";
    }
    d$$17 = v1931;
    var v1932 = d$$17 + "0";
    var e$$14 = v1932 + d$$17;
    var v1933 = d$$17 + b$$43;
    a$$55.width = v1933 + d$$17;
    var v1934 = d$$17 + c$$22;
    a$$55.height = v1934 + d$$17;
    a$$55.frameborder = e$$14;
    a$$55.marginwidth = e$$14;
    a$$55.marginheight = e$$14;
    a$$55.vspace = e$$14;
    a$$55.hspace = e$$14;
    var v1935 = d$$17 + "true";
    a$$55.allowtransparency = v1935 + d$$17;
    var v1936 = d$$17 + "no";
    a$$55.scrolling = v1936 + d$$17;
    return;
  }
  function cb(a$$53) {
    function v3(a$$54, d$$16) {
      var v1937 = null != a$$54;
      if (v1937) {
        var v4919 = " " + d$$16;
        var v4671 = v4919 + '="';
        var v4181 = v4671 + a$$54;
        var v3334 = v4181 + '"';
        JAM.call(b$$42.push, b$$42, [v3334], JAM.policy.p4);
      }
      return;
    }
    var b$$42 = ["<iframe"];
    JAM.call(G, null, [a$$53, v3], JAM.policy.p4);
    JAM.call(b$$42.push, b$$42, ["></iframe>"], JAM.policy.p4);
    return JAM.call(b$$42.join, b$$42, [""], JAM.policy.p4);
  }
  function bb(a$$52, b$$41, c$$21, d$$15) {
    function v4() {
      var e$$13 = !1;
      if (d$$15) {
        var v3335 = JAM.call(Xa, null, [], JAM.policy.p4);
        JAM.call(v3335.al, v3335, [3E4], JAM.policy.p4);
      }
      try {
        var v4672 = a$$52.document;
        var v4182 = JAM.call(v4672.getElementById, v4672, [b$$41], JAM.policy.p4);
        var v3336 = v4182.contentWindow;
        var v1952 = JAM.call(J, null, [v3336], JAM.policy.p4);
        if (v1952) {
          var v3337 = a$$52.document;
          var v1938 = JAM.call(v3337.getElementById, v3337, [b$$41], JAM.policy.p4);
          var f$$5 = v1938.contentWindow;
          var g$$4 = f$$5.document;
          var v3338 = g$$4.body;
          if (v3338) {
            var v4183 = g$$4.body;
            v3338 = v4183.firstChild;
          }
          var v1939 = v3338;
          var v3339 = !v1939;
          if (v3339) {
            JAM.call(g$$4.open, g$$4, [], JAM.policy.p4);
            f$$5.google_async_iframe_close = !0;
            JAM.call(g$$4.write, g$$4, [c$$21], JAM.policy.p4);
          }
        } else {
          var v3340 = a$$52.document;
          var v1940 = JAM.call(v3340.getElementById, v3340, [b$$41], JAM.policy.p4);
          var l$$2 = v1940.contentWindow;
          var h$$6;
          f$$5 = c$$21;
          f$$5 = JAM.call(String, null, [f$$5], JAM.policy.p4);
          var v1949 = f$$5.quote;
          if (v1949) {
            h$$6 = JAM.call(f$$5.quote, f$$5, [], JAM.policy.p4);
          } else {
            g$$4 = ['"'];
            var k$$1 = 0;
            var v3341 = f$$5.length;
            var v1948 = k$$1 < v3341;
            for (;v1948;) {
              var m$$1 = JAM.call(f$$5.charAt, f$$5, [k$$1], JAM.policy.p4);
              var q$$1 = JAM.call(m$$1.charCodeAt, m$$1, [0], JAM.policy.p4);
              var x$$48 = g$$4;
              var B = k$$1 + 1;
              var u;
              var v3342 = u = E[m$$1];
              var v1947 = !v3342;
              if (v1947) {
                var r;
                var v3343 = 31 < q$$1;
                if (v3343) {
                  v3343 = 127 > q$$1;
                }
                var v1946 = v3343;
                if (v1946) {
                  r = m$$1;
                } else {
                  var t = m$$1;
                  var v1945 = t in F;
                  if (v1945) {
                    r = F[t];
                  } else {
                    var v1944 = t in E;
                    if (v1944) {
                      r = JAM.set(F, t, E[t], JAM.policy.p2);
                    } else {
                      var s$$2 = t;
                      var y$$30 = JAM.call(t.charCodeAt, t, [0], JAM.policy.p4);
                      var v3344 = 31 < y$$30;
                      if (v3344) {
                        v3344 = 127 > y$$30;
                      }
                      var v1943 = v3344;
                      if (v1943) {
                        s$$2 = t;
                      } else {
                        var v1942 = 256 > y$$30;
                        if (v1942) {
                          s$$2 = "\\x";
                          var v4184 = 16 > y$$30;
                          var v4673 = !v4184;
                          if (v4673) {
                            v4184 = 256 < y$$30;
                          }
                          var v1941 = v4184;
                          if (v1941) {
                            s$$2 = s$$2 + "0";
                          }
                        } else {
                          s$$2 = "\\u";
                          var v3345 = 4096 > y$$30;
                          if (v3345) {
                            s$$2 = s$$2 + "0";
                          }
                        }
                        var v3346 = s$$2;
                        var v4185 = JAM.call(y$$30.toString, y$$30, [16], JAM.policy.p4);
                        var v3347 = JAM.call(v4185.toUpperCase, v4185, [], JAM.policy.p4);
                        s$$2 = v3346 + v3347;
                      }
                      r = JAM.set(F, t, s$$2, JAM.policy.p2);
                    }
                  }
                }
                u = r;
              }
              introspect(JAM.policy.p2) {
                x$$48[B] = u;
              }
              k$$1 = k$$1 + 1;
              var v3348 = f$$5.length;
              v1948 = k$$1 < v3348;
            }
            JAM.call(g$$4.push, g$$4, ['"'], JAM.policy.p4);
            h$$6 = JAM.call(g$$4.join, g$$4, [""], JAM.policy.p4);
          }
          var v1950 = l$$2.location;
          var v1951 = "javascript:" + h$$6;
          JAM.call(v1950.replace, v1950, [v1951], JAM.policy.p4);
        }
        e$$13 = !0;
      } catch (sb) {
        var v3349 = JAM.call(Da, null, [], JAM.policy.p4);
        l$$2 = v3349.google_jobrunner;
        var v3350 = JAM.call(Wa, null, [l$$2], JAM.policy.p4);
        if (v3350) {
          JAM.call(l$$2.rl, l$$2, [], JAM.policy.p4);
        }
      }
      if (e$$13) {
        e$$13 = JAM.call(La, null, ["google_async_rrc", c$$21], JAM.policy.p4);
        var v4186 = JAM.new(Q, [a$$52], JAM.policy.p4);
        var v4674 = !1;
        var v4187 = JAM.call(bb, null, [a$$52, b$$41, e$$13, v4674], JAM.policy.p4);
        JAM.call(v4186.set, v4186, [b$$41, v4187], JAM.policy.p4);
      }
      return;
    }
    return v4;
  }
  function ab() {
    var a$$51 = "script";
    var v4188 = JAM.call(A, null, ["", "googlesyndication"], JAM.policy.p4);
    var v3351 = JAM.call(C, null, [v4188, "/pagead/js/r20131120/r20130906/show_ads_impl.js", ""], JAM.policy.p4);
    var v1953 = ["<", a$$51, ' src="', v3351, '"></', a$$51, ">"];
    return JAM.call(v1953.join, v1953, [""], JAM.policy.p4);
  }
  function Za(a$$50, b$$40) {
    var v1954 = JAM.call(Xa, null, [], JAM.policy.p4);
    JAM.call(v1954.nqa, v1954, [a$$50, b$$40], JAM.policy.p4);
    return;
  }
  function Ya(a$$49, b$$39) {
    var v1955 = JAM.call(Xa, null, [], JAM.policy.p4);
    JAM.call(v1955.nq, v1955, [a$$49, b$$39], JAM.policy.p4);
    return;
  }
  function Xa() {
    var v3352 = X;
    if (v3352) {
      v3352 = JAM.call(Va, null, [X], JAM.policy.p4);
    }
    var v1956 = v3352;
    if (v1956) {
      return X;
    }
    var a$$48 = JAM.call(Da, null, [], JAM.policy.p4);
    var b$$38 = a$$48.google_jobrunner;
    var v1957;
    var v3354 = JAM.call(Wa, null, [b$$38], JAM.policy.p4);
    if (v3354) {
      v1957 = X = b$$38;
    } else {
      var v3353 = a$$48;
      v1957 = v3353.google_jobrunner = X = JAM.new(Y, [a$$48], JAM.policy.p4);
    }
    return v1957;
  }
  function Wa(a$$47) {
    var v5081 = !a$$47;
    var v5040 = !v5081;
    if (v5040) {
      var v5104 = typeof a$$47;
      var v5082 = "object" == v5104;
      var v5106 = !v5082;
      if (v5106) {
        var v5105 = typeof a$$47;
        v5082 = "function" == v5105;
      }
      v5040 = v5082;
    }
    var v4920 = v5040;
    if (v4920) {
      v4920 = JAM.call(Va, null, [a$$47], JAM.policy.p4);
    }
    var v4675 = v4920;
    if (v4675) {
      var v4921 = a$$47.nq;
      v4675 = JAM.call(H, null, [v4921], JAM.policy.p4);
    }
    var v4189 = v4675;
    if (v4189) {
      var v4676 = a$$47.nqa;
      v4189 = JAM.call(H, null, [v4676], JAM.policy.p4);
    }
    var v3355 = v4189;
    if (v3355) {
      var v4190 = a$$47.al;
      v3355 = JAM.call(H, null, [v4190], JAM.policy.p4);
    }
    var v1958 = v3355;
    if (v1958) {
      var v3356 = a$$47.rl;
      v1958 = JAM.call(H, null, [v3356], JAM.policy.p4);
    }
    return v1958;
  }
  function Va(a$$46) {
    try {
      return JAM.call(a$$46.sz, a$$46, [], JAM.policy.p4);
    } catch (b$$37) {
      return!1;
    }
    return;
  }
  function Ua(a$$43) {
    var v3357 = a$$43.m;
    var v1959 = JAM.call(p, null, [v3357, a$$43], JAM.policy.p4);
    var b$$35 = JAM.call(M, null, ["sjr::tryrun", v1959], JAM.policy.p4);
    var v1960 = a$$43.b;
    JAM.call(v1960.setTimeout, v1960, [b$$35, 0], JAM.policy.p4);
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
    var v3358 = "\\b" + a$$37;
    var v1961 = v3358 + "=(\\d+)";
    var c$$20 = JAM.call(RegExp, null, [v1961], JAM.policy.p4);
    var d$$14 = JAM.call(c$$20.exec, c$$20, [b$$30], JAM.policy.p4);
    if (d$$14) {
      var v4191 = a$$37 + "=";
      var v5041 = d$$14[1];
      var v4922 = +v5041;
      var v4677 = v4922 + 1;
      var v4923 = !v4677;
      if (v4923) {
        v4677 = 1;
      }
      var v4192 = v4677;
      var v3359 = v4191 + v4192;
      b$$30 = JAM.call(b$$30.replace, b$$30, [c$$20, v3359], JAM.policy.p4);
    }
    return b$$30;
  }
  function Q(a$$33) {
    this.b = a$$33;
    var v1962 = a$$33.google_iframe_oncopy;
    var v3361 = !v1962;
    if (v3361) {
      var v3360 = a$$33;
      var v4678 = this.l;
      var v4193 = JAM.call(p, null, [v4678, this], JAM.policy.p4);
      v3360.google_iframe_oncopy = {handlers:{}, upd:v4193};
    }
    this.i = a$$33.google_iframe_oncopy;
    return;
  }
  function Ja(a$$32) {
    try {
      var v3362 = a$$32.location;
      var v1963 = v3362.host;
      var b$$26 = JAM.call(Ia.test, Ia, [v1963], JAM.policy.p4);
      var v4924 = a$$32.postMessage;
      var v4679 = !v4924;
      var v4926 = !v4679;
      if (v4926) {
        var v4925 = a$$32.localStorage;
        v4679 = !v4925;
      }
      var v4194 = v4679;
      var v4681 = !v4194;
      if (v4681) {
        var v4680 = a$$32.JSON;
        v4194 = !v4680;
      }
      var v3363 = v4194;
      var v4195 = !v3363;
      if (v4195) {
        v3363 = b$$26;
      }
      var v1964 = v3363;
      return!v1964;
    } catch (c$$18) {
      return!1;
    }
    return;
  }
  function Ha(a$$30) {
    function v5(a$$31, d$$12) {
      var v1966 = null != a$$31;
      if (v1966) {
        var e$$12;
        try {
          var f$$4 = [];
          var v1965 = JAM.new(Ea, [], JAM.policy.p4);
          JAM.call(O, null, [v1965, a$$31, f$$4], JAM.policy.p4);
          e$$12 = JAM.call(f$$4.join, f$$4, [""], JAM.policy.p4);
        } catch (g$$3) {
        }
        if (e$$12) {
          JAM.call(ua, null, [b$$25, d$$12, "=", e$$12, ";"], JAM.policy.p4);
        }
      }
      return;
    }
    var v1967 = a$$30.google_page_url;
    if (v1967) {
      var v3364 = a$$30;
      var v4196 = a$$30.google_page_url;
      var v5206 = JAM.call(String, null, [v4196], JAM.policy.p4);
      v3364.google_page_url = v5206;
    }
    var b$$25 = [];
    JAM.call(G, null, [a$$30, v5], JAM.policy.p4);
    return JAM.call(b$$25.join, b$$25, [""], JAM.policy.p4);
  }
  function Fa(a$$28, b$$23) {
    function v6(a$$29) {
      var v1968 = a$$29 in P;
      if (v1968) {
        return P[a$$29];
      }
      var b$$24 = JAM.call(a$$29.charCodeAt, a$$29, [0], JAM.policy.p4);
      var e$$11 = "\\u";
      var v1969;
      var v3366 = 16 > b$$24;
      if (v3366) {
        v1969 = e$$11 = e$$11 + "000";
      } else {
        var v3365;
        var v4198 = 256 > b$$24;
        if (v4198) {
          v3365 = e$$11 = e$$11 + "00";
        } else {
          var v4197 = 4096 > b$$24;
          if (v4197) {
            v4197 = e$$11 = e$$11 + "0";
          }
          v3365 = v4197;
        }
        v1969 = v3365;
      }
      v1969;
      var v1970 = P;
      var v1971 = a$$29;
      var v3367 = e$$11;
      var v3368 = JAM.call(b$$24.toString, b$$24, [16], JAM.policy.p4);
      return JAM.set(v1970, v1971, v3367 + v3368, JAM.policy.p2);
    }
    JAM.call(b$$23.push, b$$23, ['"'], JAM.policy.p4);
    var v1972 = JAM.call(a$$28.replace, a$$28, [Ga, v6], JAM.policy.p4);
    JAM.call(b$$23.push, b$$23, [v1972], JAM.policy.p4);
    JAM.call(b$$23.push, b$$23, ['"'], JAM.policy.p4);
    return;
  }
  function O(a$$27, b$$22, c$$17) {
    var v1979 = typeof b$$22;
    switch(v1979) {
      case "string":
        JAM.call(Fa, null, [b$$22, c$$17], JAM.policy.p4);
        break;
      case "number":
        var v3369;
        var v4682 = JAM.call(isFinite, null, [b$$22], JAM.policy.p4);
        if (v4682) {
          var v4927 = JAM.call(isNaN, null, [b$$22], JAM.policy.p4);
          v4682 = !v4927;
        }
        var v4199 = v4682;
        if (v4199) {
          v3369 = b$$22;
        } else {
          v3369 = "null";
        }
        var v1973 = v3369;
        JAM.call(c$$17.push, c$$17, [v1973], JAM.policy.p4);
        break;
      case "boolean":
        JAM.call(c$$17.push, c$$17, [b$$22], JAM.policy.p4);
        break;
      case "undefined":
        JAM.call(c$$17.push, c$$17, ["null"], JAM.policy.p4);
        break;
      case "object":
        var v1974 = null == b$$22;
        if (v1974) {
          JAM.call(c$$17.push, c$$17, ["null"], JAM.policy.p4);
          break;
        }
        var v1976 = b$$22 instanceof Array;
        if (v1976) {
          var d$$11 = b$$22.length;
          JAM.call(c$$17.push, c$$17, ["["], JAM.policy.p4);
          var e$$10 = "";
          var f$$3 = 0;
          var v1975 = f$$3 < d$$11;
          for (;v1975;) {
            JAM.call(c$$17.push, c$$17, [e$$10], JAM.policy.p4);
            var v4200 = b$$22[f$$3];
            JAM.call(O, null, [a$$27, v4200, c$$17], JAM.policy.p4);
            e$$10 = ",";
            f$$3 = f$$3 + 1;
            v1975 = f$$3 < d$$11;
          }
          JAM.call(c$$17.push, c$$17, ["]"], JAM.policy.p4);
          break;
        }
        JAM.call(c$$17.push, c$$17, ["{"], JAM.policy.p4);
        d$$11 = "";
        for (e$$10 in b$$22) {
          var v1977 = JAM.call(b$$22.hasOwnProperty, b$$22, [e$$10], JAM.policy.p4);
          if (v1977) {
            f$$3 = b$$22[e$$10];
            var v4683 = typeof f$$3;
            var v4201 = "function" != v4683;
            if (v4201) {
              JAM.call(c$$17.push, c$$17, [d$$11], JAM.policy.p4);
              JAM.call(Fa, null, [e$$10, c$$17], JAM.policy.p4);
              JAM.call(c$$17.push, c$$17, [":"], JAM.policy.p4);
              JAM.call(O, null, [a$$27, f$$3, c$$17], JAM.policy.p4);
              d$$11 = ",";
            }
          }
        }
        JAM.call(c$$17.push, c$$17, ["}"], JAM.policy.p4);
        break;
      case "function":
        break;
      default:
        var v3370 = typeof b$$22;
        var v1978 = "Unknown type: " + v3370;
        throw JAM.call(Error, null, [v1978], JAM.policy.p4);;
    }
    return;
  }
  function Ea() {
    return;
  }
  function Da() {
    var v1982 = !N;
    if (v1982) {
      var a$$26 = window;
      var b$$21 = a$$26;
      var c$$16 = 0;
      var v3371 = a$$26.parent;
      var v1981 = a$$26 != v3371;
      for (;v1981;) {
        a$$26 = a$$26.parent;
        c$$16 = c$$16 + 1;
        var v1980 = JAM.call(J, null, [a$$26], JAM.policy.p4);
        if (v1980) {
          b$$21 = a$$26;
        } else {
          break;
        }
        var v3372 = a$$26.parent;
        v1981 = a$$26 != v3372;
      }
      N = b$$21;
    }
    return N;
  }
  function Ca(a$$24) {
    function v7(a$$25, d$$10) {
      var v3373 = 0 === a$$25;
      var v4202 = !v3373;
      if (v4202) {
        v3373 = a$$25;
      }
      var v1983 = v3373;
      if (v1983) {
        var v3374 = b$$20;
        var v4684 = "&" + d$$10;
        var v4203 = v4684 + "=";
        var v4685;
        var v5042 = typeof encodeURIComponent;
        var v4928 = "function" == v5042;
        if (v4928) {
          v4685 = JAM.call(encodeURIComponent, null, [a$$25], JAM.policy.p4);
        } else {
          v4685 = JAM.call(escape, null, [a$$25], JAM.policy.p4);
        }
        var v4204 = v4685;
        var v3375 = v4203 + v4204;
        b$$20 = v3374 + v3375;
      }
      return;
    }
    var b$$20 = "";
    JAM.call(G, null, [a$$24, v7], JAM.policy.p4);
    return b$$20;
  }
  function M(a$$23, b$$19) {
    var v1984 = void 0;
    return JAM.call(da, null, [K, a$$23, L, b$$19, v1984], JAM.policy.p4);
  }
  function Ba(a$$21) {
    function v8(a$$22, d$$9) {
      JAM.set(b$$18, d$$9, D[a$$22], JAM.policy.p2);
      return;
    }
    var b$$18 = a$$21 || {};
    JAM.call(G, null, [za, v8], JAM.policy.p4);
    return;
  }
  function Aa(a$$20) {
    var v3376 = JAM.call(Math.random, Math, [], JAM.policy.p4);
    var v1990 = .01 > v3376;
    if (v1990) {
      var v1985 = JAM.call(Ca, null, [a$$20], JAM.policy.p4);
      a$$20 = "/pagead/gen_204?id=jserror" + v1985;
      var v1986 = JAM.call(A, null, ["", "googlesyndication"], JAM.policy.p4);
      a$$20 = JAM.call(C, null, [v1986, a$$20], JAM.policy.p4);
      a$$20 = JAM.call(a$$20.substring, a$$20, [0, 2E3], JAM.policy.p4);
      var v1987 = D.google_image_requests;
      var v3377 = !v1987;
      if (v3377) {
        D.google_image_requests = [];
      }
      var v1988 = D.document;
      var b$$17 = JAM.call(v1988.createElement, v1988, ["img"], JAM.policy.p4);
      b$$17.src = a$$20;
      var v1989 = D.google_image_requests;
      JAM.call(v1989.push, v1989, [b$$17], JAM.policy.p4);
    }
    return;
  }
  function L(a$$19, b$$16, c$$15, d$$8, e$$9) {
    var v3378;
    if (fa) {
      v3378 = 1;
    } else {
      v3378 = 0;
    }
    var v1991 = v3378;
    var v3379;
    if (ga) {
      v3379 = 1;
    } else {
      v3379 = 0;
    }
    var v1992 = v3379;
    var v1993 = JAM.call(b$$16.substring, b$$16, [0, 512], JAM.policy.p4);
    var v3380 = e$$9;
    if (v3380) {
      v3380 = JAM.call(e$$9.substring, e$$9, [0, 40], JAM.policy.p4);
    }
    var v1994 = v3380;
    var v1995 = JAM.call(d$$8.toString, d$$8, [], JAM.policy.p4);
    var v3381 = pa.URL;
    var v1996 = JAM.call(v3381.substring, v3381, [0, 512], JAM.policy.p4);
    var v3382 = pa.referrer;
    var v1997 = JAM.call(v3382.substring, v3382, [0, 512], JAM.policy.p4);
    a$$19 = {jscb:v1991, jscd:v1992, context:a$$19, msg:v1993, eid:v1994, file:c$$15, line:v1995, url:v1996, ref:v1997};
    JAM.call(Ba, null, [a$$19], JAM.policy.p4);
    JAM.call(Aa, null, [a$$19], JAM.policy.p4);
    return!ha;
  }
  function K(a$$18, b$$15, c$$14, d$$7) {
    try {
      JAM.call(c$$14, null, [], JAM.policy.p4);
    } catch (e$$8) {
      c$$14 = !ha;
      try {
        var f$$2 = JAM.call(e$$8.toString, e$$8, [], JAM.policy.p4);
        var v3383 = e$$8.name;
        if (v3383) {
          var v4686 = e$$8.name;
          var v4205 = JAM.call(f$$2.indexOf, f$$2, [v4686], JAM.policy.p4);
          v3383 = -1 == v4205;
        }
        var v1998 = v3383;
        if (v1998) {
          var v4687 = e$$8.name;
          var v4206 = ": " + v4687;
          f$$2 = f$$2 + v4206;
        }
        var v3384 = e$$8.message;
        if (v3384) {
          var v4688 = e$$8.message;
          var v4207 = JAM.call(f$$2.indexOf, f$$2, [v4688], JAM.policy.p4);
          v3384 = -1 == v4207;
        }
        var v1999 = v3384;
        if (v1999) {
          var v4689 = e$$8.message;
          var v4208 = ": " + v4689;
          f$$2 = f$$2 + v4208;
        }
        var v2002 = e$$8.stack;
        if (v2002) {
          var g$$2 = e$$8.stack;
          var l$$1 = f$$2;
          try {
            var v3385 = JAM.call(g$$2.indexOf, g$$2, [l$$1], JAM.policy.p4);
            var v2000 = -1 == v3385;
            if (v2000) {
              var v3386 = l$$1 + "\n";
              g$$2 = v3386 + g$$2;
            }
            var h$$5;
            var v2001 = g$$2 != h$$5;
            for (;v2001;) {
              h$$5 = g$$2;
              g$$2 = JAM.call(g$$2.replace, g$$2, [/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1"], JAM.policy.p4);
              v2001 = g$$2 != h$$5;
            }
            f$$2 = JAM.call(g$$2.replace, g$$2, [/\n */g, "\n"], JAM.policy.p4);
          } catch (k) {
            f$$2 = l$$1;
          }
        }
        g$$2 = "";
        var v2003 = e$$8.fileName;
        if (v2003) {
          g$$2 = e$$8.fileName;
        }
        h$$5 = -1;
        var v2004 = e$$8.lineNumber;
        if (v2004) {
          h$$5 = e$$8.lineNumber;
        }
        var m;
        t: {
          try {
            var v2005;
            if (d$$7) {
              v2005 = JAM.call(d$$7, null, [], JAM.policy.p4);
            } else {
              v2005 = "";
            }
            m = v2005;
            break t;
          } catch (q) {
          }
          m = "";
        }
        c$$14 = JAM.call(b$$15, null, [a$$18, f$$2, g$$2, h$$5, m], JAM.policy.p4);
      } catch (x$$47) {
        var v4690 = JAM.call(x$$47.toString, x$$47, [], JAM.policy.p4);
        var v4209 = v4690 + "\n";
        var v4691 = x$$47.stack;
        var v4929 = !v4691;
        if (v4929) {
          v4691 = "";
        }
        var v4210 = v4691;
        var v3387 = v4209 + v4210;
        var v2006 = {context:"protectAndRun", msg:v3387};
        JAM.call(Aa, null, [v2006], JAM.policy.p4);
      }
      var v2007 = !c$$14;
      if (v2007) {
        throw e$$8;
      }
    }
    return;
  }
  function J(a$$17) {
    try {
      var v4692 = a$$17.location;
      var v4211 = v4692.href;
      var v3388 = !v4211;
      var v2008 = !v3388;
      var v3390 = !v2008;
      if (v3390) {
        var v4212 = a$$17.location;
        var v3389 = v4212.href;
        v2008 = "" === v3389;
      }
      return v2008;
    } catch (b$$14) {
      return!1;
    }
    return;
  }
  function ya(a$$16, b$$13, c$$13) {
    var v2009 = b$$13.google_ad_slot;
    var v2010 = b$$13.google_ad_format;
    var v2011 = b$$13.google_ad_type;
    var v2012 = b$$13.google_ad_width;
    var v2013 = b$$13.google_ad_height;
    b$$13 = [v2009, v2010, v2011, v2012, v2013];
    if (c$$13) {
      c$$13 = [];
      var d$$6 = 0;
      var v3391 = a$$16;
      if (v3391) {
        v3391 = 25 > d$$6;
      }
      var v2015 = v3391;
      for (;v2015;) {
        var v4693 = a$$16.nodeType;
        var v4213 = 9 != v4693;
        if (v4213) {
          v4213 = a$$16.id;
        }
        var v3392 = v4213;
        var v4214 = !v3392;
        if (v4214) {
          v3392 = "";
        }
        var v2014 = v3392;
        JAM.call(c$$13.push, c$$13, [v2014], JAM.policy.p4);
        a$$16 = a$$16.parentNode;
        d$$6 = d$$6 + 1;
        var v3393 = a$$16;
        if (v3393) {
          v3393 = 25 > d$$6;
        }
        v2015 = v3393;
      }
      var v2016 = a$$16 = JAM.call(c$$13.join, c$$13, [], JAM.policy.p4);
      if (v2016) {
        JAM.call(b$$13.push, b$$13, [a$$16], JAM.policy.p4);
      }
    } else {
      var v3394 = JAM.call(wa, null, [a$$16], JAM.policy.p4);
      JAM.call(b$$13.push, b$$13, [v3394], JAM.policy.p4);
      var v3395 = JAM.call(xa, null, [], JAM.policy.p4);
      JAM.call(b$$13.push, b$$13, [v3395], JAM.policy.p4);
    }
    b$$13 = JAM.call(b$$13.join, b$$13, [":"], JAM.policy.p4);
    a$$16 = b$$13.length;
    var v2019 = 0 == a$$16;
    if (v2019) {
      b$$13 = 0;
    } else {
      c$$13 = 305419896;
      d$$6 = 0;
      var v2017 = d$$6 < a$$16;
      for (;v2017;) {
        var v3396 = c$$13;
        var v4930 = c$$13 << 5;
        var v4931 = c$$13 >> 2;
        var v4694 = v4930 + v4931;
        var v4695 = JAM.call(b$$13.charCodeAt, b$$13, [d$$6], JAM.policy.p4);
        var v4215 = v4694 + v4695;
        var v3397 = v4215 & 4294967295;
        c$$13 = v3396 ^ v3397;
        d$$6 = d$$6 + 1;
        v2017 = d$$6 < a$$16;
      }
      var v2018;
      var v3398 = 0 < c$$13;
      if (v3398) {
        v2018 = c$$13;
      } else {
        v2018 = 4294967296 + c$$13;
      }
      b$$13 = v2018;
    }
    return JAM.call(b$$13.toString, b$$13, [], JAM.policy.p4);
  }
  function xa() {
    var a$$15 = D;
    var b$$12 = [];
    if (a$$15) {
      try {
        var c$$12 = a$$15.parent;
        var d$$5 = 0;
        var v4216 = c$$12;
        if (v4216) {
          v4216 = c$$12 != a$$15;
        }
        var v3399 = v4216;
        if (v3399) {
          v3399 = 25 > d$$5;
        }
        var v2022 = v3399;
        for (;v2022;) {
          var e$$7 = c$$12.frames;
          var f$$1 = 0;
          var v3400 = e$$7.length;
          var v2021 = f$$1 < v3400;
          for (;v2021;) {
            var v3401 = e$$7[f$$1];
            var v2020 = a$$15 == v3401;
            if (v2020) {
              JAM.call(b$$12.push, b$$12, [f$$1], JAM.policy.p4);
              break;
            }
            f$$1 = f$$1 + 1;
            var v3402 = e$$7.length;
            v2021 = f$$1 < v3402;
          }
          a$$15 = c$$12;
          c$$12 = a$$15.parent;
          d$$5 = d$$5 + 1;
          var v4217 = c$$12;
          if (v4217) {
            v4217 = c$$12 != a$$15;
          }
          var v3403 = v4217;
          if (v3403) {
            v3403 = 25 > d$$5;
          }
          v2022 = v3403;
        }
      } catch (g$$1) {
      }
    }
    return JAM.call(b$$12.join, b$$12, [], JAM.policy.p4);
  }
  function wa(a$$14) {
    var b$$11 = [];
    var c$$11 = 0;
    var v3404 = a$$14;
    if (v3404) {
      v3404 = 25 > c$$11;
    }
    var v2030 = v3404;
    for (;v2030;) {
      var v3405 = a$$14.nodeType;
      var v2023 = 9 != v3405;
      if (v2023) {
        v2023 = a$$14.id;
      }
      var d$$4 = v2023;
      var v2024;
      if (d$$4) {
        v2024 = "/" + d$$4;
      } else {
        v2024 = "";
      }
      d$$4 = v2024;
      var e$$6;
      t: {
        var f = a$$14.parentElement;
        var v2025 = a$$14.nodeName;
        e$$6 = JAM.call(v2025.toLowerCase, v2025, [], JAM.policy.p4);
        if (f) {
          f = f.childNodes;
          var g = 0;
          var l = 0;
          var v3406 = f.length;
          var v2028 = l < v3406;
          for (;v2028;) {
            var h$$4 = f[l];
            var v3407 = h$$4.nodeName;
            if (v3407) {
              var v4696 = h$$4.nodeName;
              var v4218 = JAM.call(v4696.toLowerCase, v4696, [], JAM.policy.p4);
              v3407 = v4218 == e$$6;
            }
            var v2027 = v3407;
            if (v2027) {
              var v2026 = a$$14 == h$$4;
              if (v2026) {
                e$$6 = "." + g;
                break t;
              }
              g = g + 1;
            }
            l = l + 1;
            var v3408 = f.length;
            v2028 = l < v3408;
          }
        }
        e$$6 = "";
      }
      var v4697 = a$$14.nodeName;
      if (v4697) {
        var v4932 = a$$14.nodeName;
        v4697 = JAM.call(v4932.toLowerCase, v4932, [], JAM.policy.p4);
      }
      var v4219 = v4697;
      var v3409 = v4219 + d$$4;
      var v2029 = v3409 + e$$6;
      JAM.call(b$$11.push, b$$11, [v2029], JAM.policy.p4);
      a$$14 = a$$14.parentElement;
      c$$11 = c$$11 + 1;
      var v3410 = a$$14;
      if (v3410) {
        v3410 = 25 > c$$11;
      }
      v2030 = v3410;
    }
    return JAM.call(b$$11.join, b$$11, [], JAM.policy.p4);
  }
  function va(a$$13) {
    var v2031;
    var v3411 = a$$13.google_unique_id;
    if (v3411) {
      var v4220 = a$$13.google_unique_id;
      v2031 = a$$13.google_unique_id = v4220 + 1;
    } else {
      v2031 = a$$13.google_unique_id = 1;
    }
    v2031;
    return;
  }
  function I(a$$12, b$$10) {
    var v4221 = JAM.call(Math.random, Math, [], JAM.policy.p4);
    var v3412 = 1E-4 > v4221;
    var v2037 = !v3412;
    if (v2037) {
      var c$$10 = JAM.call(Math.random, Math, [], JAM.policy.p4);
      var v2036 = c$$10 < b$$10;
      if (v2036) {
        try {
          var d$$3 = JAM.new(Uint16Array, [1], JAM.policy.p4);
          var v2032 = window.crypto;
          JAM.call(v2032.getRandomValues, v2032, [d$$3], JAM.policy.p4);
          var v2033 = d$$3[0];
          c$$10 = v2033 / 65536;
        } catch (e$$5) {
          c$$10 = JAM.call(Math.random, Math, [], JAM.policy.p4);
        }
        var v2034 = a$$12;
        var v4222 = a$$12.length;
        var v3413 = c$$10 * v4222;
        var v2035 = JAM.call(Math.floor, Math, [v3413], JAM.policy.p4);
        return v2034[v2035];
      }
    }
    return null;
  }
  function ua(a$$11, b$$9) {
    var v4223 = arguments.length;
    var v3414 = 2 > v4223;
    var v2040 = !v3414;
    if (v2040) {
      var c$$9 = 1;
      var d$$2 = arguments.length;
      var v2039 = c$$9 < d$$2;
      for (;v2039;) {
        var v2038 = arguments[c$$9];
        JAM.call(a$$11.push, a$$11, [v2038], JAM.policy.p4);
        c$$9 = c$$9 + 1;
        v2039 = c$$9 < d$$2;
      }
    }
    return;
  }
  function H(a$$10) {
    var v4224 = !a$$10;
    var v3415 = !v4224;
    if (v3415) {
      var v4225 = typeof a$$10;
      v3415 = "function" == v4225;
    }
    var v2041 = v3415;
    if (v2041) {
      var v4226 = a$$10.call;
      var v3416 = !v4226;
      v2041 = !v3416;
    }
    return v2041;
  }
  function G(a$$9, b$$8) {
    var c$$8;
    for (c$$8 in a$$9) {
      var v4227 = Object.prototype;
      var v3417 = v4227.hasOwnProperty;
      var v2042 = JAM.call(v3417.call, v3417, [a$$9, c$$8], JAM.policy.p4);
      if (v2042) {
        var v3418 = a$$9[c$$8];
        JAM.call(b$$8.call, b$$8, [null, v3418, c$$8, a$$9], JAM.policy.p4);
      }
    }
    return;
  }
  function C(a$$8, b$$7, c$$7) {
    var v3420 = !c$$7;
    if (v3420) {
      var v3419;
      if (ia) {
        v3419 = "https";
      } else {
        v3419 = "http";
      }
      c$$7 = v3419;
    }
    var v2043 = [c$$7, "://", a$$8, b$$7];
    return JAM.call(v2043.join, v2043, [""], JAM.policy.p4);
  }
  function A(a$$7, b$$6) {
    var v2044 = !a$$7;
    if (v2044) {
      return b$$6;
    }
    var c$$6 = JAM.call(a$$7.match, a$$7, [ea], JAM.policy.p4);
    var v2045;
    if (c$$6) {
      v2045 = c$$6[0];
    } else {
      v2045 = b$$6;
    }
    return v2045;
  }
  function z$$2(a$$6) {
    var v2046;
    var v3421 = JAM.call(/^true$/.test, /^true$/, [a$$6], JAM.policy.p4);
    if (v3421) {
      v2046 = !0;
    } else {
      v2046 = !1;
    }
    return v2046;
  }
  function w$$5(a$$5) {
    a$$5 = JAM.call(parseFloat, null, [a$$5], JAM.policy.p4);
    var v2047;
    var v4698 = JAM.call(isNaN, null, [a$$5], JAM.policy.p4);
    var v4933 = !v4698;
    if (v4933) {
      v4698 = 1 < a$$5;
    }
    var v4228 = v4698;
    var v4699 = !v4228;
    if (v4699) {
      v4228 = 0 > a$$5;
    }
    var v3422 = v4228;
    if (v3422) {
      v2047 = 0;
    } else {
      v2047 = a$$5;
    }
    return v2047;
  }
  function da(a$$4, b$$4) {
    function v9() {
      var b$$5 = JAM.call(c$$5.slice, c$$5, [], JAM.policy.p4);
      var v2048 = b$$5.push;
      JAM.call(v2048.apply, v2048, [b$$5, arguments], JAM.policy.p4);
      return JAM.call(a$$4.apply, a$$4, [this, b$$5], JAM.policy.p4);
    }
    var v3423 = Array.prototype;
    var v2049 = v3423.slice;
    var c$$5 = JAM.call(v2049.call, v2049, [arguments, 1], JAM.policy.p4);
    return v9;
  }
  function p(a$$3, b$$3, c$$4) {
    var v2050;
    var v4700 = Function.prototype;
    var v4229 = v4700.bind;
    if (v4229) {
      var v5083 = Function.prototype;
      var v5043 = v5083.bind;
      var v4934 = JAM.call(v5043.toString, v5043, [], JAM.policy.p4);
      var v4701 = JAM.call(v4934.indexOf, v4934, ["native code"], JAM.policy.p4);
      v4229 = -1 != v4701;
    }
    var v3424 = v4229;
    if (v3424) {
      v2050 = ba;
    } else {
      v2050 = ca;
    }
    p = v2050;
    return JAM.call(p.apply, p, [null, arguments], JAM.policy.p4);
  }
  function ca(a$$2, b$$2, c$$2) {
    function v11() {
      return JAM.call(a$$2.apply, a$$2, [b$$2, arguments], JAM.policy.p4);
    }
    function v10() {
      var v3425 = Array.prototype;
      var v2051 = v3425.slice;
      var c$$3 = JAM.call(v2051.call, v2051, [arguments], JAM.policy.p4);
      var v3426 = Array.prototype;
      var v2052 = v3426.unshift;
      JAM.call(v2052.apply, v2052, [c$$3, d$$1], JAM.policy.p4);
      return JAM.call(a$$2.apply, a$$2, [b$$2, c$$3], JAM.policy.p4);
    }
    var v2053 = !a$$2;
    if (v2053) {
      throw JAM.call(Error, null, [], JAM.policy.p4);
    }
    var v3427 = arguments.length;
    var v2055 = 2 < v3427;
    if (v2055) {
      var v3428 = Array.prototype;
      var v2054 = v3428.slice;
      var d$$1 = JAM.call(v2054.call, v2054, [arguments, 2], JAM.policy.p4);
      return v10;
    }
    return v11;
  }
  function ba(a$$1, b$$1, c$$1) {
    var v2056 = a$$1.call;
    var v2057 = a$$1.bind;
    return JAM.call(v2056.apply, v2056, [v2057, arguments], JAM.policy.p4);
  }
  function aa(a, b) {
    var c = JAM.call(a.split, a, ["."], JAM.policy.p4);
    var d = n$$1;
    var v4230 = c[0];
    var v3429 = v4230 in d;
    var v4232 = !v3429;
    if (v4232) {
      var v4231 = d.execScript;
      v3429 = !v4231;
    }
    var v2058 = v3429;
    var v3431 = !v2058;
    if (v3431) {
      var v4233 = c[0];
      var v3430 = "var " + v4233;
      JAM.call(d.execScript, d, [v3430], JAM.policy.p4);
    }
    var e$$4;
    var v3432 = c.length;
    if (v3432) {
      v3432 = e$$4 = JAM.call(c.shift, c, [], JAM.policy.p4);
    }
    var v2060 = v3432;
    for (;v2060;) {
      var v2059;
      var v4234 = c.length;
      var v4703 = !v4234;
      if (v4703) {
        var v4702 = void 0;
        v4234 = v4702 === b;
      }
      var v3434 = v4234;
      if (v3434) {
        var v3433;
        var v4235 = d[e$$4];
        if (v4235) {
          v3433 = d[e$$4];
        } else {
          v3433 = JAM.set(d, e$$4, {}, JAM.policy.p2);
        }
        v2059 = d = v3433;
      } else {
        v2059 = JAM.set(d, e$$4, b, JAM.policy.p2);
      }
      v2059;
      var v3435 = c.length;
      if (v3435) {
        v3435 = e$$4 = JAM.call(c.shift, c, [], JAM.policy.p4);
      }
      v2060 = v3435;
    }
    return;
  }
  var n$$1 = this;
  var v2061 = JAM.new(Date, [], JAM.policy.p4);
  var v = JAM.call(v2061.getTime, v2061, [], JAM.policy.p4);
  var ea = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/;
  var fa = JAM.call(z$$2, null, ["false"], JAM.policy.p4);
  var ga = JAM.call(z$$2, null, ["false"], JAM.policy.p4);
  var ha = JAM.call(z$$2, null, ["false"], JAM.policy.p4);
  var ia = JAM.call(z$$2, null, ["false"], JAM.policy.p4);
  var ja = JAM.call(w$$5, null, ["0.15"], JAM.policy.p4);
  var ka = JAM.call(w$$5, null, ["0"], JAM.policy.p4);
  var la = JAM.call(w$$5, null, [""], JAM.policy.p4);
  var ma = JAM.call(w$$5, null, ["0.001"], JAM.policy.p4);
  var na = JAM.call(w$$5, null, ["0.2"], JAM.policy.p4);
  var pa = document;
  var D = window;
  var qa = /&/g;
  var ra = /</g;
  var sa = />/g;
  var ta = /\"/g;
  var E = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
  var F = {"'":"\\'"};
  JAM.call(A, null, ["", "googlesyndication"], JAM.policy.p4);
  var za = {client:"google_ad_client", format:"google_ad_format", slotname:"google_ad_slot", output:"google_ad_output", ad_type:"google_ad_type", async_oa:"google_async_for_oa_experiment", zrtm:"google_ad_handling_mode", dimpr:"google_always_use_delayed_impressions_experiment", peri:"google_top_experiment"};
  JAM.call(aa, null, ["google_protectAndRun", K], JAM.policy.p4);
  JAM.call(aa, null, ["google_handleError", L], JAM.policy.p4);
  var N = null;
  var P = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
  var v2062;
  var v3436 = JAM.call(/\uffff/.test, /\uffff/, ["\uffff"], JAM.policy.p4);
  if (v3436) {
    v2062 = /[\\\"\x00-\x1f\x7f-\uffff]/g;
  } else {
    v2062 = /[\\\"\x00-\x1f\x7f-\xff]/g;
  }
  var Ga = v2062;
  var Ia = /\.((google(|groups|mail|images|print))|gmail)\./;
  var Ka;
  var R = "var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
  var v2063 = JAM.call(/[&<>\"]/.test, /[&<>\"]/, [R], JAM.policy.p4);
  if (v2063) {
    var v5044 = JAM.call(R.indexOf, R, ["&"], JAM.policy.p4);
    var v4935 = -1 != v5044;
    if (v4935) {
      R = JAM.call(R.replace, R, [qa, "&amp;"], JAM.policy.p4);
    }
    var v5045 = JAM.call(R.indexOf, R, ["<"], JAM.policy.p4);
    var v4936 = -1 != v5045;
    if (v4936) {
      R = JAM.call(R.replace, R, [ra, "&lt;"], JAM.policy.p4);
    }
    var v4937 = JAM.call(R.indexOf, R, [">"], JAM.policy.p4);
    var v4704 = -1 != v4937;
    if (v4704) {
      R = JAM.call(R.replace, R, [sa, "&gt;"], JAM.policy.p4);
    }
    var v4705 = JAM.call(R.indexOf, R, ['"'], JAM.policy.p4);
    var v4236 = -1 != v4705;
    if (v4236) {
      R = JAM.call(R.replace, R, [ta, "&quot;"], JAM.policy.p4);
    }
  }
  Ka = R;
  var v2064 = Q.prototype;
  v2064.set = v12;
  var v2065 = Q.prototype;
  v2065.j = v13;
  var v2066 = Q.prototype;
  v2066.l = v14;
  var S;
  var T;
  var U;
  var Ma;
  Ma = U = T = S = !1;
  var V;
  var v3437;
  var v4238 = n$$1.navigator;
  if (v4238) {
    var v4237 = n$$1.navigator;
    v3437 = v4237.userAgent;
  } else {
    v3437 = null;
  }
  var v2071 = V = v3437;
  if (v2071) {
    var Oa = n$$1.navigator;
    var v2067 = JAM.call(V.lastIndexOf, V, ["Opera", 0], JAM.policy.p4);
    S = 0 == v2067;
    var v2068 = !S;
    if (v2068) {
      var v4239 = JAM.call(V.indexOf, V, ["MSIE"], JAM.policy.p4);
      var v3438 = -1 != v4239;
      var v4241 = !v3438;
      if (v4241) {
        var v4240 = JAM.call(V.indexOf, V, ["Trident"], JAM.policy.p4);
        v3438 = -1 != v4240;
      }
      v2068 = v3438;
    }
    T = v2068;
    var v2069 = !S;
    if (v2069) {
      var v3439 = JAM.call(V.indexOf, V, ["WebKit"], JAM.policy.p4);
      v2069 = -1 != v3439;
    }
    U = v2069;
    var v4242 = !S;
    if (v4242) {
      v4242 = !U;
    }
    var v3440 = v4242;
    if (v3440) {
      v3440 = !T;
    }
    var v2070 = v3440;
    if (v2070) {
      var v3441 = Oa.product;
      v2070 = "Gecko" == v3441;
    }
    Ma = v2070;
  }
  var Pa = T;
  var Qa = Ma;
  var Ra = U;
  var W;
  var v3442 = S;
  if (v3442) {
    v3442 = n$$1.opera;
  }
  var v2074 = v3442;
  if (v2074) {
    var v2072 = n$$1.opera;
    var Sa = v2072.version;
    var v3443 = typeof Sa;
    var v2073 = "function" == v3443;
    if (v2073) {
      JAM.call(Sa, null, [], JAM.policy.p4);
    }
  } else {
    var v3444;
    if (Qa) {
      v3444 = W = /rv\:([^\);]+)(\)|;)/;
    } else {
      var v4243;
      if (Pa) {
        v4243 = W = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/;
      } else {
        var v4706 = Ra;
        if (v4706) {
          v4706 = W = /WebKit\/(\S+)/;
        }
        v4243 = v4706;
      }
      v3444 = v4243;
    }
    v3444;
    if (W) {
      var v4707;
      var v4939 = n$$1.navigator;
      if (v4939) {
        var v4938 = n$$1.navigator;
        v4707 = v4938.userAgent;
      } else {
        v4707 = null;
      }
      var v4244 = v4707;
      JAM.call(W.exec, W, [v4244], JAM.policy.p4);
    }
  }
  var X;
  var v2075 = Y.prototype;
  v2075.n = v15;
  var v2076 = Y.prototype;
  v2076.g = v16;
  var v2077 = Y.prototype;
  v2077.o = v17;
  var v2078 = Y.prototype;
  v2078.e = v18;
  var v2079 = Y.prototype;
  v2079.p = v19;
  var v2080 = Y.prototype;
  var v3445 = Y.prototype;
  v2080.nq = v3445.n;
  var v2081 = Y.prototype;
  var v3446 = Y.prototype;
  v2081.nqa = v3446.g;
  var v2082 = Y.prototype;
  var v3447 = Y.prototype;
  v2082.al = v3447.o;
  var v2083 = Y.prototype;
  var v3448 = Y.prototype;
  v2083.rl = v3448.e;
  var v2084 = Y.prototype;
  var v3449 = Y.prototype;
  v2084.sz = v3449.p;
  var v2085 = Y.prototype;
  v2085.m = v20;
  var v2086 = Y.prototype;
  v2086.f = v21;
  var v2087 = !0;
  var v2088 = !0;
  var v2089 = !0;
  var v2090 = !0;
  var v2091 = !0;
  var v2092 = !0;
  var $a = {"120x90":v2087, "160x90":v2088, "180x90":v2089, "200x90":v2090, "468x15":v2091, "728x15":v2092};
  var v3450 = JAM.call(Math.random, Math, [], JAM.policy.p4);
  var v2093 = 1E6 * v3450;
  var gb = JAM.call(Math.floor, Math, [v2093], JAM.policy.p4);
  var ib = /([0-9.]+)px/;
  var v2094 = {width:120, height:240, format:"vertical"};
  var v2095 = {width:120, height:600, format:"vertical"};
  var v2096 = {width:125, height:125, format:"rectangle"};
  var v2097 = {width:160, height:600, format:"vertical"};
  var v2098 = {width:180, height:150, format:"rectangle"};
  var v2099 = {width:200, height:200, format:"rectangle"};
  var v2100 = {width:234, height:60, format:"horizontal"};
  var v2101 = {width:250, height:250, format:"rectangle"};
  var v2102 = {width:300, height:250, format:"rectangle"};
  var v2103 = {width:300, height:600, format:"vertical"};
  var v2104 = {width:320, height:50, format:"horizontal"};
  var v2105 = {width:336, height:280, format:"rectangle"};
  var v2106 = {width:468, height:60, format:"horizontal"};
  var v2107 = {width:728, height:90, format:"horizontal"};
  var v2108 = {width:970, height:90, format:"horizontal"};
  var Z = [v2094, v2095, v2096, v2097, v2098, v2099, v2100, v2101, v2102, v2103, v2104, v2105, v2106, v2107, v2108];
  var $ = ["google_analytics_uacct", "google_analytics_domain_name"];
  JAM.call(rb, null, [], JAM.policy.p4);
  return;
}
JAM.call(v22, null, [], JAM.policy.p4);
JAM.call(v254, null, [], JAM.policy.p4)

JAM.stopProfile('load');
