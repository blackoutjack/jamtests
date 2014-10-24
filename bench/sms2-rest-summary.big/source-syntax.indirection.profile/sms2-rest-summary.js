
JAM.startProfile('load');
function v4() {
  var v562 = document.forms;
  introspect(JAM.policy.p26) {
    var v483 = v562[0]
  }
  var v294 = v483.elements;
  introspect(JAM.policy.p26) {
    var v5 = v294[0]
  }
  v5.value = " ";
  return;
}
function v3() {
  try {
    JAM.call(restSummary, null, [document], JAM.policy.p38);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    JAM.call(alert, null, [v6], JAM.policy.p38);
  }
  return;
}
function v2() {
  var v295 = document.main_form;
  var v7 = v295.main_submit;
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
  var v296 = arrayOfSequences.length;
  var v9 = v296 < 2;
  if (v9) {
    JAM.call(alert, null, ["Please enter an alignment consisting of at least two sequences."], JAM.policy.p22);
    return false;
  }
  var i$$1 = 0;
  var v297 = arrayOfTitles.length;
  var v11 = i$$1 < v297;
  for (;v11;) {
    introspect(JAM.policy.p26) {
      var v616 = arrayOfTitles[i$$1]
    }
    var v563 = JAM.call(v616.search, v616, [/\S/], JAM.policy.p38);
    var v484 = v563 == -1;
    var v565 = !v484;
    if (v565) {
      introspect(JAM.policy.p26) {
        var v617 = arrayOfSequences[i$$1]
      }
      var v564 = JAM.call(v617.search, v617, [/\S/], JAM.policy.p38);
      v484 = v564 == -1;
    }
    var v298 = v484;
    var v486 = !v298;
    if (v486) {
      introspect(JAM.policy.p26) {
        var v566 = arrayOfSequences[i$$1]
      }
      var v485 = v566.length;
      v298 = v485 != lengthOfAlign;
    }
    var v10 = v298;
    if (v10) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$1 = i$$1 + 1;
    var v299 = arrayOfTitles.length;
    v11 = i$$1 < v299;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v652 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p38);
  var v618 = v652 == -1;
  var v654 = !v618;
  if (v654) {
    var v653 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p38);
    v618 = v653 == -1;
  }
  var v567 = v618;
  var v620 = !v567;
  if (v620) {
    var v619 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p38);
    v567 = v619 == -1;
  }
  var v487 = v567;
  var v569 = !v487;
  if (v569) {
    var v568 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p38);
    v487 = v568 == -1;
  }
  var v300 = v487;
  var v489 = !v300;
  if (v489) {
    var v488 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p38);
    v300 = v488 == -1;
  }
  var v12 = v300;
  if (v12) {
    JAM.call(alert, null, ["The codon table has been entered incorrectly."], JAM.policy.p22);
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v490 = formElement.value;
  var v301 = JAM.call(v490.search, v490, [/\S/], JAM.policy.p38);
  var v13 = v301 == -1;
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
  var v302 = arrayOfPatterns.length;
  var v16 = z$$2 < v302;
  for (;v16;) {
    introspect(JAM.policy.p26) {
      var v491 = arrayOfPatterns[z$$2]
    }
    var v303 = JAM.call(v491.search, v491, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p38);
    var v14 = v303 == -1;
    if (v14) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v492 = arrayOfPatterns[z$$2]
    }
    var v304 = JAM.call(moreExpressionCheck, null, [v492], JAM.policy.p38);
    var v15 = v304 == false;
    if (v15) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$2 = z$$2 + 1;
    var v305 = arrayOfPatterns.length;
    v16 = z$$2 < v305;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = JAM.new(Array, [v17], JAM.policy.p38);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = JAM.new(Array, [v18], JAM.policy.p38);
  var j = 0;
  var v306 = arrayOfPatterns.length;
  var v25 = j < v306;
  for (;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAM.policy.p26) {
      var v570 = arrayOfPatterns[j]
    }
    var v493 = JAM.call(v570.match, v570, [/\/.+\//], JAM.policy.p38);
    var v307 = v493 + "gi";
    if (JAM.isEval(eval)) {
      var v853 = eval("introspect(JAM.policy.pFull) { " + v307 + " }")
    } else {
      var v853 = JAM.call(eval, null, [v307])
    }
    introspect(JAM.policy.p27) {
      v19[v20] = v853;
    }
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAM.policy.p26) {
      var v494 = arrayOfPatterns[j]
    }
    var v308 = JAM.call(v494.match, v494, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v854 = JAM.call(v308.toString, v308, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v21[v22] = v854;
    }
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAM.policy.p26) {
      var v309 = geneticCodeMatchResult[j]
    }
    var v855 = JAM.call(v309.replace, v309, [/=/g, ""], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v23[v24] = v855;
    }
    j = j + 1;
    var v310 = arrayOfPatterns.length;
    v25 = j < v310;
  }
  var i$$2 = 0;
  var v495 = testSequence.length;
  var v311 = v495 - 3;
  var v32 = i$$2 <= v311;
  for (;v32;) {
    var v26 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v26], JAM.policy.p40);
    j = 0;
    var v312 = geneticCodeMatchExp.length;
    var v30 = j < v312;
    for (;v30;) {
      introspect(JAM.policy.p26) {
        var v496 = geneticCodeMatchExp[j]
      }
      var v313 = JAM.call(codon.search, codon, [v496], JAM.policy.p38);
      var v29 = v313 != -1;
      if (v29) {
        var v28 = oneMatch == true;
        if (v28) {
          var v314 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v314 + ".";
          JAM.call(alert, null, [v27], JAM.policy.p38);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      var v315 = geneticCodeMatchExp.length;
      v30 = j < v315;
    }
    var v31 = oneMatch == false;
    if (v31) {
      JAM.call(alert, null, ["The genetic code expressions are missing a codon."], JAM.policy.p22);
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v497 = testSequence.length;
    var v316 = v497 - 3;
    v32 = i$$2 <= v316;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v317 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v317;
  for (;v34;) {
    introspect(JAM.policy.p26) {
      var v498 = arrayOfPatterns$$1[z$$3]
    }
    var v318 = JAM.call(v498.search, v498, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p38);
    var v33 = v318 != -1;
    if (v33) {
      JAM.call(alert, null, ["One or more groups have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$3 = z$$3 + 1;
    var v319 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v319;
  }
  var i$$3 = 0;
  var v320 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v320;
  for (;v38;) {
    introspect(JAM.policy.p26) {
      var v499 = arrayOfPatterns$$1[i$$3]
    }
    var v321 = "[" + v499;
    var v35 = v321 + "]";
    var re = JAM.new(RegExp, [v35, "gi"], JAM.policy.p41);
    var j$$1 = i$$3 + 1;
    var v322 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v322;
    for (;v37;) {
      introspect(JAM.policy.p26) {
        var v500 = arrayOfPatterns$$1[j$$1]
      }
      var v323 = JAM.call(v500.search, v500, [re], JAM.policy.p38);
      var v36 = v323 != -1;
      if (v36) {
        JAM.call(alert, null, ["The same amino acid is in more than one similarity group."], JAM.policy.p22);
        return false;
      }
      j$$1 = j$$1 + 1;
      var v324 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v324;
    }
    i$$3 = i$$3 + 1;
    var v325 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v325;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v326 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v326;
  for (;v41;) {
    introspect(JAM.policy.p26) {
      var v501 = arrayOfPatterns$$2[z$$4]
    }
    var v327 = JAM.call(v501.search, v501, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p38);
    var v39 = v327 == -1;
    if (v39) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v502 = arrayOfPatterns$$2[z$$4]
    }
    var v328 = JAM.call(moreExpressionCheck, null, [v502], JAM.policy.p38);
    var v40 = v328 == false;
    if (v40) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$4 = z$$4 + 1;
    var v329 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v329;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v571 = JAM.call(getSequenceFromFasta, null, [text$$7], JAM.policy.p38);
  var v503 = JAM.call(v571.replace, v571, [/[^A-Za-z]/g, ""], JAM.policy.p41);
  var v330 = v503.length;
  var v43 = v330 > maxInput;
  if (v43) {
    var v331 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v331 + " characters.";
    JAM.call(alert, null, [v42], JAM.policy.p38);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v332 = text$$8.length;
  var v45 = v332 > maxInput$$1;
  if (v45) {
    var v333 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v333 + " characters.";
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
  var v334 = alignArray.length;
  var v52 = v334 < 3;
  if (v52) {
    JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
    return false;
  }
  var i$$4 = 1;
  var v335 = alignArray.length;
  var v54 = i$$4 < v335;
  for (;v54;) {
    introspect(JAM.policy.p26) {
      var v504 = alignArray[i$$4]
    }
    var v336 = JAM.call(v504.search, v504, [/[^\s]+\s/], JAM.policy.p38);
    var v53 = v336 == -1;
    if (v53) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$4 = i$$4 + 1;
    var v337 = alignArray.length;
    v54 = i$$4 < v337;
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
  var v338 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38);
  var v57 = v338 != -1;
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
  var v339 = sequence$$2.length;
  var v58 = "&gt;results for " + v339;
  var stringToReturn = v58 + " residue sequence ";
  var v340 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p38);
  var v60 = v340 != -1;
  if (v60) {
    var v341 = stringToReturn + '"';
    var v59 = v341 + fastaSequenceTitle;
    stringToReturn = v59 + '"';
  }
  var v342 = stringToReturn + ' starting "';
  var v343 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p24);
  var v61 = v342 + v343;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v344 = sequenceOne.length;
  var v62 = "Search results for " + v344;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v345 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p38);
  var v64 = v345 != -1;
  if (v64) {
    var v346 = stringToReturn$$1 + '"';
    var v63 = v346 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"';
  }
  var v347 = stringToReturn$$1 + ' starting "';
  var v348 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p24);
  var v65 = v347 + v348;
  stringToReturn$$1 = v65 + '"\n';
  var v349 = stringToReturn$$1 + "and ";
  var v350 = sequenceTwo.length;
  var v66 = v349 + v350;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v351 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p38);
  var v68 = v351 != -1;
  if (v68) {
    var v352 = stringToReturn$$1 + '"';
    var v67 = v352 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"';
  }
  var v353 = stringToReturn$$1 + ' starting "';
  var v354 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p24);
  var v69 = v353 + v354;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = JAM.new(Array, [v71], JAM.policy.p38);
  var j$$2 = 0;
  var v355 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v355;
  for (;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAM.policy.p26) {
      var v572 = arrayOfPatterns$$3[j$$2]
    }
    var v505 = JAM.call(v572.match, v572, [/\/.+\//], JAM.policy.p38);
    var v356 = v505 + "gi";
    if (JAM.isEval(eval)) {
      var v856 = eval("introspect(JAM.policy.pFull) { " + v356 + " }")
    } else {
      var v856 = JAM.call(eval, null, [v356])
    }
    introspect(JAM.policy.p27) {
      v72[v73] = v856;
    }
    j$$2 = j$$2 + 1;
    var v357 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v357;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = JAM.new(Array, [v75], JAM.policy.p38);
  var j$$3 = 0;
  var v358 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v358;
  for (;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAM.policy.p26) {
      var v506 = arrayOfPatterns$$4[j$$3]
    }
    var v359 = JAM.call(v506.match, v506, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v857 = JAM.call(v359.toString, v359, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v76[v77] = v857;
    }
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAM.policy.p26) {
      var v360 = geneticCodeMatchResult$$1[j$$3]
    }
    var v858 = JAM.call(v360.replace, v360, [/=/g, ""], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v78[v79] = v858;
    }
    j$$3 = j$$3 + 1;
    var v361 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v361;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v362 = sequence$$3.length;
  var v81 = "Results for " + v362;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v363 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p38);
  var v83 = v363 != -1;
  if (v83) {
    var v364 = stringToReturn$$2 + '"';
    var v82 = v364 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"';
  }
  var v365 = stringToReturn$$2 + ' starting "';
  var v366 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p24);
  var v84 = v365 + v366;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v507 = "Results for " + topology;
  var v367 = v507 + " ";
  var v368 = sequence$$4.length;
  var v86 = v367 + v368;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v369 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p38);
  var v88 = v369 != -1;
  if (v88) {
    var v370 = stringToReturn$$3 + '"';
    var v87 = v370 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"';
  }
  var v371 = stringToReturn$$3 + ' starting "';
  var v372 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p24);
  var v89 = v371 + v372;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v373 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v373;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v374 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p38);
  var v93 = v374 != -1;
  if (v93) {
    var v375 = stringToReturn$$4 + '"';
    var v92 = v375 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"';
  }
  var v376 = stringToReturn$$4 + ' starting "';
  var v377 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p24);
  var v94 = v376 + v377;
  stringToReturn$$4 = v94 + '"\n';
  var v378 = stringToReturn$$4 + "and ";
  var v379 = sequenceTwo$$1.length;
  var v95 = v378 + v379;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v380 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p38);
  var v97 = v380 != -1;
  if (v97) {
    var v381 = stringToReturn$$4 + '"';
    var v96 = v381 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"';
  }
  var v382 = stringToReturn$$4 + ' starting "';
  var v383 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p24);
  var v98 = v382 + v383;
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
    var v384 = JAM.call(Math.random, Math, [], JAM.policy.p39);
    var v385 = components.length;
    var v100 = v384 * v385;
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
  var v386 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38);
  var v102 = v386 != -1;
  if (v102) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p41);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v387 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38);
  var v104 = v387 != -1;
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
  var v731 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p38);
  var v723 = v731 != -1;
  var v733 = !v723;
  if (v733) {
    var v732 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p38);
    v723 = v732 != -1;
  }
  var v713 = v723;
  var v725 = !v713;
  if (v725) {
    var v724 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p38);
    v713 = v724 != -1;
  }
  var v703 = v713;
  var v715 = !v703;
  if (v715) {
    var v714 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p38);
    v703 = v714 != -1;
  }
  var v689 = v703;
  var v705 = !v689;
  if (v705) {
    var v704 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p38);
    v689 = v704 != -1;
  }
  var v672 = v689;
  var v691 = !v672;
  if (v691) {
    var v690 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p38);
    v672 = v690 != -1;
  }
  var v655 = v672;
  var v674 = !v655;
  if (v674) {
    var v673 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p38);
    v655 = v673 != -1;
  }
  var v621 = v655;
  var v657 = !v621;
  if (v657) {
    var v656 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p38);
    v621 = v656 != -1;
  }
  var v573 = v621;
  var v623 = !v573;
  if (v623) {
    var v622 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p38);
    v573 = v622 != -1;
  }
  var v508 = v573;
  var v575 = !v508;
  if (v575) {
    var v574 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p38);
    v508 = v574 != -1;
  }
  var v388 = v508;
  var v510 = !v388;
  if (v510) {
    var v509 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p38);
    v388 = v509 != -1;
  }
  var v105 = v388;
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
  JAM.call(_openWindow, null, [title$$5, true], JAM.policy.p41);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p23);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p39);
  var v110 = outputWindow.document;
  var v576 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v511 = v576 + "<head>\n";
  var v389 = v511 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v389 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v110.write, v110, [v111], JAM.policy.p38);
  if (isColor) {
    var v112 = outputWindow.document;
    var v749 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v744 = v749 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v739 = v744 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v734 = v739 + "div.info {font-weight: bold}\n";
    var v726 = v734 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v716 = v726 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v706 = v716 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v692 = v706 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v675 = v692 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v658 = v675 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v624 = v658 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v577 = v624 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v512 = v577 + "td.many {color: #000000}\n";
    var v390 = v512 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v390 + "</style>\n";
    JAM.call(v112.write, v112, [v113], JAM.policy.p38);
  } else {
    var v114 = outputWindow.document;
    var v754 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v750 = v754 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v745 = v750 + "div.title {display: none}\n";
    var v740 = v745 + "div.info {font-weight: bold}\n";
    var v735 = v740 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v727 = v735 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v717 = v727 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v707 = v717 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v693 = v707 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v676 = v693 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v659 = v676 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v625 = v659 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v578 = v625 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v513 = v578 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v391 = v513 + "img {display: none}\n";
    var v115 = v391 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p38);
  }
  var v116 = outputWindow.document;
  var v579 = "</head>\n" + '<body class="main">\n';
  var v514 = v579 + '<div class="title">';
  var v392 = v514 + title$$6;
  var v117 = v392 + " results</div>\n";
  JAM.call(v116.write, v116, [v117], JAM.policy.p38);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$7) {
  JAM.call(_openWindowAlign, null, [title$$7, true], JAM.policy.p41);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p23);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p39);
  var v118 = outputWindow.document;
  var v580 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v515 = v580 + "<head>\n";
  var v393 = v515 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v393 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v118.write, v118, [v119], JAM.policy.p38);
  if (isBackground) {
    var v120 = outputWindow.document;
    var v751 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v746 = v751 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v741 = v746 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v736 = v741 + "div.info {font-weight: bold}\n";
    var v728 = v736 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v718 = v728 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v708 = v718 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v694 = v708 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v677 = v694 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v660 = v677 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v626 = v660 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v581 = v626 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v516 = v581 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v394 = v516 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v394 + "</style>\n";
    JAM.call(v120.write, v120, [v121], JAM.policy.p38);
  } else {
    var v122 = outputWindow.document;
    var v757 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v755 = v757 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v752 = v755 + "div.title {display: none}\n";
    var v747 = v752 + "div.info {font-weight: bold}\n";
    var v742 = v747 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v737 = v742 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v729 = v737 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v719 = v729 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v709 = v719 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v695 = v709 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v678 = v695 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v661 = v678 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v627 = v661 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v582 = v627 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v517 = v582 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v395 = v517 + "img {display: none}\n";
    var v123 = v395 + "</style>\n";
    JAM.call(v122.write, v122, [v123], JAM.policy.p38);
  }
  var v124 = outputWindow.document;
  var v583 = "</head>\n" + '<body class="main">\n';
  var v518 = v583 + '<div class="title">';
  var v396 = v518 + title$$8;
  var v125 = v396 + " results</div>\n";
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
  var v397 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p38);
  var v126 = v397 != -1;
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
    var v398 = testArray[0]
  }
  var v130 = v398 != testString;
  if (v130) {
    JAM.call(alert, null, ["Array object push method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v399 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p38);
  var v131 = v399 == -1;
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
  var v400 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p25);
  var v134 = v400 != 2489.824;
  if (v134) {
    JAM.call(alert, null, ["Number toFixed() method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  var v401 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p25);
  var v135 = v401 != 2489.8;
  if (v135) {
    JAM.call(alert, null, ["Number toPrecision() method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v402 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p38);
  var v136 = v402 == -1;
  if (v136) {
    JAM.call(alert, null, ["Please enter a number"], JAM.policy.p22);
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v628 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p38);
  var v584 = v628 == -1;
  var v630 = !v584;
  if (v630) {
    var v629 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p38);
    v584 = v629 == -1;
  }
  var v519 = v584;
  var v586 = !v519;
  if (v586) {
    var v585 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p38);
    v519 = v585 == -1;
  }
  var v403 = v519;
  var v521 = !v403;
  if (v521) {
    var v520 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p38);
    v403 = v520 == -1;
  }
  var v137 = v403;
  if (v137) {
    JAM.call(alert, null, ["Please enter the contents of an EMBL file."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v404 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p38);
  var v138 = v404 == -1;
  if (v138) {
    JAM.call(alert, null, ["Please enter a number."], JAM.policy.p22);
    return false;
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if (v140) {
    var v405 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v405 + ".";
    JAM.call(alert, null, [v139], JAM.policy.p38);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v406 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p38);
  var v141 = v406 != -1;
  if (v141) {
    JAM.call(alert, null, ["The sequence contains non-DNA characters, which will be omitted."], JAM.policy.p22);
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v407 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p38);
  var v142 = v407 != -1;
  if (v142) {
    JAM.call(alert, null, ["The sequence contains non-protein characters, which will be omitted."], JAM.policy.p22);
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v631 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p38);
  var v587 = v631 == -1;
  var v633 = !v587;
  if (v633) {
    var v632 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p38);
    v587 = v632 == -1;
  }
  var v522 = v587;
  var v589 = !v522;
  if (v589) {
    var v588 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p38);
    v522 = v588 == -1;
  }
  var v408 = v522;
  var v524 = !v408;
  if (v524) {
    var v523 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p38);
    v408 = v523 == -1;
  }
  var v143 = v408;
  if (v143) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v634 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p38);
  var v590 = v634 == -1;
  var v636 = !v590;
  if (v636) {
    var v635 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p38);
    v590 = v635 == -1;
  }
  var v525 = v590;
  var v592 = !v525;
  if (v592) {
    var v591 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p38);
    v525 = v591 == -1;
  }
  var v409 = v525;
  var v527 = !v409;
  if (v527) {
    var v526 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p38);
    v409 = v526 == -1;
  }
  var v144 = v409;
  if (v144) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p22);
    return false;
  }
  var v410 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p38);
  var v145 = v410 == -1;
  if (v145) {
    JAM.call(alert, null, ["The file has no defined features."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v637 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p38);
  var v593 = v637 == -1;
  var v639 = !v593;
  if (v639) {
    var v638 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p38);
    v593 = v638 == -1;
  }
  var v528 = v593;
  var v595 = !v528;
  if (v595) {
    var v594 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p38);
    v528 = v594 == -1;
  }
  var v411 = v528;
  var v530 = !v411;
  if (v530) {
    var v529 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p38);
    v411 = v529 == -1;
  }
  var v146 = v411;
  if (v146) {
    JAM.call(alert, null, ["Please enter the contents of an EMBL file."], JAM.policy.p22);
    return false;
  }
  var v412 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p38);
  var v147 = v412 == -1;
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
    var v413 = basePerLine / groupSize;
    var v152 = j$$6 <= v413;
    for (;v152;) {
      var v151 = k < groupSize;
      for (;v151;) {
        var v149 = lineOfText;
        var v414 = k + i$$5;
        var v150 = JAM.call(text$$10.charAt, text$$10, [v414], JAM.policy.p38);
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v415 = basePerLine / groupSize;
      v152 = j$$6 <= v415;
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
    var v416 = adjustment < 0;
    if (v416) {
      v416 = adjusted >= 0;
    }
    var v156 = v416;
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
    var v417 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v417;
    for (;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for (;v160;) {
        var v418 = i$$6 + k$$1;
        var v157 = v418 >= stopBase$$2;
        if (v157) {
          break;
        }
        var v158 = lineOfText$$1;
        var v419 = k$$1 + i$$6;
        var v159 = JAM.call(text$$12.charAt, text$$12, [v419], JAM.policy.p38);
        lineOfText$$1 = v158 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if (v163) {
        var v161 = aboveNum;
        var v420 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40);
        var v162 = JAM.call(rightNum, null, [v420, "", groupSize$$2, tabIn$$3], JAM.policy.p41);
        aboveNum = v161 + v162;
      }
      var v164 = i$$6 >= stopBase$$2;
      if (v164) {
        break;
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v421 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v421;
    }
    var v188 = numberPosition$$1 == "left";
    if (v188) {
      var v166 = outputWindow.document;
      var v596 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p40);
      var v531 = JAM.call(rightNum, null, [v596, "", 8, tabIn$$3], JAM.policy.p41);
      var v422 = v531 + lineOfText$$1;
      var v167 = v422 + "\n";
      JAM.call(v166.write, v166, [v167], JAM.policy.p38);
      var v171 = strands$$1 == "two";
      if (v171) {
        var v168 = outputWindow.document;
        var v597 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p40);
        var v532 = JAM.call(rightNum, null, [v597, "", 8, tabIn$$3], JAM.policy.p41);
        var v533 = JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38);
        var v423 = v532 + v533;
        var v169 = v423 + "\n";
        JAM.call(v168.write, v168, [v169], JAM.policy.p38);
        var v170 = outputWindow.document;
        JAM.call(v170.write, v170, ["\n"], JAM.policy.p22);
      }
    } else {
      var v187 = numberPosition$$1 == "right";
      if (v187) {
        var v172 = outputWindow.document;
        var v534 = lineOfText$$1;
        var v535 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40);
        var v424 = v534 + v535;
        var v173 = v424 + "\n";
        JAM.call(v172.write, v172, [v173], JAM.policy.p38);
        var v177 = strands$$1 == "two";
        if (v177) {
          var v174 = outputWindow.document;
          var v536 = JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38);
          var v537 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40);
          var v425 = v536 + v537;
          var v175 = v425 + "\n";
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
            var v426 = JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38);
            var v183 = v426 + "\n";
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
    var v427 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v427;
    for (;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for (;v193;) {
        var v428 = i$$7 + k$$2;
        var v190 = v428 >= stopBase$$3;
        if (v190) {
          break;
        }
        var v191 = lineOfText$$2;
        var v429 = k$$2 + i$$7;
        var v192 = JAM.call(text$$13.charAt, text$$13, [v429], JAM.policy.p38);
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
      var v430 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v430;
    }
    var v209 = numberPosition$$2 == "left";
    if (v209) {
      var v199 = outputWindow.document;
      var v538 = JAM.call(rightNum, null, [lineNum$$1, "", 8, tabIn$$4], JAM.policy.p41);
      var v431 = v538 + lineOfText$$2;
      var v200 = v431 + "\n";
      JAM.call(v199.write, v199, [v200], JAM.policy.p38);
    } else {
      var v208 = numberPosition$$2 == "right";
      if (v208) {
        var v201 = outputWindow.document;
        var v432 = lineOfText$$2 + i$$7;
        var v202 = v432 + "\n";
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
  var v598 = sequence$$13.length;
  var v539 = v598 <= firstIndexToMutate;
  var v599 = !v539;
  if (v599) {
    v539 = lastIndexToMutate < 0;
  }
  var v433 = v539;
  var v540 = !v433;
  if (v540) {
    v433 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v211 = v433;
  if (v211) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for (;v219;) {
    maxNum = sequence$$13.length;
    var v434 = JAM.call(Math.random, Math, [], JAM.policy.p39);
    var v212 = v434 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v212], JAM.policy.p38);
    var v435 = randNum < firstIndexToMutate;
    var v541 = !v435;
    if (v541) {
      v435 = randNum > lastIndexToMutate;
    }
    var v213 = v435;
    if (v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p38);
    needNewChar = true;
    for (;needNewChar;) {
      var v436 = JAM.call(Math.random, Math, [], JAM.policy.p39);
      var v437 = components$$1.length;
      var v214 = v436 * v437;
      componentsIndex = JAM.call(Math.round, Math, [v214], JAM.policy.p38);
      var v438 = components$$1.length;
      var v215 = componentsIndex == v438;
      if (v215) {
        componentsIndex = 0;
      }
      introspect(JAM.policy.p26) {
        var v439 = components$$1[componentsIndex]
      }
      var v216 = v439 != currentChar;
      if (v216) {
        needNewChar = false;
      }
    }
    var v440 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p24);
    introspect(JAM.policy.p26) {
      var v441 = components$$1[componentsIndex]
    }
    var v217 = v440 + v441;
    var v442 = randNum + 1;
    var v443 = sequence$$13.length;
    var v218 = JAM.call(sequence$$13.substring, sequence$$13, [v442, v443], JAM.policy.p40);
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
    var v444 = JAM.call(Math.random, Math, [], JAM.policy.p39);
    var v445 = components$$2.length;
    var v222 = v444 * v445;
    tempNum$$1 = JAM.call(Math.floor, Math, [v222], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v446 = sequence$$14.length;
    var v225 = v446 == 60;
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
    var v600 = sequence$$15.length;
    var v542 = v600 - lookAhead;
    var v543 = sequence$$15.length;
    var v447 = JAM.call(sequence$$15.substring, sequence$$15, [v542, v543], JAM.policy.p40);
    var v230 = v447 + sequence$$15;
    var v231 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p24);
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v233 = outputWindow.document;
  JAM.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p22);
  var v234 = outputWindow.document;
  var v601 = '<tr><td class="title" width="200px">' + "Site:";
  var v544 = v601 + '</td><td class="title">';
  var v448 = v544 + "Positions:";
  var v235 = v448 + "</td></tr>\n";
  JAM.call(v234.write, v234, [v235], JAM.policy.p38);
  var i$$9 = 0;
  var v449 = arrayOfItems.length;
  var v251 = i$$9 < v449;
  for (;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v450 = arrayOfItems[i$$9]
    }
    var v236 = JAM.call(v450.match, v450, [/\/.+\//], JAM.policy.p38);
    matchExp = v236 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    introspect(JAM.policy.p26) {
      var v602 = arrayOfItems[i$$9]
    }
    var v545 = JAM.call(v602.match, v602, [/\)\D*\d+/], JAM.policy.p38);
    var v451 = JAM.call(v545.toString, v545, [], JAM.policy.p39);
    var v237 = JAM.call(v451.replace, v451, [/\)\D*/, ""], JAM.policy.p41);
    cutDistance = JAM.call(parseFloat, null, [v237], JAM.policy.p38);
    var v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    for (;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v452 = matchPosition >= lowerLimit;
      if (v452) {
        v452 = matchPosition < upperLimit;
      }
      var v241 = v452;
      if (v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v453 = matchPosition - shiftValue;
        var v240 = v453 + 1;
        tempString$$1 = v239 + v240;
      }
      var v454 = matchExp.lastIndex;
      var v546 = RegExp.lastMatch;
      var v455 = v546.length;
      var v242 = v454 - v455;
      matchExp.lastIndex = v242 + 1;
      v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    }
    var v456 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p38);
    var v244 = v456 != -1;
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
    var v696 = '<tr><td class="' + backGroundClass;
    var v679 = v696 + '">';
    introspect(JAM.policy.p26) {
      var v720 = arrayOfItems[i$$9]
    }
    var v710 = JAM.call(v720.match, v720, [/\([^\(]+\)/], JAM.policy.p38);
    var v697 = JAM.call(v710.toString, v710, [], JAM.policy.p39);
    var v680 = JAM.call(v697.replace, v697, [/\(|\)/g, ""], JAM.policy.p41);
    var v662 = v679 + v680;
    var v640 = v662 + '</td><td class="';
    var v603 = v640 + backGroundClass;
    var v547 = v603 + '">';
    var v457 = v547 + tempString$$1;
    var v250 = v457 + "</td></tr>\n";
    JAM.call(v249.write, v249, [v250], JAM.policy.p38);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v458 = arrayOfItems.length;
    v251 = i$$9 < v458;
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
  var v663 = '<tr><td class="title">' + "Pattern:";
  var v641 = v663 + '</td><td class="title">';
  var v604 = v641 + "Times found:";
  var v548 = v604 + '</td><td class="title">';
  var v459 = v548 + "Percentage:";
  var v255 = v459 + "</td></tr>\n";
  JAM.call(v254.write, v254, [v255], JAM.policy.p38);
  var i$$10 = 0;
  var v460 = arrayOfItems$$1.length;
  var v264 = i$$10 < v460;
  for (;v264;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v461 = arrayOfItems$$1[i$$10]
    }
    var v256 = JAM.call(v461.match, v461, [/\/[^\/]+\//], JAM.policy.p38);
    var matchExp$$1 = v256 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v462 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p38);
    var v258 = v462 != -1;
    if (v258) {
      var v257 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p38);
      tempNumber = v257.length;
    }
    var percentage = 0;
    var v549 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v642 = arrayOfItems$$1[i$$10]
    }
    var v605 = JAM.call(v642.match, v642, [/\d+/], JAM.policy.p38);
    var v550 = JAM.call(parseFloat, null, [v605], JAM.policy.p38);
    var v463 = v549 - v550;
    var v261 = v463 > 0;
    if (v261) {
      var v259 = 100 * tempNumber;
      var v464 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v606 = arrayOfItems$$1[i$$10]
      }
      var v551 = JAM.call(v606.match, v606, [/\d+/], JAM.policy.p38);
      var v465 = JAM.call(parseFloat, null, [v551], JAM.policy.p38);
      var v260 = v464 - v465;
      percentage = v259 / v260;
    }
    var v262 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v721 = arrayOfItems$$1[i$$10]
    }
    var v711 = JAM.call(v721.match, v721, [/\([^\(]+\)\b/], JAM.policy.p38);
    var v698 = JAM.call(v711.toString, v711, [], JAM.policy.p39);
    var v681 = JAM.call(v698.replace, v698, [/\(|\)/g, ""], JAM.policy.p41);
    var v664 = "<tr><td>" + v681;
    var v643 = v664 + "</td><td>";
    var v607 = v643 + tempNumber;
    var v552 = v607 + "</td><td>";
    var v553 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p25);
    var v466 = v552 + v553;
    var v263 = v466 + "</td></tr>\n";
    JAM.call(v262.write, v262, [v263], JAM.policy.p38);
    i$$10 = i$$10 + 1;
    var v467 = arrayOfItems$$1.length;
    v264 = i$$10 < v467;
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
  var v468 = sequence$$17.length;
  var v272 = v468 > 0;
  for (;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v469 = JAM.call(Math.random, Math, [], JAM.policy.p39);
    var v266 = v469 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v266], JAM.policy.p38);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p38);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p24);
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v267, v268], JAM.policy.p40);
    sequence$$17 = tempString1 + tempString2;
    var v470 = tempSeq.length;
    var v271 = v470 == 60;
    if (v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      JAM.call(v269.write, v269, [v270], JAM.policy.p38);
      tempSeq = "";
    }
    var v471 = sequence$$17.length;
    v272 = v471 > 0;
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  JAM.call(v273.write, v273, [v274], JAM.policy.p38);
  return true;
}
function getRestrictionSiteString(type$$25) {
  var v472 = JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39);
  var v276 = v472 == "standard";
  if (v276) {
    var v852 = "/aggcct/ (AatI agg|cct)3," + "/gacgtc/ (AatII gacgt|c)1,";
    var v851 = v852 + "/tgcgca/ (Acc16I tgc|gca)3,";
    var v850 = v851 + "/cgcg/ (AccII cg|cg)2,";
    var v849 = v850 + "/tccgga/ (AccIII t|ccgga)5,";
    var v848 = v849 + "/aacgtt/ (AclI aa|cgtt)4,";
    var v847 = v848 + "/cacgtg/ (AcvI cac|gtg)3,";
    var v846 = v847 + "/gtac/ (AfaI gt|ac)2,";
    var v845 = v846 + "/agcgct/ (AfeI agc|gct)3,";
    var v844 = v845 + "/cttaag/ (AflII c|ttaag)5,";
    var v843 = v844 + "/accggt/ (AgeI a|ccggt)5,";
    var v842 = v843 + "/actagt/ (AhlI a|ctagt)5,";
    var v841 = v842 + "/gtgcac/ (Alw441 g|tgcac)5,";
    var v840 = v841 + "/agct/ (AluI ag|ct)2,";
    var v839 = v840 + "/agcgct/ (Aor51HI agc|gct)3,";
    var v838 = v839 + "/gggccc/ (ApaI gggcc|c)1,";
    var v837 = v838 + "/gtgcac/ (ApaLI g|tgcac)5,";
    var v836 = v837 + "/ggcgcgcc/ (AscI gg|cgcgcc)6,";
    var v835 = v836 + "/attaat/ (AseI at|taat)4,";
    var v834 = v835 + "/ggtacc/ (Asp718I g|gtacc)5,";
    var v833 = v834 + "/ttcgaa/ (AsuII tt|cgaa)4,";
    var v832 = v833 + "/c[cty]cg[agr]g/ (AvaI c|ycgrg)5,";
    var v831 = v832 + "/tgcgca/ (AviII tgc|gca)3,";
    var v830 = v831 + "/cctagg/ (AvrII c|ctagg)5,";
    var v829 = v830 + "/tggcca/ (BalI tgg|cca)3,";
    var v828 = v829 + "/ggatcc/ (BamHI g|gatcc)5,";
    var v827 = v828 + "/atcgat/ (BanIII at|cgat)4,";
    var v826 = v827 + "/ggcgcc/ (BbeI ggcgc|c)1,";
    var v825 = v826 + "/cacgtg/ (BbrPI cac|gtg)3,";
    var v824 = v825 + "/gcatgc/ (BbuI gcatg|c)1,";
    var v823 = v824 + "/actagt/ (BcuI a|ctagt)5,";
    var v822 = v823 + "/tgatca/ (BclI t|gatca)5,";
    var v821 = v822 + "/ctag/ (BfaI c|tag)3,";
    var v820 = v821 + "/cttaag/ (BfrI c|ttaag)5,";
    var v819 = v820 + "/atgcat/ (BfrBI atg|cat)3,";
    var v818 = v819 + "/agatct/ (BglII a|gatct)5,";
    var v817 = v818 + "/cctagg/ (BlnI c|ctagg)5,";
    var v816 = v817 + "/atcgat/ (BseCI at|cgat)4,";
    var v815 = v816 + "/gcgcgc/ (BsePI g|cgcgc)5,";
    var v814 = v815 + "/cggccg/ (BseX3I c|ggccg)5,";
    var v813 = v814 + "/accggt/ (BshTI a|ccggt)5,";
    var v812 = v813 + "/tgtaca/ (Bsp1407I t|gtaca)5,";
    var v811 = v812 + "/ccatgg/ (Bsp19I c|catgg)5,";
    var v810 = v811 + "/atcgat/ (BspDI at|cgat)4,";
    var v809 = v810 + "/tccgga/ (BspEI t|ccgga)5,";
    var v808 = v809 + "/tgtaca/ (BsrGI t|gtaca)5,";
    var v807 = v808 + "/gcgcgc/ (BssHII g|cgcgc)5,";
    var v806 = v807 + "/cgcg/ (BstUI cg|cg)2,";
    var v805 = v806 + "/atcgat/ (ClaI at|cgat)4,";
    var v804 = v805 + "/gatc/ (DpnII |gatc)4,";
    var v803 = v804 + "/tttaaa/ (DraI ttt|aaa)3,";
    var v802 = v803 + "/cggccg/ (EagI c|ggccg)5,";
    var v801 = v802 + "/gaattc/ (EcoRI g|aattc)5,";
    var v800 = v801 + "/gatatc/ (EcoRV gat|atc)3,";
    var v799 = v800 + "/ggcgcc/ (EgeI ggc|gcc)3,";
    var v798 = v799 + "/ggccggcc/ (FseI ggccgg|cc)2,";
    var v797 = v798 + "/tgcgca/ (FspI tgc|gca)3,";
    var v796 = v797 + "/ggcc/ (HaeIII gg|cc)2,";
    var v795 = v796 + "/gt[cty][agr]ac/ (HincII gty|rac)3,";
    var v794 = v795 + "/aagctt/ (HindIII a|agctt)5,";
    var v793 = v794 + "/ga[acgturyswkmbdhvn]tc/ (HinfI g|antc)4,";
    var v792 = v793 + "/gttaac/ (HpaI gtt|aac)3,";
    var v791 = v792 + "/ccgg/ (HpaII c|cgg)3,";
    var v790 = v791 + "/ggcgcc/ (KasI g|gcgcc)5,";
    var v789 = v790 + "/ggtacc/ (KpnI ggtac|c)1,";
    var v788 = v789 + "/[acgturyswkmbdhvn]gatc[acgturyswkmbdhvn]/ (MboI |gatc)5,";
    var v787 = v788 + "/caattg/ (MfeI c|aattg)5,";
    var v786 = v787 + "/acgcgt/ (MluI a|cgcgt)5,";
    var v785 = v786 + "/tggcca/ (MscI tgg|cca)3,";
    var v784 = v785 + "/ttaa/ (MseI t|taa)3,";
    var v783 = v784 + "/ccgg/ (MspI c|cgg)3,";
    var v782 = v783 + "/gccggc/ (NaeI gcc|ggc)3,";
    var v781 = v782 + "/ggcgcc/ (NarI gg|cgcc)4,";
    var v780 = v781 + "/ccatgg/ (NcoI c|catgg)5,";
    var v779 = v780 + "/catatg/ (NdeI ca|tatg)4,";
    var v778 = v779 + "/gatc/ (NdeII |gatc)4,";
    var v777 = v778 + "/gccggc/ (NgoMIV g|ccggc)5,";
    var v776 = v777 + "/gctagc/ (NheI g|ctagc)5,";
    var v775 = v776 + "/catg/ (NlaIII catg|)0,";
    var v774 = v775 + "/gcggccgc/ (NotI gc|ggccgc)6,";
    var v773 = v774 + "/tcgcga/ (NruI tcg|cga)3,";
    var v772 = v773 + "/atgcat/ (NsiI atgca|t)1,";
    var v771 = v772 + "/ttaattaa/ (PacI ttaat|taa)3,";
    var v770 = v771 + "/acatgt/ (PciI a|catgt)5,";
    var v769 = v770 + "/ggcc/ (PhoI gg|cc)2,";
    var v768 = v769 + "/gtttaaac/ (PmeI gttt|aaac)4,";
    var v767 = v768 + "/cacgtg/ (PmlI cac|gtg)3,";
    var v766 = v767 + "/ttataa/ (PsiI tta|taa)3,";
    var v765 = v766 + "/ctgcag/ (PstI ctgca|g)1,";
    var v764 = v765 + "/cgatcg/ (PvuI cgat|cg)2,";
    var v763 = v764 + "/cagctg/ (PvuII cag|ctg)3,";
    var v762 = v763 + "/gtac/ (RsaI gt|ac)2,";
    var v761 = v762 + "/gagctc/ (SacI gagct|c)1,";
    var v760 = v761 + "/ccgcgg/ (SacII ccgc|gg)2,";
    var v759 = v760 + "/gtcgac/ (SalI g|tcgac)5,";
    var v758 = v759 + "/cctgcagg/ (SbfI cctgca|gg)2,";
    var v756 = v758 + "/agtact/ (ScaI agt|act)3,";
    var v753 = v756 + "/ggcgcc/ (SfoI ggc|gcc)3,";
    var v748 = v753 + "/cccggg/ (SmaI ccc|ggg)3,";
    var v743 = v748 + "/tacgta/ (SnaBI tac|gta)3,";
    var v738 = v743 + "/actagt/ (SpeI a|ctagt)5,";
    var v730 = v738 + "/gcatgc/ (SphI gcatg|c)1,";
    var v722 = v730 + "/aatatt/ (SspI aat|att)3,";
    var v712 = v722 + "/gagctc/ (SstI gagct|c)1,";
    var v699 = v712 + "/ccgcgg/ (SstII ccgc|gg)2,";
    var v682 = v699 + "/aggcct/ (StuI agg|cct)3,";
    var v665 = v682 + "/atttaaat/ (SwaI attt|aaat)4,";
    var v644 = v665 + "/tcga/ (TaqI t|cga)3,";
    var v608 = v644 + "/ctcgag/ (TliI c|tcgag)5,";
    var v554 = v608 + "/attaat/ (VspI at|taat)4,";
    var v473 = v554 + "/tctaga/ (XbaI t|ctaga)5,";
    var v275 = v473 + "/ctcgag/ (XhoI c|tcgag)5,";
    return v275 + "/cccggg/ (XmaI c|ccggg)5";
  }
  return true;
}
function restSummary(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var restrictionSites = JAM.call(getRestrictionSiteString, null, ["standard"], JAM.policy.p22);
  var v683 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v666 = v683[0]
  }
  var v645 = v666.elements;
  introspect(JAM.policy.p26) {
    var v609 = v645[0]
  }
  var v555 = JAM.call(checkFormElement, null, [v609], JAM.policy.p38);
  var v474 = v555 == false;
  var v557 = !v474;
  if (v557) {
    var v700 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v684 = v700[0]
    }
    var v667 = v684.elements;
    introspect(JAM.policy.p26) {
      var v646 = v667[0]
    }
    var v610 = v646.value;
    var v556 = JAM.call(checkSequenceLength, null, [v610, maxInput$$3], JAM.policy.p40);
    v474 = v556 == false;
  }
  var v277 = v474;
  if (v277) {
    return false;
  }
  itemsToCheck = JAM.call(restrictionSites.split, restrictionSites, [/,/], JAM.policy.p38);
  var v475 = JAM.call(checkRestPatterns, null, [itemsToCheck], JAM.policy.p38);
  var v278 = v475 == false;
  if (v278) {
    return false;
  }
  JAM.call(openWindow, null, ["Restriction Summary"], JAM.policy.p22);
  var v279 = outputWindow.document;
  var v476 = '<span class="one">' + "cuts once";
  var v280 = v476 + "</span><br />\n";
  JAM.call(v279.write, v279, [v280], JAM.policy.p38);
  var v281 = outputWindow.document;
  var v477 = '<span class="two">' + "cuts twice";
  var v282 = v477 + "</span><br />\n";
  JAM.call(v281.write, v281, [v282], JAM.policy.p38);
  var v283 = outputWindow.document;
  JAM.call(v283.write, v283, ["\n"], JAM.policy.p22);
  var v647 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v611 = v647[0]
  }
  var v558 = v611.elements;
  introspect(JAM.policy.p26) {
    var v478 = v558[0]
  }
  var v284 = v478.value;
  var arrayOfFasta$$1 = JAM.call(getArrayOfFasta, null, [v284], JAM.policy.p38);
  var i$$11 = 0;
  var v479 = arrayOfFasta$$1.length;
  var v291 = i$$11 < v479;
  for (;v291;) {
    introspect(JAM.policy.p26) {
      var v285 = arrayOfFasta$$1[i$$11]
    }
    newDna = JAM.call(getSequenceFromFasta, null, [v285], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      var v286 = arrayOfFasta$$1[i$$11]
    }
    title$$9 = JAM.call(getTitleFromFasta, null, [v286], JAM.policy.p38);
    newDna = JAM.call(removeNonDna, null, [newDna], JAM.policy.p38);
    var v287 = outputWindow.document;
    var v701 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v685 = v701[0]
    }
    var v668 = v685.elements;
    introspect(JAM.policy.p26) {
      var v648 = v668[4]
    }
    var v612 = v648.options;
    var v702 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v686 = v702[0]
    }
    var v669 = v686.elements;
    introspect(JAM.policy.p26) {
      var v649 = v669[4]
    }
    var v613 = v649.selectedIndex;
    introspect(JAM.policy.p26) {
      var v559 = v612[v613]
    }
    var v480 = v559.value;
    var v288 = JAM.call(getInfoFromTitleAndSequenceAndTopology, null, [title$$9, newDna, v480], JAM.policy.p40);
    JAM.call(v287.write, v287, [v288], JAM.policy.p38);
    var v687 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v670 = v687[0]
    }
    var v650 = v670.elements;
    introspect(JAM.policy.p26) {
      var v614 = v650[4]
    }
    var v560 = v614.options;
    var v688 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v671 = v688[0]
    }
    var v651 = v671.elements;
    introspect(JAM.policy.p26) {
      var v615 = v651[4]
    }
    var v561 = v615.selectedIndex;
    introspect(JAM.policy.p26) {
      var v481 = v560[v561]
    }
    var v289 = v481.value;
    JAM.call(writeRestrictionSites, null, [newDna, itemsToCheck, v289], JAM.policy.p40);
    var v290 = outputWindow.document;
    JAM.call(v290.write, v290, ["<br />\n<br />\n"], JAM.policy.p22);
    i$$11 = i$$11 + 1;
    var v482 = arrayOfFasta$$1.length;
    v291 = i$$11 < v482;
  }
  JAM.call(closeWindow, null, [], JAM.policy.p39);
  return true;
}
JAM.set(document, "onload", v2);
var v292 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p22);
JAM.set(v292, "onclick", v3);
var v293 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p22);
JAM.set(v293, "onclick", v4)

JAM.stopProfile('load');
