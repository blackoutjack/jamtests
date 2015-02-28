function getNSLayer(inNode, inName) {
  var node$$2;
  var i$$1;
  node$$2 = inNode[inName];
  i$$1 = 0;
  for (;!node$$2 && inNode.layers && i$$1 < inNode.layers.length;i$$1++) {
    node$$2 = getNSLayer(inNode.layers[i$$1].document, inName);
  }
  return node$$2;
}
function getLayer(inNode$$1, inName$$1) {
  var node$$3;
  if (inNode$$1.getElementById) {
    node$$3 = inNode$$1.getElementById(inName$$1);
  } else {
    if (inNode$$1.all) {
      node$$3 = inNode$$1.all[inName$$1];
    } else {
      if (inNode$$1.layers) {
        node$$3 = getNSLayer(inNode$$1, inName$$1);
      }
    }
  }
  if (!node$$3) {
    alert("Could not find layer " + inName$$1 + ".");
  }
  return node$$3;
}
function getStyle(inNode$$2) {
  var style;
  if (is.w3c || is.ie4) {
    style = inNode$$2.style;
  } else {
    if (is.ns4) {
      style = inNode$$2;
    } else {
      style = 0;
    }
  }
  return style;
}
function setLayerPos(inNode$$3, left$$1, top$$1) {
  if (is.ie4 || is.w3c) {
    inNode$$3.style.left = left$$1 + "px";
    inNode$$3.style.top = top$$1 + "px";
  } else {
    if (is.ns4) {
      inNode$$3.left = left$$1;
      inNode$$3.top = top$$1;
    }
  }
}
function showLayer(mNode) {
  var style$$1;
  style$$1 = getStyle(mNode);
  if (style$$1) {
    style$$1.visibility = "visible";
  }
}
function hideLayer() {
  var mNode$$1 = nodeStack[stackDepth];
  var style$$2;
  style$$2 = getStyle(mNode$$1);
  if (style$$2) {
    style$$2.visibility = "hidden";
  }
}
function isPositioned(mNode$$2) {
  return mNode$$2.left || mNode$$2.style.left;
}
function layerWidth(mNode$$3) {
  var nWidth;
  if (is.ie4 || is.w3c) {
    nWidth = parseInt(mNode$$3.style.width);
  } else {
    if (is.ns4) {
      nWidth = parseInt(mNode$$3.width);
    }
  }
  return nWidth;
}
function expandLayer(mNode$$4) {
  var style$$3;
  style$$3 = getStyle(mNode$$4);
  if (style$$3) {
    style$$3.display = "block";
  }
}
function contractLayer(mNode$$5) {
  var style$$4;
  style$$4 = getStyle(mNode$$5);
  if (style$$4) {
    style$$4.display = "none";
  }
}
function insertLayer(mNode$$6) {
  var style$$5;
  style$$5 = getStyle(mNode$$6);
  if (style$$5) {
    style$$5.display = "inline";
  }
}
function setLayerColor(tag, bgColor, tColor) {
  var elLayer;
  elLayer = getLayer(document, tag);
  elStyle = getStyle(elLayer);
  if (elStyle) {
    if (is.ns4) {
      elStyle.bgColor = bgColor;
    } else {
      elStyle.backgroundColor = bgColor;
      elStyle.color = tColor;
    }
  }
}
function setStyle(left$$2, top$$2, width$$9, height$$8, zIndex, bgColor$$1, visibility) {
  var divType = blInfo.divType;
  var fontSize = blInfo.fontSize;
  var dStyle;
  if (divType == "layer") {
    dStyle = 'left="' + left$$2;
    dStyle += '" top="' + top$$2;
    dStyle += '" width="' + width$$9;
    dStyle += '" height="' + height$$8;
    if (zIndex) {
      dStyle += '" z-index="' + zIndex;
    }
    if (bgColor$$1) {
      dStyle += '" bgColor="' + bgColor$$1;
    } else {
      dStyle += '" bgColor="#000000';
    }
    if (visibility) {
      dStyle += '" visibility="' + NSVisType[visibility];
    }
    dStyle += '" ';
  } else {
    dStyle = 'style="font-size : ' + fontSize + "pt; ";
    dStyle += "left : " + left$$2 + "px; ";
    dStyle += "top : " + top$$2 + "px; ";
    dStyle += "width : " + width$$9 + "px; ";
    dStyle += "height : " + height$$8 + "px; ";
    if (zIndex) {
      dStyle += "z-index : " + zIndex + "; ";
    }
    if (bgColor$$1) {
      dStyle += "background-color : " + bgColor$$1 + "; ";
    }
    if (visibility) {
      dStyle += "visibility : " + visibility + "; ";
    }
    dStyle += '" ';
  }
  return dStyle;
}
function Is() {
  var appName = navigator.appName.toLowerCase();
  var version$$5 = navigator.appVersion.toLowerCase();
  var agent = navigator.userAgent.toLowerCase();
  var platform = navigator.platform.toLowerCase();
  this.major = parseInt(version$$5);
  this.minor = parseFloat(version$$5);
  this.nsa = agent.indexOf("netscape") != -1;
  this.mza = agent.indexOf("mozilla") != -1;
  this.gla = agent.indexOf("galeon") != -1;
  this.mza = this.mza && !this.nsa;
  if (this.mza) {
    version$$5 = agent.substring(agent.indexOf("rv:") + 3, agent.indexOf(")"));
    this.nsa = false;
    if (agent.indexOf("rv:") != -1) {
      this.major = parseInt(version$$5);
      this.minor = parseFloat(version$$5);
      this.mz1 = this.mza && this.major == 1;
    } else {
      this.mza = false;
      version$$5 = this.minor;
    }
  }
  if (this.gla) {
    version$$5 = agent.substring(agent.indexOf("galeon/") + 7, agent.indexOf("(") - 1);
    this.nsa = false;
    if (agent.indexOf("galeon/") != -1) {
      this.major = parseInt(version$$5);
      this.minor = parseFloat(version$$5);
      this.gl1 = this.gla && this.major == 1;
    } else {
      this.gla = false;
      version$$5 = this.version;
    }
  }
  this.version = version$$5;
  this.nsn = appName.indexOf("netscape") != -1;
  this.ns2 = this.nsn && this.major == 2;
  this.ns3 = this.nsn && this.major == 3;
  this.ns4 = this.nsn && this.major == 4;
  this.ns6 = this.nsa && this.major >= 5;
  if (this.ns6) {
    this.version = agent.slice(agent.indexOf("netscape6/") + 10, agent.length);
  }
  this.ie = appName.indexOf("internet explorer") != -1 && agent.indexOf("opera") == -1;
  this.ie3 = this.ie && this.major == 3;
  this.ie4 = this.ie && this.major == 4 && agent.indexOf("msie 4.") != -1;
  this.ie5 = this.ie && this.major == 4 && agent.indexOf("msie 5.") != -1;
  this.ie6 = this.ie && this.major == 4 && agent.indexOf("msie 6.") != -1;
  if (this.ie4 || this.ie5 || this.ie6) {
    this.version = agent.slice(agent.indexOf("msie ") + 5, agent.length);
    this.version = this.version.slice(0, this.version.indexOf(";"));
  }
  this.ieX = this.ie && !this.ie3 && !this.ie4;
  this.op = agent.indexOf("opera") != -1;
  this.op4 = this.op && this.major == 4 && agent.indexOf("opera 4.") != -1;
  this.op5 = this.op && this.major == 4 && agent.indexOf("opera 5.") != -1;
  this.op6 = this.op && this.major == 4 && agent.indexOf("opera 6.") != -1;
  if (this.op) {
    this.ie = false;
    this.ie4 = false;
    this.ie5 = false;
    this.ie6 = false;
    this.version = agent.slice(agent.indexOf("opera") + 6, agent.length);
    this.version = parseFloat(this.version);
  }
  this.kq = agent.indexOf("konqueror") != -1;
  if (this.kq) {
    this.version = agent.substring(agent.indexOf("konqueror/") + 10, agent.length);
    this.version = this.version.substring(0, this.version.indexOf(";"));
    this.major = parseInt(this.version);
    this.minor = parseFloat(this.version);
    this.mza = false;
  }
  this.kq2 = this.kq && this.major == 2;
  this.kq3 = this.kq && this.major == 3;
  this.w3c = !!document.getElementById;
  this.win32 = platform.indexOf("win32") != -1;
  this.linux = platform.indexOf("linux") != -1;
  this.bsd = platform.indexOf("bsd") != -1;
}
function setTagFontColor(tag$$1, color$$2) {
  if (is.ie4 || is.w3c) {
    tag$$1.style.color = color$$2;
  } else {
    if (is.ns4) {
      tag$$1.color = color$$2;
    } else {
    }
  }
}
function setTagFontStyle(tag$$2, style$$6) {
  if (is.ie4 || is.w3c) {
    tag$$2.style.fontStyle = style$$6;
  } else {
    if (is.ns4) {
      tag$$2.fontStyle = style$$6;
    } else {
    }
  }
}
function mousePosLeft(event$$1) {
  var leftPos;
  if (is.ie4 || is.w3c && !(is.ns6 || is.mza)) {
    leftPos = event$$1.clientX;
  } else {
    if (is.ns4 || is.ns6 || is.mza) {
      leftPos = event$$1.pageX;
    }
  }
  return leftPos;
}
function mousePosTop(event$$2) {
  var topPos;
  if (is.ie4 || is.w3c && !(is.ns6 || is.mza)) {
    topPos = event$$2.clientY;
  } else {
    if (is.ns4 || is.ns6 || is.mza) {
      topPos = event$$2.pageY;
    }
  }
  return topPos;
}
function BrowserMenuInfo() {
  if (is.ns4) {
    if (is.win32) {
      this.itemHeight = 16;
    } else {
      if (is.linux) {
        this.itemHeight = 15;
      } else {
        this.itemHeight = 15;
      }
    }
    this.cellOffset = 2;
    this.leftOffset = 2;
    this.mTopOffset = 2;
    this.wBarPadding = 4;
    this.hBarPadding = 6;
    this.itemPadding = 10;
    this.itemSpacing = 2;
    this.menuPadding = -2;
    this.mBarOffset = 4;
    this.bBarOffset = -2;
    this.dividerHeight = 2;
    this.bwPadding = 4;
    this.bhPadding = 4;
    this.fontSize = 12;
    if (is.win32) {
      this.charWidth = 7;
    } else {
      if (is.linux) {
        this.charWidth = 6;
      } else {
        this.charWidth = 6;
      }
    }
    this.divType = "layer";
    window.mtActive = "#FFFF00";
    window.mtPassive = "#FFFFFF";
    window.mbActive = "#FF0000";
    window.mbPassive = "#081C92";
  } else {
    if (is.kq) {
      this.itemHeight = 18;
      this.cellOffset = 4;
      this.leftOffset = 0;
      this.mTopOffset = 0;
      this.wBarPadding = 2;
      this.hBarPadding = 6;
      this.itemSpacing = 0;
      this.itemPadding = 2;
      this.menuPadding = 0;
      this.mBarOffset = 4;
      this.bBarOffset = 4;
      this.dividerHeight = 1;
      this.bwPadding = 2;
      this.bhPadding = 4;
      this.fontSize = 10;
      this.charWidth = 7;
      this.divType = "div";
    } else {
      if (is.op5 || is.op6) {
        this.itemHeight = 17;
        this.cellOffset = 4;
        this.leftOffset = 2;
        this.mTopOffset = 0;
        this.wBarPadding = 2;
        this.hBarPadding = 6;
        this.itemPadding = 10;
        this.itemSpacing = 2;
        this.menuPadding = 2;
        this.mBarOffset = 6;
        this.bBarOffset = 4;
        this.dividerHeight = 1;
        this.bwPadding = 2;
        this.bhPadding = 4;
        this.fontSize = 10;
        this.charWidth = 6;
        this.divType = "div";
      } else {
        if (is.ie4) {
          this.itemHeight = 18;
          this.cellOffset = 0;
          this.leftOffset = 0;
          this.mTopOffset = 0;
          this.wBarPadding = 4;
          this.hBarPadding = 5;
          this.itemPadding = 10;
          this.itemSpacing = 2;
          this.menuPadding = -2;
          this.mBarOffset = 3;
          this.bBarOffset = -3;
          this.dividerHeight = 1;
          this.bwPadding = 4;
          this.bhPadding = 2;
          this.fontSize = 10;
          this.charWidth = 6;
          this.divType = "div";
        } else {
          if (is.ie5) {
            this.itemHeight = 20;
            this.cellOffset = 0;
            this.leftOffset = 0;
            this.mTopOffset = 0;
            this.wBarPadding = 4;
            this.hBarPadding = 8;
            this.itemPadding = 11;
            this.itemSpacing = 0;
            this.menuPadding = 2;
            this.mBarOffset = 4;
            this.bBarOffset = -2;
            this.dividerHeight = 1;
            this.bwPadding = 4;
            this.bhPadding = 2;
            this.fontSize = 10;
            this.charWidth = 6;
            this.divType = "div";
          } else {
            if (is.ie6) {
              this.itemHeight = 18;
              this.cellOffset = 4;
              this.leftOffset = 0;
              this.mTopOffset = 0;
              this.wBarPadding = 0;
              this.hBarPadding = 6;
              this.itemPadding = 11;
              this.itemSpacing = 2;
              this.menuPadding = 2;
              this.mBarOffset = 4;
              this.bBarOffset = 4;
              this.dividerHeight = 1;
              this.bwPadding = 2;
              this.bhPadding = 4;
              this.fontSize = 10;
              this.charWidth = 6;
              this.divType = "div";
            } else {
              if (is.mza || is.gla || is.ns6) {
                this.itemHeight = 18;
                this.cellOffset = 4;
                this.leftOffset = 0;
                this.mTopOffset = 0;
                this.wBarPadding = 2;
                this.hBarPadding = 6;
                this.itemSpacing = 0;
                this.itemPadding = 2;
                this.menuPadding = 0;
                this.mBarOffset = 4;
                this.bBarOffset = 4;
                this.dividerHeight = 1;
                this.bwPadding = 2;
                this.bhPadding = 4;
                this.fontSize = 10;
                this.charWidth = 7;
                this.divType = "div";
              } else {
                if (is.w3c) {
                  this.itemHeight = 19;
                  this.cellOffset = 0;
                  this.leftOffset = 0;
                  this.mTopOffset = 0;
                  this.wBarPadding = 0;
                  this.hBarPadding = 0;
                  this.itemSpacing = 6;
                  this.itemPadding = 2;
                  this.menuPadding = 0;
                  this.mBarOffset = 3;
                  this.bBarOffset = 5;
                  this.dividerHeight = 1;
                  this.bwPadding = 0;
                  this.bhPadding = 0;
                  this.fontSize = 10;
                  this.charWidth = 7;
                  this.divType = "div";
                } else {
                  alert("This should never happen.");
                  return 0;
                }
              }
            }
          }
        }
      }
    }
  }
}
function startSiteMap() {
  var mName = "Menu";
  var mTarget = "_top";
  window.menuName = mName;
  window.menuTarget = mTarget;
  window.menuPntr = "images/tri.gif";
  window.menuCells = new Array;
  window.menuPopups = 0;
  window.menuHeads = 0;
  window.menuLevel = 0;
  window.menuMain = 0;
  window.menuLayers = new Object;
  window.menuStack = new Array;
  window.menuBody = new Array;
  window.bodyCells = new Array;
  window.mbActive = "#FF0000";
  window.mtActive = "#FFFF00";
}
function menuItem(label, action, width$$10, level$$7, popup) {
  if (label == 0) {
    this.label = label;
  } else {
    this.label = "&nbsp;" + label;
  }
  this.action = action;
  this.width = width$$10;
  this.level = level$$7;
  this.popup = popup;
}
function bodyItem(popup$$1, level$$8, left$$3, top$$3, width$$11, height$$9) {
  var cells = window.bodyCells.length;
  this.cells = cells;
  this.popup = popup$$1;
  this.level = level$$8;
  this.left = left$$3;
  this.top = top$$3;
  this.width = width$$11;
  this.height = height$$9;
}
function stackMenuBody(queue, bPopup, bLevel, bLeft, bTop, bWidth, bHeight) {
  var mBody;
  var i$$2;
  mBody = new bodyItem(bPopup, bLevel, bLeft, bTop, bWidth, bHeight);
  window.menuBody[window.menuBody.length] = mBody;
  i$$2 = 0;
  for (;i$$2 < queue.length;i$$2++) {
    window.bodyCells[window.bodyCells.length] = queue[i$$2];
  }
  window.bodyCells[window.bodyCells.length] = 0;
}
function addMenuDivider() {
  var mItem;
  var mLevel;
  mLevel = window.menuLevel;
  mItem = new menuItem(0, 0, 0, mLevel, 0);
  window.menuCells[window.menuCells.length] = mItem;
}
function estLabelWidth(label$$1) {
  var lWidth = 0;
  var i$$3;
  i$$3 = 0;
  for (;i$$3 < label$$1.length;i$$3++) {
    lWidth += alphaWidth[label$$1.charAt(i$$3)];
  }
  return lWidth;
}
function addMenuItem(label$$2, action$$1, popup$$2) {
  var mLabel$$1;
  var mAction;
  var mPopup$$1;
  var mItem$$1;
  var mWidth;
  var mLevel$$1;
  mLevel$$1 = window.menuLevel;
  mWidth = estLabelWidth(label$$2) + 4;
  if (label$$2) {
    mLabel$$1 = label$$2;
  } else {
    alert("No label given for action " + action$$1 + ".");
    mLabel$$1 = "no label";
  }
  if (action$$1) {
    mAction = "location='" + action$$1 + "'";
  } else {
    mAction = "clearMenus(" + mLevel$$1 + ")";
  }
  mPopup$$1 = popup$$2;
  if (mPopup$$1 && mLevel$$1 > 0) {
    mWidth += 15;
  }
  if (mLevel$$1 == 0) {
    window.menuHeads++;
  }
  mItem$$1 = new menuItem(mLabel$$1, mAction, mWidth, mLevel$$1, mPopup$$1);
  window.menuCells[window.menuCells.length] = mItem$$1;
}
function startMenu(label$$3) {
  var action$$2;
  addMenuItem(label$$3, action$$2, "popup" + window.menuPopups++);
  window.menuLevel++;
}
function endMenu() {
  window.menuLevel--;
}
function menuLayer(label$$4, action$$3) {
  this.name = name;
  this.label = label$$4;
  this.action = action$$3;
}
function buildMenuCell(index$$39, left$$4, top$$4, width$$12) {
  var height$$10 = blInfo.itemHeight;
  var mName$$1;
  var mLabel$$2;
  var mLeft;
  var mTop;
  var mWidth$$1;
  var mHeight;
  var mAction$$1;
  var mLevel$$2;
  mName$$1 = "cell" + index$$39;
  mClass = "menuItem";
  mLevel$$2 = window.menuCells[index$$39].level;
  mLeft = left$$4;
  mTop = top$$4;
  mWidth$$1 = width$$12;
  mHeight = height$$10;
  mLabel$$2 = window.menuCells[index$$39].label;
  mAction$$1 = window.menuCells[index$$39].action;
  document.write("<" + blInfo.divType + ' id="' + mName$$1);
  document.write('" class="' + mClass + '" ');
  document.write(setStyle(mLeft, mTop, mWidth$$1, mHeight, 0, window.mbPassive, "inherit"));
  document.write(' onclick="' + mAction$$1 + '" ');
  mPopup = window.menuCells[index$$39].popup;
  if (mPopup) {
    document.write('onmouseover="popMenu(' + mLevel$$2 + ",'" + mName$$1 + "','" + mPopup + "'" + ');" ');
    document.write('onmouseout="setColorPassive(' + "'" + mName$$1 + "'" + ');">');
  } else {
    document.write('onmouseover="unPopMenus(' + mLevel$$2 + ",'" + mName$$1 + "'" + ');" ');
    document.write('onmouseout="setColorPassive(' + "'" + mName$$1 + "'" + ');">');
  }
  window.menuLayers[mName$$1] = new menuLayer(mLabel$$2, mAction$$1);
  if (blInfo.divType == "layer") {
    document.write(mLabel$$2.fontcolor(mtPassive));
  } else {
    document.write(mLabel$$2);
  }
  if (mPopup && mLevel$$2 >= 1) {
    document.write('&nbsp;<img src="' + window.menuPntr + '" border="0">');
  }
  document.writeln("</" + blInfo.divType + ">");
}
function buildMenuBody(cQueue, bName, bLevel$$1, bLeft$$1, bTop$$1, bWidth$$1, bHeight$$1) {
  var i$$4;
  var bClass;
  var geometry;
  var zIndex$$1;
  var level$$9;
  var bLayer;
  var lWidth$$1;
  var lHeight;
  var mLeft$$1;
  var mTop$$1;
  bClass = "menuBody";
  lWidth$$1 = bWidth$$1 + blInfo.bwPadding;
  lHeight = bHeight$$1 + blInfo.bhPadding;
  document.write("<" + blInfo.divType + ' id="' + bName + '" class="' + bClass + '" ');
  document.write(setStyle(bLeft$$1, bTop$$1, lWidth$$1, lHeight, bLevel$$1 + 1, "#000000", "hidden"));
  document.writeln(">");
  mLeft$$1 = blInfo.leftOffset;
  mTop$$1 = blInfo.mTopOffset;
  i$$4 = 0;
  for (;i$$4 < cQueue.length;i$$4++) {
    mLabel = window.menuCells[cQueue[i$$4]].label;
    if (mLabel) {
      buildMenuCell(cQueue[i$$4], mLeft$$1, mTop$$1, bWidth$$1);
      mTop$$1 += blInfo.itemHeight + blInfo.cellOffset;
    } else {
      if (mLabel == 0) {
        mTop$$1 += blInfo.dividerHeight;
      } else {
        alert("Expecting label in buildMenuBody.");
        return;
      }
    }
  }
  document.writeln("</" + blInfo.divType + ">");
}
function buildMenuBodies() {
  var i$$5;
  var cQueue$$1;
  var bName$$1;
  var bLevel$$2;
  var bLeft$$2;
  var bTop$$2;
  var bWidth$$2;
  var bHeight$$2;
  var bCells;
  i$$5 = 0;
  for (;i$$5 < window.menuBody.length;i$$5++) {
    bCells = window.menuBody[i$$5].cells;
    bName$$1 = window.menuBody[i$$5].popup;
    bLevel$$2 = window.menuBody[i$$5].level;
    bLeft$$2 = window.menuBody[i$$5].left;
    bTop$$2 = window.menuBody[i$$5].top;
    bWidth$$2 = window.menuBody[i$$5].width;
    bHeight$$2 = window.menuBody[i$$5].height;
    cQueue$$1 = new Array;
    cCount = 0;
    for (;bCells < window.bodyCells.length && window.bodyCells[bCells] > 0;) {
      cQueue$$1[cCount++] = window.bodyCells[bCells++];
    }
    buildMenuBody(cQueue$$1, bName$$1, bLevel$$2, bLeft$$2, bTop$$2, bWidth$$2, bHeight$$2);
    cQueue$$1 = null;
  }
}
function queueMenuBuilds(mIndex, mLevel$$3, mPopup$$2, mLeft$$2, mTop$$2) {
  var queue$$1 = new Array;
  var i$$6;
  var sPopup;
  var sLeft;
  var sTop;
  var sWidth;
  var sHeight;
  sTop = mTop$$2;
  sWidth = 0;
  sHeight = 0;
  i$$6 = mIndex;
  for (;i$$6 < window.menuCells.length && window.menuCells[i$$6].level >= mLevel$$3;) {
    if (window.menuCells[i$$6].level == mLevel$$3) {
      sWidth = Math.max(sWidth, window.menuCells[i$$6].width);
    }
    i$$6++;
  }
  sLeft = mLeft$$2 + sWidth + 2;
  i$$6 = mIndex;
  for (;i$$6 < window.menuCells.length && window.menuCells[i$$6].level >= mLevel$$3;) {
    queue$$1[queue$$1.length] = i$$6;
    if (window.menuCells[i$$6].popup) {
      sPopup = window.menuCells[i$$6].popup;
      i$$6++;
      i$$6 = queueMenuBuilds(i$$6, mLevel$$3 + 1, sPopup, sLeft, sTop);
      sTop += blInfo.itemHeight + blInfo.cellOffset;
      sHeight += blInfo.itemHeight + blInfo.cellOffset;
    } else {
      if (window.menuCells[i$$6].label) {
        i$$6++;
        sTop += blInfo.itemHeight + blInfo.cellOffset;
        sHeight += blInfo.itemHeight + blInfo.cellOffset;
      } else {
        i$$6++;
        sTop += blInfo.dividerHeight;
        sHeight += blInfo.dividerHeight;
      }
    }
  }
  if (queue$$1.length > 0) {
    stackMenuBody(queue$$1, mPopup$$2, mLevel$$3, mLeft$$2, mTop$$2, sWidth, sHeight - blInfo.cellOffset);
  }
  queue$$1 = null;
  return i$$6;
}
function endSiteMap() {
}
function drawHMenuBar() {
  var left$$5 = barLeft;
  var top$$5 = barTop;
  var width$$13 = barWidth;
  var height$$11 = barHeight;
  var padding = itemPadding;
  var graphic = barImage;
  var bLeft$$3;
  var bTop$$3;
  var bWidth$$3;
  var bHeight$$3;
  var iPadding;
  var bGraphic;
  var i$$7;
  var geometry$$1;
  var zIndex$$2;
  var iWidth;
  var iLeft;
  var mTop$$3;
  bLeft$$3 = left$$5;
  bTop$$3 = top$$5;
  bWidth$$3 = width$$13 + blInfo.wBarPadding;
  bHeight$$3 = height$$11 + blInfo.itemHeight + blInfo.hBarPadding;
  iPadding = padding + blInfo.itemPadding;
  bGraphic = graphic;
  document.write("<" + blInfo.divType + ' id="menuBar" class="menuBar" ');
  document.write(setStyle(bLeft$$3, bTop$$3, bWidth$$3, bHeight$$3, 0, null, "visible"));
  document.writeln(">");
  document.writeln('<img name="menuImage" src="' + bGraphic + '" class="menuBar" border="1" width="' + width$$13 + '" height="' + height$$11 + '">');
  iLeft = blInfo.leftOffset;
  mTop$$3 = height$$11 + blInfo.mBarOffset;
  bTop$$3 += blInfo.bBarOffset;
  i$$7 = 0;
  for (;i$$7 < window.menuCells.length;) {
    iWidth = window.menuCells[i$$7].width + iPadding;
    iWidth = Math.min(iWidth, bWidth$$3 - iLeft + blInfo.menuPadding);
    buildMenuCell(i$$7, iLeft, mTop$$3, iWidth);
    if (window.menuCells[i$$7].popup) {
      mPopup = window.menuCells[i$$7].popup;
      i$$7++;
      i$$7 = queueMenuBuilds(i$$7, 1, mPopup, bLeft$$3, bTop$$3 + bHeight$$3);
    }
    bLeft$$3 += iWidth + blInfo.itemSpacing;
    iLeft += iWidth + blInfo.itemSpacing;
  }
  document.writeln("</" + blInfo.divType + ">");
  buildMenuBodies();
  document.close();
}
function drawVMenuBar(left$$6, top$$6, width$$14, height$$12, padding$$1, graphic$$1) {
  var bLeft$$4;
  var bTop$$4;
  var bWidth$$4;
  var bHeight$$4;
  var mHeight$$1;
  var iPadding$$1;
  var bGraphic$$1;
  var i$$8;
  var geometry$$2;
  var zIndex$$3;
  var iWidth$$1;
  var iLeft$$1;
  var mTop$$4;
  var nTopItems;
  bLeft$$4 = left$$6;
  bTop$$4 = top$$6;
  bWidth$$4 = width$$14 + blInfo.wBarPadding;
  bHeight$$4 = height$$12;
  nTopItems = 0;
  i$$8 = 0;
  for (;i$$8 < window.menuCells.length;) {
    if (window.menuCells[i$$8].level == 0) {
      nTopItems++;
    }
    i$$8++;
  }
  mHeight$$1 = nTopItems * (blInfo.itemHeight + blInfo.cellOffset);
  i$$8 = 0;
  iPadding$$1 = padding$$1 + blInfo.itemPadding;
  bGraphic$$1 = graphic$$1;
  document.write("<" + blInfo.divType + ' id="menuBar" class="menuBar" ');
  document.write(setStyle(bLeft$$4, bTop$$4, bWidth$$4, bHeight$$4 + mHeight$$1, 0, null, "visible"));
  document.writeln(">");
  document.writeln('<img name="menuImage" src="' + bGraphic$$1 + '"class="menuBar" border="1" width="' + width$$14 + '" height="' + height$$12 + '">');
  iLeft$$1 = blInfo.leftOffset;
  mTop$$4 = height$$12 + blInfo.mBarOffset;
  bTop$$4 += blInfo.bBarOffset;
  for (;i$$8 < window.menuCells.length;) {
    iWidth$$1 = window.menuCells[i$$8].width + iPadding$$1;
    iWidth$$1 = Math.min(iWidth$$1, bWidth$$4 - iLeft$$1 + blInfo.menuPadding);
    buildMenuCell(i$$8, iLeft$$1, mTop$$4, iWidth$$1);
    if (window.menuCells[i$$8].popup) {
      mPopup = window.menuCells[i$$8].popup;
      i$$8++;
      i$$8 = queueMenuBuilds(i$$8, 1, mPopup, bLeft$$4 + iWidth$$1, bTop$$4 + bHeight$$4);
    }
    mTop$$4 += blInfo.itemHeight + blInfo.cellOffset;
    bTop$$4 += blInfo.itemHeight + blInfo.cellOffset;
  }
  document.writeln("</" + blInfo.divType + ">");
  buildMenuBodies();
  document.close();
}
function loadMe() {
  eval(this.action);
}
function activateMenus() {
  var mName$$2;
  var mAction$$2;
  var mNode$$7;
  var tStyle;
  tStyle = getStyle(getLayer(document, "test.cell"));
  if (!is.ns4) {
    window.mtPassive = tStyle.color;
    window.mbPassive = tStyle.backgroundColor;
    return;
  }
  for (mName$$2 in window.menuLayers) {
    mAction$$2 = window.menuLayers[mName$$2].action;
    mNode$$7 = getLayer(document, mName$$2);
    mNode$$7.captureEvents(Event.MOUSEDOWN);
    mNode$$7.onmousedown = loadMe;
    mNode$$7.action = mAction$$2;
    mNode$$7.fgColor = window.mtPassive;
  }
}
function findNode(elMain, mName$$3) {
  var elNode;
  var elIndex;
  elNode = getLayer(elMain, mName$$3);
  elIndex = 0;
  for (;!elNode && elIndex < stackDepth;) {
    elNode = getLayer(nodeStack[elIndex], mName$$3);
    elIndex++;
  }
  return elNode;
}
function clearMenus(mNum) {
  for (;stackDepth > mNum;) {
    stackDepth--;
    hideLayer();
    nameStack[stackDepth] = 0;
    nodeStack[stackDepth] = 0;
  }
}
function unPopMenus(mNum$$1, tag$$3) {
  setLayerColor(tag$$3, window.mbActive, window.mtActive);
  clearMenus(mNum$$1);
  if (is.ns4) {
    document.releaseEvents(Event.MOUSEDOWN);
  }
}
function setColorPassive(tag$$4) {
  setLayerColor(tag$$4, window.mbPassive, window.mtPassive);
  if (is.ns4) {
    document.captureEvents(Event.MOUSEDOWN);
  }
}
function popMenu(mNum$$2, tag$$5, mName$$4) {
  var style$$7;
  var elLayer$$1;
  clearMenus(mNum$$2);
  setLayerColor(tag$$5, window.mbActive, window.mtActive);
  elLayer$$1 = getLayer(document, mName$$4);
  if (elLayer$$1) {
    showLayer(elLayer$$1);
    nameStack[stackDepth] = mName$$4;
    nodeStack[stackDepth] = elLayer$$1;
    stackDepth++;
  }
  if (is.ns4) {
    document.releaseEvents(Event.MOUSEDOWN);
  }
}
function clearAll(e$$4) {
  clearMenus(0);
}
function initialize() {
  activateMenus();
}
var NSVisType = new Array;
NSVisType["visible"] = "show";
NSVisType["hidden"] = "hide";
NSVisType["inherit"] = "inherit";
var is = new Is;
var blInfo = new BrowserMenuInfo;
document.write("<" + blInfo.divType + ' id="test.cell"');
document.write('" class="menuItem" ');
document.write(setStyle(0, 0, 100, 20, null, null, "hidden") + ">");
document.write("test.cell");
document.writeln("</" + blInfo.divType + ">");
var alphaWidth = Array();
alphaWidth["a"] = blInfo.charWidth;
alphaWidth["b"] = blInfo.charWidth;
alphaWidth["c"] = blInfo.charWidth;
alphaWidth["d"] = blInfo.charWidth;
alphaWidth["e"] = blInfo.charWidth;
alphaWidth["f"] = blInfo.charWidth;
alphaWidth["g"] = blInfo.charWidth;
alphaWidth["h"] = blInfo.charWidth;
alphaWidth["i"] = Math.floor(blInfo.charWidth * .4);
alphaWidth["j"] = Math.floor(blInfo.charWidth * .7);
alphaWidth["k"] = blInfo.charWidth;
alphaWidth["l"] = Math.floor(blInfo.charWidth * .4);
alphaWidth["m"] = Math.floor(blInfo.charWidth * 1.6);
alphaWidth["n"] = blInfo.charWidth;
alphaWidth["o"] = blInfo.charWidth;
alphaWidth["p"] = blInfo.charWidth;
alphaWidth["q"] = blInfo.charWidth;
alphaWidth["r"] = blInfo.charWidth;
alphaWidth["s"] = blInfo.charWidth;
alphaWidth["t"] = blInfo.charWidth;
alphaWidth["u"] = blInfo.charWidth;
alphaWidth["v"] = blInfo.charWidth;
alphaWidth["w"] = Math.floor(blInfo.charWidth * 1.8);
alphaWidth["x"] = blInfo.charWidth;
alphaWidth["y"] = blInfo.charWidth;
alphaWidth["z"] = blInfo.charWidth;
alphaWidth["A"] = Math.floor(blInfo.charWidth * 1.6);
alphaWidth["B"] = Math.floor(blInfo.charWidth * 1.6);
alphaWidth["C"] = Math.floor(blInfo.charWidth * 1.6);
alphaWidth["D"] = Math.floor(blInfo.charWidth * 1.6);
alphaWidth["E"] = Math.floor(blInfo.charWidth * 1.6);
alphaWidth["F"] = Math.floor(blInfo.charWidth * 1.6);
alphaWidth["G"] = Math.floor(blInfo.charWidth * 1.6);
alphaWidth["H"] = Math.floor(blInfo.charWidth * 1.6);
alphaWidth["I"] = Math.floor(blInfo.charWidth);
alphaWidth["J"] = Math.floor(blInfo.charWidth);
alphaWidth["K"] = Math.floor(blInfo.charWidth * 1.6);
alphaWidth["L"] = Math.floor(blInfo.charWidth * 1.6);
alphaWidth["M"] = Math.floor(blInfo.charWidth * 2);
alphaWidth["N"] = Math.floor(blInfo.charWidth * 1.6);
alphaWidth["O"] = Math.floor(blInfo.charWidth * 1.6);
alphaWidth["P"] = Math.floor(blInfo.charWidth * 1.6);
alphaWidth["Q"] = Math.floor(blInfo.charWidth * 1.6);
alphaWidth["R"] = Math.floor(blInfo.charWidth * 1.6);
alphaWidth["S"] = Math.floor(blInfo.charWidth * 1.6);
alphaWidth["T"] = Math.floor(blInfo.charWidth * 1.6);
alphaWidth["U"] = Math.floor(blInfo.charWidth * 1.6);
alphaWidth["V"] = Math.floor(blInfo.charWidth * 1.6);
alphaWidth["W"] = Math.floor(blInfo.charWidth * 3);
alphaWidth["X"] = Math.floor(blInfo.charWidth * 1.6);
alphaWidth["Y"] = Math.floor(blInfo.charWidth * 1.6);
alphaWidth["Z"] = Math.floor(blInfo.charWidth * 1.6);
alphaWidth["0"] = blInfo.charWidth;
alphaWidth["1"] = blInfo.charWidth;
alphaWidth["2"] = blInfo.charWidth;
alphaWidth["3"] = blInfo.charWidth;
alphaWidth["4"] = blInfo.charWidth;
alphaWidth["5"] = blInfo.charWidth;
alphaWidth["6"] = blInfo.charWidth;
alphaWidth["7"] = blInfo.charWidth;
alphaWidth["8"] = blInfo.charWidth;
alphaWidth["9"] = blInfo.charWidth;
alphaWidth["."] = blInfo.charWidth;
alphaWidth[","] = blInfo.charWidth;
alphaWidth["'"] = blInfo.charWidth;
alphaWidth[" "] = blInfo.charWidth;
alphaWidth['"'] = blInfo.charWidth;
alphaWidth["/"] = blInfo.charWidth;
alphaWidth["\\"] = blInfo.charWidth;
alphaWidth["<"] = blInfo.charWidth;
alphaWidth[">"] = blInfo.charWidth;
alphaWidth["?"] = blInfo.charWidth;
alphaWidth["~"] = blInfo.charWidth;
alphaWidth["!"] = blInfo.charWidth;
alphaWidth["#"] = blInfo.charWidth;
alphaWidth["$"] = blInfo.charWidth;
alphaWidth["%"] = blInfo.charWidth;
alphaWidth["^"] = blInfo.charWidth;
alphaWidth["&"] = blInfo.charWidth;
alphaWidth["*"] = blInfo.charWidth;
alphaWidth["("] = blInfo.charWidth;
alphaWidth[")"] = blInfo.charWidth;
alphaWidth["-"] = blInfo.charWidth;
alphaWidth["_"] = blInfo.charWidth;
alphaWidth["="] = blInfo.charWidth;
alphaWidth["+"] = blInfo.charWidth;
alphaWidth["{"] = blInfo.charWidth;
alphaWidth["}"] = blInfo.charWidth;
alphaWidth["["] = blInfo.charWidth;
alphaWidth["]"] = blInfo.charWidth;
alphaWidth["|"] = blInfo.charWidth;
alphaWidth[";"] = blInfo.charWidth;
alphaWidth[":"] = blInfo.charWidth;
var nameStack = new Array;
var nodeStack = new Array;
var stackDepth = 0;
if (is.ns4) {
  document.captureEvents(Event.MOUSEDOWN);
  document.onmousedown = clearAll;
}
startSiteMap();
startMenu("jsWidgets");
addMenuItem("Home", "/home.shtml");
addMenuItem("What is jsWidgets?", "/readme.shtml");
addMenuItem("Change Log", "/changelog.shtml");
addMenuItem("General Public License", "http://www.gnu.org/copyleft/gpl.html");
addMenuItem("Project Page", "http://sourceforge.net/projects/jswidgets");
addMenuItem("Download", "http://sourceforge.net/project/showfiles.php?group_id=33495");
startMenu("Competition at SF");
addMenuItem("DynAPI", "http://dynapi.sourceforge.net");
addMenuItem("netWindows", "http://sourceforge.net/projects/netwindows");
addMenuItem("jsui", "http://jsui.sourceforge.net");
addMenuItem("judelib", "http://judelib.sourceforge.net");
addMenuItem("XPDOM", "http://xpdom.sourceforge.net");
addMenuItem("Tree Menu", "http://www.treemenu.com");
addMenuItem("gmL-Modul", "http://gml-modul.sourceforge.net");
addMenuItem("PHP Layers", "http://phplayersmenu.sourceforge.net");
addMenuItem("WAB AWT", "http://www.skip-consulting.de/wab/wabawt/");
endMenu();
endMenu();
startMenu("Examples");
addMenuItem("Menus", "/examples/menus.shtml");
addMenuItem("Notes", "/examples/notes.shtml");
addMenuItem("Banners", "/examples/banners.shtml");
addMenuItem("Browsers", "/examples/browsers.shtml");
addMenuItem("Trees", "/examples/trees.shtml");
endMenu();
startMenu("Documentation");
addMenuItem("Menus", "/docs/menus.shtml");
addMenuItem("Notes", "/docs/notes.shtml");
addMenuItem("Banners", "/docs/banners.shtml");
addMenuItem("Browsers", "/docs/browsers.shtml");
addMenuItem("Trees", "/docs/trees.shtml");
endMenu();
startMenu("On JavaScript");
addMenuItem("Netscape Docs", "http://developer.netscape.com/docs/manuals/javascript.html");
startMenu("ECMA Script");
addMenuItem("ECMA -262", "http://www.ecma.ch/ecma1/STAND/ECMA-262.HTM");
addMenuItem("DOM Level 1 Binding", "http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html");
endMenu();
startMenu("Others Examples");
addMenuItem("Javascript Source", "http://javascript.internet.com/");
addMenuItem("Javascript.com", "http://www.javascript.com");
addMenuItem("Javascript Resources", "http://www.jsr.communitech.net/index3.htm");
addMenuItem("W3Schools Examples", "http://www.w3schools.com/js/js_examples.asp");
endMenu();
endSiteMap();
if (is.w3c || is.ie4 || is.ns4 && !is.hj) {
  var barTop = 20;
  var barLeft = 50;
  var barWidth = 370;
  var barHeight = 44;
  var itemPadding = 5;
  var barImage = "images/title.png";
  drawHMenuBar();
}
if (is.w3c) {
  document.writeln('<div style="position : relative; top : 15px; float : right; padding-right : 42px; text-align : right">');
  document.writeln('<a href="http://sourceforge.net/projects/jswidgets"><img src="http://sflogo.sourceforge.net/sflogo.php?group_id=33495&type=15" width="150" height="40" border="0" alt="Get Browser-Independent Javascript Widgets at SourceForge.net. Fast, secure and Free Open Source software downloads" /></a>');
  document.writeln("</div>");
} else {
  if (is.ns4) {
    document.writeln('<layer top="20" left="400">');
    document.writeln('<a href="http://sourceforge.net/projects/jswidgets"><img src="http://sflogo.sourceforge.net/sflogo.php?group_id=33495&type=15" width="150" height="40" border="0" alt="Get Browser-Independent Javascript Widgets at SourceForge.net. Fast, secure and Free Open Source software downloads" /></a>');
    document.writeln("</layer>");
  }
}
document.body.background = "images/researchbg.gif";
document.body.onload = initialize;
document.getElementById("cleardiv").onmouseover = clearAll
