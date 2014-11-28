
JAM.startProfile('load');
function v154(patterns) {
  function distance(pattern1$$1, pattern2$$1) {
    var v155 = pattern1$$1.X;
    var v156 = pattern2$$1.X;
    xDiff = v155 - v156;
    var v157 = pattern1$$1.Y;
    var v158 = pattern2$$1.Y;
    yDiff = v157 - v158;
    var v1058 = xDiff * xDiff;
    var v1059 = yDiff * yDiff;
    var v159 = v1058 + v1059;
    return JAM.call(Math.sqrt, Math, [v159], JAM.policy.p21);
  }
  function crossProductZ(pointA$$1, pointB$$1, pointC$$1) {
    var bX = pointB$$1.x;
    var bY = pointB$$1.y;
    var v1806 = pointC$$1.x;
    var v1060 = v1806 - bX;
    var v1807 = pointA$$1.y;
    var v1061 = v1807 - bY;
    var v160 = v1060 * v1061;
    var v1808 = pointC$$1.y;
    var v1062 = v1808 - bY;
    var v1809 = pointA$$1.x;
    var v1063 = v1809 - bX;
    var v161 = v1062 * v1063;
    return v160 - v161;
  }
  var v162 = patterns[0];
  var v163 = patterns[1];
  var zeroOneDistance = distance(v162, v163);
  var v164 = patterns[1];
  var v165 = patterns[2];
  var oneTwoDistance = distance(v164, v165);
  var v166 = patterns[0];
  var v167 = patterns[2];
  var zeroTwoDistance = distance(v166, v167);
  var pointA;
  var pointB;
  var pointC;
  var v1064 = oneTwoDistance >= zeroOneDistance;
  if (v1064) {
    v1064 = oneTwoDistance >= zeroTwoDistance;
  }
  var v169 = v1064;
  if (v169) {
    pointB = patterns[0];
    pointA = patterns[1];
    pointC = patterns[2];
  } else {
    var v1065 = zeroTwoDistance >= oneTwoDistance;
    if (v1065) {
      v1065 = zeroTwoDistance >= zeroOneDistance;
    }
    var v168 = v1065;
    if (v168) {
      pointB = patterns[1];
      pointA = patterns[0];
      pointC = patterns[2];
    } else {
      pointB = patterns[2];
      pointA = patterns[0];
      pointC = patterns[1];
    }
  }
  var v1066 = crossProductZ(pointA, pointB, pointC);
  var v170 = v1066 < 0;
  if (v170) {
    var temp$$5 = pointA;
    pointA = pointC;
    pointC = temp$$5;
  }
  patterns[0] = pointA;
  patterns[1] = pointB;
  patterns[2] = pointC;
  return;
}
function v153(from, to) {
  var v1810 = to || from;
  var v1067 = v1810 + 1;
  var v1811 = !v1067;
  if (v1811) {
    v1067 = this.length;
  }
  var v171 = v1067;
  var rest = JAM.call(this.slice, this, [v171], JAM.policy.p21);
  var v172;
  var v1069 = from < 0;
  if (v1069) {
    var v1068 = this.length;
    v172 = v1068 + from;
  } else {
    v172 = from;
  }
  this.length = v172;
  var v173 = this.push;
  return JAM.call(v173.apply, v173, [this, rest], JAM.policy.p33);
}
function v152() {
  var v1070 = qrcode.width;
  var v1071 = qrcode.height;
  var v174 = v1070 * v1071;
  var ret$$1 = new Array(v174);
  var y$$43 = 0;
  var v1072 = qrcode.height;
  var v177 = y$$43 < v1072;
  for (;v177;) {
    var x$$61 = 0;
    var v1073 = qrcode.width;
    var v176 = x$$61 < v1073;
    for (;v176;) {
      var gray$$1 = JAM.call(qrcode.getPixel, qrcode, [x$$61, y$$43], JAM.policy.p33);
      var v1812 = qrcode.width;
      var v1074 = y$$43 * v1812;
      var v175 = x$$61 + v1074;
      ret$$1[v175] = gray$$1;
      x$$61++;
      var v1075 = qrcode.width;
      v176 = x$$61 < v1075;
    }
    y$$43++;
    var v1076 = qrcode.height;
    v177 = y$$43 < v1076;
  }
  return ret$$1;
}
function v151(grayScale) {
  var middle$$1 = JAM.call(qrcode.getMiddleBrightnessPerArea, qrcode, [grayScale], JAM.policy.p21);
  var sqrtNumArea = middle$$1.length;
  var v1077 = qrcode.width;
  var v178 = v1077 / sqrtNumArea;
  var areaWidth$$1 = JAM.call(Math.floor, Math, [v178], JAM.policy.p21);
  var v1078 = qrcode.height;
  var v179 = v1078 / sqrtNumArea;
  var areaHeight$$1 = JAM.call(Math.floor, Math, [v179], JAM.policy.p21);
  var v1079 = qrcode.height;
  var v1080 = qrcode.width;
  var v180 = v1079 * v1080;
  var bitmap = new Array(v180);
  var ay$$1 = 0;
  var v185 = ay$$1 < sqrtNumArea;
  for (;v185;) {
    var ax$$1 = 0;
    var v184 = ax$$1 < sqrtNumArea;
    for (;v184;) {
      var dy$$6 = 0;
      var v183 = dy$$6 < areaHeight$$1;
      for (;v183;) {
        var dx$$6 = 0;
        var v182 = dx$$6 < areaWidth$$1;
        for (;v182;) {
          var v1813 = areaWidth$$1 * ax$$1;
          var v1081 = v1813 + dx$$6;
          var v2460 = areaHeight$$1 * ay$$1;
          var v1814 = v2460 + dy$$6;
          var v1815 = qrcode.width;
          var v1082 = v1814 * v1815;
          var v181 = v1081 + v1082;
          var v1083;
          var v2762 = areaWidth$$1 * ax$$1;
          var v2713 = v2762 + dx$$6;
          var v2785 = areaHeight$$1 * ay$$1;
          var v2763 = v2785 + dy$$6;
          var v2764 = qrcode.width;
          var v2714 = v2763 * v2764;
          var v2634 = v2713 + v2714;
          var v2461 = grayScale[v2634];
          var v2635 = middle$$1[ax$$1];
          var v2462 = v2635[ay$$1];
          var v1816 = v2461 < v2462;
          if (v1816) {
            v1083 = true;
          } else {
            v1083 = false;
          }
          bitmap[v181] = v1083;
          dx$$6++;
          v182 = dx$$6 < areaWidth$$1;
        }
        dy$$6++;
        v183 = dy$$6 < areaHeight$$1;
      }
      ax$$1++;
      v184 = ax$$1 < sqrtNumArea;
    }
    ay$$1++;
    v185 = ay$$1 < sqrtNumArea;
  }
  return bitmap;
}
function v150(image$$9) {
  var numSqrtArea = 4;
  var v1084 = qrcode.width;
  var v186 = v1084 / numSqrtArea;
  var areaWidth = JAM.call(Math.floor, Math, [v186], JAM.policy.p21);
  var v1085 = qrcode.height;
  var v187 = v1085 / numSqrtArea;
  var areaHeight = JAM.call(Math.floor, Math, [v187], JAM.policy.p21);
  var minmax = new Array(numSqrtArea);
  var i$$46 = 0;
  var v190 = i$$46 < numSqrtArea;
  for (;v190;) {
    var v2793 = new Array(numSqrtArea);
    minmax[i$$46] = v2793;
    var i2 = 0;
    var v189 = i2 < numSqrtArea;
    for (;v189;) {
      var v188 = minmax[i$$46];
      var v2794 = new Array(0, 0);
      v188[i2] = v2794;
      i2++;
      v189 = i2 < numSqrtArea;
    }
    i$$46++;
    v190 = i$$46 < numSqrtArea;
  }
  var ay = 0;
  var v200 = ay < numSqrtArea;
  for (;v200;) {
    var ax = 0;
    var v199 = ax < numSqrtArea;
    for (;v199;) {
      var v1086 = minmax[ax];
      var v191 = v1086[ay];
      v191[0] = 255;
      var dy$$5 = 0;
      var v198 = dy$$5 < areaHeight;
      for (;v198;) {
        var dx$$5 = 0;
        var v197 = dx$$5 < areaWidth;
        for (;v197;) {
          var v1817 = areaWidth * ax;
          var v1087 = v1817 + dx$$5;
          var v2463 = areaHeight * ay;
          var v1818 = v2463 + dy$$5;
          var v1819 = qrcode.width;
          var v1088 = v1818 * v1819;
          var v192 = v1087 + v1088;
          var target$$26 = image$$9[v192];
          var v2464 = minmax[ax];
          var v1820 = v2464[ay];
          var v1089 = v1820[0];
          var v194 = target$$26 < v1089;
          if (v194) {
            var v1090 = minmax[ax];
            var v193 = v1090[ay];
            v193[0] = target$$26;
          }
          var v2465 = minmax[ax];
          var v1821 = v2465[ay];
          var v1091 = v1821[1];
          var v196 = target$$26 > v1091;
          if (v196) {
            var v1092 = minmax[ax];
            var v195 = v1092[ay];
            v195[1] = target$$26;
          }
          dx$$5++;
          v197 = dx$$5 < areaWidth;
        }
        dy$$5++;
        v198 = dy$$5 < areaHeight;
      }
      ax++;
      v199 = ax < numSqrtArea;
    }
    ay++;
    v200 = ay < numSqrtArea;
  }
  var middle = new Array(numSqrtArea);
  var i3 = 0;
  var v201 = i3 < numSqrtArea;
  for (;v201;) {
    var v2795 = new Array(numSqrtArea);
    middle[i3] = v2795;
    i3++;
    v201 = i3 < numSqrtArea;
  }
  ay = 0;
  var v204 = ay < numSqrtArea;
  for (;v204;) {
    ax = 0;
    var v203 = ax < numSqrtArea;
    for (;v203;) {
      var v202 = middle[ax];
      var v2715 = minmax[ax];
      var v2636 = v2715[ay];
      var v2466 = v2636[0];
      var v2716 = minmax[ax];
      var v2637 = v2716[ay];
      var v2467 = v2637[1];
      var v1822 = v2466 + v2467;
      var v1093 = v1822 / 2;
      var v2796 = JAM.call(Math.floor, Math, [v1093], JAM.policy.p21);
      v202[ay] = v2796;
      ax++;
      v203 = ax < numSqrtArea;
    }
    ay++;
    v204 = ay < numSqrtArea;
  }
  return middle;
}
function v149(th) {
  var v1094 = qrcode.width;
  var v1095 = qrcode.height;
  var v205 = v1094 * v1095;
  var ret = new Array(v205);
  var y$$42 = 0;
  var v1096 = qrcode.height;
  var v208 = y$$42 < v1096;
  for (;v208;) {
    var x$$60 = 0;
    var v1097 = qrcode.width;
    var v207 = x$$60 < v1097;
    for (;v207;) {
      var gray = JAM.call(qrcode.getPixel, qrcode, [x$$60, y$$42], JAM.policy.p33);
      var v1823 = qrcode.width;
      var v1098 = y$$42 * v1823;
      var v206 = x$$60 + v1098;
      var v1099;
      var v1824 = gray <= th;
      if (v1824) {
        v1099 = true;
      } else {
        v1099 = false;
      }
      ret[v206] = v1099;
      x$$60++;
      var v1100 = qrcode.width;
      v207 = x$$60 < v1100;
    }
    y$$42++;
    var v1101 = qrcode.height;
    v208 = y$$42 < v1101;
  }
  return ret;
}
function v148(x$$59, y$$41) {
  var v1102 = qrcode.width;
  var v209 = v1102 < x$$59;
  if (v209) {
    throw "point error";
  }
  var v1103 = qrcode.height;
  var v210 = v1103 < y$$41;
  if (v210) {
    throw "point error";
  }
  var v211 = x$$59 * 4;
  var v1825 = qrcode.width;
  var v1104 = y$$41 * v1825;
  var v212 = v1104 * 4;
  var point$$1 = v211 + v212;
  var v2717 = qrcode.imagedata;
  var v2638 = v2717.data;
  var v2468 = v2638[point$$1];
  var v1826 = v2468 * 33;
  var v2718 = qrcode.imagedata;
  var v2639 = v2718.data;
  var v2640 = point$$1 + 1;
  var v2469 = v2639[v2640];
  var v1827 = v2469 * 34;
  var v1105 = v1826 + v1827;
  var v2641 = qrcode.imagedata;
  var v2470 = v2641.data;
  var v2471 = point$$1 + 2;
  var v1828 = v2470[v2471];
  var v1106 = v1828 * 33;
  var v213 = v1105 + v1106;
  p = v213 / 100;
  return p;
}
function v147(ctx) {
  var v214 = new Date;
  var start$$4 = v214.getTime();
  var v215 = qrcode.grayscale();
  var image$$8 = JAM.call(qrcode.grayScaleToBitmap, qrcode, [v215], JAM.policy.p21);
  var v226 = qrcode.debug;
  if (v226) {
    var y$$40 = 0;
    var v1107 = qrcode.height;
    var v224 = y$$40 < v1107;
    for (;v224;) {
      var x$$58 = 0;
      var v1108 = qrcode.width;
      var v223 = x$$58 < v1108;
      for (;v223;) {
        var v216 = x$$58 * 4;
        var v1829 = qrcode.width;
        var v1109 = y$$40 * v1829;
        var v217 = v1109 * 4;
        var point = v216 + v217;
        var v1110 = qrcode.imagedata;
        var v218 = v1110.data;
        var v1111;
        var v2719 = qrcode.width;
        var v2642 = y$$40 * v2719;
        var v2472 = x$$58 + v2642;
        var v1830 = image$$8[v2472];
        if (v1830) {
          v1111 = 0;
        } else {
          v1111 = 0;
        }
        v218[point] = v1111;
        var v1112 = qrcode.imagedata;
        var v219 = v1112.data;
        var v220 = point + 1;
        var v1113;
        var v2720 = qrcode.width;
        var v2643 = y$$40 * v2720;
        var v2473 = x$$58 + v2643;
        var v1831 = image$$8[v2473];
        if (v1831) {
          v1113 = 0;
        } else {
          v1113 = 0;
        }
        v219[v220] = v1113;
        var v1114 = qrcode.imagedata;
        var v221 = v1114.data;
        var v222 = point + 2;
        var v1115;
        var v2721 = qrcode.width;
        var v2644 = y$$40 * v2721;
        var v2474 = x$$58 + v2644;
        var v1832 = image$$8[v2474];
        if (v1832) {
          v1115 = 255;
        } else {
          v1115 = 0;
        }
        v221[v222] = v1115;
        x$$58++;
        var v1116 = qrcode.width;
        v223 = x$$58 < v1116;
      }
      y$$40++;
      var v1117 = qrcode.height;
      v224 = y$$40 < v1117;
    }
    var v225 = qrcode.imagedata;
    JAM.call(ctx.putImageData, ctx, [v225, 0, 0], JAM.policy.p25);
  }
  var detector = new Detector(image$$8);
  var qRCodeMatrix = detector.detect();
  var v228 = qrcode.debug;
  if (v228) {
    var v227 = qrcode.imagedata;
    JAM.call(ctx.putImageData, ctx, [v227, 0, 0], JAM.policy.p25);
  }
  var v229 = qRCodeMatrix.bits;
  var reader$$1 = JAM.call(Decoder.decode, Decoder, [v229], JAM.policy.p21);
  var data$$18 = reader$$1.DataByte;
  var str$$6 = "";
  var i$$45 = 0;
  var v1118 = data$$18.length;
  var v231 = i$$45 < v1118;
  for (;v231;) {
    var j$$24 = 0;
    var v1833 = data$$18[i$$45];
    var v1119 = v1833.length;
    var v230 = j$$24 < v1119;
    for (;v230;) {
      var v2475 = data$$18[i$$45];
      var v1834 = v2475[j$$24];
      var v1120 = JAM.call(String.fromCharCode, String, [v1834], JAM.policy.p21);
      str$$6 = str$$6 + v1120;
      j$$24++;
      var v1835 = data$$18[i$$45];
      var v1121 = v1835.length;
      v230 = j$$24 < v1121;
    }
    i$$45++;
    var v1122 = data$$18.length;
    v231 = i$$45 < v1122;
  }
  var v232 = new Date;
  var end$$1 = v232.getTime();
  var time = end$$1 - start$$4;
  JAM.call(console.log, console, [time], JAM.policy.p24);
  return JAM.call(qrcode.decode_utf8, qrcode, [str$$6], JAM.policy.p21);
}
function v146(s$$4) {
  var v233 = escape(s$$4);
  return decodeURIComponent(v233);
}
function v145(src$$1) {
  function v144() {
    var canvas_qr$$1 = JAM.call(document.createElement, document, ["canvas"], JAM.policy.p17);
    var context$$1 = JAM.call(canvas_qr$$1.getContext, canvas_qr$$1, ["2d"], JAM.policy.p17);
    var canvas_out = JAM.call(document.getElementById, document, ["out-canvas"], JAM.policy.p17);
    var v234 = canvas_out != null;
    if (v234) {
      var outctx = JAM.call(canvas_out.getContext, canvas_out, ["2d"], JAM.policy.p17);
      JAM.call(outctx.clearRect, outctx, [0, 0, 320, 240], JAM.policy.p20);
      JAM.call(outctx.drawImage, outctx, [image$$7, 0, 0, 320, 240], JAM.policy.p25);
    }
    canvas_qr$$1.width = image$$7.width;
    canvas_qr$$1.height = image$$7.height;
    JAM.call(context$$1.drawImage, context$$1, [image$$7, 0, 0], JAM.policy.p25);
    qrcode.width = image$$7.width;
    qrcode.height = image$$7.height;
    try {
      var v235 = qrcode;
      var v1123 = image$$7.width;
      var v1124 = image$$7.height;
      var v2797 = JAM.call(context$$1.getImageData, context$$1, [0, 0, v1123, v1124], JAM.policy.p20);
      v235.imagedata = v2797;
    } catch (e$$5) {
      qrcode.result = "Cross domain image reading not supported in your browser! Save it to your computer then drag and drop the file!";
      var v1125 = qrcode.callback;
      var v237 = v1125 != null;
      if (v237) {
        var v236 = qrcode.result;
        JAM.call(qrcode.callback, qrcode, [v236], JAM.policy.p21);
      }
      return;
    }
    try {
      var v238 = qrcode;
      var v2798 = JAM.call(qrcode.process, qrcode, [context$$1], JAM.policy.p21);
      v238.result = v2798;
    } catch (e$$6) {
      JAM.call(console.log, console, [e$$6], JAM.policy.p21);
      qrcode.result = "error decoding QR Code";
    }
    var v1126 = qrcode.callback;
    var v240 = v1126 != null;
    if (v240) {
      var v239 = qrcode.result;
      JAM.call(qrcode.callback, qrcode, [v239], JAM.policy.p21);
    }
    return;
  }
  var v1127 = arguments.length;
  var v245 = v1127 == 0;
  if (v245) {
    var canvas_qr = JAM.call(document.getElementById, document, ["qr-canvas"], JAM.policy.p17);
    var context = JAM.call(canvas_qr.getContext, canvas_qr, ["2d"], JAM.policy.p17);
    qrcode.width = canvas_qr.width;
    qrcode.height = canvas_qr.height;
    var v241 = qrcode;
    var v1128 = qrcode.width;
    var v1129 = qrcode.height;
    var v2799 = JAM.call(context.getImageData, context, [0, 0, v1128, v1129], JAM.policy.p20);
    v241.imagedata = v2799;
    var v242 = qrcode;
    var v2800 = JAM.call(qrcode.process, qrcode, [context], JAM.policy.p21);
    v242.result = v2800;
    var v1130 = qrcode.callback;
    var v244 = v1130 != null;
    if (v244) {
      var v243 = qrcode.result;
      JAM.call(qrcode.callback, qrcode, [v243], JAM.policy.p21);
    }
    return qrcode.result;
  } else {
    var image$$7 = new Image;
    JAM.set(image$$7, "onload", v144);
    introspect(JAM.policy.p1) {
      image$$7.src = src$$1;
    }
  }
  return;
}
function v143(bits$$13) {
  var parser = new BitMatrixParser(bits$$13);
  var version$$7 = parser.readVersion();
  var v246 = parser.readFormatInformation();
  var ecLevel$$2 = v246.ErrorCorrectionLevel;
  var codewords$$1 = parser.readCodewords();
  var dataBlocks = JAM.call(DataBlock.getDataBlocks, DataBlock, [codewords$$1, version$$7, ecLevel$$2], JAM.policy.p33);
  var totalBytes = 0;
  var i$$44 = 0;
  var v1131 = dataBlocks.Length;
  var v247 = i$$44 < v1131;
  for (;v247;) {
    var v1836 = dataBlocks[i$$44];
    var v1132 = v1836.NumDataCodewords;
    totalBytes = totalBytes + v1132;
    i$$44++;
    var v1133 = dataBlocks.Length;
    v247 = i$$44 < v1133;
  }
  var resultBytes = new Array(totalBytes);
  var resultOffset$$1 = 0;
  var j$$23 = 0;
  var v1134 = dataBlocks.length;
  var v250 = j$$23 < v1134;
  for (;v250;) {
    var dataBlock = dataBlocks[j$$23];
    var codewordBytes$$1 = dataBlock.Codewords;
    var numDataCodewords$$3 = dataBlock.NumDataCodewords;
    JAM.call(Decoder.correctErrors, Decoder, [codewordBytes$$1, numDataCodewords$$3], JAM.policy.p33);
    i$$44 = 0;
    var v249 = i$$44 < numDataCodewords$$3;
    for (;v249;) {
      var v248 = resultOffset$$1;
      resultOffset$$1 = resultOffset$$1 + 1;
      resultBytes[v248] = codewordBytes$$1[i$$44];
      i$$44++;
      v249 = i$$44 < numDataCodewords$$3;
    }
    j$$23++;
    var v1135 = dataBlocks.length;
    v250 = j$$23 < v1135;
  }
  var v251 = version$$7.VersionNumber;
  var v252 = ecLevel$$2.Bits;
  var reader = new QRCodeDataBlockReader(resultBytes, v251, v252);
  return reader;
}
function v142(codewordBytes, numDataCodewords$$2) {
  var numCodewords$$1 = codewordBytes.length;
  var codewordsInts = new Array(numCodewords$$1);
  var i$$43 = 0;
  var v254 = i$$43 < numCodewords$$1;
  for (;v254;) {
    var v253 = codewordBytes[i$$43];
    codewordsInts[i$$43] = v253 & 255;
    i$$43++;
    v254 = i$$43 < numCodewords$$1;
  }
  var v255 = codewordBytes.length;
  var numECCodewords = v255 - numDataCodewords$$2;
  try {
    var v256 = Decoder.rsDecoder;
    JAM.call(v256.decode, v256, [codewordsInts, numECCodewords], JAM.policy.p33);
  } catch (rse) {
    throw rse;
  }
  i$$43 = 0;
  var v257 = i$$43 < numDataCodewords$$2;
  for (;v257;) {
    codewordBytes[i$$43] = codewordsInts[i$$43];
    i$$43++;
    v257 = i$$43 < numDataCodewords$$2;
  }
  return;
}
function v141(a$$7, b$$4) {
  return a$$7 ^ b$$4;
}
function v140(reference) {
  var v1136 = reference < 0;
  var v1837 = !v1136;
  if (v1837) {
    v1136 = reference > 7;
  }
  var v258 = v1136;
  if (v258) {
    throw "System.ArgumentException";
  }
  var v259 = DataMask.DATA_MASKS;
  return v259[reference];
}
function v139(rawCodewords, version$$5, ecLevel$$1) {
  var v1137 = rawCodewords.length;
  var v1138 = version$$5.TotalCodewords;
  var v260 = v1137 != v1138;
  if (v260) {
    throw "ArgumentException";
  }
  var ecBlocks = JAM.call(version$$5.getECBlocksForLevel, version$$5, [ecLevel$$1], JAM.policy.p21);
  var totalBlocks = 0;
  var ecBlockArray = ecBlocks.ecBlocks;
  var i$$11 = 0;
  var v1139 = ecBlockArray.length;
  var v261 = i$$11 < v1139;
  for (;v261;) {
    var v1838 = ecBlockArray[i$$11];
    var v1140 = v1838.Count;
    totalBlocks = totalBlocks + v1140;
    i$$11++;
    var v1141 = ecBlockArray.length;
    v261 = i$$11 < v1141;
  }
  var result$$1 = new Array(totalBlocks);
  var numResultBlocks = 0;
  var j = 0;
  var v1142 = ecBlockArray.length;
  var v265 = j < v1142;
  for (;v265;) {
    var ecBlock$$1 = ecBlockArray[j];
    i$$11 = 0;
    var v1143 = ecBlock$$1.Count;
    var v264 = i$$11 < v1143;
    for (;v264;) {
      var numDataCodewords$$1 = ecBlock$$1.DataCodewords;
      var v262 = ecBlocks.ECCodewordsPerBlock;
      var numBlockCodewords = v262 + numDataCodewords$$1;
      var v263 = numResultBlocks;
      numResultBlocks = numResultBlocks + 1;
      var v1144 = new Array(numBlockCodewords);
      var v2801 = new DataBlock(numDataCodewords$$1, v1144);
      result$$1[v263] = v2801;
      i$$11++;
      var v1145 = ecBlock$$1.Count;
      v264 = i$$11 < v1145;
    }
    j++;
    var v1146 = ecBlockArray.length;
    v265 = j < v1146;
  }
  var v1147 = result$$1[0];
  var v266 = v1147.codewords;
  var shorterBlocksTotalCodewords = v266.length;
  var v267 = result$$1.length;
  var longerBlocksStartAt = v267 - 1;
  var v270 = longerBlocksStartAt >= 0;
  for (;v270;) {
    var v1148 = result$$1[longerBlocksStartAt];
    var v268 = v1148.codewords;
    var numCodewords = v268.length;
    var v269 = numCodewords == shorterBlocksTotalCodewords;
    if (v269) {
      break;
    }
    longerBlocksStartAt--;
    v270 = longerBlocksStartAt >= 0;
  }
  longerBlocksStartAt++;
  var v271 = ecBlocks.ECCodewordsPerBlock;
  var shorterBlocksNumDataCodewords = shorterBlocksTotalCodewords - v271;
  var rawCodewordsOffset = 0;
  i$$11 = 0;
  var v274 = i$$11 < shorterBlocksNumDataCodewords;
  for (;v274;) {
    j = 0;
    var v273 = j < numResultBlocks;
    for (;v273;) {
      var v1149 = result$$1[j];
      var v272 = v1149.codewords;
      var v1150 = rawCodewordsOffset;
      rawCodewordsOffset = rawCodewordsOffset + 1;
      v272[i$$11] = rawCodewords[v1150];
      j++;
      v273 = j < numResultBlocks;
    }
    i$$11++;
    v274 = i$$11 < shorterBlocksNumDataCodewords;
  }
  j = longerBlocksStartAt;
  var v276 = j < numResultBlocks;
  for (;v276;) {
    var v1151 = result$$1[j];
    var v275 = v1151.codewords;
    var v1152 = rawCodewordsOffset;
    rawCodewordsOffset = rawCodewordsOffset + 1;
    v275[shorterBlocksNumDataCodewords] = rawCodewords[v1152];
    j++;
    v276 = j < numResultBlocks;
  }
  var v1153 = result$$1[0];
  var v277 = v1153.codewords;
  var max$$4 = v277.length;
  i$$11 = shorterBlocksNumDataCodewords;
  var v281 = i$$11 < max$$4;
  for (;v281;) {
    j = 0;
    var v280 = j < numResultBlocks;
    for (;v280;) {
      var v278;
      var v1154 = j < longerBlocksStartAt;
      if (v1154) {
        v278 = i$$11;
      } else {
        v278 = i$$11 + 1;
      }
      var iOffset = v278;
      var v1155 = result$$1[j];
      var v279 = v1155.codewords;
      var v1156 = rawCodewordsOffset;
      rawCodewordsOffset = rawCodewordsOffset + 1;
      v279[iOffset] = rawCodewords[v1156];
      j++;
      v280 = j < numResultBlocks;
    }
    i$$11++;
    v281 = i$$11 < max$$4;
  }
  return result$$1;
}
function v138(bits$$4) {
  var v1157 = bits$$4 < 0;
  var v1840 = !v1157;
  if (v1840) {
    var v1839 = FOR_BITS.Length;
    v1157 = bits$$4 >= v1839;
  }
  var v282 = v1157;
  if (v282) {
    throw "ArgumentException";
  }
  return FOR_BITS[bits$$4];
}
function v137(maskedFormatInfo$$1) {
  var bestDifference$$1 = 4294967295;
  var bestFormatInfo = 0;
  var i$$8 = 0;
  var v1158 = FORMAT_INFO_DECODE_LOOKUP.length;
  var v286 = i$$8 < v1158;
  for (;v286;) {
    var decodeInfo = FORMAT_INFO_DECODE_LOOKUP[i$$8];
    var targetInfo = decodeInfo[0];
    var v284 = targetInfo == maskedFormatInfo$$1;
    if (v284) {
      var v283 = decodeInfo[1];
      return new FormatInformation(v283);
    }
    var bitsDifference$$1 = JAM.call(this.numBitsDiffering, this, [maskedFormatInfo$$1, targetInfo], JAM.policy.p33);
    var v285 = bitsDifference$$1 < bestDifference$$1;
    if (v285) {
      bestFormatInfo = decodeInfo[1];
      bestDifference$$1 = bitsDifference$$1;
    }
    i$$8++;
    var v1159 = FORMAT_INFO_DECODE_LOOKUP.length;
    v286 = i$$8 < v1159;
  }
  var v287 = bestDifference$$1 <= 3;
  if (v287) {
    return new FormatInformation(bestFormatInfo);
  }
  return null;
}
function v136(maskedFormatInfo) {
  var formatInfo$$1 = JAM.call(FormatInformation.doDecodeFormatInformation, FormatInformation, [maskedFormatInfo], JAM.policy.p21);
  var v288 = formatInfo$$1 != null;
  if (v288) {
    return formatInfo$$1;
  }
  var v289 = maskedFormatInfo ^ FORMAT_INFO_MASK_QR;
  return JAM.call(FormatInformation.doDecodeFormatInformation, FormatInformation, [v289], JAM.policy.p21);
}
function v135(a, b$$1) {
  a = a ^ b$$1;
  var v2786 = a & 15;
  var v2765 = BITS_SET_IN_HALF_BYTE[v2786];
  var v2787 = BITS_SET_IN_HALF_BYTE;
  var v2792 = URShift(a, 4);
  var v2788 = v2792 & 15;
  var v2766 = v2787[v2788];
  var v2722 = v2765 + v2766;
  var v2767 = BITS_SET_IN_HALF_BYTE;
  var v2789 = URShift(a, 8);
  var v2768 = v2789 & 15;
  var v2723 = v2767[v2768];
  var v2645 = v2722 + v2723;
  var v2724 = BITS_SET_IN_HALF_BYTE;
  var v2769 = URShift(a, 12);
  var v2725 = v2769 & 15;
  var v2646 = v2724[v2725];
  var v2476 = v2645 + v2646;
  var v2647 = BITS_SET_IN_HALF_BYTE;
  var v2726 = URShift(a, 16);
  var v2648 = v2726 & 15;
  var v2477 = v2647[v2648];
  var v1841 = v2476 + v2477;
  var v2478 = BITS_SET_IN_HALF_BYTE;
  var v2649 = URShift(a, 20);
  var v2479 = v2649 & 15;
  var v1842 = v2478[v2479];
  var v1160 = v1841 + v1842;
  var v1843 = BITS_SET_IN_HALF_BYTE;
  var v2480 = URShift(a, 24);
  var v1844 = v2480 & 15;
  var v1161 = v1843[v1844];
  var v290 = v1160 + v1161;
  var v1162 = BITS_SET_IN_HALF_BYTE;
  var v1845 = URShift(a, 28);
  var v1163 = v1845 & 15;
  var v291 = v1162[v1163];
  return v290 + v291;
}
function v134(x0$$4, y0$$4, x1$$5, y1$$5, x2$$3, y2$$3, x3$$2, y3$$2) {
  var v292 = JAM.call(this.squareToQuadrilateral, this, [x0$$4, y0$$4, x1$$5, y1$$5, x2$$3, y2$$3, x3$$2, y3$$2], JAM.policy.p33);
  return v292.buildAdjoint();
}
function v133(x0$$3, y0$$3, x1$$4, y1$$4, x2$$2, y2$$2, x3$$1, y3$$1) {
  dy2 = y3$$1 - y2$$2;
  var v1164 = y0$$3 - y1$$4;
  var v293 = v1164 + y2$$2;
  dy3 = v293 - y3$$1;
  var v1165 = dy2 == 0;
  if (v1165) {
    v1165 = dy3 == 0;
  }
  var v307 = v1165;
  if (v307) {
    var v294 = x1$$4 - x0$$3;
    var v295 = x2$$2 - x1$$4;
    var v296 = y1$$4 - y0$$3;
    var v297 = y2$$2 - y1$$4;
    return new PerspectiveTransform(v294, v295, x0$$3, v296, v297, y0$$3, 0, 0, 1);
  } else {
    dx1 = x1$$4 - x2$$2;
    dx2 = x3$$1 - x2$$2;
    var v1166 = x0$$3 - x1$$4;
    var v298 = v1166 + x2$$2;
    dx3 = v298 - x3$$1;
    dy1 = y1$$4 - y2$$2;
    var v299 = dx1 * dy2;
    var v300 = dx2 * dy1;
    denominator = v299 - v300;
    var v1167 = dx3 * dy2;
    var v1168 = dx2 * dy3;
    var v301 = v1167 - v1168;
    a13 = v301 / denominator;
    var v1169 = dx1 * dy3;
    var v1170 = dx3 * dy1;
    var v302 = v1169 - v1170;
    a23 = v302 / denominator;
    var v1171 = x1$$4 - x0$$3;
    var v1172 = a13 * x1$$4;
    var v303 = v1171 + v1172;
    var v1173 = x3$$1 - x0$$3;
    var v1174 = a23 * x3$$1;
    var v304 = v1173 + v1174;
    var v1175 = y1$$4 - y0$$3;
    var v1176 = a13 * y1$$4;
    var v305 = v1175 + v1176;
    var v1177 = y3$$1 - y0$$3;
    var v1178 = a23 * y3$$1;
    var v306 = v1177 + v1178;
    return new PerspectiveTransform(v303, v304, x0$$3, v305, v306, y0$$3, a13, a23, 1);
  }
  return;
}
function v132(x0$$2, y0$$2, x1$$3, y1$$3, x2$$1, y2$$1, x3, y3, x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p) {
  var qToS = JAM.call(this.quadrilateralToSquare, this, [x0$$2, y0$$2, x1$$3, y1$$3, x2$$1, y2$$1, x3, y3], JAM.policy.p33);
  var sToQ = JAM.call(this.squareToQuadrilateral, this, [x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p], JAM.policy.p33);
  return JAM.call(sToQ.times, sToQ, [qToS], JAM.policy.p21);
}
function v131(versionBits) {
  var bestDifference = 4294967295;
  var bestVersion = 0;
  var i$$4 = 0;
  var v1846 = Version.VERSION_DECODE_INFO;
  var v1179 = v1846.length;
  var v312 = i$$4 < v1179;
  for (;v312;) {
    var v308 = Version.VERSION_DECODE_INFO;
    var targetVersion = v308[i$$4];
    var v310 = targetVersion == versionBits;
    if (v310) {
      var v309 = i$$4 + 7;
      return JAM.call(this.getVersionForNumber, this, [v309], JAM.policy.p21);
    }
    var bitsDifference = JAM.call(FormatInformation.numBitsDiffering, FormatInformation, [versionBits, targetVersion], JAM.policy.p33);
    var v311 = bitsDifference < bestDifference;
    if (v311) {
      bestVersion = i$$4 + 7;
      bestDifference = bitsDifference;
    }
    i$$4++;
    var v1847 = Version.VERSION_DECODE_INFO;
    var v1180 = v1847.length;
    v312 = i$$4 < v1180;
  }
  var v313 = bestDifference <= 3;
  if (v313) {
    return JAM.call(this.getVersionForNumber, this, [bestVersion], JAM.policy.p21);
  }
  return null;
}
function v130(dimension$$3) {
  var v1181 = dimension$$3 % 4;
  var v314 = v1181 != 1;
  if (v314) {
    throw "Error getProvisionalVersionForDimension";
  }
  try {
    var v1182 = dimension$$3 - 17;
    var v315 = v1182 >> 2;
    return JAM.call(Version.getVersionForNumber, Version, [v315], JAM.policy.p21);
  } catch (iae) {
    throw "Error getVersionForNumber";
  }
  return;
}
function v129(versionNumber$$1) {
  var v1183 = versionNumber$$1 < 1;
  var v1848 = !v1183;
  if (v1848) {
    v1183 = versionNumber$$1 > 40;
  }
  var v316 = v1183;
  if (v316) {
    throw "ArgumentException";
  }
  var v317 = Version.VERSIONS;
  var v318 = versionNumber$$1 - 1;
  return v317[v318];
}
function v128(image$$4, dimension$$1, p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY) {
  var transform$$1 = JAM.call(PerspectiveTransform.quadrilateralToQuadrilateral, PerspectiveTransform, [p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY], JAM.policy.p33);
  return JAM.call(GridSampler.sampleGrid3, GridSampler, [image$$4, dimension$$1, transform$$1], JAM.policy.p33);
}
function v127(image$$3, dimension, transform) {
  var bits = new BitMatrix(dimension);
  var v319 = dimension << 1;
  var points$$1 = new Array(v319);
  var y$$31 = 0;
  var v335 = y$$31 < dimension;
  for (;v335;) {
    var max = points$$1.length;
    var iValue = y$$31 + .5;
    var x$$48 = 0;
    var v322 = x$$48 < max;
    for (;v322;) {
      var v320 = x$$48 >> 1;
      points$$1[x$$48] = v320 + .5;
      var v321 = x$$48 + 1;
      points$$1[v321] = iValue;
      x$$48 = x$$48 + 2;
      v322 = x$$48 < max;
    }
    JAM.call(transform.transformPoints1, transform, [points$$1], JAM.policy.p21);
    JAM.call(GridSampler.checkAndNudgePoints, GridSampler, [image$$3, points$$1], JAM.policy.p33);
    try {
      x$$48 = 0;
      var v334 = x$$48 < max;
      for (;v334;) {
        var v1849 = points$$1[x$$48];
        var v1184 = JAM.call(Math.floor, Math, [v1849], JAM.policy.p21);
        var v323 = v1184 * 4;
        var v2650 = x$$48 + 1;
        var v2481 = points$$1[v2650];
        var v1850 = JAM.call(Math.floor, Math, [v2481], JAM.policy.p21);
        var v1851 = qrcode.width;
        var v1185 = v1850 * v1851;
        var v324 = v1185 * 4;
        var xpoint = v323 + v324;
        var v1852 = points$$1[x$$48];
        var v1186 = JAM.call(Math.floor, Math, [v1852], JAM.policy.p21);
        var v1853 = qrcode.width;
        var v2651 = x$$48 + 1;
        var v2482 = points$$1[v2651];
        var v1854 = JAM.call(Math.floor, Math, [v2482], JAM.policy.p21);
        var v1187 = v1853 * v1854;
        var v325 = v1186 + v1187;
        var bit = image$$3[v325];
        var v1188 = qrcode.imagedata;
        var v326 = v1188.data;
        var v1189;
        if (bit) {
          v1189 = 255;
        } else {
          v1189 = 0;
        }
        v326[xpoint] = v1189;
        var v1190 = qrcode.imagedata;
        var v327 = v1190.data;
        var v328 = xpoint + 1;
        var v1191;
        if (bit) {
          v1191 = 255;
        } else {
          v1191 = 0;
        }
        v327[v328] = v1191;
        var v1192 = qrcode.imagedata;
        var v329 = v1192.data;
        var v330 = xpoint + 2;
        v329[v330] = 0;
        var v1193 = qrcode.imagedata;
        var v331 = v1193.data;
        var v332 = xpoint + 3;
        v331[v332] = 255;
        if (bit) {
          var v333 = x$$48 >> 1;
          JAM.call(bits.set_Renamed, bits, [v333, y$$31], JAM.policy.p23);
        }
        x$$48 = x$$48 + 2;
        v334 = x$$48 < max;
      }
    } catch (aioobe) {
      throw "Error.checkAndNudgePoints";
    }
    y$$31++;
    v335 = y$$31 < dimension;
  }
  return bits;
}
function v126(image$$2, points) {
  var width$$9 = qrcode.width;
  var height$$8 = qrcode.height;
  var nudged = true;
  var offset$$8 = 0;
  var v1855 = points.Length;
  var v1194 = offset$$8 < v1855;
  if (v1194) {
    v1194 = nudged;
  }
  var v345 = v1194;
  for (;v345;) {
    var v336 = points[offset$$8];
    var x$$47 = JAM.call(Math.floor, Math, [v336], JAM.policy.p21);
    var v1195 = offset$$8 + 1;
    var v337 = points[v1195];
    var y$$30 = JAM.call(Math.floor, Math, [v337], JAM.policy.p21);
    var v2483 = x$$47 < -1;
    var v2652 = !v2483;
    if (v2652) {
      v2483 = x$$47 > width$$9;
    }
    var v1856 = v2483;
    var v2484 = !v1856;
    if (v2484) {
      v1856 = y$$30 < -1;
    }
    var v1196 = v1856;
    var v1857 = !v1196;
    if (v1857) {
      v1196 = y$$30 > height$$8;
    }
    var v338 = v1196;
    if (v338) {
      throw "Error.checkAndNudgePoints ";
    }
    nudged = false;
    var v340 = x$$47 == -1;
    if (v340) {
      points[offset$$8] = 0;
      nudged = true;
    } else {
      var v339 = x$$47 == width$$9;
      if (v339) {
        points[offset$$8] = width$$9 - 1;
        nudged = true;
      }
    }
    var v344 = y$$30 == -1;
    if (v344) {
      var v341 = offset$$8 + 1;
      points[v341] = 0;
      nudged = true;
    } else {
      var v343 = y$$30 == height$$8;
      if (v343) {
        var v342 = offset$$8 + 1;
        points[v342] = height$$8 - 1;
        nudged = true;
      }
    }
    offset$$8 = offset$$8 + 2;
    var v1858 = points.Length;
    var v1197 = offset$$8 < v1858;
    if (v1197) {
      v1197 = nudged;
    }
    v345 = v1197;
  }
  nudged = true;
  var v346 = points.Length;
  offset$$8 = v346 - 2;
  var v1198 = offset$$8 >= 0;
  if (v1198) {
    v1198 = nudged;
  }
  var v356 = v1198;
  for (;v356;) {
    var v347 = points[offset$$8];
    x$$47 = JAM.call(Math.floor, Math, [v347], JAM.policy.p21);
    var v1199 = offset$$8 + 1;
    var v348 = points[v1199];
    y$$30 = JAM.call(Math.floor, Math, [v348], JAM.policy.p21);
    var v2485 = x$$47 < -1;
    var v2653 = !v2485;
    if (v2653) {
      v2485 = x$$47 > width$$9;
    }
    var v1859 = v2485;
    var v2486 = !v1859;
    if (v2486) {
      v1859 = y$$30 < -1;
    }
    var v1200 = v1859;
    var v1860 = !v1200;
    if (v1860) {
      v1200 = y$$30 > height$$8;
    }
    var v349 = v1200;
    if (v349) {
      throw "Error.checkAndNudgePoints ";
    }
    nudged = false;
    var v351 = x$$47 == -1;
    if (v351) {
      points[offset$$8] = 0;
      nudged = true;
    } else {
      var v350 = x$$47 == width$$9;
      if (v350) {
        points[offset$$8] = width$$9 - 1;
        nudged = true;
      }
    }
    var v355 = y$$30 == -1;
    if (v355) {
      var v352 = offset$$8 + 1;
      points[v352] = 0;
      nudged = true;
    } else {
      var v354 = y$$30 == height$$8;
      if (v354) {
        var v353 = offset$$8 + 1;
        points[v353] = height$$8 - 1;
        nudged = true;
      }
    }
    offset$$8 = offset$$8 - 2;
    var v1201 = offset$$8 >= 0;
    if (v1201) {
      v1201 = nudged;
    }
    v356 = v1201;
  }
  return;
}
function ECB(count$$3, dataCodewords) {
  function v1() {
    return this.dataCodewords;
  }
  function v0() {
    return this.count;
  }
  this.count = count$$3;
  this.dataCodewords = dataCodewords;
  JAM.call(this.__defineGetter__, this, ["Count", v0], JAM.policy.p19);
  JAM.call(this.__defineGetter__, this, ["DataCodewords", v1], JAM.policy.p19);
  return;
}
function ECBlocks(ecCodewordsPerBlock, ecBlocks1, ecBlocks2) {
  function v5() {
    return this.ecBlocks;
  }
  function v4() {
    var total = 0;
    var i$$1 = 0;
    var v1861 = this.ecBlocks;
    var v1202 = v1861.length;
    var v357 = i$$1 < v1202;
    for (;v357;) {
      var v2487 = this.ecBlocks;
      var v1862 = v2487[i$$1];
      var v1203 = v1862.length;
      total = total + v1203;
      i$$1++;
      var v1863 = this.ecBlocks;
      var v1204 = v1863.length;
      v357 = i$$1 < v1204;
    }
    return total;
  }
  function v3() {
    var v358 = this.ecCodewordsPerBlock;
    var v359 = this.NumBlocks;
    return v358 * v359;
  }
  function v2() {
    return this.ecCodewordsPerBlock;
  }
  this.ecCodewordsPerBlock = ecCodewordsPerBlock;
  if (ecBlocks2) {
    var v2802 = new Array(ecBlocks1, ecBlocks2);
    this.ecBlocks = v2802;
  } else {
    var v2803 = new Array(ecBlocks1);
    this.ecBlocks = v2803;
  }
  JAM.call(this.__defineGetter__, this, ["ECCodewordsPerBlock", v2], JAM.policy.p19);
  JAM.call(this.__defineGetter__, this, ["TotalECCodewords", v3], JAM.policy.p19);
  JAM.call(this.__defineGetter__, this, ["NumBlocks", v4], JAM.policy.p19);
  this.getECBlocks = v5;
  return;
}
function Version(versionNumber, alignmentPatternCenters, ecBlocks1$$1, ecBlocks2$$1, ecBlocks3, ecBlocks4) {
  function v11(ecLevel) {
    var v360 = this.ecBlocks;
    var v361 = ecLevel.ordinal_Renamed_Field;
    return v360[v361];
  }
  function v10() {
    var dimension$$2 = this.DimensionForVersion;
    var bitMatrix = new BitMatrix(dimension$$2);
    JAM.call(bitMatrix.setRegion, bitMatrix, [0, 0, 9, 9], JAM.policy.p20);
    var v362 = dimension$$2 - 8;
    JAM.call(bitMatrix.setRegion, bitMatrix, [v362, 0, 8, 9], JAM.policy.p23);
    var v363 = dimension$$2 - 8;
    JAM.call(bitMatrix.setRegion, bitMatrix, [0, v363, 9, 8], JAM.policy.p20);
    var v364 = this.alignmentPatternCenters;
    var max$$1 = v364.length;
    var x$$49 = 0;
    var v369 = x$$49 < max$$1;
    for (;v369;) {
      var v1205 = this.alignmentPatternCenters;
      var v365 = v1205[x$$49];
      var i$$3 = v365 - 2;
      var y$$32 = 0;
      var v368 = y$$32 < max$$1;
      for (;v368;) {
        var v1864 = x$$49 == 0;
        if (v1864) {
          var v2488 = y$$32 == 0;
          var v2655 = !v2488;
          if (v2655) {
            var v2654 = max$$1 - 1;
            v2488 = y$$32 == v2654;
          }
          v1864 = v2488;
        }
        var v1206 = v1864;
        var v1866 = !v1206;
        if (v1866) {
          var v2489 = max$$1 - 1;
          var v1865 = x$$49 == v2489;
          if (v1865) {
            v1865 = y$$32 == 0;
          }
          v1206 = v1865;
        }
        var v366 = v1206;
        if (v366) {
          y$$32++;
          v368 = y$$32 < max$$1;
          continue;
        }
        var v1867 = this.alignmentPatternCenters;
        var v1207 = v1867[y$$32];
        var v367 = v1207 - 2;
        JAM.call(bitMatrix.setRegion, bitMatrix, [v367, i$$3, 5, 5], JAM.policy.p23);
        y$$32++;
        v368 = y$$32 < max$$1;
      }
      x$$49++;
      v369 = x$$49 < max$$1;
    }
    var v370 = dimension$$2 - 17;
    JAM.call(bitMatrix.setRegion, bitMatrix, [6, 9, 1, v370], JAM.policy.p20);
    var v371 = dimension$$2 - 17;
    JAM.call(bitMatrix.setRegion, bitMatrix, [9, 6, v371, 1], JAM.policy.p20);
    var v1208 = this.versionNumber;
    var v374 = v1208 > 6;
    if (v374) {
      var v372 = dimension$$2 - 11;
      JAM.call(bitMatrix.setRegion, bitMatrix, [v372, 0, 3, 6], JAM.policy.p23);
      var v373 = dimension$$2 - 11;
      JAM.call(bitMatrix.setRegion, bitMatrix, [0, v373, 6, 3], JAM.policy.p20);
    }
    return bitMatrix;
  }
  function v9() {
    var v1209 = this.versionNumber;
    var v375 = 4 * v1209;
    return 17 + v375;
  }
  function v8() {
    return this.totalCodewords;
  }
  function v7() {
    return this.alignmentPatternCenters;
  }
  function v6() {
    return this.versionNumber;
  }
  this.versionNumber = versionNumber;
  this.alignmentPatternCenters = alignmentPatternCenters;
  var v2804 = new Array(ecBlocks1$$1, ecBlocks2$$1, ecBlocks3, ecBlocks4);
  this.ecBlocks = v2804;
  var total$$1 = 0;
  var ecCodewords = ecBlocks1$$1.ECCodewordsPerBlock;
  var ecbArray = ecBlocks1$$1.ecBlocks;
  var i$$2 = 0;
  var v1210 = ecbArray.length;
  var v376 = i$$2 < v1210;
  for (;v376;) {
    var ecBlock = ecbArray[i$$2];
    var v1868 = ecBlock.Count;
    var v2490 = ecBlock.DataCodewords;
    var v1869 = v2490 + ecCodewords;
    var v1211 = v1868 * v1869;
    total$$1 = total$$1 + v1211;
    i$$2++;
    var v1212 = ecbArray.length;
    v376 = i$$2 < v1212;
  }
  this.totalCodewords = total$$1;
  JAM.call(this.__defineGetter__, this, ["VersionNumber", v6], JAM.policy.p19);
  JAM.call(this.__defineGetter__, this, ["AlignmentPatternCenters", v7], JAM.policy.p19);
  JAM.call(this.__defineGetter__, this, ["TotalCodewords", v8], JAM.policy.p19);
  JAM.call(this.__defineGetter__, this, ["DimensionForVersion", v9], JAM.policy.p19);
  this.buildFunctionPattern = v10;
  this.getECBlocksForLevel = v11;
  return;
}
function buildVersions() {
  var v1213 = new Array;
  var v1870 = new ECB(1, 19);
  var v1214 = new ECBlocks(7, v1870);
  var v1871 = new ECB(1, 16);
  var v1215 = new ECBlocks(10, v1871);
  var v1872 = new ECB(1, 13);
  var v1216 = new ECBlocks(13, v1872);
  var v1873 = new ECB(1, 9);
  var v1217 = new ECBlocks(17, v1873);
  var v377 = new Version(1, v1213, v1214, v1215, v1216, v1217);
  var v1218 = new Array(6, 18);
  var v1874 = new ECB(1, 34);
  var v1219 = new ECBlocks(10, v1874);
  var v1875 = new ECB(1, 28);
  var v1220 = new ECBlocks(16, v1875);
  var v1876 = new ECB(1, 22);
  var v1221 = new ECBlocks(22, v1876);
  var v1877 = new ECB(1, 16);
  var v1222 = new ECBlocks(28, v1877);
  var v378 = new Version(2, v1218, v1219, v1220, v1221, v1222);
  var v1223 = new Array(6, 22);
  var v1878 = new ECB(1, 55);
  var v1224 = new ECBlocks(15, v1878);
  var v1879 = new ECB(1, 44);
  var v1225 = new ECBlocks(26, v1879);
  var v1880 = new ECB(2, 17);
  var v1226 = new ECBlocks(18, v1880);
  var v1881 = new ECB(2, 13);
  var v1227 = new ECBlocks(22, v1881);
  var v379 = new Version(3, v1223, v1224, v1225, v1226, v1227);
  var v1228 = new Array(6, 26);
  var v1882 = new ECB(1, 80);
  var v1229 = new ECBlocks(20, v1882);
  var v1883 = new ECB(2, 32);
  var v1230 = new ECBlocks(18, v1883);
  var v1884 = new ECB(2, 24);
  var v1231 = new ECBlocks(26, v1884);
  var v1885 = new ECB(4, 9);
  var v1232 = new ECBlocks(16, v1885);
  var v380 = new Version(4, v1228, v1229, v1230, v1231, v1232);
  var v1233 = new Array(6, 30);
  var v1886 = new ECB(1, 108);
  var v1234 = new ECBlocks(26, v1886);
  var v1887 = new ECB(2, 43);
  var v1235 = new ECBlocks(24, v1887);
  var v1888 = new ECB(2, 15);
  var v1889 = new ECB(2, 16);
  var v1236 = new ECBlocks(18, v1888, v1889);
  var v1890 = new ECB(2, 11);
  var v1891 = new ECB(2, 12);
  var v1237 = new ECBlocks(22, v1890, v1891);
  var v381 = new Version(5, v1233, v1234, v1235, v1236, v1237);
  var v1238 = new Array(6, 34);
  var v1892 = new ECB(2, 68);
  var v1239 = new ECBlocks(18, v1892);
  var v1893 = new ECB(4, 27);
  var v1240 = new ECBlocks(16, v1893);
  var v1894 = new ECB(4, 19);
  var v1241 = new ECBlocks(24, v1894);
  var v1895 = new ECB(4, 15);
  var v1242 = new ECBlocks(28, v1895);
  var v382 = new Version(6, v1238, v1239, v1240, v1241, v1242);
  var v1243 = new Array(6, 22, 38);
  var v1896 = new ECB(2, 78);
  var v1244 = new ECBlocks(20, v1896);
  var v1897 = new ECB(4, 31);
  var v1245 = new ECBlocks(18, v1897);
  var v1898 = new ECB(2, 14);
  var v1899 = new ECB(4, 15);
  var v1246 = new ECBlocks(18, v1898, v1899);
  var v1900 = new ECB(4, 13);
  var v1901 = new ECB(1, 14);
  var v1247 = new ECBlocks(26, v1900, v1901);
  var v383 = new Version(7, v1243, v1244, v1245, v1246, v1247);
  var v1248 = new Array(6, 24, 42);
  var v1902 = new ECB(2, 97);
  var v1249 = new ECBlocks(24, v1902);
  var v1903 = new ECB(2, 38);
  var v1904 = new ECB(2, 39);
  var v1250 = new ECBlocks(22, v1903, v1904);
  var v1905 = new ECB(4, 18);
  var v1906 = new ECB(2, 19);
  var v1251 = new ECBlocks(22, v1905, v1906);
  var v1907 = new ECB(4, 14);
  var v1908 = new ECB(2, 15);
  var v1252 = new ECBlocks(26, v1907, v1908);
  var v384 = new Version(8, v1248, v1249, v1250, v1251, v1252);
  var v1253 = new Array(6, 26, 46);
  var v1909 = new ECB(2, 116);
  var v1254 = new ECBlocks(30, v1909);
  var v1910 = new ECB(3, 36);
  var v1911 = new ECB(2, 37);
  var v1255 = new ECBlocks(22, v1910, v1911);
  var v1912 = new ECB(4, 16);
  var v1913 = new ECB(4, 17);
  var v1256 = new ECBlocks(20, v1912, v1913);
  var v1914 = new ECB(4, 12);
  var v1915 = new ECB(4, 13);
  var v1257 = new ECBlocks(24, v1914, v1915);
  var v385 = new Version(9, v1253, v1254, v1255, v1256, v1257);
  var v1258 = new Array(6, 28, 50);
  var v1916 = new ECB(2, 68);
  var v1917 = new ECB(2, 69);
  var v1259 = new ECBlocks(18, v1916, v1917);
  var v1918 = new ECB(4, 43);
  var v1919 = new ECB(1, 44);
  var v1260 = new ECBlocks(26, v1918, v1919);
  var v1920 = new ECB(6, 19);
  var v1921 = new ECB(2, 20);
  var v1261 = new ECBlocks(24, v1920, v1921);
  var v1922 = new ECB(6, 15);
  var v1923 = new ECB(2, 16);
  var v1262 = new ECBlocks(28, v1922, v1923);
  var v386 = new Version(10, v1258, v1259, v1260, v1261, v1262);
  var v1263 = new Array(6, 30, 54);
  var v1924 = new ECB(4, 81);
  var v1264 = new ECBlocks(20, v1924);
  var v1925 = new ECB(1, 50);
  var v1926 = new ECB(4, 51);
  var v1265 = new ECBlocks(30, v1925, v1926);
  var v1927 = new ECB(4, 22);
  var v1928 = new ECB(4, 23);
  var v1266 = new ECBlocks(28, v1927, v1928);
  var v1929 = new ECB(3, 12);
  var v1930 = new ECB(8, 13);
  var v1267 = new ECBlocks(24, v1929, v1930);
  var v387 = new Version(11, v1263, v1264, v1265, v1266, v1267);
  var v1268 = new Array(6, 32, 58);
  var v1931 = new ECB(2, 92);
  var v1932 = new ECB(2, 93);
  var v1269 = new ECBlocks(24, v1931, v1932);
  var v1933 = new ECB(6, 36);
  var v1934 = new ECB(2, 37);
  var v1270 = new ECBlocks(22, v1933, v1934);
  var v1935 = new ECB(4, 20);
  var v1936 = new ECB(6, 21);
  var v1271 = new ECBlocks(26, v1935, v1936);
  var v1937 = new ECB(7, 14);
  var v1938 = new ECB(4, 15);
  var v1272 = new ECBlocks(28, v1937, v1938);
  var v388 = new Version(12, v1268, v1269, v1270, v1271, v1272);
  var v1273 = new Array(6, 34, 62);
  var v1939 = new ECB(4, 107);
  var v1274 = new ECBlocks(26, v1939);
  var v1940 = new ECB(8, 37);
  var v1941 = new ECB(1, 38);
  var v1275 = new ECBlocks(22, v1940, v1941);
  var v1942 = new ECB(8, 20);
  var v1943 = new ECB(4, 21);
  var v1276 = new ECBlocks(24, v1942, v1943);
  var v1944 = new ECB(12, 11);
  var v1945 = new ECB(4, 12);
  var v1277 = new ECBlocks(22, v1944, v1945);
  var v389 = new Version(13, v1273, v1274, v1275, v1276, v1277);
  var v1278 = new Array(6, 26, 46, 66);
  var v1946 = new ECB(3, 115);
  var v1947 = new ECB(1, 116);
  var v1279 = new ECBlocks(30, v1946, v1947);
  var v1948 = new ECB(4, 40);
  var v1949 = new ECB(5, 41);
  var v1280 = new ECBlocks(24, v1948, v1949);
  var v1950 = new ECB(11, 16);
  var v1951 = new ECB(5, 17);
  var v1281 = new ECBlocks(20, v1950, v1951);
  var v1952 = new ECB(11, 12);
  var v1953 = new ECB(5, 13);
  var v1282 = new ECBlocks(24, v1952, v1953);
  var v390 = new Version(14, v1278, v1279, v1280, v1281, v1282);
  var v1283 = new Array(6, 26, 48, 70);
  var v1954 = new ECB(5, 87);
  var v1955 = new ECB(1, 88);
  var v1284 = new ECBlocks(22, v1954, v1955);
  var v1956 = new ECB(5, 41);
  var v1957 = new ECB(5, 42);
  var v1285 = new ECBlocks(24, v1956, v1957);
  var v1958 = new ECB(5, 24);
  var v1959 = new ECB(7, 25);
  var v1286 = new ECBlocks(30, v1958, v1959);
  var v1960 = new ECB(11, 12);
  var v1961 = new ECB(7, 13);
  var v1287 = new ECBlocks(24, v1960, v1961);
  var v391 = new Version(15, v1283, v1284, v1285, v1286, v1287);
  var v1288 = new Array(6, 26, 50, 74);
  var v1962 = new ECB(5, 98);
  var v1963 = new ECB(1, 99);
  var v1289 = new ECBlocks(24, v1962, v1963);
  var v1964 = new ECB(7, 45);
  var v1965 = new ECB(3, 46);
  var v1290 = new ECBlocks(28, v1964, v1965);
  var v1966 = new ECB(15, 19);
  var v1967 = new ECB(2, 20);
  var v1291 = new ECBlocks(24, v1966, v1967);
  var v1968 = new ECB(3, 15);
  var v1969 = new ECB(13, 16);
  var v1292 = new ECBlocks(30, v1968, v1969);
  var v392 = new Version(16, v1288, v1289, v1290, v1291, v1292);
  var v1293 = new Array(6, 30, 54, 78);
  var v1970 = new ECB(1, 107);
  var v1971 = new ECB(5, 108);
  var v1294 = new ECBlocks(28, v1970, v1971);
  var v1972 = new ECB(10, 46);
  var v1973 = new ECB(1, 47);
  var v1295 = new ECBlocks(28, v1972, v1973);
  var v1974 = new ECB(1, 22);
  var v1975 = new ECB(15, 23);
  var v1296 = new ECBlocks(28, v1974, v1975);
  var v1976 = new ECB(2, 14);
  var v1977 = new ECB(17, 15);
  var v1297 = new ECBlocks(28, v1976, v1977);
  var v393 = new Version(17, v1293, v1294, v1295, v1296, v1297);
  var v1298 = new Array(6, 30, 56, 82);
  var v1978 = new ECB(5, 120);
  var v1979 = new ECB(1, 121);
  var v1299 = new ECBlocks(30, v1978, v1979);
  var v1980 = new ECB(9, 43);
  var v1981 = new ECB(4, 44);
  var v1300 = new ECBlocks(26, v1980, v1981);
  var v1982 = new ECB(17, 22);
  var v1983 = new ECB(1, 23);
  var v1301 = new ECBlocks(28, v1982, v1983);
  var v1984 = new ECB(2, 14);
  var v1985 = new ECB(19, 15);
  var v1302 = new ECBlocks(28, v1984, v1985);
  var v394 = new Version(18, v1298, v1299, v1300, v1301, v1302);
  var v1303 = new Array(6, 30, 58, 86);
  var v1986 = new ECB(3, 113);
  var v1987 = new ECB(4, 114);
  var v1304 = new ECBlocks(28, v1986, v1987);
  var v1988 = new ECB(3, 44);
  var v1989 = new ECB(11, 45);
  var v1305 = new ECBlocks(26, v1988, v1989);
  var v1990 = new ECB(17, 21);
  var v1991 = new ECB(4, 22);
  var v1306 = new ECBlocks(26, v1990, v1991);
  var v1992 = new ECB(9, 13);
  var v1993 = new ECB(16, 14);
  var v1307 = new ECBlocks(26, v1992, v1993);
  var v395 = new Version(19, v1303, v1304, v1305, v1306, v1307);
  var v1308 = new Array(6, 34, 62, 90);
  var v1994 = new ECB(3, 107);
  var v1995 = new ECB(5, 108);
  var v1309 = new ECBlocks(28, v1994, v1995);
  var v1996 = new ECB(3, 41);
  var v1997 = new ECB(13, 42);
  var v1310 = new ECBlocks(26, v1996, v1997);
  var v1998 = new ECB(15, 24);
  var v1999 = new ECB(5, 25);
  var v1311 = new ECBlocks(30, v1998, v1999);
  var v2000 = new ECB(15, 15);
  var v2001 = new ECB(10, 16);
  var v1312 = new ECBlocks(28, v2000, v2001);
  var v396 = new Version(20, v1308, v1309, v1310, v1311, v1312);
  var v1313 = new Array(6, 28, 50, 72, 94);
  var v2002 = new ECB(4, 116);
  var v2003 = new ECB(4, 117);
  var v1314 = new ECBlocks(28, v2002, v2003);
  var v2004 = new ECB(17, 42);
  var v1315 = new ECBlocks(26, v2004);
  var v2005 = new ECB(17, 22);
  var v2006 = new ECB(6, 23);
  var v1316 = new ECBlocks(28, v2005, v2006);
  var v2007 = new ECB(19, 16);
  var v2008 = new ECB(6, 17);
  var v1317 = new ECBlocks(30, v2007, v2008);
  var v397 = new Version(21, v1313, v1314, v1315, v1316, v1317);
  var v1318 = new Array(6, 26, 50, 74, 98);
  var v2009 = new ECB(2, 111);
  var v2010 = new ECB(7, 112);
  var v1319 = new ECBlocks(28, v2009, v2010);
  var v2011 = new ECB(17, 46);
  var v1320 = new ECBlocks(28, v2011);
  var v2012 = new ECB(7, 24);
  var v2013 = new ECB(16, 25);
  var v1321 = new ECBlocks(30, v2012, v2013);
  var v2014 = new ECB(34, 13);
  var v1322 = new ECBlocks(24, v2014);
  var v398 = new Version(22, v1318, v1319, v1320, v1321, v1322);
  var v1323 = new Array(6, 30, 54, 74, 102);
  var v2015 = new ECB(4, 121);
  var v2016 = new ECB(5, 122);
  var v1324 = new ECBlocks(30, v2015, v2016);
  var v2017 = new ECB(4, 47);
  var v2018 = new ECB(14, 48);
  var v1325 = new ECBlocks(28, v2017, v2018);
  var v2019 = new ECB(11, 24);
  var v2020 = new ECB(14, 25);
  var v1326 = new ECBlocks(30, v2019, v2020);
  var v2021 = new ECB(16, 15);
  var v2022 = new ECB(14, 16);
  var v1327 = new ECBlocks(30, v2021, v2022);
  var v399 = new Version(23, v1323, v1324, v1325, v1326, v1327);
  var v1328 = new Array(6, 28, 54, 80, 106);
  var v2023 = new ECB(6, 117);
  var v2024 = new ECB(4, 118);
  var v1329 = new ECBlocks(30, v2023, v2024);
  var v2025 = new ECB(6, 45);
  var v2026 = new ECB(14, 46);
  var v1330 = new ECBlocks(28, v2025, v2026);
  var v2027 = new ECB(11, 24);
  var v2028 = new ECB(16, 25);
  var v1331 = new ECBlocks(30, v2027, v2028);
  var v2029 = new ECB(30, 16);
  var v2030 = new ECB(2, 17);
  var v1332 = new ECBlocks(30, v2029, v2030);
  var v400 = new Version(24, v1328, v1329, v1330, v1331, v1332);
  var v1333 = new Array(6, 32, 58, 84, 110);
  var v2031 = new ECB(8, 106);
  var v2032 = new ECB(4, 107);
  var v1334 = new ECBlocks(26, v2031, v2032);
  var v2033 = new ECB(8, 47);
  var v2034 = new ECB(13, 48);
  var v1335 = new ECBlocks(28, v2033, v2034);
  var v2035 = new ECB(7, 24);
  var v2036 = new ECB(22, 25);
  var v1336 = new ECBlocks(30, v2035, v2036);
  var v2037 = new ECB(22, 15);
  var v2038 = new ECB(13, 16);
  var v1337 = new ECBlocks(30, v2037, v2038);
  var v401 = new Version(25, v1333, v1334, v1335, v1336, v1337);
  var v1338 = new Array(6, 30, 58, 86, 114);
  var v2039 = new ECB(10, 114);
  var v2040 = new ECB(2, 115);
  var v1339 = new ECBlocks(28, v2039, v2040);
  var v2041 = new ECB(19, 46);
  var v2042 = new ECB(4, 47);
  var v1340 = new ECBlocks(28, v2041, v2042);
  var v2043 = new ECB(28, 22);
  var v2044 = new ECB(6, 23);
  var v1341 = new ECBlocks(28, v2043, v2044);
  var v2045 = new ECB(33, 16);
  var v2046 = new ECB(4, 17);
  var v1342 = new ECBlocks(30, v2045, v2046);
  var v402 = new Version(26, v1338, v1339, v1340, v1341, v1342);
  var v1343 = new Array(6, 34, 62, 90, 118);
  var v2047 = new ECB(8, 122);
  var v2048 = new ECB(4, 123);
  var v1344 = new ECBlocks(30, v2047, v2048);
  var v2049 = new ECB(22, 45);
  var v2050 = new ECB(3, 46);
  var v1345 = new ECBlocks(28, v2049, v2050);
  var v2051 = new ECB(8, 23);
  var v2052 = new ECB(26, 24);
  var v1346 = new ECBlocks(30, v2051, v2052);
  var v2053 = new ECB(12, 15);
  var v2054 = new ECB(28, 16);
  var v1347 = new ECBlocks(30, v2053, v2054);
  var v403 = new Version(27, v1343, v1344, v1345, v1346, v1347);
  var v1348 = new Array(6, 26, 50, 74, 98, 122);
  var v2055 = new ECB(3, 117);
  var v2056 = new ECB(10, 118);
  var v1349 = new ECBlocks(30, v2055, v2056);
  var v2057 = new ECB(3, 45);
  var v2058 = new ECB(23, 46);
  var v1350 = new ECBlocks(28, v2057, v2058);
  var v2059 = new ECB(4, 24);
  var v2060 = new ECB(31, 25);
  var v1351 = new ECBlocks(30, v2059, v2060);
  var v2061 = new ECB(11, 15);
  var v2062 = new ECB(31, 16);
  var v1352 = new ECBlocks(30, v2061, v2062);
  var v404 = new Version(28, v1348, v1349, v1350, v1351, v1352);
  var v1353 = new Array(6, 30, 54, 78, 102, 126);
  var v2063 = new ECB(7, 116);
  var v2064 = new ECB(7, 117);
  var v1354 = new ECBlocks(30, v2063, v2064);
  var v2065 = new ECB(21, 45);
  var v2066 = new ECB(7, 46);
  var v1355 = new ECBlocks(28, v2065, v2066);
  var v2067 = new ECB(1, 23);
  var v2068 = new ECB(37, 24);
  var v1356 = new ECBlocks(30, v2067, v2068);
  var v2069 = new ECB(19, 15);
  var v2070 = new ECB(26, 16);
  var v1357 = new ECBlocks(30, v2069, v2070);
  var v405 = new Version(29, v1353, v1354, v1355, v1356, v1357);
  var v1358 = new Array(6, 26, 52, 78, 104, 130);
  var v2071 = new ECB(5, 115);
  var v2072 = new ECB(10, 116);
  var v1359 = new ECBlocks(30, v2071, v2072);
  var v2073 = new ECB(19, 47);
  var v2074 = new ECB(10, 48);
  var v1360 = new ECBlocks(28, v2073, v2074);
  var v2075 = new ECB(15, 24);
  var v2076 = new ECB(25, 25);
  var v1361 = new ECBlocks(30, v2075, v2076);
  var v2077 = new ECB(23, 15);
  var v2078 = new ECB(25, 16);
  var v1362 = new ECBlocks(30, v2077, v2078);
  var v406 = new Version(30, v1358, v1359, v1360, v1361, v1362);
  var v1363 = new Array(6, 30, 56, 82, 108, 134);
  var v2079 = new ECB(13, 115);
  var v2080 = new ECB(3, 116);
  var v1364 = new ECBlocks(30, v2079, v2080);
  var v2081 = new ECB(2, 46);
  var v2082 = new ECB(29, 47);
  var v1365 = new ECBlocks(28, v2081, v2082);
  var v2083 = new ECB(42, 24);
  var v2084 = new ECB(1, 25);
  var v1366 = new ECBlocks(30, v2083, v2084);
  var v2085 = new ECB(23, 15);
  var v2086 = new ECB(28, 16);
  var v1367 = new ECBlocks(30, v2085, v2086);
  var v407 = new Version(31, v1363, v1364, v1365, v1366, v1367);
  var v1368 = new Array(6, 34, 60, 86, 112, 138);
  var v2087 = new ECB(17, 115);
  var v1369 = new ECBlocks(30, v2087);
  var v2088 = new ECB(10, 46);
  var v2089 = new ECB(23, 47);
  var v1370 = new ECBlocks(28, v2088, v2089);
  var v2090 = new ECB(10, 24);
  var v2091 = new ECB(35, 25);
  var v1371 = new ECBlocks(30, v2090, v2091);
  var v2092 = new ECB(19, 15);
  var v2093 = new ECB(35, 16);
  var v1372 = new ECBlocks(30, v2092, v2093);
  var v408 = new Version(32, v1368, v1369, v1370, v1371, v1372);
  var v1373 = new Array(6, 30, 58, 86, 114, 142);
  var v2094 = new ECB(17, 115);
  var v2095 = new ECB(1, 116);
  var v1374 = new ECBlocks(30, v2094, v2095);
  var v2096 = new ECB(14, 46);
  var v2097 = new ECB(21, 47);
  var v1375 = new ECBlocks(28, v2096, v2097);
  var v2098 = new ECB(29, 24);
  var v2099 = new ECB(19, 25);
  var v1376 = new ECBlocks(30, v2098, v2099);
  var v2100 = new ECB(11, 15);
  var v2101 = new ECB(46, 16);
  var v1377 = new ECBlocks(30, v2100, v2101);
  var v409 = new Version(33, v1373, v1374, v1375, v1376, v1377);
  var v1378 = new Array(6, 34, 62, 90, 118, 146);
  var v2102 = new ECB(13, 115);
  var v2103 = new ECB(6, 116);
  var v1379 = new ECBlocks(30, v2102, v2103);
  var v2104 = new ECB(14, 46);
  var v2105 = new ECB(23, 47);
  var v1380 = new ECBlocks(28, v2104, v2105);
  var v2106 = new ECB(44, 24);
  var v2107 = new ECB(7, 25);
  var v1381 = new ECBlocks(30, v2106, v2107);
  var v2108 = new ECB(59, 16);
  var v2109 = new ECB(1, 17);
  var v1382 = new ECBlocks(30, v2108, v2109);
  var v410 = new Version(34, v1378, v1379, v1380, v1381, v1382);
  var v1383 = new Array(6, 30, 54, 78, 102, 126, 150);
  var v2110 = new ECB(12, 121);
  var v2111 = new ECB(7, 122);
  var v1384 = new ECBlocks(30, v2110, v2111);
  var v2112 = new ECB(12, 47);
  var v2113 = new ECB(26, 48);
  var v1385 = new ECBlocks(28, v2112, v2113);
  var v2114 = new ECB(39, 24);
  var v2115 = new ECB(14, 25);
  var v1386 = new ECBlocks(30, v2114, v2115);
  var v2116 = new ECB(22, 15);
  var v2117 = new ECB(41, 16);
  var v1387 = new ECBlocks(30, v2116, v2117);
  var v411 = new Version(35, v1383, v1384, v1385, v1386, v1387);
  var v1388 = new Array(6, 24, 50, 76, 102, 128, 154);
  var v2118 = new ECB(6, 121);
  var v2119 = new ECB(14, 122);
  var v1389 = new ECBlocks(30, v2118, v2119);
  var v2120 = new ECB(6, 47);
  var v2121 = new ECB(34, 48);
  var v1390 = new ECBlocks(28, v2120, v2121);
  var v2122 = new ECB(46, 24);
  var v2123 = new ECB(10, 25);
  var v1391 = new ECBlocks(30, v2122, v2123);
  var v2124 = new ECB(2, 15);
  var v2125 = new ECB(64, 16);
  var v1392 = new ECBlocks(30, v2124, v2125);
  var v412 = new Version(36, v1388, v1389, v1390, v1391, v1392);
  var v1393 = new Array(6, 28, 54, 80, 106, 132, 158);
  var v2126 = new ECB(17, 122);
  var v2127 = new ECB(4, 123);
  var v1394 = new ECBlocks(30, v2126, v2127);
  var v2128 = new ECB(29, 46);
  var v2129 = new ECB(14, 47);
  var v1395 = new ECBlocks(28, v2128, v2129);
  var v2130 = new ECB(49, 24);
  var v2131 = new ECB(10, 25);
  var v1396 = new ECBlocks(30, v2130, v2131);
  var v2132 = new ECB(24, 15);
  var v2133 = new ECB(46, 16);
  var v1397 = new ECBlocks(30, v2132, v2133);
  var v413 = new Version(37, v1393, v1394, v1395, v1396, v1397);
  var v1398 = new Array(6, 32, 58, 84, 110, 136, 162);
  var v2134 = new ECB(4, 122);
  var v2135 = new ECB(18, 123);
  var v1399 = new ECBlocks(30, v2134, v2135);
  var v2136 = new ECB(13, 46);
  var v2137 = new ECB(32, 47);
  var v1400 = new ECBlocks(28, v2136, v2137);
  var v2138 = new ECB(48, 24);
  var v2139 = new ECB(14, 25);
  var v1401 = new ECBlocks(30, v2138, v2139);
  var v2140 = new ECB(42, 15);
  var v2141 = new ECB(32, 16);
  var v1402 = new ECBlocks(30, v2140, v2141);
  var v414 = new Version(38, v1398, v1399, v1400, v1401, v1402);
  var v1403 = new Array(6, 26, 54, 82, 110, 138, 166);
  var v2142 = new ECB(20, 117);
  var v2143 = new ECB(4, 118);
  var v1404 = new ECBlocks(30, v2142, v2143);
  var v2144 = new ECB(40, 47);
  var v2145 = new ECB(7, 48);
  var v1405 = new ECBlocks(28, v2144, v2145);
  var v2146 = new ECB(43, 24);
  var v2147 = new ECB(22, 25);
  var v1406 = new ECBlocks(30, v2146, v2147);
  var v2148 = new ECB(10, 15);
  var v2149 = new ECB(67, 16);
  var v1407 = new ECBlocks(30, v2148, v2149);
  var v415 = new Version(39, v1403, v1404, v1405, v1406, v1407);
  var v1408 = new Array(6, 30, 58, 86, 114, 142, 170);
  var v2150 = new ECB(19, 118);
  var v2151 = new ECB(6, 119);
  var v1409 = new ECBlocks(30, v2150, v2151);
  var v2152 = new ECB(18, 47);
  var v2153 = new ECB(31, 48);
  var v1410 = new ECBlocks(28, v2152, v2153);
  var v2154 = new ECB(34, 24);
  var v2155 = new ECB(34, 25);
  var v1411 = new ECBlocks(30, v2154, v2155);
  var v2156 = new ECB(20, 15);
  var v2157 = new ECB(61, 16);
  var v1412 = new ECBlocks(30, v2156, v2157);
  var v416 = new Version(40, v1408, v1409, v1410, v1411, v1412);
  return new Array(v377, v378, v379, v380, v381, v382, v383, v384, v385, v386, v387, v388, v389, v390, v391, v392, v393, v394, v395, v396, v397, v398, v399, v400, v401, v402, v403, v404, v405, v406, v407, v408, v409, v410, v411, v412, v413, v414, v415, v416);
}
function PerspectiveTransform(a11, a21, a31, a12, a22, a32, a13$$1, a23$$1, a33) {
  function v15(other$$4) {
    var v2491 = this.a11;
    var v2492 = other$$4.a11;
    var v2158 = v2491 * v2492;
    var v2493 = this.a21;
    var v2494 = other$$4.a12;
    var v2159 = v2493 * v2494;
    var v1413 = v2158 + v2159;
    var v2160 = this.a31;
    var v2161 = other$$4.a13;
    var v1414 = v2160 * v2161;
    var v417 = v1413 + v1414;
    var v2495 = this.a11;
    var v2496 = other$$4.a21;
    var v2162 = v2495 * v2496;
    var v2497 = this.a21;
    var v2498 = other$$4.a22;
    var v2163 = v2497 * v2498;
    var v1415 = v2162 + v2163;
    var v2164 = this.a31;
    var v2165 = other$$4.a23;
    var v1416 = v2164 * v2165;
    var v418 = v1415 + v1416;
    var v2499 = this.a11;
    var v2500 = other$$4.a31;
    var v2166 = v2499 * v2500;
    var v2501 = this.a21;
    var v2502 = other$$4.a32;
    var v2167 = v2501 * v2502;
    var v1417 = v2166 + v2167;
    var v2168 = this.a31;
    var v2169 = other$$4.a33;
    var v1418 = v2168 * v2169;
    var v419 = v1417 + v1418;
    var v2503 = this.a12;
    var v2504 = other$$4.a11;
    var v2170 = v2503 * v2504;
    var v2505 = this.a22;
    var v2506 = other$$4.a12;
    var v2171 = v2505 * v2506;
    var v1419 = v2170 + v2171;
    var v2172 = this.a32;
    var v2173 = other$$4.a13;
    var v1420 = v2172 * v2173;
    var v420 = v1419 + v1420;
    var v2507 = this.a12;
    var v2508 = other$$4.a21;
    var v2174 = v2507 * v2508;
    var v2509 = this.a22;
    var v2510 = other$$4.a22;
    var v2175 = v2509 * v2510;
    var v1421 = v2174 + v2175;
    var v2176 = this.a32;
    var v2177 = other$$4.a23;
    var v1422 = v2176 * v2177;
    var v421 = v1421 + v1422;
    var v2511 = this.a12;
    var v2512 = other$$4.a31;
    var v2178 = v2511 * v2512;
    var v2513 = this.a22;
    var v2514 = other$$4.a32;
    var v2179 = v2513 * v2514;
    var v1423 = v2178 + v2179;
    var v2180 = this.a32;
    var v2181 = other$$4.a33;
    var v1424 = v2180 * v2181;
    var v422 = v1423 + v1424;
    var v2515 = this.a13;
    var v2516 = other$$4.a11;
    var v2182 = v2515 * v2516;
    var v2517 = this.a23;
    var v2518 = other$$4.a12;
    var v2183 = v2517 * v2518;
    var v1425 = v2182 + v2183;
    var v2184 = this.a33;
    var v2185 = other$$4.a13;
    var v1426 = v2184 * v2185;
    var v423 = v1425 + v1426;
    var v2519 = this.a13;
    var v2520 = other$$4.a21;
    var v2186 = v2519 * v2520;
    var v2521 = this.a23;
    var v2522 = other$$4.a22;
    var v2187 = v2521 * v2522;
    var v1427 = v2186 + v2187;
    var v2188 = this.a33;
    var v2189 = other$$4.a23;
    var v1428 = v2188 * v2189;
    var v424 = v1427 + v1428;
    var v2523 = this.a13;
    var v2524 = other$$4.a31;
    var v2190 = v2523 * v2524;
    var v2525 = this.a23;
    var v2526 = other$$4.a32;
    var v2191 = v2525 * v2526;
    var v1429 = v2190 + v2191;
    var v2192 = this.a33;
    var v2193 = other$$4.a33;
    var v1430 = v2192 * v2193;
    var v425 = v1429 + v1430;
    return new PerspectiveTransform(v417, v418, v419, v420, v421, v422, v423, v424, v425);
  }
  function v14() {
    var v2194 = this.a22;
    var v2195 = this.a33;
    var v1431 = v2194 * v2195;
    var v2196 = this.a23;
    var v2197 = this.a32;
    var v1432 = v2196 * v2197;
    var v426 = v1431 - v1432;
    var v2198 = this.a23;
    var v2199 = this.a31;
    var v1433 = v2198 * v2199;
    var v2200 = this.a21;
    var v2201 = this.a33;
    var v1434 = v2200 * v2201;
    var v427 = v1433 - v1434;
    var v2202 = this.a21;
    var v2203 = this.a32;
    var v1435 = v2202 * v2203;
    var v2204 = this.a22;
    var v2205 = this.a31;
    var v1436 = v2204 * v2205;
    var v428 = v1435 - v1436;
    var v2206 = this.a13;
    var v2207 = this.a32;
    var v1437 = v2206 * v2207;
    var v2208 = this.a12;
    var v2209 = this.a33;
    var v1438 = v2208 * v2209;
    var v429 = v1437 - v1438;
    var v2210 = this.a11;
    var v2211 = this.a33;
    var v1439 = v2210 * v2211;
    var v2212 = this.a13;
    var v2213 = this.a31;
    var v1440 = v2212 * v2213;
    var v430 = v1439 - v1440;
    var v2214 = this.a12;
    var v2215 = this.a31;
    var v1441 = v2214 * v2215;
    var v2216 = this.a11;
    var v2217 = this.a32;
    var v1442 = v2216 * v2217;
    var v431 = v1441 - v1442;
    var v2218 = this.a12;
    var v2219 = this.a23;
    var v1443 = v2218 * v2219;
    var v2220 = this.a13;
    var v2221 = this.a22;
    var v1444 = v2220 * v2221;
    var v432 = v1443 - v1444;
    var v2222 = this.a13;
    var v2223 = this.a21;
    var v1445 = v2222 * v2223;
    var v2224 = this.a11;
    var v2225 = this.a23;
    var v1446 = v2224 * v2225;
    var v433 = v1445 - v1446;
    var v2226 = this.a11;
    var v2227 = this.a22;
    var v1447 = v2226 * v2227;
    var v2228 = this.a12;
    var v2229 = this.a21;
    var v1448 = v2228 * v2229;
    var v434 = v1447 - v1448;
    return new PerspectiveTransform(v426, v427, v428, v429, v430, v431, v432, v433, v434);
  }
  function v13(xValues, yValues) {
    var n$$1 = xValues.length;
    var i$$6 = 0;
    var v439 = i$$6 < n$$1;
    for (;v439;) {
      var x$$51 = xValues[i$$6];
      var y$$34 = yValues[i$$6];
      var v2230 = this.a13;
      var v1449 = v2230 * x$$51;
      var v2231 = this.a23;
      var v1450 = v2231 * y$$34;
      var v435 = v1449 + v1450;
      var v436 = this.a33;
      var denominator$$2 = v435 + v436;
      var v2527 = this.a11;
      var v2232 = v2527 * x$$51;
      var v2528 = this.a21;
      var v2233 = v2528 * y$$34;
      var v1451 = v2232 + v2233;
      var v1452 = this.a31;
      var v437 = v1451 + v1452;
      xValues[i$$6] = v437 / denominator$$2;
      var v2529 = this.a12;
      var v2234 = v2529 * x$$51;
      var v2530 = this.a22;
      var v2235 = v2530 * y$$34;
      var v1453 = v2234 + v2235;
      var v1454 = this.a32;
      var v438 = v1453 + v1454;
      yValues[i$$6] = v438 / denominator$$2;
      i$$6++;
      v439 = i$$6 < n$$1;
    }
    return;
  }
  function v12(points$$2) {
    var max$$2 = points$$2.length;
    var a11$$1 = this.a11;
    var a12$$1 = this.a12;
    var a13$$2 = this.a13;
    var a21$$1 = this.a21;
    var a22$$1 = this.a22;
    var a23$$2 = this.a23;
    var a31$$1 = this.a31;
    var a32$$1 = this.a32;
    var a33$$1 = this.a33;
    var i$$5 = 0;
    var v444 = i$$5 < max$$2;
    for (;v444;) {
      var x$$50 = points$$2[i$$5];
      var v440 = i$$5 + 1;
      var y$$33 = points$$2[v440];
      var v1455 = a13$$2 * x$$50;
      var v1456 = a23$$2 * y$$33;
      var v441 = v1455 + v1456;
      var denominator$$1 = v441 + a33$$1;
      var v2236 = a11$$1 * x$$50;
      var v2237 = a21$$1 * y$$33;
      var v1457 = v2236 + v2237;
      var v442 = v1457 + a31$$1;
      points$$2[i$$5] = v442 / denominator$$1;
      var v443 = i$$5 + 1;
      var v2531 = a12$$1 * x$$50;
      var v2532 = a22$$1 * y$$33;
      var v2238 = v2531 + v2532;
      var v1458 = v2238 + a32$$1;
      points$$2[v443] = v1458 / denominator$$1;
      i$$5 = i$$5 + 2;
      v444 = i$$5 < max$$2;
    }
    return;
  }
  this.a11 = a11;
  this.a12 = a12;
  this.a13 = a13$$1;
  this.a21 = a21;
  this.a22 = a22;
  this.a23 = a23$$1;
  this.a31 = a31;
  this.a32 = a32;
  this.a33 = a33;
  this.transformPoints1 = v12;
  this.transformPoints2 = v13;
  this.buildAdjoint = v14;
  this.times = v15;
  return;
}
function DetectorResult(bits$$1, points$$3) {
  this.bits = bits$$1;
  this.points = points$$3;
  return;
}
function Detector(image$$5) {
  function v26() {
    var v445 = new FinderPatternFinder;
    var v446 = this.image;
    var info$$1 = JAM.call(v445.findFinderPattern, v445, [v446], JAM.policy.p21);
    return JAM.call(this.processFinderPatternInfo, this, [info$$1], JAM.policy.p21);
  }
  function v25(info) {
    var topLeft$$3 = info.TopLeft;
    var topRight$$3 = info.TopRight;
    var bottomLeft$$3 = info.BottomLeft;
    var moduleSize$$1 = JAM.call(this.calculateModuleSize, this, [topLeft$$3, topRight$$3, bottomLeft$$3], JAM.policy.p33);
    var v447 = moduleSize$$1 < 1;
    if (v447) {
      throw "Error";
    }
    var dimension$$7 = JAM.call(this.computeDimension, this, [topLeft$$3, topRight$$3, bottomLeft$$3, moduleSize$$1], JAM.policy.p33);
    var provisionalVersion = JAM.call(Version.getProvisionalVersionForDimension, Version, [dimension$$7], JAM.policy.p21);
    var v448 = provisionalVersion.DimensionForVersion;
    var modulesBetweenFPCenters = v448 - 7;
    var alignmentPattern$$1 = null;
    var v2239 = provisionalVersion.AlignmentPatternCenters;
    var v1459 = v2239.length;
    var v457 = v1459 > 0;
    if (v457) {
      var v1460 = topRight$$3.X;
      var v1461 = topLeft$$3.X;
      var v449 = v1460 - v1461;
      var v450 = bottomLeft$$3.X;
      var bottomRightX$$1 = v449 + v450;
      var v1462 = topRight$$3.Y;
      var v1463 = topLeft$$3.Y;
      var v451 = v1462 - v1463;
      var v452 = bottomLeft$$3.Y;
      var bottomRightY$$1 = v451 + v452;
      var v453 = 3 / modulesBetweenFPCenters;
      var correctionToTopLeft = 1 - v453;
      var v1464 = topLeft$$3.X;
      var v2533 = topLeft$$3.X;
      var v2240 = bottomRightX$$1 - v2533;
      var v1465 = correctionToTopLeft * v2240;
      var v454 = v1464 + v1465;
      var estAlignmentX$$1 = JAM.call(Math.floor, Math, [v454], JAM.policy.p21);
      var v1466 = topLeft$$3.Y;
      var v2534 = topLeft$$3.Y;
      var v2241 = bottomRightY$$1 - v2534;
      var v1467 = correctionToTopLeft * v2241;
      var v455 = v1466 + v1467;
      var estAlignmentY$$1 = JAM.call(Math.floor, Math, [v455], JAM.policy.p21);
      var i$$7 = 4;
      var v456 = i$$7 <= 16;
      for (;v456;) {
        alignmentPattern$$1 = JAM.call(this.findAlignmentInRegion, this, [moduleSize$$1, estAlignmentX$$1, estAlignmentY$$1, i$$7], JAM.policy.p33);
        break;
      }
    }
    var transform$$4 = JAM.call(this.createTransform, this, [topLeft$$3, topRight$$3, bottomLeft$$3, alignmentPattern$$1, dimension$$7], JAM.policy.p33);
    var v458 = this.image;
    var bits$$2 = JAM.call(this.sampleGrid, this, [v458, transform$$4, dimension$$7], JAM.policy.p33);
    var points$$4;
    var v459 = alignmentPattern$$1 == null;
    if (v459) {
      points$$4 = new Array(bottomLeft$$3, topLeft$$3, topRight$$3);
    } else {
      points$$4 = new Array(bottomLeft$$3, topLeft$$3, topRight$$3, alignmentPattern$$1);
    }
    return new DetectorResult(bits$$2, points$$4);
  }
  function v24(image$$6, transform$$3, dimension$$6) {
    var sampler = GridSampler;
    return JAM.call(sampler.sampleGrid3, sampler, [image$$6, dimension$$6, transform$$3], JAM.policy.p33);
  }
  function v23(topLeft$$2, topRight$$2, bottomLeft$$2, alignmentPattern, dimension$$5) {
    var dimMinusThree = dimension$$5 - 3.5;
    var bottomRightX;
    var bottomRightY;
    var sourceBottomRightX;
    var sourceBottomRightY;
    var v464 = alignmentPattern != null;
    if (v464) {
      bottomRightX = alignmentPattern.X;
      bottomRightY = alignmentPattern.Y;
      sourceBottomRightX = sourceBottomRightY = dimMinusThree - 3;
    } else {
      var v1468 = topRight$$2.X;
      var v1469 = topLeft$$2.X;
      var v460 = v1468 - v1469;
      var v461 = bottomLeft$$2.X;
      bottomRightX = v460 + v461;
      var v1470 = topRight$$2.Y;
      var v1471 = topLeft$$2.Y;
      var v462 = v1470 - v1471;
      var v463 = bottomLeft$$2.Y;
      bottomRightY = v462 + v463;
      sourceBottomRightX = sourceBottomRightY = dimMinusThree;
    }
    var v465 = topLeft$$2.X;
    var v466 = topLeft$$2.Y;
    var v467 = topRight$$2.X;
    var v468 = topRight$$2.Y;
    var v469 = bottomLeft$$2.X;
    var v470 = bottomLeft$$2.Y;
    var transform$$2 = JAM.call(PerspectiveTransform.quadrilateralToQuadrilateral, PerspectiveTransform, [3.5, 3.5, dimMinusThree, 3.5, sourceBottomRightX, sourceBottomRightY, 3.5, dimMinusThree, v465, v466, v467, v468, bottomRightX, bottomRightY, v469, v470], JAM.policy.p20);
    return transform$$2;
  }
  function v22(overallEstModuleSize, estAlignmentX, estAlignmentY, allowanceFactor) {
    var v471 = allowanceFactor * overallEstModuleSize;
    var allowance = JAM.call(Math.floor, Math, [v471], JAM.policy.p21);
    var v472 = estAlignmentX - allowance;
    var alignmentAreaLeftX = JAM.call(Math.max, Math, [0, v472], JAM.policy.p20);
    var v1472 = qrcode.width;
    var v473 = v1472 - 1;
    var v474 = estAlignmentX + allowance;
    var alignmentAreaRightX = JAM.call(Math.min, Math, [v473, v474], JAM.policy.p33);
    var v1473 = alignmentAreaRightX - alignmentAreaLeftX;
    var v1474 = overallEstModuleSize * 3;
    var v475 = v1473 < v1474;
    if (v475) {
      throw "Error";
    }
    var v476 = estAlignmentY - allowance;
    var alignmentAreaTopY = JAM.call(Math.max, Math, [0, v476], JAM.policy.p20);
    var v1475 = qrcode.height;
    var v477 = v1475 - 1;
    var v478 = estAlignmentY + allowance;
    var alignmentAreaBottomY = JAM.call(Math.min, Math, [v477, v478], JAM.policy.p33);
    var v479 = this.image;
    var v480 = alignmentAreaRightX - alignmentAreaLeftX;
    var v481 = alignmentAreaBottomY - alignmentAreaTopY;
    var v482 = this.resultPointCallback;
    var alignmentFinder = new AlignmentPatternFinder(v479, alignmentAreaLeftX, alignmentAreaTopY, v480, v481, overallEstModuleSize, v482);
    return alignmentFinder.find();
  }
  function v21(topLeft$$1, topRight$$1, bottomLeft$$1, moduleSize) {
    var v1476 = JAM.call(this.distance, this, [topLeft$$1, topRight$$1], JAM.policy.p33);
    var v483 = v1476 / moduleSize;
    var tltrCentersDimension = JAM.call(Math.round, Math, [v483], JAM.policy.p21);
    var v1477 = JAM.call(this.distance, this, [topLeft$$1, bottomLeft$$1], JAM.policy.p33);
    var v484 = v1477 / moduleSize;
    var tlblCentersDimension = JAM.call(Math.round, Math, [v484], JAM.policy.p21);
    var v1478 = tltrCentersDimension + tlblCentersDimension;
    var v485 = v1478 >> 1;
    var dimension$$4 = v485 + 7;
    var v486 = dimension$$4 & 3;
    switch(v486) {
      case 0:
        dimension$$4++;
        break;
      case 2:
        dimension$$4--;
        break;
      case 3:
        throw "Error";;
    }
    return dimension$$4;
  }
  function v20(pattern1, pattern2) {
    var v487 = pattern1.X;
    var v488 = pattern2.X;
    xDiff = v487 - v488;
    var v489 = pattern1.Y;
    var v490 = pattern2.Y;
    yDiff = v489 - v490;
    var v1479 = xDiff * xDiff;
    var v1480 = yDiff * yDiff;
    var v491 = v1479 + v1480;
    return JAM.call(Math.sqrt, Math, [v491], JAM.policy.p21);
  }
  function v19(topLeft, topRight, bottomLeft) {
    var v1481 = JAM.call(this.calculateModuleSizeOneWay, this, [topLeft, topRight], JAM.policy.p33);
    var v1482 = JAM.call(this.calculateModuleSizeOneWay, this, [topLeft, bottomLeft], JAM.policy.p33);
    var v492 = v1481 + v1482;
    return v492 / 2;
  }
  function v18(pattern$$1, otherPattern) {
    var v1483 = pattern$$1.X;
    var v493 = JAM.call(Math.floor, Math, [v1483], JAM.policy.p21);
    var v1484 = pattern$$1.Y;
    var v494 = JAM.call(Math.floor, Math, [v1484], JAM.policy.p21);
    var v1485 = otherPattern.X;
    var v495 = JAM.call(Math.floor, Math, [v1485], JAM.policy.p21);
    var v1486 = otherPattern.Y;
    var v496 = JAM.call(Math.floor, Math, [v1486], JAM.policy.p21);
    var moduleSizeEst1 = JAM.call(this.sizeOfBlackWhiteBlackRunBothWays, this, [v493, v494, v495, v496], JAM.policy.p33);
    var v1487 = otherPattern.X;
    var v497 = JAM.call(Math.floor, Math, [v1487], JAM.policy.p21);
    var v1488 = otherPattern.Y;
    var v498 = JAM.call(Math.floor, Math, [v1488], JAM.policy.p21);
    var v1489 = pattern$$1.X;
    var v499 = JAM.call(Math.floor, Math, [v1489], JAM.policy.p21);
    var v1490 = pattern$$1.Y;
    var v500 = JAM.call(Math.floor, Math, [v1490], JAM.policy.p21);
    var moduleSizeEst2 = JAM.call(this.sizeOfBlackWhiteBlackRunBothWays, this, [v497, v498, v499, v500], JAM.policy.p33);
    var v501 = isNaN(moduleSizeEst1);
    if (v501) {
      return moduleSizeEst2 / 7;
    }
    var v502 = isNaN(moduleSizeEst2);
    if (v502) {
      return moduleSizeEst1 / 7;
    }
    var v503 = moduleSizeEst1 + moduleSizeEst2;
    return v503 / 14;
  }
  function v17(fromX$$1, fromY$$1, toX$$1, toY$$1) {
    var result = JAM.call(this.sizeOfBlackWhiteBlackRun, this, [fromX$$1, fromY$$1, toX$$1, toY$$1], JAM.policy.p33);
    var scale = 1;
    var v504 = toX$$1 - fromX$$1;
    var otherToX = fromX$$1 - v504;
    var v510 = otherToX < 0;
    if (v510) {
      var v505 = fromX$$1 - otherToX;
      scale = fromX$$1 / v505;
      otherToX = 0;
    } else {
      var v1491 = qrcode.width;
      var v509 = otherToX >= v1491;
      if (v509) {
        var v2242 = qrcode.width;
        var v1492 = v2242 - 1;
        var v506 = v1492 - fromX$$1;
        var v507 = otherToX - fromX$$1;
        scale = v506 / v507;
        var v508 = qrcode.width;
        otherToX = v508 - 1;
      }
    }
    var v2243 = toY$$1 - fromY$$1;
    var v1493 = v2243 * scale;
    var v511 = fromY$$1 - v1493;
    var otherToY = JAM.call(Math.floor, Math, [v511], JAM.policy.p21);
    scale = 1;
    var v517 = otherToY < 0;
    if (v517) {
      var v512 = fromY$$1 - otherToY;
      scale = fromY$$1 / v512;
      otherToY = 0;
    } else {
      var v1494 = qrcode.height;
      var v516 = otherToY >= v1494;
      if (v516) {
        var v2244 = qrcode.height;
        var v1495 = v2244 - 1;
        var v513 = v1495 - fromY$$1;
        var v514 = otherToY - fromY$$1;
        scale = v513 / v514;
        var v515 = qrcode.height;
        otherToY = v515 - 1;
      }
    }
    var v2245 = otherToX - fromX$$1;
    var v1496 = v2245 * scale;
    var v518 = fromX$$1 + v1496;
    otherToX = JAM.call(Math.floor, Math, [v518], JAM.policy.p21);
    var v1497 = JAM.call(this.sizeOfBlackWhiteBlackRun, this, [fromX$$1, fromY$$1, otherToX, otherToY], JAM.policy.p33);
    result = result + v1497;
    return result - 1;
  }
  function v16(fromX, fromY, toX, toY) {
    var v1498 = toY - fromY;
    var v519 = JAM.call(Math.abs, Math, [v1498], JAM.policy.p21);
    var v1499 = toX - fromX;
    var v520 = JAM.call(Math.abs, Math, [v1499], JAM.policy.p21);
    var steep = v519 > v520;
    if (steep) {
      var temp = fromX;
      fromX = fromY;
      fromY = temp;
      temp = toX;
      toX = toY;
      toY = temp;
    }
    var v521 = toX - fromX;
    var dx$$4 = JAM.call(Math.abs, Math, [v521], JAM.policy.p21);
    var v522 = toY - fromY;
    var dy$$4 = JAM.call(Math.abs, Math, [v522], JAM.policy.p21);
    var v523 = -dx$$4;
    var error$$1 = v523 >> 1;
    var v524;
    var v1500 = fromY < toY;
    if (v1500) {
      v524 = 1;
    } else {
      v524 = -1;
    }
    var ystep = v524;
    var v525;
    var v1501 = fromX < toX;
    if (v1501) {
      v525 = 1;
    } else {
      v525 = -1;
    }
    var xstep = v525;
    var state = 0;
    var x$$52 = fromX;
    var y$$35 = fromY;
    var v535 = x$$52 != toX;
    for (;v535;) {
      var v526;
      if (steep) {
        v526 = y$$35;
      } else {
        v526 = x$$52;
      }
      var realX = v526;
      var v527;
      if (steep) {
        v527 = x$$52;
      } else {
        v527 = y$$35;
      }
      var realY = v527;
      var v530 = state == 1;
      if (v530) {
        var v1502 = this.image;
        var v2535 = qrcode.width;
        var v2246 = realY * v2535;
        var v1503 = realX + v2246;
        var v528 = v1502[v1503];
        if (v528) {
          state++;
        }
      } else {
        var v2247 = this.image;
        var v2656 = qrcode.width;
        var v2536 = realY * v2656;
        var v2248 = realX + v2536;
        var v1504 = v2247[v2248];
        var v529 = !v1504;
        if (v529) {
          state++;
        }
      }
      var v532 = state == 3;
      if (v532) {
        var diffX = x$$52 - fromX;
        var diffY = y$$35 - fromY;
        var v1505 = diffX * diffX;
        var v1506 = diffY * diffY;
        var v531 = v1505 + v1506;
        return JAM.call(Math.sqrt, Math, [v531], JAM.policy.p21);
      }
      error$$1 = error$$1 + dy$$4;
      var v534 = error$$1 > 0;
      if (v534) {
        var v533 = y$$35 == toY;
        if (v533) {
          break;
        }
        y$$35 = y$$35 + ystep;
        error$$1 = error$$1 - dx$$4;
      }
      x$$52 = x$$52 + xstep;
      v535 = x$$52 != toX;
    }
    var diffX2 = toX - fromX;
    var diffY2 = toY - fromY;
    var v1507 = diffX2 * diffX2;
    var v1508 = diffY2 * diffY2;
    var v536 = v1507 + v1508;
    return JAM.call(Math.sqrt, Math, [v536], JAM.policy.p21);
  }
  this.image = image$$5;
  this.resultPointCallback = null;
  this.sizeOfBlackWhiteBlackRun = v16;
  this.sizeOfBlackWhiteBlackRunBothWays = v17;
  this.calculateModuleSizeOneWay = v18;
  this.calculateModuleSize = v19;
  this.distance = v20;
  this.computeDimension = v21;
  this.findAlignmentInRegion = v22;
  this.createTransform = v23;
  this.sampleGrid = v24;
  this.processFinderPatternInfo = v25;
  this.detect = v26;
  return;
}
function FormatInformation(formatInfo) {
  function v30(o) {
    var other$$5 = o;
    var v1509 = this.errorCorrectionLevel;
    var v1510 = other$$5.errorCorrectionLevel;
    var v537 = v1509 == v1510;
    if (v537) {
      var v1511 = this.dataMask;
      var v1512 = other$$5.dataMask;
      v537 = v1511 == v1512;
    }
    return v537;
  }
  function v29() {
    var v2249 = this.errorCorrectionLevel;
    var v1513 = v2249.ordinal_Renamed_Field;
    var v538 = v1513 << 3;
    return v538 | dataMask;
  }
  function v28() {
    return this.dataMask;
  }
  function v27() {
    return this.errorCorrectionLevel;
  }
  var v1514 = formatInfo >> 3;
  var v539 = v1514 & 3;
  var v2805 = JAM.call(ErrorCorrectionLevel.forBits, ErrorCorrectionLevel, [v539], JAM.policy.p21);
  this.errorCorrectionLevel = v2805;
  this.dataMask = formatInfo & 7;
  JAM.call(this.__defineGetter__, this, ["ErrorCorrectionLevel", v27], JAM.policy.p19);
  JAM.call(this.__defineGetter__, this, ["DataMask", v28], JAM.policy.p19);
  this.GetHashCode = v29;
  this.Equals = v30;
  return;
}
function ErrorCorrectionLevel(ordinal, bits$$3, name$$30) {
  function v33() {
    return this.ordinal_Renamed_Field;
  }
  function v32() {
    return this.name;
  }
  function v31() {
    return this.bits;
  }
  this.ordinal_Renamed_Field = ordinal;
  this.bits = bits$$3;
  this.name = name$$30;
  JAM.call(this.__defineGetter__, this, ["Bits", v31], JAM.policy.p19);
  JAM.call(this.__defineGetter__, this, ["Name", v32], JAM.policy.p19);
  this.ordinal = v33;
  return;
}
function BitMatrix(width$$10, height$$9) {
  function v41(left$$1, top$$1, width$$11, height$$10) {
    var v1515 = top$$1 < 0;
    var v2250 = !v1515;
    if (v2250) {
      v1515 = left$$1 < 0;
    }
    var v540 = v1515;
    if (v540) {
      throw "Left and top must be nonnegative";
    }
    var v1516 = height$$10 < 1;
    var v2251 = !v1516;
    if (v2251) {
      v1516 = width$$11 < 1;
    }
    var v541 = v1516;
    if (v541) {
      throw "Height and width must be at least 1";
    }
    var right$$1 = left$$1 + width$$11;
    var bottom = top$$1 + height$$10;
    var v2252 = this.height;
    var v1517 = bottom > v2252;
    var v2254 = !v1517;
    if (v2254) {
      var v2253 = this.width;
      v1517 = right$$1 > v2253;
    }
    var v542 = v1517;
    if (v542) {
      throw "The region must fit inside the matrix";
    }
    var y$$39 = top$$1;
    var v547 = y$$39 < bottom;
    for (;v547;) {
      var v543 = this.rowSize;
      var offset$$12 = y$$39 * v543;
      var x$$56 = left$$1;
      var v546 = x$$56 < right$$1;
      for (;v546;) {
        var v544 = this.bits;
        var v1518 = x$$56 >> 5;
        var v545 = offset$$12 + v1518;
        var v2255 = v544[v545];
        var v2537 = x$$56 & 31;
        var v2256 = 1 << v2537;
        v544[v545] = v2255 | v2256;
        x$$56++;
        v546 = x$$56 < right$$1;
      }
      y$$39++;
      v547 = y$$39 < bottom;
    }
    return;
  }
  function v40() {
    var v548 = this.bits;
    var max$$3 = v548.length;
    var i$$10 = 0;
    var v550 = i$$10 < max$$3;
    for (;v550;) {
      var v549 = this.bits;
      v549[i$$10] = 0;
      i$$10++;
      v550 = i$$10 < max$$3;
    }
    return;
  }
  function v39(x$$55, y$$38) {
    var v1519 = this.rowSize;
    var v551 = y$$38 * v1519;
    var v552 = x$$55 >> 5;
    var offset$$11 = v551 + v552;
    var v553 = this.bits;
    var v2257 = v553[offset$$11];
    var v2538 = x$$55 & 31;
    var v2258 = 1 << v2538;
    v553[offset$$11] = v2257 ^ v2258;
    return;
  }
  function v38(x$$54, y$$37) {
    var v1520 = this.rowSize;
    var v554 = y$$37 * v1520;
    var v555 = x$$54 >> 5;
    var offset$$10 = v554 + v555;
    var v556 = this.bits;
    var v2259 = v556[offset$$10];
    var v2539 = x$$54 & 31;
    var v2260 = 1 << v2539;
    v556[offset$$10] = v2259 | v2260;
    return;
  }
  function v37(x$$53, y$$36) {
    var v1521 = this.rowSize;
    var v557 = y$$36 * v1521;
    var v558 = x$$53 >> 5;
    var offset$$9 = v557 + v558;
    var v2540 = this.bits;
    var v2261 = v2540[offset$$9];
    var v2262 = x$$53 & 31;
    var v1522 = URShift(v2261, v2262);
    var v559 = v1522 & 1;
    return v559 != 0;
  }
  function v36() {
    var v1523 = this.width;
    var v1524 = this.height;
    var v560 = v1523 != v1524;
    if (v560) {
      throw "Can't call getDimension() on a non-square matrix";
    }
    return this.width;
  }
  function v35() {
    return this.height;
  }
  function v34() {
    return this.width;
  }
  var v561 = !height$$9;
  if (v561) {
    height$$9 = width$$10;
  }
  var v1525 = width$$10 < 1;
  var v2263 = !v1525;
  if (v2263) {
    v1525 = height$$9 < 1;
  }
  var v562 = v1525;
  if (v562) {
    throw "Both dimensions must be greater than 0";
  }
  this.width = width$$10;
  this.height = height$$9;
  var rowSize = width$$10 >> 5;
  var v1526 = width$$10 & 31;
  var v563 = v1526 != 0;
  if (v563) {
    rowSize++;
  }
  this.rowSize = rowSize;
  var v564 = rowSize * height$$9;
  var v2806 = new Array(v564);
  this.bits = v2806;
  var i$$9 = 0;
  var v2264 = this.bits;
  var v1527 = v2264.length;
  var v566 = i$$9 < v1527;
  for (;v566;) {
    var v565 = this.bits;
    v565[i$$9] = 0;
    i$$9++;
    var v2265 = this.bits;
    var v1528 = v2265.length;
    v566 = i$$9 < v1528;
  }
  JAM.call(this.__defineGetter__, this, ["Width", v34], JAM.policy.p19);
  JAM.call(this.__defineGetter__, this, ["Height", v35], JAM.policy.p19);
  JAM.call(this.__defineGetter__, this, ["Dimension", v36], JAM.policy.p19);
  this.get_Renamed = v37;
  this.set_Renamed = v38;
  this.flip = v39;
  this.clear = v40;
  this.setRegion = v41;
  return;
}
function DataBlock(numDataCodewords, codewords) {
  function v43() {
    return this.codewords;
  }
  function v42() {
    return this.numDataCodewords;
  }
  this.numDataCodewords = numDataCodewords;
  this.codewords = codewords;
  JAM.call(this.__defineGetter__, this, ["NumDataCodewords", v42], JAM.policy.p19);
  JAM.call(this.__defineGetter__, this, ["Codewords", v43], JAM.policy.p19);
  return;
}
function BitMatrixParser(bitMatrix$$1) {
  function v47() {
    var formatInfo$$2 = this.readFormatInformation();
    var version$$6 = this.readVersion();
    var v567 = formatInfo$$2.DataMask;
    var dataMask$$1 = JAM.call(DataMask.forReference, DataMask, [v567], JAM.policy.p21);
    var v568 = this.bitMatrix;
    var dimension$$11 = v568.Dimension;
    var v569 = this.bitMatrix;
    JAM.call(dataMask$$1.unmaskBitMatrix, dataMask$$1, [v569, dimension$$11], JAM.policy.p33);
    var functionPattern = version$$6.buildFunctionPattern();
    var readingUp = true;
    var v570 = version$$6.TotalCodewords;
    var result$$2 = new Array(v570);
    var resultOffset = 0;
    var currentByte = 0;
    var bitsRead = 0;
    var j$$4 = dimension$$11 - 1;
    var v579 = j$$4 > 0;
    for (;v579;) {
      var v571 = j$$4 == 6;
      if (v571) {
        j$$4--;
      }
      var count$$4 = 0;
      var v578 = count$$4 < dimension$$11;
      for (;v578;) {
        var v572;
        if (readingUp) {
          var v1529 = dimension$$11 - 1;
          v572 = v1529 - count$$4;
        } else {
          v572 = count$$4;
        }
        var i$$15 = v572;
        var col = 0;
        var v577 = col < 2;
        for (;v577;) {
          var v2266 = j$$4 - col;
          var v1530 = JAM.call(functionPattern.get_Renamed, functionPattern, [v2266, i$$15], JAM.policy.p33);
          var v576 = !v1530;
          if (v576) {
            bitsRead++;
            currentByte = currentByte << 1;
            var v1531 = this.bitMatrix;
            var v1532 = j$$4 - col;
            var v573 = JAM.call(v1531.get_Renamed, v1531, [v1532, i$$15], JAM.policy.p33);
            if (v573) {
              currentByte = currentByte | 1;
            }
            var v575 = bitsRead == 8;
            if (v575) {
              var v574 = resultOffset;
              resultOffset = resultOffset + 1;
              result$$2[v574] = currentByte;
              bitsRead = 0;
              currentByte = 0;
            }
          }
          col++;
          v577 = col < 2;
        }
        count$$4++;
        v578 = count$$4 < dimension$$11;
      }
      readingUp = readingUp ^ true;
      j$$4 = j$$4 - 2;
      v579 = j$$4 > 0;
    }
    var v1533 = version$$6.TotalCodewords;
    var v580 = resultOffset != v1533;
    if (v580) {
      throw "Error readCodewords";
    }
    return result$$2;
  }
  function v46() {
    var v1534 = this.parsedVersion;
    var v581 = v1534 != null;
    if (v581) {
      return this.parsedVersion;
    }
    var v582 = this.bitMatrix;
    var dimension$$10 = v582.Dimension;
    var v583 = dimension$$10 - 17;
    var provisionalVersion$$1 = v583 >> 2;
    var v584 = provisionalVersion$$1 <= 6;
    if (v584) {
      return JAM.call(Version.getVersionForNumber, Version, [provisionalVersion$$1], JAM.policy.p21);
    }
    var versionBits$$2 = 0;
    var ijMin = dimension$$10 - 11;
    var j$$3 = 5;
    var v586 = j$$3 >= 0;
    for (;v586;) {
      var i$$14 = dimension$$10 - 9;
      var v585 = i$$14 >= ijMin;
      for (;v585;) {
        versionBits$$2 = JAM.call(this.copyBit, this, [i$$14, j$$3, versionBits$$2], JAM.policy.p23);
        i$$14--;
        v585 = i$$14 >= ijMin;
      }
      j$$3--;
      v586 = j$$3 >= 0;
    }
    var v2807 = JAM.call(Version.decodeVersionInformation, Version, [versionBits$$2], JAM.policy.p21);
    this.parsedVersion = v2807;
    var v2267 = this.parsedVersion;
    var v1535 = v2267 != null;
    if (v1535) {
      var v2541 = this.parsedVersion;
      var v2268 = v2541.DimensionForVersion;
      v1535 = v2268 == dimension$$10;
    }
    var v587 = v1535;
    if (v587) {
      return this.parsedVersion;
    }
    versionBits$$2 = 0;
    i$$14 = 5;
    var v589 = i$$14 >= 0;
    for (;v589;) {
      j$$3 = dimension$$10 - 9;
      var v588 = j$$3 >= ijMin;
      for (;v588;) {
        versionBits$$2 = JAM.call(this.copyBit, this, [i$$14, j$$3, versionBits$$2], JAM.policy.p23);
        j$$3--;
        v588 = j$$3 >= ijMin;
      }
      i$$14--;
      v589 = i$$14 >= 0;
    }
    var v2808 = JAM.call(Version.decodeVersionInformation, Version, [versionBits$$2], JAM.policy.p21);
    this.parsedVersion = v2808;
    var v2269 = this.parsedVersion;
    var v1536 = v2269 != null;
    if (v1536) {
      var v2542 = this.parsedVersion;
      var v2270 = v2542.DimensionForVersion;
      v1536 = v2270 == dimension$$10;
    }
    var v590 = v1536;
    if (v590) {
      return this.parsedVersion;
    }
    throw "Error readVersion";
  }
  function v45() {
    var v1537 = this.parsedFormatInfo;
    var v591 = v1537 != null;
    if (v591) {
      return this.parsedFormatInfo;
    }
    var formatInfoBits = 0;
    var i$$13 = 0;
    var v592 = i$$13 < 6;
    for (;v592;) {
      formatInfoBits = JAM.call(this.copyBit, this, [i$$13, 8, formatInfoBits], JAM.policy.p23);
      i$$13++;
      v592 = i$$13 < 6;
    }
    formatInfoBits = JAM.call(this.copyBit, this, [7, 8, formatInfoBits], JAM.policy.p20);
    formatInfoBits = JAM.call(this.copyBit, this, [8, 8, formatInfoBits], JAM.policy.p20);
    formatInfoBits = JAM.call(this.copyBit, this, [8, 7, formatInfoBits], JAM.policy.p20);
    var j$$2 = 5;
    var v593 = j$$2 >= 0;
    for (;v593;) {
      formatInfoBits = JAM.call(this.copyBit, this, [8, j$$2, formatInfoBits], JAM.policy.p20);
      j$$2--;
      v593 = j$$2 >= 0;
    }
    var v2809 = JAM.call(FormatInformation.decodeFormatInformation, FormatInformation, [formatInfoBits], JAM.policy.p21);
    this.parsedFormatInfo = v2809;
    var v1538 = this.parsedFormatInfo;
    var v594 = v1538 != null;
    if (v594) {
      return this.parsedFormatInfo;
    }
    var v595 = this.bitMatrix;
    var dimension$$9 = v595.Dimension;
    formatInfoBits = 0;
    var iMin = dimension$$9 - 8;
    i$$13 = dimension$$9 - 1;
    var v596 = i$$13 >= iMin;
    for (;v596;) {
      formatInfoBits = JAM.call(this.copyBit, this, [i$$13, 8, formatInfoBits], JAM.policy.p23);
      i$$13--;
      v596 = i$$13 >= iMin;
    }
    j$$2 = dimension$$9 - 7;
    var v597 = j$$2 < dimension$$9;
    for (;v597;) {
      formatInfoBits = JAM.call(this.copyBit, this, [8, j$$2, formatInfoBits], JAM.policy.p20);
      j$$2++;
      v597 = j$$2 < dimension$$9;
    }
    var v2810 = JAM.call(FormatInformation.decodeFormatInformation, FormatInformation, [formatInfoBits], JAM.policy.p21);
    this.parsedFormatInfo = v2810;
    var v1539 = this.parsedFormatInfo;
    var v598 = v1539 != null;
    if (v598) {
      return this.parsedFormatInfo;
    }
    throw "Error readFormatInformation";
  }
  function v44(i$$12, j$$1, versionBits$$1) {
    var v599;
    var v2271 = this.bitMatrix;
    var v1541 = JAM.call(v2271.get_Renamed, v2271, [i$$12, j$$1], JAM.policy.p33);
    if (v1541) {
      var v1540 = versionBits$$1 << 1;
      v599 = v1540 | 1;
    } else {
      v599 = versionBits$$1 << 1;
    }
    return v599;
  }
  var dimension$$8 = bitMatrix$$1.Dimension;
  var v1542 = dimension$$8 < 21;
  var v2273 = !v1542;
  if (v2273) {
    var v2272 = dimension$$8 & 3;
    v1542 = v2272 != 1;
  }
  var v600 = v1542;
  if (v600) {
    throw "Error BitMatrixParser";
  }
  this.bitMatrix = bitMatrix$$1;
  this.parsedVersion = null;
  this.parsedFormatInfo = null;
  this.copyBit = v44;
  this.readFormatInformation = v45;
  this.readVersion = v46;
  this.readCodewords = v47;
  return;
}
function DataMask000() {
  function v49(i$$17, j$$6) {
    var v1543 = i$$17 + j$$6;
    var v601 = v1543 & 1;
    return v601 == 0;
  }
  function v48(bits$$5, dimension$$12) {
    var i$$16 = 0;
    var v604 = i$$16 < dimension$$12;
    for (;v604;) {
      var j$$5 = 0;
      var v603 = j$$5 < dimension$$12;
      for (;v603;) {
        var v602 = JAM.call(this.isMasked, this, [i$$16, j$$5], JAM.policy.p33);
        if (v602) {
          JAM.call(bits$$5.flip, bits$$5, [j$$5, i$$16], JAM.policy.p23);
        }
        j$$5++;
        v603 = j$$5 < dimension$$12;
      }
      i$$16++;
      v604 = i$$16 < dimension$$12;
    }
    return;
  }
  this.unmaskBitMatrix = v48;
  this.isMasked = v49;
  return;
}
function DataMask001() {
  function v51(i$$19, j$$8) {
    var v605 = i$$19 & 1;
    return v605 == 0;
  }
  function v50(bits$$6, dimension$$13) {
    var i$$18 = 0;
    var v608 = i$$18 < dimension$$13;
    for (;v608;) {
      var j$$7 = 0;
      var v607 = j$$7 < dimension$$13;
      for (;v607;) {
        var v606 = JAM.call(this.isMasked, this, [i$$18, j$$7], JAM.policy.p33);
        if (v606) {
          JAM.call(bits$$6.flip, bits$$6, [j$$7, i$$18], JAM.policy.p23);
        }
        j$$7++;
        v607 = j$$7 < dimension$$13;
      }
      i$$18++;
      v608 = i$$18 < dimension$$13;
    }
    return;
  }
  this.unmaskBitMatrix = v50;
  this.isMasked = v51;
  return;
}
function DataMask010() {
  function v53(i$$21, j$$10) {
    var v609 = j$$10 % 3;
    return v609 == 0;
  }
  function v52(bits$$7, dimension$$14) {
    var i$$20 = 0;
    var v612 = i$$20 < dimension$$14;
    for (;v612;) {
      var j$$9 = 0;
      var v611 = j$$9 < dimension$$14;
      for (;v611;) {
        var v610 = JAM.call(this.isMasked, this, [i$$20, j$$9], JAM.policy.p33);
        if (v610) {
          JAM.call(bits$$7.flip, bits$$7, [j$$9, i$$20], JAM.policy.p23);
        }
        j$$9++;
        v611 = j$$9 < dimension$$14;
      }
      i$$20++;
      v612 = i$$20 < dimension$$14;
    }
    return;
  }
  this.unmaskBitMatrix = v52;
  this.isMasked = v53;
  return;
}
function DataMask011() {
  function v55(i$$23, j$$12) {
    var v1544 = i$$23 + j$$12;
    var v613 = v1544 % 3;
    return v613 == 0;
  }
  function v54(bits$$8, dimension$$15) {
    var i$$22 = 0;
    var v616 = i$$22 < dimension$$15;
    for (;v616;) {
      var j$$11 = 0;
      var v615 = j$$11 < dimension$$15;
      for (;v615;) {
        var v614 = JAM.call(this.isMasked, this, [i$$22, j$$11], JAM.policy.p33);
        if (v614) {
          JAM.call(bits$$8.flip, bits$$8, [j$$11, i$$22], JAM.policy.p23);
        }
        j$$11++;
        v615 = j$$11 < dimension$$15;
      }
      i$$22++;
      v616 = i$$22 < dimension$$15;
    }
    return;
  }
  this.unmaskBitMatrix = v54;
  this.isMasked = v55;
  return;
}
function DataMask100() {
  function v57(i$$25, j$$14) {
    var v2274 = URShift(i$$25, 1);
    var v2275 = j$$14 / 3;
    var v1545 = v2274 + v2275;
    var v617 = v1545 & 1;
    return v617 == 0;
  }
  function v56(bits$$9, dimension$$16) {
    var i$$24 = 0;
    var v620 = i$$24 < dimension$$16;
    for (;v620;) {
      var j$$13 = 0;
      var v619 = j$$13 < dimension$$16;
      for (;v619;) {
        var v618 = JAM.call(this.isMasked, this, [i$$24, j$$13], JAM.policy.p33);
        if (v618) {
          JAM.call(bits$$9.flip, bits$$9, [j$$13, i$$24], JAM.policy.p23);
        }
        j$$13++;
        v619 = j$$13 < dimension$$16;
      }
      i$$24++;
      v620 = i$$24 < dimension$$16;
    }
    return;
  }
  this.unmaskBitMatrix = v56;
  this.isMasked = v57;
  return;
}
function DataMask101() {
  function v59(i$$27, j$$16) {
    var temp$$1 = i$$27 * j$$16;
    var v1546 = temp$$1 & 1;
    var v1547 = temp$$1 % 3;
    var v621 = v1546 + v1547;
    return v621 == 0;
  }
  function v58(bits$$10, dimension$$17) {
    var i$$26 = 0;
    var v624 = i$$26 < dimension$$17;
    for (;v624;) {
      var j$$15 = 0;
      var v623 = j$$15 < dimension$$17;
      for (;v623;) {
        var v622 = JAM.call(this.isMasked, this, [i$$26, j$$15], JAM.policy.p33);
        if (v622) {
          JAM.call(bits$$10.flip, bits$$10, [j$$15, i$$26], JAM.policy.p23);
        }
        j$$15++;
        v623 = j$$15 < dimension$$17;
      }
      i$$26++;
      v624 = i$$26 < dimension$$17;
    }
    return;
  }
  this.unmaskBitMatrix = v58;
  this.isMasked = v59;
  return;
}
function DataMask110() {
  function v61(i$$29, j$$18) {
    var temp$$2 = i$$29 * j$$18;
    var v2276 = temp$$2 & 1;
    var v2277 = temp$$2 % 3;
    var v1548 = v2276 + v2277;
    var v625 = v1548 & 1;
    return v625 == 0;
  }
  function v60(bits$$11, dimension$$18) {
    var i$$28 = 0;
    var v628 = i$$28 < dimension$$18;
    for (;v628;) {
      var j$$17 = 0;
      var v627 = j$$17 < dimension$$18;
      for (;v627;) {
        var v626 = JAM.call(this.isMasked, this, [i$$28, j$$17], JAM.policy.p33);
        if (v626) {
          JAM.call(bits$$11.flip, bits$$11, [j$$17, i$$28], JAM.policy.p23);
        }
        j$$17++;
        v627 = j$$17 < dimension$$18;
      }
      i$$28++;
      v628 = i$$28 < dimension$$18;
    }
    return;
  }
  this.unmaskBitMatrix = v60;
  this.isMasked = v61;
  return;
}
function DataMask111() {
  function v63(i$$31, j$$20) {
    var v2543 = i$$31 + j$$20;
    var v2278 = v2543 & 1;
    var v2544 = i$$31 * j$$20;
    var v2279 = v2544 % 3;
    var v1549 = v2278 + v2279;
    var v629 = v1549 & 1;
    return v629 == 0;
  }
  function v62(bits$$12, dimension$$19) {
    var i$$30 = 0;
    var v632 = i$$30 < dimension$$19;
    for (;v632;) {
      var j$$19 = 0;
      var v631 = j$$19 < dimension$$19;
      for (;v631;) {
        var v630 = JAM.call(this.isMasked, this, [i$$30, j$$19], JAM.policy.p33);
        if (v630) {
          JAM.call(bits$$12.flip, bits$$12, [j$$19, i$$30], JAM.policy.p23);
        }
        j$$19++;
        v631 = j$$19 < dimension$$19;
      }
      i$$30++;
      v632 = i$$30 < dimension$$19;
    }
    return;
  }
  this.unmaskBitMatrix = v62;
  this.isMasked = v63;
  return;
}
function ReedSolomonDecoder(field) {
  function v67(errorEvaluator, errorLocations$$1, dataMatrix$$1) {
    var s$$3 = errorLocations$$1.length;
    var result$$4 = new Array(s$$3);
    var i$$34 = 0;
    var v644 = i$$34 < s$$3;
    for (;v644;) {
      var v633 = this.field;
      var v634 = errorLocations$$1[i$$34];
      var xiInverse = JAM.call(v633.inverse, v633, [v634], JAM.policy.p21);
      var denominator$$3 = 1;
      var j$$21 = 0;
      var v638 = j$$21 < s$$3;
      for (;v638;) {
        var v637 = i$$34 != j$$21;
        if (v637) {
          var v635 = this.field;
          var v2280 = this.field;
          var v2281 = errorLocations$$1[j$$21];
          var v1550 = JAM.call(v2280.multiply, v2280, [v2281, xiInverse], JAM.policy.p33);
          var v636 = JAM.call(GF256.addOrSubtract, GF256, [1, v1550], JAM.policy.p20);
          denominator$$3 = JAM.call(v635.multiply, v635, [denominator$$3, v636], JAM.policy.p33);
        }
        j$$21++;
        v638 = j$$21 < s$$3;
      }
      var v639 = this.field;
      var v640 = JAM.call(errorEvaluator.evaluateAt, errorEvaluator, [xiInverse], JAM.policy.p21);
      var v1551 = this.field;
      var v641 = JAM.call(v1551.inverse, v1551, [denominator$$3], JAM.policy.p21);
      var v2811 = JAM.call(v639.multiply, v639, [v640, v641], JAM.policy.p33);
      result$$4[i$$34] = v2811;
      if (dataMatrix$$1) {
        var v642 = this.field;
        var v643 = result$$4[i$$34];
        var v2812 = JAM.call(v642.multiply, v642, [v643, xiInverse], JAM.policy.p33);
        result$$4[i$$34] = v2812;
      }
      i$$34++;
      v644 = i$$34 < s$$3;
    }
    return result$$4;
  }
  function v66(errorLocator) {
    var numErrors = errorLocator.Degree;
    var v646 = numErrors == 1;
    if (v646) {
      var v645 = JAM.call(errorLocator.getCoefficient, errorLocator, [1], JAM.policy.p16);
      return new Array(v645);
    }
    var result$$3 = new Array(numErrors);
    var e$$4 = 0;
    var i$$33 = 1;
    var v1552 = i$$33 < 256;
    if (v1552) {
      v1552 = e$$4 < numErrors;
    }
    var v649 = v1552;
    for (;v649;) {
      var v1553 = JAM.call(errorLocator.evaluateAt, errorLocator, [i$$33], JAM.policy.p21);
      var v648 = v1553 == 0;
      if (v648) {
        var v647 = this.field;
        var v2813 = JAM.call(v647.inverse, v647, [i$$33], JAM.policy.p21);
        result$$3[e$$4] = v2813;
        e$$4++;
      }
      i$$33++;
      var v1554 = i$$33 < 256;
      if (v1554) {
        v1554 = e$$4 < numErrors;
      }
      v649 = v1554;
    }
    var v650 = e$$4 != numErrors;
    if (v650) {
      throw "Error locator degree does not match number of roots";
    }
    return result$$3;
  }
  function v65(a$$1, b$$2, R) {
    var v1555 = a$$1.Degree;
    var v1556 = b$$2.Degree;
    var v651 = v1555 < v1556;
    if (v651) {
      var temp$$3 = a$$1;
      a$$1 = b$$2;
      b$$2 = temp$$3;
    }
    var rLast = a$$1;
    var r$$1 = b$$2;
    var v652 = this.field;
    var sLast = v652.One;
    var v653 = this.field;
    var s$$2 = v653.Zero;
    var v654 = this.field;
    var tLast = v654.Zero;
    var v655 = this.field;
    var t = v655.One;
    var v1557 = r$$1.Degree;
    var v2282 = R / 2;
    var v1558 = JAM.call(Math.floor, Math, [v2282], JAM.policy.p21);
    var v669 = v1557 >= v1558;
    for (;v669;) {
      var rLastLast = rLast;
      var sLastLast = sLast;
      var tLastLast = tLast;
      rLast = r$$1;
      sLast = s$$2;
      tLast = t;
      var v656 = rLast.Zero;
      if (v656) {
        throw "r_{i-1} was zero";
      }
      r$$1 = rLastLast;
      var v657 = this.field;
      var q = v657.Zero;
      var v658 = rLast.Degree;
      var denominatorLeadingTerm = JAM.call(rLast.getCoefficient, rLast, [v658], JAM.policy.p21);
      var v659 = this.field;
      var dltInverse = JAM.call(v659.inverse, v659, [denominatorLeadingTerm], JAM.policy.p21);
      var v2283 = r$$1.Degree;
      var v2284 = rLast.Degree;
      var v1559 = v2283 >= v2284;
      if (v1559) {
        var v2285 = r$$1.Zero;
        v1559 = !v2285;
      }
      var v666 = v1559;
      for (;v666;) {
        var v660 = r$$1.Degree;
        var v661 = rLast.Degree;
        var degreeDiff = v660 - v661;
        var v662 = this.field;
        var v1560 = r$$1.Degree;
        var v663 = JAM.call(r$$1.getCoefficient, r$$1, [v1560], JAM.policy.p21);
        var scale$$1 = JAM.call(v662.multiply, v662, [v663, dltInverse], JAM.policy.p33);
        var v1561 = this.field;
        var v664 = JAM.call(v1561.buildMonomial, v1561, [degreeDiff, scale$$1], JAM.policy.p33);
        q = JAM.call(q.addOrSubtract, q, [v664], JAM.policy.p21);
        var v665 = JAM.call(rLast.multiplyByMonomial, rLast, [degreeDiff, scale$$1], JAM.policy.p33);
        r$$1 = JAM.call(r$$1.addOrSubtract, r$$1, [v665], JAM.policy.p21);
        var v2286 = r$$1.Degree;
        var v2287 = rLast.Degree;
        var v1562 = v2286 >= v2287;
        if (v1562) {
          var v2288 = r$$1.Zero;
          v1562 = !v2288;
        }
        v666 = v1562;
      }
      var v667 = JAM.call(q.multiply1, q, [sLast], JAM.policy.p21);
      s$$2 = JAM.call(v667.addOrSubtract, v667, [sLastLast], JAM.policy.p21);
      var v668 = JAM.call(q.multiply1, q, [tLast], JAM.policy.p21);
      t = JAM.call(v668.addOrSubtract, v668, [tLastLast], JAM.policy.p21);
      var v1563 = r$$1.Degree;
      var v2289 = R / 2;
      var v1564 = JAM.call(Math.floor, Math, [v2289], JAM.policy.p21);
      v669 = v1563 >= v1564;
    }
    var sigmaTildeAtZero = JAM.call(t.getCoefficient, t, [0], JAM.policy.p16);
    var v670 = sigmaTildeAtZero == 0;
    if (v670) {
      throw "ReedSolomonException sigmaTilde(0) was zero";
    }
    var v671 = this.field;
    var inverse = JAM.call(v671.inverse, v671, [sigmaTildeAtZero], JAM.policy.p21);
    var sigma$$1 = JAM.call(t.multiply2, t, [inverse], JAM.policy.p21);
    var omega$$1 = JAM.call(r$$1.multiply2, r$$1, [inverse], JAM.policy.p21);
    return new Array(sigma$$1, omega$$1);
  }
  function v64(received, twoS) {
    var v672 = this.field;
    var poly = new GF256Poly(v672, received);
    var syndromeCoefficients = new Array(twoS);
    var i$$32 = 0;
    var v1565 = syndromeCoefficients.length;
    var v673 = i$$32 < v1565;
    for (;v673;) {
      syndromeCoefficients[i$$32] = 0;
      i$$32++;
      var v1566 = syndromeCoefficients.length;
      v673 = i$$32 < v1566;
    }
    var dataMatrix = false;
    var noError = true;
    i$$32 = 0;
    var v677 = i$$32 < twoS;
    for (;v677;) {
      var v1567 = this.field;
      var v2290;
      if (dataMatrix) {
        v2290 = i$$32 + 1;
      } else {
        v2290 = i$$32;
      }
      var v1568 = v2290;
      var v674 = JAM.call(v1567.exp, v1567, [v1568], JAM.policy.p21);
      var eval$$1 = JAM.call(poly.evaluateAt, poly, [v674], JAM.policy.p21);
      var v2291 = syndromeCoefficients.length;
      var v1569 = v2291 - 1;
      var v675 = v1569 - i$$32;
      syndromeCoefficients[v675] = eval$$1;
      var v676 = eval$$1 != 0;
      if (v676) {
        noError = false;
      }
      i$$32++;
      v677 = i$$32 < twoS;
    }
    if (noError) {
      return;
    }
    var v678 = this.field;
    var syndrome = new GF256Poly(v678, syndromeCoefficients);
    var v1570 = this.field;
    var v679 = JAM.call(v1570.buildMonomial, v1570, [twoS, 1], JAM.policy.p25);
    var sigmaOmega = JAM.call(this.runEuclideanAlgorithm, this, [v679, syndrome, twoS], JAM.policy.p33);
    var sigma = sigmaOmega[0];
    var omega = sigmaOmega[1];
    var errorLocations = JAM.call(this.findErrorLocations, this, [sigma], JAM.policy.p21);
    var errorMagnitudes = JAM.call(this.findErrorMagnitudes, this, [omega, errorLocations, dataMatrix], JAM.policy.p33);
    i$$32 = 0;
    var v1571 = errorLocations.length;
    var v685 = i$$32 < v1571;
    for (;v685;) {
      var v1572 = received.length;
      var v680 = v1572 - 1;
      var v1573 = this.field;
      var v1574 = errorLocations[i$$32];
      var v681 = JAM.call(v1573.log, v1573, [v1574], JAM.policy.p21);
      var position = v680 - v681;
      var v682 = position < 0;
      if (v682) {
        throw "ReedSolomonException Bad error location";
      }
      var v683 = received[position];
      var v684 = errorMagnitudes[i$$32];
      var v2814 = JAM.call(GF256.addOrSubtract, GF256, [v683, v684], JAM.policy.p33);
      received[position] = v2814;
      i$$32++;
      var v1575 = errorLocations.length;
      v685 = i$$32 < v1575;
    }
    return;
  }
  this.field = field;
  this.decode = v64;
  this.runEuclideanAlgorithm = v65;
  this.findErrorLocations = v66;
  this.findErrorMagnitudes = v67;
  return;
}
function GF256Poly(field$$1, coefficients) {
  function v77(other$$8) {
    var v1576 = this.field;
    var v1577 = other$$8.field;
    var v686 = v1576 != v1577;
    if (v686) {
      throw "GF256Polys do not have same GF256 field";
    }
    var v687 = other$$8.Zero;
    if (v687) {
      throw "Divide by 0";
    }
    var v688 = this.field;
    var quotient = v688.Zero;
    var remainder = this;
    var v689 = other$$8.Degree;
    var denominatorLeadingTerm$$1 = JAM.call(other$$8.getCoefficient, other$$8, [v689], JAM.policy.p21);
    var v690 = this.field;
    var inverseDenominatorLeadingTerm = JAM.call(v690.inverse, v690, [denominatorLeadingTerm$$1], JAM.policy.p21);
    var v2292 = remainder.Degree;
    var v2293 = other$$8.Degree;
    var v1578 = v2292 >= v2293;
    if (v1578) {
      var v2294 = remainder.Zero;
      v1578 = !v2294;
    }
    var v696 = v1578;
    for (;v696;) {
      var v691 = remainder.Degree;
      var v692 = other$$8.Degree;
      var degreeDifference = v691 - v692;
      var v693 = this.field;
      var v1579 = remainder.Degree;
      var v694 = JAM.call(remainder.getCoefficient, remainder, [v1579], JAM.policy.p21);
      var scale$$2 = JAM.call(v693.multiply, v693, [v694, inverseDenominatorLeadingTerm], JAM.policy.p33);
      var term = JAM.call(other$$8.multiplyByMonomial, other$$8, [degreeDifference, scale$$2], JAM.policy.p33);
      var v695 = this.field;
      var iterationQuotient = JAM.call(v695.buildMonomial, v695, [degreeDifference, scale$$2], JAM.policy.p33);
      quotient = JAM.call(quotient.addOrSubtract, quotient, [iterationQuotient], JAM.policy.p21);
      remainder = JAM.call(remainder.addOrSubtract, remainder, [term], JAM.policy.p21);
      var v2295 = remainder.Degree;
      var v2296 = other$$8.Degree;
      var v1580 = v2295 >= v2296;
      if (v1580) {
        var v2297 = remainder.Zero;
        v1580 = !v2297;
      }
      v696 = v1580;
    }
    return new Array(quotient, remainder);
  }
  function v76(degree$$1, coefficient) {
    var v697 = degree$$1 < 0;
    if (v697) {
      throw "System.ArgumentException";
    }
    var v699 = coefficient == 0;
    if (v699) {
      var v698 = this.field;
      return v698.Zero;
    }
    var v700 = this.coefficients;
    var size$$6 = v700.length;
    var v701 = size$$6 + degree$$1;
    var product$$2 = new Array(v701);
    var i$$40 = 0;
    var v1581 = product$$2.length;
    var v702 = i$$40 < v1581;
    for (;v702;) {
      product$$2[i$$40] = 0;
      i$$40++;
      var v1582 = product$$2.length;
      v702 = i$$40 < v1582;
    }
    i$$40 = 0;
    var v705 = i$$40 < size$$6;
    for (;v705;) {
      var v703 = this.field;
      var v1583 = this.coefficients;
      var v704 = v1583[i$$40];
      var v2815 = JAM.call(v703.multiply, v703, [v704, coefficient], JAM.policy.p33);
      product$$2[i$$40] = v2815;
      i$$40++;
      v705 = i$$40 < size$$6;
    }
    var v706 = this.field;
    return new GF256Poly(v706, product$$2);
  }
  function v75(scalar) {
    var v708 = scalar == 0;
    if (v708) {
      var v707 = this.field;
      return v707.Zero;
    }
    var v709 = scalar == 1;
    if (v709) {
      return this;
    }
    var v710 = this.coefficients;
    var size$$5 = v710.length;
    var product$$1 = new Array(size$$5);
    var i$$39 = 0;
    var v713 = i$$39 < size$$5;
    for (;v713;) {
      var v711 = this.field;
      var v1584 = this.coefficients;
      var v712 = v1584[i$$39];
      var v2816 = JAM.call(v711.multiply, v711, [v712, scalar], JAM.policy.p33);
      product$$1[i$$39] = v2816;
      i$$39++;
      v713 = i$$39 < size$$5;
    }
    var v714 = this.field;
    return new GF256Poly(v714, product$$1);
  }
  function v74(other$$7) {
    var v1585 = this.field;
    var v1586 = other$$7.field;
    var v715 = v1585 != v1586;
    if (v715) {
      throw "GF256Polys do not have same GF256 field";
    }
    var v1587 = this.Zero;
    var v2298 = !v1587;
    if (v2298) {
      v1587 = other$$7.Zero;
    }
    var v717 = v1587;
    if (v717) {
      var v716 = this.field;
      return v716.Zero;
    }
    var aCoefficients = this.coefficients;
    var aLength = aCoefficients.length;
    var bCoefficients = other$$7.coefficients;
    var bLength = bCoefficients.length;
    var v1588 = aLength + bLength;
    var v718 = v1588 - 1;
    var product = new Array(v718);
    var i$$38 = 0;
    var v721 = i$$38 < aLength;
    for (;v721;) {
      var aCoeff = aCoefficients[i$$38];
      var j$$22 = 0;
      var v720 = j$$22 < bLength;
      for (;v720;) {
        var v719 = i$$38 + j$$22;
        var v2299 = i$$38 + j$$22;
        var v1589 = product[v2299];
        var v2300 = this.field;
        var v2301 = bCoefficients[j$$22];
        var v1590 = JAM.call(v2300.multiply, v2300, [aCoeff, v2301], JAM.policy.p33);
        var v2817 = JAM.call(GF256.addOrSubtract, GF256, [v1589, v1590], JAM.policy.p33);
        product[v719] = v2817;
        j$$22++;
        v720 = j$$22 < bLength;
      }
      i$$38++;
      v721 = i$$38 < aLength;
    }
    var v722 = this.field;
    return new GF256Poly(v722, product);
  }
  function v73(other$$6) {
    var v1591 = this.field;
    var v1592 = other$$6.field;
    var v723 = v1591 != v1592;
    if (v723) {
      throw "GF256Polys do not have same GF256 field";
    }
    var v724 = this.Zero;
    if (v724) {
      return other$$6;
    }
    var v725 = other$$6.Zero;
    if (v725) {
      return this;
    }
    var smallerCoefficients = this.coefficients;
    var largerCoefficients = other$$6.coefficients;
    var v1593 = smallerCoefficients.length;
    var v1594 = largerCoefficients.length;
    var v726 = v1593 > v1594;
    if (v726) {
      var temp$$4 = smallerCoefficients;
      smallerCoefficients = largerCoefficients;
      largerCoefficients = temp$$4;
    }
    var v727 = largerCoefficients.length;
    var sumDiff = new Array(v727);
    var v728 = largerCoefficients.length;
    var v729 = smallerCoefficients.length;
    var lengthDiff = v728 - v729;
    var ci$$1 = 0;
    var v730 = ci$$1 < lengthDiff;
    for (;v730;) {
      sumDiff[ci$$1] = largerCoefficients[ci$$1];
      ci$$1++;
      v730 = ci$$1 < lengthDiff;
    }
    var i$$37 = lengthDiff;
    var v1595 = largerCoefficients.length;
    var v733 = i$$37 < v1595;
    for (;v733;) {
      var v1596 = i$$37 - lengthDiff;
      var v731 = smallerCoefficients[v1596];
      var v732 = largerCoefficients[i$$37];
      var v2818 = JAM.call(GF256.addOrSubtract, GF256, [v731, v732], JAM.policy.p33);
      sumDiff[i$$37] = v2818;
      i$$37++;
      var v1597 = largerCoefficients.length;
      v733 = i$$37 < v1597;
    }
    return new GF256Poly(field$$1, sumDiff);
  }
  function v72(a$$2) {
    var v734 = a$$2 == 0;
    if (v734) {
      return JAM.call(this.getCoefficient, this, [0], JAM.policy.p16);
    }
    var v735 = this.coefficients;
    var size$$4 = v735.length;
    var v738 = a$$2 == 1;
    if (v738) {
      var result$$5 = 0;
      var i$$36 = 0;
      var v737 = i$$36 < size$$4;
      for (;v737;) {
        var v1598 = this.coefficients;
        var v736 = v1598[i$$36];
        result$$5 = JAM.call(GF256.addOrSubtract, GF256, [result$$5, v736], JAM.policy.p33);
        i$$36++;
        v737 = i$$36 < size$$4;
      }
      return result$$5;
    }
    var v739 = this.coefficients;
    var result2 = v739[0];
    i$$36 = 1;
    var v742 = i$$36 < size$$4;
    for (;v742;) {
      var v1599 = this.field;
      var v740 = JAM.call(v1599.multiply, v1599, [a$$2, result2], JAM.policy.p33);
      var v1600 = this.coefficients;
      var v741 = v1600[i$$36];
      result2 = JAM.call(GF256.addOrSubtract, GF256, [v740, v741], JAM.policy.p33);
      i$$36++;
      v742 = i$$36 < size$$4;
    }
    return result2;
  }
  function v71(degree) {
    var v743 = this.coefficients;
    var v2545 = this.coefficients;
    var v2302 = v2545.length;
    var v1601 = v2302 - 1;
    var v744 = v1601 - degree;
    return v743[v744];
  }
  function v70() {
    return this.coefficients;
  }
  function v69() {
    var v1602 = this.coefficients;
    var v745 = v1602.length;
    return v745 - 1;
  }
  function v68() {
    var v1603 = this.coefficients;
    var v746 = v1603[0];
    return v746 == 0;
  }
  var v1604 = coefficients == null;
  var v2304 = !v1604;
  if (v2304) {
    var v2303 = coefficients.length;
    v1604 = v2303 == 0;
  }
  var v747 = v1604;
  if (v747) {
    throw "System.ArgumentException";
  }
  this.field = field$$1;
  var coefficientsLength = coefficients.length;
  var v1605 = coefficientsLength > 1;
  if (v1605) {
    var v2305 = coefficients[0];
    v1605 = v2305 == 0;
  }
  var v756 = v1605;
  if (v756) {
    var firstNonZero = 1;
    var v1606 = firstNonZero < coefficientsLength;
    if (v1606) {
      var v2306 = coefficients[firstNonZero];
      v1606 = v2306 == 0;
    }
    var v748 = v1606;
    for (;v748;) {
      firstNonZero++;
      var v1607 = firstNonZero < coefficientsLength;
      if (v1607) {
        var v2307 = coefficients[firstNonZero];
        v1607 = v2307 == 0;
      }
      v748 = v1607;
    }
    var v755 = firstNonZero == coefficientsLength;
    if (v755) {
      var v749 = field$$1.Zero;
      this.coefficients = v749.coefficients;
    } else {
      var v750 = coefficientsLength - firstNonZero;
      var v2819 = new Array(v750);
      this.coefficients = v2819;
      var i$$35 = 0;
      var v2308 = this.coefficients;
      var v1608 = v2308.length;
      var v752 = i$$35 < v1608;
      for (;v752;) {
        var v751 = this.coefficients;
        v751[i$$35] = 0;
        i$$35++;
        var v2309 = this.coefficients;
        var v1609 = v2309.length;
        v752 = i$$35 < v1609;
      }
      var ci = 0;
      var v2310 = this.coefficients;
      var v1610 = v2310.length;
      var v754 = ci < v1610;
      for (;v754;) {
        var v753 = this.coefficients;
        var v1611 = firstNonZero + ci;
        v753[ci] = coefficients[v1611];
        ci++;
        var v2311 = this.coefficients;
        var v1612 = v2311.length;
        v754 = ci < v1612;
      }
    }
  } else {
    this.coefficients = coefficients;
  }
  JAM.call(this.__defineGetter__, this, ["Zero", v68], JAM.policy.p19);
  JAM.call(this.__defineGetter__, this, ["Degree", v69], JAM.policy.p19);
  JAM.call(this.__defineGetter__, this, ["Coefficients", v70], JAM.policy.p19);
  this.getCoefficient = v71;
  this.evaluateAt = v72;
  this.addOrSubtract = v73;
  this.multiply1 = v74;
  this.multiply2 = v75;
  this.multiplyByMonomial = v76;
  this.divide = v77;
  return;
}
function GF256(primitive) {
  function v84(a$$6, b$$3) {
    var v1613 = a$$6 == 0;
    var v2312 = !v1613;
    if (v2312) {
      v1613 = b$$3 == 0;
    }
    var v757 = v1613;
    if (v757) {
      return 0;
    }
    var v758 = a$$6 == 1;
    if (v758) {
      return b$$3;
    }
    var v759 = b$$3 == 1;
    if (v759) {
      return a$$6;
    }
    var v760 = this.expTable;
    var v2546 = this.logTable;
    var v2313 = v2546[a$$6];
    var v2547 = this.logTable;
    var v2314 = v2547[b$$3];
    var v1614 = v2313 + v2314;
    var v761 = v1614 % 255;
    return v760[v761];
  }
  function v83(a$$5) {
    var v762 = a$$5 == 0;
    if (v762) {
      throw "System.ArithmeticException";
    }
    var v763 = this.expTable;
    var v2315 = this.logTable;
    var v1615 = v2315[a$$5];
    var v764 = 255 - v1615;
    return v763[v764];
  }
  function v82(a$$4) {
    var v765 = a$$4 == 0;
    if (v765) {
      throw "System.ArgumentException";
    }
    var v766 = this.logTable;
    return v766[a$$4];
  }
  function v81(a$$3) {
    var v767 = this.expTable;
    return v767[a$$3];
  }
  function v80(degree$$2, coefficient$$1) {
    var v768 = degree$$2 < 0;
    if (v768) {
      throw "System.ArgumentException";
    }
    var v769 = coefficient$$1 == 0;
    if (v769) {
      return zero;
    }
    var v770 = degree$$2 + 1;
    var coefficients$$1 = new Array(v770);
    var i$$42 = 0;
    var v1616 = coefficients$$1.length;
    var v771 = i$$42 < v1616;
    for (;v771;) {
      coefficients$$1[i$$42] = 0;
      i$$42++;
      var v1617 = coefficients$$1.length;
      v771 = i$$42 < v1617;
    }
    coefficients$$1[0] = coefficient$$1;
    return new GF256Poly(this, coefficients$$1);
  }
  function v79() {
    return this.one;
  }
  function v78() {
    return this.zero;
  }
  var v2820 = new Array(256);
  this.expTable = v2820;
  var v2821 = new Array(256);
  this.logTable = v2821;
  var x$$57 = 1;
  var i$$41 = 0;
  var v774 = i$$41 < 256;
  for (;v774;) {
    var v772 = this.expTable;
    v772[i$$41] = x$$57;
    x$$57 = x$$57 << 1;
    var v773 = x$$57 >= 256;
    if (v773) {
      x$$57 = x$$57 ^ primitive;
    }
    i$$41++;
    v774 = i$$41 < 256;
  }
  i$$41 = 0;
  var v777 = i$$41 < 255;
  for (;v777;) {
    var v775 = this.logTable;
    var v1618 = this.expTable;
    var v776 = v1618[i$$41];
    introspect(JAM.policy.p6) {
      v775[v776] = i$$41;
    }
    i$$41++;
    v777 = i$$41 < 255;
  }
  var at0 = new Array(1);
  at0[0] = 0;
  var v778 = new Array(at0);
  var v2822 = new GF256Poly(this, v778);
  this.zero = v2822;
  var at1 = new Array(1);
  at1[0] = 1;
  var v779 = new Array(at1);
  var v2823 = new GF256Poly(this, v779);
  this.one = v2823;
  JAM.call(this.__defineGetter__, this, ["Zero", v78], JAM.policy.p19);
  JAM.call(this.__defineGetter__, this, ["One", v79], JAM.policy.p19);
  this.buildMonomial = v80;
  this.exp = v81;
  this.log = v82;
  this.inverse = v83;
  this.multiply = v84;
  return;
}
function URShift(number, bits$$14) {
  var v782 = number >= 0;
  if (v782) {
    return number >> bits$$14;
  } else {
    var v780 = number >> bits$$14;
    var v1619 = ~bits$$14;
    var v781 = 2 << v1619;
    return v780 + v781;
  }
  return;
}
function FinderPattern(posX, posY, estimatedModuleSize) {
  function v90(moduleSize$$2, i$$47, j$$25) {
    var v2657 = this.y;
    var v2548 = i$$47 - v2657;
    var v2316 = JAM.call(Math.abs, Math, [v2548], JAM.policy.p21);
    var v1620 = v2316 <= moduleSize$$2;
    if (v1620) {
      var v2658 = this.x;
      var v2549 = j$$25 - v2658;
      var v2317 = JAM.call(Math.abs, Math, [v2549], JAM.policy.p21);
      v1620 = v2317 <= moduleSize$$2;
    }
    var v785 = v1620;
    if (v785) {
      var v1621 = this.estimatedModuleSize;
      var v783 = moduleSize$$2 - v1621;
      var moduleSizeDiff = JAM.call(Math.abs, Math, [v783], JAM.policy.p21);
      var v784 = moduleSizeDiff <= 1;
      var v1623 = !v784;
      if (v1623) {
        var v2318 = this.estimatedModuleSize;
        var v1622 = moduleSizeDiff / v2318;
        v784 = v1622 <= 1;
      }
      return v784;
    }
    return false;
  }
  function v89() {
    this.count++;
    return;
  }
  function v88() {
    return this.y;
  }
  function v87() {
    return this.x;
  }
  function v86() {
    return this.count;
  }
  function v85() {
    return this.estimatedModuleSize;
  }
  this.x = posX;
  this.y = posY;
  this.count = 1;
  this.estimatedModuleSize = estimatedModuleSize;
  JAM.call(this.__defineGetter__, this, ["EstimatedModuleSize", v85], JAM.policy.p19);
  JAM.call(this.__defineGetter__, this, ["Count", v86], JAM.policy.p19);
  JAM.call(this.__defineGetter__, this, ["X", v87], JAM.policy.p19);
  JAM.call(this.__defineGetter__, this, ["Y", v88], JAM.policy.p19);
  this.incrementCount = v89;
  this.aboutEquals = v90;
  return;
}
function FinderPatternInfo(patternCenters) {
  function v93() {
    return this.topRight;
  }
  function v92() {
    return this.topLeft;
  }
  function v91() {
    return this.bottomLeft;
  }
  this.bottomLeft = patternCenters[0];
  this.topLeft = patternCenters[1];
  this.topRight = patternCenters[2];
  JAM.call(this.__defineGetter__, this, ["BottomLeft", v91], JAM.policy.p19);
  JAM.call(this.__defineGetter__, this, ["TopLeft", v92], JAM.policy.p19);
  JAM.call(this.__defineGetter__, this, ["TopRight", v93], JAM.policy.p19);
  return;
}
function FinderPatternFinder() {
  function v104(image$$12) {
    var tryHarder = false;
    this.image = image$$12;
    var maxI$$1 = qrcode.height;
    var maxJ$$1 = qrcode.width;
    var v1624 = 3 * maxI$$1;
    var v1625 = 4 * MAX_MODULES;
    var v786 = v1624 / v1625;
    var iSkip = JAM.call(Math.floor, Math, [v786], JAM.policy.p21);
    var v1626 = iSkip < MIN_SKIP;
    var v2319 = !v1626;
    if (v2319) {
      v1626 = tryHarder;
    }
    var v787 = v1626;
    if (v787) {
      iSkip = MIN_SKIP;
    }
    var done = false;
    var stateCount$$5 = new Array(5);
    var i$$54 = iSkip - 1;
    var v1627 = i$$54 < maxI$$1;
    if (v1627) {
      v1627 = !done;
    }
    var v799 = v1627;
    for (;v799;) {
      stateCount$$5[0] = 0;
      stateCount$$5[1] = 0;
      stateCount$$5[2] = 0;
      stateCount$$5[3] = 0;
      stateCount$$5[4] = 0;
      var currentState = 0;
      var j$$28 = 0;
      var v796 = j$$28 < maxJ$$1;
      for (;v796;) {
        var v2550 = qrcode.width;
        var v2320 = i$$54 * v2550;
        var v1628 = j$$28 + v2320;
        var v795 = image$$12[v1628];
        if (v795) {
          var v1629 = currentState & 1;
          var v788 = v1629 == 1;
          if (v788) {
            currentState++;
          }
          stateCount$$5[currentState]++;
        } else {
          var v1630 = currentState & 1;
          var v794 = v1630 == 0;
          if (v794) {
            var v793 = currentState == 4;
            if (v793) {
              var v792 = JAM.call(this.foundPatternCross, this, [stateCount$$5], JAM.policy.p21);
              if (v792) {
                var confirmed = JAM.call(this.handlePossibleCenter, this, [stateCount$$5, i$$54, j$$28], JAM.policy.p33);
                if (confirmed) {
                  iSkip = 2;
                  var v790 = this.hasSkipped;
                  if (v790) {
                    done = this.haveMultiplyConfirmedCenters();
                  } else {
                    var rowSkip = this.findRowSkip();
                    var v1631 = stateCount$$5[2];
                    var v789 = rowSkip > v1631;
                    if (v789) {
                      var v2551 = stateCount$$5[2];
                      var v2321 = rowSkip - v2551;
                      var v1632 = v2321 - iSkip;
                      i$$54 = i$$54 + v1632;
                      j$$28 = maxJ$$1 - 1;
                    }
                  }
                } else {
                  var v1633 = j$$28 < maxJ$$1;
                  if (v1633) {
                    var v2727 = qrcode.width;
                    var v2659 = i$$54 * v2727;
                    var v2552 = j$$28 + v2659;
                    var v2322 = image$$12[v2552];
                    v1633 = !v2322;
                  }
                  var v791 = v1633;
                  do {
                    j$$28++;
                    var v1634 = j$$28 < maxJ$$1;
                    if (v1634) {
                      var v2728 = qrcode.width;
                      var v2660 = i$$54 * v2728;
                      var v2553 = j$$28 + v2660;
                      var v2323 = image$$12[v2553];
                      v1634 = !v2323;
                    }
                    v791 = v1634;
                  } while (v791);
                  j$$28--;
                }
                currentState = 0;
                stateCount$$5[0] = 0;
                stateCount$$5[1] = 0;
                stateCount$$5[2] = 0;
                stateCount$$5[3] = 0;
                stateCount$$5[4] = 0;
              } else {
                stateCount$$5[0] = stateCount$$5[2];
                stateCount$$5[1] = stateCount$$5[3];
                stateCount$$5[2] = stateCount$$5[4];
                stateCount$$5[3] = 1;
                stateCount$$5[4] = 0;
                currentState = 3;
              }
            } else {
              introspect(JAM.policy.p6) {
                stateCount$$5[++currentState]++;
              }
            }
          } else {
            stateCount$$5[currentState]++;
          }
        }
        j$$28++;
        v796 = j$$28 < maxJ$$1;
      }
      var v798 = JAM.call(this.foundPatternCross, this, [stateCount$$5], JAM.policy.p21);
      if (v798) {
        confirmed = JAM.call(this.handlePossibleCenter, this, [stateCount$$5, i$$54, maxJ$$1], JAM.policy.p33);
        if (confirmed) {
          iSkip = stateCount$$5[0];
          var v797 = this.hasSkipped;
          if (v797) {
            done = haveMultiplyConfirmedCenters();
          }
        }
      }
      i$$54 = i$$54 + iSkip;
      var v1635 = i$$54 < maxI$$1;
      if (v1635) {
        v1635 = !done;
      }
      v799 = v1635;
    }
    var patternInfo = this.selectBestPatterns();
    JAM.call(qrcode.orderBestPatterns, qrcode, [patternInfo], JAM.policy.p21);
    return new FinderPatternInfo(patternInfo);
  }
  function v103() {
    var confirmedCount = 0;
    var totalModuleSize$$2 = 0;
    var v800 = this.possibleCenters;
    var max$$7 = v800.length;
    var i$$53 = 0;
    var v803 = i$$53 < max$$7;
    for (;v803;) {
      var v801 = this.possibleCenters;
      var pattern$$3 = v801[i$$53];
      var v1636 = pattern$$3.Count;
      var v802 = v1636 >= CENTER_QUORUM;
      if (v802) {
        confirmedCount++;
        var v1637 = pattern$$3.EstimatedModuleSize;
        totalModuleSize$$2 = totalModuleSize$$2 + v1637;
      }
      i$$53++;
      v803 = i$$53 < max$$7;
    }
    var v804 = confirmedCount < 3;
    if (v804) {
      return false;
    }
    var average$$1 = totalModuleSize$$2 / max$$7;
    var totalDeviation = 0;
    i$$53 = 0;
    var v806 = i$$53 < max$$7;
    for (;v806;) {
      var v805 = this.possibleCenters;
      pattern$$3 = v805[i$$53];
      var v2554 = pattern$$3.EstimatedModuleSize;
      var v2324 = v2554 - average$$1;
      var v1638 = JAM.call(Math.abs, Math, [v2324], JAM.policy.p21);
      totalDeviation = totalDeviation + v1638;
      i$$53++;
      v806 = i$$53 < max$$7;
    }
    var v807 = .05 * totalModuleSize$$2;
    return totalDeviation <= v807;
  }
  function v102() {
    var v808 = this.possibleCenters;
    var max$$6 = v808.length;
    var v809 = max$$6 <= 1;
    if (v809) {
      return 0;
    }
    var firstConfirmedCenter = null;
    var i$$52 = 0;
    var v814 = i$$52 < max$$6;
    for (;v814;) {
      var v810 = this.possibleCenters;
      var center$$1 = v810[i$$52];
      var v1639 = center$$1.Count;
      var v813 = v1639 >= CENTER_QUORUM;
      if (v813) {
        var v812 = firstConfirmedCenter == null;
        if (v812) {
          firstConfirmedCenter = center$$1;
        } else {
          this.hasSkipped = true;
          var v2661 = firstConfirmedCenter.X;
          var v2662 = center$$1.X;
          var v2555 = v2661 - v2662;
          var v2325 = JAM.call(Math.abs, Math, [v2555], JAM.policy.p21);
          var v2663 = firstConfirmedCenter.Y;
          var v2664 = center$$1.Y;
          var v2556 = v2663 - v2664;
          var v2326 = JAM.call(Math.abs, Math, [v2556], JAM.policy.p21);
          var v1640 = v2325 - v2326;
          var v811 = v1640 / 2;
          return JAM.call(Math.floor, Math, [v811], JAM.policy.p21);
        }
      }
      i$$52++;
      v814 = i$$52 < max$$6;
    }
    return 0;
  }
  function v101() {
    function v100(a$$8, b$$5) {
      var v1641 = a$$8.count;
      var v1642 = b$$5.count;
      var v815 = v1641 > v1642;
      if (v815) {
        return-1;
      }
      var v1643 = a$$8.count;
      var v1644 = b$$5.count;
      var v816 = v1643 < v1644;
      if (v816) {
        return 1;
      }
      return 0;
    }
    var v817 = this.possibleCenters;
    var startSize = v817.length;
    var v818 = startSize < 3;
    if (v818) {
      throw "Couldn't find enough finder patterns";
    }
    var v824 = startSize > 3;
    if (v824) {
      var totalModuleSize$$1 = 0;
      var i$$51 = 0;
      var v819 = i$$51 < startSize;
      for (;v819;) {
        var v2557 = this.possibleCenters;
        var v2327 = v2557[i$$51];
        var v1645 = v2327.EstimatedModuleSize;
        totalModuleSize$$1 = totalModuleSize$$1 + v1645;
        i$$51++;
        v819 = i$$51 < startSize;
      }
      var average = totalModuleSize$$1 / startSize;
      i$$51 = 0;
      var v2558 = this.possibleCenters;
      var v2328 = v2558.length;
      var v1646 = i$$51 < v2328;
      if (v1646) {
        var v2559 = this.possibleCenters;
        var v2329 = v2559.length;
        v1646 = v2329 > 3;
      }
      var v823 = v1646;
      for (;v823;) {
        var v820 = this.possibleCenters;
        var pattern$$2 = v820[i$$51];
        var v2560 = pattern$$2.EstimatedModuleSize;
        var v2330 = v2560 - average;
        var v1647 = JAM.call(Math.abs, Math, [v2330], JAM.policy.p21);
        var v1648 = .2 * average;
        var v822 = v1647 > v1648;
        if (v822) {
          var v821 = this.possibleCenters;
          JAM.call(v821.remove, v821, [i$$51], JAM.policy.p24);
          i$$51--;
        }
        i$$51++;
        var v2561 = this.possibleCenters;
        var v2331 = v2561.length;
        var v1649 = i$$51 < v2331;
        if (v1649) {
          var v2562 = this.possibleCenters;
          var v2332 = v2562.length;
          v1649 = v2332 > 3;
        }
        v823 = v1649;
      }
    }
    var v2333 = this.possibleCenters;
    var v1650 = v2333.length;
    var v826 = v1650 > 3;
    if (v826) {
      var v825 = this.possibleCenters;
      JAM.call(v825.sort, v825, [v100], JAM.policy.p21);
    }
    var v1651 = this.possibleCenters;
    var v827 = v1651[0];
    var v1652 = this.possibleCenters;
    var v828 = v1652[1];
    var v1653 = this.possibleCenters;
    var v829 = v1653[2];
    return new Array(v827, v828, v829);
  }
  function v99(stateCount$$4, i$$50, j$$27) {
    var v2563 = stateCount$$4[0];
    var v2564 = stateCount$$4[1];
    var v2334 = v2563 + v2564;
    var v2335 = stateCount$$4[2];
    var v1654 = v2334 + v2335;
    var v1655 = stateCount$$4[3];
    var v830 = v1654 + v1655;
    var v831 = stateCount$$4[4];
    var stateCountTotal$$2 = v830 + v831;
    var centerJ$$1 = JAM.call(this.centerFromEnd, this, [stateCount$$4, j$$27], JAM.policy.p33);
    var v832 = JAM.call(Math.floor, Math, [centerJ$$1], JAM.policy.p21);
    var v833 = stateCount$$4[2];
    var centerI$$1 = JAM.call(this.crossCheckVertical, this, [i$$50, v832, v833, stateCountTotal$$2], JAM.policy.p33);
    var v1656 = isNaN(centerI$$1);
    var v846 = !v1656;
    if (v846) {
      var v834 = JAM.call(Math.floor, Math, [centerJ$$1], JAM.policy.p21);
      var v835 = JAM.call(Math.floor, Math, [centerI$$1], JAM.policy.p21);
      var v836 = stateCount$$4[2];
      centerJ$$1 = JAM.call(this.crossCheckHorizontal, this, [v834, v835, v836, stateCountTotal$$2], JAM.policy.p23);
      var v1657 = isNaN(centerJ$$1);
      var v845 = !v1657;
      if (v845) {
        var estimatedModuleSize$$1 = stateCountTotal$$2 / 7;
        var found = false;
        var v837 = this.possibleCenters;
        var max$$5 = v837.length;
        var index$$39 = 0;
        var v840 = index$$39 < max$$5;
        for (;v840;) {
          var v838 = this.possibleCenters;
          var center = v838[index$$39];
          var v839 = JAM.call(center.aboutEquals, center, [estimatedModuleSize$$1, centerI$$1, centerJ$$1], JAM.policy.p33);
          if (v839) {
            center.incrementCount();
            found = true;
            break;
          }
          index$$39++;
          v840 = index$$39 < max$$5;
        }
        var v844 = !found;
        if (v844) {
          var point$$2 = new FinderPattern(centerJ$$1, centerI$$1, estimatedModuleSize$$1);
          var v841 = this.possibleCenters;
          JAM.call(v841.push, v841, [point$$2], JAM.policy.p21);
          var v1658 = this.resultPointCallback;
          var v843 = v1658 != null;
          if (v843) {
            var v842 = this.resultPointCallback;
            JAM.call(v842.foundPossibleResultPoint, v842, [point$$2], JAM.policy.p21);
          }
        }
        return true;
      }
    }
    return false;
  }
  function v98(startJ, centerI, maxCount$$1, originalStateCountTotal$$1) {
    var image$$11 = this.image;
    var maxJ = qrcode.width;
    var stateCount$$3 = this.CrossCheckStateCount;
    var j$$26 = startJ;
    var v1659 = j$$26 >= 0;
    if (v1659) {
      var v2665 = qrcode.width;
      var v2565 = centerI * v2665;
      var v2336 = j$$26 + v2565;
      v1659 = image$$11[v2336];
    }
    var v847 = v1659;
    for (;v847;) {
      stateCount$$3[2]++;
      j$$26--;
      var v1660 = j$$26 >= 0;
      if (v1660) {
        var v2666 = qrcode.width;
        var v2566 = centerI * v2666;
        var v2337 = j$$26 + v2566;
        v1660 = image$$11[v2337];
      }
      v847 = v1660;
    }
    var v848 = j$$26 < 0;
    if (v848) {
      return NaN;
    }
    var v2338 = j$$26 >= 0;
    if (v2338) {
      var v2770 = qrcode.width;
      var v2729 = centerI * v2770;
      var v2667 = j$$26 + v2729;
      var v2567 = image$$11[v2667];
      v2338 = !v2567;
    }
    var v1661 = v2338;
    if (v1661) {
      var v2339 = stateCount$$3[1];
      v1661 = v2339 <= maxCount$$1;
    }
    var v849 = v1661;
    for (;v849;) {
      stateCount$$3[1]++;
      j$$26--;
      var v2340 = j$$26 >= 0;
      if (v2340) {
        var v2771 = qrcode.width;
        var v2730 = centerI * v2771;
        var v2668 = j$$26 + v2730;
        var v2568 = image$$11[v2668];
        v2340 = !v2568;
      }
      var v1662 = v2340;
      if (v1662) {
        var v2341 = stateCount$$3[1];
        v1662 = v2341 <= maxCount$$1;
      }
      v849 = v1662;
    }
    var v1663 = j$$26 < 0;
    var v2343 = !v1663;
    if (v2343) {
      var v2342 = stateCount$$3[1];
      v1663 = v2342 > maxCount$$1;
    }
    var v850 = v1663;
    if (v850) {
      return NaN;
    }
    var v2344 = j$$26 >= 0;
    if (v2344) {
      var v2731 = qrcode.width;
      var v2669 = centerI * v2731;
      var v2569 = j$$26 + v2669;
      v2344 = image$$11[v2569];
    }
    var v1664 = v2344;
    if (v1664) {
      var v2345 = stateCount$$3[0];
      v1664 = v2345 <= maxCount$$1;
    }
    var v851 = v1664;
    for (;v851;) {
      stateCount$$3[0]++;
      j$$26--;
      var v2346 = j$$26 >= 0;
      if (v2346) {
        var v2732 = qrcode.width;
        var v2670 = centerI * v2732;
        var v2570 = j$$26 + v2670;
        v2346 = image$$11[v2570];
      }
      var v1665 = v2346;
      if (v1665) {
        var v2347 = stateCount$$3[0];
        v1665 = v2347 <= maxCount$$1;
      }
      v851 = v1665;
    }
    var v1666 = stateCount$$3[0];
    var v852 = v1666 > maxCount$$1;
    if (v852) {
      return NaN;
    }
    j$$26 = startJ + 1;
    var v1667 = j$$26 < maxJ;
    if (v1667) {
      var v2671 = qrcode.width;
      var v2571 = centerI * v2671;
      var v2348 = j$$26 + v2571;
      v1667 = image$$11[v2348];
    }
    var v853 = v1667;
    for (;v853;) {
      stateCount$$3[2]++;
      j$$26++;
      var v1668 = j$$26 < maxJ;
      if (v1668) {
        var v2672 = qrcode.width;
        var v2572 = centerI * v2672;
        var v2349 = j$$26 + v2572;
        v1668 = image$$11[v2349];
      }
      v853 = v1668;
    }
    var v854 = j$$26 == maxJ;
    if (v854) {
      return NaN;
    }
    var v2350 = j$$26 < maxJ;
    if (v2350) {
      var v2772 = qrcode.width;
      var v2733 = centerI * v2772;
      var v2673 = j$$26 + v2733;
      var v2573 = image$$11[v2673];
      v2350 = !v2573;
    }
    var v1669 = v2350;
    if (v1669) {
      var v2351 = stateCount$$3[3];
      v1669 = v2351 < maxCount$$1;
    }
    var v855 = v1669;
    for (;v855;) {
      stateCount$$3[3]++;
      j$$26++;
      var v2352 = j$$26 < maxJ;
      if (v2352) {
        var v2773 = qrcode.width;
        var v2734 = centerI * v2773;
        var v2674 = j$$26 + v2734;
        var v2574 = image$$11[v2674];
        v2352 = !v2574;
      }
      var v1670 = v2352;
      if (v1670) {
        var v2353 = stateCount$$3[3];
        v1670 = v2353 < maxCount$$1;
      }
      v855 = v1670;
    }
    var v1671 = j$$26 == maxJ;
    var v2355 = !v1671;
    if (v2355) {
      var v2354 = stateCount$$3[3];
      v1671 = v2354 >= maxCount$$1;
    }
    var v856 = v1671;
    if (v856) {
      return NaN;
    }
    var v2356 = j$$26 < maxJ;
    if (v2356) {
      var v2735 = qrcode.width;
      var v2675 = centerI * v2735;
      var v2575 = j$$26 + v2675;
      v2356 = image$$11[v2575];
    }
    var v1672 = v2356;
    if (v1672) {
      var v2357 = stateCount$$3[4];
      v1672 = v2357 < maxCount$$1;
    }
    var v857 = v1672;
    for (;v857;) {
      stateCount$$3[4]++;
      j$$26++;
      var v2358 = j$$26 < maxJ;
      if (v2358) {
        var v2736 = qrcode.width;
        var v2676 = centerI * v2736;
        var v2576 = j$$26 + v2676;
        v2358 = image$$11[v2576];
      }
      var v1673 = v2358;
      if (v1673) {
        var v2359 = stateCount$$3[4];
        v1673 = v2359 < maxCount$$1;
      }
      v857 = v1673;
    }
    var v1674 = stateCount$$3[4];
    var v858 = v1674 >= maxCount$$1;
    if (v858) {
      return NaN;
    }
    var v2577 = stateCount$$3[0];
    var v2578 = stateCount$$3[1];
    var v2360 = v2577 + v2578;
    var v2361 = stateCount$$3[2];
    var v1675 = v2360 + v2361;
    var v1676 = stateCount$$3[3];
    var v859 = v1675 + v1676;
    var v860 = stateCount$$3[4];
    var stateCountTotal$$1 = v859 + v860;
    var v2579 = stateCountTotal$$1 - originalStateCountTotal$$1;
    var v2362 = JAM.call(Math.abs, Math, [v2579], JAM.policy.p21);
    var v1677 = 5 * v2362;
    var v861 = v1677 >= originalStateCountTotal$$1;
    if (v861) {
      return NaN;
    }
    var v862;
    var v1678 = JAM.call(this.foundPatternCross, this, [stateCount$$3], JAM.policy.p21);
    if (v1678) {
      v862 = JAM.call(this.centerFromEnd, this, [stateCount$$3, j$$26], JAM.policy.p33);
    } else {
      v862 = NaN;
    }
    return v862;
  }
  function v97(startI, centerJ, maxCount, originalStateCountTotal) {
    var image$$10 = this.image;
    var maxI = qrcode.height;
    var stateCount$$2 = this.CrossCheckStateCount;
    var i$$49 = startI;
    var v1679 = i$$49 >= 0;
    if (v1679) {
      var v2677 = qrcode.width;
      var v2580 = i$$49 * v2677;
      var v2363 = centerJ + v2580;
      v1679 = image$$10[v2363];
    }
    var v863 = v1679;
    for (;v863;) {
      stateCount$$2[2]++;
      i$$49--;
      var v1680 = i$$49 >= 0;
      if (v1680) {
        var v2678 = qrcode.width;
        var v2581 = i$$49 * v2678;
        var v2364 = centerJ + v2581;
        v1680 = image$$10[v2364];
      }
      v863 = v1680;
    }
    var v864 = i$$49 < 0;
    if (v864) {
      return NaN;
    }
    var v2365 = i$$49 >= 0;
    if (v2365) {
      var v2774 = qrcode.width;
      var v2737 = i$$49 * v2774;
      var v2679 = centerJ + v2737;
      var v2582 = image$$10[v2679];
      v2365 = !v2582;
    }
    var v1681 = v2365;
    if (v1681) {
      var v2366 = stateCount$$2[1];
      v1681 = v2366 <= maxCount;
    }
    var v865 = v1681;
    for (;v865;) {
      stateCount$$2[1]++;
      i$$49--;
      var v2367 = i$$49 >= 0;
      if (v2367) {
        var v2775 = qrcode.width;
        var v2738 = i$$49 * v2775;
        var v2680 = centerJ + v2738;
        var v2583 = image$$10[v2680];
        v2367 = !v2583;
      }
      var v1682 = v2367;
      if (v1682) {
        var v2368 = stateCount$$2[1];
        v1682 = v2368 <= maxCount;
      }
      v865 = v1682;
    }
    var v1683 = i$$49 < 0;
    var v2370 = !v1683;
    if (v2370) {
      var v2369 = stateCount$$2[1];
      v1683 = v2369 > maxCount;
    }
    var v866 = v1683;
    if (v866) {
      return NaN;
    }
    var v2371 = i$$49 >= 0;
    if (v2371) {
      var v2739 = qrcode.width;
      var v2681 = i$$49 * v2739;
      var v2584 = centerJ + v2681;
      v2371 = image$$10[v2584];
    }
    var v1684 = v2371;
    if (v1684) {
      var v2372 = stateCount$$2[0];
      v1684 = v2372 <= maxCount;
    }
    var v867 = v1684;
    for (;v867;) {
      stateCount$$2[0]++;
      i$$49--;
      var v2373 = i$$49 >= 0;
      if (v2373) {
        var v2740 = qrcode.width;
        var v2682 = i$$49 * v2740;
        var v2585 = centerJ + v2682;
        v2373 = image$$10[v2585];
      }
      var v1685 = v2373;
      if (v1685) {
        var v2374 = stateCount$$2[0];
        v1685 = v2374 <= maxCount;
      }
      v867 = v1685;
    }
    var v1686 = stateCount$$2[0];
    var v868 = v1686 > maxCount;
    if (v868) {
      return NaN;
    }
    i$$49 = startI + 1;
    var v1687 = i$$49 < maxI;
    if (v1687) {
      var v2683 = qrcode.width;
      var v2586 = i$$49 * v2683;
      var v2375 = centerJ + v2586;
      v1687 = image$$10[v2375];
    }
    var v869 = v1687;
    for (;v869;) {
      stateCount$$2[2]++;
      i$$49++;
      var v1688 = i$$49 < maxI;
      if (v1688) {
        var v2684 = qrcode.width;
        var v2587 = i$$49 * v2684;
        var v2376 = centerJ + v2587;
        v1688 = image$$10[v2376];
      }
      v869 = v1688;
    }
    var v870 = i$$49 == maxI;
    if (v870) {
      return NaN;
    }
    var v2377 = i$$49 < maxI;
    if (v2377) {
      var v2776 = qrcode.width;
      var v2741 = i$$49 * v2776;
      var v2685 = centerJ + v2741;
      var v2588 = image$$10[v2685];
      v2377 = !v2588;
    }
    var v1689 = v2377;
    if (v1689) {
      var v2378 = stateCount$$2[3];
      v1689 = v2378 < maxCount;
    }
    var v871 = v1689;
    for (;v871;) {
      stateCount$$2[3]++;
      i$$49++;
      var v2379 = i$$49 < maxI;
      if (v2379) {
        var v2777 = qrcode.width;
        var v2742 = i$$49 * v2777;
        var v2686 = centerJ + v2742;
        var v2589 = image$$10[v2686];
        v2379 = !v2589;
      }
      var v1690 = v2379;
      if (v1690) {
        var v2380 = stateCount$$2[3];
        v1690 = v2380 < maxCount;
      }
      v871 = v1690;
    }
    var v1691 = i$$49 == maxI;
    var v2382 = !v1691;
    if (v2382) {
      var v2381 = stateCount$$2[3];
      v1691 = v2381 >= maxCount;
    }
    var v872 = v1691;
    if (v872) {
      return NaN;
    }
    var v2383 = i$$49 < maxI;
    if (v2383) {
      var v2743 = qrcode.width;
      var v2687 = i$$49 * v2743;
      var v2590 = centerJ + v2687;
      v2383 = image$$10[v2590];
    }
    var v1692 = v2383;
    if (v1692) {
      var v2384 = stateCount$$2[4];
      v1692 = v2384 < maxCount;
    }
    var v873 = v1692;
    for (;v873;) {
      stateCount$$2[4]++;
      i$$49++;
      var v2385 = i$$49 < maxI;
      if (v2385) {
        var v2744 = qrcode.width;
        var v2688 = i$$49 * v2744;
        var v2591 = centerJ + v2688;
        v2385 = image$$10[v2591];
      }
      var v1693 = v2385;
      if (v1693) {
        var v2386 = stateCount$$2[4];
        v1693 = v2386 < maxCount;
      }
      v873 = v1693;
    }
    var v1694 = stateCount$$2[4];
    var v874 = v1694 >= maxCount;
    if (v874) {
      return NaN;
    }
    var v2592 = stateCount$$2[0];
    var v2593 = stateCount$$2[1];
    var v2387 = v2592 + v2593;
    var v2388 = stateCount$$2[2];
    var v1695 = v2387 + v2388;
    var v1696 = stateCount$$2[3];
    var v875 = v1695 + v1696;
    var v876 = stateCount$$2[4];
    var stateCountTotal = v875 + v876;
    var v2594 = stateCountTotal - originalStateCountTotal;
    var v2389 = JAM.call(Math.abs, Math, [v2594], JAM.policy.p21);
    var v1697 = 5 * v2389;
    var v1698 = 2 * originalStateCountTotal;
    var v877 = v1697 >= v1698;
    if (v877) {
      return NaN;
    }
    var v878;
    var v1699 = JAM.call(this.foundPatternCross, this, [stateCount$$2], JAM.policy.p21);
    if (v1699) {
      v878 = JAM.call(this.centerFromEnd, this, [stateCount$$2, i$$49], JAM.policy.p33);
    } else {
      v878 = NaN;
    }
    return v878;
  }
  function v96(stateCount$$1, end$$2) {
    var v2390 = stateCount$$1[4];
    var v1700 = end$$2 - v2390;
    var v1701 = stateCount$$1[3];
    var v879 = v1700 - v1701;
    var v1702 = stateCount$$1[2];
    var v880 = v1702 / 2;
    return v879 - v880;
  }
  function v95(stateCount) {
    var totalModuleSize = 0;
    var i$$48 = 0;
    var v882 = i$$48 < 5;
    for (;v882;) {
      var count$$5 = stateCount[i$$48];
      var v881 = count$$5 == 0;
      if (v881) {
        return false;
      }
      totalModuleSize = totalModuleSize + count$$5;
      i$$48++;
      v882 = i$$48 < 5;
    }
    var v883 = totalModuleSize < 7;
    if (v883) {
      return false;
    }
    var v1703 = totalModuleSize << INTEGER_MATH_SHIFT;
    var v884 = v1703 / 7;
    var moduleSize$$3 = JAM.call(Math.floor, Math, [v884], JAM.policy.p21);
    var v885 = moduleSize$$3 / 2;
    var maxVariance = JAM.call(Math.floor, Math, [v885], JAM.policy.p21);
    var v2790 = stateCount[0];
    var v2778 = v2790 << INTEGER_MATH_SHIFT;
    var v2745 = moduleSize$$3 - v2778;
    var v2689 = JAM.call(Math.abs, Math, [v2745], JAM.policy.p21);
    var v2595 = v2689 < maxVariance;
    if (v2595) {
      var v2791 = stateCount[1];
      var v2779 = v2791 << INTEGER_MATH_SHIFT;
      var v2746 = moduleSize$$3 - v2779;
      var v2690 = JAM.call(Math.abs, Math, [v2746], JAM.policy.p21);
      v2595 = v2690 < maxVariance;
    }
    var v2391 = v2595;
    if (v2391) {
      var v2747 = 3 * moduleSize$$3;
      var v2780 = stateCount[2];
      var v2748 = v2780 << INTEGER_MATH_SHIFT;
      var v2691 = v2747 - v2748;
      var v2596 = JAM.call(Math.abs, Math, [v2691], JAM.policy.p21);
      var v2597 = 3 * maxVariance;
      v2391 = v2596 < v2597;
    }
    var v1704 = v2391;
    if (v1704) {
      var v2749 = stateCount[3];
      var v2692 = v2749 << INTEGER_MATH_SHIFT;
      var v2598 = moduleSize$$3 - v2692;
      var v2392 = JAM.call(Math.abs, Math, [v2598], JAM.policy.p21);
      v1704 = v2392 < maxVariance;
    }
    var v886 = v1704;
    if (v886) {
      var v2693 = stateCount[4];
      var v2599 = v2693 << INTEGER_MATH_SHIFT;
      var v2393 = moduleSize$$3 - v2599;
      var v1705 = JAM.call(Math.abs, Math, [v2393], JAM.policy.p21);
      v886 = v1705 < maxVariance;
    }
    return v886;
  }
  function v94() {
    var v887 = this.crossCheckStateCount;
    v887[0] = 0;
    var v888 = this.crossCheckStateCount;
    v888[1] = 0;
    var v889 = this.crossCheckStateCount;
    v889[2] = 0;
    var v890 = this.crossCheckStateCount;
    v890[3] = 0;
    var v891 = this.crossCheckStateCount;
    v891[4] = 0;
    return this.crossCheckStateCount;
  }
  this.image = null;
  this.possibleCenters = [];
  this.hasSkipped = false;
  var v2824 = new Array(0, 0, 0, 0, 0);
  this.crossCheckStateCount = v2824;
  this.resultPointCallback = null;
  JAM.call(this.__defineGetter__, this, ["CrossCheckStateCount", v94], JAM.policy.p19);
  this.foundPatternCross = v95;
  this.centerFromEnd = v96;
  this.crossCheckVertical = v97;
  this.crossCheckHorizontal = v98;
  this.handlePossibleCenter = v99;
  this.selectBestPatterns = v101;
  this.findRowSkip = v102;
  this.haveMultiplyConfirmedCenters = v103;
  this.findFinderPattern = v104;
  return;
}
function AlignmentPattern(posX$$1, posY$$1, estimatedModuleSize$$2) {
  function v110(moduleSize$$4, i$$55, j$$29) {
    var v2694 = this.y;
    var v2600 = i$$55 - v2694;
    var v2394 = JAM.call(Math.abs, Math, [v2600], JAM.policy.p21);
    var v1706 = v2394 <= moduleSize$$4;
    if (v1706) {
      var v2695 = this.x;
      var v2601 = j$$29 - v2695;
      var v2395 = JAM.call(Math.abs, Math, [v2601], JAM.policy.p21);
      v1706 = v2395 <= moduleSize$$4;
    }
    var v894 = v1706;
    if (v894) {
      var v1707 = this.estimatedModuleSize;
      var v892 = moduleSize$$4 - v1707;
      var moduleSizeDiff$$1 = JAM.call(Math.abs, Math, [v892], JAM.policy.p21);
      var v893 = moduleSizeDiff$$1 <= 1;
      var v1709 = !v893;
      if (v1709) {
        var v2396 = this.estimatedModuleSize;
        var v1708 = moduleSizeDiff$$1 / v2396;
        v893 = v1708 <= 1;
      }
      return v893;
    }
    return false;
  }
  function v109() {
    this.count++;
    return;
  }
  function v108() {
    var v895 = this.y;
    return JAM.call(Math.floor, Math, [v895], JAM.policy.p21);
  }
  function v107() {
    var v896 = this.x;
    return JAM.call(Math.floor, Math, [v896], JAM.policy.p21);
  }
  function v106() {
    return this.count;
  }
  function v105() {
    return this.estimatedModuleSize;
  }
  this.x = posX$$1;
  this.y = posY$$1;
  this.count = 1;
  this.estimatedModuleSize = estimatedModuleSize$$2;
  JAM.call(this.__defineGetter__, this, ["EstimatedModuleSize", v105], JAM.policy.p19);
  JAM.call(this.__defineGetter__, this, ["Count", v106], JAM.policy.p19);
  JAM.call(this.__defineGetter__, this, ["X", v107], JAM.policy.p19);
  JAM.call(this.__defineGetter__, this, ["Y", v108], JAM.policy.p19);
  this.incrementCount = v109;
  this.aboutEquals = v110;
  return;
}
function AlignmentPatternFinder(image$$13, startX, startY, width$$12, height$$11, moduleSize$$5, resultPointCallback) {
  function v115() {
    var startX$$1 = this.startX;
    var height$$12 = this.height;
    var maxJ$$2 = startX$$1 + width$$12;
    var v897 = height$$12 >> 1;
    var middleI = startY + v897;
    var stateCount$$10 = new Array(0, 0, 0);
    var iGen = 0;
    var v909 = iGen < height$$12;
    for (;v909;) {
      var v1710;
      var v2602 = iGen & 1;
      var v2399 = v2602 == 0;
      if (v2399) {
        var v2397 = iGen + 1;
        v1710 = v2397 >> 1;
      } else {
        var v2603 = iGen + 1;
        var v2398 = v2603 >> 1;
        v1710 = -v2398;
      }
      var v898 = v1710;
      var i$$59 = middleI + v898;
      stateCount$$10[0] = 0;
      stateCount$$10[1] = 0;
      stateCount$$10[2] = 0;
      var j$$31 = startX$$1;
      var v1711 = j$$31 < maxJ$$2;
      if (v1711) {
        var v2750 = qrcode.width;
        var v2696 = v2750 * i$$59;
        var v2604 = j$$31 + v2696;
        var v2400 = image$$13[v2604];
        v1711 = !v2400;
      }
      var v899 = v1711;
      for (;v899;) {
        j$$31++;
        var v1712 = j$$31 < maxJ$$2;
        if (v1712) {
          var v2751 = qrcode.width;
          var v2697 = v2751 * i$$59;
          var v2605 = j$$31 + v2697;
          var v2401 = image$$13[v2605];
          v1712 = !v2401;
        }
        v899 = v1712;
      }
      var currentState$$1 = 0;
      var v906 = j$$31 < maxJ$$2;
      for (;v906;) {
        var v2606 = qrcode.width;
        var v2402 = i$$59 * v2606;
        var v1713 = j$$31 + v2402;
        var v905 = image$$13[v1713];
        if (v905) {
          var v903 = currentState$$1 == 1;
          if (v903) {
            stateCount$$10[currentState$$1]++;
          } else {
            var v902 = currentState$$1 == 2;
            if (v902) {
              var v901 = JAM.call(this.foundPatternCross, this, [stateCount$$10], JAM.policy.p21);
              if (v901) {
                var confirmed$$1 = JAM.call(this.handlePossibleCenter, this, [stateCount$$10, i$$59, j$$31], JAM.policy.p33);
                var v900 = confirmed$$1 != null;
                if (v900) {
                  return confirmed$$1;
                }
              }
              stateCount$$10[0] = stateCount$$10[2];
              stateCount$$10[1] = 1;
              stateCount$$10[2] = 0;
              currentState$$1 = 1;
            } else {
              introspect(JAM.policy.p6) {
                stateCount$$10[++currentState$$1]++;
              }
            }
          }
        } else {
          var v904 = currentState$$1 == 1;
          if (v904) {
            currentState$$1++;
          }
          stateCount$$10[currentState$$1]++;
        }
        j$$31++;
        v906 = j$$31 < maxJ$$2;
      }
      var v908 = JAM.call(this.foundPatternCross, this, [stateCount$$10], JAM.policy.p21);
      if (v908) {
        confirmed$$1 = JAM.call(this.handlePossibleCenter, this, [stateCount$$10, i$$59, maxJ$$2], JAM.policy.p33);
        var v907 = confirmed$$1 != null;
        if (v907) {
          return confirmed$$1;
        }
      }
      iGen++;
      v909 = iGen < height$$12;
    }
    var v2607 = this.possibleCenters;
    var v2403 = v2607.length;
    var v1714 = v2403 == 0;
    var v911 = !v1714;
    if (v911) {
      var v910 = this.possibleCenters;
      return v910[0];
    }
    throw "Couldn't find enough alignment patterns";
  }
  function v114(stateCount$$9, i$$58, j$$30) {
    var v1715 = stateCount$$9[0];
    var v1716 = stateCount$$9[1];
    var v912 = v1715 + v1716;
    var v913 = stateCount$$9[2];
    var stateCountTotal$$4 = v912 + v913;
    var centerJ$$3 = JAM.call(this.centerFromEnd, this, [stateCount$$9, j$$30], JAM.policy.p33);
    var v914 = JAM.call(Math.floor, Math, [centerJ$$3], JAM.policy.p21);
    var v1717 = stateCount$$9[1];
    var v915 = 2 * v1717;
    var centerI$$2 = JAM.call(this.crossCheckVertical, this, [i$$58, v914, v915, stateCountTotal$$4], JAM.policy.p33);
    var v1718 = isNaN(centerI$$2);
    var v924 = !v1718;
    if (v924) {
      var v2404 = stateCount$$9[0];
      var v2405 = stateCount$$9[1];
      var v1719 = v2404 + v2405;
      var v1720 = stateCount$$9[2];
      var v916 = v1719 + v1720;
      var estimatedModuleSize$$3 = v916 / 3;
      var v917 = this.possibleCenters;
      var max$$8 = v917.length;
      var index$$40 = 0;
      var v920 = index$$40 < max$$8;
      for (;v920;) {
        var v918 = this.possibleCenters;
        var center$$2 = v918[index$$40];
        var v919 = JAM.call(center$$2.aboutEquals, center$$2, [estimatedModuleSize$$3, centerI$$2, centerJ$$3], JAM.policy.p33);
        if (v919) {
          return new AlignmentPattern(centerJ$$3, centerI$$2, estimatedModuleSize$$3);
        }
        index$$40++;
        v920 = index$$40 < max$$8;
      }
      var point$$3 = new AlignmentPattern(centerJ$$3, centerI$$2, estimatedModuleSize$$3);
      var v921 = this.possibleCenters;
      JAM.call(v921.push, v921, [point$$3], JAM.policy.p21);
      var v1721 = this.resultPointCallback;
      var v923 = v1721 != null;
      if (v923) {
        var v922 = this.resultPointCallback;
        JAM.call(v922.foundPossibleResultPoint, v922, [point$$3], JAM.policy.p21);
      }
    }
    return null;
  }
  function v113(startI$$1, centerJ$$2, maxCount$$2, originalStateCountTotal$$2) {
    var image$$14 = this.image;
    var maxI$$2 = qrcode.height;
    var stateCount$$8 = this.crossCheckStateCount;
    stateCount$$8[0] = 0;
    stateCount$$8[1] = 0;
    stateCount$$8[2] = 0;
    var i$$57 = startI$$1;
    var v2406 = i$$57 >= 0;
    if (v2406) {
      var v2752 = qrcode.width;
      var v2698 = i$$57 * v2752;
      var v2608 = centerJ$$2 + v2698;
      v2406 = image$$14[v2608];
    }
    var v1722 = v2406;
    if (v1722) {
      var v2407 = stateCount$$8[1];
      v1722 = v2407 <= maxCount$$2;
    }
    var v925 = v1722;
    for (;v925;) {
      stateCount$$8[1]++;
      i$$57--;
      var v2408 = i$$57 >= 0;
      if (v2408) {
        var v2753 = qrcode.width;
        var v2699 = i$$57 * v2753;
        var v2609 = centerJ$$2 + v2699;
        v2408 = image$$14[v2609];
      }
      var v1723 = v2408;
      if (v1723) {
        var v2409 = stateCount$$8[1];
        v1723 = v2409 <= maxCount$$2;
      }
      v925 = v1723;
    }
    var v1724 = i$$57 < 0;
    var v2411 = !v1724;
    if (v2411) {
      var v2410 = stateCount$$8[1];
      v1724 = v2410 > maxCount$$2;
    }
    var v926 = v1724;
    if (v926) {
      return NaN;
    }
    var v2412 = i$$57 >= 0;
    if (v2412) {
      var v2781 = qrcode.width;
      var v2754 = i$$57 * v2781;
      var v2700 = centerJ$$2 + v2754;
      var v2610 = image$$14[v2700];
      v2412 = !v2610;
    }
    var v1725 = v2412;
    if (v1725) {
      var v2413 = stateCount$$8[0];
      v1725 = v2413 <= maxCount$$2;
    }
    var v927 = v1725;
    for (;v927;) {
      stateCount$$8[0]++;
      i$$57--;
      var v2414 = i$$57 >= 0;
      if (v2414) {
        var v2782 = qrcode.width;
        var v2755 = i$$57 * v2782;
        var v2701 = centerJ$$2 + v2755;
        var v2611 = image$$14[v2701];
        v2414 = !v2611;
      }
      var v1726 = v2414;
      if (v1726) {
        var v2415 = stateCount$$8[0];
        v1726 = v2415 <= maxCount$$2;
      }
      v927 = v1726;
    }
    var v1727 = stateCount$$8[0];
    var v928 = v1727 > maxCount$$2;
    if (v928) {
      return NaN;
    }
    i$$57 = startI$$1 + 1;
    var v2416 = i$$57 < maxI$$2;
    if (v2416) {
      var v2756 = qrcode.width;
      var v2702 = i$$57 * v2756;
      var v2612 = centerJ$$2 + v2702;
      v2416 = image$$14[v2612];
    }
    var v1728 = v2416;
    if (v1728) {
      var v2417 = stateCount$$8[1];
      v1728 = v2417 <= maxCount$$2;
    }
    var v929 = v1728;
    for (;v929;) {
      stateCount$$8[1]++;
      i$$57++;
      var v2418 = i$$57 < maxI$$2;
      if (v2418) {
        var v2757 = qrcode.width;
        var v2703 = i$$57 * v2757;
        var v2613 = centerJ$$2 + v2703;
        v2418 = image$$14[v2613];
      }
      var v1729 = v2418;
      if (v1729) {
        var v2419 = stateCount$$8[1];
        v1729 = v2419 <= maxCount$$2;
      }
      v929 = v1729;
    }
    var v1730 = i$$57 == maxI$$2;
    var v2421 = !v1730;
    if (v2421) {
      var v2420 = stateCount$$8[1];
      v1730 = v2420 > maxCount$$2;
    }
    var v930 = v1730;
    if (v930) {
      return NaN;
    }
    var v2422 = i$$57 < maxI$$2;
    if (v2422) {
      var v2783 = qrcode.width;
      var v2758 = i$$57 * v2783;
      var v2704 = centerJ$$2 + v2758;
      var v2614 = image$$14[v2704];
      v2422 = !v2614;
    }
    var v1731 = v2422;
    if (v1731) {
      var v2423 = stateCount$$8[2];
      v1731 = v2423 <= maxCount$$2;
    }
    var v931 = v1731;
    for (;v931;) {
      stateCount$$8[2]++;
      i$$57++;
      var v2424 = i$$57 < maxI$$2;
      if (v2424) {
        var v2784 = qrcode.width;
        var v2759 = i$$57 * v2784;
        var v2705 = centerJ$$2 + v2759;
        var v2615 = image$$14[v2705];
        v2424 = !v2615;
      }
      var v1732 = v2424;
      if (v1732) {
        var v2425 = stateCount$$8[2];
        v1732 = v2425 <= maxCount$$2;
      }
      v931 = v1732;
    }
    var v1733 = stateCount$$8[2];
    var v932 = v1733 > maxCount$$2;
    if (v932) {
      return NaN;
    }
    var v1734 = stateCount$$8[0];
    var v1735 = stateCount$$8[1];
    var v933 = v1734 + v1735;
    var v934 = stateCount$$8[2];
    var stateCountTotal$$3 = v933 + v934;
    var v2616 = stateCountTotal$$3 - originalStateCountTotal$$2;
    var v2426 = JAM.call(Math.abs, Math, [v2616], JAM.policy.p21);
    var v1736 = 5 * v2426;
    var v1737 = 2 * originalStateCountTotal$$2;
    var v935 = v1736 >= v1737;
    if (v935) {
      return NaN;
    }
    var v936;
    var v1738 = JAM.call(this.foundPatternCross, this, [stateCount$$8], JAM.policy.p21);
    if (v1738) {
      v936 = JAM.call(this.centerFromEnd, this, [stateCount$$8, i$$57], JAM.policy.p33);
    } else {
      v936 = NaN;
    }
    return v936;
  }
  function v112(stateCount$$7) {
    var moduleSize$$6 = this.moduleSize;
    var maxVariance$$1 = moduleSize$$6 / 2;
    var i$$56 = 0;
    var v938 = i$$56 < 3;
    for (;v938;) {
      var v2617 = stateCount$$7[i$$56];
      var v2427 = moduleSize$$6 - v2617;
      var v1739 = JAM.call(Math.abs, Math, [v2427], JAM.policy.p21);
      var v937 = v1739 >= maxVariance$$1;
      if (v937) {
        return false;
      }
      i$$56++;
      v938 = i$$56 < 3;
    }
    return true;
  }
  function v111(stateCount$$6, end$$3) {
    var v1740 = stateCount$$6[2];
    var v939 = end$$3 - v1740;
    var v1741 = stateCount$$6[1];
    var v940 = v1741 / 2;
    return v939 - v940;
  }
  this.image = image$$13;
  var v2825 = new Array;
  this.possibleCenters = v2825;
  this.startX = startX;
  this.startY = startY;
  this.width = width$$12;
  this.height = height$$11;
  this.moduleSize = moduleSize$$5;
  var v2826 = new Array(0, 0, 0);
  this.crossCheckStateCount = v2826;
  this.resultPointCallback = resultPointCallback;
  this.centerFromEnd = v111;
  this.foundPatternCross = v112;
  this.crossCheckVertical = v113;
  this.handlePossibleCenter = v114;
  this.find = v115;
  return;
}
function QRCodeDataBlockReader(blocks, version$$8, numErrorCorrectionCode) {
  function v123() {
    var output$$1 = new Array;
    var MODE_NUMBER = 1;
    var MODE_ROMAN_AND_NUMBER = 2;
    var MODE_8BIT_BYTE = 4;
    var MODE_KANJI = 8;
    do {
      var mode$$7 = this.NextMode();
      var v942 = mode$$7 == 0;
      if (v942) {
        var v1742 = output$$1.length;
        var v941 = v1742 > 0;
        if (v941) {
          break;
        } else {
          throw "Empty data block";
        }
      }
      var v2618 = mode$$7 != MODE_NUMBER;
      if (v2618) {
        v2618 = mode$$7 != MODE_ROMAN_AND_NUMBER;
      }
      var v2428 = v2618;
      if (v2428) {
        v2428 = mode$$7 != MODE_8BIT_BYTE;
      }
      var v1743 = v2428;
      if (v1743) {
        v1743 = mode$$7 != MODE_KANJI;
      }
      var v944 = v1743;
      if (v944) {
        var v2706 = "Invalid mode: " + mode$$7;
        var v2619 = v2706 + " in (block:";
        var v2620 = this.blockPointer;
        var v2429 = v2619 + v2620;
        var v1744 = v2429 + " bit:";
        var v1745 = this.bitPointer;
        var v943 = v1744 + v1745;
        throw v943 + ")";
      }
      dataLength = JAM.call(this.getDataLength, this, [mode$$7], JAM.policy.p21);
      var v945 = dataLength < 1;
      if (v945) {
        throw "Invalid data length: " + dataLength;
      }
      switch(mode$$7) {
        case MODE_NUMBER:
          var temp_str = JAM.call(this.getFigureString, this, [dataLength], JAM.policy.p21);
          var v946 = temp_str.length;
          var ta = new Array(v946);
          var j$$32 = 0;
          var v1746 = temp_str.length;
          var v947 = j$$32 < v1746;
          for (;v947;) {
            var v2827 = JAM.call(temp_str.charCodeAt, temp_str, [j$$32], JAM.policy.p21);
            ta[j$$32] = v2827;
            j$$32++;
            var v1747 = temp_str.length;
            v947 = j$$32 < v1747;
          }
          JAM.call(output$$1.push, output$$1, [ta], JAM.policy.p21);
          break;
        case MODE_ROMAN_AND_NUMBER:
          temp_str = JAM.call(this.getRomanAndFigureString, this, [dataLength], JAM.policy.p21);
          var v948 = temp_str.length;
          ta = new Array(v948);
          j$$32 = 0;
          var v1748 = temp_str.length;
          var v949 = j$$32 < v1748;
          for (;v949;) {
            var v2828 = JAM.call(temp_str.charCodeAt, temp_str, [j$$32], JAM.policy.p21);
            ta[j$$32] = v2828;
            j$$32++;
            var v1749 = temp_str.length;
            v949 = j$$32 < v1749;
          }
          JAM.call(output$$1.push, output$$1, [ta], JAM.policy.p21);
          break;
        case MODE_8BIT_BYTE:
          var temp_sbyteArray3 = JAM.call(this.get8bitByteArray, this, [dataLength], JAM.policy.p21);
          JAM.call(output$$1.push, output$$1, [temp_sbyteArray3], JAM.policy.p21);
          break;
        case MODE_KANJI:
          temp_str = JAM.call(this.getKanjiString, this, [dataLength], JAM.policy.p21);
          JAM.call(output$$1.push, output$$1, [temp_str], JAM.policy.p21);
      }
    } while (true);
    return output$$1;
  }
  function v122(dataLength$$4) {
    var length$$14 = dataLength$$4;
    var intData$$3 = 0;
    var unicodeString = "";
    var v952 = length$$14 > 0;
    do {
      intData$$3 = JAM.call(getNextBits, null, [13], JAM.policy.p16);
      var lowerByte = intData$$3 % 192;
      var higherByte = intData$$3 / 192;
      var v950 = higherByte << 8;
      var tempWord = v950 + lowerByte;
      var shiftjisWord = 0;
      var v1750 = tempWord + 33088;
      var v951 = v1750 <= 40956;
      if (v951) {
        shiftjisWord = tempWord + 33088;
      } else {
        shiftjisWord = tempWord + 49472;
      }
      var v1751 = JAM.call(String.fromCharCode, String, [shiftjisWord], JAM.policy.p21);
      unicodeString = unicodeString + v1751;
      length$$14--;
      v952 = length$$14 > 0;
    } while (v952);
    return unicodeString;
  }
  function v121(dataLength$$3) {
    var length$$13 = dataLength$$3;
    var intData$$2 = 0;
    var output = new Array;
    var v953 = length$$13 > 0;
    do {
      intData$$2 = JAM.call(this.getNextBits, this, [8], JAM.policy.p16);
      JAM.call(output.push, output, [intData$$2], JAM.policy.p21);
      length$$13--;
      v953 = length$$13 > 0;
    } while (v953);
    return output;
  }
  function v120(dataLength$$2) {
    var length$$12 = dataLength$$2;
    var intData$$1 = 0;
    var strData$$1 = "";
    var v960 = length$$12 > 0;
    do {
      var v959 = length$$12 >= 3;
      if (v959) {
        intData$$1 = JAM.call(this.getNextBits, this, [10], JAM.policy.p16);
        var v954 = intData$$1 < 100;
        if (v954) {
          strData$$1 = strData$$1 + "0";
        }
        var v955 = intData$$1 < 10;
        if (v955) {
          strData$$1 = strData$$1 + "0";
        }
        length$$12 = length$$12 - 3;
      } else {
        var v958 = length$$12 == 2;
        if (v958) {
          intData$$1 = JAM.call(this.getNextBits, this, [7], JAM.policy.p16);
          var v956 = intData$$1 < 10;
          if (v956) {
            strData$$1 = strData$$1 + "0";
          }
          length$$12 = length$$12 - 2;
        } else {
          var v957 = length$$12 == 1;
          if (v957) {
            intData$$1 = JAM.call(this.getNextBits, this, [4], JAM.policy.p16);
            length$$12 = length$$12 - 1;
          }
        }
      }
      strData$$1 = strData$$1 + intData$$1;
      v960 = length$$12 > 0;
    } while (v960);
    return strData$$1;
  }
  function v119(dataLength$$1) {
    var length$$11 = dataLength$$1;
    var intData = 0;
    var strData = "";
    var tableRomanAndFigure = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":");
    var v964 = length$$11 > 0;
    do {
      var v963 = length$$11 > 1;
      if (v963) {
        intData = JAM.call(this.getNextBits, this, [11], JAM.policy.p16);
        var v961 = intData / 45;
        var firstLetter = JAM.call(Math.floor, Math, [v961], JAM.policy.p21);
        var secondLetter = intData % 45;
        var v1752 = tableRomanAndFigure[firstLetter];
        strData = strData + v1752;
        var v1753 = tableRomanAndFigure[secondLetter];
        strData = strData + v1753;
        length$$11 = length$$11 - 2;
      } else {
        var v962 = length$$11 == 1;
        if (v962) {
          intData = JAM.call(this.getNextBits, this, [6], JAM.policy.p16);
          var v1754 = tableRomanAndFigure[intData];
          strData = strData + v1754;
          length$$11 = length$$11 - 1;
        }
      }
      v964 = length$$11 > 0;
    } while (v964);
    return strData;
  }
  function v118(modeIndicator) {
    var index$$41 = 0;
    for (;true;) {
      var v1755 = modeIndicator >> index$$41;
      var v965 = v1755 == 1;
      if (v965) {
        break;
      }
      index$$41++;
    }
    var v2430 = qrcode.sizeOfDataLengthInfo;
    var v2431 = this.dataLengthMode;
    var v1756 = v2430[v2431];
    var v966 = v1756[index$$41];
    return JAM.call(this.getNextBits, this, [v966], JAM.policy.p21);
  }
  function v117() {
    var v1757 = this.blockPointer;
    var v2707 = this.blocks;
    var v2621 = v2707.length;
    var v2622 = this.numErrorCorrectionCode;
    var v2432 = v2621 - v2622;
    var v1758 = v2432 - 2;
    var v967 = v1757 > v1758;
    if (v967) {
      return 0;
    } else {
      return JAM.call(this.getNextBits, this, [4], JAM.policy.p16);
    }
    return;
  }
  function v116(numBits) {
    var bits$$15 = 0;
    var v2433 = this.bitPointer;
    var v1759 = v2433 + 1;
    var v993 = numBits < v1759;
    if (v993) {
      var mask$$5 = 0;
      var i$$60 = 0;
      var v968 = i$$60 < numBits;
      for (;v968;) {
        var v1760 = 1 << i$$60;
        mask$$5 = mask$$5 + v1760;
        i$$60++;
        v968 = i$$60 < numBits;
      }
      var v2623 = this.bitPointer;
      var v2434 = v2623 - numBits;
      var v1761 = v2434 + 1;
      mask$$5 = mask$$5 << v1761;
      var v2435 = this.blocks;
      var v2436 = this.blockPointer;
      var v1762 = v2435[v2436];
      var v969 = v1762 & mask$$5;
      var v2437 = this.bitPointer;
      var v1763 = v2437 - numBits;
      var v970 = v1763 + 1;
      bits$$15 = v969 >> v970;
      var v1764 = this.bitPointer;
      this.bitPointer = v1764 - numBits;
      return bits$$15;
    } else {
      var v2624 = this.bitPointer;
      var v2438 = v2624 + 1;
      var v1765 = v2438 + 8;
      var v992 = numBits < v1765;
      if (v992) {
        var mask1 = 0;
        i$$60 = 0;
        var v2439 = this.bitPointer;
        var v1766 = v2439 + 1;
        var v971 = i$$60 < v1766;
        for (;v971;) {
          var v1767 = 1 << i$$60;
          mask1 = mask1 + v1767;
          i$$60++;
          var v2440 = this.bitPointer;
          var v1768 = v2440 + 1;
          v971 = i$$60 < v1768;
        }
        var v2441 = this.blocks;
        var v2442 = this.blockPointer;
        var v1769 = v2441[v2442];
        var v972 = v1769 & mask1;
        var v2443 = this.bitPointer;
        var v1770 = v2443 + 1;
        var v973 = numBits - v1770;
        bits$$15 = v972 << v973;
        this.blockPointer++;
        var v2625 = this.blocks;
        var v2626 = this.blockPointer;
        var v2444 = v2625[v2626];
        var v2760 = this.bitPointer;
        var v2708 = v2760 + 1;
        var v2627 = numBits - v2708;
        var v2445 = 8 - v2627;
        var v1771 = v2444 >> v2445;
        bits$$15 = bits$$15 + v1771;
        var v974 = this.bitPointer;
        var v975 = numBits % 8;
        this.bitPointer = v974 - v975;
        var v1772 = this.bitPointer;
        var v977 = v1772 < 0;
        if (v977) {
          var v976 = this.bitPointer;
          this.bitPointer = 8 + v976;
        }
        return bits$$15;
      } else {
        var v2628 = this.bitPointer;
        var v2446 = v2628 + 1;
        var v1773 = v2446 + 16;
        var v991 = numBits < v1773;
        if (v991) {
          mask1 = 0;
          var mask3 = 0;
          i$$60 = 0;
          var v2447 = this.bitPointer;
          var v1774 = v2447 + 1;
          var v978 = i$$60 < v1774;
          for (;v978;) {
            var v1775 = 1 << i$$60;
            mask1 = mask1 + v1775;
            i$$60++;
            var v2448 = this.bitPointer;
            var v1776 = v2448 + 1;
            v978 = i$$60 < v1776;
          }
          var v2449 = this.blocks;
          var v2450 = this.blockPointer;
          var v1777 = v2449[v2450];
          var v979 = v1777 & mask1;
          var v2451 = this.bitPointer;
          var v1778 = v2451 + 1;
          var v980 = numBits - v1778;
          var bitsFirstBlock = v979 << v980;
          this.blockPointer++;
          var v1779 = this.blocks;
          var v1780 = this.blockPointer;
          var v981 = v1779[v1780];
          var v2629 = this.bitPointer;
          var v2452 = v2629 + 1;
          var v1781 = v2452 + 8;
          var v982 = numBits - v1781;
          var bitsSecondBlock = v981 << v982;
          this.blockPointer++;
          i$$60 = 0;
          var v2709 = this.bitPointer;
          var v2630 = v2709 + 1;
          var v2453 = v2630 + 8;
          var v1782 = numBits - v2453;
          var v983 = i$$60 < v1782;
          for (;v983;) {
            var v1783 = 1 << i$$60;
            mask3 = mask3 + v1783;
            i$$60++;
            var v2710 = this.bitPointer;
            var v2631 = v2710 + 1;
            var v2454 = v2631 + 8;
            var v1784 = numBits - v2454;
            v983 = i$$60 < v1784;
          }
          var v2761 = this.bitPointer;
          var v2711 = v2761 + 1;
          var v2632 = v2711 + 8;
          var v2455 = numBits - v2632;
          var v1785 = 8 - v2455;
          mask3 = mask3 << v1785;
          var v2456 = this.blocks;
          var v2457 = this.blockPointer;
          var v1786 = v2456[v2457];
          var v984 = v1786 & mask3;
          var v2712 = this.bitPointer;
          var v2633 = v2712 + 1;
          var v2458 = v2633 + 8;
          var v1787 = numBits - v2458;
          var v985 = 8 - v1787;
          var bitsThirdBlock = v984 >> v985;
          var v986 = bitsFirstBlock + bitsSecondBlock;
          bits$$15 = v986 + bitsThirdBlock;
          var v987 = this.bitPointer;
          var v1788 = numBits - 8;
          var v988 = v1788 % 8;
          this.bitPointer = v987 - v988;
          var v1789 = this.bitPointer;
          var v990 = v1789 < 0;
          if (v990) {
            var v989 = this.bitPointer;
            this.bitPointer = 8 + v989;
          }
          return bits$$15;
        } else {
          return 0;
        }
      }
    }
    return;
  }
  this.blockPointer = 0;
  this.bitPointer = 7;
  this.dataLength = 0;
  this.blocks = blocks;
  this.numErrorCorrectionCode = numErrorCorrectionCode;
  var v996 = version$$8 <= 9;
  if (v996) {
    this.dataLengthMode = 0;
  } else {
    var v1790 = version$$8 >= 10;
    if (v1790) {
      v1790 = version$$8 <= 26;
    }
    var v995 = v1790;
    if (v995) {
      this.dataLengthMode = 1;
    } else {
      var v1791 = version$$8 >= 27;
      if (v1791) {
        v1791 = version$$8 <= 40;
      }
      var v994 = v1791;
      if (v994) {
        this.dataLengthMode = 2;
      }
    }
  }
  this.getNextBits = v116;
  this.NextMode = v117;
  this.getDataLength = v118;
  this.getRomanAndFigureString = v119;
  this.getFigureString = v120;
  this.get8bitByteArray = v121;
  this.getKanjiString = v122;
  JAM.call(this.__defineGetter__, this, ["DataByte", v123], JAM.policy.p19);
  return;
}
function dragenter(e$$7) {
  e$$7.stopPropagation();
  e$$7.preventDefault();
  return;
}
function dragover(e$$8) {
  e$$8.stopPropagation();
  e$$8.preventDefault();
  return;
}
function drop(e$$9) {
  e$$9.stopPropagation();
  e$$9.preventDefault();
  var dt = e$$9.dataTransfer;
  var files = dt.files;
  handleFiles(files);
  return;
}
function handleFiles(f) {
  function v125(theFile) {
    function v124(e$$10) {
      var v1792 = e$$10.target;
      var v997 = v1792.result;
      JAM.call(qrcode.decode, qrcode, [v997], JAM.policy.p21);
      return;
    }
    return v124;
  }
  var o$$1 = [];
  var i$$61 = 0;
  var v1793 = f.length;
  var v1000 = i$$61 < v1793;
  for (;v1000;) {
    var reader$$2 = new FileReader;
    var v998 = reader$$2;
    var v1794 = f[i$$61];
    var v2829 = v125(v1794);
    JAM.set(v998, "onload", v2829);
    var v999 = f[i$$61];
    JAM.call(reader$$2.readAsDataURL, reader$$2, [v999], JAM.policy.p21);
    i$$61++;
    var v1795 = f.length;
    v1000 = i$$61 < v1795;
  }
  return;
}
function read(a$$9) {
  alert(a$$9);
  return;
}
function load() {
  qrcode.callback = read;
  var v1001 = JAM.call(document.getElementById, document, ["imgpath"], JAM.policy.p17);
  var img$$2 = v1001.value;
  JAM.call(qrcode.decode, qrcode, [img$$2], JAM.policy.p21);
  return;
}
function passLine(stringPixels) {
  var coll = JAM.call(stringPixels.split, stringPixels, ["-"], JAM.policy.p17);
  var i$$62 = 0;
  var v1013 = i$$62 < 320;
  for (;v1013;) {
    var v1002 = coll[i$$62];
    var intVal = parseInt(v1002);
    var v1003 = intVal >> 16;
    r = v1003 & 255;
    var v1004 = intVal >> 8;
    g = v1004 & 255;
    b = intVal & 255;
    var v1005 = imageData.data;
    var v1006 = c + 0;
    introspect(JAM.policy.p6) {
      v1005[v1006] = r;
    }
    var v1007 = imageData.data;
    var v1008 = c + 1;
    introspect(JAM.policy.p6) {
      v1007[v1008] = g;
    }
    var v1009 = imageData.data;
    var v1010 = c + 2;
    introspect(JAM.policy.p6) {
      v1009[v1010] = b;
    }
    var v1011 = imageData.data;
    var v1012 = c + 3;
    introspect(JAM.policy.p6) {
      v1011[v1012] = 255;
    }
    c = c + 4;
    i$$62++;
    v1013 = i$$62 < 320;
  }
  var v2459 = 320 * 240;
  var v1796 = v2459 * 4;
  var v1014 = c >= v1796;
  if (v1014) {
    c = 0;
    JAM.call(gCtx.putImageData, gCtx, [imageData, 0, 0], JAM.policy.p25);
  }
  return;
}
function captureToCanvas() {
  flash = JAM.call(document.getElementById, document, ["embedflash"], JAM.policy.p17);
  flash.ccCapture();
  qrcode.decode();
  return;
}
GridSampler = {};
GridSampler.checkAndNudgePoints = v126;
GridSampler.sampleGrid3 = v127;
GridSampler.sampleGridx = v128;
var v1015 = Version;
var v2830 = new Array(31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017);
v1015.VERSION_DECODE_INFO = v2830;
var v1016 = Version;
var v2831 = buildVersions();
v1016.VERSIONS = v2831;
Version.getVersionForNumber = v129;
Version.getProvisionalVersionForDimension = v130;
Version.decodeVersionInformation = v131;
PerspectiveTransform.quadrilateralToQuadrilateral = v132;
PerspectiveTransform.squareToQuadrilateral = v133;
PerspectiveTransform.quadrilateralToSquare = v134;
var FORMAT_INFO_MASK_QR = 21522;
var v1017 = new Array(21522, 0);
var v1018 = new Array(20773, 1);
var v1019 = new Array(24188, 2);
var v1020 = new Array(23371, 3);
var v1021 = new Array(17913, 4);
var v1022 = new Array(16590, 5);
var v1023 = new Array(20375, 6);
var v1024 = new Array(19104, 7);
var v1025 = new Array(30660, 8);
var v1026 = new Array(29427, 9);
var v1027 = new Array(32170, 10);
var v1028 = new Array(30877, 11);
var v1029 = new Array(26159, 12);
var v1030 = new Array(25368, 13);
var v1031 = new Array(27713, 14);
var v1032 = new Array(26998, 15);
var v1033 = new Array(5769, 16);
var v1034 = new Array(5054, 17);
var v1035 = new Array(7399, 18);
var v1036 = new Array(6608, 19);
var v1037 = new Array(1890, 20);
var v1038 = new Array(597, 21);
var v1039 = new Array(3340, 22);
var v1040 = new Array(2107, 23);
var v1041 = new Array(13663, 24);
var v1042 = new Array(12392, 25);
var v1043 = new Array(16177, 26);
var v1044 = new Array(14854, 27);
var v1045 = new Array(9396, 28);
var v1046 = new Array(8579, 29);
var v1047 = new Array(11994, 30);
var v1048 = new Array(11245, 31);
var FORMAT_INFO_DECODE_LOOKUP = new Array(v1017, v1018, v1019, v1020, v1021, v1022, v1023, v1024, v1025, v1026, v1027, v1028, v1029, v1030, v1031, v1032, v1033, v1034, v1035, v1036, v1037, v1038, v1039, v1040, v1041, v1042, v1043, v1044, v1045, v1046, v1047, v1048);
var BITS_SET_IN_HALF_BYTE = new Array(0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4);
FormatInformation.numBitsDiffering = v135;
FormatInformation.decodeFormatInformation = v136;
FormatInformation.doDecodeFormatInformation = v137;
ErrorCorrectionLevel.forBits = v138;
var L = new ErrorCorrectionLevel(0, 1, "L");
var M = new ErrorCorrectionLevel(1, 0, "M");
var Q = new ErrorCorrectionLevel(2, 3, "Q");
var H = new ErrorCorrectionLevel(3, 2, "H");
var FOR_BITS = new Array(M, L, H, Q);
DataBlock.getDataBlocks = v139;
DataMask = {};
DataMask.forReference = v140;
var v1049 = DataMask;
var v1797 = new DataMask000;
var v1798 = new DataMask001;
var v1799 = new DataMask010;
var v1800 = new DataMask011;
var v1801 = new DataMask100;
var v1802 = new DataMask101;
var v1803 = new DataMask110;
var v1804 = new DataMask111;
var v2832 = new Array(v1797, v1798, v1799, v1800, v1801, v1802, v1803, v1804);
v1049.DATA_MASKS = v2832;
var v1050 = GF256;
var v2833 = new GF256(285);
v1050.QR_CODE_FIELD = v2833;
var v1051 = GF256;
var v2834 = new GF256(301);
v1051.DATA_MATRIX_FIELD = v2834;
GF256.addOrSubtract = v141;
Decoder = {};
var v1052 = Decoder;
var v1805 = GF256.QR_CODE_FIELD;
var v2835 = new ReedSolomonDecoder(v1805);
v1052.rsDecoder = v2835;
Decoder.correctErrors = v142;
Decoder.decode = v143;
qrcode = {};
qrcode.imagedata = null;
qrcode.width = 0;
qrcode.height = 0;
qrcode.qrCodeSymbol = null;
qrcode.debug = false;
var v1053 = [10, 9, 8, 8];
var v1054 = [12, 11, 16, 10];
var v1055 = [14, 13, 16, 12];
qrcode.sizeOfDataLengthInfo = [v1053, v1054, v1055];
qrcode.callback = null;
qrcode.decode = v145;
qrcode.decode_utf8 = v146;
qrcode.process = v147;
qrcode.getPixel = v148;
qrcode.binarize = v149;
qrcode.getMiddleBrightnessPerArea = v150;
qrcode.grayScaleToBitmap = v151;
qrcode.grayscale = v152;
var v1056 = Array.prototype;
v1056.remove = v153;
var MIN_SKIP = 3;
var MAX_MODULES = 57;
var INTEGER_MATH_SHIFT = 8;
var CENTER_QUORUM = 2;
qrcode.orderBestPatterns = v154;
var gCtx = null;
var gCanvas = null;
var imageData = null;
var ii = 0;
var jj = 0;
var c = 0;
var v1057 = JAM.call(document.getElementById, document, ["decode"], JAM.policy.p17);
JAM.set(v1057, "onclick", load)

JAM.stopProfile('load');
