
JAM.startProfile('load');
function v154(patterns) {
  function distance(pattern1$$1, pattern2$$1) {
    var v155 = pattern1$$1.X;
    var v156 = pattern2$$1.X;
    xDiff = v155 - v156;
    var v157 = pattern1$$1.Y;
    var v158 = pattern2$$1.Y;
    yDiff = v157 - v158;
    var v1057 = xDiff * xDiff;
    var v1058 = yDiff * yDiff;
    var v159 = v1057 + v1058;
    introspect(JAM.policy.p22) {
      return Math.sqrt(v159);
    }
  }
  function crossProductZ(pointA$$1, pointB$$1, pointC$$1) {
    var bX = pointB$$1.x;
    var bY = pointB$$1.y;
    var v1804 = pointC$$1.x;
    var v1059 = v1804 - bX;
    var v1805 = pointA$$1.y;
    var v1060 = v1805 - bY;
    var v160 = v1059 * v1060;
    var v1806 = pointC$$1.y;
    var v1061 = v1806 - bY;
    var v1807 = pointA$$1.x;
    var v1062 = v1807 - bX;
    var v161 = v1061 * v1062;
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
  var v1063 = oneTwoDistance >= zeroOneDistance;
  if (v1063) {
    v1063 = oneTwoDistance >= zeroTwoDistance;
  }
  var v169 = v1063;
  if (v169) {
    pointB = patterns[0];
    pointA = patterns[1];
    pointC = patterns[2];
  } else {
    var v1064 = zeroTwoDistance >= oneTwoDistance;
    if (v1064) {
      v1064 = zeroTwoDistance >= zeroOneDistance;
    }
    var v168 = v1064;
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
  var v1065 = crossProductZ(pointA, pointB, pointC);
  var v170 = v1065 < 0;
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
  var v1808 = to || from;
  var v1066 = v1808 + 1;
  var v1809 = !v1066;
  if (v1809) {
    v1066 = this.length;
  }
  var v171 = v1066;
  introspect(JAM.policy.p22) {
    var rest = this.slice(v171)
  }
  var v172;
  var v1068 = from < 0;
  if (v1068) {
    var v1067 = this.length;
    v172 = v1067 + from;
  } else {
    v172 = from;
  }
  this.length = v172;
  var v173 = this.push;
  introspect(JAM.policy.p33) {
    return v173.apply(this, rest);
  }
}
function v152() {
  var v1069 = qrcode.width;
  var v1070 = qrcode.height;
  var v174 = v1069 * v1070;
  var ret$$1 = new Array(v174);
  var y$$43 = 0;
  var v1071 = qrcode.height;
  var v177 = y$$43 < v1071;
  for (;v177;) {
    var x$$61 = 0;
    var v1072 = qrcode.width;
    var v176 = x$$61 < v1072;
    for (;v176;) {
      introspect(JAM.policy.p33) {
        var gray$$1 = qrcode.getPixel(x$$61, y$$43)
      }
      var v1810 = qrcode.width;
      var v1073 = y$$43 * v1810;
      var v175 = x$$61 + v1073;
      ret$$1[v175] = gray$$1;
      x$$61++;
      var v1074 = qrcode.width;
      v176 = x$$61 < v1074;
    }
    y$$43++;
    var v1075 = qrcode.height;
    v177 = y$$43 < v1075;
  }
  return ret$$1;
}
function v151() {
  var grayScale = qrcode.grayscale();
  introspect(JAM.policy.p22) {
    var middle$$1 = qrcode.getMiddleBrightnessPerArea(grayScale)
  }
  var sqrtNumArea = middle$$1.length;
  var v1076 = qrcode.width;
  var v178 = v1076 / sqrtNumArea;
  introspect(JAM.policy.p22) {
    var areaWidth$$1 = Math.floor(v178)
  }
  var v1077 = qrcode.height;
  var v179 = v1077 / sqrtNumArea;
  introspect(JAM.policy.p22) {
    var areaHeight$$1 = Math.floor(v179)
  }
  var v1078 = qrcode.height;
  var v1079 = qrcode.width;
  var v180 = v1078 * v1079;
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
          var v1811 = areaWidth$$1 * ax$$1;
          var v1080 = v1811 + dx$$6;
          var v2458 = areaHeight$$1 * ay$$1;
          var v1812 = v2458 + dy$$6;
          var v1813 = qrcode.width;
          var v1081 = v1812 * v1813;
          var v181 = v1080 + v1081;
          var v1082;
          var v2760 = areaWidth$$1 * ax$$1;
          var v2711 = v2760 + dx$$6;
          var v2783 = areaHeight$$1 * ay$$1;
          var v2761 = v2783 + dy$$6;
          var v2762 = qrcode.width;
          var v2712 = v2761 * v2762;
          var v2632 = v2711 + v2712;
          var v2459 = grayScale[v2632];
          var v2633 = middle$$1[ax$$1];
          var v2460 = v2633[ay$$1];
          var v1814 = v2459 < v2460;
          if (v1814) {
            v1082 = true;
          } else {
            v1082 = false;
          }
          bitmap[v181] = v1082;
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
  var v1083 = qrcode.width;
  var v186 = v1083 / numSqrtArea;
  introspect(JAM.policy.p22) {
    var areaWidth = Math.floor(v186)
  }
  var v1084 = qrcode.height;
  var v187 = v1084 / numSqrtArea;
  introspect(JAM.policy.p22) {
    var areaHeight = Math.floor(v187)
  }
  var minmax = new Array(numSqrtArea);
  var i$$46 = 0;
  var v190 = i$$46 < numSqrtArea;
  for (;v190;) {
    var v2791 = new Array(numSqrtArea);
    minmax[i$$46] = v2791;
    var i2 = 0;
    var v189 = i2 < numSqrtArea;
    for (;v189;) {
      var v188 = minmax[i$$46];
      var v2792 = new Array(0, 0);
      v188[i2] = v2792;
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
      var v1085 = minmax[ax];
      var v191 = v1085[ay];
      v191[0] = 255;
      var dy$$5 = 0;
      var v198 = dy$$5 < areaHeight;
      for (;v198;) {
        var dx$$5 = 0;
        var v197 = dx$$5 < areaWidth;
        for (;v197;) {
          var v1815 = areaWidth * ax;
          var v1086 = v1815 + dx$$5;
          var v2461 = areaHeight * ay;
          var v1816 = v2461 + dy$$5;
          var v1817 = qrcode.width;
          var v1087 = v1816 * v1817;
          var v192 = v1086 + v1087;
          var target$$26 = image$$9[v192];
          var v2462 = minmax[ax];
          var v1818 = v2462[ay];
          var v1088 = v1818[0];
          var v194 = target$$26 < v1088;
          if (v194) {
            var v1089 = minmax[ax];
            var v193 = v1089[ay];
            v193[0] = target$$26;
          }
          var v2463 = minmax[ax];
          var v1819 = v2463[ay];
          var v1090 = v1819[1];
          var v196 = target$$26 > v1090;
          if (v196) {
            var v1091 = minmax[ax];
            var v195 = v1091[ay];
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
    var v2793 = new Array(numSqrtArea);
    middle[i3] = v2793;
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
      var v2713 = minmax[ax];
      var v2634 = v2713[ay];
      var v2464 = v2634[0];
      var v2714 = minmax[ax];
      var v2635 = v2714[ay];
      var v2465 = v2635[1];
      var v1820 = v2464 + v2465;
      var v1092 = v1820 / 2;
      introspect(JAM.policy.p22) {
        var v2794 = Math.floor(v1092)
      }
      v202[ay] = v2794;
      ax++;
      v203 = ax < numSqrtArea;
    }
    ay++;
    v204 = ay < numSqrtArea;
  }
  return middle;
}
function v149(th) {
  var v1093 = qrcode.width;
  var v1094 = qrcode.height;
  var v205 = v1093 * v1094;
  var ret = new Array(v205);
  var y$$42 = 0;
  var v1095 = qrcode.height;
  var v208 = y$$42 < v1095;
  for (;v208;) {
    var x$$60 = 0;
    var v1096 = qrcode.width;
    var v207 = x$$60 < v1096;
    for (;v207;) {
      introspect(JAM.policy.p33) {
        var gray = qrcode.getPixel(x$$60, y$$42)
      }
      var v1821 = qrcode.width;
      var v1097 = y$$42 * v1821;
      var v206 = x$$60 + v1097;
      var v1098;
      var v1822 = gray <= th;
      if (v1822) {
        v1098 = true;
      } else {
        v1098 = false;
      }
      ret[v206] = v1098;
      x$$60++;
      var v1099 = qrcode.width;
      v207 = x$$60 < v1099;
    }
    y$$42++;
    var v1100 = qrcode.height;
    v208 = y$$42 < v1100;
  }
  return ret;
}
function v148(x$$59, y$$41) {
  var v1101 = qrcode.width;
  var v209 = v1101 < x$$59;
  if (v209) {
    throw "point error";
  }
  var v1102 = qrcode.height;
  var v210 = v1102 < y$$41;
  if (v210) {
    throw "point error";
  }
  var v211 = x$$59 * 4;
  var v1823 = qrcode.width;
  var v1103 = y$$41 * v1823;
  var v212 = v1103 * 4;
  var point$$1 = v211 + v212;
  var v2715 = qrcode.imagedata;
  var v2636 = v2715.data;
  var v2466 = v2636[point$$1];
  var v1824 = v2466 * 33;
  var v2716 = qrcode.imagedata;
  var v2637 = v2716.data;
  var v2638 = point$$1 + 1;
  var v2467 = v2637[v2638];
  var v1825 = v2467 * 34;
  var v1104 = v1824 + v1825;
  var v2639 = qrcode.imagedata;
  var v2468 = v2639.data;
  var v2469 = point$$1 + 2;
  var v1826 = v2468[v2469];
  var v1105 = v1826 * 33;
  var v213 = v1104 + v1105;
  p = v213 / 100;
  return p;
}
function v147(ctx) {
  var v214 = new Date;
  var start$$4 = v214.getTime();
  var image$$8 = qrcode.grayScaleToBitmap();
  var v225 = qrcode.debug;
  if (v225) {
    var y$$40 = 0;
    var v1106 = qrcode.height;
    var v223 = y$$40 < v1106;
    for (;v223;) {
      var x$$58 = 0;
      var v1107 = qrcode.width;
      var v222 = x$$58 < v1107;
      for (;v222;) {
        var v215 = x$$58 * 4;
        var v1827 = qrcode.width;
        var v1108 = y$$40 * v1827;
        var v216 = v1108 * 4;
        var point = v215 + v216;
        var v1109 = qrcode.imagedata;
        var v217 = v1109.data;
        var v1110;
        var v2717 = qrcode.width;
        var v2640 = y$$40 * v2717;
        var v2470 = x$$58 + v2640;
        var v1828 = image$$8[v2470];
        if (v1828) {
          v1110 = 0;
        } else {
          v1110 = 0;
        }
        v217[point] = v1110;
        var v1111 = qrcode.imagedata;
        var v218 = v1111.data;
        var v219 = point + 1;
        var v1112;
        var v2718 = qrcode.width;
        var v2641 = y$$40 * v2718;
        var v2471 = x$$58 + v2641;
        var v1829 = image$$8[v2471];
        if (v1829) {
          v1112 = 0;
        } else {
          v1112 = 0;
        }
        v218[v219] = v1112;
        var v1113 = qrcode.imagedata;
        var v220 = v1113.data;
        var v221 = point + 2;
        var v1114;
        var v2719 = qrcode.width;
        var v2642 = y$$40 * v2719;
        var v2472 = x$$58 + v2642;
        var v1830 = image$$8[v2472];
        if (v1830) {
          v1114 = 255;
        } else {
          v1114 = 0;
        }
        v220[v221] = v1114;
        x$$58++;
        var v1115 = qrcode.width;
        v222 = x$$58 < v1115;
      }
      y$$40++;
      var v1116 = qrcode.height;
      v223 = y$$40 < v1116;
    }
    var v224 = qrcode.imagedata;
    introspect(JAM.policy.p25) {
      ctx.putImageData(v224, 0, 0);
    }
  }
  var detector = new Detector(image$$8);
  var qRCodeMatrix = detector.detect();
  var v227 = qrcode.debug;
  if (v227) {
    var v226 = qrcode.imagedata;
    introspect(JAM.policy.p25) {
      ctx.putImageData(v226, 0, 0);
    }
  }
  var v228 = qRCodeMatrix.bits;
  introspect(JAM.policy.p22) {
    var reader$$1 = Decoder.decode(v228)
  }
  var data$$18 = reader$$1.DataByte;
  var str$$6 = "";
  var i$$45 = 0;
  var v1117 = data$$18.length;
  var v230 = i$$45 < v1117;
  for (;v230;) {
    var j$$24 = 0;
    var v1831 = data$$18[i$$45];
    var v1118 = v1831.length;
    var v229 = j$$24 < v1118;
    for (;v229;) {
      var v2473 = data$$18[i$$45];
      var v1832 = v2473[j$$24];
      introspect(JAM.policy.p22) {
        var v1119 = String.fromCharCode(v1832)
      }
      str$$6 = str$$6 + v1119;
      j$$24++;
      var v1833 = data$$18[i$$45];
      var v1120 = v1833.length;
      v229 = j$$24 < v1120;
    }
    i$$45++;
    var v1121 = data$$18.length;
    v230 = i$$45 < v1121;
  }
  var v231 = new Date;
  var end$$1 = v231.getTime();
  var time = end$$1 - start$$4;
  introspect(JAM.policy.p24) {
    console.log(time);
  }
  introspect(JAM.policy.p22) {
    return qrcode.decode_utf8(str$$6);
  }
}
function v146(s$$4) {
  var v232 = escape(s$$4);
  return decodeURIComponent(v232);
}
function v145(src$$1) {
  function v144() {
    JAM.startProfile('decode');

    introspect(JAM.policy.p16) {
      var canvas_qr$$1 = document.createElement("canvas")
    }
    introspect(JAM.policy.p16) {
      var context$$1 = canvas_qr$$1.getContext("2d")
    }
    introspect(JAM.policy.p16) {
      var canvas_out = document.getElementById("out-canvas")
    }
    var v233 = canvas_out != null;
    if (v233) {
      introspect(JAM.policy.p16) {
        var outctx = canvas_out.getContext("2d")
      }
      introspect(JAM.policy.p20) {
        outctx.clearRect(0, 0, 320, 240);
      }
      introspect(JAM.policy.p25) {
        outctx.drawImage(image$$7, 0, 0, 320, 240);
      }
    }
    canvas_qr$$1.width = image$$7.width;
    canvas_qr$$1.height = image$$7.height;
    introspect(JAM.policy.p25) {
      context$$1.drawImage(image$$7, 0, 0);
    }
    qrcode.width = image$$7.width;
    qrcode.height = image$$7.height;
    try {
      var v234 = qrcode;
      var v1122 = image$$7.width;
      var v1123 = image$$7.height;
      introspect(JAM.policy.p20) {
        var v2795 = context$$1.getImageData(0, 0, v1122, v1123)
      }
      v234.imagedata = v2795;
    } catch (e$$5) {
      qrcode.result = "Cross domain image reading not supported in your browser! Save it to your computer then drag and drop the file!";
      var v1124 = qrcode.callback;
      var v236 = v1124 != null;
      if (v236) {
        var v235 = qrcode.result;
        introspect(JAM.policy.p22) {
          qrcode.callback(v235);
        }
      }
      return;
    }
    try {
      var v237 = qrcode;
      introspect(JAM.policy.p22) {
        var v2796 = qrcode.process(context$$1)
      }
      v237.result = v2796;
    } catch (e$$6) {
      introspect(JAM.policy.p22) {
        console.log(e$$6);
      }
      qrcode.result = "error decoding QR Code";
    }
    var v1125 = qrcode.callback;
    var v239 = v1125 != null;
    
    JAM.stopProfile('decode');
if (v239) {
      var v238 = qrcode.result;
      introspect(JAM.policy.p22) {
        qrcode.callback(v238);
      }
    }
    return;
  }
  var v1126 = arguments.length;
  var v244 = v1126 == 0;
  if (v244) {
    introspect(JAM.policy.p16) {
      var canvas_qr = document.getElementById("qr-canvas")
    }
    introspect(JAM.policy.p16) {
      var context = canvas_qr.getContext("2d")
    }
    qrcode.width = canvas_qr.width;
    qrcode.height = canvas_qr.height;
    var v240 = qrcode;
    var v1127 = qrcode.width;
    var v1128 = qrcode.height;
    introspect(JAM.policy.p20) {
      var v2797 = context.getImageData(0, 0, v1127, v1128)
    }
    v240.imagedata = v2797;
    var v241 = qrcode;
    introspect(JAM.policy.p22) {
      var v2798 = qrcode.process(context)
    }
    v241.result = v2798;
    var v1129 = qrcode.callback;
    var v243 = v1129 != null;
    if (v243) {
      var v242 = qrcode.result;
      introspect(JAM.policy.p22) {
        qrcode.callback(v242);
      }
    }
    return qrcode.result;
  } else {
    var image$$7 = new Image;
    image$$7.onload = v144;
    introspect(JAM.policy.p1) {
      image$$7.src = src$$1;
    }
  }
  return;
}
function v143(bits$$13) {
  var parser = new BitMatrixParser(bits$$13);
  var version$$7 = parser.readVersion();
  var v245 = parser.readFormatInformation();
  var ecLevel$$2 = v245.ErrorCorrectionLevel;
  var codewords$$1 = parser.readCodewords();
  introspect(JAM.policy.p33) {
    var dataBlocks = DataBlock.getDataBlocks(codewords$$1, version$$7, ecLevel$$2)
  }
  var totalBytes = 0;
  var i$$44 = 0;
  var v1130 = dataBlocks.Length;
  var v246 = i$$44 < v1130;
  for (;v246;) {
    var v1834 = dataBlocks[i$$44];
    var v1131 = v1834.NumDataCodewords;
    totalBytes = totalBytes + v1131;
    i$$44++;
    var v1132 = dataBlocks.Length;
    v246 = i$$44 < v1132;
  }
  var resultBytes = new Array(totalBytes);
  var resultOffset$$1 = 0;
  var j$$23 = 0;
  var v1133 = dataBlocks.length;
  var v249 = j$$23 < v1133;
  for (;v249;) {
    var dataBlock = dataBlocks[j$$23];
    var codewordBytes$$1 = dataBlock.Codewords;
    var numDataCodewords$$3 = dataBlock.NumDataCodewords;
    introspect(JAM.policy.p33) {
      Decoder.correctErrors(codewordBytes$$1, numDataCodewords$$3);
    }
    i$$44 = 0;
    var v248 = i$$44 < numDataCodewords$$3;
    for (;v248;) {
      var v247 = resultOffset$$1;
      resultOffset$$1 = resultOffset$$1 + 1;
      resultBytes[v247] = codewordBytes$$1[i$$44];
      i$$44++;
      v248 = i$$44 < numDataCodewords$$3;
    }
    j$$23++;
    var v1134 = dataBlocks.length;
    v249 = j$$23 < v1134;
  }
  var v250 = version$$7.VersionNumber;
  var v251 = ecLevel$$2.Bits;
  var reader = new QRCodeDataBlockReader(resultBytes, v250, v251);
  return reader;
}
function v142(codewordBytes, numDataCodewords$$2) {
  var numCodewords$$1 = codewordBytes.length;
  var codewordsInts = new Array(numCodewords$$1);
  var i$$43 = 0;
  var v253 = i$$43 < numCodewords$$1;
  for (;v253;) {
    var v252 = codewordBytes[i$$43];
    codewordsInts[i$$43] = v252 & 255;
    i$$43++;
    v253 = i$$43 < numCodewords$$1;
  }
  var v254 = codewordBytes.length;
  var numECCodewords = v254 - numDataCodewords$$2;
  try {
    var v255 = Decoder.rsDecoder;
    introspect(JAM.policy.p33) {
      v255.decode(codewordsInts, numECCodewords);
    }
  } catch (rse) {
    throw rse;
  }
  i$$43 = 0;
  var v256 = i$$43 < numDataCodewords$$2;
  for (;v256;) {
    codewordBytes[i$$43] = codewordsInts[i$$43];
    i$$43++;
    v256 = i$$43 < numDataCodewords$$2;
  }
  return;
}
function v141(a$$7, b$$4) {
  return a$$7 ^ b$$4;
}
function v140(reference) {
  var v1135 = reference < 0;
  var v1835 = !v1135;
  if (v1835) {
    v1135 = reference > 7;
  }
  var v257 = v1135;
  if (v257) {
    throw "System.ArgumentException";
  }
  var v258 = DataMask.DATA_MASKS;
  return v258[reference];
}
function v139(rawCodewords, version$$5, ecLevel$$1) {
  var v1136 = rawCodewords.length;
  var v1137 = version$$5.TotalCodewords;
  var v259 = v1136 != v1137;
  if (v259) {
    throw "ArgumentException";
  }
  introspect(JAM.policy.p22) {
    var ecBlocks = version$$5.getECBlocksForLevel(ecLevel$$1)
  }
  var totalBlocks = 0;
  var ecBlockArray = ecBlocks.ecBlocks;
  var i$$11 = 0;
  var v1138 = ecBlockArray.length;
  var v260 = i$$11 < v1138;
  for (;v260;) {
    var v1836 = ecBlockArray[i$$11];
    var v1139 = v1836.Count;
    totalBlocks = totalBlocks + v1139;
    i$$11++;
    var v1140 = ecBlockArray.length;
    v260 = i$$11 < v1140;
  }
  var result$$1 = new Array(totalBlocks);
  var numResultBlocks = 0;
  var j = 0;
  var v1141 = ecBlockArray.length;
  var v264 = j < v1141;
  for (;v264;) {
    var ecBlock$$1 = ecBlockArray[j];
    i$$11 = 0;
    var v1142 = ecBlock$$1.Count;
    var v263 = i$$11 < v1142;
    for (;v263;) {
      var numDataCodewords$$1 = ecBlock$$1.DataCodewords;
      var v261 = ecBlocks.ECCodewordsPerBlock;
      var numBlockCodewords = v261 + numDataCodewords$$1;
      var v262 = numResultBlocks;
      numResultBlocks = numResultBlocks + 1;
      var v1143 = new Array(numBlockCodewords);
      var v2799 = new DataBlock(numDataCodewords$$1, v1143);
      result$$1[v262] = v2799;
      i$$11++;
      var v1144 = ecBlock$$1.Count;
      v263 = i$$11 < v1144;
    }
    j++;
    var v1145 = ecBlockArray.length;
    v264 = j < v1145;
  }
  var v1146 = result$$1[0];
  var v265 = v1146.codewords;
  var shorterBlocksTotalCodewords = v265.length;
  var v266 = result$$1.length;
  var longerBlocksStartAt = v266 - 1;
  var v269 = longerBlocksStartAt >= 0;
  for (;v269;) {
    var v1147 = result$$1[longerBlocksStartAt];
    var v267 = v1147.codewords;
    var numCodewords = v267.length;
    var v268 = numCodewords == shorterBlocksTotalCodewords;
    if (v268) {
      break;
    }
    longerBlocksStartAt--;
    v269 = longerBlocksStartAt >= 0;
  }
  longerBlocksStartAt++;
  var v270 = ecBlocks.ECCodewordsPerBlock;
  var shorterBlocksNumDataCodewords = shorterBlocksTotalCodewords - v270;
  var rawCodewordsOffset = 0;
  i$$11 = 0;
  var v273 = i$$11 < shorterBlocksNumDataCodewords;
  for (;v273;) {
    j = 0;
    var v272 = j < numResultBlocks;
    for (;v272;) {
      var v1148 = result$$1[j];
      var v271 = v1148.codewords;
      var v1149 = rawCodewordsOffset;
      rawCodewordsOffset = rawCodewordsOffset + 1;
      v271[i$$11] = rawCodewords[v1149];
      j++;
      v272 = j < numResultBlocks;
    }
    i$$11++;
    v273 = i$$11 < shorterBlocksNumDataCodewords;
  }
  j = longerBlocksStartAt;
  var v275 = j < numResultBlocks;
  for (;v275;) {
    var v1150 = result$$1[j];
    var v274 = v1150.codewords;
    var v1151 = rawCodewordsOffset;
    rawCodewordsOffset = rawCodewordsOffset + 1;
    v274[shorterBlocksNumDataCodewords] = rawCodewords[v1151];
    j++;
    v275 = j < numResultBlocks;
  }
  var v1152 = result$$1[0];
  var v276 = v1152.codewords;
  var max$$4 = v276.length;
  i$$11 = shorterBlocksNumDataCodewords;
  var v280 = i$$11 < max$$4;
  for (;v280;) {
    j = 0;
    var v279 = j < numResultBlocks;
    for (;v279;) {
      var v277;
      var v1153 = j < longerBlocksStartAt;
      if (v1153) {
        v277 = i$$11;
      } else {
        v277 = i$$11 + 1;
      }
      var iOffset = v277;
      var v1154 = result$$1[j];
      var v278 = v1154.codewords;
      var v1155 = rawCodewordsOffset;
      rawCodewordsOffset = rawCodewordsOffset + 1;
      v278[iOffset] = rawCodewords[v1155];
      j++;
      v279 = j < numResultBlocks;
    }
    i$$11++;
    v280 = i$$11 < max$$4;
  }
  return result$$1;
}
function v138(bits$$4) {
  var v1156 = bits$$4 < 0;
  var v1838 = !v1156;
  if (v1838) {
    var v1837 = FOR_BITS.Length;
    v1156 = bits$$4 >= v1837;
  }
  var v281 = v1156;
  if (v281) {
    throw "ArgumentException";
  }
  return FOR_BITS[bits$$4];
}
function v137(maskedFormatInfo$$1) {
  var bestDifference$$1 = 4294967295;
  var bestFormatInfo = 0;
  var i$$8 = 0;
  var v1157 = FORMAT_INFO_DECODE_LOOKUP.length;
  var v285 = i$$8 < v1157;
  for (;v285;) {
    var decodeInfo = FORMAT_INFO_DECODE_LOOKUP[i$$8];
    var targetInfo = decodeInfo[0];
    var v283 = targetInfo == maskedFormatInfo$$1;
    if (v283) {
      var v282 = decodeInfo[1];
      return new FormatInformation(v282);
    }
    introspect(JAM.policy.p33) {
      var bitsDifference$$1 = this.numBitsDiffering(maskedFormatInfo$$1, targetInfo)
    }
    var v284 = bitsDifference$$1 < bestDifference$$1;
    if (v284) {
      bestFormatInfo = decodeInfo[1];
      bestDifference$$1 = bitsDifference$$1;
    }
    i$$8++;
    var v1158 = FORMAT_INFO_DECODE_LOOKUP.length;
    v285 = i$$8 < v1158;
  }
  var v286 = bestDifference$$1 <= 3;
  if (v286) {
    return new FormatInformation(bestFormatInfo);
  }
  return null;
}
function v136(maskedFormatInfo) {
  introspect(JAM.policy.p22) {
    var formatInfo$$1 = FormatInformation.doDecodeFormatInformation(maskedFormatInfo)
  }
  var v287 = formatInfo$$1 != null;
  if (v287) {
    return formatInfo$$1;
  }
  var v288 = maskedFormatInfo ^ FORMAT_INFO_MASK_QR;
  introspect(JAM.policy.p22) {
    return FormatInformation.doDecodeFormatInformation(v288);
  }
}
function v135(a, b$$1) {
  a = a ^ b$$1;
  var v2784 = a & 15;
  var v2763 = BITS_SET_IN_HALF_BYTE[v2784];
  var v2785 = BITS_SET_IN_HALF_BYTE;
  var v2790 = URShift(a, 4);
  var v2786 = v2790 & 15;
  var v2764 = v2785[v2786];
  var v2720 = v2763 + v2764;
  var v2765 = BITS_SET_IN_HALF_BYTE;
  var v2787 = URShift(a, 8);
  var v2766 = v2787 & 15;
  var v2721 = v2765[v2766];
  var v2643 = v2720 + v2721;
  var v2722 = BITS_SET_IN_HALF_BYTE;
  var v2767 = URShift(a, 12);
  var v2723 = v2767 & 15;
  var v2644 = v2722[v2723];
  var v2474 = v2643 + v2644;
  var v2645 = BITS_SET_IN_HALF_BYTE;
  var v2724 = URShift(a, 16);
  var v2646 = v2724 & 15;
  var v2475 = v2645[v2646];
  var v1839 = v2474 + v2475;
  var v2476 = BITS_SET_IN_HALF_BYTE;
  var v2647 = URShift(a, 20);
  var v2477 = v2647 & 15;
  var v1840 = v2476[v2477];
  var v1159 = v1839 + v1840;
  var v1841 = BITS_SET_IN_HALF_BYTE;
  var v2478 = URShift(a, 24);
  var v1842 = v2478 & 15;
  var v1160 = v1841[v1842];
  var v289 = v1159 + v1160;
  var v1161 = BITS_SET_IN_HALF_BYTE;
  var v1843 = URShift(a, 28);
  var v1162 = v1843 & 15;
  var v290 = v1161[v1162];
  return v289 + v290;
}
function v134(x0$$4, y0$$4, x1$$5, y1$$5, x2$$3, y2$$3, x3$$2, y3$$2) {
  introspect(JAM.policy.p33) {
    var v291 = this.squareToQuadrilateral(x0$$4, y0$$4, x1$$5, y1$$5, x2$$3, y2$$3, x3$$2, y3$$2)
  }
  return v291.buildAdjoint();
}
function v133(x0$$3, y0$$3, x1$$4, y1$$4, x2$$2, y2$$2, x3$$1, y3$$1) {
  dy2 = y3$$1 - y2$$2;
  var v1163 = y0$$3 - y1$$4;
  var v292 = v1163 + y2$$2;
  dy3 = v292 - y3$$1;
  var v1164 = dy2 == 0;
  if (v1164) {
    v1164 = dy3 == 0;
  }
  var v306 = v1164;
  if (v306) {
    var v293 = x1$$4 - x0$$3;
    var v294 = x2$$2 - x1$$4;
    var v295 = y1$$4 - y0$$3;
    var v296 = y2$$2 - y1$$4;
    return new PerspectiveTransform(v293, v294, x0$$3, v295, v296, y0$$3, 0, 0, 1);
  } else {
    dx1 = x1$$4 - x2$$2;
    dx2 = x3$$1 - x2$$2;
    var v1165 = x0$$3 - x1$$4;
    var v297 = v1165 + x2$$2;
    dx3 = v297 - x3$$1;
    dy1 = y1$$4 - y2$$2;
    var v298 = dx1 * dy2;
    var v299 = dx2 * dy1;
    denominator = v298 - v299;
    var v1166 = dx3 * dy2;
    var v1167 = dx2 * dy3;
    var v300 = v1166 - v1167;
    a13 = v300 / denominator;
    var v1168 = dx1 * dy3;
    var v1169 = dx3 * dy1;
    var v301 = v1168 - v1169;
    a23 = v301 / denominator;
    var v1170 = x1$$4 - x0$$3;
    var v1171 = a13 * x1$$4;
    var v302 = v1170 + v1171;
    var v1172 = x3$$1 - x0$$3;
    var v1173 = a23 * x3$$1;
    var v303 = v1172 + v1173;
    var v1174 = y1$$4 - y0$$3;
    var v1175 = a13 * y1$$4;
    var v304 = v1174 + v1175;
    var v1176 = y3$$1 - y0$$3;
    var v1177 = a23 * y3$$1;
    var v305 = v1176 + v1177;
    return new PerspectiveTransform(v302, v303, x0$$3, v304, v305, y0$$3, a13, a23, 1);
  }
  return;
}
function v132(x0$$2, y0$$2, x1$$3, y1$$3, x2$$1, y2$$1, x3, y3, x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p) {
  introspect(JAM.policy.p33) {
    var qToS = this.quadrilateralToSquare(x0$$2, y0$$2, x1$$3, y1$$3, x2$$1, y2$$1, x3, y3)
  }
  introspect(JAM.policy.p33) {
    var sToQ = this.squareToQuadrilateral(x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p)
  }
  introspect(JAM.policy.p22) {
    return sToQ.times(qToS);
  }
}
function v131(versionBits) {
  var bestDifference = 4294967295;
  var bestVersion = 0;
  var i$$4 = 0;
  var v1844 = Version.VERSION_DECODE_INFO;
  var v1178 = v1844.length;
  var v311 = i$$4 < v1178;
  for (;v311;) {
    var v307 = Version.VERSION_DECODE_INFO;
    var targetVersion = v307[i$$4];
    var v309 = targetVersion == versionBits;
    if (v309) {
      var v308 = i$$4 + 7;
      introspect(JAM.policy.p22) {
        return this.getVersionForNumber(v308);
      }
    }
    introspect(JAM.policy.p33) {
      var bitsDifference = FormatInformation.numBitsDiffering(versionBits, targetVersion)
    }
    var v310 = bitsDifference < bestDifference;
    if (v310) {
      bestVersion = i$$4 + 7;
      bestDifference = bitsDifference;
    }
    i$$4++;
    var v1845 = Version.VERSION_DECODE_INFO;
    var v1179 = v1845.length;
    v311 = i$$4 < v1179;
  }
  var v312 = bestDifference <= 3;
  if (v312) {
    introspect(JAM.policy.p22) {
      return this.getVersionForNumber(bestVersion);
    }
  }
  return null;
}
function v130(dimension$$3) {
  var v1180 = dimension$$3 % 4;
  var v313 = v1180 != 1;
  if (v313) {
    throw "Error getProvisionalVersionForDimension";
  }
  try {
    var v1181 = dimension$$3 - 17;
    var v314 = v1181 >> 2;
    introspect(JAM.policy.p22) {
      return Version.getVersionForNumber(v314);
    }
  } catch (iae) {
    throw "Error getVersionForNumber";
  }
  return;
}
function v129(versionNumber$$1) {
  var v1182 = versionNumber$$1 < 1;
  var v1846 = !v1182;
  if (v1846) {
    v1182 = versionNumber$$1 > 40;
  }
  var v315 = v1182;
  if (v315) {
    throw "ArgumentException";
  }
  var v316 = Version.VERSIONS;
  var v317 = versionNumber$$1 - 1;
  return v316[v317];
}
function v128(image$$4, dimension$$1, p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY) {
  introspect(JAM.policy.p33) {
    var transform$$1 = PerspectiveTransform.quadrilateralToQuadrilateral(p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY)
  }
  introspect(JAM.policy.p33) {
    return GridSampler.sampleGrid3(image$$4, dimension$$1, transform$$1);
  }
}
function v127(image$$3, dimension, transform) {
  var bits = new BitMatrix(dimension);
  var v318 = dimension << 1;
  var points$$1 = new Array(v318);
  var y$$31 = 0;
  var v334 = y$$31 < dimension;
  for (;v334;) {
    var max = points$$1.length;
    var iValue = y$$31 + .5;
    var x$$48 = 0;
    var v321 = x$$48 < max;
    for (;v321;) {
      var v319 = x$$48 >> 1;
      points$$1[x$$48] = v319 + .5;
      var v320 = x$$48 + 1;
      points$$1[v320] = iValue;
      x$$48 = x$$48 + 2;
      v321 = x$$48 < max;
    }
    introspect(JAM.policy.p22) {
      transform.transformPoints1(points$$1);
    }
    introspect(JAM.policy.p33) {
      GridSampler.checkAndNudgePoints(image$$3, points$$1);
    }
    try {
      x$$48 = 0;
      var v333 = x$$48 < max;
      for (;v333;) {
        var v1847 = points$$1[x$$48];
        introspect(JAM.policy.p22) {
          var v1183 = Math.floor(v1847)
        }
        var v322 = v1183 * 4;
        var v2648 = x$$48 + 1;
        var v2479 = points$$1[v2648];
        introspect(JAM.policy.p22) {
          var v1848 = Math.floor(v2479)
        }
        var v1849 = qrcode.width;
        var v1184 = v1848 * v1849;
        var v323 = v1184 * 4;
        var xpoint = v322 + v323;
        var v1850 = points$$1[x$$48];
        introspect(JAM.policy.p22) {
          var v1185 = Math.floor(v1850)
        }
        var v1851 = qrcode.width;
        var v2649 = x$$48 + 1;
        var v2480 = points$$1[v2649];
        introspect(JAM.policy.p22) {
          var v1852 = Math.floor(v2480)
        }
        var v1186 = v1851 * v1852;
        var v324 = v1185 + v1186;
        var bit = image$$3[v324];
        var v1187 = qrcode.imagedata;
        var v325 = v1187.data;
        var v1188;
        if (bit) {
          v1188 = 255;
        } else {
          v1188 = 0;
        }
        v325[xpoint] = v1188;
        var v1189 = qrcode.imagedata;
        var v326 = v1189.data;
        var v327 = xpoint + 1;
        var v1190;
        if (bit) {
          v1190 = 255;
        } else {
          v1190 = 0;
        }
        v326[v327] = v1190;
        var v1191 = qrcode.imagedata;
        var v328 = v1191.data;
        var v329 = xpoint + 2;
        v328[v329] = 0;
        var v1192 = qrcode.imagedata;
        var v330 = v1192.data;
        var v331 = xpoint + 3;
        v330[v331] = 255;
        if (bit) {
          var v332 = x$$48 >> 1;
          introspect(JAM.policy.p23) {
            bits.set_Renamed(v332, y$$31);
          }
        }
        x$$48 = x$$48 + 2;
        v333 = x$$48 < max;
      }
    } catch (aioobe) {
      throw "Error.checkAndNudgePoints";
    }
    y$$31++;
    v334 = y$$31 < dimension;
  }
  return bits;
}
function v126(image$$2, points) {
  var width$$9 = qrcode.width;
  var height$$8 = qrcode.height;
  var nudged = true;
  var offset$$8 = 0;
  var v1853 = points.Length;
  var v1193 = offset$$8 < v1853;
  if (v1193) {
    v1193 = nudged;
  }
  var v344 = v1193;
  for (;v344;) {
    var v335 = points[offset$$8];
    introspect(JAM.policy.p22) {
      var x$$47 = Math.floor(v335)
    }
    var v1194 = offset$$8 + 1;
    var v336 = points[v1194];
    introspect(JAM.policy.p22) {
      var y$$30 = Math.floor(v336)
    }
    var v2481 = x$$47 < -1;
    var v2650 = !v2481;
    if (v2650) {
      v2481 = x$$47 > width$$9;
    }
    var v1854 = v2481;
    var v2482 = !v1854;
    if (v2482) {
      v1854 = y$$30 < -1;
    }
    var v1195 = v1854;
    var v1855 = !v1195;
    if (v1855) {
      v1195 = y$$30 > height$$8;
    }
    var v337 = v1195;
    if (v337) {
      throw "Error.checkAndNudgePoints ";
    }
    nudged = false;
    var v339 = x$$47 == -1;
    if (v339) {
      points[offset$$8] = 0;
      nudged = true;
    } else {
      var v338 = x$$47 == width$$9;
      if (v338) {
        points[offset$$8] = width$$9 - 1;
        nudged = true;
      }
    }
    var v343 = y$$30 == -1;
    if (v343) {
      var v340 = offset$$8 + 1;
      points[v340] = 0;
      nudged = true;
    } else {
      var v342 = y$$30 == height$$8;
      if (v342) {
        var v341 = offset$$8 + 1;
        points[v341] = height$$8 - 1;
        nudged = true;
      }
    }
    offset$$8 = offset$$8 + 2;
    var v1856 = points.Length;
    var v1196 = offset$$8 < v1856;
    if (v1196) {
      v1196 = nudged;
    }
    v344 = v1196;
  }
  nudged = true;
  var v345 = points.Length;
  offset$$8 = v345 - 2;
  var v1197 = offset$$8 >= 0;
  if (v1197) {
    v1197 = nudged;
  }
  var v355 = v1197;
  for (;v355;) {
    var v346 = points[offset$$8];
    introspect(JAM.policy.p22) {
      x$$47 = Math.floor(v346);
    }
    var v1198 = offset$$8 + 1;
    var v347 = points[v1198];
    introspect(JAM.policy.p22) {
      y$$30 = Math.floor(v347);
    }
    var v2483 = x$$47 < -1;
    var v2651 = !v2483;
    if (v2651) {
      v2483 = x$$47 > width$$9;
    }
    var v1857 = v2483;
    var v2484 = !v1857;
    if (v2484) {
      v1857 = y$$30 < -1;
    }
    var v1199 = v1857;
    var v1858 = !v1199;
    if (v1858) {
      v1199 = y$$30 > height$$8;
    }
    var v348 = v1199;
    if (v348) {
      throw "Error.checkAndNudgePoints ";
    }
    nudged = false;
    var v350 = x$$47 == -1;
    if (v350) {
      points[offset$$8] = 0;
      nudged = true;
    } else {
      var v349 = x$$47 == width$$9;
      if (v349) {
        points[offset$$8] = width$$9 - 1;
        nudged = true;
      }
    }
    var v354 = y$$30 == -1;
    if (v354) {
      var v351 = offset$$8 + 1;
      points[v351] = 0;
      nudged = true;
    } else {
      var v353 = y$$30 == height$$8;
      if (v353) {
        var v352 = offset$$8 + 1;
        points[v352] = height$$8 - 1;
        nudged = true;
      }
    }
    offset$$8 = offset$$8 - 2;
    var v1200 = offset$$8 >= 0;
    if (v1200) {
      v1200 = nudged;
    }
    v355 = v1200;
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
  introspect(JAM.policy.p19) {
    this.__defineGetter__("Count", v0);
  }
  introspect(JAM.policy.p19) {
    this.__defineGetter__("DataCodewords", v1);
  }
  return;
}
function ECBlocks(ecCodewordsPerBlock, ecBlocks1, ecBlocks2) {
  function v5() {
    return this.ecBlocks;
  }
  function v4() {
    var total = 0;
    var i$$1 = 0;
    var v1859 = this.ecBlocks;
    var v1201 = v1859.length;
    var v356 = i$$1 < v1201;
    for (;v356;) {
      var v2485 = this.ecBlocks;
      var v1860 = v2485[i$$1];
      var v1202 = v1860.length;
      total = total + v1202;
      i$$1++;
      var v1861 = this.ecBlocks;
      var v1203 = v1861.length;
      v356 = i$$1 < v1203;
    }
    return total;
  }
  function v3() {
    var v357 = this.ecCodewordsPerBlock;
    var v358 = this.NumBlocks;
    return v357 * v358;
  }
  function v2() {
    return this.ecCodewordsPerBlock;
  }
  this.ecCodewordsPerBlock = ecCodewordsPerBlock;
  if (ecBlocks2) {
    var v2800 = new Array(ecBlocks1, ecBlocks2);
    this.ecBlocks = v2800;
  } else {
    var v2801 = new Array(ecBlocks1);
    this.ecBlocks = v2801;
  }
  introspect(JAM.policy.p19) {
    this.__defineGetter__("ECCodewordsPerBlock", v2);
  }
  introspect(JAM.policy.p19) {
    this.__defineGetter__("TotalECCodewords", v3);
  }
  introspect(JAM.policy.p19) {
    this.__defineGetter__("NumBlocks", v4);
  }
  this.getECBlocks = v5;
  return;
}
function Version(versionNumber, alignmentPatternCenters, ecBlocks1$$1, ecBlocks2$$1, ecBlocks3, ecBlocks4) {
  function v11(ecLevel) {
    var v359 = this.ecBlocks;
    var v360 = ecLevel.ordinal_Renamed_Field;
    return v359[v360];
  }
  function v10() {
    var dimension$$2 = this.DimensionForVersion;
    var bitMatrix = new BitMatrix(dimension$$2);
    introspect(JAM.policy.p20) {
      bitMatrix.setRegion(0, 0, 9, 9);
    }
    var v361 = dimension$$2 - 8;
    introspect(JAM.policy.p23) {
      bitMatrix.setRegion(v361, 0, 8, 9);
    }
    var v362 = dimension$$2 - 8;
    introspect(JAM.policy.p20) {
      bitMatrix.setRegion(0, v362, 9, 8);
    }
    var v363 = this.alignmentPatternCenters;
    var max$$1 = v363.length;
    var x$$49 = 0;
    var v368 = x$$49 < max$$1;
    for (;v368;) {
      var v1204 = this.alignmentPatternCenters;
      var v364 = v1204[x$$49];
      var i$$3 = v364 - 2;
      var y$$32 = 0;
      var v367 = y$$32 < max$$1;
      for (;v367;) {
        var v1862 = x$$49 == 0;
        if (v1862) {
          var v2486 = y$$32 == 0;
          var v2653 = !v2486;
          if (v2653) {
            var v2652 = max$$1 - 1;
            v2486 = y$$32 == v2652;
          }
          v1862 = v2486;
        }
        var v1205 = v1862;
        var v1864 = !v1205;
        if (v1864) {
          var v2487 = max$$1 - 1;
          var v1863 = x$$49 == v2487;
          if (v1863) {
            v1863 = y$$32 == 0;
          }
          v1205 = v1863;
        }
        var v365 = v1205;
        if (v365) {
          y$$32++;
          v367 = y$$32 < max$$1;
          continue;
        }
        var v1865 = this.alignmentPatternCenters;
        var v1206 = v1865[y$$32];
        var v366 = v1206 - 2;
        introspect(JAM.policy.p23) {
          bitMatrix.setRegion(v366, i$$3, 5, 5);
        }
        y$$32++;
        v367 = y$$32 < max$$1;
      }
      x$$49++;
      v368 = x$$49 < max$$1;
    }
    var v369 = dimension$$2 - 17;
    introspect(JAM.policy.p20) {
      bitMatrix.setRegion(6, 9, 1, v369);
    }
    var v370 = dimension$$2 - 17;
    introspect(JAM.policy.p20) {
      bitMatrix.setRegion(9, 6, v370, 1);
    }
    var v1207 = this.versionNumber;
    var v373 = v1207 > 6;
    if (v373) {
      var v371 = dimension$$2 - 11;
      introspect(JAM.policy.p23) {
        bitMatrix.setRegion(v371, 0, 3, 6);
      }
      var v372 = dimension$$2 - 11;
      introspect(JAM.policy.p20) {
        bitMatrix.setRegion(0, v372, 6, 3);
      }
    }
    return bitMatrix;
  }
  function v9() {
    var v1208 = this.versionNumber;
    var v374 = 4 * v1208;
    return 17 + v374;
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
  var v2802 = new Array(ecBlocks1$$1, ecBlocks2$$1, ecBlocks3, ecBlocks4);
  this.ecBlocks = v2802;
  var total$$1 = 0;
  var ecCodewords = ecBlocks1$$1.ECCodewordsPerBlock;
  var ecbArray = ecBlocks1$$1.ecBlocks;
  var i$$2 = 0;
  var v1209 = ecbArray.length;
  var v375 = i$$2 < v1209;
  for (;v375;) {
    var ecBlock = ecbArray[i$$2];
    var v1866 = ecBlock.Count;
    var v2488 = ecBlock.DataCodewords;
    var v1867 = v2488 + ecCodewords;
    var v1210 = v1866 * v1867;
    total$$1 = total$$1 + v1210;
    i$$2++;
    var v1211 = ecbArray.length;
    v375 = i$$2 < v1211;
  }
  this.totalCodewords = total$$1;
  introspect(JAM.policy.p19) {
    this.__defineGetter__("VersionNumber", v6);
  }
  introspect(JAM.policy.p19) {
    this.__defineGetter__("AlignmentPatternCenters", v7);
  }
  introspect(JAM.policy.p19) {
    this.__defineGetter__("TotalCodewords", v8);
  }
  introspect(JAM.policy.p19) {
    this.__defineGetter__("DimensionForVersion", v9);
  }
  this.buildFunctionPattern = v10;
  this.getECBlocksForLevel = v11;
  return;
}
function buildVersions() {
  var v1212 = new Array;
  var v1868 = new ECB(1, 19);
  var v1213 = new ECBlocks(7, v1868);
  var v1869 = new ECB(1, 16);
  var v1214 = new ECBlocks(10, v1869);
  var v1870 = new ECB(1, 13);
  var v1215 = new ECBlocks(13, v1870);
  var v1871 = new ECB(1, 9);
  var v1216 = new ECBlocks(17, v1871);
  var v376 = new Version(1, v1212, v1213, v1214, v1215, v1216);
  var v1217 = new Array(6, 18);
  var v1872 = new ECB(1, 34);
  var v1218 = new ECBlocks(10, v1872);
  var v1873 = new ECB(1, 28);
  var v1219 = new ECBlocks(16, v1873);
  var v1874 = new ECB(1, 22);
  var v1220 = new ECBlocks(22, v1874);
  var v1875 = new ECB(1, 16);
  var v1221 = new ECBlocks(28, v1875);
  var v377 = new Version(2, v1217, v1218, v1219, v1220, v1221);
  var v1222 = new Array(6, 22);
  var v1876 = new ECB(1, 55);
  var v1223 = new ECBlocks(15, v1876);
  var v1877 = new ECB(1, 44);
  var v1224 = new ECBlocks(26, v1877);
  var v1878 = new ECB(2, 17);
  var v1225 = new ECBlocks(18, v1878);
  var v1879 = new ECB(2, 13);
  var v1226 = new ECBlocks(22, v1879);
  var v378 = new Version(3, v1222, v1223, v1224, v1225, v1226);
  var v1227 = new Array(6, 26);
  var v1880 = new ECB(1, 80);
  var v1228 = new ECBlocks(20, v1880);
  var v1881 = new ECB(2, 32);
  var v1229 = new ECBlocks(18, v1881);
  var v1882 = new ECB(2, 24);
  var v1230 = new ECBlocks(26, v1882);
  var v1883 = new ECB(4, 9);
  var v1231 = new ECBlocks(16, v1883);
  var v379 = new Version(4, v1227, v1228, v1229, v1230, v1231);
  var v1232 = new Array(6, 30);
  var v1884 = new ECB(1, 108);
  var v1233 = new ECBlocks(26, v1884);
  var v1885 = new ECB(2, 43);
  var v1234 = new ECBlocks(24, v1885);
  var v1886 = new ECB(2, 15);
  var v1887 = new ECB(2, 16);
  var v1235 = new ECBlocks(18, v1886, v1887);
  var v1888 = new ECB(2, 11);
  var v1889 = new ECB(2, 12);
  var v1236 = new ECBlocks(22, v1888, v1889);
  var v380 = new Version(5, v1232, v1233, v1234, v1235, v1236);
  var v1237 = new Array(6, 34);
  var v1890 = new ECB(2, 68);
  var v1238 = new ECBlocks(18, v1890);
  var v1891 = new ECB(4, 27);
  var v1239 = new ECBlocks(16, v1891);
  var v1892 = new ECB(4, 19);
  var v1240 = new ECBlocks(24, v1892);
  var v1893 = new ECB(4, 15);
  var v1241 = new ECBlocks(28, v1893);
  var v381 = new Version(6, v1237, v1238, v1239, v1240, v1241);
  var v1242 = new Array(6, 22, 38);
  var v1894 = new ECB(2, 78);
  var v1243 = new ECBlocks(20, v1894);
  var v1895 = new ECB(4, 31);
  var v1244 = new ECBlocks(18, v1895);
  var v1896 = new ECB(2, 14);
  var v1897 = new ECB(4, 15);
  var v1245 = new ECBlocks(18, v1896, v1897);
  var v1898 = new ECB(4, 13);
  var v1899 = new ECB(1, 14);
  var v1246 = new ECBlocks(26, v1898, v1899);
  var v382 = new Version(7, v1242, v1243, v1244, v1245, v1246);
  var v1247 = new Array(6, 24, 42);
  var v1900 = new ECB(2, 97);
  var v1248 = new ECBlocks(24, v1900);
  var v1901 = new ECB(2, 38);
  var v1902 = new ECB(2, 39);
  var v1249 = new ECBlocks(22, v1901, v1902);
  var v1903 = new ECB(4, 18);
  var v1904 = new ECB(2, 19);
  var v1250 = new ECBlocks(22, v1903, v1904);
  var v1905 = new ECB(4, 14);
  var v1906 = new ECB(2, 15);
  var v1251 = new ECBlocks(26, v1905, v1906);
  var v383 = new Version(8, v1247, v1248, v1249, v1250, v1251);
  var v1252 = new Array(6, 26, 46);
  var v1907 = new ECB(2, 116);
  var v1253 = new ECBlocks(30, v1907);
  var v1908 = new ECB(3, 36);
  var v1909 = new ECB(2, 37);
  var v1254 = new ECBlocks(22, v1908, v1909);
  var v1910 = new ECB(4, 16);
  var v1911 = new ECB(4, 17);
  var v1255 = new ECBlocks(20, v1910, v1911);
  var v1912 = new ECB(4, 12);
  var v1913 = new ECB(4, 13);
  var v1256 = new ECBlocks(24, v1912, v1913);
  var v384 = new Version(9, v1252, v1253, v1254, v1255, v1256);
  var v1257 = new Array(6, 28, 50);
  var v1914 = new ECB(2, 68);
  var v1915 = new ECB(2, 69);
  var v1258 = new ECBlocks(18, v1914, v1915);
  var v1916 = new ECB(4, 43);
  var v1917 = new ECB(1, 44);
  var v1259 = new ECBlocks(26, v1916, v1917);
  var v1918 = new ECB(6, 19);
  var v1919 = new ECB(2, 20);
  var v1260 = new ECBlocks(24, v1918, v1919);
  var v1920 = new ECB(6, 15);
  var v1921 = new ECB(2, 16);
  var v1261 = new ECBlocks(28, v1920, v1921);
  var v385 = new Version(10, v1257, v1258, v1259, v1260, v1261);
  var v1262 = new Array(6, 30, 54);
  var v1922 = new ECB(4, 81);
  var v1263 = new ECBlocks(20, v1922);
  var v1923 = new ECB(1, 50);
  var v1924 = new ECB(4, 51);
  var v1264 = new ECBlocks(30, v1923, v1924);
  var v1925 = new ECB(4, 22);
  var v1926 = new ECB(4, 23);
  var v1265 = new ECBlocks(28, v1925, v1926);
  var v1927 = new ECB(3, 12);
  var v1928 = new ECB(8, 13);
  var v1266 = new ECBlocks(24, v1927, v1928);
  var v386 = new Version(11, v1262, v1263, v1264, v1265, v1266);
  var v1267 = new Array(6, 32, 58);
  var v1929 = new ECB(2, 92);
  var v1930 = new ECB(2, 93);
  var v1268 = new ECBlocks(24, v1929, v1930);
  var v1931 = new ECB(6, 36);
  var v1932 = new ECB(2, 37);
  var v1269 = new ECBlocks(22, v1931, v1932);
  var v1933 = new ECB(4, 20);
  var v1934 = new ECB(6, 21);
  var v1270 = new ECBlocks(26, v1933, v1934);
  var v1935 = new ECB(7, 14);
  var v1936 = new ECB(4, 15);
  var v1271 = new ECBlocks(28, v1935, v1936);
  var v387 = new Version(12, v1267, v1268, v1269, v1270, v1271);
  var v1272 = new Array(6, 34, 62);
  var v1937 = new ECB(4, 107);
  var v1273 = new ECBlocks(26, v1937);
  var v1938 = new ECB(8, 37);
  var v1939 = new ECB(1, 38);
  var v1274 = new ECBlocks(22, v1938, v1939);
  var v1940 = new ECB(8, 20);
  var v1941 = new ECB(4, 21);
  var v1275 = new ECBlocks(24, v1940, v1941);
  var v1942 = new ECB(12, 11);
  var v1943 = new ECB(4, 12);
  var v1276 = new ECBlocks(22, v1942, v1943);
  var v388 = new Version(13, v1272, v1273, v1274, v1275, v1276);
  var v1277 = new Array(6, 26, 46, 66);
  var v1944 = new ECB(3, 115);
  var v1945 = new ECB(1, 116);
  var v1278 = new ECBlocks(30, v1944, v1945);
  var v1946 = new ECB(4, 40);
  var v1947 = new ECB(5, 41);
  var v1279 = new ECBlocks(24, v1946, v1947);
  var v1948 = new ECB(11, 16);
  var v1949 = new ECB(5, 17);
  var v1280 = new ECBlocks(20, v1948, v1949);
  var v1950 = new ECB(11, 12);
  var v1951 = new ECB(5, 13);
  var v1281 = new ECBlocks(24, v1950, v1951);
  var v389 = new Version(14, v1277, v1278, v1279, v1280, v1281);
  var v1282 = new Array(6, 26, 48, 70);
  var v1952 = new ECB(5, 87);
  var v1953 = new ECB(1, 88);
  var v1283 = new ECBlocks(22, v1952, v1953);
  var v1954 = new ECB(5, 41);
  var v1955 = new ECB(5, 42);
  var v1284 = new ECBlocks(24, v1954, v1955);
  var v1956 = new ECB(5, 24);
  var v1957 = new ECB(7, 25);
  var v1285 = new ECBlocks(30, v1956, v1957);
  var v1958 = new ECB(11, 12);
  var v1959 = new ECB(7, 13);
  var v1286 = new ECBlocks(24, v1958, v1959);
  var v390 = new Version(15, v1282, v1283, v1284, v1285, v1286);
  var v1287 = new Array(6, 26, 50, 74);
  var v1960 = new ECB(5, 98);
  var v1961 = new ECB(1, 99);
  var v1288 = new ECBlocks(24, v1960, v1961);
  var v1962 = new ECB(7, 45);
  var v1963 = new ECB(3, 46);
  var v1289 = new ECBlocks(28, v1962, v1963);
  var v1964 = new ECB(15, 19);
  var v1965 = new ECB(2, 20);
  var v1290 = new ECBlocks(24, v1964, v1965);
  var v1966 = new ECB(3, 15);
  var v1967 = new ECB(13, 16);
  var v1291 = new ECBlocks(30, v1966, v1967);
  var v391 = new Version(16, v1287, v1288, v1289, v1290, v1291);
  var v1292 = new Array(6, 30, 54, 78);
  var v1968 = new ECB(1, 107);
  var v1969 = new ECB(5, 108);
  var v1293 = new ECBlocks(28, v1968, v1969);
  var v1970 = new ECB(10, 46);
  var v1971 = new ECB(1, 47);
  var v1294 = new ECBlocks(28, v1970, v1971);
  var v1972 = new ECB(1, 22);
  var v1973 = new ECB(15, 23);
  var v1295 = new ECBlocks(28, v1972, v1973);
  var v1974 = new ECB(2, 14);
  var v1975 = new ECB(17, 15);
  var v1296 = new ECBlocks(28, v1974, v1975);
  var v392 = new Version(17, v1292, v1293, v1294, v1295, v1296);
  var v1297 = new Array(6, 30, 56, 82);
  var v1976 = new ECB(5, 120);
  var v1977 = new ECB(1, 121);
  var v1298 = new ECBlocks(30, v1976, v1977);
  var v1978 = new ECB(9, 43);
  var v1979 = new ECB(4, 44);
  var v1299 = new ECBlocks(26, v1978, v1979);
  var v1980 = new ECB(17, 22);
  var v1981 = new ECB(1, 23);
  var v1300 = new ECBlocks(28, v1980, v1981);
  var v1982 = new ECB(2, 14);
  var v1983 = new ECB(19, 15);
  var v1301 = new ECBlocks(28, v1982, v1983);
  var v393 = new Version(18, v1297, v1298, v1299, v1300, v1301);
  var v1302 = new Array(6, 30, 58, 86);
  var v1984 = new ECB(3, 113);
  var v1985 = new ECB(4, 114);
  var v1303 = new ECBlocks(28, v1984, v1985);
  var v1986 = new ECB(3, 44);
  var v1987 = new ECB(11, 45);
  var v1304 = new ECBlocks(26, v1986, v1987);
  var v1988 = new ECB(17, 21);
  var v1989 = new ECB(4, 22);
  var v1305 = new ECBlocks(26, v1988, v1989);
  var v1990 = new ECB(9, 13);
  var v1991 = new ECB(16, 14);
  var v1306 = new ECBlocks(26, v1990, v1991);
  var v394 = new Version(19, v1302, v1303, v1304, v1305, v1306);
  var v1307 = new Array(6, 34, 62, 90);
  var v1992 = new ECB(3, 107);
  var v1993 = new ECB(5, 108);
  var v1308 = new ECBlocks(28, v1992, v1993);
  var v1994 = new ECB(3, 41);
  var v1995 = new ECB(13, 42);
  var v1309 = new ECBlocks(26, v1994, v1995);
  var v1996 = new ECB(15, 24);
  var v1997 = new ECB(5, 25);
  var v1310 = new ECBlocks(30, v1996, v1997);
  var v1998 = new ECB(15, 15);
  var v1999 = new ECB(10, 16);
  var v1311 = new ECBlocks(28, v1998, v1999);
  var v395 = new Version(20, v1307, v1308, v1309, v1310, v1311);
  var v1312 = new Array(6, 28, 50, 72, 94);
  var v2000 = new ECB(4, 116);
  var v2001 = new ECB(4, 117);
  var v1313 = new ECBlocks(28, v2000, v2001);
  var v2002 = new ECB(17, 42);
  var v1314 = new ECBlocks(26, v2002);
  var v2003 = new ECB(17, 22);
  var v2004 = new ECB(6, 23);
  var v1315 = new ECBlocks(28, v2003, v2004);
  var v2005 = new ECB(19, 16);
  var v2006 = new ECB(6, 17);
  var v1316 = new ECBlocks(30, v2005, v2006);
  var v396 = new Version(21, v1312, v1313, v1314, v1315, v1316);
  var v1317 = new Array(6, 26, 50, 74, 98);
  var v2007 = new ECB(2, 111);
  var v2008 = new ECB(7, 112);
  var v1318 = new ECBlocks(28, v2007, v2008);
  var v2009 = new ECB(17, 46);
  var v1319 = new ECBlocks(28, v2009);
  var v2010 = new ECB(7, 24);
  var v2011 = new ECB(16, 25);
  var v1320 = new ECBlocks(30, v2010, v2011);
  var v2012 = new ECB(34, 13);
  var v1321 = new ECBlocks(24, v2012);
  var v397 = new Version(22, v1317, v1318, v1319, v1320, v1321);
  var v1322 = new Array(6, 30, 54, 74, 102);
  var v2013 = new ECB(4, 121);
  var v2014 = new ECB(5, 122);
  var v1323 = new ECBlocks(30, v2013, v2014);
  var v2015 = new ECB(4, 47);
  var v2016 = new ECB(14, 48);
  var v1324 = new ECBlocks(28, v2015, v2016);
  var v2017 = new ECB(11, 24);
  var v2018 = new ECB(14, 25);
  var v1325 = new ECBlocks(30, v2017, v2018);
  var v2019 = new ECB(16, 15);
  var v2020 = new ECB(14, 16);
  var v1326 = new ECBlocks(30, v2019, v2020);
  var v398 = new Version(23, v1322, v1323, v1324, v1325, v1326);
  var v1327 = new Array(6, 28, 54, 80, 106);
  var v2021 = new ECB(6, 117);
  var v2022 = new ECB(4, 118);
  var v1328 = new ECBlocks(30, v2021, v2022);
  var v2023 = new ECB(6, 45);
  var v2024 = new ECB(14, 46);
  var v1329 = new ECBlocks(28, v2023, v2024);
  var v2025 = new ECB(11, 24);
  var v2026 = new ECB(16, 25);
  var v1330 = new ECBlocks(30, v2025, v2026);
  var v2027 = new ECB(30, 16);
  var v2028 = new ECB(2, 17);
  var v1331 = new ECBlocks(30, v2027, v2028);
  var v399 = new Version(24, v1327, v1328, v1329, v1330, v1331);
  var v1332 = new Array(6, 32, 58, 84, 110);
  var v2029 = new ECB(8, 106);
  var v2030 = new ECB(4, 107);
  var v1333 = new ECBlocks(26, v2029, v2030);
  var v2031 = new ECB(8, 47);
  var v2032 = new ECB(13, 48);
  var v1334 = new ECBlocks(28, v2031, v2032);
  var v2033 = new ECB(7, 24);
  var v2034 = new ECB(22, 25);
  var v1335 = new ECBlocks(30, v2033, v2034);
  var v2035 = new ECB(22, 15);
  var v2036 = new ECB(13, 16);
  var v1336 = new ECBlocks(30, v2035, v2036);
  var v400 = new Version(25, v1332, v1333, v1334, v1335, v1336);
  var v1337 = new Array(6, 30, 58, 86, 114);
  var v2037 = new ECB(10, 114);
  var v2038 = new ECB(2, 115);
  var v1338 = new ECBlocks(28, v2037, v2038);
  var v2039 = new ECB(19, 46);
  var v2040 = new ECB(4, 47);
  var v1339 = new ECBlocks(28, v2039, v2040);
  var v2041 = new ECB(28, 22);
  var v2042 = new ECB(6, 23);
  var v1340 = new ECBlocks(28, v2041, v2042);
  var v2043 = new ECB(33, 16);
  var v2044 = new ECB(4, 17);
  var v1341 = new ECBlocks(30, v2043, v2044);
  var v401 = new Version(26, v1337, v1338, v1339, v1340, v1341);
  var v1342 = new Array(6, 34, 62, 90, 118);
  var v2045 = new ECB(8, 122);
  var v2046 = new ECB(4, 123);
  var v1343 = new ECBlocks(30, v2045, v2046);
  var v2047 = new ECB(22, 45);
  var v2048 = new ECB(3, 46);
  var v1344 = new ECBlocks(28, v2047, v2048);
  var v2049 = new ECB(8, 23);
  var v2050 = new ECB(26, 24);
  var v1345 = new ECBlocks(30, v2049, v2050);
  var v2051 = new ECB(12, 15);
  var v2052 = new ECB(28, 16);
  var v1346 = new ECBlocks(30, v2051, v2052);
  var v402 = new Version(27, v1342, v1343, v1344, v1345, v1346);
  var v1347 = new Array(6, 26, 50, 74, 98, 122);
  var v2053 = new ECB(3, 117);
  var v2054 = new ECB(10, 118);
  var v1348 = new ECBlocks(30, v2053, v2054);
  var v2055 = new ECB(3, 45);
  var v2056 = new ECB(23, 46);
  var v1349 = new ECBlocks(28, v2055, v2056);
  var v2057 = new ECB(4, 24);
  var v2058 = new ECB(31, 25);
  var v1350 = new ECBlocks(30, v2057, v2058);
  var v2059 = new ECB(11, 15);
  var v2060 = new ECB(31, 16);
  var v1351 = new ECBlocks(30, v2059, v2060);
  var v403 = new Version(28, v1347, v1348, v1349, v1350, v1351);
  var v1352 = new Array(6, 30, 54, 78, 102, 126);
  var v2061 = new ECB(7, 116);
  var v2062 = new ECB(7, 117);
  var v1353 = new ECBlocks(30, v2061, v2062);
  var v2063 = new ECB(21, 45);
  var v2064 = new ECB(7, 46);
  var v1354 = new ECBlocks(28, v2063, v2064);
  var v2065 = new ECB(1, 23);
  var v2066 = new ECB(37, 24);
  var v1355 = new ECBlocks(30, v2065, v2066);
  var v2067 = new ECB(19, 15);
  var v2068 = new ECB(26, 16);
  var v1356 = new ECBlocks(30, v2067, v2068);
  var v404 = new Version(29, v1352, v1353, v1354, v1355, v1356);
  var v1357 = new Array(6, 26, 52, 78, 104, 130);
  var v2069 = new ECB(5, 115);
  var v2070 = new ECB(10, 116);
  var v1358 = new ECBlocks(30, v2069, v2070);
  var v2071 = new ECB(19, 47);
  var v2072 = new ECB(10, 48);
  var v1359 = new ECBlocks(28, v2071, v2072);
  var v2073 = new ECB(15, 24);
  var v2074 = new ECB(25, 25);
  var v1360 = new ECBlocks(30, v2073, v2074);
  var v2075 = new ECB(23, 15);
  var v2076 = new ECB(25, 16);
  var v1361 = new ECBlocks(30, v2075, v2076);
  var v405 = new Version(30, v1357, v1358, v1359, v1360, v1361);
  var v1362 = new Array(6, 30, 56, 82, 108, 134);
  var v2077 = new ECB(13, 115);
  var v2078 = new ECB(3, 116);
  var v1363 = new ECBlocks(30, v2077, v2078);
  var v2079 = new ECB(2, 46);
  var v2080 = new ECB(29, 47);
  var v1364 = new ECBlocks(28, v2079, v2080);
  var v2081 = new ECB(42, 24);
  var v2082 = new ECB(1, 25);
  var v1365 = new ECBlocks(30, v2081, v2082);
  var v2083 = new ECB(23, 15);
  var v2084 = new ECB(28, 16);
  var v1366 = new ECBlocks(30, v2083, v2084);
  var v406 = new Version(31, v1362, v1363, v1364, v1365, v1366);
  var v1367 = new Array(6, 34, 60, 86, 112, 138);
  var v2085 = new ECB(17, 115);
  var v1368 = new ECBlocks(30, v2085);
  var v2086 = new ECB(10, 46);
  var v2087 = new ECB(23, 47);
  var v1369 = new ECBlocks(28, v2086, v2087);
  var v2088 = new ECB(10, 24);
  var v2089 = new ECB(35, 25);
  var v1370 = new ECBlocks(30, v2088, v2089);
  var v2090 = new ECB(19, 15);
  var v2091 = new ECB(35, 16);
  var v1371 = new ECBlocks(30, v2090, v2091);
  var v407 = new Version(32, v1367, v1368, v1369, v1370, v1371);
  var v1372 = new Array(6, 30, 58, 86, 114, 142);
  var v2092 = new ECB(17, 115);
  var v2093 = new ECB(1, 116);
  var v1373 = new ECBlocks(30, v2092, v2093);
  var v2094 = new ECB(14, 46);
  var v2095 = new ECB(21, 47);
  var v1374 = new ECBlocks(28, v2094, v2095);
  var v2096 = new ECB(29, 24);
  var v2097 = new ECB(19, 25);
  var v1375 = new ECBlocks(30, v2096, v2097);
  var v2098 = new ECB(11, 15);
  var v2099 = new ECB(46, 16);
  var v1376 = new ECBlocks(30, v2098, v2099);
  var v408 = new Version(33, v1372, v1373, v1374, v1375, v1376);
  var v1377 = new Array(6, 34, 62, 90, 118, 146);
  var v2100 = new ECB(13, 115);
  var v2101 = new ECB(6, 116);
  var v1378 = new ECBlocks(30, v2100, v2101);
  var v2102 = new ECB(14, 46);
  var v2103 = new ECB(23, 47);
  var v1379 = new ECBlocks(28, v2102, v2103);
  var v2104 = new ECB(44, 24);
  var v2105 = new ECB(7, 25);
  var v1380 = new ECBlocks(30, v2104, v2105);
  var v2106 = new ECB(59, 16);
  var v2107 = new ECB(1, 17);
  var v1381 = new ECBlocks(30, v2106, v2107);
  var v409 = new Version(34, v1377, v1378, v1379, v1380, v1381);
  var v1382 = new Array(6, 30, 54, 78, 102, 126, 150);
  var v2108 = new ECB(12, 121);
  var v2109 = new ECB(7, 122);
  var v1383 = new ECBlocks(30, v2108, v2109);
  var v2110 = new ECB(12, 47);
  var v2111 = new ECB(26, 48);
  var v1384 = new ECBlocks(28, v2110, v2111);
  var v2112 = new ECB(39, 24);
  var v2113 = new ECB(14, 25);
  var v1385 = new ECBlocks(30, v2112, v2113);
  var v2114 = new ECB(22, 15);
  var v2115 = new ECB(41, 16);
  var v1386 = new ECBlocks(30, v2114, v2115);
  var v410 = new Version(35, v1382, v1383, v1384, v1385, v1386);
  var v1387 = new Array(6, 24, 50, 76, 102, 128, 154);
  var v2116 = new ECB(6, 121);
  var v2117 = new ECB(14, 122);
  var v1388 = new ECBlocks(30, v2116, v2117);
  var v2118 = new ECB(6, 47);
  var v2119 = new ECB(34, 48);
  var v1389 = new ECBlocks(28, v2118, v2119);
  var v2120 = new ECB(46, 24);
  var v2121 = new ECB(10, 25);
  var v1390 = new ECBlocks(30, v2120, v2121);
  var v2122 = new ECB(2, 15);
  var v2123 = new ECB(64, 16);
  var v1391 = new ECBlocks(30, v2122, v2123);
  var v411 = new Version(36, v1387, v1388, v1389, v1390, v1391);
  var v1392 = new Array(6, 28, 54, 80, 106, 132, 158);
  var v2124 = new ECB(17, 122);
  var v2125 = new ECB(4, 123);
  var v1393 = new ECBlocks(30, v2124, v2125);
  var v2126 = new ECB(29, 46);
  var v2127 = new ECB(14, 47);
  var v1394 = new ECBlocks(28, v2126, v2127);
  var v2128 = new ECB(49, 24);
  var v2129 = new ECB(10, 25);
  var v1395 = new ECBlocks(30, v2128, v2129);
  var v2130 = new ECB(24, 15);
  var v2131 = new ECB(46, 16);
  var v1396 = new ECBlocks(30, v2130, v2131);
  var v412 = new Version(37, v1392, v1393, v1394, v1395, v1396);
  var v1397 = new Array(6, 32, 58, 84, 110, 136, 162);
  var v2132 = new ECB(4, 122);
  var v2133 = new ECB(18, 123);
  var v1398 = new ECBlocks(30, v2132, v2133);
  var v2134 = new ECB(13, 46);
  var v2135 = new ECB(32, 47);
  var v1399 = new ECBlocks(28, v2134, v2135);
  var v2136 = new ECB(48, 24);
  var v2137 = new ECB(14, 25);
  var v1400 = new ECBlocks(30, v2136, v2137);
  var v2138 = new ECB(42, 15);
  var v2139 = new ECB(32, 16);
  var v1401 = new ECBlocks(30, v2138, v2139);
  var v413 = new Version(38, v1397, v1398, v1399, v1400, v1401);
  var v1402 = new Array(6, 26, 54, 82, 110, 138, 166);
  var v2140 = new ECB(20, 117);
  var v2141 = new ECB(4, 118);
  var v1403 = new ECBlocks(30, v2140, v2141);
  var v2142 = new ECB(40, 47);
  var v2143 = new ECB(7, 48);
  var v1404 = new ECBlocks(28, v2142, v2143);
  var v2144 = new ECB(43, 24);
  var v2145 = new ECB(22, 25);
  var v1405 = new ECBlocks(30, v2144, v2145);
  var v2146 = new ECB(10, 15);
  var v2147 = new ECB(67, 16);
  var v1406 = new ECBlocks(30, v2146, v2147);
  var v414 = new Version(39, v1402, v1403, v1404, v1405, v1406);
  var v1407 = new Array(6, 30, 58, 86, 114, 142, 170);
  var v2148 = new ECB(19, 118);
  var v2149 = new ECB(6, 119);
  var v1408 = new ECBlocks(30, v2148, v2149);
  var v2150 = new ECB(18, 47);
  var v2151 = new ECB(31, 48);
  var v1409 = new ECBlocks(28, v2150, v2151);
  var v2152 = new ECB(34, 24);
  var v2153 = new ECB(34, 25);
  var v1410 = new ECBlocks(30, v2152, v2153);
  var v2154 = new ECB(20, 15);
  var v2155 = new ECB(61, 16);
  var v1411 = new ECBlocks(30, v2154, v2155);
  var v415 = new Version(40, v1407, v1408, v1409, v1410, v1411);
  return new Array(v376, v377, v378, v379, v380, v381, v382, v383, v384, v385, v386, v387, v388, v389, v390, v391, v392, v393, v394, v395, v396, v397, v398, v399, v400, v401, v402, v403, v404, v405, v406, v407, v408, v409, v410, v411, v412, v413, v414, v415);
}
function PerspectiveTransform(a11, a21, a31, a12, a22, a32, a13$$1, a23$$1, a33) {
  function v15(other$$4) {
    var v2489 = this.a11;
    var v2490 = other$$4.a11;
    var v2156 = v2489 * v2490;
    var v2491 = this.a21;
    var v2492 = other$$4.a12;
    var v2157 = v2491 * v2492;
    var v1412 = v2156 + v2157;
    var v2158 = this.a31;
    var v2159 = other$$4.a13;
    var v1413 = v2158 * v2159;
    var v416 = v1412 + v1413;
    var v2493 = this.a11;
    var v2494 = other$$4.a21;
    var v2160 = v2493 * v2494;
    var v2495 = this.a21;
    var v2496 = other$$4.a22;
    var v2161 = v2495 * v2496;
    var v1414 = v2160 + v2161;
    var v2162 = this.a31;
    var v2163 = other$$4.a23;
    var v1415 = v2162 * v2163;
    var v417 = v1414 + v1415;
    var v2497 = this.a11;
    var v2498 = other$$4.a31;
    var v2164 = v2497 * v2498;
    var v2499 = this.a21;
    var v2500 = other$$4.a32;
    var v2165 = v2499 * v2500;
    var v1416 = v2164 + v2165;
    var v2166 = this.a31;
    var v2167 = other$$4.a33;
    var v1417 = v2166 * v2167;
    var v418 = v1416 + v1417;
    var v2501 = this.a12;
    var v2502 = other$$4.a11;
    var v2168 = v2501 * v2502;
    var v2503 = this.a22;
    var v2504 = other$$4.a12;
    var v2169 = v2503 * v2504;
    var v1418 = v2168 + v2169;
    var v2170 = this.a32;
    var v2171 = other$$4.a13;
    var v1419 = v2170 * v2171;
    var v419 = v1418 + v1419;
    var v2505 = this.a12;
    var v2506 = other$$4.a21;
    var v2172 = v2505 * v2506;
    var v2507 = this.a22;
    var v2508 = other$$4.a22;
    var v2173 = v2507 * v2508;
    var v1420 = v2172 + v2173;
    var v2174 = this.a32;
    var v2175 = other$$4.a23;
    var v1421 = v2174 * v2175;
    var v420 = v1420 + v1421;
    var v2509 = this.a12;
    var v2510 = other$$4.a31;
    var v2176 = v2509 * v2510;
    var v2511 = this.a22;
    var v2512 = other$$4.a32;
    var v2177 = v2511 * v2512;
    var v1422 = v2176 + v2177;
    var v2178 = this.a32;
    var v2179 = other$$4.a33;
    var v1423 = v2178 * v2179;
    var v421 = v1422 + v1423;
    var v2513 = this.a13;
    var v2514 = other$$4.a11;
    var v2180 = v2513 * v2514;
    var v2515 = this.a23;
    var v2516 = other$$4.a12;
    var v2181 = v2515 * v2516;
    var v1424 = v2180 + v2181;
    var v2182 = this.a33;
    var v2183 = other$$4.a13;
    var v1425 = v2182 * v2183;
    var v422 = v1424 + v1425;
    var v2517 = this.a13;
    var v2518 = other$$4.a21;
    var v2184 = v2517 * v2518;
    var v2519 = this.a23;
    var v2520 = other$$4.a22;
    var v2185 = v2519 * v2520;
    var v1426 = v2184 + v2185;
    var v2186 = this.a33;
    var v2187 = other$$4.a23;
    var v1427 = v2186 * v2187;
    var v423 = v1426 + v1427;
    var v2521 = this.a13;
    var v2522 = other$$4.a31;
    var v2188 = v2521 * v2522;
    var v2523 = this.a23;
    var v2524 = other$$4.a32;
    var v2189 = v2523 * v2524;
    var v1428 = v2188 + v2189;
    var v2190 = this.a33;
    var v2191 = other$$4.a33;
    var v1429 = v2190 * v2191;
    var v424 = v1428 + v1429;
    return new PerspectiveTransform(v416, v417, v418, v419, v420, v421, v422, v423, v424);
  }
  function v14() {
    var v2192 = this.a22;
    var v2193 = this.a33;
    var v1430 = v2192 * v2193;
    var v2194 = this.a23;
    var v2195 = this.a32;
    var v1431 = v2194 * v2195;
    var v425 = v1430 - v1431;
    var v2196 = this.a23;
    var v2197 = this.a31;
    var v1432 = v2196 * v2197;
    var v2198 = this.a21;
    var v2199 = this.a33;
    var v1433 = v2198 * v2199;
    var v426 = v1432 - v1433;
    var v2200 = this.a21;
    var v2201 = this.a32;
    var v1434 = v2200 * v2201;
    var v2202 = this.a22;
    var v2203 = this.a31;
    var v1435 = v2202 * v2203;
    var v427 = v1434 - v1435;
    var v2204 = this.a13;
    var v2205 = this.a32;
    var v1436 = v2204 * v2205;
    var v2206 = this.a12;
    var v2207 = this.a33;
    var v1437 = v2206 * v2207;
    var v428 = v1436 - v1437;
    var v2208 = this.a11;
    var v2209 = this.a33;
    var v1438 = v2208 * v2209;
    var v2210 = this.a13;
    var v2211 = this.a31;
    var v1439 = v2210 * v2211;
    var v429 = v1438 - v1439;
    var v2212 = this.a12;
    var v2213 = this.a31;
    var v1440 = v2212 * v2213;
    var v2214 = this.a11;
    var v2215 = this.a32;
    var v1441 = v2214 * v2215;
    var v430 = v1440 - v1441;
    var v2216 = this.a12;
    var v2217 = this.a23;
    var v1442 = v2216 * v2217;
    var v2218 = this.a13;
    var v2219 = this.a22;
    var v1443 = v2218 * v2219;
    var v431 = v1442 - v1443;
    var v2220 = this.a13;
    var v2221 = this.a21;
    var v1444 = v2220 * v2221;
    var v2222 = this.a11;
    var v2223 = this.a23;
    var v1445 = v2222 * v2223;
    var v432 = v1444 - v1445;
    var v2224 = this.a11;
    var v2225 = this.a22;
    var v1446 = v2224 * v2225;
    var v2226 = this.a12;
    var v2227 = this.a21;
    var v1447 = v2226 * v2227;
    var v433 = v1446 - v1447;
    return new PerspectiveTransform(v425, v426, v427, v428, v429, v430, v431, v432, v433);
  }
  function v13(xValues, yValues) {
    var n$$1 = xValues.length;
    var i$$6 = 0;
    var v438 = i$$6 < n$$1;
    for (;v438;) {
      var x$$51 = xValues[i$$6];
      var y$$34 = yValues[i$$6];
      var v2228 = this.a13;
      var v1448 = v2228 * x$$51;
      var v2229 = this.a23;
      var v1449 = v2229 * y$$34;
      var v434 = v1448 + v1449;
      var v435 = this.a33;
      var denominator$$2 = v434 + v435;
      var v2525 = this.a11;
      var v2230 = v2525 * x$$51;
      var v2526 = this.a21;
      var v2231 = v2526 * y$$34;
      var v1450 = v2230 + v2231;
      var v1451 = this.a31;
      var v436 = v1450 + v1451;
      xValues[i$$6] = v436 / denominator$$2;
      var v2527 = this.a12;
      var v2232 = v2527 * x$$51;
      var v2528 = this.a22;
      var v2233 = v2528 * y$$34;
      var v1452 = v2232 + v2233;
      var v1453 = this.a32;
      var v437 = v1452 + v1453;
      yValues[i$$6] = v437 / denominator$$2;
      i$$6++;
      v438 = i$$6 < n$$1;
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
    var v443 = i$$5 < max$$2;
    for (;v443;) {
      var x$$50 = points$$2[i$$5];
      var v439 = i$$5 + 1;
      var y$$33 = points$$2[v439];
      var v1454 = a13$$2 * x$$50;
      var v1455 = a23$$2 * y$$33;
      var v440 = v1454 + v1455;
      var denominator$$1 = v440 + a33$$1;
      var v2234 = a11$$1 * x$$50;
      var v2235 = a21$$1 * y$$33;
      var v1456 = v2234 + v2235;
      var v441 = v1456 + a31$$1;
      points$$2[i$$5] = v441 / denominator$$1;
      var v442 = i$$5 + 1;
      var v2529 = a12$$1 * x$$50;
      var v2530 = a22$$1 * y$$33;
      var v2236 = v2529 + v2530;
      var v1457 = v2236 + a32$$1;
      points$$2[v442] = v1457 / denominator$$1;
      i$$5 = i$$5 + 2;
      v443 = i$$5 < max$$2;
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
    var v444 = new FinderPatternFinder;
    var v445 = this.image;
    introspect(JAM.policy.p22) {
      var info$$1 = v444.findFinderPattern(v445)
    }
    introspect(JAM.policy.p22) {
      return this.processFinderPatternInfo(info$$1);
    }
  }
  function v25(info) {
    var topLeft$$3 = info.TopLeft;
    var topRight$$3 = info.TopRight;
    var bottomLeft$$3 = info.BottomLeft;
    introspect(JAM.policy.p33) {
      var moduleSize$$1 = this.calculateModuleSize(topLeft$$3, topRight$$3, bottomLeft$$3)
    }
    var v446 = moduleSize$$1 < 1;
    if (v446) {
      throw "Error";
    }
    introspect(JAM.policy.p33) {
      var dimension$$7 = this.computeDimension(topLeft$$3, topRight$$3, bottomLeft$$3, moduleSize$$1)
    }
    introspect(JAM.policy.p22) {
      var provisionalVersion = Version.getProvisionalVersionForDimension(dimension$$7)
    }
    var v447 = provisionalVersion.DimensionForVersion;
    var modulesBetweenFPCenters = v447 - 7;
    var alignmentPattern$$1 = null;
    var v2237 = provisionalVersion.AlignmentPatternCenters;
    var v1458 = v2237.length;
    var v456 = v1458 > 0;
    if (v456) {
      var v1459 = topRight$$3.X;
      var v1460 = topLeft$$3.X;
      var v448 = v1459 - v1460;
      var v449 = bottomLeft$$3.X;
      var bottomRightX$$1 = v448 + v449;
      var v1461 = topRight$$3.Y;
      var v1462 = topLeft$$3.Y;
      var v450 = v1461 - v1462;
      var v451 = bottomLeft$$3.Y;
      var bottomRightY$$1 = v450 + v451;
      var v452 = 3 / modulesBetweenFPCenters;
      var correctionToTopLeft = 1 - v452;
      var v1463 = topLeft$$3.X;
      var v2531 = topLeft$$3.X;
      var v2238 = bottomRightX$$1 - v2531;
      var v1464 = correctionToTopLeft * v2238;
      var v453 = v1463 + v1464;
      introspect(JAM.policy.p22) {
        var estAlignmentX$$1 = Math.floor(v453)
      }
      var v1465 = topLeft$$3.Y;
      var v2532 = topLeft$$3.Y;
      var v2239 = bottomRightY$$1 - v2532;
      var v1466 = correctionToTopLeft * v2239;
      var v454 = v1465 + v1466;
      introspect(JAM.policy.p22) {
        var estAlignmentY$$1 = Math.floor(v454)
      }
      var i$$7 = 4;
      var v455 = i$$7 <= 16;
      for (;v455;) {
        introspect(JAM.policy.p33) {
          alignmentPattern$$1 = this.findAlignmentInRegion(moduleSize$$1, estAlignmentX$$1, estAlignmentY$$1, i$$7);
        }
        break;
      }
    }
    introspect(JAM.policy.p33) {
      var transform$$4 = this.createTransform(topLeft$$3, topRight$$3, bottomLeft$$3, alignmentPattern$$1, dimension$$7)
    }
    var v457 = this.image;
    introspect(JAM.policy.p33) {
      var bits$$2 = this.sampleGrid(v457, transform$$4, dimension$$7)
    }
    var points$$4;
    var v458 = alignmentPattern$$1 == null;
    if (v458) {
      points$$4 = new Array(bottomLeft$$3, topLeft$$3, topRight$$3);
    } else {
      points$$4 = new Array(bottomLeft$$3, topLeft$$3, topRight$$3, alignmentPattern$$1);
    }
    return new DetectorResult(bits$$2, points$$4);
  }
  function v24(image$$6, transform$$3, dimension$$6) {
    var sampler = GridSampler;
    introspect(JAM.policy.p33) {
      return sampler.sampleGrid3(image$$6, dimension$$6, transform$$3);
    }
  }
  function v23(topLeft$$2, topRight$$2, bottomLeft$$2, alignmentPattern, dimension$$5) {
    var dimMinusThree = dimension$$5 - 3.5;
    var bottomRightX;
    var bottomRightY;
    var sourceBottomRightX;
    var sourceBottomRightY;
    var v463 = alignmentPattern != null;
    if (v463) {
      bottomRightX = alignmentPattern.X;
      bottomRightY = alignmentPattern.Y;
      sourceBottomRightX = sourceBottomRightY = dimMinusThree - 3;
    } else {
      var v1467 = topRight$$2.X;
      var v1468 = topLeft$$2.X;
      var v459 = v1467 - v1468;
      var v460 = bottomLeft$$2.X;
      bottomRightX = v459 + v460;
      var v1469 = topRight$$2.Y;
      var v1470 = topLeft$$2.Y;
      var v461 = v1469 - v1470;
      var v462 = bottomLeft$$2.Y;
      bottomRightY = v461 + v462;
      sourceBottomRightX = sourceBottomRightY = dimMinusThree;
    }
    var v464 = topLeft$$2.X;
    var v465 = topLeft$$2.Y;
    var v466 = topRight$$2.X;
    var v467 = topRight$$2.Y;
    var v468 = bottomLeft$$2.X;
    var v469 = bottomLeft$$2.Y;
    introspect(JAM.policy.p20) {
      var transform$$2 = PerspectiveTransform.quadrilateralToQuadrilateral(3.5, 3.5, dimMinusThree, 3.5, sourceBottomRightX, sourceBottomRightY, 3.5, dimMinusThree, v464, v465, v466, v467, bottomRightX, bottomRightY, v468, v469)
    }
    return transform$$2;
  }
  function v22(overallEstModuleSize, estAlignmentX, estAlignmentY, allowanceFactor) {
    var v470 = allowanceFactor * overallEstModuleSize;
    introspect(JAM.policy.p22) {
      var allowance = Math.floor(v470)
    }
    var v471 = estAlignmentX - allowance;
    introspect(JAM.policy.p20) {
      var alignmentAreaLeftX = Math.max(0, v471)
    }
    var v1471 = qrcode.width;
    var v472 = v1471 - 1;
    var v473 = estAlignmentX + allowance;
    introspect(JAM.policy.p33) {
      var alignmentAreaRightX = Math.min(v472, v473)
    }
    var v1472 = alignmentAreaRightX - alignmentAreaLeftX;
    var v1473 = overallEstModuleSize * 3;
    var v474 = v1472 < v1473;
    if (v474) {
      throw "Error";
    }
    var v475 = estAlignmentY - allowance;
    introspect(JAM.policy.p20) {
      var alignmentAreaTopY = Math.max(0, v475)
    }
    var v1474 = qrcode.height;
    var v476 = v1474 - 1;
    var v477 = estAlignmentY + allowance;
    introspect(JAM.policy.p33) {
      var alignmentAreaBottomY = Math.min(v476, v477)
    }
    var v478 = this.image;
    var v479 = alignmentAreaRightX - alignmentAreaLeftX;
    var v480 = alignmentAreaBottomY - alignmentAreaTopY;
    var v481 = this.resultPointCallback;
    var alignmentFinder = new AlignmentPatternFinder(v478, alignmentAreaLeftX, alignmentAreaTopY, v479, v480, overallEstModuleSize, v481);
    return alignmentFinder.find();
  }
  function v21(topLeft$$1, topRight$$1, bottomLeft$$1, moduleSize) {
    introspect(JAM.policy.p33) {
      var v1475 = this.distance(topLeft$$1, topRight$$1)
    }
    var v482 = v1475 / moduleSize;
    introspect(JAM.policy.p22) {
      var tltrCentersDimension = Math.round(v482)
    }
    introspect(JAM.policy.p33) {
      var v1476 = this.distance(topLeft$$1, bottomLeft$$1)
    }
    var v483 = v1476 / moduleSize;
    introspect(JAM.policy.p22) {
      var tlblCentersDimension = Math.round(v483)
    }
    var v1477 = tltrCentersDimension + tlblCentersDimension;
    var v484 = v1477 >> 1;
    var dimension$$4 = v484 + 7;
    var v485 = dimension$$4 & 3;
    switch(v485) {
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
    var v486 = pattern1.X;
    var v487 = pattern2.X;
    xDiff = v486 - v487;
    var v488 = pattern1.Y;
    var v489 = pattern2.Y;
    yDiff = v488 - v489;
    var v1478 = xDiff * xDiff;
    var v1479 = yDiff * yDiff;
    var v490 = v1478 + v1479;
    introspect(JAM.policy.p22) {
      return Math.sqrt(v490);
    }
  }
  function v19(topLeft, topRight, bottomLeft) {
    introspect(JAM.policy.p33) {
      var v1480 = this.calculateModuleSizeOneWay(topLeft, topRight)
    }
    introspect(JAM.policy.p33) {
      var v1481 = this.calculateModuleSizeOneWay(topLeft, bottomLeft)
    }
    var v491 = v1480 + v1481;
    return v491 / 2;
  }
  function v18(pattern$$1, otherPattern) {
    var v1482 = pattern$$1.X;
    introspect(JAM.policy.p22) {
      var v492 = Math.floor(v1482)
    }
    var v1483 = pattern$$1.Y;
    introspect(JAM.policy.p22) {
      var v493 = Math.floor(v1483)
    }
    var v1484 = otherPattern.X;
    introspect(JAM.policy.p22) {
      var v494 = Math.floor(v1484)
    }
    var v1485 = otherPattern.Y;
    introspect(JAM.policy.p22) {
      var v495 = Math.floor(v1485)
    }
    introspect(JAM.policy.p33) {
      var moduleSizeEst1 = this.sizeOfBlackWhiteBlackRunBothWays(v492, v493, v494, v495)
    }
    var v1486 = otherPattern.X;
    introspect(JAM.policy.p22) {
      var v496 = Math.floor(v1486)
    }
    var v1487 = otherPattern.Y;
    introspect(JAM.policy.p22) {
      var v497 = Math.floor(v1487)
    }
    var v1488 = pattern$$1.X;
    introspect(JAM.policy.p22) {
      var v498 = Math.floor(v1488)
    }
    var v1489 = pattern$$1.Y;
    introspect(JAM.policy.p22) {
      var v499 = Math.floor(v1489)
    }
    introspect(JAM.policy.p33) {
      var moduleSizeEst2 = this.sizeOfBlackWhiteBlackRunBothWays(v496, v497, v498, v499)
    }
    var v500 = isNaN(moduleSizeEst1);
    if (v500) {
      return moduleSizeEst2 / 7;
    }
    var v501 = isNaN(moduleSizeEst2);
    if (v501) {
      return moduleSizeEst1 / 7;
    }
    var v502 = moduleSizeEst1 + moduleSizeEst2;
    return v502 / 14;
  }
  function v17(fromX$$1, fromY$$1, toX$$1, toY$$1) {
    introspect(JAM.policy.p33) {
      var result = this.sizeOfBlackWhiteBlackRun(fromX$$1, fromY$$1, toX$$1, toY$$1)
    }
    var scale = 1;
    var v503 = toX$$1 - fromX$$1;
    var otherToX = fromX$$1 - v503;
    var v509 = otherToX < 0;
    if (v509) {
      var v504 = fromX$$1 - otherToX;
      scale = fromX$$1 / v504;
      otherToX = 0;
    } else {
      var v1490 = qrcode.width;
      var v508 = otherToX >= v1490;
      if (v508) {
        var v2240 = qrcode.width;
        var v1491 = v2240 - 1;
        var v505 = v1491 - fromX$$1;
        var v506 = otherToX - fromX$$1;
        scale = v505 / v506;
        var v507 = qrcode.width;
        otherToX = v507 - 1;
      }
    }
    var v2241 = toY$$1 - fromY$$1;
    var v1492 = v2241 * scale;
    var v510 = fromY$$1 - v1492;
    introspect(JAM.policy.p22) {
      var otherToY = Math.floor(v510)
    }
    scale = 1;
    var v516 = otherToY < 0;
    if (v516) {
      var v511 = fromY$$1 - otherToY;
      scale = fromY$$1 / v511;
      otherToY = 0;
    } else {
      var v1493 = qrcode.height;
      var v515 = otherToY >= v1493;
      if (v515) {
        var v2242 = qrcode.height;
        var v1494 = v2242 - 1;
        var v512 = v1494 - fromY$$1;
        var v513 = otherToY - fromY$$1;
        scale = v512 / v513;
        var v514 = qrcode.height;
        otherToY = v514 - 1;
      }
    }
    var v2243 = otherToX - fromX$$1;
    var v1495 = v2243 * scale;
    var v517 = fromX$$1 + v1495;
    introspect(JAM.policy.p22) {
      otherToX = Math.floor(v517);
    }
    introspect(JAM.policy.p33) {
      var v1496 = this.sizeOfBlackWhiteBlackRun(fromX$$1, fromY$$1, otherToX, otherToY)
    }
    result = result + v1496;
    return result - 1;
  }
  function v16(fromX, fromY, toX, toY) {
    var v1497 = toY - fromY;
    introspect(JAM.policy.p22) {
      var v518 = Math.abs(v1497)
    }
    var v1498 = toX - fromX;
    introspect(JAM.policy.p22) {
      var v519 = Math.abs(v1498)
    }
    var steep = v518 > v519;
    if (steep) {
      var temp = fromX;
      fromX = fromY;
      fromY = temp;
      temp = toX;
      toX = toY;
      toY = temp;
    }
    var v520 = toX - fromX;
    introspect(JAM.policy.p22) {
      var dx$$4 = Math.abs(v520)
    }
    var v521 = toY - fromY;
    introspect(JAM.policy.p22) {
      var dy$$4 = Math.abs(v521)
    }
    var v522 = -dx$$4;
    var error$$1 = v522 >> 1;
    var v523;
    var v1499 = fromY < toY;
    if (v1499) {
      v523 = 1;
    } else {
      v523 = -1;
    }
    var ystep = v523;
    var v524;
    var v1500 = fromX < toX;
    if (v1500) {
      v524 = 1;
    } else {
      v524 = -1;
    }
    var xstep = v524;
    var state = 0;
    var x$$52 = fromX;
    var y$$35 = fromY;
    var v534 = x$$52 != toX;
    for (;v534;) {
      var v525;
      if (steep) {
        v525 = y$$35;
      } else {
        v525 = x$$52;
      }
      var realX = v525;
      var v526;
      if (steep) {
        v526 = x$$52;
      } else {
        v526 = y$$35;
      }
      var realY = v526;
      var v529 = state == 1;
      if (v529) {
        var v1501 = this.image;
        var v2533 = qrcode.width;
        var v2244 = realY * v2533;
        var v1502 = realX + v2244;
        var v527 = v1501[v1502];
        if (v527) {
          state++;
        }
      } else {
        var v2245 = this.image;
        var v2654 = qrcode.width;
        var v2534 = realY * v2654;
        var v2246 = realX + v2534;
        var v1503 = v2245[v2246];
        var v528 = !v1503;
        if (v528) {
          state++;
        }
      }
      var v531 = state == 3;
      if (v531) {
        var diffX = x$$52 - fromX;
        var diffY = y$$35 - fromY;
        var v1504 = diffX * diffX;
        var v1505 = diffY * diffY;
        var v530 = v1504 + v1505;
        introspect(JAM.policy.p22) {
          return Math.sqrt(v530);
        }
      }
      error$$1 = error$$1 + dy$$4;
      var v533 = error$$1 > 0;
      if (v533) {
        var v532 = y$$35 == toY;
        if (v532) {
          break;
        }
        y$$35 = y$$35 + ystep;
        error$$1 = error$$1 - dx$$4;
      }
      x$$52 = x$$52 + xstep;
      v534 = x$$52 != toX;
    }
    var diffX2 = toX - fromX;
    var diffY2 = toY - fromY;
    var v1506 = diffX2 * diffX2;
    var v1507 = diffY2 * diffY2;
    var v535 = v1506 + v1507;
    introspect(JAM.policy.p22) {
      return Math.sqrt(v535);
    }
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
    var v1508 = this.errorCorrectionLevel;
    var v1509 = other$$5.errorCorrectionLevel;
    var v536 = v1508 == v1509;
    if (v536) {
      var v1510 = this.dataMask;
      var v1511 = other$$5.dataMask;
      v536 = v1510 == v1511;
    }
    return v536;
  }
  function v29() {
    var v2247 = this.errorCorrectionLevel;
    var v1512 = v2247.ordinal_Renamed_Field;
    var v537 = v1512 << 3;
    return v537 | dataMask;
  }
  function v28() {
    return this.dataMask;
  }
  function v27() {
    return this.errorCorrectionLevel;
  }
  var v1513 = formatInfo >> 3;
  var v538 = v1513 & 3;
  introspect(JAM.policy.p22) {
    var v2803 = ErrorCorrectionLevel.forBits(v538)
  }
  this.errorCorrectionLevel = v2803;
  this.dataMask = formatInfo & 7;
  introspect(JAM.policy.p19) {
    this.__defineGetter__("ErrorCorrectionLevel", v27);
  }
  introspect(JAM.policy.p19) {
    this.__defineGetter__("DataMask", v28);
  }
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
  introspect(JAM.policy.p19) {
    this.__defineGetter__("Bits", v31);
  }
  introspect(JAM.policy.p19) {
    this.__defineGetter__("Name", v32);
  }
  this.ordinal = v33;
  return;
}
function BitMatrix(width$$10) {
  function v41(left$$1, top$$1, width$$11, height$$10) {
    var v1514 = top$$1 < 0;
    var v2248 = !v1514;
    if (v2248) {
      v1514 = left$$1 < 0;
    }
    var v539 = v1514;
    if (v539) {
      throw "Left and top must be nonnegative";
    }
    var v1515 = height$$10 < 1;
    var v2249 = !v1515;
    if (v2249) {
      v1515 = width$$11 < 1;
    }
    var v540 = v1515;
    if (v540) {
      throw "Height and width must be at least 1";
    }
    var right$$1 = left$$1 + width$$11;
    var bottom = top$$1 + height$$10;
    var v2250 = this.height;
    var v1516 = bottom > v2250;
    var v2252 = !v1516;
    if (v2252) {
      var v2251 = this.width;
      v1516 = right$$1 > v2251;
    }
    var v541 = v1516;
    if (v541) {
      throw "The region must fit inside the matrix";
    }
    var y$$39 = top$$1;
    var v546 = y$$39 < bottom;
    for (;v546;) {
      var v542 = this.rowSize;
      var offset$$12 = y$$39 * v542;
      var x$$56 = left$$1;
      var v545 = x$$56 < right$$1;
      for (;v545;) {
        var v543 = this.bits;
        var v1517 = x$$56 >> 5;
        var v544 = offset$$12 + v1517;
        var v2253 = v543[v544];
        var v2535 = x$$56 & 31;
        var v2254 = 1 << v2535;
        v543[v544] = v2253 | v2254;
        x$$56++;
        v545 = x$$56 < right$$1;
      }
      y$$39++;
      v546 = y$$39 < bottom;
    }
    return;
  }
  function v40() {
    var v547 = this.bits;
    var max$$3 = v547.length;
    var i$$10 = 0;
    var v549 = i$$10 < max$$3;
    for (;v549;) {
      var v548 = this.bits;
      v548[i$$10] = 0;
      i$$10++;
      v549 = i$$10 < max$$3;
    }
    return;
  }
  function v39(x$$55, y$$38) {
    var v1518 = this.rowSize;
    var v550 = y$$38 * v1518;
    var v551 = x$$55 >> 5;
    var offset$$11 = v550 + v551;
    var v552 = this.bits;
    var v2255 = v552[offset$$11];
    var v2536 = x$$55 & 31;
    var v2256 = 1 << v2536;
    v552[offset$$11] = v2255 ^ v2256;
    return;
  }
  function v38(x$$54, y$$37) {
    var v1519 = this.rowSize;
    var v553 = y$$37 * v1519;
    var v554 = x$$54 >> 5;
    var offset$$10 = v553 + v554;
    var v555 = this.bits;
    var v2257 = v555[offset$$10];
    var v2537 = x$$54 & 31;
    var v2258 = 1 << v2537;
    v555[offset$$10] = v2257 | v2258;
    return;
  }
  function v37(x$$53, y$$36) {
    var v1520 = this.rowSize;
    var v556 = y$$36 * v1520;
    var v557 = x$$53 >> 5;
    var offset$$9 = v556 + v557;
    var v2538 = this.bits;
    var v2259 = v2538[offset$$9];
    var v2260 = x$$53 & 31;
    var v1521 = URShift(v2259, v2260);
    var v558 = v1521 & 1;
    return v558 != 0;
  }
  function v36() {
    var v1522 = this.width;
    var v1523 = this.height;
    var v559 = v1522 != v1523;
    if (v559) {
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
  var height$$9;
  var v560 = !height$$9;
  if (v560) {
    height$$9 = width$$10;
  }
  var v1524 = width$$10 < 1;
  var v2261 = !v1524;
  if (v2261) {
    v1524 = height$$9 < 1;
  }
  var v561 = v1524;
  if (v561) {
    throw "Both dimensions must be greater than 0";
  }
  this.width = width$$10;
  this.height = height$$9;
  var rowSize = width$$10 >> 5;
  var v1525 = width$$10 & 31;
  var v562 = v1525 != 0;
  if (v562) {
    rowSize++;
  }
  this.rowSize = rowSize;
  var v563 = rowSize * height$$9;
  var v2804 = new Array(v563);
  this.bits = v2804;
  var i$$9 = 0;
  var v2262 = this.bits;
  var v1526 = v2262.length;
  var v565 = i$$9 < v1526;
  for (;v565;) {
    var v564 = this.bits;
    v564[i$$9] = 0;
    i$$9++;
    var v2263 = this.bits;
    var v1527 = v2263.length;
    v565 = i$$9 < v1527;
  }
  introspect(JAM.policy.p19) {
    this.__defineGetter__("Width", v34);
  }
  introspect(JAM.policy.p19) {
    this.__defineGetter__("Height", v35);
  }
  introspect(JAM.policy.p19) {
    this.__defineGetter__("Dimension", v36);
  }
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
  introspect(JAM.policy.p19) {
    this.__defineGetter__("NumDataCodewords", v42);
  }
  introspect(JAM.policy.p19) {
    this.__defineGetter__("Codewords", v43);
  }
  return;
}
function BitMatrixParser(bitMatrix$$1) {
  function v47() {
    var formatInfo$$2 = this.readFormatInformation();
    var version$$6 = this.readVersion();
    var v566 = formatInfo$$2.DataMask;
    introspect(JAM.policy.p22) {
      var dataMask$$1 = DataMask.forReference(v566)
    }
    var v567 = this.bitMatrix;
    var dimension$$11 = v567.Dimension;
    var v568 = this.bitMatrix;
    introspect(JAM.policy.p33) {
      dataMask$$1.unmaskBitMatrix(v568, dimension$$11);
    }
    var functionPattern = version$$6.buildFunctionPattern();
    var readingUp = true;
    var v569 = version$$6.TotalCodewords;
    var result$$2 = new Array(v569);
    var resultOffset = 0;
    var currentByte = 0;
    var bitsRead = 0;
    var j$$4 = dimension$$11 - 1;
    var v578 = j$$4 > 0;
    for (;v578;) {
      var v570 = j$$4 == 6;
      if (v570) {
        j$$4--;
      }
      var count$$4 = 0;
      var v577 = count$$4 < dimension$$11;
      for (;v577;) {
        var v571;
        if (readingUp) {
          var v1528 = dimension$$11 - 1;
          v571 = v1528 - count$$4;
        } else {
          v571 = count$$4;
        }
        var i$$15 = v571;
        var col = 0;
        var v576 = col < 2;
        for (;v576;) {
          var v2264 = j$$4 - col;
          introspect(JAM.policy.p33) {
            var v1529 = functionPattern.get_Renamed(v2264, i$$15)
          }
          var v575 = !v1529;
          if (v575) {
            bitsRead++;
            currentByte = currentByte << 1;
            var v1530 = this.bitMatrix;
            var v1531 = j$$4 - col;
            introspect(JAM.policy.p33) {
              var v572 = v1530.get_Renamed(v1531, i$$15)
            }
            if (v572) {
              currentByte = currentByte | 1;
            }
            var v574 = bitsRead == 8;
            if (v574) {
              var v573 = resultOffset;
              resultOffset = resultOffset + 1;
              result$$2[v573] = currentByte;
              bitsRead = 0;
              currentByte = 0;
            }
          }
          col++;
          v576 = col < 2;
        }
        count$$4++;
        v577 = count$$4 < dimension$$11;
      }
      readingUp = readingUp ^ true;
      j$$4 = j$$4 - 2;
      v578 = j$$4 > 0;
    }
    var v1532 = version$$6.TotalCodewords;
    var v579 = resultOffset != v1532;
    if (v579) {
      throw "Error readCodewords";
    }
    return result$$2;
  }
  function v46() {
    var v1533 = this.parsedVersion;
    var v580 = v1533 != null;
    if (v580) {
      return this.parsedVersion;
    }
    var v581 = this.bitMatrix;
    var dimension$$10 = v581.Dimension;
    var v582 = dimension$$10 - 17;
    var provisionalVersion$$1 = v582 >> 2;
    var v583 = provisionalVersion$$1 <= 6;
    if (v583) {
      introspect(JAM.policy.p22) {
        return Version.getVersionForNumber(provisionalVersion$$1);
      }
    }
    var versionBits$$2 = 0;
    var ijMin = dimension$$10 - 11;
    var j$$3 = 5;
    var v585 = j$$3 >= 0;
    for (;v585;) {
      var i$$14 = dimension$$10 - 9;
      var v584 = i$$14 >= ijMin;
      for (;v584;) {
        introspect(JAM.policy.p23) {
          versionBits$$2 = this.copyBit(i$$14, j$$3, versionBits$$2);
        }
        i$$14--;
        v584 = i$$14 >= ijMin;
      }
      j$$3--;
      v585 = j$$3 >= 0;
    }
    introspect(JAM.policy.p22) {
      var v2805 = Version.decodeVersionInformation(versionBits$$2)
    }
    this.parsedVersion = v2805;
    var v2265 = this.parsedVersion;
    var v1534 = v2265 != null;
    if (v1534) {
      var v2539 = this.parsedVersion;
      var v2266 = v2539.DimensionForVersion;
      v1534 = v2266 == dimension$$10;
    }
    var v586 = v1534;
    if (v586) {
      return this.parsedVersion;
    }
    versionBits$$2 = 0;
    i$$14 = 5;
    var v588 = i$$14 >= 0;
    for (;v588;) {
      j$$3 = dimension$$10 - 9;
      var v587 = j$$3 >= ijMin;
      for (;v587;) {
        introspect(JAM.policy.p23) {
          versionBits$$2 = this.copyBit(i$$14, j$$3, versionBits$$2);
        }
        j$$3--;
        v587 = j$$3 >= ijMin;
      }
      i$$14--;
      v588 = i$$14 >= 0;
    }
    introspect(JAM.policy.p22) {
      var v2806 = Version.decodeVersionInformation(versionBits$$2)
    }
    this.parsedVersion = v2806;
    var v2267 = this.parsedVersion;
    var v1535 = v2267 != null;
    if (v1535) {
      var v2540 = this.parsedVersion;
      var v2268 = v2540.DimensionForVersion;
      v1535 = v2268 == dimension$$10;
    }
    var v589 = v1535;
    if (v589) {
      return this.parsedVersion;
    }
    throw "Error readVersion";
  }
  function v45() {
    var v1536 = this.parsedFormatInfo;
    var v590 = v1536 != null;
    if (v590) {
      return this.parsedFormatInfo;
    }
    var formatInfoBits = 0;
    var i$$13 = 0;
    var v591 = i$$13 < 6;
    for (;v591;) {
      introspect(JAM.policy.p23) {
        formatInfoBits = this.copyBit(i$$13, 8, formatInfoBits);
      }
      i$$13++;
      v591 = i$$13 < 6;
    }
    introspect(JAM.policy.p20) {
      formatInfoBits = this.copyBit(7, 8, formatInfoBits);
    }
    introspect(JAM.policy.p20) {
      formatInfoBits = this.copyBit(8, 8, formatInfoBits);
    }
    introspect(JAM.policy.p20) {
      formatInfoBits = this.copyBit(8, 7, formatInfoBits);
    }
    var j$$2 = 5;
    var v592 = j$$2 >= 0;
    for (;v592;) {
      introspect(JAM.policy.p20) {
        formatInfoBits = this.copyBit(8, j$$2, formatInfoBits);
      }
      j$$2--;
      v592 = j$$2 >= 0;
    }
    introspect(JAM.policy.p22) {
      var v2807 = FormatInformation.decodeFormatInformation(formatInfoBits)
    }
    this.parsedFormatInfo = v2807;
    var v1537 = this.parsedFormatInfo;
    var v593 = v1537 != null;
    if (v593) {
      return this.parsedFormatInfo;
    }
    var v594 = this.bitMatrix;
    var dimension$$9 = v594.Dimension;
    formatInfoBits = 0;
    var iMin = dimension$$9 - 8;
    i$$13 = dimension$$9 - 1;
    var v595 = i$$13 >= iMin;
    for (;v595;) {
      introspect(JAM.policy.p23) {
        formatInfoBits = this.copyBit(i$$13, 8, formatInfoBits);
      }
      i$$13--;
      v595 = i$$13 >= iMin;
    }
    j$$2 = dimension$$9 - 7;
    var v596 = j$$2 < dimension$$9;
    for (;v596;) {
      introspect(JAM.policy.p20) {
        formatInfoBits = this.copyBit(8, j$$2, formatInfoBits);
      }
      j$$2++;
      v596 = j$$2 < dimension$$9;
    }
    introspect(JAM.policy.p22) {
      var v2808 = FormatInformation.decodeFormatInformation(formatInfoBits)
    }
    this.parsedFormatInfo = v2808;
    var v1538 = this.parsedFormatInfo;
    var v597 = v1538 != null;
    if (v597) {
      return this.parsedFormatInfo;
    }
    throw "Error readFormatInformation";
  }
  function v44(i$$12, j$$1, versionBits$$1) {
    var v598;
    var v2269 = this.bitMatrix;
    introspect(JAM.policy.p33) {
      var v1540 = v2269.get_Renamed(i$$12, j$$1)
    }
    if (v1540) {
      var v1539 = versionBits$$1 << 1;
      v598 = v1539 | 1;
    } else {
      v598 = versionBits$$1 << 1;
    }
    return v598;
  }
  var dimension$$8 = bitMatrix$$1.Dimension;
  var v1541 = dimension$$8 < 21;
  var v2271 = !v1541;
  if (v2271) {
    var v2270 = dimension$$8 & 3;
    v1541 = v2270 != 1;
  }
  var v599 = v1541;
  if (v599) {
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
    var v1542 = i$$17 + j$$6;
    var v600 = v1542 & 1;
    return v600 == 0;
  }
  function v48(bits$$5, dimension$$12) {
    var i$$16 = 0;
    var v603 = i$$16 < dimension$$12;
    for (;v603;) {
      var j$$5 = 0;
      var v602 = j$$5 < dimension$$12;
      for (;v602;) {
        introspect(JAM.policy.p33) {
          var v601 = this.isMasked(i$$16, j$$5)
        }
        if (v601) {
          introspect(JAM.policy.p23) {
            bits$$5.flip(j$$5, i$$16);
          }
        }
        j$$5++;
        v602 = j$$5 < dimension$$12;
      }
      i$$16++;
      v603 = i$$16 < dimension$$12;
    }
    return;
  }
  this.unmaskBitMatrix = v48;
  this.isMasked = v49;
  return;
}
function DataMask001() {
  function v51(i$$19, j$$8) {
    var v604 = i$$19 & 1;
    return v604 == 0;
  }
  function v50(bits$$6, dimension$$13) {
    var i$$18 = 0;
    var v607 = i$$18 < dimension$$13;
    for (;v607;) {
      var j$$7 = 0;
      var v606 = j$$7 < dimension$$13;
      for (;v606;) {
        introspect(JAM.policy.p33) {
          var v605 = this.isMasked(i$$18, j$$7)
        }
        if (v605) {
          introspect(JAM.policy.p23) {
            bits$$6.flip(j$$7, i$$18);
          }
        }
        j$$7++;
        v606 = j$$7 < dimension$$13;
      }
      i$$18++;
      v607 = i$$18 < dimension$$13;
    }
    return;
  }
  this.unmaskBitMatrix = v50;
  this.isMasked = v51;
  return;
}
function DataMask010() {
  function v53(i$$21, j$$10) {
    var v608 = j$$10 % 3;
    return v608 == 0;
  }
  function v52(bits$$7, dimension$$14) {
    var i$$20 = 0;
    var v611 = i$$20 < dimension$$14;
    for (;v611;) {
      var j$$9 = 0;
      var v610 = j$$9 < dimension$$14;
      for (;v610;) {
        introspect(JAM.policy.p33) {
          var v609 = this.isMasked(i$$20, j$$9)
        }
        if (v609) {
          introspect(JAM.policy.p23) {
            bits$$7.flip(j$$9, i$$20);
          }
        }
        j$$9++;
        v610 = j$$9 < dimension$$14;
      }
      i$$20++;
      v611 = i$$20 < dimension$$14;
    }
    return;
  }
  this.unmaskBitMatrix = v52;
  this.isMasked = v53;
  return;
}
function DataMask011() {
  function v55(i$$23, j$$12) {
    var v1543 = i$$23 + j$$12;
    var v612 = v1543 % 3;
    return v612 == 0;
  }
  function v54(bits$$8, dimension$$15) {
    var i$$22 = 0;
    var v615 = i$$22 < dimension$$15;
    for (;v615;) {
      var j$$11 = 0;
      var v614 = j$$11 < dimension$$15;
      for (;v614;) {
        introspect(JAM.policy.p33) {
          var v613 = this.isMasked(i$$22, j$$11)
        }
        if (v613) {
          introspect(JAM.policy.p23) {
            bits$$8.flip(j$$11, i$$22);
          }
        }
        j$$11++;
        v614 = j$$11 < dimension$$15;
      }
      i$$22++;
      v615 = i$$22 < dimension$$15;
    }
    return;
  }
  this.unmaskBitMatrix = v54;
  this.isMasked = v55;
  return;
}
function DataMask100() {
  function v57(i$$25, j$$14) {
    var v2272 = URShift(i$$25, 1);
    var v2273 = j$$14 / 3;
    var v1544 = v2272 + v2273;
    var v616 = v1544 & 1;
    return v616 == 0;
  }
  function v56(bits$$9, dimension$$16) {
    var i$$24 = 0;
    var v619 = i$$24 < dimension$$16;
    for (;v619;) {
      var j$$13 = 0;
      var v618 = j$$13 < dimension$$16;
      for (;v618;) {
        introspect(JAM.policy.p33) {
          var v617 = this.isMasked(i$$24, j$$13)
        }
        if (v617) {
          introspect(JAM.policy.p23) {
            bits$$9.flip(j$$13, i$$24);
          }
        }
        j$$13++;
        v618 = j$$13 < dimension$$16;
      }
      i$$24++;
      v619 = i$$24 < dimension$$16;
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
    var v1545 = temp$$1 & 1;
    var v1546 = temp$$1 % 3;
    var v620 = v1545 + v1546;
    return v620 == 0;
  }
  function v58(bits$$10, dimension$$17) {
    var i$$26 = 0;
    var v623 = i$$26 < dimension$$17;
    for (;v623;) {
      var j$$15 = 0;
      var v622 = j$$15 < dimension$$17;
      for (;v622;) {
        introspect(JAM.policy.p33) {
          var v621 = this.isMasked(i$$26, j$$15)
        }
        if (v621) {
          introspect(JAM.policy.p23) {
            bits$$10.flip(j$$15, i$$26);
          }
        }
        j$$15++;
        v622 = j$$15 < dimension$$17;
      }
      i$$26++;
      v623 = i$$26 < dimension$$17;
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
    var v2274 = temp$$2 & 1;
    var v2275 = temp$$2 % 3;
    var v1547 = v2274 + v2275;
    var v624 = v1547 & 1;
    return v624 == 0;
  }
  function v60(bits$$11, dimension$$18) {
    var i$$28 = 0;
    var v627 = i$$28 < dimension$$18;
    for (;v627;) {
      var j$$17 = 0;
      var v626 = j$$17 < dimension$$18;
      for (;v626;) {
        introspect(JAM.policy.p33) {
          var v625 = this.isMasked(i$$28, j$$17)
        }
        if (v625) {
          introspect(JAM.policy.p23) {
            bits$$11.flip(j$$17, i$$28);
          }
        }
        j$$17++;
        v626 = j$$17 < dimension$$18;
      }
      i$$28++;
      v627 = i$$28 < dimension$$18;
    }
    return;
  }
  this.unmaskBitMatrix = v60;
  this.isMasked = v61;
  return;
}
function DataMask111() {
  function v63(i$$31, j$$20) {
    var v2541 = i$$31 + j$$20;
    var v2276 = v2541 & 1;
    var v2542 = i$$31 * j$$20;
    var v2277 = v2542 % 3;
    var v1548 = v2276 + v2277;
    var v628 = v1548 & 1;
    return v628 == 0;
  }
  function v62(bits$$12, dimension$$19) {
    var i$$30 = 0;
    var v631 = i$$30 < dimension$$19;
    for (;v631;) {
      var j$$19 = 0;
      var v630 = j$$19 < dimension$$19;
      for (;v630;) {
        introspect(JAM.policy.p33) {
          var v629 = this.isMasked(i$$30, j$$19)
        }
        if (v629) {
          introspect(JAM.policy.p23) {
            bits$$12.flip(j$$19, i$$30);
          }
        }
        j$$19++;
        v630 = j$$19 < dimension$$19;
      }
      i$$30++;
      v631 = i$$30 < dimension$$19;
    }
    return;
  }
  this.unmaskBitMatrix = v62;
  this.isMasked = v63;
  return;
}
function ReedSolomonDecoder() {
  function v67(errorEvaluator, errorLocations$$1, dataMatrix$$1) {
    var s$$3 = errorLocations$$1.length;
    var result$$4 = new Array(s$$3);
    var i$$34 = 0;
    var v643 = i$$34 < s$$3;
    for (;v643;) {
      var v632 = this.field;
      var v633 = errorLocations$$1[i$$34];
      introspect(JAM.policy.p22) {
        var xiInverse = v632.inverse(v633)
      }
      var denominator$$3 = 1;
      var j$$21 = 0;
      var v637 = j$$21 < s$$3;
      for (;v637;) {
        var v636 = i$$34 != j$$21;
        if (v636) {
          var v634 = this.field;
          var v2278 = this.field;
          var v2279 = errorLocations$$1[j$$21];
          introspect(JAM.policy.p33) {
            var v1549 = v2278.multiply(v2279, xiInverse)
          }
          introspect(JAM.policy.p20) {
            var v635 = GF256.addOrSubtract(1, v1549)
          }
          introspect(JAM.policy.p33) {
            denominator$$3 = v634.multiply(denominator$$3, v635);
          }
        }
        j$$21++;
        v637 = j$$21 < s$$3;
      }
      var v638 = this.field;
      introspect(JAM.policy.p22) {
        var v639 = errorEvaluator.evaluateAt(xiInverse)
      }
      var v1550 = this.field;
      introspect(JAM.policy.p22) {
        var v640 = v1550.inverse(denominator$$3)
      }
      introspect(JAM.policy.p33) {
        var v2809 = v638.multiply(v639, v640)
      }
      result$$4[i$$34] = v2809;
      if (dataMatrix$$1) {
        var v641 = this.field;
        var v642 = result$$4[i$$34];
        introspect(JAM.policy.p33) {
          var v2810 = v641.multiply(v642, xiInverse)
        }
        result$$4[i$$34] = v2810;
      }
      i$$34++;
      v643 = i$$34 < s$$3;
    }
    return result$$4;
  }
  function v66(errorLocator) {
    var numErrors = errorLocator.Degree;
    var v645 = numErrors == 1;
    if (v645) {
      introspect(JAM.policy.p18) {
        var v644 = errorLocator.getCoefficient(1)
      }
      return new Array(v644);
    }
    var result$$3 = new Array(numErrors);
    var e$$4 = 0;
    var i$$33 = 1;
    var v1551 = i$$33 < 256;
    if (v1551) {
      v1551 = e$$4 < numErrors;
    }
    var v648 = v1551;
    for (;v648;) {
      introspect(JAM.policy.p22) {
        var v1552 = errorLocator.evaluateAt(i$$33)
      }
      var v647 = v1552 == 0;
      if (v647) {
        var v646 = this.field;
        introspect(JAM.policy.p22) {
          var v2811 = v646.inverse(i$$33)
        }
        result$$3[e$$4] = v2811;
        e$$4++;
      }
      i$$33++;
      var v1553 = i$$33 < 256;
      if (v1553) {
        v1553 = e$$4 < numErrors;
      }
      v648 = v1553;
    }
    var v649 = e$$4 != numErrors;
    if (v649) {
      throw "Error locator degree does not match number of roots";
    }
    return result$$3;
  }
  function v65(a$$1, b$$2, R) {
    var v1554 = a$$1.Degree;
    var v1555 = b$$2.Degree;
    var v650 = v1554 < v1555;
    if (v650) {
      var temp$$3 = a$$1;
      a$$1 = b$$2;
      b$$2 = temp$$3;
    }
    var rLast = a$$1;
    var r$$1 = b$$2;
    var v651 = this.field;
    var sLast = v651.One;
    var v652 = this.field;
    var s$$2 = v652.Zero;
    var v653 = this.field;
    var tLast = v653.Zero;
    var v654 = this.field;
    var t = v654.One;
    var v1556 = r$$1.Degree;
    var v2280 = R / 2;
    introspect(JAM.policy.p22) {
      var v1557 = Math.floor(v2280)
    }
    var v668 = v1556 >= v1557;
    for (;v668;) {
      var rLastLast = rLast;
      var sLastLast = sLast;
      var tLastLast = tLast;
      rLast = r$$1;
      sLast = s$$2;
      tLast = t;
      var v655 = rLast.Zero;
      if (v655) {
        throw "r_{i-1} was zero";
      }
      r$$1 = rLastLast;
      var v656 = this.field;
      var q = v656.Zero;
      var v657 = rLast.Degree;
      introspect(JAM.policy.p22) {
        var denominatorLeadingTerm = rLast.getCoefficient(v657)
      }
      var v658 = this.field;
      introspect(JAM.policy.p22) {
        var dltInverse = v658.inverse(denominatorLeadingTerm)
      }
      var v2281 = r$$1.Degree;
      var v2282 = rLast.Degree;
      var v1558 = v2281 >= v2282;
      if (v1558) {
        var v2283 = r$$1.Zero;
        v1558 = !v2283;
      }
      var v665 = v1558;
      for (;v665;) {
        var v659 = r$$1.Degree;
        var v660 = rLast.Degree;
        var degreeDiff = v659 - v660;
        var v661 = this.field;
        var v1559 = r$$1.Degree;
        introspect(JAM.policy.p22) {
          var v662 = r$$1.getCoefficient(v1559)
        }
        introspect(JAM.policy.p33) {
          var scale$$1 = v661.multiply(v662, dltInverse)
        }
        var v1560 = this.field;
        introspect(JAM.policy.p33) {
          var v663 = v1560.buildMonomial(degreeDiff, scale$$1)
        }
        introspect(JAM.policy.p22) {
          q = q.addOrSubtract(v663);
        }
        introspect(JAM.policy.p33) {
          var v664 = rLast.multiplyByMonomial(degreeDiff, scale$$1)
        }
        introspect(JAM.policy.p22) {
          r$$1 = r$$1.addOrSubtract(v664);
        }
        var v2284 = r$$1.Degree;
        var v2285 = rLast.Degree;
        var v1561 = v2284 >= v2285;
        if (v1561) {
          var v2286 = r$$1.Zero;
          v1561 = !v2286;
        }
        v665 = v1561;
      }
      introspect(JAM.policy.p22) {
        var v666 = q.multiply1(sLast)
      }
      introspect(JAM.policy.p22) {
        s$$2 = v666.addOrSubtract(sLastLast);
      }
      introspect(JAM.policy.p22) {
        var v667 = q.multiply1(tLast)
      }
      introspect(JAM.policy.p22) {
        t = v667.addOrSubtract(tLastLast);
      }
      var v1562 = r$$1.Degree;
      var v2287 = R / 2;
      introspect(JAM.policy.p22) {
        var v1563 = Math.floor(v2287)
      }
      v668 = v1562 >= v1563;
    }
    introspect(JAM.policy.p18) {
      var sigmaTildeAtZero = t.getCoefficient(0)
    }
    var v669 = sigmaTildeAtZero == 0;
    if (v669) {
      throw "ReedSolomonException sigmaTilde(0) was zero";
    }
    var v670 = this.field;
    introspect(JAM.policy.p22) {
      var inverse = v670.inverse(sigmaTildeAtZero)
    }
    introspect(JAM.policy.p22) {
      var sigma$$1 = t.multiply2(inverse)
    }
    introspect(JAM.policy.p22) {
      var omega$$1 = r$$1.multiply2(inverse)
    }
    return new Array(sigma$$1, omega$$1);
  }
  function v64(received, twoS) {
    var v671 = this.field;
    var poly = new GF256Poly(v671, received);
    var syndromeCoefficients = new Array(twoS);
    var i$$32 = 0;
    var v1564 = syndromeCoefficients.length;
    var v672 = i$$32 < v1564;
    for (;v672;) {
      syndromeCoefficients[i$$32] = 0;
      i$$32++;
      var v1565 = syndromeCoefficients.length;
      v672 = i$$32 < v1565;
    }
    var dataMatrix = false;
    var noError = true;
    i$$32 = 0;
    var v676 = i$$32 < twoS;
    for (;v676;) {
      var v1566 = this.field;
      var v2288;
      if (dataMatrix) {
        v2288 = i$$32 + 1;
      } else {
        v2288 = i$$32;
      }
      var v1567 = v2288;
      introspect(JAM.policy.p22) {
        var v673 = v1566.exp(v1567)
      }
      introspect(JAM.policy.p22) {
        var eval$$1 = poly.evaluateAt(v673)
      }
      var v2289 = syndromeCoefficients.length;
      var v1568 = v2289 - 1;
      var v674 = v1568 - i$$32;
      syndromeCoefficients[v674] = eval$$1;
      var v675 = eval$$1 != 0;
      if (v675) {
        noError = false;
      }
      i$$32++;
      v676 = i$$32 < twoS;
    }
    if (noError) {
      return;
    }
    var v677 = this.field;
    var syndrome = new GF256Poly(v677, syndromeCoefficients);
    var v1569 = this.field;
    introspect(JAM.policy.p25) {
      var v678 = v1569.buildMonomial(twoS, 1)
    }
    introspect(JAM.policy.p33) {
      var sigmaOmega = this.runEuclideanAlgorithm(v678, syndrome, twoS)
    }
    var sigma = sigmaOmega[0];
    var omega = sigmaOmega[1];
    introspect(JAM.policy.p22) {
      var errorLocations = this.findErrorLocations(sigma)
    }
    introspect(JAM.policy.p33) {
      var errorMagnitudes = this.findErrorMagnitudes(omega, errorLocations, dataMatrix)
    }
    i$$32 = 0;
    var v1570 = errorLocations.length;
    var v684 = i$$32 < v1570;
    for (;v684;) {
      var v1571 = received.length;
      var v679 = v1571 - 1;
      var v1572 = this.field;
      var v1573 = errorLocations[i$$32];
      introspect(JAM.policy.p22) {
        var v680 = v1572.log(v1573)
      }
      var position = v679 - v680;
      var v681 = position < 0;
      if (v681) {
        throw "ReedSolomonException Bad error location";
      }
      var v682 = received[position];
      var v683 = errorMagnitudes[i$$32];
      introspect(JAM.policy.p33) {
        var v2812 = GF256.addOrSubtract(v682, v683)
      }
      received[position] = v2812;
      i$$32++;
      var v1574 = errorLocations.length;
      v684 = i$$32 < v1574;
    }
    return;
  }
  var field = GF256.QR_CODE_FIELD;
  this.field = field;
  this.decode = v64;
  this.runEuclideanAlgorithm = v65;
  this.findErrorLocations = v66;
  this.findErrorMagnitudes = v67;
  return;
}
function GF256Poly(field$$1, coefficients) {
  function v77(other$$8) {
    var v1575 = this.field;
    var v1576 = other$$8.field;
    var v685 = v1575 != v1576;
    if (v685) {
      throw "GF256Polys do not have same GF256 field";
    }
    var v686 = other$$8.Zero;
    if (v686) {
      throw "Divide by 0";
    }
    var v687 = this.field;
    var quotient = v687.Zero;
    var remainder = this;
    var v688 = other$$8.Degree;
    introspect(JAM.policy.p22) {
      var denominatorLeadingTerm$$1 = other$$8.getCoefficient(v688)
    }
    var v689 = this.field;
    introspect(JAM.policy.p22) {
      var inverseDenominatorLeadingTerm = v689.inverse(denominatorLeadingTerm$$1)
    }
    var v2290 = remainder.Degree;
    var v2291 = other$$8.Degree;
    var v1577 = v2290 >= v2291;
    if (v1577) {
      var v2292 = remainder.Zero;
      v1577 = !v2292;
    }
    var v695 = v1577;
    for (;v695;) {
      var v690 = remainder.Degree;
      var v691 = other$$8.Degree;
      var degreeDifference = v690 - v691;
      var v692 = this.field;
      var v1578 = remainder.Degree;
      introspect(JAM.policy.p22) {
        var v693 = remainder.getCoefficient(v1578)
      }
      introspect(JAM.policy.p33) {
        var scale$$2 = v692.multiply(v693, inverseDenominatorLeadingTerm)
      }
      introspect(JAM.policy.p33) {
        var term = other$$8.multiplyByMonomial(degreeDifference, scale$$2)
      }
      var v694 = this.field;
      introspect(JAM.policy.p33) {
        var iterationQuotient = v694.buildMonomial(degreeDifference, scale$$2)
      }
      introspect(JAM.policy.p22) {
        quotient = quotient.addOrSubtract(iterationQuotient);
      }
      introspect(JAM.policy.p22) {
        remainder = remainder.addOrSubtract(term);
      }
      var v2293 = remainder.Degree;
      var v2294 = other$$8.Degree;
      var v1579 = v2293 >= v2294;
      if (v1579) {
        var v2295 = remainder.Zero;
        v1579 = !v2295;
      }
      v695 = v1579;
    }
    return new Array(quotient, remainder);
  }
  function v76(degree$$1, coefficient) {
    var v696 = degree$$1 < 0;
    if (v696) {
      throw "System.ArgumentException";
    }
    var v698 = coefficient == 0;
    if (v698) {
      var v697 = this.field;
      return v697.Zero;
    }
    var v699 = this.coefficients;
    var size$$6 = v699.length;
    var v700 = size$$6 + degree$$1;
    var product$$2 = new Array(v700);
    var i$$40 = 0;
    var v1580 = product$$2.length;
    var v701 = i$$40 < v1580;
    for (;v701;) {
      product$$2[i$$40] = 0;
      i$$40++;
      var v1581 = product$$2.length;
      v701 = i$$40 < v1581;
    }
    i$$40 = 0;
    var v704 = i$$40 < size$$6;
    for (;v704;) {
      var v702 = this.field;
      var v1582 = this.coefficients;
      var v703 = v1582[i$$40];
      introspect(JAM.policy.p33) {
        var v2813 = v702.multiply(v703, coefficient)
      }
      product$$2[i$$40] = v2813;
      i$$40++;
      v704 = i$$40 < size$$6;
    }
    var v705 = this.field;
    return new GF256Poly(v705, product$$2);
  }
  function v75(scalar) {
    var v707 = scalar == 0;
    if (v707) {
      var v706 = this.field;
      return v706.Zero;
    }
    var v708 = scalar == 1;
    if (v708) {
      return this;
    }
    var v709 = this.coefficients;
    var size$$5 = v709.length;
    var product$$1 = new Array(size$$5);
    var i$$39 = 0;
    var v712 = i$$39 < size$$5;
    for (;v712;) {
      var v710 = this.field;
      var v1583 = this.coefficients;
      var v711 = v1583[i$$39];
      introspect(JAM.policy.p33) {
        var v2814 = v710.multiply(v711, scalar)
      }
      product$$1[i$$39] = v2814;
      i$$39++;
      v712 = i$$39 < size$$5;
    }
    var v713 = this.field;
    return new GF256Poly(v713, product$$1);
  }
  function v74(other$$7) {
    var v1584 = this.field;
    var v1585 = other$$7.field;
    var v714 = v1584 != v1585;
    if (v714) {
      throw "GF256Polys do not have same GF256 field";
    }
    var v1586 = this.Zero;
    var v2296 = !v1586;
    if (v2296) {
      v1586 = other$$7.Zero;
    }
    var v716 = v1586;
    if (v716) {
      var v715 = this.field;
      return v715.Zero;
    }
    var aCoefficients = this.coefficients;
    var aLength = aCoefficients.length;
    var bCoefficients = other$$7.coefficients;
    var bLength = bCoefficients.length;
    var v1587 = aLength + bLength;
    var v717 = v1587 - 1;
    var product = new Array(v717);
    var i$$38 = 0;
    var v720 = i$$38 < aLength;
    for (;v720;) {
      var aCoeff = aCoefficients[i$$38];
      var j$$22 = 0;
      var v719 = j$$22 < bLength;
      for (;v719;) {
        var v718 = i$$38 + j$$22;
        var v2297 = i$$38 + j$$22;
        var v1588 = product[v2297];
        var v2298 = this.field;
        var v2299 = bCoefficients[j$$22];
        introspect(JAM.policy.p33) {
          var v1589 = v2298.multiply(aCoeff, v2299)
        }
        introspect(JAM.policy.p33) {
          var v2815 = GF256.addOrSubtract(v1588, v1589)
        }
        product[v718] = v2815;
        j$$22++;
        v719 = j$$22 < bLength;
      }
      i$$38++;
      v720 = i$$38 < aLength;
    }
    var v721 = this.field;
    return new GF256Poly(v721, product);
  }
  function v73(other$$6) {
    var v1590 = this.field;
    var v1591 = other$$6.field;
    var v722 = v1590 != v1591;
    if (v722) {
      throw "GF256Polys do not have same GF256 field";
    }
    var v723 = this.Zero;
    if (v723) {
      return other$$6;
    }
    var v724 = other$$6.Zero;
    if (v724) {
      return this;
    }
    var smallerCoefficients = this.coefficients;
    var largerCoefficients = other$$6.coefficients;
    var v1592 = smallerCoefficients.length;
    var v1593 = largerCoefficients.length;
    var v725 = v1592 > v1593;
    if (v725) {
      var temp$$4 = smallerCoefficients;
      smallerCoefficients = largerCoefficients;
      largerCoefficients = temp$$4;
    }
    var v726 = largerCoefficients.length;
    var sumDiff = new Array(v726);
    var v727 = largerCoefficients.length;
    var v728 = smallerCoefficients.length;
    var lengthDiff = v727 - v728;
    var ci$$1 = 0;
    var v729 = ci$$1 < lengthDiff;
    for (;v729;) {
      sumDiff[ci$$1] = largerCoefficients[ci$$1];
      ci$$1++;
      v729 = ci$$1 < lengthDiff;
    }
    var i$$37 = lengthDiff;
    var v1594 = largerCoefficients.length;
    var v732 = i$$37 < v1594;
    for (;v732;) {
      var v1595 = i$$37 - lengthDiff;
      var v730 = smallerCoefficients[v1595];
      var v731 = largerCoefficients[i$$37];
      introspect(JAM.policy.p33) {
        var v2816 = GF256.addOrSubtract(v730, v731)
      }
      sumDiff[i$$37] = v2816;
      i$$37++;
      var v1596 = largerCoefficients.length;
      v732 = i$$37 < v1596;
    }
    return new GF256Poly(field$$1, sumDiff);
  }
  function v72(a$$2) {
    var v733 = a$$2 == 0;
    if (v733) {
      introspect(JAM.policy.p18) {
        return this.getCoefficient(0);
      }
    }
    var v734 = this.coefficients;
    var size$$4 = v734.length;
    var v737 = a$$2 == 1;
    if (v737) {
      var result$$5 = 0;
      var i$$36 = 0;
      var v736 = i$$36 < size$$4;
      for (;v736;) {
        var v1597 = this.coefficients;
        var v735 = v1597[i$$36];
        introspect(JAM.policy.p33) {
          result$$5 = GF256.addOrSubtract(result$$5, v735);
        }
        i$$36++;
        v736 = i$$36 < size$$4;
      }
      return result$$5;
    }
    var v738 = this.coefficients;
    var result2 = v738[0];
    i$$36 = 1;
    var v741 = i$$36 < size$$4;
    for (;v741;) {
      var v1598 = this.field;
      introspect(JAM.policy.p33) {
        var v739 = v1598.multiply(a$$2, result2)
      }
      var v1599 = this.coefficients;
      var v740 = v1599[i$$36];
      introspect(JAM.policy.p33) {
        result2 = GF256.addOrSubtract(v739, v740);
      }
      i$$36++;
      v741 = i$$36 < size$$4;
    }
    return result2;
  }
  function v71(degree) {
    var v742 = this.coefficients;
    var v2543 = this.coefficients;
    var v2300 = v2543.length;
    var v1600 = v2300 - 1;
    var v743 = v1600 - degree;
    return v742[v743];
  }
  function v70() {
    return this.coefficients;
  }
  function v69() {
    var v1601 = this.coefficients;
    var v744 = v1601.length;
    return v744 - 1;
  }
  function v68() {
    var v1602 = this.coefficients;
    var v745 = v1602[0];
    return v745 == 0;
  }
  var v1603 = coefficients == null;
  var v2302 = !v1603;
  if (v2302) {
    var v2301 = coefficients.length;
    v1603 = v2301 == 0;
  }
  var v746 = v1603;
  if (v746) {
    throw "System.ArgumentException";
  }
  this.field = field$$1;
  var coefficientsLength = coefficients.length;
  var v1604 = coefficientsLength > 1;
  if (v1604) {
    var v2303 = coefficients[0];
    v1604 = v2303 == 0;
  }
  var v755 = v1604;
  if (v755) {
    var firstNonZero = 1;
    var v1605 = firstNonZero < coefficientsLength;
    if (v1605) {
      var v2304 = coefficients[firstNonZero];
      v1605 = v2304 == 0;
    }
    var v747 = v1605;
    for (;v747;) {
      firstNonZero++;
      var v1606 = firstNonZero < coefficientsLength;
      if (v1606) {
        var v2305 = coefficients[firstNonZero];
        v1606 = v2305 == 0;
      }
      v747 = v1606;
    }
    var v754 = firstNonZero == coefficientsLength;
    if (v754) {
      var v748 = field$$1.Zero;
      this.coefficients = v748.coefficients;
    } else {
      var v749 = coefficientsLength - firstNonZero;
      var v2817 = new Array(v749);
      this.coefficients = v2817;
      var i$$35 = 0;
      var v2306 = this.coefficients;
      var v1607 = v2306.length;
      var v751 = i$$35 < v1607;
      for (;v751;) {
        var v750 = this.coefficients;
        v750[i$$35] = 0;
        i$$35++;
        var v2307 = this.coefficients;
        var v1608 = v2307.length;
        v751 = i$$35 < v1608;
      }
      var ci = 0;
      var v2308 = this.coefficients;
      var v1609 = v2308.length;
      var v753 = ci < v1609;
      for (;v753;) {
        var v752 = this.coefficients;
        var v1610 = firstNonZero + ci;
        v752[ci] = coefficients[v1610];
        ci++;
        var v2309 = this.coefficients;
        var v1611 = v2309.length;
        v753 = ci < v1611;
      }
    }
  } else {
    this.coefficients = coefficients;
  }
  introspect(JAM.policy.p19) {
    this.__defineGetter__("Zero", v68);
  }
  introspect(JAM.policy.p19) {
    this.__defineGetter__("Degree", v69);
  }
  introspect(JAM.policy.p19) {
    this.__defineGetter__("Coefficients", v70);
  }
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
    var v1612 = a$$6 == 0;
    var v2310 = !v1612;
    if (v2310) {
      v1612 = b$$3 == 0;
    }
    var v756 = v1612;
    if (v756) {
      return 0;
    }
    var v757 = a$$6 == 1;
    if (v757) {
      return b$$3;
    }
    var v758 = b$$3 == 1;
    if (v758) {
      return a$$6;
    }
    var v759 = this.expTable;
    var v2544 = this.logTable;
    var v2311 = v2544[a$$6];
    var v2545 = this.logTable;
    var v2312 = v2545[b$$3];
    var v1613 = v2311 + v2312;
    var v760 = v1613 % 255;
    return v759[v760];
  }
  function v83(a$$5) {
    var v761 = a$$5 == 0;
    if (v761) {
      throw "System.ArithmeticException";
    }
    var v762 = this.expTable;
    var v2313 = this.logTable;
    var v1614 = v2313[a$$5];
    var v763 = 255 - v1614;
    return v762[v763];
  }
  function v82(a$$4) {
    var v764 = a$$4 == 0;
    if (v764) {
      throw "System.ArgumentException";
    }
    var v765 = this.logTable;
    return v765[a$$4];
  }
  function v81(a$$3) {
    var v766 = this.expTable;
    return v766[a$$3];
  }
  function v80(degree$$2, coefficient$$1) {
    var v767 = degree$$2 < 0;
    if (v767) {
      throw "System.ArgumentException";
    }
    var v768 = coefficient$$1 == 0;
    if (v768) {
      return zero;
    }
    var v769 = degree$$2 + 1;
    var coefficients$$1 = new Array(v769);
    var i$$42 = 0;
    var v1615 = coefficients$$1.length;
    var v770 = i$$42 < v1615;
    for (;v770;) {
      coefficients$$1[i$$42] = 0;
      i$$42++;
      var v1616 = coefficients$$1.length;
      v770 = i$$42 < v1616;
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
  var v2818 = new Array(256);
  this.expTable = v2818;
  var v2819 = new Array(256);
  this.logTable = v2819;
  var x$$57 = 1;
  var i$$41 = 0;
  var v773 = i$$41 < 256;
  for (;v773;) {
    var v771 = this.expTable;
    v771[i$$41] = x$$57;
    x$$57 = x$$57 << 1;
    var v772 = x$$57 >= 256;
    if (v772) {
      x$$57 = x$$57 ^ primitive;
    }
    i$$41++;
    v773 = i$$41 < 256;
  }
  i$$41 = 0;
  var v776 = i$$41 < 255;
  for (;v776;) {
    var v774 = this.logTable;
    var v1617 = this.expTable;
    var v775 = v1617[i$$41];
    introspect(JAM.policy.p6) {
      v774[v775] = i$$41;
    }
    i$$41++;
    v776 = i$$41 < 255;
  }
  var at0 = new Array(1);
  at0[0] = 0;
  var v777 = new Array(at0);
  var v2820 = new GF256Poly(this, v777);
  this.zero = v2820;
  var at1 = new Array(1);
  at1[0] = 1;
  var v778 = new Array(at1);
  var v2821 = new GF256Poly(this, v778);
  this.one = v2821;
  introspect(JAM.policy.p19) {
    this.__defineGetter__("Zero", v78);
  }
  introspect(JAM.policy.p19) {
    this.__defineGetter__("One", v79);
  }
  this.buildMonomial = v80;
  this.exp = v81;
  this.log = v82;
  this.inverse = v83;
  this.multiply = v84;
  return;
}
function URShift(number, bits$$14) {
  var v781 = number >= 0;
  if (v781) {
    return number >> bits$$14;
  } else {
    var v779 = number >> bits$$14;
    var v1618 = ~bits$$14;
    var v780 = 2 << v1618;
    return v779 + v780;
  }
  return;
}
function FinderPattern(posX, posY, estimatedModuleSize) {
  function v90(moduleSize$$2, i$$47, j$$25) {
    var v2655 = this.y;
    var v2546 = i$$47 - v2655;
    introspect(JAM.policy.p22) {
      var v2314 = Math.abs(v2546)
    }
    var v1619 = v2314 <= moduleSize$$2;
    if (v1619) {
      var v2656 = this.x;
      var v2547 = j$$25 - v2656;
      introspect(JAM.policy.p22) {
        var v2315 = Math.abs(v2547)
      }
      v1619 = v2315 <= moduleSize$$2;
    }
    var v784 = v1619;
    if (v784) {
      var v1620 = this.estimatedModuleSize;
      var v782 = moduleSize$$2 - v1620;
      introspect(JAM.policy.p22) {
        var moduleSizeDiff = Math.abs(v782)
      }
      var v783 = moduleSizeDiff <= 1;
      var v1622 = !v783;
      if (v1622) {
        var v2316 = this.estimatedModuleSize;
        var v1621 = moduleSizeDiff / v2316;
        v783 = v1621 <= 1;
      }
      return v783;
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
  introspect(JAM.policy.p19) {
    this.__defineGetter__("EstimatedModuleSize", v85);
  }
  introspect(JAM.policy.p19) {
    this.__defineGetter__("Count", v86);
  }
  introspect(JAM.policy.p19) {
    this.__defineGetter__("X", v87);
  }
  introspect(JAM.policy.p19) {
    this.__defineGetter__("Y", v88);
  }
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
  introspect(JAM.policy.p19) {
    this.__defineGetter__("BottomLeft", v91);
  }
  introspect(JAM.policy.p19) {
    this.__defineGetter__("TopLeft", v92);
  }
  introspect(JAM.policy.p19) {
    this.__defineGetter__("TopRight", v93);
  }
  return;
}
function FinderPatternFinder() {
  function v104(image$$12) {
    var tryHarder = false;
    this.image = image$$12;
    var maxI$$1 = qrcode.height;
    var maxJ$$1 = qrcode.width;
    var v1623 = 3 * maxI$$1;
    var v1624 = 4 * MAX_MODULES;
    var v785 = v1623 / v1624;
    introspect(JAM.policy.p22) {
      var iSkip = Math.floor(v785)
    }
    var v1625 = iSkip < MIN_SKIP;
    var v2317 = !v1625;
    if (v2317) {
      v1625 = tryHarder;
    }
    var v786 = v1625;
    if (v786) {
      iSkip = MIN_SKIP;
    }
    var done = false;
    var stateCount$$5 = new Array(5);
    var i$$54 = iSkip - 1;
    var v1626 = i$$54 < maxI$$1;
    if (v1626) {
      v1626 = !done;
    }
    var v798 = v1626;
    for (;v798;) {
      stateCount$$5[0] = 0;
      stateCount$$5[1] = 0;
      stateCount$$5[2] = 0;
      stateCount$$5[3] = 0;
      stateCount$$5[4] = 0;
      var currentState = 0;
      var j$$28 = 0;
      var v795 = j$$28 < maxJ$$1;
      for (;v795;) {
        var v2548 = qrcode.width;
        var v2318 = i$$54 * v2548;
        var v1627 = j$$28 + v2318;
        var v794 = image$$12[v1627];
        if (v794) {
          var v1628 = currentState & 1;
          var v787 = v1628 == 1;
          if (v787) {
            currentState++;
          }
          stateCount$$5[currentState]++;
        } else {
          var v1629 = currentState & 1;
          var v793 = v1629 == 0;
          if (v793) {
            var v792 = currentState == 4;
            if (v792) {
              introspect(JAM.policy.p22) {
                var v791 = this.foundPatternCross(stateCount$$5)
              }
              if (v791) {
                introspect(JAM.policy.p33) {
                  var confirmed = this.handlePossibleCenter(stateCount$$5, i$$54, j$$28)
                }
                if (confirmed) {
                  iSkip = 2;
                  var v789 = this.hasSkipped;
                  if (v789) {
                    done = this.haveMultiplyConfirmedCenters();
                  } else {
                    var rowSkip = this.findRowSkip();
                    var v1630 = stateCount$$5[2];
                    var v788 = rowSkip > v1630;
                    if (v788) {
                      var v2549 = stateCount$$5[2];
                      var v2319 = rowSkip - v2549;
                      var v1631 = v2319 - iSkip;
                      i$$54 = i$$54 + v1631;
                      j$$28 = maxJ$$1 - 1;
                    }
                  }
                } else {
                  var v1632 = j$$28 < maxJ$$1;
                  if (v1632) {
                    var v2725 = qrcode.width;
                    var v2657 = i$$54 * v2725;
                    var v2550 = j$$28 + v2657;
                    var v2320 = image$$12[v2550];
                    v1632 = !v2320;
                  }
                  var v790 = v1632;
                  do {
                    j$$28++;
                    var v1633 = j$$28 < maxJ$$1;
                    if (v1633) {
                      var v2726 = qrcode.width;
                      var v2658 = i$$54 * v2726;
                      var v2551 = j$$28 + v2658;
                      var v2321 = image$$12[v2551];
                      v1633 = !v2321;
                    }
                    v790 = v1633;
                  } while (v790);
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
        v795 = j$$28 < maxJ$$1;
      }
      introspect(JAM.policy.p22) {
        var v797 = this.foundPatternCross(stateCount$$5)
      }
      if (v797) {
        introspect(JAM.policy.p33) {
          confirmed = this.handlePossibleCenter(stateCount$$5, i$$54, maxJ$$1);
        }
        if (confirmed) {
          iSkip = stateCount$$5[0];
          var v796 = this.hasSkipped;
          if (v796) {
            done = haveMultiplyConfirmedCenters();
          }
        }
      }
      i$$54 = i$$54 + iSkip;
      var v1634 = i$$54 < maxI$$1;
      if (v1634) {
        v1634 = !done;
      }
      v798 = v1634;
    }
    var patternInfo = this.selectBestPatterns();
    introspect(JAM.policy.p22) {
      qrcode.orderBestPatterns(patternInfo);
    }
    return new FinderPatternInfo(patternInfo);
  }
  function v103() {
    var confirmedCount = 0;
    var totalModuleSize$$2 = 0;
    var v799 = this.possibleCenters;
    var max$$7 = v799.length;
    var i$$53 = 0;
    var v802 = i$$53 < max$$7;
    for (;v802;) {
      var v800 = this.possibleCenters;
      var pattern$$3 = v800[i$$53];
      var v1635 = pattern$$3.Count;
      var v801 = v1635 >= CENTER_QUORUM;
      if (v801) {
        confirmedCount++;
        var v1636 = pattern$$3.EstimatedModuleSize;
        totalModuleSize$$2 = totalModuleSize$$2 + v1636;
      }
      i$$53++;
      v802 = i$$53 < max$$7;
    }
    var v803 = confirmedCount < 3;
    if (v803) {
      return false;
    }
    var average$$1 = totalModuleSize$$2 / max$$7;
    var totalDeviation = 0;
    i$$53 = 0;
    var v805 = i$$53 < max$$7;
    for (;v805;) {
      var v804 = this.possibleCenters;
      pattern$$3 = v804[i$$53];
      var v2552 = pattern$$3.EstimatedModuleSize;
      var v2322 = v2552 - average$$1;
      introspect(JAM.policy.p22) {
        var v1637 = Math.abs(v2322)
      }
      totalDeviation = totalDeviation + v1637;
      i$$53++;
      v805 = i$$53 < max$$7;
    }
    var v806 = .05 * totalModuleSize$$2;
    return totalDeviation <= v806;
  }
  function v102() {
    var v807 = this.possibleCenters;
    var max$$6 = v807.length;
    var v808 = max$$6 <= 1;
    if (v808) {
      return 0;
    }
    var firstConfirmedCenter = null;
    var i$$52 = 0;
    var v813 = i$$52 < max$$6;
    for (;v813;) {
      var v809 = this.possibleCenters;
      var center$$1 = v809[i$$52];
      var v1638 = center$$1.Count;
      var v812 = v1638 >= CENTER_QUORUM;
      if (v812) {
        var v811 = firstConfirmedCenter == null;
        if (v811) {
          firstConfirmedCenter = center$$1;
        } else {
          this.hasSkipped = true;
          var v2659 = firstConfirmedCenter.X;
          var v2660 = center$$1.X;
          var v2553 = v2659 - v2660;
          introspect(JAM.policy.p22) {
            var v2323 = Math.abs(v2553)
          }
          var v2661 = firstConfirmedCenter.Y;
          var v2662 = center$$1.Y;
          var v2554 = v2661 - v2662;
          introspect(JAM.policy.p22) {
            var v2324 = Math.abs(v2554)
          }
          var v1639 = v2323 - v2324;
          var v810 = v1639 / 2;
          introspect(JAM.policy.p22) {
            return Math.floor(v810);
          }
        }
      }
      i$$52++;
      v813 = i$$52 < max$$6;
    }
    return 0;
  }
  function v101() {
    function v100(a$$8, b$$5) {
      var v1640 = a$$8.count;
      var v1641 = b$$5.count;
      var v814 = v1640 > v1641;
      if (v814) {
        return -1;
      }
      var v1642 = a$$8.count;
      var v1643 = b$$5.count;
      var v815 = v1642 < v1643;
      if (v815) {
        return 1;
      }
      return 0;
    }
    var v816 = this.possibleCenters;
    var startSize = v816.length;
    var v817 = startSize < 3;
    if (v817) {
      throw "Couldn't find enough finder patterns";
    }
    var v823 = startSize > 3;
    if (v823) {
      var totalModuleSize$$1 = 0;
      var i$$51 = 0;
      var v818 = i$$51 < startSize;
      for (;v818;) {
        var v2555 = this.possibleCenters;
        var v2325 = v2555[i$$51];
        var v1644 = v2325.EstimatedModuleSize;
        totalModuleSize$$1 = totalModuleSize$$1 + v1644;
        i$$51++;
        v818 = i$$51 < startSize;
      }
      var average = totalModuleSize$$1 / startSize;
      i$$51 = 0;
      var v2556 = this.possibleCenters;
      var v2326 = v2556.length;
      var v1645 = i$$51 < v2326;
      if (v1645) {
        var v2557 = this.possibleCenters;
        var v2327 = v2557.length;
        v1645 = v2327 > 3;
      }
      var v822 = v1645;
      for (;v822;) {
        var v819 = this.possibleCenters;
        var pattern$$2 = v819[i$$51];
        var v2558 = pattern$$2.EstimatedModuleSize;
        var v2328 = v2558 - average;
        introspect(JAM.policy.p22) {
          var v1646 = Math.abs(v2328)
        }
        var v1647 = .2 * average;
        var v821 = v1646 > v1647;
        if (v821) {
          var v820 = this.possibleCenters;
          introspect(JAM.policy.p24) {
            v820.remove(i$$51);
          }
          i$$51--;
        }
        i$$51++;
        var v2559 = this.possibleCenters;
        var v2329 = v2559.length;
        var v1648 = i$$51 < v2329;
        if (v1648) {
          var v2560 = this.possibleCenters;
          var v2330 = v2560.length;
          v1648 = v2330 > 3;
        }
        v822 = v1648;
      }
    }
    var v2331 = this.possibleCenters;
    var v1649 = v2331.length;
    var v825 = v1649 > 3;
    if (v825) {
      var v824 = this.possibleCenters;
      introspect(JAM.policy.p22) {
        v824.sort(v100);
      }
    }
    var v1650 = this.possibleCenters;
    var v826 = v1650[0];
    var v1651 = this.possibleCenters;
    var v827 = v1651[1];
    var v1652 = this.possibleCenters;
    var v828 = v1652[2];
    return new Array(v826, v827, v828);
  }
  function v99(stateCount$$4, i$$50, j$$27) {
    var v2561 = stateCount$$4[0];
    var v2562 = stateCount$$4[1];
    var v2332 = v2561 + v2562;
    var v2333 = stateCount$$4[2];
    var v1653 = v2332 + v2333;
    var v1654 = stateCount$$4[3];
    var v829 = v1653 + v1654;
    var v830 = stateCount$$4[4];
    var stateCountTotal$$2 = v829 + v830;
    introspect(JAM.policy.p33) {
      var centerJ$$1 = this.centerFromEnd(stateCount$$4, j$$27)
    }
    introspect(JAM.policy.p22) {
      var v831 = Math.floor(centerJ$$1)
    }
    var v832 = stateCount$$4[2];
    introspect(JAM.policy.p33) {
      var centerI$$1 = this.crossCheckVertical(i$$50, v831, v832, stateCountTotal$$2)
    }
    var v1655 = isNaN(centerI$$1);
    var v845 = !v1655;
    if (v845) {
      introspect(JAM.policy.p22) {
        var v833 = Math.floor(centerJ$$1)
      }
      introspect(JAM.policy.p22) {
        var v834 = Math.floor(centerI$$1)
      }
      var v835 = stateCount$$4[2];
      introspect(JAM.policy.p23) {
        centerJ$$1 = this.crossCheckHorizontal(v833, v834, v835, stateCountTotal$$2);
      }
      var v1656 = isNaN(centerJ$$1);
      var v844 = !v1656;
      if (v844) {
        var estimatedModuleSize$$1 = stateCountTotal$$2 / 7;
        var found = false;
        var v836 = this.possibleCenters;
        var max$$5 = v836.length;
        var index$$39 = 0;
        var v839 = index$$39 < max$$5;
        for (;v839;) {
          var v837 = this.possibleCenters;
          var center = v837[index$$39];
          introspect(JAM.policy.p33) {
            var v838 = center.aboutEquals(estimatedModuleSize$$1, centerI$$1, centerJ$$1)
          }
          if (v838) {
            center.incrementCount();
            found = true;
            break;
          }
          index$$39++;
          v839 = index$$39 < max$$5;
        }
        var v843 = !found;
        if (v843) {
          var point$$2 = new FinderPattern(centerJ$$1, centerI$$1, estimatedModuleSize$$1);
          var v840 = this.possibleCenters;
          introspect(JAM.policy.p22) {
            v840.push(point$$2);
          }
          var v1657 = this.resultPointCallback;
          var v842 = v1657 != null;
          if (v842) {
            var v841 = this.resultPointCallback;
            introspect(JAM.policy.p22) {
              v841.foundPossibleResultPoint(point$$2);
            }
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
    var v1658 = j$$26 >= 0;
    if (v1658) {
      var v2663 = qrcode.width;
      var v2563 = centerI * v2663;
      var v2334 = j$$26 + v2563;
      v1658 = image$$11[v2334];
    }
    var v846 = v1658;
    for (;v846;) {
      stateCount$$3[2]++;
      j$$26--;
      var v1659 = j$$26 >= 0;
      if (v1659) {
        var v2664 = qrcode.width;
        var v2564 = centerI * v2664;
        var v2335 = j$$26 + v2564;
        v1659 = image$$11[v2335];
      }
      v846 = v1659;
    }
    var v847 = j$$26 < 0;
    if (v847) {
      return NaN;
    }
    var v2336 = j$$26 >= 0;
    if (v2336) {
      var v2768 = qrcode.width;
      var v2727 = centerI * v2768;
      var v2665 = j$$26 + v2727;
      var v2565 = image$$11[v2665];
      v2336 = !v2565;
    }
    var v1660 = v2336;
    if (v1660) {
      var v2337 = stateCount$$3[1];
      v1660 = v2337 <= maxCount$$1;
    }
    var v848 = v1660;
    for (;v848;) {
      stateCount$$3[1]++;
      j$$26--;
      var v2338 = j$$26 >= 0;
      if (v2338) {
        var v2769 = qrcode.width;
        var v2728 = centerI * v2769;
        var v2666 = j$$26 + v2728;
        var v2566 = image$$11[v2666];
        v2338 = !v2566;
      }
      var v1661 = v2338;
      if (v1661) {
        var v2339 = stateCount$$3[1];
        v1661 = v2339 <= maxCount$$1;
      }
      v848 = v1661;
    }
    var v1662 = j$$26 < 0;
    var v2341 = !v1662;
    if (v2341) {
      var v2340 = stateCount$$3[1];
      v1662 = v2340 > maxCount$$1;
    }
    var v849 = v1662;
    if (v849) {
      return NaN;
    }
    var v2342 = j$$26 >= 0;
    if (v2342) {
      var v2729 = qrcode.width;
      var v2667 = centerI * v2729;
      var v2567 = j$$26 + v2667;
      v2342 = image$$11[v2567];
    }
    var v1663 = v2342;
    if (v1663) {
      var v2343 = stateCount$$3[0];
      v1663 = v2343 <= maxCount$$1;
    }
    var v850 = v1663;
    for (;v850;) {
      stateCount$$3[0]++;
      j$$26--;
      var v2344 = j$$26 >= 0;
      if (v2344) {
        var v2730 = qrcode.width;
        var v2668 = centerI * v2730;
        var v2568 = j$$26 + v2668;
        v2344 = image$$11[v2568];
      }
      var v1664 = v2344;
      if (v1664) {
        var v2345 = stateCount$$3[0];
        v1664 = v2345 <= maxCount$$1;
      }
      v850 = v1664;
    }
    var v1665 = stateCount$$3[0];
    var v851 = v1665 > maxCount$$1;
    if (v851) {
      return NaN;
    }
    j$$26 = startJ + 1;
    var v1666 = j$$26 < maxJ;
    if (v1666) {
      var v2669 = qrcode.width;
      var v2569 = centerI * v2669;
      var v2346 = j$$26 + v2569;
      v1666 = image$$11[v2346];
    }
    var v852 = v1666;
    for (;v852;) {
      stateCount$$3[2]++;
      j$$26++;
      var v1667 = j$$26 < maxJ;
      if (v1667) {
        var v2670 = qrcode.width;
        var v2570 = centerI * v2670;
        var v2347 = j$$26 + v2570;
        v1667 = image$$11[v2347];
      }
      v852 = v1667;
    }
    var v853 = j$$26 == maxJ;
    if (v853) {
      return NaN;
    }
    var v2348 = j$$26 < maxJ;
    if (v2348) {
      var v2770 = qrcode.width;
      var v2731 = centerI * v2770;
      var v2671 = j$$26 + v2731;
      var v2571 = image$$11[v2671];
      v2348 = !v2571;
    }
    var v1668 = v2348;
    if (v1668) {
      var v2349 = stateCount$$3[3];
      v1668 = v2349 < maxCount$$1;
    }
    var v854 = v1668;
    for (;v854;) {
      stateCount$$3[3]++;
      j$$26++;
      var v2350 = j$$26 < maxJ;
      if (v2350) {
        var v2771 = qrcode.width;
        var v2732 = centerI * v2771;
        var v2672 = j$$26 + v2732;
        var v2572 = image$$11[v2672];
        v2350 = !v2572;
      }
      var v1669 = v2350;
      if (v1669) {
        var v2351 = stateCount$$3[3];
        v1669 = v2351 < maxCount$$1;
      }
      v854 = v1669;
    }
    var v1670 = j$$26 == maxJ;
    var v2353 = !v1670;
    if (v2353) {
      var v2352 = stateCount$$3[3];
      v1670 = v2352 >= maxCount$$1;
    }
    var v855 = v1670;
    if (v855) {
      return NaN;
    }
    var v2354 = j$$26 < maxJ;
    if (v2354) {
      var v2733 = qrcode.width;
      var v2673 = centerI * v2733;
      var v2573 = j$$26 + v2673;
      v2354 = image$$11[v2573];
    }
    var v1671 = v2354;
    if (v1671) {
      var v2355 = stateCount$$3[4];
      v1671 = v2355 < maxCount$$1;
    }
    var v856 = v1671;
    for (;v856;) {
      stateCount$$3[4]++;
      j$$26++;
      var v2356 = j$$26 < maxJ;
      if (v2356) {
        var v2734 = qrcode.width;
        var v2674 = centerI * v2734;
        var v2574 = j$$26 + v2674;
        v2356 = image$$11[v2574];
      }
      var v1672 = v2356;
      if (v1672) {
        var v2357 = stateCount$$3[4];
        v1672 = v2357 < maxCount$$1;
      }
      v856 = v1672;
    }
    var v1673 = stateCount$$3[4];
    var v857 = v1673 >= maxCount$$1;
    if (v857) {
      return NaN;
    }
    var v2575 = stateCount$$3[0];
    var v2576 = stateCount$$3[1];
    var v2358 = v2575 + v2576;
    var v2359 = stateCount$$3[2];
    var v1674 = v2358 + v2359;
    var v1675 = stateCount$$3[3];
    var v858 = v1674 + v1675;
    var v859 = stateCount$$3[4];
    var stateCountTotal$$1 = v858 + v859;
    var v2577 = stateCountTotal$$1 - originalStateCountTotal$$1;
    introspect(JAM.policy.p22) {
      var v2360 = Math.abs(v2577)
    }
    var v1676 = 5 * v2360;
    var v860 = v1676 >= originalStateCountTotal$$1;
    if (v860) {
      return NaN;
    }
    var v861;
    introspect(JAM.policy.p22) {
      var v1677 = this.foundPatternCross(stateCount$$3)
    }
    if (v1677) {
      introspect(JAM.policy.p33) {
        v861 = this.centerFromEnd(stateCount$$3, j$$26);
      }
    } else {
      v861 = NaN;
    }
    return v861;
  }
  function v97(startI, centerJ, maxCount, originalStateCountTotal) {
    var image$$10 = this.image;
    var maxI = qrcode.height;
    var stateCount$$2 = this.CrossCheckStateCount;
    var i$$49 = startI;
    var v1678 = i$$49 >= 0;
    if (v1678) {
      var v2675 = qrcode.width;
      var v2578 = i$$49 * v2675;
      var v2361 = centerJ + v2578;
      v1678 = image$$10[v2361];
    }
    var v862 = v1678;
    for (;v862;) {
      stateCount$$2[2]++;
      i$$49--;
      var v1679 = i$$49 >= 0;
      if (v1679) {
        var v2676 = qrcode.width;
        var v2579 = i$$49 * v2676;
        var v2362 = centerJ + v2579;
        v1679 = image$$10[v2362];
      }
      v862 = v1679;
    }
    var v863 = i$$49 < 0;
    if (v863) {
      return NaN;
    }
    var v2363 = i$$49 >= 0;
    if (v2363) {
      var v2772 = qrcode.width;
      var v2735 = i$$49 * v2772;
      var v2677 = centerJ + v2735;
      var v2580 = image$$10[v2677];
      v2363 = !v2580;
    }
    var v1680 = v2363;
    if (v1680) {
      var v2364 = stateCount$$2[1];
      v1680 = v2364 <= maxCount;
    }
    var v864 = v1680;
    for (;v864;) {
      stateCount$$2[1]++;
      i$$49--;
      var v2365 = i$$49 >= 0;
      if (v2365) {
        var v2773 = qrcode.width;
        var v2736 = i$$49 * v2773;
        var v2678 = centerJ + v2736;
        var v2581 = image$$10[v2678];
        v2365 = !v2581;
      }
      var v1681 = v2365;
      if (v1681) {
        var v2366 = stateCount$$2[1];
        v1681 = v2366 <= maxCount;
      }
      v864 = v1681;
    }
    var v1682 = i$$49 < 0;
    var v2368 = !v1682;
    if (v2368) {
      var v2367 = stateCount$$2[1];
      v1682 = v2367 > maxCount;
    }
    var v865 = v1682;
    if (v865) {
      return NaN;
    }
    var v2369 = i$$49 >= 0;
    if (v2369) {
      var v2737 = qrcode.width;
      var v2679 = i$$49 * v2737;
      var v2582 = centerJ + v2679;
      v2369 = image$$10[v2582];
    }
    var v1683 = v2369;
    if (v1683) {
      var v2370 = stateCount$$2[0];
      v1683 = v2370 <= maxCount;
    }
    var v866 = v1683;
    for (;v866;) {
      stateCount$$2[0]++;
      i$$49--;
      var v2371 = i$$49 >= 0;
      if (v2371) {
        var v2738 = qrcode.width;
        var v2680 = i$$49 * v2738;
        var v2583 = centerJ + v2680;
        v2371 = image$$10[v2583];
      }
      var v1684 = v2371;
      if (v1684) {
        var v2372 = stateCount$$2[0];
        v1684 = v2372 <= maxCount;
      }
      v866 = v1684;
    }
    var v1685 = stateCount$$2[0];
    var v867 = v1685 > maxCount;
    if (v867) {
      return NaN;
    }
    i$$49 = startI + 1;
    var v1686 = i$$49 < maxI;
    if (v1686) {
      var v2681 = qrcode.width;
      var v2584 = i$$49 * v2681;
      var v2373 = centerJ + v2584;
      v1686 = image$$10[v2373];
    }
    var v868 = v1686;
    for (;v868;) {
      stateCount$$2[2]++;
      i$$49++;
      var v1687 = i$$49 < maxI;
      if (v1687) {
        var v2682 = qrcode.width;
        var v2585 = i$$49 * v2682;
        var v2374 = centerJ + v2585;
        v1687 = image$$10[v2374];
      }
      v868 = v1687;
    }
    var v869 = i$$49 == maxI;
    if (v869) {
      return NaN;
    }
    var v2375 = i$$49 < maxI;
    if (v2375) {
      var v2774 = qrcode.width;
      var v2739 = i$$49 * v2774;
      var v2683 = centerJ + v2739;
      var v2586 = image$$10[v2683];
      v2375 = !v2586;
    }
    var v1688 = v2375;
    if (v1688) {
      var v2376 = stateCount$$2[3];
      v1688 = v2376 < maxCount;
    }
    var v870 = v1688;
    for (;v870;) {
      stateCount$$2[3]++;
      i$$49++;
      var v2377 = i$$49 < maxI;
      if (v2377) {
        var v2775 = qrcode.width;
        var v2740 = i$$49 * v2775;
        var v2684 = centerJ + v2740;
        var v2587 = image$$10[v2684];
        v2377 = !v2587;
      }
      var v1689 = v2377;
      if (v1689) {
        var v2378 = stateCount$$2[3];
        v1689 = v2378 < maxCount;
      }
      v870 = v1689;
    }
    var v1690 = i$$49 == maxI;
    var v2380 = !v1690;
    if (v2380) {
      var v2379 = stateCount$$2[3];
      v1690 = v2379 >= maxCount;
    }
    var v871 = v1690;
    if (v871) {
      return NaN;
    }
    var v2381 = i$$49 < maxI;
    if (v2381) {
      var v2741 = qrcode.width;
      var v2685 = i$$49 * v2741;
      var v2588 = centerJ + v2685;
      v2381 = image$$10[v2588];
    }
    var v1691 = v2381;
    if (v1691) {
      var v2382 = stateCount$$2[4];
      v1691 = v2382 < maxCount;
    }
    var v872 = v1691;
    for (;v872;) {
      stateCount$$2[4]++;
      i$$49++;
      var v2383 = i$$49 < maxI;
      if (v2383) {
        var v2742 = qrcode.width;
        var v2686 = i$$49 * v2742;
        var v2589 = centerJ + v2686;
        v2383 = image$$10[v2589];
      }
      var v1692 = v2383;
      if (v1692) {
        var v2384 = stateCount$$2[4];
        v1692 = v2384 < maxCount;
      }
      v872 = v1692;
    }
    var v1693 = stateCount$$2[4];
    var v873 = v1693 >= maxCount;
    if (v873) {
      return NaN;
    }
    var v2590 = stateCount$$2[0];
    var v2591 = stateCount$$2[1];
    var v2385 = v2590 + v2591;
    var v2386 = stateCount$$2[2];
    var v1694 = v2385 + v2386;
    var v1695 = stateCount$$2[3];
    var v874 = v1694 + v1695;
    var v875 = stateCount$$2[4];
    var stateCountTotal = v874 + v875;
    var v2592 = stateCountTotal - originalStateCountTotal;
    introspect(JAM.policy.p22) {
      var v2387 = Math.abs(v2592)
    }
    var v1696 = 5 * v2387;
    var v1697 = 2 * originalStateCountTotal;
    var v876 = v1696 >= v1697;
    if (v876) {
      return NaN;
    }
    var v877;
    introspect(JAM.policy.p22) {
      var v1698 = this.foundPatternCross(stateCount$$2)
    }
    if (v1698) {
      introspect(JAM.policy.p33) {
        v877 = this.centerFromEnd(stateCount$$2, i$$49);
      }
    } else {
      v877 = NaN;
    }
    return v877;
  }
  function v96(stateCount$$1, end$$2) {
    var v2388 = stateCount$$1[4];
    var v1699 = end$$2 - v2388;
    var v1700 = stateCount$$1[3];
    var v878 = v1699 - v1700;
    var v1701 = stateCount$$1[2];
    var v879 = v1701 / 2;
    return v878 - v879;
  }
  function v95(stateCount) {
    var totalModuleSize = 0;
    var i$$48 = 0;
    var v881 = i$$48 < 5;
    for (;v881;) {
      var count$$5 = stateCount[i$$48];
      var v880 = count$$5 == 0;
      if (v880) {
        return false;
      }
      totalModuleSize = totalModuleSize + count$$5;
      i$$48++;
      v881 = i$$48 < 5;
    }
    var v882 = totalModuleSize < 7;
    if (v882) {
      return false;
    }
    var v1702 = totalModuleSize << INTEGER_MATH_SHIFT;
    var v883 = v1702 / 7;
    introspect(JAM.policy.p22) {
      var moduleSize$$3 = Math.floor(v883)
    }
    var v884 = moduleSize$$3 / 2;
    introspect(JAM.policy.p22) {
      var maxVariance = Math.floor(v884)
    }
    var v2788 = stateCount[0];
    var v2776 = v2788 << INTEGER_MATH_SHIFT;
    var v2743 = moduleSize$$3 - v2776;
    introspect(JAM.policy.p22) {
      var v2687 = Math.abs(v2743)
    }
    var v2593 = v2687 < maxVariance;
    if (v2593) {
      var v2789 = stateCount[1];
      var v2777 = v2789 << INTEGER_MATH_SHIFT;
      var v2744 = moduleSize$$3 - v2777;
      introspect(JAM.policy.p22) {
        var v2688 = Math.abs(v2744)
      }
      v2593 = v2688 < maxVariance;
    }
    var v2389 = v2593;
    if (v2389) {
      var v2745 = 3 * moduleSize$$3;
      var v2778 = stateCount[2];
      var v2746 = v2778 << INTEGER_MATH_SHIFT;
      var v2689 = v2745 - v2746;
      introspect(JAM.policy.p22) {
        var v2594 = Math.abs(v2689)
      }
      var v2595 = 3 * maxVariance;
      v2389 = v2594 < v2595;
    }
    var v1703 = v2389;
    if (v1703) {
      var v2747 = stateCount[3];
      var v2690 = v2747 << INTEGER_MATH_SHIFT;
      var v2596 = moduleSize$$3 - v2690;
      introspect(JAM.policy.p22) {
        var v2390 = Math.abs(v2596)
      }
      v1703 = v2390 < maxVariance;
    }
    var v885 = v1703;
    if (v885) {
      var v2691 = stateCount[4];
      var v2597 = v2691 << INTEGER_MATH_SHIFT;
      var v2391 = moduleSize$$3 - v2597;
      introspect(JAM.policy.p22) {
        var v1704 = Math.abs(v2391)
      }
      v885 = v1704 < maxVariance;
    }
    return v885;
  }
  function v94() {
    var v886 = this.crossCheckStateCount;
    v886[0] = 0;
    var v887 = this.crossCheckStateCount;
    v887[1] = 0;
    var v888 = this.crossCheckStateCount;
    v888[2] = 0;
    var v889 = this.crossCheckStateCount;
    v889[3] = 0;
    var v890 = this.crossCheckStateCount;
    v890[4] = 0;
    return this.crossCheckStateCount;
  }
  this.image = null;
  this.possibleCenters = [];
  this.hasSkipped = false;
  var v2822 = new Array(0, 0, 0, 0, 0);
  this.crossCheckStateCount = v2822;
  this.resultPointCallback = null;
  introspect(JAM.policy.p19) {
    this.__defineGetter__("CrossCheckStateCount", v94);
  }
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
    var v2692 = this.y;
    var v2598 = i$$55 - v2692;
    introspect(JAM.policy.p22) {
      var v2392 = Math.abs(v2598)
    }
    var v1705 = v2392 <= moduleSize$$4;
    if (v1705) {
      var v2693 = this.x;
      var v2599 = j$$29 - v2693;
      introspect(JAM.policy.p22) {
        var v2393 = Math.abs(v2599)
      }
      v1705 = v2393 <= moduleSize$$4;
    }
    var v893 = v1705;
    if (v893) {
      var v1706 = this.estimatedModuleSize;
      var v891 = moduleSize$$4 - v1706;
      introspect(JAM.policy.p22) {
        var moduleSizeDiff$$1 = Math.abs(v891)
      }
      var v892 = moduleSizeDiff$$1 <= 1;
      var v1708 = !v892;
      if (v1708) {
        var v2394 = this.estimatedModuleSize;
        var v1707 = moduleSizeDiff$$1 / v2394;
        v892 = v1707 <= 1;
      }
      return v892;
    }
    return false;
  }
  function v109() {
    this.count++;
    return;
  }
  function v108() {
    var v894 = this.y;
    introspect(JAM.policy.p22) {
      return Math.floor(v894);
    }
  }
  function v107() {
    var v895 = this.x;
    introspect(JAM.policy.p22) {
      return Math.floor(v895);
    }
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
  introspect(JAM.policy.p19) {
    this.__defineGetter__("EstimatedModuleSize", v105);
  }
  introspect(JAM.policy.p19) {
    this.__defineGetter__("Count", v106);
  }
  introspect(JAM.policy.p19) {
    this.__defineGetter__("X", v107);
  }
  introspect(JAM.policy.p19) {
    this.__defineGetter__("Y", v108);
  }
  this.incrementCount = v109;
  this.aboutEquals = v110;
  return;
}
function AlignmentPatternFinder(image$$13, startX, startY, width$$12, height$$11, moduleSize$$5, resultPointCallback) {
  function v115() {
    var startX$$1 = this.startX;
    var height$$12 = this.height;
    var maxJ$$2 = startX$$1 + width$$12;
    var v896 = height$$12 >> 1;
    var middleI = startY + v896;
    var stateCount$$10 = new Array(0, 0, 0);
    var iGen = 0;
    var v908 = iGen < height$$12;
    for (;v908;) {
      var v1709;
      var v2600 = iGen & 1;
      var v2397 = v2600 == 0;
      if (v2397) {
        var v2395 = iGen + 1;
        v1709 = v2395 >> 1;
      } else {
        var v2601 = iGen + 1;
        var v2396 = v2601 >> 1;
        v1709 = -v2396;
      }
      var v897 = v1709;
      var i$$59 = middleI + v897;
      stateCount$$10[0] = 0;
      stateCount$$10[1] = 0;
      stateCount$$10[2] = 0;
      var j$$31 = startX$$1;
      var v1710 = j$$31 < maxJ$$2;
      if (v1710) {
        var v2748 = qrcode.width;
        var v2694 = v2748 * i$$59;
        var v2602 = j$$31 + v2694;
        var v2398 = image$$13[v2602];
        v1710 = !v2398;
      }
      var v898 = v1710;
      for (;v898;) {
        j$$31++;
        var v1711 = j$$31 < maxJ$$2;
        if (v1711) {
          var v2749 = qrcode.width;
          var v2695 = v2749 * i$$59;
          var v2603 = j$$31 + v2695;
          var v2399 = image$$13[v2603];
          v1711 = !v2399;
        }
        v898 = v1711;
      }
      var currentState$$1 = 0;
      var v905 = j$$31 < maxJ$$2;
      for (;v905;) {
        var v2604 = qrcode.width;
        var v2400 = i$$59 * v2604;
        var v1712 = j$$31 + v2400;
        var v904 = image$$13[v1712];
        if (v904) {
          var v902 = currentState$$1 == 1;
          if (v902) {
            stateCount$$10[currentState$$1]++;
          } else {
            var v901 = currentState$$1 == 2;
            if (v901) {
              introspect(JAM.policy.p22) {
                var v900 = this.foundPatternCross(stateCount$$10)
              }
              if (v900) {
                introspect(JAM.policy.p33) {
                  var confirmed$$1 = this.handlePossibleCenter(stateCount$$10, i$$59, j$$31)
                }
                var v899 = confirmed$$1 != null;
                if (v899) {
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
          var v903 = currentState$$1 == 1;
          if (v903) {
            currentState$$1++;
          }
          stateCount$$10[currentState$$1]++;
        }
        j$$31++;
        v905 = j$$31 < maxJ$$2;
      }
      introspect(JAM.policy.p22) {
        var v907 = this.foundPatternCross(stateCount$$10)
      }
      if (v907) {
        introspect(JAM.policy.p33) {
          confirmed$$1 = this.handlePossibleCenter(stateCount$$10, i$$59, maxJ$$2);
        }
        var v906 = confirmed$$1 != null;
        if (v906) {
          return confirmed$$1;
        }
      }
      iGen++;
      v908 = iGen < height$$12;
    }
    var v2605 = this.possibleCenters;
    var v2401 = v2605.length;
    var v1713 = v2401 == 0;
    var v910 = !v1713;
    if (v910) {
      var v909 = this.possibleCenters;
      return v909[0];
    }
    throw "Couldn't find enough alignment patterns";
  }
  function v114(stateCount$$9, i$$58, j$$30) {
    var v1714 = stateCount$$9[0];
    var v1715 = stateCount$$9[1];
    var v911 = v1714 + v1715;
    var v912 = stateCount$$9[2];
    var stateCountTotal$$4 = v911 + v912;
    introspect(JAM.policy.p33) {
      var centerJ$$3 = this.centerFromEnd(stateCount$$9, j$$30)
    }
    introspect(JAM.policy.p22) {
      var v913 = Math.floor(centerJ$$3)
    }
    var v1716 = stateCount$$9[1];
    var v914 = 2 * v1716;
    introspect(JAM.policy.p33) {
      var centerI$$2 = this.crossCheckVertical(i$$58, v913, v914, stateCountTotal$$4)
    }
    var v1717 = isNaN(centerI$$2);
    var v923 = !v1717;
    if (v923) {
      var v2402 = stateCount$$9[0];
      var v2403 = stateCount$$9[1];
      var v1718 = v2402 + v2403;
      var v1719 = stateCount$$9[2];
      var v915 = v1718 + v1719;
      var estimatedModuleSize$$3 = v915 / 3;
      var v916 = this.possibleCenters;
      var max$$8 = v916.length;
      var index$$40 = 0;
      var v919 = index$$40 < max$$8;
      for (;v919;) {
        var v917 = this.possibleCenters;
        var center$$2 = v917[index$$40];
        introspect(JAM.policy.p33) {
          var v918 = center$$2.aboutEquals(estimatedModuleSize$$3, centerI$$2, centerJ$$3)
        }
        if (v918) {
          return new AlignmentPattern(centerJ$$3, centerI$$2, estimatedModuleSize$$3);
        }
        index$$40++;
        v919 = index$$40 < max$$8;
      }
      var point$$3 = new AlignmentPattern(centerJ$$3, centerI$$2, estimatedModuleSize$$3);
      var v920 = this.possibleCenters;
      introspect(JAM.policy.p22) {
        v920.push(point$$3);
      }
      var v1720 = this.resultPointCallback;
      var v922 = v1720 != null;
      if (v922) {
        var v921 = this.resultPointCallback;
        introspect(JAM.policy.p22) {
          v921.foundPossibleResultPoint(point$$3);
        }
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
    var v2404 = i$$57 >= 0;
    if (v2404) {
      var v2750 = qrcode.width;
      var v2696 = i$$57 * v2750;
      var v2606 = centerJ$$2 + v2696;
      v2404 = image$$14[v2606];
    }
    var v1721 = v2404;
    if (v1721) {
      var v2405 = stateCount$$8[1];
      v1721 = v2405 <= maxCount$$2;
    }
    var v924 = v1721;
    for (;v924;) {
      stateCount$$8[1]++;
      i$$57--;
      var v2406 = i$$57 >= 0;
      if (v2406) {
        var v2751 = qrcode.width;
        var v2697 = i$$57 * v2751;
        var v2607 = centerJ$$2 + v2697;
        v2406 = image$$14[v2607];
      }
      var v1722 = v2406;
      if (v1722) {
        var v2407 = stateCount$$8[1];
        v1722 = v2407 <= maxCount$$2;
      }
      v924 = v1722;
    }
    var v1723 = i$$57 < 0;
    var v2409 = !v1723;
    if (v2409) {
      var v2408 = stateCount$$8[1];
      v1723 = v2408 > maxCount$$2;
    }
    var v925 = v1723;
    if (v925) {
      return NaN;
    }
    var v2410 = i$$57 >= 0;
    if (v2410) {
      var v2779 = qrcode.width;
      var v2752 = i$$57 * v2779;
      var v2698 = centerJ$$2 + v2752;
      var v2608 = image$$14[v2698];
      v2410 = !v2608;
    }
    var v1724 = v2410;
    if (v1724) {
      var v2411 = stateCount$$8[0];
      v1724 = v2411 <= maxCount$$2;
    }
    var v926 = v1724;
    for (;v926;) {
      stateCount$$8[0]++;
      i$$57--;
      var v2412 = i$$57 >= 0;
      if (v2412) {
        var v2780 = qrcode.width;
        var v2753 = i$$57 * v2780;
        var v2699 = centerJ$$2 + v2753;
        var v2609 = image$$14[v2699];
        v2412 = !v2609;
      }
      var v1725 = v2412;
      if (v1725) {
        var v2413 = stateCount$$8[0];
        v1725 = v2413 <= maxCount$$2;
      }
      v926 = v1725;
    }
    var v1726 = stateCount$$8[0];
    var v927 = v1726 > maxCount$$2;
    if (v927) {
      return NaN;
    }
    i$$57 = startI$$1 + 1;
    var v2414 = i$$57 < maxI$$2;
    if (v2414) {
      var v2754 = qrcode.width;
      var v2700 = i$$57 * v2754;
      var v2610 = centerJ$$2 + v2700;
      v2414 = image$$14[v2610];
    }
    var v1727 = v2414;
    if (v1727) {
      var v2415 = stateCount$$8[1];
      v1727 = v2415 <= maxCount$$2;
    }
    var v928 = v1727;
    for (;v928;) {
      stateCount$$8[1]++;
      i$$57++;
      var v2416 = i$$57 < maxI$$2;
      if (v2416) {
        var v2755 = qrcode.width;
        var v2701 = i$$57 * v2755;
        var v2611 = centerJ$$2 + v2701;
        v2416 = image$$14[v2611];
      }
      var v1728 = v2416;
      if (v1728) {
        var v2417 = stateCount$$8[1];
        v1728 = v2417 <= maxCount$$2;
      }
      v928 = v1728;
    }
    var v1729 = i$$57 == maxI$$2;
    var v2419 = !v1729;
    if (v2419) {
      var v2418 = stateCount$$8[1];
      v1729 = v2418 > maxCount$$2;
    }
    var v929 = v1729;
    if (v929) {
      return NaN;
    }
    var v2420 = i$$57 < maxI$$2;
    if (v2420) {
      var v2781 = qrcode.width;
      var v2756 = i$$57 * v2781;
      var v2702 = centerJ$$2 + v2756;
      var v2612 = image$$14[v2702];
      v2420 = !v2612;
    }
    var v1730 = v2420;
    if (v1730) {
      var v2421 = stateCount$$8[2];
      v1730 = v2421 <= maxCount$$2;
    }
    var v930 = v1730;
    for (;v930;) {
      stateCount$$8[2]++;
      i$$57++;
      var v2422 = i$$57 < maxI$$2;
      if (v2422) {
        var v2782 = qrcode.width;
        var v2757 = i$$57 * v2782;
        var v2703 = centerJ$$2 + v2757;
        var v2613 = image$$14[v2703];
        v2422 = !v2613;
      }
      var v1731 = v2422;
      if (v1731) {
        var v2423 = stateCount$$8[2];
        v1731 = v2423 <= maxCount$$2;
      }
      v930 = v1731;
    }
    var v1732 = stateCount$$8[2];
    var v931 = v1732 > maxCount$$2;
    if (v931) {
      return NaN;
    }
    var v1733 = stateCount$$8[0];
    var v1734 = stateCount$$8[1];
    var v932 = v1733 + v1734;
    var v933 = stateCount$$8[2];
    var stateCountTotal$$3 = v932 + v933;
    var v2614 = stateCountTotal$$3 - originalStateCountTotal$$2;
    introspect(JAM.policy.p22) {
      var v2424 = Math.abs(v2614)
    }
    var v1735 = 5 * v2424;
    var v1736 = 2 * originalStateCountTotal$$2;
    var v934 = v1735 >= v1736;
    if (v934) {
      return NaN;
    }
    var v935;
    introspect(JAM.policy.p22) {
      var v1737 = this.foundPatternCross(stateCount$$8)
    }
    if (v1737) {
      introspect(JAM.policy.p33) {
        v935 = this.centerFromEnd(stateCount$$8, i$$57);
      }
    } else {
      v935 = NaN;
    }
    return v935;
  }
  function v112(stateCount$$7) {
    var moduleSize$$6 = this.moduleSize;
    var maxVariance$$1 = moduleSize$$6 / 2;
    var i$$56 = 0;
    var v937 = i$$56 < 3;
    for (;v937;) {
      var v2615 = stateCount$$7[i$$56];
      var v2425 = moduleSize$$6 - v2615;
      introspect(JAM.policy.p22) {
        var v1738 = Math.abs(v2425)
      }
      var v936 = v1738 >= maxVariance$$1;
      if (v936) {
        return false;
      }
      i$$56++;
      v937 = i$$56 < 3;
    }
    return true;
  }
  function v111(stateCount$$6, end$$3) {
    var v1739 = stateCount$$6[2];
    var v938 = end$$3 - v1739;
    var v1740 = stateCount$$6[1];
    var v939 = v1740 / 2;
    return v938 - v939;
  }
  this.image = image$$13;
  var v2823 = new Array;
  this.possibleCenters = v2823;
  this.startX = startX;
  this.startY = startY;
  this.width = width$$12;
  this.height = height$$11;
  this.moduleSize = moduleSize$$5;
  var v2824 = new Array(0, 0, 0);
  this.crossCheckStateCount = v2824;
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
      var v941 = mode$$7 == 0;
      if (v941) {
        var v1741 = output$$1.length;
        var v940 = v1741 > 0;
        if (v940) {
          break;
        } else {
          throw "Empty data block";
        }
      }
      var v2616 = mode$$7 != MODE_NUMBER;
      if (v2616) {
        v2616 = mode$$7 != MODE_ROMAN_AND_NUMBER;
      }
      var v2426 = v2616;
      if (v2426) {
        v2426 = mode$$7 != MODE_8BIT_BYTE;
      }
      var v1742 = v2426;
      if (v1742) {
        v1742 = mode$$7 != MODE_KANJI;
      }
      var v943 = v1742;
      if (v943) {
        var v2704 = "Invalid mode: " + mode$$7;
        var v2617 = v2704 + " in (block:";
        var v2618 = this.blockPointer;
        var v2427 = v2617 + v2618;
        var v1743 = v2427 + " bit:";
        var v1744 = this.bitPointer;
        var v942 = v1743 + v1744;
        throw v942 + ")";
      }
      introspect(JAM.policy.p22) {
        dataLength = this.getDataLength(mode$$7);
      }
      var v944 = dataLength < 1;
      if (v944) {
        throw "Invalid data length: " + dataLength;
      }
      switch(mode$$7) {
        case MODE_NUMBER:
          var temp_str = this.getFigureString();
          var v945 = temp_str.length;
          var ta = new Array(v945);
          var j$$32 = 0;
          var v1745 = temp_str.length;
          var v946 = j$$32 < v1745;
          for (;v946;) {
            introspect(JAM.policy.p22) {
              var v2825 = temp_str.charCodeAt(j$$32)
            }
            ta[j$$32] = v2825;
            j$$32++;
            var v1746 = temp_str.length;
            v946 = j$$32 < v1746;
          }
          introspect(JAM.policy.p22) {
            output$$1.push(ta);
          }
          break;
        case MODE_ROMAN_AND_NUMBER:
          temp_str = this.getRomanAndFigureString();
          var v947 = temp_str.length;
          ta = new Array(v947);
          j$$32 = 0;
          var v1747 = temp_str.length;
          var v948 = j$$32 < v1747;
          for (;v948;) {
            introspect(JAM.policy.p22) {
              var v2826 = temp_str.charCodeAt(j$$32)
            }
            ta[j$$32] = v2826;
            j$$32++;
            var v1748 = temp_str.length;
            v948 = j$$32 < v1748;
          }
          introspect(JAM.policy.p22) {
            output$$1.push(ta);
          }
          break;
        case MODE_8BIT_BYTE:
          var temp_sbyteArray3 = this.get8bitByteArray();
          introspect(JAM.policy.p22) {
            output$$1.push(temp_sbyteArray3);
          }
          break;
        case MODE_KANJI:
          temp_str = this.getKanjiString();
          introspect(JAM.policy.p22) {
            output$$1.push(temp_str);
          }
        ;
      }
    } while (true);
    return output$$1;
  }
  function v122() {
    var dataLength$$4 = dataLength;
    var length$$14 = dataLength$$4;
    var intData$$3 = 0;
    var unicodeString = "";
    var v951 = length$$14 > 0;
    do {
      introspect(JAM.policy.p18) {
        intData$$3 = getNextBits(13);
      }
      var lowerByte = intData$$3 % 192;
      var higherByte = intData$$3 / 192;
      var v949 = higherByte << 8;
      var tempWord = v949 + lowerByte;
      var shiftjisWord = 0;
      var v1749 = tempWord + 33088;
      var v950 = v1749 <= 40956;
      if (v950) {
        shiftjisWord = tempWord + 33088;
      } else {
        shiftjisWord = tempWord + 49472;
      }
      introspect(JAM.policy.p22) {
        var v1750 = String.fromCharCode(shiftjisWord)
      }
      unicodeString = unicodeString + v1750;
      length$$14--;
      v951 = length$$14 > 0;
    } while (v951);
    return unicodeString;
  }
  function v121() {
    var dataLength$$3 = dataLength;
    var length$$13 = dataLength$$3;
    var intData$$2 = 0;
    var output = new Array;
    var v952 = length$$13 > 0;
    do {
      introspect(JAM.policy.p18) {
        intData$$2 = this.getNextBits(8);
      }
      introspect(JAM.policy.p22) {
        output.push(intData$$2);
      }
      length$$13--;
      v952 = length$$13 > 0;
    } while (v952);
    return output;
  }
  function v120() {
    var dataLength$$2 = dataLength;
    var length$$12 = dataLength$$2;
    var intData$$1 = 0;
    var strData$$1 = "";
    var v959 = length$$12 > 0;
    do {
      var v958 = length$$12 >= 3;
      if (v958) {
        introspect(JAM.policy.p18) {
          intData$$1 = this.getNextBits(10);
        }
        var v953 = intData$$1 < 100;
        if (v953) {
          strData$$1 = strData$$1 + "0";
        }
        var v954 = intData$$1 < 10;
        if (v954) {
          strData$$1 = strData$$1 + "0";
        }
        length$$12 = length$$12 - 3;
      } else {
        var v957 = length$$12 == 2;
        if (v957) {
          introspect(JAM.policy.p18) {
            intData$$1 = this.getNextBits(7);
          }
          var v955 = intData$$1 < 10;
          if (v955) {
            strData$$1 = strData$$1 + "0";
          }
          length$$12 = length$$12 - 2;
        } else {
          var v956 = length$$12 == 1;
          if (v956) {
            introspect(JAM.policy.p18) {
              intData$$1 = this.getNextBits(4);
            }
            length$$12 = length$$12 - 1;
          }
        }
      }
      strData$$1 = strData$$1 + intData$$1;
      v959 = length$$12 > 0;
    } while (v959);
    return strData$$1;
  }
  function v119() {
    var dataLength$$1 = dataLength;
    var length$$11 = dataLength$$1;
    var intData = 0;
    var strData = "";
    var tableRomanAndFigure = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":");
    var v963 = length$$11 > 0;
    do {
      var v962 = length$$11 > 1;
      if (v962) {
        introspect(JAM.policy.p18) {
          intData = this.getNextBits(11);
        }
        var v960 = intData / 45;
        introspect(JAM.policy.p22) {
          var firstLetter = Math.floor(v960)
        }
        var secondLetter = intData % 45;
        var v1751 = tableRomanAndFigure[firstLetter];
        strData = strData + v1751;
        var v1752 = tableRomanAndFigure[secondLetter];
        strData = strData + v1752;
        length$$11 = length$$11 - 2;
      } else {
        var v961 = length$$11 == 1;
        if (v961) {
          introspect(JAM.policy.p18) {
            intData = this.getNextBits(6);
          }
          var v1753 = tableRomanAndFigure[intData];
          strData = strData + v1753;
          length$$11 = length$$11 - 1;
        }
      }
      v963 = length$$11 > 0;
    } while (v963);
    return strData;
  }
  function v118(modeIndicator) {
    var index$$41 = 0;
    for (;true;) {
      var v1754 = modeIndicator >> index$$41;
      var v964 = v1754 == 1;
      if (v964) {
        break;
      }
      index$$41++;
    }
    var v2428 = qrcode.sizeOfDataLengthInfo;
    var v2429 = this.dataLengthMode;
    var v1755 = v2428[v2429];
    var v965 = v1755[index$$41];
    introspect(JAM.policy.p22) {
      return this.getNextBits(v965);
    }
  }
  function v117() {
    var v1756 = this.blockPointer;
    var v2705 = this.blocks;
    var v2619 = v2705.length;
    var v2620 = this.numErrorCorrectionCode;
    var v2430 = v2619 - v2620;
    var v1757 = v2430 - 2;
    var v966 = v1756 > v1757;
    if (v966) {
      return 0;
    } else {
      introspect(JAM.policy.p18) {
        return this.getNextBits(4);
      }
    }
    return;
  }
  function v116(numBits) {
    var bits$$15 = 0;
    var v2431 = this.bitPointer;
    var v1758 = v2431 + 1;
    var v992 = numBits < v1758;
    if (v992) {
      var mask$$5 = 0;
      var i$$60 = 0;
      var v967 = i$$60 < numBits;
      for (;v967;) {
        var v1759 = 1 << i$$60;
        mask$$5 = mask$$5 + v1759;
        i$$60++;
        v967 = i$$60 < numBits;
      }
      var v2621 = this.bitPointer;
      var v2432 = v2621 - numBits;
      var v1760 = v2432 + 1;
      mask$$5 = mask$$5 << v1760;
      var v2433 = this.blocks;
      var v2434 = this.blockPointer;
      var v1761 = v2433[v2434];
      var v968 = v1761 & mask$$5;
      var v2435 = this.bitPointer;
      var v1762 = v2435 - numBits;
      var v969 = v1762 + 1;
      bits$$15 = v968 >> v969;
      var v1763 = this.bitPointer;
      this.bitPointer = v1763 - numBits;
      return bits$$15;
    } else {
      var v2622 = this.bitPointer;
      var v2436 = v2622 + 1;
      var v1764 = v2436 + 8;
      var v991 = numBits < v1764;
      if (v991) {
        var mask1 = 0;
        i$$60 = 0;
        var v2437 = this.bitPointer;
        var v1765 = v2437 + 1;
        var v970 = i$$60 < v1765;
        for (;v970;) {
          var v1766 = 1 << i$$60;
          mask1 = mask1 + v1766;
          i$$60++;
          var v2438 = this.bitPointer;
          var v1767 = v2438 + 1;
          v970 = i$$60 < v1767;
        }
        var v2439 = this.blocks;
        var v2440 = this.blockPointer;
        var v1768 = v2439[v2440];
        var v971 = v1768 & mask1;
        var v2441 = this.bitPointer;
        var v1769 = v2441 + 1;
        var v972 = numBits - v1769;
        bits$$15 = v971 << v972;
        this.blockPointer++;
        var v2623 = this.blocks;
        var v2624 = this.blockPointer;
        var v2442 = v2623[v2624];
        var v2758 = this.bitPointer;
        var v2706 = v2758 + 1;
        var v2625 = numBits - v2706;
        var v2443 = 8 - v2625;
        var v1770 = v2442 >> v2443;
        bits$$15 = bits$$15 + v1770;
        var v973 = this.bitPointer;
        var v974 = numBits % 8;
        this.bitPointer = v973 - v974;
        var v1771 = this.bitPointer;
        var v976 = v1771 < 0;
        if (v976) {
          var v975 = this.bitPointer;
          this.bitPointer = 8 + v975;
        }
        return bits$$15;
      } else {
        var v2626 = this.bitPointer;
        var v2444 = v2626 + 1;
        var v1772 = v2444 + 16;
        var v990 = numBits < v1772;
        if (v990) {
          mask1 = 0;
          var mask3 = 0;
          i$$60 = 0;
          var v2445 = this.bitPointer;
          var v1773 = v2445 + 1;
          var v977 = i$$60 < v1773;
          for (;v977;) {
            var v1774 = 1 << i$$60;
            mask1 = mask1 + v1774;
            i$$60++;
            var v2446 = this.bitPointer;
            var v1775 = v2446 + 1;
            v977 = i$$60 < v1775;
          }
          var v2447 = this.blocks;
          var v2448 = this.blockPointer;
          var v1776 = v2447[v2448];
          var v978 = v1776 & mask1;
          var v2449 = this.bitPointer;
          var v1777 = v2449 + 1;
          var v979 = numBits - v1777;
          var bitsFirstBlock = v978 << v979;
          this.blockPointer++;
          var v1778 = this.blocks;
          var v1779 = this.blockPointer;
          var v980 = v1778[v1779];
          var v2627 = this.bitPointer;
          var v2450 = v2627 + 1;
          var v1780 = v2450 + 8;
          var v981 = numBits - v1780;
          var bitsSecondBlock = v980 << v981;
          this.blockPointer++;
          i$$60 = 0;
          var v2707 = this.bitPointer;
          var v2628 = v2707 + 1;
          var v2451 = v2628 + 8;
          var v1781 = numBits - v2451;
          var v982 = i$$60 < v1781;
          for (;v982;) {
            var v1782 = 1 << i$$60;
            mask3 = mask3 + v1782;
            i$$60++;
            var v2708 = this.bitPointer;
            var v2629 = v2708 + 1;
            var v2452 = v2629 + 8;
            var v1783 = numBits - v2452;
            v982 = i$$60 < v1783;
          }
          var v2759 = this.bitPointer;
          var v2709 = v2759 + 1;
          var v2630 = v2709 + 8;
          var v2453 = numBits - v2630;
          var v1784 = 8 - v2453;
          mask3 = mask3 << v1784;
          var v2454 = this.blocks;
          var v2455 = this.blockPointer;
          var v1785 = v2454[v2455];
          var v983 = v1785 & mask3;
          var v2710 = this.bitPointer;
          var v2631 = v2710 + 1;
          var v2456 = v2631 + 8;
          var v1786 = numBits - v2456;
          var v984 = 8 - v1786;
          var bitsThirdBlock = v983 >> v984;
          var v985 = bitsFirstBlock + bitsSecondBlock;
          bits$$15 = v985 + bitsThirdBlock;
          var v986 = this.bitPointer;
          var v1787 = numBits - 8;
          var v987 = v1787 % 8;
          this.bitPointer = v986 - v987;
          var v1788 = this.bitPointer;
          var v989 = v1788 < 0;
          if (v989) {
            var v988 = this.bitPointer;
            this.bitPointer = 8 + v988;
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
  var v995 = version$$8 <= 9;
  if (v995) {
    this.dataLengthMode = 0;
  } else {
    var v1789 = version$$8 >= 10;
    if (v1789) {
      v1789 = version$$8 <= 26;
    }
    var v994 = v1789;
    if (v994) {
      this.dataLengthMode = 1;
    } else {
      var v1790 = version$$8 >= 27;
      if (v1790) {
        v1790 = version$$8 <= 40;
      }
      var v993 = v1790;
      if (v993) {
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
  introspect(JAM.policy.p19) {
    this.__defineGetter__("DataByte", v123);
  }
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
      var v1791 = e$$10.target;
      var v996 = v1791.result;
      introspect(JAM.policy.p22) {
        qrcode.decode(v996);
      }
      return;
    }
    return v124;
  }
  var o$$1 = [];
  var i$$61 = 0;
  var v1792 = f.length;
  var v999 = i$$61 < v1792;
  for (;v999;) {
    var reader$$2 = new FileReader;
    var v997 = reader$$2;
    var v1793 = f[i$$61];
    var v2827 = v125(v1793);
    v997.onload = v2827;
    var v998 = f[i$$61];
    introspect(JAM.policy.p22) {
      reader$$2.readAsDataURL(v998);
    }
    i$$61++;
    var v1794 = f.length;
    v999 = i$$61 < v1794;
  }
  return;
}
function read(a$$9) {
  alert(a$$9);
  return;
}
function load() {
  qrcode.callback = read;
  introspect(JAM.policy.p16) {
    var v1000 = document.getElementById("imgpath")
  }
  var img$$2 = v1000.value;
  introspect(JAM.policy.p22) {
    qrcode.decode(img$$2);
  }
  return;
}
function passLine(stringPixels) {
  introspect(JAM.policy.p16) {
    var coll = stringPixels.split("-")
  }
  var i$$62 = 0;
  var v1012 = i$$62 < 320;
  for (;v1012;) {
    var v1001 = coll[i$$62];
    var intVal = parseInt(v1001);
    var v1002 = intVal >> 16;
    r = v1002 & 255;
    var v1003 = intVal >> 8;
    g = v1003 & 255;
    b = intVal & 255;
    var v1004 = imageData.data;
    var v1005 = c + 0;
    introspect(JAM.policy.p6) {
      v1004[v1005] = r;
    }
    var v1006 = imageData.data;
    var v1007 = c + 1;
    introspect(JAM.policy.p6) {
      v1006[v1007] = g;
    }
    var v1008 = imageData.data;
    var v1009 = c + 2;
    introspect(JAM.policy.p6) {
      v1008[v1009] = b;
    }
    var v1010 = imageData.data;
    var v1011 = c + 3;
    introspect(JAM.policy.p6) {
      v1010[v1011] = 255;
    }
    c = c + 4;
    i$$62++;
    v1012 = i$$62 < 320;
  }
  var v2457 = 320 * 240;
  var v1795 = v2457 * 4;
  var v1013 = c >= v1795;
  if (v1013) {
    c = 0;
    introspect(JAM.policy.p25) {
      gCtx.putImageData(imageData, 0, 0);
    }
  }
  return;
}
function captureToCanvas() {
  introspect(JAM.policy.p16) {
    flash = document.getElementById("embedflash");
  }
  flash.ccCapture();
  qrcode.decode();
  return;
}
GridSampler = {};
GridSampler.checkAndNudgePoints = v126;
GridSampler.sampleGrid3 = v127;
GridSampler.sampleGridx = v128;
var v1014 = Version;
var v2828 = new Array(31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017);
v1014.VERSION_DECODE_INFO = v2828;
var v1015 = Version;
var v2829 = buildVersions();
v1015.VERSIONS = v2829;
Version.getVersionForNumber = v129;
Version.getProvisionalVersionForDimension = v130;
Version.decodeVersionInformation = v131;
PerspectiveTransform.quadrilateralToQuadrilateral = v132;
PerspectiveTransform.squareToQuadrilateral = v133;
PerspectiveTransform.quadrilateralToSquare = v134;
var FORMAT_INFO_MASK_QR = 21522;
var v1016 = new Array(21522, 0);
var v1017 = new Array(20773, 1);
var v1018 = new Array(24188, 2);
var v1019 = new Array(23371, 3);
var v1020 = new Array(17913, 4);
var v1021 = new Array(16590, 5);
var v1022 = new Array(20375, 6);
var v1023 = new Array(19104, 7);
var v1024 = new Array(30660, 8);
var v1025 = new Array(29427, 9);
var v1026 = new Array(32170, 10);
var v1027 = new Array(30877, 11);
var v1028 = new Array(26159, 12);
var v1029 = new Array(25368, 13);
var v1030 = new Array(27713, 14);
var v1031 = new Array(26998, 15);
var v1032 = new Array(5769, 16);
var v1033 = new Array(5054, 17);
var v1034 = new Array(7399, 18);
var v1035 = new Array(6608, 19);
var v1036 = new Array(1890, 20);
var v1037 = new Array(597, 21);
var v1038 = new Array(3340, 22);
var v1039 = new Array(2107, 23);
var v1040 = new Array(13663, 24);
var v1041 = new Array(12392, 25);
var v1042 = new Array(16177, 26);
var v1043 = new Array(14854, 27);
var v1044 = new Array(9396, 28);
var v1045 = new Array(8579, 29);
var v1046 = new Array(11994, 30);
var v1047 = new Array(11245, 31);
var FORMAT_INFO_DECODE_LOOKUP = new Array(v1016, v1017, v1018, v1019, v1020, v1021, v1022, v1023, v1024, v1025, v1026, v1027, v1028, v1029, v1030, v1031, v1032, v1033, v1034, v1035, v1036, v1037, v1038, v1039, v1040, v1041, v1042, v1043, v1044, v1045, v1046, v1047);
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
var v1048 = DataMask;
var v1796 = new DataMask000;
var v1797 = new DataMask001;
var v1798 = new DataMask010;
var v1799 = new DataMask011;
var v1800 = new DataMask100;
var v1801 = new DataMask101;
var v1802 = new DataMask110;
var v1803 = new DataMask111;
var v2830 = new Array(v1796, v1797, v1798, v1799, v1800, v1801, v1802, v1803);
v1048.DATA_MASKS = v2830;
var v1049 = GF256;
var v2831 = new GF256(285);
v1049.QR_CODE_FIELD = v2831;
var v1050 = GF256;
var v2832 = new GF256(301);
v1050.DATA_MATRIX_FIELD = v2832;
GF256.addOrSubtract = v141;
Decoder = {};
var v1051 = Decoder;
var v2833 = new ReedSolomonDecoder;
v1051.rsDecoder = v2833;
Decoder.correctErrors = v142;
Decoder.decode = v143;
qrcode = {};
qrcode.imagedata = null;
qrcode.width = 0;
qrcode.height = 0;
qrcode.qrCodeSymbol = null;
qrcode.debug = false;
var v1052 = [10, 9, 8, 8];
var v1053 = [12, 11, 16, 10];
var v1054 = [14, 13, 16, 12];
qrcode.sizeOfDataLengthInfo = [v1052, v1053, v1054];
qrcode.callback = null;
qrcode.decode = v145;
qrcode.decode_utf8 = v146;
qrcode.process = v147;
qrcode.getPixel = v148;
qrcode.binarize = v149;
qrcode.getMiddleBrightnessPerArea = v150;
qrcode.grayScaleToBitmap = v151;
qrcode.grayscale = v152;
var v1055 = Array.prototype;
v1055.remove = v153;
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
introspect(JAM.policy.p16) {
  var v1056 = document.getElementById("decode")
}
v1056.onclick = load

JAM.stopProfile('load');
