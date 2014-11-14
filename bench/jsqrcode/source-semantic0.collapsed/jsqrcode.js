function v154(patterns) {
  function distance(pattern1$$1, pattern2$$1) {
    xDiff = pattern1$$1.X - pattern2$$1.X;
    yDiff = pattern1$$1.Y - pattern2$$1.Y;
    return JAM.call(Math.sqrt, Math, [xDiff * xDiff + yDiff * yDiff], JAM.policy.p21);
  }
  function crossProductZ(pointA$$1, pointB$$1, pointC$$1) {
    var bX = pointB$$1.x;
    var bY = pointB$$1.y;
    return(pointC$$1.x - bX) * (pointA$$1.y - bY) - (pointC$$1.y - bY) * (pointA$$1.x - bX);
  }
  var zeroOneDistance = JAM.call(distance, null, [patterns[0], patterns[1]], JAM.policy.p26);
  var oneTwoDistance = JAM.call(distance, null, [patterns[1], patterns[2]], JAM.policy.p26);
  var zeroTwoDistance = JAM.call(distance, null, [patterns[0], patterns[2]], JAM.policy.p26);
  var pointA;
  var pointB;
  var pointC;
  var v1064 = oneTwoDistance >= zeroOneDistance;
  if (v1064) {
    v1064 = oneTwoDistance >= zeroTwoDistance;
  }
  if (v1064) {
    pointB = patterns[0];
    pointA = patterns[1];
    pointC = patterns[2];
  } else {
    var v1065 = zeroTwoDistance >= oneTwoDistance;
    if (v1065) {
      v1065 = zeroTwoDistance >= zeroOneDistance;
    }
    if (v1065) {
      pointB = patterns[1];
      pointA = patterns[0];
      pointC = patterns[2];
    } else {
      pointB = patterns[2];
      pointA = patterns[0];
      pointC = patterns[1];
    }
  }
  if (JAM.call(crossProductZ, null, [pointA, pointB, pointC], JAM.policy.p26) < 0) {
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
  var v1067 = (to || from) + 1;
  if (!v1067) {
    v1067 = this.length;
  }
  var rest = JAM.call(this.slice, this, [v1067], JAM.policy.p21);
  var v172;
  if (from < 0) {
    v172 = this.length + from;
  } else {
    v172 = from;
  }
  this.length = v172;
  var v173 = this.push;
  return JAM.call(v173.apply, v173, [this, rest], JAM.policy.p27);
}
function v152() {
  var ret$$1 = new Array(qrcode.width * qrcode.height);
  var y$$43 = 0;
  var v177 = y$$43 < qrcode.height;
  for (;v177;) {
    var x$$61 = 0;
    var v176 = x$$61 < qrcode.width;
    for (;v176;) {
      var gray$$1 = JAM.call(qrcode.getPixel, qrcode, [x$$61, y$$43], JAM.policy.p27);
      ret$$1[x$$61 + y$$43 * qrcode.width] = gray$$1;
      x$$61++;
      v176 = x$$61 < qrcode.width;
    }
    y$$43++;
    v177 = y$$43 < qrcode.height;
  }
  return ret$$1;
}
function v151(grayScale) {
  var middle$$1 = JAM.call(qrcode.getMiddleBrightnessPerArea, qrcode, [grayScale], JAM.policy.p21);
  var sqrtNumArea = middle$$1.length;
  var areaWidth$$1 = JAM.call(Math.floor, Math, [qrcode.width / sqrtNumArea], JAM.policy.p21);
  var areaHeight$$1 = JAM.call(Math.floor, Math, [qrcode.height / sqrtNumArea], JAM.policy.p21);
  var bitmap = new Array(qrcode.height * qrcode.width);
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
          var v181 = areaWidth$$1 * ax$$1 + dx$$6 + (areaHeight$$1 * ay$$1 + dy$$6) * qrcode.width;
          var v1083;
          if (grayScale[areaWidth$$1 * ax$$1 + dx$$6 + (areaHeight$$1 * ay$$1 + dy$$6) * qrcode.width] < middle$$1[ax$$1][ay$$1]) {
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
  var areaWidth = JAM.call(Math.floor, Math, [qrcode.width / numSqrtArea], JAM.policy.p21);
  var areaHeight = JAM.call(Math.floor, Math, [qrcode.height / numSqrtArea], JAM.policy.p21);
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
      minmax[ax][ay][0] = 255;
      var dy$$5 = 0;
      var v198 = dy$$5 < areaHeight;
      for (;v198;) {
        var dx$$5 = 0;
        var v197 = dx$$5 < areaWidth;
        for (;v197;) {
          var target$$26 = image$$9[areaWidth * ax + dx$$5 + (areaHeight * ay + dy$$5) * qrcode.width];
          if (target$$26 < minmax[ax][ay][0]) {
            minmax[ax][ay][0] = target$$26;
          }
          if (target$$26 > minmax[ax][ay][1]) {
            minmax[ax][ay][1] = target$$26;
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
      var v2796 = JAM.call(Math.floor, Math, [(minmax[ax][ay][0] + minmax[ax][ay][1]) / 2], JAM.policy.p21);
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
  var ret = new Array(qrcode.width * qrcode.height);
  var y$$42 = 0;
  var v208 = y$$42 < qrcode.height;
  for (;v208;) {
    var x$$60 = 0;
    var v207 = x$$60 < qrcode.width;
    for (;v207;) {
      var gray = JAM.call(qrcode.getPixel, qrcode, [x$$60, y$$42], JAM.policy.p27);
      var v206 = x$$60 + y$$42 * qrcode.width;
      var v1099;
      if (gray <= th) {
        v1099 = true;
      } else {
        v1099 = false;
      }
      ret[v206] = v1099;
      x$$60++;
      v207 = x$$60 < qrcode.width;
    }
    y$$42++;
    v208 = y$$42 < qrcode.height;
  }
  return ret;
}
function v148(x$$59, y$$41) {
  if (qrcode.width < x$$59) {
    throw "point error";
  }
  if (qrcode.height < y$$41) {
    throw "point error";
  }
  var point$$1 = x$$59 * 4 + y$$41 * qrcode.width * 4;
  p = (qrcode.imagedata.data[point$$1] * 33 + qrcode.imagedata.data[point$$1 + 1] * 34 + qrcode.imagedata.data[point$$1 + 2] * 33) / 100;
  return p;
}
function v147(ctx) {
  var start$$4 = (new Date).getTime();
  var image$$8 = JAM.call(qrcode.grayScaleToBitmap, qrcode, [qrcode.grayscale()], JAM.policy.p21);
  if (qrcode.debug) {
    var y$$40 = 0;
    var v224 = y$$40 < qrcode.height;
    for (;v224;) {
      var x$$58 = 0;
      var v223 = x$$58 < qrcode.width;
      for (;v223;) {
        var point = x$$58 * 4 + y$$40 * qrcode.width * 4;
        var v218 = qrcode.imagedata.data;
        var v1111;
        if (image$$8[x$$58 + y$$40 * qrcode.width]) {
          v1111 = 0;
        } else {
          v1111 = 0;
        }
        v218[point] = v1111;
        var v219 = qrcode.imagedata.data;
        var v220 = point + 1;
        var v1113;
        if (image$$8[x$$58 + y$$40 * qrcode.width]) {
          v1113 = 0;
        } else {
          v1113 = 0;
        }
        v219[v220] = v1113;
        var v221 = qrcode.imagedata.data;
        var v222 = point + 2;
        var v1115;
        if (image$$8[x$$58 + y$$40 * qrcode.width]) {
          v1115 = 255;
        } else {
          v1115 = 0;
        }
        v221[v222] = v1115;
        x$$58++;
        v223 = x$$58 < qrcode.width;
      }
      y$$40++;
      v224 = y$$40 < qrcode.height;
    }
    JAM.call(ctx.putImageData, ctx, [qrcode.imagedata, 0, 0], JAM.policy.p28);
  }
  var detector = new Detector(image$$8);
  var qRCodeMatrix = detector.detect();
  if (qrcode.debug) {
    JAM.call(ctx.putImageData, ctx, [qrcode.imagedata, 0, 0], JAM.policy.p28);
  }
  var reader$$1 = JAM.call(Decoder.decode, Decoder, [qRCodeMatrix.bits], JAM.policy.p21);
  var data$$18 = reader$$1.DataByte;
  var str$$6 = "";
  var i$$45 = 0;
  var v231 = i$$45 < data$$18.length;
  for (;v231;) {
    var j$$24 = 0;
    var v230 = j$$24 < data$$18[i$$45].length;
    for (;v230;) {
      str$$6 = str$$6 + JAM.call(String.fromCharCode, String, [data$$18[i$$45][j$$24]], JAM.policy.p21);
      j$$24++;
      v230 = j$$24 < data$$18[i$$45].length;
    }
    i$$45++;
    v231 = i$$45 < data$$18.length;
  }
  var end$$1 = (new Date).getTime();
  var time = end$$1 - start$$4;
  JAM.call(console.log, console, [time], JAM.policy.p24);
  return JAM.call(qrcode.decode_utf8, qrcode, [str$$6], JAM.policy.p21);
}
function v146(s$$4) {
  return decodeURIComponent(escape(s$$4));
}
function v145(src$$1) {
  function v144() {
    var canvas_qr$$1 = JAM.call(document.createElement, document, ["canvas"], JAM.policy.p17);
    var context$$1 = JAM.call(canvas_qr$$1.getContext, canvas_qr$$1, ["2d"], JAM.policy.p17);
    var canvas_out = JAM.call(document.getElementById, document, ["out-canvas"], JAM.policy.p17);
    if (canvas_out != null) {
      var outctx = JAM.call(canvas_out.getContext, canvas_out, ["2d"], JAM.policy.p17);
      JAM.call(outctx.clearRect, outctx, [0, 0, 320, 240], JAM.policy.p20);
      JAM.call(outctx.drawImage, outctx, [image$$7, 0, 0, 320, 240], JAM.policy.p28);
    }
    canvas_qr$$1.width = image$$7.width;
    canvas_qr$$1.height = image$$7.height;
    JAM.call(context$$1.drawImage, context$$1, [image$$7, 0, 0], JAM.policy.p28);
    qrcode.width = image$$7.width;
    qrcode.height = image$$7.height;
    try {
      var v235 = qrcode;
      var v2797 = JAM.call(context$$1.getImageData, context$$1, [0, 0, image$$7.width, image$$7.height], JAM.policy.p20);
      v235.imagedata = v2797;
    } catch (e$$5) {
      qrcode.result = "Cross domain image reading not supported in your browser! Save it to your computer then drag and drop the file!";
      if (qrcode.callback != null) {
        JAM.call(qrcode.callback, qrcode, [qrcode.result], JAM.policy.p21);
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
    if (qrcode.callback != null) {
      JAM.call(qrcode.callback, qrcode, [qrcode.result], JAM.policy.p21);
    }
    return;
  }
  if (arguments.length == 0) {
    var canvas_qr = JAM.call(document.getElementById, document, ["qr-canvas"], JAM.policy.p17);
    var context = JAM.call(canvas_qr.getContext, canvas_qr, ["2d"], JAM.policy.p17);
    qrcode.width = canvas_qr.width;
    qrcode.height = canvas_qr.height;
    var v241 = qrcode;
    var v2799 = JAM.call(context.getImageData, context, [0, 0, qrcode.width, qrcode.height], JAM.policy.p20);
    v241.imagedata = v2799;
    var v242 = qrcode;
    var v2800 = JAM.call(qrcode.process, qrcode, [context], JAM.policy.p21);
    v242.result = v2800;
    if (qrcode.callback != null) {
      JAM.call(qrcode.callback, qrcode, [qrcode.result], JAM.policy.p21);
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
  var ecLevel$$2 = parser.readFormatInformation().ErrorCorrectionLevel;
  var codewords$$1 = parser.readCodewords();
  var dataBlocks = JAM.call(DataBlock.getDataBlocks, DataBlock, [codewords$$1, version$$7, ecLevel$$2], JAM.policy.p27);
  var totalBytes = 0;
  var i$$44 = 0;
  var v247 = i$$44 < dataBlocks.Length;
  for (;v247;) {
    totalBytes = totalBytes + dataBlocks[i$$44].NumDataCodewords;
    i$$44++;
    v247 = i$$44 < dataBlocks.Length;
  }
  var resultBytes = new Array(totalBytes);
  var resultOffset$$1 = 0;
  var j$$23 = 0;
  var v250 = j$$23 < dataBlocks.length;
  for (;v250;) {
    var dataBlock = dataBlocks[j$$23];
    var codewordBytes$$1 = dataBlock.Codewords;
    var numDataCodewords$$3 = dataBlock.NumDataCodewords;
    JAM.call(Decoder.correctErrors, Decoder, [codewordBytes$$1, numDataCodewords$$3], JAM.policy.p27);
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
    v250 = j$$23 < dataBlocks.length;
  }
  var reader = JAM.new(QRCodeDataBlockReader, [resultBytes, version$$7.VersionNumber, ecLevel$$2.Bits], JAM.policy.p26);
  return reader;
}
function v142(codewordBytes, numDataCodewords$$2) {
  var numCodewords$$1 = codewordBytes.length;
  var codewordsInts = new Array(numCodewords$$1);
  var i$$43 = 0;
  var v254 = i$$43 < numCodewords$$1;
  for (;v254;) {
    codewordsInts[i$$43] = codewordBytes[i$$43] & 255;
    i$$43++;
    v254 = i$$43 < numCodewords$$1;
  }
  var numECCodewords = codewordBytes.length - numDataCodewords$$2;
  try {
    var v256 = Decoder.rsDecoder;
    JAM.call(v256.decode, v256, [codewordsInts, numECCodewords], JAM.policy.p27);
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
  if (!v1136) {
    v1136 = reference > 7;
  }
  if (v1136) {
    throw "System.ArgumentException";
  }
  return DataMask.DATA_MASKS[reference];
}
function v139(rawCodewords, version$$5, ecLevel$$1) {
  if (rawCodewords.length != version$$5.TotalCodewords) {
    throw "ArgumentException";
  }
  var ecBlocks = JAM.call(version$$5.getECBlocksForLevel, version$$5, [ecLevel$$1], JAM.policy.p21);
  var totalBlocks = 0;
  var ecBlockArray = ecBlocks.ecBlocks;
  var i$$11 = 0;
  var v261 = i$$11 < ecBlockArray.length;
  for (;v261;) {
    totalBlocks = totalBlocks + ecBlockArray[i$$11].Count;
    i$$11++;
    v261 = i$$11 < ecBlockArray.length;
  }
  var result$$1 = new Array(totalBlocks);
  var numResultBlocks = 0;
  var j = 0;
  var v265 = j < ecBlockArray.length;
  for (;v265;) {
    var ecBlock$$1 = ecBlockArray[j];
    i$$11 = 0;
    var v264 = i$$11 < ecBlock$$1.Count;
    for (;v264;) {
      var numDataCodewords$$1 = ecBlock$$1.DataCodewords;
      var numBlockCodewords = ecBlocks.ECCodewordsPerBlock + numDataCodewords$$1;
      var v263 = numResultBlocks;
      numResultBlocks = numResultBlocks + 1;
      var v2801 = JAM.new(DataBlock, [numDataCodewords$$1, new Array(numBlockCodewords)], JAM.policy.p26);
      result$$1[v263] = v2801;
      i$$11++;
      v264 = i$$11 < ecBlock$$1.Count;
    }
    j++;
    v265 = j < ecBlockArray.length;
  }
  var shorterBlocksTotalCodewords = result$$1[0].codewords.length;
  var longerBlocksStartAt = result$$1.length - 1;
  var v270 = longerBlocksStartAt >= 0;
  for (;v270;) {
    var numCodewords = result$$1[longerBlocksStartAt].codewords.length;
    if (numCodewords == shorterBlocksTotalCodewords) {
      break;
    }
    longerBlocksStartAt--;
    v270 = longerBlocksStartAt >= 0;
  }
  longerBlocksStartAt++;
  var shorterBlocksNumDataCodewords = shorterBlocksTotalCodewords - ecBlocks.ECCodewordsPerBlock;
  var rawCodewordsOffset = 0;
  i$$11 = 0;
  var v274 = i$$11 < shorterBlocksNumDataCodewords;
  for (;v274;) {
    j = 0;
    var v273 = j < numResultBlocks;
    for (;v273;) {
      var v272 = result$$1[j].codewords;
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
    var v275 = result$$1[j].codewords;
    var v1152 = rawCodewordsOffset;
    rawCodewordsOffset = rawCodewordsOffset + 1;
    v275[shorterBlocksNumDataCodewords] = rawCodewords[v1152];
    j++;
    v276 = j < numResultBlocks;
  }
  var max$$4 = result$$1[0].codewords.length;
  i$$11 = shorterBlocksNumDataCodewords;
  var v281 = i$$11 < max$$4;
  for (;v281;) {
    j = 0;
    var v280 = j < numResultBlocks;
    for (;v280;) {
      var v278;
      if (j < longerBlocksStartAt) {
        v278 = i$$11;
      } else {
        v278 = i$$11 + 1;
      }
      var iOffset = v278;
      var v279 = result$$1[j].codewords;
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
  if (!v1157) {
    v1157 = bits$$4 >= FOR_BITS.Length;
  }
  if (v1157) {
    throw "ArgumentException";
  }
  return FOR_BITS[bits$$4];
}
function v137(maskedFormatInfo$$1) {
  var bestDifference$$1 = 4294967295;
  var bestFormatInfo = 0;
  var i$$8 = 0;
  var v286 = i$$8 < FORMAT_INFO_DECODE_LOOKUP.length;
  for (;v286;) {
    var decodeInfo = FORMAT_INFO_DECODE_LOOKUP[i$$8];
    var targetInfo = decodeInfo[0];
    if (targetInfo == maskedFormatInfo$$1) {
      return new FormatInformation(decodeInfo[1]);
    }
    var bitsDifference$$1 = JAM.call(this.numBitsDiffering, this, [maskedFormatInfo$$1, targetInfo], JAM.policy.p27);
    if (bitsDifference$$1 < bestDifference$$1) {
      bestFormatInfo = decodeInfo[1];
      bestDifference$$1 = bitsDifference$$1;
    }
    i$$8++;
    v286 = i$$8 < FORMAT_INFO_DECODE_LOOKUP.length;
  }
  if (bestDifference$$1 <= 3) {
    return new FormatInformation(bestFormatInfo);
  }
  return null;
}
function v136(maskedFormatInfo) {
  var formatInfo$$1 = JAM.call(FormatInformation.doDecodeFormatInformation, FormatInformation, [maskedFormatInfo], JAM.policy.p21);
  if (formatInfo$$1 != null) {
    return formatInfo$$1;
  }
  return JAM.call(FormatInformation.doDecodeFormatInformation, FormatInformation, [maskedFormatInfo ^ FORMAT_INFO_MASK_QR], JAM.policy.p21);
}
function v135(a, b$$1) {
  a = a ^ b$$1;
  return BITS_SET_IN_HALF_BYTE[a & 15] + BITS_SET_IN_HALF_BYTE[URShift(a, 4) & 15] + BITS_SET_IN_HALF_BYTE[URShift(a, 8) & 15] + BITS_SET_IN_HALF_BYTE[URShift(a, 12) & 15] + BITS_SET_IN_HALF_BYTE[URShift(a, 16) & 15] + BITS_SET_IN_HALF_BYTE[URShift(a, 20) & 15] + BITS_SET_IN_HALF_BYTE[URShift(a, 24) & 15] + BITS_SET_IN_HALF_BYTE[URShift(a, 28) & 15];
}
function v134(x0$$4, y0$$4, x1$$5, y1$$5, x2$$3, y2$$3, x3$$2, y3$$2) {
  return JAM.call(this.squareToQuadrilateral, this, [x0$$4, y0$$4, x1$$5, y1$$5, x2$$3, y2$$3, x3$$2, y3$$2], JAM.policy.p27).buildAdjoint();
}
function v133(x0$$3, y0$$3, x1$$4, y1$$4, x2$$2, y2$$2, x3$$1, y3$$1) {
  dy2 = y3$$1 - y2$$2;
  dy3 = y0$$3 - y1$$4 + y2$$2 - y3$$1;
  var v1165 = dy2 == 0;
  if (v1165) {
    v1165 = dy3 == 0;
  }
  if (v1165) {
    return JAM.new(PerspectiveTransform, [x1$$4 - x0$$3, x2$$2 - x1$$4, x0$$3, y1$$4 - y0$$3, y2$$2 - y1$$4, y0$$3, 0, 0, 1], JAM.policy.p26);
  } else {
    dx1 = x1$$4 - x2$$2;
    dx2 = x3$$1 - x2$$2;
    dx3 = x0$$3 - x1$$4 + x2$$2 - x3$$1;
    dy1 = y1$$4 - y2$$2;
    denominator = dx1 * dy2 - dx2 * dy1;
    a13 = (dx3 * dy2 - dx2 * dy3) / denominator;
    a23 = (dx1 * dy3 - dx3 * dy1) / denominator;
    return JAM.new(PerspectiveTransform, [x1$$4 - x0$$3 + a13 * x1$$4, x3$$1 - x0$$3 + a23 * x3$$1, x0$$3, y1$$4 - y0$$3 + a13 * y1$$4, y3$$1 - y0$$3 + a23 * y3$$1, y0$$3, a13, a23, 1], JAM.policy.p26);
  }
  return;
}
function v132(x0$$2, y0$$2, x1$$3, y1$$3, x2$$1, y2$$1, x3, y3, x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p) {
  var qToS = JAM.call(this.quadrilateralToSquare, this, [x0$$2, y0$$2, x1$$3, y1$$3, x2$$1, y2$$1, x3, y3], JAM.policy.p27);
  var sToQ = JAM.call(this.squareToQuadrilateral, this, [x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p], JAM.policy.p27);
  return JAM.call(sToQ.times, sToQ, [qToS], JAM.policy.p21);
}
function v131(versionBits) {
  var bestDifference = 4294967295;
  var bestVersion = 0;
  var i$$4 = 0;
  var v312 = i$$4 < Version.VERSION_DECODE_INFO.length;
  for (;v312;) {
    var targetVersion = Version.VERSION_DECODE_INFO[i$$4];
    if (targetVersion == versionBits) {
      return JAM.call(this.getVersionForNumber, this, [i$$4 + 7], JAM.policy.p21);
    }
    var bitsDifference = JAM.call(FormatInformation.numBitsDiffering, FormatInformation, [versionBits, targetVersion], JAM.policy.p27);
    if (bitsDifference < bestDifference) {
      bestVersion = i$$4 + 7;
      bestDifference = bitsDifference;
    }
    i$$4++;
    v312 = i$$4 < Version.VERSION_DECODE_INFO.length;
  }
  if (bestDifference <= 3) {
    return JAM.call(this.getVersionForNumber, this, [bestVersion], JAM.policy.p21);
  }
  return null;
}
function v130(dimension$$3) {
  if (dimension$$3 % 4 != 1) {
    throw "Error getProvisionalVersionForDimension";
  }
  try {
    return JAM.call(Version.getVersionForNumber, Version, [dimension$$3 - 17 >> 2], JAM.policy.p21);
  } catch (iae) {
    throw "Error getVersionForNumber";
  }
  return;
}
function v129(versionNumber$$1) {
  var v1183 = versionNumber$$1 < 1;
  if (!v1183) {
    v1183 = versionNumber$$1 > 40;
  }
  if (v1183) {
    throw "ArgumentException";
  }
  return Version.VERSIONS[versionNumber$$1 - 1];
}
function v128(image$$4, dimension$$1, p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY) {
  var transform$$1 = JAM.call(PerspectiveTransform.quadrilateralToQuadrilateral, PerspectiveTransform, [p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY], JAM.policy.p27);
  return JAM.call(GridSampler.sampleGrid3, GridSampler, [image$$4, dimension$$1, transform$$1], JAM.policy.p27);
}
function v127(image$$3, dimension, transform) {
  var bits = new BitMatrix(dimension);
  var points$$1 = new Array(dimension << 1);
  var y$$31 = 0;
  var v335 = y$$31 < dimension;
  for (;v335;) {
    var max = points$$1.length;
    var iValue = y$$31 + .5;
    var x$$48 = 0;
    var v322 = x$$48 < max;
    for (;v322;) {
      points$$1[x$$48] = (x$$48 >> 1) + .5;
      points$$1[x$$48 + 1] = iValue;
      x$$48 = x$$48 + 2;
      v322 = x$$48 < max;
    }
    JAM.call(transform.transformPoints1, transform, [points$$1], JAM.policy.p21);
    JAM.call(GridSampler.checkAndNudgePoints, GridSampler, [image$$3, points$$1], JAM.policy.p27);
    try {
      x$$48 = 0;
      var v334 = x$$48 < max;
      for (;v334;) {
        var xpoint = JAM.call(Math.floor, Math, [points$$1[x$$48]], JAM.policy.p21) * 4 + JAM.call(Math.floor, Math, [points$$1[x$$48 + 1]], JAM.policy.p21) * qrcode.width * 4;
        var bit = image$$3[JAM.call(Math.floor, Math, [points$$1[x$$48]], JAM.policy.p21) + qrcode.width * JAM.call(Math.floor, Math, [points$$1[x$$48 + 1]], JAM.policy.p21)];
        var v326 = qrcode.imagedata.data;
        var v1189;
        if (bit) {
          v1189 = 255;
        } else {
          v1189 = 0;
        }
        v326[xpoint] = v1189;
        var v327 = qrcode.imagedata.data;
        var v328 = xpoint + 1;
        var v1191;
        if (bit) {
          v1191 = 255;
        } else {
          v1191 = 0;
        }
        v327[v328] = v1191;
        qrcode.imagedata.data[xpoint + 2] = 0;
        qrcode.imagedata.data[xpoint + 3] = 255;
        if (bit) {
          JAM.call(bits.set_Renamed, bits, [x$$48 >> 1, y$$31], JAM.policy.p23);
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
  var v1194 = offset$$8 < points.Length;
  if (v1194) {
    v1194 = nudged;
  }
  var v345 = v1194;
  for (;v345;) {
    var x$$47 = JAM.call(Math.floor, Math, [points[offset$$8]], JAM.policy.p21);
    var y$$30 = JAM.call(Math.floor, Math, [points[offset$$8 + 1]], JAM.policy.p21);
    var v2483 = x$$47 < -1;
    if (!v2483) {
      v2483 = x$$47 > width$$9;
    }
    var v1856 = v2483;
    if (!v1856) {
      v1856 = y$$30 < -1;
    }
    var v1196 = v1856;
    if (!v1196) {
      v1196 = y$$30 > height$$8;
    }
    if (v1196) {
      throw "Error.checkAndNudgePoints ";
    }
    nudged = false;
    if (x$$47 == -1) {
      points[offset$$8] = 0;
      nudged = true;
    } else {
      if (x$$47 == width$$9) {
        points[offset$$8] = width$$9 - 1;
        nudged = true;
      }
    }
    if (y$$30 == -1) {
      points[offset$$8 + 1] = 0;
      nudged = true;
    } else {
      if (y$$30 == height$$8) {
        points[offset$$8 + 1] = height$$8 - 1;
        nudged = true;
      }
    }
    offset$$8 = offset$$8 + 2;
    var v1197 = offset$$8 < points.Length;
    if (v1197) {
      v1197 = nudged;
    }
    v345 = v1197;
  }
  nudged = true;
  offset$$8 = points.Length - 2;
  var v1198 = offset$$8 >= 0;
  if (v1198) {
    v1198 = nudged;
  }
  var v356 = v1198;
  for (;v356;) {
    x$$47 = JAM.call(Math.floor, Math, [points[offset$$8]], JAM.policy.p21);
    y$$30 = JAM.call(Math.floor, Math, [points[offset$$8 + 1]], JAM.policy.p21);
    var v2485 = x$$47 < -1;
    if (!v2485) {
      v2485 = x$$47 > width$$9;
    }
    var v1859 = v2485;
    if (!v1859) {
      v1859 = y$$30 < -1;
    }
    var v1200 = v1859;
    if (!v1200) {
      v1200 = y$$30 > height$$8;
    }
    if (v1200) {
      throw "Error.checkAndNudgePoints ";
    }
    nudged = false;
    if (x$$47 == -1) {
      points[offset$$8] = 0;
      nudged = true;
    } else {
      if (x$$47 == width$$9) {
        points[offset$$8] = width$$9 - 1;
        nudged = true;
      }
    }
    if (y$$30 == -1) {
      points[offset$$8 + 1] = 0;
      nudged = true;
    } else {
      if (y$$30 == height$$8) {
        points[offset$$8 + 1] = height$$8 - 1;
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
    var v357 = i$$1 < this.ecBlocks.length;
    for (;v357;) {
      total = total + this.ecBlocks[i$$1].length;
      i$$1++;
      v357 = i$$1 < this.ecBlocks.length;
    }
    return total;
  }
  function v3() {
    return this.ecCodewordsPerBlock * this.NumBlocks;
  }
  function v2() {
    return this.ecCodewordsPerBlock;
  }
  this.ecCodewordsPerBlock = ecCodewordsPerBlock;
  if (ecBlocks2) {
    var v2802 = JAM.new(Array, [ecBlocks1, ecBlocks2], JAM.policy.p26);
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
    return this.ecBlocks[ecLevel.ordinal_Renamed_Field];
  }
  function v10() {
    var dimension$$2 = this.DimensionForVersion;
    var bitMatrix = new BitMatrix(dimension$$2);
    JAM.call(bitMatrix.setRegion, bitMatrix, [0, 0, 9, 9], JAM.policy.p20);
    JAM.call(bitMatrix.setRegion, bitMatrix, [dimension$$2 - 8, 0, 8, 9], JAM.policy.p23);
    JAM.call(bitMatrix.setRegion, bitMatrix, [0, dimension$$2 - 8, 9, 8], JAM.policy.p20);
    var max$$1 = this.alignmentPatternCenters.length;
    var x$$49 = 0;
    var v369 = x$$49 < max$$1;
    for (;v369;) {
      var i$$3 = this.alignmentPatternCenters[x$$49] - 2;
      var y$$32 = 0;
      var v368 = y$$32 < max$$1;
      for (;v368;) {
        var v1864 = x$$49 == 0;
        if (v1864) {
          var v2488 = y$$32 == 0;
          if (!v2488) {
            v2488 = y$$32 == max$$1 - 1;
          }
          v1864 = v2488;
        }
        var v1206 = v1864;
        if (!v1206) {
          var v1865 = x$$49 == max$$1 - 1;
          if (v1865) {
            v1865 = y$$32 == 0;
          }
          v1206 = v1865;
        }
        if (v1206) {
          y$$32++;
          v368 = y$$32 < max$$1;
          continue;
        }
        JAM.call(bitMatrix.setRegion, bitMatrix, [this.alignmentPatternCenters[y$$32] - 2, i$$3, 5, 5], JAM.policy.p23);
        y$$32++;
        v368 = y$$32 < max$$1;
      }
      x$$49++;
      v369 = x$$49 < max$$1;
    }
    JAM.call(bitMatrix.setRegion, bitMatrix, [6, 9, 1, dimension$$2 - 17], JAM.policy.p20);
    JAM.call(bitMatrix.setRegion, bitMatrix, [9, 6, dimension$$2 - 17, 1], JAM.policy.p20);
    if (this.versionNumber > 6) {
      JAM.call(bitMatrix.setRegion, bitMatrix, [dimension$$2 - 11, 0, 3, 6], JAM.policy.p23);
      JAM.call(bitMatrix.setRegion, bitMatrix, [0, dimension$$2 - 11, 6, 3], JAM.policy.p20);
    }
    return bitMatrix;
  }
  function v9() {
    return 17 + 4 * this.versionNumber;
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
  var v2804 = JAM.new(Array, [ecBlocks1$$1, ecBlocks2$$1, ecBlocks3, ecBlocks4], JAM.policy.p26);
  this.ecBlocks = v2804;
  var total$$1 = 0;
  var ecCodewords = ecBlocks1$$1.ECCodewordsPerBlock;
  var ecbArray = ecBlocks1$$1.ecBlocks;
  var i$$2 = 0;
  var v376 = i$$2 < ecbArray.length;
  for (;v376;) {
    var ecBlock = ecbArray[i$$2];
    total$$1 = total$$1 + ecBlock.Count * (ecBlock.DataCodewords + ecCodewords);
    i$$2++;
    v376 = i$$2 < ecbArray.length;
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
  return JAM.new(Array, [new Version(1, new Array, new ECBlocks(7, new ECB(1, 19)), new ECBlocks(10, new ECB(1, 16)), new ECBlocks(13, new ECB(1, 13)), new ECBlocks(17, new ECB(1, 9))), new Version(2, new Array(6, 18), new ECBlocks(10, new ECB(1, 34)), new ECBlocks(16, new ECB(1, 28)), new ECBlocks(22, new ECB(1, 22)), new ECBlocks(28, new ECB(1, 16))), new Version(3, new Array(6, 22), new ECBlocks(15, new ECB(1, 55)), new ECBlocks(26, new ECB(1, 44)), new ECBlocks(18, new ECB(2, 17)), new ECBlocks(22, 
  new ECB(2, 13))), new Version(4, new Array(6, 26), new ECBlocks(20, new ECB(1, 80)), new ECBlocks(18, new ECB(2, 32)), new ECBlocks(26, new ECB(2, 24)), new ECBlocks(16, new ECB(4, 9))), new Version(5, new Array(6, 30), new ECBlocks(26, new ECB(1, 108)), new ECBlocks(24, new ECB(2, 43)), new ECBlocks(18, new ECB(2, 15), new ECB(2, 16)), new ECBlocks(22, new ECB(2, 11), new ECB(2, 12))), new Version(6, new Array(6, 34), new ECBlocks(18, new ECB(2, 68)), new ECBlocks(16, new ECB(4, 27)), new ECBlocks(24, 
  new ECB(4, 19)), new ECBlocks(28, new ECB(4, 15))), new Version(7, new Array(6, 22, 38), new ECBlocks(20, new ECB(2, 78)), new ECBlocks(18, new ECB(4, 31)), new ECBlocks(18, new ECB(2, 14), new ECB(4, 15)), new ECBlocks(26, new ECB(4, 13), new ECB(1, 14))), new Version(8, new Array(6, 24, 42), new ECBlocks(24, new ECB(2, 97)), new ECBlocks(22, new ECB(2, 38), new ECB(2, 39)), new ECBlocks(22, new ECB(4, 18), new ECB(2, 19)), new ECBlocks(26, new ECB(4, 14), new ECB(2, 15))), new Version(9, new Array(6, 
  26, 46), new ECBlocks(30, new ECB(2, 116)), new ECBlocks(22, new ECB(3, 36), new ECB(2, 37)), new ECBlocks(20, new ECB(4, 16), new ECB(4, 17)), new ECBlocks(24, new ECB(4, 12), new ECB(4, 13))), new Version(10, new Array(6, 28, 50), new ECBlocks(18, new ECB(2, 68), new ECB(2, 69)), new ECBlocks(26, new ECB(4, 43), new ECB(1, 44)), new ECBlocks(24, new ECB(6, 19), new ECB(2, 20)), new ECBlocks(28, new ECB(6, 15), new ECB(2, 16))), new Version(11, new Array(6, 30, 54), new ECBlocks(20, new ECB(4, 
  81)), new ECBlocks(30, new ECB(1, 50), new ECB(4, 51)), new ECBlocks(28, new ECB(4, 22), new ECB(4, 23)), new ECBlocks(24, new ECB(3, 12), new ECB(8, 13))), new Version(12, new Array(6, 32, 58), new ECBlocks(24, new ECB(2, 92), new ECB(2, 93)), new ECBlocks(22, new ECB(6, 36), new ECB(2, 37)), new ECBlocks(26, new ECB(4, 20), new ECB(6, 21)), new ECBlocks(28, new ECB(7, 14), new ECB(4, 15))), new Version(13, new Array(6, 34, 62), new ECBlocks(26, new ECB(4, 107)), new ECBlocks(22, new ECB(8, 37), 
  new ECB(1, 38)), new ECBlocks(24, new ECB(8, 20), new ECB(4, 21)), new ECBlocks(22, new ECB(12, 11), new ECB(4, 12))), new Version(14, new Array(6, 26, 46, 66), new ECBlocks(30, new ECB(3, 115), new ECB(1, 116)), new ECBlocks(24, new ECB(4, 40), new ECB(5, 41)), new ECBlocks(20, new ECB(11, 16), new ECB(5, 17)), new ECBlocks(24, new ECB(11, 12), new ECB(5, 13))), new Version(15, new Array(6, 26, 48, 70), new ECBlocks(22, new ECB(5, 87), new ECB(1, 88)), new ECBlocks(24, new ECB(5, 41), new ECB(5, 
  42)), new ECBlocks(30, new ECB(5, 24), new ECB(7, 25)), new ECBlocks(24, new ECB(11, 12), new ECB(7, 13))), new Version(16, new Array(6, 26, 50, 74), new ECBlocks(24, new ECB(5, 98), new ECB(1, 99)), new ECBlocks(28, new ECB(7, 45), new ECB(3, 46)), new ECBlocks(24, new ECB(15, 19), new ECB(2, 20)), new ECBlocks(30, new ECB(3, 15), new ECB(13, 16))), new Version(17, new Array(6, 30, 54, 78), new ECBlocks(28, new ECB(1, 107), new ECB(5, 108)), new ECBlocks(28, new ECB(10, 46), new ECB(1, 47)), new ECBlocks(28, 
  new ECB(1, 22), new ECB(15, 23)), new ECBlocks(28, new ECB(2, 14), new ECB(17, 15))), new Version(18, new Array(6, 30, 56, 82), new ECBlocks(30, new ECB(5, 120), new ECB(1, 121)), new ECBlocks(26, new ECB(9, 43), new ECB(4, 44)), new ECBlocks(28, new ECB(17, 22), new ECB(1, 23)), new ECBlocks(28, new ECB(2, 14), new ECB(19, 15))), new Version(19, new Array(6, 30, 58, 86), new ECBlocks(28, new ECB(3, 113), new ECB(4, 114)), new ECBlocks(26, new ECB(3, 44), new ECB(11, 45)), new ECBlocks(26, new ECB(17, 
  21), new ECB(4, 22)), new ECBlocks(26, new ECB(9, 13), new ECB(16, 14))), new Version(20, new Array(6, 34, 62, 90), new ECBlocks(28, new ECB(3, 107), new ECB(5, 108)), new ECBlocks(26, new ECB(3, 41), new ECB(13, 42)), new ECBlocks(30, new ECB(15, 24), new ECB(5, 25)), new ECBlocks(28, new ECB(15, 15), new ECB(10, 16))), new Version(21, new Array(6, 28, 50, 72, 94), new ECBlocks(28, new ECB(4, 116), new ECB(4, 117)), new ECBlocks(26, new ECB(17, 42)), new ECBlocks(28, new ECB(17, 22), new ECB(6, 
  23)), new ECBlocks(30, new ECB(19, 16), new ECB(6, 17))), new Version(22, new Array(6, 26, 50, 74, 98), new ECBlocks(28, new ECB(2, 111), new ECB(7, 112)), new ECBlocks(28, new ECB(17, 46)), new ECBlocks(30, new ECB(7, 24), new ECB(16, 25)), new ECBlocks(24, new ECB(34, 13))), new Version(23, new Array(6, 30, 54, 74, 102), new ECBlocks(30, new ECB(4, 121), new ECB(5, 122)), new ECBlocks(28, new ECB(4, 47), new ECB(14, 48)), new ECBlocks(30, new ECB(11, 24), new ECB(14, 25)), new ECBlocks(30, new ECB(16, 
  15), new ECB(14, 16))), new Version(24, new Array(6, 28, 54, 80, 106), new ECBlocks(30, new ECB(6, 117), new ECB(4, 118)), new ECBlocks(28, new ECB(6, 45), new ECB(14, 46)), new ECBlocks(30, new ECB(11, 24), new ECB(16, 25)), new ECBlocks(30, new ECB(30, 16), new ECB(2, 17))), new Version(25, new Array(6, 32, 58, 84, 110), new ECBlocks(26, new ECB(8, 106), new ECB(4, 107)), new ECBlocks(28, new ECB(8, 47), new ECB(13, 48)), new ECBlocks(30, new ECB(7, 24), new ECB(22, 25)), new ECBlocks(30, new ECB(22, 
  15), new ECB(13, 16))), new Version(26, new Array(6, 30, 58, 86, 114), new ECBlocks(28, new ECB(10, 114), new ECB(2, 115)), new ECBlocks(28, new ECB(19, 46), new ECB(4, 47)), new ECBlocks(28, new ECB(28, 22), new ECB(6, 23)), new ECBlocks(30, new ECB(33, 16), new ECB(4, 17))), new Version(27, new Array(6, 34, 62, 90, 118), new ECBlocks(30, new ECB(8, 122), new ECB(4, 123)), new ECBlocks(28, new ECB(22, 45), new ECB(3, 46)), new ECBlocks(30, new ECB(8, 23), new ECB(26, 24)), new ECBlocks(30, new ECB(12, 
  15), new ECB(28, 16))), new Version(28, new Array(6, 26, 50, 74, 98, 122), new ECBlocks(30, new ECB(3, 117), new ECB(10, 118)), new ECBlocks(28, new ECB(3, 45), new ECB(23, 46)), new ECBlocks(30, new ECB(4, 24), new ECB(31, 25)), new ECBlocks(30, new ECB(11, 15), new ECB(31, 16))), new Version(29, new Array(6, 30, 54, 78, 102, 126), new ECBlocks(30, new ECB(7, 116), new ECB(7, 117)), new ECBlocks(28, new ECB(21, 45), new ECB(7, 46)), new ECBlocks(30, new ECB(1, 23), new ECB(37, 24)), new ECBlocks(30, 
  new ECB(19, 15), new ECB(26, 16))), new Version(30, new Array(6, 26, 52, 78, 104, 130), new ECBlocks(30, new ECB(5, 115), new ECB(10, 116)), new ECBlocks(28, new ECB(19, 47), new ECB(10, 48)), new ECBlocks(30, new ECB(15, 24), new ECB(25, 25)), new ECBlocks(30, new ECB(23, 15), new ECB(25, 16))), new Version(31, new Array(6, 30, 56, 82, 108, 134), new ECBlocks(30, new ECB(13, 115), new ECB(3, 116)), new ECBlocks(28, new ECB(2, 46), new ECB(29, 47)), new ECBlocks(30, new ECB(42, 24), new ECB(1, 
  25)), new ECBlocks(30, new ECB(23, 15), new ECB(28, 16))), new Version(32, new Array(6, 34, 60, 86, 112, 138), new ECBlocks(30, new ECB(17, 115)), new ECBlocks(28, new ECB(10, 46), new ECB(23, 47)), new ECBlocks(30, new ECB(10, 24), new ECB(35, 25)), new ECBlocks(30, new ECB(19, 15), new ECB(35, 16))), new Version(33, new Array(6, 30, 58, 86, 114, 142), new ECBlocks(30, new ECB(17, 115), new ECB(1, 116)), new ECBlocks(28, new ECB(14, 46), new ECB(21, 47)), new ECBlocks(30, new ECB(29, 24), new ECB(19, 
  25)), new ECBlocks(30, new ECB(11, 15), new ECB(46, 16))), new Version(34, new Array(6, 34, 62, 90, 118, 146), new ECBlocks(30, new ECB(13, 115), new ECB(6, 116)), new ECBlocks(28, new ECB(14, 46), new ECB(23, 47)), new ECBlocks(30, new ECB(44, 24), new ECB(7, 25)), new ECBlocks(30, new ECB(59, 16), new ECB(1, 17))), new Version(35, new Array(6, 30, 54, 78, 102, 126, 150), new ECBlocks(30, new ECB(12, 121), new ECB(7, 122)), new ECBlocks(28, new ECB(12, 47), new ECB(26, 48)), new ECBlocks(30, new ECB(39, 
  24), new ECB(14, 25)), new ECBlocks(30, new ECB(22, 15), new ECB(41, 16))), new Version(36, new Array(6, 24, 50, 76, 102, 128, 154), new ECBlocks(30, new ECB(6, 121), new ECB(14, 122)), new ECBlocks(28, new ECB(6, 47), new ECB(34, 48)), new ECBlocks(30, new ECB(46, 24), new ECB(10, 25)), new ECBlocks(30, new ECB(2, 15), new ECB(64, 16))), new Version(37, new Array(6, 28, 54, 80, 106, 132, 158), new ECBlocks(30, new ECB(17, 122), new ECB(4, 123)), new ECBlocks(28, new ECB(29, 46), new ECB(14, 47)), 
  new ECBlocks(30, new ECB(49, 24), new ECB(10, 25)), new ECBlocks(30, new ECB(24, 15), new ECB(46, 16))), new Version(38, new Array(6, 32, 58, 84, 110, 136, 162), new ECBlocks(30, new ECB(4, 122), new ECB(18, 123)), new ECBlocks(28, new ECB(13, 46), new ECB(32, 47)), new ECBlocks(30, new ECB(48, 24), new ECB(14, 25)), new ECBlocks(30, new ECB(42, 15), new ECB(32, 16))), new Version(39, new Array(6, 26, 54, 82, 110, 138, 166), new ECBlocks(30, new ECB(20, 117), new ECB(4, 118)), new ECBlocks(28, 
  new ECB(40, 47), new ECB(7, 48)), new ECBlocks(30, new ECB(43, 24), new ECB(22, 25)), new ECBlocks(30, new ECB(10, 15), new ECB(67, 16))), new Version(40, new Array(6, 30, 58, 86, 114, 142, 170), new ECBlocks(30, new ECB(19, 118), new ECB(6, 119)), new ECBlocks(28, new ECB(18, 47), new ECB(31, 48)), new ECBlocks(30, new ECB(34, 24), new ECB(34, 25)), new ECBlocks(30, new ECB(20, 15), new ECB(61, 16)))], JAM.policy.p26);
}
function PerspectiveTransform(a11, a21, a31, a12, a22, a32, a13$$1, a23$$1, a33) {
  function v15(other$$4) {
    return JAM.new(PerspectiveTransform, [this.a11 * other$$4.a11 + this.a21 * other$$4.a12 + this.a31 * other$$4.a13, this.a11 * other$$4.a21 + this.a21 * other$$4.a22 + this.a31 * other$$4.a23, this.a11 * other$$4.a31 + this.a21 * other$$4.a32 + this.a31 * other$$4.a33, this.a12 * other$$4.a11 + this.a22 * other$$4.a12 + this.a32 * other$$4.a13, this.a12 * other$$4.a21 + this.a22 * other$$4.a22 + this.a32 * other$$4.a23, this.a12 * other$$4.a31 + this.a22 * other$$4.a32 + this.a32 * other$$4.a33, 
    this.a13 * other$$4.a11 + this.a23 * other$$4.a12 + this.a33 * other$$4.a13, this.a13 * other$$4.a21 + this.a23 * other$$4.a22 + this.a33 * other$$4.a23, this.a13 * other$$4.a31 + this.a23 * other$$4.a32 + this.a33 * other$$4.a33], JAM.policy.p26);
  }
  function v14() {
    return JAM.new(PerspectiveTransform, [this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21], JAM.policy.p26);
  }
  function v13(xValues, yValues) {
    var n$$1 = xValues.length;
    var i$$6 = 0;
    var v439 = i$$6 < n$$1;
    for (;v439;) {
      var x$$51 = xValues[i$$6];
      var y$$34 = yValues[i$$6];
      var denominator$$2 = this.a13 * x$$51 + this.a23 * y$$34 + this.a33;
      xValues[i$$6] = (this.a11 * x$$51 + this.a21 * y$$34 + this.a31) / denominator$$2;
      yValues[i$$6] = (this.a12 * x$$51 + this.a22 * y$$34 + this.a32) / denominator$$2;
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
      var y$$33 = points$$2[i$$5 + 1];
      var denominator$$1 = a13$$2 * x$$50 + a23$$2 * y$$33 + a33$$1;
      points$$2[i$$5] = (a11$$1 * x$$50 + a21$$1 * y$$33 + a31$$1) / denominator$$1;
      points$$2[i$$5 + 1] = (a12$$1 * x$$50 + a22$$1 * y$$33 + a32$$1) / denominator$$1;
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
    var info$$1 = JAM.call(v445.findFinderPattern, v445, [this.image], JAM.policy.p21);
    return JAM.call(this.processFinderPatternInfo, this, [info$$1], JAM.policy.p21);
  }
  function v25(info) {
    var topLeft$$3 = info.TopLeft;
    var topRight$$3 = info.TopRight;
    var bottomLeft$$3 = info.BottomLeft;
    var moduleSize$$1 = JAM.call(this.calculateModuleSize, this, [topLeft$$3, topRight$$3, bottomLeft$$3], JAM.policy.p27);
    if (moduleSize$$1 < 1) {
      throw "Error";
    }
    var dimension$$7 = JAM.call(this.computeDimension, this, [topLeft$$3, topRight$$3, bottomLeft$$3, moduleSize$$1], JAM.policy.p27);
    var provisionalVersion = JAM.call(Version.getProvisionalVersionForDimension, Version, [dimension$$7], JAM.policy.p21);
    var modulesBetweenFPCenters = provisionalVersion.DimensionForVersion - 7;
    var alignmentPattern$$1 = null;
    if (provisionalVersion.AlignmentPatternCenters.length > 0) {
      var bottomRightX$$1 = topRight$$3.X - topLeft$$3.X + bottomLeft$$3.X;
      var bottomRightY$$1 = topRight$$3.Y - topLeft$$3.Y + bottomLeft$$3.Y;
      var correctionToTopLeft = 1 - 3 / modulesBetweenFPCenters;
      var estAlignmentX$$1 = JAM.call(Math.floor, Math, [topLeft$$3.X + correctionToTopLeft * (bottomRightX$$1 - topLeft$$3.X)], JAM.policy.p21);
      var estAlignmentY$$1 = JAM.call(Math.floor, Math, [topLeft$$3.Y + correctionToTopLeft * (bottomRightY$$1 - topLeft$$3.Y)], JAM.policy.p21);
      var i$$7 = 4;
      var v456 = i$$7 <= 16;
      for (;v456;) {
        alignmentPattern$$1 = JAM.call(this.findAlignmentInRegion, this, [moduleSize$$1, estAlignmentX$$1, estAlignmentY$$1, i$$7], JAM.policy.p27);
        break;
      }
    }
    var transform$$4 = JAM.call(this.createTransform, this, [topLeft$$3, topRight$$3, bottomLeft$$3, alignmentPattern$$1, dimension$$7], JAM.policy.p27);
    var bits$$2 = JAM.call(this.sampleGrid, this, [this.image, transform$$4, dimension$$7], JAM.policy.p27);
    var points$$4;
    if (alignmentPattern$$1 == null) {
      points$$4 = JAM.new(Array, [bottomLeft$$3, topLeft$$3, topRight$$3], JAM.policy.p26);
    } else {
      points$$4 = JAM.new(Array, [bottomLeft$$3, topLeft$$3, topRight$$3, alignmentPattern$$1], JAM.policy.p26);
    }
    return JAM.new(DetectorResult, [bits$$2, points$$4], JAM.policy.p26);
  }
  function v24(image$$6, transform$$3, dimension$$6) {
    var sampler = GridSampler;
    return JAM.call(sampler.sampleGrid3, sampler, [image$$6, dimension$$6, transform$$3], JAM.policy.p27);
  }
  function v23(topLeft$$2, topRight$$2, bottomLeft$$2, alignmentPattern, dimension$$5) {
    var dimMinusThree = dimension$$5 - 3.5;
    var bottomRightX;
    var bottomRightY;
    var sourceBottomRightX;
    var sourceBottomRightY;
    if (alignmentPattern != null) {
      bottomRightX = alignmentPattern.X;
      bottomRightY = alignmentPattern.Y;
      sourceBottomRightX = sourceBottomRightY = dimMinusThree - 3;
    } else {
      bottomRightX = topRight$$2.X - topLeft$$2.X + bottomLeft$$2.X;
      bottomRightY = topRight$$2.Y - topLeft$$2.Y + bottomLeft$$2.Y;
      sourceBottomRightX = sourceBottomRightY = dimMinusThree;
    }
    var transform$$2 = JAM.call(PerspectiveTransform.quadrilateralToQuadrilateral, PerspectiveTransform, [3.5, 3.5, dimMinusThree, 3.5, sourceBottomRightX, sourceBottomRightY, 3.5, dimMinusThree, topLeft$$2.X, topLeft$$2.Y, topRight$$2.X, topRight$$2.Y, bottomRightX, bottomRightY, bottomLeft$$2.X, bottomLeft$$2.Y], JAM.policy.p20);
    return transform$$2;
  }
  function v22(overallEstModuleSize, estAlignmentX, estAlignmentY, allowanceFactor) {
    var allowance = JAM.call(Math.floor, Math, [allowanceFactor * overallEstModuleSize], JAM.policy.p21);
    var alignmentAreaLeftX = JAM.call(Math.max, Math, [0, estAlignmentX - allowance], JAM.policy.p20);
    var alignmentAreaRightX = JAM.call(Math.min, Math, [qrcode.width - 1, estAlignmentX + allowance], JAM.policy.p27);
    if (alignmentAreaRightX - alignmentAreaLeftX < overallEstModuleSize * 3) {
      throw "Error";
    }
    var alignmentAreaTopY = JAM.call(Math.max, Math, [0, estAlignmentY - allowance], JAM.policy.p20);
    var alignmentAreaBottomY = JAM.call(Math.min, Math, [qrcode.height - 1, estAlignmentY + allowance], JAM.policy.p27);
    var alignmentFinder = JAM.new(AlignmentPatternFinder, [this.image, alignmentAreaLeftX, alignmentAreaTopY, alignmentAreaRightX - alignmentAreaLeftX, alignmentAreaBottomY - alignmentAreaTopY, overallEstModuleSize, this.resultPointCallback], JAM.policy.p26);
    return alignmentFinder.find();
  }
  function v21(topLeft$$1, topRight$$1, bottomLeft$$1, moduleSize) {
    var tltrCentersDimension = JAM.call(Math.round, Math, [JAM.call(this.distance, this, [topLeft$$1, topRight$$1], JAM.policy.p27) / moduleSize], JAM.policy.p21);
    var tlblCentersDimension = JAM.call(Math.round, Math, [JAM.call(this.distance, this, [topLeft$$1, bottomLeft$$1], JAM.policy.p27) / moduleSize], JAM.policy.p21);
    var dimension$$4 = (tltrCentersDimension + tlblCentersDimension >> 1) + 7;
    switch(dimension$$4 & 3) {
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
    xDiff = pattern1.X - pattern2.X;
    yDiff = pattern1.Y - pattern2.Y;
    return JAM.call(Math.sqrt, Math, [xDiff * xDiff + yDiff * yDiff], JAM.policy.p21);
  }
  function v19(topLeft, topRight, bottomLeft) {
    return(JAM.call(this.calculateModuleSizeOneWay, this, [topLeft, topRight], JAM.policy.p27) + JAM.call(this.calculateModuleSizeOneWay, this, [topLeft, bottomLeft], JAM.policy.p27)) / 2;
  }
  function v18(pattern$$1, otherPattern) {
    var moduleSizeEst1 = JAM.call(this.sizeOfBlackWhiteBlackRunBothWays, this, [JAM.call(Math.floor, Math, [pattern$$1.X], JAM.policy.p21), JAM.call(Math.floor, Math, [pattern$$1.Y], JAM.policy.p21), JAM.call(Math.floor, Math, [otherPattern.X], JAM.policy.p21), JAM.call(Math.floor, Math, [otherPattern.Y], JAM.policy.p21)], JAM.policy.p27);
    var moduleSizeEst2 = JAM.call(this.sizeOfBlackWhiteBlackRunBothWays, this, [JAM.call(Math.floor, Math, [otherPattern.X], JAM.policy.p21), JAM.call(Math.floor, Math, [otherPattern.Y], JAM.policy.p21), JAM.call(Math.floor, Math, [pattern$$1.X], JAM.policy.p21), JAM.call(Math.floor, Math, [pattern$$1.Y], JAM.policy.p21)], JAM.policy.p27);
    if (isNaN(moduleSizeEst1)) {
      return moduleSizeEst2 / 7;
    }
    if (isNaN(moduleSizeEst2)) {
      return moduleSizeEst1 / 7;
    }
    return(moduleSizeEst1 + moduleSizeEst2) / 14;
  }
  function v17(fromX$$1, fromY$$1, toX$$1, toY$$1) {
    var result = JAM.call(this.sizeOfBlackWhiteBlackRun, this, [fromX$$1, fromY$$1, toX$$1, toY$$1], JAM.policy.p27);
    var scale = 1;
    var otherToX = fromX$$1 - (toX$$1 - fromX$$1);
    if (otherToX < 0) {
      scale = fromX$$1 / (fromX$$1 - otherToX);
      otherToX = 0;
    } else {
      if (otherToX >= qrcode.width) {
        scale = (qrcode.width - 1 - fromX$$1) / (otherToX - fromX$$1);
        otherToX = qrcode.width - 1;
      }
    }
    var otherToY = JAM.call(Math.floor, Math, [fromY$$1 - (toY$$1 - fromY$$1) * scale], JAM.policy.p21);
    scale = 1;
    if (otherToY < 0) {
      scale = fromY$$1 / (fromY$$1 - otherToY);
      otherToY = 0;
    } else {
      if (otherToY >= qrcode.height) {
        scale = (qrcode.height - 1 - fromY$$1) / (otherToY - fromY$$1);
        otherToY = qrcode.height - 1;
      }
    }
    otherToX = JAM.call(Math.floor, Math, [fromX$$1 + (otherToX - fromX$$1) * scale], JAM.policy.p21);
    result = result + JAM.call(this.sizeOfBlackWhiteBlackRun, this, [fromX$$1, fromY$$1, otherToX, otherToY], JAM.policy.p27);
    return result - 1;
  }
  function v16(fromX, fromY, toX, toY) {
    var steep = JAM.call(Math.abs, Math, [toY - fromY], JAM.policy.p21) > JAM.call(Math.abs, Math, [toX - fromX], JAM.policy.p21);
    if (steep) {
      var temp = fromX;
      fromX = fromY;
      fromY = temp;
      temp = toX;
      toX = toY;
      toY = temp;
    }
    var dx$$4 = JAM.call(Math.abs, Math, [toX - fromX], JAM.policy.p21);
    var dy$$4 = JAM.call(Math.abs, Math, [toY - fromY], JAM.policy.p21);
    var error$$1 = -dx$$4 >> 1;
    var v524;
    if (fromY < toY) {
      v524 = 1;
    } else {
      v524 = -1;
    }
    var ystep = v524;
    var v525;
    if (fromX < toX) {
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
      if (state == 1) {
        if (this.image[realX + realY * qrcode.width]) {
          state++;
        }
      } else {
        if (!this.image[realX + realY * qrcode.width]) {
          state++;
        }
      }
      if (state == 3) {
        var diffX = x$$52 - fromX;
        var diffY = y$$35 - fromY;
        return JAM.call(Math.sqrt, Math, [diffX * diffX + diffY * diffY], JAM.policy.p21);
      }
      error$$1 = error$$1 + dy$$4;
      if (error$$1 > 0) {
        if (y$$35 == toY) {
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
    return JAM.call(Math.sqrt, Math, [diffX2 * diffX2 + diffY2 * diffY2], JAM.policy.p21);
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
    var v537 = this.errorCorrectionLevel == other$$5.errorCorrectionLevel;
    if (v537) {
      v537 = this.dataMask == other$$5.dataMask;
    }
    return v537;
  }
  function v29() {
    return this.errorCorrectionLevel.ordinal_Renamed_Field << 3 | dataMask;
  }
  function v28() {
    return this.dataMask;
  }
  function v27() {
    return this.errorCorrectionLevel;
  }
  var v2805 = JAM.call(ErrorCorrectionLevel.forBits, ErrorCorrectionLevel, [formatInfo >> 3 & 3], JAM.policy.p21);
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
    if (!v1515) {
      v1515 = left$$1 < 0;
    }
    if (v1515) {
      throw "Left and top must be nonnegative";
    }
    var v1516 = height$$10 < 1;
    if (!v1516) {
      v1516 = width$$11 < 1;
    }
    if (v1516) {
      throw "Height and width must be at least 1";
    }
    var right$$1 = left$$1 + width$$11;
    var bottom = top$$1 + height$$10;
    var v1517 = bottom > this.height;
    if (!v1517) {
      v1517 = right$$1 > this.width;
    }
    if (v1517) {
      throw "The region must fit inside the matrix";
    }
    var y$$39 = top$$1;
    var v547 = y$$39 < bottom;
    for (;v547;) {
      var offset$$12 = y$$39 * this.rowSize;
      var x$$56 = left$$1;
      var v546 = x$$56 < right$$1;
      for (;v546;) {
        var v544 = this.bits;
        var v545 = offset$$12 + (x$$56 >> 5);
        v544[v545] = v544[v545] | 1 << (x$$56 & 31);
        x$$56++;
        v546 = x$$56 < right$$1;
      }
      y$$39++;
      v547 = y$$39 < bottom;
    }
    return;
  }
  function v40() {
    var max$$3 = this.bits.length;
    var i$$10 = 0;
    var v550 = i$$10 < max$$3;
    for (;v550;) {
      this.bits[i$$10] = 0;
      i$$10++;
      v550 = i$$10 < max$$3;
    }
    return;
  }
  function v39(x$$55, y$$38) {
    var offset$$11 = y$$38 * this.rowSize + (x$$55 >> 5);
    var v553 = this.bits;
    v553[offset$$11] = v553[offset$$11] ^ 1 << (x$$55 & 31);
    return;
  }
  function v38(x$$54, y$$37) {
    var offset$$10 = y$$37 * this.rowSize + (x$$54 >> 5);
    var v556 = this.bits;
    v556[offset$$10] = v556[offset$$10] | 1 << (x$$54 & 31);
    return;
  }
  function v37(x$$53, y$$36) {
    var offset$$9 = y$$36 * this.rowSize + (x$$53 >> 5);
    return(JAM.call(URShift, null, [this.bits[offset$$9], x$$53 & 31], JAM.policy.p26) & 1) != 0;
  }
  function v36() {
    if (this.width != this.height) {
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
  if (!height$$9) {
    height$$9 = width$$10;
  }
  var v1525 = width$$10 < 1;
  if (!v1525) {
    v1525 = height$$9 < 1;
  }
  if (v1525) {
    throw "Both dimensions must be greater than 0";
  }
  this.width = width$$10;
  this.height = height$$9;
  var rowSize = width$$10 >> 5;
  if ((width$$10 & 31) != 0) {
    rowSize++;
  }
  this.rowSize = rowSize;
  var v2806 = new Array(rowSize * height$$9);
  this.bits = v2806;
  var i$$9 = 0;
  var v566 = i$$9 < this.bits.length;
  for (;v566;) {
    this.bits[i$$9] = 0;
    i$$9++;
    v566 = i$$9 < this.bits.length;
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
    var dataMask$$1 = JAM.call(DataMask.forReference, DataMask, [formatInfo$$2.DataMask], JAM.policy.p21);
    var dimension$$11 = this.bitMatrix.Dimension;
    JAM.call(dataMask$$1.unmaskBitMatrix, dataMask$$1, [this.bitMatrix, dimension$$11], JAM.policy.p27);
    var functionPattern = version$$6.buildFunctionPattern();
    var readingUp = true;
    var result$$2 = new Array(version$$6.TotalCodewords);
    var resultOffset = 0;
    var currentByte = 0;
    var bitsRead = 0;
    var j$$4 = dimension$$11 - 1;
    var v579 = j$$4 > 0;
    for (;v579;) {
      if (j$$4 == 6) {
        j$$4--;
      }
      var count$$4 = 0;
      var v578 = count$$4 < dimension$$11;
      for (;v578;) {
        var v572;
        if (readingUp) {
          v572 = dimension$$11 - 1 - count$$4;
        } else {
          v572 = count$$4;
        }
        var i$$15 = v572;
        var col = 0;
        var v577 = col < 2;
        for (;v577;) {
          if (!JAM.call(functionPattern.get_Renamed, functionPattern, [j$$4 - col, i$$15], JAM.policy.p27)) {
            bitsRead++;
            currentByte = currentByte << 1;
            var v1531 = this.bitMatrix;
            if (JAM.call(v1531.get_Renamed, v1531, [j$$4 - col, i$$15], JAM.policy.p27)) {
              currentByte = currentByte | 1;
            }
            if (bitsRead == 8) {
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
    if (resultOffset != version$$6.TotalCodewords) {
      throw "Error readCodewords";
    }
    return result$$2;
  }
  function v46() {
    if (this.parsedVersion != null) {
      return this.parsedVersion;
    }
    var dimension$$10 = this.bitMatrix.Dimension;
    var provisionalVersion$$1 = dimension$$10 - 17 >> 2;
    if (provisionalVersion$$1 <= 6) {
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
    var v1535 = this.parsedVersion != null;
    if (v1535) {
      v1535 = this.parsedVersion.DimensionForVersion == dimension$$10;
    }
    if (v1535) {
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
    var v1536 = this.parsedVersion != null;
    if (v1536) {
      v1536 = this.parsedVersion.DimensionForVersion == dimension$$10;
    }
    if (v1536) {
      return this.parsedVersion;
    }
    throw "Error readVersion";
  }
  function v45() {
    if (this.parsedFormatInfo != null) {
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
    if (this.parsedFormatInfo != null) {
      return this.parsedFormatInfo;
    }
    var dimension$$9 = this.bitMatrix.Dimension;
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
    if (this.parsedFormatInfo != null) {
      return this.parsedFormatInfo;
    }
    throw "Error readFormatInformation";
  }
  function v44(i$$12, j$$1, versionBits$$1) {
    var v599;
    var v2271 = this.bitMatrix;
    if (JAM.call(v2271.get_Renamed, v2271, [i$$12, j$$1], JAM.policy.p27)) {
      v599 = versionBits$$1 << 1 | 1;
    } else {
      v599 = versionBits$$1 << 1;
    }
    return v599;
  }
  var dimension$$8 = bitMatrix$$1.Dimension;
  var v1542 = dimension$$8 < 21;
  if (!v1542) {
    v1542 = (dimension$$8 & 3) != 1;
  }
  if (v1542) {
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
    return(i$$17 + j$$6 & 1) == 0;
  }
  function v48(bits$$5, dimension$$12) {
    var i$$16 = 0;
    var v604 = i$$16 < dimension$$12;
    for (;v604;) {
      var j$$5 = 0;
      var v603 = j$$5 < dimension$$12;
      for (;v603;) {
        if (JAM.call(this.isMasked, this, [i$$16, j$$5], JAM.policy.p27)) {
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
    return(i$$19 & 1) == 0;
  }
  function v50(bits$$6, dimension$$13) {
    var i$$18 = 0;
    var v608 = i$$18 < dimension$$13;
    for (;v608;) {
      var j$$7 = 0;
      var v607 = j$$7 < dimension$$13;
      for (;v607;) {
        if (JAM.call(this.isMasked, this, [i$$18, j$$7], JAM.policy.p27)) {
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
    return j$$10 % 3 == 0;
  }
  function v52(bits$$7, dimension$$14) {
    var i$$20 = 0;
    var v612 = i$$20 < dimension$$14;
    for (;v612;) {
      var j$$9 = 0;
      var v611 = j$$9 < dimension$$14;
      for (;v611;) {
        if (JAM.call(this.isMasked, this, [i$$20, j$$9], JAM.policy.p27)) {
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
    return(i$$23 + j$$12) % 3 == 0;
  }
  function v54(bits$$8, dimension$$15) {
    var i$$22 = 0;
    var v616 = i$$22 < dimension$$15;
    for (;v616;) {
      var j$$11 = 0;
      var v615 = j$$11 < dimension$$15;
      for (;v615;) {
        if (JAM.call(this.isMasked, this, [i$$22, j$$11], JAM.policy.p27)) {
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
    return(URShift(i$$25, 1) + j$$14 / 3 & 1) == 0;
  }
  function v56(bits$$9, dimension$$16) {
    var i$$24 = 0;
    var v620 = i$$24 < dimension$$16;
    for (;v620;) {
      var j$$13 = 0;
      var v619 = j$$13 < dimension$$16;
      for (;v619;) {
        if (JAM.call(this.isMasked, this, [i$$24, j$$13], JAM.policy.p27)) {
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
    return(temp$$1 & 1) + temp$$1 % 3 == 0;
  }
  function v58(bits$$10, dimension$$17) {
    var i$$26 = 0;
    var v624 = i$$26 < dimension$$17;
    for (;v624;) {
      var j$$15 = 0;
      var v623 = j$$15 < dimension$$17;
      for (;v623;) {
        if (JAM.call(this.isMasked, this, [i$$26, j$$15], JAM.policy.p27)) {
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
    return((temp$$2 & 1) + temp$$2 % 3 & 1) == 0;
  }
  function v60(bits$$11, dimension$$18) {
    var i$$28 = 0;
    var v628 = i$$28 < dimension$$18;
    for (;v628;) {
      var j$$17 = 0;
      var v627 = j$$17 < dimension$$18;
      for (;v627;) {
        if (JAM.call(this.isMasked, this, [i$$28, j$$17], JAM.policy.p27)) {
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
    return((i$$31 + j$$20 & 1) + i$$31 * j$$20 % 3 & 1) == 0;
  }
  function v62(bits$$12, dimension$$19) {
    var i$$30 = 0;
    var v632 = i$$30 < dimension$$19;
    for (;v632;) {
      var j$$19 = 0;
      var v631 = j$$19 < dimension$$19;
      for (;v631;) {
        if (JAM.call(this.isMasked, this, [i$$30, j$$19], JAM.policy.p27)) {
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
      var xiInverse = JAM.call(v633.inverse, v633, [errorLocations$$1[i$$34]], JAM.policy.p21);
      var denominator$$3 = 1;
      var j$$21 = 0;
      var v638 = j$$21 < s$$3;
      for (;v638;) {
        if (i$$34 != j$$21) {
          var v635 = this.field;
          var v2280 = this.field;
          denominator$$3 = JAM.call(v635.multiply, v635, [denominator$$3, JAM.call(GF256.addOrSubtract, GF256, [1, JAM.call(v2280.multiply, v2280, [errorLocations$$1[j$$21], xiInverse], JAM.policy.p27)], JAM.policy.p20)], JAM.policy.p27);
        }
        j$$21++;
        v638 = j$$21 < s$$3;
      }
      var v639 = this.field;
      var v640 = JAM.call(errorEvaluator.evaluateAt, errorEvaluator, [xiInverse], JAM.policy.p21);
      var v1551 = this.field;
      var v2811 = JAM.call(v639.multiply, v639, [v640, JAM.call(v1551.inverse, v1551, [denominator$$3], JAM.policy.p21)], JAM.policy.p27);
      result$$4[i$$34] = v2811;
      if (dataMatrix$$1) {
        var v642 = this.field;
        var v2812 = JAM.call(v642.multiply, v642, [result$$4[i$$34], xiInverse], JAM.policy.p27);
        result$$4[i$$34] = v2812;
      }
      i$$34++;
      v644 = i$$34 < s$$3;
    }
    return result$$4;
  }
  function v66(errorLocator) {
    var numErrors = errorLocator.Degree;
    if (numErrors == 1) {
      return new Array(JAM.call(errorLocator.getCoefficient, errorLocator, [1], JAM.policy.p16));
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
      if (JAM.call(errorLocator.evaluateAt, errorLocator, [i$$33], JAM.policy.p21) == 0) {
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
    if (e$$4 != numErrors) {
      throw "Error locator degree does not match number of roots";
    }
    return result$$3;
  }
  function v65(a$$1, b$$2, R) {
    if (a$$1.Degree < b$$2.Degree) {
      var temp$$3 = a$$1;
      a$$1 = b$$2;
      b$$2 = temp$$3;
    }
    var rLast = a$$1;
    var r$$1 = b$$2;
    var sLast = this.field.One;
    var s$$2 = this.field.Zero;
    var tLast = this.field.Zero;
    var t = this.field.One;
    var v669 = r$$1.Degree >= JAM.call(Math.floor, Math, [R / 2], JAM.policy.p21);
    for (;v669;) {
      var rLastLast = rLast;
      var sLastLast = sLast;
      var tLastLast = tLast;
      rLast = r$$1;
      sLast = s$$2;
      tLast = t;
      if (rLast.Zero) {
        throw "r_{i-1} was zero";
      }
      r$$1 = rLastLast;
      var q = this.field.Zero;
      var denominatorLeadingTerm = JAM.call(rLast.getCoefficient, rLast, [rLast.Degree], JAM.policy.p21);
      var v659 = this.field;
      var dltInverse = JAM.call(v659.inverse, v659, [denominatorLeadingTerm], JAM.policy.p21);
      var v1559 = r$$1.Degree >= rLast.Degree;
      if (v1559) {
        v1559 = !r$$1.Zero;
      }
      var v666 = v1559;
      for (;v666;) {
        var degreeDiff = r$$1.Degree - rLast.Degree;
        var v662 = this.field;
        var scale$$1 = JAM.call(v662.multiply, v662, [JAM.call(r$$1.getCoefficient, r$$1, [r$$1.Degree], JAM.policy.p21), dltInverse], JAM.policy.p27);
        var v1561 = this.field;
        q = JAM.call(q.addOrSubtract, q, [JAM.call(v1561.buildMonomial, v1561, [degreeDiff, scale$$1], JAM.policy.p27)], JAM.policy.p21);
        r$$1 = JAM.call(r$$1.addOrSubtract, r$$1, [JAM.call(rLast.multiplyByMonomial, rLast, [degreeDiff, scale$$1], JAM.policy.p27)], JAM.policy.p21);
        var v1562 = r$$1.Degree >= rLast.Degree;
        if (v1562) {
          v1562 = !r$$1.Zero;
        }
        v666 = v1562;
      }
      var v667 = JAM.call(q.multiply1, q, [sLast], JAM.policy.p21);
      s$$2 = JAM.call(v667.addOrSubtract, v667, [sLastLast], JAM.policy.p21);
      var v668 = JAM.call(q.multiply1, q, [tLast], JAM.policy.p21);
      t = JAM.call(v668.addOrSubtract, v668, [tLastLast], JAM.policy.p21);
      v669 = r$$1.Degree >= JAM.call(Math.floor, Math, [R / 2], JAM.policy.p21);
    }
    var sigmaTildeAtZero = JAM.call(t.getCoefficient, t, [0], JAM.policy.p16);
    if (sigmaTildeAtZero == 0) {
      throw "ReedSolomonException sigmaTilde(0) was zero";
    }
    var v671 = this.field;
    var inverse = JAM.call(v671.inverse, v671, [sigmaTildeAtZero], JAM.policy.p21);
    var sigma$$1 = JAM.call(t.multiply2, t, [inverse], JAM.policy.p21);
    var omega$$1 = JAM.call(r$$1.multiply2, r$$1, [inverse], JAM.policy.p21);
    return JAM.new(Array, [sigma$$1, omega$$1], JAM.policy.p26);
  }
  function v64(received, twoS) {
    var poly = JAM.new(GF256Poly, [this.field, received], JAM.policy.p26);
    var syndromeCoefficients = new Array(twoS);
    var i$$32 = 0;
    var v673 = i$$32 < syndromeCoefficients.length;
    for (;v673;) {
      syndromeCoefficients[i$$32] = 0;
      i$$32++;
      v673 = i$$32 < syndromeCoefficients.length;
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
      var eval$$1 = JAM.call(poly.evaluateAt, poly, [JAM.call(v1567.exp, v1567, [v2290], JAM.policy.p21)], JAM.policy.p21);
      syndromeCoefficients[syndromeCoefficients.length - 1 - i$$32] = eval$$1;
      if (eval$$1 != 0) {
        noError = false;
      }
      i$$32++;
      v677 = i$$32 < twoS;
    }
    if (noError) {
      return;
    }
    var syndrome = JAM.new(GF256Poly, [this.field, syndromeCoefficients], JAM.policy.p26);
    var v1570 = this.field;
    var sigmaOmega = JAM.call(this.runEuclideanAlgorithm, this, [JAM.call(v1570.buildMonomial, v1570, [twoS, 1], JAM.policy.p28), syndrome, twoS], JAM.policy.p27);
    var sigma = sigmaOmega[0];
    var omega = sigmaOmega[1];
    var errorLocations = JAM.call(this.findErrorLocations, this, [sigma], JAM.policy.p21);
    var errorMagnitudes = JAM.call(this.findErrorMagnitudes, this, [omega, errorLocations, dataMatrix], JAM.policy.p27);
    i$$32 = 0;
    var v685 = i$$32 < errorLocations.length;
    for (;v685;) {
      var v680 = received.length - 1;
      var v1573 = this.field;
      var position = v680 - JAM.call(v1573.log, v1573, [errorLocations[i$$32]], JAM.policy.p21);
      if (position < 0) {
        throw "ReedSolomonException Bad error location";
      }
      var v2814 = JAM.call(GF256.addOrSubtract, GF256, [received[position], errorMagnitudes[i$$32]], JAM.policy.p27);
      received[position] = v2814;
      i$$32++;
      v685 = i$$32 < errorLocations.length;
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
    if (this.field != other$$8.field) {
      throw "GF256Polys do not have same GF256 field";
    }
    if (other$$8.Zero) {
      throw "Divide by 0";
    }
    var quotient = this.field.Zero;
    var remainder = this;
    var denominatorLeadingTerm$$1 = JAM.call(other$$8.getCoefficient, other$$8, [other$$8.Degree], JAM.policy.p21);
    var v690 = this.field;
    var inverseDenominatorLeadingTerm = JAM.call(v690.inverse, v690, [denominatorLeadingTerm$$1], JAM.policy.p21);
    var v1578 = remainder.Degree >= other$$8.Degree;
    if (v1578) {
      v1578 = !remainder.Zero;
    }
    var v696 = v1578;
    for (;v696;) {
      var degreeDifference = remainder.Degree - other$$8.Degree;
      var v693 = this.field;
      var scale$$2 = JAM.call(v693.multiply, v693, [JAM.call(remainder.getCoefficient, remainder, [remainder.Degree], JAM.policy.p21), inverseDenominatorLeadingTerm], JAM.policy.p27);
      var term = JAM.call(other$$8.multiplyByMonomial, other$$8, [degreeDifference, scale$$2], JAM.policy.p27);
      var v695 = this.field;
      var iterationQuotient = JAM.call(v695.buildMonomial, v695, [degreeDifference, scale$$2], JAM.policy.p27);
      quotient = JAM.call(quotient.addOrSubtract, quotient, [iterationQuotient], JAM.policy.p21);
      remainder = JAM.call(remainder.addOrSubtract, remainder, [term], JAM.policy.p21);
      var v1580 = remainder.Degree >= other$$8.Degree;
      if (v1580) {
        v1580 = !remainder.Zero;
      }
      v696 = v1580;
    }
    return JAM.new(Array, [quotient, remainder], JAM.policy.p26);
  }
  function v76(degree$$1, coefficient) {
    if (degree$$1 < 0) {
      throw "System.ArgumentException";
    }
    if (coefficient == 0) {
      return this.field.Zero;
    }
    var size$$6 = this.coefficients.length;
    var product$$2 = new Array(size$$6 + degree$$1);
    var i$$40 = 0;
    var v702 = i$$40 < product$$2.length;
    for (;v702;) {
      product$$2[i$$40] = 0;
      i$$40++;
      v702 = i$$40 < product$$2.length;
    }
    i$$40 = 0;
    var v705 = i$$40 < size$$6;
    for (;v705;) {
      var v703 = this.field;
      var v2815 = JAM.call(v703.multiply, v703, [this.coefficients[i$$40], coefficient], JAM.policy.p27);
      product$$2[i$$40] = v2815;
      i$$40++;
      v705 = i$$40 < size$$6;
    }
    return JAM.new(GF256Poly, [this.field, product$$2], JAM.policy.p26);
  }
  function v75(scalar) {
    if (scalar == 0) {
      return this.field.Zero;
    }
    if (scalar == 1) {
      return this;
    }
    var size$$5 = this.coefficients.length;
    var product$$1 = new Array(size$$5);
    var i$$39 = 0;
    var v713 = i$$39 < size$$5;
    for (;v713;) {
      var v711 = this.field;
      var v2816 = JAM.call(v711.multiply, v711, [this.coefficients[i$$39], scalar], JAM.policy.p27);
      product$$1[i$$39] = v2816;
      i$$39++;
      v713 = i$$39 < size$$5;
    }
    return JAM.new(GF256Poly, [this.field, product$$1], JAM.policy.p26);
  }
  function v74(other$$7) {
    if (this.field != other$$7.field) {
      throw "GF256Polys do not have same GF256 field";
    }
    var v1587 = this.Zero;
    if (!v1587) {
      v1587 = other$$7.Zero;
    }
    if (v1587) {
      return this.field.Zero;
    }
    var aCoefficients = this.coefficients;
    var aLength = aCoefficients.length;
    var bCoefficients = other$$7.coefficients;
    var bLength = bCoefficients.length;
    var product = new Array(aLength + bLength - 1);
    var i$$38 = 0;
    var v721 = i$$38 < aLength;
    for (;v721;) {
      var aCoeff = aCoefficients[i$$38];
      var j$$22 = 0;
      var v720 = j$$22 < bLength;
      for (;v720;) {
        var v719 = i$$38 + j$$22;
        var v1589 = product[i$$38 + j$$22];
        var v2300 = this.field;
        var v2817 = JAM.call(GF256.addOrSubtract, GF256, [v1589, JAM.call(v2300.multiply, v2300, [aCoeff, bCoefficients[j$$22]], JAM.policy.p27)], JAM.policy.p27);
        product[v719] = v2817;
        j$$22++;
        v720 = j$$22 < bLength;
      }
      i$$38++;
      v721 = i$$38 < aLength;
    }
    return JAM.new(GF256Poly, [this.field, product], JAM.policy.p26);
  }
  function v73(other$$6) {
    if (this.field != other$$6.field) {
      throw "GF256Polys do not have same GF256 field";
    }
    if (this.Zero) {
      return other$$6;
    }
    if (other$$6.Zero) {
      return this;
    }
    var smallerCoefficients = this.coefficients;
    var largerCoefficients = other$$6.coefficients;
    if (smallerCoefficients.length > largerCoefficients.length) {
      var temp$$4 = smallerCoefficients;
      smallerCoefficients = largerCoefficients;
      largerCoefficients = temp$$4;
    }
    var sumDiff = new Array(largerCoefficients.length);
    var lengthDiff = largerCoefficients.length - smallerCoefficients.length;
    var ci$$1 = 0;
    var v730 = ci$$1 < lengthDiff;
    for (;v730;) {
      sumDiff[ci$$1] = largerCoefficients[ci$$1];
      ci$$1++;
      v730 = ci$$1 < lengthDiff;
    }
    var i$$37 = lengthDiff;
    var v733 = i$$37 < largerCoefficients.length;
    for (;v733;) {
      var v2818 = JAM.call(GF256.addOrSubtract, GF256, [smallerCoefficients[i$$37 - lengthDiff], largerCoefficients[i$$37]], JAM.policy.p27);
      sumDiff[i$$37] = v2818;
      i$$37++;
      v733 = i$$37 < largerCoefficients.length;
    }
    return JAM.new(GF256Poly, [field$$1, sumDiff], JAM.policy.p26);
  }
  function v72(a$$2) {
    if (a$$2 == 0) {
      return JAM.call(this.getCoefficient, this, [0], JAM.policy.p16);
    }
    var size$$4 = this.coefficients.length;
    if (a$$2 == 1) {
      var result$$5 = 0;
      var i$$36 = 0;
      var v737 = i$$36 < size$$4;
      for (;v737;) {
        result$$5 = JAM.call(GF256.addOrSubtract, GF256, [result$$5, this.coefficients[i$$36]], JAM.policy.p27);
        i$$36++;
        v737 = i$$36 < size$$4;
      }
      return result$$5;
    }
    var result2 = this.coefficients[0];
    i$$36 = 1;
    var v742 = i$$36 < size$$4;
    for (;v742;) {
      var v1599 = this.field;
      result2 = JAM.call(GF256.addOrSubtract, GF256, [JAM.call(v1599.multiply, v1599, [a$$2, result2], JAM.policy.p27), this.coefficients[i$$36]], JAM.policy.p27);
      i$$36++;
      v742 = i$$36 < size$$4;
    }
    return result2;
  }
  function v71(degree) {
    return this.coefficients[this.coefficients.length - 1 - degree];
  }
  function v70() {
    return this.coefficients;
  }
  function v69() {
    return this.coefficients.length - 1;
  }
  function v68() {
    return this.coefficients[0] == 0;
  }
  var v1604 = coefficients == null;
  if (!v1604) {
    v1604 = coefficients.length == 0;
  }
  if (v1604) {
    throw "System.ArgumentException";
  }
  this.field = field$$1;
  var coefficientsLength = coefficients.length;
  var v1605 = coefficientsLength > 1;
  if (v1605) {
    v1605 = coefficients[0] == 0;
  }
  if (v1605) {
    var firstNonZero = 1;
    var v1606 = firstNonZero < coefficientsLength;
    if (v1606) {
      v1606 = coefficients[firstNonZero] == 0;
    }
    var v748 = v1606;
    for (;v748;) {
      firstNonZero++;
      var v1607 = firstNonZero < coefficientsLength;
      if (v1607) {
        v1607 = coefficients[firstNonZero] == 0;
      }
      v748 = v1607;
    }
    if (firstNonZero == coefficientsLength) {
      this.coefficients = field$$1.Zero.coefficients;
    } else {
      var v2819 = new Array(coefficientsLength - firstNonZero);
      this.coefficients = v2819;
      var i$$35 = 0;
      var v752 = i$$35 < this.coefficients.length;
      for (;v752;) {
        this.coefficients[i$$35] = 0;
        i$$35++;
        v752 = i$$35 < this.coefficients.length;
      }
      var ci = 0;
      var v754 = ci < this.coefficients.length;
      for (;v754;) {
        this.coefficients[ci] = coefficients[firstNonZero + ci];
        ci++;
        v754 = ci < this.coefficients.length;
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
    if (!v1613) {
      v1613 = b$$3 == 0;
    }
    if (v1613) {
      return 0;
    }
    if (a$$6 == 1) {
      return b$$3;
    }
    if (b$$3 == 1) {
      return a$$6;
    }
    return this.expTable[(this.logTable[a$$6] + this.logTable[b$$3]) % 255];
  }
  function v83(a$$5) {
    if (a$$5 == 0) {
      throw "System.ArithmeticException";
    }
    return this.expTable[255 - this.logTable[a$$5]];
  }
  function v82(a$$4) {
    if (a$$4 == 0) {
      throw "System.ArgumentException";
    }
    return this.logTable[a$$4];
  }
  function v81(a$$3) {
    return this.expTable[a$$3];
  }
  function v80(degree$$2, coefficient$$1) {
    if (degree$$2 < 0) {
      throw "System.ArgumentException";
    }
    if (coefficient$$1 == 0) {
      return zero;
    }
    var coefficients$$1 = new Array(degree$$2 + 1);
    var i$$42 = 0;
    var v771 = i$$42 < coefficients$$1.length;
    for (;v771;) {
      coefficients$$1[i$$42] = 0;
      i$$42++;
      v771 = i$$42 < coefficients$$1.length;
    }
    coefficients$$1[0] = coefficient$$1;
    return JAM.new(GF256Poly, [this, coefficients$$1], JAM.policy.p26);
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
    this.expTable[i$$41] = x$$57;
    x$$57 = x$$57 << 1;
    if (x$$57 >= 256) {
      x$$57 = x$$57 ^ primitive;
    }
    i$$41++;
    v774 = i$$41 < 256;
  }
  i$$41 = 0;
  var v777 = i$$41 < 255;
  for (;v777;) {
    var v775 = this.logTable;
    var v776 = this.expTable[i$$41];
    introspect(JAM.policy.p6) {
      v775[v776] = i$$41;
    }
    i$$41++;
    v777 = i$$41 < 255;
  }
  var at0 = new Array(1);
  at0[0] = 0;
  var v2822 = JAM.new(GF256Poly, [this, new Array(at0)], JAM.policy.p26);
  this.zero = v2822;
  var at1 = new Array(1);
  at1[0] = 1;
  var v2823 = JAM.new(GF256Poly, [this, new Array(at1)], JAM.policy.p26);
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
  if (number >= 0) {
    return number >> bits$$14;
  } else {
    return(number >> bits$$14) + (2 << ~bits$$14);
  }
  return;
}
function FinderPattern(posX, posY, estimatedModuleSize) {
  function v90(moduleSize$$2, i$$47, j$$25) {
    var v1620 = JAM.call(Math.abs, Math, [i$$47 - this.y], JAM.policy.p21) <= moduleSize$$2;
    if (v1620) {
      v1620 = JAM.call(Math.abs, Math, [j$$25 - this.x], JAM.policy.p21) <= moduleSize$$2;
    }
    if (v1620) {
      var moduleSizeDiff = JAM.call(Math.abs, Math, [moduleSize$$2 - this.estimatedModuleSize], JAM.policy.p21);
      var v784 = moduleSizeDiff <= 1;
      if (!v784) {
        v784 = moduleSizeDiff / this.estimatedModuleSize <= 1;
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
    var iSkip = JAM.call(Math.floor, Math, [3 * maxI$$1 / (4 * MAX_MODULES)], JAM.policy.p21);
    var v1626 = iSkip < MIN_SKIP;
    if (!v1626) {
      v1626 = tryHarder;
    }
    if (v1626) {
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
        if (image$$12[j$$28 + i$$54 * qrcode.width]) {
          if ((currentState & 1) == 1) {
            currentState++;
          }
          stateCount$$5[currentState]++;
        } else {
          if ((currentState & 1) == 0) {
            if (currentState == 4) {
              if (JAM.call(this.foundPatternCross, this, [stateCount$$5], JAM.policy.p21)) {
                var confirmed = JAM.call(this.handlePossibleCenter, this, [stateCount$$5, i$$54, j$$28], JAM.policy.p27);
                if (confirmed) {
                  iSkip = 2;
                  if (this.hasSkipped) {
                    done = this.haveMultiplyConfirmedCenters();
                  } else {
                    var rowSkip = this.findRowSkip();
                    if (rowSkip > stateCount$$5[2]) {
                      i$$54 = i$$54 + (rowSkip - stateCount$$5[2] - iSkip);
                      j$$28 = maxJ$$1 - 1;
                    }
                  }
                } else {
                  var v1633 = j$$28 < maxJ$$1;
                  if (v1633) {
                    v1633 = !image$$12[j$$28 + i$$54 * qrcode.width];
                  }
                  var v791 = v1633;
                  do {
                    j$$28++;
                    var v1634 = j$$28 < maxJ$$1;
                    if (v1634) {
                      v1634 = !image$$12[j$$28 + i$$54 * qrcode.width];
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
      if (JAM.call(this.foundPatternCross, this, [stateCount$$5], JAM.policy.p21)) {
        confirmed = JAM.call(this.handlePossibleCenter, this, [stateCount$$5, i$$54, maxJ$$1], JAM.policy.p27);
        if (confirmed) {
          iSkip = stateCount$$5[0];
          if (this.hasSkipped) {
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
    var max$$7 = this.possibleCenters.length;
    var i$$53 = 0;
    var v803 = i$$53 < max$$7;
    for (;v803;) {
      var pattern$$3 = this.possibleCenters[i$$53];
      if (pattern$$3.Count >= CENTER_QUORUM) {
        confirmedCount++;
        totalModuleSize$$2 = totalModuleSize$$2 + pattern$$3.EstimatedModuleSize;
      }
      i$$53++;
      v803 = i$$53 < max$$7;
    }
    if (confirmedCount < 3) {
      return false;
    }
    var average$$1 = totalModuleSize$$2 / max$$7;
    var totalDeviation = 0;
    i$$53 = 0;
    var v806 = i$$53 < max$$7;
    for (;v806;) {
      pattern$$3 = this.possibleCenters[i$$53];
      totalDeviation = totalDeviation + JAM.call(Math.abs, Math, [pattern$$3.EstimatedModuleSize - average$$1], JAM.policy.p21);
      i$$53++;
      v806 = i$$53 < max$$7;
    }
    return totalDeviation <= .05 * totalModuleSize$$2;
  }
  function v102() {
    var max$$6 = this.possibleCenters.length;
    if (max$$6 <= 1) {
      return 0;
    }
    var firstConfirmedCenter = null;
    var i$$52 = 0;
    var v814 = i$$52 < max$$6;
    for (;v814;) {
      var center$$1 = this.possibleCenters[i$$52];
      if (center$$1.Count >= CENTER_QUORUM) {
        if (firstConfirmedCenter == null) {
          firstConfirmedCenter = center$$1;
        } else {
          this.hasSkipped = true;
          return JAM.call(Math.floor, Math, [(JAM.call(Math.abs, Math, [firstConfirmedCenter.X - center$$1.X], JAM.policy.p21) - JAM.call(Math.abs, Math, [firstConfirmedCenter.Y - center$$1.Y], JAM.policy.p21)) / 2], JAM.policy.p21);
        }
      }
      i$$52++;
      v814 = i$$52 < max$$6;
    }
    return 0;
  }
  function v101() {
    function v100(a$$8, b$$5) {
      if (a$$8.count > b$$5.count) {
        return-1;
      }
      if (a$$8.count < b$$5.count) {
        return 1;
      }
      return 0;
    }
    var startSize = this.possibleCenters.length;
    if (startSize < 3) {
      throw "Couldn't find enough finder patterns";
    }
    if (startSize > 3) {
      var totalModuleSize$$1 = 0;
      var i$$51 = 0;
      var v819 = i$$51 < startSize;
      for (;v819;) {
        totalModuleSize$$1 = totalModuleSize$$1 + this.possibleCenters[i$$51].EstimatedModuleSize;
        i$$51++;
        v819 = i$$51 < startSize;
      }
      var average = totalModuleSize$$1 / startSize;
      i$$51 = 0;
      var v1646 = i$$51 < this.possibleCenters.length;
      if (v1646) {
        v1646 = this.possibleCenters.length > 3;
      }
      var v823 = v1646;
      for (;v823;) {
        var pattern$$2 = this.possibleCenters[i$$51];
        if (JAM.call(Math.abs, Math, [pattern$$2.EstimatedModuleSize - average], JAM.policy.p21) > .2 * average) {
          var v821 = this.possibleCenters;
          JAM.call(v821.remove, v821, [i$$51], JAM.policy.p24);
          i$$51--;
        }
        i$$51++;
        var v1649 = i$$51 < this.possibleCenters.length;
        if (v1649) {
          v1649 = this.possibleCenters.length > 3;
        }
        v823 = v1649;
      }
    }
    if (this.possibleCenters.length > 3) {
      var v825 = this.possibleCenters;
      JAM.call(v825.sort, v825, [v100], JAM.policy.p21);
    }
    return JAM.new(Array, [this.possibleCenters[0], this.possibleCenters[1], this.possibleCenters[2]], JAM.policy.p26);
  }
  function v99(stateCount$$4, i$$50, j$$27) {
    var stateCountTotal$$2 = stateCount$$4[0] + stateCount$$4[1] + stateCount$$4[2] + stateCount$$4[3] + stateCount$$4[4];
    var centerJ$$1 = JAM.call(this.centerFromEnd, this, [stateCount$$4, j$$27], JAM.policy.p27);
    var centerI$$1 = JAM.call(this.crossCheckVertical, this, [i$$50, JAM.call(Math.floor, Math, [centerJ$$1], JAM.policy.p21), stateCount$$4[2], stateCountTotal$$2], JAM.policy.p27);
    if (!isNaN(centerI$$1)) {
      centerJ$$1 = JAM.call(this.crossCheckHorizontal, this, [JAM.call(Math.floor, Math, [centerJ$$1], JAM.policy.p21), JAM.call(Math.floor, Math, [centerI$$1], JAM.policy.p21), stateCount$$4[2], stateCountTotal$$2], JAM.policy.p23);
      if (!isNaN(centerJ$$1)) {
        var estimatedModuleSize$$1 = stateCountTotal$$2 / 7;
        var found = false;
        var max$$5 = this.possibleCenters.length;
        var index$$39 = 0;
        var v840 = index$$39 < max$$5;
        for (;v840;) {
          var center = this.possibleCenters[index$$39];
          if (JAM.call(center.aboutEquals, center, [estimatedModuleSize$$1, centerI$$1, centerJ$$1], JAM.policy.p27)) {
            center.incrementCount();
            found = true;
            break;
          }
          index$$39++;
          v840 = index$$39 < max$$5;
        }
        if (!found) {
          var point$$2 = JAM.new(FinderPattern, [centerJ$$1, centerI$$1, estimatedModuleSize$$1], JAM.policy.p26);
          var v841 = this.possibleCenters;
          JAM.call(v841.push, v841, [point$$2], JAM.policy.p21);
          if (this.resultPointCallback != null) {
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
      v1659 = image$$11[j$$26 + centerI * qrcode.width];
    }
    var v847 = v1659;
    for (;v847;) {
      stateCount$$3[2]++;
      j$$26--;
      var v1660 = j$$26 >= 0;
      if (v1660) {
        v1660 = image$$11[j$$26 + centerI * qrcode.width];
      }
      v847 = v1660;
    }
    if (j$$26 < 0) {
      return NaN;
    }
    var v2338 = j$$26 >= 0;
    if (v2338) {
      v2338 = !image$$11[j$$26 + centerI * qrcode.width];
    }
    var v1661 = v2338;
    if (v1661) {
      v1661 = stateCount$$3[1] <= maxCount$$1;
    }
    var v849 = v1661;
    for (;v849;) {
      stateCount$$3[1]++;
      j$$26--;
      var v2340 = j$$26 >= 0;
      if (v2340) {
        v2340 = !image$$11[j$$26 + centerI * qrcode.width];
      }
      var v1662 = v2340;
      if (v1662) {
        v1662 = stateCount$$3[1] <= maxCount$$1;
      }
      v849 = v1662;
    }
    var v1663 = j$$26 < 0;
    if (!v1663) {
      v1663 = stateCount$$3[1] > maxCount$$1;
    }
    if (v1663) {
      return NaN;
    }
    var v2344 = j$$26 >= 0;
    if (v2344) {
      v2344 = image$$11[j$$26 + centerI * qrcode.width];
    }
    var v1664 = v2344;
    if (v1664) {
      v1664 = stateCount$$3[0] <= maxCount$$1;
    }
    var v851 = v1664;
    for (;v851;) {
      stateCount$$3[0]++;
      j$$26--;
      var v2346 = j$$26 >= 0;
      if (v2346) {
        v2346 = image$$11[j$$26 + centerI * qrcode.width];
      }
      var v1665 = v2346;
      if (v1665) {
        v1665 = stateCount$$3[0] <= maxCount$$1;
      }
      v851 = v1665;
    }
    if (stateCount$$3[0] > maxCount$$1) {
      return NaN;
    }
    j$$26 = startJ + 1;
    var v1667 = j$$26 < maxJ;
    if (v1667) {
      v1667 = image$$11[j$$26 + centerI * qrcode.width];
    }
    var v853 = v1667;
    for (;v853;) {
      stateCount$$3[2]++;
      j$$26++;
      var v1668 = j$$26 < maxJ;
      if (v1668) {
        v1668 = image$$11[j$$26 + centerI * qrcode.width];
      }
      v853 = v1668;
    }
    if (j$$26 == maxJ) {
      return NaN;
    }
    var v2350 = j$$26 < maxJ;
    if (v2350) {
      v2350 = !image$$11[j$$26 + centerI * qrcode.width];
    }
    var v1669 = v2350;
    if (v1669) {
      v1669 = stateCount$$3[3] < maxCount$$1;
    }
    var v855 = v1669;
    for (;v855;) {
      stateCount$$3[3]++;
      j$$26++;
      var v2352 = j$$26 < maxJ;
      if (v2352) {
        v2352 = !image$$11[j$$26 + centerI * qrcode.width];
      }
      var v1670 = v2352;
      if (v1670) {
        v1670 = stateCount$$3[3] < maxCount$$1;
      }
      v855 = v1670;
    }
    var v1671 = j$$26 == maxJ;
    if (!v1671) {
      v1671 = stateCount$$3[3] >= maxCount$$1;
    }
    if (v1671) {
      return NaN;
    }
    var v2356 = j$$26 < maxJ;
    if (v2356) {
      v2356 = image$$11[j$$26 + centerI * qrcode.width];
    }
    var v1672 = v2356;
    if (v1672) {
      v1672 = stateCount$$3[4] < maxCount$$1;
    }
    var v857 = v1672;
    for (;v857;) {
      stateCount$$3[4]++;
      j$$26++;
      var v2358 = j$$26 < maxJ;
      if (v2358) {
        v2358 = image$$11[j$$26 + centerI * qrcode.width];
      }
      var v1673 = v2358;
      if (v1673) {
        v1673 = stateCount$$3[4] < maxCount$$1;
      }
      v857 = v1673;
    }
    if (stateCount$$3[4] >= maxCount$$1) {
      return NaN;
    }
    var stateCountTotal$$1 = stateCount$$3[0] + stateCount$$3[1] + stateCount$$3[2] + stateCount$$3[3] + stateCount$$3[4];
    if (5 * JAM.call(Math.abs, Math, [stateCountTotal$$1 - originalStateCountTotal$$1], JAM.policy.p21) >= originalStateCountTotal$$1) {
      return NaN;
    }
    var v862;
    if (JAM.call(this.foundPatternCross, this, [stateCount$$3], JAM.policy.p21)) {
      v862 = JAM.call(this.centerFromEnd, this, [stateCount$$3, j$$26], JAM.policy.p27);
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
      v1679 = image$$10[centerJ + i$$49 * qrcode.width];
    }
    var v863 = v1679;
    for (;v863;) {
      stateCount$$2[2]++;
      i$$49--;
      var v1680 = i$$49 >= 0;
      if (v1680) {
        v1680 = image$$10[centerJ + i$$49 * qrcode.width];
      }
      v863 = v1680;
    }
    if (i$$49 < 0) {
      return NaN;
    }
    var v2365 = i$$49 >= 0;
    if (v2365) {
      v2365 = !image$$10[centerJ + i$$49 * qrcode.width];
    }
    var v1681 = v2365;
    if (v1681) {
      v1681 = stateCount$$2[1] <= maxCount;
    }
    var v865 = v1681;
    for (;v865;) {
      stateCount$$2[1]++;
      i$$49--;
      var v2367 = i$$49 >= 0;
      if (v2367) {
        v2367 = !image$$10[centerJ + i$$49 * qrcode.width];
      }
      var v1682 = v2367;
      if (v1682) {
        v1682 = stateCount$$2[1] <= maxCount;
      }
      v865 = v1682;
    }
    var v1683 = i$$49 < 0;
    if (!v1683) {
      v1683 = stateCount$$2[1] > maxCount;
    }
    if (v1683) {
      return NaN;
    }
    var v2371 = i$$49 >= 0;
    if (v2371) {
      v2371 = image$$10[centerJ + i$$49 * qrcode.width];
    }
    var v1684 = v2371;
    if (v1684) {
      v1684 = stateCount$$2[0] <= maxCount;
    }
    var v867 = v1684;
    for (;v867;) {
      stateCount$$2[0]++;
      i$$49--;
      var v2373 = i$$49 >= 0;
      if (v2373) {
        v2373 = image$$10[centerJ + i$$49 * qrcode.width];
      }
      var v1685 = v2373;
      if (v1685) {
        v1685 = stateCount$$2[0] <= maxCount;
      }
      v867 = v1685;
    }
    if (stateCount$$2[0] > maxCount) {
      return NaN;
    }
    i$$49 = startI + 1;
    var v1687 = i$$49 < maxI;
    if (v1687) {
      v1687 = image$$10[centerJ + i$$49 * qrcode.width];
    }
    var v869 = v1687;
    for (;v869;) {
      stateCount$$2[2]++;
      i$$49++;
      var v1688 = i$$49 < maxI;
      if (v1688) {
        v1688 = image$$10[centerJ + i$$49 * qrcode.width];
      }
      v869 = v1688;
    }
    if (i$$49 == maxI) {
      return NaN;
    }
    var v2377 = i$$49 < maxI;
    if (v2377) {
      v2377 = !image$$10[centerJ + i$$49 * qrcode.width];
    }
    var v1689 = v2377;
    if (v1689) {
      v1689 = stateCount$$2[3] < maxCount;
    }
    var v871 = v1689;
    for (;v871;) {
      stateCount$$2[3]++;
      i$$49++;
      var v2379 = i$$49 < maxI;
      if (v2379) {
        v2379 = !image$$10[centerJ + i$$49 * qrcode.width];
      }
      var v1690 = v2379;
      if (v1690) {
        v1690 = stateCount$$2[3] < maxCount;
      }
      v871 = v1690;
    }
    var v1691 = i$$49 == maxI;
    if (!v1691) {
      v1691 = stateCount$$2[3] >= maxCount;
    }
    if (v1691) {
      return NaN;
    }
    var v2383 = i$$49 < maxI;
    if (v2383) {
      v2383 = image$$10[centerJ + i$$49 * qrcode.width];
    }
    var v1692 = v2383;
    if (v1692) {
      v1692 = stateCount$$2[4] < maxCount;
    }
    var v873 = v1692;
    for (;v873;) {
      stateCount$$2[4]++;
      i$$49++;
      var v2385 = i$$49 < maxI;
      if (v2385) {
        v2385 = image$$10[centerJ + i$$49 * qrcode.width];
      }
      var v1693 = v2385;
      if (v1693) {
        v1693 = stateCount$$2[4] < maxCount;
      }
      v873 = v1693;
    }
    if (stateCount$$2[4] >= maxCount) {
      return NaN;
    }
    var stateCountTotal = stateCount$$2[0] + stateCount$$2[1] + stateCount$$2[2] + stateCount$$2[3] + stateCount$$2[4];
    if (5 * JAM.call(Math.abs, Math, [stateCountTotal - originalStateCountTotal], JAM.policy.p21) >= 2 * originalStateCountTotal) {
      return NaN;
    }
    var v878;
    if (JAM.call(this.foundPatternCross, this, [stateCount$$2], JAM.policy.p21)) {
      v878 = JAM.call(this.centerFromEnd, this, [stateCount$$2, i$$49], JAM.policy.p27);
    } else {
      v878 = NaN;
    }
    return v878;
  }
  function v96(stateCount$$1, end$$2) {
    return end$$2 - stateCount$$1[4] - stateCount$$1[3] - stateCount$$1[2] / 2;
  }
  function v95(stateCount) {
    var totalModuleSize = 0;
    var i$$48 = 0;
    var v882 = i$$48 < 5;
    for (;v882;) {
      var count$$5 = stateCount[i$$48];
      if (count$$5 == 0) {
        return false;
      }
      totalModuleSize = totalModuleSize + count$$5;
      i$$48++;
      v882 = i$$48 < 5;
    }
    if (totalModuleSize < 7) {
      return false;
    }
    var moduleSize$$3 = JAM.call(Math.floor, Math, [(totalModuleSize << INTEGER_MATH_SHIFT) / 7], JAM.policy.p21);
    var maxVariance = JAM.call(Math.floor, Math, [moduleSize$$3 / 2], JAM.policy.p21);
    var v2595 = JAM.call(Math.abs, Math, [moduleSize$$3 - (stateCount[0] << INTEGER_MATH_SHIFT)], JAM.policy.p21) < maxVariance;
    if (v2595) {
      v2595 = JAM.call(Math.abs, Math, [moduleSize$$3 - (stateCount[1] << INTEGER_MATH_SHIFT)], JAM.policy.p21) < maxVariance;
    }
    var v2391 = v2595;
    if (v2391) {
      v2391 = JAM.call(Math.abs, Math, [3 * moduleSize$$3 - (stateCount[2] << INTEGER_MATH_SHIFT)], JAM.policy.p21) < 3 * maxVariance;
    }
    var v1704 = v2391;
    if (v1704) {
      v1704 = JAM.call(Math.abs, Math, [moduleSize$$3 - (stateCount[3] << INTEGER_MATH_SHIFT)], JAM.policy.p21) < maxVariance;
    }
    var v886 = v1704;
    if (v886) {
      v886 = JAM.call(Math.abs, Math, [moduleSize$$3 - (stateCount[4] << INTEGER_MATH_SHIFT)], JAM.policy.p21) < maxVariance;
    }
    return v886;
  }
  function v94() {
    this.crossCheckStateCount[0] = 0;
    this.crossCheckStateCount[1] = 0;
    this.crossCheckStateCount[2] = 0;
    this.crossCheckStateCount[3] = 0;
    this.crossCheckStateCount[4] = 0;
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
    var v1706 = JAM.call(Math.abs, Math, [i$$55 - this.y], JAM.policy.p21) <= moduleSize$$4;
    if (v1706) {
      v1706 = JAM.call(Math.abs, Math, [j$$29 - this.x], JAM.policy.p21) <= moduleSize$$4;
    }
    if (v1706) {
      var moduleSizeDiff$$1 = JAM.call(Math.abs, Math, [moduleSize$$4 - this.estimatedModuleSize], JAM.policy.p21);
      var v893 = moduleSizeDiff$$1 <= 1;
      if (!v893) {
        v893 = moduleSizeDiff$$1 / this.estimatedModuleSize <= 1;
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
    return JAM.call(Math.floor, Math, [this.y], JAM.policy.p21);
  }
  function v107() {
    return JAM.call(Math.floor, Math, [this.x], JAM.policy.p21);
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
    var middleI = startY + (height$$12 >> 1);
    var stateCount$$10 = new Array(0, 0, 0);
    var iGen = 0;
    var v909 = iGen < height$$12;
    for (;v909;) {
      var v1710;
      if ((iGen & 1) == 0) {
        v1710 = iGen + 1 >> 1;
      } else {
        v1710 = -(iGen + 1 >> 1);
      }
      var i$$59 = middleI + v1710;
      stateCount$$10[0] = 0;
      stateCount$$10[1] = 0;
      stateCount$$10[2] = 0;
      var j$$31 = startX$$1;
      var v1711 = j$$31 < maxJ$$2;
      if (v1711) {
        v1711 = !image$$13[j$$31 + qrcode.width * i$$59];
      }
      var v899 = v1711;
      for (;v899;) {
        j$$31++;
        var v1712 = j$$31 < maxJ$$2;
        if (v1712) {
          v1712 = !image$$13[j$$31 + qrcode.width * i$$59];
        }
        v899 = v1712;
      }
      var currentState$$1 = 0;
      var v906 = j$$31 < maxJ$$2;
      for (;v906;) {
        if (image$$13[j$$31 + i$$59 * qrcode.width]) {
          if (currentState$$1 == 1) {
            stateCount$$10[currentState$$1]++;
          } else {
            if (currentState$$1 == 2) {
              if (JAM.call(this.foundPatternCross, this, [stateCount$$10], JAM.policy.p21)) {
                var confirmed$$1 = JAM.call(this.handlePossibleCenter, this, [stateCount$$10, i$$59, j$$31], JAM.policy.p27);
                if (confirmed$$1 != null) {
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
          if (currentState$$1 == 1) {
            currentState$$1++;
          }
          stateCount$$10[currentState$$1]++;
        }
        j$$31++;
        v906 = j$$31 < maxJ$$2;
      }
      if (JAM.call(this.foundPatternCross, this, [stateCount$$10], JAM.policy.p21)) {
        confirmed$$1 = JAM.call(this.handlePossibleCenter, this, [stateCount$$10, i$$59, maxJ$$2], JAM.policy.p27);
        if (confirmed$$1 != null) {
          return confirmed$$1;
        }
      }
      iGen++;
      v909 = iGen < height$$12;
    }
    if (!(this.possibleCenters.length == 0)) {
      return this.possibleCenters[0];
    }
    throw "Couldn't find enough alignment patterns";
  }
  function v114(stateCount$$9, i$$58, j$$30) {
    var stateCountTotal$$4 = stateCount$$9[0] + stateCount$$9[1] + stateCount$$9[2];
    var centerJ$$3 = JAM.call(this.centerFromEnd, this, [stateCount$$9, j$$30], JAM.policy.p27);
    var centerI$$2 = JAM.call(this.crossCheckVertical, this, [i$$58, JAM.call(Math.floor, Math, [centerJ$$3], JAM.policy.p21), 2 * stateCount$$9[1], stateCountTotal$$4], JAM.policy.p27);
    if (!isNaN(centerI$$2)) {
      var estimatedModuleSize$$3 = (stateCount$$9[0] + stateCount$$9[1] + stateCount$$9[2]) / 3;
      var max$$8 = this.possibleCenters.length;
      var index$$40 = 0;
      var v920 = index$$40 < max$$8;
      for (;v920;) {
        var center$$2 = this.possibleCenters[index$$40];
        if (JAM.call(center$$2.aboutEquals, center$$2, [estimatedModuleSize$$3, centerI$$2, centerJ$$3], JAM.policy.p27)) {
          return JAM.new(AlignmentPattern, [centerJ$$3, centerI$$2, estimatedModuleSize$$3], JAM.policy.p26);
        }
        index$$40++;
        v920 = index$$40 < max$$8;
      }
      var point$$3 = JAM.new(AlignmentPattern, [centerJ$$3, centerI$$2, estimatedModuleSize$$3], JAM.policy.p26);
      var v921 = this.possibleCenters;
      JAM.call(v921.push, v921, [point$$3], JAM.policy.p21);
      if (this.resultPointCallback != null) {
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
      v2406 = image$$14[centerJ$$2 + i$$57 * qrcode.width];
    }
    var v1722 = v2406;
    if (v1722) {
      v1722 = stateCount$$8[1] <= maxCount$$2;
    }
    var v925 = v1722;
    for (;v925;) {
      stateCount$$8[1]++;
      i$$57--;
      var v2408 = i$$57 >= 0;
      if (v2408) {
        v2408 = image$$14[centerJ$$2 + i$$57 * qrcode.width];
      }
      var v1723 = v2408;
      if (v1723) {
        v1723 = stateCount$$8[1] <= maxCount$$2;
      }
      v925 = v1723;
    }
    var v1724 = i$$57 < 0;
    if (!v1724) {
      v1724 = stateCount$$8[1] > maxCount$$2;
    }
    if (v1724) {
      return NaN;
    }
    var v2412 = i$$57 >= 0;
    if (v2412) {
      v2412 = !image$$14[centerJ$$2 + i$$57 * qrcode.width];
    }
    var v1725 = v2412;
    if (v1725) {
      v1725 = stateCount$$8[0] <= maxCount$$2;
    }
    var v927 = v1725;
    for (;v927;) {
      stateCount$$8[0]++;
      i$$57--;
      var v2414 = i$$57 >= 0;
      if (v2414) {
        v2414 = !image$$14[centerJ$$2 + i$$57 * qrcode.width];
      }
      var v1726 = v2414;
      if (v1726) {
        v1726 = stateCount$$8[0] <= maxCount$$2;
      }
      v927 = v1726;
    }
    if (stateCount$$8[0] > maxCount$$2) {
      return NaN;
    }
    i$$57 = startI$$1 + 1;
    var v2416 = i$$57 < maxI$$2;
    if (v2416) {
      v2416 = image$$14[centerJ$$2 + i$$57 * qrcode.width];
    }
    var v1728 = v2416;
    if (v1728) {
      v1728 = stateCount$$8[1] <= maxCount$$2;
    }
    var v929 = v1728;
    for (;v929;) {
      stateCount$$8[1]++;
      i$$57++;
      var v2418 = i$$57 < maxI$$2;
      if (v2418) {
        v2418 = image$$14[centerJ$$2 + i$$57 * qrcode.width];
      }
      var v1729 = v2418;
      if (v1729) {
        v1729 = stateCount$$8[1] <= maxCount$$2;
      }
      v929 = v1729;
    }
    var v1730 = i$$57 == maxI$$2;
    if (!v1730) {
      v1730 = stateCount$$8[1] > maxCount$$2;
    }
    if (v1730) {
      return NaN;
    }
    var v2422 = i$$57 < maxI$$2;
    if (v2422) {
      v2422 = !image$$14[centerJ$$2 + i$$57 * qrcode.width];
    }
    var v1731 = v2422;
    if (v1731) {
      v1731 = stateCount$$8[2] <= maxCount$$2;
    }
    var v931 = v1731;
    for (;v931;) {
      stateCount$$8[2]++;
      i$$57++;
      var v2424 = i$$57 < maxI$$2;
      if (v2424) {
        v2424 = !image$$14[centerJ$$2 + i$$57 * qrcode.width];
      }
      var v1732 = v2424;
      if (v1732) {
        v1732 = stateCount$$8[2] <= maxCount$$2;
      }
      v931 = v1732;
    }
    if (stateCount$$8[2] > maxCount$$2) {
      return NaN;
    }
    var stateCountTotal$$3 = stateCount$$8[0] + stateCount$$8[1] + stateCount$$8[2];
    if (5 * JAM.call(Math.abs, Math, [stateCountTotal$$3 - originalStateCountTotal$$2], JAM.policy.p21) >= 2 * originalStateCountTotal$$2) {
      return NaN;
    }
    var v936;
    if (JAM.call(this.foundPatternCross, this, [stateCount$$8], JAM.policy.p21)) {
      v936 = JAM.call(this.centerFromEnd, this, [stateCount$$8, i$$57], JAM.policy.p27);
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
      if (JAM.call(Math.abs, Math, [moduleSize$$6 - stateCount$$7[i$$56]], JAM.policy.p21) >= maxVariance$$1) {
        return false;
      }
      i$$56++;
      v938 = i$$56 < 3;
    }
    return true;
  }
  function v111(stateCount$$6, end$$3) {
    return end$$3 - stateCount$$6[2] - stateCount$$6[1] / 2;
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
      if (mode$$7 == 0) {
        if (output$$1.length > 0) {
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
      if (v1743) {
        throw "Invalid mode: " + mode$$7 + " in (block:" + this.blockPointer + " bit:" + this.bitPointer + ")";
      }
      dataLength = JAM.call(this.getDataLength, this, [mode$$7], JAM.policy.p21);
      if (dataLength < 1) {
        throw "Invalid data length: " + dataLength;
      }
      switch(mode$$7) {
        case MODE_NUMBER:
          var temp_str = JAM.call(this.getFigureString, this, [dataLength], JAM.policy.p21);
          var ta = new Array(temp_str.length);
          var j$$32 = 0;
          var v947 = j$$32 < temp_str.length;
          for (;v947;) {
            var v2827 = JAM.call(temp_str.charCodeAt, temp_str, [j$$32], JAM.policy.p21);
            ta[j$$32] = v2827;
            j$$32++;
            v947 = j$$32 < temp_str.length;
          }
          JAM.call(output$$1.push, output$$1, [ta], JAM.policy.p21);
          break;
        case MODE_ROMAN_AND_NUMBER:
          temp_str = JAM.call(this.getRomanAndFigureString, this, [dataLength], JAM.policy.p21);
          ta = new Array(temp_str.length);
          j$$32 = 0;
          var v949 = j$$32 < temp_str.length;
          for (;v949;) {
            var v2828 = JAM.call(temp_str.charCodeAt, temp_str, [j$$32], JAM.policy.p21);
            ta[j$$32] = v2828;
            j$$32++;
            v949 = j$$32 < temp_str.length;
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
      var tempWord = (higherByte << 8) + lowerByte;
      var shiftjisWord = 0;
      if (tempWord + 33088 <= 40956) {
        shiftjisWord = tempWord + 33088;
      } else {
        shiftjisWord = tempWord + 49472;
      }
      unicodeString = unicodeString + JAM.call(String.fromCharCode, String, [shiftjisWord], JAM.policy.p21);
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
      if (length$$12 >= 3) {
        intData$$1 = JAM.call(this.getNextBits, this, [10], JAM.policy.p16);
        if (intData$$1 < 100) {
          strData$$1 = strData$$1 + "0";
        }
        if (intData$$1 < 10) {
          strData$$1 = strData$$1 + "0";
        }
        length$$12 = length$$12 - 3;
      } else {
        if (length$$12 == 2) {
          intData$$1 = JAM.call(this.getNextBits, this, [7], JAM.policy.p16);
          if (intData$$1 < 10) {
            strData$$1 = strData$$1 + "0";
          }
          length$$12 = length$$12 - 2;
        } else {
          if (length$$12 == 1) {
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
      if (length$$11 > 1) {
        intData = JAM.call(this.getNextBits, this, [11], JAM.policy.p16);
        var firstLetter = JAM.call(Math.floor, Math, [intData / 45], JAM.policy.p21);
        var secondLetter = intData % 45;
        strData = strData + tableRomanAndFigure[firstLetter];
        strData = strData + tableRomanAndFigure[secondLetter];
        length$$11 = length$$11 - 2;
      } else {
        if (length$$11 == 1) {
          intData = JAM.call(this.getNextBits, this, [6], JAM.policy.p16);
          strData = strData + tableRomanAndFigure[intData];
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
      if (modeIndicator >> index$$41 == 1) {
        break;
      }
      index$$41++;
    }
    return JAM.call(this.getNextBits, this, [qrcode.sizeOfDataLengthInfo[this.dataLengthMode][index$$41]], JAM.policy.p21);
  }
  function v117() {
    if (this.blockPointer > this.blocks.length - this.numErrorCorrectionCode - 2) {
      return 0;
    } else {
      return JAM.call(this.getNextBits, this, [4], JAM.policy.p16);
    }
    return;
  }
  function v116(numBits) {
    var bits$$15 = 0;
    if (numBits < this.bitPointer + 1) {
      var mask$$5 = 0;
      var i$$60 = 0;
      var v968 = i$$60 < numBits;
      for (;v968;) {
        mask$$5 = mask$$5 + (1 << i$$60);
        i$$60++;
        v968 = i$$60 < numBits;
      }
      mask$$5 = mask$$5 << this.bitPointer - numBits + 1;
      bits$$15 = (this.blocks[this.blockPointer] & mask$$5) >> this.bitPointer - numBits + 1;
      this.bitPointer = this.bitPointer - numBits;
      return bits$$15;
    } else {
      if (numBits < this.bitPointer + 1 + 8) {
        var mask1 = 0;
        i$$60 = 0;
        var v971 = i$$60 < this.bitPointer + 1;
        for (;v971;) {
          mask1 = mask1 + (1 << i$$60);
          i$$60++;
          v971 = i$$60 < this.bitPointer + 1;
        }
        bits$$15 = (this.blocks[this.blockPointer] & mask1) << numBits - (this.bitPointer + 1);
        this.blockPointer++;
        bits$$15 = bits$$15 + (this.blocks[this.blockPointer] >> 8 - (numBits - (this.bitPointer + 1)));
        this.bitPointer = this.bitPointer - numBits % 8;
        if (this.bitPointer < 0) {
          this.bitPointer = 8 + this.bitPointer;
        }
        return bits$$15;
      } else {
        if (numBits < this.bitPointer + 1 + 16) {
          mask1 = 0;
          var mask3 = 0;
          i$$60 = 0;
          var v978 = i$$60 < this.bitPointer + 1;
          for (;v978;) {
            mask1 = mask1 + (1 << i$$60);
            i$$60++;
            v978 = i$$60 < this.bitPointer + 1;
          }
          var bitsFirstBlock = (this.blocks[this.blockPointer] & mask1) << numBits - (this.bitPointer + 1);
          this.blockPointer++;
          var bitsSecondBlock = this.blocks[this.blockPointer] << numBits - (this.bitPointer + 1 + 8);
          this.blockPointer++;
          i$$60 = 0;
          var v983 = i$$60 < numBits - (this.bitPointer + 1 + 8);
          for (;v983;) {
            mask3 = mask3 + (1 << i$$60);
            i$$60++;
            v983 = i$$60 < numBits - (this.bitPointer + 1 + 8);
          }
          mask3 = mask3 << 8 - (numBits - (this.bitPointer + 1 + 8));
          var bitsThirdBlock = (this.blocks[this.blockPointer] & mask3) >> 8 - (numBits - (this.bitPointer + 1 + 8));
          bits$$15 = bitsFirstBlock + bitsSecondBlock + bitsThirdBlock;
          this.bitPointer = this.bitPointer - (numBits - 8) % 8;
          if (this.bitPointer < 0) {
            this.bitPointer = 8 + this.bitPointer;
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
  if (version$$8 <= 9) {
    this.dataLengthMode = 0;
  } else {
    var v1790 = version$$8 >= 10;
    if (v1790) {
      v1790 = version$$8 <= 26;
    }
    if (v1790) {
      this.dataLengthMode = 1;
    } else {
      var v1791 = version$$8 >= 27;
      if (v1791) {
        v1791 = version$$8 <= 40;
      }
      if (v1791) {
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
      JAM.call(qrcode.decode, qrcode, [e$$10.target.result], JAM.policy.p21);
      return;
    }
    return v124;
  }
  var o$$1 = [];
  var i$$61 = 0;
  var v1000 = i$$61 < f.length;
  for (;v1000;) {
    var reader$$2 = new FileReader;
    var v998 = reader$$2;
    var v2829 = v125(f[i$$61]);
    JAM.set(v998, "onload", v2829);
    JAM.call(reader$$2.readAsDataURL, reader$$2, [f[i$$61]], JAM.policy.p21);
    i$$61++;
    v1000 = i$$61 < f.length;
  }
  return;
}
function read(a$$9) {
  alert(a$$9);
  return;
}
function load() {
  qrcode.callback = read;
  var img$$2 = JAM.call(document.getElementById, document, ["imgpath"], JAM.policy.p17).value;
  JAM.call(qrcode.decode, qrcode, [img$$2], JAM.policy.p21);
  return;
}
function passLine(stringPixels) {
  var coll = JAM.call(stringPixels.split, stringPixels, ["-"], JAM.policy.p17);
  var i$$62 = 0;
  var v1013 = i$$62 < 320;
  for (;v1013;) {
    var intVal = parseInt(coll[i$$62]);
    r = intVal >> 16 & 255;
    g = intVal >> 8 & 255;
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
  if (c >= 320 * 240 * 4) {
    c = 0;
    JAM.call(gCtx.putImageData, gCtx, [imageData, 0, 0], JAM.policy.p28);
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
var FORMAT_INFO_DECODE_LOOKUP = JAM.new(Array, [new Array(21522, 0), new Array(20773, 1), new Array(24188, 2), new Array(23371, 3), new Array(17913, 4), new Array(16590, 5), new Array(20375, 6), new Array(19104, 7), new Array(30660, 8), new Array(29427, 9), new Array(32170, 10), new Array(30877, 11), new Array(26159, 12), new Array(25368, 13), new Array(27713, 14), new Array(26998, 15), new Array(5769, 16), new Array(5054, 17), new Array(7399, 18), new Array(6608, 19), new Array(1890, 20), new Array(597, 
21), new Array(3340, 22), new Array(2107, 23), new Array(13663, 24), new Array(12392, 25), new Array(16177, 26), new Array(14854, 27), new Array(9396, 28), new Array(8579, 29), new Array(11994, 30), new Array(11245, 31)], JAM.policy.p26);
var BITS_SET_IN_HALF_BYTE = new Array(0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4);
FormatInformation.numBitsDiffering = v135;
FormatInformation.decodeFormatInformation = v136;
FormatInformation.doDecodeFormatInformation = v137;
ErrorCorrectionLevel.forBits = v138;
var L = new ErrorCorrectionLevel(0, 1, "L");
var M = new ErrorCorrectionLevel(1, 0, "M");
var Q = new ErrorCorrectionLevel(2, 3, "Q");
var H = new ErrorCorrectionLevel(3, 2, "H");
var FOR_BITS = JAM.new(Array, [M, L, H, Q], JAM.policy.p26);
DataBlock.getDataBlocks = v139;
DataMask = {};
DataMask.forReference = v140;
var v1049 = DataMask;
var v2832 = JAM.new(Array, [new DataMask000, new DataMask001, new DataMask010, new DataMask011, new DataMask100, new DataMask101, new DataMask110, new DataMask111], JAM.policy.p26);
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
var v2835 = new ReedSolomonDecoder(GF256.QR_CODE_FIELD);
v1052.rsDecoder = v2835;
Decoder.correctErrors = v142;
Decoder.decode = v143;
qrcode = {};
qrcode.imagedata = null;
qrcode.width = 0;
qrcode.height = 0;
qrcode.qrCodeSymbol = null;
qrcode.debug = false;
qrcode.sizeOfDataLengthInfo = [[10, 9, 8, 8], [12, 11, 16, 10], [14, 13, 16, 12]];
qrcode.callback = null;
qrcode.decode = v145;
qrcode.decode_utf8 = v146;
qrcode.process = v147;
qrcode.getPixel = v148;
qrcode.binarize = v149;
qrcode.getMiddleBrightnessPerArea = v150;
qrcode.grayScaleToBitmap = v151;
qrcode.grayscale = v152;
Array.prototype.remove = v153;
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
JAM.set(JAM.call(document.getElementById, document, ["decode"], JAM.policy.p17), "onclick", load)
