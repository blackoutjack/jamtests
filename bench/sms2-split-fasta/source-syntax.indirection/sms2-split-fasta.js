function v4() {
  var v556 = document.forms;
  introspect(JAM.policy.p26) {
    var v477 = v556[0]
  }
  var v291 = v477.elements;
  introspect(JAM.policy.p26) {
    var v5 = v291[0]
  }
  v5.value = " ";
  return;
}
function v3() {
  try {
    JAM.call(splitFasta, null, [document], JAM.policy.p38);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    JAM.call(alert, null, [v6], JAM.policy.p38);
  }
  return;
}
function v2() {
  var v292 = document.main_form;
  var v7 = v292.main_submit;
  JAM.call(v7.focus, v7, [], JAM.policy.p39);
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
    var v8 = arrayOfSequences[0]
  }
  var lengthOfAlign = v8.length;
  var v293 = arrayOfSequences.length;
  var v9 = v293 < 2;
  if (v9) {
    JAM.call(alert, null, ["Please enter an alignment consisting of at least two sequences."], JAM.policy.p22);
    return false;
  }
  var i$$1 = 0;
  var v294 = arrayOfTitles.length;
  var v11 = i$$1 < v294;
  for (;v11;) {
    introspect(JAM.policy.p26) {
      var v609 = arrayOfTitles[i$$1]
    }
    var v557 = JAM.call(v609.search, v609, [/\S/], JAM.policy.p38);
    var v478 = v557 == -1;
    var v559 = !v478;
    if (v559) {
      introspect(JAM.policy.p26) {
        var v610 = arrayOfSequences[i$$1]
      }
      var v558 = JAM.call(v610.search, v610, [/\S/], JAM.policy.p38);
      v478 = v558 == -1;
    }
    var v295 = v478;
    var v480 = !v295;
    if (v480) {
      introspect(JAM.policy.p26) {
        var v560 = arrayOfSequences[i$$1]
      }
      var v479 = v560.length;
      v295 = v479 != lengthOfAlign;
    }
    var v10 = v295;
    if (v10) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$1 = i$$1 + 1;
    var v296 = arrayOfTitles.length;
    v11 = i$$1 < v296;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v644 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p38);
  var v611 = v644 == -1;
  var v646 = !v611;
  if (v646) {
    var v645 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p38);
    v611 = v645 == -1;
  }
  var v561 = v611;
  var v613 = !v561;
  if (v613) {
    var v612 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p38);
    v561 = v612 == -1;
  }
  var v481 = v561;
  var v563 = !v481;
  if (v563) {
    var v562 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p38);
    v481 = v562 == -1;
  }
  var v297 = v481;
  var v483 = !v297;
  if (v483) {
    var v482 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p38);
    v297 = v482 == -1;
  }
  var v12 = v297;
  if (v12) {
    JAM.call(alert, null, ["The codon table has been entered incorrectly."], JAM.policy.p22);
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v484 = formElement.value;
  var v298 = JAM.call(v484.search, v484, [/\S/], JAM.policy.p38);
  var v13 = v298 == -1;
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
  var v299 = arrayOfPatterns.length;
  var v16 = z$$2 < v299;
  for (;v16;) {
    introspect(JAM.policy.p26) {
      var v485 = arrayOfPatterns[z$$2]
    }
    var v300 = JAM.call(v485.search, v485, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p38);
    var v14 = v300 == -1;
    if (v14) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v486 = arrayOfPatterns[z$$2]
    }
    var v301 = JAM.call(moreExpressionCheck, null, [v486], JAM.policy.p38);
    var v15 = v301 == false;
    if (v15) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$2 = z$$2 + 1;
    var v302 = arrayOfPatterns.length;
    v16 = z$$2 < v302;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = JAM.new(Array, [v17], JAM.policy.p38);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = JAM.new(Array, [v18], JAM.policy.p38);
  var j = 0;
  var v303 = arrayOfPatterns.length;
  var v25 = j < v303;
  for (;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAM.policy.p26) {
      var v564 = arrayOfPatterns[j]
    }
    var v487 = JAM.call(v564.match, v564, [/\/.+\//], JAM.policy.p38);
    var v304 = v487 + "gi";
    if (JAM.isEval(eval)) {
      var v742 = eval("introspect(JAM.policy.pFull) { " + v304 + " }")
    } else {
      var v742 = JAM.call(eval, null, [v304])
    }
    introspect(JAM.policy.p27) {
      v19[v20] = v742;
    }
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAM.policy.p26) {
      var v488 = arrayOfPatterns[j]
    }
    var v305 = JAM.call(v488.match, v488, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v743 = JAM.call(v305.toString, v305, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v21[v22] = v743;
    }
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAM.policy.p26) {
      var v306 = geneticCodeMatchResult[j]
    }
    var v744 = JAM.call(v306.replace, v306, [/=/g, ""], JAM.policy.p40);
    introspect(JAM.policy.p27) {
      v23[v24] = v744;
    }
    j = j + 1;
    var v307 = arrayOfPatterns.length;
    v25 = j < v307;
  }
  var i$$2 = 0;
  var v489 = testSequence.length;
  var v308 = v489 - 3;
  var v32 = i$$2 <= v308;
  for (;v32;) {
    var v26 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v26], JAM.policy.p41);
    j = 0;
    var v309 = geneticCodeMatchExp.length;
    var v30 = j < v309;
    for (;v30;) {
      introspect(JAM.policy.p26) {
        var v490 = geneticCodeMatchExp[j]
      }
      var v310 = JAM.call(codon.search, codon, [v490], JAM.policy.p38);
      var v29 = v310 != -1;
      if (v29) {
        var v28 = oneMatch == true;
        if (v28) {
          var v311 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v311 + ".";
          JAM.call(alert, null, [v27], JAM.policy.p38);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      var v312 = geneticCodeMatchExp.length;
      v30 = j < v312;
    }
    var v31 = oneMatch == false;
    if (v31) {
      JAM.call(alert, null, ["The genetic code expressions are missing a codon."], JAM.policy.p22);
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v491 = testSequence.length;
    var v313 = v491 - 3;
    v32 = i$$2 <= v313;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v314 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v314;
  for (;v34;) {
    introspect(JAM.policy.p26) {
      var v492 = arrayOfPatterns$$1[z$$3]
    }
    var v315 = JAM.call(v492.search, v492, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p38);
    var v33 = v315 != -1;
    if (v33) {
      JAM.call(alert, null, ["One or more groups have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$3 = z$$3 + 1;
    var v316 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v316;
  }
  var i$$3 = 0;
  var v317 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v317;
  for (;v38;) {
    introspect(JAM.policy.p26) {
      var v493 = arrayOfPatterns$$1[i$$3]
    }
    var v318 = "[" + v493;
    var v35 = v318 + "]";
    var re = JAM.new(RegExp, [v35, "gi"], JAM.policy.p40);
    var j$$1 = i$$3 + 1;
    var v319 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v319;
    for (;v37;) {
      introspect(JAM.policy.p26) {
        var v494 = arrayOfPatterns$$1[j$$1]
      }
      var v320 = JAM.call(v494.search, v494, [re], JAM.policy.p38);
      var v36 = v320 != -1;
      if (v36) {
        JAM.call(alert, null, ["The same amino acid is in more than one similarity group."], JAM.policy.p22);
        return false;
      }
      j$$1 = j$$1 + 1;
      var v321 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v321;
    }
    i$$3 = i$$3 + 1;
    var v322 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v322;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v323 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v323;
  for (;v41;) {
    introspect(JAM.policy.p26) {
      var v495 = arrayOfPatterns$$2[z$$4]
    }
    var v324 = JAM.call(v495.search, v495, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p38);
    var v39 = v324 == -1;
    if (v39) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v496 = arrayOfPatterns$$2[z$$4]
    }
    var v325 = JAM.call(moreExpressionCheck, null, [v496], JAM.policy.p38);
    var v40 = v325 == false;
    if (v40) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$4 = z$$4 + 1;
    var v326 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v326;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v565 = JAM.call(getSequenceFromFasta, null, [text$$7], JAM.policy.p38);
  var v497 = JAM.call(v565.replace, v565, [/[^A-Za-z]/g, ""], JAM.policy.p40);
  var v327 = v497.length;
  var v43 = v327 > maxInput;
  if (v43) {
    var v328 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v328 + " characters.";
    JAM.call(alert, null, [v42], JAM.policy.p38);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v329 = text$$8.length;
  var v45 = v329 > maxInput$$1;
  if (v45) {
    var v330 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v330 + " characters.";
    JAM.call(alert, null, [v44], JAM.policy.p38);
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
  var v331 = alignArray.length;
  var v52 = v331 < 3;
  if (v52) {
    JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
    return false;
  }
  var i$$4 = 1;
  var v332 = alignArray.length;
  var v54 = i$$4 < v332;
  for (;v54;) {
    introspect(JAM.policy.p26) {
      var v498 = alignArray[i$$4]
    }
    var v333 = JAM.call(v498.search, v498, [/[^\s]+\s/], JAM.policy.p38);
    var v53 = v333 == -1;
    if (v53) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$4 = i$$4 + 1;
    var v334 = alignArray.length;
    v54 = i$$4 < v334;
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
  var v335 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38);
  var v57 = v335 != -1;
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
  var v336 = sequence$$2.length;
  var v58 = "&gt;results for " + v336;
  var stringToReturn = v58 + " residue sequence ";
  var v337 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p38);
  var v60 = v337 != -1;
  if (v60) {
    var v338 = stringToReturn + '"';
    var v59 = v338 + fastaSequenceTitle;
    stringToReturn = v59 + '"';
  }
  var v339 = stringToReturn + ' starting "';
  var v340 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p24);
  var v61 = v339 + v340;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v341 = sequenceOne.length;
  var v62 = "Search results for " + v341;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v342 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p38);
  var v64 = v342 != -1;
  if (v64) {
    var v343 = stringToReturn$$1 + '"';
    var v63 = v343 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"';
  }
  var v344 = stringToReturn$$1 + ' starting "';
  var v345 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p24);
  var v65 = v344 + v345;
  stringToReturn$$1 = v65 + '"\n';
  var v346 = stringToReturn$$1 + "and ";
  var v347 = sequenceTwo.length;
  var v66 = v346 + v347;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v348 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p38);
  var v68 = v348 != -1;
  if (v68) {
    var v349 = stringToReturn$$1 + '"';
    var v67 = v349 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"';
  }
  var v350 = stringToReturn$$1 + ' starting "';
  var v351 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p24);
  var v69 = v350 + v351;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = JAM.new(Array, [v71], JAM.policy.p38);
  var j$$2 = 0;
  var v352 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v352;
  for (;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAM.policy.p26) {
      var v566 = arrayOfPatterns$$3[j$$2]
    }
    var v499 = JAM.call(v566.match, v566, [/\/.+\//], JAM.policy.p38);
    var v353 = v499 + "gi";
    if (JAM.isEval(eval)) {
      var v745 = eval("introspect(JAM.policy.pFull) { " + v353 + " }")
    } else {
      var v745 = JAM.call(eval, null, [v353])
    }
    introspect(JAM.policy.p27) {
      v72[v73] = v745;
    }
    j$$2 = j$$2 + 1;
    var v354 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v354;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = JAM.new(Array, [v75], JAM.policy.p38);
  var j$$3 = 0;
  var v355 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v355;
  for (;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAM.policy.p26) {
      var v500 = arrayOfPatterns$$4[j$$3]
    }
    var v356 = JAM.call(v500.match, v500, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v746 = JAM.call(v356.toString, v356, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v76[v77] = v746;
    }
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAM.policy.p26) {
      var v357 = geneticCodeMatchResult$$1[j$$3]
    }
    var v747 = JAM.call(v357.replace, v357, [/=/g, ""], JAM.policy.p40);
    introspect(JAM.policy.p27) {
      v78[v79] = v747;
    }
    j$$3 = j$$3 + 1;
    var v358 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v358;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v359 = sequence$$3.length;
  var v81 = "Results for " + v359;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v360 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p38);
  var v83 = v360 != -1;
  if (v83) {
    var v361 = stringToReturn$$2 + '"';
    var v82 = v361 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"';
  }
  var v362 = stringToReturn$$2 + ' starting "';
  var v363 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p24);
  var v84 = v362 + v363;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v501 = "Results for " + topology;
  var v364 = v501 + " ";
  var v365 = sequence$$4.length;
  var v86 = v364 + v365;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v366 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p38);
  var v88 = v366 != -1;
  if (v88) {
    var v367 = stringToReturn$$3 + '"';
    var v87 = v367 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"';
  }
  var v368 = stringToReturn$$3 + ' starting "';
  var v369 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p24);
  var v89 = v368 + v369;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v370 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v370;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v371 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p38);
  var v93 = v371 != -1;
  if (v93) {
    var v372 = stringToReturn$$4 + '"';
    var v92 = v372 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"';
  }
  var v373 = stringToReturn$$4 + ' starting "';
  var v374 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p24);
  var v94 = v373 + v374;
  stringToReturn$$4 = v94 + '"\n';
  var v375 = stringToReturn$$4 + "and ";
  var v376 = sequenceTwo$$1.length;
  var v95 = v375 + v376;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v377 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p38);
  var v97 = v377 != -1;
  if (v97) {
    var v378 = stringToReturn$$4 + '"';
    var v96 = v378 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"';
  }
  var v379 = stringToReturn$$4 + ' starting "';
  var v380 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p24);
  var v98 = v379 + v380;
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
    var v381 = JAM.call(Math.random, Math, [], JAM.policy.p39);
    var v382 = components.length;
    var v100 = v381 * v382;
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
  var v383 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38);
  var v102 = v383 != -1;
  if (v102) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p40);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v384 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38);
  var v104 = v384 != -1;
  if (v104) {
    var v103 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p40);
    fastaTitle = JAM.call(v103.toString, v103, [], JAM.policy.p39);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p40);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p40);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p40);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v717 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p38);
  var v709 = v717 != -1;
  var v719 = !v709;
  if (v719) {
    var v718 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p38);
    v709 = v718 != -1;
  }
  var v698 = v709;
  var v711 = !v698;
  if (v711) {
    var v710 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p38);
    v698 = v710 != -1;
  }
  var v686 = v698;
  var v700 = !v686;
  if (v700) {
    var v699 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p38);
    v686 = v699 != -1;
  }
  var v673 = v686;
  var v688 = !v673;
  if (v688) {
    var v687 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p38);
    v673 = v687 != -1;
  }
  var v660 = v673;
  var v675 = !v660;
  if (v675) {
    var v674 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p38);
    v660 = v674 != -1;
  }
  var v647 = v660;
  var v662 = !v647;
  if (v662) {
    var v661 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p38);
    v647 = v661 != -1;
  }
  var v614 = v647;
  var v649 = !v614;
  if (v649) {
    var v648 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p38);
    v614 = v648 != -1;
  }
  var v567 = v614;
  var v616 = !v567;
  if (v616) {
    var v615 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p38);
    v567 = v615 != -1;
  }
  var v502 = v567;
  var v569 = !v502;
  if (v569) {
    var v568 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p38);
    v502 = v568 != -1;
  }
  var v385 = v502;
  var v504 = !v385;
  if (v504) {
    var v503 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p38);
    v385 = v503 != -1;
  }
  var v105 = v385;
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
  JAM.call(_openWindow, null, [title$$5, true], JAM.policy.p40);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p23);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p39);
  var v110 = outputWindow.document;
  var v570 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v505 = v570 + "<head>\n";
  var v386 = v505 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v386 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v110.write, v110, [v111], JAM.policy.p38);
  if (isColor) {
    var v112 = outputWindow.document;
    var v735 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v730 = v735 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v725 = v730 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v720 = v725 + "div.info {font-weight: bold}\n";
    var v712 = v720 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v701 = v712 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v689 = v701 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v676 = v689 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v663 = v676 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v650 = v663 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v617 = v650 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v571 = v617 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v506 = v571 + "td.many {color: #000000}\n";
    var v387 = v506 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v387 + "</style>\n";
    JAM.call(v112.write, v112, [v113], JAM.policy.p38);
  } else {
    var v114 = outputWindow.document;
    var v739 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v736 = v739 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v731 = v736 + "div.title {display: none}\n";
    var v726 = v731 + "div.info {font-weight: bold}\n";
    var v721 = v726 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v713 = v721 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v702 = v713 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v690 = v702 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v677 = v690 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v664 = v677 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v651 = v664 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v618 = v651 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v572 = v618 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v507 = v572 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v388 = v507 + "img {display: none}\n";
    var v115 = v388 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p38);
  }
  var v116 = outputWindow.document;
  var v573 = "</head>\n" + '<body class="main">\n';
  var v508 = v573 + '<div class="title">';
  var v389 = v508 + title$$6;
  var v117 = v389 + " results</div>\n";
  JAM.call(v116.write, v116, [v117], JAM.policy.p38);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$7) {
  JAM.call(_openWindowAlign, null, [title$$7, true], JAM.policy.p40);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p23);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p39);
  var v118 = outputWindow.document;
  var v574 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v509 = v574 + "<head>\n";
  var v390 = v509 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v390 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v118.write, v118, [v119], JAM.policy.p38);
  if (isBackground) {
    var v120 = outputWindow.document;
    var v737 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v732 = v737 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v727 = v732 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v722 = v727 + "div.info {font-weight: bold}\n";
    var v714 = v722 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v703 = v714 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v691 = v703 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v678 = v691 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v665 = v678 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v652 = v665 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v619 = v652 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v575 = v619 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v510 = v575 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v391 = v510 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v391 + "</style>\n";
    JAM.call(v120.write, v120, [v121], JAM.policy.p38);
  } else {
    var v122 = outputWindow.document;
    var v741 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v740 = v741 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v738 = v740 + "div.title {display: none}\n";
    var v733 = v738 + "div.info {font-weight: bold}\n";
    var v728 = v733 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v723 = v728 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v715 = v723 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v704 = v715 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v692 = v704 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v679 = v692 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v666 = v679 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v653 = v666 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v620 = v653 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v576 = v620 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v511 = v576 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v392 = v511 + "img {display: none}\n";
    var v123 = v392 + "</style>\n";
    JAM.call(v122.write, v122, [v123], JAM.policy.p38);
  }
  var v124 = outputWindow.document;
  var v577 = "</head>\n" + '<body class="main">\n';
  var v512 = v577 + '<div class="title">';
  var v393 = v512 + title$$8;
  var v125 = v393 + " results</div>\n";
  JAM.call(v124.write, v124, [v125], JAM.policy.p38);
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
  var v394 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p38);
  var v126 = v394 != -1;
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
    var v395 = testArray[0]
  }
  var v130 = v395 != testString;
  if (v130) {
    JAM.call(alert, null, ["Array object push method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v396 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p38);
  var v131 = v396 == -1;
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
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p41);
  var v133 = testString != "1X2X3X";
  if (v133) {
    JAM.call(alert, null, ["Nested function in String replace method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  var testNum = 2489.8237;
  var v397 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p25);
  var v134 = v397 != 2489.824;
  if (v134) {
    JAM.call(alert, null, ["Number toFixed() method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  var v398 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p25);
  var v135 = v398 != 2489.8;
  if (v135) {
    JAM.call(alert, null, ["Number toPrecision() method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v399 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p38);
  var v136 = v399 == -1;
  if (v136) {
    JAM.call(alert, null, ["Please enter a number"], JAM.policy.p22);
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v621 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p38);
  var v578 = v621 == -1;
  var v623 = !v578;
  if (v623) {
    var v622 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p38);
    v578 = v622 == -1;
  }
  var v513 = v578;
  var v580 = !v513;
  if (v580) {
    var v579 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p38);
    v513 = v579 == -1;
  }
  var v400 = v513;
  var v515 = !v400;
  if (v515) {
    var v514 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p38);
    v400 = v514 == -1;
  }
  var v137 = v400;
  if (v137) {
    JAM.call(alert, null, ["Please enter the contents of an EMBL file."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v401 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p38);
  var v138 = v401 == -1;
  if (v138) {
    JAM.call(alert, null, ["Please enter a number."], JAM.policy.p22);
    return false;
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if (v140) {
    var v402 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v402 + ".";
    JAM.call(alert, null, [v139], JAM.policy.p38);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v403 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p38);
  var v141 = v403 != -1;
  if (v141) {
    JAM.call(alert, null, ["The sequence contains non-DNA characters, which will be omitted."], JAM.policy.p22);
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v404 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p38);
  var v142 = v404 != -1;
  if (v142) {
    JAM.call(alert, null, ["The sequence contains non-protein characters, which will be omitted."], JAM.policy.p22);
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v624 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p38);
  var v581 = v624 == -1;
  var v626 = !v581;
  if (v626) {
    var v625 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p38);
    v581 = v625 == -1;
  }
  var v516 = v581;
  var v583 = !v516;
  if (v583) {
    var v582 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p38);
    v516 = v582 == -1;
  }
  var v405 = v516;
  var v518 = !v405;
  if (v518) {
    var v517 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p38);
    v405 = v517 == -1;
  }
  var v143 = v405;
  if (v143) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v627 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p38);
  var v584 = v627 == -1;
  var v629 = !v584;
  if (v629) {
    var v628 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p38);
    v584 = v628 == -1;
  }
  var v519 = v584;
  var v586 = !v519;
  if (v586) {
    var v585 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p38);
    v519 = v585 == -1;
  }
  var v406 = v519;
  var v521 = !v406;
  if (v521) {
    var v520 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p38);
    v406 = v520 == -1;
  }
  var v144 = v406;
  if (v144) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p22);
    return false;
  }
  var v407 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p38);
  var v145 = v407 == -1;
  if (v145) {
    JAM.call(alert, null, ["The file has no defined features."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v630 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p38);
  var v587 = v630 == -1;
  var v632 = !v587;
  if (v632) {
    var v631 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p38);
    v587 = v631 == -1;
  }
  var v522 = v587;
  var v589 = !v522;
  if (v589) {
    var v588 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p38);
    v522 = v588 == -1;
  }
  var v408 = v522;
  var v524 = !v408;
  if (v524) {
    var v523 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p38);
    v408 = v523 == -1;
  }
  var v146 = v408;
  if (v146) {
    JAM.call(alert, null, ["Please enter the contents of an EMBL file."], JAM.policy.p22);
    return false;
  }
  var v409 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p38);
  var v147 = v409 == -1;
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
    lineOfText = JAM.call(rightNum, null, [v148, lineOfText, 8, tabIn$$1], JAM.policy.p41);
    var j$$6 = 1;
    var v410 = basePerLine / groupSize;
    var v152 = j$$6 <= v410;
    for (;v152;) {
      var v151 = k < groupSize;
      for (;v151;) {
        var v149 = lineOfText;
        var v411 = k + i$$5;
        var v150 = JAM.call(text$$10.charAt, text$$10, [v411], JAM.policy.p38);
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v412 = basePerLine / groupSize;
      v152 = j$$6 <= v412;
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
  JAM.call(writeGroupNumDnaSetStart, null, [text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0], JAM.policy.p41);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v413 = adjustment < 0;
    if (v413) {
      v413 = adjusted >= 0;
    }
    var v156 = v413;
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
    var v414 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v414;
    for (;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for (;v160;) {
        var v415 = i$$6 + k$$1;
        var v157 = v415 >= stopBase$$2;
        if (v157) {
          break;
        }
        var v158 = lineOfText$$1;
        var v416 = k$$1 + i$$6;
        var v159 = JAM.call(text$$12.charAt, text$$12, [v416], JAM.policy.p38);
        lineOfText$$1 = v158 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if (v163) {
        var v161 = aboveNum;
        var v417 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p41);
        var v162 = JAM.call(rightNum, null, [v417, "", groupSize$$2, tabIn$$3], JAM.policy.p40);
        aboveNum = v161 + v162;
      }
      var v164 = i$$6 >= stopBase$$2;
      if (v164) {
        break;
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v418 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v418;
    }
    var v188 = numberPosition$$1 == "left";
    if (v188) {
      var v166 = outputWindow.document;
      var v590 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p41);
      var v525 = JAM.call(rightNum, null, [v590, "", 8, tabIn$$3], JAM.policy.p40);
      var v419 = v525 + lineOfText$$1;
      var v167 = v419 + "\n";
      JAM.call(v166.write, v166, [v167], JAM.policy.p38);
      var v171 = strands$$1 == "two";
      if (v171) {
        var v168 = outputWindow.document;
        var v591 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p41);
        var v526 = JAM.call(rightNum, null, [v591, "", 8, tabIn$$3], JAM.policy.p40);
        var v527 = JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38);
        var v420 = v526 + v527;
        var v169 = v420 + "\n";
        JAM.call(v168.write, v168, [v169], JAM.policy.p38);
        var v170 = outputWindow.document;
        JAM.call(v170.write, v170, ["\n"], JAM.policy.p22);
      }
    } else {
      var v187 = numberPosition$$1 == "right";
      if (v187) {
        var v172 = outputWindow.document;
        var v528 = lineOfText$$1;
        var v529 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p41);
        var v421 = v528 + v529;
        var v173 = v421 + "\n";
        JAM.call(v172.write, v172, [v173], JAM.policy.p38);
        var v177 = strands$$1 == "two";
        if (v177) {
          var v174 = outputWindow.document;
          var v530 = JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38);
          var v531 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p41);
          var v422 = v530 + v531;
          var v175 = v422 + "\n";
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
            var v423 = JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38);
            var v183 = v423 + "\n";
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
    var v424 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v424;
    for (;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for (;v193;) {
        var v425 = i$$7 + k$$2;
        var v190 = v425 >= stopBase$$3;
        if (v190) {
          break;
        }
        var v191 = lineOfText$$2;
        var v426 = k$$2 + i$$7;
        var v192 = JAM.call(text$$13.charAt, text$$13, [v426], JAM.policy.p38);
        lineOfText$$2 = v191 + v192;
        k$$2 = k$$2 + 1;
        v193 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v196 = numberPosition$$2 == "above";
      if (v196) {
        var v194 = aboveNum$$1;
        var v195 = JAM.call(rightNum, null, [i$$7, "", groupSize$$3, tabIn$$4], JAM.policy.p40);
        aboveNum$$1 = v194 + v195;
      }
      var v197 = i$$7 >= stopBase$$3;
      if (v197) {
        break;
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v427 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v427;
    }
    var v209 = numberPosition$$2 == "left";
    if (v209) {
      var v199 = outputWindow.document;
      var v532 = JAM.call(rightNum, null, [lineNum$$1, "", 8, tabIn$$4], JAM.policy.p40);
      var v428 = v532 + lineOfText$$2;
      var v200 = v428 + "\n";
      JAM.call(v199.write, v199, [v200], JAM.policy.p38);
    } else {
      var v208 = numberPosition$$2 == "right";
      if (v208) {
        var v201 = outputWindow.document;
        var v429 = lineOfText$$2 + i$$7;
        var v202 = v429 + "\n";
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
  var v592 = sequence$$13.length;
  var v533 = v592 <= firstIndexToMutate;
  var v593 = !v533;
  if (v593) {
    v533 = lastIndexToMutate < 0;
  }
  var v430 = v533;
  var v534 = !v430;
  if (v534) {
    v430 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v211 = v430;
  if (v211) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for (;v219;) {
    maxNum = sequence$$13.length;
    var v431 = JAM.call(Math.random, Math, [], JAM.policy.p39);
    var v212 = v431 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v212], JAM.policy.p38);
    var v432 = randNum < firstIndexToMutate;
    var v535 = !v432;
    if (v535) {
      v432 = randNum > lastIndexToMutate;
    }
    var v213 = v432;
    if (v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p38);
    needNewChar = true;
    for (;needNewChar;) {
      var v433 = JAM.call(Math.random, Math, [], JAM.policy.p39);
      var v434 = components$$1.length;
      var v214 = v433 * v434;
      componentsIndex = JAM.call(Math.round, Math, [v214], JAM.policy.p38);
      var v435 = components$$1.length;
      var v215 = componentsIndex == v435;
      if (v215) {
        componentsIndex = 0;
      }
      introspect(JAM.policy.p26) {
        var v436 = components$$1[componentsIndex]
      }
      var v216 = v436 != currentChar;
      if (v216) {
        needNewChar = false;
      }
    }
    var v437 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p24);
    introspect(JAM.policy.p26) {
      var v438 = components$$1[componentsIndex]
    }
    var v217 = v437 + v438;
    var v439 = randNum + 1;
    var v440 = sequence$$13.length;
    var v218 = JAM.call(sequence$$13.substring, sequence$$13, [v439, v440], JAM.policy.p41);
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
    var v441 = JAM.call(Math.random, Math, [], JAM.policy.p39);
    var v442 = components$$2.length;
    var v222 = v441 * v442;
    tempNum$$1 = JAM.call(Math.floor, Math, [v222], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v443 = sequence$$14.length;
    var v225 = v443 == 60;
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
    var v594 = sequence$$15.length;
    var v536 = v594 - lookAhead;
    var v537 = sequence$$15.length;
    var v444 = JAM.call(sequence$$15.substring, sequence$$15, [v536, v537], JAM.policy.p41);
    var v230 = v444 + sequence$$15;
    var v231 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p24);
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v233 = outputWindow.document;
  JAM.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p22);
  var v234 = outputWindow.document;
  var v595 = '<tr><td class="title" width="200px">' + "Site:";
  var v538 = v595 + '</td><td class="title">';
  var v445 = v538 + "Positions:";
  var v235 = v445 + "</td></tr>\n";
  JAM.call(v234.write, v234, [v235], JAM.policy.p38);
  var i$$9 = 0;
  var v446 = arrayOfItems.length;
  var v251 = i$$9 < v446;
  for (;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v447 = arrayOfItems[i$$9]
    }
    var v236 = JAM.call(v447.match, v447, [/\/.+\//], JAM.policy.p38);
    matchExp = v236 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    introspect(JAM.policy.p26) {
      var v596 = arrayOfItems[i$$9]
    }
    var v539 = JAM.call(v596.match, v596, [/\)\D*\d+/], JAM.policy.p38);
    var v448 = JAM.call(v539.toString, v539, [], JAM.policy.p39);
    var v237 = JAM.call(v448.replace, v448, [/\)\D*/, ""], JAM.policy.p40);
    cutDistance = JAM.call(parseFloat, null, [v237], JAM.policy.p38);
    var v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    for (;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v449 = matchPosition >= lowerLimit;
      if (v449) {
        v449 = matchPosition < upperLimit;
      }
      var v241 = v449;
      if (v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v450 = matchPosition - shiftValue;
        var v240 = v450 + 1;
        tempString$$1 = v239 + v240;
      }
      var v451 = matchExp.lastIndex;
      var v540 = RegExp.lastMatch;
      var v452 = v540.length;
      var v242 = v451 - v452;
      matchExp.lastIndex = v242 + 1;
      v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    }
    var v453 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p38);
    var v244 = v453 != -1;
    if (v244) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p40);
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
    var v680 = '<tr><td class="' + backGroundClass;
    var v667 = v680 + '">';
    introspect(JAM.policy.p26) {
      var v705 = arrayOfItems[i$$9]
    }
    var v693 = JAM.call(v705.match, v705, [/\([^\(]+\)/], JAM.policy.p38);
    var v681 = JAM.call(v693.toString, v693, [], JAM.policy.p39);
    var v668 = JAM.call(v681.replace, v681, [/\(|\)/g, ""], JAM.policy.p40);
    var v654 = v667 + v668;
    var v633 = v654 + '</td><td class="';
    var v597 = v633 + backGroundClass;
    var v541 = v597 + '">';
    var v454 = v541 + tempString$$1;
    var v250 = v454 + "</td></tr>\n";
    JAM.call(v249.write, v249, [v250], JAM.policy.p38);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v455 = arrayOfItems.length;
    v251 = i$$9 < v455;
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
  var v655 = '<tr><td class="title">' + "Pattern:";
  var v634 = v655 + '</td><td class="title">';
  var v598 = v634 + "Times found:";
  var v542 = v598 + '</td><td class="title">';
  var v456 = v542 + "Percentage:";
  var v255 = v456 + "</td></tr>\n";
  JAM.call(v254.write, v254, [v255], JAM.policy.p38);
  var i$$10 = 0;
  var v457 = arrayOfItems$$1.length;
  var v264 = i$$10 < v457;
  for (;v264;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v458 = arrayOfItems$$1[i$$10]
    }
    var v256 = JAM.call(v458.match, v458, [/\/[^\/]+\//], JAM.policy.p38);
    var matchExp$$1 = v256 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v459 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p38);
    var v258 = v459 != -1;
    if (v258) {
      var v257 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p38);
      tempNumber = v257.length;
    }
    var percentage = 0;
    var v543 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v635 = arrayOfItems$$1[i$$10]
    }
    var v599 = JAM.call(v635.match, v635, [/\d+/], JAM.policy.p38);
    var v544 = JAM.call(parseFloat, null, [v599], JAM.policy.p38);
    var v460 = v543 - v544;
    var v261 = v460 > 0;
    if (v261) {
      var v259 = 100 * tempNumber;
      var v461 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v600 = arrayOfItems$$1[i$$10]
      }
      var v545 = JAM.call(v600.match, v600, [/\d+/], JAM.policy.p38);
      var v462 = JAM.call(parseFloat, null, [v545], JAM.policy.p38);
      var v260 = v461 - v462;
      percentage = v259 / v260;
    }
    var v262 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v706 = arrayOfItems$$1[i$$10]
    }
    var v694 = JAM.call(v706.match, v706, [/\([^\(]+\)\b/], JAM.policy.p38);
    var v682 = JAM.call(v694.toString, v694, [], JAM.policy.p39);
    var v669 = JAM.call(v682.replace, v682, [/\(|\)/g, ""], JAM.policy.p40);
    var v656 = "<tr><td>" + v669;
    var v636 = v656 + "</td><td>";
    var v601 = v636 + tempNumber;
    var v546 = v601 + "</td><td>";
    var v547 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p25);
    var v463 = v546 + v547;
    var v263 = v463 + "</td></tr>\n";
    JAM.call(v262.write, v262, [v263], JAM.policy.p38);
    i$$10 = i$$10 + 1;
    var v464 = arrayOfItems$$1.length;
    v264 = i$$10 < v464;
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
  var v465 = sequence$$17.length;
  var v272 = v465 > 0;
  for (;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v466 = JAM.call(Math.random, Math, [], JAM.policy.p39);
    var v266 = v466 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v266], JAM.policy.p38);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p38);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p24);
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v267, v268], JAM.policy.p41);
    sequence$$17 = tempString1 + tempString2;
    var v467 = tempSeq.length;
    var v271 = v467 == 60;
    if (v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      JAM.call(v269.write, v269, [v270], JAM.policy.p38);
      tempSeq = "";
    }
    var v468 = sequence$$17.length;
    v272 = v468 > 0;
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  JAM.call(v273.write, v273, [v274], JAM.policy.p38);
  return true;
}
function splitFasta(theDocument) {
  var maxInput$$3 = 5E5;
  var sequences = JAM.new(Array, [], JAM.policy.p39);
  var v469 = JAM.call(testScript, null, [], JAM.policy.p39);
  var v275 = v469 == false;
  if (v275) {
    return false;
  }
  var v637 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v602 = v637[0]
  }
  var v548 = v602.elements;
  introspect(JAM.policy.p26) {
    var v470 = v548[1]
  }
  var v276 = v470.value;
  var newLength = JAM.call(v276.replace, v276, [/[^\d]/g, ""], JAM.policy.p40);
  var v638 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v603 = v638[0]
  }
  var v549 = v603.elements;
  introspect(JAM.policy.p26) {
    var v471 = v549[2]
  }
  var v277 = v471.value;
  var overlap = JAM.call(v277.replace, v277, [/[^\d]/g, ""], JAM.policy.p40);
  var v695 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v683 = v695[0]
  }
  var v670 = v683.elements;
  introspect(JAM.policy.p26) {
    var v657 = v670[0]
  }
  var v639 = JAM.call(checkFormElement, null, [v657], JAM.policy.p38);
  var v604 = v639 == false;
  var v641 = !v604;
  if (v641) {
    var v707 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v696 = v707[0]
    }
    var v684 = v696.elements;
    introspect(JAM.policy.p26) {
      var v671 = v684[0]
    }
    var v658 = v671.value;
    var v640 = JAM.call(checkTextLength, null, [v658, maxInput$$3], JAM.policy.p41);
    v604 = v640 == false;
  }
  var v550 = v604;
  var v606 = !v550;
  if (v606) {
    var v605 = JAM.call(verifyMaxDigits, null, [newLength, maxInput$$3], JAM.policy.p41);
    v550 = v605 == false;
  }
  var v472 = v550;
  var v552 = !v472;
  if (v552) {
    var v551 = JAM.call(verifyMaxDigits, null, [overlap, maxInput$$3], JAM.policy.p41);
    v472 = v551 == false;
  }
  var v278 = v472;
  if (v278) {
    return false;
  }
  newLength = JAM.call(parseInt, null, [newLength], JAM.policy.p38);
  overlap = JAM.call(parseInt, null, [overlap], JAM.policy.p38);
  JAM.call(openWindow, null, ["Split FASTA"], JAM.policy.p22);
  JAM.call(openPre, null, [], JAM.policy.p39);
  var v642 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v607 = v642[0]
  }
  var v553 = v607.elements;
  introspect(JAM.policy.p26) {
    var v473 = v553[0]
  }
  var v279 = v473.value;
  var arrayOfFasta$$1 = JAM.call(getArrayOfFasta, null, [v279], JAM.policy.p38);
  var i$$11 = 0;
  var v474 = arrayOfFasta$$1.length;
  var v288 = i$$11 < v474;
  for (;v288;) {
    introspect(JAM.policy.p26) {
      var v280 = arrayOfFasta$$1[i$$11]
    }
    var sequence$$18 = JAM.call(getSequenceFromFasta, null, [v280], JAM.policy.p38);
    sequence$$18 = JAM.call(removeNonLetters, null, [sequence$$18], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      var v281 = arrayOfFasta$$1[i$$11]
    }
    var title$$9 = JAM.call(getTitleFromFasta, null, [v281], JAM.policy.p38);
    var length$$11 = sequence$$18.length;
    var seqCount = 1;
    var j$$10 = 0;
    var v287 = j$$10 < length$$11;
    for (;v287;) {
      var v282 = j$$10 > overlap;
      if (v282) {
        j$$10 = j$$10 - overlap;
      }
      var v283 = j$$10 + newLength;
      var subseq = JAM.call(sequence$$18.substring, sequence$$18, [j$$10, v283], JAM.policy.p41);
      var subseq_length = subseq.length;
      var start$$4 = j$$10 + 1;
      var v284 = start$$4 + subseq_length;
      var end$$1 = v284 - 1;
      var v285 = outputWindow.document;
      var v734 = ">fragment_" + seqCount;
      var v729 = v734 + ";";
      var v724 = v729 + title$$9;
      var v716 = v724 + "_start=";
      var v708 = v716 + start$$4;
      var v697 = v708 + ";end=";
      var v685 = v697 + end$$1;
      var v672 = v685 + ";length=";
      var v659 = v672 + subseq_length;
      var v643 = v659 + ";source_length=";
      var v608 = v643 + length$$11;
      var v554 = v608 + "\n";
      var v555 = JAM.call(addReturns, null, [subseq], JAM.policy.p38);
      var v475 = v554 + v555;
      var v286 = v475 + "\n\n";
      JAM.call(v285.write, v285, [v286], JAM.policy.p38);
      seqCount = seqCount + 1;
      j$$10 = j$$10 + newLength;
      v287 = j$$10 < length$$11;
    }
    i$$11 = i$$11 + 1;
    var v476 = arrayOfFasta$$1.length;
    v288 = i$$11 < v476;
  }
  JAM.call(closePre, null, [], JAM.policy.p39);
  JAM.call(closeWindow, null, [], JAM.policy.p39);
  return true;
}
JAM.set(document, "onload", v2);
var v289 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p22);
JAM.set(v289, "onclick", v3);
var v290 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p22);
JAM.set(v290, "onclick", v4)
