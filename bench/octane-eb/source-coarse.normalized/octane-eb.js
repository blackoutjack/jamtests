introspect(JAM.policy.pFull) {
function v118(s$$41) {
  return;
}
function v117() {
  function v116(result$$4) {
    sc_display(result$$4);
    sc_newline();
    return result$$4 == 132;
  }
  function v115() {
    return test(k$$10);
  }
  var args$$6 = null;
  var v119 = arguments.length;
  var sc_tmp$$1 = v119 - 1;
  var v121 = sc_tmp$$1 >= 0;
  for (;v121;) {
    var v120 = arguments[sc_tmp$$1];
    args$$6 = sc_cons(v120, args$$6);
    sc_tmp$$1--;
    v121 = sc_tmp$$1 >= 0;
  }
  var k$$10;
  var v1094;
  var v1697 = args$$6 === null;
  if (v1697) {
    v1094 = 7;
  } else {
    v1094 = args$$6.car;
  }
  k$$10 = v1094;
  BgL_runzd2benchmarkzd2("earley", 1, v115, v116);
  return;
}
function v114(k$$9) {
  function v113(l$$31) {
    var sc_x_134;
    var tail1134;
    var L1130;
    var falseHead1133;
    falseHead1133 = new sc_Pair(null, null);
    tail1134 = falseHead1133;
    L1130 = l$$31;
    var v1095 = L1130 === null;
    var v123 = !v1095;
    for (;v123;) {
      sc_x_134 = L1130.car;
      var v122 = sc_list(sc_x_134, sc_x_134);
      var v3685 = new sc_Pair(v122, null);
      tail1134.cdr = v3685;
      tail1134 = tail1134.cdr;
      L1130 = L1130.cdr;
      var v1096 = L1130 === null;
      v123 = !v1096;
    }
    return falseHead1133.cdr;
  }
  var x$$78;
  var p$$46;
  p$$46 = BgL_makezd2parserzd2(const_earley, v113);
  var v2088 = sc_makeVector(k$$9, "\u1e9ca");
  var v1698 = sc_vector2list(v2088);
  x$$78 = p$$46(v1698);
  var v1097 = BgL_parsezd2ze3treesz31(x$$78, "\u1e9cs", 0, k$$9);
  return sc_length(v1097);
}
function v112(parse$$2, nt$$9, i$$71, j$$11) {
  var BgL_sc_nbzd2derivzd2treesza2_133za2;
  var states$$3;
  var toks$$2;
  var steps$$2;
  var enders$$3;
  var nts$$3;
  nts$$3 = parse$$2[0];
  enders$$3 = parse$$2[2];
  steps$$2 = parse$$2[4];
  toks$$2 = parse$$2[6];
  states$$3 = parse$$2[7];
  BgL_sc_nbzd2derivzd2treesza2_133za2 = parse$$2[10];
  BgL_sc_nbzd2derivzd2treesza2_133za2(nt$$9, i$$71, j$$11, nts$$3, enders$$3, steps$$2, toks$$2, states$$3);
  return;
}
function v111(parse$$1, nt$$8, i$$70, j$$10) {
  var BgL_sc_derivzd2treesza2_132z70;
  var states$$2;
  var toks$$1;
  var names$$1;
  var steps$$1;
  var enders$$2;
  var nts$$2;
  nts$$2 = parse$$1[0];
  enders$$2 = parse$$1[2];
  steps$$1 = parse$$1[4];
  names$$1 = parse$$1[5];
  toks$$1 = parse$$1[6];
  states$$2 = parse$$1[7];
  BgL_sc_derivzd2treesza2_132z70 = parse$$1[9];
  return BgL_sc_derivzd2treesza2_132z70(nt$$8, i$$70, j$$10, nts$$2, enders$$2, steps$$1, names$$1, toks$$1, states$$2);
}
function v110(parse, nt$$7, i$$69, j$$9) {
  var is_parsed$$1;
  var states$$1;
  var enders$$1;
  var nts$$1;
  nts$$1 = parse[0];
  enders$$1 = parse[2];
  states$$1 = parse[7];
  is_parsed$$1 = parse[8];
  is_parsed$$1(nt$$7, i$$69, j$$9, nts$$1, enders$$1, states$$1);
  return;
}
function v109(grammar, lexer) {
  function v108(input) {
    function v107() {
      function v106(l$$30) {
        var k$$8;
        var ender_set$$2;
        var state$$11;
        var ender$$3;
        for (;true;) {
          var v130 = l$$30 instanceof sc_Pair;
          if (v130) {
            ender$$3 = l$$30.car;
            state$$11 = sc_states_129[j$$8];
            var v1098 = ender$$3 + 1;
            ender_set$$2 = state$$11[v1098];
            var v129 = ender_set$$2 !== false;
            if (v129) {
              k$$8 = ender_set$$2[2];
              var v127 = k$$8 >= 0;
              for (;v127;) {
                var v125 = k$$8 >= i$$68;
                if (v125) {
                  var v1099 = BgL_sc_confzd2setzd2adjoinza2za2_46z00(sc_states_129, BgL_sc_statesza2_128za2, k$$8, prev$$2, i$$68);
                  var v124 = v1099 !== false;
                  if (v124) {
                    BgL_sc_confzd2setzd2adjoinza2za2_46z00(sc_states_129, BgL_sc_statesza2_128za2, j$$8, ender$$3, k$$8);
                  }
                }
                var v126 = k$$8 + 5;
                k$$8 = ender_set$$2[v126];
                v127 = k$$8 >= 0;
              }
              var v128 = l$$30.cdr;
              return sc_loop1_127(v128);
            } else {
              l$$30 = l$$30.cdr;
            }
          } else {
            return undefined;
          }
        }
        return;
      }
      var sc_loop1_127;
      var prev$$2;
      var BgL_sc_statesza2_128za2;
      var sc_states_129;
      var j$$8;
      var i$$68;
      var sc_i_130;
      var head$$4;
      var conf_set$$12;
      var sc_conf_131;
      sc_conf_131 = BgL_sc_stateza2_23za2[0];
      var v136 = sc_conf_131 >= 0;
      if (v136) {
        var v131 = sc_conf_131 + 1;
        conf_set$$12 = BgL_sc_stateza2_23za2[v131];
        head$$4 = conf_set$$12[4];
        BgL_sc_stateza2_23za2[0] = conf_set$$12[0];
        conf_set_merge_new_bang(conf_set$$12);
        sc_i_130 = head$$4;
        var v135 = sc_i_130 >= 0;
        for (;v135;) {
          i$$68 = sc_i_130;
          j$$8 = state_num;
          sc_states_129 = states;
          BgL_sc_statesza2_128za2 = BgL_sc_statesza2_27za2;
          prev$$2 = sc_conf_131 - 1;
          var v1100 = sc_conf_131 >= BgL_sc_nbzd2nts_24zd2;
          if (v1100) {
            var v1699 = sc_steps_25[prev$$2];
            v1100 = v1699 >= 0;
          }
          var v133 = v1100;
          if (v133) {
            sc_loop1_127 = v106;
            var v1101 = sc_steps_25[prev$$2];
            var v132 = sc_enders_26[v1101];
            sc_loop1_127(v132);
          }
          var v134 = sc_i_130 + 5;
          sc_i_130 = conf_set$$12[v134];
          v135 = sc_i_130 >= 0;
        }
        return loop1();
      } else {
        return undefined;
      }
      return;
    }
    function v105(nt$$6, i$$67, j$$7, sc_nts_119, sc_enders_120, sc_steps_121, sc_toks_122, sc_states_123) {
      var conf_set$$11;
      var state$$10;
      var sc_conf_124;
      var l$$29;
      var nb_trees;
      var BgL_sc_nbzd2nts_125zd2;
      var BgL_sc_ntza2_126za2;
      BgL_sc_ntza2_126za2 = sc_ind_43(nt$$6, sc_nts_119);
      var v140 = BgL_sc_ntza2_126za2 !== false;
      if (v140) {
        BgL_sc_nbzd2nts_125zd2 = sc_nts_119.length;
        l$$29 = sc_enders_120[BgL_sc_ntza2_126za2];
        nb_trees = 0;
        var v139 = l$$29 instanceof sc_Pair;
        for (;v139;) {
          sc_conf_124 = l$$29.car;
          state$$10 = sc_states_123[j$$7];
          var v2395 = sc_conf_124 + 1;
          conf_set$$11 = state$$10[v2395];
          var v2089;
          var v2397 = conf_set$$11 !== false;
          if (v2397) {
            var v2396 = i$$67 + 5;
            v2089 = conf_set$$11[v2396];
          } else {
            v2089 = false;
          }
          var v1102 = v2089;
          var v138 = v1102 !== false;
          if (v138) {
            l$$29 = l$$29.cdr;
            var v137 = nb_deriv_trees(sc_conf_124, i$$67, j$$7, sc_enders_120, sc_steps_121, sc_toks_122, sc_states_123, BgL_sc_nbzd2nts_125zd2);
            nb_trees = v137 + nb_trees;
          } else {
            l$$29 = l$$29.cdr;
          }
          v139 = l$$29 instanceof sc_Pair;
        }
        return nb_trees;
      } else {
        return false;
      }
      return;
    }
    function v104(sc_conf_110, i$$66, j$$6, sc_enders_111, sc_steps_112, sc_toks_113, sc_states_114, BgL_sc_nbzd2nts_115zd2) {
      function v103(l$$28, sc_n_118) {
        var nb_ender_trees;
        var nb_prev_trees;
        var conf_set$$10;
        var state$$9;
        var k$$7;
        var n$$13;
        var ender_set$$1;
        var sc_state_117;
        var ender$$2;
        for (;true;) {
          var v147 = l$$28 instanceof sc_Pair;
          if (v147) {
            ender$$2 = l$$28.car;
            sc_state_117 = sc_states_114[j$$6];
            var v1103 = ender$$2 + 1;
            ender_set$$1 = sc_state_117[v1103];
            var v146 = ender_set$$1 !== false;
            if (v146) {
              k$$7 = ender_set$$1[2];
              n$$13 = sc_n_118;
              var v144 = k$$7 >= 0;
              for (;v144;) {
                var v1104 = k$$7 >= i$$66;
                if (v1104) {
                  state$$9 = sc_states_114[k$$7];
                  var v2723 = prev$$1 + 1;
                  conf_set$$10 = state$$9[v2723];
                  var v2398;
                  var v2725 = conf_set$$10 !== false;
                  if (v2725) {
                    var v2724 = i$$66 + 5;
                    v2398 = conf_set$$10[v2724];
                  } else {
                    v2398 = false;
                  }
                  var v1700 = v2398;
                  v1104 = v1700 !== false;
                }
                var v143 = v1104;
                if (v143) {
                  nb_prev_trees = nb_deriv_trees(prev$$1, i$$66, k$$7, sc_enders_111, sc_steps_112, sc_toks_113, sc_states_114, BgL_sc_nbzd2nts_115zd2);
                  nb_ender_trees = nb_deriv_trees(ender$$2, k$$7, j$$6, sc_enders_111, sc_steps_112, sc_toks_113, sc_states_114, BgL_sc_nbzd2nts_115zd2);
                  var v141 = k$$7 + 5;
                  k$$7 = ender_set$$1[v141];
                  var v1105 = nb_prev_trees * nb_ender_trees;
                  n$$13 = n$$13 + v1105;
                } else {
                  var v142 = k$$7 + 5;
                  k$$7 = ender_set$$1[v142];
                }
                v144 = k$$7 >= 0;
              }
              var v145 = l$$28.cdr;
              return sc_loop1_116(v145, n$$13);
            } else {
              l$$28 = l$$28.cdr;
            }
          } else {
            return sc_n_118;
          }
        }
        return;
      }
      var sc_loop1_116;
      var tmp1124;
      var prev$$1;
      prev$$1 = sc_conf_110 - 1;
      var v1106;
      tmp1124 = sc_conf_110 < BgL_sc_nbzd2nts_115zd2;
      var v2726;
      var v3000 = tmp1124 !== false;
      if (v3000) {
        v2726 = tmp1124;
      } else {
        var v2999 = sc_steps_112[prev$$1];
        v2726 = v2999 < 0;
      }
      var v2090 = v2726;
      var v1701 = v2090 !== false;
      if (v1701) {
        v1106 = 1;
      } else {
        sc_loop1_116 = v103;
        var v2399 = sc_steps_112[prev$$1];
        var v2091 = sc_enders_111[v2399];
        v1106 = sc_loop1_116(v2091, 0);
      }
      return v1106;
    }
    function v102(nt$$5, i$$65, j$$5, sc_nts_101, sc_enders_102, sc_steps_103, sc_names_104, sc_toks_105, sc_states_106) {
      var conf_set$$9;
      var state$$8;
      var sc_conf_107;
      var l$$27;
      var trees;
      var BgL_sc_nbzd2nts_108zd2;
      var BgL_sc_ntza2_109za2;
      BgL_sc_ntza2_109za2 = sc_ind_43(nt$$5, sc_nts_101);
      var v151 = BgL_sc_ntza2_109za2 !== false;
      if (v151) {
        BgL_sc_nbzd2nts_108zd2 = sc_nts_101.length;
        l$$27 = sc_enders_102[BgL_sc_ntza2_109za2];
        trees = null;
        var v150 = l$$27 instanceof sc_Pair;
        for (;v150;) {
          sc_conf_107 = l$$27.car;
          state$$8 = sc_states_106[j$$5];
          var v2400 = sc_conf_107 + 1;
          conf_set$$9 = state$$8[v2400];
          var v2092;
          var v2402 = conf_set$$9 !== false;
          if (v2402) {
            var v2401 = i$$65 + 5;
            v2092 = conf_set$$9[v2401];
          } else {
            v2092 = false;
          }
          var v1107 = v2092;
          var v149 = v1107 !== false;
          if (v149) {
            l$$27 = l$$27.cdr;
            var v148 = deriv_trees(sc_conf_107, i$$65, j$$5, sc_enders_102, sc_steps_103, sc_names_104, sc_toks_105, sc_states_106, BgL_sc_nbzd2nts_108zd2);
            trees = sc_append(v148, trees);
          } else {
            l$$27 = l$$27.cdr;
          }
          v150 = l$$27 instanceof sc_Pair;
        }
        return trees;
      } else {
        return false;
      }
      return;
    }
    function v101(sc_conf_91, i$$64, j$$4, sc_enders_92, sc_steps_93, sc_names_94, sc_toks_95, sc_states_96, BgL_sc_nbzd2nts_97zd2) {
      function v100(l1$$14, l2$$6) {
        function v99(k$$6, l2$$7) {
          function v98(l3$$1, l2$$8) {
            var l4;
            var sc_l2_100;
            var ender_tree;
            var v157 = l3$$1 instanceof sc_Pair;
            if (v157) {
              var v152 = l3$$1.car;
              ender_tree = sc_list(v152);
              l4 = prev_trees;
              sc_l2_100 = l2$$8;
              var v154 = l4 instanceof sc_Pair;
              for (;v154;) {
                var v1108 = l4.car;
                var v153 = sc_append(v1108, ender_tree);
                sc_l2_100 = new sc_Pair(v153, sc_l2_100);
                l4 = l4.cdr;
                v154 = l4 instanceof sc_Pair;
              }
              var v155 = l3$$1.cdr;
              return loop3(v155, sc_l2_100);
            } else {
              var v1109 = k$$6 + 5;
              var v156 = ender_set[v1109];
              return loop2(v156, l2$$8);
            }
            return;
          }
          var loop3;
          var ender_trees;
          var prev_trees;
          var conf_set$$8;
          var sc_state_99;
          for (;true;) {
            var v161 = k$$6 >= 0;
            if (v161) {
              var v1110 = k$$6 >= i$$64;
              if (v1110) {
                sc_state_99 = sc_states_96[k$$6];
                var v2727 = prev + 1;
                conf_set$$8 = sc_state_99[v2727];
                var v2403;
                var v2729 = conf_set$$8 !== false;
                if (v2729) {
                  var v2728 = i$$64 + 5;
                  v2403 = conf_set$$8[v2728];
                } else {
                  v2403 = false;
                }
                var v1702 = v2403;
                v1110 = v1702 !== false;
              }
              var v159 = v1110;
              if (v159) {
                prev_trees = deriv_trees(prev, i$$64, k$$6, sc_enders_92, sc_steps_93, sc_names_94, sc_toks_95, sc_states_96, BgL_sc_nbzd2nts_97zd2);
                ender_trees = deriv_trees(ender$$1, k$$6, j$$4, sc_enders_92, sc_steps_93, sc_names_94, sc_toks_95, sc_states_96, BgL_sc_nbzd2nts_97zd2);
                loop3 = v98;
                return loop3(ender_trees, l2$$7);
              } else {
                var v158 = k$$6 + 5;
                k$$6 = ender_set[v158];
              }
            } else {
              var v160 = l1$$14.cdr;
              return sc_loop1_98(v160, l2$$7);
            }
          }
          return;
        }
        var loop2;
        var ender_set;
        var state$$7;
        var ender$$1;
        for (;true;) {
          var v164 = l1$$14 instanceof sc_Pair;
          if (v164) {
            ender$$1 = l1$$14.car;
            state$$7 = sc_states_96[j$$4];
            var v1111 = ender$$1 + 1;
            ender_set = state$$7[v1111];
            var v163 = ender_set !== false;
            if (v163) {
              loop2 = v99;
              var v162 = ender_set[2];
              return loop2(v162, l2$$6);
            } else {
              l1$$14 = l1$$14.cdr;
            }
          } else {
            return l2$$6;
          }
        }
        return;
      }
      var sc_loop1_98;
      var prev;
      var name$$37;
      name$$37 = sc_names_94[sc_conf_91];
      var v1112;
      var v1704 = name$$37 !== false;
      if (v1704) {
        var v1703;
        var v2095 = sc_conf_91 < BgL_sc_nbzd2nts_97zd2;
        if (v2095) {
          var v2730 = sc_toks_95[i$$64];
          var v2404 = v2730.car;
          var v2093 = sc_list(name$$37, v2404);
          v1703 = sc_list(v2093);
        } else {
          var v2094 = sc_list(name$$37);
          v1703 = sc_list(v2094);
        }
        v1112 = v1703;
      } else {
        prev = sc_conf_91 - 1;
        sc_loop1_98 = v100;
        var v2405 = sc_steps_93[prev];
        var v2096 = sc_enders_92[v2405];
        v1112 = sc_loop1_98(v2096, null);
      }
      return v1112;
    }
    function v97(nt$$4, i$$63, j$$3, sc_nts_86, sc_enders_87, sc_states_88) {
      var conf_set$$7;
      var state$$6;
      var sc_conf_89;
      var l$$26;
      var BgL_sc_ntza2_90za2;
      BgL_sc_ntza2_90za2 = sc_ind_43(nt$$4, sc_nts_86);
      var v167 = BgL_sc_ntza2_90za2 !== false;
      if (v167) {
        l$$26 = sc_enders_87[BgL_sc_ntza2_90za2];
        for (;true;) {
          var v166 = l$$26 instanceof sc_Pair;
          if (v166) {
            sc_conf_89 = l$$26.car;
            state$$6 = sc_states_88[j$$3];
            var v2406 = sc_conf_89 + 1;
            conf_set$$7 = state$$6[v2406];
            var v2097;
            var v2408 = conf_set$$7 !== false;
            if (v2408) {
              var v2407 = i$$63 + 5;
              v2097 = conf_set$$7[v2407];
            } else {
              v2097 = false;
            }
            var v1113 = v2097;
            var v165 = v1113 !== false;
            if (v165) {
              return true;
            } else {
              l$$26 = l$$26.cdr;
            }
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
      return;
    }
    function v96(sc_states_67, BgL_sc_statezd2num_68zd2, sc_starters_69, sc_enders_70, sc_predictors_71, sc_steps_72, sc_nts_73) {
      function v95(l$$25) {
        var sc_state_83;
        var BgL_sc_nextzd2set_84zd2;
        var sc_next_85;
        var pred_set;
        var i$$62;
        var pred;
        var v172 = l$$25 instanceof sc_Pair;
        if (v172) {
          pred = l$$25.car;
          i$$62 = head$$3;
          var v170 = i$$62 >= 0;
          for (;v170;) {
            sc_state_83 = sc_states_78[i$$62];
            var v1114 = pred + 1;
            pred_set = sc_state_83[v1114];
            var v168 = pred_set !== false;
            if (v168) {
              sc_next_85 = pred + 1;
              BgL_sc_nextzd2set_84zd2 = BgL_sc_confzd2setzd2getza2_44za2(state$$5, BgL_sc_statezd2num_77zd2, sc_next_85);
              conf_set_union(state$$5, BgL_sc_nextzd2set_84zd2, sc_next_85, pred_set);
            }
            var v169 = i$$62 + 5;
            i$$62 = BgL_sc_confzd2set_76zd2[v169];
            v170 = i$$62 >= 0;
          }
          var v171 = l$$25.cdr;
          return sc_loop1_75(v171);
        } else {
          return undefined;
        }
        return;
      }
      var next_set;
      var next$$1;
      var conf_set$$6;
      var ender;
      var l$$24;
      var starter_set;
      var starter;
      var sc_l_74;
      var sc_loop1_75;
      var head$$3;
      var BgL_sc_confzd2set_76zd2;
      var BgL_sc_statezd2num_77zd2;
      var state$$5;
      var sc_states_78;
      var preds;
      var BgL_sc_confzd2set_79zd2;
      var step;
      var sc_conf_80;
      var BgL_sc_nbzd2nts_81zd2;
      var sc_state_82;
      sc_state_82 = sc_states_67[BgL_sc_statezd2num_68zd2];
      BgL_sc_nbzd2nts_81zd2 = sc_nts_73.length;
      for (;true;) {
        sc_conf_80 = sc_state_82[0];
        var v180 = sc_conf_80 >= 0;
        if (v180) {
          step = sc_steps_72[sc_conf_80];
          var v173 = sc_conf_80 + 1;
          BgL_sc_confzd2set_79zd2 = sc_state_82[v173];
          head$$3 = BgL_sc_confzd2set_79zd2[4];
          sc_state_82[0] = BgL_sc_confzd2set_79zd2[0];
          conf_set_merge_new_bang(BgL_sc_confzd2set_79zd2);
          var v179 = step >= 0;
          if (v179) {
            sc_l_74 = sc_starters_69[step];
            var v175 = sc_l_74 instanceof sc_Pair;
            for (;v175;) {
              starter = sc_l_74.car;
              starter_set = BgL_sc_confzd2setzd2getza2_44za2(sc_state_82, BgL_sc_statezd2num_68zd2, starter);
              var v1705 = BgL_sc_statezd2num_68zd2 + 5;
              var v1115 = starter_set[v1705];
              var v174 = v1115 === false;
              if (v174) {
                conf_set_adjoin(sc_state_82, starter_set, starter, BgL_sc_statezd2num_68zd2);
                sc_l_74 = sc_l_74.cdr;
              } else {
                sc_l_74 = sc_l_74.cdr;
              }
              v175 = sc_l_74 instanceof sc_Pair;
            }
            l$$24 = sc_enders_70[step];
            var v177 = l$$24 instanceof sc_Pair;
            for (;v177;) {
              ender = l$$24.car;
              var v2098 = ender + 1;
              conf_set$$6 = sc_state_82[v2098];
              var v2099;
              var v2410 = conf_set$$6 !== false;
              if (v2410) {
                var v2409 = BgL_sc_statezd2num_68zd2 + 5;
                v2099 = conf_set$$6[v2409];
              } else {
                v2099 = false;
              }
              var v1116 = v2099;
              var v176 = v1116 !== false;
              if (v176) {
                next$$1 = sc_conf_80 + 1;
                next_set = BgL_sc_confzd2setzd2getza2_44za2(sc_state_82, BgL_sc_statezd2num_68zd2, next$$1);
                conf_set_union(sc_state_82, next_set, next$$1, BgL_sc_confzd2set_79zd2);
                l$$24 = l$$24.cdr;
              } else {
                l$$24 = l$$24.cdr;
              }
              v177 = l$$24 instanceof sc_Pair;
            }
          } else {
            var v178 = step + BgL_sc_nbzd2nts_81zd2;
            preds = sc_predictors_71[v178];
            sc_states_78 = sc_states_67;
            state$$5 = sc_state_82;
            BgL_sc_statezd2num_77zd2 = BgL_sc_statezd2num_68zd2;
            BgL_sc_confzd2set_76zd2 = BgL_sc_confzd2set_79zd2;
            sc_loop1_75 = v95;
            sc_loop1_75(preds);
          }
        } else {
          return;
        }
      }
      return;
    }
    function v94(state$$4, conf_set$$5, sc_conf_66, other_set) {
      var i$$61;
      i$$61 = other_set[2];
      var v184 = i$$61 >= 0;
      for (;v184;) {
        var v1706 = i$$61 + 5;
        var v1117 = conf_set$$5[v1706];
        var v183 = v1117 === false;
        if (v183) {
          conf_set_adjoin(state$$4, conf_set$$5, sc_conf_66, i$$61);
          var v181 = i$$61 + 5;
          i$$61 = other_set[v181];
        } else {
          var v182 = i$$61 + 5;
          i$$61 = other_set[v182];
        }
        v184 = i$$61 >= 0;
      }
      return;
    }
    function v93(sc_states_60, BgL_sc_statesza2_61za2, BgL_sc_statezd2num_62zd2, sc_conf_63, i$$60) {
      var BgL_sc_confzd2setza2_64z70;
      var BgL_sc_stateza2_65za2;
      var conf_set$$4;
      var state$$3;
      state$$3 = sc_states_60[BgL_sc_statezd2num_62zd2];
      var v1118;
      var v2731 = sc_conf_63 + 1;
      conf_set$$4 = state$$3[v2731];
      var v2732;
      var v3002 = conf_set$$4 !== false;
      if (v3002) {
        var v3001 = i$$60 + 5;
        v2732 = conf_set$$4[v3001];
      } else {
        v2732 = false;
      }
      var v2100 = v2732;
      var v1707 = v2100 !== false;
      if (v1707) {
        BgL_sc_stateza2_65za2 = BgL_sc_statesza2_61za2[BgL_sc_statezd2num_62zd2];
        BgL_sc_confzd2setza2_64z70 = BgL_sc_confzd2setzd2getza2_44za2(BgL_sc_stateza2_65za2, BgL_sc_statezd2num_62zd2, sc_conf_63);
        var v2411;
        var v3242 = i$$60 + 5;
        var v3003 = BgL_sc_confzd2setza2_64z70[v3242];
        var v2733 = v3003 === false;
        if (v2733) {
          v2411 = conf_set_adjoin(BgL_sc_stateza2_65za2, BgL_sc_confzd2setza2_64z70, sc_conf_63, i$$60);
        } else {
          v2411 = undefined;
        }
        v2411;
        v1118 = true;
      } else {
        v1118 = false;
      }
      return v1118;
    }
    function v92(sc_states_57, BgL_sc_statezd2num_58zd2, l$$23, i$$59) {
      var conf_set$$3;
      var sc_conf_59;
      var l1$$13;
      var state$$2;
      state$$2 = sc_states_57[BgL_sc_statezd2num_58zd2];
      l1$$13 = l$$23;
      var v186 = l1$$13 instanceof sc_Pair;
      for (;v186;) {
        sc_conf_59 = l1$$13.car;
        conf_set$$3 = BgL_sc_confzd2setzd2getza2_44za2(state$$2, BgL_sc_statezd2num_58zd2, sc_conf_59);
        var v1708 = i$$59 + 5;
        var v1119 = conf_set$$3[v1708];
        var v185 = v1119 === false;
        if (v185) {
          conf_set_adjoin(state$$2, conf_set$$3, sc_conf_59, i$$59);
          l1$$13 = l1$$13.cdr;
        } else {
          l1$$13 = l1$$13.cdr;
        }
        v186 = l1$$13 instanceof sc_Pair;
      }
      return;
    }
    function v91(state$$1, conf_set$$2, sc_conf_56, i$$58) {
      var tail$$5;
      tail$$5 = conf_set$$2[3];
      var v2412 = i$$58 + 5;
      conf_set$$2[v2412] = -1;
      var v2101 = tail$$5 + 5;
      conf_set$$2[v2101] = i$$58;
      conf_set$$2[3] = i$$58;
      var v1120;
      var v1709 = tail$$5 < 0;
      if (v1709) {
        conf_set$$2[0] = state$$1[0];
        v1120 = state$$1[0] = sc_conf_56;
      } else {
        v1120 = undefined;
      }
      v1120;
      return;
    }
    function v90(conf_set$$1) {
      var v2413 = conf_set$$1[1];
      var v2102 = v2413 + 5;
      conf_set$$1[v2102] = conf_set$$1[4];
      conf_set$$1[1] = conf_set$$1[3];
      conf_set$$1[3] = -1;
      conf_set$$1[4] = -1;
      return;
    }
    function v89(state, BgL_sc_statezd2num_53zd2, sc_conf_54) {
      var conf_set;
      var BgL_sc_confzd2set_55zd2;
      var v1121 = sc_conf_54 + 1;
      BgL_sc_confzd2set_55zd2 = state[v1121];
      var v1122;
      var v1710 = BgL_sc_confzd2set_55zd2 !== false;
      if (v1710) {
        v1122 = BgL_sc_confzd2set_55zd2;
      } else {
        var v3410 = BgL_sc_statezd2num_53zd2 + 6;
        conf_set = sc_makeVector(v3410, false);
        conf_set[1] = -3;
        conf_set[2] = -1;
        conf_set[3] = -1;
        conf_set[4] = -1;
        var v2414 = sc_conf_54 + 1;
        state[v2414] = conf_set;
        v1122 = conf_set;
      }
      return v1122;
    }
    function v88(BgL_sc_nbzd2toks_50zd2, BgL_sc_nbzd2confs_51zd2) {
      var v$$5;
      var i$$57;
      var sc_states_52;
      var v187 = BgL_sc_nbzd2toks_50zd2 + 1;
      sc_states_52 = sc_makeVector(v187, false);
      i$$57 = BgL_sc_nbzd2toks_50zd2;
      var v189 = i$$57 >= 0;
      for (;v189;) {
        var v188 = BgL_sc_nbzd2confs_51zd2 + 1;
        v$$5 = sc_makeVector(v188, false);
        v$$5[0] = -1;
        sc_states_52[i$$57] = v$$5;
        --i$$57;
        v189 = i$$57 >= 0;
      }
      return sc_states_52;
    }
    function v87(nt$$3, sc_nts_49) {
      var i$$56;
      var v190 = sc_nts_49.length;
      i$$56 = v190 - 1;
      for (;true;) {
        var v192 = i$$56 >= 0;
        if (v192) {
          var v1123 = sc_nts_49[i$$56];
          var v191 = sc_isEqual(v1123, nt$$3);
          if (v191) {
            return i$$56;
          } else {
            --i$$56;
          }
        } else {
          return false;
        }
      }
      return;
    }
    var optrOpnd$$2;
    var sc_optrOpnd_20;
    var sc_optrOpnd_21;
    var sc_optrOpnd_22;
    var loop1;
    var BgL_sc_stateza2_23za2;
    var toks;
    var BgL_sc_nbzd2nts_24zd2;
    var sc_steps_25;
    var sc_enders_26;
    var state_num;
    var BgL_sc_statesza2_27za2;
    var states;
    var i$$55;
    var conf$$2;
    var l$$22;
    var tok_nts;
    var sc_i_28;
    var sc_i_29;
    var l1$$12;
    var l2$$5;
    var tok;
    var tail1129;
    var L1125;
    var goal_enders;
    var BgL_sc_statesza2_30za2;
    var BgL_sc_nbzd2nts_31zd2;
    var BgL_sc_nbzd2confs_32zd2;
    var nb_toks;
    var goal_starters;
    var sc_states_33;
    var BgL_sc_nbzd2confs_34zd2;
    var BgL_sc_nbzd2toks_35zd2;
    var sc_toks_36;
    var falseHead1128;
    var sc_names_37;
    var sc_steps_38;
    var sc_predictors_39;
    var sc_enders_40;
    var sc_starters_41;
    var sc_nts_42;
    var lexer$$1;
    var sc_ind_43;
    var make_states;
    var BgL_sc_confzd2setzd2getza2_44za2;
    var conf_set_merge_new_bang;
    var conf_set_adjoin;
    var BgL_sc_confzd2setzd2adjoinza2_45za2;
    var BgL_sc_confzd2setzd2adjoinza2za2_46z00;
    var conf_set_union;
    var forw;
    var is_parsed;
    var deriv_trees;
    var BgL_sc_derivzd2treesza2_47z70;
    var nb_deriv_trees;
    var BgL_sc_nbzd2derivzd2treesza2_48za2;
    sc_ind_43 = v87;
    make_states = v88;
    BgL_sc_confzd2setzd2getza2_44za2 = v89;
    conf_set_merge_new_bang = v90;
    conf_set_adjoin = v91;
    BgL_sc_confzd2setzd2adjoinza2_45za2 = v92;
    BgL_sc_confzd2setzd2adjoinza2za2_46z00 = v93;
    conf_set_union = v94;
    forw = v96;
    is_parsed = v97;
    deriv_trees = v101;
    BgL_sc_derivzd2treesza2_47z70 = v102;
    nb_deriv_trees = v104;
    BgL_sc_nbzd2derivzd2treesza2_48za2 = v105;
    lexer$$1 = parser_descr[0];
    sc_nts_42 = parser_descr[1];
    sc_starters_41 = parser_descr[2];
    sc_enders_40 = parser_descr[3];
    sc_predictors_39 = parser_descr[4];
    sc_steps_38 = parser_descr[5];
    sc_names_37 = parser_descr[6];
    falseHead1128 = new sc_Pair(null, null);
    L1125 = lexer$$1(input);
    tail1129 = falseHead1128;
    var v1124 = L1125 === null;
    var v198 = !v1124;
    for (;v198;) {
      tok = L1125.car;
      l1$$12 = tok.cdr;
      l2$$5 = null;
      var v195 = l1$$12 instanceof sc_Pair;
      for (;v195;) {
        var v193 = l1$$12.car;
        sc_i_29 = sc_ind_43(v193, sc_nts_42);
        var v194 = sc_i_29 !== false;
        if (v194) {
          l1$$12 = l1$$12.cdr;
          l2$$5 = new sc_Pair(sc_i_29, l2$$5);
        } else {
          l1$$12 = l1$$12.cdr;
        }
        v195 = l1$$12 instanceof sc_Pair;
      }
      var v196 = tok.car;
      var v197 = sc_reverse(l2$$5);
      sc_optrOpnd_22 = new sc_Pair(v196, v197);
      sc_optrOpnd_21 = new sc_Pair(sc_optrOpnd_22, null);
      tail1129.cdr = sc_optrOpnd_21;
      tail1129 = tail1129.cdr;
      L1125 = L1125.cdr;
      var v1125 = L1125 === null;
      v198 = !v1125;
    }
    sc_optrOpnd_20 = falseHead1128.cdr;
    sc_toks_36 = sc_list2vector(sc_optrOpnd_20);
    BgL_sc_nbzd2toks_35zd2 = sc_toks_36.length;
    BgL_sc_nbzd2confs_34zd2 = sc_steps_38.length;
    sc_states_33 = make_states(BgL_sc_nbzd2toks_35zd2, BgL_sc_nbzd2confs_34zd2);
    goal_starters = sc_starters_41[0];
    BgL_sc_confzd2setzd2adjoinza2_45za2(sc_states_33, 0, goal_starters, 0);
    forw(sc_states_33, 0, sc_starters_41, sc_enders_40, sc_predictors_39, sc_steps_38, sc_nts_42);
    sc_i_28 = 0;
    var v202 = sc_i_28 < BgL_sc_nbzd2toks_35zd2;
    for (;v202;) {
      var v199 = sc_toks_36[sc_i_28];
      tok_nts = v199.cdr;
      var v200 = sc_i_28 + 1;
      BgL_sc_confzd2setzd2adjoinza2_45za2(sc_states_33, v200, tok_nts, sc_i_28);
      var v201 = sc_i_28 + 1;
      forw(sc_states_33, v201, sc_starters_41, sc_enders_40, sc_predictors_39, sc_steps_38, sc_nts_42);
      ++sc_i_28;
      v202 = sc_i_28 < BgL_sc_nbzd2toks_35zd2;
    }
    nb_toks = sc_toks_36.length;
    BgL_sc_nbzd2confs_32zd2 = sc_steps_38.length;
    BgL_sc_nbzd2nts_31zd2 = sc_nts_42.length;
    BgL_sc_statesza2_30za2 = make_states(nb_toks, BgL_sc_nbzd2confs_32zd2);
    goal_enders = sc_enders_40[0];
    l$$22 = goal_enders;
    var v203 = l$$22 instanceof sc_Pair;
    for (;v203;) {
      conf$$2 = l$$22.car;
      BgL_sc_confzd2setzd2adjoinza2za2_46z00(sc_states_33, BgL_sc_statesza2_30za2, nb_toks, conf$$2, 0);
      l$$22 = l$$22.cdr;
      v203 = l$$22 instanceof sc_Pair;
    }
    i$$55 = nb_toks;
    var v204 = i$$55 >= 0;
    for (;v204;) {
      states = sc_states_33;
      BgL_sc_statesza2_27za2 = BgL_sc_statesza2_30za2;
      state_num = i$$55;
      sc_enders_26 = sc_enders_40;
      sc_steps_25 = sc_steps_38;
      BgL_sc_nbzd2nts_24zd2 = BgL_sc_nbzd2nts_31zd2;
      toks = sc_toks_36;
      BgL_sc_stateza2_23za2 = BgL_sc_statesza2_30za2[i$$55];
      loop1 = v107;
      loop1();
      --i$$55;
      v204 = i$$55 >= 0;
    }
    optrOpnd$$2 = BgL_sc_statesza2_30za2;
    return [sc_nts_42, sc_starters_41, sc_enders_40, sc_predictors_39, sc_steps_38, sc_names_37, sc_toks_36, optrOpnd$$2, is_parsed, BgL_sc_derivzd2treesza2_47z70, BgL_sc_nbzd2derivzd2treesza2_48za2];
  }
  function v86(defs$$2, conf) {
    function v85(rules$$2, conf$$1, rule_num) {
      var i$$54;
      var sc_i_17;
      var nt$$2;
      var l$$21;
      var sc_conf_18;
      var sc_i_19;
      var rule$$4;
      var v214 = rules$$2 instanceof sc_Pair;
      if (v214) {
        rule$$4 = rules$$2.car;
        var v3686 = sc_list(head$$2, rule_num);
        names[conf$$1] = v3686;
        sc_i_19 = ind(head$$2, nts);
        var v205 = starters;
        var v1126 = starters[sc_i_19];
        var v3687 = new sc_Pair(conf$$1, v1126);
        v205[sc_i_19] = v3687;
        l$$21 = rule$$4;
        sc_conf_18 = conf$$1;
        var v207 = l$$21 instanceof sc_Pair;
        for (;v207;) {
          nt$$2 = l$$21.car;
          var v3688 = ind(nt$$2, nts);
          steps[sc_conf_18] = v3688;
          sc_i_17 = ind(nt$$2, nts);
          var v206 = predictors;
          var v1127 = predictors[sc_i_17];
          var v3689 = new sc_Pair(sc_conf_18, v1127);
          v206[sc_i_17] = v3689;
          l$$21 = l$$21.cdr;
          ++sc_conf_18;
          v207 = l$$21 instanceof sc_Pair;
        }
        var v208 = steps;
        var v1128 = ind(head$$2, nts);
        v208[sc_conf_18] = v1128 - nb_nts;
        i$$54 = ind(head$$2, nts);
        var v209 = enders;
        var v1129 = enders[i$$54];
        var v3690 = new sc_Pair(sc_conf_18, v1129);
        v209[i$$54] = v3690;
        var v210 = rules$$2.cdr;
        var v211 = sc_conf_18 + 1;
        var v212 = rule_num + 1;
        return rule_loop$$2(v210, v211, v212);
      } else {
        var v213 = defs$$2.cdr;
        return def_loop(v213, conf$$1);
      }
      return;
    }
    var rule_loop$$2;
    var head$$2;
    var def$$2;
    var v215;
    var v1130 = defs$$2 instanceof sc_Pair;
    if (v1130) {
      def$$2 = defs$$2.car;
      head$$2 = def$$2.car;
      rule_loop$$2 = v85;
      var v1711 = def$$2.cdr;
      v215 = rule_loop$$2(v1711, conf, 1);
    } else {
      v215 = undefined;
    }
    return v215;
  }
  function v84(defs$$1, BgL_sc_nbzd2confs_14zd2) {
    function v83(rules$$1, BgL_sc_nbzd2confs_15zd2) {
      var l$$20;
      var BgL_sc_nbzd2confs_16zd2;
      var rule$$3;
      var v220 = rules$$1 instanceof sc_Pair;
      if (v220) {
        rule$$3 = rules$$1.car;
        l$$20 = rule$$3;
        BgL_sc_nbzd2confs_16zd2 = BgL_sc_nbzd2confs_15zd2;
        var v216 = l$$20 instanceof sc_Pair;
        for (;v216;) {
          l$$20 = l$$20.cdr;
          ++BgL_sc_nbzd2confs_16zd2;
          v216 = l$$20 instanceof sc_Pair;
        }
        var v217 = rules$$1.cdr;
        var v218 = BgL_sc_nbzd2confs_16zd2 + 1;
        return rule_loop$$1(v217, v218);
      } else {
        var v219 = defs$$1.cdr;
        return BgL_sc_defzd2loop_6zd2(v219, BgL_sc_nbzd2confs_15zd2);
      }
      return;
    }
    var rule_loop$$1;
    var def$$1;
    var v221;
    var v1131 = defs$$1 instanceof sc_Pair;
    if (v1131) {
      def$$1 = defs$$1.car;
      rule_loop$$1 = v83;
      var v1712 = def$$1.cdr;
      v221 = rule_loop$$1(v1712, BgL_sc_nbzd2confs_14zd2);
    } else {
      v221 = BgL_sc_nbzd2confs_14zd2;
    }
    return v221;
  }
  function v82(defs, sc_nts_11) {
    function v81(rules, sc_nts_12) {
      var nt$$1;
      var l$$19;
      var sc_nts_13;
      var rule$$2;
      var v226 = rules instanceof sc_Pair;
      if (v226) {
        rule$$2 = rules.car;
        l$$19 = rule$$2;
        sc_nts_13 = sc_nts_12;
        var v223 = l$$19 instanceof sc_Pair;
        for (;v223;) {
          nt$$1 = l$$19.car;
          l$$19 = l$$19.cdr;
          var v222;
          var v1713 = sc_member(nt$$1, sc_nts_13);
          var v1132 = v1713 !== false;
          if (v1132) {
            v222 = sc_nts_13;
          } else {
            v222 = new sc_Pair(nt$$1, sc_nts_13);
          }
          sc_nts_13 = v222;
          v223 = l$$19 instanceof sc_Pair;
        }
        var v224 = rules.cdr;
        return rule_loop(v224, sc_nts_13);
      } else {
        var v225 = defs.cdr;
        return BgL_sc_defzd2loop_9zd2(v225, sc_nts_12);
      }
      return;
    }
    var rule_loop;
    var head$$1;
    var def;
    var v227;
    var v1134 = defs instanceof sc_Pair;
    if (v1134) {
      def = defs.car;
      head$$1 = def.car;
      rule_loop = v81;
      var v1714 = def.cdr;
      var v2103;
      var v2734 = sc_member(head$$1, sc_nts_11);
      var v2415 = v2734 !== false;
      if (v2415) {
        v2103 = sc_nts_11;
      } else {
        v2103 = new sc_Pair(head$$1, sc_nts_11);
      }
      var v1715 = v2103;
      v227 = rule_loop(v1714, v1715);
    } else {
      var v1133 = sc_reverse(sc_nts_11);
      v227 = sc_list2vector(v1133);
    }
    return v227;
  }
  function v80(nt, sc_nts_10) {
    var i$$53;
    var v228 = sc_nts_10.length;
    i$$53 = v228 - 1;
    for (;true;) {
      var v230 = i$$53 >= 0;
      if (v230) {
        var v1135 = sc_nts_10[i$$53];
        var v229 = sc_isEqual(v1135, nt);
        if (v229) {
          return i$$53;
        } else {
          --i$$53;
        }
      } else {
        return false;
      }
    }
    return;
  }
  var i$$52;
  var parser_descr;
  var def_loop;
  var nb_nts;
  var names;
  var steps;
  var predictors;
  var enders;
  var starters;
  var nts;
  var sc_names_1;
  var sc_steps_2;
  var sc_predictors_3;
  var sc_enders_4;
  var sc_starters_5;
  var nb_confs;
  var BgL_sc_defzd2loop_6zd2;
  var BgL_sc_nbzd2nts_7zd2;
  var sc_nts_8;
  var BgL_sc_defzd2loop_9zd2;
  var ind;
  ind = v80;
  BgL_sc_defzd2loop_9zd2 = v82;
  sc_nts_8 = BgL_sc_defzd2loop_9zd2(grammar, null);
  BgL_sc_nbzd2nts_7zd2 = sc_nts_8.length;
  BgL_sc_defzd2loop_6zd2 = v84;
  var v231 = BgL_sc_defzd2loop_6zd2(grammar, 0);
  nb_confs = v231 + BgL_sc_nbzd2nts_7zd2;
  sc_starters_5 = sc_makeVector(BgL_sc_nbzd2nts_7zd2, null);
  sc_enders_4 = sc_makeVector(BgL_sc_nbzd2nts_7zd2, null);
  sc_predictors_3 = sc_makeVector(BgL_sc_nbzd2nts_7zd2, null);
  sc_steps_2 = sc_makeVector(nb_confs, false);
  sc_names_1 = sc_makeVector(nb_confs, false);
  nts = sc_nts_8;
  starters = sc_starters_5;
  enders = sc_enders_4;
  predictors = sc_predictors_3;
  steps = sc_steps_2;
  names = sc_names_1;
  nb_nts = sc_nts_8.length;
  i$$52 = nb_nts - 1;
  var v234 = i$$52 >= 0;
  for (;v234;) {
    sc_steps_2[i$$52] = i$$52 - nb_nts;
    var v232 = sc_names_1;
    var v233 = i$$52;
    var v1136 = sc_nts_8[i$$52];
    var v3691 = sc_list(v1136, 0);
    v232[v233] = v3691;
    var v3692 = sc_list(i$$52);
    sc_enders_4[i$$52] = v3692;
    --i$$52;
    v234 = i$$52 >= 0;
  }
  def_loop = v86;
  var v235 = sc_nts_8.length;
  def_loop(grammar, v235);
  parser_descr = [lexer, sc_nts_8, sc_starters_5, sc_enders_4, sc_predictors_3, sc_steps_2, sc_names_1];
  return v108;
}
function v79(n$$12) {
  var optrOpnd$$1;
  var term$$7;
  var sc_n_20;
  var answer;
  var sc_term_21;
  var sc_term_22;
  rewrite_count_nboyer = 0;
  term$$7 = sc_const_4_nboyer;
  sc_n_20 = n$$12;
  var v1137 = sc_n_20 === 0;
  var v237 = !v1137;
  for (;v237;) {
    var v236 = new sc_Pair("\u1e9cf", null);
    term$$7 = sc_list("\u1e9cor", term$$7, v236);
    --sc_n_20;
    var v1138 = sc_n_20 === 0;
    v237 = !v1138;
  }
  sc_term_22 = term$$7;
  var v1139 = sc_term_22 instanceof sc_Pair;
  var v240 = !v1139;
  if (v240) {
    optrOpnd$$1 = sc_term_22;
  } else {
    var v1140 = sc_term_22.car;
    var v238 = BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(v1140);
    var v1141 = sc_term_22.cdr;
    var v239 = translate_args_nboyer(v1141);
    optrOpnd$$1 = new sc_Pair(v238, v239);
  }
  var v1142;
  var v1718 = const_nboyer === null;
  if (v1718) {
    v1142 = null;
  } else {
    var v2416 = const_nboyer.car;
    var v2104 = v2416.car;
    var v2735 = const_nboyer.car;
    var v2417 = v2735.cdr;
    var v2105 = translate_term_nboyer(v2417);
    var v1716 = new sc_Pair(v2104, v2105);
    var v2106 = const_nboyer.cdr;
    var v1717 = translate_alist_nboyer(v2106);
    v1142 = new sc_Pair(v1716, v1717);
  }
  var v241 = v1142;
  sc_term_21 = apply_subst_nboyer(v241, optrOpnd$$1);
  var v242 = rewrite_nboyer(sc_term_21);
  answer = tautologyp_nboyer(v242, null, null);
  sc_write(rewrite_count_nboyer);
  sc_display(" rewrites");
  sc_newline();
  var v243 = answer !== false;
  if (v243) {
    return rewrite_count_nboyer;
  } else {
    return false;
  }
  return;
}
function v78() {
  var symbol_record$$2;
  var value$$28;
  var BgL_sc_symbolzd2record_16zd2;
  var sym$$5;
  var sc_sym_17;
  var term$$6;
  var lst$$7;
  var sc_term_18;
  var sc_term_19;
  BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer = null;
  if_constructor_nboyer = BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer("\u1e9cif");
  sc_term_19 = new sc_Pair("\u1e9cf", null);
  var v1143;
  var v2107 = sc_term_19 instanceof sc_Pair;
  var v1721 = !v2107;
  if (v1721) {
    v1143 = sc_term_19;
  } else {
    var v2108 = sc_term_19.car;
    var v1719 = BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(v2108);
    var v2109 = sc_term_19.cdr;
    var v1720 = translate_args_nboyer(v2109);
    v1143 = new sc_Pair(v1719, v1720);
  }
  false_term_nboyer = v1143;
  sc_term_18 = new sc_Pair("\u1e9ct", null);
  var v1144;
  var v2110 = sc_term_18 instanceof sc_Pair;
  var v1724 = !v2110;
  if (v1724) {
    v1144 = sc_term_18;
  } else {
    var v2111 = sc_term_18.car;
    var v1722 = BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(v2111);
    var v2112 = sc_term_18.cdr;
    var v1723 = translate_args_nboyer(v2112);
    v1144 = new sc_Pair(v1722, v1723);
  }
  true_term_nboyer = v1144;
  lst$$7 = sc_const_3_nboyer;
  var v1145 = lst$$7 === null;
  var v248 = !v1145;
  for (;v248;) {
    term$$6 = lst$$7.car;
    var v1146 = term$$6 instanceof sc_Pair;
    if (v1146) {
      var v2113 = term$$6.car;
      var v1725 = v2113 === "\u1e9cequal";
      if (v1725) {
        var v2418 = term$$6.cdr;
        var v2114 = v2418.car;
        v1725 = v2114 instanceof sc_Pair;
      }
      v1146 = v1725;
    }
    var v247 = v1146;
    if (v247) {
      var v1147 = term$$6.cdr;
      var v244 = v1147.car;
      sc_sym_17 = v244.car;
      var v1148;
      var v2115 = term$$6 instanceof sc_Pair;
      var v1728 = !v2115;
      if (v1728) {
        v1148 = term$$6;
      } else {
        var v2116 = term$$6.car;
        var v1726 = BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(v2116);
        var v2117 = term$$6.cdr;
        var v1727 = translate_args_nboyer(v2117);
        v1148 = new sc_Pair(v1726, v1727);
      }
      var v245 = v1148;
      var v2419 = term$$6.cdr;
      var v2118 = v2419.car;
      sym$$5 = v2118.car;
      BgL_sc_symbolzd2record_16zd2 = BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(sym$$5);
      var v246 = BgL_sc_symbolzd2record_16zd2[1];
      value$$28 = new sc_Pair(v245, v246);
      symbol_record$$2 = BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(sc_sym_17);
      symbol_record$$2[1] = value$$28;
    } else {
      sc_error("ADD-LEMMA did not like term:  ", term$$6);
    }
    lst$$7 = lst$$7.cdr;
    var v1149 = lst$$7 === null;
    v248 = !v1149;
  }
  return true;
}
function v77(x$$77, lst$$6) {
  for (;true;) {
    var v250 = lst$$6 === null;
    if (v250) {
      return false;
    } else {
      var v1729 = lst$$6.car;
      var v1150 = is_term_equal_nboyer(x$$77, v1729);
      var v249 = v1150 !== false;
      if (v249) {
        return true;
      } else {
        lst$$6 = lst$$6.cdr;
      }
    }
  }
  return;
}
function v76(x$$76, y$$42) {
  var lst1$$1;
  var lst2$$1;
  var r2;
  var r1$$1;
  var v256 = x$$76 instanceof sc_Pair;
  if (v256) {
    var v255 = y$$42 instanceof sc_Pair;
    if (v255) {
      r1$$1 = x$$76.car;
      r2 = y$$42.car;
      var v1151 = r1$$1 === r2;
      var v254 = v1151 !== false;
      if (v254) {
        lst1$$1 = x$$76.cdr;
        lst2$$1 = y$$42.cdr;
        for (;true;) {
          var v253 = lst1$$1 === null;
          if (v253) {
            return lst2$$1 === null;
          } else {
            var v252 = lst2$$1 === null;
            if (v252) {
              return false;
            } else {
              var v1730 = lst1$$1.car;
              var v1731 = lst2$$1.car;
              var v1152 = is_term_equal_nboyer(v1730, v1731);
              var v251 = v1152 !== false;
              if (v251) {
                lst1$$1 = lst1$$1.cdr;
                lst2$$1 = lst2$$1.cdr;
              } else {
                return false;
              }
            }
          }
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return sc_isEqual(x$$76, y$$42);
  }
  return;
}
function v75(n$$11) {
  var sc_n_15;
  var v257;
  var v1155 = sc_isEqual(n$$11, 1);
  if (v1155) {
    v257 = sc_list("\u1e9cimplies", 0, 1);
  } else {
    var v1732 = n$$11 - 1;
    var v1153 = sc_list("\u1e9cimplies", v1732, n$$11);
    sc_n_15 = n$$11 - 1;
    var v2119;
    var v2422 = sc_isEqual(sc_n_15, 1);
    if (v2422) {
      v2119 = sc_list("\u1e9cimplies", 0, 1);
    } else {
      var v2736 = sc_n_15 - 1;
      var v2420 = sc_list("\u1e9cimplies", v2736, sc_n_15);
      var v2737 = sc_n_15 - 1;
      var v2421 = trans_of_implies1_nboyer(v2737);
      v2119 = sc_list("\u1e9cand", v2420, v2421);
    }
    var v1154 = v2119;
    v257 = sc_list("\u1e9cand", v1153, v1154);
  }
  return v257;
}
function v74(term1, term2$$1) {
  var lst1;
  var lst2;
  var temp_temp$$1;
  var v1156 = term2$$1 instanceof sc_Pair;
  var v267 = !v1156;
  if (v267) {
    temp_temp$$1 = sc_assq(term2$$1, unify_subst_nboyer);
    var v261 = temp_temp$$1 !== false;
    if (v261) {
      var v258 = temp_temp$$1.cdr;
      return is_term_equal_nboyer(term1, v258);
    } else {
      var v260 = sc_isNumber(term2$$1);
      if (v260) {
        return sc_isEqual(term1, term2$$1);
      } else {
        var v259 = new sc_Pair(term2$$1, term1);
        unify_subst_nboyer = new sc_Pair(v259, unify_subst_nboyer);
        return true;
      }
    }
  } else {
    var v1157 = term1 instanceof sc_Pair;
    var v266 = !v1157;
    if (v266) {
      return false;
    } else {
      var v1158 = term1.car;
      var v1159 = term2$$1.car;
      var v265 = v1158 === v1159;
      if (v265) {
        lst1 = term1.cdr;
        lst2 = term2$$1.cdr;
        for (;true;) {
          var v264 = lst1 === null;
          if (v264) {
            return lst2 === null;
          } else {
            var v263 = lst2 === null;
            if (v263) {
              return false;
            } else {
              var v1733 = lst1.car;
              var v1734 = lst2.car;
              var v1160 = one_way_unify1_nboyer(v1733, v1734);
              var v262 = v1160 !== false;
              if (v262) {
                lst1 = lst1.cdr;
                lst2 = lst2.cdr;
              } else {
                return false;
              }
            }
          }
        }
      } else {
        return false;
      }
    }
  }
  return;
}
function v73(lst$$5) {
  var sc_lst_14;
  var v268;
  var v1163 = lst$$5 === null;
  if (v1163) {
    v268 = null;
  } else {
    var v1735 = lst$$5.car;
    var v1161 = rewrite_nboyer(v1735);
    sc_lst_14 = lst$$5.cdr;
    var v2120;
    var v2425 = sc_lst_14 === null;
    if (v2425) {
      v2120 = null;
    } else {
      var v2738 = sc_lst_14.car;
      var v2423 = rewrite_nboyer(v2738);
      var v2739 = sc_lst_14.cdr;
      var v2424 = rewrite_args_nboyer(v2739);
      v2120 = new sc_Pair(v2423, v2424);
    }
    var v1162 = v2120;
    v268 = new sc_Pair(v1161, v1162);
  }
  return v268;
}
function v72(term$$5) {
  var term2;
  var sc_term_12;
  var lst$$4;
  var symbol_record$$1;
  var sc_lst_13;
  ++rewrite_count_nboyer;
  var v1164 = term$$5 instanceof sc_Pair;
  var v274 = !v1164;
  if (v274) {
    return term$$5;
  } else {
    var v269 = term$$5.car;
    sc_lst_13 = term$$5.cdr;
    var v1736;
    var v2123 = sc_lst_13 === null;
    if (v2123) {
      v1736 = null;
    } else {
      var v2426 = sc_lst_13.car;
      var v2121 = rewrite_nboyer(v2426);
      var v2427 = sc_lst_13.cdr;
      var v2122 = rewrite_args_nboyer(v2427);
      v1736 = new sc_Pair(v2121, v2122);
    }
    var v270 = v1736;
    sc_term_12 = new sc_Pair(v269, v270);
    symbol_record$$1 = term$$5.car;
    lst$$4 = symbol_record$$1[1];
    for (;true;) {
      var v273 = lst$$4 === null;
      if (v273) {
        return sc_term_12;
      } else {
        var v2740 = lst$$4.car;
        var v2428 = v2740.cdr;
        term2 = v2428.car;
        unify_subst_nboyer = null;
        var v1165 = one_way_unify1_nboyer(sc_term_12, term2);
        var v272 = v1165 !== false;
        if (v272) {
          var v2429 = lst$$4.car;
          var v2124 = v2429.cdr;
          var v1737 = v2124.cdr;
          var v1166 = v1737.car;
          var v271 = apply_subst_nboyer(unify_subst_nboyer, v1166);
          return rewrite_nboyer(v271);
        } else {
          lst$$4 = lst$$4.cdr;
        }
      }
    }
  }
  return;
}
function v71(sc_x_11, true_lst, false_lst) {
  var tmp1125;
  var x$$75;
  var tmp1126;
  var sc_x_8;
  var sc_tmp1125_9;
  var sc_tmp1126_10;
  for (;true;) {
    sc_tmp1126_10 = is_term_equal_nboyer(sc_x_11, true_term_nboyer);
    var v2125;
    var v2430 = sc_tmp1126_10 !== false;
    if (v2430) {
      v2125 = sc_tmp1126_10;
    } else {
      v2125 = is_term_member_nboyer(sc_x_11, true_lst);
    }
    var v1167 = v2125;
    var v285 = v1167 !== false;
    if (v285) {
      return true;
    } else {
      sc_tmp1125_9 = is_term_equal_nboyer(sc_x_11, false_term_nboyer);
      var v2126;
      var v2431 = sc_tmp1125_9 !== false;
      if (v2431) {
        v2126 = sc_tmp1125_9;
      } else {
        v2126 = is_term_member_nboyer(sc_x_11, false_lst);
      }
      var v1168 = v2126;
      var v284 = v1168 !== false;
      if (v284) {
        return false;
      } else {
        var v1169 = sc_x_11 instanceof sc_Pair;
        var v283 = !v1169;
        if (v283) {
          return false;
        } else {
          var v1170 = sc_x_11.car;
          var v282 = v1170 === if_constructor_nboyer;
          if (v282) {
            var v2432 = sc_x_11.cdr;
            sc_x_8 = v2432.car;
            tmp1126 = is_term_equal_nboyer(sc_x_8, true_term_nboyer);
            var v2127;
            var v2433 = tmp1126 !== false;
            if (v2433) {
              v2127 = tmp1126;
            } else {
              v2127 = is_term_member_nboyer(sc_x_8, true_lst);
            }
            var v1171 = v2127;
            var v281 = v1171 !== false;
            if (v281) {
              var v1172 = sc_x_11.cdr;
              var v275 = v1172.cdr;
              sc_x_11 = v275.car;
            } else {
              var v2434 = sc_x_11.cdr;
              x$$75 = v2434.car;
              tmp1125 = is_term_equal_nboyer(x$$75, false_term_nboyer);
              var v2128;
              var v2435 = tmp1125 !== false;
              if (v2435) {
                v2128 = tmp1125;
              } else {
                v2128 = is_term_member_nboyer(x$$75, false_lst);
              }
              var v1173 = v2128;
              var v280 = v1173 !== false;
              if (v280) {
                var v1738 = sc_x_11.cdr;
                var v1174 = v1738.cdr;
                var v276 = v1174.cdr;
                sc_x_11 = v276.car;
              } else {
                var v2436 = sc_x_11.cdr;
                var v2129 = v2436.cdr;
                var v1739 = v2129.car;
                var v2437 = sc_x_11.cdr;
                var v2130 = v2437.car;
                var v1740 = new sc_Pair(v2130, true_lst);
                var v1175 = tautologyp_nboyer(v1739, v1740, false_lst);
                var v279 = v1175 !== false;
                if (v279) {
                  var v1176 = sc_x_11.cdr;
                  var v277 = v1176.car;
                  false_lst = new sc_Pair(v277, false_lst);
                  var v1741 = sc_x_11.cdr;
                  var v1177 = v1741.cdr;
                  var v278 = v1177.cdr;
                  sc_x_11 = v278.car;
                } else {
                  return false;
                }
              }
            }
          } else {
            return false;
          }
        }
      }
    }
  }
  return;
}
function v70(alist$$2, lst$$3) {
  var sc_lst_7;
  var v286;
  var v1180 = lst$$3 === null;
  if (v1180) {
    v286 = null;
  } else {
    var v1742 = lst$$3.car;
    var v1178 = apply_subst_nboyer(alist$$2, v1742);
    sc_lst_7 = lst$$3.cdr;
    var v2131;
    var v2440 = sc_lst_7 === null;
    if (v2440) {
      v2131 = null;
    } else {
      var v2741 = sc_lst_7.car;
      var v2438 = apply_subst_nboyer(alist$$2, v2741);
      var v2742 = sc_lst_7.cdr;
      var v2439 = apply_subst_lst_nboyer(alist$$2, v2742);
      v2131 = new sc_Pair(v2438, v2439);
    }
    var v1179 = v2131;
    v286 = new sc_Pair(v1178, v1179);
  }
  return v286;
}
function v69(alist$$1, term$$4) {
  var lst$$2;
  var temp_temp;
  var v287;
  var v1743 = term$$4 instanceof sc_Pair;
  var v1183 = !v1743;
  if (v1183) {
    temp_temp = sc_assq(term$$4, alist$$1);
    var v1744;
    var v2132 = temp_temp !== false;
    if (v2132) {
      v1744 = temp_temp.cdr;
    } else {
      v1744 = term$$4;
    }
    v287 = v1744;
  } else {
    var v1181 = term$$4.car;
    lst$$2 = term$$4.cdr;
    var v2133;
    var v2443 = lst$$2 === null;
    if (v2443) {
      v2133 = null;
    } else {
      var v2743 = lst$$2.car;
      var v2441 = apply_subst_nboyer(alist$$1, v2743);
      var v2744 = lst$$2.cdr;
      var v2442 = apply_subst_lst_nboyer(alist$$1, v2744);
      v2133 = new sc_Pair(v2441, v2442);
    }
    var v1182 = v2133;
    v287 = new sc_Pair(v1181, v1182);
  }
  return v287;
}
function v68(alist) {
  var sc_alist_6;
  var term$$3;
  var v288;
  var v1186 = alist === null;
  if (v1186) {
    v288 = null;
  } else {
    var v2134 = alist.car;
    var v1745 = v2134.car;
    var v2444 = alist.car;
    term$$3 = v2444.cdr;
    var v2445;
    var v3004 = term$$3 instanceof sc_Pair;
    var v2747 = !v3004;
    if (v2747) {
      v2445 = term$$3;
    } else {
      var v3005 = term$$3.car;
      var v2745 = BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(v3005);
      var v3006 = term$$3.cdr;
      var v2746 = translate_args_nboyer(v3006);
      v2445 = new sc_Pair(v2745, v2746);
    }
    var v1746 = v2445;
    var v1184 = new sc_Pair(v1745, v1746);
    sc_alist_6 = alist.cdr;
    var v2135;
    var v2448 = sc_alist_6 === null;
    if (v2448) {
      v2135 = null;
    } else {
      var v3007 = sc_alist_6.car;
      var v2748 = v3007.car;
      var v3243 = sc_alist_6.car;
      var v3008 = v3243.cdr;
      var v2749 = translate_term_nboyer(v3008);
      var v2446 = new sc_Pair(v2748, v2749);
      var v2750 = sc_alist_6.cdr;
      var v2447 = translate_alist_nboyer(v2750);
      v2135 = new sc_Pair(v2446, v2447);
    }
    var v1185 = v2135;
    v288 = new sc_Pair(v1184, v1185);
  }
  return v288;
}
function v67(sym$$4) {
  var r;
  var x$$74;
  x$$74 = sc_assq(sym$$4, BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer);
  var v1187;
  var v1747 = x$$74 !== false;
  if (v1747) {
    v1187 = x$$74.cdr;
  } else {
    r = [sym$$4, null];
    var v2449 = new sc_Pair(sym$$4, r);
    BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer = new sc_Pair(v2449, BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer);
    v1187 = r;
  }
  return v1187;
}
function v66(term$$2) {
  var optrOpnd;
  var tail1131;
  var L1127;
  var falseHead1130;
  var symbol_record;
  var v1188 = term$$2 instanceof sc_Pair;
  var v292 = !v1188;
  if (v292) {
    return term$$2;
  } else {
    falseHead1130 = new sc_Pair(null, null);
    L1127 = term$$2.cdr;
    tail1131 = falseHead1130;
    var v1189 = L1127 === null;
    var v290 = !v1189;
    for (;v290;) {
      var v1190 = L1127.car;
      var v289 = untranslate_term_nboyer(v1190);
      var v3693 = new sc_Pair(v289, null);
      tail1131.cdr = v3693;
      tail1131 = tail1131.cdr;
      L1127 = L1127.cdr;
      var v1191 = L1127 === null;
      v290 = !v1191;
    }
    optrOpnd = falseHead1130.cdr;
    symbol_record = term$$2.car;
    var v291 = symbol_record[0];
    return new sc_Pair(v291, optrOpnd);
  }
  return;
}
function v65(lst$$1) {
  var sc_lst_5;
  var term$$1;
  var v293;
  var v1194 = lst$$1 === null;
  if (v1194) {
    v293 = null;
  } else {
    term$$1 = lst$$1.car;
    var v2136;
    var v2751 = term$$1 instanceof sc_Pair;
    var v2452 = !v2751;
    if (v2452) {
      v2136 = term$$1;
    } else {
      var v2752 = term$$1.car;
      var v2450 = BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(v2752);
      var v2753 = term$$1.cdr;
      var v2451 = translate_args_nboyer(v2753);
      v2136 = new sc_Pair(v2450, v2451);
    }
    var v1192 = v2136;
    sc_lst_5 = lst$$1.cdr;
    var v2137;
    var v2455 = sc_lst_5 === null;
    if (v2455) {
      v2137 = null;
    } else {
      var v2754 = sc_lst_5.car;
      var v2453 = translate_term_nboyer(v2754);
      var v2755 = sc_lst_5.cdr;
      var v2454 = translate_args_nboyer(v2755);
      v2137 = new sc_Pair(v2453, v2454);
    }
    var v1193 = v2137;
    v293 = new sc_Pair(v1192, v1193);
  }
  return v293;
}
function v64(term) {
  var lst;
  var v294;
  var v1748 = term instanceof sc_Pair;
  var v1197 = !v1748;
  if (v1197) {
    v294 = term;
  } else {
    var v1749 = term.car;
    var v1195 = BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer(v1749);
    lst = term.cdr;
    var v2138;
    var v2458 = lst === null;
    if (v2458) {
      v2138 = null;
    } else {
      var v2756 = lst.car;
      var v2456 = translate_term_nboyer(v2756);
      var v2757 = lst.cdr;
      var v2457 = translate_args_nboyer(v2757);
      v2138 = new sc_Pair(v2456, v2457);
    }
    var v1196 = v2138;
    v294 = new sc_Pair(v1195, v1196);
  }
  return v294;
}
function v63() {
  return true;
}
function v62() {
  return true;
}
function v61() {
  function v60(rewrites) {
    var v295 = sc_isNumber(rewrites);
    if (v295) {
      switch(n$$10) {
        case 0:
          return rewrites === 95024;
        case 1:
          return rewrites === 591777;
        case 2:
          return rewrites === 1813975;
        case 3:
          return rewrites === 5375678;
        case 4:
          return rewrites === 16445406;
        case 5:
          return rewrites === 51507739;
        default:
          return true;
      }
    } else {
      return false;
    }
    return;
  }
  function v59() {
    return BgL_testzd2boyerzd2(n$$10);
  }
  var args$$5 = null;
  var v296 = arguments.length;
  var sc_tmp = v296 - 1;
  var v298 = sc_tmp >= 0;
  for (;v298;) {
    var v297 = arguments[sc_tmp];
    args$$5 = sc_cons(v297, args$$5);
    sc_tmp--;
    v298 = sc_tmp >= 0;
  }
  var n$$10;
  var v1750;
  var v2139 = args$$5 === null;
  if (v2139) {
    v1750 = 0;
  } else {
    v1750 = args$$5.car;
  }
  n$$10 = v1750;
  BgL_setupzd2boyerzd2();
  var v1751 = sc_number2string(n$$10);
  var v1198 = "nboyer" + v1751;
  BgL_runzd2benchmarkzd2(v1198, 1, v59, v60);
  return;
}
function v58() {
  var v1199 = this.charAt(0);
  var v302 = v1199 === sc_SYMBOL_PREFIX;
  if (v302) {
    return this.slice(1);
  } else {
    var v1200 = this.charAt(0);
    var v301 = v1200 === sc_KEYWORD_PREFIX;
    if (v301) {
      var v299 = this.slice(1);
      return ":" + v299;
    } else {
      var v1201 = sc_escapeWriteString(this);
      var v300 = '"' + v1201;
      return v300 + '"';
    }
  }
  return;
}
function v57() {
  var v1202 = this.charAt(0);
  var v305 = v1202 === sc_SYMBOL_PREFIX;
  if (v305) {
    return this.slice(1);
  } else {
    var v1203 = this.charAt(0);
    var v304 = v1203 === sc_KEYWORD_PREFIX;
    if (v304) {
      var v303 = this.slice(1);
      return ":" + v303;
    } else {
      return this.toString();
    }
  }
  return;
}
function v56() {
  function v55(sym$$3) {
    counter++;
    var v306 = !sym$$3;
    if (v306) {
      sym$$3 = sc_SYMBOL_PREFIX;
    }
    var v1752 = sym$$3 + "s";
    var v1204 = v1752 + counter;
    var v307 = v1204 + "~";
    return v307 + "^sC-GeNsYm ";
  }
  var counter = 1E3;
  return v55;
}
function v54(symb$$4) {
  var v1205 = symb$$4 + "use";
  var v313 = this[v1205];
  if (v313) {
    var v308 = symb$$4 + "nb";
    var nb$$5 = this[v308];
    var v1206 = this[symb$$4];
    var v2140 = this[symb$$4];
    this[symb$$4] = v2140 - 1;
    var v311 = v1206 === 0;
    if (v311) {
      delete this[symb$$4];
      var v309 = symb$$4 + "nb";
      delete this[v309];
      var v310 = symb$$4 + "use";
      delete this[v310];
    }
    var v312 = "#" + nb$$5;
    return v312 + "#";
  }
  var v1207 = this[symb$$4];
  var v2141 = this[symb$$4];
  this[symb$$4] = v2141 - 1;
  var v316 = v1207 === 0;
  if (v316) {
    delete this[symb$$4];
    var v314 = symb$$4 + "nb";
    delete this[v314];
    var v315 = symb$$4 + "use";
    delete this[v315];
  }
  var res$$28 = "";
  var v1208 = this[symb$$4];
  var v318 = v1208 !== undefined;
  if (v318) {
    var v317 = symb$$4 + "use";
    this[v317] = true;
    var v2459 = symb$$4 + "nb";
    var v2142 = this[v2459];
    var v1753 = "#" + v2142;
    var v1209 = v1753 + "=";
    res$$28 = res$$28 + v1209;
  }
  res$$28 = res$$28 + "#(";
  var i$$46 = 0;
  var v1210 = this.length;
  var v320 = i$$46 < v1210;
  for (;v320;) {
    var v1754 = this[i$$46];
    var v1211 = sc_genToWriteCircleString(v1754, symb$$4);
    res$$28 = res$$28 + v1211;
    var v1755 = this.length;
    var v1212 = v1755 - 1;
    var v319 = i$$46 < v1212;
    if (v319) {
      res$$28 = res$$28 + " ";
    }
    i$$46++;
    var v1213 = this.length;
    v320 = i$$46 < v1213;
  }
  res$$28 = res$$28 + ")";
  return res$$28;
}
function v53(symb$$3, inList) {
  var v1214 = symb$$3 + "use";
  var v327 = this[v1214];
  if (v327) {
    var v321 = symb$$3 + "nb";
    var nb$$4 = this[v321];
    var v1215 = this[symb$$3];
    var v2143 = this[symb$$3];
    this[symb$$3] = v2143 - 1;
    var v324 = v1215 === 0;
    if (v324) {
      delete this[symb$$3];
      var v322 = symb$$3 + "nb";
      delete this[v322];
      var v323 = symb$$3 + "use";
      delete this[v323];
    }
    if (inList) {
      var v325 = ". #" + nb$$4;
      return v325 + "#";
    } else {
      var v326 = "#" + nb$$4;
      return v326 + "#";
    }
  }
  var v1216 = this[symb$$3];
  var v2144 = this[symb$$3];
  this[symb$$3] = v2144 - 1;
  var v330 = v1216 === 0;
  if (v330) {
    delete this[symb$$3];
    var v328 = symb$$3 + "nb";
    delete this[v328];
    var v329 = symb$$3 + "use";
    delete this[v329];
  }
  var res$$27 = "";
  var v1217 = this[symb$$3];
  var v332 = v1217 !== undefined;
  if (v332) {
    var v331 = symb$$3 + "use";
    this[v331] = true;
    if (inList) {
      var v2460 = symb$$3 + "nb";
      var v2145 = this[v2460];
      var v1756 = ". #" + v2145;
      var v1218 = v1756 + "=";
      res$$27 = res$$27 + v1218;
    } else {
      var v2461 = symb$$3 + "nb";
      var v2146 = this[v2461];
      var v1757 = "#" + v2146;
      var v1219 = v1757 + "=";
      res$$27 = res$$27 + v1219;
    }
    inList = false;
  }
  var v333 = !inList;
  if (v333) {
    res$$27 = res$$27 + "(";
  }
  var v1758 = this.car;
  var v1220 = sc_genToWriteCircleString(v1758, symb$$3);
  res$$27 = res$$27 + v1220;
  var v1221 = this.cdr;
  var v335 = sc_isPair(v1221);
  if (v335) {
    var v2147 = this.cdr;
    var v1759 = v2147.sc_toWriteCircleString(symb$$3, true);
    var v1222 = " " + v1759;
    res$$27 = res$$27 + v1222;
  } else {
    var v1223 = this.cdr;
    var v334 = v1223 !== null;
    if (v334) {
      var v2148 = this.cdr;
      var v1760 = sc_genToWriteCircleString(v2148, symb$$3);
      var v1224 = " . " + v1760;
      res$$27 = res$$27 + v1224;
    }
  }
  var v336 = !inList;
  if (v336) {
    res$$27 = res$$27 + ")";
  }
  return res$$27;
}
function v52() {
  return;
}
function v51(s$$20) {
  throw "don't write on ErrorPort!";
}
function v50() {
  var v337 = this.res;
  return sc_jsstring2string(v337);
}
function v49(s$$19) {
  var v1225 = this.res;
  this.res = v1225 + s$$19;
  return;
}
function v48() {
  return;
}
function v47(obj$$17) {
  return;
}
function v46() {
  function readList(listBeginType) {
    function matchesPeer(open$$2, close) {
      var v1761 = open$$2 === 1;
      if (v1761) {
        v1761 = close === 2;
      }
      var v1226 = v1761;
      var v1763 = !v1226;
      if (v1763) {
        var v1762 = open$$2 === 3;
        if (v1762) {
          v1762 = close === 4;
        }
        v1226 = v1762;
      }
      var v338 = v1226;
      var v1228 = !v338;
      if (v1228) {
        var v1227 = open$$2 === 5;
        if (v1227) {
          v1227 = close === 6;
        }
        v338 = v1227;
      }
      return v338;
    }
    var res$$25 = null;
    for (;true;) {
      var token$$5 = tokenizer$$1.peekToken();
      var v345 = token$$5.type;
      switch(v345) {
        case 2:
        ;
        case 4:
        ;
        case 6:
          var v1229 = token$$5.type;
          var v340 = matchesPeer(listBeginType, v1229);
          if (v340) {
            tokenizer$$1.readToken();
            return sc_reverseBang(res$$25);
          } else {
            var v1230 = "closing par doesn't match: " + listBeginType;
            var v339 = v1230 + " ";
            throw v339 + listEndType;
          }
        ;
        case 0:
          throw "unexpected end of file";;
        case 10:
          tokenizer$$1.readToken();
          var cdr$$3 = this.read();
          var par = tokenizer$$1.readToken();
          var v1764 = par.type;
          var v1231 = matchesPeer(listBeginType, v1764);
          var v343 = !v1231;
          if (v343) {
            var v1232 = "closing par doesn't match: " + listBeginType;
            var v341 = v1232 + " ";
            var v342 = par.type;
            throw v341 + v342;
          } else {
            return sc_reverseAppendBang(res$$25, cdr$$3);
          }
        ;
        default:
          var v344 = this.read();
          res$$25 = sc_cons(v344, res$$25);
      }
    }
    return;
  }
  function readVector() {
    var a$$11 = new Array;
    for (;true;) {
      var token$$6 = tokenizer$$1.peekToken();
      var v347 = token$$6.type;
      switch(v347) {
        case 2:
          tokenizer$$1.readToken();
          return a$$11;
        default:
          var v346 = this.read();
          a$$11.push(v346);
      }
    }
    return;
  }
  function storeRefence(nb$$2) {
    var tmp$$18 = this.read();
    var v348 = this.backref;
    v348[nb$$2] = tmp$$18;
    return tmp$$18;
  }
  function readReference(nb$$3) {
    var v1233 = this.backref;
    var v350 = nb$$3 in v1233;
    if (v350) {
      var v349 = this.backref;
      return v349[nb$$3];
    } else {
      throw "bad reference: " + nb$$3;
    }
    return;
  }
  var tokenizer$$1 = this.tokenizer;
  var token$$4 = tokenizer$$1.readToken();
  var v1234 = token$$4.type;
  var v351 = v1234 === 13;
  if (v351) {
    throw token$$4.val;
  }
  var v361 = token$$4.type;
  switch(v361) {
    case 1:
    ;
    case 3:
    ;
    case 5:
      var v352 = token$$4.type;
      return readList.call(this, v352);
    case 8:
      var v1235 = this.read();
      var v353 = sc_cons(v1235, null);
      return sc_cons("quote", v353);
    case 11:
      var v354 = token$$4.val;
      return sc_jsstring2string(v354);
    case 20:
      var v355 = token$$4.val;
      return new sc_Char(v355);
    case 14:
      return readVector.call(this);
    case 18:
      var v356 = token$$4.val;
      return readReference.call(this, v356);
    case 19:
      var v357 = token$$4.val;
      return storeRefence.call(this, v357);
    case 9:
      var v358 = token$$4.val;
      return sc_jsstring2symbol(v358);
    case 0:
    ;
    case 12:
    ;
    case 15:
    ;
    case 16:
    ;
    case 17:
      return token$$4.val;
    default:
      var v1765 = token$$4.type;
      var v1236 = "unexpected token " + v1765;
      var v359 = v1236 + " ";
      var v360 = token$$4.val;
      throw v359 + v360;;
  }
  return;
}
function v45() {
  function isNumberChar(c$$15) {
    var v362 = c$$15 >= "0";
    if (v362) {
      v362 = c$$15 <= "9";
    }
    return v362;
  }
  function isIdOrNumberChar(c$$16) {
    var v1237 = SC_ID_CLASS.indexOf(c$$16);
    var v363 = v1237 != -1;
    var v1239 = !v363;
    if (v1239) {
      var v1238 = c$$16 >= "0";
      if (v1238) {
        v1238 = c$$16 <= "9";
      }
      v363 = v1238;
    }
    return v363;
  }
  function isWhitespace(c$$17) {
    var v2149 = c$$17 === " ";
    var v2462 = !v2149;
    if (v2462) {
      v2149 = c$$17 === "\r";
    }
    var v1766 = v2149;
    var v2150 = !v1766;
    if (v2150) {
      v1766 = c$$17 === "\n";
    }
    var v1240 = v1766;
    var v1767 = !v1240;
    if (v1767) {
      v1240 = c$$17 === "\t";
    }
    var v364 = v1240;
    var v1241 = !v364;
    if (v1241) {
      v364 = c$$17 === "\f";
    }
    return v364;
  }
  function isWhitespaceOrEOF(c$$18) {
    var v365 = isWhitespace(c$$18);
    var v1242 = !v365;
    if (v1242) {
      v365 = c$$18 === SC_EOF_OBJECT;
    }
    return v365;
  }
  function readString() {
    res = "";
    for (;true;) {
      var c$$19 = port$$1.readChar();
      switch(c$$19) {
        case '"':
          return new sc_Token(11, res);
        case "\\":
          var tmp$$16 = port$$1.readChar();
          switch(tmp$$16) {
            case "0":
              res = res + "\x00";
              break;
            case "a":
              res = res + "a";
              break;
            case "b":
              res = res + "\b";
              break;
            case "f":
              res = res + "\f";
              break;
            case "n":
              res = res + "\n";
              break;
            case "r":
              res = res + "\r";
              break;
            case "t":
              res = res + "\t";
              break;
            case "v":
              res = res + "\v";
              break;
            case '"':
              res = res + '"';
              break;
            case "\\":
              res = res + "\\";
              break;
            case "x":
              var nb = 0;
              for (;true;) {
                var hexC = port$$1.peekChar();
                var v1243 = hexC >= "0";
                if (v1243) {
                  v1243 = hexC <= "9";
                }
                var v374 = v1243;
                if (v374) {
                  port$$1.readChar();
                  var v1244 = nb * 16;
                  var v1245 = hexC.charCodeAt(0);
                  var v366 = v1244 + v1245;
                  var v367 = "0".charCodeAt(0);
                  nb = v366 - v367;
                } else {
                  var v1246 = hexC >= "a";
                  if (v1246) {
                    v1246 = hexC <= "f";
                  }
                  var v373 = v1246;
                  if (v373) {
                    port$$1.readChar();
                    var v1247 = nb * 16;
                    var v1248 = hexC.charCodeAt(0);
                    var v368 = v1247 + v1248;
                    var v369 = "a".charCodeAt(0);
                    nb = v368 - v369;
                  } else {
                    var v1249 = hexC >= "A";
                    if (v1249) {
                      v1249 = hexC <= "F";
                    }
                    var v372 = v1249;
                    if (v372) {
                      port$$1.readChar();
                      var v1250 = nb * 16;
                      var v1251 = hexC.charCodeAt(0);
                      var v370 = v1250 + v1251;
                      var v371 = "A".charCodeAt(0);
                      nb = v370 - v371;
                    } else {
                      var v1252 = res;
                      var v1253 = String.fromCharCode(nb);
                      res = v1252 + v1253;
                      break;
                    }
                  }
                }
              }
              break;
            default:
              var v376 = tmp$$16 === SC_EOF_OBJECT;
              if (v376) {
                var v375 = "unclosed string-literal" + res;
                return new sc_Token(13, v375);
              }
              res = res + tmp$$16;
          }
          break;
        default:
          var v378 = c$$19 === SC_EOF_OBJECT;
          if (v378) {
            var v377 = "unclosed string-literal" + res;
            return new sc_Token(13, v377);
          }
          res = res + c$$19;
      }
    }
    return;
  }
  function readIdOrNumber(firstChar) {
    var res$$23 = firstChar;
    var v1254 = port$$1.peekChar();
    var v379 = isIdOrNumberChar(v1254);
    for (;v379;) {
      var v1255 = port$$1.readChar();
      res$$23 = res$$23 + v1255;
      var v1256 = port$$1.peekChar();
      v379 = isIdOrNumberChar(v1256);
    }
    var v381 = isNaN(res$$23);
    if (v381) {
      return new sc_Token(9, res$$23);
    } else {
      var v380 = res$$23 - 0;
      return new sc_Token(12, v380);
    }
    return;
  }
  function skipWhitespaceAndComments() {
    var done = false;
    var v385 = !done;
    for (;v385;) {
      done = true;
      var v1257 = port$$1.peekChar();
      var v382 = isWhitespace(v1257);
      for (;v382;) {
        port$$1.readChar();
        var v1258 = port$$1.peekChar();
        v382 = isWhitespace(v1258);
      }
      var v1259 = port$$1.peekChar();
      var v384 = v1259 === ";";
      if (v384) {
        port$$1.readChar();
        done = false;
        for (;true;) {
          curChar = port$$1.readChar();
          var v1260 = curChar === SC_EOF_OBJECT;
          var v1768 = !v1260;
          if (v1768) {
            v1260 = curChar === "\n";
          }
          var v383 = v1260;
          if (v383) {
            break;
          }
        }
      }
      v385 = !done;
    }
    return;
  }
  function readSharp() {
    var c$$20 = port$$1.readChar();
    var v386 = isWhitespace(c$$20);
    if (v386) {
      return new sc_Token(13, "bad #-pattern0.");
    }
    var v392 = isNumberChar(c$$20);
    if (v392) {
      var nb$$1 = c$$20 - 0;
      var v1261 = port$$1.peekChar();
      var v389 = isNumberChar(v1261);
      for (;v389;) {
        var v387 = nb$$1 * 10;
        var v1262 = port$$1.readChar();
        var v388 = v1262 - 0;
        nb$$1 = v387 + v388;
        var v1263 = port$$1.peekChar();
        v389 = isNumberChar(v1263);
      }
      var v391 = port$$1.readChar();
      switch(v391) {
        case "#":
          return new sc_Token(18, nb$$1);
        case "=":
          return new sc_Token(19, nb$$1);
        default:
          var v390 = "bad #-pattern1." + nb$$1;
          return new sc_Token(13, v390);
      }
    }
    var v393 = c$$20 === "(";
    if (v393) {
      return new sc_Token(14);
    }
    var v401 = c$$20 === "\\";
    if (v401) {
      var tmp$$17 = "";
      var v1769 = port$$1.peekChar();
      var v1264 = isWhitespaceOrEOF(v1769);
      var v394 = !v1264;
      for (;v394;) {
        var v1265 = port$$1.readChar();
        tmp$$17 = tmp$$17 + v1265;
        var v1770 = port$$1.peekChar();
        var v1266 = isWhitespaceOrEOF(v1770);
        v394 = !v1266;
      }
      var v400 = tmp$$17.length;
      switch(v400) {
        case 0:
          var v1267 = port$$1.peekChar;
          var v396 = sc_isEOFObject(v1267);
          if (v396) {
            return new sc_Token(13, "bad #-pattern2.");
          } else {
            var v395 = port$$1.readChar();
            return new sc_Token(20, v395);
          }
        ;
        case 1:
          return new sc_Token(20, tmp$$17);
        default:
          var v397 = sc_Char.readable2char;
          var v398 = tmp$$17.toLowerCase();
          var entry$$1 = v397[v398];
          if (entry$$1) {
            return new sc_Token(20, entry$$1);
          } else {
            var v399 = "unknown character description: #\\" + tmp$$17;
            return new sc_Token(13, v399);
          }
        ;
      }
    }
    var res$$24;
    var needing;
    switch(c$$20) {
      case "t":
        res$$24 = new sc_Token(15, true);
        needing = "";
        break;
      case "f":
        res$$24 = new sc_Token(16, false);
        needing = "";
        break;
      case "u":
        res$$24 = new sc_Token(17, undefined);
        needing = "nspecified";
        break;
      default:
        var v402 = "bad #-pattern3: " + c$$20;
        return new sc_Token(13, v402);
    }
    for (;true;) {
      c$$20 = port$$1.peekChar();
      var v1771 = isWhitespaceOrEOF(c$$20);
      var v2151 = !v1771;
      if (v2151) {
        v1771 = c$$20 === ")";
      }
      var v1268 = v1771;
      if (v1268) {
        v1268 = needing == "";
      }
      var v406 = v1268;
      if (v406) {
        return res$$24;
      } else {
        var v1269 = isWhitespace(c$$20);
        var v1772 = !v1269;
        if (v1772) {
          v1269 = needing == "";
        }
        var v405 = v1269;
        if (v405) {
          var v1773 = "bad #-pattern4 " + c$$20;
          var v1270 = v1773 + " ";
          var v403 = v1270 + needing;
          return new sc_Token(13, v403);
        } else {
          var v1271 = needing.charAt(0);
          var v404 = v1271 == c$$20;
          if (v404) {
            port$$1.readChar();
            needing = needing.slice(1);
          } else {
            return new sc_Token(13, "bad #-pattern5");
          }
        }
      }
    }
    return;
  }
  var port$$1 = this.port;
  skipWhitespaceAndComments();
  var curChar = port$$1.readChar();
  var v407 = curChar === SC_EOF_OBJECT;
  if (v407) {
    return new sc_Token(0, curChar);
  }
  switch(curChar) {
    case " ":
    ;
    case "\n":
    ;
    case "\t":
      return readWhitespace();
    case "(":
      return new sc_Token(1);
    case ")":
      return new sc_Token(2);
    case "{":
      return new sc_Token(3);
    case "}":
      return new sc_Token(4);
    case "[":
      return new sc_Token(5);
    case "]":
      return new sc_Token(6);
    case "'":
      return new sc_Token(8);
    case "#":
      return readSharp();
    case ".":
      var JSCompiler_inline_result$$0;
      JSCompiler_inline_label_readDot_1: {
        var v1272 = port$$1.peekChar();
        var v408 = isWhitespace(v1272);
        if (v408) {
          JSCompiler_inline_result$$0 = new sc_Token(10);
        } else {
          JSCompiler_inline_result$$0 = readIdOrNumber(".");
        }
      }
      return JSCompiler_inline_result$$0;
    case '"':
      return readString();
    default:
      var v409 = isIdOrNumberChar(curChar);
      if (v409) {
        return readIdOrNumber(curChar);
      }
      throw "unexpected character: " + curChar;;
  }
  return;
}
function v44() {
  var tmp$$15 = this.peekToken();
  delete this.peeked;
  return tmp$$15;
}
function v43() {
  var v410 = this.peeked;
  if (v410) {
    return this.peeked;
  }
  var newToken = this.nextToken();
  this.peeked = newToken;
  return newToken;
}
function v42() {
  var v1273 = this.pos;
  var v1774 = this.str;
  var v1274 = v1774.length;
  var v411 = v1273 >= v1274;
  if (v411) {
    return SC_EOF_OBJECT;
  }
  var v412 = this.str;
  var v413 = this.pos;
  var v1775 = this.pos;
  this.pos = v1775 + 1;
  return v412.charAt(v413);
}
function v41() {
  return false;
}
function v40() {
  throw "can't read from error-port.";
}
function v39() {
  return;
}
function v38() {
  return true;
}
function v37() {
  var tmp$$14 = this.peekChar();
  delete this.peeked;
  return tmp$$14;
}
function v36() {
  var v1275 = "peeked" in this;
  var v414 = !v1275;
  if (v414) {
    var v3694 = this.getNextChar();
    this.peeked = v3694;
  }
  return this.peeked;
}
function v35() {
  var o$$22 = this;
  for (;true;) {
    var v415 = o$$22.MAX_TAIL_CALLs;
    SC_TAIL_OBJECT.calls = v415 - 1;
    var v416 = o$$22.args;
    var fun$$4 = v416.callee;
    var v417 = o$$22.args;
    var res$$21 = fun$$4.apply(SC_TAIL_OBJECT, v417);
    var v418 = res$$21 instanceof sc_Trampoline;
    if (v418) {
      o$$22 = res$$21;
    } else {
      return res$$21;
    }
  }
  return;
}
function v34() {
  return "#{%hashtable}";
}
function v33() {
  var v1276 = sc_hash(this);
  var v419 = "#<struct" + v1276;
  return v419 + ">";
}
function v32() {
  return this.sc_toWriteOrDisplayString(sc_toWriteString);
}
function v31() {
  return this.sc_toWriteOrDisplayString(sc_toDisplayString);
}
function v30(writeOrDisplay$$1) {
  var v1277 = this.length;
  var v420 = v1277 === 0;
  if (v420) {
    return "#()";
  }
  var v1278 = this[0];
  var v421 = writeOrDisplay$$1(v1278);
  var res$$17 = "#(" + v421;
  var i$$28 = 1;
  var v1279 = this.length;
  var v422 = i$$28 < v1279;
  for (;v422;) {
    var v2152 = this[i$$28];
    var v1776 = writeOrDisplay$$1(v2152);
    var v1280 = " " + v1776;
    res$$17 = res$$17 + v1280;
    i$$28++;
    var v1281 = this.length;
    v422 = i$$28 < v1281;
  }
  res$$17 = res$$17 + ")";
  return res$$17;
}
function v29() {
  var v423 = sc_Char.char2readable;
  var v424 = this.val;
  var entry = v423[v424];
  if (entry) {
    return entry;
  } else {
    var v425 = this.val;
    return "#\\" + v425;
  }
  return;
}
function v28() {
  return this.val;
}
function v27() {
  return this.sc_toWriteOrDisplayString(sc_toWriteString);
}
function v26() {
  return this.sc_toWriteOrDisplayString(sc_toDisplayString);
}
function v25(writeOrDisplay) {
  var current = this;
  var res$$3 = "(";
  for (;true;) {
    var v1777 = current.car;
    var v1282 = writeOrDisplay(v1777);
    res$$3 = res$$3 + v1282;
    var v1283 = current.cdr;
    var v427 = sc_isPair(v1283);
    if (v427) {
      res$$3 = res$$3 + " ";
      current = current.cdr;
    } else {
      var v1284 = current.cdr;
      var v426 = v1284 !== null;
      if (v426) {
        var v2153 = current.cdr;
        var v1778 = writeOrDisplay(v2153);
        var v1285 = " . " + v1778;
        res$$3 = res$$3 + v1285;
        break;
      } else {
        break;
      }
    }
  }
  res$$3 = res$$3 + ")";
  return res$$3;
}
function v24() {
  return sc_toDisplayString(this);
}
function v23() {
  BgL_nboyerzd2benchmarkzd2();
  return;
}
function v22() {
  BgL_earleyzd2benchmarkzd2();
  return;
}
function v21(runner$$2) {
  function RunNextSetup() {
    var v429 = index$$40 < length$$12;
    if (v429) {
      try {
        var v1286 = suite$$1.benchmarks;
        var v428 = v1286[index$$40];
        v428.Setup();
      } catch (e$$4) {
        suite$$1.NotifyError(e$$4);
        return null;
      }
      return RunNextBenchmark;
    }
    suite$$1.NotifyResult();
    return null;
  }
  function RunNextBenchmark() {
    try {
      var v1287 = suite$$1.benchmarks;
      var v430 = v1287[index$$40];
      data$$20 = suite$$1.RunSingleBenchmark(v430, data$$20);
    } catch (e$$5) {
      suite$$1.NotifyError(e$$5);
      return null;
    }
    var v431;
    var v1288 = data$$20 == null;
    if (v1288) {
      v431 = RunNextTearDown;
    } else {
      v431 = RunNextBenchmark();
    }
    return v431;
  }
  function RunNextTearDown() {
    try {
      var v1289 = suite$$1.benchmarks;
      var v1290 = index$$40;
      index$$40 = index$$40 + 1;
      var v432 = v1289[v1290];
      v432.TearDown();
    } catch (e$$6) {
      suite$$1.NotifyError(e$$6);
      return null;
    }
    return RunNextSetup;
  }
  BenchmarkSuite.ResetRNG();
  this.results = [];
  this.runner = runner$$2;
  var v433 = this.benchmarks;
  var length$$12 = v433.length;
  var index$$40 = 0;
  var suite$$1 = this;
  var data$$20;
  return RunNextSetup();
}
function v20(benchmark$$1, data$$18) {
  function Measure(data$$19) {
    var elapsed = 0;
    var start$$4 = new Date;
    var i$$6 = 0;
    var v1291;
    if (doDeterministic$$1) {
      var v1779 = benchmark$$1.deterministicIterations;
      v1291 = i$$6 < v1779;
    } else {
      v1291 = elapsed < 1E3;
    }
    var v435 = v1291;
    for (;v435;) {
      benchmark$$1.run();
      var v434 = new Date;
      elapsed = v434 - start$$4;
      i$$6++;
      var v1292;
      if (doDeterministic$$1) {
        var v1780 = benchmark$$1.deterministicIterations;
        v1292 = i$$6 < v1780;
      } else {
        v1292 = elapsed < 1E3;
      }
      v435 = v1292;
    }
    var v436 = data$$19 != null;
    if (v436) {
      var v1293 = data$$19.runs;
      data$$19.runs = v1293 + i$$6;
      var v1294 = data$$19.elapsed;
      data$$19.elapsed = v1294 + elapsed;
    }
    return;
  }
  var config = BenchmarkSuite.config;
  var v437;
  var v1781 = config.doWarmup;
  var v1295 = v1781 !== undefined;
  if (v1295) {
    v437 = config.doWarmup;
  } else {
    v437 = benchmark$$1.doWarmup;
  }
  var doWarmup$$1 = v437;
  var v438;
  var v1782 = config.doDeterministic;
  var v1296 = v1782 !== undefined;
  if (v1296) {
    v438 = config.doDeterministic;
  } else {
    v438 = benchmark$$1.doDeterministic;
  }
  var doDeterministic$$1 = v438;
  var v1297 = !doWarmup$$1;
  if (v1297) {
    v1297 = data$$18 == null;
  }
  var v439 = v1297;
  if (v439) {
    data$$18 = {runs:0, elapsed:0};
  }
  var v445 = data$$18 == null;
  if (v445) {
    Measure(null);
    return {runs:0, elapsed:0};
  } else {
    Measure(data$$18);
    var v1298 = data$$18.runs;
    var v1299 = benchmark$$1.minIterations;
    var v440 = v1298 < v1299;
    if (v440) {
      return data$$18;
    }
    var v1300 = data$$18.elapsed;
    var v441 = v1300 * 1E3;
    var v442 = data$$18.runs;
    var usec = v441 / v442;
    var v443;
    var v1783 = benchmark$$1.rmsResult;
    var v1301 = v1783 != null;
    if (v1301) {
      v443 = benchmark$$1.rmsResult();
    } else {
      v443 = 0;
    }
    var rms = v443;
    var v444 = new BenchmarkResult(benchmark$$1, usec, rms);
    this.NotifyStep(v444);
    return null;
  }
  return;
}
function v19(error$$1) {
  var v1302 = this.runner;
  var v448 = v1302.NotifyError;
  if (v448) {
    var v446 = this.runner;
    var v447 = this.name;
    v446.NotifyError(v447, error$$1);
  }
  var v1303 = this.runner;
  var v451 = v1303.NotifyStep;
  if (v451) {
    var v449 = this.runner;
    var v450 = this.name;
    v449.NotifyStep(v450);
  }
  return;
}
function v18(runner$$1) {
  var v452 = BenchmarkSuite.scores;
  v452.push(1);
  var v454 = runner$$1.NotifyResult;
  if (v454) {
    var v453 = this.name;
    runner$$1.NotifyResult(v453, "Skipped");
  }
  return;
}
function v17() {
  var v455 = this.results;
  var mean = BenchmarkSuite.GeometricMeanTime(v455);
  var v1304 = this.reference;
  var v456 = v1304[0];
  var score$$1 = v456 / mean;
  var v457 = BenchmarkSuite.scores;
  v457.push(score$$1);
  var v1305 = this.runner;
  var v461 = v1305.NotifyResult;
  if (v461) {
    var v458 = 100 * score$$1;
    var formatted$$1 = BenchmarkSuite.FormatScore(v458);
    var v459 = this.runner;
    var v460 = this.name;
    v459.NotifyResult(v460, formatted$$1);
  }
  var v1784 = this.reference;
  var v1306 = v1784.length;
  var v470 = v1306 == 2;
  if (v470) {
    var v462 = this.results;
    var meanLatency = BenchmarkSuite.GeometricMeanLatency(v462);
    var v469 = meanLatency != 0;
    if (v469) {
      var v1307 = this.reference;
      var v463 = v1307[1];
      var scoreLatency = v463 / meanLatency;
      var v464 = BenchmarkSuite.scores;
      v464.push(scoreLatency);
      var v1308 = this.runner;
      var v468 = v1308.NotifyResult;
      if (v468) {
        var v465 = 100 * scoreLatency;
        var formattedLatency = BenchmarkSuite.FormatScore(v465);
        var v466 = this.runner;
        var v1309 = this.name;
        var v467 = v1309 + "Latency";
        v466.NotifyResult(v467, formattedLatency);
      }
    }
  }
  return;
}
function v16(result$$2) {
  var v471 = this.results;
  v471.push(result$$2);
  var v1310 = this.runner;
  var v474 = v1310.NotifyStep;
  if (v474) {
    var v472 = this.runner;
    var v1311 = result$$2.benchmark;
    var v473 = v1311.name;
    v472.NotifyStep(v473);
  }
  return;
}
function v15(value$$27) {
  var v475 = value$$27 > 100;
  if (v475) {
    return value$$27.toFixed(0);
  } else {
    return value$$27.toPrecision(3);
  }
  return;
}
function v14(measurements$$1) {
  var log$$2 = 0;
  var hasLatencyResult = false;
  var i$$5 = 0;
  var v1312 = measurements$$1.length;
  var v477 = i$$5 < v1312;
  for (;v477;) {
    var v1785 = measurements$$1[i$$5];
    var v1313 = v1785.latency;
    var v476 = v1313 != 0;
    if (v476) {
      var v2154 = measurements$$1[i$$5];
      var v1786 = v2154.latency;
      var v1314 = Math.log(v1786);
      log$$2 = log$$2 + v1314;
      hasLatencyResult = true;
    }
    i$$5++;
    var v1315 = measurements$$1.length;
    v477 = i$$5 < v1315;
  }
  if (hasLatencyResult) {
    var v478 = Math.E;
    var v1316 = measurements$$1.length;
    var v479 = log$$2 / v1316;
    return Math.pow(v478, v479);
  } else {
    return 0;
  }
  return;
}
function v13(measurements) {
  var log$$1 = 0;
  var i$$4 = 0;
  var v1317 = measurements.length;
  var v480 = i$$4 < v1317;
  for (;v480;) {
    var v2155 = measurements[i$$4];
    var v1787 = v2155.time;
    var v1318 = Math.log(v1787);
    log$$1 = log$$1 + v1318;
    i$$4++;
    var v1319 = measurements.length;
    v480 = i$$4 < v1319;
  }
  var v481 = Math.E;
  var v1320 = measurements.length;
  var v482 = log$$1 / v1320;
  return Math.pow(v481, v482);
}
function v12() {
  var numbers = BenchmarkSuite.scores;
  var log = 0;
  var i$$3 = 0;
  var v1321 = numbers.length;
  var v483 = i$$3 < v1321;
  for (;v483;) {
    var v1788 = numbers[i$$3];
    var v1322 = Math.log(v1788);
    log = log + v1322;
    i$$3++;
    var v1323 = numbers.length;
    v483 = i$$3 < v1323;
  }
  var v484 = Math.E;
  var v1324 = numbers.length;
  var v485 = log / v1324;
  return Math.pow(v484, v485);
}
function v11() {
  var result$$1 = 0;
  var suites$$1 = BenchmarkSuite.suites;
  var i$$2 = 0;
  var v1325 = suites$$1.length;
  var v486 = i$$2 < v1325;
  for (;v486;) {
    var v2156 = suites$$1[i$$2];
    var v1789 = v2156.benchmarks;
    var v1326 = v1789.length;
    result$$1 = result$$1 + v1326;
    i$$2++;
    var v1327 = suites$$1.length;
    v486 = i$$2 < v1327;
  }
  return result$$1;
}
function v10() {
  var runner = {NotifyStart:ShowBox, NotifyError:AddError, NotifyResult:AddResult, NotifyScore:AddScore};
  var skipBenchmarks$$1 = skipBenchmarks;
  function RunStep() {
    var v1328 = continuation;
    var v1790 = !v1328;
    if (v1790) {
      v1328 = index$$39 < length$$11;
    }
    var v492 = v1328;
    for (;v492;) {
      if (continuation) {
        continuation = continuation();
      } else {
        var v487 = index$$39;
        index$$39 = index$$39 + 1;
        var suite = suites[v487];
        var v489 = runner.NotifyStart;
        if (v489) {
          var v488 = suite.name;
          runner.NotifyStart(v488);
        }
        var v1791 = suite.name;
        var v1329 = skipBenchmarks$$1.indexOf(v1791);
        var v490 = v1329 > -1;
        if (v490) {
          suite.NotifySkipped(runner);
        } else {
          continuation = suite.RunStep(runner);
        }
      }
      var v1792 = continuation;
      if (v1792) {
        var v2157 = typeof window;
        v1792 = v2157 != "undefined";
      }
      var v1330 = v1792;
      if (v1330) {
        v1330 = window.setTimeout;
      }
      var v491 = v1330;
      if (v491) {
        window.setTimeout(RunStep, 25);
        return;
      }
      var v1331 = continuation;
      var v1793 = !v1331;
      if (v1793) {
        v1331 = index$$39 < length$$11;
      }
      v492 = v1331;
    }
    var v494 = runner.NotifyScore;
    if (v494) {
      var score = BenchmarkSuite.GeometricMean();
      var v493 = 100 * score;
      var formatted = BenchmarkSuite.FormatScore(v493);
      runner.NotifyScore(formatted);
    }
    return;
  }
  var v495;
  var v1794 = typeof skipBenchmarks$$1;
  var v1332 = v1794 === "undefined";
  if (v1332) {
    v495 = [];
  } else {
    v495 = skipBenchmarks$$1;
  }
  skipBenchmarks$$1 = v495;
  var continuation = null;
  var suites = BenchmarkSuite.suites;
  var length$$11 = suites.length;
  BenchmarkSuite.scores = [];
  var index$$39 = 0;
  RunStep();
  return;
}
function v9() {
  function v8() {
    function v7() {
      var v1333 = seed + 2127912214;
      var v1334 = seed << 12;
      var v496 = v1333 + v1334;
      seed = v496 & 4294967295;
      var v1335 = seed ^ 3345072700;
      var v1336 = seed >>> 19;
      var v497 = v1335 ^ v1336;
      seed = v497 & 4294967295;
      var v1337 = seed + 374761393;
      var v1338 = seed << 5;
      var v498 = v1337 + v1338;
      seed = v498 & 4294967295;
      var v1339 = seed + 3550635116;
      var v1340 = seed << 9;
      var v499 = v1339 ^ v1340;
      seed = v499 & 4294967295;
      var v1341 = seed + 4251993797;
      var v1342 = seed << 3;
      var v500 = v1341 + v1342;
      seed = v500 & 4294967295;
      var v1343 = seed ^ 3042594569;
      var v1344 = seed >>> 16;
      var v501 = v1343 ^ v1344;
      seed = v501 & 4294967295;
      var v502 = seed & 268435455;
      return v502 / 268435456;
    }
    var seed = 49734321;
    return v7;
  }
  var v503 = Math;
  var v3695 = v8();
  v503.random = v3695;
  return;
}
function v6(s$$2) {
  throw "Alert called with argument: " + s$$2;
}
function v5() {
  return this.time;
}
function v4() {
  var v2463 = performance.now;
  var v2758 = !v2463;
  if (v2758) {
    v2463 = performance.mozNow;
  }
  var v2158 = v2463;
  var v2464 = !v2158;
  if (v2464) {
    v2158 = performance.msNow;
  }
  var v1795 = v2158;
  var v2159 = !v1795;
  if (v2159) {
    v1795 = performance.oNow;
  }
  var v1345 = v1795;
  var v1796 = !v1345;
  if (v1796) {
    v1345 = performance.webkitNow;
  }
  var v504 = v1345;
  var v1346 = !v504;
  if (v1346) {
    v504 = Date.now;
  }
  return v504;
}
function Benchmark(name$$30, deterministicIterations, run) {
  function v1() {
    return;
  }
  function v0() {
    return;
  }
  var setup;
  var tearDown;
  var rmsResult;
  var minIterations;
  var doWarmup = true;
  var doDeterministic = false;
  this.name = name$$30;
  this.doWarmup = doWarmup;
  this.doDeterministic = doDeterministic;
  this.deterministicIterations = deterministicIterations;
  this.run = run;
  var v505;
  if (setup) {
    v505 = setup;
  } else {
    v505 = v0;
  }
  this.Setup = v505;
  var v506;
  if (tearDown) {
    v506 = tearDown;
  } else {
    v506 = v1;
  }
  this.TearDown = v506;
  var v507;
  if (rmsResult) {
    v507 = rmsResult;
  } else {
    v507 = null;
  }
  this.rmsResult = v507;
  var v508;
  if (minIterations) {
    v508 = minIterations;
  } else {
    v508 = 32;
  }
  this.minIterations = v508;
  return;
}
function BenchmarkResult(benchmark, time, latency) {
  this.benchmark = benchmark;
  this.time = time;
  this.latency = latency;
  return;
}
function BenchmarkSuite(name$$31, reference, benchmarks$$1) {
  this.name = name$$31;
  this.reference = reference;
  this.benchmarks = benchmarks$$1;
  var v509 = BenchmarkSuite.suites;
  v509.push(this);
  return;
}
function sc_print_debug() {
  sc_print.apply(null, arguments);
  return;
}
function sc_alert() {
  var len = arguments.length;
  var s$$3 = "";
  var i$$7;
  i$$7 = 0;
  var v510 = i$$7 < len;
  for (;v510;) {
    var v1797 = arguments[i$$7];
    var v1347 = sc_toDisplayString(v1797);
    s$$3 = s$$3 + v1347;
    i$$7++;
    v510 = i$$7 < len;
  }
  return alert(s$$3);
}
function sc_typeof(x$$47) {
  return typeof x$$47;
}
function sc_error() {
  var v511 = sc_jsstring2symbol("*error*");
  var a = [v511];
  var i$$8 = 0;
  var v1348 = arguments.length;
  var v513 = i$$8 < v1348;
  for (;v513;) {
    var v512 = i$$8 + 1;
    a[v512] = arguments[i$$8];
    i$$8++;
    var v1349 = arguments.length;
    v513 = i$$8 < v1349;
  }
  throw a;
}
function sc_raise(obj$$16) {
  throw obj$$16;
}
function sc_withHandlerLambda(handler$$3, body) {
  try {
    return body();
  } catch (e$$7) {
    var v1350 = e$$7._internalException;
    var v514 = !v1350;
    if (v514) {
      return handler$$3(e$$7);
    } else {
      throw e$$7;
    }
  }
  return;
}
function sc_putpropBang(sym, key$$14, val) {
  var ht = sc_properties[sym];
  var v515 = !ht;
  if (v515) {
    ht = new Object;
    sc_properties[sym] = ht;
  }
  ht[key$$14] = val;
  return;
}
function sc_getprop(sym$$1, key$$15) {
  var ht$$1 = sc_properties[sym$$1];
  if (ht$$1) {
    var v516 = key$$15 in ht$$1;
    if (v516) {
      return ht$$1[key$$15];
    } else {
      return false;
    }
  } else {
    return false;
  }
  return;
}
function sc_rempropBang(sym$$2, key$$16) {
  var ht$$2 = sc_properties[sym$$2];
  if (ht$$2) {
    delete ht$$2[key$$16];
  }
  return;
}
function sc_any2String(o) {
  var v517 = sc_toDisplayString(o);
  return jsstring2string(v517);
}
function sc_isEqv(o1, o2) {
  return o1 === o2;
}
function sc_isEq(o1$$1, o2$$1) {
  return o1$$1 === o2$$1;
}
function sc_isNumber(n$$1) {
  var v518 = typeof n$$1;
  return v518 === "number";
}
function sc_isComplex(n$$2) {
  return sc_isNumber(n$$2);
}
function sc_isReal(n$$3) {
  return sc_isNumber(n$$3);
}
function sc_isRational(n$$4) {
  return sc_isReal(n$$4);
}
function sc_isInteger(n$$5) {
  var v519 = parseInt(n$$5);
  return v519 === n$$5;
}
function sc_isExact(n$$6) {
  return false;
}
function sc_isInexact(n$$7) {
  return true;
}
function sc_equal(x$$48) {
  var i$$9 = 1;
  var v1351 = arguments.length;
  var v521 = i$$9 < v1351;
  for (;v521;) {
    var v1352 = arguments[i$$9];
    var v520 = x$$48 !== v1352;
    if (v520) {
      return false;
    }
    i$$9++;
    var v1353 = arguments.length;
    v521 = i$$9 < v1353;
  }
  return true;
}
function sc_less(x$$49) {
  var i$$10 = 1;
  var v1354 = arguments.length;
  var v523 = i$$10 < v1354;
  for (;v523;) {
    var v1355 = arguments[i$$10];
    var v522 = x$$49 >= v1355;
    if (v522) {
      return false;
    }
    x$$49 = arguments[i$$10];
    i$$10++;
    var v1356 = arguments.length;
    v523 = i$$10 < v1356;
  }
  return true;
}
function sc_greater(x$$50, y$$30) {
  var i$$11 = 1;
  var v1357 = arguments.length;
  var v525 = i$$11 < v1357;
  for (;v525;) {
    var v1358 = arguments[i$$11];
    var v524 = x$$50 <= v1358;
    if (v524) {
      return false;
    }
    x$$50 = arguments[i$$11];
    i$$11++;
    var v1359 = arguments.length;
    v525 = i$$11 < v1359;
  }
  return true;
}
function sc_lessEqual(x$$51, y$$31) {
  var i$$12 = 1;
  var v1360 = arguments.length;
  var v527 = i$$12 < v1360;
  for (;v527;) {
    var v1361 = arguments[i$$12];
    var v526 = x$$51 > v1361;
    if (v526) {
      return false;
    }
    x$$51 = arguments[i$$12];
    i$$12++;
    var v1362 = arguments.length;
    v527 = i$$12 < v1362;
  }
  return true;
}
function sc_greaterEqual(x$$52, y$$32) {
  var i$$13 = 1;
  var v1363 = arguments.length;
  var v529 = i$$13 < v1363;
  for (;v529;) {
    var v1364 = arguments[i$$13];
    var v528 = x$$52 < v1364;
    if (v528) {
      return false;
    }
    x$$52 = arguments[i$$13];
    i$$13++;
    var v1365 = arguments.length;
    v529 = i$$13 < v1365;
  }
  return true;
}
function sc_isZero(x$$53) {
  return x$$53 === 0;
}
function sc_isPositive(x$$54) {
  return x$$54 > 0;
}
function sc_isNegative(x$$55) {
  return x$$55 < 0;
}
function sc_isOdd(x$$56) {
  var v530 = x$$56 % 2;
  return v530 === 1;
}
function sc_isEven(x$$57) {
  var v531 = x$$57 % 2;
  return v531 === 0;
}
function sc_plus() {
  var sum = 0;
  var i$$14 = 0;
  var v1366 = arguments.length;
  var v532 = i$$14 < v1366;
  for (;v532;) {
    var v1367 = arguments[i$$14];
    sum = sum + v1367;
    i$$14++;
    var v1368 = arguments.length;
    v532 = i$$14 < v1368;
  }
  return sum;
}
function sc_multi() {
  var product = 1;
  var i$$15 = 0;
  var v1369 = arguments.length;
  var v533 = i$$15 < v1369;
  for (;v533;) {
    var v1370 = arguments[i$$15];
    product = product * v1370;
    i$$15++;
    var v1371 = arguments.length;
    v533 = i$$15 < v1371;
  }
  return product;
}
function sc_minus(x$$58) {
  var v1372 = arguments.length;
  var v535 = v1372 === 1;
  if (v535) {
    return -x$$58;
  } else {
    var res$$1 = x$$58;
    var i$$16 = 1;
    var v1373 = arguments.length;
    var v534 = i$$16 < v1373;
    for (;v534;) {
      var v1374 = arguments[i$$16];
      res$$1 = res$$1 - v1374;
      i$$16++;
      var v1375 = arguments.length;
      v534 = i$$16 < v1375;
    }
    return res$$1;
  }
  return;
}
function sc_div(x$$59) {
  var v1376 = arguments.length;
  var v537 = v1376 === 1;
  if (v537) {
    return 1 / x$$59;
  } else {
    var res$$2 = x$$59;
    var i$$17 = 1;
    var v1377 = arguments.length;
    var v536 = i$$17 < v1377;
    for (;v536;) {
      var v1378 = arguments[i$$17];
      res$$2 = res$$2 / v1378;
      i$$17++;
      var v1379 = arguments.length;
      v536 = i$$17 < v1379;
    }
    return res$$2;
  }
  return;
}
function sc_quotient(x$$60, y$$33) {
  var v538 = x$$60 / y$$33;
  return parseInt(v538);
}
function sc_remainder(x$$61, y$$34) {
  return x$$61 % y$$34;
}
function sc_modulo(x$$62, y$$35) {
  var remainder = x$$62 % y$$35;
  var v1380 = remainder * y$$35;
  var v539 = v1380 < 0;
  if (v539) {
    return remainder + y$$35;
  } else {
    return remainder;
  }
  return;
}
function sc_euclid_gcd(a$$1, b) {
  var temp;
  var v540 = a$$1 === 0;
  if (v540) {
    return b;
  }
  var v541 = b === 0;
  if (v541) {
    return a$$1;
  }
  var v542 = a$$1 < 0;
  if (v542) {
    a$$1 = -a$$1;
  }
  var v543 = b < 0;
  if (v543) {
    b = -b;
  }
  var v544 = b > a$$1;
  if (v544) {
    temp = a$$1;
    a$$1 = b;
    b = temp;
  }
  for (;true;) {
    a$$1 = a$$1 % b;
    var v545 = a$$1 === 0;
    if (v545) {
      return b;
    }
    b = b % a$$1;
    var v546 = b === 0;
    if (v546) {
      return a$$1;
    }
  }
  return b;
}
function sc_gcd() {
  var gcd = 0;
  var i$$18 = 0;
  var v1381 = arguments.length;
  var v548 = i$$18 < v1381;
  for (;v548;) {
    var v547 = arguments[i$$18];
    gcd = sc_euclid_gcd(gcd, v547);
    i$$18++;
    var v1382 = arguments.length;
    v548 = i$$18 < v1382;
  }
  return gcd;
}
function sc_lcm() {
  var lcm = 1;
  var i$$19 = 0;
  var v1383 = arguments.length;
  var v550 = i$$19 < v1383;
  for (;v550;) {
    var v1384 = arguments[i$$19];
    var v1798 = arguments[i$$19];
    var v1385 = sc_euclid_gcd(v1798, lcm);
    var v549 = v1384 / v1385;
    var f = Math.round(v549);
    var v1386 = Math.abs(f);
    lcm = lcm * v1386;
    i$$19++;
    var v1387 = arguments.length;
    v550 = i$$19 < v1387;
  }
  return lcm;
}
function sc_exact2inexact(x$$63) {
  return x$$63;
}
function sc_inexact2exact(x$$64) {
  return x$$64;
}
function sc_number2jsstring(x$$65, radix) {
  if (radix) {
    return x$$65.toString(radix);
  } else {
    return x$$65.toString();
  }
  return;
}
function sc_jsstring2number(s$$4, radix$$1) {
  var v551 = s$$4 === "";
  if (v551) {
    return false;
  }
  if (radix$$1) {
    var t = parseInt(s$$4, radix$$1);
    var v1388 = !t;
    if (v1388) {
      v1388 = t !== 0;
    }
    var v552 = v1388;
    if (v552) {
      return false;
    }
    var v553 = radix$$1 + 1;
    var allowedChars = "01234567890abcdefghijklmnopqrstuvwxyz".substring(0, v553);
    var v2160 = "^[" + allowedChars;
    var v1799 = v2160 + "]*$";
    var v1389 = new RegExp(v1799, "i");
    var v554 = v1389.test(s$$4);
    if (v554) {
      return t;
    } else {
      return false;
    }
  } else {
    t = +s$$4;
    var v1390 = !t;
    if (v1390) {
      v1390 = t !== 0;
    }
    var v555 = v1390;
    if (v555) {
      return false;
    }
    var c = s$$4.charAt(0);
    var v1800 = +c;
    var v1391 = v1800 === 0;
    if (v1391) {
      v1391 = c !== "0";
    }
    var v556 = v1391;
    if (v556) {
      return false;
    }
    return t;
  }
  return;
}
function sc_not(b$$1) {
  return b$$1 === false;
}
function sc_isBoolean(b$$2) {
  var v557 = b$$2 === true;
  var v1392 = !v557;
  if (v1392) {
    v557 = b$$2 === false;
  }
  return v557;
}
function sc_Pair(car, cdr) {
  this.car = car;
  this.cdr = cdr;
  return;
}
function sc_isPair(p) {
  return p instanceof sc_Pair;
}
function sc_isPairEqual(p1, p2) {
  var comp = sc_isEqual;
  var v1393 = p1.car;
  var v1394 = p2.car;
  var v558 = comp(v1393, v1394);
  if (v558) {
    var v1395 = p1.cdr;
    var v1396 = p2.cdr;
    v558 = comp(v1395, v1396);
  }
  return v558;
}
function sc_cons(car$$1, cdr$$1) {
  return new sc_Pair(car$$1, cdr$$1);
}
function sc_consStar() {
  var v1397 = arguments.length;
  var v559 = v1397 - 1;
  var res$$4 = arguments[v559];
  var v560 = arguments.length;
  var i$$20 = v560 - 2;
  var v562 = i$$20 >= 0;
  for (;v562;) {
    var v561 = arguments[i$$20];
    res$$4 = new sc_Pair(v561, res$$4);
    i$$20--;
    v562 = i$$20 >= 0;
  }
  return res$$4;
}
function sc_car(p$$1) {
  return p$$1.car;
}
function sc_cdr(p$$2) {
  return p$$2.cdr;
}
function sc_setCarBang(p$$3, val$$1) {
  p$$3.car = val$$1;
  return;
}
function sc_setCdrBang(p$$4, val$$2) {
  p$$4.cdr = val$$2;
  return;
}
function sc_caar(p$$5) {
  var v563 = p$$5.car;
  return v563.car;
}
function sc_cadr(p$$6) {
  var v564 = p$$6.cdr;
  return v564.car;
}
function sc_cdar(p$$7) {
  var v565 = p$$7.car;
  return v565.cdr;
}
function sc_cddr(p$$8) {
  var v566 = p$$8.cdr;
  return v566.cdr;
}
function sc_caaar(p$$9) {
  var v1398 = p$$9.car;
  var v567 = v1398.car;
  return v567.car;
}
function sc_cadar(p$$10) {
  var v1399 = p$$10.car;
  var v568 = v1399.cdr;
  return v568.car;
}
function sc_caadr(p$$11) {
  var v1400 = p$$11.cdr;
  var v569 = v1400.car;
  return v569.car;
}
function sc_caddr(p$$12) {
  var v1401 = p$$12.cdr;
  var v570 = v1401.cdr;
  return v570.car;
}
function sc_cdaar(p$$13) {
  var v1402 = p$$13.car;
  var v571 = v1402.car;
  return v571.cdr;
}
function sc_cdadr(p$$14) {
  var v1403 = p$$14.cdr;
  var v572 = v1403.car;
  return v572.cdr;
}
function sc_cddar(p$$15) {
  var v1404 = p$$15.car;
  var v573 = v1404.cdr;
  return v573.cdr;
}
function sc_cdddr(p$$16) {
  var v1405 = p$$16.cdr;
  var v574 = v1405.cdr;
  return v574.cdr;
}
function sc_caaaar(p$$17) {
  var v1801 = p$$17.car;
  var v1406 = v1801.car;
  var v575 = v1406.car;
  return v575.car;
}
function sc_caadar(p$$18) {
  var v1802 = p$$18.car;
  var v1407 = v1802.cdr;
  var v576 = v1407.car;
  return v576.car;
}
function sc_caaadr(p$$19) {
  var v1803 = p$$19.cdr;
  var v1408 = v1803.car;
  var v577 = v1408.car;
  return v577.car;
}
function sc_caaddr(p$$20) {
  var v1804 = p$$20.cdr;
  var v1409 = v1804.cdr;
  var v578 = v1409.car;
  return v578.car;
}
function sc_cdaaar(p$$21) {
  var v1805 = p$$21.car;
  var v1410 = v1805.car;
  var v579 = v1410.car;
  return v579.cdr;
}
function sc_cdadar(p$$22) {
  var v1806 = p$$22.car;
  var v1411 = v1806.cdr;
  var v580 = v1411.car;
  return v580.cdr;
}
function sc_cdaadr(p$$23) {
  var v1807 = p$$23.cdr;
  var v1412 = v1807.car;
  var v581 = v1412.car;
  return v581.cdr;
}
function sc_cdaddr(p$$24) {
  var v1808 = p$$24.cdr;
  var v1413 = v1808.cdr;
  var v582 = v1413.car;
  return v582.cdr;
}
function sc_cadaar(p$$25) {
  var v1809 = p$$25.car;
  var v1414 = v1809.car;
  var v583 = v1414.cdr;
  return v583.car;
}
function sc_caddar(p$$26) {
  var v1810 = p$$26.car;
  var v1415 = v1810.cdr;
  var v584 = v1415.cdr;
  return v584.car;
}
function sc_cadadr(p$$27) {
  var v1811 = p$$27.cdr;
  var v1416 = v1811.car;
  var v585 = v1416.cdr;
  return v585.car;
}
function sc_cadddr(p$$28) {
  var v1812 = p$$28.cdr;
  var v1417 = v1812.cdr;
  var v586 = v1417.cdr;
  return v586.car;
}
function sc_cddaar(p$$29) {
  var v1813 = p$$29.car;
  var v1418 = v1813.car;
  var v587 = v1418.cdr;
  return v587.cdr;
}
function sc_cdddar(p$$30) {
  var v1814 = p$$30.car;
  var v1419 = v1814.cdr;
  var v588 = v1419.cdr;
  return v588.cdr;
}
function sc_cddadr(p$$31) {
  var v1815 = p$$31.cdr;
  var v1420 = v1815.car;
  var v589 = v1420.cdr;
  return v589.cdr;
}
function sc_cddddr(p$$32) {
  var v1816 = p$$32.cdr;
  var v1421 = v1816.cdr;
  var v590 = v1421.cdr;
  return v590.cdr;
}
function sc_lastPair(l) {
  var v1422 = sc_isPair(l);
  var v591 = !v1422;
  if (v591) {
    sc_error("sc_lastPair: pair expected");
  }
  var res$$5 = l;
  var cdr$$2 = l.cdr;
  var v592 = sc_isPair(cdr$$2);
  for (;v592;) {
    res$$5 = cdr$$2;
    cdr$$2 = res$$5.cdr;
    v592 = sc_isPair(cdr$$2);
  }
  return res$$5;
}
function sc_isNull(o$$1) {
  return o$$1 === null;
}
function sc_isList(o$$2) {
  var rabbit;
  var turtle;
  rabbit = o$$2;
  turtle = o$$2;
  for (;true;) {
    var v1423 = rabbit === null;
    var v1818 = !v1423;
    if (v1818) {
      var v1817 = rabbit instanceof sc_Pair;
      if (v1817) {
        var v2161 = rabbit.cdr;
        v1817 = v2161 === null;
      }
      v1423 = v1817;
    }
    var v596 = v1423;
    if (v596) {
      return true;
    } else {
      var v1424 = rabbit instanceof sc_Pair;
      if (v1424) {
        var v1819 = rabbit.cdr;
        v1424 = v1819 instanceof sc_Pair;
      }
      var v595 = v1424;
      if (v595) {
        var v593 = rabbit.cdr;
        rabbit = v593.cdr;
        turtle = turtle.cdr;
        var v594 = rabbit === turtle;
        if (v594) {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return;
}
function sc_list() {
  var res$$6 = null;
  var a$$2 = arguments;
  var v597 = a$$2.length;
  var i$$21 = v597 - 1;
  var v599 = i$$21 >= 0;
  for (;v599;) {
    var v598 = a$$2[i$$21];
    res$$6 = new sc_Pair(v598, res$$6);
    i$$21--;
    v599 = i$$21 >= 0;
  }
  return res$$6;
}
function sc_iota(num$$4, init) {
  var res$$7 = null;
  var v600 = !init;
  if (v600) {
    init = 0;
  }
  var i$$22 = num$$4 - 1;
  var v602 = i$$22 >= 0;
  for (;v602;) {
    var v601 = i$$22 + init;
    res$$7 = new sc_Pair(v601, res$$7);
    i$$22--;
    v602 = i$$22 >= 0;
  }
  return res$$7;
}
function sc_makeList(nbEls, fill) {
  var res$$8 = null;
  var i$$23 = 0;
  var v603 = i$$23 < nbEls;
  for (;v603;) {
    res$$8 = new sc_Pair(fill, res$$8);
    i$$23++;
    v603 = i$$23 < nbEls;
  }
  return res$$8;
}
function sc_length(l$$1) {
  var res$$9 = 0;
  var v604 = l$$1 !== null;
  for (;v604;) {
    res$$9++;
    l$$1 = l$$1.cdr;
    v604 = l$$1 !== null;
  }
  return res$$9;
}
function sc_remq(o$$3, l$$2) {
  var dummy = {cdr:null};
  var tail = dummy;
  var v607 = l$$2 !== null;
  for (;v607;) {
    var v1425 = l$$2.car;
    var v606 = v1425 !== o$$3;
    if (v606) {
      var v605 = l$$2.car;
      var v3696 = sc_cons(v605, null);
      tail.cdr = v3696;
      tail = tail.cdr;
    }
    l$$2 = l$$2.cdr;
    v607 = l$$2 !== null;
  }
  return dummy.cdr;
}
function sc_remqBang(o$$4, l$$3) {
  var dummy$$1 = {cdr:null};
  var tail$$1 = dummy$$1;
  var needsAssig = true;
  var v609 = l$$3 !== null;
  for (;v609;) {
    var v1426 = l$$3.car;
    var v608 = v1426 === o$$4;
    if (v608) {
      needsAssig = true;
    } else {
      if (needsAssig) {
        tail$$1.cdr = l$$3;
        needsAssig = false;
      }
      tail$$1 = l$$3;
    }
    l$$3 = l$$3.cdr;
    v609 = l$$3 !== null;
  }
  tail$$1.cdr = null;
  return dummy$$1.cdr;
}
function sc_delete(o$$5, l$$4) {
  var dummy$$2 = {cdr:null};
  var tail$$2 = dummy$$2;
  var v612 = l$$4 !== null;
  for (;v612;) {
    var v1820 = l$$4.car;
    var v1427 = sc_isEqual(v1820, o$$5);
    var v611 = !v1427;
    if (v611) {
      var v610 = l$$4.car;
      var v3697 = sc_cons(v610, null);
      tail$$2.cdr = v3697;
      tail$$2 = tail$$2.cdr;
    }
    l$$4 = l$$4.cdr;
    v612 = l$$4 !== null;
  }
  return dummy$$2.cdr;
}
function sc_deleteBang(o$$6, l$$5) {
  var dummy$$3 = {cdr:null};
  var tail$$3 = dummy$$3;
  var needsAssig$$1 = true;
  var v614 = l$$5 !== null;
  for (;v614;) {
    var v1428 = l$$5.car;
    var v613 = sc_isEqual(v1428, o$$6);
    if (v613) {
      needsAssig$$1 = true;
    } else {
      if (needsAssig$$1) {
        tail$$3.cdr = l$$5;
        needsAssig$$1 = false;
      }
      tail$$3 = l$$5;
    }
    l$$5 = l$$5.cdr;
    v614 = l$$5 !== null;
  }
  tail$$3.cdr = null;
  return dummy$$3.cdr;
}
function sc_reverseAppendBang(l1, l2) {
  var res$$10 = l2;
  var v615 = l1 !== null;
  for (;v615;) {
    var tmp = res$$10;
    res$$10 = l1;
    l1 = l1.cdr;
    res$$10.cdr = tmp;
    v615 = l1 !== null;
  }
  return res$$10;
}
function sc_dualAppend(l1$$1, l2$$1) {
  var v616 = l1$$1 === null;
  if (v616) {
    return l2$$1;
  }
  var v617 = l2$$1 === null;
  if (v617) {
    return l1$$1;
  }
  var rev = sc_reverse(l1$$1);
  return sc_reverseAppendBang(rev, l2$$1);
}
function sc_append() {
  var v1429 = arguments.length;
  var v618 = v1429 === 0;
  if (v618) {
    return null;
  }
  var v1430 = arguments.length;
  var v619 = v1430 - 1;
  var res$$11 = arguments[v619];
  var v620 = arguments.length;
  var i$$24 = v620 - 2;
  var v622 = i$$24 >= 0;
  for (;v622;) {
    var v621 = arguments[i$$24];
    res$$11 = sc_dualAppend(v621, res$$11);
    i$$24--;
    v622 = i$$24 >= 0;
  }
  return res$$11;
}
function sc_dualAppendBang(l1$$2, l2$$2) {
  var v623 = l1$$2 === null;
  if (v623) {
    return l2$$2;
  }
  var v624 = l2$$2 === null;
  if (v624) {
    return l1$$2;
  }
  var tmp$$1 = l1$$2;
  var v1431 = tmp$$1.cdr;
  var v625 = v1431 !== null;
  for (;v625;) {
    tmp$$1 = tmp$$1.cdr;
    var v1432 = tmp$$1.cdr;
    v625 = v1432 !== null;
  }
  tmp$$1.cdr = l2$$2;
  return l1$$2;
}
function sc_appendBang() {
  var res$$12 = null;
  var i$$25 = 0;
  var v1433 = arguments.length;
  var v627 = i$$25 < v1433;
  for (;v627;) {
    var v626 = arguments[i$$25];
    res$$12 = sc_dualAppendBang(res$$12, v626);
    i$$25++;
    var v1434 = arguments.length;
    v627 = i$$25 < v1434;
  }
  return res$$12;
}
function sc_reverse(l1$$3) {
  var res$$13 = null;
  var v629 = l1$$3 !== null;
  for (;v629;) {
    var v628 = l1$$3.car;
    res$$13 = sc_cons(v628, res$$13);
    l1$$3 = l1$$3.cdr;
    v629 = l1$$3 !== null;
  }
  return res$$13;
}
function sc_reverseBang(l$$6) {
  return sc_reverseAppendBang(l$$6, null);
}
function sc_listTail(l$$7, k) {
  var res$$14 = l$$7;
  var i$$26 = 0;
  var v630 = i$$26 < k;
  for (;v630;) {
    res$$14 = res$$14.cdr;
    i$$26++;
    v630 = i$$26 < k;
  }
  return res$$14;
}
function sc_listRef(l$$8, k$$1) {
  var v631 = sc_listTail(l$$8, k$$1);
  return v631.car;
}
function sc_memq(o$$7, l$$9) {
  var v633 = l$$9 !== null;
  for (;v633;) {
    var v1435 = l$$9.car;
    var v632 = v1435 === o$$7;
    if (v632) {
      return l$$9;
    }
    l$$9 = l$$9.cdr;
    v633 = l$$9 !== null;
  }
  return false;
}
function sc_memv(o$$8, l$$10) {
  var v635 = l$$10 !== null;
  for (;v635;) {
    var v1436 = l$$10.car;
    var v634 = v1436 === o$$8;
    if (v634) {
      return l$$10;
    }
    l$$10 = l$$10.cdr;
    v635 = l$$10 !== null;
  }
  return false;
}
function sc_member(o$$9, l$$11) {
  var v637 = l$$11 !== null;
  for (;v637;) {
    var v1437 = l$$11.car;
    var v636 = sc_isEqual(v1437, o$$9);
    if (v636) {
      return l$$11;
    }
    l$$11 = l$$11.cdr;
    v637 = l$$11 !== null;
  }
  return false;
}
function sc_assq(o$$10, al) {
  var v639 = al !== null;
  for (;v639;) {
    var v1821 = al.car;
    var v1438 = v1821.car;
    var v638 = v1438 === o$$10;
    if (v638) {
      return al.car;
    }
    al = al.cdr;
    v639 = al !== null;
  }
  return false;
}
function sc_assv(o$$11, al$$1) {
  var v641 = al$$1 !== null;
  for (;v641;) {
    var v1822 = al$$1.car;
    var v1439 = v1822.car;
    var v640 = v1439 === o$$11;
    if (v640) {
      return al$$1.car;
    }
    al$$1 = al$$1.cdr;
    v641 = al$$1 !== null;
  }
  return false;
}
function sc_assoc(o$$12, al$$2) {
  var v643 = al$$2 !== null;
  for (;v643;) {
    var v1823 = al$$2.car;
    var v1440 = v1823.car;
    var v642 = sc_isEqual(v1440, o$$12);
    if (v642) {
      return al$$2.car;
    }
    al$$2 = al$$2.cdr;
    v643 = al$$2 !== null;
  }
  return false;
}
function sc_isCharStringEqual(cs1, cs2) {
  var v644 = cs1.val;
  var v645 = cs2.val;
  return v644 === v645;
}
function sc_isCharStringLess(cs1$$1, cs2$$1) {
  var v646 = cs1$$1.val;
  var v647 = cs2$$1.val;
  return v646 < v647;
}
function sc_isCharStringGreater(cs1$$2, cs2$$2) {
  var v648 = cs1$$2.val;
  var v649 = cs2$$2.val;
  return v648 > v649;
}
function sc_isCharStringLessEqual(cs1$$3, cs2$$3) {
  var v650 = cs1$$3.val;
  var v651 = cs2$$3.val;
  return v650 <= v651;
}
function sc_isCharStringGreaterEqual(cs1$$4, cs2$$4) {
  var v652 = cs1$$4.val;
  var v653 = cs2$$4.val;
  return v652 >= v653;
}
function sc_isCharStringCIEqual(cs1$$5, cs2$$5) {
  var v1441 = cs1$$5.val;
  var v654 = v1441.toLowerCase();
  var v1442 = cs2$$5.val;
  var v655 = v1442.toLowerCase();
  return v654 === v655;
}
function sc_isCharStringCILess(cs1$$6, cs2$$6) {
  var v1443 = cs1$$6.val;
  var v656 = v1443.toLowerCase();
  var v1444 = cs2$$6.val;
  var v657 = v1444.toLowerCase();
  return v656 < v657;
}
function sc_isCharStringCIGreater(cs1$$7, cs2$$7) {
  var v1445 = cs1$$7.val;
  var v658 = v1445.toLowerCase();
  var v1446 = cs2$$7.val;
  var v659 = v1446.toLowerCase();
  return v658 > v659;
}
function sc_isCharStringCILessEqual(cs1$$8, cs2$$8) {
  var v1447 = cs1$$8.val;
  var v660 = v1447.toLowerCase();
  var v1448 = cs2$$8.val;
  var v661 = v1448.toLowerCase();
  return v660 <= v661;
}
function sc_isCharStringCIGreaterEqual(cs1$$9, cs2$$9) {
  var v1449 = cs1$$9.val;
  var v662 = v1449.toLowerCase();
  var v1450 = cs2$$9.val;
  var v663 = v1450.toLowerCase();
  return v662 >= v663;
}
function sc_Char(c$$1) {
  var v664 = sc_Char.lazy;
  var cached = v664[c$$1];
  if (cached) {
    return cached;
  }
  this.val = c$$1;
  var v665 = sc_Char.lazy;
  v665[c$$1] = this;
  return undefined;
}
function sc_isChar(c$$2) {
  return c$$2 instanceof sc_Char;
}
function sc_isCharOfClass(c$$3, cl) {
  var v666 = cl.indexOf(c$$3);
  return v666 != -1;
}
function sc_isCharAlphabetic(c$$4) {
  var v1451 = c$$4.val;
  var v667 = sc_isCharOfClass(v1451, SC_LOWER_CLASS);
  var v1453 = !v667;
  if (v1453) {
    var v1452 = c$$4.val;
    v667 = sc_isCharOfClass(v1452, SC_UPPER_CLASS);
  }
  return v667;
}
function sc_isCharNumeric(c$$5) {
  var v668 = c$$5.val;
  return sc_isCharOfClass(v668, SC_NUMBER_CLASS);
}
function sc_isCharWhitespace(c$$6) {
  var tmp$$2 = c$$6.val;
  var v2162 = tmp$$2 === " ";
  var v2465 = !v2162;
  if (v2465) {
    v2162 = tmp$$2 === "\r";
  }
  var v1824 = v2162;
  var v2163 = !v1824;
  if (v2163) {
    v1824 = tmp$$2 === "\n";
  }
  var v1454 = v1824;
  var v1825 = !v1454;
  if (v1825) {
    v1454 = tmp$$2 === "\t";
  }
  var v669 = v1454;
  var v1455 = !v669;
  if (v1455) {
    v669 = tmp$$2 === "\f";
  }
  return v669;
}
function sc_isCharUpperCase(c$$7) {
  var v670 = c$$7.val;
  return sc_isCharOfClass(v670, SC_UPPER_CLASS);
}
function sc_isCharLowerCase(c$$8) {
  var v671 = c$$8.val;
  return sc_isCharOfClass(v671, SC_LOWER_CLASS);
}
function sc_char2integer(c$$9) {
  var v672 = c$$9.val;
  return v672.charCodeAt(0);
}
function sc_integer2char(n$$8) {
  var v673 = String.fromCharCode(n$$8);
  return new sc_Char(v673);
}
function sc_charUpcase(c$$10) {
  var v1456 = c$$10.val;
  var v674 = v1456.toUpperCase();
  return new sc_Char(v674);
}
function sc_charDowncase(c$$11) {
  var v1457 = c$$11.val;
  var v675 = v1457.toLowerCase();
  return new sc_Char(v675);
}
function sc_makeJSStringOfLength(k$$2, c$$12) {
  var fill$$1;
  var v676 = c$$12 === undefined;
  if (v676) {
    fill$$1 = " ";
  } else {
    fill$$1 = c$$12;
  }
  var res$$15 = "";
  var len$$1 = 1;
  var v678 = k$$2 >= len$$1;
  for (;v678;) {
    var v677 = k$$2 & len$$1;
    if (v677) {
      res$$15 = res$$15.concat(fill$$1);
    }
    fill$$1 = fill$$1.concat(fill$$1);
    len$$1 = len$$1 * 2;
    v678 = k$$2 >= len$$1;
  }
  return res$$15;
}
function sc_makejsString(k$$3, c$$13) {
  var fill$$2;
  if (c$$13) {
    fill$$2 = c$$13.val;
  } else {
    fill$$2 = " ";
  }
  return sc_makeJSStringOfLength(k$$3, fill$$2);
}
function sc_jsstring2list(s$$5) {
  var res$$16 = null;
  var v679 = s$$5.length;
  var i$$27 = v679 - 1;
  var v681 = i$$27 >= 0;
  for (;v681;) {
    var v1458 = s$$5.charAt(i$$27);
    var v680 = new sc_Char(v1458);
    res$$16 = sc_cons(v680, res$$16);
    i$$27--;
    v681 = i$$27 >= 0;
  }
  return res$$16;
}
function sc_list2jsstring(l$$12) {
  var a$$3 = new Array;
  var v683 = l$$12 !== null;
  for (;v683;) {
    var v1459 = l$$12.car;
    var v682 = v1459.val;
    a$$3.push(v682);
    l$$12 = l$$12.cdr;
    v683 = l$$12 !== null;
  }
  var v684 = "".concat;
  return v684.apply("", a$$3);
}
function sc_isVector(v) {
  return v instanceof sc_Vector;
}
function sc_isVectorEqual(v1, v2) {
  var comp$$1 = sc_isEqual;
  var v1460 = v1.length;
  var v1461 = v2.length;
  var v685 = v1460 !== v1461;
  if (v685) {
    return false;
  }
  var i$$29 = 0;
  var v1462 = v1.length;
  var v687 = i$$29 < v1462;
  for (;v687;) {
    var v1826 = v1[i$$29];
    var v1827 = v2[i$$29];
    var v1463 = comp$$1(v1826, v1827);
    var v686 = !v1463;
    if (v686) {
      return false;
    }
    i$$29++;
    var v1464 = v1.length;
    v687 = i$$29 < v1464;
  }
  return true;
}
function sc_makeVector(size$$4, fill$$3) {
  var a$$4 = new sc_Vector(size$$4);
  var v688 = fill$$3 !== undefined;
  if (v688) {
    sc_vectorFillBang(a$$4, fill$$3);
  }
  return a$$4;
}
function sc_vector() {
  var a$$5 = new sc_Vector;
  var i$$30 = 0;
  var v1465 = arguments.length;
  var v690 = i$$30 < v1465;
  for (;v690;) {
    var v689 = arguments[i$$30];
    a$$5.push(v689);
    i$$30++;
    var v1466 = arguments.length;
    v690 = i$$30 < v1466;
  }
  return a$$5;
}
function sc_vectorLength(v$$1) {
  return v$$1.length;
}
function sc_vectorRef(v$$2, pos) {
  return v$$2[pos];
}
function sc_vectorSetBang(v$$3, pos$$1, val$$3) {
  v$$3[pos$$1] = val$$3;
  return;
}
function sc_vector2list(a$$6) {
  var res$$18 = null;
  var v691 = a$$6.length;
  var i$$31 = v691 - 1;
  var v693 = i$$31 >= 0;
  for (;v693;) {
    var v692 = a$$6[i$$31];
    res$$18 = sc_cons(v692, res$$18);
    i$$31--;
    v693 = i$$31 >= 0;
  }
  return res$$18;
}
function sc_list2vector(l$$13) {
  var a$$7 = new sc_Vector;
  var v695 = l$$13 !== null;
  for (;v695;) {
    var v694 = l$$13.car;
    a$$7.push(v694);
    l$$13 = l$$13.cdr;
    v695 = l$$13 !== null;
  }
  return a$$7;
}
function sc_vectorFillBang(a$$8, fill$$4) {
  var i$$32 = 0;
  var v1467 = a$$8.length;
  var v696 = i$$32 < v1467;
  for (;v696;) {
    a$$8[i$$32] = fill$$4;
    i$$32++;
    var v1468 = a$$8.length;
    v696 = i$$32 < v1468;
  }
  return;
}
function sc_copyVector(a$$9, len$$2) {
  var v1469 = a$$9.length;
  var v697 = len$$2 <= v1469;
  if (v697) {
    return a$$9.slice(0, len$$2);
  } else {
    var tmp$$3 = a$$9.concat();
    tmp$$3.length = len$$2;
    return tmp$$3;
  }
  return;
}
function sc_vectorCopy(a$$10, start$$5, end$$1) {
  return a$$10.slice(start$$5, end$$1);
}
function sc_vectorCopyBang(target$$26, tstart, source$$1, sstart, send) {
  var v698 = !sstart;
  if (v698) {
    sstart = 0;
  }
  var v699 = !send;
  if (v699) {
    send = source$$1.length;
  }
  var v703 = tstart <= sstart;
  if (v703) {
    var i$$33 = tstart;
    var j = sstart;
    var v700 = j < send;
    for (;v700;) {
      target$$26[i$$33] = source$$1[j];
      i$$33++;
      j++;
      v700 = j < send;
    }
  } else {
    var diff = send - sstart;
    var v701 = tstart + diff;
    i$$33 = v701 - 1;
    j = send - 1;
    var v702 = j >= sstart;
    for (;v702;) {
      target$$26[i$$33] = source$$1[j];
      i$$33--;
      j--;
      v702 = j >= sstart;
    }
  }
  return target$$26;
}
function sc_isProcedure(o$$13) {
  var v704 = typeof o$$13;
  return v704 === "function";
}
function sc_apply(proc) {
  var args = new Array;
  var i$$34 = 1;
  var v1828 = arguments.length;
  var v1470 = v1828 - 1;
  var v706 = i$$34 < v1470;
  for (;v706;) {
    var v705 = arguments[i$$34];
    args.push(v705);
    i$$34++;
    var v1829 = arguments.length;
    var v1471 = v1829 - 1;
    v706 = i$$34 < v1471;
  }
  var v1472 = arguments.length;
  var v707 = v1472 - 1;
  var l$$14 = arguments[v707];
  var v709 = l$$14 !== null;
  for (;v709;) {
    var v708 = l$$14.car;
    args.push(v708);
    l$$14 = l$$14.cdr;
    v709 = l$$14 !== null;
  }
  return proc.apply(null, args);
}
function sc_map(proc$$1, l1$$4) {
  var v710 = l1$$4 === undefined;
  if (v710) {
    return null;
  }
  var v711 = arguments.length;
  var nbApplyArgs = v711 - 1;
  var applyArgs = new Array(nbApplyArgs);
  var revres = null;
  var v716 = l1$$4 !== null;
  for (;v716;) {
    var i$$35 = 0;
    var v714 = i$$35 < nbApplyArgs;
    for (;v714;) {
      var v1473 = i$$35 + 1;
      var v712 = arguments[v1473];
      applyArgs[i$$35] = v712.car;
      var v713 = i$$35 + 1;
      var v1830 = i$$35 + 1;
      var v1474 = arguments[v1830];
      arguments[v713] = v1474.cdr;
      i$$35++;
      v714 = i$$35 < nbApplyArgs;
    }
    var v715 = proc$$1.apply(null, applyArgs);
    revres = sc_cons(v715, revres);
    v716 = l1$$4 !== null;
  }
  return sc_reverseAppendBang(revres, null);
}
function sc_mapBang(proc$$2, l1$$5) {
  var v717 = l1$$5 === undefined;
  if (v717) {
    return null;
  }
  var l1_orig = l1$$5;
  var v718 = arguments.length;
  var nbApplyArgs$$1 = v718 - 1;
  var applyArgs$$1 = new Array(nbApplyArgs$$1);
  var v722 = l1$$5 !== null;
  for (;v722;) {
    var tmp$$4 = l1$$5;
    var i$$36 = 0;
    var v721 = i$$36 < nbApplyArgs$$1;
    for (;v721;) {
      var v1475 = i$$36 + 1;
      var v719 = arguments[v1475];
      applyArgs$$1[i$$36] = v719.car;
      var v720 = i$$36 + 1;
      var v1831 = i$$36 + 1;
      var v1476 = arguments[v1831];
      arguments[v720] = v1476.cdr;
      i$$36++;
      v721 = i$$36 < nbApplyArgs$$1;
    }
    var v3698 = proc$$2.apply(null, applyArgs$$1);
    tmp$$4.car = v3698;
    v722 = l1$$5 !== null;
  }
  return l1_orig;
}
function sc_forEach(proc$$3, l1$$6) {
  var v723 = l1$$6 === undefined;
  if (v723) {
    return undefined;
  }
  var v724 = arguments.length;
  var nbApplyArgs$$2 = v724 - 1;
  var applyArgs$$2 = new Array(nbApplyArgs$$2);
  var v728 = l1$$6 !== null;
  for (;v728;) {
    var i$$37 = 0;
    var v727 = i$$37 < nbApplyArgs$$2;
    for (;v727;) {
      var v1477 = i$$37 + 1;
      var v725 = arguments[v1477];
      applyArgs$$2[i$$37] = v725.car;
      var v726 = i$$37 + 1;
      var v1832 = i$$37 + 1;
      var v1478 = arguments[v1832];
      arguments[v726] = v1478.cdr;
      i$$37++;
      v727 = i$$37 < nbApplyArgs$$2;
    }
    proc$$3.apply(null, applyArgs$$2);
    v728 = l1$$6 !== null;
  }
  return undefined;
}
function sc_filter(proc$$4, l1$$7) {
  var dummy$$4 = {cdr:null};
  var tail$$4 = dummy$$4;
  var v731 = l1$$7 !== null;
  for (;v731;) {
    var v1833 = l1$$7.car;
    var v1479 = proc$$4(v1833);
    var v730 = v1479 !== false;
    if (v730) {
      var v729 = l1$$7.car;
      var v3699 = sc_cons(v729, null);
      tail$$4.cdr = v3699;
      tail$$4 = tail$$4.cdr;
    }
    l1$$7 = l1$$7.cdr;
    v731 = l1$$7 !== null;
  }
  return dummy$$4.cdr;
}
function sc_filterBang(proc$$5, l1$$8) {
  var head = sc_cons("dummy", l1$$8);
  var it = head;
  var next = l1$$8;
  var v733 = next !== null;
  for (;v733;) {
    var v1834 = next.car;
    var v1480 = proc$$5(v1834);
    var v732 = v1480 !== false;
    if (v732) {
      it.cdr = next;
      it = next;
    }
    next = next.cdr;
    v733 = next !== null;
  }
  it.cdr = null;
  return head.cdr;
}
function sc_filterMap1(proc$$6, l1$$9) {
  var revres$$1 = null;
  var v736 = l1$$9 !== null;
  for (;v736;) {
    var v734 = l1$$9.car;
    var tmp$$5 = proc$$6(v734);
    var v735 = tmp$$5 !== false;
    if (v735) {
      revres$$1 = sc_cons(tmp$$5, revres$$1);
    }
    l1$$9 = l1$$9.cdr;
    v736 = l1$$9 !== null;
  }
  return sc_reverseAppendBang(revres$$1, null);
}
function sc_filterMap2(proc$$7, l1$$10, l2$$3) {
  var revres$$2 = null;
  var v740 = l1$$10 !== null;
  for (;v740;) {
    var v737 = l1$$10.car;
    var v738 = l2$$3.car;
    var tmp$$6 = proc$$7(v737, v738);
    var v739 = tmp$$6 !== false;
    if (v739) {
      revres$$2 = sc_cons(tmp$$6, revres$$2);
    }
    l1$$10 = l1$$10.cdr;
    l2$$3 = l2$$3.cdr;
    v740 = l1$$10 !== null;
  }
  return sc_reverseAppendBang(revres$$2, null);
}
function sc_filterMap(proc$$8, l1$$11, l2$$4, l3) {
  var v742 = l2$$4 === undefined;
  if (v742) {
    return sc_filterMap1(proc$$8, l1$$11);
  } else {
    var v741 = l3 === undefined;
    if (v741) {
      return sc_filterMap2(proc$$8, l1$$11, l2$$4);
    }
  }
  var v743 = arguments.length;
  var nbApplyArgs$$3 = v743 - 1;
  var applyArgs$$3 = new Array(nbApplyArgs$$3);
  var revres$$3 = null;
  var v748 = l1$$11 !== null;
  for (;v748;) {
    var i$$38 = 0;
    var v746 = i$$38 < nbApplyArgs$$3;
    for (;v746;) {
      var v1481 = i$$38 + 1;
      var v744 = arguments[v1481];
      applyArgs$$3[i$$38] = v744.car;
      var v745 = i$$38 + 1;
      var v1835 = i$$38 + 1;
      var v1482 = arguments[v1835];
      arguments[v745] = v1482.cdr;
      i$$38++;
      v746 = i$$38 < nbApplyArgs$$3;
    }
    var tmp$$7 = proc$$8.apply(null, applyArgs$$3);
    var v747 = tmp$$7 !== false;
    if (v747) {
      revres$$3 = sc_cons(tmp$$7, revres$$3);
    }
    v748 = l1$$11 !== null;
  }
  return sc_reverseAppendBang(revres$$3, null);
}
function sc_any(proc$$9, l$$15) {
  var revres$$4 = null;
  var v751 = l$$15 !== null;
  for (;v751;) {
    var v749 = l$$15.car;
    var tmp$$8 = proc$$9(v749);
    var v750 = tmp$$8 !== false;
    if (v750) {
      return tmp$$8;
    }
    l$$15 = l$$15.cdr;
    v751 = l$$15 !== null;
  }
  return false;
}
function sc_anyPred(proc$$10, l$$16) {
  var v752 = sc_any(proc$$10, l$$16);
  return v752 !== false;
}
function sc_every(proc$$11, l$$17) {
  var revres$$5 = null;
  var tmp$$9 = true;
  var v755 = l$$17 !== null;
  for (;v755;) {
    var v753 = l$$17.car;
    tmp$$9 = proc$$11(v753);
    var v754 = tmp$$9 === false;
    if (v754) {
      return false;
    }
    l$$17 = l$$17.cdr;
    v755 = l$$17 !== null;
  }
  return tmp$$9;
}
function sc_everyPred(proc$$12, l$$18) {
  var tmp$$10 = sc_every(proc$$12, l$$18);
  var v756 = tmp$$10 !== false;
  if (v756) {
    return true;
  }
  return false;
}
function sc_force(o$$14) {
  return o$$14();
}
function sc_makePromise(proc$$13) {
  function v2() {
    var v758 = !isResultReady;
    if (v758) {
      var tmp$$11 = proc$$13();
      var v757 = !isResultReady;
      if (v757) {
        isResultReady = true;
        result$$3 = tmp$$11;
      }
    }
    return result$$3;
  }
  var isResultReady = false;
  var result$$3 = undefined;
  return v2;
}
function sc_Values(values$$4) {
  this.values = values$$4;
  return;
}
function sc_values() {
  var v1483 = arguments.length;
  var v759 = v1483 === 1;
  if (v759) {
    return arguments[0];
  } else {
    return new sc_Values(arguments);
  }
  return;
}
function sc_callWithValues(producer, consumer) {
  var produced = producer();
  var v761 = produced instanceof sc_Values;
  if (v761) {
    var v760 = produced.values;
    return consumer.apply(null, v760);
  } else {
    return consumer(produced);
  }
  return;
}
function sc_dynamicWind(before$$1, thunk, after) {
  before$$1();
  try {
    var res$$19 = thunk();
    return res$$19;
  } finally {
    after();
  }
  return;
}
function sc_Struct(name$$32) {
  this.name = name$$32;
  return;
}
function sc_makeStruct(name$$33) {
  return new sc_Struct(name$$33);
}
function sc_isStruct(o$$15) {
  return o$$15 instanceof sc_Struct;
}
function sc_isStructNamed(name$$34, s$$6) {
  var v762 = s$$6 instanceof sc_Struct;
  if (v762) {
    var v1484 = s$$6.name;
    v762 = v1484 === name$$34;
  }
  return v762;
}
function sc_getStructField(s$$7, name$$35, field) {
  return s$$7[field];
}
function sc_setStructFieldBang(s$$8, name$$36, field$$1, val$$4) {
  s$$8[field$$1] = val$$4;
  return;
}
function sc_bitNot(x$$66) {
  return ~x$$66;
}
function sc_bitAnd(x$$67, y$$36) {
  return x$$67 & y$$36;
}
function sc_bitOr(x$$68, y$$37) {
  return x$$68 | y$$37;
}
function sc_bitXor(x$$69, y$$38) {
  return x$$69 ^ y$$38;
}
function sc_bitLsh(x$$70, y$$39) {
  return x$$70 << y$$39;
}
function sc_bitRsh(x$$71, y$$40) {
  return x$$71 >> y$$40;
}
function sc_bitUrsh(x$$72, y$$41) {
  return x$$72 >>> y$$41;
}
function sc_jsField(o$$16, field$$2) {
  return o$$16[field$$2];
}
function sc_setJsFieldBang(o$$17, field$$3, val$$5) {
  return o$$17[field$$3] = val$$5;
}
function sc_deleteJsFieldBang(o$$18, field$$4) {
  delete o$$18[field$$4];
  return;
}
function sc_jsCall(o$$19, fun$$3) {
  var args$$1 = new Array;
  var i$$39 = 2;
  var v1485 = arguments.length;
  var v764 = i$$39 < v1485;
  for (;v764;) {
    var v763 = i$$39 - 2;
    args$$1[v763] = arguments[i$$39];
    i$$39++;
    var v1486 = arguments.length;
    v764 = i$$39 < v1486;
  }
  return fun$$3.apply(o$$19, args$$1);
}
function sc_jsMethodCall(o$$20, field$$5) {
  var args$$2 = new Array;
  var i$$40 = 2;
  var v1487 = arguments.length;
  var v766 = i$$40 < v1487;
  for (;v766;) {
    var v765 = i$$40 - 2;
    args$$2[v765] = arguments[i$$40];
    i$$40++;
    var v1488 = arguments.length;
    v766 = i$$40 < v1488;
  }
  var v767 = o$$20[field$$5];
  return v767.apply(o$$20, args$$2);
}
function sc_jsNew(c$$14) {
  var evalStr = "new c(";
  var v1836;
  var v2466 = arguments.length;
  var v2164 = v2466 > 1;
  if (v2164) {
    v1836 = "arguments[1]";
  } else {
    v1836 = "";
  }
  var v1489 = v1836;
  evalStr = evalStr + v1489;
  var i$$41 = 2;
  var v1490 = arguments.length;
  var v768 = i$$41 < v1490;
  for (;v768;) {
    var v1837 = ", arguments[" + i$$41;
    var v1491 = v1837 + "]";
    evalStr = evalStr + v1491;
    i$$41++;
    var v1492 = arguments.length;
    v768 = i$$41 < v1492;
  }
  evalStr = evalStr + ")";
  return eval(evalStr);
}
function sc_pregexp(re) {
  var v769 = sc_string2jsstring(re);
  return new RegExp(v769);
}
function sc_pregexpMatch(re$$1, s$$9) {
  var v770;
  var v1493 = re$$1 instanceof RegExp;
  if (v1493) {
    v770 = re$$1;
  } else {
    v770 = sc_pregexp(re$$1);
  }
  var reg = v770;
  var v771 = sc_string2jsstring(s$$9);
  var tmp$$12 = reg.exec(v771);
  var v772 = tmp$$12 == null;
  if (v772) {
    return false;
  }
  var res$$20 = null;
  var v773 = tmp$$12.length;
  var i$$42 = v773 - 1;
  var v776 = i$$42 >= 0;
  for (;v776;) {
    var v1494 = tmp$$12[i$$42];
    var v775 = v1494 !== null;
    if (v775) {
      var v1495 = tmp$$12[i$$42];
      var v774 = sc_jsstring2string(v1495);
      res$$20 = sc_cons(v774, res$$20);
    } else {
      res$$20 = sc_cons(false, res$$20);
    }
    i$$42--;
    v776 = i$$42 >= 0;
  }
  return res$$20;
}
function sc_pregexpReplace(re$$2, s1, s2) {
  var reg$$1;
  var jss1 = sc_string2jsstring(s1);
  var jss2 = sc_string2jsstring(s2);
  var v780 = re$$2 instanceof RegExp;
  if (v780) {
    var v778 = re$$2.global;
    if (v778) {
      reg$$1 = re$$2;
    } else {
      var v777 = re$$2.source;
      reg$$1 = new RegExp(v777);
    }
  } else {
    var v779 = sc_string2jsstring(re$$2);
    reg$$1 = new RegExp(v779);
  }
  return jss1.replace(reg$$1, jss2);
}
function sc_pregexpReplaceAll(re$$3, s1$$1, s2$$1) {
  var reg$$2;
  var jss1$$1 = sc_string2jsstring(s1$$1);
  var jss2$$1 = sc_string2jsstring(s2$$1);
  var v784 = re$$3 instanceof RegExp;
  if (v784) {
    var v782 = re$$3.global;
    if (v782) {
      reg$$2 = re$$3;
    } else {
      var v781 = re$$3.source;
      reg$$2 = new RegExp(v781, "g");
    }
  } else {
    var v783 = sc_string2jsstring(re$$3);
    reg$$2 = new RegExp(v783, "g");
  }
  return jss1$$1.replace(reg$$2, jss2$$1);
}
function sc_pregexpSplit(re$$4, s$$10) {
  var v785;
  var v1497 = re$$4 instanceof RegExp;
  if (v1497) {
    v785 = re$$4;
  } else {
    var v1496 = sc_string2jsstring(re$$4);
    v785 = new RegExp(v1496);
  }
  var reg$$3 = v785;
  var jss = sc_string2jsstring(s$$10);
  var tmp$$13 = jss.split(reg$$3);
  var v786 = tmp$$13 == null;
  if (v786) {
    return false;
  }
  return sc_vector2list(tmp$$13);
}
function sc_random(n$$9) {
  var v1498 = Math.random();
  var v787 = v1498 * n$$9;
  return Math.floor(v787);
}
function sc_currentDate() {
  return new Date;
}
function sc_Hashtable() {
  return;
}
function sc_HashtableElement(key$$17, val$$6) {
  this.key = key$$17;
  this.val = val$$6;
  return;
}
function sc_makeHashtable() {
  return new sc_Hashtable;
}
function sc_hashtablePutBang(ht$$3, key$$18, val$$7) {
  var hash = sc_hash(key$$18);
  var v3700 = new sc_HashtableElement(key$$18, val$$7);
  ht$$3[hash] = v3700;
  return;
}
function sc_hashtableGet(ht$$4, key$$19) {
  var hash$$1 = sc_hash(key$$19);
  var v789 = hash$$1 in ht$$4;
  if (v789) {
    var v788 = ht$$4[hash$$1];
    return v788.val;
  } else {
    return false;
  }
  return;
}
function sc_hashtableForEach(ht$$5, f$$1) {
  var v$$4;
  for (v$$4 in ht$$5) {
    var v1499 = ht$$5[v$$4];
    var v792 = v1499 instanceof sc_HashtableElement;
    if (v792) {
      var v1500 = ht$$5[v$$4];
      var v790 = v1500.key;
      var v1501 = ht$$5[v$$4];
      var v791 = v1501.val;
      f$$1(v790, v791);
    }
  }
  return;
}
function sc_hashtableContains(ht$$6, key$$20) {
  var hash$$2 = sc_hash(key$$20);
  var v793 = hash$$2 in ht$$6;
  if (v793) {
    return true;
  } else {
    return false;
  }
  return;
}
function sc_hash(o$$21) {
  var v800 = o$$21 === null;
  if (v800) {
    return "null";
  } else {
    var v799 = o$$21 === undefined;
    if (v799) {
      return "undefined";
    } else {
      var v798 = o$$21 === true;
      if (v798) {
        return "true";
      } else {
        var v797 = o$$21 === false;
        if (v797) {
          return "false";
        } else {
          var v1502 = typeof o$$21;
          var v796 = v1502 === "number";
          if (v796) {
            return "num-" + o$$21;
          } else {
            var v1503 = typeof o$$21;
            var v795 = v1503 === "string";
            if (v795) {
              return "jsstr-" + o$$21;
            } else {
              var v794 = o$$21.sc_getHash;
              if (v794) {
                return o$$21.sc_getHash();
              } else {
                return sc_counterHash.call(o$$21);
              }
            }
          }
        }
      }
    }
  }
  return;
}
function sc_counterHash() {
  var v1504 = this.sc_hash;
  var v801 = !v1504;
  if (v801) {
    this.sc_hash = "hash-" + SC_HASH_COUNTER;
    SC_HASH_COUNTER++;
  }
  return this.sc_hash;
}
function sc_Trampoline(args$$3, maxTailCalls) {
  this["__trampoline return__"] = true;
  this.args = args$$3;
  this.MAX_TAIL_CALLs = maxTailCalls;
  return;
}
function sc_bindExitLambda(proc$$14) {
  function escape$$1(res$$22) {
    escape_obj.res = res$$22;
    throw escape_obj;
  }
  var escape_obj = new sc_BindExitException;
  try {
    return proc$$14(escape$$1);
  } catch (e$$8) {
    var v802 = e$$8 === escape_obj;
    if (v802) {
      return e$$8.res;
    }
    throw e$$8;
  }
  return;
}
function sc_BindExitException() {
  this._internalException = true;
  return;
}
function sc_EOF() {
  return;
}
function sc_Port() {
  return;
}
function sc_InputPort() {
  return;
}
function sc_ErrorInputPort() {
  return;
}
function sc_StringInputPort(jsStr) {
  var v3701 = new String(jsStr);
  this.str = v3701;
  this.pos = 0;
  return;
}
function sc_Token(type$$25, val$$8, pos$$2) {
  this.type = type$$25;
  this.val = val$$8;
  this.pos = pos$$2;
  return;
}
function sc_Tokenizer(port) {
  this.port = port;
  return;
}
function sc_Reader(tokenizer) {
  this.tokenizer = tokenizer;
  var v3702 = new Array;
  this.backref = v3702;
  return;
}
function sc_read(port$$2) {
  var v803 = port$$2 === undefined;
  if (v803) {
    port$$2 = SC_DEFAULT_IN;
  }
  var v804 = new sc_Tokenizer(port$$2);
  var reader = new sc_Reader(v804);
  return reader.read();
}
function sc_readChar(port$$3) {
  var v805 = port$$3 === undefined;
  if (v805) {
    port$$3 = SC_DEFAULT_IN;
  }
  var t$$1 = port$$3.readChar();
  var v806;
  var v1505 = t$$1 === SC_EOF_OBJECT;
  if (v1505) {
    v806 = t$$1;
  } else {
    v806 = new sc_Char(t$$1);
  }
  return v806;
}
function sc_peekChar(port$$4) {
  var v807 = port$$4 === undefined;
  if (v807) {
    port$$4 = SC_DEFAULT_IN;
  }
  var t$$2 = port$$4.peekChar();
  var v808;
  var v1506 = t$$2 === SC_EOF_OBJECT;
  if (v1506) {
    v808 = t$$2;
  } else {
    v808 = new sc_Char(t$$2);
  }
  return v808;
}
function sc_isCharReady(port$$5) {
  var v809 = port$$5 === undefined;
  if (v809) {
    port$$5 = SC_DEFAULT_IN;
  }
  return port$$5.isCharReady();
}
function sc_closeInputPort(p$$33) {
  return p$$33.close();
}
function sc_isInputPort(o$$23) {
  return o$$23 instanceof sc_InputPort;
}
function sc_isEOFObject(o$$24) {
  return o$$24 === SC_EOF_OBJECT;
}
function sc_currentInputPort() {
  return SC_DEFAULT_IN;
}
function sc_callWithInputFile(s$$11, proc$$15) {
  throw "can't open " + s$$11;
}
function sc_callWithOutputFile(s$$12, proc$$16) {
  throw "can't open " + s$$12;
}
function sc_withInputFromFile(s$$13, thunk$$1) {
  throw "can't open " + s$$13;
}
function sc_withOutputToFile(s$$14, thunk$$2) {
  throw "can't open " + s$$14;
}
function sc_openInputFile(s$$15) {
  throw "can't open " + s$$15;
}
function sc_openOutputFile(s$$16) {
  throw "can't open " + s$$16;
}
function sc_basename(p$$34) {
  var i$$43 = p$$34.lastIndexOf("/");
  var v812 = i$$43 >= 0;
  if (v812) {
    var v810 = i$$43 + 1;
    var v811 = p$$34.length;
    return p$$34.substring(v810, v811);
  } else {
    return "";
  }
  return;
}
function sc_dirname(p$$35) {
  var i$$44 = p$$35.lastIndexOf("/");
  var v813 = i$$44 >= 0;
  if (v813) {
    return p$$35.substring(0, i$$44);
  } else {
    return "";
  }
  return;
}
function sc_withInputFromPort(p$$36, thunk$$3) {
  try {
    var tmp$$19 = SC_DEFAULT_IN;
    SC_DEFAULT_IN = p$$36;
    return thunk$$3();
  } finally {
    SC_DEFAULT_IN = tmp$$19;
  }
  return;
}
function sc_withInputFromString(s$$17, thunk$$4) {
  var v1507 = sc_string2jsstring(s$$17);
  var v814 = new sc_StringInputPort(v1507);
  return sc_withInputFromPort(v814, thunk$$4);
}
function sc_withOutputToPort(p$$37, thunk$$5) {
  try {
    var tmp$$20 = SC_DEFAULT_OUT;
    SC_DEFAULT_OUT = p$$37;
    return thunk$$5();
  } finally {
    SC_DEFAULT_OUT = tmp$$20;
  }
  return;
}
function sc_withOutputToString(thunk$$6) {
  var p$$38 = new sc_StringOutputPort;
  sc_withOutputToPort(p$$38, thunk$$6);
  return p$$38.close();
}
function sc_withOutputToProcedure(proc$$17, thunk$$7) {
  function t$$3(s$$18) {
    var v815 = sc_jsstring2string(s$$18);
    proc$$17(v815);
    return;
  }
  var v816 = new sc_GenericOutputPort(t$$3);
  return sc_withOutputToPort(v816, thunk$$7);
}
function sc_openOutputString() {
  return new sc_StringOutputPort;
}
function sc_openInputString(str$$6) {
  var v817 = sc_string2jsstring(str$$6);
  return new sc_StringInputPort(v817);
}
function sc_OutputPort() {
  return;
}
function sc_StringOutputPort() {
  this.res = "";
  return;
}
function sc_getOutputString(sp) {
  var v818 = sp.res;
  return sc_jsstring2string(v818);
}
function sc_ErrorOutputPort() {
  return;
}
function sc_GenericOutputPort(appendJSString, close$$1) {
  this.appendJSString = appendJSString;
  if (close$$1) {
    this.close = close$$1;
  }
  return;
}
function sc_isOutputPort(o$$25) {
  return o$$25 instanceof sc_OutputPort;
}
function sc_closeOutputPort(p$$39) {
  return p$$39.close();
}
function sc_write(o$$26, p$$40) {
  var v819 = p$$40 === undefined;
  if (v819) {
    p$$40 = SC_DEFAULT_OUT;
  }
  var v820 = sc_toWriteString(o$$26);
  p$$40.appendJSString(v820);
  return;
}
function sc_toWriteString(o$$27) {
  var v827 = o$$27 === null;
  if (v827) {
    return "()";
  } else {
    var v826 = o$$27 === true;
    if (v826) {
      return "#t";
    } else {
      var v825 = o$$27 === false;
      if (v825) {
        return "#f";
      } else {
        var v824 = o$$27 === undefined;
        if (v824) {
          return "#unspecified";
        } else {
          var v1508 = typeof o$$27;
          var v823 = v1508 === "function";
          if (v823) {
            var v1509 = sc_hash(o$$27);
            var v821 = "#<procedure " + v1509;
            return v821 + ">";
          } else {
            var v822 = o$$27.sc_toWriteString;
            if (v822) {
              return o$$27.sc_toWriteString();
            } else {
              return o$$27.toString();
            }
          }
        }
      }
    }
  }
  return;
}
function sc_escapeWriteString(s$$21) {
  var res$$26 = "";
  var j$$1 = 0;
  i = 0;
  var v1510 = s$$21.length;
  var v832 = i < v1510;
  for (;v832;) {
    var v831 = s$$21.charAt(i);
    switch(v831) {
      case "\x00":
        var v1838 = s$$21.substring(j$$1, i);
        var v1511 = v1838 + "\\0";
        res$$26 = res$$26 + v1511;
        j$$1 = i + 1;
        break;
      case "\b":
        var v1839 = s$$21.substring(j$$1, i);
        var v1512 = v1839 + "\\b";
        res$$26 = res$$26 + v1512;
        j$$1 = i + 1;
        break;
      case "\f":
        var v1840 = s$$21.substring(j$$1, i);
        var v1513 = v1840 + "\\f";
        res$$26 = res$$26 + v1513;
        j$$1 = i + 1;
        break;
      case "\n":
        var v1841 = s$$21.substring(j$$1, i);
        var v1514 = v1841 + "\\n";
        res$$26 = res$$26 + v1514;
        j$$1 = i + 1;
        break;
      case "\r":
        var v1842 = s$$21.substring(j$$1, i);
        var v1515 = v1842 + "\\r";
        res$$26 = res$$26 + v1515;
        j$$1 = i + 1;
        break;
      case "\t":
        var v1843 = s$$21.substring(j$$1, i);
        var v1516 = v1843 + "\\t";
        res$$26 = res$$26 + v1516;
        j$$1 = i + 1;
        break;
      case "\v":
        var v1844 = s$$21.substring(j$$1, i);
        var v1517 = v1844 + "\\v";
        res$$26 = res$$26 + v1517;
        j$$1 = i + 1;
        break;
      case '"':
        var v1845 = s$$21.substring(j$$1, i);
        var v1518 = v1845 + '\\"';
        res$$26 = res$$26 + v1518;
        j$$1 = i + 1;
        break;
      case "\\":
        var v1846 = s$$21.substring(j$$1, i);
        var v1519 = v1846 + "\\\\";
        res$$26 = res$$26 + v1519;
        j$$1 = i + 1;
        break;
      default:
        var c$$21 = s$$21.charAt(i);
        var v1520 = "a" !== "a";
        if (v1520) {
          v1520 = c$$21 == "a";
        }
        var v828 = v1520;
        if (v828) {
          var v1847 = s$$21.substring(j$$1, i);
          var v1521 = v1847 + "\\a";
          res$$26 = res$$26 + v1521;
          j$$1 = i + 1;
          i++;
          var v1522 = s$$21.length;
          v832 = i < v1522;
          continue;
        }
        var v1523 = "\v" !== "v";
        if (v1523) {
          v1523 = c$$21 == "\v";
        }
        var v829 = v1523;
        if (v829) {
          var v1848 = s$$21.substring(j$$1, i);
          var v1524 = v1848 + "\\v";
          res$$26 = res$$26 + v1524;
          j$$1 = i + 1;
          i++;
          var v1525 = s$$21.length;
          v832 = i < v1525;
          continue;
        }
        var v1526 = s$$21.charAt(i);
        var v830 = v1526 < " ";
        if (v830) {
          var v2165 = s$$21.substring(j$$1, i);
          var v1849 = v2165 + "\\x";
          var v2166 = s$$21.charCodeAt(i);
          var v1850 = v2166.toString(16);
          var v1527 = v1849 + v1850;
          res$$26 = res$$26 + v1527;
          j$$1 = i + 1;
        }
      ;
    }
    i++;
    var v1528 = s$$21.length;
    v832 = i < v1528;
  }
  var v1529 = s$$21.substring(j$$1, i);
  res$$26 = res$$26 + v1529;
  return res$$26;
}
function sc_display(o$$28, p$$41) {
  var v833 = p$$41 === undefined;
  if (v833) {
    p$$41 = SC_DEFAULT_OUT;
  }
  var v834 = sc_toDisplayString(o$$28);
  p$$41.appendJSString(v834);
  return;
}
function sc_toDisplayString(o$$29) {
  var v841 = o$$29 === null;
  if (v841) {
    return "()";
  } else {
    var v840 = o$$29 === true;
    if (v840) {
      return "#t";
    } else {
      var v839 = o$$29 === false;
      if (v839) {
        return "#f";
      } else {
        var v838 = o$$29 === undefined;
        if (v838) {
          return "#unspecified";
        } else {
          var v1530 = typeof o$$29;
          var v837 = v1530 === "function";
          if (v837) {
            var v1531 = sc_hash(o$$29);
            var v835 = "#<procedure " + v1531;
            return v835 + ">";
          } else {
            var v836 = o$$29.sc_toDisplayString;
            if (v836) {
              return o$$29.sc_toDisplayString();
            } else {
              return o$$29.toString();
            }
          }
        }
      }
    }
  }
  return;
}
function sc_newline() {
  var p$$42;
  var v842 = p$$42 === undefined;
  if (v842) {
    p$$42 = SC_DEFAULT_OUT;
  }
  p$$42.appendJSString("\n");
  return;
}
function sc_writeChar(c$$22, p$$43) {
  var v843 = p$$43 === undefined;
  if (v843) {
    p$$43 = SC_DEFAULT_OUT;
  }
  var v844 = c$$22.val;
  p$$43.appendJSString(v844);
  return;
}
function sc_writeCircle(o$$30, p$$44) {
  var v845 = p$$44 === undefined;
  if (v845) {
    p$$44 = SC_DEFAULT_OUT;
  }
  var v846 = sc_toWriteCircleString(o$$30);
  p$$44.appendJSString(v846);
  return;
}
function sc_toWriteCircleString(o$$31) {
  var symb = sc_gensym("writeCircle");
  var nbPointer = new Object;
  nbPointer.nb = 0;
  sc_prepWriteCircle(o$$31, symb, nbPointer);
  return sc_genToWriteCircleString(o$$31, symb);
}
function sc_prepWriteCircle(o$$32, symb$$1, nbPointer$$1) {
  var v1532 = o$$32 instanceof sc_Pair;
  var v1851 = !v1532;
  if (v1851) {
    v1532 = o$$32 instanceof sc_Vector;
  }
  var v855 = v1532;
  if (v855) {
    var v1533 = o$$32[symb$$1];
    var v849 = v1533 !== undefined;
    if (v849) {
      o$$32[symb$$1]++;
      var v1852 = symb$$1 + "nb";
      var v1534 = o$$32[v1852];
      var v848 = !v1534;
      if (v848) {
        var v847 = symb$$1 + "nb";
        o$$32[v847] = nbPointer$$1.nb;
        var v1853 = nbPointer$$1.nb;
        nbPointer$$1.nb = v1853 + 1;
      }
      return;
    }
    o$$32[symb$$1] = 0;
    var v854 = o$$32 instanceof sc_Pair;
    if (v854) {
      var v850 = o$$32.car;
      sc_prepWriteCircle(v850, symb$$1, nbPointer$$1);
      var v851 = o$$32.cdr;
      sc_prepWriteCircle(v851, symb$$1, nbPointer$$1);
    } else {
      var i$$45 = 0;
      var v1535 = o$$32.length;
      var v853 = i$$45 < v1535;
      for (;v853;) {
        var v852 = o$$32[i$$45];
        sc_prepWriteCircle(v852, symb$$1, nbPointer$$1);
        i$$45++;
        var v1536 = o$$32.length;
        v853 = i$$45 < v1536;
      }
    }
  }
  return;
}
function sc_genToWriteCircleString(o$$33, symb$$2) {
  var v1854 = o$$33 instanceof sc_Pair;
  var v2167 = !v1854;
  if (v2167) {
    v1854 = o$$33 instanceof sc_Vector;
  }
  var v1537 = v1854;
  var v856 = !v1537;
  if (v856) {
    return sc_toWriteString(o$$33);
  }
  return o$$33.sc_toWriteCircleString(symb$$2);
}
function sc_print(s$$22) {
  var v1538 = arguments.length;
  var v859 = v1538 === 1;
  if (v859) {
    sc_display(s$$22);
    sc_newline();
  } else {
    var i$$47 = 0;
    var v1539 = arguments.length;
    var v858 = i$$47 < v1539;
    for (;v858;) {
      var v857 = arguments[i$$47];
      sc_display(v857);
      i$$47++;
      var v1540 = arguments.length;
      v858 = i$$47 < v1540;
    }
    sc_newline();
  }
  return;
}
function sc_format(s$$23, args$$4) {
  var len$$3 = s$$23.length;
  var p$$45 = new sc_StringOutputPort;
  var i$$48 = 0;
  var j$$2 = 1;
  var v875 = i$$48 < len$$3;
  for (;v875;) {
    var i2 = s$$23.indexOf("~", i$$48);
    var v874 = i2 == -1;
    if (v874) {
      var v860 = s$$23.substring(i$$48, len$$3);
      p$$45.appendJSString(v860);
      return p$$45.close();
    } else {
      var v864 = i2 > i$$48;
      if (v864) {
        var v1541 = len$$3 - 1;
        var v863 = i2 == v1541;
        if (v863) {
          var v861 = s$$23.substring(i$$48, len$$3);
          p$$45.appendJSString(v861);
          return p$$45.close();
        } else {
          var v862 = s$$23.substring(i$$48, i2);
          p$$45.appendJSString(v862);
          i$$48 = i2;
        }
      }
      var v1542 = i2 + 1;
      var v873 = s$$23.charCodeAt(v1542);
      switch(v873) {
        case 65:
        ;
        case 97:
          var v865 = arguments[j$$2];
          sc_display(v865, p$$45);
          i$$48 = i$$48 + 2;
          j$$2++;
          break;
        case 83:
        ;
        case 115:
          var v866 = arguments[j$$2];
          sc_write(v866, p$$45);
          i$$48 = i$$48 + 2;
          j$$2++;
          break;
        case 86:
        ;
        case 118:
          var v867 = arguments[j$$2];
          sc_display(v867, p$$45);
          p$$45.appendJSString("\n");
          i$$48 = i$$48 + 2;
          j$$2++;
          break;
        case 67:
        ;
        case 99:
          var v1543 = arguments[j$$2];
          var v868 = String.fromCharCode(v1543);
          p$$45.appendJSString(v868);
          i$$48 = i$$48 + 2;
          j$$2++;
          break;
        case 88:
        ;
        case 120:
          var v1544 = arguments[j$$2];
          var v869 = v1544.toString(6);
          p$$45.appendJSString(v869);
          i$$48 = i$$48 + 2;
          j$$2++;
          break;
        case 79:
        ;
        case 111:
          var v1545 = arguments[j$$2];
          var v870 = v1545.toString(8);
          p$$45.appendJSString(v870);
          i$$48 = i$$48 + 2;
          j$$2++;
          break;
        case 66:
        ;
        case 98:
          var v1546 = arguments[j$$2];
          var v871 = v1546.toString(2);
          p$$45.appendJSString(v871);
          i$$48 = i$$48 + 2;
          j$$2++;
          break;
        case 37:
        ;
        case 110:
          p$$45.appendJSString("\n");
          i$$48 = i$$48 + 2;
          break;
        case 114:
          p$$45.appendJSString("\r");
          i$$48 = i$$48 + 2;
          break;
        case 126:
          p$$45.appendJSString("~");
          i$$48 = i$$48 + 2;
          break;
        default:
          var v2467 = i2 + 1;
          var v2168 = s$$23.charCodeAt(v2467);
          var v1855 = String.fromCharCode(v2168);
          var v1547 = "format: illegal ~" + v1855;
          var v872 = v1547 + " sequence";
          sc_error(v872);
          return "";
      }
    }
    v875 = i$$48 < len$$3;
  }
  return p$$45.close();
}
function sc_jsstring2string(s$$24) {
  return s$$24;
}
function sc_jsstring2symbol(s$$25) {
  return sc_SYMBOL_PREFIX + s$$25;
}
function sc_string2jsstring(s$$26) {
  return s$$26;
}
function sc_symbol2jsstring(s$$27) {
  return s$$27.slice(1);
}
function sc_keyword2jsstring(k$$4) {
  return k$$4.slice(1);
}
function sc_jsstring2keyword(s$$28) {
  return sc_KEYWORD_PREFIX + s$$28;
}
function sc_isKeyword(s$$29) {
  var v1548 = typeof s$$29;
  var v876 = v1548 === "string";
  if (v876) {
    var v1549 = s$$29.charAt(0);
    v876 = v1549 === sc_KEYWORD_PREFIX;
  }
  return v876;
}
function sc_isEqual(o1$$2, o2$$2) {
  var v1550 = o1$$2 === o2$$2;
  var v1857 = !v1550;
  if (v1857) {
    var v2169 = sc_isPair(o1$$2);
    if (v2169) {
      v2169 = sc_isPair(o2$$2);
    }
    var v1856 = v2169;
    if (v1856) {
      v1856 = sc_isPairEqual(o1$$2, o2$$2);
    }
    v1550 = v1856;
  }
  var v877 = v1550;
  var v1552 = !v877;
  if (v1552) {
    var v1858 = sc_isVector(o1$$2);
    if (v1858) {
      v1858 = sc_isVector(o2$$2);
    }
    var v1551 = v1858;
    if (v1551) {
      v1551 = sc_isVectorEqual(o1$$2, o2$$2);
    }
    v877 = v1551;
  }
  return v877;
}
function sc_number2symbol(x$$73, radix$$2) {
  var v878 = sc_SYMBOL_PREFIX;
  var v879 = sc_number2jsstring(x$$73, radix$$2);
  return v878 + v879;
}
function sc_symbol2number(s$$30, radix$$3) {
  var v880 = s$$30.slice(1);
  return sc_jsstring2number(v880, radix$$3);
}
function sc_string2integer(s$$31, radix$$4) {
  var v881 = !radix$$4;
  if (v881) {
    return +s$$31;
  }
  return parseInt(s$$31, radix$$4);
}
function sc_string2real(s$$32) {
  return +s$$32;
}
function sc_isSymbol(s$$33) {
  var v1553 = typeof s$$33;
  var v882 = v1553 === "string";
  if (v882) {
    var v1554 = s$$33.charAt(0);
    v882 = v1554 === sc_SYMBOL_PREFIX;
  }
  return v882;
}
function sc_symbol2string(s$$34) {
  return s$$34.slice(1);
}
function sc_string2symbol(s$$35) {
  return sc_SYMBOL_PREFIX + s$$35;
}
function sc_symbolAppend() {
  var res$$29 = sc_SYMBOL_PREFIX;
  var i$$49 = 0;
  var v1555 = arguments.length;
  var v883 = i$$49 < v1555;
  for (;v883;) {
    var v1859 = arguments[i$$49];
    var v1556 = v1859.slice(1);
    res$$29 = res$$29 + v1556;
    i$$49++;
    var v1557 = arguments.length;
    v883 = i$$49 < v1557;
  }
  return res$$29;
}
function sc_char2string(c$$23) {
  return c$$23.val;
}
function sc_char2symbol(c$$24) {
  var v884 = c$$24.val;
  return sc_SYMBOL_PREFIX + v884;
}
function sc_isString(s$$36) {
  var v1558 = typeof s$$36;
  var v885 = v1558 === "string";
  if (v885) {
    var v1559 = s$$36.charAt(0);
    v885 = v1559 !== sc_SYMBOL_PREFIX;
  }
  return v885;
}
function sc_string() {
  var i$$50 = 0;
  var v1560 = arguments.length;
  var v887 = i$$50 < v1560;
  for (;v887;) {
    var v886 = arguments[i$$50];
    arguments[i$$50] = v886.val;
    i$$50++;
    var v1561 = arguments.length;
    v887 = i$$50 < v1561;
  }
  var v888 = "".concat;
  return v888.apply("", arguments);
}
function sc_stringLength(s$$37) {
  return s$$37.length;
}
function sc_stringRef(s$$38, k$$5) {
  var v889 = s$$38.charAt(k$$5);
  return new sc_Char(v889);
}
function sc_isStringEqual(s1$$2, s2$$2) {
  return s1$$2 === s2$$2;
}
function sc_isStringLess(s1$$3, s2$$3) {
  return s1$$3 < s2$$3;
}
function sc_isStringGreater(s1$$4, s2$$4) {
  return s1$$4 > s2$$4;
}
function sc_isStringLessEqual(s1$$5, s2$$5) {
  return s1$$5 <= s2$$5;
}
function sc_isStringGreaterEqual(s1$$6, s2$$6) {
  return s1$$6 >= s2$$6;
}
function sc_isStringCIEqual(s1$$7, s2$$7) {
  var v890 = s1$$7.toLowerCase();
  var v891 = s2$$7.toLowerCase();
  return v890 === v891;
}
function sc_isStringCILess(s1$$8, s2$$8) {
  var v892 = s1$$8.toLowerCase();
  var v893 = s2$$8.toLowerCase();
  return v892 < v893;
}
function sc_isStringCIGreater(s1$$9, s2$$9) {
  var v894 = s1$$9.toLowerCase();
  var v895 = s2$$9.toLowerCase();
  return v894 > v895;
}
function sc_isStringCILessEqual(s1$$10, s2$$10) {
  var v896 = s1$$10.toLowerCase();
  var v897 = s2$$10.toLowerCase();
  return v896 <= v897;
}
function sc_isStringCIGreaterEqual(s1$$11, s2$$11) {
  var v898 = s1$$11.toLowerCase();
  var v899 = s2$$11.toLowerCase();
  return v898 >= v899;
}
function sc_substring(s$$39, start$$6, end$$2) {
  return s$$39.substring(start$$6, end$$2);
}
function sc_isSubstring_at(s1$$12, s2$$12, i$$51) {
  var v1860 = s2$$12.length;
  var v1562 = i$$51 + v1860;
  var v900 = s1$$12.substring(i$$51, v1562);
  return s2$$12 == v900;
}
function sc_stringAppend() {
  var v901 = "".concat;
  return v901.apply("", arguments);
}
function sc_stringCopy(s$$40) {
  return s$$40;
}
function sc_keyword2string(o$$34) {
  return o$$34.slice(1);
}
function sc_string2keyword(o$$35) {
  return sc_KEYWORD_PREFIX + o$$35;
}
function RunBenchmark(name$$38, count$$3, run$$1, warn) {
  var n$$14 = 0;
  var v903 = n$$14 < count$$3;
  for (;v903;) {
    result = run$$1();
    var v1563 = warn(result);
    var v902 = !v1563;
    if (v902) {
      throw new Error("Earley or Boyer did incorrect number of rewrites");
    }
    ++n$$14;
    v903 = n$$14 < count$$3;
  }
  return;
}
function ShowBox(name$$39) {
  function v3(entry$$2) {
    var v1564 = name$$39.valueOf();
    var v1565 = entry$$2.valueOf();
    var v906 = v1564 === v1565;
    if (v906) {
      var v1566 = "Box-" + name$$39;
      var v904 = v1566 + "Latency";
      var box1 = document.getElementById(v904);
      var v905 = box1.style;
      v905.visibility = "visible";
    }
    return;
  }
  var v907 = "Box-" + name$$39;
  var box = document.getElementById(v907);
  var v908 = box.style;
  v908.visibility = "visible";
  var v1567 = document.getElementById("progress-bar");
  var v909 = v1567.style;
  var v2468 = completed = completed + 1;
  var v2170 = v2468 / benchmarks;
  var v1861 = v2170 * 100;
  var v1568 = "" + v1861;
  var bar = v909.width = v1568 + "%";
  latencyBenchmarks.forEach(v3);
  return;
}
function AddResult(name$$40, result$$5) {
  var v1569 = name$$40 + ": ";
  var v910 = v1569 + result$$5;
  console.log(v910);
  var v911 = "Result-" + name$$40;
  var box$$1 = document.getElementById(v911);
  box$$1.innerHTML = result$$5;
  return;
}
function AddError(name$$41, error$$2) {
  var v1570 = name$$41 + ": ";
  var v1571 = error$$2.message;
  var v912 = v1570 + v1571;
  console.log(v912);
  var v914 = error$$2 == "TypedArrayUnsupported";
  if (v914) {
    AddResult(name$$41, "<b>Unsupported</b>");
  } else {
    var v913 = error$$2 == "PerformanceNowUnsupported";
    if (v913) {
      AddResult(name$$41, "<b>Timer error</b>");
    } else {
      AddResult(name$$41, "<b>Error</b>");
    }
  }
  success = false;
  return;
}
function AddScore(score$$2) {
  var status = document.getElementById("main-banner");
  if (success) {
    status.innerHTML = "Octane Score: " + score$$2;
  } else {
    status.innerHTML = "Octane Score (incomplete): " + score$$2;
  }
  var v1572 = document.getElementById("progress-bar-container");
  var v915 = v1572.style;
  v915.visibility = "hidden";
  var v1573 = document.getElementById("bottom-text");
  var v916 = v1573.style;
  v916.visibility = "visible";
  var v917 = document.getElementById("inside-anchor");
  var v918 = document.getElementById("bar-appendix");
  v917.removeChild(v918);
  var v1574 = document.getElementById("alertbox");
  var v919 = v1574.style;
  v919.visibility = "hidden";
  return;
}
function Run() {
  var v920 = document.getElementById("main-banner");
  v920.innerHTML = "Running Octane...";
  var v921 = document.getElementById("bar-appendix");
  v921.innerHTML = '<br/><div class="progress progress-striped" id="progress-bar-container" style="visibility:hidden"><div class="bar"style="width: 0%;" id="progress-bar"></div></div>';
  var anchor = document.getElementById("run-octane");
  var parent = document.getElementById("main-container");
  var v922 = document.getElementById("inside-anchor");
  parent.appendChild(v922);
  parent.removeChild(anchor);
  var v923 = document.getElementById("startup-text");
  v923.innerHTML = "";
  var v1575 = document.getElementById("progress-bar-container");
  var v924 = v1575.style;
  v924.visibility = "visible";
  BenchmarkSuite.RunSuites();
  return;
}
function CheckCompatibility() {
  var v1862 = typeof Uint8Array;
  var v1576 = v1862 != "undefined";
  if (v1576) {
    var v1863 = typeof Float64Array;
    v1576 = v1863 != "undefined";
  }
  var v925 = v1576;
  if (v925) {
    var v2171 = new Uint8Array(0);
    var v1864 = v2171.subarray;
    var v1577 = typeof v1864;
    v925 = v1577 != "undefined";
  }
  var hasTypedArrays = v925;
  var v927 = !hasTypedArrays;
  if (v927) {
    console.log("Typed Arrays not supported");
    var v1578 = document.getElementById("alertbox");
    var v926 = v1578.style;
    v926.display = "block";
  }
  var v2172 = window.document;
  var v1865 = v2172.URL;
  var v1579 = v1865.indexOf("skip_zlib=1");
  var v928 = v1579 >= 0;
  if (v928) {
    skipBenchmarks.push("zlib");
  }
  var v2173 = window.document;
  var v1866 = v2173.URL;
  var v1580 = v1866.indexOf("auto=1");
  var v929 = v1580 >= 0;
  if (v929) {
    Run();
  }
  return;
}
function Load() {
  setTimeout(CheckCompatibility, 200);
  return;
}
var performance = performance || {};
var v930 = performance;
var v3703 = v4();
v930.now = v3703;
var v931 = BenchmarkResult.prototype;
v931.valueOf = v5;
BenchmarkSuite.suites = [];
BenchmarkSuite.version = "9";
BenchmarkSuite.config = {doWarmup:undefined, doDeterministic:undefined};
alert = v6;
BenchmarkSuite.ResetRNG = v9;
BenchmarkSuite.RunSuites = v10;
BenchmarkSuite.CountBenchmarks = v11;
BenchmarkSuite.GeometricMean = v12;
BenchmarkSuite.GeometricMeanTime = v13;
BenchmarkSuite.GeometricMeanLatency = v14;
BenchmarkSuite.FormatScore = v15;
var v932 = BenchmarkSuite.prototype;
v932.NotifyStep = v16;
var v933 = BenchmarkSuite.prototype;
v933.NotifyResult = v17;
var v934 = BenchmarkSuite.prototype;
v934.NotifySkipped = v18;
var v935 = BenchmarkSuite.prototype;
v935.NotifyError = v19;
var v936 = BenchmarkSuite.prototype;
v936.RunSingleBenchmark = v20;
var v937 = BenchmarkSuite.prototype;
v937.RunStep = v21;
var v938 = [666463];
var v1581 = new Benchmark("Earley", 2500, v22);
var v1582 = new Benchmark("Boyer", 200, v23);
var v939 = [v1581, v1582];
var EarleyBoyer = new BenchmarkSuite("EarleyBoyer", v938, v939);
var sc_JS_GLOBALS = this;
var __sc_LINE = -1;
var __sc_FILE = "";
var sc_properties = new Object;
var sc_max = Math.max;
var sc_min = Math.min;
var sc_abs = Math.abs;
var sc_floor = Math.floor;
var sc_ceiling = Math.ceil;
var sc_truncate = parseInt;
var sc_round = Math.round;
var sc_exp = Math.exp;
var sc_log = Math.log;
var sc_sin = Math.sin;
var sc_cos = Math.cos;
var sc_tan = Math.tan;
var sc_asin = Math.asin;
var sc_acos = Math.acos;
var sc_atan = Math.atan;
var sc_sqrt = Math.sqrt;
var sc_expt = Math.pow;
var v940 = sc_Pair.prototype;
v940.toString = v24;
var v941 = sc_Pair.prototype;
v941.sc_toWriteOrDisplayString = v25;
var v942 = sc_Pair.prototype;
v942.sc_toDisplayString = v26;
var v943 = sc_Pair.prototype;
v943.sc_toWriteString = v27;
var v944 = sc_Char;
var v3704 = new Object;
v944.lazy = v3704;
sc_Char.char2readable = {"\x00":"#\\null", "\u0007":"#\\bell", "\b":"#\\backspace", "\t":"#\\tab", "\n":"#\\newline", "\f":"#\\page", "\r":"#\\return", "\u001b":"#\\escape", " ":"#\\space", "\u007f":"#\\delete", "\u0001":"#\\soh", "\u0002":"#\\stx", "\u0003":"#\\etx", "\u0004":"#\\eot", "\u0005":"#\\enq", "\u0006":"#\\ack", "\x0B":"#\\vt", "\u000e":"#\\so", "\u000f":"#\\si", "\u0010":"#\\dle", "\u0011":"#\\dc1", "\u0012":"#\\dc2", "\u0013":"#\\dc3", "\u0014":"#\\dc4", "\u0015":"#\\nak", "\u0016":"#\\syn", 
"\u0017":"#\\etb", "\u0018":"#\\can", "\u0019":"#\\em", "\u001a":"#\\sub", "\u001b":"#\\esc", "\u001c":"#\\fs", "\u001d":"#\\gs", "\u001e":"#\\rs", "\u001f":"#\\us"};
sc_Char.readable2char = {"null":"\x00", "bell":"\u0007", "backspace":"\b", "tab":"\t", "newline":"\n", "page":"\f", "return":"\r", "escape":"\u001b", "space":" ", "delete":"\x00", "soh":"\u0001", "stx":"\u0002", "etx":"\u0003", "eot":"\u0004", "enq":"\u0005", "ack":"\u0006", "bel":"\u0007", "bs":"\b", "ht":"\t", "nl":"\n", "vt":"\x0B", "np":"\f", "cr":"\r", "so":"\u000e", "si":"\u000f", "dle":"\u0010", "dc1":"\u0011", "dc2":"\u0012", "dc3":"\u0013", "dc4":"\u0014", "nak":"\u0015", "syn":"\u0016", 
"etb":"\u0017", "can":"\u0018", "em":"\u0019", "sub":"\u001a", "esc":"\u001b", "fs":"\u001c", "gs":"\u001d", "rs":"\u001e", "us":"\u001f", "sp":" ", "del":"\u007f"};
var v945 = sc_Char.prototype;
v945.toString = v28;
var v946 = sc_Char.prototype;
v946.sc_toWriteString = v29;
var sc_isCharEqual = sc_isCharStringEqual;
var sc_isCharLess = sc_isCharStringLess;
var sc_isCharGreater = sc_isCharStringGreater;
var sc_isCharLessEqual = sc_isCharStringLessEqual;
var sc_isCharGreaterEqual = sc_isCharStringGreaterEqual;
var sc_isCharCIEqual = sc_isCharStringCIEqual;
var sc_isCharCILess = sc_isCharStringCILess;
var sc_isCharCIGreater = sc_isCharStringCIGreater;
var sc_isCharCILessEqual = sc_isCharStringCILessEqual;
var sc_isCharCIGreaterEqual = sc_isCharStringCIGreaterEqual;
var SC_NUMBER_CLASS = "0123456789";
var SC_WHITESPACE_CLASS = " \r\n\t\f";
var SC_LOWER_CLASS = "abcdefghijklmnopqrstuvwxyz";
var SC_UPPER_CLASS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sc_Vector = Array;
var v947 = sc_Vector.prototype;
v947.sc_toWriteOrDisplayString = v30;
var v948 = sc_Vector.prototype;
v948.sc_toDisplayString = v31;
var v949 = sc_Vector.prototype;
v949.sc_toWriteString = v32;
var v950 = sc_Struct.prototype;
v950.sc_toDisplayString = v33;
var v951 = sc_Struct.prototype;
var v1583 = sc_Struct.prototype;
v951.sc_toWriteString = v1583.sc_toDisplayString;
var v952 = sc_Hashtable.prototype;
v952.toString = v34;
var SC_HASH_COUNTER = 0;
var v953 = sc_Trampoline.prototype;
v953.restart = v35;
var SC_SCM2JS_GLOBALS = new Object;
var SC_TAIL_OBJECT = new Object;
SC_SCM2JS_GLOBALS.TAIL_OBJECT = SC_TAIL_OBJECT;
var SC_EOF_OBJECT = new sc_EOF;
var v954 = sc_InputPort;
var v3705 = new sc_Port;
v954.prototype = v3705;
var v955 = sc_InputPort.prototype;
v955.peekChar = v36;
var v956 = sc_InputPort.prototype;
v956.readChar = v37;
var v957 = sc_InputPort.prototype;
v957.isCharReady = v38;
var v958 = sc_InputPort.prototype;
v958.close = v39;
var v959 = sc_ErrorInputPort;
var v3706 = new sc_InputPort;
v959.prototype = v3706;
var v960 = sc_ErrorInputPort.prototype;
v960.getNextChar = v40;
var v961 = sc_ErrorInputPort.prototype;
v961.isCharReady = v41;
var v962 = sc_StringInputPort;
var v3707 = new sc_InputPort;
v962.prototype = v3707;
var v963 = sc_StringInputPort.prototype;
v963.getNextChar = v42;
sc_Token.EOF = 0;
sc_Token.OPEN_PAR = 1;
sc_Token.CLOSE_PAR = 2;
sc_Token.OPEN_BRACE = 3;
sc_Token.CLOSE_BRACE = 4;
sc_Token.OPEN_BRACKET = 5;
sc_Token.CLOSE_BRACKET = 6;
sc_Token.WHITESPACE = 7;
sc_Token.QUOTE = 8;
sc_Token.ID = 9;
sc_Token.DOT = 10;
sc_Token.STRING = 11;
sc_Token.NUMBER = 12;
sc_Token.ERROR = 13;
sc_Token.VECTOR_BEGIN = 14;
sc_Token.TRUE = 15;
sc_Token.FALSE = 16;
sc_Token.UNSPECIFIED = 17;
sc_Token.REFERENCE = 18;
sc_Token.STORE = 19;
sc_Token.CHAR = 20;
var v964 = SC_LOWER_CLASS + SC_UPPER_CLASS;
var SC_ID_CLASS = v964 + "!$%*+-./:<=>?@^_~";
var v965 = sc_Tokenizer.prototype;
v965.peekToken = v43;
var v966 = sc_Tokenizer.prototype;
v966.readToken = v44;
var v967 = sc_Tokenizer.prototype;
v967.nextToken = v45;
var v968 = sc_Reader.prototype;
v968.read = v46;
var v969 = sc_OutputPort;
var v3708 = new sc_Port;
v969.prototype = v3708;
var v970 = sc_OutputPort.prototype;
v970.appendJSString = v47;
var v971 = sc_OutputPort.prototype;
v971.close = v48;
var v972 = sc_StringOutputPort;
var v3709 = new sc_OutputPort;
v972.prototype = v3709;
var v973 = sc_StringOutputPort.prototype;
v973.appendJSString = v49;
var v974 = sc_StringOutputPort.prototype;
v974.close = v50;
var v975 = sc_ErrorOutputPort;
var v3710 = new sc_OutputPort;
v975.prototype = v3710;
var v976 = sc_ErrorOutputPort.prototype;
v976.appendJSString = v51;
var v977 = sc_ErrorOutputPort.prototype;
v977.close = v52;
var v978 = sc_GenericOutputPort;
var v3711 = new sc_OutputPort;
v978.prototype = v3711;
var v979 = sc_Pair.prototype;
v979.sc_toWriteCircleString = v53;
var v980 = sc_Vector.prototype;
v980.sc_toWriteCircleString = v54;
var SC_DEFAULT_IN = new sc_ErrorInputPort;
var SC_DEFAULT_OUT = new sc_ErrorOutputPort;
var SC_ERROR_OUT = new sc_ErrorOutputPort;
var sc_SYMBOL_PREFIX = "\u1e9c";
var sc_KEYWORD_PREFIX = "\u1e9d";
var sc_gensym = v56();
var sc_number2string = sc_number2jsstring;
var sc_string2number = sc_jsstring2number;
var sc_makeString = sc_makejsString;
var sc_string2list = sc_jsstring2list;
var sc_list2string = sc_list2jsstring;
var v981 = String.prototype;
v981.sc_toDisplayString = v57;
var v982 = String.prototype;
v982.sc_toWriteString = v58;
var BgL_testzd2boyerzd2;
var BgL_nboyerzd2benchmarkzd2;
var BgL_setupzd2boyerzd2;
var translate_term_nboyer;
var translate_args_nboyer;
var untranslate_term_nboyer;
var BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer;
var BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer;
var translate_alist_nboyer;
var apply_subst_nboyer;
var apply_subst_lst_nboyer;
var tautologyp_nboyer;
var if_constructor_nboyer;
var rewrite_count_nboyer;
var rewrite_nboyer;
var rewrite_args_nboyer;
var unify_subst_nboyer;
var one_way_unify1_nboyer;
var false_term_nboyer;
var true_term_nboyer;
var trans_of_implies1_nboyer;
var is_term_equal_nboyer;
var is_term_member_nboyer;
var const_nboyer;
var sc_const_3_nboyer;
var sc_const_4_nboyer;
var v2759 = new sc_Pair("\u1e9cy", null);
var v2469 = new sc_Pair("\u1e9cx", v2759);
var v2174 = new sc_Pair("\u1e9cimplies", v2469);
var v3411 = new sc_Pair("\u1e9cz", null);
var v3244 = new sc_Pair("\u1e9cy", v3411);
var v3009 = new sc_Pair("\u1e9cimplies", v3244);
var v3627 = new sc_Pair("\u1e9cu", null);
var v3584 = new sc_Pair("\u1e9cz", v3627);
var v3516 = new sc_Pair("\u1e9cimplies", v3584);
var v3652 = new sc_Pair("\u1e9cw", null);
var v3628 = new sc_Pair("\u1e9cu", v3652);
var v3585 = new sc_Pair("\u1e9cimplies", v3628);
var v3517 = new sc_Pair(v3585, null);
var v3412 = new sc_Pair(v3516, v3517);
var v3245 = new sc_Pair("\u1e9cand", v3412);
var v3010 = new sc_Pair(v3245, null);
var v2760 = new sc_Pair(v3009, v3010);
var v2470 = new sc_Pair("\u1e9cand", v2760);
var v2175 = new sc_Pair(v2470, null);
var v1867 = new sc_Pair(v2174, v2175);
var v1584 = new sc_Pair("\u1e9cand", v1867);
var v2471 = new sc_Pair("\u1e9cw", null);
var v2176 = new sc_Pair("\u1e9cx", v2471);
var v1868 = new sc_Pair("\u1e9cimplies", v2176);
var v1585 = new sc_Pair(v1868, null);
var v983 = new sc_Pair(v1584, v1585);
sc_const_4_nboyer = new sc_Pair("\u1e9cimplies", v983);
var v2177 = new sc_Pair("\u1e9cform", null);
var v1869 = new sc_Pair("\u1e9ccompile", v2177);
var v3413 = new sc_Pair("\u1e9cform", null);
var v3246 = new sc_Pair("\u1e9coptimize", v3413);
var v3414 = new sc_Pair("\u1e9cnil", null);
var v3247 = new sc_Pair(v3414, null);
var v3011 = new sc_Pair(v3246, v3247);
var v2761 = new sc_Pair("\u1e9ccodegen", v3011);
var v2472 = new sc_Pair(v2761, null);
var v2178 = new sc_Pair("\u1e9creverse", v2472);
var v1870 = new sc_Pair(v2178, null);
var v1586 = new sc_Pair(v1869, v1870);
var v984 = new sc_Pair("\u1e9cequal", v1586);
var v2473 = new sc_Pair("\u1e9cy", null);
var v2179 = new sc_Pair("\u1e9cx", v2473);
var v1871 = new sc_Pair("\u1e9ceqp", v2179);
var v3012 = new sc_Pair("\u1e9cx", null);
var v2762 = new sc_Pair("\u1e9cfix", v3012);
var v3248 = new sc_Pair("\u1e9cy", null);
var v3013 = new sc_Pair("\u1e9cfix", v3248);
var v2763 = new sc_Pair(v3013, null);
var v2474 = new sc_Pair(v2762, v2763);
var v2180 = new sc_Pair("\u1e9cequal", v2474);
var v1872 = new sc_Pair(v2180, null);
var v1587 = new sc_Pair(v1871, v1872);
var v985 = new sc_Pair("\u1e9cequal", v1587);
var v2475 = new sc_Pair("\u1e9cy", null);
var v2181 = new sc_Pair("\u1e9cx", v2475);
var v1873 = new sc_Pair("\u1e9cgreaterp", v2181);
var v2764 = new sc_Pair("\u1e9cx", null);
var v2476 = new sc_Pair("\u1e9cy", v2764);
var v2182 = new sc_Pair("\u1e9clessp", v2476);
var v1874 = new sc_Pair(v2182, null);
var v1588 = new sc_Pair(v1873, v1874);
var v986 = new sc_Pair("\u1e9cequal", v1588);
var v2477 = new sc_Pair("\u1e9cy", null);
var v2183 = new sc_Pair("\u1e9cx", v2477);
var v1875 = new sc_Pair("\u1e9clesseqp", v2183);
var v3249 = new sc_Pair("\u1e9cx", null);
var v3014 = new sc_Pair("\u1e9cy", v3249);
var v2765 = new sc_Pair("\u1e9clessp", v3014);
var v2478 = new sc_Pair(v2765, null);
var v2184 = new sc_Pair("\u1e9cnot", v2478);
var v1876 = new sc_Pair(v2184, null);
var v1589 = new sc_Pair(v1875, v1876);
var v987 = new sc_Pair("\u1e9cequal", v1589);
var v2479 = new sc_Pair("\u1e9cy", null);
var v2185 = new sc_Pair("\u1e9cx", v2479);
var v1877 = new sc_Pair("\u1e9cgreatereqp", v2185);
var v3250 = new sc_Pair("\u1e9cy", null);
var v3015 = new sc_Pair("\u1e9cx", v3250);
var v2766 = new sc_Pair("\u1e9clessp", v3015);
var v2480 = new sc_Pair(v2766, null);
var v2186 = new sc_Pair("\u1e9cnot", v2480);
var v1878 = new sc_Pair(v2186, null);
var v1590 = new sc_Pair(v1877, v1878);
var v988 = new sc_Pair("\u1e9cequal", v1590);
var v2187 = new sc_Pair("\u1e9cx", null);
var v1879 = new sc_Pair("\u1e9cboolean", v2187);
var v3415 = new sc_Pair("\u1e9ct", null);
var v3251 = new sc_Pair(v3415, null);
var v3016 = new sc_Pair("\u1e9cx", v3251);
var v2767 = new sc_Pair("\u1e9cequal", v3016);
var v3518 = new sc_Pair("\u1e9cf", null);
var v3416 = new sc_Pair(v3518, null);
var v3252 = new sc_Pair("\u1e9cx", v3416);
var v3017 = new sc_Pair("\u1e9cequal", v3252);
var v2768 = new sc_Pair(v3017, null);
var v2481 = new sc_Pair(v2767, v2768);
var v2188 = new sc_Pair("\u1e9cor", v2481);
var v1880 = new sc_Pair(v2188, null);
var v1591 = new sc_Pair(v1879, v1880);
var v989 = new sc_Pair("\u1e9cequal", v1591);
var v2482 = new sc_Pair("\u1e9cy", null);
var v2189 = new sc_Pair("\u1e9cx", v2482);
var v1881 = new sc_Pair("\u1e9ciff", v2189);
var v3253 = new sc_Pair("\u1e9cy", null);
var v3018 = new sc_Pair("\u1e9cx", v3253);
var v2769 = new sc_Pair("\u1e9cimplies", v3018);
var v3417 = new sc_Pair("\u1e9cx", null);
var v3254 = new sc_Pair("\u1e9cy", v3417);
var v3019 = new sc_Pair("\u1e9cimplies", v3254);
var v2770 = new sc_Pair(v3019, null);
var v2483 = new sc_Pair(v2769, v2770);
var v2190 = new sc_Pair("\u1e9cand", v2483);
var v1882 = new sc_Pair(v2190, null);
var v1592 = new sc_Pair(v1881, v1882);
var v990 = new sc_Pair("\u1e9cequal", v1592);
var v2191 = new sc_Pair("\u1e9cx", null);
var v1883 = new sc_Pair("\u1e9ceven1", v2191);
var v3020 = new sc_Pair("\u1e9cx", null);
var v2771 = new sc_Pair("\u1e9czerop", v3020);
var v3021 = new sc_Pair("\u1e9ct", null);
var v3586 = new sc_Pair("\u1e9cx", null);
var v3519 = new sc_Pair("\u1e9csub1", v3586);
var v3418 = new sc_Pair(v3519, null);
var v3255 = new sc_Pair("\u1e9codd", v3418);
var v3022 = new sc_Pair(v3255, null);
var v2772 = new sc_Pair(v3021, v3022);
var v2484 = new sc_Pair(v2771, v2772);
var v2192 = new sc_Pair("\u1e9cif", v2484);
var v1884 = new sc_Pair(v2192, null);
var v1593 = new sc_Pair(v1883, v1884);
var v991 = new sc_Pair("\u1e9cequal", v1593);
var v2485 = new sc_Pair("\u1e9cpred", null);
var v2193 = new sc_Pair("\u1e9cl", v2485);
var v1885 = new sc_Pair("\u1e9ccountps-", v2193);
var v3256 = new sc_Pair("\u1e9czero", null);
var v3023 = new sc_Pair(v3256, null);
var v2773 = new sc_Pair("\u1e9cpred", v3023);
var v2486 = new sc_Pair("\u1e9cl", v2773);
var v2194 = new sc_Pair("\u1e9ccountps-loop", v2486);
var v1886 = new sc_Pair(v2194, null);
var v1594 = new sc_Pair(v1885, v1886);
var v992 = new sc_Pair("\u1e9cequal", v1594);
var v2195 = new sc_Pair("\u1e9ci", null);
var v1887 = new sc_Pair("\u1e9cfact-", v2195);
var v2774 = new sc_Pair(1, null);
var v2487 = new sc_Pair("\u1e9ci", v2774);
var v2196 = new sc_Pair("\u1e9cfact-loop", v2487);
var v1888 = new sc_Pair(v2196, null);
var v1595 = new sc_Pair(v1887, v1888);
var v993 = new sc_Pair("\u1e9cequal", v1595);
var v2197 = new sc_Pair("\u1e9cx", null);
var v1889 = new sc_Pair("\u1e9creverse-", v2197);
var v3024 = new sc_Pair("\u1e9cnil", null);
var v2775 = new sc_Pair(v3024, null);
var v2488 = new sc_Pair("\u1e9cx", v2775);
var v2198 = new sc_Pair("\u1e9creverse-loop", v2488);
var v1890 = new sc_Pair(v2198, null);
var v1596 = new sc_Pair(v1889, v1890);
var v994 = new sc_Pair("\u1e9cequal", v1596);
var v2489 = new sc_Pair("\u1e9cy", null);
var v2199 = new sc_Pair("\u1e9cx", v2489);
var v1891 = new sc_Pair("\u1e9cdivides", v2199);
var v3257 = new sc_Pair("\u1e9cx", null);
var v3025 = new sc_Pair("\u1e9cy", v3257);
var v2776 = new sc_Pair("\u1e9cremainder", v3025);
var v2490 = new sc_Pair(v2776, null);
var v2200 = new sc_Pair("\u1e9czerop", v2490);
var v1892 = new sc_Pair(v2200, null);
var v1597 = new sc_Pair(v1891, v1892);
var v995 = new sc_Pair("\u1e9cequal", v1597);
var v2491 = new sc_Pair("\u1e9calist", null);
var v2201 = new sc_Pair("\u1e9cvar", v2491);
var v1893 = new sc_Pair("\u1e9cassume-true", v2201);
var v3419 = new sc_Pair("\u1e9ct", null);
var v3258 = new sc_Pair(v3419, null);
var v3026 = new sc_Pair("\u1e9cvar", v3258);
var v2777 = new sc_Pair("\u1e9ccons", v3026);
var v2778 = new sc_Pair("\u1e9calist", null);
var v2492 = new sc_Pair(v2777, v2778);
var v2202 = new sc_Pair("\u1e9ccons", v2492);
var v1894 = new sc_Pair(v2202, null);
var v1598 = new sc_Pair(v1893, v1894);
var v996 = new sc_Pair("\u1e9cequal", v1598);
var v2493 = new sc_Pair("\u1e9calist", null);
var v2203 = new sc_Pair("\u1e9cvar", v2493);
var v1895 = new sc_Pair("\u1e9cassume-false", v2203);
var v3420 = new sc_Pair("\u1e9cf", null);
var v3259 = new sc_Pair(v3420, null);
var v3027 = new sc_Pair("\u1e9cvar", v3259);
var v2779 = new sc_Pair("\u1e9ccons", v3027);
var v2780 = new sc_Pair("\u1e9calist", null);
var v2494 = new sc_Pair(v2779, v2780);
var v2204 = new sc_Pair("\u1e9ccons", v2494);
var v1896 = new sc_Pair(v2204, null);
var v1599 = new sc_Pair(v1895, v1896);
var v997 = new sc_Pair("\u1e9cequal", v1599);
var v2205 = new sc_Pair("\u1e9cx", null);
var v1897 = new sc_Pair("\u1e9ctautology-checker", v2205);
var v3028 = new sc_Pair("\u1e9cx", null);
var v2781 = new sc_Pair("\u1e9cnormalize", v3028);
var v3029 = new sc_Pair("\u1e9cnil", null);
var v2782 = new sc_Pair(v3029, null);
var v2495 = new sc_Pair(v2781, v2782);
var v2206 = new sc_Pair("\u1e9ctautologyp", v2495);
var v1898 = new sc_Pair(v2206, null);
var v1600 = new sc_Pair(v1897, v1898);
var v998 = new sc_Pair("\u1e9cequal", v1600);
var v2207 = new sc_Pair("\u1e9cx", null);
var v1899 = new sc_Pair("\u1e9cfalsify", v2207);
var v3030 = new sc_Pair("\u1e9cx", null);
var v2783 = new sc_Pair("\u1e9cnormalize", v3030);
var v3031 = new sc_Pair("\u1e9cnil", null);
var v2784 = new sc_Pair(v3031, null);
var v2496 = new sc_Pair(v2783, v2784);
var v2208 = new sc_Pair("\u1e9cfalsify1", v2496);
var v1900 = new sc_Pair(v2208, null);
var v1601 = new sc_Pair(v1899, v1900);
var v999 = new sc_Pair("\u1e9cequal", v1601);
var v2209 = new sc_Pair("\u1e9cx", null);
var v1901 = new sc_Pair("\u1e9cprime", v2209);
var v3421 = new sc_Pair("\u1e9cx", null);
var v3260 = new sc_Pair("\u1e9czerop", v3421);
var v3032 = new sc_Pair(v3260, null);
var v2785 = new sc_Pair("\u1e9cnot", v3032);
var v3663 = new sc_Pair("\u1e9czero", null);
var v3653 = new sc_Pair(v3663, null);
var v3629 = new sc_Pair("\u1e9cadd1", v3653);
var v3587 = new sc_Pair(v3629, null);
var v3520 = new sc_Pair("\u1e9cx", v3587);
var v3422 = new sc_Pair("\u1e9cequal", v3520);
var v3261 = new sc_Pair(v3422, null);
var v3033 = new sc_Pair("\u1e9cnot", v3261);
var v3630 = new sc_Pair("\u1e9cx", null);
var v3588 = new sc_Pair("\u1e9csub1", v3630);
var v3521 = new sc_Pair(v3588, null);
var v3423 = new sc_Pair("\u1e9cx", v3521);
var v3262 = new sc_Pair("\u1e9cprime1", v3423);
var v3034 = new sc_Pair(v3262, null);
var v2786 = new sc_Pair(v3033, v3034);
var v2497 = new sc_Pair(v2785, v2786);
var v2210 = new sc_Pair("\u1e9cand", v2497);
var v1902 = new sc_Pair(v2210, null);
var v1602 = new sc_Pair(v1901, v1902);
var v1000 = new sc_Pair("\u1e9cequal", v1602);
var v2498 = new sc_Pair("\u1e9cq", null);
var v2211 = new sc_Pair("\u1e9cp", v2498);
var v1903 = new sc_Pair("\u1e9cand", v2211);
var v3522 = new sc_Pair("\u1e9ct", null);
var v3589 = new sc_Pair("\u1e9cf", null);
var v3523 = new sc_Pair(v3589, null);
var v3424 = new sc_Pair(v3522, v3523);
var v3263 = new sc_Pair("\u1e9cq", v3424);
var v3035 = new sc_Pair("\u1e9cif", v3263);
var v3264 = new sc_Pair("\u1e9cf", null);
var v3036 = new sc_Pair(v3264, null);
var v2787 = new sc_Pair(v3035, v3036);
var v2499 = new sc_Pair("\u1e9cp", v2787);
var v2212 = new sc_Pair("\u1e9cif", v2499);
var v1904 = new sc_Pair(v2212, null);
var v1603 = new sc_Pair(v1903, v1904);
var v1001 = new sc_Pair("\u1e9cequal", v1603);
var v2500 = new sc_Pair("\u1e9cq", null);
var v2213 = new sc_Pair("\u1e9cp", v2500);
var v1905 = new sc_Pair("\u1e9cor", v2213);
var v3037 = new sc_Pair("\u1e9ct", null);
var v3590 = new sc_Pair("\u1e9ct", null);
var v3631 = new sc_Pair("\u1e9cf", null);
var v3591 = new sc_Pair(v3631, null);
var v3524 = new sc_Pair(v3590, v3591);
var v3425 = new sc_Pair("\u1e9cq", v3524);
var v3265 = new sc_Pair("\u1e9cif", v3425);
var v3038 = new sc_Pair(v3265, null);
var v2788 = new sc_Pair(v3037, v3038);
var v2501 = new sc_Pair("\u1e9cp", v2788);
var v2214 = new sc_Pair("\u1e9cif", v2501);
var v1906 = new sc_Pair(v2214, null);
var v1604 = new sc_Pair(v1905, v1906);
var v1002 = new sc_Pair("\u1e9cequal", v1604);
var v2215 = new sc_Pair("\u1e9cp", null);
var v1907 = new sc_Pair("\u1e9cnot", v2215);
var v3039 = new sc_Pair("\u1e9cf", null);
var v3266 = new sc_Pair("\u1e9ct", null);
var v3040 = new sc_Pair(v3266, null);
var v2789 = new sc_Pair(v3039, v3040);
var v2502 = new sc_Pair("\u1e9cp", v2789);
var v2216 = new sc_Pair("\u1e9cif", v2502);
var v1908 = new sc_Pair(v2216, null);
var v1605 = new sc_Pair(v1907, v1908);
var v1003 = new sc_Pair("\u1e9cequal", v1605);
var v2503 = new sc_Pair("\u1e9cq", null);
var v2217 = new sc_Pair("\u1e9cp", v2503);
var v1909 = new sc_Pair("\u1e9cimplies", v2217);
var v3525 = new sc_Pair("\u1e9ct", null);
var v3592 = new sc_Pair("\u1e9cf", null);
var v3526 = new sc_Pair(v3592, null);
var v3426 = new sc_Pair(v3525, v3526);
var v3267 = new sc_Pair("\u1e9cq", v3426);
var v3041 = new sc_Pair("\u1e9cif", v3267);
var v3268 = new sc_Pair("\u1e9ct", null);
var v3042 = new sc_Pair(v3268, null);
var v2790 = new sc_Pair(v3041, v3042);
var v2504 = new sc_Pair("\u1e9cp", v2790);
var v2218 = new sc_Pair("\u1e9cif", v2504);
var v1910 = new sc_Pair(v2218, null);
var v1606 = new sc_Pair(v1909, v1910);
var v1004 = new sc_Pair("\u1e9cequal", v1606);
var v2219 = new sc_Pair("\u1e9cx", null);
var v1911 = new sc_Pair("\u1e9cfix", v2219);
var v3043 = new sc_Pair("\u1e9cx", null);
var v2791 = new sc_Pair("\u1e9cnumberp", v3043);
var v3269 = new sc_Pair("\u1e9czero", null);
var v3044 = new sc_Pair(v3269, null);
var v2792 = new sc_Pair("\u1e9cx", v3044);
var v2505 = new sc_Pair(v2791, v2792);
var v2220 = new sc_Pair("\u1e9cif", v2505);
var v1912 = new sc_Pair(v2220, null);
var v1607 = new sc_Pair(v1911, v1912);
var v1005 = new sc_Pair("\u1e9cequal", v1607);
var v3270 = new sc_Pair("\u1e9cc", null);
var v3045 = new sc_Pair("\u1e9cb", v3270);
var v2793 = new sc_Pair("\u1e9ca", v3045);
var v2506 = new sc_Pair("\u1e9cif", v2793);
var v2794 = new sc_Pair("\u1e9ce", null);
var v2507 = new sc_Pair("\u1e9cd", v2794);
var v2221 = new sc_Pair(v2506, v2507);
var v1913 = new sc_Pair("\u1e9cif", v2221);
var v3527 = new sc_Pair("\u1e9ce", null);
var v3427 = new sc_Pair("\u1e9cd", v3527);
var v3271 = new sc_Pair("\u1e9cb", v3427);
var v3046 = new sc_Pair("\u1e9cif", v3271);
var v3593 = new sc_Pair("\u1e9ce", null);
var v3528 = new sc_Pair("\u1e9cd", v3593);
var v3428 = new sc_Pair("\u1e9cc", v3528);
var v3272 = new sc_Pair("\u1e9cif", v3428);
var v3047 = new sc_Pair(v3272, null);
var v2795 = new sc_Pair(v3046, v3047);
var v2508 = new sc_Pair("\u1e9ca", v2795);
var v2222 = new sc_Pair("\u1e9cif", v2508);
var v1914 = new sc_Pair(v2222, null);
var v1608 = new sc_Pair(v1913, v1914);
var v1006 = new sc_Pair("\u1e9cequal", v1608);
var v2223 = new sc_Pair("\u1e9cx", null);
var v1915 = new sc_Pair("\u1e9czerop", v2223);
var v3429 = new sc_Pair("\u1e9czero", null);
var v3273 = new sc_Pair(v3429, null);
var v3048 = new sc_Pair("\u1e9cx", v3273);
var v2796 = new sc_Pair("\u1e9cequal", v3048);
var v3529 = new sc_Pair("\u1e9cx", null);
var v3430 = new sc_Pair("\u1e9cnumberp", v3529);
var v3274 = new sc_Pair(v3430, null);
var v3049 = new sc_Pair("\u1e9cnot", v3274);
var v2797 = new sc_Pair(v3049, null);
var v2509 = new sc_Pair(v2796, v2797);
var v2224 = new sc_Pair("\u1e9cor", v2509);
var v1916 = new sc_Pair(v2224, null);
var v1609 = new sc_Pair(v1915, v1916);
var v1007 = new sc_Pair("\u1e9cequal", v1609);
var v3050 = new sc_Pair("\u1e9cy", null);
var v2798 = new sc_Pair("\u1e9cx", v3050);
var v2510 = new sc_Pair("\u1e9cplus", v2798);
var v2511 = new sc_Pair("\u1e9cz", null);
var v2225 = new sc_Pair(v2510, v2511);
var v1917 = new sc_Pair("\u1e9cplus", v2225);
var v3431 = new sc_Pair("\u1e9cz", null);
var v3275 = new sc_Pair("\u1e9cy", v3431);
var v3051 = new sc_Pair("\u1e9cplus", v3275);
var v2799 = new sc_Pair(v3051, null);
var v2512 = new sc_Pair("\u1e9cx", v2799);
var v2226 = new sc_Pair("\u1e9cplus", v2512);
var v1918 = new sc_Pair(v2226, null);
var v1610 = new sc_Pair(v1917, v1918);
var v1008 = new sc_Pair("\u1e9cequal", v1610);
var v3052 = new sc_Pair("\u1e9cb", null);
var v2800 = new sc_Pair("\u1e9ca", v3052);
var v2513 = new sc_Pair("\u1e9cplus", v2800);
var v2801 = new sc_Pair("\u1e9czero", null);
var v2514 = new sc_Pair(v2801, null);
var v2227 = new sc_Pair(v2513, v2514);
var v1919 = new sc_Pair("\u1e9cequal", v2227);
var v3053 = new sc_Pair("\u1e9ca", null);
var v2802 = new sc_Pair("\u1e9czerop", v3053);
var v3276 = new sc_Pair("\u1e9cb", null);
var v3054 = new sc_Pair("\u1e9czerop", v3276);
var v2803 = new sc_Pair(v3054, null);
var v2515 = new sc_Pair(v2802, v2803);
var v2228 = new sc_Pair("\u1e9cand", v2515);
var v1920 = new sc_Pair(v2228, null);
var v1611 = new sc_Pair(v1919, v1920);
var v1009 = new sc_Pair("\u1e9cequal", v1611);
var v2516 = new sc_Pair("\u1e9cx", null);
var v2229 = new sc_Pair("\u1e9cx", v2516);
var v1921 = new sc_Pair("\u1e9cdifference", v2229);
var v2230 = new sc_Pair("\u1e9czero", null);
var v1922 = new sc_Pair(v2230, null);
var v1612 = new sc_Pair(v1921, v1922);
var v1010 = new sc_Pair("\u1e9cequal", v1612);
var v3055 = new sc_Pair("\u1e9cb", null);
var v2804 = new sc_Pair("\u1e9ca", v3055);
var v2517 = new sc_Pair("\u1e9cplus", v2804);
var v3277 = new sc_Pair("\u1e9cc", null);
var v3056 = new sc_Pair("\u1e9ca", v3277);
var v2805 = new sc_Pair("\u1e9cplus", v3056);
var v2518 = new sc_Pair(v2805, null);
var v2231 = new sc_Pair(v2517, v2518);
var v1923 = new sc_Pair("\u1e9cequal", v2231);
var v3057 = new sc_Pair("\u1e9cb", null);
var v2806 = new sc_Pair("\u1e9cfix", v3057);
var v3278 = new sc_Pair("\u1e9cc", null);
var v3058 = new sc_Pair("\u1e9cfix", v3278);
var v2807 = new sc_Pair(v3058, null);
var v2519 = new sc_Pair(v2806, v2807);
var v2232 = new sc_Pair("\u1e9cequal", v2519);
var v1924 = new sc_Pair(v2232, null);
var v1613 = new sc_Pair(v1923, v1924);
var v1011 = new sc_Pair("\u1e9cequal", v1613);
var v2520 = new sc_Pair("\u1e9czero", null);
var v3279 = new sc_Pair("\u1e9cy", null);
var v3059 = new sc_Pair("\u1e9cx", v3279);
var v2808 = new sc_Pair("\u1e9cdifference", v3059);
var v2521 = new sc_Pair(v2808, null);
var v2233 = new sc_Pair(v2520, v2521);
var v1925 = new sc_Pair("\u1e9cequal", v2233);
var v3280 = new sc_Pair("\u1e9cx", null);
var v3060 = new sc_Pair("\u1e9cy", v3280);
var v2809 = new sc_Pair("\u1e9clessp", v3060);
var v2522 = new sc_Pair(v2809, null);
var v2234 = new sc_Pair("\u1e9cnot", v2522);
var v1926 = new sc_Pair(v2234, null);
var v1614 = new sc_Pair(v1925, v1926);
var v1012 = new sc_Pair("\u1e9cequal", v1614);
var v3281 = new sc_Pair("\u1e9cy", null);
var v3061 = new sc_Pair("\u1e9cx", v3281);
var v2810 = new sc_Pair("\u1e9cdifference", v3061);
var v2523 = new sc_Pair(v2810, null);
var v2235 = new sc_Pair("\u1e9cx", v2523);
var v1927 = new sc_Pair("\u1e9cequal", v2235);
var v3062 = new sc_Pair("\u1e9cx", null);
var v2811 = new sc_Pair("\u1e9cnumberp", v3062);
var v3632 = new sc_Pair("\u1e9czero", null);
var v3594 = new sc_Pair(v3632, null);
var v3530 = new sc_Pair("\u1e9cx", v3594);
var v3432 = new sc_Pair("\u1e9cequal", v3530);
var v3595 = new sc_Pair("\u1e9cy", null);
var v3531 = new sc_Pair("\u1e9czerop", v3595);
var v3433 = new sc_Pair(v3531, null);
var v3282 = new sc_Pair(v3432, v3433);
var v3063 = new sc_Pair("\u1e9cor", v3282);
var v2812 = new sc_Pair(v3063, null);
var v2524 = new sc_Pair(v2811, v2812);
var v2236 = new sc_Pair("\u1e9cand", v2524);
var v1928 = new sc_Pair(v2236, null);
var v1615 = new sc_Pair(v1927, v1928);
var v1013 = new sc_Pair("\u1e9cequal", v1615);
var v3434 = new sc_Pair("\u1e9cy", null);
var v3283 = new sc_Pair("\u1e9cx", v3434);
var v3064 = new sc_Pair("\u1e9cappend", v3283);
var v2813 = new sc_Pair(v3064, null);
var v2525 = new sc_Pair("\u1e9cplus-tree", v2813);
var v2526 = new sc_Pair("\u1e9ca", null);
var v2237 = new sc_Pair(v2525, v2526);
var v1929 = new sc_Pair("\u1e9cmeaning", v2237);
var v3435 = new sc_Pair("\u1e9cx", null);
var v3284 = new sc_Pair("\u1e9cplus-tree", v3435);
var v3285 = new sc_Pair("\u1e9ca", null);
var v3065 = new sc_Pair(v3284, v3285);
var v2814 = new sc_Pair("\u1e9cmeaning", v3065);
var v3532 = new sc_Pair("\u1e9cy", null);
var v3436 = new sc_Pair("\u1e9cplus-tree", v3532);
var v3437 = new sc_Pair("\u1e9ca", null);
var v3286 = new sc_Pair(v3436, v3437);
var v3066 = new sc_Pair("\u1e9cmeaning", v3286);
var v2815 = new sc_Pair(v3066, null);
var v2527 = new sc_Pair(v2814, v2815);
var v2238 = new sc_Pair("\u1e9cplus", v2527);
var v1930 = new sc_Pair(v2238, null);
var v1616 = new sc_Pair(v1929, v1930);
var v1014 = new sc_Pair("\u1e9cequal", v1616);
var v3287 = new sc_Pair("\u1e9cx", null);
var v3067 = new sc_Pair("\u1e9cplus-fringe", v3287);
var v2816 = new sc_Pair(v3067, null);
var v2528 = new sc_Pair("\u1e9cplus-tree", v2816);
var v2529 = new sc_Pair("\u1e9ca", null);
var v2239 = new sc_Pair(v2528, v2529);
var v1931 = new sc_Pair("\u1e9cmeaning", v2239);
var v3288 = new sc_Pair("\u1e9ca", null);
var v3068 = new sc_Pair("\u1e9cx", v3288);
var v2817 = new sc_Pair("\u1e9cmeaning", v3068);
var v2530 = new sc_Pair(v2817, null);
var v2240 = new sc_Pair("\u1e9cfix", v2530);
var v1932 = new sc_Pair(v2240, null);
var v1617 = new sc_Pair(v1931, v1932);
var v1015 = new sc_Pair("\u1e9cequal", v1617);
var v3069 = new sc_Pair("\u1e9cy", null);
var v2818 = new sc_Pair("\u1e9cx", v3069);
var v2531 = new sc_Pair("\u1e9cappend", v2818);
var v2532 = new sc_Pair("\u1e9cz", null);
var v2241 = new sc_Pair(v2531, v2532);
var v1933 = new sc_Pair("\u1e9cappend", v2241);
var v3438 = new sc_Pair("\u1e9cz", null);
var v3289 = new sc_Pair("\u1e9cy", v3438);
var v3070 = new sc_Pair("\u1e9cappend", v3289);
var v2819 = new sc_Pair(v3070, null);
var v2533 = new sc_Pair("\u1e9cx", v2819);
var v2242 = new sc_Pair("\u1e9cappend", v2533);
var v1934 = new sc_Pair(v2242, null);
var v1618 = new sc_Pair(v1933, v1934);
var v1016 = new sc_Pair("\u1e9cequal", v1618);
var v3071 = new sc_Pair("\u1e9cb", null);
var v2820 = new sc_Pair("\u1e9ca", v3071);
var v2534 = new sc_Pair("\u1e9cappend", v2820);
var v2243 = new sc_Pair(v2534, null);
var v1935 = new sc_Pair("\u1e9creverse", v2243);
var v3072 = new sc_Pair("\u1e9cb", null);
var v2821 = new sc_Pair("\u1e9creverse", v3072);
var v3290 = new sc_Pair("\u1e9ca", null);
var v3073 = new sc_Pair("\u1e9creverse", v3290);
var v2822 = new sc_Pair(v3073, null);
var v2535 = new sc_Pair(v2821, v2822);
var v2244 = new sc_Pair("\u1e9cappend", v2535);
var v1936 = new sc_Pair(v2244, null);
var v1619 = new sc_Pair(v1935, v1936);
var v1017 = new sc_Pair("\u1e9cequal", v1619);
var v3291 = new sc_Pair("\u1e9cz", null);
var v3074 = new sc_Pair("\u1e9cy", v3291);
var v2823 = new sc_Pair("\u1e9cplus", v3074);
var v2536 = new sc_Pair(v2823, null);
var v2245 = new sc_Pair("\u1e9cx", v2536);
var v1937 = new sc_Pair("\u1e9ctimes", v2245);
var v3292 = new sc_Pair("\u1e9cy", null);
var v3075 = new sc_Pair("\u1e9cx", v3292);
var v2824 = new sc_Pair("\u1e9ctimes", v3075);
var v3439 = new sc_Pair("\u1e9cz", null);
var v3293 = new sc_Pair("\u1e9cx", v3439);
var v3076 = new sc_Pair("\u1e9ctimes", v3293);
var v2825 = new sc_Pair(v3076, null);
var v2537 = new sc_Pair(v2824, v2825);
var v2246 = new sc_Pair("\u1e9cplus", v2537);
var v1938 = new sc_Pair(v2246, null);
var v1620 = new sc_Pair(v1937, v1938);
var v1018 = new sc_Pair("\u1e9cequal", v1620);
var v3077 = new sc_Pair("\u1e9cy", null);
var v2826 = new sc_Pair("\u1e9cx", v3077);
var v2538 = new sc_Pair("\u1e9ctimes", v2826);
var v2539 = new sc_Pair("\u1e9cz", null);
var v2247 = new sc_Pair(v2538, v2539);
var v1939 = new sc_Pair("\u1e9ctimes", v2247);
var v3440 = new sc_Pair("\u1e9cz", null);
var v3294 = new sc_Pair("\u1e9cy", v3440);
var v3078 = new sc_Pair("\u1e9ctimes", v3294);
var v2827 = new sc_Pair(v3078, null);
var v2540 = new sc_Pair("\u1e9cx", v2827);
var v2248 = new sc_Pair("\u1e9ctimes", v2540);
var v1940 = new sc_Pair(v2248, null);
var v1621 = new sc_Pair(v1939, v1940);
var v1019 = new sc_Pair("\u1e9cequal", v1621);
var v3079 = new sc_Pair("\u1e9cy", null);
var v2828 = new sc_Pair("\u1e9cx", v3079);
var v2541 = new sc_Pair("\u1e9ctimes", v2828);
var v2829 = new sc_Pair("\u1e9czero", null);
var v2542 = new sc_Pair(v2829, null);
var v2249 = new sc_Pair(v2541, v2542);
var v1941 = new sc_Pair("\u1e9cequal", v2249);
var v3080 = new sc_Pair("\u1e9cx", null);
var v2830 = new sc_Pair("\u1e9czerop", v3080);
var v3295 = new sc_Pair("\u1e9cy", null);
var v3081 = new sc_Pair("\u1e9czerop", v3295);
var v2831 = new sc_Pair(v3081, null);
var v2543 = new sc_Pair(v2830, v2831);
var v2250 = new sc_Pair("\u1e9cor", v2543);
var v1942 = new sc_Pair(v2250, null);
var v1622 = new sc_Pair(v1941, v1942);
var v1020 = new sc_Pair("\u1e9cequal", v1622);
var v3082 = new sc_Pair("\u1e9cy", null);
var v2832 = new sc_Pair("\u1e9cx", v3082);
var v2544 = new sc_Pair("\u1e9cappend", v2832);
var v2833 = new sc_Pair("\u1e9cenvrn", null);
var v2545 = new sc_Pair("\u1e9cpds", v2833);
var v2251 = new sc_Pair(v2544, v2545);
var v1943 = new sc_Pair("\u1e9cexec", v2251);
var v3533 = new sc_Pair("\u1e9cenvrn", null);
var v3441 = new sc_Pair("\u1e9cpds", v3533);
var v3296 = new sc_Pair("\u1e9cx", v3441);
var v3083 = new sc_Pair("\u1e9cexec", v3296);
var v3084 = new sc_Pair("\u1e9cenvrn", null);
var v2834 = new sc_Pair(v3083, v3084);
var v2546 = new sc_Pair("\u1e9cy", v2834);
var v2252 = new sc_Pair("\u1e9cexec", v2546);
var v1944 = new sc_Pair(v2252, null);
var v1623 = new sc_Pair(v1943, v1944);
var v1021 = new sc_Pair("\u1e9cequal", v1623);
var v2547 = new sc_Pair("\u1e9cy", null);
var v2253 = new sc_Pair("\u1e9cx", v2547);
var v1945 = new sc_Pair("\u1e9cmc-flatten", v2253);
var v3085 = new sc_Pair("\u1e9cx", null);
var v2835 = new sc_Pair("\u1e9cflatten", v3085);
var v2836 = new sc_Pair("\u1e9cy", null);
var v2548 = new sc_Pair(v2835, v2836);
var v2254 = new sc_Pair("\u1e9cappend", v2548);
var v1946 = new sc_Pair(v2254, null);
var v1624 = new sc_Pair(v1945, v1946);
var v1022 = new sc_Pair("\u1e9cequal", v1624);
var v3297 = new sc_Pair("\u1e9cb", null);
var v3086 = new sc_Pair("\u1e9ca", v3297);
var v2837 = new sc_Pair("\u1e9cappend", v3086);
var v2549 = new sc_Pair(v2837, null);
var v2255 = new sc_Pair("\u1e9cx", v2549);
var v1947 = new sc_Pair("\u1e9cmember", v2255);
var v3298 = new sc_Pair("\u1e9ca", null);
var v3087 = new sc_Pair("\u1e9cx", v3298);
var v2838 = new sc_Pair("\u1e9cmember", v3087);
var v3442 = new sc_Pair("\u1e9cb", null);
var v3299 = new sc_Pair("\u1e9cx", v3442);
var v3088 = new sc_Pair("\u1e9cmember", v3299);
var v2839 = new sc_Pair(v3088, null);
var v2550 = new sc_Pair(v2838, v2839);
var v2256 = new sc_Pair("\u1e9cor", v2550);
var v1948 = new sc_Pair(v2256, null);
var v1625 = new sc_Pair(v1947, v1948);
var v1023 = new sc_Pair("\u1e9cequal", v1625);
var v3089 = new sc_Pair("\u1e9cy", null);
var v2840 = new sc_Pair("\u1e9creverse", v3089);
var v2551 = new sc_Pair(v2840, null);
var v2257 = new sc_Pair("\u1e9cx", v2551);
var v1949 = new sc_Pair("\u1e9cmember", v2257);
var v2841 = new sc_Pair("\u1e9cy", null);
var v2552 = new sc_Pair("\u1e9cx", v2841);
var v2258 = new sc_Pair("\u1e9cmember", v2552);
var v1950 = new sc_Pair(v2258, null);
var v1626 = new sc_Pair(v1949, v1950);
var v1024 = new sc_Pair("\u1e9cequal", v1626);
var v2842 = new sc_Pair("\u1e9cx", null);
var v2553 = new sc_Pair("\u1e9creverse", v2842);
var v2259 = new sc_Pair(v2553, null);
var v1951 = new sc_Pair("\u1e9clength", v2259);
var v2554 = new sc_Pair("\u1e9cx", null);
var v2260 = new sc_Pair("\u1e9clength", v2554);
var v1952 = new sc_Pair(v2260, null);
var v1627 = new sc_Pair(v1951, v1952);
var v1025 = new sc_Pair("\u1e9cequal", v1627);
var v3300 = new sc_Pair("\u1e9cc", null);
var v3090 = new sc_Pair("\u1e9cb", v3300);
var v2843 = new sc_Pair("\u1e9cintersect", v3090);
var v2555 = new sc_Pair(v2843, null);
var v2261 = new sc_Pair("\u1e9ca", v2555);
var v1953 = new sc_Pair("\u1e9cmember", v2261);
var v3301 = new sc_Pair("\u1e9cb", null);
var v3091 = new sc_Pair("\u1e9ca", v3301);
var v2844 = new sc_Pair("\u1e9cmember", v3091);
var v3443 = new sc_Pair("\u1e9cc", null);
var v3302 = new sc_Pair("\u1e9ca", v3443);
var v3092 = new sc_Pair("\u1e9cmember", v3302);
var v2845 = new sc_Pair(v3092, null);
var v2556 = new sc_Pair(v2844, v2845);
var v2262 = new sc_Pair("\u1e9cand", v2556);
var v1954 = new sc_Pair(v2262, null);
var v1628 = new sc_Pair(v1953, v1954);
var v1026 = new sc_Pair("\u1e9cequal", v1628);
var v2557 = new sc_Pair("\u1e9czero", null);
var v2558 = new sc_Pair("\u1e9ci", null);
var v2263 = new sc_Pair(v2557, v2558);
var v1955 = new sc_Pair("\u1e9cnth", v2263);
var v2264 = new sc_Pair("\u1e9czero", null);
var v1956 = new sc_Pair(v2264, null);
var v1629 = new sc_Pair(v1955, v1956);
var v1027 = new sc_Pair("\u1e9cequal", v1629);
var v3303 = new sc_Pair("\u1e9ck", null);
var v3093 = new sc_Pair("\u1e9cj", v3303);
var v2846 = new sc_Pair("\u1e9cplus", v3093);
var v2559 = new sc_Pair(v2846, null);
var v2265 = new sc_Pair("\u1e9ci", v2559);
var v1957 = new sc_Pair("\u1e9cexp", v2265);
var v3304 = new sc_Pair("\u1e9cj", null);
var v3094 = new sc_Pair("\u1e9ci", v3304);
var v2847 = new sc_Pair("\u1e9cexp", v3094);
var v3444 = new sc_Pair("\u1e9ck", null);
var v3305 = new sc_Pair("\u1e9ci", v3444);
var v3095 = new sc_Pair("\u1e9cexp", v3305);
var v2848 = new sc_Pair(v3095, null);
var v2560 = new sc_Pair(v2847, v2848);
var v2266 = new sc_Pair("\u1e9ctimes", v2560);
var v1958 = new sc_Pair(v2266, null);
var v1630 = new sc_Pair(v1957, v1958);
var v1028 = new sc_Pair("\u1e9cequal", v1630);
var v3306 = new sc_Pair("\u1e9ck", null);
var v3096 = new sc_Pair("\u1e9cj", v3306);
var v2849 = new sc_Pair("\u1e9ctimes", v3096);
var v2561 = new sc_Pair(v2849, null);
var v2267 = new sc_Pair("\u1e9ci", v2561);
var v1959 = new sc_Pair("\u1e9cexp", v2267);
var v3307 = new sc_Pair("\u1e9cj", null);
var v3097 = new sc_Pair("\u1e9ci", v3307);
var v2850 = new sc_Pair("\u1e9cexp", v3097);
var v2851 = new sc_Pair("\u1e9ck", null);
var v2562 = new sc_Pair(v2850, v2851);
var v2268 = new sc_Pair("\u1e9cexp", v2562);
var v1960 = new sc_Pair(v2268, null);
var v1631 = new sc_Pair(v1959, v1960);
var v1029 = new sc_Pair("\u1e9cequal", v1631);
var v2563 = new sc_Pair("\u1e9cy", null);
var v2269 = new sc_Pair("\u1e9cx", v2563);
var v1961 = new sc_Pair("\u1e9creverse-loop", v2269);
var v3098 = new sc_Pair("\u1e9cx", null);
var v2852 = new sc_Pair("\u1e9creverse", v3098);
var v2853 = new sc_Pair("\u1e9cy", null);
var v2564 = new sc_Pair(v2852, v2853);
var v2270 = new sc_Pair("\u1e9cappend", v2564);
var v1962 = new sc_Pair(v2270, null);
var v1632 = new sc_Pair(v1961, v1962);
var v1030 = new sc_Pair("\u1e9cequal", v1632);
var v2854 = new sc_Pair("\u1e9cnil", null);
var v2565 = new sc_Pair(v2854, null);
var v2271 = new sc_Pair("\u1e9cx", v2565);
var v1963 = new sc_Pair("\u1e9creverse-loop", v2271);
var v2566 = new sc_Pair("\u1e9cx", null);
var v2272 = new sc_Pair("\u1e9creverse", v2566);
var v1964 = new sc_Pair(v2272, null);
var v1633 = new sc_Pair(v1963, v1964);
var v1031 = new sc_Pair("\u1e9cequal", v1633);
var v3308 = new sc_Pair("\u1e9cy", null);
var v3099 = new sc_Pair("\u1e9cx", v3308);
var v2855 = new sc_Pair("\u1e9csort-lp", v3099);
var v2567 = new sc_Pair(v2855, null);
var v2273 = new sc_Pair("\u1e9cz", v2567);
var v1965 = new sc_Pair("\u1e9ccount-list", v2273);
var v3309 = new sc_Pair("\u1e9cx", null);
var v3100 = new sc_Pair("\u1e9cz", v3309);
var v2856 = new sc_Pair("\u1e9ccount-list", v3100);
var v3445 = new sc_Pair("\u1e9cy", null);
var v3310 = new sc_Pair("\u1e9cz", v3445);
var v3101 = new sc_Pair("\u1e9ccount-list", v3310);
var v2857 = new sc_Pair(v3101, null);
var v2568 = new sc_Pair(v2856, v2857);
var v2274 = new sc_Pair("\u1e9cplus", v2568);
var v1966 = new sc_Pair(v2274, null);
var v1634 = new sc_Pair(v1965, v1966);
var v1032 = new sc_Pair("\u1e9cequal", v1634);
var v3102 = new sc_Pair("\u1e9cb", null);
var v2858 = new sc_Pair("\u1e9ca", v3102);
var v2569 = new sc_Pair("\u1e9cappend", v2858);
var v3311 = new sc_Pair("\u1e9cc", null);
var v3103 = new sc_Pair("\u1e9ca", v3311);
var v2859 = new sc_Pair("\u1e9cappend", v3103);
var v2570 = new sc_Pair(v2859, null);
var v2275 = new sc_Pair(v2569, v2570);
var v1967 = new sc_Pair("\u1e9cequal", v2275);
var v2860 = new sc_Pair("\u1e9cc", null);
var v2571 = new sc_Pair("\u1e9cb", v2860);
var v2276 = new sc_Pair("\u1e9cequal", v2571);
var v1968 = new sc_Pair(v2276, null);
var v1635 = new sc_Pair(v1967, v1968);
var v1033 = new sc_Pair("\u1e9cequal", v1635);
var v3104 = new sc_Pair("\u1e9cy", null);
var v2861 = new sc_Pair("\u1e9cx", v3104);
var v2572 = new sc_Pair("\u1e9cremainder", v2861);
var v3596 = new sc_Pair("\u1e9cy", null);
var v3534 = new sc_Pair("\u1e9cx", v3596);
var v3446 = new sc_Pair("\u1e9cquotient", v3534);
var v3312 = new sc_Pair(v3446, null);
var v3105 = new sc_Pair("\u1e9cy", v3312);
var v2862 = new sc_Pair("\u1e9ctimes", v3105);
var v2573 = new sc_Pair(v2862, null);
var v2277 = new sc_Pair(v2572, v2573);
var v1969 = new sc_Pair("\u1e9cplus", v2277);
var v2574 = new sc_Pair("\u1e9cx", null);
var v2278 = new sc_Pair("\u1e9cfix", v2574);
var v1970 = new sc_Pair(v2278, null);
var v1636 = new sc_Pair(v1969, v1970);
var v1034 = new sc_Pair("\u1e9cequal", v1636);
var v3313 = new sc_Pair("\u1e9cbase", null);
var v3106 = new sc_Pair("\u1e9ci", v3313);
var v2863 = new sc_Pair("\u1e9cl", v3106);
var v2575 = new sc_Pair("\u1e9cbig-plus1", v2863);
var v2576 = new sc_Pair("\u1e9cbase", null);
var v2279 = new sc_Pair(v2575, v2576);
var v1971 = new sc_Pair("\u1e9cpower-eval", v2279);
var v3314 = new sc_Pair("\u1e9cbase", null);
var v3107 = new sc_Pair("\u1e9cl", v3314);
var v2864 = new sc_Pair("\u1e9cpower-eval", v3107);
var v2865 = new sc_Pair("\u1e9ci", null);
var v2577 = new sc_Pair(v2864, v2865);
var v2280 = new sc_Pair("\u1e9cplus", v2577);
var v1972 = new sc_Pair(v2280, null);
var v1637 = new sc_Pair(v1971, v1972);
var v1035 = new sc_Pair("\u1e9cequal", v1637);
var v3447 = new sc_Pair("\u1e9cbase", null);
var v3315 = new sc_Pair("\u1e9ci", v3447);
var v3108 = new sc_Pair("\u1e9cy", v3315);
var v2866 = new sc_Pair("\u1e9cx", v3108);
var v2578 = new sc_Pair("\u1e9cbig-plus", v2866);
var v2579 = new sc_Pair("\u1e9cbase", null);
var v2281 = new sc_Pair(v2578, v2579);
var v1973 = new sc_Pair("\u1e9cpower-eval", v2281);
var v3597 = new sc_Pair("\u1e9cbase", null);
var v3535 = new sc_Pair("\u1e9cx", v3597);
var v3448 = new sc_Pair("\u1e9cpower-eval", v3535);
var v3633 = new sc_Pair("\u1e9cbase", null);
var v3598 = new sc_Pair("\u1e9cy", v3633);
var v3536 = new sc_Pair("\u1e9cpower-eval", v3598);
var v3449 = new sc_Pair(v3536, null);
var v3316 = new sc_Pair(v3448, v3449);
var v3109 = new sc_Pair("\u1e9cplus", v3316);
var v2867 = new sc_Pair(v3109, null);
var v2580 = new sc_Pair("\u1e9ci", v2867);
var v2282 = new sc_Pair("\u1e9cplus", v2580);
var v1974 = new sc_Pair(v2282, null);
var v1638 = new sc_Pair(v1973, v1974);
var v1036 = new sc_Pair("\u1e9cequal", v1638);
var v2581 = new sc_Pair(1, null);
var v2283 = new sc_Pair("\u1e9cy", v2581);
var v1975 = new sc_Pair("\u1e9cremainder", v2283);
var v2284 = new sc_Pair("\u1e9czero", null);
var v1976 = new sc_Pair(v2284, null);
var v1639 = new sc_Pair(v1975, v1976);
var v1037 = new sc_Pair("\u1e9cequal", v1639);
var v3110 = new sc_Pair("\u1e9cy", null);
var v2868 = new sc_Pair("\u1e9cx", v3110);
var v2582 = new sc_Pair("\u1e9cremainder", v2868);
var v2583 = new sc_Pair("\u1e9cy", null);
var v2285 = new sc_Pair(v2582, v2583);
var v1977 = new sc_Pair("\u1e9clessp", v2285);
var v3111 = new sc_Pair("\u1e9cy", null);
var v2869 = new sc_Pair("\u1e9czerop", v3111);
var v2584 = new sc_Pair(v2869, null);
var v2286 = new sc_Pair("\u1e9cnot", v2584);
var v1978 = new sc_Pair(v2286, null);
var v1640 = new sc_Pair(v1977, v1978);
var v1038 = new sc_Pair("\u1e9cequal", v1640);
var v2585 = new sc_Pair("\u1e9cx", null);
var v2287 = new sc_Pair("\u1e9cx", v2585);
var v1979 = new sc_Pair("\u1e9cremainder", v2287);
var v2288 = new sc_Pair("\u1e9czero", null);
var v1980 = new sc_Pair(v2288, null);
var v1641 = new sc_Pair(v1979, v1980);
var v1039 = new sc_Pair("\u1e9cequal", v1641);
var v3112 = new sc_Pair("\u1e9cj", null);
var v2870 = new sc_Pair("\u1e9ci", v3112);
var v2586 = new sc_Pair("\u1e9cquotient", v2870);
var v2587 = new sc_Pair("\u1e9ci", null);
var v2289 = new sc_Pair(v2586, v2587);
var v1981 = new sc_Pair("\u1e9clessp", v2289);
var v3450 = new sc_Pair("\u1e9ci", null);
var v3317 = new sc_Pair("\u1e9czerop", v3450);
var v3113 = new sc_Pair(v3317, null);
var v2871 = new sc_Pair("\u1e9cnot", v3113);
var v3537 = new sc_Pair("\u1e9cj", null);
var v3451 = new sc_Pair("\u1e9czerop", v3537);
var v3664 = new sc_Pair(1, null);
var v3654 = new sc_Pair("\u1e9cj", v3664);
var v3634 = new sc_Pair("\u1e9cequal", v3654);
var v3599 = new sc_Pair(v3634, null);
var v3538 = new sc_Pair("\u1e9cnot", v3599);
var v3452 = new sc_Pair(v3538, null);
var v3318 = new sc_Pair(v3451, v3452);
var v3114 = new sc_Pair("\u1e9cor", v3318);
var v2872 = new sc_Pair(v3114, null);
var v2588 = new sc_Pair(v2871, v2872);
var v2290 = new sc_Pair("\u1e9cand", v2588);
var v1982 = new sc_Pair(v2290, null);
var v1642 = new sc_Pair(v1981, v1982);
var v1040 = new sc_Pair("\u1e9cequal", v1642);
var v3115 = new sc_Pair("\u1e9cy", null);
var v2873 = new sc_Pair("\u1e9cx", v3115);
var v2589 = new sc_Pair("\u1e9cremainder", v2873);
var v2590 = new sc_Pair("\u1e9cx", null);
var v2291 = new sc_Pair(v2589, v2590);
var v1983 = new sc_Pair("\u1e9clessp", v2291);
var v3453 = new sc_Pair("\u1e9cy", null);
var v3319 = new sc_Pair("\u1e9czerop", v3453);
var v3116 = new sc_Pair(v3319, null);
var v2874 = new sc_Pair("\u1e9cnot", v3116);
var v3539 = new sc_Pair("\u1e9cx", null);
var v3454 = new sc_Pair("\u1e9czerop", v3539);
var v3320 = new sc_Pair(v3454, null);
var v3117 = new sc_Pair("\u1e9cnot", v3320);
var v3635 = new sc_Pair("\u1e9cy", null);
var v3600 = new sc_Pair("\u1e9cx", v3635);
var v3540 = new sc_Pair("\u1e9clessp", v3600);
var v3455 = new sc_Pair(v3540, null);
var v3321 = new sc_Pair("\u1e9cnot", v3455);
var v3118 = new sc_Pair(v3321, null);
var v2875 = new sc_Pair(v3117, v3118);
var v2591 = new sc_Pair(v2874, v2875);
var v2292 = new sc_Pair("\u1e9cand", v2591);
var v1984 = new sc_Pair(v2292, null);
var v1643 = new sc_Pair(v1983, v1984);
var v1041 = new sc_Pair("\u1e9cequal", v1643);
var v3119 = new sc_Pair("\u1e9cbase", null);
var v2876 = new sc_Pair("\u1e9ci", v3119);
var v2592 = new sc_Pair("\u1e9cpower-rep", v2876);
var v2593 = new sc_Pair("\u1e9cbase", null);
var v2293 = new sc_Pair(v2592, v2593);
var v1985 = new sc_Pair("\u1e9cpower-eval", v2293);
var v2594 = new sc_Pair("\u1e9ci", null);
var v2294 = new sc_Pair("\u1e9cfix", v2594);
var v1986 = new sc_Pair(v2294, null);
var v1644 = new sc_Pair(v1985, v1986);
var v1042 = new sc_Pair("\u1e9cequal", v1644);
var v3456 = new sc_Pair("\u1e9cbase", null);
var v3322 = new sc_Pair("\u1e9ci", v3456);
var v3120 = new sc_Pair("\u1e9cpower-rep", v3322);
var v3541 = new sc_Pair("\u1e9cbase", null);
var v3457 = new sc_Pair("\u1e9cj", v3541);
var v3323 = new sc_Pair("\u1e9cpower-rep", v3457);
var v3458 = new sc_Pair("\u1e9czero", null);
var v3459 = new sc_Pair("\u1e9cbase", null);
var v3324 = new sc_Pair(v3458, v3459);
var v3121 = new sc_Pair(v3323, v3324);
var v2877 = new sc_Pair(v3120, v3121);
var v2595 = new sc_Pair("\u1e9cbig-plus", v2877);
var v2596 = new sc_Pair("\u1e9cbase", null);
var v2295 = new sc_Pair(v2595, v2596);
var v1987 = new sc_Pair("\u1e9cpower-eval", v2295);
var v2878 = new sc_Pair("\u1e9cj", null);
var v2597 = new sc_Pair("\u1e9ci", v2878);
var v2296 = new sc_Pair("\u1e9cplus", v2597);
var v1988 = new sc_Pair(v2296, null);
var v1645 = new sc_Pair(v1987, v1988);
var v1043 = new sc_Pair("\u1e9cequal", v1645);
var v2598 = new sc_Pair("\u1e9cy", null);
var v2297 = new sc_Pair("\u1e9cx", v2598);
var v1989 = new sc_Pair("\u1e9cgcd", v2297);
var v2879 = new sc_Pair("\u1e9cx", null);
var v2599 = new sc_Pair("\u1e9cy", v2879);
var v2298 = new sc_Pair("\u1e9cgcd", v2599);
var v1990 = new sc_Pair(v2298, null);
var v1646 = new sc_Pair(v1989, v1990);
var v1044 = new sc_Pair("\u1e9cequal", v1646);
var v3122 = new sc_Pair("\u1e9cb", null);
var v2880 = new sc_Pair("\u1e9ca", v3122);
var v2600 = new sc_Pair("\u1e9cappend", v2880);
var v2601 = new sc_Pair("\u1e9ci", null);
var v2299 = new sc_Pair(v2600, v2601);
var v1991 = new sc_Pair("\u1e9cnth", v2299);
var v3325 = new sc_Pair("\u1e9ci", null);
var v3123 = new sc_Pair("\u1e9ca", v3325);
var v2881 = new sc_Pair("\u1e9cnth", v3123);
var v3665 = new sc_Pair("\u1e9ca", null);
var v3655 = new sc_Pair("\u1e9clength", v3665);
var v3636 = new sc_Pair(v3655, null);
var v3601 = new sc_Pair("\u1e9ci", v3636);
var v3542 = new sc_Pair("\u1e9cdifference", v3601);
var v3460 = new sc_Pair(v3542, null);
var v3326 = new sc_Pair("\u1e9cb", v3460);
var v3124 = new sc_Pair("\u1e9cnth", v3326);
var v2882 = new sc_Pair(v3124, null);
var v2602 = new sc_Pair(v2881, v2882);
var v2300 = new sc_Pair("\u1e9cappend", v2602);
var v1992 = new sc_Pair(v2300, null);
var v1647 = new sc_Pair(v1991, v1992);
var v1045 = new sc_Pair("\u1e9cequal", v1647);
var v3125 = new sc_Pair("\u1e9cy", null);
var v2883 = new sc_Pair("\u1e9cx", v3125);
var v2603 = new sc_Pair("\u1e9cplus", v2883);
var v2604 = new sc_Pair("\u1e9cx", null);
var v2301 = new sc_Pair(v2603, v2604);
var v1993 = new sc_Pair("\u1e9cdifference", v2301);
var v2605 = new sc_Pair("\u1e9cy", null);
var v2302 = new sc_Pair("\u1e9cfix", v2605);
var v1994 = new sc_Pair(v2302, null);
var v1648 = new sc_Pair(v1993, v1994);
var v1046 = new sc_Pair("\u1e9cequal", v1648);
var v3126 = new sc_Pair("\u1e9cx", null);
var v2884 = new sc_Pair("\u1e9cy", v3126);
var v2606 = new sc_Pair("\u1e9cplus", v2884);
var v2607 = new sc_Pair("\u1e9cx", null);
var v2303 = new sc_Pair(v2606, v2607);
var v1995 = new sc_Pair("\u1e9cdifference", v2303);
var v2608 = new sc_Pair("\u1e9cy", null);
var v2304 = new sc_Pair("\u1e9cfix", v2608);
var v1996 = new sc_Pair(v2304, null);
var v1649 = new sc_Pair(v1995, v1996);
var v1047 = new sc_Pair("\u1e9cequal", v1649);
var v3127 = new sc_Pair("\u1e9cy", null);
var v2885 = new sc_Pair("\u1e9cx", v3127);
var v2609 = new sc_Pair("\u1e9cplus", v2885);
var v3327 = new sc_Pair("\u1e9cz", null);
var v3128 = new sc_Pair("\u1e9cx", v3327);
var v2886 = new sc_Pair("\u1e9cplus", v3128);
var v2610 = new sc_Pair(v2886, null);
var v2305 = new sc_Pair(v2609, v2610);
var v1997 = new sc_Pair("\u1e9cdifference", v2305);
var v2887 = new sc_Pair("\u1e9cz", null);
var v2611 = new sc_Pair("\u1e9cy", v2887);
var v2306 = new sc_Pair("\u1e9cdifference", v2611);
var v1998 = new sc_Pair(v2306, null);
var v1650 = new sc_Pair(v1997, v1998);
var v1048 = new sc_Pair("\u1e9cequal", v1650);
var v3328 = new sc_Pair("\u1e9cw", null);
var v3129 = new sc_Pair("\u1e9cc", v3328);
var v2888 = new sc_Pair("\u1e9cdifference", v3129);
var v2612 = new sc_Pair(v2888, null);
var v2307 = new sc_Pair("\u1e9cx", v2612);
var v1999 = new sc_Pair("\u1e9ctimes", v2307);
var v3329 = new sc_Pair("\u1e9cx", null);
var v3130 = new sc_Pair("\u1e9cc", v3329);
var v2889 = new sc_Pair("\u1e9ctimes", v3130);
var v3461 = new sc_Pair("\u1e9cx", null);
var v3330 = new sc_Pair("\u1e9cw", v3461);
var v3131 = new sc_Pair("\u1e9ctimes", v3330);
var v2890 = new sc_Pair(v3131, null);
var v2613 = new sc_Pair(v2889, v2890);
var v2308 = new sc_Pair("\u1e9cdifference", v2613);
var v2000 = new sc_Pair(v2308, null);
var v1651 = new sc_Pair(v1999, v2000);
var v1049 = new sc_Pair("\u1e9cequal", v1651);
var v3132 = new sc_Pair("\u1e9cz", null);
var v2891 = new sc_Pair("\u1e9cx", v3132);
var v2614 = new sc_Pair("\u1e9ctimes", v2891);
var v2615 = new sc_Pair("\u1e9cz", null);
var v2309 = new sc_Pair(v2614, v2615);
var v2001 = new sc_Pair("\u1e9cremainder", v2309);
var v2310 = new sc_Pair("\u1e9czero", null);
var v2002 = new sc_Pair(v2310, null);
var v1652 = new sc_Pair(v2001, v2002);
var v1050 = new sc_Pair("\u1e9cequal", v1652);
var v3543 = new sc_Pair("\u1e9cc", null);
var v3462 = new sc_Pair("\u1e9ca", v3543);
var v3331 = new sc_Pair("\u1e9cplus", v3462);
var v3133 = new sc_Pair(v3331, null);
var v2892 = new sc_Pair("\u1e9cb", v3133);
var v2616 = new sc_Pair("\u1e9cplus", v2892);
var v2617 = new sc_Pair("\u1e9ca", null);
var v2311 = new sc_Pair(v2616, v2617);
var v2003 = new sc_Pair("\u1e9cdifference", v2311);
var v2893 = new sc_Pair("\u1e9cc", null);
var v2618 = new sc_Pair("\u1e9cb", v2893);
var v2312 = new sc_Pair("\u1e9cplus", v2618);
var v2004 = new sc_Pair(v2312, null);
var v1653 = new sc_Pair(v2003, v2004);
var v1051 = new sc_Pair("\u1e9cequal", v1653);
var v3463 = new sc_Pair("\u1e9cz", null);
var v3332 = new sc_Pair("\u1e9cy", v3463);
var v3134 = new sc_Pair("\u1e9cplus", v3332);
var v2894 = new sc_Pair(v3134, null);
var v2619 = new sc_Pair("\u1e9cadd1", v2894);
var v2620 = new sc_Pair("\u1e9cz", null);
var v2313 = new sc_Pair(v2619, v2620);
var v2005 = new sc_Pair("\u1e9cdifference", v2313);
var v2621 = new sc_Pair("\u1e9cy", null);
var v2314 = new sc_Pair("\u1e9cadd1", v2621);
var v2006 = new sc_Pair(v2314, null);
var v1654 = new sc_Pair(v2005, v2006);
var v1052 = new sc_Pair("\u1e9cequal", v1654);
var v3135 = new sc_Pair("\u1e9cy", null);
var v2895 = new sc_Pair("\u1e9cx", v3135);
var v2622 = new sc_Pair("\u1e9cplus", v2895);
var v3333 = new sc_Pair("\u1e9cz", null);
var v3136 = new sc_Pair("\u1e9cx", v3333);
var v2896 = new sc_Pair("\u1e9cplus", v3136);
var v2623 = new sc_Pair(v2896, null);
var v2315 = new sc_Pair(v2622, v2623);
var v2007 = new sc_Pair("\u1e9clessp", v2315);
var v2897 = new sc_Pair("\u1e9cz", null);
var v2624 = new sc_Pair("\u1e9cy", v2897);
var v2316 = new sc_Pair("\u1e9clessp", v2624);
var v2008 = new sc_Pair(v2316, null);
var v1655 = new sc_Pair(v2007, v2008);
var v1053 = new sc_Pair("\u1e9cequal", v1655);
var v3137 = new sc_Pair("\u1e9cz", null);
var v2898 = new sc_Pair("\u1e9cx", v3137);
var v2625 = new sc_Pair("\u1e9ctimes", v2898);
var v3334 = new sc_Pair("\u1e9cz", null);
var v3138 = new sc_Pair("\u1e9cy", v3334);
var v2899 = new sc_Pair("\u1e9ctimes", v3138);
var v2626 = new sc_Pair(v2899, null);
var v2317 = new sc_Pair(v2625, v2626);
var v2009 = new sc_Pair("\u1e9clessp", v2317);
var v3464 = new sc_Pair("\u1e9cz", null);
var v3335 = new sc_Pair("\u1e9czerop", v3464);
var v3139 = new sc_Pair(v3335, null);
var v2900 = new sc_Pair("\u1e9cnot", v3139);
var v3465 = new sc_Pair("\u1e9cy", null);
var v3336 = new sc_Pair("\u1e9cx", v3465);
var v3140 = new sc_Pair("\u1e9clessp", v3336);
var v2901 = new sc_Pair(v3140, null);
var v2627 = new sc_Pair(v2900, v2901);
var v2318 = new sc_Pair("\u1e9cand", v2627);
var v2010 = new sc_Pair(v2318, null);
var v1656 = new sc_Pair(v2009, v2010);
var v1054 = new sc_Pair("\u1e9cequal", v1656);
var v3337 = new sc_Pair("\u1e9cy", null);
var v3141 = new sc_Pair("\u1e9cx", v3337);
var v2902 = new sc_Pair("\u1e9cplus", v3141);
var v2628 = new sc_Pair(v2902, null);
var v2319 = new sc_Pair("\u1e9cy", v2628);
var v2011 = new sc_Pair("\u1e9clessp", v2319);
var v3142 = new sc_Pair("\u1e9cx", null);
var v2903 = new sc_Pair("\u1e9czerop", v3142);
var v2629 = new sc_Pair(v2903, null);
var v2320 = new sc_Pair("\u1e9cnot", v2629);
var v2012 = new sc_Pair(v2320, null);
var v1657 = new sc_Pair(v2011, v2012);
var v1055 = new sc_Pair("\u1e9cequal", v1657);
var v3143 = new sc_Pair("\u1e9cz", null);
var v2904 = new sc_Pair("\u1e9cx", v3143);
var v2630 = new sc_Pair("\u1e9ctimes", v2904);
var v3338 = new sc_Pair("\u1e9cz", null);
var v3144 = new sc_Pair("\u1e9cy", v3338);
var v2905 = new sc_Pair("\u1e9ctimes", v3144);
var v2631 = new sc_Pair(v2905, null);
var v2321 = new sc_Pair(v2630, v2631);
var v2013 = new sc_Pair("\u1e9cgcd", v2321);
var v3466 = new sc_Pair("\u1e9cy", null);
var v3339 = new sc_Pair("\u1e9cx", v3466);
var v3145 = new sc_Pair("\u1e9cgcd", v3339);
var v2906 = new sc_Pair(v3145, null);
var v2632 = new sc_Pair("\u1e9cz", v2906);
var v2322 = new sc_Pair("\u1e9ctimes", v2632);
var v2014 = new sc_Pair(v2322, null);
var v1658 = new sc_Pair(v2013, v2014);
var v1056 = new sc_Pair("\u1e9cequal", v1658);
var v2907 = new sc_Pair("\u1e9cx", null);
var v2633 = new sc_Pair("\u1e9cnormalize", v2907);
var v2634 = new sc_Pair("\u1e9ca", null);
var v2323 = new sc_Pair(v2633, v2634);
var v2015 = new sc_Pair("\u1e9cvalue", v2323);
var v2908 = new sc_Pair("\u1e9ca", null);
var v2635 = new sc_Pair("\u1e9cx", v2908);
var v2324 = new sc_Pair("\u1e9cvalue", v2635);
var v2016 = new sc_Pair(v2324, null);
var v1659 = new sc_Pair(v2015, v2016);
var v1057 = new sc_Pair("\u1e9cequal", v1659);
var v2909 = new sc_Pair("\u1e9cx", null);
var v2636 = new sc_Pair("\u1e9cflatten", v2909);
var v3467 = new sc_Pair("\u1e9cnil", null);
var v3340 = new sc_Pair(v3467, null);
var v3146 = new sc_Pair("\u1e9cy", v3340);
var v2910 = new sc_Pair("\u1e9ccons", v3146);
var v2637 = new sc_Pair(v2910, null);
var v2325 = new sc_Pair(v2636, v2637);
var v2017 = new sc_Pair("\u1e9cequal", v2325);
var v3147 = new sc_Pair("\u1e9cx", null);
var v2911 = new sc_Pair("\u1e9cnlistp", v3147);
var v3468 = new sc_Pair("\u1e9cy", null);
var v3341 = new sc_Pair("\u1e9cx", v3468);
var v3148 = new sc_Pair("\u1e9cequal", v3341);
var v2912 = new sc_Pair(v3148, null);
var v2638 = new sc_Pair(v2911, v2912);
var v2326 = new sc_Pair("\u1e9cand", v2638);
var v2018 = new sc_Pair(v2326, null);
var v1660 = new sc_Pair(v2017, v2018);
var v1058 = new sc_Pair("\u1e9cequal", v1660);
var v2913 = new sc_Pair("\u1e9cx", null);
var v2639 = new sc_Pair("\u1e9cgopher", v2913);
var v2327 = new sc_Pair(v2639, null);
var v2019 = new sc_Pair("\u1e9clistp", v2327);
var v2640 = new sc_Pair("\u1e9cx", null);
var v2328 = new sc_Pair("\u1e9clistp", v2640);
var v2020 = new sc_Pair(v2328, null);
var v1661 = new sc_Pair(v2019, v2020);
var v1059 = new sc_Pair("\u1e9cequal", v1661);
var v2641 = new sc_Pair("\u1e9cy", null);
var v2329 = new sc_Pair("\u1e9cx", v2641);
var v2021 = new sc_Pair("\u1e9csamefringe", v2329);
var v3149 = new sc_Pair("\u1e9cx", null);
var v2914 = new sc_Pair("\u1e9cflatten", v3149);
var v3342 = new sc_Pair("\u1e9cy", null);
var v3150 = new sc_Pair("\u1e9cflatten", v3342);
var v2915 = new sc_Pair(v3150, null);
var v2642 = new sc_Pair(v2914, v2915);
var v2330 = new sc_Pair("\u1e9cequal", v2642);
var v2022 = new sc_Pair(v2330, null);
var v1662 = new sc_Pair(v2021, v2022);
var v1060 = new sc_Pair("\u1e9cequal", v1662);
var v3151 = new sc_Pair("\u1e9cy", null);
var v2916 = new sc_Pair("\u1e9cx", v3151);
var v2643 = new sc_Pair("\u1e9cgreatest-factor", v2916);
var v2917 = new sc_Pair("\u1e9czero", null);
var v2644 = new sc_Pair(v2917, null);
var v2331 = new sc_Pair(v2643, v2644);
var v2023 = new sc_Pair("\u1e9cequal", v2331);
var v3469 = new sc_Pair("\u1e9cy", null);
var v3343 = new sc_Pair("\u1e9czerop", v3469);
var v3602 = new sc_Pair(1, null);
var v3544 = new sc_Pair("\u1e9cy", v3602);
var v3470 = new sc_Pair("\u1e9cequal", v3544);
var v3344 = new sc_Pair(v3470, null);
var v3152 = new sc_Pair(v3343, v3344);
var v2918 = new sc_Pair("\u1e9cor", v3152);
var v3545 = new sc_Pair("\u1e9czero", null);
var v3471 = new sc_Pair(v3545, null);
var v3345 = new sc_Pair("\u1e9cx", v3471);
var v3153 = new sc_Pair("\u1e9cequal", v3345);
var v2919 = new sc_Pair(v3153, null);
var v2645 = new sc_Pair(v2918, v2919);
var v2332 = new sc_Pair("\u1e9cand", v2645);
var v2024 = new sc_Pair(v2332, null);
var v1663 = new sc_Pair(v2023, v2024);
var v1061 = new sc_Pair("\u1e9cequal", v1663);
var v3154 = new sc_Pair("\u1e9cy", null);
var v2920 = new sc_Pair("\u1e9cx", v3154);
var v2646 = new sc_Pair("\u1e9cgreatest-factor", v2920);
var v2647 = new sc_Pair(1, null);
var v2333 = new sc_Pair(v2646, v2647);
var v2025 = new sc_Pair("\u1e9cequal", v2333);
var v2921 = new sc_Pair(1, null);
var v2648 = new sc_Pair("\u1e9cx", v2921);
var v2334 = new sc_Pair("\u1e9cequal", v2648);
var v2026 = new sc_Pair(v2334, null);
var v1664 = new sc_Pair(v2025, v2026);
var v1062 = new sc_Pair("\u1e9cequal", v1664);
var v3155 = new sc_Pair("\u1e9cy", null);
var v2922 = new sc_Pair("\u1e9cx", v3155);
var v2649 = new sc_Pair("\u1e9cgreatest-factor", v2922);
var v2335 = new sc_Pair(v2649, null);
var v2027 = new sc_Pair("\u1e9cnumberp", v2335);
var v3603 = new sc_Pair("\u1e9cy", null);
var v3546 = new sc_Pair("\u1e9czerop", v3603);
var v3656 = new sc_Pair(1, null);
var v3637 = new sc_Pair("\u1e9cy", v3656);
var v3604 = new sc_Pair("\u1e9cequal", v3637);
var v3547 = new sc_Pair(v3604, null);
var v3472 = new sc_Pair(v3546, v3547);
var v3346 = new sc_Pair("\u1e9cor", v3472);
var v3638 = new sc_Pair("\u1e9cx", null);
var v3605 = new sc_Pair("\u1e9cnumberp", v3638);
var v3548 = new sc_Pair(v3605, null);
var v3473 = new sc_Pair("\u1e9cnot", v3548);
var v3347 = new sc_Pair(v3473, null);
var v3156 = new sc_Pair(v3346, v3347);
var v2923 = new sc_Pair("\u1e9cand", v3156);
var v2650 = new sc_Pair(v2923, null);
var v2336 = new sc_Pair("\u1e9cnot", v2650);
var v2028 = new sc_Pair(v2336, null);
var v1665 = new sc_Pair(v2027, v2028);
var v1063 = new sc_Pair("\u1e9cequal", v1665);
var v3157 = new sc_Pair("\u1e9cy", null);
var v2924 = new sc_Pair("\u1e9cx", v3157);
var v2651 = new sc_Pair("\u1e9cappend", v2924);
var v2337 = new sc_Pair(v2651, null);
var v2029 = new sc_Pair("\u1e9ctimes-list", v2337);
var v3158 = new sc_Pair("\u1e9cx", null);
var v2925 = new sc_Pair("\u1e9ctimes-list", v3158);
var v3348 = new sc_Pair("\u1e9cy", null);
var v3159 = new sc_Pair("\u1e9ctimes-list", v3348);
var v2926 = new sc_Pair(v3159, null);
var v2652 = new sc_Pair(v2925, v2926);
var v2338 = new sc_Pair("\u1e9ctimes", v2652);
var v2030 = new sc_Pair(v2338, null);
var v1666 = new sc_Pair(v2029, v2030);
var v1064 = new sc_Pair("\u1e9cequal", v1666);
var v3160 = new sc_Pair("\u1e9cy", null);
var v2927 = new sc_Pair("\u1e9cx", v3160);
var v2653 = new sc_Pair("\u1e9cappend", v2927);
var v2339 = new sc_Pair(v2653, null);
var v2031 = new sc_Pair("\u1e9cprime-list", v2339);
var v3161 = new sc_Pair("\u1e9cx", null);
var v2928 = new sc_Pair("\u1e9cprime-list", v3161);
var v3349 = new sc_Pair("\u1e9cy", null);
var v3162 = new sc_Pair("\u1e9cprime-list", v3349);
var v2929 = new sc_Pair(v3162, null);
var v2654 = new sc_Pair(v2928, v2929);
var v2340 = new sc_Pair("\u1e9cand", v2654);
var v2032 = new sc_Pair(v2340, null);
var v1667 = new sc_Pair(v2031, v2032);
var v1065 = new sc_Pair("\u1e9cequal", v1667);
var v3350 = new sc_Pair("\u1e9cz", null);
var v3163 = new sc_Pair("\u1e9cw", v3350);
var v2930 = new sc_Pair("\u1e9ctimes", v3163);
var v2655 = new sc_Pair(v2930, null);
var v2341 = new sc_Pair("\u1e9cz", v2655);
var v2033 = new sc_Pair("\u1e9cequal", v2341);
var v3164 = new sc_Pair("\u1e9cz", null);
var v2931 = new sc_Pair("\u1e9cnumberp", v3164);
var v3639 = new sc_Pair("\u1e9czero", null);
var v3606 = new sc_Pair(v3639, null);
var v3549 = new sc_Pair("\u1e9cz", v3606);
var v3474 = new sc_Pair("\u1e9cequal", v3549);
var v3640 = new sc_Pair(1, null);
var v3607 = new sc_Pair("\u1e9cw", v3640);
var v3550 = new sc_Pair("\u1e9cequal", v3607);
var v3475 = new sc_Pair(v3550, null);
var v3351 = new sc_Pair(v3474, v3475);
var v3165 = new sc_Pair("\u1e9cor", v3351);
var v2932 = new sc_Pair(v3165, null);
var v2656 = new sc_Pair(v2931, v2932);
var v2342 = new sc_Pair("\u1e9cand", v2656);
var v2034 = new sc_Pair(v2342, null);
var v1668 = new sc_Pair(v2033, v2034);
var v1066 = new sc_Pair("\u1e9cequal", v1668);
var v2657 = new sc_Pair("\u1e9cy", null);
var v2343 = new sc_Pair("\u1e9cx", v2657);
var v2035 = new sc_Pair("\u1e9cgreatereqp", v2343);
var v3352 = new sc_Pair("\u1e9cy", null);
var v3166 = new sc_Pair("\u1e9cx", v3352);
var v2933 = new sc_Pair("\u1e9clessp", v3166);
var v2658 = new sc_Pair(v2933, null);
var v2344 = new sc_Pair("\u1e9cnot", v2658);
var v2036 = new sc_Pair(v2344, null);
var v1669 = new sc_Pair(v2035, v2036);
var v1067 = new sc_Pair("\u1e9cequal", v1669);
var v3353 = new sc_Pair("\u1e9cy", null);
var v3167 = new sc_Pair("\u1e9cx", v3353);
var v2934 = new sc_Pair("\u1e9ctimes", v3167);
var v2659 = new sc_Pair(v2934, null);
var v2345 = new sc_Pair("\u1e9cx", v2659);
var v2037 = new sc_Pair("\u1e9cequal", v2345);
var v3476 = new sc_Pair("\u1e9czero", null);
var v3354 = new sc_Pair(v3476, null);
var v3168 = new sc_Pair("\u1e9cx", v3354);
var v2935 = new sc_Pair("\u1e9cequal", v3168);
var v3551 = new sc_Pair("\u1e9cx", null);
var v3477 = new sc_Pair("\u1e9cnumberp", v3551);
var v3641 = new sc_Pair(1, null);
var v3608 = new sc_Pair("\u1e9cy", v3641);
var v3552 = new sc_Pair("\u1e9cequal", v3608);
var v3478 = new sc_Pair(v3552, null);
var v3355 = new sc_Pair(v3477, v3478);
var v3169 = new sc_Pair("\u1e9cand", v3355);
var v2936 = new sc_Pair(v3169, null);
var v2660 = new sc_Pair(v2935, v2936);
var v2346 = new sc_Pair("\u1e9cor", v2660);
var v2038 = new sc_Pair(v2346, null);
var v1670 = new sc_Pair(v2037, v2038);
var v1068 = new sc_Pair("\u1e9cequal", v1670);
var v3170 = new sc_Pair("\u1e9cx", null);
var v2937 = new sc_Pair("\u1e9cy", v3170);
var v2661 = new sc_Pair("\u1e9ctimes", v2937);
var v2662 = new sc_Pair("\u1e9cy", null);
var v2347 = new sc_Pair(v2661, v2662);
var v2039 = new sc_Pair("\u1e9cremainder", v2347);
var v2348 = new sc_Pair("\u1e9czero", null);
var v2040 = new sc_Pair(v2348, null);
var v1671 = new sc_Pair(v2039, v2040);
var v1069 = new sc_Pair("\u1e9cequal", v1671);
var v3171 = new sc_Pair("\u1e9cb", null);
var v2938 = new sc_Pair("\u1e9ca", v3171);
var v2663 = new sc_Pair("\u1e9ctimes", v2938);
var v2664 = new sc_Pair(1, null);
var v2349 = new sc_Pair(v2663, v2664);
var v2041 = new sc_Pair("\u1e9cequal", v2349);
var v3553 = new sc_Pair("\u1e9czero", null);
var v3479 = new sc_Pair(v3553, null);
var v3356 = new sc_Pair("\u1e9ca", v3479);
var v3172 = new sc_Pair("\u1e9cequal", v3356);
var v2939 = new sc_Pair(v3172, null);
var v2665 = new sc_Pair("\u1e9cnot", v2939);
var v3554 = new sc_Pair("\u1e9czero", null);
var v3480 = new sc_Pair(v3554, null);
var v3357 = new sc_Pair("\u1e9cb", v3480);
var v3173 = new sc_Pair("\u1e9cequal", v3357);
var v2940 = new sc_Pair(v3173, null);
var v2666 = new sc_Pair("\u1e9cnot", v2940);
var v2941 = new sc_Pair("\u1e9ca", null);
var v2667 = new sc_Pair("\u1e9cnumberp", v2941);
var v2942 = new sc_Pair("\u1e9cb", null);
var v2668 = new sc_Pair("\u1e9cnumberp", v2942);
var v3358 = new sc_Pair("\u1e9ca", null);
var v3174 = new sc_Pair("\u1e9csub1", v3358);
var v3359 = new sc_Pair("\u1e9czero", null);
var v3175 = new sc_Pair(v3359, null);
var v2943 = new sc_Pair(v3174, v3175);
var v2669 = new sc_Pair("\u1e9cequal", v2943);
var v3360 = new sc_Pair("\u1e9cb", null);
var v3176 = new sc_Pair("\u1e9csub1", v3360);
var v3361 = new sc_Pair("\u1e9czero", null);
var v3177 = new sc_Pair(v3361, null);
var v2944 = new sc_Pair(v3176, v3177);
var v2670 = new sc_Pair("\u1e9cequal", v2944);
var v2350 = sc_list("\u1e9cand", v2665, v2666, v2667, v2668, v2669, v2670);
var v2042 = new sc_Pair(v2350, null);
var v1672 = new sc_Pair(v2041, v2042);
var v1070 = new sc_Pair("\u1e9cequal", v1672);
var v3481 = new sc_Pair("\u1e9cl", null);
var v3362 = new sc_Pair("\u1e9cx", v3481);
var v3178 = new sc_Pair("\u1e9cdelete", v3362);
var v2945 = new sc_Pair(v3178, null);
var v2671 = new sc_Pair("\u1e9clength", v2945);
var v3179 = new sc_Pair("\u1e9cl", null);
var v2946 = new sc_Pair("\u1e9clength", v3179);
var v2672 = new sc_Pair(v2946, null);
var v2351 = new sc_Pair(v2671, v2672);
var v2043 = new sc_Pair("\u1e9clessp", v2351);
var v2947 = new sc_Pair("\u1e9cl", null);
var v2673 = new sc_Pair("\u1e9cx", v2947);
var v2352 = new sc_Pair("\u1e9cmember", v2673);
var v2044 = new sc_Pair(v2352, null);
var v1673 = new sc_Pair(v2043, v2044);
var v1071 = new sc_Pair("\u1e9cequal", v1673);
var v3180 = new sc_Pair("\u1e9cl", null);
var v2948 = new sc_Pair("\u1e9cx", v3180);
var v2674 = new sc_Pair("\u1e9cdelete", v2948);
var v2353 = new sc_Pair(v2674, null);
var v2045 = new sc_Pair("\u1e9csort2", v2353);
var v3363 = new sc_Pair("\u1e9cl", null);
var v3181 = new sc_Pair("\u1e9csort2", v3363);
var v2949 = new sc_Pair(v3181, null);
var v2675 = new sc_Pair("\u1e9cx", v2949);
var v2354 = new sc_Pair("\u1e9cdelete", v2675);
var v2046 = new sc_Pair(v2354, null);
var v1674 = new sc_Pair(v2045, v2046);
var v1072 = new sc_Pair("\u1e9cequal", v1674);
var v2355 = new sc_Pair("\u1e9cx", null);
var v2047 = new sc_Pair("\u1e9cdsort", v2355);
var v2676 = new sc_Pair("\u1e9cx", null);
var v2356 = new sc_Pair("\u1e9csort2", v2676);
var v2048 = new sc_Pair(v2356, null);
var v1675 = new sc_Pair(v2047, v2048);
var v1073 = new sc_Pair("\u1e9cequal", v1675);
var v3684 = new sc_Pair("\u1e9cx7", null);
var v3683 = new sc_Pair("\u1e9cx6", v3684);
var v3682 = new sc_Pair("\u1e9ccons", v3683);
var v3681 = new sc_Pair(v3682, null);
var v3680 = new sc_Pair("\u1e9cx5", v3681);
var v3679 = new sc_Pair("\u1e9ccons", v3680);
var v3676 = new sc_Pair(v3679, null);
var v3671 = new sc_Pair("\u1e9cx4", v3676);
var v3666 = new sc_Pair("\u1e9ccons", v3671);
var v3657 = new sc_Pair(v3666, null);
var v3642 = new sc_Pair("\u1e9cx3", v3657);
var v3609 = new sc_Pair("\u1e9ccons", v3642);
var v3555 = new sc_Pair(v3609, null);
var v3482 = new sc_Pair("\u1e9cx2", v3555);
var v3364 = new sc_Pair("\u1e9ccons", v3482);
var v3182 = new sc_Pair(v3364, null);
var v2950 = new sc_Pair("\u1e9cx1", v3182);
var v2677 = new sc_Pair("\u1e9ccons", v2950);
var v2357 = new sc_Pair(v2677, null);
var v2049 = new sc_Pair("\u1e9clength", v2357);
var v3365 = new sc_Pair("\u1e9cx7", null);
var v3183 = new sc_Pair("\u1e9clength", v3365);
var v2951 = new sc_Pair(v3183, null);
var v2678 = new sc_Pair(6, v2951);
var v2358 = new sc_Pair("\u1e9cplus", v2678);
var v2050 = new sc_Pair(v2358, null);
var v1676 = new sc_Pair(v2049, v2050);
var v1074 = new sc_Pair("\u1e9cequal", v1676);
var v3366 = new sc_Pair("\u1e9cx", null);
var v3184 = new sc_Pair("\u1e9cadd1", v3366);
var v2952 = new sc_Pair(v3184, null);
var v2679 = new sc_Pair("\u1e9cadd1", v2952);
var v2680 = new sc_Pair(2, null);
var v2359 = new sc_Pair(v2679, v2680);
var v2051 = new sc_Pair("\u1e9cdifference", v2359);
var v2681 = new sc_Pair("\u1e9cx", null);
var v2360 = new sc_Pair("\u1e9cfix", v2681);
var v2052 = new sc_Pair(v2360, null);
var v1677 = new sc_Pair(v2051, v2052);
var v1075 = new sc_Pair("\u1e9cequal", v1677);
var v3556 = new sc_Pair("\u1e9cy", null);
var v3483 = new sc_Pair("\u1e9cx", v3556);
var v3367 = new sc_Pair("\u1e9cplus", v3483);
var v3185 = new sc_Pair(v3367, null);
var v2953 = new sc_Pair("\u1e9cx", v3185);
var v2682 = new sc_Pair("\u1e9cplus", v2953);
var v2683 = new sc_Pair(2, null);
var v2361 = new sc_Pair(v2682, v2683);
var v2053 = new sc_Pair("\u1e9cquotient", v2361);
var v3484 = new sc_Pair(2, null);
var v3368 = new sc_Pair("\u1e9cy", v3484);
var v3186 = new sc_Pair("\u1e9cquotient", v3368);
var v2954 = new sc_Pair(v3186, null);
var v2684 = new sc_Pair("\u1e9cx", v2954);
var v2362 = new sc_Pair("\u1e9cplus", v2684);
var v2054 = new sc_Pair(v2362, null);
var v1678 = new sc_Pair(v2053, v2054);
var v1076 = new sc_Pair("\u1e9cequal", v1678);
var v2685 = new sc_Pair("\u1e9czero", null);
var v2686 = new sc_Pair("\u1e9ci", null);
var v2363 = new sc_Pair(v2685, v2686);
var v2055 = new sc_Pair("\u1e9csigma", v2363);
var v3557 = new sc_Pair("\u1e9ci", null);
var v3485 = new sc_Pair("\u1e9cadd1", v3557);
var v3369 = new sc_Pair(v3485, null);
var v3187 = new sc_Pair("\u1e9ci", v3369);
var v2955 = new sc_Pair("\u1e9ctimes", v3187);
var v2956 = new sc_Pair(2, null);
var v2687 = new sc_Pair(v2955, v2956);
var v2364 = new sc_Pair("\u1e9cquotient", v2687);
var v2056 = new sc_Pair(v2364, null);
var v1679 = new sc_Pair(v2055, v2056);
var v1077 = new sc_Pair("\u1e9cequal", v1679);
var v3188 = new sc_Pair("\u1e9cy", null);
var v2957 = new sc_Pair("\u1e9cadd1", v3188);
var v2688 = new sc_Pair(v2957, null);
var v2365 = new sc_Pair("\u1e9cx", v2688);
var v2057 = new sc_Pair("\u1e9cplus", v2365);
var v3189 = new sc_Pair("\u1e9cy", null);
var v2958 = new sc_Pair("\u1e9cnumberp", v3189);
var v3610 = new sc_Pair("\u1e9cy", null);
var v3558 = new sc_Pair("\u1e9cx", v3610);
var v3486 = new sc_Pair("\u1e9cplus", v3558);
var v3370 = new sc_Pair(v3486, null);
var v3190 = new sc_Pair("\u1e9cadd1", v3370);
var v3487 = new sc_Pair("\u1e9cx", null);
var v3371 = new sc_Pair("\u1e9cadd1", v3487);
var v3191 = new sc_Pair(v3371, null);
var v2959 = new sc_Pair(v3190, v3191);
var v2689 = new sc_Pair(v2958, v2959);
var v2366 = new sc_Pair("\u1e9cif", v2689);
var v2058 = new sc_Pair(v2366, null);
var v1680 = new sc_Pair(v2057, v2058);
var v1078 = new sc_Pair("\u1e9cequal", v1680);
var v3192 = new sc_Pair("\u1e9cy", null);
var v2960 = new sc_Pair("\u1e9cx", v3192);
var v2690 = new sc_Pair("\u1e9cdifference", v2960);
var v3372 = new sc_Pair("\u1e9cy", null);
var v3193 = new sc_Pair("\u1e9cz", v3372);
var v2961 = new sc_Pair("\u1e9cdifference", v3193);
var v2691 = new sc_Pair(v2961, null);
var v2367 = new sc_Pair(v2690, v2691);
var v2059 = new sc_Pair("\u1e9cequal", v2367);
var v3373 = new sc_Pair("\u1e9cy", null);
var v3194 = new sc_Pair("\u1e9cx", v3373);
var v2962 = new sc_Pair("\u1e9clessp", v3194);
var v3611 = new sc_Pair("\u1e9cz", null);
var v3559 = new sc_Pair("\u1e9cy", v3611);
var v3488 = new sc_Pair("\u1e9clessp", v3559);
var v3374 = new sc_Pair(v3488, null);
var v3195 = new sc_Pair("\u1e9cnot", v3374);
var v3643 = new sc_Pair("\u1e9cy", null);
var v3612 = new sc_Pair("\u1e9cz", v3643);
var v3560 = new sc_Pair("\u1e9clessp", v3612);
var v3672 = new sc_Pair("\u1e9cx", null);
var v3667 = new sc_Pair("\u1e9cy", v3672);
var v3658 = new sc_Pair("\u1e9clessp", v3667);
var v3644 = new sc_Pair(v3658, null);
var v3613 = new sc_Pair("\u1e9cnot", v3644);
var v3673 = new sc_Pair("\u1e9cx", null);
var v3668 = new sc_Pair("\u1e9cfix", v3673);
var v3677 = new sc_Pair("\u1e9cz", null);
var v3674 = new sc_Pair("\u1e9cfix", v3677);
var v3669 = new sc_Pair(v3674, null);
var v3659 = new sc_Pair(v3668, v3669);
var v3645 = new sc_Pair("\u1e9cequal", v3659);
var v3614 = new sc_Pair(v3645, null);
var v3561 = new sc_Pair(v3613, v3614);
var v3489 = new sc_Pair(v3560, v3561);
var v3375 = new sc_Pair("\u1e9cif", v3489);
var v3196 = new sc_Pair(v3375, null);
var v2963 = new sc_Pair(v3195, v3196);
var v2692 = new sc_Pair(v2962, v2963);
var v2368 = new sc_Pair("\u1e9cif", v2692);
var v2060 = new sc_Pair(v2368, null);
var v1681 = new sc_Pair(v2059, v2060);
var v1079 = new sc_Pair("\u1e9cequal", v1681);
var v3490 = new sc_Pair("\u1e9cy", null);
var v3376 = new sc_Pair("\u1e9cx", v3490);
var v3197 = new sc_Pair("\u1e9cdelete", v3376);
var v2964 = new sc_Pair(v3197, null);
var v2693 = new sc_Pair("\u1e9cplus-tree", v2964);
var v2694 = new sc_Pair("\u1e9ca", null);
var v2369 = new sc_Pair(v2693, v2694);
var v2061 = new sc_Pair("\u1e9cmeaning", v2369);
var v3377 = new sc_Pair("\u1e9cy", null);
var v3198 = new sc_Pair("\u1e9cx", v3377);
var v2965 = new sc_Pair("\u1e9cmember", v3198);
var v3646 = new sc_Pair("\u1e9cy", null);
var v3615 = new sc_Pair("\u1e9cplus-tree", v3646);
var v3616 = new sc_Pair("\u1e9ca", null);
var v3562 = new sc_Pair(v3615, v3616);
var v3491 = new sc_Pair("\u1e9cmeaning", v3562);
var v3647 = new sc_Pair("\u1e9ca", null);
var v3617 = new sc_Pair("\u1e9cx", v3647);
var v3563 = new sc_Pair("\u1e9cmeaning", v3617);
var v3492 = new sc_Pair(v3563, null);
var v3378 = new sc_Pair(v3491, v3492);
var v3199 = new sc_Pair("\u1e9cdifference", v3378);
var v3618 = new sc_Pair("\u1e9cy", null);
var v3564 = new sc_Pair("\u1e9cplus-tree", v3618);
var v3565 = new sc_Pair("\u1e9ca", null);
var v3493 = new sc_Pair(v3564, v3565);
var v3379 = new sc_Pair("\u1e9cmeaning", v3493);
var v3200 = new sc_Pair(v3379, null);
var v2966 = new sc_Pair(v3199, v3200);
var v2695 = new sc_Pair(v2965, v2966);
var v2370 = new sc_Pair("\u1e9cif", v2695);
var v2062 = new sc_Pair(v2370, null);
var v1682 = new sc_Pair(v2061, v2062);
var v1080 = new sc_Pair("\u1e9cequal", v1682);
var v3201 = new sc_Pair("\u1e9cy", null);
var v2967 = new sc_Pair("\u1e9cadd1", v3201);
var v2696 = new sc_Pair(v2967, null);
var v2371 = new sc_Pair("\u1e9cx", v2696);
var v2063 = new sc_Pair("\u1e9ctimes", v2371);
var v3202 = new sc_Pair("\u1e9cy", null);
var v2968 = new sc_Pair("\u1e9cnumberp", v3202);
var v3648 = new sc_Pair("\u1e9cy", null);
var v3619 = new sc_Pair("\u1e9cx", v3648);
var v3566 = new sc_Pair("\u1e9ctimes", v3619);
var v3494 = new sc_Pair(v3566, null);
var v3380 = new sc_Pair("\u1e9cx", v3494);
var v3203 = new sc_Pair("\u1e9cplus", v3380);
var v3495 = new sc_Pair("\u1e9cx", null);
var v3381 = new sc_Pair("\u1e9cfix", v3495);
var v3204 = new sc_Pair(v3381, null);
var v2969 = new sc_Pair(v3203, v3204);
var v2697 = new sc_Pair(v2968, v2969);
var v2372 = new sc_Pair("\u1e9cif", v2697);
var v2064 = new sc_Pair(v2372, null);
var v1683 = new sc_Pair(v2063, v2064);
var v1081 = new sc_Pair("\u1e9cequal", v1683);
var v2698 = new sc_Pair("\u1e9cnil", null);
var v2699 = new sc_Pair("\u1e9ci", null);
var v2373 = new sc_Pair(v2698, v2699);
var v2065 = new sc_Pair("\u1e9cnth", v2373);
var v3205 = new sc_Pair("\u1e9ci", null);
var v2970 = new sc_Pair("\u1e9czerop", v3205);
var v3206 = new sc_Pair("\u1e9cnil", null);
var v3382 = new sc_Pair("\u1e9czero", null);
var v3207 = new sc_Pair(v3382, null);
var v2971 = new sc_Pair(v3206, v3207);
var v2700 = new sc_Pair(v2970, v2971);
var v2374 = new sc_Pair("\u1e9cif", v2700);
var v2066 = new sc_Pair(v2374, null);
var v1684 = new sc_Pair(v2065, v2066);
var v1082 = new sc_Pair("\u1e9cequal", v1684);
var v3208 = new sc_Pair("\u1e9cb", null);
var v2972 = new sc_Pair("\u1e9ca", v3208);
var v2701 = new sc_Pair("\u1e9cappend", v2972);
var v2375 = new sc_Pair(v2701, null);
var v2067 = new sc_Pair("\u1e9clast", v2375);
var v3209 = new sc_Pair("\u1e9cb", null);
var v2973 = new sc_Pair("\u1e9clistp", v3209);
var v3383 = new sc_Pair("\u1e9cb", null);
var v3210 = new sc_Pair("\u1e9clast", v3383);
var v3620 = new sc_Pair("\u1e9ca", null);
var v3567 = new sc_Pair("\u1e9clistp", v3620);
var v3678 = new sc_Pair("\u1e9ca", null);
var v3675 = new sc_Pair("\u1e9clast", v3678);
var v3670 = new sc_Pair(v3675, null);
var v3660 = new sc_Pair("\u1e9ccar", v3670);
var v3661 = new sc_Pair("\u1e9cb", null);
var v3649 = new sc_Pair(v3660, v3661);
var v3621 = new sc_Pair("\u1e9ccons", v3649);
var v3622 = new sc_Pair("\u1e9cb", null);
var v3568 = new sc_Pair(v3621, v3622);
var v3496 = new sc_Pair(v3567, v3568);
var v3384 = new sc_Pair("\u1e9cif", v3496);
var v3211 = new sc_Pair(v3384, null);
var v2974 = new sc_Pair(v3210, v3211);
var v2702 = new sc_Pair(v2973, v2974);
var v2376 = new sc_Pair("\u1e9cif", v2702);
var v2068 = new sc_Pair(v2376, null);
var v1685 = new sc_Pair(v2067, v2068);
var v1083 = new sc_Pair("\u1e9cequal", v1685);
var v3212 = new sc_Pair("\u1e9cy", null);
var v2975 = new sc_Pair("\u1e9cx", v3212);
var v2703 = new sc_Pair("\u1e9clessp", v2975);
var v2704 = new sc_Pair("\u1e9cz", null);
var v2377 = new sc_Pair(v2703, v2704);
var v2069 = new sc_Pair("\u1e9cequal", v2377);
var v3385 = new sc_Pair("\u1e9cy", null);
var v3213 = new sc_Pair("\u1e9cx", v3385);
var v2976 = new sc_Pair("\u1e9clessp", v3213);
var v3497 = new sc_Pair("\u1e9ct", null);
var v3498 = new sc_Pair("\u1e9cz", null);
var v3386 = new sc_Pair(v3497, v3498);
var v3214 = new sc_Pair("\u1e9cequal", v3386);
var v3569 = new sc_Pair("\u1e9cf", null);
var v3570 = new sc_Pair("\u1e9cz", null);
var v3499 = new sc_Pair(v3569, v3570);
var v3387 = new sc_Pair("\u1e9cequal", v3499);
var v3215 = new sc_Pair(v3387, null);
var v2977 = new sc_Pair(v3214, v3215);
var v2705 = new sc_Pair(v2976, v2977);
var v2378 = new sc_Pair("\u1e9cif", v2705);
var v2070 = new sc_Pair(v2378, null);
var v1686 = new sc_Pair(v2069, v2070);
var v1084 = new sc_Pair("\u1e9cequal", v1686);
var v3388 = new sc_Pair("\u1e9cb", null);
var v3216 = new sc_Pair("\u1e9ca", v3388);
var v2978 = new sc_Pair("\u1e9cappend", v3216);
var v2706 = new sc_Pair(v2978, null);
var v2379 = new sc_Pair("\u1e9cx", v2706);
var v2071 = new sc_Pair("\u1e9cassignment", v2379);
var v3389 = new sc_Pair("\u1e9ca", null);
var v3217 = new sc_Pair("\u1e9cx", v3389);
var v2979 = new sc_Pair("\u1e9cassignedp", v3217);
var v3500 = new sc_Pair("\u1e9ca", null);
var v3390 = new sc_Pair("\u1e9cx", v3500);
var v3218 = new sc_Pair("\u1e9cassignment", v3390);
var v3571 = new sc_Pair("\u1e9cb", null);
var v3501 = new sc_Pair("\u1e9cx", v3571);
var v3391 = new sc_Pair("\u1e9cassignment", v3501);
var v3219 = new sc_Pair(v3391, null);
var v2980 = new sc_Pair(v3218, v3219);
var v2707 = new sc_Pair(v2979, v2980);
var v2380 = new sc_Pair("\u1e9cif", v2707);
var v2072 = new sc_Pair(v2380, null);
var v1687 = new sc_Pair(v2071, v2072);
var v1085 = new sc_Pair("\u1e9cequal", v1687);
var v2981 = new sc_Pair("\u1e9cx", null);
var v2708 = new sc_Pair("\u1e9cgopher", v2981);
var v2381 = new sc_Pair(v2708, null);
var v2073 = new sc_Pair("\u1e9ccar", v2381);
var v3220 = new sc_Pair("\u1e9cx", null);
var v2982 = new sc_Pair("\u1e9clistp", v3220);
var v3572 = new sc_Pair("\u1e9cx", null);
var v3502 = new sc_Pair("\u1e9cflatten", v3572);
var v3392 = new sc_Pair(v3502, null);
var v3221 = new sc_Pair("\u1e9ccar", v3392);
var v3393 = new sc_Pair("\u1e9czero", null);
var v3222 = new sc_Pair(v3393, null);
var v2983 = new sc_Pair(v3221, v3222);
var v2709 = new sc_Pair(v2982, v2983);
var v2382 = new sc_Pair("\u1e9cif", v2709);
var v2074 = new sc_Pair(v2382, null);
var v1688 = new sc_Pair(v2073, v2074);
var v1086 = new sc_Pair("\u1e9cequal", v1688);
var v3394 = new sc_Pair("\u1e9cx", null);
var v3223 = new sc_Pair("\u1e9cgopher", v3394);
var v2984 = new sc_Pair(v3223, null);
var v2710 = new sc_Pair("\u1e9ccdr", v2984);
var v2383 = new sc_Pair(v2710, null);
var v2075 = new sc_Pair("\u1e9cflatten", v2383);
var v3224 = new sc_Pair("\u1e9cx", null);
var v2985 = new sc_Pair("\u1e9clistp", v3224);
var v3573 = new sc_Pair("\u1e9cx", null);
var v3503 = new sc_Pair("\u1e9cflatten", v3573);
var v3395 = new sc_Pair(v3503, null);
var v3225 = new sc_Pair("\u1e9ccdr", v3395);
var v3574 = new sc_Pair("\u1e9czero", null);
var v3623 = new sc_Pair("\u1e9cnil", null);
var v3575 = new sc_Pair(v3623, null);
var v3504 = new sc_Pair(v3574, v3575);
var v3396 = new sc_Pair("\u1e9ccons", v3504);
var v3226 = new sc_Pair(v3396, null);
var v2986 = new sc_Pair(v3225, v3226);
var v2711 = new sc_Pair(v2985, v2986);
var v2384 = new sc_Pair("\u1e9cif", v2711);
var v2076 = new sc_Pair(v2384, null);
var v1689 = new sc_Pair(v2075, v2076);
var v1087 = new sc_Pair("\u1e9cequal", v1689);
var v3227 = new sc_Pair("\u1e9cx", null);
var v2987 = new sc_Pair("\u1e9cy", v3227);
var v2712 = new sc_Pair("\u1e9ctimes", v2987);
var v2713 = new sc_Pair("\u1e9cy", null);
var v2385 = new sc_Pair(v2712, v2713);
var v2077 = new sc_Pair("\u1e9cquotient", v2385);
var v3228 = new sc_Pair("\u1e9cy", null);
var v2988 = new sc_Pair("\u1e9czerop", v3228);
var v3229 = new sc_Pair("\u1e9czero", null);
var v3505 = new sc_Pair("\u1e9cx", null);
var v3397 = new sc_Pair("\u1e9cfix", v3505);
var v3230 = new sc_Pair(v3397, null);
var v2989 = new sc_Pair(v3229, v3230);
var v2714 = new sc_Pair(v2988, v2989);
var v2386 = new sc_Pair("\u1e9cif", v2714);
var v2078 = new sc_Pair(v2386, null);
var v1690 = new sc_Pair(v2077, v2078);
var v1088 = new sc_Pair("\u1e9cequal", v1690);
var v3506 = new sc_Pair("\u1e9cmem", null);
var v3398 = new sc_Pair("\u1e9cval", v3506);
var v3231 = new sc_Pair("\u1e9ci", v3398);
var v2990 = new sc_Pair("\u1e9cset", v3231);
var v2715 = new sc_Pair(v2990, null);
var v2387 = new sc_Pair("\u1e9cj", v2715);
var v2079 = new sc_Pair("\u1e9cget", v2387);
var v3399 = new sc_Pair("\u1e9ci", null);
var v3232 = new sc_Pair("\u1e9cj", v3399);
var v2991 = new sc_Pair("\u1e9ceqp", v3232);
var v3576 = new sc_Pair("\u1e9cmem", null);
var v3507 = new sc_Pair("\u1e9cj", v3576);
var v3400 = new sc_Pair("\u1e9cget", v3507);
var v3233 = new sc_Pair(v3400, null);
var v2992 = new sc_Pair("\u1e9cval", v3233);
var v2716 = new sc_Pair(v2991, v2992);
var v2388 = new sc_Pair("\u1e9cif", v2716);
var v2080 = new sc_Pair(v2388, null);
var v1691 = new sc_Pair(v2079, v2080);
var v1089 = new sc_Pair("\u1e9cequal", v1691);
sc_const_3_nboyer = sc_list(v984, v985, v986, v987, v988, v989, v990, v991, v992, v993, v994, v995, v996, v997, v998, v999, v1000, v1001, v1002, v1003, v1004, v1005, v1006, v1007, v1008, v1009, v1010, v1011, v1012, v1013, v1014, v1015, v1016, v1017, v1018, v1019, v1020, v1021, v1022, v1023, v1024, v1025, v1026, v1027, v1028, v1029, v1030, v1031, v1032, v1033, v1034, v1035, v1036, v1037, v1038, v1039, v1040, v1041, v1042, v1043, v1044, v1045, v1046, v1047, v1048, v1049, v1050, v1051, v1052, v1053, 
v1054, v1055, v1056, v1057, v1058, v1059, v1060, v1061, v1062, v1063, v1064, v1065, v1066, v1067, v1068, v1069, v1070, v1071, v1072, v1073, v1074, v1075, v1076, v1077, v1078, v1079, v1080, v1081, v1082, v1083, v1084, v1085, v1086, v1087, v1088, v1089);
var v3401 = new sc_Pair("\u1e9cb", null);
var v3234 = new sc_Pair("\u1e9ca", v3401);
var v2993 = new sc_Pair("\u1e9cplus", v3234);
var v3577 = new sc_Pair("\u1e9czero", null);
var v3508 = new sc_Pair(v3577, null);
var v3402 = new sc_Pair("\u1e9cc", v3508);
var v3235 = new sc_Pair("\u1e9cplus", v3402);
var v2994 = new sc_Pair(v3235, null);
var v2717 = new sc_Pair(v2993, v2994);
var v2389 = new sc_Pair("\u1e9cplus", v2717);
var v2081 = new sc_Pair(v2389, null);
var v1692 = new sc_Pair("\u1e9cf", v2081);
var v1090 = new sc_Pair("\u1e9cx", v1692);
var v3509 = new sc_Pair("\u1e9cb", null);
var v3403 = new sc_Pair("\u1e9ca", v3509);
var v3236 = new sc_Pair("\u1e9ctimes", v3403);
var v3578 = new sc_Pair("\u1e9cd", null);
var v3510 = new sc_Pair("\u1e9cc", v3578);
var v3404 = new sc_Pair("\u1e9cplus", v3510);
var v3237 = new sc_Pair(v3404, null);
var v2995 = new sc_Pair(v3236, v3237);
var v2718 = new sc_Pair("\u1e9ctimes", v2995);
var v2390 = new sc_Pair(v2718, null);
var v2082 = new sc_Pair("\u1e9cf", v2390);
var v1693 = new sc_Pair("\u1e9cy", v2082);
var v3650 = new sc_Pair("\u1e9cb", null);
var v3624 = new sc_Pair("\u1e9ca", v3650);
var v3579 = new sc_Pair("\u1e9cappend", v3624);
var v3625 = new sc_Pair("\u1e9cnil", null);
var v3580 = new sc_Pair(v3625, null);
var v3511 = new sc_Pair(v3579, v3580);
var v3405 = new sc_Pair("\u1e9cappend", v3511);
var v3238 = new sc_Pair(v3405, null);
var v2996 = new sc_Pair("\u1e9creverse", v3238);
var v2719 = new sc_Pair(v2996, null);
var v2391 = new sc_Pair("\u1e9cf", v2719);
var v2083 = new sc_Pair("\u1e9cz", v2391);
var v3512 = new sc_Pair("\u1e9cb", null);
var v3406 = new sc_Pair("\u1e9ca", v3512);
var v3239 = new sc_Pair("\u1e9cplus", v3406);
var v3581 = new sc_Pair("\u1e9cy", null);
var v3513 = new sc_Pair("\u1e9cx", v3581);
var v3407 = new sc_Pair("\u1e9cdifference", v3513);
var v3240 = new sc_Pair(v3407, null);
var v2997 = new sc_Pair(v3239, v3240);
var v2720 = new sc_Pair("\u1e9cequal", v2997);
var v2392 = new sc_Pair("\u1e9cu", v2720);
var v3582 = new sc_Pair("\u1e9cb", null);
var v3514 = new sc_Pair("\u1e9ca", v3582);
var v3408 = new sc_Pair("\u1e9cremainder", v3514);
var v3662 = new sc_Pair("\u1e9cb", null);
var v3651 = new sc_Pair("\u1e9clength", v3662);
var v3626 = new sc_Pair(v3651, null);
var v3583 = new sc_Pair("\u1e9ca", v3626);
var v3515 = new sc_Pair("\u1e9cmember", v3583);
var v3409 = new sc_Pair(v3515, null);
var v3241 = new sc_Pair(v3408, v3409);
var v2998 = new sc_Pair("\u1e9clessp", v3241);
var v2721 = new sc_Pair("\u1e9cw", v2998);
var v2393 = new sc_Pair(v2721, null);
var v2084 = new sc_Pair(v2392, v2393);
var v1694 = new sc_Pair(v2083, v2084);
var v1091 = new sc_Pair(v1693, v1694);
const_nboyer = new sc_Pair(v1090, v1091);
BgL_nboyerzd2benchmarkzd2 = v61;
BgL_setupzd2boyerzd2 = v62;
BgL_testzd2boyerzd2 = v63;
translate_term_nboyer = v64;
translate_args_nboyer = v65;
untranslate_term_nboyer = v66;
BgL_sc_symbolzd2ze3symbolzd2record_1ze3_nboyer = v67;
BgL_sc_za2symbolzd2recordszd2alistza2_2z00_nboyer = null;
translate_alist_nboyer = v68;
apply_subst_nboyer = v69;
apply_subst_lst_nboyer = v70;
tautologyp_nboyer = v71;
if_constructor_nboyer = "\u1e9c*";
rewrite_count_nboyer = 0;
rewrite_nboyer = v72;
rewrite_args_nboyer = v73;
unify_subst_nboyer = "\u1e9c*";
one_way_unify1_nboyer = v74;
false_term_nboyer = "\u1e9c*";
true_term_nboyer = "\u1e9c*";
trans_of_implies1_nboyer = v75;
is_term_equal_nboyer = v76;
is_term_member_nboyer = v77;
BgL_setupzd2boyerzd2 = v78;
BgL_testzd2boyerzd2 = v79;
var BgL_parsezd2ze3nbzd2treesze3;
var BgL_earleyzd2benchmarkzd2;
var BgL_parsezd2ze3parsedzf3zc2;
var test;
var BgL_parsezd2ze3treesz31;
var BgL_makezd2parserzd2;
var const_earley;
var v2085 = new sc_Pair("\u1e9ca", null);
var v2722 = new sc_Pair("\u1e9cs", null);
var v2394 = new sc_Pair("\u1e9cs", v2722);
var v2086 = new sc_Pair(v2394, null);
var v1695 = new sc_Pair(v2085, v2086);
var v1092 = new sc_Pair("\u1e9cs", v1695);
const_earley = new sc_Pair(v1092, null);
BgL_makezd2parserzd2 = v109;
BgL_parsezd2ze3parsedzf3zc2 = v110;
BgL_parsezd2ze3treesz31 = v111;
BgL_parsezd2ze3nbzd2treesze3 = v112;
test = v114;
BgL_earleyzd2benchmarkzd2 = v117;
SC_DEFAULT_OUT = new sc_GenericOutputPort(v118);
SC_ERROR_OUT = SC_DEFAULT_OUT;
var BgL_runzd2benchmarkzd2 = RunBenchmark;
var completed = 0;
var benchmarks = BenchmarkSuite.CountBenchmarks();
var success = true;
var latencyBenchmarks = ["Splay", "Mandreel"];
var v1093;
var v2087 = typeof skipBenchmarks;
var v1696 = v2087 === "undefined";
if (v1696) {
  v1093 = [];
} else {
  v1093 = skipBenchmarks;
}
var skipBenchmarks = v1093

}
