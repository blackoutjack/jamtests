function v9() {
  var v1011 = document.forms;
  introspect(JAM.policy.p26) {
    var v851 = v1011[0]
  }
  var v501 = v851.elements;
  introspect(JAM.policy.p26) {
    var v10 = v501[0]
  }
  v10.value = " ";
  var v1012 = document.forms;
  introspect(JAM.policy.p26) {
    var v852 = v1012[0]
  }
  var v502 = v852.elements;
  introspect(JAM.policy.p26) {
    var v11 = v502[4]
  }
  v11.value = " ";
  return;
}
function v8() {
  try {
    JAM.call(mutateForDigest, null, [document], JAM.policy.p38);
  } catch (e$$5) {
    var v12 = "The following error was encountered: " + e$$5;
    JAM.call(alert, null, [v12], JAM.policy.p38);
  }
  return;
}
function v7() {
  var v503 = document.main_form;
  var v13 = v503.main_submit;
  JAM.call(v13.focus, v13, [], JAM.policy.p39);
  return;
}
function v6(start$$9, stop$$5) {
  var v14 = outputWindow.document;
  var v504 = this.positionLabel;
  var v15 = JAM.call(rightNum, null, [v504, "", 8, ""], JAM.policy.p41);
  JAM.call(v14.write, v14, [v15], JAM.policy.p38);
  var v16 = outputWindow.document;
  var v17 = this.spanStart;
  JAM.call(v16.write, v16, [v17], JAM.policy.p38);
  var v18 = outputWindow.document;
  var v853 = this.characters;
  var v505 = JAM.call(v853.slice, v853, [start$$9, stop$$5], JAM.policy.p40);
  var v19 = JAM.call(v505.join, v505, [""], JAM.policy.p22);
  JAM.call(v18.write, v18, [v19], JAM.policy.p38);
  var v20 = outputWindow.document;
  var v506 = this.spanEnd;
  var v21 = v506 + "\n";
  JAM.call(v20.write, v20, [v21], JAM.policy.p38);
  var v22 = this.positionLabel;
  var v23 = stop$$5 - start$$9;
  this.positionLabel = v22 + v23;
  return;
}
function v5(start$$8, stop$$4) {
  var v507 = this.characters;
  var v24 = JAM.call(v507.slice, v507, [start$$8, stop$$4], JAM.policy.p40);
  var textToWrite = JAM.call(v24.join, v24, [""], JAM.policy.p22);
  var v508 = JAM.call(textToWrite.search, textToWrite, [/\w/], JAM.policy.p38);
  var v34 = v508 != -1;
  if (v34) {
    var v25 = outputWindow.document;
    var v509 = this.positionLabel;
    var v26 = JAM.call(rightNum, null, [v509, "", 8, ""], JAM.policy.p41);
    JAM.call(v25.write, v25, [v26], JAM.policy.p38);
    var v27 = outputWindow.document;
    var v28 = this.spanStart;
    JAM.call(v27.write, v27, [v28], JAM.policy.p38);
    var v29 = this.positionLabel;
    var v510 = JAM.call(textToWrite.match, textToWrite, [/[A-Z]/g], JAM.policy.p38);
    var v30 = v510.length;
    this.positionLabel = v29 + v30;
    var v31 = outputWindow.document;
    JAM.call(v31.write, v31, [textToWrite], JAM.policy.p38);
    var v32 = outputWindow.document;
    var v511 = this.spanEnd;
    var v33 = v511 + "\n";
    JAM.call(v32.write, v32, [v33], JAM.policy.p38);
  }
  return;
}
function v4(start$$7, stop$$3) {
  var v35 = outputWindow.document;
  var v512 = this.positionLabel;
  var v36 = JAM.call(rightNum, null, [v512, "", 8, ""], JAM.policy.p41);
  JAM.call(v35.write, v35, [v36], JAM.policy.p38);
  var v37 = outputWindow.document;
  var v38 = this.spanStart;
  JAM.call(v37.write, v37, [v38], JAM.policy.p38);
  var v39 = outputWindow.document;
  var v854 = this.characters;
  var v513 = JAM.call(v854.slice, v854, [start$$7, stop$$3], JAM.policy.p40);
  var v40 = JAM.call(v513.join, v513, [""], JAM.policy.p22);
  JAM.call(v39.write, v39, [v40], JAM.policy.p38);
  var v41 = outputWindow.document;
  var v514 = this.spanEnd;
  var v42 = v514 + "\n";
  JAM.call(v41.write, v41, [v42], JAM.policy.p38);
  var v43 = this.positionLabel;
  var v515 = stop$$3 - start$$7;
  var v44 = v515 / 3;
  this.positionLabel = v43 + v44;
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
    var v45 = arrayOfSequences[0]
  }
  var lengthOfAlign = v45.length;
  var v516 = arrayOfSequences.length;
  var v46 = v516 < 2;
  if (v46) {
    JAM.call(alert, null, ["Please enter an alignment consisting of at least two sequences."], JAM.policy.p22);
    return false;
  }
  var i$$1 = 0;
  var v517 = arrayOfTitles.length;
  var v48 = i$$1 < v517;
  for (;v48;) {
    introspect(JAM.policy.p26) {
      var v1108 = arrayOfTitles[i$$1]
    }
    var v1013 = JAM.call(v1108.search, v1108, [/\S/], JAM.policy.p38);
    var v855 = v1013 == -1;
    var v1015 = !v855;
    if (v1015) {
      introspect(JAM.policy.p26) {
        var v1109 = arrayOfSequences[i$$1]
      }
      var v1014 = JAM.call(v1109.search, v1109, [/\S/], JAM.policy.p38);
      v855 = v1014 == -1;
    }
    var v518 = v855;
    var v857 = !v518;
    if (v857) {
      introspect(JAM.policy.p26) {
        var v1016 = arrayOfSequences[i$$1]
      }
      var v856 = v1016.length;
      v518 = v856 != lengthOfAlign;
    }
    var v47 = v518;
    if (v47) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$1 = i$$1 + 1;
    var v519 = arrayOfTitles.length;
    v48 = i$$1 < v519;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1171 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p38);
  var v1110 = v1171 == -1;
  var v1173 = !v1110;
  if (v1173) {
    var v1172 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p38);
    v1110 = v1172 == -1;
  }
  var v1017 = v1110;
  var v1112 = !v1017;
  if (v1112) {
    var v1111 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p38);
    v1017 = v1111 == -1;
  }
  var v858 = v1017;
  var v1019 = !v858;
  if (v1019) {
    var v1018 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p38);
    v858 = v1018 == -1;
  }
  var v520 = v858;
  var v860 = !v520;
  if (v860) {
    var v859 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p38);
    v520 = v859 == -1;
  }
  var v49 = v520;
  if (v49) {
    JAM.call(alert, null, ["The codon table has been entered incorrectly."], JAM.policy.p22);
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v861 = formElement.value;
  var v521 = JAM.call(v861.search, v861, [/\S/], JAM.policy.p38);
  var v50 = v521 == -1;
  if (v50) {
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
  var v522 = arrayOfPatterns.length;
  var v53 = z$$2 < v522;
  for (;v53;) {
    introspect(JAM.policy.p26) {
      var v862 = arrayOfPatterns[z$$2]
    }
    var v523 = JAM.call(v862.search, v862, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p38);
    var v51 = v523 == -1;
    if (v51) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v863 = arrayOfPatterns[z$$2]
    }
    var v524 = JAM.call(moreExpressionCheck, null, [v863], JAM.policy.p38);
    var v52 = v524 == false;
    if (v52) {
      JAM.call(alert, null, ["Genetic code error: one or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$2 = z$$2 + 1;
    var v525 = arrayOfPatterns.length;
    v53 = z$$2 < v525;
  }
  var v54 = arrayOfPatterns.length;
  var geneticCodeMatchResult = JAM.new(Array, [v54], JAM.policy.p38);
  var v55 = arrayOfPatterns.length;
  var geneticCodeMatchExp = JAM.new(Array, [v55], JAM.policy.p38);
  var j = 0;
  var v526 = arrayOfPatterns.length;
  var v62 = j < v526;
  for (;v62;) {
    var v56 = geneticCodeMatchExp;
    var v57 = j;
    introspect(JAM.policy.p26) {
      var v1020 = arrayOfPatterns[j]
    }
    var v864 = JAM.call(v1020.match, v1020, [/\/.+\//], JAM.policy.p38);
    var v527 = v864 + "gi";
    if (JAM.isEval(eval)) {
      var v1517 = eval("introspect(JAM.policy.pFull) { " + v527 + " }")
    } else {
      var v1517 = JAM.call(eval, null, [v527])
    }
    introspect(JAM.policy.p27) {
      v56[v57] = v1517;
    }
    var v58 = geneticCodeMatchResult;
    var v59 = j;
    introspect(JAM.policy.p26) {
      var v865 = arrayOfPatterns[j]
    }
    var v528 = JAM.call(v865.match, v865, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v1518 = JAM.call(v528.toString, v528, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v58[v59] = v1518;
    }
    var v60 = geneticCodeMatchResult;
    var v61 = j;
    introspect(JAM.policy.p26) {
      var v529 = geneticCodeMatchResult[j]
    }
    var v1519 = JAM.call(v529.replace, v529, [/=/g, ""], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v60[v61] = v1519;
    }
    j = j + 1;
    var v530 = arrayOfPatterns.length;
    v62 = j < v530;
  }
  var i$$2 = 0;
  var v866 = testSequence.length;
  var v531 = v866 - 3;
  var v69 = i$$2 <= v531;
  for (;v69;) {
    var v63 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v63], JAM.policy.p40);
    j = 0;
    var v532 = geneticCodeMatchExp.length;
    var v67 = j < v532;
    for (;v67;) {
      introspect(JAM.policy.p26) {
        var v867 = geneticCodeMatchExp[j]
      }
      var v533 = JAM.call(codon.search, codon, [v867], JAM.policy.p38);
      var v66 = v533 != -1;
      if (v66) {
        var v65 = oneMatch == true;
        if (v65) {
          var v534 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v64 = v534 + ".";
          JAM.call(alert, null, [v64], JAM.policy.p38);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      var v535 = geneticCodeMatchExp.length;
      v67 = j < v535;
    }
    var v68 = oneMatch == false;
    if (v68) {
      JAM.call(alert, null, ["The genetic code expressions are missing a codon."], JAM.policy.p22);
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v868 = testSequence.length;
    var v536 = v868 - 3;
    v69 = i$$2 <= v536;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v537 = arrayOfPatterns$$1.length;
  var v71 = z$$3 < v537;
  for (;v71;) {
    introspect(JAM.policy.p26) {
      var v869 = arrayOfPatterns$$1[z$$3]
    }
    var v538 = JAM.call(v869.search, v869, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p38);
    var v70 = v538 != -1;
    if (v70) {
      JAM.call(alert, null, ["One or more groups have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$3 = z$$3 + 1;
    var v539 = arrayOfPatterns$$1.length;
    v71 = z$$3 < v539;
  }
  var i$$3 = 0;
  var v540 = arrayOfPatterns$$1.length;
  var v75 = i$$3 < v540;
  for (;v75;) {
    introspect(JAM.policy.p26) {
      var v870 = arrayOfPatterns$$1[i$$3]
    }
    var v541 = "[" + v870;
    var v72 = v541 + "]";
    var re = JAM.new(RegExp, [v72, "gi"], JAM.policy.p41);
    var j$$1 = i$$3 + 1;
    var v542 = arrayOfPatterns$$1.length;
    var v74 = j$$1 < v542;
    for (;v74;) {
      introspect(JAM.policy.p26) {
        var v871 = arrayOfPatterns$$1[j$$1]
      }
      var v543 = JAM.call(v871.search, v871, [re], JAM.policy.p38);
      var v73 = v543 != -1;
      if (v73) {
        JAM.call(alert, null, ["The same amino acid is in more than one similarity group."], JAM.policy.p22);
        return false;
      }
      j$$1 = j$$1 + 1;
      var v544 = arrayOfPatterns$$1.length;
      v74 = j$$1 < v544;
    }
    i$$3 = i$$3 + 1;
    var v545 = arrayOfPatterns$$1.length;
    v75 = i$$3 < v545;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v546 = arrayOfPatterns$$2.length;
  var v78 = z$$4 < v546;
  for (;v78;) {
    introspect(JAM.policy.p26) {
      var v872 = arrayOfPatterns$$2[z$$4]
    }
    var v547 = JAM.call(v872.search, v872, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p38);
    var v76 = v547 == -1;
    if (v76) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    introspect(JAM.policy.p26) {
      var v873 = arrayOfPatterns$$2[z$$4]
    }
    var v548 = JAM.call(moreExpressionCheck, null, [v873], JAM.policy.p38);
    var v77 = v548 == false;
    if (v77) {
      JAM.call(alert, null, ["One or more patterns have been entered incorrectly."], JAM.policy.p22);
      return false;
    }
    z$$4 = z$$4 + 1;
    var v549 = arrayOfPatterns$$2.length;
    v78 = z$$4 < v549;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v1021 = JAM.call(getSequenceFromFasta, null, [text$$7], JAM.policy.p38);
  var v874 = JAM.call(v1021.replace, v1021, [/[^A-Za-z]/g, ""], JAM.policy.p41);
  var v550 = v874.length;
  var v80 = v550 > maxInput;
  if (v80) {
    var v551 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v79 = v551 + " characters.";
    JAM.call(alert, null, [v79], JAM.policy.p38);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v552 = text$$8.length;
  var v82 = v552 > maxInput$$1;
  if (v82) {
    var v553 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v81 = v553 + " characters.";
    JAM.call(alert, null, [v81], JAM.policy.p38);
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
  var v83 = outputWindow.document;
  JAM.call(v83.write, v83, ["</form>"], JAM.policy.p22);
  return true;
}
function closePre() {
  var v84 = outputWindow.document;
  JAM.call(v84.write, v84, ["</div>"], JAM.policy.p22);
  var v85 = outputWindow.document;
  JAM.call(v85.write, v85, ["</pre>\n"], JAM.policy.p22);
  return;
}
function closeTextArea() {
  var v86 = outputWindow.document;
  JAM.call(v86.write, v86, ["</textarea>"], JAM.policy.p22);
  return true;
}
function closeWindow() {
  var v87 = outputWindow.document;
  JAM.call(v87.write, v87, ["</body>\n</html>\n"], JAM.policy.p22);
  outputWindow.status = "Done.";
  var v88 = outputWindow.document;
  JAM.call(v88.close, v88, [], JAM.policy.p39);
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
  var v554 = alignArray.length;
  var v89 = v554 < 3;
  if (v89) {
    JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
    return false;
  }
  var i$$4 = 1;
  var v555 = alignArray.length;
  var v91 = i$$4 < v555;
  for (;v91;) {
    introspect(JAM.policy.p26) {
      var v875 = alignArray[i$$4]
    }
    var v556 = JAM.call(v875.search, v875, [/[^\s]+\s/], JAM.policy.p38);
    var v90 = v556 == -1;
    if (v90) {
      JAM.call(alert, null, ["There is a problem with the alignment format."], JAM.policy.p22);
      return false;
    }
    i$$4 = i$$4 + 1;
    var v557 = alignArray.length;
    v91 = i$$4 < v557;
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
  var v558 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38);
  var v94 = v558 != -1;
  if (v94) {
    var v93 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p38);
    for (;v93;) {
      introspect(JAM.policy.p26) {
        var v92 = matchArray[0]
      }
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v92], JAM.policy.p38);
      v93 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p38);
    }
  } else {
    introspect(JAM.policy.p27) {
      arrayOfFasta[0] = sequenceData;
    }
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v559 = sequence$$2.length;
  var v95 = "&gt;results for " + v559;
  var stringToReturn = v95 + " residue sequence ";
  var v560 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p38);
  var v97 = v560 != -1;
  if (v97) {
    var v561 = stringToReturn + '"';
    var v96 = v561 + fastaSequenceTitle;
    stringToReturn = v96 + '"';
  }
  var v562 = stringToReturn + ' starting "';
  var v563 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p24);
  var v98 = v562 + v563;
  stringToReturn = v98 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v564 = sequenceOne.length;
  var v99 = "Search results for " + v564;
  var stringToReturn$$1 = v99 + " residue sequence ";
  var v565 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p38);
  var v101 = v565 != -1;
  if (v101) {
    var v566 = stringToReturn$$1 + '"';
    var v100 = v566 + fastaSequenceTitleOne;
    stringToReturn$$1 = v100 + '"';
  }
  var v567 = stringToReturn$$1 + ' starting "';
  var v568 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p24);
  var v102 = v567 + v568;
  stringToReturn$$1 = v102 + '"\n';
  var v569 = stringToReturn$$1 + "and ";
  var v570 = sequenceTwo.length;
  var v103 = v569 + v570;
  stringToReturn$$1 = v103 + " residue sequence ";
  var v571 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p38);
  var v105 = v571 != -1;
  if (v105) {
    var v572 = stringToReturn$$1 + '"';
    var v104 = v572 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v104 + '"';
  }
  var v573 = stringToReturn$$1 + ' starting "';
  var v574 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p24);
  var v106 = v573 + v574;
  stringToReturn$$1 = v106 + '"';
  var v107 = '<div class="info">' + stringToReturn$$1;
  return v107 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v108 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = JAM.new(Array, [v108], JAM.policy.p38);
  var j$$2 = 0;
  var v575 = arrayOfPatterns$$3.length;
  var v111 = j$$2 < v575;
  for (;v111;) {
    var v109 = geneticCodeMatchExp$$1;
    var v110 = j$$2;
    introspect(JAM.policy.p26) {
      var v1022 = arrayOfPatterns$$3[j$$2]
    }
    var v876 = JAM.call(v1022.match, v1022, [/\/.+\//], JAM.policy.p38);
    var v576 = v876 + "gi";
    if (JAM.isEval(eval)) {
      var v1520 = eval("introspect(JAM.policy.pFull) { " + v576 + " }")
    } else {
      var v1520 = JAM.call(eval, null, [v576])
    }
    introspect(JAM.policy.p27) {
      v109[v110] = v1520;
    }
    j$$2 = j$$2 + 1;
    var v577 = arrayOfPatterns$$3.length;
    v111 = j$$2 < v577;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v112 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = JAM.new(Array, [v112], JAM.policy.p38);
  var j$$3 = 0;
  var v578 = arrayOfPatterns$$4.length;
  var v117 = j$$3 < v578;
  for (;v117;) {
    var v113 = geneticCodeMatchResult$$1;
    var v114 = j$$3;
    introspect(JAM.policy.p26) {
      var v877 = arrayOfPatterns$$4[j$$3]
    }
    var v579 = JAM.call(v877.match, v877, [/=[a-zA-Z\*]/], JAM.policy.p38);
    var v1521 = JAM.call(v579.toString, v579, [], JAM.policy.p39);
    introspect(JAM.policy.p27) {
      v113[v114] = v1521;
    }
    var v115 = geneticCodeMatchResult$$1;
    var v116 = j$$3;
    introspect(JAM.policy.p26) {
      var v580 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1522 = JAM.call(v580.replace, v580, [/=/g, ""], JAM.policy.p41);
    introspect(JAM.policy.p27) {
      v115[v116] = v1522;
    }
    j$$3 = j$$3 + 1;
    var v581 = arrayOfPatterns$$4.length;
    v117 = j$$3 < v581;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v582 = sequence$$3.length;
  var v118 = "Results for " + v582;
  var stringToReturn$$2 = v118 + " residue sequence ";
  var v583 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p38);
  var v120 = v583 != -1;
  if (v120) {
    var v584 = stringToReturn$$2 + '"';
    var v119 = v584 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v119 + '"';
  }
  var v585 = stringToReturn$$2 + ' starting "';
  var v586 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p24);
  var v121 = v585 + v586;
  stringToReturn$$2 = v121 + '"';
  var v122 = '<div class="info">' + stringToReturn$$2;
  return v122 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v878 = "Results for " + topology;
  var v587 = v878 + " ";
  var v588 = sequence$$4.length;
  var v123 = v587 + v588;
  var stringToReturn$$3 = v123 + " residue sequence ";
  var v589 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p38);
  var v125 = v589 != -1;
  if (v125) {
    var v590 = stringToReturn$$3 + '"';
    var v124 = v590 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v124 + '"';
  }
  var v591 = stringToReturn$$3 + ' starting "';
  var v592 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p24);
  var v126 = v591 + v592;
  stringToReturn$$3 = v126 + '"';
  var v127 = '<div class="info">' + stringToReturn$$3;
  return v127 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v593 = sequenceOne$$1.length;
  var v128 = "Alignment results for " + v593;
  var stringToReturn$$4 = v128 + " residue sequence ";
  var v594 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p38);
  var v130 = v594 != -1;
  if (v130) {
    var v595 = stringToReturn$$4 + '"';
    var v129 = v595 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v129 + '"';
  }
  var v596 = stringToReturn$$4 + ' starting "';
  var v597 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p24);
  var v131 = v596 + v597;
  stringToReturn$$4 = v131 + '"\n';
  var v598 = stringToReturn$$4 + "and ";
  var v599 = sequenceTwo$$1.length;
  var v132 = v598 + v599;
  stringToReturn$$4 = v132 + " residue sequence ";
  var v600 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p38);
  var v134 = v600 != -1;
  if (v134) {
    var v601 = stringToReturn$$4 + '"';
    var v133 = v601 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v133 + '"';
  }
  var v602 = stringToReturn$$4 + ' starting "';
  var v603 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p24);
  var v135 = v602 + v603;
  stringToReturn$$4 = v135 + '"';
  var v136 = '<div class="info">' + stringToReturn$$4;
  return v136 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = JAM.new(Array, [], JAM.policy.p39);
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v138 = j$$4 < lengthOut;
  for (;v138;) {
    var v604 = JAM.call(Math.random, Math, [], JAM.policy.p39);
    var v605 = components.length;
    var v137 = v604 * v605;
    tempNum = JAM.call(Math.floor, Math, [v137], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      tempChar = components[tempNum];
    }
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p38);
    j$$4 = j$$4 + 1;
    v138 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p22);
}
function getSequenceFromFasta(sequenceRecord) {
  var v606 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38);
  var v139 = v606 != -1;
  if (v139) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p41);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v607 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p38);
  var v141 = v607 != -1;
  if (v141) {
    var v140 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p41);
    fastaTitle = JAM.call(v140.toString, v140, [], JAM.policy.p39);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p41);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p41);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p41);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1359 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p38);
  var v1335 = v1359 != -1;
  var v1361 = !v1335;
  if (v1361) {
    var v1360 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p38);
    v1335 = v1360 != -1;
  }
  var v1309 = v1335;
  var v1337 = !v1309;
  if (v1337) {
    var v1336 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p38);
    v1309 = v1336 != -1;
  }
  var v1283 = v1309;
  var v1311 = !v1283;
  if (v1311) {
    var v1310 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p38);
    v1283 = v1310 != -1;
  }
  var v1253 = v1283;
  var v1285 = !v1253;
  if (v1285) {
    var v1284 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p38);
    v1253 = v1284 != -1;
  }
  var v1216 = v1253;
  var v1255 = !v1216;
  if (v1255) {
    var v1254 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p38);
    v1216 = v1254 != -1;
  }
  var v1174 = v1216;
  var v1218 = !v1174;
  if (v1218) {
    var v1217 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p38);
    v1174 = v1217 != -1;
  }
  var v1113 = v1174;
  var v1176 = !v1113;
  if (v1176) {
    var v1175 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p38);
    v1113 = v1175 != -1;
  }
  var v1023 = v1113;
  var v1115 = !v1023;
  if (v1115) {
    var v1114 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p38);
    v1023 = v1114 != -1;
  }
  var v879 = v1023;
  var v1025 = !v879;
  if (v1025) {
    var v1024 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p38);
    v879 = v1024 != -1;
  }
  var v608 = v879;
  var v881 = !v608;
  if (v881) {
    var v880 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p38);
    v608 = v880 != -1;
  }
  var v142 = v608;
  if (v142) {
    return false;
  }
  return true;
}
function openForm() {
  var v143 = outputWindow.document;
  JAM.call(v143.write, v143, ['<form action="">\n'], JAM.policy.p22);
  return true;
}
function openPre() {
  var v144 = outputWindow.document;
  JAM.call(v144.write, v144, ["<pre>"], JAM.policy.p22);
  var v145 = outputWindow.document;
  JAM.call(v145.write, v145, ['<div class="pre">'], JAM.policy.p22);
  return;
}
function openTextArea() {
  var v146 = outputWindow.document;
  JAM.call(v146.write, v146, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p22);
  return true;
}
function openWindow(title$$5) {
  JAM.call(_openWindow, null, [title$$5, true], JAM.policy.p41);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p23);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p39);
  var v147 = outputWindow.document;
  var v1026 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v882 = v1026 + "<head>\n";
  var v609 = v882 + "<title>Sequence Manipulation Suite</title>\n";
  var v148 = v609 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v147.write, v147, [v148], JAM.policy.p38);
  if (isColor) {
    var v149 = outputWindow.document;
    var v1425 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1404 = v1425 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1383 = v1404 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1362 = v1383 + "div.info {font-weight: bold}\n";
    var v1338 = v1362 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1312 = v1338 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1286 = v1312 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1256 = v1286 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1219 = v1256 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1177 = v1219 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1116 = v1177 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1027 = v1116 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v883 = v1027 + "td.many {color: #000000}\n";
    var v610 = v883 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v150 = v610 + "</style>\n";
    JAM.call(v149.write, v149, [v150], JAM.policy.p38);
  } else {
    var v151 = outputWindow.document;
    var v1446 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1426 = v1446 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1405 = v1426 + "div.title {display: none}\n";
    var v1384 = v1405 + "div.info {font-weight: bold}\n";
    var v1363 = v1384 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1339 = v1363 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1313 = v1339 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1287 = v1313 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1257 = v1287 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1220 = v1257 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1178 = v1220 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1117 = v1178 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1028 = v1117 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v884 = v1028 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v611 = v884 + "img {display: none}\n";
    var v152 = v611 + "</style>\n";
    JAM.call(v151.write, v151, [v152], JAM.policy.p38);
  }
  var v153 = outputWindow.document;
  var v1029 = "</head>\n" + '<body class="main">\n';
  var v885 = v1029 + '<div class="title">';
  var v612 = v885 + title$$6;
  var v154 = v612 + " results</div>\n";
  JAM.call(v153.write, v153, [v154], JAM.policy.p38);
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
  var v155 = outputWindow.document;
  var v1030 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v886 = v1030 + "<head>\n";
  var v613 = v886 + "<title>Sequence Manipulation Suite</title>\n";
  var v156 = v613 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v155.write, v155, [v156], JAM.policy.p38);
  if (isBackground) {
    var v157 = outputWindow.document;
    var v1427 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1406 = v1427 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1385 = v1406 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1364 = v1385 + "div.info {font-weight: bold}\n";
    var v1340 = v1364 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1314 = v1340 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1288 = v1314 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1258 = v1288 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1221 = v1258 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1179 = v1221 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1118 = v1179 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v1031 = v1118 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v887 = v1031 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v614 = v887 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v158 = v614 + "</style>\n";
    JAM.call(v157.write, v157, [v158], JAM.policy.p38);
  } else {
    var v159 = outputWindow.document;
    var v1465 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1447 = v1465 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1428 = v1447 + "div.title {display: none}\n";
    var v1407 = v1428 + "div.info {font-weight: bold}\n";
    var v1386 = v1407 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1365 = v1386 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1341 = v1365 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1315 = v1341 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1289 = v1315 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1259 = v1289 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1222 = v1259 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1180 = v1222 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1119 = v1180 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v1032 = v1119 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v888 = v1032 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v615 = v888 + "img {display: none}\n";
    var v160 = v615 + "</style>\n";
    JAM.call(v159.write, v159, [v160], JAM.policy.p38);
  }
  var v161 = outputWindow.document;
  var v1033 = "</head>\n" + '<body class="main">\n';
  var v889 = v1033 + '<div class="title">';
  var v616 = v889 + title$$8;
  var v162 = v616 + " results</div>\n";
  JAM.call(v161.write, v161, [v162], JAM.policy.p38);
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
  var v617 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p38);
  var v163 = v617 != -1;
  if (v163) {
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
  var v164 = j$$5 < lengthOfColumn;
  for (;v164;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v164 = j$$5 < lengthOfColumn;
  }
  var v165 = tempString + theNumber;
  theNumber = v165 + " ";
  var v166 = sequenceToAppend + theNumber;
  sequenceToAppend = v166 + tabIn;
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
    var v618 = testArray[0]
  }
  var v167 = v618 != testString;
  if (v167) {
    JAM.call(alert, null, ["Array object push method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v619 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p38);
  var v168 = v619 == -1;
  if (v168) {
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
  var v169 = !caughtException;
  if (v169) {
    JAM.call(alert, null, ["Exception handling not supported. See browser compatibility page."], JAM.policy.p22);
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p40);
  var v170 = testString != "1X2X3X";
  if (v170) {
    JAM.call(alert, null, ["Nested function in String replace method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  var testNum = 2489.8237;
  var v620 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p25);
  var v171 = v620 != 2489.824;
  if (v171) {
    JAM.call(alert, null, ["Number toFixed() method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  var v621 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p25);
  var v172 = v621 != 2489.8;
  if (v172) {
    JAM.call(alert, null, ["Number toPrecision() method not supported. See browser compatibility page."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v622 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p38);
  var v173 = v622 == -1;
  if (v173) {
    JAM.call(alert, null, ["Please enter a number"], JAM.policy.p22);
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v1120 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p38);
  var v1034 = v1120 == -1;
  var v1122 = !v1034;
  if (v1122) {
    var v1121 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p38);
    v1034 = v1121 == -1;
  }
  var v890 = v1034;
  var v1036 = !v890;
  if (v1036) {
    var v1035 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p38);
    v890 = v1035 == -1;
  }
  var v623 = v890;
  var v892 = !v623;
  if (v892) {
    var v891 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p38);
    v623 = v891 == -1;
  }
  var v174 = v623;
  if (v174) {
    JAM.call(alert, null, ["Please enter the contents of an EMBL file."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v624 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p38);
  var v175 = v624 == -1;
  if (v175) {
    JAM.call(alert, null, ["Please enter a number."], JAM.policy.p22);
    return false;
  }
  var v177 = theNumber$$2 > maxInput$$2;
  if (v177) {
    var v625 = "Please enter a number less than or equal to " + maxInput$$2;
    var v176 = v625 + ".";
    JAM.call(alert, null, [v176], JAM.policy.p38);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v626 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p38);
  var v178 = v626 != -1;
  if (v178) {
    JAM.call(alert, null, ["The sequence contains non-DNA characters, which will be omitted."], JAM.policy.p22);
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v627 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p38);
  var v179 = v627 != -1;
  if (v179) {
    JAM.call(alert, null, ["The sequence contains non-protein characters, which will be omitted."], JAM.policy.p22);
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v1123 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p38);
  var v1037 = v1123 == -1;
  var v1125 = !v1037;
  if (v1125) {
    var v1124 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p38);
    v1037 = v1124 == -1;
  }
  var v893 = v1037;
  var v1039 = !v893;
  if (v1039) {
    var v1038 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p38);
    v893 = v1038 == -1;
  }
  var v628 = v893;
  var v895 = !v628;
  if (v895) {
    var v894 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p38);
    v628 = v894 == -1;
  }
  var v180 = v628;
  if (v180) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1126 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p38);
  var v1040 = v1126 == -1;
  var v1128 = !v1040;
  if (v1128) {
    var v1127 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p38);
    v1040 = v1127 == -1;
  }
  var v896 = v1040;
  var v1042 = !v896;
  if (v1042) {
    var v1041 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p38);
    v896 = v1041 == -1;
  }
  var v629 = v896;
  var v898 = !v629;
  if (v898) {
    var v897 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p38);
    v629 = v897 == -1;
  }
  var v181 = v629;
  if (v181) {
    JAM.call(alert, null, ["Please enter the contents of a GenBank file."], JAM.policy.p22);
    return false;
  }
  var v630 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p38);
  var v182 = v630 == -1;
  if (v182) {
    JAM.call(alert, null, ["The file has no defined features."], JAM.policy.p22);
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v1129 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p38);
  var v1043 = v1129 == -1;
  var v1131 = !v1043;
  if (v1131) {
    var v1130 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p38);
    v1043 = v1130 == -1;
  }
  var v899 = v1043;
  var v1045 = !v899;
  if (v1045) {
    var v1044 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p38);
    v899 = v1044 == -1;
  }
  var v631 = v899;
  var v901 = !v631;
  if (v901) {
    var v900 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p38);
    v631 = v900 == -1;
  }
  var v183 = v631;
  if (v183) {
    JAM.call(alert, null, ["Please enter the contents of an EMBL file."], JAM.policy.p22);
    return false;
  }
  var v632 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p38);
  var v184 = v632 == -1;
  if (v184) {
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
  var v192 = i$$5 < stopBase;
  for (;v192;) {
    var v185 = i$$5 + 1;
    lineOfText = JAM.call(rightNum, null, [v185, lineOfText, 8, tabIn$$1], JAM.policy.p40);
    var j$$6 = 1;
    var v633 = basePerLine / groupSize;
    var v189 = j$$6 <= v633;
    for (;v189;) {
      var v188 = k < groupSize;
      for (;v188;) {
        var v186 = lineOfText;
        var v634 = k + i$$5;
        var v187 = JAM.call(text$$10.charAt, text$$10, [v634], JAM.policy.p38);
        lineOfText = v186 + v187;
        k = k + 1;
        v188 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v635 = basePerLine / groupSize;
      v189 = j$$6 <= v635;
    }
    var v190 = outputWindow.document;
    var v191 = lineOfText + "\n";
    JAM.call(v190.write, v190, [v191], JAM.policy.p38);
    lineOfText = "";
    v192 = i$$5 < stopBase;
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
    var v636 = adjustment < 0;
    if (v636) {
      v636 = adjusted >= 0;
    }
    var v193 = v636;
    if (v193) {
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
  var v226 = i$$6 < stopBase$$2;
  for (;v226;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v637 = basePerLine$$2 / groupSize$$2;
    var v202 = j$$7 <= v637;
    for (;v202;) {
      var v197 = k$$1 < groupSize$$2;
      for (;v197;) {
        var v638 = i$$6 + k$$1;
        var v194 = v638 >= stopBase$$2;
        if (v194) {
          break;
        }
        var v195 = lineOfText$$1;
        var v639 = k$$1 + i$$6;
        var v196 = JAM.call(text$$12.charAt, text$$12, [v639], JAM.policy.p38);
        lineOfText$$1 = v195 + v196;
        k$$1 = k$$1 + 1;
        v197 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v200 = numberPosition$$1 == "above";
      if (v200) {
        var v198 = aboveNum;
        var v640 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40);
        var v199 = JAM.call(rightNum, null, [v640, "", groupSize$$2, tabIn$$3], JAM.policy.p41);
        aboveNum = v198 + v199;
      }
      var v201 = i$$6 >= stopBase$$2;
      if (v201) {
        break;
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v641 = basePerLine$$2 / groupSize$$2;
      v202 = j$$7 <= v641;
    }
    var v225 = numberPosition$$1 == "left";
    if (v225) {
      var v203 = outputWindow.document;
      var v1046 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p40);
      var v902 = JAM.call(rightNum, null, [v1046, "", 8, tabIn$$3], JAM.policy.p41);
      var v642 = v902 + lineOfText$$1;
      var v204 = v642 + "\n";
      JAM.call(v203.write, v203, [v204], JAM.policy.p38);
      var v208 = strands$$1 == "two";
      if (v208) {
        var v205 = outputWindow.document;
        var v1047 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p40);
        var v903 = JAM.call(rightNum, null, [v1047, "", 8, tabIn$$3], JAM.policy.p41);
        var v904 = JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38);
        var v643 = v903 + v904;
        var v206 = v643 + "\n";
        JAM.call(v205.write, v205, [v206], JAM.policy.p38);
        var v207 = outputWindow.document;
        JAM.call(v207.write, v207, ["\n"], JAM.policy.p22);
      }
    } else {
      var v224 = numberPosition$$1 == "right";
      if (v224) {
        var v209 = outputWindow.document;
        var v905 = lineOfText$$1;
        var v906 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40);
        var v644 = v905 + v906;
        var v210 = v644 + "\n";
        JAM.call(v209.write, v209, [v210], JAM.policy.p38);
        var v214 = strands$$1 == "two";
        if (v214) {
          var v211 = outputWindow.document;
          var v907 = JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38);
          var v908 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p40);
          var v645 = v907 + v908;
          var v212 = v645 + "\n";
          JAM.call(v211.write, v211, [v212], JAM.policy.p38);
          var v213 = outputWindow.document;
          JAM.call(v213.write, v213, ["\n"], JAM.policy.p22);
        }
      } else {
        var v223 = numberPosition$$1 == "above";
        if (v223) {
          var v215 = outputWindow.document;
          var v216 = aboveNum + "\n";
          JAM.call(v215.write, v215, [v216], JAM.policy.p38);
          var v217 = outputWindow.document;
          var v218 = lineOfText$$1 + "\n";
          JAM.call(v217.write, v217, [v218], JAM.policy.p38);
          var v222 = strands$$1 == "two";
          if (v222) {
            var v219 = outputWindow.document;
            var v646 = JAM.call(complement, null, [lineOfText$$1], JAM.policy.p38);
            var v220 = v646 + "\n";
            JAM.call(v219.write, v219, [v220], JAM.policy.p38);
            var v221 = outputWindow.document;
            JAM.call(v221.write, v221, ["\n"], JAM.policy.p22);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v226 = i$$6 < stopBase$$2;
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
  var v247 = i$$7 < stopBase$$3;
  for (;v247;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v647 = basePerLine$$3 / groupSize$$3;
    var v235 = j$$8 <= v647;
    for (;v235;) {
      var v230 = k$$2 < groupSize$$3;
      for (;v230;) {
        var v648 = i$$7 + k$$2;
        var v227 = v648 >= stopBase$$3;
        if (v227) {
          break;
        }
        var v228 = lineOfText$$2;
        var v649 = k$$2 + i$$7;
        var v229 = JAM.call(text$$13.charAt, text$$13, [v649], JAM.policy.p38);
        lineOfText$$2 = v228 + v229;
        k$$2 = k$$2 + 1;
        v230 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v233 = numberPosition$$2 == "above";
      if (v233) {
        var v231 = aboveNum$$1;
        var v232 = JAM.call(rightNum, null, [i$$7, "", groupSize$$3, tabIn$$4], JAM.policy.p41);
        aboveNum$$1 = v231 + v232;
      }
      var v234 = i$$7 >= stopBase$$3;
      if (v234) {
        break;
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v650 = basePerLine$$3 / groupSize$$3;
      v235 = j$$8 <= v650;
    }
    var v246 = numberPosition$$2 == "left";
    if (v246) {
      var v236 = outputWindow.document;
      var v909 = JAM.call(rightNum, null, [lineNum$$1, "", 8, tabIn$$4], JAM.policy.p41);
      var v651 = v909 + lineOfText$$2;
      var v237 = v651 + "\n";
      JAM.call(v236.write, v236, [v237], JAM.policy.p38);
    } else {
      var v245 = numberPosition$$2 == "right";
      if (v245) {
        var v238 = outputWindow.document;
        var v652 = lineOfText$$2 + i$$7;
        var v239 = v652 + "\n";
        JAM.call(v238.write, v238, [v239], JAM.policy.p38);
      } else {
        var v244 = numberPosition$$2 == "above";
        if (v244) {
          var v240 = outputWindow.document;
          var v241 = aboveNum$$1 + "\n";
          JAM.call(v240.write, v240, [v241], JAM.policy.p38);
          var v242 = outputWindow.document;
          var v243 = lineOfText$$2 + "\n";
          JAM.call(v242.write, v242, [v243], JAM.policy.p38);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v247 = i$$7 < stopBase$$3;
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
  var v1048 = sequence$$13.length;
  var v910 = v1048 <= firstIndexToMutate;
  var v1049 = !v910;
  if (v1049) {
    v910 = lastIndexToMutate < 0;
  }
  var v653 = v910;
  var v911 = !v653;
  if (v911) {
    v653 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v248 = v653;
  if (v248) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v256 = i$$8 < numMut;
  for (;v256;) {
    maxNum = sequence$$13.length;
    var v654 = JAM.call(Math.random, Math, [], JAM.policy.p39);
    var v249 = v654 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v249], JAM.policy.p38);
    var v655 = randNum < firstIndexToMutate;
    var v912 = !v655;
    if (v912) {
      v655 = randNum > lastIndexToMutate;
    }
    var v250 = v655;
    if (v250) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v256 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p38);
    needNewChar = true;
    for (;needNewChar;) {
      var v656 = JAM.call(Math.random, Math, [], JAM.policy.p39);
      var v657 = components$$1.length;
      var v251 = v656 * v657;
      componentsIndex = JAM.call(Math.round, Math, [v251], JAM.policy.p38);
      var v658 = components$$1.length;
      var v252 = componentsIndex == v658;
      if (v252) {
        componentsIndex = 0;
      }
      introspect(JAM.policy.p26) {
        var v659 = components$$1[componentsIndex]
      }
      var v253 = v659 != currentChar;
      if (v253) {
        needNewChar = false;
      }
    }
    var v660 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p24);
    introspect(JAM.policy.p26) {
      var v661 = components$$1[componentsIndex]
    }
    var v254 = v660 + v661;
    var v662 = randNum + 1;
    var v663 = sequence$$13.length;
    var v255 = JAM.call(sequence$$13.substring, sequence$$13, [v662, v663], JAM.policy.p40);
    sequence$$13 = v254 + v255;
    i$$8 = i$$8 + 1;
    v256 = i$$8 < numMut;
  }
  var v257 = outputWindow.document;
  var v258 = JAM.call(addReturns, null, [sequence$$13], JAM.policy.p38);
  JAM.call(v257.write, v257, [v258], JAM.policy.p38);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v263 = j$$9 < lengthOut$$1;
  for (;v263;) {
    var v664 = JAM.call(Math.random, Math, [], JAM.policy.p39);
    var v665 = components$$2.length;
    var v259 = v664 * v665;
    tempNum$$1 = JAM.call(Math.floor, Math, [v259], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      tempChar$$1 = components$$2[tempNum$$1];
    }
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v666 = sequence$$14.length;
    var v262 = v666 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = sequence$$14 + "\n";
      JAM.call(v260.write, v260, [v261], JAM.policy.p38);
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v263 = j$$9 < lengthOut$$1;
  }
  var v264 = outputWindow.document;
  var v265 = sequence$$14 + "\n";
  JAM.call(v264.write, v264, [v265], JAM.policy.p38);
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
  var v269 = dnaConformation == "circular";
  if (v269) {
    var v266 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p24);
    shiftValue = v266.length;
    var v1050 = sequence$$15.length;
    var v913 = v1050 - lookAhead;
    var v914 = sequence$$15.length;
    var v667 = JAM.call(sequence$$15.substring, sequence$$15, [v913, v914], JAM.policy.p40);
    var v267 = v667 + sequence$$15;
    var v268 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p24);
    sequence$$15 = v267 + v268;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v270 = outputWindow.document;
  JAM.call(v270.write, v270, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p22);
  var v271 = outputWindow.document;
  var v1051 = '<tr><td class="title" width="200px">' + "Site:";
  var v915 = v1051 + '</td><td class="title">';
  var v668 = v915 + "Positions:";
  var v272 = v668 + "</td></tr>\n";
  JAM.call(v271.write, v271, [v272], JAM.policy.p38);
  var i$$9 = 0;
  var v669 = arrayOfItems.length;
  var v288 = i$$9 < v669;
  for (;v288;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAM.policy.p26) {
      var v670 = arrayOfItems[i$$9]
    }
    var v273 = JAM.call(v670.match, v670, [/\/.+\//], JAM.policy.p38);
    matchExp = v273 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    introspect(JAM.policy.p26) {
      var v1052 = arrayOfItems[i$$9]
    }
    var v916 = JAM.call(v1052.match, v1052, [/\)\D*\d+/], JAM.policy.p38);
    var v671 = JAM.call(v916.toString, v916, [], JAM.policy.p39);
    var v274 = JAM.call(v671.replace, v671, [/\)\D*/, ""], JAM.policy.p41);
    cutDistance = JAM.call(parseFloat, null, [v274], JAM.policy.p38);
    var v280 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    for (;v280;) {
      var v275 = matchExp.lastIndex;
      matchPosition = v275 - cutDistance;
      var v672 = matchPosition >= lowerLimit;
      if (v672) {
        v672 = matchPosition < upperLimit;
      }
      var v278 = v672;
      if (v278) {
        timesFound = timesFound + 1;
        var v276 = tempString$$1 + ", ";
        var v673 = matchPosition - shiftValue;
        var v277 = v673 + 1;
        tempString$$1 = v276 + v277;
      }
      var v674 = matchExp.lastIndex;
      var v917 = RegExp.lastMatch;
      var v675 = v917.length;
      var v279 = v674 - v675;
      matchExp.lastIndex = v279 + 1;
      v280 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p38);
    }
    var v676 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p38);
    var v281 = v676 != -1;
    if (v281) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p41);
    }
    var v285 = timesFound == 0;
    if (v285) {
      backGroundClass = "none";
    } else {
      var v284 = timesFound == 1;
      if (v284) {
        backGroundClass = "one";
      } else {
        var v283 = timesFound == 2;
        if (v283) {
          backGroundClass = "two";
        } else {
          var v282 = timesFound == 3;
          if (v282) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v286 = outputWindow.document;
    var v1260 = '<tr><td class="' + backGroundClass;
    var v1223 = v1260 + '">';
    introspect(JAM.policy.p26) {
      var v1316 = arrayOfItems[i$$9]
    }
    var v1290 = JAM.call(v1316.match, v1316, [/\([^\(]+\)/], JAM.policy.p38);
    var v1261 = JAM.call(v1290.toString, v1290, [], JAM.policy.p39);
    var v1224 = JAM.call(v1261.replace, v1261, [/\(|\)/g, ""], JAM.policy.p41);
    var v1181 = v1223 + v1224;
    var v1132 = v1181 + '</td><td class="';
    var v1053 = v1132 + backGroundClass;
    var v918 = v1053 + '">';
    var v677 = v918 + tempString$$1;
    var v287 = v677 + "</td></tr>\n";
    JAM.call(v286.write, v286, [v287], JAM.policy.p38);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v678 = arrayOfItems.length;
    v288 = i$$9 < v678;
  }
  var v289 = outputWindow.document;
  JAM.call(v289.write, v289, ["</tbody></table>\n"], JAM.policy.p22);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v290 = outputWindow.document;
  JAM.call(v290.write, v290, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p22);
  var v291 = outputWindow.document;
  var v1182 = '<tr><td class="title">' + "Pattern:";
  var v1133 = v1182 + '</td><td class="title">';
  var v1054 = v1133 + "Times found:";
  var v919 = v1054 + '</td><td class="title">';
  var v679 = v919 + "Percentage:";
  var v292 = v679 + "</td></tr>\n";
  JAM.call(v291.write, v291, [v292], JAM.policy.p38);
  var i$$10 = 0;
  var v680 = arrayOfItems$$1.length;
  var v301 = i$$10 < v680;
  for (;v301;) {
    var tempNumber = 0;
    introspect(JAM.policy.p26) {
      var v681 = arrayOfItems$$1[i$$10]
    }
    var v293 = JAM.call(v681.match, v681, [/\/[^\/]+\//], JAM.policy.p38);
    var matchExp$$1 = v293 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v682 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p38);
    var v295 = v682 != -1;
    if (v295) {
      var v294 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p38);
      tempNumber = v294.length;
    }
    var percentage = 0;
    var v920 = originalLength + 1;
    introspect(JAM.policy.p26) {
      var v1134 = arrayOfItems$$1[i$$10]
    }
    var v1055 = JAM.call(v1134.match, v1134, [/\d+/], JAM.policy.p38);
    var v921 = JAM.call(parseFloat, null, [v1055], JAM.policy.p38);
    var v683 = v920 - v921;
    var v298 = v683 > 0;
    if (v298) {
      var v296 = 100 * tempNumber;
      var v684 = originalLength + 1;
      introspect(JAM.policy.p26) {
        var v1056 = arrayOfItems$$1[i$$10]
      }
      var v922 = JAM.call(v1056.match, v1056, [/\d+/], JAM.policy.p38);
      var v685 = JAM.call(parseFloat, null, [v922], JAM.policy.p38);
      var v297 = v684 - v685;
      percentage = v296 / v297;
    }
    var v299 = outputWindow.document;
    introspect(JAM.policy.p26) {
      var v1317 = arrayOfItems$$1[i$$10]
    }
    var v1291 = JAM.call(v1317.match, v1317, [/\([^\(]+\)\b/], JAM.policy.p38);
    var v1262 = JAM.call(v1291.toString, v1291, [], JAM.policy.p39);
    var v1225 = JAM.call(v1262.replace, v1262, [/\(|\)/g, ""], JAM.policy.p41);
    var v1183 = "<tr><td>" + v1225;
    var v1135 = v1183 + "</td><td>";
    var v1057 = v1135 + tempNumber;
    var v923 = v1057 + "</td><td>";
    var v924 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p25);
    var v686 = v923 + v924;
    var v300 = v686 + "</td></tr>\n";
    JAM.call(v299.write, v299, [v300], JAM.policy.p38);
    i$$10 = i$$10 + 1;
    var v687 = arrayOfItems$$1.length;
    v301 = i$$10 < v687;
  }
  var v302 = outputWindow.document;
  JAM.call(v302.write, v302, ["</tbody></table>\n"], JAM.policy.p22);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v688 = sequence$$17.length;
  var v309 = v688 > 0;
  for (;v309;) {
    maxNum$$1 = sequence$$17.length;
    var v689 = JAM.call(Math.random, Math, [], JAM.policy.p39);
    var v303 = v689 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v303], JAM.policy.p38);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p38);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p24);
    var v304 = randNum$$1 + 1;
    var v305 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v304, v305], JAM.policy.p40);
    sequence$$17 = tempString1 + tempString2;
    var v690 = tempSeq.length;
    var v308 = v690 == 60;
    if (v308) {
      var v306 = outputWindow.document;
      var v307 = tempSeq + "\n";
      JAM.call(v306.write, v306, [v307], JAM.policy.p38);
      tempSeq = "";
    }
    var v691 = sequence$$17.length;
    v309 = v691 > 0;
  }
  var v310 = outputWindow.document;
  var v311 = tempSeq + "\n";
  JAM.call(v310.write, v310, [v311], JAM.policy.p38);
  return true;
}
function getGeneticCodeString(type$$25) {
  var v925 = JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39);
  var v692 = v925 == "standard";
  var v927 = !v692;
  if (v927) {
    var v926 = JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39);
    v692 = v926 == "transl_table=1";
  }
  var v313 = v692;
  if (v313) {
    var v1500 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1483 = v1500 + "/ga[tcuy]/=D,";
    var v1466 = v1483 + "/ga[agr]/=E,";
    var v1448 = v1466 + "/[tu][tu][tcuy]/=F,";
    var v1429 = v1448 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1408 = v1429 + "/ca[tcuy]/=H,";
    var v1387 = v1408 + "/a[tu][atcuwmhy]/=I,";
    var v1366 = v1387 + "/aa[agr]/=K,";
    var v1342 = v1366 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1318 = v1342 + "/a[tu]g/=M,";
    var v1292 = v1318 + "/aa[tucy]/=N,";
    var v1263 = v1292 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1226 = v1263 + "/ca[agr]/=Q,";
    var v1184 = v1226 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1136 = v1184 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1058 = v1136 + "/ac[acgturyswkmbdhvn]/=T,";
    var v928 = v1058 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v693 = v928 + "/[tu]gg/=W,";
    var v312 = v693 + "/[tu]a[ctuy]/=Y,";
    return v312 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v694 = JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39);
  var v315 = v694 == "transl_table=2";
  if (v315) {
    var v1501 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1484 = v1501 + "/ga[tcuy]/=D,";
    var v1467 = v1484 + "/ga[agr]/=E,";
    var v1449 = v1467 + "/[tu][tu][tcuy]/=F,";
    var v1430 = v1449 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1409 = v1430 + "/ca[tcuy]/=H,";
    var v1388 = v1409 + "/a[tu][tcuy]/=I,";
    var v1367 = v1388 + "/aa[agr]/=K,";
    var v1343 = v1367 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1319 = v1343 + "/a[tu][agr]/=M,";
    var v1293 = v1319 + "/aa[tucy]/=N,";
    var v1264 = v1293 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1227 = v1264 + "/ca[agr]/=Q,";
    var v1185 = v1227 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1137 = v1185 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1059 = v1137 + "/ac[acgturyswkmbdhvn]/=T,";
    var v929 = v1059 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v695 = v929 + "/[tu]g[agr]/=W,";
    var v314 = v695 + "/[tu]a[ctuy]/=Y,";
    return v314 + "/[tu]a[agr]|ag[agr]/=*";
  }
  var v696 = JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39);
  var v317 = v696 == "transl_table=3";
  if (v317) {
    var v1502 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1485 = v1502 + "/ga[tcuy]/=D,";
    var v1468 = v1485 + "/ga[agr]/=E,";
    var v1450 = v1468 + "/[tu][tu][tcuy]/=F,";
    var v1431 = v1450 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1410 = v1431 + "/ca[tcuy]/=H,";
    var v1389 = v1410 + "/a[tu][tcuy]/=I,";
    var v1368 = v1389 + "/aa[agr]/=K,";
    var v1344 = v1368 + "/[tu][tu][agr]/=L,";
    var v1320 = v1344 + "/a[tu][agr]/=M,";
    var v1294 = v1320 + "/aa[tucy]/=N,";
    var v1265 = v1294 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1228 = v1265 + "/ca[agr]/=Q,";
    var v1186 = v1228 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1138 = v1186 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1060 = v1138 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v930 = v1060 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v697 = v930 + "/[tu]g[agr]/=W,";
    var v316 = v697 + "/[tu]a[ctuy]/=Y,";
    return v316 + "/[tu]a[agr]/=*";
  }
  var v698 = JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39);
  var v319 = v698 == "transl_table=4";
  if (v319) {
    var v1503 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1486 = v1503 + "/ga[tcuy]/=D,";
    var v1469 = v1486 + "/ga[agr]/=E,";
    var v1451 = v1469 + "/[tu][tu][tcuy]/=F,";
    var v1432 = v1451 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1411 = v1432 + "/ca[tcuy]/=H,";
    var v1390 = v1411 + "/a[tu][atcuwmhy]/=I,";
    var v1369 = v1390 + "/aa[agr]/=K,";
    var v1345 = v1369 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1321 = v1345 + "/a[tu]g/=M,";
    var v1295 = v1321 + "/aa[tucy]/=N,";
    var v1266 = v1295 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1229 = v1266 + "/ca[agr]/=Q,";
    var v1187 = v1229 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1139 = v1187 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1061 = v1139 + "/ac[acgturyswkmbdhvn]/=T,";
    var v931 = v1061 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v699 = v931 + "/[tu]g[agr]/=W,";
    var v318 = v699 + "/[tu]a[ctuy]/=Y,";
    return v318 + "/[tu]a[agr]/=*";
  }
  var v700 = JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39);
  var v321 = v700 == "transl_table=5";
  if (v321) {
    var v1504 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1487 = v1504 + "/ga[tcuy]/=D,";
    var v1470 = v1487 + "/ga[agr]/=E,";
    var v1452 = v1470 + "/[tu][tu][tcuy]/=F,";
    var v1433 = v1452 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1412 = v1433 + "/ca[tcuy]/=H,";
    var v1391 = v1412 + "/a[tu][tcuy]/=I,";
    var v1370 = v1391 + "/aa[agr]/=K,";
    var v1346 = v1370 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1322 = v1346 + "/a[tu][agr]/=M,";
    var v1296 = v1322 + "/aa[tucy]/=N,";
    var v1267 = v1296 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1230 = v1267 + "/ca[agr]/=Q,";
    var v1188 = v1230 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1140 = v1188 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1062 = v1140 + "/ac[acgturyswkmbdhvn]/=T,";
    var v932 = v1062 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v701 = v932 + "/[tu]g[agr]/=W,";
    var v320 = v701 + "/[tu]a[ctuy]/=Y,";
    return v320 + "/[tu]a[agr]/=*";
  }
  var v702 = JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39);
  var v323 = v702 == "transl_table=6";
  if (v323) {
    var v1505 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1488 = v1505 + "/ga[tcuy]/=D,";
    var v1471 = v1488 + "/ga[agr]/=E,";
    var v1453 = v1471 + "/[tu][tu][tcuy]/=F,";
    var v1434 = v1453 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1413 = v1434 + "/ca[tcuy]/=H,";
    var v1392 = v1413 + "/a[tu][atcuwmhy]/=I,";
    var v1371 = v1392 + "/aa[agr]/=K,";
    var v1347 = v1371 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1323 = v1347 + "/a[tu]g/=M,";
    var v1297 = v1323 + "/aa[tucy]/=N,";
    var v1268 = v1297 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1231 = v1268 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v1189 = v1231 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1141 = v1189 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1063 = v1141 + "/ac[acgturyswkmbdhvn]/=T,";
    var v933 = v1063 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v703 = v933 + "/[tu]gg/=W,";
    var v322 = v703 + "/[tu]a[ctuy]/=Y,";
    return v322 + "/[tu]ga/=*";
  }
  var v704 = JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39);
  var v325 = v704 == "transl_table=9";
  if (v325) {
    var v1506 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1489 = v1506 + "/ga[tcuy]/=D,";
    var v1472 = v1489 + "/ga[agr]/=E,";
    var v1454 = v1472 + "/[tu][tu][tcuy]/=F,";
    var v1435 = v1454 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1414 = v1435 + "/ca[tcuy]/=H,";
    var v1393 = v1414 + "/a[tu][atcuwmhy]/=I,";
    var v1372 = v1393 + "/aag/=K,";
    var v1348 = v1372 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1324 = v1348 + "/a[tu]g/=M,";
    var v1298 = v1324 + "/aa[atcuwmhy]/=N,";
    var v1269 = v1298 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1232 = v1269 + "/ca[agr]/=Q,";
    var v1190 = v1232 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1142 = v1190 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1064 = v1142 + "/ac[acgturyswkmbdhvn]/=T,";
    var v934 = v1064 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v705 = v934 + "/[tu]g[agr]/=W,";
    var v324 = v705 + "/[tu]a[ctuy]/=Y,";
    return v324 + "/[tu]a[agr]/=*";
  }
  var v706 = JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39);
  var v327 = v706 == "transl_table=10";
  if (v327) {
    var v1507 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1490 = v1507 + "/ga[tcuy]/=D,";
    var v1473 = v1490 + "/ga[agr]/=E,";
    var v1455 = v1473 + "/[tu][tu][tcuy]/=F,";
    var v1436 = v1455 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1415 = v1436 + "/ca[tcuy]/=H,";
    var v1394 = v1415 + "/a[tu][atcuwmhy]/=I,";
    var v1373 = v1394 + "/aa[agr]/=K,";
    var v1349 = v1373 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1325 = v1349 + "/a[tu]g/=M,";
    var v1299 = v1325 + "/aa[tucy]/=N,";
    var v1270 = v1299 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1233 = v1270 + "/ca[agr]/=Q,";
    var v1191 = v1233 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1143 = v1191 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1065 = v1143 + "/ac[acgturyswkmbdhvn]/=T,";
    var v935 = v1065 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v707 = v935 + "/[tu]gg/=W,";
    var v326 = v707 + "/[tu]a[ctuy]/=Y,";
    return v326 + "/[tu]a[agr]/=*";
  }
  var v708 = JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39);
  var v329 = v708 == "transl_table=11";
  if (v329) {
    var v1508 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1491 = v1508 + "/ga[tcuy]/=D,";
    var v1474 = v1491 + "/ga[agr]/=E,";
    var v1456 = v1474 + "/[tu][tu][tcuy]/=F,";
    var v1437 = v1456 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1416 = v1437 + "/ca[tcuy]/=H,";
    var v1395 = v1416 + "/a[tu][atcuwmhy]/=I,";
    var v1374 = v1395 + "/aa[agr]/=K,";
    var v1350 = v1374 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1326 = v1350 + "/a[tu]g/=M,";
    var v1300 = v1326 + "/aa[tucy]/=N,";
    var v1271 = v1300 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1234 = v1271 + "/ca[agr]/=Q,";
    var v1192 = v1234 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1144 = v1192 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1066 = v1144 + "/ac[acgturyswkmbdhvn]/=T,";
    var v936 = v1066 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v709 = v936 + "/[tu]gg/=W,";
    var v328 = v709 + "/[tu]a[ctuy]/=Y,";
    return v328 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v710 = JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39);
  var v331 = v710 == "transl_table=12";
  if (v331) {
    var v1509 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1492 = v1509 + "/ga[tcuy]/=D,";
    var v1475 = v1492 + "/ga[agr]/=E,";
    var v1457 = v1475 + "/[tu][tu][tcuy]/=F,";
    var v1438 = v1457 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1417 = v1438 + "/ca[tcuy]/=H,";
    var v1396 = v1417 + "/a[tu][atcuwmhy]/=I,";
    var v1375 = v1396 + "/aa[agr]/=K,";
    var v1351 = v1375 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1327 = v1351 + "/a[tu]g/=M,";
    var v1301 = v1327 + "/aa[tucy]/=N,";
    var v1272 = v1301 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1235 = v1272 + "/ca[agr]/=Q,";
    var v1193 = v1235 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1145 = v1193 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v1067 = v1145 + "/ac[acgturyswkmbdhvn]/=T,";
    var v937 = v1067 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v711 = v937 + "/[tu]gg/=W,";
    var v330 = v711 + "/[tu]a[ctuy]/=Y,";
    return v330 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v712 = JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39);
  var v333 = v712 == "transl_table=13";
  if (v333) {
    var v1510 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1493 = v1510 + "/ga[tcuy]/=D,";
    var v1476 = v1493 + "/ga[agr]/=E,";
    var v1458 = v1476 + "/[tu][tu][tcuy]/=F,";
    var v1439 = v1458 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1418 = v1439 + "/ca[tcuy]/=H,";
    var v1397 = v1418 + "/a[tu][tcuy]/=I,";
    var v1376 = v1397 + "/aa[agr]/=K,";
    var v1352 = v1376 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1328 = v1352 + "/a[tu][agr]/=M,";
    var v1302 = v1328 + "/aa[tucy]/=N,";
    var v1273 = v1302 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1236 = v1273 + "/ca[agr]/=Q,";
    var v1194 = v1236 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1146 = v1194 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1068 = v1146 + "/ac[acgturyswkmbdhvn]/=T,";
    var v938 = v1068 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v713 = v938 + "/[tu]g[agr]/=W,";
    var v332 = v713 + "/[tu]a[ctuy]/=Y,";
    return v332 + "/[tu]a[agr]/=*";
  }
  var v714 = JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39);
  var v335 = v714 == "transl_table=14";
  if (v335) {
    var v1511 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1494 = v1511 + "/ga[tcuy]/=D,";
    var v1477 = v1494 + "/ga[agr]/=E,";
    var v1459 = v1477 + "/[tu][tu][tcuy]/=F,";
    var v1440 = v1459 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1419 = v1440 + "/ca[tcuy]/=H,";
    var v1398 = v1419 + "/a[tu][atcuwmhy]/=I,";
    var v1377 = v1398 + "/aag/=K,";
    var v1353 = v1377 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1329 = v1353 + "/a[tu]g/=M,";
    var v1303 = v1329 + "/aa[atcuwmhy]/=N,";
    var v1274 = v1303 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1237 = v1274 + "/ca[agr]/=Q,";
    var v1195 = v1237 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1147 = v1195 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1069 = v1147 + "/ac[acgturyswkmbdhvn]/=T,";
    var v939 = v1069 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v715 = v939 + "/[tu]g[agr]/=W,";
    var v334 = v715 + "/[tu]a[atcuwmhy]/=Y,";
    return v334 + "/[tu]ag/=*";
  }
  var v716 = JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39);
  var v337 = v716 == "transl_table=15";
  if (v337) {
    var v1512 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1495 = v1512 + "/ga[tcuy]/=D,";
    var v1478 = v1495 + "/ga[agr]/=E,";
    var v1460 = v1478 + "/[tu][tu][tcuy]/=F,";
    var v1441 = v1460 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1420 = v1441 + "/ca[tcuy]/=H,";
    var v1399 = v1420 + "/a[tu][atcuwmhy]/=I,";
    var v1378 = v1399 + "/aa[agr]/=K,";
    var v1354 = v1378 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1330 = v1354 + "/a[tu]g/=M,";
    var v1304 = v1330 + "/aa[tucy]/=N,";
    var v1275 = v1304 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1238 = v1275 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v1196 = v1238 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1148 = v1196 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1070 = v1148 + "/ac[acgturyswkmbdhvn]/=T,";
    var v940 = v1070 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v717 = v940 + "/[tu]gg/=W,";
    var v336 = v717 + "/[tu]a[ctuy]/=Y,";
    return v336 + "/[tu][agr]a/=*";
  }
  var v718 = JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39);
  var v339 = v718 == "transl_table=16";
  if (v339) {
    var v1513 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1496 = v1513 + "/ga[tcuy]/=D,";
    var v1479 = v1496 + "/ga[agr]/=E,";
    var v1461 = v1479 + "/[tu][tu][tcuy]/=F,";
    var v1442 = v1461 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1421 = v1442 + "/ca[tcuy]/=H,";
    var v1400 = v1421 + "/a[tu][atcuwmhy]/=I,";
    var v1379 = v1400 + "/aa[agr]/=K,";
    var v1355 = v1379 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1331 = v1355 + "/a[tu]g/=M,";
    var v1305 = v1331 + "/aa[tucy]/=N,";
    var v1276 = v1305 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1239 = v1276 + "/ca[agr]/=Q,";
    var v1197 = v1239 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1149 = v1197 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1071 = v1149 + "/ac[acgturyswkmbdhvn]/=T,";
    var v941 = v1071 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v719 = v941 + "/[tu]gg/=W,";
    var v338 = v719 + "/[tu]a[ctuy]/=Y,";
    return v338 + "/[tu][agr]a/=*";
  }
  var v720 = JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39);
  var v341 = v720 == "transl_table=21";
  if (v341) {
    var v1514 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1497 = v1514 + "/ga[tcuy]/=D,";
    var v1480 = v1497 + "/ga[agr]/=E,";
    var v1462 = v1480 + "/[tu][tu][tcuy]/=F,";
    var v1443 = v1462 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1422 = v1443 + "/ca[tcuy]/=H,";
    var v1401 = v1422 + "/a[tu][tcuy]/=I,";
    var v1380 = v1401 + "/aag/=K,";
    var v1356 = v1380 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1332 = v1356 + "/a[tu][agr]/=M,";
    var v1306 = v1332 + "/aa[atcuwmhy]/=N,";
    var v1277 = v1306 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1240 = v1277 + "/ca[agr]/=Q,";
    var v1198 = v1240 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1150 = v1198 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1072 = v1150 + "/ac[acgturyswkmbdhvn]/=T,";
    var v942 = v1072 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v721 = v942 + "/[tu]g[agr]/=W,";
    var v340 = v721 + "/[tu]a[ctuy]/=Y,";
    return v340 + "/[tu]a[agr]/=*";
  }
  var v722 = JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39);
  var v343 = v722 == "transl_table=22";
  if (v343) {
    var v1515 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1498 = v1515 + "/ga[tcuy]/=D,";
    var v1481 = v1498 + "/ga[agr]/=E,";
    var v1463 = v1481 + "/[tu][tu][tcuy]/=F,";
    var v1444 = v1463 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1423 = v1444 + "/ca[tcuy]/=H,";
    var v1402 = v1423 + "/a[tu][atcuwmhy]/=I,";
    var v1381 = v1402 + "/aa[agr]/=K,";
    var v1357 = v1381 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1333 = v1357 + "/a[tu]g/=M,";
    var v1307 = v1333 + "/aa[tucy]/=N,";
    var v1278 = v1307 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1241 = v1278 + "/ca[agr]/=Q,";
    var v1199 = v1241 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1151 = v1199 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v1073 = v1151 + "/ac[acgturyswkmbdhvn]/=T,";
    var v943 = v1073 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v723 = v943 + "/[tu]gg/=W,";
    var v342 = v723 + "/[tu]a[ctuy]/=Y,";
    return v342 + "/[tu][agcrsmv]a/=*";
  }
  var v724 = JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p39);
  var v345 = v724 == "transl_table=23";
  if (v345) {
    var v1516 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1499 = v1516 + "/ga[tcuy]/=D,";
    var v1482 = v1499 + "/ga[agr]/=E,";
    var v1464 = v1482 + "/[tu][tu][tcuy]/=F,";
    var v1445 = v1464 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1424 = v1445 + "/ca[tcuy]/=H,";
    var v1403 = v1424 + "/a[tu][atcuwmhy]/=I,";
    var v1382 = v1403 + "/aa[agr]/=K,";
    var v1358 = v1382 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1334 = v1358 + "/a[tu]g/=M,";
    var v1308 = v1334 + "/aa[tucy]/=N,";
    var v1279 = v1308 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1242 = v1279 + "/ca[agr]/=Q,";
    var v1200 = v1242 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1152 = v1200 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1074 = v1152 + "/ac[acgturyswkmbdhvn]/=T,";
    var v944 = v1074 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v725 = v944 + "/[tu]gg/=W,";
    var v344 = v725 + "/[tu]a[ctuy]/=Y,";
    return v344 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*";
  }
  return true;
}
function mutateForDigest(theDocument) {
  var newDna = "";
  var mutatedDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E4;
  var TOPOLOGY = "linear";
  var v726 = JAM.call(testScript, null, [], JAM.policy.p39);
  var v346 = v726 == false;
  if (v346) {
    return false;
  }
  var restrictionSiteCollection;
  var mutatedRestrictionSitesCollection;
  var v1243 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1201 = v1243[0]
  }
  var v1153 = v1201.elements;
  introspect(JAM.policy.p26) {
    var v1075 = v1153[7]
  }
  var v945 = v1075.options;
  var v1244 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1202 = v1244[0]
  }
  var v1154 = v1202.elements;
  introspect(JAM.policy.p26) {
    var v1076 = v1154[7]
  }
  var v946 = v1076.selectedIndex;
  introspect(JAM.policy.p26) {
    var v727 = v945[v946]
  }
  var v347 = v727.value;
  var geneticCode = JAM.call(getGeneticCodeString, null, [v347], JAM.policy.p38);
  var v1203 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1155 = v1203[0]
  }
  var v1077 = v1155.elements;
  introspect(JAM.policy.p26) {
    var v947 = v1077[4]
  }
  var v728 = v947.options;
  var v1204 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1156 = v1204[0]
  }
  var v1078 = v1156.elements;
  introspect(JAM.policy.p26) {
    var v948 = v1078[4]
  }
  var v729 = v948.selectedIndex;
  introspect(JAM.policy.p26) {
    var v348 = v728[v729]
  }
  var restrictionSites = v348.value;
  var v1245 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1205 = v1245[0]
  }
  var v1157 = v1205.elements;
  introspect(JAM.policy.p26) {
    var v1079 = v1157[0]
  }
  var v949 = JAM.call(checkFormElement, null, [v1079], JAM.policy.p38);
  var v730 = v949 == false;
  var v951 = !v730;
  if (v951) {
    var v1280 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1246 = v1280[0]
    }
    var v1206 = v1246.elements;
    introspect(JAM.policy.p26) {
      var v1158 = v1206[0]
    }
    var v1080 = v1158.value;
    var v950 = JAM.call(checkSequenceLength, null, [v1080, maxInput$$3], JAM.policy.p40);
    v730 = v950 == false;
  }
  var v349 = v730;
  if (v349) {
    return false;
  }
  geneticCode = JAM.call(geneticCode.split, geneticCode, [/,/], JAM.policy.p38);
  var v731 = JAM.call(checkGeneticCode, null, [geneticCode], JAM.policy.p38);
  var v350 = v731 == false;
  if (v350) {
    return false;
  }
  restrictionSites = JAM.call(restrictionSites.split, restrictionSites, [/,/], JAM.policy.p38);
  var v732 = JAM.call(checkRestPatterns, null, [restrictionSites], JAM.policy.p38);
  var v351 = v732 == false;
  if (v351) {
    return false;
  }
  var mutatedRestrictionSites = JAM.call(buildMutatedRestrictionSites, null, [restrictionSites], JAM.policy.p38);
  JAM.call(openWindow, null, ["Mutate for Digest"], JAM.policy.p22);
  JAM.call(openPre, null, [], JAM.policy.p39);
  var v352 = outputWindow.document;
  var v733 = '<span class="mutated_sequence">' + "sequence and translations for mutated version";
  var v353 = v733 + "</span>\n";
  JAM.call(v352.write, v352, [v353], JAM.policy.p38);
  var v354 = outputWindow.document;
  var v734 = '<span class="current_sequence">' + "sequence and translations for non-mutated version";
  var v355 = v734 + "</span>\n";
  JAM.call(v354.write, v354, [v355], JAM.policy.p38);
  var v356 = outputWindow.document;
  JAM.call(v356.write, v356, ["\n"], JAM.policy.p22);
  var v1159 = theDocument.forms;
  introspect(JAM.policy.p26) {
    var v1081 = v1159[0]
  }
  var v952 = v1081.elements;
  introspect(JAM.policy.p26) {
    var v735 = v952[0]
  }
  var v357 = v735.value;
  var arrayOfFasta$$1 = JAM.call(getArrayOfFasta, null, [v357], JAM.policy.p38);
  var i$$11 = 0;
  var v736 = arrayOfFasta$$1.length;
  var v365 = i$$11 < v736;
  for (;v365;) {
    introspect(JAM.policy.p26) {
      var v358 = arrayOfFasta$$1[i$$11]
    }
    newDna = JAM.call(getSequenceFromFasta, null, [v358], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      var v359 = arrayOfFasta$$1[i$$11]
    }
    title$$9 = JAM.call(getTitleFromFasta, null, [v359], JAM.policy.p38);
    newDna = JAM.call(removeNonDna, null, [newDna], JAM.policy.p38);
    var v360 = outputWindow.document;
    var v361 = JAM.call(getInfoFromTitleAndSequenceAndTopology, null, [title$$9, newDna, TOPOLOGY], JAM.policy.p40);
    JAM.call(v360.write, v360, [v361], JAM.policy.p38);
    restrictionSiteCollection = JAM.call(findRestrictionSites, null, [newDna, restrictionSites, TOPOLOGY], JAM.policy.p40);
    JAM.call(restrictionSiteCollection.sortRestrictionSites, restrictionSiteCollection, [], JAM.policy.p39);
    mutatedRestrictionSiteCollection = JAM.call(findRestrictionSites, null, [newDna, mutatedRestrictionSites, TOPOLOGY], JAM.policy.p40);
    mutatedRestrictionSiteCollection = JAM.call(removeNormalMatchesFromMutantSites, null, [mutatedRestrictionSiteCollection, restrictionSiteCollection], JAM.policy.p40);
    mutatedRestrictionSiteCollection = JAM.call(removeOverlappingMatchesFromMutantSites, null, [mutatedRestrictionSiteCollection], JAM.policy.p38);
    mutatedDna = JAM.call(buildMutatedDna, null, [newDna, mutatedRestrictionSiteCollection], JAM.policy.p40);
    var v1247 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1207 = v1247[0]
    }
    var v1160 = v1207.elements;
    introspect(JAM.policy.p26) {
      var v1082 = v1160[5]
    }
    var v953 = v1082.options;
    var v1248 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1208 = v1248[0]
    }
    var v1161 = v1208.elements;
    introspect(JAM.policy.p26) {
      var v1083 = v1161[5]
    }
    var v954 = v1083.selectedIndex;
    introspect(JAM.policy.p26) {
      var v737 = v953[v954]
    }
    var v362 = v737.value;
    var v1249 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1209 = v1249[0]
    }
    var v1162 = v1209.elements;
    introspect(JAM.policy.p26) {
      var v1084 = v1162[6]
    }
    var v955 = v1084.options;
    var v1250 = theDocument.forms;
    introspect(JAM.policy.p26) {
      var v1210 = v1250[0]
    }
    var v1163 = v1210.elements;
    introspect(JAM.policy.p26) {
      var v1085 = v1163[6]
    }
    var v956 = v1085.selectedIndex;
    introspect(JAM.policy.p26) {
      var v738 = v955[v956]
    }
    var v363 = v738.value;
    JAM.call(layoutRestTrans, null, [newDna, mutatedDna, geneticCode, restrictionSiteCollection, mutatedRestrictionSiteCollection, v362, v363], JAM.policy.p40);
    var v364 = outputWindow.document;
    JAM.call(v364.write, v364, ["\n\n"], JAM.policy.p22);
    i$$11 = i$$11 + 1;
    var v739 = arrayOfFasta$$1.length;
    v365 = i$$11 < v739;
  }
  JAM.call(closePre, null, [], JAM.policy.p39);
  JAM.call(closeWindow, null, [], JAM.policy.p39);
  return true;
}
function layoutRestTrans(dnaSequence$$3, mutatedDnaSequence, geneticCode$$1, restrictionSiteCollection$$1, mutatedRestrictionSiteCollection$$1, basesPerLine, readingFrame) {
  basesPerLine = JAM.call(parseInt, null, [basesPerLine], JAM.policy.p38);
  var geneticCodeMatchExp$$2 = JAM.call(getGeneticCodeMatchExp, null, [geneticCode$$1], JAM.policy.p38);
  var geneticCodeMatchResult$$2 = JAM.call(getGeneticCodeMatchResult, null, [geneticCode$$1], JAM.policy.p38);
  var spaceString = "                                                                                                                                  ";
  var textLayout = JAM.new(TextLayout, [], JAM.policy.p39);
  var v740 = readingFrame == "3";
  var v957 = !v740;
  if (v957) {
    v740 = readingFrame == "all_three";
  }
  var v368 = v740;
  if (v368) {
    var translationMut = JAM.new(TranslationComponent, [], JAM.policy.p39);
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    var v1086 = dnaSequence$$3.length;
    var v958 = JAM.call(mutatedDnaSequence.substring, mutatedDnaSequence, [2, v1086], JAM.policy.p24);
    var v741 = JAM.call(translate, null, [v958, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2], JAM.policy.p40);
    var v366 = "  " + v741;
    JAM.call(translationMut.setCharacters, translationMut, [v366], JAM.policy.p38);
    JAM.call(textLayout.addComponent, textLayout, [translationMut], JAM.policy.p38);
    var translation = JAM.new(TranslationComponent, [], JAM.policy.p39);
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    var v1087 = dnaSequence$$3.length;
    var v959 = JAM.call(dnaSequence$$3.substring, dnaSequence$$3, [2, v1087], JAM.policy.p24);
    var v742 = JAM.call(translate, null, [v959, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2], JAM.policy.p40);
    var v367 = "  " + v742;
    JAM.call(translation.setCharacters, translation, [v367], JAM.policy.p38);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p38);
  }
  var v743 = readingFrame == "2";
  var v960 = !v743;
  if (v960) {
    v743 = readingFrame == "all_three";
  }
  var v371 = v743;
  if (v371) {
    translationMut = JAM.new(TranslationComponent, [], JAM.policy.p39);
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    var v1088 = dnaSequence$$3.length;
    var v961 = JAM.call(mutatedDnaSequence.substring, mutatedDnaSequence, [1, v1088], JAM.policy.p24);
    var v744 = JAM.call(translate, null, [v961, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2], JAM.policy.p40);
    var v369 = " " + v744;
    JAM.call(translationMut.setCharacters, translationMut, [v369], JAM.policy.p38);
    JAM.call(textLayout.addComponent, textLayout, [translationMut], JAM.policy.p38);
    translation = JAM.new(TranslationComponent, [], JAM.policy.p39);
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    var v1089 = dnaSequence$$3.length;
    var v962 = JAM.call(dnaSequence$$3.substring, dnaSequence$$3, [1, v1089], JAM.policy.p24);
    var v745 = JAM.call(translate, null, [v962, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2], JAM.policy.p40);
    var v370 = " " + v745;
    JAM.call(translation.setCharacters, translation, [v370], JAM.policy.p38);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p38);
  }
  var v746 = readingFrame == "1";
  var v963 = !v746;
  if (v963) {
    v746 = readingFrame == "all_three";
  }
  var v374 = v746;
  if (v374) {
    translationMut = JAM.new(TranslationComponent, [], JAM.policy.p39);
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    var v372 = JAM.call(translate, null, [mutatedDnaSequence, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2], JAM.policy.p40);
    JAM.call(translationMut.setCharacters, translationMut, [v372], JAM.policy.p38);
    JAM.call(textLayout.addComponent, textLayout, [translationMut], JAM.policy.p38);
    translation = JAM.new(TranslationComponent, [], JAM.policy.p39);
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    var v373 = JAM.call(translate, null, [dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2], JAM.policy.p40);
    JAM.call(translation.setCharacters, translation, [v373], JAM.policy.p38);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p38);
  }
  var v377 = readingFrame == "uppercase";
  if (v377) {
    translationMut = JAM.new(UppercaseTranslationComponent, [], JAM.policy.p39);
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    var v375 = JAM.call(uppercaseTranslate, null, [mutatedDnaSequence, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2], JAM.policy.p40);
    JAM.call(translationMut.setCharacters, translationMut, [v375], JAM.policy.p38);
    JAM.call(textLayout.addComponent, textLayout, [translationMut], JAM.policy.p38);
    translation = JAM.new(UppercaseTranslationComponent, [], JAM.policy.p39);
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    var v376 = JAM.call(uppercaseTranslate, null, [dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2], JAM.policy.p40);
    JAM.call(translation.setCharacters, translation, [v376], JAM.policy.p38);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p38);
  }
  var dnaMut = JAM.new(DnaComponent, [], JAM.policy.p39);
  dnaMut.spanStart = '<span class="mutated_sequence">';
  dnaMut.spanEnd = "</span>";
  JAM.call(dnaMut.setCharacters, dnaMut, [mutatedDnaSequence], JAM.policy.p38);
  JAM.call(textLayout.addComponent, textLayout, [dnaMut], JAM.policy.p38);
  var dna = JAM.new(DnaComponent, [], JAM.policy.p39);
  dna.spanStart = '<span class="current_sequence">';
  dna.spanEnd = "</span>";
  JAM.call(dna.setCharacters, dna, [dnaSequence$$3], JAM.policy.p38);
  JAM.call(textLayout.addComponent, textLayout, [dna], JAM.policy.p38);
  var sitesInRange = JAM.new(Array, [], JAM.policy.p39);
  var sitesInRangeMut = JAM.new(Array, [], JAM.policy.p39);
  var i$$12 = 0;
  var v747 = dnaSequence$$3.length;
  var v387 = i$$12 < v747;
  for (;v387;) {
    var v378 = i$$12 + basesPerLine;
    sitesInRange = JAM.call(restrictionSiteCollection$$1.getSitesInRange, restrictionSiteCollection$$1, [i$$12, v378], JAM.policy.p40);
    var v379 = i$$12 + basesPerLine;
    sitesInRangeMut = JAM.call(mutatedRestrictionSiteCollection$$1.getSitesInRange, mutatedRestrictionSiteCollection$$1, [i$$12, v379], JAM.policy.p40);
    JAM.call(sitesInRange.reverse, sitesInRange, [], JAM.policy.p39);
    JAM.call(sitesInRangeMut.reverse, sitesInRangeMut, [], JAM.policy.p39);
    var j$$10 = 0;
    var v748 = sitesInRangeMut.length;
    var v382 = j$$10 < v748;
    for (;v382;) {
      var v380 = outputWindow.document;
      introspect(JAM.policy.p26) {
        var v1281 = sitesInRangeMut[j$$10]
      }
      var v1251 = v1281.position;
      var v1211 = v1251 - i$$12;
      var v1164 = v1211 + 9;
      var v1090 = JAM.call(spaceString.substring, spaceString, [0, v1164], JAM.policy.p24);
      var v964 = v1090 + '<span class="mutated_sequence">';
      introspect(JAM.policy.p26) {
        var v1091 = sitesInRangeMut[j$$10]
      }
      var v965 = v1091.label;
      var v749 = v964 + v965;
      var v381 = v749 + "</span>\n";
      JAM.call(v380.write, v380, [v381], JAM.policy.p38);
      j$$10 = j$$10 + 1;
      var v750 = sitesInRangeMut.length;
      v382 = j$$10 < v750;
    }
    j$$10 = 0;
    var v751 = sitesInRange.length;
    var v385 = j$$10 < v751;
    for (;v385;) {
      var v383 = outputWindow.document;
      introspect(JAM.policy.p26) {
        var v1282 = sitesInRange[j$$10]
      }
      var v1252 = v1282.position;
      var v1212 = v1252 - i$$12;
      var v1165 = v1212 + 9;
      var v1092 = JAM.call(spaceString.substring, spaceString, [0, v1165], JAM.policy.p24);
      var v966 = v1092 + '<span class="current_sequence">';
      introspect(JAM.policy.p26) {
        var v1093 = sitesInRange[j$$10]
      }
      var v967 = v1093.label;
      var v752 = v966 + v967;
      var v384 = v752 + "</span>\n";
      JAM.call(v383.write, v383, [v384], JAM.policy.p38);
      j$$10 = j$$10 + 1;
      var v753 = sitesInRange.length;
      v385 = j$$10 < v753;
    }
    var v386 = i$$12 + basesPerLine;
    JAM.call(textLayout.writeLayout, textLayout, [i$$12, v386], JAM.policy.p40);
    i$$12 = i$$12 + basesPerLine;
    var v754 = dnaSequence$$3.length;
    v387 = i$$12 < v754;
  }
  return true;
}
function translate(dnaSequence$$4, geneticCodeMatchExp$$3, geneticCodeMatchResult$$3) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    var v388 = " " + p1$$2;
    return v388 + " ";
  }
  var v968 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/[^A-Za-z]/g, ""], JAM.policy.p41);
  var v755 = v968.length;
  var v389 = v755 < 3;
  if (v389) {
    return "";
  }
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/(...)/g, v2], JAM.policy.p40);
  var i$$13 = 0;
  var v756 = geneticCodeMatchExp$$3.length;
  var v392 = i$$13 < v756;
  for (;v392;) {
    introspect(JAM.policy.p26) {
      var v390 = geneticCodeMatchExp$$3[i$$13]
    }
    introspect(JAM.policy.p26) {
      var v391 = geneticCodeMatchResult$$3[i$$13]
    }
    dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [v390, v391], JAM.policy.p40);
    i$$13 = i$$13 + 1;
    var v757 = geneticCodeMatchExp$$3.length;
    v392 = i$$13 < v757;
  }
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/\S{3}/g, "X"], JAM.policy.p41);
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/\s\S{1,2}$/, ""], JAM.policy.p41);
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/^\s/, ""], JAM.policy.p41);
  return dnaSequence$$4;
}
function uppercaseTranslate(dnaSequence$$5, geneticCodeMatchExp$$4, geneticCodeMatchResult$$4) {
  function v3(str$$9, p1$$3, p2, p3, p4, p5, p6, offset$$11, s$$5) {
    var v1213 = " " + p1$$3;
    var v1166 = v1213 + p3;
    var v1094 = v1166 + p5;
    var v969 = v1094 + " ";
    var v758 = v969 + p2;
    var v393 = v758 + p4;
    return v393 + p6;
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/[a-z]/g, " "], JAM.policy.p41);
  var v970 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/[^A-Za-z]/g, ""], JAM.policy.p41);
  var v759 = v970.length;
  var v394 = v759 < 3;
  if (v394) {
    return "";
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/([A-Z])(\s*)([A-Z])(\s*)([A-Z])(\s*)/g, v3], JAM.policy.p40);
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/\s\S{1,2}\s/g, ""], JAM.policy.p41);
  var i$$14 = 0;
  var v760 = geneticCodeMatchExp$$4.length;
  var v397 = i$$14 < v760;
  for (;v397;) {
    introspect(JAM.policy.p26) {
      var v395 = geneticCodeMatchExp$$4[i$$14]
    }
    introspect(JAM.policy.p26) {
      var v396 = geneticCodeMatchResult$$4[i$$14]
    }
    dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [v395, v396], JAM.policy.p40);
    i$$14 = i$$14 + 1;
    var v761 = geneticCodeMatchExp$$4.length;
    v397 = i$$14 < v761;
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/\S{3}/g, "X"], JAM.policy.p41);
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/^\s/, ""], JAM.policy.p41);
  return dnaSequence$$5;
}
function buildMutatedRestrictionSites(restrictionSites$$1) {
  var mutatedRestrictionSites$$1 = JAM.new(Array, [], JAM.policy.p39);
  var i$$15 = 0;
  var v762 = restrictionSites$$1.length;
  var v419 = i$$15 < v762;
  for (;v419;) {
    introspect(JAM.policy.p26) {
      var v1095 = restrictionSites$$1[i$$15]
    }
    var v971 = JAM.call(v1095.match, v1095, [/\/.+\//], JAM.policy.p38);
    var v763 = JAM.call(v971.toString, v971, [], JAM.policy.p39);
    var v398 = JAM.call(v763.replace, v763, [/[\/\\]/g, ""], JAM.policy.p41);
    var site = JAM.call(v398.toLowerCase, v398, [], JAM.policy.p39);
    introspect(JAM.policy.p26) {
      var v764 = restrictionSites$$1[i$$15]
    }
    var v399 = JAM.call(v764.match, v764, [/\([^\(]+\)/], JAM.policy.p38);
    var label = JAM.call(v399.toString, v399, [], JAM.policy.p39);
    introspect(JAM.policy.p26) {
      var v1096 = restrictionSites$$1[i$$15]
    }
    var v972 = JAM.call(v1096.match, v1096, [/\)\D*\d+/], JAM.policy.p38);
    var v765 = JAM.call(v972.toString, v972, [], JAM.policy.p39);
    var v400 = JAM.call(v765.replace, v765, [/\)\D*/, ""], JAM.policy.p41);
    var cutDistance$$1 = JAM.call(parseFloat, null, [v400], JAM.policy.p38);
    var singleDegenSites = JAM.new(Array, [], JAM.policy.p39);
    var doubleDegenSites = JAM.new(Array, [], JAM.policy.p39);
    var j$$11 = 0;
    var v766 = site.length;
    var v405 = j$$11 < v766;
    for (;v405;) {
      var v973 = JAM.call(site.charAt, site, [j$$11], JAM.policy.p38);
      var v767 = v973 != "n";
      if (v767) {
        var v974 = JAM.call(site.charAt, site, [j$$11], JAM.policy.p38);
        v767 = v974 != "N";
      }
      var v404 = v767;
      if (v404) {
        var pre = JAM.call(site.substring, site, [0, j$$11], JAM.policy.p24);
        var v401 = j$$11 + 1;
        var v402 = site.length;
        var post = JAM.call(site.substring, site, [v401, v402], JAM.policy.p40);
        var v403 = pre + "N";
        var newSite = v403 + post;
        JAM.call(singleDegenSites.push, singleDegenSites, [newSite], JAM.policy.p38);
      }
      j$$11 = j$$11 + 1;
      var v768 = site.length;
      v405 = j$$11 < v768;
    }
    var v769 = site.length;
    var v414 = v769 > 6;
    if (v414) {
      j$$11 = 0;
      var v770 = singleDegenSites.length;
      var v413 = j$$11 < v770;
      for (;v413;) {
        var k$$3 = 0;
        introspect(JAM.policy.p26) {
          var v975 = singleDegenSites[j$$11]
        }
        var v771 = v975.length;
        var v412 = k$$3 < v771;
        for (;v412;) {
          introspect(JAM.policy.p26) {
            var v1097 = singleDegenSites[j$$11]
          }
          var v976 = JAM.call(v1097.charAt, v1097, [k$$3], JAM.policy.p38);
          var v772 = v976 != "n";
          if (v772) {
            introspect(JAM.policy.p26) {
              var v1098 = singleDegenSites[j$$11]
            }
            var v977 = JAM.call(v1098.charAt, v1098, [k$$3], JAM.policy.p38);
            v772 = v977 != "N";
          }
          var v411 = v772;
          if (v411) {
            introspect(JAM.policy.p26) {
              var v406 = singleDegenSites[j$$11]
            }
            pre = JAM.call(v406.substring, v406, [0, k$$3], JAM.policy.p24);
            introspect(JAM.policy.p26) {
              var v407 = singleDegenSites[j$$11]
            }
            var v408 = k$$3 + 1;
            introspect(JAM.policy.p26) {
              var v773 = singleDegenSites[j$$11]
            }
            var v409 = v773.length;
            post = JAM.call(v407.substring, v407, [v408, v409], JAM.policy.p40);
            var v410 = pre + "N";
            newSite = v410 + post;
            JAM.call(doubleDegenSites.push, doubleDegenSites, [newSite], JAM.policy.p38);
          }
          k$$3 = k$$3 + 1;
          introspect(JAM.policy.p26) {
            var v978 = singleDegenSites[j$$11]
          }
          var v774 = v978.length;
          v412 = k$$3 < v774;
        }
        j$$11 = j$$11 + 1;
        var v775 = singleDegenSites.length;
        v413 = j$$11 < v775;
      }
    }
    j$$11 = 0;
    var v776 = singleDegenSites.length;
    var v416 = j$$11 < v776;
    for (;v416;) {
      introspect(JAM.policy.p26) {
        var v1214 = singleDegenSites[j$$11]
      }
      var v1167 = "/" + v1214;
      var v1099 = v1167 + "/";
      var v979 = v1099 + " ";
      var v777 = v979 + label;
      var v415 = v777 + cutDistance$$1;
      JAM.call(mutatedRestrictionSites$$1.push, mutatedRestrictionSites$$1, [v415], JAM.policy.p38);
      j$$11 = j$$11 + 1;
      var v778 = singleDegenSites.length;
      v416 = j$$11 < v778;
    }
    j$$11 = 0;
    var v779 = doubleDegenSites.length;
    var v418 = j$$11 < v779;
    for (;v418;) {
      introspect(JAM.policy.p26) {
        var v1215 = doubleDegenSites[j$$11]
      }
      var v1168 = "/" + v1215;
      var v1100 = v1168 + "/";
      var v980 = v1100 + " ";
      var v780 = v980 + label;
      var v417 = v780 + cutDistance$$1;
      JAM.call(mutatedRestrictionSites$$1.push, mutatedRestrictionSites$$1, [v417], JAM.policy.p38);
      j$$11 = j$$11 + 1;
      var v781 = doubleDegenSites.length;
      v418 = j$$11 < v781;
    }
    i$$15 = i$$15 + 1;
    var v782 = restrictionSites$$1.length;
    v419 = i$$15 < v782;
  }
  return mutatedRestrictionSites$$1;
}
function removeNormalMatchesFromMutantSites(mutatedRestrictionSiteCollection$$2, restrictionSiteCollection$$2) {
  var originalMutatedRestrictionSites = JAM.new(Array, [], JAM.policy.p39);
  var i$$16 = 0;
  var v981 = mutatedRestrictionSiteCollection$$2.restrictionSites;
  var v783 = v981.length;
  var v424 = i$$16 < v783;
  for (;v424;) {
    var v420 = mutatedRestrictionSiteCollection$$2.restrictionSites;
    introspect(JAM.policy.p26) {
      var mutatedSite = v420[i$$16]
    }
    var isOriginal = true;
    var j$$12 = 0;
    var v982 = restrictionSiteCollection$$2.restrictionSites;
    var v784 = v982.length;
    var v423 = j$$12 < v784;
    for (;v423;) {
      var v421 = restrictionSiteCollection$$2.restrictionSites;
      introspect(JAM.policy.p26) {
        var normalSite = v421[j$$12]
      }
      var v785 = normalSite.position;
      var v786 = mutatedSite.position;
      var v422 = v785 == v786;
      if (v422) {
        isOriginal = false;
        break;
      }
      j$$12 = j$$12 + 1;
      var v983 = restrictionSiteCollection$$2.restrictionSites;
      var v787 = v983.length;
      v423 = j$$12 < v787;
    }
    if (isOriginal) {
      JAM.call(originalMutatedRestrictionSites.push, originalMutatedRestrictionSites, [mutatedSite], JAM.policy.p38);
    }
    i$$16 = i$$16 + 1;
    var v984 = mutatedRestrictionSiteCollection$$2.restrictionSites;
    var v788 = v984.length;
    v424 = i$$16 < v788;
  }
  mutatedRestrictionSiteCollection$$2.restrictionSites = originalMutatedRestrictionSites;
  return mutatedRestrictionSiteCollection$$2;
}
function removeOverlappingMatchesFromMutantSites(mutatedRestrictionSiteCollection$$3) {
  var originalMutatedRestrictionSites$$1 = JAM.new(Array, [], JAM.policy.p39);
  var i$$17 = 0;
  var v985 = mutatedRestrictionSiteCollection$$3.restrictionSites;
  var v789 = v985.length;
  var v436 = i$$17 < v789;
  for (;v436;) {
    var v425 = mutatedRestrictionSiteCollection$$3.restrictionSites;
    introspect(JAM.policy.p26) {
      var mutatedSite$$1 = v425[i$$17]
    }
    var isOriginal$$1 = true;
    var j$$13 = 0;
    var v790 = originalMutatedRestrictionSites$$1.length;
    var v435 = j$$13 < v790;
    for (;v435;) {
      introspect(JAM.policy.p26) {
        var mutatedSiteJ = originalMutatedRestrictionSites$$1[j$$13]
      }
      var v986 = mutatedSiteJ.position;
      var v987 = mutatedSiteJ.cutDistance;
      var v791 = v986 + v987;
      var v988 = mutatedSiteJ.iupacPattern;
      var v792 = v988.length;
      var v426 = v791 - v792;
      var startRangeJ = v426 - 2;
      var v989 = mutatedSiteJ.position;
      var v990 = mutatedSiteJ.cutDistance;
      var v793 = v989 + v990;
      var v427 = v793 - 1;
      var endRangeJ = v427 + 2;
      var v794 = mutatedSite$$1.position;
      var v795 = mutatedSite$$1.cutDistance;
      var v428 = v794 + v795;
      var v796 = mutatedSite$$1.iupacPattern;
      var v429 = v796.length;
      var startRange = v428 - v429;
      var v797 = mutatedSite$$1.position;
      var v798 = mutatedSite$$1.cutDistance;
      var v430 = v797 + v798;
      var endRange = v430 - 1;
      var v799 = startRange <= startRangeJ;
      if (v799) {
        v799 = endRange >= startRangeJ;
      }
      var v431 = v799;
      if (v431) {
        isOriginal$$1 = false;
        break;
      }
      var v800 = startRange <= endRangeJ;
      if (v800) {
        v800 = endRange >= endRangeJ;
      }
      var v432 = v800;
      if (v432) {
        isOriginal$$1 = false;
        break;
      }
      var v801 = startRange <= startRangeJ;
      if (v801) {
        v801 = endRange >= endRangeJ;
      }
      var v433 = v801;
      if (v433) {
        isOriginal$$1 = false;
        break;
      }
      var v802 = startRange >= startRangeJ;
      if (v802) {
        v802 = endRange <= endRangeJ;
      }
      var v434 = v802;
      if (v434) {
        isOriginal$$1 = false;
        break;
      }
      j$$13 = j$$13 + 1;
      var v803 = originalMutatedRestrictionSites$$1.length;
      v435 = j$$13 < v803;
    }
    if (isOriginal$$1) {
      JAM.call(originalMutatedRestrictionSites$$1.push, originalMutatedRestrictionSites$$1, [mutatedSite$$1], JAM.policy.p38);
    }
    i$$17 = i$$17 + 1;
    var v991 = mutatedRestrictionSiteCollection$$3.restrictionSites;
    var v804 = v991.length;
    v436 = i$$17 < v804;
  }
  mutatedRestrictionSiteCollection$$3.restrictionSites = originalMutatedRestrictionSites$$1;
  return mutatedRestrictionSiteCollection$$3;
}
function buildMutatedDna(originalDna, mutatedRestrictionSiteCollection$$4) {
  var mutatedDna$$1 = originalDna;
  var mutatedDnaArray = JAM.new(Array, [], JAM.policy.p39);
  JAM.call(mutatedRestrictionSiteCollection$$4.sortRestrictionSites, mutatedRestrictionSiteCollection$$4, [], JAM.policy.p39);
  var v437 = mutatedRestrictionSiteCollection$$4.restrictionSites;
  JAM.call(v437.reverse, v437, [], JAM.policy.p39);
  var i$$18 = 0;
  var v992 = mutatedRestrictionSiteCollection$$4.restrictionSites;
  var v805 = v992.length;
  var v444 = i$$18 < v805;
  for (;v444;) {
    var v438 = mutatedRestrictionSiteCollection$$4.restrictionSites;
    introspect(JAM.policy.p26) {
      var mutatedSite$$2 = v438[i$$18]
    }
    var v806 = mutatedSite$$2.position;
    var v807 = mutatedSite$$2.cutDistance;
    var v439 = v806 + v807;
    var v808 = mutatedSite$$2.iupacPattern;
    var v440 = v808.length;
    var siteStart = v439 - v440;
    var v809 = mutatedSite$$2.position;
    var v810 = mutatedSite$$2.cutDistance;
    var v441 = v809 + v810;
    var siteEnd = v441 - 1;
    var siteLength = siteEnd - siteStart;
    var v811 = JAM.call(mutatedDna$$1.substring, mutatedDna$$1, [0, siteStart], JAM.policy.p24);
    var v1101 = siteEnd + 1;
    var v993 = JAM.call(mutatedDna$$1.substring, mutatedDna$$1, [siteStart, v1101], JAM.policy.p40);
    var v994 = mutatedSite$$2.iupacPattern;
    var v995 = mutatedSite$$2.label;
    var v812 = JAM.call(replaceMutatedDnaSegment, null, [v993, v994, v995], JAM.policy.p40);
    var v442 = v811 + v812;
    JAM.call(mutatedDnaArray.push, mutatedDnaArray, [v442], JAM.policy.p38);
    var v813 = siteEnd + 1;
    var v814 = mutatedDna$$1.length;
    var v443 = JAM.call(mutatedDna$$1.substring, mutatedDna$$1, [v813, v814], JAM.policy.p40);
    JAM.call(mutatedDnaArray.push, mutatedDnaArray, [v443], JAM.policy.p38);
    mutatedDna$$1 = JAM.call(mutatedDnaArray.join, mutatedDnaArray, [""], JAM.policy.p22);
    mutatedDnaArray = JAM.new(Array, [], JAM.policy.p39);
    i$$18 = i$$18 + 1;
    var v996 = mutatedRestrictionSiteCollection$$4.restrictionSites;
    var v815 = v996.length;
    v444 = i$$18 < v815;
  }
  var v445 = mutatedRestrictionSiteCollection$$4.restrictionSites;
  JAM.call(v445.reverse, v445, [], JAM.policy.p39);
  return mutatedDna$$1;
}
function replaceMutatedDnaSegment(originalSegment, iupacPattern, label$$1) {
  var newSegment = "";
  var genericSite;
  var v816 = JAM.call(label$$1.match, label$$1, [/[a-z\|]+\s\d+/], JAM.policy.p38);
  var v446 = JAM.call(v816.toString, v816, [], JAM.policy.p39);
  genericSite = JAM.call(v446.replace, v446, [/\||\s\d+/g, ""], JAM.policy.p41);
  var isUpperCase;
  var charToAdd;
  var i$$19 = 0;
  var v817 = originalSegment.length;
  var v454 = i$$19 < v817;
  for (;v454;) {
    var v1102 = JAM.call(originalSegment.charAt, originalSegment, [i$$19], JAM.policy.p38);
    var v997 = JAM.call(v1102.toString, v1102, [], JAM.policy.p39);
    var v818 = JAM.call(v997.search, v997, [/[A-Z]/], JAM.policy.p38);
    var v447 = v818 == -1;
    if (v447) {
      isUpperCase = false;
    } else {
      isUpperCase = true;
    }
    var v819 = JAM.call(originalSegment.charAt, originalSegment, [i$$19], JAM.policy.p38);
    var v820 = JAM.call(genericSite.charAt, genericSite, [i$$19], JAM.policy.p38);
    var v449 = v819 == v820;
    if (v449) {
      charToAdd = JAM.call(originalSegment.charAt, originalSegment, [i$$19], JAM.policy.p38);
    } else {
      var v821 = JAM.call(iupacPattern.charAt, iupacPattern, [i$$19], JAM.policy.p38);
      var v448 = v821 == "N";
      if (v448) {
        charToAdd = JAM.call(genericSite.charAt, genericSite, [i$$19], JAM.policy.p38);
      } else {
        charToAdd = JAM.call(originalSegment.charAt, originalSegment, [i$$19], JAM.policy.p38);
      }
    }
    if (isUpperCase) {
      var v450 = newSegment;
      var v822 = JAM.call(charToAdd.toString, charToAdd, [], JAM.policy.p39);
      var v451 = JAM.call(v822.toUpperCase, v822, [], JAM.policy.p39);
      newSegment = v450 + v451;
    } else {
      var v452 = newSegment;
      var v823 = JAM.call(charToAdd.toString, charToAdd, [], JAM.policy.p39);
      var v453 = JAM.call(v823.toLowerCase, v823, [], JAM.policy.p39);
      newSegment = v452 + v453;
    }
    i$$19 = i$$19 + 1;
    var v824 = originalSegment.length;
    v454 = i$$19 < v824;
  }
  return newSegment;
}
function findRestrictionSites(sequence$$18, arrayOfItems$$2, dnaConformation$$1) {
  var lookAhead$$1 = 50;
  var lowerLimit$$1 = 0;
  var upperLimit$$1 = sequence$$18.length;
  var shiftValue$$1 = 0;
  var cutDistance$$2;
  var matchExp$$2;
  var matchPosition$$1;
  var matchArray$$2;
  var label$$2;
  var timesFound$$1 = 0;
  var tempArray = JAM.new(Array, [], JAM.policy.p39);
  var restrictionSiteCollection$$3 = JAM.new(RestrictionSiteCollection, [], JAM.policy.p39);
  var v458 = dnaConformation$$1 == "circular";
  if (v458) {
    var v455 = JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p24);
    shiftValue$$1 = v455.length;
    var v1103 = sequence$$18.length;
    var v998 = v1103 - lookAhead$$1;
    var v999 = sequence$$18.length;
    var v825 = JAM.call(sequence$$18.substring, sequence$$18, [v998, v999], JAM.policy.p40);
    var v456 = v825 + sequence$$18;
    var v457 = JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p24);
    sequence$$18 = v456 + v457;
    lowerLimit$$1 = 0 + shiftValue$$1;
    upperLimit$$1 = upperLimit$$1 + shiftValue$$1;
  }
  var i$$20 = 0;
  var v826 = arrayOfItems$$2.length;
  var v470 = i$$20 < v826;
  for (;v470;) {
    introspect(JAM.policy.p26) {
      var v1000 = arrayOfItems$$2[i$$20]
    }
    var v827 = JAM.call(v1000.match, v1000, [/\/.+\//], JAM.policy.p38);
    var v459 = JAM.call(v827.toString, v827, [], JAM.policy.p39);
    var iupacPattern$$1 = JAM.call(v459.replace, v459, [/[\/\\]/g, ""], JAM.policy.p41);
    var v1001 = JAM.call(convertDegenerates, null, [iupacPattern$$1], JAM.policy.p38);
    var v828 = "/" + v1001;
    var v460 = v828 + "/";
    matchExp$$2 = v460 + "gi";
    matchPosition$$1 = 0;
    if (JAM.isEval(eval)) {
      matchExp$$2 = eval("introspect(JAM.policy.pFull) { " + matchExp$$2 + " }");
    } else {
      matchExp$$2 = JAM.call(eval, null, [matchExp$$2]);
    }
    introspect(JAM.policy.p26) {
      var v1104 = arrayOfItems$$2[i$$20]
    }
    var v1002 = JAM.call(v1104.match, v1104, [/\)\D*\d+/], JAM.policy.p38);
    var v829 = JAM.call(v1002.toString, v1002, [], JAM.policy.p39);
    var v461 = JAM.call(v829.replace, v829, [/\)\D*/, ""], JAM.policy.p41);
    cutDistance$$2 = JAM.call(parseFloat, null, [v461], JAM.policy.p38);
    introspect(JAM.policy.p26) {
      var v1003 = arrayOfItems$$2[i$$20]
    }
    var v830 = JAM.call(v1003.match, v1003, [/\([^\(]+\)/], JAM.policy.p38);
    var v462 = JAM.call(v830.toString, v830, [], JAM.policy.p39);
    label$$2 = JAM.call(v462.replace, v462, [/\(|\)/g, ""], JAM.policy.p41);
    var v466 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [sequence$$18], JAM.policy.p38);
    for (;v466;) {
      matchPosition$$1 = matchExp$$2.lastIndex;
      matchPosition$$1 = matchPosition$$1 - cutDistance$$2;
      var v831 = matchPosition$$1 >= lowerLimit$$1;
      if (v831) {
        v831 = matchPosition$$1 < upperLimit$$1;
      }
      var v464 = v831;
      if (v464) {
        timesFound$$1 = timesFound$$1 + 1;
        var v1004 = label$$2 + " ";
        var v1105 = matchPosition$$1 - shiftValue$$1;
        var v1005 = v1105 + 1;
        var v832 = v1004 + v1005;
        var v833 = matchPosition$$1 - shiftValue$$1;
        var v463 = JAM.new(RestrictionSite, [v832, v833, cutDistance$$2, iupacPattern$$1], JAM.policy.p40);
        JAM.call(tempArray.push, tempArray, [v463], JAM.policy.p38);
      }
      var v834 = matchExp$$2.lastIndex;
      var v1006 = RegExp.lastMatch;
      var v835 = v1006.length;
      var v465 = v834 - v835;
      matchExp$$2.lastIndex = v465 + 1;
      v466 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [sequence$$18], JAM.policy.p38);
    }
    var j$$14 = 0;
    var v836 = tempArray.length;
    var v469 = j$$14 < v836;
    for (;v469;) {
      introspect(JAM.policy.p26) {
        var v467 = tempArray[j$$14]
      }
      v467.numberOfCuts = timesFound$$1;
      introspect(JAM.policy.p26) {
        var v468 = tempArray[j$$14]
      }
      JAM.call(restrictionSiteCollection$$3.addRestrictionSite, restrictionSiteCollection$$3, [v468], JAM.policy.p38);
      j$$14 = j$$14 + 1;
      var v837 = tempArray.length;
      v469 = j$$14 < v837;
    }
    timesFound$$1 = 0;
    tempArray = JAM.new(Array, [], JAM.policy.p39);
    i$$20 = i$$20 + 1;
    var v838 = arrayOfItems$$2.length;
    v470 = i$$20 < v838;
  }
  return restrictionSiteCollection$$3;
}
function writeLayout(start$$4, stop) {
  var i$$21 = 0;
  var v1007 = this.components;
  var v839 = v1007.length;
  var v472 = i$$21 < v839;
  for (;v472;) {
    var v840 = this.components;
    introspect(JAM.policy.p26) {
      var v471 = v840[i$$21]
    }
    JAM.call(v471.writeLayoutComponent, v471, [start$$4, stop], JAM.policy.p40);
    i$$21 = i$$21 + 1;
    var v1008 = this.components;
    var v841 = v1008.length;
    v472 = i$$21 < v841;
  }
  return;
}
function addComponent(component) {
  var v473 = this.components;
  JAM.call(v473.push, v473, [component], JAM.policy.p38);
  return;
}
function TextLayout() {
  var v1523 = JAM.new(Array, [], JAM.policy.p39);
  this.components = v1523;
  return;
}
function writeLayoutComponent(start$$5, stop$$1) {
  return;
}
function setCharacters(text$$14) {
  var v842 = JAM.call(text$$14.search, text$$14, [/./], JAM.policy.p38);
  var v474 = v842 != -1;
  if (v474) {
    var v1524 = JAM.call(text$$14.match, text$$14, [/./g], JAM.policy.p38);
    this.characters = v1524;
  }
  return;
}
function isRoom(start$$6, stop$$2) {
  var v475 = this.characters;
  var rangeToCheck = JAM.call(v475.slice, v475, [start$$6, stop$$2], JAM.policy.p40);
  rangeToCheck = JAM.call(rangeToCheck.join, rangeToCheck, [""], JAM.policy.p22);
  var v843 = JAM.call(rangeToCheck.search, rangeToCheck, [/\w/], JAM.policy.p38);
  var v476 = v843 == -1;
  if (v476) {
    return true;
  } else {
    return false;
  }
  return;
}
function LayoutComponent() {
  var v1525 = JAM.new(Array, [], JAM.policy.p39);
  this.characters = v1525;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return;
}
function TranslationComponent() {
  var v1526 = JAM.new(Array, [], JAM.policy.p39);
  this.characters = v1526;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return;
}
function UppercaseTranslationComponent() {
  var v1527 = JAM.new(Array, [], JAM.policy.p39);
  this.characters = v1527;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return;
}
function DnaComponent() {
  var v1528 = JAM.new(Array, [], JAM.policy.p39);
  this.characters = v1528;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return;
}
function RestrictionSite(label$$3, position, cutDistance$$3, iupacPattern$$2) {
  this.label = label$$3;
  this.position = position;
  this.cutDistance = cutDistance$$3;
  this.iupacPattern = iupacPattern$$2;
  return;
}
function addRestrictionSite(restrictionSite) {
  var v477 = this.restrictionSites;
  JAM.call(v477.push, v477, [restrictionSite], JAM.policy.p38);
  return;
}
function sortRestrictionSites() {
  var v478 = this.restrictionSites;
  JAM.call(v478.sort, v478, [restrictionSiteSorter], JAM.policy.p38);
  return;
}
function getSitesInRange(start$$10, stop$$6) {
  var arrayToReturn = JAM.new(Array, [], JAM.policy.p39);
  var v844 = this.restrictionSites;
  var v479 = v844.length;
  var i$$22 = v479 - 1;
  var v482 = i$$22 >= 0;
  for (;v482;) {
    var v1169 = this.restrictionSites;
    introspect(JAM.policy.p26) {
      var v1106 = v1169[i$$22]
    }
    var v1009 = v1106.position;
    var v845 = v1009 >= start$$10;
    if (v845) {
      var v1170 = this.restrictionSites;
      introspect(JAM.policy.p26) {
        var v1107 = v1170[i$$22]
      }
      var v1010 = v1107.position;
      v845 = v1010 < stop$$6;
    }
    var v481 = v845;
    if (v481) {
      var v846 = this.restrictionSites;
      var v480 = JAM.call(v846.pop, v846, [], JAM.policy.p39);
      JAM.call(arrayToReturn.push, arrayToReturn, [v480], JAM.policy.p38);
    } else {
      break;
    }
    i$$22 = i$$22 - 1;
    v482 = i$$22 >= 0;
  }
  return arrayToReturn;
}
function RestrictionSiteCollection() {
  var v1529 = JAM.new(Array, [], JAM.policy.p39);
  this.restrictionSites = v1529;
  return;
}
function restrictionSiteSorter(a, b) {
  var v847 = a.position;
  var v848 = b.position;
  var v483 = v847 < v848;
  if (v483) {
    return 1;
  }
  var v849 = a.position;
  var v850 = b.position;
  var v484 = v849 > v850;
  if (v484) {
    return-1;
  } else {
    return 0;
  }
  return;
}
JAM.new(TextLayout, [], JAM.policy.p39);
var v485 = TextLayout.prototype;
v485.writeLayout = writeLayout;
var v486 = TextLayout.prototype;
v486.addComponent = addComponent;
JAM.new(LayoutComponent, [], JAM.policy.p39);
var v487 = LayoutComponent.prototype;
v487.writeLayoutComponent = writeLayoutComponent;
var v488 = LayoutComponent.prototype;
v488.setCharacters = setCharacters;
var v489 = LayoutComponent.prototype;
v489.isRoom = isRoom;
var v490 = TranslationComponent;
var v1530 = JAM.new(LayoutComponent, [], JAM.policy.p39);
v490.prototype = v1530;
var v491 = TranslationComponent.prototype;
v491.writeLayoutComponent = v4;
var v492 = UppercaseTranslationComponent;
var v1531 = JAM.new(LayoutComponent, [], JAM.policy.p39);
v492.prototype = v1531;
var v493 = UppercaseTranslationComponent.prototype;
v493.writeLayoutComponent = v5;
var v494 = DnaComponent;
var v1532 = JAM.new(LayoutComponent, [], JAM.policy.p39);
v494.prototype = v1532;
var v495 = DnaComponent.prototype;
v495.writeLayoutComponent = v6;
JAM.new(RestrictionSiteCollection, [], JAM.policy.p39);
var v496 = RestrictionSiteCollection.prototype;
v496.addRestrictionSite = addRestrictionSite;
var v497 = RestrictionSiteCollection.prototype;
v497.sortRestrictionSites = sortRestrictionSites;
var v498 = RestrictionSiteCollection.prototype;
v498.getSitesInRange = getSitesInRange;
JAM.set(document, "onload", v7);
var v499 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p22);
JAM.set(v499, "onclick", v8);
var v500 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p22);
JAM.set(v500, "onclick", v9)
