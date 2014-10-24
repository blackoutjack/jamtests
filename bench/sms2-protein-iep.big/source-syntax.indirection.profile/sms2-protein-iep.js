
JAM.startProfile('load');
function v4() {
  var v597 = document.forms;
  introspect(JAM.policy.p26) {
    var v511 = v597[0]
  }
  var v313 = v511.elements;
  introspect(JAM.policy.p26) {
    var v5 = v313[0]
  }
  v5.value = " ";
  return;
}
function v3() {
  try {
    JAM.call(proteinIep, null, [document], JAM.policy.p38);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    JAM.call(alert, null, [v6], JAM.policy.p38);
  }
  return;
}
function v2() {
  var v314 = document.main_form;
  var v7 = v314.main_submit;
  JAM.call(v7.focus, v7, [], JAM.policy.p39);
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
  var v315 = arrayOfSequences.length;
  var v9 = v315 < 2;
  if (v9) {
    JAM.call(alert, null, ["Please enter an alignment consisting of at least two sequences."], JAM.policy.p22);
    return false;
  }
  var i$$1 = 0;
  var v316 = arrayOfTitles.length;
  var v11 = i$$1 < v316;
  for (;v11;) {
    introspect(JAM.policy.p26) {
      var v656 = arrayOfTitles[i$$1]
    }
    var v598 = JAM.call(v656.search, v656, [/\S/], JAM.policy.p38);
    var v512 = v598 == -1;
    var v600 = !v512;
    if (v600) {
      introspect(JAM.policy.p26) {
        var v657 = arrayOfSequences[i$$1]
      }
      var v599 = JAM.call(v657.search, v657, [/\S/], JAM.policy.p38);
      v512 = v599 == -1;
    }
    var v317 = v512;
    var v514 = !v317;
    if (v514) {
      introspect(JAM.policy.p26) {
        var v601 = arrayOfSequences[i$$1]
      }
      var v513 = v601.length;
      v317 = v513 != lengthOfAlign;
    }
    var v10 = v317;
    if (v10) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$1 = i$$1 + 1;
    var v318 = arrayOfTitles.length;
    v11 = i$$1 < v318;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v697 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p38);
  var v658 = v697 == -1;
  var v699 = !v658;
  if (v699) {
    var v698 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p38);
    v658 = v698 == -1;
  }
  var v602 = v658;
  var v660 = !v602;
  if (v660) {
    var v659 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p38);
    v602 = v659 == -1;
  }
  var v515 = v602;
  var v604 = !v515;
  if (v604) {
    var v603 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p38);
    v515 = v603 == -1;
  }
  var v319 = v515;
  var v517 = !v319;
  if (v517) {
    var v516 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p38);
    v319 = v516 == -1;
  }
  var v12 = v319;
  if (v12) {
    JAM.call(alert, null, ["The codon table has been entered incorrectly."], JAM.policy.p22);
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v518 = formElement.value;
  var v320 = JAM.call(v518.search, v518, [/\S/], JAM.policy.p38);
  var v13 = v320 == -1;
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
  var v321 = arrayOfPatterns.length;
  var v16 = z$$2 < v321;
  for (;v16;) {
    introspect(JAM.policy.p26) {
      var v519 = arrayOfPatterns[z$$2]
    }
    var v322 = JAM.call(v519.search, v519, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p38);
    var v14 = v322 == -1;
    if (v14) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v520 = arrayOfPatterns[z$$2]
    }
    var v323 = JAM.call(moreExpressionCheck, null, [v520], JAM.policy.p38);
    var v15 = v323 == false;
    if (v15) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$2 = z$$2 + 1;
    var v324 = arrayOfPatterns.length;
    v16 = z$$2 < v324;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = JAM.new(Array, [v17], JAM.policy.p38);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = JAM.new(Array, [v18], JAM.policy.p38);
  var j = 0;
  var v325 = arrayOfPatterns.length;
  var v25 = j < v325;
  for (;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAM.policy.p26) {
      var v605 = arrayOfPatterns[j]
    }
    var v521 = JAM.call(v605.match, v605, [/\/.+\//], JAM.policy.p38);
    var v326 = v521 + "gi";
    if (JAM.isEval(eval)) {
      var v808 = eval("introspect(JAM.policy.pFull) { " + v326 + " }")
    } else {
      var v808 = JAM.call(eval, null, [v326])
    }
    introspect(JAM.policy.p27) {
      v19[v20] = v808;
    }
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAM.policy.p26) {
      var v522 = arrayOfPatterns[j]
    }
    var v327 = JAM.call(v522.match, v522, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v809 = JAM.call(v327.toString, v327, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v21[v22] = v809;
    }
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAM.policy.p26) {
      var v328 = geneticCodeMatchResult[j]
    }
    var v810 = JAM.call(v328.replace, v328, [/=/g, ""], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v23[v24] = v810;
    }
    j = j + 1;
    var v329 = arrayOfPatterns.length;
    v25 = j < v329;
  }
  var i$$2 = 0;
  var v523 = testSequence.length;
  var v330 = v523 - 3;
  var v32 = i$$2 <= v330;
  for (;v32;) {
    var v26 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v26], JAM.policy.p40);
    j = 0;
    var v331 = geneticCodeMatchExp.length;
    var v30 = j < v331;
    for (;v30;) {
      introspect(JAM.policy.p26) {
        var v524 = geneticCodeMatchExp[j]
      }
      var v332 = JAM.call(codon.search, codon, [v524], JAM.policy.p38);
      var v29 = v332 != -1;
      if (v29) {
        var v28 = oneMatch == true;
        if (v28) {
          var v333 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v333 + ".";
          JAM.call(alert, null, [v27], JAM.policy.p38);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      var v334 = geneticCodeMatchExp.length;
      v30 = j < v334;
    }
    var v31 = oneMatch == false;
    if (v31) {
      JAM.call(alert, null, ["The genetic code expressions are missing a codon."], JAM.policy.p22);
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v525 = testSequence.length;
    var v335 = v525 - 3;
    v32 = i$$2 <= v335;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v336 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v336;
  for (;v34;) {
    introspect(JAM.policy.p26) {
      var v526 = arrayOfPatterns$$1[z$$3]
    }
    var v337 = JAM.call(v526.search, v526, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p38);
    var v33 = v337 != -1;
    if (v33) {
      JAM.call(alert, null, ["One or more groups have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$3 = z$$3 + 1;
    var v338 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v338;
  }
  var i$$3 = 0;
  var v339 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v339;
  for (;v38;) {
    introspect(JAM.policy.p26) {
      var v527 = arrayOfPatterns$$1[i$$3]
    }
    var v340 = "[" + v527;
    var v35 = v340 + "]";
    var re = JAM.new(RegExp, [v35, "gi"], JAM.policy.p41);
    var j$$1 = i$$3 + 1;
    var v341 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v341;
    for (;v37;) {
      introspect(JAM.policy.p26) {
        var v528 = arrayOfPatterns$$1[j$$1]
      }
      var v342 = JAM.call(v528.search, v528, [re], JAM.policy.p38);
      var v36 = v342 != -1;
      if (v36) {
        JAM.call(alert, null, ["The same amino acid is in more than one similarity group."], JAM.policy.p22);
        return false;
      }
      j$$1 = j$$1 + 1;
      var v343 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v343;
    }
    i$$3 = i$$3 + 1;
    var v344 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v344;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v345 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v345;
  for (;v41;) {
    introspect(JAM.policy.p26) {
      var v529 = arrayOfPatterns$$2[z$$4]
    }
    var v346 = JAM.call(v529.search, v529, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p38);
    var v39 = v346 == -1;
    if (v39) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v530 = arrayOfPatterns$$2[z$$4]
    }
    var v347 = JAM.call(moreExpressionCheck, null, [v530], JAM.policy.p38);
    var v40 = v347 == false;
    if (v40) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$4 = z$$4 + 1;
    var v348 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v348;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v606 = JAM.call(getSequenceFromFasta, null, [text$$7], JAM.policy.p38);
  var v531 = JAM.call(v606.replace, v606, [/[^A-Za-z]/g, ""], JAM.policy.p41);
  var v349 = v531.length;
  var v43 = v349 > maxInput;
  if (v43) {
    var v350 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v350 + " characters.";
    JAM.call(alert, null, [v42], JAM.policy.p38);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v351 = text$$8.length;
  var v45 = v351 > maxInput$$1;
  if (v45) {
    var v352 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v352 + " characters.";
    JAM.call(alert, null, [v44], JAM.policy.p38);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p41);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p41);
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
  JAM.call(v51.close, v51, [], JAM.policy.p39);
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = JAM.call(sequence$$1.toLowerCase, sequence$$1, [], JAM.policy.p39);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p41);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p41);
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v353 = alignArray.length;
  var v52 = v353 < 3;
  if (v52) {
    JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
    return false;
  }
  var i$$4 = 1;
  var v354 = alignArray.length;
  var v54 = i$$4 < v354;
  for (;v54;) {
    introspect(JAM.policy.p26) {
      var v532 = alignArray[i$$4]
    }
    var v355 = JAM.call(v532.search, v532, [/[^\s]+\s/], JAM.policy.p38);
    var v53 = v355 == -1;
    if (v53) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$4 = i$$4 + 1;
    var v356 = alignArray.length;
    v54 = i$$4 < v356;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p41);
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p41);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p41);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p41);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p41);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = JAM.new(Array, [], JAM.policy.p39);
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v357 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38);
  var v57 = v357 != -1;
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
  var v358 = sequence$$2.length;
  var v58 = "&gt;results for " + v358;
  var stringToReturn = v58 + " residue sequence ";
  var v359 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p38);
  var v60 = v359 != -1;
  if (v60) {
    var v360 = stringToReturn + '"';
    var v59 = v360 + fastaSequenceTitle;
    stringToReturn = v59 + '"';
  }
  var v361 = stringToReturn + ' starting "';
  var v362 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p24);
  var v61 = v361 + v362;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v363 = sequenceOne.length;
  var v62 = "Search results for " + v363;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v364 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p38);
  var v64 = v364 != -1;
  if (v64) {
    var v365 = stringToReturn$$1 + '"';
    var v63 = v365 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"';
  }
  var v366 = stringToReturn$$1 + ' starting "';
  var v367 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p24);
  var v65 = v366 + v367;
  stringToReturn$$1 = v65 + '"\n';
  var v368 = stringToReturn$$1 + "and ";
  var v369 = sequenceTwo.length;
  var v66 = v368 + v369;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v370 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p38);
  var v68 = v370 != -1;
  if (v68) {
    var v371 = stringToReturn$$1 + '"';
    var v67 = v371 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"';
  }
  var v372 = stringToReturn$$1 + ' starting "';
  var v373 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p24);
  var v69 = v372 + v373;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = JAM.new(Array, [v71], JAM.policy.p38);
  var j$$2 = 0;
  var v374 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v374;
  for (;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAM.policy.p26) {
      var v607 = arrayOfPatterns$$3[j$$2]
    }
    var v533 = JAM.call(v607.match, v607, [/\/.+\//], JAM.policy.p38);
    var v375 = v533 + "gi";
    if (JAM.isEval(eval)) {
      var v811 = eval("introspect(JAM.policy.pFull) { " + v375 + " }")
    } else {
      var v811 = JAM.call(eval, null, [v375])
    }
    introspect(JAM.policy.p27) {
      v72[v73] = v811;
    }
    j$$2 = j$$2 + 1;
    var v376 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v376;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = JAM.new(Array, [v75], JAM.policy.p38);
  var j$$3 = 0;
  var v377 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v377;
  for (;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAM.policy.p26) {
      var v534 = arrayOfPatterns$$4[j$$3]
    }
    var v378 = JAM.call(v534.match, v534, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v812 = JAM.call(v378.toString, v378, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v76[v77] = v812;
    }
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAM.policy.p26) {
      var v379 = geneticCodeMatchResult$$1[j$$3]
    }
    var v813 = JAM.call(v379.replace, v379, [/=/g, ""], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v78[v79] = v813;
    }
    j$$3 = j$$3 + 1;
    var v380 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v380;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v381 = sequence$$3.length;
  var v81 = "Results for " + v381;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v382 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p38);
  var v83 = v382 != -1;
  if (v83) {
    var v383 = stringToReturn$$2 + '"';
    var v82 = v383 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"';
  }
  var v384 = stringToReturn$$2 + ' starting "';
  var v385 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p24);
  var v84 = v384 + v385;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v535 = "Results for " + topology;
  var v386 = v535 + " ";
  var v387 = sequence$$4.length;
  var v86 = v386 + v387;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v388 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p38);
  var v88 = v388 != -1;
  if (v88) {
    var v389 = stringToReturn$$3 + '"';
    var v87 = v389 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"';
  }
  var v390 = stringToReturn$$3 + ' starting "';
  var v391 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p24);
  var v89 = v390 + v391;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v392 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v392;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v393 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p38);
  var v93 = v393 != -1;
  if (v93) {
    var v394 = stringToReturn$$4 + '"';
    var v92 = v394 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"';
  }
  var v395 = stringToReturn$$4 + ' starting "';
  var v396 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p24);
  var v94 = v395 + v396;
  stringToReturn$$4 = v94 + '"\n';
  var v397 = stringToReturn$$4 + "and ";
  var v398 = sequenceTwo$$1.length;
  var v95 = v397 + v398;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v399 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p38);
  var v97 = v399 != -1;
  if (v97) {
    var v400 = stringToReturn$$4 + '"';
    var v96 = v400 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"';
  }
  var v401 = stringToReturn$$4 + ' starting "';
  var v402 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p24);
  var v98 = v401 + v402;
  stringToReturn$$4 = v98 + '"';
  var v99 = '<div class="info">' + stringToReturn$$4;
  return v99 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = JAM.new(Array, [], JAM.policy.p39);
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v101 = j$$4 < lengthOut;
  for (;v101;) {
    var v403 = JAM.call(Math.random, Math, [], JAM.policy.p39);
    var v404 = components.length;
    var v100 = v403 * v404;
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
  var v405 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38);
  var v102 = v405 != -1;
  if (v102) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p41);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v406 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38);
  var v104 = v406 != -1;
  if (v104) {
    var v103 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p41);
    fastaTitle = JAM.call(v103.toString, v103, [], JAM.policy.p39);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p41);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p41);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p41);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v786 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p38);
  var v779 = v786 != -1;
  var v788 = !v779;
  if (v788) {
    var v787 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p38);
    v779 = v787 != -1;
  }
  var v770 = v779;
  var v781 = !v770;
  if (v781) {
    var v780 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p38);
    v770 = v780 != -1;
  }
  var v759 = v770;
  var v772 = !v759;
  if (v772) {
    var v771 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p38);
    v759 = v771 != -1;
  }
  var v744 = v759;
  var v761 = !v744;
  if (v761) {
    var v760 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p38);
    v744 = v760 != -1;
  }
  var v722 = v744;
  var v746 = !v722;
  if (v746) {
    var v745 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p38);
    v722 = v745 != -1;
  }
  var v700 = v722;
  var v724 = !v700;
  if (v724) {
    var v723 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p38);
    v700 = v723 != -1;
  }
  var v661 = v700;
  var v702 = !v661;
  if (v702) {
    var v701 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p38);
    v661 = v701 != -1;
  }
  var v608 = v661;
  var v663 = !v608;
  if (v663) {
    var v662 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p38);
    v608 = v662 != -1;
  }
  var v536 = v608;
  var v610 = !v536;
  if (v610) {
    var v609 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p38);
    v536 = v609 != -1;
  }
  var v407 = v536;
  var v538 = !v407;
  if (v538) {
    var v537 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p38);
    v407 = v537 != -1;
  }
  var v105 = v407;
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
function openWindow(title$$6) {
  JAM.call(_openWindow, null, [title$$6, true], JAM.policy.p41);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p23);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p39);
  var v110 = outputWindow.document;
  var v611 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v539 = v611 + "<head>\n";
  var v408 = v539 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v408 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v110.write, v110, [v111], JAM.policy.p38);
  if (isColor) {
    var v112 = outputWindow.document;
    var v801 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v797 = v801 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v793 = v797 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v789 = v793 + "div.info {font-weight: bold}\n";
    var v782 = v789 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v773 = v782 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v762 = v773 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v747 = v762 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v725 = v747 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v703 = v725 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v664 = v703 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v612 = v664 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v540 = v612 + "td.many {color: #000000}\n";
    var v409 = v540 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v409 + "</style>\n";
    JAM.call(v112.write, v112, [v113], JAM.policy.p38);
  } else {
    var v114 = outputWindow.document;
    var v805 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v802 = v805 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v798 = v802 + "div.title {display: none}\n";
    var v794 = v798 + "div.info {font-weight: bold}\n";
    var v790 = v794 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v783 = v790 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v774 = v783 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v763 = v774 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v748 = v763 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v726 = v748 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v704 = v726 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v665 = v704 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v613 = v665 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v541 = v613 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v410 = v541 + "img {display: none}\n";
    var v115 = v410 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p38);
  }
  var v116 = outputWindow.document;
  var v614 = "</head>\n" + '<body class="main">\n';
  var v542 = v614 + '<div class="title">';
  var v411 = v542 + title$$7;
  var v117 = v411 + " results</div>\n";
  JAM.call(v116.write, v116, [v117], JAM.policy.p38);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$8) {
  JAM.call(_openWindowAlign, null, [title$$8, true], JAM.policy.p41);
  return;
}
function _openWindowAlign(title$$9, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p23);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p39);
  var v118 = outputWindow.document;
  var v615 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v543 = v615 + "<head>\n";
  var v412 = v543 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v412 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v118.write, v118, [v119], JAM.policy.p38);
  if (isBackground) {
    var v120 = outputWindow.document;
    var v803 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v799 = v803 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v795 = v799 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v791 = v795 + "div.info {font-weight: bold}\n";
    var v784 = v791 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v775 = v784 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v764 = v775 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v749 = v764 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v727 = v749 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v705 = v727 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v666 = v705 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v616 = v666 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v544 = v616 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v413 = v544 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v413 + "</style>\n";
    JAM.call(v120.write, v120, [v121], JAM.policy.p38);
  } else {
    var v122 = outputWindow.document;
    var v807 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v806 = v807 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v804 = v806 + "div.title {display: none}\n";
    var v800 = v804 + "div.info {font-weight: bold}\n";
    var v796 = v800 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v792 = v796 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v785 = v792 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v776 = v785 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v765 = v776 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v750 = v765 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v728 = v750 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v706 = v728 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v667 = v706 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v617 = v667 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v545 = v617 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v414 = v545 + "img {display: none}\n";
    var v123 = v414 + "</style>\n";
    JAM.call(v122.write, v122, [v123], JAM.policy.p38);
  }
  var v124 = outputWindow.document;
  var v618 = "</head>\n" + '<body class="main">\n';
  var v546 = v618 + '<div class="title">';
  var v415 = v546 + title$$9;
  var v125 = v415 + " results</div>\n";
  JAM.call(v124.write, v124, [v125], JAM.policy.p38);
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p41);
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p41);
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p41);
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p41);
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p41);
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p41);
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p41);
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p41);
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p41);
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = JAM.new(Array, [], JAM.policy.p39);
  var v416 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p38);
  var v126 = v416 != -1;
  if (v126) {
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
  var testArray = JAM.new(Array, [], JAM.policy.p39);
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p38);
  introspect(JAM.policy.p26) {
    var v417 = testArray[0]
  }
  var v130 = v417 != testString;
  if (v130) {
    JAM.call(alert, null, ["Array object push method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v418 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p38);
  var v131 = v418 == -1;
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
  var v419 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p25);
  var v134 = v419 != 2489.824;
  if (v134) {
    JAM.call(alert, null, ["Number toFixed() method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  var v420 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p25);
  var v135 = v420 != 2489.8;
  if (v135) {
    JAM.call(alert, null, ["Number toPrecision() method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v421 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p38);
  var v136 = v421 == -1;
  if (v136) {
    JAM.call(alert, null, ["Please enter a number"], JAM.policy.p22);
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v668 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p38);
  var v619 = v668 == -1;
  var v670 = !v619;
  if (v670) {
    var v669 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p38);
    v619 = v669 == -1;
  }
  var v547 = v619;
  var v621 = !v547;
  if (v621) {
    var v620 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p38);
    v547 = v620 == -1;
  }
  var v422 = v547;
  var v549 = !v422;
  if (v549) {
    var v548 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p38);
    v422 = v548 == -1;
  }
  var v137 = v422;
  if (v137) {
    JAM.call(alert, null, ["Please enter the contents of an EMBL file."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v423 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p38);
  var v138 = v423 == -1;
  if (v138) {
    JAM.call(alert, null, ["Please enter a number."], JAM.policy.p22);
    return false;
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if (v140) {
    var v424 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v424 + ".";
    JAM.call(alert, null, [v139], JAM.policy.p38);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v425 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p38);
  var v141 = v425 != -1;
  if (v141) {
    JAM.call(alert, null, ["The sequence contains non-DNA characters, which will be omitted."], JAM.policy.p22);
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v426 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p38);
  var v142 = v426 != -1;
  if (v142) {
    JAM.call(alert, null, ["The sequence contains non-protein characters, which will be omitted."], JAM.policy.p22);
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v671 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p38);
  var v622 = v671 == -1;
  var v673 = !v622;
  if (v673) {
    var v672 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p38);
    v622 = v672 == -1;
  }
  var v550 = v622;
  var v624 = !v550;
  if (v624) {
    var v623 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p38);
    v550 = v623 == -1;
  }
  var v427 = v550;
  var v552 = !v427;
  if (v552) {
    var v551 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p38);
    v427 = v551 == -1;
  }
  var v143 = v427;
  if (v143) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v674 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p38);
  var v625 = v674 == -1;
  var v676 = !v625;
  if (v676) {
    var v675 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p38);
    v625 = v675 == -1;
  }
  var v553 = v625;
  var v627 = !v553;
  if (v627) {
    var v626 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p38);
    v553 = v626 == -1;
  }
  var v428 = v553;
  var v555 = !v428;
  if (v555) {
    var v554 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p38);
    v428 = v554 == -1;
  }
  var v144 = v428;
  if (v144) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p22);
    return false;
  }
  var v429 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p38);
  var v145 = v429 == -1;
  if (v145) {
    JAM.call(alert, null, ["The file has no defined features."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v677 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p38);
  var v628 = v677 == -1;
  var v679 = !v628;
  if (v679) {
    var v678 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p38);
    v628 = v678 == -1;
  }
  var v556 = v628;
  var v630 = !v556;
  if (v630) {
    var v629 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p38);
    v556 = v629 == -1;
  }
  var v430 = v556;
  var v558 = !v430;
  if (v558) {
    var v557 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p38);
    v430 = v557 == -1;
  }
  var v146 = v430;
  if (v146) {
    JAM.call(alert, null, ["Please enter the contents of an EMBL file."], JAM.policy.p22);
    return false;
  }
  var v431 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p38);
  var v147 = v431 == -1;
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
    var v432 = basePerLine / groupSize;
    var v152 = j$$6 <= v432;
    for (;v152;) {
      var v151 = k < groupSize;
      for (;v151;) {
        var v149 = lineOfText;
        var v433 = k + i$$5;
        var v150 = JAM.call(text$$10.charAt, text$$10, [v433], JAM.policy.p38);
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v434 = basePerLine / groupSize;
      v152 = j$$6 <= v434;
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
    var v435 = adjustment < 0;
    if (v435) {
      v435 = adjusted >= 0;
    }
    var v156 = v435;
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
    var v436 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v436;
    for (;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for (;v160;) {
        var v437 = i$$6 + k$$1;
        var v157 = v437 >= stopBase$$2;
        if (v157) {
          break;
        }
        var v158 = lineOfText$$1;
        var v438 = k$$1 + i$$6;
        var v159 = JAM.call(text$$12.charAt, text$$12, [v438], JAM.policy.p38);
        lineOfText$$1 = v158 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if (v163) {
        var v161 = aboveNum;
        var v439 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40);
        var v162 = JAM.call(rightNum, null, [v439, "", groupSize$$2, tabIn$$3], JAM.policy.p41);
        aboveNum = v161 + v162;
      }
      var v164 = i$$6 >= stopBase$$2;
      if (v164) {
        break;
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v440 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v440;
    }
    var v188 = numberPosition$$1 == "left";
    if (v188) {
      var v166 = outputWindow.document;
      var v631 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p40);
      var v559 = JAM.call(rightNum, null, [v631, "", 8, tabIn$$3], JAM.policy.p41);
      var v441 = v559 + lineOfText$$1;
      var v167 = v441 + "\n";
      JAM.call(v166.write, v166, [v167], JAM.policy.p38);
      var v171 = strands$$1 == "two";
      if (v171) {
        var v168 = outputWindow.document;
        var v632 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p40);
        var v560 = JAM.call(rightNum, null, [v632, "", 8, tabIn$$3], JAM.policy.p41);
        var v561 = JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38);
        var v442 = v560 + v561;
        var v169 = v442 + "\n";
        JAM.call(v168.write, v168, [v169], JAM.policy.p38);
        var v170 = outputWindow.document;
        JAM.call(v170.write, v170, ["\n"], JAM.policy.p22);
      }
    } else {
      var v187 = numberPosition$$1 == "right";
      if (v187) {
        var v172 = outputWindow.document;
        var v562 = lineOfText$$1;
        var v563 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40);
        var v443 = v562 + v563;
        var v173 = v443 + "\n";
        JAM.call(v172.write, v172, [v173], JAM.policy.p38);
        var v177 = strands$$1 == "two";
        if (v177) {
          var v174 = outputWindow.document;
          var v564 = JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38);
          var v565 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40);
          var v444 = v564 + v565;
          var v175 = v444 + "\n";
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
            var v445 = JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38);
            var v183 = v445 + "\n";
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
    var v446 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v446;
    for (;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for (;v193;) {
        var v447 = i$$7 + k$$2;
        var v190 = v447 >= stopBase$$3;
        if (v190) {
          break;
        }
        var v191 = lineOfText$$2;
        var v448 = k$$2 + i$$7;
        var v192 = JAM.call(text$$13.charAt, text$$13, [v448], JAM.policy.p38);
        lineOfText$$2 = v191 + v192;
        k$$2 = k$$2 + 1;
        v193 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v196 = numberPosition$$2 == "above";
      if (v196) {
        var v194 = aboveNum$$1;
        var v195 = JAM.call(rightNum, null, [i$$7, "", groupSize$$3, tabIn$$4], JAM.policy.p41);
        aboveNum$$1 = v194 + v195;
      }
      var v197 = i$$7 >= stopBase$$3;
      if (v197) {
        break;
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v449 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v449;
    }
    var v209 = numberPosition$$2 == "left";
    if (v209) {
      var v199 = outputWindow.document;
      var v566 = JAM.call(rightNum, null, [lineNum$$1, "", 8, tabIn$$4], JAM.policy.p41);
      var v450 = v566 + lineOfText$$2;
      var v200 = v450 + "\n";
      JAM.call(v199.write, v199, [v200], JAM.policy.p38);
    } else {
      var v208 = numberPosition$$2 == "right";
      if (v208) {
        var v201 = outputWindow.document;
        var v451 = lineOfText$$2 + i$$7;
        var v202 = v451 + "\n";
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
  var v633 = sequence$$13.length;
  var v567 = v633 <= firstIndexToMutate;
  var v634 = !v567;
  if (v634) {
    v567 = lastIndexToMutate < 0;
  }
  var v452 = v567;
  var v568 = !v452;
  if (v568) {
    v452 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v211 = v452;
  if (v211) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for (;v219;) {
    maxNum = sequence$$13.length;
    var v453 = JAM.call(Math.random, Math, [], JAM.policy.p39);
    var v212 = v453 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v212], JAM.policy.p38);
    var v454 = randNum < firstIndexToMutate;
    var v569 = !v454;
    if (v569) {
      v454 = randNum > lastIndexToMutate;
    }
    var v213 = v454;
    if (v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p38);
    needNewChar = true;
    for (;needNewChar;) {
      var v455 = JAM.call(Math.random, Math, [], JAM.policy.p39);
      var v456 = components$$1.length;
      var v214 = v455 * v456;
      componentsIndex = JAM.call(Math.round, Math, [v214], JAM.policy.p38);
      var v457 = components$$1.length;
      var v215 = componentsIndex == v457;
      if (v215) {
        componentsIndex = 0;
      }
      introspect(JAM.policy.p26) {
        var v458 = components$$1[componentsIndex]
      }
      var v216 = v458 != currentChar;
      if (v216) {
        needNewChar = false;
      }
    }
    var v459 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p24);
    introspect(JAM.policy.p26) {
      var v460 = components$$1[componentsIndex]
    }
    var v217 = v459 + v460;
    var v461 = randNum + 1;
    var v462 = sequence$$13.length;
    var v218 = JAM.call(sequence$$13.substring, sequence$$13, [v461, v462], JAM.policy.p40);
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
    var v463 = JAM.call(Math.random, Math, [], JAM.policy.p39);
    var v464 = components$$2.length;
    var v222 = v463 * v464;
    tempNum$$1 = JAM.call(Math.floor, Math, [v222], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v465 = sequence$$14.length;
    var v225 = v465 == 60;
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
  var v232 = dnaConformation == "circular";
  if (v232) {
    var v229 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p24);
    shiftValue = v229.length;
    var v635 = sequence$$15.length;
    var v570 = v635 - lookAhead;
    var v571 = sequence$$15.length;
    var v466 = JAM.call(sequence$$15.substring, sequence$$15, [v570, v571], JAM.policy.p40);
    var v230 = v466 + sequence$$15;
    var v231 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p24);
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v233 = outputWindow.document;
  JAM.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p22);
  var v234 = outputWindow.document;
  var v636 = '<tr><td class="title" width="200px">' + "Site:";
  var v572 = v636 + '</td><td class="title">';
  var v467 = v572 + "Positions:";
  var v235 = v467 + "</td></tr>\n";
  JAM.call(v234.write, v234, [v235], JAM.policy.p38);
  var i$$9 = 0;
  var v468 = arrayOfItems.length;
  var v251 = i$$9 < v468;
  for (;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v469 = arrayOfItems[i$$9]
    }
    var v236 = JAM.call(v469.match, v469, [/\/.+\//], JAM.policy.p38);
    matchExp = v236 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    introspect(JAM.policy.p26) {
      var v637 = arrayOfItems[i$$9]
    }
    var v573 = JAM.call(v637.match, v637, [/\)\D*\d+/], JAM.policy.p38);
    var v470 = JAM.call(v573.toString, v573, [], JAM.policy.p39);
    var v237 = JAM.call(v470.replace, v470, [/\)\D*/, ""], JAM.policy.p41);
    cutDistance = JAM.call(parseFloat, null, [v237], JAM.policy.p38);
    var v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    for (;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v471 = matchPosition >= lowerLimit;
      if (v471) {
        v471 = matchPosition < upperLimit;
      }
      var v241 = v471;
      if (v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v472 = matchPosition - shiftValue;
        var v240 = v472 + 1;
        tempString$$1 = v239 + v240;
      }
      var v473 = matchExp.lastIndex;
      var v574 = RegExp.lastMatch;
      var v474 = v574.length;
      var v242 = v473 - v474;
      matchExp.lastIndex = v242 + 1;
      v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    }
    var v475 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p38);
    var v244 = v475 != -1;
    if (v244) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p41);
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
    var v751 = '<tr><td class="' + backGroundClass;
    var v729 = v751 + '">';
    introspect(JAM.policy.p26) {
      var v777 = arrayOfItems[i$$9]
    }
    var v766 = JAM.call(v777.match, v777, [/\([^\(]+\)/], JAM.policy.p38);
    var v752 = JAM.call(v766.toString, v766, [], JAM.policy.p39);
    var v730 = JAM.call(v752.replace, v752, [/\(|\)/g, ""], JAM.policy.p41);
    var v707 = v729 + v730;
    var v680 = v707 + '</td><td class="';
    var v638 = v680 + backGroundClass;
    var v575 = v638 + '">';
    var v476 = v575 + tempString$$1;
    var v250 = v476 + "</td></tr>\n";
    JAM.call(v249.write, v249, [v250], JAM.policy.p38);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v477 = arrayOfItems.length;
    v251 = i$$9 < v477;
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
  var v708 = '<tr><td class="title">' + "Pattern:";
  var v681 = v708 + '</td><td class="title">';
  var v639 = v681 + "Times found:";
  var v576 = v639 + '</td><td class="title">';
  var v478 = v576 + "Percentage:";
  var v255 = v478 + "</td></tr>\n";
  JAM.call(v254.write, v254, [v255], JAM.policy.p38);
  var i$$10 = 0;
  var v479 = arrayOfItems$$1.length;
  var v264 = i$$10 < v479;
  for (;v264;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v480 = arrayOfItems$$1[i$$10]
    }
    var v256 = JAM.call(v480.match, v480, [/\/[^\/]+\//], JAM.policy.p38);
    var matchExp$$1 = v256 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v481 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p38);
    var v258 = v481 != -1;
    if (v258) {
      var v257 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p38);
      tempNumber = v257.length;
    }
    var percentage = 0;
    var v577 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v682 = arrayOfItems$$1[i$$10]
    }
    var v640 = JAM.call(v682.match, v682, [/\d+/], JAM.policy.p38);
    var v578 = JAM.call(parseFloat, null, [v640], JAM.policy.p38);
    var v482 = v577 - v578;
    var v261 = v482 > 0;
    if (v261) {
      var v259 = 100 * tempNumber;
      var v483 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v641 = arrayOfItems$$1[i$$10]
      }
      var v579 = JAM.call(v641.match, v641, [/\d+/], JAM.policy.p38);
      var v484 = JAM.call(parseFloat, null, [v579], JAM.policy.p38);
      var v260 = v483 - v484;
      percentage = v259 / v260;
    }
    var v262 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v778 = arrayOfItems$$1[i$$10]
    }
    var v767 = JAM.call(v778.match, v778, [/\([^\(]+\)\b/], JAM.policy.p38);
    var v753 = JAM.call(v767.toString, v767, [], JAM.policy.p39);
    var v731 = JAM.call(v753.replace, v753, [/\(|\)/g, ""], JAM.policy.p41);
    var v709 = "<tr><td>" + v731;
    var v683 = v709 + "</td><td>";
    var v642 = v683 + tempNumber;
    var v580 = v642 + "</td><td>";
    var v581 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p25);
    var v485 = v580 + v581;
    var v263 = v485 + "</td></tr>\n";
    JAM.call(v262.write, v262, [v263], JAM.policy.p38);
    i$$10 = i$$10 + 1;
    var v486 = arrayOfItems$$1.length;
    v264 = i$$10 < v486;
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
  var v487 = sequence$$17.length;
  var v272 = v487 > 0;
  for (;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v488 = JAM.call(Math.random, Math, [], JAM.policy.p39);
    var v266 = v488 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v266], JAM.policy.p38);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p38);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p24);
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v267, v268], JAM.policy.p40);
    sequence$$17 = tempString1 + tempString2;
    var v489 = tempSeq.length;
    var v271 = v489 == 60;
    if (v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      JAM.call(v269.write, v269, [v270], JAM.policy.p38);
      tempSeq = "";
    }
    var v490 = sequence$$17.length;
    v272 = v490 > 0;
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  JAM.call(v273.write, v273, [v274], JAM.policy.p38);
  return true;
}
function proteinIep(theDocument) {
  var newProtein = "";
  var maxInput$$3 = 2E5;
  var v491 = JAM.call(testScript, null, [], JAM.policy.p39);
  var v275 = v491 == false;
  if (v275) {
    return false;
  }
  var v732 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v710 = v732[0]
  }
  var v684 = v710.elements;
  introspect(JAM.policy.p26) {
    var v643 = v684[0]
  }
  var v582 = JAM.call(checkFormElement, null, [v643], JAM.policy.p38);
  var v492 = v582 == false;
  var v584 = !v492;
  if (v584) {
    var v754 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v733 = v754[0]
    }
    var v711 = v733.elements;
    introspect(JAM.policy.p26) {
      var v685 = v711[0]
    }
    var v644 = v685.value;
    var v583 = JAM.call(checkSequenceLength, null, [v644, maxInput$$3], JAM.policy.p40);
    v492 = v583 == false;
  }
  var v276 = v492;
  if (v276) {
    return false;
  }
  JAM.call(openWindow, null, ["Protein Isoelectric Point"], JAM.policy.p22);
  var v686 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v645 = v686[0]
  }
  var v585 = v645.elements;
  introspect(JAM.policy.p26) {
    var v493 = v585[0]
  }
  var v277 = v493.value;
  var arrayOfFasta$$1 = JAM.call(getArrayOfFasta, null, [v277], JAM.policy.p38);
  var i$$11 = 0;
  var v494 = arrayOfFasta$$1.length;
  var v286 = i$$11 < v494;
  for (;v286;) {
    introspect(JAM.policy.p26) {
      var v278 = arrayOfFasta$$1[i$$11]
    }
    newProtein = JAM.call(getSequenceFromFasta, null, [v278], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      var v279 = arrayOfFasta$$1[i$$11]
    }
    title = JAM.call(getTitleFromFasta, null, [v279], JAM.policy.p38);
    newProtein = JAM.call(removeNonProteinStrict, null, [newProtein], JAM.policy.p38);
    var v280 = outputWindow.document;
    var v281 = JAM.call(getInfoFromTitleAndSequence, null, [title, newProtein], JAM.policy.p40);
    JAM.call(v280.write, v280, [v281], JAM.policy.p38);
    var v734 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v712 = v734[0]
    }
    var v687 = v712.elements;
    introspect(JAM.policy.p26) {
      var v646 = v687[4]
    }
    var v586 = v646.options;
    var v735 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v713 = v735[0]
    }
    var v688 = v713.elements;
    introspect(JAM.policy.p26) {
      var v647 = v688[4]
    }
    var v587 = v647.selectedIndex;
    introspect(JAM.policy.p26) {
      var v495 = v586[v587]
    }
    var v282 = v495.value;
    var v736 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v714 = v736[0]
    }
    var v689 = v714.elements;
    introspect(JAM.policy.p26) {
      var v648 = v689[5]
    }
    var v588 = v648.options;
    var v737 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v715 = v737[0]
    }
    var v690 = v715.elements;
    introspect(JAM.policy.p26) {
      var v649 = v690[5]
    }
    var v589 = v649.selectedIndex;
    introspect(JAM.policy.p26) {
      var v496 = v588[v589]
    }
    var v283 = v496.value;
    var v738 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v716 = v738[0]
    }
    var v691 = v716.elements;
    introspect(JAM.policy.p26) {
      var v650 = v691[6]
    }
    var v590 = v650.options;
    var v739 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v717 = v739[0]
    }
    var v692 = v717.elements;
    introspect(JAM.policy.p26) {
      var v651 = v692[6]
    }
    var v591 = v651.selectedIndex;
    introspect(JAM.policy.p26) {
      var v497 = v590[v591]
    }
    var v284 = v497.value;
    JAM.call(writeProtIep, null, [newProtein, v282, v283, v284], JAM.policy.p40);
    var v285 = outputWindow.document;
    JAM.call(v285.write, v285, ["<br />\n<br />\n"], JAM.policy.p22);
    i$$11 = i$$11 + 1;
    var v498 = arrayOfFasta$$1.length;
    v286 = i$$11 < v498;
  }
  JAM.call(closeWindow, null, [], JAM.policy.p39);
  return true;
}
function writeProtIep(proteinSequence$$1, copies, fusion, pKSet) {
  var pH = 7;
  var step = 3.5;
  var charge = 0;
  var last_charge = 0;
  copies = JAM.call(parseInt, null, [copies], JAM.policy.p38);
  var j$$10 = 0;
  var v287 = j$$10 < copies;
  for (;v287;) {
    proteinSequence$$1 = proteinSequence$$1 + fusion;
    j$$10 = j$$10 + 1;
    v287 = j$$10 < copies;
  }
  var N_term_pK;
  var K_pK;
  var R_pK;
  var H_pK;
  var D_pK;
  var E_pK;
  var C_pK;
  var Y_pK;
  var C_term_pK;
  var v499 = JAM.call(pKSet.toLowerCase, pKSet, [], JAM.policy.p39);
  var v288 = v499 == "dtaselect";
  if (v288) {
    N_term_pK = 8;
    K_pK = 10;
    R_pK = 12;
    H_pK = 6.5;
    D_pK = 4.4;
    E_pK = 4.4;
    C_pK = 8.5;
    Y_pK = 10;
    C_term_pK = 3.1;
  } else {
    N_term_pK = 8.6;
    K_pK = 10.8;
    R_pK = 12.5;
    H_pK = 6.5;
    D_pK = 3.9;
    E_pK = 4.1;
    C_pK = 8.5;
    Y_pK = 10.1;
    C_term_pK = 3.6;
  }
  var K_count = 0;
  var v500 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/k/i], JAM.policy.p38);
  var v290 = v500 != -1;
  if (v290) {
    var v289 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/k/gi], JAM.policy.p38);
    K_count = v289.length;
  }
  var R_count = 0;
  var v501 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/r/i], JAM.policy.p38);
  var v292 = v501 != -1;
  if (v292) {
    var v291 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/r/gi], JAM.policy.p38);
    R_count = v291.length;
  }
  var H_count = 0;
  var v502 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/h/i], JAM.policy.p38);
  var v294 = v502 != -1;
  if (v294) {
    var v293 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/h/gi], JAM.policy.p38);
    H_count = v293.length;
  }
  var D_count = 0;
  var v503 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/d/i], JAM.policy.p38);
  var v296 = v503 != -1;
  if (v296) {
    var v295 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/d/gi], JAM.policy.p38);
    D_count = v295.length;
  }
  var E_count = 0;
  var v504 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/e/i], JAM.policy.p38);
  var v298 = v504 != -1;
  if (v298) {
    var v297 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/e/gi], JAM.policy.p38);
    E_count = v297.length;
  }
  var C_count = 0;
  var v505 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/c/i], JAM.policy.p38);
  var v300 = v505 != -1;
  if (v300) {
    var v299 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/c/gi], JAM.policy.p38);
    C_count = v299.length;
  }
  var Y_count = 0;
  var v506 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/y/i], JAM.policy.p38);
  var v302 = v506 != -1;
  if (v302) {
    var v301 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/y/gi], JAM.policy.p38);
    Y_count = v301.length;
  }
  for (;1;) {
    var v755 = JAM.call(partial_charge, null, [N_term_pK, pH], JAM.policy.p40);
    var v768 = K_count;
    var v769 = JAM.call(partial_charge, null, [K_pK, pH], JAM.policy.p40);
    var v756 = v768 * v769;
    var v740 = v755 + v756;
    var v757 = R_count;
    var v758 = JAM.call(partial_charge, null, [R_pK, pH], JAM.policy.p40);
    var v741 = v757 * v758;
    var v718 = v740 + v741;
    var v742 = H_count;
    var v743 = JAM.call(partial_charge, null, [H_pK, pH], JAM.policy.p40);
    var v719 = v742 * v743;
    var v693 = v718 + v719;
    var v720 = D_count;
    var v721 = JAM.call(partial_charge, null, [pH, D_pK], JAM.policy.p40);
    var v694 = v720 * v721;
    var v652 = v693 - v694;
    var v695 = E_count;
    var v696 = JAM.call(partial_charge, null, [pH, E_pK], JAM.policy.p40);
    var v653 = v695 * v696;
    var v592 = v652 - v653;
    var v654 = C_count;
    var v655 = JAM.call(partial_charge, null, [pH, C_pK], JAM.policy.p40);
    var v593 = v654 * v655;
    var v507 = v592 - v593;
    var v594 = Y_count;
    var v595 = JAM.call(partial_charge, null, [pH, Y_pK], JAM.policy.p40);
    var v508 = v594 * v595;
    var v303 = v507 - v508;
    var v304 = JAM.call(partial_charge, null, [pH, C_term_pK], JAM.policy.p40);
    charge = v303 - v304;
    var v509 = JAM.call(charge.toFixed, charge, [2], JAM.policy.p25);
    var v596 = last_charge * 100;
    var v510 = JAM.call(v596.toFixed, v596, [2], JAM.policy.p25);
    var v305 = v509 == v510;
    if (v305) {
      break;
    }
    var v306 = charge > 0;
    if (v306) {
      pH = pH + step;
    } else {
      pH = pH - step;
    }
    step = step / 2;
    last_charge = charge;
  }
  pH = JAM.call(pH.toFixed, pH, [2], JAM.policy.p25);
  var v307 = outputWindow.document;
  var v308 = "pH " + pH;
  JAM.call(v307.write, v307, [v308], JAM.policy.p38);
  return true;
}
function partial_charge(first$$1, second) {
  var v309 = first$$1 - second;
  var charge$$1 = JAM.call(Math.pow, Math, [10, v309], JAM.policy.p24);
  var v310 = charge$$1 + 1;
  return charge$$1 / v310;
}
JAM.set(document, "onload", v2);
var v311 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p22);
JAM.set(v311, "onclick", v3);
var v312 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p22);
JAM.set(v312, "onclick", v4)

JAM.stopProfile('load');
