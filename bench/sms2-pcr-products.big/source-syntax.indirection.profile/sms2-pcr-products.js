
JAM.startProfile('load');
function v4() {
  var v712 = document.forms;
  introspect(JAM.policy.p26) {
    var v580 = v712[0]
  }
  var v334 = v580.elements;
  introspect(JAM.policy.p26) {
    var v5 = v334[0]
  }
  v5.value = " ";
  var v713 = document.forms;
  introspect(JAM.policy.p26) {
    var v581 = v713[0]
  }
  var v335 = v581.elements;
  introspect(JAM.policy.p26) {
    var v6 = v335[1]
  }
  v6.value = " ";
  var v714 = document.forms;
  introspect(JAM.policy.p26) {
    var v582 = v714[0]
  }
  var v336 = v582.elements;
  introspect(JAM.policy.p26) {
    var v7 = v336[2]
  }
  v7.value = " ";
  var v715 = document.forms;
  introspect(JAM.policy.p26) {
    var v583 = v715[0]
  }
  var v337 = v583.elements;
  introspect(JAM.policy.p26) {
    var v8 = v337[3]
  }
  v8.value = " ";
  var v716 = document.forms;
  introspect(JAM.policy.p26) {
    var v584 = v716[0]
  }
  var v338 = v584.elements;
  introspect(JAM.policy.p26) {
    var v9 = v338[4]
  }
  v9.value = " ";
  return;
}
function v3() {
  try {
    JAM.call(pcrProducts, null, [document], JAM.policy.p38);
  } catch (e$$7) {
    var v10 = "The following error was encountered: " + e$$7;
    JAM.call(alert, null, [v10], JAM.policy.p38);
  }
  return;
}
function v2() {
  var v339 = document.main_form;
  var v11 = v339.main_submit;
  JAM.call(v11.focus, v11, [], JAM.policy.p39);
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p41);
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  introspect(JAM.policy.p26) {
    var v12 = arrayOfSequences[0]
  }
  var lengthOfAlign = v12.length;
  var v340 = arrayOfSequences.length;
  var v13 = v340 < 2;
  if (v13) {
    JAM.call(alert, null, ["Please enter an alignment consisting of at least two sequences."], JAM.policy.p22);
    return false;
  }
  var i$$1 = 0;
  var v341 = arrayOfTitles.length;
  var v15 = i$$1 < v341;
  for (;v15;) {
    introspect(JAM.policy.p26) {
      var v808 = arrayOfTitles[i$$1]
    }
    var v717 = JAM.call(v808.search, v808, [/\S/], JAM.policy.p38);
    var v585 = v717 == -1;
    var v719 = !v585;
    if (v719) {
      introspect(JAM.policy.p26) {
        var v809 = arrayOfSequences[i$$1]
      }
      var v718 = JAM.call(v809.search, v809, [/\S/], JAM.policy.p38);
      v585 = v718 == -1;
    }
    var v342 = v585;
    var v587 = !v342;
    if (v587) {
      introspect(JAM.policy.p26) {
        var v720 = arrayOfSequences[i$$1]
      }
      var v586 = v720.length;
      v342 = v586 != lengthOfAlign;
    }
    var v14 = v342;
    if (v14) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$1 = i$$1 + 1;
    var v343 = arrayOfTitles.length;
    v15 = i$$1 < v343;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v880 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p38);
  var v810 = v880 == -1;
  var v882 = !v810;
  if (v882) {
    var v881 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p38);
    v810 = v881 == -1;
  }
  var v721 = v810;
  var v812 = !v721;
  if (v812) {
    var v811 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p38);
    v721 = v811 == -1;
  }
  var v588 = v721;
  var v723 = !v588;
  if (v723) {
    var v722 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p38);
    v588 = v722 == -1;
  }
  var v344 = v588;
  var v590 = !v344;
  if (v590) {
    var v589 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p38);
    v344 = v589 == -1;
  }
  var v16 = v344;
  if (v16) {
    JAM.call(alert, null, ["The codon table has been entered incorrectly."], JAM.policy.p22);
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v591 = formElement.value;
  var v345 = JAM.call(v591.search, v591, [/\S/], JAM.policy.p38);
  var v17 = v345 == -1;
  if (v17) {
    JAM.call(alert, null, ["Please enter some text."], JAM.policy.p22);
    return false;
  }
  return true;
}
function checkGeneticCode(arrayOfPatterns) {
  var z$$2 = 0;
  var codon = "";
  var oneMatch = false;
  var testSequence = "gggggaggtggcgaggaagatgacgtggtagttgtcgcggcagctgccaggagaagtagcaagaaaaataacatgataattatcacgacaactacctggtgatgttgctagtaatattacttgttatttttctcgtcatcttcccggcgacgtcgccagcaacatcacctgctacttctcccgccacctccc";
  var v346 = arrayOfPatterns.length;
  var v20 = z$$2 < v346;
  for (;v20;) {
    introspect(JAM.policy.p26) {
      var v592 = arrayOfPatterns[z$$2]
    }
    var v347 = JAM.call(v592.search, v592, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p38);
    var v18 = v347 == -1;
    if (v18) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v593 = arrayOfPatterns[z$$2]
    }
    var v348 = JAM.call(moreExpressionCheck, null, [v593], JAM.policy.p38);
    var v19 = v348 == false;
    if (v19) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$2 = z$$2 + 1;
    var v349 = arrayOfPatterns.length;
    v20 = z$$2 < v349;
  }
  var v21 = arrayOfPatterns.length;
  var geneticCodeMatchResult = JAM.new(Array, [v21], JAM.policy.p38);
  var v22 = arrayOfPatterns.length;
  var geneticCodeMatchExp = JAM.new(Array, [v22], JAM.policy.p38);
  var j = 0;
  var v350 = arrayOfPatterns.length;
  var v29 = j < v350;
  for (;v29;) {
    var v23 = geneticCodeMatchExp;
    var v24 = j;
    introspect(JAM.policy.p26) {
      var v724 = arrayOfPatterns[j]
    }
    var v594 = JAM.call(v724.match, v724, [/\/.+\//], JAM.policy.p38);
    var v351 = v594 + "gi";
    if (JAM.isEval(eval)) {
      var v1047 = eval("introspect(JAM.policy.pFull) { " + v351 + " }")
    } else {
      var v1047 = JAM.call(eval, null, [v351])
    }
    introspect(JAM.policy.p27) {
      v23[v24] = v1047;
    }
    var v25 = geneticCodeMatchResult;
    var v26 = j;
    introspect(JAM.policy.p26) {
      var v595 = arrayOfPatterns[j]
    }
    var v352 = JAM.call(v595.match, v595, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v1048 = JAM.call(v352.toString, v352, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v25[v26] = v1048;
    }
    var v27 = geneticCodeMatchResult;
    var v28 = j;
    introspect(JAM.policy.p26) {
      var v353 = geneticCodeMatchResult[j]
    }
    var v1049 = JAM.call(v353.replace, v353, [/=/g, ""], JAM.policy.p40);
    introspect(JAM.policy.p27) {
      v27[v28] = v1049;
    }
    j = j + 1;
    var v354 = arrayOfPatterns.length;
    v29 = j < v354;
  }
  var i$$2 = 0;
  var v596 = testSequence.length;
  var v355 = v596 - 3;
  var v36 = i$$2 <= v355;
  for (;v36;) {
    var v30 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v30], JAM.policy.p41);
    j = 0;
    var v356 = geneticCodeMatchExp.length;
    var v34 = j < v356;
    for (;v34;) {
      introspect(JAM.policy.p26) {
        var v597 = geneticCodeMatchExp[j]
      }
      var v357 = JAM.call(codon.search, codon, [v597], JAM.policy.p38);
      var v33 = v357 != -1;
      if (v33) {
        var v32 = oneMatch == true;
        if (v32) {
          var v358 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v31 = v358 + ".";
          JAM.call(alert, null, [v31], JAM.policy.p38);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      var v359 = geneticCodeMatchExp.length;
      v34 = j < v359;
    }
    var v35 = oneMatch == false;
    if (v35) {
      JAM.call(alert, null, ["The genetic code expressions are missing a codon."], JAM.policy.p22);
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v598 = testSequence.length;
    var v360 = v598 - 3;
    v36 = i$$2 <= v360;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v361 = arrayOfPatterns$$1.length;
  var v38 = z$$3 < v361;
  for (;v38;) {
    introspect(JAM.policy.p26) {
      var v599 = arrayOfPatterns$$1[z$$3]
    }
    var v362 = JAM.call(v599.search, v599, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p38);
    var v37 = v362 != -1;
    if (v37) {
      JAM.call(alert, null, ["One or more groups have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$3 = z$$3 + 1;
    var v363 = arrayOfPatterns$$1.length;
    v38 = z$$3 < v363;
  }
  var i$$3 = 0;
  var v364 = arrayOfPatterns$$1.length;
  var v42 = i$$3 < v364;
  for (;v42;) {
    introspect(JAM.policy.p26) {
      var v600 = arrayOfPatterns$$1[i$$3]
    }
    var v365 = "[" + v600;
    var v39 = v365 + "]";
    var re = JAM.new(RegExp, [v39, "gi"], JAM.policy.p40);
    var j$$1 = i$$3 + 1;
    var v366 = arrayOfPatterns$$1.length;
    var v41 = j$$1 < v366;
    for (;v41;) {
      introspect(JAM.policy.p26) {
        var v601 = arrayOfPatterns$$1[j$$1]
      }
      var v367 = JAM.call(v601.search, v601, [re], JAM.policy.p38);
      var v40 = v367 != -1;
      if (v40) {
        JAM.call(alert, null, ["The same amino acid is in more than one similarity group."], JAM.policy.p22);
        return false;
      }
      j$$1 = j$$1 + 1;
      var v368 = arrayOfPatterns$$1.length;
      v41 = j$$1 < v368;
    }
    i$$3 = i$$3 + 1;
    var v369 = arrayOfPatterns$$1.length;
    v42 = i$$3 < v369;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v370 = arrayOfPatterns$$2.length;
  var v45 = z$$4 < v370;
  for (;v45;) {
    introspect(JAM.policy.p26) {
      var v602 = arrayOfPatterns$$2[z$$4]
    }
    var v371 = JAM.call(v602.search, v602, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p38);
    var v43 = v371 == -1;
    if (v43) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v603 = arrayOfPatterns$$2[z$$4]
    }
    var v372 = JAM.call(moreExpressionCheck, null, [v603], JAM.policy.p38);
    var v44 = v372 == false;
    if (v44) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$4 = z$$4 + 1;
    var v373 = arrayOfPatterns$$2.length;
    v45 = z$$4 < v373;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v725 = JAM.call(getSequenceFromFasta, null, [text$$7], JAM.policy.p38);
  var v604 = JAM.call(v725.replace, v725, [/[^A-Za-z]/g, ""], JAM.policy.p40);
  var v374 = v604.length;
  var v47 = v374 > maxInput;
  if (v47) {
    var v375 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v46 = v375 + " characters.";
    JAM.call(alert, null, [v46], JAM.policy.p38);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v376 = text$$8.length;
  var v49 = v376 > maxInput$$1;
  if (v49) {
    var v377 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v48 = v377 + " characters.";
    JAM.call(alert, null, [v48], JAM.policy.p38);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p40);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p40);
  return dnaSequence;
}
function closeForm() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</form>"], JAM.policy.p22);
  return true;
}
function closePre() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</div>"], JAM.policy.p22);
  var v52 = outputWindow.document;
  JAM.call(v52.write, v52, ["</pre>\n"], JAM.policy.p22);
  return;
}
function closeTextArea() {
  var v53 = outputWindow.document;
  JAM.call(v53.write, v53, ["</textarea>"], JAM.policy.p22);
  return true;
}
function closeWindow() {
  var v54 = outputWindow.document;
  JAM.call(v54.write, v54, ["</body>\n</html>\n"], JAM.policy.p22);
  outputWindow.status = "Done.";
  var v55 = outputWindow.document;
  JAM.call(v55.close, v55, [], JAM.policy.p39);
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = JAM.call(sequence$$1.toLowerCase, sequence$$1, [], JAM.policy.p39);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p40);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p40);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p40);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p40);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p40);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p40);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p40);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p40);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p40);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p40);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p40);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p40);
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v378 = alignArray.length;
  var v56 = v378 < 3;
  if (v56) {
    JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
    return false;
  }
  var i$$4 = 1;
  var v379 = alignArray.length;
  var v58 = i$$4 < v379;
  for (;v58;) {
    introspect(JAM.policy.p26) {
      var v605 = alignArray[i$$4]
    }
    var v380 = JAM.call(v605.search, v605, [/[^\s]+\s/], JAM.policy.p38);
    var v57 = v380 == -1;
    if (v57) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$4 = i$$4 + 1;
    var v381 = alignArray.length;
    v58 = i$$4 < v381;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p40);
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p40);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p40);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p40);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p40);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = JAM.new(Array, [], JAM.policy.p39);
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v382 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38);
  var v61 = v382 != -1;
  if (v61) {
    var v60 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p38);
    for (;v60;) {
      introspect(JAM.policy.p26) {
        var v59 = matchArray[0]
      }
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v59], JAM.policy.p38);
      v60 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p38);
    }
  } else {
    introspect(JAM.policy.p27) {
      arrayOfFasta[0] = sequenceData;
    }
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v383 = sequence$$2.length;
  var v62 = "&gt;results for " + v383;
  var stringToReturn = v62 + " residue sequence ";
  var v384 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p38);
  var v64 = v384 != -1;
  if (v64) {
    var v385 = stringToReturn + '"';
    var v63 = v385 + fastaSequenceTitle;
    stringToReturn = v63 + '"';
  }
  var v386 = stringToReturn + ' starting "';
  var v387 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p24);
  var v65 = v386 + v387;
  stringToReturn = v65 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v388 = sequenceOne.length;
  var v66 = "Search results for " + v388;
  var stringToReturn$$1 = v66 + " residue sequence ";
  var v389 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p38);
  var v68 = v389 != -1;
  if (v68) {
    var v390 = stringToReturn$$1 + '"';
    var v67 = v390 + fastaSequenceTitleOne;
    stringToReturn$$1 = v67 + '"';
  }
  var v391 = stringToReturn$$1 + ' starting "';
  var v392 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p24);
  var v69 = v391 + v392;
  stringToReturn$$1 = v69 + '"\n';
  var v393 = stringToReturn$$1 + "and ";
  var v394 = sequenceTwo.length;
  var v70 = v393 + v394;
  stringToReturn$$1 = v70 + " residue sequence ";
  var v395 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p38);
  var v72 = v395 != -1;
  if (v72) {
    var v396 = stringToReturn$$1 + '"';
    var v71 = v396 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v71 + '"';
  }
  var v397 = stringToReturn$$1 + ' starting "';
  var v398 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p24);
  var v73 = v397 + v398;
  stringToReturn$$1 = v73 + '"';
  var v74 = '<div class="info">' + stringToReturn$$1;
  return v74 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v75 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = JAM.new(Array, [v75], JAM.policy.p38);
  var j$$2 = 0;
  var v399 = arrayOfPatterns$$3.length;
  var v78 = j$$2 < v399;
  for (;v78;) {
    var v76 = geneticCodeMatchExp$$1;
    var v77 = j$$2;
    introspect(JAM.policy.p26) {
      var v726 = arrayOfPatterns$$3[j$$2]
    }
    var v606 = JAM.call(v726.match, v726, [/\/.+\//], JAM.policy.p38);
    var v400 = v606 + "gi";
    if (JAM.isEval(eval)) {
      var v1050 = eval("introspect(JAM.policy.pFull) { " + v400 + " }")
    } else {
      var v1050 = JAM.call(eval, null, [v400])
    }
    introspect(JAM.policy.p27) {
      v76[v77] = v1050;
    }
    j$$2 = j$$2 + 1;
    var v401 = arrayOfPatterns$$3.length;
    v78 = j$$2 < v401;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v79 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = JAM.new(Array, [v79], JAM.policy.p38);
  var j$$3 = 0;
  var v402 = arrayOfPatterns$$4.length;
  var v84 = j$$3 < v402;
  for (;v84;) {
    var v80 = geneticCodeMatchResult$$1;
    var v81 = j$$3;
    introspect(JAM.policy.p26) {
      var v607 = arrayOfPatterns$$4[j$$3]
    }
    var v403 = JAM.call(v607.match, v607, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v1051 = JAM.call(v403.toString, v403, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v80[v81] = v1051;
    }
    var v82 = geneticCodeMatchResult$$1;
    var v83 = j$$3;
    introspect(JAM.policy.p26) {
      var v404 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1052 = JAM.call(v404.replace, v404, [/=/g, ""], JAM.policy.p40);
    introspect(JAM.policy.p27) {
      v82[v83] = v1052;
    }
    j$$3 = j$$3 + 1;
    var v405 = arrayOfPatterns$$4.length;
    v84 = j$$3 < v405;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v406 = sequence$$3.length;
  var v85 = "Results for " + v406;
  var stringToReturn$$2 = v85 + " residue sequence ";
  var v407 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p38);
  var v87 = v407 != -1;
  if (v87) {
    var v408 = stringToReturn$$2 + '"';
    var v86 = v408 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v86 + '"';
  }
  var v409 = stringToReturn$$2 + ' starting "';
  var v410 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p24);
  var v88 = v409 + v410;
  stringToReturn$$2 = v88 + '"';
  var v89 = '<div class="info">' + stringToReturn$$2;
  return v89 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v608 = "Results for " + topology;
  var v411 = v608 + " ";
  var v412 = sequence$$4.length;
  var v90 = v411 + v412;
  var stringToReturn$$3 = v90 + " residue sequence ";
  var v413 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p38);
  var v92 = v413 != -1;
  if (v92) {
    var v414 = stringToReturn$$3 + '"';
    var v91 = v414 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v91 + '"';
  }
  var v415 = stringToReturn$$3 + ' starting "';
  var v416 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p24);
  var v93 = v415 + v416;
  stringToReturn$$3 = v93 + '"';
  var v94 = '<div class="info">' + stringToReturn$$3;
  return v94 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v417 = sequenceOne$$1.length;
  var v95 = "Alignment results for " + v417;
  var stringToReturn$$4 = v95 + " residue sequence ";
  var v418 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p38);
  var v97 = v418 != -1;
  if (v97) {
    var v419 = stringToReturn$$4 + '"';
    var v96 = v419 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v96 + '"';
  }
  var v420 = stringToReturn$$4 + ' starting "';
  var v421 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p24);
  var v98 = v420 + v421;
  stringToReturn$$4 = v98 + '"\n';
  var v422 = stringToReturn$$4 + "and ";
  var v423 = sequenceTwo$$1.length;
  var v99 = v422 + v423;
  stringToReturn$$4 = v99 + " residue sequence ";
  var v424 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p38);
  var v101 = v424 != -1;
  if (v101) {
    var v425 = stringToReturn$$4 + '"';
    var v100 = v425 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v100 + '"';
  }
  var v426 = stringToReturn$$4 + ' starting "';
  var v427 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p24);
  var v102 = v426 + v427;
  stringToReturn$$4 = v102 + '"';
  var v103 = '<div class="info">' + stringToReturn$$4;
  return v103 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = JAM.new(Array, [], JAM.policy.p39);
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v105 = j$$4 < lengthOut;
  for (;v105;) {
    var v428 = JAM.call(Math.random, Math, [], JAM.policy.p39);
    var v429 = components.length;
    var v104 = v428 * v429;
    tempNum = JAM.call(Math.floor, Math, [v104], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      tempChar = components[tempNum];
    }
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p38);
    j$$4 = j$$4 + 1;
    v105 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p22);
}
function getSequenceFromFasta(sequenceRecord) {
  var v430 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38);
  var v106 = v430 != -1;
  if (v106) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p40);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v431 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38);
  var v108 = v431 != -1;
  if (v108) {
    var v107 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p40);
    fastaTitle = JAM.call(v107.toString, v107, [], JAM.policy.p39);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p40);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p40);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p40);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1019 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p38);
  var v1008 = v1019 != -1;
  var v1021 = !v1008;
  if (v1021) {
    var v1020 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p38);
    v1008 = v1020 != -1;
  }
  var v995 = v1008;
  var v1010 = !v995;
  if (v1010) {
    var v1009 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p38);
    v995 = v1009 != -1;
  }
  var v980 = v995;
  var v997 = !v980;
  if (v997) {
    var v996 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p38);
    v980 = v996 != -1;
  }
  var v962 = v980;
  var v982 = !v962;
  if (v982) {
    var v981 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p38);
    v962 = v981 != -1;
  }
  var v928 = v962;
  var v964 = !v928;
  if (v964) {
    var v963 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p38);
    v928 = v963 != -1;
  }
  var v883 = v928;
  var v930 = !v883;
  if (v930) {
    var v929 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p38);
    v883 = v929 != -1;
  }
  var v813 = v883;
  var v885 = !v813;
  if (v885) {
    var v884 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p38);
    v813 = v884 != -1;
  }
  var v727 = v813;
  var v815 = !v727;
  if (v815) {
    var v814 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p38);
    v727 = v814 != -1;
  }
  var v609 = v727;
  var v729 = !v609;
  if (v729) {
    var v728 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p38);
    v609 = v728 != -1;
  }
  var v432 = v609;
  var v611 = !v432;
  if (v611) {
    var v610 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p38);
    v432 = v610 != -1;
  }
  var v109 = v432;
  if (v109) {
    return false;
  }
  return true;
}
function openForm() {
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<form action="">\n'], JAM.policy.p22);
  return true;
}
function openPre() {
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ["<pre>"], JAM.policy.p22);
  var v112 = outputWindow.document;
  JAM.call(v112.write, v112, ['<div class="pre">'], JAM.policy.p22);
  return;
}
function openTextArea() {
  var v113 = outputWindow.document;
  JAM.call(v113.write, v113, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p22);
  return true;
}
function openWindow(title$$6) {
  JAM.call(_openWindow, null, [title$$6, true], JAM.policy.p40);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p23);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p39);
  var v114 = outputWindow.document;
  var v730 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v612 = v730 + "<head>\n";
  var v433 = v612 + "<title>Sequence Manipulation Suite</title>\n";
  var v115 = v433 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v114.write, v114, [v115], JAM.policy.p38);
  if (isColor) {
    var v116 = outputWindow.document;
    var v1038 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1033 = v1038 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1028 = v1033 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1022 = v1028 + "div.info {font-weight: bold}\n";
    var v1011 = v1022 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v998 = v1011 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v983 = v998 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v965 = v983 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v931 = v965 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v886 = v931 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v816 = v886 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v731 = v816 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v613 = v731 + "td.many {color: #000000}\n";
    var v434 = v613 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v117 = v434 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p38);
  } else {
    var v118 = outputWindow.document;
    var v1043 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1039 = v1043 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1034 = v1039 + "div.title {display: none}\n";
    var v1029 = v1034 + "div.info {font-weight: bold}\n";
    var v1023 = v1029 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1012 = v1023 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v999 = v1012 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v984 = v999 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v966 = v984 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v932 = v966 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v887 = v932 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v817 = v887 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v732 = v817 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v614 = v732 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v435 = v614 + "img {display: none}\n";
    var v119 = v435 + "</style>\n";
    JAM.call(v118.write, v118, [v119], JAM.policy.p38);
  }
  var v120 = outputWindow.document;
  var v733 = "</head>\n" + '<body class="main">\n';
  var v615 = v733 + '<div class="title">';
  var v436 = v615 + title$$7;
  var v121 = v436 + " results</div>\n";
  JAM.call(v120.write, v120, [v121], JAM.policy.p38);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$8) {
  JAM.call(_openWindowAlign, null, [title$$8, true], JAM.policy.p40);
  return;
}
function _openWindowAlign(title$$9, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p23);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p39);
  var v122 = outputWindow.document;
  var v734 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v616 = v734 + "<head>\n";
  var v437 = v616 + "<title>Sequence Manipulation Suite</title>\n";
  var v123 = v437 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v122.write, v122, [v123], JAM.policy.p38);
  if (isBackground) {
    var v124 = outputWindow.document;
    var v1040 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1035 = v1040 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1030 = v1035 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1024 = v1030 + "div.info {font-weight: bold}\n";
    var v1013 = v1024 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1000 = v1013 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v985 = v1000 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v967 = v985 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v933 = v967 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v888 = v933 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v818 = v888 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v735 = v818 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v617 = v735 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v438 = v617 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v125 = v438 + "</style>\n";
    JAM.call(v124.write, v124, [v125], JAM.policy.p38);
  } else {
    var v126 = outputWindow.document;
    var v1046 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1044 = v1046 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1041 = v1044 + "div.title {display: none}\n";
    var v1036 = v1041 + "div.info {font-weight: bold}\n";
    var v1031 = v1036 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1025 = v1031 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1014 = v1025 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1001 = v1014 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v986 = v1001 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v968 = v986 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v934 = v968 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v889 = v934 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v819 = v889 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v736 = v819 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v618 = v736 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v439 = v618 + "img {display: none}\n";
    var v127 = v439 + "</style>\n";
    JAM.call(v126.write, v126, [v127], JAM.policy.p38);
  }
  var v128 = outputWindow.document;
  var v737 = "</head>\n" + '<body class="main">\n';
  var v619 = v737 + '<div class="title">';
  var v440 = v619 + title$$9;
  var v129 = v440 + " results</div>\n";
  JAM.call(v128.write, v128, [v129], JAM.policy.p38);
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p40);
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p40);
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p40);
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p40);
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p40);
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p40);
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p40);
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p40);
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p40);
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = JAM.new(Array, [], JAM.policy.p39);
  var v441 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p38);
  var v130 = v441 != -1;
  if (v130) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p38);
    tempDnaArray = JAM.call(tempDnaArray.reverse, tempDnaArray, [], JAM.policy.p39);
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p22);
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = JAM.call(theNumber.toString, theNumber, [], JAM.policy.p39);
  j$$5 = theNumber.length;
  var v131 = j$$5 < lengthOfColumn;
  for (;v131;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v131 = j$$5 < lengthOfColumn;
  }
  var v132 = tempString + theNumber;
  theNumber = v132 + " ";
  var v133 = sequenceToAppend + theNumber;
  sequenceToAppend = v133 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = JAM.new(Array, [], JAM.policy.p39);
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p38);
  introspect(JAM.policy.p26) {
    var v442 = testArray[0]
  }
  var v134 = v442 != testString;
  if (v134) {
    JAM.call(alert, null, ["Array object push method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v443 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p38);
  var v135 = v443 == -1;
  if (v135) {
    JAM.call(alert, null, ["Regular expression 'm' flag not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  var caughtException = false;
  try {
    if (JAM.isEval(eval)) {
      re$$2 = eval("introspect(JAM.policy.pFull) { " + "Exception handling not supported. Check browser compatibility page." + " }");
    } else {
      re$$2 = JAM.call(eval, null, ["Exception handling not supported. Check browser compatibility page."]);
    }
  } catch (e$$4) {
    caughtException = true;
  }
  var v136 = !caughtException;
  if (v136) {
    JAM.call(alert, null, ["Exception handling not supported. See browser compatibility page."], JAM.policy.p22);
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p41);
  var v137 = testString != "1X2X3X";
  if (v137) {
    JAM.call(alert, null, ["Nested function in String replace method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  var testNum = 2489.8237;
  var v444 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p25);
  var v138 = v444 != 2489.824;
  if (v138) {
    JAM.call(alert, null, ["Number toFixed() method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  var v445 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p25);
  var v139 = v445 != 2489.8;
  if (v139) {
    JAM.call(alert, null, ["Number toPrecision() method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v446 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p38);
  var v140 = v446 == -1;
  if (v140) {
    JAM.call(alert, null, ["Please enter a number"], JAM.policy.p22);
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v820 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p38);
  var v738 = v820 == -1;
  var v822 = !v738;
  if (v822) {
    var v821 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p38);
    v738 = v821 == -1;
  }
  var v620 = v738;
  var v740 = !v620;
  if (v740) {
    var v739 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p38);
    v620 = v739 == -1;
  }
  var v447 = v620;
  var v622 = !v447;
  if (v622) {
    var v621 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p38);
    v447 = v621 == -1;
  }
  var v141 = v447;
  if (v141) {
    JAM.call(alert, null, ["Please enter the contents of an EMBL file."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v448 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p38);
  var v142 = v448 == -1;
  if (v142) {
    JAM.call(alert, null, ["Please enter a number."], JAM.policy.p22);
    return false;
  }
  var v144 = theNumber$$2 > maxInput$$2;
  if (v144) {
    var v449 = "Please enter a number less than or equal to " + maxInput$$2;
    var v143 = v449 + ".";
    JAM.call(alert, null, [v143], JAM.policy.p38);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v450 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p38);
  var v145 = v450 != -1;
  if (v145) {
    JAM.call(alert, null, ["The sequence contains non-DNA characters, which will be omitted."], JAM.policy.p22);
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v451 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p38);
  var v146 = v451 != -1;
  if (v146) {
    JAM.call(alert, null, ["The sequence contains non-protein characters, which will be omitted."], JAM.policy.p22);
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v823 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p38);
  var v741 = v823 == -1;
  var v825 = !v741;
  if (v825) {
    var v824 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p38);
    v741 = v824 == -1;
  }
  var v623 = v741;
  var v743 = !v623;
  if (v743) {
    var v742 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p38);
    v623 = v742 == -1;
  }
  var v452 = v623;
  var v625 = !v452;
  if (v625) {
    var v624 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p38);
    v452 = v624 == -1;
  }
  var v147 = v452;
  if (v147) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v826 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p38);
  var v744 = v826 == -1;
  var v828 = !v744;
  if (v828) {
    var v827 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p38);
    v744 = v827 == -1;
  }
  var v626 = v744;
  var v746 = !v626;
  if (v746) {
    var v745 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p38);
    v626 = v745 == -1;
  }
  var v453 = v626;
  var v628 = !v453;
  if (v628) {
    var v627 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p38);
    v453 = v627 == -1;
  }
  var v148 = v453;
  if (v148) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p22);
    return false;
  }
  var v454 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p38);
  var v149 = v454 == -1;
  if (v149) {
    JAM.call(alert, null, ["The file has no defined features."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v829 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p38);
  var v747 = v829 == -1;
  var v831 = !v747;
  if (v831) {
    var v830 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p38);
    v747 = v830 == -1;
  }
  var v629 = v747;
  var v749 = !v629;
  if (v749) {
    var v748 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p38);
    v629 = v748 == -1;
  }
  var v455 = v629;
  var v631 = !v455;
  if (v631) {
    var v630 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p38);
    v455 = v630 == -1;
  }
  var v150 = v455;
  if (v150) {
    JAM.call(alert, null, ["Please enter the contents of an EMBL file."], JAM.policy.p22);
    return false;
  }
  var v456 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p38);
  var v151 = v456 == -1;
  if (v151) {
    JAM.call(alert, null, ["The file has no defined features."], JAM.policy.p22);
    return false;
  }
  return true;
}
function writeGroupNum(text$$10, tabIn$$1, groupSize, basePerLine, startBase, stopBase) {
  var i$$5 = JAM.call(parseInt, null, [startBase], JAM.policy.p38);
  var k = 0;
  var lineOfText = "";
  var sepChar = " ";
  groupSize = JAM.call(parseInt, null, [groupSize], JAM.policy.p38);
  basePerLine = JAM.call(parseInt, null, [basePerLine], JAM.policy.p38);
  var v159 = i$$5 < stopBase;
  for (;v159;) {
    var v152 = i$$5 + 1;
    lineOfText = JAM.call(rightNum, null, [v152, lineOfText, 8, tabIn$$1], JAM.policy.p41);
    var j$$6 = 1;
    var v457 = basePerLine / groupSize;
    var v156 = j$$6 <= v457;
    for (;v156;) {
      var v155 = k < groupSize;
      for (;v155;) {
        var v153 = lineOfText;
        var v458 = k + i$$5;
        var v154 = JAM.call(text$$10.charAt, text$$10, [v458], JAM.policy.p38);
        lineOfText = v153 + v154;
        k = k + 1;
        v155 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v459 = basePerLine / groupSize;
      v156 = j$$6 <= v459;
    }
    var v157 = outputWindow.document;
    var v158 = lineOfText + "\n";
    JAM.call(v157.write, v157, [v158], JAM.policy.p38);
    lineOfText = "";
    v159 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  JAM.call(writeGroupNumDnaSetStart, null, [text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0], JAM.policy.p41);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v460 = adjustment < 0;
    if (v460) {
      v460 = adjusted >= 0;
    }
    var v160 = v460;
    if (v160) {
      adjusted = adjusted + 1;
    }
    return adjusted;
  }
  var i$$6 = JAM.call(parseInt, null, [startBase$$2], JAM.policy.p38);
  var k$$1 = 0;
  var lineOfText$$1 = "";
  var lineNum = "";
  var sepChar$$1 = " ";
  var aboveNum = "";
  groupSize$$2 = JAM.call(parseInt, null, [groupSize$$2], JAM.policy.p38);
  basePerLine$$2 = JAM.call(parseInt, null, [basePerLine$$2], JAM.policy.p38);
  numberingAdjustment = JAM.call(parseInt, null, [numberingAdjustment], JAM.policy.p38);
  var v193 = i$$6 < stopBase$$2;
  for (;v193;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v461 = basePerLine$$2 / groupSize$$2;
    var v169 = j$$7 <= v461;
    for (;v169;) {
      var v164 = k$$1 < groupSize$$2;
      for (;v164;) {
        var v462 = i$$6 + k$$1;
        var v161 = v462 >= stopBase$$2;
        if (v161) {
          break;
        }
        var v162 = lineOfText$$1;
        var v463 = k$$1 + i$$6;
        var v163 = JAM.call(text$$12.charAt, text$$12, [v463], JAM.policy.p38);
        lineOfText$$1 = v162 + v163;
        k$$1 = k$$1 + 1;
        v164 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v167 = numberPosition$$1 == "above";
      if (v167) {
        var v165 = aboveNum;
        var v464 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p41);
        var v166 = JAM.call(rightNum, null, [v464, "", groupSize$$2, tabIn$$3], JAM.policy.p40);
        aboveNum = v165 + v166;
      }
      var v168 = i$$6 >= stopBase$$2;
      if (v168) {
        break;
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v465 = basePerLine$$2 / groupSize$$2;
      v169 = j$$7 <= v465;
    }
    var v192 = numberPosition$$1 == "left";
    if (v192) {
      var v170 = outputWindow.document;
      var v750 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p41);
      var v632 = JAM.call(rightNum, null, [v750, "", 8, tabIn$$3], JAM.policy.p40);
      var v466 = v632 + lineOfText$$1;
      var v171 = v466 + "\n";
      JAM.call(v170.write, v170, [v171], JAM.policy.p38);
      var v175 = strands$$1 == "two";
      if (v175) {
        var v172 = outputWindow.document;
        var v751 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p41);
        var v633 = JAM.call(rightNum, null, [v751, "", 8, tabIn$$3], JAM.policy.p40);
        var v634 = JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38);
        var v467 = v633 + v634;
        var v173 = v467 + "\n";
        JAM.call(v172.write, v172, [v173], JAM.policy.p38);
        var v174 = outputWindow.document;
        JAM.call(v174.write, v174, ["\n"], JAM.policy.p22);
      }
    } else {
      var v191 = numberPosition$$1 == "right";
      if (v191) {
        var v176 = outputWindow.document;
        var v635 = lineOfText$$1;
        var v636 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p41);
        var v468 = v635 + v636;
        var v177 = v468 + "\n";
        JAM.call(v176.write, v176, [v177], JAM.policy.p38);
        var v181 = strands$$1 == "two";
        if (v181) {
          var v178 = outputWindow.document;
          var v637 = JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38);
          var v638 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p41);
          var v469 = v637 + v638;
          var v179 = v469 + "\n";
          JAM.call(v178.write, v178, [v179], JAM.policy.p38);
          var v180 = outputWindow.document;
          JAM.call(v180.write, v180, ["\n"], JAM.policy.p22);
        }
      } else {
        var v190 = numberPosition$$1 == "above";
        if (v190) {
          var v182 = outputWindow.document;
          var v183 = aboveNum + "\n";
          JAM.call(v182.write, v182, [v183], JAM.policy.p38);
          var v184 = outputWindow.document;
          var v185 = lineOfText$$1 + "\n";
          JAM.call(v184.write, v184, [v185], JAM.policy.p38);
          var v189 = strands$$1 == "two";
          if (v189) {
            var v186 = outputWindow.document;
            var v470 = JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38);
            var v187 = v470 + "\n";
            JAM.call(v186.write, v186, [v187], JAM.policy.p38);
            var v188 = outputWindow.document;
            JAM.call(v188.write, v188, ["\n"], JAM.policy.p22);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v193 = i$$6 < stopBase$$2;
  }
  return true;
}
function writeGroupNumProtein(text$$13, tabIn$$4, groupSize$$3, basePerLine$$3, startBase$$3, stopBase$$3, numberPosition$$2) {
  var i$$7 = JAM.call(parseInt, null, [startBase$$3], JAM.policy.p38);
  var k$$2 = 0;
  var lineOfText$$2 = "";
  var lineNum$$1 = "";
  var sepChar$$2 = " ";
  var aboveNum$$1 = "";
  groupSize$$3 = JAM.call(parseInt, null, [groupSize$$3], JAM.policy.p38);
  basePerLine$$3 = JAM.call(parseInt, null, [basePerLine$$3], JAM.policy.p38);
  var v214 = i$$7 < stopBase$$3;
  for (;v214;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v471 = basePerLine$$3 / groupSize$$3;
    var v202 = j$$8 <= v471;
    for (;v202;) {
      var v197 = k$$2 < groupSize$$3;
      for (;v197;) {
        var v472 = i$$7 + k$$2;
        var v194 = v472 >= stopBase$$3;
        if (v194) {
          break;
        }
        var v195 = lineOfText$$2;
        var v473 = k$$2 + i$$7;
        var v196 = JAM.call(text$$13.charAt, text$$13, [v473], JAM.policy.p38);
        lineOfText$$2 = v195 + v196;
        k$$2 = k$$2 + 1;
        v197 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v200 = numberPosition$$2 == "above";
      if (v200) {
        var v198 = aboveNum$$1;
        var v199 = JAM.call(rightNum, null, [i$$7, "", groupSize$$3, tabIn$$4], JAM.policy.p40);
        aboveNum$$1 = v198 + v199;
      }
      var v201 = i$$7 >= stopBase$$3;
      if (v201) {
        break;
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v474 = basePerLine$$3 / groupSize$$3;
      v202 = j$$8 <= v474;
    }
    var v213 = numberPosition$$2 == "left";
    if (v213) {
      var v203 = outputWindow.document;
      var v639 = JAM.call(rightNum, null, [lineNum$$1, "", 8, tabIn$$4], JAM.policy.p40);
      var v475 = v639 + lineOfText$$2;
      var v204 = v475 + "\n";
      JAM.call(v203.write, v203, [v204], JAM.policy.p38);
    } else {
      var v212 = numberPosition$$2 == "right";
      if (v212) {
        var v205 = outputWindow.document;
        var v476 = lineOfText$$2 + i$$7;
        var v206 = v476 + "\n";
        JAM.call(v205.write, v205, [v206], JAM.policy.p38);
      } else {
        var v211 = numberPosition$$2 == "above";
        if (v211) {
          var v207 = outputWindow.document;
          var v208 = aboveNum$$1 + "\n";
          JAM.call(v207.write, v207, [v208], JAM.policy.p38);
          var v209 = outputWindow.document;
          var v210 = lineOfText$$2 + "\n";
          JAM.call(v209.write, v209, [v210], JAM.policy.p38);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v214 = i$$7 < stopBase$$3;
  }
  return true;
}
function writeMutatedSequence(sequence$$13, components$$1, numMut, firstIndexToMutate, lastIndexToMutate) {
  var currentChar = "";
  var randNum = 0;
  var maxNum = 0;
  var needNewChar = "";
  var componentsIndex = 0;
  numMut = JAM.call(parseInt, null, [numMut], JAM.policy.p38);
  firstIndexToMutate = JAM.call(parseInt, null, [firstIndexToMutate], JAM.policy.p38);
  lastIndexToMutate = JAM.call(parseInt, null, [lastIndexToMutate], JAM.policy.p38);
  var v752 = sequence$$13.length;
  var v640 = v752 <= firstIndexToMutate;
  var v753 = !v640;
  if (v753) {
    v640 = lastIndexToMutate < 0;
  }
  var v477 = v640;
  var v641 = !v477;
  if (v641) {
    v477 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v215 = v477;
  if (v215) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v223 = i$$8 < numMut;
  for (;v223;) {
    maxNum = sequence$$13.length;
    var v478 = JAM.call(Math.random, Math, [], JAM.policy.p39);
    var v216 = v478 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v216], JAM.policy.p38);
    var v479 = randNum < firstIndexToMutate;
    var v642 = !v479;
    if (v642) {
      v479 = randNum > lastIndexToMutate;
    }
    var v217 = v479;
    if (v217) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v223 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p38);
    needNewChar = true;
    for (;needNewChar;) {
      var v480 = JAM.call(Math.random, Math, [], JAM.policy.p39);
      var v481 = components$$1.length;
      var v218 = v480 * v481;
      componentsIndex = JAM.call(Math.round, Math, [v218], JAM.policy.p38);
      var v482 = components$$1.length;
      var v219 = componentsIndex == v482;
      if (v219) {
        componentsIndex = 0;
      }
      introspect(JAM.policy.p26) {
        var v483 = components$$1[componentsIndex]
      }
      var v220 = v483 != currentChar;
      if (v220) {
        needNewChar = false;
      }
    }
    var v484 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p24);
    introspect(JAM.policy.p26) {
      var v485 = components$$1[componentsIndex]
    }
    var v221 = v484 + v485;
    var v486 = randNum + 1;
    var v487 = sequence$$13.length;
    var v222 = JAM.call(sequence$$13.substring, sequence$$13, [v486, v487], JAM.policy.p41);
    sequence$$13 = v221 + v222;
    i$$8 = i$$8 + 1;
    v223 = i$$8 < numMut;
  }
  var v224 = outputWindow.document;
  var v225 = JAM.call(addReturns, null, [sequence$$13], JAM.policy.p38);
  JAM.call(v224.write, v224, [v225], JAM.policy.p38);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v230 = j$$9 < lengthOut$$1;
  for (;v230;) {
    var v488 = JAM.call(Math.random, Math, [], JAM.policy.p39);
    var v489 = components$$2.length;
    var v226 = v488 * v489;
    tempNum$$1 = JAM.call(Math.floor, Math, [v226], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v490 = sequence$$14.length;
    var v229 = v490 == 60;
    if (v229) {
      var v227 = outputWindow.document;
      var v228 = sequence$$14 + "\n";
      JAM.call(v227.write, v227, [v228], JAM.policy.p38);
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v230 = j$$9 < lengthOut$$1;
  }
  var v231 = outputWindow.document;
  var v232 = sequence$$14 + "\n";
  JAM.call(v231.write, v231, [v232], JAM.policy.p38);
  return true;
}
function writeRestrictionSites(sequence$$15, arrayOfItems, dnaConformation) {
  var resultArray = JAM.new(Array, [], JAM.policy.p39);
  var lookAhead = 50;
  var lowerLimit = 0;
  var upperLimit = sequence$$15.length;
  var shiftValue = 0;
  var cutDistance;
  var matchExp;
  var matchPosition;
  var tempString$$1;
  var backGroundClass;
  var matchArray$$1;
  var timesFound = 0;
  var v236 = dnaConformation == "circular";
  if (v236) {
    var v233 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p24);
    shiftValue = v233.length;
    var v754 = sequence$$15.length;
    var v643 = v754 - lookAhead;
    var v644 = sequence$$15.length;
    var v491 = JAM.call(sequence$$15.substring, sequence$$15, [v643, v644], JAM.policy.p41);
    var v234 = v491 + sequence$$15;
    var v235 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p24);
    sequence$$15 = v234 + v235;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v237 = outputWindow.document;
  JAM.call(v237.write, v237, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p22);
  var v238 = outputWindow.document;
  var v755 = '<tr><td class="title" width="200px">' + "Site:";
  var v645 = v755 + '</td><td class="title">';
  var v492 = v645 + "Positions:";
  var v239 = v492 + "</td></tr>\n";
  JAM.call(v238.write, v238, [v239], JAM.policy.p38);
  var i$$9 = 0;
  var v493 = arrayOfItems.length;
  var v255 = i$$9 < v493;
  for (;v255;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v494 = arrayOfItems[i$$9]
    }
    var v240 = JAM.call(v494.match, v494, [/\/.+\//], JAM.policy.p38);
    matchExp = v240 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    introspect(JAM.policy.p26) {
      var v756 = arrayOfItems[i$$9]
    }
    var v646 = JAM.call(v756.match, v756, [/\)\D*\d+/], JAM.policy.p38);
    var v495 = JAM.call(v646.toString, v646, [], JAM.policy.p39);
    var v241 = JAM.call(v495.replace, v495, [/\)\D*/, ""], JAM.policy.p40);
    cutDistance = JAM.call(parseFloat, null, [v241], JAM.policy.p38);
    var v247 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    for (;v247;) {
      var v242 = matchExp.lastIndex;
      matchPosition = v242 - cutDistance;
      var v496 = matchPosition >= lowerLimit;
      if (v496) {
        v496 = matchPosition < upperLimit;
      }
      var v245 = v496;
      if (v245) {
        timesFound = timesFound + 1;
        var v243 = tempString$$1 + ", ";
        var v497 = matchPosition - shiftValue;
        var v244 = v497 + 1;
        tempString$$1 = v243 + v244;
      }
      var v498 = matchExp.lastIndex;
      var v647 = RegExp.lastMatch;
      var v499 = v647.length;
      var v246 = v498 - v499;
      matchExp.lastIndex = v246 + 1;
      v247 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    }
    var v500 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p38);
    var v248 = v500 != -1;
    if (v248) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p40);
    }
    var v252 = timesFound == 0;
    if (v252) {
      backGroundClass = "none";
    } else {
      var v251 = timesFound == 1;
      if (v251) {
        backGroundClass = "one";
      } else {
        var v250 = timesFound == 2;
        if (v250) {
          backGroundClass = "two";
        } else {
          var v249 = timesFound == 3;
          if (v249) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v253 = outputWindow.document;
    var v969 = '<tr><td class="' + backGroundClass;
    var v935 = v969 + '">';
    introspect(JAM.policy.p26) {
      var v1002 = arrayOfItems[i$$9]
    }
    var v987 = JAM.call(v1002.match, v1002, [/\([^\(]+\)/], JAM.policy.p38);
    var v970 = JAM.call(v987.toString, v987, [], JAM.policy.p39);
    var v936 = JAM.call(v970.replace, v970, [/\(|\)/g, ""], JAM.policy.p40);
    var v890 = v935 + v936;
    var v832 = v890 + '</td><td class="';
    var v757 = v832 + backGroundClass;
    var v648 = v757 + '">';
    var v501 = v648 + tempString$$1;
    var v254 = v501 + "</td></tr>\n";
    JAM.call(v253.write, v253, [v254], JAM.policy.p38);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v502 = arrayOfItems.length;
    v255 = i$$9 < v502;
  }
  var v256 = outputWindow.document;
  JAM.call(v256.write, v256, ["</tbody></table>\n"], JAM.policy.p22);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v257 = outputWindow.document;
  JAM.call(v257.write, v257, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p22);
  var v258 = outputWindow.document;
  var v891 = '<tr><td class="title">' + "Pattern:";
  var v833 = v891 + '</td><td class="title">';
  var v758 = v833 + "Times found:";
  var v649 = v758 + '</td><td class="title">';
  var v503 = v649 + "Percentage:";
  var v259 = v503 + "</td></tr>\n";
  JAM.call(v258.write, v258, [v259], JAM.policy.p38);
  var i$$10 = 0;
  var v504 = arrayOfItems$$1.length;
  var v268 = i$$10 < v504;
  for (;v268;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v505 = arrayOfItems$$1[i$$10]
    }
    var v260 = JAM.call(v505.match, v505, [/\/[^\/]+\//], JAM.policy.p38);
    var matchExp$$1 = v260 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v506 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p38);
    var v262 = v506 != -1;
    if (v262) {
      var v261 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p38);
      tempNumber = v261.length;
    }
    var percentage = 0;
    var v650 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v834 = arrayOfItems$$1[i$$10]
    }
    var v759 = JAM.call(v834.match, v834, [/\d+/], JAM.policy.p38);
    var v651 = JAM.call(parseFloat, null, [v759], JAM.policy.p38);
    var v507 = v650 - v651;
    var v265 = v507 > 0;
    if (v265) {
      var v263 = 100 * tempNumber;
      var v508 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v760 = arrayOfItems$$1[i$$10]
      }
      var v652 = JAM.call(v760.match, v760, [/\d+/], JAM.policy.p38);
      var v509 = JAM.call(parseFloat, null, [v652], JAM.policy.p38);
      var v264 = v508 - v509;
      percentage = v263 / v264;
    }
    var v266 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v1003 = arrayOfItems$$1[i$$10]
    }
    var v988 = JAM.call(v1003.match, v1003, [/\([^\(]+\)\b/], JAM.policy.p38);
    var v971 = JAM.call(v988.toString, v988, [], JAM.policy.p39);
    var v937 = JAM.call(v971.replace, v971, [/\(|\)/g, ""], JAM.policy.p40);
    var v892 = "<tr><td>" + v937;
    var v835 = v892 + "</td><td>";
    var v761 = v835 + tempNumber;
    var v653 = v761 + "</td><td>";
    var v654 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p25);
    var v510 = v653 + v654;
    var v267 = v510 + "</td></tr>\n";
    JAM.call(v266.write, v266, [v267], JAM.policy.p38);
    i$$10 = i$$10 + 1;
    var v511 = arrayOfItems$$1.length;
    v268 = i$$10 < v511;
  }
  var v269 = outputWindow.document;
  JAM.call(v269.write, v269, ["</tbody></table>\n"], JAM.policy.p22);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v512 = sequence$$17.length;
  var v276 = v512 > 0;
  for (;v276;) {
    maxNum$$1 = sequence$$17.length;
    var v513 = JAM.call(Math.random, Math, [], JAM.policy.p39);
    var v270 = v513 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v270], JAM.policy.p38);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p38);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p24);
    var v271 = randNum$$1 + 1;
    var v272 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v271, v272], JAM.policy.p41);
    sequence$$17 = tempString1 + tempString2;
    var v514 = tempSeq.length;
    var v275 = v514 == 60;
    if (v275) {
      var v273 = outputWindow.document;
      var v274 = tempSeq + "\n";
      JAM.call(v273.write, v273, [v274], JAM.policy.p38);
      tempSeq = "";
    }
    var v515 = sequence$$17.length;
    v276 = v515 > 0;
  }
  var v277 = outputWindow.document;
  var v278 = tempSeq + "\n";
  JAM.call(v277.write, v277, [v278], JAM.policy.p38);
  return true;
}
function pcrProducts(theDocument) {
  var newDna = "";
  var maxInput$$3 = 2E5;
  var v516 = JAM.call(testScript, null, [], JAM.policy.p39);
  var v279 = v516 == false;
  if (v279) {
    return false;
  }
  var re$$3;
  var primers = JAM.new(Array, [], JAM.policy.p39);
  var forwardMatches = JAM.new(Array, [], JAM.policy.p39);
  var reverseMatches = JAM.new(Array, [], JAM.policy.p39);
  var pcrProducts$$1 = JAM.new(Array, [], JAM.policy.p39);
  var v1015 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1004 = v1015[0]
  }
  var v989 = v1004.elements;
  introspect(JAM.policy.p26) {
    var v972 = v989[0]
  }
  var v938 = JAM.call(checkFormElement, null, [v972], JAM.policy.p38);
  var v893 = v938 == false;
  var v940 = !v893;
  if (v940) {
    var v1026 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1016 = v1026[0]
    }
    var v1005 = v1016.elements;
    introspect(JAM.policy.p26) {
      var v990 = v1005[0]
    }
    var v973 = v990.value;
    var v939 = JAM.call(checkSequenceLength, null, [v973, maxInput$$3], JAM.policy.p41);
    v893 = v939 == false;
  }
  var v836 = v893;
  var v895 = !v836;
  if (v895) {
    var v1006 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v991 = v1006[0]
    }
    var v974 = v991.elements;
    introspect(JAM.policy.p26) {
      var v941 = v974[1]
    }
    var v894 = JAM.call(checkFormElement, null, [v941], JAM.policy.p38);
    v836 = v894 == false;
  }
  var v762 = v836;
  var v838 = !v762;
  if (v838) {
    var v992 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v975 = v992[0]
    }
    var v942 = v975.elements;
    introspect(JAM.policy.p26) {
      var v896 = v942[2]
    }
    var v837 = JAM.call(checkFormElement, null, [v896], JAM.policy.p38);
    v762 = v837 == false;
  }
  var v655 = v762;
  var v764 = !v655;
  if (v764) {
    var v976 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v943 = v976[0]
    }
    var v897 = v943.elements;
    introspect(JAM.policy.p26) {
      var v839 = v897[3]
    }
    var v763 = JAM.call(checkFormElement, null, [v839], JAM.policy.p38);
    v655 = v763 == false;
  }
  var v517 = v655;
  var v657 = !v517;
  if (v657) {
    var v944 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v898 = v944[0]
    }
    var v840 = v898.elements;
    introspect(JAM.policy.p26) {
      var v765 = v840[4]
    }
    var v656 = JAM.call(checkFormElement, null, [v765], JAM.policy.p38);
    v517 = v656 == false;
  }
  var v280 = v517;
  if (v280) {
    return false;
  }
  var v977 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v945 = v977[0]
  }
  var v899 = v945.elements;
  introspect(JAM.policy.p26) {
    var v841 = v899[2]
  }
  var v766 = v841.value;
  var v658 = JAM.call(v766.replace, v766, [/[^A-Za-z]/g, ""], JAM.policy.p40);
  var v518 = v658.length;
  var v281 = v518 < 10;
  if (v281) {
    JAM.call(alert, null, ["Please enter primer sequences that are at least 10 bases long."], JAM.policy.p22);
    return false;
  }
  var v978 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v946 = v978[0]
  }
  var v900 = v946.elements;
  introspect(JAM.policy.p26) {
    var v842 = v900[4]
  }
  var v767 = v842.value;
  var v659 = JAM.call(v767.replace, v767, [/[^A-Za-z]/g, ""], JAM.policy.p40);
  var v519 = v659.length;
  var v282 = v519 < 10;
  if (v282) {
    JAM.call(alert, null, ["Please enter primer sequences that are at least 10 bases long."], JAM.policy.p22);
    return false;
  }
  var v901 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v843 = v901[0]
  }
  var v768 = v843.elements;
  introspect(JAM.policy.p26) {
    var v660 = v768[2]
  }
  var v520 = v660.value;
  var v283 = JAM.call(v520.replace, v520, [/[^A-Za-z]/g, ""], JAM.policy.p40);
  var primerOne = JAM.call(convertDegenerates, null, [v283], JAM.policy.p38);
  var v902 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v844 = v902[0]
  }
  var v769 = v844.elements;
  introspect(JAM.policy.p26) {
    var v661 = v769[4]
  }
  var v521 = v661.value;
  var v284 = JAM.call(v521.replace, v521, [/[^A-Za-z]/g, ""], JAM.policy.p40);
  var primerTwo = JAM.call(convertDegenerates, null, [v284], JAM.policy.p38);
  try {
    var v522 = "/" + primerOne;
    var v285 = v522 + "/gi";
    if (JAM.isEval(eval)) {
      re$$3 = eval("introspect(JAM.policy.pFull) { " + v285 + " }");
    } else {
      re$$3 = JAM.call(eval, null, [v285]);
    }
    var testString$$1 = "teststring";
    testString$$1 = JAM.call(testString$$1.replace, testString$$1, [re$$3, ""], JAM.policy.p40);
  } catch (e$$5) {
    JAM.call(alert, null, ["The first primer sequence is not formatted correctly."], JAM.policy.p22);
    return false;
  }
  try {
    var v523 = "/" + primerTwo;
    var v286 = v523 + "/gi";
    if (JAM.isEval(eval)) {
      re$$3 = eval("introspect(JAM.policy.pFull) { " + v286 + " }");
    } else {
      re$$3 = JAM.call(eval, null, [v286]);
    }
    testString$$1 = "teststring";
    testString$$1 = JAM.call(testString$$1.replace, testString$$1, [re$$3, ""], JAM.policy.p40);
  } catch (e$$6) {
    JAM.call(alert, null, ["The second primer sequence is not formatted correctly."], JAM.policy.p22);
    return false;
  }
  var v770 = "/" + primerOne;
  var v662 = v770 + "/gi";
  if (JAM.isEval(eval)) {
    var v524 = eval("introspect(JAM.policy.pFull) { " + v662 + " }")
  } else {
    var v524 = JAM.call(eval, null, [v662])
  }
  var v903 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v845 = v903[0]
  }
  var v771 = v845.elements;
  introspect(JAM.policy.p26) {
    var v663 = v771[1]
  }
  var v525 = v663.value;
  var v287 = JAM.new(Primer, [v524, v525], JAM.policy.p41);
  JAM.call(primers.push, primers, [v287], JAM.policy.p38);
  var v772 = "/" + primerTwo;
  var v664 = v772 + "/gi";
  if (JAM.isEval(eval)) {
    var v526 = eval("introspect(JAM.policy.pFull) { " + v664 + " }")
  } else {
    var v526 = JAM.call(eval, null, [v664])
  }
  var v904 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v846 = v904[0]
  }
  var v773 = v846.elements;
  introspect(JAM.policy.p26) {
    var v665 = v773[3]
  }
  var v527 = v665.value;
  var v288 = JAM.new(Primer, [v526, v527], JAM.policy.p41);
  JAM.call(primers.push, primers, [v288], JAM.policy.p38);
  var v847 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v774 = v847[0]
  }
  var v666 = v774.elements;
  introspect(JAM.policy.p26) {
    var v528 = v666[0]
  }
  var v289 = v528.value;
  var arrayOfFasta$$1 = JAM.call(getArrayOfFasta, null, [v289], JAM.policy.p38);
  var i$$11 = 0;
  var v529 = arrayOfFasta$$1.length;
  var v296 = i$$11 < v529;
  for (;v296;) {
    introspect(JAM.policy.p26) {
      var v290 = arrayOfFasta$$1[i$$11]
    }
    newDna = JAM.call(getSequenceFromFasta, null, [v290], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      var v291 = arrayOfFasta$$1[i$$11]
    }
    title = JAM.call(getTitleFromFasta, null, [v291], JAM.policy.p38);
    newDna = JAM.call(removeNonDna, null, [newDna], JAM.policy.p38);
    var v947 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v905 = v947[0]
    }
    var v848 = v905.elements;
    introspect(JAM.policy.p26) {
      var v775 = v848[8]
    }
    var v667 = v775.options;
    var v948 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v906 = v948[0]
    }
    var v849 = v906.elements;
    introspect(JAM.policy.p26) {
      var v776 = v849[8]
    }
    var v668 = v776.selectedIndex;
    introspect(JAM.policy.p26) {
      var v530 = v667[v668]
    }
    var v292 = v530.value;
    forwardMatches = JAM.call(findMatches, null, [primers, newDna, v292], JAM.policy.p41);
    var v531 = JAM.call(complement, null, [newDna], JAM.policy.p38);
    var v293 = JAM.call(reverse, null, [v531], JAM.policy.p38);
    var v949 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v907 = v949[0]
    }
    var v850 = v907.elements;
    introspect(JAM.policy.p26) {
      var v777 = v850[8]
    }
    var v669 = v777.options;
    var v950 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v908 = v950[0]
    }
    var v851 = v908.elements;
    introspect(JAM.policy.p26) {
      var v778 = v851[8]
    }
    var v670 = v778.selectedIndex;
    introspect(JAM.policy.p26) {
      var v532 = v669[v670]
    }
    var v294 = v532.value;
    reverseMatches = JAM.call(findMatches, null, [primers, v293, v294], JAM.policy.p41);
    var v951 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v909 = v951[0]
    }
    var v852 = v909.elements;
    introspect(JAM.policy.p26) {
      var v779 = v852[8]
    }
    var v671 = v779.options;
    var v952 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v910 = v952[0]
    }
    var v853 = v910.elements;
    introspect(JAM.policy.p26) {
      var v780 = v853[8]
    }
    var v672 = v780.selectedIndex;
    introspect(JAM.policy.p26) {
      var v533 = v671[v672]
    }
    var v295 = v533.value;
    JAM.call(makePcrProducts, null, [newDna, title, forwardMatches, reverseMatches, v295, pcrProducts$$1], JAM.policy.p41);
    i$$11 = i$$11 + 1;
    var v534 = arrayOfFasta$$1.length;
    v296 = i$$11 < v534;
  }
  JAM.call(pcrProducts$$1.sort, pcrProducts$$1, [pcrProductSorter], JAM.policy.p38);
  JAM.call(openWindow, null, ["PCR Products"], JAM.policy.p22);
  JAM.call(openPre, null, [], JAM.policy.p39);
  i$$11 = 0;
  var v535 = pcrProducts$$1.length;
  var v299 = i$$11 < v535;
  for (;v299;) {
    introspect(JAM.policy.p26) {
      var v297 = pcrProducts$$1[i$$11]
    }
    var v953 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v911 = v953[0]
    }
    var v854 = v911.elements;
    introspect(JAM.policy.p26) {
      var v781 = v854[8]
    }
    var v673 = v781.options;
    var v954 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v912 = v954[0]
    }
    var v855 = v912.elements;
    introspect(JAM.policy.p26) {
      var v782 = v855[8]
    }
    var v674 = v782.selectedIndex;
    introspect(JAM.policy.p26) {
      var v536 = v673[v674]
    }
    var v298 = v536.value;
    JAM.call(v297.writeProduct, v297, [v298], JAM.policy.p38);
    i$$11 = i$$11 + 1;
    var v537 = pcrProducts$$1.length;
    v299 = i$$11 < v537;
  }
  var v538 = pcrProducts$$1.length;
  var v301 = v538 == 0;
  if (v301) {
    var v300 = outputWindow.document;
    JAM.call(v300.write, v300, ["No PCR products were obtained.\n\n"], JAM.policy.p22);
  }
  JAM.call(closePre, null, [], JAM.policy.p39);
  JAM.call(closeWindow, null, [], JAM.policy.p39);
  return true;
}
function findMatches(primers$$1, sequence$$18, topology$$1) {
  var matchArray$$2;
  var matchPosition$$1;
  var arrayOfMatches = JAM.new(Array, [], JAM.policy.p39);
  var re$$4;
  var originalLength$$1 = sequence$$18.length;
  var v318 = topology$$1 == "circular";
  if (v318) {
    var lookAhead$$1 = 50;
    var v302 = JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p24);
    var shiftValue$$1 = v302.length;
    var v303 = sequence$$18.length;
    var upperLimit$$1 = v303 + shiftValue$$1;
    var v783 = sequence$$18.length;
    var v675 = v783 - lookAhead$$1;
    var v676 = sequence$$18.length;
    var v539 = JAM.call(sequence$$18.substring, sequence$$18, [v675, v676], JAM.policy.p41);
    var v304 = v539 + sequence$$18;
    var v305 = JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p24);
    sequence$$18 = v304 + v305;
    var lowerLimit$$1 = 0 + shiftValue$$1;
    var i$$12 = 0;
    var v540 = primers$$1.length;
    var v312 = i$$12 < v540;
    for (;v312;) {
      introspect(JAM.policy.p26) {
        var v306 = primers$$1[i$$12]
      }
      re$$4 = v306.re;
      var v311 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [sequence$$18], JAM.policy.p38);
      for (;v311;) {
        matchPosition$$1 = re$$4.lastIndex;
        var v541 = matchPosition$$1 >= lowerLimit$$1;
        if (v541) {
          v541 = matchPosition$$1 < upperLimit$$1;
        }
        var v309 = v541;
        if (v309) {
          matchPosition$$1 = matchPosition$$1 - shiftValue$$1;
          var v307 = matchPosition$$1 == 0;
          if (v307) {
            matchPosition$$1 = originalLength$$1;
          }
          introspect(JAM.policy.p26) {
            var v677 = primers$$1[i$$12]
          }
          var v542 = v677.name;
          introspect(JAM.policy.p26) {
            var v543 = matchArray$$2[0]
          }
          var v308 = JAM.new(Match, [v542, v543, matchPosition$$1], JAM.policy.p41);
          JAM.call(arrayOfMatches.push, arrayOfMatches, [v308], JAM.policy.p38);
        }
        var v544 = re$$4.lastIndex;
        var v678 = RegExp.lastMatch;
        var v545 = v678.length;
        var v310 = v544 - v545;
        re$$4.lastIndex = v310 + 1;
        v311 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [sequence$$18], JAM.policy.p38);
      }
      i$$12 = i$$12 + 1;
      var v546 = primers$$1.length;
      v312 = i$$12 < v546;
    }
  } else {
    i$$12 = 0;
    var v547 = primers$$1.length;
    var v317 = i$$12 < v547;
    for (;v317;) {
      introspect(JAM.policy.p26) {
        var v313 = primers$$1[i$$12]
      }
      re$$4 = v313.re;
      var v316 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [sequence$$18], JAM.policy.p38);
      for (;v316;) {
        matchPosition$$1 = re$$4.lastIndex;
        introspect(JAM.policy.p26) {
          var v679 = primers$$1[i$$12]
        }
        var v548 = v679.name;
        introspect(JAM.policy.p26) {
          var v549 = matchArray$$2[0]
        }
        var v314 = JAM.new(Match, [v548, v549, matchPosition$$1], JAM.policy.p41);
        JAM.call(arrayOfMatches.push, arrayOfMatches, [v314], JAM.policy.p38);
        var v550 = re$$4.lastIndex;
        var v680 = RegExp.lastMatch;
        var v551 = v680.length;
        var v315 = v550 - v551;
        re$$4.lastIndex = v315 + 1;
        v316 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [sequence$$18], JAM.policy.p38);
      }
      i$$12 = i$$12 + 1;
      var v552 = primers$$1.length;
      v317 = i$$12 < v552;
    }
  }
  return arrayOfMatches;
}
function makePcrProducts(newDna$$1, title$$10, forwardMatches$$1, reverseMatches$$1, topology$$2, pcrProducts$$2) {
  var i$$13 = 0;
  var v553 = forwardMatches$$1.length;
  var v324 = i$$13 < v553;
  for (;v324;) {
    var j$$10 = 0;
    var v554 = reverseMatches$$1.length;
    var v323 = j$$10 < v554;
    for (;v323;) {
      introspect(JAM.policy.p26) {
        var v784 = forwardMatches$$1[i$$13]
      }
      var v681 = v784.positionAfter;
      introspect(JAM.policy.p26) {
        var v856 = forwardMatches$$1[i$$13]
      }
      var v785 = v856.matchingText;
      var v682 = v785.length;
      var v555 = v681 - v682;
      var v683 = newDna$$1.length;
      introspect(JAM.policy.p26) {
        var v786 = reverseMatches$$1[j$$10]
      }
      var v684 = v786.positionAfter;
      var v556 = v683 - v684;
      var v322 = v555 <= v556;
      if (v322) {
        introspect(JAM.policy.p26) {
          var v857 = forwardMatches$$1[i$$13]
        }
        var v787 = v857.positionAfter;
        introspect(JAM.policy.p26) {
          var v913 = forwardMatches$$1[i$$13]
        }
        var v858 = v913.matchingText;
        var v788 = v858.length;
        var v685 = v787 - v788;
        var v557 = v685 + 1;
        var v789 = newDna$$1.length;
        introspect(JAM.policy.p26) {
          var v859 = reverseMatches$$1[j$$10]
        }
        var v790 = v859.positionAfter;
        var v686 = v789 - v790;
        introspect(JAM.policy.p26) {
          var v860 = reverseMatches$$1[j$$10]
        }
        var v791 = v860.matchingText;
        var v687 = v791.length;
        var v558 = v686 + v687;
        introspect(JAM.policy.p26) {
          var v688 = forwardMatches$$1[i$$13]
        }
        var v559 = v688.primerName;
        introspect(JAM.policy.p26) {
          var v689 = reverseMatches$$1[j$$10]
        }
        var v560 = v689.primerName;
        introspect(JAM.policy.p26) {
          var v690 = forwardMatches$$1[i$$13]
        }
        var v561 = v690.name;
        introspect(JAM.policy.p26) {
          var v691 = reverseMatches$$1[j$$10]
        }
        var v562 = v691.name;
        introspect(JAM.policy.p26) {
          var v861 = forwardMatches$$1[i$$13]
        }
        var v792 = v861.positionAfter;
        introspect(JAM.policy.p26) {
          var v914 = forwardMatches$$1[i$$13]
        }
        var v862 = v914.matchingText;
        var v793 = v862.length;
        var v692 = v792 - v793;
        var v863 = newDna$$1.length;
        introspect(JAM.policy.p26) {
          var v915 = reverseMatches$$1[j$$10]
        }
        var v864 = v915.positionAfter;
        var v794 = v863 - v864;
        introspect(JAM.policy.p26) {
          var v916 = reverseMatches$$1[j$$10]
        }
        var v865 = v916.matchingText;
        var v795 = v865.length;
        var v693 = v794 + v795;
        var v563 = JAM.call(newDna$$1.substring, newDna$$1, [v692, v693], JAM.policy.p41);
        var v319 = JAM.new(PcrProduct, [title$$10, v557, v558, v559, v560, v561, v562, v563], JAM.policy.p41);
        JAM.call(pcrProducts$$2.push, pcrProducts$$2, [v319], JAM.policy.p38);
      } else {
        var v564 = topology$$2 == "circular";
        if (v564) {
          introspect(JAM.policy.p26) {
            var v866 = forwardMatches$$1[i$$13]
          }
          var v796 = v866.positionAfter;
          introspect(JAM.policy.p26) {
            var v917 = forwardMatches$$1[i$$13]
          }
          var v867 = v917.matchingText;
          var v797 = v867.length;
          var v694 = v796 - v797;
          var v918 = newDna$$1.length;
          introspect(JAM.policy.p26) {
            var v955 = reverseMatches$$1[j$$10]
          }
          var v919 = v955.positionAfter;
          var v868 = v918 - v919;
          introspect(JAM.policy.p26) {
            var v956 = reverseMatches$$1[j$$10]
          }
          var v920 = v956.matchingText;
          var v869 = v920.length;
          var v798 = v868 + v869;
          var v695 = v798 - 1;
          v564 = v694 > v695;
        }
        var v321 = v564;
        if (v321) {
          introspect(JAM.policy.p26) {
            var v870 = forwardMatches$$1[i$$13]
          }
          var v799 = v870.positionAfter;
          introspect(JAM.policy.p26) {
            var v921 = forwardMatches$$1[i$$13]
          }
          var v871 = v921.matchingText;
          var v800 = v871.length;
          var v696 = v799 - v800;
          var v565 = v696 + 1;
          var v801 = newDna$$1.length;
          introspect(JAM.policy.p26) {
            var v872 = reverseMatches$$1[j$$10]
          }
          var v802 = v872.positionAfter;
          var v697 = v801 - v802;
          introspect(JAM.policy.p26) {
            var v873 = reverseMatches$$1[j$$10]
          }
          var v803 = v873.matchingText;
          var v698 = v803.length;
          var v566 = v697 + v698;
          introspect(JAM.policy.p26) {
            var v699 = forwardMatches$$1[i$$13]
          }
          var v567 = v699.primerName;
          introspect(JAM.policy.p26) {
            var v700 = reverseMatches$$1[j$$10]
          }
          var v568 = v700.primerName;
          introspect(JAM.policy.p26) {
            var v701 = forwardMatches$$1[i$$13]
          }
          var v569 = v701.name;
          introspect(JAM.policy.p26) {
            var v702 = reverseMatches$$1[j$$10]
          }
          var v570 = v702.name;
          introspect(JAM.policy.p26) {
            var v922 = forwardMatches$$1[i$$13]
          }
          var v874 = v922.positionAfter;
          introspect(JAM.policy.p26) {
            var v957 = forwardMatches$$1[i$$13]
          }
          var v923 = v957.matchingText;
          var v875 = v923.length;
          var v804 = v874 - v875;
          var v805 = newDna$$1.length;
          var v703 = JAM.call(newDna$$1.substring, newDna$$1, [v804, v805], JAM.policy.p41);
          var v924 = newDna$$1.length;
          introspect(JAM.policy.p26) {
            var v958 = reverseMatches$$1[j$$10]
          }
          var v925 = v958.positionAfter;
          var v876 = v924 - v925;
          introspect(JAM.policy.p26) {
            var v959 = reverseMatches$$1[j$$10]
          }
          var v926 = v959.matchingText;
          var v877 = v926.length;
          var v806 = v876 + v877;
          var v704 = JAM.call(newDna$$1.substring, newDna$$1, [0, v806], JAM.policy.p24);
          var v571 = v703 + v704;
          var v320 = JAM.new(PcrProduct, [title$$10, v565, v566, v567, v568, v569, v570, v571], JAM.policy.p41);
          JAM.call(pcrProducts$$2.push, pcrProducts$$2, [v320], JAM.policy.p38);
        }
      }
      j$$10 = j$$10 + 1;
      var v572 = reverseMatches$$1.length;
      v323 = j$$10 < v572;
    }
    i$$13 = i$$13 + 1;
    var v573 = forwardMatches$$1.length;
    v324 = i$$13 < v573;
  }
  return;
}
function writeProduct(topology$$3) {
  var v325 = outputWindow.document;
  var v1045 = this.sequence;
  var v1042 = v1045.length;
  var v1037 = "&gt;" + v1042;
  var v1032 = v1037 + " bp product from ";
  var v1027 = v1032 + topology$$3;
  var v1017 = v1027 + " template ";
  var v1018 = this.template;
  var v1007 = v1017 + v1018;
  var v993 = v1007 + ", base ";
  var v994 = this.start;
  var v979 = v993 + v994;
  var v960 = v979 + " to base ";
  var v961 = this.stop;
  var v927 = v960 + v961;
  var v878 = v927 + " (";
  var v879 = this.forwardName;
  var v807 = v878 + v879;
  var v705 = v807 + " - ";
  var v706 = this.reverseName;
  var v574 = v705 + v706;
  var v326 = v574 + ").\n";
  JAM.call(v325.write, v325, [v326], JAM.policy.p38);
  var v327 = outputWindow.document;
  var v707 = this.sequence;
  var v575 = JAM.call(addReturns, null, [v707], JAM.policy.p38);
  var v328 = v575 + "\n\n";
  JAM.call(v327.write, v327, [v328], JAM.policy.p38);
  return;
}
function PcrProduct(template, start$$4, stop, forwardName, reverseName, forwardPrimer, reversePrimer, sequence$$19) {
  this.template = template;
  this.start = start$$4;
  this.stop = stop;
  this.forwardName = forwardName;
  this.reverseName = reverseName;
  this.forwardPrimer = forwardPrimer;
  this.reversePrimer = reversePrimer;
  this.sequence = sequence$$19;
  return;
}
function Match(primerName, matchingText, positionAfter) {
  this.primerName = primerName;
  this.matchingText = matchingText;
  this.positionAfter = positionAfter;
  return;
}
function Primer(re$$5, name$$30) {
  this.re = re$$5;
  this.name = name$$30;
  return;
}
function pcrProductSorter(a, b) {
  var v708 = a.sequence;
  var v576 = v708.length;
  var v709 = b.sequence;
  var v577 = v709.length;
  var v329 = v576 < v577;
  if (v329) {
    return 1;
  }
  var v710 = a.sequence;
  var v578 = v710.length;
  var v711 = b.sequence;
  var v579 = v711.length;
  var v330 = v578 > v579;
  if (v330) {
    return-1;
  } else {
    return 0;
  }
  return;
}
JAM.new(PcrProduct, ["", 0, 0, "", "", "", "", ""], JAM.policy.p23);
var v331 = PcrProduct.prototype;
v331.writeProduct = writeProduct;
JAM.set(document, "onload", v2);
var v332 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p22);
JAM.set(v332, "onclick", v3);
var v333 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p22);
JAM.set(v333, "onclick", v4)

JAM.stopProfile('load');
