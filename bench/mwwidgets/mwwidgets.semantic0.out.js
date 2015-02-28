// mwwidgets.js
function v98() {
  function v97(a$$54, b$$34, d$$20, e$$34, f$$18, h$$15, i$$16, g$$11) {
    var l$$8 = this._nRounds;
    introspect(JAM.policy.p12) {
      var v99 = a$$54[b$$34]
    }
    var k$$6 = v99 ^ d$$20[0];
    var v455 = b$$34 + 1;
    introspect(JAM.policy.p12) {
      var v101 = a$$54[v455]
    }
    var m$$7 = v101 ^ d$$20[1];
    var v456 = b$$34 + 2;
    introspect(JAM.policy.p12) {
      var v103 = a$$54[v456]
    }
    var o$$6 = v103 ^ d$$20[2];
    var v457 = b$$34 + 3;
    introspect(JAM.policy.p12) {
      var v105 = a$$54[v457]
    }
    var n$$8 = v105 ^ d$$20[3];
    var p$$7 = 4;
    var r$$6 = 1;
    var v115 = r$$6 < l$$8;
    for (;v115;) {
      var v861 = k$$6 >>> 24;
      introspect(JAM.policy.p12) {
        var v764 = e$$34[v861]
      }
      var v862 = m$$7 >>> 16 & 255;
      introspect(JAM.policy.p12) {
        var v765 = f$$18[v862]
      }
      var v652 = v764 ^ v765;
      var v766 = o$$6 >>> 8 & 255;
      introspect(JAM.policy.p12) {
        var v653 = h$$15[v766]
      }
      var v458 = v652 ^ v653;
      var v654 = n$$8 & 255;
      introspect(JAM.policy.p12) {
        var v459 = i$$16[v654]
      }
      var v107 = v458 ^ v459;
      var v460 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p12) {
        var v108 = d$$20[v460]
      }
      var s$$8 = v107 ^ v108;
      var v864 = m$$7 >>> 24;
      introspect(JAM.policy.p12) {
        var v767 = e$$34[v864]
      }
      var v865 = o$$6 >>> 16 & 255;
      introspect(JAM.policy.p12) {
        var v768 = f$$18[v865]
      }
      var v655 = v767 ^ v768;
      var v769 = n$$8 >>> 8 & 255;
      introspect(JAM.policy.p12) {
        var v656 = h$$15[v769]
      }
      var v461 = v655 ^ v656;
      var v657 = k$$6 & 255;
      introspect(JAM.policy.p12) {
        var v462 = i$$16[v657]
      }
      var v109 = v461 ^ v462;
      var v463 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p12) {
        var v110 = d$$20[v463]
      }
      var u = v109 ^ v110;
      var v867 = o$$6 >>> 24;
      introspect(JAM.policy.p12) {
        var v770 = e$$34[v867]
      }
      var v868 = n$$8 >>> 16 & 255;
      introspect(JAM.policy.p12) {
        var v771 = f$$18[v868]
      }
      var v658 = v770 ^ v771;
      var v772 = k$$6 >>> 8 & 255;
      introspect(JAM.policy.p12) {
        var v659 = h$$15[v772]
      }
      var v464 = v658 ^ v659;
      var v660 = m$$7 & 255;
      introspect(JAM.policy.p12) {
        var v465 = i$$16[v660]
      }
      var v111 = v464 ^ v465;
      var v466 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p12) {
        var v112 = d$$20[v466]
      }
      var v = v111 ^ v112;
      var v870 = n$$8 >>> 24;
      introspect(JAM.policy.p12) {
        var v773 = e$$34[v870]
      }
      var v871 = k$$6 >>> 16 & 255;
      introspect(JAM.policy.p12) {
        var v774 = f$$18[v871]
      }
      var v661 = v773 ^ v774;
      var v775 = m$$7 >>> 8 & 255;
      introspect(JAM.policy.p12) {
        var v662 = h$$15[v775]
      }
      var v467 = v661 ^ v662;
      var v663 = o$$6 & 255;
      introspect(JAM.policy.p12) {
        var v468 = i$$16[v663]
      }
      var v113 = v467 ^ v468;
      var v469 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p12) {
        var v114 = d$$20[v469]
      }
      n$$8 = v113 ^ v114;
      k$$6 = s$$8;
      m$$7 = u;
      o$$6 = v;
      r$$6++;
      v115 = r$$6 < l$$8;
    }
    var v943 = k$$6 >>> 24;
    introspect(JAM.policy.p12) {
      var v873 = g$$11[v943]
    }
    var v776 = v873 << 24;
    var v944 = m$$7 >>> 16 & 255;
    introspect(JAM.policy.p12) {
      var v874 = g$$11[v944]
    }
    var v664 = v776 | v874 << 16;
    var v875 = o$$6 >>> 8 & 255;
    introspect(JAM.policy.p12) {
      var v778 = g$$11[v875]
    }
    var v470 = v664 | v778 << 8;
    var v666 = n$$8 & 255;
    introspect(JAM.policy.p12) {
      var v471 = g$$11[v666]
    }
    var v116 = v470 | v471;
    var v472 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p12) {
      var v117 = d$$20[v472]
    }
    s$$8 = v116 ^ v117;
    var v946 = m$$7 >>> 24;
    introspect(JAM.policy.p12) {
      var v876 = g$$11[v946]
    }
    var v779 = v876 << 24;
    var v947 = o$$6 >>> 16 & 255;
    introspect(JAM.policy.p12) {
      var v877 = g$$11[v947]
    }
    var v667 = v779 | v877 << 16;
    var v878 = n$$8 >>> 8 & 255;
    introspect(JAM.policy.p12) {
      var v781 = g$$11[v878]
    }
    var v473 = v667 | v781 << 8;
    var v669 = k$$6 & 255;
    introspect(JAM.policy.p12) {
      var v474 = g$$11[v669]
    }
    var v118 = v473 | v474;
    var v475 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p12) {
      var v119 = d$$20[v475]
    }
    u = v118 ^ v119;
    var v949 = o$$6 >>> 24;
    introspect(JAM.policy.p12) {
      var v879 = g$$11[v949]
    }
    var v782 = v879 << 24;
    var v950 = n$$8 >>> 16 & 255;
    introspect(JAM.policy.p12) {
      var v880 = g$$11[v950]
    }
    var v670 = v782 | v880 << 16;
    var v881 = k$$6 >>> 8 & 255;
    introspect(JAM.policy.p12) {
      var v784 = g$$11[v881]
    }
    var v476 = v670 | v784 << 8;
    var v672 = m$$7 & 255;
    introspect(JAM.policy.p12) {
      var v477 = g$$11[v672]
    }
    var v120 = v476 | v477;
    var v478 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p12) {
      var v121 = d$$20[v478]
    }
    v = v120 ^ v121;
    var v952 = n$$8 >>> 24;
    introspect(JAM.policy.p12) {
      var v882 = g$$11[v952]
    }
    var v785 = v882 << 24;
    var v953 = k$$6 >>> 16 & 255;
    introspect(JAM.policy.p12) {
      var v883 = g$$11[v953]
    }
    var v673 = v785 | v883 << 16;
    var v884 = m$$7 >>> 8 & 255;
    introspect(JAM.policy.p12) {
      var v787 = g$$11[v884]
    }
    var v479 = v673 | v787 << 8;
    var v675 = o$$6 & 255;
    introspect(JAM.policy.p12) {
      var v480 = g$$11[v675]
    }
    var v122 = v479 | v480;
    var v481 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p12) {
      var v123 = d$$20[v481]
    }
    n$$8 = v122 ^ v123;
    introspect(JAM.policy.p17) {
      a$$54[b$$34] = s$$8;
    }
    var v124 = b$$34 + 1;
    introspect(JAM.policy.p17) {
      a$$54[v124] = u;
    }
    var v125 = b$$34 + 2;
    introspect(JAM.policy.p17) {
      a$$54[v125] = v;
    }
    var v126 = b$$34 + 3;
    introspect(JAM.policy.p17) {
      a$$54[v126] = n$$8;
    }
    return;
  }
  function v96(c$$31, b$$33) {
    var v127 = b$$33 + 1;
    introspect(JAM.policy.p12) {
      var d$$19 = c$$31[v127]
    }
    var v128 = b$$33 + 1;
    var v482 = b$$33 + 3;
    introspect(JAM.policy.p18) {
      c$$31[v128] = c$$31[v482];
    }
    var v129 = b$$33 + 3;
    introspect(JAM.policy.p17) {
      c$$31[v129] = d$$19;
    }
    JAM.call(this._doCryptBlock, this, [c$$31, b$$33, this._invKeySchedule, k$$5, f$$17, g$$10, a$$52, r$$5]);
    var v131 = b$$33 + 1;
    introspect(JAM.policy.p12) {
      d$$19 = c$$31[v131];
    }
    var v132 = b$$33 + 1;
    var v483 = b$$33 + 3;
    introspect(JAM.policy.p18) {
      c$$31[v132] = c$$31[v483];
    }
    var v133 = b$$33 + 3;
    introspect(JAM.policy.p17) {
      c$$31[v133] = d$$19;
    }
    return;
  }
  function v95(a$$53, b$$32) {
    JAM.call(this._doCryptBlock, this, [a$$53, b$$32, this._keySchedule, o$$5, m$$6, s$$7, n$$7, l$$7]);
    return;
  }
  function v94() {
    var c$$30 = this._key;
    var b$$31 = c$$30.words;
    var d$$18 = c$$30.sigBytes / 4;
    c$$30 = 4 * ((this._nRounds = d$$18 + 6) + 1);
    var i$$15 = this._keySchedule = [];
    var j$$6 = 0;
    var v141 = j$$6 < c$$30;
    for (;v141;) {
      if (j$$6 < d$$18) {
        introspect(JAM.policy.p12) {
          i$$15[j$$6] = b$$31[j$$6];
        }
      } else {
        var v137 = j$$6 - 1;
        introspect(JAM.policy.p12) {
          var h$$14 = i$$15[v137]
        }
        var v138;
        if (j$$6 % d$$18) {
          var v676 = 6 < d$$18;
          if (v676) {
            v676 = 4 == j$$6 % d$$18;
          }
          var v485 = v676;
          if (v485) {
            var v1003 = h$$14 >>> 24;
            introspect(JAM.policy.p12) {
              var v955 = l$$7[v1003]
            }
            var v885 = v955 << 24;
            var v1004 = h$$14 >>> 16 & 255;
            introspect(JAM.policy.p12) {
              var v956 = l$$7[v1004]
            }
            var v789 = v885 | v956 << 16;
            var v957 = h$$14 >>> 8 & 255;
            introspect(JAM.policy.p12) {
              var v887 = l$$7[v957]
            }
            var v677 = v789 | v887 << 8;
            var v791 = h$$14 & 255;
            introspect(JAM.policy.p12) {
              var v678 = l$$7[v791]
            }
            v485 = h$$14 = v677 | v678;
          }
          v138 = v485;
        } else {
          h$$14 = h$$14 << 8 | h$$14 >>> 24;
          var v1039 = h$$14 >>> 24;
          introspect(JAM.policy.p12) {
            var v1006 = l$$7[v1039]
          }
          var v958 = v1006 << 24;
          var v1040 = h$$14 >>> 16 & 255;
          introspect(JAM.policy.p12) {
            var v1007 = l$$7[v1040]
          }
          var v888 = v958 | v1007 << 16;
          var v1008 = h$$14 >>> 8 & 255;
          introspect(JAM.policy.p12) {
            var v960 = l$$7[v1008]
          }
          var v794 = v888 | v960 << 8;
          var v890 = h$$14 & 255;
          introspect(JAM.policy.p12) {
            var v795 = l$$7[v890]
          }
          h$$14 = v794 | v795;
          var v961 = j$$6 / d$$18 | 0;
          introspect(JAM.policy.p12) {
            var v891 = e$$32[v961]
          }
          v138 = h$$14 = h$$14 ^ v891 << 24;
        }
        v138;
        var v487 = j$$6 - d$$18;
        introspect(JAM.policy.p12) {
          var v139 = i$$15[v487]
        }
        i$$15[j$$6] = v139 ^ h$$14;
      }
      j$$6++;
      v141 = j$$6 < c$$30;
    }
    b$$31 = this._invKeySchedule = [];
    d$$18 = 0;
    var v142 = d$$18 < c$$30;
    for (;v142;) {
      j$$6 = c$$30 - d$$18;
      var v679;
      if (d$$18 % 4) {
        introspect(JAM.policy.p12) {
          v679 = i$$15[j$$6];
        }
      } else {
        var v797 = j$$6 - 4;
        introspect(JAM.policy.p12) {
          v679 = i$$15[v797];
        }
      }
      h$$14 = v679;
      var v488;
      var v799 = 4 > d$$18;
      if (!v799) {
        v799 = 4 >= j$$6;
      }
      if (v799) {
        v488 = h$$14;
      } else {
        var v1010 = h$$14 >>> 24;
        introspect(JAM.policy.p12) {
          var v962 = l$$7[v1010]
        }
        introspect(JAM.policy.p12) {
          var v893 = k$$5[v962]
        }
        var v1011 = h$$14 >>> 16 & 255;
        introspect(JAM.policy.p12) {
          var v963 = l$$7[v1011]
        }
        introspect(JAM.policy.p12) {
          var v894 = f$$17[v963]
        }
        var v800 = v893 ^ v894;
        var v964 = h$$14 >>> 8 & 255;
        introspect(JAM.policy.p12) {
          var v895 = l$$7[v964]
        }
        introspect(JAM.policy.p12) {
          var v801 = g$$10[v895]
        }
        var v680 = v800 ^ v801;
        var v896 = h$$14 & 255;
        introspect(JAM.policy.p12) {
          var v802 = l$$7[v896]
        }
        introspect(JAM.policy.p12) {
          var v681 = a$$52[v802]
        }
        v488 = v680 ^ v681;
      }
      b$$31[d$$18] = v488;
      d$$18++;
      v142 = d$$18 < c$$30;
    }
    return;
  }
  function v93() {
    var c$$29 = [];
    var b$$30 = 0;
    var v144 = 256 > b$$30;
    for (;v144;) {
      var v143;
      if (128 > b$$30) {
        v143 = b$$30 << 1;
      } else {
        v143 = b$$30 << 1 ^ 283;
      }
      c$$29[b$$30] = v143;
      b$$30++;
      v144 = 256 > b$$30;
    }
    var d$$17 = 0;
    var e$$33 = 0;
    b$$30 = 0;
    var v165 = 256 > b$$30;
    for (;v165;) {
      var j$$5 = e$$33 ^ e$$33 << 1 ^ e$$33 << 2 ^ e$$33 << 3 ^ e$$33 << 4;
      j$$5 = j$$5 >>> 8 ^ j$$5 & 255 ^ 99;
      l$$7[d$$17] = j$$5;
      r$$5[j$$5] = d$$17;
      introspect(JAM.policy.p12) {
        var i$$14 = c$$29[d$$17]
      }
      introspect(JAM.policy.p12) {
        var h$$13 = c$$29[i$$14]
      }
      introspect(JAM.policy.p12) {
        var p$$6 = c$$29[h$$13]
      }
      introspect(JAM.policy.p12) {
        var v495 = c$$29[j$$5]
      }
      var t = 257 * v495 ^ 16843008 * j$$5;
      o$$5[d$$17] = t << 24 | t >>> 8;
      m$$6[d$$17] = t << 16 | t >>> 16;
      s$$7[d$$17] = t << 8 | t >>> 24;
      n$$7[d$$17] = t;
      t = 16843009 * p$$6 ^ 65537 * h$$13 ^ 257 * i$$14 ^ 16843008 * d$$17;
      k$$5[j$$5] = t << 24 | t >>> 8;
      f$$17[j$$5] = t << 16 | t >>> 16;
      g$$10[j$$5] = t << 8 | t >>> 24;
      a$$52[j$$5] = t;
      var v164;
      if (d$$17) {
        var v965 = p$$6 ^ i$$14;
        introspect(JAM.policy.p12) {
          var v897 = c$$29[v965]
        }
        introspect(JAM.policy.p12) {
          var v804 = c$$29[v897]
        }
        introspect(JAM.policy.p12) {
          var v687 = c$$29[v804]
        }
        d$$17 = i$$14 ^ v687;
        introspect(JAM.policy.p12) {
          var v898 = c$$29[e$$33]
        }
        introspect(JAM.policy.p12) {
          var v805 = c$$29[v898]
        }
        v164 = e$$33 = e$$33 ^ v805;
      } else {
        v164 = d$$17 = e$$33 = 1;
      }
      v164;
      b$$30++;
      v165 = 256 > b$$30;
    }
    return;
  }
  var p$$5 = CryptoJS;
  var h$$12 = p$$5.lib.BlockCipher;
  var i$$13 = p$$5.algo;
  var l$$7 = [];
  var r$$5 = [];
  var o$$5 = [];
  var m$$6 = [];
  var s$$7 = [];
  var n$$7 = [];
  var k$$5 = [];
  var f$$17 = [];
  var g$$10 = [];
  var a$$52 = [];
  v93();
  var e$$32 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
  var v167 = i$$13;
  var v1078 = JAM.call(h$$12.extend, h$$12, [{_doReset:v94, encryptBlock:v95, decryptBlock:v96, _doCryptBlock:v97, keySize:8}]);
  i$$13 = v167.AES = v1078;
  var v168 = p$$5;
  var v1079 = JAM.call(h$$12._createHelper, h$$12, [i$$13]);
  v168.AES = v1079;
  return;
}
function v92(p$$4) {
  function v91(a$$51, c$$28, f$$16, j$$4) {
    var v169 = this.cfg;
    j$$4 = JAM.call(v169.extend, v169, [j$$4]);
    c$$28 = JAM.call(this._parse, this, [c$$28, j$$4.format]);
    var v171 = j$$4.kdf;
    f$$16 = JAM.call(v171.compute, v171, [f$$16, a$$51.keySize, a$$51.ivSize, c$$28.salt]);
    j$$4.iv = f$$16.iv;
    var v175 = e$$24.decrypt;
    return JAM.call(v175.call, v175, [this, a$$51, c$$28, f$$16.key, j$$4]);
  }
  function v90(a$$50, c$$27, f$$15, j$$3) {
    var v177 = this.cfg;
    j$$3 = JAM.call(v177.extend, v177, [j$$3]);
    var v178 = j$$3.kdf;
    f$$15 = JAM.call(v178.compute, v178, [f$$15, a$$50.keySize, a$$50.ivSize]);
    j$$3.iv = f$$15.iv;
    var v181 = e$$24.encrypt;
    a$$50 = JAM.call(v181.call, v181, [this, a$$50, c$$27, f$$15.key, j$$3]);
    JAM.call(a$$50.mixIn, a$$50, [f$$15]);
    return a$$50;
  }
  function v89(b$$29, c$$26, e$$31, f$$14) {
    if (!f$$14) {
      f$$14 = JAM.call(r$$4.random, r$$4, [8]);
    }
    var v183 = JAM.call(s$$6.create, s$$6, [{keySize:c$$26 + e$$31}]);
    b$$29 = JAM.call(v183.compute, v183, [b$$29, f$$14]);
    e$$31 = JAM.call(r$$4.create, r$$4, [b$$29.words.slice(c$$26), 4 * e$$31]);
    b$$29.sigBytes = 4 * c$$26;
    return JAM.call(a$$30.create, a$$30, [{key:b$$29, iv:e$$31, salt:f$$14}]);
  }
  function v88(a$$49, c$$25) {
    var v187;
    if ("string" == typeof a$$49) {
      v187 = JAM.call(c$$25.parse, c$$25, [a$$49]);
    } else {
      v187 = a$$49;
    }
    return v187;
  }
  function v87(a$$48, c$$24, e$$30, f$$13) {
    var v188 = this.cfg;
    f$$13 = JAM.call(v188.extend, v188, [f$$13]);
    c$$24 = JAM.call(this._parse, this, [c$$24, f$$13.format]);
    var v190 = JAM.call(a$$48.createDecryptor, a$$48, [e$$30, f$$13]);
    return JAM.call(v190.finalize, v190, [c$$24.ciphertext]);
  }
  function v86(b$$28, d$$16, c$$23, e$$29) {
    var v192 = this.cfg;
    e$$29 = JAM.call(v192.extend, v192, [e$$29]);
    var f$$12 = JAM.call(b$$28.createEncryptor, b$$28, [c$$23, e$$29]);
    d$$16 = JAM.call(f$$12.finalize, f$$12, [d$$16]);
    f$$12 = f$$12.cfg;
    return JAM.call(a$$30.create, a$$30, [{ciphertext:d$$16, key:c$$23, iv:f$$12.iv, algorithm:b$$28, mode:f$$12.mode, padding:f$$12.padding, blockSize:b$$28.blockSize, formatter:e$$29.format}]);
  }
  function v85(b$$27) {
    b$$27 = JAM.call(m$$5.parse, m$$5, [b$$27]);
    var d$$15 = b$$27.words;
    var v508 = 1398893684 == d$$15[0];
    if (v508) {
      v508 = 1701076831 == d$$15[1];
    }
    if (v508) {
      var c$$22 = JAM.call(r$$4.create, r$$4, [d$$15.slice(2, 4)]);
      d$$15.splice(0, 4);
      b$$27.sigBytes = b$$27.sigBytes - 16;
    }
    return JAM.call(a$$30.create, a$$30, [{ciphertext:b$$27, salt:c$$22}]);
  }
  function v84(a$$47) {
    var d$$14 = a$$47.ciphertext;
    a$$47 = a$$47.salt;
    var v510;
    if (a$$47) {
      var v806 = JAM.call(r$$4.create, r$$4, [[1398893684, 1701076831]]);
      var v692 = JAM.call(v806.concat, v806, [a$$47]);
      v510 = JAM.call(v692.concat, v692, [d$$14]);
    } else {
      v510 = d$$14;
    }
    var v197 = v510;
    d$$14 = JAM.call(v197.toString, v197, [m$$5]);
    return d$$14 = d$$14.replace(/(.{64})/g, "$1\n");
  }
  function v83(a$$46) {
    var v511 = a$$46;
    if (!v511) {
      v511 = this.formatter;
    }
    var v198 = v511;
    return JAM.call(v198.stringify, v198, [this]);
  }
  function v82(a$$45) {
    JAM.call(this.mixIn, this, [a$$45]);
    return;
  }
  function v81() {
    var b$$26 = this.cfg.padding;
    if (this._xformMode == this._ENC_XFORM_MODE) {
      JAM.call(b$$26.pad, b$$26, [this._data, this.blockSize]);
      var a$$44 = JAM.call(this._process, this, [!0]);
    } else {
      a$$44 = JAM.call(this._process, this, [!0]);
      JAM.call(b$$26.unpad, b$$26, [a$$44]);
    }
    return a$$44;
  }
  function v80(b$$25, a$$43) {
    var v204 = this._mode;
    JAM.call(v204.processBlock, v204, [b$$25, a$$43]);
    return;
  }
  function v79() {
    var v205 = n$$6.reset;
    JAM.call(v205.call, v205, [this]);
    var b$$24 = this.cfg;
    var a$$42 = b$$24.iv;
    b$$24 = b$$24.mode;
    if (this._xformMode == this._ENC_XFORM_MODE) {
      var c$$21 = b$$24.createEncryptor
    } else {
      c$$21 = b$$24.createDecryptor;
      this._minBufferSize = 1;
    }
    var v517 = a$$42;
    if (v517) {
      v517 = a$$42.words;
    }
    var v1080 = JAM.call(c$$21.call, c$$21, [b$$24, this, v517]);
    this._mode = v1080;
    return;
  }
  function v78(b$$23) {
    var v518 = b$$23.sigBytes;
    var v807 = b$$23.words;
    var v808 = b$$23.sigBytes - 1 >>> 2;
    introspect(JAM.policy.p12) {
      var v694 = v807[v808]
    }
    b$$23.sigBytes = v518 - (v694 & 255);
    return;
  }
  function v77(b$$22, a$$41) {
    var c$$20 = 4 * a$$41;
    c$$20 = c$$20 - b$$22.sigBytes % c$$20;
    var e$$28 = c$$20 << 24 | c$$20 << 16 | c$$20 << 8 | c$$20;
    var f$$11 = [];
    var g$$9 = 0;
    var v210 = g$$9 < c$$20;
    for (;v210;) {
      f$$11.push(e$$28);
      g$$9 = g$$9 + 4;
      v210 = g$$9 < c$$20;
    }
    c$$20 = JAM.call(r$$4.create, r$$4, [f$$11, c$$20]);
    JAM.call(b$$22.concat, b$$22, [c$$20]);
    return;
  }
  function v76() {
    function v75(a$$40, d$$13) {
      var c$$19 = this._cipher;
      var e$$27 = c$$19.blockSize;
      var f$$10 = a$$40.slice(d$$13, d$$13 + e$$27);
      JAM.call(c$$19.decryptBlock, c$$19, [a$$40, d$$13]);
      b$$20.call(this, a$$40, d$$13, e$$27);
      this._prevBlock = f$$10;
      return;
    }
    function v74(a$$39, d$$12) {
      var c$$18 = this._cipher;
      var e$$26 = c$$18.blockSize;
      b$$20.call(this, a$$39, d$$12, e$$26);
      JAM.call(c$$18.encryptBlock, c$$18, [a$$39, d$$12]);
      var v1081 = a$$39.slice(d$$12, d$$12 + e$$26);
      this._prevBlock = v1081;
      return;
    }
    function b$$20(b$$21, a$$38, d$$11) {
      var c$$17 = this._iv;
      var v213;
      if (c$$17) {
        v213 = this._iv = p$$4;
      } else {
        v213 = c$$17 = this._prevBlock;
      }
      v213;
      var e$$25 = 0;
      var v215 = e$$25 < d$$11;
      for (;v215;) {
        var v214 = a$$38 + e$$25;
        introspect(JAM.policy.p12) {
          var v697 = b$$21[v214]
        }
        introspect(JAM.policy.p12) {
          var v698 = c$$17[e$$25]
        }
        introspect(JAM.policy.p17) {
          b$$21[v214] = v697 ^ v698;
        }
        e$$25++;
        v215 = e$$25 < d$$11;
      }
      return;
    }
    var a$$37 = f$$9.extend();
    var v216 = a$$37;
    var v1082 = JAM.call(a$$37.extend, a$$37, [{processBlock:v74}]);
    v216.Encryptor = v1082;
    var v217 = a$$37;
    var v1083 = JAM.call(a$$37.extend, a$$37, [{processBlock:v75}]);
    v217.Decryptor = v1083;
    return a$$37;
  }
  function v73(b$$19, a$$36) {
    this._cipher = b$$19;
    this._iv = a$$36;
    return;
  }
  function v72(b$$18, a$$35) {
    var v218 = this.Decryptor;
    return JAM.call(v218.create, v218, [b$$18, a$$35]);
  }
  function v71(b$$17, a$$34) {
    var v219 = this.Encryptor;
    return JAM.call(v219.create, v219, [b$$17, a$$34]);
  }
  function v70() {
    return JAM.call(this._process, this, [!0]);
  }
  function v69() {
    function v68(b$$16) {
      function v67(a$$33, q$$3, j$$2) {
        var v525;
        if ("string" == typeof q$$3) {
          v525 = c$$16;
        } else {
          v525 = e$$24;
        }
        var v221 = v525;
        return JAM.call(v221.decrypt, v221, [b$$16, a$$33, q$$3, j$$2]);
      }
      function v66(a$$32, q$$2, j$$1) {
        var v526;
        if ("string" == typeof q$$2) {
          v526 = c$$16;
        } else {
          v526 = e$$24;
        }
        var v222 = v526;
        return JAM.call(v222.encrypt, v222, [b$$16, a$$32, q$$2, j$$1]);
      }
      return {encrypt:v66, decrypt:v67};
    }
    return v68;
  }
  function v65(b$$15) {
    if (b$$15) {
      JAM.call(this._append, this, [b$$15]);
    }
    return this._doFinalize();
  }
  function v64(b$$14) {
    JAM.call(this._append, this, [b$$14]);
    return this._process();
  }
  function v63() {
    var v223 = o$$4.reset;
    JAM.call(v223.call, v223, [this]);
    this._doReset();
    return;
  }
  function v62(b$$13, d$$10, a$$31) {
    var v224 = this.cfg;
    var v1084 = JAM.call(v224.extend, v224, [a$$31]);
    this.cfg = v1084;
    this._xformMode = b$$13;
    this._key = d$$10;
    this.reset();
    return;
  }
  function v61(b$$12, d$$9) {
    return JAM.call(this.create, this, [this._DEC_XFORM_MODE, b$$12, d$$9]);
  }
  function v60(b$$11, d$$8) {
    return JAM.call(this.create, this, [this._ENC_XFORM_MODE, b$$11, d$$8]);
  }
  var h$$11 = CryptoJS;
  var i$$12 = h$$11.lib;
  var l$$6 = i$$12.Base;
  var r$$4 = i$$12.WordArray;
  var o$$4 = i$$12.BufferedBlockAlgorithm;
  var m$$5 = h$$11.enc.Base64;
  var s$$6 = h$$11.algo.EvpKDF;
  var v229 = i$$12;
  var v1085 = JAM.call(o$$4.extend, o$$4, [{cfg:l$$6.extend(), createEncryptor:v60, createDecryptor:v61, init:v62, reset:v63, process:v64, finalize:v65, keySize:4, ivSize:4, _ENC_XFORM_MODE:1, _DEC_XFORM_MODE:2, _createHelper:v69()}]);
  var n$$6 = v229.Cipher = v1085;
  var v230 = i$$12;
  var v1086 = JAM.call(n$$6.extend, n$$6, [{_doFinalize:v70, blockSize:1}]);
  v230.StreamCipher = v1086;
  var k$$4 = h$$11.mode = {};
  var v231 = i$$12;
  var v1087 = JAM.call(l$$6.extend, l$$6, [{createEncryptor:v71, createDecryptor:v72, init:v73}]);
  var f$$9 = v231.BlockCipherMode = v1087;
  var v232 = k$$4;
  var v1088 = v76();
  k$$4 = v232.CBC = v1088;
  var g$$8 = (h$$11.pad = {}).Pkcs7 = {pad:v77, unpad:v78};
  var v234 = i$$12;
  var v811 = n$$6.cfg;
  var v1089 = JAM.call(n$$6.extend, n$$6, [{cfg:JAM.call(v811.extend, v811, [{mode:k$$4, padding:g$$8}]), reset:v79, _doProcessBlock:v80, _doFinalize:v81, blockSize:4}]);
  v234.BlockCipher = v1089;
  var v235 = i$$12;
  var v1090 = JAM.call(l$$6.extend, l$$6, [{init:v82, toString:v83}]);
  var a$$30 = v235.CipherParams = v1090;
  k$$4 = (h$$11.format = {}).OpenSSL = {stringify:v84, parse:v85};
  var v237 = i$$12;
  var v1091 = JAM.call(l$$6.extend, l$$6, [{cfg:JAM.call(l$$6.extend, l$$6, [{format:k$$4}]), encrypt:v86, decrypt:v87, _parse:v88}]);
  var e$$24 = v237.SerializableCipher = v1091;
  h$$11 = (h$$11.kdf = {}).OpenSSL = {compute:v89};
  var v239 = i$$12;
  var v814 = e$$24.cfg;
  var v1092 = JAM.call(e$$24.extend, e$$24, [{cfg:JAM.call(v814.extend, v814, [{kdf:h$$11}]), encrypt:v90, decrypt:v91}]);
  var c$$16 = v239.PasswordBasedCipher = v1092;
  return;
}
function v59() {
  function v58(i$$11, l$$5, h$$10) {
    var v240 = JAM.call(r$$3.create, r$$3, [h$$10]);
    return JAM.call(v240.compute, v240, [i$$11, l$$5]);
  }
  function v57(i$$10, m$$4) {
    var h$$9 = this.cfg;
    var n$$5 = h$$9.hasher.create();
    var k$$3 = l$$4.create();
    var f$$8 = k$$3.words;
    var g$$7 = h$$9.keySize;
    h$$9 = h$$9.iterations;
    var v244 = f$$8.length < g$$7;
    for (;v244;) {
      if (a$$29) {
        JAM.call(n$$5.update, n$$5, [a$$29]);
      }
      var v242 = JAM.call(n$$5.update, n$$5, [i$$10]);
      var a$$29 = JAM.call(v242.finalize, v242, [m$$4]);
      n$$5.reset();
      var e$$23 = 1;
      var v243 = e$$23 < h$$9;
      for (;v243;) {
        a$$29 = JAM.call(n$$5.finalize, n$$5, [a$$29]);
        n$$5.reset();
        e$$23++;
        v243 = e$$23 < h$$9;
      }
      JAM.call(k$$3.concat, k$$3, [a$$29]);
      v244 = f$$8.length < g$$7;
    }
    k$$3.sigBytes = 4 * g$$7;
    return k$$3;
  }
  function v56(i$$9) {
    var v245 = this.cfg;
    var v1093 = JAM.call(v245.extend, v245, [i$$9]);
    this.cfg = v1093;
    return;
  }
  var p$$3 = CryptoJS;
  var h$$8 = p$$3.lib;
  var i$$8 = h$$8.Base;
  var l$$4 = h$$8.WordArray;
  h$$8 = p$$3.algo;
  var v246 = h$$8;
  var v1094 = JAM.call(i$$8.extend, i$$8, [{cfg:JAM.call(i$$8.extend, i$$8, [{keySize:4, hasher:h$$8.MD5, iterations:1}]), init:v56, compute:v57}]);
  var r$$3 = v246.EvpKDF = v1094;
  p$$3.EvpKDF = v58;
  return;
}
function v55(p$$2) {
  function v54() {
    var f$$7 = this._data;
    var g$$6 = f$$7.words;
    var a$$28 = 8 * this._nDataBytes;
    var e$$22 = 8 * f$$7.sigBytes;
    var v249 = e$$22 >>> 5;
    introspect(JAM.policy.p12) {
      var v707 = g$$6[v249]
    }
    g$$6[v249] = v707 | 128 << 24 - e$$22 % 32;
    g$$6[(e$$22 + 64 >>> 9 << 4) + 14] = (a$$28 << 8 | a$$28 >>> 24) & 16711935 | (a$$28 << 24 | a$$28 >>> 8) & 4278255360;
    f$$7.sigBytes = 4 * (g$$6.length + 1);
    this._process();
    f$$7 = this._hash.words;
    g$$6 = 0;
    var v253 = 4 > g$$6;
    for (;v253;) {
      introspect(JAM.policy.p12) {
        a$$28 = f$$7[g$$6];
      }
      var v541 = (a$$28 << 8 | a$$28 >>> 24) & 16711935;
      var v542 = (a$$28 << 24 | a$$28 >>> 8) & 4278255360;
      introspect(JAM.policy.p17) {
        f$$7[g$$6] = v541 | v542;
      }
      g$$6++;
      v253 = 4 > g$$6;
    }
    return;
  }
  function v53(f$$6, g$$5) {
    var a$$27 = 0;
    var v256 = 16 > a$$27;
    for (;v256;) {
      var e$$21 = g$$5 + a$$27;
      introspect(JAM.policy.p12) {
        var c$$15 = f$$6[e$$21]
      }
      var v254 = (c$$15 << 8 | c$$15 >>> 24) & 16711935;
      var v255 = (c$$15 << 24 | c$$15 >>> 8) & 4278255360;
      introspect(JAM.policy.p17) {
        f$$6[e$$21] = v254 | v255;
      }
      a$$27++;
      v256 = 16 > a$$27;
    }
    e$$21 = this._hash.words;
    c$$15 = e$$21[0];
    var b$$10 = e$$21[1];
    var d$$7 = e$$21[2];
    var q$$1 = e$$21[3];
    a$$27 = 0;
    var v259 = 64 > a$$27;
    for (;v259;) {
      var v258;
      if (16 > a$$27) {
        var v967 = g$$5 + a$$27;
        introspect(JAM.policy.p12) {
          var v903 = f$$6[v967]
        }
        introspect(JAM.policy.p12) {
          var v904 = k$$2[a$$27]
        }
        c$$15 = h$$7(c$$15, b$$10, d$$7, q$$1, v903, 7, v904);
        var v968 = g$$5 + a$$27 + 1;
        introspect(JAM.policy.p12) {
          var v905 = f$$6[v968]
        }
        var v969 = a$$27 + 1;
        introspect(JAM.policy.p12) {
          var v906 = k$$2[v969]
        }
        q$$1 = h$$7(q$$1, c$$15, b$$10, d$$7, v905, 12, v906);
        var v907 = g$$5 + a$$27 + 2;
        introspect(JAM.policy.p12) {
          var v827 = f$$6[v907]
        }
        var v908 = a$$27 + 2;
        introspect(JAM.policy.p12) {
          var v828 = k$$2[v908]
        }
        d$$7 = h$$7(d$$7, q$$1, c$$15, b$$10, v827, 17, v828);
        var v829 = g$$5 + a$$27 + 3;
        introspect(JAM.policy.p12) {
          var v718 = f$$6[v829]
        }
        var v830 = a$$27 + 3;
        introspect(JAM.policy.p12) {
          var v719 = k$$2[v830]
        }
        v258 = b$$10 = h$$7(b$$10, d$$7, q$$1, c$$15, v718, 22, v719);
      } else {
        var v545;
        if (32 > a$$27) {
          var v1014 = g$$5 + (a$$27 + 1) % 16;
          introspect(JAM.policy.p12) {
            var v971 = f$$6[v1014]
          }
          introspect(JAM.policy.p12) {
            var v972 = k$$2[a$$27]
          }
          c$$15 = i$$7(c$$15, b$$10, d$$7, q$$1, v971, 5, v972);
          var v1015 = g$$5 + (a$$27 + 6) % 16;
          introspect(JAM.policy.p12) {
            var v973 = f$$6[v1015]
          }
          var v1016 = a$$27 + 1;
          introspect(JAM.policy.p12) {
            var v974 = k$$2[v1016]
          }
          q$$1 = i$$7(q$$1, c$$15, b$$10, d$$7, v973, 9, v974);
          var v975 = g$$5 + (a$$27 + 11) % 16;
          introspect(JAM.policy.p12) {
            var v910 = f$$6[v975]
          }
          var v976 = a$$27 + 2;
          introspect(JAM.policy.p12) {
            var v911 = k$$2[v976]
          }
          d$$7 = i$$7(d$$7, q$$1, c$$15, b$$10, v910, 14, v911);
          var v912 = g$$5 + a$$27 % 16;
          introspect(JAM.policy.p12) {
            var v831 = f$$6[v912]
          }
          var v913 = a$$27 + 3;
          introspect(JAM.policy.p12) {
            var v832 = k$$2[v913]
          }
          v545 = b$$10 = i$$7(b$$10, d$$7, q$$1, c$$15, v831, 20, v832);
        } else {
          var v720;
          if (48 > a$$27) {
            var v1046 = g$$5 + (3 * a$$27 + 5) % 16;
            introspect(JAM.policy.p12) {
              var v1018 = f$$6[v1046]
            }
            introspect(JAM.policy.p12) {
              var v1019 = k$$2[a$$27]
            }
            c$$15 = l$$3(c$$15, b$$10, d$$7, q$$1, v1018, 4, v1019);
            var v1047 = g$$5 + (3 * a$$27 + 8) % 16;
            introspect(JAM.policy.p12) {
              var v1020 = f$$6[v1047]
            }
            var v1048 = a$$27 + 1;
            introspect(JAM.policy.p12) {
              var v1021 = k$$2[v1048]
            }
            q$$1 = l$$3(q$$1, c$$15, b$$10, d$$7, v1020, 11, v1021);
            var v1022 = g$$5 + (3 * a$$27 + 11) % 16;
            introspect(JAM.policy.p12) {
              var v978 = f$$6[v1022]
            }
            var v1023 = a$$27 + 2;
            introspect(JAM.policy.p12) {
              var v979 = k$$2[v1023]
            }
            d$$7 = l$$3(d$$7, q$$1, c$$15, b$$10, v978, 16, v979);
            var v980 = g$$5 + (3 * a$$27 + 14) % 16;
            introspect(JAM.policy.p12) {
              var v914 = f$$6[v980]
            }
            var v981 = a$$27 + 3;
            introspect(JAM.policy.p12) {
              var v915 = k$$2[v981]
            }
            v720 = b$$10 = l$$3(b$$10, d$$7, q$$1, c$$15, v914, 23, v915);
          } else {
            var v1051 = g$$5 + 3 * a$$27 % 16;
            introspect(JAM.policy.p12) {
              var v1025 = f$$6[v1051]
            }
            introspect(JAM.policy.p12) {
              var v1026 = k$$2[a$$27]
            }
            c$$15 = r$$2(c$$15, b$$10, d$$7, q$$1, v1025, 6, v1026);
            var v1052 = g$$5 + (3 * a$$27 + 7) % 16;
            introspect(JAM.policy.p12) {
              var v1027 = f$$6[v1052]
            }
            var v1053 = a$$27 + 1;
            introspect(JAM.policy.p12) {
              var v1028 = k$$2[v1053]
            }
            q$$1 = r$$2(q$$1, c$$15, b$$10, d$$7, v1027, 10, v1028);
            var v1029 = g$$5 + (3 * a$$27 + 14) % 16;
            introspect(JAM.policy.p12) {
              var v982 = f$$6[v1029]
            }
            var v1030 = a$$27 + 2;
            introspect(JAM.policy.p12) {
              var v983 = k$$2[v1030]
            }
            d$$7 = r$$2(d$$7, q$$1, c$$15, b$$10, v982, 15, v983);
            var v984 = g$$5 + (3 * a$$27 + 5) % 16;
            introspect(JAM.policy.p12) {
              var v916 = f$$6[v984]
            }
            var v985 = a$$27 + 3;
            introspect(JAM.policy.p12) {
              var v917 = k$$2[v985]
            }
            v720 = b$$10 = r$$2(b$$10, d$$7, q$$1, c$$15, v916, 21, v917);
          }
          v545 = v720;
        }
        v258 = v545;
      }
      v258;
      a$$27 = a$$27 + 4;
      v259 = 64 > a$$27;
    }
    e$$21[0] = e$$21[0] + c$$15 | 0;
    e$$21[1] = e$$21[1] + b$$10 | 0;
    e$$21[2] = e$$21[2] + d$$7 | 0;
    e$$21[3] = e$$21[3] + q$$1 | 0;
    return;
  }
  function v52() {
    var v1095 = JAM.call(s$$5.create, s$$5, [[1732584193, 4023233417, 2562383102, 271733878]]);
    this._hash = v1095;
    return;
  }
  function v51() {
    var f$$5 = 0;
    var v266 = 64 > f$$5;
    for (;v266;) {
      k$$2[f$$5] = 4294967296 * p$$2.abs(p$$2.sin(f$$5 + 1)) | 0;
      f$$5++;
      v266 = 64 > f$$5;
    }
    return;
  }
  function h$$7(f$$1, g$$1, a$$23, e$$17, c$$11, b$$6, d$$3) {
    f$$1 = f$$1 + (g$$1 & a$$23 | ~g$$1 & e$$17) + c$$11 + d$$3;
    return (f$$1 << b$$6 | f$$1 >>> 32 - b$$6) + g$$1;
  }
  function i$$7(f$$2, g$$2, a$$24, e$$18, c$$12, b$$7, d$$4) {
    f$$2 = f$$2 + (g$$2 & e$$18 | a$$24 & ~e$$18) + c$$12 + d$$4;
    return (f$$2 << b$$7 | f$$2 >>> 32 - b$$7) + g$$2;
  }
  function l$$3(f$$3, g$$3, a$$25, e$$19, c$$13, b$$8, d$$5) {
    f$$3 = f$$3 + (g$$3 ^ a$$25 ^ e$$19) + c$$13 + d$$5;
    return (f$$3 << b$$8 | f$$3 >>> 32 - b$$8) + g$$3;
  }
  function r$$2(f$$4, g$$4, a$$26, e$$20, c$$14, b$$9, d$$6) {
    f$$4 = f$$4 + (a$$26 ^ (g$$4 | ~e$$20)) + c$$14 + d$$6;
    return (f$$4 << b$$9 | f$$4 >>> 32 - b$$9) + g$$4;
  }
  var o$$3 = CryptoJS;
  var m$$3 = o$$3.lib;
  var s$$5 = m$$3.WordArray;
  m$$3 = m$$3.Hasher;
  var n$$4 = o$$3.algo;
  var k$$2 = [];
  v51();
  var v275 = n$$4;
  var v1096 = JAM.call(m$$3.extend, m$$3, [{_doReset:v52, _doProcessBlock:v53, _doFinalize:v54}]);
  n$$4 = v275.MD5 = v1096;
  var v276 = o$$3;
  var v1097 = JAM.call(m$$3._createHelper, m$$3, [n$$4]);
  v276.MD5 = v1097;
  var v277 = o$$3;
  var v1098 = JAM.call(m$$3._createHmacHelper, m$$3, [n$$4]);
  v277.HmacMD5 = v1098;
  return;
}
function v50() {
  function v49(i$$6) {
    i$$6 = i$$6.replace(/\s/g, "");
    var l$$2 = i$$6.length;
    var r$$1 = this._map;
    var o$$2 = r$$1.charAt(64);
    if (o$$2) {
      o$$2 = i$$6.indexOf(o$$2);
      var v731 = -1 != o$$2;
      if (v731) {
        l$$2 = o$$2;
      }
    }
    o$$2 = [];
    var m$$2 = 0;
    var s$$4 = 0;
    var v284 = s$$4 < l$$2;
    for (;v284;) {
      if (s$$4 % 4) {
        var n$$3 = r$$1.indexOf(i$$6.charAt(s$$4 - 1)) << 2 * (s$$4 % 4);
        var k$$1 = r$$1.indexOf(i$$6.charAt(s$$4)) >>> 6 - 2 * (s$$4 % 4);
        var v282 = m$$2 >>> 2;
        introspect(JAM.policy.p12) {
          var v734 = o$$2[v282]
        }
        o$$2[v282] = v734 | (n$$3 | k$$1) << 24 - 8 * (m$$2 % 4);
        m$$2++;
      }
      s$$4++;
      v284 = s$$4 < l$$2;
    }
    return JAM.call(h$$5.create, h$$5, [o$$2, m$$2]);
  }
  function v48(i$$5) {
    var l$$1 = i$$5.words;
    var h$$6 = i$$5.sigBytes;
    var o$$1 = this._map;
    i$$5.clamp();
    i$$5 = [];
    var m$$1 = 0;
    var v289 = m$$1 < h$$6;
    for (;v289;) {
      var v987 = m$$1 >>> 2;
      introspect(JAM.policy.p12) {
        var v923 = l$$1[v987]
      }
      var v569 = (v923 >>> 24 - 8 * (m$$1 % 4) & 255) << 16;
      var v989 = m$$1 + 1 >>> 2;
      introspect(JAM.policy.p12) {
        var v925 = l$$1[v989]
      }
      var v285 = v569 | (v925 >>> 24 - 8 * ((m$$1 + 1) % 4) & 255) << 8;
      var v845 = m$$1 + 2 >>> 2;
      introspect(JAM.policy.p12) {
        var v738 = l$$1[v845]
      }
      var s$$3 = v285 | v738 >>> 24 - 8 * ((m$$1 + 2) % 4) & 255;
      var n$$2 = 0;
      var v572 = 4 > n$$2;
      if (v572) {
        v572 = m$$1 + .75 * n$$2 < h$$6;
      }
      var v288 = v572;
      for (;v288;) {
        i$$5.push(o$$1.charAt(s$$3 >>> 6 * (3 - n$$2) & 63));
        n$$2++;
        var v574 = 4 > n$$2;
        if (v574) {
          v574 = m$$1 + .75 * n$$2 < h$$6;
        }
        v288 = v574;
      }
      m$$1 = m$$1 + 3;
      v289 = m$$1 < h$$6;
    }
    if (l$$1 = o$$1.charAt(64)) {
      var v290 = i$$5.length % 4;
      for (;v290;) {
        i$$5.push(l$$1);
        v290 = i$$5.length % 4;
      }
    }
    return i$$5.join("");
  }
  var p$$1 = CryptoJS;
  var h$$5 = p$$1.lib.WordArray;
  p$$1.enc.Base64 = {stringify:v48, parse:v49, _map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};
  return;
}
function v47(p, h$$4) {
  function v46(a$$22) {
    function v45(e$$16, c$$10) {
      var v577 = g.HMAC;
      var v294 = JAM.call(v577.create, v577, [a$$22, c$$10]);
      return JAM.call(v294.finalize, v294, [e$$16]);
    }
    return v45;
  }
  function v44(a$$21) {
    function v43(e$$15, c$$9) {
      var v295 = JAM.call(a$$21.create, a$$21, [c$$9]);
      return JAM.call(v295.finalize, v295, [e$$15]);
    }
    return v43;
  }
  function v42() {
    var v296 = f.clone;
    var a$$20 = JAM.call(v296.call, v296, [this]);
    var v1099 = this._hash.clone();
    a$$20._hash = v1099;
    return a$$20;
  }
  function v41(a$$19) {
    if (a$$19) {
      JAM.call(this._append, this, [a$$19]);
    }
    this._doFinalize();
    return this._hash;
  }
  function v40(a$$18) {
    JAM.call(this._append, this, [a$$18]);
    this._process();
    return this;
  }
  function v39() {
    var v298 = f.reset;
    JAM.call(v298.call, v298, [this]);
    this._doReset();
    return;
  }
  function v38() {
    this.reset();
    return;
  }
  function v37() {
    var v299 = r.clone;
    var a$$17 = JAM.call(v299.call, v299, [this]);
    var v1100 = this._data.clone();
    a$$17._data = v1100;
    return a$$17;
  }
  function v36(a$$16) {
    var e$$14 = this._data;
    var c$$8 = e$$14.words;
    var b$$5 = e$$14.sigBytes;
    var d$$2 = this.blockSize;
    var q = b$$5 / (4 * d$$2);
    var v302;
    if (a$$16) {
      v302 = p.ceil(q);
    } else {
      v302 = p.max((q | 0) - this._minBufferSize, 0);
    }
    q = v302;
    a$$16 = q * d$$2;
    b$$5 = p.min(4 * a$$16, b$$5);
    if (a$$16) {
      var j = 0;
      var v304 = j < a$$16;
      for (;v304;) {
        JAM.call(this._doProcessBlock, this, [c$$8, j]);
        j = j + d$$2;
        v304 = j < a$$16;
      }
      j = c$$8.splice(0, a$$16);
      e$$14.sigBytes = e$$14.sigBytes - b$$5;
    }
    return JAM.call(o.create, o, [j, b$$5]);
  }
  function v35(a$$15) {
    var v305 = "string" == typeof a$$15;
    if (v305) {
      a$$15 = JAM.call(k.parse, k, [a$$15]);
    }
    var v306 = this._data;
    JAM.call(v306.concat, v306, [a$$15]);
    this._nDataBytes = this._nDataBytes + a$$15.sigBytes;
    return;
  }
  function v34() {
    var v1101 = o.create();
    this._data = v1101;
    this._nDataBytes = 0;
    return;
  }
  function v33(a$$14) {
    return JAM.call(n$$1.parse, n$$1, [unescape(encodeURIComponent(a$$14))]);
  }
  function v32(a$$13) {
    try {
      return decodeURIComponent(escape(JAM.call(n$$1.stringify, n$$1, [a$$13])));
    } catch (e$$13) {
      throw Error("Malformed UTF-8 data");
    }
    return;
  }
  function v31(a$$12) {
    var e$$12 = a$$12.length;
    var c$$7 = [];
    var b$$4 = 0;
    var v310 = b$$4 < e$$12;
    for (;v310;) {
      var v309 = b$$4 >>> 2;
      introspect(JAM.policy.p12) {
        var v745 = c$$7[v309]
      }
      c$$7[v309] = v745 | (a$$12.charCodeAt(b$$4) & 255) << 24 - 8 * (b$$4 % 4);
      b$$4++;
      v310 = b$$4 < e$$12;
    }
    return JAM.call(o.create, o, [c$$7, e$$12]);
  }
  function v30(a$$11) {
    var e$$11 = a$$11.words;
    a$$11 = a$$11.sigBytes;
    var c$$6 = [];
    var b$$3 = 0;
    var v312 = b$$3 < a$$11;
    for (;v312;) {
      var v932 = b$$3 >>> 2;
      introspect(JAM.policy.p12) {
        var v852 = e$$11[v932]
      }
      c$$6.push(String.fromCharCode(v852 >>> 24 - 8 * (b$$3 % 4) & 255));
      b$$3++;
      v312 = b$$3 < a$$11;
    }
    return c$$6.join("");
  }
  function v29(a$$10) {
    var e$$10 = a$$10.length;
    var c$$5 = [];
    var b$$2 = 0;
    var v314 = b$$2 < e$$10;
    for (;v314;) {
      var v313 = b$$2 >>> 3;
      introspect(JAM.policy.p12) {
        var v748 = c$$5[v313]
      }
      c$$5[v313] = v748 | parseInt(a$$10.substr(b$$2, 2), 16) << 24 - 4 * (b$$2 % 8);
      b$$2 = b$$2 + 2;
      v314 = b$$2 < e$$10;
    }
    return JAM.call(o.create, o, [c$$5, e$$10 / 2]);
  }
  function v28(a$$9) {
    var e$$9 = a$$9.words;
    a$$9 = a$$9.sigBytes;
    var c$$4 = [];
    var b$$1 = 0;
    var v319 = b$$1 < a$$9;
    for (;v319;) {
      var v750 = b$$1 >>> 2;
      introspect(JAM.policy.p12) {
        var v586 = e$$9[v750]
      }
      var d$$1 = v586 >>> 24 - 8 * (b$$1 % 4) & 255;
      var v588 = d$$1 >>> 4;
      c$$4.push(JAM.call(v588.toString, v588, [16]));
      var v589 = d$$1 & 15;
      c$$4.push(JAM.call(v589.toString, v589, [16]));
      b$$1++;
      v319 = b$$1 < a$$9;
    }
    return c$$4.join("");
  }
  function v27(a$$8) {
    var e$$8 = [];
    var c$$3 = 0;
    var v321 = c$$3 < a$$8;
    for (;v321;) {
      e$$8.push(4294967296 * p.random() | 0);
      c$$3 = c$$3 + 4;
      v321 = c$$3 < a$$8;
    }
    return JAM.call(o.create, o, [e$$8, a$$8]);
  }
  function v26() {
    var v322 = r.clone;
    var a$$7 = JAM.call(v322.call, v322, [this]);
    var v1102 = this.words.slice(0);
    a$$7.words = v1102;
    return a$$7;
  }
  function v25() {
    var a$$6 = this.words;
    var e$$7 = this.sigBytes;
    var v324 = e$$7 >>> 2;
    introspect(JAM.policy.p12) {
      var v753 = a$$6[v324]
    }
    a$$6[v324] = v753 & 4294967295 << 32 - 8 * (e$$7 % 4);
    var v1103 = p.ceil(e$$7 / 4);
    a$$6.length = v1103;
    return;
  }
  function v24(a$$5) {
    var e$$6 = this.words;
    var c$$2 = a$$5.words;
    var b = this.sigBytes;
    a$$5 = a$$5.sigBytes;
    this.clamp();
    if (b % 4) {
      var d = 0;
      var v327 = d < a$$5;
      for (;v327;) {
        var v326 = b + d >>> 2;
        introspect(JAM.policy.p12) {
          var v755 = e$$6[v326]
        }
        var v1035 = d >>> 2;
        introspect(JAM.policy.p12) {
          var v996 = c$$2[v1035]
        }
        e$$6[v326] = v755 | (v996 >>> 24 - 8 * (d % 4) & 255) << 24 - 8 * ((b + d) % 4);
        d++;
        v327 = d < a$$5;
      }
    } else {
      if (65535 < c$$2.length) {
        d = 0;
        var v329 = d < a$$5;
        for (;v329;) {
          var v328 = b + d >>> 2;
          var v594 = d >>> 2;
          introspect(JAM.policy.p12) {
            e$$6[v328] = c$$2[v594];
          }
          d = d + 4;
          v329 = d < a$$5;
        }
      } else {
        var v330 = e$$6.push;
        JAM.call(v330.apply, v330, [e$$6, c$$2]);
      }
    }
    this.sigBytes = this.sigBytes + a$$5;
    return this;
  }
  function v23(a$$4) {
    var v333 = a$$4 || s$$2;
    return JAM.call(v333.stringify, v333, [this]);
  }
  function v22(a$$3, e$$5) {
    a$$3 = this.words = a$$3 || [];
    var v334;
    if (e$$5 != h$$4) {
      v334 = e$$5;
    } else {
      v334 = 4 * a$$3.length;
    }
    this.sigBytes = v334;
    return;
  }
  function v21() {
    function v20() {
      var v335 = this.$super;
      return JAM.call(v335.extend, v335, [this]);
    }
    function v19(a$$2) {
      var c$$1;
      for (c$$1 in a$$2) {
        var v336 = a$$2.hasOwnProperty(c$$1);
        if (v336) {
          introspect(JAM.policy.p18) {
            this[c$$1] = a$$2[c$$1];
          }
        }
      }
      var v337 = a$$2.hasOwnProperty("toString");
      if (v337) {
        this.toString = a$$2.toString;
      }
      return;
    }
    function v18() {
      return;
    }
    function v17() {
      var a$$1 = this.extend();
      var v338 = a$$1.init;
      JAM.call(v338.apply, v338, [a$$1, arguments]);
      return a$$1;
    }
    function v16(e$$4) {
      a.prototype = this;
      var c = new a;
      if (e$$4) {
        JAM.call(c.mixIn, c, [e$$4]);
      }
      c.$super = this;
      return c;
    }
    function a() {
      return;
    }
    return {extend:v16, create:v17, init:v18, mixIn:v19, clone:v20};
  }
  var i$$4 = {};
  var l = i$$4.lib = {};
  var v339 = l;
  var v1104 = v21();
  var r = v339.Base = v1104;
  var v340 = l;
  var v1105 = JAM.call(r.extend, r, [{init:v22, toString:v23, concat:v24, clamp:v25, clone:v26, random:v27}]);
  var o = v340.WordArray = v1105;
  var m = i$$4.enc = {};
  var s$$2 = m.Hex = {stringify:v28, parse:v29};
  var n$$1 = m.Latin1 = {stringify:v30, parse:v31};
  var k = m.Utf8 = {stringify:v32, parse:v33};
  var v341 = l;
  var v1106 = JAM.call(r.extend, r, [{reset:v34, _append:v35, _process:v36, clone:v37, _minBufferSize:0}]);
  var f = v341.BufferedBlockAlgorithm = v1106;
  var v342 = l;
  var v1107 = JAM.call(f.extend, f, [{init:v38, reset:v39, update:v40, finalize:v41, clone:v42, blockSize:16, _createHelper:v44, _createHmacHelper:v46}]);
  v342.Hasher = v1107;
  var g = i$$4.algo = {};
  return i$$4;
}
function getElementsByClass() {
  var strClassName = "mwwidget:snote";
  var arrayElemsFound = new Array;
  var arrayElems = document.getElementsByTagName("*");
  var i$$2 = 0;
  var v345 = i$$2 < arrayElems.length;
  for (;v345;) {
    introspect(JAM.policy.p12) {
      var v757 = arrayElems[i$$2]
    }
    if (v757.className == strClassName) {
      introspect(JAM.policy.p12) {
        var v343 = arrayElems[i$$2]
      }
      arrayElemsFound.push(v343);
    }
    i$$2++;
    v345 = i$$2 < arrayElems.length;
  }
  return arrayElemsFound;
}
function getElementsByType(strType) {
  var arrayElemsFound$$1 = new Array;
  var arrayElems$$1 = document.getElementsByTagName("*");
  var i$$3 = 0;
  var v348 = i$$3 < arrayElems$$1.length;
  for (;v348;) {
    introspect(JAM.policy.p12) {
      var v758 = arrayElems$$1[i$$3]
    }
    if (v758.type == strType) {
      introspect(JAM.policy.p12) {
        var v346 = arrayElems$$1[i$$3]
      }
      arrayElemsFound$$1.push(v346);
    }
    i$$3++;
    v348 = i$$3 < arrayElems$$1.length;
  }
  return arrayElemsFound$$1;
}
function ajaxPost(callback$$25) {
  var strData$$1 = strData;
  var strUrl$$1 = strUrl;
  ajaxRequest("POST", strData$$1, strUrl$$1, callback$$25);
  return;
}
function ajaxGet(strUrl$$2, callback$$26) {
  ajaxRequest("GET", "", strUrl$$2, callback$$26);
  return;
}
function ajaxRequest(strCommand, strData$$2, strUrl$$3, callback$$27) {
  function v0() {
    var v607 = xmlhttp.readyState == 4;
    if (v607) {
      v607 = xmlhttp.status == 200;
    }
    if (v607) {
      JAM.call(callback$$27, null, [xmlhttp.responseText]);
    }
    return;
  }
  xmlhttp = new XMLHttpRequest;
  JAM.set(xmlhttp, "onreadystatechange", v0);
  xmlhttp.open(strCommand, strUrl$$3, true);
  if (strData$$2 != "") {
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(strData$$2);
  } else {
    xmlhttp.send();
  }
  return;
}
function SNote() {
  function v14(jsonStr) {
    var jsonObj$$1 = JAM.call(JSON.parse, JSON, [jsonStr]);
    var v352 = CryptoJS.lib.CipherParams;
    var v761 = CryptoJS.enc.Base64;
    var cipherParams$$1 = JAM.call(v352.create, v352, [{ciphertext:JAM.call(v761.parse, v761, [jsonObj$$1.ct])}]);
    if (jsonObj$$1.iv) {
      var v354 = CryptoJS.enc.Hex;
      var v1108 = JAM.call(v354.parse, v354, [jsonObj$$1.iv]);
      cipherParams$$1.iv = v1108;
    }
    if (jsonObj$$1.s) {
      var v357 = CryptoJS.enc.Hex;
      var v1109 = JAM.call(v357.parse, v357, [jsonObj$$1.s]);
      cipherParams$$1.salt = v1109;
    }
    return cipherParams$$1;
  }
  function v13(cipherParams) {
    var v612 = cipherParams.ciphertext;
    var jsonObj = {ct:JAM.call(v612.toString, v612, [CryptoJS.enc.Base64])};
    if (cipherParams.iv) {
      var v1110 = cipherParams.iv.toString();
      jsonObj.iv = v1110;
    }
    if (cipherParams.salt) {
      var v1111 = cipherParams.salt.toString();
      jsonObj.s = v1111;
    }
    return JAM.call(JSON.stringify, JSON, [jsonObj]);
  }
  function init(divParent$$1, strServerPath) {
    strNoteId = divParent$$1.id;
    var divParent$$inline_5 = divParent$$1;
    var strServerPath$$inline_6 = strServerPath;
    var strNoteId$$inline_7 = strNoteId;
    divParent$$inline_5.style.border = "2px solid";
    divParent$$inline_5.style.backgroundColor = "#FFFFCC";
    divParent$$inline_5.className = "mwwidget:snote";
    var divParent$$inline_79 = divParent$$inline_5;
    preNote = document.createElement("pre");
    preNote.id = divParent$$inline_79.id + "_" + "pre_note";
    preNote.className = "write-only non-editable";
    JAM.call(divParent$$inline_79.appendChild, divParent$$inline_79, [preNote]);
    preCipherText = document.createElement("pre");
    preCipherText.id = divParent$$inline_79.id + "_" + "pre_cipher_text";
    preCipherText.style.display = "none";
    JAM.call(divParent$$inline_79.appendChild, divParent$$inline_79, [preCipherText]);
    var divParent$$inline_81 = divParent$$inline_5;
    var strNoteId$$inline_82 = strNoteId$$inline_7;
    divButtons = document.createElement("div");
    divButtons.style.textAlign = "left";
    JAM.call(divParent$$inline_81.appendChild, divParent$$inline_81, [divButtons]);
    createNoteButton("edit", createEditButtonHandler(strNoteId$$inline_82), strNoteId$$inline_82);
    createNoteButton("read", createUnlockButtonHandler(strNoteId$$inline_82), strNoteId$$inline_82);
    createNoteButton("delete", createDeleteButtonHandler(strNoteId$$inline_82), strNoteId$$inline_82);
    var divParent$$inline_84 = divParent$$inline_5;
    var strServerPath$$inline_85 = strServerPath$$inline_6;
    var strNoteId$$inline_86 = strNoteId$$inline_7;
    divEdit = createPopupDialog("edit_dialog", divParent$$inline_84, divParent$$inline_84.id);
    divEdit.style.width = 400;
    divEdit.style.display = "none";
    inputNewPassword = createPasswordPanel(divEdit, "Enter password:", "input_new_password", divParent$$inline_84.id);
    inputNewPasswordRetype = createPasswordPanel(divEdit, "Retype password:", "input_new_password_retype", divParent$$inline_84.id);
    inputNote = document.createElement("textarea");
    inputNote.style.width = 350;
    inputNote.style.height = 200;
    inputNote.className = "destructive-read read-only";
    inputNote.id = divParent$$inline_84.id + "_" + "input_new_note";
    JAM.call(divEdit.appendChild, divEdit, [inputNote]);
    divButtons = createDialogButtonPanel(createEditDialogOkHandler(strServerPath$$inline_85, strNoteId$$inline_86), createEditDialogCancelHandler(strNoteId$$inline_86), divEdit);
    var divParent$$inline_88 = divParent$$inline_5;
    var strNoteId$$inline_89 = strNoteId$$inline_7;
    divUnlock = createPopupDialog("unlock_dialog", divParent$$inline_88, divParent$$inline_88.id);
    divUnlock.style.display = "none";
    inputPassword = createPasswordPanel(divUnlock, "Enter password:", "input_password", divParent$$inline_88.id);
    createDialogButtonPanel(createUnlockDialogOkHandler(strNoteId$$inline_89), createUnlockDialogCancelHandler(strNoteId$$inline_89), divUnlock, divParent$$inline_88.id);
    var strServerPath$$inline_92 = strServerPath$$inline_6;
    var strNoteId$$inline_93 = strNoteId$$inline_7;
    divDeleteDialog = createPopupDialog("delete_dialog", divParent$$inline_5, divParent$$inline_5.id);
    divDeleteDialog.style.display = "none";
    var strLabelText$$inline_94 = "Are you sure you want to delete?";
    var parent$$inline_95 = divDeleteDialog;
    label = document.createElement("label");
    introspect(JAM.policy.p16) {
      label.textContent = strLabelText$$inline_94;
    }
    JAM.call(parent$$inline_95.appendChild, parent$$inline_95, [label]);
    createDialogButtonPanel(createDeleteDialogOkHandler(strServerPath$$inline_92, strNoteId$$inline_93), createDeleteDialogCancelHandler(strNoteId$$inline_93), divDeleteDialog);
    fetch(strServerPath, strNoteId, createFetchHandler(strNoteId));
    return;
  }
  function createNoteButton(strLabel, funcHandleClick, strNoteId$$6) {
    var divButtons$$1 = divButtons;
    button = document.createElement("input");
    button.type = "button";
    button.value = strLabel;
    button.id = strNoteId$$6 + "_" + ("button_" + strLabel);
    JAM.call(divButtons$$1.appendChild, divButtons$$1, [button]);
    JAM.set(button, "onclick", funcHandleClick);
    return;
  }
  function createPasswordPanel(divParent$$8, strPrompt, strPasswordInputId, strNoteId$$7) {
    divPassword = document.createElement("div");
    JAM.call(divParent$$8.appendChild, divParent$$8, [divPassword]);
    labelPassword = document.createElement("label");
    introspect(JAM.policy.p16) {
      labelPassword.textContent = strPrompt;
    }
    JAM.call(divPassword.appendChild, divPassword, [labelPassword]);
    inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.className = "destructive-read read-only";
    inputPassword.id = strNoteId$$7 + "_" + strPasswordInputId;
    JAM.call(divPassword.appendChild, divPassword, [inputPassword]);
    return inputPassword;
  }
  function createPopupDialog(strDialogId, divParent$$9, strNoteId$$8) {
    divDialog = document.createElement("div");
    divDialog.id = strNoteId$$8 + "_" + strDialogId;
    divDialog.className = "popup";
    JAM.call(divParent$$9.appendChild, divParent$$9, [divDialog]);
    return divDialog;
  }
  function createDialogButtonPanel(funcHandleOk, funcHandleCancel, parent$$1) {
    divButtons = document.createElement("div");
    buttonOk = document.createElement("button");
    buttonOk.type = "input";
    introspect(JAM.policy.p16) {
      buttonOk.textContent = "ok";
    }
    JAM.set(buttonOk, "onclick", funcHandleOk);
    JAM.call(divButtons.appendChild, divButtons, [buttonOk]);
    buttonCancel = document.createElement("button");
    buttonCancel.type = "input";
    introspect(JAM.policy.p16) {
      buttonCancel.textContent = "cancel";
    }
    JAM.set(buttonCancel, "onclick", funcHandleCancel);
    JAM.call(divButtons.appendChild, divButtons, [buttonCancel]);
    JAM.call(parent$$1.appendChild, parent$$1, [divButtons]);
    return divButtons;
  }
  function closeUnlockDialog(strNoteId$$12) {
    var div$$3 = document.getElementById(strNoteId$$12 + "_" + "unlock_dialog");
    div$$3.style.display = "none";
    var strVal$$inline_13 = "";
    var inputPassword$$inline_14 = document.getElementById(strNoteId$$12 + "_" + "input_password");
    inputPassword$$inline_14.value = strVal$$inline_13;
    return;
  }
  function closeDeleteDialog(strNoteId$$13) {
    var div$$4 = document.getElementById(strNoteId$$13 + "_" + "delete_dialog");
    div$$4.style.display = "none";
    return;
  }
  function closeEditDialog(strNoteId$$14) {
    var div$$5 = document.getElementById(strNoteId$$14 + "_" + "edit_dialog");
    div$$5.style.display = "none";
    var strVal$$inline_17 = "";
    var inputNewNote$$inline_18 = document.getElementById(strNoteId$$14 + "_" + "input_new_note");
    inputNewNote$$inline_18.value = strVal$$inline_17;
    var strVal$$inline_21 = "";
    var inputNewPassword$$inline_22 = document.getElementById(strNoteId$$14 + "_" + "input_new_password");
    inputNewPassword$$inline_22.value = strVal$$inline_21;
    var strVal$$inline_25 = "";
    var inputNote$$inline_26 = document.getElementById(strNoteId$$14 + "_" + "input_new_password_retype");
    inputNote$$inline_26.value = strVal$$inline_25;
    return;
  }
  function closeDialogsBoxes(strNoteId$$15) {
    closeEditDialog(strNoteId$$15);
    closeDeleteDialog(strNoteId$$15);
    closeUnlockDialog(strNoteId$$15);
    return;
  }
  function setPreNote(strNoteId$$16, strVal) {
    var preNote$$1 = document.getElementById(strNoteId$$16 + "_" + "pre_note");
    introspect(JAM.policy.p16) {
      preNote$$1.textContent = strVal;
    }
    return;
  }
  function hideEditButton(strNoteId$$27) {
    var buttonEdit = document.getElementById(strNoteId$$27 + "_" + "button_edit");
    buttonEdit.style.display = "none";
    return;
  }
  function hideUnlockButton(strNoteId$$28) {
    var buttonUnlock = document.getElementById(strNoteId$$28 + "_" + "button_read");
    buttonUnlock.style.display = "none";
    return;
  }
  function hideDeleteButton(strNoteId$$29) {
    var buttonDelete = document.getElementById(strNoteId$$29 + "_" + "button_delete");
    buttonDelete.style.display = "none";
    return;
  }
  function showUnlockButton(strNoteId$$31) {
    var buttonUnlock$$1 = document.getElementById(strNoteId$$31 + "_" + "button_read");
    buttonUnlock$$1.style.display = "inline";
    return;
  }
  function destructiveRead(elem$$1) {
    val = elem$$1.value;
    elem$$1.value = "";
    return val;
  }
  function createDeleteButtonHandler(strNoteId$$36) {
    function v1() {
      var div$$inline_29 = document.getElementById(strNoteId$$36 + "_" + "delete_dialog");
      div$$inline_29.style.display = "block";
      return;
    }
    return v1;
  }
  function createDeleteDialogCancelHandler(strNoteId$$37) {
    function v2() {
      closeDeleteDialog(strNoteId$$37);
      return;
    }
    return v2;
  }
  function createDeleteDialogOkHandler(strServerPath$$4, strNoteId$$38) {
    function v3() {
      var strServerPath$$inline_31 = strServerPath$$4;
      var callbackDeleteHandler$$inline_33 = createDeleteHandler(strServerPath$$4, strNoteId$$38);
      var arrData$$inline_34 = {};
      arrData$$inline_34["blobHandle"] = strNoteId$$38;
      strData = JAM.call(JSON.stringify, JSON, [arrData$$inline_34]);
      strUrl = strServerPath$$inline_31 + "DeleteBlob.php";
      ajaxPost(callbackDeleteHandler$$inline_33);
      return;
    }
    return v3;
  }
  function createUnlockButtonHandler(strNoteId$$39) {
    function v4() {
      var div$$inline_37 = document.getElementById(strNoteId$$39 + "_" + "unlock_dialog");
      div$$inline_37.style.display = "block";
      return;
    }
    return v4;
  }
  function createUnlockDialogOkHandler(strNoteId$$40) {
    function v5() {
      var JSCompiler_inline_result$$0;
      var preCipherText$$inline_40 = document.getElementById(strNoteId$$40 + "_" + "pre_cipher_text");
      introspect(JAM.policy.p10) {
        JSCompiler_inline_result$$0 = preCipherText$$inline_40.textContent;
      }
      var JSCompiler_temp_const$$2 = JSCompiler_inline_result$$0;
      var JSCompiler_inline_result$$3;
      var inputPassword$$inline_43 = document.getElementById(strNoteId$$40 + "_" + "input_password");
      JSCompiler_inline_result$$3 = destructiveRead(inputPassword$$inline_43);
      var JSCompiler_inline_result$$4;
      JSCompiler_inline_label_decryptText_47: {
        if (JSCompiler_inline_result$$3 != undefined) {
          var v424 = CryptoJS.AES;
          wordArrPlainText = JAM.call(v424.decrypt, v424, [JSCompiler_temp_const$$2, JSCompiler_inline_result$$3, {format:JsonFormatter}]);
          var v426 = CryptoJS.enc.Utf8;
          JSCompiler_inline_result$$4 = JAM.call(v426.stringify, v426, [wordArrPlainText]);
        } else {
          JSCompiler_inline_result$$4 = undefined;
        }
      }
      setPreNote(strNoteId$$40, JSCompiler_inline_result$$4);
      var strNoteId$$inline_48 = strNoteId$$40;
      closeDialogsBoxes(strNoteId$$inline_48);
      hideEditButton(strNoteId$$inline_48);
      hideUnlockButton(strNoteId$$inline_48);
      var buttonDelete$$inline_98 = document.getElementById(strNoteId$$inline_48 + "_" + "button_delete");
      buttonDelete$$inline_98.style.display = "inline";
      return;
    }
    return v5;
  }
  function createUnlockDialogCancelHandler(strNoteId$$41) {
    function v6() {
      closeUnlockDialog(strNoteId$$41);
      return;
    }
    return v6;
  }
  function createEditButtonHandler(strNoteId$$42) {
    function v7() {
      var div$$inline_51 = document.getElementById(strNoteId$$42 + "_" + "edit_dialog");
      div$$inline_51.style.display = "block";
      return;
    }
    return v7;
  }
  function createEditDialogOkHandler(strServerPath$$5, strNoteId$$43) {
    function v8() {
      var inputNewPassword$$inline_54 = document.getElementById(strNoteId$$43 + "_" + "input_new_password");
      strNewPass = destructiveRead(inputNewPassword$$inline_54);
      var inputNote$$inline_57 = document.getElementById(strNoteId$$43 + "_" + "input_new_password_retype");
      strNewPassRetype = destructiveRead(inputNote$$inline_57);
      if (strNewPass.length == 0) {
        alert("Must have non-empty password");
      } else {
        if (strNewPass != strNewPassRetype) {
          alert("Passwords do not match");
        } else {
          var JSCompiler_inline_result$$1;
          var inputNote$$inline_60 = document.getElementById(strNoteId$$43 + "_" + "input_new_note");
          JSCompiler_inline_result$$1 = destructiveRead(inputNote$$inline_60);
          var callbackSaveHandler$$inline_66 = createSaveHandler(strServerPath$$5, strNoteId$$43);
          var JSCompiler_inline_result$$78;
          JSCompiler_inline_label_encryptText_102: {
            var strPasswd$$inline_101 = strNewPass;
            if (strPasswd$$inline_101) {
              var v435 = CryptoJS.enc.Utf8;
              wordArrPlainText = JAM.call(v435.parse, v435, [JSCompiler_inline_result$$1]);
              var v641 = CryptoJS.AES;
              JSCompiler_inline_result$$78 = JAM.call(v641.encrypt, v641, [wordArrPlainText, strPasswd$$inline_101, {format:JsonFormatter}]).toString();
              break JSCompiler_inline_label_encryptText_102;
            } else {
              JSCompiler_inline_result$$78 = undefined;
              break JSCompiler_inline_label_encryptText_102;
            }
          }
          var strNoteId$$inline_104 = strNoteId$$43;
          var strEncNote$$inline_105 = JSCompiler_inline_result$$78;
          var callbackSaveHandler$$inline_106 = callbackSaveHandler$$inline_66;
          strUrl = strServerPath$$5 + "SaveBlob.php";
          var arrData$$inline_107 = {};
          arrData$$inline_107["blobHandle"] = strNoteId$$inline_104;
          arrData$$inline_107["blob"] = strEncNote$$inline_105;
          strData = JAM.call(JSON.stringify, JSON, [arrData$$inline_107]);
          ajaxPost(callbackSaveHandler$$inline_106);
        }
      }
      return;
    }
    return v8;
  }
  function createEditDialogCancelHandler(strNoteId$$44) {
    function v9() {
      closeEditDialog(strNoteId$$44);
      return;
    }
    return v9;
  }
  function createFetchHandler(strNoteId$$45) {
    function v10(strResponse) {
      jsonObjResponse = JAM.call(JSON.parse, JSON, [strResponse]);
      if (jsonObjResponse.bSuccess) {
        var strVal$$inline_69 = jsonObjResponse.strBlob;
        var preCipherText$$inline_70 = document.getElementById(strNoteId$$45 + "_" + "pre_cipher_text");
        introspect(JAM.policy.p16) {
          preCipherText$$inline_70.textContent = strVal$$inline_69;
        }
        var strNoteId$$inline_72 = strNoteId$$45;
        closeDialogsBoxes(strNoteId$$inline_72);
        hideEditButton(strNoteId$$inline_72);
        showUnlockButton(strNoteId$$inline_72);
        hideDeleteButton(strNoteId$$inline_72);
        closeEditDialog(strNoteId$$45);
      } else {
        var strNoteId$$inline_74 = strNoteId$$45;
        closeDialogsBoxes(strNoteId$$inline_74);
        var buttonEdit$$inline_110 = document.getElementById(strNoteId$$inline_74 + "_" + "button_edit");
        buttonEdit$$inline_110.style.display = "inline";
        hideUnlockButton(strNoteId$$inline_74);
        hideDeleteButton(strNoteId$$inline_74);
      }
      return;
    }
    return v10;
  }
  function createSaveHandler(strServerPath$$6, strNoteId$$46) {
    function v11(strResponse$$1) {
      jsonObjResponse = JAM.call(JSON.parse, JSON, [strResponse$$1]);
      if (jsonObjResponse.bSuccess) {
        var strNoteId$$inline_76 = strNoteId$$46;
        closeDialogsBoxes(strNoteId$$inline_76);
        hideEditButton(strNoteId$$inline_76);
        showUnlockButton(strNoteId$$inline_76);
        hideDeleteButton(strNoteId$$inline_76);
        fetch(strServerPath$$6, strNoteId$$46, createFetchHandler(strNoteId$$46));
      } else {
        alert("Error: note could not be saved.");
      }
      return;
    }
    return v11;
  }
  function createDeleteHandler(strServerPath$$7, strNoteId$$47) {
    function v12(strResponse$$2) {
      jsonObjResponse = JAM.call(JSON.parse, JSON, [strResponse$$2]);
      if (jsonObjResponse.bSuccess) {
        setPreNote(strNoteId$$47, "");
        fetch(strServerPath$$7, strNoteId$$47, createFetchHandler(strNoteId$$47));
      } else {
        alert("Failed to delete note.");
        closeDeleteDialog(strNoteId$$47);
      }
      return;
    }
    return v12;
  }
  function fetch(strServerPath$$8, strNoteId$$48, callbackFetchHandler) {
    var strUrl$$4 = strServerPath$$8 + "FetchBlob.php" + "?blobHandle=" + encodeURIComponent(strNoteId$$48);
    ajaxGet(strUrl$$4, callbackFetchHandler);
    return;
  }
  var serverPath = "";
  var divParent = document.getElementById("div1");
  init(divParent, serverPath);
  var JsonFormatter = {stringify:v13, parse:v14};
  return;
}
function Clock() {
  function init$$1(serverPath$$2, divParent$$11) {
    divParent$$11.className = "mwwidget:clock";
    JAM.call(setInterval, null, [createDisplayTimeFunction(divParent$$11), 1E3]);
    return;
  }
  function createDisplayTimeFunction(divParent$$12) {
    function v15() {
      var v450 = divParent$$12;
      var v1112 = (new Date).toString();
      introspect(JAM.policy.p16) {
        v450.textContent = v1112;
      }
      arrSNoteDivs = getElementsByClass();
      i = 0;
      var v452 = i < arrSNoteDivs.length;
      for (;v452;) {
        introspect(JAM.policy.p12) {
          var snoteDiv = arrSNoteDivs[i]
        }
        var strNoteId$$52 = snoteDiv.id;
        var strElemId$$1 = strNoteId$$52 + "_" + "pre_note";
        var preNote$$2 = document.getElementById(strElemId$$1);
        introspect(JAM.policy.p10) {
          var strNote$$1 = preNote$$2.textContent
        }
        var v1113 = strNote$$1.replace(/declined/gi, "accepted");
        introspect(JAM.policy.p16) {
          preNote$$2.textContent = v1113;
        }
        i++;
        v452 = i < arrSNoteDivs.length;
      }
      return;
    }
    return v15;
  }
  var serverPath$$1 = "";
  var divParent$$10 = document.getElementById("div2");
  init$$1(serverPath$$1, divParent$$10);
  return;
}
var v453 = CryptoJS;
if (!v453) {
  v453 = v47(Math);
}
var CryptoJS = v453;
v50();
v55(Math);
v59();
var v454 = CryptoJS.lib.Cipher;
if (!v454) {
  v92();
}
v98();
new SNote;
new Clock
