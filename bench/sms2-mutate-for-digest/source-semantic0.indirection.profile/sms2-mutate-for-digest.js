
JAM.startProfile('load');
function v9() {
  var v993 = document.forms;
  var v836 = v993[0];
  var v488 = v836.elements;
  var v10 = v488[0];
  v10.value = " ";
  var v994 = document.forms;
  var v837 = v994[0];
  var v489 = v837.elements;
  var v11 = v489[4];
  v11.value = " ";
  return;
}
function v8() {
  try {
    mutateForDigest();
  } catch (e$$5) {
    var v12 = "The following error was encountered: " + e$$5;
    alert(v12);
  }
  return;
}
function v7() {
  var v490 = document.main_form;
  var v13 = v490.main_submit;
  v13.focus();
  return;
}
function v6(start$$9, stop$$5) {
  var v14 = outputWindow.document;
  var v491 = this.positionLabel;
  var v15 = rightNum(v491, "", 8, "");
  JAM.call(v14.write, v14, [v15], JAM.policy.p16);
  var v16 = outputWindow.document;
  var v17 = this.spanStart;
  JAM.call(v16.write, v16, [v17], JAM.policy.p16);
  var v18 = outputWindow.document;
  var v838 = this.characters;
  var v492 = JAM.call(v838.slice, v838, [start$$9, stop$$5], JAM.policy.p27);
  var v19 = JAM.call(v492.join, v492, [""], JAM.policy.p9);
  JAM.call(v18.write, v18, [v19], JAM.policy.p16);
  var v20 = outputWindow.document;
  var v493 = this.spanEnd;
  var v21 = v493 + "\n";
  JAM.call(v20.write, v20, [v21], JAM.policy.p16);
  var v22 = this.positionLabel;
  var v23 = stop$$5 - start$$9;
  this.positionLabel = v22 + v23;
  return;
}
function v5(start$$8, stop$$4) {
  var v494 = this.characters;
  var v24 = JAM.call(v494.slice, v494, [start$$8, stop$$4], JAM.policy.p27);
  var textToWrite = JAM.call(v24.join, v24, [""], JAM.policy.p9);
  var v495 = JAM.call(textToWrite.search, textToWrite, [/\w/], JAM.policy.p17);
  var v34 = v495 != -1;
  if (v34) {
    var v25 = outputWindow.document;
    var v496 = this.positionLabel;
    var v26 = rightNum(v496, "", 8, "");
    JAM.call(v25.write, v25, [v26], JAM.policy.p16);
    var v27 = outputWindow.document;
    var v28 = this.spanStart;
    JAM.call(v27.write, v27, [v28], JAM.policy.p16);
    var v29 = this.positionLabel;
    var v497 = JAM.call(textToWrite.match, textToWrite, [/[A-Z]/g], JAM.policy.p17);
    var v30 = v497.length;
    this.positionLabel = v29 + v30;
    var v31 = outputWindow.document;
    JAM.call(v31.write, v31, [textToWrite], JAM.policy.p16);
    var v32 = outputWindow.document;
    var v498 = this.spanEnd;
    var v33 = v498 + "\n";
    JAM.call(v32.write, v32, [v33], JAM.policy.p16);
  }
  return;
}
function v4(start$$7, stop$$3) {
  var v35 = outputWindow.document;
  var v499 = this.positionLabel;
  var v36 = rightNum(v499, "", 8, "");
  JAM.call(v35.write, v35, [v36], JAM.policy.p16);
  var v37 = outputWindow.document;
  var v38 = this.spanStart;
  JAM.call(v37.write, v37, [v38], JAM.policy.p16);
  var v39 = outputWindow.document;
  var v839 = this.characters;
  var v500 = JAM.call(v839.slice, v839, [start$$7, stop$$3], JAM.policy.p27);
  var v40 = JAM.call(v500.join, v500, [""], JAM.policy.p9);
  JAM.call(v39.write, v39, [v40], JAM.policy.p16);
  var v41 = outputWindow.document;
  var v501 = this.spanEnd;
  var v42 = v501 + "\n";
  JAM.call(v41.write, v41, [v42], JAM.policy.p16);
  var v43 = this.positionLabel;
  var v502 = stop$$3 - start$$7;
  var v44 = v502 / 3;
  this.positionLabel = v43 + v44;
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p15);
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v45 = arrayOfSequences[0];
  var lengthOfAlign = v45.length;
  var v503 = arrayOfSequences.length;
  var v46 = v503 < 2;
  if (v46) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v504 = arrayOfTitles.length;
  var v48 = i$$1 < v504;
  for (;v48;) {
    var v1088 = arrayOfTitles[i$$1];
    var v995 = JAM.call(v1088.search, v1088, [/\S/], JAM.policy.p17);
    var v840 = v995 == -1;
    var v997 = !v840;
    if (v997) {
      var v1089 = arrayOfSequences[i$$1];
      var v996 = JAM.call(v1089.search, v1089, [/\S/], JAM.policy.p17);
      v840 = v996 == -1;
    }
    var v505 = v840;
    var v842 = !v505;
    if (v842) {
      var v998 = arrayOfSequences[i$$1];
      var v841 = v998.length;
      v505 = v841 != lengthOfAlign;
    }
    var v47 = v505;
    if (v47) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v506 = arrayOfTitles.length;
    v48 = i$$1 < v506;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1151 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17);
  var v1090 = v1151 == -1;
  var v1153 = !v1090;
  if (v1153) {
    var v1152 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17);
    v1090 = v1152 == -1;
  }
  var v999 = v1090;
  var v1092 = !v999;
  if (v1092) {
    var v1091 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17);
    v999 = v1091 == -1;
  }
  var v843 = v999;
  var v1001 = !v843;
  if (v1001) {
    var v1000 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17);
    v843 = v1000 == -1;
  }
  var v507 = v843;
  var v845 = !v507;
  if (v845) {
    var v844 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17);
    v507 = v844 == -1;
  }
  var v49 = v507;
  if (v49) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v846 = formElement.value;
  var v508 = JAM.call(v846.search, v846, [/\S/], JAM.policy.p17);
  var v50 = v508 == -1;
  if (v50) {
    alert("Please enter some text.");
    return false;
  }
  return true;
}
function checkGeneticCode(arrayOfPatterns) {
  var z$$2 = 0;
  var codon = "";
  var oneMatch = false;
  var testSequence = "gggggaggtggcgaggaagatgacgtggtagttgtcgcggcagctgccaggagaagtagcaagaaaaataacatgataattatcacgacaactacctggtgatgttgctagtaatattacttgttatttttctcgtcatcttcccggcgacgtcgccagcaacatcacctgctacttctcccgccacctccc";
  var v509 = arrayOfPatterns.length;
  var v53 = z$$2 < v509;
  for (;v53;) {
    var v847 = arrayOfPatterns[z$$2];
    var v510 = JAM.call(v847.search, v847, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17);
    var v51 = v510 == -1;
    if (v51) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v848 = arrayOfPatterns[z$$2];
    var v511 = moreExpressionCheck(v848);
    var v52 = v511 == false;
    if (v52) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v512 = arrayOfPatterns.length;
    v53 = z$$2 < v512;
  }
  var v54 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v54);
  var v55 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v55);
  var j = 0;
  var v513 = arrayOfPatterns.length;
  var v59 = j < v513;
  for (;v59;) {
    var v849 = arrayOfPatterns[j];
    var v514 = JAM.call(v849.match, v849, [/\/.+\//], JAM.policy.p17);
    var v56 = v514 + "gi";
    if (JAM.isEval(eval)) {
      var v1497 = eval("introspect(JAM.policy.pFull) { " + v56 + " }")
    } else {
      var v1497 = JAM.call(eval, null, [v56])
    }
    geneticCodeMatchExp[j] = v1497;
    var v515 = arrayOfPatterns[j];
    var v57 = JAM.call(v515.match, v515, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v1498 = v57.toString();
    geneticCodeMatchResult[j] = v1498;
    var v58 = geneticCodeMatchResult[j];
    var v1499 = JAM.call(v58.replace, v58, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v1499;
    j++;
    var v516 = arrayOfPatterns.length;
    v59 = j < v516;
  }
  var i$$2 = 0;
  var v850 = testSequence.length;
  var v517 = v850 - 3;
  var v66 = i$$2 <= v517;
  for (;v66;) {
    var v60 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v60], JAM.policy.p15);
    j = 0;
    var v518 = geneticCodeMatchExp.length;
    var v64 = j < v518;
    for (;v64;) {
      var v851 = geneticCodeMatchExp[j];
      var v519 = JAM.call(codon.search, codon, [v851], JAM.policy.p16);
      var v63 = v519 != -1;
      if (v63) {
        var v62 = oneMatch == true;
        if (v62) {
          var v520 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v61 = v520 + ".";
          alert(v61);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v521 = geneticCodeMatchExp.length;
      v64 = j < v521;
    }
    var v65 = oneMatch == false;
    if (v65) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v852 = testSequence.length;
    var v522 = v852 - 3;
    v66 = i$$2 <= v522;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v523 = arrayOfPatterns$$1.length;
  var v68 = z$$3 < v523;
  for (;v68;) {
    var v853 = arrayOfPatterns$$1[z$$3];
    var v524 = JAM.call(v853.search, v853, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17);
    var v67 = v524 != -1;
    if (v67) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v525 = arrayOfPatterns$$1.length;
    v68 = z$$3 < v525;
  }
  var i$$3 = 0;
  var v526 = arrayOfPatterns$$1.length;
  var v72 = i$$3 < v526;
  for (;v72;) {
    var v854 = arrayOfPatterns$$1[i$$3];
    var v527 = "[" + v854;
    var v69 = v527 + "]";
    var re = new RegExp(v69, "gi");
    var j$$1 = i$$3 + 1;
    var v528 = arrayOfPatterns$$1.length;
    var v71 = j$$1 < v528;
    for (;v71;) {
      var v855 = arrayOfPatterns$$1[j$$1];
      var v529 = JAM.call(v855.search, v855, [re], JAM.policy.p16);
      var v70 = v529 != -1;
      if (v70) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v530 = arrayOfPatterns$$1.length;
      v71 = j$$1 < v530;
    }
    i$$3++;
    var v531 = arrayOfPatterns$$1.length;
    v72 = i$$3 < v531;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v532 = arrayOfPatterns$$2.length;
  var v75 = z$$4 < v532;
  for (;v75;) {
    var v856 = arrayOfPatterns$$2[z$$4];
    var v533 = JAM.call(v856.search, v856, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17);
    var v73 = v533 == -1;
    if (v73) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v857 = arrayOfPatterns$$2[z$$4];
    var v534 = moreExpressionCheck(v857);
    var v74 = v534 == false;
    if (v74) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v535 = arrayOfPatterns$$2.length;
    v75 = z$$4 < v535;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v1002 = getSequenceFromFasta(text$$7);
  var v858 = JAM.call(v1002.replace, v1002, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v536 = v858.length;
  var v77 = v536 > maxInput;
  if (v77) {
    var v537 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v76 = v537 + " characters.";
    alert(v76);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v538 = text$$8.length;
  var v79 = v538 > maxInput$$1;
  if (v79) {
    var v539 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v78 = v539 + " characters.";
    alert(v78);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p15);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p15);
  return dnaSequence;
}
function closeForm() {
  var v80 = outputWindow.document;
  JAM.call(v80.write, v80, ["</form>"], JAM.policy.p9);
  return true;
}
function closePre() {
  var v81 = outputWindow.document;
  JAM.call(v81.write, v81, ["</div>"], JAM.policy.p9);
  var v82 = outputWindow.document;
  JAM.call(v82.write, v82, ["</pre>\n"], JAM.policy.p9);
  return;
}
function closeTextArea() {
  var v83 = outputWindow.document;
  JAM.call(v83.write, v83, ["</textarea>"], JAM.policy.p9);
  return true;
}
function closeWindow() {
  var v84 = outputWindow.document;
  JAM.call(v84.write, v84, ["</body>\n</html>\n"], JAM.policy.p9);
  outputWindow.status = "Done.";
  var v85 = outputWindow.document;
  v85.close();
  return;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p15);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p15);
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v540 = alignArray.length;
  var v86 = v540 < 3;
  if (v86) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v541 = alignArray.length;
  var v88 = i$$4 < v541;
  for (;v88;) {
    var v859 = alignArray[i$$4];
    var v542 = JAM.call(v859.search, v859, [/[^\s]+\s/], JAM.policy.p17);
    var v87 = v542 == -1;
    if (v87) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v543 = alignArray.length;
    v88 = i$$4 < v543;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p15);
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p15);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p15);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p15);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p15);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v544 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v91 = v544 != -1;
  if (v91) {
    var v90 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p16);
    for (;v90;) {
      var v89 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v89], JAM.policy.p16);
      v90 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p16);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v545 = sequence$$2.length;
  var v92 = "&gt;results for " + v545;
  var stringToReturn = v92 + " residue sequence ";
  var v546 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p17);
  var v94 = v546 != -1;
  if (v94) {
    var v547 = stringToReturn + '"';
    var v93 = v547 + fastaSequenceTitle;
    stringToReturn = v93 + '"';
  }
  var v548 = stringToReturn + ' starting "';
  var v549 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v95 = v548 + v549;
  stringToReturn = v95 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v550 = sequenceOne.length;
  var v96 = "Search results for " + v550;
  var stringToReturn$$1 = v96 + " residue sequence ";
  var v551 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p17);
  var v98 = v551 != -1;
  if (v98) {
    var v552 = stringToReturn$$1 + '"';
    var v97 = v552 + fastaSequenceTitleOne;
    stringToReturn$$1 = v97 + '"';
  }
  var v553 = stringToReturn$$1 + ' starting "';
  var v554 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v99 = v553 + v554;
  stringToReturn$$1 = v99 + '"\n';
  var v555 = stringToReturn$$1 + "and ";
  var v556 = sequenceTwo.length;
  var v100 = v555 + v556;
  stringToReturn$$1 = v100 + " residue sequence ";
  var v557 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p17);
  var v102 = v557 != -1;
  if (v102) {
    var v558 = stringToReturn$$1 + '"';
    var v101 = v558 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v101 + '"';
  }
  var v559 = stringToReturn$$1 + ' starting "';
  var v560 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v103 = v559 + v560;
  stringToReturn$$1 = v103 + '"';
  var v104 = '<div class="info">' + stringToReturn$$1;
  return v104 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v105 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v105);
  var j$$2 = 0;
  var v561 = arrayOfPatterns$$3.length;
  var v107 = j$$2 < v561;
  for (;v107;) {
    var v860 = arrayOfPatterns$$3[j$$2];
    var v562 = JAM.call(v860.match, v860, [/\/.+\//], JAM.policy.p17);
    var v106 = v562 + "gi";
    if (JAM.isEval(eval)) {
      var v1500 = eval("introspect(JAM.policy.pFull) { " + v106 + " }")
    } else {
      var v1500 = JAM.call(eval, null, [v106])
    }
    geneticCodeMatchExp$$1[j$$2] = v1500;
    j$$2++;
    var v563 = arrayOfPatterns$$3.length;
    v107 = j$$2 < v563;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v108 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v108);
  var j$$3 = 0;
  var v564 = arrayOfPatterns$$4.length;
  var v111 = j$$3 < v564;
  for (;v111;) {
    var v565 = arrayOfPatterns$$4[j$$3];
    var v109 = JAM.call(v565.match, v565, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v1501 = v109.toString();
    geneticCodeMatchResult$$1[j$$3] = v1501;
    var v110 = geneticCodeMatchResult$$1[j$$3];
    var v1502 = JAM.call(v110.replace, v110, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v1502;
    j$$3++;
    var v566 = arrayOfPatterns$$4.length;
    v111 = j$$3 < v566;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v567 = sequence$$3.length;
  var v112 = "Results for " + v567;
  var stringToReturn$$2 = v112 + " residue sequence ";
  var v568 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p17);
  var v114 = v568 != -1;
  if (v114) {
    var v569 = stringToReturn$$2 + '"';
    var v113 = v569 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v113 + '"';
  }
  var v570 = stringToReturn$$2 + ' starting "';
  var v571 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v115 = v570 + v571;
  stringToReturn$$2 = v115 + '"';
  var v116 = '<div class="info">' + stringToReturn$$2;
  return v116 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v861 = "Results for " + topology;
  var v572 = v861 + " ";
  var v573 = sequence$$4.length;
  var v117 = v572 + v573;
  var stringToReturn$$3 = v117 + " residue sequence ";
  var v574 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p17);
  var v119 = v574 != -1;
  if (v119) {
    var v575 = stringToReturn$$3 + '"';
    var v118 = v575 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v118 + '"';
  }
  var v576 = stringToReturn$$3 + ' starting "';
  var v577 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v120 = v576 + v577;
  stringToReturn$$3 = v120 + '"';
  var v121 = '<div class="info">' + stringToReturn$$3;
  return v121 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v578 = sequenceOne$$1.length;
  var v122 = "Alignment results for " + v578;
  var stringToReturn$$4 = v122 + " residue sequence ";
  var v579 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p17);
  var v124 = v579 != -1;
  if (v124) {
    var v580 = stringToReturn$$4 + '"';
    var v123 = v580 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v123 + '"';
  }
  var v581 = stringToReturn$$4 + ' starting "';
  var v582 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v125 = v581 + v582;
  stringToReturn$$4 = v125 + '"\n';
  var v583 = stringToReturn$$4 + "and ";
  var v584 = sequenceTwo$$1.length;
  var v126 = v583 + v584;
  stringToReturn$$4 = v126 + " residue sequence ";
  var v585 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p17);
  var v128 = v585 != -1;
  if (v128) {
    var v586 = stringToReturn$$4 + '"';
    var v127 = v586 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v127 + '"';
  }
  var v587 = stringToReturn$$4 + ' starting "';
  var v588 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v129 = v587 + v588;
  stringToReturn$$4 = v129 + '"';
  var v130 = '<div class="info">' + stringToReturn$$4;
  return v130 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v132 = j$$4 < lengthOut;
  for (;v132;) {
    var v589 = Math.random();
    var v590 = components.length;
    var v131 = v589 * v590;
    tempNum = JAM.call(Math.floor, Math, [v131], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p16);
    j$$4++;
    v132 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p9);
}
function getSequenceFromFasta(sequenceRecord) {
  var v591 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v133 = v591 != -1;
  if (v133) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v592 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v135 = v592 != -1;
  if (v135) {
    var v134 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
    fastaTitle = v134.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p15);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1339 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p17);
  var v1315 = v1339 != -1;
  var v1341 = !v1315;
  if (v1341) {
    var v1340 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17);
    v1315 = v1340 != -1;
  }
  var v1289 = v1315;
  var v1317 = !v1289;
  if (v1317) {
    var v1316 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17);
    v1289 = v1316 != -1;
  }
  var v1263 = v1289;
  var v1291 = !v1263;
  if (v1291) {
    var v1290 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17);
    v1263 = v1290 != -1;
  }
  var v1233 = v1263;
  var v1265 = !v1233;
  if (v1265) {
    var v1264 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17);
    v1233 = v1264 != -1;
  }
  var v1196 = v1233;
  var v1235 = !v1196;
  if (v1235) {
    var v1234 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17);
    v1196 = v1234 != -1;
  }
  var v1154 = v1196;
  var v1198 = !v1154;
  if (v1198) {
    var v1197 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17);
    v1154 = v1197 != -1;
  }
  var v1093 = v1154;
  var v1156 = !v1093;
  if (v1156) {
    var v1155 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17);
    v1093 = v1155 != -1;
  }
  var v1003 = v1093;
  var v1095 = !v1003;
  if (v1095) {
    var v1094 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17);
    v1003 = v1094 != -1;
  }
  var v862 = v1003;
  var v1005 = !v862;
  if (v1005) {
    var v1004 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17);
    v862 = v1004 != -1;
  }
  var v593 = v862;
  var v864 = !v593;
  if (v864) {
    var v863 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17);
    v593 = v863 != -1;
  }
  var v136 = v593;
  if (v136) {
    return false;
  }
  return true;
}
function openForm() {
  var v137 = outputWindow.document;
  JAM.call(v137.write, v137, ['<form action="">\n'], JAM.policy.p9);
  return true;
}
function openPre() {
  var v138 = outputWindow.document;
  JAM.call(v138.write, v138, ["<pre>"], JAM.policy.p9);
  var v139 = outputWindow.document;
  JAM.call(v139.write, v139, ['<div class="pre">'], JAM.policy.p9);
  return;
}
function openTextArea() {
  var v140 = outputWindow.document;
  JAM.call(v140.write, v140, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p9);
  return true;
}
function openWindow() {
  var title$$5 = "Mutate for Digest";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v141 = outputWindow.document;
  var v1006 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v865 = v1006 + "<head>\n";
  var v594 = v865 + "<title>Sequence Manipulation Suite</title>\n";
  var v142 = v594 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v141.write, v141, [v142], JAM.policy.p16);
  if (isColor) {
    var v143 = outputWindow.document;
    var v1405 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1384 = v1405 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1363 = v1384 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1342 = v1363 + "div.info {font-weight: bold}\n";
    var v1318 = v1342 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1292 = v1318 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1266 = v1292 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1236 = v1266 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1199 = v1236 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1157 = v1199 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1096 = v1157 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1007 = v1096 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v866 = v1007 + "td.many {color: #000000}\n";
    var v595 = v866 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v144 = v595 + "</style>\n";
    JAM.call(v143.write, v143, [v144], JAM.policy.p16);
  } else {
    var v145 = outputWindow.document;
    var v1426 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1406 = v1426 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1385 = v1406 + "div.title {display: none}\n";
    var v1364 = v1385 + "div.info {font-weight: bold}\n";
    var v1343 = v1364 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1319 = v1343 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1293 = v1319 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1267 = v1293 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1237 = v1267 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1200 = v1237 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1158 = v1200 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1097 = v1158 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1008 = v1097 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v867 = v1008 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v596 = v867 + "img {display: none}\n";
    var v146 = v596 + "</style>\n";
    JAM.call(v145.write, v145, [v146], JAM.policy.p16);
  }
  var v147 = outputWindow.document;
  var v1009 = "</head>\n" + '<body class="main">\n';
  var v868 = v1009 + '<div class="title">';
  var v597 = v868 + title$$6;
  var v148 = v597 + " results</div>\n";
  JAM.call(v147.write, v147, [v148], JAM.policy.p16);
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7);
  return;
}
function _openWindowAlign(title$$8) {
  var isBackground = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v149 = outputWindow.document;
  var v1010 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v869 = v1010 + "<head>\n";
  var v598 = v869 + "<title>Sequence Manipulation Suite</title>\n";
  var v150 = v598 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v149.write, v149, [v150], JAM.policy.p16);
  if (isBackground) {
    var v151 = outputWindow.document;
    var v1407 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1386 = v1407 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1365 = v1386 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1344 = v1365 + "div.info {font-weight: bold}\n";
    var v1320 = v1344 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1294 = v1320 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1268 = v1294 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1238 = v1268 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1201 = v1238 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1159 = v1201 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1098 = v1159 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v1011 = v1098 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v870 = v1011 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v599 = v870 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v152 = v599 + "</style>\n";
    JAM.call(v151.write, v151, [v152], JAM.policy.p16);
  } else {
    var v153 = outputWindow.document;
    var v1445 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1427 = v1445 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1408 = v1427 + "div.title {display: none}\n";
    var v1387 = v1408 + "div.info {font-weight: bold}\n";
    var v1366 = v1387 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1345 = v1366 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1321 = v1345 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1295 = v1321 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1269 = v1295 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1239 = v1269 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1202 = v1239 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1160 = v1202 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1099 = v1160 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v1012 = v1099 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v871 = v1012 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v600 = v871 + "img {display: none}\n";
    var v154 = v600 + "</style>\n";
    JAM.call(v153.write, v153, [v154], JAM.policy.p16);
  }
  var v155 = outputWindow.document;
  var v1013 = "</head>\n" + '<body class="main">\n';
  var v872 = v1013 + '<div class="title">';
  var v601 = v872 + title$$8;
  var v156 = v601 + " results</div>\n";
  JAM.call(v155.write, v155, [v156], JAM.policy.p16);
  outputWindow.status = "Please Wait.";
  return;
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p15);
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p15);
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p15);
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p15);
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p15);
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p15);
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p15);
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p15);
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p15);
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  var v602 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p17);
  var v157 = v602 != -1;
  if (v157) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p17);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p9);
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  var v158 = j$$5 < lengthOfColumn;
  for (;v158;) {
    tempString = tempString + " ";
    j$$5++;
    v158 = j$$5 < lengthOfColumn;
  }
  var v159 = tempString + theNumber;
  theNumber = v159 + " ";
  var v160 = sequenceToAppend + theNumber;
  sequenceToAppend = v160 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p16);
  var v603 = testArray[0];
  var v161 = v603 != testString;
  if (v161) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v604 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p16);
  var v162 = v604 == -1;
  if (v162) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
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
  var v163 = !caughtException;
  if (v163) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p15);
  var v164 = testString != "1X2X3X";
  if (v164) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v605 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p11);
  var v165 = v605 != 2489.824;
  if (v165) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v606 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p11);
  var v166 = v606 != 2489.8;
  if (v166) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v607 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p17);
  var v167 = v607 == -1;
  if (v167) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v1100 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17);
  var v1014 = v1100 == -1;
  var v1102 = !v1014;
  if (v1102) {
    var v1101 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17);
    v1014 = v1101 == -1;
  }
  var v873 = v1014;
  var v1016 = !v873;
  if (v1016) {
    var v1015 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17);
    v873 = v1015 == -1;
  }
  var v608 = v873;
  var v875 = !v608;
  if (v875) {
    var v874 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17);
    v608 = v874 == -1;
  }
  var v168 = v608;
  if (v168) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v609 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p17);
  var v169 = v609 == -1;
  if (v169) {
    alert("Please enter a number.");
    return false;
  }
  var v171 = theNumber$$2 > maxInput$$2;
  if (v171) {
    var v610 = "Please enter a number less than or equal to " + maxInput$$2;
    var v170 = v610 + ".";
    alert(v170);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v611 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p17);
  var v172 = v611 != -1;
  if (v172) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v612 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p17);
  var v173 = v612 != -1;
  if (v173) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v1103 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17);
  var v1017 = v1103 == -1;
  var v1105 = !v1017;
  if (v1105) {
    var v1104 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17);
    v1017 = v1104 == -1;
  }
  var v876 = v1017;
  var v1019 = !v876;
  if (v1019) {
    var v1018 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17);
    v876 = v1018 == -1;
  }
  var v613 = v876;
  var v878 = !v613;
  if (v878) {
    var v877 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17);
    v613 = v877 == -1;
  }
  var v174 = v613;
  if (v174) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1106 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17);
  var v1020 = v1106 == -1;
  var v1108 = !v1020;
  if (v1108) {
    var v1107 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17);
    v1020 = v1107 == -1;
  }
  var v879 = v1020;
  var v1022 = !v879;
  if (v1022) {
    var v1021 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17);
    v879 = v1021 == -1;
  }
  var v614 = v879;
  var v881 = !v614;
  if (v881) {
    var v880 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17);
    v614 = v880 == -1;
  }
  var v175 = v614;
  if (v175) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v615 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p17);
  var v176 = v615 == -1;
  if (v176) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v1109 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17);
  var v1023 = v1109 == -1;
  var v1111 = !v1023;
  if (v1111) {
    var v1110 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17);
    v1023 = v1110 == -1;
  }
  var v882 = v1023;
  var v1025 = !v882;
  if (v1025) {
    var v1024 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17);
    v882 = v1024 == -1;
  }
  var v616 = v882;
  var v884 = !v616;
  if (v884) {
    var v883 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17);
    v616 = v883 == -1;
  }
  var v177 = v616;
  if (v177) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v617 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p17);
  var v178 = v617 == -1;
  if (v178) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function writeGroupNum(text$$10, tabIn$$1, groupSize, basePerLine, startBase, stopBase) {
  var i$$5 = parseInt(startBase);
  var k = 0;
  var lineOfText = "";
  var sepChar = " ";
  groupSize = parseInt(groupSize);
  basePerLine = parseInt(basePerLine);
  var v185 = i$$5 < stopBase;
  for (;v185;) {
    var v179 = i$$5 + 1;
    lineOfText = rightNum(v179, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v618 = basePerLine / groupSize;
    var v182 = j$$6 <= v618;
    for (;v182;) {
      var v181 = k < groupSize;
      for (;v181;) {
        var v619 = k + i$$5;
        var v180 = JAM.call(text$$10.charAt, text$$10, [v619], JAM.policy.p16);
        lineOfText = lineOfText + v180;
        k = k + 1;
        v181 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v620 = basePerLine / groupSize;
      v182 = j$$6 <= v620;
    }
    var v183 = outputWindow.document;
    var v184 = lineOfText + "\n";
    JAM.call(v183.write, v183, [v184], JAM.policy.p16);
    lineOfText = "";
    v185 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v621 = adjustment < 0;
    if (v621) {
      v621 = adjusted >= 0;
    }
    var v186 = v621;
    if (v186) {
      adjusted++;
    }
    return adjusted;
  }
  var numberingAdjustment = 0;
  var i$$6 = parseInt(startBase$$2);
  var k$$1 = 0;
  var lineOfText$$1 = "";
  var lineNum = "";
  var sepChar$$1 = " ";
  var aboveNum = "";
  groupSize$$2 = parseInt(groupSize$$2);
  basePerLine$$2 = parseInt(basePerLine$$2);
  numberingAdjustment = parseInt(numberingAdjustment);
  var v217 = i$$6 < stopBase$$2;
  for (;v217;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v622 = basePerLine$$2 / groupSize$$2;
    var v193 = j$$7 <= v622;
    for (;v193;) {
      var v189 = k$$1 < groupSize$$2;
      for (;v189;) {
        var v623 = i$$6 + k$$1;
        var v187 = v623 >= stopBase$$2;
        if (v187) {
          break;
        }
        var v624 = k$$1 + i$$6;
        var v188 = JAM.call(text$$12.charAt, text$$12, [v624], JAM.policy.p16);
        lineOfText$$1 = lineOfText$$1 + v188;
        k$$1 = k$$1 + 1;
        v189 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v191 = numberPosition$$1 == "above";
      if (v191) {
        var v625 = adjustNumbering(i$$6, numberingAdjustment);
        var v190 = rightNum(v625, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v190;
      }
      var v192 = i$$6 >= stopBase$$2;
      if (v192) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v626 = basePerLine$$2 / groupSize$$2;
      v193 = j$$7 <= v626;
    }
    var v216 = numberPosition$$1 == "left";
    if (v216) {
      var v194 = outputWindow.document;
      var v1026 = adjustNumbering(lineNum, numberingAdjustment);
      var v885 = rightNum(v1026, "", 8, tabIn$$3);
      var v627 = v885 + lineOfText$$1;
      var v195 = v627 + "\n";
      JAM.call(v194.write, v194, [v195], JAM.policy.p16);
      var v199 = strands$$1 == "two";
      if (v199) {
        var v196 = outputWindow.document;
        var v1027 = adjustNumbering(lineNum, numberingAdjustment);
        var v886 = rightNum(v1027, "", 8, tabIn$$3);
        var v887 = complement(lineOfText$$1);
        var v628 = v886 + v887;
        var v197 = v628 + "\n";
        JAM.call(v196.write, v196, [v197], JAM.policy.p16);
        var v198 = outputWindow.document;
        JAM.call(v198.write, v198, ["\n"], JAM.policy.p9);
      }
    } else {
      var v215 = numberPosition$$1 == "right";
      if (v215) {
        var v200 = outputWindow.document;
        var v888 = adjustNumbering(i$$6, numberingAdjustment);
        var v629 = lineOfText$$1 + v888;
        var v201 = v629 + "\n";
        JAM.call(v200.write, v200, [v201], JAM.policy.p16);
        var v205 = strands$$1 == "two";
        if (v205) {
          var v202 = outputWindow.document;
          var v889 = complement(lineOfText$$1);
          var v890 = adjustNumbering(i$$6, numberingAdjustment);
          var v630 = v889 + v890;
          var v203 = v630 + "\n";
          JAM.call(v202.write, v202, [v203], JAM.policy.p16);
          var v204 = outputWindow.document;
          JAM.call(v204.write, v204, ["\n"], JAM.policy.p9);
        }
      } else {
        var v214 = numberPosition$$1 == "above";
        if (v214) {
          var v206 = outputWindow.document;
          var v207 = aboveNum + "\n";
          JAM.call(v206.write, v206, [v207], JAM.policy.p16);
          var v208 = outputWindow.document;
          var v209 = lineOfText$$1 + "\n";
          JAM.call(v208.write, v208, [v209], JAM.policy.p16);
          var v213 = strands$$1 == "two";
          if (v213) {
            var v210 = outputWindow.document;
            var v631 = complement(lineOfText$$1);
            var v211 = v631 + "\n";
            JAM.call(v210.write, v210, [v211], JAM.policy.p16);
            var v212 = outputWindow.document;
            JAM.call(v212.write, v212, ["\n"], JAM.policy.p9);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v217 = i$$6 < stopBase$$2;
  }
  return;
}
function writeGroupNumProtein(text$$13, tabIn$$4, groupSize$$3, basePerLine$$3, startBase$$3, stopBase$$3, numberPosition$$2) {
  var i$$7 = parseInt(startBase$$3);
  var k$$2 = 0;
  var lineOfText$$2 = "";
  var lineNum$$1 = "";
  var sepChar$$2 = " ";
  var aboveNum$$1 = "";
  groupSize$$3 = parseInt(groupSize$$3);
  basePerLine$$3 = parseInt(basePerLine$$3);
  var v236 = i$$7 < stopBase$$3;
  for (;v236;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v632 = basePerLine$$3 / groupSize$$3;
    var v224 = j$$8 <= v632;
    for (;v224;) {
      var v220 = k$$2 < groupSize$$3;
      for (;v220;) {
        var v633 = i$$7 + k$$2;
        var v218 = v633 >= stopBase$$3;
        if (v218) {
          break;
        }
        var v634 = k$$2 + i$$7;
        var v219 = JAM.call(text$$13.charAt, text$$13, [v634], JAM.policy.p16);
        lineOfText$$2 = lineOfText$$2 + v219;
        k$$2 = k$$2 + 1;
        v220 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v222 = numberPosition$$2 == "above";
      if (v222) {
        var v221 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v221;
      }
      var v223 = i$$7 >= stopBase$$3;
      if (v223) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v635 = basePerLine$$3 / groupSize$$3;
      v224 = j$$8 <= v635;
    }
    var v235 = numberPosition$$2 == "left";
    if (v235) {
      var v225 = outputWindow.document;
      var v891 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v636 = v891 + lineOfText$$2;
      var v226 = v636 + "\n";
      JAM.call(v225.write, v225, [v226], JAM.policy.p16);
    } else {
      var v234 = numberPosition$$2 == "right";
      if (v234) {
        var v227 = outputWindow.document;
        var v637 = lineOfText$$2 + i$$7;
        var v228 = v637 + "\n";
        JAM.call(v227.write, v227, [v228], JAM.policy.p16);
      } else {
        var v233 = numberPosition$$2 == "above";
        if (v233) {
          var v229 = outputWindow.document;
          var v230 = aboveNum$$1 + "\n";
          JAM.call(v229.write, v229, [v230], JAM.policy.p16);
          var v231 = outputWindow.document;
          var v232 = lineOfText$$2 + "\n";
          JAM.call(v231.write, v231, [v232], JAM.policy.p16);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v236 = i$$7 < stopBase$$3;
  }
  return true;
}
function writeMutatedSequence(sequence$$13, components$$1, numMut, firstIndexToMutate, lastIndexToMutate) {
  var currentChar = "";
  var randNum = 0;
  var maxNum = 0;
  var needNewChar = "";
  var componentsIndex = 0;
  numMut = parseInt(numMut);
  firstIndexToMutate = parseInt(firstIndexToMutate);
  lastIndexToMutate = parseInt(lastIndexToMutate);
  var v1028 = sequence$$13.length;
  var v892 = v1028 <= firstIndexToMutate;
  var v1029 = !v892;
  if (v1029) {
    v892 = lastIndexToMutate < 0;
  }
  var v638 = v892;
  var v893 = !v638;
  if (v893) {
    v638 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v237 = v638;
  if (v237) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v245 = i$$8 < numMut;
  for (;v245;) {
    maxNum = sequence$$13.length;
    var v639 = Math.random();
    var v238 = v639 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v238], JAM.policy.p17);
    var v640 = randNum < firstIndexToMutate;
    var v894 = !v640;
    if (v894) {
      v640 = randNum > lastIndexToMutate;
    }
    var v239 = v640;
    if (v239) {
      numMut++;
      i$$8++;
      v245 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p17);
    needNewChar = true;
    for (;needNewChar;) {
      var v641 = Math.random();
      var v642 = components$$1.length;
      var v240 = v641 * v642;
      componentsIndex = JAM.call(Math.round, Math, [v240], JAM.policy.p17);
      var v643 = components$$1.length;
      var v241 = componentsIndex == v643;
      if (v241) {
        componentsIndex = 0;
      }
      var v644 = components$$1[componentsIndex];
      var v242 = v644 != currentChar;
      if (v242) {
        needNewChar = false;
      }
    }
    var v645 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v646 = components$$1[componentsIndex];
    var v243 = v645 + v646;
    var v647 = randNum + 1;
    var v648 = sequence$$13.length;
    var v244 = JAM.call(sequence$$13.substring, sequence$$13, [v647, v648], JAM.policy.p27);
    sequence$$13 = v243 + v244;
    i$$8++;
    v245 = i$$8 < numMut;
  }
  var v246 = outputWindow.document;
  var v247 = addReturns(sequence$$13);
  JAM.call(v246.write, v246, [v247], JAM.policy.p16);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v252 = j$$9 < lengthOut$$1;
  for (;v252;) {
    var v649 = Math.random();
    var v650 = components$$2.length;
    var v248 = v649 * v650;
    tempNum$$1 = JAM.call(Math.floor, Math, [v248], JAM.policy.p17);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v651 = sequence$$14.length;
    var v251 = v651 == 60;
    if (v251) {
      var v249 = outputWindow.document;
      var v250 = sequence$$14 + "\n";
      JAM.call(v249.write, v249, [v250], JAM.policy.p16);
      sequence$$14 = "";
    }
    j$$9++;
    v252 = j$$9 < lengthOut$$1;
  }
  var v253 = outputWindow.document;
  var v254 = sequence$$14 + "\n";
  JAM.call(v253.write, v253, [v254], JAM.policy.p16);
  return true;
}
function writeRestrictionSites(sequence$$15, arrayOfItems, dnaConformation) {
  var resultArray = new Array;
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
  var v258 = dnaConformation == "circular";
  if (v258) {
    var v255 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v255.length;
    var v1030 = sequence$$15.length;
    var v895 = v1030 - lookAhead;
    var v896 = sequence$$15.length;
    var v652 = JAM.call(sequence$$15.substring, sequence$$15, [v895, v896], JAM.policy.p27);
    var v256 = v652 + sequence$$15;
    var v257 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v256 + v257;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v259 = outputWindow.document;
  JAM.call(v259.write, v259, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v260 = outputWindow.document;
  var v1031 = '<tr><td class="title" width="200px">' + "Site:";
  var v897 = v1031 + '</td><td class="title">';
  var v653 = v897 + "Positions:";
  var v261 = v653 + "</td></tr>\n";
  JAM.call(v260.write, v260, [v261], JAM.policy.p16);
  var i$$9 = 0;
  var v654 = arrayOfItems.length;
  var v277 = i$$9 < v654;
  for (;v277;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v655 = arrayOfItems[i$$9];
    var v262 = JAM.call(v655.match, v655, [/\/.+\//], JAM.policy.p17);
    matchExp = v262 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v1032 = arrayOfItems[i$$9];
    var v898 = JAM.call(v1032.match, v1032, [/\)\D*\d+/], JAM.policy.p17);
    var v656 = v898.toString();
    var v263 = JAM.call(v656.replace, v656, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v263);
    var v269 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
    for (;v269;) {
      var v264 = matchExp.lastIndex;
      matchPosition = v264 - cutDistance;
      var v657 = matchPosition >= lowerLimit;
      if (v657) {
        v657 = matchPosition < upperLimit;
      }
      var v267 = v657;
      if (v267) {
        timesFound++;
        var v265 = tempString$$1 + ", ";
        var v658 = matchPosition - shiftValue;
        var v266 = v658 + 1;
        tempString$$1 = v265 + v266;
      }
      var v659 = matchExp.lastIndex;
      var v899 = RegExp.lastMatch;
      var v660 = v899.length;
      var v268 = v659 - v660;
      matchExp.lastIndex = v268 + 1;
      v269 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
    }
    var v661 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p17);
    var v270 = v661 != -1;
    if (v270) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p15);
    }
    var v274 = timesFound == 0;
    if (v274) {
      backGroundClass = "none";
    } else {
      var v273 = timesFound == 1;
      if (v273) {
        backGroundClass = "one";
      } else {
        var v272 = timesFound == 2;
        if (v272) {
          backGroundClass = "two";
        } else {
          var v271 = timesFound == 3;
          if (v271) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v275 = outputWindow.document;
    var v1240 = '<tr><td class="' + backGroundClass;
    var v1203 = v1240 + '">';
    var v1296 = arrayOfItems[i$$9];
    var v1270 = JAM.call(v1296.match, v1296, [/\([^\(]+\)/], JAM.policy.p17);
    var v1241 = v1270.toString();
    var v1204 = JAM.call(v1241.replace, v1241, [/\(|\)/g, ""], JAM.policy.p15);
    var v1161 = v1203 + v1204;
    var v1112 = v1161 + '</td><td class="';
    var v1033 = v1112 + backGroundClass;
    var v900 = v1033 + '">';
    var v662 = v900 + tempString$$1;
    var v276 = v662 + "</td></tr>\n";
    JAM.call(v275.write, v275, [v276], JAM.policy.p16);
    timesFound = 0;
    i$$9++;
    var v663 = arrayOfItems.length;
    v277 = i$$9 < v663;
  }
  var v278 = outputWindow.document;
  JAM.call(v278.write, v278, ["</tbody></table>\n"], JAM.policy.p9);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v279 = outputWindow.document;
  JAM.call(v279.write, v279, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v280 = outputWindow.document;
  var v1162 = '<tr><td class="title">' + "Pattern:";
  var v1113 = v1162 + '</td><td class="title">';
  var v1034 = v1113 + "Times found:";
  var v901 = v1034 + '</td><td class="title">';
  var v664 = v901 + "Percentage:";
  var v281 = v664 + "</td></tr>\n";
  JAM.call(v280.write, v280, [v281], JAM.policy.p16);
  var i$$10 = 0;
  var v665 = arrayOfItems$$1.length;
  var v290 = i$$10 < v665;
  for (;v290;) {
    var tempNumber = 0;
    var v666 = arrayOfItems$$1[i$$10];
    var v282 = JAM.call(v666.match, v666, [/\/[^\/]+\//], JAM.policy.p17);
    var matchExp$$1 = v282 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v667 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p16);
    var v284 = v667 != -1;
    if (v284) {
      var v283 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p16);
      tempNumber = v283.length;
    }
    var percentage = 0;
    var v902 = originalLength + 1;
    var v1114 = arrayOfItems$$1[i$$10];
    var v1035 = JAM.call(v1114.match, v1114, [/\d+/], JAM.policy.p17);
    var v903 = parseFloat(v1035);
    var v668 = v902 - v903;
    var v287 = v668 > 0;
    if (v287) {
      var v285 = 100 * tempNumber;
      var v669 = originalLength + 1;
      var v1036 = arrayOfItems$$1[i$$10];
      var v904 = JAM.call(v1036.match, v1036, [/\d+/], JAM.policy.p17);
      var v670 = parseFloat(v904);
      var v286 = v669 - v670;
      percentage = v285 / v286;
    }
    var v288 = outputWindow.document;
    var v1297 = arrayOfItems$$1[i$$10];
    var v1271 = JAM.call(v1297.match, v1297, [/\([^\(]+\)\b/], JAM.policy.p17);
    var v1242 = v1271.toString();
    var v1205 = JAM.call(v1242.replace, v1242, [/\(|\)/g, ""], JAM.policy.p15);
    var v1163 = "<tr><td>" + v1205;
    var v1115 = v1163 + "</td><td>";
    var v1037 = v1115 + tempNumber;
    var v905 = v1037 + "</td><td>";
    var v906 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p11);
    var v671 = v905 + v906;
    var v289 = v671 + "</td></tr>\n";
    JAM.call(v288.write, v288, [v289], JAM.policy.p16);
    i$$10++;
    var v672 = arrayOfItems$$1.length;
    v290 = i$$10 < v672;
  }
  var v291 = outputWindow.document;
  JAM.call(v291.write, v291, ["</tbody></table>\n"], JAM.policy.p9);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v673 = sequence$$17.length;
  var v298 = v673 > 0;
  for (;v298;) {
    maxNum$$1 = sequence$$17.length;
    var v674 = Math.random();
    var v292 = v674 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v292], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v293 = randNum$$1 + 1;
    var v294 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v293, v294], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v675 = tempSeq.length;
    var v297 = v675 == 60;
    if (v297) {
      var v295 = outputWindow.document;
      var v296 = tempSeq + "\n";
      JAM.call(v295.write, v295, [v296], JAM.policy.p16);
      tempSeq = "";
    }
    var v676 = sequence$$17.length;
    v298 = v676 > 0;
  }
  var v299 = outputWindow.document;
  var v300 = tempSeq + "\n";
  JAM.call(v299.write, v299, [v300], JAM.policy.p16);
  return true;
}
function getGeneticCodeString(type$$25) {
  var v907 = type$$25.toLowerCase();
  var v677 = v907 == "standard";
  var v909 = !v677;
  if (v909) {
    var v908 = type$$25.toLowerCase();
    v677 = v908 == "transl_table=1";
  }
  var v302 = v677;
  if (v302) {
    var v1480 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1463 = v1480 + "/ga[tcuy]/=D,";
    var v1446 = v1463 + "/ga[agr]/=E,";
    var v1428 = v1446 + "/[tu][tu][tcuy]/=F,";
    var v1409 = v1428 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1388 = v1409 + "/ca[tcuy]/=H,";
    var v1367 = v1388 + "/a[tu][atcuwmhy]/=I,";
    var v1346 = v1367 + "/aa[agr]/=K,";
    var v1322 = v1346 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1298 = v1322 + "/a[tu]g/=M,";
    var v1272 = v1298 + "/aa[tucy]/=N,";
    var v1243 = v1272 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1206 = v1243 + "/ca[agr]/=Q,";
    var v1164 = v1206 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1116 = v1164 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1038 = v1116 + "/ac[acgturyswkmbdhvn]/=T,";
    var v910 = v1038 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v678 = v910 + "/[tu]gg/=W,";
    var v301 = v678 + "/[tu]a[ctuy]/=Y,";
    return v301 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v679 = type$$25.toLowerCase();
  var v304 = v679 == "transl_table=2";
  if (v304) {
    var v1481 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1464 = v1481 + "/ga[tcuy]/=D,";
    var v1447 = v1464 + "/ga[agr]/=E,";
    var v1429 = v1447 + "/[tu][tu][tcuy]/=F,";
    var v1410 = v1429 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1389 = v1410 + "/ca[tcuy]/=H,";
    var v1368 = v1389 + "/a[tu][tcuy]/=I,";
    var v1347 = v1368 + "/aa[agr]/=K,";
    var v1323 = v1347 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1299 = v1323 + "/a[tu][agr]/=M,";
    var v1273 = v1299 + "/aa[tucy]/=N,";
    var v1244 = v1273 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1207 = v1244 + "/ca[agr]/=Q,";
    var v1165 = v1207 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1117 = v1165 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1039 = v1117 + "/ac[acgturyswkmbdhvn]/=T,";
    var v911 = v1039 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v680 = v911 + "/[tu]g[agr]/=W,";
    var v303 = v680 + "/[tu]a[ctuy]/=Y,";
    return v303 + "/[tu]a[agr]|ag[agr]/=*";
  }
  var v681 = type$$25.toLowerCase();
  var v306 = v681 == "transl_table=3";
  if (v306) {
    var v1482 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1465 = v1482 + "/ga[tcuy]/=D,";
    var v1448 = v1465 + "/ga[agr]/=E,";
    var v1430 = v1448 + "/[tu][tu][tcuy]/=F,";
    var v1411 = v1430 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1390 = v1411 + "/ca[tcuy]/=H,";
    var v1369 = v1390 + "/a[tu][tcuy]/=I,";
    var v1348 = v1369 + "/aa[agr]/=K,";
    var v1324 = v1348 + "/[tu][tu][agr]/=L,";
    var v1300 = v1324 + "/a[tu][agr]/=M,";
    var v1274 = v1300 + "/aa[tucy]/=N,";
    var v1245 = v1274 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1208 = v1245 + "/ca[agr]/=Q,";
    var v1166 = v1208 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1118 = v1166 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1040 = v1118 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v912 = v1040 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v682 = v912 + "/[tu]g[agr]/=W,";
    var v305 = v682 + "/[tu]a[ctuy]/=Y,";
    return v305 + "/[tu]a[agr]/=*";
  }
  var v683 = type$$25.toLowerCase();
  var v308 = v683 == "transl_table=4";
  if (v308) {
    var v1483 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1466 = v1483 + "/ga[tcuy]/=D,";
    var v1449 = v1466 + "/ga[agr]/=E,";
    var v1431 = v1449 + "/[tu][tu][tcuy]/=F,";
    var v1412 = v1431 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1391 = v1412 + "/ca[tcuy]/=H,";
    var v1370 = v1391 + "/a[tu][atcuwmhy]/=I,";
    var v1349 = v1370 + "/aa[agr]/=K,";
    var v1325 = v1349 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1301 = v1325 + "/a[tu]g/=M,";
    var v1275 = v1301 + "/aa[tucy]/=N,";
    var v1246 = v1275 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1209 = v1246 + "/ca[agr]/=Q,";
    var v1167 = v1209 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1119 = v1167 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1041 = v1119 + "/ac[acgturyswkmbdhvn]/=T,";
    var v913 = v1041 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v684 = v913 + "/[tu]g[agr]/=W,";
    var v307 = v684 + "/[tu]a[ctuy]/=Y,";
    return v307 + "/[tu]a[agr]/=*";
  }
  var v685 = type$$25.toLowerCase();
  var v310 = v685 == "transl_table=5";
  if (v310) {
    var v1484 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1467 = v1484 + "/ga[tcuy]/=D,";
    var v1450 = v1467 + "/ga[agr]/=E,";
    var v1432 = v1450 + "/[tu][tu][tcuy]/=F,";
    var v1413 = v1432 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1392 = v1413 + "/ca[tcuy]/=H,";
    var v1371 = v1392 + "/a[tu][tcuy]/=I,";
    var v1350 = v1371 + "/aa[agr]/=K,";
    var v1326 = v1350 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1302 = v1326 + "/a[tu][agr]/=M,";
    var v1276 = v1302 + "/aa[tucy]/=N,";
    var v1247 = v1276 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1210 = v1247 + "/ca[agr]/=Q,";
    var v1168 = v1210 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1120 = v1168 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1042 = v1120 + "/ac[acgturyswkmbdhvn]/=T,";
    var v914 = v1042 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v686 = v914 + "/[tu]g[agr]/=W,";
    var v309 = v686 + "/[tu]a[ctuy]/=Y,";
    return v309 + "/[tu]a[agr]/=*";
  }
  var v687 = type$$25.toLowerCase();
  var v312 = v687 == "transl_table=6";
  if (v312) {
    var v1485 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1468 = v1485 + "/ga[tcuy]/=D,";
    var v1451 = v1468 + "/ga[agr]/=E,";
    var v1433 = v1451 + "/[tu][tu][tcuy]/=F,";
    var v1414 = v1433 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1393 = v1414 + "/ca[tcuy]/=H,";
    var v1372 = v1393 + "/a[tu][atcuwmhy]/=I,";
    var v1351 = v1372 + "/aa[agr]/=K,";
    var v1327 = v1351 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1303 = v1327 + "/a[tu]g/=M,";
    var v1277 = v1303 + "/aa[tucy]/=N,";
    var v1248 = v1277 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1211 = v1248 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v1169 = v1211 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1121 = v1169 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1043 = v1121 + "/ac[acgturyswkmbdhvn]/=T,";
    var v915 = v1043 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v688 = v915 + "/[tu]gg/=W,";
    var v311 = v688 + "/[tu]a[ctuy]/=Y,";
    return v311 + "/[tu]ga/=*";
  }
  var v689 = type$$25.toLowerCase();
  var v314 = v689 == "transl_table=9";
  if (v314) {
    var v1486 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1469 = v1486 + "/ga[tcuy]/=D,";
    var v1452 = v1469 + "/ga[agr]/=E,";
    var v1434 = v1452 + "/[tu][tu][tcuy]/=F,";
    var v1415 = v1434 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1394 = v1415 + "/ca[tcuy]/=H,";
    var v1373 = v1394 + "/a[tu][atcuwmhy]/=I,";
    var v1352 = v1373 + "/aag/=K,";
    var v1328 = v1352 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1304 = v1328 + "/a[tu]g/=M,";
    var v1278 = v1304 + "/aa[atcuwmhy]/=N,";
    var v1249 = v1278 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1212 = v1249 + "/ca[agr]/=Q,";
    var v1170 = v1212 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1122 = v1170 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1044 = v1122 + "/ac[acgturyswkmbdhvn]/=T,";
    var v916 = v1044 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v690 = v916 + "/[tu]g[agr]/=W,";
    var v313 = v690 + "/[tu]a[ctuy]/=Y,";
    return v313 + "/[tu]a[agr]/=*";
  }
  var v691 = type$$25.toLowerCase();
  var v316 = v691 == "transl_table=10";
  if (v316) {
    var v1487 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1470 = v1487 + "/ga[tcuy]/=D,";
    var v1453 = v1470 + "/ga[agr]/=E,";
    var v1435 = v1453 + "/[tu][tu][tcuy]/=F,";
    var v1416 = v1435 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1395 = v1416 + "/ca[tcuy]/=H,";
    var v1374 = v1395 + "/a[tu][atcuwmhy]/=I,";
    var v1353 = v1374 + "/aa[agr]/=K,";
    var v1329 = v1353 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1305 = v1329 + "/a[tu]g/=M,";
    var v1279 = v1305 + "/aa[tucy]/=N,";
    var v1250 = v1279 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1213 = v1250 + "/ca[agr]/=Q,";
    var v1171 = v1213 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1123 = v1171 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1045 = v1123 + "/ac[acgturyswkmbdhvn]/=T,";
    var v917 = v1045 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v692 = v917 + "/[tu]gg/=W,";
    var v315 = v692 + "/[tu]a[ctuy]/=Y,";
    return v315 + "/[tu]a[agr]/=*";
  }
  var v693 = type$$25.toLowerCase();
  var v318 = v693 == "transl_table=11";
  if (v318) {
    var v1488 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1471 = v1488 + "/ga[tcuy]/=D,";
    var v1454 = v1471 + "/ga[agr]/=E,";
    var v1436 = v1454 + "/[tu][tu][tcuy]/=F,";
    var v1417 = v1436 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1396 = v1417 + "/ca[tcuy]/=H,";
    var v1375 = v1396 + "/a[tu][atcuwmhy]/=I,";
    var v1354 = v1375 + "/aa[agr]/=K,";
    var v1330 = v1354 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1306 = v1330 + "/a[tu]g/=M,";
    var v1280 = v1306 + "/aa[tucy]/=N,";
    var v1251 = v1280 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1214 = v1251 + "/ca[agr]/=Q,";
    var v1172 = v1214 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1124 = v1172 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1046 = v1124 + "/ac[acgturyswkmbdhvn]/=T,";
    var v918 = v1046 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v694 = v918 + "/[tu]gg/=W,";
    var v317 = v694 + "/[tu]a[ctuy]/=Y,";
    return v317 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v695 = type$$25.toLowerCase();
  var v320 = v695 == "transl_table=12";
  if (v320) {
    var v1489 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1472 = v1489 + "/ga[tcuy]/=D,";
    var v1455 = v1472 + "/ga[agr]/=E,";
    var v1437 = v1455 + "/[tu][tu][tcuy]/=F,";
    var v1418 = v1437 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1397 = v1418 + "/ca[tcuy]/=H,";
    var v1376 = v1397 + "/a[tu][atcuwmhy]/=I,";
    var v1355 = v1376 + "/aa[agr]/=K,";
    var v1331 = v1355 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1307 = v1331 + "/a[tu]g/=M,";
    var v1281 = v1307 + "/aa[tucy]/=N,";
    var v1252 = v1281 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1215 = v1252 + "/ca[agr]/=Q,";
    var v1173 = v1215 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1125 = v1173 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v1047 = v1125 + "/ac[acgturyswkmbdhvn]/=T,";
    var v919 = v1047 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v696 = v919 + "/[tu]gg/=W,";
    var v319 = v696 + "/[tu]a[ctuy]/=Y,";
    return v319 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v697 = type$$25.toLowerCase();
  var v322 = v697 == "transl_table=13";
  if (v322) {
    var v1490 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1473 = v1490 + "/ga[tcuy]/=D,";
    var v1456 = v1473 + "/ga[agr]/=E,";
    var v1438 = v1456 + "/[tu][tu][tcuy]/=F,";
    var v1419 = v1438 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1398 = v1419 + "/ca[tcuy]/=H,";
    var v1377 = v1398 + "/a[tu][tcuy]/=I,";
    var v1356 = v1377 + "/aa[agr]/=K,";
    var v1332 = v1356 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1308 = v1332 + "/a[tu][agr]/=M,";
    var v1282 = v1308 + "/aa[tucy]/=N,";
    var v1253 = v1282 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1216 = v1253 + "/ca[agr]/=Q,";
    var v1174 = v1216 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1126 = v1174 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1048 = v1126 + "/ac[acgturyswkmbdhvn]/=T,";
    var v920 = v1048 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v698 = v920 + "/[tu]g[agr]/=W,";
    var v321 = v698 + "/[tu]a[ctuy]/=Y,";
    return v321 + "/[tu]a[agr]/=*";
  }
  var v699 = type$$25.toLowerCase();
  var v324 = v699 == "transl_table=14";
  if (v324) {
    var v1491 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1474 = v1491 + "/ga[tcuy]/=D,";
    var v1457 = v1474 + "/ga[agr]/=E,";
    var v1439 = v1457 + "/[tu][tu][tcuy]/=F,";
    var v1420 = v1439 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1399 = v1420 + "/ca[tcuy]/=H,";
    var v1378 = v1399 + "/a[tu][atcuwmhy]/=I,";
    var v1357 = v1378 + "/aag/=K,";
    var v1333 = v1357 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1309 = v1333 + "/a[tu]g/=M,";
    var v1283 = v1309 + "/aa[atcuwmhy]/=N,";
    var v1254 = v1283 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1217 = v1254 + "/ca[agr]/=Q,";
    var v1175 = v1217 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1127 = v1175 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1049 = v1127 + "/ac[acgturyswkmbdhvn]/=T,";
    var v921 = v1049 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v700 = v921 + "/[tu]g[agr]/=W,";
    var v323 = v700 + "/[tu]a[atcuwmhy]/=Y,";
    return v323 + "/[tu]ag/=*";
  }
  var v701 = type$$25.toLowerCase();
  var v326 = v701 == "transl_table=15";
  if (v326) {
    var v1492 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1475 = v1492 + "/ga[tcuy]/=D,";
    var v1458 = v1475 + "/ga[agr]/=E,";
    var v1440 = v1458 + "/[tu][tu][tcuy]/=F,";
    var v1421 = v1440 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1400 = v1421 + "/ca[tcuy]/=H,";
    var v1379 = v1400 + "/a[tu][atcuwmhy]/=I,";
    var v1358 = v1379 + "/aa[agr]/=K,";
    var v1334 = v1358 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1310 = v1334 + "/a[tu]g/=M,";
    var v1284 = v1310 + "/aa[tucy]/=N,";
    var v1255 = v1284 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1218 = v1255 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v1176 = v1218 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1128 = v1176 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1050 = v1128 + "/ac[acgturyswkmbdhvn]/=T,";
    var v922 = v1050 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v702 = v922 + "/[tu]gg/=W,";
    var v325 = v702 + "/[tu]a[ctuy]/=Y,";
    return v325 + "/[tu][agr]a/=*";
  }
  var v703 = type$$25.toLowerCase();
  var v328 = v703 == "transl_table=16";
  if (v328) {
    var v1493 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1476 = v1493 + "/ga[tcuy]/=D,";
    var v1459 = v1476 + "/ga[agr]/=E,";
    var v1441 = v1459 + "/[tu][tu][tcuy]/=F,";
    var v1422 = v1441 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1401 = v1422 + "/ca[tcuy]/=H,";
    var v1380 = v1401 + "/a[tu][atcuwmhy]/=I,";
    var v1359 = v1380 + "/aa[agr]/=K,";
    var v1335 = v1359 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1311 = v1335 + "/a[tu]g/=M,";
    var v1285 = v1311 + "/aa[tucy]/=N,";
    var v1256 = v1285 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1219 = v1256 + "/ca[agr]/=Q,";
    var v1177 = v1219 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1129 = v1177 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1051 = v1129 + "/ac[acgturyswkmbdhvn]/=T,";
    var v923 = v1051 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v704 = v923 + "/[tu]gg/=W,";
    var v327 = v704 + "/[tu]a[ctuy]/=Y,";
    return v327 + "/[tu][agr]a/=*";
  }
  var v705 = type$$25.toLowerCase();
  var v330 = v705 == "transl_table=21";
  if (v330) {
    var v1494 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1477 = v1494 + "/ga[tcuy]/=D,";
    var v1460 = v1477 + "/ga[agr]/=E,";
    var v1442 = v1460 + "/[tu][tu][tcuy]/=F,";
    var v1423 = v1442 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1402 = v1423 + "/ca[tcuy]/=H,";
    var v1381 = v1402 + "/a[tu][tcuy]/=I,";
    var v1360 = v1381 + "/aag/=K,";
    var v1336 = v1360 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1312 = v1336 + "/a[tu][agr]/=M,";
    var v1286 = v1312 + "/aa[atcuwmhy]/=N,";
    var v1257 = v1286 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1220 = v1257 + "/ca[agr]/=Q,";
    var v1178 = v1220 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1130 = v1178 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1052 = v1130 + "/ac[acgturyswkmbdhvn]/=T,";
    var v924 = v1052 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v706 = v924 + "/[tu]g[agr]/=W,";
    var v329 = v706 + "/[tu]a[ctuy]/=Y,";
    return v329 + "/[tu]a[agr]/=*";
  }
  var v707 = type$$25.toLowerCase();
  var v332 = v707 == "transl_table=22";
  if (v332) {
    var v1495 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1478 = v1495 + "/ga[tcuy]/=D,";
    var v1461 = v1478 + "/ga[agr]/=E,";
    var v1443 = v1461 + "/[tu][tu][tcuy]/=F,";
    var v1424 = v1443 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1403 = v1424 + "/ca[tcuy]/=H,";
    var v1382 = v1403 + "/a[tu][atcuwmhy]/=I,";
    var v1361 = v1382 + "/aa[agr]/=K,";
    var v1337 = v1361 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1313 = v1337 + "/a[tu]g/=M,";
    var v1287 = v1313 + "/aa[tucy]/=N,";
    var v1258 = v1287 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1221 = v1258 + "/ca[agr]/=Q,";
    var v1179 = v1221 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1131 = v1179 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v1053 = v1131 + "/ac[acgturyswkmbdhvn]/=T,";
    var v925 = v1053 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v708 = v925 + "/[tu]gg/=W,";
    var v331 = v708 + "/[tu]a[ctuy]/=Y,";
    return v331 + "/[tu][agcrsmv]a/=*";
  }
  var v709 = type$$25.toLowerCase();
  var v334 = v709 == "transl_table=23";
  if (v334) {
    var v1496 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1479 = v1496 + "/ga[tcuy]/=D,";
    var v1462 = v1479 + "/ga[agr]/=E,";
    var v1444 = v1462 + "/[tu][tu][tcuy]/=F,";
    var v1425 = v1444 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1404 = v1425 + "/ca[tcuy]/=H,";
    var v1383 = v1404 + "/a[tu][atcuwmhy]/=I,";
    var v1362 = v1383 + "/aa[agr]/=K,";
    var v1338 = v1362 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1314 = v1338 + "/a[tu]g/=M,";
    var v1288 = v1314 + "/aa[tucy]/=N,";
    var v1259 = v1288 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1222 = v1259 + "/ca[agr]/=Q,";
    var v1180 = v1222 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1132 = v1180 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1054 = v1132 + "/ac[acgturyswkmbdhvn]/=T,";
    var v926 = v1054 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v710 = v926 + "/[tu]gg/=W,";
    var v333 = v710 + "/[tu]a[ctuy]/=Y,";
    return v333 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*";
  }
  return true;
}
function mutateForDigest() {
  var theDocument = document;
  var newDna = "";
  var mutatedDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E4;
  var TOPOLOGY = "linear";
  var v711 = testScript();
  var v335 = v711 == false;
  if (v335) {
    return;
  }
  var restrictionSiteCollection;
  var mutatedRestrictionSitesCollection;
  var v1223 = theDocument.forms;
  var v1181 = v1223[0];
  var v1133 = v1181.elements;
  var v1055 = v1133[7];
  var v927 = v1055.options;
  var v1224 = theDocument.forms;
  var v1182 = v1224[0];
  var v1134 = v1182.elements;
  var v1056 = v1134[7];
  var v928 = v1056.selectedIndex;
  var v712 = v927[v928];
  var v336 = v712.value;
  var geneticCode = getGeneticCodeString(v336);
  var v1183 = theDocument.forms;
  var v1135 = v1183[0];
  var v1057 = v1135.elements;
  var v929 = v1057[4];
  var v713 = v929.options;
  var v1184 = theDocument.forms;
  var v1136 = v1184[0];
  var v1058 = v1136.elements;
  var v930 = v1058[4];
  var v714 = v930.selectedIndex;
  var v337 = v713[v714];
  var restrictionSites = v337.value;
  var v1225 = theDocument.forms;
  var v1185 = v1225[0];
  var v1137 = v1185.elements;
  var v1059 = v1137[0];
  var v931 = checkFormElement(v1059);
  var v715 = v931 == false;
  var v933 = !v715;
  if (v933) {
    var v1260 = theDocument.forms;
    var v1226 = v1260[0];
    var v1186 = v1226.elements;
    var v1138 = v1186[0];
    var v1060 = v1138.value;
    var v932 = checkSequenceLength(v1060, maxInput$$3);
    v715 = v932 == false;
  }
  var v338 = v715;
  if (v338) {
    return;
  }
  geneticCode = JAM.call(geneticCode.split, geneticCode, [/,/], JAM.policy.p17);
  var v716 = checkGeneticCode(geneticCode);
  var v339 = v716 == false;
  if (v339) {
    return;
  }
  restrictionSites = JAM.call(restrictionSites.split, restrictionSites, [/,/], JAM.policy.p17);
  var v717 = checkRestPatterns(restrictionSites);
  var v340 = v717 == false;
  if (v340) {
    return;
  }
  var mutatedRestrictionSites = buildMutatedRestrictionSites(restrictionSites);
  openWindow();
  openPre();
  var v341 = outputWindow.document;
  var v718 = '<span class="mutated_sequence">' + "sequence and translations for mutated version";
  var v342 = v718 + "</span>\n";
  JAM.call(v341.write, v341, [v342], JAM.policy.p16);
  var v343 = outputWindow.document;
  var v719 = '<span class="current_sequence">' + "sequence and translations for non-mutated version";
  var v344 = v719 + "</span>\n";
  JAM.call(v343.write, v343, [v344], JAM.policy.p16);
  var v345 = outputWindow.document;
  JAM.call(v345.write, v345, ["\n"], JAM.policy.p9);
  var v1139 = theDocument.forms;
  var v1061 = v1139[0];
  var v934 = v1061.elements;
  var v720 = v934[0];
  var v346 = v720.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v346);
  var i$$11 = 0;
  var v721 = arrayOfFasta$$1.length;
  var v354 = i$$11 < v721;
  for (;v354;) {
    var v347 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v347);
    var v348 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v348);
    newDna = removeNonDna(newDna);
    var v349 = outputWindow.document;
    var v350 = getInfoFromTitleAndSequenceAndTopology(title$$9, newDna, TOPOLOGY);
    JAM.call(v349.write, v349, [v350], JAM.policy.p16);
    restrictionSiteCollection = findRestrictionSites(newDna, restrictionSites, TOPOLOGY);
    restrictionSiteCollection.sortRestrictionSites();
    mutatedRestrictionSiteCollection = findRestrictionSites(newDna, mutatedRestrictionSites, TOPOLOGY);
    mutatedRestrictionSiteCollection = removeNormalMatchesFromMutantSites(restrictionSiteCollection);
    mutatedRestrictionSiteCollection = removeOverlappingMatchesFromMutantSites();
    mutatedDna = buildMutatedDna(newDna);
    var v1227 = theDocument.forms;
    var v1187 = v1227[0];
    var v1140 = v1187.elements;
    var v1062 = v1140[5];
    var v935 = v1062.options;
    var v1228 = theDocument.forms;
    var v1188 = v1228[0];
    var v1141 = v1188.elements;
    var v1063 = v1141[5];
    var v936 = v1063.selectedIndex;
    var v722 = v935[v936];
    var v351 = v722.value;
    var v1229 = theDocument.forms;
    var v1189 = v1229[0];
    var v1142 = v1189.elements;
    var v1064 = v1142[6];
    var v937 = v1064.options;
    var v1230 = theDocument.forms;
    var v1190 = v1230[0];
    var v1143 = v1190.elements;
    var v1065 = v1143[6];
    var v938 = v1065.selectedIndex;
    var v723 = v937[v938];
    var v352 = v723.value;
    layoutRestTrans(newDna, mutatedDna, geneticCode, restrictionSiteCollection, v351, v352);
    var v353 = outputWindow.document;
    JAM.call(v353.write, v353, ["\n\n"], JAM.policy.p9);
    i$$11++;
    var v724 = arrayOfFasta$$1.length;
    v354 = i$$11 < v724;
  }
  closePre();
  closeWindow();
  return;
}
function layoutRestTrans(dnaSequence$$3, mutatedDnaSequence, geneticCode$$1, restrictionSiteCollection$$1, basesPerLine, readingFrame) {
  var mutatedRestrictionSiteCollection$$1 = mutatedRestrictionSiteCollection;
  basesPerLine = parseInt(basesPerLine);
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var spaceString = "                                                                                                                                  ";
  var textLayout = new TextLayout;
  var v725 = readingFrame == "3";
  var v939 = !v725;
  if (v939) {
    v725 = readingFrame == "all_three";
  }
  var v357 = v725;
  if (v357) {
    var translationMut = new TranslationComponent;
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    var v1066 = dnaSequence$$3.length;
    var v940 = JAM.call(mutatedDnaSequence.substring, mutatedDnaSequence, [2, v1066], JAM.policy.p13);
    var v726 = translate(v940, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v355 = "  " + v726;
    JAM.call(translationMut.setCharacters, translationMut, [v355], JAM.policy.p16);
    JAM.call(textLayout.addComponent, textLayout, [translationMut], JAM.policy.p16);
    var translation = new TranslationComponent;
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    var v1067 = dnaSequence$$3.length;
    var v941 = JAM.call(dnaSequence$$3.substring, dnaSequence$$3, [2, v1067], JAM.policy.p13);
    var v727 = translate(v941, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v356 = "  " + v727;
    JAM.call(translation.setCharacters, translation, [v356], JAM.policy.p16);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p16);
  }
  var v728 = readingFrame == "2";
  var v942 = !v728;
  if (v942) {
    v728 = readingFrame == "all_three";
  }
  var v360 = v728;
  if (v360) {
    translationMut = new TranslationComponent;
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    var v1068 = dnaSequence$$3.length;
    var v943 = JAM.call(mutatedDnaSequence.substring, mutatedDnaSequence, [1, v1068], JAM.policy.p13);
    var v729 = translate(v943, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v358 = " " + v729;
    JAM.call(translationMut.setCharacters, translationMut, [v358], JAM.policy.p16);
    JAM.call(textLayout.addComponent, textLayout, [translationMut], JAM.policy.p16);
    translation = new TranslationComponent;
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    var v1069 = dnaSequence$$3.length;
    var v944 = JAM.call(dnaSequence$$3.substring, dnaSequence$$3, [1, v1069], JAM.policy.p13);
    var v730 = translate(v944, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v359 = " " + v730;
    JAM.call(translation.setCharacters, translation, [v359], JAM.policy.p16);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p16);
  }
  var v731 = readingFrame == "1";
  var v945 = !v731;
  if (v945) {
    v731 = readingFrame == "all_three";
  }
  var v363 = v731;
  if (v363) {
    translationMut = new TranslationComponent;
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    var v361 = translate(mutatedDnaSequence, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    JAM.call(translationMut.setCharacters, translationMut, [v361], JAM.policy.p16);
    JAM.call(textLayout.addComponent, textLayout, [translationMut], JAM.policy.p16);
    translation = new TranslationComponent;
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    var v362 = translate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    JAM.call(translation.setCharacters, translation, [v362], JAM.policy.p16);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p16);
  }
  var v366 = readingFrame == "uppercase";
  if (v366) {
    translationMut = new UppercaseTranslationComponent;
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    var v364 = uppercaseTranslate(mutatedDnaSequence, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    JAM.call(translationMut.setCharacters, translationMut, [v364], JAM.policy.p16);
    JAM.call(textLayout.addComponent, textLayout, [translationMut], JAM.policy.p16);
    translation = new UppercaseTranslationComponent;
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    var v365 = uppercaseTranslate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    JAM.call(translation.setCharacters, translation, [v365], JAM.policy.p16);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p16);
  }
  var dnaMut = new DnaComponent;
  dnaMut.spanStart = '<span class="mutated_sequence">';
  dnaMut.spanEnd = "</span>";
  JAM.call(dnaMut.setCharacters, dnaMut, [mutatedDnaSequence], JAM.policy.p16);
  JAM.call(textLayout.addComponent, textLayout, [dnaMut], JAM.policy.p16);
  var dna = new DnaComponent;
  dna.spanStart = '<span class="current_sequence">';
  dna.spanEnd = "</span>";
  JAM.call(dna.setCharacters, dna, [dnaSequence$$3], JAM.policy.p16);
  JAM.call(textLayout.addComponent, textLayout, [dna], JAM.policy.p16);
  var sitesInRange = new Array;
  var sitesInRangeMut = new Array;
  var i$$12 = 0;
  var v732 = dnaSequence$$3.length;
  var v376 = i$$12 < v732;
  for (;v376;) {
    var v367 = i$$12 + basesPerLine;
    sitesInRange = JAM.call(restrictionSiteCollection$$1.getSitesInRange, restrictionSiteCollection$$1, [i$$12, v367], JAM.policy.p15);
    var v368 = i$$12 + basesPerLine;
    sitesInRangeMut = JAM.call(mutatedRestrictionSiteCollection$$1.getSitesInRange, mutatedRestrictionSiteCollection$$1, [i$$12, v368], JAM.policy.p15);
    sitesInRange.reverse();
    sitesInRangeMut.reverse();
    var j$$10 = 0;
    var v733 = sitesInRangeMut.length;
    var v371 = j$$10 < v733;
    for (;v371;) {
      var v369 = outputWindow.document;
      var v1261 = sitesInRangeMut[j$$10];
      var v1231 = v1261.position;
      var v1191 = v1231 - i$$12;
      var v1144 = v1191 + 9;
      var v1070 = JAM.call(spaceString.substring, spaceString, [0, v1144], JAM.policy.p13);
      var v946 = v1070 + '<span class="mutated_sequence">';
      var v1071 = sitesInRangeMut[j$$10];
      var v947 = v1071.label;
      var v734 = v946 + v947;
      var v370 = v734 + "</span>\n";
      JAM.call(v369.write, v369, [v370], JAM.policy.p16);
      j$$10++;
      var v735 = sitesInRangeMut.length;
      v371 = j$$10 < v735;
    }
    j$$10 = 0;
    var v736 = sitesInRange.length;
    var v374 = j$$10 < v736;
    for (;v374;) {
      var v372 = outputWindow.document;
      var v1262 = sitesInRange[j$$10];
      var v1232 = v1262.position;
      var v1192 = v1232 - i$$12;
      var v1145 = v1192 + 9;
      var v1072 = JAM.call(spaceString.substring, spaceString, [0, v1145], JAM.policy.p13);
      var v948 = v1072 + '<span class="current_sequence">';
      var v1073 = sitesInRange[j$$10];
      var v949 = v1073.label;
      var v737 = v948 + v949;
      var v373 = v737 + "</span>\n";
      JAM.call(v372.write, v372, [v373], JAM.policy.p16);
      j$$10++;
      var v738 = sitesInRange.length;
      v374 = j$$10 < v738;
    }
    var v375 = i$$12 + basesPerLine;
    JAM.call(textLayout.writeLayout, textLayout, [i$$12, v375], JAM.policy.p15);
    i$$12 = i$$12 + basesPerLine;
    var v739 = dnaSequence$$3.length;
    v376 = i$$12 < v739;
  }
  return;
}
function translate(dnaSequence$$4, geneticCodeMatchExp$$3, geneticCodeMatchResult$$3) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    var v377 = " " + p1$$2;
    return v377 + " ";
  }
  var v950 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v740 = v950.length;
  var v378 = v740 < 3;
  if (v378) {
    return "";
  }
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/(...)/g, v2], JAM.policy.p15);
  var i$$13 = 0;
  var v741 = geneticCodeMatchExp$$3.length;
  var v381 = i$$13 < v741;
  for (;v381;) {
    var v379 = geneticCodeMatchExp$$3[i$$13];
    var v380 = geneticCodeMatchResult$$3[i$$13];
    dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [v379, v380], JAM.policy.p27);
    i$$13++;
    var v742 = geneticCodeMatchExp$$3.length;
    v381 = i$$13 < v742;
  }
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/\S{3}/g, "X"], JAM.policy.p15);
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/\s\S{1,2}$/, ""], JAM.policy.p15);
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/^\s/, ""], JAM.policy.p15);
  return dnaSequence$$4;
}
function uppercaseTranslate(dnaSequence$$5, geneticCodeMatchExp$$4, geneticCodeMatchResult$$4) {
  function v3(str$$9, p1$$3, p2, p3, p4, p5, p6, offset$$11, s$$5) {
    var v1193 = " " + p1$$3;
    var v1146 = v1193 + p3;
    var v1074 = v1146 + p5;
    var v951 = v1074 + " ";
    var v743 = v951 + p2;
    var v382 = v743 + p4;
    return v382 + p6;
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/[a-z]/g, " "], JAM.policy.p15);
  var v952 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v744 = v952.length;
  var v383 = v744 < 3;
  if (v383) {
    return "";
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/([A-Z])(\s*)([A-Z])(\s*)([A-Z])(\s*)/g, v3], JAM.policy.p15);
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/\s\S{1,2}\s/g, ""], JAM.policy.p15);
  var i$$14 = 0;
  var v745 = geneticCodeMatchExp$$4.length;
  var v386 = i$$14 < v745;
  for (;v386;) {
    var v384 = geneticCodeMatchExp$$4[i$$14];
    var v385 = geneticCodeMatchResult$$4[i$$14];
    dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [v384, v385], JAM.policy.p27);
    i$$14++;
    var v746 = geneticCodeMatchExp$$4.length;
    v386 = i$$14 < v746;
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/\S{3}/g, "X"], JAM.policy.p15);
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/^\s/, ""], JAM.policy.p15);
  return dnaSequence$$5;
}
function buildMutatedRestrictionSites(restrictionSites$$1) {
  var mutatedRestrictionSites$$1 = new Array;
  var i$$15 = 0;
  var v747 = restrictionSites$$1.length;
  var v408 = i$$15 < v747;
  for (;v408;) {
    var v1075 = restrictionSites$$1[i$$15];
    var v953 = JAM.call(v1075.match, v1075, [/\/.+\//], JAM.policy.p17);
    var v748 = v953.toString();
    var v387 = JAM.call(v748.replace, v748, [/[\/\\]/g, ""], JAM.policy.p15);
    var site = v387.toLowerCase();
    var v749 = restrictionSites$$1[i$$15];
    var v388 = JAM.call(v749.match, v749, [/\([^\(]+\)/], JAM.policy.p17);
    var label = v388.toString();
    var v1076 = restrictionSites$$1[i$$15];
    var v954 = JAM.call(v1076.match, v1076, [/\)\D*\d+/], JAM.policy.p17);
    var v750 = v954.toString();
    var v389 = JAM.call(v750.replace, v750, [/\)\D*/, ""], JAM.policy.p15);
    var cutDistance$$1 = parseFloat(v389);
    var singleDegenSites = new Array;
    var doubleDegenSites = new Array;
    var j$$11 = 0;
    var v751 = site.length;
    var v394 = j$$11 < v751;
    for (;v394;) {
      var v955 = JAM.call(site.charAt, site, [j$$11], JAM.policy.p16);
      var v752 = v955 != "n";
      if (v752) {
        var v956 = JAM.call(site.charAt, site, [j$$11], JAM.policy.p16);
        v752 = v956 != "N";
      }
      var v393 = v752;
      if (v393) {
        var pre = JAM.call(site.substring, site, [0, j$$11], JAM.policy.p13);
        var v390 = j$$11 + 1;
        var v391 = site.length;
        var post = JAM.call(site.substring, site, [v390, v391], JAM.policy.p27);
        var v392 = pre + "N";
        var newSite = v392 + post;
        JAM.call(singleDegenSites.push, singleDegenSites, [newSite], JAM.policy.p16);
      }
      j$$11++;
      var v753 = site.length;
      v394 = j$$11 < v753;
    }
    var v754 = site.length;
    var v403 = v754 > 6;
    if (v403) {
      j$$11 = 0;
      var v755 = singleDegenSites.length;
      var v402 = j$$11 < v755;
      for (;v402;) {
        var k$$3 = 0;
        var v957 = singleDegenSites[j$$11];
        var v756 = v957.length;
        var v401 = k$$3 < v756;
        for (;v401;) {
          var v1077 = singleDegenSites[j$$11];
          var v958 = JAM.call(v1077.charAt, v1077, [k$$3], JAM.policy.p16);
          var v757 = v958 != "n";
          if (v757) {
            var v1078 = singleDegenSites[j$$11];
            var v959 = JAM.call(v1078.charAt, v1078, [k$$3], JAM.policy.p16);
            v757 = v959 != "N";
          }
          var v400 = v757;
          if (v400) {
            var v395 = singleDegenSites[j$$11];
            pre = JAM.call(v395.substring, v395, [0, k$$3], JAM.policy.p13);
            var v396 = singleDegenSites[j$$11];
            var v397 = k$$3 + 1;
            var v758 = singleDegenSites[j$$11];
            var v398 = v758.length;
            post = JAM.call(v396.substring, v396, [v397, v398], JAM.policy.p15);
            var v399 = pre + "N";
            newSite = v399 + post;
            JAM.call(doubleDegenSites.push, doubleDegenSites, [newSite], JAM.policy.p16);
          }
          k$$3++;
          var v960 = singleDegenSites[j$$11];
          var v759 = v960.length;
          v401 = k$$3 < v759;
        }
        j$$11++;
        var v760 = singleDegenSites.length;
        v402 = j$$11 < v760;
      }
    }
    j$$11 = 0;
    var v761 = singleDegenSites.length;
    var v405 = j$$11 < v761;
    for (;v405;) {
      var v1194 = singleDegenSites[j$$11];
      var v1147 = "/" + v1194;
      var v1079 = v1147 + "/";
      var v961 = v1079 + " ";
      var v762 = v961 + label;
      var v404 = v762 + cutDistance$$1;
      JAM.call(mutatedRestrictionSites$$1.push, mutatedRestrictionSites$$1, [v404], JAM.policy.p16);
      j$$11++;
      var v763 = singleDegenSites.length;
      v405 = j$$11 < v763;
    }
    j$$11 = 0;
    var v764 = doubleDegenSites.length;
    var v407 = j$$11 < v764;
    for (;v407;) {
      var v1195 = doubleDegenSites[j$$11];
      var v1148 = "/" + v1195;
      var v1080 = v1148 + "/";
      var v962 = v1080 + " ";
      var v765 = v962 + label;
      var v406 = v765 + cutDistance$$1;
      JAM.call(mutatedRestrictionSites$$1.push, mutatedRestrictionSites$$1, [v406], JAM.policy.p16);
      j$$11++;
      var v766 = doubleDegenSites.length;
      v407 = j$$11 < v766;
    }
    i$$15++;
    var v767 = restrictionSites$$1.length;
    v408 = i$$15 < v767;
  }
  return mutatedRestrictionSites$$1;
}
function removeNormalMatchesFromMutantSites(restrictionSiteCollection$$2) {
  var mutatedRestrictionSiteCollection$$2 = mutatedRestrictionSiteCollection;
  var originalMutatedRestrictionSites = new Array;
  var i$$16 = 0;
  var v963 = mutatedRestrictionSiteCollection$$2.restrictionSites;
  var v768 = v963.length;
  var v413 = i$$16 < v768;
  for (;v413;) {
    var v409 = mutatedRestrictionSiteCollection$$2.restrictionSites;
    var mutatedSite = v409[i$$16];
    var isOriginal = true;
    var j$$12 = 0;
    var v964 = restrictionSiteCollection$$2.restrictionSites;
    var v769 = v964.length;
    var v412 = j$$12 < v769;
    for (;v412;) {
      var v410 = restrictionSiteCollection$$2.restrictionSites;
      var normalSite = v410[j$$12];
      var v770 = normalSite.position;
      var v771 = mutatedSite.position;
      var v411 = v770 == v771;
      if (v411) {
        isOriginal = false;
        break;
      }
      j$$12++;
      var v965 = restrictionSiteCollection$$2.restrictionSites;
      var v772 = v965.length;
      v412 = j$$12 < v772;
    }
    if (isOriginal) {
      JAM.call(originalMutatedRestrictionSites.push, originalMutatedRestrictionSites, [mutatedSite], JAM.policy.p16);
    }
    i$$16++;
    var v966 = mutatedRestrictionSiteCollection$$2.restrictionSites;
    var v773 = v966.length;
    v413 = i$$16 < v773;
  }
  mutatedRestrictionSiteCollection$$2.restrictionSites = originalMutatedRestrictionSites;
  return mutatedRestrictionSiteCollection$$2;
}
function removeOverlappingMatchesFromMutantSites() {
  var mutatedRestrictionSiteCollection$$3 = mutatedRestrictionSiteCollection;
  var originalMutatedRestrictionSites$$1 = new Array;
  var i$$17 = 0;
  var v967 = mutatedRestrictionSiteCollection$$3.restrictionSites;
  var v774 = v967.length;
  var v425 = i$$17 < v774;
  for (;v425;) {
    var v414 = mutatedRestrictionSiteCollection$$3.restrictionSites;
    var mutatedSite$$1 = v414[i$$17];
    var isOriginal$$1 = true;
    var j$$13 = 0;
    var v775 = originalMutatedRestrictionSites$$1.length;
    var v424 = j$$13 < v775;
    for (;v424;) {
      var mutatedSiteJ = originalMutatedRestrictionSites$$1[j$$13];
      var v968 = mutatedSiteJ.position;
      var v969 = mutatedSiteJ.cutDistance;
      var v776 = v968 + v969;
      var v970 = mutatedSiteJ.iupacPattern;
      var v777 = v970.length;
      var v415 = v776 - v777;
      var startRangeJ = v415 - 2;
      var v971 = mutatedSiteJ.position;
      var v972 = mutatedSiteJ.cutDistance;
      var v778 = v971 + v972;
      var v416 = v778 - 1;
      var endRangeJ = v416 + 2;
      var v779 = mutatedSite$$1.position;
      var v780 = mutatedSite$$1.cutDistance;
      var v417 = v779 + v780;
      var v781 = mutatedSite$$1.iupacPattern;
      var v418 = v781.length;
      var startRange = v417 - v418;
      var v782 = mutatedSite$$1.position;
      var v783 = mutatedSite$$1.cutDistance;
      var v419 = v782 + v783;
      var endRange = v419 - 1;
      var v784 = startRange <= startRangeJ;
      if (v784) {
        v784 = endRange >= startRangeJ;
      }
      var v420 = v784;
      if (v420) {
        isOriginal$$1 = false;
        break;
      }
      var v785 = startRange <= endRangeJ;
      if (v785) {
        v785 = endRange >= endRangeJ;
      }
      var v421 = v785;
      if (v421) {
        isOriginal$$1 = false;
        break;
      }
      var v786 = startRange <= startRangeJ;
      if (v786) {
        v786 = endRange >= endRangeJ;
      }
      var v422 = v786;
      if (v422) {
        isOriginal$$1 = false;
        break;
      }
      var v787 = startRange >= startRangeJ;
      if (v787) {
        v787 = endRange <= endRangeJ;
      }
      var v423 = v787;
      if (v423) {
        isOriginal$$1 = false;
        break;
      }
      j$$13++;
      var v788 = originalMutatedRestrictionSites$$1.length;
      v424 = j$$13 < v788;
    }
    if (isOriginal$$1) {
      JAM.call(originalMutatedRestrictionSites$$1.push, originalMutatedRestrictionSites$$1, [mutatedSite$$1], JAM.policy.p16);
    }
    i$$17++;
    var v973 = mutatedRestrictionSiteCollection$$3.restrictionSites;
    var v789 = v973.length;
    v425 = i$$17 < v789;
  }
  mutatedRestrictionSiteCollection$$3.restrictionSites = originalMutatedRestrictionSites$$1;
  return mutatedRestrictionSiteCollection$$3;
}
function buildMutatedDna(originalDna) {
  var mutatedRestrictionSiteCollection$$4 = mutatedRestrictionSiteCollection;
  var mutatedDna$$1 = originalDna;
  var mutatedDnaArray = new Array;
  mutatedRestrictionSiteCollection$$4.sortRestrictionSites();
  var v426 = mutatedRestrictionSiteCollection$$4.restrictionSites;
  v426.reverse();
  var i$$18 = 0;
  var v974 = mutatedRestrictionSiteCollection$$4.restrictionSites;
  var v790 = v974.length;
  var v433 = i$$18 < v790;
  for (;v433;) {
    var v427 = mutatedRestrictionSiteCollection$$4.restrictionSites;
    var mutatedSite$$2 = v427[i$$18];
    var v791 = mutatedSite$$2.position;
    var v792 = mutatedSite$$2.cutDistance;
    var v428 = v791 + v792;
    var v793 = mutatedSite$$2.iupacPattern;
    var v429 = v793.length;
    var siteStart = v428 - v429;
    var v794 = mutatedSite$$2.position;
    var v795 = mutatedSite$$2.cutDistance;
    var v430 = v794 + v795;
    var siteEnd = v430 - 1;
    var siteLength = siteEnd - siteStart;
    var v796 = JAM.call(mutatedDna$$1.substring, mutatedDna$$1, [0, siteStart], JAM.policy.p13);
    var v1081 = siteEnd + 1;
    var v975 = JAM.call(mutatedDna$$1.substring, mutatedDna$$1, [siteStart, v1081], JAM.policy.p27);
    var v976 = mutatedSite$$2.iupacPattern;
    var v977 = mutatedSite$$2.label;
    var v797 = replaceMutatedDnaSegment(v975, v976, v977);
    var v431 = v796 + v797;
    JAM.call(mutatedDnaArray.push, mutatedDnaArray, [v431], JAM.policy.p16);
    var v798 = siteEnd + 1;
    var v799 = mutatedDna$$1.length;
    var v432 = JAM.call(mutatedDna$$1.substring, mutatedDna$$1, [v798, v799], JAM.policy.p27);
    JAM.call(mutatedDnaArray.push, mutatedDnaArray, [v432], JAM.policy.p16);
    mutatedDna$$1 = JAM.call(mutatedDnaArray.join, mutatedDnaArray, [""], JAM.policy.p9);
    mutatedDnaArray = new Array;
    i$$18++;
    var v978 = mutatedRestrictionSiteCollection$$4.restrictionSites;
    var v800 = v978.length;
    v433 = i$$18 < v800;
  }
  var v434 = mutatedRestrictionSiteCollection$$4.restrictionSites;
  v434.reverse();
  return mutatedDna$$1;
}
function replaceMutatedDnaSegment(originalSegment, iupacPattern, label$$1) {
  var newSegment = "";
  var genericSite;
  var v801 = JAM.call(label$$1.match, label$$1, [/[a-z\|]+\s\d+/], JAM.policy.p17);
  var v435 = v801.toString();
  genericSite = JAM.call(v435.replace, v435, [/\||\s\d+/g, ""], JAM.policy.p15);
  var isUpperCase;
  var charToAdd;
  var i$$19 = 0;
  var v802 = originalSegment.length;
  var v441 = i$$19 < v802;
  for (;v441;) {
    var v1082 = JAM.call(originalSegment.charAt, originalSegment, [i$$19], JAM.policy.p16);
    var v979 = v1082.toString();
    var v803 = JAM.call(v979.search, v979, [/[A-Z]/], JAM.policy.p17);
    var v436 = v803 == -1;
    if (v436) {
      isUpperCase = false;
    } else {
      isUpperCase = true;
    }
    var v804 = JAM.call(originalSegment.charAt, originalSegment, [i$$19], JAM.policy.p16);
    var v805 = JAM.call(genericSite.charAt, genericSite, [i$$19], JAM.policy.p16);
    var v438 = v804 == v805;
    if (v438) {
      charToAdd = JAM.call(originalSegment.charAt, originalSegment, [i$$19], JAM.policy.p17);
    } else {
      var v806 = JAM.call(iupacPattern.charAt, iupacPattern, [i$$19], JAM.policy.p16);
      var v437 = v806 == "N";
      if (v437) {
        charToAdd = JAM.call(genericSite.charAt, genericSite, [i$$19], JAM.policy.p17);
      } else {
        charToAdd = JAM.call(originalSegment.charAt, originalSegment, [i$$19], JAM.policy.p17);
      }
    }
    if (isUpperCase) {
      var v807 = charToAdd.toString();
      var v439 = v807.toUpperCase();
      newSegment = newSegment + v439;
    } else {
      var v808 = charToAdd.toString();
      var v440 = v808.toLowerCase();
      newSegment = newSegment + v440;
    }
    i$$19++;
    var v809 = originalSegment.length;
    v441 = i$$19 < v809;
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
  var tempArray = new Array;
  var restrictionSiteCollection$$3 = new RestrictionSiteCollection;
  var v445 = dnaConformation$$1 == "circular";
  if (v445) {
    var v442 = JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p13);
    shiftValue$$1 = v442.length;
    var v1083 = sequence$$18.length;
    var v980 = v1083 - lookAhead$$1;
    var v981 = sequence$$18.length;
    var v810 = JAM.call(sequence$$18.substring, sequence$$18, [v980, v981], JAM.policy.p27);
    var v443 = v810 + sequence$$18;
    var v444 = JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p13);
    sequence$$18 = v443 + v444;
    lowerLimit$$1 = 0 + shiftValue$$1;
    upperLimit$$1 = upperLimit$$1 + shiftValue$$1;
  }
  var i$$20 = 0;
  var v811 = arrayOfItems$$2.length;
  var v457 = i$$20 < v811;
  for (;v457;) {
    var v982 = arrayOfItems$$2[i$$20];
    var v812 = JAM.call(v982.match, v982, [/\/.+\//], JAM.policy.p17);
    var v446 = v812.toString();
    var iupacPattern$$1 = JAM.call(v446.replace, v446, [/[\/\\]/g, ""], JAM.policy.p15);
    var v983 = convertDegenerates(iupacPattern$$1);
    var v813 = "/" + v983;
    var v447 = v813 + "/";
    matchExp$$2 = v447 + "gi";
    matchPosition$$1 = 0;
    if (JAM.isEval(eval)) {
      matchExp$$2 = eval("introspect(JAM.policy.pFull) { " + matchExp$$2 + " }");
    } else {
      matchExp$$2 = JAM.call(eval, null, [matchExp$$2]);
    }
    var v1084 = arrayOfItems$$2[i$$20];
    var v984 = JAM.call(v1084.match, v1084, [/\)\D*\d+/], JAM.policy.p17);
    var v814 = v984.toString();
    var v448 = JAM.call(v814.replace, v814, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance$$2 = parseFloat(v448);
    var v985 = arrayOfItems$$2[i$$20];
    var v815 = JAM.call(v985.match, v985, [/\([^\(]+\)/], JAM.policy.p17);
    var v449 = v815.toString();
    label$$2 = JAM.call(v449.replace, v449, [/\(|\)/g, ""], JAM.policy.p15);
    var v453 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [sequence$$18], JAM.policy.p16);
    for (;v453;) {
      matchPosition$$1 = matchExp$$2.lastIndex;
      matchPosition$$1 = matchPosition$$1 - cutDistance$$2;
      var v816 = matchPosition$$1 >= lowerLimit$$1;
      if (v816) {
        v816 = matchPosition$$1 < upperLimit$$1;
      }
      var v451 = v816;
      if (v451) {
        timesFound$$1++;
        var v986 = label$$2 + " ";
        var v1085 = matchPosition$$1 - shiftValue$$1;
        var v987 = v1085 + 1;
        var v817 = v986 + v987;
        var v818 = matchPosition$$1 - shiftValue$$1;
        var v450 = new RestrictionSite(v817, v818, cutDistance$$2, iupacPattern$$1);
        JAM.call(tempArray.push, tempArray, [v450], JAM.policy.p16);
      }
      var v819 = matchExp$$2.lastIndex;
      var v988 = RegExp.lastMatch;
      var v820 = v988.length;
      var v452 = v819 - v820;
      matchExp$$2.lastIndex = v452 + 1;
      v453 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [sequence$$18], JAM.policy.p16);
    }
    var j$$14 = 0;
    var v821 = tempArray.length;
    var v456 = j$$14 < v821;
    for (;v456;) {
      var v454 = tempArray[j$$14];
      v454.numberOfCuts = timesFound$$1;
      var v455 = tempArray[j$$14];
      JAM.call(restrictionSiteCollection$$3.addRestrictionSite, restrictionSiteCollection$$3, [v455], JAM.policy.p16);
      j$$14++;
      var v822 = tempArray.length;
      v456 = j$$14 < v822;
    }
    timesFound$$1 = 0;
    tempArray = new Array;
    i$$20++;
    var v823 = arrayOfItems$$2.length;
    v457 = i$$20 < v823;
  }
  return restrictionSiteCollection$$3;
}
function writeLayout(start$$4, stop) {
  var i$$21 = 0;
  var v989 = this.components;
  var v824 = v989.length;
  var v459 = i$$21 < v824;
  for (;v459;) {
    var v825 = this.components;
    var v458 = v825[i$$21];
    JAM.call(v458.writeLayoutComponent, v458, [start$$4, stop], JAM.policy.p27);
    i$$21++;
    var v990 = this.components;
    var v826 = v990.length;
    v459 = i$$21 < v826;
  }
  return;
}
function addComponent(component) {
  var v460 = this.components;
  JAM.call(v460.push, v460, [component], JAM.policy.p16);
  return;
}
function TextLayout() {
  var v1503 = new Array;
  this.components = v1503;
  return;
}
function writeLayoutComponent(start$$5, stop$$1) {
  return;
}
function setCharacters(text$$14) {
  var v827 = JAM.call(text$$14.search, text$$14, [/./], JAM.policy.p17);
  var v461 = v827 != -1;
  if (v461) {
    var v1504 = JAM.call(text$$14.match, text$$14, [/./g], JAM.policy.p17);
    this.characters = v1504;
  }
  return;
}
function isRoom(start$$6, stop$$2) {
  var v462 = this.characters;
  var rangeToCheck = JAM.call(v462.slice, v462, [start$$6, stop$$2], JAM.policy.p27);
  rangeToCheck = JAM.call(rangeToCheck.join, rangeToCheck, [""], JAM.policy.p9);
  var v828 = JAM.call(rangeToCheck.search, rangeToCheck, [/\w/], JAM.policy.p17);
  var v463 = v828 == -1;
  if (v463) {
    return true;
  } else {
    return false;
  }
  return;
}
function LayoutComponent() {
  var v1505 = new Array;
  this.characters = v1505;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return;
}
function TranslationComponent() {
  var v1506 = new Array;
  this.characters = v1506;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return;
}
function UppercaseTranslationComponent() {
  var v1507 = new Array;
  this.characters = v1507;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return;
}
function DnaComponent() {
  var v1508 = new Array;
  this.characters = v1508;
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
  var v464 = this.restrictionSites;
  JAM.call(v464.push, v464, [restrictionSite], JAM.policy.p16);
  return;
}
function sortRestrictionSites() {
  var v465 = this.restrictionSites;
  JAM.call(v465.sort, v465, [restrictionSiteSorter], JAM.policy.p16);
  return;
}
function getSitesInRange(start$$10, stop$$6) {
  var arrayToReturn = new Array;
  var v829 = this.restrictionSites;
  var v466 = v829.length;
  var i$$22 = v466 - 1;
  var v469 = i$$22 >= 0;
  for (;v469;) {
    var v1149 = this.restrictionSites;
    var v1086 = v1149[i$$22];
    var v991 = v1086.position;
    var v830 = v991 >= start$$10;
    if (v830) {
      var v1150 = this.restrictionSites;
      var v1087 = v1150[i$$22];
      var v992 = v1087.position;
      v830 = v992 < stop$$6;
    }
    var v468 = v830;
    if (v468) {
      var v831 = this.restrictionSites;
      var v467 = v831.pop();
      JAM.call(arrayToReturn.push, arrayToReturn, [v467], JAM.policy.p16);
    } else {
      break;
    }
    i$$22--;
    v469 = i$$22 >= 0;
  }
  return arrayToReturn;
}
function RestrictionSiteCollection() {
  var v1509 = new Array;
  this.restrictionSites = v1509;
  return;
}
function restrictionSiteSorter(a, b) {
  var v832 = a.position;
  var v833 = b.position;
  var v470 = v832 < v833;
  if (v470) {
    return 1;
  }
  var v834 = a.position;
  var v835 = b.position;
  var v471 = v834 > v835;
  if (v471) {
    return -1;
  } else {
    return 0;
  }
  return;
}
new TextLayout;
var v472 = TextLayout.prototype;
v472.writeLayout = writeLayout;
var v473 = TextLayout.prototype;
v473.addComponent = addComponent;
new LayoutComponent;
var v474 = LayoutComponent.prototype;
v474.writeLayoutComponent = writeLayoutComponent;
var v475 = LayoutComponent.prototype;
v475.setCharacters = setCharacters;
var v476 = LayoutComponent.prototype;
v476.isRoom = isRoom;
var v477 = TranslationComponent;
var v1510 = new LayoutComponent;
v477.prototype = v1510;
var v478 = TranslationComponent.prototype;
v478.writeLayoutComponent = v4;
var v479 = UppercaseTranslationComponent;
var v1511 = new LayoutComponent;
v479.prototype = v1511;
var v480 = UppercaseTranslationComponent.prototype;
v480.writeLayoutComponent = v5;
var v481 = DnaComponent;
var v1512 = new LayoutComponent;
v481.prototype = v1512;
var v482 = DnaComponent.prototype;
v482.writeLayoutComponent = v6;
new RestrictionSiteCollection;
var v483 = RestrictionSiteCollection.prototype;
v483.addRestrictionSite = addRestrictionSite;
var v484 = RestrictionSiteCollection.prototype;
v484.sortRestrictionSites = sortRestrictionSites;
var v485 = RestrictionSiteCollection.prototype;
v485.getSitesInRange = getSitesInRange;
JAM.set(document, "onload", v7);
var v486 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9);
JAM.set(v486, "onclick", v8);
var v487 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9);
JAM.set(v487, "onclick", v9)

JAM.stopProfile('load');
