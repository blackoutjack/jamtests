
JAM.startProfile('load');
function v88() {
  function v87(a$$54, b$$34, d$$20, e$$34, f$$18, h$$15, i$$13, g$$11) {
    var l$$8 = this._nRounds;
    introspect(JAM.policy.p15) {
      var v89 = a$$54[b$$34]
    }
    introspect(JAM.policy.p15) {
      var v90 = d$$20[0]
    }
    var k$$6 = v89 ^ v90;
    var v394 = b$$34 + 1;
    introspect(JAM.policy.p15) {
      var v91 = a$$54[v394]
    }
    introspect(JAM.policy.p15) {
      var v92 = d$$20[1]
    }
    var m$$7 = v91 ^ v92;
    var v395 = b$$34 + 2;
    introspect(JAM.policy.p15) {
      var v93 = a$$54[v395]
    }
    introspect(JAM.policy.p15) {
      var v94 = d$$20[2]
    }
    var o$$6 = v93 ^ v94;
    var v396 = b$$34 + 3;
    introspect(JAM.policy.p15) {
      var v95 = a$$54[v396]
    }
    introspect(JAM.policy.p15) {
      var v96 = d$$20[3]
    }
    var n$$8 = v95 ^ v96;
    var p$$7 = 4;
    var r$$6 = 1;
    var v105 = r$$6 < l$$8;
    for (;v105;) {
      var v763 = k$$6 >>> 24;
      introspect(JAM.policy.p15) {
        var v666 = e$$34[v763]
      }
      var v841 = m$$7 >>> 16;
      var v764 = v841 & 255;
      introspect(JAM.policy.p15) {
        var v667 = f$$18[v764]
      }
      var v556 = v666 ^ v667;
      var v765 = o$$6 >>> 8;
      var v668 = v765 & 255;
      introspect(JAM.policy.p15) {
        var v557 = h$$15[v668]
      }
      var v397 = v556 ^ v557;
      var v558 = n$$8 & 255;
      introspect(JAM.policy.p15) {
        var v398 = i$$13[v558]
      }
      var v97 = v397 ^ v398;
      var v399 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p15) {
        var v98 = d$$20[v399]
      }
      var s$$8 = v97 ^ v98;
      var v766 = m$$7 >>> 24;
      introspect(JAM.policy.p15) {
        var v669 = e$$34[v766]
      }
      var v842 = o$$6 >>> 16;
      var v767 = v842 & 255;
      introspect(JAM.policy.p15) {
        var v670 = f$$18[v767]
      }
      var v559 = v669 ^ v670;
      var v768 = n$$8 >>> 8;
      var v671 = v768 & 255;
      introspect(JAM.policy.p15) {
        var v560 = h$$15[v671]
      }
      var v400 = v559 ^ v560;
      var v561 = k$$6 & 255;
      introspect(JAM.policy.p15) {
        var v401 = i$$13[v561]
      }
      var v99 = v400 ^ v401;
      var v402 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p15) {
        var v100 = d$$20[v402]
      }
      var u = v99 ^ v100;
      var v769 = o$$6 >>> 24;
      introspect(JAM.policy.p15) {
        var v672 = e$$34[v769]
      }
      var v843 = n$$8 >>> 16;
      var v770 = v843 & 255;
      introspect(JAM.policy.p15) {
        var v673 = f$$18[v770]
      }
      var v562 = v672 ^ v673;
      var v771 = k$$6 >>> 8;
      var v674 = v771 & 255;
      introspect(JAM.policy.p15) {
        var v563 = h$$15[v674]
      }
      var v403 = v562 ^ v563;
      var v564 = m$$7 & 255;
      introspect(JAM.policy.p15) {
        var v404 = i$$13[v564]
      }
      var v101 = v403 ^ v404;
      var v405 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p15) {
        var v102 = d$$20[v405]
      }
      var v = v101 ^ v102;
      var v772 = n$$8 >>> 24;
      introspect(JAM.policy.p15) {
        var v675 = e$$34[v772]
      }
      var v844 = k$$6 >>> 16;
      var v773 = v844 & 255;
      introspect(JAM.policy.p15) {
        var v676 = f$$18[v773]
      }
      var v565 = v675 ^ v676;
      var v774 = m$$7 >>> 8;
      var v677 = v774 & 255;
      introspect(JAM.policy.p15) {
        var v566 = h$$15[v677]
      }
      var v406 = v565 ^ v566;
      var v567 = o$$6 & 255;
      introspect(JAM.policy.p15) {
        var v407 = i$$13[v567]
      }
      var v103 = v406 ^ v407;
      var v408 = p$$7;
      p$$7 = p$$7 + 1;
      introspect(JAM.policy.p15) {
        var v104 = d$$20[v408]
      }
      n$$8 = v103 ^ v104;
      k$$6 = s$$8;
      m$$7 = u;
      o$$6 = v;
      r$$6 = r$$6 + 1;
      v105 = r$$6 < l$$8;
    }
    var v845 = k$$6 >>> 24;
    introspect(JAM.policy.p15) {
      var v775 = g$$11[v845]
    }
    var v678 = v775 << 24;
    var v901 = m$$7 >>> 16;
    var v846 = v901 & 255;
    introspect(JAM.policy.p15) {
      var v776 = g$$11[v846]
    }
    var v679 = v776 << 16;
    var v568 = v678 | v679;
    var v847 = o$$6 >>> 8;
    var v777 = v847 & 255;
    introspect(JAM.policy.p15) {
      var v680 = g$$11[v777]
    }
    var v569 = v680 << 8;
    var v409 = v568 | v569;
    var v570 = n$$8 & 255;
    introspect(JAM.policy.p15) {
      var v410 = g$$11[v570]
    }
    var v106 = v409 | v410;
    var v411 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p15) {
      var v107 = d$$20[v411]
    }
    s$$8 = v106 ^ v107;
    var v848 = m$$7 >>> 24;
    introspect(JAM.policy.p15) {
      var v778 = g$$11[v848]
    }
    var v681 = v778 << 24;
    var v902 = o$$6 >>> 16;
    var v849 = v902 & 255;
    introspect(JAM.policy.p15) {
      var v779 = g$$11[v849]
    }
    var v682 = v779 << 16;
    var v571 = v681 | v682;
    var v850 = n$$8 >>> 8;
    var v780 = v850 & 255;
    introspect(JAM.policy.p15) {
      var v683 = g$$11[v780]
    }
    var v572 = v683 << 8;
    var v412 = v571 | v572;
    var v573 = k$$6 & 255;
    introspect(JAM.policy.p15) {
      var v413 = g$$11[v573]
    }
    var v108 = v412 | v413;
    var v414 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p15) {
      var v109 = d$$20[v414]
    }
    u = v108 ^ v109;
    var v851 = o$$6 >>> 24;
    introspect(JAM.policy.p15) {
      var v781 = g$$11[v851]
    }
    var v684 = v781 << 24;
    var v903 = n$$8 >>> 16;
    var v852 = v903 & 255;
    introspect(JAM.policy.p15) {
      var v782 = g$$11[v852]
    }
    var v685 = v782 << 16;
    var v574 = v684 | v685;
    var v853 = k$$6 >>> 8;
    var v783 = v853 & 255;
    introspect(JAM.policy.p15) {
      var v686 = g$$11[v783]
    }
    var v575 = v686 << 8;
    var v415 = v574 | v575;
    var v576 = m$$7 & 255;
    introspect(JAM.policy.p15) {
      var v416 = g$$11[v576]
    }
    var v110 = v415 | v416;
    var v417 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p15) {
      var v111 = d$$20[v417]
    }
    v = v110 ^ v111;
    var v854 = n$$8 >>> 24;
    introspect(JAM.policy.p15) {
      var v784 = g$$11[v854]
    }
    var v687 = v784 << 24;
    var v904 = k$$6 >>> 16;
    var v855 = v904 & 255;
    introspect(JAM.policy.p15) {
      var v785 = g$$11[v855]
    }
    var v688 = v785 << 16;
    var v577 = v687 | v688;
    var v856 = m$$7 >>> 8;
    var v786 = v856 & 255;
    introspect(JAM.policy.p15) {
      var v689 = g$$11[v786]
    }
    var v578 = v689 << 8;
    var v418 = v577 | v578;
    var v579 = o$$6 & 255;
    introspect(JAM.policy.p15) {
      var v419 = g$$11[v579]
    }
    var v112 = v418 | v419;
    var v420 = p$$7;
    p$$7 = p$$7 + 1;
    introspect(JAM.policy.p15) {
      var v113 = d$$20[v420]
    }
    n$$8 = v112 ^ v113;
    introspect(JAM.policy.p21) {
      a$$54[b$$34] = s$$8;
    }
    var v114 = b$$34 + 1;
    introspect(JAM.policy.p21) {
      a$$54[v114] = u;
    }
    var v115 = b$$34 + 2;
    introspect(JAM.policy.p21) {
      a$$54[v115] = v;
    }
    var v116 = b$$34 + 3;
    introspect(JAM.policy.p21) {
      a$$54[v116] = n$$8;
    }
    return;
  }
  function v86(c$$31, b$$33) {
    var v117 = b$$33 + 1;
    introspect(JAM.policy.p15) {
      var d$$19 = c$$31[v117]
    }
    var v118 = b$$33 + 1;
    var v421 = b$$33 + 3;
    introspect(JAM.policy.p21) {
      c$$31[v118] = c$$31[v421];
    }
    var v119 = b$$33 + 3;
    introspect(JAM.policy.p21) {
      c$$31[v119] = d$$19;
    }
    var v120 = this._invKeySchedule;
    this._doCryptBlock(c$$31, b$$33, v120, k$$5, f$$17, g$$10, a$$52, r$$5);
    var v121 = b$$33 + 1;
    introspect(JAM.policy.p15) {
      d$$19 = c$$31[v121];
    }
    var v122 = b$$33 + 1;
    var v422 = b$$33 + 3;
    introspect(JAM.policy.p21) {
      c$$31[v122] = c$$31[v422];
    }
    var v123 = b$$33 + 3;
    introspect(JAM.policy.p21) {
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
    var v423 = this._nRounds = d$$18 + 6;
    var v126 = v423 + 1;
    c$$30 = 4 * v126;
    var i$$12 = this._keySchedule = [];
    var j$$6 = 0;
    var v131 = j$$6 < c$$30;
    for (;v131;) {
      var v130 = j$$6 < d$$18;
      if (v130) {
        introspect(JAM.policy.p21) {
          i$$12[j$$6] = b$$31[j$$6];
        }
      } else {
        var v127 = j$$6 - 1;
        introspect(JAM.policy.p15) {
          var h$$14 = i$$12[v127]
        }
        var v128;
        var v425 = j$$6 % d$$18;
        if (v425) {
          var v580 = 6 < d$$18;
          if (v580) {
            var v690 = j$$6 % d$$18;
            v580 = 4 == v690;
          }
          var v424 = v580;
          if (v424) {
            var v905 = h$$14 >>> 24;
            introspect(JAM.policy.p15) {
              var v857 = l$$7[v905]
            }
            var v787 = v857 << 24;
            var v940 = h$$14 >>> 16;
            var v906 = v940 & 255;
            introspect(JAM.policy.p15) {
              var v858 = l$$7[v906]
            }
            var v788 = v858 << 16;
            var v691 = v787 | v788;
            var v907 = h$$14 >>> 8;
            var v859 = v907 & 255;
            introspect(JAM.policy.p15) {
              var v789 = l$$7[v859]
            }
            var v692 = v789 << 8;
            var v581 = v691 | v692;
            var v693 = h$$14 & 255;
            introspect(JAM.policy.p15) {
              var v582 = l$$7[v693]
            }
            v424 = h$$14 = v581 | v582;
          }
          v128 = v424;
        } else {
          var v694 = h$$14 << 8;
          var v695 = h$$14 >>> 24;
          h$$14 = v694 | v695;
          var v941 = h$$14 >>> 24;
          introspect(JAM.policy.p15) {
            var v908 = l$$7[v941]
          }
          var v860 = v908 << 24;
          var v960 = h$$14 >>> 16;
          var v942 = v960 & 255;
          introspect(JAM.policy.p15) {
            var v909 = l$$7[v942]
          }
          var v861 = v909 << 16;
          var v790 = v860 | v861;
          var v943 = h$$14 >>> 8;
          var v910 = v943 & 255;
          introspect(JAM.policy.p15) {
            var v862 = l$$7[v910]
          }
          var v791 = v862 << 8;
          var v696 = v790 | v791;
          var v792 = h$$14 & 255;
          introspect(JAM.policy.p15) {
            var v697 = l$$7[v792]
          }
          h$$14 = v696 | v697;
          var v911 = j$$6 / d$$18;
          var v863 = v911 | 0;
          introspect(JAM.policy.p15) {
            var v793 = e$$32[v863]
          }
          var v698 = v793 << 24;
          v128 = h$$14 = h$$14 ^ v698;
        }
        v128;
        var v426 = j$$6 - d$$18;
        introspect(JAM.policy.p15) {
          var v129 = i$$12[v426]
        }
        introspect(JAM.policy.p21) {
          i$$12[j$$6] = v129 ^ h$$14;
        }
      }
      j$$6 = j$$6 + 1;
      v131 = j$$6 < c$$30;
    }
    b$$31 = this._invKeySchedule = [];
    d$$18 = 0;
    var v132 = d$$18 < c$$30;
    for (;v132;) {
      j$$6 = c$$30 - d$$18;
      var v583;
      var v700 = d$$18 % 4;
      if (v700) {
        introspect(JAM.policy.p15) {
          v583 = i$$12[j$$6];
        }
      } else {
        var v699 = j$$6 - 4;
        introspect(JAM.policy.p15) {
          v583 = i$$12[v699];
        }
      }
      h$$14 = v583;
      var v427;
      var v701 = 4 > d$$18;
      var v794 = !v701;
      if (v794) {
        v701 = 4 >= j$$6;
      }
      var v586 = v701;
      if (v586) {
        v427 = h$$14;
      } else {
        var v912 = h$$14 >>> 24;
        introspect(JAM.policy.p15) {
          var v864 = l$$7[v912]
        }
        introspect(JAM.policy.p15) {
          var v795 = k$$5[v864]
        }
        var v944 = h$$14 >>> 16;
        var v913 = v944 & 255;
        introspect(JAM.policy.p15) {
          var v865 = l$$7[v913]
        }
        introspect(JAM.policy.p15) {
          var v796 = f$$17[v865]
        }
        var v702 = v795 ^ v796;
        var v914 = h$$14 >>> 8;
        var v866 = v914 & 255;
        introspect(JAM.policy.p15) {
          var v797 = l$$7[v866]
        }
        introspect(JAM.policy.p15) {
          var v703 = g$$10[v797]
        }
        var v584 = v702 ^ v703;
        var v798 = h$$14 & 255;
        introspect(JAM.policy.p15) {
          var v704 = l$$7[v798]
        }
        introspect(JAM.policy.p15) {
          var v585 = a$$52[v704]
        }
        v427 = v584 ^ v585;
      }
      introspect(JAM.policy.p21) {
        b$$31[d$$18] = v427;
      }
      d$$18 = d$$18 + 1;
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
      var v429 = 128 > b$$30;
      if (v429) {
        v133 = b$$30 << 1;
      } else {
        var v428 = b$$30 << 1;
        v133 = v428 ^ 283;
      }
      introspect(JAM.policy.p21) {
        c$$29[b$$30] = v133;
      }
      b$$30 = b$$30 + 1;
      v134 = 256 > b$$30;
    }
    var d$$17 = 0;
    var e$$33 = 0;
    b$$30 = 0;
    var v155 = 256 > b$$30;
    for (;v155;) {
      var v705 = e$$33 << 1;
      var v587 = e$$33 ^ v705;
      var v588 = e$$33 << 2;
      var v430 = v587 ^ v588;
      var v431 = e$$33 << 3;
      var v135 = v430 ^ v431;
      var v136 = e$$33 << 4;
      var j$$5 = v135 ^ v136;
      var v432 = j$$5 >>> 8;
      var v433 = j$$5 & 255;
      var v137 = v432 ^ v433;
      j$$5 = v137 ^ 99;
      introspect(JAM.policy.p21) {
        l$$7[d$$17] = j$$5;
      }
      introspect(JAM.policy.p21) {
        r$$5[j$$5] = d$$17;
      }
      introspect(JAM.policy.p15) {
        var i$$11 = c$$29[d$$17]
      }
      introspect(JAM.policy.p15) {
        var h$$13 = c$$29[i$$11]
      }
      introspect(JAM.policy.p15) {
        var p$$6 = c$$29[h$$13]
      }
      introspect(JAM.policy.p15) {
        var v434 = c$$29[j$$5]
      }
      var v138 = 257 * v434;
      var v139 = 16843008 * j$$5;
      var t = v138 ^ v139;
      var v140 = t << 24;
      var v141 = t >>> 8;
      introspect(JAM.policy.p21) {
        o$$5[d$$17] = v140 | v141;
      }
      var v142 = t << 16;
      var v143 = t >>> 16;
      introspect(JAM.policy.p21) {
        m$$6[d$$17] = v142 | v143;
      }
      var v144 = t << 8;
      var v145 = t >>> 24;
      introspect(JAM.policy.p21) {
        s$$7[d$$17] = v144 | v145;
      }
      introspect(JAM.policy.p21) {
        n$$7[d$$17] = t;
      }
      var v589 = 16843009 * p$$6;
      var v590 = 65537 * h$$13;
      var v435 = v589 ^ v590;
      var v436 = 257 * i$$11;
      var v146 = v435 ^ v436;
      var v147 = 16843008 * d$$17;
      t = v146 ^ v147;
      var v148 = t << 24;
      var v149 = t >>> 8;
      introspect(JAM.policy.p21) {
        k$$5[j$$5] = v148 | v149;
      }
      var v150 = t << 16;
      var v151 = t >>> 16;
      introspect(JAM.policy.p21) {
        f$$17[j$$5] = v150 | v151;
      }
      var v152 = t << 8;
      var v153 = t >>> 24;
      introspect(JAM.policy.p21) {
        g$$10[j$$5] = v152 | v153;
      }
      introspect(JAM.policy.p21) {
        a$$52[j$$5] = t;
      }
      var v154;
      if (d$$17) {
        var v867 = p$$6 ^ i$$11;
        introspect(JAM.policy.p15) {
          var v799 = c$$29[v867]
        }
        introspect(JAM.policy.p15) {
          var v706 = c$$29[v799]
        }
        introspect(JAM.policy.p15) {
          var v591 = c$$29[v706]
        }
        d$$17 = i$$11 ^ v591;
        introspect(JAM.policy.p15) {
          var v800 = c$$29[e$$33]
        }
        introspect(JAM.policy.p15) {
          var v707 = c$$29[v800]
        }
        v154 = e$$33 = e$$33 ^ v707;
      } else {
        v154 = d$$17 = e$$33 = 1;
      }
      v154;
      b$$30 = b$$30 + 1;
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
  var v437 = {_doReset:v84, encryptBlock:v85, decryptBlock:v86, _doCryptBlock:v87, keySize:8};
  var v980 = h$$12.extend(v437);
  i$$10 = v157.AES = v980;
  var v158 = p$$5;
  var v981 = h$$12._createHelper(i$$10);
  v158.AES = v981;
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
    var v438 = !f$$14;
    if (v438) {
      f$$14 = r$$4.random(8);
    }
    var v592 = c$$26 + e$$31;
    var v439 = {keySize:v592};
    var v173 = s$$6.create(v439);
    b$$29 = v173.compute(b$$29, f$$14);
    var v440 = b$$29.words;
    var v174 = v440.slice(c$$26);
    var v175 = 4 * e$$31;
    e$$31 = r$$4.create(v174, v175);
    b$$29.sigBytes = 4 * c$$26;
    var v176 = {key:b$$29, iv:e$$31, salt:f$$14};
    return a$$30.create(v176);
  }
  function v78(a$$49, c$$25) {
    var v177;
    var v593 = typeof a$$49;
    var v441 = "string" == v593;
    if (v441) {
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
    var v442 = f$$12.iv;
    var v443 = f$$12.mode;
    var v444 = f$$12.padding;
    var v445 = b$$28.blockSize;
    var v446 = e$$29.format;
    var v183 = {ciphertext:d$$16, key:c$$23, iv:v442, algorithm:b$$28, mode:v443, padding:v444, blockSize:v445, formatter:v446};
    return a$$30.create(v183);
  }
  function v75(b$$27) {
    b$$27 = m$$5.parse(b$$27);
    var d$$15 = b$$27.words;
    introspect(JAM.policy.p15) {
      var v594 = d$$15[0]
    }
    var v447 = 1398893684 == v594;
    if (v447) {
      introspect(JAM.policy.p15) {
        var v595 = d$$15[1]
      }
      v447 = 1701076831 == v595;
    }
    var v185 = v447;
    if (v185) {
      var v184 = d$$15.slice(2, 4);
      var c$$22 = r$$4.create(v184);
      d$$15.splice(0, 4);
      var v448 = b$$27.sigBytes;
      b$$27.sigBytes = v448 - 16;
    }
    var v186 = {ciphertext:b$$27, salt:c$$22};
    return a$$30.create(v186);
  }
  function v74(a$$47) {
    var d$$14 = a$$47.ciphertext;
    a$$47 = a$$47.salt;
    var v449;
    if (a$$47) {
      var v801 = [1398893684, 1701076831];
      var v708 = r$$4.create(v801);
      var v596 = v708.concat(a$$47);
      v449 = v596.concat(d$$14);
    } else {
      v449 = d$$14;
    }
    var v187 = v449;
    d$$14 = v187.toString(m$$5);
    return d$$14 = d$$14.replace(/(.{64})/g, "$1\n");
  }
  function v73(a$$46) {
    var v450 = a$$46;
    var v597 = !v450;
    if (v597) {
      v450 = this.formatter;
    }
    var v188 = v450;
    return v188.stringify(this);
  }
  function v72(a$$45) {
    this.mixIn(a$$45);
    return;
  }
  function v71() {
    var v189 = this.cfg;
    var b$$26 = v189.padding;
    var v451 = this._xformMode;
    var v452 = this._ENC_XFORM_MODE;
    var v193 = v451 == v452;
    if (v193) {
      var v190 = this._data;
      var v191 = this.blockSize;
      b$$26.pad(v190, v191);
      var v192 = !0;
      var a$$44 = this._process(v192);
    } else {
      var v453 = !0;
      a$$44 = this._process(v453);
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
    var v454 = this._xformMode;
    var v455 = this._ENC_XFORM_MODE;
    var v196 = v454 == v455;
    if (v196) {
      var c$$21 = b$$24.createEncryptor
    } else {
      c$$21 = b$$24.createDecryptor;
      this._minBufferSize = 1;
    }
    var v456 = a$$42;
    if (v456) {
      v456 = a$$42.words;
    }
    var v197 = v456;
    var v982 = c$$21.call(b$$24, this, v197);
    this._mode = v982;
    return;
  }
  function v68(b$$23) {
    var v457 = b$$23.sigBytes;
    var v709 = b$$23.words;
    var v868 = b$$23.sigBytes;
    var v802 = v868 - 1;
    var v710 = v802 >>> 2;
    introspect(JAM.policy.p15) {
      var v598 = v709[v710]
    }
    var v458 = v598 & 255;
    b$$23.sigBytes = v457 - v458;
    return;
  }
  function v67(b$$22, a$$41) {
    var c$$20 = 4 * a$$41;
    var v459 = b$$22.sigBytes;
    var v198 = v459 % c$$20;
    c$$20 = c$$20 - v198;
    var v599 = c$$20 << 24;
    var v600 = c$$20 << 16;
    var v460 = v599 | v600;
    var v461 = c$$20 << 8;
    var v199 = v460 | v461;
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
      var v983 = a$$39.slice(d$$12, v202);
      this._prevBlock = v983;
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
        introspect(JAM.policy.p15) {
          var v601 = b$$21[v204]
        }
        introspect(JAM.policy.p15) {
          var v602 = c$$17[e$$25]
        }
        introspect(JAM.policy.p21) {
          b$$21[v204] = v601 ^ v602;
        }
        e$$25 = e$$25 + 1;
        v205 = e$$25 < d$$11;
      }
      return;
    }
    var a$$37 = f$$9.extend();
    var v206 = a$$37;
    var v462 = {processBlock:v64};
    var v984 = a$$37.extend(v462);
    v206.Encryptor = v984;
    var v207 = a$$37;
    var v463 = {processBlock:v65};
    var v985 = a$$37.extend(v463);
    v207.Decryptor = v985;
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
        var v464;
        var v711 = typeof q$$3;
        var v603 = "string" == v711;
        if (v603) {
          v464 = c$$16;
        } else {
          v464 = e$$24;
        }
        var v211 = v464;
        return v211.decrypt(b$$16, a$$33, q$$3, j$$2);
      }
      function v56(a$$32, q$$2, j$$1) {
        var v465;
        var v712 = typeof q$$2;
        var v604 = "string" == v712;
        if (v604) {
          v465 = c$$16;
        } else {
          v465 = e$$24;
        }
        var v212 = v465;
        return v212.encrypt(b$$16, a$$32, q$$2, j$$1);
      }
      return{encrypt:v56, decrypt:v57};
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
    var v986 = v214.extend(a$$31);
    this.cfg = v986;
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
  var v605 = l$$6.extend();
  var v606 = v59();
  var v466 = {cfg:v605, createEncryptor:v50, createDecryptor:v51, init:v52, reset:v53, process:v54, finalize:v55, keySize:4, ivSize:4, _ENC_XFORM_MODE:1, _DEC_XFORM_MODE:2, _createHelper:v606};
  var v987 = o$$4.extend(v466);
  var n$$6 = v219.Cipher = v987;
  var v220 = i$$9;
  var v467 = {_doFinalize:v60, blockSize:1};
  var v988 = n$$6.extend(v467);
  v220.StreamCipher = v988;
  var k$$4 = h$$11.mode = {};
  var v221 = i$$9;
  var v468 = {createEncryptor:v61, createDecryptor:v62, init:v63};
  var v989 = l$$6.extend(v468);
  var f$$9 = v221.BlockCipherMode = v989;
  var v222 = k$$4;
  var v990 = v66();
  k$$4 = v222.CBC = v990;
  var v223 = h$$11.pad = {};
  var g$$8 = v223.Pkcs7 = {pad:v67, unpad:v68};
  var v224 = i$$9;
  var v713 = n$$6.cfg;
  var v714 = {mode:k$$4, padding:g$$8};
  var v607 = v713.extend(v714);
  var v469 = {cfg:v607, reset:v69, _doProcessBlock:v70, _doFinalize:v71, blockSize:4};
  var v991 = n$$6.extend(v469);
  v224.BlockCipher = v991;
  var v225 = i$$9;
  var v470 = {init:v72, toString:v73};
  var v992 = l$$6.extend(v470);
  var a$$30 = v225.CipherParams = v992;
  var v226 = h$$11.format = {};
  k$$4 = v226.OpenSSL = {stringify:v74, parse:v75};
  var v227 = i$$9;
  var v715 = {format:k$$4};
  var v608 = l$$6.extend(v715);
  var v471 = {cfg:v608, encrypt:v76, decrypt:v77, _parse:v78};
  var v993 = l$$6.extend(v471);
  var e$$24 = v227.SerializableCipher = v993;
  var v228 = h$$11.kdf = {};
  h$$11 = v228.OpenSSL = {compute:v79};
  var v229 = i$$9;
  var v716 = e$$24.cfg;
  var v717 = {kdf:h$$11};
  var v609 = v716.extend(v717);
  var v472 = {cfg:v609, encrypt:v80, decrypt:v81};
  var v994 = e$$24.extend(v472);
  var c$$16 = v229.PasswordBasedCipher = v994;
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
    var v473 = f$$8.length;
    var v234 = v473 < g$$7;
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
        e$$23 = e$$23 + 1;
        v233 = e$$23 < h$$9;
      }
      k$$3.concat(a$$29);
      var v474 = f$$8.length;
      v234 = v474 < g$$7;
    }
    k$$3.sigBytes = 4 * g$$7;
    return k$$3;
  }
  function v46(i$$6) {
    var v235 = this.cfg;
    var v995 = v235.extend(i$$6);
    this.cfg = v995;
    return;
  }
  var p$$3 = CryptoJS;
  var h$$8 = p$$3.lib;
  var i$$5 = h$$8.Base;
  var l$$4 = h$$8.WordArray;
  h$$8 = p$$3.algo;
  var v236 = h$$8;
  var v803 = h$$8.MD5;
  var v718 = {keySize:4, hasher:v803, iterations:1};
  var v610 = i$$5.extend(v718);
  var v475 = {cfg:v610, init:v46, compute:v47};
  var v996 = i$$5.extend(v475);
  var r$$3 = v236.EvpKDF = v996;
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
    introspect(JAM.policy.p15) {
      var v611 = g$$6[v239]
    }
    var v804 = e$$22 % 32;
    var v719 = 24 - v804;
    var v612 = 128 << v719;
    introspect(JAM.policy.p21) {
      g$$6[v239] = v611 | v612;
    }
    var v720 = e$$22 + 64;
    var v613 = v720 >>> 9;
    var v476 = v613 << 4;
    var v240 = v476 + 14;
    var v721 = a$$28 << 8;
    var v722 = a$$28 >>> 24;
    var v614 = v721 | v722;
    var v477 = v614 & 16711935;
    var v723 = a$$28 << 24;
    var v724 = a$$28 >>> 8;
    var v615 = v723 | v724;
    var v478 = v615 & 4278255360;
    introspect(JAM.policy.p21) {
      g$$6[v240] = v477 | v478;
    }
    var v479 = g$$6.length;
    var v241 = v479 + 1;
    f$$7.sigBytes = 4 * v241;
    this._process();
    var v242 = this._hash;
    f$$7 = v242.words;
    g$$6 = 0;
    var v243 = 4 > g$$6;
    for (;v243;) {
      introspect(JAM.policy.p15) {
        a$$28 = f$$7[g$$6];
      }
      var v725 = a$$28 << 8;
      var v726 = a$$28 >>> 24;
      var v616 = v725 | v726;
      var v480 = v616 & 16711935;
      var v727 = a$$28 << 24;
      var v728 = a$$28 >>> 8;
      var v617 = v727 | v728;
      var v481 = v617 & 4278255360;
      introspect(JAM.policy.p21) {
        f$$7[g$$6] = v480 | v481;
      }
      g$$6 = g$$6 + 1;
      v243 = 4 > g$$6;
    }
    return;
  }
  function v43(f$$6, g$$5) {
    var a$$27 = 0;
    var v246 = 16 > a$$27;
    for (;v246;) {
      var e$$21 = g$$5 + a$$27;
      introspect(JAM.policy.p15) {
        var c$$15 = f$$6[e$$21]
      }
      var v618 = c$$15 << 8;
      var v619 = c$$15 >>> 24;
      var v482 = v618 | v619;
      var v244 = v482 & 16711935;
      var v620 = c$$15 << 24;
      var v621 = c$$15 >>> 8;
      var v483 = v620 | v621;
      var v245 = v483 & 4278255360;
      introspect(JAM.policy.p21) {
        f$$6[e$$21] = v244 | v245;
      }
      a$$27 = a$$27 + 1;
      v246 = 16 > a$$27;
    }
    var v247 = this._hash;
    e$$21 = v247.words;
    introspect(JAM.policy.p15) {
      c$$15 = e$$21[0];
    }
    introspect(JAM.policy.p15) {
      var b$$10 = e$$21[1]
    }
    introspect(JAM.policy.p15) {
      var d$$7 = e$$21[2]
    }
    introspect(JAM.policy.p15) {
      var q$$1 = e$$21[3]
    }
    a$$27 = 0;
    var v249 = 64 > a$$27;
    for (;v249;) {
      var v248;
      var v485 = 16 > a$$27;
      if (v485) {
        var v869 = g$$5 + a$$27;
        introspect(JAM.policy.p15) {
          var v805 = f$$6[v869]
        }
        introspect(JAM.policy.p15) {
          var v806 = k$$2[a$$27]
        }
        c$$15 = h$$7(c$$15, b$$10, d$$7, q$$1, v805, 7, v806);
        var v915 = g$$5 + a$$27;
        var v870 = v915 + 1;
        introspect(JAM.policy.p15) {
          var v807 = f$$6[v870]
        }
        var v871 = a$$27 + 1;
        introspect(JAM.policy.p15) {
          var v808 = k$$2[v871]
        }
        q$$1 = h$$7(q$$1, c$$15, b$$10, d$$7, v807, 12, v808);
        var v872 = g$$5 + a$$27;
        var v809 = v872 + 2;
        introspect(JAM.policy.p15) {
          var v729 = f$$6[v809]
        }
        var v810 = a$$27 + 2;
        introspect(JAM.policy.p15) {
          var v730 = k$$2[v810]
        }
        d$$7 = h$$7(d$$7, q$$1, c$$15, b$$10, v729, 17, v730);
        var v811 = g$$5 + a$$27;
        var v731 = v811 + 3;
        introspect(JAM.policy.p15) {
          var v622 = f$$6[v731]
        }
        var v732 = a$$27 + 3;
        introspect(JAM.policy.p15) {
          var v623 = k$$2[v732]
        }
        v248 = b$$10 = h$$7(b$$10, d$$7, q$$1, c$$15, v622, 22, v623);
      } else {
        var v484;
        var v625 = 32 > a$$27;
        if (v625) {
          var v961 = a$$27 + 1;
          var v945 = v961 % 16;
          var v916 = g$$5 + v945;
          introspect(JAM.policy.p15) {
            var v873 = f$$6[v916]
          }
          introspect(JAM.policy.p15) {
            var v874 = k$$2[a$$27]
          }
          c$$15 = i$$4(c$$15, b$$10, d$$7, q$$1, v873, 5, v874);
          var v962 = a$$27 + 6;
          var v946 = v962 % 16;
          var v917 = g$$5 + v946;
          introspect(JAM.policy.p15) {
            var v875 = f$$6[v917]
          }
          var v918 = a$$27 + 1;
          introspect(JAM.policy.p15) {
            var v876 = k$$2[v918]
          }
          q$$1 = i$$4(q$$1, c$$15, b$$10, d$$7, v875, 9, v876);
          var v947 = a$$27 + 11;
          var v919 = v947 % 16;
          var v877 = g$$5 + v919;
          introspect(JAM.policy.p15) {
            var v812 = f$$6[v877]
          }
          var v878 = a$$27 + 2;
          introspect(JAM.policy.p15) {
            var v813 = k$$2[v878]
          }
          d$$7 = i$$4(d$$7, q$$1, c$$15, b$$10, v812, 14, v813);
          var v879 = a$$27 % 16;
          var v814 = g$$5 + v879;
          introspect(JAM.policy.p15) {
            var v733 = f$$6[v814]
          }
          var v815 = a$$27 + 3;
          introspect(JAM.policy.p15) {
            var v734 = k$$2[v815]
          }
          v484 = b$$10 = i$$4(b$$10, d$$7, q$$1, c$$15, v733, 20, v734);
        } else {
          var v624;
          var v735 = 48 > a$$27;
          if (v735) {
            var v977 = 3 * a$$27;
            var v971 = v977 + 5;
            var v963 = v971 % 16;
            var v948 = g$$5 + v963;
            introspect(JAM.policy.p15) {
              var v920 = f$$6[v948]
            }
            introspect(JAM.policy.p15) {
              var v921 = k$$2[a$$27]
            }
            c$$15 = l$$3(c$$15, b$$10, d$$7, q$$1, v920, 4, v921);
            var v978 = 3 * a$$27;
            var v972 = v978 + 8;
            var v964 = v972 % 16;
            var v949 = g$$5 + v964;
            introspect(JAM.policy.p15) {
              var v922 = f$$6[v949]
            }
            var v950 = a$$27 + 1;
            introspect(JAM.policy.p15) {
              var v923 = k$$2[v950]
            }
            q$$1 = l$$3(q$$1, c$$15, b$$10, d$$7, v922, 11, v923);
            var v973 = 3 * a$$27;
            var v965 = v973 + 11;
            var v951 = v965 % 16;
            var v924 = g$$5 + v951;
            introspect(JAM.policy.p15) {
              var v880 = f$$6[v924]
            }
            var v925 = a$$27 + 2;
            introspect(JAM.policy.p15) {
              var v881 = k$$2[v925]
            }
            d$$7 = l$$3(d$$7, q$$1, c$$15, b$$10, v880, 16, v881);
            var v966 = 3 * a$$27;
            var v952 = v966 + 14;
            var v926 = v952 % 16;
            var v882 = g$$5 + v926;
            introspect(JAM.policy.p15) {
              var v816 = f$$6[v882]
            }
            var v883 = a$$27 + 3;
            introspect(JAM.policy.p15) {
              var v817 = k$$2[v883]
            }
            v624 = b$$10 = l$$3(b$$10, d$$7, q$$1, c$$15, v816, 23, v817);
          } else {
            var v974 = 3 * a$$27;
            var v967 = v974 % 16;
            var v953 = g$$5 + v967;
            introspect(JAM.policy.p15) {
              var v927 = f$$6[v953]
            }
            introspect(JAM.policy.p15) {
              var v928 = k$$2[a$$27]
            }
            c$$15 = r$$2(c$$15, b$$10, d$$7, q$$1, v927, 6, v928);
            var v979 = 3 * a$$27;
            var v975 = v979 + 7;
            var v968 = v975 % 16;
            var v954 = g$$5 + v968;
            introspect(JAM.policy.p15) {
              var v929 = f$$6[v954]
            }
            var v955 = a$$27 + 1;
            introspect(JAM.policy.p15) {
              var v930 = k$$2[v955]
            }
            q$$1 = r$$2(q$$1, c$$15, b$$10, d$$7, v929, 10, v930);
            var v976 = 3 * a$$27;
            var v969 = v976 + 14;
            var v956 = v969 % 16;
            var v931 = g$$5 + v956;
            introspect(JAM.policy.p15) {
              var v884 = f$$6[v931]
            }
            var v932 = a$$27 + 2;
            introspect(JAM.policy.p15) {
              var v885 = k$$2[v932]
            }
            d$$7 = r$$2(d$$7, q$$1, c$$15, b$$10, v884, 15, v885);
            var v970 = 3 * a$$27;
            var v957 = v970 + 5;
            var v933 = v957 % 16;
            var v886 = g$$5 + v933;
            introspect(JAM.policy.p15) {
              var v818 = f$$6[v886]
            }
            var v887 = a$$27 + 3;
            introspect(JAM.policy.p15) {
              var v819 = k$$2[v887]
            }
            v624 = b$$10 = r$$2(b$$10, d$$7, q$$1, c$$15, v818, 21, v819);
          }
          v484 = v624;
        }
        v248 = v484;
      }
      v248;
      a$$27 = a$$27 + 4;
      v249 = 64 > a$$27;
    }
    introspect(JAM.policy.p15) {
      var v486 = e$$21[0]
    }
    var v250 = v486 + c$$15;
    introspect(JAM.policy.p21) {
      e$$21[0] = v250 | 0;
    }
    introspect(JAM.policy.p15) {
      var v487 = e$$21[1]
    }
    var v251 = v487 + b$$10;
    introspect(JAM.policy.p21) {
      e$$21[1] = v251 | 0;
    }
    introspect(JAM.policy.p15) {
      var v488 = e$$21[2]
    }
    var v252 = v488 + d$$7;
    introspect(JAM.policy.p21) {
      e$$21[2] = v252 | 0;
    }
    introspect(JAM.policy.p15) {
      var v489 = e$$21[3]
    }
    var v253 = v489 + q$$1;
    introspect(JAM.policy.p21) {
      e$$21[3] = v253 | 0;
    }
    return;
  }
  function v42() {
    var v254 = [1732584193, 4023233417, 2562383102, 271733878];
    var v997 = s$$5.create(v254);
    this._hash = v997;
    return;
  }
  function v41() {
    var f$$5 = 0;
    var v257 = 64 > f$$5;
    for (;v257;) {
      var v255 = k$$2;
      var v256 = f$$5;
      var v820 = f$$5 + 1;
      var v736 = p$$2.sin(v820);
      var v626 = p$$2.abs(v736);
      var v490 = 4294967296 * v626;
      introspect(JAM.policy.p21) {
        v255[v256] = v490 | 0;
      }
      f$$5 = f$$5 + 1;
      v257 = 64 > f$$5;
    }
    return;
  }
  function h$$7(f$$1, g$$1, a$$23, e$$17, c$$11, b$$6, d$$3) {
    var v737 = g$$1 & a$$23;
    var v821 = ~g$$1;
    var v738 = v821 & e$$17;
    var v627 = v737 | v738;
    var v491 = f$$1 + v627;
    var v258 = v491 + c$$11;
    f$$1 = v258 + d$$3;
    var v492 = f$$1 << b$$6;
    var v628 = 32 - b$$6;
    var v493 = f$$1 >>> v628;
    var v259 = v492 | v493;
    return v259 + g$$1;
  }
  function i$$4(f$$2, g$$2, a$$24, e$$18, c$$12, b$$7, d$$4) {
    var v739 = g$$2 & e$$18;
    var v822 = ~e$$18;
    var v740 = a$$24 & v822;
    var v629 = v739 | v740;
    var v494 = f$$2 + v629;
    var v260 = v494 + c$$12;
    f$$2 = v260 + d$$4;
    var v495 = f$$2 << b$$7;
    var v630 = 32 - b$$7;
    var v496 = f$$2 >>> v630;
    var v261 = v495 | v496;
    return v261 + g$$2;
  }
  function l$$3(f$$3, g$$3, a$$25, e$$19, c$$13, b$$8, d$$5) {
    var v741 = g$$3 ^ a$$25;
    var v631 = v741 ^ e$$19;
    var v497 = f$$3 + v631;
    var v262 = v497 + c$$13;
    f$$3 = v262 + d$$5;
    var v498 = f$$3 << b$$8;
    var v632 = 32 - b$$8;
    var v499 = f$$3 >>> v632;
    var v263 = v498 | v499;
    return v263 + g$$3;
  }
  function r$$2(f$$4, g$$4, a$$26, e$$20, c$$14, b$$9, d$$6) {
    var v823 = ~e$$20;
    var v742 = g$$4 | v823;
    var v633 = a$$26 ^ v742;
    var v500 = f$$4 + v633;
    var v264 = v500 + c$$14;
    f$$4 = v264 + d$$6;
    var v501 = f$$4 << b$$9;
    var v634 = 32 - b$$9;
    var v502 = f$$4 >>> v634;
    var v265 = v501 | v502;
    return v265 + g$$4;
  }
  var o$$3 = CryptoJS;
  var m$$3 = o$$3.lib;
  var s$$5 = m$$3.WordArray;
  m$$3 = m$$3.Hasher;
  var n$$4 = o$$3.algo;
  var k$$2 = [];
  v41();
  var v266 = n$$4;
  var v503 = {_doReset:v42, _doProcessBlock:v43, _doFinalize:v44};
  var v998 = m$$3.extend(v503);
  n$$4 = v266.MD5 = v998;
  var v267 = o$$3;
  var v999 = m$$3._createHelper(n$$4);
  v267.MD5 = v999;
  var v268 = o$$3;
  var v1000 = m$$3._createHmacHelper(n$$4);
  v268.HmacMD5 = v1000;
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
      var v635 = -1 != o$$2;
      if (v635) {
        l$$2 = o$$2;
      }
    }
    o$$2 = [];
    var m$$2 = 0;
    var s$$4 = 0;
    var v275 = s$$4 < l$$2;
    for (;v275;) {
      var v274 = s$$4 % 4;
      if (v274) {
        var v636 = s$$4 - 1;
        var v504 = i$$3.charAt(v636);
        var v269 = r$$1.indexOf(v504);
        var v505 = s$$4 % 4;
        var v270 = 2 * v505;
        var n$$3 = v269 << v270;
        var v506 = i$$3.charAt(s$$4);
        var v271 = r$$1.indexOf(v506);
        var v637 = s$$4 % 4;
        var v507 = 2 * v637;
        var v272 = 6 - v507;
        var k$$1 = v271 >>> v272;
        var v273 = m$$2 >>> 2;
        introspect(JAM.policy.p15) {
          var v638 = o$$2[v273]
        }
        var v743 = n$$3 | k$$1;
        var v888 = m$$2 % 4;
        var v824 = 8 * v888;
        var v744 = 24 - v824;
        var v639 = v743 << v744;
        introspect(JAM.policy.p21) {
          o$$2[v273] = v638 | v639;
        }
        m$$2 = m$$2 + 1;
      }
      s$$4 = s$$4 + 1;
      v275 = s$$4 < l$$2;
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
    var v280 = m$$1 < h$$6;
    for (;v280;) {
      var v889 = m$$1 >>> 2;
      introspect(JAM.policy.p15) {
        var v825 = l$$1[v889]
      }
      var v934 = m$$1 % 4;
      var v890 = 8 * v934;
      var v826 = 24 - v890;
      var v745 = v825 >>> v826;
      var v640 = v745 & 255;
      var v508 = v640 << 16;
      var v935 = m$$1 + 1;
      var v891 = v935 >>> 2;
      introspect(JAM.policy.p15) {
        var v827 = l$$1[v891]
      }
      var v958 = m$$1 + 1;
      var v936 = v958 % 4;
      var v892 = 8 * v936;
      var v828 = 24 - v892;
      var v746 = v827 >>> v828;
      var v641 = v746 & 255;
      var v509 = v641 << 8;
      var v276 = v508 | v509;
      var v829 = m$$1 + 2;
      var v747 = v829 >>> 2;
      introspect(JAM.policy.p15) {
        var v642 = l$$1[v747]
      }
      var v893 = m$$1 + 2;
      var v830 = v893 % 4;
      var v748 = 8 * v830;
      var v643 = 24 - v748;
      var v510 = v642 >>> v643;
      var v277 = v510 & 255;
      var s$$3 = v276 | v277;
      var n$$2 = 0;
      var v511 = 4 > n$$2;
      if (v511) {
        var v749 = .75 * n$$2;
        var v644 = m$$1 + v749;
        v511 = v644 < h$$6;
      }
      var v279 = v511;
      for (;v279;) {
        var v831 = 3 - n$$2;
        var v750 = 6 * v831;
        var v645 = s$$3 >>> v750;
        var v512 = v645 & 63;
        var v278 = o$$1.charAt(v512);
        i$$2.push(v278);
        n$$2 = n$$2 + 1;
        var v513 = 4 > n$$2;
        if (v513) {
          var v751 = .75 * n$$2;
          var v646 = m$$1 + v751;
          v513 = v646 < h$$6;
        }
        v279 = v513;
      }
      m$$1 = m$$1 + 3;
      v280 = m$$1 < h$$6;
    }
    var v282 = l$$1 = o$$1.charAt(64);
    if (v282) {
      var v514 = i$$2.length;
      var v281 = v514 % 4;
      for (;v281;) {
        i$$2.push(l$$1);
        var v515 = i$$2.length;
        v281 = v515 % 4;
      }
    }
    return i$$2.join("");
  }
  var p$$1 = CryptoJS;
  var v283 = p$$1.lib;
  var h$$5 = v283.WordArray;
  var v284 = p$$1.enc;
  v284.Base64 = {stringify:v38, parse:v39, _map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};
  return;
}
function v37(p, h$$4) {
  function v36(a$$22) {
    function v35(e$$16, c$$10) {
      var v516 = g.HMAC;
      var v285 = v516.create(a$$22, c$$10);
      return v285.finalize(e$$16);
    }
    return v35;
  }
  function v34(a$$21) {
    function v33(e$$15, c$$9) {
      var v286 = a$$21.create(c$$9);
      return v286.finalize(e$$15);
    }
    return v33;
  }
  function v32() {
    var v287 = f.clone;
    var a$$20 = v287.call(this);
    var v288 = a$$20;
    var v517 = this._hash;
    var v1001 = v517.clone();
    v288._hash = v1001;
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
    var v289 = f.reset;
    v289.call(this);
    this._doReset();
    return;
  }
  function v28() {
    this.reset();
    return;
  }
  function v27() {
    var v290 = r.clone;
    var a$$17 = v290.call(this);
    var v291 = a$$17;
    var v518 = this._data;
    var v1002 = v518.clone();
    v291._data = v1002;
    return a$$17;
  }
  function v26(a$$16) {
    var e$$14 = this._data;
    var c$$8 = e$$14.words;
    var b$$5 = e$$14.sigBytes;
    var d$$2 = this.blockSize;
    var v292 = 4 * d$$2;
    var q = b$$5 / v292;
    var v293;
    if (a$$16) {
      v293 = p.ceil(q);
    } else {
      var v647 = q | 0;
      var v648 = this._minBufferSize;
      var v519 = v647 - v648;
      v293 = p.max(v519, 0);
    }
    q = v293;
    a$$16 = q * d$$2;
    var v294 = 4 * a$$16;
    b$$5 = p.min(v294, b$$5);
    if (a$$16) {
      var j = 0;
      var v295 = j < a$$16;
      for (;v295;) {
        this._doProcessBlock(c$$8, j);
        j = j + d$$2;
        v295 = j < a$$16;
      }
      j = c$$8.splice(0, a$$16);
      var v520 = e$$14.sigBytes;
      e$$14.sigBytes = v520 - b$$5;
    }
    return o.create(j, b$$5);
  }
  function v25(a$$15) {
    var v521 = typeof a$$15;
    var v296 = "string" == v521;
    if (v296) {
      a$$15 = k.parse(a$$15);
    }
    var v297 = this._data;
    v297.concat(a$$15);
    var v522 = this._nDataBytes;
    var v523 = a$$15.sigBytes;
    this._nDataBytes = v522 + v523;
    return;
  }
  function v24() {
    var v1003 = o.create();
    this._data = v1003;
    this._nDataBytes = 0;
    return;
  }
  function v23(a$$14) {
    var v524 = encodeURIComponent(a$$14);
    var v298 = unescape(v524);
    return n$$1.parse(v298);
  }
  function v22(a$$13) {
    try {
      var v525 = n$$1.stringify(a$$13);
      var v299 = escape(v525);
      return decodeURIComponent(v299);
    } catch (e$$13) {
      throw Error("Malformed UTF-8 data");
    }
    return;
  }
  function v21(a$$12) {
    var e$$12 = a$$12.length;
    var c$$7 = [];
    var b$$4 = 0;
    var v302 = b$$4 < e$$12;
    for (;v302;) {
      var v300 = c$$7;
      var v301 = b$$4 >>> 2;
      introspect(JAM.policy.p15) {
        var v649 = v300[v301]
      }
      var v832 = a$$12.charCodeAt(b$$4);
      var v752 = v832 & 255;
      var v894 = b$$4 % 4;
      var v833 = 8 * v894;
      var v753 = 24 - v833;
      var v650 = v752 << v753;
      introspect(JAM.policy.p21) {
        v300[v301] = v649 | v650;
      }
      b$$4 = b$$4 + 1;
      v302 = b$$4 < e$$12;
    }
    return o.create(c$$7, e$$12);
  }
  function v20(a$$11) {
    var e$$11 = a$$11.words;
    a$$11 = a$$11.sigBytes;
    var c$$6 = [];
    var b$$3 = 0;
    var v304 = b$$3 < a$$11;
    for (;v304;) {
      var v834 = b$$3 >>> 2;
      introspect(JAM.policy.p15) {
        var v754 = e$$11[v834]
      }
      var v895 = b$$3 % 4;
      var v835 = 8 * v895;
      var v755 = 24 - v835;
      var v651 = v754 >>> v755;
      var v526 = v651 & 255;
      var v303 = String.fromCharCode(v526);
      c$$6.push(v303);
      b$$3 = b$$3 + 1;
      v304 = b$$3 < a$$11;
    }
    return c$$6.join("");
  }
  function v19(a$$10) {
    var e$$10 = a$$10.length;
    var c$$5 = [];
    var b$$2 = 0;
    var v307 = b$$2 < e$$10;
    for (;v307;) {
      var v305 = c$$5;
      var v306 = b$$2 >>> 3;
      introspect(JAM.policy.p15) {
        var v652 = v305[v306]
      }
      var v836 = a$$10.substr(b$$2, 2);
      var v756 = parseInt(v836, 16);
      var v896 = b$$2 % 8;
      var v837 = 4 * v896;
      var v757 = 24 - v837;
      var v653 = v756 << v757;
      introspect(JAM.policy.p21) {
        v305[v306] = v652 | v653;
      }
      b$$2 = b$$2 + 2;
      v307 = b$$2 < e$$10;
    }
    var v308 = e$$10 / 2;
    return o.create(c$$5, v308);
  }
  function v18(a$$9) {
    var e$$9 = a$$9.words;
    a$$9 = a$$9.sigBytes;
    var c$$4 = [];
    var b$$1 = 0;
    var v312 = b$$1 < a$$9;
    for (;v312;) {
      var v654 = b$$1 >>> 2;
      introspect(JAM.policy.p15) {
        var v527 = e$$9[v654]
      }
      var v758 = b$$1 % 4;
      var v655 = 8 * v758;
      var v528 = 24 - v655;
      var v309 = v527 >>> v528;
      var d$$1 = v309 & 255;
      var v529 = d$$1 >>> 4;
      var v310 = v529.toString(16);
      c$$4.push(v310);
      var v530 = d$$1 & 15;
      var v311 = v530.toString(16);
      c$$4.push(v311);
      b$$1 = b$$1 + 1;
      v312 = b$$1 < a$$9;
    }
    return c$$4.join("");
  }
  function v17(a$$8) {
    var e$$8 = [];
    var c$$3 = 0;
    var v314 = c$$3 < a$$8;
    for (;v314;) {
      var v656 = p.random();
      var v531 = 4294967296 * v656;
      var v313 = v531 | 0;
      e$$8.push(v313);
      c$$3 = c$$3 + 4;
      v314 = c$$3 < a$$8;
    }
    return o.create(e$$8, a$$8);
  }
  function v16() {
    var v315 = r.clone;
    var a$$7 = v315.call(this);
    var v316 = a$$7;
    var v532 = this.words;
    var v1004 = v532.slice(0);
    v316.words = v1004;
    return a$$7;
  }
  function v15() {
    var a$$6 = this.words;
    var e$$7 = this.sigBytes;
    var v317 = e$$7 >>> 2;
    introspect(JAM.policy.p15) {
      var v657 = a$$6[v317]
    }
    var v897 = e$$7 % 4;
    var v838 = 8 * v897;
    var v759 = 32 - v838;
    var v658 = 4294967295 << v759;
    introspect(JAM.policy.p21) {
      a$$6[v317] = v657 & v658;
    }
    var v318 = a$$6;
    var v533 = e$$7 / 4;
    var v1005 = p.ceil(v533);
    v318.length = v1005;
    return;
  }
  function v14(a$$5) {
    var e$$6 = this.words;
    var c$$2 = a$$5.words;
    var b = this.sigBytes;
    a$$5 = a$$5.sigBytes;
    this.clamp();
    var v325 = b % 4;
    if (v325) {
      var d = 0;
      var v320 = d < a$$5;
      for (;v320;) {
        var v534 = b + d;
        var v319 = v534 >>> 2;
        introspect(JAM.policy.p15) {
          var v659 = e$$6[v319]
        }
        var v937 = d >>> 2;
        introspect(JAM.policy.p15) {
          var v898 = c$$2[v937]
        }
        var v959 = d % 4;
        var v938 = 8 * v959;
        var v899 = 24 - v938;
        var v839 = v898 >>> v899;
        var v760 = v839 & 255;
        var v939 = b + d;
        var v900 = v939 % 4;
        var v840 = 8 * v900;
        var v761 = 24 - v840;
        var v660 = v760 << v761;
        introspect(JAM.policy.p21) {
          e$$6[v319] = v659 | v660;
        }
        d = d + 1;
        v320 = d < a$$5;
      }
    } else {
      var v535 = c$$2.length;
      var v324 = 65535 < v535;
      if (v324) {
        d = 0;
        var v322 = d < a$$5;
        for (;v322;) {
          var v536 = b + d;
          var v321 = v536 >>> 2;
          var v537 = d >>> 2;
          introspect(JAM.policy.p21) {
            e$$6[v321] = c$$2[v537];
          }
          d = d + 4;
          v322 = d < a$$5;
        }
      } else {
        var v323 = e$$6.push;
        v323.apply(e$$6, c$$2);
      }
    }
    var v538 = this.sigBytes;
    this.sigBytes = v538 + a$$5;
    return this;
  }
  function v13(a$$4) {
    var v326 = a$$4 || s$$2;
    return v326.stringify(this);
  }
  function v12(a$$3, e$$5) {
    a$$3 = this.words = a$$3 || [];
    var v327;
    var v540 = e$$5 != h$$4;
    if (v540) {
      v327 = e$$5;
    } else {
      var v539 = a$$3.length;
      v327 = 4 * v539;
    }
    this.sigBytes = v327;
    return;
  }
  function v11() {
    function v10() {
      var v328 = this.$super;
      return v328.extend(this);
    }
    function v9(a$$2) {
      var c$$1;
      for (c$$1 in a$$2) {
        var v329 = a$$2.hasOwnProperty(c$$1);
        if (v329) {
          introspect(JAM.policy.p21) {
            this[c$$1] = a$$2[c$$1];
          }
        }
      }
      var v330 = a$$2.hasOwnProperty("toString");
      if (v330) {
        this.toString = a$$2.toString;
      }
      return;
    }
    function v8() {
      return;
    }
    function v7() {
      var a$$1 = this.extend();
      var v331 = a$$1.init;
      v331.apply(a$$1, arguments);
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
    return{extend:v6, create:v7, init:v8, mixIn:v9, clone:v10};
  }
  var i$$1 = {};
  var l = i$$1.lib = {};
  var v332 = l;
  var v1006 = v11();
  var r = v332.Base = v1006;
  var v333 = l;
  var v541 = {init:v12, toString:v13, concat:v14, clamp:v15, clone:v16, random:v17};
  var v1007 = r.extend(v541);
  var o = v333.WordArray = v1007;
  var m = i$$1.enc = {};
  var s$$2 = m.Hex = {stringify:v18, parse:v19};
  var n$$1 = m.Latin1 = {stringify:v20, parse:v21};
  var k = m.Utf8 = {stringify:v22, parse:v23};
  var v334 = l;
  var v542 = {reset:v24, _append:v25, _process:v26, clone:v27, _minBufferSize:0};
  var v1008 = r.extend(v542);
  var f = v334.BufferedBlockAlgorithm = v1008;
  var v335 = l;
  var v543 = {init:v28, reset:v29, update:v30, finalize:v31, clone:v32, blockSize:16, _createHelper:v34, _createHmacHelper:v36};
  var v1009 = f.extend(v543);
  v335.Hasher = v1009;
  var g = i$$1.algo = {};
  return i$$1;
}
function SNote(serverPath, divParent) {
  function init(divParent$$1, serverPath$$1) {
    m_serverPath = serverPath$$1;
    m_divInternal$$1 = divParent$$1;
    var serverPath$$inline_3 = serverPath$$1;
    var v336 = m_divInternal$$1.style;
    v336.border = "2px solid";
    var v337 = m_divInternal$$1.style;
    v337.backgroundColor = "#FFFFCC";
    m_preNote = document.createElement("pre");
    m_preNote.id = "note";
    m_preNote.className = "write-only non-editable";
    m_divInternal$$1.appendChild(m_preNote);
    m_divButtons = document.createElement("div");
    var v338 = m_divButtons.style;
    v338.textAlign = "left";
    m_divInternal$$1.appendChild(m_divButtons);
    m_imageEdit = createNoteButton("Edit", handleEditButtonClick, m_divButtons);
    m_imageView = createNoteButton("Read", handleUnlockButtonClick, m_divButtons);
    m_imageDelete = createNoteButton("Delete", handleDeleteButtonClick, m_divButtons);
    m_divEdit = createPopupDialog("edit_dialog", m_divInternal$$1);
    var v339 = m_divEdit.style;
    v339.width = 400;
    m_inputNewPassword = createPasswordPanel(m_divEdit, "Enter password:", "edit_password");
    m_inputNewPasswordRetype = createPasswordPanel(m_divEdit, "Retype password:", "edit_password_retype");
    m_inputNote = document.createElement("textarea");
    var v340 = m_inputNote.style;
    v340.width = 350;
    var v341 = m_inputNote.style;
    v341.height = 200;
    m_inputNote.className = "destructive-read read-only";
    m_inputNote.id = "edit_note_input";
    m_divEdit.appendChild(m_inputNote);
    divButtons = createDialogButtonPanel(handleEditDialogOk, handleEditDialogCancel, m_divEdit);
    var v342 = m_divEdit.style;
    v342.display = "none";
    m_divUnlock = createPopupDialog("unlock_dialog", m_divInternal$$1);
    m_inputPassword = createPasswordPanel(m_divUnlock, "Enter password:", "unlock_password");
    createDialogButtonPanel(handleUnlockDialogOk, handleUnlockDialogCancel, m_divUnlock);
    var v343 = m_divUnlock.style;
    v343.display = "none";
    m_divDeleteDialog = createPopupDialog("delete_dialog", m_divInternal$$1);
    var parent$$inline_33 = m_divDeleteDialog;
    label = document.createElement("label");
    introspect(JAM.policy.p22) {
      label.textContent = "Are you sure you want to delete?";
    }
    parent$$inline_33.appendChild(label);
    createDialogButtonPanel(handleDeleteDialogOk, handleDeleteDialogCancel, m_divDeleteDialog);
    var v344 = m_divDeleteDialog.style;
    v344.display = "none";
    fetch(m_strId, handleSuccessfulFetch, handleFailedFetch);
    return;
  }
  function createNoteButton(strLabel, funcHandleClick, parent) {
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
    introspect(JAM.policy.p22) {
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
    introspect(JAM.policy.p22) {
      buttonOk.textContent = "ok";
    }
    buttonOk.onclick = funcHandleOk;
    divButtons.appendChild(buttonOk);
    buttonCancel = document.createElement("button");
    buttonCancel.type = "input";
    introspect(JAM.policy.p22) {
      buttonCancel.textContent = "cancel";
    }
    buttonCancel.onclick = funcHandleCancel;
    divButtons.appendChild(buttonCancel);
    parent$$4.appendChild(divButtons);
    return divButtons;
  }
  function closeUnlockDialog() {
    var div$$3 = document.getElementById("unlock_dialog");
    var v345 = div$$3.style;
    v345.display = "none";
    m_inputPassword.value = "";
    return;
  }
  function closeDeleteDialog() {
    var div$$4 = document.getElementById("delete_dialog");
    var v346 = div$$4.style;
    v346.display = "none";
    return;
  }
  function closeEditDialog() {
    var div$$5 = document.getElementById("edit_dialog");
    var v347 = div$$5.style;
    v347.display = "none";
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
    var v348 = m_imageEdit.style;
    v348.display = "none";
    var v349 = m_imageDelete.style;
    v349.display = "none";
    var v350 = m_imageView.style;
    v350.display = "inline";
    return;
  }
  function destructiveRead(elem$$1) {
    val = elem$$1.value;
    elem$$1.value = "";
    return val;
  }
  function handleDeleteButtonClick() {
    var div$$inline_8 = document.getElementById("delete_dialog");
    var v351 = div$$inline_8.style;
    v351.display = "block";
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
      introspect(JAM.policy.p22) {
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
    var v352 = div$$inline_12.style;
    v352.display = "block";
    return;
  }
  function handleUnlockDialogOk() {
    JAM.startProfile('read');

    var JSCompiler_inline_result$$0;
    JSCompiler_inline_label_decryptText_16: {
      var strPasswd$$inline_15 = destructiveRead(m_inputPassword);
      var v355 = strPasswd$$inline_15 != undefined;
      if (v355) {
        var v353 = CryptoJS.AES;
        wordArrPlainText = v353.decrypt(m_strCipherText, strPasswd$$inline_15);
        var v544 = CryptoJS.enc;
        var v354 = v544.Utf8;
        JSCompiler_inline_result$$0 = v354.stringify(wordArrPlainText);
        break JSCompiler_inline_label_decryptText_16;
      } else {
        JSCompiler_inline_result$$0 = undefined;
        break JSCompiler_inline_label_decryptText_16;
      }
    }
    introspect(JAM.policy.p22) {
      m_preNote.textContent = JSCompiler_inline_result$$0;
    }
    closeDialogsBoxes();
    var v356 = m_imageEdit.style;
    v356.display = "none";
    var v357 = m_imageView.style;
    v357.display = "none";
    var v358 = m_imageDelete.style;
    v358.display = "inline";

    JAM.stopProfile('read');
    return;
  }
  function handleUnlockDialogCancel() {
    closeUnlockDialog();
    return;
  }
  function handleEditButtonClick() {
    var div$$inline_20 = document.getElementById("edit_dialog");
    var v359 = div$$inline_20.style;
    v359.display = "block";
    return;
  }
  function handleEditDialogOk() {
    JAM.startProfile('edit');

    function v2(strId$$1) {
      var v360 = strId$$1 != "";
      if (v360) {
        switchToLockedViewMode();
        fetch(m_strId, handleSuccessfulFetch, handleFailedFetch);
      } else {
        alert("Error: note could not be saved.");
      }
      return;
    }
    strNewPass = destructiveRead(m_inputNewPassword);
    strNewPassRetype = destructiveRead(m_inputNewPasswordRetype);
    var v545 = strNewPass.length;
    var v363 = v545 == 0;
    if (v363) {
      alert("Must have non-empty password");
    } else {
      var v362 = strNewPass != strNewPassRetype;
      if (v362) {
        alert("Passwords do not match");
      } else {
        var v361 = destructiveRead(m_inputNote);
        encryptAndSave(v361, strNewPass, v2);
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
    var v364 = m_imageView.style;
    v364.display = "none";
    var v365 = m_imageDelete.style;
    v365.display = "none";
    var v366 = m_imageEdit.style;
    v366.display = "inline";
    return;
  }
  function fetch(strId$$2, callbackSuccess, callbackFail) {
    function v3() {
      var v661 = xmlhttp.readyState;
      var v546 = v661 == 4;
      if (v546) {
        var v662 = xmlhttp.status;
        v546 = v662 == 200;
      }
      var v370 = v546;
      if (v370) {
        var v367 = xmlhttp.responseText;
        jsonObjResponse = JSON.parse(v367);
        var v369 = jsonObjResponse.bSuccess;
        if (v369) {
          var v368 = jsonObjResponse.strCipherText;
          callbackSuccess(v368);
        } else {
          callbackFail();
        }
      }
      return;
    }
    xmlhttp = new XMLHttpRequest;
    xmlhttp.onreadystatechange = v3;
    var v547 = m_serverPath + "FetchSNote.php";
    var v371 = v547 + "?snotehandle=";
    var v372 = encodeURIComponent(strId$$2);
    var strUrl = v371 + v372;
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
        var v548 = CryptoJS.enc;
        var v373 = v548.Utf8;
        wordArrPlainText = v373.parse(strNote);
        var v549 = CryptoJS.AES;
        var v374 = v549.encrypt(wordArrPlainText, strPasswd$$inline_24);
        JSCompiler_inline_result$$2 = v374.toString();
      } else {
        JSCompiler_inline_result$$2 = undefined;
      }
    }
    JSCompiler_temp_const$$1(JSCompiler_inline_result$$2, callbackDone);
    return;
  }
  function save(strEncNote, callbackDone$$1) {
    function v4() {
      var v663 = xmlhttp.readyState;
      var v550 = v663 == 4;
      if (v550) {
        var v664 = xmlhttp.status;
        v550 = v664 == 200;
      }
      var v378 = v550;
      if (v378) {
        var v375 = xmlhttp.responseText;
        jsonObjResponse = JSON.parse(v375);
        var v377 = jsonObjResponse.bSuccess;
        if (v377) {
          var v376 = jsonObjResponse.strId;
          callbackDone$$1(v376);
        } else {
          callbackDone$$1("");
        }
      }
      return;
    }
    xmlhttp = new XMLHttpRequest;
    xmlhttp.onreadystatechange = v4;
    var v379 = m_serverPath + "SaveSNote.php";
    xmlhttp.open("POST", v379, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var v762 = encodeURIComponent(m_strId);
    var v665 = "snoteHandle=" + v762;
    var v551 = v665 + "&snote=";
    var v380 = v551 + strEncNote;
    xmlhttp.send(v380);
    return;
  }
  function deleteSNote(callbackSuccess$$1, callbackFail$$1) {
    function v5() {
      var v381 = xmlhttp.responseText;
      jsonObjResponse = JSON.parse(v381);
      var v383 = jsonObjResponse.bSuccess;
      if (v383) {
        var v382 = jsonObjResponse.strId;
        callbackSuccess$$1(v382);
      } else {
        callbackFail$$1();
      }
      return;
    }
    xmlhttp = new XMLHttpRequest;
    xmlhttp.onreadystatechange = v5;
    var v384 = m_serverPath + "DeleteSNote.php";
    xmlhttp.open("POST", v384, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var v552 = encodeURIComponent(m_strId);
    var v385 = "snoteHandle=" + v552;
    xmlhttp.send(v385);
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
    introspect(JAM.policy.p22) {
      button.textContent = strLabel$$1;
    }
    button.onclick = strFunc;
    parent$$5.appendChild(button);
    return;
  }
  function forgeNote() {
    preNote = document.getElementById("note");
    introspect(JAM.policy.p22) {
      preNote.textContent = "Forged note";
    }
    return;
  }
  function forgeNoteInnerHTML() {
    preNote = document.getElementById("note");
    introspect(JAM.policy.p9) {
      preNote.innerHTML = "Forged note";
    }
    return;
  }
  function readNote() {
    preNote = document.getElementById("note");
    introspect(JAM.policy.p18) {
      var v386 = preNote.textContent
    }
    alert(v386);
    return;
  }
  function readNoteInnerHTML() {
    preNote = document.getElementById("note");
    introspect(JAM.policy.p10) {
      var v387 = preNote.innerHTML
    }
    alert(v387);
    return;
  }
  m_divParent = null;
  m_divInternal = null;
  m_strNoteId = strNoteId;
  m_divParent = divParent$$2;
  m_divInternal = document.createElement("div");
  var v388 = m_divInternal.style;
  v388.border = "2px solid";
  var v389 = m_divInternal.style;
  v389.backgroundColor = "#CCCCCC";
  m_divParent.appendChild(m_divInternal);
  createButton("Forge Note", forgeNote, m_divInternal);
  createButton("Forge Note Inner HTML", forgeNoteInnerHTML, m_divInternal);
  createButton("Read Note", readNote, m_divInternal);
  createButton("Read Note Inner HTML", readNoteInnerHTML, m_divInternal);
  return;
}
var v390 = CryptoJS;
var v553 = !v390;
if (v553) {
  v390 = v37(Math);
}
var CryptoJS = v390;
v40();
v45(Math);
v49();
var v554 = CryptoJS.lib;
var v391 = v554.Cipher;
var v555 = !v391;
if (v555) {
  v82();
}
v88();
var v392 = document.getElementById("div1");
new SNote("./SNote/", v392);
var v393 = document.getElementById("div2");
new SNoteSwindler("", v393, "div1")

JAM.stopProfile('load');
