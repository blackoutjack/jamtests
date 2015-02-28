function v112(callback$$28) {
  this.callback = callback$$28;
  var v668 = midori.browserType;
  var v114 = v668 == "MSIE";
  if (v114) {
    var v669 = document.body;
    var v670 = document.createElement("div");
    var v113 = JAM.call(v669.appendChild, v669, [v670]);
    JAM.set(v113, "innerHTML", '<iframe id="midori_history" style="position: absolute; width: 1px; height: 1px"></iframe>');
  }
  var v115 = this.onChange;
  JAM.call(setInterval, null, [v115, 250]);
  return;
}
function v111() {
  var v116 = window.location;
  var newLoc = v116.toString();
  var v117;
  var v1073 = midori.browserType;
  var v673 = v1073 == "MSIE";
  if (v673) {
    var v1469 = JAM.call(midori.get, midori, ["#midori_history"]);
    var v1331 = v1469.contentWindow;
    var v1074 = v1331.document;
    var v671 = v1074.getElementById("me");
    v117 = v671.innerText;
  } else {
    var v672;
    var v1332 = newLoc.indexOf("#");
    var v1076 = v1332 != -1;
    if (v1076) {
      var v1075 = newLoc.match(/#(.+)$/);
      v672 = v1075[1];
    } else {
      v672 = "";
    }
    v117 = v672;
  }
  var item$$3 = v117;
  var v674 = midori.browserType;
  var v120 = v674 == "MSIE";
  if (v120) {
    var v1077 = midoriHistory.oldItem;
    var v675 = v1077 != item$$3;
    if (v675) {
      var v1078 = midoriHistory.history;
      v675 = JAM.call(midori.inArray, midori, [item$$3, v1078]);
    }
    var v118 = v675;
    if (v118) {
      midoriHistory.oldItem = item$$3;
      JAM.call(midoriHistory.modifyLocation, midoriHistory, [item$$3]);
      JAM.call(midoriHistory.callback, midoriHistory, [item$$3]);
    }
  } else {
    var v1079 = midoriHistory.oldLoc;
    var v676 = v1079 != newLoc;
    if (v676) {
      var v1080 = midoriHistory.history;
      v676 = JAM.call(midori.inArray, midori, [item$$3, v1080]);
    }
    var v119 = v676;
    if (v119) {
      midoriHistory.oldLoc = newLoc;
      JAM.call(midoriHistory.callback, midoriHistory, [item$$3]);
    }
  }
  return;
}
function v110(item$$2) {
  var history = this.history;
  var i$$17 = 0;
  var len$$1 = history.length;
  var v124 = i$$17 < len$$1;
  for (;v124;) {
    var v677 = history[i$$17];
    var v123 = v677 == item$$2;
    if (v123) {
      history.splice(i$$17, 1);
      var v122 = i$$17 == len$$1;
      if (v122) {
        var v678 = history.length;
        var v121 = v678 - 1;
        this.last = history[v121];
      }
    }
    i$$17++;
    v124 = i$$17 < len$$1;
  }
  this.history = history;
  return;
}
function v109(item$$1) {
  var v679 = this.last;
  var v125 = item$$1 == v679;
  if (v125) {
    return;
  }
  var v126 = this.history;
  v126.push(item$$1);
  JAM.call(this.modifyLocation, this, [item$$1]);
  this.last = item$$1;
  var v680 = midori.browserType;
  var v129 = v680 == "MSIE";
  if (v129) {
    var v681 = JAM.call(midori.get, midori, ["#midori_history"]);
    var v127 = v681.contentWindow;
    var iframe = v127.document;
    iframe.open('javascript: "<html></html>"');
    var v682 = '<html><body><div id="me">' + item$$1;
    var v128 = v682 + "</div></body></html>";
    JAM.call(iframe.write, iframe, [v128]);
    iframe.close();
  }
  return;
}
function v108(item) {
  var v130 = window.location;
  var loc = v130.toString();
  var v131 = window;
  var v683;
  var v1333 = loc.indexOf("#");
  var v1083 = v1333 == -1;
  if (v1083) {
    var v1081 = loc + "#";
    v683 = v1081 + item;
  } else {
    var v1082 = "#" + item;
    v683 = JAM.call(loc.replace, loc, [/#.+/, v1082]);
  }
  v131.location = v683;
  return;
}
function v107() {
  function v106(obj$$25) {
    function v105(o$$6) {
      function v104(e$$6) {
        var me$$1 = JAM.call(midori.getEventTarget, midori, [e$$6]);
        me$$1.blur();
        JAM.call(midoriTab.select, midoriTab, [me$$1]);
        JAM.call(midori.preventDefault, midori, [e$$6]);
        return;
      }
      var v132 = obj$$25.id;
      JAM.call(o$$6.setAttribute, o$$6, ["tabset", v132]);
      var v1084 = o$$6.parentNode;
      var v684 = v1084.className;
      var v135 = v684 == "tab-selected";
      if (v135) {
        var v133 = midoriTab.selectedTabs;
        var v134 = obj$$25.id;
        introspect(JAM.policy.p1) {
          v133[v134] = o$$6;
        }
        JAM.call(midoriTab.select, midoriTab, [o$$6, true]);
      }
      JAM.call(midori.addEventListener, midori, [o$$6, "click", v104]);
      return;
    }
    var v1334 = obj$$25.id;
    var v1085 = "#" + v1334;
    var v685 = v1085 + " a";
    var v136 = JAM.call(midori.get, midori, [v685]);
    JAM.call(v136.apply, v136, [v105]);
    return;
  }
  var v137 = JAM.call(midori.get, midori, [".tab-set"]);
  JAM.call(v137.apply, v137, [v106]);
  return;
}
function v103(obj$$24, noAnim) {
  var tabSet = obj$$24.getAttribute("tabset");
  var v686 = this.selectedTabs;
  var v140 = v686[tabSet];
  if (v140) {
    var v1086 = this.selectedTabs;
    var v687 = v1086[tabSet];
    var v138 = v687.parentNode;
    v138.className = "";
    var v1594 = this.selectedTabs;
    var v1550 = v1594[tabSet];
    var v1470 = v1550.hash;
    var v1335 = v1470.substr(1);
    var v1087 = "#" + v1335;
    var v688 = JAM.call(midori.get, midori, [v1087]);
    var v139 = v688.style;
    v139.display = "none";
  }
  var v141 = this.selectedTabs;
  introspect(JAM.policy.p1) {
    v141[tabSet] = obj$$24;
  }
  var v142 = obj$$24.parentNode;
  v142.className = "tab-selected";
  var v143;
  if (noAnim) {
    var v1551 = obj$$24.hash;
    var v1471 = v1551.substr(1);
    var v1336 = "#" + v1471;
    var v1088 = JAM.call(midori.get, midori, [v1336]);
    var v689 = v1088.style;
    v143 = v689.display = "block";
  } else {
    var v1089 = obj$$24.hash;
    var v690 = v1089.substr(1);
    v143 = JAM.call(midoriFX.show, midoriFX, [v690]);
  }
  v143;
  return;
}
function v102(e$$5) {
  midoriPopup.hide();
  return;
}
function v101(e$$4) {
  midoriPopup.hide();
  return;
}
function v100() {
  var v691 = this.activePopup;
  var v144 = v691 == null;
  if (v144) {
    return;
  }
  var v145 = this.hideCallback;
  if (v145) {
    JAM.call(this.hideCallback, this, [this]);
  }
  var v146 = this.popupId;
  JAM.call(midoriFX.hide, midoriFX, [v146]);
  this.activePopup = null;
  return;
}
function v99(vars$$5) {
  var v1090 = vars$$5.x;
  var v692 = typeof v1090;
  var v147 = v692 == "undefined";
  if (v147) {
    vars$$5.x = 5;
  }
  var v1091 = vars$$5.y;
  var v693 = typeof v1091;
  var v148 = v693 == "undefined";
  if (v148) {
    vars$$5.y = -5;
  }
  this.popupId = vars$$5.popupId;
  var v694 = vars$$5.popupId;
  var v149 = "#" + v694;
  var popup = JAM.call(midori.get, midori, [v149]);
  var dims$$1 = midori.getWindowDims();
  var v150;
  var v697 = vars$$5.showAtMousePos;
  if (v697) {
    var v695 = vars$$5.event;
    v150 = JAM.call(midori.getMousePos, midori, [v695]);
  } else {
    var v696 = vars$$5.obj;
    v150 = JAM.call(midori.getPos, midori, [v696]);
  }
  var popupPos = v150;
  var v151 = popup.style;
  v151.display = "block";
  var v153 = this.activePopup;
  if (v153) {
    var v698 = this.activePopup;
    var v152 = v698.style;
    v152.display = "none";
  }
  var v154 = vars$$5.obj;
  v154.blur();
  var v699 = dims$$1.windowWidth;
  var v1337 = popupPos.x;
  var v1338 = popup.offsetWidth;
  var v1092 = v1337 + v1338;
  var v1093 = vars$$5.x;
  var v700 = v1092 + v1093;
  var v155 = v699 < v700;
  if (v155) {
    var v701 = popupPos.x;
    var v702 = popup.offsetWidth;
    popupPos.x = v701 - v702;
  }
  var v1472 = popupPos.y;
  var v1473 = popup.offsetHeight;
  var v1339 = v1472 + v1473;
  var v1340 = vars$$5.y;
  var v1094 = v1339 + v1340;
  var v1095 = dims$$1.scrollTop;
  var v703 = v1094 - v1095;
  var v704 = dims$$1.windowHeight;
  var v156 = v703 > v704;
  for (;v156;) {
    var v705 = popupPos.y;
    var v1096 = popup.offsetHeight;
    var v706 = v1096 + 20;
    popupPos.y = v705 - v706;
    var v1474 = popupPos.y;
    var v1475 = popup.offsetHeight;
    var v1341 = v1474 + v1475;
    var v1342 = vars$$5.y;
    var v1097 = v1341 + v1342;
    var v1098 = dims$$1.scrollTop;
    var v707 = v1097 - v1098;
    var v708 = dims$$1.windowHeight;
    v156 = v707 > v708;
  }
  var v1343 = popupPos.x;
  var v1344 = vars$$5.x;
  var v1099 = v1343 + v1344;
  var v709 = v1099 + "px";
  var v1476 = popupPos.y;
  var v1477 = vars$$5.y;
  var v1345 = v1476 + v1477;
  var v1478 = vars$$5.obj;
  var v1346 = v1478.offsetHeight;
  var v1100 = v1345 + v1346;
  var v710 = v1100 + "px";
  var v157 = {left:v709, top:v710};
  JAM.call(midori.setStyles, midori, [popup, v157]);
  this.activePopup = popup;
  var v158;
  var v713 = vars$$5.noAnim;
  if (v713) {
    var v711 = popup.style;
    v158 = v711.display = "block";
  } else {
    var v712 = this.popupId;
    v158 = JAM.call(midoriFX.show, midoriFX, [v712]);
  }
  v158;
  var v160 = vars$$5.event;
  if (v160) {
    var v159 = vars$$5.event;
    JAM.call(midori.preventDefault, midori, [v159]);
  }
  var v161 = vars$$5.showCallback;
  if (v161) {
    JAM.call(vars$$5.showCallback, vars$$5, [this]);
  }
  var v162;
  var v714 = vars$$5.hideCallback;
  if (v714) {
    v162 = vars$$5.hideCallback;
  } else {
    v162 = false;
  }
  this.hideCallback = v162;
  return;
}
function v98(containerId, targetId, correction$$1) {
  function v97() {
    JAM.call(midoriFX.sliderToWithAnim, midoriFX, [intervalKey$$3, container$$1, targetPos$$3]);
    return;
  }
  var v163 = "#" + containerId;
  var container$$1 = JAM.call(midori.get, midori, [v163]);
  var v1101 = "#" + targetId;
  var v715 = JAM.call(midori.get, midori, [v1101]);
  var v164 = JAM.call(midori.getPos, midori, [v715, container$$1]);
  var targetPos$$3 = v164.x;
  var v165;
  var v1102 = container$$1.style;
  var v717 = v1102.marginLeft;
  if (v717) {
    var v1347 = container$$1.style;
    var v1103 = v1347.marginLeft;
    var v716 = parseInt(v1103, 10);
    v165 = Math.abs(v716);
  } else {
    v165 = 0;
  }
  var currentPos = v165;
  var intervalKey$$3 = Math.random();
  var v167 = this.lastIntervalId;
  if (v167) {
    var v166 = this.lastIntervalId;
    clearInterval(v166);
  }
  var v168 = this.intervals;
  var v169 = intervalKey$$3;
  var v1104;
  var v1348 = currentPos > targetPos$$3;
  if (v1348) {
    v1104 = -1;
  } else {
    v1104 = 1;
  }
  var v718 = v1104;
  var v719 = JAM.call(setInterval, null, [v97, 15]);
  v168[v169] = {targetPos:currentPos, direction:v718, intervalId:v719};
  var v720 = this.intervals;
  var v170 = v720[intervalKey$$3];
  this.lastIntervalId = v170.intervalId;
  return;
}
function v96(intervalKey$$2, container, targetPos$$2) {
  var v171 = this.intervals;
  var data$$18 = v171[intervalKey$$2];
  var v721 = data$$18.targetPos;
  var v172 = targetPos$$2 - v721;
  var diff = Math.abs(v172);
  var v722 = data$$18.targetPos;
  var v1349 = diff / 8;
  var v1105 = Math.round(v1349);
  var v1106 = data$$18.direction;
  var v723 = v1105 * v1106;
  data$$18.targetPos = v722 + v723;
  var v173 = container.style;
  var v1107 = data$$18.targetPos;
  var v724 = -v1107;
  v173.marginLeft = v724 + "px";
  var v175 = diff < 4;
  if (v175) {
    var v174 = data$$18.intervalId;
    clearInterval(v174);
  }
  return;
}
function v95(id$$2, correction) {
  function v94() {
    JAM.call(midoriFX.scrollToWithAnim, midoriFX, [intervalKey$$1, targetPos$$1]);
    return;
  }
  var v1350 = "#" + id$$2;
  var v1108 = JAM.call(midori.get, midori, [v1350]);
  var v725 = JAM.call(midori.getPos, midori, [v1108]);
  var v176 = v725.y;
  var v726;
  if (correction) {
    v726 = correction;
  } else {
    v726 = 0;
  }
  var v177 = v726;
  var targetPos$$1 = v176 + v177;
  var intervalKey$$1 = Math.random();
  var dims = midori.getWindowDims();
  var v178 = this.intervals;
  var v179 = intervalKey$$1;
  var v727 = dims.scrollTop;
  var v728 = JAM.call(setInterval, null, [v94, 15]);
  v178[v179] = {scrollPos:v727, intervalId:v728};
  return;
}
function v93(intervalKey, targetPos) {
  var v1552 = this.intervals;
  var v1479 = v1552[intervalKey];
  var v1351 = v1479.scrollPos;
  var v1109 = targetPos - v1351;
  var v729 = Math.abs(v1109);
  var v183 = v729 > 10;
  if (v183) {
    var v730 = this.intervals;
    var v180 = v730[intervalKey];
    var v1110 = v180.scrollPos;
    var v1610 = this.intervals;
    var v1595 = v1610[intervalKey];
    var v1553 = v1595.scrollPos;
    var v1480 = targetPos - v1553;
    var v1352 = v1480 / 8;
    var v1111 = Math.round(v1352);
    v180.scrollPos = v1110 + v1111;
    var v1112 = this.intervals;
    var v731 = v1112[intervalKey];
    var v181 = v731.scrollPos;
    scrollTo(0, v181);
  } else {
    var v1113 = this.intervals;
    var v732 = v1113[intervalKey];
    var v182 = v732.intervalId;
    clearInterval(v182);
  }
  return;
}
function v92(id$$1, callback$$27, constantSpeed, horiz$$1) {
  function v91() {
    JAM.call(midoriFX.hideWithAnim, midoriFX, [vars$$4]);
    return;
  }
  var v184;
  if (horiz$$1) {
    v184 = "width";
  } else {
    v184 = "height";
  }
  var what$$2 = v184;
  var v185 = "#" + id$$1;
  var element$$5 = JAM.call(midori.get, midori, [v185]);
  var outsideSize$$1 = JAM.call(this.getOutsideSize, this, [element$$5, what$$2]);
  var v186 = Math.random();
  var v1114;
  if (horiz$$1) {
    v1114 = element$$5.offsetWidth;
  } else {
    v1114 = element$$5.offsetHeight;
  }
  var v733 = v1114;
  var v187 = v733 - outsideSize$$1;
  var vars$$4 = {intervalKey:v186, element:element$$5, outsideSize:outsideSize$$1, elementSize:v187, callback:callback$$27, constantSpeed:constantSpeed, what:what$$2};
  var v188 = element$$5.style;
  v188.overflow = "hidden";
  var v189 = this.intervals;
  var v190 = vars$$4.intervalKey;
  var v734 = JAM.call(setInterval, null, [v91, 40]);
  v189[v190] = {intervalId:v734};
  return;
}
function v90(vars$$3) {
  var v735;
  var v1353 = vars$$3.what;
  var v1117 = v1353 == "width";
  if (v1117) {
    var v1115 = vars$$3.element;
    v735 = v1115.offsetWidth;
  } else {
    var v1116 = vars$$3.element;
    v735 = v1116.offsetHeight;
  }
  var v191 = v735;
  var v192 = vars$$3.outsideSize;
  var oldSize = v191 - v192;
  var v193;
  var v738 = vars$$3.constantSpeed;
  if (v738) {
    var v736 = vars$$3.oldSize;
    v193 = v736 - 4;
  } else {
    var v737 = oldSize / 1.5;
    v193 = Math.round(v737);
  }
  var newSize = v193;
  var v204 = newSize > 2;
  if (v204) {
    var v739 = vars$$3.element;
    var v194 = v739.style;
    var v195 = vars$$3.what;
    var v740 = newSize.toString();
    introspect(JAM.policy.p1) {
      v194[v195] = v740 + "px";
    }
    var v741 = vars$$3.element;
    var v196 = v741.style;
    v196.opacity = newSize / 50;
  } else {
    var v1118 = this.intervals;
    var v1119 = vars$$3.intervalKey;
    var v742 = v1118[v1119];
    var v197 = v742.intervalId;
    clearInterval(v197);
    var v743 = vars$$3.element;
    var v198 = v743.style;
    v198.display = "none";
    var v744 = vars$$3.element;
    var v199 = v744.style;
    var v200 = vars$$3.what;
    var v1120 = vars$$3.elementSize;
    var v745 = v1120.toString();
    introspect(JAM.policy.p1) {
      v199[v200] = v745 + "px";
    }
    var v746 = vars$$3.element;
    var v201 = v746.style;
    v201.opacity = 1;
    var v203 = vars$$3.callback;
    if (v203) {
      var v202 = vars$$3.element;
      JAM.call(vars$$3.callback, vars$$3, [v202]);
    }
  }
  return;
}
function v89(id, callback$$26, horiz) {
  function v88() {
    JAM.call(midoriFX.showWithAnim, midoriFX, [vars$$2]);
    return;
  }
  var v205;
  if (horiz) {
    v205 = "width";
  } else {
    v205 = "height";
  }
  var what$$1 = v205;
  var v206 = "#" + id;
  var element$$4 = JAM.call(midori.get, midori, [v206]);
  var v207 = Math.random();
  var vars$$2 = {intervalKey:v207, element:element$$4, callback:callback$$26, what:what$$1};
  var v208 = {overflow:"hidden", visibility:"hidden", display:"block"};
  JAM.call(midori.setStyles, midori, [element$$4, v208]);
  var v747 = vars$$2;
  var v1354;
  if (horiz) {
    v1354 = element$$4.offsetWidth;
  } else {
    v1354 = element$$4.offsetHeight;
  }
  var v1121 = v1354;
  var v1122 = JAM.call(this.getOutsideSize, this, [element$$4, what$$1]);
  v747.elementSize = v1121 - v1122;
  var v748 = {display:"none", visibility:"visible"};
  JAM.call(midori.setStyles, midori, [element$$4, v748]);
  var v209 = this.intervals;
  var v210 = vars$$2.intervalKey;
  var v749 = JAM.call(setInterval, null, [v88, 40]);
  v209[v210] = {newSize:0, intervalId:v749};
  return;
}
function v87(vars$$1) {
  var v211;
  var v1355 = this.intervals;
  var v1356 = vars$$1.intervalKey;
  var v1123 = v1355[v1356];
  var v750 = v1123.newSize;
  if (v750) {
    v211 = false;
  } else {
    v211 = true;
  }
  var firstRun = v211;
  var v751 = this.intervals;
  var v752 = vars$$1.intervalKey;
  var v212 = v751[v752];
  var v1124 = v212.newSize;
  var v1554 = vars$$1.elementSize;
  var v1611 = this.intervals;
  var v1612 = vars$$1.intervalKey;
  var v1596 = v1611[v1612];
  var v1555 = v1596.newSize;
  var v1481 = v1554 - v1555;
  var v1357 = v1481 / 2;
  var v1125 = Math.round(v1357);
  v212.newSize = v1124 + v1125;
  var v1358 = this.intervals;
  var v1359 = vars$$1.intervalKey;
  var v1126 = v1358[v1359];
  var v753 = v1126.newSize;
  var v754 = vars$$1.elementSize;
  var v221 = v753 < v754;
  if (v221) {
    var v755 = vars$$1.element;
    var v213 = v755.style;
    var v214 = vars$$1.what;
    var v1482 = this.intervals;
    var v1483 = vars$$1.intervalKey;
    var v1360 = v1482[v1483];
    var v1127 = v1360.newSize;
    var v756 = v1127.toString();
    introspect(JAM.policy.p1) {
      v213[v214] = v756 + "px";
    }
  } else {
    var v1128 = this.intervals;
    var v1129 = vars$$1.intervalKey;
    var v757 = v1128[v1129];
    var v215 = v757.intervalId;
    clearInterval(v215);
    var v758 = vars$$1.element;
    var v216 = v758.style;
    var v217 = vars$$1.what;
    var v1130 = vars$$1.elementSize;
    var v759 = v1130.toString();
    introspect(JAM.policy.p1) {
      v216[v217] = v759 + "px";
    }
    var v760 = vars$$1.element;
    var v218 = v760.style;
    v218.overflow = "visible";
    var v220 = vars$$1.callback;
    if (v220) {
      var v219 = vars$$1.element;
      JAM.call(vars$$1.callback, vars$$1, [v219]);
    }
  }
  if (firstRun) {
    var v761 = vars$$1.element;
    var v222 = v761.style;
    v222.display = "block";
  }
  return;
}
function v86(element$$3, what) {
  var v223;
  var v762 = what == "width";
  if (v762) {
    v223 = element$$3.offsetWidth;
  } else {
    v223 = element$$3.offsetHeight;
  }
  var offsetSize = v223;
  var v224 = element$$3.style;
  var v763 = offsetSize.toString();
  introspect(JAM.policy.p1) {
    v224[what] = v763 + "px";
  }
  var v764;
  var v1131 = what == "width";
  if (v1131) {
    v764 = element$$3.offsetWidth;
  } else {
    v764 = element$$3.offsetHeight;
  }
  var v225 = v764;
  var outsideSize = v225 - offsetSize;
  var v226 = element$$3.style;
  var v1132 = offsetSize - outsideSize;
  var v765 = v1132.toString();
  introspect(JAM.policy.p1) {
    v226[what] = v765 + "px";
  }
  return outsideSize;
}
function v85(obj$$23, highlightClass, removeAll) {
  function v84(o$$5) {
    var v227 = o$$5.className;
    var className$$1 = v227.split(" ");
    var v228;
    var v1484 = className$$1.length;
    var v1361 = v1484 - 1;
    var v1133 = className$$1[v1361];
    var v769 = v1133 == highlightClass;
    if (v769) {
      var v766 = o$$5.className;
      var v1485 = o$$5.className;
      var v1362 = v1485.length;
      var v1363 = highlightClass.length;
      var v1134 = v1362 - v1363;
      var v767 = v1134 - 1;
      v228 = v766.substr(0, v767);
    } else {
      var v768;
      if (removeAll) {
        v768 = o$$5.className;
      } else {
        var v1364 = o$$5.className;
        var v1135 = v1364 + " ";
        v768 = v1135 + highlightClass;
      }
      v228 = v768;
    }
    o$$5.className = v228;
    return;
  }
  var v229 = JAM.call(this.get, this, ["td", obj$$23]);
  JAM.call(v229.apply, v229, [v84]);
  return;
}
function v83(obj$$22, stopAt) {
  var xPos = 0;
  var yPos = 0;
  var v230;
  if (stopAt) {
    v230 = stopAt.offsetParent;
  } else {
    v230 = null;
  }
  stopAt = v230;
  var v770 = obj$$22.offsetParent;
  var v231 = v770 != stopAt;
  for (;v231;) {
    var v1365 = obj$$22.offsetLeft;
    xPos = xPos + v1365;
    var v1486 = obj$$22.offsetTop;
    var v1487 = obj$$22.scrollTop;
    var v1366 = v1486 - v1487;
    yPos = yPos + v1366;
    obj$$22 = obj$$22.offsetParent;
    var v771 = obj$$22.offsetParent;
    v231 = v771 != stopAt;
  }
  return {x:xPos, y:yPos};
}
function v82() {
  var v772 = this.browserType;
  var v238 = v772 == "MSIE";
  if (v238) {
    var v773 = document.documentElement;
    var v232 = v773.clientWidth;
    var v774 = document.documentElement;
    var v233 = v774.clientHeight;
    var v775 = document.documentElement;
    var v234 = v775.scrollTop;
    return {windowWidth:v232, windowHeight:v233, scrollTop:v234};
  } else {
    var v235 = window.innerWidth;
    var v236 = window.innerHeight;
    var v237 = window.scrollY;
    return {windowWidth:v235, windowHeight:v236, scrollTop:v237};
  }
  return;
}
function v81(vars) {
  var v239 = vars.required;
  var v1628 = v239.split(",");
  vars.required = v1628;
  var v776 = vars.formId;
  var v240 = "#" + v776;
  var form = JAM.call(this.get, this, [v240]);
  var stopSubmit = false;
  var fieldName;
  var field;
  var fieldType;
  var fieldStyle;
  var i$$16 = 0;
  var v241 = vars.required;
  var numFields = v241.length;
  var v247 = i$$16 < numFields;
  for (;v247;) {
    var v1136 = vars.required;
    var v777 = v1136[i$$16];
    var v246 = fieldName = JAM.call(this.trim, this, [v777]);
    if (v246) {
      var v242 = "#" + fieldName;
      field = JAM.call(this.get, this, [v242]);
      var v243;
      var v1367 = field.type;
      var v1137 = v1367.toLowerCase();
      var v778 = v1137 == "checkbox";
      if (v778) {
        v243 = "c";
      } else {
        v243 = "t";
      }
      fieldType = v243;
      var v244;
      var v780 = fieldType == "c";
      if (v780) {
        var v779 = field.parentNode;
        v244 = v779.style;
      } else {
        v244 = field.style;
      }
      fieldStyle = v244;
      fieldStyle.backgroundColor = "";
      var v1138 = fieldType == "c";
      if (v1138) {
        var v1368 = field.checked;
        v1138 = !v1368;
      }
      var v781 = v1138;
      var v1140 = !v781;
      if (v1140) {
        var v1369 = field.value;
        var v1139 = JAM.call(this.trim, this, [v1369]);
        v781 = v1139 == "";
      }
      var v245 = v781;
      if (v245) {
        fieldStyle.backgroundColor = "#FAA";
        stopSubmit = true;
      }
    }
    i$$16++;
    v247 = i$$16 < numFields;
  }
  var v1370 = vars.formId;
  var v1141 = "#" + v1370;
  var v782 = v1141 + "-status";
  var v248 = JAM.call(this.get, this, [v782]);
  var v783;
  if (stopSubmit) {
    v783 = vars.message;
  } else {
    v783 = "";
  }
  JAM.set(v248, "innerHTML", v783);
  var v249;
  var v784 = vars.callback;
  if (v784) {
    v249 = vars.callback();
  } else {
    v249 = "";
  }
  var callbackResult = v249;
  var v785 = callbackResult === false;
  var v1142 = !v785;
  if (v1142) {
    v785 = stopSubmit;
  }
  var v253 = v785;
  if (v253) {
    var v251 = vars.event;
    if (v251) {
      var v250 = vars.event;
      JAM.call(this.preventDefault, this, [v250]);
    }
    return false;
  } else {
    var v786 = vars.event;
    var v252 = !v786;
    if (v252) {
      form.submit();
    }
  }
  return;
}
function v80(element$$2, cb, callback$$25) {
  var v254;
  var v788 = cb.checked;
  if (v788) {
    v254 = element$$2.innerHTML;
    var v1143 = element$$2.innerHTML;
    JAM.set(element$$2, "innerHTML", v1143 + 1);
  } else {
    var v787;
    var v1556 = element$$2.innerHTML;
    var v1371 = element$$2.innerHTML = v1556 - 1;
    var v1144 = v1371 == 0;
    if (v1144) {
      v787 = JAM.set(element$$2, "innerHTML", "");
    } else {
      v787 = {};
    }
    v254 = v787;
  }
  v254;
  if (callback$$25) {
    var v255 = element$$2.innerHTML;
    JAM.call(callback$$25, null, [v255]);
  }
  return;
}
function v79(obj$$21, maxWidth) {
  function v78(o$$4) {
    var v789 = o$$4.width;
    var v258 = v789 > maxWidth;
    if (v258) {
      var v790 = o$$4.style;
      var v257 = v790.msInterpolationMode;
      if (v257) {
        var v256 = o$$4.style;
        v256.msInterpolationMode = "bicubic";
      }
      o$$4.width = maxWidth;
    }
    return;
  }
  var v259;
  if (maxWidth) {
    v259 = maxWidth;
  } else {
    v259 = 400;
  }
  maxWidth = v259;
  var v260 = JAM.call(this.get, this, ["img", obj$$21]);
  JAM.call(v260.apply, v260, [v78]);
  return;
}
function v77(obj$$20, maxLen) {
  function v76(o$$3) {
    var v791 = o$$3.nodeType;
    var v261 = v791 != 3;
    if (v261) {
      return;
    }
    var v262 = o$$3.data;
    var chunks$$1 = v262.split(" ");
    var shortened = false;
    var stlen;
    var i$$15 = 0;
    var numChunks = chunks$$1.length;
    var v268 = i$$15 < numChunks;
    for (;v268;) {
      var v1145 = chunks$$1[i$$15];
      var v792 = stLen = v1145.length;
      var v267 = v792 > maxLen;
      if (v267) {
        var v263 = stLen - maxLen;
        var diffLen = Math.floor(v263);
        var v793 = stLen / 2;
        var v794 = diffLen / 2;
        var v264 = v793 - v794;
        var startPos = Math.floor(v264);
        var v1146 = chunks$$1[i$$15];
        var v795 = v1146.substr(0, startPos);
        var v265 = v795 + "...";
        var v796 = chunks$$1[i$$15];
        var v797 = startPos + diffLen;
        var v266 = v796.substr(v797);
        chunks$$1[i$$15] = v265 + v266;
        shortened = true;
      }
      i$$15++;
      v268 = i$$15 < numChunks;
    }
    if (shortened) {
      var v1629 = JAM.call(midori.implode, midori, [" ", chunks$$1]);
      o$$3.data = v1629;
    }
    return;
  }
  var v269;
  if (maxLen) {
    v269 = maxLen - 3;
  } else {
    v269 = 45;
  }
  maxLen = v269;
  JAM.call(this.each, this, [obj$$20, v76]);
  return;
}
function v75(v$$2, a$$4) {
  var i$$14 = 0;
  var numA$$3 = a$$4.length;
  var v271 = i$$14 < numA$$3;
  for (;v271;) {
    var v1488 = v$$2 != null;
    if (v1488) {
      var v1597 = a$$4[i$$14];
      var v1557 = v1597.constructor;
      v1488 = v1557 == Array;
    }
    var v1372 = v1488;
    if (v1372) {
      var v1489 = v$$2.constructor;
      v1372 = v1489 == Array;
    }
    var v1147 = v1372;
    if (v1147) {
      var v1490 = a$$4[i$$14];
      var v1373 = v1490.toString();
      var v1374 = v$$2.toString();
      v1147 = v1373 == v1374;
    }
    var v798 = v1147;
    var v1149 = !v798;
    if (v1149) {
      var v1148 = a$$4[i$$14];
      v798 = v1148 == v$$2;
    }
    var v270 = v798;
    if (v270) {
      return true;
    }
    i$$14++;
    v271 = i$$14 < numA$$3;
  }
  return;
}
function v74(glue, a$$3) {
  var v799 = typeof a$$3;
  var v272 = v799 != "object";
  if (v272) {
    return a$$3;
  }
  var o$$2 = "";
  var v800 = a$$3.length;
  if (v800) {
    var v1150 = a$$3.propertyIsEnumerable("length");
    v800 = !v1150;
  }
  var v274 = v800;
  if (v274) {
    var i$$13 = 0;
    var numA$$2 = a$$3.length;
    var v273 = i$$13 < numA$$2;
    for (;v273;) {
      var v1151 = a$$3[i$$13];
      var v801 = glue + v1151;
      o$$2 = o$$2 + v801;
      i$$13++;
      v273 = i$$13 < numA$$2;
    }
  } else {
    var k$$1;
    for (k$$1 in a$$3) {
      var v1152 = a$$3[k$$1];
      var v802 = glue + v1152;
      o$$2 = o$$2 + v802;
    }
  }
  var v275 = glue.length;
  return o$$2.substr(v275);
}
function v73(a1, a2) {
  var uniqA2 = [];
  var i$$12 = 0;
  var numA2 = a2.length;
  var v278 = i$$12 < numA2;
  for (;v278;) {
    var v1153 = a2[i$$12];
    var v803 = JAM.call(this.inArray, this, [v1153, a1]);
    var v277 = !v803;
    if (v277) {
      var v276 = a2[i$$12];
      uniqA2.push(v276);
    }
    i$$12++;
    v278 = i$$12 < numA2;
  }
  return a1.concat(uniqA2);
}
function v72(range$$5) {
  var v804 = Math.random();
  var v1154;
  if (range$$5) {
    v1154 = range$$5;
  } else {
    v1154 = 1E5;
  }
  var v805 = v1154;
  var v279 = v804 * v805;
  return Math.floor(v279);
}
function v71(st$$1) {
  return JAM.call(st$$1.replace, st$$1, [/^\s+|\s+$/g, ""]);
}
function v70(st, params) {
  var v280 = !params;
  if (v280) {
    return st;
  }
  var v806 = st.match(/:[A-Za-z0-9_]+/g);
  var v281 = v806.sort();
  var matches$$1 = v281.reverse();
  var i$$11 = 0;
  var numMatches = matches$$1.length;
  var v284 = i$$11 < numMatches;
  for (;v284;) {
    var v282 = matches$$1[i$$11];
    var v1155 = matches$$1[i$$11];
    var v807 = v1155.substr(1);
    var v283 = params[v807];
    st = JAM.call(st.replace, st, [v282, v283]);
    i$$11++;
    v284 = i$$11 < numMatches;
  }
  return st;
}
function v69(parentNode$$1, prefix$$2, a$$2) {
  var k;
  for (k in a$$2) {
    var v1156 = a$$2[k];
    var v808 = typeof v1156;
    var v288 = v808 == "object";
    if (v288) {
      var v1157 = prefix$$2 + "[";
      var v809 = v1157 + k;
      var v285 = v809 + "]";
      var v286 = a$$2[k];
      JAM.call(this.convertToFields, this, [parentNode$$1, v285, v286]);
    } else {
      var el = document.createElement("input");
      var v1375 = prefix$$2 + "[";
      var v1158 = v1375 + k;
      var v810 = v1158 + "]";
      var v811 = a$$2[k];
      var v287 = {type:"hidden", name:v810, value:v811};
      JAM.call(this.setAttributes, this, [el, v287]);
      JAM.call(parentNode$$1.appendChild, parentNode$$1, [el]);
    }
  }
  return;
}
function v68(name$$30, value$$28, expires, path, domain) {
  setCookieSentinel = true;
  var today = new Date;
  var v289 = document;
  var v1558 = name$$30 + "=";
  var v1559 = escape(value$$28);
  var v1491 = v1558 + v1559;
  var v1376 = v1491 + "; expires=";
  var v1492 = today.setSeconds(expires);
  var v1377 = today.toUTCString(v1492);
  var v1159 = v1376 + v1377;
  var v1378;
  if (path) {
    v1378 = "; path=" + path;
  } else {
    v1378 = "";
  }
  var v1160 = v1378;
  var v812 = v1159 + v1160;
  var v1161;
  if (domain) {
    v1161 = "; domain=" + domain;
  } else {
    v1161 = "";
  }
  var v813 = v1161;
  introspect(JAM.policy.p1) {
    v289.cookie = v812 + v813;
  }
  return;
}
function v67(cookieName) {
  var v290 = document.cookie;
  var cookies = v290.split("; ");
  var i$$10 = 0;
  var numCookies = cookies.length;
  var v294 = i$$10 < numCookies;
  for (;v294;) {
    var v291 = cookies[i$$10];
    var parts = v291.split("=");
    var v814 = parts[0];
    var v293 = v814 == cookieName;
    if (v293) {
      var v815 = parts[1];
      var v292 = JAM.call(v815.replace, v815, [/\+/g, " "]);
      return unescape(v292);
    }
    i$$10++;
    v294 = i$$10 < numCookies;
  }
  return;
}
function v66(cursorPos$$1) {
  var v295;
  var v1162 = this.browserType;
  var v816 = v1162 == "MSIE";
  if (v816) {
    v295 = cursorPos$$1.htmlText;
  } else {
    v295 = cursorPos$$1.toString();
  }
  return v295;
}
function v65(target$$29) {
  var v817 = this.browserType;
  var v296 = v817 != "MSIE";
  if (v296) {
    return target$$29.getSelection();
  }
  var v297 = target$$29 == window;
  if (v297) {
    target$$29 = document;
  }
  var v298 = target$$29.selection;
  var cursorPos = v298.createRange();
  var v1163 = target$$29.selection;
  var v818 = v1163.type;
  var v299 = v818 != "Control";
  if (v299) {
    return cursorPos;
  }
  return;
}
function v64(o$$1, v$$1) {
  var v300;
  var v1164 = this.browserType;
  var v821 = v1164 == "MSIE";
  if (v821) {
    var v819 = o$$1.style;
    v300 = v819.styleFloat = v$$1;
  } else {
    var v820 = o$$1.style;
    v300 = v820.cssFloat = v$$1;
  }
  v300;
  return;
}
function v63(o) {
  var v301;
  var v1165 = this.browserType;
  var v824 = v1165 == "MSIE";
  if (v824) {
    var v822 = o.style;
    v301 = v822.styleFloat;
  } else {
    var v823 = o.style;
    v301 = v823.cssFloat;
  }
  return v301;
}
function v62(event$$4) {
  var v302;
  var v826 = event$$4.preventDefault;
  if (v826) {
    v302 = event$$4.preventDefault();
  } else {
    var v825 = window.event;
    v302 = v825.returnValue = false;
  }
  v302;
  return;
}
function v61(event$$3) {
  var v303;
  var v828 = event$$3.stopPropagation;
  if (v828) {
    v303 = event$$3.stopPropagation();
  } else {
    var v827 = window.event;
    v303 = v827.cancelBubble = true;
  }
  v303;
  return;
}
function v60(event$$2) {
  var v829 = event$$2.targetTouches;
  if (v829) {
    var v1166 = event$$2.targetTouches;
    v829 = v1166.length;
  }
  var v311 = v829;
  if (v311) {
    var v1167 = event$$2.targetTouches;
    var v830 = v1167[0];
    var v304 = v830.pageX;
    var v1168 = event$$2.targetTouches;
    var v831 = v1168[0];
    var v305 = v831.pageY;
    return {x:v304, y:v305};
  } else {
    var v832 = event$$2.pageX;
    var v1169 = !v832;
    if (v1169) {
      v832 = event$$2.pageY;
    }
    var v310 = v832;
    if (v310) {
      var v306 = event$$2.pageX;
      var v307 = event$$2.pageY;
      return {x:v306, y:v307};
    } else {
      var v1170 = event$$2.clientX;
      var v1379 = document.documentElement;
      var v1171 = v1379.scrollLeft;
      var v833 = v1170 + v1171;
      var v1172 = document.body;
      var v834 = v1172.clientLeft;
      var v308 = v833 - v834;
      var v1173 = event$$2.clientY;
      var v1380 = document.documentElement;
      var v1174 = v1380.scrollTop;
      var v835 = v1173 + v1174;
      var v1175 = document.body;
      var v836 = v1175.clientTop;
      var v309 = v835 - v836;
      return {x:v308, y:v309};
    }
  }
  return;
}
function v59(event$$1) {
  var v312;
  var v837 = event$$1.target;
  if (v837) {
    v312 = event$$1.target;
  } else {
    v312 = event$$1.srcElement;
  }
  var target$$28 = v312;
  var v838 = target$$28.nodeType;
  var v313 = v838 == 3;
  if (v313) {
    target$$28 = target$$28.parentNode;
  }
  return target$$28;
}
function v58() {
  var v315 = this.readyTimer;
  if (v315) {
    var v314 = this.readyTimer;
    clearInterval(v314);
  }
  var i$$9 = 0;
  var v316 = this.domReady;
  var numE = v316.length;
  var v318 = i$$9 < numE;
  for (;v318;) {
    var v317 = this.domReady;
    v317[i$$9]();
    i$$9++;
    v318 = i$$9 < numE;
  }
  return;
}
function v57(target$$27, eventType$$2, listenerFunc) {
  function v56() {
    function v55() {
      var v839 = this.readyState;
      var v319 = v839 == "complete";
      if (v319) {
        midori.runReadyEvents();
      }
      return;
    }
    JAM.call(document.write, document, ['<script id="midori_onload" src="javascript: {}" defer="true">\x3c/script>']);
    var v320 = JAM.call(this.get, this, ["#midori_onload"]);
    JAM.set(v320, "onreadystatechange", v55);
    return;
  }
  function v54() {
    function v53() {
      var v840 = document.readyState;
      var v321 = /loaded|complete/.test(v840);
      if (v321) {
        midori.runReadyEvents();
      }
      return;
    }
    var v1630 = JAM.call(setInterval, null, [v53, 10]);
    this.readyTimer = v1630;
    return;
  }
  this.safariReady = v54;
  this.msieReady = v56;
  var v326 = target$$27.addEventListener;
  if (v326) {
    var v325 = eventType$$2 == "ready";
    if (v325) {
      var v324 = this.browserType;
      switch(v324) {
        case "Safari":
          var v322 = this.domReady;
          v322.push(listenerFunc);
          var v841 = this.readyTimer;
          var v323 = !v841;
          if (v323) {
            this.safariReady();
          }
          return;
        case "Opera":
        ;
        case "Gecko":
          eventType$$2 = "DOMContentLoaded";
          break;
        default:
          eventType$$2 = "load";
      }
    }
    JAM.call(target$$27.addEventListener, target$$27, [eventType$$2, listenerFunc, false]);
    return;
  }
  var v329 = eventType$$2 == "ready";
  if (v329) {
    var v1176 = this.domReady;
    var v842 = v1176.length;
    var v327 = !v842;
    if (v327) {
      this.msieReady();
    }
    var v328 = this.domReady;
    v328.push(listenerFunc);
    return;
  }
  var v330 = "on" + eventType$$2;
  JAM.call(target$$27.attachEvent, target$$27, [v330, listenerFunc]);
  return;
}
function v52(obj$$19) {
  var v331 = obj$$19.parentNode;
  return v331.removeChild(obj$$19);
}
function v51(obj$$18, attrList) {
  var i$$8;
  for (i$$8 in attrList) {
    var v332;
    var v844 = i$$8 == "className";
    if (v844) {
      v332 = obj$$18.className = attrList[i$$8];
    } else {
      var v843 = attrList[i$$8];
      v332 = JAM.call(obj$$18.setAttribute, obj$$18, [i$$8, v843]);
    }
    v332;
  }
  return;
}
function v50(obj$$17, styleList) {
  var i$$7;
  for (i$$7 in styleList) {
    var v333;
    var v847 = i$$7 == "float";
    if (v847) {
      var v845 = styleList[i$$7];
      v333 = JAM.call(this.setFloat, this, [obj$$17, v845]);
    } else {
      var v846 = obj$$17.style;
      introspect(JAM.policy.p1) {
        v333 = v846[i$$7] = styleList[i$$7];
      }
    }
    v333;
  }
  return;
}
function v49(stylesheet, rule$$2, property) {
  var values$$4 = [];
  var v334 = document.styleSheets;
  var rules = v334[stylesheet];
  var v335;
  var v848 = rules.rules;
  if (v848) {
    v335 = rules.rules;
  } else {
    v335 = rules.cssRules;
  }
  rules = v335;
  rule$$2 = rule$$2.toLowerCase();
  var v336;
  var v1177 = this.browserType;
  var v850 = v1177 == "Safari";
  if (v850) {
    var v849 = JAM.call(property.replace, property, [/([A-Z])/, "-$1"]);
    v336 = v849.toLowerCase();
  } else {
    v336 = property.toLowerCase();
  }
  property = v336;
  var i$$6 = 0;
  var numRules = rules.length;
  var v349 = i$$6 < numRules;
  for (;v349;) {
    var v851 = rule$$2 == "*";
    var v1179 = !v851;
    if (v1179) {
      var v1493 = rules[i$$6];
      var v1381 = v1493.selectorText;
      var v1178 = v1381.toLowerCase();
      v851 = v1178 == rule$$2;
    }
    var v348 = v851;
    if (v348) {
      var j$$1;
      var v852 = rules[i$$6];
      var v347 = v852.style;
      for (j$$1 in v347) {
        var v853 = this.browserType;
        var v346 = v853 == "Safari";
        if (v346) {
          var v1494 = rules[i$$6];
          var v1382 = v1494.style;
          var v1180 = v1382[j$$1];
          var v854 = v1180.toLowerCase;
          if (v854) {
            var v1560 = rules[i$$6];
            var v1495 = v1560.style;
            var v1383 = v1495[j$$1];
            var v1181 = v1383.toLowerCase();
            v854 = v1181 == property;
          }
          var v341 = v854;
          if (v341) {
            var v340 = rule$$2 == "*";
            if (v340) {
              var v855 = rules[i$$6];
              var v337 = v855.selectorText;
              introspect(JAM.policy.p1) {
                values$$4[v337] = value;
              }
            } else {
              var v856 = rules[i$$6];
              var v338 = v856.style;
              var v1182 = rules[i$$6];
              var v857 = v1182.style;
              var v339 = v857[j$$1];
              return v338[v339];
            }
          }
        } else {
          var v858 = j$$1.toLowerCase();
          var v345 = v858 == property;
          if (v345) {
            var v344 = rule$$2 == "*";
            if (v344) {
              var v859 = rules[i$$6];
              var v342 = v859.selectorText;
              var v1183 = rules[i$$6];
              var v860 = v1183.style;
              introspect(JAM.policy.p1) {
                values$$4[v342] = v860[j$$1];
              }
            } else {
              var v861 = rules[i$$6];
              var v343 = v861.style;
              return v343[j$$1];
            }
          }
        }
      }
    }
    i$$6++;
    v349 = i$$6 < numRules;
  }
  return values$$4;
}
function v48(selectorText$$1, startAt) {
  function v47(p) {
    var i$$5 = 0;
    var numObjs$$2 = this.length;
    var v351 = i$$5 < numObjs$$2;
    for (;v351;) {
      var v350;
      var v1184 = typeof p;
      var v864 = v1184 == "function";
      if (v864) {
        var v862 = this[i$$5];
        v350 = JAM.call(p, null, [v862]);
      } else {
        var v863 = "this[i]." + p;
        if (JAM.isEval(eval)) {
          v350 = eval("introspect(JAM.policy.pFull) { " + v863 + " }");
        } else {
          v350 = JAM.call(eval, null, [v863]);
        }
      }
      v350;
      i$$5++;
      v351 = i$$5 < numObjs$$2;
    }
    return;
  }
  var selectors$$7 = JAM.call(this.parseSelectors, this, [selectorText$$1]);
  var v352 = selectors$$7["elements"];
  var numS = v352.length;
  var v353 = !startAt;
  if (v353) {
    startAt = document;
  }
  var v357 = numS == 1;
  if (v357) {
    var v865 = selectors$$7["elements"];
    var v354 = v865[0];
    var idMatch = v354.match(/^[a-z0-9*]*#([^,:]+)$/i);
    var v1185 = idMatch;
    if (v1185) {
      var v1496 = selectors$$7["attrs"];
      var v1384 = v1496[0];
      v1185 = v1384 == "";
    }
    var v866 = v1185;
    if (v866) {
      var v1186 = selectors$$7["separators"];
      v866 = v1186 == "";
    }
    var v356 = v866;
    if (v356) {
      var v355 = idMatch[1];
      return document.getElementById(v355);
    }
  }
  var v867 = selectors$$7["elements"];
  var v358 = v867[0];
  var v868 = selectors$$7["attrs"];
  var v359 = v868[0];
  var objs$$1 = JAM.call(this.getMatches, this, [startAt, v358, v359]);
  var allObjs = [];
  var newObjs;
  var separator;
  var i$$4 = 1;
  var v368 = i$$4 < numS;
  for (;v368;) {
    newObjs = [];
    var v869 = selectors$$7["separators"];
    var v870 = i$$4 - 1;
    var v360 = v869[v870];
    separator = JAM.call(this.trim, this, [v360]);
    var v367 = separator == ",";
    if (v367) {
      allObjs = JAM.call(this.concatUnique, this, [allObjs, objs$$1]);
      var v871 = selectors$$7["elements"];
      var v361 = v871[i$$4];
      var v872 = selectors$$7["attrs"];
      var v362 = v872[i$$4];
      objs$$1 = JAM.call(this.getMatches, this, [startAt, v361, v362]);
    } else {
      var v363;
      var v873 = separator == ">";
      if (v873) {
        v363 = true;
      } else {
        v363 = false;
      }
      var oneLevelOnly$$1 = v363;
      var j = 0;
      var numObjs$$1 = objs$$1.length;
      var v366 = j < numObjs$$1;
      for (;v366;) {
        var v1187 = objs$$1[j];
        var v874 = JAM.call(this.inArray, this, [v1187, newObjs]);
        var v365 = !v874;
        if (v365) {
          var v875 = objs$$1[j];
          var v1188 = selectors$$7["elements"];
          var v876 = v1188[i$$4];
          var v1189 = selectors$$7["attrs"];
          var v877 = v1189[i$$4];
          var v364 = JAM.call(this.getMatches, this, [v875, v876, v877]);
          newObjs = JAM.call(this.concatUnique, this, [newObjs, v364, oneLevelOnly$$1]);
        }
        j++;
        v366 = j < numObjs$$1;
      }
      objs$$1 = newObjs;
    }
    i$$4++;
    v368 = i$$4 < numS;
  }
  allObjs = JAM.call(this.concatUnique, this, [allObjs, objs$$1]);
  allObjs.apply = v47;
  return allObjs;
}
function v46(target$$26, s$$2, a$$1, oneLevelOnly) {
  function v45(me) {
    var v878 = !numA$$1;
    if (v878) {
      v878 = !pseudo;
    }
    var v369 = v878;
    if (v369) {
      matches.push(me);
      return;
    }
    var match$$2 = true;
    var v879 = numA$$1;
    if (v879) {
      var v1190 = JAM.call(this.processAttrs, this, [me, a$$1, exprs$$1]);
      v879 = !v1190;
    }
    var v370 = v879;
    if (v370) {
      match$$2 = false;
    }
    var v880 = pseudo;
    if (v880) {
      var v1191 = JAM.call(this.processPseudo, this, [me, pSelector$$1, pA$$1, pB$$1]);
      v880 = !v1191;
    }
    var v371 = v880;
    if (v371) {
      match$$2 = false;
    }
    if (match$$2) {
      matches.push(me);
    }
    return;
  }
  this.pCache = {};
  var matches = [];
  var exprs$$1 = [];
  var chunks;
  var objs;
  var numObjs;
  var pseudo;
  var pSelector$$1;
  var pOption;
  var pA$$1;
  var pB$$1;
  this.postProcess = v45;
  var i$$3 = 0;
  var numA$$1 = a$$1.length;
  var v384 = i$$3 < numA$$1;
  for (;v384;) {
    var v372 = a$$1[i$$3];
    chunks = v372.match(/([a-z0-9_-]+)\s*([=^$*|!]{0,2})\s*"?([^"]*)"?$/i);
    a$$1[i$$3] = chunks[1];
    var v383 = chunks[2];
    switch(v383) {
      case "=":
        var v373 = exprs$$1;
        var v374 = i$$3;
        var v1385 = chunks[3];
        var v1192 = "^" + v1385;
        var v881 = v1192 + "$";
        var v1631 = new RegExp(v881, "i");
        v373[v374] = v1631;
        break;
      case "^=":
        var v375 = exprs$$1;
        var v376 = i$$3;
        var v1193 = chunks[3];
        var v882 = "^" + v1193;
        var v1632 = new RegExp(v882, "i");
        v375[v376] = v1632;
        break;
      case "$=":
        var v377 = exprs$$1;
        var v378 = i$$3;
        var v1194 = chunks[3];
        var v883 = v1194 + "$";
        var v1633 = new RegExp(v883, "i");
        v377[v378] = v1633;
        break;
      case "*=":
        var v379 = exprs$$1;
        var v380 = i$$3;
        var v884 = chunks[3];
        var v1634 = new RegExp(v884, "i");
        v379[v380] = v1634;
        break;
      case "&=":
        var v381 = exprs$$1;
        var v382 = i$$3;
        var v1626 = chunks[3];
        var v1624 = "^" + v1626;
        var v1613 = v1624 + "$|^";
        var v1614 = chunks[3];
        var v1598 = v1613 + v1614;
        var v1561 = v1598 + "\\s|\\s";
        var v1562 = chunks[3];
        var v1497 = v1561 + v1562;
        var v1386 = v1497 + "\\s|\\s";
        var v1387 = chunks[3];
        var v1195 = v1386 + v1387;
        var v885 = v1195 + "$";
        var v1635 = new RegExp(v885, "i");
        v381[v382] = v1635;
        break;
      case "!=":
        exprs$$1[i$$3] = chunks[3];
    }
    i$$3++;
    v384 = i$$3 < numA$$1;
  }
  var v886 = s$$2.indexOf(":");
  var v390 = v886 != -1;
  if (v390) {
    chunks = s$$2.split(":");
    s$$2 = chunks[0];
    var v385 = chunks[1];
    pseudo = v385.match(/([a-z-]+)\(?([a-z0-9+-]*)\)?/i);
    var v386 = pseudo[1];
    pSelector$$1 = v386.toLowerCase();
    var v887 = pseudo[2];
    var v387 = pOption = v887.toLowerCase();
    switch(v387) {
      case "odd":
        pOption = "2n+1";
        break;
      case "even":
        pOption = "2n";
    }
    chunks = pOption.match(/([0-9+-]*)(n?)([0-9+-]*)/i);
    var v888;
    var v1197 = chunks[2];
    if (v1197) {
      var v1196;
      var v1389 = chunks[1];
      if (v1389) {
        var v1388;
        var v1563 = chunks[1];
        var v1498 = v1563 == "-";
        if (v1498) {
          v1388 = -1;
        } else {
          v1388 = chunks[1];
        }
        v1196 = v1388;
      } else {
        v1196 = 1;
      }
      v888 = v1196;
    } else {
      v888 = 0;
    }
    var v388 = v888;
    pA$$1 = parseInt(v388);
    var v889;
    var v1199 = chunks[3];
    if (v1199) {
      v889 = chunks[3];
    } else {
      var v1198;
      var v1499 = chunks[1];
      if (v1499) {
        var v1564 = chunks[2];
        v1499 = !v1564;
      }
      var v1390 = v1499;
      if (v1390) {
        v1198 = chunks[1];
      } else {
        v1198 = 0;
      }
      v889 = v1198;
    }
    var v389 = v889;
    pB$$1 = parseInt(v389);
  }
  var v890 = s$$2.indexOf("#");
  var v403 = v890 != -1;
  if (v403) {
    var v1391 = s$$2.indexOf("#");
    var v1200 = v1391 + 1;
    var v891 = s$$2.substr(v1200);
    var v391 = document.getElementById(v891);
    JAM.call(this.postProcess, this, [v391]);
  } else {
    var v892 = s$$2.indexOf(".");
    var v402 = v892 != -1;
    if (v402) {
      chunks = s$$2.split(".");
      var v1392 = chunks[0];
      var v1201 = v1392.length;
      var v893 = v1201 + 1;
      var v392 = s$$2.substr(v893);
      var classMatch = JAM.call(v392.replace, v392, [".", " "]);
      var v1615 = "^" + classMatch;
      var v1599 = v1615 + "$|^";
      var v1565 = v1599 + classMatch;
      var v1500 = v1565 + "\\s|\\s";
      var v1393 = v1500 + classMatch;
      var v1202 = v1393 + "\\s|\\s";
      var v894 = v1202 + classMatch;
      var v393 = v894 + "$";
      var className = new RegExp(v393, "i");
      var v895;
      var v1203 = chunks[0];
      if (v1203) {
        v895 = chunks[0];
      } else {
        v895 = "*";
      }
      var v394 = v895;
      objs = target$$26.getElementsByTagName(v394);
      i$$3 = 0;
      numObjs = objs.length;
      var v397 = i$$3 < numObjs;
      for (;v397;) {
        var v1204 = !oneLevelOnly;
        if (v1204) {
          var v1501 = objs[i$$3];
          var v1394 = v1501.className;
          v1204 = className.test(v1394);
        }
        var v896 = v1204;
        var v1206 = !v896;
        if (v1206) {
          var v1395 = oneLevelOnly;
          if (v1395) {
            var v1566 = objs[i$$3];
            var v1502 = v1566.className;
            v1395 = className.test(v1502);
          }
          var v1205 = v1395;
          if (v1205) {
            var v1503 = objs[i$$3];
            var v1396 = v1503.parentNode;
            v1205 = v1396 == target$$26;
          }
          v896 = v1205;
        }
        var v396 = v896;
        if (v396) {
          var v395 = objs[i$$3];
          JAM.call(this.postProcess, this, [v395]);
        }
        i$$3++;
        v397 = i$$3 < numObjs;
      }
    } else {
      var v897 = s$$2 == "*";
      var v1207 = !v897;
      if (v1207) {
        v897 = /^[A-Za-z0-9]+$/.test(s$$2);
      }
      var v401 = v897;
      if (v401) {
        i$$3 = 0;
        objs = target$$26.getElementsByTagName(s$$2);
        numObjs = objs.length;
        var v400 = i$$3 < numObjs;
        for (;v400;) {
          var v898 = !oneLevelOnly;
          var v1209 = !v898;
          if (v1209) {
            var v1208 = oneLevelOnly;
            if (v1208) {
              var v1504 = objs[i$$3];
              var v1397 = v1504.parentNode;
              v1208 = v1397 == target$$26;
            }
            v898 = v1208;
          }
          var v399 = v898;
          if (v399) {
            var v398 = objs[i$$3];
            JAM.call(this.postProcess, this, [v398]);
          }
          i$$3++;
          v400 = i$$3 < numObjs;
        }
      }
    }
  }
  return matches;
}
function v44(match$$1, pSelector, pA, pB) {
  var pCache;
  var nodeKey;
  var parentChildren = [];
  var pI = 0;
  var v1210 = match$$1.parentNode;
  var v899 = nodeKey = v1210.getAttribute("midorinodekey");
  var v406 = !v899;
  if (v406) {
    var v404 = match$$1.parentNode;
    var v1211 = Math.random();
    var v900 = v1211.toString();
    var v405 = nodeKey = v900.substr(2);
    JAM.call(v404.setAttribute, v404, ["midorinodekey", v405]);
  }
  var v901 = this.pCache;
  var v410 = pCache = v901[nodeKey];
  if (v410) {
    parentChildren = pCache["parentChildren"];
    pI = pCache["pI"];
  } else {
    var v407 = match$$1.parentNode;
    var c$$2 = v407.firstChild;
    for (;c$$2;) {
      var v902 = c$$2.nodeType;
      var v408 = v902 == 1;
      if (v408) {
        parentChildren.push(c$$2);
      }
      c$$2 = c$$2.nextSibling;
    }
    var v409 = this.pCache;
    introspect(JAM.policy.p1) {
      v409[nodeKey] = {parentChildren:parentChildren, pI:0};
    }
  }
  var parentNumChildren = parentChildren.length;
  switch(pSelector) {
    case "first-child":
      var v903 = parentChildren[0];
      var v411 = match$$1 == v903;
      if (v411) {
        return true;
      }
      break;
    case "last-child":
      var v1212 = parentNumChildren - 1;
      var v904 = parentChildren[v1212];
      var v412 = match$$1 == v904;
      if (v412) {
        return true;
      }
      break;
    case "only-child":
      var v413 = parentNumChildren == 1;
      if (v413) {
        return true;
      }
    ;
  }
  var v419 = pSelector == "nth-child";
  if (v419) {
    var v414 = pA * pI;
    var v = v414 + pB;
    var oldV = -50;
    var v905 = v > -50;
    if (v905) {
      v905 = v <= parentNumChildren;
    }
    var v418 = v905;
    for (;v418;) {
      var v906 = v >= 0;
      if (v906) {
        var v1398 = v - 1;
        var v1213 = parentChildren[v1398];
        v906 = v1213 == match$$1;
      }
      var v416 = v906;
      if (v416) {
        var v907 = this.pCache;
        var v415 = v907[nodeKey];
        var v908;
        var v1214 = pA >= 0;
        if (v1214) {
          v908 = pI + 1;
        } else {
          v908 = 0;
        }
        v415["pI"] = v908;
        return true;
      }
      pI++;
      v = v + pA;
      var v417 = v == oldV;
      if (v417) {
        break;
      }
      oldV = v;
      var v909 = v > -50;
      if (v909) {
        v909 = v <= parentNumChildren;
      }
      v418 = v909;
    }
  }
  return;
}
function v43(match, a, exprs) {
  var i$$2 = 0;
  var numA = a.length;
  var attr;
  var v425 = i$$2 < numA;
  for (;v425;) {
    var v420;
    var v1215 = a[i$$2];
    var v912 = v1215 == "class";
    if (v912) {
      var v910;
      var v1216 = match.className;
      if (v1216) {
        v910 = match.className;
      } else {
        v910 = null;
      }
      v420 = v910;
    } else {
      var v911 = a[i$$2];
      v420 = match.getAttribute(v911);
    }
    attr = v420;
    var v913 = exprs[i$$2];
    var v424 = typeof v913;
    switch(v424) {
      case "undefined":
        var v421 = attr == null;
        if (v421) {
          return false;
        }
        break;
      case "string":
        var v914 = exprs[i$$2];
        var v422 = attr == v914;
        if (v422) {
          return false;
        }
        break;
      default:
        var v1217 = exprs[i$$2];
        var v915 = v1217.test(attr);
        var v423 = !v915;
        if (v423) {
          return false;
        }
      ;
    }
    i$$2++;
    v425 = i$$2 < numA;
  }
  return true;
}
function v42(selectorText) {
  var v426 = JAM.call(this.trim, this, [selectorText]);
  var c$$1 = v426.split("");
  var sI = -1;
  var bracketContent = "";
  var elements = [];
  var attrs = [];
  var separators = [];
  var inSelector = false;
  var inBrackets = false;
  var inQuotes = false;
  var i$$1 = 0;
  var len = c$$1.length;
  var v433 = i$$1 < len;
  for (;v433;) {
    if (inSelector) {
      if (inBrackets) {
        var v429 = c$$1[i$$1];
        switch(v429) {
          case '"':
            inQuotes = !inQuotes;
            break;
          case "]":
            var v428 = !inQuotes;
            if (v428) {
              var v427 = attrs[sI];
              v427.push(bracketContent);
              inBrackets = false;
              bracketContent = "";
            }
            break;
          case "\\":
            var v1218 = i$$1 = i$$1 + 1;
            var v916 = c$$1[v1218];
            bracketContent = bracketContent + v916;
            break;
          default:
            var v917 = c$$1[i$$1];
            bracketContent = bracketContent + v917;
        }
      } else {
        var v430 = c$$1[i$$1];
        switch(v430) {
          case "[":
            inBrackets = true;
            break;
          case " ":
          ;
          case ">":
          ;
          case ",":
            inSelector = false;
            separators[sI] = c$$1[i$$1];
            break;
          case "\\":
            var v918 = elements[sI];
            var v1219 = i$$1 = i$$1 + 1;
            var v919 = c$$1[v1219];
            elements[sI] = v918 + v919;
            break;
          default:
            var v920 = elements[sI];
            var v921 = c$$1[i$$1];
            elements[sI] = v920 + v921;
        }
      }
    } else {
      var v432 = c$$1[i$$1];
      switch(v432) {
        case " ":
        ;
        case ">":
        ;
        case ",":
          var v922 = separators[sI];
          var v923 = c$$1[i$$1];
          separators[sI] = v922 + v923;
          break;
        default:
          inSelector = true;
          var v431 = sI = sI + 1;
          elements[v431] = c$$1[i$$1];
          attrs[sI] = [];
      }
    }
    i$$1++;
    v433 = i$$1 < len;
  }
  return {elements:elements, attrs:attrs, separators:separators};
}
function v41(obj$$16, direction$$3) {
  var sibling = obj$$16;
  var v437 = direction$$3 == "next";
  if (v437) {
    var v924 = sibling;
    if (v924) {
      var v1220 = sibling.nodeType;
      v924 = v1220 == 3;
    }
    var v434 = v924;
    do {
      sibling = sibling.nextSibling;
      var v925 = sibling;
      if (v925) {
        var v1221 = sibling.nodeType;
        v925 = v1221 == 3;
      }
      v434 = v925;
    } while (v434);
  } else {
    var v436 = direction$$3 == "prev";
    if (v436) {
      var v926 = sibling;
      if (v926) {
        var v1222 = sibling.nodeType;
        v926 = v1222 == 3;
      }
      var v435 = v926;
      do {
        sibling = sibling.previousSibling;
        var v927 = sibling;
        if (v927) {
          var v1223 = sibling.nodeType;
          v927 = v1223 == 3;
        }
        v435 = v927;
      } while (v435);
    }
  }
  var v438;
  var v928 = sibling == obj$$16;
  if (v928) {
    v438 = false;
  } else {
    v438 = sibling;
  }
  return v438;
}
function v40(parentObj, callBack, depthFirst) {
  var c = parentObj.firstChild;
  for (;c;) {
    var v439 = !depthFirst;
    if (v439) {
      JAM.call(callBack, null, [c]);
    }
    var v440 = c.firstChild;
    if (v440) {
      JAM.call(this.each, this, [c, callBack, depthFirst]);
    }
    if (depthFirst) {
      JAM.call(callBack, null, [c]);
    }
    c = c.nextSibling;
  }
  return;
}
function midoriTableSelection(vars$$6) {
  function v4() {
    var v441 = this.rowIds;
    var numRowIds = v441.length;
    var v1616 = this.vars;
    var v1600 = v1616.rowPrefix;
    var v1567 = "#" + v1600;
    var v1505 = v1567 + "header-cb";
    var v1399 = JAM.call(midori.get, midori, [v1505]);
    var v1224 = v1399.style;
    var v929 = v1224.display;
    var v456 = v929 == "none";
    if (v456) {
      var v1568 = this.vars;
      var v1506 = v1568.rowPrefix;
      var v1400 = "#" + v1506;
      var v1225 = v1400 + "header-cb";
      var v930 = JAM.call(midori.get, midori, [v1225]);
      var v442 = v930.style;
      v442.display = "";
      var i$$19 = 0;
      var v448 = i$$19 < numRowIds;
      for (;v448;) {
        var v443 = this.rowIds;
        var rowId = v443[i$$19];
        var v1601 = this.vars;
        var v1569 = v1601.rowPrefix;
        var v1507 = "#" + v1569;
        var v1401 = v1507 + "cb_";
        var v1226 = v1401 + rowId;
        var v931 = JAM.call(midori.get, midori, [v1226]);
        var v444 = v931.style;
        v444.display = "";
        var v1617 = this.vars;
        var v1602 = v1617.rowPrefix;
        var v1570 = "#" + v1602;
        var v1508 = v1570 + "cb_";
        var v1402 = v1508 + rowId;
        var v1227 = JAM.call(midori.get, midori, [v1402]);
        var v932 = v1227.firstChild;
        var v447 = v932.checked;
        if (v447) {
          var v1509 = this.vars;
          var v1403 = v1509.rowPrefix;
          var v1228 = "#" + v1403;
          var v933 = v1228 + rowId;
          var v445 = JAM.call(midori.get, midori, [v933]);
          var v934 = this.vars;
          var v446 = v934.rowHighlight;
          JAM.call(midori.highlightRow, midori, [v445, v446]);
        }
        i$$19++;
        v448 = i$$19 < numRowIds;
      }
      var v449 = vars$$6.showCallback;
      if (v449) {
        JAM.call(vars$$6.showCallback, vars$$6, [this]);
      }
    } else {
      var v1571 = this.vars;
      var v1510 = v1571.rowPrefix;
      var v1404 = "#" + v1510;
      var v1229 = v1404 + "header-cb";
      var v935 = JAM.call(midori.get, midori, [v1229]);
      var v450 = v935.style;
      v450.display = "none";
      i$$19 = 0;
      var v454 = i$$19 < numRowIds;
      for (;v454;) {
        var v1603 = this.vars;
        var v1572 = v1603.rowPrefix;
        var v1511 = "#" + v1572;
        var v1405 = v1511 + "cb_";
        var v1512 = this.rowIds;
        var v1406 = v1512[i$$19];
        var v1230 = v1405 + v1406;
        var v936 = JAM.call(midori.get, midori, [v1230]);
        var v451 = v936.style;
        v451.display = "none";
        var v1513 = this.vars;
        var v1407 = v1513.rowPrefix;
        var v1231 = "#" + v1407;
        var v1408 = this.rowIds;
        var v1232 = v1408[i$$19];
        var v937 = v1231 + v1232;
        var v452 = JAM.call(midori.get, midori, [v937]);
        var v938 = this.vars;
        var v453 = v938.rowHighlight;
        JAM.call(midori.highlightRow, midori, [v452, v453, true]);
        i$$19++;
        v454 = i$$19 < numRowIds;
      }
      var v455 = vars$$6.hideCallback;
      if (v455) {
        JAM.call(vars$$6.hideCallback, vars$$6, [this]);
      }
    }
    return;
  }
  function v3(o$$7) {
    function v2(e$$8) {
      var v1409 = vars$$6.rowPrefix;
      var v1233 = "#" + v1409;
      var v939 = v1233 + id$$4;
      var v457 = JAM.call(midori.get, midori, [v939]);
      var v458 = vars$$6.rowHighlight;
      JAM.call(midori.highlightRow, midori, [v457, v458]);
      var v1410 = vars$$6.tableId;
      var v1234 = "#" + v1410;
      var v940 = v1234 + "_cb_parent";
      var v459 = JAM.call(midori.get, midori, [v940]);
      JAM.call(midori.saveCheckboxState, midori, [v459, el$$2]);
      this.value = id$$4;
      return;
    }
    function v1(c$$3) {
      className$$2 = c$$3.className;
      return;
    }
    var td;
    var el$$2;
    var id$$4;
    var className$$2;
    var v460 = JAM.call(midori.get, midori, ["td:last-child", o$$7]);
    JAM.call(v460.apply, v460, [v1]);
    var v461 = o$$7.id;
    var v941 = vars$$6.rowPrefix;
    var v462 = v941.length;
    id$$4 = v461.substr(v462);
    td = document.createElement("td");
    var v463 = td.style;
    v463.display = "none";
    var v1411 = vars$$6.rowPrefix;
    var v1235 = v1411 + "cb_";
    var v942 = v1235 + id$$4;
    var v464 = {id:v942, className:className$$2};
    JAM.call(midori.setAttributes, midori, [td, v464]);
    el$$2 = document.createElement("input");
    var v943 = vars$$6.checkboxName;
    var v465 = {name:v943, type:"checkbox", value:id$$4};
    JAM.call(midori.setAttributes, midori, [el$$2, v465]);
    JAM.call(midori.addEventListener, midori, [el$$2, "click", v2]);
    JAM.call(td.appendChild, td, [el$$2]);
    JAM.call(o$$7.appendChild, o$$7, [td]);
    var v466 = thisObj.rowIds;
    v466.push(id$$4);
    return;
  }
  function v0(e$$7) {
    var id$$3;
    var el$$1;
    var isChecked;
    var i$$18 = 0;
    var v467 = thisObj.rowIds;
    var numIds = v467.length;
    var v474 = i$$18 < numIds;
    for (;v474;) {
      var v468 = thisObj.rowIds;
      id$$3 = v468[i$$18];
      var v1514 = vars$$6.rowPrefix;
      var v1412 = "#" + v1514;
      var v1236 = v1412 + "cb_";
      var v944 = v1236 + id$$3;
      var v469 = JAM.call(midori.get, midori, [v944]);
      el$$1 = v469.firstChild;
      isChecked = el$$1.checked;
      el$$1.checked = !isChecked;
      var v470;
      if (isChecked) {
        v470 = "";
      } else {
        v470 = id$$3;
      }
      el$$1.value = v470;
      var v1413 = vars$$6.rowPrefix;
      var v1237 = "#" + v1413;
      var v945 = v1237 + id$$3;
      var v471 = JAM.call(midori.get, midori, [v945]);
      var v472 = vars$$6.rowHighlight;
      JAM.call(midori.highlightRow, midori, [v471, v472]);
      var v1414 = vars$$6.tableId;
      var v1238 = "#" + v1414;
      var v946 = v1238 + "_cb_parent";
      var v473 = JAM.call(midori.get, midori, [v946]);
      JAM.call(midori.saveCheckboxState, midori, [v473, el$$1]);
      i$$18++;
      v474 = i$$18 < numIds;
    }
    return;
  }
  this.vars = vars$$6;
  this.rowIds = [];
  var thisObj = this;
  var cb$$1 = document.createElement("input");
  JAM.call(cb$$1.setAttribute, cb$$1, ["type", "checkbox"]);
  JAM.call(midori.addEventListener, midori, [cb$$1, "click", v0]);
  var v1415 = vars$$6.tableId;
  var v1239 = "#" + v1415;
  var v947 = v1239 + " th";
  var v475 = JAM.call(midori.get, midori, [v947]);
  var firstTh = v475[0];
  var th = document.createElement("th");
  var v1240 = vars$$6.rowPrefix;
  var v948 = v1240 + "header-cb";
  var v949 = firstTh.className;
  var v476 = {id:v948, align:"left", className:v949};
  JAM.call(midori.setAttributes, midori, [th, v476]);
  JAM.call(th.appendChild, th, [cb$$1]);
  var v477 = th.style;
  v477.display = "none";
  var v478 = firstTh.parentNode;
  JAM.call(v478.appendChild, v478, [th]);
  var cbParent = document.createElement("div");
  var v479 = vars$$6.tableId;
  cbParent.id = v479 + "_cb_parent";
  var v480 = document.body;
  JAM.call(v480.appendChild, v480, [cbParent]);
  var v1573 = vars$$6.tableId;
  var v1515 = "#" + v1573;
  var v1416 = v1515 + ' tr[id^="';
  var v1417 = vars$$6.rowPrefix;
  var v1241 = v1416 + v1417;
  var v950 = v1241 + '"]';
  var v481 = JAM.call(midori.get, midori, [v950]);
  JAM.call(v481.apply, v481, [v3]);
  this.toggle = v4;
  return;
}
function midoriDragDrop(containerId$$1, dropCallback) {
  function v18(e$$14) {
    JAM.call(thisObj$$1.mouseUp, thisObj$$1, [e$$14]);
    return;
  }
  function v17(e$$13) {
    JAM.call(thisObj$$1.mouseMove, thisObj$$1, [e$$13]);
    return;
  }
  function v16(e$$12) {
    var v482 = thisObj$$1.doneDragging;
    if (v482) {
      JAM.call(midori.preventDefault, midori, [e$$12]);
    }
    return;
  }
  function v15(e$$11) {
    JAM.call(thisObj$$1.mouseUp, thisObj$$1, [e$$11]);
    return;
  }
  function v14(e$$10) {
    JAM.call(thisObj$$1.mouseMove, thisObj$$1, [e$$10]);
    return;
  }
  function v13(o$$10, dragged, spacer) {
    var v1242 = o$$10.obj;
    var v951 = v1242.className;
    var v485 = /drop-target/.test(v951);
    if (v485) {
      var v483 = o$$10.obj;
      var v952;
      if (spacer) {
        v952 = spacer;
      } else {
        v952 = dragged;
      }
      var v484 = v952;
      return JAM.call(v483.appendChild, v483, [v484]);
    }
    var v486;
    var v1418 = o$$10.where;
    var v1243 = v1418 == "next";
    if (v1243) {
      var v1516 = o$$10.obj;
      var v1419 = v1516.nextSibling;
      v1243 = !v1419;
    }
    var v958 = v1243;
    if (v958) {
      var v1244 = o$$10.obj;
      var v953 = v1244.parentNode;
      var v1245;
      if (spacer) {
        v1245 = spacer;
      } else {
        v1245 = dragged;
      }
      var v954 = v1245;
      v486 = JAM.call(v953.appendChild, v953, [v954]);
    } else {
      var v1246 = o$$10.obj;
      var v955 = v1246.parentNode;
      var v1247;
      if (spacer) {
        v1247 = spacer;
      } else {
        v1247 = dragged;
      }
      var v956 = v1247;
      var v1248;
      var v1517 = o$$10.where;
      var v1421 = v1517 == "prev";
      if (v1421) {
        v1248 = o$$10.obj;
      } else {
        var v1420 = o$$10.obj;
        v1248 = v1420.nextSibling;
      }
      var v957 = v1248;
      v486 = JAM.call(v955.insertBefore, v955, [v956, v957]);
    }
    return v486;
  }
  function v12(event$$7) {
    this.doneDragging = false;
    var v959 = this.dragged;
    var v487 = !v959;
    if (v487) {
      return;
    }
    var objCoords$$2;
    var v960 = this.mouseMoved;
    if (v960) {
      v960 = objCoords$$2 = JAM.call(this.findPlace, this, [event$$7, true]);
    }
    var v489 = v960;
    if (v489) {
      var v488 = this.dragged;
      JAM.call(this.dropCallback, this, [objCoords$$2, v488]);
      this.doneDragging = true;
    }
    var v961 = this.dragged;
    var v490 = !v961;
    if (v490) {
      return;
    }
    var v962 = this.spacer;
    var v491 = v962.style;
    v491.display = "none";
    var v492 = this.dragged;
    var v493 = {position:"", opacity:"1"};
    JAM.call(midori.setStyles, midori, [v492, v493]);
    var v494 = this.container;
    JAM.call(this.init, this, [v494]);
    return;
  }
  function v11(event$$6) {
    var v1249 = this.dragged;
    var v963 = !v1249;
    var v1251 = !v963;
    if (v1251) {
      var v1422 = this.dragged;
      var v1250 = v1422.className;
      v963 = /drop-target/.test(v1250);
    }
    var v495 = v963;
    if (v495) {
      return;
    }
    JAM.call(midori.preventDefault, midori, [event$$6]);
    var mousePos$$2 = JAM.call(midori.getMousePos, midori, [event$$6]);
    this.lastMousePos = mousePos$$2;
    this.mouseMoved = true;
    var v496 = this.dragged;
    var v1423 = mousePos$$2.x;
    var v1518 = this.mouseOffset;
    var v1424 = v1518.x;
    var v1252 = v1423 - v1424;
    var v964 = v1252 + "px";
    var v1425 = mousePos$$2.y;
    var v1519 = this.mouseOffset;
    var v1426 = v1519.y;
    var v1253 = v1425 - v1426;
    var v965 = v1253 + "px";
    var v497 = {position:"absolute", left:v964, top:v965};
    JAM.call(midori.setStyles, midori, [v496, v497]);
    var v498 = this.spacer;
    var v966 = this.dragged;
    var v499 = JAM.call(midori.getFloat, midori, [v966]);
    JAM.call(midori.setFloat, midori, [v498, v499]);
    var objCoords$$1;
    var v967 = objCoords$$1 = JAM.call(this.findPlace, this, [event$$6]);
    if (v967) {
      var v1254 = this.dragged;
      var v1255 = this.spacer;
      v967 = JAM.call(this.dropCallback, this, [objCoords$$1, v1254, v1255]);
    }
    var v505 = v967;
    if (v505) {
      var v500 = this.spacer;
      var v1427 = this.dragged;
      var v1256 = v1427.offsetHeight;
      var v968 = v1256 + "px";
      var v501 = {display:"block", height:v968};
      JAM.call(midori.setStyles, midori, [v500, v501]);
      var v969 = this.spacer;
      var v503 = JAM.call(midori.getFloat, midori, [v969]);
      if (v503) {
        var v970 = this.spacer;
        var v502 = v970.style;
        var v1257 = this.dragged;
        var v971 = v1257.offsetWidth;
        v502.width = v971 + "px";
      }
    } else {
      var v972 = this.spacer;
      var v504 = v972.style;
      v504.display = "none";
    }
    return;
  }
  function v10(parentObj$$1) {
    function v9(o$$9) {
      var v1258 = o$$9.className;
      var v973 = /draggable/.test(v1258);
      var v506 = !v973;
      if (v506) {
        return;
      }
      j$$3 = 0;
      var v509 = j$$3 < numObjs$$4;
      for (;v509;) {
        var v1259 = thisObj$$1.objs;
        var v974 = v1259[j$$3];
        var v508 = v974 == o$$9;
        if (v508) {
          var v507 = thisObj$$1.objs;
          v507[j$$3] = "";
          break;
        }
        j$$3++;
        v509 = j$$3 < numObjs$$4;
      }
      return;
    }
    var j$$3;
    var v510 = this.objs;
    var numObjs$$4 = v510.length;
    JAM.call(midori.each, midori, [parentObj$$1, v9, true]);
    j$$3 = 0;
    var v513 = j$$3 < numObjs$$4;
    for (;v513;) {
      var v1260 = this.objs;
      var v975 = v1260[j$$3];
      var v512 = v975 == parentObj$$1;
      if (v512) {
        var v511 = this.objs;
        v511[j$$3] = "";
        break;
      }
      j$$3++;
      v513 = j$$3 < numObjs$$4;
    }
    return;
  }
  function v8(event$$5, mouseUp) {
    var v514;
    var v1261 = mouseUp;
    if (v1261) {
      v1261 = event$$5.targetTouches;
    }
    var v976 = v1261;
    if (v976) {
      v514 = this.lastMousePos;
    } else {
      v514 = JAM.call(midori.getMousePos, midori, [event$$5]);
    }
    var mousePos$$1 = v514;
    var obj$$26;
    var objCoords;
    var objPos$$1;
    var v1262 = this.objsCoords;
    var v977 = v1262.length;
    var v520 = !v977;
    if (v520) {
      var i$$21 = 0;
      var v515 = this.objs;
      var numObjs$$3 = v515.length;
      var v519 = i$$21 < numObjs$$3;
      for (;v519;) {
        var v1263 = this.objs;
        var v978 = obj$$26 = v1263[i$$21];
        if (v978) {
          v978 = objPos$$1 = JAM.call(midori.getPos, midori, [obj$$26]);
        }
        var v518 = v978;
        if (v518) {
          var v516 = this.objsCoords;
          var v979 = objPos$$1.x;
          var v980 = objPos$$1.y;
          var v981 = obj$$26.offsetWidth;
          var v982 = obj$$26.offsetHeight;
          var v517 = {obj:obj$$26, x:v979, y:v980, width:v981, height:v982};
          v516.push(v517);
        }
        i$$21++;
        v519 = i$$21 < numObjs$$3;
      }
    }
    var j$$2 = 0;
    var v521 = this.objsCoords;
    var numObjsCoords = v521.length;
    var v525 = j$$2 < numObjsCoords;
    for (;v525;) {
      var v983 = this.objsCoords;
      var v524 = objCoords = v983[j$$2];
      if (v524) {
        var v1520 = mousePos$$1.x;
        var v1521 = objCoords.x;
        var v1428 = v1520 >= v1521;
        if (v1428) {
          var v1522 = mousePos$$1.x;
          var v1574 = objCoords.x;
          var v1575 = objCoords.width;
          var v1523 = v1574 + v1575;
          v1428 = v1522 <= v1523;
        }
        var v1264 = v1428;
        if (v1264) {
          var v1524 = mousePos$$1.y;
          var v1525 = objCoords.y;
          var v1429 = v1524 >= v1525;
          if (v1429) {
            var v1526 = mousePos$$1.y;
            var v1576 = objCoords.y;
            var v1577 = objCoords.height;
            var v1527 = v1576 + v1577;
            v1429 = v1526 <= v1527;
          }
          v1264 = v1429;
        }
        var v984 = v1264;
        var v522 = !v984;
        if (v522) {
          j$$2++;
          v525 = j$$2 < numObjsCoords;
          continue;
        }
        var v523;
        var v1265 = objCoords.obj;
        var v987 = JAM.call(midori.getFloat, midori, [v1265]);
        if (v987) {
          var v985;
          var v1430 = mousePos$$1.x;
          var v1528 = objCoords.x;
          var v1578 = objCoords.width;
          var v1529 = v1578 / 2;
          var v1431 = v1528 + v1529;
          var v1266 = v1430 < v1431;
          if (v1266) {
            v985 = "prev";
          } else {
            v985 = "next";
          }
          v523 = v985;
        } else {
          var v986;
          var v1432 = mousePos$$1.y;
          var v1530 = objCoords.y;
          var v1579 = objCoords.height;
          var v1531 = v1579 / 2;
          var v1433 = v1530 + v1531;
          var v1267 = v1432 < v1433;
          if (v1267) {
            v986 = "prev";
          } else {
            v986 = "next";
          }
          v523 = v986;
        }
        objCoords.where = v523;
        return objCoords;
      }
      j$$2++;
      v525 = j$$2 < numObjsCoords;
    }
    return;
  }
  function v7() {
    function v6(o$$8) {
      function v5(e$$9) {
        var mousePos = JAM.call(midori.getMousePos, midori, [e$$9]);
        var me$$2 = JAM.call(midori.getEventTarget, midori, [e$$9]);
        var v988 = me$$2.className;
        var v526 = /not-draggable/.test(v988);
        if (v526) {
          return;
        }
        var v1268 = me$$2.className;
        var v989 = /draggable/.test(v1268);
        var v527 = !v989;
        for (;v527;) {
          me$$2 = me$$2.parentNode;
          var v1269 = me$$2.className;
          var v990 = /draggable/.test(v1269);
          v527 = !v990;
        }
        var objPos = JAM.call(midori.getPos, midori, [me$$2]);
        thisObj$$1.dragged = me$$2;
        var v991 = mousePos.x;
        var v992 = objPos.x;
        var v528 = v991 - v992;
        var v993 = mousePos.y;
        var v994 = objPos.y;
        var v529 = v993 - v994;
        thisObj$$1.mouseOffset = {x:v528, y:v529};
        var v1270 = o$$8.className;
        var v995 = /drop-target/.test(v1270);
        var v531 = !v995;
        if (v531) {
          var v530 = me$$2.style;
          v530.opacity = ".5";
          JAM.call(midori.preventBubble, midori, [e$$9]);
          JAM.call(midori.preventDefault, midori, [e$$9]);
        }
        JAM.call(thisObj$$1.removeDraggedObj, thisObj$$1, [me$$2]);
        return;
      }
      var v1434 = o$$8.className;
      var v1271 = /not-draggable/.test(v1434);
      var v1436 = !v1271;
      if (v1436) {
        var v1532 = o$$8.className;
        var v1435 = /draggable/.test(v1532);
        v1271 = !v1435;
      }
      var v996 = v1271;
      var v1273 = !v996;
      if (v1273) {
        var v1437 = o$$8.style;
        var v1272 = v1437.display;
        v996 = v1272 == "none";
      }
      var v532 = v996;
      if (v532) {
        return;
      }
      var v533 = thisObj$$1.objs;
      v533.push(o$$8);
      var i$$20 = 0;
      var v535 = i$$20 < 2;
      for (;v535;) {
        var v997 = ["mousedown", "touchstart"];
        var v534 = v997[i$$20];
        JAM.call(midori.addEventListener, midori, [o$$8, v534, v5]);
        i$$20++;
        v535 = i$$20 < 2;
      }
      return;
    }
    this.objs = [];
    this.objsCoords = [];
    this.mouseMoved = false;
    this.dragged = null;
    var v536 = this.container;
    JAM.call(midori.each, midori, [v536, v6, true]);
    return;
  }
  var thisObj$$1 = this;
  var v537 = "#" + containerId$$1;
  var v1636 = JAM.call(midori.get, midori, [v537]);
  this.container = v1636;
  this.init = v7;
  this.findPlace = v8;
  this.removeDraggedObj = v10;
  this.mouseMove = v11;
  this.mouseUp = v12;
  this.defaultDropCallback = v13;
  var v538 = this.container;
  JAM.call(midori.addEventListener, midori, [v538, "mousemove", v14]);
  var v539 = this.container;
  JAM.call(midori.addEventListener, midori, [v539, "mouseup", v15]);
  var v540 = this.container;
  JAM.call(midori.addEventListener, midori, [v540, "click", v16]);
  var v541 = this.container;
  JAM.call(midori.addEventListener, midori, [v541, "touchmove", v17]);
  var v542 = this.container;
  JAM.call(midori.addEventListener, midori, [v542, "touchend", v18]);
  var v1637 = document.createElement("div");
  this.spacer = v1637;
  var v543 = this.spacer;
  JAM.set(v543, "innerHTML", "&nbsp;");
  var v544 = this.spacer;
  var v1274 = midori.uniqid();
  var v998 = "midori_dd_spacer" + v1274;
  var v545 = {id:v998, className:"midori-dd-spacer"};
  JAM.call(midori.setAttributes, midori, [v544, v545]);
  var v546;
  if (dropCallback) {
    v546 = dropCallback;
  } else {
    v546 = this.defaultDropCallback;
  }
  this.dropCallback = v546;
  this.init();
  return;
}
function midoriAjax(callback$$29) {
  function v20(where, what$$3) {
    var verb;
    var headers;
    var cachedValue;
    var v547 = where + "?";
    this.cacheKey = v547 + what$$3;
    var v999 = cache;
    if (v999) {
      var v1438 = this.cache;
      var v1439 = this.cacheKey;
      var v1275 = cachedValue = v1438[v1439];
      v999 = v1275 != null;
    }
    var v548 = v999;
    if (v548) {
      this.responseText = cachedValue;
      JAM.call(this.runCallback, this, ["", true]);
      return;
    }
    var v549 = this.request;
    JAM.set(v549, "onreadystatechange", this.runCallback);
    var v550;
    if (verb) {
      var v1440;
      var v1533 = verb == true;
      if (v1533) {
        v1440 = "GET";
      } else {
        v1440 = verb;
      }
      var v1276 = v1440;
      var v1000 = v1276.toUpperCase();
      v550 = JAM.call(midori.trim, midori, [v1000]);
    } else {
      v550 = "POST";
    }
    verb = v550;
    var v551 = this.request;
    var v1001;
    var v1441 = ["POST", "PUT"];
    var v1278 = JAM.call(midori.inArray, midori, [verb, v1441]);
    if (v1278) {
      v1001 = where;
    } else {
      var v1442;
      if (what$$3) {
        v1442 = "?" + what$$3;
      } else {
        v1442 = "";
      }
      var v1277 = v1442;
      v1001 = where + v1277;
    }
    var v552 = v1001;
    v551.open(verb, v552, true);
    var v1002 = ["POST", "PUT"];
    var v557 = JAM.call(midori.inArray, midori, [verb, v1002]);
    if (v557) {
      var v553 = this.request;
      v553.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
      var v554 = this.request;
      var v555 = what$$3.length;
      v554.setRequestHeader("Content-length", v555);
      var v556 = this.request;
      v556.setRequestHeader("Connection", "close");
    }
    if (headers) {
      var i$$22 = 0;
      var len$$2 = headers.length;
      var v561 = i$$22 < len$$2;
      for (;v561;) {
        var v558 = this.request;
        var v1003 = headers[i$$22];
        var v559 = v1003[0];
        var v1004 = headers[i$$22];
        var v560 = v1004[1];
        v558.setRequestHeader(v559, v560);
        i$$22++;
        v561 = i$$22 < len$$2;
      }
    }
    var v562 = this.request;
    var v1005;
    var v1443 = ["POST", "PUT"];
    var v1279 = JAM.call(midori.inArray, midori, [verb, v1443]);
    if (v1279) {
      v1005 = what$$3;
    } else {
      v1005 = null;
    }
    var v563 = v1005;
    v562.send(v563);
    return;
  }
  function v19(event$$8, cached) {
    var v570 = !cached;
    if (v570) {
      var v1280 = thisObj$$2.request;
      var v1006 = v1280.readyState;
      var v564 = v1006 != 4;
      if (v564) {
        return;
      }
      var v565 = thisObj$$2.request;
      thisObj$$2.responseText = v565.responseText;
      var v566 = thisObj$$2.request;
      thisObj$$2.responseXML = v566.responseXML;
      var v567 = thisObj$$2.request;
      thisObj$$2.status = v567.status;
      var v568 = thisObj$$2.cache;
      var v569 = thisObj$$2.cacheKey;
      introspect(JAM.policy.p1) {
        v568[v569] = thisObj$$2.responseText;
      }
    }
    JAM.call(thisObj$$2.callback, thisObj$$2, [params$$1]);
    return;
  }
  var params$$1 = "";
  var cache = true;
  var thisObj$$2 = this;
  this.cache = {};
  this.callback = callback$$29;
  try {
    var v1638 = new XMLHttpRequest;
    this.request = v1638;
  } catch (e$$15) {
    try {
      var v1639 = new ActiveXObject("Msxml2.XMLHTTP");
      this.request = v1639;
    } catch (e$$16) {
      var v1640 = new ActiveXObject("Microsoft.XMLHTTP");
      this.request = v1640;
    }
  }
  this.runCallback = v19;
  this.post = v20;
  return;
}
function midoriAutoComplete(vars$$7) {
  function v32() {
    function v31(e$$21) {
      JAM.call(thisObj$$3.process, thisObj$$3, [e$$21]);
      return;
    }
    function v30(e$$20) {
      var v1007 = e$$20.keyCode;
      var v571 = v1007 == 13;
      if (v571) {
        return false;
      }
      return;
    }
    function v29(e$$19) {
      var v1008 = e$$19.keyCode;
      var v572 = v1008 == 13;
      if (v572) {
        JAM.call(midori.preventDefault, midori, [e$$19]);
      }
      return;
    }
    function v28() {
      var v1009 = thisObj$$3.ajax;
      var v577 = v1009.responseText;
      if (v577) {
        var v573;
        var v1534 = thisObj$$3.ajax;
        var v1444 = v1534.responseText;
        var v1281 = typeof v1444;
        var v1012 = v1281 == "string";
        if (v1012) {
          var v1535 = thisObj$$3.ajax;
          var v1445 = v1535.responseText;
          var v1282 = "(" + v1445;
          var v1010 = v1282 + ")";
          if (JAM.isEval(eval)) {
            v573 = eval("introspect(JAM.policy.pFull) { " + v1010 + " }");
          } else {
            v573 = JAM.call(eval, null, [v1010]);
          }
        } else {
          var v1011 = thisObj$$3.ajax;
          v573 = v1011.responseText;
        }
        var response = v573;
        var v574 = thisObj$$3.suggestions;
        var v575 = response["snippet"];
        introspect(JAM.policy.p1) {
          v574[v575] = response["result"];
        }
        var v576 = response["snippet"];
        JAM.call(thisObj$$3.showSuggestions, thisObj$$3, [v576]);
      }
      return;
    }
    var v1013 = vars$$7.separator;
    var v578 = !v1013;
    if (v578) {
      vars$$7.separator = "";
    }
    this.ajaxCallback = v28;
    var v1641 = midori.uniqid();
    this.uniqid = v1641;
    var v1014 = vars$$7.id;
    var v579 = "#" + v1014;
    var v1642 = JAM.call(midori.get, midori, [v579]);
    this.obj = v1642;
    var v580 = this.obj;
    this.content = v580.value;
    this.oldContent = this.content;
    this.suggestions = [];
    var v581;
    var v1446 = vars$$7.fileName;
    var v1283 = typeof v1446;
    var v1016 = v1283 == "string";
    if (v1016) {
      var v1015 = this.ajaxCallback;
      v581 = new midoriAjax(v1015);
    } else {
      v581 = {};
    }
    this.ajax = v581;
    var v1017 = this.browserType;
    var v584 = v1017 != "Gecko";
    if (v584) {
      var parentNode$$2 = this.obj;
      JAM.call(midori.addEventListener, midori, [parentNode$$2, "keypress", v29]);
      var v1018 = parentNode$$2.parentNode;
      var v583 = v1018 != null;
      for (;v583;) {
        parentNode$$2 = parentNode$$2.parentNode;
        var v1284 = parentNode$$2.nodeName;
        var v1019 = v1284.toLowerCase();
        var v582 = v1019 == "form";
        if (v582) {
          JAM.call(midori.addEventListener, midori, [parentNode$$2, "keypress", v30]);
        }
        var v1020 = parentNode$$2.parentNode;
        v583 = v1020 != null;
      }
    }
    var v585 = this.obj;
    JAM.call(v585.setAttribute, v585, ["autocomplete", "off"]);
    var v586 = this.obj;
    JAM.call(midori.addEventListener, midori, [v586, "keyup", v31]);
    return;
  }
  function v27(snippet$$3) {
    var pos = 0;
    var i$$25;
    var v1021 = this.suggestions;
    var v589 = v1021[snippet$$3];
    for (i$$25 in v589) {
      var v1022 = pos = pos + 1;
      var v1023 = this.suggestionPos;
      var v588 = v1022 == v1023;
      if (v588) {
        var v587 = this.obj;
        var v1285 = this.obj;
        var v1024 = v1285.value;
        var v1286;
        var v1449 = vars$$7.callback;
        if (v1449) {
          var v1580 = this.suggestions;
          var v1536 = v1580[snippet$$3];
          var v1447 = v1536[i$$25];
          v1286 = JAM.call(vars$$7.callback, vars$$7, [v1447]);
        } else {
          var v1537 = this.suggestions;
          var v1448 = v1537[snippet$$3];
          v1286 = v1448[i$$25];
        }
        var v1025 = v1286;
        var v1643 = JAM.call(v1024.replace, v1024, [snippet$$3, v1025]);
        v587.value = v1643;
        break;
      }
    }
    var v590 = this.obj;
    this.content = v590.value;
    this.oldContent = this.content;
    var v591 = this.obj;
    v591.focus();
    return;
  }
  function v26(suggestionPos) {
    var v1538 = this.popupId;
    var v1450 = "#" + v1538;
    var v1287 = v1450 + " .";
    var v1451 = vars$$7.suggestionSelectedClass;
    var v1288 = JAM.call(v1451.replace, v1451, [" ", "."]);
    var v1026 = v1287 + v1288;
    var v592 = JAM.call(midori.get, midori, [v1026]);
    var v1289 = vars$$7.suggestionClass;
    var v1027 = "className = '" + v1289;
    var v593 = v1027 + "'";
    JAM.call(v592.apply, v592, [v593]);
    var v1539 = this.uniqid;
    var v1452 = "#midori_suggestion" + v1539;
    var v1290 = v1452 + "_";
    var v1028 = v1290 + suggestionPos;
    var v594 = JAM.call(midori.get, midori, [v1028]);
    v594.className = vars$$7.suggestionSelectedClass;
    this.suggestionPos = suggestionPos;
    return;
  }
  function v25(snippet$$2) {
    var v595 = this.suggestions;
    var suggestions = v595[snippet$$2];
    var html = "";
    var properties = [];
    var i$$24 = 0;
    var j$$5 = 0;
    var k$$2 = "";
    for (i$$24 in suggestions) {
      var v598 = vars$$7.htmlTemplate;
      if (v598) {
        var v597 = suggestions[i$$24];
        for (k$$2 in v597) {
          var v596 = suggestions[i$$24];
          introspect(JAM.policy.p1) {
            properties[k$$2] = v596[k$$2];
          }
        }
      }
      var v1627 = this.uniqid;
      var v1625 = '<a id="midori_suggestion' + v1627;
      var v1618 = v1625 + "_";
      var v1619 = j$$5 = j$$5 + 1;
      var v1604 = v1618 + v1619;
      var v1581 = v1604 + '" class="';
      var v1582 = vars$$7.suggestionClass;
      var v1540 = v1581 + v1582;
      var v1453 = v1540 + '" href="#">';
      var v1541;
      var v1584 = vars$$7.htmlTemplate;
      if (v1584) {
        var v1583 = vars$$7.htmlTemplate;
        v1541 = JAM.call(midori.replace, midori, [v1583, properties]);
      } else {
        v1541 = suggestions[i$$24];
      }
      var v1454 = v1541;
      var v1291 = v1453 + v1454;
      var v1029 = v1291 + "</a>\n";
      html = html + v1029;
    }
    var v599 = !html;
    if (v599) {
      midoriPopup.hide();
      return;
    }
    this.snippet = snippet$$2;
    this.suggestionPos = 0;
    this.numSuggestions = j$$5;
    var v601 = this.popup;
    if (v601) {
      var v600 = this.popup;
      JAM.call(midori.removeNode, midori, [v600]);
    }
    var v602 = this.uniqid;
    this.popupId = "midori_suggestions" + v602;
    var v1644 = document.createElement("div");
    this.popup = v1644;
    var v603 = this.popup;
    var v1030 = this.popupId;
    var v604 = {id:v1030, className:"popup"};
    JAM.call(midori.setAttributes, midori, [v603, v604]);
    var v605 = document.body;
    var v606 = this.popup;
    JAM.call(v605.appendChild, v605, [v606]);
    var v607 = this.popup;
    JAM.set(v607, "innerHTML", html);
    j$$5 = 0;
    var v1031 = this.suggestions;
    var v609 = v1031[snippet$$2];
    for (i$$24 in v609) {
      var v608 = j$$5 = j$$5 + 1;
      JAM.call(this.addProperties, this, [v608, snippet$$2]);
    }
    var v1032 = this.obj;
    var v1033 = this.popupId;
    var v610 = {obj:v1032, popupId:v1033, x:0, y:0, noAnim:true};
    JAM.call(midoriPopup.show, midoriPopup, [v610]);
    var v611 = this.obj;
    v611.focus();
    return;
  }
  function v24(id$$5, snippet$$1) {
    function v23(e$$18) {
      JAM.call(thisObj$$3.replaceSnippet, thisObj$$3, [snippet$$1]);
      JAM.call(midori.preventDefault, midori, [e$$18]);
      return;
    }
    function v22(e$$17) {
      JAM.call(thisObj$$3.highlightSuggestion, thisObj$$3, [id$$5]);
      return;
    }
    var v1455 = this.uniqid;
    var v1292 = "#midori_suggestion" + v1455;
    var v1034 = v1292 + "_";
    var v612 = v1034 + id$$5;
    var obj$$27 = JAM.call(midori.get, midori, [v612]);
    JAM.call(midori.addEventListener, midori, [obj$$27, "mouseover", v22]);
    JAM.call(midori.addEventListener, midori, [obj$$27, "click", v23]);
    return;
  }
  function v21(event$$9) {
    var v1035 = this.popup;
    if (v1035) {
      var v1293 = this.popup;
      var v1294 = midoriPopup.activePopup;
      v1035 = v1293 == v1294;
    }
    var v620 = v1035;
    if (v620) {
      var v618 = event$$9.keyCode;
      switch(v618) {
        case 27:
        ;
        case 37:
        ;
        case 39:
          midoriPopup.hide();
          break;
        case 13:
          var v613 = this.snippet;
          JAM.call(this.replaceSnippet, this, [v613]);
          midoriPopup.hide();
          break;
        case 38:
          var v1036 = this.suggestionPos;
          if (v1036) {
            var v1295 = this.suggestionPos;
            v1036 = v1295 != 1;
          }
          var v615 = v1036;
          if (v615) {
            var v1037 = this.suggestionPos;
            var v614 = v1037 - 1;
            JAM.call(this.highlightSuggestion, this, [v614]);
          }
          break;
        case 40:
          var v1038 = this.suggestionPos;
          var v1039 = this.numSuggestions;
          var v617 = v1038 != v1039;
          if (v617) {
            var v1040 = this.suggestionPos;
            var v616 = v1040 + 1;
            JAM.call(this.highlightSuggestion, this, [v616]);
          }
        ;
      }
    } else {
      var v619 = vars$$7.callback2;
      if (v619) {
        JAM.call(vars$$7.callback2, vars$$7, [event$$9]);
      }
    }
    var v621 = this.obj;
    this.content = v621.value;
    var v1296 = this.content;
    var v1297 = this.oldContent;
    var v1041 = v1296 == v1297;
    var v1300 = !v1041;
    if (v1300) {
      var v1298 = event$$9.keyCode;
      var v1299 = [13, 38, 40];
      v1041 = JAM.call(midori.inArray, midori, [v1298, v1299]);
    }
    var v622 = v1041;
    if (v622) {
      return;
    }
    var changed = false;
    var i$$23 = 0;
    var v623 = this.content;
    var len$$3 = v623.length;
    var v625 = i$$23 < len$$3;
    for (;v625;) {
      var v1301 = this.content;
      var v1042 = v1301.charAt(i$$23);
      var v1302 = this.oldContent;
      var v1043 = v1302.charAt(i$$23);
      var v624 = v1042 != v1043;
      if (v624) {
        changed = true;
        break;
      }
      i$$23++;
      v625 = i$$23 < len$$3;
    }
    var v1044 = !changed;
    if (v1044) {
      var v1456 = this.oldContent;
      var v1303 = v1456.length;
      v1044 = v1303 < len$$3;
    }
    var v626 = v1044;
    if (v626) {
      return;
    }
    var v1304 = this.content;
    var v1045 = v1304.charAt(i$$23);
    var v1046 = vars$$7.separator;
    var v628 = v1045 == v1046;
    if (v628) {
      var v627;
      var v1305 = event$$9.keyCode;
      var v1047 = v1305 == 8;
      if (v1047) {
        v627 = i$$23;
        i$$23 = i$$23 - 1;
      } else {
        v627 = i$$23;
        i$$23 = i$$23 + 1;
      }
      v627;
    }
    var j$$4 = i$$23;
    var v630 = j$$4 > 0;
    for (;v630;) {
      var v1306 = this.content;
      var v1048 = v1306.charAt(j$$4);
      var v1049 = vars$$7.separator;
      var v629 = v1048 == v1049;
      if (v629) {
        j$$4++;
        break;
      }
      j$$4--;
      v630 = j$$4 > 0;
    }
    var v631 = this.content;
    var v632 = i$$23 - j$$4;
    var snippet = v631.substr(j$$4, v632);
    j$$4 = i$$23;
    var v634 = j$$4 < len$$3;
    for (;v634;) {
      var v1307 = this.content;
      var v1050 = v1307.charAt(j$$4);
      var v1051 = vars$$7.separator;
      var v633 = v1050 == v1051;
      if (v633) {
        break;
      }
      j$$4++;
      v634 = j$$4 < len$$3;
    }
    var v1308 = this.content;
    var v1309 = j$$4 - i$$23;
    var v1052 = v1308.substr(i$$23, v1309);
    snippet = snippet + v1052;
    snippet = JAM.call(midori.trim, midori, [snippet]);
    var v1053 = snippet.length;
    var v1054 = vars$$7.minChars;
    var v640 = v1053 >= v1054;
    if (v640) {
      var v1310 = vars$$7.fileName;
      var v1055 = typeof v1310;
      var v639 = v1055 == "string";
      if (v639) {
        var v635 = this.ajax;
        var v636 = vars$$7.fileName;
        var v1056 = vars$$7.params;
        var v1057 = JAM.call(midori.trim, midori, [snippet]);
        var v637 = v1056 + v1057;
        JAM.call(v635.post, v635, [v636, v637]);
      } else {
        var v638 = this.ajax;
        var v1311 = vars$$7.params;
        var v1312 = JAM.call(midori.trim, midori, [snippet]);
        var v1058 = v1311 + v1312;
        var v1645 = JAM.call(vars$$7.fileName, vars$$7, [v1058]);
        v638.responseText = v1645;
        this.ajaxCallback();
      }
    }
    this.oldContent = this.content;
    return;
  }
  var thisObj$$3 = this;
  this.process = v21;
  this.addProperties = v24;
  this.showSuggestions = v25;
  this.highlightSuggestion = v26;
  this.replaceSnippet = v27;
  this.init = v32;
  this.init();
  return;
}
function midoriInlineEdit(vars$$8) {
  function v39() {
    var v1313 = this.myObj;
    var v1059 = v1313.getAttribute("editing");
    var v641 = v1059 != "on";
    if (v641) {
      return;
    }
    var v1457 = this.editObj;
    var v1314 = v1457.value;
    var v1060 = JAM.call(v1314.replace, v1314, ["\n", ""]);
    var v642 = JAM.call(v1060.replace, v1060, ["\r", ""]);
    var text$$7 = JAM.call(midori.trim, midori, [v642]);
    var v644 = !text$$7;
    if (v644) {
      var v643 = this.editObj;
      v643.value = "";
      return;
    }
    var v645 = this.myObj;
    JAM.call(v645.setAttribute, v645, ["editing", "off"]);
    var v646 = this.myObj;
    JAM.set(v646, "innerHTML", "");
    var v647 = this.myObj;
    JAM.set(v647, "innerHTML", text$$7);
    var v649 = vars$$8.callback;
    if (v649) {
      var v648 = this.myObj;
      JAM.call(vars$$8.callback, vars$$8, [text$$7, v648]);
    }
    return;
  }
  function v38() {
    var v1315 = this.myObj;
    var v1061 = v1315.getAttribute("editing");
    var v651 = v1061 == "on";
    if (v651) {
      var v650 = this.editObj;
      v650.select();
    }
    return;
  }
  function v37() {
    function v36(e$$25) {
      thisObj$$4.save();
      return;
    }
    function v35(e$$24) {
      var v1316 = e$$24.keyCode;
      var v1062 = v1316 == 13;
      var v1318 = !v1062;
      if (v1318) {
        var v1317 = e$$24.keyCode;
        v1062 = v1317 == 27;
      }
      var v652 = v1062;
      if (v652) {
        thisObj$$4.save();
      }
      return;
    }
    function v34(e$$23) {
      JAM.call(midori.preventBubble, midori, [e$$23]);
      return;
    }
    var v1458 = this.myObj;
    var v1319 = v1458.getAttribute("editing");
    var v1063 = v1319 == "on";
    var v1321 = !v1063;
    if (v1321) {
      var v1459 = this.input;
      var v1460 = this.myObj;
      var v1320 = JAM.call(midori.get, midori, [v1459, v1460]);
      v1063 = v1320[0];
    }
    var v653 = v1063;
    if (v653) {
      return;
    }
    var v1064 = this.myObj;
    var v654 = v1064.innerHTML;
    var value$$29 = JAM.call(v654.replace, v654, [/"/g, "&quot;"]);
    var v655 = this.myObj;
    var v1065;
    var v1324 = vars$$8.textArea;
    if (v1324) {
      var v1620 = this.myObj;
      var v1605 = v1620.parentNode;
      var v1585 = v1605.offsetWidth;
      var v1606;
      var v1621 = vars$$8.x;
      if (v1621) {
        v1606 = vars$$8.x;
      } else {
        v1606 = 32;
      }
      var v1586 = v1606;
      var v1542 = v1585 - v1586;
      var v1461 = v1542 + "px";
      var v1622 = this.myObj;
      var v1607 = v1622.parentNode;
      var v1587 = v1607.offsetHeight;
      var v1608;
      var v1623 = vars$$8.y;
      if (v1623) {
        v1608 = vars$$8.y;
      } else {
        v1608 = 32;
      }
      var v1588 = v1608;
      var v1543 = v1587 - v1588;
      var v1462 = v1543 + "px";
      var v1322 = {w:v1461, h:v1462, value:value$$29};
      v1065 = JAM.call(midori.replace, midori, ['<textarea style="width: :w; height: :h; overflow: auto">:value</textarea>', v1322]);
    } else {
      var v1544;
      var v1589 = vars$$8.size;
      if (v1589) {
        v1544 = vars$$8.size;
      } else {
        v1544 = "";
      }
      var v1463 = v1544;
      var v1545;
      var v1590 = vars$$8.maxlen;
      if (v1590) {
        v1545 = vars$$8.maxlen;
      } else {
        v1545 = "";
      }
      var v1464 = v1545;
      var v1323 = {size:v1463, maxlen:v1464, value:value$$29};
      v1065 = JAM.call(midori.replace, midori, ['<input type="text" size=":size" maxlength=":maxlen" value=":value" />', v1323]);
    }
    JAM.set(v655, "innerHTML", v1065);
    var v1066 = this.input;
    var v1067 = this.myObj;
    var v656 = JAM.call(midori.get, midori, [v1066, v1067]);
    this.editObj = v656[0];
    var v657 = this.editObj;
    v657.focus();
    var v658 = this.editObj;
    v658.focus();
    var v659 = this.myObj;
    JAM.call(v659.setAttribute, v659, ["editing", "on"]);
    var v660 = this.editObj;
    JAM.call(midori.addEventListener, midori, [v660, "mousedown", v34]);
    var v661 = this.editObj;
    JAM.call(midori.addEventListener, midori, [v661, "keyup", v35]);
    var v662 = this.editObj;
    JAM.call(midori.addEventListener, midori, [v662, "blur", v36]);
    return;
  }
  function v33(e$$22) {
    var v1068 = thisObj$$4.editObj;
    if (v1068) {
      var v1325 = JAM.call(midori.getEventTarget, midori, [e$$22]);
      var v1326 = thisObj$$4.editObj;
      v1068 = v1325 != v1326;
    }
    var v663 = v1068;
    if (v663) {
      thisObj$$4.save();
      JAM.call(midori.preventDefault, midori, [e$$22]);
    }
    return;
  }
  var thisObj$$4 = this;
  var v1069 = vars$$8.id;
  var v664 = "#" + v1069;
  var v1646 = JAM.call(midori.get, midori, [v664]);
  this.myObj = v1646;
  this.editObj = "";
  var v665;
  var v1070 = vars$$8.textArea;
  if (v1070) {
    v665 = "textarea";
  } else {
    v665 = "input";
  }
  this.input = v665;
  JAM.call(midori.addEventListener, midori, [document, "mouseup", v33]);
  this.edit = v37;
  this.select = v38;
  this.save = v39;
  return;
}
var v1071;
var v1328 = window.opera;
if (v1328) {
  v1071 = "Opera";
} else {
  var v1327;
  var v1591 = navigator.userAgent;
  var v1546 = v1591.indexOf("WebKit");
  var v1466 = v1546 != -1;
  if (v1466) {
    v1327 = "Safari";
  } else {
    var v1465;
    var v1609 = navigator.userAgent;
    var v1592 = v1609.indexOf("MSIE");
    var v1547 = v1592 != -1;
    if (v1547) {
      v1465 = "MSIE";
    } else {
      v1465 = "Gecko";
    }
    v1327 = v1465;
  }
  v1071 = v1327;
}
var v666 = v1071;
var v1072;
var v1548 = navigator.userAgent;
var v1467 = v1548.indexOf("Windows");
var v1330 = v1467 != -1;
if (v1330) {
  v1072 = "Win";
} else {
  var v1329;
  var v1593 = navigator.userAgent;
  var v1549 = v1593.indexOf("Macintosh");
  var v1468 = v1549 != -1;
  if (v1468) {
    v1329 = "Mac";
  } else {
    v1329 = "Other";
  }
  v1072 = v1329;
}
var v667 = v1072;
var midori = {browserType:v666, browserOS:v667, domReady:[], each:v40, sibling:v41, parseSelectors:v42, processAttrs:v43, processPseudo:v44, getMatches:v46, get:v48, getCssRule:v49, setStyles:v50, setAttributes:v51, removeNode:v52, addEventListener:v57, runReadyEvents:v58, getEventTarget:v59, getMousePos:v60, preventBubble:v61, preventDefault:v62, getFloat:v63, setFloat:v64, getSelection:v65, getSelectionText:v66, getCookie:v67, setCookie:v68, convertToFields:v69, replace:v70, trim:v71, uniqid:v72, 
concatUnique:v73, implode:v74, inArray:v75, shortenWords:v77, resizeImg:v79, saveCheckboxState:v80, checkRequiredFields:v81, getWindowDims:v82, getPos:v83, highlightRow:v85};
var midoriFX = {intervals:{}, lastIntervalId:0, getOutsideSize:v86, showWithAnim:v87, show:v89, hideWithAnim:v90, hide:v92, scrollToWithAnim:v93, scrollTo:v95, sliderToWithAnim:v96, slider:v98};
var midoriPopup = {show:v99, hide:v100};
JAM.call(midori.addEventListener, midori, [document, "mouseup", v101]);
JAM.call(midori.addEventListener, midori, [document, "touchend", v102]);
var midoriTab = {selectedTabs:{}, select:v103, init:v107};
var midoriHistory = {history:[], modifyLocation:v108, add:v109, remove:v110, onChange:v111, init:v112};
JAM.call(midori.setCookie, midori, [1, 2, 3, 4, 5])
