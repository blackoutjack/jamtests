
JAM.startProfile('load');
function v88() {
  function v87(a$$54, b$$34, d$$20, e$$34, f$$18, h$$15, i$$13, g$$11) {
    var l$$8 = this._nRounds;
    introspect(JAM.policy.p14) {
      var v89 = a$$54[b$$34]
    }
    var v90 = d$$20[0];
    var k$$6 = v89 ^ v90;
    var v391 = b$$34 + 1;
    introspect(JAM.policy.p14) {
      var v91 = a$$54[v391]
    }
    var v92 = d$$20[1];
    var m$$7 = v91 ^ v92;
    var v392 = b$$34 + 2;
    introspect(JAM.policy.p14) {
      var v93 = a$$54[v392]
    }
    var v94 = d$$20[2];
    var o$$6 = v93 ^ v94;
    var v393 = b$$34 + 3;
    introspect(JAM.policy.p14) {
      var v95 = a$$54[v393]
    }
    var v96 = d$$20[3];
    var n$$8 = v95 ^ v96;
    var p$$7 = 4;
    var r$$6 = 1;
    var v105 = r$$6 < l$$8;
    for (;v105;) {
      var v756 = k$$6 >>> 24;
      introspect(JAM.policy.p14) {
        var v659 = e$$34[v756]
      }
      var v834 = m$$7 >>> 16;
      var v757 = v834 & 255;
      introspect(JAM.policy.p14) {
        var v660 = f$$18[v757]
      }
      var v549 = v659 ^ v660;
      var v758 = o$$6 >>> 8;
      var v661 = v758 & 255;
      introspect(JAM.policy.p14) {
        var v550 = h$$15[v661]
      }
      var v394 = v549 ^ v550;
      var v551 = n$$8 & 255;
      introspect(JAM.policy.p14) {
        var v395 = i$$13[v551]
      }
      var v97 = v394 ^ v395;
      var v396 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p14) {
        var v98 = d$$20[v396]
      }
      var s$$8 = v97 ^ v98;
      var v759 = m$$7 >>> 24;
      introspect(JAM.policy.p14) {
        var v662 = e$$34[v759]
      }
      var v835 = o$$6 >>> 16;
      var v760 = v835 & 255;
      introspect(JAM.policy.p14) {
        var v663 = f$$18[v760]
      }
      var v552 = v662 ^ v663;
      var v761 = n$$8 >>> 8;
      var v664 = v761 & 255;
      introspect(JAM.policy.p14) {
        var v553 = h$$15[v664]
      }
      var v397 = v552 ^ v553;
      var v554 = k$$6 & 255;
      introspect(JAM.policy.p14) {
        var v398 = i$$13[v554]
      }
      var v99 = v397 ^ v398;
      var v399 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p14) {
        var v100 = d$$20[v399]
      }
      var u = v99 ^ v100;
      var v762 = o$$6 >>> 24;
      introspect(JAM.policy.p14) {
        var v665 = e$$34[v762]
      }
      var v836 = n$$8 >>> 16;
      var v763 = v836 & 255;
      introspect(JAM.policy.p14) {
        var v666 = f$$18[v763]
      }
      var v555 = v665 ^ v666;
      var v764 = k$$6 >>> 8;
      var v667 = v764 & 255;
      introspect(JAM.policy.p14) {
        var v556 = h$$15[v667]
      }
      var v400 = v555 ^ v556;
      var v557 = m$$7 & 255;
      introspect(JAM.policy.p14) {
        var v401 = i$$13[v557]
      }
      var v101 = v400 ^ v401;
      var v402 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p14) {
        var v102 = d$$20[v402]
      }
      var v = v101 ^ v102;
      var v765 = n$$8 >>> 24;
      introspect(JAM.policy.p14) {
        var v668 = e$$34[v765]
      }
      var v837 = k$$6 >>> 16;
      var v766 = v837 & 255;
      introspect(JAM.policy.p14) {
        var v669 = f$$18[v766]
      }
      var v558 = v668 ^ v669;
      var v767 = m$$7 >>> 8;
      var v670 = v767 & 255;
      introspect(JAM.policy.p14) {
        var v559 = h$$15[v670]
      }
      var v403 = v558 ^ v559;
      var v560 = o$$6 & 255;
      introspect(JAM.policy.p14) {
        var v404 = i$$13[v560]
      }
      var v103 = v403 ^ v404;
      var v405 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p14) {
        var v104 = d$$20[v405]
      }
      n$$8 = v103 ^ v104;
      k$$6 = s$$8;
      m$$7 = u;
      o$$6 = v;
      r$$6++;
      v105 = r$$6 < l$$8;
    }
    var v838 = k$$6 >>> 24;
    introspect(JAM.policy.p14) {
      var v768 = g$$11[v838]
    }
    var v671 = v768 << 24;
    var v894 = m$$7 >>> 16;
    var v839 = v894 & 255;
    introspect(JAM.policy.p14) {
      var v769 = g$$11[v839]
    }
    var v672 = v769 << 16;
    var v561 = v671 | v672;
    var v840 = o$$6 >>> 8;
    var v770 = v840 & 255;
    introspect(JAM.policy.p14) {
      var v673 = g$$11[v770]
    }
    var v562 = v673 << 8;
    var v406 = v561 | v562;
    var v563 = n$$8 & 255;
    introspect(JAM.policy.p14) {
      var v407 = g$$11[v563]
    }
    var v106 = v406 | v407;
    var v408 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p14) {
      var v107 = d$$20[v408]
    }
    s$$8 = v106 ^ v107;
    var v841 = m$$7 >>> 24;
    introspect(JAM.policy.p14) {
      var v771 = g$$11[v841]
    }
    var v674 = v771 << 24;
    var v895 = o$$6 >>> 16;
    var v842 = v895 & 255;
    introspect(JAM.policy.p14) {
      var v772 = g$$11[v842]
    }
    var v675 = v772 << 16;
    var v564 = v674 | v675;
    var v843 = n$$8 >>> 8;
    var v773 = v843 & 255;
    introspect(JAM.policy.p14) {
      var v676 = g$$11[v773]
    }
    var v565 = v676 << 8;
    var v409 = v564 | v565;
    var v566 = k$$6 & 255;
    introspect(JAM.policy.p14) {
      var v410 = g$$11[v566]
    }
    var v108 = v409 | v410;
    var v411 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p14) {
      var v109 = d$$20[v411]
    }
    u = v108 ^ v109;
    var v844 = o$$6 >>> 24;
    introspect(JAM.policy.p14) {
      var v774 = g$$11[v844]
    }
    var v677 = v774 << 24;
    var v896 = n$$8 >>> 16;
    var v845 = v896 & 255;
    introspect(JAM.policy.p14) {
      var v775 = g$$11[v845]
    }
    var v678 = v775 << 16;
    var v567 = v677 | v678;
    var v846 = k$$6 >>> 8;
    var v776 = v846 & 255;
    introspect(JAM.policy.p14) {
      var v679 = g$$11[v776]
    }
    var v568 = v679 << 8;
    var v412 = v567 | v568;
    var v569 = m$$7 & 255;
    introspect(JAM.policy.p14) {
      var v413 = g$$11[v569]
    }
    var v110 = v412 | v413;
    var v414 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p14) {
      var v111 = d$$20[v414]
    }
    v = v110 ^ v111;
    var v847 = n$$8 >>> 24;
    introspect(JAM.policy.p14) {
      var v777 = g$$11[v847]
    }
    var v680 = v777 << 24;
    var v897 = k$$6 >>> 16;
    var v848 = v897 & 255;
    introspect(JAM.policy.p14) {
      var v778 = g$$11[v848]
    }
    var v681 = v778 << 16;
    var v570 = v680 | v681;
    var v849 = m$$7 >>> 8;
    var v779 = v849 & 255;
    introspect(JAM.policy.p14) {
      var v682 = g$$11[v779]
    }
    var v571 = v682 << 8;
    var v415 = v570 | v571;
    var v572 = o$$6 & 255;
    introspect(JAM.policy.p14) {
      var v416 = g$$11[v572]
    }
    var v112 = v415 | v416;
    var v417 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p14) {
      var v113 = d$$20[v417]
    }
    n$$8 = v112 ^ v113;
    introspect(JAM.policy.p19) {
      a$$54[b$$34] = s$$8;
    }
    var v114 = b$$34 + 1;
    introspect(JAM.policy.p19) {
      a$$54[v114] = u;
    }
    var v115 = b$$34 + 2;
    introspect(JAM.policy.p19) {
      a$$54[v115] = v;
    }
    var v116 = b$$34 + 3;
    introspect(JAM.policy.p19) {
      a$$54[v116] = n$$8;
    }
    return;
  }
  function v86(c$$31, b$$33) {
    var v117 = b$$33 + 1;
    introspect(JAM.policy.p14) {
      var d$$19 = c$$31[v117]
    }
    var v118 = b$$33 + 1;
    var v418 = b$$33 + 3;
    JAM.set(c$$31, v118, JAM.get(c$$31, v418, JAM.policy.p20), JAM.policy.p20);
    var v119 = b$$33 + 3;
    JAM.set(c$$31, v119, d$$19, JAM.policy.p19);
    var v120 = this._invKeySchedule;
    JAM.call(this._doCryptBlock, this, [c$$31, b$$33, v120, k$$5, f$$17, g$$10, a$$52, r$$5]);
    var v121 = b$$33 + 1;
    introspect(JAM.policy.p14) {
      d$$19 = c$$31[v121];
    }
    var v122 = b$$33 + 1;
    var v419 = b$$33 + 3;
    JAM.set(c$$31, v122, JAM.get(c$$31, v419, JAM.policy.p20), JAM.policy.p20);
    var v123 = b$$33 + 3;
    JAM.set(c$$31, v123, d$$19, JAM.policy.p19);
    return;
  }
  function v85(a$$53, b$$32) {
    var v124 = this._keySchedule;
    JAM.call(this._doCryptBlock, this, [a$$53, b$$32, v124, o$$5, m$$6, s$$7, n$$7, l$$7]);
    return;
  }
  function v84() {
    var c$$30 = this._key;
    var b$$31 = c$$30.words;
    var v125 = c$$30.sigBytes;
    var d$$18 = v125 / 4;
    var v420 = this._nRounds = d$$18 + 6;
    var v126 = v420 + 1;
    c$$30 = 4 * v126;
    var i$$12 = this._keySchedule = [];
    var j$$6 = 0;
    var v131 = j$$6 < c$$30;
    for (;v131;) {
      var v130 = j$$6 < d$$18;
      if (v130) {
        introspect(JAM.policy.p14) {
          i$$12[j$$6] = b$$31[j$$6];
        }
      } else {
        var v127 = j$$6 - 1;
        introspect(JAM.policy.p14) {
          var h$$14 = i$$12[v127]
        }
        var v128;
        var v422 = j$$6 % d$$18;
        if (v422) {
          var v573 = 6 < d$$18;
          if (v573) {
            var v683 = j$$6 % d$$18;
            v573 = 4 == v683;
          }
          var v421 = v573;
          if (v421) {
            var v898 = h$$14 >>> 24;
            introspect(JAM.policy.p14) {
              var v850 = l$$7[v898]
            }
            var v780 = v850 << 24;
            var v933 = h$$14 >>> 16;
            var v899 = v933 & 255;
            introspect(JAM.policy.p14) {
              var v851 = l$$7[v899]
            }
            var v781 = v851 << 16;
            var v684 = v780 | v781;
            var v900 = h$$14 >>> 8;
            var v852 = v900 & 255;
            introspect(JAM.policy.p14) {
              var v782 = l$$7[v852]
            }
            var v685 = v782 << 8;
            var v574 = v684 | v685;
            var v686 = h$$14 & 255;
            introspect(JAM.policy.p14) {
              var v575 = l$$7[v686]
            }
            v421 = h$$14 = v574 | v575;
          }
          v128 = v421;
        } else {
          var v687 = h$$14 << 8;
          var v688 = h$$14 >>> 24;
          h$$14 = v687 | v688;
          var v934 = h$$14 >>> 24;
          introspect(JAM.policy.p14) {
            var v901 = l$$7[v934]
          }
          var v853 = v901 << 24;
          var v953 = h$$14 >>> 16;
          var v935 = v953 & 255;
          introspect(JAM.policy.p14) {
            var v902 = l$$7[v935]
          }
          var v854 = v902 << 16;
          var v783 = v853 | v854;
          var v936 = h$$14 >>> 8;
          var v903 = v936 & 255;
          introspect(JAM.policy.p14) {
            var v855 = l$$7[v903]
          }
          var v784 = v855 << 8;
          var v689 = v783 | v784;
          var v785 = h$$14 & 255;
          introspect(JAM.policy.p14) {
            var v690 = l$$7[v785]
          }
          h$$14 = v689 | v690;
          var v904 = j$$6 / d$$18;
          var v856 = v904 | 0;
          introspect(JAM.policy.p14) {
            var v786 = e$$32[v856]
          }
          var v691 = v786 << 24;
          v128 = h$$14 = h$$14 ^ v691;
        }
        v128;
        var v423 = j$$6 - d$$18;
        introspect(JAM.policy.p14) {
          var v129 = i$$12[v423]
        }
        i$$12[j$$6] = v129 ^ h$$14;
      }
      j$$6++;
      v131 = j$$6 < c$$30;
    }
    b$$31 = this._invKeySchedule = [];
    d$$18 = 0;
    var v132 = d$$18 < c$$30;
    for (;v132;) {
      j$$6 = c$$30 - d$$18;
      var v576;
      var v693 = d$$18 % 4;
      if (v693) {
        introspect(JAM.policy.p14) {
          v576 = i$$12[j$$6];
        }
      } else {
        var v692 = j$$6 - 4;
        introspect(JAM.policy.p14) {
          v576 = i$$12[v692];
        }
      }
      h$$14 = v576;
      var v424;
      var v694 = 4 > d$$18;
      var v787 = !v694;
      if (v787) {
        v694 = 4 >= j$$6;
      }
      var v579 = v694;
      if (v579) {
        v424 = h$$14;
      } else {
        var v905 = h$$14 >>> 24;
        introspect(JAM.policy.p14) {
          var v857 = l$$7[v905]
        }
        introspect(JAM.policy.p14) {
          var v788 = k$$5[v857]
        }
        var v937 = h$$14 >>> 16;
        var v906 = v937 & 255;
        introspect(JAM.policy.p14) {
          var v858 = l$$7[v906]
        }
        introspect(JAM.policy.p14) {
          var v789 = f$$17[v858]
        }
        var v695 = v788 ^ v789;
        var v907 = h$$14 >>> 8;
        var v859 = v907 & 255;
        introspect(JAM.policy.p14) {
          var v790 = l$$7[v859]
        }
        introspect(JAM.policy.p14) {
          var v696 = g$$10[v790]
        }
        var v577 = v695 ^ v696;
        var v791 = h$$14 & 255;
        introspect(JAM.policy.p14) {
          var v697 = l$$7[v791]
        }
        introspect(JAM.policy.p14) {
          var v578 = a$$52[v697]
        }
        v424 = v577 ^ v578;
      }
      b$$31[d$$18] = v424;
      d$$18++;
      v132 = d$$18 < c$$30;
    }
    return;
  }
  function v83() {
    var c$$29 = [];
    var b$$30 = 0;
    var v134 = 256 > b$$30;
    for (;v134;) {
      var v133;
      var v426 = 128 > b$$30;
      if (v426) {
        v133 = b$$30 << 1;
      } else {
        var v425 = b$$30 << 1;
        v133 = v425 ^ 283;
      }
      c$$29[b$$30] = v133;
      b$$30++;
      v134 = 256 > b$$30;
    }
    var d$$17 = 0;
    var e$$33 = 0;
    b$$30 = 0;
    var v155 = 256 > b$$30;
    for (;v155;) {
      var v698 = e$$33 << 1;
      var v580 = e$$33 ^ v698;
      var v581 = e$$33 << 2;
      var v427 = v580 ^ v581;
      var v428 = e$$33 << 3;
      var v135 = v427 ^ v428;
      var v136 = e$$33 << 4;
      var j$$5 = v135 ^ v136;
      var v429 = j$$5 >>> 8;
      var v430 = j$$5 & 255;
      var v137 = v429 ^ v430;
      j$$5 = v137 ^ 99;
      l$$7[d$$17] = j$$5;
      r$$5[j$$5] = d$$17;
      introspect(JAM.policy.p14) {
        var i$$11 = c$$29[d$$17]
      }
      introspect(JAM.policy.p14) {
        var h$$13 = c$$29[i$$11]
      }
      introspect(JAM.policy.p14) {
        var p$$6 = c$$29[h$$13]
      }
      introspect(JAM.policy.p14) {
        var v431 = c$$29[j$$5]
      }
      var v138 = 257 * v431;
      var v139 = 16843008 * j$$5;
      var t = v138 ^ v139;
      var v140 = t << 24;
      var v141 = t >>> 8;
      o$$5[d$$17] = v140 | v141;
      var v142 = t << 16;
      var v143 = t >>> 16;
      m$$6[d$$17] = v142 | v143;
      var v144 = t << 8;
      var v145 = t >>> 24;
      s$$7[d$$17] = v144 | v145;
      n$$7[d$$17] = t;
      var v582 = 16843009 * p$$6;
      var v583 = 65537 * h$$13;
      var v432 = v582 ^ v583;
      var v433 = 257 * i$$11;
      var v146 = v432 ^ v433;
      var v147 = 16843008 * d$$17;
      t = v146 ^ v147;
      var v148 = t << 24;
      var v149 = t >>> 8;
      k$$5[j$$5] = v148 | v149;
      var v150 = t << 16;
      var v151 = t >>> 16;
      f$$17[j$$5] = v150 | v151;
      var v152 = t << 8;
      var v153 = t >>> 24;
      g$$10[j$$5] = v152 | v153;
      a$$52[j$$5] = t;
      var v154;
      if (d$$17) {
        var v860 = p$$6 ^ i$$11;
        introspect(JAM.policy.p14) {
          var v792 = c$$29[v860]
        }
        introspect(JAM.policy.p14) {
          var v699 = c$$29[v792]
        }
        introspect(JAM.policy.p14) {
          var v584 = c$$29[v699]
        }
        d$$17 = i$$11 ^ v584;
        introspect(JAM.policy.p14) {
          var v793 = c$$29[e$$33]
        }
        introspect(JAM.policy.p14) {
          var v700 = c$$29[v793]
        }
        v154 = e$$33 = e$$33 ^ v700;
      } else {
        v154 = d$$17 = e$$33 = 1;
      }
      v154;
      b$$30++;
      v155 = 256 > b$$30;
    }
    return;
  }
  var p$$5 = CryptoJS;
  var v156 = p$$5.lib;
  var h$$12 = v156.BlockCipher;
  var i$$10 = p$$5.algo;
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
  v83();
  var e$$32 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
  var v157 = i$$10;
  var v434 = {_doReset:v84, encryptBlock:v85, decryptBlock:v86, _doCryptBlock:v87, keySize:8};
  var v973 = JAM.call(h$$12.extend, h$$12, [v434]);
  i$$10 = v157.AES = v973;
  var v158 = p$$5;
  var v974 = JAM.call(h$$12._createHelper, h$$12, [i$$10]);
  v158.AES = v974;
  return;
}
function v82(p$$4) {
  function v81(a$$51, c$$28, f$$16, j$$4) {
    var v159 = this.cfg;
    j$$4 = JAM.call(v159.extend, v159, [j$$4]);
    var v160 = j$$4.format;
    c$$28 = JAM.call(this._parse, this, [c$$28, v160]);
    var v161 = j$$4.kdf;
    var v162 = a$$51.keySize;
    var v163 = a$$51.ivSize;
    var v164 = c$$28.salt;
    f$$16 = JAM.call(v161.compute, v161, [f$$16, v162, v163, v164]);
    j$$4.iv = f$$16.iv;
    var v165 = e$$24.decrypt;
    var v166 = f$$16.key;
    return JAM.call(v165.call, v165, [this, a$$51, c$$28, v166, j$$4]);
  }
  function v80(a$$50, c$$27, f$$15, j$$3) {
    var v167 = this.cfg;
    j$$3 = JAM.call(v167.extend, v167, [j$$3]);
    var v168 = j$$3.kdf;
    var v169 = a$$50.keySize;
    var v170 = a$$50.ivSize;
    f$$15 = JAM.call(v168.compute, v168, [f$$15, v169, v170]);
    j$$3.iv = f$$15.iv;
    var v171 = e$$24.encrypt;
    var v172 = f$$15.key;
    a$$50 = JAM.call(v171.call, v171, [this, a$$50, c$$27, v172, j$$3]);
    JAM.call(a$$50.mixIn, a$$50, [f$$15]);
    return a$$50;
  }
  function v79(b$$29, c$$26, e$$31, f$$14) {
    var v435 = !f$$14;
    if (v435) {
      f$$14 = JAM.call(r$$4.random, r$$4, [8]);
    }
    var v585 = c$$26 + e$$31;
    var v436 = {keySize:v585};
    var v173 = JAM.call(s$$6.create, s$$6, [v436]);
    b$$29 = JAM.call(v173.compute, v173, [b$$29, f$$14]);
    var v437 = b$$29.words;
    var v174 = v437.slice(c$$26);
    var v175 = 4 * e$$31;
    e$$31 = JAM.call(r$$4.create, r$$4, [v174, v175]);
    b$$29.sigBytes = 4 * c$$26;
    var v176 = {key:b$$29, iv:e$$31, salt:f$$14};
    return JAM.call(a$$30.create, a$$30, [v176]);
  }
  function v78(a$$49, c$$25) {
    var v177;
    var v586 = typeof a$$49;
    var v438 = "string" == v586;
    if (v438) {
      v177 = JAM.call(c$$25.parse, c$$25, [a$$49]);
    } else {
      v177 = a$$49;
    }
    return v177;
  }
  function v77(a$$48, c$$24, e$$30, f$$13) {
    var v178 = this.cfg;
    f$$13 = JAM.call(v178.extend, v178, [f$$13]);
    var v179 = f$$13.format;
    c$$24 = JAM.call(this._parse, this, [c$$24, v179]);
    var v180 = JAM.call(a$$48.createDecryptor, a$$48, [e$$30, f$$13]);
    var v181 = c$$24.ciphertext;
    return JAM.call(v180.finalize, v180, [v181]);
  }
  function v76(b$$28, d$$16, c$$23, e$$29) {
    var v182 = this.cfg;
    e$$29 = JAM.call(v182.extend, v182, [e$$29]);
    var f$$12 = JAM.call(b$$28.createEncryptor, b$$28, [c$$23, e$$29]);
    d$$16 = JAM.call(f$$12.finalize, f$$12, [d$$16]);
    f$$12 = f$$12.cfg;
    var v439 = f$$12.iv;
    var v440 = f$$12.mode;
    var v441 = f$$12.padding;
    var v442 = b$$28.blockSize;
    var v443 = e$$29.format;
    var v183 = {ciphertext:d$$16, key:c$$23, iv:v439, algorithm:b$$28, mode:v440, padding:v441, blockSize:v442, formatter:v443};
    return JAM.call(a$$30.create, a$$30, [v183]);
  }
  function v75(b$$27) {
    b$$27 = JAM.call(m$$5.parse, m$$5, [b$$27]);
    var d$$15 = b$$27.words;
    var v587 = d$$15[0];
    var v444 = 1398893684 == v587;
    if (v444) {
      var v588 = d$$15[1];
      v444 = 1701076831 == v588;
    }
    var v185 = v444;
    if (v185) {
      var v184 = d$$15.slice(2, 4);
      var c$$22 = JAM.call(r$$4.create, r$$4, [v184]);
      d$$15.splice(0, 4);
      var v445 = b$$27.sigBytes;
      b$$27.sigBytes = v445 - 16;
    }
    var v186 = {ciphertext:b$$27, salt:c$$22};
    return JAM.call(a$$30.create, a$$30, [v186]);
  }
  function v74(a$$47) {
    var d$$14 = a$$47.ciphertext;
    a$$47 = a$$47.salt;
    var v446;
    if (a$$47) {
      var v794 = [1398893684, 1701076831];
      var v701 = JAM.call(r$$4.create, r$$4, [v794]);
      var v589 = JAM.call(v701.concat, v701, [a$$47]);
      v446 = JAM.call(v589.concat, v589, [d$$14]);
    } else {
      v446 = d$$14;
    }
    var v187 = v446;
    d$$14 = JAM.call(v187.toString, v187, [m$$5]);
    return d$$14 = d$$14.replace(/(.{64})/g, "$1\n");
  }
  function v73(a$$46) {
    var v447 = a$$46;
    var v590 = !v447;
    if (v590) {
      v447 = this.formatter;
    }
    var v188 = v447;
    return JAM.call(v188.stringify, v188, [this]);
  }
  function v72(a$$45) {
    JAM.call(this.mixIn, this, [a$$45]);
    return;
  }
  function v71() {
    var v189 = this.cfg;
    var b$$26 = v189.padding;
    var v448 = this._xformMode;
    var v449 = this._ENC_XFORM_MODE;
    var v193 = v448 == v449;
    if (v193) {
      var v190 = this._data;
      var v191 = this.blockSize;
      JAM.call(b$$26.pad, b$$26, [v190, v191]);
      var v192 = !0;
      var a$$44 = JAM.call(this._process, this, [v192]);
    } else {
      var v450 = !0;
      a$$44 = JAM.call(this._process, this, [v450]);
      JAM.call(b$$26.unpad, b$$26, [a$$44]);
    }
    return a$$44;
  }
  function v70(b$$25, a$$43) {
    var v194 = this._mode;
    JAM.call(v194.processBlock, v194, [b$$25, a$$43]);
    return;
  }
  function v69() {
    var v195 = n$$6.reset;
    JAM.call(v195.call, v195, [this]);
    var b$$24 = this.cfg;
    var a$$42 = b$$24.iv;
    b$$24 = b$$24.mode;
    var v451 = this._xformMode;
    var v452 = this._ENC_XFORM_MODE;
    var v196 = v451 == v452;
    if (v196) {
      var c$$21 = b$$24.createEncryptor
    } else {
      c$$21 = b$$24.createDecryptor;
      this._minBufferSize = 1;
    }
    var v453 = a$$42;
    if (v453) {
      v453 = a$$42.words;
    }
    var v197 = v453;
    var v975 = JAM.call(c$$21.call, c$$21, [b$$24, this, v197]);
    this._mode = v975;
    return;
  }
  function v68(b$$23) {
    var v454 = b$$23.sigBytes;
    var v702 = b$$23.words;
    var v861 = b$$23.sigBytes;
    var v795 = v861 - 1;
    var v703 = v795 >>> 2;
    introspect(JAM.policy.p14) {
      var v591 = v702[v703]
    }
    var v455 = v591 & 255;
    b$$23.sigBytes = v454 - v455;
    return;
  }
  function v67(b$$22, a$$41) {
    var c$$20 = 4 * a$$41;
    var v456 = b$$22.sigBytes;
    var v198 = v456 % c$$20;
    c$$20 = c$$20 - v198;
    var v592 = c$$20 << 24;
    var v593 = c$$20 << 16;
    var v457 = v592 | v593;
    var v458 = c$$20 << 8;
    var v199 = v457 | v458;
    var e$$28 = v199 | c$$20;
    var f$$11 = [];
    var g$$9 = 0;
    var v200 = g$$9 < c$$20;
    for (;v200;) {
      f$$11.push(e$$28);
      g$$9 = g$$9 + 4;
      v200 = g$$9 < c$$20;
    }
    c$$20 = JAM.call(r$$4.create, r$$4, [f$$11, c$$20]);
    JAM.call(b$$22.concat, b$$22, [c$$20]);
    return;
  }
  function v66() {
    function v65(a$$40, d$$13) {
      var c$$19 = this._cipher;
      var e$$27 = c$$19.blockSize;
      var v201 = d$$13 + e$$27;
      var f$$10 = a$$40.slice(d$$13, v201);
      JAM.call(c$$19.decryptBlock, c$$19, [a$$40, d$$13]);
      b$$20.call(this, a$$40, d$$13, e$$27);
      this._prevBlock = f$$10;
      return;
    }
    function v64(a$$39, d$$12) {
      var c$$18 = this._cipher;
      var e$$26 = c$$18.blockSize;
      b$$20.call(this, a$$39, d$$12, e$$26);
      JAM.call(c$$18.encryptBlock, c$$18, [a$$39, d$$12]);
      var v202 = d$$12 + e$$26;
      var v976 = a$$39.slice(d$$12, v202);
      this._prevBlock = v976;
      return;
    }
    function b$$20(b$$21, a$$38, d$$11) {
      var c$$17 = this._iv;
      var v203;
      if (c$$17) {
        v203 = this._iv = p$$4;
      } else {
        v203 = c$$17 = this._prevBlock;
      }
      v203;
      var e$$25 = 0;
      var v205 = e$$25 < d$$11;
      for (;v205;) {
        var v204 = a$$38 + e$$25;
        introspect(JAM.policy.p14) {
          var v594 = b$$21[v204]
        }
        introspect(JAM.policy.p14) {
          var v595 = c$$17[e$$25]
        }
        introspect(JAM.policy.p19) {
          b$$21[v204] = v594 ^ v595;
        }
        e$$25++;
        v205 = e$$25 < d$$11;
      }
      return;
    }
    var a$$37 = f$$9.extend();
    var v206 = a$$37;
    var v459 = {processBlock:v64};
    var v977 = JAM.call(a$$37.extend, a$$37, [v459]);
    v206.Encryptor = v977;
    var v207 = a$$37;
    var v460 = {processBlock:v65};
    var v978 = JAM.call(a$$37.extend, a$$37, [v460]);
    v207.Decryptor = v978;
    return a$$37;
  }
  function v63(b$$19, a$$36) {
    this._cipher = b$$19;
    this._iv = a$$36;
    return;
  }
  function v62(b$$18, a$$35) {
    var v208 = this.Decryptor;
    return JAM.call(v208.create, v208, [b$$18, a$$35]);
  }
  function v61(b$$17, a$$34) {
    var v209 = this.Encryptor;
    return JAM.call(v209.create, v209, [b$$17, a$$34]);
  }
  function v60() {
    var v210 = !0;
    return JAM.call(this._process, this, [v210]);
  }
  function v59() {
    function v58(b$$16) {
      function v57(a$$33, q$$3, j$$2) {
        var v461;
        var v704 = typeof q$$3;
        var v596 = "string" == v704;
        if (v596) {
          v461 = c$$16;
        } else {
          v461 = e$$24;
        }
        var v211 = v461;
        return JAM.call(v211.decrypt, v211, [b$$16, a$$33, q$$3, j$$2]);
      }
      function v56(a$$32, q$$2, j$$1) {
        var v462;
        var v705 = typeof q$$2;
        var v597 = "string" == v705;
        if (v597) {
          v462 = c$$16;
        } else {
          v462 = e$$24;
        }
        var v212 = v462;
        return JAM.call(v212.encrypt, v212, [b$$16, a$$32, q$$2, j$$1]);
      }
      return{encrypt:v56, decrypt:v57};
    }
    return v58;
  }
  function v55(b$$15) {
    if (b$$15) {
      JAM.call(this._append, this, [b$$15]);
    }
    return this._doFinalize();
  }
  function v54(b$$14) {
    JAM.call(this._append, this, [b$$14]);
    return this._process();
  }
  function v53() {
    var v213 = o$$4.reset;
    JAM.call(v213.call, v213, [this]);
    this._doReset();
    return;
  }
  function v52(b$$13, d$$10, a$$31) {
    var v214 = this.cfg;
    var v979 = JAM.call(v214.extend, v214, [a$$31]);
    this.cfg = v979;
    this._xformMode = b$$13;
    this._key = d$$10;
    this.reset();
    return;
  }
  function v51(b$$12, d$$9) {
    var v215 = this._DEC_XFORM_MODE;
    return JAM.call(this.create, this, [v215, b$$12, d$$9]);
  }
  function v50(b$$11, d$$8) {
    var v216 = this._ENC_XFORM_MODE;
    return JAM.call(this.create, this, [v216, b$$11, d$$8]);
  }
  var h$$11 = CryptoJS;
  var i$$9 = h$$11.lib;
  var l$$6 = i$$9.Base;
  var r$$4 = i$$9.WordArray;
  var o$$4 = i$$9.BufferedBlockAlgorithm;
  var v217 = h$$11.enc;
  var m$$5 = v217.Base64;
  var v218 = h$$11.algo;
  var s$$6 = v218.EvpKDF;
  var v219 = i$$9;
  var v598 = l$$6.extend();
  var v599 = v59();
  var v463 = {cfg:v598, createEncryptor:v50, createDecryptor:v51, init:v52, reset:v53, process:v54, finalize:v55, keySize:4, ivSize:4, _ENC_XFORM_MODE:1, _DEC_XFORM_MODE:2, _createHelper:v599};
  var v980 = JAM.call(o$$4.extend, o$$4, [v463]);
  var n$$6 = v219.Cipher = v980;
  var v220 = i$$9;
  var v464 = {_doFinalize:v60, blockSize:1};
  var v981 = JAM.call(n$$6.extend, n$$6, [v464]);
  v220.StreamCipher = v981;
  var k$$4 = h$$11.mode = {};
  var v221 = i$$9;
  var v465 = {createEncryptor:v61, createDecryptor:v62, init:v63};
  var v982 = JAM.call(l$$6.extend, l$$6, [v465]);
  var f$$9 = v221.BlockCipherMode = v982;
  var v222 = k$$4;
  var v983 = v66();
  k$$4 = v222.CBC = v983;
  var v223 = h$$11.pad = {};
  var g$$8 = v223.Pkcs7 = {pad:v67, unpad:v68};
  var v224 = i$$9;
  var v706 = n$$6.cfg;
  var v707 = {mode:k$$4, padding:g$$8};
  var v600 = JAM.call(v706.extend, v706, [v707]);
  var v466 = {cfg:v600, reset:v69, _doProcessBlock:v70, _doFinalize:v71, blockSize:4};
  var v984 = JAM.call(n$$6.extend, n$$6, [v466]);
  v224.BlockCipher = v984;
  var v225 = i$$9;
  var v467 = {init:v72, toString:v73};
  var v985 = JAM.call(l$$6.extend, l$$6, [v467]);
  var a$$30 = v225.CipherParams = v985;
  var v226 = h$$11.format = {};
  k$$4 = v226.OpenSSL = {stringify:v74, parse:v75};
  var v227 = i$$9;
  var v708 = {format:k$$4};
  var v601 = JAM.call(l$$6.extend, l$$6, [v708]);
  var v468 = {cfg:v601, encrypt:v76, decrypt:v77, _parse:v78};
  var v986 = JAM.call(l$$6.extend, l$$6, [v468]);
  var e$$24 = v227.SerializableCipher = v986;
  var v228 = h$$11.kdf = {};
  h$$11 = v228.OpenSSL = {compute:v79};
  var v229 = i$$9;
  var v709 = e$$24.cfg;
  var v710 = {kdf:h$$11};
  var v602 = JAM.call(v709.extend, v709, [v710]);
  var v469 = {cfg:v602, encrypt:v80, decrypt:v81};
  var v987 = JAM.call(e$$24.extend, e$$24, [v469]);
  var c$$16 = v229.PasswordBasedCipher = v987;
  return;
}
function v49() {
  function v48(i$$8, l$$5, h$$10) {
    var v230 = JAM.call(r$$3.create, r$$3, [h$$10]);
    return JAM.call(v230.compute, v230, [i$$8, l$$5]);
  }
  function v47(i$$7, m$$4) {
    var h$$9 = this.cfg;
    var v231 = h$$9.hasher;
    var n$$5 = v231.create();
    var k$$3 = l$$4.create();
    var f$$8 = k$$3.words;
    var g$$7 = h$$9.keySize;
    h$$9 = h$$9.iterations;
    var v470 = f$$8.length;
    var v234 = v470 < g$$7;
    for (;v234;) {
      if (a$$29) {
        JAM.call(n$$5.update, n$$5, [a$$29]);
      }
      var v232 = JAM.call(n$$5.update, n$$5, [i$$7]);
      var a$$29 = JAM.call(v232.finalize, v232, [m$$4]);
      n$$5.reset();
      var e$$23 = 1;
      var v233 = e$$23 < h$$9;
      for (;v233;) {
        a$$29 = JAM.call(n$$5.finalize, n$$5, [a$$29]);
        n$$5.reset();
        e$$23++;
        v233 = e$$23 < h$$9;
      }
      JAM.call(k$$3.concat, k$$3, [a$$29]);
      var v471 = f$$8.length;
      v234 = v471 < g$$7;
    }
    k$$3.sigBytes = 4 * g$$7;
    return k$$3;
  }
  function v46(i$$6) {
    var v235 = this.cfg;
    var v988 = JAM.call(v235.extend, v235, [i$$6]);
    this.cfg = v988;
    return;
  }
  var p$$3 = CryptoJS;
  var h$$8 = p$$3.lib;
  var i$$5 = h$$8.Base;
  var l$$4 = h$$8.WordArray;
  h$$8 = p$$3.algo;
  var v236 = h$$8;
  var v796 = h$$8.MD5;
  var v711 = {keySize:4, hasher:v796, iterations:1};
  var v603 = JAM.call(i$$5.extend, i$$5, [v711]);
  var v472 = {cfg:v603, init:v46, compute:v47};
  var v989 = JAM.call(i$$5.extend, i$$5, [v472]);
  var r$$3 = v236.EvpKDF = v989;
  p$$3.EvpKDF = v48;
  return;
}
function v45(p$$2) {
  function v44() {
    var f$$7 = this._data;
    var g$$6 = f$$7.words;
    var v237 = this._nDataBytes;
    var a$$28 = 8 * v237;
    var v238 = f$$7.sigBytes;
    var e$$22 = 8 * v238;
    var v239 = e$$22 >>> 5;
    introspect(JAM.policy.p14) {
      var v604 = g$$6[v239]
    }
    var v797 = e$$22 % 32;
    var v712 = 24 - v797;
    var v605 = 128 << v712;
    g$$6[v239] = v604 | v605;
    var v713 = e$$22 + 64;
    var v606 = v713 >>> 9;
    var v473 = v606 << 4;
    var v240 = v473 + 14;
    var v714 = a$$28 << 8;
    var v715 = a$$28 >>> 24;
    var v607 = v714 | v715;
    var v474 = v607 & 16711935;
    var v716 = a$$28 << 24;
    var v717 = a$$28 >>> 8;
    var v608 = v716 | v717;
    var v475 = v608 & 4278255360;
    g$$6[v240] = v474 | v475;
    var v476 = g$$6.length;
    var v241 = v476 + 1;
    f$$7.sigBytes = 4 * v241;
    this._process();
    var v242 = this._hash;
    f$$7 = v242.words;
    g$$6 = 0;
    var v243 = 4 > g$$6;
    for (;v243;) {
      introspect(JAM.policy.p14) {
        a$$28 = f$$7[g$$6];
      }
      var v718 = a$$28 << 8;
      var v719 = a$$28 >>> 24;
      var v609 = v718 | v719;
      var v477 = v609 & 16711935;
      var v720 = a$$28 << 24;
      var v721 = a$$28 >>> 8;
      var v610 = v720 | v721;
      var v478 = v610 & 4278255360;
      introspect(JAM.policy.p19) {
        f$$7[g$$6] = v477 | v478;
      }
      g$$6++;
      v243 = 4 > g$$6;
    }
    return;
  }
  function v43(f$$6, g$$5) {
    var a$$27 = 0;
    var v246 = 16 > a$$27;
    for (;v246;) {
      var e$$21 = g$$5 + a$$27;
      introspect(JAM.policy.p14) {
        var c$$15 = f$$6[e$$21]
      }
      var v611 = c$$15 << 8;
      var v612 = c$$15 >>> 24;
      var v479 = v611 | v612;
      var v244 = v479 & 16711935;
      var v613 = c$$15 << 24;
      var v614 = c$$15 >>> 8;
      var v480 = v613 | v614;
      var v245 = v480 & 4278255360;
      introspect(JAM.policy.p19) {
        f$$6[e$$21] = v244 | v245;
      }
      a$$27++;
      v246 = 16 > a$$27;
    }
    var v247 = this._hash;
    e$$21 = v247.words;
    c$$15 = e$$21[0];
    var b$$10 = e$$21[1];
    var d$$7 = e$$21[2];
    var q$$1 = e$$21[3];
    a$$27 = 0;
    var v249 = 64 > a$$27;
    for (;v249;) {
      var v248;
      var v482 = 16 > a$$27;
      if (v482) {
        var v862 = g$$5 + a$$27;
        introspect(JAM.policy.p14) {
          var v798 = f$$6[v862]
        }
        introspect(JAM.policy.p14) {
          var v799 = k$$2[a$$27]
        }
        c$$15 = h$$7(c$$15, b$$10, d$$7, q$$1, v798, 7, v799);
        var v908 = g$$5 + a$$27;
        var v863 = v908 + 1;
        introspect(JAM.policy.p14) {
          var v800 = f$$6[v863]
        }
        var v864 = a$$27 + 1;
        introspect(JAM.policy.p14) {
          var v801 = k$$2[v864]
        }
        q$$1 = h$$7(q$$1, c$$15, b$$10, d$$7, v800, 12, v801);
        var v865 = g$$5 + a$$27;
        var v802 = v865 + 2;
        introspect(JAM.policy.p14) {
          var v722 = f$$6[v802]
        }
        var v803 = a$$27 + 2;
        introspect(JAM.policy.p14) {
          var v723 = k$$2[v803]
        }
        d$$7 = h$$7(d$$7, q$$1, c$$15, b$$10, v722, 17, v723);
        var v804 = g$$5 + a$$27;
        var v724 = v804 + 3;
        introspect(JAM.policy.p14) {
          var v615 = f$$6[v724]
        }
        var v725 = a$$27 + 3;
        introspect(JAM.policy.p14) {
          var v616 = k$$2[v725]
        }
        v248 = b$$10 = h$$7(b$$10, d$$7, q$$1, c$$15, v615, 22, v616);
      } else {
        var v481;
        var v618 = 32 > a$$27;
        if (v618) {
          var v954 = a$$27 + 1;
          var v938 = v954 % 16;
          var v909 = g$$5 + v938;
          introspect(JAM.policy.p14) {
            var v866 = f$$6[v909]
          }
          introspect(JAM.policy.p14) {
            var v867 = k$$2[a$$27]
          }
          c$$15 = i$$4(c$$15, b$$10, d$$7, q$$1, v866, 5, v867);
          var v955 = a$$27 + 6;
          var v939 = v955 % 16;
          var v910 = g$$5 + v939;
          introspect(JAM.policy.p14) {
            var v868 = f$$6[v910]
          }
          var v911 = a$$27 + 1;
          introspect(JAM.policy.p14) {
            var v869 = k$$2[v911]
          }
          q$$1 = i$$4(q$$1, c$$15, b$$10, d$$7, v868, 9, v869);
          var v940 = a$$27 + 11;
          var v912 = v940 % 16;
          var v870 = g$$5 + v912;
          introspect(JAM.policy.p14) {
            var v805 = f$$6[v870]
          }
          var v871 = a$$27 + 2;
          introspect(JAM.policy.p14) {
            var v806 = k$$2[v871]
          }
          d$$7 = i$$4(d$$7, q$$1, c$$15, b$$10, v805, 14, v806);
          var v872 = a$$27 % 16;
          var v807 = g$$5 + v872;
          introspect(JAM.policy.p14) {
            var v726 = f$$6[v807]
          }
          var v808 = a$$27 + 3;
          introspect(JAM.policy.p14) {
            var v727 = k$$2[v808]
          }
          v481 = b$$10 = i$$4(b$$10, d$$7, q$$1, c$$15, v726, 20, v727);
        } else {
          var v617;
          var v728 = 48 > a$$27;
          if (v728) {
            var v970 = 3 * a$$27;
            var v964 = v970 + 5;
            var v956 = v964 % 16;
            var v941 = g$$5 + v956;
            introspect(JAM.policy.p14) {
              var v913 = f$$6[v941]
            }
            introspect(JAM.policy.p14) {
              var v914 = k$$2[a$$27]
            }
            c$$15 = l$$3(c$$15, b$$10, d$$7, q$$1, v913, 4, v914);
            var v971 = 3 * a$$27;
            var v965 = v971 + 8;
            var v957 = v965 % 16;
            var v942 = g$$5 + v957;
            introspect(JAM.policy.p14) {
              var v915 = f$$6[v942]
            }
            var v943 = a$$27 + 1;
            introspect(JAM.policy.p14) {
              var v916 = k$$2[v943]
            }
            q$$1 = l$$3(q$$1, c$$15, b$$10, d$$7, v915, 11, v916);
            var v966 = 3 * a$$27;
            var v958 = v966 + 11;
            var v944 = v958 % 16;
            var v917 = g$$5 + v944;
            introspect(JAM.policy.p14) {
              var v873 = f$$6[v917]
            }
            var v918 = a$$27 + 2;
            introspect(JAM.policy.p14) {
              var v874 = k$$2[v918]
            }
            d$$7 = l$$3(d$$7, q$$1, c$$15, b$$10, v873, 16, v874);
            var v959 = 3 * a$$27;
            var v945 = v959 + 14;
            var v919 = v945 % 16;
            var v875 = g$$5 + v919;
            introspect(JAM.policy.p14) {
              var v809 = f$$6[v875]
            }
            var v876 = a$$27 + 3;
            introspect(JAM.policy.p14) {
              var v810 = k$$2[v876]
            }
            v617 = b$$10 = l$$3(b$$10, d$$7, q$$1, c$$15, v809, 23, v810);
          } else {
            var v967 = 3 * a$$27;
            var v960 = v967 % 16;
            var v946 = g$$5 + v960;
            introspect(JAM.policy.p14) {
              var v920 = f$$6[v946]
            }
            introspect(JAM.policy.p14) {
              var v921 = k$$2[a$$27]
            }
            c$$15 = r$$2(c$$15, b$$10, d$$7, q$$1, v920, 6, v921);
            var v972 = 3 * a$$27;
            var v968 = v972 + 7;
            var v961 = v968 % 16;
            var v947 = g$$5 + v961;
            introspect(JAM.policy.p14) {
              var v922 = f$$6[v947]
            }
            var v948 = a$$27 + 1;
            introspect(JAM.policy.p14) {
              var v923 = k$$2[v948]
            }
            q$$1 = r$$2(q$$1, c$$15, b$$10, d$$7, v922, 10, v923);
            var v969 = 3 * a$$27;
            var v962 = v969 + 14;
            var v949 = v962 % 16;
            var v924 = g$$5 + v949;
            introspect(JAM.policy.p14) {
              var v877 = f$$6[v924]
            }
            var v925 = a$$27 + 2;
            introspect(JAM.policy.p14) {
              var v878 = k$$2[v925]
            }
            d$$7 = r$$2(d$$7, q$$1, c$$15, b$$10, v877, 15, v878);
            var v963 = 3 * a$$27;
            var v950 = v963 + 5;
            var v926 = v950 % 16;
            var v879 = g$$5 + v926;
            introspect(JAM.policy.p14) {
              var v811 = f$$6[v879]
            }
            var v880 = a$$27 + 3;
            introspect(JAM.policy.p14) {
              var v812 = k$$2[v880]
            }
            v617 = b$$10 = r$$2(b$$10, d$$7, q$$1, c$$15, v811, 21, v812);
          }
          v481 = v617;
        }
        v248 = v481;
      }
      v248;
      a$$27 = a$$27 + 4;
      v249 = 64 > a$$27;
    }
    var v483 = e$$21[0];
    var v250 = v483 + c$$15;
    e$$21[0] = v250 | 0;
    var v484 = e$$21[1];
    var v251 = v484 + b$$10;
    e$$21[1] = v251 | 0;
    var v485 = e$$21[2];
    var v252 = v485 + d$$7;
    e$$21[2] = v252 | 0;
    var v486 = e$$21[3];
    var v253 = v486 + q$$1;
    e$$21[3] = v253 | 0;
    return;
  }
  function v42() {
    var v254 = [1732584193, 4023233417, 2562383102, 271733878];
    var v990 = JAM.call(s$$5.create, s$$5, [v254]);
    this._hash = v990;
    return;
  }
  function v41() {
    var f$$5 = 0;
    var v256 = 64 > f$$5;
    for (;v256;) {
      var v255 = k$$2;
      var v813 = f$$5 + 1;
      var v729 = p$$2.sin(v813);
      var v619 = p$$2.abs(v729);
      var v487 = 4294967296 * v619;
      v255[f$$5] = v487 | 0;
      f$$5++;
      v256 = 64 > f$$5;
    }
    return;
  }
  function h$$7(f$$1, g$$1, a$$23, e$$17, c$$11, b$$6, d$$3) {
    var v730 = g$$1 & a$$23;
    var v814 = ~g$$1;
    var v731 = v814 & e$$17;
    var v620 = v730 | v731;
    var v488 = f$$1 + v620;
    var v257 = v488 + c$$11;
    f$$1 = v257 + d$$3;
    var v489 = f$$1 << b$$6;
    var v621 = 32 - b$$6;
    var v490 = f$$1 >>> v621;
    var v258 = v489 | v490;
    return v258 + g$$1;
  }
  function i$$4(f$$2, g$$2, a$$24, e$$18, c$$12, b$$7, d$$4) {
    var v732 = g$$2 & e$$18;
    var v815 = ~e$$18;
    var v733 = a$$24 & v815;
    var v622 = v732 | v733;
    var v491 = f$$2 + v622;
    var v259 = v491 + c$$12;
    f$$2 = v259 + d$$4;
    var v492 = f$$2 << b$$7;
    var v623 = 32 - b$$7;
    var v493 = f$$2 >>> v623;
    var v260 = v492 | v493;
    return v260 + g$$2;
  }
  function l$$3(f$$3, g$$3, a$$25, e$$19, c$$13, b$$8, d$$5) {
    var v734 = g$$3 ^ a$$25;
    var v624 = v734 ^ e$$19;
    var v494 = f$$3 + v624;
    var v261 = v494 + c$$13;
    f$$3 = v261 + d$$5;
    var v495 = f$$3 << b$$8;
    var v625 = 32 - b$$8;
    var v496 = f$$3 >>> v625;
    var v262 = v495 | v496;
    return v262 + g$$3;
  }
  function r$$2(f$$4, g$$4, a$$26, e$$20, c$$14, b$$9, d$$6) {
    var v816 = ~e$$20;
    var v735 = g$$4 | v816;
    var v626 = a$$26 ^ v735;
    var v497 = f$$4 + v626;
    var v263 = v497 + c$$14;
    f$$4 = v263 + d$$6;
    var v498 = f$$4 << b$$9;
    var v627 = 32 - b$$9;
    var v499 = f$$4 >>> v627;
    var v264 = v498 | v499;
    return v264 + g$$4;
  }
  var o$$3 = CryptoJS;
  var m$$3 = o$$3.lib;
  var s$$5 = m$$3.WordArray;
  m$$3 = m$$3.Hasher;
  var n$$4 = o$$3.algo;
  var k$$2 = [];
  v41();
  var v265 = n$$4;
  var v500 = {_doReset:v42, _doProcessBlock:v43, _doFinalize:v44};
  var v991 = JAM.call(m$$3.extend, m$$3, [v500]);
  n$$4 = v265.MD5 = v991;
  var v266 = o$$3;
  var v992 = JAM.call(m$$3._createHelper, m$$3, [n$$4]);
  v266.MD5 = v992;
  var v267 = o$$3;
  var v993 = JAM.call(m$$3._createHmacHelper, m$$3, [n$$4]);
  v267.HmacMD5 = v993;
  return;
}
function v40() {
  function v39(i$$3) {
    i$$3 = i$$3.replace(/\s/g, "");
    var l$$2 = i$$3.length;
    var r$$1 = this._map;
    var o$$2 = r$$1.charAt(64);
    if (o$$2) {
      o$$2 = i$$3.indexOf(o$$2);
      var v628 = -1 != o$$2;
      if (v628) {
        l$$2 = o$$2;
      }
    }
    o$$2 = [];
    var m$$2 = 0;
    var s$$4 = 0;
    var v274 = s$$4 < l$$2;
    for (;v274;) {
      var v273 = s$$4 % 4;
      if (v273) {
        var v629 = s$$4 - 1;
        var v501 = i$$3.charAt(v629);
        var v268 = r$$1.indexOf(v501);
        var v502 = s$$4 % 4;
        var v269 = 2 * v502;
        var n$$3 = v268 << v269;
        var v503 = i$$3.charAt(s$$4);
        var v270 = r$$1.indexOf(v503);
        var v630 = s$$4 % 4;
        var v504 = 2 * v630;
        var v271 = 6 - v504;
        var k$$1 = v270 >>> v271;
        var v272 = m$$2 >>> 2;
        introspect(JAM.policy.p14) {
          var v631 = o$$2[v272]
        }
        var v736 = n$$3 | k$$1;
        var v881 = m$$2 % 4;
        var v817 = 8 * v881;
        var v737 = 24 - v817;
        var v632 = v736 << v737;
        o$$2[v272] = v631 | v632;
        m$$2++;
      }
      s$$4++;
      v274 = s$$4 < l$$2;
    }
    return JAM.call(h$$5.create, h$$5, [o$$2, m$$2]);
  }
  function v38(i$$2) {
    var l$$1 = i$$2.words;
    var h$$6 = i$$2.sigBytes;
    var o$$1 = this._map;
    i$$2.clamp();
    i$$2 = [];
    var m$$1 = 0;
    var v279 = m$$1 < h$$6;
    for (;v279;) {
      var v882 = m$$1 >>> 2;
      introspect(JAM.policy.p14) {
        var v818 = l$$1[v882]
      }
      var v927 = m$$1 % 4;
      var v883 = 8 * v927;
      var v819 = 24 - v883;
      var v738 = v818 >>> v819;
      var v633 = v738 & 255;
      var v505 = v633 << 16;
      var v928 = m$$1 + 1;
      var v884 = v928 >>> 2;
      introspect(JAM.policy.p14) {
        var v820 = l$$1[v884]
      }
      var v951 = m$$1 + 1;
      var v929 = v951 % 4;
      var v885 = 8 * v929;
      var v821 = 24 - v885;
      var v739 = v820 >>> v821;
      var v634 = v739 & 255;
      var v506 = v634 << 8;
      var v275 = v505 | v506;
      var v822 = m$$1 + 2;
      var v740 = v822 >>> 2;
      introspect(JAM.policy.p14) {
        var v635 = l$$1[v740]
      }
      var v886 = m$$1 + 2;
      var v823 = v886 % 4;
      var v741 = 8 * v823;
      var v636 = 24 - v741;
      var v507 = v635 >>> v636;
      var v276 = v507 & 255;
      var s$$3 = v275 | v276;
      var n$$2 = 0;
      var v508 = 4 > n$$2;
      if (v508) {
        var v742 = .75 * n$$2;
        var v637 = m$$1 + v742;
        v508 = v637 < h$$6;
      }
      var v278 = v508;
      for (;v278;) {
        var v824 = 3 - n$$2;
        var v743 = 6 * v824;
        var v638 = s$$3 >>> v743;
        var v509 = v638 & 63;
        var v277 = o$$1.charAt(v509);
        i$$2.push(v277);
        n$$2++;
        var v510 = 4 > n$$2;
        if (v510) {
          var v744 = .75 * n$$2;
          var v639 = m$$1 + v744;
          v510 = v639 < h$$6;
        }
        v278 = v510;
      }
      m$$1 = m$$1 + 3;
      v279 = m$$1 < h$$6;
    }
    var v281 = l$$1 = o$$1.charAt(64);
    if (v281) {
      var v511 = i$$2.length;
      var v280 = v511 % 4;
      for (;v280;) {
        i$$2.push(l$$1);
        var v512 = i$$2.length;
        v280 = v512 % 4;
      }
    }
    return i$$2.join("");
  }
  var p$$1 = CryptoJS;
  var v282 = p$$1.lib;
  var h$$5 = v282.WordArray;
  var v283 = p$$1.enc;
  v283.Base64 = {stringify:v38, parse:v39, _map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};
  return;
}
function v37(p, h$$4) {
  function v36(a$$22) {
    function v35(e$$16, c$$10) {
      var v513 = g.HMAC;
      var v284 = JAM.call(v513.create, v513, [a$$22, c$$10]);
      return JAM.call(v284.finalize, v284, [e$$16]);
    }
    return v35;
  }
  function v34(a$$21) {
    function v33(e$$15, c$$9) {
      var v285 = JAM.call(a$$21.create, a$$21, [c$$9]);
      return JAM.call(v285.finalize, v285, [e$$15]);
    }
    return v33;
  }
  function v32() {
    var v286 = f.clone;
    var a$$20 = JAM.call(v286.call, v286, [this]);
    var v287 = this._hash;
    var v994 = v287.clone();
    a$$20._hash = v994;
    return a$$20;
  }
  function v31(a$$19) {
    if (a$$19) {
      JAM.call(this._append, this, [a$$19]);
    }
    this._doFinalize();
    return this._hash;
  }
  function v30(a$$18) {
    JAM.call(this._append, this, [a$$18]);
    this._process();
    return this;
  }
  function v29() {
    var v288 = f.reset;
    JAM.call(v288.call, v288, [this]);
    this._doReset();
    return;
  }
  function v28() {
    this.reset();
    return;
  }
  function v27() {
    var v289 = r.clone;
    var a$$17 = JAM.call(v289.call, v289, [this]);
    var v290 = this._data;
    var v995 = v290.clone();
    a$$17._data = v995;
    return a$$17;
  }
  function v26(a$$16) {
    var e$$14 = this._data;
    var c$$8 = e$$14.words;
    var b$$5 = e$$14.sigBytes;
    var d$$2 = this.blockSize;
    var v291 = 4 * d$$2;
    var q = b$$5 / v291;
    var v292;
    if (a$$16) {
      v292 = p.ceil(q);
    } else {
      var v640 = q | 0;
      var v641 = this._minBufferSize;
      var v514 = v640 - v641;
      v292 = p.max(v514, 0);
    }
    q = v292;
    a$$16 = q * d$$2;
    var v293 = 4 * a$$16;
    b$$5 = p.min(v293, b$$5);
    if (a$$16) {
      var j = 0;
      var v294 = j < a$$16;
      for (;v294;) {
        JAM.call(this._doProcessBlock, this, [c$$8, j]);
        j = j + d$$2;
        v294 = j < a$$16;
      }
      j = c$$8.splice(0, a$$16);
      var v515 = e$$14.sigBytes;
      e$$14.sigBytes = v515 - b$$5;
    }
    return JAM.call(o.create, o, [j, b$$5]);
  }
  function v25(a$$15) {
    var v516 = typeof a$$15;
    var v295 = "string" == v516;
    if (v295) {
      a$$15 = JAM.call(k.parse, k, [a$$15]);
    }
    var v296 = this._data;
    JAM.call(v296.concat, v296, [a$$15]);
    var v517 = this._nDataBytes;
    var v518 = a$$15.sigBytes;
    this._nDataBytes = v517 + v518;
    return;
  }
  function v24() {
    var v996 = o.create();
    this._data = v996;
    this._nDataBytes = 0;
    return;
  }
  function v23(a$$14) {
    var v519 = encodeURIComponent(a$$14);
    var v297 = unescape(v519);
    return JAM.call(n$$1.parse, n$$1, [v297]);
  }
  function v22(a$$13) {
    try {
      var v520 = JAM.call(n$$1.stringify, n$$1, [a$$13]);
      var v298 = escape(v520);
      return decodeURIComponent(v298);
    } catch (e$$13) {
      throw Error("Malformed UTF-8 data");
    }
    return;
  }
  function v21(a$$12) {
    var e$$12 = a$$12.length;
    var c$$7 = [];
    var b$$4 = 0;
    var v300 = b$$4 < e$$12;
    for (;v300;) {
      var v299 = b$$4 >>> 2;
      introspect(JAM.policy.p14) {
        var v642 = c$$7[v299]
      }
      var v825 = a$$12.charCodeAt(b$$4);
      var v745 = v825 & 255;
      var v887 = b$$4 % 4;
      var v826 = 8 * v887;
      var v746 = 24 - v826;
      var v643 = v745 << v746;
      c$$7[v299] = v642 | v643;
      b$$4++;
      v300 = b$$4 < e$$12;
    }
    return JAM.call(o.create, o, [c$$7, e$$12]);
  }
  function v20(a$$11) {
    var e$$11 = a$$11.words;
    a$$11 = a$$11.sigBytes;
    var c$$6 = [];
    var b$$3 = 0;
    var v302 = b$$3 < a$$11;
    for (;v302;) {
      var v827 = b$$3 >>> 2;
      introspect(JAM.policy.p14) {
        var v747 = e$$11[v827]
      }
      var v888 = b$$3 % 4;
      var v828 = 8 * v888;
      var v748 = 24 - v828;
      var v644 = v747 >>> v748;
      var v521 = v644 & 255;
      var v301 = String.fromCharCode(v521);
      c$$6.push(v301);
      b$$3++;
      v302 = b$$3 < a$$11;
    }
    return c$$6.join("");
  }
  function v19(a$$10) {
    var e$$10 = a$$10.length;
    var c$$5 = [];
    var b$$2 = 0;
    var v304 = b$$2 < e$$10;
    for (;v304;) {
      var v303 = b$$2 >>> 3;
      introspect(JAM.policy.p14) {
        var v645 = c$$5[v303]
      }
      var v829 = a$$10.substr(b$$2, 2);
      var v749 = parseInt(v829, 16);
      var v889 = b$$2 % 8;
      var v830 = 4 * v889;
      var v750 = 24 - v830;
      var v646 = v749 << v750;
      c$$5[v303] = v645 | v646;
      b$$2 = b$$2 + 2;
      v304 = b$$2 < e$$10;
    }
    var v305 = e$$10 / 2;
    return JAM.call(o.create, o, [c$$5, v305]);
  }
  function v18(a$$9) {
    var e$$9 = a$$9.words;
    a$$9 = a$$9.sigBytes;
    var c$$4 = [];
    var b$$1 = 0;
    var v309 = b$$1 < a$$9;
    for (;v309;) {
      var v647 = b$$1 >>> 2;
      introspect(JAM.policy.p14) {
        var v522 = e$$9[v647]
      }
      var v751 = b$$1 % 4;
      var v648 = 8 * v751;
      var v523 = 24 - v648;
      var v306 = v522 >>> v523;
      var d$$1 = v306 & 255;
      var v524 = d$$1 >>> 4;
      var v307 = JAM.call(v524.toString, v524, [16]);
      c$$4.push(v307);
      var v525 = d$$1 & 15;
      var v308 = JAM.call(v525.toString, v525, [16]);
      c$$4.push(v308);
      b$$1++;
      v309 = b$$1 < a$$9;
    }
    return c$$4.join("");
  }
  function v17(a$$8) {
    var e$$8 = [];
    var c$$3 = 0;
    var v311 = c$$3 < a$$8;
    for (;v311;) {
      var v649 = p.random();
      var v526 = 4294967296 * v649;
      var v310 = v526 | 0;
      e$$8.push(v310);
      c$$3 = c$$3 + 4;
      v311 = c$$3 < a$$8;
    }
    return JAM.call(o.create, o, [e$$8, a$$8]);
  }
  function v16() {
    var v312 = r.clone;
    var a$$7 = JAM.call(v312.call, v312, [this]);
    var v313 = this.words;
    var v997 = v313.slice(0);
    a$$7.words = v997;
    return a$$7;
  }
  function v15() {
    var a$$6 = this.words;
    var e$$7 = this.sigBytes;
    var v314 = e$$7 >>> 2;
    introspect(JAM.policy.p14) {
      var v650 = a$$6[v314]
    }
    var v890 = e$$7 % 4;
    var v831 = 8 * v890;
    var v752 = 32 - v831;
    var v651 = 4294967295 << v752;
    a$$6[v314] = v650 & v651;
    var v315 = e$$7 / 4;
    var v998 = p.ceil(v315);
    a$$6.length = v998;
    return;
  }
  function v14(a$$5) {
    var e$$6 = this.words;
    var c$$2 = a$$5.words;
    var b = this.sigBytes;
    a$$5 = a$$5.sigBytes;
    this.clamp();
    var v322 = b % 4;
    if (v322) {
      var d = 0;
      var v317 = d < a$$5;
      for (;v317;) {
        var v527 = b + d;
        var v316 = v527 >>> 2;
        introspect(JAM.policy.p14) {
          var v652 = e$$6[v316]
        }
        var v930 = d >>> 2;
        introspect(JAM.policy.p14) {
          var v891 = c$$2[v930]
        }
        var v952 = d % 4;
        var v931 = 8 * v952;
        var v892 = 24 - v931;
        var v832 = v891 >>> v892;
        var v753 = v832 & 255;
        var v932 = b + d;
        var v893 = v932 % 4;
        var v833 = 8 * v893;
        var v754 = 24 - v833;
        var v653 = v753 << v754;
        e$$6[v316] = v652 | v653;
        d++;
        v317 = d < a$$5;
      }
    } else {
      var v528 = c$$2.length;
      var v321 = 65535 < v528;
      if (v321) {
        d = 0;
        var v319 = d < a$$5;
        for (;v319;) {
          var v529 = b + d;
          var v318 = v529 >>> 2;
          var v530 = d >>> 2;
          introspect(JAM.policy.p14) {
            e$$6[v318] = c$$2[v530];
          }
          d = d + 4;
          v319 = d < a$$5;
        }
      } else {
        var v320 = e$$6.push;
        JAM.call(v320.apply, v320, [e$$6, c$$2]);
      }
    }
    var v531 = this.sigBytes;
    this.sigBytes = v531 + a$$5;
    return this;
  }
  function v13(a$$4) {
    var v323 = a$$4 || s$$2;
    return JAM.call(v323.stringify, v323, [this]);
  }
  function v12(a$$3, e$$5) {
    a$$3 = this.words = a$$3 || [];
    var v324;
    var v533 = e$$5 != h$$4;
    if (v533) {
      v324 = e$$5;
    } else {
      var v532 = a$$3.length;
      v324 = 4 * v532;
    }
    this.sigBytes = v324;
    return;
  }
  function v11() {
    function v10() {
      var v325 = this.$super;
      return JAM.call(v325.extend, v325, [this]);
    }
    function v9(a$$2) {
      var c$$1;
      for (c$$1 in a$$2) {
        var v326 = a$$2.hasOwnProperty(c$$1);
        if (v326) {
          JAM.set(this, c$$1, JAM.get(a$$2, c$$1, JAM.policy.p20), JAM.policy.p20);
        }
      }
      var v327 = a$$2.hasOwnProperty("toString");
      if (v327) {
        this.toString = a$$2.toString;
      }
      return;
    }
    function v8() {
      return;
    }
    function v7() {
      var a$$1 = this.extend();
      var v328 = a$$1.init;
      JAM.call(v328.apply, v328, [a$$1, arguments]);
      return a$$1;
    }
    function v6(e$$4) {
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
    return{extend:v6, create:v7, init:v8, mixIn:v9, clone:v10};
  }
  var i$$1 = {};
  var l = i$$1.lib = {};
  var v329 = l;
  var v999 = v11();
  var r = v329.Base = v999;
  var v330 = l;
  var v534 = {init:v12, toString:v13, concat:v14, clamp:v15, clone:v16, random:v17};
  var v1000 = JAM.call(r.extend, r, [v534]);
  var o = v330.WordArray = v1000;
  var m = i$$1.enc = {};
  var s$$2 = m.Hex = {stringify:v18, parse:v19};
  var n$$1 = m.Latin1 = {stringify:v20, parse:v21};
  var k = m.Utf8 = {stringify:v22, parse:v23};
  var v331 = l;
  var v535 = {reset:v24, _append:v25, _process:v26, clone:v27, _minBufferSize:0};
  var v1001 = JAM.call(r.extend, r, [v535]);
  var f = v331.BufferedBlockAlgorithm = v1001;
  var v332 = l;
  var v536 = {init:v28, reset:v29, update:v30, finalize:v31, clone:v32, blockSize:16, _createHelper:v34, _createHmacHelper:v36};
  var v1002 = JAM.call(f.extend, f, [v536]);
  v332.Hasher = v1002;
  var g = i$$1.algo = {};
  return i$$1;
}
function SNote(serverPath, divParent) {
  function init(divParent$$1, serverPath$$1) {
    m_serverPath = serverPath$$1;
    m_divInternal$$1 = divParent$$1;
    var serverPath$$inline_3 = serverPath$$1;
    var v333 = m_divInternal$$1.style;
    v333.border = "2px solid";
    var v334 = m_divInternal$$1.style;
    v334.backgroundColor = "#FFFFCC";
    m_preNote = document.createElement("pre");
    m_preNote.id = "note";
    m_preNote.className = "write-only non-editable";
    JAM.call(m_divInternal$$1.appendChild, m_divInternal$$1, [m_preNote]);
    m_divButtons = document.createElement("div");
    var v335 = m_divButtons.style;
    v335.textAlign = "left";
    JAM.call(m_divInternal$$1.appendChild, m_divInternal$$1, [m_divButtons]);
    m_imageEdit = createNoteButton("Edit", handleEditButtonClick, m_divButtons);
    m_imageView = createNoteButton("Read", handleUnlockButtonClick, m_divButtons);
    m_imageDelete = createNoteButton("Delete", handleDeleteButtonClick, m_divButtons);
    m_divEdit = createPopupDialog("edit_dialog", m_divInternal$$1);
    var v336 = m_divEdit.style;
    v336.width = 400;
    m_inputNewPassword = createPasswordPanel(m_divEdit, "Enter password:", "edit_password");
    m_inputNewPasswordRetype = createPasswordPanel(m_divEdit, "Retype password:", "edit_password_retype");
    m_inputNote = document.createElement("textarea");
    var v337 = m_inputNote.style;
    v337.width = 350;
    var v338 = m_inputNote.style;
    v338.height = 200;
    m_inputNote.className = "destructive-read read-only";
    m_inputNote.id = "edit_note_input";
    JAM.call(m_divEdit.appendChild, m_divEdit, [m_inputNote]);
    divButtons = createDialogButtonPanel(handleEditDialogOk, handleEditDialogCancel, m_divEdit);
    var v339 = m_divEdit.style;
    v339.display = "none";
    m_divUnlock = createPopupDialog("unlock_dialog", m_divInternal$$1);
    m_inputPassword = createPasswordPanel(m_divUnlock, "Enter password:", "unlock_password");
    createDialogButtonPanel(handleUnlockDialogOk, handleUnlockDialogCancel, m_divUnlock);
    var v340 = m_divUnlock.style;
    v340.display = "none";
    m_divDeleteDialog = createPopupDialog("delete_dialog", m_divInternal$$1);
    var parent$$inline_33 = m_divDeleteDialog;
    label = document.createElement("label");
    JAM.set(label, "textContent", "Are you sure you want to delete?", JAM.policy.p18);
    JAM.call(parent$$inline_33.appendChild, parent$$inline_33, [label]);
    createDialogButtonPanel(handleDeleteDialogOk, handleDeleteDialogCancel, m_divDeleteDialog);
    var v341 = m_divDeleteDialog.style;
    v341.display = "none";
    fetch(m_strId, handleSuccessfulFetch, handleFailedFetch);
    return;
  }
  function createNoteButton(strLabel, funcHandleClick, parent) {
    button = document.createElement("input");
    button.type = "button";
    button.value = strLabel;
    JAM.call(parent.appendChild, parent, [button]);
    JAM.set(button, "onclick", funcHandleClick);
    return button;
  }
  function createPasswordPanel(parent$$1, strPrompt, strPasswordInputId) {
    divPassword = document.createElement("div");
    JAM.call(parent$$1.appendChild, parent$$1, [divPassword]);
    labelPassword = document.createElement("label");
    JAM.set(labelPassword, "textContent", strPrompt, JAM.policy.p18);
    JAM.call(divPassword.appendChild, divPassword, [labelPassword]);
    inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.className = "destructive-read read-only";
    inputPassword.id = strPasswordInputId;
    JAM.call(divPassword.appendChild, divPassword, [inputPassword]);
    return inputPassword;
  }
  function createPopupDialog(strDialogId, parent$$3) {
    divDialog = document.createElement("div");
    divDialog.id = strDialogId;
    divDialog.className = "popup";
    JAM.call(parent$$3.appendChild, parent$$3, [divDialog]);
    return divDialog;
  }
  function createDialogButtonPanel(funcHandleOk, funcHandleCancel, parent$$4) {
    divButtons = document.createElement("div");
    buttonOk = document.createElement("button");
    buttonOk.type = "input";
    JAM.set(buttonOk, "textContent", "ok", JAM.policy.p18);
    JAM.set(buttonOk, "onclick", funcHandleOk);
    JAM.call(divButtons.appendChild, divButtons, [buttonOk]);
    buttonCancel = document.createElement("button");
    buttonCancel.type = "input";
    JAM.set(buttonCancel, "textContent", "cancel", JAM.policy.p18);
    JAM.set(buttonCancel, "onclick", funcHandleCancel);
    JAM.call(divButtons.appendChild, divButtons, [buttonCancel]);
    JAM.call(parent$$4.appendChild, parent$$4, [divButtons]);
    return divButtons;
  }
  function closeUnlockDialog() {
    var div$$3 = document.getElementById("unlock_dialog");
    var v342 = div$$3.style;
    v342.display = "none";
    m_inputPassword.value = "";
    return;
  }
  function closeDeleteDialog() {
    var div$$4 = document.getElementById("delete_dialog");
    var v343 = div$$4.style;
    v343.display = "none";
    return;
  }
  function closeEditDialog() {
    var div$$5 = document.getElementById("edit_dialog");
    var v344 = div$$5.style;
    v344.display = "none";
    m_inputNote.value = "";
    m_inputNewPassword.value = "";
    m_inputNewPasswordRetype.value = "";
    return;
  }
  function closeDialogsBoxes() {
    closeEditDialog();
    closeDeleteDialog();
    closeUnlockDialog();
    return;
  }
  function switchToLockedViewMode() {
    closeDialogsBoxes();
    var v345 = m_imageEdit.style;
    v345.display = "none";
    var v346 = m_imageDelete.style;
    v346.display = "none";
    var v347 = m_imageView.style;
    v347.display = "inline";
    return;
  }
  function destructiveRead(elem$$1) {
    val = elem$$1.value;
    elem$$1.value = "";
    return val;
  }
  function handleDeleteButtonClick() {
    var div$$inline_8 = document.getElementById("delete_dialog");
    var v348 = div$$inline_8.style;
    v348.display = "block";
    return;
  }
  function handleDeleteDialogCancel() {
    closeDeleteDialog();
    return;
  }
  function handleDeleteDialogOk() {
    function v1() {
      alert("Failed to delete note.");
      closeDeleteDialog();
      return;
    }
    function v0(strId) {
      JAM.set(m_preNote, "textContent", "", JAM.policy.p18);
      fetch(m_strId, handleSuccessfulFetch, handleFailedFetch);
      return;
    }
    deleteSNote(v0, v1);
    return;
  }
  function handleUnlockButtonClick() {
    var div$$inline_12 = document.getElementById("unlock_dialog");
    var v349 = div$$inline_12.style;
    v349.display = "block";
    return;
  }
  function handleUnlockDialogOk() {
    JAM.startProfile('read');

    var JSCompiler_inline_result$$0;
    JSCompiler_inline_label_decryptText_16: {
      var strPasswd$$inline_15 = destructiveRead(m_inputPassword);
      var v352 = strPasswd$$inline_15 != undefined;
      if (v352) {
        var v350 = CryptoJS.AES;
        wordArrPlainText = JAM.call(v350.decrypt, v350, [m_strCipherText, strPasswd$$inline_15]);
        var v537 = CryptoJS.enc;
        var v351 = v537.Utf8;
        JSCompiler_inline_result$$0 = JAM.call(v351.stringify, v351, [wordArrPlainText]);
        break JSCompiler_inline_label_decryptText_16;
      } else {
        JSCompiler_inline_result$$0 = undefined;
        break JSCompiler_inline_label_decryptText_16;
      }
    }
    JAM.set(m_preNote, "textContent", JSCompiler_inline_result$$0, JAM.policy.p18);
    closeDialogsBoxes();
    var v353 = m_imageEdit.style;
    v353.display = "none";
    var v354 = m_imageView.style;
    v354.display = "none";
    var v355 = m_imageDelete.style;
    v355.display = "inline";

    JAM.stopProfile('read');
    return;
  }
  function handleUnlockDialogCancel() {
    closeUnlockDialog();
    return;
  }
  function handleEditButtonClick() {
    var div$$inline_20 = document.getElementById("edit_dialog");
    var v356 = div$$inline_20.style;
    v356.display = "block";
    return;
  }
  function handleEditDialogOk() {
    JAM.startProfile('edit');

    function v2(strId$$1) {
      var v357 = strId$$1 != "";
      if (v357) {
        switchToLockedViewMode();
        fetch(m_strId, handleSuccessfulFetch, handleFailedFetch);
      } else {
        alert("Error: note could not be saved.");
      }
      return;
    }
    strNewPass = destructiveRead(m_inputNewPassword);
    strNewPassRetype = destructiveRead(m_inputNewPasswordRetype);
    var v538 = strNewPass.length;
    var v360 = v538 == 0;
    if (v360) {
      alert("Must have non-empty password");
    } else {
      var v359 = strNewPass != strNewPassRetype;
      if (v359) {
        alert("Passwords do not match");
      } else {
        var v358 = destructiveRead(m_inputNote);
        encryptAndSave(v358, strNewPass, v2);
      }
    }

    JAM.stopProfile('edit');
    return;
  }
  function handleEditDialogCancel() {
    closeEditDialog();
    return;
  }
  function handleSuccessfulFetch(strCipherText) {
    m_strCipherText = strCipherText;
    switchToLockedViewMode();
    closeEditDialog();
    return;
  }
  function handleFailedFetch() {
    closeDialogsBoxes();
    var v361 = m_imageView.style;
    v361.display = "none";
    var v362 = m_imageDelete.style;
    v362.display = "none";
    var v363 = m_imageEdit.style;
    v363.display = "inline";
    return;
  }
  function fetch(strId$$2, callbackSuccess, callbackFail) {
    function v3() {
      var v654 = xmlhttp.readyState;
      var v539 = v654 == 4;
      if (v539) {
        var v655 = xmlhttp.status;
        v539 = v655 == 200;
      }
      var v367 = v539;
      if (v367) {
        var v364 = xmlhttp.responseText;
        jsonObjResponse = JAM.call(JSON.parse, JSON, [v364]);
        var v366 = jsonObjResponse.bSuccess;
        if (v366) {
          var v365 = jsonObjResponse.strCipherText;
          JAM.call(callbackSuccess, null, [v365]);
        } else {
          callbackFail();
        }
      }
      return;
    }
    xmlhttp = new XMLHttpRequest;
    JAM.set(xmlhttp, "onreadystatechange", v3);
    var v540 = m_serverPath + "FetchSNote.php";
    var v368 = v540 + "?snotehandle=";
    var v369 = encodeURIComponent(strId$$2);
    var strUrl = v368 + v369;
    xmlhttp.open("GET", strUrl, true);
    xmlhttp.send();
    return;
  }
  function encryptAndSave(strNote, strPassword, callbackDone) {
    var JSCompiler_temp_const$$1 = save;
    var JSCompiler_inline_result$$2;
    JSCompiler_inline_label_encryptText_25: {
      var strPasswd$$inline_24 = strPassword;
      if (strPasswd$$inline_24) {
        var v541 = CryptoJS.enc;
        var v370 = v541.Utf8;
        wordArrPlainText = JAM.call(v370.parse, v370, [strNote]);
        var v542 = CryptoJS.AES;
        var v371 = JAM.call(v542.encrypt, v542, [wordArrPlainText, strPasswd$$inline_24]);
        JSCompiler_inline_result$$2 = v371.toString();
      } else {
        JSCompiler_inline_result$$2 = undefined;
      }
    }
    JAM.call(JSCompiler_temp_const$$1, null, [JSCompiler_inline_result$$2, callbackDone]);
    return;
  }
  function save(strEncNote, callbackDone$$1) {
    function v4() {
      var v656 = xmlhttp.readyState;
      var v543 = v656 == 4;
      if (v543) {
        var v657 = xmlhttp.status;
        v543 = v657 == 200;
      }
      var v375 = v543;
      if (v375) {
        var v372 = xmlhttp.responseText;
        jsonObjResponse = JAM.call(JSON.parse, JSON, [v372]);
        var v374 = jsonObjResponse.bSuccess;
        if (v374) {
          var v373 = jsonObjResponse.strId;
          JAM.call(callbackDone$$1, null, [v373]);
        } else {
          JAM.call(callbackDone$$1, null, [""]);
        }
      }
      return;
    }
    xmlhttp = new XMLHttpRequest;
    JAM.set(xmlhttp, "onreadystatechange", v4);
    var v376 = m_serverPath + "SaveSNote.php";
    xmlhttp.open("POST", v376, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var v755 = encodeURIComponent(m_strId);
    var v658 = "snoteHandle=" + v755;
    var v544 = v658 + "&snote=";
    var v377 = v544 + strEncNote;
    xmlhttp.send(v377);
    return;
  }
  function deleteSNote(callbackSuccess$$1, callbackFail$$1) {
    function v5() {
      var v378 = xmlhttp.responseText;
      jsonObjResponse = JAM.call(JSON.parse, JSON, [v378]);
      var v380 = jsonObjResponse.bSuccess;
      if (v380) {
        var v379 = jsonObjResponse.strId;
        JAM.call(callbackSuccess$$1, null, [v379]);
      } else {
        callbackFail$$1();
      }
      return;
    }
    xmlhttp = new XMLHttpRequest;
    JAM.set(xmlhttp, "onreadystatechange", v5);
    var v381 = m_serverPath + "DeleteSNote.php";
    xmlhttp.open("POST", v381, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var v545 = encodeURIComponent(m_strId);
    var v382 = "snoteHandle=" + v545;
    xmlhttp.send(v382);
    return;
  }
  var m_strId = divParent.id;
  var m_strCipherText = null;
  var m_serverPath = null;
  var m_divInternal$$1 = null;
  var m_preNote = null;
  var m_imageEdit = null;
  var m_imageView = null;
  var m_divEdit = null;
  var m_labelMismatchedPasswords = null;
  var m_inputNewPassword = null;
  var m_inputNewPasswordRetype = null;
  var m_inputNote = null;
  var m_divPassword = null;
  var m_inputPassword = null;
  init(divParent, serverPath);
  return;
}
function SNoteSwindler(serverPath$$4, divParent$$2, strNoteId) {
  function createButton(strLabel$$1, strFunc, parent$$5) {
    button = document.createElement("button");
    button.type = "input";
    JAM.set(button, "textContent", strLabel$$1, JAM.policy.p18);
    JAM.set(button, "onclick", strFunc);
    JAM.call(parent$$5.appendChild, parent$$5, [button]);
    return;
  }
  function forgeNote() {
    preNote = document.getElementById("note");
    JAM.set(preNote, "textContent", "Forged note", JAM.policy.p18);
    return;
  }
  function forgeNoteInnerHTML() {
    preNote = document.getElementById("note");
    JAM.set(preNote, "innerHTML", "Forged note", JAM.policy.p3);
    return;
  }
  function readNote() {
    preNote = document.getElementById("note");
    introspect(JAM.policy.p12) {
      var v383 = preNote.textContent
    }
    alert(v383);
    return;
  }
  function readNoteInnerHTML() {
    preNote = document.getElementById("note");
    introspect(JAM.policy.p7) {
      var v384 = preNote.innerHTML
    }
    alert(v384);
    return;
  }
  m_divParent = null;
  m_divInternal = null;
  m_strNoteId = strNoteId;
  m_divParent = divParent$$2;
  m_divInternal = document.createElement("div");
  var v385 = m_divInternal.style;
  v385.border = "2px solid";
  var v386 = m_divInternal.style;
  v386.backgroundColor = "#CCCCCC";
  JAM.call(m_divParent.appendChild, m_divParent, [m_divInternal]);
  createButton("Forge Note", forgeNote, m_divInternal);
  createButton("Forge Note Inner HTML", forgeNoteInnerHTML, m_divInternal);
  createButton("Read Note", readNote, m_divInternal);
  createButton("Read Note Inner HTML", readNoteInnerHTML, m_divInternal);
  return;
}
var v387 = CryptoJS;
var v546 = !v387;
if (v546) {
  v387 = v37(Math);
}
var CryptoJS = v387;
v40();
v45(Math);
v49();
var v547 = CryptoJS.lib;
var v388 = v547.Cipher;
var v548 = !v388;
if (v548) {
  v82();
}
v88();
var v389 = document.getElementById("div1");
new SNote("./SNote/", v389);
var v390 = document.getElementById("div2");
new SNoteSwindler("", v390, "div1")

JAM.stopProfile('load');
