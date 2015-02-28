
JAM.startProfile('load');
function getNSLayer(inNode, inName) {
  var node$$2;
  var i$$1;
  node$$2 = inNode[inName];
  i$$1 = 0;
  var v483 = !node$$2;
  if (v483) {
    v483 = inNode.layers;
  }
  var v273 = v483;
  if (v273) {
    var v617 = inNode.layers;
    var v484 = v617.length;
    v273 = i$$1 < v484;
  }
  var v1 = v273;
  for (;v1;) {
    var v485 = inNode.layers;
    var v274 = v485[i$$1];
    var v0 = v274.document;
    node$$2 = getNSLayer(v0, inName);
    i$$1++;
    var v486 = !node$$2;
    if (v486) {
      v486 = inNode.layers;
    }
    var v275 = v486;
    if (v275) {
      var v618 = inNode.layers;
      var v487 = v618.length;
      v275 = i$$1 < v487;
    }
    v1 = v275;
  }
  return node$$2;
}
function getLayer(inNode$$1, inName$$1) {
  var node$$3;
  var v5 = inNode$$1.getElementById;
  if (v5) {
    node$$3 = inNode$$1.getElementById(inName$$1);
  } else {
    var v4 = inNode$$1.all;
    if (v4) {
      var v2 = inNode$$1.all;
      node$$3 = v2[inName$$1];
    } else {
      var v3 = inNode$$1.layers;
      if (v3) {
        node$$3 = getNSLayer(inNode$$1, inName$$1);
      }
    }
  }
  var v7 = !node$$3;
  if (v7) {
    var v276 = "Could not find layer " + inName$$1;
    var v6 = v276 + ".";
    alert(v6);
  }
  return node$$3;
}
function getStyle(inNode$$2) {
  var style;
  var v277 = is.w3c;
  var v488 = !v277;
  if (v488) {
    v277 = is.ie4;
  }
  var v9 = v277;
  if (v9) {
    style = inNode$$2.style;
  } else {
    var v8 = is.ns4;
    if (v8) {
      style = inNode$$2;
    } else {
      style = 0;
    }
  }
  return style;
}
function setLayerPos(inNode$$3, left$$1, top$$1) {
  var v278 = is.ie4;
  var v489 = !v278;
  if (v489) {
    v278 = is.w3c;
  }
  var v13 = v278;
  if (v13) {
    var v10 = inNode$$3.style;
    v10.left = left$$1 + "px";
    var v11 = inNode$$3.style;
    v11.top = top$$1 + "px";
  } else {
    var v12 = is.ns4;
    if (v12) {
      inNode$$3.left = left$$1;
      inNode$$3.top = top$$1;
    }
  }
  return;
}
function showLayer(mNode) {
  var style$$1;
  style$$1 = getStyle(mNode);
  if (style$$1) {
    style$$1.visibility = "visible";
  }
  return;
}
function hideLayer() {
  var mNode$$1 = nodeStack[stackDepth];
  var style$$2;
  style$$2 = getStyle(mNode$$1);
  if (style$$2) {
    style$$2.visibility = "hidden";
  }
  return;
}
function isPositioned(mNode$$2) {
  var v14 = mNode$$2.left;
  var v280 = !v14;
  if (v280) {
    var v279 = mNode$$2.style;
    v14 = v279.left;
  }
  return v14;
}
function layerWidth(mNode$$3) {
  var nWidth;
  var v281 = is.ie4;
  var v490 = !v281;
  if (v490) {
    v281 = is.w3c;
  }
  var v18 = v281;
  if (v18) {
    var v282 = mNode$$3.style;
    var v15 = v282.width;
    nWidth = parseInt(v15);
  } else {
    var v17 = is.ns4;
    if (v17) {
      var v16 = mNode$$3.width;
      nWidth = parseInt(v16);
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
  return;
}
function contractLayer(mNode$$5) {
  var style$$4;
  style$$4 = getStyle(mNode$$5);
  if (style$$4) {
    style$$4.display = "none";
  }
  return;
}
function insertLayer(mNode$$6) {
  var style$$5;
  style$$5 = getStyle(mNode$$6);
  if (style$$5) {
    style$$5.display = "inline";
  }
  return;
}
function setLayerColor(tag, bgColor, tColor) {
  var elLayer;
  elLayer = getLayer(document, tag);
  elStyle = getStyle(elLayer);
  if (elStyle) {
    var v19 = is.ns4;
    if (v19) {
      elStyle.bgColor = bgColor;
    } else {
      elStyle.backgroundColor = bgColor;
      elStyle.color = tColor;
    }
  }
  return;
}
function setStyle(left$$2, top$$2, width$$9, height$$8, zIndex, bgColor$$1, visibility) {
  var divType = blInfo.divType;
  var fontSize = blInfo.fontSize;
  var dStyle;
  var v21 = divType == "layer";
  if (v21) {
    dStyle = 'left="' + left$$2;
    var v283 = '" top="' + top$$2;
    dStyle = dStyle + v283;
    var v284 = '" width="' + width$$9;
    dStyle = dStyle + v284;
    var v285 = '" height="' + height$$8;
    dStyle = dStyle + v285;
    if (zIndex) {
      var v286 = '" z-index="' + zIndex;
      dStyle = dStyle + v286;
    }
    if (bgColor$$1) {
      var v287 = '" bgColor="' + bgColor$$1;
      dStyle = dStyle + v287;
    } else {
      dStyle = dStyle + '" bgColor="#000000';
    }
    if (visibility) {
      var v491 = NSVisType[visibility];
      var v288 = '" visibility="' + v491;
      dStyle = dStyle + v288;
    }
    dStyle = dStyle + '" ';
  } else {
    var v20 = 'style="font-size : ' + fontSize;
    dStyle = v20 + "pt; ";
    var v492 = "left : " + left$$2;
    var v289 = v492 + "px; ";
    dStyle = dStyle + v289;
    var v493 = "top : " + top$$2;
    var v290 = v493 + "px; ";
    dStyle = dStyle + v290;
    var v494 = "width : " + width$$9;
    var v291 = v494 + "px; ";
    dStyle = dStyle + v291;
    var v495 = "height : " + height$$8;
    var v292 = v495 + "px; ";
    dStyle = dStyle + v292;
    if (zIndex) {
      var v496 = "z-index : " + zIndex;
      var v293 = v496 + "; ";
      dStyle = dStyle + v293;
    }
    if (bgColor$$1) {
      var v497 = "background-color : " + bgColor$$1;
      var v294 = v497 + "; ";
      dStyle = dStyle + v294;
    }
    if (visibility) {
      var v498 = "visibility : " + visibility;
      var v295 = v498 + "; ";
      dStyle = dStyle + v295;
    }
    dStyle = dStyle + '" ';
  }
  return dStyle;
}
function Is() {
  var v22 = navigator.appName;
  var appName = v22.toLowerCase();
  var v23 = navigator.appVersion;
  var version$$5 = v23.toLowerCase();
  var v24 = navigator.userAgent;
  var agent = v24.toLowerCase();
  var v25 = navigator.platform;
  var platform = v25.toLowerCase();
  var v669 = parseInt(version$$5);
  this.major = v669;
  var v670 = parseFloat(version$$5);
  this.minor = v670;
  var v26 = agent.indexOf("netscape");
  this.nsa = v26 != -1;
  var v27 = agent.indexOf("mozilla");
  this.mza = v27 != -1;
  var v28 = agent.indexOf("galeon");
  this.gla = v28 != -1;
  var v29 = this.mza;
  if (v29) {
    var v296 = this.nsa;
    v29 = !v296;
  }
  this.mza = v29;
  var v34 = this.mza;
  if (v34) {
    var v297 = agent.indexOf("rv:");
    var v30 = v297 + 3;
    var v31 = agent.indexOf(")");
    version$$5 = agent.substring(v30, v31);
    this.nsa = false;
    var v298 = agent.indexOf("rv:");
    var v33 = v298 != -1;
    if (v33) {
      var v671 = parseInt(version$$5);
      this.major = v671;
      var v672 = parseFloat(version$$5);
      this.minor = v672;
      var v32 = this.mza;
      if (v32) {
        var v299 = this.major;
        v32 = v299 == 1;
      }
      this.mz1 = v32;
    } else {
      this.mza = false;
      version$$5 = this.minor;
    }
  }
  var v39 = this.gla;
  if (v39) {
    var v300 = agent.indexOf("galeon/");
    var v35 = v300 + 7;
    var v301 = agent.indexOf("(");
    var v36 = v301 - 1;
    version$$5 = agent.substring(v35, v36);
    this.nsa = false;
    var v302 = agent.indexOf("galeon/");
    var v38 = v302 != -1;
    if (v38) {
      var v673 = parseInt(version$$5);
      this.major = v673;
      var v674 = parseFloat(version$$5);
      this.minor = v674;
      var v37 = this.gla;
      if (v37) {
        var v303 = this.major;
        v37 = v303 == 1;
      }
      this.gl1 = v37;
    } else {
      this.gla = false;
      version$$5 = this.version;
    }
  }
  this.version = version$$5;
  var v40 = appName.indexOf("netscape");
  this.nsn = v40 != -1;
  var v41 = this.nsn;
  if (v41) {
    var v304 = this.major;
    v41 = v304 == 2;
  }
  this.ns2 = v41;
  var v42 = this.nsn;
  if (v42) {
    var v305 = this.major;
    v42 = v305 == 3;
  }
  this.ns3 = v42;
  var v43 = this.nsn;
  if (v43) {
    var v306 = this.major;
    v43 = v306 == 4;
  }
  this.ns4 = v43;
  var v44 = this.nsa;
  if (v44) {
    var v307 = this.major;
    v44 = v307 >= 5;
  }
  this.ns6 = v44;
  var v47 = this.ns6;
  if (v47) {
    var v308 = agent.indexOf("netscape6/");
    var v45 = v308 + 10;
    var v46 = agent.length;
    var v675 = agent.slice(v45, v46);
    this.version = v675;
  }
  var v309 = appName.indexOf("internet explorer");
  var v48 = v309 != -1;
  if (v48) {
    var v310 = agent.indexOf("opera");
    v48 = v310 == -1;
  }
  this.ie = v48;
  var v49 = this.ie;
  if (v49) {
    var v311 = this.major;
    v49 = v311 == 3;
  }
  this.ie3 = v49;
  var v312 = this.ie;
  if (v312) {
    var v499 = this.major;
    v312 = v499 == 4;
  }
  var v50 = v312;
  if (v50) {
    var v313 = agent.indexOf("msie 4.");
    v50 = v313 != -1;
  }
  this.ie4 = v50;
  var v314 = this.ie;
  if (v314) {
    var v500 = this.major;
    v314 = v500 == 4;
  }
  var v51 = v314;
  if (v51) {
    var v315 = agent.indexOf("msie 5.");
    v51 = v315 != -1;
  }
  this.ie5 = v51;
  var v316 = this.ie;
  if (v316) {
    var v501 = this.major;
    v316 = v501 == 4;
  }
  var v52 = v316;
  if (v52) {
    var v317 = agent.indexOf("msie 6.");
    v52 = v317 != -1;
  }
  this.ie6 = v52;
  var v502 = this.ie4;
  var v619 = !v502;
  if (v619) {
    v502 = this.ie5;
  }
  var v318 = v502;
  var v503 = !v318;
  if (v503) {
    v318 = this.ie6;
  }
  var v57 = v318;
  if (v57) {
    var v319 = agent.indexOf("msie ");
    var v53 = v319 + 5;
    var v54 = agent.length;
    var v676 = agent.slice(v53, v54);
    this.version = v676;
    var v55 = this.version;
    var v320 = this.version;
    var v56 = v320.indexOf(";");
    var v677 = v55.slice(0, v56);
    this.version = v677;
  }
  var v321 = this.ie;
  if (v321) {
    var v504 = this.ie3;
    v321 = !v504;
  }
  var v58 = v321;
  if (v58) {
    var v322 = this.ie4;
    v58 = !v322;
  }
  this.ieX = v58;
  var v59 = agent.indexOf("opera");
  this.op = v59 != -1;
  var v323 = this.op;
  if (v323) {
    var v505 = this.major;
    v323 = v505 == 4;
  }
  var v60 = v323;
  if (v60) {
    var v324 = agent.indexOf("opera 4.");
    v60 = v324 != -1;
  }
  this.op4 = v60;
  var v325 = this.op;
  if (v325) {
    var v506 = this.major;
    v325 = v506 == 4;
  }
  var v61 = v325;
  if (v61) {
    var v326 = agent.indexOf("opera 5.");
    v61 = v326 != -1;
  }
  this.op5 = v61;
  var v327 = this.op;
  if (v327) {
    var v507 = this.major;
    v327 = v507 == 4;
  }
  var v62 = v327;
  if (v62) {
    var v328 = agent.indexOf("opera 6.");
    v62 = v328 != -1;
  }
  this.op6 = v62;
  var v66 = this.op;
  if (v66) {
    this.ie = false;
    this.ie4 = false;
    this.ie5 = false;
    this.ie6 = false;
    var v329 = agent.indexOf("opera");
    var v63 = v329 + 6;
    var v64 = agent.length;
    var v678 = agent.slice(v63, v64);
    this.version = v678;
    var v65 = this.version;
    var v679 = parseFloat(v65);
    this.version = v679;
  }
  var v67 = agent.indexOf("konqueror");
  this.kq = v67 != -1;
  var v74 = this.kq;
  if (v74) {
    var v330 = agent.indexOf("konqueror/");
    var v68 = v330 + 10;
    var v69 = agent.length;
    var v680 = agent.substring(v68, v69);
    this.version = v680;
    var v70 = this.version;
    var v331 = this.version;
    var v71 = v331.indexOf(";");
    var v681 = v70.substring(0, v71);
    this.version = v681;
    var v72 = this.version;
    var v682 = parseInt(v72);
    this.major = v682;
    var v73 = this.version;
    var v683 = parseFloat(v73);
    this.minor = v683;
    this.mza = false;
  }
  var v75 = this.kq;
  if (v75) {
    var v332 = this.major;
    v75 = v332 == 2;
  }
  this.kq2 = v75;
  var v76 = this.kq;
  if (v76) {
    var v333 = this.major;
    v76 = v333 == 3;
  }
  this.kq3 = v76;
  var v334 = document.getElementById;
  var v77 = !v334;
  this.w3c = !v77;
  var v78 = platform.indexOf("win32");
  this.win32 = v78 != -1;
  var v79 = platform.indexOf("linux");
  this.linux = v79 != -1;
  var v80 = platform.indexOf("bsd");
  this.bsd = v80 != -1;
  return;
}
function setTagFontColor(tag$$1, color$$2) {
  var v335 = is.ie4;
  var v508 = !v335;
  if (v508) {
    v335 = is.w3c;
  }
  var v83 = v335;
  if (v83) {
    var v81 = tag$$1.style;
    v81.color = color$$2;
  } else {
    var v82 = is.ns4;
    if (v82) {
      tag$$1.color = color$$2;
    } else {
    }
  }
  return;
}
function setTagFontStyle(tag$$2, style$$6) {
  var v336 = is.ie4;
  var v509 = !v336;
  if (v509) {
    v336 = is.w3c;
  }
  var v86 = v336;
  if (v86) {
    var v84 = tag$$2.style;
    v84.fontStyle = style$$6;
  } else {
    var v85 = is.ns4;
    if (v85) {
      tag$$2.fontStyle = style$$6;
    } else {
    }
  }
  return;
}
function mousePosLeft(event$$1) {
  var leftPos;
  var v337 = is.ie4;
  var v511 = !v337;
  if (v511) {
    var v510 = is.w3c;
    if (v510) {
      var v650 = is.ns6;
      var v661 = !v650;
      if (v661) {
        v650 = is.mza;
      }
      var v620 = v650;
      v510 = !v620;
    }
    v337 = v510;
  }
  var v88 = v337;
  if (v88) {
    leftPos = event$$1.clientX;
  } else {
    var v512 = is.ns4;
    var v621 = !v512;
    if (v621) {
      v512 = is.ns6;
    }
    var v338 = v512;
    var v513 = !v338;
    if (v513) {
      v338 = is.mza;
    }
    var v87 = v338;
    if (v87) {
      leftPos = event$$1.pageX;
    }
  }
  return leftPos;
}
function mousePosTop(event$$2) {
  var topPos;
  var v339 = is.ie4;
  var v515 = !v339;
  if (v515) {
    var v514 = is.w3c;
    if (v514) {
      var v651 = is.ns6;
      var v662 = !v651;
      if (v662) {
        v651 = is.mza;
      }
      var v622 = v651;
      v514 = !v622;
    }
    v339 = v514;
  }
  var v90 = v339;
  if (v90) {
    topPos = event$$2.clientY;
  } else {
    var v516 = is.ns4;
    var v623 = !v516;
    if (v623) {
      v516 = is.ns6;
    }
    var v340 = v516;
    var v517 = !v340;
    if (v517) {
      v340 = is.mza;
    }
    var v89 = v340;
    if (v89) {
      topPos = event$$2.pageY;
    }
  }
  return topPos;
}
function BrowserMenuInfo() {
  var v102 = is.ns4;
  if (v102) {
    var v92 = is.win32;
    if (v92) {
      this.itemHeight = 16;
    } else {
      var v91 = is.linux;
      if (v91) {
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
    var v94 = is.win32;
    if (v94) {
      this.charWidth = 7;
    } else {
      var v93 = is.linux;
      if (v93) {
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
    var v101 = is.kq;
    if (v101) {
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
      var v341 = is.op5;
      var v518 = !v341;
      if (v518) {
        v341 = is.op6;
      }
      var v100 = v341;
      if (v100) {
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
        var v99 = is.ie4;
        if (v99) {
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
          var v98 = is.ie5;
          if (v98) {
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
            var v97 = is.ie6;
            if (v97) {
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
              var v519 = is.mza;
              var v624 = !v519;
              if (v624) {
                v519 = is.gla;
              }
              var v342 = v519;
              var v520 = !v342;
              if (v520) {
                v342 = is.ns6;
              }
              var v96 = v342;
              if (v96) {
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
                var v95 = is.w3c;
                if (v95) {
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
  return;
}
function startSiteMap() {
  var mName = "Menu";
  var mTarget = "_top";
  window.menuName = mName;
  window.menuTarget = mTarget;
  window.menuPntr = "images/tri.gif";
  var v103 = window;
  var v684 = new Array;
  v103.menuCells = v684;
  window.menuPopups = 0;
  window.menuHeads = 0;
  window.menuLevel = 0;
  window.menuMain = 0;
  var v104 = window;
  var v685 = new Object;
  v104.menuLayers = v685;
  var v105 = window;
  var v686 = new Array;
  v105.menuStack = v686;
  var v106 = window;
  var v687 = new Array;
  v106.menuBody = v687;
  var v107 = window;
  var v688 = new Array;
  v107.bodyCells = v688;
  window.mbActive = "#FF0000";
  window.mtActive = "#FFFF00";
  return;
}
function menuItem(label, action, width$$10, level$$7, popup) {
  var v108 = label == 0;
  if (v108) {
    this.label = label;
  } else {
    this.label = "&nbsp;" + label;
  }
  this.action = action;
  this.width = width$$10;
  this.level = level$$7;
  this.popup = popup;
  return;
}
function bodyItem(popup$$1, level$$8, left$$3, top$$3, width$$11, height$$9) {
  var v109 = window.bodyCells;
  var cells = v109.length;
  this.cells = cells;
  this.popup = popup$$1;
  this.level = level$$8;
  this.left = left$$3;
  this.top = top$$3;
  this.width = width$$11;
  this.height = height$$9;
  return;
}
function stackMenuBody(queue, bPopup, bLevel, bLeft, bTop, bWidth, bHeight) {
  var mBody;
  var i$$2;
  mBody = new bodyItem(bPopup, bLevel, bLeft, bTop, bWidth, bHeight);
  var v110 = window.menuBody;
  var v343 = window.menuBody;
  var v111 = v343.length;
  v110[v111] = mBody;
  i$$2 = 0;
  var v344 = queue.length;
  var v114 = i$$2 < v344;
  for (;v114;) {
    var v112 = window.bodyCells;
    var v345 = window.bodyCells;
    var v113 = v345.length;
    v112[v113] = queue[i$$2];
    i$$2++;
    var v346 = queue.length;
    v114 = i$$2 < v346;
  }
  var v115 = window.bodyCells;
  var v347 = window.bodyCells;
  var v116 = v347.length;
  v115[v116] = 0;
  return;
}
function addMenuDivider() {
  var mItem;
  var mLevel;
  mLevel = window.menuLevel;
  mItem = new menuItem(0, 0, 0, mLevel, 0);
  var v117 = window.menuCells;
  var v348 = window.menuCells;
  var v118 = v348.length;
  v117[v118] = mItem;
  return;
}
function estLabelWidth(label$$1) {
  var lWidth = 0;
  var i$$3;
  i$$3 = 0;
  var v349 = label$$1.length;
  var v119 = i$$3 < v349;
  for (;v119;) {
    var v521 = alphaWidth;
    var v522 = label$$1.charAt(i$$3);
    var v350 = v521[v522];
    lWidth = lWidth + v350;
    i$$3++;
    var v351 = label$$1.length;
    v119 = i$$3 < v351;
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
  var v120 = estLabelWidth(label$$2);
  mWidth = v120 + 4;
  if (label$$2) {
    mLabel$$1 = label$$2;
  } else {
    var v352 = "No label given for action " + action$$1;
    var v121 = v352 + ".";
    alert(v121);
    mLabel$$1 = "no label";
  }
  if (action$$1) {
    var v122 = "location='" + action$$1;
    mAction = v122 + "'";
  } else {
    var v123 = "clearMenus(" + mLevel$$1;
    mAction = v123 + ")";
  }
  mPopup$$1 = popup$$2;
  var v353 = mPopup$$1;
  if (v353) {
    v353 = mLevel$$1 > 0;
  }
  var v124 = v353;
  if (v124) {
    mWidth = mWidth + 15;
  }
  var v125 = mLevel$$1 == 0;
  if (v125) {
    window.menuHeads++;
  }
  mItem$$1 = new menuItem(mLabel$$1, mAction, mWidth, mLevel$$1, mPopup$$1);
  var v126 = window.menuCells;
  var v354 = window.menuCells;
  var v127 = v354.length;
  v126[v127] = mItem$$1;
  return;
}
function startMenu(label$$3) {
  var action$$2;
  var v355 = window.menuPopups;
  var v625 = window.menuPopups;
  window.menuPopups = v625 + 1;
  var v128 = "popup" + v355;
  addMenuItem(label$$3, action$$2, v128);
  window.menuLevel++;
  return;
}
function endMenu() {
  window.menuLevel--;
  return;
}
function menuLayer(label$$4, action$$3) {
  this.name = name;
  this.label = label$$4;
  this.action = action$$3;
  return;
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
  var v356 = window.menuCells;
  var v129 = v356[index$$39];
  mLevel$$2 = v129.level;
  mLeft = left$$4;
  mTop = top$$4;
  mWidth$$1 = width$$12;
  mHeight = height$$10;
  var v357 = window.menuCells;
  var v130 = v357[index$$39];
  mLabel$$2 = v130.label;
  var v358 = window.menuCells;
  var v131 = v358[index$$39];
  mAction$$1 = v131.action;
  var v626 = blInfo.divType;
  var v523 = "<" + v626;
  var v359 = v523 + ' id="';
  var v132 = v359 + mName$$1;
  document.write(v132);
  var v360 = '" class="' + mClass;
  var v133 = v360 + '" ';
  document.write(v133);
  var v361 = window.mbPassive;
  var v134 = setStyle(mLeft, mTop, mWidth$$1, mHeight, 0, v361, "inherit");
  document.write(v134);
  var v362 = ' onclick="' + mAction$$1;
  var v135 = v362 + '" ';
  document.write(v135);
  var v363 = window.menuCells;
  var v136 = v363[index$$39];
  mPopup = v136.popup;
  if (mPopup) {
    var v667 = 'onmouseover="popMenu(' + mLevel$$2;
    var v663 = v667 + ",'";
    var v652 = v663 + mName$$1;
    var v627 = v652 + "','";
    var v524 = v627 + mPopup;
    var v364 = v524 + "'";
    var v137 = v364 + ');" ';
    document.write(v137);
    var v628 = 'onmouseout="setColorPassive(' + "'";
    var v525 = v628 + mName$$1;
    var v365 = v525 + "'";
    var v138 = v365 + ');">';
    document.write(v138);
  } else {
    var v653 = 'onmouseover="unPopMenus(' + mLevel$$2;
    var v629 = v653 + ",'";
    var v526 = v629 + mName$$1;
    var v366 = v526 + "'";
    var v139 = v366 + ');" ';
    document.write(v139);
    var v630 = 'onmouseout="setColorPassive(' + "'";
    var v527 = v630 + mName$$1;
    var v367 = v527 + "'";
    var v140 = v367 + ');">';
    document.write(v140);
  }
  var v141 = window.menuLayers;
  var v689 = new menuLayer(mLabel$$2, mAction$$1);
  v141[mName$$1] = v689;
  var v368 = blInfo.divType;
  var v143 = v368 == "layer";
  if (v143) {
    var v142 = mLabel$$2.fontcolor(mtPassive);
    document.write(v142);
  } else {
    document.write(mLabel$$2);
  }
  var v369 = mPopup;
  if (v369) {
    v369 = mLevel$$2 >= 1;
  }
  var v145 = v369;
  if (v145) {
    var v528 = window.menuPntr;
    var v370 = '&nbsp;<img src="' + v528;
    var v144 = v370 + '" border="0">';
    document.write(v144);
  }
  var v529 = blInfo.divType;
  var v371 = "</" + v529;
  var v146 = v371 + ">";
  document.writeln(v146);
  return;
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
  var v147 = blInfo.bwPadding;
  lWidth$$1 = bWidth$$1 + v147;
  var v148 = blInfo.bhPadding;
  lHeight = bHeight$$1 + v148;
  var v668 = blInfo.divType;
  var v664 = "<" + v668;
  var v654 = v664 + ' id="';
  var v631 = v654 + bName;
  var v530 = v631 + '" class="';
  var v372 = v530 + bClass;
  var v149 = v372 + '" ';
  document.write(v149);
  var v373 = bLevel$$1 + 1;
  var v150 = setStyle(bLeft$$1, bTop$$1, lWidth$$1, lHeight, v373, "#000000", "hidden");
  document.write(v150);
  document.writeln(">");
  mLeft$$1 = blInfo.leftOffset;
  mTop$$1 = blInfo.mTopOffset;
  i$$4 = 0;
  var v374 = cQueue.length;
  var v154 = i$$4 < v374;
  for (;v154;) {
    var v375 = window.menuCells;
    var v376 = cQueue[i$$4];
    var v151 = v375[v376];
    mLabel = v151.label;
    if (mLabel) {
      var v152 = cQueue[i$$4];
      buildMenuCell(v152, mLeft$$1, mTop$$1, bWidth$$1);
      var v531 = blInfo.itemHeight;
      var v532 = blInfo.cellOffset;
      var v377 = v531 + v532;
      mTop$$1 = mTop$$1 + v377;
    } else {
      var v153 = mLabel == 0;
      if (v153) {
        var v378 = blInfo.dividerHeight;
        mTop$$1 = mTop$$1 + v378;
      } else {
        alert("Expecting label in buildMenuBody.");
        return;
      }
    }
    i$$4++;
    var v379 = cQueue.length;
    v154 = i$$4 < v379;
  }
  var v533 = blInfo.divType;
  var v380 = "</" + v533;
  var v155 = v380 + ">";
  document.writeln(v155);
  return;
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
  var v534 = window.menuBody;
  var v381 = v534.length;
  var v165 = i$$5 < v381;
  for (;v165;) {
    var v382 = window.menuBody;
    var v156 = v382[i$$5];
    bCells = v156.cells;
    var v383 = window.menuBody;
    var v157 = v383[i$$5];
    bName$$1 = v157.popup;
    var v384 = window.menuBody;
    var v158 = v384[i$$5];
    bLevel$$2 = v158.level;
    var v385 = window.menuBody;
    var v159 = v385[i$$5];
    bLeft$$2 = v159.left;
    var v386 = window.menuBody;
    var v160 = v386[i$$5];
    bTop$$2 = v160.top;
    var v387 = window.menuBody;
    var v161 = v387[i$$5];
    bWidth$$2 = v161.width;
    var v388 = window.menuBody;
    var v162 = v388[i$$5];
    bHeight$$2 = v162.height;
    cQueue$$1 = new Array;
    cCount = 0;
    var v632 = window.bodyCells;
    var v535 = v632.length;
    var v389 = bCells < v535;
    if (v389) {
      var v633 = window.bodyCells;
      var v536 = v633[bCells];
      v389 = v536 > 0;
    }
    var v164 = v389;
    for (;v164;) {
      var v163 = cCount;
      cCount = cCount + 1;
      var v390 = window.bodyCells;
      var v391 = bCells;
      bCells = bCells + 1;
      cQueue$$1[v163] = v390[v391];
      var v634 = window.bodyCells;
      var v537 = v634.length;
      var v392 = bCells < v537;
      if (v392) {
        var v635 = window.bodyCells;
        var v538 = v635[bCells];
        v392 = v538 > 0;
      }
      v164 = v392;
    }
    buildMenuBody(cQueue$$1, bName$$1, bLevel$$2, bLeft$$2, bTop$$2, bWidth$$2, bHeight$$2);
    cQueue$$1 = null;
    i$$5++;
    var v539 = window.menuBody;
    var v393 = v539.length;
    v165 = i$$5 < v393;
  }
  return;
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
  var v636 = window.menuCells;
  var v540 = v636.length;
  var v394 = i$$6 < v540;
  if (v394) {
    var v655 = window.menuCells;
    var v637 = v655[i$$6];
    var v541 = v637.level;
    v394 = v541 >= mLevel$$3;
  }
  var v168 = v394;
  for (;v168;) {
    var v638 = window.menuCells;
    var v542 = v638[i$$6];
    var v395 = v542.level;
    var v167 = v395 == mLevel$$3;
    if (v167) {
      var v543 = window.menuCells;
      var v396 = v543[i$$6];
      var v166 = v396.width;
      sWidth = Math.max(sWidth, v166);
    }
    i$$6++;
    var v639 = window.menuCells;
    var v544 = v639.length;
    var v397 = i$$6 < v544;
    if (v397) {
      var v656 = window.menuCells;
      var v640 = v656[i$$6];
      var v545 = v640.level;
      v397 = v545 >= mLevel$$3;
    }
    v168 = v397;
  }
  var v169 = mLeft$$2 + sWidth;
  sLeft = v169 + 2;
  i$$6 = mIndex;
  var v641 = window.menuCells;
  var v546 = v641.length;
  var v398 = i$$6 < v546;
  if (v398) {
    var v657 = window.menuCells;
    var v642 = v657[i$$6];
    var v547 = v642.level;
    v398 = v547 >= mLevel$$3;
  }
  var v175 = v398;
  for (;v175;) {
    var v170 = queue$$1.length;
    queue$$1[v170] = i$$6;
    var v548 = window.menuCells;
    var v399 = v548[i$$6];
    var v174 = v399.popup;
    if (v174) {
      var v400 = window.menuCells;
      var v171 = v400[i$$6];
      sPopup = v171.popup;
      i$$6++;
      var v172 = mLevel$$3 + 1;
      i$$6 = queueMenuBuilds(i$$6, v172, sPopup, sLeft, sTop);
      var v549 = blInfo.itemHeight;
      var v550 = blInfo.cellOffset;
      var v401 = v549 + v550;
      sTop = sTop + v401;
      var v551 = blInfo.itemHeight;
      var v552 = blInfo.cellOffset;
      var v402 = v551 + v552;
      sHeight = sHeight + v402;
    } else {
      var v553 = window.menuCells;
      var v403 = v553[i$$6];
      var v173 = v403.label;
      if (v173) {
        i$$6++;
        var v554 = blInfo.itemHeight;
        var v555 = blInfo.cellOffset;
        var v404 = v554 + v555;
        sTop = sTop + v404;
        var v556 = blInfo.itemHeight;
        var v557 = blInfo.cellOffset;
        var v405 = v556 + v557;
        sHeight = sHeight + v405;
      } else {
        i$$6++;
        var v406 = blInfo.dividerHeight;
        sTop = sTop + v406;
        var v407 = blInfo.dividerHeight;
        sHeight = sHeight + v407;
      }
    }
    var v643 = window.menuCells;
    var v558 = v643.length;
    var v408 = i$$6 < v558;
    if (v408) {
      var v658 = window.menuCells;
      var v644 = v658[i$$6];
      var v559 = v644.level;
      v408 = v559 >= mLevel$$3;
    }
    v175 = v408;
  }
  var v409 = queue$$1.length;
  var v177 = v409 > 0;
  if (v177) {
    var v410 = blInfo.cellOffset;
    var v176 = sHeight - v410;
    stackMenuBody(queue$$1, mPopup$$2, mLevel$$3, mLeft$$2, mTop$$2, sWidth, v176);
  }
  queue$$1 = null;
  return i$$6;
}
function endSiteMap() {
  return;
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
  var v178 = blInfo.wBarPadding;
  bWidth$$3 = width$$13 + v178;
  var v411 = blInfo.itemHeight;
  var v179 = height$$11 + v411;
  var v180 = blInfo.hBarPadding;
  bHeight$$3 = v179 + v180;
  var v181 = blInfo.itemPadding;
  iPadding = padding + v181;
  bGraphic = graphic;
  var v560 = blInfo.divType;
  var v412 = "<" + v560;
  var v182 = v412 + ' id="menuBar" class="menuBar" ';
  document.write(v182);
  var v183 = setStyle(bLeft$$3, bTop$$3, bWidth$$3, bHeight$$3, 0, null, "visible");
  document.write(v183);
  document.writeln(">");
  var v665 = '<img name="menuImage" src="' + bGraphic;
  var v659 = v665 + '" class="menuBar" border="1" width="';
  var v645 = v659 + width$$13;
  var v561 = v645 + '" height="';
  var v413 = v561 + height$$11;
  var v184 = v413 + '">';
  document.writeln(v184);
  iLeft = blInfo.leftOffset;
  var v185 = blInfo.mBarOffset;
  mTop$$3 = height$$11 + v185;
  var v414 = blInfo.bBarOffset;
  bTop$$3 = bTop$$3 + v414;
  i$$7 = 0;
  var v562 = window.menuCells;
  var v415 = v562.length;
  var v191 = i$$7 < v415;
  for (;v191;) {
    var v563 = window.menuCells;
    var v416 = v563[i$$7];
    var v186 = v416.width;
    iWidth = v186 + iPadding;
    var v417 = bWidth$$3 - iLeft;
    var v418 = blInfo.menuPadding;
    var v187 = v417 + v418;
    iWidth = Math.min(iWidth, v187);
    buildMenuCell(i$$7, iLeft, mTop$$3, iWidth);
    var v564 = window.menuCells;
    var v419 = v564[i$$7];
    var v190 = v419.popup;
    if (v190) {
      var v420 = window.menuCells;
      var v188 = v420[i$$7];
      mPopup = v188.popup;
      i$$7++;
      var v189 = bTop$$3 + bHeight$$3;
      i$$7 = queueMenuBuilds(i$$7, 1, mPopup, bLeft$$3, v189);
    }
    var v565 = blInfo.itemSpacing;
    var v421 = iWidth + v565;
    bLeft$$3 = bLeft$$3 + v421;
    var v566 = blInfo.itemSpacing;
    var v422 = iWidth + v566;
    iLeft = iLeft + v422;
    var v567 = window.menuCells;
    var v423 = v567.length;
    v191 = i$$7 < v423;
  }
  var v568 = blInfo.divType;
  var v424 = "</" + v568;
  var v192 = v424 + ">";
  document.writeln(v192);
  buildMenuBodies();
  document.close();
  return;
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
  var v193 = blInfo.wBarPadding;
  bWidth$$4 = width$$14 + v193;
  bHeight$$4 = height$$12;
  nTopItems = 0;
  i$$8 = 0;
  var v569 = window.menuCells;
  var v425 = v569.length;
  var v195 = i$$8 < v425;
  for (;v195;) {
    var v646 = window.menuCells;
    var v570 = v646[i$$8];
    var v426 = v570.level;
    var v194 = v426 == 0;
    if (v194) {
      nTopItems++;
    }
    i$$8++;
    var v571 = window.menuCells;
    var v427 = v571.length;
    v195 = i$$8 < v427;
  }
  var v428 = blInfo.itemHeight;
  var v429 = blInfo.cellOffset;
  var v196 = v428 + v429;
  mHeight$$1 = nTopItems * v196;
  i$$8 = 0;
  var v197 = blInfo.itemPadding;
  iPadding$$1 = padding$$1 + v197;
  bGraphic$$1 = graphic$$1;
  var v572 = blInfo.divType;
  var v430 = "<" + v572;
  var v198 = v430 + ' id="menuBar" class="menuBar" ';
  document.write(v198);
  var v431 = bHeight$$4 + mHeight$$1;
  var v199 = setStyle(bLeft$$4, bTop$$4, bWidth$$4, v431, 0, null, "visible");
  document.write(v199);
  document.writeln(">");
  var v666 = '<img name="menuImage" src="' + bGraphic$$1;
  var v660 = v666 + '"class="menuBar" border="1" width="';
  var v647 = v660 + width$$14;
  var v573 = v647 + '" height="';
  var v432 = v573 + height$$12;
  var v200 = v432 + '">';
  document.writeln(v200);
  iLeft$$1 = blInfo.leftOffset;
  var v201 = blInfo.mBarOffset;
  mTop$$4 = height$$12 + v201;
  var v433 = blInfo.bBarOffset;
  bTop$$4 = bTop$$4 + v433;
  var v574 = window.menuCells;
  var v434 = v574.length;
  var v208 = i$$8 < v434;
  for (;v208;) {
    var v575 = window.menuCells;
    var v435 = v575[i$$8];
    var v202 = v435.width;
    iWidth$$1 = v202 + iPadding$$1;
    var v436 = bWidth$$4 - iLeft$$1;
    var v437 = blInfo.menuPadding;
    var v203 = v436 + v437;
    iWidth$$1 = Math.min(iWidth$$1, v203);
    buildMenuCell(i$$8, iLeft$$1, mTop$$4, iWidth$$1);
    var v576 = window.menuCells;
    var v438 = v576[i$$8];
    var v207 = v438.popup;
    if (v207) {
      var v439 = window.menuCells;
      var v204 = v439[i$$8];
      mPopup = v204.popup;
      i$$8++;
      var v205 = bLeft$$4 + iWidth$$1;
      var v206 = bTop$$4 + bHeight$$4;
      i$$8 = queueMenuBuilds(i$$8, 1, mPopup, v205, v206);
    }
    var v577 = blInfo.itemHeight;
    var v578 = blInfo.cellOffset;
    var v440 = v577 + v578;
    mTop$$4 = mTop$$4 + v440;
    var v579 = blInfo.itemHeight;
    var v580 = blInfo.cellOffset;
    var v441 = v579 + v580;
    bTop$$4 = bTop$$4 + v441;
    var v581 = window.menuCells;
    var v442 = v581.length;
    v208 = i$$8 < v442;
  }
  var v582 = blInfo.divType;
  var v443 = "</" + v582;
  var v209 = v443 + ">";
  document.writeln(v209);
  buildMenuBodies();
  document.close();
  return;
}
function loadMe() {
  var v210 = this.action;
  eval(v210);
  return;
}
function activateMenus() {
  var mName$$2;
  var mAction$$2;
  var mNode$$7;
  var tStyle;
  var v211 = getLayer(document, "test.cell");
  tStyle = getStyle(v211);
  var v444 = is.ns4;
  var v212 = !v444;
  if (v212) {
    window.mtPassive = tStyle.color;
    window.mbPassive = tStyle.backgroundColor;
    return;
  }
  var v215 = window.menuLayers;
  for (mName$$2 in v215) {
    var v445 = window.menuLayers;
    var v213 = v445[mName$$2];
    mAction$$2 = v213.action;
    mNode$$7 = getLayer(document, mName$$2);
    var v214 = Event.MOUSEDOWN;
    mNode$$7.captureEvents(v214);
    mNode$$7.onmousedown = loadMe;
    mNode$$7.action = mAction$$2;
    mNode$$7.fgColor = window.mtPassive;
  }
  return;
}
function findNode(elMain, mName$$3) {
  var elNode;
  var elIndex;
  elNode = getLayer(elMain, mName$$3);
  elIndex = 0;
  var v446 = !elNode;
  if (v446) {
    v446 = elIndex < stackDepth;
  }
  var v217 = v446;
  for (;v217;) {
    var v216 = nodeStack[elIndex];
    elNode = getLayer(v216, mName$$3);
    elIndex++;
    var v447 = !elNode;
    if (v447) {
      v447 = elIndex < stackDepth;
    }
    v217 = v447;
  }
  return elNode;
}
function clearMenus(mNum) {
  var v218 = stackDepth > mNum;
  for (;v218;) {
    stackDepth--;
    hideLayer();
    nameStack[stackDepth] = 0;
    nodeStack[stackDepth] = 0;
    v218 = stackDepth > mNum;
  }
  return;
}
function unPopMenus(mNum$$1, tag$$3) {
  var v219 = window.mbActive;
  var v220 = window.mtActive;
  setLayerColor(tag$$3, v219, v220);
  clearMenus(mNum$$1);
  var v222 = is.ns4;
  if (v222) {
    var v221 = Event.MOUSEDOWN;
    document.releaseEvents(v221);
  }
  return;
}
function setColorPassive(tag$$4) {
  var v223 = window.mbPassive;
  var v224 = window.mtPassive;
  setLayerColor(tag$$4, v223, v224);
  var v226 = is.ns4;
  if (v226) {
    var v225 = Event.MOUSEDOWN;
    document.captureEvents(v225);
  }
  return;
}
function popMenu(mNum$$2, tag$$5, mName$$4) {
  var style$$7;
  var elLayer$$1;
  clearMenus(mNum$$2);
  var v227 = window.mbActive;
  var v228 = window.mtActive;
  setLayerColor(tag$$5, v227, v228);
  elLayer$$1 = getLayer(document, mName$$4);
  if (elLayer$$1) {
    showLayer(elLayer$$1);
    nameStack[stackDepth] = mName$$4;
    nodeStack[stackDepth] = elLayer$$1;
    stackDepth++;
  }
  var v230 = is.ns4;
  if (v230) {
    var v229 = Event.MOUSEDOWN;
    document.releaseEvents(v229);
  }
  return;
}
function clearAll(e$$4) {
  clearMenus(0);
  return;
}
function initialize() {
  activateMenus();
  return;
}
var NSVisType = new Array;
NSVisType["visible"] = "show";
NSVisType["hidden"] = "hide";
NSVisType["inherit"] = "inherit";
var is = new Is;
var blInfo = new BrowserMenuInfo;
var v583 = blInfo.divType;
var v448 = "<" + v583;
var v231 = v448 + ' id="test.cell"';
document.write(v231);
document.write('" class="menuItem" ');
var v449 = setStyle(0, 0, 100, 20, null, null, "hidden");
var v232 = v449 + ">";
document.write(v232);
document.write("test.cell");
var v584 = blInfo.divType;
var v450 = "</" + v584;
var v233 = v450 + ">";
document.writeln(v233);
var alphaWidth = Array();
alphaWidth["a"] = blInfo.charWidth;
alphaWidth["b"] = blInfo.charWidth;
alphaWidth["c"] = blInfo.charWidth;
alphaWidth["d"] = blInfo.charWidth;
alphaWidth["e"] = blInfo.charWidth;
alphaWidth["f"] = blInfo.charWidth;
alphaWidth["g"] = blInfo.charWidth;
alphaWidth["h"] = blInfo.charWidth;
var v234 = alphaWidth;
var v585 = blInfo.charWidth;
var v451 = v585 * .4;
var v690 = Math.floor(v451);
v234["i"] = v690;
var v235 = alphaWidth;
var v586 = blInfo.charWidth;
var v452 = v586 * .7;
var v691 = Math.floor(v452);
v235["j"] = v691;
alphaWidth["k"] = blInfo.charWidth;
var v236 = alphaWidth;
var v587 = blInfo.charWidth;
var v453 = v587 * .4;
var v692 = Math.floor(v453);
v236["l"] = v692;
var v237 = alphaWidth;
var v588 = blInfo.charWidth;
var v454 = v588 * 1.6;
var v693 = Math.floor(v454);
v237["m"] = v693;
alphaWidth["n"] = blInfo.charWidth;
alphaWidth["o"] = blInfo.charWidth;
alphaWidth["p"] = blInfo.charWidth;
alphaWidth["q"] = blInfo.charWidth;
alphaWidth["r"] = blInfo.charWidth;
alphaWidth["s"] = blInfo.charWidth;
alphaWidth["t"] = blInfo.charWidth;
alphaWidth["u"] = blInfo.charWidth;
alphaWidth["v"] = blInfo.charWidth;
var v238 = alphaWidth;
var v589 = blInfo.charWidth;
var v455 = v589 * 1.8;
var v694 = Math.floor(v455);
v238["w"] = v694;
alphaWidth["x"] = blInfo.charWidth;
alphaWidth["y"] = blInfo.charWidth;
alphaWidth["z"] = blInfo.charWidth;
var v239 = alphaWidth;
var v590 = blInfo.charWidth;
var v456 = v590 * 1.6;
var v695 = Math.floor(v456);
v239["A"] = v695;
var v240 = alphaWidth;
var v591 = blInfo.charWidth;
var v457 = v591 * 1.6;
var v696 = Math.floor(v457);
v240["B"] = v696;
var v241 = alphaWidth;
var v592 = blInfo.charWidth;
var v458 = v592 * 1.6;
var v697 = Math.floor(v458);
v241["C"] = v697;
var v242 = alphaWidth;
var v593 = blInfo.charWidth;
var v459 = v593 * 1.6;
var v698 = Math.floor(v459);
v242["D"] = v698;
var v243 = alphaWidth;
var v594 = blInfo.charWidth;
var v460 = v594 * 1.6;
var v699 = Math.floor(v460);
v243["E"] = v699;
var v244 = alphaWidth;
var v595 = blInfo.charWidth;
var v461 = v595 * 1.6;
var v700 = Math.floor(v461);
v244["F"] = v700;
var v245 = alphaWidth;
var v596 = blInfo.charWidth;
var v462 = v596 * 1.6;
var v701 = Math.floor(v462);
v245["G"] = v701;
var v246 = alphaWidth;
var v597 = blInfo.charWidth;
var v463 = v597 * 1.6;
var v702 = Math.floor(v463);
v246["H"] = v702;
var v247 = alphaWidth;
var v464 = blInfo.charWidth;
var v703 = Math.floor(v464);
v247["I"] = v703;
var v248 = alphaWidth;
var v465 = blInfo.charWidth;
var v704 = Math.floor(v465);
v248["J"] = v704;
var v249 = alphaWidth;
var v598 = blInfo.charWidth;
var v466 = v598 * 1.6;
var v705 = Math.floor(v466);
v249["K"] = v705;
var v250 = alphaWidth;
var v599 = blInfo.charWidth;
var v467 = v599 * 1.6;
var v706 = Math.floor(v467);
v250["L"] = v706;
var v251 = alphaWidth;
var v600 = blInfo.charWidth;
var v468 = v600 * 2;
var v707 = Math.floor(v468);
v251["M"] = v707;
var v252 = alphaWidth;
var v601 = blInfo.charWidth;
var v469 = v601 * 1.6;
var v708 = Math.floor(v469);
v252["N"] = v708;
var v253 = alphaWidth;
var v602 = blInfo.charWidth;
var v470 = v602 * 1.6;
var v709 = Math.floor(v470);
v253["O"] = v709;
var v254 = alphaWidth;
var v603 = blInfo.charWidth;
var v471 = v603 * 1.6;
var v710 = Math.floor(v471);
v254["P"] = v710;
var v255 = alphaWidth;
var v604 = blInfo.charWidth;
var v472 = v604 * 1.6;
var v711 = Math.floor(v472);
v255["Q"] = v711;
var v256 = alphaWidth;
var v605 = blInfo.charWidth;
var v473 = v605 * 1.6;
var v712 = Math.floor(v473);
v256["R"] = v712;
var v257 = alphaWidth;
var v606 = blInfo.charWidth;
var v474 = v606 * 1.6;
var v713 = Math.floor(v474);
v257["S"] = v713;
var v258 = alphaWidth;
var v607 = blInfo.charWidth;
var v475 = v607 * 1.6;
var v714 = Math.floor(v475);
v258["T"] = v714;
var v259 = alphaWidth;
var v608 = blInfo.charWidth;
var v476 = v608 * 1.6;
var v715 = Math.floor(v476);
v259["U"] = v715;
var v260 = alphaWidth;
var v609 = blInfo.charWidth;
var v477 = v609 * 1.6;
var v716 = Math.floor(v477);
v260["V"] = v716;
var v261 = alphaWidth;
var v610 = blInfo.charWidth;
var v478 = v610 * 3;
var v717 = Math.floor(v478);
v261["W"] = v717;
var v262 = alphaWidth;
var v611 = blInfo.charWidth;
var v479 = v611 * 1.6;
var v718 = Math.floor(v479);
v262["X"] = v718;
var v263 = alphaWidth;
var v612 = blInfo.charWidth;
var v480 = v612 * 1.6;
var v719 = Math.floor(v480);
v263["Y"] = v719;
var v264 = alphaWidth;
var v613 = blInfo.charWidth;
var v481 = v613 * 1.6;
var v720 = Math.floor(v481);
v264["Z"] = v720;
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
var v266 = is.ns4;
if (v266) {
  var v265 = Event.MOUSEDOWN;
  document.captureEvents(v265);
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
var v614 = is.w3c;
var v648 = !v614;
if (v648) {
  v614 = is.ie4;
}
var v482 = v614;
var v616 = !v482;
if (v616) {
  var v615 = is.ns4;
  if (v615) {
    var v649 = is.hj;
    v615 = !v649;
  }
  v482 = v615;
}
var v267 = v482;
if (v267) {
  var barTop = 20;
  var barLeft = 50;
  var barWidth = 370;
  var barHeight = 44;
  var itemPadding = 5;
  var barImage = "images/title.png";
  drawHMenuBar();
}
var v269 = is.w3c;
if (v269) {
  document.writeln('<div style="position : relative; top : 15px; float : right; padding-right : 42px; text-align : right">');
  document.writeln('<a href="http://sourceforge.net/projects/jswidgets"><img src="http://sflogo.sourceforge.net/sflogo.php?group_id=33495&type=15" width="150" height="40" border="0" alt="Get Browser-Independent Javascript Widgets at SourceForge.net. Fast, secure and Free Open Source software downloads" /></a>');
  document.writeln("</div>");
} else {
  var v268 = is.ns4;
  if (v268) {
    document.writeln('<layer top="20" left="400">');
    document.writeln('<a href="http://sourceforge.net/projects/jswidgets"><img src="http://sflogo.sourceforge.net/sflogo.php?group_id=33495&type=15" width="150" height="40" border="0" alt="Get Browser-Independent Javascript Widgets at SourceForge.net. Fast, secure and Free Open Source software downloads" /></a>');
    document.writeln("</layer>");
  }
}
var v270 = document.body;
v270.background = "images/researchbg.gif";
var v271 = document.body;
v271.onload = initialize;
var v272 = document.getElementById("cleardiv");
v272.onmouseover = clearAll

JAM.stopProfile('load');
