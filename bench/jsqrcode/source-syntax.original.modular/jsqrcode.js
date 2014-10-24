introspect(JAM.policy.pFull) {
GridSampler = {};
GridSampler.checkAndNudgePoints = function(image$$2, points) {
  var width$$9 = qrcode.width;
  var height$$8 = qrcode.height;
  var nudged = true;
  var offset$$8 = 0;
  for (;offset$$8 < points.Length && nudged;offset$$8 += 2) {
    var x$$47 = Math.floor(points[offset$$8]);
    var y$$30 = Math.floor(points[offset$$8 + 1]);
    if (x$$47 < -1 || x$$47 > width$$9 || y$$30 < -1 || y$$30 > height$$8) {
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
  }
  nudged = true;
  offset$$8 = points.Length - 2;
  for (;offset$$8 >= 0 && nudged;offset$$8 -= 2) {
    x$$47 = Math.floor(points[offset$$8]);
    y$$30 = Math.floor(points[offset$$8 + 1]);
    if (x$$47 < -1 || x$$47 > width$$9 || y$$30 < -1 || y$$30 > height$$8) {
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
  }
};
GridSampler.sampleGrid3 = function(image$$3, dimension, transform) {
  var bits = new BitMatrix(dimension);
  var points$$1 = new Array(dimension << 1);
  var y$$31 = 0;
  for (;y$$31 < dimension;y$$31++) {
    var max = points$$1.length;
    var iValue = y$$31 + .5;
    var x$$48 = 0;
    for (;x$$48 < max;x$$48 += 2) {
      points$$1[x$$48] = (x$$48 >> 1) + .5;
      points$$1[x$$48 + 1] = iValue;
    }
    transform.transformPoints1(points$$1);
    GridSampler.checkAndNudgePoints(image$$3, points$$1);
    try {
      x$$48 = 0;
      for (;x$$48 < max;x$$48 += 2) {
        var xpoint = Math.floor(points$$1[x$$48]) * 4 + Math.floor(points$$1[x$$48 + 1]) * qrcode.width * 4;
        var bit = image$$3[Math.floor(points$$1[x$$48]) + qrcode.width * Math.floor(points$$1[x$$48 + 1])];
        qrcode.imagedata.data[xpoint] = bit ? 255 : 0;
        qrcode.imagedata.data[xpoint + 1] = bit ? 255 : 0;
        qrcode.imagedata.data[xpoint + 2] = 0;
        qrcode.imagedata.data[xpoint + 3] = 255;
        if (bit) {
          bits.set_Renamed(x$$48 >> 1, y$$31);
        }
      }
    } catch (aioobe) {
      throw "Error.checkAndNudgePoints";
    }
  }
  return bits;
};
GridSampler.sampleGridx = function(image$$4, dimension$$1, p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY) {
  var transform$$1 = PerspectiveTransform.quadrilateralToQuadrilateral(p1ToX, p1ToY, p2ToX, p2ToY, p3ToX, p3ToY, p4ToX, p4ToY, p1FromX, p1FromY, p2FromX, p2FromY, p3FromX, p3FromY, p4FromX, p4FromY);
  return GridSampler.sampleGrid3(image$$4, dimension$$1, transform$$1);
};
function ECB(count$$3, dataCodewords) {
  this.count = count$$3;
  this.dataCodewords = dataCodewords;
  this.__defineGetter__("Count", function() {
    return this.count;
  });
  this.__defineGetter__("DataCodewords", function() {
    return this.dataCodewords;
  });
}
function ECBlocks(ecCodewordsPerBlock, ecBlocks1, ecBlocks2) {
  this.ecCodewordsPerBlock = ecCodewordsPerBlock;
  if (ecBlocks2) {
    this.ecBlocks = new Array(ecBlocks1, ecBlocks2);
  } else {
    this.ecBlocks = new Array(ecBlocks1);
  }
  this.__defineGetter__("ECCodewordsPerBlock", function() {
    return this.ecCodewordsPerBlock;
  });
  this.__defineGetter__("TotalECCodewords", function() {
    return this.ecCodewordsPerBlock * this.NumBlocks;
  });
  this.__defineGetter__("NumBlocks", function() {
    var total = 0;
    var i$$1 = 0;
    for (;i$$1 < this.ecBlocks.length;i$$1++) {
      total += this.ecBlocks[i$$1].length;
    }
    return total;
  });
  this.getECBlocks = function() {
    return this.ecBlocks;
  };
}
function Version(versionNumber, alignmentPatternCenters, ecBlocks1$$1, ecBlocks2$$1, ecBlocks3, ecBlocks4) {
  this.versionNumber = versionNumber;
  this.alignmentPatternCenters = alignmentPatternCenters;
  this.ecBlocks = new Array(ecBlocks1$$1, ecBlocks2$$1, ecBlocks3, ecBlocks4);
  var total$$1 = 0;
  var ecCodewords = ecBlocks1$$1.ECCodewordsPerBlock;
  var ecbArray = ecBlocks1$$1.getECBlocks();
  var i$$2 = 0;
  for (;i$$2 < ecbArray.length;i$$2++) {
    var ecBlock = ecbArray[i$$2];
    total$$1 += ecBlock.Count * (ecBlock.DataCodewords + ecCodewords);
  }
  this.totalCodewords = total$$1;
  this.__defineGetter__("VersionNumber", function() {
    return this.versionNumber;
  });
  this.__defineGetter__("AlignmentPatternCenters", function() {
    return this.alignmentPatternCenters;
  });
  this.__defineGetter__("TotalCodewords", function() {
    return this.totalCodewords;
  });
  this.__defineGetter__("DimensionForVersion", function() {
    return 17 + 4 * this.versionNumber;
  });
  this.buildFunctionPattern = function() {
    var dimension$$2 = this.DimensionForVersion;
    var bitMatrix = new BitMatrix(dimension$$2);
    bitMatrix.setRegion(0, 0, 9, 9);
    bitMatrix.setRegion(dimension$$2 - 8, 0, 8, 9);
    bitMatrix.setRegion(0, dimension$$2 - 8, 9, 8);
    var max$$1 = this.alignmentPatternCenters.length;
    var x$$49 = 0;
    for (;x$$49 < max$$1;x$$49++) {
      var i$$3 = this.alignmentPatternCenters[x$$49] - 2;
      var y$$32 = 0;
      for (;y$$32 < max$$1;y$$32++) {
        if (x$$49 == 0 && (y$$32 == 0 || y$$32 == max$$1 - 1) || x$$49 == max$$1 - 1 && y$$32 == 0) {
          continue;
        }
        bitMatrix.setRegion(this.alignmentPatternCenters[y$$32] - 2, i$$3, 5, 5);
      }
    }
    bitMatrix.setRegion(6, 9, 1, dimension$$2 - 17);
    bitMatrix.setRegion(9, 6, dimension$$2 - 17, 1);
    if (this.versionNumber > 6) {
      bitMatrix.setRegion(dimension$$2 - 11, 0, 3, 6);
      bitMatrix.setRegion(0, dimension$$2 - 11, 6, 3);
    }
    return bitMatrix;
  };
  this.getECBlocksForLevel = function(ecLevel) {
    return this.ecBlocks[ecLevel.ordinal()];
  };
}
function buildVersions() {
  return new Array(new Version(1, new Array, new ECBlocks(7, new ECB(1, 19)), new ECBlocks(10, new ECB(1, 16)), new ECBlocks(13, new ECB(1, 13)), new ECBlocks(17, new ECB(1, 9))), new Version(2, new Array(6, 18), new ECBlocks(10, new ECB(1, 34)), new ECBlocks(16, new ECB(1, 28)), new ECBlocks(22, new ECB(1, 22)), new ECBlocks(28, new ECB(1, 16))), new Version(3, new Array(6, 22), new ECBlocks(15, new ECB(1, 55)), new ECBlocks(26, new ECB(1, 44)), new ECBlocks(18, new ECB(2, 17)), new ECBlocks(22, 
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
  new ECB(40, 47), new ECB(7, 48)), new ECBlocks(30, new ECB(43, 24), new ECB(22, 25)), new ECBlocks(30, new ECB(10, 15), new ECB(67, 16))), new Version(40, new Array(6, 30, 58, 86, 114, 142, 170), new ECBlocks(30, new ECB(19, 118), new ECB(6, 119)), new ECBlocks(28, new ECB(18, 47), new ECB(31, 48)), new ECBlocks(30, new ECB(34, 24), new ECB(34, 25)), new ECBlocks(30, new ECB(20, 15), new ECB(61, 16))));
}
Version.VERSION_DECODE_INFO = new Array(31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017);
Version.VERSIONS = buildVersions();
Version.getVersionForNumber = function(versionNumber$$1) {
  if (versionNumber$$1 < 1 || versionNumber$$1 > 40) {
    throw "ArgumentException";
  }
  return Version.VERSIONS[versionNumber$$1 - 1];
};
Version.getProvisionalVersionForDimension = function(dimension$$3) {
  if (dimension$$3 % 4 != 1) {
    throw "Error getProvisionalVersionForDimension";
  }
  try {
    return Version.getVersionForNumber(dimension$$3 - 17 >> 2);
  } catch (iae) {
    throw "Error getVersionForNumber";
  }
};
Version.decodeVersionInformation = function(versionBits) {
  var bestDifference = 4294967295;
  var bestVersion = 0;
  var i$$4 = 0;
  for (;i$$4 < Version.VERSION_DECODE_INFO.length;i$$4++) {
    var targetVersion = Version.VERSION_DECODE_INFO[i$$4];
    if (targetVersion == versionBits) {
      return this.getVersionForNumber(i$$4 + 7);
    }
    var bitsDifference = FormatInformation.numBitsDiffering(versionBits, targetVersion);
    if (bitsDifference < bestDifference) {
      bestVersion = i$$4 + 7;
      bestDifference = bitsDifference;
    }
  }
  if (bestDifference <= 3) {
    return this.getVersionForNumber(bestVersion);
  }
  return null;
};
function PerspectiveTransform(a11, a21, a31, a12, a22, a32, a13$$1, a23$$1, a33) {
  this.a11 = a11;
  this.a12 = a12;
  this.a13 = a13$$1;
  this.a21 = a21;
  this.a22 = a22;
  this.a23 = a23$$1;
  this.a31 = a31;
  this.a32 = a32;
  this.a33 = a33;
  this.transformPoints1 = function(points$$2) {
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
    for (;i$$5 < max$$2;i$$5 += 2) {
      var x$$50 = points$$2[i$$5];
      var y$$33 = points$$2[i$$5 + 1];
      var denominator$$1 = a13$$2 * x$$50 + a23$$2 * y$$33 + a33$$1;
      points$$2[i$$5] = (a11$$1 * x$$50 + a21$$1 * y$$33 + a31$$1) / denominator$$1;
      points$$2[i$$5 + 1] = (a12$$1 * x$$50 + a22$$1 * y$$33 + a32$$1) / denominator$$1;
    }
  };
  this.transformPoints2 = function(xValues, yValues) {
    var n$$1 = xValues.length;
    var i$$6 = 0;
    for (;i$$6 < n$$1;i$$6++) {
      var x$$51 = xValues[i$$6];
      var y$$34 = yValues[i$$6];
      var denominator$$2 = this.a13 * x$$51 + this.a23 * y$$34 + this.a33;
      xValues[i$$6] = (this.a11 * x$$51 + this.a21 * y$$34 + this.a31) / denominator$$2;
      yValues[i$$6] = (this.a12 * x$$51 + this.a22 * y$$34 + this.a32) / denominator$$2;
    }
  };
  this.buildAdjoint = function() {
    return new PerspectiveTransform(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21);
  };
  this.times = function(other$$4) {
    return new PerspectiveTransform(this.a11 * other$$4.a11 + this.a21 * other$$4.a12 + this.a31 * other$$4.a13, this.a11 * other$$4.a21 + this.a21 * other$$4.a22 + this.a31 * other$$4.a23, this.a11 * other$$4.a31 + this.a21 * other$$4.a32 + this.a31 * other$$4.a33, this.a12 * other$$4.a11 + this.a22 * other$$4.a12 + this.a32 * other$$4.a13, this.a12 * other$$4.a21 + this.a22 * other$$4.a22 + this.a32 * other$$4.a23, this.a12 * other$$4.a31 + this.a22 * other$$4.a32 + this.a32 * other$$4.a33, this.a13 * 
    other$$4.a11 + this.a23 * other$$4.a12 + this.a33 * other$$4.a13, this.a13 * other$$4.a21 + this.a23 * other$$4.a22 + this.a33 * other$$4.a23, this.a13 * other$$4.a31 + this.a23 * other$$4.a32 + this.a33 * other$$4.a33);
  };
}
PerspectiveTransform.quadrilateralToQuadrilateral = function(x0$$2, y0$$2, x1$$3, y1$$3, x2$$1, y2$$1, x3, y3, x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p) {
  var qToS = this.quadrilateralToSquare(x0$$2, y0$$2, x1$$3, y1$$3, x2$$1, y2$$1, x3, y3);
  var sToQ = this.squareToQuadrilateral(x0p, y0p, x1p, y1p, x2p, y2p, x3p, y3p);
  return sToQ.times(qToS);
};
PerspectiveTransform.squareToQuadrilateral = function(x0$$3, y0$$3, x1$$4, y1$$4, x2$$2, y2$$2, x3$$1, y3$$1) {
  dy2 = y3$$1 - y2$$2;
  dy3 = y0$$3 - y1$$4 + y2$$2 - y3$$1;
  if (dy2 == 0 && dy3 == 0) {
    return new PerspectiveTransform(x1$$4 - x0$$3, x2$$2 - x1$$4, x0$$3, y1$$4 - y0$$3, y2$$2 - y1$$4, y0$$3, 0, 0, 1);
  } else {
    dx1 = x1$$4 - x2$$2;
    dx2 = x3$$1 - x2$$2;
    dx3 = x0$$3 - x1$$4 + x2$$2 - x3$$1;
    dy1 = y1$$4 - y2$$2;
    denominator = dx1 * dy2 - dx2 * dy1;
    a13 = (dx3 * dy2 - dx2 * dy3) / denominator;
    a23 = (dx1 * dy3 - dx3 * dy1) / denominator;
    return new PerspectiveTransform(x1$$4 - x0$$3 + a13 * x1$$4, x3$$1 - x0$$3 + a23 * x3$$1, x0$$3, y1$$4 - y0$$3 + a13 * y1$$4, y3$$1 - y0$$3 + a23 * y3$$1, y0$$3, a13, a23, 1);
  }
};
PerspectiveTransform.quadrilateralToSquare = function(x0$$4, y0$$4, x1$$5, y1$$5, x2$$3, y2$$3, x3$$2, y3$$2) {
  return this.squareToQuadrilateral(x0$$4, y0$$4, x1$$5, y1$$5, x2$$3, y2$$3, x3$$2, y3$$2).buildAdjoint();
};
function DetectorResult(bits$$1, points$$3) {
  this.bits = bits$$1;
  this.points = points$$3;
}
function Detector(image$$5) {
  this.image = image$$5;
  this.resultPointCallback = null;
  this.sizeOfBlackWhiteBlackRun = function(fromX, fromY, toX, toY) {
    var steep = Math.abs(toY - fromY) > Math.abs(toX - fromX);
    if (steep) {
      var temp = fromX;
      fromX = fromY;
      fromY = temp;
      temp = toX;
      toX = toY;
      toY = temp;
    }
    var dx$$4 = Math.abs(toX - fromX);
    var dy$$4 = Math.abs(toY - fromY);
    var error$$1 = -dx$$4 >> 1;
    var ystep = fromY < toY ? 1 : -1;
    var xstep = fromX < toX ? 1 : -1;
    var state = 0;
    var x$$52 = fromX;
    var y$$35 = fromY;
    for (;x$$52 != toX;x$$52 += xstep) {
      var realX = steep ? y$$35 : x$$52;
      var realY = steep ? x$$52 : y$$35;
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
        return Math.sqrt(diffX * diffX + diffY * diffY);
      }
      error$$1 += dy$$4;
      if (error$$1 > 0) {
        if (y$$35 == toY) {
          break;
        }
        y$$35 += ystep;
        error$$1 -= dx$$4;
      }
    }
    var diffX2 = toX - fromX;
    var diffY2 = toY - fromY;
    return Math.sqrt(diffX2 * diffX2 + diffY2 * diffY2);
  };
  this.sizeOfBlackWhiteBlackRunBothWays = function(fromX$$1, fromY$$1, toX$$1, toY$$1) {
    var result = this.sizeOfBlackWhiteBlackRun(fromX$$1, fromY$$1, toX$$1, toY$$1);
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
    var otherToY = Math.floor(fromY$$1 - (toY$$1 - fromY$$1) * scale);
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
    otherToX = Math.floor(fromX$$1 + (otherToX - fromX$$1) * scale);
    result += this.sizeOfBlackWhiteBlackRun(fromX$$1, fromY$$1, otherToX, otherToY);
    return result - 1;
  };
  this.calculateModuleSizeOneWay = function(pattern$$1, otherPattern) {
    var moduleSizeEst1 = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(pattern$$1.X), Math.floor(pattern$$1.Y), Math.floor(otherPattern.X), Math.floor(otherPattern.Y));
    var moduleSizeEst2 = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(otherPattern.X), Math.floor(otherPattern.Y), Math.floor(pattern$$1.X), Math.floor(pattern$$1.Y));
    if (isNaN(moduleSizeEst1)) {
      return moduleSizeEst2 / 7;
    }
    if (isNaN(moduleSizeEst2)) {
      return moduleSizeEst1 / 7;
    }
    return(moduleSizeEst1 + moduleSizeEst2) / 14;
  };
  this.calculateModuleSize = function(topLeft, topRight, bottomLeft) {
    return(this.calculateModuleSizeOneWay(topLeft, topRight) + this.calculateModuleSizeOneWay(topLeft, bottomLeft)) / 2;
  };
  this.distance = function(pattern1, pattern2) {
    xDiff = pattern1.X - pattern2.X;
    yDiff = pattern1.Y - pattern2.Y;
    return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
  };
  this.computeDimension = function(topLeft$$1, topRight$$1, bottomLeft$$1, moduleSize) {
    var tltrCentersDimension = Math.round(this.distance(topLeft$$1, topRight$$1) / moduleSize);
    var tlblCentersDimension = Math.round(this.distance(topLeft$$1, bottomLeft$$1) / moduleSize);
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
  };
  this.findAlignmentInRegion = function(overallEstModuleSize, estAlignmentX, estAlignmentY, allowanceFactor) {
    var allowance = Math.floor(allowanceFactor * overallEstModuleSize);
    var alignmentAreaLeftX = Math.max(0, estAlignmentX - allowance);
    var alignmentAreaRightX = Math.min(qrcode.width - 1, estAlignmentX + allowance);
    if (alignmentAreaRightX - alignmentAreaLeftX < overallEstModuleSize * 3) {
      throw "Error";
    }
    var alignmentAreaTopY = Math.max(0, estAlignmentY - allowance);
    var alignmentAreaBottomY = Math.min(qrcode.height - 1, estAlignmentY + allowance);
    var alignmentFinder = new AlignmentPatternFinder(this.image, alignmentAreaLeftX, alignmentAreaTopY, alignmentAreaRightX - alignmentAreaLeftX, alignmentAreaBottomY - alignmentAreaTopY, overallEstModuleSize, this.resultPointCallback);
    return alignmentFinder.find();
  };
  this.createTransform = function(topLeft$$2, topRight$$2, bottomLeft$$2, alignmentPattern, dimension$$5) {
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
    var transform$$2 = PerspectiveTransform.quadrilateralToQuadrilateral(3.5, 3.5, dimMinusThree, 3.5, sourceBottomRightX, sourceBottomRightY, 3.5, dimMinusThree, topLeft$$2.X, topLeft$$2.Y, topRight$$2.X, topRight$$2.Y, bottomRightX, bottomRightY, bottomLeft$$2.X, bottomLeft$$2.Y);
    return transform$$2;
  };
  this.sampleGrid = function(image$$6, transform$$3, dimension$$6) {
    var sampler = GridSampler;
    return sampler.sampleGrid3(image$$6, dimension$$6, transform$$3);
  };
  this.processFinderPatternInfo = function(info) {
    var topLeft$$3 = info.TopLeft;
    var topRight$$3 = info.TopRight;
    var bottomLeft$$3 = info.BottomLeft;
    var moduleSize$$1 = this.calculateModuleSize(topLeft$$3, topRight$$3, bottomLeft$$3);
    if (moduleSize$$1 < 1) {
      throw "Error";
    }
    var dimension$$7 = this.computeDimension(topLeft$$3, topRight$$3, bottomLeft$$3, moduleSize$$1);
    var provisionalVersion = Version.getProvisionalVersionForDimension(dimension$$7);
    var modulesBetweenFPCenters = provisionalVersion.DimensionForVersion - 7;
    var alignmentPattern$$1 = null;
    if (provisionalVersion.AlignmentPatternCenters.length > 0) {
      var bottomRightX$$1 = topRight$$3.X - topLeft$$3.X + bottomLeft$$3.X;
      var bottomRightY$$1 = topRight$$3.Y - topLeft$$3.Y + bottomLeft$$3.Y;
      var correctionToTopLeft = 1 - 3 / modulesBetweenFPCenters;
      var estAlignmentX$$1 = Math.floor(topLeft$$3.X + correctionToTopLeft * (bottomRightX$$1 - topLeft$$3.X));
      var estAlignmentY$$1 = Math.floor(topLeft$$3.Y + correctionToTopLeft * (bottomRightY$$1 - topLeft$$3.Y));
      var i$$7 = 4;
      for (;i$$7 <= 16;i$$7 <<= 1) {
        alignmentPattern$$1 = this.findAlignmentInRegion(moduleSize$$1, estAlignmentX$$1, estAlignmentY$$1, i$$7);
        break;
      }
    }
    var transform$$4 = this.createTransform(topLeft$$3, topRight$$3, bottomLeft$$3, alignmentPattern$$1, dimension$$7);
    var bits$$2 = this.sampleGrid(this.image, transform$$4, dimension$$7);
    var points$$4;
    if (alignmentPattern$$1 == null) {
      points$$4 = new Array(bottomLeft$$3, topLeft$$3, topRight$$3);
    } else {
      points$$4 = new Array(bottomLeft$$3, topLeft$$3, topRight$$3, alignmentPattern$$1);
    }
    return new DetectorResult(bits$$2, points$$4);
  };
  this.detect = function() {
    var info$$1 = (new FinderPatternFinder).findFinderPattern(this.image);
    return this.processFinderPatternInfo(info$$1);
  };
}
var FORMAT_INFO_MASK_QR = 21522;
var FORMAT_INFO_DECODE_LOOKUP = new Array(new Array(21522, 0), new Array(20773, 1), new Array(24188, 2), new Array(23371, 3), new Array(17913, 4), new Array(16590, 5), new Array(20375, 6), new Array(19104, 7), new Array(30660, 8), new Array(29427, 9), new Array(32170, 10), new Array(30877, 11), new Array(26159, 12), new Array(25368, 13), new Array(27713, 14), new Array(26998, 15), new Array(5769, 16), new Array(5054, 17), new Array(7399, 18), new Array(6608, 19), new Array(1890, 20), new Array(597, 
21), new Array(3340, 22), new Array(2107, 23), new Array(13663, 24), new Array(12392, 25), new Array(16177, 26), new Array(14854, 27), new Array(9396, 28), new Array(8579, 29), new Array(11994, 30), new Array(11245, 31));
var BITS_SET_IN_HALF_BYTE = new Array(0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4);
function FormatInformation(formatInfo) {
  this.errorCorrectionLevel = ErrorCorrectionLevel.forBits(formatInfo >> 3 & 3);
  this.dataMask = formatInfo & 7;
  this.__defineGetter__("ErrorCorrectionLevel", function() {
    return this.errorCorrectionLevel;
  });
  this.__defineGetter__("DataMask", function() {
    return this.dataMask;
  });
  this.GetHashCode = function() {
    return this.errorCorrectionLevel.ordinal() << 3 | dataMask;
  };
  this.Equals = function(o) {
    var other$$5 = o;
    return this.errorCorrectionLevel == other$$5.errorCorrectionLevel && this.dataMask == other$$5.dataMask;
  };
}
FormatInformation.numBitsDiffering = function(a, b$$1) {
  a ^= b$$1;
  return BITS_SET_IN_HALF_BYTE[a & 15] + BITS_SET_IN_HALF_BYTE[URShift(a, 4) & 15] + BITS_SET_IN_HALF_BYTE[URShift(a, 8) & 15] + BITS_SET_IN_HALF_BYTE[URShift(a, 12) & 15] + BITS_SET_IN_HALF_BYTE[URShift(a, 16) & 15] + BITS_SET_IN_HALF_BYTE[URShift(a, 20) & 15] + BITS_SET_IN_HALF_BYTE[URShift(a, 24) & 15] + BITS_SET_IN_HALF_BYTE[URShift(a, 28) & 15];
};
FormatInformation.decodeFormatInformation = function(maskedFormatInfo) {
  var formatInfo$$1 = FormatInformation.doDecodeFormatInformation(maskedFormatInfo);
  if (formatInfo$$1 != null) {
    return formatInfo$$1;
  }
  return FormatInformation.doDecodeFormatInformation(maskedFormatInfo ^ FORMAT_INFO_MASK_QR);
};
FormatInformation.doDecodeFormatInformation = function(maskedFormatInfo$$1) {
  var bestDifference$$1 = 4294967295;
  var bestFormatInfo = 0;
  var i$$8 = 0;
  for (;i$$8 < FORMAT_INFO_DECODE_LOOKUP.length;i$$8++) {
    var decodeInfo = FORMAT_INFO_DECODE_LOOKUP[i$$8];
    var targetInfo = decodeInfo[0];
    if (targetInfo == maskedFormatInfo$$1) {
      return new FormatInformation(decodeInfo[1]);
    }
    var bitsDifference$$1 = this.numBitsDiffering(maskedFormatInfo$$1, targetInfo);
    if (bitsDifference$$1 < bestDifference$$1) {
      bestFormatInfo = decodeInfo[1];
      bestDifference$$1 = bitsDifference$$1;
    }
  }
  if (bestDifference$$1 <= 3) {
    return new FormatInformation(bestFormatInfo);
  }
  return null;
};
function ErrorCorrectionLevel(ordinal, bits$$3, name$$30) {
  this.ordinal_Renamed_Field = ordinal;
  this.bits = bits$$3;
  this.name = name$$30;
  this.__defineGetter__("Bits", function() {
    return this.bits;
  });
  this.__defineGetter__("Name", function() {
    return this.name;
  });
  this.ordinal = function() {
    return this.ordinal_Renamed_Field;
  };
}
ErrorCorrectionLevel.forBits = function(bits$$4) {
  if (bits$$4 < 0 || bits$$4 >= FOR_BITS.Length) {
    throw "ArgumentException";
  }
  return FOR_BITS[bits$$4];
};
var L = new ErrorCorrectionLevel(0, 1, "L");
var M = new ErrorCorrectionLevel(1, 0, "M");
var Q = new ErrorCorrectionLevel(2, 3, "Q");
var H = new ErrorCorrectionLevel(3, 2, "H");
var FOR_BITS = new Array(M, L, H, Q);
function BitMatrix(width$$10, height$$9) {
  if (!height$$9) {
    height$$9 = width$$10;
  }
  if (width$$10 < 1 || height$$9 < 1) {
    throw "Both dimensions must be greater than 0";
  }
  this.width = width$$10;
  this.height = height$$9;
  var rowSize = width$$10 >> 5;
  if ((width$$10 & 31) != 0) {
    rowSize++;
  }
  this.rowSize = rowSize;
  this.bits = new Array(rowSize * height$$9);
  var i$$9 = 0;
  for (;i$$9 < this.bits.length;i$$9++) {
    this.bits[i$$9] = 0;
  }
  this.__defineGetter__("Width", function() {
    return this.width;
  });
  this.__defineGetter__("Height", function() {
    return this.height;
  });
  this.__defineGetter__("Dimension", function() {
    if (this.width != this.height) {
      throw "Can't call getDimension() on a non-square matrix";
    }
    return this.width;
  });
  this.get_Renamed = function(x$$53, y$$36) {
    var offset$$9 = y$$36 * this.rowSize + (x$$53 >> 5);
    return(URShift(this.bits[offset$$9], x$$53 & 31) & 1) != 0;
  };
  this.set_Renamed = function(x$$54, y$$37) {
    var offset$$10 = y$$37 * this.rowSize + (x$$54 >> 5);
    this.bits[offset$$10] |= 1 << (x$$54 & 31);
  };
  this.flip = function(x$$55, y$$38) {
    var offset$$11 = y$$38 * this.rowSize + (x$$55 >> 5);
    this.bits[offset$$11] ^= 1 << (x$$55 & 31);
  };
  this.clear = function() {
    var max$$3 = this.bits.length;
    var i$$10 = 0;
    for (;i$$10 < max$$3;i$$10++) {
      this.bits[i$$10] = 0;
    }
  };
  this.setRegion = function(left$$1, top$$1, width$$11, height$$10) {
    if (top$$1 < 0 || left$$1 < 0) {
      throw "Left and top must be nonnegative";
    }
    if (height$$10 < 1 || width$$11 < 1) {
      throw "Height and width must be at least 1";
    }
    var right$$1 = left$$1 + width$$11;
    var bottom = top$$1 + height$$10;
    if (bottom > this.height || right$$1 > this.width) {
      throw "The region must fit inside the matrix";
    }
    var y$$39 = top$$1;
    for (;y$$39 < bottom;y$$39++) {
      var offset$$12 = y$$39 * this.rowSize;
      var x$$56 = left$$1;
      for (;x$$56 < right$$1;x$$56++) {
        this.bits[offset$$12 + (x$$56 >> 5)] |= 1 << (x$$56 & 31);
      }
    }
  };
}
function DataBlock(numDataCodewords, codewords) {
  this.numDataCodewords = numDataCodewords;
  this.codewords = codewords;
  this.__defineGetter__("NumDataCodewords", function() {
    return this.numDataCodewords;
  });
  this.__defineGetter__("Codewords", function() {
    return this.codewords;
  });
}
DataBlock.getDataBlocks = function(rawCodewords, version$$5, ecLevel$$1) {
  if (rawCodewords.length != version$$5.TotalCodewords) {
    throw "ArgumentException";
  }
  var ecBlocks = version$$5.getECBlocksForLevel(ecLevel$$1);
  var totalBlocks = 0;
  var ecBlockArray = ecBlocks.getECBlocks();
  var i$$11 = 0;
  for (;i$$11 < ecBlockArray.length;i$$11++) {
    totalBlocks += ecBlockArray[i$$11].Count;
  }
  var result$$1 = new Array(totalBlocks);
  var numResultBlocks = 0;
  var j = 0;
  for (;j < ecBlockArray.length;j++) {
    var ecBlock$$1 = ecBlockArray[j];
    i$$11 = 0;
    for (;i$$11 < ecBlock$$1.Count;i$$11++) {
      var numDataCodewords$$1 = ecBlock$$1.DataCodewords;
      var numBlockCodewords = ecBlocks.ECCodewordsPerBlock + numDataCodewords$$1;
      result$$1[numResultBlocks++] = new DataBlock(numDataCodewords$$1, new Array(numBlockCodewords));
    }
  }
  var shorterBlocksTotalCodewords = result$$1[0].codewords.length;
  var longerBlocksStartAt = result$$1.length - 1;
  for (;longerBlocksStartAt >= 0;) {
    var numCodewords = result$$1[longerBlocksStartAt].codewords.length;
    if (numCodewords == shorterBlocksTotalCodewords) {
      break;
    }
    longerBlocksStartAt--;
  }
  longerBlocksStartAt++;
  var shorterBlocksNumDataCodewords = shorterBlocksTotalCodewords - ecBlocks.ECCodewordsPerBlock;
  var rawCodewordsOffset = 0;
  i$$11 = 0;
  for (;i$$11 < shorterBlocksNumDataCodewords;i$$11++) {
    j = 0;
    for (;j < numResultBlocks;j++) {
      result$$1[j].codewords[i$$11] = rawCodewords[rawCodewordsOffset++];
    }
  }
  j = longerBlocksStartAt;
  for (;j < numResultBlocks;j++) {
    result$$1[j].codewords[shorterBlocksNumDataCodewords] = rawCodewords[rawCodewordsOffset++];
  }
  var max$$4 = result$$1[0].codewords.length;
  i$$11 = shorterBlocksNumDataCodewords;
  for (;i$$11 < max$$4;i$$11++) {
    j = 0;
    for (;j < numResultBlocks;j++) {
      var iOffset = j < longerBlocksStartAt ? i$$11 : i$$11 + 1;
      result$$1[j].codewords[iOffset] = rawCodewords[rawCodewordsOffset++];
    }
  }
  return result$$1;
};
function BitMatrixParser(bitMatrix$$1) {
  var dimension$$8 = bitMatrix$$1.Dimension;
  if (dimension$$8 < 21 || (dimension$$8 & 3) != 1) {
    throw "Error BitMatrixParser";
  }
  this.bitMatrix = bitMatrix$$1;
  this.parsedVersion = null;
  this.parsedFormatInfo = null;
  this.copyBit = function(i$$12, j$$1, versionBits$$1) {
    return this.bitMatrix.get_Renamed(i$$12, j$$1) ? versionBits$$1 << 1 | 1 : versionBits$$1 << 1;
  };
  this.readFormatInformation = function() {
    if (this.parsedFormatInfo != null) {
      return this.parsedFormatInfo;
    }
    var formatInfoBits = 0;
    var i$$13 = 0;
    for (;i$$13 < 6;i$$13++) {
      formatInfoBits = this.copyBit(i$$13, 8, formatInfoBits);
    }
    formatInfoBits = this.copyBit(7, 8, formatInfoBits);
    formatInfoBits = this.copyBit(8, 8, formatInfoBits);
    formatInfoBits = this.copyBit(8, 7, formatInfoBits);
    var j$$2 = 5;
    for (;j$$2 >= 0;j$$2--) {
      formatInfoBits = this.copyBit(8, j$$2, formatInfoBits);
    }
    this.parsedFormatInfo = FormatInformation.decodeFormatInformation(formatInfoBits);
    if (this.parsedFormatInfo != null) {
      return this.parsedFormatInfo;
    }
    var dimension$$9 = this.bitMatrix.Dimension;
    formatInfoBits = 0;
    var iMin = dimension$$9 - 8;
    i$$13 = dimension$$9 - 1;
    for (;i$$13 >= iMin;i$$13--) {
      formatInfoBits = this.copyBit(i$$13, 8, formatInfoBits);
    }
    j$$2 = dimension$$9 - 7;
    for (;j$$2 < dimension$$9;j$$2++) {
      formatInfoBits = this.copyBit(8, j$$2, formatInfoBits);
    }
    this.parsedFormatInfo = FormatInformation.decodeFormatInformation(formatInfoBits);
    if (this.parsedFormatInfo != null) {
      return this.parsedFormatInfo;
    }
    throw "Error readFormatInformation";
  };
  this.readVersion = function() {
    if (this.parsedVersion != null) {
      return this.parsedVersion;
    }
    var dimension$$10 = this.bitMatrix.Dimension;
    var provisionalVersion$$1 = dimension$$10 - 17 >> 2;
    if (provisionalVersion$$1 <= 6) {
      return Version.getVersionForNumber(provisionalVersion$$1);
    }
    var versionBits$$2 = 0;
    var ijMin = dimension$$10 - 11;
    var j$$3 = 5;
    for (;j$$3 >= 0;j$$3--) {
      var i$$14 = dimension$$10 - 9;
      for (;i$$14 >= ijMin;i$$14--) {
        versionBits$$2 = this.copyBit(i$$14, j$$3, versionBits$$2);
      }
    }
    this.parsedVersion = Version.decodeVersionInformation(versionBits$$2);
    if (this.parsedVersion != null && this.parsedVersion.DimensionForVersion == dimension$$10) {
      return this.parsedVersion;
    }
    versionBits$$2 = 0;
    i$$14 = 5;
    for (;i$$14 >= 0;i$$14--) {
      j$$3 = dimension$$10 - 9;
      for (;j$$3 >= ijMin;j$$3--) {
        versionBits$$2 = this.copyBit(i$$14, j$$3, versionBits$$2);
      }
    }
    this.parsedVersion = Version.decodeVersionInformation(versionBits$$2);
    if (this.parsedVersion != null && this.parsedVersion.DimensionForVersion == dimension$$10) {
      return this.parsedVersion;
    }
    throw "Error readVersion";
  };
  this.readCodewords = function() {
    var formatInfo$$2 = this.readFormatInformation();
    var version$$6 = this.readVersion();
    var dataMask$$1 = DataMask.forReference(formatInfo$$2.DataMask);
    var dimension$$11 = this.bitMatrix.Dimension;
    dataMask$$1.unmaskBitMatrix(this.bitMatrix, dimension$$11);
    var functionPattern = version$$6.buildFunctionPattern();
    var readingUp = true;
    var result$$2 = new Array(version$$6.TotalCodewords);
    var resultOffset = 0;
    var currentByte = 0;
    var bitsRead = 0;
    var j$$4 = dimension$$11 - 1;
    for (;j$$4 > 0;j$$4 -= 2) {
      if (j$$4 == 6) {
        j$$4--;
      }
      var count$$4 = 0;
      for (;count$$4 < dimension$$11;count$$4++) {
        var i$$15 = readingUp ? dimension$$11 - 1 - count$$4 : count$$4;
        var col = 0;
        for (;col < 2;col++) {
          if (!functionPattern.get_Renamed(j$$4 - col, i$$15)) {
            bitsRead++;
            currentByte <<= 1;
            if (this.bitMatrix.get_Renamed(j$$4 - col, i$$15)) {
              currentByte |= 1;
            }
            if (bitsRead == 8) {
              result$$2[resultOffset++] = currentByte;
              bitsRead = 0;
              currentByte = 0;
            }
          }
        }
      }
      readingUp ^= true;
    }
    if (resultOffset != version$$6.TotalCodewords) {
      throw "Error readCodewords";
    }
    return result$$2;
  };
}
DataMask = {};
DataMask.forReference = function(reference) {
  if (reference < 0 || reference > 7) {
    throw "System.ArgumentException";
  }
  return DataMask.DATA_MASKS[reference];
};
function DataMask000() {
  this.unmaskBitMatrix = function(bits$$5, dimension$$12) {
    var i$$16 = 0;
    for (;i$$16 < dimension$$12;i$$16++) {
      var j$$5 = 0;
      for (;j$$5 < dimension$$12;j$$5++) {
        if (this.isMasked(i$$16, j$$5)) {
          bits$$5.flip(j$$5, i$$16);
        }
      }
    }
  };
  this.isMasked = function(i$$17, j$$6) {
    return(i$$17 + j$$6 & 1) == 0;
  };
}
function DataMask001() {
  this.unmaskBitMatrix = function(bits$$6, dimension$$13) {
    var i$$18 = 0;
    for (;i$$18 < dimension$$13;i$$18++) {
      var j$$7 = 0;
      for (;j$$7 < dimension$$13;j$$7++) {
        if (this.isMasked(i$$18, j$$7)) {
          bits$$6.flip(j$$7, i$$18);
        }
      }
    }
  };
  this.isMasked = function(i$$19, j$$8) {
    return(i$$19 & 1) == 0;
  };
}
function DataMask010() {
  this.unmaskBitMatrix = function(bits$$7, dimension$$14) {
    var i$$20 = 0;
    for (;i$$20 < dimension$$14;i$$20++) {
      var j$$9 = 0;
      for (;j$$9 < dimension$$14;j$$9++) {
        if (this.isMasked(i$$20, j$$9)) {
          bits$$7.flip(j$$9, i$$20);
        }
      }
    }
  };
  this.isMasked = function(i$$21, j$$10) {
    return j$$10 % 3 == 0;
  };
}
function DataMask011() {
  this.unmaskBitMatrix = function(bits$$8, dimension$$15) {
    var i$$22 = 0;
    for (;i$$22 < dimension$$15;i$$22++) {
      var j$$11 = 0;
      for (;j$$11 < dimension$$15;j$$11++) {
        if (this.isMasked(i$$22, j$$11)) {
          bits$$8.flip(j$$11, i$$22);
        }
      }
    }
  };
  this.isMasked = function(i$$23, j$$12) {
    return(i$$23 + j$$12) % 3 == 0;
  };
}
function DataMask100() {
  this.unmaskBitMatrix = function(bits$$9, dimension$$16) {
    var i$$24 = 0;
    for (;i$$24 < dimension$$16;i$$24++) {
      var j$$13 = 0;
      for (;j$$13 < dimension$$16;j$$13++) {
        if (this.isMasked(i$$24, j$$13)) {
          bits$$9.flip(j$$13, i$$24);
        }
      }
    }
  };
  this.isMasked = function(i$$25, j$$14) {
    return(URShift(i$$25, 1) + j$$14 / 3 & 1) == 0;
  };
}
function DataMask101() {
  this.unmaskBitMatrix = function(bits$$10, dimension$$17) {
    var i$$26 = 0;
    for (;i$$26 < dimension$$17;i$$26++) {
      var j$$15 = 0;
      for (;j$$15 < dimension$$17;j$$15++) {
        if (this.isMasked(i$$26, j$$15)) {
          bits$$10.flip(j$$15, i$$26);
        }
      }
    }
  };
  this.isMasked = function(i$$27, j$$16) {
    var temp$$1 = i$$27 * j$$16;
    return(temp$$1 & 1) + temp$$1 % 3 == 0;
  };
}
function DataMask110() {
  this.unmaskBitMatrix = function(bits$$11, dimension$$18) {
    var i$$28 = 0;
    for (;i$$28 < dimension$$18;i$$28++) {
      var j$$17 = 0;
      for (;j$$17 < dimension$$18;j$$17++) {
        if (this.isMasked(i$$28, j$$17)) {
          bits$$11.flip(j$$17, i$$28);
        }
      }
    }
  };
  this.isMasked = function(i$$29, j$$18) {
    var temp$$2 = i$$29 * j$$18;
    return((temp$$2 & 1) + temp$$2 % 3 & 1) == 0;
  };
}
function DataMask111() {
  this.unmaskBitMatrix = function(bits$$12, dimension$$19) {
    var i$$30 = 0;
    for (;i$$30 < dimension$$19;i$$30++) {
      var j$$19 = 0;
      for (;j$$19 < dimension$$19;j$$19++) {
        if (this.isMasked(i$$30, j$$19)) {
          bits$$12.flip(j$$19, i$$30);
        }
      }
    }
  };
  this.isMasked = function(i$$31, j$$20) {
    return((i$$31 + j$$20 & 1) + i$$31 * j$$20 % 3 & 1) == 0;
  };
}
DataMask.DATA_MASKS = new Array(new DataMask000, new DataMask001, new DataMask010, new DataMask011, new DataMask100, new DataMask101, new DataMask110, new DataMask111);
function ReedSolomonDecoder(field) {
  this.field = field;
  this.decode = function(received, twoS) {
    var poly = new GF256Poly(this.field, received);
    var syndromeCoefficients = new Array(twoS);
    var i$$32 = 0;
    for (;i$$32 < syndromeCoefficients.length;i$$32++) {
      syndromeCoefficients[i$$32] = 0;
    }
    var dataMatrix = false;
    var noError = true;
    i$$32 = 0;
    for (;i$$32 < twoS;i$$32++) {
      var eval$$1 = poly.evaluateAt(this.field.exp(dataMatrix ? i$$32 + 1 : i$$32));
      syndromeCoefficients[syndromeCoefficients.length - 1 - i$$32] = eval$$1;
      if (eval$$1 != 0) {
        noError = false;
      }
    }
    if (noError) {
      return;
    }
    var syndrome = new GF256Poly(this.field, syndromeCoefficients);
    var sigmaOmega = this.runEuclideanAlgorithm(this.field.buildMonomial(twoS, 1), syndrome, twoS);
    var sigma = sigmaOmega[0];
    var omega = sigmaOmega[1];
    var errorLocations = this.findErrorLocations(sigma);
    var errorMagnitudes = this.findErrorMagnitudes(omega, errorLocations, dataMatrix);
    i$$32 = 0;
    for (;i$$32 < errorLocations.length;i$$32++) {
      var position = received.length - 1 - this.field.log(errorLocations[i$$32]);
      if (position < 0) {
        throw "ReedSolomonException Bad error location";
      }
      received[position] = GF256.addOrSubtract(received[position], errorMagnitudes[i$$32]);
    }
  };
  this.runEuclideanAlgorithm = function(a$$1, b$$2, R) {
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
    for (;r$$1.Degree >= Math.floor(R / 2);) {
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
      var denominatorLeadingTerm = rLast.getCoefficient(rLast.Degree);
      var dltInverse = this.field.inverse(denominatorLeadingTerm);
      for (;r$$1.Degree >= rLast.Degree && !r$$1.Zero;) {
        var degreeDiff = r$$1.Degree - rLast.Degree;
        var scale$$1 = this.field.multiply(r$$1.getCoefficient(r$$1.Degree), dltInverse);
        q = q.addOrSubtract(this.field.buildMonomial(degreeDiff, scale$$1));
        r$$1 = r$$1.addOrSubtract(rLast.multiplyByMonomial(degreeDiff, scale$$1));
      }
      s$$2 = q.multiply1(sLast).addOrSubtract(sLastLast);
      t = q.multiply1(tLast).addOrSubtract(tLastLast);
    }
    var sigmaTildeAtZero = t.getCoefficient(0);
    if (sigmaTildeAtZero == 0) {
      throw "ReedSolomonException sigmaTilde(0) was zero";
    }
    var inverse = this.field.inverse(sigmaTildeAtZero);
    var sigma$$1 = t.multiply2(inverse);
    var omega$$1 = r$$1.multiply2(inverse);
    return new Array(sigma$$1, omega$$1);
  };
  this.findErrorLocations = function(errorLocator) {
    var numErrors = errorLocator.Degree;
    if (numErrors == 1) {
      return new Array(errorLocator.getCoefficient(1));
    }
    var result$$3 = new Array(numErrors);
    var e$$4 = 0;
    var i$$33 = 1;
    for (;i$$33 < 256 && e$$4 < numErrors;i$$33++) {
      if (errorLocator.evaluateAt(i$$33) == 0) {
        result$$3[e$$4] = this.field.inverse(i$$33);
        e$$4++;
      }
    }
    if (e$$4 != numErrors) {
      throw "Error locator degree does not match number of roots";
    }
    return result$$3;
  };
  this.findErrorMagnitudes = function(errorEvaluator, errorLocations$$1, dataMatrix$$1) {
    var s$$3 = errorLocations$$1.length;
    var result$$4 = new Array(s$$3);
    var i$$34 = 0;
    for (;i$$34 < s$$3;i$$34++) {
      var xiInverse = this.field.inverse(errorLocations$$1[i$$34]);
      var denominator$$3 = 1;
      var j$$21 = 0;
      for (;j$$21 < s$$3;j$$21++) {
        if (i$$34 != j$$21) {
          denominator$$3 = this.field.multiply(denominator$$3, GF256.addOrSubtract(1, this.field.multiply(errorLocations$$1[j$$21], xiInverse)));
        }
      }
      result$$4[i$$34] = this.field.multiply(errorEvaluator.evaluateAt(xiInverse), this.field.inverse(denominator$$3));
      if (dataMatrix$$1) {
        result$$4[i$$34] = this.field.multiply(result$$4[i$$34], xiInverse);
      }
    }
    return result$$4;
  };
}
function GF256Poly(field$$1, coefficients) {
  if (coefficients == null || coefficients.length == 0) {
    throw "System.ArgumentException";
  }
  this.field = field$$1;
  var coefficientsLength = coefficients.length;
  if (coefficientsLength > 1 && coefficients[0] == 0) {
    var firstNonZero = 1;
    for (;firstNonZero < coefficientsLength && coefficients[firstNonZero] == 0;) {
      firstNonZero++;
    }
    if (firstNonZero == coefficientsLength) {
      this.coefficients = field$$1.Zero.coefficients;
    } else {
      this.coefficients = new Array(coefficientsLength - firstNonZero);
      var i$$35 = 0;
      for (;i$$35 < this.coefficients.length;i$$35++) {
        this.coefficients[i$$35] = 0;
      }
      var ci = 0;
      for (;ci < this.coefficients.length;ci++) {
        this.coefficients[ci] = coefficients[firstNonZero + ci];
      }
    }
  } else {
    this.coefficients = coefficients;
  }
  this.__defineGetter__("Zero", function() {
    return this.coefficients[0] == 0;
  });
  this.__defineGetter__("Degree", function() {
    return this.coefficients.length - 1;
  });
  this.__defineGetter__("Coefficients", function() {
    return this.coefficients;
  });
  this.getCoefficient = function(degree) {
    return this.coefficients[this.coefficients.length - 1 - degree];
  };
  this.evaluateAt = function(a$$2) {
    if (a$$2 == 0) {
      return this.getCoefficient(0);
    }
    var size$$4 = this.coefficients.length;
    if (a$$2 == 1) {
      var result$$5 = 0;
      var i$$36 = 0;
      for (;i$$36 < size$$4;i$$36++) {
        result$$5 = GF256.addOrSubtract(result$$5, this.coefficients[i$$36]);
      }
      return result$$5;
    }
    var result2 = this.coefficients[0];
    i$$36 = 1;
    for (;i$$36 < size$$4;i$$36++) {
      result2 = GF256.addOrSubtract(this.field.multiply(a$$2, result2), this.coefficients[i$$36]);
    }
    return result2;
  };
  this.addOrSubtract = function(other$$6) {
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
    for (;ci$$1 < lengthDiff;ci$$1++) {
      sumDiff[ci$$1] = largerCoefficients[ci$$1];
    }
    var i$$37 = lengthDiff;
    for (;i$$37 < largerCoefficients.length;i$$37++) {
      sumDiff[i$$37] = GF256.addOrSubtract(smallerCoefficients[i$$37 - lengthDiff], largerCoefficients[i$$37]);
    }
    return new GF256Poly(field$$1, sumDiff);
  };
  this.multiply1 = function(other$$7) {
    if (this.field != other$$7.field) {
      throw "GF256Polys do not have same GF256 field";
    }
    if (this.Zero || other$$7.Zero) {
      return this.field.Zero;
    }
    var aCoefficients = this.coefficients;
    var aLength = aCoefficients.length;
    var bCoefficients = other$$7.coefficients;
    var bLength = bCoefficients.length;
    var product = new Array(aLength + bLength - 1);
    var i$$38 = 0;
    for (;i$$38 < aLength;i$$38++) {
      var aCoeff = aCoefficients[i$$38];
      var j$$22 = 0;
      for (;j$$22 < bLength;j$$22++) {
        product[i$$38 + j$$22] = GF256.addOrSubtract(product[i$$38 + j$$22], this.field.multiply(aCoeff, bCoefficients[j$$22]));
      }
    }
    return new GF256Poly(this.field, product);
  };
  this.multiply2 = function(scalar) {
    if (scalar == 0) {
      return this.field.Zero;
    }
    if (scalar == 1) {
      return this;
    }
    var size$$5 = this.coefficients.length;
    var product$$1 = new Array(size$$5);
    var i$$39 = 0;
    for (;i$$39 < size$$5;i$$39++) {
      product$$1[i$$39] = this.field.multiply(this.coefficients[i$$39], scalar);
    }
    return new GF256Poly(this.field, product$$1);
  };
  this.multiplyByMonomial = function(degree$$1, coefficient) {
    if (degree$$1 < 0) {
      throw "System.ArgumentException";
    }
    if (coefficient == 0) {
      return this.field.Zero;
    }
    var size$$6 = this.coefficients.length;
    var product$$2 = new Array(size$$6 + degree$$1);
    var i$$40 = 0;
    for (;i$$40 < product$$2.length;i$$40++) {
      product$$2[i$$40] = 0;
    }
    i$$40 = 0;
    for (;i$$40 < size$$6;i$$40++) {
      product$$2[i$$40] = this.field.multiply(this.coefficients[i$$40], coefficient);
    }
    return new GF256Poly(this.field, product$$2);
  };
  this.divide = function(other$$8) {
    if (this.field != other$$8.field) {
      throw "GF256Polys do not have same GF256 field";
    }
    if (other$$8.Zero) {
      throw "Divide by 0";
    }
    var quotient = this.field.Zero;
    var remainder = this;
    var denominatorLeadingTerm$$1 = other$$8.getCoefficient(other$$8.Degree);
    var inverseDenominatorLeadingTerm = this.field.inverse(denominatorLeadingTerm$$1);
    for (;remainder.Degree >= other$$8.Degree && !remainder.Zero;) {
      var degreeDifference = remainder.Degree - other$$8.Degree;
      var scale$$2 = this.field.multiply(remainder.getCoefficient(remainder.Degree), inverseDenominatorLeadingTerm);
      var term = other$$8.multiplyByMonomial(degreeDifference, scale$$2);
      var iterationQuotient = this.field.buildMonomial(degreeDifference, scale$$2);
      quotient = quotient.addOrSubtract(iterationQuotient);
      remainder = remainder.addOrSubtract(term);
    }
    return new Array(quotient, remainder);
  };
}
function GF256(primitive) {
  this.expTable = new Array(256);
  this.logTable = new Array(256);
  var x$$57 = 1;
  var i$$41 = 0;
  for (;i$$41 < 256;i$$41++) {
    this.expTable[i$$41] = x$$57;
    x$$57 <<= 1;
    if (x$$57 >= 256) {
      x$$57 ^= primitive;
    }
  }
  i$$41 = 0;
  for (;i$$41 < 255;i$$41++) {
    this.logTable[this.expTable[i$$41]] = i$$41;
  }
  var at0 = new Array(1);
  at0[0] = 0;
  this.zero = new GF256Poly(this, new Array(at0));
  var at1 = new Array(1);
  at1[0] = 1;
  this.one = new GF256Poly(this, new Array(at1));
  this.__defineGetter__("Zero", function() {
    return this.zero;
  });
  this.__defineGetter__("One", function() {
    return this.one;
  });
  this.buildMonomial = function(degree$$2, coefficient$$1) {
    if (degree$$2 < 0) {
      throw "System.ArgumentException";
    }
    if (coefficient$$1 == 0) {
      return zero;
    }
    var coefficients$$1 = new Array(degree$$2 + 1);
    var i$$42 = 0;
    for (;i$$42 < coefficients$$1.length;i$$42++) {
      coefficients$$1[i$$42] = 0;
    }
    coefficients$$1[0] = coefficient$$1;
    return new GF256Poly(this, coefficients$$1);
  };
  this.exp = function(a$$3) {
    return this.expTable[a$$3];
  };
  this.log = function(a$$4) {
    if (a$$4 == 0) {
      throw "System.ArgumentException";
    }
    return this.logTable[a$$4];
  };
  this.inverse = function(a$$5) {
    if (a$$5 == 0) {
      throw "System.ArithmeticException";
    }
    return this.expTable[255 - this.logTable[a$$5]];
  };
  this.multiply = function(a$$6, b$$3) {
    if (a$$6 == 0 || b$$3 == 0) {
      return 0;
    }
    if (a$$6 == 1) {
      return b$$3;
    }
    if (b$$3 == 1) {
      return a$$6;
    }
    return this.expTable[(this.logTable[a$$6] + this.logTable[b$$3]) % 255];
  };
}
GF256.QR_CODE_FIELD = new GF256(285);
GF256.DATA_MATRIX_FIELD = new GF256(301);
GF256.addOrSubtract = function(a$$7, b$$4) {
  return a$$7 ^ b$$4;
};
Decoder = {};
Decoder.rsDecoder = new ReedSolomonDecoder(GF256.QR_CODE_FIELD);
Decoder.correctErrors = function(codewordBytes, numDataCodewords$$2) {
  var numCodewords$$1 = codewordBytes.length;
  var codewordsInts = new Array(numCodewords$$1);
  var i$$43 = 0;
  for (;i$$43 < numCodewords$$1;i$$43++) {
    codewordsInts[i$$43] = codewordBytes[i$$43] & 255;
  }
  var numECCodewords = codewordBytes.length - numDataCodewords$$2;
  try {
    Decoder.rsDecoder.decode(codewordsInts, numECCodewords);
  } catch (rse) {
    throw rse;
  }
  i$$43 = 0;
  for (;i$$43 < numDataCodewords$$2;i$$43++) {
    codewordBytes[i$$43] = codewordsInts[i$$43];
  }
};
Decoder.decode = function(bits$$13) {
  var parser = new BitMatrixParser(bits$$13);
  var version$$7 = parser.readVersion();
  var ecLevel$$2 = parser.readFormatInformation().ErrorCorrectionLevel;
  var codewords$$1 = parser.readCodewords();
  var dataBlocks = DataBlock.getDataBlocks(codewords$$1, version$$7, ecLevel$$2);
  var totalBytes = 0;
  var i$$44 = 0;
  for (;i$$44 < dataBlocks.Length;i$$44++) {
    totalBytes += dataBlocks[i$$44].NumDataCodewords;
  }
  var resultBytes = new Array(totalBytes);
  var resultOffset$$1 = 0;
  var j$$23 = 0;
  for (;j$$23 < dataBlocks.length;j$$23++) {
    var dataBlock = dataBlocks[j$$23];
    var codewordBytes$$1 = dataBlock.Codewords;
    var numDataCodewords$$3 = dataBlock.NumDataCodewords;
    Decoder.correctErrors(codewordBytes$$1, numDataCodewords$$3);
    i$$44 = 0;
    for (;i$$44 < numDataCodewords$$3;i$$44++) {
      resultBytes[resultOffset$$1++] = codewordBytes$$1[i$$44];
    }
  }
  var reader = new QRCodeDataBlockReader(resultBytes, version$$7.VersionNumber, ecLevel$$2.Bits);
  return reader;
};
qrcode = {};
qrcode.imagedata = null;
qrcode.width = 0;
qrcode.height = 0;
qrcode.qrCodeSymbol = null;
qrcode.debug = false;
qrcode.sizeOfDataLengthInfo = [[10, 9, 8, 8], [12, 11, 16, 10], [14, 13, 16, 12]];
qrcode.callback = null;
qrcode.decode = function(src$$1) {
  if (arguments.length == 0) {
    var canvas_qr = document.getElementById("qr-canvas");
    var context = canvas_qr.getContext("2d");
    qrcode.width = canvas_qr.width;
    qrcode.height = canvas_qr.height;
    qrcode.imagedata = context.getImageData(0, 0, qrcode.width, qrcode.height);
    qrcode.result = qrcode.process(context);
    if (qrcode.callback != null) {
      qrcode.callback(qrcode.result);
    }
    return qrcode.result;
  } else {
    var image$$7 = new Image;
    image$$7.onload = function() {
      var canvas_qr$$1 = document.createElement("canvas");
      var context$$1 = canvas_qr$$1.getContext("2d");
      var canvas_out = document.getElementById("out-canvas");
      if (canvas_out != null) {
        var outctx = canvas_out.getContext("2d");
        outctx.clearRect(0, 0, 320, 240);
        outctx.drawImage(image$$7, 0, 0, 320, 240);
      }
      canvas_qr$$1.width = image$$7.width;
      canvas_qr$$1.height = image$$7.height;
      context$$1.drawImage(image$$7, 0, 0);
      qrcode.width = image$$7.width;
      qrcode.height = image$$7.height;
      try {
        qrcode.imagedata = context$$1.getImageData(0, 0, image$$7.width, image$$7.height);
      } catch (e$$5) {
        qrcode.result = "Cross domain image reading not supported in your browser! Save it to your computer then drag and drop the file!";
        if (qrcode.callback != null) {
          qrcode.callback(qrcode.result);
        }
        return;
      }
      try {
        qrcode.result = qrcode.process(context$$1);
      } catch (e$$6) {
        console.log(e$$6);
        qrcode.result = "error decoding QR Code";
      }
      if (qrcode.callback != null) {
        qrcode.callback(qrcode.result);
      }
    };
    image$$7.src = src$$1;
  }
};
qrcode.decode_utf8 = function(s$$4) {
  return decodeURIComponent(escape(s$$4));
};
qrcode.process = function(ctx) {
  var start$$4 = (new Date).getTime();
  var image$$8 = qrcode.grayScaleToBitmap(qrcode.grayscale());
  if (qrcode.debug) {
    var y$$40 = 0;
    for (;y$$40 < qrcode.height;y$$40++) {
      var x$$58 = 0;
      for (;x$$58 < qrcode.width;x$$58++) {
        var point = x$$58 * 4 + y$$40 * qrcode.width * 4;
        qrcode.imagedata.data[point] = image$$8[x$$58 + y$$40 * qrcode.width] ? 0 : 0;
        qrcode.imagedata.data[point + 1] = image$$8[x$$58 + y$$40 * qrcode.width] ? 0 : 0;
        qrcode.imagedata.data[point + 2] = image$$8[x$$58 + y$$40 * qrcode.width] ? 255 : 0;
      }
    }
    ctx.putImageData(qrcode.imagedata, 0, 0);
  }
  var detector = new Detector(image$$8);
  var qRCodeMatrix = detector.detect();
  if (qrcode.debug) {
    ctx.putImageData(qrcode.imagedata, 0, 0);
  }
  var reader$$1 = Decoder.decode(qRCodeMatrix.bits);
  var data$$18 = reader$$1.DataByte;
  var str$$6 = "";
  var i$$45 = 0;
  for (;i$$45 < data$$18.length;i$$45++) {
    var j$$24 = 0;
    for (;j$$24 < data$$18[i$$45].length;j$$24++) {
      str$$6 += String.fromCharCode(data$$18[i$$45][j$$24]);
    }
  }
  var end$$1 = (new Date).getTime();
  var time = end$$1 - start$$4;
  console.log(time);
  return qrcode.decode_utf8(str$$6);
};
qrcode.getPixel = function(x$$59, y$$41) {
  if (qrcode.width < x$$59) {
    throw "point error";
  }
  if (qrcode.height < y$$41) {
    throw "point error";
  }
  var point$$1 = x$$59 * 4 + y$$41 * qrcode.width * 4;
  p = (qrcode.imagedata.data[point$$1] * 33 + qrcode.imagedata.data[point$$1 + 1] * 34 + qrcode.imagedata.data[point$$1 + 2] * 33) / 100;
  return p;
};
qrcode.binarize = function(th) {
  var ret = new Array(qrcode.width * qrcode.height);
  var y$$42 = 0;
  for (;y$$42 < qrcode.height;y$$42++) {
    var x$$60 = 0;
    for (;x$$60 < qrcode.width;x$$60++) {
      var gray = qrcode.getPixel(x$$60, y$$42);
      ret[x$$60 + y$$42 * qrcode.width] = gray <= th ? true : false;
    }
  }
  return ret;
};
qrcode.getMiddleBrightnessPerArea = function(image$$9) {
  var numSqrtArea = 4;
  var areaWidth = Math.floor(qrcode.width / numSqrtArea);
  var areaHeight = Math.floor(qrcode.height / numSqrtArea);
  var minmax = new Array(numSqrtArea);
  var i$$46 = 0;
  for (;i$$46 < numSqrtArea;i$$46++) {
    minmax[i$$46] = new Array(numSqrtArea);
    var i2 = 0;
    for (;i2 < numSqrtArea;i2++) {
      minmax[i$$46][i2] = new Array(0, 0);
    }
  }
  var ay = 0;
  for (;ay < numSqrtArea;ay++) {
    var ax = 0;
    for (;ax < numSqrtArea;ax++) {
      minmax[ax][ay][0] = 255;
      var dy$$5 = 0;
      for (;dy$$5 < areaHeight;dy$$5++) {
        var dx$$5 = 0;
        for (;dx$$5 < areaWidth;dx$$5++) {
          var target$$26 = image$$9[areaWidth * ax + dx$$5 + (areaHeight * ay + dy$$5) * qrcode.width];
          if (target$$26 < minmax[ax][ay][0]) {
            minmax[ax][ay][0] = target$$26;
          }
          if (target$$26 > minmax[ax][ay][1]) {
            minmax[ax][ay][1] = target$$26;
          }
        }
      }
    }
  }
  var middle = new Array(numSqrtArea);
  var i3 = 0;
  for (;i3 < numSqrtArea;i3++) {
    middle[i3] = new Array(numSqrtArea);
  }
  ay = 0;
  for (;ay < numSqrtArea;ay++) {
    ax = 0;
    for (;ax < numSqrtArea;ax++) {
      middle[ax][ay] = Math.floor((minmax[ax][ay][0] + minmax[ax][ay][1]) / 2);
    }
  }
  return middle;
};
qrcode.grayScaleToBitmap = function(grayScale) {
  var middle$$1 = qrcode.getMiddleBrightnessPerArea(grayScale);
  var sqrtNumArea = middle$$1.length;
  var areaWidth$$1 = Math.floor(qrcode.width / sqrtNumArea);
  var areaHeight$$1 = Math.floor(qrcode.height / sqrtNumArea);
  var bitmap = new Array(qrcode.height * qrcode.width);
  var ay$$1 = 0;
  for (;ay$$1 < sqrtNumArea;ay$$1++) {
    var ax$$1 = 0;
    for (;ax$$1 < sqrtNumArea;ax$$1++) {
      var dy$$6 = 0;
      for (;dy$$6 < areaHeight$$1;dy$$6++) {
        var dx$$6 = 0;
        for (;dx$$6 < areaWidth$$1;dx$$6++) {
          bitmap[areaWidth$$1 * ax$$1 + dx$$6 + (areaHeight$$1 * ay$$1 + dy$$6) * qrcode.width] = grayScale[areaWidth$$1 * ax$$1 + dx$$6 + (areaHeight$$1 * ay$$1 + dy$$6) * qrcode.width] < middle$$1[ax$$1][ay$$1] ? true : false;
        }
      }
    }
  }
  return bitmap;
};
qrcode.grayscale = function() {
  var ret$$1 = new Array(qrcode.width * qrcode.height);
  var y$$43 = 0;
  for (;y$$43 < qrcode.height;y$$43++) {
    var x$$61 = 0;
    for (;x$$61 < qrcode.width;x$$61++) {
      var gray$$1 = qrcode.getPixel(x$$61, y$$43);
      ret$$1[x$$61 + y$$43 * qrcode.width] = gray$$1;
    }
  }
  return ret$$1;
};
function URShift(number, bits$$14) {
  if (number >= 0) {
    return number >> bits$$14;
  } else {
    return(number >> bits$$14) + (2 << ~bits$$14);
  }
}
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};
var MIN_SKIP = 3;
var MAX_MODULES = 57;
var INTEGER_MATH_SHIFT = 8;
var CENTER_QUORUM = 2;
qrcode.orderBestPatterns = function(patterns) {
  function distance(pattern1$$1, pattern2$$1) {
    xDiff = pattern1$$1.X - pattern2$$1.X;
    yDiff = pattern1$$1.Y - pattern2$$1.Y;
    return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
  }
  function crossProductZ(pointA$$1, pointB$$1, pointC$$1) {
    var bX = pointB$$1.x;
    var bY = pointB$$1.y;
    return(pointC$$1.x - bX) * (pointA$$1.y - bY) - (pointC$$1.y - bY) * (pointA$$1.x - bX);
  }
  var zeroOneDistance = distance(patterns[0], patterns[1]);
  var oneTwoDistance = distance(patterns[1], patterns[2]);
  var zeroTwoDistance = distance(patterns[0], patterns[2]);
  var pointA;
  var pointB;
  var pointC;
  if (oneTwoDistance >= zeroOneDistance && oneTwoDistance >= zeroTwoDistance) {
    pointB = patterns[0];
    pointA = patterns[1];
    pointC = patterns[2];
  } else {
    if (zeroTwoDistance >= oneTwoDistance && zeroTwoDistance >= zeroOneDistance) {
      pointB = patterns[1];
      pointA = patterns[0];
      pointC = patterns[2];
    } else {
      pointB = patterns[2];
      pointA = patterns[0];
      pointC = patterns[1];
    }
  }
  if (crossProductZ(pointA, pointB, pointC) < 0) {
    var temp$$5 = pointA;
    pointA = pointC;
    pointC = temp$$5;
  }
  patterns[0] = pointA;
  patterns[1] = pointB;
  patterns[2] = pointC;
};
function FinderPattern(posX, posY, estimatedModuleSize) {
  this.x = posX;
  this.y = posY;
  this.count = 1;
  this.estimatedModuleSize = estimatedModuleSize;
  this.__defineGetter__("EstimatedModuleSize", function() {
    return this.estimatedModuleSize;
  });
  this.__defineGetter__("Count", function() {
    return this.count;
  });
  this.__defineGetter__("X", function() {
    return this.x;
  });
  this.__defineGetter__("Y", function() {
    return this.y;
  });
  this.incrementCount = function() {
    this.count++;
  };
  this.aboutEquals = function(moduleSize$$2, i$$47, j$$25) {
    if (Math.abs(i$$47 - this.y) <= moduleSize$$2 && Math.abs(j$$25 - this.x) <= moduleSize$$2) {
      var moduleSizeDiff = Math.abs(moduleSize$$2 - this.estimatedModuleSize);
      return moduleSizeDiff <= 1 || moduleSizeDiff / this.estimatedModuleSize <= 1;
    }
    return false;
  };
}
function FinderPatternInfo(patternCenters) {
  this.bottomLeft = patternCenters[0];
  this.topLeft = patternCenters[1];
  this.topRight = patternCenters[2];
  this.__defineGetter__("BottomLeft", function() {
    return this.bottomLeft;
  });
  this.__defineGetter__("TopLeft", function() {
    return this.topLeft;
  });
  this.__defineGetter__("TopRight", function() {
    return this.topRight;
  });
}
function FinderPatternFinder() {
  this.image = null;
  this.possibleCenters = [];
  this.hasSkipped = false;
  this.crossCheckStateCount = new Array(0, 0, 0, 0, 0);
  this.resultPointCallback = null;
  this.__defineGetter__("CrossCheckStateCount", function() {
    this.crossCheckStateCount[0] = 0;
    this.crossCheckStateCount[1] = 0;
    this.crossCheckStateCount[2] = 0;
    this.crossCheckStateCount[3] = 0;
    this.crossCheckStateCount[4] = 0;
    return this.crossCheckStateCount;
  });
  this.foundPatternCross = function(stateCount) {
    var totalModuleSize = 0;
    var i$$48 = 0;
    for (;i$$48 < 5;i$$48++) {
      var count$$5 = stateCount[i$$48];
      if (count$$5 == 0) {
        return false;
      }
      totalModuleSize += count$$5;
    }
    if (totalModuleSize < 7) {
      return false;
    }
    var moduleSize$$3 = Math.floor((totalModuleSize << INTEGER_MATH_SHIFT) / 7);
    var maxVariance = Math.floor(moduleSize$$3 / 2);
    return Math.abs(moduleSize$$3 - (stateCount[0] << INTEGER_MATH_SHIFT)) < maxVariance && Math.abs(moduleSize$$3 - (stateCount[1] << INTEGER_MATH_SHIFT)) < maxVariance && Math.abs(3 * moduleSize$$3 - (stateCount[2] << INTEGER_MATH_SHIFT)) < 3 * maxVariance && Math.abs(moduleSize$$3 - (stateCount[3] << INTEGER_MATH_SHIFT)) < maxVariance && Math.abs(moduleSize$$3 - (stateCount[4] << INTEGER_MATH_SHIFT)) < maxVariance;
  };
  this.centerFromEnd = function(stateCount$$1, end$$2) {
    return end$$2 - stateCount$$1[4] - stateCount$$1[3] - stateCount$$1[2] / 2;
  };
  this.crossCheckVertical = function(startI, centerJ, maxCount, originalStateCountTotal) {
    var image$$10 = this.image;
    var maxI = qrcode.height;
    var stateCount$$2 = this.CrossCheckStateCount;
    var i$$49 = startI;
    for (;i$$49 >= 0 && image$$10[centerJ + i$$49 * qrcode.width];) {
      stateCount$$2[2]++;
      i$$49--;
    }
    if (i$$49 < 0) {
      return NaN;
    }
    for (;i$$49 >= 0 && !image$$10[centerJ + i$$49 * qrcode.width] && stateCount$$2[1] <= maxCount;) {
      stateCount$$2[1]++;
      i$$49--;
    }
    if (i$$49 < 0 || stateCount$$2[1] > maxCount) {
      return NaN;
    }
    for (;i$$49 >= 0 && image$$10[centerJ + i$$49 * qrcode.width] && stateCount$$2[0] <= maxCount;) {
      stateCount$$2[0]++;
      i$$49--;
    }
    if (stateCount$$2[0] > maxCount) {
      return NaN;
    }
    i$$49 = startI + 1;
    for (;i$$49 < maxI && image$$10[centerJ + i$$49 * qrcode.width];) {
      stateCount$$2[2]++;
      i$$49++;
    }
    if (i$$49 == maxI) {
      return NaN;
    }
    for (;i$$49 < maxI && !image$$10[centerJ + i$$49 * qrcode.width] && stateCount$$2[3] < maxCount;) {
      stateCount$$2[3]++;
      i$$49++;
    }
    if (i$$49 == maxI || stateCount$$2[3] >= maxCount) {
      return NaN;
    }
    for (;i$$49 < maxI && image$$10[centerJ + i$$49 * qrcode.width] && stateCount$$2[4] < maxCount;) {
      stateCount$$2[4]++;
      i$$49++;
    }
    if (stateCount$$2[4] >= maxCount) {
      return NaN;
    }
    var stateCountTotal = stateCount$$2[0] + stateCount$$2[1] + stateCount$$2[2] + stateCount$$2[3] + stateCount$$2[4];
    if (5 * Math.abs(stateCountTotal - originalStateCountTotal) >= 2 * originalStateCountTotal) {
      return NaN;
    }
    return this.foundPatternCross(stateCount$$2) ? this.centerFromEnd(stateCount$$2, i$$49) : NaN;
  };
  this.crossCheckHorizontal = function(startJ, centerI, maxCount$$1, originalStateCountTotal$$1) {
    var image$$11 = this.image;
    var maxJ = qrcode.width;
    var stateCount$$3 = this.CrossCheckStateCount;
    var j$$26 = startJ;
    for (;j$$26 >= 0 && image$$11[j$$26 + centerI * qrcode.width];) {
      stateCount$$3[2]++;
      j$$26--;
    }
    if (j$$26 < 0) {
      return NaN;
    }
    for (;j$$26 >= 0 && !image$$11[j$$26 + centerI * qrcode.width] && stateCount$$3[1] <= maxCount$$1;) {
      stateCount$$3[1]++;
      j$$26--;
    }
    if (j$$26 < 0 || stateCount$$3[1] > maxCount$$1) {
      return NaN;
    }
    for (;j$$26 >= 0 && image$$11[j$$26 + centerI * qrcode.width] && stateCount$$3[0] <= maxCount$$1;) {
      stateCount$$3[0]++;
      j$$26--;
    }
    if (stateCount$$3[0] > maxCount$$1) {
      return NaN;
    }
    j$$26 = startJ + 1;
    for (;j$$26 < maxJ && image$$11[j$$26 + centerI * qrcode.width];) {
      stateCount$$3[2]++;
      j$$26++;
    }
    if (j$$26 == maxJ) {
      return NaN;
    }
    for (;j$$26 < maxJ && !image$$11[j$$26 + centerI * qrcode.width] && stateCount$$3[3] < maxCount$$1;) {
      stateCount$$3[3]++;
      j$$26++;
    }
    if (j$$26 == maxJ || stateCount$$3[3] >= maxCount$$1) {
      return NaN;
    }
    for (;j$$26 < maxJ && image$$11[j$$26 + centerI * qrcode.width] && stateCount$$3[4] < maxCount$$1;) {
      stateCount$$3[4]++;
      j$$26++;
    }
    if (stateCount$$3[4] >= maxCount$$1) {
      return NaN;
    }
    var stateCountTotal$$1 = stateCount$$3[0] + stateCount$$3[1] + stateCount$$3[2] + stateCount$$3[3] + stateCount$$3[4];
    if (5 * Math.abs(stateCountTotal$$1 - originalStateCountTotal$$1) >= originalStateCountTotal$$1) {
      return NaN;
    }
    return this.foundPatternCross(stateCount$$3) ? this.centerFromEnd(stateCount$$3, j$$26) : NaN;
  };
  this.handlePossibleCenter = function(stateCount$$4, i$$50, j$$27) {
    var stateCountTotal$$2 = stateCount$$4[0] + stateCount$$4[1] + stateCount$$4[2] + stateCount$$4[3] + stateCount$$4[4];
    var centerJ$$1 = this.centerFromEnd(stateCount$$4, j$$27);
    var centerI$$1 = this.crossCheckVertical(i$$50, Math.floor(centerJ$$1), stateCount$$4[2], stateCountTotal$$2);
    if (!isNaN(centerI$$1)) {
      centerJ$$1 = this.crossCheckHorizontal(Math.floor(centerJ$$1), Math.floor(centerI$$1), stateCount$$4[2], stateCountTotal$$2);
      if (!isNaN(centerJ$$1)) {
        var estimatedModuleSize$$1 = stateCountTotal$$2 / 7;
        var found = false;
        var max$$5 = this.possibleCenters.length;
        var index$$39 = 0;
        for (;index$$39 < max$$5;index$$39++) {
          var center = this.possibleCenters[index$$39];
          if (center.aboutEquals(estimatedModuleSize$$1, centerI$$1, centerJ$$1)) {
            center.incrementCount();
            found = true;
            break;
          }
        }
        if (!found) {
          var point$$2 = new FinderPattern(centerJ$$1, centerI$$1, estimatedModuleSize$$1);
          this.possibleCenters.push(point$$2);
          if (this.resultPointCallback != null) {
            this.resultPointCallback.foundPossibleResultPoint(point$$2);
          }
        }
        return true;
      }
    }
    return false;
  };
  this.selectBestPatterns = function() {
    var startSize = this.possibleCenters.length;
    if (startSize < 3) {
      throw "Couldn't find enough finder patterns";
    }
    if (startSize > 3) {
      var totalModuleSize$$1 = 0;
      var i$$51 = 0;
      for (;i$$51 < startSize;i$$51++) {
        totalModuleSize$$1 += this.possibleCenters[i$$51].EstimatedModuleSize;
      }
      var average = totalModuleSize$$1 / startSize;
      i$$51 = 0;
      for (;i$$51 < this.possibleCenters.length && this.possibleCenters.length > 3;i$$51++) {
        var pattern$$2 = this.possibleCenters[i$$51];
        if (Math.abs(pattern$$2.EstimatedModuleSize - average) > .2 * average) {
          this.possibleCenters.remove(i$$51);
          i$$51--;
        }
      }
    }
    if (this.possibleCenters.length > 3) {
      this.possibleCenters.sort(function(a$$8, b$$5) {
        if (a$$8.count > b$$5.count) {
          return-1;
        }
        if (a$$8.count < b$$5.count) {
          return 1;
        }
        return 0;
      });
    }
    return new Array(this.possibleCenters[0], this.possibleCenters[1], this.possibleCenters[2]);
  };
  this.findRowSkip = function() {
    var max$$6 = this.possibleCenters.length;
    if (max$$6 <= 1) {
      return 0;
    }
    var firstConfirmedCenter = null;
    var i$$52 = 0;
    for (;i$$52 < max$$6;i$$52++) {
      var center$$1 = this.possibleCenters[i$$52];
      if (center$$1.Count >= CENTER_QUORUM) {
        if (firstConfirmedCenter == null) {
          firstConfirmedCenter = center$$1;
        } else {
          this.hasSkipped = true;
          return Math.floor((Math.abs(firstConfirmedCenter.X - center$$1.X) - Math.abs(firstConfirmedCenter.Y - center$$1.Y)) / 2);
        }
      }
    }
    return 0;
  };
  this.haveMultiplyConfirmedCenters = function() {
    var confirmedCount = 0;
    var totalModuleSize$$2 = 0;
    var max$$7 = this.possibleCenters.length;
    var i$$53 = 0;
    for (;i$$53 < max$$7;i$$53++) {
      var pattern$$3 = this.possibleCenters[i$$53];
      if (pattern$$3.Count >= CENTER_QUORUM) {
        confirmedCount++;
        totalModuleSize$$2 += pattern$$3.EstimatedModuleSize;
      }
    }
    if (confirmedCount < 3) {
      return false;
    }
    var average$$1 = totalModuleSize$$2 / max$$7;
    var totalDeviation = 0;
    i$$53 = 0;
    for (;i$$53 < max$$7;i$$53++) {
      pattern$$3 = this.possibleCenters[i$$53];
      totalDeviation += Math.abs(pattern$$3.EstimatedModuleSize - average$$1);
    }
    return totalDeviation <= .05 * totalModuleSize$$2;
  };
  this.findFinderPattern = function(image$$12) {
    var tryHarder = false;
    this.image = image$$12;
    var maxI$$1 = qrcode.height;
    var maxJ$$1 = qrcode.width;
    var iSkip = Math.floor(3 * maxI$$1 / (4 * MAX_MODULES));
    if (iSkip < MIN_SKIP || tryHarder) {
      iSkip = MIN_SKIP;
    }
    var done = false;
    var stateCount$$5 = new Array(5);
    var i$$54 = iSkip - 1;
    for (;i$$54 < maxI$$1 && !done;i$$54 += iSkip) {
      stateCount$$5[0] = 0;
      stateCount$$5[1] = 0;
      stateCount$$5[2] = 0;
      stateCount$$5[3] = 0;
      stateCount$$5[4] = 0;
      var currentState = 0;
      var j$$28 = 0;
      for (;j$$28 < maxJ$$1;j$$28++) {
        if (image$$12[j$$28 + i$$54 * qrcode.width]) {
          if ((currentState & 1) == 1) {
            currentState++;
          }
          stateCount$$5[currentState]++;
        } else {
          if ((currentState & 1) == 0) {
            if (currentState == 4) {
              if (this.foundPatternCross(stateCount$$5)) {
                var confirmed = this.handlePossibleCenter(stateCount$$5, i$$54, j$$28);
                if (confirmed) {
                  iSkip = 2;
                  if (this.hasSkipped) {
                    done = this.haveMultiplyConfirmedCenters();
                  } else {
                    var rowSkip = this.findRowSkip();
                    if (rowSkip > stateCount$$5[2]) {
                      i$$54 += rowSkip - stateCount$$5[2] - iSkip;
                      j$$28 = maxJ$$1 - 1;
                    }
                  }
                } else {
                  do {
                    j$$28++;
                  } while (j$$28 < maxJ$$1 && !image$$12[j$$28 + i$$54 * qrcode.width]);
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
              stateCount$$5[++currentState]++;
            }
          } else {
            stateCount$$5[currentState]++;
          }
        }
      }
      if (this.foundPatternCross(stateCount$$5)) {
        confirmed = this.handlePossibleCenter(stateCount$$5, i$$54, maxJ$$1);
        if (confirmed) {
          iSkip = stateCount$$5[0];
          if (this.hasSkipped) {
            done = haveMultiplyConfirmedCenters();
          }
        }
      }
    }
    var patternInfo = this.selectBestPatterns();
    qrcode.orderBestPatterns(patternInfo);
    return new FinderPatternInfo(patternInfo);
  };
}
function AlignmentPattern(posX$$1, posY$$1, estimatedModuleSize$$2) {
  this.x = posX$$1;
  this.y = posY$$1;
  this.count = 1;
  this.estimatedModuleSize = estimatedModuleSize$$2;
  this.__defineGetter__("EstimatedModuleSize", function() {
    return this.estimatedModuleSize;
  });
  this.__defineGetter__("Count", function() {
    return this.count;
  });
  this.__defineGetter__("X", function() {
    return Math.floor(this.x);
  });
  this.__defineGetter__("Y", function() {
    return Math.floor(this.y);
  });
  this.incrementCount = function() {
    this.count++;
  };
  this.aboutEquals = function(moduleSize$$4, i$$55, j$$29) {
    if (Math.abs(i$$55 - this.y) <= moduleSize$$4 && Math.abs(j$$29 - this.x) <= moduleSize$$4) {
      var moduleSizeDiff$$1 = Math.abs(moduleSize$$4 - this.estimatedModuleSize);
      return moduleSizeDiff$$1 <= 1 || moduleSizeDiff$$1 / this.estimatedModuleSize <= 1;
    }
    return false;
  };
}
function AlignmentPatternFinder(image$$13, startX, startY, width$$12, height$$11, moduleSize$$5, resultPointCallback) {
  this.image = image$$13;
  this.possibleCenters = new Array;
  this.startX = startX;
  this.startY = startY;
  this.width = width$$12;
  this.height = height$$11;
  this.moduleSize = moduleSize$$5;
  this.crossCheckStateCount = new Array(0, 0, 0);
  this.resultPointCallback = resultPointCallback;
  this.centerFromEnd = function(stateCount$$6, end$$3) {
    return end$$3 - stateCount$$6[2] - stateCount$$6[1] / 2;
  };
  this.foundPatternCross = function(stateCount$$7) {
    var moduleSize$$6 = this.moduleSize;
    var maxVariance$$1 = moduleSize$$6 / 2;
    var i$$56 = 0;
    for (;i$$56 < 3;i$$56++) {
      if (Math.abs(moduleSize$$6 - stateCount$$7[i$$56]) >= maxVariance$$1) {
        return false;
      }
    }
    return true;
  };
  this.crossCheckVertical = function(startI$$1, centerJ$$2, maxCount$$2, originalStateCountTotal$$2) {
    var image$$14 = this.image;
    var maxI$$2 = qrcode.height;
    var stateCount$$8 = this.crossCheckStateCount;
    stateCount$$8[0] = 0;
    stateCount$$8[1] = 0;
    stateCount$$8[2] = 0;
    var i$$57 = startI$$1;
    for (;i$$57 >= 0 && image$$14[centerJ$$2 + i$$57 * qrcode.width] && stateCount$$8[1] <= maxCount$$2;) {
      stateCount$$8[1]++;
      i$$57--;
    }
    if (i$$57 < 0 || stateCount$$8[1] > maxCount$$2) {
      return NaN;
    }
    for (;i$$57 >= 0 && !image$$14[centerJ$$2 + i$$57 * qrcode.width] && stateCount$$8[0] <= maxCount$$2;) {
      stateCount$$8[0]++;
      i$$57--;
    }
    if (stateCount$$8[0] > maxCount$$2) {
      return NaN;
    }
    i$$57 = startI$$1 + 1;
    for (;i$$57 < maxI$$2 && image$$14[centerJ$$2 + i$$57 * qrcode.width] && stateCount$$8[1] <= maxCount$$2;) {
      stateCount$$8[1]++;
      i$$57++;
    }
    if (i$$57 == maxI$$2 || stateCount$$8[1] > maxCount$$2) {
      return NaN;
    }
    for (;i$$57 < maxI$$2 && !image$$14[centerJ$$2 + i$$57 * qrcode.width] && stateCount$$8[2] <= maxCount$$2;) {
      stateCount$$8[2]++;
      i$$57++;
    }
    if (stateCount$$8[2] > maxCount$$2) {
      return NaN;
    }
    var stateCountTotal$$3 = stateCount$$8[0] + stateCount$$8[1] + stateCount$$8[2];
    if (5 * Math.abs(stateCountTotal$$3 - originalStateCountTotal$$2) >= 2 * originalStateCountTotal$$2) {
      return NaN;
    }
    return this.foundPatternCross(stateCount$$8) ? this.centerFromEnd(stateCount$$8, i$$57) : NaN;
  };
  this.handlePossibleCenter = function(stateCount$$9, i$$58, j$$30) {
    var stateCountTotal$$4 = stateCount$$9[0] + stateCount$$9[1] + stateCount$$9[2];
    var centerJ$$3 = this.centerFromEnd(stateCount$$9, j$$30);
    var centerI$$2 = this.crossCheckVertical(i$$58, Math.floor(centerJ$$3), 2 * stateCount$$9[1], stateCountTotal$$4);
    if (!isNaN(centerI$$2)) {
      var estimatedModuleSize$$3 = (stateCount$$9[0] + stateCount$$9[1] + stateCount$$9[2]) / 3;
      var max$$8 = this.possibleCenters.length;
      var index$$40 = 0;
      for (;index$$40 < max$$8;index$$40++) {
        var center$$2 = this.possibleCenters[index$$40];
        if (center$$2.aboutEquals(estimatedModuleSize$$3, centerI$$2, centerJ$$3)) {
          return new AlignmentPattern(centerJ$$3, centerI$$2, estimatedModuleSize$$3);
        }
      }
      var point$$3 = new AlignmentPattern(centerJ$$3, centerI$$2, estimatedModuleSize$$3);
      this.possibleCenters.push(point$$3);
      if (this.resultPointCallback != null) {
        this.resultPointCallback.foundPossibleResultPoint(point$$3);
      }
    }
    return null;
  };
  this.find = function() {
    var startX$$1 = this.startX;
    var height$$12 = this.height;
    var maxJ$$2 = startX$$1 + width$$12;
    var middleI = startY + (height$$12 >> 1);
    var stateCount$$10 = new Array(0, 0, 0);
    var iGen = 0;
    for (;iGen < height$$12;iGen++) {
      var i$$59 = middleI + ((iGen & 1) == 0 ? iGen + 1 >> 1 : -(iGen + 1 >> 1));
      stateCount$$10[0] = 0;
      stateCount$$10[1] = 0;
      stateCount$$10[2] = 0;
      var j$$31 = startX$$1;
      for (;j$$31 < maxJ$$2 && !image$$13[j$$31 + qrcode.width * i$$59];) {
        j$$31++;
      }
      var currentState$$1 = 0;
      for (;j$$31 < maxJ$$2;) {
        if (image$$13[j$$31 + i$$59 * qrcode.width]) {
          if (currentState$$1 == 1) {
            stateCount$$10[currentState$$1]++;
          } else {
            if (currentState$$1 == 2) {
              if (this.foundPatternCross(stateCount$$10)) {
                var confirmed$$1 = this.handlePossibleCenter(stateCount$$10, i$$59, j$$31);
                if (confirmed$$1 != null) {
                  return confirmed$$1;
                }
              }
              stateCount$$10[0] = stateCount$$10[2];
              stateCount$$10[1] = 1;
              stateCount$$10[2] = 0;
              currentState$$1 = 1;
            } else {
              stateCount$$10[++currentState$$1]++;
            }
          }
        } else {
          if (currentState$$1 == 1) {
            currentState$$1++;
          }
          stateCount$$10[currentState$$1]++;
        }
        j$$31++;
      }
      if (this.foundPatternCross(stateCount$$10)) {
        confirmed$$1 = this.handlePossibleCenter(stateCount$$10, i$$59, maxJ$$2);
        if (confirmed$$1 != null) {
          return confirmed$$1;
        }
      }
    }
    if (!(this.possibleCenters.length == 0)) {
      return this.possibleCenters[0];
    }
    throw "Couldn't find enough alignment patterns";
  };
}
function QRCodeDataBlockReader(blocks, version$$8, numErrorCorrectionCode) {
  this.blockPointer = 0;
  this.bitPointer = 7;
  this.dataLength = 0;
  this.blocks = blocks;
  this.numErrorCorrectionCode = numErrorCorrectionCode;
  if (version$$8 <= 9) {
    this.dataLengthMode = 0;
  } else {
    if (version$$8 >= 10 && version$$8 <= 26) {
      this.dataLengthMode = 1;
    } else {
      if (version$$8 >= 27 && version$$8 <= 40) {
        this.dataLengthMode = 2;
      }
    }
  }
  this.getNextBits = function(numBits) {
    var bits$$15 = 0;
    if (numBits < this.bitPointer + 1) {
      var mask$$5 = 0;
      var i$$60 = 0;
      for (;i$$60 < numBits;i$$60++) {
        mask$$5 += 1 << i$$60;
      }
      mask$$5 <<= this.bitPointer - numBits + 1;
      bits$$15 = (this.blocks[this.blockPointer] & mask$$5) >> this.bitPointer - numBits + 1;
      this.bitPointer -= numBits;
      return bits$$15;
    } else {
      if (numBits < this.bitPointer + 1 + 8) {
        var mask1 = 0;
        i$$60 = 0;
        for (;i$$60 < this.bitPointer + 1;i$$60++) {
          mask1 += 1 << i$$60;
        }
        bits$$15 = (this.blocks[this.blockPointer] & mask1) << numBits - (this.bitPointer + 1);
        this.blockPointer++;
        bits$$15 += this.blocks[this.blockPointer] >> 8 - (numBits - (this.bitPointer + 1));
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
          for (;i$$60 < this.bitPointer + 1;i$$60++) {
            mask1 += 1 << i$$60;
          }
          var bitsFirstBlock = (this.blocks[this.blockPointer] & mask1) << numBits - (this.bitPointer + 1);
          this.blockPointer++;
          var bitsSecondBlock = this.blocks[this.blockPointer] << numBits - (this.bitPointer + 1 + 8);
          this.blockPointer++;
          i$$60 = 0;
          for (;i$$60 < numBits - (this.bitPointer + 1 + 8);i$$60++) {
            mask3 += 1 << i$$60;
          }
          mask3 <<= 8 - (numBits - (this.bitPointer + 1 + 8));
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
  };
  this.NextMode = function() {
    if (this.blockPointer > this.blocks.length - this.numErrorCorrectionCode - 2) {
      return 0;
    } else {
      return this.getNextBits(4);
    }
  };
  this.getDataLength = function(modeIndicator) {
    var index$$41 = 0;
    for (;true;) {
      if (modeIndicator >> index$$41 == 1) {
        break;
      }
      index$$41++;
    }
    return this.getNextBits(qrcode.sizeOfDataLengthInfo[this.dataLengthMode][index$$41]);
  };
  this.getRomanAndFigureString = function(dataLength$$1) {
    var length$$11 = dataLength$$1;
    var intData = 0;
    var strData = "";
    var tableRomanAndFigure = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":");
    do {
      if (length$$11 > 1) {
        intData = this.getNextBits(11);
        var firstLetter = Math.floor(intData / 45);
        var secondLetter = intData % 45;
        strData += tableRomanAndFigure[firstLetter];
        strData += tableRomanAndFigure[secondLetter];
        length$$11 -= 2;
      } else {
        if (length$$11 == 1) {
          intData = this.getNextBits(6);
          strData += tableRomanAndFigure[intData];
          length$$11 -= 1;
        }
      }
    } while (length$$11 > 0);
    return strData;
  };
  this.getFigureString = function(dataLength$$2) {
    var length$$12 = dataLength$$2;
    var intData$$1 = 0;
    var strData$$1 = "";
    do {
      if (length$$12 >= 3) {
        intData$$1 = this.getNextBits(10);
        if (intData$$1 < 100) {
          strData$$1 += "0";
        }
        if (intData$$1 < 10) {
          strData$$1 += "0";
        }
        length$$12 -= 3;
      } else {
        if (length$$12 == 2) {
          intData$$1 = this.getNextBits(7);
          if (intData$$1 < 10) {
            strData$$1 += "0";
          }
          length$$12 -= 2;
        } else {
          if (length$$12 == 1) {
            intData$$1 = this.getNextBits(4);
            length$$12 -= 1;
          }
        }
      }
      strData$$1 += intData$$1;
    } while (length$$12 > 0);
    return strData$$1;
  };
  this.get8bitByteArray = function(dataLength$$3) {
    var length$$13 = dataLength$$3;
    var intData$$2 = 0;
    var output = new Array;
    do {
      intData$$2 = this.getNextBits(8);
      output.push(intData$$2);
      length$$13--;
    } while (length$$13 > 0);
    return output;
  };
  this.getKanjiString = function(dataLength$$4) {
    var length$$14 = dataLength$$4;
    var intData$$3 = 0;
    var unicodeString = "";
    do {
      intData$$3 = getNextBits(13);
      var lowerByte = intData$$3 % 192;
      var higherByte = intData$$3 / 192;
      var tempWord = (higherByte << 8) + lowerByte;
      var shiftjisWord = 0;
      if (tempWord + 33088 <= 40956) {
        shiftjisWord = tempWord + 33088;
      } else {
        shiftjisWord = tempWord + 49472;
      }
      unicodeString += String.fromCharCode(shiftjisWord);
      length$$14--;
    } while (length$$14 > 0);
    return unicodeString;
  };
  this.__defineGetter__("DataByte", function() {
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
      if (mode$$7 != MODE_NUMBER && mode$$7 != MODE_ROMAN_AND_NUMBER && mode$$7 != MODE_8BIT_BYTE && mode$$7 != MODE_KANJI) {
        throw "Invalid mode: " + mode$$7 + " in (block:" + this.blockPointer + " bit:" + this.bitPointer + ")";
      }
      dataLength = this.getDataLength(mode$$7);
      if (dataLength < 1) {
        throw "Invalid data length: " + dataLength;
      }
      switch(mode$$7) {
        case MODE_NUMBER:
          var temp_str = this.getFigureString(dataLength);
          var ta = new Array(temp_str.length);
          var j$$32 = 0;
          for (;j$$32 < temp_str.length;j$$32++) {
            ta[j$$32] = temp_str.charCodeAt(j$$32);
          }
          output$$1.push(ta);
          break;
        case MODE_ROMAN_AND_NUMBER:
          temp_str = this.getRomanAndFigureString(dataLength);
          ta = new Array(temp_str.length);
          j$$32 = 0;
          for (;j$$32 < temp_str.length;j$$32++) {
            ta[j$$32] = temp_str.charCodeAt(j$$32);
          }
          output$$1.push(ta);
          break;
        case MODE_8BIT_BYTE:
          var temp_sbyteArray3 = this.get8bitByteArray(dataLength);
          output$$1.push(temp_sbyteArray3);
          break;
        case MODE_KANJI:
          temp_str = this.getKanjiString(dataLength);
          output$$1.push(temp_str);
          break;
      }
    } while (true);
    return output$$1;
  });
}
var gCtx = null;
var gCanvas = null;
var imageData = null;
var ii = 0;
var jj = 0;
var c = 0;
function dragenter(e$$7) {
  e$$7.stopPropagation();
  e$$7.preventDefault();
}
function dragover(e$$8) {
  e$$8.stopPropagation();
  e$$8.preventDefault();
}
function drop(e$$9) {
  e$$9.stopPropagation();
  e$$9.preventDefault();
  var dt = e$$9.dataTransfer;
  var files = dt.files;
  handleFiles(files);
}
function handleFiles(f) {
  var o$$1 = [];
  var i$$61 = 0;
  for (;i$$61 < f.length;i$$61++) {
    var reader$$2 = new FileReader;
    reader$$2.onload = function(theFile) {
      return function(e$$10) {
        qrcode.decode(e$$10.target.result);
      };
    }(f[i$$61]);
    reader$$2.readAsDataURL(f[i$$61]);
  }
}
function read(a$$9) {
  alert(a$$9);
}
function load() {
  qrcode.callback = read;
  var img$$2 = document.getElementById("imgpath").value;
  qrcode.decode(img$$2);
}
function passLine(stringPixels) {
  var coll = stringPixels.split("-");
  var i$$62 = 0;
  for (;i$$62 < 320;i$$62++) {
    var intVal = parseInt(coll[i$$62]);
    r = intVal >> 16 & 255;
    g = intVal >> 8 & 255;
    b = intVal & 255;
    imageData.data[c + 0] = r;
    imageData.data[c + 1] = g;
    imageData.data[c + 2] = b;
    imageData.data[c + 3] = 255;
    c += 4;
  }
  if (c >= 320 * 240 * 4) {
    c = 0;
    gCtx.putImageData(imageData, 0, 0);
  }
}
function captureToCanvas() {
  flash = document.getElementById("embedflash");
  flash.ccCapture();
  qrcode.decode();
}
document.getElementById("decode").onclick = load

}
