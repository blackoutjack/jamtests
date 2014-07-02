
JAM.startProfile('load');
function v154(patterns) {
  function distance(pattern1$$1, pattern2$$1) {
    var v155 = pattern1$$1.X;
    var v156 = pattern2$$1.X;
    xDiff = v155 - v156;
    var v157 = pattern1$$1.Y;
    var v158 = pattern2$$1.Y;
    yDiff = v157 - v158;
    var v1067 = xDiff * xDiff;
    var v1068 = yDiff * yDiff;
    var v159 = v1067 + v1068;
    return Math.sqrt(v159)
  }
  function crossProductZ(pointA$$1, pointB$$1, pointC$$1) {
    var bX = pointB$$1.x;
    var bY = pointB$$1.y;
    var v1856 = pointC$$1.x;
    var v1069 = v1856 - bX;
    var v1857 = pointA$$1.y;
    var v1070 = v1857 - bY;
    var v160 = v1069 * v1070;
    var v1858 = pointC$$1.y;
    var v1071 = v1858 - bY;
    var v1859 = pointA$$1.x;
    var v1072 = v1859 - bX;
    var v161 = v1071 * v1072;
    return v160 - v161
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
  var v1073 = oneTwoDistance >= zeroOneDistance;
  if(v1073) {
    v1073 = oneTwoDistance >= zeroTwoDistance
  }
  var v169 = v1073;
  if(v169) {
    pointB = patterns[0];
    pointA = patterns[1];
    pointC = patterns[2]
  }else {
    var v1074 = zeroTwoDistance >= oneTwoDistance;
    if(v1074) {
      v1074 = zeroTwoDistance >= zeroOneDistance
    }
    var v168 = v1074;
    if(v168) {
      pointB = patterns[1];
      pointA = patterns[0];
      pointC = patterns[2]
    }else {
      pointB = patterns[2];
      pointA = patterns[0];
      pointC = patterns[1]
    }
  }
  var v1075 = crossProductZ(pointA, pointB, pointC);
  var v170 = v1075 < 0;
  if(v170) {
    var temp$$5 = pointA;
    pointA = pointC;
    pointC = temp$$5
  }
  patterns[0] = pointA;
  patterns[1] = pointB;
  patterns[2] = pointC;
  return
}
function v153(from, to) {
  var v1860 = to || from;
  var v1076 = v1860 + 1;
  var v1861 = !v1076;
  if(v1861) {
    v1076 = this.length
  }
  var v171 = v1076;
  var rest = this.slice(v171);
  var v172;
  var v1078 = from < 0;
  if(v1078) {
    var v1077 = this.length;
    v172 = v1077 + from
  }else {
    v172 = from
  }
  this.length = v172;
  var v173 = this.push;
  return v173.apply(this, rest)
}
function v152() {
  var v1079 = qrcode.width;
  var v1080 = qrcode.height;
  var v174 = v1079 * v1080;
  var ret$$1 = new Array(v174);
  var y$$44 = 0;
  var v1081 = qrcode.height;
  var v177 = y$$44 < v1081;
  for(;v177;) {
    var x$$62 = 0;
    var v1082 = qrcode.width;
    var v176 = x$$62 < v1082;
    for(;v176;) {
      var gray$$1 = qrcode.getPixel(x$$62, y$$44);
      var v1862 = qrcode.width;
      var v1083 = y$$44 * v1862;
      var v175 = x$$62 + v1083;
      ret$$1[v175] = gray$$1;
      x$$62 = x$$62 + 1;
      var v1084 = qrcode.width;
      v176 = x$$62 < v1084
    }
    y$$44 = y$$44 + 1;
    var v1085 = qrcode.height;
    v177 = y$$44 < v1085
  }
  return ret$$1
}
function v151(grayScale) {
  var middle$$1 = qrcode.getMiddleBrightnessPerArea(grayScale);
  var sqrtNumArea = middle$$1.length;
  var v1086 = qrcode.width;
  var v178 = v1086 / sqrtNumArea;
  var areaWidth$$1 = Math.floor(v178);
  var v1087 = qrcode.height;
  var v179 = v1087 / sqrtNumArea;
  var areaHeight$$1 = Math.floor(v179);
  var v1088 = qrcode.height;
  var v1089 = qrcode.width;
  var v180 = v1088 * v1089;
  var bitmap = new Array(v180);
  var ay$$1 = 0;
  var v185 = ay$$1 < sqrtNumArea;
  for(;v185;) {
    var ax$$1 = 0;
    var v184 = ax$$1 < sqrtNumArea;
    for(;v184;) {
      var dy$$6 = 0;
      var v183 = dy$$6 < areaHeight$$1;
      for(;v183;) {
        var dx$$6 = 0;
        var v182 = dx$$6 < areaWidth$$1;
        for(;v182;) {
          var v1863 = areaWidth$$1 * ax$$1;
          var v1090 = v1863 + dx$$6;
          var v2492 = areaHeight$$1 * ay$$1;
          var v1864 = v2492 + dy$$6;
          var v1865 = qrcode.width;
          var v1091 = v1864 * v1865;
          var v181 = v1090 + v1091;
          var v1092;
          var v2820 = areaWidth$$1 * ax$$1;
          var v2771 = v2820 + dx$$6;
          var v2843 = areaHeight$$1 * ay$$1;
          var v2821 = v2843 + dy$$6;
          var v2822 = qrcode.width;
          var v2772 = v2821 * v2822;
          var v2692 = v2771 + v2772;
          var v2493 = grayScale[v2692];
          var v2693 = middle$$1[ax$$1];
          var v2494 = v2693[ay$$1];
          var v1866 = v2493 < v2494;
          if(v1866) {
            v1092 = true
          }else {
            v1092 = false
          }
          bitmap[v181] = v1092;
          dx$$6 = dx$$6 + 1;
          v182 = dx$$6 < areaWidth$$1
        }
        dy$$6 = dy$$6 + 1;
        v183 = dy$$6 < areaHeight$$1
      }
      ax$$1 = ax$$1 + 1;
      v184 = ax$$1 < sqrtNumArea
    }
    ay$$1 = ay$$1 + 1;
    v185 = ay$$1 < sqrtNumArea
  }
  return bitmap
}
function v150(image$$9) {
  var numSqrtArea = 4;
  var v1093 = qrcode.width;
  var v186 = v1093 / numSqrtArea;
  var areaWidth = Math.floor(v186);
  var v1094 = qrcode.height;
  var v187 = v1094 / numSqrtArea;
  var areaHeight = Math.floor(v187);
  var minmax = new Array(numSqrtArea);
  var i$$46 = 0;
  var v191 = i$$46 < numSqrtArea;
  for(;v191;) {
    var v2851 = new Array(numSqrtArea);
    minmax[i$$46] = v2851;
    var i2 = 0;
    var v190 = i2 < numSqrtArea;
    for(;v190;) {
      var v188 = minmax[i$$46];
      var v189 = i2;
      var v2852 = new Array(0, 0);
      v188[v189] = v2852;
      i2 = i2 + 1;
      v190 = i2 < numSqrtArea
    }
    i$$46 = i$$46 + 1;
    v191 = i$$46 < numSqrtArea
  }
  var ay = 0;
  var v201 = ay < numSqrtArea;
  for(;v201;) {
    var ax = 0;
    var v200 = ax < numSqrtArea;
    for(;v200;) {
      var v1095 = minmax[ax];
      var v192 = v1095[ay];
      v192[0] = 255;
      var dy$$5 = 0;
      var v199 = dy$$5 < areaHeight;
      for(;v199;) {
        var dx$$5 = 0;
        var v198 = dx$$5 < areaWidth;
        for(;v198;) {
          var v1867 = areaWidth * ax;
          var v1096 = v1867 + dx$$5;
          var v2495 = areaHeight * ay;
          var v1868 = v2495 + dy$$5;
          var v1869 = qrcode.width;
          var v1097 = v1868 * v1869;
          var v193 = v1096 + v1097;
          var target$$37 = image$$9[v193];
          var v2496 = minmax[ax];
          var v1870 = v2496[ay];
          var v1098 = v1870[0];
          var v195 = target$$37 < v1098;
          if(v195) {
            var v1099 = minmax[ax];
            var v194 = v1099[ay];
            v194[0] = target$$37
          }
          var v2497 = minmax[ax];
          var v1871 = v2497[ay];
          var v1100 = v1871[1];
          var v197 = target$$37 > v1100;
          if(v197) {
            var v1101 = minmax[ax];
            var v196 = v1101[ay];
            v196[1] = target$$37
          }
          dx$$5 = dx$$5 + 1;
          v198 = dx$$5 < areaWidth
        }
        dy$$5 = dy$$5 + 1;
        v199 = dy$$5 < areaHeight
      }
      ax = ax + 1;
      v200 = ax < numSqrtArea
    }
    ay = ay + 1;
    v201 = ay < numSqrtArea
  }
  var middle = new Array(numSqrtArea);
  var i3 = 0;
  var v202 = i3 < numSqrtArea;
  for(;v202;) {
    var v2853 = new Array(numSqrtArea);
    middle[i3] = v2853;
    i3 = i3 + 1;
    v202 = i3 < numSqrtArea
  }
  ay = 0;
  var v206 = ay < numSqrtArea;
  for(;v206;) {
    ax = 0;
    var v205 = ax < numSqrtArea;
    for(;v205;) {
      var v203 = middle[ax];
      var v204 = ay;
      var v2773 = minmax[ax];
      var v2694 = v2773[ay];
      var v2498 = v2694[0];
      var v2774 = minmax[ax];
      var v2695 = v2774[ay];
      var v2499 = v2695[1];
      var v1872 = v2498 + v2499;
      var v1102 = v1872 / 2;
      var v2854 = Math.floor(v1102);
      v203[v204] = v2854;
      ax = ax + 1;
      v205 = ax < numSqrtArea
    }
    ay = ay + 1;
    v206 = ay < numSqrtArea
  }
  return middle
}
function v149(th) {
  var v1103 = qrcode.width;
  var v1104 = qrcode.height;
  var v207 = v1103 * v1104;
  var ret = new Array(v207);
  var y$$43 = 0;
  var v1105 = qrcode.height;
  var v210 = y$$43 < v1105;
  for(;v210;) {
    var x$$61 = 0;
    var v1106 = qrcode.width;
    var v209 = x$$61 < v1106;
    for(;v209;) {
      var gray = qrcode.getPixel(x$$61, y$$43);
      var v1873 = qrcode.width;
      var v1107 = y$$43 * v1873;
      var v208 = x$$61 + v1107;
      var v1108;
      var v1874 = gray <= th;
      if(v1874) {
        v1108 = true
      }else {
        v1108 = false
      }
      ret[v208] = v1108;
      x$$61 = x$$61 + 1;
      var v1109 = qrcode.width;
      v209 = x$$61 < v1109
    }
    y$$43 = y$$43 + 1;
    var v1110 = qrcode.height;
    v210 = y$$43 < v1110
  }
  return ret
}
function v148(x$$60, y$$42) {
  var v1111 = qrcode.width;
  var v211 = v1111 < x$$60;
  if(v211) {
    throw"point error";
  }
  var v1112 = qrcode.height;
  var v212 = v1112 < y$$42;
  if(v212) {
    throw"point error";
  }
  var v213 = x$$60 * 4;
  var v1875 = qrcode.width;
  var v1113 = y$$42 * v1875;
  var v214 = v1113 * 4;
  var point$$1 = v213 + v214;
  var v2775 = qrcode.imagedata;
  var v2696 = v2775.data;
  var v2500 = v2696[point$$1];
  var v1876 = v2500 * 33;
  var v2776 = qrcode.imagedata;
  var v2697 = v2776.data;
  var v2698 = point$$1 + 1;
  var v2501 = v2697[v2698];
  var v1877 = v2501 * 34;
  var v1114 = v1876 + v1877;
  var v2699 = qrcode.imagedata;
  var v2502 = v2699.data;
  var v2503 = point$$1 + 2;
  var v1878 = v2502[v2503];
  var v1115 = v1878 * 33;
  var v215 = v1114 + v1115;
  p = v215 / 100;
  return p
}
function v147(ctx) {
  var v216 = new Date;
  var start$$4 = v216.getTime();
  var v217 = qrcode.grayscale();
  var image$$8 = qrcode.grayScaleToBitmap(v217);
  var v228 = qrcode.debug;
  if(v228) {
    var y$$41 = 0;
    var v1116 = qrcode.height;
    var v226 = y$$41 < v1116;
    for(;v226;) {
      var x$$59 = 0;
      var v1117 = qrcode.width;
      var v225 = x$$59 < v1117;
      for(;v225;) {
        var v218 = x$$59 * 4;
        var v1879 = qrcode.width;
        var v1118 = y$$41 * v1879;
        var v219 = v1118 * 4;
        var point = v218 + v219;
        var v1119 = qrcode.imagedata;
        var v220 = v1119.data;
        var v1120;
        var v2777 = qrcode.width;
        var v2700 = y$$41 * v2777;
        var v2504 = x$$59 + v2700;
        var v1880 = image$$8[v2504];
        if(v1880) {
          v1120 = 0
        }else {
          v1120 = 0
        }
        v220[point] = v1120;
        var v1121 = qrcode.imagedata;
        var v221 = v1121.data;
        var v222 = point + 1;
        var v1122;
        var v2778 = qrcode.width;
        var v2701 = y$$41 * v2778;
        var v2505 = x$$59 + v2701;
        var v1881 = image$$8[v2505];
        if(v1881) {
          v1122 = 0
        }else {
          v1122 = 0
        }
        v221[v222] = v1122;
        var v1123 = qrcode.imagedata;
        var v223 = v1123.data;
        var v224 = point + 2;
        var v1124;
        var v2779 = qrcode.width;
        var v2702 = y$$41 * v2779;
        var v2506 = x$$59 + v2702;
        var v1882 = image$$8[v2506];
        if(v1882) {
          v1124 = 255
        }else {
          v1124 = 0
        }
        v223[v224] = v1124;
        x$$59 = x$$59 + 1;
        var v1125 = qrcode.width;
        v225 = x$$59 < v1125
      }
      y$$41 = y$$41 + 1;
      var v1126 = qrcode.height;
      v226 = y$$41 < v1126
    }
    var v227 = qrcode.imagedata;
    ctx.putImageData(v227, 0, 0)
  }
  var detector = new Detector(image$$8);
  var qRCodeMatrix = detector.detect();
  var v230 = qrcode.debug;
  if(v230) {
    var v229 = qrcode.imagedata;
    ctx.putImageData(v229, 0, 0)
  }
  var v231 = qRCodeMatrix.bits;
  var reader$$1 = Decoder.decode(v231);
  var data$$18 = reader$$1.DataByte;
  var str$$6 = "";
  var i$$45 = 0;
  var v1127 = data$$18.length;
  var v233 = i$$45 < v1127;
  for(;v233;) {
    var j$$24 = 0;
    var v1883 = data$$18[i$$45];
    var v1128 = v1883.length;
    var v232 = j$$24 < v1128;
    for(;v232;) {
      var v1129 = str$$6;
      var v2507 = data$$18[i$$45];
      var v1884 = v2507[j$$24];
      var v1130 = String.fromCharCode(v1884);
      str$$6 = v1129 + v1130;
      j$$24 = j$$24 + 1;
      var v1885 = data$$18[i$$45];
      var v1131 = v1885.length;
      v232 = j$$24 < v1131
    }
    i$$45 = i$$45 + 1;
    var v1132 = data$$18.length;
    v233 = i$$45 < v1132
  }
  var v234 = new Date;
  var end$$1 = v234.getTime();
  var time = end$$1 - start$$4;
  console.log(time);
  return qrcode.decode_utf8(str$$6)
}
function v146(s$$4) {
  var v235 = escape(s$$4);
  return decodeURIComponent(v235)
}
function v145(src$$1) {
  function v144() {
    JAM.startProfile('decode');

    var canvas_qr$$1 = document.createElement("canvas");
    var context$$1 = canvas_qr$$1.getContext("2d");
    var canvas_out = document.getElementById("out-canvas");
    var v236 = canvas_out != null;
    if(v236) {
      var outctx = canvas_out.getContext("2d");
      outctx.clearRect(0, 0, 320, 240);
      outctx.drawImage(image$$7, 0, 0, 320, 240)
    }
    canvas_qr$$1.width = image$$7.width;
    canvas_qr$$1.height = image$$7.height;
    context$$1.drawImage(image$$7, 0, 0);
    qrcode.width = image$$7.width;
    qrcode.height = image$$7.height;
    try {
      var v237 = qrcode;
      var v1133 = image$$7.width;
      var v1134 = image$$7.height;
      var v2855 = context$$1.getImageData(0, 0, v1133, v1134);
      v237.imagedata = v2855
    }catch(e$$5) {
      qrcode.result = "Cross domain image reading not supported in your browser! Save it to your computer then drag and drop the file!";
      var v1135 = qrcode.callback;
      var v239 = v1135 != null;
      
    JAM.stopProfile('decode');
if(v239) {
        var v238 = qrcode.result;
        qrcode.callback(v238)
      }
      return
    }
    try {
      var v240 = qrcode;
      var v2856 = qrcode.process(context$$1);
      v240.result = v2856
    }catch(e$$6) {
      console.log(e$$6);
      qrcode.result = "error decoding QR Code"
    }
    var v1136 = qrcode.callback;
    var v242 = v1136 != null;
    
    JAM.stopProfile('decode');
if(v242) {
      var v241 = qrcode.result;
      qrcode.callback(v241)
    }
    return
  }
  var v1137 = arguments.length;
  var v247 = v1137 == 0;
  if(v247) {
    var canvas_qr = document.getElementById("qr-canvas");
    var context = canvas_qr.getContext("2d");
    qrcode.width = canvas_qr.width;
    qrcode.height = canvas_qr.height;
    var v243 = qrcode;
    var v1138 = qrcode.width;
    var v1139 = qrcode.height;
    var v2857 = context.getImageData(0, 0, v1138, v1139);
    v243.imagedata = v2857;
    var v244 = qrcode;
    var v2858 = qrcode.process(context);
    v244.result = v2858;
    var v1140 = qrcode.callback;
    var v246 = v1140 != null;
    if(v246) {
      var v245 = qrcode.result;
      qrcode.callback(v245)
    }
    return qrcode.result
  }else {
    var image$$7 = new Image;
    image$$7.onload = v144;
    image$$7.src = src$$1
  }
  return
}
function v143(bits$$13) {
  var parser = new BitMatrixParser(bits$$13);
  var version$$7 = parser.readVersion();
  var v248 = parser.readFormatInformation();
  var ecLevel$$2 = v248.ErrorCorrectionLevel;
  var codewords$$1 = parser.readCodewords();
  var dataBlocks = DataBlock.getDataBlocks(codewords$$1, version$$7, ecLevel$$2);
  var totalBytes = 0;
  var i$$44 = 0;
  var v1141 = dataBlocks.Length;
  var v249 = i$$44 < v1141;
  for(;v249;) {
    var v1886 = dataBlocks[i$$44];
    var v1142 = v1886.NumDataCodewords;
    totalBytes = totalBytes + v1142;
    i$$44 = i$$44 + 1;
    var v1143 = dataBlocks.Length;
    v249 = i$$44 < v1143
  }
  var resultBytes = new Array(totalBytes);
  var resultOffset$$1 = 0;
  var j$$23 = 0;
  var v1144 = dataBlocks.length;
  var v252 = j$$23 < v1144;
  for(;v252;) {
    var dataBlock = dataBlocks[j$$23];
    var codewordBytes$$1 = dataBlock.Codewords;
    var numDataCodewords$$3 = dataBlock.NumDataCodewords;
    Decoder.correctErrors(codewordBytes$$1, numDataCodewords$$3);
    i$$44 = 0;
    var v251 = i$$44 < numDataCodewords$$3;
    for(;v251;) {
      var v250 = resultOffset$$1;
      resultOffset$$1 = resultOffset$$1 + 1;
      resultBytes[v250] = codewordBytes$$1[i$$44];
      i$$44 = i$$44 + 1;
      v251 = i$$44 < numDataCodewords$$3
    }
    j$$23 = j$$23 + 1;
    var v1145 = dataBlocks.length;
    v252 = j$$23 < v1145
  }
  var v253 = version$$7.VersionNumber;
  var v254 = ecLevel$$2.Bits;
  var reader = new QRCodeDataBlockReader(resultBytes, v253, v254);
  return reader
}
function v142(codewordBytes, numDataCodewords$$2) {
  var numCodewords$$1 = codewordBytes.length;
  var codewordsInts = new Array(numCodewords$$1);
  var i$$43 = 0;
  var v256 = i$$43 < numCodewords$$1;
  for(;v256;) {
    var v255 = codewordBytes[i$$43];
    codewordsInts[i$$43] = v255 & 255;
    i$$43 = i$$43 + 1;
    v256 = i$$43 < numCodewords$$1
  }
  var v257 = codewordBytes.length;
  var numECCodewords = v257 - numDataCodewords$$2;
  try {
    var v258 = Decoder.rsDecoder;
    v258.decode(codewordsInts, numECCodewords)
  }catch(rse) {
    throw rse;
  }
  i$$43 = 0;
  var v259 = i$$43 < numDataCodewords$$2;
  for(;v259;) {
    codewordBytes[i$$43] = codewordsInts[i$$43];
    i$$43 = i$$43 + 1;
    v259 = i$$43 < numDataCodewords$$2
  }
  return
}
function v141(a$$7, b$$4) {
  return a$$7 ^ b$$4
}
function v140(reference) {
  var v1146 = reference < 0;
  var v1887 = !v1146;
  if(v1887) {
    v1146 = reference > 7
  }
  var v260 = v1146;
  if(v260) {
    throw"System.ArgumentException";
  }
  var v261 = DataMask.DATA_MASKS;
  return v261[reference]
}
function v139(rawCodewords, version$$5, ecLevel$$1) {
  var v1147 = rawCodewords.length;
  var v1148 = version$$5.TotalCodewords;
  var v262 = v1147 != v1148;
  if(v262) {
    throw"ArgumentException";
  }
  var ecBlocks = version$$5.getECBlocksForLevel(ecLevel$$1);
  var totalBlocks = 0;
  var ecBlockArray = ecBlocks.ecBlocks;
  var i$$11 = 0;
  var v1149 = ecBlockArray.length;
  var v263 = i$$11 < v1149;
  for(;v263;) {
    var v1888 = ecBlockArray[i$$11];
    var v1150 = v1888.Count;
    totalBlocks = totalBlocks + v1150;
    i$$11 = i$$11 + 1;
    var v1151 = ecBlockArray.length;
    v263 = i$$11 < v1151
  }
  var result$$1 = new Array(totalBlocks);
  var numResultBlocks = 0;
  var j = 0;
  var v1152 = ecBlockArray.length;
  var v268 = j < v1152;
  for(;v268;) {
    var ecBlock$$1 = ecBlockArray[j];
    i$$11 = 0;
    var v1153 = ecBlock$$1.Count;
    var v267 = i$$11 < v1153;
    for(;v267;) {
      var numDataCodewords$$1 = ecBlock$$1.DataCodewords;
      var v264 = ecBlocks.ECCodewordsPerBlock;
      var numBlockCodewords = v264 + numDataCodewords$$1;
      var v265 = result$$1;
      var v266 = numResultBlocks;
      numResultBlocks = numResultBlocks + 1;
      var v1154 = new Array(numBlockCodewords);
      var v2859 = new DataBlock(numDataCodewords$$1, v1154);
      v265[v266] = v2859;
      i$$11 = i$$11 + 1;
      var v1155 = ecBlock$$1.Count;
      v267 = i$$11 < v1155
    }
    j = j + 1;
    var v1156 = ecBlockArray.length;
    v268 = j < v1156
  }
  var v1157 = result$$1[0];
  var v269 = v1157.codewords;
  var shorterBlocksTotalCodewords = v269.length;
  var v270 = result$$1.length;
  var longerBlocksStartAt = v270 - 1;
  var v273 = longerBlocksStartAt >= 0;
  for(;v273;) {
    var v1158 = result$$1[longerBlocksStartAt];
    var v271 = v1158.codewords;
    var numCodewords = v271.length;
    var v272 = numCodewords == shorterBlocksTotalCodewords;
    if(v272) {
      break
    }
    longerBlocksStartAt = longerBlocksStartAt - 1;
    v273 = longerBlocksStartAt >= 0
  }
  longerBlocksStartAt = longerBlocksStartAt + 1;
  var v274 = ecBlocks.ECCodewordsPerBlock;
  var shorterBlocksNumDataCodewords = shorterBlocksTotalCodewords - v274;
  var rawCodewordsOffset = 0;
  i$$11 = 0;
  var v277 = i$$11 < shorterBlocksNumDataCodewords;
  for(;v277;) {
    j = 0;
    var v276 = j < numResultBlocks;
    for(;v276;) {
      var v1159 = result$$1[j];
      var v275 = v1159.codewords;
      var v1160 = rawCodewordsOffset;
      rawCodewordsOffset = rawCodewordsOffset + 1;
      v275[i$$11] = rawCodewords[v1160];
      j = j + 1;
      v276 = j < numResultBlocks
    }
    i$$11 = i$$11 + 1;
    v277 = i$$11 < shorterBlocksNumDataCodewords
  }
  j = longerBlocksStartAt;
  var v279 = j < numResultBlocks;
  for(;v279;) {
    var v1161 = result$$1[j];
    var v278 = v1161.codewords;
    var v1162 = rawCodewordsOffset;
    rawCodewordsOffset = rawCodewordsOffset + 1;
    v278[shorterBlocksNumDataCodewords] = rawCodewords[v1162];
    j = j + 1;
    v279 = j < numResultBlocks
  }
  var v1163 = result$$1[0];
  var v280 = v1163.codewords;
  var max$$4 = v280.length;
  i$$11 = shorterBlocksNumDataCodewords;
  var v284 = i$$11 < max$$4;
  for(;v284;) {
    j = 0;
    var v283 = j < numResultBlocks;
    for(;v283;) {
      var v281;
      var v1164 = j < longerBlocksStartAt;
      if(v1164) {
        v281 = i$$11
      }else {
        v281 = i$$11 + 1
      }
      var iOffset = v281;
      var v1165 = result$$1[j];
      var v282 = v1165.codewords;
      var v1166 = rawCodewordsOffset;
      rawCodewordsOffset = rawCodewordsOffset + 1;
      v282[iOffset] = rawCodewords[v1166];
      j = j + 1;
      v283 = j < numResultBlocks
    }
    i$$11 = i$$11 + 1;
    v284 = i$$11 < max$$4
  }
  return result$$1
}
function v138(bits$$4) {
  var v1167 = bits$$4 < 0;
  var v1890 = !v1167;
  if(v1890) {
    var v1889 = FOR_BITS.Length;
    v1167 = bits$$4 >= v1889
  }
  var v285 = v1167;
  if(v285) {
    throw"ArgumentException";
  }
  return FOR_BITS[bits$$4]
}
function v137(maskedFormatInfo$$1) {
  var bestDifference$$1 = 4294967295;
  var bestFormatInfo = 0;
  var i$$8 = 0;
  var v1168 = FORMAT_INFO_DECODE_LOOKUP.length;
  var v289 = i$$8 < v1168;
  for(;v289;) {
    var decodeInfo = FORMAT_INFO_DECODE_LOOKUP[i$$8];
    var targetInfo = decodeInfo[0];
    var v287 = targetInfo == maskedFormatInfo$$1;
    if(v287) {
      var v286 = decodeInfo[1];
      return new FormatInformation(v286)
    }
    var bitsDifference$$1 = this.numBitsDiffering(maskedFormatInfo$$1, targetInfo);
    var v288 = bitsDifference$$1 < bestDifference$$1;
    if(v288) {
      bestFormatInfo = decodeInfo[1];
      bestDifference$$1 = bitsDifference$$1
    }
    i$$8 = i$$8 + 1;
    var v1169 = FORMAT_INFO_DECODE_LOOKUP.length;
    v289 = i$$8 < v1169
  }
  var v290 = bestDifference$$1 <= 3;
  if(v290) {
    return new FormatInformation(bestFormatInfo)
  }
  return null
}
function v136(maskedFormatInfo) {
  var formatInfo$$1 = FormatInformation.doDecodeFormatInformation(maskedFormatInfo);
  var v291 = formatInfo$$1 != null;
  if(v291) {
    return formatInfo$$1
  }
  var v292 = maskedFormatInfo ^ FORMAT_INFO_MASK_QR;
  return FormatInformation.doDecodeFormatInformation(v292)
}
function v135(a, b$$1) {
  a = a ^ b$$1;
  var v2844 = a & 15;
  var v2823 = BITS_SET_IN_HALF_BYTE[v2844];
  var v2845 = BITS_SET_IN_HALF_BYTE;
  var v2850 = URShift(a, 4);
  var v2846 = v2850 & 15;
  var v2824 = v2845[v2846];
  var v2780 = v2823 + v2824;
  var v2825 = BITS_SET_IN_HALF_BYTE;
  var v2847 = URShift(a, 8);
  var v2826 = v2847 & 15;
  var v2781 = v2825[v2826];
  var v2703 = v2780 + v2781;
  var v2782 = BITS_SET_IN_HALF_BYTE;
  var v2827 = URShift(a, 12);
  var v2783 = v2827 & 15;
  var v2704 = v2782[v2783];
  var v2508 = v2703 + v2704;
  var v2705 = BITS_SET_IN_HALF_BYTE;
  var v2784 = URShift(a, 16);
  var v2706 = v2784 & 15;
  var v2509 = v2705[v2706];
  var v1891 = v2508 + v2509;
  var v2510 = BITS_SET_IN_HALF_BYTE;
  var v2707 = URShift(a, 20);
  var v2511 = v2707 & 15;
  var v1892 = v2510[v2511];
  var v1170 = v1891 + v1892;
  var v1893 = BITS_SET_IN_HALF_BYTE;
  var v2512 = URShift(a, 24);
  var v1894 = v2512 & 15;
  var v1171 = v1893[v1894];
  var v293 = v1170 + v1171;
  var v1172 = BITS_SET_IN_HALF_BYTE;
  var v1895 = URShift(a, 28);
  var v1173 = v1895 & 15;
  var v294 = v1172[v1173];
  return v293 + v294
}
function v134(x0$$4, y0$$4, x1$$5, y1$$5, x2$$3, y2$$3, x3$$2, y3$$2) {
  var v295 = this.squareToQuadrilateral(x0$$4, y0$$4, x1$$5, y1$$5, x2$$3, y2$$3, x3$$2, y3$$2);
  return v295.buildAdjoint()
}
function v133(x0$$3, y0$$3, x1$$4, y1$$4, x2$$2, y2$$2, x3$$1, y3$$1) {
  dy2 = y3$$1 - y2$$2;
  var v1174 = y0$$3 - y1$$4;
  var v296 = v1174 + y2$$2;
  dy3 = v296 - y3$$1;
  var v1175 = dy2 == 0;
  if(v1175) {
    v1175 = dy3 == 0
  }
  var v310 = v1175;
  if(v310) {
    var v297 = x1$$4 - x0$$3;
    var v298 = x2$$2 - x1$$4;
    var v299 = y1$$4 - y0$$3;
    var v300 = y2$$2 - y1$$4;
    return new PerspectiveTransform(v297, v298, x0$$3, v299, v300, y0$$3, 0, 0, 1)
  }else {
    dx1 = x1$$4 - x2$$2;
    dx2 = x3$$1 - x2$$2;
    var v1176 = x0$$3 - x1$$4;
    var v301 = v1176 + x2$$2;
    dx3 = v301 - x3$$1;
    dy1 = y1$$4 - y2$$2;
    var v302 = dx1 * dy2;
    var v303 = dx2 * dy1;
    denominator = v302 - v303;
    var v1177 = dx3 * dy2;
    var v1178 = dx2 * dy3;
    var v304 = v1177 - v1178;
    a13 = v304 / denominator;
    var v1179 = dx1 * dy3;
    var v1180 = dx3 * dy1;
    var v305 = v1179 - v1180;
    a23 = v305 / denominator;
    var v1181 = x1$$4 - x0$$3;
    var v1182 = a13 * x1$$4;
    var v306 = v1181 + v1182;
    var v1183 = x3$$1 - x0$$3;
    var v1184 = a23 * x3$$1;
    var v307 = v1183 + v1184;
    var v1185 = y1$$4 - y0$$3;
    var v1186 = a13 * y1$$4;
    var v308 = v1185 + v1186;
    var v1187 = y3$$1 - y0$$3;
    var v1188 = a23 * y3$$1;
    var v309 = v1187 + v1188;
    return new PerspectiveTransform(v306, v307, x0$$3, v308, v309, y0$$3, a13, a23, 1)
  }
  return
}
function v132(x0$$2, y0$$2, x1$$3, y1$$3, x2$$1, y2$$1, x3, y3, x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p) {
  var qToS = this.quadrilateralToSquare(x0$$2, y0$$2, x1$$3, y1$$3, x2$$1, y2$$1, x3, y3);
  var sToQ = this.squareToQuadrilateral(x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p);
  return sToQ.times(qToS)
}
function v131(versionBits) {
  var bestDifference = 4294967295;
  var bestVersion = 0;
  var i$$4 = 0;
  var v1896 = Version.VERSION_DECODE_INFO;
  var v1189 = v1896.length;
  var v315 = i$$4 < v1189;
  for(;v315;) {
    var v311 = Version.VERSION_DECODE_INFO;
    var targetVersion = v311[i$$4];
    var v313 = targetVersion == versionBits;
    if(v313) {
      var v312 = i$$4 + 7;
      return this.getVersionForNumber(v312)
    }
    var bitsDifference = FormatInformation.numBitsDiffering(versionBits, targetVersion);
    var v314 = bitsDifference < bestDifference;
    if(v314) {
      bestVersion = i$$4 + 7;
      bestDifference = bitsDifference
    }
    i$$4 = i$$4 + 1;
    var v1897 = Version.VERSION_DECODE_INFO;
    var v1190 = v1897.length;
    v315 = i$$4 < v1190
  }
  var v316 = bestDifference <= 3;
  if(v316) {
    return this.getVersionForNumber(bestVersion)
  }
  return null
}
function v130(dimension$$3) {
  var v1191 = dimension$$3 % 4;
  var v317 = v1191 != 1;
  if(v317) {
    throw"Error getProvisionalVersionForDimension";
  }
  try {
    var v1192 = dimension$$3 - 17;
    var v318 = v1192 >> 2;
    return Version.getVersionForNumber(v318)
  }catch(iae) {
    throw"Error getVersionForNumber";
  }
  return
}
function v129(versionNumber$$1) {
  var v1193 = versionNumber$$1 < 1;
  var v1898 = !v1193;
  if(v1898) {
    v1193 = versionNumber$$1 > 40
  }
  var v319 = v1193;
  if(v319) {
    throw"ArgumentException";
  }
  var v320 = Version.VERSIONS;
  var v321 = versionNumber$$1 - 1;
  return v320[v321]
}
function v128(image$$4, dimension$$1, p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY) {
  var transform$$1 = PerspectiveTransform.quadrilateralToQuadrilateral(p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY);
  return GridSampler.sampleGrid3(image$$4, dimension$$1, transform$$1)
}
function v127(image$$3, dimension, transform) {
  var bits = new BitMatrix(dimension);
  var v322 = dimension << 1;
  var points$$1 = new Array(v322);
  var y$$32 = 0;
  var v339 = y$$32 < dimension;
  for(;v339;) {
    var max = points$$1.length;
    var iValue = y$$32 + 0.5;
    var x$$49 = 0;
    var v325 = x$$49 < max;
    for(;v325;) {
      var v323 = x$$49 >> 1;
      points$$1[x$$49] = v323 + 0.5;
      var v324 = x$$49 + 1;
      points$$1[v324] = iValue;
      x$$49 = x$$49 + 2;
      v325 = x$$49 < max
    }
    transform.transformPoints1(points$$1);
    GridSampler.checkAndNudgePoints(image$$3, points$$1);
    try {
      x$$49 = 0;
      var v338 = x$$49 < max;
      for(;v338;) {
        var v1899 = points$$1[x$$49];
        var v1194 = Math.floor(v1899);
        var v326 = v1194 * 4;
        var v2708 = x$$49 + 1;
        var v2513 = points$$1[v2708];
        var v1900 = Math.floor(v2513);
        var v1901 = qrcode.width;
        var v1195 = v1900 * v1901;
        var v327 = v1195 * 4;
        var xpoint = v326 + v327;
        var v328 = image$$3;
        var v1902 = points$$1[x$$49];
        var v1196 = Math.floor(v1902);
        var v1903 = qrcode.width;
        var v2709 = x$$49 + 1;
        var v2514 = points$$1[v2709];
        var v1904 = Math.floor(v2514);
        var v1197 = v1903 * v1904;
        var v329 = v1196 + v1197;
        var bit = v328[v329];
        var v1198 = qrcode.imagedata;
        var v330 = v1198.data;
        var v1199;
        if(bit) {
          v1199 = 255
        }else {
          v1199 = 0
        }
        v330[xpoint] = v1199;
        var v1200 = qrcode.imagedata;
        var v331 = v1200.data;
        var v332 = xpoint + 1;
        var v1201;
        if(bit) {
          v1201 = 255
        }else {
          v1201 = 0
        }
        v331[v332] = v1201;
        var v1202 = qrcode.imagedata;
        var v333 = v1202.data;
        var v334 = xpoint + 2;
        v333[v334] = 0;
        var v1203 = qrcode.imagedata;
        var v335 = v1203.data;
        var v336 = xpoint + 3;
        v335[v336] = 255;
        if(bit) {
          var v337 = x$$49 >> 1;
          bits.set_Renamed(v337, y$$32)
        }
        x$$49 = x$$49 + 2;
        v338 = x$$49 < max
      }
    }catch(aioobe) {
      throw"Error.checkAndNudgePoints";
    }
    y$$32 = y$$32 + 1;
    v339 = y$$32 < dimension
  }
  return bits
}
function v126(image$$2, points) {
  var width$$9 = qrcode.width;
  var height$$8 = qrcode.height;
  var nudged = true;
  var offset$$12 = 0;
  var v1905 = points.Length;
  var v1204 = offset$$12 < v1905;
  if(v1204) {
    v1204 = nudged
  }
  var v349 = v1204;
  for(;v349;) {
    var v340 = points[offset$$12];
    var x$$48 = Math.floor(v340);
    var v1205 = offset$$12 + 1;
    var v341 = points[v1205];
    var y$$31 = Math.floor(v341);
    var v1206 = x$$48 < -1;
    var v1907 = !v1206;
    if(v1907) {
      var v1906 = x$$48 > width$$9;
      var v2516 = !v1906;
      if(v2516) {
        var v2515 = y$$31 < -1;
        var v2710 = !v2515;
        if(v2710) {
          v2515 = y$$31 > height$$8
        }
        v1906 = v2515
      }
      v1206 = v1906
    }
    var v342 = v1206;
    if(v342) {
      throw"Error.checkAndNudgePoints ";
    }
    nudged = false;
    var v344 = x$$48 == -1;
    if(v344) {
      points[offset$$12] = 0;
      nudged = true
    }else {
      var v343 = x$$48 == width$$9;
      if(v343) {
        points[offset$$12] = width$$9 - 1;
        nudged = true
      }
    }
    var v348 = y$$31 == -1;
    if(v348) {
      var v345 = offset$$12 + 1;
      points[v345] = 0;
      nudged = true
    }else {
      var v347 = y$$31 == height$$8;
      if(v347) {
        var v346 = offset$$12 + 1;
        points[v346] = height$$8 - 1;
        nudged = true
      }
    }
    offset$$12 = offset$$12 + 2;
    var v1908 = points.Length;
    var v1207 = offset$$12 < v1908;
    if(v1207) {
      v1207 = nudged
    }
    v349 = v1207
  }
  nudged = true;
  var v350 = points.Length;
  offset$$12 = v350 - 2;
  var v1208 = offset$$12 >= 0;
  if(v1208) {
    v1208 = nudged
  }
  var v360 = v1208;
  for(;v360;) {
    var v351 = points[offset$$12];
    x$$48 = Math.floor(v351);
    var v1209 = offset$$12 + 1;
    var v352 = points[v1209];
    y$$31 = Math.floor(v352);
    var v1210 = x$$48 < -1;
    var v1910 = !v1210;
    if(v1910) {
      var v1909 = x$$48 > width$$9;
      var v2518 = !v1909;
      if(v2518) {
        var v2517 = y$$31 < -1;
        var v2711 = !v2517;
        if(v2711) {
          v2517 = y$$31 > height$$8
        }
        v1909 = v2517
      }
      v1210 = v1909
    }
    var v353 = v1210;
    if(v353) {
      throw"Error.checkAndNudgePoints ";
    }
    nudged = false;
    var v355 = x$$48 == -1;
    if(v355) {
      points[offset$$12] = 0;
      nudged = true
    }else {
      var v354 = x$$48 == width$$9;
      if(v354) {
        points[offset$$12] = width$$9 - 1;
        nudged = true
      }
    }
    var v359 = y$$31 == -1;
    if(v359) {
      var v356 = offset$$12 + 1;
      points[v356] = 0;
      nudged = true
    }else {
      var v358 = y$$31 == height$$8;
      if(v358) {
        var v357 = offset$$12 + 1;
        points[v357] = height$$8 - 1;
        nudged = true
      }
    }
    offset$$12 = offset$$12 - 2;
    var v1211 = offset$$12 >= 0;
    if(v1211) {
      v1211 = nudged
    }
    v360 = v1211
  }
  return
}
function ECB(count$$6, dataCodewords) {
  function v1() {
    return this.dataCodewords
  }
  function v0() {
    return this.count
  }
  this.count = count$$6;
  this.dataCodewords = dataCodewords;
  this.__defineGetter__("Count", v0);
  this.__defineGetter__("DataCodewords", v1);
  return
}
function ECBlocks(ecCodewordsPerBlock, ecBlocks1, ecBlocks2) {
  function v5() {
    return this.ecBlocks
  }
  function v4() {
    var total = 0;
    var i$$1 = 0;
    var v1911 = this.ecBlocks;
    var v1212 = v1911.length;
    var v361 = i$$1 < v1212;
    for(;v361;) {
      var v2519 = this.ecBlocks;
      var v1912 = v2519[i$$1];
      var v1213 = v1912.length;
      total = total + v1213;
      i$$1 = i$$1 + 1;
      var v1913 = this.ecBlocks;
      var v1214 = v1913.length;
      v361 = i$$1 < v1214
    }
    return total
  }
  function v3() {
    var v362 = this.ecCodewordsPerBlock;
    var v363 = this.NumBlocks;
    return v362 * v363
  }
  function v2() {
    return this.ecCodewordsPerBlock
  }
  this.ecCodewordsPerBlock = ecCodewordsPerBlock;
  if(ecBlocks2) {
    var v2860 = new Array(ecBlocks1, ecBlocks2);
    this.ecBlocks = v2860
  }else {
    var v2861 = new Array(ecBlocks1);
    this.ecBlocks = v2861
  }
  this.__defineGetter__("ECCodewordsPerBlock", v2);
  this.__defineGetter__("TotalECCodewords", v3);
  this.__defineGetter__("NumBlocks", v4);
  this.getECBlocks = v5;
  return
}
function Version(versionNumber, alignmentPatternCenters, ecBlocks1$$1, ecBlocks2$$1, ecBlocks3, ecBlocks4) {
  function v11(ecLevel) {
    var v364 = this.ecBlocks;
    var v365 = ecLevel.ordinal_Renamed_Field;
    return v364[v365]
  }
  function v10() {
    var dimension$$2 = this.DimensionForVersion;
    var bitMatrix = new BitMatrix(dimension$$2);
    bitMatrix.setRegion(0, 0, 9, 9);
    var v366 = dimension$$2 - 8;
    bitMatrix.setRegion(v366, 0, 8, 9);
    var v367 = dimension$$2 - 8;
    bitMatrix.setRegion(0, v367, 9, 8);
    var v368 = this.alignmentPatternCenters;
    var max$$1 = v368.length;
    var x$$50 = 0;
    var v373 = x$$50 < max$$1;
    for(;v373;) {
      var v1215 = this.alignmentPatternCenters;
      var v369 = v1215[x$$50];
      var i$$3 = v369 - 2;
      var y$$33 = 0;
      var v372 = y$$33 < max$$1;
      for(;v372;) {
        var v1914 = x$$50 == 0;
        if(v1914) {
          var v2520 = y$$33 == 0;
          var v2713 = !v2520;
          if(v2713) {
            var v2712 = max$$1 - 1;
            v2520 = y$$33 == v2712
          }
          v1914 = v2520
        }
        var v1216 = v1914;
        var v1916 = !v1216;
        if(v1916) {
          var v2521 = max$$1 - 1;
          var v1915 = x$$50 == v2521;
          if(v1915) {
            v1915 = y$$33 == 0
          }
          v1216 = v1915
        }
        var v370 = v1216;
        if(v370) {
          y$$33 = y$$33 + 1;
          v372 = y$$33 < max$$1;
          continue
        }
        var v1917 = this.alignmentPatternCenters;
        var v1217 = v1917[y$$33];
        var v371 = v1217 - 2;
        bitMatrix.setRegion(v371, i$$3, 5, 5);
        y$$33 = y$$33 + 1;
        v372 = y$$33 < max$$1
      }
      x$$50 = x$$50 + 1;
      v373 = x$$50 < max$$1
    }
    var v374 = dimension$$2 - 17;
    bitMatrix.setRegion(6, 9, 1, v374);
    var v375 = dimension$$2 - 17;
    bitMatrix.setRegion(9, 6, v375, 1);
    var v1218 = this.versionNumber;
    var v378 = v1218 > 6;
    if(v378) {
      var v376 = dimension$$2 - 11;
      bitMatrix.setRegion(v376, 0, 3, 6);
      var v377 = dimension$$2 - 11;
      bitMatrix.setRegion(0, v377, 6, 3)
    }
    return bitMatrix
  }
  function v9() {
    var v1219 = this.versionNumber;
    var v379 = 4 * v1219;
    return 17 + v379
  }
  function v8() {
    return this.totalCodewords
  }
  function v7() {
    return this.alignmentPatternCenters
  }
  function v6() {
    return this.versionNumber
  }
  this.versionNumber = versionNumber;
  this.alignmentPatternCenters = alignmentPatternCenters;
  var v2862 = new Array(ecBlocks1$$1, ecBlocks2$$1, ecBlocks3, ecBlocks4);
  this.ecBlocks = v2862;
  var total$$1 = 0;
  var ecCodewords = ecBlocks1$$1.ECCodewordsPerBlock;
  var ecbArray = ecBlocks1$$1.ecBlocks;
  var i$$2 = 0;
  var v1220 = ecbArray.length;
  var v380 = i$$2 < v1220;
  for(;v380;) {
    var ecBlock = ecbArray[i$$2];
    var v1918 = ecBlock.Count;
    var v2522 = ecBlock.DataCodewords;
    var v1919 = v2522 + ecCodewords;
    var v1221 = v1918 * v1919;
    total$$1 = total$$1 + v1221;
    i$$2 = i$$2 + 1;
    var v1222 = ecbArray.length;
    v380 = i$$2 < v1222
  }
  this.totalCodewords = total$$1;
  this.__defineGetter__("VersionNumber", v6);
  this.__defineGetter__("AlignmentPatternCenters", v7);
  this.__defineGetter__("TotalCodewords", v8);
  this.__defineGetter__("DimensionForVersion", v9);
  this.buildFunctionPattern = v10;
  this.getECBlocksForLevel = v11;
  return
}
function buildVersions() {
  var v1223 = new Array;
  var v1920 = new ECB(1, 19);
  var v1224 = new ECBlocks(7, v1920);
  var v1921 = new ECB(1, 16);
  var v1225 = new ECBlocks(10, v1921);
  var v1922 = new ECB(1, 13);
  var v1226 = new ECBlocks(13, v1922);
  var v1923 = new ECB(1, 9);
  var v1227 = new ECBlocks(17, v1923);
  var v381 = new Version(1, v1223, v1224, v1225, v1226, v1227);
  var v1228 = new Array(6, 18);
  var v1924 = new ECB(1, 34);
  var v1229 = new ECBlocks(10, v1924);
  var v1925 = new ECB(1, 28);
  var v1230 = new ECBlocks(16, v1925);
  var v1926 = new ECB(1, 22);
  var v1231 = new ECBlocks(22, v1926);
  var v1927 = new ECB(1, 16);
  var v1232 = new ECBlocks(28, v1927);
  var v382 = new Version(2, v1228, v1229, v1230, v1231, v1232);
  var v1233 = new Array(6, 22);
  var v1928 = new ECB(1, 55);
  var v1234 = new ECBlocks(15, v1928);
  var v1929 = new ECB(1, 44);
  var v1235 = new ECBlocks(26, v1929);
  var v1930 = new ECB(2, 17);
  var v1236 = new ECBlocks(18, v1930);
  var v1931 = new ECB(2, 13);
  var v1237 = new ECBlocks(22, v1931);
  var v383 = new Version(3, v1233, v1234, v1235, v1236, v1237);
  var v1238 = new Array(6, 26);
  var v1932 = new ECB(1, 80);
  var v1239 = new ECBlocks(20, v1932);
  var v1933 = new ECB(2, 32);
  var v1240 = new ECBlocks(18, v1933);
  var v1934 = new ECB(2, 24);
  var v1241 = new ECBlocks(26, v1934);
  var v1935 = new ECB(4, 9);
  var v1242 = new ECBlocks(16, v1935);
  var v384 = new Version(4, v1238, v1239, v1240, v1241, v1242);
  var v1243 = new Array(6, 30);
  var v1936 = new ECB(1, 108);
  var v1244 = new ECBlocks(26, v1936);
  var v1937 = new ECB(2, 43);
  var v1245 = new ECBlocks(24, v1937);
  var v1938 = new ECB(2, 15);
  var v1939 = new ECB(2, 16);
  var v1246 = new ECBlocks(18, v1938, v1939);
  var v1940 = new ECB(2, 11);
  var v1941 = new ECB(2, 12);
  var v1247 = new ECBlocks(22, v1940, v1941);
  var v385 = new Version(5, v1243, v1244, v1245, v1246, v1247);
  var v1248 = new Array(6, 34);
  var v1942 = new ECB(2, 68);
  var v1249 = new ECBlocks(18, v1942);
  var v1943 = new ECB(4, 27);
  var v1250 = new ECBlocks(16, v1943);
  var v1944 = new ECB(4, 19);
  var v1251 = new ECBlocks(24, v1944);
  var v1945 = new ECB(4, 15);
  var v1252 = new ECBlocks(28, v1945);
  var v386 = new Version(6, v1248, v1249, v1250, v1251, v1252);
  var v1253 = new Array(6, 22, 38);
  var v1946 = new ECB(2, 78);
  var v1254 = new ECBlocks(20, v1946);
  var v1947 = new ECB(4, 31);
  var v1255 = new ECBlocks(18, v1947);
  var v1948 = new ECB(2, 14);
  var v1949 = new ECB(4, 15);
  var v1256 = new ECBlocks(18, v1948, v1949);
  var v1950 = new ECB(4, 13);
  var v1951 = new ECB(1, 14);
  var v1257 = new ECBlocks(26, v1950, v1951);
  var v387 = new Version(7, v1253, v1254, v1255, v1256, v1257);
  var v1258 = new Array(6, 24, 42);
  var v1952 = new ECB(2, 97);
  var v1259 = new ECBlocks(24, v1952);
  var v1953 = new ECB(2, 38);
  var v1954 = new ECB(2, 39);
  var v1260 = new ECBlocks(22, v1953, v1954);
  var v1955 = new ECB(4, 18);
  var v1956 = new ECB(2, 19);
  var v1261 = new ECBlocks(22, v1955, v1956);
  var v1957 = new ECB(4, 14);
  var v1958 = new ECB(2, 15);
  var v1262 = new ECBlocks(26, v1957, v1958);
  var v388 = new Version(8, v1258, v1259, v1260, v1261, v1262);
  var v1263 = new Array(6, 26, 46);
  var v1959 = new ECB(2, 116);
  var v1264 = new ECBlocks(30, v1959);
  var v1960 = new ECB(3, 36);
  var v1961 = new ECB(2, 37);
  var v1265 = new ECBlocks(22, v1960, v1961);
  var v1962 = new ECB(4, 16);
  var v1963 = new ECB(4, 17);
  var v1266 = new ECBlocks(20, v1962, v1963);
  var v1964 = new ECB(4, 12);
  var v1965 = new ECB(4, 13);
  var v1267 = new ECBlocks(24, v1964, v1965);
  var v389 = new Version(9, v1263, v1264, v1265, v1266, v1267);
  var v1268 = new Array(6, 28, 50);
  var v1966 = new ECB(2, 68);
  var v1967 = new ECB(2, 69);
  var v1269 = new ECBlocks(18, v1966, v1967);
  var v1968 = new ECB(4, 43);
  var v1969 = new ECB(1, 44);
  var v1270 = new ECBlocks(26, v1968, v1969);
  var v1970 = new ECB(6, 19);
  var v1971 = new ECB(2, 20);
  var v1271 = new ECBlocks(24, v1970, v1971);
  var v1972 = new ECB(6, 15);
  var v1973 = new ECB(2, 16);
  var v1272 = new ECBlocks(28, v1972, v1973);
  var v390 = new Version(10, v1268, v1269, v1270, v1271, v1272);
  var v1273 = new Array(6, 30, 54);
  var v1974 = new ECB(4, 81);
  var v1274 = new ECBlocks(20, v1974);
  var v1975 = new ECB(1, 50);
  var v1976 = new ECB(4, 51);
  var v1275 = new ECBlocks(30, v1975, v1976);
  var v1977 = new ECB(4, 22);
  var v1978 = new ECB(4, 23);
  var v1276 = new ECBlocks(28, v1977, v1978);
  var v1979 = new ECB(3, 12);
  var v1980 = new ECB(8, 13);
  var v1277 = new ECBlocks(24, v1979, v1980);
  var v391 = new Version(11, v1273, v1274, v1275, v1276, v1277);
  var v1278 = new Array(6, 32, 58);
  var v1981 = new ECB(2, 92);
  var v1982 = new ECB(2, 93);
  var v1279 = new ECBlocks(24, v1981, v1982);
  var v1983 = new ECB(6, 36);
  var v1984 = new ECB(2, 37);
  var v1280 = new ECBlocks(22, v1983, v1984);
  var v1985 = new ECB(4, 20);
  var v1986 = new ECB(6, 21);
  var v1281 = new ECBlocks(26, v1985, v1986);
  var v1987 = new ECB(7, 14);
  var v1988 = new ECB(4, 15);
  var v1282 = new ECBlocks(28, v1987, v1988);
  var v392 = new Version(12, v1278, v1279, v1280, v1281, v1282);
  var v1283 = new Array(6, 34, 62);
  var v1989 = new ECB(4, 107);
  var v1284 = new ECBlocks(26, v1989);
  var v1990 = new ECB(8, 37);
  var v1991 = new ECB(1, 38);
  var v1285 = new ECBlocks(22, v1990, v1991);
  var v1992 = new ECB(8, 20);
  var v1993 = new ECB(4, 21);
  var v1286 = new ECBlocks(24, v1992, v1993);
  var v1994 = new ECB(12, 11);
  var v1995 = new ECB(4, 12);
  var v1287 = new ECBlocks(22, v1994, v1995);
  var v393 = new Version(13, v1283, v1284, v1285, v1286, v1287);
  var v1288 = new Array(6, 26, 46, 66);
  var v1996 = new ECB(3, 115);
  var v1997 = new ECB(1, 116);
  var v1289 = new ECBlocks(30, v1996, v1997);
  var v1998 = new ECB(4, 40);
  var v1999 = new ECB(5, 41);
  var v1290 = new ECBlocks(24, v1998, v1999);
  var v2000 = new ECB(11, 16);
  var v2001 = new ECB(5, 17);
  var v1291 = new ECBlocks(20, v2000, v2001);
  var v2002 = new ECB(11, 12);
  var v2003 = new ECB(5, 13);
  var v1292 = new ECBlocks(24, v2002, v2003);
  var v394 = new Version(14, v1288, v1289, v1290, v1291, v1292);
  var v1293 = new Array(6, 26, 48, 70);
  var v2004 = new ECB(5, 87);
  var v2005 = new ECB(1, 88);
  var v1294 = new ECBlocks(22, v2004, v2005);
  var v2006 = new ECB(5, 41);
  var v2007 = new ECB(5, 42);
  var v1295 = new ECBlocks(24, v2006, v2007);
  var v2008 = new ECB(5, 24);
  var v2009 = new ECB(7, 25);
  var v1296 = new ECBlocks(30, v2008, v2009);
  var v2010 = new ECB(11, 12);
  var v2011 = new ECB(7, 13);
  var v1297 = new ECBlocks(24, v2010, v2011);
  var v395 = new Version(15, v1293, v1294, v1295, v1296, v1297);
  var v1298 = new Array(6, 26, 50, 74);
  var v2012 = new ECB(5, 98);
  var v2013 = new ECB(1, 99);
  var v1299 = new ECBlocks(24, v2012, v2013);
  var v2014 = new ECB(7, 45);
  var v2015 = new ECB(3, 46);
  var v1300 = new ECBlocks(28, v2014, v2015);
  var v2016 = new ECB(15, 19);
  var v2017 = new ECB(2, 20);
  var v1301 = new ECBlocks(24, v2016, v2017);
  var v2018 = new ECB(3, 15);
  var v2019 = new ECB(13, 16);
  var v1302 = new ECBlocks(30, v2018, v2019);
  var v396 = new Version(16, v1298, v1299, v1300, v1301, v1302);
  var v1303 = new Array(6, 30, 54, 78);
  var v2020 = new ECB(1, 107);
  var v2021 = new ECB(5, 108);
  var v1304 = new ECBlocks(28, v2020, v2021);
  var v2022 = new ECB(10, 46);
  var v2023 = new ECB(1, 47);
  var v1305 = new ECBlocks(28, v2022, v2023);
  var v2024 = new ECB(1, 22);
  var v2025 = new ECB(15, 23);
  var v1306 = new ECBlocks(28, v2024, v2025);
  var v2026 = new ECB(2, 14);
  var v2027 = new ECB(17, 15);
  var v1307 = new ECBlocks(28, v2026, v2027);
  var v397 = new Version(17, v1303, v1304, v1305, v1306, v1307);
  var v1308 = new Array(6, 30, 56, 82);
  var v2028 = new ECB(5, 120);
  var v2029 = new ECB(1, 121);
  var v1309 = new ECBlocks(30, v2028, v2029);
  var v2030 = new ECB(9, 43);
  var v2031 = new ECB(4, 44);
  var v1310 = new ECBlocks(26, v2030, v2031);
  var v2032 = new ECB(17, 22);
  var v2033 = new ECB(1, 23);
  var v1311 = new ECBlocks(28, v2032, v2033);
  var v2034 = new ECB(2, 14);
  var v2035 = new ECB(19, 15);
  var v1312 = new ECBlocks(28, v2034, v2035);
  var v398 = new Version(18, v1308, v1309, v1310, v1311, v1312);
  var v1313 = new Array(6, 30, 58, 86);
  var v2036 = new ECB(3, 113);
  var v2037 = new ECB(4, 114);
  var v1314 = new ECBlocks(28, v2036, v2037);
  var v2038 = new ECB(3, 44);
  var v2039 = new ECB(11, 45);
  var v1315 = new ECBlocks(26, v2038, v2039);
  var v2040 = new ECB(17, 21);
  var v2041 = new ECB(4, 22);
  var v1316 = new ECBlocks(26, v2040, v2041);
  var v2042 = new ECB(9, 13);
  var v2043 = new ECB(16, 14);
  var v1317 = new ECBlocks(26, v2042, v2043);
  var v399 = new Version(19, v1313, v1314, v1315, v1316, v1317);
  var v1318 = new Array(6, 34, 62, 90);
  var v2044 = new ECB(3, 107);
  var v2045 = new ECB(5, 108);
  var v1319 = new ECBlocks(28, v2044, v2045);
  var v2046 = new ECB(3, 41);
  var v2047 = new ECB(13, 42);
  var v1320 = new ECBlocks(26, v2046, v2047);
  var v2048 = new ECB(15, 24);
  var v2049 = new ECB(5, 25);
  var v1321 = new ECBlocks(30, v2048, v2049);
  var v2050 = new ECB(15, 15);
  var v2051 = new ECB(10, 16);
  var v1322 = new ECBlocks(28, v2050, v2051);
  var v400 = new Version(20, v1318, v1319, v1320, v1321, v1322);
  var v1323 = new Array(6, 28, 50, 72, 94);
  var v2052 = new ECB(4, 116);
  var v2053 = new ECB(4, 117);
  var v1324 = new ECBlocks(28, v2052, v2053);
  var v2054 = new ECB(17, 42);
  var v1325 = new ECBlocks(26, v2054);
  var v2055 = new ECB(17, 22);
  var v2056 = new ECB(6, 23);
  var v1326 = new ECBlocks(28, v2055, v2056);
  var v2057 = new ECB(19, 16);
  var v2058 = new ECB(6, 17);
  var v1327 = new ECBlocks(30, v2057, v2058);
  var v401 = new Version(21, v1323, v1324, v1325, v1326, v1327);
  var v1328 = new Array(6, 26, 50, 74, 98);
  var v2059 = new ECB(2, 111);
  var v2060 = new ECB(7, 112);
  var v1329 = new ECBlocks(28, v2059, v2060);
  var v2061 = new ECB(17, 46);
  var v1330 = new ECBlocks(28, v2061);
  var v2062 = new ECB(7, 24);
  var v2063 = new ECB(16, 25);
  var v1331 = new ECBlocks(30, v2062, v2063);
  var v2064 = new ECB(34, 13);
  var v1332 = new ECBlocks(24, v2064);
  var v402 = new Version(22, v1328, v1329, v1330, v1331, v1332);
  var v1333 = new Array(6, 30, 54, 74, 102);
  var v2065 = new ECB(4, 121);
  var v2066 = new ECB(5, 122);
  var v1334 = new ECBlocks(30, v2065, v2066);
  var v2067 = new ECB(4, 47);
  var v2068 = new ECB(14, 48);
  var v1335 = new ECBlocks(28, v2067, v2068);
  var v2069 = new ECB(11, 24);
  var v2070 = new ECB(14, 25);
  var v1336 = new ECBlocks(30, v2069, v2070);
  var v2071 = new ECB(16, 15);
  var v2072 = new ECB(14, 16);
  var v1337 = new ECBlocks(30, v2071, v2072);
  var v403 = new Version(23, v1333, v1334, v1335, v1336, v1337);
  var v1338 = new Array(6, 28, 54, 80, 106);
  var v2073 = new ECB(6, 117);
  var v2074 = new ECB(4, 118);
  var v1339 = new ECBlocks(30, v2073, v2074);
  var v2075 = new ECB(6, 45);
  var v2076 = new ECB(14, 46);
  var v1340 = new ECBlocks(28, v2075, v2076);
  var v2077 = new ECB(11, 24);
  var v2078 = new ECB(16, 25);
  var v1341 = new ECBlocks(30, v2077, v2078);
  var v2079 = new ECB(30, 16);
  var v2080 = new ECB(2, 17);
  var v1342 = new ECBlocks(30, v2079, v2080);
  var v404 = new Version(24, v1338, v1339, v1340, v1341, v1342);
  var v1343 = new Array(6, 32, 58, 84, 110);
  var v2081 = new ECB(8, 106);
  var v2082 = new ECB(4, 107);
  var v1344 = new ECBlocks(26, v2081, v2082);
  var v2083 = new ECB(8, 47);
  var v2084 = new ECB(13, 48);
  var v1345 = new ECBlocks(28, v2083, v2084);
  var v2085 = new ECB(7, 24);
  var v2086 = new ECB(22, 25);
  var v1346 = new ECBlocks(30, v2085, v2086);
  var v2087 = new ECB(22, 15);
  var v2088 = new ECB(13, 16);
  var v1347 = new ECBlocks(30, v2087, v2088);
  var v405 = new Version(25, v1343, v1344, v1345, v1346, v1347);
  var v1348 = new Array(6, 30, 58, 86, 114);
  var v2089 = new ECB(10, 114);
  var v2090 = new ECB(2, 115);
  var v1349 = new ECBlocks(28, v2089, v2090);
  var v2091 = new ECB(19, 46);
  var v2092 = new ECB(4, 47);
  var v1350 = new ECBlocks(28, v2091, v2092);
  var v2093 = new ECB(28, 22);
  var v2094 = new ECB(6, 23);
  var v1351 = new ECBlocks(28, v2093, v2094);
  var v2095 = new ECB(33, 16);
  var v2096 = new ECB(4, 17);
  var v1352 = new ECBlocks(30, v2095, v2096);
  var v406 = new Version(26, v1348, v1349, v1350, v1351, v1352);
  var v1353 = new Array(6, 34, 62, 90, 118);
  var v2097 = new ECB(8, 122);
  var v2098 = new ECB(4, 123);
  var v1354 = new ECBlocks(30, v2097, v2098);
  var v2099 = new ECB(22, 45);
  var v2100 = new ECB(3, 46);
  var v1355 = new ECBlocks(28, v2099, v2100);
  var v2101 = new ECB(8, 23);
  var v2102 = new ECB(26, 24);
  var v1356 = new ECBlocks(30, v2101, v2102);
  var v2103 = new ECB(12, 15);
  var v2104 = new ECB(28, 16);
  var v1357 = new ECBlocks(30, v2103, v2104);
  var v407 = new Version(27, v1353, v1354, v1355, v1356, v1357);
  var v1358 = new Array(6, 26, 50, 74, 98, 122);
  var v2105 = new ECB(3, 117);
  var v2106 = new ECB(10, 118);
  var v1359 = new ECBlocks(30, v2105, v2106);
  var v2107 = new ECB(3, 45);
  var v2108 = new ECB(23, 46);
  var v1360 = new ECBlocks(28, v2107, v2108);
  var v2109 = new ECB(4, 24);
  var v2110 = new ECB(31, 25);
  var v1361 = new ECBlocks(30, v2109, v2110);
  var v2111 = new ECB(11, 15);
  var v2112 = new ECB(31, 16);
  var v1362 = new ECBlocks(30, v2111, v2112);
  var v408 = new Version(28, v1358, v1359, v1360, v1361, v1362);
  var v1363 = new Array(6, 30, 54, 78, 102, 126);
  var v2113 = new ECB(7, 116);
  var v2114 = new ECB(7, 117);
  var v1364 = new ECBlocks(30, v2113, v2114);
  var v2115 = new ECB(21, 45);
  var v2116 = new ECB(7, 46);
  var v1365 = new ECBlocks(28, v2115, v2116);
  var v2117 = new ECB(1, 23);
  var v2118 = new ECB(37, 24);
  var v1366 = new ECBlocks(30, v2117, v2118);
  var v2119 = new ECB(19, 15);
  var v2120 = new ECB(26, 16);
  var v1367 = new ECBlocks(30, v2119, v2120);
  var v409 = new Version(29, v1363, v1364, v1365, v1366, v1367);
  var v1368 = new Array(6, 26, 52, 78, 104, 130);
  var v2121 = new ECB(5, 115);
  var v2122 = new ECB(10, 116);
  var v1369 = new ECBlocks(30, v2121, v2122);
  var v2123 = new ECB(19, 47);
  var v2124 = new ECB(10, 48);
  var v1370 = new ECBlocks(28, v2123, v2124);
  var v2125 = new ECB(15, 24);
  var v2126 = new ECB(25, 25);
  var v1371 = new ECBlocks(30, v2125, v2126);
  var v2127 = new ECB(23, 15);
  var v2128 = new ECB(25, 16);
  var v1372 = new ECBlocks(30, v2127, v2128);
  var v410 = new Version(30, v1368, v1369, v1370, v1371, v1372);
  var v1373 = new Array(6, 30, 56, 82, 108, 134);
  var v2129 = new ECB(13, 115);
  var v2130 = new ECB(3, 116);
  var v1374 = new ECBlocks(30, v2129, v2130);
  var v2131 = new ECB(2, 46);
  var v2132 = new ECB(29, 47);
  var v1375 = new ECBlocks(28, v2131, v2132);
  var v2133 = new ECB(42, 24);
  var v2134 = new ECB(1, 25);
  var v1376 = new ECBlocks(30, v2133, v2134);
  var v2135 = new ECB(23, 15);
  var v2136 = new ECB(28, 16);
  var v1377 = new ECBlocks(30, v2135, v2136);
  var v411 = new Version(31, v1373, v1374, v1375, v1376, v1377);
  var v1378 = new Array(6, 34, 60, 86, 112, 138);
  var v2137 = new ECB(17, 115);
  var v1379 = new ECBlocks(30, v2137);
  var v2138 = new ECB(10, 46);
  var v2139 = new ECB(23, 47);
  var v1380 = new ECBlocks(28, v2138, v2139);
  var v2140 = new ECB(10, 24);
  var v2141 = new ECB(35, 25);
  var v1381 = new ECBlocks(30, v2140, v2141);
  var v2142 = new ECB(19, 15);
  var v2143 = new ECB(35, 16);
  var v1382 = new ECBlocks(30, v2142, v2143);
  var v412 = new Version(32, v1378, v1379, v1380, v1381, v1382);
  var v1383 = new Array(6, 30, 58, 86, 114, 142);
  var v2144 = new ECB(17, 115);
  var v2145 = new ECB(1, 116);
  var v1384 = new ECBlocks(30, v2144, v2145);
  var v2146 = new ECB(14, 46);
  var v2147 = new ECB(21, 47);
  var v1385 = new ECBlocks(28, v2146, v2147);
  var v2148 = new ECB(29, 24);
  var v2149 = new ECB(19, 25);
  var v1386 = new ECBlocks(30, v2148, v2149);
  var v2150 = new ECB(11, 15);
  var v2151 = new ECB(46, 16);
  var v1387 = new ECBlocks(30, v2150, v2151);
  var v413 = new Version(33, v1383, v1384, v1385, v1386, v1387);
  var v1388 = new Array(6, 34, 62, 90, 118, 146);
  var v2152 = new ECB(13, 115);
  var v2153 = new ECB(6, 116);
  var v1389 = new ECBlocks(30, v2152, v2153);
  var v2154 = new ECB(14, 46);
  var v2155 = new ECB(23, 47);
  var v1390 = new ECBlocks(28, v2154, v2155);
  var v2156 = new ECB(44, 24);
  var v2157 = new ECB(7, 25);
  var v1391 = new ECBlocks(30, v2156, v2157);
  var v2158 = new ECB(59, 16);
  var v2159 = new ECB(1, 17);
  var v1392 = new ECBlocks(30, v2158, v2159);
  var v414 = new Version(34, v1388, v1389, v1390, v1391, v1392);
  var v1393 = new Array(6, 30, 54, 78, 102, 126, 150);
  var v2160 = new ECB(12, 121);
  var v2161 = new ECB(7, 122);
  var v1394 = new ECBlocks(30, v2160, v2161);
  var v2162 = new ECB(12, 47);
  var v2163 = new ECB(26, 48);
  var v1395 = new ECBlocks(28, v2162, v2163);
  var v2164 = new ECB(39, 24);
  var v2165 = new ECB(14, 25);
  var v1396 = new ECBlocks(30, v2164, v2165);
  var v2166 = new ECB(22, 15);
  var v2167 = new ECB(41, 16);
  var v1397 = new ECBlocks(30, v2166, v2167);
  var v415 = new Version(35, v1393, v1394, v1395, v1396, v1397);
  var v1398 = new Array(6, 24, 50, 76, 102, 128, 154);
  var v2168 = new ECB(6, 121);
  var v2169 = new ECB(14, 122);
  var v1399 = new ECBlocks(30, v2168, v2169);
  var v2170 = new ECB(6, 47);
  var v2171 = new ECB(34, 48);
  var v1400 = new ECBlocks(28, v2170, v2171);
  var v2172 = new ECB(46, 24);
  var v2173 = new ECB(10, 25);
  var v1401 = new ECBlocks(30, v2172, v2173);
  var v2174 = new ECB(2, 15);
  var v2175 = new ECB(64, 16);
  var v1402 = new ECBlocks(30, v2174, v2175);
  var v416 = new Version(36, v1398, v1399, v1400, v1401, v1402);
  var v1403 = new Array(6, 28, 54, 80, 106, 132, 158);
  var v2176 = new ECB(17, 122);
  var v2177 = new ECB(4, 123);
  var v1404 = new ECBlocks(30, v2176, v2177);
  var v2178 = new ECB(29, 46);
  var v2179 = new ECB(14, 47);
  var v1405 = new ECBlocks(28, v2178, v2179);
  var v2180 = new ECB(49, 24);
  var v2181 = new ECB(10, 25);
  var v1406 = new ECBlocks(30, v2180, v2181);
  var v2182 = new ECB(24, 15);
  var v2183 = new ECB(46, 16);
  var v1407 = new ECBlocks(30, v2182, v2183);
  var v417 = new Version(37, v1403, v1404, v1405, v1406, v1407);
  var v1408 = new Array(6, 32, 58, 84, 110, 136, 162);
  var v2184 = new ECB(4, 122);
  var v2185 = new ECB(18, 123);
  var v1409 = new ECBlocks(30, v2184, v2185);
  var v2186 = new ECB(13, 46);
  var v2187 = new ECB(32, 47);
  var v1410 = new ECBlocks(28, v2186, v2187);
  var v2188 = new ECB(48, 24);
  var v2189 = new ECB(14, 25);
  var v1411 = new ECBlocks(30, v2188, v2189);
  var v2190 = new ECB(42, 15);
  var v2191 = new ECB(32, 16);
  var v1412 = new ECBlocks(30, v2190, v2191);
  var v418 = new Version(38, v1408, v1409, v1410, v1411, v1412);
  var v1413 = new Array(6, 26, 54, 82, 110, 138, 166);
  var v2192 = new ECB(20, 117);
  var v2193 = new ECB(4, 118);
  var v1414 = new ECBlocks(30, v2192, v2193);
  var v2194 = new ECB(40, 47);
  var v2195 = new ECB(7, 48);
  var v1415 = new ECBlocks(28, v2194, v2195);
  var v2196 = new ECB(43, 24);
  var v2197 = new ECB(22, 25);
  var v1416 = new ECBlocks(30, v2196, v2197);
  var v2198 = new ECB(10, 15);
  var v2199 = new ECB(67, 16);
  var v1417 = new ECBlocks(30, v2198, v2199);
  var v419 = new Version(39, v1413, v1414, v1415, v1416, v1417);
  var v1418 = new Array(6, 30, 58, 86, 114, 142, 170);
  var v2200 = new ECB(19, 118);
  var v2201 = new ECB(6, 119);
  var v1419 = new ECBlocks(30, v2200, v2201);
  var v2202 = new ECB(18, 47);
  var v2203 = new ECB(31, 48);
  var v1420 = new ECBlocks(28, v2202, v2203);
  var v2204 = new ECB(34, 24);
  var v2205 = new ECB(34, 25);
  var v1421 = new ECBlocks(30, v2204, v2205);
  var v2206 = new ECB(20, 15);
  var v2207 = new ECB(61, 16);
  var v1422 = new ECBlocks(30, v2206, v2207);
  var v420 = new Version(40, v1418, v1419, v1420, v1421, v1422);
  return new Array(v381, v382, v383, v384, v385, v386, v387, v388, v389, v390, v391, v392, v393, v394, v395, v396, v397, v398, v399, v400, v401, v402, v403, v404, v405, v406, v407, v408, v409, v410, v411, v412, v413, v414, v415, v416, v417, v418, v419, v420)
}
function PerspectiveTransform(a11, a21, a31, a12, a22, a32, a13$$1, a23$$1, a33) {
  function v15(other$$4) {
    var v2523 = this.a11;
    var v2524 = other$$4.a11;
    var v2208 = v2523 * v2524;
    var v2525 = this.a21;
    var v2526 = other$$4.a12;
    var v2209 = v2525 * v2526;
    var v1423 = v2208 + v2209;
    var v2210 = this.a31;
    var v2211 = other$$4.a13;
    var v1424 = v2210 * v2211;
    var v421 = v1423 + v1424;
    var v2527 = this.a11;
    var v2528 = other$$4.a21;
    var v2212 = v2527 * v2528;
    var v2529 = this.a21;
    var v2530 = other$$4.a22;
    var v2213 = v2529 * v2530;
    var v1425 = v2212 + v2213;
    var v2214 = this.a31;
    var v2215 = other$$4.a23;
    var v1426 = v2214 * v2215;
    var v422 = v1425 + v1426;
    var v2531 = this.a11;
    var v2532 = other$$4.a31;
    var v2216 = v2531 * v2532;
    var v2533 = this.a21;
    var v2534 = other$$4.a32;
    var v2217 = v2533 * v2534;
    var v1427 = v2216 + v2217;
    var v2218 = this.a31;
    var v2219 = other$$4.a33;
    var v1428 = v2218 * v2219;
    var v423 = v1427 + v1428;
    var v2535 = this.a12;
    var v2536 = other$$4.a11;
    var v2220 = v2535 * v2536;
    var v2537 = this.a22;
    var v2538 = other$$4.a12;
    var v2221 = v2537 * v2538;
    var v1429 = v2220 + v2221;
    var v2222 = this.a32;
    var v2223 = other$$4.a13;
    var v1430 = v2222 * v2223;
    var v424 = v1429 + v1430;
    var v2539 = this.a12;
    var v2540 = other$$4.a21;
    var v2224 = v2539 * v2540;
    var v2541 = this.a22;
    var v2542 = other$$4.a22;
    var v2225 = v2541 * v2542;
    var v1431 = v2224 + v2225;
    var v2226 = this.a32;
    var v2227 = other$$4.a23;
    var v1432 = v2226 * v2227;
    var v425 = v1431 + v1432;
    var v2543 = this.a12;
    var v2544 = other$$4.a31;
    var v2228 = v2543 * v2544;
    var v2545 = this.a22;
    var v2546 = other$$4.a32;
    var v2229 = v2545 * v2546;
    var v1433 = v2228 + v2229;
    var v2230 = this.a32;
    var v2231 = other$$4.a33;
    var v1434 = v2230 * v2231;
    var v426 = v1433 + v1434;
    var v2547 = this.a13;
    var v2548 = other$$4.a11;
    var v2232 = v2547 * v2548;
    var v2549 = this.a23;
    var v2550 = other$$4.a12;
    var v2233 = v2549 * v2550;
    var v1435 = v2232 + v2233;
    var v2234 = this.a33;
    var v2235 = other$$4.a13;
    var v1436 = v2234 * v2235;
    var v427 = v1435 + v1436;
    var v2551 = this.a13;
    var v2552 = other$$4.a21;
    var v2236 = v2551 * v2552;
    var v2553 = this.a23;
    var v2554 = other$$4.a22;
    var v2237 = v2553 * v2554;
    var v1437 = v2236 + v2237;
    var v2238 = this.a33;
    var v2239 = other$$4.a23;
    var v1438 = v2238 * v2239;
    var v428 = v1437 + v1438;
    var v2555 = this.a13;
    var v2556 = other$$4.a31;
    var v2240 = v2555 * v2556;
    var v2557 = this.a23;
    var v2558 = other$$4.a32;
    var v2241 = v2557 * v2558;
    var v1439 = v2240 + v2241;
    var v2242 = this.a33;
    var v2243 = other$$4.a33;
    var v1440 = v2242 * v2243;
    var v429 = v1439 + v1440;
    return new PerspectiveTransform(v421, v422, v423, v424, v425, v426, v427, v428, v429)
  }
  function v14() {
    var v2244 = this.a22;
    var v2245 = this.a33;
    var v1441 = v2244 * v2245;
    var v2246 = this.a23;
    var v2247 = this.a32;
    var v1442 = v2246 * v2247;
    var v430 = v1441 - v1442;
    var v2248 = this.a23;
    var v2249 = this.a31;
    var v1443 = v2248 * v2249;
    var v2250 = this.a21;
    var v2251 = this.a33;
    var v1444 = v2250 * v2251;
    var v431 = v1443 - v1444;
    var v2252 = this.a21;
    var v2253 = this.a32;
    var v1445 = v2252 * v2253;
    var v2254 = this.a22;
    var v2255 = this.a31;
    var v1446 = v2254 * v2255;
    var v432 = v1445 - v1446;
    var v2256 = this.a13;
    var v2257 = this.a32;
    var v1447 = v2256 * v2257;
    var v2258 = this.a12;
    var v2259 = this.a33;
    var v1448 = v2258 * v2259;
    var v433 = v1447 - v1448;
    var v2260 = this.a11;
    var v2261 = this.a33;
    var v1449 = v2260 * v2261;
    var v2262 = this.a13;
    var v2263 = this.a31;
    var v1450 = v2262 * v2263;
    var v434 = v1449 - v1450;
    var v2264 = this.a12;
    var v2265 = this.a31;
    var v1451 = v2264 * v2265;
    var v2266 = this.a11;
    var v2267 = this.a32;
    var v1452 = v2266 * v2267;
    var v435 = v1451 - v1452;
    var v2268 = this.a12;
    var v2269 = this.a23;
    var v1453 = v2268 * v2269;
    var v2270 = this.a13;
    var v2271 = this.a22;
    var v1454 = v2270 * v2271;
    var v436 = v1453 - v1454;
    var v2272 = this.a13;
    var v2273 = this.a21;
    var v1455 = v2272 * v2273;
    var v2274 = this.a11;
    var v2275 = this.a23;
    var v1456 = v2274 * v2275;
    var v437 = v1455 - v1456;
    var v2276 = this.a11;
    var v2277 = this.a22;
    var v1457 = v2276 * v2277;
    var v2278 = this.a12;
    var v2279 = this.a21;
    var v1458 = v2278 * v2279;
    var v438 = v1457 - v1458;
    return new PerspectiveTransform(v430, v431, v432, v433, v434, v435, v436, v437, v438)
  }
  function v13(xValues, yValues) {
    var n$$1 = xValues.length;
    var i$$6 = 0;
    var v443 = i$$6 < n$$1;
    for(;v443;) {
      var x$$52 = xValues[i$$6];
      var y$$35 = yValues[i$$6];
      var v2280 = this.a13;
      var v1459 = v2280 * x$$52;
      var v2281 = this.a23;
      var v1460 = v2281 * y$$35;
      var v439 = v1459 + v1460;
      var v440 = this.a33;
      var denominator$$2 = v439 + v440;
      var v2559 = this.a11;
      var v2282 = v2559 * x$$52;
      var v2560 = this.a21;
      var v2283 = v2560 * y$$35;
      var v1461 = v2282 + v2283;
      var v1462 = this.a31;
      var v441 = v1461 + v1462;
      xValues[i$$6] = v441 / denominator$$2;
      var v2561 = this.a12;
      var v2284 = v2561 * x$$52;
      var v2562 = this.a22;
      var v2285 = v2562 * y$$35;
      var v1463 = v2284 + v2285;
      var v1464 = this.a32;
      var v442 = v1463 + v1464;
      yValues[i$$6] = v442 / denominator$$2;
      i$$6 = i$$6 + 1;
      v443 = i$$6 < n$$1
    }
    return
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
    var v448 = i$$5 < max$$2;
    for(;v448;) {
      var x$$51 = points$$2[i$$5];
      var v444 = i$$5 + 1;
      var y$$34 = points$$2[v444];
      var v1465 = a13$$2 * x$$51;
      var v1466 = a23$$2 * y$$34;
      var v445 = v1465 + v1466;
      var denominator$$1 = v445 + a33$$1;
      var v2286 = a11$$1 * x$$51;
      var v2287 = a21$$1 * y$$34;
      var v1467 = v2286 + v2287;
      var v446 = v1467 + a31$$1;
      points$$2[i$$5] = v446 / denominator$$1;
      var v447 = i$$5 + 1;
      var v2563 = a12$$1 * x$$51;
      var v2564 = a22$$1 * y$$34;
      var v2288 = v2563 + v2564;
      var v1468 = v2288 + a32$$1;
      points$$2[v447] = v1468 / denominator$$1;
      i$$5 = i$$5 + 2;
      v448 = i$$5 < max$$2
    }
    return
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
  return
}
function DetectorResult(bits$$1, points$$3) {
  this.bits = bits$$1;
  this.points = points$$3;
  return
}
function Detector(image$$5) {
  function v26() {
    var v449 = new FinderPatternFinder;
    var v450 = this.image;
    var info$$1 = v449.findFinderPattern(v450);
    return this.processFinderPatternInfo(info$$1)
  }
  function v25(info) {
    var topLeft$$3 = info.TopLeft;
    var topRight$$3 = info.TopRight;
    var bottomLeft$$3 = info.BottomLeft;
    var moduleSize$$1 = this.calculateModuleSize(topLeft$$3, topRight$$3, bottomLeft$$3);
    var v451 = moduleSize$$1 < 1;
    if(v451) {
      throw"Error";
    }
    var dimension$$7 = this.computeDimension(topLeft$$3, topRight$$3, bottomLeft$$3, moduleSize$$1);
    var provisionalVersion = Version.getProvisionalVersionForDimension(dimension$$7);
    var v452 = provisionalVersion.DimensionForVersion;
    var modulesBetweenFPCenters = v452 - 7;
    var alignmentPattern$$1 = null;
    var v2289 = provisionalVersion.AlignmentPatternCenters;
    var v1469 = v2289.length;
    var v461 = v1469 > 0;
    if(v461) {
      var v1470 = topRight$$3.X;
      var v1471 = topLeft$$3.X;
      var v453 = v1470 - v1471;
      var v454 = bottomLeft$$3.X;
      var bottomRightX$$1 = v453 + v454;
      var v1472 = topRight$$3.Y;
      var v1473 = topLeft$$3.Y;
      var v455 = v1472 - v1473;
      var v456 = bottomLeft$$3.Y;
      var bottomRightY$$1 = v455 + v456;
      var v457 = 3 / modulesBetweenFPCenters;
      var correctionToTopLeft = 1 - v457;
      var v1474 = topLeft$$3.X;
      var v2565 = topLeft$$3.X;
      var v2290 = bottomRightX$$1 - v2565;
      var v1475 = correctionToTopLeft * v2290;
      var v458 = v1474 + v1475;
      var estAlignmentX$$1 = Math.floor(v458);
      var v1476 = topLeft$$3.Y;
      var v2566 = topLeft$$3.Y;
      var v2291 = bottomRightY$$1 - v2566;
      var v1477 = correctionToTopLeft * v2291;
      var v459 = v1476 + v1477;
      var estAlignmentY$$1 = Math.floor(v459);
      var i$$7 = 4;
      var v460 = i$$7 <= 16;
      for(;v460;) {
        alignmentPattern$$1 = this.findAlignmentInRegion(moduleSize$$1, estAlignmentX$$1, estAlignmentY$$1, i$$7);
        break
      }
    }
    var transform$$4 = this.createTransform(topLeft$$3, topRight$$3, bottomLeft$$3, alignmentPattern$$1, dimension$$7);
    var v462 = this.image;
    var bits$$2 = this.sampleGrid(v462, transform$$4, dimension$$7);
    var points$$4;
    var v463 = alignmentPattern$$1 == null;
    if(v463) {
      points$$4 = new Array(bottomLeft$$3, topLeft$$3, topRight$$3)
    }else {
      points$$4 = new Array(bottomLeft$$3, topLeft$$3, topRight$$3, alignmentPattern$$1)
    }
    return new DetectorResult(bits$$2, points$$4)
  }
  function v24(image$$6, transform$$3, dimension$$6) {
    var sampler = GridSampler;
    return sampler.sampleGrid3(image$$6, dimension$$6, transform$$3)
  }
  function v23(topLeft$$2, topRight$$2, bottomLeft$$2, alignmentPattern, dimension$$5) {
    var dimMinusThree = dimension$$5 - 3.5;
    var bottomRightX;
    var bottomRightY;
    var sourceBottomRightX;
    var sourceBottomRightY;
    var v468 = alignmentPattern != null;
    if(v468) {
      bottomRightX = alignmentPattern.X;
      bottomRightY = alignmentPattern.Y;
      sourceBottomRightX = sourceBottomRightY = dimMinusThree - 3
    }else {
      var v1478 = topRight$$2.X;
      var v1479 = topLeft$$2.X;
      var v464 = v1478 - v1479;
      var v465 = bottomLeft$$2.X;
      bottomRightX = v464 + v465;
      var v1480 = topRight$$2.Y;
      var v1481 = topLeft$$2.Y;
      var v466 = v1480 - v1481;
      var v467 = bottomLeft$$2.Y;
      bottomRightY = v466 + v467;
      sourceBottomRightX = sourceBottomRightY = dimMinusThree
    }
    var v469 = topLeft$$2.X;
    var v470 = topLeft$$2.Y;
    var v471 = topRight$$2.X;
    var v472 = topRight$$2.Y;
    var v473 = bottomLeft$$2.X;
    var v474 = bottomLeft$$2.Y;
    var transform$$2 = PerspectiveTransform.quadrilateralToQuadrilateral(3.5, 3.5, dimMinusThree, 3.5, sourceBottomRightX, sourceBottomRightY, 3.5, dimMinusThree, v469, v470, v471, v472, bottomRightX, bottomRightY, v473, v474);
    return transform$$2
  }
  function v22(overallEstModuleSize, estAlignmentX, estAlignmentY, allowanceFactor) {
    var v475 = allowanceFactor * overallEstModuleSize;
    var allowance = Math.floor(v475);
    var v476 = estAlignmentX - allowance;
    var alignmentAreaLeftX = Math.max(0, v476);
    var v1482 = qrcode.width;
    var v477 = v1482 - 1;
    var v478 = estAlignmentX + allowance;
    var alignmentAreaRightX = Math.min(v477, v478);
    var v1483 = alignmentAreaRightX - alignmentAreaLeftX;
    var v1484 = overallEstModuleSize * 3;
    var v479 = v1483 < v1484;
    if(v479) {
      throw"Error";
    }
    var v480 = estAlignmentY - allowance;
    var alignmentAreaTopY = Math.max(0, v480);
    var v1485 = qrcode.height;
    var v481 = v1485 - 1;
    var v482 = estAlignmentY + allowance;
    var alignmentAreaBottomY = Math.min(v481, v482);
    var v483 = this.image;
    var v484 = alignmentAreaRightX - alignmentAreaLeftX;
    var v485 = alignmentAreaBottomY - alignmentAreaTopY;
    var v486 = this.resultPointCallback;
    var alignmentFinder = new AlignmentPatternFinder(v483, alignmentAreaLeftX, alignmentAreaTopY, v484, v485, overallEstModuleSize, v486);
    return alignmentFinder.find()
  }
  function v21(topLeft$$1, topRight$$1, bottomLeft$$1, moduleSize) {
    var v1486 = this.distance(topLeft$$1, topRight$$1);
    var v487 = v1486 / moduleSize;
    var tltrCentersDimension = Math.round(v487);
    var v1487 = this.distance(topLeft$$1, bottomLeft$$1);
    var v488 = v1487 / moduleSize;
    var tlblCentersDimension = Math.round(v488);
    var v1488 = tltrCentersDimension + tlblCentersDimension;
    var v489 = v1488 >> 1;
    var dimension$$4 = v489 + 7;
    var v490 = dimension$$4 & 3;
    switch(v490) {
      case 0:
        dimension$$4 = dimension$$4 + 1;
        break;
      case 2:
        dimension$$4 = dimension$$4 - 1;
        break;
      case 3:
        throw"Error";
    }
    return dimension$$4
  }
  function v20(pattern1, pattern2) {
    var v491 = pattern1.X;
    var v492 = pattern2.X;
    xDiff = v491 - v492;
    var v493 = pattern1.Y;
    var v494 = pattern2.Y;
    yDiff = v493 - v494;
    var v1489 = xDiff * xDiff;
    var v1490 = yDiff * yDiff;
    var v495 = v1489 + v1490;
    return Math.sqrt(v495)
  }
  function v19(topLeft, topRight, bottomLeft) {
    var v1491 = this.calculateModuleSizeOneWay(topLeft, topRight);
    var v1492 = this.calculateModuleSizeOneWay(topLeft, bottomLeft);
    var v496 = v1491 + v1492;
    return v496 / 2
  }
  function v18(pattern$$1, otherPattern) {
    var v1493 = pattern$$1.X;
    var v497 = Math.floor(v1493);
    var v1494 = pattern$$1.Y;
    var v498 = Math.floor(v1494);
    var v1495 = otherPattern.X;
    var v499 = Math.floor(v1495);
    var v1496 = otherPattern.Y;
    var v500 = Math.floor(v1496);
    var moduleSizeEst1 = this.sizeOfBlackWhiteBlackRunBothWays(v497, v498, v499, v500);
    var v1497 = otherPattern.X;
    var v501 = Math.floor(v1497);
    var v1498 = otherPattern.Y;
    var v502 = Math.floor(v1498);
    var v1499 = pattern$$1.X;
    var v503 = Math.floor(v1499);
    var v1500 = pattern$$1.Y;
    var v504 = Math.floor(v1500);
    var moduleSizeEst2 = this.sizeOfBlackWhiteBlackRunBothWays(v501, v502, v503, v504);
    var v505 = isNaN(moduleSizeEst1);
    if(v505) {
      return moduleSizeEst2 / 7
    }
    var v506 = isNaN(moduleSizeEst2);
    if(v506) {
      return moduleSizeEst1 / 7
    }
    var v507 = moduleSizeEst1 + moduleSizeEst2;
    return v507 / 14
  }
  function v17(fromX$$1, fromY$$1, toX$$1, toY$$1) {
    var result = this.sizeOfBlackWhiteBlackRun(fromX$$1, fromY$$1, toX$$1, toY$$1);
    var scale = 1;
    var v508 = toX$$1 - fromX$$1;
    var otherToX = fromX$$1 - v508;
    var v514 = otherToX < 0;
    if(v514) {
      var v509 = fromX$$1 - otherToX;
      scale = fromX$$1 / v509;
      otherToX = 0
    }else {
      var v1501 = qrcode.width;
      var v513 = otherToX >= v1501;
      if(v513) {
        var v2292 = qrcode.width;
        var v1502 = v2292 - 1;
        var v510 = v1502 - fromX$$1;
        var v511 = otherToX - fromX$$1;
        scale = v510 / v511;
        var v512 = qrcode.width;
        otherToX = v512 - 1
      }
    }
    var v2293 = toY$$1 - fromY$$1;
    var v1503 = v2293 * scale;
    var v515 = fromY$$1 - v1503;
    var otherToY = Math.floor(v515);
    scale = 1;
    var v521 = otherToY < 0;
    if(v521) {
      var v516 = fromY$$1 - otherToY;
      scale = fromY$$1 / v516;
      otherToY = 0
    }else {
      var v1504 = qrcode.height;
      var v520 = otherToY >= v1504;
      if(v520) {
        var v2294 = qrcode.height;
        var v1505 = v2294 - 1;
        var v517 = v1505 - fromY$$1;
        var v518 = otherToY - fromY$$1;
        scale = v517 / v518;
        var v519 = qrcode.height;
        otherToY = v519 - 1
      }
    }
    var v2295 = otherToX - fromX$$1;
    var v1506 = v2295 * scale;
    var v522 = fromX$$1 + v1506;
    otherToX = Math.floor(v522);
    var v1507 = result;
    var v1508 = this.sizeOfBlackWhiteBlackRun(fromX$$1, fromY$$1, otherToX, otherToY);
    result = v1507 + v1508;
    return result - 1
  }
  function v16(fromX, fromY, toX, toY) {
    var v1509 = toY - fromY;
    var v523 = Math.abs(v1509);
    var v1510 = toX - fromX;
    var v524 = Math.abs(v1510);
    var steep = v523 > v524;
    if(steep) {
      var temp = fromX;
      fromX = fromY;
      fromY = temp;
      temp = toX;
      toX = toY;
      toY = temp
    }
    var v525 = toX - fromX;
    var dx$$4 = Math.abs(v525);
    var v526 = toY - fromY;
    var dy$$4 = Math.abs(v526);
    var v527 = -dx$$4;
    var error$$2 = v527 >> 1;
    var v528;
    var v1511 = fromY < toY;
    if(v1511) {
      v528 = 1
    }else {
      v528 = -1
    }
    var ystep = v528;
    var v529;
    var v1512 = fromX < toX;
    if(v1512) {
      v529 = 1
    }else {
      v529 = -1
    }
    var xstep = v529;
    var state = 0;
    var x$$53 = fromX;
    var y$$36 = fromY;
    var v539 = x$$53 != toX;
    for(;v539;) {
      var v530;
      if(steep) {
        v530 = y$$36
      }else {
        v530 = x$$53
      }
      var realX = v530;
      var v531;
      if(steep) {
        v531 = x$$53
      }else {
        v531 = y$$36
      }
      var realY = v531;
      var v534 = state == 1;
      if(v534) {
        var v1513 = this.image;
        var v2567 = qrcode.width;
        var v2296 = realY * v2567;
        var v1514 = realX + v2296;
        var v532 = v1513[v1514];
        if(v532) {
          state = state + 1
        }
      }else {
        var v2297 = this.image;
        var v2714 = qrcode.width;
        var v2568 = realY * v2714;
        var v2298 = realX + v2568;
        var v1515 = v2297[v2298];
        var v533 = !v1515;
        if(v533) {
          state = state + 1
        }
      }
      var v536 = state == 3;
      if(v536) {
        var diffX = x$$53 - fromX;
        var diffY = y$$36 - fromY;
        var v1516 = diffX * diffX;
        var v1517 = diffY * diffY;
        var v535 = v1516 + v1517;
        return Math.sqrt(v535)
      }
      error$$2 = error$$2 + dy$$4;
      var v538 = error$$2 > 0;
      if(v538) {
        var v537 = y$$36 == toY;
        if(v537) {
          break
        }
        y$$36 = y$$36 + ystep;
        error$$2 = error$$2 - dx$$4
      }
      x$$53 = x$$53 + xstep;
      v539 = x$$53 != toX
    }
    var diffX2 = toX - fromX;
    var diffY2 = toY - fromY;
    var v1518 = diffX2 * diffX2;
    var v1519 = diffY2 * diffY2;
    var v540 = v1518 + v1519;
    return Math.sqrt(v540)
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
  return
}
function FormatInformation(formatInfo) {
  function v30(o) {
    var other$$5 = o;
    var v1520 = this.errorCorrectionLevel;
    var v1521 = other$$5.errorCorrectionLevel;
    var v541 = v1520 == v1521;
    if(v541) {
      var v1522 = this.dataMask;
      var v1523 = other$$5.dataMask;
      v541 = v1522 == v1523
    }
    return v541
  }
  function v29() {
    var v2299 = this.errorCorrectionLevel;
    var v1524 = v2299.ordinal_Renamed_Field;
    var v542 = v1524 << 3;
    return v542 | dataMask
  }
  function v28() {
    return this.dataMask
  }
  function v27() {
    return this.errorCorrectionLevel
  }
  var v1525 = formatInfo >> 3;
  var v543 = v1525 & 3;
  var v2863 = ErrorCorrectionLevel.forBits(v543);
  this.errorCorrectionLevel = v2863;
  this.dataMask = formatInfo & 7;
  this.__defineGetter__("ErrorCorrectionLevel", v27);
  this.__defineGetter__("DataMask", v28);
  this.GetHashCode = v29;
  this.Equals = v30;
  return
}
function ErrorCorrectionLevel(ordinal, bits$$3, name$$31) {
  function v33() {
    return this.ordinal_Renamed_Field
  }
  function v32() {
    return this.name
  }
  function v31() {
    return this.bits
  }
  this.ordinal_Renamed_Field = ordinal;
  this.bits = bits$$3;
  this.name = name$$31;
  this.__defineGetter__("Bits", v31);
  this.__defineGetter__("Name", v32);
  this.ordinal = v33;
  return
}
function BitMatrix(width$$10, height$$9) {
  function v41(left$$2, top$$2, width$$11, height$$10) {
    var v1526 = top$$2 < 0;
    var v2300 = !v1526;
    if(v2300) {
      v1526 = left$$2 < 0
    }
    var v544 = v1526;
    if(v544) {
      throw"Left and top must be nonnegative";
    }
    var v1527 = height$$10 < 1;
    var v2301 = !v1527;
    if(v2301) {
      v1527 = width$$11 < 1
    }
    var v545 = v1527;
    if(v545) {
      throw"Height and width must be at least 1";
    }
    var right$$2 = left$$2 + width$$11;
    var bottom$$1 = top$$2 + height$$10;
    var v2302 = this.height;
    var v1528 = bottom$$1 > v2302;
    var v2304 = !v1528;
    if(v2304) {
      var v2303 = this.width;
      v1528 = right$$2 > v2303
    }
    var v546 = v1528;
    if(v546) {
      throw"The region must fit inside the matrix";
    }
    var y$$40 = top$$2;
    var v551 = y$$40 < bottom$$1;
    for(;v551;) {
      var v547 = this.rowSize;
      var offset$$16 = y$$40 * v547;
      var x$$57 = left$$2;
      var v550 = x$$57 < right$$2;
      for(;v550;) {
        var v548 = this.bits;
        var v1529 = x$$57 >> 5;
        var v549 = offset$$16 + v1529;
        var v2305 = v548[v549];
        var v2569 = x$$57 & 31;
        var v2306 = 1 << v2569;
        v548[v549] = v2305 | v2306;
        x$$57 = x$$57 + 1;
        v550 = x$$57 < right$$2
      }
      y$$40 = y$$40 + 1;
      v551 = y$$40 < bottom$$1
    }
    return
  }
  function v40() {
    var v552 = this.bits;
    var max$$3 = v552.length;
    var i$$10 = 0;
    var v554 = i$$10 < max$$3;
    for(;v554;) {
      var v553 = this.bits;
      v553[i$$10] = 0;
      i$$10 = i$$10 + 1;
      v554 = i$$10 < max$$3
    }
    return
  }
  function v39(x$$56, y$$39) {
    var v1530 = this.rowSize;
    var v555 = y$$39 * v1530;
    var v556 = x$$56 >> 5;
    var offset$$15 = v555 + v556;
    var v557 = this.bits;
    var v2307 = v557[offset$$15];
    var v2570 = x$$56 & 31;
    var v2308 = 1 << v2570;
    v557[offset$$15] = v2307 ^ v2308;
    return
  }
  function v38(x$$55, y$$38) {
    var v1531 = this.rowSize;
    var v558 = y$$38 * v1531;
    var v559 = x$$55 >> 5;
    var offset$$14 = v558 + v559;
    var v560 = this.bits;
    var v2309 = v560[offset$$14];
    var v2571 = x$$55 & 31;
    var v2310 = 1 << v2571;
    v560[offset$$14] = v2309 | v2310;
    return
  }
  function v37(x$$54, y$$37) {
    var v1532 = this.rowSize;
    var v561 = y$$37 * v1532;
    var v562 = x$$54 >> 5;
    var offset$$13 = v561 + v562;
    var v2572 = this.bits;
    var v2311 = v2572[offset$$13];
    var v2312 = x$$54 & 31;
    var v1533 = URShift(v2311, v2312);
    var v563 = v1533 & 1;
    return v563 != 0
  }
  function v36() {
    var v1534 = this.width;
    var v1535 = this.height;
    var v564 = v1534 != v1535;
    if(v564) {
      throw"Can't call getDimension() on a non-square matrix";
    }
    return this.width
  }
  function v35() {
    return this.height
  }
  function v34() {
    return this.width
  }
  var v565 = !height$$9;
  if(v565) {
    height$$9 = width$$10
  }
  var v1536 = width$$10 < 1;
  var v2313 = !v1536;
  if(v2313) {
    v1536 = height$$9 < 1
  }
  var v566 = v1536;
  if(v566) {
    throw"Both dimensions must be greater than 0";
  }
  this.width = width$$10;
  this.height = height$$9;
  var rowSize = width$$10 >> 5;
  var v1537 = width$$10 & 31;
  var v567 = v1537 != 0;
  if(v567) {
    rowSize = rowSize + 1
  }
  this.rowSize = rowSize;
  var v568 = rowSize * height$$9;
  var v2864 = new Array(v568);
  this.bits = v2864;
  var i$$9 = 0;
  var v2314 = this.bits;
  var v1538 = v2314.length;
  var v570 = i$$9 < v1538;
  for(;v570;) {
    var v569 = this.bits;
    v569[i$$9] = 0;
    i$$9 = i$$9 + 1;
    var v2315 = this.bits;
    var v1539 = v2315.length;
    v570 = i$$9 < v1539
  }
  this.__defineGetter__("Width", v34);
  this.__defineGetter__("Height", v35);
  this.__defineGetter__("Dimension", v36);
  this.get_Renamed = v37;
  this.set_Renamed = v38;
  this.flip = v39;
  this.clear = v40;
  this.setRegion = v41;
  return
}
function DataBlock(numDataCodewords, codewords) {
  function v43() {
    return this.codewords
  }
  function v42() {
    return this.numDataCodewords
  }
  this.numDataCodewords = numDataCodewords;
  this.codewords = codewords;
  this.__defineGetter__("NumDataCodewords", v42);
  this.__defineGetter__("Codewords", v43);
  return
}
function BitMatrixParser(bitMatrix$$1) {
  function v47() {
    var formatInfo$$2 = this.readFormatInformation();
    var version$$6 = this.readVersion();
    var v571 = formatInfo$$2.DataMask;
    var dataMask$$1 = DataMask.forReference(v571);
    var v572 = this.bitMatrix;
    var dimension$$11 = v572.Dimension;
    var v573 = this.bitMatrix;
    dataMask$$1.unmaskBitMatrix(v573, dimension$$11);
    var functionPattern = version$$6.buildFunctionPattern();
    var readingUp = true;
    var v574 = version$$6.TotalCodewords;
    var result$$2 = new Array(v574);
    var resultOffset = 0;
    var currentByte = 0;
    var bitsRead = 0;
    var j$$4 = dimension$$11 - 1;
    var v583 = j$$4 > 0;
    for(;v583;) {
      var v575 = j$$4 == 6;
      if(v575) {
        j$$4 = j$$4 - 1
      }
      var count$$7 = 0;
      var v582 = count$$7 < dimension$$11;
      for(;v582;) {
        var v576;
        if(readingUp) {
          var v1540 = dimension$$11 - 1;
          v576 = v1540 - count$$7
        }else {
          v576 = count$$7
        }
        var i$$15 = v576;
        var col = 0;
        var v581 = col < 2;
        for(;v581;) {
          var v2316 = j$$4 - col;
          var v1541 = functionPattern.get_Renamed(v2316, i$$15);
          var v580 = !v1541;
          if(v580) {
            bitsRead = bitsRead + 1;
            currentByte = currentByte << 1;
            var v1542 = this.bitMatrix;
            var v1543 = j$$4 - col;
            var v577 = v1542.get_Renamed(v1543, i$$15);
            if(v577) {
              currentByte = currentByte | 1
            }
            var v579 = bitsRead == 8;
            if(v579) {
              var v578 = resultOffset;
              resultOffset = resultOffset + 1;
              result$$2[v578] = currentByte;
              bitsRead = 0;
              currentByte = 0
            }
          }
          col = col + 1;
          v581 = col < 2
        }
        count$$7 = count$$7 + 1;
        v582 = count$$7 < dimension$$11
      }
      readingUp = readingUp ^ true;
      j$$4 = j$$4 - 2;
      v583 = j$$4 > 0
    }
    var v1544 = version$$6.TotalCodewords;
    var v584 = resultOffset != v1544;
    if(v584) {
      throw"Error readCodewords";
    }
    return result$$2
  }
  function v46() {
    var v1545 = this.parsedVersion;
    var v585 = v1545 != null;
    if(v585) {
      return this.parsedVersion
    }
    var v586 = this.bitMatrix;
    var dimension$$10 = v586.Dimension;
    var v587 = dimension$$10 - 17;
    var provisionalVersion$$1 = v587 >> 2;
    var v588 = provisionalVersion$$1 <= 6;
    if(v588) {
      return Version.getVersionForNumber(provisionalVersion$$1)
    }
    var versionBits$$2 = 0;
    var ijMin = dimension$$10 - 11;
    var j$$3 = 5;
    var v590 = j$$3 >= 0;
    for(;v590;) {
      var i$$14 = dimension$$10 - 9;
      var v589 = i$$14 >= ijMin;
      for(;v589;) {
        versionBits$$2 = this.copyBit(i$$14, j$$3, versionBits$$2);
        i$$14 = i$$14 - 1;
        v589 = i$$14 >= ijMin
      }
      j$$3 = j$$3 - 1;
      v590 = j$$3 >= 0
    }
    var v2865 = Version.decodeVersionInformation(versionBits$$2);
    this.parsedVersion = v2865;
    var v2317 = this.parsedVersion;
    var v1546 = v2317 != null;
    if(v1546) {
      var v2573 = this.parsedVersion;
      var v2318 = v2573.DimensionForVersion;
      v1546 = v2318 == dimension$$10
    }
    var v591 = v1546;
    if(v591) {
      return this.parsedVersion
    }
    versionBits$$2 = 0;
    i$$14 = 5;
    var v593 = i$$14 >= 0;
    for(;v593;) {
      j$$3 = dimension$$10 - 9;
      var v592 = j$$3 >= ijMin;
      for(;v592;) {
        versionBits$$2 = this.copyBit(i$$14, j$$3, versionBits$$2);
        j$$3 = j$$3 - 1;
        v592 = j$$3 >= ijMin
      }
      i$$14 = i$$14 - 1;
      v593 = i$$14 >= 0
    }
    var v2866 = Version.decodeVersionInformation(versionBits$$2);
    this.parsedVersion = v2866;
    var v2319 = this.parsedVersion;
    var v1547 = v2319 != null;
    if(v1547) {
      var v2574 = this.parsedVersion;
      var v2320 = v2574.DimensionForVersion;
      v1547 = v2320 == dimension$$10
    }
    var v594 = v1547;
    if(v594) {
      return this.parsedVersion
    }
    throw"Error readVersion";
  }
  function v45() {
    var v1548 = this.parsedFormatInfo;
    var v595 = v1548 != null;
    if(v595) {
      return this.parsedFormatInfo
    }
    var formatInfoBits = 0;
    var i$$13 = 0;
    var v596 = i$$13 < 6;
    for(;v596;) {
      formatInfoBits = this.copyBit(i$$13, 8, formatInfoBits);
      i$$13 = i$$13 + 1;
      v596 = i$$13 < 6
    }
    formatInfoBits = this.copyBit(7, 8, formatInfoBits);
    formatInfoBits = this.copyBit(8, 8, formatInfoBits);
    formatInfoBits = this.copyBit(8, 7, formatInfoBits);
    var j$$2 = 5;
    var v597 = j$$2 >= 0;
    for(;v597;) {
      formatInfoBits = this.copyBit(8, j$$2, formatInfoBits);
      j$$2 = j$$2 - 1;
      v597 = j$$2 >= 0
    }
    var v2867 = FormatInformation.decodeFormatInformation(formatInfoBits);
    this.parsedFormatInfo = v2867;
    var v1549 = this.parsedFormatInfo;
    var v598 = v1549 != null;
    if(v598) {
      return this.parsedFormatInfo
    }
    var v599 = this.bitMatrix;
    var dimension$$9 = v599.Dimension;
    formatInfoBits = 0;
    var iMin = dimension$$9 - 8;
    i$$13 = dimension$$9 - 1;
    var v600 = i$$13 >= iMin;
    for(;v600;) {
      formatInfoBits = this.copyBit(i$$13, 8, formatInfoBits);
      i$$13 = i$$13 - 1;
      v600 = i$$13 >= iMin
    }
    j$$2 = dimension$$9 - 7;
    var v601 = j$$2 < dimension$$9;
    for(;v601;) {
      formatInfoBits = this.copyBit(8, j$$2, formatInfoBits);
      j$$2 = j$$2 + 1;
      v601 = j$$2 < dimension$$9
    }
    var v2868 = FormatInformation.decodeFormatInformation(formatInfoBits);
    this.parsedFormatInfo = v2868;
    var v1550 = this.parsedFormatInfo;
    var v602 = v1550 != null;
    if(v602) {
      return this.parsedFormatInfo
    }
    throw"Error readFormatInformation";
  }
  function v44(i$$12, j$$1, versionBits$$1) {
    var v603;
    var v2321 = this.bitMatrix;
    var v1552 = v2321.get_Renamed(i$$12, j$$1);
    if(v1552) {
      var v1551 = versionBits$$1 << 1;
      v603 = v1551 | 1
    }else {
      v603 = versionBits$$1 << 1
    }
    return v603
  }
  var dimension$$8 = bitMatrix$$1.Dimension;
  var v1553 = dimension$$8 < 21;
  var v2323 = !v1553;
  if(v2323) {
    var v2322 = dimension$$8 & 3;
    v1553 = v2322 != 1
  }
  var v604 = v1553;
  if(v604) {
    throw"Error BitMatrixParser";
  }
  this.bitMatrix = bitMatrix$$1;
  this.parsedVersion = null;
  this.parsedFormatInfo = null;
  this.copyBit = v44;
  this.readFormatInformation = v45;
  this.readVersion = v46;
  this.readCodewords = v47;
  return
}
function DataMask000() {
  function v49(i$$17, j$$6) {
    var v1554 = i$$17 + j$$6;
    var v605 = v1554 & 1;
    return v605 == 0
  }
  function v48(bits$$5, dimension$$12) {
    var i$$16 = 0;
    var v608 = i$$16 < dimension$$12;
    for(;v608;) {
      var j$$5 = 0;
      var v607 = j$$5 < dimension$$12;
      for(;v607;) {
        var v606 = this.isMasked(i$$16, j$$5);
        if(v606) {
          bits$$5.flip(j$$5, i$$16)
        }
        j$$5 = j$$5 + 1;
        v607 = j$$5 < dimension$$12
      }
      i$$16 = i$$16 + 1;
      v608 = i$$16 < dimension$$12
    }
    return
  }
  this.unmaskBitMatrix = v48;
  this.isMasked = v49;
  return
}
function DataMask001() {
  function v51(i$$19, j$$8) {
    var v609 = i$$19 & 1;
    return v609 == 0
  }
  function v50(bits$$6, dimension$$13) {
    var i$$18 = 0;
    var v612 = i$$18 < dimension$$13;
    for(;v612;) {
      var j$$7 = 0;
      var v611 = j$$7 < dimension$$13;
      for(;v611;) {
        var v610 = this.isMasked(i$$18, j$$7);
        if(v610) {
          bits$$6.flip(j$$7, i$$18)
        }
        j$$7 = j$$7 + 1;
        v611 = j$$7 < dimension$$13
      }
      i$$18 = i$$18 + 1;
      v612 = i$$18 < dimension$$13
    }
    return
  }
  this.unmaskBitMatrix = v50;
  this.isMasked = v51;
  return
}
function DataMask010() {
  function v53(i$$21, j$$10) {
    var v613 = j$$10 % 3;
    return v613 == 0
  }
  function v52(bits$$7, dimension$$14) {
    var i$$20 = 0;
    var v616 = i$$20 < dimension$$14;
    for(;v616;) {
      var j$$9 = 0;
      var v615 = j$$9 < dimension$$14;
      for(;v615;) {
        var v614 = this.isMasked(i$$20, j$$9);
        if(v614) {
          bits$$7.flip(j$$9, i$$20)
        }
        j$$9 = j$$9 + 1;
        v615 = j$$9 < dimension$$14
      }
      i$$20 = i$$20 + 1;
      v616 = i$$20 < dimension$$14
    }
    return
  }
  this.unmaskBitMatrix = v52;
  this.isMasked = v53;
  return
}
function DataMask011() {
  function v55(i$$23, j$$12) {
    var v1555 = i$$23 + j$$12;
    var v617 = v1555 % 3;
    return v617 == 0
  }
  function v54(bits$$8, dimension$$15) {
    var i$$22 = 0;
    var v620 = i$$22 < dimension$$15;
    for(;v620;) {
      var j$$11 = 0;
      var v619 = j$$11 < dimension$$15;
      for(;v619;) {
        var v618 = this.isMasked(i$$22, j$$11);
        if(v618) {
          bits$$8.flip(j$$11, i$$22)
        }
        j$$11 = j$$11 + 1;
        v619 = j$$11 < dimension$$15
      }
      i$$22 = i$$22 + 1;
      v620 = i$$22 < dimension$$15
    }
    return
  }
  this.unmaskBitMatrix = v54;
  this.isMasked = v55;
  return
}
function DataMask100() {
  function v57(i$$25, j$$14) {
    var v2324 = URShift(i$$25, 1);
    var v2325 = j$$14 / 3;
    var v1556 = v2324 + v2325;
    var v621 = v1556 & 1;
    return v621 == 0
  }
  function v56(bits$$9, dimension$$16) {
    var i$$24 = 0;
    var v624 = i$$24 < dimension$$16;
    for(;v624;) {
      var j$$13 = 0;
      var v623 = j$$13 < dimension$$16;
      for(;v623;) {
        var v622 = this.isMasked(i$$24, j$$13);
        if(v622) {
          bits$$9.flip(j$$13, i$$24)
        }
        j$$13 = j$$13 + 1;
        v623 = j$$13 < dimension$$16
      }
      i$$24 = i$$24 + 1;
      v624 = i$$24 < dimension$$16
    }
    return
  }
  this.unmaskBitMatrix = v56;
  this.isMasked = v57;
  return
}
function DataMask101() {
  function v59(i$$27, j$$16) {
    var temp$$1 = i$$27 * j$$16;
    var v1557 = temp$$1 & 1;
    var v1558 = temp$$1 % 3;
    var v625 = v1557 + v1558;
    return v625 == 0
  }
  function v58(bits$$10, dimension$$17) {
    var i$$26 = 0;
    var v628 = i$$26 < dimension$$17;
    for(;v628;) {
      var j$$15 = 0;
      var v627 = j$$15 < dimension$$17;
      for(;v627;) {
        var v626 = this.isMasked(i$$26, j$$15);
        if(v626) {
          bits$$10.flip(j$$15, i$$26)
        }
        j$$15 = j$$15 + 1;
        v627 = j$$15 < dimension$$17
      }
      i$$26 = i$$26 + 1;
      v628 = i$$26 < dimension$$17
    }
    return
  }
  this.unmaskBitMatrix = v58;
  this.isMasked = v59;
  return
}
function DataMask110() {
  function v61(i$$29, j$$18) {
    var temp$$2 = i$$29 * j$$18;
    var v2326 = temp$$2 & 1;
    var v2327 = temp$$2 % 3;
    var v1559 = v2326 + v2327;
    var v629 = v1559 & 1;
    return v629 == 0
  }
  function v60(bits$$11, dimension$$18) {
    var i$$28 = 0;
    var v632 = i$$28 < dimension$$18;
    for(;v632;) {
      var j$$17 = 0;
      var v631 = j$$17 < dimension$$18;
      for(;v631;) {
        var v630 = this.isMasked(i$$28, j$$17);
        if(v630) {
          bits$$11.flip(j$$17, i$$28)
        }
        j$$17 = j$$17 + 1;
        v631 = j$$17 < dimension$$18
      }
      i$$28 = i$$28 + 1;
      v632 = i$$28 < dimension$$18
    }
    return
  }
  this.unmaskBitMatrix = v60;
  this.isMasked = v61;
  return
}
function DataMask111() {
  function v63(i$$31, j$$20) {
    var v2575 = i$$31 + j$$20;
    var v2328 = v2575 & 1;
    var v2576 = i$$31 * j$$20;
    var v2329 = v2576 % 3;
    var v1560 = v2328 + v2329;
    var v633 = v1560 & 1;
    return v633 == 0
  }
  function v62(bits$$12, dimension$$19) {
    var i$$30 = 0;
    var v636 = i$$30 < dimension$$19;
    for(;v636;) {
      var j$$19 = 0;
      var v635 = j$$19 < dimension$$19;
      for(;v635;) {
        var v634 = this.isMasked(i$$30, j$$19);
        if(v634) {
          bits$$12.flip(j$$19, i$$30)
        }
        j$$19 = j$$19 + 1;
        v635 = j$$19 < dimension$$19
      }
      i$$30 = i$$30 + 1;
      v636 = i$$30 < dimension$$19
    }
    return
  }
  this.unmaskBitMatrix = v62;
  this.isMasked = v63;
  return
}
function ReedSolomonDecoder(field) {
  function v67(errorEvaluator, errorLocations$$1, dataMatrix$$1) {
    var s$$3 = errorLocations$$1.length;
    var result$$4 = new Array(s$$3);
    var i$$34 = 0;
    var v647 = i$$34 < s$$3;
    for(;v647;) {
      var v637 = this.field;
      var v638 = errorLocations$$1[i$$34];
      var xiInverse = v637.inverse(v638);
      var denominator$$3 = 1;
      var j$$21 = 0;
      var v642 = j$$21 < s$$3;
      for(;v642;) {
        var v641 = i$$34 != j$$21;
        if(v641) {
          var v639 = this.field;
          var v2330 = this.field;
          var v2331 = errorLocations$$1[j$$21];
          var v1561 = v2330.multiply(v2331, xiInverse);
          var v640 = GF256.addOrSubtract(1, v1561);
          denominator$$3 = v639.multiply(denominator$$3, v640)
        }
        j$$21 = j$$21 + 1;
        v642 = j$$21 < s$$3
      }
      var v643 = result$$4;
      var v644 = i$$34;
      var v1562 = this.field;
      var v1563 = errorEvaluator.evaluateAt(xiInverse);
      var v2332 = this.field;
      var v1564 = v2332.inverse(denominator$$3);
      var v2869 = v1562.multiply(v1563, v1564);
      v643[v644] = v2869;
      if(dataMatrix$$1) {
        var v645 = result$$4;
        var v646 = i$$34;
        var v1565 = this.field;
        var v1566 = result$$4[i$$34];
        var v2870 = v1565.multiply(v1566, xiInverse);
        v645[v646] = v2870
      }
      i$$34 = i$$34 + 1;
      v647 = i$$34 < s$$3
    }
    return result$$4
  }
  function v66(errorLocator) {
    var numErrors = errorLocator.Degree;
    var v649 = numErrors == 1;
    if(v649) {
      var v648 = errorLocator.getCoefficient(1);
      return new Array(v648)
    }
    var result$$3 = new Array(numErrors);
    var e$$4 = 0;
    var i$$33 = 1;
    var v1567 = i$$33 < 256;
    if(v1567) {
      v1567 = e$$4 < numErrors
    }
    var v653 = v1567;
    for(;v653;) {
      var v1568 = errorLocator.evaluateAt(i$$33);
      var v652 = v1568 == 0;
      if(v652) {
        var v650 = result$$3;
        var v651 = e$$4;
        var v1569 = this.field;
        var v2871 = v1569.inverse(i$$33);
        v650[v651] = v2871;
        e$$4 = e$$4 + 1
      }
      i$$33 = i$$33 + 1;
      var v1570 = i$$33 < 256;
      if(v1570) {
        v1570 = e$$4 < numErrors
      }
      v653 = v1570
    }
    var v654 = e$$4 != numErrors;
    if(v654) {
      throw"Error locator degree does not match number of roots";
    }
    return result$$3
  }
  function v65(a$$1, b$$2, R) {
    var v1571 = a$$1.Degree;
    var v1572 = b$$2.Degree;
    var v655 = v1571 < v1572;
    if(v655) {
      var temp$$3 = a$$1;
      a$$1 = b$$2;
      b$$2 = temp$$3
    }
    var rLast = a$$1;
    var r$$1 = b$$2;
    var v656 = this.field;
    var sLast = v656.One;
    var v657 = this.field;
    var s$$2 = v657.Zero;
    var v658 = this.field;
    var tLast = v658.Zero;
    var v659 = this.field;
    var t = v659.One;
    var v1573 = r$$1.Degree;
    var v2333 = R / 2;
    var v1574 = Math.floor(v2333);
    var v673 = v1573 >= v1574;
    for(;v673;) {
      var rLastLast = rLast;
      var sLastLast = sLast;
      var tLastLast = tLast;
      rLast = r$$1;
      sLast = s$$2;
      tLast = t;
      var v660 = rLast.Zero;
      if(v660) {
        throw"r_{i-1} was zero";
      }
      r$$1 = rLastLast;
      var v661 = this.field;
      var q = v661.Zero;
      var v662 = rLast.Degree;
      var denominatorLeadingTerm = rLast.getCoefficient(v662);
      var v663 = this.field;
      var dltInverse = v663.inverse(denominatorLeadingTerm);
      var v2334 = r$$1.Degree;
      var v2335 = rLast.Degree;
      var v1575 = v2334 >= v2335;
      if(v1575) {
        var v2336 = r$$1.Zero;
        v1575 = !v2336
      }
      var v670 = v1575;
      for(;v670;) {
        var v664 = r$$1.Degree;
        var v665 = rLast.Degree;
        var degreeDiff = v664 - v665;
        var v666 = this.field;
        var v1576 = r$$1.Degree;
        var v667 = r$$1.getCoefficient(v1576);
        var scale$$1 = v666.multiply(v667, dltInverse);
        var v1577 = this.field;
        var v668 = v1577.buildMonomial(degreeDiff, scale$$1);
        q = q.addOrSubtract(v668);
        var v669 = rLast.multiplyByMonomial(degreeDiff, scale$$1);
        r$$1 = r$$1.addOrSubtract(v669);
        var v2337 = r$$1.Degree;
        var v2338 = rLast.Degree;
        var v1578 = v2337 >= v2338;
        if(v1578) {
          var v2339 = r$$1.Zero;
          v1578 = !v2339
        }
        v670 = v1578
      }
      var v671 = q.multiply1(sLast);
      s$$2 = v671.addOrSubtract(sLastLast);
      var v672 = q.multiply1(tLast);
      t = v672.addOrSubtract(tLastLast);
      var v1579 = r$$1.Degree;
      var v2340 = R / 2;
      var v1580 = Math.floor(v2340);
      v673 = v1579 >= v1580
    }
    var sigmaTildeAtZero = t.getCoefficient(0);
    var v674 = sigmaTildeAtZero == 0;
    if(v674) {
      throw"ReedSolomonException sigmaTilde(0) was zero";
    }
    var v675 = this.field;
    var inverse = v675.inverse(sigmaTildeAtZero);
    var sigma$$1 = t.multiply2(inverse);
    var omega$$1 = r$$1.multiply2(inverse);
    return new Array(sigma$$1, omega$$1)
  }
  function v64(received, twoS) {
    var v676 = this.field;
    var poly = new GF256Poly(v676, received);
    var syndromeCoefficients = new Array(twoS);
    var i$$32 = 0;
    var v1581 = syndromeCoefficients.length;
    var v677 = i$$32 < v1581;
    for(;v677;) {
      syndromeCoefficients[i$$32] = 0;
      i$$32 = i$$32 + 1;
      var v1582 = syndromeCoefficients.length;
      v677 = i$$32 < v1582
    }
    var dataMatrix = false;
    var noError = true;
    i$$32 = 0;
    var v681 = i$$32 < twoS;
    for(;v681;) {
      var v1583 = this.field;
      var v2341;
      if(dataMatrix) {
        v2341 = i$$32 + 1
      }else {
        v2341 = i$$32
      }
      var v1584 = v2341;
      var v678 = v1583.exp(v1584);
      var eval$$1 = poly.evaluateAt(v678);
      var v2342 = syndromeCoefficients.length;
      var v1585 = v2342 - 1;
      var v679 = v1585 - i$$32;
      syndromeCoefficients[v679] = eval$$1;
      var v680 = eval$$1 != 0;
      if(v680) {
        noError = false
      }
      i$$32 = i$$32 + 1;
      v681 = i$$32 < twoS
    }
    if(noError) {
      return
    }
    var v682 = this.field;
    var syndrome = new GF256Poly(v682, syndromeCoefficients);
    var v1586 = this.field;
    var v683 = v1586.buildMonomial(twoS, 1);
    var sigmaOmega = this.runEuclideanAlgorithm(v683, syndrome, twoS);
    var sigma = sigmaOmega[0];
    var omega = sigmaOmega[1];
    var errorLocations = this.findErrorLocations(sigma);
    var errorMagnitudes = this.findErrorMagnitudes(omega, errorLocations, dataMatrix);
    i$$32 = 0;
    var v1587 = errorLocations.length;
    var v689 = i$$32 < v1587;
    for(;v689;) {
      var v1588 = received.length;
      var v684 = v1588 - 1;
      var v1589 = this.field;
      var v1590 = errorLocations[i$$32];
      var v685 = v1589.log(v1590);
      var position = v684 - v685;
      var v686 = position < 0;
      if(v686) {
        throw"ReedSolomonException Bad error location";
      }
      var v687 = received;
      var v688 = position;
      var v1591 = received[position];
      var v1592 = errorMagnitudes[i$$32];
      var v2872 = GF256.addOrSubtract(v1591, v1592);
      v687[v688] = v2872;
      i$$32 = i$$32 + 1;
      var v1593 = errorLocations.length;
      v689 = i$$32 < v1593
    }
    return
  }
  this.field = field;
  this.decode = v64;
  this.runEuclideanAlgorithm = v65;
  this.findErrorLocations = v66;
  this.findErrorMagnitudes = v67;
  return
}
function GF256Poly(field$$1, coefficients) {
  function v77(other$$8) {
    var v1594 = this.field;
    var v1595 = other$$8.field;
    var v690 = v1594 != v1595;
    if(v690) {
      throw"GF256Polys do not have same GF256 field";
    }
    var v691 = other$$8.Zero;
    if(v691) {
      throw"Divide by 0";
    }
    var v692 = this.field;
    var quotient = v692.Zero;
    var remainder = this;
    var v693 = other$$8.Degree;
    var denominatorLeadingTerm$$1 = other$$8.getCoefficient(v693);
    var v694 = this.field;
    var inverseDenominatorLeadingTerm = v694.inverse(denominatorLeadingTerm$$1);
    var v2343 = remainder.Degree;
    var v2344 = other$$8.Degree;
    var v1596 = v2343 >= v2344;
    if(v1596) {
      var v2345 = remainder.Zero;
      v1596 = !v2345
    }
    var v700 = v1596;
    for(;v700;) {
      var v695 = remainder.Degree;
      var v696 = other$$8.Degree;
      var degreeDifference = v695 - v696;
      var v697 = this.field;
      var v1597 = remainder.Degree;
      var v698 = remainder.getCoefficient(v1597);
      var scale$$2 = v697.multiply(v698, inverseDenominatorLeadingTerm);
      var term = other$$8.multiplyByMonomial(degreeDifference, scale$$2);
      var v699 = this.field;
      var iterationQuotient = v699.buildMonomial(degreeDifference, scale$$2);
      quotient = quotient.addOrSubtract(iterationQuotient);
      remainder = remainder.addOrSubtract(term);
      var v2346 = remainder.Degree;
      var v2347 = other$$8.Degree;
      var v1598 = v2346 >= v2347;
      if(v1598) {
        var v2348 = remainder.Zero;
        v1598 = !v2348
      }
      v700 = v1598
    }
    return new Array(quotient, remainder)
  }
  function v76(degree$$1, coefficient) {
    var v701 = degree$$1 < 0;
    if(v701) {
      throw"System.ArgumentException";
    }
    var v703 = coefficient == 0;
    if(v703) {
      var v702 = this.field;
      return v702.Zero
    }
    var v704 = this.coefficients;
    var size$$6 = v704.length;
    var v705 = size$$6 + degree$$1;
    var product$$2 = new Array(v705);
    var i$$40 = 0;
    var v1599 = product$$2.length;
    var v706 = i$$40 < v1599;
    for(;v706;) {
      product$$2[i$$40] = 0;
      i$$40 = i$$40 + 1;
      var v1600 = product$$2.length;
      v706 = i$$40 < v1600
    }
    i$$40 = 0;
    var v709 = i$$40 < size$$6;
    for(;v709;) {
      var v707 = product$$2;
      var v708 = i$$40;
      var v1601 = this.field;
      var v2349 = this.coefficients;
      var v1602 = v2349[i$$40];
      var v2873 = v1601.multiply(v1602, coefficient);
      v707[v708] = v2873;
      i$$40 = i$$40 + 1;
      v709 = i$$40 < size$$6
    }
    var v710 = this.field;
    return new GF256Poly(v710, product$$2)
  }
  function v75(scalar) {
    var v712 = scalar == 0;
    if(v712) {
      var v711 = this.field;
      return v711.Zero
    }
    var v713 = scalar == 1;
    if(v713) {
      return this
    }
    var v714 = this.coefficients;
    var size$$5 = v714.length;
    var product$$1 = new Array(size$$5);
    var i$$39 = 0;
    var v717 = i$$39 < size$$5;
    for(;v717;) {
      var v715 = product$$1;
      var v716 = i$$39;
      var v1603 = this.field;
      var v2350 = this.coefficients;
      var v1604 = v2350[i$$39];
      var v2874 = v1603.multiply(v1604, scalar);
      v715[v716] = v2874;
      i$$39 = i$$39 + 1;
      v717 = i$$39 < size$$5
    }
    var v718 = this.field;
    return new GF256Poly(v718, product$$1)
  }
  function v74(other$$7) {
    var v1605 = this.field;
    var v1606 = other$$7.field;
    var v719 = v1605 != v1606;
    if(v719) {
      throw"GF256Polys do not have same GF256 field";
    }
    var v1607 = this.Zero;
    var v2351 = !v1607;
    if(v2351) {
      v1607 = other$$7.Zero
    }
    var v721 = v1607;
    if(v721) {
      var v720 = this.field;
      return v720.Zero
    }
    var aCoefficients = this.coefficients;
    var aLength = aCoefficients.length;
    var bCoefficients = other$$7.coefficients;
    var bLength = bCoefficients.length;
    var v1608 = aLength + bLength;
    var v722 = v1608 - 1;
    var product = new Array(v722);
    var i$$38 = 0;
    var v726 = i$$38 < aLength;
    for(;v726;) {
      var aCoeff = aCoefficients[i$$38];
      var j$$22 = 0;
      var v725 = j$$22 < bLength;
      for(;v725;) {
        var v723 = product;
        var v724 = i$$38 + j$$22;
        var v2352 = i$$38 + j$$22;
        var v1609 = product[v2352];
        var v2353 = this.field;
        var v2354 = bCoefficients[j$$22];
        var v1610 = v2353.multiply(aCoeff, v2354);
        var v2875 = GF256.addOrSubtract(v1609, v1610);
        v723[v724] = v2875;
        j$$22 = j$$22 + 1;
        v725 = j$$22 < bLength
      }
      i$$38 = i$$38 + 1;
      v726 = i$$38 < aLength
    }
    var v727 = this.field;
    return new GF256Poly(v727, product)
  }
  function v73(other$$6) {
    var v1611 = this.field;
    var v1612 = other$$6.field;
    var v728 = v1611 != v1612;
    if(v728) {
      throw"GF256Polys do not have same GF256 field";
    }
    var v729 = this.Zero;
    if(v729) {
      return other$$6
    }
    var v730 = other$$6.Zero;
    if(v730) {
      return this
    }
    var smallerCoefficients = this.coefficients;
    var largerCoefficients = other$$6.coefficients;
    var v1613 = smallerCoefficients.length;
    var v1614 = largerCoefficients.length;
    var v731 = v1613 > v1614;
    if(v731) {
      var temp$$4 = smallerCoefficients;
      smallerCoefficients = largerCoefficients;
      largerCoefficients = temp$$4
    }
    var v732 = largerCoefficients.length;
    var sumDiff = new Array(v732);
    var v733 = largerCoefficients.length;
    var v734 = smallerCoefficients.length;
    var lengthDiff = v733 - v734;
    var ci$$1 = 0;
    var v735 = ci$$1 < lengthDiff;
    for(;v735;) {
      sumDiff[ci$$1] = largerCoefficients[ci$$1];
      ci$$1 = ci$$1 + 1;
      v735 = ci$$1 < lengthDiff
    }
    var i$$37 = lengthDiff;
    var v1615 = largerCoefficients.length;
    var v738 = i$$37 < v1615;
    for(;v738;) {
      var v736 = sumDiff;
      var v737 = i$$37;
      var v2355 = i$$37 - lengthDiff;
      var v1616 = smallerCoefficients[v2355];
      var v1617 = largerCoefficients[i$$37];
      var v2876 = GF256.addOrSubtract(v1616, v1617);
      v736[v737] = v2876;
      i$$37 = i$$37 + 1;
      var v1618 = largerCoefficients.length;
      v738 = i$$37 < v1618
    }
    return new GF256Poly(field$$1, sumDiff)
  }
  function v72(a$$2) {
    var v739 = a$$2 == 0;
    if(v739) {
      return this.getCoefficient(0)
    }
    var v740 = this.coefficients;
    var size$$4 = v740.length;
    var v743 = a$$2 == 1;
    if(v743) {
      var result$$5 = 0;
      var i$$36 = 0;
      var v742 = i$$36 < size$$4;
      for(;v742;) {
        var v1619 = this.coefficients;
        var v741 = v1619[i$$36];
        result$$5 = GF256.addOrSubtract(result$$5, v741);
        i$$36 = i$$36 + 1;
        v742 = i$$36 < size$$4
      }
      return result$$5
    }
    var v744 = this.coefficients;
    var result2 = v744[0];
    i$$36 = 1;
    var v747 = i$$36 < size$$4;
    for(;v747;) {
      var v1620 = this.field;
      var v745 = v1620.multiply(a$$2, result2);
      var v1621 = this.coefficients;
      var v746 = v1621[i$$36];
      result2 = GF256.addOrSubtract(v745, v746);
      i$$36 = i$$36 + 1;
      v747 = i$$36 < size$$4
    }
    return result2
  }
  function v71(degree) {
    var v748 = this.coefficients;
    var v2577 = this.coefficients;
    var v2356 = v2577.length;
    var v1622 = v2356 - 1;
    var v749 = v1622 - degree;
    return v748[v749]
  }
  function v70() {
    return this.coefficients
  }
  function v69() {
    var v1623 = this.coefficients;
    var v750 = v1623.length;
    return v750 - 1
  }
  function v68() {
    var v1624 = this.coefficients;
    var v751 = v1624[0];
    return v751 == 0
  }
  var v1625 = coefficients == null;
  var v2358 = !v1625;
  if(v2358) {
    var v2357 = coefficients.length;
    v1625 = v2357 == 0
  }
  var v752 = v1625;
  if(v752) {
    throw"System.ArgumentException";
  }
  this.field = field$$1;
  var coefficientsLength = coefficients.length;
  var v1626 = coefficientsLength > 1;
  if(v1626) {
    var v2359 = coefficients[0];
    v1626 = v2359 == 0
  }
  var v761 = v1626;
  if(v761) {
    var firstNonZero = 1;
    var v1627 = firstNonZero < coefficientsLength;
    if(v1627) {
      var v2360 = coefficients[firstNonZero];
      v1627 = v2360 == 0
    }
    var v753 = v1627;
    for(;v753;) {
      firstNonZero = firstNonZero + 1;
      var v1628 = firstNonZero < coefficientsLength;
      if(v1628) {
        var v2361 = coefficients[firstNonZero];
        v1628 = v2361 == 0
      }
      v753 = v1628
    }
    var v760 = firstNonZero == coefficientsLength;
    if(v760) {
      var v754 = field$$1.Zero;
      this.coefficients = v754.coefficients
    }else {
      var v755 = coefficientsLength - firstNonZero;
      var v2877 = new Array(v755);
      this.coefficients = v2877;
      var i$$35 = 0;
      var v2362 = this.coefficients;
      var v1629 = v2362.length;
      var v757 = i$$35 < v1629;
      for(;v757;) {
        var v756 = this.coefficients;
        v756[i$$35] = 0;
        i$$35 = i$$35 + 1;
        var v2363 = this.coefficients;
        var v1630 = v2363.length;
        v757 = i$$35 < v1630
      }
      var ci = 0;
      var v2364 = this.coefficients;
      var v1631 = v2364.length;
      var v759 = ci < v1631;
      for(;v759;) {
        var v758 = this.coefficients;
        var v1632 = firstNonZero + ci;
        v758[ci] = coefficients[v1632];
        ci = ci + 1;
        var v2365 = this.coefficients;
        var v1633 = v2365.length;
        v759 = ci < v1633
      }
    }
  }else {
    this.coefficients = coefficients
  }
  this.__defineGetter__("Zero", v68);
  this.__defineGetter__("Degree", v69);
  this.__defineGetter__("Coefficients", v70);
  this.getCoefficient = v71;
  this.evaluateAt = v72;
  this.addOrSubtract = v73;
  this.multiply1 = v74;
  this.multiply2 = v75;
  this.multiplyByMonomial = v76;
  this.divide = v77;
  return
}
function GF256(primitive) {
  function v84(a$$6, b$$3) {
    var v1634 = a$$6 == 0;
    var v2366 = !v1634;
    if(v2366) {
      v1634 = b$$3 == 0
    }
    var v762 = v1634;
    if(v762) {
      return 0
    }
    var v763 = a$$6 == 1;
    if(v763) {
      return b$$3
    }
    var v764 = b$$3 == 1;
    if(v764) {
      return a$$6
    }
    var v765 = this.expTable;
    var v2578 = this.logTable;
    var v2367 = v2578[a$$6];
    var v2579 = this.logTable;
    var v2368 = v2579[b$$3];
    var v1635 = v2367 + v2368;
    var v766 = v1635 % 255;
    return v765[v766]
  }
  function v83(a$$5) {
    var v767 = a$$5 == 0;
    if(v767) {
      throw"System.ArithmeticException";
    }
    var v768 = this.expTable;
    var v2369 = this.logTable;
    var v1636 = v2369[a$$5];
    var v769 = 255 - v1636;
    return v768[v769]
  }
  function v82(a$$4) {
    var v770 = a$$4 == 0;
    if(v770) {
      throw"System.ArgumentException";
    }
    var v771 = this.logTable;
    return v771[a$$4]
  }
  function v81(a$$3) {
    var v772 = this.expTable;
    return v772[a$$3]
  }
  function v80(degree$$2, coefficient$$1) {
    var v773 = degree$$2 < 0;
    if(v773) {
      throw"System.ArgumentException";
    }
    var v774 = coefficient$$1 == 0;
    if(v774) {
      return zero
    }
    var v775 = degree$$2 + 1;
    var coefficients$$1 = new Array(v775);
    var i$$42 = 0;
    var v1637 = coefficients$$1.length;
    var v776 = i$$42 < v1637;
    for(;v776;) {
      coefficients$$1[i$$42] = 0;
      i$$42 = i$$42 + 1;
      var v1638 = coefficients$$1.length;
      v776 = i$$42 < v1638
    }
    coefficients$$1[0] = coefficient$$1;
    return new GF256Poly(this, coefficients$$1)
  }
  function v79() {
    return this.one
  }
  function v78() {
    return this.zero
  }
  var v2878 = new Array(256);
  this.expTable = v2878;
  var v2879 = new Array(256);
  this.logTable = v2879;
  var x$$58 = 1;
  var i$$41 = 0;
  var v779 = i$$41 < 256;
  for(;v779;) {
    var v777 = this.expTable;
    v777[i$$41] = x$$58;
    x$$58 = x$$58 << 1;
    var v778 = x$$58 >= 256;
    if(v778) {
      x$$58 = x$$58 ^ primitive
    }
    i$$41 = i$$41 + 1;
    v779 = i$$41 < 256
  }
  i$$41 = 0;
  var v782 = i$$41 < 255;
  for(;v782;) {
    var v780 = this.logTable;
    var v1639 = this.expTable;
    var v781 = v1639[i$$41];
    v780[v781] = i$$41;
    i$$41 = i$$41 + 1;
    v782 = i$$41 < 255
  }
  var at0 = new Array(1);
  at0[0] = 0;
  var v783 = new Array(at0);
  var v2880 = new GF256Poly(this, v783);
  this.zero = v2880;
  var at1 = new Array(1);
  at1[0] = 1;
  var v784 = new Array(at1);
  var v2881 = new GF256Poly(this, v784);
  this.one = v2881;
  this.__defineGetter__("Zero", v78);
  this.__defineGetter__("One", v79);
  this.buildMonomial = v80;
  this.exp = v81;
  this.log = v82;
  this.inverse = v83;
  this.multiply = v84;
  return
}
function URShift(number, bits$$14) {
  var v787 = number >= 0;
  if(v787) {
    return number >> bits$$14
  }else {
    var v785 = number >> bits$$14;
    var v1640 = ~bits$$14;
    var v786 = 2 << v1640;
    return v785 + v786
  }
  return
}
function FinderPattern(posX, posY, estimatedModuleSize) {
  function v90(moduleSize$$2, i$$47, j$$25) {
    var v2715 = this.y;
    var v2580 = i$$47 - v2715;
    var v2370 = Math.abs(v2580);
    var v1641 = v2370 <= moduleSize$$2;
    if(v1641) {
      var v2716 = this.x;
      var v2581 = j$$25 - v2716;
      var v2371 = Math.abs(v2581);
      v1641 = v2371 <= moduleSize$$2
    }
    var v790 = v1641;
    if(v790) {
      var v1642 = this.estimatedModuleSize;
      var v788 = moduleSize$$2 - v1642;
      var moduleSizeDiff = Math.abs(v788);
      var v789 = moduleSizeDiff <= 1;
      var v1644 = !v789;
      if(v1644) {
        var v2372 = this.estimatedModuleSize;
        var v1643 = moduleSizeDiff / v2372;
        v789 = v1643 <= 1
      }
      return v789
    }
    return false
  }
  function v89() {
    var v1645 = this.count;
    this.count = v1645 + 1;
    return
  }
  function v88() {
    return this.y
  }
  function v87() {
    return this.x
  }
  function v86() {
    return this.count
  }
  function v85() {
    return this.estimatedModuleSize
  }
  this.x = posX;
  this.y = posY;
  this.count = 1;
  this.estimatedModuleSize = estimatedModuleSize;
  this.__defineGetter__("EstimatedModuleSize", v85);
  this.__defineGetter__("Count", v86);
  this.__defineGetter__("X", v87);
  this.__defineGetter__("Y", v88);
  this.incrementCount = v89;
  this.aboutEquals = v90;
  return
}
function FinderPatternInfo(patternCenters) {
  function v93() {
    return this.topRight
  }
  function v92() {
    return this.topLeft
  }
  function v91() {
    return this.bottomLeft
  }
  this.bottomLeft = patternCenters[0];
  this.topLeft = patternCenters[1];
  this.topRight = patternCenters[2];
  this.__defineGetter__("BottomLeft", v91);
  this.__defineGetter__("TopLeft", v92);
  this.__defineGetter__("TopRight", v93);
  return
}
function FinderPatternFinder() {
  function v104(image$$12) {
    var tryHarder = false;
    this.image = image$$12;
    var maxI$$1 = qrcode.height;
    var maxJ$$1 = qrcode.width;
    var v1646 = 3 * maxI$$1;
    var v1647 = 4 * MAX_MODULES;
    var v791 = v1646 / v1647;
    var iSkip = Math.floor(v791);
    var v1648 = iSkip < MIN_SKIP;
    var v2373 = !v1648;
    if(v2373) {
      v1648 = tryHarder
    }
    var v792 = v1648;
    if(v792) {
      iSkip = MIN_SKIP
    }
    var done = false;
    var stateCount$$5 = new Array(5);
    var i$$54 = iSkip - 1;
    var v1649 = i$$54 < maxI$$1;
    if(v1649) {
      v1649 = !done
    }
    var v804 = v1649;
    for(;v804;) {
      stateCount$$5[0] = 0;
      stateCount$$5[1] = 0;
      stateCount$$5[2] = 0;
      stateCount$$5[3] = 0;
      stateCount$$5[4] = 0;
      var currentState = 0;
      var j$$28 = 0;
      var v801 = j$$28 < maxJ$$1;
      for(;v801;) {
        var v2582 = qrcode.width;
        var v2374 = i$$54 * v2582;
        var v1650 = j$$28 + v2374;
        var v800 = image$$12[v1650];
        if(v800) {
          var v1651 = currentState & 1;
          var v793 = v1651 == 1;
          if(v793) {
            currentState = currentState + 1
          }
          var v1652 = stateCount$$5[currentState];
          stateCount$$5[currentState] = v1652 + 1
        }else {
          var v1653 = currentState & 1;
          var v799 = v1653 == 0;
          if(v799) {
            var v798 = currentState == 4;
            if(v798) {
              var v797 = this.foundPatternCross(stateCount$$5);
              if(v797) {
                var confirmed = this.handlePossibleCenter(stateCount$$5, i$$54, j$$28);
                if(confirmed) {
                  iSkip = 2;
                  var v795 = this.hasSkipped;
                  if(v795) {
                    done = this.haveMultiplyConfirmedCenters()
                  }else {
                    var rowSkip = this.findRowSkip();
                    var v1654 = stateCount$$5[2];
                    var v794 = rowSkip > v1654;
                    if(v794) {
                      var v2583 = stateCount$$5[2];
                      var v2375 = rowSkip - v2583;
                      var v1655 = v2375 - iSkip;
                      i$$54 = i$$54 + v1655;
                      j$$28 = maxJ$$1 - 1
                    }
                  }
                }else {
                  var v1656 = j$$28 < maxJ$$1;
                  if(v1656) {
                    var v2785 = qrcode.width;
                    var v2717 = i$$54 * v2785;
                    var v2584 = j$$28 + v2717;
                    var v2376 = image$$12[v2584];
                    v1656 = !v2376
                  }
                  var v796 = v1656;
                  do {
                    j$$28 = j$$28 + 1;
                    var v1657 = j$$28 < maxJ$$1;
                    if(v1657) {
                      var v2786 = qrcode.width;
                      var v2718 = i$$54 * v2786;
                      var v2585 = j$$28 + v2718;
                      var v2377 = image$$12[v2585];
                      v1657 = !v2377
                    }
                    v796 = v1657
                  }while(v796);
                  j$$28 = j$$28 - 1
                }
                currentState = 0;
                stateCount$$5[0] = 0;
                stateCount$$5[1] = 0;
                stateCount$$5[2] = 0;
                stateCount$$5[3] = 0;
                stateCount$$5[4] = 0
              }else {
                stateCount$$5[0] = stateCount$$5[2];
                stateCount$$5[1] = stateCount$$5[3];
                stateCount$$5[2] = stateCount$$5[4];
                stateCount$$5[3] = 1;
                stateCount$$5[4] = 0;
                currentState = 3
              }
            }else {
              var v1658 = currentState = currentState + 1;
              var v2586 = currentState = currentState + 1;
              var v2378 = stateCount$$5[v2586];
              stateCount$$5[v1658] = v2378 + 1
            }
          }else {
            var v1659 = stateCount$$5[currentState];
            stateCount$$5[currentState] = v1659 + 1
          }
        }
        j$$28 = j$$28 + 1;
        v801 = j$$28 < maxJ$$1
      }
      var v803 = this.foundPatternCross(stateCount$$5);
      if(v803) {
        confirmed = this.handlePossibleCenter(stateCount$$5, i$$54, maxJ$$1);
        if(confirmed) {
          iSkip = stateCount$$5[0];
          var v802 = this.hasSkipped;
          if(v802) {
            done = haveMultiplyConfirmedCenters()
          }
        }
      }
      i$$54 = i$$54 + iSkip;
      var v1660 = i$$54 < maxI$$1;
      if(v1660) {
        v1660 = !done
      }
      v804 = v1660
    }
    var patternInfo = this.selectBestPatterns();
    qrcode.orderBestPatterns(patternInfo);
    return new FinderPatternInfo(patternInfo)
  }
  function v103() {
    var confirmedCount = 0;
    var totalModuleSize$$2 = 0;
    var v805 = this.possibleCenters;
    var max$$7 = v805.length;
    var i$$53 = 0;
    var v808 = i$$53 < max$$7;
    for(;v808;) {
      var v806 = this.possibleCenters;
      var pattern$$3 = v806[i$$53];
      var v1661 = pattern$$3.Count;
      var v807 = v1661 >= CENTER_QUORUM;
      if(v807) {
        confirmedCount = confirmedCount + 1;
        var v1662 = pattern$$3.EstimatedModuleSize;
        totalModuleSize$$2 = totalModuleSize$$2 + v1662
      }
      i$$53 = i$$53 + 1;
      v808 = i$$53 < max$$7
    }
    var v809 = confirmedCount < 3;
    if(v809) {
      return false
    }
    var average$$1 = totalModuleSize$$2 / max$$7;
    var totalDeviation = 0;
    i$$53 = 0;
    var v811 = i$$53 < max$$7;
    for(;v811;) {
      var v810 = this.possibleCenters;
      pattern$$3 = v810[i$$53];
      var v1663 = totalDeviation;
      var v2587 = pattern$$3.EstimatedModuleSize;
      var v2379 = v2587 - average$$1;
      var v1664 = Math.abs(v2379);
      totalDeviation = v1663 + v1664;
      i$$53 = i$$53 + 1;
      v811 = i$$53 < max$$7
    }
    var v812 = 0.05 * totalModuleSize$$2;
    return totalDeviation <= v812
  }
  function v102() {
    var v813 = this.possibleCenters;
    var max$$6 = v813.length;
    var v814 = max$$6 <= 1;
    if(v814) {
      return 0
    }
    var firstConfirmedCenter = null;
    var i$$52 = 0;
    var v819 = i$$52 < max$$6;
    for(;v819;) {
      var v815 = this.possibleCenters;
      var center$$1 = v815[i$$52];
      var v1665 = center$$1.Count;
      var v818 = v1665 >= CENTER_QUORUM;
      if(v818) {
        var v817 = firstConfirmedCenter == null;
        if(v817) {
          firstConfirmedCenter = center$$1
        }else {
          this.hasSkipped = true;
          var v2719 = firstConfirmedCenter.X;
          var v2720 = center$$1.X;
          var v2588 = v2719 - v2720;
          var v2380 = Math.abs(v2588);
          var v2721 = firstConfirmedCenter.Y;
          var v2722 = center$$1.Y;
          var v2589 = v2721 - v2722;
          var v2381 = Math.abs(v2589);
          var v1666 = v2380 - v2381;
          var v816 = v1666 / 2;
          return Math.floor(v816)
        }
      }
      i$$52 = i$$52 + 1;
      v819 = i$$52 < max$$6
    }
    return 0
  }
  function v101() {
    function v100(a$$8, b$$5) {
      var v1667 = a$$8.count;
      var v1668 = b$$5.count;
      var v820 = v1667 > v1668;
      if(v820) {
        return-1
      }
      var v1669 = a$$8.count;
      var v1670 = b$$5.count;
      var v821 = v1669 < v1670;
      if(v821) {
        return 1
      }
      return 0
    }
    var v822 = this.possibleCenters;
    var startSize = v822.length;
    var v823 = startSize < 3;
    if(v823) {
      throw"Couldn't find enough finder patterns";
    }
    var v829 = startSize > 3;
    if(v829) {
      var totalModuleSize$$1 = 0;
      var i$$51 = 0;
      var v824 = i$$51 < startSize;
      for(;v824;) {
        var v2590 = this.possibleCenters;
        var v2382 = v2590[i$$51];
        var v1671 = v2382.EstimatedModuleSize;
        totalModuleSize$$1 = totalModuleSize$$1 + v1671;
        i$$51 = i$$51 + 1;
        v824 = i$$51 < startSize
      }
      var average = totalModuleSize$$1 / startSize;
      i$$51 = 0;
      var v2591 = this.possibleCenters;
      var v2383 = v2591.length;
      var v1672 = i$$51 < v2383;
      if(v1672) {
        var v2592 = this.possibleCenters;
        var v2384 = v2592.length;
        v1672 = v2384 > 3
      }
      var v828 = v1672;
      for(;v828;) {
        var v825 = this.possibleCenters;
        var pattern$$2 = v825[i$$51];
        var v2593 = pattern$$2.EstimatedModuleSize;
        var v2385 = v2593 - average;
        var v1673 = Math.abs(v2385);
        var v1674 = 0.2 * average;
        var v827 = v1673 > v1674;
        if(v827) {
          var v826 = this.possibleCenters;
          v826.remove(i$$51);
          i$$51 = i$$51 - 1
        }
        i$$51 = i$$51 + 1;
        var v2594 = this.possibleCenters;
        var v2386 = v2594.length;
        var v1675 = i$$51 < v2386;
        if(v1675) {
          var v2595 = this.possibleCenters;
          var v2387 = v2595.length;
          v1675 = v2387 > 3
        }
        v828 = v1675
      }
    }
    var v2388 = this.possibleCenters;
    var v1676 = v2388.length;
    var v831 = v1676 > 3;
    if(v831) {
      var v830 = this.possibleCenters;
      v830.sort(v100)
    }
    var v1677 = this.possibleCenters;
    var v832 = v1677[0];
    var v1678 = this.possibleCenters;
    var v833 = v1678[1];
    var v1679 = this.possibleCenters;
    var v834 = v1679[2];
    return new Array(v832, v833, v834)
  }
  function v99(stateCount$$4, i$$50, j$$27) {
    var v2596 = stateCount$$4[0];
    var v2597 = stateCount$$4[1];
    var v2389 = v2596 + v2597;
    var v2390 = stateCount$$4[2];
    var v1680 = v2389 + v2390;
    var v1681 = stateCount$$4[3];
    var v835 = v1680 + v1681;
    var v836 = stateCount$$4[4];
    var stateCountTotal$$2 = v835 + v836;
    var centerJ$$1 = this.centerFromEnd(stateCount$$4, j$$27);
    var v837 = Math.floor(centerJ$$1);
    var v838 = stateCount$$4[2];
    var centerI$$1 = this.crossCheckVertical(i$$50, v837, v838, stateCountTotal$$2);
    var v1682 = isNaN(centerI$$1);
    var v851 = !v1682;
    if(v851) {
      var v839 = Math.floor(centerJ$$1);
      var v840 = Math.floor(centerI$$1);
      var v841 = stateCount$$4[2];
      centerJ$$1 = this.crossCheckHorizontal(v839, v840, v841, stateCountTotal$$2);
      var v1683 = isNaN(centerJ$$1);
      var v850 = !v1683;
      if(v850) {
        var estimatedModuleSize$$1 = stateCountTotal$$2 / 7;
        var found = false;
        var v842 = this.possibleCenters;
        var max$$5 = v842.length;
        var index$$39 = 0;
        var v845 = index$$39 < max$$5;
        for(;v845;) {
          var v843 = this.possibleCenters;
          var center = v843[index$$39];
          var v844 = center.aboutEquals(estimatedModuleSize$$1, centerI$$1, centerJ$$1);
          if(v844) {
            center.incrementCount();
            found = true;
            break
          }
          index$$39 = index$$39 + 1;
          v845 = index$$39 < max$$5
        }
        var v849 = !found;
        if(v849) {
          var point$$2 = new FinderPattern(centerJ$$1, centerI$$1, estimatedModuleSize$$1);
          var v846 = this.possibleCenters;
          v846.push(point$$2);
          var v1684 = this.resultPointCallback;
          var v848 = v1684 != null;
          if(v848) {
            var v847 = this.resultPointCallback;
            v847.foundPossibleResultPoint(point$$2)
          }
        }
        return true
      }
    }
    return false
  }
  function v98(startJ, centerI, maxCount$$1, originalStateCountTotal$$1) {
    var image$$11 = this.image;
    var maxJ = qrcode.width;
    var stateCount$$3 = this.CrossCheckStateCount;
    var j$$26 = startJ;
    var v1685 = j$$26 >= 0;
    if(v1685) {
      var v2723 = qrcode.width;
      var v2598 = centerI * v2723;
      var v2391 = j$$26 + v2598;
      v1685 = image$$11[v2391]
    }
    var v852 = v1685;
    for(;v852;) {
      var v1686 = stateCount$$3[2];
      stateCount$$3[2] = v1686 + 1;
      j$$26 = j$$26 - 1;
      var v1687 = j$$26 >= 0;
      if(v1687) {
        var v2724 = qrcode.width;
        var v2599 = centerI * v2724;
        var v2392 = j$$26 + v2599;
        v1687 = image$$11[v2392]
      }
      v852 = v1687
    }
    var v853 = j$$26 < 0;
    if(v853) {
      return NaN
    }
    var v1688 = j$$26 >= 0;
    if(v1688) {
      var v2828 = qrcode.width;
      var v2787 = centerI * v2828;
      var v2725 = j$$26 + v2787;
      var v2600 = image$$11[v2725];
      var v2393 = !v2600;
      if(v2393) {
        var v2601 = stateCount$$3[1];
        v2393 = v2601 <= maxCount$$1
      }
      v1688 = v2393
    }
    var v854 = v1688;
    for(;v854;) {
      var v1689 = stateCount$$3[1];
      stateCount$$3[1] = v1689 + 1;
      j$$26 = j$$26 - 1;
      var v1690 = j$$26 >= 0;
      if(v1690) {
        var v2829 = qrcode.width;
        var v2788 = centerI * v2829;
        var v2726 = j$$26 + v2788;
        var v2602 = image$$11[v2726];
        var v2394 = !v2602;
        if(v2394) {
          var v2603 = stateCount$$3[1];
          v2394 = v2603 <= maxCount$$1
        }
        v1690 = v2394
      }
      v854 = v1690
    }
    var v1691 = j$$26 < 0;
    var v2396 = !v1691;
    if(v2396) {
      var v2395 = stateCount$$3[1];
      v1691 = v2395 > maxCount$$1
    }
    var v855 = v1691;
    if(v855) {
      return NaN
    }
    var v1692 = j$$26 >= 0;
    if(v1692) {
      var v2789 = qrcode.width;
      var v2727 = centerI * v2789;
      var v2604 = j$$26 + v2727;
      var v2397 = image$$11[v2604];
      if(v2397) {
        var v2605 = stateCount$$3[0];
        v2397 = v2605 <= maxCount$$1
      }
      v1692 = v2397
    }
    var v856 = v1692;
    for(;v856;) {
      var v1693 = stateCount$$3[0];
      stateCount$$3[0] = v1693 + 1;
      j$$26 = j$$26 - 1;
      var v1694 = j$$26 >= 0;
      if(v1694) {
        var v2790 = qrcode.width;
        var v2728 = centerI * v2790;
        var v2606 = j$$26 + v2728;
        var v2398 = image$$11[v2606];
        if(v2398) {
          var v2607 = stateCount$$3[0];
          v2398 = v2607 <= maxCount$$1
        }
        v1694 = v2398
      }
      v856 = v1694
    }
    var v1695 = stateCount$$3[0];
    var v857 = v1695 > maxCount$$1;
    if(v857) {
      return NaN
    }
    j$$26 = startJ + 1;
    var v1696 = j$$26 < maxJ;
    if(v1696) {
      var v2729 = qrcode.width;
      var v2608 = centerI * v2729;
      var v2399 = j$$26 + v2608;
      v1696 = image$$11[v2399]
    }
    var v858 = v1696;
    for(;v858;) {
      var v1697 = stateCount$$3[2];
      stateCount$$3[2] = v1697 + 1;
      j$$26 = j$$26 + 1;
      var v1698 = j$$26 < maxJ;
      if(v1698) {
        var v2730 = qrcode.width;
        var v2609 = centerI * v2730;
        var v2400 = j$$26 + v2609;
        v1698 = image$$11[v2400]
      }
      v858 = v1698
    }
    var v859 = j$$26 == maxJ;
    if(v859) {
      return NaN
    }
    var v1699 = j$$26 < maxJ;
    if(v1699) {
      var v2830 = qrcode.width;
      var v2791 = centerI * v2830;
      var v2731 = j$$26 + v2791;
      var v2610 = image$$11[v2731];
      var v2401 = !v2610;
      if(v2401) {
        var v2611 = stateCount$$3[3];
        v2401 = v2611 < maxCount$$1
      }
      v1699 = v2401
    }
    var v860 = v1699;
    for(;v860;) {
      var v1700 = stateCount$$3[3];
      stateCount$$3[3] = v1700 + 1;
      j$$26 = j$$26 + 1;
      var v1701 = j$$26 < maxJ;
      if(v1701) {
        var v2831 = qrcode.width;
        var v2792 = centerI * v2831;
        var v2732 = j$$26 + v2792;
        var v2612 = image$$11[v2732];
        var v2402 = !v2612;
        if(v2402) {
          var v2613 = stateCount$$3[3];
          v2402 = v2613 < maxCount$$1
        }
        v1701 = v2402
      }
      v860 = v1701
    }
    var v1702 = j$$26 == maxJ;
    var v2404 = !v1702;
    if(v2404) {
      var v2403 = stateCount$$3[3];
      v1702 = v2403 >= maxCount$$1
    }
    var v861 = v1702;
    if(v861) {
      return NaN
    }
    var v1703 = j$$26 < maxJ;
    if(v1703) {
      var v2793 = qrcode.width;
      var v2733 = centerI * v2793;
      var v2614 = j$$26 + v2733;
      var v2405 = image$$11[v2614];
      if(v2405) {
        var v2615 = stateCount$$3[4];
        v2405 = v2615 < maxCount$$1
      }
      v1703 = v2405
    }
    var v862 = v1703;
    for(;v862;) {
      var v1704 = stateCount$$3[4];
      stateCount$$3[4] = v1704 + 1;
      j$$26 = j$$26 + 1;
      var v1705 = j$$26 < maxJ;
      if(v1705) {
        var v2794 = qrcode.width;
        var v2734 = centerI * v2794;
        var v2616 = j$$26 + v2734;
        var v2406 = image$$11[v2616];
        if(v2406) {
          var v2617 = stateCount$$3[4];
          v2406 = v2617 < maxCount$$1
        }
        v1705 = v2406
      }
      v862 = v1705
    }
    var v1706 = stateCount$$3[4];
    var v863 = v1706 >= maxCount$$1;
    if(v863) {
      return NaN
    }
    var v2618 = stateCount$$3[0];
    var v2619 = stateCount$$3[1];
    var v2407 = v2618 + v2619;
    var v2408 = stateCount$$3[2];
    var v1707 = v2407 + v2408;
    var v1708 = stateCount$$3[3];
    var v864 = v1707 + v1708;
    var v865 = stateCount$$3[4];
    var stateCountTotal$$1 = v864 + v865;
    var v2620 = stateCountTotal$$1 - originalStateCountTotal$$1;
    var v2409 = Math.abs(v2620);
    var v1709 = 5 * v2409;
    var v866 = v1709 >= originalStateCountTotal$$1;
    if(v866) {
      return NaN
    }
    var v867;
    var v1710 = this.foundPatternCross(stateCount$$3);
    if(v1710) {
      v867 = this.centerFromEnd(stateCount$$3, j$$26)
    }else {
      v867 = NaN
    }
    return v867
  }
  function v97(startI, centerJ, maxCount, originalStateCountTotal) {
    var image$$10 = this.image;
    var maxI = qrcode.height;
    var stateCount$$2 = this.CrossCheckStateCount;
    var i$$49 = startI;
    var v1711 = i$$49 >= 0;
    if(v1711) {
      var v2735 = qrcode.width;
      var v2621 = i$$49 * v2735;
      var v2410 = centerJ + v2621;
      v1711 = image$$10[v2410]
    }
    var v868 = v1711;
    for(;v868;) {
      var v1712 = stateCount$$2[2];
      stateCount$$2[2] = v1712 + 1;
      i$$49 = i$$49 - 1;
      var v1713 = i$$49 >= 0;
      if(v1713) {
        var v2736 = qrcode.width;
        var v2622 = i$$49 * v2736;
        var v2411 = centerJ + v2622;
        v1713 = image$$10[v2411]
      }
      v868 = v1713
    }
    var v869 = i$$49 < 0;
    if(v869) {
      return NaN
    }
    var v1714 = i$$49 >= 0;
    if(v1714) {
      var v2832 = qrcode.width;
      var v2795 = i$$49 * v2832;
      var v2737 = centerJ + v2795;
      var v2623 = image$$10[v2737];
      var v2412 = !v2623;
      if(v2412) {
        var v2624 = stateCount$$2[1];
        v2412 = v2624 <= maxCount
      }
      v1714 = v2412
    }
    var v870 = v1714;
    for(;v870;) {
      var v1715 = stateCount$$2[1];
      stateCount$$2[1] = v1715 + 1;
      i$$49 = i$$49 - 1;
      var v1716 = i$$49 >= 0;
      if(v1716) {
        var v2833 = qrcode.width;
        var v2796 = i$$49 * v2833;
        var v2738 = centerJ + v2796;
        var v2625 = image$$10[v2738];
        var v2413 = !v2625;
        if(v2413) {
          var v2626 = stateCount$$2[1];
          v2413 = v2626 <= maxCount
        }
        v1716 = v2413
      }
      v870 = v1716
    }
    var v1717 = i$$49 < 0;
    var v2415 = !v1717;
    if(v2415) {
      var v2414 = stateCount$$2[1];
      v1717 = v2414 > maxCount
    }
    var v871 = v1717;
    if(v871) {
      return NaN
    }
    var v1718 = i$$49 >= 0;
    if(v1718) {
      var v2797 = qrcode.width;
      var v2739 = i$$49 * v2797;
      var v2627 = centerJ + v2739;
      var v2416 = image$$10[v2627];
      if(v2416) {
        var v2628 = stateCount$$2[0];
        v2416 = v2628 <= maxCount
      }
      v1718 = v2416
    }
    var v872 = v1718;
    for(;v872;) {
      var v1719 = stateCount$$2[0];
      stateCount$$2[0] = v1719 + 1;
      i$$49 = i$$49 - 1;
      var v1720 = i$$49 >= 0;
      if(v1720) {
        var v2798 = qrcode.width;
        var v2740 = i$$49 * v2798;
        var v2629 = centerJ + v2740;
        var v2417 = image$$10[v2629];
        if(v2417) {
          var v2630 = stateCount$$2[0];
          v2417 = v2630 <= maxCount
        }
        v1720 = v2417
      }
      v872 = v1720
    }
    var v1721 = stateCount$$2[0];
    var v873 = v1721 > maxCount;
    if(v873) {
      return NaN
    }
    i$$49 = startI + 1;
    var v1722 = i$$49 < maxI;
    if(v1722) {
      var v2741 = qrcode.width;
      var v2631 = i$$49 * v2741;
      var v2418 = centerJ + v2631;
      v1722 = image$$10[v2418]
    }
    var v874 = v1722;
    for(;v874;) {
      var v1723 = stateCount$$2[2];
      stateCount$$2[2] = v1723 + 1;
      i$$49 = i$$49 + 1;
      var v1724 = i$$49 < maxI;
      if(v1724) {
        var v2742 = qrcode.width;
        var v2632 = i$$49 * v2742;
        var v2419 = centerJ + v2632;
        v1724 = image$$10[v2419]
      }
      v874 = v1724
    }
    var v875 = i$$49 == maxI;
    if(v875) {
      return NaN
    }
    var v1725 = i$$49 < maxI;
    if(v1725) {
      var v2834 = qrcode.width;
      var v2799 = i$$49 * v2834;
      var v2743 = centerJ + v2799;
      var v2633 = image$$10[v2743];
      var v2420 = !v2633;
      if(v2420) {
        var v2634 = stateCount$$2[3];
        v2420 = v2634 < maxCount
      }
      v1725 = v2420
    }
    var v876 = v1725;
    for(;v876;) {
      var v1726 = stateCount$$2[3];
      stateCount$$2[3] = v1726 + 1;
      i$$49 = i$$49 + 1;
      var v1727 = i$$49 < maxI;
      if(v1727) {
        var v2835 = qrcode.width;
        var v2800 = i$$49 * v2835;
        var v2744 = centerJ + v2800;
        var v2635 = image$$10[v2744];
        var v2421 = !v2635;
        if(v2421) {
          var v2636 = stateCount$$2[3];
          v2421 = v2636 < maxCount
        }
        v1727 = v2421
      }
      v876 = v1727
    }
    var v1728 = i$$49 == maxI;
    var v2423 = !v1728;
    if(v2423) {
      var v2422 = stateCount$$2[3];
      v1728 = v2422 >= maxCount
    }
    var v877 = v1728;
    if(v877) {
      return NaN
    }
    var v1729 = i$$49 < maxI;
    if(v1729) {
      var v2801 = qrcode.width;
      var v2745 = i$$49 * v2801;
      var v2637 = centerJ + v2745;
      var v2424 = image$$10[v2637];
      if(v2424) {
        var v2638 = stateCount$$2[4];
        v2424 = v2638 < maxCount
      }
      v1729 = v2424
    }
    var v878 = v1729;
    for(;v878;) {
      var v1730 = stateCount$$2[4];
      stateCount$$2[4] = v1730 + 1;
      i$$49 = i$$49 + 1;
      var v1731 = i$$49 < maxI;
      if(v1731) {
        var v2802 = qrcode.width;
        var v2746 = i$$49 * v2802;
        var v2639 = centerJ + v2746;
        var v2425 = image$$10[v2639];
        if(v2425) {
          var v2640 = stateCount$$2[4];
          v2425 = v2640 < maxCount
        }
        v1731 = v2425
      }
      v878 = v1731
    }
    var v1732 = stateCount$$2[4];
    var v879 = v1732 >= maxCount;
    if(v879) {
      return NaN
    }
    var v2641 = stateCount$$2[0];
    var v2642 = stateCount$$2[1];
    var v2426 = v2641 + v2642;
    var v2427 = stateCount$$2[2];
    var v1733 = v2426 + v2427;
    var v1734 = stateCount$$2[3];
    var v880 = v1733 + v1734;
    var v881 = stateCount$$2[4];
    var stateCountTotal = v880 + v881;
    var v2643 = stateCountTotal - originalStateCountTotal;
    var v2428 = Math.abs(v2643);
    var v1735 = 5 * v2428;
    var v1736 = 2 * originalStateCountTotal;
    var v882 = v1735 >= v1736;
    if(v882) {
      return NaN
    }
    var v883;
    var v1737 = this.foundPatternCross(stateCount$$2);
    if(v1737) {
      v883 = this.centerFromEnd(stateCount$$2, i$$49)
    }else {
      v883 = NaN
    }
    return v883
  }
  function v96(stateCount$$1, end$$2) {
    var v2429 = stateCount$$1[4];
    var v1738 = end$$2 - v2429;
    var v1739 = stateCount$$1[3];
    var v884 = v1738 - v1739;
    var v1740 = stateCount$$1[2];
    var v885 = v1740 / 2;
    return v884 - v885
  }
  function v95(stateCount) {
    var totalModuleSize = 0;
    var i$$48 = 0;
    var v887 = i$$48 < 5;
    for(;v887;) {
      var count$$8 = stateCount[i$$48];
      var v886 = count$$8 == 0;
      if(v886) {
        return false
      }
      totalModuleSize = totalModuleSize + count$$8;
      i$$48 = i$$48 + 1;
      v887 = i$$48 < 5
    }
    var v888 = totalModuleSize < 7;
    if(v888) {
      return false
    }
    var v1741 = totalModuleSize << INTEGER_MATH_SHIFT;
    var v889 = v1741 / 7;
    var moduleSize$$3 = Math.floor(v889);
    var v890 = moduleSize$$3 / 2;
    var maxVariance = Math.floor(v890);
    var v2747 = stateCount[0];
    var v2644 = v2747 << INTEGER_MATH_SHIFT;
    var v2430 = moduleSize$$3 - v2644;
    var v1742 = Math.abs(v2430);
    var v891 = v1742 < maxVariance;
    if(v891) {
      var v2803 = stateCount[1];
      var v2748 = v2803 << INTEGER_MATH_SHIFT;
      var v2645 = moduleSize$$3 - v2748;
      var v2431 = Math.abs(v2645);
      var v1743 = v2431 < maxVariance;
      if(v1743) {
        var v2804 = 3 * moduleSize$$3;
        var v2836 = stateCount[2];
        var v2805 = v2836 << INTEGER_MATH_SHIFT;
        var v2749 = v2804 - v2805;
        var v2646 = Math.abs(v2749);
        var v2647 = 3 * maxVariance;
        var v2432 = v2646 < v2647;
        if(v2432) {
          var v2848 = stateCount[3];
          var v2837 = v2848 << INTEGER_MATH_SHIFT;
          var v2806 = moduleSize$$3 - v2837;
          var v2750 = Math.abs(v2806);
          var v2648 = v2750 < maxVariance;
          if(v2648) {
            var v2849 = stateCount[4];
            var v2838 = v2849 << INTEGER_MATH_SHIFT;
            var v2807 = moduleSize$$3 - v2838;
            var v2751 = Math.abs(v2807);
            v2648 = v2751 < maxVariance
          }
          v2432 = v2648
        }
        v1743 = v2432
      }
      v891 = v1743
    }
    return v891
  }
  function v94() {
    var v892 = this.crossCheckStateCount;
    v892[0] = 0;
    var v893 = this.crossCheckStateCount;
    v893[1] = 0;
    var v894 = this.crossCheckStateCount;
    v894[2] = 0;
    var v895 = this.crossCheckStateCount;
    v895[3] = 0;
    var v896 = this.crossCheckStateCount;
    v896[4] = 0;
    return this.crossCheckStateCount
  }
  this.image = null;
  this.possibleCenters = [];
  this.hasSkipped = false;
  var v2882 = new Array(0, 0, 0, 0, 0);
  this.crossCheckStateCount = v2882;
  this.resultPointCallback = null;
  this.__defineGetter__("CrossCheckStateCount", v94);
  this.foundPatternCross = v95;
  this.centerFromEnd = v96;
  this.crossCheckVertical = v97;
  this.crossCheckHorizontal = v98;
  this.handlePossibleCenter = v99;
  this.selectBestPatterns = v101;
  this.findRowSkip = v102;
  this.haveMultiplyConfirmedCenters = v103;
  this.findFinderPattern = v104;
  return
}
function AlignmentPattern(posX$$1, posY$$1, estimatedModuleSize$$2) {
  function v110(moduleSize$$4, i$$55, j$$29) {
    var v2752 = this.y;
    var v2649 = i$$55 - v2752;
    var v2433 = Math.abs(v2649);
    var v1744 = v2433 <= moduleSize$$4;
    if(v1744) {
      var v2753 = this.x;
      var v2650 = j$$29 - v2753;
      var v2434 = Math.abs(v2650);
      v1744 = v2434 <= moduleSize$$4
    }
    var v899 = v1744;
    if(v899) {
      var v1745 = this.estimatedModuleSize;
      var v897 = moduleSize$$4 - v1745;
      var moduleSizeDiff$$1 = Math.abs(v897);
      var v898 = moduleSizeDiff$$1 <= 1;
      var v1747 = !v898;
      if(v1747) {
        var v2435 = this.estimatedModuleSize;
        var v1746 = moduleSizeDiff$$1 / v2435;
        v898 = v1746 <= 1
      }
      return v898
    }
    return false
  }
  function v109() {
    var v1748 = this.count;
    this.count = v1748 + 1;
    return
  }
  function v108() {
    var v900 = this.y;
    return Math.floor(v900)
  }
  function v107() {
    var v901 = this.x;
    return Math.floor(v901)
  }
  function v106() {
    return this.count
  }
  function v105() {
    return this.estimatedModuleSize
  }
  this.x = posX$$1;
  this.y = posY$$1;
  this.count = 1;
  this.estimatedModuleSize = estimatedModuleSize$$2;
  this.__defineGetter__("EstimatedModuleSize", v105);
  this.__defineGetter__("Count", v106);
  this.__defineGetter__("X", v107);
  this.__defineGetter__("Y", v108);
  this.incrementCount = v109;
  this.aboutEquals = v110;
  return
}
function AlignmentPatternFinder(image$$13, startX, startY, width$$12, height$$11, moduleSize$$5, resultPointCallback) {
  function v115() {
    var startX$$1 = this.startX;
    var height$$12 = this.height;
    var maxJ$$2 = startX$$1 + width$$12;
    var v902 = height$$12 >> 1;
    var middleI = startY + v902;
    var stateCount$$10 = new Array(0, 0, 0);
    var iGen = 0;
    var v914 = iGen < height$$12;
    for(;v914;) {
      var v1749;
      var v2651 = iGen & 1;
      var v2438 = v2651 == 0;
      if(v2438) {
        var v2436 = iGen + 1;
        v1749 = v2436 >> 1
      }else {
        var v2652 = iGen + 1;
        var v2437 = v2652 >> 1;
        v1749 = -v2437
      }
      var v903 = v1749;
      var i$$59 = middleI + v903;
      stateCount$$10[0] = 0;
      stateCount$$10[1] = 0;
      stateCount$$10[2] = 0;
      var j$$31 = startX$$1;
      var v1750 = j$$31 < maxJ$$2;
      if(v1750) {
        var v2808 = qrcode.width;
        var v2754 = v2808 * i$$59;
        var v2653 = j$$31 + v2754;
        var v2439 = image$$13[v2653];
        v1750 = !v2439
      }
      var v904 = v1750;
      for(;v904;) {
        j$$31 = j$$31 + 1;
        var v1751 = j$$31 < maxJ$$2;
        if(v1751) {
          var v2809 = qrcode.width;
          var v2755 = v2809 * i$$59;
          var v2654 = j$$31 + v2755;
          var v2440 = image$$13[v2654];
          v1751 = !v2440
        }
        v904 = v1751
      }
      var currentState$$1 = 0;
      var v911 = j$$31 < maxJ$$2;
      for(;v911;) {
        var v2655 = qrcode.width;
        var v2441 = i$$59 * v2655;
        var v1752 = j$$31 + v2441;
        var v910 = image$$13[v1752];
        if(v910) {
          var v908 = currentState$$1 == 1;
          if(v908) {
            var v1753 = stateCount$$10[currentState$$1];
            stateCount$$10[currentState$$1] = v1753 + 1
          }else {
            var v907 = currentState$$1 == 2;
            if(v907) {
              var v906 = this.foundPatternCross(stateCount$$10);
              if(v906) {
                var confirmed$$1 = this.handlePossibleCenter(stateCount$$10, i$$59, j$$31);
                var v905 = confirmed$$1 != null;
                if(v905) {
                  return confirmed$$1
                }
              }
              stateCount$$10[0] = stateCount$$10[2];
              stateCount$$10[1] = 1;
              stateCount$$10[2] = 0;
              currentState$$1 = 1
            }else {
              var v1754 = currentState$$1 = currentState$$1 + 1;
              var v2656 = currentState$$1 = currentState$$1 + 1;
              var v2442 = stateCount$$10[v2656];
              stateCount$$10[v1754] = v2442 + 1
            }
          }
        }else {
          var v909 = currentState$$1 == 1;
          if(v909) {
            currentState$$1 = currentState$$1 + 1
          }
          var v1755 = stateCount$$10[currentState$$1];
          stateCount$$10[currentState$$1] = v1755 + 1
        }
        j$$31 = j$$31 + 1;
        v911 = j$$31 < maxJ$$2
      }
      var v913 = this.foundPatternCross(stateCount$$10);
      if(v913) {
        confirmed$$1 = this.handlePossibleCenter(stateCount$$10, i$$59, maxJ$$2);
        var v912 = confirmed$$1 != null;
        if(v912) {
          return confirmed$$1
        }
      }
      iGen = iGen + 1;
      v914 = iGen < height$$12
    }
    var v2657 = this.possibleCenters;
    var v2443 = v2657.length;
    var v1756 = v2443 == 0;
    var v916 = !v1756;
    if(v916) {
      var v915 = this.possibleCenters;
      return v915[0]
    }
    throw"Couldn't find enough alignment patterns";
  }
  function v114(stateCount$$9, i$$58, j$$30) {
    var v1757 = stateCount$$9[0];
    var v1758 = stateCount$$9[1];
    var v917 = v1757 + v1758;
    var v918 = stateCount$$9[2];
    var stateCountTotal$$4 = v917 + v918;
    var centerJ$$3 = this.centerFromEnd(stateCount$$9, j$$30);
    var v919 = Math.floor(centerJ$$3);
    var v1759 = stateCount$$9[1];
    var v920 = 2 * v1759;
    var centerI$$2 = this.crossCheckVertical(i$$58, v919, v920, stateCountTotal$$4);
    var v1760 = isNaN(centerI$$2);
    var v929 = !v1760;
    if(v929) {
      var v2444 = stateCount$$9[0];
      var v2445 = stateCount$$9[1];
      var v1761 = v2444 + v2445;
      var v1762 = stateCount$$9[2];
      var v921 = v1761 + v1762;
      var estimatedModuleSize$$3 = v921 / 3;
      var v922 = this.possibleCenters;
      var max$$8 = v922.length;
      var index$$40 = 0;
      var v925 = index$$40 < max$$8;
      for(;v925;) {
        var v923 = this.possibleCenters;
        var center$$2 = v923[index$$40];
        var v924 = center$$2.aboutEquals(estimatedModuleSize$$3, centerI$$2, centerJ$$3);
        if(v924) {
          return new AlignmentPattern(centerJ$$3, centerI$$2, estimatedModuleSize$$3)
        }
        index$$40 = index$$40 + 1;
        v925 = index$$40 < max$$8
      }
      var point$$3 = new AlignmentPattern(centerJ$$3, centerI$$2, estimatedModuleSize$$3);
      var v926 = this.possibleCenters;
      v926.push(point$$3);
      var v1763 = this.resultPointCallback;
      var v928 = v1763 != null;
      if(v928) {
        var v927 = this.resultPointCallback;
        v927.foundPossibleResultPoint(point$$3)
      }
    }
    return null
  }
  function v113(startI$$1, centerJ$$2, maxCount$$2, originalStateCountTotal$$2) {
    var image$$14 = this.image;
    var maxI$$2 = qrcode.height;
    var stateCount$$8 = this.crossCheckStateCount;
    stateCount$$8[0] = 0;
    stateCount$$8[1] = 0;
    stateCount$$8[2] = 0;
    var i$$57 = startI$$1;
    var v1764 = i$$57 >= 0;
    if(v1764) {
      var v2810 = qrcode.width;
      var v2756 = i$$57 * v2810;
      var v2658 = centerJ$$2 + v2756;
      var v2446 = image$$14[v2658];
      if(v2446) {
        var v2659 = stateCount$$8[1];
        v2446 = v2659 <= maxCount$$2
      }
      v1764 = v2446
    }
    var v930 = v1764;
    for(;v930;) {
      var v1765 = stateCount$$8[1];
      stateCount$$8[1] = v1765 + 1;
      i$$57 = i$$57 - 1;
      var v1766 = i$$57 >= 0;
      if(v1766) {
        var v2811 = qrcode.width;
        var v2757 = i$$57 * v2811;
        var v2660 = centerJ$$2 + v2757;
        var v2447 = image$$14[v2660];
        if(v2447) {
          var v2661 = stateCount$$8[1];
          v2447 = v2661 <= maxCount$$2
        }
        v1766 = v2447
      }
      v930 = v1766
    }
    var v1767 = i$$57 < 0;
    var v2449 = !v1767;
    if(v2449) {
      var v2448 = stateCount$$8[1];
      v1767 = v2448 > maxCount$$2
    }
    var v931 = v1767;
    if(v931) {
      return NaN
    }
    var v1768 = i$$57 >= 0;
    if(v1768) {
      var v2839 = qrcode.width;
      var v2812 = i$$57 * v2839;
      var v2758 = centerJ$$2 + v2812;
      var v2662 = image$$14[v2758];
      var v2450 = !v2662;
      if(v2450) {
        var v2663 = stateCount$$8[0];
        v2450 = v2663 <= maxCount$$2
      }
      v1768 = v2450
    }
    var v932 = v1768;
    for(;v932;) {
      var v1769 = stateCount$$8[0];
      stateCount$$8[0] = v1769 + 1;
      i$$57 = i$$57 - 1;
      var v1770 = i$$57 >= 0;
      if(v1770) {
        var v2840 = qrcode.width;
        var v2813 = i$$57 * v2840;
        var v2759 = centerJ$$2 + v2813;
        var v2664 = image$$14[v2759];
        var v2451 = !v2664;
        if(v2451) {
          var v2665 = stateCount$$8[0];
          v2451 = v2665 <= maxCount$$2
        }
        v1770 = v2451
      }
      v932 = v1770
    }
    var v1771 = stateCount$$8[0];
    var v933 = v1771 > maxCount$$2;
    if(v933) {
      return NaN
    }
    i$$57 = startI$$1 + 1;
    var v1772 = i$$57 < maxI$$2;
    if(v1772) {
      var v2814 = qrcode.width;
      var v2760 = i$$57 * v2814;
      var v2666 = centerJ$$2 + v2760;
      var v2452 = image$$14[v2666];
      if(v2452) {
        var v2667 = stateCount$$8[1];
        v2452 = v2667 <= maxCount$$2
      }
      v1772 = v2452
    }
    var v934 = v1772;
    for(;v934;) {
      var v1773 = stateCount$$8[1];
      stateCount$$8[1] = v1773 + 1;
      i$$57 = i$$57 + 1;
      var v1774 = i$$57 < maxI$$2;
      if(v1774) {
        var v2815 = qrcode.width;
        var v2761 = i$$57 * v2815;
        var v2668 = centerJ$$2 + v2761;
        var v2453 = image$$14[v2668];
        if(v2453) {
          var v2669 = stateCount$$8[1];
          v2453 = v2669 <= maxCount$$2
        }
        v1774 = v2453
      }
      v934 = v1774
    }
    var v1775 = i$$57 == maxI$$2;
    var v2455 = !v1775;
    if(v2455) {
      var v2454 = stateCount$$8[1];
      v1775 = v2454 > maxCount$$2
    }
    var v935 = v1775;
    if(v935) {
      return NaN
    }
    var v1776 = i$$57 < maxI$$2;
    if(v1776) {
      var v2841 = qrcode.width;
      var v2816 = i$$57 * v2841;
      var v2762 = centerJ$$2 + v2816;
      var v2670 = image$$14[v2762];
      var v2456 = !v2670;
      if(v2456) {
        var v2671 = stateCount$$8[2];
        v2456 = v2671 <= maxCount$$2
      }
      v1776 = v2456
    }
    var v936 = v1776;
    for(;v936;) {
      var v1777 = stateCount$$8[2];
      stateCount$$8[2] = v1777 + 1;
      i$$57 = i$$57 + 1;
      var v1778 = i$$57 < maxI$$2;
      if(v1778) {
        var v2842 = qrcode.width;
        var v2817 = i$$57 * v2842;
        var v2763 = centerJ$$2 + v2817;
        var v2672 = image$$14[v2763];
        var v2457 = !v2672;
        if(v2457) {
          var v2673 = stateCount$$8[2];
          v2457 = v2673 <= maxCount$$2
        }
        v1778 = v2457
      }
      v936 = v1778
    }
    var v1779 = stateCount$$8[2];
    var v937 = v1779 > maxCount$$2;
    if(v937) {
      return NaN
    }
    var v1780 = stateCount$$8[0];
    var v1781 = stateCount$$8[1];
    var v938 = v1780 + v1781;
    var v939 = stateCount$$8[2];
    var stateCountTotal$$3 = v938 + v939;
    var v2674 = stateCountTotal$$3 - originalStateCountTotal$$2;
    var v2458 = Math.abs(v2674);
    var v1782 = 5 * v2458;
    var v1783 = 2 * originalStateCountTotal$$2;
    var v940 = v1782 >= v1783;
    if(v940) {
      return NaN
    }
    var v941;
    var v1784 = this.foundPatternCross(stateCount$$8);
    if(v1784) {
      v941 = this.centerFromEnd(stateCount$$8, i$$57)
    }else {
      v941 = NaN
    }
    return v941
  }
  function v112(stateCount$$7) {
    var moduleSize$$6 = this.moduleSize;
    var maxVariance$$1 = moduleSize$$6 / 2;
    var i$$56 = 0;
    var v943 = i$$56 < 3;
    for(;v943;) {
      var v2675 = stateCount$$7[i$$56];
      var v2459 = moduleSize$$6 - v2675;
      var v1785 = Math.abs(v2459);
      var v942 = v1785 >= maxVariance$$1;
      if(v942) {
        return false
      }
      i$$56 = i$$56 + 1;
      v943 = i$$56 < 3
    }
    return true
  }
  function v111(stateCount$$6, end$$3) {
    var v1786 = stateCount$$6[2];
    var v944 = end$$3 - v1786;
    var v1787 = stateCount$$6[1];
    var v945 = v1787 / 2;
    return v944 - v945
  }
  this.image = image$$13;
  var v2883 = new Array;
  this.possibleCenters = v2883;
  this.startX = startX;
  this.startY = startY;
  this.width = width$$12;
  this.height = height$$11;
  this.moduleSize = moduleSize$$5;
  var v2884 = new Array(0, 0, 0);
  this.crossCheckStateCount = v2884;
  this.resultPointCallback = resultPointCallback;
  this.centerFromEnd = v111;
  this.foundPatternCross = v112;
  this.crossCheckVertical = v113;
  this.handlePossibleCenter = v114;
  this.find = v115;
  return
}
function QRCodeDataBlockReader(blocks, version$$8, numErrorCorrectionCode) {
  function v123() {
    var output$$1 = new Array;
    var MODE_NUMBER = 1;
    var MODE_ROMAN_AND_NUMBER = 2;
    var MODE_8BIT_BYTE = 4;
    var MODE_KANJI = 8;
    do {
      var mode$$8 = this.NextMode();
      var v947 = mode$$8 == 0;
      if(v947) {
        var v1788 = output$$1.length;
        var v946 = v1788 > 0;
        if(v946) {
          break
        }else {
          throw"Empty data block";
        }
      }
      var v1789 = mode$$8 != MODE_NUMBER;
      if(v1789) {
        var v2460 = mode$$8 != MODE_ROMAN_AND_NUMBER;
        if(v2460) {
          var v2676 = mode$$8 != MODE_8BIT_BYTE;
          if(v2676) {
            v2676 = mode$$8 != MODE_KANJI
          }
          v2460 = v2676
        }
        v1789 = v2460
      }
      var v949 = v1789;
      if(v949) {
        var v2764 = "Invalid mode: " + mode$$8;
        var v2677 = v2764 + " in (block:";
        var v2678 = this.blockPointer;
        var v2461 = v2677 + v2678;
        var v1790 = v2461 + " bit:";
        var v1791 = this.bitPointer;
        var v948 = v1790 + v1791;
        throw v948 + ")";
      }
      dataLength = this.getDataLength(mode$$8);
      var v950 = dataLength < 1;
      if(v950) {
        throw"Invalid data length: " + dataLength;
      }
      switch(mode$$8) {
        case MODE_NUMBER:
          var temp_str = this.getFigureString(dataLength);
          var v951 = temp_str.length;
          var ta = new Array(v951);
          var j$$32 = 0;
          var v1792 = temp_str.length;
          var v954 = j$$32 < v1792;
          for(;v954;) {
            var v952 = ta;
            var v953 = j$$32;
            var v2885 = temp_str.charCodeAt(j$$32);
            v952[v953] = v2885;
            j$$32 = j$$32 + 1;
            var v1793 = temp_str.length;
            v954 = j$$32 < v1793
          }
          output$$1.push(ta);
          break;
        case MODE_ROMAN_AND_NUMBER:
          temp_str = this.getRomanAndFigureString(dataLength);
          var v955 = temp_str.length;
          ta = new Array(v955);
          j$$32 = 0;
          var v1794 = temp_str.length;
          var v958 = j$$32 < v1794;
          for(;v958;) {
            var v956 = ta;
            var v957 = j$$32;
            var v2886 = temp_str.charCodeAt(j$$32);
            v956[v957] = v2886;
            j$$32 = j$$32 + 1;
            var v1795 = temp_str.length;
            v958 = j$$32 < v1795
          }
          output$$1.push(ta);
          break;
        case MODE_8BIT_BYTE:
          var temp_sbyteArray3 = this.get8bitByteArray(dataLength);
          output$$1.push(temp_sbyteArray3);
          break;
        case MODE_KANJI:
          temp_str = this.getKanjiString(dataLength);
          output$$1.push(temp_str)
      }
    }while(true);
    return output$$1
  }
  function v122(dataLength$$4) {
    var length$$14 = dataLength$$4;
    var intData$$3 = 0;
    var unicodeString = "";
    var v961 = length$$14 > 0;
    do {
      intData$$3 = getNextBits(13);
      var lowerByte = intData$$3 % 192;
      var higherByte = intData$$3 / 192;
      var v959 = higherByte << 8;
      var tempWord = v959 + lowerByte;
      var shiftjisWord = 0;
      var v1796 = tempWord + 33088;
      var v960 = v1796 <= 40956;
      if(v960) {
        shiftjisWord = tempWord + 33088
      }else {
        shiftjisWord = tempWord + 49472
      }
      var v1797 = unicodeString;
      var v1798 = String.fromCharCode(shiftjisWord);
      unicodeString = v1797 + v1798;
      length$$14 = length$$14 - 1;
      v961 = length$$14 > 0
    }while(v961);
    return unicodeString
  }
  function v121(dataLength$$3) {
    var length$$13 = dataLength$$3;
    var intData$$2 = 0;
    var output = new Array;
    var v962 = length$$13 > 0;
    do {
      intData$$2 = this.getNextBits(8);
      output.push(intData$$2);
      length$$13 = length$$13 - 1;
      v962 = length$$13 > 0
    }while(v962);
    return output
  }
  function v120(dataLength$$2) {
    var length$$12 = dataLength$$2;
    var intData$$1 = 0;
    var strData$$1 = "";
    var v969 = length$$12 > 0;
    do {
      var v968 = length$$12 >= 3;
      if(v968) {
        intData$$1 = this.getNextBits(10);
        var v963 = intData$$1 < 100;
        if(v963) {
          strData$$1 = strData$$1 + "0"
        }
        var v964 = intData$$1 < 10;
        if(v964) {
          strData$$1 = strData$$1 + "0"
        }
        length$$12 = length$$12 - 3
      }else {
        var v967 = length$$12 == 2;
        if(v967) {
          intData$$1 = this.getNextBits(7);
          var v965 = intData$$1 < 10;
          if(v965) {
            strData$$1 = strData$$1 + "0"
          }
          length$$12 = length$$12 - 2
        }else {
          var v966 = length$$12 == 1;
          if(v966) {
            intData$$1 = this.getNextBits(4);
            length$$12 = length$$12 - 1
          }
        }
      }
      strData$$1 = strData$$1 + intData$$1;
      v969 = length$$12 > 0
    }while(v969);
    return strData$$1
  }
  function v119(dataLength$$1) {
    var length$$11 = dataLength$$1;
    var intData = 0;
    var strData = "";
    var tableRomanAndFigure = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":");
    var v973 = length$$11 > 0;
    do {
      var v972 = length$$11 > 1;
      if(v972) {
        intData = this.getNextBits(11);
        var v970 = intData / 45;
        var firstLetter = Math.floor(v970);
        var secondLetter = intData % 45;
        var v1799 = tableRomanAndFigure[firstLetter];
        strData = strData + v1799;
        var v1800 = tableRomanAndFigure[secondLetter];
        strData = strData + v1800;
        length$$11 = length$$11 - 2
      }else {
        var v971 = length$$11 == 1;
        if(v971) {
          intData = this.getNextBits(6);
          var v1801 = tableRomanAndFigure[intData];
          strData = strData + v1801;
          length$$11 = length$$11 - 1
        }
      }
      v973 = length$$11 > 0
    }while(v973);
    return strData
  }
  function v118(modeIndicator) {
    var index$$41 = 0;
    for(;true;) {
      var v1802 = modeIndicator >> index$$41;
      var v974 = v1802 == 1;
      if(v974) {
        break
      }
      index$$41 = index$$41 + 1
    }
    var v2462 = qrcode.sizeOfDataLengthInfo;
    var v2463 = this.dataLengthMode;
    var v1803 = v2462[v2463];
    var v975 = v1803[index$$41];
    return this.getNextBits(v975)
  }
  function v117() {
    var v1804 = this.blockPointer;
    var v2765 = this.blocks;
    var v2679 = v2765.length;
    var v2680 = this.numErrorCorrectionCode;
    var v2464 = v2679 - v2680;
    var v1805 = v2464 - 2;
    var v976 = v1804 > v1805;
    if(v976) {
      return 0
    }else {
      return this.getNextBits(4)
    }
    return
  }
  function v116(numBits) {
    var bits$$15 = 0;
    var v2465 = this.bitPointer;
    var v1806 = v2465 + 1;
    var v1002 = numBits < v1806;
    if(v1002) {
      var mask$$5 = 0;
      var i$$60 = 0;
      var v977 = i$$60 < numBits;
      for(;v977;) {
        var v1807 = 1 << i$$60;
        mask$$5 = mask$$5 + v1807;
        i$$60 = i$$60 + 1;
        v977 = i$$60 < numBits
      }
      var v2681 = this.bitPointer;
      var v2466 = v2681 - numBits;
      var v1808 = v2466 + 1;
      mask$$5 = mask$$5 << v1808;
      var v2467 = this.blocks;
      var v2468 = this.blockPointer;
      var v1809 = v2467[v2468];
      var v978 = v1809 & mask$$5;
      var v2469 = this.bitPointer;
      var v1810 = v2469 - numBits;
      var v979 = v1810 + 1;
      bits$$15 = v978 >> v979;
      var v1811 = this.bitPointer;
      this.bitPointer = v1811 - numBits;
      return bits$$15
    }else {
      var v2682 = this.bitPointer;
      var v2470 = v2682 + 1;
      var v1812 = v2470 + 8;
      var v1001 = numBits < v1812;
      if(v1001) {
        var mask1 = 0;
        i$$60 = 0;
        var v2471 = this.bitPointer;
        var v1813 = v2471 + 1;
        var v980 = i$$60 < v1813;
        for(;v980;) {
          var v1814 = 1 << i$$60;
          mask1 = mask1 + v1814;
          i$$60 = i$$60 + 1;
          var v2472 = this.bitPointer;
          var v1815 = v2472 + 1;
          v980 = i$$60 < v1815
        }
        var v2473 = this.blocks;
        var v2474 = this.blockPointer;
        var v1816 = v2473[v2474];
        var v981 = v1816 & mask1;
        var v2475 = this.bitPointer;
        var v1817 = v2475 + 1;
        var v982 = numBits - v1817;
        bits$$15 = v981 << v982;
        var v1818 = this.blockPointer;
        this.blockPointer = v1818 + 1;
        var v2683 = this.blocks;
        var v2684 = this.blockPointer;
        var v2476 = v2683[v2684];
        var v2818 = this.bitPointer;
        var v2766 = v2818 + 1;
        var v2685 = numBits - v2766;
        var v2477 = 8 - v2685;
        var v1819 = v2476 >> v2477;
        bits$$15 = bits$$15 + v1819;
        var v983 = this.bitPointer;
        var v984 = numBits % 8;
        this.bitPointer = v983 - v984;
        var v1820 = this.bitPointer;
        var v986 = v1820 < 0;
        if(v986) {
          var v985 = this.bitPointer;
          this.bitPointer = 8 + v985
        }
        return bits$$15
      }else {
        var v2686 = this.bitPointer;
        var v2478 = v2686 + 1;
        var v1821 = v2478 + 16;
        var v1000 = numBits < v1821;
        if(v1000) {
          mask1 = 0;
          var mask3 = 0;
          i$$60 = 0;
          var v2479 = this.bitPointer;
          var v1822 = v2479 + 1;
          var v987 = i$$60 < v1822;
          for(;v987;) {
            var v1823 = 1 << i$$60;
            mask1 = mask1 + v1823;
            i$$60 = i$$60 + 1;
            var v2480 = this.bitPointer;
            var v1824 = v2480 + 1;
            v987 = i$$60 < v1824
          }
          var v2481 = this.blocks;
          var v2482 = this.blockPointer;
          var v1825 = v2481[v2482];
          var v988 = v1825 & mask1;
          var v2483 = this.bitPointer;
          var v1826 = v2483 + 1;
          var v989 = numBits - v1826;
          var bitsFirstBlock = v988 << v989;
          var v1827 = this.blockPointer;
          this.blockPointer = v1827 + 1;
          var v1828 = this.blocks;
          var v1829 = this.blockPointer;
          var v990 = v1828[v1829];
          var v2687 = this.bitPointer;
          var v2484 = v2687 + 1;
          var v1830 = v2484 + 8;
          var v991 = numBits - v1830;
          var bitsSecondBlock = v990 << v991;
          var v1831 = this.blockPointer;
          this.blockPointer = v1831 + 1;
          i$$60 = 0;
          var v2767 = this.bitPointer;
          var v2688 = v2767 + 1;
          var v2485 = v2688 + 8;
          var v1832 = numBits - v2485;
          var v992 = i$$60 < v1832;
          for(;v992;) {
            var v1833 = 1 << i$$60;
            mask3 = mask3 + v1833;
            i$$60 = i$$60 + 1;
            var v2768 = this.bitPointer;
            var v2689 = v2768 + 1;
            var v2486 = v2689 + 8;
            var v1834 = numBits - v2486;
            v992 = i$$60 < v1834
          }
          var v2819 = this.bitPointer;
          var v2769 = v2819 + 1;
          var v2690 = v2769 + 8;
          var v2487 = numBits - v2690;
          var v1835 = 8 - v2487;
          mask3 = mask3 << v1835;
          var v2488 = this.blocks;
          var v2489 = this.blockPointer;
          var v1836 = v2488[v2489];
          var v993 = v1836 & mask3;
          var v2770 = this.bitPointer;
          var v2691 = v2770 + 1;
          var v2490 = v2691 + 8;
          var v1837 = numBits - v2490;
          var v994 = 8 - v1837;
          var bitsThirdBlock = v993 >> v994;
          var v995 = bitsFirstBlock + bitsSecondBlock;
          bits$$15 = v995 + bitsThirdBlock;
          var v996 = this.bitPointer;
          var v1838 = numBits - 8;
          var v997 = v1838 % 8;
          this.bitPointer = v996 - v997;
          var v1839 = this.bitPointer;
          var v999 = v1839 < 0;
          if(v999) {
            var v998 = this.bitPointer;
            this.bitPointer = 8 + v998
          }
          return bits$$15
        }else {
          return 0
        }
      }
    }
    return
  }
  this.blockPointer = 0;
  this.bitPointer = 7;
  this.dataLength = 0;
  this.blocks = blocks;
  this.numErrorCorrectionCode = numErrorCorrectionCode;
  var v1005 = version$$8 <= 9;
  if(v1005) {
    this.dataLengthMode = 0
  }else {
    var v1840 = version$$8 >= 10;
    if(v1840) {
      v1840 = version$$8 <= 26
    }
    var v1004 = v1840;
    if(v1004) {
      this.dataLengthMode = 1
    }else {
      var v1841 = version$$8 >= 27;
      if(v1841) {
        v1841 = version$$8 <= 40
      }
      var v1003 = v1841;
      if(v1003) {
        this.dataLengthMode = 2
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
  this.__defineGetter__("DataByte", v123);
  return
}
function dragenter(e$$7) {
  e$$7.stopPropagation();
  e$$7.preventDefault();
  return
}
function dragover(e$$8) {
  e$$8.stopPropagation();
  e$$8.preventDefault();
  return
}
function drop(e$$9) {
  e$$9.stopPropagation();
  e$$9.preventDefault();
  var dt = e$$9.dataTransfer;
  var files = dt.files;
  handleFiles(files);
  return
}
function handleFiles(f) {
  function v125(theFile) {
    function v124(e$$10) {
      var v1842 = e$$10.target;
      var v1006 = v1842.result;
      qrcode.decode(v1006);
      return
    }
    return v124
  }
  var o$$1 = [];
  var i$$61 = 0;
  var v1843 = f.length;
  var v1009 = i$$61 < v1843;
  for(;v1009;) {
    var reader$$2 = new FileReader;
    var v1007 = reader$$2;
    var v1844 = f[i$$61];
    var v2887 = v125(v1844);
    v1007.onload = v2887;
    var v1008 = f[i$$61];
    reader$$2.readAsDataURL(v1008);
    i$$61 = i$$61 + 1;
    var v1845 = f.length;
    v1009 = i$$61 < v1845
  }
  return
}
function read(a$$9) {
  alert(a$$9);
  return
}
function load() {
  qrcode.callback = read;
  var v1010 = document.getElementById("imgpath");
  var img$$2 = v1010.value;
  qrcode.decode(img$$2);
  return
}
function passLine(stringPixels) {
  var coll = stringPixels.split("-");
  var i$$62 = 0;
  var v1022 = i$$62 < 320;
  for(;v1022;) {
    var v1011 = coll[i$$62];
    var intVal = parseInt(v1011);
    var v1012 = intVal >> 16;
    r = v1012 & 255;
    var v1013 = intVal >> 8;
    g = v1013 & 255;
    b = intVal & 255;
    var v1014 = imageData.data;
    var v1015 = c + 0;
    v1014[v1015] = r;
    var v1016 = imageData.data;
    var v1017 = c + 1;
    v1016[v1017] = g;
    var v1018 = imageData.data;
    var v1019 = c + 2;
    v1018[v1019] = b;
    var v1020 = imageData.data;
    var v1021 = c + 3;
    v1020[v1021] = 255;
    c = c + 4;
    i$$62 = i$$62 + 1;
    v1022 = i$$62 < 320
  }
  var v2491 = 320 * 240;
  var v1846 = v2491 * 4;
  var v1023 = c >= v1846;
  if(v1023) {
    c = 0;
    gCtx.putImageData(imageData, 0, 0)
  }
  return
}
function captureToCanvas() {
  flash = document.getElementById("embedflash");
  flash.ccCapture();
  qrcode.decode();
  return
}
GridSampler = {};
GridSampler.checkAndNudgePoints = v126;
GridSampler.sampleGrid3 = v127;
GridSampler.sampleGridx = v128;
var v1024 = Version;
var v2888 = new Array(31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017);
v1024.VERSION_DECODE_INFO = v2888;
var v1025 = Version;
var v2889 = buildVersions();
v1025.VERSIONS = v2889;
Version.getVersionForNumber = v129;
Version.getProvisionalVersionForDimension = v130;
Version.decodeVersionInformation = v131;
PerspectiveTransform.quadrilateralToQuadrilateral = v132;
PerspectiveTransform.squareToQuadrilateral = v133;
PerspectiveTransform.quadrilateralToSquare = v134;
var FORMAT_INFO_MASK_QR = 21522;
var v1026 = new Array(21522, 0);
var v1027 = new Array(20773, 1);
var v1028 = new Array(24188, 2);
var v1029 = new Array(23371, 3);
var v1030 = new Array(17913, 4);
var v1031 = new Array(16590, 5);
var v1032 = new Array(20375, 6);
var v1033 = new Array(19104, 7);
var v1034 = new Array(30660, 8);
var v1035 = new Array(29427, 9);
var v1036 = new Array(32170, 10);
var v1037 = new Array(30877, 11);
var v1038 = new Array(26159, 12);
var v1039 = new Array(25368, 13);
var v1040 = new Array(27713, 14);
var v1041 = new Array(26998, 15);
var v1042 = new Array(5769, 16);
var v1043 = new Array(5054, 17);
var v1044 = new Array(7399, 18);
var v1045 = new Array(6608, 19);
var v1046 = new Array(1890, 20);
var v1047 = new Array(597, 21);
var v1048 = new Array(3340, 22);
var v1049 = new Array(2107, 23);
var v1050 = new Array(13663, 24);
var v1051 = new Array(12392, 25);
var v1052 = new Array(16177, 26);
var v1053 = new Array(14854, 27);
var v1054 = new Array(9396, 28);
var v1055 = new Array(8579, 29);
var v1056 = new Array(11994, 30);
var v1057 = new Array(11245, 31);
var FORMAT_INFO_DECODE_LOOKUP = new Array(v1026, v1027, v1028, v1029, v1030, v1031, v1032, v1033, v1034, v1035, v1036, v1037, v1038, v1039, v1040, v1041, v1042, v1043, v1044, v1045, v1046, v1047, v1048, v1049, v1050, v1051, v1052, v1053, v1054, v1055, v1056, v1057);
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
var v1058 = DataMask;
var v1847 = new DataMask000;
var v1848 = new DataMask001;
var v1849 = new DataMask010;
var v1850 = new DataMask011;
var v1851 = new DataMask100;
var v1852 = new DataMask101;
var v1853 = new DataMask110;
var v1854 = new DataMask111;
var v2890 = new Array(v1847, v1848, v1849, v1850, v1851, v1852, v1853, v1854);
v1058.DATA_MASKS = v2890;
var v1059 = GF256;
var v2891 = new GF256(285);
v1059.QR_CODE_FIELD = v2891;
var v1060 = GF256;
var v2892 = new GF256(301);
v1060.DATA_MATRIX_FIELD = v2892;
GF256.addOrSubtract = v141;
Decoder = {};
var v1061 = Decoder;
var v1855 = GF256.QR_CODE_FIELD;
var v2893 = new ReedSolomonDecoder(v1855);
v1061.rsDecoder = v2893;
Decoder.correctErrors = v142;
Decoder.decode = v143;
qrcode = {};
qrcode.imagedata = null;
qrcode.width = 0;
qrcode.height = 0;
qrcode.qrCodeSymbol = null;
qrcode.debug = false;
var v1062 = [10, 9, 8, 8];
var v1063 = [12, 11, 16, 10];
var v1064 = [14, 13, 16, 12];
qrcode.sizeOfDataLengthInfo = [v1062, v1063, v1064];
qrcode.callback = null;
qrcode.decode = v145;
qrcode.decode_utf8 = v146;
qrcode.process = v147;
qrcode.getPixel = v148;
qrcode.binarize = v149;
qrcode.getMiddleBrightnessPerArea = v150;
qrcode.grayScaleToBitmap = v151;
qrcode.grayscale = v152;
var v1065 = Array.prototype;
v1065.remove = v153;
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
var v1066 = document.getElementById("decode");
v1066.onclick = load;

JAM.stopProfile('load');
