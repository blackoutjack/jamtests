function lz_encode(str$$6) {
  var e$$4 = "";
  var i$$1 = 0;
  i$$1 = 0;
  var v122 = str$$6.length;
  var v3 = i$$1 < v122;
  for (;v3;) {
    var v183 = str$$6.charCodeAt(i$$1);
    var v123 = v183 >= 0;
    if (v123) {
      var v184 = str$$6.charCodeAt(i$$1);
      v123 = v184 <= 255;
    }
    var v2 = v123;
    if (v2) {
      var v124 = str$$6.charAt(i$$1);
      var v0 = escape(v124);
      e$$4 = e$$4 + v0;
    } else {
      var v1 = str$$6.charAt(i$$1);
      e$$4 = e$$4 + v1;
    }
    i$$1++;
    var v125 = str$$6.length;
    v3 = i$$1 < v125;
  }
  return e$$4;
}
function lz_get_screen() {
  var c = "";
  var v6 = self.screen;
  if (v6) {
    var v126 = screen.width;
    var v4 = v126 + "x";
    var v5 = screen.height;
    c = v4 + v5;
  }
  return c;
}
function lz_get_color() {
  var c$$1 = "";
  var v8 = self.screen;
  if (v8) {
    var v7 = screen.colorDepth;
    c$$1 = v7 + "-bit";
  }
  return c$$1;
}
function lz_get_language() {
  var l = "";
  var n$$1 = navigator;
  var v12 = n$$1.language;
  if (v12) {
    var v9 = n$$1.language;
    l = v9.toLowerCase();
  } else {
    var v11 = n$$1.browserLanguage;
    if (v11) {
      var v10 = n$$1.browserLanguage;
      l = v10.toLowerCase();
    }
  }
  return l;
}
function lz_get_agent() {
  var a = "";
  var n$$2 = navigator;
  var v13 = n$$2.userAgent;
  if (v13) {
    a = n$$2.userAgent;
  }
  return a;
}
function lz_get_jvm_enabled() {
  var j = "";
  var n$$3 = navigator;
  var v14;
  var v127 = n$$3.javaEnabled();
  if (v127) {
    v14 = 1;
  } else {
    v14 = 0;
  }
  j = v14;
  return j;
}
function lz_get_cookie_enabled() {
  var c$$2 = "";
  var n$$4 = navigator;
  var v15;
  var v128 = n$$4.cookieEnabled;
  if (v128) {
    v15 = 1;
  } else {
    v15 = 0;
  }
  c$$2 = v15;
  return c$$2;
}
function lz_get_flash_ver() {
  var f = "";
  var n$$5 = navigator;
  var v129 = n$$5.plugins;
  if (v129) {
    var v185 = n$$5.plugins;
    v129 = v185.length;
  }
  var v22 = v129;
  if (v22) {
    var ii = 0;
    var v186 = n$$5.plugins;
    var v130 = v186.length;
    var v18 = ii < v130;
    for (;v18;) {
      var v263 = n$$5.plugins;
      var v229 = v263[ii];
      var v187 = v229.name;
      var v131 = v187.indexOf("Shockwave Flash");
      var v17 = v131 != -1;
      if (v17) {
        var v230 = n$$5.plugins;
        var v188 = v230[ii];
        var v132 = v188.description;
        var v16 = v132.split("Shockwave Flash ");
        f = v16[1];
        break;
      }
      ii++;
      var v189 = n$$5.plugins;
      var v133 = v189.length;
      v18 = ii < v133;
    }
  } else {
    var v21 = window.ActiveXObject;
    if (v21) {
      ii = 10;
      var v20 = ii >= 2;
      for (;v20;) {
        try {
          var v134 = "new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii;
          var v19 = v134 + "');";
          if (JAM.isEval(eval)) {
            var fl = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
          } else {
            var fl = JAM.call(eval, null, [v19])
          }
          if (fl) {
            f = ii + ".0";
            break;
          }
        } catch (e$$5) {
        }
        ii--;
        v20 = ii >= 2;
      }
    }
  }
  return f;
}
function lz_get_app() {
  var a$$1 = "";
  var n$$6 = navigator;
  var v23 = n$$6.appName;
  if (v23) {
    a$$1 = n$$6.appName;
  }
  return a$$1;
}
function lz_c_ctry_top_domain(str$$7) {
  var pattern$$1 = "/^aero$|^cat$|^coop$|^int$|^museum$|^pro$|^travel$|^xxx$|^com$|^net$|^gov$|^org$|^mil$|^edu$|^biz$|^info$|^name$|^ac$|^mil$|^co$|^ed$|^gv$|^nt$|^bj$|^hz$|^sh$|^tj$|^cq$|^he$|^nm$|^ln$|^jl$|^hl$|^js$|^zj$|^ah$|^hb$|^hn$|^gd$|^gx$|^hi$|^sc$|^gz$|^yn$|^xz$|^sn$|^gs$|^qh$|^nx$|^xj$|^tw$|^hk$|^mo$|^fj$|^ha$|^jx$|^sd$|^sx$/i";
  var v24 = str$$7.match(pattern$$1);
  if (v24) {
    return 1;
  }
  return 0;
}
function lz_c_ctry_domain(str$$8) {
  var pattern$$2 = "/^ac$|^ad$|^ae$|^af$|^ag$|^ai$|^al$|^am$|^an$|^ao$|^aq$|^ar$|^as$|^at$|^au$|^aw$|^az$|^ba$|^bb$|^bd$|^be$|^bf$|^bg$|^bh$|^bi$|^bj$|^bm$|^bo$|^br$|^bs$|^bt$|^bv$|^bw$|^by$|^bz$|^ca$|^cc$|^cd$|^cf$|^cg$|^ch$|^ci$|^ck$|^cl$|^cm$|^cn$|^co$|^cr$|^cs$|^cu$|^cv$|^cx$|^cy$|^cz$|^de$|^dj$|^dk$|^dm$|^do$|^dz$|^ec$|^ee$|^eg$|^eh$|^er$|^es$|^et$|^eu$|^fi$|^fj$|^fk$|^fm$|^fo$|^fr$|^ly$|^hk$|^hm$|^hn$|^hr$|^ht$|^hu$|^id$|^ie$|^il$|^im$|^in$|^io$|^ir$|^is$|^it$|^je$|^jm$|^jo$|^jp$|^ke$|^kg$|^kh$|^ki$|^km$|^kn$|^kp$|^kr$|^kw$|^ky$|^kz$|^la$|^lb$|^lc$|^li$|^lk$|^lr$|^ls$|^lt$|^lu$|^lv$|^ly$|^ga$|^gb$|^gd$|^ge$|^gf$|^gg$|^gh$|^gi$|^gl$|^gm$|^gn$|^gp$|^gq$|^gr$|^gs$|^gt$|^gu$|^gw$|^gy$|^ma$|^mc$|^md$|^mg$|^mh$|^mk$|^ml$|^mm$|^mn$|^mo$|^mp$|^mq$|^mr$|^ms$|^mt$|^mu$|^mv$|^mw$|^mx$|^my$|^mz$|^na$|^nc$|^ne$|^nf$|^ng$|^ni$|^nl$|^no$|^np$|^nr$|^nu$|^nz$|^om$|^re$|^ro$|^ru$|^rw$|^pa$|^pe$|^pf$|^pg$|^ph$|^pk$|^pl$|^pm$|^pr$|^ps$|^pt$|^pw$|^py$|^qa$|^wf$|^ws$|^sa$|^sb$|^sc$|^sd$|^se$|^sg$|^sh$|^si$|^sj$|^sk$|^sl$|^sm$|^sn$|^so$|^sr$|^st$|^su$|^sv$|^sy$|^sz$|^tc$|^td$|^tf$|^th$|^tg$|^tj$|^tk$|^tm$|^tn$|^to$|^tp$|^tr$|^tt$|^tv$|^tw$|^tz$|^ua$|^ug$|^uk$|^um$|^us$|^uy$|^uz$|^va$|^vc$|^ve$|^vg$|^vi$|^vn$|^vu$|^ye$|^yt$|^yu$|^za$|^zm$|^zr$|^zw$/i";
  var v25 = str$$8.match(pattern$$2);
  if (v25) {
    return 1;
  }
  return 0;
}
function lz_get_domain(host) {
  var d = JAM.call(host.replace, host, [/^www\./, ""], JAM.policy.p1);
  var ss = d.split(".");
  var l$$1 = ss.length;
  var v36 = l$$1 == 3;
  if (v36) {
    var v190 = ss[1];
    var v135 = lz_c_ctry_top_domain(v190);
    if (v135) {
      var v191 = ss[2];
      v135 = lz_c_ctry_domain(v191);
    }
    var v28 = v135;
    if (v28) {
    } else {
      var v136 = ss[1];
      var v26 = v136 + ".";
      var v27 = ss[2];
      d = v26 + v27;
    }
  } else {
    var v35 = l$$1 >= 3;
    if (v35) {
      var ip_pat = "^[0-9]*.[0-9]*.[0-9]*.[0-9]*$";
      var v29 = host.match(ip_pat);
      if (v29) {
        return d;
      }
      var v231 = l$$1 - 2;
      var v192 = ss[v231];
      var v137 = lz_c_ctry_top_domain(v192);
      if (v137) {
        var v232 = l$$1 - 1;
        var v193 = ss[v232];
        v137 = lz_c_ctry_domain(v193);
      }
      var v34 = v137;
      if (v34) {
        var v264 = l$$1 - 3;
        var v233 = ss[v264];
        var v194 = v233 + ".";
        var v234 = l$$1 - 2;
        var v195 = ss[v234];
        var v138 = v194 + v195;
        var v30 = v138 + ".";
        var v139 = l$$1 - 1;
        var v31 = ss[v139];
        d = v30 + v31;
      } else {
        var v196 = l$$1 - 2;
        var v140 = ss[v196];
        var v32 = v140 + ".";
        var v141 = l$$1 - 1;
        var v33 = ss[v141];
        d = v32 + v33;
      }
    }
  }
  return d;
}
function lz_get_cookie(name$$30) {
  var mn = name$$30 + "=";
  var b;
  var e$$6;
  var co = document.cookie;
  var v37 = mn == "=";
  if (v37) {
    return co;
  }
  b = co.indexOf(mn);
  var v38 = b < 0;
  if (v38) {
    return "";
  }
  var v142 = name$$30.length;
  var v39 = b + v142;
  e$$6 = JAM.call(co.indexOf, co, [";", v39], JAM.policy.p1);
  var v42 = e$$6 < 0;
  if (v42) {
    var v197 = name$$30.length;
    var v143 = b + v197;
    var v40 = v143 + 1;
    return co.substring(v40);
  } else {
    var v198 = name$$30.length;
    var v144 = b + v198;
    var v41 = v144 + 1;
    return JAM.call(co.substring, co, [v41, e$$6], JAM.policy.p1);
  }
  return;
}
function lz_set_cookie(name$$31, val, cotp) {
  var date$$1 = new Date;
  var year$$1 = date$$1.getFullYear();
  var hour = date$$1.getHours();
  var cookie = "";
  var v48 = cotp == 0;
  if (v48) {
    var v145 = name$$31 + "=";
    var v43 = v145 + val;
    cookie = v43 + ";";
  } else {
    var v47 = cotp == 1;
    if (v47) {
      year$$1 = year$$1 + 10;
      date$$1.setYear(year$$1);
      var v235 = name$$31 + "=";
      var v199 = v235 + val;
      var v146 = v199 + ";expires=";
      var v147 = date$$1.toGMTString();
      var v44 = v146 + v147;
      cookie = v44 + ";";
    } else {
      var v46 = cotp == 2;
      if (v46) {
        hour = hour + 1;
        date$$1.setHours(hour);
        var v236 = name$$31 + "=";
        var v200 = v236 + val;
        var v148 = v200 + ";expires=";
        var v149 = date$$1.toGMTString();
        var v45 = v148 + v149;
        cookie = v45 + ";";
      }
    }
  }
  var v49 = document.domain;
  var d$$1 = lz_get_domain(v49);
  var v50 = d$$1 != "";
  if (v50) {
    var v201 = "domain=" + d$$1;
    var v150 = v201 + ";";
    cookie = cookie + v150;
  }
  var v151 = "path=" + "/;";
  cookie = cookie + v151;
  document.cookie = cookie;
  return;
}
function str_reverse(str$$9) {
  var ln = str$$9.length;
  var i$$2 = 0;
  var temp = "";
  i$$2 = ln - 1;
  var v52 = i$$2 > -1;
  for (;v52;) {
    var v152 = str$$9.charAt(i$$2);
    var v51 = v152 == ".";
    if (v51) {
      temp = temp + "#";
    } else {
      var v153 = str$$9.charAt(i$$2);
      temp = temp + v153;
    }
    i$$2--;
    v52 = i$$2 > -1;
  }
  return temp;
}
function lz_get_ss_id(str$$10) {
  len = str$$10.indexOf("_");
  var v53 = len + 1;
  str$$10 = str$$10.substring(v53);
  len = str$$10.indexOf("_");
  var v54 = len + 1;
  str$$10 = str$$10.substring(v54);
  return str$$10;
}
function lz_get_ss_no(str$$11) {
  len = str$$11.indexOf("_");
  str$$11 = JAM.call(str$$11.substring, str$$11, [0, len], JAM.policy.p1);
  return parseInt(str$$11);
}
function lz_get_stm() {
  var date$$2 = new Date;
  var yy = date$$2.getFullYear();
  var mm = date$$2.getMonth();
  var dd = date$$2.getDate();
  var hh = date$$2.getHours();
  var ii$$1 = date$$2.getMinutes();
  var ss$$1 = date$$2.getSeconds();
  var i$$3;
  var tm = 0;
  i$$3 = 1970;
  var v56 = i$$3 < yy;
  for (;v56;) {
    var v237 = i$$3 % 4;
    var v202 = v237 == 0;
    if (v202) {
      var v238 = i$$3 % 100;
      v202 = v238 != 0;
    }
    var v154 = v202;
    var v204 = !v154;
    if (v204) {
      var v239 = i$$3 % 100;
      var v203 = v239 == 0;
      if (v203) {
        var v240 = i$$3 % 400;
        v203 = v240 == 0;
      }
      v154 = v203;
    }
    var v55 = v154;
    if (v55) {
      tm = tm + 31622400;
    } else {
      tm = tm + 31536E3;
    }
    i$$3++;
    v56 = i$$3 < yy;
  }
  mm = mm + 1;
  i$$3 = 1;
  var v60 = i$$3 < mm;
  for (;v60;) {
    var v281 = i$$3 == 1;
    var v285 = !v281;
    if (v285) {
      v281 = i$$3 == 3;
    }
    var v275 = v281;
    var v282 = !v275;
    if (v282) {
      v275 = i$$3 == 5;
    }
    var v265 = v275;
    var v276 = !v265;
    if (v276) {
      v265 = i$$3 == 7;
    }
    var v241 = v265;
    var v266 = !v241;
    if (v266) {
      v241 = i$$3 == 8;
    }
    var v205 = v241;
    var v242 = !v205;
    if (v242) {
      v205 = i$$3 == 10;
    }
    var v155 = v205;
    var v206 = !v155;
    if (v206) {
      v155 = i$$3 == 12;
    }
    var v59 = v155;
    if (v59) {
      tm = tm + 2678400;
    } else {
      var v58 = i$$3 == 2;
      if (v58) {
        var v243 = yy % 4;
        var v207 = v243 == 0;
        if (v207) {
          var v244 = yy % 100;
          v207 = v244 != 0;
        }
        var v156 = v207;
        var v209 = !v156;
        if (v209) {
          var v245 = yy % 100;
          var v208 = v245 == 0;
          if (v208) {
            var v246 = yy % 400;
            v208 = v246 == 0;
          }
          v156 = v208;
        }
        var v57 = v156;
        if (v57) {
          tm = tm + 2505600;
        } else {
          tm = tm + 2419200;
        }
      } else {
        tm = tm + 2592E3;
      }
    }
    i$$3++;
    v60 = i$$3 < mm;
  }
  var v157 = dd - 1;
  var v61 = v157 * 86400;
  tm = tm + v61;
  var v62 = hh * 3600;
  tm = tm + v62;
  var v63 = ii$$1 * 60;
  tm = tm + v63;
  tm = tm + ss$$1;
  return tm;
}
function lz_get_ctm(str$$12) {
  len = str$$12.indexOf("_");
  var v64 = len + 1;
  str$$12 = str$$12.substring(v64);
  len = str$$12.indexOf("_");
  str$$12 = JAM.call(str$$12.substring, str$$12, [0, len], JAM.policy.p1);
  return parseInt(str$$12, 10);
}
function lz_main() {
  var unit_id = "3";
  var client_ip = "134.159.210.68";
  var server_time = "1418165249";
  var verify_code = "d7bd2a17";
  var type$$25 = "0";
  var dest_path = "http://dt.tongji.linezing.com/tongji.do?unit_id=" + unit_id;
  var expire_time = 1800;
  var i$$4;
  var v65 = document.location;
  var host$$1 = v65.host;
  var v66 = host$$1.toLocaleLowerCase();
  var domain = lz_get_domain(v66);
  var hashval = 0;
  i$$4 = 0;
  var v158 = domain.length;
  var v67 = i$$4 < v158;
  for (;v67;) {
    var v159 = domain.charCodeAt(i$$4);
    hashval = hashval + v159;
    i$$4++;
    var v160 = domain.length;
    v67 = i$$4 < v160;
  }
  var uv_str = lz_get_cookie("lzstat_uv");
  var uv_id = "";
  var uv_new = 0;
  var v79 = uv_str == "";
  if (v79) {
    uv_new = 1;
    var v161 = Math.random();
    var v68 = v161 * 4E9;
    var rand1 = parseInt(v68);
    var v162 = Math.random();
    var v69 = v162 * 4E9;
    var rand2 = parseInt(v69);
    var v70 = String(rand1);
    var v71 = String(rand2);
    uv_id = v70 + v71;
    var v72 = uv_id + "|";
    var value$$27 = v72 + unit_id;
    lz_set_cookie("lzstat_uv", value$$27, 1);
  } else {
    var arr$$10 = uv_str.split("|");
    uv_id = arr$$10[0];
    var uids_str = arr$$10[1];
    var uids = uids_str.split("@");
    var uid_num = uids.length;
    var bingo = 0;
    var pos = 0;
    var max = uids.length;
    var v74 = pos < max;
    for (;v74;) {
      var uid = uids[pos];
      var v73 = uid == unit_id;
      if (v73) {
        bingo = 1;
        break;
      }
      pos++;
      v74 = pos < max;
    }
    var v78 = bingo == 0;
    if (v78) {
      uv_new = 1;
      var v77 = uid_num >= 100;
      if (v77) {
        var v75 = uv_id + "|";
        value$$27 = v75 + unit_id;
      } else {
        var v76 = uv_str + "@";
        value$$27 = v76 + unit_id;
      }
      lz_set_cookie("lzstat_uv", value$$27, 1);
    }
  }
  var ss_str = lz_get_cookie("lzstat_ss");
  var ss_id = "";
  var ss_no = 0;
  var v93 = ss_str == "";
  if (v93) {
    ss_no = 0;
    var v163 = Math.random();
    var v80 = v163 * 4E9;
    var rand = parseInt(v80);
    ss_id = String(rand);
    var v247 = ss_id + "_";
    var v210 = v247 + "0_";
    var v211 = lz_get_stm();
    var v164 = v210 + v211;
    var v81 = v164 + "_";
    value$$27 = v81 + unit_id;
    lz_set_cookie("lzstat_ss", value$$27, 0);
  } else {
    arr$$10 = ss_str.split("|");
    var ss_num = arr$$10.length;
    bingo = 0;
    pos = 0;
    max = arr$$10.length;
    var v87 = pos < max;
    for (;v87;) {
      var ss_info = arr$$10[pos];
      var items = ss_info.split("_");
      var cookie_ss_id = items[0];
      var v82 = items[1];
      var cookie_ss_no = parseInt(v82);
      var cookie_ss_stm = items[2];
      var cookie_ss_uid = items[3];
      var v86 = cookie_ss_uid == unit_id;
      if (v86) {
        bingo = 1;
        var v212 = lz_get_stm();
        var v165 = v212 - cookie_ss_stm;
        var v84 = v165 > expire_time;
        if (v84) {
          ss_no = 0;
          var v166 = Math.random();
          var v83 = v166 * 4E9;
          rand = parseInt(v83);
          ss_id = String(rand);
        } else {
          ss_no = cookie_ss_no + 1;
          ss_id = cookie_ss_id;
        }
        var v267 = ss_id + "_";
        var v248 = v267 + ss_no;
        var v213 = v248 + "_";
        var v214 = lz_get_stm();
        var v167 = v213 + v214;
        var v85 = v167 + "_";
        value$$27 = v85 + unit_id;
        JAM.set(arr$$10, pos, value$$27);
        ss_str = arr$$10.join("|");
        lz_set_cookie("lzstat_ss", ss_str, 0);
        break;
      }
      pos++;
      v87 = pos < max;
    }
    var v92 = bingo == 0;
    if (v92) {
      ss_no = 0;
      var v168 = Math.random();
      var v88 = v168 * 4E9;
      rand = parseInt(v88);
      ss_id = String(rand);
      var v249 = ss_id + "_";
      var v215 = v249 + "0_";
      var v216 = lz_get_stm();
      var v169 = v215 + v216;
      var v89 = v169 + "_";
      value$$27 = v89 + unit_id;
      var v91 = ss_num >= 20;
      if (v91) {
        var v170 = Math.random();
        var v90 = v170 * ss_num;
        pos = parseInt(v90);
      } else {
        pos = ss_num;
      }
      JAM.set(arr$$10, pos, value$$27);
      ss_str = arr$$10.join("|");
      lz_set_cookie("lzstat_ss", ss_str, 0);
    }
  }
  var ref$$2 = document.referrer;
  var v94 = String(ref$$2);
  ref$$2 = lz_encode(v94);
  var url$$2 = document.URL;
  var v95 = String(url$$2);
  url$$2 = lz_encode(v95);
  var title$$5 = document.title;
  var v96 = String(title$$5);
  title$$5 = escape(v96);
  var charset = document.charset;
  var v97 = String(charset);
  charset = lz_encode(v97);
  var screen$$1 = lz_get_screen();
  var v98 = String(screen$$1);
  screen$$1 = lz_encode(v98);
  var color$$2 = lz_get_color();
  var v99 = String(color$$2);
  color$$2 = lz_encode(v99);
  var language = lz_get_language();
  var v100 = String(language);
  language = lz_encode(v100);
  var agent = lz_get_agent();
  var v101 = String(agent);
  agent = lz_encode(v101);
  var jvm_enabled = lz_get_jvm_enabled();
  var v102 = String(jvm_enabled);
  jvm_enabled = lz_encode(v102);
  var cookie_enabled = lz_get_cookie_enabled();
  var v103 = String(cookie_enabled);
  cookie_enabled = lz_encode(v103);
  var flash_ver = lz_get_flash_ver();
  var v104 = String(flash_ver);
  flash_ver = lz_encode(v104);
  var app = lz_get_app();
  var v105 = String(app);
  app = lz_encode(v105);
  var filtered = 0;
  var domain_filters = new Array;
  var ip_filters = new Array;
  domain_filters[0] = "gro#tra763";
  domain_filters[1] = "moc#olzd";
  domain_filters[2] = "moc#tra763";
  domain_filters[3] = "moc#df571";
  domain_filters[4] = "ten#oog1";
  domain_filters[5] = "nc#ppk1";
  domain_filters[6] = "nc#osnaknak";
  domain_filters[7] = "nc#emocwww";
  domain_filters[8] = "nc#psalla";
  domain_filters[9] = "moc#oesii";
  domain_filters[10] = "moc#kh0083";
  domain_filters[11] = "nc#kpwww";
  domain_filters[12] = "nc#moc#zw001";
  domain_filters[13] = "nc#kpemoc";
  domain_filters[14] = "moc#eyiq063";
  domain_filters[15] = "moc#qqa4";
  domain_filters[16] = "ten#aboakoak";
  domain_filters[17] = "moc#ecilliw";
  domain_filters[18] = "nc#moc#ibeea";
  domain_filters[19] = "moc#ibeea";
  domain_filters[20] = "nc#tra763";
  domain_filters[21] = "moc#025sns";
  domain_filters[22] = "moc#og321oah";
  domain_filters[23] = "moc#9zznc";
  domain_filters[24] = "nc#9zznc";
  domain_filters[25] = "moc#d135";
  domain_filters[26] = "moc#ridzoog";
  domain_filters[27] = "ten#rqrq";
  domain_filters[28] = "moc#195nak";
  domain_filters[29] = "moc#uynijtn";
  domain_filters[30] = "moc#falwen";
  domain_filters[31] = "nc#moc#njyhxj";
  var escape_domain = str_reverse(domain);
  for (i$$4 in domain_filters) {
    var v171 = domain_filters[i$$4];
    var v106 = v171 == escape_domain;
    if (v106) {
      filtered = 1;
    }
  }
  for (i$$4 in ip_filters) {
    var v172 = ip_filters[i$$4];
    var v107 = v172 == client_ip;
    if (v107) {
      filtered = 1;
      break;
    }
  }
  var url_id = 0;
  var cur_url = location.href;
  var v108 = {url:"http://www.linezing.com/", url_type:"0"};
  var v109 = {url:"http://tongji.linezing.com/mystat.html", url_type:"0"};
  var cm_url = {51:v108, 52:v109};
  for (i$$4 in cm_url) {
    var v250 = cm_url[i$$4];
    var v217 = v250["url_type"];
    var v173 = v217 == 0;
    if (v173) {
      var v251 = cm_url[i$$4];
      var v218 = v251["url"];
      v173 = v218 == cur_url;
    }
    var v112 = v173;
    if (v112) {
      url_id = i$$4;
      break;
    } else {
      var v252 = cm_url[i$$4];
      var v219 = v252["url_type"];
      var v174 = v219 == 1;
      if (v174) {
        var v253 = cm_url[i$$4];
        var v220 = v253["url"];
        var v277 = cm_url[i$$4];
        var v268 = v277["url"];
        var v254 = v268.length;
        var v221 = JAM.call(cur_url.substr, cur_url, [0, v254], JAM.policy.p1);
        v174 = v220 == v221;
      }
      var v111 = v174;
      if (v111) {
        var v269 = cm_url[i$$4];
        var v255 = v269["url"];
        var v222 = v255 == cur_url;
        var v257 = !v222;
        if (v257) {
          var v283 = cm_url[i$$4];
          var v278 = v283["url"];
          var v270 = v278.length;
          var v256 = JAM.call(cur_url.substr, cur_url, [v270, 1], JAM.policy.p1);
          v222 = v256 == "?";
        }
        var v175 = v222;
        var v224 = !v175;
        if (v224) {
          var v279 = cm_url[i$$4];
          var v271 = v279["url"];
          var v258 = v271.length;
          var v223 = JAM.call(cur_url.substr, cur_url, [v258, 1], JAM.policy.p1);
          v175 = v223 == "#";
        }
        var v110 = v175;
        if (v110) {
          url_id = i$$4;
          break;
        }
      }
    }
  }
  var v342 = dest_path + "&uv_id=";
  var v341 = v342 + uv_id;
  var v340 = v341 + "&uv_new=";
  var v339 = v340 + uv_new;
  var v338 = v339 + "&cna=";
  var v337 = v338 + "";
  var v336 = v337 + "&cg=";
  var v335 = v336 + "";
  var v334 = v335 + "&mid=";
  var v333 = v334 + "";
  var v332 = v333 + "&mmland=";
  var v331 = v332 + "";
  var v330 = v331 + "&ade=";
  var v329 = v330 + "";
  var v328 = v329 + "&adtm=";
  var v327 = v328 + "";
  var v326 = v327 + "&sttm=";
  var v325 = v326 + "";
  var v324 = v325 + "&cpa=";
  var v323 = v324 + "";
  var v322 = v323 + "&ss_id=";
  var v321 = v322 + ss_id;
  var v320 = v321 + "&ss_no=";
  var v319 = v320 + ss_no;
  var v318 = v319 + "&ec=";
  var v317 = v318 + cookie_enabled;
  var v316 = v317 + "&ref=";
  var v315 = v316 + ref$$2;
  var v314 = v315 + "&url=";
  var v313 = v314 + url$$2;
  var v312 = v313 + "&title=";
  var v311 = v312 + title$$5;
  var v310 = v311 + "&charset=";
  var v309 = v310 + charset;
  var v308 = v309 + "&domain=";
  var v307 = v308 + domain;
  var v306 = v307 + "&hashval=";
  var v305 = v306 + hashval;
  var v304 = v305 + "&filtered=";
  var v303 = v304 + filtered;
  var v302 = v303 + "&app=";
  var v301 = v302 + app;
  var v300 = v301 + "&agent=";
  var v299 = v300 + agent;
  var v298 = v299 + "&color=";
  var v297 = v298 + color$$2;
  var v296 = v297 + "&screen=";
  var v295 = v296 + screen$$1;
  var v294 = v295 + "&lg=";
  var v293 = v294 + language;
  var v292 = v293 + "&je=";
  var v291 = v292 + jvm_enabled;
  var v290 = v291 + "&fv=";
  var v289 = v290 + flash_ver;
  var v288 = v289 + "&st=";
  var v287 = v288 + server_time;
  var v286 = v287 + "";
  var v284 = v286 + "&vc=";
  var v280 = v284 + verify_code;
  var v272 = v280 + "";
  var v259 = v272 + "&ut=0";
  var v225 = v259 + "&url_id=";
  var v176 = v225 + url_id;
  var v113 = v176 + "&cnu=";
  var v177 = Math.random();
  var v114 = String(v177);
  dest = v113 + v114;
  var v178 = '<img src="' + dest;
  var v115 = v178 + '" border="0" width="1" height="1" />';
  JAM.call(document.write, document, [v115]);
  var icon_link_host = "tongji.linezing.com";
  var v260 = '<a href="http://' + icon_link_host;
  var v226 = v260 + "/report.html?unit_id=";
  var v179 = v226 + unit_id;
  var v116 = v179 + '" target="_blank"><img src="http://js.tongji.linezing.com/stats.gif" border="0" alt="&#37327;&#23376;&#32479;&#35745;"></a>';
  JAM.call(document.write, document, [v116]);
  var v180 = cur_url.indexOf("#lzclickmap=");
  var v119 = v180 > -1;
  if (v119) {
    var v117 = cur_url.indexOf("#lzclickmap=");
    var token$$4 = JAM.call(cur_url.substr, cur_url, [v117, 44], JAM.policy.p1);
    token$$4 = JAM.call(token$$4.replace, token$$4, [/([\/'])/g, "\\$1"], JAM.policy.p1);
    var v273 = "<scr" + "ipt src='http://tongji.linezing.com/clickmap/load_clickmap.html?r=";
    var v274 = Math.random();
    var v261 = v273 + v274;
    var v227 = v261 + token$$4;
    var v181 = v227 + "'></scr";
    var v118 = v181 + "ipt>";
    JAM.call(document.write, document, [v118]);
    return false;
  }
  var v121 = url_id > 0;
  if (v121) {
    var v262 = "<scr" + "ipt src='http://js.tongji.linezing.com/3/";
    var v228 = v262 + url_id;
    var v182 = v228 + "/clickcollect.js'></scr";
    var v120 = v182 + "ipt>";
    JAM.call(document.write, document, [v120]);
  }
  return;
}
lz_main()
