// tongji.js
function lz_encode(str$$6) {
  var e$$4 = "";
  var i$$1 = 0;
  i$$1 = 0;
  var v3 = i$$1 < str$$6.length;
  for (;v3;) {
    var v123 = str$$6.charCodeAt(i$$1) >= 0;
    if (v123) {
      v123 = str$$6.charCodeAt(i$$1) <= 255;
    }
    if (v123) {
      e$$4 = e$$4 + escape(str$$6.charAt(i$$1));
    } else {
      e$$4 = e$$4 + str$$6.charAt(i$$1);
    }
    i$$1++;
    v3 = i$$1 < str$$6.length;
  }
  return e$$4;
}
function lz_get_screen() {
  var c = "";
  if (self.screen) {
    c = screen.width + "x" + screen.height;
  }
  return c;
}
function lz_get_color() {
  var c$$1 = "";
  if (self.screen) {
    c$$1 = screen.colorDepth + "-bit";
  }
  return c$$1;
}
function lz_get_language() {
  var l = "";
  var n$$1 = navigator;
  if (n$$1.language) {
    l = n$$1.language.toLowerCase();
  } else {
    if (n$$1.browserLanguage) {
      l = n$$1.browserLanguage.toLowerCase();
    }
  }
  return l;
}
function lz_get_agent() {
  var a = "";
  var n$$2 = navigator;
  if (n$$2.userAgent) {
    a = n$$2.userAgent;
  }
  return a;
}
function lz_get_jvm_enabled() {
  var j = "";
  var n$$3 = navigator;
  var v14;
  if (n$$3.javaEnabled()) {
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
  if (n$$4.cookieEnabled) {
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
    v129 = n$$5.plugins.length;
  }
  if (v129) {
    var ii = 0;
    var v18 = ii < n$$5.plugins.length;
    for (;v18;) {
      if (n$$5.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
        f = n$$5.plugins[ii].description.split("Shockwave Flash ")[1];
        break;
      }
      ii++;
      v18 = ii < n$$5.plugins.length;
    }
  } else {
    if (window.ActiveXObject) {
      ii = 10;
      var v20 = ii >= 2;
      for (;v20;) {
        try {
          var v19 = "new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');";
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
  if (n$$6.appName) {
    a$$1 = n$$6.appName;
  }
  return a$$1;
}
function lz_c_ctry_top_domain(str$$7) {
  var pattern$$1 = "/^aero$|^cat$|^coop$|^int$|^museum$|^pro$|^travel$|^xxx$|^com$|^net$|^gov$|^org$|^mil$|^edu$|^biz$|^info$|^name$|^ac$|^mil$|^co$|^ed$|^gv$|^nt$|^bj$|^hz$|^sh$|^tj$|^cq$|^he$|^nm$|^ln$|^jl$|^hl$|^js$|^zj$|^ah$|^hb$|^hn$|^gd$|^gx$|^hi$|^sc$|^gz$|^yn$|^xz$|^sn$|^gs$|^qh$|^nx$|^xj$|^tw$|^hk$|^mo$|^fj$|^ha$|^jx$|^sd$|^sx$/i";
  if (str$$7.match(pattern$$1)) {
    return 1;
  }
  return 0;
}
function lz_c_ctry_domain(str$$8) {
  var pattern$$2 = "/^ac$|^ad$|^ae$|^af$|^ag$|^ai$|^al$|^am$|^an$|^ao$|^aq$|^ar$|^as$|^at$|^au$|^aw$|^az$|^ba$|^bb$|^bd$|^be$|^bf$|^bg$|^bh$|^bi$|^bj$|^bm$|^bo$|^br$|^bs$|^bt$|^bv$|^bw$|^by$|^bz$|^ca$|^cc$|^cd$|^cf$|^cg$|^ch$|^ci$|^ck$|^cl$|^cm$|^cn$|^co$|^cr$|^cs$|^cu$|^cv$|^cx$|^cy$|^cz$|^de$|^dj$|^dk$|^dm$|^do$|^dz$|^ec$|^ee$|^eg$|^eh$|^er$|^es$|^et$|^eu$|^fi$|^fj$|^fk$|^fm$|^fo$|^fr$|^ly$|^hk$|^hm$|^hn$|^hr$|^ht$|^hu$|^id$|^ie$|^il$|^im$|^in$|^io$|^ir$|^is$|^it$|^je$|^jm$|^jo$|^jp$|^ke$|^kg$|^kh$|^ki$|^km$|^kn$|^kp$|^kr$|^kw$|^ky$|^kz$|^la$|^lb$|^lc$|^li$|^lk$|^lr$|^ls$|^lt$|^lu$|^lv$|^ly$|^ga$|^gb$|^gd$|^ge$|^gf$|^gg$|^gh$|^gi$|^gl$|^gm$|^gn$|^gp$|^gq$|^gr$|^gs$|^gt$|^gu$|^gw$|^gy$|^ma$|^mc$|^md$|^mg$|^mh$|^mk$|^ml$|^mm$|^mn$|^mo$|^mp$|^mq$|^mr$|^ms$|^mt$|^mu$|^mv$|^mw$|^mx$|^my$|^mz$|^na$|^nc$|^ne$|^nf$|^ng$|^ni$|^nl$|^no$|^np$|^nr$|^nu$|^nz$|^om$|^re$|^ro$|^ru$|^rw$|^pa$|^pe$|^pf$|^pg$|^ph$|^pk$|^pl$|^pm$|^pr$|^ps$|^pt$|^pw$|^py$|^qa$|^wf$|^ws$|^sa$|^sb$|^sc$|^sd$|^se$|^sg$|^sh$|^si$|^sj$|^sk$|^sl$|^sm$|^sn$|^so$|^sr$|^st$|^su$|^sv$|^sy$|^sz$|^tc$|^td$|^tf$|^th$|^tg$|^tj$|^tk$|^tm$|^tn$|^to$|^tp$|^tr$|^tt$|^tv$|^tw$|^tz$|^ua$|^ug$|^uk$|^um$|^us$|^uy$|^uz$|^va$|^vc$|^ve$|^vg$|^vi$|^vn$|^vu$|^ye$|^yt$|^yu$|^za$|^zm$|^zr$|^zw$/i";
  if (str$$8.match(pattern$$2)) {
    return 1;
  }
  return 0;
}
function lz_get_domain(host) {
  var d = JAM.call(host.replace, host, [/^www\./, ""], JAM.policy.p1);
  var ss = d.split(".");
  var l$$1 = ss.length;
  if (l$$1 == 3) {
    var v135 = lz_c_ctry_top_domain(ss[1]);
    if (v135) {
      v135 = lz_c_ctry_domain(ss[2]);
    }
    if (v135) {
    } else {
      d = ss[1] + "." + ss[2];
    }
  } else {
    if (l$$1 >= 3) {
      var ip_pat = "^[0-9]*.[0-9]*.[0-9]*.[0-9]*$";
      if (host.match(ip_pat)) {
        return d;
      }
      var v137 = lz_c_ctry_top_domain(ss[l$$1 - 2]);
      if (v137) {
        v137 = lz_c_ctry_domain(ss[l$$1 - 1]);
      }
      if (v137) {
        d = ss[l$$1 - 3] + "." + ss[l$$1 - 2] + "." + ss[l$$1 - 1];
      } else {
        d = ss[l$$1 - 2] + "." + ss[l$$1 - 1];
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
  if (mn == "=") {
    return co;
  }
  b = co.indexOf(mn);
  if (b < 0) {
    return "";
  }
  e$$6 = JAM.call(co.indexOf, co, [";", b + name$$30.length], JAM.policy.p1);
  if (e$$6 < 0) {
    return co.substring(b + name$$30.length + 1);
  } else {
    return JAM.call(co.substring, co, [b + name$$30.length + 1, e$$6], JAM.policy.p1);
  }
  return;
}
function lz_set_cookie(name$$31, val, cotp) {
  var date$$1 = new Date;
  var year$$1 = date$$1.getFullYear();
  var hour = date$$1.getHours();
  var cookie = "";
  if (cotp == 0) {
    cookie = name$$31 + "=" + val + ";";
  } else {
    if (cotp == 1) {
      year$$1 = year$$1 + 10;
      date$$1.setYear(year$$1);
      cookie = name$$31 + "=" + val + ";expires=" + date$$1.toGMTString() + ";";
    } else {
      if (cotp == 2) {
        hour = hour + 1;
        date$$1.setHours(hour);
        cookie = name$$31 + "=" + val + ";expires=" + date$$1.toGMTString() + ";";
      }
    }
  }
  var d$$1 = lz_get_domain(document.domain);
  if (d$$1 != "") {
    cookie = cookie + ("domain=" + d$$1 + ";");
  }
  cookie = cookie + ("path=" + "/;");
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
    if (str$$9.charAt(i$$2) == ".") {
      temp = temp + "#";
    } else {
      temp = temp + str$$9.charAt(i$$2);
    }
    i$$2--;
    v52 = i$$2 > -1;
  }
  return temp;
}
function lz_get_ss_id(str$$10) {
  len = str$$10.indexOf("_");
  str$$10 = str$$10.substring(len + 1);
  len = str$$10.indexOf("_");
  str$$10 = str$$10.substring(len + 1);
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
    var v202 = i$$3 % 4 == 0;
    if (v202) {
      v202 = i$$3 % 100 != 0;
    }
    var v154 = v202;
    if (!v154) {
      var v203 = i$$3 % 100 == 0;
      if (v203) {
        v203 = i$$3 % 400 == 0;
      }
      v154 = v203;
    }
    if (v154) {
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
    if (!v281) {
      v281 = i$$3 == 3;
    }
    var v275 = v281;
    if (!v275) {
      v275 = i$$3 == 5;
    }
    var v265 = v275;
    if (!v265) {
      v265 = i$$3 == 7;
    }
    var v241 = v265;
    if (!v241) {
      v241 = i$$3 == 8;
    }
    var v205 = v241;
    if (!v205) {
      v205 = i$$3 == 10;
    }
    var v155 = v205;
    if (!v155) {
      v155 = i$$3 == 12;
    }
    if (v155) {
      tm = tm + 2678400;
    } else {
      if (i$$3 == 2) {
        var v207 = yy % 4 == 0;
        if (v207) {
          v207 = yy % 100 != 0;
        }
        var v156 = v207;
        if (!v156) {
          var v208 = yy % 100 == 0;
          if (v208) {
            v208 = yy % 400 == 0;
          }
          v156 = v208;
        }
        if (v156) {
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
  tm = tm + (dd - 1) * 86400;
  tm = tm + hh * 3600;
  tm = tm + ii$$1 * 60;
  tm = tm + ss$$1;
  return tm;
}
function lz_get_ctm(str$$12) {
  len = str$$12.indexOf("_");
  str$$12 = str$$12.substring(len + 1);
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
  var host$$1 = document.location.host;
  var domain = lz_get_domain(host$$1.toLocaleLowerCase());
  var hashval = 0;
  i$$4 = 0;
  var v67 = i$$4 < domain.length;
  for (;v67;) {
    hashval = hashval + domain.charCodeAt(i$$4);
    i$$4++;
    v67 = i$$4 < domain.length;
  }
  var uv_str = lz_get_cookie("lzstat_uv");
  var uv_id = "";
  var uv_new = 0;
  if (uv_str == "") {
    uv_new = 1;
    var rand1 = parseInt(Math.random() * 4E9);
    var rand2 = parseInt(Math.random() * 4E9);
    uv_id = String(rand1) + String(rand2);
    var value$$27 = uv_id + "|" + unit_id;
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
      if (uid == unit_id) {
        bingo = 1;
        break;
      }
      pos++;
      v74 = pos < max;
    }
    if (bingo == 0) {
      uv_new = 1;
      if (uid_num >= 100) {
        value$$27 = uv_id + "|" + unit_id;
      } else {
        value$$27 = uv_str + "@" + unit_id;
      }
      lz_set_cookie("lzstat_uv", value$$27, 1);
    }
  }
  var ss_str = lz_get_cookie("lzstat_ss");
  var ss_id = "";
  var ss_no = 0;
  if (ss_str == "") {
    ss_no = 0;
    var rand = parseInt(Math.random() * 4E9);
    ss_id = String(rand);
    value$$27 = ss_id + "_" + "0_" + lz_get_stm() + "_" + unit_id;
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
      var cookie_ss_no = parseInt(items[1]);
      var cookie_ss_stm = items[2];
      var cookie_ss_uid = items[3];
      if (cookie_ss_uid == unit_id) {
        bingo = 1;
        if (lz_get_stm() - cookie_ss_stm > expire_time) {
          ss_no = 0;
          rand = parseInt(Math.random() * 4E9);
          ss_id = String(rand);
        } else {
          ss_no = cookie_ss_no + 1;
          ss_id = cookie_ss_id;
        }
        value$$27 = ss_id + "_" + ss_no + "_" + lz_get_stm() + "_" + unit_id;
        JAM.set(arr$$10, pos, value$$27);
        ss_str = arr$$10.join("|");
        lz_set_cookie("lzstat_ss", ss_str, 0);
        break;
      }
      pos++;
      v87 = pos < max;
    }
    if (bingo == 0) {
      ss_no = 0;
      rand = parseInt(Math.random() * 4E9);
      ss_id = String(rand);
      value$$27 = ss_id + "_" + "0_" + lz_get_stm() + "_" + unit_id;
      if (ss_num >= 20) {
        pos = parseInt(Math.random() * ss_num);
      } else {
        pos = ss_num;
      }
      JAM.set(arr$$10, pos, value$$27);
      ss_str = arr$$10.join("|");
      lz_set_cookie("lzstat_ss", ss_str, 0);
    }
  }
  var ref$$2 = document.referrer;
  ref$$2 = lz_encode(String(ref$$2));
  var url$$2 = document.URL;
  url$$2 = lz_encode(String(url$$2));
  var title$$5 = document.title;
  title$$5 = escape(String(title$$5));
  var charset = document.charset;
  charset = lz_encode(String(charset));
  var screen$$1 = lz_get_screen();
  screen$$1 = lz_encode(String(screen$$1));
  var color$$2 = lz_get_color();
  color$$2 = lz_encode(String(color$$2));
  var language = lz_get_language();
  language = lz_encode(String(language));
  var agent = lz_get_agent();
  agent = lz_encode(String(agent));
  var jvm_enabled = lz_get_jvm_enabled();
  jvm_enabled = lz_encode(String(jvm_enabled));
  var cookie_enabled = lz_get_cookie_enabled();
  cookie_enabled = lz_encode(String(cookie_enabled));
  var flash_ver = lz_get_flash_ver();
  flash_ver = lz_encode(String(flash_ver));
  var app = lz_get_app();
  app = lz_encode(String(app));
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
    if (domain_filters[i$$4] == escape_domain) {
      filtered = 1;
    }
  }
  for (i$$4 in ip_filters) {
    if (ip_filters[i$$4] == client_ip) {
      filtered = 1;
      break;
    }
  }
  var url_id = 0;
  var cur_url = location.href;
  var cm_url = {51:{url:"http://www.linezing.com/", url_type:"0"}, 52:{url:"http://tongji.linezing.com/mystat.html", url_type:"0"}};
  for (i$$4 in cm_url) {
    var v173 = cm_url[i$$4]["url_type"] == 0;
    if (v173) {
      v173 = cm_url[i$$4]["url"] == cur_url;
    }
    if (v173) {
      url_id = i$$4;
      break;
    } else {
      var v174 = cm_url[i$$4]["url_type"] == 1;
      if (v174) {
        v174 = cm_url[i$$4]["url"] == JAM.call(cur_url.substr, cur_url, [0, cm_url[i$$4]["url"].length], JAM.policy.p1);
      }
      if (v174) {
        var v222 = cm_url[i$$4]["url"] == cur_url;
        if (!v222) {
          v222 = JAM.call(cur_url.substr, cur_url, [cm_url[i$$4]["url"].length, 1], JAM.policy.p1) == "?";
        }
        var v175 = v222;
        if (!v175) {
          v175 = JAM.call(cur_url.substr, cur_url, [cm_url[i$$4]["url"].length, 1], JAM.policy.p1) == "#";
        }
        if (v175) {
          url_id = i$$4;
          break;
        }
      }
    }
  }
  dest = dest_path + "&uv_id=" + uv_id + "&uv_new=" + uv_new + "&cna=" + "" + "&cg=" + "" + "&mid=" + "" + "&mmland=" + "" + "&ade=" + "" + "&adtm=" + "" + "&sttm=" + "" + "&cpa=" + "" + "&ss_id=" + ss_id + "&ss_no=" + ss_no + "&ec=" + cookie_enabled + "&ref=" + ref$$2 + "&url=" + url$$2 + "&title=" + title$$5 + "&charset=" + charset + "&domain=" + domain + "&hashval=" + hashval + "&filtered=" + filtered + "&app=" + app + "&agent=" + agent + "&color=" + color$$2 + "&screen=" + screen$$1 + "&lg=" + 
  language + "&je=" + jvm_enabled + "&fv=" + flash_ver + "&st=" + server_time + "" + "&vc=" + verify_code + "" + "&ut=0" + "&url_id=" + url_id + "&cnu=" + String(Math.random());
  JAM.call(document.write, document, ['<img src="' + dest + '" border="0" width="1" height="1" />']);
  var icon_link_host = "tongji.linezing.com";
  JAM.call(document.write, document, ['<a href="http://' + icon_link_host + "/report.html?unit_id=" + unit_id + '" target="_blank"><img src="http://js.tongji.linezing.com/stats.gif" border="0" alt="&#37327;&#23376;&#32479;&#35745;"></a>']);
  if (cur_url.indexOf("#lzclickmap=") > -1) {
    var token$$4 = JAM.call(cur_url.substr, cur_url, [cur_url.indexOf("#lzclickmap="), 44], JAM.policy.p1);
    token$$4 = JAM.call(token$$4.replace, token$$4, [/([\/'])/g, "\\$1"], JAM.policy.p1);
    JAM.call(document.write, document, ["<scr" + "ipt src='http://tongji.linezing.com/clickmap/load_clickmap.html?r=" + Math.random() + token$$4 + "'></scr" + "ipt>"]);
    return false;
  }
  if (url_id > 0) {
    JAM.call(document.write, document, ["<scr" + "ipt src='http://js.tongji.linezing.com/3/" + url_id + "/clickcollect.js'></scr" + "ipt>"]);
  }
  return;
}
lz_main()
