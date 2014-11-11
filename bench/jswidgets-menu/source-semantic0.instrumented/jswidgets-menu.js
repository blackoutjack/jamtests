function getNSLayer(inNode, inName) {
  var node$$2;
  var i$$1;
  node$$2 = inNode[inName];
  i$$1 = 0;
  var v496 = !node$$2;
  if (v496) {
    v496 = inNode.layers;
  }
  var v277 = v496;
  if (v277) {
    var v632 = inNode.layers;
    var v497 = v632.length;
    v277 = i$$1 < v497;
  }
  var v1 = v277;
  for (;v1;) {
    var v498 = inNode.layers;
    var v278 = v498[i$$1];
    var v0 = v278.document;
    node$$2 = getNSLayer(v0, inName);
    i$$1++;
    var v499 = !node$$2;
    if (v499) {
      v499 = inNode.layers;
    }
    var v279 = v499;
    if (v279) {
      var v633 = inNode.layers;
      var v500 = v633.length;
      v279 = i$$1 < v500;
    }
    v1 = v279;
  }
  return node$$2;
}
function getLayer(inNode$$1, inName$$1) {
  var node$$3;
  var v5 = inNode$$1.getElementById;
  if (v5) {
    introspect(JAM.policy.p1) {
      node$$3 = inNode$$1.getElementById(inName$$1);
    }
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
    var v280 = "Could not find layer " + inName$$1;
    var v6 = v280 + ".";
    alert(v6);
  }
  return node$$3;
}
function getStyle(inNode$$2) {
  var style;
  var v281 = is.w3c;
  var v501 = !v281;
  if (v501) {
    v281 = is.ie4;
  }
  var v9 = v281;
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
  var v282 = is.ie4;
  var v502 = !v282;
  if (v502) {
    v282 = is.w3c;
  }
  var v13 = v282;
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
function hideLayer(mNode$$1) {
  var style$$2;
  style$$2 = getStyle(mNode$$1);
  if (style$$2) {
    style$$2.visibility = "hidden";
  }
  return;
}
function isPositioned(mNode$$2) {
  var v14 = mNode$$2.left;
  var v284 = !v14;
  if (v284) {
    var v283 = mNode$$2.style;
    v14 = v283.left;
  }
  return v14;
}
function layerWidth(mNode$$3) {
  var nWidth;
  var v285 = is.ie4;
  var v503 = !v285;
  if (v503) {
    v285 = is.w3c;
  }
  var v18 = v285;
  if (v18) {
    var v286 = mNode$$3.style;
    var v15 = v286.width;
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
function setStyle(divType, fontSize, left$$2, top$$2, width$$9, height$$8, zIndex, bgColor$$1, visibility) {
  var dStyle;
  var v21 = divType == "layer";
  if (v21) {
    dStyle = 'left="' + left$$2;
    var v287 = '" top="' + top$$2;
    dStyle = dStyle + v287;
    var v288 = '" width="' + width$$9;
    dStyle = dStyle + v288;
    var v289 = '" height="' + height$$8;
    dStyle = dStyle + v289;
    if (zIndex) {
      var v290 = '" z-index="' + zIndex;
      dStyle = dStyle + v290;
    }
    if (bgColor$$1) {
      var v291 = '" bgColor="' + bgColor$$1;
      dStyle = dStyle + v291;
    } else {
      dStyle = dStyle + '" bgColor="#000000';
    }
    if (visibility) {
      var v504 = NSVisType[visibility];
      var v292 = '" visibility="' + v504;
      dStyle = dStyle + v292;
    }
    dStyle = dStyle + '" ';
  } else {
    var v20 = 'style="font-size : ' + fontSize;
    dStyle = v20 + "pt; ";
    var v505 = "left : " + left$$2;
    var v293 = v505 + "px; ";
    dStyle = dStyle + v293;
    var v506 = "top : " + top$$2;
    var v294 = v506 + "px; ";
    dStyle = dStyle + v294;
    var v507 = "width : " + width$$9;
    var v295 = v507 + "px; ";
    dStyle = dStyle + v295;
    var v508 = "height : " + height$$8;
    var v296 = v508 + "px; ";
    dStyle = dStyle + v296;
    if (zIndex) {
      var v509 = "z-index : " + zIndex;
      var v297 = v509 + "; ";
      dStyle = dStyle + v297;
    }
    if (bgColor$$1) {
      var v510 = "background-color : " + bgColor$$1;
      var v298 = v510 + "; ";
      dStyle = dStyle + v298;
    }
    if (visibility) {
      var v511 = "visibility : " + visibility;
      var v299 = v511 + "; ";
      dStyle = dStyle + v299;
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
  var v684 = parseInt(version$$5);
  this.major = v684;
  var v685 = parseFloat(version$$5);
  this.minor = v685;
  var v26 = agent.indexOf("netscape");
  this.nsa = v26 != -1;
  var v27 = agent.indexOf("mozilla");
  this.mza = v27 != -1;
  var v28 = agent.indexOf("galeon");
  this.gla = v28 != -1;
  var v29 = this.mza;
  if (v29) {
    var v300 = this.nsa;
    v29 = !v300;
  }
  this.mza = v29;
  var v34 = this.mza;
  if (v34) {
    var v301 = agent.indexOf("rv:");
    var v30 = v301 + 3;
    var v31 = agent.indexOf(")");
    version$$5 = agent.substring(v30, v31);
    this.nsa = false;
    var v302 = agent.indexOf("rv:");
    var v33 = v302 != -1;
    if (v33) {
      var v686 = parseInt(version$$5);
      this.major = v686;
      var v687 = parseFloat(version$$5);
      this.minor = v687;
      var v32 = this.mza;
      if (v32) {
        var v303 = this.major;
        v32 = v303 == 1;
      }
      this.mz1 = v32;
    } else {
      this.mza = false;
      version$$5 = this.minor;
    }
  }
  var v39 = this.gla;
  if (v39) {
    var v304 = agent.indexOf("galeon/");
    var v35 = v304 + 7;
    var v305 = agent.indexOf("(");
    var v36 = v305 - 1;
    version$$5 = agent.substring(v35, v36);
    this.nsa = false;
    var v306 = agent.indexOf("galeon/");
    var v38 = v306 != -1;
    if (v38) {
      var v688 = parseInt(version$$5);
      this.major = v688;
      var v689 = parseFloat(version$$5);
      this.minor = v689;
      var v37 = this.gla;
      if (v37) {
        var v307 = this.major;
        v37 = v307 == 1;
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
    var v308 = this.major;
    v41 = v308 == 2;
  }
  this.ns2 = v41;
  var v42 = this.nsn;
  if (v42) {
    var v309 = this.major;
    v42 = v309 == 3;
  }
  this.ns3 = v42;
  var v43 = this.nsn;
  if (v43) {
    var v310 = this.major;
    v43 = v310 == 4;
  }
  this.ns4 = v43;
  var v44 = this.nsa;
  if (v44) {
    var v311 = this.major;
    v44 = v311 >= 5;
  }
  this.ns6 = v44;
  var v47 = this.ns6;
  if (v47) {
    var v312 = agent.indexOf("netscape6/");
    var v45 = v312 + 10;
    var v46 = agent.length;
    introspect(JAM.policy.p1) {
      var v690 = agent.slice(v45, v46)
    }
    this.version = v690;
  }
  var v313 = appName.indexOf("internet explorer");
  var v48 = v313 != -1;
  if (v48) {
    var v314 = agent.indexOf("opera");
    v48 = v314 == -1;
  }
  this.ie = v48;
  var v49 = this.ie;
  if (v49) {
    var v315 = this.major;
    v49 = v315 == 3;
  }
  this.ie3 = v49;
  var v316 = this.ie;
  if (v316) {
    var v512 = this.major;
    v316 = v512 == 4;
  }
  var v50 = v316;
  if (v50) {
    var v317 = agent.indexOf("msie 4.");
    v50 = v317 != -1;
  }
  this.ie4 = v50;
  var v318 = this.ie;
  if (v318) {
    var v513 = this.major;
    v318 = v513 == 4;
  }
  var v51 = v318;
  if (v51) {
    var v319 = agent.indexOf("msie 5.");
    v51 = v319 != -1;
  }
  this.ie5 = v51;
  var v320 = this.ie;
  if (v320) {
    var v514 = this.major;
    v320 = v514 == 4;
  }
  var v52 = v320;
  if (v52) {
    var v321 = agent.indexOf("msie 6.");
    v52 = v321 != -1;
  }
  this.ie6 = v52;
  var v515 = this.ie4;
  var v634 = !v515;
  if (v634) {
    v515 = this.ie5;
  }
  var v322 = v515;
  var v516 = !v322;
  if (v516) {
    v322 = this.ie6;
  }
  var v57 = v322;
  if (v57) {
    var v323 = agent.indexOf("msie ");
    var v53 = v323 + 5;
    var v54 = agent.length;
    introspect(JAM.policy.p1) {
      var v691 = agent.slice(v53, v54)
    }
    this.version = v691;
    var v55 = this.version;
    var v324 = this.version;
    var v56 = v324.indexOf(";");
    var v692 = v55.slice(0, v56);
    this.version = v692;
  }
  var v325 = this.ie;
  if (v325) {
    var v517 = this.ie3;
    v325 = !v517;
  }
  var v58 = v325;
  if (v58) {
    var v326 = this.ie4;
    v58 = !v326;
  }
  this.ieX = v58;
  var v59 = agent.indexOf("opera");
  this.op = v59 != -1;
  var v327 = this.op;
  if (v327) {
    var v518 = this.major;
    v327 = v518 == 4;
  }
  var v60 = v327;
  if (v60) {
    var v328 = agent.indexOf("opera 4.");
    v60 = v328 != -1;
  }
  this.op4 = v60;
  var v329 = this.op;
  if (v329) {
    var v519 = this.major;
    v329 = v519 == 4;
  }
  var v61 = v329;
  if (v61) {
    var v330 = agent.indexOf("opera 5.");
    v61 = v330 != -1;
  }
  this.op5 = v61;
  var v331 = this.op;
  if (v331) {
    var v520 = this.major;
    v331 = v520 == 4;
  }
  var v62 = v331;
  if (v62) {
    var v332 = agent.indexOf("opera 6.");
    v62 = v332 != -1;
  }
  this.op6 = v62;
  var v66 = this.op;
  if (v66) {
    this.ie = false;
    this.ie4 = false;
    this.ie5 = false;
    this.ie6 = false;
    var v333 = agent.indexOf("opera");
    var v63 = v333 + 6;
    var v64 = agent.length;
    introspect(JAM.policy.p1) {
      var v693 = agent.slice(v63, v64)
    }
    this.version = v693;
    var v65 = this.version;
    var v694 = parseFloat(v65);
    this.version = v694;
  }
  var v67 = agent.indexOf("konqueror");
  this.kq = v67 != -1;
  var v74 = this.kq;
  if (v74) {
    var v334 = agent.indexOf("konqueror/");
    var v68 = v334 + 10;
    var v69 = agent.length;
    introspect(JAM.policy.p1) {
      var v695 = agent.substring(v68, v69)
    }
    this.version = v695;
    var v70 = this.version;
    var v335 = this.version;
    var v71 = v335.indexOf(";");
    var v696 = v70.substring(0, v71);
    this.version = v696;
    var v72 = this.version;
    var v697 = parseInt(v72);
    this.major = v697;
    var v73 = this.version;
    var v698 = parseFloat(v73);
    this.minor = v698;
    this.mza = false;
  }
  var v75 = this.kq;
  if (v75) {
    var v336 = this.major;
    v75 = v336 == 2;
  }
  this.kq2 = v75;
  var v76 = this.kq;
  if (v76) {
    var v337 = this.major;
    v76 = v337 == 3;
  }
  this.kq3 = v76;
  var v338 = document.getElementById;
  var v77 = !v338;
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
  var v339 = is.ie4;
  var v521 = !v339;
  if (v521) {
    v339 = is.w3c;
  }
  var v83 = v339;
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
  var v340 = is.ie4;
  var v522 = !v340;
  if (v522) {
    v340 = is.w3c;
  }
  var v86 = v340;
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
  var v341 = is.ie4;
  var v524 = !v341;
  if (v524) {
    var v523 = is.w3c;
    if (v523) {
      var v665 = is.ns6;
      var v676 = !v665;
      if (v676) {
        v665 = is.mza;
      }
      var v635 = v665;
      v523 = !v635;
    }
    v341 = v523;
  }
  var v88 = v341;
  if (v88) {
    leftPos = event$$1.clientX;
  } else {
    var v525 = is.ns4;
    var v636 = !v525;
    if (v636) {
      v525 = is.ns6;
    }
    var v342 = v525;
    var v526 = !v342;
    if (v526) {
      v342 = is.mza;
    }
    var v87 = v342;
    if (v87) {
      leftPos = event$$1.pageX;
    }
  }
  return leftPos;
}
function mousePosTop(event$$2) {
  var topPos;
  var v343 = is.ie4;
  var v528 = !v343;
  if (v528) {
    var v527 = is.w3c;
    if (v527) {
      var v666 = is.ns6;
      var v677 = !v666;
      if (v677) {
        v666 = is.mza;
      }
      var v637 = v666;
      v527 = !v637;
    }
    v343 = v527;
  }
  var v90 = v343;
  if (v90) {
    topPos = event$$2.clientY;
  } else {
    var v529 = is.ns4;
    var v638 = !v529;
    if (v638) {
      v529 = is.ns6;
    }
    var v344 = v529;
    var v530 = !v344;
    if (v530) {
      v344 = is.mza;
    }
    var v89 = v344;
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
      var v345 = is.op5;
      var v531 = !v345;
      if (v531) {
        v345 = is.op6;
      }
      var v100 = v345;
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
              var v532 = is.mza;
              var v639 = !v532;
              if (v639) {
                v532 = is.gla;
              }
              var v346 = v532;
              var v533 = !v346;
              if (v533) {
                v346 = is.ns6;
              }
              var v96 = v346;
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
function startSiteMap(mName, mTarget) {
  window.menuName = mName;
  window.menuTarget = mTarget;
  window.menuPntr = "images/tri.gif";
  var v103 = window;
  var v699 = new Array;
  v103.menuCells = v699;
  window.menuPopups = 0;
  window.menuHeads = 0;
  window.menuLevel = 0;
  window.menuMain = 0;
  var v104 = window;
  var v700 = new Object;
  v104.menuLayers = v700;
  var v105 = window;
  var v701 = new Array;
  v105.menuStack = v701;
  var v106 = window;
  var v702 = new Array;
  v106.menuBody = v702;
  var v107 = window;
  var v703 = new Array;
  v107.bodyCells = v703;
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
function bodyItem(cells, popup$$1, level$$8, left$$3, top$$3, width$$11, height$$9) {
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
  var v347 = window.bodyCells;
  var v109 = v347.length;
  mBody = new bodyItem(v109, bPopup, bLevel, bLeft, bTop, bWidth, bHeight);
  var v110 = window.menuBody;
  var v348 = window.menuBody;
  var v111 = v348.length;
  v110[v111] = mBody;
  i$$2 = 0;
  var v349 = queue.length;
  var v114 = i$$2 < v349;
  for (;v114;) {
    var v112 = window.bodyCells;
    var v350 = window.bodyCells;
    var v113 = v350.length;
    v112[v113] = queue[i$$2];
    i$$2++;
    var v351 = queue.length;
    v114 = i$$2 < v351;
  }
  var v115 = window.bodyCells;
  var v352 = window.bodyCells;
  var v116 = v352.length;
  v115[v116] = 0;
  return;
}
function addMenuDivider() {
  var mItem;
  var mLevel;
  mLevel = window.menuLevel;
  mItem = new menuItem(0, 0, 0, mLevel, 0);
  var v117 = window.menuCells;
  var v353 = window.menuCells;
  var v118 = v353.length;
  v117[v118] = mItem;
  return;
}
function estLabelWidth(label$$1) {
  var lWidth = 0;
  var i$$3;
  i$$3 = 0;
  var v354 = label$$1.length;
  var v119 = i$$3 < v354;
  for (;v119;) {
    var v534 = alphaWidth;
    introspect(JAM.policy.p1) {
      var v535 = label$$1.charAt(i$$3)
    }
    var v355 = v534[v535];
    lWidth = lWidth + v355;
    i$$3++;
    var v356 = label$$1.length;
    v119 = i$$3 < v356;
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
    var v357 = "No label given for action " + action$$1;
    var v121 = v357 + ".";
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
  var v358 = mPopup$$1;
  if (v358) {
    v358 = mLevel$$1 > 0;
  }
  var v124 = v358;
  if (v124) {
    mWidth = mWidth + 15;
  }
  var v125 = mLevel$$1 == 0;
  if (v125) {
    window.menuHeads++;
  }
  mItem$$1 = new menuItem(mLabel$$1, mAction, mWidth, mLevel$$1, mPopup$$1);
  var v126 = window.menuCells;
  var v359 = window.menuCells;
  var v127 = v359.length;
  v126[v127] = mItem$$1;
  return;
}
function startMenu(label$$3, action$$2) {
  var v360 = window.menuPopups;
  var v640 = window.menuPopups;
  window.menuPopups = v640 + 1;
  var v128 = "popup" + v360;
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
function buildMenuCell(index$$39, left$$4, top$$4, width$$12, height$$10) {
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
  var v361 = window.menuCells;
  var v129 = v361[index$$39];
  mLevel$$2 = v129.level;
  mLeft = left$$4;
  mTop = top$$4;
  mWidth$$1 = width$$12;
  mHeight = height$$10;
  var v362 = window.menuCells;
  var v130 = v362[index$$39];
  mLabel$$2 = v130.label;
  var v363 = window.menuCells;
  var v131 = v363[index$$39];
  mAction$$1 = v131.action;
  var v641 = blInfo.divType;
  var v536 = "<" + v641;
  var v364 = v536 + ' id="';
  var v132 = v364 + mName$$1;
  introspect(JAM.policy.p1) {
    document.write(v132);
  }
  var v365 = '" class="' + mClass;
  var v133 = v365 + '" ';
  introspect(JAM.policy.p1) {
    document.write(v133);
  }
  var v366 = blInfo.divType;
  var v367 = blInfo.fontSize;
  var v368 = window.mbPassive;
  var v134 = setStyle(v366, v367, mLeft, mTop, mWidth$$1, mHeight, 0, v368, "inherit");
  introspect(JAM.policy.p1) {
    document.write(v134);
  }
  var v369 = ' onclick="' + mAction$$1;
  var v135 = v369 + '" ';
  introspect(JAM.policy.p1) {
    document.write(v135);
  }
  var v370 = window.menuCells;
  var v136 = v370[index$$39];
  mPopup = v136.popup;
  if (mPopup) {
    var v682 = 'onmouseover="popMenu(' + mLevel$$2;
    var v678 = v682 + ",'";
    var v667 = v678 + mName$$1;
    var v642 = v667 + "','";
    var v537 = v642 + mPopup;
    var v371 = v537 + "'";
    var v137 = v371 + ');" ';
    introspect(JAM.policy.p1) {
      document.write(v137);
    }
    var v643 = 'onmouseout="setColorPassive(' + "'";
    var v538 = v643 + mName$$1;
    var v372 = v538 + "'";
    var v138 = v372 + ');">';
    introspect(JAM.policy.p1) {
      document.write(v138);
    }
  } else {
    var v668 = 'onmouseover="unPopMenus(' + mLevel$$2;
    var v644 = v668 + ",'";
    var v539 = v644 + mName$$1;
    var v373 = v539 + "'";
    var v139 = v373 + ');" ';
    introspect(JAM.policy.p1) {
      document.write(v139);
    }
    var v645 = 'onmouseout="setColorPassive(' + "'";
    var v540 = v645 + mName$$1;
    var v374 = v540 + "'";
    var v140 = v374 + ');">';
    introspect(JAM.policy.p1) {
      document.write(v140);
    }
  }
  var v141 = window.menuLayers;
  var v704 = new menuLayer(mLabel$$2, mAction$$1);
  v141[mName$$1] = v704;
  var v375 = blInfo.divType;
  var v143 = v375 == "layer";
  if (v143) {
    introspect(JAM.policy.p1) {
      var v142 = mLabel$$2.fontcolor(mtPassive)
    }
    introspect(JAM.policy.p1) {
      document.write(v142);
    }
  } else {
    introspect(JAM.policy.p1) {
      document.write(mLabel$$2);
    }
  }
  var v376 = mPopup;
  if (v376) {
    v376 = mLevel$$2 >= 1;
  }
  var v145 = v376;
  if (v145) {
    var v541 = window.menuPntr;
    var v377 = '&nbsp;<img src="' + v541;
    var v144 = v377 + '" border="0">';
    introspect(JAM.policy.p1) {
      document.write(v144);
    }
  }
  var v542 = blInfo.divType;
  var v378 = "</" + v542;
  var v146 = v378 + ">";
  introspect(JAM.policy.p1) {
    document.writeln(v146);
  }
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
  var v683 = blInfo.divType;
  var v679 = "<" + v683;
  var v669 = v679 + ' id="';
  var v646 = v669 + bName;
  var v543 = v646 + '" class="';
  var v379 = v543 + bClass;
  var v149 = v379 + '" ';
  introspect(JAM.policy.p1) {
    document.write(v149);
  }
  var v380 = blInfo.divType;
  var v381 = blInfo.fontSize;
  var v382 = bLevel$$1 + 1;
  var v150 = setStyle(v380, v381, bLeft$$1, bTop$$1, lWidth$$1, lHeight, v382, "#000000", "hidden");
  introspect(JAM.policy.p1) {
    document.write(v150);
  }
  document.writeln(">");
  mLeft$$1 = blInfo.leftOffset;
  mTop$$1 = blInfo.mTopOffset;
  i$$4 = 0;
  var v383 = cQueue.length;
  var v155 = i$$4 < v383;
  for (;v155;) {
    var v384 = window.menuCells;
    var v385 = cQueue[i$$4];
    var v151 = v384[v385];
    mLabel = v151.label;
    if (mLabel) {
      var v152 = cQueue[i$$4];
      var v153 = blInfo.itemHeight;
      buildMenuCell(v152, mLeft$$1, mTop$$1, bWidth$$1, v153);
      var v544 = blInfo.itemHeight;
      var v545 = blInfo.cellOffset;
      var v386 = v544 + v545;
      mTop$$1 = mTop$$1 + v386;
    } else {
      var v154 = mLabel == 0;
      if (v154) {
        var v387 = blInfo.dividerHeight;
        mTop$$1 = mTop$$1 + v387;
      } else {
        alert("Expecting label in buildMenuBody.");
        return 0;
      }
    }
    i$$4++;
    var v388 = cQueue.length;
    v155 = i$$4 < v388;
  }
  var v546 = blInfo.divType;
  var v389 = "</" + v546;
  var v156 = v389 + ">";
  introspect(JAM.policy.p1) {
    document.writeln(v156);
  }
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
  var v547 = window.menuBody;
  var v390 = v547.length;
  var v166 = i$$5 < v390;
  for (;v166;) {
    var v391 = window.menuBody;
    var v157 = v391[i$$5];
    bCells = v157.cells;
    var v392 = window.menuBody;
    var v158 = v392[i$$5];
    bName$$1 = v158.popup;
    var v393 = window.menuBody;
    var v159 = v393[i$$5];
    bLevel$$2 = v159.level;
    var v394 = window.menuBody;
    var v160 = v394[i$$5];
    bLeft$$2 = v160.left;
    var v395 = window.menuBody;
    var v161 = v395[i$$5];
    bTop$$2 = v161.top;
    var v396 = window.menuBody;
    var v162 = v396[i$$5];
    bWidth$$2 = v162.width;
    var v397 = window.menuBody;
    var v163 = v397[i$$5];
    bHeight$$2 = v163.height;
    cQueue$$1 = new Array;
    cCount = 0;
    var v647 = window.bodyCells;
    var v548 = v647.length;
    var v398 = bCells < v548;
    if (v398) {
      var v648 = window.bodyCells;
      var v549 = v648[bCells];
      v398 = v549 > 0;
    }
    var v165 = v398;
    for (;v165;) {
      var v164 = cCount;
      cCount = cCount + 1;
      var v399 = window.bodyCells;
      var v400 = bCells;
      bCells = bCells + 1;
      cQueue$$1[v164] = v399[v400];
      var v649 = window.bodyCells;
      var v550 = v649.length;
      var v401 = bCells < v550;
      if (v401) {
        var v650 = window.bodyCells;
        var v551 = v650[bCells];
        v401 = v551 > 0;
      }
      v165 = v401;
    }
    buildMenuBody(cQueue$$1, bName$$1, bLevel$$2, bLeft$$2, bTop$$2, bWidth$$2, bHeight$$2);
    cQueue$$1 = null;
    i$$5++;
    var v552 = window.menuBody;
    var v402 = v552.length;
    v166 = i$$5 < v402;
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
  var v651 = window.menuCells;
  var v553 = v651.length;
  var v403 = i$$6 < v553;
  if (v403) {
    var v670 = window.menuCells;
    var v652 = v670[i$$6];
    var v554 = v652.level;
    v403 = v554 >= mLevel$$3;
  }
  var v169 = v403;
  for (;v169;) {
    var v653 = window.menuCells;
    var v555 = v653[i$$6];
    var v404 = v555.level;
    var v168 = v404 == mLevel$$3;
    if (v168) {
      var v556 = window.menuCells;
      var v405 = v556[i$$6];
      var v167 = v405.width;
      introspect(JAM.policy.p1) {
        sWidth = Math.max(sWidth, v167);
      }
    }
    i$$6++;
    var v654 = window.menuCells;
    var v557 = v654.length;
    var v406 = i$$6 < v557;
    if (v406) {
      var v671 = window.menuCells;
      var v655 = v671[i$$6];
      var v558 = v655.level;
      v406 = v558 >= mLevel$$3;
    }
    v169 = v406;
  }
  var v170 = mLeft$$2 + sWidth;
  sLeft = v170 + 2;
  i$$6 = mIndex;
  var v656 = window.menuCells;
  var v559 = v656.length;
  var v407 = i$$6 < v559;
  if (v407) {
    var v672 = window.menuCells;
    var v657 = v672[i$$6];
    var v560 = v657.level;
    v407 = v560 >= mLevel$$3;
  }
  var v176 = v407;
  for (;v176;) {
    var v171 = queue$$1.length;
    queue$$1[v171] = i$$6;
    var v561 = window.menuCells;
    var v408 = v561[i$$6];
    var v175 = v408.popup;
    if (v175) {
      var v409 = window.menuCells;
      var v172 = v409[i$$6];
      sPopup = v172.popup;
      i$$6++;
      var v173 = mLevel$$3 + 1;
      i$$6 = queueMenuBuilds(i$$6, v173, sPopup, sLeft, sTop);
      var v562 = blInfo.itemHeight;
      var v563 = blInfo.cellOffset;
      var v410 = v562 + v563;
      sTop = sTop + v410;
      var v564 = blInfo.itemHeight;
      var v565 = blInfo.cellOffset;
      var v411 = v564 + v565;
      sHeight = sHeight + v411;
    } else {
      var v566 = window.menuCells;
      var v412 = v566[i$$6];
      var v174 = v412.label;
      if (v174) {
        i$$6++;
        var v567 = blInfo.itemHeight;
        var v568 = blInfo.cellOffset;
        var v413 = v567 + v568;
        sTop = sTop + v413;
        var v569 = blInfo.itemHeight;
        var v570 = blInfo.cellOffset;
        var v414 = v569 + v570;
        sHeight = sHeight + v414;
      } else {
        i$$6++;
        var v415 = blInfo.dividerHeight;
        sTop = sTop + v415;
        var v416 = blInfo.dividerHeight;
        sHeight = sHeight + v416;
      }
    }
    var v658 = window.menuCells;
    var v571 = v658.length;
    var v417 = i$$6 < v571;
    if (v417) {
      var v673 = window.menuCells;
      var v659 = v673[i$$6];
      var v572 = v659.level;
      v417 = v572 >= mLevel$$3;
    }
    v176 = v417;
  }
  var v418 = queue$$1.length;
  var v178 = v418 > 0;
  if (v178) {
    var v419 = blInfo.cellOffset;
    var v177 = sHeight - v419;
    stackMenuBody(queue$$1, mPopup$$2, mLevel$$3, mLeft$$2, mTop$$2, sWidth, v177);
  }
  queue$$1 = null;
  return i$$6;
}
function endSiteMap() {
  return;
}
function drawHMenuBar(left$$5, top$$5, width$$13, height$$11, padding, graphic) {
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
  var v179 = blInfo.wBarPadding;
  bWidth$$3 = width$$13 + v179;
  var v420 = blInfo.itemHeight;
  var v180 = height$$11 + v420;
  var v181 = blInfo.hBarPadding;
  bHeight$$3 = v180 + v181;
  var v182 = blInfo.itemPadding;
  iPadding = padding + v182;
  bGraphic = graphic;
  var v573 = blInfo.divType;
  var v421 = "<" + v573;
  var v183 = v421 + ' id="menuBar" class="menuBar" ';
  introspect(JAM.policy.p1) {
    document.write(v183);
  }
  var v422 = blInfo.divType;
  var v423 = blInfo.fontSize;
  var v184 = setStyle(v422, v423, bLeft$$3, bTop$$3, bWidth$$3, bHeight$$3, 0, null, "visible");
  introspect(JAM.policy.p1) {
    document.write(v184);
  }
  document.writeln(">");
  var v680 = '<img name="menuImage" src="' + bGraphic;
  var v674 = v680 + '" class="menuBar" border="1" width="';
  var v660 = v674 + width$$13;
  var v574 = v660 + '" height="';
  var v424 = v574 + height$$11;
  var v185 = v424 + '">';
  introspect(JAM.policy.p1) {
    document.writeln(v185);
  }
  iLeft = blInfo.leftOffset;
  var v186 = blInfo.mBarOffset;
  mTop$$3 = height$$11 + v186;
  var v425 = blInfo.bBarOffset;
  bTop$$3 = bTop$$3 + v425;
  i$$7 = 0;
  var v575 = window.menuCells;
  var v426 = v575.length;
  var v193 = i$$7 < v426;
  for (;v193;) {
    var v576 = window.menuCells;
    var v427 = v576[i$$7];
    var v187 = v427.width;
    iWidth = v187 + iPadding;
    var v428 = bWidth$$3 - iLeft;
    var v429 = blInfo.menuPadding;
    var v188 = v428 + v429;
    introspect(JAM.policy.p1) {
      iWidth = Math.min(iWidth, v188);
    }
    var v189 = blInfo.itemHeight;
    buildMenuCell(i$$7, iLeft, mTop$$3, iWidth, v189);
    var v577 = window.menuCells;
    var v430 = v577[i$$7];
    var v192 = v430.popup;
    if (v192) {
      var v431 = window.menuCells;
      var v190 = v431[i$$7];
      mPopup = v190.popup;
      i$$7++;
      var v191 = bTop$$3 + bHeight$$3;
      i$$7 = queueMenuBuilds(i$$7, 1, mPopup, bLeft$$3, v191);
    }
    var v578 = blInfo.itemSpacing;
    var v432 = iWidth + v578;
    bLeft$$3 = bLeft$$3 + v432;
    var v579 = blInfo.itemSpacing;
    var v433 = iWidth + v579;
    iLeft = iLeft + v433;
    var v580 = window.menuCells;
    var v434 = v580.length;
    v193 = i$$7 < v434;
  }
  var v581 = blInfo.divType;
  var v435 = "</" + v581;
  var v194 = v435 + ">";
  introspect(JAM.policy.p1) {
    document.writeln(v194);
  }
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
  var v195 = blInfo.wBarPadding;
  bWidth$$4 = width$$14 + v195;
  bHeight$$4 = height$$12;
  nTopItems = 0;
  i$$8 = 0;
  var v582 = window.menuCells;
  var v436 = v582.length;
  var v197 = i$$8 < v436;
  for (;v197;) {
    var v661 = window.menuCells;
    var v583 = v661[i$$8];
    var v437 = v583.level;
    var v196 = v437 == 0;
    if (v196) {
      nTopItems++;
    }
    i$$8++;
    var v584 = window.menuCells;
    var v438 = v584.length;
    v197 = i$$8 < v438;
  }
  var v439 = blInfo.itemHeight;
  var v440 = blInfo.cellOffset;
  var v198 = v439 + v440;
  mHeight$$1 = nTopItems * v198;
  i$$8 = 0;
  var v199 = blInfo.itemPadding;
  iPadding$$1 = padding$$1 + v199;
  bGraphic$$1 = graphic$$1;
  var v585 = blInfo.divType;
  var v441 = "<" + v585;
  var v200 = v441 + ' id="menuBar" class="menuBar" ';
  introspect(JAM.policy.p1) {
    document.write(v200);
  }
  var v442 = blInfo.divType;
  var v443 = blInfo.fontSize;
  var v444 = bHeight$$4 + mHeight$$1;
  var v201 = setStyle(v442, v443, bLeft$$4, bTop$$4, bWidth$$4, v444, 0, null, "visible");
  introspect(JAM.policy.p1) {
    document.write(v201);
  }
  document.writeln(">");
  var v681 = '<img name="menuImage" src="' + bGraphic$$1;
  var v675 = v681 + '"class="menuBar" border="1" width="';
  var v662 = v675 + width$$14;
  var v586 = v662 + '" height="';
  var v445 = v586 + height$$12;
  var v202 = v445 + '">';
  introspect(JAM.policy.p1) {
    document.writeln(v202);
  }
  iLeft$$1 = blInfo.leftOffset;
  var v203 = blInfo.mBarOffset;
  mTop$$4 = height$$12 + v203;
  var v446 = blInfo.bBarOffset;
  bTop$$4 = bTop$$4 + v446;
  var v587 = window.menuCells;
  var v447 = v587.length;
  var v211 = i$$8 < v447;
  for (;v211;) {
    var v588 = window.menuCells;
    var v448 = v588[i$$8];
    var v204 = v448.width;
    iWidth$$1 = v204 + iPadding$$1;
    var v449 = bWidth$$4 - iLeft$$1;
    var v450 = blInfo.menuPadding;
    var v205 = v449 + v450;
    introspect(JAM.policy.p1) {
      iWidth$$1 = Math.min(iWidth$$1, v205);
    }
    var v206 = blInfo.itemHeight;
    buildMenuCell(i$$8, iLeft$$1, mTop$$4, iWidth$$1, v206);
    var v589 = window.menuCells;
    var v451 = v589[i$$8];
    var v210 = v451.popup;
    if (v210) {
      var v452 = window.menuCells;
      var v207 = v452[i$$8];
      mPopup = v207.popup;
      i$$8++;
      var v208 = bLeft$$4 + iWidth$$1;
      var v209 = bTop$$4 + bHeight$$4;
      i$$8 = queueMenuBuilds(i$$8, 1, mPopup, v208, v209);
    }
    var v590 = blInfo.itemHeight;
    var v591 = blInfo.cellOffset;
    var v453 = v590 + v591;
    mTop$$4 = mTop$$4 + v453;
    var v592 = blInfo.itemHeight;
    var v593 = blInfo.cellOffset;
    var v454 = v592 + v593;
    bTop$$4 = bTop$$4 + v454;
    var v594 = window.menuCells;
    var v455 = v594.length;
    v211 = i$$8 < v455;
  }
  var v595 = blInfo.divType;
  var v456 = "</" + v595;
  var v212 = v456 + ">";
  introspect(JAM.policy.p1) {
    document.writeln(v212);
  }
  buildMenuBodies();
  document.close();
  return;
}
function loadMe() {
  var v213 = this.action;
  eval(v213);
  return;
}
function activateMenus() {
  var mName$$2;
  var mAction$$2;
  var mNode$$7;
  var tStyle;
  var v214 = getLayer(document, "test.cell");
  tStyle = getStyle(v214);
  var v457 = is.ns4;
  var v215 = !v457;
  if (v215) {
    window.mtPassive = tStyle.color;
    window.mbPassive = tStyle.backgroundColor;
    return;
  }
  var v218 = window.menuLayers;
  for (mName$$2 in v218) {
    var v458 = window.menuLayers;
    var v216 = v458[mName$$2];
    mAction$$2 = v216.action;
    mNode$$7 = getLayer(document, mName$$2);
    var v217 = Event.MOUSEDOWN;
    introspect(JAM.policy.p1) {
      mNode$$7.captureEvents(v217);
    }
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
  var v459 = !elNode;
  if (v459) {
    v459 = elIndex < stackDepth;
  }
  var v220 = v459;
  for (;v220;) {
    var v219 = nodeStack[elIndex];
    elNode = getLayer(v219, mName$$3);
    elIndex++;
    var v460 = !elNode;
    if (v460) {
      v460 = elIndex < stackDepth;
    }
    v220 = v460;
  }
  return elNode;
}
function clearMenus(mNum) {
  var v222 = stackDepth > mNum;
  for (;v222;) {
    stackDepth--;
    var v221 = nodeStack[stackDepth];
    hideLayer(v221);
    nameStack[stackDepth] = 0;
    nodeStack[stackDepth] = 0;
    v222 = stackDepth > mNum;
  }
  return;
}
function unPopMenus(mNum$$1, tag$$3) {
  var v223 = window.mbActive;
  var v224 = window.mtActive;
  setLayerColor(tag$$3, v223, v224);
  clearMenus(mNum$$1);
  var v226 = is.ns4;
  if (v226) {
    var v225 = Event.MOUSEDOWN;
    introspect(JAM.policy.p1) {
      document.releaseEvents(v225);
    }
  }
  return;
}
function setColorPassive(tag$$4) {
  var v227 = window.mbPassive;
  var v228 = window.mtPassive;
  setLayerColor(tag$$4, v227, v228);
  var v230 = is.ns4;
  if (v230) {
    var v229 = Event.MOUSEDOWN;
    introspect(JAM.policy.p1) {
      document.captureEvents(v229);
    }
  }
  return;
}
function popMenu(mNum$$2, tag$$5, mName$$4) {
  var style$$7;
  var elLayer$$1;
  clearMenus(mNum$$2);
  var v231 = window.mbActive;
  var v232 = window.mtActive;
  setLayerColor(tag$$5, v231, v232);
  elLayer$$1 = getLayer(document, mName$$4);
  if (elLayer$$1) {
    showLayer(elLayer$$1);
    nameStack[stackDepth] = mName$$4;
    nodeStack[stackDepth] = elLayer$$1;
    stackDepth++;
  }
  var v234 = is.ns4;
  if (v234) {
    var v233 = Event.MOUSEDOWN;
    introspect(JAM.policy.p1) {
      document.releaseEvents(v233);
    }
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
var v596 = blInfo.divType;
var v461 = "<" + v596;
var v235 = v461 + ' id="test.cell"';
introspect(JAM.policy.p1) {
  document.write(v235);
}
document.write('" class="menuItem" ');
var v597 = blInfo.divType;
var v598 = blInfo.fontSize;
var v462 = setStyle(v597, v598, 0, 0, 100, 20, null, null, "hidden");
var v236 = v462 + ">";
introspect(JAM.policy.p1) {
  document.write(v236);
}
document.write("test.cell");
var v599 = blInfo.divType;
var v463 = "</" + v599;
var v237 = v463 + ">";
introspect(JAM.policy.p1) {
  document.writeln(v237);
}
var alphaWidth = Array();
alphaWidth["a"] = blInfo.charWidth;
alphaWidth["b"] = blInfo.charWidth;
alphaWidth["c"] = blInfo.charWidth;
alphaWidth["d"] = blInfo.charWidth;
alphaWidth["e"] = blInfo.charWidth;
alphaWidth["f"] = blInfo.charWidth;
alphaWidth["g"] = blInfo.charWidth;
alphaWidth["h"] = blInfo.charWidth;
var v238 = alphaWidth;
var v600 = blInfo.charWidth;
var v464 = v600 * .4;
introspect(JAM.policy.p1) {
  var v705 = Math.floor(v464)
}
v238["i"] = v705;
var v239 = alphaWidth;
var v601 = blInfo.charWidth;
var v465 = v601 * .7;
introspect(JAM.policy.p1) {
  var v706 = Math.floor(v465)
}
v239["j"] = v706;
alphaWidth["k"] = blInfo.charWidth;
var v240 = alphaWidth;
var v602 = blInfo.charWidth;
var v466 = v602 * .4;
introspect(JAM.policy.p1) {
  var v707 = Math.floor(v466)
}
v240["l"] = v707;
var v241 = alphaWidth;
var v603 = blInfo.charWidth;
var v467 = v603 * 1.6;
introspect(JAM.policy.p1) {
  var v708 = Math.floor(v467)
}
v241["m"] = v708;
alphaWidth["n"] = blInfo.charWidth;
alphaWidth["o"] = blInfo.charWidth;
alphaWidth["p"] = blInfo.charWidth;
alphaWidth["q"] = blInfo.charWidth;
alphaWidth["r"] = blInfo.charWidth;
alphaWidth["s"] = blInfo.charWidth;
alphaWidth["t"] = blInfo.charWidth;
alphaWidth["u"] = blInfo.charWidth;
alphaWidth["v"] = blInfo.charWidth;
var v242 = alphaWidth;
var v604 = blInfo.charWidth;
var v468 = v604 * 1.8;
introspect(JAM.policy.p1) {
  var v709 = Math.floor(v468)
}
v242["w"] = v709;
alphaWidth["x"] = blInfo.charWidth;
alphaWidth["y"] = blInfo.charWidth;
alphaWidth["z"] = blInfo.charWidth;
var v243 = alphaWidth;
var v605 = blInfo.charWidth;
var v469 = v605 * 1.6;
introspect(JAM.policy.p1) {
  var v710 = Math.floor(v469)
}
v243["A"] = v710;
var v244 = alphaWidth;
var v606 = blInfo.charWidth;
var v470 = v606 * 1.6;
introspect(JAM.policy.p1) {
  var v711 = Math.floor(v470)
}
v244["B"] = v711;
var v245 = alphaWidth;
var v607 = blInfo.charWidth;
var v471 = v607 * 1.6;
introspect(JAM.policy.p1) {
  var v712 = Math.floor(v471)
}
v245["C"] = v712;
var v246 = alphaWidth;
var v608 = blInfo.charWidth;
var v472 = v608 * 1.6;
introspect(JAM.policy.p1) {
  var v713 = Math.floor(v472)
}
v246["D"] = v713;
var v247 = alphaWidth;
var v609 = blInfo.charWidth;
var v473 = v609 * 1.6;
introspect(JAM.policy.p1) {
  var v714 = Math.floor(v473)
}
v247["E"] = v714;
var v248 = alphaWidth;
var v610 = blInfo.charWidth;
var v474 = v610 * 1.6;
introspect(JAM.policy.p1) {
  var v715 = Math.floor(v474)
}
v248["F"] = v715;
var v249 = alphaWidth;
var v611 = blInfo.charWidth;
var v475 = v611 * 1.6;
introspect(JAM.policy.p1) {
  var v716 = Math.floor(v475)
}
v249["G"] = v716;
var v250 = alphaWidth;
var v612 = blInfo.charWidth;
var v476 = v612 * 1.6;
introspect(JAM.policy.p1) {
  var v717 = Math.floor(v476)
}
v250["H"] = v717;
var v251 = alphaWidth;
var v477 = blInfo.charWidth;
introspect(JAM.policy.p1) {
  var v718 = Math.floor(v477)
}
v251["I"] = v718;
var v252 = alphaWidth;
var v478 = blInfo.charWidth;
introspect(JAM.policy.p1) {
  var v719 = Math.floor(v478)
}
v252["J"] = v719;
var v253 = alphaWidth;
var v613 = blInfo.charWidth;
var v479 = v613 * 1.6;
introspect(JAM.policy.p1) {
  var v720 = Math.floor(v479)
}
v253["K"] = v720;
var v254 = alphaWidth;
var v614 = blInfo.charWidth;
var v480 = v614 * 1.6;
introspect(JAM.policy.p1) {
  var v721 = Math.floor(v480)
}
v254["L"] = v721;
var v255 = alphaWidth;
var v615 = blInfo.charWidth;
var v481 = v615 * 2;
introspect(JAM.policy.p1) {
  var v722 = Math.floor(v481)
}
v255["M"] = v722;
var v256 = alphaWidth;
var v616 = blInfo.charWidth;
var v482 = v616 * 1.6;
introspect(JAM.policy.p1) {
  var v723 = Math.floor(v482)
}
v256["N"] = v723;
var v257 = alphaWidth;
var v617 = blInfo.charWidth;
var v483 = v617 * 1.6;
introspect(JAM.policy.p1) {
  var v724 = Math.floor(v483)
}
v257["O"] = v724;
var v258 = alphaWidth;
var v618 = blInfo.charWidth;
var v484 = v618 * 1.6;
introspect(JAM.policy.p1) {
  var v725 = Math.floor(v484)
}
v258["P"] = v725;
var v259 = alphaWidth;
var v619 = blInfo.charWidth;
var v485 = v619 * 1.6;
introspect(JAM.policy.p1) {
  var v726 = Math.floor(v485)
}
v259["Q"] = v726;
var v260 = alphaWidth;
var v620 = blInfo.charWidth;
var v486 = v620 * 1.6;
introspect(JAM.policy.p1) {
  var v727 = Math.floor(v486)
}
v260["R"] = v727;
var v261 = alphaWidth;
var v621 = blInfo.charWidth;
var v487 = v621 * 1.6;
introspect(JAM.policy.p1) {
  var v728 = Math.floor(v487)
}
v261["S"] = v728;
var v262 = alphaWidth;
var v622 = blInfo.charWidth;
var v488 = v622 * 1.6;
introspect(JAM.policy.p1) {
  var v729 = Math.floor(v488)
}
v262["T"] = v729;
var v263 = alphaWidth;
var v623 = blInfo.charWidth;
var v489 = v623 * 1.6;
introspect(JAM.policy.p1) {
  var v730 = Math.floor(v489)
}
v263["U"] = v730;
var v264 = alphaWidth;
var v624 = blInfo.charWidth;
var v490 = v624 * 1.6;
introspect(JAM.policy.p1) {
  var v731 = Math.floor(v490)
}
v264["V"] = v731;
var v265 = alphaWidth;
var v625 = blInfo.charWidth;
var v491 = v625 * 3;
introspect(JAM.policy.p1) {
  var v732 = Math.floor(v491)
}
v265["W"] = v732;
var v266 = alphaWidth;
var v626 = blInfo.charWidth;
var v492 = v626 * 1.6;
introspect(JAM.policy.p1) {
  var v733 = Math.floor(v492)
}
v266["X"] = v733;
var v267 = alphaWidth;
var v627 = blInfo.charWidth;
var v493 = v627 * 1.6;
introspect(JAM.policy.p1) {
  var v734 = Math.floor(v493)
}
v267["Y"] = v734;
var v268 = alphaWidth;
var v628 = blInfo.charWidth;
var v494 = v628 * 1.6;
introspect(JAM.policy.p1) {
  var v735 = Math.floor(v494)
}
v268["Z"] = v735;
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
var v270 = is.ns4;
if (v270) {
  var v269 = Event.MOUSEDOWN;
  introspect(JAM.policy.p1) {
    document.captureEvents(v269);
  }
  document.onmousedown = clearAll;
}
startSiteMap("Menu", "_top");
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
var v629 = is.w3c;
var v663 = !v629;
if (v663) {
  v629 = is.ie4;
}
var v495 = v629;
var v631 = !v495;
if (v631) {
  var v630 = is.ns4;
  if (v630) {
    var v664 = is.hj;
    v630 = !v664;
  }
  v495 = v630;
}
var v271 = v495;
if (v271) {
  var barTop = 20;
  var barLeft = 50;
  var barWidth = 370;
  var barHeight = 44;
  var itemPadding = 5;
  var barImage = "images/title.png";
  drawHMenuBar(barLeft, barTop, barWidth, barHeight, itemPadding, barImage);
}
var v273 = is.w3c;
if (v273) {
  document.writeln('<div style="position : relative; top : 15px; float : right; padding-right : 42px; text-align : right">');
  introspect(JAM.policy.p1) {
    document.writeln('<a href="http://sourceforge.net/projects/jswidgets"><img src="http://sflogo.sourceforge.net/sflogo.php?group_id=33495&type=15" width="150" height="40" border="0" alt="Get Browser-Independent Javascript Widgets at SourceForge.net. Fast, secure and Free Open Source software downloads" /></a>');
  }
  document.writeln("</div>");
} else {
  var v272 = is.ns4;
  if (v272) {
    document.writeln('<layer top="20" left="400">');
    introspect(JAM.policy.p1) {
      document.writeln('<a href="http://sourceforge.net/projects/jswidgets"><img src="http://sflogo.sourceforge.net/sflogo.php?group_id=33495&type=15" width="150" height="40" border="0" alt="Get Browser-Independent Javascript Widgets at SourceForge.net. Fast, secure and Free Open Source software downloads" /></a>');
    }
    document.writeln("</layer>");
  }
}
var v274 = document.body;
v274.background = "images/researchbg.gif";
var v275 = document.body;
v275.onload = initialize;
var v276 = document.getElementById("cleardiv");
v276.onmouseover = clearAll
