function midoriTableSelection(vars$$6) {
  this.vars = vars$$6;
  this.rowIds = [];
  var thisObj = this;
  var cb$$1 = document.createElement("input");
  cb$$1.setAttribute("type", "checkbox");
  midori.addEventListener(cb$$1, "click", function(e$$7) {
    var id$$3;
    var el$$1;
    var isChecked;
    var i$$18 = 0;
    var numIds = thisObj.rowIds.length;
    for(;i$$18 < numIds;i$$18++) {
      id$$3 = thisObj.rowIds[i$$18];
      el$$1 = midori.get("#" + vars$$6.rowPrefix + "cb_" + id$$3).firstChild;
      isChecked = el$$1.checked;
      el$$1.checked = !isChecked;
      el$$1.value = isChecked ? "" : id$$3;
      midori.highlightRow(midori.get("#" + vars$$6.rowPrefix + id$$3), vars$$6.rowHighlight);
      midori.saveCheckboxState(midori.get("#" + vars$$6.tableId + "_cb_parent"), el$$1)
    }
  });
  var firstTh = midori.get("#" + vars$$6.tableId + " th")[0];
  var th = document.createElement("th");
  midori.setAttributes(th, {id:vars$$6.rowPrefix + "header-cb", align:"left", className:firstTh.className});
  th.appendChild(cb$$1);
  th.style.display = "none";
  firstTh.parentNode.appendChild(th);
  var cbParent = document.createElement("div");
  cbParent.id = vars$$6.tableId + "_cb_parent";
  document.body.appendChild(cbParent);
  midori.get("#" + vars$$6.tableId + ' tr[id^="' + vars$$6.rowPrefix + '"]').apply(function(o$$7) {
    var td;
    var el$$2;
    var id$$4;
    var className$$2;
    midori.get("td:last-child", o$$7).apply(function(c$$3) {
      className$$2 = c$$3.className
    });
    id$$4 = o$$7.id.substr(vars$$6.rowPrefix.length);
    td = document.createElement("td");
    td.style.display = "none";
    midori.setAttributes(td, {id:vars$$6.rowPrefix + "cb_" + id$$4, className:className$$2});
    el$$2 = document.createElement("input");
    midori.setAttributes(el$$2, {name:vars$$6.checkboxName, type:"checkbox", value:id$$4});
    midori.addEventListener(el$$2, "click", function(e$$8) {
      midori.highlightRow(midori.get("#" + vars$$6.rowPrefix + id$$4), vars$$6.rowHighlight);
      midori.saveCheckboxState(midori.get("#" + vars$$6.tableId + "_cb_parent"), el$$2);
      this.value = id$$4
    });
    td.appendChild(el$$2);
    o$$7.appendChild(td);
    thisObj.rowIds.push(id$$4)
  });
  this.toggle = function() {
    var numRowIds = this.rowIds.length;
    if(midori.get("#" + this.vars.rowPrefix + "header-cb").style.display == "none") {
      midori.get("#" + this.vars.rowPrefix + "header-cb").style.display = "";
      var i$$19 = 0;
      for(;i$$19 < numRowIds;i$$19++) {
        var rowId = this.rowIds[i$$19];
        midori.get("#" + this.vars.rowPrefix + "cb_" + rowId).style.display = "";
        if(midori.get("#" + this.vars.rowPrefix + "cb_" + rowId).firstChild.checked) {
          midori.highlightRow(midori.get("#" + this.vars.rowPrefix + rowId), this.vars.rowHighlight)
        }
      }
      if(vars$$6.showCallback) {
        vars$$6.showCallback(this)
      }
    }else {
      midori.get("#" + this.vars.rowPrefix + "header-cb").style.display = "none";
      i$$19 = 0;
      for(;i$$19 < numRowIds;i$$19++) {
        midori.get("#" + this.vars.rowPrefix + "cb_" + this.rowIds[i$$19]).style.display = "none";
        midori.highlightRow(midori.get("#" + this.vars.rowPrefix + this.rowIds[i$$19]), this.vars.rowHighlight, true)
      }
      if(vars$$6.hideCallback) {
        vars$$6.hideCallback(this)
      }
    }
  }
}
function midoriDragDrop(containerId$$1, dropCallback) {
  var thisObj$$1 = this;
  this.container = midori.get("#" + containerId$$1);
  this.init = function() {
    this.objs = [];
    this.objsCoords = [];
    this.mouseMoved = false;
    this.dragged = null;
    midori.each(this.container, function(o$$8) {
      if(/not-draggable/.test(o$$8.className) || !/draggable/.test(o$$8.className) || o$$8.style.display == "none") {
        return
      }
      thisObj$$1.objs.push(o$$8);
      var i$$20 = 0;
      for(;i$$20 < 2;i$$20++) {
        midori.addEventListener(o$$8, ["mousedown", "touchstart"][i$$20], function(e$$9) {
          var mousePos = midori.getMousePos(e$$9);
          var me$$2 = midori.getEventTarget(e$$9);
          if(/not-draggable/.test(me$$2.className)) {
            return
          }
          for(;!/draggable/.test(me$$2.className);) {
            me$$2 = me$$2.parentNode
          }
          var objPos = midori.getPos(me$$2);
          thisObj$$1.dragged = me$$2;
          thisObj$$1.mouseOffset = {x:mousePos.x - objPos.x, y:mousePos.y - objPos.y};
          if(!/drop-target/.test(o$$8.className)) {
            me$$2.style.opacity = ".5";
            midori.preventBubble(e$$9);
            midori.preventDefault(e$$9)
          }
          thisObj$$1.removeDraggedObj(me$$2)
        })
      }
    }, true)
  };
  this.findPlace = function(event$$5, mouseUp) {
    var mousePos$$1 = mouseUp && event$$5.targetTouches ? this.lastMousePos : midori.getMousePos(event$$5);
    var obj$$26;
    var objCoords;
    var objPos$$1;
    if(!this.objsCoords.length) {
      var i$$21 = 0;
      var numObjs$$3 = this.objs.length;
      for(;i$$21 < numObjs$$3;i$$21++) {
        if((obj$$26 = this.objs[i$$21]) && (objPos$$1 = midori.getPos(obj$$26))) {
          this.objsCoords.push({obj:obj$$26, x:objPos$$1.x, y:objPos$$1.y, width:obj$$26.offsetWidth, height:obj$$26.offsetHeight})
        }
      }
    }
    var j$$2 = 0;
    var numObjsCoords = this.objsCoords.length;
    for(;j$$2 < numObjsCoords;j$$2++) {
      if(objCoords = this.objsCoords[j$$2]) {
        if(!(mousePos$$1.x >= objCoords.x && mousePos$$1.x <= objCoords.x + objCoords.width && mousePos$$1.y >= objCoords.y && mousePos$$1.y <= objCoords.y + objCoords.height)) {
          continue
        }
        objCoords.where = midori.getFloat(objCoords.obj) ? mousePos$$1.x < objCoords.x + objCoords.width / 2 ? "prev" : "next" : mousePos$$1.y < objCoords.y + objCoords.height / 2 ? "prev" : "next";
        return objCoords
      }
    }
  };
  this.removeDraggedObj = function(parentObj$$1) {
    var j$$3;
    var numObjs$$4 = this.objs.length;
    midori.each(parentObj$$1, function(o$$9) {
      if(!/draggable/.test(o$$9.className)) {
        return
      }
      j$$3 = 0;
      for(;j$$3 < numObjs$$4;j$$3++) {
        if(thisObj$$1.objs[j$$3] == o$$9) {
          thisObj$$1.objs[j$$3] = "";
          break
        }
      }
    }, true);
    j$$3 = 0;
    for(;j$$3 < numObjs$$4;j$$3++) {
      if(this.objs[j$$3] == parentObj$$1) {
        this.objs[j$$3] = "";
        break
      }
    }
  };
  this.mouseMove = function(event$$6) {
    if(!this.dragged || /drop-target/.test(this.dragged.className)) {
      return
    }
    midori.preventDefault(event$$6);
    var mousePos$$2 = midori.getMousePos(event$$6);
    this.lastMousePos = mousePos$$2;
    this.mouseMoved = true;
    midori.setStyles(this.dragged, {position:"absolute", left:mousePos$$2.x - this.mouseOffset.x + "px", top:mousePos$$2.y - this.mouseOffset.y + "px"});
    midori.setFloat(this.spacer, midori.getFloat(this.dragged));
    var objCoords$$1;
    if((objCoords$$1 = this.findPlace(event$$6)) && this.dropCallback(objCoords$$1, this.dragged, this.spacer)) {
      midori.setStyles(this.spacer, {display:"block", height:this.dragged.offsetHeight + "px"});
      if(midori.getFloat(this.spacer)) {
        this.spacer.style.width = this.dragged.offsetWidth + "px"
      }
    }else {
      this.spacer.style.display = "none"
    }
  };
  this.mouseUp = function(event$$7) {
    this.doneDragging = false;
    if(!this.dragged) {
      return
    }
    var objCoords$$2;
    if(this.mouseMoved && (objCoords$$2 = this.findPlace(event$$7, true))) {
      this.dropCallback(objCoords$$2, this.dragged);
      this.doneDragging = true
    }
    if(!this.dragged) {
      return
    }
    this.spacer.style.display = "none";
    midori.setStyles(this.dragged, {position:"", opacity:"1"});
    this.init(this.container)
  };
  this.defaultDropCallback = function(o$$10, dragged, spacer) {
    if(/drop-target/.test(o$$10.obj.className)) {
      return o$$10.obj.appendChild(spacer ? spacer : dragged)
    }
    return o$$10.where == "next" && !o$$10.obj.nextSibling ? o$$10.obj.parentNode.appendChild(spacer ? spacer : dragged) : o$$10.obj.parentNode.insertBefore(spacer ? spacer : dragged, o$$10.where == "prev" ? o$$10.obj : o$$10.obj.nextSibling)
  };
  midori.addEventListener(this.container, "mousemove", function(e$$10) {
    thisObj$$1.mouseMove(e$$10)
  });
  midori.addEventListener(this.container, "mouseup", function(e$$11) {
    thisObj$$1.mouseUp(e$$11)
  });
  midori.addEventListener(this.container, "click", function(e$$12) {
    if(thisObj$$1.doneDragging) {
      midori.preventDefault(e$$12)
    }
  });
  midori.addEventListener(this.container, "touchmove", function(e$$13) {
    thisObj$$1.mouseMove(e$$13)
  });
  midori.addEventListener(this.container, "touchend", function(e$$14) {
    thisObj$$1.mouseUp(e$$14)
  });
  this.spacer = document.createElement("div");
  this.spacer.innerHTML = "&nbsp;";
  midori.setAttributes(this.spacer, {id:"midori_dd_spacer" + midori.uniqid(), className:"midori-dd-spacer"});
  this.dropCallback = dropCallback ? dropCallback : this.defaultDropCallback;
  this.init()
}
function midoriAjax(callback$$29, params$$1, cache) {
  var thisObj$$2 = this;
  this.cache = {};
  this.callback = callback$$29;
  try {
    this.request = new XMLHttpRequest
  }catch(e$$15) {
    try {
      this.request = new ActiveXObject("Msxml2.XMLHTTP")
    }catch(e$$16) {
      this.request = new ActiveXObject("Microsoft.XMLHTTP")
    }
  }
  this.runCallback = function(event$$8, cached) {
    if(!cached) {
      if(thisObj$$2.request.readyState != 4) {
        return
      }
      thisObj$$2.responseText = thisObj$$2.request.responseText;
      thisObj$$2.responseXML = thisObj$$2.request.responseXML;
      thisObj$$2.status = thisObj$$2.request.status;
      thisObj$$2.cache[thisObj$$2.cacheKey] = thisObj$$2.responseText
    }
    thisObj$$2.callback(params$$1)
  };
  this.post = function(where, what$$3, verb, headers) {
    var cachedValue;
    this.cacheKey = where + "?" + what$$3;
    if(cache && (cachedValue = this.cache[this.cacheKey]) != null) {
      this.responseText = cachedValue;
      this.runCallback("", true);
      return
    }
    this.request.onreadystatechange = this.runCallback;
    verb = verb ? midori.trim((verb == true ? "GET" : verb).toUpperCase()) : "POST";
    this.request.open(verb, midori.inArray(verb, ["POST", "PUT"]) ? where : where + (what$$3 ? "?" + what$$3 : ""), true);
    if(midori.inArray(verb, ["POST", "PUT"])) {
      this.request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
      this.request.setRequestHeader("Content-length", what$$3.length);
      this.request.setRequestHeader("Connection", "close")
    }
    if(headers) {
      var i$$22 = 0;
      var len$$2 = headers.length;
      for(;i$$22 < len$$2;i$$22++) {
        this.request.setRequestHeader(headers[i$$22][0], headers[i$$22][1])
      }
    }
    this.request.send(midori.inArray(verb, ["POST", "PUT"]) ? what$$3 : null)
  }
}
function midoriAutoComplete(vars$$7) {
  var thisObj$$3 = this;
  this.process = function(event$$9) {
    if(this.popup && this.popup == midoriPopup.activePopup) {
      switch(event$$9.keyCode) {
        case 27:
        ;
        case 37:
        ;
        case 39:
          midoriPopup.hide();
          break;
        case 13:
          this.replaceSnippet(this.snippet);
          midoriPopup.hide();
          break;
        case 38:
          if(this.suggestionPos && this.suggestionPos != 1) {
            this.highlightSuggestion(this.suggestionPos - 1)
          }
          break;
        case 40:
          if(this.suggestionPos != this.numSuggestions) {
            this.highlightSuggestion(this.suggestionPos + 1)
          }
      }
    }else {
      if(vars$$7.callback2) {
        vars$$7.callback2(event$$9)
      }
    }
    this.content = this.obj.value;
    if(this.content == this.oldContent || midori.inArray(event$$9.keyCode, [13, 38, 40])) {
      return
    }
    var changed = false;
    var i$$23 = 0;
    var len$$3 = this.content.length;
    for(;i$$23 < len$$3;i$$23++) {
      if(this.content.charAt(i$$23) != this.oldContent.charAt(i$$23)) {
        changed = true;
        break
      }
    }
    if(!changed && this.oldContent.length < len$$3) {
      return
    }
    if(this.content.charAt(i$$23) == vars$$7.separator) {
      event$$9.keyCode == 8 ? i$$23-- : i$$23++
    }
    var j$$4 = i$$23;
    for(;j$$4 > 0;j$$4--) {
      if(this.content.charAt(j$$4) == vars$$7.separator) {
        j$$4++;
        break
      }
    }
    var snippet = this.content.substr(j$$4, i$$23 - j$$4);
    j$$4 = i$$23;
    for(;j$$4 < len$$3;j$$4++) {
      if(this.content.charAt(j$$4) == vars$$7.separator) {
        break
      }
    }
    snippet += this.content.substr(i$$23, j$$4 - i$$23);
    snippet = midori.trim(snippet);
    if(snippet.length >= vars$$7.minChars) {
      if(typeof vars$$7.fileName == "string") {
        this.ajax.post(vars$$7.fileName, vars$$7.params + midori.trim(snippet))
      }else {
        this.ajax.responseText = vars$$7.fileName(vars$$7.params + midori.trim(snippet));
        this.ajaxCallback()
      }
    }
    this.oldContent = this.content
  };
  this.addProperties = function(id$$5, snippet$$1) {
    var obj$$27 = midori.get("#midori_suggestion" + this.uniqid + "_" + id$$5);
    midori.addEventListener(obj$$27, "mouseover", function(e$$17) {
      thisObj$$3.highlightSuggestion(id$$5)
    });
    midori.addEventListener(obj$$27, "click", function(e$$18) {
      thisObj$$3.replaceSnippet(snippet$$1);
      midori.preventDefault(e$$18)
    })
  };
  this.showSuggestions = function(snippet$$2) {
    var suggestions = this.suggestions[snippet$$2];
    var html = "";
    var properties = [];
    var i$$24 = 0;
    var j$$5 = 0;
    var k$$2 = "";
    for(i$$24 in suggestions) {
      if(vars$$7.htmlTemplate) {
        for(k$$2 in suggestions[i$$24]) {
          properties[k$$2] = suggestions[i$$24][k$$2]
        }
      }
      html += '<a id="midori_suggestion' + this.uniqid + "_" + ++j$$5 + '" class="' + vars$$7.suggestionClass + '" href="#">' + (vars$$7.htmlTemplate ? midori.replace(vars$$7.htmlTemplate, properties) : suggestions[i$$24]) + "</a>\n"
    }
    if(!html) {
      midoriPopup.hide();
      return
    }
    this.snippet = snippet$$2;
    this.suggestionPos = 0;
    this.numSuggestions = j$$5;
    if(this.popup) {
      midori.removeNode(this.popup)
    }
    this.popupId = "midori_suggestions" + this.uniqid;
    this.popup = document.createElement("div");
    midori.setAttributes(this.popup, {id:this.popupId, className:"popup"});
    document.body.appendChild(this.popup);
    this.popup.innerHTML = html;
    j$$5 = 0;
    for(i$$24 in this.suggestions[snippet$$2]) {
      this.addProperties(++j$$5, snippet$$2)
    }
    midoriPopup.show({obj:this.obj, popupId:this.popupId, x:0, y:0, noAnim:true});
    this.obj.focus()
  };
  this.highlightSuggestion = function(suggestionPos) {
    midori.get("#" + this.popupId + " ." + vars$$7.suggestionSelectedClass.replace(" ", ".")).apply("className = '" + vars$$7.suggestionClass + "'");
    midori.get("#midori_suggestion" + this.uniqid + "_" + suggestionPos).className = vars$$7.suggestionSelectedClass;
    this.suggestionPos = suggestionPos
  };
  this.replaceSnippet = function(snippet$$3) {
    var pos = 0;
    var i$$25;
    for(i$$25 in this.suggestions[snippet$$3]) {
      if(++pos == this.suggestionPos) {
        this.obj.value = this.obj.value.replace(snippet$$3, vars$$7.callback ? vars$$7.callback(this.suggestions[snippet$$3][i$$25]) : this.suggestions[snippet$$3][i$$25]);
        break
      }
    }
    this.content = this.obj.value;
    this.oldContent = this.content;
    this.obj.focus()
  };
  this.init = function() {
    if(!vars$$7.separator) {
      vars$$7.separator = ""
    }
    this.ajaxCallback = function() {
      if(thisObj$$3.ajax.responseText) {
        var response = typeof thisObj$$3.ajax.responseText == "string" ? eval("(" + thisObj$$3.ajax.responseText + ")") : thisObj$$3.ajax.responseText;
        thisObj$$3.suggestions[response["snippet"]] = response["result"];
        thisObj$$3.showSuggestions(response["snippet"])
      }
    };
    this.uniqid = midori.uniqid();
    this.obj = midori.get("#" + vars$$7.id);
    this.content = this.obj.value;
    this.oldContent = this.content;
    this.suggestions = [];
    this.ajax = typeof vars$$7.fileName == "string" ? new midoriAjax(this.ajaxCallback, "", true) : {};
    if(this.browserType != "Gecko") {
      var parentNode$$2 = this.obj;
      midori.addEventListener(parentNode$$2, "keypress", function(e$$19) {
        if(e$$19.keyCode == 13) {
          midori.preventDefault(e$$19)
        }
      });
      for(;parentNode$$2.parentNode != null;) {
        parentNode$$2 = parentNode$$2.parentNode;
        if(parentNode$$2.nodeName.toLowerCase() == "form") {
          midori.addEventListener(parentNode$$2, "keypress", function(e$$20) {
            if(e$$20.keyCode == 13) {
              return false
            }
          })
        }
      }
    }
    this.obj.setAttribute("autocomplete", "off");
    midori.addEventListener(this.obj, "keyup", function(e$$21) {
      thisObj$$3.process(e$$21)
    })
  };
  this.init()
}
function midoriInlineEdit(vars$$8) {
  var thisObj$$4 = this;
  this.myObj = midori.get("#" + vars$$8.id);
  this.editObj = "";
  this.input = vars$$8.textArea ? "textarea" : "input";
  midori.addEventListener(document, "mouseup", function(e$$22) {
    if(thisObj$$4.editObj && midori.getEventTarget(e$$22) != thisObj$$4.editObj) {
      thisObj$$4.save();
      midori.preventDefault(e$$22)
    }
  });
  this.edit = function() {
    if(this.myObj.getAttribute("editing") == "on" || midori.get(this.input, this.myObj)[0]) {
      return
    }
    var value$$31 = this.myObj.innerHTML.replace(/"/g, "&quot;");
    this.myObj.innerHTML = vars$$8.textArea ? midori.replace('<textarea style="width: :w; height: :h; overflow: auto">:value</textarea>', {w:this.myObj.parentNode.offsetWidth - (vars$$8.x ? vars$$8.x : 32) + "px", h:this.myObj.parentNode.offsetHeight - (vars$$8.y ? vars$$8.y : 32) + "px", value:value$$31}) : midori.replace('<input type="text" size=":size" maxlength=":maxlen" value=":value" />', {size:vars$$8.size ? vars$$8.size : "", maxlen:vars$$8.maxlen ? vars$$8.maxlen : "", value:value$$31});
    this.editObj = midori.get(this.input, this.myObj)[0];
    this.editObj.focus();
    this.editObj.focus();
    this.myObj.setAttribute("editing", "on");
    midori.addEventListener(this.editObj, "mousedown", function(e$$23) {
      midori.preventBubble(e$$23)
    });
    midori.addEventListener(this.editObj, "keyup", function(e$$24) {
      if(e$$24.keyCode == 13 || e$$24.keyCode == 27) {
        thisObj$$4.save()
      }
    });
    midori.addEventListener(this.editObj, "blur", function(e$$25) {
      thisObj$$4.save()
    })
  };
  this.select = function() {
    if(this.myObj.getAttribute("editing") == "on") {
      this.editObj.select()
    }
  };
  this.save = function() {
    if(this.myObj.getAttribute("editing") != "on") {
      return
    }
    var text$$7 = midori.trim(this.editObj.value.replace("\n", "").replace("\r", ""));
    if(!text$$7) {
      this.editObj.value = "";
      return
    }
    this.myObj.setAttribute("editing", "off");
    this.myObj.innerHTML = "";
    this.myObj.innerHTML = text$$7;
    if(vars$$8.callback) {
      vars$$8.callback(text$$7, this.myObj)
    }
  }
}
var midori = {browserType:window.opera ? "Opera" : navigator.userAgent.indexOf("WebKit") != -1 ? "Safari" : navigator.userAgent.indexOf("MSIE") != -1 ? "MSIE" : "Gecko", browserOS:navigator.userAgent.indexOf("Windows") != -1 ? "Win" : navigator.userAgent.indexOf("Macintosh") != -1 ? "Mac" : "Other", domReady:[], each:function(parentObj, callBack, depthFirst) {
  var c = parentObj.firstChild;
  for(;c;) {
    if(!depthFirst) {
      callBack(c)
    }
    if(c.firstChild) {
      this.each(c, callBack, depthFirst)
    }
    if(depthFirst) {
      callBack(c)
    }
    c = c.nextSibling
  }
}, sibling:function(obj$$16, direction$$3) {
  var sibling = obj$$16;
  if(direction$$3 == "next") {
    do {
      sibling = sibling.nextSibling
    }while(sibling && sibling.nodeType == 3)
  }else {
    if(direction$$3 == "prev") {
      do {
        sibling = sibling.previousSibling
      }while(sibling && sibling.nodeType == 3)
    }
  }
  return sibling == obj$$16 ? false : sibling
}, parseSelectors:function(selectorText) {
  var c$$1 = this.trim(selectorText).split("");
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
  for(;i$$1 < len;i$$1++) {
    if(inSelector) {
      if(inBrackets) {
        switch(c$$1[i$$1]) {
          case '"':
            inQuotes = !inQuotes;
            break;
          case "]":
            if(!inQuotes) {
              attrs[sI].push(bracketContent);
              inBrackets = false;
              bracketContent = ""
            }
            break;
          case "\\":
            bracketContent += c$$1[++i$$1];
            break;
          default:
            bracketContent += c$$1[i$$1]
        }
      }else {
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
            elements[sI] += c$$1[++i$$1];
            break;
          default:
            elements[sI] += c$$1[i$$1]
        }
      }
    }else {
      switch(c$$1[i$$1]) {
        case " ":
        ;
        case ">":
        ;
        case ",":
          separators[sI] += c$$1[i$$1];
          break;
        default:
          inSelector = true;
          elements[++sI] = c$$1[i$$1];
          attrs[sI] = []
      }
    }
  }
  return{elements:elements, attrs:attrs, separators:separators}
}, processAttrs:function(match, a, exprs) {
  var i$$2 = 0;
  var numA = a.length;
  var attr;
  for(;i$$2 < numA;i$$2++) {
    attr = a[i$$2] == "class" ? match.className ? match.className : null : match.getAttribute(a[i$$2]);
    switch(typeof exprs[i$$2]) {
      case "undefined":
        if(attr == null) {
          return false
        }
        break;
      case "string":
        if(attr == exprs[i$$2]) {
          return false
        }
        break;
      default:
        if(!exprs[i$$2].test(attr)) {
          return false
        }
    }
  }
  return true
}, processPseudo:function(match$$1, pSelector, pA, pB) {
  var pCache;
  var nodeKey;
  var parentChildren = [];
  var pI = 0;
  if(!(nodeKey = match$$1.parentNode.getAttribute("midorinodekey"))) {
    match$$1.parentNode.setAttribute("midorinodekey", nodeKey = Math.random().toString().substr(2))
  }
  if(pCache = this.pCache[nodeKey]) {
    parentChildren = pCache["parentChildren"], pI = pCache["pI"]
  }else {
    var c$$2 = match$$1.parentNode.firstChild;
    for(;c$$2;) {
      if(c$$2.nodeType == 1) {
        parentChildren.push(c$$2)
      }
      c$$2 = c$$2.nextSibling
    }
    this.pCache[nodeKey] = {parentChildren:parentChildren, pI:0}
  }
  var parentNumChildren = parentChildren.length;
  switch(pSelector) {
    case "first-child":
      if(match$$1 == parentChildren[0]) {
        return true
      }
      break;
    case "last-child":
      if(match$$1 == parentChildren[parentNumChildren - 1]) {
        return true
      }
      break;
    case "only-child":
      if(parentNumChildren == 1) {
        return true
      }
  }
  if(pSelector == "nth-child") {
    var v = pA * pI + pB;
    var oldV = -50;
    for(;v > -50 && v <= parentNumChildren;) {
      if(v >= 0 && parentChildren[v - 1] == match$$1) {
        this.pCache[nodeKey]["pI"] = pA >= 0 ? pI + 1 : 0;
        return true
      }
      pI++, v += pA;
      if(v == oldV) {
        break
      }
      oldV = v
    }
  }
}, getMatches:function(target$$37, s$$2, a$$1, oneLevelOnly) {
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
  this.postProcess = function(me) {
    if(!numA$$1 && !pseudo) {
      matches.push(me);
      return
    }
    var match$$2 = true;
    if(numA$$1 && !this.processAttrs(me, a$$1, exprs$$1)) {
      match$$2 = false
    }
    if(pseudo && !this.processPseudo(me, pSelector$$1, pA$$1, pB$$1)) {
      match$$2 = false
    }
    if(match$$2) {
      matches.push(me)
    }
  };
  var i$$3 = 0;
  var numA$$1 = a$$1.length;
  for(;i$$3 < numA$$1;i$$3++) {
    chunks = a$$1[i$$3].match(/([a-z0-9_-]+)\s*([=^$*|!]{0,2})\s*"?([^"]*)"?$/i);
    a$$1[i$$3] = chunks[1];
    switch(chunks[2]) {
      case "=":
        exprs$$1[i$$3] = new RegExp("^" + chunks[3] + "$", "i");
        break;
      case "^=":
        exprs$$1[i$$3] = new RegExp("^" + chunks[3], "i");
        break;
      case "$=":
        exprs$$1[i$$3] = new RegExp(chunks[3] + "$", "i");
        break;
      case "*=":
        exprs$$1[i$$3] = new RegExp(chunks[3], "i");
        break;
      case "&=":
        exprs$$1[i$$3] = new RegExp("^" + chunks[3] + "$|^" + chunks[3] + "\\s|\\s" + chunks[3] + "\\s|\\s" + chunks[3] + "$", "i");
        break;
      case "!=":
        exprs$$1[i$$3] = chunks[3]
    }
  }
  if(s$$2.indexOf(":") != -1) {
    chunks = s$$2.split(":");
    s$$2 = chunks[0];
    pseudo = chunks[1].match(/([a-z-]+)\(?([a-z0-9+-]*)\)?/i);
    pSelector$$1 = pseudo[1].toLowerCase();
    switch(pOption = pseudo[2].toLowerCase()) {
      case "odd":
        pOption = "2n+1";
        break;
      case "even":
        pOption = "2n"
    }
    chunks = pOption.match(/([0-9+-]*)(n?)([0-9+-]*)/i);
    pA$$1 = parseInt(chunks[2] ? chunks[1] ? chunks[1] == "-" ? -1 : chunks[1] : 1 : 0);
    pB$$1 = parseInt(chunks[3] ? chunks[3] : chunks[1] && !chunks[2] ? chunks[1] : 0)
  }
  if(s$$2.indexOf("#") != -1) {
    this.postProcess(document.getElementById(s$$2.substr(s$$2.indexOf("#") + 1)))
  }else {
    if(s$$2.indexOf(".") != -1) {
      chunks = s$$2.split(".");
      var classMatch = s$$2.substr(chunks[0].length + 1).replace(".", " ");
      var className = new RegExp("^" + classMatch + "$|^" + classMatch + "\\s|\\s" + classMatch + "\\s|\\s" + classMatch + "$", "i");
      objs = target$$37.getElementsByTagName(chunks[0] ? chunks[0] : "*");
      i$$3 = 0, numObjs = objs.length;
      for(;i$$3 < numObjs;i$$3++) {
        if(!oneLevelOnly && className.test(objs[i$$3].className) || oneLevelOnly && className.test(objs[i$$3].className) && objs[i$$3].parentNode == target$$37) {
          this.postProcess(objs[i$$3])
        }
      }
    }else {
      if(s$$2 == "*" || /^[A-Za-z0-9]+$/.test(s$$2)) {
        i$$3 = 0, objs = target$$37.getElementsByTagName(s$$2), numObjs = objs.length;
        for(;i$$3 < numObjs;i$$3++) {
          if(!oneLevelOnly || oneLevelOnly && objs[i$$3].parentNode == target$$37) {
            this.postProcess(objs[i$$3])
          }
        }
      }
    }
  }
  return matches
}, get:function(selectorText$$1, startAt) {
  var selectors$$7 = this.parseSelectors(selectorText$$1);
  var numS = selectors$$7["elements"].length;
  if(!startAt) {
    startAt = document
  }
  if(numS == 1) {
    var idMatch = selectors$$7["elements"][0].match(/^[a-z0-9*]*#([^,:]+)$/i);
    if(idMatch && selectors$$7["attrs"][0] == "" && selectors$$7["separators"] == "") {
      return document.getElementById(idMatch[1])
    }
  }
  var objs$$1 = this.getMatches(startAt, selectors$$7["elements"][0], selectors$$7["attrs"][0]);
  var allObjs = [];
  var newObjs;
  var separator;
  var i$$4 = 1;
  for(;i$$4 < numS;i$$4++) {
    newObjs = [];
    separator = this.trim(selectors$$7["separators"][i$$4 - 1]);
    if(separator == ",") {
      allObjs = this.concatUnique(allObjs, objs$$1);
      objs$$1 = this.getMatches(startAt, selectors$$7["elements"][i$$4], selectors$$7["attrs"][i$$4])
    }else {
      var oneLevelOnly$$1 = separator == ">" ? true : false;
      var j = 0;
      var numObjs$$1 = objs$$1.length;
      for(;j < numObjs$$1;j++) {
        if(!this.inArray(objs$$1[j], newObjs)) {
          newObjs = this.concatUnique(newObjs, this.getMatches(objs$$1[j], selectors$$7["elements"][i$$4], selectors$$7["attrs"][i$$4]), oneLevelOnly$$1)
        }
      }
      objs$$1 = newObjs
    }
  }
  allObjs = this.concatUnique(allObjs, objs$$1);
  allObjs.apply = function(p) {
    var i$$5 = 0;
    var numObjs$$2 = this.length;
    for(;i$$5 < numObjs$$2;i$$5++) {
      typeof p == "function" ? p(this[i$$5]) : eval("this[i]." + p)
    }
  };
  return allObjs
}, getCssRule:function(stylesheet, rule$$2, property$$3) {
  var values$$4 = [];
  var rules = document.styleSheets[stylesheet];
  rules = rules.rules ? rules.rules : rules.cssRules;
  rule$$2 = rule$$2.toLowerCase();
  property$$3 = this.browserType == "Safari" ? property$$3.replace(/([A-Z])/, "-$1").toLowerCase() : property$$3.toLowerCase();
  var i$$6 = 0;
  var numRules = rules.length;
  for(;i$$6 < numRules;i$$6++) {
    if(rule$$2 == "*" || rules[i$$6].selectorText.toLowerCase() == rule$$2) {
      var j$$1;
      for(j$$1 in rules[i$$6].style) {
        if(this.browserType == "Safari") {
          if(rules[i$$6].style[j$$1].toLowerCase && rules[i$$6].style[j$$1].toLowerCase() == property$$3) {
            if(rule$$2 == "*") {
              values$$4[rules[i$$6].selectorText] = value
            }else {
              return rules[i$$6].style[rules[i$$6].style[j$$1]]
            }
          }
        }else {
          if(j$$1.toLowerCase() == property$$3) {
            if(rule$$2 == "*") {
              values$$4[rules[i$$6].selectorText] = rules[i$$6].style[j$$1]
            }else {
              return rules[i$$6].style[j$$1]
            }
          }
        }
      }
    }
  }
  return values$$4
}, setStyles:function(obj$$17, styleList) {
  var i$$7;
  for(i$$7 in styleList) {
    i$$7 == "float" ? this.setFloat(obj$$17, styleList[i$$7]) : obj$$17.style[i$$7] = styleList[i$$7]
  }
}, setAttributes:function(obj$$18, attrList) {
  var i$$8;
  for(i$$8 in attrList) {
    i$$8 == "className" ? obj$$18.className = attrList[i$$8] : obj$$18.setAttribute(i$$8, attrList[i$$8])
  }
}, removeNode:function(obj$$19) {
  return obj$$19.parentNode.removeChild(obj$$19)
}, addEventListener:function(target$$38, eventType$$2, listenerFunc) {
  this.safariReady = function() {
    this.readyTimer = setInterval(function() {
      if(/loaded|complete/.test(document.readyState)) {
        midori.runReadyEvents()
      }
    }, 10)
  };
  this.msieReady = function() {
    document.write('<script id="midori_onload" src="javascript: {}" defer="true">\x3c/script>');
    this.get("#midori_onload").onreadystatechange = function() {
      if(this.readyState == "complete") {
        midori.runReadyEvents()
      }
    }
  };
  if(target$$38.addEventListener) {
    if(eventType$$2 == "ready") {
      switch(this.browserType) {
        case "Safari":
          this.domReady.push(listenerFunc);
          if(!this.readyTimer) {
            this.safariReady()
          }
          return;
        case "Opera":
        ;
        case "Gecko":
          eventType$$2 = "DOMContentLoaded";
          break;
        default:
          eventType$$2 = "load"
      }
    }
    target$$38.addEventListener(eventType$$2, listenerFunc, false);
    return
  }
  if(eventType$$2 == "ready") {
    if(!this.domReady.length) {
      this.msieReady()
    }
    this.domReady.push(listenerFunc);
    return
  }
  target$$38.attachEvent("on" + eventType$$2, listenerFunc)
}, runReadyEvents:function() {
  if(this.readyTimer) {
    clearInterval(this.readyTimer)
  }
  var i$$9 = 0;
  var numE = this.domReady.length;
  for(;i$$9 < numE;i$$9++) {
    this.domReady[i$$9]()
  }
}, getEventTarget:function(event$$1) {
  var target$$39 = event$$1.target ? event$$1.target : event$$1.srcElement;
  if(target$$39.nodeType == 3) {
    target$$39 = target$$39.parentNode
  }
  return target$$39
}, getMousePos:function(event$$2) {
  if(event$$2.targetTouches && event$$2.targetTouches.length) {
    return{x:event$$2.targetTouches[0].pageX, y:event$$2.targetTouches[0].pageY}
  }else {
    if(event$$2.pageX || event$$2.pageY) {
      return{x:event$$2.pageX, y:event$$2.pageY}
    }else {
      return{x:event$$2.clientX + document.documentElement.scrollLeft - document.body.clientLeft, y:event$$2.clientY + document.documentElement.scrollTop - document.body.clientTop}
    }
  }
}, preventBubble:function(event$$3) {
  event$$3.stopPropagation ? event$$3.stopPropagation() : window.event.cancelBubble = true
}, preventDefault:function(event$$4) {
  event$$4.preventDefault ? event$$4.preventDefault() : window.event.returnValue = false
}, getFloat:function(o) {
  return this.browserType == "MSIE" ? o.style.styleFloat : o.style.cssFloat
}, setFloat:function(o$$1, v$$1) {
  this.browserType == "MSIE" ? o$$1.style.styleFloat = v$$1 : o$$1.style.cssFloat = v$$1
}, getSelection:function(target$$40) {
  if(this.browserType != "MSIE") {
    return target$$40.getSelection()
  }
  if(target$$40 == window) {
    target$$40 = document
  }
  var cursorPos = target$$40.selection.createRange();
  if(target$$40.selection.type != "Control") {
    return cursorPos
  }
}, getSelectionText:function(cursorPos$$1) {
  return this.browserType == "MSIE" ? cursorPos$$1.htmlText : cursorPos$$1.toString()
}, getCookie:function(cookieName) {
  var cookies = document.cookie.split("; ");
  var i$$10 = 0;
  var numCookies = cookies.length;
  for(;i$$10 < numCookies;i$$10++) {
    var parts = cookies[i$$10].split("=");
    if(parts[0] == cookieName) {
      return unescape(parts[1].replace(/\+/g, " "))
    }
  }
}, setCookie:function(name$$31, value$$30, expires, path, domain) {
  setCookieSentinel = true;
  var today = new Date;
  document.cookie = name$$31 + "=" + escape(value$$30) + "; expires=" + today.toUTCString(today.setSeconds(expires)) + (path ? "; path=" + path : "") + (domain ? "; domain=" + domain : "")
}, convertToFields:function(parentNode$$1, prefix$$2, a$$2) {
  var k;
  for(k in a$$2) {
    if(typeof a$$2[k] == "object") {
      this.convertToFields(parentNode$$1, prefix$$2 + "[" + k + "]", a$$2[k])
    }else {
      var el = document.createElement("input");
      this.setAttributes(el, {type:"hidden", name:prefix$$2 + "[" + k + "]", value:a$$2[k]});
      parentNode$$1.appendChild(el)
    }
  }
}, replace:function(st, params) {
  if(!params) {
    return st
  }
  var matches$$1 = st.match(/:[A-Za-z0-9_]+/g).sort().reverse();
  var i$$11 = 0;
  var numMatches = matches$$1.length;
  for(;i$$11 < numMatches;i$$11++) {
    st = st.replace(matches$$1[i$$11], params[matches$$1[i$$11].substr(1)])
  }
  return st
}, trim:function(st$$1) {
  return st$$1.replace(/^\s+|\s+$/g, "")
}, uniqid:function(range$$5) {
  return Math.floor(Math.random() * (range$$5 ? range$$5 : 1E5))
}, concatUnique:function(a1, a2) {
  var uniqA2 = [];
  var i$$12 = 0;
  var numA2 = a2.length;
  for(;i$$12 < numA2;i$$12++) {
    if(!this.inArray(a2[i$$12], a1)) {
      uniqA2.push(a2[i$$12])
    }
  }
  return a1.concat(uniqA2)
}, implode:function(glue, a$$3) {
  if(typeof a$$3 != "object") {
    return a$$3
  }
  var o$$2 = "";
  if(a$$3.length && !a$$3.propertyIsEnumerable("length")) {
    var i$$13 = 0;
    var numA$$2 = a$$3.length;
    for(;i$$13 < numA$$2;i$$13++) {
      o$$2 += glue + a$$3[i$$13]
    }
  }else {
    var k$$1;
    for(k$$1 in a$$3) {
      o$$2 += glue + a$$3[k$$1]
    }
  }
  return o$$2.substr(glue.length)
}, inArray:function(v$$2, a$$4) {
  var i$$14 = 0;
  var numA$$3 = a$$4.length;
  for(;i$$14 < numA$$3;i$$14++) {
    if(v$$2 != null && a$$4[i$$14].constructor == Array && v$$2.constructor == Array && a$$4[i$$14].toString() == v$$2.toString() || a$$4[i$$14] == v$$2) {
      return true
    }
  }
}, shortenWords:function(obj$$20, maxLen) {
  maxLen = maxLen ? maxLen - 3 : 45;
  this.each(obj$$20, function(o$$3) {
    if(o$$3.nodeType != 3) {
      return
    }
    var chunks$$1 = o$$3.data.split(" ");
    var shortened = false;
    var stlen;
    var i$$15 = 0;
    var numChunks = chunks$$1.length;
    for(;i$$15 < numChunks;i$$15++) {
      if((stLen = chunks$$1[i$$15].length) > maxLen) {
        var diffLen = Math.floor(stLen - maxLen);
        var startPos = Math.floor(stLen / 2 - diffLen / 2);
        chunks$$1[i$$15] = chunks$$1[i$$15].substr(0, startPos) + "..." + chunks$$1[i$$15].substr(startPos + diffLen);
        shortened = true
      }
    }
    if(shortened) {
      o$$3.data = midori.implode(" ", chunks$$1)
    }
  })
}, resizeImg:function(obj$$21, maxWidth) {
  maxWidth = maxWidth ? maxWidth : 400;
  this.get("img", obj$$21).apply(function(o$$4) {
    if(o$$4.width > maxWidth) {
      if(o$$4.style.msInterpolationMode) {
        o$$4.style.msInterpolationMode = "bicubic"
      }
      o$$4.width = maxWidth
    }
  })
}, saveCheckboxState:function(element$$3, cb, callback$$25) {
  cb.checked ? element$$3.innerHTML++ : --element$$3.innerHTML == 0 ? element$$3.innerHTML = "" : {};
  if(callback$$25) {
    callback$$25(element$$3.innerHTML)
  }
}, checkRequiredFields:function(vars) {
  vars.required = vars.required.split(",");
  var form = this.get("#" + vars.formId);
  var stopSubmit = false;
  var fieldName;
  var field;
  var fieldType;
  var fieldStyle;
  var i$$16 = 0;
  var numFields = vars.required.length;
  for(;i$$16 < numFields;i$$16++) {
    if(fieldName = this.trim(vars.required[i$$16])) {
      field = this.get("#" + fieldName);
      fieldType = field.type.toLowerCase() == "checkbox" ? "c" : "t";
      fieldStyle = fieldType == "c" ? field.parentNode.style : field.style;
      fieldStyle.backgroundColor = "";
      if(fieldType == "c" && !field.checked || this.trim(field.value) == "") {
        fieldStyle.backgroundColor = "#FAA";
        stopSubmit = true
      }
    }
  }
  this.get("#" + vars.formId + "-status").innerHTML = stopSubmit ? vars.message : "";
  var callbackResult = vars.callback ? vars.callback() : "";
  if(callbackResult === false || stopSubmit) {
    if(vars.event) {
      this.preventDefault(vars.event)
    }
    return false
  }else {
    if(!vars.event) {
      form.submit()
    }
  }
}, getWindowDims:function() {
  if(this.browserType == "MSIE") {
    return{windowWidth:document.documentElement.clientWidth, windowHeight:document.documentElement.clientHeight, scrollTop:document.documentElement.scrollTop}
  }else {
    return{windowWidth:window.innerWidth, windowHeight:window.innerHeight, scrollTop:window.scrollY}
  }
}, getPos:function(obj$$22, stopAt) {
  var xPos = 0;
  var yPos = 0;
  stopAt = stopAt ? stopAt.offsetParent : null;
  for(;obj$$22.offsetParent != stopAt;) {
    xPos += obj$$22.offsetLeft, yPos += obj$$22.offsetTop - obj$$22.scrollTop, obj$$22 = obj$$22.offsetParent
  }
  return{x:xPos, y:yPos}
}, highlightRow:function(obj$$23, highlightClass, removeAll) {
  this.get("td", obj$$23).apply(function(o$$5) {
    var className$$1 = o$$5.className.split(" ");
    o$$5.className = className$$1[className$$1.length - 1] == highlightClass ? o$$5.className.substr(0, o$$5.className.length - highlightClass.length - 1) : removeAll ? o$$5.className : o$$5.className + " " + highlightClass
  })
}};
var midoriFX = {intervals:{}, lastIntervalId:0, getOutsideSize:function(element$$4, what) {
  var offsetSize = what == "width" ? element$$4.offsetWidth : element$$4.offsetHeight;
  element$$4.style[what] = offsetSize.toString() + "px";
  var outsideSize = (what == "width" ? element$$4.offsetWidth : element$$4.offsetHeight) - offsetSize;
  element$$4.style[what] = (offsetSize - outsideSize).toString() + "px";
  return outsideSize
}, showWithAnim:function(vars$$1) {
  var firstRun = this.intervals[vars$$1.intervalKey].newSize ? false : true;
  this.intervals[vars$$1.intervalKey].newSize += Math.round((vars$$1.elementSize - this.intervals[vars$$1.intervalKey].newSize) / 2);
  if(this.intervals[vars$$1.intervalKey].newSize < vars$$1.elementSize) {
    vars$$1.element.style[vars$$1.what] = this.intervals[vars$$1.intervalKey].newSize.toString() + "px"
  }else {
    clearInterval(this.intervals[vars$$1.intervalKey].intervalId);
    vars$$1.element.style[vars$$1.what] = vars$$1.elementSize.toString() + "px";
    vars$$1.element.style.overflow = "visible";
    if(vars$$1.callback) {
      vars$$1.callback(vars$$1.element)
    }
  }
  if(firstRun) {
    vars$$1.element.style.display = "block"
  }
}, show:function(id, callback$$26, horiz) {
  var what$$1 = horiz ? "width" : "height";
  var element$$5 = midori.get("#" + id);
  var vars$$2 = {intervalKey:Math.random(), element:element$$5, callback:callback$$26, what:what$$1};
  midori.setStyles(element$$5, {overflow:"hidden", visibility:"hidden", display:"block"});
  vars$$2.elementSize = (horiz ? element$$5.offsetWidth : element$$5.offsetHeight) - this.getOutsideSize(element$$5, what$$1), midori.setStyles(element$$5, {display:"none", visibility:"visible"});
  this.intervals[vars$$2.intervalKey] = {newSize:0, intervalId:setInterval(function() {
    midoriFX.showWithAnim(vars$$2)
  }, 40)}
}, hideWithAnim:function(vars$$3) {
  var oldSize = (vars$$3.what == "width" ? vars$$3.element.offsetWidth : vars$$3.element.offsetHeight) - vars$$3.outsideSize;
  var newSize = vars$$3.constantSpeed ? vars$$3.oldSize - 4 : Math.round(oldSize / 1.5);
  if(newSize > 2) {
    vars$$3.element.style[vars$$3.what] = newSize.toString() + "px";
    vars$$3.element.style.opacity = newSize / 50
  }else {
    clearInterval(this.intervals[vars$$3.intervalKey].intervalId);
    vars$$3.element.style.display = "none";
    vars$$3.element.style[vars$$3.what] = vars$$3.elementSize.toString() + "px";
    vars$$3.element.style.opacity = 1;
    if(vars$$3.callback) {
      vars$$3.callback(vars$$3.element)
    }
  }
}, hide:function(id$$1, callback$$27, constantSpeed, horiz$$1) {
  var what$$2 = horiz$$1 ? "width" : "height";
  var element$$6 = midori.get("#" + id$$1);
  var outsideSize$$1 = this.getOutsideSize(element$$6, what$$2);
  var vars$$4 = {intervalKey:Math.random(), element:element$$6, outsideSize:outsideSize$$1, elementSize:(horiz$$1 ? element$$6.offsetWidth : element$$6.offsetHeight) - outsideSize$$1, callback:callback$$27, constantSpeed:constantSpeed, what:what$$2};
  element$$6.style.overflow = "hidden";
  this.intervals[vars$$4.intervalKey] = {intervalId:setInterval(function() {
    midoriFX.hideWithAnim(vars$$4)
  }, 40)}
}, scrollToWithAnim:function(intervalKey, targetPos) {
  if(Math.abs(targetPos - this.intervals[intervalKey].scrollPos) > 10) {
    this.intervals[intervalKey].scrollPos += Math.round((targetPos - this.intervals[intervalKey].scrollPos) / 8);
    scrollTo(0, this.intervals[intervalKey].scrollPos)
  }else {
    clearInterval(this.intervals[intervalKey].intervalId)
  }
}, scrollTo:function(id$$2, correction) {
  var targetPos$$1 = midori.getPos(midori.get("#" + id$$2)).y + (correction ? correction : 0);
  var intervalKey$$1 = Math.random();
  var dims = midori.getWindowDims();
  this.intervals[intervalKey$$1] = {scrollPos:dims.scrollTop, intervalId:setInterval(function() {
    midoriFX.scrollToWithAnim(intervalKey$$1, targetPos$$1)
  }, 15)}
}, sliderToWithAnim:function(intervalKey$$2, container, targetPos$$2) {
  var data$$18 = this.intervals[intervalKey$$2];
  var diff = Math.abs(targetPos$$2 - data$$18.targetPos);
  data$$18.targetPos += Math.round(diff / 8) * data$$18.direction;
  container.style.marginLeft = -data$$18.targetPos + "px";
  if(diff < 4) {
    clearInterval(data$$18.intervalId)
  }
}, slider:function(containerId, targetId, correction$$1) {
  var container$$1 = midori.get("#" + containerId);
  var targetPos$$3 = midori.getPos(midori.get("#" + targetId), container$$1).x;
  var currentPos = container$$1.style.marginLeft ? Math.abs(parseInt(container$$1.style.marginLeft, 10)) : 0;
  var intervalKey$$3 = Math.random();
  if(this.lastIntervalId) {
    clearInterval(this.lastIntervalId)
  }
  this.intervals[intervalKey$$3] = {targetPos:currentPos, direction:currentPos > targetPos$$3 ? -1 : 1, intervalId:setInterval(function() {
    midoriFX.sliderToWithAnim(intervalKey$$3, container$$1, targetPos$$3)
  }, 15)};
  this.lastIntervalId = this.intervals[intervalKey$$3].intervalId
}};
var midoriPopup = {show:function(vars$$5) {
  if(typeof vars$$5.x == "undefined") {
    vars$$5.x = 5
  }
  if(typeof vars$$5.y == "undefined") {
    vars$$5.y = -5
  }
  this.popupId = vars$$5.popupId;
  var popup = midori.get("#" + vars$$5.popupId);
  var dims$$1 = midori.getWindowDims();
  var popupPos = vars$$5.showAtMousePos ? midori.getMousePos(vars$$5.event) : midori.getPos(vars$$5.obj);
  popup.style.display = "block";
  if(this.activePopup) {
    this.activePopup.style.display = "none"
  }
  vars$$5.obj.blur();
  if(dims$$1.windowWidth < popupPos.x + popup.offsetWidth + vars$$5.x) {
    popupPos.x -= popup.offsetWidth
  }
  for(;popupPos.y + popup.offsetHeight + vars$$5.y - dims$$1.scrollTop > dims$$1.windowHeight;) {
    popupPos.y -= popup.offsetHeight + 20
  }
  midori.setStyles(popup, {left:popupPos.x + vars$$5.x + "px", top:popupPos.y + vars$$5.y + vars$$5.obj.offsetHeight + "px"});
  this.activePopup = popup;
  vars$$5.noAnim ? popup.style.display = "block" : midoriFX.show(this.popupId);
  if(vars$$5.event) {
    midori.preventDefault(vars$$5.event)
  }
  if(vars$$5.showCallback) {
    vars$$5.showCallback(this)
  }
  this.hideCallback = vars$$5.hideCallback ? vars$$5.hideCallback : false
}, hide:function() {
  if(this.activePopup == null) {
    return
  }
  if(this.hideCallback) {
    this.hideCallback(this)
  }
  midoriFX.hide(this.popupId);
  this.activePopup = null
}};
midori.addEventListener(document, "mouseup", function(e$$4) {
  midoriPopup.hide()
});
midori.addEventListener(document, "touchend", function(e$$5) {
  midoriPopup.hide()
});
var midoriTab = {selectedTabs:{}, select:function(obj$$24, noAnim) {
  var tabSet = obj$$24.getAttribute("tabset");
  if(this.selectedTabs[tabSet]) {
    this.selectedTabs[tabSet].parentNode.className = "";
    midori.get("#" + this.selectedTabs[tabSet].hash.substr(1)).style.display = "none"
  }
  this.selectedTabs[tabSet] = obj$$24;
  obj$$24.parentNode.className = "tab-selected";
  noAnim ? midori.get("#" + obj$$24.hash.substr(1)).style.display = "block" : midoriFX.show(obj$$24.hash.substr(1))
}, init:function() {
  midori.get(".tab-set").apply(function(obj$$25) {
    midori.get("#" + obj$$25.id + " a").apply(function(o$$6) {
      o$$6.setAttribute("tabset", obj$$25.id);
      if(o$$6.parentNode.className == "tab-selected") {
        midoriTab.selectedTabs[obj$$25.id] = o$$6;
        midoriTab.select(o$$6, true)
      }
      midori.addEventListener(o$$6, "click", function(e$$6) {
        var me$$1 = midori.getEventTarget(e$$6);
        me$$1.blur();
        midoriTab.select(me$$1);
        midori.preventDefault(e$$6)
      })
    })
  })
}};
var midoriHistory = {history:[], modifyLocation:function(item) {
  var loc = window.location.toString();
  window.location = loc.indexOf("#") == -1 ? loc + "#" + item : loc.replace(/#.+/, "#" + item)
}, add:function(item$$1) {
  if(item$$1 == this.last) {
    return
  }
  this.history.push(item$$1);
  this.modifyLocation(item$$1);
  this.last = item$$1;
  if(midori.browserType == "MSIE") {
    var iframe = midori.get("#midori_history").contentWindow.document;
    iframe.open('javascript: "<html></html>"');
    iframe.write('<html><body><div id="me">' + item$$1 + "</div></body></html>");
    iframe.close()
  }
}, remove:function(item$$2) {
  var history = this.history;
  var i$$17 = 0;
  var len$$1 = history.length;
  for(;i$$17 < len$$1;i$$17++) {
    if(history[i$$17] == item$$2) {
      history.splice(i$$17, 1);
      if(i$$17 == len$$1) {
        this.last = history[history.length - 1]
      }
    }
  }
  this.history = history
}, onChange:function() {
  var newLoc = window.location.toString();
  var item$$3 = midori.browserType == "MSIE" ? midori.get("#midori_history").contentWindow.document.getElementById("me").innerText : newLoc.indexOf("#") != -1 ? newLoc.match(/#(.+)$/)[1] : "";
  if(midori.browserType == "MSIE") {
    if(midoriHistory.oldItem != item$$3 && midori.inArray(item$$3, midoriHistory.history)) {
      midoriHistory.oldItem = item$$3;
      midoriHistory.modifyLocation(item$$3);
      midoriHistory.callback(item$$3)
    }
  }else {
    if(midoriHistory.oldLoc != newLoc && midori.inArray(item$$3, midoriHistory.history)) {
      midoriHistory.oldLoc = newLoc;
      midoriHistory.callback(item$$3)
    }
  }
}, init:function(callback$$28) {
  this.callback = callback$$28;
  if(midori.browserType == "MSIE") {
    document.body.appendChild(document.createElement("div")).innerHTML = '<iframe id="midori_history" style="position: absolute; width: 1px; height: 1px"></iframe>'
  }
  setInterval(this.onChange, 250)
}};
midori.setCookie(1, 2, 3, 4, 5);
