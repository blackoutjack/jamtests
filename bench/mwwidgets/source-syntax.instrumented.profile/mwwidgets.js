
JAM.startProfile('load');
function v98() {
  function v97(a$$54, b$$34, d$$20, e$$34, f$$18, h$$15, i$$16, g$$11) {
    var l$$8 = this._nRounds;
    introspect(JAM.policy.p12) {
      var v99 = a$$54[b$$34]
    }
    introspect(JAM.policy.p12) {
      var v100 = d$$20[0]
    }
    var k$$6 = v99 ^ v100;
    var v459 = b$$34 + 1;
    introspect(JAM.policy.p12) {
      var v101 = a$$54[v459]
    }
    introspect(JAM.policy.p12) {
      var v102 = d$$20[1]
    }
    var m$$7 = v101 ^ v102;
    var v460 = b$$34 + 2;
    introspect(JAM.policy.p12) {
      var v103 = a$$54[v460]
    }
    introspect(JAM.policy.p12) {
      var v104 = d$$20[2]
    }
    var o$$6 = v103 ^ v104;
    var v461 = b$$34 + 3;
    introspect(JAM.policy.p12) {
      var v105 = a$$54[v461]
    }
    introspect(JAM.policy.p12) {
      var v106 = d$$20[3]
    }
    var n$$8 = v105 ^ v106;
    var p$$7 = 4;
    var r$$6 = 1;
    var v115 = r$$6 < l$$8;
    for (;v115;) {
      var v875 = k$$6 >>> 24;
      introspect(JAM.policy.p12) {
        var v778 = e$$34[v875]
      }
      var v953 = m$$7 >>> 16;
      var v876 = v953 & 255;
      introspect(JAM.policy.p12) {
        var v779 = f$$18[v876]
      }
      var v664 = v778 ^ v779;
      var v877 = o$$6 >>> 8;
      var v780 = v877 & 255;
      introspect(JAM.policy.p12) {
        var v665 = h$$15[v780]
      }
      var v462 = v664 ^ v665;
      var v666 = n$$8 & 255;
      introspect(JAM.policy.p12) {
        var v463 = i$$16[v666]
      }
      var v107 = v462 ^ v463;
      var v464 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p12) {
        var v108 = d$$20[v464]
      }
      var s$$8 = v107 ^ v108;
      var v878 = m$$7 >>> 24;
      introspect(JAM.policy.p12) {
        var v781 = e$$34[v878]
      }
      var v954 = o$$6 >>> 16;
      var v879 = v954 & 255;
      introspect(JAM.policy.p12) {
        var v782 = f$$18[v879]
      }
      var v667 = v781 ^ v782;
      var v880 = n$$8 >>> 8;
      var v783 = v880 & 255;
      introspect(JAM.policy.p12) {
        var v668 = h$$15[v783]
      }
      var v465 = v667 ^ v668;
      var v669 = k$$6 & 255;
      introspect(JAM.policy.p12) {
        var v466 = i$$16[v669]
      }
      var v109 = v465 ^ v466;
      var v467 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p12) {
        var v110 = d$$20[v467]
      }
      var u = v109 ^ v110;
      var v881 = o$$6 >>> 24;
      introspect(JAM.policy.p12) {
        var v784 = e$$34[v881]
      }
      var v955 = n$$8 >>> 16;
      var v882 = v955 & 255;
      introspect(JAM.policy.p12) {
        var v785 = f$$18[v882]
      }
      var v670 = v784 ^ v785;
      var v883 = k$$6 >>> 8;
      var v786 = v883 & 255;
      introspect(JAM.policy.p12) {
        var v671 = h$$15[v786]
      }
      var v468 = v670 ^ v671;
      var v672 = m$$7 & 255;
      introspect(JAM.policy.p12) {
        var v469 = i$$16[v672]
      }
      var v111 = v468 ^ v469;
      var v470 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p12) {
        var v112 = d$$20[v470]
      }
      var v = v111 ^ v112;
      var v884 = n$$8 >>> 24;
      introspect(JAM.policy.p12) {
        var v787 = e$$34[v884]
      }
      var v956 = k$$6 >>> 16;
      var v885 = v956 & 255;
      introspect(JAM.policy.p12) {
        var v788 = f$$18[v885]
      }
      var v673 = v787 ^ v788;
      var v886 = m$$7 >>> 8;
      var v789 = v886 & 255;
      introspect(JAM.policy.p12) {
        var v674 = h$$15[v789]
      }
      var v471 = v673 ^ v674;
      var v675 = o$$6 & 255;
      introspect(JAM.policy.p12) {
        var v472 = i$$16[v675]
      }
      var v113 = v471 ^ v472;
      var v473 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p12) {
        var v114 = d$$20[v473]
      }
      n$$8 = v113 ^ v114;
      k$$6 = s$$8;
      m$$7 = u;
      o$$6 = v;
      r$$6 = r$$6 + 1;
      v115 = r$$6 < l$$8;
    }
    var v957 = k$$6 >>> 24;
    introspect(JAM.policy.p12) {
      var v887 = g$$11[v957]
    }
    var v790 = v887 << 24;
    var v1013 = m$$7 >>> 16;
    var v958 = v1013 & 255;
    introspect(JAM.policy.p12) {
      var v888 = g$$11[v958]
    }
    var v791 = v888 << 16;
    var v676 = v790 | v791;
    var v959 = o$$6 >>> 8;
    var v889 = v959 & 255;
    introspect(JAM.policy.p12) {
      var v792 = g$$11[v889]
    }
    var v677 = v792 << 8;
    var v474 = v676 | v677;
    var v678 = n$$8 & 255;
    introspect(JAM.policy.p12) {
      var v475 = g$$11[v678]
    }
    var v116 = v474 | v475;
    var v476 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p12) {
      var v117 = d$$20[v476]
    }
    s$$8 = v116 ^ v117;
    var v960 = m$$7 >>> 24;
    introspect(JAM.policy.p12) {
      var v890 = g$$11[v960]
    }
    var v793 = v890 << 24;
    var v1014 = o$$6 >>> 16;
    var v961 = v1014 & 255;
    introspect(JAM.policy.p12) {
      var v891 = g$$11[v961]
    }
    var v794 = v891 << 16;
    var v679 = v793 | v794;
    var v962 = n$$8 >>> 8;
    var v892 = v962 & 255;
    introspect(JAM.policy.p12) {
      var v795 = g$$11[v892]
    }
    var v680 = v795 << 8;
    var v477 = v679 | v680;
    var v681 = k$$6 & 255;
    introspect(JAM.policy.p12) {
      var v478 = g$$11[v681]
    }
    var v118 = v477 | v478;
    var v479 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p12) {
      var v119 = d$$20[v479]
    }
    u = v118 ^ v119;
    var v963 = o$$6 >>> 24;
    introspect(JAM.policy.p12) {
      var v893 = g$$11[v963]
    }
    var v796 = v893 << 24;
    var v1015 = n$$8 >>> 16;
    var v964 = v1015 & 255;
    introspect(JAM.policy.p12) {
      var v894 = g$$11[v964]
    }
    var v797 = v894 << 16;
    var v682 = v796 | v797;
    var v965 = k$$6 >>> 8;
    var v895 = v965 & 255;
    introspect(JAM.policy.p12) {
      var v798 = g$$11[v895]
    }
    var v683 = v798 << 8;
    var v480 = v682 | v683;
    var v684 = m$$7 & 255;
    introspect(JAM.policy.p12) {
      var v481 = g$$11[v684]
    }
    var v120 = v480 | v481;
    var v482 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p12) {
      var v121 = d$$20[v482]
    }
    v = v120 ^ v121;
    var v966 = n$$8 >>> 24;
    introspect(JAM.policy.p12) {
      var v896 = g$$11[v966]
    }
    var v799 = v896 << 24;
    var v1016 = k$$6 >>> 16;
    var v967 = v1016 & 255;
    introspect(JAM.policy.p12) {
      var v897 = g$$11[v967]
    }
    var v800 = v897 << 16;
    var v685 = v799 | v800;
    var v968 = m$$7 >>> 8;
    var v898 = v968 & 255;
    introspect(JAM.policy.p12) {
      var v801 = g$$11[v898]
    }
    var v686 = v801 << 8;
    var v483 = v685 | v686;
    var v687 = o$$6 & 255;
    introspect(JAM.policy.p12) {
      var v484 = g$$11[v687]
    }
    var v122 = v483 | v484;
    var v485 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p12) {
      var v123 = d$$20[v485]
    }
    n$$8 = v122 ^ v123;
    introspect(JAM.policy.p18) {
      a$$54[b$$34] = s$$8;
    }
    var v124 = b$$34 + 1;
    introspect(JAM.policy.p18) {
      a$$54[v124] = u;
    }
    var v125 = b$$34 + 2;
    introspect(JAM.policy.p18) {
      a$$54[v125] = v;
    }
    var v126 = b$$34 + 3;
    introspect(JAM.policy.p18) {
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
    var v486 = b$$33 + 3;
    introspect(JAM.policy.p18) {
      c$$31[v128] = c$$31[v486];
    }
    var v129 = b$$33 + 3;
    introspect(JAM.policy.p18) {
      c$$31[v129] = d$$19;
    }
    var v130 = this._invKeySchedule;
    this._doCryptBlock(c$$31, b$$33, v130, k$$5, f$$17, g$$10, a$$52, r$$5);
    var v131 = b$$33 + 1;
    introspect(JAM.policy.p12) {
      d$$19 = c$$31[v131];
    }
    var v132 = b$$33 + 1;
    var v487 = b$$33 + 3;
    introspect(JAM.policy.p18) {
      c$$31[v132] = c$$31[v487];
    }
    var v133 = b$$33 + 3;
    introspect(JAM.policy.p18) {
      c$$31[v133] = d$$19;
    }
    return;
  }
  function v95(a$$53, b$$32) {
    var v134 = this._keySchedule;
    this._doCryptBlock(a$$53, b$$32, v134, o$$5, m$$6, s$$7, n$$7, l$$7);
    return;
  }
  function v94() {
    var c$$30 = this._key;
    var b$$31 = c$$30.words;
    var v135 = c$$30.sigBytes;
    var d$$18 = v135 / 4;
    var v488 = this._nRounds = d$$18 + 6;
    var v136 = v488 + 1;
    c$$30 = 4 * v136;
    var i$$15 = this._keySchedule = [];
    var j$$6 = 0;
    var v141 = j$$6 < c$$30;
    for (;v141;) {
      var v140 = j$$6 < d$$18;
      if (v140) {
        introspect(JAM.policy.p18) {
          i$$15[j$$6] = b$$31[j$$6];
        }
      } else {
        var v137 = j$$6 - 1;
        introspect(JAM.policy.p12) {
          var h$$14 = i$$15[v137]
        }
        var v138;
        var v490 = j$$6 % d$$18;
        if (v490) {
          var v688 = 6 < d$$18;
          if (v688) {
            var v802 = j$$6 % d$$18;
            v688 = 4 == v802;
          }
          var v489 = v688;
          if (v489) {
            var v1017 = h$$14 >>> 24;
            introspect(JAM.policy.p12) {
              var v969 = l$$7[v1017]
            }
            var v899 = v969 << 24;
            var v1052 = h$$14 >>> 16;
            var v1018 = v1052 & 255;
            introspect(JAM.policy.p12) {
              var v970 = l$$7[v1018]
            }
            var v900 = v970 << 16;
            var v803 = v899 | v900;
            var v1019 = h$$14 >>> 8;
            var v971 = v1019 & 255;
            introspect(JAM.policy.p12) {
              var v901 = l$$7[v971]
            }
            var v804 = v901 << 8;
            var v689 = v803 | v804;
            var v805 = h$$14 & 255;
            introspect(JAM.policy.p12) {
              var v690 = l$$7[v805]
            }
            v489 = h$$14 = v689 | v690;
          }
          v138 = v489;
        } else {
          var v806 = h$$14 << 8;
          var v807 = h$$14 >>> 24;
          h$$14 = v806 | v807;
          var v1053 = h$$14 >>> 24;
          introspect(JAM.policy.p12) {
            var v1020 = l$$7[v1053]
          }
          var v972 = v1020 << 24;
          var v1072 = h$$14 >>> 16;
          var v1054 = v1072 & 255;
          introspect(JAM.policy.p12) {
            var v1021 = l$$7[v1054]
          }
          var v973 = v1021 << 16;
          var v902 = v972 | v973;
          var v1055 = h$$14 >>> 8;
          var v1022 = v1055 & 255;
          introspect(JAM.policy.p12) {
            var v974 = l$$7[v1022]
          }
          var v903 = v974 << 8;
          var v808 = v902 | v903;
          var v904 = h$$14 & 255;
          introspect(JAM.policy.p12) {
            var v809 = l$$7[v904]
          }
          h$$14 = v808 | v809;
          var v1023 = j$$6 / d$$18;
          var v975 = v1023 | 0;
          introspect(JAM.policy.p12) {
            var v905 = e$$32[v975]
          }
          var v810 = v905 << 24;
          v138 = h$$14 = h$$14 ^ v810;
        }
        v138;
        var v491 = j$$6 - d$$18;
        introspect(JAM.policy.p12) {
          var v139 = i$$15[v491]
        }
        introspect(JAM.policy.p18) {
          i$$15[j$$6] = v139 ^ h$$14;
        }
      }
      j$$6 = j$$6 + 1;
      v141 = j$$6 < c$$30;
    }
    b$$31 = this._invKeySchedule = [];
    d$$18 = 0;
    var v142 = d$$18 < c$$30;
    for (;v142;) {
      j$$6 = c$$30 - d$$18;
      var v691;
      var v812 = d$$18 % 4;
      if (v812) {
        introspect(JAM.policy.p12) {
          v691 = i$$15[j$$6];
        }
      } else {
        var v811 = j$$6 - 4;
        introspect(JAM.policy.p12) {
          v691 = i$$15[v811];
        }
      }
      h$$14 = v691;
      var v492;
      var v813 = 4 > d$$18;
      var v906 = !v813;
      if (v906) {
        v813 = 4 >= j$$6;
      }
      var v694 = v813;
      if (v694) {
        v492 = h$$14;
      } else {
        var v1024 = h$$14 >>> 24;
        introspect(JAM.policy.p12) {
          var v976 = l$$7[v1024]
        }
        introspect(JAM.policy.p12) {
          var v907 = k$$5[v976]
        }
        var v1056 = h$$14 >>> 16;
        var v1025 = v1056 & 255;
        introspect(JAM.policy.p12) {
          var v977 = l$$7[v1025]
        }
        introspect(JAM.policy.p12) {
          var v908 = f$$17[v977]
        }
        var v814 = v907 ^ v908;
        var v1026 = h$$14 >>> 8;
        var v978 = v1026 & 255;
        introspect(JAM.policy.p12) {
          var v909 = l$$7[v978]
        }
        introspect(JAM.policy.p12) {
          var v815 = g$$10[v909]
        }
        var v692 = v814 ^ v815;
        var v910 = h$$14 & 255;
        introspect(JAM.policy.p12) {
          var v816 = l$$7[v910]
        }
        introspect(JAM.policy.p12) {
          var v693 = a$$52[v816]
        }
        v492 = v692 ^ v693;
      }
      introspect(JAM.policy.p18) {
        b$$31[d$$18] = v492;
      }
      d$$18 = d$$18 + 1;
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
      var v494 = 128 > b$$30;
      if (v494) {
        v143 = b$$30 << 1;
      } else {
        var v493 = b$$30 << 1;
        v143 = v493 ^ 283;
      }
      introspect(JAM.policy.p18) {
        c$$29[b$$30] = v143;
      }
      b$$30 = b$$30 + 1;
      v144 = 256 > b$$30;
    }
    var d$$17 = 0;
    var e$$33 = 0;
    b$$30 = 0;
    var v165 = 256 > b$$30;
    for (;v165;) {
      var v817 = e$$33 << 1;
      var v695 = e$$33 ^ v817;
      var v696 = e$$33 << 2;
      var v495 = v695 ^ v696;
      var v496 = e$$33 << 3;
      var v145 = v495 ^ v496;
      var v146 = e$$33 << 4;
      var j$$5 = v145 ^ v146;
      var v497 = j$$5 >>> 8;
      var v498 = j$$5 & 255;
      var v147 = v497 ^ v498;
      j$$5 = v147 ^ 99;
      introspect(JAM.policy.p18) {
        l$$7[d$$17] = j$$5;
      }
      introspect(JAM.policy.p18) {
        r$$5[j$$5] = d$$17;
      }
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
        var v499 = c$$29[j$$5]
      }
      var v148 = 257 * v499;
      var v149 = 16843008 * j$$5;
      var t = v148 ^ v149;
      var v150 = t << 24;
      var v151 = t >>> 8;
      introspect(JAM.policy.p18) {
        o$$5[d$$17] = v150 | v151;
      }
      var v152 = t << 16;
      var v153 = t >>> 16;
      introspect(JAM.policy.p18) {
        m$$6[d$$17] = v152 | v153;
      }
      var v154 = t << 8;
      var v155 = t >>> 24;
      introspect(JAM.policy.p18) {
        s$$7[d$$17] = v154 | v155;
      }
      introspect(JAM.policy.p18) {
        n$$7[d$$17] = t;
      }
      var v697 = 16843009 * p$$6;
      var v698 = 65537 * h$$13;
      var v500 = v697 ^ v698;
      var v501 = 257 * i$$14;
      var v156 = v500 ^ v501;
      var v157 = 16843008 * d$$17;
      t = v156 ^ v157;
      var v158 = t << 24;
      var v159 = t >>> 8;
      introspect(JAM.policy.p18) {
        k$$5[j$$5] = v158 | v159;
      }
      var v160 = t << 16;
      var v161 = t >>> 16;
      introspect(JAM.policy.p18) {
        f$$17[j$$5] = v160 | v161;
      }
      var v162 = t << 8;
      var v163 = t >>> 24;
      introspect(JAM.policy.p18) {
        g$$10[j$$5] = v162 | v163;
      }
      introspect(JAM.policy.p18) {
        a$$52[j$$5] = t;
      }
      var v164;
      if (d$$17) {
        var v979 = p$$6 ^ i$$14;
        introspect(JAM.policy.p12) {
          var v911 = c$$29[v979]
        }
        introspect(JAM.policy.p12) {
          var v818 = c$$29[v911]
        }
        introspect(JAM.policy.p12) {
          var v699 = c$$29[v818]
        }
        d$$17 = i$$14 ^ v699;
        introspect(JAM.policy.p12) {
          var v912 = c$$29[e$$33]
        }
        introspect(JAM.policy.p12) {
          var v819 = c$$29[v912]
        }
        v164 = e$$33 = e$$33 ^ v819;
      } else {
        v164 = d$$17 = e$$33 = 1;
      }
      v164;
      b$$30 = b$$30 + 1;
      v165 = 256 > b$$30;
    }
    return;
  }
  var p$$5 = CryptoJS;
  var v166 = p$$5.lib;
  var h$$12 = v166.BlockCipher;
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
  var v502 = {_doReset:v94, encryptBlock:v95, decryptBlock:v96, _doCryptBlock:v97, keySize:8};
  var v1092 = h$$12.extend(v502);
  i$$13 = v167.AES = v1092;
  var v168 = p$$5;
  var v1093 = h$$12._createHelper(i$$13);
  v168.AES = v1093;
  return;
}
function v92(p$$4) {
  function v91(a$$51, c$$28, f$$16, j$$4) {
    var v169 = this.cfg;
    j$$4 = v169.extend(j$$4);
    var v170 = j$$4.format;
    c$$28 = this._parse(c$$28, v170);
    var v171 = j$$4.kdf;
    var v172 = a$$51.keySize;
    var v173 = a$$51.ivSize;
    var v174 = c$$28.salt;
    f$$16 = v171.compute(f$$16, v172, v173, v174);
    j$$4.iv = f$$16.iv;
    var v175 = e$$24.decrypt;
    var v176 = f$$16.key;
    return v175.call(this, a$$51, c$$28, v176, j$$4);
  }
  function v90(a$$50, c$$27, f$$15, j$$3) {
    var v177 = this.cfg;
    j$$3 = v177.extend(j$$3);
    var v178 = j$$3.kdf;
    var v179 = a$$50.keySize;
    var v180 = a$$50.ivSize;
    f$$15 = v178.compute(f$$15, v179, v180);
    j$$3.iv = f$$15.iv;
    var v181 = e$$24.encrypt;
    var v182 = f$$15.key;
    a$$50 = v181.call(this, a$$50, c$$27, v182, j$$3);
    a$$50.mixIn(f$$15);
    return a$$50;
  }
  function v89(b$$29, c$$26, e$$31, f$$14) {
    var v503 = !f$$14;
    if (v503) {
      f$$14 = r$$4.random(8);
    }
    var v700 = c$$26 + e$$31;
    var v504 = {keySize:v700};
    var v183 = s$$6.create(v504);
    b$$29 = v183.compute(b$$29, f$$14);
    var v505 = b$$29.words;
    var v184 = v505.slice(c$$26);
    var v185 = 4 * e$$31;
    e$$31 = r$$4.create(v184, v185);
    b$$29.sigBytes = 4 * c$$26;
    var v186 = {key:b$$29, iv:e$$31, salt:f$$14};
    return a$$30.create(v186);
  }
  function v88(a$$49, c$$25) {
    var v187;
    var v701 = typeof a$$49;
    var v506 = "string" == v701;
    if (v506) {
      v187 = c$$25.parse(a$$49);
    } else {
      v187 = a$$49;
    }
    return v187;
  }
  function v87(a$$48, c$$24, e$$30, f$$13) {
    var v188 = this.cfg;
    f$$13 = v188.extend(f$$13);
    var v189 = f$$13.format;
    c$$24 = this._parse(c$$24, v189);
    var v190 = a$$48.createDecryptor(e$$30, f$$13);
    var v191 = c$$24.ciphertext;
    return v190.finalize(v191);
  }
  function v86(b$$28, d$$16, c$$23, e$$29) {
    var v192 = this.cfg;
    e$$29 = v192.extend(e$$29);
    var f$$12 = b$$28.createEncryptor(c$$23, e$$29);
    d$$16 = f$$12.finalize(d$$16);
    f$$12 = f$$12.cfg;
    var v507 = f$$12.iv;
    var v508 = f$$12.mode;
    var v509 = f$$12.padding;
    var v510 = b$$28.blockSize;
    var v511 = e$$29.format;
    var v193 = {ciphertext:d$$16, key:c$$23, iv:v507, algorithm:b$$28, mode:v508, padding:v509, blockSize:v510, formatter:v511};
    return a$$30.create(v193);
  }
  function v85(b$$27) {
    b$$27 = m$$5.parse(b$$27);
    var d$$15 = b$$27.words;
    introspect(JAM.policy.p12) {
      var v702 = d$$15[0]
    }
    var v512 = 1398893684 == v702;
    if (v512) {
      introspect(JAM.policy.p12) {
        var v703 = d$$15[1]
      }
      v512 = 1701076831 == v703;
    }
    var v195 = v512;
    if (v195) {
      var v194 = d$$15.slice(2, 4);
      var c$$22 = r$$4.create(v194);
      d$$15.splice(0, 4);
      var v513 = b$$27.sigBytes;
      b$$27.sigBytes = v513 - 16;
    }
    var v196 = {ciphertext:b$$27, salt:c$$22};
    return a$$30.create(v196);
  }
  function v84(a$$47) {
    var d$$14 = a$$47.ciphertext;
    a$$47 = a$$47.salt;
    var v514;
    if (a$$47) {
      var v913 = [1398893684, 1701076831];
      var v820 = r$$4.create(v913);
      var v704 = v820.concat(a$$47);
      v514 = v704.concat(d$$14);
    } else {
      v514 = d$$14;
    }
    var v197 = v514;
    d$$14 = v197.toString(m$$5);
    return d$$14 = d$$14.replace(/(.{64})/g, "$1\n");
  }
  function v83(a$$46) {
    var v515 = a$$46;
    var v705 = !v515;
    if (v705) {
      v515 = this.formatter;
    }
    var v198 = v515;
    return v198.stringify(this);
  }
  function v82(a$$45) {
    this.mixIn(a$$45);
    return;
  }
  function v81() {
    var v199 = this.cfg;
    var b$$26 = v199.padding;
    var v516 = this._xformMode;
    var v517 = this._ENC_XFORM_MODE;
    var v203 = v516 == v517;
    if (v203) {
      var v200 = this._data;
      var v201 = this.blockSize;
      b$$26.pad(v200, v201);
      var v202 = !0;
      var a$$44 = this._process(v202);
    } else {
      var v518 = !0;
      a$$44 = this._process(v518);
      b$$26.unpad(a$$44);
    }
    return a$$44;
  }
  function v80(b$$25, a$$43) {
    var v204 = this._mode;
    v204.processBlock(b$$25, a$$43);
    return;
  }
  function v79() {
    var v205 = n$$6.reset;
    v205.call(this);
    var b$$24 = this.cfg;
    var a$$42 = b$$24.iv;
    b$$24 = b$$24.mode;
    var v519 = this._xformMode;
    var v520 = this._ENC_XFORM_MODE;
    var v206 = v519 == v520;
    if (v206) {
      var c$$21 = b$$24.createEncryptor
    } else {
      c$$21 = b$$24.createDecryptor;
      this._minBufferSize = 1;
    }
    var v521 = a$$42;
    if (v521) {
      v521 = a$$42.words;
    }
    var v207 = v521;
    var v1094 = c$$21.call(b$$24, this, v207);
    this._mode = v1094;
    return;
  }
  function v78(b$$23) {
    var v522 = b$$23.sigBytes;
    var v821 = b$$23.words;
    var v980 = b$$23.sigBytes;
    var v914 = v980 - 1;
    var v822 = v914 >>> 2;
    introspect(JAM.policy.p12) {
      var v706 = v821[v822]
    }
    var v523 = v706 & 255;
    b$$23.sigBytes = v522 - v523;
    return;
  }
  function v77(b$$22, a$$41) {
    var c$$20 = 4 * a$$41;
    var v524 = b$$22.sigBytes;
    var v208 = v524 % c$$20;
    c$$20 = c$$20 - v208;
    var v707 = c$$20 << 24;
    var v708 = c$$20 << 16;
    var v525 = v707 | v708;
    var v526 = c$$20 << 8;
    var v209 = v525 | v526;
    var e$$28 = v209 | c$$20;
    var f$$11 = [];
    var g$$9 = 0;
    var v210 = g$$9 < c$$20;
    for (;v210;) {
      f$$11.push(e$$28);
      g$$9 = g$$9 + 4;
      v210 = g$$9 < c$$20;
    }
    c$$20 = r$$4.create(f$$11, c$$20);
    b$$22.concat(c$$20);
    return;
  }
  function v76() {
    function v75(a$$40, d$$13) {
      var c$$19 = this._cipher;
      var e$$27 = c$$19.blockSize;
      var v211 = d$$13 + e$$27;
      var f$$10 = a$$40.slice(d$$13, v211);
      c$$19.decryptBlock(a$$40, d$$13);
      b$$20.call(this, a$$40, d$$13, e$$27);
      this._prevBlock = f$$10;
      return;
    }
    function v74(a$$39, d$$12) {
      var c$$18 = this._cipher;
      var e$$26 = c$$18.blockSize;
      b$$20.call(this, a$$39, d$$12, e$$26);
      c$$18.encryptBlock(a$$39, d$$12);
      var v212 = d$$12 + e$$26;
      var v1095 = a$$39.slice(d$$12, v212);
      this._prevBlock = v1095;
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
          var v709 = b$$21[v214]
        }
        introspect(JAM.policy.p12) {
          var v710 = c$$17[e$$25]
        }
        introspect(JAM.policy.p18) {
          b$$21[v214] = v709 ^ v710;
        }
        e$$25 = e$$25 + 1;
        v215 = e$$25 < d$$11;
      }
      return;
    }
    var a$$37 = f$$9.extend();
    var v216 = a$$37;
    var v527 = {processBlock:v74};
    var v1096 = a$$37.extend(v527);
    v216.Encryptor = v1096;
    var v217 = a$$37;
    var v528 = {processBlock:v75};
    var v1097 = a$$37.extend(v528);
    v217.Decryptor = v1097;
    return a$$37;
  }
  function v73(b$$19, a$$36) {
    this._cipher = b$$19;
    this._iv = a$$36;
    return;
  }
  function v72(b$$18, a$$35) {
    var v218 = this.Decryptor;
    return v218.create(b$$18, a$$35);
  }
  function v71(b$$17, a$$34) {
    var v219 = this.Encryptor;
    return v219.create(b$$17, a$$34);
  }
  function v70() {
    var v220 = !0;
    return this._process(v220);
  }
  function v69() {
    function v68(b$$16) {
      function v67(a$$33, q$$3, j$$2) {
        var v529;
        var v823 = typeof q$$3;
        var v711 = "string" == v823;
        if (v711) {
          v529 = c$$16;
        } else {
          v529 = e$$24;
        }
        var v221 = v529;
        return v221.decrypt(b$$16, a$$33, q$$3, j$$2);
      }
      function v66(a$$32, q$$2, j$$1) {
        var v530;
        var v824 = typeof q$$2;
        var v712 = "string" == v824;
        if (v712) {
          v530 = c$$16;
        } else {
          v530 = e$$24;
        }
        var v222 = v530;
        return v222.encrypt(b$$16, a$$32, q$$2, j$$1);
      }
      return{encrypt:v66, decrypt:v67};
    }
    return v68;
  }
  function v65(b$$15) {
    if (b$$15) {
      this._append(b$$15);
    }
    return this._doFinalize();
  }
  function v64(b$$14) {
    this._append(b$$14);
    return this._process();
  }
  function v63() {
    var v223 = o$$4.reset;
    v223.call(this);
    this._doReset();
    return;
  }
  function v62(b$$13, d$$10, a$$31) {
    var v224 = this.cfg;
    var v1098 = v224.extend(a$$31);
    this.cfg = v1098;
    this._xformMode = b$$13;
    this._key = d$$10;
    this.reset();
    return;
  }
  function v61(b$$12, d$$9) {
    var v225 = this._DEC_XFORM_MODE;
    return this.create(v225, b$$12, d$$9);
  }
  function v60(b$$11, d$$8) {
    var v226 = this._ENC_XFORM_MODE;
    return this.create(v226, b$$11, d$$8);
  }
  var h$$11 = CryptoJS;
  var i$$12 = h$$11.lib;
  var l$$6 = i$$12.Base;
  var r$$4 = i$$12.WordArray;
  var o$$4 = i$$12.BufferedBlockAlgorithm;
  var v227 = h$$11.enc;
  var m$$5 = v227.Base64;
  var v228 = h$$11.algo;
  var s$$6 = v228.EvpKDF;
  var v229 = i$$12;
  var v713 = l$$6.extend();
  var v714 = v69();
  var v531 = {cfg:v713, createEncryptor:v60, createDecryptor:v61, init:v62, reset:v63, process:v64, finalize:v65, keySize:4, ivSize:4, _ENC_XFORM_MODE:1, _DEC_XFORM_MODE:2, _createHelper:v714};
  var v1099 = o$$4.extend(v531);
  var n$$6 = v229.Cipher = v1099;
  var v230 = i$$12;
  var v532 = {_doFinalize:v70, blockSize:1};
  var v1100 = n$$6.extend(v532);
  v230.StreamCipher = v1100;
  var k$$4 = h$$11.mode = {};
  var v231 = i$$12;
  var v533 = {createEncryptor:v71, createDecryptor:v72, init:v73};
  var v1101 = l$$6.extend(v533);
  var f$$9 = v231.BlockCipherMode = v1101;
  var v232 = k$$4;
  var v1102 = v76();
  k$$4 = v232.CBC = v1102;
  var v233 = h$$11.pad = {};
  var g$$8 = v233.Pkcs7 = {pad:v77, unpad:v78};
  var v234 = i$$12;
  var v825 = n$$6.cfg;
  var v826 = {mode:k$$4, padding:g$$8};
  var v715 = v825.extend(v826);
  var v534 = {cfg:v715, reset:v79, _doProcessBlock:v80, _doFinalize:v81, blockSize:4};
  var v1103 = n$$6.extend(v534);
  v234.BlockCipher = v1103;
  var v235 = i$$12;
  var v535 = {init:v82, toString:v83};
  var v1104 = l$$6.extend(v535);
  var a$$30 = v235.CipherParams = v1104;
  var v236 = h$$11.format = {};
  k$$4 = v236.OpenSSL = {stringify:v84, parse:v85};
  var v237 = i$$12;
  var v827 = {format:k$$4};
  var v716 = l$$6.extend(v827);
  var v536 = {cfg:v716, encrypt:v86, decrypt:v87, _parse:v88};
  var v1105 = l$$6.extend(v536);
  var e$$24 = v237.SerializableCipher = v1105;
  var v238 = h$$11.kdf = {};
  h$$11 = v238.OpenSSL = {compute:v89};
  var v239 = i$$12;
  var v828 = e$$24.cfg;
  var v829 = {kdf:h$$11};
  var v717 = v828.extend(v829);
  var v537 = {cfg:v717, encrypt:v90, decrypt:v91};
  var v1106 = e$$24.extend(v537);
  var c$$16 = v239.PasswordBasedCipher = v1106;
  return;
}
function v59() {
  function v58(i$$11, l$$5, h$$10) {
    var v240 = r$$3.create(h$$10);
    return v240.compute(i$$11, l$$5);
  }
  function v57(i$$10, m$$4) {
    var h$$9 = this.cfg;
    var v241 = h$$9.hasher;
    var n$$5 = v241.create();
    var k$$3 = l$$4.create();
    var f$$8 = k$$3.words;
    var g$$7 = h$$9.keySize;
    h$$9 = h$$9.iterations;
    var v538 = f$$8.length;
    var v244 = v538 < g$$7;
    for (;v244;) {
      if (a$$29) {
        n$$5.update(a$$29);
      }
      var v242 = n$$5.update(i$$10);
      var a$$29 = v242.finalize(m$$4);
      n$$5.reset();
      var e$$23 = 1;
      var v243 = e$$23 < h$$9;
      for (;v243;) {
        a$$29 = n$$5.finalize(a$$29);
        n$$5.reset();
        e$$23 = e$$23 + 1;
        v243 = e$$23 < h$$9;
      }
      k$$3.concat(a$$29);
      var v539 = f$$8.length;
      v244 = v539 < g$$7;
    }
    k$$3.sigBytes = 4 * g$$7;
    return k$$3;
  }
  function v56(i$$9) {
    var v245 = this.cfg;
    var v1107 = v245.extend(i$$9);
    this.cfg = v1107;
    return;
  }
  var p$$3 = CryptoJS;
  var h$$8 = p$$3.lib;
  var i$$8 = h$$8.Base;
  var l$$4 = h$$8.WordArray;
  h$$8 = p$$3.algo;
  var v246 = h$$8;
  var v915 = h$$8.MD5;
  var v830 = {keySize:4, hasher:v915, iterations:1};
  var v718 = i$$8.extend(v830);
  var v540 = {cfg:v718, init:v56, compute:v57};
  var v1108 = i$$8.extend(v540);
  var r$$3 = v246.EvpKDF = v1108;
  p$$3.EvpKDF = v58;
  return;
}
function v55(p$$2) {
  function v54() {
    var f$$7 = this._data;
    var g$$6 = f$$7.words;
    var v247 = this._nDataBytes;
    var a$$28 = 8 * v247;
    var v248 = f$$7.sigBytes;
    var e$$22 = 8 * v248;
    var v249 = e$$22 >>> 5;
    introspect(JAM.policy.p12) {
      var v719 = g$$6[v249]
    }
    var v916 = e$$22 % 32;
    var v831 = 24 - v916;
    var v720 = 128 << v831;
    introspect(JAM.policy.p18) {
      g$$6[v249] = v719 | v720;
    }
    var v832 = e$$22 + 64;
    var v721 = v832 >>> 9;
    var v541 = v721 << 4;
    var v250 = v541 + 14;
    var v833 = a$$28 << 8;
    var v834 = a$$28 >>> 24;
    var v722 = v833 | v834;
    var v542 = v722 & 16711935;
    var v835 = a$$28 << 24;
    var v836 = a$$28 >>> 8;
    var v723 = v835 | v836;
    var v543 = v723 & 4278255360;
    introspect(JAM.policy.p18) {
      g$$6[v250] = v542 | v543;
    }
    var v544 = g$$6.length;
    var v251 = v544 + 1;
    f$$7.sigBytes = 4 * v251;
    this._process();
    var v252 = this._hash;
    f$$7 = v252.words;
    g$$6 = 0;
    var v253 = 4 > g$$6;
    for (;v253;) {
      introspect(JAM.policy.p12) {
        a$$28 = f$$7[g$$6];
      }
      var v837 = a$$28 << 8;
      var v838 = a$$28 >>> 24;
      var v724 = v837 | v838;
      var v545 = v724 & 16711935;
      var v839 = a$$28 << 24;
      var v840 = a$$28 >>> 8;
      var v725 = v839 | v840;
      var v546 = v725 & 4278255360;
      introspect(JAM.policy.p18) {
        f$$7[g$$6] = v545 | v546;
      }
      g$$6 = g$$6 + 1;
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
      var v726 = c$$15 << 8;
      var v727 = c$$15 >>> 24;
      var v547 = v726 | v727;
      var v254 = v547 & 16711935;
      var v728 = c$$15 << 24;
      var v729 = c$$15 >>> 8;
      var v548 = v728 | v729;
      var v255 = v548 & 4278255360;
      introspect(JAM.policy.p18) {
        f$$6[e$$21] = v254 | v255;
      }
      a$$27 = a$$27 + 1;
      v256 = 16 > a$$27;
    }
    var v257 = this._hash;
    e$$21 = v257.words;
    introspect(JAM.policy.p12) {
      c$$15 = e$$21[0];
    }
    introspect(JAM.policy.p12) {
      var b$$10 = e$$21[1]
    }
    introspect(JAM.policy.p12) {
      var d$$7 = e$$21[2]
    }
    introspect(JAM.policy.p12) {
      var q$$1 = e$$21[3]
    }
    a$$27 = 0;
    var v259 = 64 > a$$27;
    for (;v259;) {
      var v258;
      var v550 = 16 > a$$27;
      if (v550) {
        var v981 = g$$5 + a$$27;
        introspect(JAM.policy.p12) {
          var v917 = f$$6[v981]
        }
        introspect(JAM.policy.p12) {
          var v918 = k$$2[a$$27]
        }
        c$$15 = h$$7(c$$15, b$$10, d$$7, q$$1, v917, 7, v918);
        var v1027 = g$$5 + a$$27;
        var v982 = v1027 + 1;
        introspect(JAM.policy.p12) {
          var v919 = f$$6[v982]
        }
        var v983 = a$$27 + 1;
        introspect(JAM.policy.p12) {
          var v920 = k$$2[v983]
        }
        q$$1 = h$$7(q$$1, c$$15, b$$10, d$$7, v919, 12, v920);
        var v984 = g$$5 + a$$27;
        var v921 = v984 + 2;
        introspect(JAM.policy.p12) {
          var v841 = f$$6[v921]
        }
        var v922 = a$$27 + 2;
        introspect(JAM.policy.p12) {
          var v842 = k$$2[v922]
        }
        d$$7 = h$$7(d$$7, q$$1, c$$15, b$$10, v841, 17, v842);
        var v923 = g$$5 + a$$27;
        var v843 = v923 + 3;
        introspect(JAM.policy.p12) {
          var v730 = f$$6[v843]
        }
        var v844 = a$$27 + 3;
        introspect(JAM.policy.p12) {
          var v731 = k$$2[v844]
        }
        v258 = b$$10 = h$$7(b$$10, d$$7, q$$1, c$$15, v730, 22, v731);
      } else {
        var v549;
        var v733 = 32 > a$$27;
        if (v733) {
          var v1073 = a$$27 + 1;
          var v1057 = v1073 % 16;
          var v1028 = g$$5 + v1057;
          introspect(JAM.policy.p12) {
            var v985 = f$$6[v1028]
          }
          introspect(JAM.policy.p12) {
            var v986 = k$$2[a$$27]
          }
          c$$15 = i$$7(c$$15, b$$10, d$$7, q$$1, v985, 5, v986);
          var v1074 = a$$27 + 6;
          var v1058 = v1074 % 16;
          var v1029 = g$$5 + v1058;
          introspect(JAM.policy.p12) {
            var v987 = f$$6[v1029]
          }
          var v1030 = a$$27 + 1;
          introspect(JAM.policy.p12) {
            var v988 = k$$2[v1030]
          }
          q$$1 = i$$7(q$$1, c$$15, b$$10, d$$7, v987, 9, v988);
          var v1059 = a$$27 + 11;
          var v1031 = v1059 % 16;
          var v989 = g$$5 + v1031;
          introspect(JAM.policy.p12) {
            var v924 = f$$6[v989]
          }
          var v990 = a$$27 + 2;
          introspect(JAM.policy.p12) {
            var v925 = k$$2[v990]
          }
          d$$7 = i$$7(d$$7, q$$1, c$$15, b$$10, v924, 14, v925);
          var v991 = a$$27 % 16;
          var v926 = g$$5 + v991;
          introspect(JAM.policy.p12) {
            var v845 = f$$6[v926]
          }
          var v927 = a$$27 + 3;
          introspect(JAM.policy.p12) {
            var v846 = k$$2[v927]
          }
          v549 = b$$10 = i$$7(b$$10, d$$7, q$$1, c$$15, v845, 20, v846);
        } else {
          var v732;
          var v847 = 48 > a$$27;
          if (v847) {
            var v1089 = 3 * a$$27;
            var v1083 = v1089 + 5;
            var v1075 = v1083 % 16;
            var v1060 = g$$5 + v1075;
            introspect(JAM.policy.p12) {
              var v1032 = f$$6[v1060]
            }
            introspect(JAM.policy.p12) {
              var v1033 = k$$2[a$$27]
            }
            c$$15 = l$$3(c$$15, b$$10, d$$7, q$$1, v1032, 4, v1033);
            var v1090 = 3 * a$$27;
            var v1084 = v1090 + 8;
            var v1076 = v1084 % 16;
            var v1061 = g$$5 + v1076;
            introspect(JAM.policy.p12) {
              var v1034 = f$$6[v1061]
            }
            var v1062 = a$$27 + 1;
            introspect(JAM.policy.p12) {
              var v1035 = k$$2[v1062]
            }
            q$$1 = l$$3(q$$1, c$$15, b$$10, d$$7, v1034, 11, v1035);
            var v1085 = 3 * a$$27;
            var v1077 = v1085 + 11;
            var v1063 = v1077 % 16;
            var v1036 = g$$5 + v1063;
            introspect(JAM.policy.p12) {
              var v992 = f$$6[v1036]
            }
            var v1037 = a$$27 + 2;
            introspect(JAM.policy.p12) {
              var v993 = k$$2[v1037]
            }
            d$$7 = l$$3(d$$7, q$$1, c$$15, b$$10, v992, 16, v993);
            var v1078 = 3 * a$$27;
            var v1064 = v1078 + 14;
            var v1038 = v1064 % 16;
            var v994 = g$$5 + v1038;
            introspect(JAM.policy.p12) {
              var v928 = f$$6[v994]
            }
            var v995 = a$$27 + 3;
            introspect(JAM.policy.p12) {
              var v929 = k$$2[v995]
            }
            v732 = b$$10 = l$$3(b$$10, d$$7, q$$1, c$$15, v928, 23, v929);
          } else {
            var v1086 = 3 * a$$27;
            var v1079 = v1086 % 16;
            var v1065 = g$$5 + v1079;
            introspect(JAM.policy.p12) {
              var v1039 = f$$6[v1065]
            }
            introspect(JAM.policy.p12) {
              var v1040 = k$$2[a$$27]
            }
            c$$15 = r$$2(c$$15, b$$10, d$$7, q$$1, v1039, 6, v1040);
            var v1091 = 3 * a$$27;
            var v1087 = v1091 + 7;
            var v1080 = v1087 % 16;
            var v1066 = g$$5 + v1080;
            introspect(JAM.policy.p12) {
              var v1041 = f$$6[v1066]
            }
            var v1067 = a$$27 + 1;
            introspect(JAM.policy.p12) {
              var v1042 = k$$2[v1067]
            }
            q$$1 = r$$2(q$$1, c$$15, b$$10, d$$7, v1041, 10, v1042);
            var v1088 = 3 * a$$27;
            var v1081 = v1088 + 14;
            var v1068 = v1081 % 16;
            var v1043 = g$$5 + v1068;
            introspect(JAM.policy.p12) {
              var v996 = f$$6[v1043]
            }
            var v1044 = a$$27 + 2;
            introspect(JAM.policy.p12) {
              var v997 = k$$2[v1044]
            }
            d$$7 = r$$2(d$$7, q$$1, c$$15, b$$10, v996, 15, v997);
            var v1082 = 3 * a$$27;
            var v1069 = v1082 + 5;
            var v1045 = v1069 % 16;
            var v998 = g$$5 + v1045;
            introspect(JAM.policy.p12) {
              var v930 = f$$6[v998]
            }
            var v999 = a$$27 + 3;
            introspect(JAM.policy.p12) {
              var v931 = k$$2[v999]
            }
            v732 = b$$10 = r$$2(b$$10, d$$7, q$$1, c$$15, v930, 21, v931);
          }
          v549 = v732;
        }
        v258 = v549;
      }
      v258;
      a$$27 = a$$27 + 4;
      v259 = 64 > a$$27;
    }
    introspect(JAM.policy.p12) {
      var v551 = e$$21[0]
    }
    var v260 = v551 + c$$15;
    introspect(JAM.policy.p18) {
      e$$21[0] = v260 | 0;
    }
    introspect(JAM.policy.p12) {
      var v552 = e$$21[1]
    }
    var v261 = v552 + b$$10;
    introspect(JAM.policy.p18) {
      e$$21[1] = v261 | 0;
    }
    introspect(JAM.policy.p12) {
      var v553 = e$$21[2]
    }
    var v262 = v553 + d$$7;
    introspect(JAM.policy.p18) {
      e$$21[2] = v262 | 0;
    }
    introspect(JAM.policy.p12) {
      var v554 = e$$21[3]
    }
    var v263 = v554 + q$$1;
    introspect(JAM.policy.p18) {
      e$$21[3] = v263 | 0;
    }
    return;
  }
  function v52() {
    var v264 = [1732584193, 4023233417, 2562383102, 271733878];
    var v1109 = s$$5.create(v264);
    this._hash = v1109;
    return;
  }
  function v51() {
    var f$$5 = 0;
    var v267 = 64 > f$$5;
    for (;v267;) {
      var v265 = k$$2;
      var v266 = f$$5;
      var v932 = f$$5 + 1;
      var v848 = p$$2.sin(v932);
      var v734 = p$$2.abs(v848);
      var v555 = 4294967296 * v734;
      introspect(JAM.policy.p18) {
        v265[v266] = v555 | 0;
      }
      f$$5 = f$$5 + 1;
      v267 = 64 > f$$5;
    }
    return;
  }
  function h$$7(f$$1, g$$1, a$$23, e$$17, c$$11, b$$6, d$$3) {
    var v849 = g$$1 & a$$23;
    var v933 = ~g$$1;
    var v850 = v933 & e$$17;
    var v735 = v849 | v850;
    var v556 = f$$1 + v735;
    var v268 = v556 + c$$11;
    f$$1 = v268 + d$$3;
    var v557 = f$$1 << b$$6;
    var v736 = 32 - b$$6;
    var v558 = f$$1 >>> v736;
    var v269 = v557 | v558;
    return v269 + g$$1;
  }
  function i$$7(f$$2, g$$2, a$$24, e$$18, c$$12, b$$7, d$$4) {
    var v851 = g$$2 & e$$18;
    var v934 = ~e$$18;
    var v852 = a$$24 & v934;
    var v737 = v851 | v852;
    var v559 = f$$2 + v737;
    var v270 = v559 + c$$12;
    f$$2 = v270 + d$$4;
    var v560 = f$$2 << b$$7;
    var v738 = 32 - b$$7;
    var v561 = f$$2 >>> v738;
    var v271 = v560 | v561;
    return v271 + g$$2;
  }
  function l$$3(f$$3, g$$3, a$$25, e$$19, c$$13, b$$8, d$$5) {
    var v853 = g$$3 ^ a$$25;
    var v739 = v853 ^ e$$19;
    var v562 = f$$3 + v739;
    var v272 = v562 + c$$13;
    f$$3 = v272 + d$$5;
    var v563 = f$$3 << b$$8;
    var v740 = 32 - b$$8;
    var v564 = f$$3 >>> v740;
    var v273 = v563 | v564;
    return v273 + g$$3;
  }
  function r$$2(f$$4, g$$4, a$$26, e$$20, c$$14, b$$9, d$$6) {
    var v935 = ~e$$20;
    var v854 = g$$4 | v935;
    var v741 = a$$26 ^ v854;
    var v565 = f$$4 + v741;
    var v274 = v565 + c$$14;
    f$$4 = v274 + d$$6;
    var v566 = f$$4 << b$$9;
    var v742 = 32 - b$$9;
    var v567 = f$$4 >>> v742;
    var v275 = v566 | v567;
    return v275 + g$$4;
  }
  var o$$3 = CryptoJS;
  var m$$3 = o$$3.lib;
  var s$$5 = m$$3.WordArray;
  m$$3 = m$$3.Hasher;
  var n$$4 = o$$3.algo;
  var k$$2 = [];
  v51();
  var v276 = n$$4;
  var v568 = {_doReset:v52, _doProcessBlock:v53, _doFinalize:v54};
  var v1110 = m$$3.extend(v568);
  n$$4 = v276.MD5 = v1110;
  var v277 = o$$3;
  var v1111 = m$$3._createHelper(n$$4);
  v277.MD5 = v1111;
  var v278 = o$$3;
  var v1112 = m$$3._createHmacHelper(n$$4);
  v278.HmacMD5 = v1112;
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
      var v743 = -1 != o$$2;
      if (v743) {
        l$$2 = o$$2;
      }
    }
    o$$2 = [];
    var m$$2 = 0;
    var s$$4 = 0;
    var v285 = s$$4 < l$$2;
    for (;v285;) {
      var v284 = s$$4 % 4;
      if (v284) {
        var v744 = s$$4 - 1;
        var v569 = i$$6.charAt(v744);
        var v279 = r$$1.indexOf(v569);
        var v570 = s$$4 % 4;
        var v280 = 2 * v570;
        var n$$3 = v279 << v280;
        var v571 = i$$6.charAt(s$$4);
        var v281 = r$$1.indexOf(v571);
        var v745 = s$$4 % 4;
        var v572 = 2 * v745;
        var v282 = 6 - v572;
        var k$$1 = v281 >>> v282;
        var v283 = m$$2 >>> 2;
        introspect(JAM.policy.p12) {
          var v746 = o$$2[v283]
        }
        var v855 = n$$3 | k$$1;
        var v1000 = m$$2 % 4;
        var v936 = 8 * v1000;
        var v856 = 24 - v936;
        var v747 = v855 << v856;
        introspect(JAM.policy.p18) {
          o$$2[v283] = v746 | v747;
        }
        m$$2 = m$$2 + 1;
      }
      s$$4 = s$$4 + 1;
      v285 = s$$4 < l$$2;
    }
    return h$$5.create(o$$2, m$$2);
  }
  function v48(i$$5) {
    var l$$1 = i$$5.words;
    var h$$6 = i$$5.sigBytes;
    var o$$1 = this._map;
    i$$5.clamp();
    i$$5 = [];
    var m$$1 = 0;
    var v290 = m$$1 < h$$6;
    for (;v290;) {
      var v1001 = m$$1 >>> 2;
      introspect(JAM.policy.p12) {
        var v937 = l$$1[v1001]
      }
      var v1046 = m$$1 % 4;
      var v1002 = 8 * v1046;
      var v938 = 24 - v1002;
      var v857 = v937 >>> v938;
      var v748 = v857 & 255;
      var v573 = v748 << 16;
      var v1047 = m$$1 + 1;
      var v1003 = v1047 >>> 2;
      introspect(JAM.policy.p12) {
        var v939 = l$$1[v1003]
      }
      var v1070 = m$$1 + 1;
      var v1048 = v1070 % 4;
      var v1004 = 8 * v1048;
      var v940 = 24 - v1004;
      var v858 = v939 >>> v940;
      var v749 = v858 & 255;
      var v574 = v749 << 8;
      var v286 = v573 | v574;
      var v941 = m$$1 + 2;
      var v859 = v941 >>> 2;
      introspect(JAM.policy.p12) {
        var v750 = l$$1[v859]
      }
      var v1005 = m$$1 + 2;
      var v942 = v1005 % 4;
      var v860 = 8 * v942;
      var v751 = 24 - v860;
      var v575 = v750 >>> v751;
      var v287 = v575 & 255;
      var s$$3 = v286 | v287;
      var n$$2 = 0;
      var v576 = 4 > n$$2;
      if (v576) {
        var v861 = .75 * n$$2;
        var v752 = m$$1 + v861;
        v576 = v752 < h$$6;
      }
      var v289 = v576;
      for (;v289;) {
        var v943 = 3 - n$$2;
        var v862 = 6 * v943;
        var v753 = s$$3 >>> v862;
        var v577 = v753 & 63;
        var v288 = o$$1.charAt(v577);
        i$$5.push(v288);
        n$$2 = n$$2 + 1;
        var v578 = 4 > n$$2;
        if (v578) {
          var v863 = .75 * n$$2;
          var v754 = m$$1 + v863;
          v578 = v754 < h$$6;
        }
        v289 = v578;
      }
      m$$1 = m$$1 + 3;
      v290 = m$$1 < h$$6;
    }
    var v292 = l$$1 = o$$1.charAt(64);
    if (v292) {
      var v579 = i$$5.length;
      var v291 = v579 % 4;
      for (;v291;) {
        i$$5.push(l$$1);
        var v580 = i$$5.length;
        v291 = v580 % 4;
      }
    }
    return i$$5.join("");
  }
  var p$$1 = CryptoJS;
  var v293 = p$$1.lib;
  var h$$5 = v293.WordArray;
  var v294 = p$$1.enc;
  v294.Base64 = {stringify:v48, parse:v49, _map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};
  return;
}
function v47(p, h$$4) {
  function v46(a$$22) {
    function v45(e$$16, c$$10) {
      var v581 = g.HMAC;
      var v295 = v581.create(a$$22, c$$10);
      return v295.finalize(e$$16);
    }
    return v45;
  }
  function v44(a$$21) {
    function v43(e$$15, c$$9) {
      var v296 = a$$21.create(c$$9);
      return v296.finalize(e$$15);
    }
    return v43;
  }
  function v42() {
    var v297 = f.clone;
    var a$$20 = v297.call(this);
    var v298 = a$$20;
    var v582 = this._hash;
    var v1113 = v582.clone();
    v298._hash = v1113;
    return a$$20;
  }
  function v41(a$$19) {
    if (a$$19) {
      this._append(a$$19);
    }
    this._doFinalize();
    return this._hash;
  }
  function v40(a$$18) {
    this._append(a$$18);
    this._process();
    return this;
  }
  function v39() {
    var v299 = f.reset;
    v299.call(this);
    this._doReset();
    return;
  }
  function v38() {
    this.reset();
    return;
  }
  function v37() {
    var v300 = r.clone;
    var a$$17 = v300.call(this);
    var v301 = a$$17;
    var v583 = this._data;
    var v1114 = v583.clone();
    v301._data = v1114;
    return a$$17;
  }
  function v36(a$$16) {
    var e$$14 = this._data;
    var c$$8 = e$$14.words;
    var b$$5 = e$$14.sigBytes;
    var d$$2 = this.blockSize;
    var v302 = 4 * d$$2;
    var q = b$$5 / v302;
    var v303;
    if (a$$16) {
      v303 = p.ceil(q);
    } else {
      var v755 = q | 0;
      var v756 = this._minBufferSize;
      var v584 = v755 - v756;
      v303 = p.max(v584, 0);
    }
    q = v303;
    a$$16 = q * d$$2;
    var v304 = 4 * a$$16;
    b$$5 = p.min(v304, b$$5);
    if (a$$16) {
      var j = 0;
      var v305 = j < a$$16;
      for (;v305;) {
        this._doProcessBlock(c$$8, j);
        j = j + d$$2;
        v305 = j < a$$16;
      }
      j = c$$8.splice(0, a$$16);
      var v585 = e$$14.sigBytes;
      e$$14.sigBytes = v585 - b$$5;
    }
    return o.create(j, b$$5);
  }
  function v35(a$$15) {
    var v586 = typeof a$$15;
    var v306 = "string" == v586;
    if (v306) {
      a$$15 = k.parse(a$$15);
    }
    var v307 = this._data;
    v307.concat(a$$15);
    var v587 = this._nDataBytes;
    var v588 = a$$15.sigBytes;
    this._nDataBytes = v587 + v588;
    return;
  }
  function v34() {
    var v1115 = o.create();
    this._data = v1115;
    this._nDataBytes = 0;
    return;
  }
  function v33(a$$14) {
    var v589 = encodeURIComponent(a$$14);
    var v308 = unescape(v589);
    return n$$1.parse(v308);
  }
  function v32(a$$13) {
    try {
      var v590 = n$$1.stringify(a$$13);
      var v309 = escape(v590);
      return decodeURIComponent(v309);
    } catch (e$$13) {
      throw Error("Malformed UTF-8 data");
    }
    return;
  }
  function v31(a$$12) {
    var e$$12 = a$$12.length;
    var c$$7 = [];
    var b$$4 = 0;
    var v312 = b$$4 < e$$12;
    for (;v312;) {
      var v310 = c$$7;
      var v311 = b$$4 >>> 2;
      introspect(JAM.policy.p12) {
        var v757 = v310[v311]
      }
      var v944 = a$$12.charCodeAt(b$$4);
      var v864 = v944 & 255;
      var v1006 = b$$4 % 4;
      var v945 = 8 * v1006;
      var v865 = 24 - v945;
      var v758 = v864 << v865;
      introspect(JAM.policy.p18) {
        v310[v311] = v757 | v758;
      }
      b$$4 = b$$4 + 1;
      v312 = b$$4 < e$$12;
    }
    return o.create(c$$7, e$$12);
  }
  function v30(a$$11) {
    var e$$11 = a$$11.words;
    a$$11 = a$$11.sigBytes;
    var c$$6 = [];
    var b$$3 = 0;
    var v314 = b$$3 < a$$11;
    for (;v314;) {
      var v946 = b$$3 >>> 2;
      introspect(JAM.policy.p12) {
        var v866 = e$$11[v946]
      }
      var v1007 = b$$3 % 4;
      var v947 = 8 * v1007;
      var v867 = 24 - v947;
      var v759 = v866 >>> v867;
      var v591 = v759 & 255;
      var v313 = String.fromCharCode(v591);
      c$$6.push(v313);
      b$$3 = b$$3 + 1;
      v314 = b$$3 < a$$11;
    }
    return c$$6.join("");
  }
  function v29(a$$10) {
    var e$$10 = a$$10.length;
    var c$$5 = [];
    var b$$2 = 0;
    var v317 = b$$2 < e$$10;
    for (;v317;) {
      var v315 = c$$5;
      var v316 = b$$2 >>> 3;
      introspect(JAM.policy.p12) {
        var v760 = v315[v316]
      }
      var v948 = a$$10.substr(b$$2, 2);
      var v868 = parseInt(v948, 16);
      var v1008 = b$$2 % 8;
      var v949 = 4 * v1008;
      var v869 = 24 - v949;
      var v761 = v868 << v869;
      introspect(JAM.policy.p18) {
        v315[v316] = v760 | v761;
      }
      b$$2 = b$$2 + 2;
      v317 = b$$2 < e$$10;
    }
    var v318 = e$$10 / 2;
    return o.create(c$$5, v318);
  }
  function v28(a$$9) {
    var e$$9 = a$$9.words;
    a$$9 = a$$9.sigBytes;
    var c$$4 = [];
    var b$$1 = 0;
    var v322 = b$$1 < a$$9;
    for (;v322;) {
      var v762 = b$$1 >>> 2;
      introspect(JAM.policy.p12) {
        var v592 = e$$9[v762]
      }
      var v870 = b$$1 % 4;
      var v763 = 8 * v870;
      var v593 = 24 - v763;
      var v319 = v592 >>> v593;
      var d$$1 = v319 & 255;
      var v594 = d$$1 >>> 4;
      var v320 = v594.toString(16);
      c$$4.push(v320);
      var v595 = d$$1 & 15;
      var v321 = v595.toString(16);
      c$$4.push(v321);
      b$$1 = b$$1 + 1;
      v322 = b$$1 < a$$9;
    }
    return c$$4.join("");
  }
  function v27(a$$8) {
    var e$$8 = [];
    var c$$3 = 0;
    var v324 = c$$3 < a$$8;
    for (;v324;) {
      var v764 = p.random();
      var v596 = 4294967296 * v764;
      var v323 = v596 | 0;
      e$$8.push(v323);
      c$$3 = c$$3 + 4;
      v324 = c$$3 < a$$8;
    }
    return o.create(e$$8, a$$8);
  }
  function v26() {
    var v325 = r.clone;
    var a$$7 = v325.call(this);
    var v326 = a$$7;
    var v597 = this.words;
    var v1116 = v597.slice(0);
    v326.words = v1116;
    return a$$7;
  }
  function v25() {
    var a$$6 = this.words;
    var e$$7 = this.sigBytes;
    var v327 = e$$7 >>> 2;
    introspect(JAM.policy.p12) {
      var v765 = a$$6[v327]
    }
    var v1009 = e$$7 % 4;
    var v950 = 8 * v1009;
    var v871 = 32 - v950;
    var v766 = 4294967295 << v871;
    introspect(JAM.policy.p18) {
      a$$6[v327] = v765 & v766;
    }
    var v328 = a$$6;
    var v598 = e$$7 / 4;
    var v1117 = p.ceil(v598);
    v328.length = v1117;
    return;
  }
  function v24(a$$5) {
    var e$$6 = this.words;
    var c$$2 = a$$5.words;
    var b = this.sigBytes;
    a$$5 = a$$5.sigBytes;
    this.clamp();
    var v335 = b % 4;
    if (v335) {
      var d = 0;
      var v330 = d < a$$5;
      for (;v330;) {
        var v599 = b + d;
        var v329 = v599 >>> 2;
        introspect(JAM.policy.p12) {
          var v767 = e$$6[v329]
        }
        var v1049 = d >>> 2;
        introspect(JAM.policy.p12) {
          var v1010 = c$$2[v1049]
        }
        var v1071 = d % 4;
        var v1050 = 8 * v1071;
        var v1011 = 24 - v1050;
        var v951 = v1010 >>> v1011;
        var v872 = v951 & 255;
        var v1051 = b + d;
        var v1012 = v1051 % 4;
        var v952 = 8 * v1012;
        var v873 = 24 - v952;
        var v768 = v872 << v873;
        introspect(JAM.policy.p18) {
          e$$6[v329] = v767 | v768;
        }
        d = d + 1;
        v330 = d < a$$5;
      }
    } else {
      var v600 = c$$2.length;
      var v334 = 65535 < v600;
      if (v334) {
        d = 0;
        var v332 = d < a$$5;
        for (;v332;) {
          var v601 = b + d;
          var v331 = v601 >>> 2;
          var v602 = d >>> 2;
          introspect(JAM.policy.p18) {
            e$$6[v331] = c$$2[v602];
          }
          d = d + 4;
          v332 = d < a$$5;
        }
      } else {
        var v333 = e$$6.push;
        v333.apply(e$$6, c$$2);
      }
    }
    var v603 = this.sigBytes;
    this.sigBytes = v603 + a$$5;
    return this;
  }
  function v23(a$$4) {
    var v336 = a$$4 || s$$2;
    return v336.stringify(this);
  }
  function v22(a$$3, e$$5) {
    a$$3 = this.words = a$$3 || [];
    var v337;
    var v605 = e$$5 != h$$4;
    if (v605) {
      v337 = e$$5;
    } else {
      var v604 = a$$3.length;
      v337 = 4 * v604;
    }
    this.sigBytes = v337;
    return;
  }
  function v21() {
    function v20() {
      var v338 = this.$super;
      return v338.extend(this);
    }
    function v19(a$$2) {
      var c$$1;
      for (c$$1 in a$$2) {
        var v339 = a$$2.hasOwnProperty(c$$1);
        if (v339) {
          introspect(JAM.policy.p18) {
            this[c$$1] = a$$2[c$$1];
          }
        }
      }
      var v340 = a$$2.hasOwnProperty("toString");
      if (v340) {
        this.toString = a$$2.toString;
      }
      return;
    }
    function v18() {
      return;
    }
    function v17() {
      var a$$1 = this.extend();
      var v341 = a$$1.init;
      v341.apply(a$$1, arguments);
      return a$$1;
    }
    function v16(e$$4) {
      a.prototype = this;
      var c = new a;
      if (e$$4) {
        c.mixIn(e$$4);
      }
      c.$super = this;
      return c;
    }
    function a() {
      return;
    }
    return{extend:v16, create:v17, init:v18, mixIn:v19, clone:v20};
  }
  var i$$4 = {};
  var l = i$$4.lib = {};
  var v342 = l;
  var v1118 = v21();
  var r = v342.Base = v1118;
  var v343 = l;
  var v606 = {init:v22, toString:v23, concat:v24, clamp:v25, clone:v26, random:v27};
  var v1119 = r.extend(v606);
  var o = v343.WordArray = v1119;
  var m = i$$4.enc = {};
  var s$$2 = m.Hex = {stringify:v28, parse:v29};
  var n$$1 = m.Latin1 = {stringify:v30, parse:v31};
  var k = m.Utf8 = {stringify:v32, parse:v33};
  var v344 = l;
  var v607 = {reset:v34, _append:v35, _process:v36, clone:v37, _minBufferSize:0};
  var v1120 = r.extend(v607);
  var f = v344.BufferedBlockAlgorithm = v1120;
  var v345 = l;
  var v608 = {init:v38, reset:v39, update:v40, finalize:v41, clone:v42, blockSize:16, _createHelper:v44, _createHmacHelper:v46};
  var v1121 = f.extend(v608);
  v345.Hasher = v1121;
  var g = i$$4.algo = {};
  return i$$4;
}
function getElementsByClass(strClassName) {
  var arrayElemsFound = new Array;
  var arrayElems = document.getElementsByTagName("*");
  var i$$2 = 0;
  var v609 = arrayElems.length;
  var v348 = i$$2 < v609;
  for (;v348;) {
    introspect(JAM.policy.p12) {
      var v769 = arrayElems[i$$2]
    }
    var v610 = v769.className;
    var v347 = v610 == strClassName;
    if (v347) {
      introspect(JAM.policy.p12) {
        var v346 = arrayElems[i$$2]
      }
      arrayElemsFound.push(v346);
    }
    i$$2 = i$$2 + 1;
    var v611 = arrayElems.length;
    v348 = i$$2 < v611;
  }
  return arrayElemsFound;
}
function getElementsByType(strType) {
  var arrayElemsFound$$1 = new Array;
  var arrayElems$$1 = document.getElementsByTagName("*");
  var i$$3 = 0;
  var v612 = arrayElems$$1.length;
  var v351 = i$$3 < v612;
  for (;v351;) {
    introspect(JAM.policy.p12) {
      var v770 = arrayElems$$1[i$$3]
    }
    var v613 = v770.type;
    var v350 = v613 == strType;
    if (v350) {
      introspect(JAM.policy.p12) {
        var v349 = arrayElems$$1[i$$3]
      }
      arrayElemsFound$$1.push(v349);
    }
    i$$3 = i$$3 + 1;
    var v614 = arrayElems$$1.length;
    v351 = i$$3 < v614;
  }
  return arrayElemsFound$$1;
}
function ajaxPost(strData$$1, strUrl$$1, callback$$25) {
  ajaxRequest("POST", strData$$1, strUrl$$1, callback$$25);
  return;
}
function ajaxGet(strUrl$$2, callback$$26) {
  ajaxRequest("GET", "", strUrl$$2, callback$$26);
  return;
}
function ajaxRequest(strCommand, strData$$2, strUrl$$3, callback$$27) {
  function v0() {
    var v771 = xmlhttp.readyState;
    var v615 = v771 == 4;
    if (v615) {
      var v772 = xmlhttp.status;
      v615 = v772 == 200;
    }
    var v353 = v615;
    if (v353) {
      var v352 = xmlhttp.responseText;
      callback$$27(v352);
    }
    return;
  }
  xmlhttp = new XMLHttpRequest;
  xmlhttp.onreadystatechange = v0;
  xmlhttp.open(strCommand, strUrl$$3, true);
  var v354 = strData$$2 != "";
  if (v354) {
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(strData$$2);
  } else {
    xmlhttp.send();
  }
  return;
}
function SNote(serverPath, divParent) {
  function v14(jsonStr) {
    var jsonObj$$1 = JSON.parse(jsonStr);
    var v616 = CryptoJS.lib;
    var v355 = v616.CipherParams;
    var v874 = CryptoJS.enc;
    var v773 = v874.Base64;
    var v774 = jsonObj$$1.ct;
    var v617 = v773.parse(v774);
    var v356 = {ciphertext:v617};
    var cipherParams$$1 = v355.create(v356);
    var v358 = jsonObj$$1.iv;
    if (v358) {
      var v357 = cipherParams$$1;
      var v775 = CryptoJS.enc;
      var v618 = v775.Hex;
      var v619 = jsonObj$$1.iv;
      var v1122 = v618.parse(v619);
      v357.iv = v1122;
    }
    var v360 = jsonObj$$1.s;
    if (v360) {
      var v359 = cipherParams$$1;
      var v776 = CryptoJS.enc;
      var v620 = v776.Hex;
      var v621 = jsonObj$$1.s;
      var v1123 = v620.parse(v621);
      v359.salt = v1123;
    }
    return cipherParams$$1;
  }
  function v13(cipherParams) {
    var v622 = cipherParams.ciphertext;
    var v777 = CryptoJS.enc;
    var v623 = v777.Base64;
    var v361 = v622.toString(v623);
    var jsonObj = {ct:v361};
    var v363 = cipherParams.iv;
    if (v363) {
      var v362 = jsonObj;
      var v624 = cipherParams.iv;
      var v1124 = v624.toString();
      v362.iv = v1124;
    }
    var v365 = cipherParams.salt;
    if (v365) {
      var v364 = jsonObj;
      var v625 = cipherParams.salt;
      var v1125 = v625.toString();
      v364.s = v1125;
    }
    return JSON.stringify(jsonObj);
  }
  function init(divParent$$1, strServerPath) {
    strNoteId = divParent$$1.id;
    var divParent$$inline_5 = divParent$$1;
    var strServerPath$$inline_6 = strServerPath;
    var strNoteId$$inline_7 = strNoteId;
    var v366 = divParent$$inline_5.style;
    v366.border = "2px solid";
    var v367 = divParent$$inline_5.style;
    v367.backgroundColor = "#FFFFCC";
    divParent$$inline_5.className = "mwwidget:snote";
    var divParent$$inline_79 = divParent$$inline_5;
    preNote = document.createElement("pre");
    var v626 = divParent$$inline_79.id;
    var v368 = v626 + "_";
    preNote.id = v368 + "pre_note";
    preNote.className = "write-only non-editable";
    divParent$$inline_79.appendChild(preNote);
    preCipherText = document.createElement("pre");
    var v627 = divParent$$inline_79.id;
    var v369 = v627 + "_";
    preCipherText.id = v369 + "pre_cipher_text";
    var v370 = preCipherText.style;
    v370.display = "none";
    divParent$$inline_79.appendChild(preCipherText);
    var divParent$$inline_81 = divParent$$inline_5;
    var strNoteId$$inline_82 = strNoteId$$inline_7;
    divButtons = document.createElement("div");
    var v371 = divButtons.style;
    v371.textAlign = "left";
    divParent$$inline_81.appendChild(divButtons);
    var v372 = createEditButtonHandler(strNoteId$$inline_82);
    createNoteButton("edit", v372, divButtons, strNoteId$$inline_82);
    var v373 = createUnlockButtonHandler(strNoteId$$inline_82);
    createNoteButton("read", v373, divButtons, strNoteId$$inline_82);
    var v374 = createDeleteButtonHandler(strNoteId$$inline_82);
    createNoteButton("delete", v374, divButtons, strNoteId$$inline_82);
    var divParent$$inline_84 = divParent$$inline_5;
    var strServerPath$$inline_85 = strServerPath$$inline_6;
    var strNoteId$$inline_86 = strNoteId$$inline_7;
    var v375 = divParent$$inline_84.id;
    divEdit = createPopupDialog("edit_dialog", divParent$$inline_84, v375);
    var v376 = divEdit.style;
    v376.width = 400;
    var v377 = divEdit.style;
    v377.display = "none";
    var v378 = divParent$$inline_84.id;
    inputNewPassword = createPasswordPanel(divEdit, "Enter password:", "input_new_password", v378);
    var v379 = divParent$$inline_84.id;
    inputNewPasswordRetype = createPasswordPanel(divEdit, "Retype password:", "input_new_password_retype", v379);
    inputNote = document.createElement("textarea");
    var v380 = inputNote.style;
    v380.width = 350;
    var v381 = inputNote.style;
    v381.height = 200;
    inputNote.className = "destructive-read read-only";
    var v628 = divParent$$inline_84.id;
    var v382 = v628 + "_";
    inputNote.id = v382 + "input_new_note";
    divEdit.appendChild(inputNote);
    var v383 = createEditDialogOkHandler(strServerPath$$inline_85, strNoteId$$inline_86);
    var v384 = createEditDialogCancelHandler(strNoteId$$inline_86);
    divButtons = createDialogButtonPanel(v383, v384, divEdit);
    var divParent$$inline_88 = divParent$$inline_5;
    var strNoteId$$inline_89 = strNoteId$$inline_7;
    var v385 = divParent$$inline_88.id;
    divUnlock = createPopupDialog("unlock_dialog", divParent$$inline_88, v385);
    var v386 = divUnlock.style;
    v386.display = "none";
    var v387 = divParent$$inline_88.id;
    inputPassword = createPasswordPanel(divUnlock, "Enter password:", "input_password", v387);
    var v388 = createUnlockDialogOkHandler(strNoteId$$inline_89);
    var v389 = createUnlockDialogCancelHandler(strNoteId$$inline_89);
    var v390 = divParent$$inline_88.id;
    createDialogButtonPanel(v388, v389, divUnlock, v390);
    var strServerPath$$inline_92 = strServerPath$$inline_6;
    var strNoteId$$inline_93 = strNoteId$$inline_7;
    var v391 = divParent$$inline_5.id;
    divDeleteDialog = createPopupDialog("delete_dialog", divParent$$inline_5, v391);
    var v392 = divDeleteDialog.style;
    v392.display = "none";
    var parent$$inline_94 = divDeleteDialog;
    label = document.createElement("label");
    introspect(JAM.policy.p19) {
      label.textContent = "Are you sure you want to delete?";
    }
    parent$$inline_94.appendChild(label);
    var v393 = createDeleteDialogOkHandler(strServerPath$$inline_92, strNoteId$$inline_93);
    var v394 = createDeleteDialogCancelHandler(strNoteId$$inline_93);
    createDialogButtonPanel(v393, v394, divDeleteDialog);
    var v395 = createFetchHandler(strNoteId);
    fetch(strServerPath, strNoteId, v395);
    return;
  }
  function createNoteButton(strLabel, funcHandleClick, divButtons$$1, strNoteId$$6) {
    button = document.createElement("input");
    button.type = "button";
    button.value = strLabel;
    var v396 = strNoteId$$6 + "_";
    var v397 = "button_" + strLabel;
    button.id = v396 + v397;
    divButtons$$1.appendChild(button);
    button.onclick = funcHandleClick;
    return button;
  }
  function createPasswordPanel(divParent$$8, strPrompt, strPasswordInputId, strNoteId$$7) {
    divPassword = document.createElement("div");
    divParent$$8.appendChild(divPassword);
    labelPassword = document.createElement("label");
    introspect(JAM.policy.p19) {
      labelPassword.textContent = strPrompt;
    }
    divPassword.appendChild(labelPassword);
    inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.className = "destructive-read read-only";
    var v398 = strNoteId$$7 + "_";
    inputPassword.id = v398 + strPasswordInputId;
    divPassword.appendChild(inputPassword);
    return inputPassword;
  }
  function createPopupDialog(strDialogId, divParent$$9, strNoteId$$8) {
    divDialog = document.createElement("div");
    var v399 = strNoteId$$8 + "_";
    divDialog.id = v399 + strDialogId;
    divDialog.className = "popup";
    divParent$$9.appendChild(divDialog);
    return divDialog;
  }
  function createDialogButtonPanel(funcHandleOk, funcHandleCancel, parent$$1) {
    divButtons = document.createElement("div");
    buttonOk = document.createElement("button");
    buttonOk.type = "input";
    introspect(JAM.policy.p19) {
      buttonOk.textContent = "ok";
    }
    buttonOk.onclick = funcHandleOk;
    divButtons.appendChild(buttonOk);
    buttonCancel = document.createElement("button");
    buttonCancel.type = "input";
    introspect(JAM.policy.p19) {
      buttonCancel.textContent = "cancel";
    }
    buttonCancel.onclick = funcHandleCancel;
    divButtons.appendChild(buttonCancel);
    parent$$1.appendChild(divButtons);
    return divButtons;
  }
  function closeUnlockDialog(strNoteId$$12) {
    var v629 = strNoteId$$12 + "_";
    var v400 = v629 + "unlock_dialog";
    var div$$3 = document.getElementById(v400);
    var v401 = div$$3.style;
    v401.display = "none";
    var v630 = strNoteId$$12 + "_";
    var v402 = v630 + "input_password";
    var inputPassword$$inline_14 = document.getElementById(v402);
    inputPassword$$inline_14.value = "";
    return;
  }
  function closeDeleteDialog(strNoteId$$13) {
    var v631 = strNoteId$$13 + "_";
    var v403 = v631 + "delete_dialog";
    var div$$4 = document.getElementById(v403);
    var v404 = div$$4.style;
    v404.display = "none";
    return;
  }
  function closeEditDialog(strNoteId$$14) {
    var v632 = strNoteId$$14 + "_";
    var v405 = v632 + "edit_dialog";
    var div$$5 = document.getElementById(v405);
    var v406 = div$$5.style;
    v406.display = "none";
    var v633 = strNoteId$$14 + "_";
    var v407 = v633 + "input_new_note";
    var inputNewNote$$inline_18 = document.getElementById(v407);
    inputNewNote$$inline_18.value = "";
    var v634 = strNoteId$$14 + "_";
    var v408 = v634 + "input_new_password";
    var inputNewPassword$$inline_22 = document.getElementById(v408);
    inputNewPassword$$inline_22.value = "";
    var v635 = strNoteId$$14 + "_";
    var v409 = v635 + "input_new_password_retype";
    var inputNote$$inline_26 = document.getElementById(v409);
    inputNote$$inline_26.value = "";
    return;
  }
  function closeDialogsBoxes(strNoteId$$15) {
    closeEditDialog(strNoteId$$15);
    closeDeleteDialog(strNoteId$$15);
    closeUnlockDialog(strNoteId$$15);
    return;
  }
  function setPreNote(strNoteId$$16, strVal) {
    var v636 = strNoteId$$16 + "_";
    var v410 = v636 + "pre_note";
    var preNote$$1 = document.getElementById(v410);
    introspect(JAM.policy.p19) {
      preNote$$1.textContent = strVal;
    }
    return;
  }
  function hideEditButton(strNoteId$$27) {
    var v637 = strNoteId$$27 + "_";
    var v411 = v637 + "button_edit";
    var buttonEdit = document.getElementById(v411);
    var v412 = buttonEdit.style;
    v412.display = "none";
    return;
  }
  function hideUnlockButton(strNoteId$$28) {
    var v638 = strNoteId$$28 + "_";
    var v413 = v638 + "button_read";
    var buttonUnlock = document.getElementById(v413);
    var v414 = buttonUnlock.style;
    v414.display = "none";
    return;
  }
  function hideDeleteButton(strNoteId$$29) {
    var v639 = strNoteId$$29 + "_";
    var v415 = v639 + "button_delete";
    var buttonDelete = document.getElementById(v415);
    var v416 = buttonDelete.style;
    v416.display = "none";
    return;
  }
  function showUnlockButton(strNoteId$$31) {
    var v640 = strNoteId$$31 + "_";
    var v417 = v640 + "button_read";
    var buttonUnlock$$1 = document.getElementById(v417);
    var v418 = buttonUnlock$$1.style;
    v418.display = "inline";
    return;
  }
  function destructiveRead(elem$$1) {
    val = elem$$1.value;
    elem$$1.value = "";
    return val;
  }
  function createDeleteButtonHandler(strNoteId$$36) {
    function v1() {
      var v641 = strNoteId$$36 + "_";
      var v419 = v641 + "delete_dialog";
      var div$$inline_29 = document.getElementById(v419);
      var v420 = div$$inline_29.style;
      v420.display = "block";
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
      strData = JSON.stringify(arrData$$inline_34);
      strUrl = strServerPath$$inline_31 + "DeleteBlob.php";
      ajaxPost(strData, strUrl, callbackDeleteHandler$$inline_33);
      return;
    }
    return v3;
  }
  function createUnlockButtonHandler(strNoteId$$39) {
    function v4() {
      var v642 = strNoteId$$39 + "_";
      var v421 = v642 + "unlock_dialog";
      var div$$inline_37 = document.getElementById(v421);
      var v422 = div$$inline_37.style;
      v422.display = "block";
      return;
    }
    return v4;
  }
  function createUnlockDialogOkHandler(strNoteId$$40) {
    function v5() {
      JAM.startProfile('read');

      var JSCompiler_inline_result$$0;
      var v643 = strNoteId$$40 + "_";
      var v423 = v643 + "pre_cipher_text";
      var preCipherText$$inline_40 = document.getElementById(v423);
      introspect(JAM.policy.p15) {
        JSCompiler_inline_result$$0 = preCipherText$$inline_40.textContent;
      }
      var JSCompiler_temp_const$$2 = JSCompiler_inline_result$$0;
      var JSCompiler_inline_result$$3;
      var v644 = strNoteId$$40 + "_";
      var v424 = v644 + "input_password";
      var inputPassword$$inline_43 = document.getElementById(v424);
      JSCompiler_inline_result$$3 = destructiveRead(inputPassword$$inline_43);
      var JSCompiler_inline_result$$1;
      JSCompiler_inline_label_decryptText_47: {
        var v428 = JSCompiler_inline_result$$3 != undefined;
        if (v428) {
          var v425 = CryptoJS.AES;
          var v426 = {format:JsonFormatter};
          wordArrPlainText = v425.decrypt(JSCompiler_temp_const$$2, JSCompiler_inline_result$$3, v426);
          var v645 = CryptoJS.enc;
          var v427 = v645.Utf8;
          JSCompiler_inline_result$$1 = v427.stringify(wordArrPlainText);
        } else {
          JSCompiler_inline_result$$1 = undefined;
        }
      }
      setPreNote(strNoteId$$40, JSCompiler_inline_result$$1);
      var strNoteId$$inline_48 = strNoteId$$40;
      closeDialogsBoxes(strNoteId$$inline_48);
      hideEditButton(strNoteId$$inline_48);
      hideUnlockButton(strNoteId$$inline_48);
      var v646 = strNoteId$$inline_48 + "_";
      var v429 = v646 + "button_delete";
      var buttonDelete$$inline_97 = document.getElementById(v429);
      var v430 = buttonDelete$$inline_97.style;
      v430.display = "inline";

      JAM.stopProfile('read');
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
      var v647 = strNoteId$$42 + "_";
      var v431 = v647 + "edit_dialog";
      var div$$inline_51 = document.getElementById(v431);
      var v432 = div$$inline_51.style;
      v432.display = "block";
      return;
    }
    return v7;
  }
  function createEditDialogOkHandler(strServerPath$$5, strNoteId$$43) {
    function v8() {
      JAM.startProfile('edit');

      var v648 = strNoteId$$43 + "_";
      var v433 = v648 + "input_new_password";
      var inputNewPassword$$inline_54 = document.getElementById(v433);
      strNewPass = destructiveRead(inputNewPassword$$inline_54);
      var v649 = strNoteId$$43 + "_";
      var v434 = v649 + "input_new_password_retype";
      var inputNote$$inline_57 = document.getElementById(v434);
      strNewPassRetype = destructiveRead(inputNote$$inline_57);
      var v650 = strNewPass.length;
      var v439 = v650 == 0;
      if (v439) {
        alert("Must have non-empty password");
      } else {
        var v438 = strNewPass != strNewPassRetype;
        if (v438) {
          alert("Passwords do not match");
        } else {
          var JSCompiler_inline_result$$4;
          var v651 = strNoteId$$43 + "_";
          var v435 = v651 + "input_new_note";
          var inputNote$$inline_60 = document.getElementById(v435);
          JSCompiler_inline_result$$4 = destructiveRead(inputNote$$inline_60);
          var callbackSaveHandler$$inline_66 = createSaveHandler(strServerPath$$5, strNoteId$$43);
          var JSCompiler_inline_result$$78;
          JSCompiler_inline_label_encryptText_101: {
            var strPasswd$$inline_100 = strNewPass;
            if (strPasswd$$inline_100) {
              var v652 = CryptoJS.enc;
              var v436 = v652.Utf8;
              wordArrPlainText = v436.parse(JSCompiler_inline_result$$4);
              var v653 = CryptoJS.AES;
              var v654 = {format:JsonFormatter};
              var v437 = v653.encrypt(wordArrPlainText, strPasswd$$inline_100, v654);
              JSCompiler_inline_result$$78 = v437.toString();
              break JSCompiler_inline_label_encryptText_101;
            } else {
              JSCompiler_inline_result$$78 = undefined;
              break JSCompiler_inline_label_encryptText_101;
            }
          }
          var strNoteId$$inline_103 = strNoteId$$43;
          var strEncNote$$inline_104 = JSCompiler_inline_result$$78;
          var callbackSaveHandler$$inline_105 = callbackSaveHandler$$inline_66;
          strUrl = strServerPath$$5 + "SaveBlob.php";
          var arrData$$inline_106 = {};
          arrData$$inline_106["blobHandle"] = strNoteId$$inline_103;
          arrData$$inline_106["blob"] = strEncNote$$inline_104;
          strData = JSON.stringify(arrData$$inline_106);
          ajaxPost(strData, strUrl, callbackSaveHandler$$inline_105);
        }
      }
      return;

      JAM.stopProfile('edit');
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
      jsonObjResponse = JSON.parse(strResponse);
      var v443 = jsonObjResponse.bSuccess;
      if (v443) {
        var strVal$$inline_69 = jsonObjResponse.strBlob;
        var v655 = strNoteId$$45 + "_";
        var v440 = v655 + "pre_cipher_text";
        var preCipherText$$inline_70 = document.getElementById(v440);
        introspect(JAM.policy.p19) {
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
        var v656 = strNoteId$$inline_74 + "_";
        var v441 = v656 + "button_edit";
        var buttonEdit$$inline_109 = document.getElementById(v441);
        var v442 = buttonEdit$$inline_109.style;
        v442.display = "inline";
        hideUnlockButton(strNoteId$$inline_74);
        hideDeleteButton(strNoteId$$inline_74);
      }
      return;
    }
    return v10;
  }
  function createSaveHandler(strServerPath$$6, strNoteId$$46) {
    function v11(strResponse$$1) {
      jsonObjResponse = JSON.parse(strResponse$$1);
      var v445 = jsonObjResponse.bSuccess;
      if (v445) {
        var strNoteId$$inline_76 = strNoteId$$46;
        closeDialogsBoxes(strNoteId$$inline_76);
        hideEditButton(strNoteId$$inline_76);
        showUnlockButton(strNoteId$$inline_76);
        hideDeleteButton(strNoteId$$inline_76);
        var v444 = createFetchHandler(strNoteId$$46);
        fetch(strServerPath$$6, strNoteId$$46, v444);
      } else {
        alert("Error: note could not be saved.");
      }
      return;
    }
    return v11;
  }
  function createDeleteHandler(strServerPath$$7, strNoteId$$47) {
    function v12(strResponse$$2) {
      jsonObjResponse = JSON.parse(strResponse$$2);
      var v447 = jsonObjResponse.bSuccess;
      if (v447) {
        setPreNote(strNoteId$$47, "");
        var v446 = createFetchHandler(strNoteId$$47);
        fetch(strServerPath$$7, strNoteId$$47, v446);
      } else {
        alert("Failed to delete note.");
        closeDeleteDialog(strNoteId$$47);
      }
      return;
    }
    return v12;
  }
  function fetch(strServerPath$$8, strNoteId$$48, callbackFetchHandler) {
    var v657 = strServerPath$$8 + "FetchBlob.php";
    var v448 = v657 + "?blobHandle=";
    var v449 = encodeURIComponent(strNoteId$$48);
    var strUrl$$4 = v448 + v449;
    ajaxGet(strUrl$$4, callbackFetchHandler);
    return;
  }
  init(divParent, serverPath);
  var JsonFormatter = {stringify:v13, parse:v14};
  return;
}
function Clock(serverPath$$1, divParent$$10) {
  function init$$1(serverPath$$2, divParent$$11) {
    divParent$$11.className = "mwwidget:clock";
    var v450 = createDisplayTimeFunction(divParent$$11);
    setInterval(v450, 1E3);
    return;
  }
  function createDisplayTimeFunction(divParent$$12) {
    function v15() {
      var v451 = divParent$$12;
      var v658 = new Date;
      var v1126 = v658.toString();
      introspect(JAM.policy.p19) {
        v451.textContent = v1126;
      }
      arrSNoteDivs = getElementsByClass("mwwidget:snote");
      i = 0;
      var v659 = arrSNoteDivs.length;
      var v454 = i < v659;
      for (;v454;) {
        introspect(JAM.policy.p12) {
          var snoteDiv = arrSNoteDivs[i]
        }
        var strNoteId$$52 = snoteDiv.id;
        var v452 = strNoteId$$52 + "_";
        var strElemId$$1 = v452 + "pre_note";
        var preNote$$2 = document.getElementById(strElemId$$1);
        introspect(JAM.policy.p15) {
          var strNote$$1 = preNote$$2.textContent
        }
        var v453 = preNote$$2;
        var v1127 = strNote$$1.replace(/declined/gi, "accepted");
        introspect(JAM.policy.p19) {
          v453.textContent = v1127;
        }
        i = i + 1;
        var v660 = arrSNoteDivs.length;
        v454 = i < v660;
      }
      return;
    }
    return v15;
  }
  init$$1(serverPath$$1, divParent$$10);
  return;
}
var v455 = CryptoJS;
var v661 = !v455;
if (v661) {
  v455 = v47(Math);
}
var CryptoJS = v455;
v50();
v55(Math);
v59();
var v662 = CryptoJS.lib;
var v456 = v662.Cipher;
var v663 = !v456;
if (v663) {
  v92();
}
v98();
var v457 = document.getElementById("div1");
new SNote("", v457);
var v458 = document.getElementById("div2");
new Clock("", v458)

JAM.stopProfile('load');
