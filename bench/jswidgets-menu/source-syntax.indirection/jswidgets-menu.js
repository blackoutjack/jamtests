function getNSLayer(inNode, inName) {
  var node$$2;
  var i$$1;
  node$$2 = inNode[inName];
  i$$1 = 0;
  var v501 = !node$$2;
  if (v501) {
    v501 = inNode.layers;
  }
  var v278 = v501;
  if (v278) {
    var v637 = inNode.layers;
    var v502 = v637.length;
    v278 = i$$1 < v502;
  }
  var v1 = v278;
  for (;v1;) {
    var v503 = inNode.layers;
    var v279 = v503[i$$1];
    var v0 = v279.document;
    node$$2 = JAM.call(getNSLayer, null, [v0, inName], JAM.policy.p1);
    i$$1 = i$$1 + 1;
    var v504 = !node$$2;
    if (v504) {
      v504 = inNode.layers;
    }
    var v280 = v504;
    if (v280) {
      var v638 = inNode.layers;
      var v505 = v638.length;
      v280 = i$$1 < v505;
    }
    v1 = v280;
  }
  return node$$2;
}
function getLayer(inNode$$1, inName$$1) {
  var node$$3;
  var v5 = inNode$$1.getElementById;
  if (v5) {
    node$$3 = JAM.call(inNode$$1.getElementById, inNode$$1, [inName$$1], JAM.policy.p1);
  } else {
    var v4 = inNode$$1.all;
    if (v4) {
      var v2 = inNode$$1.all;
      node$$3 = v2[inName$$1];
    } else {
      var v3 = inNode$$1.layers;
      if (v3) {
        node$$3 = JAM.call(getNSLayer, null, [inNode$$1, inName$$1], JAM.policy.p1);
      }
    }
  }
  var v7 = !node$$3;
  if (v7) {
    var v281 = "Could not find layer " + inName$$1;
    var v6 = v281 + ".";
    JAM.call(alert, null, [v6], JAM.policy.p1);
  }
  return node$$3;
}
function getStyle(inNode$$2) {
  var style;
  var v282 = is.w3c;
  var v506 = !v282;
  if (v506) {
    v282 = is.ie4;
  }
  var v9 = v282;
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
  var v283 = is.ie4;
  var v507 = !v283;
  if (v507) {
    v283 = is.w3c;
  }
  var v13 = v283;
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
  style$$1 = JAM.call(getStyle, null, [mNode], JAM.policy.p1);
  if (style$$1) {
    style$$1.visibility = "visible";
  }
  return;
}
function hideLayer(mNode$$1) {
  var style$$2;
  style$$2 = JAM.call(getStyle, null, [mNode$$1], JAM.policy.p1);
  if (style$$2) {
    style$$2.visibility = "hidden";
  }
  return;
}
function isPositioned(mNode$$2) {
  var v14 = mNode$$2.left;
  var v285 = !v14;
  if (v285) {
    var v284 = mNode$$2.style;
    v14 = v284.left;
  }
  return v14;
}
function layerWidth(mNode$$3) {
  var nWidth;
  var v286 = is.ie4;
  var v508 = !v286;
  if (v508) {
    v286 = is.w3c;
  }
  var v18 = v286;
  if (v18) {
    var v287 = mNode$$3.style;
    var v15 = v287.width;
    nWidth = JAM.call(parseInt, null, [v15], JAM.policy.p1);
  } else {
    var v17 = is.ns4;
    if (v17) {
      var v16 = mNode$$3.width;
      nWidth = JAM.call(parseInt, null, [v16], JAM.policy.p1);
    }
  }
  return nWidth;
}
function expandLayer(mNode$$4) {
  var style$$3;
  style$$3 = JAM.call(getStyle, null, [mNode$$4], JAM.policy.p1);
  if (style$$3) {
    style$$3.display = "block";
  }
  return;
}
function contractLayer(mNode$$5) {
  var style$$4;
  style$$4 = JAM.call(getStyle, null, [mNode$$5], JAM.policy.p1);
  if (style$$4) {
    style$$4.display = "none";
  }
  return;
}
function insertLayer(mNode$$6) {
  var style$$5;
  style$$5 = JAM.call(getStyle, null, [mNode$$6], JAM.policy.p1);
  if (style$$5) {
    style$$5.display = "inline";
  }
  return;
}
function setLayerColor(tag, bgColor, tColor) {
  var elLayer;
  elLayer = JAM.call(getLayer, null, [document, tag], JAM.policy.p1);
  elStyle = JAM.call(getStyle, null, [elLayer], JAM.policy.p1);
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
    var v288 = '" top="' + top$$2;
    dStyle = dStyle + v288;
    var v289 = '" width="' + width$$9;
    dStyle = dStyle + v289;
    var v290 = '" height="' + height$$8;
    dStyle = dStyle + v290;
    if (zIndex) {
      var v291 = '" z-index="' + zIndex;
      dStyle = dStyle + v291;
    }
    if (bgColor$$1) {
      var v292 = '" bgColor="' + bgColor$$1;
      dStyle = dStyle + v292;
    } else {
      dStyle = dStyle + '" bgColor="#000000';
    }
    if (visibility) {
      var v509 = NSVisType[visibility];
      var v293 = '" visibility="' + v509;
      dStyle = dStyle + v293;
    }
    dStyle = dStyle + '" ';
  } else {
    var v20 = 'style="font-size : ' + fontSize;
    dStyle = v20 + "pt; ";
    var v510 = "left : " + left$$2;
    var v294 = v510 + "px; ";
    dStyle = dStyle + v294;
    var v511 = "top : " + top$$2;
    var v295 = v511 + "px; ";
    dStyle = dStyle + v295;
    var v512 = "width : " + width$$9;
    var v296 = v512 + "px; ";
    dStyle = dStyle + v296;
    var v513 = "height : " + height$$8;
    var v297 = v513 + "px; ";
    dStyle = dStyle + v297;
    if (zIndex) {
      var v514 = "z-index : " + zIndex;
      var v298 = v514 + "; ";
      dStyle = dStyle + v298;
    }
    if (bgColor$$1) {
      var v515 = "background-color : " + bgColor$$1;
      var v299 = v515 + "; ";
      dStyle = dStyle + v299;
    }
    if (visibility) {
      var v516 = "visibility : " + visibility;
      var v300 = v516 + "; ";
      dStyle = dStyle + v300;
    }
    dStyle = dStyle + '" ';
  }
  return dStyle;
}
function Is() {
  var v22 = navigator.appName;
  var appName = JAM.call(v22.toLowerCase, v22, [], JAM.policy.p1);
  var v23 = navigator.appVersion;
  var version$$5 = JAM.call(v23.toLowerCase, v23, [], JAM.policy.p1);
  var v24 = navigator.userAgent;
  var agent = JAM.call(v24.toLowerCase, v24, [], JAM.policy.p1);
  var v25 = navigator.platform;
  var platform = JAM.call(v25.toLowerCase, v25, [], JAM.policy.p1);
  var v689 = JAM.call(parseInt, null, [version$$5], JAM.policy.p1);
  this.major = v689;
  var v690 = JAM.call(parseFloat, null, [version$$5], JAM.policy.p1);
  this.minor = v690;
  var v26 = JAM.call(agent.indexOf, agent, ["netscape"], JAM.policy.p1);
  this.nsa = v26 != -1;
  var v27 = JAM.call(agent.indexOf, agent, ["mozilla"], JAM.policy.p1);
  this.mza = v27 != -1;
  var v28 = JAM.call(agent.indexOf, agent, ["galeon"], JAM.policy.p1);
  this.gla = v28 != -1;
  var v29 = this.mza;
  if (v29) {
    var v301 = this.nsa;
    v29 = !v301;
  }
  this.mza = v29;
  var v34 = this.mza;
  if (v34) {
    var v302 = JAM.call(agent.indexOf, agent, ["rv:"], JAM.policy.p1);
    var v30 = v302 + 3;
    var v31 = JAM.call(agent.indexOf, agent, [")"], JAM.policy.p1);
    version$$5 = JAM.call(agent.substring, agent, [v30, v31], JAM.policy.p1);
    this.nsa = false;
    var v303 = JAM.call(agent.indexOf, agent, ["rv:"], JAM.policy.p1);
    var v33 = v303 != -1;
    if (v33) {
      var v691 = JAM.call(parseInt, null, [version$$5], JAM.policy.p1);
      this.major = v691;
      var v692 = JAM.call(parseFloat, null, [version$$5], JAM.policy.p1);
      this.minor = v692;
      var v32 = this.mza;
      if (v32) {
        var v304 = this.major;
        v32 = v304 == 1;
      }
      this.mz1 = v32;
    } else {
      this.mza = false;
      version$$5 = this.minor;
    }
  }
  var v39 = this.gla;
  if (v39) {
    var v305 = JAM.call(agent.indexOf, agent, ["galeon/"], JAM.policy.p1);
    var v35 = v305 + 7;
    var v306 = JAM.call(agent.indexOf, agent, ["("], JAM.policy.p1);
    var v36 = v306 - 1;
    version$$5 = JAM.call(agent.substring, agent, [v35, v36], JAM.policy.p1);
    this.nsa = false;
    var v307 = JAM.call(agent.indexOf, agent, ["galeon/"], JAM.policy.p1);
    var v38 = v307 != -1;
    if (v38) {
      var v693 = JAM.call(parseInt, null, [version$$5], JAM.policy.p1);
      this.major = v693;
      var v694 = JAM.call(parseFloat, null, [version$$5], JAM.policy.p1);
      this.minor = v694;
      var v37 = this.gla;
      if (v37) {
        var v308 = this.major;
        v37 = v308 == 1;
      }
      this.gl1 = v37;
    } else {
      this.gla = false;
      version$$5 = this.version;
    }
  }
  this.version = version$$5;
  var v40 = JAM.call(appName.indexOf, appName, ["netscape"], JAM.policy.p1);
  this.nsn = v40 != -1;
  var v41 = this.nsn;
  if (v41) {
    var v309 = this.major;
    v41 = v309 == 2;
  }
  this.ns2 = v41;
  var v42 = this.nsn;
  if (v42) {
    var v310 = this.major;
    v42 = v310 == 3;
  }
  this.ns3 = v42;
  var v43 = this.nsn;
  if (v43) {
    var v311 = this.major;
    v43 = v311 == 4;
  }
  this.ns4 = v43;
  var v44 = this.nsa;
  if (v44) {
    var v312 = this.major;
    v44 = v312 >= 5;
  }
  this.ns6 = v44;
  var v47 = this.ns6;
  if (v47) {
    var v313 = JAM.call(agent.indexOf, agent, ["netscape6/"], JAM.policy.p1);
    var v45 = v313 + 10;
    var v46 = agent.length;
    var v695 = JAM.call(agent.slice, agent, [v45, v46], JAM.policy.p1);
    this.version = v695;
  }
  var v314 = JAM.call(appName.indexOf, appName, ["internet explorer"], JAM.policy.p1);
  var v48 = v314 != -1;
  if (v48) {
    var v315 = JAM.call(agent.indexOf, agent, ["opera"], JAM.policy.p1);
    v48 = v315 == -1;
  }
  this.ie = v48;
  var v49 = this.ie;
  if (v49) {
    var v316 = this.major;
    v49 = v316 == 3;
  }
  this.ie3 = v49;
  var v317 = this.ie;
  if (v317) {
    var v517 = this.major;
    v317 = v517 == 4;
  }
  var v50 = v317;
  if (v50) {
    var v318 = JAM.call(agent.indexOf, agent, ["msie 4."], JAM.policy.p1);
    v50 = v318 != -1;
  }
  this.ie4 = v50;
  var v319 = this.ie;
  if (v319) {
    var v518 = this.major;
    v319 = v518 == 4;
  }
  var v51 = v319;
  if (v51) {
    var v320 = JAM.call(agent.indexOf, agent, ["msie 5."], JAM.policy.p1);
    v51 = v320 != -1;
  }
  this.ie5 = v51;
  var v321 = this.ie;
  if (v321) {
    var v519 = this.major;
    v321 = v519 == 4;
  }
  var v52 = v321;
  if (v52) {
    var v322 = JAM.call(agent.indexOf, agent, ["msie 6."], JAM.policy.p1);
    v52 = v322 != -1;
  }
  this.ie6 = v52;
  var v520 = this.ie4;
  var v639 = !v520;
  if (v639) {
    v520 = this.ie5;
  }
  var v323 = v520;
  var v521 = !v323;
  if (v521) {
    v323 = this.ie6;
  }
  var v57 = v323;
  if (v57) {
    var v324 = JAM.call(agent.indexOf, agent, ["msie "], JAM.policy.p1);
    var v53 = v324 + 5;
    var v54 = agent.length;
    var v696 = JAM.call(agent.slice, agent, [v53, v54], JAM.policy.p1);
    this.version = v696;
    var v55 = this.version;
    var v325 = this.version;
    var v56 = JAM.call(v325.indexOf, v325, [";"], JAM.policy.p1);
    var v697 = JAM.call(v55.slice, v55, [0, v56], JAM.policy.p1);
    this.version = v697;
  }
  var v326 = this.ie;
  if (v326) {
    var v522 = this.ie3;
    v326 = !v522;
  }
  var v58 = v326;
  if (v58) {
    var v327 = this.ie4;
    v58 = !v327;
  }
  this.ieX = v58;
  var v59 = JAM.call(agent.indexOf, agent, ["opera"], JAM.policy.p1);
  this.op = v59 != -1;
  var v328 = this.op;
  if (v328) {
    var v523 = this.major;
    v328 = v523 == 4;
  }
  var v60 = v328;
  if (v60) {
    var v329 = JAM.call(agent.indexOf, agent, ["opera 4."], JAM.policy.p1);
    v60 = v329 != -1;
  }
  this.op4 = v60;
  var v330 = this.op;
  if (v330) {
    var v524 = this.major;
    v330 = v524 == 4;
  }
  var v61 = v330;
  if (v61) {
    var v331 = JAM.call(agent.indexOf, agent, ["opera 5."], JAM.policy.p1);
    v61 = v331 != -1;
  }
  this.op5 = v61;
  var v332 = this.op;
  if (v332) {
    var v525 = this.major;
    v332 = v525 == 4;
  }
  var v62 = v332;
  if (v62) {
    var v333 = JAM.call(agent.indexOf, agent, ["opera 6."], JAM.policy.p1);
    v62 = v333 != -1;
  }
  this.op6 = v62;
  var v66 = this.op;
  if (v66) {
    this.ie = false;
    this.ie4 = false;
    this.ie5 = false;
    this.ie6 = false;
    var v334 = JAM.call(agent.indexOf, agent, ["opera"], JAM.policy.p1);
    var v63 = v334 + 6;
    var v64 = agent.length;
    var v698 = JAM.call(agent.slice, agent, [v63, v64], JAM.policy.p1);
    this.version = v698;
    var v65 = this.version;
    var v699 = JAM.call(parseFloat, null, [v65], JAM.policy.p1);
    this.version = v699;
  }
  var v67 = JAM.call(agent.indexOf, agent, ["konqueror"], JAM.policy.p1);
  this.kq = v67 != -1;
  var v74 = this.kq;
  if (v74) {
    var v335 = JAM.call(agent.indexOf, agent, ["konqueror/"], JAM.policy.p1);
    var v68 = v335 + 10;
    var v69 = agent.length;
    var v700 = JAM.call(agent.substring, agent, [v68, v69], JAM.policy.p1);
    this.version = v700;
    var v70 = this.version;
    var v336 = this.version;
    var v71 = JAM.call(v336.indexOf, v336, [";"], JAM.policy.p1);
    var v701 = JAM.call(v70.substring, v70, [0, v71], JAM.policy.p1);
    this.version = v701;
    var v72 = this.version;
    var v702 = JAM.call(parseInt, null, [v72], JAM.policy.p1);
    this.major = v702;
    var v73 = this.version;
    var v703 = JAM.call(parseFloat, null, [v73], JAM.policy.p1);
    this.minor = v703;
    this.mza = false;
  }
  var v75 = this.kq;
  if (v75) {
    var v337 = this.major;
    v75 = v337 == 2;
  }
  this.kq2 = v75;
  var v76 = this.kq;
  if (v76) {
    var v338 = this.major;
    v76 = v338 == 3;
  }
  this.kq3 = v76;
  var v339 = document.getElementById;
  var v77 = !v339;
  this.w3c = !v77;
  var v78 = JAM.call(platform.indexOf, platform, ["win32"], JAM.policy.p1);
  this.win32 = v78 != -1;
  var v79 = JAM.call(platform.indexOf, platform, ["linux"], JAM.policy.p1);
  this.linux = v79 != -1;
  var v80 = JAM.call(platform.indexOf, platform, ["bsd"], JAM.policy.p1);
  this.bsd = v80 != -1;
  return;
}
function setTagFontColor(tag$$1, color$$2) {
  var v340 = is.ie4;
  var v526 = !v340;
  if (v526) {
    v340 = is.w3c;
  }
  var v83 = v340;
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
  var v341 = is.ie4;
  var v527 = !v341;
  if (v527) {
    v341 = is.w3c;
  }
  var v86 = v341;
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
  var v342 = is.ie4;
  var v529 = !v342;
  if (v529) {
    var v528 = is.w3c;
    if (v528) {
      var v670 = is.ns6;
      var v681 = !v670;
      if (v681) {
        v670 = is.mza;
      }
      var v640 = v670;
      v528 = !v640;
    }
    v342 = v528;
  }
  var v88 = v342;
  if (v88) {
    leftPos = event$$1.clientX;
  } else {
    var v530 = is.ns4;
    var v641 = !v530;
    if (v641) {
      v530 = is.ns6;
    }
    var v343 = v530;
    var v531 = !v343;
    if (v531) {
      v343 = is.mza;
    }
    var v87 = v343;
    if (v87) {
      leftPos = event$$1.pageX;
    }
  }
  return leftPos;
}
function mousePosTop(event$$2) {
  var topPos;
  var v344 = is.ie4;
  var v533 = !v344;
  if (v533) {
    var v532 = is.w3c;
    if (v532) {
      var v671 = is.ns6;
      var v682 = !v671;
      if (v682) {
        v671 = is.mza;
      }
      var v642 = v671;
      v532 = !v642;
    }
    v344 = v532;
  }
  var v90 = v344;
  if (v90) {
    topPos = event$$2.clientY;
  } else {
    var v534 = is.ns4;
    var v643 = !v534;
    if (v643) {
      v534 = is.ns6;
    }
    var v345 = v534;
    var v535 = !v345;
    if (v535) {
      v345 = is.mza;
    }
    var v89 = v345;
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
      var v346 = is.op5;
      var v536 = !v346;
      if (v536) {
        v346 = is.op6;
      }
      var v100 = v346;
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
              var v537 = is.mza;
              var v644 = !v537;
              if (v644) {
                v537 = is.gla;
              }
              var v347 = v537;
              var v538 = !v347;
              if (v538) {
                v347 = is.ns6;
              }
              var v96 = v347;
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
                  JAM.call(alert, null, ["This should never happen."], JAM.policy.p1);
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
  var v704 = JAM.new(Array, [], JAM.policy.p1);
  v103.menuCells = v704;
  window.menuPopups = 0;
  window.menuHeads = 0;
  window.menuLevel = 0;
  window.menuMain = 0;
  var v104 = window;
  var v705 = JAM.new(Object, [], JAM.policy.p1);
  v104.menuLayers = v705;
  var v105 = window;
  var v706 = JAM.new(Array, [], JAM.policy.p1);
  v105.menuStack = v706;
  var v106 = window;
  var v707 = JAM.new(Array, [], JAM.policy.p1);
  v106.menuBody = v707;
  var v107 = window;
  var v708 = JAM.new(Array, [], JAM.policy.p1);
  v107.bodyCells = v708;
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
  var v348 = window.bodyCells;
  var v109 = v348.length;
  mBody = JAM.new(bodyItem, [v109, bPopup, bLevel, bLeft, bTop, bWidth, bHeight], JAM.policy.p1);
  var v110 = window.menuBody;
  var v349 = window.menuBody;
  var v111 = v349.length;
  JAM.set(v110, v111, mBody);
  i$$2 = 0;
  var v350 = queue.length;
  var v114 = i$$2 < v350;
  for (;v114;) {
    var v112 = window.bodyCells;
    var v351 = window.bodyCells;
    var v113 = v351.length;
    JAM.set(v112, v113, queue[i$$2]);
    i$$2 = i$$2 + 1;
    var v352 = queue.length;
    v114 = i$$2 < v352;
  }
  var v115 = window.bodyCells;
  var v353 = window.bodyCells;
  var v116 = v353.length;
  JAM.set(v115, v116, 0);
  return;
}
function addMenuDivider() {
  var mItem;
  var mLevel;
  mLevel = window.menuLevel;
  mItem = JAM.new(menuItem, [0, 0, 0, mLevel, 0], JAM.policy.p1);
  var v117 = window.menuCells;
  var v354 = window.menuCells;
  var v118 = v354.length;
  JAM.set(v117, v118, mItem);
  return;
}
function estLabelWidth(label$$1) {
  var lWidth = 0;
  var i$$3;
  i$$3 = 0;
  var v355 = label$$1.length;
  var v119 = i$$3 < v355;
  for (;v119;) {
    var v356 = lWidth;
    var v539 = alphaWidth;
    var v540 = JAM.call(label$$1.charAt, label$$1, [i$$3], JAM.policy.p1);
    var v357 = v539[v540];
    lWidth = v356 + v357;
    i$$3 = i$$3 + 1;
    var v358 = label$$1.length;
    v119 = i$$3 < v358;
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
  var v120 = JAM.call(estLabelWidth, null, [label$$2], JAM.policy.p1);
  mWidth = v120 + 4;
  if (label$$2) {
    mLabel$$1 = label$$2;
  } else {
    var v359 = "No label given for action " + action$$1;
    var v121 = v359 + ".";
    JAM.call(alert, null, [v121], JAM.policy.p1);
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
  var v360 = mPopup$$1;
  if (v360) {
    v360 = mLevel$$1 > 0;
  }
  var v124 = v360;
  if (v124) {
    mWidth = mWidth + 15;
  }
  var v125 = mLevel$$1 == 0;
  if (v125) {
    var v361 = window.menuHeads;
    window.menuHeads = v361 + 1;
  }
  mItem$$1 = JAM.new(menuItem, [mLabel$$1, mAction, mWidth, mLevel$$1, mPopup$$1], JAM.policy.p1);
  var v126 = window.menuCells;
  var v362 = window.menuCells;
  var v127 = v362.length;
  JAM.set(v126, v127, mItem$$1);
  return;
}
function startMenu(label$$3, action$$2) {
  var v363 = window.menuPopups;
  var v645 = window.menuPopups;
  window.menuPopups = v645 + 1;
  var v128 = "popup" + v363;
  JAM.call(addMenuItem, null, [label$$3, action$$2, v128], JAM.policy.p1);
  var v364 = window.menuLevel;
  window.menuLevel = v364 + 1;
  return;
}
function endMenu() {
  var v365 = window.menuLevel;
  window.menuLevel = v365 - 1;
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
  var v366 = window.menuCells;
  var v129 = v366[index$$39];
  mLevel$$2 = v129.level;
  mLeft = left$$4;
  mTop = top$$4;
  mWidth$$1 = width$$12;
  mHeight = height$$10;
  var v367 = window.menuCells;
  var v130 = v367[index$$39];
  mLabel$$2 = v130.label;
  var v368 = window.menuCells;
  var v131 = v368[index$$39];
  mAction$$1 = v131.action;
  var v646 = blInfo.divType;
  var v541 = "<" + v646;
  var v369 = v541 + ' id="';
  var v132 = v369 + mName$$1;
  JAM.call(document.write, document, [v132], JAM.policy.p1);
  var v370 = '" class="' + mClass;
  var v133 = v370 + '" ';
  JAM.call(document.write, document, [v133], JAM.policy.p1);
  var v371 = blInfo.divType;
  var v372 = blInfo.fontSize;
  var v373 = window.mbPassive;
  var v134 = JAM.call(setStyle, null, [v371, v372, mLeft, mTop, mWidth$$1, mHeight, 0, v373, "inherit"], JAM.policy.p1);
  JAM.call(document.write, document, [v134], JAM.policy.p1);
  var v374 = ' onclick="' + mAction$$1;
  var v135 = v374 + '" ';
  JAM.call(document.write, document, [v135], JAM.policy.p1);
  var v375 = window.menuCells;
  var v136 = v375[index$$39];
  mPopup = v136.popup;
  if (mPopup) {
    var v687 = 'onmouseover="popMenu(' + mLevel$$2;
    var v683 = v687 + ",'";
    var v672 = v683 + mName$$1;
    var v647 = v672 + "','";
    var v542 = v647 + mPopup;
    var v376 = v542 + "'";
    var v137 = v376 + ');" ';
    JAM.call(document.write, document, [v137], JAM.policy.p1);
    var v648 = 'onmouseout="setColorPassive(' + "'";
    var v543 = v648 + mName$$1;
    var v377 = v543 + "'";
    var v138 = v377 + ');">';
    JAM.call(document.write, document, [v138], JAM.policy.p1);
  } else {
    var v673 = 'onmouseover="unPopMenus(' + mLevel$$2;
    var v649 = v673 + ",'";
    var v544 = v649 + mName$$1;
    var v378 = v544 + "'";
    var v139 = v378 + ');" ';
    JAM.call(document.write, document, [v139], JAM.policy.p1);
    var v650 = 'onmouseout="setColorPassive(' + "'";
    var v545 = v650 + mName$$1;
    var v379 = v545 + "'";
    var v140 = v379 + ');">';
    JAM.call(document.write, document, [v140], JAM.policy.p1);
  }
  var v141 = window.menuLayers;
  var v142 = mName$$1;
  var v709 = JAM.new(menuLayer, [mLabel$$2, mAction$$1], JAM.policy.p1);
  JAM.set(v141, v142, v709);
  var v380 = blInfo.divType;
  var v144 = v380 == "layer";
  if (v144) {
    var v143 = JAM.call(mLabel$$2.fontcolor, mLabel$$2, [mtPassive], JAM.policy.p1);
    JAM.call(document.write, document, [v143], JAM.policy.p1);
  } else {
    JAM.call(document.write, document, [mLabel$$2], JAM.policy.p1);
  }
  var v381 = mPopup;
  if (v381) {
    v381 = mLevel$$2 >= 1;
  }
  var v146 = v381;
  if (v146) {
    var v546 = window.menuPntr;
    var v382 = '&nbsp;<img src="' + v546;
    var v145 = v382 + '" border="0">';
    JAM.call(document.write, document, [v145], JAM.policy.p1);
  }
  var v547 = blInfo.divType;
  var v383 = "</" + v547;
  var v147 = v383 + ">";
  JAM.call(document.writeln, document, [v147], JAM.policy.p1);
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
  var v148 = blInfo.bwPadding;
  lWidth$$1 = bWidth$$1 + v148;
  var v149 = blInfo.bhPadding;
  lHeight = bHeight$$1 + v149;
  var v688 = blInfo.divType;
  var v684 = "<" + v688;
  var v674 = v684 + ' id="';
  var v651 = v674 + bName;
  var v548 = v651 + '" class="';
  var v384 = v548 + bClass;
  var v150 = v384 + '" ';
  JAM.call(document.write, document, [v150], JAM.policy.p1);
  var v385 = blInfo.divType;
  var v386 = blInfo.fontSize;
  var v387 = bLevel$$1 + 1;
  var v151 = JAM.call(setStyle, null, [v385, v386, bLeft$$1, bTop$$1, lWidth$$1, lHeight, v387, "#000000", "hidden"], JAM.policy.p1);
  JAM.call(document.write, document, [v151], JAM.policy.p1);
  JAM.call(document.writeln, document, [">"], JAM.policy.p1);
  mLeft$$1 = blInfo.leftOffset;
  mTop$$1 = blInfo.mTopOffset;
  i$$4 = 0;
  var v388 = cQueue.length;
  var v156 = i$$4 < v388;
  for (;v156;) {
    var v389 = window.menuCells;
    var v390 = cQueue[i$$4];
    var v152 = v389[v390];
    mLabel = v152.label;
    if (mLabel) {
      var v153 = cQueue[i$$4];
      var v154 = blInfo.itemHeight;
      JAM.call(buildMenuCell, null, [v153, mLeft$$1, mTop$$1, bWidth$$1, v154], JAM.policy.p1);
      var v549 = blInfo.itemHeight;
      var v550 = blInfo.cellOffset;
      var v391 = v549 + v550;
      mTop$$1 = mTop$$1 + v391;
    } else {
      var v155 = mLabel == 0;
      if (v155) {
        var v392 = blInfo.dividerHeight;
        mTop$$1 = mTop$$1 + v392;
      } else {
        JAM.call(alert, null, ["Expecting label in buildMenuBody."], JAM.policy.p1);
        return 0;
      }
    }
    i$$4 = i$$4 + 1;
    var v393 = cQueue.length;
    v156 = i$$4 < v393;
  }
  var v551 = blInfo.divType;
  var v394 = "</" + v551;
  var v157 = v394 + ">";
  JAM.call(document.writeln, document, [v157], JAM.policy.p1);
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
  var v552 = window.menuBody;
  var v395 = v552.length;
  var v167 = i$$5 < v395;
  for (;v167;) {
    var v396 = window.menuBody;
    var v158 = v396[i$$5];
    bCells = v158.cells;
    var v397 = window.menuBody;
    var v159 = v397[i$$5];
    bName$$1 = v159.popup;
    var v398 = window.menuBody;
    var v160 = v398[i$$5];
    bLevel$$2 = v160.level;
    var v399 = window.menuBody;
    var v161 = v399[i$$5];
    bLeft$$2 = v161.left;
    var v400 = window.menuBody;
    var v162 = v400[i$$5];
    bTop$$2 = v162.top;
    var v401 = window.menuBody;
    var v163 = v401[i$$5];
    bWidth$$2 = v163.width;
    var v402 = window.menuBody;
    var v164 = v402[i$$5];
    bHeight$$2 = v164.height;
    cQueue$$1 = JAM.new(Array, [], JAM.policy.p1);
    cCount = 0;
    var v652 = window.bodyCells;
    var v553 = v652.length;
    var v403 = bCells < v553;
    if (v403) {
      var v653 = window.bodyCells;
      var v554 = v653[bCells];
      v403 = v554 > 0;
    }
    var v166 = v403;
    for (;v166;) {
      var v165 = cCount;
      cCount = cCount + 1;
      var v404 = window.bodyCells;
      var v405 = bCells;
      bCells = bCells + 1;
      cQueue$$1[v165] = v404[v405];
      var v654 = window.bodyCells;
      var v555 = v654.length;
      var v406 = bCells < v555;
      if (v406) {
        var v655 = window.bodyCells;
        var v556 = v655[bCells];
        v406 = v556 > 0;
      }
      v166 = v406;
    }
    JAM.call(buildMenuBody, null, [cQueue$$1, bName$$1, bLevel$$2, bLeft$$2, bTop$$2, bWidth$$2, bHeight$$2], JAM.policy.p1);
    cQueue$$1 = null;
    i$$5 = i$$5 + 1;
    var v557 = window.menuBody;
    var v407 = v557.length;
    v167 = i$$5 < v407;
  }
  return;
}
function queueMenuBuilds(mIndex, mLevel$$3, mPopup$$2, mLeft$$2, mTop$$2) {
  var queue$$1 = JAM.new(Array, [], JAM.policy.p1);
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
  var v656 = window.menuCells;
  var v558 = v656.length;
  var v408 = i$$6 < v558;
  if (v408) {
    var v675 = window.menuCells;
    var v657 = v675[i$$6];
    var v559 = v657.level;
    v408 = v559 >= mLevel$$3;
  }
  var v170 = v408;
  for (;v170;) {
    var v658 = window.menuCells;
    var v560 = v658[i$$6];
    var v409 = v560.level;
    var v169 = v409 == mLevel$$3;
    if (v169) {
      var v561 = window.menuCells;
      var v410 = v561[i$$6];
      var v168 = v410.width;
      sWidth = JAM.call(Math.max, Math, [sWidth, v168], JAM.policy.p1);
    }
    i$$6 = i$$6 + 1;
    var v659 = window.menuCells;
    var v562 = v659.length;
    var v411 = i$$6 < v562;
    if (v411) {
      var v676 = window.menuCells;
      var v660 = v676[i$$6];
      var v563 = v660.level;
      v411 = v563 >= mLevel$$3;
    }
    v170 = v411;
  }
  var v171 = mLeft$$2 + sWidth;
  sLeft = v171 + 2;
  i$$6 = mIndex;
  var v661 = window.menuCells;
  var v564 = v661.length;
  var v412 = i$$6 < v564;
  if (v412) {
    var v677 = window.menuCells;
    var v662 = v677[i$$6];
    var v565 = v662.level;
    v412 = v565 >= mLevel$$3;
  }
  var v177 = v412;
  for (;v177;) {
    var v172 = queue$$1.length;
    queue$$1[v172] = i$$6;
    var v566 = window.menuCells;
    var v413 = v566[i$$6];
    var v176 = v413.popup;
    if (v176) {
      var v414 = window.menuCells;
      var v173 = v414[i$$6];
      sPopup = v173.popup;
      i$$6 = i$$6 + 1;
      var v174 = mLevel$$3 + 1;
      i$$6 = JAM.call(queueMenuBuilds, null, [i$$6, v174, sPopup, sLeft, sTop], JAM.policy.p1);
      var v567 = blInfo.itemHeight;
      var v568 = blInfo.cellOffset;
      var v415 = v567 + v568;
      sTop = sTop + v415;
      var v569 = blInfo.itemHeight;
      var v570 = blInfo.cellOffset;
      var v416 = v569 + v570;
      sHeight = sHeight + v416;
    } else {
      var v571 = window.menuCells;
      var v417 = v571[i$$6];
      var v175 = v417.label;
      if (v175) {
        i$$6 = i$$6 + 1;
        var v572 = blInfo.itemHeight;
        var v573 = blInfo.cellOffset;
        var v418 = v572 + v573;
        sTop = sTop + v418;
        var v574 = blInfo.itemHeight;
        var v575 = blInfo.cellOffset;
        var v419 = v574 + v575;
        sHeight = sHeight + v419;
      } else {
        i$$6 = i$$6 + 1;
        var v420 = blInfo.dividerHeight;
        sTop = sTop + v420;
        var v421 = blInfo.dividerHeight;
        sHeight = sHeight + v421;
      }
    }
    var v663 = window.menuCells;
    var v576 = v663.length;
    var v422 = i$$6 < v576;
    if (v422) {
      var v678 = window.menuCells;
      var v664 = v678[i$$6];
      var v577 = v664.level;
      v422 = v577 >= mLevel$$3;
    }
    v177 = v422;
  }
  var v423 = queue$$1.length;
  var v179 = v423 > 0;
  if (v179) {
    var v424 = blInfo.cellOffset;
    var v178 = sHeight - v424;
    JAM.call(stackMenuBody, null, [queue$$1, mPopup$$2, mLevel$$3, mLeft$$2, mTop$$2, sWidth, v178], JAM.policy.p1);
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
  var v180 = blInfo.wBarPadding;
  bWidth$$3 = width$$13 + v180;
  var v425 = blInfo.itemHeight;
  var v181 = height$$11 + v425;
  var v182 = blInfo.hBarPadding;
  bHeight$$3 = v181 + v182;
  var v183 = blInfo.itemPadding;
  iPadding = padding + v183;
  bGraphic = graphic;
  var v578 = blInfo.divType;
  var v426 = "<" + v578;
  var v184 = v426 + ' id="menuBar" class="menuBar" ';
  JAM.call(document.write, document, [v184], JAM.policy.p1);
  var v427 = blInfo.divType;
  var v428 = blInfo.fontSize;
  var v185 = JAM.call(setStyle, null, [v427, v428, bLeft$$3, bTop$$3, bWidth$$3, bHeight$$3, 0, null, "visible"], JAM.policy.p1);
  JAM.call(document.write, document, [v185], JAM.policy.p1);
  JAM.call(document.writeln, document, [">"], JAM.policy.p1);
  var v685 = '<img name="menuImage" src="' + bGraphic;
  var v679 = v685 + '" class="menuBar" border="1" width="';
  var v665 = v679 + width$$13;
  var v579 = v665 + '" height="';
  var v429 = v579 + height$$11;
  var v186 = v429 + '">';
  JAM.call(document.writeln, document, [v186], JAM.policy.p1);
  iLeft = blInfo.leftOffset;
  var v187 = blInfo.mBarOffset;
  mTop$$3 = height$$11 + v187;
  var v430 = blInfo.bBarOffset;
  bTop$$3 = bTop$$3 + v430;
  i$$7 = 0;
  var v580 = window.menuCells;
  var v431 = v580.length;
  var v194 = i$$7 < v431;
  for (;v194;) {
    var v581 = window.menuCells;
    var v432 = v581[i$$7];
    var v188 = v432.width;
    iWidth = v188 + iPadding;
    var v433 = bWidth$$3 - iLeft;
    var v434 = blInfo.menuPadding;
    var v189 = v433 + v434;
    iWidth = JAM.call(Math.min, Math, [iWidth, v189], JAM.policy.p1);
    var v190 = blInfo.itemHeight;
    JAM.call(buildMenuCell, null, [i$$7, iLeft, mTop$$3, iWidth, v190], JAM.policy.p1);
    var v582 = window.menuCells;
    var v435 = v582[i$$7];
    var v193 = v435.popup;
    if (v193) {
      var v436 = window.menuCells;
      var v191 = v436[i$$7];
      mPopup = v191.popup;
      i$$7 = i$$7 + 1;
      var v192 = bTop$$3 + bHeight$$3;
      i$$7 = JAM.call(queueMenuBuilds, null, [i$$7, 1, mPopup, bLeft$$3, v192], JAM.policy.p1);
    }
    var v583 = blInfo.itemSpacing;
    var v437 = iWidth + v583;
    bLeft$$3 = bLeft$$3 + v437;
    var v584 = blInfo.itemSpacing;
    var v438 = iWidth + v584;
    iLeft = iLeft + v438;
    var v585 = window.menuCells;
    var v439 = v585.length;
    v194 = i$$7 < v439;
  }
  var v586 = blInfo.divType;
  var v440 = "</" + v586;
  var v195 = v440 + ">";
  JAM.call(document.writeln, document, [v195], JAM.policy.p1);
  JAM.call(buildMenuBodies, null, [], JAM.policy.p1);
  JAM.call(document.close, document, [], JAM.policy.p1);
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
  var v196 = blInfo.wBarPadding;
  bWidth$$4 = width$$14 + v196;
  bHeight$$4 = height$$12;
  nTopItems = 0;
  i$$8 = 0;
  var v587 = window.menuCells;
  var v441 = v587.length;
  var v198 = i$$8 < v441;
  for (;v198;) {
    var v666 = window.menuCells;
    var v588 = v666[i$$8];
    var v442 = v588.level;
    var v197 = v442 == 0;
    if (v197) {
      nTopItems = nTopItems + 1;
    }
    i$$8 = i$$8 + 1;
    var v589 = window.menuCells;
    var v443 = v589.length;
    v198 = i$$8 < v443;
  }
  var v444 = blInfo.itemHeight;
  var v445 = blInfo.cellOffset;
  var v199 = v444 + v445;
  mHeight$$1 = nTopItems * v199;
  i$$8 = 0;
  var v200 = blInfo.itemPadding;
  iPadding$$1 = padding$$1 + v200;
  bGraphic$$1 = graphic$$1;
  var v590 = blInfo.divType;
  var v446 = "<" + v590;
  var v201 = v446 + ' id="menuBar" class="menuBar" ';
  JAM.call(document.write, document, [v201], JAM.policy.p1);
  var v447 = blInfo.divType;
  var v448 = blInfo.fontSize;
  var v449 = bHeight$$4 + mHeight$$1;
  var v202 = JAM.call(setStyle, null, [v447, v448, bLeft$$4, bTop$$4, bWidth$$4, v449, 0, null, "visible"], JAM.policy.p1);
  JAM.call(document.write, document, [v202], JAM.policy.p1);
  JAM.call(document.writeln, document, [">"], JAM.policy.p1);
  var v686 = '<img name="menuImage" src="' + bGraphic$$1;
  var v680 = v686 + '"class="menuBar" border="1" width="';
  var v667 = v680 + width$$14;
  var v591 = v667 + '" height="';
  var v450 = v591 + height$$12;
  var v203 = v450 + '">';
  JAM.call(document.writeln, document, [v203], JAM.policy.p1);
  iLeft$$1 = blInfo.leftOffset;
  var v204 = blInfo.mBarOffset;
  mTop$$4 = height$$12 + v204;
  var v451 = blInfo.bBarOffset;
  bTop$$4 = bTop$$4 + v451;
  var v592 = window.menuCells;
  var v452 = v592.length;
  var v212 = i$$8 < v452;
  for (;v212;) {
    var v593 = window.menuCells;
    var v453 = v593[i$$8];
    var v205 = v453.width;
    iWidth$$1 = v205 + iPadding$$1;
    var v454 = bWidth$$4 - iLeft$$1;
    var v455 = blInfo.menuPadding;
    var v206 = v454 + v455;
    iWidth$$1 = JAM.call(Math.min, Math, [iWidth$$1, v206], JAM.policy.p1);
    var v207 = blInfo.itemHeight;
    JAM.call(buildMenuCell, null, [i$$8, iLeft$$1, mTop$$4, iWidth$$1, v207], JAM.policy.p1);
    var v594 = window.menuCells;
    var v456 = v594[i$$8];
    var v211 = v456.popup;
    if (v211) {
      var v457 = window.menuCells;
      var v208 = v457[i$$8];
      mPopup = v208.popup;
      i$$8 = i$$8 + 1;
      var v209 = bLeft$$4 + iWidth$$1;
      var v210 = bTop$$4 + bHeight$$4;
      i$$8 = JAM.call(queueMenuBuilds, null, [i$$8, 1, mPopup, v209, v210], JAM.policy.p1);
    }
    var v595 = blInfo.itemHeight;
    var v596 = blInfo.cellOffset;
    var v458 = v595 + v596;
    mTop$$4 = mTop$$4 + v458;
    var v597 = blInfo.itemHeight;
    var v598 = blInfo.cellOffset;
    var v459 = v597 + v598;
    bTop$$4 = bTop$$4 + v459;
    var v599 = window.menuCells;
    var v460 = v599.length;
    v212 = i$$8 < v460;
  }
  var v600 = blInfo.divType;
  var v461 = "</" + v600;
  var v213 = v461 + ">";
  JAM.call(document.writeln, document, [v213], JAM.policy.p1);
  JAM.call(buildMenuBodies, null, [], JAM.policy.p1);
  JAM.call(document.close, document, [], JAM.policy.p1);
  return;
}
function loadMe() {
  var v214 = this.action;
  if (JAM.isEval(eval)) {
    eval("introspect(JAM.policy.pFull) { " + v214 + " }");
  } else {
    JAM.call(eval, null, [v214]);
  }
  return;
}
function activateMenus() {
  var mName$$2;
  var mAction$$2;
  var mNode$$7;
  var tStyle;
  var v215 = JAM.call(getLayer, null, [document, "test.cell"], JAM.policy.p1);
  tStyle = JAM.call(getStyle, null, [v215], JAM.policy.p1);
  var v462 = is.ns4;
  var v216 = !v462;
  if (v216) {
    window.mtPassive = tStyle.color;
    window.mbPassive = tStyle.backgroundColor;
    return;
  }
  var v219 = window.menuLayers;
  for (mName$$2 in v219) {
    var v463 = window.menuLayers;
    var v217 = v463[mName$$2];
    mAction$$2 = v217.action;
    mNode$$7 = JAM.call(getLayer, null, [document, mName$$2], JAM.policy.p1);
    var v218 = Event.MOUSEDOWN;
    JAM.call(mNode$$7.captureEvents, mNode$$7, [v218], JAM.policy.p1);
    JAM.set(mNode$$7, "onmousedown", loadMe);
    mNode$$7.action = mAction$$2;
    mNode$$7.fgColor = window.mtPassive;
  }
  return;
}
function findNode(elMain, mName$$3) {
  var elNode;
  var elIndex;
  elNode = JAM.call(getLayer, null, [elMain, mName$$3], JAM.policy.p1);
  elIndex = 0;
  var v464 = !elNode;
  if (v464) {
    v464 = elIndex < stackDepth;
  }
  var v221 = v464;
  for (;v221;) {
    var v220 = nodeStack[elIndex];
    elNode = JAM.call(getLayer, null, [v220, mName$$3], JAM.policy.p1);
    elIndex = elIndex + 1;
    var v465 = !elNode;
    if (v465) {
      v465 = elIndex < stackDepth;
    }
    v221 = v465;
  }
  return elNode;
}
function clearMenus(mNum) {
  var v223 = stackDepth > mNum;
  for (;v223;) {
    stackDepth = stackDepth - 1;
    var v222 = nodeStack[stackDepth];
    JAM.call(hideLayer, null, [v222], JAM.policy.p1);
    JAM.set(nameStack, stackDepth, 0);
    JAM.set(nodeStack, stackDepth, 0);
    v223 = stackDepth > mNum;
  }
  return;
}
function unPopMenus(mNum$$1, tag$$3) {
  var v224 = window.mbActive;
  var v225 = window.mtActive;
  JAM.call(setLayerColor, null, [tag$$3, v224, v225], JAM.policy.p1);
  JAM.call(clearMenus, null, [mNum$$1], JAM.policy.p1);
  var v227 = is.ns4;
  if (v227) {
    var v226 = Event.MOUSEDOWN;
    JAM.call(document.releaseEvents, document, [v226], JAM.policy.p1);
  }
  return;
}
function setColorPassive(tag$$4) {
  var v228 = window.mbPassive;
  var v229 = window.mtPassive;
  JAM.call(setLayerColor, null, [tag$$4, v228, v229], JAM.policy.p1);
  var v231 = is.ns4;
  if (v231) {
    var v230 = Event.MOUSEDOWN;
    JAM.call(document.captureEvents, document, [v230], JAM.policy.p1);
  }
  return;
}
function popMenu(mNum$$2, tag$$5, mName$$4) {
  var style$$7;
  var elLayer$$1;
  JAM.call(clearMenus, null, [mNum$$2], JAM.policy.p1);
  var v232 = window.mbActive;
  var v233 = window.mtActive;
  JAM.call(setLayerColor, null, [tag$$5, v232, v233], JAM.policy.p1);
  elLayer$$1 = JAM.call(getLayer, null, [document, mName$$4], JAM.policy.p1);
  if (elLayer$$1) {
    JAM.call(showLayer, null, [elLayer$$1], JAM.policy.p1);
    JAM.set(nameStack, stackDepth, mName$$4);
    JAM.set(nodeStack, stackDepth, elLayer$$1);
    stackDepth = stackDepth + 1;
  }
  var v235 = is.ns4;
  if (v235) {
    var v234 = Event.MOUSEDOWN;
    JAM.call(document.releaseEvents, document, [v234], JAM.policy.p1);
  }
  return;
}
function clearAll(e$$4) {
  JAM.call(clearMenus, null, [0], JAM.policy.p1);
  return;
}
function initialize() {
  JAM.call(activateMenus, null, [], JAM.policy.p1);
  return;
}
var NSVisType = JAM.new(Array, [], JAM.policy.p1);
NSVisType["visible"] = "show";
NSVisType["hidden"] = "hide";
NSVisType["inherit"] = "inherit";
var is = JAM.new(Is, [], JAM.policy.p1);
var blInfo = JAM.new(BrowserMenuInfo, [], JAM.policy.p1);
var v601 = blInfo.divType;
var v466 = "<" + v601;
var v236 = v466 + ' id="test.cell"';
JAM.call(document.write, document, [v236], JAM.policy.p1);
JAM.call(document.write, document, ['" class="menuItem" '], JAM.policy.p1);
var v602 = blInfo.divType;
var v603 = blInfo.fontSize;
var v467 = JAM.call(setStyle, null, [v602, v603, 0, 0, 100, 20, null, null, "hidden"], JAM.policy.p1);
var v237 = v467 + ">";
JAM.call(document.write, document, [v237], JAM.policy.p1);
JAM.call(document.write, document, ["test.cell"], JAM.policy.p1);
var v604 = blInfo.divType;
var v468 = "</" + v604;
var v238 = v468 + ">";
JAM.call(document.writeln, document, [v238], JAM.policy.p1);
var alphaWidth = JAM.call(Array, null, [], JAM.policy.p1);
alphaWidth["a"] = blInfo.charWidth;
alphaWidth["b"] = blInfo.charWidth;
alphaWidth["c"] = blInfo.charWidth;
alphaWidth["d"] = blInfo.charWidth;
alphaWidth["e"] = blInfo.charWidth;
alphaWidth["f"] = blInfo.charWidth;
alphaWidth["g"] = blInfo.charWidth;
alphaWidth["h"] = blInfo.charWidth;
var v239 = alphaWidth;
var v605 = blInfo.charWidth;
var v469 = v605 * .4;
var v710 = JAM.call(Math.floor, Math, [v469], JAM.policy.p1);
v239["i"] = v710;
var v240 = alphaWidth;
var v606 = blInfo.charWidth;
var v470 = v606 * .7;
var v711 = JAM.call(Math.floor, Math, [v470], JAM.policy.p1);
v240["j"] = v711;
alphaWidth["k"] = blInfo.charWidth;
var v241 = alphaWidth;
var v607 = blInfo.charWidth;
var v471 = v607 * .4;
var v712 = JAM.call(Math.floor, Math, [v471], JAM.policy.p1);
v241["l"] = v712;
var v242 = alphaWidth;
var v608 = blInfo.charWidth;
var v472 = v608 * 1.6;
var v713 = JAM.call(Math.floor, Math, [v472], JAM.policy.p1);
v242["m"] = v713;
alphaWidth["n"] = blInfo.charWidth;
alphaWidth["o"] = blInfo.charWidth;
alphaWidth["p"] = blInfo.charWidth;
alphaWidth["q"] = blInfo.charWidth;
alphaWidth["r"] = blInfo.charWidth;
alphaWidth["s"] = blInfo.charWidth;
alphaWidth["t"] = blInfo.charWidth;
alphaWidth["u"] = blInfo.charWidth;
alphaWidth["v"] = blInfo.charWidth;
var v243 = alphaWidth;
var v609 = blInfo.charWidth;
var v473 = v609 * 1.8;
var v714 = JAM.call(Math.floor, Math, [v473], JAM.policy.p1);
v243["w"] = v714;
alphaWidth["x"] = blInfo.charWidth;
alphaWidth["y"] = blInfo.charWidth;
alphaWidth["z"] = blInfo.charWidth;
var v244 = alphaWidth;
var v610 = blInfo.charWidth;
var v474 = v610 * 1.6;
var v715 = JAM.call(Math.floor, Math, [v474], JAM.policy.p1);
v244["A"] = v715;
var v245 = alphaWidth;
var v611 = blInfo.charWidth;
var v475 = v611 * 1.6;
var v716 = JAM.call(Math.floor, Math, [v475], JAM.policy.p1);
v245["B"] = v716;
var v246 = alphaWidth;
var v612 = blInfo.charWidth;
var v476 = v612 * 1.6;
var v717 = JAM.call(Math.floor, Math, [v476], JAM.policy.p1);
v246["C"] = v717;
var v247 = alphaWidth;
var v613 = blInfo.charWidth;
var v477 = v613 * 1.6;
var v718 = JAM.call(Math.floor, Math, [v477], JAM.policy.p1);
v247["D"] = v718;
var v248 = alphaWidth;
var v614 = blInfo.charWidth;
var v478 = v614 * 1.6;
var v719 = JAM.call(Math.floor, Math, [v478], JAM.policy.p1);
v248["E"] = v719;
var v249 = alphaWidth;
var v615 = blInfo.charWidth;
var v479 = v615 * 1.6;
var v720 = JAM.call(Math.floor, Math, [v479], JAM.policy.p1);
v249["F"] = v720;
var v250 = alphaWidth;
var v616 = blInfo.charWidth;
var v480 = v616 * 1.6;
var v721 = JAM.call(Math.floor, Math, [v480], JAM.policy.p1);
v250["G"] = v721;
var v251 = alphaWidth;
var v617 = blInfo.charWidth;
var v481 = v617 * 1.6;
var v722 = JAM.call(Math.floor, Math, [v481], JAM.policy.p1);
v251["H"] = v722;
var v252 = alphaWidth;
var v482 = blInfo.charWidth;
var v723 = JAM.call(Math.floor, Math, [v482], JAM.policy.p1);
v252["I"] = v723;
var v253 = alphaWidth;
var v483 = blInfo.charWidth;
var v724 = JAM.call(Math.floor, Math, [v483], JAM.policy.p1);
v253["J"] = v724;
var v254 = alphaWidth;
var v618 = blInfo.charWidth;
var v484 = v618 * 1.6;
var v725 = JAM.call(Math.floor, Math, [v484], JAM.policy.p1);
v254["K"] = v725;
var v255 = alphaWidth;
var v619 = blInfo.charWidth;
var v485 = v619 * 1.6;
var v726 = JAM.call(Math.floor, Math, [v485], JAM.policy.p1);
v255["L"] = v726;
var v256 = alphaWidth;
var v620 = blInfo.charWidth;
var v486 = v620 * 2;
var v727 = JAM.call(Math.floor, Math, [v486], JAM.policy.p1);
v256["M"] = v727;
var v257 = alphaWidth;
var v621 = blInfo.charWidth;
var v487 = v621 * 1.6;
var v728 = JAM.call(Math.floor, Math, [v487], JAM.policy.p1);
v257["N"] = v728;
var v258 = alphaWidth;
var v622 = blInfo.charWidth;
var v488 = v622 * 1.6;
var v729 = JAM.call(Math.floor, Math, [v488], JAM.policy.p1);
v258["O"] = v729;
var v259 = alphaWidth;
var v623 = blInfo.charWidth;
var v489 = v623 * 1.6;
var v730 = JAM.call(Math.floor, Math, [v489], JAM.policy.p1);
v259["P"] = v730;
var v260 = alphaWidth;
var v624 = blInfo.charWidth;
var v490 = v624 * 1.6;
var v731 = JAM.call(Math.floor, Math, [v490], JAM.policy.p1);
v260["Q"] = v731;
var v261 = alphaWidth;
var v625 = blInfo.charWidth;
var v491 = v625 * 1.6;
var v732 = JAM.call(Math.floor, Math, [v491], JAM.policy.p1);
v261["R"] = v732;
var v262 = alphaWidth;
var v626 = blInfo.charWidth;
var v492 = v626 * 1.6;
var v733 = JAM.call(Math.floor, Math, [v492], JAM.policy.p1);
v262["S"] = v733;
var v263 = alphaWidth;
var v627 = blInfo.charWidth;
var v493 = v627 * 1.6;
var v734 = JAM.call(Math.floor, Math, [v493], JAM.policy.p1);
v263["T"] = v734;
var v264 = alphaWidth;
var v628 = blInfo.charWidth;
var v494 = v628 * 1.6;
var v735 = JAM.call(Math.floor, Math, [v494], JAM.policy.p1);
v264["U"] = v735;
var v265 = alphaWidth;
var v629 = blInfo.charWidth;
var v495 = v629 * 1.6;
var v736 = JAM.call(Math.floor, Math, [v495], JAM.policy.p1);
v265["V"] = v736;
var v266 = alphaWidth;
var v630 = blInfo.charWidth;
var v496 = v630 * 3;
var v737 = JAM.call(Math.floor, Math, [v496], JAM.policy.p1);
v266["W"] = v737;
var v267 = alphaWidth;
var v631 = blInfo.charWidth;
var v497 = v631 * 1.6;
var v738 = JAM.call(Math.floor, Math, [v497], JAM.policy.p1);
v267["X"] = v738;
var v268 = alphaWidth;
var v632 = blInfo.charWidth;
var v498 = v632 * 1.6;
var v739 = JAM.call(Math.floor, Math, [v498], JAM.policy.p1);
v268["Y"] = v739;
var v269 = alphaWidth;
var v633 = blInfo.charWidth;
var v499 = v633 * 1.6;
var v740 = JAM.call(Math.floor, Math, [v499], JAM.policy.p1);
v269["Z"] = v740;
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
var nameStack = JAM.new(Array, [], JAM.policy.p1);
var nodeStack = JAM.new(Array, [], JAM.policy.p1);
var stackDepth = 0;
var v271 = is.ns4;
if (v271) {
  var v270 = Event.MOUSEDOWN;
  JAM.call(document.captureEvents, document, [v270], JAM.policy.p1);
  JAM.set(document, "onmousedown", clearAll);
}
JAM.call(startSiteMap, null, ["Menu", "_top"], JAM.policy.p1);
JAM.call(startMenu, null, ["jsWidgets"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Home", "/home.shtml"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["What is jsWidgets?", "/readme.shtml"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Change Log", "/changelog.shtml"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["General Public License", "http://www.gnu.org/copyleft/gpl.html"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Project Page", "http://sourceforge.net/projects/jswidgets"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Download", "http://sourceforge.net/project/showfiles.php?group_id=33495"], JAM.policy.p1);
JAM.call(startMenu, null, ["Competition at SF"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["DynAPI", "http://dynapi.sourceforge.net"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["netWindows", "http://sourceforge.net/projects/netwindows"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["jsui", "http://jsui.sourceforge.net"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["judelib", "http://judelib.sourceforge.net"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["XPDOM", "http://xpdom.sourceforge.net"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Tree Menu", "http://www.treemenu.com"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["gmL-Modul", "http://gml-modul.sourceforge.net"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["PHP Layers", "http://phplayersmenu.sourceforge.net"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["WAB AWT", "http://www.skip-consulting.de/wab/wabawt/"], JAM.policy.p1);
JAM.call(endMenu, null, [], JAM.policy.p1);
JAM.call(endMenu, null, [], JAM.policy.p1);
JAM.call(startMenu, null, ["Examples"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Menus", "/examples/menus.shtml"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Notes", "/examples/notes.shtml"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Banners", "/examples/banners.shtml"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Browsers", "/examples/browsers.shtml"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Trees", "/examples/trees.shtml"], JAM.policy.p1);
JAM.call(endMenu, null, [], JAM.policy.p1);
JAM.call(startMenu, null, ["Documentation"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Menus", "/docs/menus.shtml"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Notes", "/docs/notes.shtml"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Banners", "/docs/banners.shtml"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Browsers", "/docs/browsers.shtml"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Trees", "/docs/trees.shtml"], JAM.policy.p1);
JAM.call(endMenu, null, [], JAM.policy.p1);
JAM.call(startMenu, null, ["On JavaScript"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Netscape Docs", "http://developer.netscape.com/docs/manuals/javascript.html"], JAM.policy.p1);
JAM.call(startMenu, null, ["ECMA Script"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["ECMA -262", "http://www.ecma.ch/ecma1/STAND/ECMA-262.HTM"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["DOM Level 1 Binding", "http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html"], JAM.policy.p1);
JAM.call(endMenu, null, [], JAM.policy.p1);
JAM.call(startMenu, null, ["Others Examples"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Javascript Source", "http://javascript.internet.com/"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Javascript.com", "http://www.javascript.com"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["Javascript Resources", "http://www.jsr.communitech.net/index3.htm"], JAM.policy.p1);
JAM.call(addMenuItem, null, ["W3Schools Examples", "http://www.w3schools.com/js/js_examples.asp"], JAM.policy.p1);
JAM.call(endMenu, null, [], JAM.policy.p1);
JAM.call(endSiteMap, null, [], JAM.policy.p1);
var v634 = is.w3c;
var v668 = !v634;
if (v668) {
  v634 = is.ie4;
}
var v500 = v634;
var v636 = !v500;
if (v636) {
  var v635 = is.ns4;
  if (v635) {
    var v669 = is.hj;
    v635 = !v669;
  }
  v500 = v635;
}
var v272 = v500;
if (v272) {
  var barTop = 20;
  var barLeft = 50;
  var barWidth = 370;
  var barHeight = 44;
  var itemPadding = 5;
  var barImage = "images/title.png";
  JAM.call(drawHMenuBar, null, [barLeft, barTop, barWidth, barHeight, itemPadding, barImage], JAM.policy.p1);
}
var v274 = is.w3c;
if (v274) {
  JAM.call(document.writeln, document, ['<div style="position : relative; top : 15px; float : right; padding-right : 42px; text-align : right">'], JAM.policy.p1);
  JAM.call(document.writeln, document, ['<a href="http://sourceforge.net/projects/jswidgets"><img src="http://sflogo.sourceforge.net/sflogo.php?group_id=33495&type=15" width="150" height="40" border="0" alt="Get Browser-Independent Javascript Widgets at SourceForge.net. Fast, secure and Free Open Source software downloads" /></a>'], JAM.policy.p1);
  JAM.call(document.writeln, document, ["</div>"], JAM.policy.p1);
} else {
  var v273 = is.ns4;
  if (v273) {
    JAM.call(document.writeln, document, ['<layer top="20" left="400">'], JAM.policy.p1);
    JAM.call(document.writeln, document, ['<a href="http://sourceforge.net/projects/jswidgets"><img src="http://sflogo.sourceforge.net/sflogo.php?group_id=33495&type=15" width="150" height="40" border="0" alt="Get Browser-Independent Javascript Widgets at SourceForge.net. Fast, secure and Free Open Source software downloads" /></a>'], JAM.policy.p1);
    JAM.call(document.writeln, document, ["</layer>"], JAM.policy.p1);
  }
}
var v275 = document.body;
v275.background = "images/researchbg.gif";
var v276 = document.body;
JAM.set(v276, "onload", initialize);
var v277 = JAM.call(document.getElementById, document, ["cleardiv"], JAM.policy.p1);
JAM.set(v277, "onmouseover", clearAll)
