
JAM.startProfile('load');
function v112(callback$$28) {
  this.callback = callback$$28;
  if (midori.browserType == "MSIE") {
    var v669 = document.body;
    JAM.set(JAM.call(v669.appendChild, v669, [document.createElement("div")]), "innerHTML", '<iframe id="midori_history" style="position: absolute; width: 1px; height: 1px"></iframe>');
  }
  JAM.call(setInterval, null, [this.onChange, 250]);
  return;
}
function v111() {
  var newLoc = window.location.toString();
  var v117;
  if (midori.browserType == "MSIE") {
    v117 = JAM.call(midori.get, midori, ["#midori_history"]).contentWindow.document.getElementById("me").innerText;
  } else {
    var v672;
    if (newLoc.indexOf("#") != -1) {
      v672 = newLoc.match(/#(.+)$/)[1];
    } else {
      v672 = "";
    }
    v117 = v672;
  }
  var item$$3 = v117;
  if (midori.browserType == "MSIE") {
    var v675 = midoriHistory.oldItem != item$$3;
    if (v675) {
      v675 = JAM.call(midori.inArray, midori, [item$$3, midoriHistory.history]);
    }
    if (v675) {
      midoriHistory.oldItem = item$$3;
      JAM.call(midoriHistory.modifyLocation, midoriHistory, [item$$3]);
      JAM.call(midoriHistory.callback, midoriHistory, [item$$3]);
    }
  } else {
    var v676 = midoriHistory.oldLoc != newLoc;
    if (v676) {
      v676 = JAM.call(midori.inArray, midori, [item$$3, midoriHistory.history]);
    }
    if (v676) {
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
    if (history[i$$17] == item$$2) {
      history.splice(i$$17, 1);
      if (i$$17 == len$$1) {
        this.last = history[history.length - 1];
      }
    }
    i$$17++;
    v124 = i$$17 < len$$1;
  }
  this.history = history;
  return;
}
function v109(item$$1) {
  if (item$$1 == this.last) {
    return;
  }
  this.history.push(item$$1);
  JAM.call(this.modifyLocation, this, [item$$1]);
  this.last = item$$1;
  if (midori.browserType == "MSIE") {
    var iframe = JAM.call(midori.get, midori, ["#midori_history"]).contentWindow.document;
    iframe.open('javascript: "<html></html>"');
    JAM.call(iframe.write, iframe, ['<html><body><div id="me">' + item$$1 + "</div></body></html>"]);
    iframe.close();
  }
  return;
}
function v108(item) {
  var loc = window.location.toString();
  var v131 = window;
  var v683;
  if (loc.indexOf("#") == -1) {
    v683 = loc + "#" + item;
  } else {
    v683 = JAM.call(loc.replace, loc, [/#.+/, "#" + item]);
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
      JAM.call(o$$6.setAttribute, o$$6, ["tabset", obj$$25.id]);
      if (o$$6.parentNode.className == "tab-selected") {
        var v133 = midoriTab.selectedTabs;
        var v134 = obj$$25.id;
        introspect(JAM.policy.p2) {
          v133[v134] = o$$6;
        }
        JAM.call(midoriTab.select, midoriTab, [o$$6, true]);
      }
      JAM.call(midori.addEventListener, midori, [o$$6, "click", v104]);
      return;
    }
    var v136 = JAM.call(midori.get, midori, ["#" + obj$$25.id + " a"]);
    JAM.call(v136.apply, v136, [v105]);
    return;
  }
  var v137 = JAM.call(midori.get, midori, [".tab-set"]);
  JAM.call(v137.apply, v137, [v106]);
  return;
}
function v103(obj$$24, noAnim) {
  var tabSet = obj$$24.getAttribute("tabset");
  if (this.selectedTabs[tabSet]) {
    this.selectedTabs[tabSet].parentNode.className = "";
    JAM.call(midori.get, midori, ["#" + this.selectedTabs[tabSet].hash.substr(1)]).style.display = "none";
  }
  var v141 = this.selectedTabs;
  introspect(JAM.policy.p2) {
    v141[tabSet] = obj$$24;
  }
  obj$$24.parentNode.className = "tab-selected";
  var v143;
  if (noAnim) {
    v143 = JAM.call(midori.get, midori, ["#" + obj$$24.hash.substr(1)]).style.display = "block";
  } else {
    v143 = JAM.call(midoriFX.show, midoriFX, [obj$$24.hash.substr(1)]);
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
  if (this.activePopup == null) {
    return;
  }
  if (this.hideCallback) {
    JAM.call(this.hideCallback, this, [this]);
  }
  JAM.call(midoriFX.hide, midoriFX, [this.popupId]);
  this.activePopup = null;
  return;
}
function v99(vars$$5) {
  if (typeof vars$$5.x == "undefined") {
    vars$$5.x = 5;
  }
  if (typeof vars$$5.y == "undefined") {
    vars$$5.y = -5;
  }
  this.popupId = vars$$5.popupId;
  var popup = JAM.call(midori.get, midori, ["#" + vars$$5.popupId]);
  var dims$$1 = midori.getWindowDims();
  var v150;
  if (vars$$5.showAtMousePos) {
    v150 = JAM.call(midori.getMousePos, midori, [vars$$5.event]);
  } else {
    v150 = JAM.call(midori.getPos, midori, [vars$$5.obj]);
  }
  var popupPos = v150;
  popup.style.display = "block";
  if (this.activePopup) {
    this.activePopup.style.display = "none";
  }
  vars$$5.obj.blur();
  if (dims$$1.windowWidth < popupPos.x + popup.offsetWidth + vars$$5.x) {
    popupPos.x = popupPos.x - popup.offsetWidth;
  }
  var v156 = popupPos.y + popup.offsetHeight + vars$$5.y - dims$$1.scrollTop > dims$$1.windowHeight;
  for (;v156;) {
    popupPos.y = popupPos.y - (popup.offsetHeight + 20);
    v156 = popupPos.y + popup.offsetHeight + vars$$5.y - dims$$1.scrollTop > dims$$1.windowHeight;
  }
  JAM.call(midori.setStyles, midori, [popup, {left:popupPos.x + vars$$5.x + "px", top:popupPos.y + vars$$5.y + vars$$5.obj.offsetHeight + "px"}]);
  this.activePopup = popup;
  var v158;
  if (vars$$5.noAnim) {
    v158 = popup.style.display = "block";
  } else {
    v158 = JAM.call(midoriFX.show, midoriFX, [this.popupId]);
  }
  v158;
  if (vars$$5.event) {
    JAM.call(midori.preventDefault, midori, [vars$$5.event]);
  }
  if (vars$$5.showCallback) {
    JAM.call(vars$$5.showCallback, vars$$5, [this]);
  }
  var v162;
  if (vars$$5.hideCallback) {
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
  var container$$1 = JAM.call(midori.get, midori, ["#" + containerId]);
  var targetPos$$3 = JAM.call(midori.getPos, midori, [JAM.call(midori.get, midori, ["#" + targetId]), container$$1]).x;
  var v165;
  if (container$$1.style.marginLeft) {
    v165 = Math.abs(parseInt(container$$1.style.marginLeft, 10));
  } else {
    v165 = 0;
  }
  var currentPos = v165;
  var intervalKey$$3 = Math.random();
  if (this.lastIntervalId) {
    clearInterval(this.lastIntervalId);
  }
  var v168 = this.intervals;
  var v169 = intervalKey$$3;
  var v1104;
  if (currentPos > targetPos$$3) {
    v1104 = -1;
  } else {
    v1104 = 1;
  }
  v168[v169] = {targetPos:currentPos, direction:v1104, intervalId:JAM.call(setInterval, null, [v97, 15])};
  this.lastIntervalId = this.intervals[intervalKey$$3].intervalId;
  return;
}
function v96(intervalKey$$2, container, targetPos$$2) {
  var data$$18 = this.intervals[intervalKey$$2];
  var diff = Math.abs(targetPos$$2 - data$$18.targetPos);
  data$$18.targetPos = data$$18.targetPos + Math.round(diff / 8) * data$$18.direction;
  container.style.marginLeft = -data$$18.targetPos + "px";
  if (diff < 4) {
    clearInterval(data$$18.intervalId);
  }
  return;
}
function v95(id$$2, correction) {
  function v94() {
    JAM.call(midoriFX.scrollToWithAnim, midoriFX, [intervalKey$$1, targetPos$$1]);
    return;
  }
  var v176 = JAM.call(midori.getPos, midori, [JAM.call(midori.get, midori, ["#" + id$$2])]).y;
  var v726;
  if (correction) {
    v726 = correction;
  } else {
    v726 = 0;
  }
  var targetPos$$1 = v176 + v726;
  var intervalKey$$1 = Math.random();
  var dims = midori.getWindowDims();
  this.intervals[intervalKey$$1] = {scrollPos:dims.scrollTop, intervalId:JAM.call(setInterval, null, [v94, 15])};
  return;
}
function v93(intervalKey, targetPos) {
  if (Math.abs(targetPos - this.intervals[intervalKey].scrollPos) > 10) {
    var v180 = this.intervals[intervalKey];
    v180.scrollPos = v180.scrollPos + Math.round((targetPos - this.intervals[intervalKey].scrollPos) / 8);
    scrollTo(0, this.intervals[intervalKey].scrollPos);
  } else {
    clearInterval(this.intervals[intervalKey].intervalId);
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
  var element$$5 = JAM.call(midori.get, midori, ["#" + id$$1]);
  var outsideSize$$1 = JAM.call(this.getOutsideSize, this, [element$$5, what$$2]);
  var v186 = Math.random();
  var v1114;
  if (horiz$$1) {
    v1114 = element$$5.offsetWidth;
  } else {
    v1114 = element$$5.offsetHeight;
  }
  var vars$$4 = {intervalKey:v186, element:element$$5, outsideSize:outsideSize$$1, elementSize:v1114 - outsideSize$$1, callback:callback$$27, constantSpeed:constantSpeed, what:what$$2};
  element$$5.style.overflow = "hidden";
  this.intervals[vars$$4.intervalKey] = {intervalId:JAM.call(setInterval, null, [v91, 40])};
  return;
}
function v90(vars$$3) {
  var v735;
  if (vars$$3.what == "width") {
    v735 = vars$$3.element.offsetWidth;
  } else {
    v735 = vars$$3.element.offsetHeight;
  }
  var oldSize = v735 - vars$$3.outsideSize;
  var v193;
  if (vars$$3.constantSpeed) {
    v193 = vars$$3.oldSize - 4;
  } else {
    v193 = Math.round(oldSize / 1.5);
  }
  var newSize = v193;
  if (newSize > 2) {
    var v194 = vars$$3.element.style;
    var v195 = vars$$3.what;
    var v740 = newSize.toString();
    introspect(JAM.policy.p2) {
      v194[v195] = v740 + "px";
    }
    vars$$3.element.style.opacity = newSize / 50;
  } else {
    clearInterval(this.intervals[vars$$3.intervalKey].intervalId);
    vars$$3.element.style.display = "none";
    var v199 = vars$$3.element.style;
    var v200 = vars$$3.what;
    var v745 = vars$$3.elementSize.toString();
    introspect(JAM.policy.p2) {
      v199[v200] = v745 + "px";
    }
    vars$$3.element.style.opacity = 1;
    if (vars$$3.callback) {
      JAM.call(vars$$3.callback, vars$$3, [vars$$3.element]);
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
  var element$$4 = JAM.call(midori.get, midori, ["#" + id]);
  var vars$$2 = {intervalKey:Math.random(), element:element$$4, callback:callback$$26, what:what$$1};
  JAM.call(midori.setStyles, midori, [element$$4, {overflow:"hidden", visibility:"hidden", display:"block"}]);
  var v747 = vars$$2;
  var v1354;
  if (horiz) {
    v1354 = element$$4.offsetWidth;
  } else {
    v1354 = element$$4.offsetHeight;
  }
  v747.elementSize = v1354 - JAM.call(this.getOutsideSize, this, [element$$4, what$$1]);
  JAM.call(midori.setStyles, midori, [element$$4, {display:"none", visibility:"visible"}]);
  this.intervals[vars$$2.intervalKey] = {newSize:0, intervalId:JAM.call(setInterval, null, [v88, 40])};
  return;
}
function v87(vars$$1) {
  var v211;
  if (this.intervals[vars$$1.intervalKey].newSize) {
    v211 = false;
  } else {
    v211 = true;
  }
  var firstRun = v211;
  var v212 = this.intervals[vars$$1.intervalKey];
  v212.newSize = v212.newSize + Math.round((vars$$1.elementSize - this.intervals[vars$$1.intervalKey].newSize) / 2);
  if (this.intervals[vars$$1.intervalKey].newSize < vars$$1.elementSize) {
    var v213 = vars$$1.element.style;
    var v214 = vars$$1.what;
    var v756 = this.intervals[vars$$1.intervalKey].newSize.toString();
    introspect(JAM.policy.p2) {
      v213[v214] = v756 + "px";
    }
  } else {
    clearInterval(this.intervals[vars$$1.intervalKey].intervalId);
    var v216 = vars$$1.element.style;
    var v217 = vars$$1.what;
    var v759 = vars$$1.elementSize.toString();
    introspect(JAM.policy.p2) {
      v216[v217] = v759 + "px";
    }
    vars$$1.element.style.overflow = "visible";
    if (vars$$1.callback) {
      JAM.call(vars$$1.callback, vars$$1, [vars$$1.element]);
    }
  }
  if (firstRun) {
    vars$$1.element.style.display = "block";
  }
  return;
}
function v86(element$$3, what) {
  var v223;
  if (what == "width") {
    v223 = element$$3.offsetWidth;
  } else {
    v223 = element$$3.offsetHeight;
  }
  var offsetSize = v223;
  var v224 = element$$3.style;
  var v763 = offsetSize.toString();
  introspect(JAM.policy.p2) {
    v224[what] = v763 + "px";
  }
  var v764;
  if (what == "width") {
    v764 = element$$3.offsetWidth;
  } else {
    v764 = element$$3.offsetHeight;
  }
  var outsideSize = v764 - offsetSize;
  var v226 = element$$3.style;
  var v765 = (offsetSize - outsideSize).toString();
  introspect(JAM.policy.p2) {
    v226[what] = v765 + "px";
  }
  return outsideSize;
}
function v85(obj$$23, highlightClass, removeAll) {
  function v84(o$$5) {
    var className$$1 = o$$5.className.split(" ");
    var v228;
    if (className$$1[className$$1.length - 1] == highlightClass) {
      v228 = o$$5.className.substr(0, o$$5.className.length - highlightClass.length - 1);
    } else {
      var v768;
      if (removeAll) {
        v768 = o$$5.className;
      } else {
        v768 = o$$5.className + " " + highlightClass;
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
  var v231 = obj$$22.offsetParent != stopAt;
  for (;v231;) {
    xPos = xPos + obj$$22.offsetLeft;
    yPos = yPos + (obj$$22.offsetTop - obj$$22.scrollTop);
    obj$$22 = obj$$22.offsetParent;
    v231 = obj$$22.offsetParent != stopAt;
  }
  return{x:xPos, y:yPos};
}
function v82() {
  if (this.browserType == "MSIE") {
    return{windowWidth:document.documentElement.clientWidth, windowHeight:document.documentElement.clientHeight, scrollTop:document.documentElement.scrollTop};
  } else {
    return{windowWidth:window.innerWidth, windowHeight:window.innerHeight, scrollTop:window.scrollY};
  }
  return;
}
function v81(vars) {
  var v1628 = vars.required.split(",");
  vars.required = v1628;
  var form = JAM.call(this.get, this, ["#" + vars.formId]);
  var stopSubmit = false;
  var fieldName;
  var field;
  var fieldType;
  var fieldStyle;
  var i$$16 = 0;
  var numFields = vars.required.length;
  var v247 = i$$16 < numFields;
  for (;v247;) {
    if (fieldName = JAM.call(this.trim, this, [vars.required[i$$16]])) {
      field = JAM.call(this.get, this, ["#" + fieldName]);
      var v243;
      if (field.type.toLowerCase() == "checkbox") {
        v243 = "c";
      } else {
        v243 = "t";
      }
      fieldType = v243;
      var v244;
      if (fieldType == "c") {
        v244 = field.parentNode.style;
      } else {
        v244 = field.style;
      }
      fieldStyle = v244;
      fieldStyle.backgroundColor = "";
      var v1138 = fieldType == "c";
      if (v1138) {
        v1138 = !field.checked;
      }
      var v781 = v1138;
      if (!v781) {
        v781 = JAM.call(this.trim, this, [field.value]) == "";
      }
      if (v781) {
        fieldStyle.backgroundColor = "#FAA";
        stopSubmit = true;
      }
    }
    i$$16++;
    v247 = i$$16 < numFields;
  }
  var v248 = JAM.call(this.get, this, ["#" + vars.formId + "-status"]);
  var v783;
  if (stopSubmit) {
    v783 = vars.message;
  } else {
    v783 = "";
  }
  JAM.set(v248, "innerHTML", v783);
  var v249;
  if (vars.callback) {
    v249 = vars.callback();
  } else {
    v249 = "";
  }
  var callbackResult = v249;
  var v785 = callbackResult === false;
  if (!v785) {
    v785 = stopSubmit;
  }
  if (v785) {
    if (vars.event) {
      JAM.call(this.preventDefault, this, [vars.event]);
    }
    return false;
  } else {
    if (!vars.event) {
      form.submit();
    }
  }
  return;
}
function v80(element$$2, cb, callback$$25) {
  var v254;
  if (cb.checked) {
    v254 = element$$2.innerHTML;
    JAM.set(element$$2, "innerHTML", element$$2.innerHTML + 1);
  } else {
    var v787;
    if ((element$$2.innerHTML = element$$2.innerHTML - 1) == 0) {
      v787 = JAM.set(element$$2, "innerHTML", "");
    } else {
      v787 = {};
    }
    v254 = v787;
  }
  v254;
  if (callback$$25) {
    JAM.call(callback$$25, null, [element$$2.innerHTML]);
  }
  return;
}
function v79(obj$$21, maxWidth) {
  function v78(o$$4) {
    if (o$$4.width > maxWidth) {
      if (o$$4.style.msInterpolationMode) {
        o$$4.style.msInterpolationMode = "bicubic";
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
    if (o$$3.nodeType != 3) {
      return;
    }
    var chunks$$1 = o$$3.data.split(" ");
    var shortened = false;
    var stlen;
    var i$$15 = 0;
    var numChunks = chunks$$1.length;
    var v268 = i$$15 < numChunks;
    for (;v268;) {
      if ((stLen = chunks$$1[i$$15].length) > maxLen) {
        var diffLen = Math.floor(stLen - maxLen);
        var startPos = Math.floor(stLen / 2 - diffLen / 2);
        chunks$$1[i$$15] = chunks$$1[i$$15].substr(0, startPos) + "..." + chunks$$1[i$$15].substr(startPos + diffLen);
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
      v1488 = a$$4[i$$14].constructor == Array;
    }
    var v1372 = v1488;
    if (v1372) {
      v1372 = v$$2.constructor == Array;
    }
    var v1147 = v1372;
    if (v1147) {
      v1147 = a$$4[i$$14].toString() == v$$2.toString();
    }
    var v798 = v1147;
    if (!v798) {
      v798 = a$$4[i$$14] == v$$2;
    }
    if (v798) {
      return true;
    }
    i$$14++;
    v271 = i$$14 < numA$$3;
  }
  return;
}
function v74(glue, a$$3) {
  if (typeof a$$3 != "object") {
    return a$$3;
  }
  var o$$2 = "";
  var v800 = a$$3.length;
  if (v800) {
    v800 = !a$$3.propertyIsEnumerable("length");
  }
  if (v800) {
    var i$$13 = 0;
    var numA$$2 = a$$3.length;
    var v273 = i$$13 < numA$$2;
    for (;v273;) {
      o$$2 = o$$2 + (glue + a$$3[i$$13]);
      i$$13++;
      v273 = i$$13 < numA$$2;
    }
  } else {
    var k$$1;
    for (k$$1 in a$$3) {
      o$$2 = o$$2 + (glue + a$$3[k$$1]);
    }
  }
  return o$$2.substr(glue.length);
}
function v73(a1, a2) {
  var uniqA2 = [];
  var i$$12 = 0;
  var numA2 = a2.length;
  var v278 = i$$12 < numA2;
  for (;v278;) {
    if (!JAM.call(this.inArray, this, [a2[i$$12], a1])) {
      uniqA2.push(a2[i$$12]);
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
  return Math.floor(v804 * v1154);
}
function v71(st$$1) {
  return JAM.call(st$$1.replace, st$$1, [/^\s+|\s+$/g, ""]);
}
function v70(st, params) {
  if (!params) {
    return st;
  }
  var matches$$1 = st.match(/:[A-Za-z0-9_]+/g).sort().reverse();
  var i$$11 = 0;
  var numMatches = matches$$1.length;
  var v284 = i$$11 < numMatches;
  for (;v284;) {
    st = JAM.call(st.replace, st, [matches$$1[i$$11], params[matches$$1[i$$11].substr(1)]]);
    i$$11++;
    v284 = i$$11 < numMatches;
  }
  return st;
}
function v69(parentNode$$1, prefix$$2, a$$2) {
  var k;
  for (k in a$$2) {
    if (typeof a$$2[k] == "object") {
      JAM.call(this.convertToFields, this, [parentNode$$1, prefix$$2 + "[" + k + "]", a$$2[k]]);
    } else {
      var el = document.createElement("input");
      JAM.call(this.setAttributes, this, [el, {type:"hidden", name:prefix$$2 + "[" + k + "]", value:a$$2[k]}]);
      JAM.call(parentNode$$1.appendChild, parentNode$$1, [el]);
    }
  }
  return;
}
function v68(name$$30, value$$28, expires, path, domain) {
  introspect(JAM.policy.p1) {
    setCookieSentinel = true;
  }
  var today = new Date;
  var v289 = document;
  var v1159 = name$$30 + "=" + escape(value$$28) + "; expires=" + today.toUTCString(today.setSeconds(expires));
  var v1378;
  if (path) {
    v1378 = "; path=" + path;
  } else {
    v1378 = "";
  }
  var v812 = v1159 + v1378;
  var v1161;
  if (domain) {
    v1161 = "; domain=" + domain;
  } else {
    v1161 = "";
  }
  var v813 = v1161;
  introspect(JAM.policy.p2) {
    v289.cookie = v812 + v813;
  }
  return;
}
function v67(cookieName) {
  var cookies = document.cookie.split("; ");
  var i$$10 = 0;
  var numCookies = cookies.length;
  var v294 = i$$10 < numCookies;
  for (;v294;) {
    var parts = cookies[i$$10].split("=");
    if (parts[0] == cookieName) {
      var v815 = parts[1];
      return unescape(JAM.call(v815.replace, v815, [/\+/g, " "]));
    }
    i$$10++;
    v294 = i$$10 < numCookies;
  }
  return;
}
function v66(cursorPos$$1) {
  var v295;
  if (this.browserType == "MSIE") {
    v295 = cursorPos$$1.htmlText;
  } else {
    v295 = cursorPos$$1.toString();
  }
  return v295;
}
function v65(target$$29) {
  if (this.browserType != "MSIE") {
    return target$$29.getSelection();
  }
  if (target$$29 == window) {
    target$$29 = document;
  }
  var cursorPos = target$$29.selection.createRange();
  if (target$$29.selection.type != "Control") {
    return cursorPos;
  }
  return;
}
function v64(o$$1, v$$1) {
  var v300;
  if (this.browserType == "MSIE") {
    v300 = o$$1.style.styleFloat = v$$1;
  } else {
    v300 = o$$1.style.cssFloat = v$$1;
  }
  v300;
  return;
}
function v63(o) {
  var v301;
  if (this.browserType == "MSIE") {
    v301 = o.style.styleFloat;
  } else {
    v301 = o.style.cssFloat;
  }
  return v301;
}
function v62(event$$4) {
  var v302;
  if (event$$4.preventDefault) {
    v302 = event$$4.preventDefault();
  } else {
    v302 = window.event.returnValue = false;
  }
  v302;
  return;
}
function v61(event$$3) {
  var v303;
  if (event$$3.stopPropagation) {
    v303 = event$$3.stopPropagation();
  } else {
    v303 = window.event.cancelBubble = true;
  }
  v303;
  return;
}
function v60(event$$2) {
  var v829 = event$$2.targetTouches;
  if (v829) {
    v829 = event$$2.targetTouches.length;
  }
  if (v829) {
    return{x:event$$2.targetTouches[0].pageX, y:event$$2.targetTouches[0].pageY};
  } else {
    var v832 = event$$2.pageX;
    if (!v832) {
      v832 = event$$2.pageY;
    }
    if (v832) {
      return{x:event$$2.pageX, y:event$$2.pageY};
    } else {
      return{x:event$$2.clientX + document.documentElement.scrollLeft - document.body.clientLeft, y:event$$2.clientY + document.documentElement.scrollTop - document.body.clientTop};
    }
  }
  return;
}
function v59(event$$1) {
  var v312;
  if (event$$1.target) {
    v312 = event$$1.target;
  } else {
    v312 = event$$1.srcElement;
  }
  var target$$28 = v312;
  if (target$$28.nodeType == 3) {
    target$$28 = target$$28.parentNode;
  }
  return target$$28;
}
function v58() {
  if (this.readyTimer) {
    clearInterval(this.readyTimer);
  }
  var i$$9 = 0;
  var numE = this.domReady.length;
  var v318 = i$$9 < numE;
  for (;v318;) {
    this.domReady[i$$9]();
    i$$9++;
    v318 = i$$9 < numE;
  }
  return;
}
function v57(target$$27, eventType$$2, listenerFunc) {
  function v56() {
    function v55() {
      if (this.readyState == "complete") {
        midori.runReadyEvents();
      }
      return;
    }
    JAM.call(document.write, document, ['<script id="midori_onload" src="javascript: {}" defer="true">\x3c/script>']);
    JAM.set(JAM.call(this.get, this, ["#midori_onload"]), "onreadystatechange", v55);
    return;
  }
  function v54() {
    function v53() {
      if (/loaded|complete/.test(document.readyState)) {
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
  if (target$$27.addEventListener) {
    if (eventType$$2 == "ready") {
      switch(this.browserType) {
        case "Safari":
          this.domReady.push(listenerFunc);
          if (!this.readyTimer) {
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
  if (eventType$$2 == "ready") {
    if (!this.domReady.length) {
      this.msieReady();
    }
    this.domReady.push(listenerFunc);
    return;
  }
  JAM.call(target$$27.attachEvent, target$$27, ["on" + eventType$$2, listenerFunc]);
  return;
}
function v52(obj$$19) {
  return obj$$19.parentNode.removeChild(obj$$19);
}
function v51(obj$$18, attrList) {
  var i$$8;
  for (i$$8 in attrList) {
    var v332;
    if (i$$8 == "className") {
      v332 = obj$$18.className = attrList[i$$8];
    } else {
      v332 = JAM.call(obj$$18.setAttribute, obj$$18, [i$$8, attrList[i$$8]]);
    }
    v332;
  }
  return;
}
function v50(obj$$17, styleList) {
  var i$$7;
  for (i$$7 in styleList) {
    var v333;
    if (i$$7 == "float") {
      v333 = JAM.call(this.setFloat, this, [obj$$17, styleList[i$$7]]);
    } else {
      var v846 = obj$$17.style;
      introspect(JAM.policy.p2) {
        v333 = v846[i$$7] = styleList[i$$7];
      }
    }
    v333;
  }
  return;
}
function v49(stylesheet, rule$$2, property) {
  var values$$4 = [];
  var rules = document.styleSheets[stylesheet];
  var v335;
  if (rules.rules) {
    v335 = rules.rules;
  } else {
    v335 = rules.cssRules;
  }
  rules = v335;
  rule$$2 = rule$$2.toLowerCase();
  var v336;
  if (this.browserType == "Safari") {
    v336 = JAM.call(property.replace, property, [/([A-Z])/, "-$1"]).toLowerCase();
  } else {
    v336 = property.toLowerCase();
  }
  property = v336;
  var i$$6 = 0;
  var numRules = rules.length;
  var v349 = i$$6 < numRules;
  for (;v349;) {
    var v851 = rule$$2 == "*";
    if (!v851) {
      v851 = rules[i$$6].selectorText.toLowerCase() == rule$$2;
    }
    if (v851) {
      var j$$1;
      for (j$$1 in rules[i$$6].style) {
        if (this.browserType == "Safari") {
          var v854 = rules[i$$6].style[j$$1].toLowerCase;
          if (v854) {
            v854 = rules[i$$6].style[j$$1].toLowerCase() == property;
          }
          if (v854) {
            if (rule$$2 == "*") {
              var v337 = rules[i$$6].selectorText;
              introspect(JAM.policy.p2) {
                values$$4[v337] = value;
              }
            } else {
              return rules[i$$6].style[rules[i$$6].style[j$$1]];
            }
          }
        } else {
          if (j$$1.toLowerCase() == property) {
            if (rule$$2 == "*") {
              var v342 = rules[i$$6].selectorText;
              var v860 = rules[i$$6].style;
              introspect(JAM.policy.p2) {
                values$$4[v342] = v860[j$$1];
              }
            } else {
              return rules[i$$6].style[j$$1];
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
      if (typeof p == "function") {
        v350 = JAM.call(p, null, [this[i$$5]]);
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
  var numS = selectors$$7["elements"].length;
  if (!startAt) {
    startAt = document;
  }
  if (numS == 1) {
    var idMatch = selectors$$7["elements"][0].match(/^[a-z0-9*]*#([^,:]+)$/i);
    var v1185 = idMatch;
    if (v1185) {
      v1185 = selectors$$7["attrs"][0] == "";
    }
    var v866 = v1185;
    if (v866) {
      v866 = selectors$$7["separators"] == "";
    }
    if (v866) {
      return document.getElementById(idMatch[1]);
    }
  }
  var objs$$1 = JAM.call(this.getMatches, this, [startAt, selectors$$7["elements"][0], selectors$$7["attrs"][0]]);
  var allObjs = [];
  var newObjs;
  var separator;
  var i$$4 = 1;
  var v368 = i$$4 < numS;
  for (;v368;) {
    newObjs = [];
    separator = JAM.call(this.trim, this, [selectors$$7["separators"][i$$4 - 1]]);
    if (separator == ",") {
      allObjs = JAM.call(this.concatUnique, this, [allObjs, objs$$1]);
      objs$$1 = JAM.call(this.getMatches, this, [startAt, selectors$$7["elements"][i$$4], selectors$$7["attrs"][i$$4]]);
    } else {
      var v363;
      if (separator == ">") {
        v363 = true;
      } else {
        v363 = false;
      }
      var oneLevelOnly$$1 = v363;
      var j = 0;
      var numObjs$$1 = objs$$1.length;
      var v366 = j < numObjs$$1;
      for (;v366;) {
        if (!JAM.call(this.inArray, this, [objs$$1[j], newObjs])) {
          newObjs = JAM.call(this.concatUnique, this, [newObjs, JAM.call(this.getMatches, this, [objs$$1[j], selectors$$7["elements"][i$$4], selectors$$7["attrs"][i$$4]]), oneLevelOnly$$1]);
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
    if (v878) {
      matches.push(me);
      return;
    }
    var match$$2 = true;
    var v879 = numA$$1;
    if (v879) {
      v879 = !JAM.call(this.processAttrs, this, [me, a$$1, exprs$$1]);
    }
    if (v879) {
      match$$2 = false;
    }
    var v880 = pseudo;
    if (v880) {
      v880 = !JAM.call(this.processPseudo, this, [me, pSelector$$1, pA$$1, pB$$1]);
    }
    if (v880) {
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
    chunks = a$$1[i$$3].match(/([a-z0-9_-]+)\s*([=^$*|!]{0,2})\s*"?([^"]*)"?$/i);
    a$$1[i$$3] = chunks[1];
    switch(chunks[2]) {
      case "=":
        var v373 = exprs$$1;
        var v374 = i$$3;
        var v1631 = new RegExp("^" + chunks[3] + "$", "i");
        v373[v374] = v1631;
        break;
      case "^=":
        var v375 = exprs$$1;
        var v376 = i$$3;
        var v1632 = new RegExp("^" + chunks[3], "i");
        v375[v376] = v1632;
        break;
      case "$=":
        var v377 = exprs$$1;
        var v378 = i$$3;
        var v1633 = new RegExp(chunks[3] + "$", "i");
        v377[v378] = v1633;
        break;
      case "*=":
        var v379 = exprs$$1;
        var v380 = i$$3;
        var v1634 = new RegExp(chunks[3], "i");
        v379[v380] = v1634;
        break;
      case "&=":
        var v381 = exprs$$1;
        var v382 = i$$3;
        var v1635 = new RegExp("^" + chunks[3] + "$|^" + chunks[3] + "\\s|\\s" + chunks[3] + "\\s|\\s" + chunks[3] + "$", "i");
        v381[v382] = v1635;
        break;
      case "!=":
        exprs$$1[i$$3] = chunks[3];
    }
    i$$3++;
    v384 = i$$3 < numA$$1;
  }
  if (s$$2.indexOf(":") != -1) {
    chunks = s$$2.split(":");
    s$$2 = chunks[0];
    pseudo = chunks[1].match(/([a-z-]+)\(?([a-z0-9+-]*)\)?/i);
    pSelector$$1 = pseudo[1].toLowerCase();
    switch(pOption = pseudo[2].toLowerCase()) {
      case "odd":
        pOption = "2n+1";
        break;
      case "even":
        pOption = "2n";
    }
    chunks = pOption.match(/([0-9+-]*)(n?)([0-9+-]*)/i);
    var v888;
    if (chunks[2]) {
      var v1196;
      if (chunks[1]) {
        var v1388;
        if (chunks[1] == "-") {
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
    pA$$1 = parseInt(v888);
    var v889;
    if (chunks[3]) {
      v889 = chunks[3];
    } else {
      var v1198;
      var v1499 = chunks[1];
      if (v1499) {
        v1499 = !chunks[2];
      }
      if (v1499) {
        v1198 = chunks[1];
      } else {
        v1198 = 0;
      }
      v889 = v1198;
    }
    pB$$1 = parseInt(v889);
  }
  if (s$$2.indexOf("#") != -1) {
    JAM.call(this.postProcess, this, [document.getElementById(s$$2.substr(s$$2.indexOf("#") + 1))]);
  } else {
    if (s$$2.indexOf(".") != -1) {
      chunks = s$$2.split(".");
      var v392 = s$$2.substr(chunks[0].length + 1);
      var classMatch = JAM.call(v392.replace, v392, [".", " "]);
      var className = new RegExp("^" + classMatch + "$|^" + classMatch + "\\s|\\s" + classMatch + "\\s|\\s" + classMatch + "$", "i");
      var v895;
      if (chunks[0]) {
        v895 = chunks[0];
      } else {
        v895 = "*";
      }
      objs = target$$26.getElementsByTagName(v895);
      i$$3 = 0;
      numObjs = objs.length;
      var v397 = i$$3 < numObjs;
      for (;v397;) {
        var v1204 = !oneLevelOnly;
        if (v1204) {
          v1204 = className.test(objs[i$$3].className);
        }
        var v896 = v1204;
        if (!v896) {
          var v1395 = oneLevelOnly;
          if (v1395) {
            v1395 = className.test(objs[i$$3].className);
          }
          var v1205 = v1395;
          if (v1205) {
            v1205 = objs[i$$3].parentNode == target$$26;
          }
          v896 = v1205;
        }
        if (v896) {
          JAM.call(this.postProcess, this, [objs[i$$3]]);
        }
        i$$3++;
        v397 = i$$3 < numObjs;
      }
    } else {
      var v897 = s$$2 == "*";
      if (!v897) {
        v897 = /^[A-Za-z0-9]+$/.test(s$$2);
      }
      if (v897) {
        i$$3 = 0;
        objs = target$$26.getElementsByTagName(s$$2);
        numObjs = objs.length;
        var v400 = i$$3 < numObjs;
        for (;v400;) {
          var v898 = !oneLevelOnly;
          if (!v898) {
            var v1208 = oneLevelOnly;
            if (v1208) {
              v1208 = objs[i$$3].parentNode == target$$26;
            }
            v898 = v1208;
          }
          if (v898) {
            JAM.call(this.postProcess, this, [objs[i$$3]]);
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
  if (!(nodeKey = match$$1.parentNode.getAttribute("midorinodekey"))) {
    var v404 = match$$1.parentNode;
    JAM.call(v404.setAttribute, v404, ["midorinodekey", nodeKey = Math.random().toString().substr(2)]);
  }
  if (pCache = this.pCache[nodeKey]) {
    parentChildren = pCache["parentChildren"];
    pI = pCache["pI"];
  } else {
    var c$$2 = match$$1.parentNode.firstChild;
    for (;c$$2;) {
      if (c$$2.nodeType == 1) {
        parentChildren.push(c$$2);
      }
      c$$2 = c$$2.nextSibling;
    }
    var v409 = this.pCache;
    introspect(JAM.policy.p2) {
      v409[nodeKey] = {parentChildren:parentChildren, pI:0};
    }
  }
  var parentNumChildren = parentChildren.length;
  switch(pSelector) {
    case "first-child":
      if (match$$1 == parentChildren[0]) {
        return true;
      }
      break;
    case "last-child":
      if (match$$1 == parentChildren[parentNumChildren - 1]) {
        return true;
      }
      break;
    case "only-child":
      if (parentNumChildren == 1) {
        return true;
      }
    ;
  }
  if (pSelector == "nth-child") {
    var v = pA * pI + pB;
    var oldV = -50;
    var v905 = v > -50;
    if (v905) {
      v905 = v <= parentNumChildren;
    }
    var v418 = v905;
    for (;v418;) {
      var v906 = v >= 0;
      if (v906) {
        v906 = parentChildren[v - 1] == match$$1;
      }
      if (v906) {
        var v415 = this.pCache[nodeKey];
        var v908;
        if (pA >= 0) {
          v908 = pI + 1;
        } else {
          v908 = 0;
        }
        v415["pI"] = v908;
        return true;
      }
      pI++;
      v = v + pA;
      if (v == oldV) {
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
    if (a[i$$2] == "class") {
      var v910;
      if (match.className) {
        v910 = match.className;
      } else {
        v910 = null;
      }
      v420 = v910;
    } else {
      v420 = match.getAttribute(a[i$$2]);
    }
    attr = v420;
    switch(typeof exprs[i$$2]) {
      case "undefined":
        if (attr == null) {
          return false;
        }
        break;
      case "string":
        if (attr == exprs[i$$2]) {
          return false;
        }
        break;
      default:
        if (!exprs[i$$2].test(attr)) {
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
  var c$$1 = JAM.call(this.trim, this, [selectorText]).split("");
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
        switch(c$$1[i$$1]) {
          case '"':
            inQuotes = !inQuotes;
            break;
          case "]":
            if (!inQuotes) {
              attrs[sI].push(bracketContent);
              inBrackets = false;
              bracketContent = "";
            }
            break;
          case "\\":
            bracketContent = bracketContent + c$$1[i$$1 = i$$1 + 1];
            break;
          default:
            bracketContent = bracketContent + c$$1[i$$1];
        }
      } else {
        switch(c$$1[i$$1]) {
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
            elements[sI] = elements[sI] + c$$1[i$$1 = i$$1 + 1];
            break;
          default:
            elements[sI] = elements[sI] + c$$1[i$$1];
        }
      }
    } else {
      switch(c$$1[i$$1]) {
        case " ":
        ;
        case ">":
        ;
        case ",":
          separators[sI] = separators[sI] + c$$1[i$$1];
          break;
        default:
          inSelector = true;
          elements[sI = sI + 1] = c$$1[i$$1];
          attrs[sI] = [];
      }
    }
    i$$1++;
    v433 = i$$1 < len;
  }
  return{elements:elements, attrs:attrs, separators:separators};
}
function v41(obj$$16, direction$$3) {
  var sibling = obj$$16;
  if (direction$$3 == "next") {
    var v924 = sibling;
    if (v924) {
      v924 = sibling.nodeType == 3;
    }
    var v434 = v924;
    do {
      sibling = sibling.nextSibling;
      var v925 = sibling;
      if (v925) {
        v925 = sibling.nodeType == 3;
      }
      v434 = v925;
    } while (v434);
  } else {
    if (direction$$3 == "prev") {
      var v926 = sibling;
      if (v926) {
        v926 = sibling.nodeType == 3;
      }
      var v435 = v926;
      do {
        sibling = sibling.previousSibling;
        var v927 = sibling;
        if (v927) {
          v927 = sibling.nodeType == 3;
        }
        v435 = v927;
      } while (v435);
    }
  }
  var v438;
  if (sibling == obj$$16) {
    v438 = false;
  } else {
    v438 = sibling;
  }
  return v438;
}
function v40(parentObj, callBack, depthFirst) {
  var c = parentObj.firstChild;
  for (;c;) {
    if (!depthFirst) {
      JAM.call(callBack, null, [c]);
    }
    if (c.firstChild) {
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
    var numRowIds = this.rowIds.length;
    if (JAM.call(midori.get, midori, ["#" + this.vars.rowPrefix + "header-cb"]).style.display == "none") {
      JAM.call(midori.get, midori, ["#" + this.vars.rowPrefix + "header-cb"]).style.display = "";
      var i$$19 = 0;
      var v448 = i$$19 < numRowIds;
      for (;v448;) {
        var rowId = this.rowIds[i$$19];
        JAM.call(midori.get, midori, ["#" + this.vars.rowPrefix + "cb_" + rowId]).style.display = "";
        if (JAM.call(midori.get, midori, ["#" + this.vars.rowPrefix + "cb_" + rowId]).firstChild.checked) {
          JAM.call(midori.highlightRow, midori, [JAM.call(midori.get, midori, ["#" + this.vars.rowPrefix + rowId]), this.vars.rowHighlight]);
        }
        i$$19++;
        v448 = i$$19 < numRowIds;
      }
      if (vars$$6.showCallback) {
        JAM.call(vars$$6.showCallback, vars$$6, [this]);
      }
    } else {
      JAM.call(midori.get, midori, ["#" + this.vars.rowPrefix + "header-cb"]).style.display = "none";
      i$$19 = 0;
      var v454 = i$$19 < numRowIds;
      for (;v454;) {
        JAM.call(midori.get, midori, ["#" + this.vars.rowPrefix + "cb_" + this.rowIds[i$$19]]).style.display = "none";
        JAM.call(midori.highlightRow, midori, [JAM.call(midori.get, midori, ["#" + this.vars.rowPrefix + this.rowIds[i$$19]]), this.vars.rowHighlight, true]);
        i$$19++;
        v454 = i$$19 < numRowIds;
      }
      if (vars$$6.hideCallback) {
        JAM.call(vars$$6.hideCallback, vars$$6, [this]);
      }
    }
    return;
  }
  function v3(o$$7) {
    function v2(e$$8) {
      JAM.call(midori.highlightRow, midori, [JAM.call(midori.get, midori, ["#" + vars$$6.rowPrefix + id$$4]), vars$$6.rowHighlight]);
      JAM.call(midori.saveCheckboxState, midori, [JAM.call(midori.get, midori, ["#" + vars$$6.tableId + "_cb_parent"]), el$$2]);
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
    id$$4 = o$$7.id.substr(vars$$6.rowPrefix.length);
    td = document.createElement("td");
    td.style.display = "none";
    JAM.call(midori.setAttributes, midori, [td, {id:vars$$6.rowPrefix + "cb_" + id$$4, className:className$$2}]);
    el$$2 = document.createElement("input");
    JAM.call(midori.setAttributes, midori, [el$$2, {name:vars$$6.checkboxName, type:"checkbox", value:id$$4}]);
    JAM.call(midori.addEventListener, midori, [el$$2, "click", v2]);
    JAM.call(td.appendChild, td, [el$$2]);
    JAM.call(o$$7.appendChild, o$$7, [td]);
    thisObj.rowIds.push(id$$4);
    return;
  }
  function v0(e$$7) {
    var id$$3;
    var el$$1;
    var isChecked;
    var i$$18 = 0;
    var numIds = thisObj.rowIds.length;
    var v474 = i$$18 < numIds;
    for (;v474;) {
      id$$3 = thisObj.rowIds[i$$18];
      el$$1 = JAM.call(midori.get, midori, ["#" + vars$$6.rowPrefix + "cb_" + id$$3]).firstChild;
      isChecked = el$$1.checked;
      el$$1.checked = !isChecked;
      var v470;
      if (isChecked) {
        v470 = "";
      } else {
        v470 = id$$3;
      }
      el$$1.value = v470;
      JAM.call(midori.highlightRow, midori, [JAM.call(midori.get, midori, ["#" + vars$$6.rowPrefix + id$$3]), vars$$6.rowHighlight]);
      JAM.call(midori.saveCheckboxState, midori, [JAM.call(midori.get, midori, ["#" + vars$$6.tableId + "_cb_parent"]), el$$1]);
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
  var firstTh = JAM.call(midori.get, midori, ["#" + vars$$6.tableId + " th"])[0];
  var th = document.createElement("th");
  JAM.call(midori.setAttributes, midori, [th, {id:vars$$6.rowPrefix + "header-cb", align:"left", className:firstTh.className}]);
  JAM.call(th.appendChild, th, [cb$$1]);
  th.style.display = "none";
  var v478 = firstTh.parentNode;
  JAM.call(v478.appendChild, v478, [th]);
  var cbParent = document.createElement("div");
  cbParent.id = vars$$6.tableId + "_cb_parent";
  var v480 = document.body;
  JAM.call(v480.appendChild, v480, [cbParent]);
  var v481 = JAM.call(midori.get, midori, ["#" + vars$$6.tableId + ' tr[id^="' + vars$$6.rowPrefix + '"]']);
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
    if (thisObj$$1.doneDragging) {
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
    if (/drop-target/.test(o$$10.obj.className)) {
      var v483 = o$$10.obj;
      var v952;
      if (spacer) {
        v952 = spacer;
      } else {
        v952 = dragged;
      }
      return JAM.call(v483.appendChild, v483, [v952]);
    }
    var v486;
    var v1243 = o$$10.where == "next";
    if (v1243) {
      v1243 = !o$$10.obj.nextSibling;
    }
    if (v1243) {
      var v953 = o$$10.obj.parentNode;
      var v1245;
      if (spacer) {
        v1245 = spacer;
      } else {
        v1245 = dragged;
      }
      v486 = JAM.call(v953.appendChild, v953, [v1245]);
    } else {
      var v955 = o$$10.obj.parentNode;
      var v1247;
      if (spacer) {
        v1247 = spacer;
      } else {
        v1247 = dragged;
      }
      var v956 = v1247;
      var v1248;
      if (o$$10.where == "prev") {
        v1248 = o$$10.obj;
      } else {
        v1248 = o$$10.obj.nextSibling;
      }
      v486 = JAM.call(v955.insertBefore, v955, [v956, v1248]);
    }
    return v486;
  }
  function v12(event$$7) {
    this.doneDragging = false;
    if (!this.dragged) {
      return;
    }
    var objCoords$$2;
    var v960 = this.mouseMoved;
    if (v960) {
      v960 = objCoords$$2 = JAM.call(this.findPlace, this, [event$$7, true]);
    }
    if (v960) {
      JAM.call(this.dropCallback, this, [objCoords$$2, this.dragged]);
      this.doneDragging = true;
    }
    if (!this.dragged) {
      return;
    }
    this.spacer.style.display = "none";
    JAM.call(midori.setStyles, midori, [this.dragged, {position:"", opacity:"1"}]);
    JAM.call(this.init, this, [this.container]);
    return;
  }
  function v11(event$$6) {
    var v963 = !this.dragged;
    if (!v963) {
      v963 = /drop-target/.test(this.dragged.className);
    }
    if (v963) {
      return;
    }
    JAM.call(midori.preventDefault, midori, [event$$6]);
    var mousePos$$2 = JAM.call(midori.getMousePos, midori, [event$$6]);
    this.lastMousePos = mousePos$$2;
    this.mouseMoved = true;
    JAM.call(midori.setStyles, midori, [this.dragged, {position:"absolute", left:mousePos$$2.x - this.mouseOffset.x + "px", top:mousePos$$2.y - this.mouseOffset.y + "px"}]);
    JAM.call(midori.setFloat, midori, [this.spacer, JAM.call(midori.getFloat, midori, [this.dragged])]);
    var objCoords$$1;
    var v967 = objCoords$$1 = JAM.call(this.findPlace, this, [event$$6]);
    if (v967) {
      v967 = JAM.call(this.dropCallback, this, [objCoords$$1, this.dragged, this.spacer]);
    }
    if (v967) {
      JAM.call(midori.setStyles, midori, [this.spacer, {display:"block", height:this.dragged.offsetHeight + "px"}]);
      if (JAM.call(midori.getFloat, midori, [this.spacer])) {
        this.spacer.style.width = this.dragged.offsetWidth + "px";
      }
    } else {
      this.spacer.style.display = "none";
    }
    return;
  }
  function v10(parentObj$$1) {
    function v9(o$$9) {
      if (!/draggable/.test(o$$9.className)) {
        return;
      }
      j$$3 = 0;
      var v509 = j$$3 < numObjs$$4;
      for (;v509;) {
        if (thisObj$$1.objs[j$$3] == o$$9) {
          thisObj$$1.objs[j$$3] = "";
          break;
        }
        j$$3++;
        v509 = j$$3 < numObjs$$4;
      }
      return;
    }
    var j$$3;
    var numObjs$$4 = this.objs.length;
    JAM.call(midori.each, midori, [parentObj$$1, v9, true]);
    j$$3 = 0;
    var v513 = j$$3 < numObjs$$4;
    for (;v513;) {
      if (this.objs[j$$3] == parentObj$$1) {
        this.objs[j$$3] = "";
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
    if (v1261) {
      v514 = this.lastMousePos;
    } else {
      v514 = JAM.call(midori.getMousePos, midori, [event$$5]);
    }
    var mousePos$$1 = v514;
    var obj$$26;
    var objCoords;
    var objPos$$1;
    if (!this.objsCoords.length) {
      var i$$21 = 0;
      var numObjs$$3 = this.objs.length;
      var v519 = i$$21 < numObjs$$3;
      for (;v519;) {
        var v978 = obj$$26 = this.objs[i$$21];
        if (v978) {
          v978 = objPos$$1 = JAM.call(midori.getPos, midori, [obj$$26]);
        }
        if (v978) {
          this.objsCoords.push({obj:obj$$26, x:objPos$$1.x, y:objPos$$1.y, width:obj$$26.offsetWidth, height:obj$$26.offsetHeight});
        }
        i$$21++;
        v519 = i$$21 < numObjs$$3;
      }
    }
    var j$$2 = 0;
    var numObjsCoords = this.objsCoords.length;
    var v525 = j$$2 < numObjsCoords;
    for (;v525;) {
      if (objCoords = this.objsCoords[j$$2]) {
        var v1428 = mousePos$$1.x >= objCoords.x;
        if (v1428) {
          v1428 = mousePos$$1.x <= objCoords.x + objCoords.width;
        }
        var v1264 = v1428;
        if (v1264) {
          var v1429 = mousePos$$1.y >= objCoords.y;
          if (v1429) {
            v1429 = mousePos$$1.y <= objCoords.y + objCoords.height;
          }
          v1264 = v1429;
        }
        if (!v1264) {
          j$$2++;
          v525 = j$$2 < numObjsCoords;
          continue;
        }
        var v523;
        if (JAM.call(midori.getFloat, midori, [objCoords.obj])) {
          var v985;
          if (mousePos$$1.x < objCoords.x + objCoords.width / 2) {
            v985 = "prev";
          } else {
            v985 = "next";
          }
          v523 = v985;
        } else {
          var v986;
          if (mousePos$$1.y < objCoords.y + objCoords.height / 2) {
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
        if (/not-draggable/.test(me$$2.className)) {
          return;
        }
        var v527 = !/draggable/.test(me$$2.className);
        for (;v527;) {
          me$$2 = me$$2.parentNode;
          v527 = !/draggable/.test(me$$2.className);
        }
        var objPos = JAM.call(midori.getPos, midori, [me$$2]);
        thisObj$$1.dragged = me$$2;
        thisObj$$1.mouseOffset = {x:mousePos.x - objPos.x, y:mousePos.y - objPos.y};
        if (!/drop-target/.test(o$$8.className)) {
          me$$2.style.opacity = ".5";
          JAM.call(midori.preventBubble, midori, [e$$9]);
          JAM.call(midori.preventDefault, midori, [e$$9]);
        }
        JAM.call(thisObj$$1.removeDraggedObj, thisObj$$1, [me$$2]);
        return;
      }
      var v1271 = /not-draggable/.test(o$$8.className);
      if (!v1271) {
        v1271 = !/draggable/.test(o$$8.className);
      }
      var v996 = v1271;
      if (!v996) {
        v996 = o$$8.style.display == "none";
      }
      if (v996) {
        return;
      }
      thisObj$$1.objs.push(o$$8);
      var i$$20 = 0;
      var v535 = i$$20 < 2;
      for (;v535;) {
        JAM.call(midori.addEventListener, midori, [o$$8, ["mousedown", "touchstart"][i$$20], v5]);
        i$$20++;
        v535 = i$$20 < 2;
      }
      return;
    }
    this.objs = [];
    this.objsCoords = [];
    this.mouseMoved = false;
    this.dragged = null;
    JAM.call(midori.each, midori, [this.container, v6, true]);
    return;
  }
  var thisObj$$1 = this;
  var v1636 = JAM.call(midori.get, midori, ["#" + containerId$$1]);
  this.container = v1636;
  this.init = v7;
  this.findPlace = v8;
  this.removeDraggedObj = v10;
  this.mouseMove = v11;
  this.mouseUp = v12;
  this.defaultDropCallback = v13;
  JAM.call(midori.addEventListener, midori, [this.container, "mousemove", v14]);
  JAM.call(midori.addEventListener, midori, [this.container, "mouseup", v15]);
  JAM.call(midori.addEventListener, midori, [this.container, "click", v16]);
  JAM.call(midori.addEventListener, midori, [this.container, "touchmove", v17]);
  JAM.call(midori.addEventListener, midori, [this.container, "touchend", v18]);
  var v1637 = document.createElement("div");
  this.spacer = v1637;
  JAM.set(this.spacer, "innerHTML", "&nbsp;");
  JAM.call(midori.setAttributes, midori, [this.spacer, {id:"midori_dd_spacer" + midori.uniqid(), className:"midori-dd-spacer"}]);
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
function midoriAjax(callback$$29, params$$1, cache) {
  function v20(where, what$$3, verb, headers) {
    var cachedValue;
    this.cacheKey = where + "?" + what$$3;
    var v999 = cache;
    if (v999) {
      v999 = (cachedValue = this.cache[this.cacheKey]) != null;
    }
    if (v999) {
      this.responseText = cachedValue;
      JAM.call(this.runCallback, this, ["", true]);
      return;
    }
    JAM.set(this.request, "onreadystatechange", this.runCallback);
    var v550;
    if (verb) {
      var v1440;
      if (verb == true) {
        v1440 = "GET";
      } else {
        v1440 = verb;
      }
      v550 = JAM.call(midori.trim, midori, [v1440.toUpperCase()]);
    } else {
      v550 = "POST";
    }
    verb = v550;
    var v551 = this.request;
    var v1001;
    if (JAM.call(midori.inArray, midori, [verb, ["POST", "PUT"]])) {
      v1001 = where;
    } else {
      var v1442;
      if (what$$3) {
        v1442 = "?" + what$$3;
      } else {
        v1442 = "";
      }
      v1001 = where + v1442;
    }
    v551.open(verb, v1001, true);
    if (JAM.call(midori.inArray, midori, [verb, ["POST", "PUT"]])) {
      this.request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
      this.request.setRequestHeader("Content-length", what$$3.length);
      this.request.setRequestHeader("Connection", "close");
    }
    if (headers) {
      var i$$22 = 0;
      var len$$2 = headers.length;
      var v561 = i$$22 < len$$2;
      for (;v561;) {
        this.request.setRequestHeader(headers[i$$22][0], headers[i$$22][1]);
        i$$22++;
        v561 = i$$22 < len$$2;
      }
    }
    var v562 = this.request;
    var v1005;
    if (JAM.call(midori.inArray, midori, [verb, ["POST", "PUT"]])) {
      v1005 = what$$3;
    } else {
      v1005 = null;
    }
    v562.send(v1005);
    return;
  }
  function v19(event$$8, cached) {
    if (!cached) {
      if (thisObj$$2.request.readyState != 4) {
        return;
      }
      thisObj$$2.responseText = thisObj$$2.request.responseText;
      thisObj$$2.responseXML = thisObj$$2.request.responseXML;
      thisObj$$2.status = thisObj$$2.request.status;
      var v568 = thisObj$$2.cache;
      var v569 = thisObj$$2.cacheKey;
      introspect(JAM.policy.p2) {
        v568[v569] = thisObj$$2.responseText;
      }
    }
    JAM.call(thisObj$$2.callback, thisObj$$2, [params$$1]);
    return;
  }
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
      if (e$$20.keyCode == 13) {
        return false;
      }
      return;
    }
    function v29(e$$19) {
      if (e$$19.keyCode == 13) {
        JAM.call(midori.preventDefault, midori, [e$$19]);
      }
      return;
    }
    function v28() {
      if (thisObj$$3.ajax.responseText) {
        var v573;
        if (typeof thisObj$$3.ajax.responseText == "string") {
          var v1010 = "(" + thisObj$$3.ajax.responseText + ")";
          if (JAM.isEval(eval)) {
            v573 = eval("introspect(JAM.policy.pFull) { " + v1010 + " }");
          } else {
            v573 = JAM.call(eval, null, [v1010]);
          }
        } else {
          v573 = thisObj$$3.ajax.responseText;
        }
        var response = v573;
        var v574 = thisObj$$3.suggestions;
        var v575 = response["snippet"];
        introspect(JAM.policy.p2) {
          v574[v575] = response["result"];
        }
        JAM.call(thisObj$$3.showSuggestions, thisObj$$3, [response["snippet"]]);
      }
      return;
    }
    if (!vars$$7.separator) {
      vars$$7.separator = "";
    }
    this.ajaxCallback = v28;
    var v1641 = midori.uniqid();
    this.uniqid = v1641;
    var v1642 = JAM.call(midori.get, midori, ["#" + vars$$7.id]);
    this.obj = v1642;
    this.content = this.obj.value;
    this.oldContent = this.content;
    this.suggestions = [];
    var v581;
    if (typeof vars$$7.fileName == "string") {
      v581 = new midoriAjax(this.ajaxCallback, "", true);
    } else {
      v581 = {};
    }
    this.ajax = v581;
    if (this.browserType != "Gecko") {
      var parentNode$$2 = this.obj;
      JAM.call(midori.addEventListener, midori, [parentNode$$2, "keypress", v29]);
      var v583 = parentNode$$2.parentNode != null;
      for (;v583;) {
        parentNode$$2 = parentNode$$2.parentNode;
        if (parentNode$$2.nodeName.toLowerCase() == "form") {
          JAM.call(midori.addEventListener, midori, [parentNode$$2, "keypress", v30]);
        }
        v583 = parentNode$$2.parentNode != null;
      }
    }
    var v585 = this.obj;
    JAM.call(v585.setAttribute, v585, ["autocomplete", "off"]);
    JAM.call(midori.addEventListener, midori, [this.obj, "keyup", v31]);
    return;
  }
  function v27(snippet$$3) {
    var pos = 0;
    var i$$25;
    for (i$$25 in this.suggestions[snippet$$3]) {
      if ((pos = pos + 1) == this.suggestionPos) {
        var v587 = this.obj;
        var v1024 = this.obj.value;
        var v1286;
        if (vars$$7.callback) {
          v1286 = JAM.call(vars$$7.callback, vars$$7, [this.suggestions[snippet$$3][i$$25]]);
        } else {
          v1286 = this.suggestions[snippet$$3][i$$25];
        }
        var v1643 = JAM.call(v1024.replace, v1024, [snippet$$3, v1286]);
        v587.value = v1643;
        break;
      }
    }
    this.content = this.obj.value;
    this.oldContent = this.content;
    this.obj.focus();
    return;
  }
  function v26(suggestionPos) {
    var v1287 = "#" + this.popupId + " .";
    var v1451 = vars$$7.suggestionSelectedClass;
    var v592 = JAM.call(midori.get, midori, [v1287 + JAM.call(v1451.replace, v1451, [" ", "."])]);
    JAM.call(v592.apply, v592, ["className = '" + vars$$7.suggestionClass + "'"]);
    JAM.call(midori.get, midori, ["#midori_suggestion" + this.uniqid + "_" + suggestionPos]).className = vars$$7.suggestionSelectedClass;
    this.suggestionPos = suggestionPos;
    return;
  }
  function v25(snippet$$2) {
    var suggestions = this.suggestions[snippet$$2];
    var html = "";
    var properties = [];
    var i$$24 = 0;
    var j$$5 = 0;
    var k$$2 = "";
    for (i$$24 in suggestions) {
      if (vars$$7.htmlTemplate) {
        for (k$$2 in suggestions[i$$24]) {
          var v596 = suggestions[i$$24];
          introspect(JAM.policy.p2) {
            properties[k$$2] = v596[k$$2];
          }
        }
      }
      var v1453 = '<a id="midori_suggestion' + this.uniqid + "_" + (j$$5 = j$$5 + 1) + '" class="' + vars$$7.suggestionClass + '" href="#">';
      var v1541;
      if (vars$$7.htmlTemplate) {
        v1541 = JAM.call(midori.replace, midori, [vars$$7.htmlTemplate, properties]);
      } else {
        v1541 = suggestions[i$$24];
      }
      html = html + (v1453 + v1541 + "</a>\n");
    }
    if (!html) {
      midoriPopup.hide();
      return;
    }
    this.snippet = snippet$$2;
    this.suggestionPos = 0;
    this.numSuggestions = j$$5;
    if (this.popup) {
      JAM.call(midori.removeNode, midori, [this.popup]);
    }
    this.popupId = "midori_suggestions" + this.uniqid;
    var v1644 = document.createElement("div");
    this.popup = v1644;
    JAM.call(midori.setAttributes, midori, [this.popup, {id:this.popupId, className:"popup"}]);
    var v605 = document.body;
    JAM.call(v605.appendChild, v605, [this.popup]);
    JAM.set(this.popup, "innerHTML", html);
    j$$5 = 0;
    for (i$$24 in this.suggestions[snippet$$2]) {
      JAM.call(this.addProperties, this, [j$$5 = j$$5 + 1, snippet$$2]);
    }
    JAM.call(midoriPopup.show, midoriPopup, [{obj:this.obj, popupId:this.popupId, x:0, y:0, noAnim:true}]);
    this.obj.focus();
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
    var obj$$27 = JAM.call(midori.get, midori, ["#midori_suggestion" + this.uniqid + "_" + id$$5]);
    JAM.call(midori.addEventListener, midori, [obj$$27, "mouseover", v22]);
    JAM.call(midori.addEventListener, midori, [obj$$27, "click", v23]);
    return;
  }
  function v21(event$$9) {
    var v1035 = this.popup;
    if (v1035) {
      v1035 = this.popup == midoriPopup.activePopup;
    }
    if (v1035) {
      switch(event$$9.keyCode) {
        case 27:
        ;
        case 37:
        ;
        case 39:
          midoriPopup.hide();
          break;
        case 13:
          JAM.call(this.replaceSnippet, this, [this.snippet]);
          midoriPopup.hide();
          break;
        case 38:
          var v1036 = this.suggestionPos;
          if (v1036) {
            v1036 = this.suggestionPos != 1;
          }
          if (v1036) {
            JAM.call(this.highlightSuggestion, this, [this.suggestionPos - 1]);
          }
          break;
        case 40:
          if (this.suggestionPos != this.numSuggestions) {
            JAM.call(this.highlightSuggestion, this, [this.suggestionPos + 1]);
          }
        ;
      }
    } else {
      if (vars$$7.callback2) {
        JAM.call(vars$$7.callback2, vars$$7, [event$$9]);
      }
    }
    this.content = this.obj.value;
    var v1041 = this.content == this.oldContent;
    if (!v1041) {
      v1041 = JAM.call(midori.inArray, midori, [event$$9.keyCode, [13, 38, 40]]);
    }
    if (v1041) {
      return;
    }
    var changed = false;
    var i$$23 = 0;
    var len$$3 = this.content.length;
    var v625 = i$$23 < len$$3;
    for (;v625;) {
      if (this.content.charAt(i$$23) != this.oldContent.charAt(i$$23)) {
        changed = true;
        break;
      }
      i$$23++;
      v625 = i$$23 < len$$3;
    }
    var v1044 = !changed;
    if (v1044) {
      v1044 = this.oldContent.length < len$$3;
    }
    if (v1044) {
      return;
    }
    if (this.content.charAt(i$$23) == vars$$7.separator) {
      var v627;
      if (event$$9.keyCode == 8) {
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
      if (this.content.charAt(j$$4) == vars$$7.separator) {
        j$$4++;
        break;
      }
      j$$4--;
      v630 = j$$4 > 0;
    }
    var snippet = this.content.substr(j$$4, i$$23 - j$$4);
    j$$4 = i$$23;
    var v634 = j$$4 < len$$3;
    for (;v634;) {
      if (this.content.charAt(j$$4) == vars$$7.separator) {
        break;
      }
      j$$4++;
      v634 = j$$4 < len$$3;
    }
    snippet = snippet + this.content.substr(i$$23, j$$4 - i$$23);
    snippet = JAM.call(midori.trim, midori, [snippet]);
    if (snippet.length >= vars$$7.minChars) {
      if (typeof vars$$7.fileName == "string") {
        var v635 = this.ajax;
        JAM.call(v635.post, v635, [vars$$7.fileName, vars$$7.params + JAM.call(midori.trim, midori, [snippet])]);
      } else {
        var v638 = this.ajax;
        var v1645 = JAM.call(vars$$7.fileName, vars$$7, [vars$$7.params + JAM.call(midori.trim, midori, [snippet])]);
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
    if (this.myObj.getAttribute("editing") != "on") {
      return;
    }
    var v1314 = this.editObj.value;
    var v1060 = JAM.call(v1314.replace, v1314, ["\n", ""]);
    var text$$7 = JAM.call(midori.trim, midori, [JAM.call(v1060.replace, v1060, ["\r", ""])]);
    if (!text$$7) {
      this.editObj.value = "";
      return;
    }
    var v645 = this.myObj;
    JAM.call(v645.setAttribute, v645, ["editing", "off"]);
    JAM.set(this.myObj, "innerHTML", "");
    JAM.set(this.myObj, "innerHTML", text$$7);
    if (vars$$8.callback) {
      JAM.call(vars$$8.callback, vars$$8, [text$$7, this.myObj]);
    }
    return;
  }
  function v38() {
    if (this.myObj.getAttribute("editing") == "on") {
      this.editObj.select();
    }
    return;
  }
  function v37() {
    function v36(e$$25) {
      thisObj$$4.save();
      return;
    }
    function v35(e$$24) {
      var v1062 = e$$24.keyCode == 13;
      if (!v1062) {
        v1062 = e$$24.keyCode == 27;
      }
      if (v1062) {
        thisObj$$4.save();
      }
      return;
    }
    function v34(e$$23) {
      JAM.call(midori.preventBubble, midori, [e$$23]);
      return;
    }
    var v1063 = this.myObj.getAttribute("editing") == "on";
    if (!v1063) {
      v1063 = JAM.call(midori.get, midori, [this.input, this.myObj])[0];
    }
    if (v1063) {
      return;
    }
    var v654 = this.myObj.innerHTML;
    var value$$29 = JAM.call(v654.replace, v654, [/"/g, "&quot;"]);
    var v655 = this.myObj;
    var v1065;
    if (vars$$8.textArea) {
      var v1585 = this.myObj.parentNode.offsetWidth;
      var v1606;
      if (vars$$8.x) {
        v1606 = vars$$8.x;
      } else {
        v1606 = 32;
      }
      var v1461 = v1585 - v1606 + "px";
      var v1587 = this.myObj.parentNode.offsetHeight;
      var v1608;
      if (vars$$8.y) {
        v1608 = vars$$8.y;
      } else {
        v1608 = 32;
      }
      v1065 = JAM.call(midori.replace, midori, ['<textarea style="width: :w; height: :h; overflow: auto">:value</textarea>', {w:v1461, h:v1587 - v1608 + "px", value:value$$29}]);
    } else {
      var v1544;
      if (vars$$8.size) {
        v1544 = vars$$8.size;
      } else {
        v1544 = "";
      }
      var v1463 = v1544;
      var v1545;
      if (vars$$8.maxlen) {
        v1545 = vars$$8.maxlen;
      } else {
        v1545 = "";
      }
      v1065 = JAM.call(midori.replace, midori, ['<input type="text" size=":size" maxlength=":maxlen" value=":value" />', {size:v1463, maxlen:v1545, value:value$$29}]);
    }
    JAM.set(v655, "innerHTML", v1065);
    this.editObj = JAM.call(midori.get, midori, [this.input, this.myObj])[0];
    this.editObj.focus();
    this.editObj.focus();
    var v659 = this.myObj;
    JAM.call(v659.setAttribute, v659, ["editing", "on"]);
    JAM.call(midori.addEventListener, midori, [this.editObj, "mousedown", v34]);
    JAM.call(midori.addEventListener, midori, [this.editObj, "keyup", v35]);
    JAM.call(midori.addEventListener, midori, [this.editObj, "blur", v36]);
    return;
  }
  function v33(e$$22) {
    var v1068 = thisObj$$4.editObj;
    if (v1068) {
      v1068 = JAM.call(midori.getEventTarget, midori, [e$$22]) != thisObj$$4.editObj;
    }
    if (v1068) {
      thisObj$$4.save();
      JAM.call(midori.preventDefault, midori, [e$$22]);
    }
    return;
  }
  var thisObj$$4 = this;
  var v1646 = JAM.call(midori.get, midori, ["#" + vars$$8.id]);
  this.myObj = v1646;
  this.editObj = "";
  var v665;
  if (vars$$8.textArea) {
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
if (window.opera) {
  v1071 = "Opera";
} else {
  var v1327;
  if (navigator.userAgent.indexOf("WebKit") != -1) {
    v1327 = "Safari";
  } else {
    var v1465;
    if (navigator.userAgent.indexOf("MSIE") != -1) {
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
if (navigator.userAgent.indexOf("Windows") != -1) {
  v1072 = "Win";
} else {
  var v1329;
  if (navigator.userAgent.indexOf("Macintosh") != -1) {
    v1329 = "Mac";
  } else {
    v1329 = "Other";
  }
  v1072 = v1329;
}
var midori = {browserType:v666, browserOS:v1072, domReady:[], each:v40, sibling:v41, parseSelectors:v42, processAttrs:v43, processPseudo:v44, getMatches:v46, get:v48, getCssRule:v49, setStyles:v50, setAttributes:v51, removeNode:v52, addEventListener:v57, runReadyEvents:v58, getEventTarget:v59, getMousePos:v60, preventBubble:v61, preventDefault:v62, getFloat:v63, setFloat:v64, getSelection:v65, getSelectionText:v66, getCookie:v67, setCookie:v68, convertToFields:v69, replace:v70, trim:v71, uniqid:v72, 
concatUnique:v73, implode:v74, inArray:v75, shortenWords:v77, resizeImg:v79, saveCheckboxState:v80, checkRequiredFields:v81, getWindowDims:v82, getPos:v83, highlightRow:v85};
var midoriFX = {intervals:{}, lastIntervalId:0, getOutsideSize:v86, showWithAnim:v87, show:v89, hideWithAnim:v90, hide:v92, scrollToWithAnim:v93, scrollTo:v95, sliderToWithAnim:v96, slider:v98};
var midoriPopup = {show:v99, hide:v100};
JAM.call(midori.addEventListener, midori, [document, "mouseup", v101]);
JAM.call(midori.addEventListener, midori, [document, "touchend", v102]);
var midoriTab = {selectedTabs:{}, select:v103, init:v107};
var midoriHistory = {history:[], modifyLocation:v108, add:v109, remove:v110, onChange:v111, init:v112};
JAM.call(midori.setCookie, midori, [1, 2, 3, 4, 5])

JAM.stopProfile('load');
