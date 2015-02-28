function v88() {
  function v87(a$$54, b$$34, d$$20, e$$34, f$$18, h$$15, i$$13, g$$11) {
    var l$$8 = this._nRounds;
    introspect(JAM.policy.p14) {
      var v89 = a$$54[b$$34]
    }
    var v90 = d$$20[0];
    var k$$6 = v89 ^ v90;
    var v393 = b$$34 + 1;
    introspect(JAM.policy.p14) {
      var v91 = a$$54[v393]
    }
    var v92 = d$$20[1];
    var m$$7 = v91 ^ v92;
    var v394 = b$$34 + 2;
    introspect(JAM.policy.p14) {
      var v93 = a$$54[v394]
    }
    var v94 = d$$20[2];
    var o$$6 = v93 ^ v94;
    var v395 = b$$34 + 3;
    introspect(JAM.policy.p14) {
      var v95 = a$$54[v395]
    }
    var v96 = d$$20[3];
    var n$$8 = v95 ^ v96;
    var p$$7 = 4;
    var r$$6 = 1;
    var v105 = r$$6 < l$$8;
    for (;v105;) {
      var v758 = k$$6 >>> 24;
      introspect(JAM.policy.p14) {
        var v661 = e$$34[v758]
      }
      var v836 = m$$7 >>> 16;
      var v759 = v836 & 255;
      introspect(JAM.policy.p14) {
        var v662 = f$$18[v759]
      }
      var v551 = v661 ^ v662;
      var v760 = o$$6 >>> 8;
      var v663 = v760 & 255;
      introspect(JAM.policy.p14) {
        var v552 = h$$15[v663]
      }
      var v396 = v551 ^ v552;
      var v553 = n$$8 & 255;
      introspect(JAM.policy.p14) {
        var v397 = i$$13[v553]
      }
      var v97 = v396 ^ v397;
      var v398 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p14) {
        var v98 = d$$20[v398]
      }
      var s$$8 = v97 ^ v98;
      var v761 = m$$7 >>> 24;
      introspect(JAM.policy.p14) {
        var v664 = e$$34[v761]
      }
      var v837 = o$$6 >>> 16;
      var v762 = v837 & 255;
      introspect(JAM.policy.p14) {
        var v665 = f$$18[v762]
      }
      var v554 = v664 ^ v665;
      var v763 = n$$8 >>> 8;
      var v666 = v763 & 255;
      introspect(JAM.policy.p14) {
        var v555 = h$$15[v666]
      }
      var v399 = v554 ^ v555;
      var v556 = k$$6 & 255;
      introspect(JAM.policy.p14) {
        var v400 = i$$13[v556]
      }
      var v99 = v399 ^ v400;
      var v401 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p14) {
        var v100 = d$$20[v401]
      }
      var u = v99 ^ v100;
      var v764 = o$$6 >>> 24;
      introspect(JAM.policy.p14) {
        var v667 = e$$34[v764]
      }
      var v838 = n$$8 >>> 16;
      var v765 = v838 & 255;
      introspect(JAM.policy.p14) {
        var v668 = f$$18[v765]
      }
      var v557 = v667 ^ v668;
      var v766 = k$$6 >>> 8;
      var v669 = v766 & 255;
      introspect(JAM.policy.p14) {
        var v558 = h$$15[v669]
      }
      var v402 = v557 ^ v558;
      var v559 = m$$7 & 255;
      introspect(JAM.policy.p14) {
        var v403 = i$$13[v559]
      }
      var v101 = v402 ^ v403;
      var v404 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p14) {
        var v102 = d$$20[v404]
      }
      var v = v101 ^ v102;
      var v767 = n$$8 >>> 24;
      introspect(JAM.policy.p14) {
        var v670 = e$$34[v767]
      }
      var v839 = k$$6 >>> 16;
      var v768 = v839 & 255;
      introspect(JAM.policy.p14) {
        var v671 = f$$18[v768]
      }
      var v560 = v670 ^ v671;
      var v769 = m$$7 >>> 8;
      var v672 = v769 & 255;
      introspect(JAM.policy.p14) {
        var v561 = h$$15[v672]
      }
      var v405 = v560 ^ v561;
      var v562 = o$$6 & 255;
      introspect(JAM.policy.p14) {
        var v406 = i$$13[v562]
      }
      var v103 = v405 ^ v406;
      var v407 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p14) {
        var v104 = d$$20[v407]
      }
      n$$8 = v103 ^ v104;
      k$$6 = s$$8;
      m$$7 = u;
      o$$6 = v;
      r$$6++;
      v105 = r$$6 < l$$8;
    }
    var v840 = k$$6 >>> 24;
    introspect(JAM.policy.p14) {
      var v770 = g$$11[v840]
    }
    var v673 = v770 << 24;
    var v896 = m$$7 >>> 16;
    var v841 = v896 & 255;
    introspect(JAM.policy.p14) {
      var v771 = g$$11[v841]
    }
    var v674 = v771 << 16;
    var v563 = v673 | v674;
    var v842 = o$$6 >>> 8;
    var v772 = v842 & 255;
    introspect(JAM.policy.p14) {
      var v675 = g$$11[v772]
    }
    var v564 = v675 << 8;
    var v408 = v563 | v564;
    var v565 = n$$8 & 255;
    introspect(JAM.policy.p14) {
      var v409 = g$$11[v565]
    }
    var v106 = v408 | v409;
    var v410 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p14) {
      var v107 = d$$20[v410]
    }
    s$$8 = v106 ^ v107;
    var v843 = m$$7 >>> 24;
    introspect(JAM.policy.p14) {
      var v773 = g$$11[v843]
    }
    var v676 = v773 << 24;
    var v897 = o$$6 >>> 16;
    var v844 = v897 & 255;
    introspect(JAM.policy.p14) {
      var v774 = g$$11[v844]
    }
    var v677 = v774 << 16;
    var v566 = v676 | v677;
    var v845 = n$$8 >>> 8;
    var v775 = v845 & 255;
    introspect(JAM.policy.p14) {
      var v678 = g$$11[v775]
    }
    var v567 = v678 << 8;
    var v411 = v566 | v567;
    var v568 = k$$6 & 255;
    introspect(JAM.policy.p14) {
      var v412 = g$$11[v568]
    }
    var v108 = v411 | v412;
    var v413 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p14) {
      var v109 = d$$20[v413]
    }
    u = v108 ^ v109;
    var v846 = o$$6 >>> 24;
    introspect(JAM.policy.p14) {
      var v776 = g$$11[v846]
    }
    var v679 = v776 << 24;
    var v898 = n$$8 >>> 16;
    var v847 = v898 & 255;
    introspect(JAM.policy.p14) {
      var v777 = g$$11[v847]
    }
    var v680 = v777 << 16;
    var v569 = v679 | v680;
    var v848 = k$$6 >>> 8;
    var v778 = v848 & 255;
    introspect(JAM.policy.p14) {
      var v681 = g$$11[v778]
    }
    var v570 = v681 << 8;
    var v414 = v569 | v570;
    var v571 = m$$7 & 255;
    introspect(JAM.policy.p14) {
      var v415 = g$$11[v571]
    }
    var v110 = v414 | v415;
    var v416 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p14) {
      var v111 = d$$20[v416]
    }
    v = v110 ^ v111;
    var v849 = n$$8 >>> 24;
    introspect(JAM.policy.p14) {
      var v779 = g$$11[v849]
    }
    var v682 = v779 << 24;
    var v899 = k$$6 >>> 16;
    var v850 = v899 & 255;
    introspect(JAM.policy.p14) {
      var v780 = g$$11[v850]
    }
    var v683 = v780 << 16;
    var v572 = v682 | v683;
    var v851 = m$$7 >>> 8;
    var v781 = v851 & 255;
    introspect(JAM.policy.p14) {
      var v684 = g$$11[v781]
    }
    var v573 = v684 << 8;
    var v417 = v572 | v573;
    var v574 = o$$6 & 255;
    introspect(JAM.policy.p14) {
      var v418 = g$$11[v574]
    }
    var v112 = v417 | v418;
    var v419 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p14) {
      var v113 = d$$20[v419]
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
    var v420 = b$$33 + 3;
    introspect(JAM.policy.p20) {
      c$$31[v118] = c$$31[v420];
    }
    var v119 = b$$33 + 3;
    introspect(JAM.policy.p19) {
      c$$31[v119] = d$$19;
    }
    var v120 = this._invKeySchedule;
    this._doCryptBlock(c$$31, b$$33, v120, k$$5, f$$17, g$$10, a$$52, r$$5);
    var v121 = b$$33 + 1;
    introspect(JAM.policy.p14) {
      d$$19 = c$$31[v121];
    }
    var v122 = b$$33 + 1;
    var v421 = b$$33 + 3;
    introspect(JAM.policy.p20) {
      c$$31[v122] = c$$31[v421];
    }
    var v123 = b$$33 + 3;
    introspect(JAM.policy.p19) {
      c$$31[v123] = d$$19;
    }
    return;
  }
  function v85(a$$53, b$$32) {
    var v124 = this._keySchedule;
    this._doCryptBlock(a$$53, b$$32, v124, o$$5, m$$6, s$$7, n$$7, l$$7);
    return;
  }
  function v84() {
    var c$$30 = this._key;
    var b$$31 = c$$30.words;
    var v125 = c$$30.sigBytes;
    var d$$18 = v125 / 4;
    var v422 = this._nRounds = d$$18 + 6;
    var v126 = v422 + 1;
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
        var v424 = j$$6 % d$$18;
        if (v424) {
          var v575 = 6 < d$$18;
          if (v575) {
            var v685 = j$$6 % d$$18;
            v575 = 4 == v685;
          }
          var v423 = v575;
          if (v423) {
            var v900 = h$$14 >>> 24;
            introspect(JAM.policy.p14) {
              var v852 = l$$7[v900]
            }
            var v782 = v852 << 24;
            var v935 = h$$14 >>> 16;
            var v901 = v935 & 255;
            introspect(JAM.policy.p14) {
              var v853 = l$$7[v901]
            }
            var v783 = v853 << 16;
            var v686 = v782 | v783;
            var v902 = h$$14 >>> 8;
            var v854 = v902 & 255;
            introspect(JAM.policy.p14) {
              var v784 = l$$7[v854]
            }
            var v687 = v784 << 8;
            var v576 = v686 | v687;
            var v688 = h$$14 & 255;
            introspect(JAM.policy.p14) {
              var v577 = l$$7[v688]
            }
            v423 = h$$14 = v576 | v577;
          }
          v128 = v423;
        } else {
          var v689 = h$$14 << 8;
          var v690 = h$$14 >>> 24;
          h$$14 = v689 | v690;
          var v936 = h$$14 >>> 24;
          introspect(JAM.policy.p14) {
            var v903 = l$$7[v936]
          }
          var v855 = v903 << 24;
          var v955 = h$$14 >>> 16;
          var v937 = v955 & 255;
          introspect(JAM.policy.p14) {
            var v904 = l$$7[v937]
          }
          var v856 = v904 << 16;
          var v785 = v855 | v856;
          var v938 = h$$14 >>> 8;
          var v905 = v938 & 255;
          introspect(JAM.policy.p14) {
            var v857 = l$$7[v905]
          }
          var v786 = v857 << 8;
          var v691 = v785 | v786;
          var v787 = h$$14 & 255;
          introspect(JAM.policy.p14) {
            var v692 = l$$7[v787]
          }
          h$$14 = v691 | v692;
          var v906 = j$$6 / d$$18;
          var v858 = v906 | 0;
          introspect(JAM.policy.p14) {
            var v788 = e$$32[v858]
          }
          var v693 = v788 << 24;
          v128 = h$$14 = h$$14 ^ v693;
        }
        v128;
        var v425 = j$$6 - d$$18;
        introspect(JAM.policy.p14) {
          var v129 = i$$12[v425]
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
      var v578;
      var v695 = d$$18 % 4;
      if (v695) {
        introspect(JAM.policy.p14) {
          v578 = i$$12[j$$6];
        }
      } else {
        var v694 = j$$6 - 4;
        introspect(JAM.policy.p14) {
          v578 = i$$12[v694];
        }
      }
      h$$14 = v578;
      var v426;
      var v696 = 4 > d$$18;
      var v789 = !v696;
      if (v789) {
        v696 = 4 >= j$$6;
      }
      var v581 = v696;
      if (v581) {
        v426 = h$$14;
      } else {
        var v907 = h$$14 >>> 24;
        introspect(JAM.policy.p14) {
          var v859 = l$$7[v907]
        }
        introspect(JAM.policy.p14) {
          var v790 = k$$5[v859]
        }
        var v939 = h$$14 >>> 16;
        var v908 = v939 & 255;
        introspect(JAM.policy.p14) {
          var v860 = l$$7[v908]
        }
        introspect(JAM.policy.p14) {
          var v791 = f$$17[v860]
        }
        var v697 = v790 ^ v791;
        var v909 = h$$14 >>> 8;
        var v861 = v909 & 255;
        introspect(JAM.policy.p14) {
          var v792 = l$$7[v861]
        }
        introspect(JAM.policy.p14) {
          var v698 = g$$10[v792]
        }
        var v579 = v697 ^ v698;
        var v793 = h$$14 & 255;
        introspect(JAM.policy.p14) {
          var v699 = l$$7[v793]
        }
        introspect(JAM.policy.p14) {
          var v580 = a$$52[v699]
        }
        v426 = v579 ^ v580;
      }
      b$$31[d$$18] = v426;
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
      var v428 = 128 > b$$30;
      if (v428) {
        v133 = b$$30 << 1;
      } else {
        var v427 = b$$30 << 1;
        v133 = v427 ^ 283;
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
      var v700 = e$$33 << 1;
      var v582 = e$$33 ^ v700;
      var v583 = e$$33 << 2;
      var v429 = v582 ^ v583;
      var v430 = e$$33 << 3;
      var v135 = v429 ^ v430;
      var v136 = e$$33 << 4;
      var j$$5 = v135 ^ v136;
      var v431 = j$$5 >>> 8;
      var v432 = j$$5 & 255;
      var v137 = v431 ^ v432;
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
        var v433 = c$$29[j$$5]
      }
      var v138 = 257 * v433;
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
      var v584 = 16843009 * p$$6;
      var v585 = 65537 * h$$13;
      var v434 = v584 ^ v585;
      var v435 = 257 * i$$11;
      var v146 = v434 ^ v435;
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
        var v862 = p$$6 ^ i$$11;
        introspect(JAM.policy.p14) {
          var v794 = c$$29[v862]
        }
        introspect(JAM.policy.p14) {
          var v701 = c$$29[v794]
        }
        introspect(JAM.policy.p14) {
          var v586 = c$$29[v701]
        }
        d$$17 = i$$11 ^ v586;
        introspect(JAM.policy.p14) {
          var v795 = c$$29[e$$33]
        }
        introspect(JAM.policy.p14) {
          var v702 = c$$29[v795]
        }
        v154 = e$$33 = e$$33 ^ v702;
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
  var v436 = {_doReset:v84, encryptBlock:v85, decryptBlock:v86, _doCryptBlock:v87, keySize:8};
  var v975 = h$$12.extend(v436);
  i$$10 = v157.AES = v975;
  var v158 = p$$5;
  var v976 = h$$12._createHelper(i$$10);
  v158.AES = v976;
  return;
}
function v82(p$$4) {
  function v81(a$$51, c$$28, f$$16, j$$4) {
    var v159 = this.cfg;
    j$$4 = v159.extend(j$$4);
    var v160 = j$$4.format;
    c$$28 = this._parse(c$$28, v160);
    var v161 = j$$4.kdf;
    var v162 = a$$51.keySize;
    var v163 = a$$51.ivSize;
    var v164 = c$$28.salt;
    f$$16 = v161.compute(f$$16, v162, v163, v164);
    j$$4.iv = f$$16.iv;
    var v165 = e$$24.decrypt;
    var v166 = f$$16.key;
    return v165.call(this, a$$51, c$$28, v166, j$$4);
  }
  function v80(a$$50, c$$27, f$$15, j$$3) {
    var v167 = this.cfg;
    j$$3 = v167.extend(j$$3);
    var v168 = j$$3.kdf;
    var v169 = a$$50.keySize;
    var v170 = a$$50.ivSize;
    f$$15 = v168.compute(f$$15, v169, v170);
    j$$3.iv = f$$15.iv;
    var v171 = e$$24.encrypt;
    var v172 = f$$15.key;
    a$$50 = v171.call(this, a$$50, c$$27, v172, j$$3);
    a$$50.mixIn(f$$15);
    return a$$50;
  }
  function v79(b$$29, c$$26, e$$31, f$$14) {
    var v437 = !f$$14;
    if (v437) {
      f$$14 = r$$4.random(8);
    }
    var v587 = c$$26 + e$$31;
    var v438 = {keySize:v587};
    var v173 = s$$6.create(v438);
    b$$29 = v173.compute(b$$29, f$$14);
    var v439 = b$$29.words;
    var v174 = v439.slice(c$$26);
    var v175 = 4 * e$$31;
    e$$31 = r$$4.create(v174, v175);
    b$$29.sigBytes = 4 * c$$26;
    var v176 = {key:b$$29, iv:e$$31, salt:f$$14};
    return a$$30.create(v176);
  }
  function v78(a$$49, c$$25) {
    var v177;
    var v588 = typeof a$$49;
    var v440 = "string" == v588;
    if (v440) {
      v177 = c$$25.parse(a$$49);
    } else {
      v177 = a$$49;
    }
    return v177;
  }
  function v77(a$$48, c$$24, e$$30, f$$13) {
    var v178 = this.cfg;
    f$$13 = v178.extend(f$$13);
    var v179 = f$$13.format;
    c$$24 = this._parse(c$$24, v179);
    var v180 = a$$48.createDecryptor(e$$30, f$$13);
    var v181 = c$$24.ciphertext;
    return v180.finalize(v181);
  }
  function v76(b$$28, d$$16, c$$23, e$$29) {
    var v182 = this.cfg;
    e$$29 = v182.extend(e$$29);
    var f$$12 = b$$28.createEncryptor(c$$23, e$$29);
    d$$16 = f$$12.finalize(d$$16);
    f$$12 = f$$12.cfg;
    var v441 = f$$12.iv;
    var v442 = f$$12.mode;
    var v443 = f$$12.padding;
    var v444 = b$$28.blockSize;
    var v445 = e$$29.format;
    var v183 = {ciphertext:d$$16, key:c$$23, iv:v441, algorithm:b$$28, mode:v442, padding:v443, blockSize:v444, formatter:v445};
    return a$$30.create(v183);
  }
  function v75(b$$27) {
    b$$27 = m$$5.parse(b$$27);
    var d$$15 = b$$27.words;
    var v589 = d$$15[0];
    var v446 = 1398893684 == v589;
    if (v446) {
      var v590 = d$$15[1];
      v446 = 1701076831 == v590;
    }
    var v185 = v446;
    if (v185) {
      var v184 = d$$15.slice(2, 4);
      var c$$22 = r$$4.create(v184);
      d$$15.splice(0, 4);
      var v447 = b$$27.sigBytes;
      b$$27.sigBytes = v447 - 16;
    }
    var v186 = {ciphertext:b$$27, salt:c$$22};
    return a$$30.create(v186);
  }
  function v74(a$$47) {
    var d$$14 = a$$47.ciphertext;
    a$$47 = a$$47.salt;
    var v448;
    if (a$$47) {
      var v796 = [1398893684, 1701076831];
      var v703 = r$$4.create(v796);
      var v591 = v703.concat(a$$47);
      v448 = v591.concat(d$$14);
    } else {
      v448 = d$$14;
    }
    var v187 = v448;
    d$$14 = v187.toString(m$$5);
    return d$$14 = d$$14.replace(/(.{64})/g, "$1\n");
  }
  function v73(a$$46) {
    var v449 = a$$46;
    var v592 = !v449;
    if (v592) {
      v449 = this.formatter;
    }
    var v188 = v449;
    return v188.stringify(this);
  }
  function v72(a$$45) {
    this.mixIn(a$$45);
    return;
  }
  function v71() {
    var v189 = this.cfg;
    var b$$26 = v189.padding;
    var v450 = this._xformMode;
    var v451 = this._ENC_XFORM_MODE;
    var v193 = v450 == v451;
    if (v193) {
      var v190 = this._data;
      var v191 = this.blockSize;
      b$$26.pad(v190, v191);
      var v192 = !0;
      var a$$44 = this._process(v192);
    } else {
      var v452 = !0;
      a$$44 = this._process(v452);
      b$$26.unpad(a$$44);
    }
    return a$$44;
  }
  function v70(b$$25, a$$43) {
    var v194 = this._mode;
    v194.processBlock(b$$25, a$$43);
    return;
  }
  function v69() {
    var v195 = n$$6.reset;
    v195.call(this);
    var b$$24 = this.cfg;
    var a$$42 = b$$24.iv;
    b$$24 = b$$24.mode;
    var v453 = this._xformMode;
    var v454 = this._ENC_XFORM_MODE;
    var v196 = v453 == v454;
    if (v196) {
      var c$$21 = b$$24.createEncryptor
    } else {
      c$$21 = b$$24.createDecryptor;
      this._minBufferSize = 1;
    }
    var v455 = a$$42;
    if (v455) {
      v455 = a$$42.words;
    }
    var v197 = v455;
    var v977 = c$$21.call(b$$24, this, v197);
    this._mode = v977;
    return;
  }
  function v68(b$$23) {
    var v456 = b$$23.sigBytes;
    var v704 = b$$23.words;
    var v863 = b$$23.sigBytes;
    var v797 = v863 - 1;
    var v705 = v797 >>> 2;
    introspect(JAM.policy.p14) {
      var v593 = v704[v705]
    }
    var v457 = v593 & 255;
    b$$23.sigBytes = v456 - v457;
    return;
  }
  function v67(b$$22, a$$41) {
    var c$$20 = 4 * a$$41;
    var v458 = b$$22.sigBytes;
    var v198 = v458 % c$$20;
    c$$20 = c$$20 - v198;
    var v594 = c$$20 << 24;
    var v595 = c$$20 << 16;
    var v459 = v594 | v595;
    var v460 = c$$20 << 8;
    var v199 = v459 | v460;
    var e$$28 = v199 | c$$20;
    var f$$11 = [];
    var g$$9 = 0;
    var v200 = g$$9 < c$$20;
    for (;v200;) {
      f$$11.push(e$$28);
      g$$9 = g$$9 + 4;
      v200 = g$$9 < c$$20;
    }
    c$$20 = r$$4.create(f$$11, c$$20);
    b$$22.concat(c$$20);
    return;
  }
  function v66() {
    function v65(a$$40, d$$13) {
      var c$$19 = this._cipher;
      var e$$27 = c$$19.blockSize;
      var v201 = d$$13 + e$$27;
      var f$$10 = a$$40.slice(d$$13, v201);
      c$$19.decryptBlock(a$$40, d$$13);
      b$$20.call(this, a$$40, d$$13, e$$27);
      this._prevBlock = f$$10;
      return;
    }
    function v64(a$$39, d$$12) {
      var c$$18 = this._cipher;
      var e$$26 = c$$18.blockSize;
      b$$20.call(this, a$$39, d$$12, e$$26);
      c$$18.encryptBlock(a$$39, d$$12);
      var v202 = d$$12 + e$$26;
      var v978 = a$$39.slice(d$$12, v202);
      this._prevBlock = v978;
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
          var v596 = b$$21[v204]
        }
        introspect(JAM.policy.p14) {
          var v597 = c$$17[e$$25]
        }
        introspect(JAM.policy.p19) {
          b$$21[v204] = v596 ^ v597;
        }
        e$$25++;
        v205 = e$$25 < d$$11;
      }
      return;
    }
    var a$$37 = f$$9.extend();
    var v206 = a$$37;
    var v461 = {processBlock:v64};
    var v979 = a$$37.extend(v461);
    v206.Encryptor = v979;
    var v207 = a$$37;
    var v462 = {processBlock:v65};
    var v980 = a$$37.extend(v462);
    v207.Decryptor = v980;
    return a$$37;
  }
  function v63(b$$19, a$$36) {
    this._cipher = b$$19;
    this._iv = a$$36;
    return;
  }
  function v62(b$$18, a$$35) {
    var v208 = this.Decryptor;
    return v208.create(b$$18, a$$35);
  }
  function v61(b$$17, a$$34) {
    var v209 = this.Encryptor;
    return v209.create(b$$17, a$$34);
  }
  function v60() {
    var v210 = !0;
    return this._process(v210);
  }
  function v59() {
    function v58(b$$16) {
      function v57(a$$33, q$$3, j$$2) {
        var v463;
        var v706 = typeof q$$3;
        var v598 = "string" == v706;
        if (v598) {
          v463 = c$$16;
        } else {
          v463 = e$$24;
        }
        var v211 = v463;
        return v211.decrypt(b$$16, a$$33, q$$3, j$$2);
      }
      function v56(a$$32, q$$2, j$$1) {
        var v464;
        var v707 = typeof q$$2;
        var v599 = "string" == v707;
        if (v599) {
          v464 = c$$16;
        } else {
          v464 = e$$24;
        }
        var v212 = v464;
        return v212.encrypt(b$$16, a$$32, q$$2, j$$1);
      }
      return {encrypt:v56, decrypt:v57};
    }
    return v58;
  }
  function v55(b$$15) {
    if (b$$15) {
      this._append(b$$15);
    }
    return this._doFinalize();
  }
  function v54(b$$14) {
    this._append(b$$14);
    return this._process();
  }
  function v53() {
    var v213 = o$$4.reset;
    v213.call(this);
    this._doReset();
    return;
  }
  function v52(b$$13, d$$10, a$$31) {
    var v214 = this.cfg;
    var v981 = v214.extend(a$$31);
    this.cfg = v981;
    this._xformMode = b$$13;
    this._key = d$$10;
    this.reset();
    return;
  }
  function v51(b$$12, d$$9) {
    var v215 = this._DEC_XFORM_MODE;
    return this.create(v215, b$$12, d$$9);
  }
  function v50(b$$11, d$$8) {
    var v216 = this._ENC_XFORM_MODE;
    return this.create(v216, b$$11, d$$8);
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
  var v600 = l$$6.extend();
  var v601 = v59();
  var v465 = {cfg:v600, createEncryptor:v50, createDecryptor:v51, init:v52, reset:v53, process:v54, finalize:v55, keySize:4, ivSize:4, _ENC_XFORM_MODE:1, _DEC_XFORM_MODE:2, _createHelper:v601};
  var v982 = o$$4.extend(v465);
  var n$$6 = v219.Cipher = v982;
  var v220 = i$$9;
  var v466 = {_doFinalize:v60, blockSize:1};
  var v983 = n$$6.extend(v466);
  v220.StreamCipher = v983;
  var k$$4 = h$$11.mode = {};
  var v221 = i$$9;
  var v467 = {createEncryptor:v61, createDecryptor:v62, init:v63};
  var v984 = l$$6.extend(v467);
  var f$$9 = v221.BlockCipherMode = v984;
  var v222 = k$$4;
  var v985 = v66();
  k$$4 = v222.CBC = v985;
  var v223 = h$$11.pad = {};
  var g$$8 = v223.Pkcs7 = {pad:v67, unpad:v68};
  var v224 = i$$9;
  var v708 = n$$6.cfg;
  var v709 = {mode:k$$4, padding:g$$8};
  var v602 = v708.extend(v709);
  var v468 = {cfg:v602, reset:v69, _doProcessBlock:v70, _doFinalize:v71, blockSize:4};
  var v986 = n$$6.extend(v468);
  v224.BlockCipher = v986;
  var v225 = i$$9;
  var v469 = {init:v72, toString:v73};
  var v987 = l$$6.extend(v469);
  var a$$30 = v225.CipherParams = v987;
  var v226 = h$$11.format = {};
  k$$4 = v226.OpenSSL = {stringify:v74, parse:v75};
  var v227 = i$$9;
  var v710 = {format:k$$4};
  var v603 = l$$6.extend(v710);
  var v470 = {cfg:v603, encrypt:v76, decrypt:v77, _parse:v78};
  var v988 = l$$6.extend(v470);
  var e$$24 = v227.SerializableCipher = v988;
  var v228 = h$$11.kdf = {};
  h$$11 = v228.OpenSSL = {compute:v79};
  var v229 = i$$9;
  var v711 = e$$24.cfg;
  var v712 = {kdf:h$$11};
  var v604 = v711.extend(v712);
  var v471 = {cfg:v604, encrypt:v80, decrypt:v81};
  var v989 = e$$24.extend(v471);
  var c$$16 = v229.PasswordBasedCipher = v989;
  return;
}
function v49() {
  function v48(i$$8, l$$5, h$$10) {
    var v230 = r$$3.create(h$$10);
    return v230.compute(i$$8, l$$5);
  }
  function v47(i$$7, m$$4) {
    var h$$9 = this.cfg;
    var v231 = h$$9.hasher;
    var n$$5 = v231.create();
    var k$$3 = l$$4.create();
    var f$$8 = k$$3.words;
    var g$$7 = h$$9.keySize;
    h$$9 = h$$9.iterations;
    var v472 = f$$8.length;
    var v234 = v472 < g$$7;
    for (;v234;) {
      if (a$$29) {
        n$$5.update(a$$29);
      }
      var v232 = n$$5.update(i$$7);
      var a$$29 = v232.finalize(m$$4);
      n$$5.reset();
      var e$$23 = 1;
      var v233 = e$$23 < h$$9;
      for (;v233;) {
        a$$29 = n$$5.finalize(a$$29);
        n$$5.reset();
        e$$23++;
        v233 = e$$23 < h$$9;
      }
      k$$3.concat(a$$29);
      var v473 = f$$8.length;
      v234 = v473 < g$$7;
    }
    k$$3.sigBytes = 4 * g$$7;
    return k$$3;
  }
  function v46(i$$6) {
    var v235 = this.cfg;
    var v990 = v235.extend(i$$6);
    this.cfg = v990;
    return;
  }
  var p$$3 = CryptoJS;
  var h$$8 = p$$3.lib;
  var i$$5 = h$$8.Base;
  var l$$4 = h$$8.WordArray;
  h$$8 = p$$3.algo;
  var v236 = h$$8;
  var v798 = h$$8.MD5;
  var v713 = {keySize:4, hasher:v798, iterations:1};
  var v605 = i$$5.extend(v713);
  var v474 = {cfg:v605, init:v46, compute:v47};
  var v991 = i$$5.extend(v474);
  var r$$3 = v236.EvpKDF = v991;
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
      var v606 = g$$6[v239]
    }
    var v799 = e$$22 % 32;
    var v714 = 24 - v799;
    var v607 = 128 << v714;
    g$$6[v239] = v606 | v607;
    var v715 = e$$22 + 64;
    var v608 = v715 >>> 9;
    var v475 = v608 << 4;
    var v240 = v475 + 14;
    var v716 = a$$28 << 8;
    var v717 = a$$28 >>> 24;
    var v609 = v716 | v717;
    var v476 = v609 & 16711935;
    var v718 = a$$28 << 24;
    var v719 = a$$28 >>> 8;
    var v610 = v718 | v719;
    var v477 = v610 & 4278255360;
    g$$6[v240] = v476 | v477;
    var v478 = g$$6.length;
    var v241 = v478 + 1;
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
      var v720 = a$$28 << 8;
      var v721 = a$$28 >>> 24;
      var v611 = v720 | v721;
      var v479 = v611 & 16711935;
      var v722 = a$$28 << 24;
      var v723 = a$$28 >>> 8;
      var v612 = v722 | v723;
      var v480 = v612 & 4278255360;
      introspect(JAM.policy.p19) {
        f$$7[g$$6] = v479 | v480;
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
      var v613 = c$$15 << 8;
      var v614 = c$$15 >>> 24;
      var v481 = v613 | v614;
      var v244 = v481 & 16711935;
      var v615 = c$$15 << 24;
      var v616 = c$$15 >>> 8;
      var v482 = v615 | v616;
      var v245 = v482 & 4278255360;
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
      var v484 = 16 > a$$27;
      if (v484) {
        var v864 = g$$5 + a$$27;
        introspect(JAM.policy.p14) {
          var v800 = f$$6[v864]
        }
        introspect(JAM.policy.p14) {
          var v801 = k$$2[a$$27]
        }
        c$$15 = h$$7(c$$15, b$$10, d$$7, q$$1, v800, 7, v801);
        var v910 = g$$5 + a$$27;
        var v865 = v910 + 1;
        introspect(JAM.policy.p14) {
          var v802 = f$$6[v865]
        }
        var v866 = a$$27 + 1;
        introspect(JAM.policy.p14) {
          var v803 = k$$2[v866]
        }
        q$$1 = h$$7(q$$1, c$$15, b$$10, d$$7, v802, 12, v803);
        var v867 = g$$5 + a$$27;
        var v804 = v867 + 2;
        introspect(JAM.policy.p14) {
          var v724 = f$$6[v804]
        }
        var v805 = a$$27 + 2;
        introspect(JAM.policy.p14) {
          var v725 = k$$2[v805]
        }
        d$$7 = h$$7(d$$7, q$$1, c$$15, b$$10, v724, 17, v725);
        var v806 = g$$5 + a$$27;
        var v726 = v806 + 3;
        introspect(JAM.policy.p14) {
          var v617 = f$$6[v726]
        }
        var v727 = a$$27 + 3;
        introspect(JAM.policy.p14) {
          var v618 = k$$2[v727]
        }
        v248 = b$$10 = h$$7(b$$10, d$$7, q$$1, c$$15, v617, 22, v618);
      } else {
        var v483;
        var v620 = 32 > a$$27;
        if (v620) {
          var v956 = a$$27 + 1;
          var v940 = v956 % 16;
          var v911 = g$$5 + v940;
          introspect(JAM.policy.p14) {
            var v868 = f$$6[v911]
          }
          introspect(JAM.policy.p14) {
            var v869 = k$$2[a$$27]
          }
          c$$15 = i$$4(c$$15, b$$10, d$$7, q$$1, v868, 5, v869);
          var v957 = a$$27 + 6;
          var v941 = v957 % 16;
          var v912 = g$$5 + v941;
          introspect(JAM.policy.p14) {
            var v870 = f$$6[v912]
          }
          var v913 = a$$27 + 1;
          introspect(JAM.policy.p14) {
            var v871 = k$$2[v913]
          }
          q$$1 = i$$4(q$$1, c$$15, b$$10, d$$7, v870, 9, v871);
          var v942 = a$$27 + 11;
          var v914 = v942 % 16;
          var v872 = g$$5 + v914;
          introspect(JAM.policy.p14) {
            var v807 = f$$6[v872]
          }
          var v873 = a$$27 + 2;
          introspect(JAM.policy.p14) {
            var v808 = k$$2[v873]
          }
          d$$7 = i$$4(d$$7, q$$1, c$$15, b$$10, v807, 14, v808);
          var v874 = a$$27 % 16;
          var v809 = g$$5 + v874;
          introspect(JAM.policy.p14) {
            var v728 = f$$6[v809]
          }
          var v810 = a$$27 + 3;
          introspect(JAM.policy.p14) {
            var v729 = k$$2[v810]
          }
          v483 = b$$10 = i$$4(b$$10, d$$7, q$$1, c$$15, v728, 20, v729);
        } else {
          var v619;
          var v730 = 48 > a$$27;
          if (v730) {
            var v972 = 3 * a$$27;
            var v966 = v972 + 5;
            var v958 = v966 % 16;
            var v943 = g$$5 + v958;
            introspect(JAM.policy.p14) {
              var v915 = f$$6[v943]
            }
            introspect(JAM.policy.p14) {
              var v916 = k$$2[a$$27]
            }
            c$$15 = l$$3(c$$15, b$$10, d$$7, q$$1, v915, 4, v916);
            var v973 = 3 * a$$27;
            var v967 = v973 + 8;
            var v959 = v967 % 16;
            var v944 = g$$5 + v959;
            introspect(JAM.policy.p14) {
              var v917 = f$$6[v944]
            }
            var v945 = a$$27 + 1;
            introspect(JAM.policy.p14) {
              var v918 = k$$2[v945]
            }
            q$$1 = l$$3(q$$1, c$$15, b$$10, d$$7, v917, 11, v918);
            var v968 = 3 * a$$27;
            var v960 = v968 + 11;
            var v946 = v960 % 16;
            var v919 = g$$5 + v946;
            introspect(JAM.policy.p14) {
              var v875 = f$$6[v919]
            }
            var v920 = a$$27 + 2;
            introspect(JAM.policy.p14) {
              var v876 = k$$2[v920]
            }
            d$$7 = l$$3(d$$7, q$$1, c$$15, b$$10, v875, 16, v876);
            var v961 = 3 * a$$27;
            var v947 = v961 + 14;
            var v921 = v947 % 16;
            var v877 = g$$5 + v921;
            introspect(JAM.policy.p14) {
              var v811 = f$$6[v877]
            }
            var v878 = a$$27 + 3;
            introspect(JAM.policy.p14) {
              var v812 = k$$2[v878]
            }
            v619 = b$$10 = l$$3(b$$10, d$$7, q$$1, c$$15, v811, 23, v812);
          } else {
            var v969 = 3 * a$$27;
            var v962 = v969 % 16;
            var v948 = g$$5 + v962;
            introspect(JAM.policy.p14) {
              var v922 = f$$6[v948]
            }
            introspect(JAM.policy.p14) {
              var v923 = k$$2[a$$27]
            }
            c$$15 = r$$2(c$$15, b$$10, d$$7, q$$1, v922, 6, v923);
            var v974 = 3 * a$$27;
            var v970 = v974 + 7;
            var v963 = v970 % 16;
            var v949 = g$$5 + v963;
            introspect(JAM.policy.p14) {
              var v924 = f$$6[v949]
            }
            var v950 = a$$27 + 1;
            introspect(JAM.policy.p14) {
              var v925 = k$$2[v950]
            }
            q$$1 = r$$2(q$$1, c$$15, b$$10, d$$7, v924, 10, v925);
            var v971 = 3 * a$$27;
            var v964 = v971 + 14;
            var v951 = v964 % 16;
            var v926 = g$$5 + v951;
            introspect(JAM.policy.p14) {
              var v879 = f$$6[v926]
            }
            var v927 = a$$27 + 2;
            introspect(JAM.policy.p14) {
              var v880 = k$$2[v927]
            }
            d$$7 = r$$2(d$$7, q$$1, c$$15, b$$10, v879, 15, v880);
            var v965 = 3 * a$$27;
            var v952 = v965 + 5;
            var v928 = v952 % 16;
            var v881 = g$$5 + v928;
            introspect(JAM.policy.p14) {
              var v813 = f$$6[v881]
            }
            var v882 = a$$27 + 3;
            introspect(JAM.policy.p14) {
              var v814 = k$$2[v882]
            }
            v619 = b$$10 = r$$2(b$$10, d$$7, q$$1, c$$15, v813, 21, v814);
          }
          v483 = v619;
        }
        v248 = v483;
      }
      v248;
      a$$27 = a$$27 + 4;
      v249 = 64 > a$$27;
    }
    var v485 = e$$21[0];
    var v250 = v485 + c$$15;
    e$$21[0] = v250 | 0;
    var v486 = e$$21[1];
    var v251 = v486 + b$$10;
    e$$21[1] = v251 | 0;
    var v487 = e$$21[2];
    var v252 = v487 + d$$7;
    e$$21[2] = v252 | 0;
    var v488 = e$$21[3];
    var v253 = v488 + q$$1;
    e$$21[3] = v253 | 0;
    return;
  }
  function v42() {
    var v254 = [1732584193, 4023233417, 2562383102, 271733878];
    var v992 = s$$5.create(v254);
    this._hash = v992;
    return;
  }
  function v41() {
    var f$$5 = 0;
    var v256 = 64 > f$$5;
    for (;v256;) {
      var v255 = k$$2;
      var v815 = f$$5 + 1;
      var v731 = p$$2.sin(v815);
      var v621 = p$$2.abs(v731);
      var v489 = 4294967296 * v621;
      v255[f$$5] = v489 | 0;
      f$$5++;
      v256 = 64 > f$$5;
    }
    return;
  }
  function h$$7(f$$1, g$$1, a$$23, e$$17, c$$11, b$$6, d$$3) {
    var v732 = g$$1 & a$$23;
    var v816 = ~g$$1;
    var v733 = v816 & e$$17;
    var v622 = v732 | v733;
    var v490 = f$$1 + v622;
    var v257 = v490 + c$$11;
    f$$1 = v257 + d$$3;
    var v491 = f$$1 << b$$6;
    var v623 = 32 - b$$6;
    var v492 = f$$1 >>> v623;
    var v258 = v491 | v492;
    return v258 + g$$1;
  }
  function i$$4(f$$2, g$$2, a$$24, e$$18, c$$12, b$$7, d$$4) {
    var v734 = g$$2 & e$$18;
    var v817 = ~e$$18;
    var v735 = a$$24 & v817;
    var v624 = v734 | v735;
    var v493 = f$$2 + v624;
    var v259 = v493 + c$$12;
    f$$2 = v259 + d$$4;
    var v494 = f$$2 << b$$7;
    var v625 = 32 - b$$7;
    var v495 = f$$2 >>> v625;
    var v260 = v494 | v495;
    return v260 + g$$2;
  }
  function l$$3(f$$3, g$$3, a$$25, e$$19, c$$13, b$$8, d$$5) {
    var v736 = g$$3 ^ a$$25;
    var v626 = v736 ^ e$$19;
    var v496 = f$$3 + v626;
    var v261 = v496 + c$$13;
    f$$3 = v261 + d$$5;
    var v497 = f$$3 << b$$8;
    var v627 = 32 - b$$8;
    var v498 = f$$3 >>> v627;
    var v262 = v497 | v498;
    return v262 + g$$3;
  }
  function r$$2(f$$4, g$$4, a$$26, e$$20, c$$14, b$$9, d$$6) {
    var v818 = ~e$$20;
    var v737 = g$$4 | v818;
    var v628 = a$$26 ^ v737;
    var v499 = f$$4 + v628;
    var v263 = v499 + c$$14;
    f$$4 = v263 + d$$6;
    var v500 = f$$4 << b$$9;
    var v629 = 32 - b$$9;
    var v501 = f$$4 >>> v629;
    var v264 = v500 | v501;
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
  var v502 = {_doReset:v42, _doProcessBlock:v43, _doFinalize:v44};
  var v993 = m$$3.extend(v502);
  n$$4 = v265.MD5 = v993;
  var v266 = o$$3;
  var v994 = m$$3._createHelper(n$$4);
  v266.MD5 = v994;
  var v267 = o$$3;
  var v995 = m$$3._createHmacHelper(n$$4);
  v267.HmacMD5 = v995;
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
      var v630 = -1 != o$$2;
      if (v630) {
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
        var v631 = s$$4 - 1;
        var v503 = i$$3.charAt(v631);
        var v268 = r$$1.indexOf(v503);
        var v504 = s$$4 % 4;
        var v269 = 2 * v504;
        var n$$3 = v268 << v269;
        var v505 = i$$3.charAt(s$$4);
        var v270 = r$$1.indexOf(v505);
        var v632 = s$$4 % 4;
        var v506 = 2 * v632;
        var v271 = 6 - v506;
        var k$$1 = v270 >>> v271;
        var v272 = m$$2 >>> 2;
        introspect(JAM.policy.p14) {
          var v633 = o$$2[v272]
        }
        var v738 = n$$3 | k$$1;
        var v883 = m$$2 % 4;
        var v819 = 8 * v883;
        var v739 = 24 - v819;
        var v634 = v738 << v739;
        o$$2[v272] = v633 | v634;
        m$$2++;
      }
      s$$4++;
      v274 = s$$4 < l$$2;
    }
    return h$$5.create(o$$2, m$$2);
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
      var v884 = m$$1 >>> 2;
      introspect(JAM.policy.p14) {
        var v820 = l$$1[v884]
      }
      var v929 = m$$1 % 4;
      var v885 = 8 * v929;
      var v821 = 24 - v885;
      var v740 = v820 >>> v821;
      var v635 = v740 & 255;
      var v507 = v635 << 16;
      var v930 = m$$1 + 1;
      var v886 = v930 >>> 2;
      introspect(JAM.policy.p14) {
        var v822 = l$$1[v886]
      }
      var v953 = m$$1 + 1;
      var v931 = v953 % 4;
      var v887 = 8 * v931;
      var v823 = 24 - v887;
      var v741 = v822 >>> v823;
      var v636 = v741 & 255;
      var v508 = v636 << 8;
      var v275 = v507 | v508;
      var v824 = m$$1 + 2;
      var v742 = v824 >>> 2;
      introspect(JAM.policy.p14) {
        var v637 = l$$1[v742]
      }
      var v888 = m$$1 + 2;
      var v825 = v888 % 4;
      var v743 = 8 * v825;
      var v638 = 24 - v743;
      var v509 = v637 >>> v638;
      var v276 = v509 & 255;
      var s$$3 = v275 | v276;
      var n$$2 = 0;
      var v510 = 4 > n$$2;
      if (v510) {
        var v744 = .75 * n$$2;
        var v639 = m$$1 + v744;
        v510 = v639 < h$$6;
      }
      var v278 = v510;
      for (;v278;) {
        var v826 = 3 - n$$2;
        var v745 = 6 * v826;
        var v640 = s$$3 >>> v745;
        var v511 = v640 & 63;
        var v277 = o$$1.charAt(v511);
        i$$2.push(v277);
        n$$2++;
        var v512 = 4 > n$$2;
        if (v512) {
          var v746 = .75 * n$$2;
          var v641 = m$$1 + v746;
          v512 = v641 < h$$6;
        }
        v278 = v512;
      }
      m$$1 = m$$1 + 3;
      v279 = m$$1 < h$$6;
    }
    var v281 = l$$1 = o$$1.charAt(64);
    if (v281) {
      var v513 = i$$2.length;
      var v280 = v513 % 4;
      for (;v280;) {
        i$$2.push(l$$1);
        var v514 = i$$2.length;
        v280 = v514 % 4;
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
      var v515 = g.HMAC;
      var v284 = v515.create(a$$22, c$$10);
      return v284.finalize(e$$16);
    }
    return v35;
  }
  function v34(a$$21) {
    function v33(e$$15, c$$9) {
      var v285 = a$$21.create(c$$9);
      return v285.finalize(e$$15);
    }
    return v33;
  }
  function v32() {
    var v286 = f.clone;
    var a$$20 = v286.call(this);
    var v287 = this._hash;
    var v996 = v287.clone();
    a$$20._hash = v996;
    return a$$20;
  }
  function v31(a$$19) {
    if (a$$19) {
      this._append(a$$19);
    }
    this._doFinalize();
    return this._hash;
  }
  function v30(a$$18) {
    this._append(a$$18);
    this._process();
    return this;
  }
  function v29() {
    var v288 = f.reset;
    v288.call(this);
    this._doReset();
    return;
  }
  function v28() {
    this.reset();
    return;
  }
  function v27() {
    var v289 = r.clone;
    var a$$17 = v289.call(this);
    var v290 = this._data;
    var v997 = v290.clone();
    a$$17._data = v997;
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
      var v642 = q | 0;
      var v643 = this._minBufferSize;
      var v516 = v642 - v643;
      v292 = p.max(v516, 0);
    }
    q = v292;
    a$$16 = q * d$$2;
    var v293 = 4 * a$$16;
    b$$5 = p.min(v293, b$$5);
    if (a$$16) {
      var j = 0;
      var v294 = j < a$$16;
      for (;v294;) {
        this._doProcessBlock(c$$8, j);
        j = j + d$$2;
        v294 = j < a$$16;
      }
      j = c$$8.splice(0, a$$16);
      var v517 = e$$14.sigBytes;
      e$$14.sigBytes = v517 - b$$5;
    }
    return o.create(j, b$$5);
  }
  function v25(a$$15) {
    var v518 = typeof a$$15;
    var v295 = "string" == v518;
    if (v295) {
      a$$15 = k.parse(a$$15);
    }
    var v296 = this._data;
    v296.concat(a$$15);
    var v519 = this._nDataBytes;
    var v520 = a$$15.sigBytes;
    this._nDataBytes = v519 + v520;
    return;
  }
  function v24() {
    var v998 = o.create();
    this._data = v998;
    this._nDataBytes = 0;
    return;
  }
  function v23(a$$14) {
    var v521 = encodeURIComponent(a$$14);
    var v297 = unescape(v521);
    return n$$1.parse(v297);
  }
  function v22(a$$13) {
    try {
      var v522 = n$$1.stringify(a$$13);
      var v298 = escape(v522);
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
        var v644 = c$$7[v299]
      }
      var v827 = a$$12.charCodeAt(b$$4);
      var v747 = v827 & 255;
      var v889 = b$$4 % 4;
      var v828 = 8 * v889;
      var v748 = 24 - v828;
      var v645 = v747 << v748;
      c$$7[v299] = v644 | v645;
      b$$4++;
      v300 = b$$4 < e$$12;
    }
    return o.create(c$$7, e$$12);
  }
  function v20(a$$11) {
    var e$$11 = a$$11.words;
    a$$11 = a$$11.sigBytes;
    var c$$6 = [];
    var b$$3 = 0;
    var v302 = b$$3 < a$$11;
    for (;v302;) {
      var v829 = b$$3 >>> 2;
      introspect(JAM.policy.p14) {
        var v749 = e$$11[v829]
      }
      var v890 = b$$3 % 4;
      var v830 = 8 * v890;
      var v750 = 24 - v830;
      var v646 = v749 >>> v750;
      var v523 = v646 & 255;
      var v301 = String.fromCharCode(v523);
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
        var v647 = c$$5[v303]
      }
      var v831 = a$$10.substr(b$$2, 2);
      var v751 = parseInt(v831, 16);
      var v891 = b$$2 % 8;
      var v832 = 4 * v891;
      var v752 = 24 - v832;
      var v648 = v751 << v752;
      c$$5[v303] = v647 | v648;
      b$$2 = b$$2 + 2;
      v304 = b$$2 < e$$10;
    }
    var v305 = e$$10 / 2;
    return o.create(c$$5, v305);
  }
  function v18(a$$9) {
    var e$$9 = a$$9.words;
    a$$9 = a$$9.sigBytes;
    var c$$4 = [];
    var b$$1 = 0;
    var v309 = b$$1 < a$$9;
    for (;v309;) {
      var v649 = b$$1 >>> 2;
      introspect(JAM.policy.p14) {
        var v524 = e$$9[v649]
      }
      var v753 = b$$1 % 4;
      var v650 = 8 * v753;
      var v525 = 24 - v650;
      var v306 = v524 >>> v525;
      var d$$1 = v306 & 255;
      var v526 = d$$1 >>> 4;
      var v307 = v526.toString(16);
      c$$4.push(v307);
      var v527 = d$$1 & 15;
      var v308 = v527.toString(16);
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
      var v651 = p.random();
      var v528 = 4294967296 * v651;
      var v310 = v528 | 0;
      e$$8.push(v310);
      c$$3 = c$$3 + 4;
      v311 = c$$3 < a$$8;
    }
    return o.create(e$$8, a$$8);
  }
  function v16() {
    var v312 = r.clone;
    var a$$7 = v312.call(this);
    var v313 = this.words;
    var v999 = v313.slice(0);
    a$$7.words = v999;
    return a$$7;
  }
  function v15() {
    var a$$6 = this.words;
    var e$$7 = this.sigBytes;
    var v314 = e$$7 >>> 2;
    introspect(JAM.policy.p14) {
      var v652 = a$$6[v314]
    }
    var v892 = e$$7 % 4;
    var v833 = 8 * v892;
    var v754 = 32 - v833;
    var v653 = 4294967295 << v754;
    a$$6[v314] = v652 & v653;
    var v315 = e$$7 / 4;
    var v1000 = p.ceil(v315);
    a$$6.length = v1000;
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
        var v529 = b + d;
        var v316 = v529 >>> 2;
        introspect(JAM.policy.p14) {
          var v654 = e$$6[v316]
        }
        var v932 = d >>> 2;
        introspect(JAM.policy.p14) {
          var v893 = c$$2[v932]
        }
        var v954 = d % 4;
        var v933 = 8 * v954;
        var v894 = 24 - v933;
        var v834 = v893 >>> v894;
        var v755 = v834 & 255;
        var v934 = b + d;
        var v895 = v934 % 4;
        var v835 = 8 * v895;
        var v756 = 24 - v835;
        var v655 = v755 << v756;
        e$$6[v316] = v654 | v655;
        d++;
        v317 = d < a$$5;
      }
    } else {
      var v530 = c$$2.length;
      var v321 = 65535 < v530;
      if (v321) {
        d = 0;
        var v319 = d < a$$5;
        for (;v319;) {
          var v531 = b + d;
          var v318 = v531 >>> 2;
          var v532 = d >>> 2;
          introspect(JAM.policy.p14) {
            e$$6[v318] = c$$2[v532];
          }
          d = d + 4;
          v319 = d < a$$5;
        }
      } else {
        var v320 = e$$6.push;
        v320.apply(e$$6, c$$2);
      }
    }
    var v533 = this.sigBytes;
    this.sigBytes = v533 + a$$5;
    return this;
  }
  function v13(a$$4) {
    var v323 = a$$4 || s$$2;
    return v323.stringify(this);
  }
  function v12(a$$3, e$$5) {
    a$$3 = this.words = a$$3 || [];
    var v324;
    var v535 = e$$5 != h$$4;
    if (v535) {
      v324 = e$$5;
    } else {
      var v534 = a$$3.length;
      v324 = 4 * v534;
    }
    this.sigBytes = v324;
    return;
  }
  function v11() {
    function v10() {
      var v325 = this.$super;
      return v325.extend(this);
    }
    function v9(a$$2) {
      var c$$1;
      for (c$$1 in a$$2) {
        var v326 = a$$2.hasOwnProperty(c$$1);
        if (v326) {
          introspect(JAM.policy.p20) {
            this[c$$1] = a$$2[c$$1];
          }
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
      v328.apply(a$$1, arguments);
      return a$$1;
    }
    function v6(e$$4) {
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
    return {extend:v6, create:v7, init:v8, mixIn:v9, clone:v10};
  }
  var i$$1 = {};
  var l = i$$1.lib = {};
  var v329 = l;
  var v1001 = v11();
  var r = v329.Base = v1001;
  var v330 = l;
  var v536 = {init:v12, toString:v13, concat:v14, clamp:v15, clone:v16, random:v17};
  var v1002 = r.extend(v536);
  var o = v330.WordArray = v1002;
  var m = i$$1.enc = {};
  var s$$2 = m.Hex = {stringify:v18, parse:v19};
  var n$$1 = m.Latin1 = {stringify:v20, parse:v21};
  var k = m.Utf8 = {stringify:v22, parse:v23};
  var v331 = l;
  var v537 = {reset:v24, _append:v25, _process:v26, clone:v27, _minBufferSize:0};
  var v1003 = r.extend(v537);
  var f = v331.BufferedBlockAlgorithm = v1003;
  var v332 = l;
  var v538 = {init:v28, reset:v29, update:v30, finalize:v31, clone:v32, blockSize:16, _createHelper:v34, _createHmacHelper:v36};
  var v1004 = f.extend(v538);
  v332.Hasher = v1004;
  var g = i$$1.algo = {};
  return i$$1;
}
function SNote() {
  function init(divParent$$1, serverPath$$1) {
    m_serverPath = serverPath$$1;
    m_divInternal$$1 = divParent$$1;
    var serverPath$$inline_3 = serverPath$$1;
    var v333 = m_divInternal$$1.style;
    v333.border = "2px solid";
    var v334 = m_divInternal$$1.style;
    v334.backgroundColor = "#FFFFCC";
    m_preNote = document.createElement("pre");
    var JSCompiler_temp_const$$29 = m_preNote;
    var JSCompiler_inline_result$$30;
    var strElemId$$inline_31 = "note";
    JSCompiler_inline_result$$30 = strElemId$$inline_31;
    JSCompiler_temp_const$$29.id = JSCompiler_inline_result$$30;
    m_preNote.className = "write-only non-editable";
    m_divInternal$$1.appendChild(m_preNote);
    m_divButtons = document.createElement("div");
    var v335 = m_divButtons.style;
    v335.textAlign = "left";
    m_divInternal$$1.appendChild(m_divButtons);
    m_imageEdit = createNoteButton("Edit", handleEditButtonClick);
    m_imageView = createNoteButton("Read", handleUnlockButtonClick);
    m_imageDelete = createNoteButton("Delete", handleDeleteButtonClick);
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
    m_divEdit.appendChild(m_inputNote);
    divButtons = createDialogButtonPanel(handleEditDialogOk, handleEditDialogCancel, m_divEdit);
    var v339 = m_divEdit.style;
    v339.display = "none";
    m_divUnlock = createPopupDialog("unlock_dialog", m_divInternal$$1);
    m_inputPassword = createPasswordPanel(m_divUnlock, "Enter password:", "unlock_password");
    createDialogButtonPanel(handleUnlockDialogOk, handleUnlockDialogCancel, m_divUnlock);
    var v340 = m_divUnlock.style;
    v340.display = "none";
    m_divDeleteDialog = createPopupDialog("delete_dialog", m_divInternal$$1);
    var strLabelText$$inline_37 = "Are you sure you want to delete?";
    var parent$$inline_38 = m_divDeleteDialog;
    label = document.createElement("label");
    introspect(JAM.policy.p18) {
      label.textContent = strLabelText$$inline_37;
    }
    parent$$inline_38.appendChild(label);
    createDialogButtonPanel(handleDeleteDialogOk, handleDeleteDialogCancel, m_divDeleteDialog);
    var v341 = m_divDeleteDialog.style;
    v341.display = "none";
    fetch(m_strId, handleSuccessfulFetch, handleFailedFetch);
    return;
  }
  function createNoteButton(strLabel, funcHandleClick) {
    var parent = m_divButtons;
    button = document.createElement("input");
    button.type = "button";
    button.value = strLabel;
    parent.appendChild(button);
    button.onclick = funcHandleClick;
    return button;
  }
  function createPasswordPanel(parent$$1, strPrompt, strPasswordInputId) {
    divPassword = document.createElement("div");
    parent$$1.appendChild(divPassword);
    labelPassword = document.createElement("label");
    introspect(JAM.policy.p18) {
      labelPassword.textContent = strPrompt;
    }
    divPassword.appendChild(labelPassword);
    inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.className = "destructive-read read-only";
    inputPassword.id = strPasswordInputId;
    divPassword.appendChild(inputPassword);
    return inputPassword;
  }
  function createPopupDialog(strDialogId, parent$$3) {
    divDialog = document.createElement("div");
    divDialog.id = strDialogId;
    divDialog.className = "popup";
    parent$$3.appendChild(divDialog);
    return divDialog;
  }
  function createDialogButtonPanel(funcHandleOk, funcHandleCancel, parent$$4) {
    divButtons = document.createElement("div");
    buttonOk = document.createElement("button");
    buttonOk.type = "input";
    introspect(JAM.policy.p18) {
      buttonOk.textContent = "ok";
    }
    buttonOk.onclick = funcHandleOk;
    divButtons.appendChild(buttonOk);
    buttonCancel = document.createElement("button");
    buttonCancel.type = "input";
    introspect(JAM.policy.p18) {
      buttonCancel.textContent = "cancel";
    }
    buttonCancel.onclick = funcHandleCancel;
    divButtons.appendChild(buttonCancel);
    parent$$4.appendChild(divButtons);
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
      introspect(JAM.policy.p18) {
        m_preNote.textContent = "";
      }
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
    var JSCompiler_inline_result$$2;
    JSCompiler_inline_label_decryptText_16: {
      var strPasswd$$inline_15 = destructiveRead(m_inputPassword);
      var v352 = strPasswd$$inline_15 != undefined;
      if (v352) {
        var v350 = CryptoJS.AES;
        wordArrPlainText = v350.decrypt(m_strCipherText, strPasswd$$inline_15);
        var v539 = CryptoJS.enc;
        var v351 = v539.Utf8;
        JSCompiler_inline_result$$2 = v351.stringify(wordArrPlainText);
        break JSCompiler_inline_label_decryptText_16;
      } else {
        JSCompiler_inline_result$$2 = undefined;
        break JSCompiler_inline_label_decryptText_16;
      }
    }
    introspect(JAM.policy.p18) {
      m_preNote.textContent = JSCompiler_inline_result$$2;
    }
    closeDialogsBoxes();
    var v353 = m_imageEdit.style;
    v353.display = "none";
    var v354 = m_imageView.style;
    v354.display = "none";
    var v355 = m_imageDelete.style;
    v355.display = "inline";
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
    var v540 = strNewPass.length;
    var v360 = v540 == 0;
    if (v360) {
      alert("Must have non-empty password");
    } else {
      var v359 = strNewPass != strNewPassRetype;
      if (v359) {
        alert("Passwords do not match");
      } else {
        var v358 = destructiveRead(m_inputNote);
        encryptAndSave(v358, v2);
      }
    }
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
      var v656 = xmlhttp.readyState;
      var v541 = v656 == 4;
      if (v541) {
        var v657 = xmlhttp.status;
        v541 = v657 == 200;
      }
      var v367 = v541;
      if (v367) {
        var v364 = xmlhttp.responseText;
        jsonObjResponse = JSON.parse(v364);
        var v366 = jsonObjResponse.bSuccess;
        if (v366) {
          var v365 = jsonObjResponse.strCipherText;
          callbackSuccess(v365);
        } else {
          callbackFail();
        }
      }
      return;
    }
    xmlhttp = new XMLHttpRequest;
    xmlhttp.onreadystatechange = v3;
    var v542 = m_serverPath + "FetchSNote.php";
    var v368 = v542 + "?snotehandle=";
    var v369 = encodeURIComponent(strId$$2);
    var strUrl = v368 + v369;
    xmlhttp.open("GET", strUrl, true);
    xmlhttp.send();
    return;
  }
  function encryptAndSave(strNote, callbackDone) {
    var strPassword = strNewPass;
    var JSCompiler_temp_const$$0 = save;
    var JSCompiler_inline_result$$1;
    JSCompiler_inline_label_encryptText_25: {
      var strPasswd$$inline_24 = strPassword;
      if (strPasswd$$inline_24) {
        var v543 = CryptoJS.enc;
        var v370 = v543.Utf8;
        wordArrPlainText = v370.parse(strNote);
        var v544 = CryptoJS.AES;
        var v371 = v544.encrypt(wordArrPlainText, strPasswd$$inline_24);
        JSCompiler_inline_result$$1 = v371.toString();
      } else {
        JSCompiler_inline_result$$1 = undefined;
      }
    }
    JSCompiler_temp_const$$0(JSCompiler_inline_result$$1, callbackDone);
    return;
  }
  function save(strEncNote, callbackDone$$1) {
    function v4() {
      var v658 = xmlhttp.readyState;
      var v545 = v658 == 4;
      if (v545) {
        var v659 = xmlhttp.status;
        v545 = v659 == 200;
      }
      var v375 = v545;
      if (v375) {
        var v372 = xmlhttp.responseText;
        jsonObjResponse = JSON.parse(v372);
        var v374 = jsonObjResponse.bSuccess;
        if (v374) {
          var v373 = jsonObjResponse.strId;
          callbackDone$$1(v373);
        } else {
          callbackDone$$1("");
        }
      }
      return;
    }
    xmlhttp = new XMLHttpRequest;
    xmlhttp.onreadystatechange = v4;
    var v376 = m_serverPath + "SaveSNote.php";
    xmlhttp.open("POST", v376, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var v757 = encodeURIComponent(m_strId);
    var v660 = "snoteHandle=" + v757;
    var v546 = v660 + "&snote=";
    var v377 = v546 + strEncNote;
    xmlhttp.send(v377);
    return;
  }
  function deleteSNote(callbackSuccess$$1, callbackFail$$1) {
    function v5() {
      var v378 = xmlhttp.responseText;
      jsonObjResponse = JSON.parse(v378);
      var v380 = jsonObjResponse.bSuccess;
      if (v380) {
        var v379 = jsonObjResponse.strId;
        callbackSuccess$$1(v379);
      } else {
        callbackFail$$1();
      }
      return;
    }
    xmlhttp = new XMLHttpRequest;
    xmlhttp.onreadystatechange = v5;
    var v381 = m_serverPath + "DeleteSNote.php";
    xmlhttp.open("POST", v381, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var v547 = encodeURIComponent(m_strId);
    var v382 = "snoteHandle=" + v547;
    xmlhttp.send(v382);
    return;
  }
  var serverPath = "./SNote/";
  var divParent = document.getElementById("div1");
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
function SNoteSwindler() {
  function createButton(strLabel$$1, strFunc) {
    var parent$$5 = m_divInternal;
    button = document.createElement("button");
    button.type = "input";
    introspect(JAM.policy.p18) {
      button.textContent = strLabel$$1;
    }
    button.onclick = strFunc;
    parent$$5.appendChild(button);
    return;
  }
  function genNoteElemId() {
    var strElemId$$1 = "note";
    return strElemId$$1;
  }
  function forgeNote() {
    var v383 = genNoteElemId();
    preNote = document.getElementById(v383);
    introspect(JAM.policy.p18) {
      preNote.textContent = "Forged note";
    }
    return;
  }
  function forgeNoteInnerHTML() {
    var v384 = genNoteElemId();
    preNote = document.getElementById(v384);
    introspect(JAM.policy.p3) {
      preNote.innerHTML = "Forged note";
    }
    return;
  }
  function readNote() {
    var v385 = genNoteElemId();
    preNote = document.getElementById(v385);
    introspect(JAM.policy.p12) {
      var v386 = preNote.textContent
    }
    alert(v386);
    return;
  }
  function readNoteInnerHTML() {
    var v387 = genNoteElemId();
    preNote = document.getElementById(v387);
    introspect(JAM.policy.p7) {
      var v388 = preNote.innerHTML
    }
    alert(v388);
    return;
  }
  var serverPath$$4 = "";
  var divParent$$2 = document.getElementById("div2");
  var strNoteId = "div1";
  m_divParent = null;
  m_divInternal = null;
  m_strNoteId = strNoteId;
  m_divParent = divParent$$2;
  m_divInternal = document.createElement("div");
  var v389 = m_divInternal.style;
  v389.border = "2px solid";
  var v390 = m_divInternal.style;
  v390.backgroundColor = "#CCCCCC";
  m_divParent.appendChild(m_divInternal);
  createButton("Forge Note", forgeNote);
  createButton("Forge Note Inner HTML", forgeNoteInnerHTML);
  createButton("Read Note", readNote);
  createButton("Read Note Inner HTML", readNoteInnerHTML);
  return;
}
var v391 = CryptoJS;
var v548 = !v391;
if (v548) {
  v391 = v37(Math);
}
var CryptoJS = v391;
v40();
v45(Math);
v49();
var v549 = CryptoJS.lib;
var v392 = v549.Cipher;
var v550 = !v392;
if (v550) {
  v82();
}
v88();
new SNote;
new SNoteSwindler
