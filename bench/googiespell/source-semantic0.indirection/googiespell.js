function v230(name$$35) {
  var v231 = {"href":"javascript:;", name:name$$35};
  return JAM.call(AJS.A, AJS, [v231]);
}
function v229(elm$$52) {
  var v1177 = this.img_dir;
  var v885 = v1177 + "indicator.gif";
  var v232 = {"src":v885, "style":"margin-right: 5px;"};
  var img$$3 = JAM.call(AJS.IMG, AJS, [v232]);
  JAM.call(AJS.setWidth, AJS, [img$$3, 16]);
  JAM.call(AJS.setHeight, AJS, [img$$3, 16]);
  this.indicator = img$$3;
  var v233 = img$$3.style;
  v233.textDecoration = "none";
  try {
    JAM.call(AJS.insertBefore, AJS, [img$$3, elm$$52]);
  } catch (e$$36) {
  }
  return;
}
function v228(elm$$51) {
  try {
    var v234 = this.indicator;
    JAM.call(AJS.removeElement, AJS, [v234]);
  } catch (e$$35) {
  }
  return;
}
function v227(name$$34, css_class, c_fn$$1) {
  var btn_row = AJS.TR();
  var btn = AJS.TD();
  JAM.set(btn, "onmouseover", GoogieSpell.item_onmouseover);
  JAM.set(btn, "onmouseout", GoogieSpell.item_onmouseout);
  var spn_btn;
  var v236 = css_class != "";
  if (v236) {
    var v235 = {"class":css_class};
    spn_btn = JAM.call(AJS.SPAN, AJS, [v235]);
    JAM.set(spn_btn, "innerHTML", name$$34);
  } else {
    spn_btn = JAM.call(AJS.TN, AJS, [name$$34]);
  }
  JAM.call(btn.appendChild, btn, [spn_btn]);
  JAM.call(AJS.AEV, AJS, [btn, "click", c_fn$$1]);
  JAM.call(btn_row.appendChild, btn_row, [btn]);
  return btn_row;
}
function v226(c_fn) {
  var v237 = this.lang_close;
  var v238 = JAM.call(AJS.$b, AJS, [c_fn, this]);
  return JAM.call(this.createButton, this, [v237, "googie_list_close", v238]);
}
function v225(e$$34) {
  var elm$$50 = JAM.call(AJS.getEventElm, AJS, [e$$34]);
  var v1178 = elm$$50.className;
  var v886 = v1178 != "googie_list_revert";
  if (v886) {
    var v1179 = elm$$50.className;
    v886 = v1179 != "googie_list_close";
  }
  var v240 = v886;
  if (v240) {
    elm$$50.className = "googie_list_onout";
  } else {
    var v239 = elm$$50.parentNode;
    v239.className = "googie_list_onout";
  }
  return;
}
function v224(e$$33) {
  var elm$$49 = JAM.call(AJS.getEventElm, AJS, [e$$33]);
  var v1180 = elm$$49.className;
  var v887 = v1180 != "googie_list_revert";
  if (v887) {
    var v1181 = elm$$49.className;
    v887 = v1181 != "googie_list_close";
  }
  var v242 = v887;
  if (v242) {
    elm$$49.className = "googie_list_onhover";
  } else {
    var v241 = elm$$49.parentNode;
    v241.className = "googie_list_onhover";
  }
  return;
}
function v223(fire) {
  function fn$$24() {
    this.spellCheck();
    return;
  }
  var v1182 = JAM.call(AJS.isDefined, AJS, [fire]);
  var v888 = !v1182;
  var v1183 = !v888;
  if (v1183) {
    v888 = fire;
  }
  var v243 = v888;
  if (v243) {
    JAM.call(this.setStateChanged, this, ["spell_check"]);
  }
  var v244 = this.show_change_lang_pic;
  if (v244) {
    var v1362 = this.createChangeLangPic();
    this.switch_lan_pic = v1362;
  } else {
    var v1363 = AJS.SPAN();
    this.switch_lan_pic = v1363;
  }
  var span_chck = this.createSpellDiv();
  var v245 = this.custom_spellcheck_starter;
  if (v245) {
    JAM.set(span_chck, "onclick", this.custom_spellcheck_starter);
  } else {
    var myfn$$1 = JAM.call(AJS.$b, AJS, [fn$$24, this]);
    JAM.call(AJS.AEV, AJS, [span_chck, "click", myfn$$1]);
  }
  this.spell_span = span_chck;
  var v251 = this.main_controller;
  if (v251) {
    var v889 = this.change_lang_pic_placement;
    var v250 = v889 == "left";
    if (v250) {
      var v246 = this.spell_container;
      var v247 = this.switch_lan_pic;
      JAM.call(AJS.RCN, AJS, [v246, span_chck, " ", v247]);
    } else {
      var v248 = this.spell_container;
      var v249 = this.switch_lan_pic;
      JAM.call(AJS.RCN, AJS, [v248, v249, " ", span_chck]);
    }
  }
  return;
}
function v222() {
  function v221(e$$31) {
    this.resumeEditing();
    return;
  }
  JAM.call(this.setStateChanged, this, ["resume_editing"]);
  var v258 = this.main_controller;
  if (v258) {
    var v252 = this.switch_lan_pic;
    JAM.call(AJS.hideElement, AJS, [v252]);
    var v1184 = this.img_dir;
    var v890 = v1184 + "blank.gif";
    var v253 = {"src":v890, "style":"height: 16px; width: 1px;"};
    var dummy$$2 = JAM.call(AJS.IMG, AJS, [v253]);
    var rsm$$1 = AJS.SPAN();
    JAM.set(rsm$$1, "innerHTML", this.lang_rsm_edt);
    var v254 = this.spell_span;
    var v255 = JAM.call(AJS.SPAN, AJS, [dummy$$2, rsm$$1]);
    JAM.call(AJS.RCN, AJS, [v254, v255]);
    var fn$$23 = v221;
    var myfn = JAM.call(AJS.$b, AJS, [fn$$23, this]);
    var v256 = this.spell_span;
    v256.addEventListener("click", myfn, false);
    var v257 = this.spell_span;
    v257.className = "googie_resume_editing";
  }
  try {
    var v259 = this.edit_layer;
    v259.scrollTop = this.ta_scroll_top;
  } catch (e$$32) {
  }
  return;
}
function v220(on_finish) {
  function v219() {
    on_finish();
    this.checkSpellingState();
    return;
  }
  var no_spell_errors;
  if (on_finish) {
    var fn$$22 = v219;
    no_spell_errors = fn$$22;
  } else {
    no_spell_errors = this.checkSpellingState;
  }
  JAM.call(this.setStateChanged, this, ["no_error_found"]);
  var v268 = this.main_controller;
  if (v268) {
    var v260 = this.switch_lan_pic;
    JAM.call(AJS.hideElement, AJS, [v260]);
    var v1185 = this.img_dir;
    var v891 = v1185 + "blank.gif";
    var v261 = {"src":v891, "style":"height: 16px; width: 1px;"};
    var dummy$$1 = JAM.call(AJS.IMG, AJS, [v261]);
    var rsm = AJS.SPAN();
    JAM.set(rsm, "innerHTML", this.lang_no_error_found);
    var v262 = this.spell_span;
    var v263 = JAM.call(AJS.SPAN, AJS, [dummy$$1, rsm]);
    JAM.call(AJS.RCN, AJS, [v262, v263]);
    var v264 = this.spell_span;
    v264.className = "googie_check_spelling_ok";
    var v892 = this.spell_span;
    var v265 = v892.style;
    v265.textDecoration = "none";
    var v893 = this.spell_span;
    var v266 = v893.style;
    v266.cursor = "default";
    var v267 = JAM.call(AJS.$b, AJS, [no_spell_errors, this]);
    JAM.call(setTimeout, null, [v267, 1200]);
  }
  return;
}
function v218() {
  var v269 = {"class":"googie_check_spelling_link", "id":"googie_check_spelling_link"};
  var chk_spell = JAM.call(AJS.SPAN, AJS, [v269]);
  JAM.set(chk_spell, "innerHTML", this.lang_chck_spell);
  var spell_img = null;
  var v271 = this.show_spell_img;
  if (v271) {
    var v1186 = this.img_dir;
    var v894 = v1186 + "spellc.gif";
    var v270 = {"src":v894};
    spell_img = JAM.call(AJS.IMG, AJS, [v270]);
  }
  return JAM.call(AJS.SPAN, AJS, [spell_img, " ", chk_spell]);
}
function v217() {
  function fn$$21(e$$30) {
    var elm$$48 = JAM.call(AJS.getEventElm, AJS, [e$$30]);
    var v895 = JAM.call(AJS.nodeName, AJS, [elm$$48]);
    var v272 = v895 == "img";
    if (v272) {
      elm$$48 = elm$$48.parentNode;
    }
    var v896 = elm$$48.className;
    var v273 = v896 == "googie_lang_3d_click";
    if (v273) {
      elm$$48.className = "googie_lang_3d_on";
      this.hideLangWindow();
    } else {
      elm$$48.className = "googie_lang_3d_click";
      JAM.call(this.showLangWindow, this, [switch_lan]);
    }
    return;
  }
  var v1187 = this.img_dir;
  var v897 = v1187 + "change_lang.gif";
  var v274 = {"src":v897, "alt":"Change language"};
  var img$$2 = JAM.call(AJS.IMG, AJS, [v274]);
  img$$2.googie_action_btn = "1";
  var v275 = {"class":"googie_lang_3d_on", "style":"padding-left: 6px;"};
  var switch_lan = JAM.call(AJS.SPAN, AJS, [v275, img$$2]);
  var v276 = JAM.call(AJS.$b, AJS, [fn$$21, this]);
  JAM.call(AJS.AEV, AJS, [switch_lan, "click", v276]);
  return switch_lan;
}
function v216(elm$$47, ofst_top, ofst_left) {
  var v277 = this.show_menu_observer;
  if (v277) {
    JAM.call(this.show_menu_observer, this, [this]);
  }
  var v898 = JAM.call(AJS.isDefined, AJS, [ofst_top]);
  var v278 = !v898;
  if (v278) {
    ofst_top = 20;
  }
  var v899 = JAM.call(AJS.isDefined, AJS, [ofst_left]);
  var v279 = !v899;
  if (v279) {
    ofst_left = 100;
  }
  this.createLangWindow();
  var v280 = AJS.getBody();
  var v281 = this.language_window;
  JAM.call(v280.appendChild, v280, [v281]);
  var abs_pos$$1 = JAM.call(AJS.absolutePosition, AJS, [elm$$47]);
  var v282 = this.language_window;
  JAM.call(AJS.showElement, AJS, [v282]);
  var v283 = this.language_window;
  var v900 = abs_pos$$1.y;
  var v284 = v900 + ofst_top;
  JAM.call(AJS.setTop, AJS, [v283, v284]);
  var v285 = this.language_window;
  var v1188 = abs_pos$$1.x;
  var v901 = v1188 + ofst_left;
  var v1189 = this.language_window;
  var v902 = v1189.offsetWidth;
  var v286 = v901 - v902;
  JAM.call(AJS.setLeft, AJS, [v285, v286]);
  this.highlightCurSel();
  var v903 = this.language_window;
  var v287 = v903.style;
  v287.visibility = "visible";
  return;
}
function v215() {
  var v288 = GOOGIE_CUR_LANG == null;
  if (v288) {
    GOOGIE_CUR_LANG = GOOGIE_DEFAULT_LANG;
  }
  var i$$21 = 0;
  var v1190 = this.lang_elms;
  var v904 = v1190.length;
  var v293 = i$$21 < v904;
  for (;v293;) {
    var v1309 = this.lang_elms;
    introspect(JAM.policy.p1) {
      var v1191 = v1309[i$$21]
    }
    var v905 = v1191.googieId;
    var v292 = v905 == GOOGIE_CUR_LANG;
    if (v292) {
      var v906 = this.lang_elms;
      introspect(JAM.policy.p1) {
        var v289 = v906[i$$21]
      }
      v289.className = "googie_list_selected";
      var v290 = this.lang_elms;
      introspect(JAM.policy.p1) {
        this.lang_cur_elm = v290[i$$21];
      }
    } else {
      var v907 = this.lang_elms;
      introspect(JAM.policy.p1) {
        var v291 = v907[i$$21]
      }
      v291.className = "googie_list_onout";
    }
    i$$21++;
    var v1192 = this.lang_elms;
    var v908 = v1192.length;
    v293 = i$$21 < v908;
  }
  return;
}
function v214() {
  var v294 = this.lang_cur_elm;
  v294.className = "googie_list_onout";
  return;
}
function v213() {
  try {
    var v909 = this.language_window;
    var v295 = v909.style;
    v295.visibility = "hidden";
    var v296 = this.switch_lan_pic;
    v296.className = "googie_lang_3d_on";
  } catch (e$$29) {
  }
  return;
}
function v212() {
  var v910 = this.language_window;
  var v297 = v910 != null;
  if (v297) {
    var v1310 = this.language_window;
    var v1193 = v1310.style;
    var v911 = v1193.visibility;
    v297 = v911 == "visible";
  }
  return v297;
}
function v211(lan_code) {
  GOOGIE_CUR_LANG = lan_code;
  var now = new Date;
  var v912 = now.getTime();
  var v1341 = 365 * 24;
  var v1311 = v1341 * 60;
  var v1194 = v1311 * 60;
  var v913 = v1194 * 1E3;
  var v298 = v912 + v913;
  now.setTime(v298);
  setCookie("language", lan_code, now);
  return;
}
function v210() {
  function v209(e$$28) {
    var i_it$$1 = JAM.call(AJS.getEventElm, AJS, [e$$28]);
    var v914 = i_it$$1.className;
    var v299 = v914 != "googie_list_selected";
    if (v299) {
      i_it$$1.className = "googie_list_onout";
    }
    return;
  }
  function v208(e$$27) {
    var i_it = JAM.call(AJS.getEventElm, AJS, [e$$27]);
    var v915 = i_it.className;
    var v300 = v915 != "googie_list_selected";
    if (v300) {
      i_it.className = "googie_list_onhover";
    }
    return;
  }
  function v207(e$$26) {
    var elm$$46 = JAM.call(AJS.getEventElm, AJS, [e$$26]);
    this.deHighlightCurSel();
    var v301 = elm$$46.googieId;
    JAM.call(this.setCurrentLanguage, this, [v301]);
    var v916 = this.lang_state_observer;
    var v302 = v916 != null;
    if (v302) {
      this.lang_state_observer();
    }
    this.highlightCurSel();
    this.hideLangWindow();
    return;
  }
  var v303 = {"class":"googie_window"};
  var v1364 = JAM.call(AJS.DIV, AJS, [v303]);
  this.language_window = v1364;
  var v304 = this.language_window;
  JAM.call(AJS.setWidth, AJS, [v304, 100]);
  var v305 = this.language_window;
  v305.googie_action_btn = "1";
  var v306 = {"class":"googie_list"};
  var table$$2 = JAM.call(AJS.TABLE, AJS, [v306]);
  JAM.call(AJS.setWidth, AJS, [table$$2, "100%"]);
  var list$$12 = AJS.TBODY();
  var v1365 = new Array;
  this.lang_elms = v1365;
  i = 0;
  var v1195 = this.langlist_codes;
  var v917 = v1195.length;
  var v313 = i < v917;
  for (;v313;) {
    var row$$1 = AJS.TR();
    var item$$2 = AJS.TD();
    var v307 = this.langlist_codes;
    introspect(JAM.policy.p1) {
      item$$2.googieId = v307[i];
    }
    var v308 = this.lang_elms;
    v308.push(item$$2);
    var lang_span = AJS.SPAN();
    var v309 = this.lang_to_word;
    var v918 = this.langlist_codes;
    introspect(JAM.policy.p1) {
      var v310 = v918[i]
    }
    JAM.set(lang_span, "innerHTML", JAM.get(v309, v310, JAM.policy.p1));
    var v919 = lang_span.innerHTML;
    var v311 = JAM.call(AJS.TN, AJS, [v919]);
    JAM.call(item$$2.appendChild, item$$2, [v311]);
    var fn$$20 = v207;
    var v312 = JAM.call(AJS.$b, AJS, [fn$$20, this]);
    JAM.call(AJS.AEV, AJS, [item$$2, "click", v312]);
    JAM.set(item$$2, "onmouseover", v208);
    JAM.set(item$$2, "onmouseout", v209);
    JAM.call(row$$1.appendChild, row$$1, [item$$2]);
    JAM.call(list$$12.appendChild, list$$12, [row$$1]);
    i++;
    var v1196 = this.langlist_codes;
    var v920 = v1196.length;
    v313 = i < v920;
  }
  var v315 = this.use_close_btn;
  if (v315) {
    var v921 = this.hideLangWindow;
    var v314 = JAM.call(this.createCloseButton, this, [v921]);
    JAM.call(list$$12.appendChild, list$$12, [v314]);
  }
  this.highlightCurSel();
  JAM.call(table$$2.appendChild, table$$2, [list$$12]);
  var v316 = this.language_window;
  JAM.call(v316.appendChild, v316, [table$$2]);
  return;
}
function v206() {
  function v205(elm$$45) {
    JAM.call(me$$6.custom_item_evaulator, me$$6, [me$$6, elm$$45]);
    return;
  }
  var output = AJS.DIV();
  var v317 = output.style;
  v317.textAlign = "left";
  var pointer = 0;
  var results$$1 = this.results;
  var v922 = results$$1.length;
  var v326 = v922 > 0;
  if (v326) {
    var i$$20 = 0;
    var v923 = results$$1.length;
    var v323 = i$$20 < v923;
    for (;v323;) {
      introspect(JAM.policy.p1) {
        var v924 = results$$1[i$$20]
      }
      var v318 = v924["attrs"];
      var offset$$11 = v318["o"];
      introspect(JAM.policy.p1) {
        var v925 = results$$1[i$$20]
      }
      var v319 = v925["attrs"];
      var len$$1 = v319["l"];
      var v320 = this.orginal_text;
      var part_1_text = v320.substring(pointer, offset$$11);
      var part_1$$1 = JAM.call(GoogieSpell.createPart, GoogieSpell, [part_1_text]);
      JAM.call(output.appendChild, output, [part_1$$1]);
      var v926 = offset$$11 - pointer;
      pointer = pointer + v926;
      var v927 = this.orginal_text;
      var v321 = v927.substr(offset$$11, len$$1);
      var err_link = JAM.call(this.createErrorLink, this, [v321, i$$20]);
      var v322 = this.error_links;
      v322.push(err_link);
      JAM.call(output.appendChild, output, [err_link]);
      pointer = pointer + len$$1;
      i$$20++;
      var v928 = results$$1.length;
      v323 = i$$20 < v928;
    }
    var v324 = this.orginal_text;
    var v929 = this.orginal_text;
    var v325 = v929.length;
    var part_2_text = v324.substr(pointer, v325);
    var part_2$$1 = JAM.call(GoogieSpell.createPart, GoogieSpell, [part_2_text]);
    JAM.call(output.appendChild, output, [part_2$$1]);
  } else {
    JAM.set(output, "innerHTML", this.orginal_text);
  }
  var me$$6 = this;
  var v328 = this.custom_item_evaulator;
  if (v328) {
    var v327 = this.error_links;
    JAM.call(AJS.map, AJS, [v327, v205]);
  }
  var v329 = this.edit_layer;
  JAM.call(AJS.ACN, AJS, [v329, output]);
  var v930 = this.text_area;
  var v330 = v930.offsetTop;
  var v931 = this.text_area;
  var v331 = v931.offsetHeight;
  this.text_area_bottom = v330 + v331;
  var v332 = this.text_area;
  JAM.call(AJS.hideElement, AJS, [v332]);
  var v333 = this.edit_layer;
  var v334 = this.text_area;
  JAM.call(AJS.insertBefore, AJS, [v333, v334]);
  var v339 = this.use_focus;
  if (v339) {
    var v1366 = JAM.call(this.createFocusLink, this, ["focus_t"]);
    this.focus_link_t = v1366;
    var v1367 = JAM.call(this.createFocusLink, this, ["focus_b"]);
    this.focus_link_b = v1367;
    var v335 = this.focus_link_t;
    var v336 = this.edit_layer;
    JAM.call(AJS.insertBefore, AJS, [v335, v336]);
    var v337 = this.focus_link_b;
    var v338 = this.edit_layer;
    JAM.call(AJS.insertAfter, AJS, [v337, v338]);
  }
  var v340 = this.edit_layer;
  v340.scrollTop = this.ta_scroll_top;
  return;
}
function v204(txt_part) {
  var v341 = txt_part == " ";
  if (v341) {
    return JAM.call(AJS.TN, AJS, [" "]);
  }
  var result$$2 = AJS.SPAN();
  var is_first = true;
  var v1197 = navigator.userAgent;
  var v932 = v1197.toLowerCase();
  var v342 = v932.indexOf("safari");
  var is_safari = v342 != -1;
  var part = AJS.SPAN();
  txt_part = JAM.call(GoogieSpell.escapeSepcial, GoogieSpell, [txt_part]);
  txt_part = txt_part.replace(/\n/g, "<br>");
  txt_part = txt_part.replace(/    /g, " &nbsp;");
  txt_part = txt_part.replace(/^ /g, "&nbsp;");
  txt_part = txt_part.replace(/ $/g, "&nbsp;");
  JAM.set(part, "innerHTML", txt_part);
  return part;
}
function v203(text$$10, id$$5) {
  function d$$4(e$$25) {
    JAM.call(me$$5.showErrorWindow, me$$5, [elm$$44, id$$5]);
    d$$4 = null;
    return false;
  }
  var v343 = {"class":"googie_link"};
  var elm$$44 = JAM.call(AJS.SPAN, AJS, [v343]);
  var me$$5 = this;
  JAM.call(AJS.AEV, AJS, [elm$$44, "click", d$$4]);
  elm$$44.googie_action_btn = "1";
  elm$$44.g_id = id$$5;
  elm$$44.is_corrected = false;
  JAM.call(AJS.AEV, AJS, [elm$$44, "contextmenu", d$$4]);
  JAM.set(elm$$44, "innerHTML", text$$10);
  return elm$$44;
}
function v202() {
  JAM.call(this.setStateChanged, this, ["spell_check"]);
  var v933 = this.switch_lan_pic;
  var v344 = v933.style;
  v344.display = "inline";
  var v346 = this.edit_layer;
  if (v346) {
    var v345 = this.edit_layer;
    this.el_scroll_top = v345.scrollTop;
  }
  this.hideErrorWindow();
  var v348 = this.main_controller;
  if (v348) {
    var v347 = this.spell_span;
    v347.className = "googie_no_style";
  }
  var v934 = this.ignore;
  var v357 = !v934;
  if (v357) {
    try {
      var v935 = this.edit_layer;
      var v349 = v935.parentNode;
      var v350 = this.edit_layer;
      v349.removeChild(v350);
      var v353 = this.use_focus;
      if (v353) {
        var v351 = this.focus_link_t;
        JAM.call(AJS.removeElement, AJS, [v351]);
        var v352 = this.focus_link_b;
        JAM.call(AJS.removeElement, AJS, [v352]);
      }
    } catch (e$$24) {
    }
    var v354 = this.text_area;
    JAM.call(AJS.showElement, AJS, [v354]);
    var v936 = this.el_scroll_top;
    var v356 = v936 != undefined;
    if (v356) {
      var v355 = this.text_area;
      v355.scrollTop = this.el_scroll_top;
    }
  }
  JAM.call(this.checkSpellingState, this, [false]);
  return;
}
function v201(width$$10, height$$9) {
  function v200(e$$23) {
    function v199() {
      var v358 = me$$4.text_area;
      v358.focus();
      fn1$$1 = null;
      return;
    }
    var v1312 = JAM.call(AJS.getEventElm, AJS, [e$$23]);
    var v1198 = v1312.className;
    var v937 = v1198 != "googie_link";
    if (v937) {
      var v1199 = me$$4.isErrorWindowShown();
      v937 = !v1199;
    }
    var v359 = v937;
    if (v359) {
      me$$4.resumeEditing();
      var fn1$$1 = v199;
      JAM.call(setTimeout, null, [fn1$$1, 10]);
    }
    return false;
  }
  var v360 = {"class":"googie_edit_layer"};
  var v1368 = JAM.call(AJS.DIV, AJS, [v360]);
  this.edit_layer = v1368;
  var v361 = this.edit_layer;
  var v938 = this.text_area;
  v361.className = v938.className;
  var v939 = this.edit_layer;
  var v362 = v939.style;
  v362.border = "1px solid #999";
  var v940 = this.edit_layer;
  var v363 = v940.style;
  v363.backgroundColor = "#f7f7f7";
  var v941 = this.edit_layer;
  var v364 = v941.style;
  v364.padding = "3px";
  var v942 = this.edit_layer;
  var v365 = v942.style;
  v365.margin = "0px";
  var v366 = this.edit_layer;
  var v367 = width$$10 - 8;
  JAM.call(AJS.setWidth, AJS, [v366, v367]);
  var v1313 = this.text_area;
  var v1200 = JAM.call(AJS.nodeName, AJS, [v1313]);
  var v943 = v1200 != "input";
  var v1202 = !v943;
  if (v1202) {
    var v1314 = this.text_area;
    var v1201 = JAM.call(this.getValue, this, [v1314]);
    v943 = v1201 == "";
  }
  var v372 = v943;
  if (v372) {
    var v944 = this.edit_layer;
    var v368 = v944.style;
    v368.overflow = "auto";
    var v369 = this.edit_layer;
    var v370 = height$$9 - 6;
    JAM.call(AJS.setHeight, AJS, [v369, v370]);
  } else {
    var v945 = this.edit_layer;
    var v371 = v945.style;
    v371.overflow = "hidden";
  }
  var v374 = this.edit_layer_dbl_click;
  if (v374) {
    var me$$4 = this;
    var fn$$19 = v200;
    var v373 = this.edit_layer;
    JAM.set(v373, "ondblclick", fn$$19);
    fn$$19 = null;
  }
  return;
}
function v198(elm$$43, id$$4) {
  function v197(i$$19) {
    function v196() {
      return JAM.call(e_elm[1], e_elm, [elm$$43, me$$3]);
    }
    var v1203 = me$$3.extra_menu_items;
    var v946 = v1203.length;
    var v379 = i$$19 < v946;
    if (v379) {
      var v375 = me$$3.extra_menu_items;
      introspect(JAM.policy.p1) {
        var e_elm = v375[i$$19]
      }
      var v1204 = e_elm[2];
      var v947 = !v1204;
      var v1205 = !v947;
      if (v1205) {
        v947 = JAM.call(e_elm[2], e_elm, [elm$$43, me$$3]);
      }
      var v377 = v947;
      if (v377) {
        var e_row = AJS.TR();
        var v376 = e_elm[0];
        var e_col$$1 = JAM.call(AJS.TD, AJS, [v376]);
        JAM.set(e_col$$1, "onmouseover", GoogieSpell.item_onmouseover);
        JAM.set(e_col$$1, "onmouseout", GoogieSpell.item_onmouseout);
        var fn$$18 = v196;
        JAM.call(AJS.AEV, AJS, [e_col$$1, "click", fn$$18]);
        JAM.call(AJS.ACN, AJS, [e_row, e_col$$1]);
        JAM.call(AJS.ACN, AJS, [list$$11, e_row]);
      }
      var v378 = i$$19 + 1;
      JAM.call(loop, null, [v378]);
    }
    return;
  }
  function v195() {
    var v948 = edit_input.value;
    var v385 = v948 != "";
    if (v385) {
      var v1206 = elm$$43.old_value;
      var v949 = JAM.call(AJS.isDefined, AJS, [v1206]);
      var v381 = !v949;
      if (v381) {
        var v380 = elm$$43.innerHTML;
        JAM.call(this.saveOldValue, this, [elm$$43, v380]);
      }
      var v382 = elm$$43.innerHTML;
      var v383 = edit_input.value;
      JAM.call(this.updateOrginalText, this, [offset$$10, v382, v383, id$$4]);
      var v384 = elm$$43.style;
      v384.color = "green";
      elm$$43.is_corrected = true;
      JAM.set(elm$$43, "innerHTML", edit_input.value);
      this.hideErrorWindow();
    }
    return false;
  }
  function v194(e$$22) {
    var v386 = elm$$43.innerHTML;
    JAM.call(this.updateOrginalText, this, [offset$$10, v386, old_value$$3, id$$4]);
    elm$$43.is_corrected = true;
    var v387 = elm$$43.style;
    v387.color = "#b91414";
    JAM.set(elm$$43, "innerHTML", old_value$$3);
    this.hideErrorWindow();
    return;
  }
  function v193(e$$21) {
    var l_elm$$1 = JAM.call(AJS.getEventElm, AJS, [e$$21]);
    JAM.call(this.correctError, this, [id$$4, elm$$43, l_elm$$1]);
    return;
  }
  var v388 = this.show_menu_observer;
  if (v388) {
    JAM.call(this.show_menu_observer, this, [this]);
  }
  var me$$3 = this;
  var abs_pos = JAM.call(AJS.absolutePosition, AJS, [elm$$43]);
  var v950 = abs_pos.y;
  var v1207 = this.edit_layer;
  var v951 = v1207.scrollTop;
  abs_pos.y = v950 - v951;
  var v952 = this.error_window;
  var v389 = v952.style;
  v389.visibility = "visible";
  var v390 = this.error_window;
  var v953 = abs_pos.y;
  var v391 = v953 + 20;
  JAM.call(AJS.setTop, AJS, [v390, v391]);
  var v392 = this.error_window;
  var v393 = abs_pos.x;
  JAM.call(AJS.setLeft, AJS, [v392, v393]);
  var v394 = {"class":"googie_list"};
  var table$$1 = JAM.call(AJS.TABLE, AJS, [v394]);
  table$$1.googie_action_btn = "1";
  var list$$11 = AJS.TBODY();
  var changed = false;
  var v954 = this.custom_menu_builder;
  var v398 = v954 != [];
  if (v398) {
    var k$$4 = 0;
    var v1208 = this.custom_menu_builder;
    var v955 = v1208.length;
    var v397 = k$$4 < v955;
    for (;v397;) {
      var v395 = this.custom_menu_builder;
      introspect(JAM.policy.p1) {
        var eb = v395[k$$4]
      }
      var v1209 = this.results;
      introspect(JAM.policy.p1) {
        var v956 = v1209[id$$4]
      }
      var v396 = JAM.call(eb[0], eb, [v956]);
      if (v396) {
        changed = JAM.call(eb[1], eb, [this, list$$11, elm$$43]);
        break;
      }
      k$$4++;
      var v1210 = this.custom_menu_builder;
      var v957 = v1210.length;
      v397 = k$$4 < v957;
    }
  }
  var v420 = !changed;
  if (v420) {
    var v958 = this.results;
    introspect(JAM.policy.p1) {
      var v399 = v958[id$$4]
    }
    var suggestions = v399["suggestions"];
    var v1211 = this.results;
    introspect(JAM.policy.p1) {
      var v959 = v1211[id$$4]
    }
    var v400 = v959["attrs"];
    var offset$$10 = v400["o"];
    var v1212 = this.results;
    introspect(JAM.policy.p1) {
      var v960 = v1212[id$$4]
    }
    var v401 = v960["attrs"];
    var len = v401["l"];
    var v961 = suggestions.length;
    var v404 = v961 == 0;
    if (v404) {
      var row = AJS.TR();
      var v402 = {"style":"cursor: default;"};
      var item$$1 = JAM.call(AJS.TD, AJS, [v402]);
      var dummy = AJS.SPAN();
      JAM.set(dummy, "innerHTML", this.lang_no_suggestions);
      var v962 = dummy.innerHTML;
      var v403 = JAM.call(AJS.TN, AJS, [v962]);
      JAM.call(AJS.ACN, AJS, [item$$1, v403]);
      item$$1.googie_action_btn = "1";
      JAM.call(row.appendChild, row, [item$$1]);
      JAM.call(list$$11.appendChild, list$$11, [row]);
    }
    i = 0;
    var v963 = suggestions.length;
    var v407 = i < v963;
    for (;v407;) {
      row = AJS.TR();
      item$$1 = AJS.TD();
      dummy = AJS.SPAN();
      JAM.set(dummy, "innerHTML", JAM.get(suggestions, i, JAM.policy.p1));
      var v405 = dummy.innerHTML;
      var tre = JAM.call(AJS.TN, AJS, [v405]);
      JAM.call(item$$1.appendChild, item$$1, [tre]);
      var fn$$17 = v193;
      var v406 = JAM.call(AJS.$b, AJS, [fn$$17, this]);
      JAM.call(AJS.AEV, AJS, [item$$1, "click", v406]);
      var mytxfn1 = GoogieSpell.item_onmouseover;
      JAM.call(AJS.AEV, AJS, [item$$1, "mouseover", mytxfn1]);
      var mytxfn2 = GoogieSpell.item_onmouseout;
      JAM.call(AJS.AEV, AJS, [item$$1, "mouseout", mytxfn2]);
      JAM.call(row.appendChild, row, [item$$1]);
      JAM.call(list$$11.appendChild, list$$11, [row]);
      i++;
      var v964 = suggestions.length;
      v407 = i < v964;
    }
    var v965 = elm$$43.is_changed;
    if (v965) {
      var v1213 = elm$$43.innerHTML;
      var v1214 = elm$$43.old_value;
      v965 = v1213 != v1214;
    }
    var v411 = v965;
    if (v411) {
      var old_value$$3 = elm$$43.old_value;
      var revert_row = AJS.TR();
      var revert = AJS.TD();
      mytxfn1 = GoogieSpell.item_onmouseover;
      JAM.call(AJS.AEV, AJS, [revert, "mouseover", mytxfn1]);
      mytxfn2 = GoogieSpell.item_onmouseout;
      JAM.call(AJS.AEV, AJS, [revert, "mouseout", mytxfn2]);
      var v408 = {"class":"googie_list_revert"};
      var rev_span = JAM.call(AJS.SPAN, AJS, [v408]);
      var v966 = this.lang_revert;
      var v409 = v966 + " ";
      JAM.set(rev_span, "innerHTML", v409 + old_value$$3);
      JAM.call(revert.appendChild, revert, [rev_span]);
      fn$$17 = v194;
      var v410 = JAM.call(AJS.$b, AJS, [fn$$17, this]);
      JAM.call(AJS.AEV, AJS, [revert, "click", v410]);
      JAM.call(revert_row.appendChild, revert_row, [revert]);
      JAM.call(list$$11.appendChild, list$$11, [revert_row]);
    }
    var edit_row = AJS.TR();
    var v412 = {"style":"cursor: default"};
    var edit = JAM.call(AJS.TD, AJS, [v412]);
    var v967 = elm$$43.innerHTML;
    var v413 = {"style":"width: 120px; margin:0; padding:0", "value":v967};
    var edit_input = JAM.call(AJS.INPUT, AJS, [v413]);
    edit_input.googie_action_btn = "1";
    var onsub = v195;
    onsub = JAM.call(AJS.$b, AJS, [onsub, this]);
    var v1215 = this.img_dir;
    var v968 = v1215 + "ok.gif";
    var v414 = {"src":v968, "style":"width: 32px; height: 16px; margin-left: 2px; margin-right: 2px; cursor: pointer;"};
    var ok_pic = JAM.call(AJS.IMG, AJS, [v414]);
    var v415 = {"style":"margin: 0; padding: 0; cursor: default;"};
    var edit_form = JAM.call(AJS.FORM, AJS, [v415, edit_input, ok_pic]);
    edit_form.googie_action_btn = "1";
    edit.googie_action_btn = "1";
    JAM.call(AJS.AEV, AJS, [edit_form, "submit", onsub]);
    JAM.call(AJS.AEV, AJS, [ok_pic, "click", onsub]);
    JAM.call(edit.appendChild, edit, [edit_form]);
    JAM.call(edit_row.appendChild, edit_row, [edit]);
    JAM.call(list$$11.appendChild, list$$11, [edit_row]);
    var v1216 = this.extra_menu_items;
    var v969 = v1216.length;
    var v417 = v969 > 0;
    if (v417) {
      var v416 = this.createListSeparator();
      JAM.call(AJS.ACN, AJS, [list$$11, v416]);
    }
    var loop = v197;
    JAM.call(loop, null, [0]);
    loop = null;
    var v419 = this.use_close_btn;
    if (v419) {
      var v970 = this.hideErrorWindow;
      var v418 = JAM.call(this.createCloseButton, this, [v970]);
      JAM.call(AJS.ACN, AJS, [list$$11, v418]);
    }
  }
  JAM.call(table$$1.appendChild, table$$1, [list$$11]);
  var v421 = this.error_window;
  JAM.call(v421.appendChild, v421, [table$$1]);
  var v971 = AJS.isIe();
  if (v971) {
    var v1217 = this.error_window_iframe;
    v971 = !v1217;
  }
  var v424 = v971;
  if (v424) {
    var v422 = {"style":"position: absolute; z-index: 0;"};
    var iframe = JAM.call(AJS.IFRAME, AJS, [v422]);
    var v423 = AJS.getBody();
    JAM.call(AJS.ACN, AJS, [v423, iframe]);
    this.error_window_iframe = iframe;
  }
  var v430 = AJS.isIe();
  if (v430) {
    iframe = this.error_window_iframe;
    var v972 = this.error_window;
    var v425 = v972.offsetTop;
    JAM.call(AJS.setTop, AJS, [iframe, v425]);
    var v973 = this.error_window;
    var v426 = v973.offsetLeft;
    JAM.call(AJS.setLeft, AJS, [iframe, v426]);
    var v974 = this.error_window;
    var v427 = v974.offsetWidth;
    JAM.call(AJS.setWidth, AJS, [iframe, v427]);
    var v975 = this.error_window;
    var v428 = v975.offsetHeight;
    JAM.call(AJS.setHeight, AJS, [iframe, v428]);
    var v429 = iframe.style;
    v429.visibility = "visible";
  }
  var link = JAM.call(this.createFocusLink, this, ["link"]);
  var v431 = {"style":"text-align: right; font-size: 1px; height: 1px; margin: 0; padding: 0;"};
  var a1 = JAM.call(AJS.TD, AJS, [v431, link]);
  var a2 = JAM.call(AJS.TR, AJS, [a1]);
  JAM.call(list$$11.appendChild, list$$11, [a2]);
  link.focus();
  return;
}
function v192(id$$3, elm$$42, l_elm, rm_pre_space) {
  var old_value$$2 = elm$$42.innerHTML;
  var new_value$$1 = l_elm.innerHTML;
  var v1218 = this.results;
  introspect(JAM.policy.p1) {
    var v976 = v1218[id$$3]
  }
  var v432 = v976["attrs"];
  var offset$$9 = v432["o"];
  if (rm_pre_space) {
    var v433 = elm$$42.previousSibling;
    var pre_length = v433.innerHTML;
    var v434 = elm$$42.previousSibling;
    var v1219 = pre_length.length;
    var v977 = v1219 - 1;
    var v1369 = pre_length.slice(0, v977);
    JAM.set(v434, "innerHTML", v1369);
    old_value$$2 = " " + old_value$$2;
    offset$$9--;
  }
  this.hideErrorWindow();
  JAM.call(this.updateOrginalText, this, [offset$$9, old_value$$2, new_value$$1, id$$3]);
  JAM.set(elm$$42, "innerHTML", new_value$$1);
  var v435 = elm$$42.style;
  v435.color = "green";
  elm$$42.is_corrected = true;
  var v1220 = this.results;
  introspect(JAM.policy.p1) {
    var v978 = v1220[id$$3]
  }
  var v436 = v978["attrs"];
  v436["l"] = new_value$$1.length;
  var v1221 = elm$$42.old_value;
  var v979 = JAM.call(AJS.isDefined, AJS, [v1221]);
  var v437 = !v979;
  if (v437) {
    JAM.call(this.saveOldValue, this, [elm$$42, old_value$$2]);
  }
  this.errorFixed();
  return;
}
function v191() {
  var e_col = JAM.call(AJS.TD, AJS, [" "]);
  e_col.googie_action_btn = "1";
  var v438 = e_col.style;
  v438.cursor = "default";
  var v439 = e_col.style;
  v439.fontSize = "3px";
  var v440 = e_col.style;
  v440.borderTop = "1px solid #ccc";
  var v441 = e_col.style;
  v441.paddingTop = "3px";
  return JAM.call(AJS.TR, AJS, [e_col]);
}
function v190(elm$$41, old_value$$1) {
  elm$$41.is_changed = true;
  elm$$41.old_value = old_value$$1;
  return;
}
function v189(offset$$8, old_value, new_value, id$$2) {
  var v442 = this.orginal_text;
  var part_1 = v442.substring(0, offset$$8);
  var v443 = this.orginal_text;
  var v980 = old_value.length;
  var v444 = offset$$8 + v980;
  var part_2 = v443.substring(v444);
  var v445 = part_1 + new_value;
  this.orginal_text = v445 + part_2;
  var v446 = this.text_area;
  var v447 = this.orginal_text;
  JAM.call(this.setValue, this, [v446, v447]);
  var v448 = new_value.length;
  var v449 = old_value.length;
  var add_2_offset = v448 - v449;
  var j$$3 = 0;
  var v1222 = this.results;
  var v981 = v1222.length;
  var v452 = j$$3 < v981;
  for (;v452;) {
    var v982 = j$$3 != id$$2;
    if (v982) {
      v982 = j$$3 > id$$2;
    }
    var v451 = v982;
    if (v451) {
      var v1223 = this.results;
      introspect(JAM.policy.p1) {
        var v983 = v1223[j$$3]
      }
      var v450 = v983["attrs"];
      var v1224 = v450["o"];
      v450["o"] = v1224 + add_2_offset;
    }
    j$$3++;
    var v1225 = this.results;
    var v984 = v1225.length;
    v452 = j$$3 < v984;
  }
  return;
}
function v188() {
  try {
    var v985 = this.error_window;
    var v453 = v985.style;
    v453.visibility = "hidden";
    var v455 = this.error_window_iframe;
    if (v455) {
      var v986 = this.error_window_iframe;
      var v454 = v986.style;
      v454.visibility = "hidden";
    }
  } catch (e$$20) {
  }
  return;
}
function v187() {
  var v987 = this.error_window;
  var v456 = v987 != null;
  if (v456) {
    var v1315 = this.error_window;
    var v1226 = v1315.style;
    var v988 = v1226.visibility;
    v456 = v988 == "visible";
  }
  return v456;
}
function v186() {
  var v1370 = AJS.DIV();
  this.error_window = v1370;
  var v457 = this.error_window;
  v457.className = "googie_window";
  var v458 = this.error_window;
  v458.googie_action_btn = "1";
  return;
}
function v185() {
  this.cnt_errors++;
  return;
}
function v184() {
  this.cnt_errors_fixed++;
  var v460 = this.all_errors_fixed_observer;
  if (v460) {
    var v989 = this.cnt_errors_fixed;
    var v990 = this.cnt_errors;
    var v459 = v989 == v990;
    if (v459) {
      this.hideErrorWindow();
      this.all_errors_fixed_observer();
    }
  }
  return;
}
function v183(r_text$$1) {
  var re_split_attr_c = /\w+="(\d+|true)"/g;
  var re_split_text = /\t/g;
  var matched_c = r_text$$1.match(/<c[^>]*>[^<]*<\/c>/g);
  var results = new Array;
  var v461 = matched_c == null;
  if (v461) {
    return results;
  }
  var i$$18 = 0;
  var v991 = matched_c.length;
  var v476 = i$$18 < v991;
  for (;v476;) {
    var item = new Array;
    this.errorFound();
    var v1371 = new Array;
    item["attrs"] = v1371;
    introspect(JAM.policy.p1) {
      var v462 = matched_c[i$$18]
    }
    var split_c = v462.match(re_split_attr_c);
    var j$$2 = 0;
    var v992 = split_c.length;
    var v470 = j$$2 < v992;
    for (;v470;) {
      introspect(JAM.policy.p1) {
        var v463 = split_c[j$$2]
      }
      var c_attr = v463.split(/=/);
      var v464 = c_attr[1];
      var val$$5 = v464.replace(/"/g, "");
      var v469 = val$$5 != "true";
      if (v469) {
        var v465 = item["attrs"];
        var v466 = c_attr[0];
        var v1372 = parseInt(val$$5);
        v465[v466] = v1372;
      } else {
        var v467 = item["attrs"];
        var v468 = c_attr[0];
        JAM.set(v467, v468, val$$5);
      }
      j$$2++;
      var v993 = split_c.length;
      v470 = j$$2 < v993;
    }
    var v1373 = new Array;
    item["suggestions"] = v1373;
    introspect(JAM.policy.p1) {
      var v471 = matched_c[i$$18]
    }
    var only_text = v471.replace(/<[^>]*>/g, "");
    var split_t = only_text.split(re_split_text);
    var k$$3 = 0;
    var v994 = split_t.length;
    var v475 = k$$3 < v994;
    for (;v475;) {
      introspect(JAM.policy.p1) {
        var v995 = split_t[k$$3]
      }
      var v474 = v995 != "";
      if (v474) {
        var v472 = item["suggestions"];
        introspect(JAM.policy.p1) {
          var v473 = split_t[k$$3]
        }
        v472.push(v473);
      }
      k$$3++;
      var v996 = split_t.length;
      v475 = k$$3 < v996;
    }
    results.push(item);
    i$$18++;
    var v997 = matched_c.length;
    v476 = i$$18 < v997;
  }
  return results;
}
function v182(ignore) {
  function reqfailed(res_txt$$1, req$$7) {
    var v477 = me$$2.custom_ajax_error;
    if (v477) {
      JAM.call(me$$2.custom_ajax_error, me$$2, [req$$7]);
    } else {
      alert("An error was encountered on the server. Please try again later.");
    }
    var v479 = me$$2.main_controller;
    if (v479) {
      var v478 = me$$2.spell_span;
      JAM.call(AJS.removeElement, AJS, [v478]);
      me$$2.removeIndicator();
    }
    me$$2.checkSpellingState();
    return;
  }
  function reqdone(res_txt) {
    var r_text = res_txt;
    var v480 = me$$2;
    var v1374 = JAM.call(me$$2.parseResult, me$$2, [r_text]);
    v480.results = v1374;
    var v998 = r_text.match(/<c.*>/);
    var v482 = v998 != null;
    if (v482) {
      me$$2.showErrorsInIframe();
      me$$2.resumeEditingState();
    } else {
      var v999 = me$$2.custom_no_spelling_error;
      var v481 = !v999;
      if (v481) {
        me$$2.flashNoSpellingErrorState();
      } else {
        JAM.call(me$$2.custom_no_spelling_error, me$$2, [me$$2]);
      }
    }
    me$$2.removeIndicator();
    return;
  }
  var me$$2 = this;
  this.cnt_errors_fixed = 0;
  this.cnt_errors = 0;
  JAM.call(this.setStateChanged, this, ["checking_spell"]);
  var v484 = this.main_controller;
  if (v484) {
    var v483 = this.spell_span;
    JAM.call(this.appendIndicator, this, [v483]);
  }
  this.error_links = [];
  var v485 = this.text_area;
  this.ta_scroll_top = v485.scrollTop;
  try {
    this.hideLangWindow();
  } catch (e$$19) {
  }
  this.ignore = ignore;
  var v1316 = this.text_area;
  var v1227 = JAM.call(this.getValue, this, [v1316]);
  var v1000 = v1227 == "";
  var v1228 = !v1000;
  if (v1228) {
    v1000 = ignore;
  }
  var v487 = v1000;
  if (v487) {
    var v1001 = me$$2.custom_no_spelling_error;
    var v486 = !v1001;
    if (v486) {
      me$$2.flashNoSpellingErrorState();
    } else {
      JAM.call(me$$2.custom_no_spelling_error, me$$2, [me$$2]);
    }
    me$$2.removeIndicator();
    return;
  }
  var v1002 = this.text_area;
  var v488 = v1002.offsetWidth;
  var v1003 = this.text_area;
  var v489 = v1003.offsetHeight;
  JAM.call(this.createEditLayer, this, [v488, v489]);
  this.createErrorWindow();
  var v490 = AJS.getBody();
  var v491 = this.error_window;
  JAM.call(v490.appendChild, v490, [v491]);
  var v493 = this.main_controller;
  if (v493) {
    var v492 = this.spell_span;
    JAM.set(v492, "onclick", null);
  }
  var v494 = this.text_area;
  var v1375 = JAM.call(this.getValue, this, [v494]);
  this.orginal_text = v1375;
  var v495 = this.getGoogleUrl();
  var d$$3 = JAM.call(AJS.getRequest, AJS, [v495]);
  JAM.call(d$$3.addCallback, d$$3, [reqdone]);
  reqdone = null;
  JAM.call(d$$3.addErrback, d$$3, [reqfailed]);
  reqfailed = null;
  var v496 = this.orginal_text;
  var req_text = JAM.call(GoogieSpell.escapeSepcial, GoogieSpell, [v496]);
  var v497 = JAM.call(GoogieSpell.createXMLReq, GoogieSpell, [req_text]);
  JAM.call(d$$3.sendReq, d$$3, [v497]);
  return;
}
function v181(text$$9) {
  var v498 = '<?xml version="1.0" encoding="utf-8" ?><spellrequest textalreadyclipped="0" ignoredups="0" ignoredigits="1" ignoreallcaps="1"><text>' + text$$9;
  return v498 + "</text></spellrequest>";
}
function v180(val$$4) {
  var v1004 = val$$4.replace(/&/g, "&amp;");
  var v499 = v1004.replace(/</g, "&lt;");
  return v499.replace(/>/g, "&gt;");
}
function v179() {
  var v500 = this.server_url;
  return v500 + GOOGIE_CUR_LANG;
}
function v178(bool$$1) {
  this.report_state_change = bool$$1;
  return;
}
function v177(current_state) {
  this.state = current_state;
  var v1229 = this.spelling_state_observer;
  var v1005 = v1229 != null;
  if (v1005) {
    v1005 = this.report_state_change;
  }
  var v501 = v1005;
  if (v501) {
    JAM.call(this.spelling_state_observer, this, [current_state, this]);
  }
  return;
}
function v176(ta$$1, value$$28) {
  ta$$1.value = value$$28;
  return;
}
function v175(ta) {
  return ta.value;
}
function v174() {
  try {
    var v502 = this.focus_link_b;
    v502.focus();
    var v503 = this.focus_link_t;
    v503.focus();
    return true;
  } catch (e$$18) {
    return false;
  }
  return;
}
function v173(eval$$1, builder) {
  var v504 = this.custom_menu_builder;
  var v505 = [eval$$1, builder];
  v504.push(v505);
  return;
}
function v172(name$$33, call_back_fn, checker) {
  var v506 = this.extra_menu_items;
  var v507 = [name$$33, call_back_fn, checker];
  v506.push(v507);
  return;
}
function v171() {
  this.use_close_btn = false;
  return;
}
function v170(bool) {
  this.decoration = bool;
  return;
}
function v169(width$$9, height$$8) {
  this.force_width = width$$9;
  this.force_height = height$$8;
  return;
}
function v168(lang_dict) {
  this.lang_to_word = lang_dict;
  var v1376 = JAM.call(AJS.keys, AJS, [lang_dict]);
  this.langlist_codes = v1376;
  return;
}
function v167(elm$$40) {
  var v1377 = JAM.call(AJS.$, AJS, [elm$$40]);
  this.spell_container = v1377;
  return;
}
function v166(id$$1) {
  var v1006 = typeof id$$1;
  var v508 = v1006 == "string";
  if (v508) {
    var v1378 = JAM.call(AJS.$, AJS, [id$$1]);
    this.text_area = v1378;
  } else {
    this.text_area = id$$1;
  }
  var r_width;
  var r_height;
  var v1007 = this.text_area;
  var v516 = v1007 != null;
  if (v516) {
    var v1317 = this.spell_container;
    var v1230 = JAM.call(AJS.isDefined, AJS, [v1317]);
    var v1008 = !v1230;
    if (v1008) {
      v1008 = this.decoration;
    }
    var v514 = v1008;
    if (v514) {
      var table = AJS.TABLE();
      var tbody = AJS.TBODY();
      var tr = AJS.TR();
      var v1009 = this.force_width;
      var v510 = JAM.call(AJS.isDefined, AJS, [v1009]);
      if (v510) {
        r_width = this.force_width;
      } else {
        var v1010 = this.text_area;
        var v509 = v1010.offsetWidth;
        r_width = v509 + "px";
      }
      var v1011 = this.force_height;
      var v511 = JAM.call(AJS.isDefined, AJS, [v1011]);
      if (v511) {
        r_height = this.force_height;
      } else {
        r_height = "";
      }
      var spell_container = AJS.TD();
      this.spell_container = spell_container;
      JAM.call(tr.appendChild, tr, [spell_container]);
      JAM.call(tbody.appendChild, tbody, [tr]);
      JAM.call(table.appendChild, table, [tbody]);
      var v512 = this.text_area;
      JAM.call(AJS.insertBefore, AJS, [table, v512]);
      JAM.call(AJS.setHeight, AJS, [table, spell_container, r_height]);
      JAM.call(AJS.setWidth, AJS, [table, spell_container, r_width]);
      var v513 = spell_container.style;
      v513.textAlign = "right";
    }
    this.checkSpellingState();
  } else {
    var v515 = this.report_ta_not_found;
    if (v515) {
      alert("Text area not found");
    }
  }
  return;
}
function v165(data$$21) {
  var req$$6 = this.req;
  var http_method = this.http_method;
  var http_url = this.http_url;
  var v522 = http_method == "POST";
  if (v522) {
    req$$6.open(http_method, http_url, true);
    var v517 = this._onreadystatechange;
    var v1379 = JAM.call(AJS.$b, AJS, [v517, this]);
    JAM.set(req$$6, "onreadystatechange", v1379);
    req$$6.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var v520 = JAM.call(AJS.isObject, AJS, [data$$21]);
    if (v520) {
      var v518 = JAM.call(AJS.encodeArguments, AJS, [data$$21]);
      req$$6.send(v518);
    } else {
      var v519 = JAM.call(AJS.isDefined, AJS, [data$$21]);
      if (v519) {
        req$$6.send(data$$21);
      } else {
        req$$6.send("");
      }
    }
  } else {
    req$$6.open("GET", http_url, true);
    var v521 = this._onreadystatechange;
    var v1380 = JAM.call(AJS.$b, AJS, [v521, this]);
    JAM.set(req$$6, "onreadystatechange", v1380);
    req$$6.send(null);
  }
  return;
}
function v164() {
  var req$$5 = this.req;
  var d$$2 = this;
  var v1012 = req$$5.readyState;
  var v524 = v1012 == 4;
  if (v524) {
    var status = "";
    try {
      status = req$$5.status;
    } catch (e$$16) {
    }
    var v1231 = status == 200;
    var v1318 = !v1231;
    if (v1318) {
      v1231 = status == 304;
    }
    var v1013 = v1231;
    var v1233 = !v1013;
    if (v1233) {
      var v1232 = req$$5.responseText;
      v1013 = v1232 == null;
    }
    var v523 = v1013;
    if (v523) {
      this.callback();
    } else {
      this.errback();
    }
  }
  return;
}
function v163(fn1, fn2) {
  JAM.call(this.addCallback, this, [fn1]);
  JAM.call(this.addErrback, this, [fn2]);
  return;
}
function v162() {
  var v525 = this.req;
  v525.abort();
  return;
}
function v161(fn$$15) {
  var v526 = this.callbacks;
  v526.unshift(fn$$15);
  return;
}
function v160(fn$$14) {
  var v527 = this.errbacks;
  v527.unshift(fn$$14);
  return;
}
function v159() {
  var v1234 = this.errbacks;
  var v1014 = v1234.length;
  var v533 = v1014 == 0;
  if (v533) {
    var v532 = AJS.ajaxErrorHandler;
    if (v532) {
      var v528 = req.responseText;
      JAM.call(AJS.ajaxErrorHandler, AJS, [v528, req]);
    } else {
      var v1015 = this.req;
      var v529 = v1015.responseText;
      var txt$$1 = v529.substring(0, 200);
      var v1016 = JAM.call(AJS.strip, AJS, [txt$$1]);
      if (v1016) {
        var v1235 = txt$$1.indexOf("<html");
        v1016 = v1235 == -1;
      }
      var v531 = v1016;
      if (v531) {
        var v530 = "Error encountered:\n" + txt$$1;
        alert(v530);
      }
    }
  }
  var v536 = AJS.generalErrorback;
  if (v536) {
    var v534 = this.req;
    var result$$1 = JAM.call(AJS.generalErrorback, AJS, [v534]);
    var v535 = !result$$1;
    if (v535) {
      return;
    }
  }
  var v537 = this.req;
  var v538 = this.errbacks;
  JAM.call(this.excCallbackSeq, this, [v537, v538]);
  return;
}
function v158() {
  var v539 = this.req;
  var v540 = this.callbacks;
  JAM.call(this.excCallbackSeq, this, [v539, v540]);
  return;
}
function v157(req$$4, list$$10) {
  var data$$20 = req$$4.responseText;
  var v542 = AJS.generalCallback;
  if (v542) {
    data$$20 = JAM.call(AJS.generalCallback, AJS, [req$$4, list$$10]);
    var v541 = !data$$20;
    if (v541) {
      return;
    }
  }
  var v1017 = list$$10.length;
  var v544 = v1017 > 0;
  for (;v544;) {
    var fn$$13 = list$$10.pop();
    var new_data = JAM.call(fn$$13, null, [data$$20, req$$4]);
    if (new_data) {
      data$$20 = new_data;
    } else {
      var v543 = new_data == false;
      if (v543) {
        break;
      }
    }
    var v1018 = list$$10.length;
    v544 = v1018 > 0;
  }
  return;
}
function v156(req$$3, method$$2, url$$4) {
  this.callbacks = [];
  this.errbacks = [];
  this.req = req$$3;
  this.http_method = method$$2;
  this.http_url = url$$4;
  return;
}
function v155(cur$$1, prev$$1) {
  function v154() {
    this.parent = prev$$1;
    return JAM.call(cur$$1.apply, cur$$1, [this, arguments]);
  }
  return v154;
}
function v153(members$$2) {
  var v545 = this.prototype;
  JAM.call(AJS.update, AJS, [v545, members$$2]);
  return;
}
function v152(members$$1) {
  var parent$$2 = JAM.new(this, ["no_init"]);
  for (k in members$$1) {
    introspect(JAM.policy.p1) {
      var prev = parent$$2[k]
    }
    introspect(JAM.policy.p1) {
      var cur = members$$1[k]
    }
    var v1236 = prev;
    if (v1236) {
      v1236 = prev != cur;
    }
    var v1019 = v1236;
    if (v1019) {
      var v1237 = typeof cur;
      v1019 = v1237 == "function";
    }
    var v546 = v1019;
    if (v546) {
      cur = JAM.call(this._parentize, this, [cur, prev]);
    }
    JAM.set(parent$$2, k, cur);
  }
  var v547 = AJS.Class;
  return JAM.new(v547, [parent$$2]);
}
function v151(members) {
  function fn$$12() {
    var v1020 = arguments[0];
    var v549 = v1020 != "no_init";
    if (v549) {
      var v548 = this.init;
      return JAM.call(v548.apply, v548, [this, arguments]);
    }
    return;
  }
  fn$$12.prototype = members;
  var v1021 = AJS.Class;
  var v550 = v1021.prototype;
  JAM.call(AJS.update, AJS, [fn$$12, v550]);
  return fn$$12;
}
function v150(str$$9, limit, delim$$1) {
  var v1022 = str$$9.length;
  var v553 = v1022 > limit;
  if (v553) {
    var v551 = str$$9.substring(0, limit);
    var v552 = delim$$1 || "...";
    return v551 + v552;
  }
  return str$$9;
}
function v149(str$$8) {
  var v554 = str$$8.replace(/^\s+/, "");
  return v554.replace(/\s+$/g, "");
}
function v148(export_scope, fn$$11) {
  JAM.call(fn$$11.apply, fn$$11, [export_scope, []]);
  return;
}
function v147(o$$7) {
  try {
    var v557 = window._firebug;
    if (v557) {
      var v555 = window._firebug;
      JAM.call(v555.log, v555, [o$$7]);
    } else {
      var v556 = window.console;
      if (v556) {
        JAM.call(console.log, console, [o$$7]);
      }
    }
  } catch (e$$15) {
  }
  return;
}
function v146(scope$$3) {
  scope$$3 = scope$$3 || window;
  for (e in AJS) {
    var v558 = e != "addEventListener";
    if (v558) {
      JAM.set(scope$$3, e, JAM.get(AJS, e, JAM.policy.p1));
    }
  }
  return;
}
function v145(o$$6) {
  var str_repr = String(o$$6);
  var v559 = str_repr.indexOf(" Object");
  return v559 != -1;
}
function v144(obj$$22) {
  var v560 = typeof obj$$22;
  return v560 == "function";
}
function v143(obj$$21) {
  var v561 = typeof obj$$21;
  return v561 == "object";
}
function v142(obj$$20) {
  var v562 = typeof obj$$20;
  return v562 == "number";
}
function v141(obj$$19) {
  var v563 = typeof obj$$19;
  return v563 == "string";
}
function v140(obj$$18) {
  try {
    return obj$$18 instanceof Array;
  } catch (e$$14) {
    return false;
  }
  return;
}
function v139(o$$5) {
  var v564 = o$$5 != "undefined";
  if (v564) {
    v564 = o$$5 != null;
  }
  return v564;
}
function v138(str$$7) {
  var v1238 = JAM.call(AJS.isDefined, AJS, [str$$7]);
  if (v1238) {
    v1238 = str$$7.toString();
  }
  var v1023 = v1238;
  var v1239 = !v1023;
  if (v1239) {
    v1023 = "";
  }
  var v565 = v1023;
  var result = decodeURIComponent(v565);
  return result.replace(/\+/g, " ");
}
function v137(str$$6) {
  var v1240 = JAM.call(AJS.isDefined, AJS, [str$$6]);
  if (v1240) {
    v1240 = str$$6.toString();
  }
  var v1024 = v1240;
  var v1241 = !v1024;
  if (v1241) {
    v1024 = "";
  }
  var v566 = v1024;
  return encodeURIComponent(v566);
}
function v136(obj$$17) {
  var rval$$1 = [];
  var prop$$6;
  for (prop$$6 in obj$$17) {
    introspect(JAM.policy.p1) {
      var v567 = obj$$17[prop$$6]
    }
    rval$$1.push(v567);
  }
  return rval$$1;
}
function v135(obj$$16) {
  var rval = [];
  var prop$$5;
  for (prop$$5 in obj$$16) {
    rval.push(prop$$5);
  }
  return rval;
}
function v134(name$$32, fn$$10, interval) {
  var v568 = AJS._reccruing_tos;
  introspect(JAM.policy.p1) {
    var current = v568[name$$32]
  }
  if (current) {
    clearTimeout(current);
  }
  var v569 = AJS._reccruing_tos;
  var v1381 = JAM.call(setTimeout, null, [fn$$10, interval]);
  v569[name$$32] = v1381;
  return;
}
function v133(fn$$9, extra_args$$1) {
  function v132() {
    try {
      var v570 = JAM.call(AJS.$FA, AJS, [arguments]);
      var args$$14 = v570.concat(extra_args$$1);
      return JAM.call(fn$$9.apply, fn$$9, [scope$$2, args$$14]);
    } catch (e$$13) {
    }
    return;
  }
  extra_args$$1 = JAM.call(AJS.$A, AJS, [extra_args$$1]);
  var v571 = fn$$9._cscope;
  var v1025 = !v571;
  if (v1025) {
    v571 = window;
  }
  var scope$$2 = v571;
  return v132;
}
function v131(elm$$38, type$$30, fn$$8) {
  function r_fn() {
    JAM.call(AJS.removeEventListener, AJS, [elm$$38, type$$30, r_fn]);
    JAM.call(fn$$8, null, [arguments]);
    return;
  }
  return r_fn;
}
function v130(e$$12) {
  var v573 = AJS.isIe();
  if (v573) {
    var v572 = window.event;
    v572.returnValue = false;
  } else {
    e$$12.preventDefault();
  }
  return;
}
function v129(self$$1) {
  var k$$2;
  for (k$$2 in self$$1) {
    introspect(JAM.policy.p1) {
      var func$$4 = self$$1[k$$2]
    }
    var v1026 = typeof func$$4;
    var v574 = v1026 == "function";
    if (v574) {
      var v1382 = JAM.call(AJS.$b, AJS, [func$$4, self$$1]);
      JAM.set(self$$1, k$$2, v1382);
    }
  }
  return;
}
function v128(fn$$7, scope$$1, extra_args) {
  fn$$7._cscope = scope$$1;
  return JAM.call(AJS._getRealScope, AJS, [fn$$7, extra_args]);
}
function v127(elms$$4, type$$29, handler$$7) {
  function v126(elm$$37) {
    var v1027 = elm$$37.events;
    if (v1027) {
      var v1242 = elm$$37.events;
      introspect(JAM.policy.p1) {
        v1027 = v1242[type$$29];
      }
    }
    var v577 = v1027;
    if (v577) {
      var v1028 = elm$$37.events;
      introspect(JAM.policy.p1) {
        var v575 = v1028[type$$29]
      }
      var v576 = handler$$7.$f_guid;
      delete v575[v576];
    }
    return;
  }
  elms$$4 = JAM.call(AJS.$A, AJS, [elms$$4]);
  map(elms$$4, v126);
  return;
}
function v125(event$$1) {
  function v124(handler$$6) {
    var v1029 = me$$1.events;
    var v1030 = event$$1.type;
    introspect(JAM.policy.p1) {
      var v578 = v1029[v1030]
    }
    var v579 = handler$$6.$f_guid;
    delete v578[v579];
    return;
  }
  var me$$1 = this;
  var v580 = event$$1;
  var v1031 = !v580;
  if (v1031) {
    v580 = window.event;
  }
  event$$1 = v580;
  var v581 = !event$$1;
  if (v581) {
    return;
  }
  var v1243 = event$$1.ctrl;
  var v1032 = !v1243;
  if (v1032) {
    var v1319 = event$$1.type;
    var v1244 = v1319.indexOf("key");
    v1032 = v1244 != -1;
  }
  var v582 = v1032;
  if (v582) {
    JAM.call(AJS.setEventKey, AJS, [event$$1]);
  }
  var v583 = this.events;
  var v584 = event$$1.type;
  introspect(JAM.policy.p1) {
    var handlers$$1 = v583[v584]
  }
  var handlers_to_delete = [];
  var res$$1 = true;
  var i$$17;
  for (i$$17 in handlers$$1) {
    introspect(JAM.policy.p1) {
      var handler$$5 = this.$$handleEvent = handlers$$1[i$$17]
    }
    var v1033 = AJS.handleEvent;
    var v585 = handler$$5 == v1033;
    if (v585) {
      continue;
    }
    res$$1 = JAM.call(handler$$5, null, [event$$1]);
    var v586 = handler$$5.listen_once;
    if (v586) {
      handlers_to_delete.push(handler$$5);
    }
  }
  var v1034 = handlers_to_delete.length;
  var v587 = v1034 > 0;
  if (v587) {
    JAM.call(AJS.map, AJS, [handlers_to_delete, v124]);
  }
  return res$$1;
}
function v123(elms$$3, types, handler$$4, listen_once$$1) {
  function v122(elm$$36) {
    function v121(type$$28) {
      var v588 = elm$$36.events;
      introspect(JAM.policy.p1) {
        var handlers = v588[type$$28]
      }
      var v1035 = elm$$36 == window;
      if (v1035) {
        v1035 = type$$28 == "load";
      }
      var v598 = v1035;
      if (v598) {
        var v589 = AJS.ready_list;
        v589.push(handler$$4);
      } else {
        var v590 = type$$28 == "lazy_load";
        if (v590) {
          type$$28 = "load";
        }
        var v594 = !handlers;
        if (v594) {
          var v591 = elm$$36.events;
          handlers = JAM.set(v591, type$$28, {});
          var v1036 = "on" + type$$28;
          introspect(JAM.policy.p1) {
            var v593 = elm$$36[v1036]
          }
          if (v593) {
            var v592 = "on" + type$$28;
            introspect(JAM.policy.p1) {
              handlers[0] = elm$$36[v592];
            }
          }
        }
        var v1037 = elm$$36._wipe_guid;
        var v595 = !v1037;
        if (v595) {
          elm$$36._wipe_guid = AJS._wipe_guid;
          var v1038 = AJS._wipe_guid;
          AJS._wipe_guid = v1038 + 1;
        }
        var v596 = handler$$4.$f_guid;
        JAM.set(handlers, v596, handler$$4);
        var v597 = AJS.handleEvent;
        elm$$36.addEventListener(type$$28, v597, false);
      }
      return;
    }
    if (listen_once$$1) {
      handler$$4.listen_once = true;
    }
    var v1039 = handler$$4.$f_guid;
    var v599 = !v1039;
    if (v599) {
      handler$$4.$f_guid = AJS._f_guid;
      var v1040 = AJS._f_guid;
      AJS._f_guid = v1040 + 1;
    }
    var v1041 = elm$$36.events;
    var v600 = !v1041;
    if (v600) {
      elm$$36.events = {};
    }
    JAM.call(AJS.map, AJS, [types, v121]);
    elm$$36 = null;
    return;
  }
  elms$$3 = JAM.call(AJS.$A, AJS, [elms$$3]);
  types = JAM.call(AJS.$A, AJS, [types]);
  JAM.call(AJS.map, AJS, [elms$$3, v122]);
  return;
}
function v120(fn$$5) {
  function v119(fn$$6) {
    JAM.call(fn$$6.call, fn$$6, [window]);
    return;
  }
  var v601 = AJS.is_ready;
  if (v601) {
    return;
  }
  AJS.is_ready = true;
  var v602 = AJS.ready_list;
  JAM.call(AJS.map, AJS, [v602, v119]);
  AJS.ready_list = [];
  return;
}
function v118() {
  function v117() {
    var v603 = AJS.is_ready;
    if (v603) {
      return;
    }
    try {
      var v604 = document.documentElement;
      JAM.call(v604.doScroll, v604, ["left"]);
    } catch (error$$1) {
      var v605 = arguments.callee;
      JAM.call(setTimeout, null, [v605, 0]);
      return;
    }
    AJS.ready();
    return;
  }
  function v116() {
    var v1042 = document.readyState;
    var v607 = v1042 === "complete";
    if (v607) {
      var v606 = arguments.callee;
      JAM.call(document.detachEvent, document, ["onreadystatechange", v606]);
      AJS.ready();
    }
    return;
  }
  function v115() {
    var v608 = arguments.callee;
    JAM.call(document.removeEventListener, document, ["DOMContentLoaded", v608, false]);
    AJS.ready();
    return;
  }
  var v609 = AJS.ready_bound;
  if (v609) {
    return;
  }
  AJS.ready_bound = true;
  var v612 = document.addEventListener;
  if (v612) {
    document.addEventListener("DOMContentLoaded", v115, false);
  } else {
    var v611 = document.attachEvent;
    if (v611) {
      JAM.call(document.attachEvent, document, ["onreadystatechange", v116]);
      var v1245 = document.documentElement;
      var v1043 = v1245.doScroll;
      if (v1043) {
        var v1246 = window.top;
        v1043 = window == v1246;
      }
      var v610 = v1043;
      if (v610) {
        v117();
      }
    }
  }
  var v613 = AJS.ready;
  JAM.call(AJS.AEV, AJS, [window, "load", v613]);
  return;
}
function v114(elms$$2, type$$27, handler$$3, listen_once) {
  function v113(elm$$35) {
    var v615 = elm$$35.events;
    if (v615) {
      var v614 = elm$$35.events;
      JAM.set(v614, type$$27, {});
    }
    return;
  }
  elms$$2 = JAM.call(AJS.$A, AJS, [elms$$2]);
  JAM.call(AJS.map, AJS, [elms$$2, v113]);
  return JAM.call(AJS.AEV, AJS, [elms$$2, type$$27, handler$$3, listen_once]);
}
function v112(e$$11) {
  var v616 = !e$$11;
  if (v616) {
    e$$11 = window.event;
  }
  var v617;
  var v1044 = e$$11.keyCode;
  if (v1044) {
    v617 = e$$11.keyCode;
  } else {
    v617 = e$$11.charCode;
  }
  e$$11.key = v617;
  e$$11.ctrl = e$$11.ctrlKey;
  e$$11.alt = e$$11.altKey;
  e$$11.meta = e$$11.metaKey;
  e$$11.shift = e$$11.shiftKey;
  return;
}
function v111(e$$10) {
  var v1247 = e$$10;
  if (v1247) {
    var v1320 = e$$10.type;
    v1247 = !v1320;
  }
  var v1045 = v1247;
  if (v1045) {
    var v1248 = e$$10.keyCode;
    v1045 = !v1248;
  }
  var v618 = v1045;
  if (v618) {
    return e$$10;
  }
  var targ;
  var v619 = !e$$10;
  if (v619) {
    e$$10 = window.event;
  }
  var v621 = e$$10.target;
  if (v621) {
    targ = e$$10.target;
  } else {
    var v620 = e$$10.srcElement;
    if (v620) {
      targ = e$$10.srcElement;
    }
  }
  var v1046 = targ;
  if (v1046) {
    var v1249 = targ.nodeType;
    v1046 = v1249 == 3;
  }
  var v622 = v1046;
  if (v622) {
    targ = targ.parentNode;
  }
  return targ;
}
function v110(elm1, elm2) {
  function getSign(v$$1) {
    var v624 = v$$1 > 0;
    if (v624) {
      return "+";
    } else {
      var v623 = v$$1 < 0;
      if (v623) {
        return "-";
      } else {
        return 0;
      }
    }
    return;
  }
  var pos_elm1 = JAM.call(AJS.absolutePosition, AJS, [elm1]);
  var pos_elm2 = JAM.call(AJS.absolutePosition, AJS, [elm2]);
  var top1 = pos_elm1.y;
  var left1 = pos_elm1.x;
  var v625 = elm1.offsetWidth;
  var right1 = left1 + v625;
  var v626 = elm1.offsetHeight;
  var bottom1 = top1 + v626;
  var top2 = pos_elm2.y;
  var left2 = pos_elm2.x;
  var v627 = elm2.offsetWidth;
  var right2 = left2 + v627;
  var v628 = elm2.offsetHeight;
  var bottom2 = top2 + v628;
  var v1321 = top1 - bottom2;
  var v1250 = getSign(v1321);
  var v1322 = bottom1 - top2;
  var v1251 = getSign(v1322);
  var v1047 = v1250 != v1251;
  if (v1047) {
    var v1323 = left1 - right2;
    var v1252 = getSign(v1323);
    var v1324 = right1 - left2;
    var v1253 = getSign(v1324);
    v1047 = v1252 != v1253;
  }
  var v629 = v1047;
  if (v629) {
    return true;
  }
  return false;
}
function v109(doc) {
  doc = doc || document;
  var win_w;
  var win_h;
  var v636 = self.innerHeight;
  if (v636) {
    win_w = self.innerWidth;
    win_h = self.innerHeight;
  } else {
    var v1048 = doc.documentElement;
    if (v1048) {
      var v1254 = doc.documentElement;
      v1048 = v1254.clientHeight;
    }
    var v635 = v1048;
    if (v635) {
      var v630 = doc.documentElement;
      win_w = v630.clientWidth;
      var v631 = doc.documentElement;
      win_h = v631.clientHeight;
    } else {
      var v634 = doc.body;
      if (v634) {
        var v632 = doc.body;
        win_w = v632.clientWidth;
        var v633 = doc.body;
        win_h = v633.clientHeight;
      }
    }
  }
  return{"w":win_w, "h":win_h};
}
function v108(elm$$34) {
  var v637 = !elm$$34;
  if (v637) {
    return{x:0, y:0};
  }
  var v643 = elm$$34.scrollLeft;
  if (v643) {
    var v638 = elm$$34.scrollLeft;
    var v639 = elm$$34.scrollTop;
    return{x:v638, y:v639};
  } else {
    var v642 = elm$$34.clientX;
    if (v642) {
      var v640 = elm$$34.clientX;
      var v641 = elm$$34.clientY;
      return{x:v640, y:v641};
    }
  }
  var v644 = elm$$34.offsetLeft;
  var v645 = elm$$34.offsetTop;
  var posObj = {"x":v644, "y":v645};
  var v646 = elm$$34.offsetParent;
  if (v646) {
    var next = elm$$34.offsetParent;
    for (;next;) {
      var v1049 = posObj.x;
      var v1050 = next.offsetLeft;
      posObj.x = v1049 + v1050;
      var v1051 = posObj.y;
      var v1052 = next.offsetTop;
      posObj.y = v1051 + v1052;
      next = next.offsetParent;
    }
  }
  var v1053 = AJS.isSafari();
  if (v1053) {
    var v1325 = elm$$34.style;
    var v1255 = v1325.position;
    v1053 = v1255 == "absolute";
  }
  var v647 = v1053;
  if (v647) {
    var v1054 = posObj.x;
    var v1256 = document.body;
    var v1055 = v1256.offsetLeft;
    posObj.x = v1054 - v1055;
    var v1056 = posObj.y;
    var v1257 = document.body;
    var v1057 = v1257.offsetTop;
    posObj.y = v1056 - v1057;
  }
  return posObj;
}
function v107() {
  var t;
  var v1058 = document.documentElement;
  if (v1058) {
    var v1258 = document.documentElement;
    v1058 = v1258.scrollTop;
  }
  var v651 = v1058;
  if (v651) {
    var v648 = document.documentElement;
    t = v648.scrollTop;
  } else {
    var v650 = document.body;
    if (v650) {
      var v649 = document.body;
      t = v649.scrollTop;
    }
  }
  return t;
}
function v106(e$$9) {
  var posx = 0;
  var posy = 0;
  var v652 = !e$$9;
  if (v652) {
    e$$9 = window.event;
  }
  var v1059 = e$$9.pageX;
  var v1259 = !v1059;
  if (v1259) {
    v1059 = e$$9.pageY;
  }
  var v658 = v1059;
  if (v658) {
    posx = e$$9.pageX;
    posy = e$$9.pageY;
  } else {
    var v1060 = e$$9.clientX;
    var v1260 = !v1060;
    if (v1260) {
      v1060 = e$$9.clientY;
    }
    var v657 = v1060;
    if (v657) {
      var v1061 = e$$9.clientX;
      var v1261 = document.body;
      var v1062 = v1261.scrollLeft;
      var v653 = v1061 + v1062;
      var v1063 = document.documentElement;
      var v654 = v1063.scrollLeft;
      posx = v653 + v654;
      var v1064 = e$$9.clientY;
      var v1262 = document.body;
      var v1065 = v1262.scrollTop;
      var v655 = v1064 + v1065;
      var v1066 = document.documentElement;
      var v656 = v1066.scrollTop;
      posy = v655 + v656;
    }
  }
  return{x:posx, y:posy};
}
function v105(date$$1) {
  function leadingZero(nr) {
    var v659 = nr < 10;
    if (v659) {
      nr = "0" + nr;
    }
    return nr;
  }
  var year$$1 = date$$1.getUTCFullYear();
  var dd = date$$1.getUTCDate();
  var v660 = date$$1.getUTCMonth();
  var mm = v660 + 1;
  var v1361 = '"' + year$$1;
  var v1360 = v1361 + "-";
  var v1359 = v1360 + mm;
  var v1358 = v1359 + "-";
  var v1355 = v1358 + dd;
  var v1351 = v1355 + "T";
  var v1356 = date$$1.getUTCHours();
  var v1352 = leadingZero(v1356);
  var v1342 = v1351 + v1352;
  var v1326 = v1342 + ":";
  var v1343 = date$$1.getUTCMinutes();
  var v1327 = leadingZero(v1343);
  var v1263 = v1326 + v1327;
  var v1067 = v1263 + ":";
  var v1264 = date$$1.getUTCSeconds();
  var v1068 = leadingZero(v1264);
  var v661 = v1067 + v1068;
  return v661 + '"';
}
function v104(o$$4) {
  var v1357 = o$$4.replace(/(["\\])/g, "\\$1");
  var v1353 = '"' + v1357;
  var v1344 = v1353 + '"';
  var v1328 = v1344.replace(/[\f]/g, "\\f");
  var v1265 = v1328.replace(/[\b]/g, "\\b");
  var v1069 = v1265.replace(/[\n]/g, "\\n");
  var v662 = v1069.replace(/[\t]/g, "\\t");
  return v662.replace(/[\r]/g, "\\r");
}
function v103(data$$19) {
  var post_data = [];
  for (k in data$$19) {
    var v1070 = k + "=";
    introspect(JAM.policy.p1) {
      var v1266 = data$$19[k]
    }
    var v1071 = JAM.call(AJS.urlencode, AJS, [v1266]);
    var v663 = v1070 + v1071;
    post_data.push(v663);
  }
  return JAM.call(post_data.join, post_data, ["&"]);
}
function v102(html$$2) {
  var script_data = html$$2.match(/<script.*?>((\n|\r|.)*?)<\/script>/g);
  var v666 = script_data != null;
  if (v666) {
    var i$$16 = 0;
    var v1072 = script_data.length;
    var v665 = i$$16 < v1072;
    for (;v665;) {
      introspect(JAM.policy.p1) {
        var v664 = script_data[i$$16]
      }
      var script_only = v664.replace(/<script.*?>/g, "");
      script_only = script_only.replace(/<\/script>/g, "");
      if (JAM.isEval(eval)) {
        eval("introspect(JAM.policy.pFull) { " + script_only + " }");
      } else {
        JAM.call(eval, null, [script_only]);
      }
      i$$16++;
      var v1073 = script_data.length;
      v665 = i$$16 < v1073;
    }
  }
  return;
}
function v101(txt) {
  try {
    var v1074 = "(" + txt;
    var v667 = v1074 + ")";
    if (JAM.isEval(eval)) {
      return eval("introspect(JAM.policy.pFull) { " + v667 + " }");
    } else {
      return JAM.call(eval, null, [v667]);
    }
  } catch (e$$8) {
    if (JAM.isEval(eval)) {
      return eval("introspect(JAM.policy.pFull) { " + txt + " }");
    } else {
      return JAM.call(eval, null, [txt]);
    }
  }
  return;
}
function v100(url$$3, type$$26, debug) {
  function eval_req(data$$18, req$$2) {
    var text$$8 = req$$2.responseText;
    var v668 = text$$8 == "Error";
    if (v668) {
      JAM.call(d$$1.errback, d$$1, [req$$2]);
    } else {
      return JAM.call(AJS.evalTxt, AJS, [text$$8]);
    }
    return;
  }
  var d$$1 = JAM.call(AJS.getRequest, AJS, [url$$3, type$$26]);
  JAM.call(d$$1.addCallback, d$$1, [eval_req]);
  return d$$1;
}
function v99(o$$3) {
  var objtype = typeof o$$3;
  var v671 = objtype == "undefined";
  if (v671) {
    return "null";
  } else {
    var v1075 = objtype == "number";
    var v1267 = !v1075;
    if (v1267) {
      v1075 = objtype == "boolean";
    }
    var v670 = v1075;
    if (v670) {
      return o$$3 + "";
    } else {
      var v669 = o$$3 === null;
      if (v669) {
        return "null";
      }
    }
  }
  var v672 = objtype == "string";
  if (v672) {
    return JAM.call(AJS._reprString, AJS, [o$$3]);
  }
  var v1076 = objtype == "object";
  if (v1076) {
    v1076 = o$$3.getFullYear;
  }
  var v673 = v1076;
  if (v673) {
    return JAM.call(AJS._reprDate, AJS, [o$$3]);
  }
  var me = arguments.callee;
  var v1077 = objtype != "function";
  if (v1077) {
    var v1329 = o$$3.length;
    var v1268 = typeof v1329;
    v1077 = v1268 == "number";
  }
  var v678 = v1077;
  if (v678) {
    var res = [];
    var i$$15 = 0;
    var v1078 = o$$3.length;
    var v676 = i$$15 < v1078;
    for (;v676;) {
      introspect(JAM.policy.p1) {
        var v674 = o$$3[i$$15]
      }
      var val$$3 = JAM.call(me, null, [v674]);
      var v1079 = typeof val$$3;
      var v675 = v1079 != "string";
      if (v675) {
        val$$3 = "undefined";
      }
      res.push(val$$3);
      i$$15++;
      var v1080 = o$$3.length;
      v676 = i$$15 < v1080;
    }
    var v1081 = JAM.call(res.join, res, [","]);
    var v677 = "[" + v1081;
    return v677 + "]";
  }
  var v679 = objtype == "function";
  if (v679) {
    return null;
  }
  res = [];
  var k$$1;
  for (k$$1 in o$$3) {
    var useKey;
    var v1082 = typeof k$$1;
    var v682 = v1082 == "number";
    if (v682) {
      var v680 = '"' + k$$1;
      useKey = v680 + '"';
    } else {
      var v1083 = typeof k$$1;
      var v681 = v1083 == "string";
      if (v681) {
        useKey = JAM.call(AJS._reprString, AJS, [k$$1]);
      } else {
        continue;
      }
    }
    introspect(JAM.policy.p1) {
      var v683 = o$$3[k$$1]
    }
    val$$3 = JAM.call(me, null, [v683]);
    var v1084 = typeof val$$3;
    var v684 = v1084 != "string";
    if (v684) {
      continue;
    }
    var v1085 = useKey + ":";
    var v685 = v1085 + val$$3;
    res.push(v685);
  }
  var v1086 = JAM.call(res.join, res, [","]);
  var v686 = "{" + v1086;
  return v686 + "}";
}
function v98(url$$2, method$$1) {
  var req$$1 = AJS.getXMLHttpRequest();
  var v1087 = url$$2.match(/^https?:\/\//);
  var v690 = v1087 == null;
  if (v690) {
    var v1088 = AJS.BASE_URL;
    var v689 = v1088 != "";
    if (v689) {
      var v1269 = AJS.BASE_URL;
      var v1089 = v1269.lastIndexOf("/");
      var v1330 = AJS.BASE_URL;
      var v1270 = v1330.length;
      var v1090 = v1270 - 1;
      var v687 = v1089 != v1090;
      if (v687) {
        var v1091 = AJS.BASE_URL;
        AJS.BASE_URL = v1091 + "/";
      }
      var v688 = AJS.BASE_URL;
      url$$2 = v688 + url$$2;
    }
  }
  var v691 = !method$$1;
  if (v691) {
    method$$1 = "POST";
  }
  return JAM.new(AJSDeferred, [req$$1, method$$1, url$$2]);
}
function v97() {
  function v96() {
    throw "Browser does not support XMLHttpRequest";
  }
  function v95() {
    return new ActiveXObject("Msxml2.XMLHTTP.4.0");
  }
  function v94() {
    return new ActiveXObject("Microsoft.XMLHTTP");
  }
  function v93() {
    return new ActiveXObject("Msxml2.XMLHTTP");
  }
  function v92() {
    return new XMLHttpRequest;
  }
  var try_these = [v92, v93, v94, v95, v96];
  var i$$14 = 0;
  var v1092 = try_these.length;
  var v692 = i$$14 < v1092;
  for (;v692;) {
    introspect(JAM.policy.p1) {
      var func$$3 = try_these[i$$14]
    }
    try {
      return func$$3();
    } catch (e$$7) {
      JAM.call(AJS.log, AJS, [e$$7]);
    }
    i$$14++;
    var v1093 = try_these.length;
    v692 = i$$14 < v1093;
  }
  return;
}
function v91(tmpl, ns, scope) {
  function fn$$4(w$$5, g) {
    g = g.split("|");
    var v693 = g[0];
    introspect(JAM.policy.p1) {
      var cnt = ns[v693]
    }
    var i$$13 = 1;
    var v1094 = g.length;
    var v695 = i$$13 < v1094;
    for (;v695;) {
      introspect(JAM.policy.p1) {
        var v694 = g[i$$13]
      }
      cnt = JAM.call(JAM.get(scope, v694, JAM.policy.p1), scope, [cnt]);
      i$$13++;
      var v1095 = g.length;
      v695 = i$$13 < v1095;
    }
    var v696 = cnt == "";
    if (v696) {
      return "";
    }
    var v1096 = cnt == 0;
    var v1271 = !v1096;
    if (v1271) {
      v1096 = cnt == -1;
    }
    var v697 = v1096;
    if (v697) {
      cnt = cnt + "";
    }
    return cnt || w$$5;
  }
  scope = scope || window;
  return tmpl.replace(/%\(([A-Za-z0-9_|.]*)\)/g, fn$$4);
}
function v90() {
  function v89(args$$13) {
    function v88(src$$2) {
      var pic = new Image;
      pic.src = src$$2;
      return;
    }
    JAM.call(AJS.map, AJS, [args$$13, v88]);
    return;
  }
  var v698 = JAM.call(AJS.$p, AJS, [v89, arguments]);
  JAM.call(AJS.AEV, AJS, [window, "load", v698]);
  return;
}
function v87(html$$1, first_child$$1) {
  var d = AJS.DIV();
  JAM.set(d, "innerHTML", html$$1);
  if (first_child$$1) {
    var v699 = d.childNodes;
    return v699[0];
  } else {
    return d;
  }
  return;
}
function v86(elm$$33, p$$4) {
  var v704 = p$$4 == 1;
  if (v704) {
    var v700 = elm$$33.style;
    v700.opacity = 1;
    var v701 = elm$$33.style;
    v701.filter = "";
  } else {
    var v702 = elm$$33.style;
    v702.opacity = p$$4;
    var v703 = elm$$33.style;
    var v1272 = p$$4 * 100;
    var v1097 = "alpha(opacity=" + v1272;
    v703.filter = v1097 + ")";
  }
  return;
}
function v85() {
  function v84(elm$$32) {
    var v705 = elm$$32.className;
    var v1098 = "(^|\\s)" + cls$$2;
    var v706 = new RegExp(v1098, "g");
    var v1383 = v705.replace(v706, "");
    elm$$32.className = v1383;
    return;
  }
  var args$$12 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var cls$$2 = args$$12.pop();
  JAM.call(AJS.map, AJS, [args$$12, v84]);
  return;
}
function v83(elm$$31, cls$$1) {
  var v1099 = !elm$$31;
  var v1274 = !v1099;
  if (v1274) {
    var v1273 = elm$$31.className;
    v1099 = !v1273;
  }
  var v707 = v1099;
  if (v707) {
    return false;
  }
  var e_cls = elm$$31.className;
  var v1100 = e_cls.length;
  var v708 = v1100 > 0;
  if (v708) {
    var v1101 = e_cls == cls$$1;
    var v1276 = !v1101;
    if (v1276) {
      var v1345 = "(^|\\s)" + cls$$1;
      var v1331 = v1345 + "(\\s|$)";
      var v1275 = new RegExp(v1331);
      v1101 = v1275.test(e_cls);
    }
    v708 = v1101;
  }
  return v708;
}
function v82() {
  function v81(elm$$30) {
    var o$$inline_0 = elm$$30;
    var v1346 = "(^|\\s)" + cls;
    var v1332 = v1346 + "(\\s|$)";
    var v1277 = new RegExp(v1332);
    var v1278 = o$$inline_0.className;
    var v1102 = v1277.test(v1278);
    var v709 = !v1102;
    if (v709) {
      var v1103 = o$$inline_0.className;
      var v1333;
      var v1347 = o$$inline_0.className;
      if (v1347) {
        v1333 = " ";
      } else {
        v1333 = "";
      }
      var v1279 = v1333;
      var v1104 = v1279 + cls;
      o$$inline_0.className = v1103 + v1104;
    }
    return;
  }
  var args$$11 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var cls = args$$11.pop();
  JAM.call(AJS.map, AJS, [args$$11, v81]);
  return;
}
function v80() {
  function v79(elm$$29) {
    elm$$29.className = c;
    return;
  }
  var args$$10 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var c = args$$10.pop();
  JAM.call(AJS.map, AJS, [args$$10, v79]);
  return;
}
function v78() {
  return JAM.call(AJS.__cssDim, AJS, [arguments, "top"]);
}
function v77() {
  return JAM.call(AJS.__cssDim, AJS, [arguments, "right"]);
}
function v76() {
  return JAM.call(AJS.__cssDim, AJS, [arguments, "left"]);
}
function v75() {
  return JAM.call(AJS.__cssDim, AJS, [arguments, "height"]);
}
function v74() {
  return JAM.call(AJS.__cssDim, AJS, [arguments, "width"]);
}
function v73(args$$9, property$$1) {
  args$$9 = JAM.call(AJS.$FA, AJS, [args$$9]);
  var v1105 = args$$9.length;
  var v710 = v1105 - 1;
  args$$9.splice(v710, 0, property$$1);
  var v711 = AJS.setStyle;
  JAM.call(v711.apply, v711, [null, args$$9]);
  return;
}
function v72() {
  function v71(elm$$28) {
    var v713 = JAM.call(AJS.isIn, AJS, [property, num_styles]);
    if (v713) {
      var v1106 = JAM.call(AJS.isString, AJS, [value$$27]);
      if (v1106) {
        v1106 = value$$27;
      }
      var v712 = v1106;
      var v1107 = !v712;
      if (v1107) {
        v712 = value$$27 + "px";
      }
      value$$27 = v712;
    }
    var v714 = elm$$28.style;
    JAM.set(v714, property, value$$27);
    return;
  }
  function v70(elm$$27) {
    function v69(prop$$4) {
      introspect(JAM.policy.p1) {
        var css_dim = value$$27[prop$$4]
      }
      var v716 = JAM.call(AJS.isIn, AJS, [prop$$4, num_styles]);
      if (v716) {
        var v1108 = JAM.call(AJS.isString, AJS, [css_dim]);
        if (v1108) {
          v1108 = css_dim;
        }
        var v715 = v1108;
        var v1109 = !v715;
        if (v1109) {
          v715 = css_dim + "px";
        }
        css_dim = v715;
      }
      var v717 = elm$$27.style;
      JAM.set(v717, prop$$4, css_dim);
      return;
    }
    var v718 = JAM.call(AJS.keys, AJS, [value$$27]);
    JAM.call(AJS.map, AJS, [v718, v69]);
    return;
  }
  var args$$8 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var value$$27 = args$$8.pop();
  var num_styles = ["top", "left", "right", "width", "height"];
  var v719 = JAM.call(AJS.isObject, AJS, [value$$27]);
  if (v719) {
    JAM.call(AJS.map, AJS, [args$$8, v70]);
  } else {
    var property = args$$8.pop();
    JAM.call(AJS.map, AJS, [args$$8, v71]);
  }
  return;
}
function v68(elm$$26) {
  var v720 = JAM.call(AJS.isElementHidden, AJS, [elm$$26]);
  return!v720;
}
function v67(elm$$25) {
  var v1280 = elm$$25.style;
  var v1110 = v1280.display;
  var v721 = v1110 == "none";
  var v1112 = !v721;
  if (v1112) {
    var v1281 = elm$$25.style;
    var v1111 = v1281.visibility;
    v721 = v1111 == "hidden";
  }
  return v721;
}
function v66(elm$$24) {
  var v722 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  JAM.call(AJS.setStyle, AJS, [v722, "display", "none"]);
  return;
}
function v65() {
  var v723 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  JAM.call(AJS.setStyle, AJS, [v723, "display", ""]);
  return;
}
function v64() {
  var args$$7 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var v1113 = args$$7.pop();
  if (v1113) {
    v1113 = "visible";
  }
  var v724 = v1113;
  var v1114 = !v724;
  if (v1114) {
    v724 = "hidden";
  }
  var val$$2 = v724;
  JAM.call(AJS.setStyle, AJS, [args$$7, "visibility", val$$2]);
  return;
}
function v63() {
  function v62(elm$$23) {
    if (elm$$23) {
      JAM.set(elm$$23, "innerHTML", html);
    }
    return;
  }
  var args$$6 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var html = args$$6.pop();
  JAM.call(AJS.map, AJS, [args$$6, v62]);
  return args$$6[0];
}
function v61() {
  function v60(text$$7) {
    return document.createTextNode(text$$7);
  }
  function extends_ajs(elm$$22) {
    function v59() {
      var v725 = AJS.createDOM;
      var v726 = [elm$$22, arguments];
      return JAM.call(v725.apply, v725, [null, v726]);
    }
    var v727 = elm$$22.toUpperCase();
    JAM.set(AJS, v727, v59);
    return;
  }
  var elms$$1 = ["ul", "li", "td", "tr", "th", "tbody", "table", "input", "span", "b", "a", "div", "img", "button", "h1", "h2", "h3", "h4", "h5", "h6", "br", "textarea", "form", "p", "select", "option", "optgroup", "iframe", "script", "center", "dl", "dt", "dd", "small", "pre", "i", "label", "thead"];
  JAM.call(AJS.map, AJS, [elms$$1, extends_ajs]);
  AJS.TN = v60;
  return;
}
function v58(name$$31, attrs) {
  var i$$12 = 0;
  var attr;
  var elm$$21 = document.createElement(name$$31);
  var first_attr = attrs[0];
  introspect(JAM.policy.p1) {
    var v1115 = attrs[i$$12]
  }
  var v731 = JAM.call(AJS.isDict, AJS, [v1115]);
  if (v731) {
    for (k in first_attr) {
      introspect(JAM.policy.p1) {
        attr = first_attr[k];
      }
      var v1116 = k == "style";
      var v1282 = !v1116;
      if (v1282) {
        v1116 = k == "s";
      }
      var v730 = v1116;
      if (v730) {
        var v728 = elm$$21.style;
        v728.cssText = attr;
      } else {
        var v1283 = k == "c";
        var v1334 = !v1283;
        if (v1334) {
          v1283 = k == "class";
        }
        var v1117 = v1283;
        var v1284 = !v1117;
        if (v1284) {
          v1117 = k == "className";
        }
        var v729 = v1117;
        if (v729) {
          elm$$21.className = attr;
        } else {
          JAM.call(elm$$21.setAttribute, elm$$21, [k, attr]);
        }
      }
    }
    i$$12++;
  }
  var v732 = first_attr == null;
  if (v732) {
    i$$12 = 1;
  }
  var j$$1 = i$$12;
  var v1118 = attrs.length;
  var v734 = j$$1 < v1118;
  for (;v734;) {
    introspect(JAM.policy.p1) {
      attr = attrs[j$$1];
    }
    if (attr) {
      var type$$25 = typeof attr;
      var v1119 = type$$25 == "string";
      var v1285 = !v1119;
      if (v1285) {
        v1119 = type$$25 == "number";
      }
      var v733 = v1119;
      if (v733) {
        attr = JAM.call(AJS.TN, AJS, [attr]);
      }
      JAM.call(elm$$21.appendChild, elm$$21, [attr]);
    }
    j$$1++;
    var v1120 = attrs.length;
    v734 = j$$1 < v1120;
  }
  return elm$$21;
}
function v57() {
  function v56(elm$$20) {
    var v735 = $(elm$$20);
    if (v735) {
      JAM.call(AJS.swapDOM, AJS, [elm$$20, null]);
    }
    return;
  }
  var args$$5 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  try {
    JAM.call(AJS.map, AJS, [args$$5, v56]);
  } catch (e$$6) {
  }
  return;
}
function v55(dest, src$$1) {
  dest = JAM.call(AJS.getElement, AJS, [dest]);
  var parent$$1 = dest.parentNode;
  if (src$$1) {
    src$$1 = JAM.call(AJS.getElement, AJS, [src$$1]);
    JAM.call(parent$$1.replaceChild, parent$$1, [src$$1, dest]);
  } else {
    parent$$1.removeChild(dest);
  }
  return src$$1;
}
function v54(elm$$19, reference_elm$$1) {
  var v736 = reference_elm$$1.parentNode;
  JAM.call(v736.insertBefore, v736, [elm$$19, reference_elm$$1]);
  return elm$$19;
}
function v53(elm$$18, reference_elm) {
  var v737 = reference_elm.parentNode;
  var v738 = reference_elm.nextSibling;
  JAM.call(v737.insertBefore, v737, [elm$$18, v738]);
  return elm$$18;
}
function v52(elm$$17) {
  var child$$1;
  var v739 = child$$1 = elm$$17.firstChild;
  for (;v739;) {
    JAM.call(AJS.swapDOM, AJS, [child$$1, null]);
    v739 = child$$1 = elm$$17.firstChild;
  }
  var v1121 = arguments.length;
  var v741 = v1121 < 2;
  if (v741) {
    return elm$$17;
  } else {
    var v740 = AJS.appendChildNodes;
    return JAM.call(v740.apply, v740, [null, arguments]);
  }
  return;
}
function v51(elm$$16) {
  var v742 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var args$$4 = v742.slice(1);
  var v1122 = args$$4.length;
  var v744 = v1122 >= 1;
  if (v744) {
    var first_child = elm$$16.firstChild;
    if (first_child) {
      for (;true;) {
        var t_elm = args$$4.shift();
        if (t_elm) {
          JAM.call(AJS.insertBefore, AJS, [t_elm, first_child]);
        } else {
          break;
        }
      }
    } else {
      var v743 = AJS.ACN;
      JAM.call(v743.apply, v743, [null, arguments]);
    }
  }
  return elm$$16;
}
function v50(elm$$15) {
  function v49(n$$1) {
    var v745 = JAM.call(AJS.isString, AJS, [n$$1]);
    if (v745) {
      n$$1 = JAM.call(AJS.TN, AJS, [n$$1]);
    }
    var v746 = JAM.call(AJS.isDefined, AJS, [n$$1]);
    if (v746) {
      JAM.call(elm$$15.appendChild, elm$$15, [n$$1]);
    }
    return;
  }
  var v1123 = arguments.length;
  var v747 = v1123 >= 2;
  if (v747) {
    JAM.call(AJS.map, AJS, [arguments, v49, 1]);
  }
  return elm$$15;
}
function v48(elm$$14) {
  var v1124 = typeof elm$$14;
  var v748 = v1124 == "string";
  if (v748) {
    elm$$14 = JAM.call(AJS.HTML2DOM, AJS, [elm$$14]);
  }
  JAM.call(JAM.get(document, "write", JAM.policy.p1), document, ['<span id="dummy_holder"></span>']);
  var v749 = JAM.call(AJS.$, AJS, ["dummy_holder"]);
  JAM.call(AJS.swapDOM, AJS, [v749, elm$$14]);
  return;
}
function v47(select) {
  select = JAM.call(AJS.$, AJS, [select]);
  var v1125 = select.options;
  var v1126 = select.selectedIndex;
  introspect(JAM.policy.p1) {
    var v750 = v1125[v1126]
  }
  return v750.value;
}
function v46(form, name$$30) {
  function v45(elm$$13) {
    var v1127 = elm$$13.name;
    if (v1127) {
      var v1286 = elm$$13.name;
      v1127 = v1286 == name$$30;
    }
    var v751 = v1127;
    if (v751) {
      r$$5 = elm$$13;
    }
    return;
  }
  function v44(elm$$12) {
    var v1128 = elm$$12.name;
    if (v1128) {
      var v1287 = elm$$12.name;
      v1128 = v1287 == name$$30;
    }
    var v752 = v1128;
    if (v752) {
      r$$5 = elm$$12;
    }
    return;
  }
  form = JAM.call(AJS.$, AJS, [form]);
  var r$$5 = null;
  var v753 = form.elements;
  JAM.call(AJS.map, AJS, [v753, v44]);
  if (r$$5) {
    return r$$5;
  }
  var v754 = JAM.call(AJS.$bytc, AJS, ["select", null, form]);
  JAM.call(AJS.map, AJS, [v754, v45]);
  return r$$5;
}
function v43() {
  var v755 = JAM.call(AJS.$bytc, AJS, ["body"]);
  return v755[0];
}
function v42(elm$$11, tag_name$$5, class_name$$5) {
  function v41(m$$2) {
    return m$$2.nextSibling;
  }
  return JAM.call(AJS._nodeWalk, AJS, [elm$$11, tag_name$$5, class_name$$5, v41]);
}
function v40(elm$$10, tag_name$$4, class_name$$4) {
  function v39(m$$1) {
    return m$$1.previousSibling;
  }
  return JAM.call(AJS._nodeWalk, AJS, [elm$$10, tag_name$$4, class_name$$4, v39]);
}
function v38(elm$$9, parent_to_consider, max_look_up) {
  var v756 = elm$$9 == parent_to_consider;
  if (v756) {
    return true;
  }
  var v757 = max_look_up == 0;
  if (v757) {
    return false;
  }
  var v758 = elm$$9.parentNode;
  var v759 = max_look_up - 1;
  return JAM.call(AJS.hasParent, AJS, [v758, parent_to_consider, v759]);
}
function v37(elm$$8, tag_name$$3, class_name$$3) {
  var elms = JAM.call(AJS.$bytc, AJS, [tag_name$$3, class_name$$3, elm$$8]);
  var v1129 = elms.length;
  var v760 = v1129 > 0;
  if (v760) {
    return elms[0];
  } else {
    return null;
  }
  return;
}
function v36(elm$$7, tag_name$$2, class_name$$2) {
  function v35(m) {
    if (m) {
      return m.parentNode;
    }
    return;
  }
  return JAM.call(AJS._nodeWalk, AJS, [elm$$7, tag_name$$2, class_name$$2, v35]);
}
function v34(elm$$6, tag_name$$1, class_name$$1, fn_next_elm) {
  function v33(p$$3) {
    return JAM.call(AJS.hasClass, AJS, [p$$3, class_name$$1]);
  }
  function v32(p$$2) {
    var v761 = JAM.call(AJS.nodeName, AJS, [p$$2]);
    return v761 == tag_name$$1;
  }
  function v31(p$$1) {
    var v1130 = JAM.call(AJS.nodeName, AJS, [p$$1]);
    var v762 = v1130 == tag_name$$1;
    if (v762) {
      v762 = JAM.call(AJS.hasClass, AJS, [p$$1, class_name$$1]);
    }
    return v762;
  }
  var p = JAM.call(fn_next_elm, null, [elm$$6]);
  var checkFn;
  var v763 = tag_name$$1 && class_name$$1;
  if (v763) {
    checkFn = v31;
  } else {
    if (tag_name$$1) {
      checkFn = v32;
    } else {
      checkFn = v33;
    }
  }
  var v764 = JAM.call(checkFn, null, [elm$$6]);
  if (v764) {
    return elm$$6;
  }
  for (;p;) {
    var v765 = JAM.call(checkFn, null, [p]);
    if (v765) {
      return p;
    }
    p = JAM.call(fn_next_elm, null, [p]);
  }
  return null;
}
function v30(elm$$5) {
  var v766 = elm$$5.nodeName;
  return v766.toLowerCase();
}
function v29(tag_name, class_name, parent, first_match) {
  var class_elements = [];
  var v1131 = JAM.call(AJS.isDefined, AJS, [parent]);
  var v767 = !v1131;
  if (v767) {
    parent = document;
  }
  var v1132 = JAM.call(AJS.isDefined, AJS, [tag_name]);
  var v768 = !v1132;
  if (v768) {
    tag_name = "*";
  }
  var i$$11;
  var j;
  var v1133 = class_name;
  if (v1133) {
    v1133 = document.getElementsByClassName;
  }
  var v778 = v1133;
  if (v778) {
    var els = parent.getElementsByClassName(class_name);
    var v772 = tag_name == "*";
    if (v772) {
      class_elements = JAM.call(AJS.forceArray, AJS, [els]);
    } else {
      var els_len = els.length;
      i$$11 = 0;
      var v771 = i$$11 < els_len;
      for (;v771;) {
        introspect(JAM.policy.p1) {
          var v1335 = els[i$$11]
        }
        var v1288 = v1335.nodeName;
        var v1134 = v1288.toLowerCase();
        var v770 = v1134 == tag_name;
        if (v770) {
          introspect(JAM.policy.p1) {
            var v769 = els[i$$11]
          }
          class_elements.push(v769);
        }
        i$$11++;
        v771 = i$$11 < els_len;
      }
    }
  } else {
    els = parent.getElementsByTagName(tag_name);
    var v777 = !class_name;
    if (v777) {
      class_elements = JAM.call(AJS.forceArray, AJS, [els]);
    } else {
      els_len = els.length;
      var v1135 = "(^|\\s)" + class_name;
      var v773 = v1135 + "(\\s|$)";
      var pattern$$1 = new RegExp(v773);
      i$$11 = 0;
      var v776 = i$$11 < els_len;
      for (;v776;) {
        introspect(JAM.policy.p1) {
          var v1336 = els[i$$11]
        }
        var v1289 = v1336.className;
        var v1136 = pattern$$1.test(v1289);
        var v1290 = !v1136;
        if (v1290) {
          v1136 = !class_name;
        }
        var v775 = v1136;
        if (v775) {
          introspect(JAM.policy.p1) {
            var v774 = els[i$$11]
          }
          class_elements.push(v774);
        }
        i$$11++;
        v776 = i$$11 < els_len;
      }
    }
  }
  if (first_match) {
    return class_elements[0];
  } else {
    return class_elements;
  }
  return;
}
function v28() {
  var args$$3 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var elements = new Array;
  var i$$10 = 0;
  var v1137 = args$$3.length;
  var v780 = i$$10 < v1137;
  for (;v780;) {
    introspect(JAM.policy.p1) {
      var v779 = args$$3[i$$10]
    }
    var element$$2 = JAM.call(AJS.getElement, AJS, [v779]);
    elements.push(element$$2);
    i$$10++;
    var v1138 = args$$3.length;
    v780 = i$$10 < v1138;
  }
  return elements;
}
function v27(id) {
  var v1139 = JAM.call(AJS.isString, AJS, [id]);
  var v1291 = !v1139;
  if (v1291) {
    v1139 = JAM.call(AJS.isNumber, AJS, [id]);
  }
  var v781 = v1139;
  if (v781) {
    return document.getElementById(id);
  } else {
    return id;
  }
  return;
}
function v26(fn$$3) {
  function v25() {
    var v782 = JAM.call(AJS.$FA, AJS, [arguments]);
    args$$2 = args$$2.concat(v782);
    return JAM.call(fn$$3.apply, fn$$3, [window, args$$2]);
  }
  var args$$2 = JAM.call(AJS.$FA, AJS, [arguments]);
  args$$2.shift();
  return v25;
}
function v24(list$$9, fn$$2, start_index$$1, end_index$$1) {
  function v23(elm$$4) {
    var v783 = JAM.call(fn$$2, null, [elm$$4]);
    if (v783) {
      r$$4.push(elm$$4);
    }
    return;
  }
  var r$$4 = [];
  JAM.call(AJS.map, AJS, [list$$9, v23, start_index$$1, end_index$$1]);
  return r$$4;
}
function v22(list$$8, fn$$1) {
  var v784 = list$$8.length;
  var i$$9 = v784 - 1;
  var l$$2 = 0;
  var v787 = i$$9 >= l$$2;
  for (;v787;) {
    introspect(JAM.policy.p1) {
      var v1140 = list$$8[i$$9]
    }
    var v785 = [v1140, i$$9];
    var val$$1 = JAM.call(fn$$1.apply, fn$$1, [null, v785]);
    var v786 = val$$1 != undefined;
    if (v786) {
      return val$$1;
    }
    i$$9--;
    v787 = i$$9 >= l$$2;
  }
  return;
}
function v21(list$$7, fn, start_index, end_index) {
  var i$$8 = 0;
  var l$$1 = list$$7.length;
  if (start_index) {
    i$$8 = start_index;
  }
  if (end_index) {
    l$$1 = end_index;
  }
  var v790 = i$$8 < l$$1;
  for (;v790;) {
    introspect(JAM.policy.p1) {
      var v788 = list$$7[i$$8]
    }
    var val = JAM.call(fn, null, [v788, i$$8]);
    var v789 = val != undefined;
    if (v789) {
      return val;
    }
    i$$8++;
    v790 = i$$8 < l$$1;
  }
  return;
}
function v20(args$$1) {
  var f = JAM.call(AJS.forceArray, AJS, [args$$1]);
  return JAM.call(AJS.flattenList, AJS, [f]);
}
function v19(list$$6) {
  function _flatten(r$$3, l) {
    function v18(o) {
      var v792 = o == null;
      if (v792) {
      } else {
        var v791 = JAM.call(AJS.isArray, AJS, [o]);
        if (v791) {
          _flatten(r$$3, o);
        } else {
          r$$3.push(o);
        }
      }
      return;
    }
    JAM.call(AJS.map, AJS, [l, v18]);
    return;
  }
  var has_list = false;
  var new_list = [];
  var i$$7 = 0;
  var v1141 = list$$6.length;
  var v795 = i$$7 < v1141;
  for (;v795;) {
    introspect(JAM.policy.p1) {
      var elm$$3 = list$$6[i$$7]
    }
    var v793 = JAM.call(AJS.isArray, AJS, [elm$$3]);
    if (v793) {
      has_list = true;
      break;
    }
    var v794 = elm$$3 != null;
    if (v794) {
      new_list.push(elm$$3);
    }
    i$$7++;
    var v1142 = list$$6.length;
    v795 = i$$7 < v1142;
  }
  var v796 = !has_list;
  if (v796) {
    return new_list;
  }
  var r$$2 = [];
  _flatten(r$$2, list$$6);
  return r$$2;
}
function v17(l1, l2) {
  var i$$6;
  for (i$$6 in l2) {
    JAM.set(l1, i$$6, JAM.get(l2, i$$6, JAM.policy.p1));
  }
  return l1;
}
function v16(list$$5) {
  var v1292 = Math.random();
  var v1293 = list$$5.length;
  var v1143 = v1292 * v1293;
  var v797 = Math.floor(v1143);
  introspect(JAM.policy.p1) {
    return list$$5[v797];
  }
}
function v15(list$$4) {
  var v1144 = list$$4.length;
  var v799 = v1144 > 0;
  if (v799) {
    var v1145 = list$$4.length;
    var v798 = v1145 - 1;
    introspect(JAM.policy.p1) {
      return list$$4[v798];
    }
  } else {
    return null;
  }
  return;
}
function v14(list$$3) {
  var v1146 = list$$3.length;
  var v800 = v1146 > 0;
  if (v800) {
    return list$$3[0];
  } else {
    return null;
  }
  return;
}
function v13(elm$$2, list$$2, eval_fn) {
  var i$$5 = 0;
  var v1147 = list$$2.length;
  var v802 = i$$5 < v1147;
  for (;v802;) {
    var v1294 = eval_fn;
    if (v1294) {
      introspect(JAM.policy.p1) {
        var v1337 = list$$2[i$$5]
      }
      v1294 = JAM.call(eval_fn, null, [v1337]);
    }
    var v1148 = v1294;
    var v1296 = !v1148;
    if (v1296) {
      introspect(JAM.policy.p1) {
        var v1295 = list$$2[i$$5]
      }
      v1148 = elm$$2 == v1295;
    }
    var v801 = v1148;
    if (v801) {
      return i$$5;
    }
    i$$5++;
    var v1149 = list$$2.length;
    v802 = i$$5 < v1149;
  }
  return-1;
}
function v12(elm$$1, list$$1) {
  var i$$4 = JAM.call(AJS.getIndex, AJS, [elm$$1, list$$1]);
  var v803 = i$$4 != -1;
  if (v803) {
    return true;
  } else {
    return false;
  }
  return;
}
function v11(delim, list) {
  function v10(elm) {
    var v1150 = delim + elm;
    r$$1 = r$$1 + v1150;
    return;
  }
  try {
    return JAM.call(list.join, list, [delim]);
  } catch (e$$5) {
    var v804 = list[0];
    var v1151 = !v804;
    if (v1151) {
      v804 = "";
    }
    var r$$1 = v804;
    JAM.call(AJS.map, AJS, [list, v10, 1]);
    return r$$1 + "";
  }
  return;
}
function v9(args) {
  var r = [];
  var i$$3 = 0;
  var v1152 = args.length;
  var v806 = i$$3 < v1152;
  for (;v806;) {
    introspect(JAM.policy.p1) {
      var v805 = args[i$$3]
    }
    r.push(v805);
    i$$3++;
    var v1153 = args.length;
    v806 = i$$3 < v1153;
  }
  return r;
}
function v8(v) {
  var v1154 = JAM.call(AJS.isArray, AJS, [v]);
  if (v1154) {
    var v1297 = JAM.call(AJS.isString, AJS, [v]);
    v1154 = !v1297;
  }
  var v808 = v1154;
  if (v808) {
    return v;
  } else {
    var v807 = !v;
    if (v807) {
      return[];
    } else {
      return[v];
    }
  }
  return;
}
function v7() {
  var v1155 = AJS._agent;
  var v809 = v1155.indexOf("camino");
  return v809 != -1;
}
function v6() {
  var v1156 = AJS._agent;
  var v810 = v1156.indexOf("macintosh");
  return v810 != -1;
}
function v5() {
  var v1298 = AJS._agent;
  var v1157 = v1298.indexOf("gecko");
  var v811 = v1157 != -1;
  if (v811) {
    var v1158 = AJS._agent_version;
    v811 = v1158 >= 20030210;
  }
  return v811;
}
function v4() {
  var v1159 = AJS._agent;
  var v812 = v1159.indexOf("opera");
  return v812 != -1;
}
function v3(all) {
  if (all) {
    var v813 = AJS._agent;
    return v813.indexOf("khtml");
  }
  var v1299 = AJS._agent;
  var v1160 = v1299.indexOf("khtml");
  var v814 = v1160 != -1;
  if (v814) {
    var v1300 = AJS._agent;
    var v1161 = v1300.match(/3\.\d\.\d safari/);
    v814 = v1161 == null;
  }
  return v814;
}
function v2() {
  var v1162 = AJS._agent;
  var v815 = v1162.indexOf("msie 8");
  return v815 != -1;
}
function v1() {
  var v1301 = AJS._agent;
  var v1163 = v1301.indexOf("msie");
  var v816 = v1163 != -1;
  if (v816) {
    var v1302 = AJS._agent;
    var v1164 = v1302.indexOf("opera");
    v816 = v1164 == -1;
  }
  return v816;
}
function v0(var_name) {
  var v1165 = window.location;
  var v817 = v1165.search;
  var query$$2 = v817.substring(1);
  var vars = query$$2.split("&");
  var i$$2 = 0;
  var v1166 = vars.length;
  var v820 = i$$2 < v1166;
  for (;v820;) {
    introspect(JAM.policy.p1) {
      var v818 = vars[i$$2]
    }
    var pair = v818.split("=");
    var v1167 = pair[0];
    var v819 = v1167 == var_name;
    if (v819) {
      return pair[1];
    }
    i$$2++;
    var v1168 = vars.length;
    v820 = i$$2 < v1168;
  }
  return null;
}
function GoogieSpell(img_dir, server_url) {
  function fn$$16(e$$17) {
    var elm$$39 = JAM.call(AJS.getEventElm, AJS, [e$$17]);
    var v1303 = elm$$39.googie_action_btn;
    var v1169 = v1303 != "1";
    if (v1169) {
      v1169 = this.isLangWindowShown();
    }
    var v821 = v1169;
    if (v821) {
      this.hideLangWindow();
    }
    var v1304 = elm$$39.googie_action_btn;
    var v1170 = v1304 != "1";
    if (v1170) {
      v1170 = this.isErrorWindowShown();
    }
    var v822 = v1170;
    if (v822) {
      this.hideErrorWindow();
    }
    return;
  }
  var cookie_value;
  var lang;
  cookie_value = getCookie("language");
  var v823 = cookie_value != null;
  if (v823) {
    GOOGIE_CUR_LANG = cookie_value;
  } else {
    GOOGIE_CUR_LANG = GOOGIE_DEFAULT_LANG;
  }
  this.img_dir = img_dir;
  this.server_url = server_url;
  this.org_lang_to_word = {"da":"Dansk", "de":"Deutsch", "en":"English", "es":"Espa&#241;ol", "fr":"Fran&#231;ais", "it":"Italiano", "nl":"Nederlands", "pl":"Polski", "pt":"Portugu&#234;s", "fi":"Suomi", "sv":"Svenska"};
  this.lang_to_word = this.org_lang_to_word;
  var v824 = this.lang_to_word;
  var v1384 = JAM.call(AJS.keys, AJS, [v824]);
  this.langlist_codes = v1384;
  this.show_change_lang_pic = true;
  this.change_lang_pic_placement = "left";
  this.report_state_change = true;
  this.ta_scroll_top = 0;
  this.el_scroll_top = 0;
  this.lang_chck_spell = "Check spelling";
  this.lang_revert = "Revert to";
  this.lang_close = "Close";
  this.lang_rsm_edt = "Resume editing";
  this.lang_no_error_found = "No spelling errors found";
  this.lang_no_suggestions = "No suggestions";
  this.show_spell_img = true;
  this.decoration = true;
  this.use_close_btn = true;
  this.edit_layer_dbl_click = true;
  this.report_ta_not_found = true;
  this.custom_ajax_error = null;
  this.custom_no_spelling_error = null;
  this.custom_menu_builder = [];
  this.custom_item_evaulator = null;
  this.extra_menu_items = [];
  this.custom_spellcheck_starter = null;
  this.main_controller = true;
  this.lang_state_observer = null;
  this.spelling_state_observer = null;
  this.show_menu_observer = null;
  this.all_errors_fixed_observer = null;
  this.use_focus = false;
  this.focus_link_t = null;
  this.focus_link_b = null;
  this.cnt_errors = 0;
  this.cnt_errors_fixed = 0;
  var v825 = JAM.call(AJS.$b, AJS, [fn$$16, this]);
  JAM.call(AJS.AEV, AJS, [document, "click", v825]);
  return;
}
function setCookie(name$$36, value$$29, expires, path, domain, secure) {
  var v1348 = name$$36 + "=";
  var v1349 = escape(value$$29);
  var v1338 = v1348 + v1349;
  var v1350;
  if (expires) {
    var v1354 = expires.toGMTString();
    v1350 = "; expires=" + v1354;
  } else {
    v1350 = "";
  }
  var v1339 = v1350;
  var v1305 = v1338 + v1339;
  var v1340;
  if (path) {
    v1340 = "; path=" + path;
  } else {
    v1340 = "";
  }
  var v1306 = v1340;
  var v1171 = v1305 + v1306;
  var v1307;
  if (domain) {
    v1307 = "; domain=" + domain;
  } else {
    v1307 = "";
  }
  var v1172 = v1307;
  var v826 = v1171 + v1172;
  var v1173;
  if (secure) {
    v1173 = "; secure";
  } else {
    v1173 = "";
  }
  var v827 = v1173;
  var curCookie = v826 + v827;
  document.cookie = curCookie;
  return;
}
function getCookie(name$$37) {
  var dc = document.cookie;
  var prefix$$2 = name$$37 + "=";
  var v828 = "; " + prefix$$2;
  var begin$$11 = dc.indexOf(v828);
  var v830 = begin$$11 == -1;
  if (v830) {
    begin$$11 = dc.indexOf(prefix$$2);
    var v829 = begin$$11 != 0;
    if (v829) {
      return null;
    }
  } else {
    begin$$11 = begin$$11 + 2;
  }
  var v831 = document.cookie;
  var end$$1 = v831.indexOf(";", begin$$11);
  var v832 = end$$1 == -1;
  if (v832) {
    end$$1 = dc.length;
  }
  var v1308 = prefix$$2.length;
  var v1174 = begin$$11 + v1308;
  var v833 = dc.substring(v1174, end$$1);
  return unescape(v833);
}
var v1175 = window.AJS;
var v837 = !v1175;
if (v837) {
  var v1176 = navigator.userAgent;
  var v834 = v1176.toLowerCase();
  var v835 = navigator.productSub;
  var AJS = {BASE_URL:"", ajaxErrorHandler:null, getQueryArgument:v0, _agent:v834, _agent_version:v835, isIe:v1, isIe8:v2, isSafari:v3, isOpera:v4, isMozilla:v5, isMac:v6, isCamino:v7, createArray:v8, forceArray:v9, join:v11, isIn:v12, getIndex:v13, getFirst:v14, getLast:v15, getRandom:v16, update:v17, flattenList:v19, flattenElmArguments:v20, map:v21, rmap:v22, filter:v24, partial:v26, getElement:v27, getElements:v28, getElementsByTagAndClassName:v29, nodeName:v30, _nodeWalk:v34, getParentBytc:v36, 
  getChildBytc:v37, hasParent:v38, getPreviousSiblingBytc:v40, getNextSiblingBytc:v42, getBody:v43, getFormElement:v46, getSelectValue:v47, documentInsert:v48, appendChildNodes:v50, appendToTop:v51, replaceChildNodes:v52, insertAfter:v53, insertBefore:v54, swapDOM:v55, removeElement:v57, createDOM:v58, _createDomShortcuts:v61, setHTML:v63, setVisibility:v64, showElement:v65, hideElement:v66, isElementHidden:v67, isElementShown:v68, setStyle:v72, __cssDim:v73, setWidth:v74, setHeight:v75, setLeft:v76, 
  setRight:v77, setTop:v78, setClass:v80, addClass:v82, hasClass:v83, removeClass:v85, setOpacity:v86, HTML2DOM:v87, preloadImages:v90, RND:v91, getXMLHttpRequest:v97, getRequest:v98, serializeJSON:v99, loadJSON:v100, evalTxt:v101, evalScriptTags:v102, encodeArguments:v103, _reprString:v104, _reprDate:v105, getMousePos:v106, getScrollTop:v107, absolutePosition:v108, getWindowSize:v109, isOverlapping:v110, getEventElm:v111, setEventKey:v112, onEvent:v114, ready_bound:false, is_ready:false, bindReady:v118, 
  ready_list:[], ready:v120, _f_guid:0, _wipe_guid:0, myaddEventListener:v123, handleEvent:v125, removeEventListener:v127, bind:v128, bindMethods:v129, preventDefault:v130, _listenOnce:v131, _getRealScope:v133, _reccruing_tos:{}, setSingleTimeout:v134, keys:v135, values:v136, urlencode:v137, urldecode:v138, isDefined:v139, isArray:v140, isString:v141, isNumber:v142, isObject:v143, isFunction:v144, isDict:v145, exportToGlobalScope:v146, log:v147, withScope:v148, strip:v149, trim_if_needed:v150};
  AJS.Class = v151;
  var v836 = AJS.Class;
  v836.prototype = {extend:v152, implement:v153, _parentize:v155};
  AJS.$ = AJS.getElement;
  AJS.$$ = AJS.getElements;
  AJS.$f = AJS.getFormElement;
  AJS.$b = AJS.bind;
  AJS.$p = AJS.partial;
  AJS.$FA = AJS.forceArray;
  AJS.$A = AJS.createArray;
  AJS.DI = AJS.documentInsert;
  AJS.ACN = AJS.appendChildNodes;
  AJS.RCN = AJS.replaceChildNodes;
  AJS.AEV = AJS.myaddEventListener;
  AJS.REV = AJS.removeEventListener;
  AJS.$bytc = AJS.getElementsByTagAndClassName;
  AJS.$AP = AJS.absolutePosition;
  AJS.loadJSONDoc = AJS.loadJSON;
  AJS.queryArguments = AJS.encodeArguments;
  AJS.$gp = AJS.getParentBytc;
  AJS.$gc = AJS.getChildBytc;
  AJS.$sv = AJS.setVisibility;
  AJS.generalErrorback = null;
  AJS.generalCallback = null;
  AJSDeferred = v156;
  AJSDeferred.prototype = {excCallbackSeq:v157, callback:v158, errback:v159, addErrback:v160, addCallback:v161, abort:v162, addCallbacks:v163, _onreadystatechange:v164, sendReq:v165};
  AJS._createDomShortcuts();
}
script_loaded = true;
AJS.exportToGlobalScope();
AJS.bindReady();
var GOOGIE_CUR_LANG = null;
var GOOGIE_DEFAULT_LANG = "en";
var v838 = GoogieSpell.prototype;
v838.decorateTextarea = v166;
var v839 = GoogieSpell.prototype;
v839.setSpellContainer = v167;
var v840 = GoogieSpell.prototype;
v840.setLanguages = v168;
var v841 = GoogieSpell.prototype;
v841.setForceWidthHeight = v169;
var v842 = GoogieSpell.prototype;
v842.setDecoration = v170;
var v843 = GoogieSpell.prototype;
v843.dontUseCloseButtons = v171;
var v844 = GoogieSpell.prototype;
v844.appendNewMenuItem = v172;
var v845 = GoogieSpell.prototype;
v845.appendCustomMenuBuilder = v173;
var v846 = GoogieSpell.prototype;
v846.setFocus = v174;
var v847 = GoogieSpell.prototype;
v847.getValue = v175;
var v848 = GoogieSpell.prototype;
v848.setValue = v176;
var v849 = GoogieSpell.prototype;
v849.setStateChanged = v177;
var v850 = GoogieSpell.prototype;
v850.setReportStateChange = v178;
var v851 = GoogieSpell.prototype;
v851.getGoogleUrl = v179;
GoogieSpell.escapeSepcial = v180;
GoogieSpell.createXMLReq = v181;
var v852 = GoogieSpell.prototype;
v852.spellCheck = v182;
var v853 = GoogieSpell.prototype;
v853.parseResult = v183;
var v854 = GoogieSpell.prototype;
v854.errorFixed = v184;
var v855 = GoogieSpell.prototype;
v855.errorFound = v185;
var v856 = GoogieSpell.prototype;
v856.createErrorWindow = v186;
var v857 = GoogieSpell.prototype;
v857.isErrorWindowShown = v187;
var v858 = GoogieSpell.prototype;
v858.hideErrorWindow = v188;
var v859 = GoogieSpell.prototype;
v859.updateOrginalText = v189;
var v860 = GoogieSpell.prototype;
v860.saveOldValue = v190;
var v861 = GoogieSpell.prototype;
v861.createListSeparator = v191;
var v862 = GoogieSpell.prototype;
v862.correctError = v192;
var v863 = GoogieSpell.prototype;
v863.showErrorWindow = v198;
var v864 = GoogieSpell.prototype;
v864.createEditLayer = v201;
var v865 = GoogieSpell.prototype;
v865.resumeEditing = v202;
var v866 = GoogieSpell.prototype;
v866.createErrorLink = v203;
GoogieSpell.createPart = v204;
var v867 = GoogieSpell.prototype;
v867.showErrorsInIframe = v206;
var v868 = GoogieSpell.prototype;
v868.createLangWindow = v210;
var v869 = GoogieSpell.prototype;
v869.setCurrentLanguage = v211;
var v870 = GoogieSpell.prototype;
v870.isLangWindowShown = v212;
var v871 = GoogieSpell.prototype;
v871.hideLangWindow = v213;
var v872 = GoogieSpell.prototype;
v872.deHighlightCurSel = v214;
var v873 = GoogieSpell.prototype;
v873.highlightCurSel = v215;
var v874 = GoogieSpell.prototype;
v874.showLangWindow = v216;
var v875 = GoogieSpell.prototype;
v875.createChangeLangPic = v217;
var v876 = GoogieSpell.prototype;
v876.createSpellDiv = v218;
var v877 = GoogieSpell.prototype;
v877.flashNoSpellingErrorState = v220;
var v878 = GoogieSpell.prototype;
v878.resumeEditingState = v222;
var v879 = GoogieSpell.prototype;
v879.checkSpellingState = v223;
GoogieSpell.item_onmouseover = v224;
GoogieSpell.item_onmouseout = v225;
var v880 = GoogieSpell.prototype;
v880.createCloseButton = v226;
var v881 = GoogieSpell.prototype;
v881.createButton = v227;
var v882 = GoogieSpell.prototype;
v882.removeIndicator = v228;
var v883 = GoogieSpell.prototype;
v883.appendIndicator = v229;
var v884 = GoogieSpell.prototype;
v884.createFocusLink = v230;
var x = document.cookie;
var googie1 = new GoogieSpell("./", "./spell-check/spell-check.php?lang=");
JAM.call(googie1.decorateTextarea, googie1, ["ta1"])
