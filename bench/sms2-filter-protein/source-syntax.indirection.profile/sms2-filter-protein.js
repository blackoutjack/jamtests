
JAM.startProfile('load');
function v4() {
  var v557 = document.forms;
  introspect(JAM.policy.p26) {
    var v475 = v557[0]
  }
  var v289 = v475.elements;
  introspect(JAM.policy.p26) {
    var v5 = v289[0]
  }
  v5.value = " ";
  return;
}
function v3() {
  try {
    JAM.call(filterProtein, null, [document], JAM.policy.p38);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    JAM.call(alert, null, [v6], JAM.policy.p38);
  }
  return;
}
function v2() {
  var v290 = document.main_form;
  var v7 = v290.main_submit;
  JAM.call(v7.focus, v7, [], JAM.policy.p41);
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p40);
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  introspect(JAM.policy.p26) {
    var v8 = arrayOfSequences[0]
  }
  var lengthOfAlign = v8.length;
  var v291 = arrayOfSequences.length;
  var v9 = v291 < 2;
  if (v9) {
    JAM.call(alert, null, ["Please enter an alignment consisting of at least two sequences."], JAM.policy.p22);
    return false;
  }
  var i$$1 = 0;
  var v292 = arrayOfTitles.length;
  var v11 = i$$1 < v292;
  for (;v11;) {
    introspect(JAM.policy.p26) {
      var v614 = arrayOfTitles[i$$1]
    }
    var v558 = JAM.call(v614.search, v614, [/\S/], JAM.policy.p38);
    var v476 = v558 == -1;
    var v560 = !v476;
    if (v560) {
      introspect(JAM.policy.p26) {
        var v615 = arrayOfSequences[i$$1]
      }
      var v559 = JAM.call(v615.search, v615, [/\S/], JAM.policy.p38);
      v476 = v559 == -1;
    }
    var v293 = v476;
    var v478 = !v293;
    if (v478) {
      introspect(JAM.policy.p26) {
        var v561 = arrayOfSequences[i$$1]
      }
      var v477 = v561.length;
      v293 = v477 != lengthOfAlign;
    }
    var v10 = v293;
    if (v10) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$1 = i$$1 + 1;
    var v294 = arrayOfTitles.length;
    v11 = i$$1 < v294;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v653 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p38);
  var v616 = v653 == -1;
  var v655 = !v616;
  if (v655) {
    var v654 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p38);
    v616 = v654 == -1;
  }
  var v562 = v616;
  var v618 = !v562;
  if (v618) {
    var v617 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p38);
    v562 = v617 == -1;
  }
  var v479 = v562;
  var v564 = !v479;
  if (v564) {
    var v563 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p38);
    v479 = v563 == -1;
  }
  var v295 = v479;
  var v481 = !v295;
  if (v481) {
    var v480 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p38);
    v295 = v480 == -1;
  }
  var v12 = v295;
  if (v12) {
    JAM.call(alert, null, ["The codon table has been entered incorrectly."], JAM.policy.p22);
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v482 = formElement.value;
  var v296 = JAM.call(v482.search, v482, [/\S/], JAM.policy.p38);
  var v13 = v296 == -1;
  if (v13) {
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
  var v297 = arrayOfPatterns.length;
  var v16 = z$$2 < v297;
  for (;v16;) {
    introspect(JAM.policy.p26) {
      var v483 = arrayOfPatterns[z$$2]
    }
    var v298 = JAM.call(v483.search, v483, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p38);
    var v14 = v298 == -1;
    if (v14) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v484 = arrayOfPatterns[z$$2]
    }
    var v299 = JAM.call(moreExpressionCheck, null, [v484], JAM.policy.p38);
    var v15 = v299 == false;
    if (v15) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$2 = z$$2 + 1;
    var v300 = arrayOfPatterns.length;
    v16 = z$$2 < v300;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = JAM.new(Array, [v17], JAM.policy.p38);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = JAM.new(Array, [v18], JAM.policy.p38);
  var j = 0;
  var v301 = arrayOfPatterns.length;
  var v25 = j < v301;
  for (;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAM.policy.p26) {
      var v565 = arrayOfPatterns[j]
    }
    var v485 = JAM.call(v565.match, v565, [/\/.+\//], JAM.policy.p38);
    var v302 = v485 + "gi";
    if (JAM.isEval(eval)) {
      var v758 = eval("introspect(JAM.policy.pFull) { " + v302 + " }")
    } else {
      var v758 = JAM.call(eval, null, [v302])
    }
    introspect(JAM.policy.p27) {
      v19[v20] = v758;
    }
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAM.policy.p26) {
      var v486 = arrayOfPatterns[j]
    }
    var v303 = JAM.call(v486.match, v486, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v759 = JAM.call(v303.toString, v303, [], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v21[v22] = v759;
    }
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAM.policy.p26) {
      var v304 = geneticCodeMatchResult[j]
    }
    var v760 = JAM.call(v304.replace, v304, [/=/g, ""], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v23[v24] = v760;
    }
    j = j + 1;
    var v305 = arrayOfPatterns.length;
    v25 = j < v305;
  }
  var i$$2 = 0;
  var v487 = testSequence.length;
  var v306 = v487 - 3;
  var v32 = i$$2 <= v306;
  for (;v32;) {
    var v26 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v26], JAM.policy.p40);
    j = 0;
    var v307 = geneticCodeMatchExp.length;
    var v30 = j < v307;
    for (;v30;) {
      introspect(JAM.policy.p26) {
        var v488 = geneticCodeMatchExp[j]
      }
      var v308 = JAM.call(codon.search, codon, [v488], JAM.policy.p38);
      var v29 = v308 != -1;
      if (v29) {
        var v28 = oneMatch == true;
        if (v28) {
          var v309 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v309 + ".";
          JAM.call(alert, null, [v27], JAM.policy.p38);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      var v310 = geneticCodeMatchExp.length;
      v30 = j < v310;
    }
    var v31 = oneMatch == false;
    if (v31) {
      JAM.call(alert, null, ["The genetic code expressions are missing a codon."], JAM.policy.p22);
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v489 = testSequence.length;
    var v311 = v489 - 3;
    v32 = i$$2 <= v311;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v312 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v312;
  for (;v34;) {
    introspect(JAM.policy.p26) {
      var v490 = arrayOfPatterns$$1[z$$3]
    }
    var v313 = JAM.call(v490.search, v490, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p38);
    var v33 = v313 != -1;
    if (v33) {
      JAM.call(alert, null, ["One or more groups have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$3 = z$$3 + 1;
    var v314 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v314;
  }
  var i$$3 = 0;
  var v315 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v315;
  for (;v38;) {
    introspect(JAM.policy.p26) {
      var v491 = arrayOfPatterns$$1[i$$3]
    }
    var v316 = "[" + v491;
    var v35 = v316 + "]";
    var re = JAM.new(RegExp, [v35, "gi"], JAM.policy.p39);
    var j$$1 = i$$3 + 1;
    var v317 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v317;
    for (;v37;) {
      introspect(JAM.policy.p26) {
        var v492 = arrayOfPatterns$$1[j$$1]
      }
      var v318 = JAM.call(v492.search, v492, [re], JAM.policy.p38);
      var v36 = v318 != -1;
      if (v36) {
        JAM.call(alert, null, ["The same amino acid is in more than one similarity group."], JAM.policy.p22);
        return false;
      }
      j$$1 = j$$1 + 1;
      var v319 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v319;
    }
    i$$3 = i$$3 + 1;
    var v320 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v320;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v321 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v321;
  for (;v41;) {
    introspect(JAM.policy.p26) {
      var v493 = arrayOfPatterns$$2[z$$4]
    }
    var v322 = JAM.call(v493.search, v493, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p38);
    var v39 = v322 == -1;
    if (v39) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v494 = arrayOfPatterns$$2[z$$4]
    }
    var v323 = JAM.call(moreExpressionCheck, null, [v494], JAM.policy.p38);
    var v40 = v323 == false;
    if (v40) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$4 = z$$4 + 1;
    var v324 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v324;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v566 = JAM.call(getSequenceFromFasta, null, [text$$7], JAM.policy.p38);
  var v495 = JAM.call(v566.replace, v566, [/[^A-Za-z]/g, ""], JAM.policy.p39);
  var v325 = v495.length;
  var v43 = v325 > maxInput;
  if (v43) {
    var v326 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v326 + " characters.";
    JAM.call(alert, null, [v42], JAM.policy.p38);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v327 = text$$8.length;
  var v45 = v327 > maxInput$$1;
  if (v45) {
    var v328 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v328 + " characters.";
    JAM.call(alert, null, [v44], JAM.policy.p38);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p39);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p39);
  return dnaSequence;
}
function closeForm() {
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</form>"], JAM.policy.p22);
  return true;
}
function closePre() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</div>"], JAM.policy.p22);
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</pre>\n"], JAM.policy.p22);
  return;
}
function closeTextArea() {
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</textarea>"], JAM.policy.p22);
  return true;
}
function closeWindow() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</body>\n</html>\n"], JAM.policy.p22);
  outputWindow.status = "Done.";
  var v51 = outputWindow.document;
  JAM.call(v51.close, v51, [], JAM.policy.p41);
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = JAM.call(sequence$$1.toLowerCase, sequence$$1, [], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p39);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p39);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p39);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p39);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p39);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p39);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p39);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p39);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p39);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p39);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p39);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p39);
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v329 = alignArray.length;
  var v52 = v329 < 3;
  if (v52) {
    JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
    return false;
  }
  var i$$4 = 1;
  var v330 = alignArray.length;
  var v54 = i$$4 < v330;
  for (;v54;) {
    introspect(JAM.policy.p26) {
      var v496 = alignArray[i$$4]
    }
    var v331 = JAM.call(v496.search, v496, [/[^\s]+\s/], JAM.policy.p38);
    var v53 = v331 == -1;
    if (v53) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$4 = i$$4 + 1;
    var v332 = alignArray.length;
    v54 = i$$4 < v332;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p39);
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p39);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p39);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p39);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p39);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = JAM.new(Array, [], JAM.policy.p41);
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v333 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38);
  var v57 = v333 != -1;
  if (v57) {
    var v56 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p38);
    for (;v56;) {
      introspect(JAM.policy.p26) {
        var v55 = matchArray[0]
      }
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v55], JAM.policy.p38);
      v56 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p38);
    }
  } else {
    introspect(JAM.policy.p27) {
      arrayOfFasta[0] = sequenceData;
    }
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v334 = sequence$$2.length;
  var v58 = "&gt;results for " + v334;
  var stringToReturn = v58 + " residue sequence ";
  var v335 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p38);
  var v60 = v335 != -1;
  if (v60) {
    var v336 = stringToReturn + '"';
    var v59 = v336 + fastaSequenceTitle;
    stringToReturn = v59 + '"';
  }
  var v337 = stringToReturn + ' starting "';
  var v338 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p24);
  var v61 = v337 + v338;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v339 = sequenceOne.length;
  var v62 = "Search results for " + v339;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v340 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p38);
  var v64 = v340 != -1;
  if (v64) {
    var v341 = stringToReturn$$1 + '"';
    var v63 = v341 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"';
  }
  var v342 = stringToReturn$$1 + ' starting "';
  var v343 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p24);
  var v65 = v342 + v343;
  stringToReturn$$1 = v65 + '"\n';
  var v344 = stringToReturn$$1 + "and ";
  var v345 = sequenceTwo.length;
  var v66 = v344 + v345;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v346 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p38);
  var v68 = v346 != -1;
  if (v68) {
    var v347 = stringToReturn$$1 + '"';
    var v67 = v347 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"';
  }
  var v348 = stringToReturn$$1 + ' starting "';
  var v349 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p24);
  var v69 = v348 + v349;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = JAM.new(Array, [v71], JAM.policy.p38);
  var j$$2 = 0;
  var v350 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v350;
  for (;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAM.policy.p26) {
      var v567 = arrayOfPatterns$$3[j$$2]
    }
    var v497 = JAM.call(v567.match, v567, [/\/.+\//], JAM.policy.p38);
    var v351 = v497 + "gi";
    if (JAM.isEval(eval)) {
      var v761 = eval("introspect(JAM.policy.pFull) { " + v351 + " }")
    } else {
      var v761 = JAM.call(eval, null, [v351])
    }
    introspect(JAM.policy.p27) {
      v72[v73] = v761;
    }
    j$$2 = j$$2 + 1;
    var v352 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v352;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = JAM.new(Array, [v75], JAM.policy.p38);
  var j$$3 = 0;
  var v353 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v353;
  for (;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAM.policy.p26) {
      var v498 = arrayOfPatterns$$4[j$$3]
    }
    var v354 = JAM.call(v498.match, v498, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v762 = JAM.call(v354.toString, v354, [], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v76[v77] = v762;
    }
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAM.policy.p26) {
      var v355 = geneticCodeMatchResult$$1[j$$3]
    }
    var v763 = JAM.call(v355.replace, v355, [/=/g, ""], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v78[v79] = v763;
    }
    j$$3 = j$$3 + 1;
    var v356 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v356;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v357 = sequence$$3.length;
  var v81 = "Results for " + v357;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v358 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p38);
  var v83 = v358 != -1;
  if (v83) {
    var v359 = stringToReturn$$2 + '"';
    var v82 = v359 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"';
  }
  var v360 = stringToReturn$$2 + ' starting "';
  var v361 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p24);
  var v84 = v360 + v361;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v499 = "Results for " + topology;
  var v362 = v499 + " ";
  var v363 = sequence$$4.length;
  var v86 = v362 + v363;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v364 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p38);
  var v88 = v364 != -1;
  if (v88) {
    var v365 = stringToReturn$$3 + '"';
    var v87 = v365 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"';
  }
  var v366 = stringToReturn$$3 + ' starting "';
  var v367 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p24);
  var v89 = v366 + v367;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v368 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v368;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v369 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p38);
  var v93 = v369 != -1;
  if (v93) {
    var v370 = stringToReturn$$4 + '"';
    var v92 = v370 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"';
  }
  var v371 = stringToReturn$$4 + ' starting "';
  var v372 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p24);
  var v94 = v371 + v372;
  stringToReturn$$4 = v94 + '"\n';
  var v373 = stringToReturn$$4 + "and ";
  var v374 = sequenceTwo$$1.length;
  var v95 = v373 + v374;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v375 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p38);
  var v97 = v375 != -1;
  if (v97) {
    var v376 = stringToReturn$$4 + '"';
    var v96 = v376 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"';
  }
  var v377 = stringToReturn$$4 + ' starting "';
  var v378 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p24);
  var v98 = v377 + v378;
  stringToReturn$$4 = v98 + '"';
  var v99 = '<div class="info">' + stringToReturn$$4;
  return v99 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = JAM.new(Array, [], JAM.policy.p41);
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v101 = j$$4 < lengthOut;
  for (;v101;) {
    var v379 = JAM.call(Math.random, Math, [], JAM.policy.p41);
    var v380 = components.length;
    var v100 = v379 * v380;
    tempNum = JAM.call(Math.floor, Math, [v100], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      tempChar = components[tempNum];
    }
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p38);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p22);
}
function getSequenceFromFasta(sequenceRecord) {
  var v381 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38);
  var v102 = v381 != -1;
  if (v102) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p39);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v382 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38);
  var v104 = v382 != -1;
  if (v104) {
    var v103 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p39);
    fastaTitle = JAM.call(v103.toString, v103, [], JAM.policy.p41);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p39);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p39);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p39);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v736 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p38);
  var v729 = v736 != -1;
  var v738 = !v729;
  if (v738) {
    var v737 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p38);
    v729 = v737 != -1;
  }
  var v720 = v729;
  var v731 = !v720;
  if (v731) {
    var v730 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p38);
    v720 = v730 != -1;
  }
  var v711 = v720;
  var v722 = !v711;
  if (v722) {
    var v721 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p38);
    v711 = v721 != -1;
  }
  var v696 = v711;
  var v713 = !v696;
  if (v713) {
    var v712 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p38);
    v696 = v712 != -1;
  }
  var v676 = v696;
  var v698 = !v676;
  if (v698) {
    var v697 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p38);
    v676 = v697 != -1;
  }
  var v656 = v676;
  var v678 = !v656;
  if (v678) {
    var v677 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p38);
    v656 = v677 != -1;
  }
  var v619 = v656;
  var v658 = !v619;
  if (v658) {
    var v657 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p38);
    v619 = v657 != -1;
  }
  var v568 = v619;
  var v621 = !v568;
  if (v621) {
    var v620 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p38);
    v568 = v620 != -1;
  }
  var v500 = v568;
  var v570 = !v500;
  if (v570) {
    var v569 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p38);
    v500 = v569 != -1;
  }
  var v383 = v500;
  var v502 = !v383;
  if (v502) {
    var v501 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p38);
    v383 = v501 != -1;
  }
  var v105 = v383;
  if (v105) {
    return false;
  }
  return true;
}
function openForm() {
  var v106 = outputWindow.document;
  JAM.call(v106.write, v106, ['<form action="">\n'], JAM.policy.p22);
  return true;
}
function openPre() {
  var v107 = outputWindow.document;
  JAM.call(v107.write, v107, ["<pre>"], JAM.policy.p22);
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ['<div class="pre">'], JAM.policy.p22);
  return;
}
function openTextArea() {
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p22);
  return true;
}
function openWindow(title$$5) {
  JAM.call(_openWindow, null, [title$$5, true], JAM.policy.p39);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p23);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p41);
  var v110 = outputWindow.document;
  var v571 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v503 = v571 + "<head>\n";
  var v384 = v503 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v384 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v110.write, v110, [v111], JAM.policy.p38);
  if (isColor) {
    var v112 = outputWindow.document;
    var v751 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v747 = v751 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v743 = v747 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v739 = v743 + "div.info {font-weight: bold}\n";
    var v732 = v739 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v723 = v732 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v714 = v723 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v699 = v714 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v679 = v699 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v659 = v679 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v622 = v659 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v572 = v622 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v504 = v572 + "td.many {color: #000000}\n";
    var v385 = v504 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v385 + "</style>\n";
    JAM.call(v112.write, v112, [v113], JAM.policy.p38);
  } else {
    var v114 = outputWindow.document;
    var v755 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v752 = v755 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v748 = v752 + "div.title {display: none}\n";
    var v744 = v748 + "div.info {font-weight: bold}\n";
    var v740 = v744 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v733 = v740 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v724 = v733 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v715 = v724 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v700 = v715 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v680 = v700 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v660 = v680 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v623 = v660 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v573 = v623 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v505 = v573 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v386 = v505 + "img {display: none}\n";
    var v115 = v386 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p38);
  }
  var v116 = outputWindow.document;
  var v574 = "</head>\n" + '<body class="main">\n';
  var v506 = v574 + '<div class="title">';
  var v387 = v506 + title$$6;
  var v117 = v387 + " results</div>\n";
  JAM.call(v116.write, v116, [v117], JAM.policy.p38);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$7) {
  JAM.call(_openWindowAlign, null, [title$$7, true], JAM.policy.p39);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p23);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p41);
  var v118 = outputWindow.document;
  var v575 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v507 = v575 + "<head>\n";
  var v388 = v507 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v388 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v118.write, v118, [v119], JAM.policy.p38);
  if (isBackground) {
    var v120 = outputWindow.document;
    var v753 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v749 = v753 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v745 = v749 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v741 = v745 + "div.info {font-weight: bold}\n";
    var v734 = v741 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v725 = v734 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v716 = v725 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v701 = v716 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v681 = v701 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v661 = v681 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v624 = v661 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v576 = v624 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v508 = v576 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v389 = v508 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v389 + "</style>\n";
    JAM.call(v120.write, v120, [v121], JAM.policy.p38);
  } else {
    var v122 = outputWindow.document;
    var v757 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v756 = v757 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v754 = v756 + "div.title {display: none}\n";
    var v750 = v754 + "div.info {font-weight: bold}\n";
    var v746 = v750 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v742 = v746 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v735 = v742 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v726 = v735 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v717 = v726 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v702 = v717 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v682 = v702 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v662 = v682 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v625 = v662 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v577 = v625 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v509 = v577 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v390 = v509 + "img {display: none}\n";
    var v123 = v390 + "</style>\n";
    JAM.call(v122.write, v122, [v123], JAM.policy.p38);
  }
  var v124 = outputWindow.document;
  var v578 = "</head>\n" + '<body class="main">\n';
  var v510 = v578 + '<div class="title">';
  var v391 = v510 + title$$8;
  var v125 = v391 + " results</div>\n";
  JAM.call(v124.write, v124, [v125], JAM.policy.p38);
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p39);
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p39);
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p39);
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p39);
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p39);
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p39);
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p39);
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p39);
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p39);
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = JAM.new(Array, [], JAM.policy.p41);
  var v392 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p38);
  var v126 = v392 != -1;
  if (v126) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p38);
    tempDnaArray = JAM.call(tempDnaArray.reverse, tempDnaArray, [], JAM.policy.p41);
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p22);
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = JAM.call(theNumber.toString, theNumber, [], JAM.policy.p41);
  j$$5 = theNumber.length;
  var v127 = j$$5 < lengthOfColumn;
  for (;v127;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v127 = j$$5 < lengthOfColumn;
  }
  var v128 = tempString + theNumber;
  theNumber = v128 + " ";
  var v129 = sequenceToAppend + theNumber;
  sequenceToAppend = v129 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = JAM.new(Array, [], JAM.policy.p41);
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p38);
  introspect(JAM.policy.p26) {
    var v393 = testArray[0]
  }
  var v130 = v393 != testString;
  if (v130) {
    JAM.call(alert, null, ["Array object push method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v394 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p38);
  var v131 = v394 == -1;
  if (v131) {
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
  var v132 = !caughtException;
  if (v132) {
    JAM.call(alert, null, ["Exception handling not supported. See browser compatibility page."], JAM.policy.p22);
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p40);
  var v133 = testString != "1X2X3X";
  if (v133) {
    JAM.call(alert, null, ["Nested function in String replace method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  var testNum = 2489.8237;
  var v395 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p25);
  var v134 = v395 != 2489.824;
  if (v134) {
    JAM.call(alert, null, ["Number toFixed() method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  var v396 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p25);
  var v135 = v396 != 2489.8;
  if (v135) {
    JAM.call(alert, null, ["Number toPrecision() method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v397 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p38);
  var v136 = v397 == -1;
  if (v136) {
    JAM.call(alert, null, ["Please enter a number"], JAM.policy.p22);
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v626 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p38);
  var v579 = v626 == -1;
  var v628 = !v579;
  if (v628) {
    var v627 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p38);
    v579 = v627 == -1;
  }
  var v511 = v579;
  var v581 = !v511;
  if (v581) {
    var v580 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p38);
    v511 = v580 == -1;
  }
  var v398 = v511;
  var v513 = !v398;
  if (v513) {
    var v512 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p38);
    v398 = v512 == -1;
  }
  var v137 = v398;
  if (v137) {
    JAM.call(alert, null, ["Please enter the contents of an EMBL file."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v399 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p38);
  var v138 = v399 == -1;
  if (v138) {
    JAM.call(alert, null, ["Please enter a number."], JAM.policy.p22);
    return false;
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if (v140) {
    var v400 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v400 + ".";
    JAM.call(alert, null, [v139], JAM.policy.p38);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v401 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p38);
  var v141 = v401 != -1;
  if (v141) {
    JAM.call(alert, null, ["The sequence contains non-DNA characters, which will be omitted."], JAM.policy.p22);
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v402 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p38);
  var v142 = v402 != -1;
  if (v142) {
    JAM.call(alert, null, ["The sequence contains non-protein characters, which will be omitted."], JAM.policy.p22);
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v629 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p38);
  var v582 = v629 == -1;
  var v631 = !v582;
  if (v631) {
    var v630 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p38);
    v582 = v630 == -1;
  }
  var v514 = v582;
  var v584 = !v514;
  if (v584) {
    var v583 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p38);
    v514 = v583 == -1;
  }
  var v403 = v514;
  var v516 = !v403;
  if (v516) {
    var v515 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p38);
    v403 = v515 == -1;
  }
  var v143 = v403;
  if (v143) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v632 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p38);
  var v585 = v632 == -1;
  var v634 = !v585;
  if (v634) {
    var v633 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p38);
    v585 = v633 == -1;
  }
  var v517 = v585;
  var v587 = !v517;
  if (v587) {
    var v586 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p38);
    v517 = v586 == -1;
  }
  var v404 = v517;
  var v519 = !v404;
  if (v519) {
    var v518 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p38);
    v404 = v518 == -1;
  }
  var v144 = v404;
  if (v144) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p22);
    return false;
  }
  var v405 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p38);
  var v145 = v405 == -1;
  if (v145) {
    JAM.call(alert, null, ["The file has no defined features."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v635 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p38);
  var v588 = v635 == -1;
  var v637 = !v588;
  if (v637) {
    var v636 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p38);
    v588 = v636 == -1;
  }
  var v520 = v588;
  var v590 = !v520;
  if (v590) {
    var v589 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p38);
    v520 = v589 == -1;
  }
  var v406 = v520;
  var v522 = !v406;
  if (v522) {
    var v521 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p38);
    v406 = v521 == -1;
  }
  var v146 = v406;
  if (v146) {
    JAM.call(alert, null, ["Please enter the contents of an EMBL file."], JAM.policy.p22);
    return false;
  }
  var v407 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p38);
  var v147 = v407 == -1;
  if (v147) {
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
  var v155 = i$$5 < stopBase;
  for (;v155;) {
    var v148 = i$$5 + 1;
    lineOfText = JAM.call(rightNum, null, [v148, lineOfText, 8, tabIn$$1], JAM.policy.p40);
    var j$$6 = 1;
    var v408 = basePerLine / groupSize;
    var v152 = j$$6 <= v408;
    for (;v152;) {
      var v151 = k < groupSize;
      for (;v151;) {
        var v149 = lineOfText;
        var v409 = k + i$$5;
        var v150 = JAM.call(text$$10.charAt, text$$10, [v409], JAM.policy.p38);
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v410 = basePerLine / groupSize;
      v152 = j$$6 <= v410;
    }
    var v153 = outputWindow.document;
    var v154 = lineOfText + "\n";
    JAM.call(v153.write, v153, [v154], JAM.policy.p38);
    lineOfText = "";
    v155 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  JAM.call(writeGroupNumDnaSetStart, null, [text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0], JAM.policy.p40);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v411 = adjustment < 0;
    if (v411) {
      v411 = adjusted >= 0;
    }
    var v156 = v411;
    if (v156) {
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
  var v189 = i$$6 < stopBase$$2;
  for (;v189;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v412 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v412;
    for (;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for (;v160;) {
        var v413 = i$$6 + k$$1;
        var v157 = v413 >= stopBase$$2;
        if (v157) {
          break;
        }
        var v158 = lineOfText$$1;
        var v414 = k$$1 + i$$6;
        var v159 = JAM.call(text$$12.charAt, text$$12, [v414], JAM.policy.p38);
        lineOfText$$1 = v158 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if (v163) {
        var v161 = aboveNum;
        var v415 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40);
        var v162 = JAM.call(rightNum, null, [v415, "", groupSize$$2, tabIn$$3], JAM.policy.p39);
        aboveNum = v161 + v162;
      }
      var v164 = i$$6 >= stopBase$$2;
      if (v164) {
        break;
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v416 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v416;
    }
    var v188 = numberPosition$$1 == "left";
    if (v188) {
      var v166 = outputWindow.document;
      var v591 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p40);
      var v523 = JAM.call(rightNum, null, [v591, "", 8, tabIn$$3], JAM.policy.p39);
      var v417 = v523 + lineOfText$$1;
      var v167 = v417 + "\n";
      JAM.call(v166.write, v166, [v167], JAM.policy.p38);
      var v171 = strands$$1 == "two";
      if (v171) {
        var v168 = outputWindow.document;
        var v592 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p40);
        var v524 = JAM.call(rightNum, null, [v592, "", 8, tabIn$$3], JAM.policy.p39);
        var v525 = JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38);
        var v418 = v524 + v525;
        var v169 = v418 + "\n";
        JAM.call(v168.write, v168, [v169], JAM.policy.p38);
        var v170 = outputWindow.document;
        JAM.call(v170.write, v170, ["\n"], JAM.policy.p22);
      }
    } else {
      var v187 = numberPosition$$1 == "right";
      if (v187) {
        var v172 = outputWindow.document;
        var v526 = lineOfText$$1;
        var v527 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40);
        var v419 = v526 + v527;
        var v173 = v419 + "\n";
        JAM.call(v172.write, v172, [v173], JAM.policy.p38);
        var v177 = strands$$1 == "two";
        if (v177) {
          var v174 = outputWindow.document;
          var v528 = JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38);
          var v529 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40);
          var v420 = v528 + v529;
          var v175 = v420 + "\n";
          JAM.call(v174.write, v174, [v175], JAM.policy.p38);
          var v176 = outputWindow.document;
          JAM.call(v176.write, v176, ["\n"], JAM.policy.p22);
        }
      } else {
        var v186 = numberPosition$$1 == "above";
        if (v186) {
          var v178 = outputWindow.document;
          var v179 = aboveNum + "\n";
          JAM.call(v178.write, v178, [v179], JAM.policy.p38);
          var v180 = outputWindow.document;
          var v181 = lineOfText$$1 + "\n";
          JAM.call(v180.write, v180, [v181], JAM.policy.p38);
          var v185 = strands$$1 == "two";
          if (v185) {
            var v182 = outputWindow.document;
            var v421 = JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38);
            var v183 = v421 + "\n";
            JAM.call(v182.write, v182, [v183], JAM.policy.p38);
            var v184 = outputWindow.document;
            JAM.call(v184.write, v184, ["\n"], JAM.policy.p22);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v189 = i$$6 < stopBase$$2;
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
  var v210 = i$$7 < stopBase$$3;
  for (;v210;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v422 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v422;
    for (;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for (;v193;) {
        var v423 = i$$7 + k$$2;
        var v190 = v423 >= stopBase$$3;
        if (v190) {
          break;
        }
        var v191 = lineOfText$$2;
        var v424 = k$$2 + i$$7;
        var v192 = JAM.call(text$$13.charAt, text$$13, [v424], JAM.policy.p38);
        lineOfText$$2 = v191 + v192;
        k$$2 = k$$2 + 1;
        v193 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v196 = numberPosition$$2 == "above";
      if (v196) {
        var v194 = aboveNum$$1;
        var v195 = JAM.call(rightNum, null, [i$$7, "", groupSize$$3, tabIn$$4], JAM.policy.p39);
        aboveNum$$1 = v194 + v195;
      }
      var v197 = i$$7 >= stopBase$$3;
      if (v197) {
        break;
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v425 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v425;
    }
    var v209 = numberPosition$$2 == "left";
    if (v209) {
      var v199 = outputWindow.document;
      var v530 = JAM.call(rightNum, null, [lineNum$$1, "", 8, tabIn$$4], JAM.policy.p39);
      var v426 = v530 + lineOfText$$2;
      var v200 = v426 + "\n";
      JAM.call(v199.write, v199, [v200], JAM.policy.p38);
    } else {
      var v208 = numberPosition$$2 == "right";
      if (v208) {
        var v201 = outputWindow.document;
        var v427 = lineOfText$$2 + i$$7;
        var v202 = v427 + "\n";
        JAM.call(v201.write, v201, [v202], JAM.policy.p38);
      } else {
        var v207 = numberPosition$$2 == "above";
        if (v207) {
          var v203 = outputWindow.document;
          var v204 = aboveNum$$1 + "\n";
          JAM.call(v203.write, v203, [v204], JAM.policy.p38);
          var v205 = outputWindow.document;
          var v206 = lineOfText$$2 + "\n";
          JAM.call(v205.write, v205, [v206], JAM.policy.p38);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v210 = i$$7 < stopBase$$3;
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
  var v593 = sequence$$13.length;
  var v531 = v593 <= firstIndexToMutate;
  var v594 = !v531;
  if (v594) {
    v531 = lastIndexToMutate < 0;
  }
  var v428 = v531;
  var v532 = !v428;
  if (v532) {
    v428 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v211 = v428;
  if (v211) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for (;v219;) {
    maxNum = sequence$$13.length;
    var v429 = JAM.call(Math.random, Math, [], JAM.policy.p41);
    var v212 = v429 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v212], JAM.policy.p38);
    var v430 = randNum < firstIndexToMutate;
    var v533 = !v430;
    if (v533) {
      v430 = randNum > lastIndexToMutate;
    }
    var v213 = v430;
    if (v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p38);
    needNewChar = true;
    for (;needNewChar;) {
      var v431 = JAM.call(Math.random, Math, [], JAM.policy.p41);
      var v432 = components$$1.length;
      var v214 = v431 * v432;
      componentsIndex = JAM.call(Math.round, Math, [v214], JAM.policy.p38);
      var v433 = components$$1.length;
      var v215 = componentsIndex == v433;
      if (v215) {
        componentsIndex = 0;
      }
      introspect(JAM.policy.p26) {
        var v434 = components$$1[componentsIndex]
      }
      var v216 = v434 != currentChar;
      if (v216) {
        needNewChar = false;
      }
    }
    var v435 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p24);
    introspect(JAM.policy.p26) {
      var v436 = components$$1[componentsIndex]
    }
    var v217 = v435 + v436;
    var v437 = randNum + 1;
    var v438 = sequence$$13.length;
    var v218 = JAM.call(sequence$$13.substring, sequence$$13, [v437, v438], JAM.policy.p40);
    sequence$$13 = v217 + v218;
    i$$8 = i$$8 + 1;
    v219 = i$$8 < numMut;
  }
  var v220 = outputWindow.document;
  var v221 = JAM.call(addReturns, null, [sequence$$13], JAM.policy.p38);
  JAM.call(v220.write, v220, [v221], JAM.policy.p38);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v226 = j$$9 < lengthOut$$1;
  for (;v226;) {
    var v439 = JAM.call(Math.random, Math, [], JAM.policy.p41);
    var v440 = components$$2.length;
    var v222 = v439 * v440;
    tempNum$$1 = JAM.call(Math.floor, Math, [v222], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v441 = sequence$$14.length;
    var v225 = v441 == 60;
    if (v225) {
      var v223 = outputWindow.document;
      var v224 = sequence$$14 + "\n";
      JAM.call(v223.write, v223, [v224], JAM.policy.p38);
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v226 = j$$9 < lengthOut$$1;
  }
  var v227 = outputWindow.document;
  var v228 = sequence$$14 + "\n";
  JAM.call(v227.write, v227, [v228], JAM.policy.p38);
  return true;
}
function writeRestrictionSites(sequence$$15, arrayOfItems, dnaConformation) {
  var resultArray = JAM.new(Array, [], JAM.policy.p41);
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
  var v232 = dnaConformation == "circular";
  if (v232) {
    var v229 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p24);
    shiftValue = v229.length;
    var v595 = sequence$$15.length;
    var v534 = v595 - lookAhead;
    var v535 = sequence$$15.length;
    var v442 = JAM.call(sequence$$15.substring, sequence$$15, [v534, v535], JAM.policy.p40);
    var v230 = v442 + sequence$$15;
    var v231 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p24);
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v233 = outputWindow.document;
  JAM.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p22);
  var v234 = outputWindow.document;
  var v596 = '<tr><td class="title" width="200px">' + "Site:";
  var v536 = v596 + '</td><td class="title">';
  var v443 = v536 + "Positions:";
  var v235 = v443 + "</td></tr>\n";
  JAM.call(v234.write, v234, [v235], JAM.policy.p38);
  var i$$9 = 0;
  var v444 = arrayOfItems.length;
  var v251 = i$$9 < v444;
  for (;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v445 = arrayOfItems[i$$9]
    }
    var v236 = JAM.call(v445.match, v445, [/\/.+\//], JAM.policy.p38);
    matchExp = v236 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    introspect(JAM.policy.p26) {
      var v597 = arrayOfItems[i$$9]
    }
    var v537 = JAM.call(v597.match, v597, [/\)\D*\d+/], JAM.policy.p38);
    var v446 = JAM.call(v537.toString, v537, [], JAM.policy.p41);
    var v237 = JAM.call(v446.replace, v446, [/\)\D*/, ""], JAM.policy.p39);
    cutDistance = JAM.call(parseFloat, null, [v237], JAM.policy.p38);
    var v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    for (;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v447 = matchPosition >= lowerLimit;
      if (v447) {
        v447 = matchPosition < upperLimit;
      }
      var v241 = v447;
      if (v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v448 = matchPosition - shiftValue;
        var v240 = v448 + 1;
        tempString$$1 = v239 + v240;
      }
      var v449 = matchExp.lastIndex;
      var v538 = RegExp.lastMatch;
      var v450 = v538.length;
      var v242 = v449 - v450;
      matchExp.lastIndex = v242 + 1;
      v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    }
    var v451 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p38);
    var v244 = v451 != -1;
    if (v244) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p39);
    }
    var v248 = timesFound == 0;
    if (v248) {
      backGroundClass = "none";
    } else {
      var v247 = timesFound == 1;
      if (v247) {
        backGroundClass = "one";
      } else {
        var v246 = timesFound == 2;
        if (v246) {
          backGroundClass = "two";
        } else {
          var v245 = timesFound == 3;
          if (v245) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v249 = outputWindow.document;
    var v703 = '<tr><td class="' + backGroundClass;
    var v683 = v703 + '">';
    introspect(JAM.policy.p26) {
      var v727 = arrayOfItems[i$$9]
    }
    var v718 = JAM.call(v727.match, v727, [/\([^\(]+\)/], JAM.policy.p38);
    var v704 = JAM.call(v718.toString, v718, [], JAM.policy.p41);
    var v684 = JAM.call(v704.replace, v704, [/\(|\)/g, ""], JAM.policy.p39);
    var v663 = v683 + v684;
    var v638 = v663 + '</td><td class="';
    var v598 = v638 + backGroundClass;
    var v539 = v598 + '">';
    var v452 = v539 + tempString$$1;
    var v250 = v452 + "</td></tr>\n";
    JAM.call(v249.write, v249, [v250], JAM.policy.p38);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v453 = arrayOfItems.length;
    v251 = i$$9 < v453;
  }
  var v252 = outputWindow.document;
  JAM.call(v252.write, v252, ["</tbody></table>\n"], JAM.policy.p22);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v253 = outputWindow.document;
  JAM.call(v253.write, v253, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p22);
  var v254 = outputWindow.document;
  var v664 = '<tr><td class="title">' + "Pattern:";
  var v639 = v664 + '</td><td class="title">';
  var v599 = v639 + "Times found:";
  var v540 = v599 + '</td><td class="title">';
  var v454 = v540 + "Percentage:";
  var v255 = v454 + "</td></tr>\n";
  JAM.call(v254.write, v254, [v255], JAM.policy.p38);
  var i$$10 = 0;
  var v455 = arrayOfItems$$1.length;
  var v264 = i$$10 < v455;
  for (;v264;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v456 = arrayOfItems$$1[i$$10]
    }
    var v256 = JAM.call(v456.match, v456, [/\/[^\/]+\//], JAM.policy.p38);
    var matchExp$$1 = v256 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v457 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p38);
    var v258 = v457 != -1;
    if (v258) {
      var v257 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p38);
      tempNumber = v257.length;
    }
    var percentage = 0;
    var v541 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v640 = arrayOfItems$$1[i$$10]
    }
    var v600 = JAM.call(v640.match, v640, [/\d+/], JAM.policy.p38);
    var v542 = JAM.call(parseFloat, null, [v600], JAM.policy.p38);
    var v458 = v541 - v542;
    var v261 = v458 > 0;
    if (v261) {
      var v259 = 100 * tempNumber;
      var v459 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v601 = arrayOfItems$$1[i$$10]
      }
      var v543 = JAM.call(v601.match, v601, [/\d+/], JAM.policy.p38);
      var v460 = JAM.call(parseFloat, null, [v543], JAM.policy.p38);
      var v260 = v459 - v460;
      percentage = v259 / v260;
    }
    var v262 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v728 = arrayOfItems$$1[i$$10]
    }
    var v719 = JAM.call(v728.match, v728, [/\([^\(]+\)\b/], JAM.policy.p38);
    var v705 = JAM.call(v719.toString, v719, [], JAM.policy.p41);
    var v685 = JAM.call(v705.replace, v705, [/\(|\)/g, ""], JAM.policy.p39);
    var v665 = "<tr><td>" + v685;
    var v641 = v665 + "</td><td>";
    var v602 = v641 + tempNumber;
    var v544 = v602 + "</td><td>";
    var v545 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p25);
    var v461 = v544 + v545;
    var v263 = v461 + "</td></tr>\n";
    JAM.call(v262.write, v262, [v263], JAM.policy.p38);
    i$$10 = i$$10 + 1;
    var v462 = arrayOfItems$$1.length;
    v264 = i$$10 < v462;
  }
  var v265 = outputWindow.document;
  JAM.call(v265.write, v265, ["</tbody></table>\n"], JAM.policy.p22);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v463 = sequence$$17.length;
  var v272 = v463 > 0;
  for (;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v464 = JAM.call(Math.random, Math, [], JAM.policy.p41);
    var v266 = v464 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v266], JAM.policy.p38);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p38);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p24);
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v267, v268], JAM.policy.p40);
    sequence$$17 = tempString1 + tempString2;
    var v465 = tempSeq.length;
    var v271 = v465 == 60;
    if (v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      JAM.call(v269.write, v269, [v270], JAM.policy.p38);
      tempSeq = "";
    }
    var v466 = sequence$$17.length;
    v272 = v466 > 0;
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  JAM.call(v273.write, v273, [v274], JAM.policy.p38);
  return true;
}
function filterProtein(theDocument) {
  var newProtein = "";
  var maxInput$$3 = 5E5;
  var v467 = JAM.call(testScript, null, [], JAM.policy.p41);
  var v275 = v467 == false;
  if (v275) {
    return false;
  }
  var v686 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v666 = v686[0]
  }
  var v642 = v666.elements;
  introspect(JAM.policy.p26) {
    var v603 = v642[0]
  }
  var v546 = JAM.call(checkFormElement, null, [v603], JAM.policy.p38);
  var v468 = v546 == false;
  var v548 = !v468;
  if (v548) {
    var v706 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v687 = v706[0]
    }
    var v667 = v687.elements;
    introspect(JAM.policy.p26) {
      var v643 = v667[0]
    }
    var v604 = v643.value;
    var v547 = JAM.call(checkTextLength, null, [v604, maxInput$$3], JAM.policy.p40);
    v468 = v547 == false;
  }
  var v276 = v468;
  if (v276) {
    return false;
  }
  var v688 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v668 = v688[0]
  }
  var v644 = v668.elements;
  introspect(JAM.policy.p26) {
    var v605 = v644[4]
  }
  var v549 = v605.options;
  var v689 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v669 = v689[0]
  }
  var v645 = v669.elements;
  introspect(JAM.policy.p26) {
    var v606 = v645[4]
  }
  var v550 = v606.selectedIndex;
  introspect(JAM.policy.p26) {
    var v469 = v549[v550]
  }
  var v277 = v469.value;
  var re$$3 = JAM.new(RegExp, [v277, "g"], JAM.policy.p39);
  var v646 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v607 = v646[0]
  }
  var v551 = v607.elements;
  introspect(JAM.policy.p26) {
    var v470 = v551[0]
  }
  var v278 = v470.value;
  var v690 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v670 = v690[0]
  }
  var v647 = v670.elements;
  introspect(JAM.policy.p26) {
    var v608 = v647[5]
  }
  var v552 = v608.options;
  var v691 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v671 = v691[0]
  }
  var v648 = v671.elements;
  introspect(JAM.policy.p26) {
    var v609 = v648[5]
  }
  var v553 = v609.selectedIndex;
  introspect(JAM.policy.p26) {
    var v471 = v552[v553]
  }
  var v279 = v471.value;
  newProtein = JAM.call(v278.replace, v278, [re$$3, v279], JAM.policy.p40);
  var v707 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v692 = v707[0]
  }
  var v672 = v692.elements;
  introspect(JAM.policy.p26) {
    var v649 = v672[6]
  }
  var v610 = v649.options;
  var v708 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v693 = v708[0]
  }
  var v673 = v693.elements;
  introspect(JAM.policy.p26) {
    var v650 = v673[6]
  }
  var v611 = v650.selectedIndex;
  introspect(JAM.policy.p26) {
    var v554 = v610[v611]
  }
  var v472 = v554.value;
  var v281 = v472 == "uppercase";
  if (v281) {
    newProtein = JAM.call(newProtein.toUpperCase, newProtein, [], JAM.policy.p41);
  } else {
    var v709 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v694 = v709[0]
    }
    var v674 = v694.elements;
    introspect(JAM.policy.p26) {
      var v651 = v674[6]
    }
    var v612 = v651.options;
    var v710 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v695 = v710[0]
    }
    var v675 = v695.elements;
    introspect(JAM.policy.p26) {
      var v652 = v675[6]
    }
    var v613 = v652.selectedIndex;
    introspect(JAM.policy.p26) {
      var v555 = v612[v613]
    }
    var v473 = v555.value;
    var v280 = v473 == "lowercase";
    if (v280) {
      newProtein = JAM.call(newProtein.toLowerCase, newProtein, [], JAM.policy.p41);
    }
  }
  JAM.call(openWindow, null, ["Filter Protein"], JAM.policy.p22);
  JAM.call(openPre, null, [], JAM.policy.p41);
  var v282 = outputWindow.document;
  var v556 = newProtein.length;
  var v474 = "&gt;filtered protein sequence consisting of " + v556;
  var v283 = v474 + " residues.\n";
  JAM.call(v282.write, v282, [v283], JAM.policy.p38);
  var v284 = outputWindow.document;
  var v285 = JAM.call(addReturns, null, [newProtein], JAM.policy.p38);
  JAM.call(v284.write, v284, [v285], JAM.policy.p38);
  var v286 = outputWindow.document;
  JAM.call(v286.write, v286, ["\n"], JAM.policy.p22);
  JAM.call(closePre, null, [], JAM.policy.p41);
  JAM.call(closeWindow, null, [], JAM.policy.p41);
  return true;
}
JAM.set(document, "onload", v2);
var v287 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p22);
JAM.set(v287, "onclick", v3);
var v288 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p22);
JAM.set(v288, "onclick", v4)

JAM.stopProfile('load');
