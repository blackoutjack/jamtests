function v247() {
  var v248 = GB_ROOT_DIR + "next.gif";
  var v249 = GB_ROOT_DIR + "prev.gif";
  JAM.call(AJS.preloadImages, AJS, [v248, v249], JAM.policy.p1);
  return;
}
function v246() {
  var v831 = this.current_index;
  var v1181 = this.current_set;
  var v1076 = v1181.length;
  var v832 = v1076 - 1;
  var v250 = v831 != v832;
  if (v250) {
    this.current_index++;
    this.updateFrame();
    this.updateStatus();
  }
  return;
}
function v245() {
  var v833 = this.current_index;
  var v251 = v833 != 0;
  if (v251) {
    this.current_index--;
    this.updateFrame();
    this.updateStatus();
  }
  return;
}
function v244() {
  var v252 = this.current_set;
  var v253 = this.current_index;
  var item$$3 = v252[v253];
  var v254 = item$$3.caption;
  JAM.call(this._setCaption, this, [v254], JAM.policy.p1);
  this.url = item$$3.url;
  this.startLoading();
  return;
}
function v243(caption$$5) {
  var v255 = JAM.call(AJS.$, AJS, ["GB_caption"]);
  JAM.call(AJS.setHTML, AJS, [v255, caption$$5], JAM.policy.p1);
  return;
}
function v242() {
  var v1182 = this.current_index;
  var v1077 = v1182 + 1;
  var v834 = v1077 + " / ";
  var v1078 = this.current_set;
  var v835 = v1078.length;
  var v256 = v834 + v835;
  JAM.call(AJS.setHTML, AJS, [GB_STATUS, v256], JAM.policy.p1);
  var v836 = this.current_index;
  var v259 = v836 == 0;
  if (v259) {
    var v257 = this.btn_prev;
    JAM.call(AJS.addClass, AJS, [v257, "disabled"], JAM.policy.p1);
  } else {
    var v258 = this.btn_prev;
    JAM.call(AJS.removeClass, AJS, [v258, "disabled"], JAM.policy.p1);
  }
  var v837 = this.current_index;
  var v1183 = this.current_set;
  var v1079 = v1183.length;
  var v838 = v1079 - 1;
  var v262 = v837 == v838;
  if (v262) {
    var v260 = this.btn_next;
    JAM.call(AJS.addClass, AJS, [v260, "disabled"], JAM.policy.p1);
  } else {
    var v261 = this.btn_next;
    JAM.call(AJS.removeClass, AJS, [v261, "disabled"], JAM.policy.p1);
  }
  return;
}
function v241(start_index$$4) {
  this.current_index = start_index$$4;
  var v263 = this.current_set;
  var v264 = this.current_index;
  var item$$2 = v263[v264];
  var v265 = item$$2.url;
  JAM.call(this.show, this, [v265], JAM.policy.p1);
  var v266 = item$$2.caption;
  JAM.call(this._setCaption, this, [v266], JAM.policy.p1);
  var v839 = this.img_prev;
  var v267 = {"class":"left", src:v839};
  var v1236 = JAM.call(AJS.IMG, AJS, [v267], JAM.policy.p1);
  this.btn_prev = v1236;
  var v840 = this.img_next;
  var v268 = {"class":"right", src:v840};
  var v1237 = JAM.call(AJS.IMG, AJS, [v268], JAM.policy.p1);
  this.btn_next = v1237;
  var v269 = this.btn_prev;
  var v841 = this.switchPrev;
  var v270 = JAM.call(AJS.$b, AJS, [v841, this], JAM.policy.p1);
  JAM.call(AJS.AEV, AJS, [v269, "click", v270], JAM.policy.p1);
  var v271 = this.btn_next;
  var v842 = this.switchNext;
  var v272 = JAM.call(AJS.$b, AJS, [v842, this], JAM.policy.p1);
  JAM.call(AJS.AEV, AJS, [v271, "click", v272], JAM.policy.p1);
  var v273 = {"class":"GB_navStatus"};
  GB_STATUS = JAM.call(AJS.SPAN, AJS, [v273], JAM.policy.p1);
  var v274 = JAM.call(AJS.$, AJS, ["GB_middle"]);
  var v275 = this.btn_prev;
  var v276 = this.btn_next;
  JAM.call(AJS.ACN, AJS, [v274, v275, GB_STATUS, v276], JAM.policy.p1);
  this.updateStatus();
  return;
}
function v240(options$$20, set$$2) {
  JAM.call(this.parent, this, [options$$20], JAM.policy.p1);
  var v843 = this.img_next;
  var v278 = !v843;
  if (v278) {
    var v277 = this.root_dir;
    this.img_next = v277 + "next.gif";
  }
  var v844 = this.img_prev;
  var v280 = !v844;
  if (v280) {
    var v279 = this.root_dir;
    this.img_prev = v279 + "prev.gif";
  }
  this.current_set = set$$2;
  return;
}
function v239(set$$1, start_index$$3, callback_fn$$6) {
  var options$$19 = {type:"image", fullscreen:false, center_win:true, width:300, height:300};
  var gb_sets$$1 = JAM.new(GB_Sets, [options$$19, set$$1]);
  JAM.call(gb_sets$$1.addCallback, gb_sets$$1, [callback_fn$$6], JAM.policy.p1);
  var v281 = start_index$$3 - 1;
  JAM.call(gb_sets$$1.showSet, gb_sets$$1, [v281]);
  return false;
}
function v238(set, start_index$$2, callback_fn$$5) {
  var options$$18 = {type:"page", fullscreen:true, center_win:false};
  var gb_sets = JAM.new(GB_Sets, [options$$18, set]);
  JAM.call(gb_sets.addCallback, gb_sets, [callback_fn$$5], JAM.policy.p1);
  var v282 = start_index$$2 - 1;
  JAM.call(gb_sets.showSet, gb_sets, [v282]);
  return false;
}
function v237() {
  var page_size$$4 = AJS.getWindowSize();
  var v283 = this.g_window;
  var v1184 = page_size$$4.w;
  var v1185 = this.width;
  var v1080 = v1184 - v1185;
  var v845 = v1080 / 2;
  var v284 = v845 - 13;
  JAM.call(AJS.setLeft, AJS, [v283, v284], JAM.policy.p1);
  var v846 = this.center_win;
  var v291 = !v846;
  if (v291) {
    var v285 = this.g_window;
    var v286 = AJS.getScrollTop();
    JAM.call(AJS.setTop, AJS, [v285, v286], JAM.policy.p1);
  } else {
    var v1186 = page_size$$4.h;
    var v1187 = this.height;
    var v1081 = v1186 - v1187;
    var v847 = v1081 / 2;
    var v287 = v847 - 20;
    var v288 = AJS.getScrollTop();
    var fl$$1 = v287 + v288;
    var v289 = fl$$1 < 0;
    if (v289) {
      fl$$1 = 0;
    }
    var v290 = this.g_window;
    JAM.call(AJS.setTop, AJS, [v290, fl$$1], JAM.policy.p1);
  }
  return;
}
function v236() {
  var v294 = this.fullscreen;
  if (v294) {
    var page_size$$3 = AJS.getWindowSize();
    overlay_h = page_size$$3.h;
    var v1082 = this.overlay;
    var v848 = v1082.offsetWidth;
    var v1217 = this.overlay;
    var v1188 = v1217.offsetWidth;
    var v1083 = v1188 / 100;
    var v849 = v1083 * 10;
    var v292 = v848 - v849;
    var v1238 = JAM.call(Math.round, Math, [v292], JAM.policy.p1);
    this.width = v1238;
    var v1084 = overlay_h / 100;
    var v850 = v1084 * 10;
    var v293 = overlay_h - v850;
    var v1239 = JAM.call(Math.round, Math, [v293], JAM.policy.p1);
    this.height = v1239;
  }
  var v295 = this.header;
  var v851 = this.width;
  var v296 = v851 + 6;
  JAM.call(AJS.setWidth, AJS, [v295, v296], JAM.policy.p1);
  var v297 = this.iframe;
  var v298 = this.width;
  JAM.call(AJS.setWidth, AJS, [v297, v298], JAM.policy.p1);
  var v299 = this.iframe;
  var v300 = this.height;
  JAM.call(AJS.setHeight, AJS, [v299, v300], JAM.policy.p1);
  return;
}
function v235() {
  function v234() {
    JAM.call(AJS.removeClass, AJS, [span, "click"], JAM.policy.p1);
    return;
  }
  function v233() {
    JAM.call(AJS.addClass, AJS, [span, "click"], JAM.policy.p1);
    return;
  }
  function v232() {
    JAM.call(AJS.removeClass, AJS, [span, "on"], JAM.policy.p1);
    return;
  }
  function v231() {
    JAM.call(AJS.addClass, AJS, [span, "on"], JAM.policy.p1);
    return;
  }
  var v301 = this.g_window;
  JAM.call(AJS.addClass, AJS, [v301, "GB_Window"], JAM.policy.p1);
  var v302 = {"class":"header"};
  var v1240 = JAM.call(AJS.TABLE, AJS, [v302], JAM.policy.p1);
  this.header = v1240;
  var v852 = this.header;
  var v303 = v852.style;
  var v1085 = this.img_header;
  var v853 = "url(" + v1085;
  v303.backgroundImage = v853 + ")";
  var v304 = {"class":"caption"};
  var v305 = this.caption;
  var td_caption$$1 = JAM.call(AJS.TD, AJS, [v304, v305], JAM.policy.p1);
  var v306 = {"class":"close"};
  var td_close$$1 = JAM.call(AJS.TD, AJS, [v306], JAM.policy.p1);
  var v313 = this.show_close_img;
  if (v313) {
    var v854 = this.img_close;
    var v307 = {"src":v854};
    var img_close$$1 = JAM.call(AJS.IMG, AJS, [v307], JAM.policy.p1);
    var span = JAM.call(AJS.SPAN, AJS, ["Close"]);
    var btn = JAM.call(AJS.DIV, AJS, [img_close$$1, span], JAM.policy.p1);
    var v308 = [img_close$$1, span];
    JAM.call(AJS.AEV, AJS, [v308, "mouseover", v231], JAM.policy.p1);
    var v309 = [img_close$$1, span];
    JAM.call(AJS.AEV, AJS, [v309, "mouseout", v232], JAM.policy.p1);
    var v310 = [img_close$$1, span];
    JAM.call(AJS.AEV, AJS, [v310, "mousedown", v233], JAM.policy.p1);
    var v311 = [img_close$$1, span];
    JAM.call(AJS.AEV, AJS, [v311, "mouseup", v234], JAM.policy.p1);
    var v312 = [img_close$$1, span];
    JAM.call(AJS.AEV, AJS, [v312, "click", GB_hide], JAM.policy.p1);
    JAM.call(AJS.ACN, AJS, [td_close$$1, btn], JAM.policy.p1);
  }
  tbody_header = AJS.TBODY();
  var v314 = JAM.call(AJS.TR, AJS, [td_caption$$1, td_close$$1], JAM.policy.p1);
  JAM.call(AJS.ACN, AJS, [tbody_header, v314], JAM.policy.p1);
  var v315 = this.header;
  JAM.call(AJS.ACN, AJS, [v315, tbody_header], JAM.policy.p1);
  var v316 = this.top_cnt;
  var v317 = this.header;
  JAM.call(AJS.ACN, AJS, [v316, v317], JAM.policy.p1);
  var v319 = this.fullscreen;
  if (v319) {
    var v855 = this.setWindowPosition;
    var v318 = JAM.call(AJS.$b, AJS, [v855, this], JAM.policy.p1);
    JAM.call(AJS.AEV, AJS, [window, "scroll", v318], JAM.policy.p1);
  }
  return;
}
function v230(options$$17) {
  JAM.call(this.parent, this, [{}]);
  var v320 = this.root_dir;
  this.img_header = v320 + "header_bg.gif";
  var v321 = this.root_dir;
  this.img_close = v321 + "w_close.gif";
  this.show_close_img = true;
  JAM.call(AJS.update, AJS, [this, options$$17], JAM.policy.p1);
  var v322 = this.callback_fn;
  JAM.call(this.addCallback, this, [v322], JAM.policy.p1);
  return;
}
function v229(caption$$4, url$$10, callback_fn$$4) {
  var options$$16 = {caption:caption$$4, fullscreen:true, callback_fn:callback_fn$$4};
  var win$$4 = JAM.new(GB_Window, [options$$16]);
  return JAM.call(win$$4.show, win$$4, [url$$10], JAM.policy.p1);
}
function v228(caption$$3, url$$9, height$$9, width$$10, callback_fn$$3) {
  var v323 = height$$9 || 500;
  var v324 = width$$10 || 500;
  var options$$15 = {caption:caption$$3, center_win:true, height:v323, width:v324, fullscreen:false, callback_fn:callback_fn$$3};
  var win$$3 = JAM.new(GB_Window, [options$$15]);
  return JAM.call(win$$3.show, win$$3, [url$$9], JAM.policy.p1);
}
function v227(caption$$2, url$$8, height$$8, width$$9, callback_fn$$2) {
  var v325 = height$$8 || 500;
  var v326 = width$$9 || 500;
  var options$$14 = {caption:caption$$2, height:v325, width:v326, fullscreen:false, callback_fn:callback_fn$$2};
  var win$$2 = JAM.new(GB_Window, [options$$14]);
  return JAM.call(win$$2.show, win$$2, [url$$8], JAM.policy.p1);
}
function v226() {
  var v331 = this.use_fx;
  if (v331) {
    var v327 = AJS.fx;
    var v328 = this.header;
    var v329 = {to:1};
    JAM.call(v327.fadeIn, v327, [v328, v329], JAM.policy.p1);
  } else {
    var v330 = this.header;
    JAM.call(AJS.setOpacity, AJS, [v330, 1], JAM.policy.p1);
  }
  return;
}
function v225() {
  var v332 = this.header;
  JAM.call(AJS.removeElement, AJS, [v332], JAM.policy.p1);
  var v333 = this.g_window;
  JAM.call(AJS.removeClass, AJS, [v333, "GB_Gallery"], JAM.policy.p1);
  return;
}
function v224() {
  var v334 = this.overlay;
  var overlay_w$$1 = v334.offsetWidth;
  var page_size$$2 = AJS.getWindowSize();
  var v335 = this.g_window;
  var v1086 = overlay_w$$1 - 50;
  var v1087 = this.width;
  var v856 = v1086 - v1087;
  var v336 = v856 / 2;
  JAM.call(AJS.setLeft, AJS, [v335, v336], JAM.policy.p1);
  var v337 = AJS.getScrollTop();
  var header_top = v337 + 55;
  var v857 = this.center_win;
  var v344 = !v857;
  if (v344) {
    var v338 = this.g_window;
    JAM.call(AJS.setTop, AJS, [v338, header_top], JAM.policy.p1);
  } else {
    var v1189 = page_size$$2.h;
    var v1190 = this.height;
    var v1088 = v1189 - v1190;
    var v858 = v1088 / 2;
    var v339 = v858 + 20;
    var v340 = AJS.getScrollTop();
    var fl = v339 + v340;
    var v341 = fl < 0;
    if (v341) {
      fl = 0;
    }
    var v342 = header_top > fl;
    if (v342) {
      fl = header_top;
    }
    var v343 = this.g_window;
    JAM.call(AJS.setTop, AJS, [v343, fl], JAM.policy.p1);
  }
  this._setHeaderPos();
  return;
}
function v223() {
  var v345 = this.header;
  var v859 = AJS.getScrollTop();
  var v346 = v859 + 10;
  JAM.call(AJS.setTop, AJS, [v345, v346], JAM.policy.p1);
  return;
}
function v222() {
  var v347 = this.overlay;
  var overlay_w = v347.offsetWidth;
  var page_size$$1 = AJS.getWindowSize();
  var v349 = this.fullscreen;
  if (v349) {
    this.width = overlay_w - 40;
    var v348 = page_size$$1.h;
    this.height = v348 - 80;
  }
  var v350 = this.iframe;
  var v351 = this.width;
  JAM.call(AJS.setWidth, AJS, [v350, v351], JAM.policy.p1);
  var v352 = this.iframe;
  var v353 = this.height;
  JAM.call(AJS.setHeight, AJS, [v352, v353], JAM.policy.p1);
  var v354 = this.header;
  JAM.call(AJS.setWidth, AJS, [v354, overlay_w], JAM.policy.p1);
  return;
}
function v221() {
  var v355 = this.g_window;
  JAM.call(AJS.addClass, AJS, [v355, "GB_Gallery"], JAM.policy.p1);
  var v356 = {"class":"inner"};
  var inner = JAM.call(AJS.DIV, AJS, [v356], JAM.policy.p1);
  var v357 = {"class":"GB_header"};
  var v1241 = JAM.call(AJS.DIV, AJS, [v357, inner], JAM.policy.p1);
  this.header = v1241;
  var v358 = this.header;
  JAM.call(AJS.setOpacity, AJS, [v358, 0], JAM.policy.p1);
  var v359 = AJS.getBody();
  var v360 = this.header;
  var v860 = this.overlay;
  var v361 = v860.nextSibling;
  JAM.call(v359.insertBefore, v359, [v360, v361], JAM.policy.p1);
  var v362 = {"id":"GB_caption", "class":"caption", "width":"40%"};
  var v363 = this.caption;
  var td_caption = JAM.call(AJS.TD, AJS, [v362, v363], JAM.policy.p1);
  var v364 = {"id":"GB_middle", "class":"middle", "width":"20%"};
  var td_middle = JAM.call(AJS.TD, AJS, [v364], JAM.policy.p1);
  var v861 = this.img_close;
  var v365 = {"src":v861};
  var img_close = JAM.call(AJS.IMG, AJS, [v365], JAM.policy.p1);
  JAM.call(AJS.AEV, AJS, [img_close, "click", GB_hide], JAM.policy.p1);
  var v366 = {"class":"close", "width":"40%"};
  var td_close = JAM.call(AJS.TD, AJS, [v366, img_close], JAM.policy.p1);
  var v367 = JAM.call(AJS.TR, AJS, [td_caption, td_middle, td_close], JAM.policy.p1);
  var tbody = JAM.call(AJS.TBODY, AJS, [v367], JAM.policy.p1);
  var v368 = {"cellspacing":"0", "cellpadding":0, "border":0};
  var table = JAM.call(AJS.TABLE, AJS, [v368, tbody], JAM.policy.p1);
  JAM.call(AJS.ACN, AJS, [inner, table], JAM.policy.p1);
  var v371 = this.fullscreen;
  if (v371) {
    var v862 = this.setWindowPosition;
    var v369 = JAM.call(AJS.$b, AJS, [v862, this], JAM.policy.p1);
    JAM.call(AJS.AEV, AJS, [window, "scroll", v369], JAM.policy.p1);
  } else {
    var v863 = this._setHeaderPos;
    var v370 = JAM.call(AJS.$b, AJS, [v863, this], JAM.policy.p1);
    JAM.call(AJS.AEV, AJS, [window, "scroll", v370], JAM.policy.p1);
  }
  return;
}
function v220(options$$13) {
  JAM.call(this.parent, this, [{}]);
  var v372 = this.root_dir;
  this.img_close = v372 + "g_close.gif";
  JAM.call(AJS.update, AJS, [this, options$$13], JAM.policy.p1);
  var v373 = this.callback_fn;
  JAM.call(this.addCallback, this, [v373], JAM.policy.p1);
  return;
}
function v219(caption$$1, url$$7, callback_fn$$1) {
  var options$$12 = {type:"page", caption:caption$$1, callback_fn:callback_fn$$1, fullscreen:true, center_win:false};
  var win$$1 = JAM.new(GB_Gallery, [options$$12]);
  return JAM.call(win$$1.show, win$$1, [url$$7], JAM.policy.p1);
}
function v218(caption, url$$6, callback_fn) {
  var options$$11 = {width:300, height:300, type:"image", fullscreen:false, center_win:true, caption:caption, callback_fn:callback_fn};
  var win = JAM.new(GB_Gallery, [options$$11]);
  return JAM.call(win.show, win, [url$$6], JAM.policy.p1);
}
function v217() {
  if (GB_CURRENT) {
    GB_CURRENT.setOverlayDimension();
  }
  return;
}
function v216() {
  if (GB_CURRENT) {
    GB_CURRENT.update();
  }
  return;
}
function v215() {
  return;
}
function v214() {
  return;
}
function v213() {
  return;
}
function v212() {
  return;
}
function v211() {
  return;
}
function v210() {
  var v864 = this.iframe;
  var v381 = !v864;
  if (v381) {
    var d$$5 = {"name":"GB_frame", "class":"GB_frame", "frameBorder":0};
    var v374 = AJS.isIe();
    if (v374) {
      d$$5.src = 'javascript:false;document.write("");';
    }
    var v1242 = JAM.call(AJS.IFRAME, AJS, [d$$5], JAM.policy.p1);
    this.iframe = v1242;
    var v375 = {"class":"content"};
    var v376 = this.iframe;
    var v1243 = JAM.call(AJS.DIV, AJS, [v375, v376], JAM.policy.p1);
    this.middle_cnt = v1243;
    var v1244 = AJS.DIV();
    this.top_cnt = v1244;
    var v1245 = AJS.DIV();
    this.bottom_cnt = v1245;
    var v377 = this.g_window;
    var v378 = this.top_cnt;
    var v379 = this.middle_cnt;
    var v380 = this.bottom_cnt;
    JAM.call(AJS.ACN, AJS, [v377, v378, v379, v380], JAM.policy.p1);
  }
  return;
}
function v209() {
  var v382 = {"id":"GB_overlay"};
  var v1246 = JAM.call(AJS.DIV, AJS, [v382], JAM.policy.p1);
  this.overlay = v1246;
  var v384 = this.overlay_click_close;
  if (v384) {
    var v383 = this.overlay;
    JAM.call(AJS.AEV, AJS, [v383, "click", GB_hide], JAM.policy.p1);
  }
  var v385 = this.overlay;
  JAM.call(AJS.setOpacity, AJS, [v385, 0], JAM.policy.p1);
  var v386 = AJS.getBody();
  var v387 = this.overlay;
  var v865 = AJS.getBody();
  var v388 = v865.firstChild;
  JAM.call(v386.insertBefore, v386, [v387, v388], JAM.policy.p1);
  return;
}
function v208() {
  var page_size = AJS.getWindowSize();
  var v866 = AJS.isMozilla();
  var v1089 = !v866;
  if (v1089) {
    v866 = AJS.isOpera();
  }
  var v392 = v866;
  if (v392) {
    var v389 = this.overlay;
    JAM.call(AJS.setWidth, AJS, [v389, "100%"], JAM.policy.p1);
  } else {
    var v390 = this.overlay;
    var v391 = page_size.w;
    JAM.call(AJS.setWidth, AJS, [v390, v391], JAM.policy.p1);
  }
  var v867 = AJS.getScrollTop();
  var v868 = page_size.h;
  var v393 = v867 + v868;
  var v869 = AJS.getScrollTop();
  var v870 = this.height;
  var v394 = v869 + v870;
  var max_height = JAM.call(Math.max, Math, [v393, v394], JAM.policy.p1);
  var v871 = AJS.getScrollTop();
  var v398 = max_height < v871;
  if (v398) {
    var v395 = this.overlay;
    JAM.call(AJS.setHeight, AJS, [v395, max_height], JAM.policy.p1);
  } else {
    var v396 = this.overlay;
    var v872 = AJS.getScrollTop();
    var v873 = page_size.h;
    var v397 = v872 + v873;
    JAM.call(AJS.setHeight, AJS, [v396, v397], JAM.policy.p1);
  }
  return;
}
function v207() {
  var v399 = this.iframe;
  var v1090 = this.src_loader;
  var v874 = v1090 + "?s=";
  var v875 = this.salt;
  var v1191 = this.salt;
  this.salt = v1191 + 1;
  v399.src = v874 + v875;
  var v400 = this.iframe;
  JAM.call(AJS.showElement, AJS, [v400], JAM.policy.p1);
  return;
}
function v206() {
  try {
    var v401 = this.iframe;
    JAM.call(AJS.removeElement, AJS, [v401], JAM.policy.p1);
  } catch (e$$17) {
  }
  this.iframe = null;
  return;
}
function v205() {
  function v204() {
    me$$3.onShow();
    var v402 = me$$3.g_window;
    JAM.call(AJS.showElement, AJS, [v402], JAM.policy.p1);
    me$$3.startLoading();
    return;
  }
  this.initOverlay();
  var v403 = {"id":"GB_window"};
  var v1247 = JAM.call(AJS.DIV, AJS, [v403], JAM.policy.p1);
  this.g_window = v1247;
  var v404 = this.g_window;
  JAM.call(AJS.hideElement, AJS, [v404], JAM.policy.p1);
  var v405 = AJS.getBody();
  var v406 = this.g_window;
  var v876 = this.overlay;
  var v407 = v876.nextSibling;
  JAM.call(v405.insertBefore, v405, [v406, v407], JAM.policy.p1);
  this.initFrame();
  this.initHook();
  this.update();
  var me$$3 = this;
  var v413 = this.use_fx;
  if (v413) {
    var v408 = AJS.fx;
    var v409 = this.overlay;
    var v410 = {duration:300, to:.7, onComplete:v204};
    JAM.call(v408.fadeIn, v408, [v409, v410], JAM.policy.p1);
  } else {
    var v411 = this.overlay;
    JAM.call(AJS.setOpacity, AJS, [v411, .7], JAM.policy.p1);
    var v412 = this.g_window;
    JAM.call(AJS.showElement, AJS, [v412], JAM.policy.p1);
    this.onShow();
    this.startLoading();
  }
  JAM.call(AJS.AEV, AJS, [window, "scroll", _GB_setOverlayDimension], JAM.policy.p1);
  JAM.call(AJS.AEV, AJS, [window, "resize", _GB_update], JAM.policy.p1);
  return;
}
function v203() {
  this.setOverlayDimension();
  this.setFrameSize();
  this.setWindowPosition();
  return;
}
function v202(cb$$1) {
  function v201() {
    function v200(elm$$49) {
      var v414 = elm$$49.style;
      v414.visibility = "visible";
      return;
    }
    function v199() {
      JAM.call(AJS.removeElement, AJS, [elm$$48], JAM.policy.p1);
      elm$$48 = null;
      return;
    }
    function v198(fn$$17) {
      fn$$17();
      return;
    }
    var c_bs = me$$2.callback_fns;
    var v415 = c_bs != [];
    if (v415) {
      JAM.call(AJS.map, AJS, [c_bs, v198], JAM.policy.p1);
    }
    me$$2.onHide();
    var v422 = me$$2.use_fx;
    if (v422) {
      var elm$$48 = me$$2.overlay;
      var v416 = AJS.fx;
      var v417 = me$$2.overlay;
      var v418 = {onComplete:v199, duration:300};
      JAM.call(v416.fadeOut, v416, [v417, v418], JAM.policy.p1);
      var v419 = me$$2.g_window;
      JAM.call(AJS.removeElement, AJS, [v419], JAM.policy.p1);
    } else {
      var v420 = me$$2.g_window;
      var v421 = me$$2.overlay;
      JAM.call(AJS.removeElement, AJS, [v420, v421], JAM.policy.p1);
    }
    me$$2.removeFrame();
    JAM.call(AJS.REV, AJS, [window, "scroll", _GB_setOverlayDimension], JAM.policy.p1);
    JAM.call(AJS.REV, AJS, [window, "resize", _GB_update], JAM.policy.p1);
    var v423 = JAM.call(AJS.$bytc, AJS, ["object"]);
    var v424 = JAM.call(AJS.$bytc, AJS, ["select"]);
    var elms$$6 = [v423, v424];
    var v425 = JAM.call(AJS.flattenList, AJS, [elms$$6], JAM.policy.p1);
    JAM.call(AJS.map, AJS, [v425, v200], JAM.policy.p1);
    GB_CURRENT = null;
    var v427 = me$$2.reload_on_close;
    if (v427) {
      var v426 = window.location;
      v426.reload();
    }
    var v428 = JAM.call(AJS.isFunction, AJS, [cb$$1], JAM.policy.p1);
    if (v428) {
      cb$$1();
    }
    return;
  }
  var me$$2 = this;
  JAM.call(setTimeout, null, [v201, 10]);
  return;
}
function v197(url$$5) {
  function v196(elm$$47) {
    var v429 = elm$$47.style;
    v429.visibility = "hidden";
    return;
  }
  GB_CURRENT = this;
  this.url = url$$5;
  var v430 = JAM.call(AJS.$bytc, AJS, ["object"]);
  var v431 = JAM.call(AJS.$bytc, AJS, ["select"]);
  var elms$$5 = [v430, v431];
  var v432 = JAM.call(AJS.flattenList, AJS, [elms$$5], JAM.policy.p1);
  JAM.call(AJS.map, AJS, [v432, v196], JAM.policy.p1);
  this.createElements();
  return false;
}
function v195(fn$$16) {
  if (fn$$16) {
    var v433 = this.callback_fns;
    JAM.call(v433.push, v433, [fn$$16], JAM.policy.p1);
  }
  return;
}
function v194(options$$10) {
  this.use_fx = AJS.fx;
  this.type = "page";
  this.overlay_click_close = false;
  this.salt = 0;
  this.root_dir = GB_ROOT_DIR;
  this.callback_fns = [];
  this.reload_on_close = false;
  var v434 = this.root_dir;
  this.src_loader = v434 + "loader_frame.html";
  var v877 = window.location;
  var v435 = v877.hostname;
  var h_www = v435.indexOf("www");
  var v436 = this.src_loader;
  var src_www = v436.indexOf("www");
  var v878 = h_www != -1;
  if (v878) {
    v878 = src_www == -1;
  }
  var v438 = v878;
  if (v438) {
    var v437 = this.src_loader;
    var v1248 = v437.replace("://", "://www.");
    this.src_loader = v1248;
  }
  var v879 = h_www == -1;
  if (v879) {
    v879 = src_www != -1;
  }
  var v440 = v879;
  if (v440) {
    var v439 = this.src_loader;
    var v1249 = v439.replace("://www.", "://");
    this.src_loader = v1249;
  }
  this.show_loading = true;
  JAM.call(AJS.update, AJS, [this, options$$10], JAM.policy.p1);
  return;
}
function v193(cb) {
  JAM.call(GB_CURRENT.hide, GB_CURRENT, [cb], JAM.policy.p1);
  return;
}
function v192(t$$2, b$$1, c$$2, d$$4) {
  var v1091 = -c$$2;
  var v880 = v1091 / 2;
  var v1225 = Math.PI;
  var v1218 = v1225 * t$$2;
  var v1192 = v1218 / d$$4;
  var v1092 = JAM.call(Math.cos, Math, [v1192], JAM.policy.p1);
  var v881 = v1092 - 1;
  var v441 = v880 * v881;
  return v441 + b$$1;
}
function v191(t$$1, b, c$$1, d$$3) {
  var v882 = c$$1 * t$$1;
  var v442 = v882 / d$$3;
  return v442 + b;
}
function v190() {
  var p$$6;
  var v445 = this.now;
  for (p$$6 in v445) {
    var v443 = this.elm;
    var v883 = this.now;
    var v444 = v883[p$$6];
    JAM.call(this.setStyle, this, [v443, p$$6, v444], JAM.policy.p1);
  }
  return;
}
function v189(obj$$23) {
  var v884 = this.timer;
  if (v884) {
    var v1093 = this.options;
    v884 = v1093.wait;
  }
  var v446 = v884;
  if (v446) {
    return;
  }
  var from$$3 = {};
  var to$$4 = {};
  for (p in obj$$23) {
    var v447 = obj$$23[p];
    JAM.set(from$$3, p, v447[0]);
    var v448 = obj$$23[p];
    JAM.set(to$$4, p, v448[1]);
  }
  return JAM.call(this._start, this, [from$$3, to$$4], JAM.policy.p1);
}
function v188() {
  var v451 = this.from;
  for (p in v451) {
    var v449 = this.now;
    var v450 = p;
    var v1094 = this.from;
    var v885 = v1094[p];
    var v1095 = this.to;
    var v886 = v1095[p];
    var v1250 = JAM.call(this.compute, this, [v885, v886], JAM.policy.p1);
    JAM.set(v449, v450, v1250);
  }
  return;
}
function v187(elm$$46, options$$9) {
  this.parent();
  var v1251 = JAM.call(AJS.$, AJS, [elm$$46], JAM.policy.p1);
  this.elm = v1251;
  JAM.call(this.setOptions, this, [options$$9], JAM.policy.p1);
  this.now = {};
  return;
}
function v186() {
  var v452 = this.elm;
  var v453 = this.property;
  var v454 = this.now;
  JAM.call(this.setStyle, this, [v452, v453, v454], JAM.policy.p1);
  return;
}
function v185(elm$$45, property$$3, options$$8) {
  this.parent();
  this.elm = elm$$45;
  JAM.call(this.setOptions, this, [options$$8], JAM.policy.p1);
  this.property = property$$3;
  return;
}
function v184(elm$$44, property$$2, val$$4) {
  var v887 = this.property;
  var v455 = v887 == "opacity";
  if (v455) {
    JAM.call(AJS.setOpacity, AJS, [elm$$44, val$$4], JAM.policy.p1);
  } else {
    JAM.call(AJS.setStyle, AJS, [elm$$44, property$$2, val$$4], JAM.policy.p1);
  }
  return;
}
function v183(to$$3) {
  this.now = to$$3;
  this.increase();
  return this;
}
function v182(from$$2, to$$2) {
  return JAM.call(this._start, this, [from$$2, to$$2], JAM.policy.p1);
}
function v181(from$$1, to$$1) {
  var v1096 = this.options;
  var v888 = v1096.wait;
  var v456 = !v888;
  if (v456) {
    this.clearTimer();
  }
  var v457 = this.timer;
  if (v457) {
    return;
  }
  var v1097 = this.options;
  var v889 = v1097.onStart;
  var v890 = this.elm;
  var v458 = JAM.call(AJS.$p, AJS, [v889, v890], JAM.policy.p1);
  JAM.call(setTimeout, null, [v458, 10]);
  this.from = from$$1;
  this.to = to$$1;
  var v459 = new Date;
  var v1252 = v459.getTime();
  this.time = v1252;
  var v460 = this.step;
  var v1193 = this.options;
  var v1098 = v1193.fps;
  var v891 = 1E3 / v1098;
  var v461 = JAM.call(Math.round, Math, [v891], JAM.policy.p1);
  var v1253 = JAM.call(setInterval, null, [v460, v461]);
  this.timer = v1253;
  return this;
}
function v180() {
  var v462 = this.timer;
  clearInterval(v462);
  this.timer = null;
  return this;
}
function v179(from, to) {
  var change = to - from;
  var v463 = this.options;
  var v464 = this.cTime;
  var v892 = this.options;
  var v465 = v892.duration;
  return JAM.call(v463.transition, v463, [v464, from, change, v465], JAM.policy.p1);
}
function v178() {
  var v466 = this.from;
  var v467 = this.to;
  var v1254 = JAM.call(this.compute, this, [v466, v467], JAM.policy.p1);
  this.now = v1254;
  return;
}
function v177() {
  var v468 = new Date;
  var time = v468.getTime();
  var v1099 = this.time;
  var v1194 = this.options;
  var v1100 = v1194.duration;
  var v893 = v1099 + v1100;
  var v471 = time < v893;
  if (v471) {
    var v469 = this.time;
    this.cTime = time - v469;
    this.setNow();
  } else {
    var v1101 = this.options;
    var v894 = v1101.onComplete;
    var v1102 = this.elm;
    var v895 = [v1102];
    var v470 = JAM.call(AJS.$b, AJS, [v894, this, v895], JAM.policy.p1);
    JAM.call(setTimeout, null, [v470, 10]);
    this.clearTimer();
    this.now = this.to;
  }
  this.increase();
  return;
}
function v176(options$$7) {
  var v472 = this.options;
  JAM.call(AJS.update, AJS, [v472, options$$7], JAM.policy.p1);
  return;
}
function v175(options$$6) {
  function v174() {
    return;
  }
  function v173() {
    return;
  }
  var v1103 = AJS.fx;
  var v896 = v1103.Transitions;
  var v473 = v896.sineInOut;
  this.options = {onStart:v173, onComplete:v174, transition:v473, duration:500, wait:true, fps:50};
  var v474 = this.options;
  JAM.call(AJS.update, AJS, [v474, options$$6], JAM.policy.p1);
  JAM.call(AJS.bindMethods, AJS, [this], JAM.policy.p1);
  return;
}
function v172(elm$$43, options$$5) {
  var v897 = AJS.fx;
  var v475 = v897.Style;
  var s$$5 = JAM.new(v475, [elm$$43, "height", options$$5]);
  var v476 = options$$5.from;
  var v477 = options$$5.to;
  return JAM.call(s$$5.custom, s$$5, [v476, v477], JAM.policy.p1);
}
function v171(elm$$42, options$$4) {
  var v898 = AJS.fx;
  var v478 = v898.Style;
  var s$$4 = JAM.new(v478, [elm$$42, "width", options$$4]);
  var v479 = options$$4.from;
  var v480 = options$$4.to;
  return JAM.call(s$$4.custom, s$$4, [v479, v480], JAM.policy.p1);
}
function v170(elm$$41, options$$3) {
  options$$3 = options$$3 || {};
  var v899 = options$$3.from;
  var v481 = !v899;
  if (v481) {
    options$$3.from = 1;
  }
  var v900 = options$$3.to;
  var v482 = !v900;
  if (v482) {
    options$$3.to = 0;
  }
  options$$3.duration = 300;
  var v901 = AJS.fx;
  var v483 = v901.Style;
  var s$$3 = JAM.new(v483, [elm$$41, "opacity", options$$3]);
  var v484 = options$$3.from;
  var v485 = options$$3.to;
  return JAM.call(s$$3.custom, s$$3, [v484, v485], JAM.policy.p1);
}
function v169(elm$$40, options$$2) {
  options$$2 = options$$2 || {};
  var v902 = options$$2.from;
  var v486 = !v902;
  if (v486) {
    options$$2.from = 0;
    JAM.call(AJS.setOpacity, AJS, [elm$$40, 0], JAM.policy.p1);
  }
  var v903 = options$$2.to;
  var v487 = !v903;
  if (v487) {
    options$$2.to = 1;
  }
  var v904 = AJS.fx;
  var v488 = v904.Style;
  var s$$2 = JAM.new(v488, [elm$$40, "opacity", options$$2]);
  var v489 = options$$2.from;
  var v490 = options$$2.to;
  return JAM.call(s$$2.custom, s$$2, [v489, v490], JAM.policy.p1);
}
function v168(elm$$39, options$$1) {
  function v167() {
    var v905 = this.now;
    var v493 = v905 == 7;
    if (v493) {
      var v491 = elm$$39.style;
      v491.backgroundColor = "#fff";
    } else {
      var v492 = elm$$39.style;
      var v1195 = AJS.fx;
      var v1104 = v1195._shades;
      var v1196 = this.now;
      var v1105 = JAM.call(Math.floor, Math, [v1196], JAM.policy.p1);
      var v906 = v1104[v1105];
      v492.backgroundColor = "#" + v906;
    }
    return;
  }
  var v907 = AJS.fx;
  var v494 = v907.Base;
  var base$$1 = new v494;
  var v495 = base$$1;
  var v1255 = JAM.call(AJS.$, AJS, [elm$$39], JAM.policy.p1);
  v495.elm = v1255;
  var v496 = base$$1.options;
  v496.duration = 600;
  JAM.call(base$$1.setOptions, base$$1, [options$$1], JAM.policy.p1);
  var v497 = {increase:v167};
  JAM.call(AJS.update, AJS, [base$$1, v497], JAM.policy.p1);
  return JAM.call(base$$1.custom, base$$1, [6, 0]);
}
function v166(data$$21) {
  var req$$6 = this.req;
  var http_method = this.http_method;
  var http_url = this.http_url;
  var v503 = http_method == "POST";
  if (v503) {
    JAM.call(req$$6.open, req$$6, [http_method, http_url, true], JAM.policy.p1);
    var v498 = this._onreadystatechange;
    var v1256 = JAM.call(AJS.$b, AJS, [v498, this], JAM.policy.p1);
    JAM.set(req$$6, "onreadystatechange", v1256);
    req$$6.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var v501 = JAM.call(AJS.isObject, AJS, [data$$21], JAM.policy.p1);
    if (v501) {
      var v499 = JAM.call(AJS.encodeArguments, AJS, [data$$21], JAM.policy.p1);
      JAM.call(req$$6.send, req$$6, [v499], JAM.policy.p1);
    } else {
      var v500 = JAM.call(AJS.isDefined, AJS, [data$$21], JAM.policy.p1);
      if (v500) {
        JAM.call(req$$6.send, req$$6, [data$$21], JAM.policy.p1);
      } else {
        req$$6.send("");
      }
    }
  } else {
    req$$6.open("GET", http_url, true);
    var v502 = this._onreadystatechange;
    var v1257 = JAM.call(AJS.$b, AJS, [v502, this], JAM.policy.p1);
    JAM.set(req$$6, "onreadystatechange", v1257);
    req$$6.send(null);
  }
  return;
}
function v165() {
  var req$$5 = this.req;
  var d$$2 = this;
  var v908 = req$$5.readyState;
  var v505 = v908 == 4;
  if (v505) {
    var status = "";
    try {
      status = req$$5.status;
    } catch (e$$16) {
    }
    var v1106 = status == 200;
    var v1197 = !v1106;
    if (v1197) {
      v1106 = status == 304;
    }
    var v909 = v1106;
    var v1108 = !v909;
    if (v1108) {
      var v1107 = req$$5.responseText;
      v909 = v1107 == null;
    }
    var v504 = v909;
    if (v504) {
      this.callback();
    } else {
      this.errback();
    }
  }
  return;
}
function v164(fn1, fn2) {
  JAM.call(this.addCallback, this, [fn1], JAM.policy.p1);
  JAM.call(this.addErrback, this, [fn2], JAM.policy.p1);
  return;
}
function v163() {
  var v506 = this.req;
  v506.abort();
  return;
}
function v162(fn$$15) {
  var v507 = this.callbacks;
  JAM.call(v507.unshift, v507, [fn$$15], JAM.policy.p1);
  return;
}
function v161(fn$$14) {
  var v508 = this.errbacks;
  JAM.call(v508.unshift, v508, [fn$$14], JAM.policy.p1);
  return;
}
function v160() {
  var v1109 = this.errbacks;
  var v910 = v1109.length;
  var v514 = v910 == 0;
  if (v514) {
    var v513 = AJS.ajaxErrorHandler;
    if (v513) {
      var v509 = req.responseText;
      JAM.call(AJS.ajaxErrorHandler, AJS, [v509, req], JAM.policy.p1);
    } else {
      var v911 = this.req;
      var v510 = v911.responseText;
      var txt$$1 = v510.substring(0, 200);
      var v912 = JAM.call(AJS.strip, AJS, [txt$$1], JAM.policy.p1);
      if (v912) {
        var v1110 = txt$$1.indexOf("<html");
        v912 = v1110 == -1;
      }
      var v512 = v912;
      if (v512) {
        var v511 = "Error encountered:\n" + txt$$1;
        alert(v511);
      }
    }
  }
  var v517 = AJS.generalErrorback;
  if (v517) {
    var v515 = this.req;
    var result$$1 = JAM.call(AJS.generalErrorback, AJS, [v515], JAM.policy.p1);
    var v516 = !result$$1;
    if (v516) {
      return;
    }
  }
  var v518 = this.req;
  var v519 = this.errbacks;
  JAM.call(this.excCallbackSeq, this, [v518, v519], JAM.policy.p1);
  return;
}
function v159() {
  var v520 = this.req;
  var v521 = this.callbacks;
  JAM.call(this.excCallbackSeq, this, [v520, v521], JAM.policy.p1);
  return;
}
function v158(req$$4, list$$10) {
  var data$$20 = req$$4.responseText;
  var v523 = AJS.generalCallback;
  if (v523) {
    data$$20 = JAM.call(AJS.generalCallback, AJS, [req$$4, list$$10], JAM.policy.p1);
    var v522 = !data$$20;
    if (v522) {
      return;
    }
  }
  var v913 = list$$10.length;
  var v525 = v913 > 0;
  for (;v525;) {
    var fn$$13 = list$$10.pop();
    var new_data = JAM.call(fn$$13, null, [data$$20, req$$4], JAM.policy.p1);
    if (new_data) {
      data$$20 = new_data;
    } else {
      var v524 = new_data == false;
      if (v524) {
        break;
      }
    }
    var v914 = list$$10.length;
    v525 = v914 > 0;
  }
  return;
}
function v157(req$$3, method$$2, url$$4) {
  this.callbacks = [];
  this.errbacks = [];
  this.req = req$$3;
  this.http_method = method$$2;
  this.http_url = url$$4;
  return;
}
function v156(cur$$1, prev$$1) {
  function v155() {
    this.parent = prev$$1;
    return JAM.call(cur$$1.apply, cur$$1, [this, arguments], JAM.policy.p1);
  }
  return v155;
}
function v154(members$$2) {
  var v526 = this.prototype;
  JAM.call(AJS.update, AJS, [v526, members$$2], JAM.policy.p1);
  return;
}
function v153(members$$1) {
  var parent$$2 = JAM.new(this, ["no_init"]);
  for (k in members$$1) {
    var prev = parent$$2[k];
    var cur = members$$1[k];
    var v1111 = prev;
    if (v1111) {
      v1111 = prev != cur;
    }
    var v915 = v1111;
    if (v915) {
      var v1112 = typeof cur;
      v915 = v1112 == "function";
    }
    var v527 = v915;
    if (v527) {
      cur = JAM.call(this._parentize, this, [cur, prev], JAM.policy.p1);
    }
    JAM.set(parent$$2, k, cur);
  }
  var v528 = AJS.Class;
  return JAM.new(v528, [parent$$2]);
}
function v152(members) {
  function fn$$12() {
    var v916 = arguments[0];
    var v530 = v916 != "no_init";
    if (v530) {
      var v529 = this.init;
      return JAM.call(v529.apply, v529, [this, arguments], JAM.policy.p1);
    }
    return;
  }
  fn$$12.prototype = members;
  var v917 = AJS.Class;
  var v531 = v917.prototype;
  JAM.call(AJS.update, AJS, [fn$$12, v531], JAM.policy.p1);
  return fn$$12;
}
function v151(str$$9, limit, delim$$1) {
  var v918 = str$$9.length;
  var v534 = v918 > limit;
  if (v534) {
    var v532 = str$$9.substring(0, limit);
    var v533 = delim$$1 || "...";
    return v532 + v533;
  }
  return str$$9;
}
function v150(str$$8) {
  var v535 = str$$8.replace(/^\s+/, "");
  return v535.replace(/\s+$/g, "");
}
function v149(export_scope, fn$$11) {
  JAM.call(fn$$11.apply, fn$$11, [export_scope, []], JAM.policy.p1);
  return;
}
function v148(o$$7) {
  try {
    var v538 = window._firebug;
    if (v538) {
      var v536 = window._firebug;
      JAM.call(v536.log, v536, [o$$7], JAM.policy.p1);
    } else {
      var v537 = window.console;
      if (v537) {
        JAM.call(console.log, console, [o$$7], JAM.policy.p1);
      }
    }
  } catch (e$$15) {
  }
  return;
}
function v147(scope$$3) {
  scope$$3 = scope$$3 || window;
  for (e in AJS) {
    var v539 = e != "addEventListener";
    if (v539) {
      JAM.set(scope$$3, e, AJS[e]);
    }
  }
  return;
}
function v146(o$$6) {
  var str_repr = String(o$$6);
  var v540 = str_repr.indexOf(" Object");
  return v540 != -1;
}
function v145(obj$$22) {
  var v541 = typeof obj$$22;
  return v541 == "function";
}
function v144(obj$$21) {
  var v542 = typeof obj$$21;
  return v542 == "object";
}
function v143(obj$$20) {
  var v543 = typeof obj$$20;
  return v543 == "number";
}
function v142(obj$$19) {
  var v544 = typeof obj$$19;
  return v544 == "string";
}
function v141(obj$$18) {
  try {
    return obj$$18 instanceof Array;
  } catch (e$$14) {
    return false;
  }
  return;
}
function v140(o$$5) {
  var v545 = o$$5 != "undefined";
  if (v545) {
    v545 = o$$5 != null;
  }
  return v545;
}
function v139(str$$7) {
  var v1113 = JAM.call(AJS.isDefined, AJS, [str$$7], JAM.policy.p1);
  if (v1113) {
    v1113 = str$$7.toString();
  }
  var v919 = v1113;
  var v1114 = !v919;
  if (v1114) {
    v919 = "";
  }
  var v546 = v919;
  var result = decodeURIComponent(v546);
  return result.replace(/\+/g, " ");
}
function v138(str$$6) {
  var v1115 = JAM.call(AJS.isDefined, AJS, [str$$6], JAM.policy.p1);
  if (v1115) {
    v1115 = str$$6.toString();
  }
  var v920 = v1115;
  var v1116 = !v920;
  if (v1116) {
    v920 = "";
  }
  var v547 = v920;
  return encodeURIComponent(v547);
}
function v137(obj$$17) {
  var rval$$1 = [];
  var prop$$6;
  for (prop$$6 in obj$$17) {
    var v548 = obj$$17[prop$$6];
    JAM.call(rval$$1.push, rval$$1, [v548], JAM.policy.p1);
  }
  return rval$$1;
}
function v136(obj$$16) {
  var rval = [];
  var prop$$5;
  for (prop$$5 in obj$$16) {
    JAM.call(rval.push, rval, [prop$$5], JAM.policy.p1);
  }
  return rval;
}
function v135(name$$32, fn$$10, interval) {
  var v549 = AJS._reccruing_tos;
  var current = v549[name$$32];
  if (current) {
    clearTimeout(current);
  }
  var v550 = AJS._reccruing_tos;
  var v1258 = JAM.call(setTimeout, null, [fn$$10, interval]);
  v550[name$$32] = v1258;
  return;
}
function v134(fn$$9, extra_args$$1) {
  function v133() {
    try {
      var v551 = JAM.call(AJS.$FA, AJS, [arguments]);
      var args$$14 = JAM.call(v551.concat, v551, [extra_args$$1], JAM.policy.p1);
      return JAM.call(fn$$9.apply, fn$$9, [scope$$2, args$$14], JAM.policy.p1);
    } catch (e$$13) {
    }
    return;
  }
  extra_args$$1 = JAM.call(AJS.$A, AJS, [extra_args$$1], JAM.policy.p1);
  var v552 = fn$$9._cscope;
  var v921 = !v552;
  if (v921) {
    v552 = window;
  }
  var scope$$2 = v552;
  return v133;
}
function v132(elm$$38, type$$30, fn$$8) {
  function r_fn() {
    JAM.call(AJS.removeEventListener, AJS, [elm$$38, type$$30, r_fn], JAM.policy.p1);
    JAM.call(fn$$8, null, [arguments]);
    return;
  }
  return r_fn;
}
function v131(e$$12) {
  var v554 = AJS.isIe();
  if (v554) {
    var v553 = window.event;
    v553.returnValue = false;
  } else {
    e$$12.preventDefault();
  }
  return;
}
function v130(self$$1) {
  var k$$2;
  for (k$$2 in self$$1) {
    var func$$4 = self$$1[k$$2];
    var v922 = typeof func$$4;
    var v555 = v922 == "function";
    if (v555) {
      var v1259 = JAM.call(AJS.$b, AJS, [func$$4, self$$1], JAM.policy.p1);
      JAM.set(self$$1, k$$2, v1259);
    }
  }
  return;
}
function v129(fn$$7, scope$$1, extra_args) {
  fn$$7._cscope = scope$$1;
  return JAM.call(AJS._getRealScope, AJS, [fn$$7, extra_args], JAM.policy.p1);
}
function v128(elms$$4, type$$29, handler$$7) {
  function v127(elm$$37) {
    var v923 = elm$$37.events;
    if (v923) {
      var v1117 = elm$$37.events;
      v923 = v1117[type$$29];
    }
    var v558 = v923;
    if (v558) {
      var v924 = elm$$37.events;
      var v556 = v924[type$$29];
      var v557 = handler$$7.$f_guid;
      delete v556[v557];
    }
    return;
  }
  elms$$4 = JAM.call(AJS.$A, AJS, [elms$$4], JAM.policy.p1);
  JAM.call(map, null, [elms$$4, v127], JAM.policy.p1);
  return;
}
function v126(event$$1) {
  function v125(handler$$6) {
    var v925 = me$$1.events;
    var v926 = event$$1.type;
    var v559 = v925[v926];
    var v560 = handler$$6.$f_guid;
    delete v559[v560];
    return;
  }
  var me$$1 = this;
  var v561 = event$$1;
  var v927 = !v561;
  if (v927) {
    v561 = window.event;
  }
  event$$1 = v561;
  var v562 = !event$$1;
  if (v562) {
    return;
  }
  var v1118 = event$$1.ctrl;
  var v928 = !v1118;
  if (v928) {
    var v1198 = event$$1.type;
    var v1119 = v1198.indexOf("key");
    v928 = v1119 != -1;
  }
  var v563 = v928;
  if (v563) {
    JAM.call(AJS.setEventKey, AJS, [event$$1], JAM.policy.p1);
  }
  var v564 = this.events;
  var v565 = event$$1.type;
  var handlers$$1 = v564[v565];
  var handlers_to_delete = [];
  var res$$1 = true;
  var i$$16;
  for (i$$16 in handlers$$1) {
    var handler$$5 = this.$$handleEvent = handlers$$1[i$$16];
    var v929 = AJS.handleEvent;
    var v566 = handler$$5 == v929;
    if (v566) {
      continue;
    }
    res$$1 = JAM.call(handler$$5, null, [event$$1], JAM.policy.p1);
    var v567 = handler$$5.listen_once;
    if (v567) {
      JAM.call(handlers_to_delete.push, handlers_to_delete, [handler$$5], JAM.policy.p1);
    }
  }
  var v930 = handlers_to_delete.length;
  var v568 = v930 > 0;
  if (v568) {
    JAM.call(AJS.map, AJS, [handlers_to_delete, v125], JAM.policy.p1);
  }
  return res$$1;
}
function v124(elms$$3, types, handler$$4, listen_once$$1) {
  function v123(elm$$36) {
    function v122(type$$28) {
      var v569 = elm$$36.events;
      var handlers = v569[type$$28];
      var v931 = elm$$36 == window;
      if (v931) {
        v931 = type$$28 == "load";
      }
      var v579 = v931;
      if (v579) {
        var v570 = AJS.ready_list;
        JAM.call(v570.push, v570, [handler$$4], JAM.policy.p1);
      } else {
        var v571 = type$$28 == "lazy_load";
        if (v571) {
          type$$28 = "load";
        }
        var v575 = !handlers;
        if (v575) {
          var v572 = elm$$36.events;
          handlers = JAM.set(v572, type$$28, {});
          var v932 = "on" + type$$28;
          var v574 = elm$$36[v932];
          if (v574) {
            var v573 = "on" + type$$28;
            handlers[0] = elm$$36[v573];
          }
        }
        var v933 = elm$$36._wipe_guid;
        var v576 = !v933;
        if (v576) {
          elm$$36._wipe_guid = AJS._wipe_guid;
          var v934 = AJS._wipe_guid;
          AJS._wipe_guid = v934 + 1;
        }
        var v577 = handler$$4.$f_guid;
        JAM.set(handlers, v577, handler$$4);
        var v578 = AJS.handleEvent;
        JAM.call(elm$$36.addEventListener, elm$$36, [type$$28, v578, false], JAM.policy.p1);
      }
      return;
    }
    if (listen_once$$1) {
      handler$$4.listen_once = true;
    }
    var v935 = handler$$4.$f_guid;
    var v580 = !v935;
    if (v580) {
      handler$$4.$f_guid = AJS._f_guid;
      var v936 = AJS._f_guid;
      AJS._f_guid = v936 + 1;
    }
    var v937 = elm$$36.events;
    var v581 = !v937;
    if (v581) {
      elm$$36.events = {};
    }
    JAM.call(AJS.map, AJS, [types, v122], JAM.policy.p1);
    elm$$36 = null;
    return;
  }
  elms$$3 = JAM.call(AJS.$A, AJS, [elms$$3], JAM.policy.p1);
  types = JAM.call(AJS.$A, AJS, [types], JAM.policy.p1);
  JAM.call(AJS.map, AJS, [elms$$3, v123], JAM.policy.p1);
  return;
}
function v121(fn$$5) {
  function v120(fn$$6) {
    JAM.call(fn$$6.call, fn$$6, [window], JAM.policy.p1);
    return;
  }
  var v582 = AJS.is_ready;
  if (v582) {
    return;
  }
  AJS.is_ready = true;
  var rt = AJS.ready_list;
  JAM.call(AJS.map, AJS, [rt, v120], JAM.policy.p1);
  AJS.ready_list = [];
  return;
}
function v119() {
  function v118() {
    var v583 = AJS.is_ready;
    if (v583) {
      return;
    }
    try {
      var v584 = document.documentElement;
      JAM.call(v584.doScroll, v584, ["left"]);
    } catch (error$$1) {
      var v585 = arguments.callee;
      JAM.call(setTimeout, null, [v585, 0]);
      return;
    }
    AJS.ready();
    return;
  }
  function v117() {
    var v938 = document.readyState;
    var v587 = v938 === "complete";
    if (v587) {
      var v586 = arguments.callee;
      JAM.call(document.detachEvent, document, ["onreadystatechange", v586]);
      AJS.ready();
    }
    return;
  }
  function v116() {
    var v588 = arguments.callee;
    JAM.call(document.removeEventListener, document, ["DOMContentLoaded", v588, false]);
    AJS.ready();
    return;
  }
  var v589 = AJS.ready_bound;
  if (v589) {
    return;
  }
  AJS.ready_bound = true;
  var v592 = document.addEventListener;
  if (v592) {
    document.addEventListener("DOMContentLoaded", v116, false);
  } else {
    var v591 = document.attachEvent;
    if (v591) {
      JAM.call(document.attachEvent, document, ["onreadystatechange", v117]);
      var v1120 = document.documentElement;
      var v939 = v1120.doScroll;
      if (v939) {
        var v1121 = window.top;
        v939 = window == v1121;
      }
      var v590 = v939;
      if (v590) {
        v118();
      }
    }
  }
  var v593 = AJS.ready;
  JAM.call(AJS.AEV, AJS, [window, "load", v593], JAM.policy.p1);
  return;
}
function v115(elms$$2, type$$27, handler$$3, listen_once) {
  function v114(elm$$35) {
    var v595 = elm$$35.events;
    if (v595) {
      var v594 = elm$$35.events;
      JAM.set(v594, type$$27, {});
    }
    return;
  }
  elms$$2 = JAM.call(AJS.$A, AJS, [elms$$2], JAM.policy.p1);
  JAM.call(AJS.map, AJS, [elms$$2, v114], JAM.policy.p1);
  return JAM.call(AJS.AEV, AJS, [elms$$2, type$$27, handler$$3, listen_once], JAM.policy.p1);
}
function v113(e$$11) {
  var v596 = !e$$11;
  if (v596) {
    e$$11 = window.event;
  }
  var v597;
  var v940 = e$$11.keyCode;
  if (v940) {
    v597 = e$$11.keyCode;
  } else {
    v597 = e$$11.charCode;
  }
  e$$11.key = v597;
  e$$11.ctrl = e$$11.ctrlKey;
  e$$11.alt = e$$11.altKey;
  e$$11.meta = e$$11.metaKey;
  e$$11.shift = e$$11.shiftKey;
  return;
}
function v112(e$$10) {
  var v1122 = e$$10;
  if (v1122) {
    var v1199 = e$$10.type;
    v1122 = !v1199;
  }
  var v941 = v1122;
  if (v941) {
    var v1123 = e$$10.keyCode;
    v941 = !v1123;
  }
  var v598 = v941;
  if (v598) {
    return e$$10;
  }
  var targ;
  var v599 = !e$$10;
  if (v599) {
    e$$10 = window.event;
  }
  var v601 = e$$10.target;
  if (v601) {
    targ = e$$10.target;
  } else {
    var v600 = e$$10.srcElement;
    if (v600) {
      targ = e$$10.srcElement;
    }
  }
  var v942 = targ;
  if (v942) {
    var v1124 = targ.nodeType;
    v942 = v1124 == 3;
  }
  var v602 = v942;
  if (v602) {
    targ = targ.parentNode;
  }
  return targ;
}
function v111(elm1, elm2) {
  function getSign(v$$1) {
    var v604 = v$$1 > 0;
    if (v604) {
      return "+";
    } else {
      var v603 = v$$1 < 0;
      if (v603) {
        return "-";
      } else {
        return 0;
      }
    }
    return;
  }
  var pos_elm1 = JAM.call(AJS.absolutePosition, AJS, [elm1], JAM.policy.p1);
  var pos_elm2 = JAM.call(AJS.absolutePosition, AJS, [elm2], JAM.policy.p1);
  var top1 = pos_elm1.y;
  var left1 = pos_elm1.x;
  var v605 = elm1.offsetWidth;
  var right1 = left1 + v605;
  var v606 = elm1.offsetHeight;
  var bottom1 = top1 + v606;
  var top2 = pos_elm2.y;
  var left2 = pos_elm2.x;
  var v607 = elm2.offsetWidth;
  var right2 = left2 + v607;
  var v608 = elm2.offsetHeight;
  var bottom2 = top2 + v608;
  var v1200 = top1 - bottom2;
  var v1125 = getSign(v1200);
  var v1201 = bottom1 - top2;
  var v1126 = getSign(v1201);
  var v943 = v1125 != v1126;
  if (v943) {
    var v1202 = left1 - right2;
    var v1127 = getSign(v1202);
    var v1203 = right1 - left2;
    var v1128 = getSign(v1203);
    v943 = v1127 != v1128;
  }
  var v609 = v943;
  if (v609) {
    return true;
  }
  return false;
}
function v110(doc) {
  doc = doc || document;
  var win_w;
  var win_h;
  var v616 = self.innerHeight;
  if (v616) {
    win_w = self.innerWidth;
    win_h = self.innerHeight;
  } else {
    var v944 = doc.documentElement;
    if (v944) {
      var v1129 = doc.documentElement;
      v944 = v1129.clientHeight;
    }
    var v615 = v944;
    if (v615) {
      var v610 = doc.documentElement;
      win_w = v610.clientWidth;
      var v611 = doc.documentElement;
      win_h = v611.clientHeight;
    } else {
      var v614 = doc.body;
      if (v614) {
        var v612 = doc.body;
        win_w = v612.clientWidth;
        var v613 = doc.body;
        win_h = v613.clientHeight;
      }
    }
  }
  return{"w":win_w, "h":win_h};
}
function v109(elm$$34) {
  var v617 = !elm$$34;
  if (v617) {
    return{x:0, y:0};
  }
  var v623 = elm$$34.scrollLeft;
  if (v623) {
    var v618 = elm$$34.scrollLeft;
    var v619 = elm$$34.scrollTop;
    return{x:v618, y:v619};
  } else {
    var v622 = elm$$34.clientX;
    if (v622) {
      var v620 = elm$$34.clientX;
      var v621 = elm$$34.clientY;
      return{x:v620, y:v621};
    }
  }
  var v624 = elm$$34.offsetLeft;
  var v625 = elm$$34.offsetTop;
  var posObj = {"x":v624, "y":v625};
  var v626 = elm$$34.offsetParent;
  if (v626) {
    var next = elm$$34.offsetParent;
    for (;next;) {
      var v945 = posObj.x;
      var v946 = next.offsetLeft;
      posObj.x = v945 + v946;
      var v947 = posObj.y;
      var v948 = next.offsetTop;
      posObj.y = v947 + v948;
      next = next.offsetParent;
    }
  }
  var v949 = AJS.isSafari();
  if (v949) {
    var v1204 = elm$$34.style;
    var v1130 = v1204.position;
    v949 = v1130 == "absolute";
  }
  var v627 = v949;
  if (v627) {
    var v950 = posObj.x;
    var v1131 = document.body;
    var v951 = v1131.offsetLeft;
    posObj.x = v950 - v951;
    var v952 = posObj.y;
    var v1132 = document.body;
    var v953 = v1132.offsetTop;
    posObj.y = v952 - v953;
  }
  return posObj;
}
function v108() {
  var t;
  var v954 = document.documentElement;
  if (v954) {
    var v1133 = document.documentElement;
    v954 = v1133.scrollTop;
  }
  var v631 = v954;
  if (v631) {
    var v628 = document.documentElement;
    t = v628.scrollTop;
  } else {
    var v630 = document.body;
    if (v630) {
      var v629 = document.body;
      t = v629.scrollTop;
    }
  }
  return t;
}
function v107(e$$9) {
  var posx = 0;
  var posy = 0;
  var v632 = !e$$9;
  if (v632) {
    e$$9 = window.event;
  }
  var v955 = e$$9.pageX;
  var v1134 = !v955;
  if (v1134) {
    v955 = e$$9.pageY;
  }
  var v638 = v955;
  if (v638) {
    posx = e$$9.pageX;
    posy = e$$9.pageY;
  } else {
    var v956 = e$$9.clientX;
    var v1135 = !v956;
    if (v1135) {
      v956 = e$$9.clientY;
    }
    var v637 = v956;
    if (v637) {
      var v957 = e$$9.clientX;
      var v1136 = document.body;
      var v958 = v1136.scrollLeft;
      var v633 = v957 + v958;
      var v959 = document.documentElement;
      var v634 = v959.scrollLeft;
      posx = v633 + v634;
      var v960 = e$$9.clientY;
      var v1137 = document.body;
      var v961 = v1137.scrollTop;
      var v635 = v960 + v961;
      var v962 = document.documentElement;
      var v636 = v962.scrollTop;
      posy = v635 + v636;
    }
  }
  return{x:posx, y:posy};
}
function v106(date$$1) {
  function leadingZero(nr) {
    var v639 = nr < 10;
    if (v639) {
      nr = "0" + nr;
    }
    return nr;
  }
  var year$$1 = date$$1.getUTCFullYear();
  var dd = date$$1.getUTCDate();
  var v640 = date$$1.getUTCMonth();
  var mm = v640 + 1;
  var v1235 = '"' + year$$1;
  var v1234 = v1235 + "-";
  var v1233 = v1234 + mm;
  var v1232 = v1233 + "-";
  var v1229 = v1232 + dd;
  var v1226 = v1229 + "T";
  var v1230 = date$$1.getUTCHours();
  var v1227 = leadingZero(v1230);
  var v1219 = v1226 + v1227;
  var v1205 = v1219 + ":";
  var v1220 = date$$1.getUTCMinutes();
  var v1206 = leadingZero(v1220);
  var v1138 = v1205 + v1206;
  var v963 = v1138 + ":";
  var v1139 = date$$1.getUTCSeconds();
  var v964 = leadingZero(v1139);
  var v641 = v963 + v964;
  return v641 + '"';
}
function v105(o$$4) {
  var v1231 = o$$4.replace(/(["\\])/g, "\\$1");
  var v1228 = '"' + v1231;
  var v1221 = v1228 + '"';
  var v1207 = v1221.replace(/[\f]/g, "\\f");
  var v1140 = v1207.replace(/[\b]/g, "\\b");
  var v965 = v1140.replace(/[\n]/g, "\\n");
  var v642 = v965.replace(/[\t]/g, "\\t");
  return v642.replace(/[\r]/g, "\\r");
}
function v104(data$$19) {
  var post_data = [];
  for (k in data$$19) {
    var v966 = k + "=";
    var v1141 = data$$19[k];
    var v967 = JAM.call(AJS.urlencode, AJS, [v1141], JAM.policy.p1);
    var v643 = v966 + v967;
    JAM.call(post_data.push, post_data, [v643], JAM.policy.p1);
  }
  return JAM.call(post_data.join, post_data, ["&"]);
}
function v103(html$$2) {
  var script_data = html$$2.match(/<script.*?>((\n|\r|.)*?)<\/script>/g);
  var v646 = script_data != null;
  if (v646) {
    var i$$15 = 0;
    var v968 = script_data.length;
    var v645 = i$$15 < v968;
    for (;v645;) {
      var v644 = script_data[i$$15];
      var script_only = v644.replace(/<script.*?>/g, "");
      script_only = script_only.replace(/<\/script>/g, "");
      if (JAM.isEval(eval)) {
        eval("introspect(JAM.policy.pFull) { " + script_only + " }");
      } else {
        JAM.call(eval, null, [script_only]);
      }
      i$$15++;
      var v969 = script_data.length;
      v645 = i$$15 < v969;
    }
  }
  return;
}
function v102(txt) {
  try {
    var v970 = "(" + txt;
    var v647 = v970 + ")";
    if (JAM.isEval(eval)) {
      return eval("introspect(JAM.policy.pFull) { " + v647 + " }");
    } else {
      return JAM.call(eval, null, [v647]);
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
function v101(url$$3, type$$26, debug) {
  function eval_req(data$$18, req$$2) {
    var text$$8 = req$$2.responseText;
    var v648 = text$$8 == "Error";
    if (v648) {
      JAM.call(d$$1.errback, d$$1, [req$$2], JAM.policy.p1);
    } else {
      return JAM.call(AJS.evalTxt, AJS, [text$$8], JAM.policy.p1);
    }
    return;
  }
  var d$$1 = JAM.call(AJS.getRequest, AJS, [url$$3, type$$26], JAM.policy.p1);
  JAM.call(d$$1.addCallback, d$$1, [eval_req], JAM.policy.p1);
  return d$$1;
}
function v100(o$$3) {
  var objtype = typeof o$$3;
  var v651 = objtype == "undefined";
  if (v651) {
    return "null";
  } else {
    var v971 = objtype == "number";
    var v1142 = !v971;
    if (v1142) {
      v971 = objtype == "boolean";
    }
    var v650 = v971;
    if (v650) {
      return o$$3 + "";
    } else {
      var v649 = o$$3 === null;
      if (v649) {
        return "null";
      }
    }
  }
  var v652 = objtype == "string";
  if (v652) {
    return JAM.call(AJS._reprString, AJS, [o$$3], JAM.policy.p1);
  }
  var v972 = objtype == "object";
  if (v972) {
    v972 = o$$3.getFullYear;
  }
  var v653 = v972;
  if (v653) {
    return JAM.call(AJS._reprDate, AJS, [o$$3], JAM.policy.p1);
  }
  var me = arguments.callee;
  var v973 = objtype != "function";
  if (v973) {
    var v1208 = o$$3.length;
    var v1143 = typeof v1208;
    v973 = v1143 == "number";
  }
  var v658 = v973;
  if (v658) {
    var res = [];
    var i$$14 = 0;
    var v974 = o$$3.length;
    var v656 = i$$14 < v974;
    for (;v656;) {
      var v654 = o$$3[i$$14];
      var val$$3 = JAM.call(me, null, [v654], JAM.policy.p1);
      var v975 = typeof val$$3;
      var v655 = v975 != "string";
      if (v655) {
        val$$3 = "undefined";
      }
      JAM.call(res.push, res, [val$$3], JAM.policy.p1);
      i$$14++;
      var v976 = o$$3.length;
      v656 = i$$14 < v976;
    }
    var v977 = JAM.call(res.join, res, [","]);
    var v657 = "[" + v977;
    return v657 + "]";
  }
  var v659 = objtype == "function";
  if (v659) {
    return null;
  }
  res = [];
  var k$$1;
  for (k$$1 in o$$3) {
    var useKey;
    var v978 = typeof k$$1;
    var v662 = v978 == "number";
    if (v662) {
      var v660 = '"' + k$$1;
      useKey = v660 + '"';
    } else {
      var v979 = typeof k$$1;
      var v661 = v979 == "string";
      if (v661) {
        useKey = JAM.call(AJS._reprString, AJS, [k$$1], JAM.policy.p1);
      } else {
        continue;
      }
    }
    var v663 = o$$3[k$$1];
    val$$3 = JAM.call(me, null, [v663], JAM.policy.p1);
    var v980 = typeof val$$3;
    var v664 = v980 != "string";
    if (v664) {
      continue;
    }
    var v981 = useKey + ":";
    var v665 = v981 + val$$3;
    JAM.call(res.push, res, [v665], JAM.policy.p1);
  }
  var v982 = JAM.call(res.join, res, [","]);
  var v666 = "{" + v982;
  return v666 + "}";
}
function v99(url$$2, method$$1) {
  var req$$1 = AJS.getXMLHttpRequest();
  var v983 = url$$2.match(/^https?:\/\//);
  var v670 = v983 == null;
  if (v670) {
    var v984 = AJS.BASE_URL;
    var v669 = v984 != "";
    if (v669) {
      var v1144 = AJS.BASE_URL;
      var v985 = v1144.lastIndexOf("/");
      var v1209 = AJS.BASE_URL;
      var v1145 = v1209.length;
      var v986 = v1145 - 1;
      var v667 = v985 != v986;
      if (v667) {
        var v987 = AJS.BASE_URL;
        AJS.BASE_URL = v987 + "/";
      }
      var v668 = AJS.BASE_URL;
      url$$2 = v668 + url$$2;
    }
  }
  var v671 = !method$$1;
  if (v671) {
    method$$1 = "POST";
  }
  return JAM.new(AJSDeferred, [req$$1, method$$1, url$$2]);
}
function v98() {
  function v97() {
    throw "Browser does not support XMLHttpRequest";
  }
  function v96() {
    return new ActiveXObject("Msxml2.XMLHTTP.4.0");
  }
  function v95() {
    return new ActiveXObject("Microsoft.XMLHTTP");
  }
  function v94() {
    return new ActiveXObject("Msxml2.XMLHTTP");
  }
  function v93() {
    return new XMLHttpRequest;
  }
  var try_these = [v93, v94, v95, v96, v97];
  var i$$13 = 0;
  var v988 = try_these.length;
  var v672 = i$$13 < v988;
  for (;v672;) {
    var func$$3 = try_these[i$$13];
    try {
      return func$$3();
    } catch (e$$7) {
      JAM.call(AJS.log, AJS, [e$$7], JAM.policy.p1);
    }
    i$$13++;
    var v989 = try_these.length;
    v672 = i$$13 < v989;
  }
  return;
}
function v92(tmpl, ns, scope) {
  function fn$$4(w$$5, g) {
    g = g.split("|");
    var v673 = g[0];
    var cnt = ns[v673];
    var i$$12 = 1;
    var v990 = g.length;
    var v675 = i$$12 < v990;
    for (;v675;) {
      var v674 = g[i$$12];
      cnt = JAM.call(scope[v674], scope, [cnt], JAM.policy.p1);
      i$$12++;
      var v991 = g.length;
      v675 = i$$12 < v991;
    }
    var v676 = cnt == "";
    if (v676) {
      return "";
    }
    var v992 = cnt == 0;
    var v1146 = !v992;
    if (v1146) {
      v992 = cnt == -1;
    }
    var v677 = v992;
    if (v677) {
      cnt = cnt + "";
    }
    return cnt || w$$5;
  }
  scope = scope || window;
  return tmpl.replace(/%\(([A-Za-z0-9_|.]*)\)/g, fn$$4);
}
function v91() {
  function v90(args$$13) {
    function v89(src$$2) {
      var pic = new Image;
      pic.src = src$$2;
      return;
    }
    JAM.call(AJS.map, AJS, [args$$13, v89], JAM.policy.p1);
    return;
  }
  var f$$1 = JAM.call(AJS.$p, AJS, [v90, arguments], JAM.policy.p1);
  JAM.call(AJS.AEV, AJS, [window, "load", f$$1], JAM.policy.p1);
  return;
}
function v88(html$$1, first_child$$1) {
  var d = AJS.DIV();
  JAM.set(d, "innerHTML", html$$1);
  if (first_child$$1) {
    var v678 = d.childNodes;
    return v678[0];
  } else {
    return d;
  }
  return;
}
function v87(elm$$33, p$$5) {
  var v683 = p$$5 == 1;
  if (v683) {
    var v679 = elm$$33.style;
    v679.opacity = 1;
    var v680 = elm$$33.style;
    v680.filter = "";
  } else {
    var v681 = elm$$33.style;
    v681.opacity = p$$5;
    var v682 = elm$$33.style;
    var v1147 = p$$5 * 100;
    var v993 = "alpha(opacity=" + v1147;
    v682.filter = v993 + ")";
  }
  return;
}
function v86() {
  function v85(elm$$32) {
    var v684 = elm$$32.className;
    var v994 = "(^|\\s)" + cls$$2;
    var v685 = new RegExp(v994, "g");
    var v1260 = JAM.call(v684.replace, v684, [v685, ""], JAM.policy.p1);
    elm$$32.className = v1260;
    return;
  }
  var args$$12 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var cls$$2 = args$$12.pop();
  JAM.call(AJS.map, AJS, [args$$12, v85], JAM.policy.p1);
  return;
}
function v84(elm$$31, cls$$1) {
  var v995 = !elm$$31;
  var v1149 = !v995;
  if (v1149) {
    var v1148 = elm$$31.className;
    v995 = !v1148;
  }
  var v686 = v995;
  if (v686) {
    return false;
  }
  var e_cls = elm$$31.className;
  var v996 = e_cls.length;
  var v687 = v996 > 0;
  if (v687) {
    var v997 = e_cls == cls$$1;
    var v1151 = !v997;
    if (v1151) {
      var v1222 = "(^|\\s)" + cls$$1;
      var v1210 = v1222 + "(\\s|$)";
      var v1150 = new RegExp(v1210);
      v997 = JAM.call(v1150.test, v1150, [e_cls], JAM.policy.p1);
    }
    v687 = v997;
  }
  return v687;
}
function v83() {
  function v82(elm$$30) {
    var o$$inline_0 = elm$$30;
    var v1223 = "(^|\\s)" + cls;
    var v1211 = v1223 + "(\\s|$)";
    var v1152 = new RegExp(v1211);
    var v1153 = o$$inline_0.className;
    var v998 = JAM.call(v1152.test, v1152, [v1153], JAM.policy.p1);
    var v688 = !v998;
    if (v688) {
      var v999 = o$$inline_0.className;
      var v1212;
      var v1224 = o$$inline_0.className;
      if (v1224) {
        v1212 = " ";
      } else {
        v1212 = "";
      }
      var v1154 = v1212;
      var v1000 = v1154 + cls;
      o$$inline_0.className = v999 + v1000;
    }
    return;
  }
  var args$$11 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var cls = args$$11.pop();
  JAM.call(AJS.map, AJS, [args$$11, v82], JAM.policy.p1);
  return;
}
function v81() {
  function v80(elm$$29) {
    elm$$29.className = c;
    return;
  }
  var args$$10 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var c = args$$10.pop();
  JAM.call(AJS.map, AJS, [args$$10, v80], JAM.policy.p1);
  return;
}
function v79() {
  return JAM.call(AJS.__cssDim, AJS, [arguments, "top"]);
}
function v78() {
  return JAM.call(AJS.__cssDim, AJS, [arguments, "right"]);
}
function v77() {
  return JAM.call(AJS.__cssDim, AJS, [arguments, "left"]);
}
function v76() {
  return JAM.call(AJS.__cssDim, AJS, [arguments, "height"]);
}
function v75() {
  return JAM.call(AJS.__cssDim, AJS, [arguments, "width"]);
}
function v74(args$$9, property$$1) {
  args$$9 = JAM.call(AJS.$FA, AJS, [args$$9], JAM.policy.p1);
  var v1001 = args$$9.length;
  var v689 = v1001 - 1;
  args$$9.splice(v689, 0, property$$1);
  var v690 = AJS.setStyle;
  JAM.call(v690.apply, v690, [null, args$$9]);
  return;
}
function v73() {
  function v72(elm$$28) {
    var v692 = JAM.call(AJS.isIn, AJS, [property, num_styles], JAM.policy.p1);
    if (v692) {
      var v1002 = JAM.call(AJS.isString, AJS, [value$$27], JAM.policy.p1);
      if (v1002) {
        v1002 = value$$27;
      }
      var v691 = v1002;
      var v1003 = !v691;
      if (v1003) {
        v691 = value$$27 + "px";
      }
      value$$27 = v691;
    }
    var v693 = elm$$28.style;
    JAM.set(v693, property, value$$27);
    return;
  }
  function v71(elm$$27) {
    function v70(prop$$4) {
      var css_dim = value$$27[prop$$4];
      var v695 = JAM.call(AJS.isIn, AJS, [prop$$4, num_styles], JAM.policy.p1);
      if (v695) {
        var v1004 = JAM.call(AJS.isString, AJS, [css_dim], JAM.policy.p1);
        if (v1004) {
          v1004 = css_dim;
        }
        var v694 = v1004;
        var v1005 = !v694;
        if (v1005) {
          v694 = css_dim + "px";
        }
        css_dim = v694;
      }
      var v696 = elm$$27.style;
      JAM.set(v696, prop$$4, css_dim);
      return;
    }
    var v697 = JAM.call(AJS.keys, AJS, [value$$27], JAM.policy.p1);
    JAM.call(AJS.map, AJS, [v697, v70], JAM.policy.p1);
    return;
  }
  var args$$8 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var value$$27 = args$$8.pop();
  var num_styles = ["top", "left", "right", "width", "height"];
  var v698 = JAM.call(AJS.isObject, AJS, [value$$27], JAM.policy.p1);
  if (v698) {
    JAM.call(AJS.map, AJS, [args$$8, v71], JAM.policy.p1);
  } else {
    var property = args$$8.pop();
    JAM.call(AJS.map, AJS, [args$$8, v72], JAM.policy.p1);
  }
  return;
}
function v69(elm$$26) {
  var v699 = JAM.call(AJS.isElementHidden, AJS, [elm$$26], JAM.policy.p1);
  return!v699;
}
function v68(elm$$25) {
  var v1155 = elm$$25.style;
  var v1006 = v1155.display;
  var v700 = v1006 == "none";
  var v1008 = !v700;
  if (v1008) {
    var v1156 = elm$$25.style;
    var v1007 = v1156.visibility;
    v700 = v1007 == "hidden";
  }
  return v700;
}
function v67(elm$$24) {
  var v701 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  JAM.call(AJS.setStyle, AJS, [v701, "display", "none"], JAM.policy.p1);
  return;
}
function v66() {
  var v702 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  JAM.call(AJS.setStyle, AJS, [v702, "display", ""], JAM.policy.p1);
  return;
}
function v65() {
  var args$$7 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var v1009 = args$$7.pop();
  if (v1009) {
    v1009 = "visible";
  }
  var v703 = v1009;
  var v1010 = !v703;
  if (v1010) {
    v703 = "hidden";
  }
  var val$$2 = v703;
  JAM.call(AJS.setStyle, AJS, [args$$7, "visibility", val$$2], JAM.policy.p1);
  return;
}
function v64() {
  function v63(elm$$23) {
    if (elm$$23) {
      JAM.set(elm$$23, "innerHTML", html);
    }
    return;
  }
  var args$$6 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var html = args$$6.pop();
  JAM.call(AJS.map, AJS, [args$$6, v63], JAM.policy.p1);
  return args$$6[0];
}
function v62() {
  function v61(text$$7) {
    return JAM.call(document.createTextNode, document, [text$$7], JAM.policy.p1);
  }
  function extends_ajs(elm$$22) {
    function v60() {
      var v704 = AJS.createDOM;
      var v705 = [elm$$22, arguments];
      return JAM.call(v704.apply, v704, [null, v705]);
    }
    var v706 = elm$$22.toUpperCase();
    JAM.set(AJS, v706, v60);
    return;
  }
  var elms$$1 = ["ul", "li", "td", "tr", "th", "tbody", "table", "input", "span", "b", "a", "div", "img", "button", "h1", "h2", "h3", "h4", "h5", "h6", "br", "textarea", "form", "p", "select", "option", "optgroup", "iframe", "script", "center", "dl", "dt", "dd", "small", "pre", "i", "label", "thead"];
  JAM.call(AJS.map, AJS, [elms$$1, extends_ajs], JAM.policy.p1);
  AJS.TN = v61;
  return;
}
function v59(name$$31, attrs) {
  var i$$11 = 0;
  var attr;
  var elm$$21 = JAM.call(document.createElement, document, [name$$31], JAM.policy.p1);
  var first_attr = attrs[0];
  var v1011 = attrs[i$$11];
  var v710 = JAM.call(AJS.isDict, AJS, [v1011], JAM.policy.p1);
  if (v710) {
    for (k in first_attr) {
      attr = first_attr[k];
      var v1012 = k == "style";
      var v1157 = !v1012;
      if (v1157) {
        v1012 = k == "s";
      }
      var v709 = v1012;
      if (v709) {
        var v707 = elm$$21.style;
        v707.cssText = attr;
      } else {
        var v1158 = k == "c";
        var v1213 = !v1158;
        if (v1213) {
          v1158 = k == "class";
        }
        var v1013 = v1158;
        var v1159 = !v1013;
        if (v1159) {
          v1013 = k == "className";
        }
        var v708 = v1013;
        if (v708) {
          elm$$21.className = attr;
        } else {
          JAM.call(elm$$21.setAttribute, elm$$21, [k, attr], JAM.policy.p1);
        }
      }
    }
    i$$11++;
  }
  var v711 = first_attr == null;
  if (v711) {
    i$$11 = 1;
  }
  var j$$1 = i$$11;
  var v1014 = attrs.length;
  var v713 = j$$1 < v1014;
  for (;v713;) {
    attr = attrs[j$$1];
    if (attr) {
      var type$$25 = typeof attr;
      var v1015 = type$$25 == "string";
      var v1160 = !v1015;
      if (v1160) {
        v1015 = type$$25 == "number";
      }
      var v712 = v1015;
      if (v712) {
        attr = JAM.call(AJS.TN, AJS, [attr], JAM.policy.p1);
      }
      JAM.call(elm$$21.appendChild, elm$$21, [attr], JAM.policy.p1);
    }
    j$$1++;
    var v1016 = attrs.length;
    v713 = j$$1 < v1016;
  }
  return elm$$21;
}
function v58() {
  function v57(elm$$20) {
    var v714 = JAM.call($, null, [elm$$20], JAM.policy.p1);
    if (v714) {
      JAM.call(AJS.swapDOM, AJS, [elm$$20, null], JAM.policy.p1);
    }
    return;
  }
  var args$$5 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  try {
    JAM.call(AJS.map, AJS, [args$$5, v57], JAM.policy.p1);
  } catch (e$$6) {
  }
  return;
}
function v56(dest, src$$1) {
  dest = JAM.call(AJS.getElement, AJS, [dest], JAM.policy.p1);
  var parent$$1 = dest.parentNode;
  if (src$$1) {
    src$$1 = JAM.call(AJS.getElement, AJS, [src$$1], JAM.policy.p1);
    JAM.call(parent$$1.replaceChild, parent$$1, [src$$1, dest], JAM.policy.p1);
  } else {
    JAM.call(parent$$1.removeChild, parent$$1, [dest], JAM.policy.p1);
  }
  return src$$1;
}
function v55(elm$$19, reference_elm$$1) {
  var v715 = reference_elm$$1.parentNode;
  JAM.call(v715.insertBefore, v715, [elm$$19, reference_elm$$1], JAM.policy.p1);
  return elm$$19;
}
function v54(elm$$18, reference_elm) {
  var v716 = reference_elm.parentNode;
  var v717 = reference_elm.nextSibling;
  JAM.call(v716.insertBefore, v716, [elm$$18, v717], JAM.policy.p1);
  return elm$$18;
}
function v53(elm$$17) {
  var child$$1;
  var v718 = child$$1 = elm$$17.firstChild;
  for (;v718;) {
    JAM.call(AJS.swapDOM, AJS, [child$$1, null], JAM.policy.p1);
    v718 = child$$1 = elm$$17.firstChild;
  }
  var v1017 = arguments.length;
  var v720 = v1017 < 2;
  if (v720) {
    return elm$$17;
  } else {
    var v719 = AJS.appendChildNodes;
    return JAM.call(v719.apply, v719, [null, arguments]);
  }
  return;
}
function v52(elm$$16) {
  var v721 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var args$$4 = v721.slice(1);
  var v1018 = args$$4.length;
  var v723 = v1018 >= 1;
  if (v723) {
    var first_child = elm$$16.firstChild;
    if (first_child) {
      for (;true;) {
        var t_elm = args$$4.shift();
        if (t_elm) {
          JAM.call(AJS.insertBefore, AJS, [t_elm, first_child], JAM.policy.p1);
        } else {
          break;
        }
      }
    } else {
      var v722 = AJS.ACN;
      JAM.call(v722.apply, v722, [null, arguments]);
    }
  }
  return elm$$16;
}
function v51(elm$$15) {
  function v50(n$$1) {
    var v724 = JAM.call(AJS.isString, AJS, [n$$1], JAM.policy.p1);
    if (v724) {
      n$$1 = JAM.call(AJS.TN, AJS, [n$$1], JAM.policy.p1);
    }
    var v725 = JAM.call(AJS.isDefined, AJS, [n$$1], JAM.policy.p1);
    if (v725) {
      JAM.call(elm$$15.appendChild, elm$$15, [n$$1], JAM.policy.p1);
    }
    return;
  }
  var v1019 = arguments.length;
  var v726 = v1019 >= 2;
  if (v726) {
    JAM.call(AJS.map, AJS, [arguments, v50, 1]);
  }
  return elm$$15;
}
function v49(elm$$14) {
  var v1020 = typeof elm$$14;
  var v727 = v1020 == "string";
  if (v727) {
    elm$$14 = JAM.call(AJS.HTML2DOM, AJS, [elm$$14], JAM.policy.p1);
  }
  JAM.call(document.write, document, ['<span id="dummy_holder"></span>']);
  var v728 = JAM.call(AJS.$, AJS, ["dummy_holder"]);
  JAM.call(AJS.swapDOM, AJS, [v728, elm$$14], JAM.policy.p1);
  return;
}
function v48(select) {
  select = JAM.call(AJS.$, AJS, [select], JAM.policy.p1);
  var v1021 = select.options;
  var v1022 = select.selectedIndex;
  var v729 = v1021[v1022];
  return v729.value;
}
function v47(form, name$$30) {
  function v46(elm$$13) {
    var v1023 = elm$$13.name;
    if (v1023) {
      var v1161 = elm$$13.name;
      v1023 = v1161 == name$$30;
    }
    var v730 = v1023;
    if (v730) {
      r$$5 = elm$$13;
    }
    return;
  }
  function v45(elm$$12) {
    var v1024 = elm$$12.name;
    if (v1024) {
      var v1162 = elm$$12.name;
      v1024 = v1162 == name$$30;
    }
    var v731 = v1024;
    if (v731) {
      r$$5 = elm$$12;
    }
    return;
  }
  form = JAM.call(AJS.$, AJS, [form], JAM.policy.p1);
  var r$$5 = null;
  var v732 = form.elements;
  JAM.call(AJS.map, AJS, [v732, v45], JAM.policy.p1);
  if (r$$5) {
    return r$$5;
  }
  var v733 = JAM.call(AJS.$bytc, AJS, ["select", null, form]);
  JAM.call(AJS.map, AJS, [v733, v46], JAM.policy.p1);
  return r$$5;
}
function v44() {
  var v734 = JAM.call(AJS.$bytc, AJS, ["body"]);
  return v734[0];
}
function v43(elm$$11, tag_name$$5, class_name$$5) {
  function v42(m$$2) {
    return m$$2.nextSibling;
  }
  return JAM.call(AJS._nodeWalk, AJS, [elm$$11, tag_name$$5, class_name$$5, v42], JAM.policy.p1);
}
function v41(elm$$10, tag_name$$4, class_name$$4) {
  function v40(m$$1) {
    return m$$1.previousSibling;
  }
  return JAM.call(AJS._nodeWalk, AJS, [elm$$10, tag_name$$4, class_name$$4, v40], JAM.policy.p1);
}
function v39(elm$$9, parent_to_consider, max_look_up) {
  var v735 = elm$$9 == parent_to_consider;
  if (v735) {
    return true;
  }
  var v736 = max_look_up == 0;
  if (v736) {
    return false;
  }
  var v737 = elm$$9.parentNode;
  var v738 = max_look_up - 1;
  return JAM.call(AJS.hasParent, AJS, [v737, parent_to_consider, v738], JAM.policy.p1);
}
function v38(elm$$8, tag_name$$3, class_name$$3) {
  var elms = JAM.call(AJS.$bytc, AJS, [tag_name$$3, class_name$$3, elm$$8], JAM.policy.p1);
  var v1025 = elms.length;
  var v739 = v1025 > 0;
  if (v739) {
    return elms[0];
  } else {
    return null;
  }
  return;
}
function v37(elm$$7, tag_name$$2, class_name$$2) {
  function v36(m) {
    if (m) {
      return m.parentNode;
    }
    return;
  }
  return JAM.call(AJS._nodeWalk, AJS, [elm$$7, tag_name$$2, class_name$$2, v36], JAM.policy.p1);
}
function v35(elm$$6, tag_name$$1, class_name$$1, fn_next_elm) {
  function v34(p$$4) {
    return JAM.call(AJS.hasClass, AJS, [p$$4, class_name$$1], JAM.policy.p1);
  }
  function v33(p$$3) {
    var v740 = JAM.call(AJS.nodeName, AJS, [p$$3], JAM.policy.p1);
    return v740 == tag_name$$1;
  }
  function v32(p$$2) {
    var v1026 = JAM.call(AJS.nodeName, AJS, [p$$2], JAM.policy.p1);
    var v741 = v1026 == tag_name$$1;
    if (v741) {
      v741 = JAM.call(AJS.hasClass, AJS, [p$$2, class_name$$1], JAM.policy.p1);
    }
    return v741;
  }
  var p$$1 = JAM.call(fn_next_elm, null, [elm$$6], JAM.policy.p1);
  var checkFn;
  var v742 = tag_name$$1 && class_name$$1;
  if (v742) {
    checkFn = v32;
  } else {
    if (tag_name$$1) {
      checkFn = v33;
    } else {
      checkFn = v34;
    }
  }
  var v743 = JAM.call(checkFn, null, [elm$$6], JAM.policy.p1);
  if (v743) {
    return elm$$6;
  }
  for (;p$$1;) {
    var v744 = JAM.call(checkFn, null, [p$$1], JAM.policy.p1);
    if (v744) {
      return p$$1;
    }
    p$$1 = JAM.call(fn_next_elm, null, [p$$1], JAM.policy.p1);
  }
  return null;
}
function v31(elm$$5) {
  var v745 = elm$$5.nodeName;
  return v745.toLowerCase();
}
function v30(tag_name, class_name, parent, first_match) {
  var class_elements = [];
  var v1027 = JAM.call(AJS.isDefined, AJS, [parent], JAM.policy.p1);
  var v746 = !v1027;
  if (v746) {
    parent = document;
  }
  var v1028 = JAM.call(AJS.isDefined, AJS, [tag_name], JAM.policy.p1);
  var v747 = !v1028;
  if (v747) {
    tag_name = "*";
  }
  var i$$10;
  var j;
  var v1029 = class_name;
  if (v1029) {
    v1029 = document.getElementsByClassName;
  }
  var v757 = v1029;
  if (v757) {
    var els = JAM.call(parent.getElementsByClassName, parent, [class_name], JAM.policy.p1);
    var v751 = tag_name == "*";
    if (v751) {
      class_elements = JAM.call(AJS.forceArray, AJS, [els], JAM.policy.p1);
    } else {
      var els_len = els.length;
      i$$10 = 0;
      var v750 = i$$10 < els_len;
      for (;v750;) {
        var v1214 = els[i$$10];
        var v1163 = v1214.nodeName;
        var v1030 = v1163.toLowerCase();
        var v749 = v1030 == tag_name;
        if (v749) {
          var v748 = els[i$$10];
          JAM.call(class_elements.push, class_elements, [v748], JAM.policy.p1);
        }
        i$$10++;
        v750 = i$$10 < els_len;
      }
    }
  } else {
    els = JAM.call(parent.getElementsByTagName, parent, [tag_name], JAM.policy.p1);
    var v756 = !class_name;
    if (v756) {
      class_elements = JAM.call(AJS.forceArray, AJS, [els], JAM.policy.p1);
    } else {
      els_len = els.length;
      var v1031 = "(^|\\s)" + class_name;
      var v752 = v1031 + "(\\s|$)";
      var pattern$$1 = new RegExp(v752);
      i$$10 = 0;
      var v755 = i$$10 < els_len;
      for (;v755;) {
        var v1215 = els[i$$10];
        var v1164 = v1215.className;
        var v1032 = JAM.call(pattern$$1.test, pattern$$1, [v1164], JAM.policy.p1);
        var v1165 = !v1032;
        if (v1165) {
          v1032 = !class_name;
        }
        var v754 = v1032;
        if (v754) {
          var v753 = els[i$$10];
          JAM.call(class_elements.push, class_elements, [v753], JAM.policy.p1);
        }
        i$$10++;
        v755 = i$$10 < els_len;
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
function v29() {
  var args$$3 = JAM.call(AJS.flattenElmArguments, AJS, [arguments]);
  var elements = new Array;
  var i$$9 = 0;
  var v1033 = args$$3.length;
  var v759 = i$$9 < v1033;
  for (;v759;) {
    var v758 = args$$3[i$$9];
    var element$$2 = JAM.call(AJS.getElement, AJS, [v758], JAM.policy.p1);
    JAM.call(elements.push, elements, [element$$2], JAM.policy.p1);
    i$$9++;
    var v1034 = args$$3.length;
    v759 = i$$9 < v1034;
  }
  return elements;
}
function v28(id) {
  var v1035 = JAM.call(AJS.isString, AJS, [id], JAM.policy.p1);
  var v1166 = !v1035;
  if (v1166) {
    v1035 = JAM.call(AJS.isNumber, AJS, [id], JAM.policy.p1);
  }
  var v760 = v1035;
  if (v760) {
    return JAM.call(document.getElementById, document, [id], JAM.policy.p1);
  } else {
    return id;
  }
  return;
}
function v27(fn$$3) {
  function v26() {
    var v761 = JAM.call(AJS.$FA, AJS, [arguments]);
    args$$2 = JAM.call(args$$2.concat, args$$2, [v761], JAM.policy.p1);
    return JAM.call(fn$$3.apply, fn$$3, [window, args$$2], JAM.policy.p1);
  }
  var args$$2 = JAM.call(AJS.$FA, AJS, [arguments]);
  args$$2.shift();
  return v26;
}
function v25(list$$9, fn$$2, start_index$$1, end_index$$1) {
  function v24(elm$$4) {
    var v762 = JAM.call(fn$$2, null, [elm$$4], JAM.policy.p1);
    if (v762) {
      JAM.call(r$$4.push, r$$4, [elm$$4], JAM.policy.p1);
    }
    return;
  }
  var r$$4 = [];
  JAM.call(AJS.map, AJS, [list$$9, v24, start_index$$1, end_index$$1], JAM.policy.p1);
  return r$$4;
}
function v23(list$$8, fn$$1) {
  var v763 = list$$8.length;
  var i$$8 = v763 - 1;
  var l$$2 = 0;
  var v766 = i$$8 >= l$$2;
  for (;v766;) {
    var v1036 = list$$8[i$$8];
    var v764 = [v1036, i$$8];
    var val$$1 = JAM.call(fn$$1.apply, fn$$1, [null, v764]);
    var v765 = val$$1 != undefined;
    if (v765) {
      return val$$1;
    }
    i$$8--;
    v766 = i$$8 >= l$$2;
  }
  return;
}
function v22(list$$7, fn, start_index, end_index) {
  var i$$7 = 0;
  var l$$1 = list$$7.length;
  if (start_index) {
    i$$7 = start_index;
  }
  if (end_index) {
    l$$1 = end_index;
  }
  var v769 = i$$7 < l$$1;
  for (;v769;) {
    var v767 = list$$7[i$$7];
    var val = JAM.call(fn, null, [v767, i$$7], JAM.policy.p1);
    var v768 = val != undefined;
    if (v768) {
      return val;
    }
    i$$7++;
    v769 = i$$7 < l$$1;
  }
  return;
}
function v21(args$$1) {
  var f = JAM.call(AJS.forceArray, AJS, [args$$1], JAM.policy.p1);
  return JAM.call(AJS.flattenList, AJS, [f], JAM.policy.p1);
}
function v20(list$$6) {
  function _flatten(r$$3, l) {
    function v19(o) {
      var v771 = o == null;
      if (v771) {
      } else {
        var v770 = JAM.call(AJS.isArray, AJS, [o], JAM.policy.p1);
        if (v770) {
          _flatten(r$$3, o);
        } else {
          JAM.call(r$$3.push, r$$3, [o], JAM.policy.p1);
        }
      }
      return;
    }
    JAM.call(AJS.map, AJS, [l, v19], JAM.policy.p1);
    return;
  }
  var has_list = false;
  var new_list = [];
  var i$$6 = 0;
  var v1037 = list$$6.length;
  var v774 = i$$6 < v1037;
  for (;v774;) {
    var elm$$3 = list$$6[i$$6];
    var v772 = JAM.call(AJS.isArray, AJS, [elm$$3], JAM.policy.p1);
    if (v772) {
      has_list = true;
      break;
    }
    var v773 = elm$$3 != null;
    if (v773) {
      JAM.call(new_list.push, new_list, [elm$$3], JAM.policy.p1);
    }
    i$$6++;
    var v1038 = list$$6.length;
    v774 = i$$6 < v1038;
  }
  var v775 = !has_list;
  if (v775) {
    return new_list;
  }
  var r$$2 = [];
  _flatten(r$$2, list$$6);
  return r$$2;
}
function v18(l1, l2) {
  var i$$5;
  for (i$$5 in l2) {
    JAM.set(l1, i$$5, l2[i$$5]);
  }
  return l1;
}
function v17(list$$5) {
  var v1167 = Math.random();
  var v1168 = list$$5.length;
  var v1039 = v1167 * v1168;
  var v776 = JAM.call(Math.floor, Math, [v1039], JAM.policy.p1);
  return list$$5[v776];
}
function v16(list$$4) {
  var v1040 = list$$4.length;
  var v778 = v1040 > 0;
  if (v778) {
    var v1041 = list$$4.length;
    var v777 = v1041 - 1;
    return list$$4[v777];
  } else {
    return null;
  }
  return;
}
function v15(list$$3) {
  var v1042 = list$$3.length;
  var v779 = v1042 > 0;
  if (v779) {
    return list$$3[0];
  } else {
    return null;
  }
  return;
}
function v14(elm$$2, list$$2, eval_fn) {
  var i$$4 = 0;
  var v1043 = list$$2.length;
  var v781 = i$$4 < v1043;
  for (;v781;) {
    var v1169 = eval_fn;
    if (v1169) {
      var v1216 = list$$2[i$$4];
      v1169 = JAM.call(eval_fn, null, [v1216], JAM.policy.p1);
    }
    var v1044 = v1169;
    var v1171 = !v1044;
    if (v1171) {
      var v1170 = list$$2[i$$4];
      v1044 = elm$$2 == v1170;
    }
    var v780 = v1044;
    if (v780) {
      return i$$4;
    }
    i$$4++;
    var v1045 = list$$2.length;
    v781 = i$$4 < v1045;
  }
  return-1;
}
function v13(elm$$1, list$$1) {
  var i$$3 = JAM.call(AJS.getIndex, AJS, [elm$$1, list$$1], JAM.policy.p1);
  var v782 = i$$3 != -1;
  if (v782) {
    return true;
  } else {
    return false;
  }
  return;
}
function v12(delim, list) {
  function v11(elm) {
    var v1046 = delim + elm;
    r$$1 = r$$1 + v1046;
    return;
  }
  try {
    return JAM.call(list.join, list, [delim], JAM.policy.p1);
  } catch (e$$5) {
    var v783 = list[0];
    var v1047 = !v783;
    if (v1047) {
      v783 = "";
    }
    var r$$1 = v783;
    JAM.call(AJS.map, AJS, [list, v11, 1], JAM.policy.p1);
    return r$$1 + "";
  }
  return;
}
function v10(args) {
  var r = [];
  var i$$2 = 0;
  var v1048 = args.length;
  var v785 = i$$2 < v1048;
  for (;v785;) {
    var v784 = args[i$$2];
    JAM.call(r.push, r, [v784], JAM.policy.p1);
    i$$2++;
    var v1049 = args.length;
    v785 = i$$2 < v1049;
  }
  return r;
}
function v9(v) {
  var v1050 = JAM.call(AJS.isArray, AJS, [v], JAM.policy.p1);
  if (v1050) {
    var v1172 = JAM.call(AJS.isString, AJS, [v], JAM.policy.p1);
    v1050 = !v1172;
  }
  var v787 = v1050;
  if (v787) {
    return v;
  } else {
    var v786 = !v;
    if (v786) {
      return[];
    } else {
      return[v];
    }
  }
  return;
}
function v8() {
  var v1051 = AJS._agent;
  var v788 = v1051.indexOf("camino");
  return v788 != -1;
}
function v7() {
  var v1052 = AJS._agent;
  var v789 = v1052.indexOf("macintosh");
  return v789 != -1;
}
function v6() {
  var v1173 = AJS._agent;
  var v1053 = v1173.indexOf("gecko");
  var v790 = v1053 != -1;
  if (v790) {
    var v1054 = AJS._agent_version;
    v790 = v1054 >= 20030210;
  }
  return v790;
}
function v5() {
  var v1055 = AJS._agent;
  var v791 = v1055.indexOf("opera");
  return v791 != -1;
}
function v4(all) {
  if (all) {
    var v792 = AJS._agent;
    return v792.indexOf("khtml");
  }
  var v1174 = AJS._agent;
  var v1056 = v1174.indexOf("khtml");
  var v793 = v1056 != -1;
  if (v793) {
    var v1175 = AJS._agent;
    var v1057 = v1175.match(/3\.\d\.\d safari/);
    v793 = v1057 == null;
  }
  return v793;
}
function v3() {
  var v1058 = AJS._agent;
  var v794 = v1058.indexOf("msie 8");
  return v794 != -1;
}
function v2() {
  var v1176 = AJS._agent;
  var v1059 = v1176.indexOf("msie");
  var v795 = v1059 != -1;
  if (v795) {
    var v1177 = AJS._agent;
    var v1060 = v1177.indexOf("opera");
    v795 = v1060 == -1;
  }
  return v795;
}
function v1(var_name) {
  var v1061 = window.location;
  var v796 = v1061.search;
  var query$$2 = v796.substring(1);
  var vars = query$$2.split("&");
  var i$$1 = 0;
  var v1062 = vars.length;
  var v799 = i$$1 < v1062;
  for (;v799;) {
    var v797 = vars[i$$1];
    var pair = v797.split("=");
    var v1063 = pair[0];
    var v798 = v1063 == var_name;
    if (v798) {
      return pair[1];
    }
    i$$1++;
    var v1064 = vars.length;
    v799 = i$$1 < v1064;
  }
  return null;
}
function insertHeader() {
  JAM.call(AJS.DI, AJS, [tmpl_header], JAM.policy.p1);
  return;
}
function insertMenu(current_page) {
  function v0(item$$1) {
    var v1065 = item$$1.className;
    var v801 = v1065 == current_page;
    if (v801) {
      var v1066 = JAM.call(AJS.$bytc, AJS, ["a", null, item$$1]);
      var v800 = v1066[0];
      JAM.call(AJS.addClass, AJS, [v800, "current"], JAM.policy.p1);
    }
    JAM.call(AJS.ACN, AJS, [menu, item$$1], JAM.policy.p1);
    return;
  }
  function create_item(cls$$3, name$$33) {
    var v802 = {"class":cls$$3};
    var item = JAM.call(AJS.LI, AJS, [v802], JAM.policy.p1);
    var v1178 = LINKS[cls$$3];
    var v1067 = {href:v1178};
    var v803 = JAM.call(AJS.A, AJS, [v1067, name$$33], JAM.policy.p1);
    JAM.call(AJS.ACN, AJS, [item, v803], JAM.policy.p1);
    return item;
  }
  var v804 = {id:"menu"};
  var menu = JAM.call(AJS.UL, AJS, [v804], JAM.policy.p1);
  var v805 = create_item("installation", "Installation");
  var v806 = create_item("examples", "Examples");
  var v807 = create_item("nrm_usage", "Normal usage");
  var v808 = create_item("adv_usage", "Advance usage");
  var v809 = create_item("cmpr", "Compressing GreyBox");
  var v810 = create_item("about", "About");
  var items = [v805, v806, v807, v808, v809, v810];
  JAM.call(AJS.map, AJS, [items, v0], JAM.policy.p1);
  JAM.call(AJS.DI, AJS, [menu], JAM.policy.p1);
  return;
}
function insertCode() {
  var code$$2 = JAM.call(AJS.join, AJS, ["\n", arguments]);
  var result$$2 = "<pre><code>";
  var v811 = code$$2.replace(/</g, "&lt;");
  code$$2 = v811.replace(/>/g, "&gt;");
  result$$2 = result$$2 + code$$2;
  result$$2 = result$$2 + "</code></pre>";
  JAM.call(document.write, document, [result$$2], JAM.policy.p1);
  return;
}
var GB_ROOT_DIR = "./";
var v1068 = window.AJS;
var v815 = !v1068;
if (v815) {
  var v1069 = navigator.userAgent;
  var v812 = v1069.toLowerCase();
  var v813 = navigator.productSub;
  var AJS = {BASE_URL:"", ajaxErrorHandler:null, getQueryArgument:v1, _agent:v812, _agent_version:v813, isIe:v2, isIe8:v3, isSafari:v4, isOpera:v5, isMozilla:v6, isMac:v7, isCamino:v8, createArray:v9, forceArray:v10, join:v12, isIn:v13, getIndex:v14, getFirst:v15, getLast:v16, getRandom:v17, update:v18, flattenList:v20, flattenElmArguments:v21, map:v22, rmap:v23, filter:v25, partial:v27, getElement:v28, getElements:v29, getElementsByTagAndClassName:v30, nodeName:v31, _nodeWalk:v35, getParentBytc:v37, 
  getChildBytc:v38, hasParent:v39, getPreviousSiblingBytc:v41, getNextSiblingBytc:v43, getBody:v44, getFormElement:v47, getSelectValue:v48, documentInsert:v49, appendChildNodes:v51, appendToTop:v52, replaceChildNodes:v53, insertAfter:v54, insertBefore:v55, swapDOM:v56, removeElement:v58, createDOM:v59, _createDomShortcuts:v62, setHTML:v64, setVisibility:v65, showElement:v66, hideElement:v67, isElementHidden:v68, isElementShown:v69, setStyle:v73, __cssDim:v74, setWidth:v75, setHeight:v76, setLeft:v77, 
  setRight:v78, setTop:v79, setClass:v81, addClass:v83, hasClass:v84, removeClass:v86, setOpacity:v87, HTML2DOM:v88, preloadImages:v91, RND:v92, getXMLHttpRequest:v98, getRequest:v99, serializeJSON:v100, loadJSON:v101, evalTxt:v102, evalScriptTags:v103, encodeArguments:v104, _reprString:v105, _reprDate:v106, getMousePos:v107, getScrollTop:v108, absolutePosition:v109, getWindowSize:v110, isOverlapping:v111, getEventElm:v112, setEventKey:v113, onEvent:v115, ready_bound:false, is_ready:false, bindReady:v119, 
  ready_list:[], ready:v121, _f_guid:0, _wipe_guid:0, myaddEventListener:v124, handleEvent:v126, removeEventListener:v128, bind:v129, bindMethods:v130, preventDefault:v131, _listenOnce:v132, _getRealScope:v134, _reccruing_tos:{}, setSingleTimeout:v135, keys:v136, values:v137, urlencode:v138, urldecode:v139, isDefined:v140, isArray:v141, isString:v142, isNumber:v143, isObject:v144, isFunction:v145, isDict:v146, exportToGlobalScope:v147, log:v148, withScope:v149, strip:v150, trim_if_needed:v151};
  AJS.Class = v152;
  var v814 = AJS.Class;
  v814.prototype = {extend:v153, implement:v154, _parentize:v156};
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
  AJSDeferred = v157;
  AJSDeferred.prototype = {excCallbackSeq:v158, callback:v159, errback:v160, addErrback:v161, addCallback:v162, abort:v163, addCallbacks:v164, _onreadystatechange:v165, sendReq:v166};
  AJS._createDomShortcuts();
}
script_loaded = true;
AJS.exportToGlobalScope();
AJS.bindReady();
var v816 = {0:"ffffff", 1:"ffffee", 2:"ffffdd", 3:"ffffcc", 4:"ffffbb", 5:"ffffaa", 6:"ffff99"};
AJS.fx = {_shades:v816, highlight:v168, fadeIn:v169, fadeOut:v170, setWidth:v171, setHeight:v172};
var v817 = AJS.fx;
var v1070 = AJS.Class;
var v1071 = {init:v175, setOptions:v176, step:v177, setNow:v178, compute:v179, clearTimer:v180, _start:v181, custom:v182, set:v183, setStyle:v184};
var v1261 = JAM.new(v1070, [v1071]);
v817.Base = v1261;
var v818 = AJS.fx;
var v1179 = AJS.fx;
var v1072 = v1179.Base;
var v1073 = {init:v185, increase:v186};
var v1262 = JAM.call(v1072.extend, v1072, [v1073], JAM.policy.p1);
v818.Style = v1262;
var v819 = AJS.fx;
var v1180 = AJS.fx;
var v1074 = v1180.Base;
var v1075 = {init:v187, setNow:v188, custom:v189, increase:v190};
var v1263 = JAM.call(v1074.extend, v1074, [v1075], JAM.policy.p1);
v819.Styles = v1263;
var v820 = AJS.fx;
v820.Transitions = {linear:v191, sineInOut:v192};
script_loaded = true;
var v821 = ['<div id="top"> <img src="logo.gif" alt="" /> <br />', '<span style="font-weight: bold; color: #333">A pop-up window that doesn\'t suck.</span>', "</div>"];
var tmpl_header = JAM.call(AJS.join, AJS, ["", v821]);
var LINKS = {"installation":"installation.html", "examples":"examples.html", "nrm_usage":"normal_usage.html", "adv_usage":"advance_usage.html", "cmpr":"compressing_greybox.html", "about":"about.html"};
var GB_CURRENT = null;
GB_hide = v193;
var v822 = AJS.Class;
var v823 = {init:v194, addCallback:v195, show:v197, hide:v202, update:v203, createElements:v205, removeFrame:v206, startLoading:v207, setOverlayDimension:v208, initOverlay:v209, initFrame:v210, onHide:v211, onShow:v212, setFrameSize:v213, setWindowPosition:v214, initHook:v215};
GreyBox = JAM.new(v822, [v823]);
_GB_update = v216;
_GB_setOverlayDimension = v217;
var v824 = GB_ROOT_DIR + "indicator.gif";
JAM.call(AJS.preloadImages, AJS, [v824], JAM.policy.p1);
script_loaded = true;
GB_showImage = v218;
GB_showPage = v219;
var v825 = {init:v220, initHook:v221, setFrameSize:v222, _setHeaderPos:v223, setWindowPosition:v224, onHide:v225, onShow:v226};
GB_Gallery = JAM.call(GreyBox.extend, GreyBox, [v825], JAM.policy.p1);
var v826 = GB_ROOT_DIR + "g_close.gif";
JAM.call(AJS.preloadImages, AJS, [v826], JAM.policy.p1);
GB_show = v227;
GB_showCenter = v228;
GB_showFullScreen = v229;
var v827 = {init:v230, initHook:v235, setFrameSize:v236, setWindowPosition:v237};
GB_Window = JAM.call(GreyBox.extend, GreyBox, [v827], JAM.policy.p1);
var v828 = GB_ROOT_DIR + "w_close.gif";
var v829 = GB_ROOT_DIR + "header_bg.gif";
JAM.call(AJS.preloadImages, AJS, [v828, v829], JAM.policy.p1);
GB_showFullScreenSet = v238;
GB_showImageSet = v239;
var v830 = {init:v240, showSet:v241, updateStatus:v242, _setCaption:v243, updateFrame:v244, switchPrev:v245, switchNext:v246};
GB_Sets = JAM.call(GB_Gallery.extend, GB_Gallery, [v830], JAM.policy.p1);
JAM.call(AJS.AEV, AJS, [window, "load", v247], JAM.policy.p1);
insertHeader();
insertMenu("examples")
