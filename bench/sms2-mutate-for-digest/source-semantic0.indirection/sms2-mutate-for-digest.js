function v9() {
  var v996 = document.forms;
  var v838 = v996[0];
  var v490 = v838.elements;
  var v10 = v490[0];
  v10.value = " ";
  var v997 = document.forms;
  var v839 = v997[0];
  var v491 = v839.elements;
  var v11 = v491[4];
  v11.value = " ";
  return;
}
function v8() {
  try {
    mutateForDigest(document);
  } catch (e$$5) {
    var v12 = "The following error was encountered: " + e$$5;
    alert(v12);
  }
  return;
}
function v7() {
  var v492 = document.main_form;
  var v13 = v492.main_submit;
  v13.focus();
  return;
}
function v6(start$$9, stop$$5) {
  var v14 = outputWindow.document;
  var v493 = this.positionLabel;
  var v15 = rightNum(v493, "", 8, "");
  JAM.call(v14.write, v14, [v15], JAM.policy.p15);
  var v16 = outputWindow.document;
  var v17 = this.spanStart;
  JAM.call(v16.write, v16, [v17], JAM.policy.p15);
  var v18 = outputWindow.document;
  var v840 = this.characters;
  var v494 = JAM.call(v840.slice, v840, [start$$9, stop$$5], JAM.policy.p27);
  var v19 = JAM.call(v494.join, v494, [""], JAM.policy.p9);
  JAM.call(v18.write, v18, [v19], JAM.policy.p15);
  var v20 = outputWindow.document;
  var v495 = this.spanEnd;
  var v21 = v495 + "\n";
  JAM.call(v20.write, v20, [v21], JAM.policy.p15);
  var v22 = this.positionLabel;
  var v23 = stop$$5 - start$$9;
  this.positionLabel = v22 + v23;
  return;
}
function v5(start$$8, stop$$4) {
  var v496 = this.characters;
  var v24 = JAM.call(v496.slice, v496, [start$$8, stop$$4], JAM.policy.p27);
  var textToWrite = JAM.call(v24.join, v24, [""], JAM.policy.p9);
  var v497 = JAM.call(textToWrite.search, textToWrite, [/\w/], JAM.policy.p17);
  var v34 = v497 != -1;
  if (v34) {
    var v25 = outputWindow.document;
    var v498 = this.positionLabel;
    var v26 = rightNum(v498, "", 8, "");
    JAM.call(v25.write, v25, [v26], JAM.policy.p15);
    var v27 = outputWindow.document;
    var v28 = this.spanStart;
    JAM.call(v27.write, v27, [v28], JAM.policy.p15);
    var v29 = this.positionLabel;
    var v499 = JAM.call(textToWrite.match, textToWrite, [/[A-Z]/g], JAM.policy.p17);
    var v30 = v499.length;
    this.positionLabel = v29 + v30;
    var v31 = outputWindow.document;
    JAM.call(v31.write, v31, [textToWrite], JAM.policy.p15);
    var v32 = outputWindow.document;
    var v500 = this.spanEnd;
    var v33 = v500 + "\n";
    JAM.call(v32.write, v32, [v33], JAM.policy.p15);
  }
  return;
}
function v4(start$$7, stop$$3) {
  var v35 = outputWindow.document;
  var v501 = this.positionLabel;
  var v36 = rightNum(v501, "", 8, "");
  JAM.call(v35.write, v35, [v36], JAM.policy.p15);
  var v37 = outputWindow.document;
  var v38 = this.spanStart;
  JAM.call(v37.write, v37, [v38], JAM.policy.p15);
  var v39 = outputWindow.document;
  var v841 = this.characters;
  var v502 = JAM.call(v841.slice, v841, [start$$7, stop$$3], JAM.policy.p27);
  var v40 = JAM.call(v502.join, v502, [""], JAM.policy.p9);
  JAM.call(v39.write, v39, [v40], JAM.policy.p15);
  var v41 = outputWindow.document;
  var v503 = this.spanEnd;
  var v42 = v503 + "\n";
  JAM.call(v41.write, v41, [v42], JAM.policy.p15);
  var v43 = this.positionLabel;
  var v504 = stop$$3 - start$$7;
  var v44 = v504 / 3;
  this.positionLabel = v43 + v44;
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p16);
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v45 = arrayOfSequences[0];
  var lengthOfAlign = v45.length;
  var v505 = arrayOfSequences.length;
  var v46 = v505 < 2;
  if (v46) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v506 = arrayOfTitles.length;
  var v48 = i$$1 < v506;
  for (;v48;) {
    var v1091 = arrayOfTitles[i$$1];
    var v998 = JAM.call(v1091.search, v1091, [/\S/], JAM.policy.p17);
    var v842 = v998 == -1;
    var v1000 = !v842;
    if (v1000) {
      var v1092 = arrayOfSequences[i$$1];
      var v999 = JAM.call(v1092.search, v1092, [/\S/], JAM.policy.p17);
      v842 = v999 == -1;
    }
    var v507 = v842;
    var v844 = !v507;
    if (v844) {
      var v1001 = arrayOfSequences[i$$1];
      var v843 = v1001.length;
      v507 = v843 != lengthOfAlign;
    }
    var v47 = v507;
    if (v47) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v508 = arrayOfTitles.length;
    v48 = i$$1 < v508;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1154 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17);
  var v1093 = v1154 == -1;
  var v1156 = !v1093;
  if (v1156) {
    var v1155 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17);
    v1093 = v1155 == -1;
  }
  var v1002 = v1093;
  var v1095 = !v1002;
  if (v1095) {
    var v1094 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17);
    v1002 = v1094 == -1;
  }
  var v845 = v1002;
  var v1004 = !v845;
  if (v1004) {
    var v1003 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17);
    v845 = v1003 == -1;
  }
  var v509 = v845;
  var v847 = !v509;
  if (v847) {
    var v846 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17);
    v509 = v846 == -1;
  }
  var v49 = v509;
  if (v49) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v848 = formElement.value;
  var v510 = JAM.call(v848.search, v848, [/\S/], JAM.policy.p17);
  var v50 = v510 == -1;
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
  var v511 = arrayOfPatterns.length;
  var v53 = z$$2 < v511;
  for (;v53;) {
    var v849 = arrayOfPatterns[z$$2];
    var v512 = JAM.call(v849.search, v849, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17);
    var v51 = v512 == -1;
    if (v51) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v850 = arrayOfPatterns[z$$2];
    var v513 = moreExpressionCheck(v850);
    var v52 = v513 == false;
    if (v52) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v514 = arrayOfPatterns.length;
    v53 = z$$2 < v514;
  }
  var v54 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v54);
  var v55 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v55);
  var j = 0;
  var v515 = arrayOfPatterns.length;
  var v59 = j < v515;
  for (;v59;) {
    var v851 = arrayOfPatterns[j];
    var v516 = JAM.call(v851.match, v851, [/\/.+\//], JAM.policy.p17);
    var v56 = v516 + "gi";
    if (JAM.isEval(eval)) {
      var v1500 = eval("introspect(JAM.policy.pFull) { " + v56 + " }")
    } else {
      var v1500 = JAM.call(eval, null, [v56])
    }
    geneticCodeMatchExp[j] = v1500;
    var v517 = arrayOfPatterns[j];
    var v57 = JAM.call(v517.match, v517, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v1501 = v57.toString();
    geneticCodeMatchResult[j] = v1501;
    var v58 = geneticCodeMatchResult[j];
    var v1502 = JAM.call(v58.replace, v58, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v1502;
    j++;
    var v518 = arrayOfPatterns.length;
    v59 = j < v518;
  }
  var i$$2 = 0;
  var v852 = testSequence.length;
  var v519 = v852 - 3;
  var v66 = i$$2 <= v519;
  for (;v66;) {
    var v60 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v60], JAM.policy.p16);
    j = 0;
    var v520 = geneticCodeMatchExp.length;
    var v64 = j < v520;
    for (;v64;) {
      var v853 = geneticCodeMatchExp[j];
      var v521 = JAM.call(codon.search, codon, [v853], JAM.policy.p15);
      var v63 = v521 != -1;
      if (v63) {
        var v62 = oneMatch == true;
        if (v62) {
          var v522 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v61 = v522 + ".";
          alert(v61);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v523 = geneticCodeMatchExp.length;
      v64 = j < v523;
    }
    var v65 = oneMatch == false;
    if (v65) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v854 = testSequence.length;
    var v524 = v854 - 3;
    v66 = i$$2 <= v524;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v525 = arrayOfPatterns$$1.length;
  var v68 = z$$3 < v525;
  for (;v68;) {
    var v855 = arrayOfPatterns$$1[z$$3];
    var v526 = JAM.call(v855.search, v855, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17);
    var v67 = v526 != -1;
    if (v67) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v527 = arrayOfPatterns$$1.length;
    v68 = z$$3 < v527;
  }
  var i$$3 = 0;
  var v528 = arrayOfPatterns$$1.length;
  var v72 = i$$3 < v528;
  for (;v72;) {
    var v856 = arrayOfPatterns$$1[i$$3];
    var v529 = "[" + v856;
    var v69 = v529 + "]";
    var re = new RegExp(v69, "gi");
    var j$$1 = i$$3 + 1;
    var v530 = arrayOfPatterns$$1.length;
    var v71 = j$$1 < v530;
    for (;v71;) {
      var v857 = arrayOfPatterns$$1[j$$1];
      var v531 = JAM.call(v857.search, v857, [re], JAM.policy.p15);
      var v70 = v531 != -1;
      if (v70) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v532 = arrayOfPatterns$$1.length;
      v71 = j$$1 < v532;
    }
    i$$3++;
    var v533 = arrayOfPatterns$$1.length;
    v72 = i$$3 < v533;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v534 = arrayOfPatterns$$2.length;
  var v75 = z$$4 < v534;
  for (;v75;) {
    var v858 = arrayOfPatterns$$2[z$$4];
    var v535 = JAM.call(v858.search, v858, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17);
    var v73 = v535 == -1;
    if (v73) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v859 = arrayOfPatterns$$2[z$$4];
    var v536 = moreExpressionCheck(v859);
    var v74 = v536 == false;
    if (v74) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v537 = arrayOfPatterns$$2.length;
    v75 = z$$4 < v537;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v1005 = getSequenceFromFasta(text$$7);
  var v860 = JAM.call(v1005.replace, v1005, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v538 = v860.length;
  var v77 = v538 > maxInput;
  if (v77) {
    var v539 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v76 = v539 + " characters.";
    alert(v76);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v540 = text$$8.length;
  var v79 = v540 > maxInput$$1;
  if (v79) {
    var v541 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v78 = v541 + " characters.";
    alert(v78);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p16);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p16);
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
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p16);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p16);
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v542 = alignArray.length;
  var v86 = v542 < 3;
  if (v86) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v543 = alignArray.length;
  var v88 = i$$4 < v543;
  for (;v88;) {
    var v861 = alignArray[i$$4];
    var v544 = JAM.call(v861.search, v861, [/[^\s]+\s/], JAM.policy.p17);
    var v87 = v544 == -1;
    if (v87) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v545 = alignArray.length;
    v88 = i$$4 < v545;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p16);
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p16);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p16);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p16);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p16);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v546 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v91 = v546 != -1;
  if (v91) {
    var v90 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p15);
    for (;v90;) {
      var v89 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v89], JAM.policy.p15);
      v90 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p15);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v547 = sequence$$2.length;
  var v92 = "&gt;results for " + v547;
  var stringToReturn = v92 + " residue sequence ";
  var v548 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p17);
  var v94 = v548 != -1;
  if (v94) {
    var v549 = stringToReturn + '"';
    var v93 = v549 + fastaSequenceTitle;
    stringToReturn = v93 + '"';
  }
  var v550 = stringToReturn + ' starting "';
  var v551 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v95 = v550 + v551;
  stringToReturn = v95 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v552 = sequenceOne.length;
  var v96 = "Search results for " + v552;
  var stringToReturn$$1 = v96 + " residue sequence ";
  var v553 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p17);
  var v98 = v553 != -1;
  if (v98) {
    var v554 = stringToReturn$$1 + '"';
    var v97 = v554 + fastaSequenceTitleOne;
    stringToReturn$$1 = v97 + '"';
  }
  var v555 = stringToReturn$$1 + ' starting "';
  var v556 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v99 = v555 + v556;
  stringToReturn$$1 = v99 + '"\n';
  var v557 = stringToReturn$$1 + "and ";
  var v558 = sequenceTwo.length;
  var v100 = v557 + v558;
  stringToReturn$$1 = v100 + " residue sequence ";
  var v559 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p17);
  var v102 = v559 != -1;
  if (v102) {
    var v560 = stringToReturn$$1 + '"';
    var v101 = v560 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v101 + '"';
  }
  var v561 = stringToReturn$$1 + ' starting "';
  var v562 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v103 = v561 + v562;
  stringToReturn$$1 = v103 + '"';
  var v104 = '<div class="info">' + stringToReturn$$1;
  return v104 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v105 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v105);
  var j$$2 = 0;
  var v563 = arrayOfPatterns$$3.length;
  var v107 = j$$2 < v563;
  for (;v107;) {
    var v862 = arrayOfPatterns$$3[j$$2];
    var v564 = JAM.call(v862.match, v862, [/\/.+\//], JAM.policy.p17);
    var v106 = v564 + "gi";
    if (JAM.isEval(eval)) {
      var v1503 = eval("introspect(JAM.policy.pFull) { " + v106 + " }")
    } else {
      var v1503 = JAM.call(eval, null, [v106])
    }
    geneticCodeMatchExp$$1[j$$2] = v1503;
    j$$2++;
    var v565 = arrayOfPatterns$$3.length;
    v107 = j$$2 < v565;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v108 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v108);
  var j$$3 = 0;
  var v566 = arrayOfPatterns$$4.length;
  var v111 = j$$3 < v566;
  for (;v111;) {
    var v567 = arrayOfPatterns$$4[j$$3];
    var v109 = JAM.call(v567.match, v567, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v1504 = v109.toString();
    geneticCodeMatchResult$$1[j$$3] = v1504;
    var v110 = geneticCodeMatchResult$$1[j$$3];
    var v1505 = JAM.call(v110.replace, v110, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v1505;
    j$$3++;
    var v568 = arrayOfPatterns$$4.length;
    v111 = j$$3 < v568;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v569 = sequence$$3.length;
  var v112 = "Results for " + v569;
  var stringToReturn$$2 = v112 + " residue sequence ";
  var v570 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p17);
  var v114 = v570 != -1;
  if (v114) {
    var v571 = stringToReturn$$2 + '"';
    var v113 = v571 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v113 + '"';
  }
  var v572 = stringToReturn$$2 + ' starting "';
  var v573 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v115 = v572 + v573;
  stringToReturn$$2 = v115 + '"';
  var v116 = '<div class="info">' + stringToReturn$$2;
  return v116 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v863 = "Results for " + topology;
  var v574 = v863 + " ";
  var v575 = sequence$$4.length;
  var v117 = v574 + v575;
  var stringToReturn$$3 = v117 + " residue sequence ";
  var v576 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p17);
  var v119 = v576 != -1;
  if (v119) {
    var v577 = stringToReturn$$3 + '"';
    var v118 = v577 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v118 + '"';
  }
  var v578 = stringToReturn$$3 + ' starting "';
  var v579 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v120 = v578 + v579;
  stringToReturn$$3 = v120 + '"';
  var v121 = '<div class="info">' + stringToReturn$$3;
  return v121 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v580 = sequenceOne$$1.length;
  var v122 = "Alignment results for " + v580;
  var stringToReturn$$4 = v122 + " residue sequence ";
  var v581 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p17);
  var v124 = v581 != -1;
  if (v124) {
    var v582 = stringToReturn$$4 + '"';
    var v123 = v582 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v123 + '"';
  }
  var v583 = stringToReturn$$4 + ' starting "';
  var v584 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v125 = v583 + v584;
  stringToReturn$$4 = v125 + '"\n';
  var v585 = stringToReturn$$4 + "and ";
  var v586 = sequenceTwo$$1.length;
  var v126 = v585 + v586;
  stringToReturn$$4 = v126 + " residue sequence ";
  var v587 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p17);
  var v128 = v587 != -1;
  if (v128) {
    var v588 = stringToReturn$$4 + '"';
    var v127 = v588 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v127 + '"';
  }
  var v589 = stringToReturn$$4 + ' starting "';
  var v590 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v129 = v589 + v590;
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
    var v591 = Math.random();
    var v592 = components.length;
    var v131 = v591 * v592;
    tempNum = JAM.call(Math.floor, Math, [v131], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p15);
    j$$4++;
    v132 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p9);
}
function getSequenceFromFasta(sequenceRecord) {
  var v593 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v133 = v593 != -1;
  if (v133) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v594 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v135 = v594 != -1;
  if (v135) {
    var v134 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
    fastaTitle = v134.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p16);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1342 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p17);
  var v1318 = v1342 != -1;
  var v1344 = !v1318;
  if (v1344) {
    var v1343 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17);
    v1318 = v1343 != -1;
  }
  var v1292 = v1318;
  var v1320 = !v1292;
  if (v1320) {
    var v1319 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17);
    v1292 = v1319 != -1;
  }
  var v1266 = v1292;
  var v1294 = !v1266;
  if (v1294) {
    var v1293 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17);
    v1266 = v1293 != -1;
  }
  var v1236 = v1266;
  var v1268 = !v1236;
  if (v1268) {
    var v1267 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17);
    v1236 = v1267 != -1;
  }
  var v1199 = v1236;
  var v1238 = !v1199;
  if (v1238) {
    var v1237 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17);
    v1199 = v1237 != -1;
  }
  var v1157 = v1199;
  var v1201 = !v1157;
  if (v1201) {
    var v1200 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17);
    v1157 = v1200 != -1;
  }
  var v1096 = v1157;
  var v1159 = !v1096;
  if (v1159) {
    var v1158 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17);
    v1096 = v1158 != -1;
  }
  var v1006 = v1096;
  var v1098 = !v1006;
  if (v1098) {
    var v1097 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17);
    v1006 = v1097 != -1;
  }
  var v864 = v1006;
  var v1008 = !v864;
  if (v1008) {
    var v1007 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17);
    v864 = v1007 != -1;
  }
  var v595 = v864;
  var v866 = !v595;
  if (v866) {
    var v865 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17);
    v595 = v865 != -1;
  }
  var v136 = v595;
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
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v141 = outputWindow.document;
  var v1009 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v867 = v1009 + "<head>\n";
  var v596 = v867 + "<title>Sequence Manipulation Suite</title>\n";
  var v142 = v596 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v141.write, v141, [v142], JAM.policy.p15);
  if (isColor) {
    var v143 = outputWindow.document;
    var v1408 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1387 = v1408 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1366 = v1387 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1345 = v1366 + "div.info {font-weight: bold}\n";
    var v1321 = v1345 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1295 = v1321 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1269 = v1295 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1239 = v1269 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1202 = v1239 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1160 = v1202 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1099 = v1160 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1010 = v1099 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v868 = v1010 + "td.many {color: #000000}\n";
    var v597 = v868 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v144 = v597 + "</style>\n";
    JAM.call(v143.write, v143, [v144], JAM.policy.p15);
  } else {
    var v145 = outputWindow.document;
    var v1429 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1409 = v1429 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1388 = v1409 + "div.title {display: none}\n";
    var v1367 = v1388 + "div.info {font-weight: bold}\n";
    var v1346 = v1367 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1322 = v1346 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1296 = v1322 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1270 = v1296 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1240 = v1270 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1203 = v1240 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1161 = v1203 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1100 = v1161 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1011 = v1100 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v869 = v1011 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v598 = v869 + "img {display: none}\n";
    var v146 = v598 + "</style>\n";
    JAM.call(v145.write, v145, [v146], JAM.policy.p15);
  }
  var v147 = outputWindow.document;
  var v1012 = "</head>\n" + '<body class="main">\n';
  var v870 = v1012 + '<div class="title">';
  var v599 = v870 + title$$6;
  var v148 = v599 + " results</div>\n";
  JAM.call(v147.write, v147, [v148], JAM.policy.p15);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v149 = outputWindow.document;
  var v1013 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v871 = v1013 + "<head>\n";
  var v600 = v871 + "<title>Sequence Manipulation Suite</title>\n";
  var v150 = v600 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v149.write, v149, [v150], JAM.policy.p15);
  if (isBackground) {
    var v151 = outputWindow.document;
    var v1410 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1389 = v1410 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1368 = v1389 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1347 = v1368 + "div.info {font-weight: bold}\n";
    var v1323 = v1347 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1297 = v1323 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1271 = v1297 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1241 = v1271 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1204 = v1241 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1162 = v1204 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1101 = v1162 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v1014 = v1101 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v872 = v1014 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v601 = v872 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v152 = v601 + "</style>\n";
    JAM.call(v151.write, v151, [v152], JAM.policy.p15);
  } else {
    var v153 = outputWindow.document;
    var v1448 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1430 = v1448 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1411 = v1430 + "div.title {display: none}\n";
    var v1390 = v1411 + "div.info {font-weight: bold}\n";
    var v1369 = v1390 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1348 = v1369 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1324 = v1348 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1298 = v1324 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1272 = v1298 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1242 = v1272 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1205 = v1242 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1163 = v1205 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1102 = v1163 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v1015 = v1102 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v873 = v1015 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v602 = v873 + "img {display: none}\n";
    var v154 = v602 + "</style>\n";
    JAM.call(v153.write, v153, [v154], JAM.policy.p15);
  }
  var v155 = outputWindow.document;
  var v1016 = "</head>\n" + '<body class="main">\n';
  var v874 = v1016 + '<div class="title">';
  var v603 = v874 + title$$8;
  var v156 = v603 + " results</div>\n";
  JAM.call(v155.write, v155, [v156], JAM.policy.p15);
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p16);
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p16);
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p16);
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p16);
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p16);
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p16);
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p16);
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p16);
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p16);
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  var v604 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p17);
  var v157 = v604 != -1;
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p15);
  var v605 = testArray[0];
  var v161 = v605 != testString;
  if (v161) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v606 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p15);
  var v162 = v606 == -1;
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
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p16);
  var v164 = testString != "1X2X3X";
  if (v164) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v607 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p11);
  var v165 = v607 != 2489.824;
  if (v165) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v608 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p11);
  var v166 = v608 != 2489.8;
  if (v166) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v609 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p17);
  var v167 = v609 == -1;
  if (v167) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v1103 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17);
  var v1017 = v1103 == -1;
  var v1105 = !v1017;
  if (v1105) {
    var v1104 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17);
    v1017 = v1104 == -1;
  }
  var v875 = v1017;
  var v1019 = !v875;
  if (v1019) {
    var v1018 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17);
    v875 = v1018 == -1;
  }
  var v610 = v875;
  var v877 = !v610;
  if (v877) {
    var v876 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17);
    v610 = v876 == -1;
  }
  var v168 = v610;
  if (v168) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v611 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p17);
  var v169 = v611 == -1;
  if (v169) {
    alert("Please enter a number.");
    return false;
  }
  var v171 = theNumber$$2 > maxInput$$2;
  if (v171) {
    var v612 = "Please enter a number less than or equal to " + maxInput$$2;
    var v170 = v612 + ".";
    alert(v170);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v613 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p17);
  var v172 = v613 != -1;
  if (v172) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v614 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p17);
  var v173 = v614 != -1;
  if (v173) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v1106 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17);
  var v1020 = v1106 == -1;
  var v1108 = !v1020;
  if (v1108) {
    var v1107 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17);
    v1020 = v1107 == -1;
  }
  var v878 = v1020;
  var v1022 = !v878;
  if (v1022) {
    var v1021 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17);
    v878 = v1021 == -1;
  }
  var v615 = v878;
  var v880 = !v615;
  if (v880) {
    var v879 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17);
    v615 = v879 == -1;
  }
  var v174 = v615;
  if (v174) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1109 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17);
  var v1023 = v1109 == -1;
  var v1111 = !v1023;
  if (v1111) {
    var v1110 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17);
    v1023 = v1110 == -1;
  }
  var v881 = v1023;
  var v1025 = !v881;
  if (v1025) {
    var v1024 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17);
    v881 = v1024 == -1;
  }
  var v616 = v881;
  var v883 = !v616;
  if (v883) {
    var v882 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17);
    v616 = v882 == -1;
  }
  var v175 = v616;
  if (v175) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v617 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p17);
  var v176 = v617 == -1;
  if (v176) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v1112 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17);
  var v1026 = v1112 == -1;
  var v1114 = !v1026;
  if (v1114) {
    var v1113 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17);
    v1026 = v1113 == -1;
  }
  var v884 = v1026;
  var v1028 = !v884;
  if (v1028) {
    var v1027 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17);
    v884 = v1027 == -1;
  }
  var v618 = v884;
  var v886 = !v618;
  if (v886) {
    var v885 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17);
    v618 = v885 == -1;
  }
  var v177 = v618;
  if (v177) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v619 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p17);
  var v178 = v619 == -1;
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
    var v620 = basePerLine / groupSize;
    var v182 = j$$6 <= v620;
    for (;v182;) {
      var v181 = k < groupSize;
      for (;v181;) {
        var v621 = k + i$$5;
        var v180 = JAM.call(text$$10.charAt, text$$10, [v621], JAM.policy.p15);
        lineOfText = lineOfText + v180;
        k = k + 1;
        v181 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v622 = basePerLine / groupSize;
      v182 = j$$6 <= v622;
    }
    var v183 = outputWindow.document;
    var v184 = lineOfText + "\n";
    JAM.call(v183.write, v183, [v184], JAM.policy.p15);
    lineOfText = "";
    v185 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v623 = adjustment < 0;
    if (v623) {
      v623 = adjusted >= 0;
    }
    var v186 = v623;
    if (v186) {
      adjusted++;
    }
    return adjusted;
  }
  var i$$6 = parseInt(startBase$$2);
  var k$$1 = 0;
  var lineOfText$$1 = "";
  var lineNum = "";
  var sepChar$$1 = " ";
  var aboveNum = "";
  groupSize$$2 = parseInt(groupSize$$2);
  basePerLine$$2 = parseInt(basePerLine$$2);
  numberingAdjustment = parseInt(numberingAdjustment);
  var v219 = i$$6 < stopBase$$2;
  for (;v219;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v624 = basePerLine$$2 / groupSize$$2;
    var v195 = j$$7 <= v624;
    for (;v195;) {
      var v190 = k$$1 < groupSize$$2;
      for (;v190;) {
        var v625 = i$$6 + k$$1;
        var v187 = v625 >= stopBase$$2;
        if (v187) {
          break;
        }
        var v188 = lineOfText$$1;
        var v626 = k$$1 + i$$6;
        var v189 = JAM.call(text$$12.charAt, text$$12, [v626], JAM.policy.p15);
        lineOfText$$1 = v188 + v189;
        k$$1 = k$$1 + 1;
        v190 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v193 = numberPosition$$1 == "above";
      if (v193) {
        var v191 = aboveNum;
        var v627 = adjustNumbering(i$$6, numberingAdjustment);
        var v192 = rightNum(v627, "", groupSize$$2, tabIn$$3);
        aboveNum = v191 + v192;
      }
      var v194 = i$$6 >= stopBase$$2;
      if (v194) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v628 = basePerLine$$2 / groupSize$$2;
      v195 = j$$7 <= v628;
    }
    var v218 = numberPosition$$1 == "left";
    if (v218) {
      var v196 = outputWindow.document;
      var v1029 = adjustNumbering(lineNum, numberingAdjustment);
      var v887 = rightNum(v1029, "", 8, tabIn$$3);
      var v629 = v887 + lineOfText$$1;
      var v197 = v629 + "\n";
      JAM.call(v196.write, v196, [v197], JAM.policy.p15);
      var v201 = strands$$1 == "two";
      if (v201) {
        var v198 = outputWindow.document;
        var v1030 = adjustNumbering(lineNum, numberingAdjustment);
        var v888 = rightNum(v1030, "", 8, tabIn$$3);
        var v889 = complement(lineOfText$$1);
        var v630 = v888 + v889;
        var v199 = v630 + "\n";
        JAM.call(v198.write, v198, [v199], JAM.policy.p15);
        var v200 = outputWindow.document;
        JAM.call(v200.write, v200, ["\n"], JAM.policy.p9);
      }
    } else {
      var v217 = numberPosition$$1 == "right";
      if (v217) {
        var v202 = outputWindow.document;
        var v890 = lineOfText$$1;
        var v891 = adjustNumbering(i$$6, numberingAdjustment);
        var v631 = v890 + v891;
        var v203 = v631 + "\n";
        JAM.call(v202.write, v202, [v203], JAM.policy.p15);
        var v207 = strands$$1 == "two";
        if (v207) {
          var v204 = outputWindow.document;
          var v892 = complement(lineOfText$$1);
          var v893 = adjustNumbering(i$$6, numberingAdjustment);
          var v632 = v892 + v893;
          var v205 = v632 + "\n";
          JAM.call(v204.write, v204, [v205], JAM.policy.p15);
          var v206 = outputWindow.document;
          JAM.call(v206.write, v206, ["\n"], JAM.policy.p9);
        }
      } else {
        var v216 = numberPosition$$1 == "above";
        if (v216) {
          var v208 = outputWindow.document;
          var v209 = aboveNum + "\n";
          JAM.call(v208.write, v208, [v209], JAM.policy.p15);
          var v210 = outputWindow.document;
          var v211 = lineOfText$$1 + "\n";
          JAM.call(v210.write, v210, [v211], JAM.policy.p15);
          var v215 = strands$$1 == "two";
          if (v215) {
            var v212 = outputWindow.document;
            var v633 = complement(lineOfText$$1);
            var v213 = v633 + "\n";
            JAM.call(v212.write, v212, [v213], JAM.policy.p15);
            var v214 = outputWindow.document;
            JAM.call(v214.write, v214, ["\n"], JAM.policy.p9);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v219 = i$$6 < stopBase$$2;
  }
  return true;
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
  var v238 = i$$7 < stopBase$$3;
  for (;v238;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v634 = basePerLine$$3 / groupSize$$3;
    var v226 = j$$8 <= v634;
    for (;v226;) {
      var v222 = k$$2 < groupSize$$3;
      for (;v222;) {
        var v635 = i$$7 + k$$2;
        var v220 = v635 >= stopBase$$3;
        if (v220) {
          break;
        }
        var v636 = k$$2 + i$$7;
        var v221 = JAM.call(text$$13.charAt, text$$13, [v636], JAM.policy.p15);
        lineOfText$$2 = lineOfText$$2 + v221;
        k$$2 = k$$2 + 1;
        v222 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v224 = numberPosition$$2 == "above";
      if (v224) {
        var v223 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v223;
      }
      var v225 = i$$7 >= stopBase$$3;
      if (v225) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v637 = basePerLine$$3 / groupSize$$3;
      v226 = j$$8 <= v637;
    }
    var v237 = numberPosition$$2 == "left";
    if (v237) {
      var v227 = outputWindow.document;
      var v894 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v638 = v894 + lineOfText$$2;
      var v228 = v638 + "\n";
      JAM.call(v227.write, v227, [v228], JAM.policy.p15);
    } else {
      var v236 = numberPosition$$2 == "right";
      if (v236) {
        var v229 = outputWindow.document;
        var v639 = lineOfText$$2 + i$$7;
        var v230 = v639 + "\n";
        JAM.call(v229.write, v229, [v230], JAM.policy.p15);
      } else {
        var v235 = numberPosition$$2 == "above";
        if (v235) {
          var v231 = outputWindow.document;
          var v232 = aboveNum$$1 + "\n";
          JAM.call(v231.write, v231, [v232], JAM.policy.p15);
          var v233 = outputWindow.document;
          var v234 = lineOfText$$2 + "\n";
          JAM.call(v233.write, v233, [v234], JAM.policy.p15);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v238 = i$$7 < stopBase$$3;
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
  var v1031 = sequence$$13.length;
  var v895 = v1031 <= firstIndexToMutate;
  var v1032 = !v895;
  if (v1032) {
    v895 = lastIndexToMutate < 0;
  }
  var v640 = v895;
  var v896 = !v640;
  if (v896) {
    v640 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v239 = v640;
  if (v239) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v247 = i$$8 < numMut;
  for (;v247;) {
    maxNum = sequence$$13.length;
    var v641 = Math.random();
    var v240 = v641 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v240], JAM.policy.p17);
    var v642 = randNum < firstIndexToMutate;
    var v897 = !v642;
    if (v897) {
      v642 = randNum > lastIndexToMutate;
    }
    var v241 = v642;
    if (v241) {
      numMut++;
      i$$8++;
      v247 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p17);
    needNewChar = true;
    for (;needNewChar;) {
      var v643 = Math.random();
      var v644 = components$$1.length;
      var v242 = v643 * v644;
      componentsIndex = JAM.call(Math.round, Math, [v242], JAM.policy.p17);
      var v645 = components$$1.length;
      var v243 = componentsIndex == v645;
      if (v243) {
        componentsIndex = 0;
      }
      var v646 = components$$1[componentsIndex];
      var v244 = v646 != currentChar;
      if (v244) {
        needNewChar = false;
      }
    }
    var v647 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v648 = components$$1[componentsIndex];
    var v245 = v647 + v648;
    var v649 = randNum + 1;
    var v650 = sequence$$13.length;
    var v246 = JAM.call(sequence$$13.substring, sequence$$13, [v649, v650], JAM.policy.p27);
    sequence$$13 = v245 + v246;
    i$$8++;
    v247 = i$$8 < numMut;
  }
  var v248 = outputWindow.document;
  var v249 = addReturns(sequence$$13);
  JAM.call(v248.write, v248, [v249], JAM.policy.p15);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v254 = j$$9 < lengthOut$$1;
  for (;v254;) {
    var v651 = Math.random();
    var v652 = components$$2.length;
    var v250 = v651 * v652;
    tempNum$$1 = JAM.call(Math.floor, Math, [v250], JAM.policy.p17);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v653 = sequence$$14.length;
    var v253 = v653 == 60;
    if (v253) {
      var v251 = outputWindow.document;
      var v252 = sequence$$14 + "\n";
      JAM.call(v251.write, v251, [v252], JAM.policy.p15);
      sequence$$14 = "";
    }
    j$$9++;
    v254 = j$$9 < lengthOut$$1;
  }
  var v255 = outputWindow.document;
  var v256 = sequence$$14 + "\n";
  JAM.call(v255.write, v255, [v256], JAM.policy.p15);
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
  var v260 = dnaConformation == "circular";
  if (v260) {
    var v257 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v257.length;
    var v1033 = sequence$$15.length;
    var v898 = v1033 - lookAhead;
    var v899 = sequence$$15.length;
    var v654 = JAM.call(sequence$$15.substring, sequence$$15, [v898, v899], JAM.policy.p27);
    var v258 = v654 + sequence$$15;
    var v259 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v258 + v259;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v261 = outputWindow.document;
  JAM.call(v261.write, v261, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v262 = outputWindow.document;
  var v1034 = '<tr><td class="title" width="200px">' + "Site:";
  var v900 = v1034 + '</td><td class="title">';
  var v655 = v900 + "Positions:";
  var v263 = v655 + "</td></tr>\n";
  JAM.call(v262.write, v262, [v263], JAM.policy.p15);
  var i$$9 = 0;
  var v656 = arrayOfItems.length;
  var v279 = i$$9 < v656;
  for (;v279;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v657 = arrayOfItems[i$$9];
    var v264 = JAM.call(v657.match, v657, [/\/.+\//], JAM.policy.p17);
    matchExp = v264 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v1035 = arrayOfItems[i$$9];
    var v901 = JAM.call(v1035.match, v1035, [/\)\D*\d+/], JAM.policy.p17);
    var v658 = v901.toString();
    var v265 = JAM.call(v658.replace, v658, [/\)\D*/, ""], JAM.policy.p16);
    cutDistance = parseFloat(v265);
    var v271 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p15);
    for (;v271;) {
      var v266 = matchExp.lastIndex;
      matchPosition = v266 - cutDistance;
      var v659 = matchPosition >= lowerLimit;
      if (v659) {
        v659 = matchPosition < upperLimit;
      }
      var v269 = v659;
      if (v269) {
        timesFound++;
        var v267 = tempString$$1 + ", ";
        var v660 = matchPosition - shiftValue;
        var v268 = v660 + 1;
        tempString$$1 = v267 + v268;
      }
      var v661 = matchExp.lastIndex;
      var v902 = RegExp.lastMatch;
      var v662 = v902.length;
      var v270 = v661 - v662;
      matchExp.lastIndex = v270 + 1;
      v271 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p15);
    }
    var v663 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p17);
    var v272 = v663 != -1;
    if (v272) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p16);
    }
    var v276 = timesFound == 0;
    if (v276) {
      backGroundClass = "none";
    } else {
      var v275 = timesFound == 1;
      if (v275) {
        backGroundClass = "one";
      } else {
        var v274 = timesFound == 2;
        if (v274) {
          backGroundClass = "two";
        } else {
          var v273 = timesFound == 3;
          if (v273) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v277 = outputWindow.document;
    var v1243 = '<tr><td class="' + backGroundClass;
    var v1206 = v1243 + '">';
    var v1299 = arrayOfItems[i$$9];
    var v1273 = JAM.call(v1299.match, v1299, [/\([^\(]+\)/], JAM.policy.p17);
    var v1244 = v1273.toString();
    var v1207 = JAM.call(v1244.replace, v1244, [/\(|\)/g, ""], JAM.policy.p16);
    var v1164 = v1206 + v1207;
    var v1115 = v1164 + '</td><td class="';
    var v1036 = v1115 + backGroundClass;
    var v903 = v1036 + '">';
    var v664 = v903 + tempString$$1;
    var v278 = v664 + "</td></tr>\n";
    JAM.call(v277.write, v277, [v278], JAM.policy.p15);
    timesFound = 0;
    i$$9++;
    var v665 = arrayOfItems.length;
    v279 = i$$9 < v665;
  }
  var v280 = outputWindow.document;
  JAM.call(v280.write, v280, ["</tbody></table>\n"], JAM.policy.p9);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v281 = outputWindow.document;
  JAM.call(v281.write, v281, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v282 = outputWindow.document;
  var v1165 = '<tr><td class="title">' + "Pattern:";
  var v1116 = v1165 + '</td><td class="title">';
  var v1037 = v1116 + "Times found:";
  var v904 = v1037 + '</td><td class="title">';
  var v666 = v904 + "Percentage:";
  var v283 = v666 + "</td></tr>\n";
  JAM.call(v282.write, v282, [v283], JAM.policy.p15);
  var i$$10 = 0;
  var v667 = arrayOfItems$$1.length;
  var v292 = i$$10 < v667;
  for (;v292;) {
    var tempNumber = 0;
    var v668 = arrayOfItems$$1[i$$10];
    var v284 = JAM.call(v668.match, v668, [/\/[^\/]+\//], JAM.policy.p17);
    var matchExp$$1 = v284 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v669 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p15);
    var v286 = v669 != -1;
    if (v286) {
      var v285 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p15);
      tempNumber = v285.length;
    }
    var percentage = 0;
    var v905 = originalLength + 1;
    var v1117 = arrayOfItems$$1[i$$10];
    var v1038 = JAM.call(v1117.match, v1117, [/\d+/], JAM.policy.p17);
    var v906 = parseFloat(v1038);
    var v670 = v905 - v906;
    var v289 = v670 > 0;
    if (v289) {
      var v287 = 100 * tempNumber;
      var v671 = originalLength + 1;
      var v1039 = arrayOfItems$$1[i$$10];
      var v907 = JAM.call(v1039.match, v1039, [/\d+/], JAM.policy.p17);
      var v672 = parseFloat(v907);
      var v288 = v671 - v672;
      percentage = v287 / v288;
    }
    var v290 = outputWindow.document;
    var v1300 = arrayOfItems$$1[i$$10];
    var v1274 = JAM.call(v1300.match, v1300, [/\([^\(]+\)\b/], JAM.policy.p17);
    var v1245 = v1274.toString();
    var v1208 = JAM.call(v1245.replace, v1245, [/\(|\)/g, ""], JAM.policy.p16);
    var v1166 = "<tr><td>" + v1208;
    var v1118 = v1166 + "</td><td>";
    var v1040 = v1118 + tempNumber;
    var v908 = v1040 + "</td><td>";
    var v909 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p11);
    var v673 = v908 + v909;
    var v291 = v673 + "</td></tr>\n";
    JAM.call(v290.write, v290, [v291], JAM.policy.p15);
    i$$10++;
    var v674 = arrayOfItems$$1.length;
    v292 = i$$10 < v674;
  }
  var v293 = outputWindow.document;
  JAM.call(v293.write, v293, ["</tbody></table>\n"], JAM.policy.p9);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v675 = sequence$$17.length;
  var v300 = v675 > 0;
  for (;v300;) {
    maxNum$$1 = sequence$$17.length;
    var v676 = Math.random();
    var v294 = v676 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v294], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v295 = randNum$$1 + 1;
    var v296 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v295, v296], JAM.policy.p16);
    sequence$$17 = tempString1 + tempString2;
    var v677 = tempSeq.length;
    var v299 = v677 == 60;
    if (v299) {
      var v297 = outputWindow.document;
      var v298 = tempSeq + "\n";
      JAM.call(v297.write, v297, [v298], JAM.policy.p15);
      tempSeq = "";
    }
    var v678 = sequence$$17.length;
    v300 = v678 > 0;
  }
  var v301 = outputWindow.document;
  var v302 = tempSeq + "\n";
  JAM.call(v301.write, v301, [v302], JAM.policy.p15);
  return true;
}
function getGeneticCodeString(type$$25) {
  var v910 = type$$25.toLowerCase();
  var v679 = v910 == "standard";
  var v912 = !v679;
  if (v912) {
    var v911 = type$$25.toLowerCase();
    v679 = v911 == "transl_table=1";
  }
  var v304 = v679;
  if (v304) {
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
    var v680 = v913 + "/[tu]gg/=W,";
    var v303 = v680 + "/[tu]a[ctuy]/=Y,";
    return v303 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v681 = type$$25.toLowerCase();
  var v306 = v681 == "transl_table=2";
  if (v306) {
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
    var v1120 = v1168 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1042 = v1120 + "/ac[acgturyswkmbdhvn]/=T,";
    var v914 = v1042 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v682 = v914 + "/[tu]g[agr]/=W,";
    var v305 = v682 + "/[tu]a[ctuy]/=Y,";
    return v305 + "/[tu]a[agr]|ag[agr]/=*";
  }
  var v683 = type$$25.toLowerCase();
  var v308 = v683 == "transl_table=3";
  if (v308) {
    var v1485 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1468 = v1485 + "/ga[tcuy]/=D,";
    var v1451 = v1468 + "/ga[agr]/=E,";
    var v1433 = v1451 + "/[tu][tu][tcuy]/=F,";
    var v1414 = v1433 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1393 = v1414 + "/ca[tcuy]/=H,";
    var v1372 = v1393 + "/a[tu][tcuy]/=I,";
    var v1351 = v1372 + "/aa[agr]/=K,";
    var v1327 = v1351 + "/[tu][tu][agr]/=L,";
    var v1303 = v1327 + "/a[tu][agr]/=M,";
    var v1277 = v1303 + "/aa[tucy]/=N,";
    var v1248 = v1277 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1211 = v1248 + "/ca[agr]/=Q,";
    var v1169 = v1211 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1121 = v1169 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1043 = v1121 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v915 = v1043 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v684 = v915 + "/[tu]g[agr]/=W,";
    var v307 = v684 + "/[tu]a[ctuy]/=Y,";
    return v307 + "/[tu]a[agr]/=*";
  }
  var v685 = type$$25.toLowerCase();
  var v310 = v685 == "transl_table=4";
  if (v310) {
    var v1486 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1469 = v1486 + "/ga[tcuy]/=D,";
    var v1452 = v1469 + "/ga[agr]/=E,";
    var v1434 = v1452 + "/[tu][tu][tcuy]/=F,";
    var v1415 = v1434 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1394 = v1415 + "/ca[tcuy]/=H,";
    var v1373 = v1394 + "/a[tu][atcuwmhy]/=I,";
    var v1352 = v1373 + "/aa[agr]/=K,";
    var v1328 = v1352 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1304 = v1328 + "/a[tu]g/=M,";
    var v1278 = v1304 + "/aa[tucy]/=N,";
    var v1249 = v1278 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1212 = v1249 + "/ca[agr]/=Q,";
    var v1170 = v1212 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1122 = v1170 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1044 = v1122 + "/ac[acgturyswkmbdhvn]/=T,";
    var v916 = v1044 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v686 = v916 + "/[tu]g[agr]/=W,";
    var v309 = v686 + "/[tu]a[ctuy]/=Y,";
    return v309 + "/[tu]a[agr]/=*";
  }
  var v687 = type$$25.toLowerCase();
  var v312 = v687 == "transl_table=5";
  if (v312) {
    var v1487 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1470 = v1487 + "/ga[tcuy]/=D,";
    var v1453 = v1470 + "/ga[agr]/=E,";
    var v1435 = v1453 + "/[tu][tu][tcuy]/=F,";
    var v1416 = v1435 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1395 = v1416 + "/ca[tcuy]/=H,";
    var v1374 = v1395 + "/a[tu][tcuy]/=I,";
    var v1353 = v1374 + "/aa[agr]/=K,";
    var v1329 = v1353 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1305 = v1329 + "/a[tu][agr]/=M,";
    var v1279 = v1305 + "/aa[tucy]/=N,";
    var v1250 = v1279 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1213 = v1250 + "/ca[agr]/=Q,";
    var v1171 = v1213 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1123 = v1171 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1045 = v1123 + "/ac[acgturyswkmbdhvn]/=T,";
    var v917 = v1045 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v688 = v917 + "/[tu]g[agr]/=W,";
    var v311 = v688 + "/[tu]a[ctuy]/=Y,";
    return v311 + "/[tu]a[agr]/=*";
  }
  var v689 = type$$25.toLowerCase();
  var v314 = v689 == "transl_table=6";
  if (v314) {
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
    var v1214 = v1251 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v1172 = v1214 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1124 = v1172 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1046 = v1124 + "/ac[acgturyswkmbdhvn]/=T,";
    var v918 = v1046 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v690 = v918 + "/[tu]gg/=W,";
    var v313 = v690 + "/[tu]a[ctuy]/=Y,";
    return v313 + "/[tu]ga/=*";
  }
  var v691 = type$$25.toLowerCase();
  var v316 = v691 == "transl_table=9";
  if (v316) {
    var v1489 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1472 = v1489 + "/ga[tcuy]/=D,";
    var v1455 = v1472 + "/ga[agr]/=E,";
    var v1437 = v1455 + "/[tu][tu][tcuy]/=F,";
    var v1418 = v1437 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1397 = v1418 + "/ca[tcuy]/=H,";
    var v1376 = v1397 + "/a[tu][atcuwmhy]/=I,";
    var v1355 = v1376 + "/aag/=K,";
    var v1331 = v1355 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1307 = v1331 + "/a[tu]g/=M,";
    var v1281 = v1307 + "/aa[atcuwmhy]/=N,";
    var v1252 = v1281 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1215 = v1252 + "/ca[agr]/=Q,";
    var v1173 = v1215 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1125 = v1173 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1047 = v1125 + "/ac[acgturyswkmbdhvn]/=T,";
    var v919 = v1047 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v692 = v919 + "/[tu]g[agr]/=W,";
    var v315 = v692 + "/[tu]a[ctuy]/=Y,";
    return v315 + "/[tu]a[agr]/=*";
  }
  var v693 = type$$25.toLowerCase();
  var v318 = v693 == "transl_table=10";
  if (v318) {
    var v1490 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1473 = v1490 + "/ga[tcuy]/=D,";
    var v1456 = v1473 + "/ga[agr]/=E,";
    var v1438 = v1456 + "/[tu][tu][tcuy]/=F,";
    var v1419 = v1438 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1398 = v1419 + "/ca[tcuy]/=H,";
    var v1377 = v1398 + "/a[tu][atcuwmhy]/=I,";
    var v1356 = v1377 + "/aa[agr]/=K,";
    var v1332 = v1356 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1308 = v1332 + "/a[tu]g/=M,";
    var v1282 = v1308 + "/aa[tucy]/=N,";
    var v1253 = v1282 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1216 = v1253 + "/ca[agr]/=Q,";
    var v1174 = v1216 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1126 = v1174 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1048 = v1126 + "/ac[acgturyswkmbdhvn]/=T,";
    var v920 = v1048 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v694 = v920 + "/[tu]gg/=W,";
    var v317 = v694 + "/[tu]a[ctuy]/=Y,";
    return v317 + "/[tu]a[agr]/=*";
  }
  var v695 = type$$25.toLowerCase();
  var v320 = v695 == "transl_table=11";
  if (v320) {
    var v1491 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1474 = v1491 + "/ga[tcuy]/=D,";
    var v1457 = v1474 + "/ga[agr]/=E,";
    var v1439 = v1457 + "/[tu][tu][tcuy]/=F,";
    var v1420 = v1439 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1399 = v1420 + "/ca[tcuy]/=H,";
    var v1378 = v1399 + "/a[tu][atcuwmhy]/=I,";
    var v1357 = v1378 + "/aa[agr]/=K,";
    var v1333 = v1357 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1309 = v1333 + "/a[tu]g/=M,";
    var v1283 = v1309 + "/aa[tucy]/=N,";
    var v1254 = v1283 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1217 = v1254 + "/ca[agr]/=Q,";
    var v1175 = v1217 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1127 = v1175 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1049 = v1127 + "/ac[acgturyswkmbdhvn]/=T,";
    var v921 = v1049 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v696 = v921 + "/[tu]gg/=W,";
    var v319 = v696 + "/[tu]a[ctuy]/=Y,";
    return v319 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v697 = type$$25.toLowerCase();
  var v322 = v697 == "transl_table=12";
  if (v322) {
    var v1492 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1475 = v1492 + "/ga[tcuy]/=D,";
    var v1458 = v1475 + "/ga[agr]/=E,";
    var v1440 = v1458 + "/[tu][tu][tcuy]/=F,";
    var v1421 = v1440 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1400 = v1421 + "/ca[tcuy]/=H,";
    var v1379 = v1400 + "/a[tu][atcuwmhy]/=I,";
    var v1358 = v1379 + "/aa[agr]/=K,";
    var v1334 = v1358 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1310 = v1334 + "/a[tu]g/=M,";
    var v1284 = v1310 + "/aa[tucy]/=N,";
    var v1255 = v1284 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1218 = v1255 + "/ca[agr]/=Q,";
    var v1176 = v1218 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1128 = v1176 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v1050 = v1128 + "/ac[acgturyswkmbdhvn]/=T,";
    var v922 = v1050 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v698 = v922 + "/[tu]gg/=W,";
    var v321 = v698 + "/[tu]a[ctuy]/=Y,";
    return v321 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v699 = type$$25.toLowerCase();
  var v324 = v699 == "transl_table=13";
  if (v324) {
    var v1493 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1476 = v1493 + "/ga[tcuy]/=D,";
    var v1459 = v1476 + "/ga[agr]/=E,";
    var v1441 = v1459 + "/[tu][tu][tcuy]/=F,";
    var v1422 = v1441 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1401 = v1422 + "/ca[tcuy]/=H,";
    var v1380 = v1401 + "/a[tu][tcuy]/=I,";
    var v1359 = v1380 + "/aa[agr]/=K,";
    var v1335 = v1359 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1311 = v1335 + "/a[tu][agr]/=M,";
    var v1285 = v1311 + "/aa[tucy]/=N,";
    var v1256 = v1285 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1219 = v1256 + "/ca[agr]/=Q,";
    var v1177 = v1219 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1129 = v1177 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1051 = v1129 + "/ac[acgturyswkmbdhvn]/=T,";
    var v923 = v1051 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v700 = v923 + "/[tu]g[agr]/=W,";
    var v323 = v700 + "/[tu]a[ctuy]/=Y,";
    return v323 + "/[tu]a[agr]/=*";
  }
  var v701 = type$$25.toLowerCase();
  var v326 = v701 == "transl_table=14";
  if (v326) {
    var v1494 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1477 = v1494 + "/ga[tcuy]/=D,";
    var v1460 = v1477 + "/ga[agr]/=E,";
    var v1442 = v1460 + "/[tu][tu][tcuy]/=F,";
    var v1423 = v1442 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1402 = v1423 + "/ca[tcuy]/=H,";
    var v1381 = v1402 + "/a[tu][atcuwmhy]/=I,";
    var v1360 = v1381 + "/aag/=K,";
    var v1336 = v1360 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1312 = v1336 + "/a[tu]g/=M,";
    var v1286 = v1312 + "/aa[atcuwmhy]/=N,";
    var v1257 = v1286 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1220 = v1257 + "/ca[agr]/=Q,";
    var v1178 = v1220 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1130 = v1178 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1052 = v1130 + "/ac[acgturyswkmbdhvn]/=T,";
    var v924 = v1052 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v702 = v924 + "/[tu]g[agr]/=W,";
    var v325 = v702 + "/[tu]a[atcuwmhy]/=Y,";
    return v325 + "/[tu]ag/=*";
  }
  var v703 = type$$25.toLowerCase();
  var v328 = v703 == "transl_table=15";
  if (v328) {
    var v1495 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1478 = v1495 + "/ga[tcuy]/=D,";
    var v1461 = v1478 + "/ga[agr]/=E,";
    var v1443 = v1461 + "/[tu][tu][tcuy]/=F,";
    var v1424 = v1443 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1403 = v1424 + "/ca[tcuy]/=H,";
    var v1382 = v1403 + "/a[tu][atcuwmhy]/=I,";
    var v1361 = v1382 + "/aa[agr]/=K,";
    var v1337 = v1361 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1313 = v1337 + "/a[tu]g/=M,";
    var v1287 = v1313 + "/aa[tucy]/=N,";
    var v1258 = v1287 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1221 = v1258 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v1179 = v1221 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1131 = v1179 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1053 = v1131 + "/ac[acgturyswkmbdhvn]/=T,";
    var v925 = v1053 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v704 = v925 + "/[tu]gg/=W,";
    var v327 = v704 + "/[tu]a[ctuy]/=Y,";
    return v327 + "/[tu][agr]a/=*";
  }
  var v705 = type$$25.toLowerCase();
  var v330 = v705 == "transl_table=16";
  if (v330) {
    var v1496 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1479 = v1496 + "/ga[tcuy]/=D,";
    var v1462 = v1479 + "/ga[agr]/=E,";
    var v1444 = v1462 + "/[tu][tu][tcuy]/=F,";
    var v1425 = v1444 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1404 = v1425 + "/ca[tcuy]/=H,";
    var v1383 = v1404 + "/a[tu][atcuwmhy]/=I,";
    var v1362 = v1383 + "/aa[agr]/=K,";
    var v1338 = v1362 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1314 = v1338 + "/a[tu]g/=M,";
    var v1288 = v1314 + "/aa[tucy]/=N,";
    var v1259 = v1288 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1222 = v1259 + "/ca[agr]/=Q,";
    var v1180 = v1222 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1132 = v1180 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1054 = v1132 + "/ac[acgturyswkmbdhvn]/=T,";
    var v926 = v1054 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v706 = v926 + "/[tu]gg/=W,";
    var v329 = v706 + "/[tu]a[ctuy]/=Y,";
    return v329 + "/[tu][agr]a/=*";
  }
  var v707 = type$$25.toLowerCase();
  var v332 = v707 == "transl_table=21";
  if (v332) {
    var v1497 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1480 = v1497 + "/ga[tcuy]/=D,";
    var v1463 = v1480 + "/ga[agr]/=E,";
    var v1445 = v1463 + "/[tu][tu][tcuy]/=F,";
    var v1426 = v1445 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1405 = v1426 + "/ca[tcuy]/=H,";
    var v1384 = v1405 + "/a[tu][tcuy]/=I,";
    var v1363 = v1384 + "/aag/=K,";
    var v1339 = v1363 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1315 = v1339 + "/a[tu][agr]/=M,";
    var v1289 = v1315 + "/aa[atcuwmhy]/=N,";
    var v1260 = v1289 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1223 = v1260 + "/ca[agr]/=Q,";
    var v1181 = v1223 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1133 = v1181 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1055 = v1133 + "/ac[acgturyswkmbdhvn]/=T,";
    var v927 = v1055 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v708 = v927 + "/[tu]g[agr]/=W,";
    var v331 = v708 + "/[tu]a[ctuy]/=Y,";
    return v331 + "/[tu]a[agr]/=*";
  }
  var v709 = type$$25.toLowerCase();
  var v334 = v709 == "transl_table=22";
  if (v334) {
    var v1498 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1481 = v1498 + "/ga[tcuy]/=D,";
    var v1464 = v1481 + "/ga[agr]/=E,";
    var v1446 = v1464 + "/[tu][tu][tcuy]/=F,";
    var v1427 = v1446 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1406 = v1427 + "/ca[tcuy]/=H,";
    var v1385 = v1406 + "/a[tu][atcuwmhy]/=I,";
    var v1364 = v1385 + "/aa[agr]/=K,";
    var v1340 = v1364 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1316 = v1340 + "/a[tu]g/=M,";
    var v1290 = v1316 + "/aa[tucy]/=N,";
    var v1261 = v1290 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1224 = v1261 + "/ca[agr]/=Q,";
    var v1182 = v1224 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1134 = v1182 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v1056 = v1134 + "/ac[acgturyswkmbdhvn]/=T,";
    var v928 = v1056 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v710 = v928 + "/[tu]gg/=W,";
    var v333 = v710 + "/[tu]a[ctuy]/=Y,";
    return v333 + "/[tu][agcrsmv]a/=*";
  }
  var v711 = type$$25.toLowerCase();
  var v336 = v711 == "transl_table=23";
  if (v336) {
    var v1499 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1482 = v1499 + "/ga[tcuy]/=D,";
    var v1465 = v1482 + "/ga[agr]/=E,";
    var v1447 = v1465 + "/[tu][tu][tcuy]/=F,";
    var v1428 = v1447 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1407 = v1428 + "/ca[tcuy]/=H,";
    var v1386 = v1407 + "/a[tu][atcuwmhy]/=I,";
    var v1365 = v1386 + "/aa[agr]/=K,";
    var v1341 = v1365 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1317 = v1341 + "/a[tu]g/=M,";
    var v1291 = v1317 + "/aa[tucy]/=N,";
    var v1262 = v1291 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1225 = v1262 + "/ca[agr]/=Q,";
    var v1183 = v1225 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1135 = v1183 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1057 = v1135 + "/ac[acgturyswkmbdhvn]/=T,";
    var v929 = v1057 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v712 = v929 + "/[tu]gg/=W,";
    var v335 = v712 + "/[tu]a[ctuy]/=Y,";
    return v335 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*";
  }
  return true;
}
function mutateForDigest(theDocument) {
  var newDna = "";
  var mutatedDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E4;
  var TOPOLOGY = "linear";
  var v713 = testScript();
  var v337 = v713 == false;
  if (v337) {
    return false;
  }
  var restrictionSiteCollection;
  var mutatedRestrictionSitesCollection;
  var v1226 = theDocument.forms;
  var v1184 = v1226[0];
  var v1136 = v1184.elements;
  var v1058 = v1136[7];
  var v930 = v1058.options;
  var v1227 = theDocument.forms;
  var v1185 = v1227[0];
  var v1137 = v1185.elements;
  var v1059 = v1137[7];
  var v931 = v1059.selectedIndex;
  var v714 = v930[v931];
  var v338 = v714.value;
  var geneticCode = getGeneticCodeString(v338);
  var v1186 = theDocument.forms;
  var v1138 = v1186[0];
  var v1060 = v1138.elements;
  var v932 = v1060[4];
  var v715 = v932.options;
  var v1187 = theDocument.forms;
  var v1139 = v1187[0];
  var v1061 = v1139.elements;
  var v933 = v1061[4];
  var v716 = v933.selectedIndex;
  var v339 = v715[v716];
  var restrictionSites = v339.value;
  var v1228 = theDocument.forms;
  var v1188 = v1228[0];
  var v1140 = v1188.elements;
  var v1062 = v1140[0];
  var v934 = checkFormElement(v1062);
  var v717 = v934 == false;
  var v936 = !v717;
  if (v936) {
    var v1263 = theDocument.forms;
    var v1229 = v1263[0];
    var v1189 = v1229.elements;
    var v1141 = v1189[0];
    var v1063 = v1141.value;
    var v935 = checkSequenceLength(v1063, maxInput$$3);
    v717 = v935 == false;
  }
  var v340 = v717;
  if (v340) {
    return false;
  }
  geneticCode = JAM.call(geneticCode.split, geneticCode, [/,/], JAM.policy.p17);
  var v718 = checkGeneticCode(geneticCode);
  var v341 = v718 == false;
  if (v341) {
    return false;
  }
  restrictionSites = JAM.call(restrictionSites.split, restrictionSites, [/,/], JAM.policy.p17);
  var v719 = checkRestPatterns(restrictionSites);
  var v342 = v719 == false;
  if (v342) {
    return false;
  }
  var mutatedRestrictionSites = buildMutatedRestrictionSites(restrictionSites);
  openWindow("Mutate for Digest");
  openPre();
  var v343 = outputWindow.document;
  var v720 = '<span class="mutated_sequence">' + "sequence and translations for mutated version";
  var v344 = v720 + "</span>\n";
  JAM.call(v343.write, v343, [v344], JAM.policy.p15);
  var v345 = outputWindow.document;
  var v721 = '<span class="current_sequence">' + "sequence and translations for non-mutated version";
  var v346 = v721 + "</span>\n";
  JAM.call(v345.write, v345, [v346], JAM.policy.p15);
  var v347 = outputWindow.document;
  JAM.call(v347.write, v347, ["\n"], JAM.policy.p9);
  var v1142 = theDocument.forms;
  var v1064 = v1142[0];
  var v937 = v1064.elements;
  var v722 = v937[0];
  var v348 = v722.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v348);
  var i$$11 = 0;
  var v723 = arrayOfFasta$$1.length;
  var v356 = i$$11 < v723;
  for (;v356;) {
    var v349 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v349);
    var v350 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v350);
    newDna = removeNonDna(newDna);
    var v351 = outputWindow.document;
    var v352 = getInfoFromTitleAndSequenceAndTopology(title$$9, newDna, TOPOLOGY);
    JAM.call(v351.write, v351, [v352], JAM.policy.p15);
    restrictionSiteCollection = findRestrictionSites(newDna, restrictionSites, TOPOLOGY);
    restrictionSiteCollection.sortRestrictionSites();
    mutatedRestrictionSiteCollection = findRestrictionSites(newDna, mutatedRestrictionSites, TOPOLOGY);
    mutatedRestrictionSiteCollection = removeNormalMatchesFromMutantSites(mutatedRestrictionSiteCollection, restrictionSiteCollection);
    mutatedRestrictionSiteCollection = removeOverlappingMatchesFromMutantSites(mutatedRestrictionSiteCollection);
    mutatedDna = buildMutatedDna(newDna, mutatedRestrictionSiteCollection);
    var v1230 = theDocument.forms;
    var v1190 = v1230[0];
    var v1143 = v1190.elements;
    var v1065 = v1143[5];
    var v938 = v1065.options;
    var v1231 = theDocument.forms;
    var v1191 = v1231[0];
    var v1144 = v1191.elements;
    var v1066 = v1144[5];
    var v939 = v1066.selectedIndex;
    var v724 = v938[v939];
    var v353 = v724.value;
    var v1232 = theDocument.forms;
    var v1192 = v1232[0];
    var v1145 = v1192.elements;
    var v1067 = v1145[6];
    var v940 = v1067.options;
    var v1233 = theDocument.forms;
    var v1193 = v1233[0];
    var v1146 = v1193.elements;
    var v1068 = v1146[6];
    var v941 = v1068.selectedIndex;
    var v725 = v940[v941];
    var v354 = v725.value;
    layoutRestTrans(newDna, mutatedDna, geneticCode, restrictionSiteCollection, mutatedRestrictionSiteCollection, v353, v354);
    var v355 = outputWindow.document;
    JAM.call(v355.write, v355, ["\n\n"], JAM.policy.p9);
    i$$11++;
    var v726 = arrayOfFasta$$1.length;
    v356 = i$$11 < v726;
  }
  closePre();
  closeWindow();
  return true;
}
function layoutRestTrans(dnaSequence$$3, mutatedDnaSequence, geneticCode$$1, restrictionSiteCollection$$1, mutatedRestrictionSiteCollection$$1, basesPerLine, readingFrame) {
  basesPerLine = parseInt(basesPerLine);
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var spaceString = "                                                                                                                                  ";
  var textLayout = new TextLayout;
  var v727 = readingFrame == "3";
  var v942 = !v727;
  if (v942) {
    v727 = readingFrame == "all_three";
  }
  var v359 = v727;
  if (v359) {
    var translationMut = new TranslationComponent;
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    var v1069 = dnaSequence$$3.length;
    var v943 = JAM.call(mutatedDnaSequence.substring, mutatedDnaSequence, [2, v1069], JAM.policy.p13);
    var v728 = translate(v943, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v357 = "  " + v728;
    JAM.call(translationMut.setCharacters, translationMut, [v357], JAM.policy.p15);
    JAM.call(textLayout.addComponent, textLayout, [translationMut], JAM.policy.p15);
    var translation = new TranslationComponent;
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    var v1070 = dnaSequence$$3.length;
    var v944 = JAM.call(dnaSequence$$3.substring, dnaSequence$$3, [2, v1070], JAM.policy.p13);
    var v729 = translate(v944, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v358 = "  " + v729;
    JAM.call(translation.setCharacters, translation, [v358], JAM.policy.p15);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p15);
  }
  var v730 = readingFrame == "2";
  var v945 = !v730;
  if (v945) {
    v730 = readingFrame == "all_three";
  }
  var v362 = v730;
  if (v362) {
    translationMut = new TranslationComponent;
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    var v1071 = dnaSequence$$3.length;
    var v946 = JAM.call(mutatedDnaSequence.substring, mutatedDnaSequence, [1, v1071], JAM.policy.p13);
    var v731 = translate(v946, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v360 = " " + v731;
    JAM.call(translationMut.setCharacters, translationMut, [v360], JAM.policy.p15);
    JAM.call(textLayout.addComponent, textLayout, [translationMut], JAM.policy.p15);
    translation = new TranslationComponent;
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    var v1072 = dnaSequence$$3.length;
    var v947 = JAM.call(dnaSequence$$3.substring, dnaSequence$$3, [1, v1072], JAM.policy.p13);
    var v732 = translate(v947, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v361 = " " + v732;
    JAM.call(translation.setCharacters, translation, [v361], JAM.policy.p15);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p15);
  }
  var v733 = readingFrame == "1";
  var v948 = !v733;
  if (v948) {
    v733 = readingFrame == "all_three";
  }
  var v365 = v733;
  if (v365) {
    translationMut = new TranslationComponent;
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    var v363 = translate(mutatedDnaSequence, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    JAM.call(translationMut.setCharacters, translationMut, [v363], JAM.policy.p15);
    JAM.call(textLayout.addComponent, textLayout, [translationMut], JAM.policy.p15);
    translation = new TranslationComponent;
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    var v364 = translate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    JAM.call(translation.setCharacters, translation, [v364], JAM.policy.p15);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p15);
  }
  var v368 = readingFrame == "uppercase";
  if (v368) {
    translationMut = new UppercaseTranslationComponent;
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    var v366 = uppercaseTranslate(mutatedDnaSequence, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    JAM.call(translationMut.setCharacters, translationMut, [v366], JAM.policy.p15);
    JAM.call(textLayout.addComponent, textLayout, [translationMut], JAM.policy.p15);
    translation = new UppercaseTranslationComponent;
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    var v367 = uppercaseTranslate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    JAM.call(translation.setCharacters, translation, [v367], JAM.policy.p15);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p15);
  }
  var dnaMut = new DnaComponent;
  dnaMut.spanStart = '<span class="mutated_sequence">';
  dnaMut.spanEnd = "</span>";
  JAM.call(dnaMut.setCharacters, dnaMut, [mutatedDnaSequence], JAM.policy.p15);
  JAM.call(textLayout.addComponent, textLayout, [dnaMut], JAM.policy.p15);
  var dna = new DnaComponent;
  dna.spanStart = '<span class="current_sequence">';
  dna.spanEnd = "</span>";
  JAM.call(dna.setCharacters, dna, [dnaSequence$$3], JAM.policy.p15);
  JAM.call(textLayout.addComponent, textLayout, [dna], JAM.policy.p15);
  var sitesInRange = new Array;
  var sitesInRangeMut = new Array;
  var i$$12 = 0;
  var v734 = dnaSequence$$3.length;
  var v378 = i$$12 < v734;
  for (;v378;) {
    var v369 = i$$12 + basesPerLine;
    sitesInRange = JAM.call(restrictionSiteCollection$$1.getSitesInRange, restrictionSiteCollection$$1, [i$$12, v369], JAM.policy.p16);
    var v370 = i$$12 + basesPerLine;
    sitesInRangeMut = JAM.call(mutatedRestrictionSiteCollection$$1.getSitesInRange, mutatedRestrictionSiteCollection$$1, [i$$12, v370], JAM.policy.p16);
    sitesInRange.reverse();
    sitesInRangeMut.reverse();
    var j$$10 = 0;
    var v735 = sitesInRangeMut.length;
    var v373 = j$$10 < v735;
    for (;v373;) {
      var v371 = outputWindow.document;
      var v1264 = sitesInRangeMut[j$$10];
      var v1234 = v1264.position;
      var v1194 = v1234 - i$$12;
      var v1147 = v1194 + 9;
      var v1073 = JAM.call(spaceString.substring, spaceString, [0, v1147], JAM.policy.p13);
      var v949 = v1073 + '<span class="mutated_sequence">';
      var v1074 = sitesInRangeMut[j$$10];
      var v950 = v1074.label;
      var v736 = v949 + v950;
      var v372 = v736 + "</span>\n";
      JAM.call(v371.write, v371, [v372], JAM.policy.p15);
      j$$10++;
      var v737 = sitesInRangeMut.length;
      v373 = j$$10 < v737;
    }
    j$$10 = 0;
    var v738 = sitesInRange.length;
    var v376 = j$$10 < v738;
    for (;v376;) {
      var v374 = outputWindow.document;
      var v1265 = sitesInRange[j$$10];
      var v1235 = v1265.position;
      var v1195 = v1235 - i$$12;
      var v1148 = v1195 + 9;
      var v1075 = JAM.call(spaceString.substring, spaceString, [0, v1148], JAM.policy.p13);
      var v951 = v1075 + '<span class="current_sequence">';
      var v1076 = sitesInRange[j$$10];
      var v952 = v1076.label;
      var v739 = v951 + v952;
      var v375 = v739 + "</span>\n";
      JAM.call(v374.write, v374, [v375], JAM.policy.p15);
      j$$10++;
      var v740 = sitesInRange.length;
      v376 = j$$10 < v740;
    }
    var v377 = i$$12 + basesPerLine;
    JAM.call(textLayout.writeLayout, textLayout, [i$$12, v377], JAM.policy.p16);
    i$$12 = i$$12 + basesPerLine;
    var v741 = dnaSequence$$3.length;
    v378 = i$$12 < v741;
  }
  return true;
}
function translate(dnaSequence$$4, geneticCodeMatchExp$$3, geneticCodeMatchResult$$3) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    var v379 = " " + p1$$2;
    return v379 + " ";
  }
  var v953 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v742 = v953.length;
  var v380 = v742 < 3;
  if (v380) {
    return "";
  }
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/(...)/g, v2], JAM.policy.p16);
  var i$$13 = 0;
  var v743 = geneticCodeMatchExp$$3.length;
  var v383 = i$$13 < v743;
  for (;v383;) {
    var v381 = geneticCodeMatchExp$$3[i$$13];
    var v382 = geneticCodeMatchResult$$3[i$$13];
    dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [v381, v382], JAM.policy.p27);
    i$$13++;
    var v744 = geneticCodeMatchExp$$3.length;
    v383 = i$$13 < v744;
  }
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/\S{3}/g, "X"], JAM.policy.p16);
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/\s\S{1,2}$/, ""], JAM.policy.p16);
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/^\s/, ""], JAM.policy.p16);
  return dnaSequence$$4;
}
function uppercaseTranslate(dnaSequence$$5, geneticCodeMatchExp$$4, geneticCodeMatchResult$$4) {
  function v3(str$$9, p1$$3, p2, p3, p4, p5, p6, offset$$11, s$$5) {
    var v1196 = " " + p1$$3;
    var v1149 = v1196 + p3;
    var v1077 = v1149 + p5;
    var v954 = v1077 + " ";
    var v745 = v954 + p2;
    var v384 = v745 + p4;
    return v384 + p6;
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/[a-z]/g, " "], JAM.policy.p16);
  var v955 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v746 = v955.length;
  var v385 = v746 < 3;
  if (v385) {
    return "";
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/([A-Z])(\s*)([A-Z])(\s*)([A-Z])(\s*)/g, v3], JAM.policy.p16);
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/\s\S{1,2}\s/g, ""], JAM.policy.p16);
  var i$$14 = 0;
  var v747 = geneticCodeMatchExp$$4.length;
  var v388 = i$$14 < v747;
  for (;v388;) {
    var v386 = geneticCodeMatchExp$$4[i$$14];
    var v387 = geneticCodeMatchResult$$4[i$$14];
    dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [v386, v387], JAM.policy.p27);
    i$$14++;
    var v748 = geneticCodeMatchExp$$4.length;
    v388 = i$$14 < v748;
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/\S{3}/g, "X"], JAM.policy.p16);
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/^\s/, ""], JAM.policy.p16);
  return dnaSequence$$5;
}
function buildMutatedRestrictionSites(restrictionSites$$1) {
  var mutatedRestrictionSites$$1 = new Array;
  var i$$15 = 0;
  var v749 = restrictionSites$$1.length;
  var v410 = i$$15 < v749;
  for (;v410;) {
    var v1078 = restrictionSites$$1[i$$15];
    var v956 = JAM.call(v1078.match, v1078, [/\/.+\//], JAM.policy.p17);
    var v750 = v956.toString();
    var v389 = JAM.call(v750.replace, v750, [/[\/\\]/g, ""], JAM.policy.p16);
    var site = v389.toLowerCase();
    var v751 = restrictionSites$$1[i$$15];
    var v390 = JAM.call(v751.match, v751, [/\([^\(]+\)/], JAM.policy.p17);
    var label = v390.toString();
    var v1079 = restrictionSites$$1[i$$15];
    var v957 = JAM.call(v1079.match, v1079, [/\)\D*\d+/], JAM.policy.p17);
    var v752 = v957.toString();
    var v391 = JAM.call(v752.replace, v752, [/\)\D*/, ""], JAM.policy.p16);
    var cutDistance$$1 = parseFloat(v391);
    var singleDegenSites = new Array;
    var doubleDegenSites = new Array;
    var j$$11 = 0;
    var v753 = site.length;
    var v396 = j$$11 < v753;
    for (;v396;) {
      var v958 = JAM.call(site.charAt, site, [j$$11], JAM.policy.p15);
      var v754 = v958 != "n";
      if (v754) {
        var v959 = JAM.call(site.charAt, site, [j$$11], JAM.policy.p15);
        v754 = v959 != "N";
      }
      var v395 = v754;
      if (v395) {
        var pre = JAM.call(site.substring, site, [0, j$$11], JAM.policy.p13);
        var v392 = j$$11 + 1;
        var v393 = site.length;
        var post = JAM.call(site.substring, site, [v392, v393], JAM.policy.p27);
        var v394 = pre + "N";
        var newSite = v394 + post;
        JAM.call(singleDegenSites.push, singleDegenSites, [newSite], JAM.policy.p15);
      }
      j$$11++;
      var v755 = site.length;
      v396 = j$$11 < v755;
    }
    var v756 = site.length;
    var v405 = v756 > 6;
    if (v405) {
      j$$11 = 0;
      var v757 = singleDegenSites.length;
      var v404 = j$$11 < v757;
      for (;v404;) {
        var k$$3 = 0;
        var v960 = singleDegenSites[j$$11];
        var v758 = v960.length;
        var v403 = k$$3 < v758;
        for (;v403;) {
          var v1080 = singleDegenSites[j$$11];
          var v961 = JAM.call(v1080.charAt, v1080, [k$$3], JAM.policy.p15);
          var v759 = v961 != "n";
          if (v759) {
            var v1081 = singleDegenSites[j$$11];
            var v962 = JAM.call(v1081.charAt, v1081, [k$$3], JAM.policy.p15);
            v759 = v962 != "N";
          }
          var v402 = v759;
          if (v402) {
            var v397 = singleDegenSites[j$$11];
            pre = JAM.call(v397.substring, v397, [0, k$$3], JAM.policy.p13);
            var v398 = singleDegenSites[j$$11];
            var v399 = k$$3 + 1;
            var v760 = singleDegenSites[j$$11];
            var v400 = v760.length;
            post = JAM.call(v398.substring, v398, [v399, v400], JAM.policy.p16);
            var v401 = pre + "N";
            newSite = v401 + post;
            JAM.call(doubleDegenSites.push, doubleDegenSites, [newSite], JAM.policy.p15);
          }
          k$$3++;
          var v963 = singleDegenSites[j$$11];
          var v761 = v963.length;
          v403 = k$$3 < v761;
        }
        j$$11++;
        var v762 = singleDegenSites.length;
        v404 = j$$11 < v762;
      }
    }
    j$$11 = 0;
    var v763 = singleDegenSites.length;
    var v407 = j$$11 < v763;
    for (;v407;) {
      var v1197 = singleDegenSites[j$$11];
      var v1150 = "/" + v1197;
      var v1082 = v1150 + "/";
      var v964 = v1082 + " ";
      var v764 = v964 + label;
      var v406 = v764 + cutDistance$$1;
      JAM.call(mutatedRestrictionSites$$1.push, mutatedRestrictionSites$$1, [v406], JAM.policy.p15);
      j$$11++;
      var v765 = singleDegenSites.length;
      v407 = j$$11 < v765;
    }
    j$$11 = 0;
    var v766 = doubleDegenSites.length;
    var v409 = j$$11 < v766;
    for (;v409;) {
      var v1198 = doubleDegenSites[j$$11];
      var v1151 = "/" + v1198;
      var v1083 = v1151 + "/";
      var v965 = v1083 + " ";
      var v767 = v965 + label;
      var v408 = v767 + cutDistance$$1;
      JAM.call(mutatedRestrictionSites$$1.push, mutatedRestrictionSites$$1, [v408], JAM.policy.p15);
      j$$11++;
      var v768 = doubleDegenSites.length;
      v409 = j$$11 < v768;
    }
    i$$15++;
    var v769 = restrictionSites$$1.length;
    v410 = i$$15 < v769;
  }
  return mutatedRestrictionSites$$1;
}
function removeNormalMatchesFromMutantSites(mutatedRestrictionSiteCollection$$2, restrictionSiteCollection$$2) {
  var originalMutatedRestrictionSites = new Array;
  var i$$16 = 0;
  var v966 = mutatedRestrictionSiteCollection$$2.restrictionSites;
  var v770 = v966.length;
  var v415 = i$$16 < v770;
  for (;v415;) {
    var v411 = mutatedRestrictionSiteCollection$$2.restrictionSites;
    var mutatedSite = v411[i$$16];
    var isOriginal = true;
    var j$$12 = 0;
    var v967 = restrictionSiteCollection$$2.restrictionSites;
    var v771 = v967.length;
    var v414 = j$$12 < v771;
    for (;v414;) {
      var v412 = restrictionSiteCollection$$2.restrictionSites;
      var normalSite = v412[j$$12];
      var v772 = normalSite.position;
      var v773 = mutatedSite.position;
      var v413 = v772 == v773;
      if (v413) {
        isOriginal = false;
        break;
      }
      j$$12++;
      var v968 = restrictionSiteCollection$$2.restrictionSites;
      var v774 = v968.length;
      v414 = j$$12 < v774;
    }
    if (isOriginal) {
      JAM.call(originalMutatedRestrictionSites.push, originalMutatedRestrictionSites, [mutatedSite], JAM.policy.p15);
    }
    i$$16++;
    var v969 = mutatedRestrictionSiteCollection$$2.restrictionSites;
    var v775 = v969.length;
    v415 = i$$16 < v775;
  }
  mutatedRestrictionSiteCollection$$2.restrictionSites = originalMutatedRestrictionSites;
  return mutatedRestrictionSiteCollection$$2;
}
function removeOverlappingMatchesFromMutantSites(mutatedRestrictionSiteCollection$$3) {
  var originalMutatedRestrictionSites$$1 = new Array;
  var i$$17 = 0;
  var v970 = mutatedRestrictionSiteCollection$$3.restrictionSites;
  var v776 = v970.length;
  var v427 = i$$17 < v776;
  for (;v427;) {
    var v416 = mutatedRestrictionSiteCollection$$3.restrictionSites;
    var mutatedSite$$1 = v416[i$$17];
    var isOriginal$$1 = true;
    var j$$13 = 0;
    var v777 = originalMutatedRestrictionSites$$1.length;
    var v426 = j$$13 < v777;
    for (;v426;) {
      var mutatedSiteJ = originalMutatedRestrictionSites$$1[j$$13];
      var v971 = mutatedSiteJ.position;
      var v972 = mutatedSiteJ.cutDistance;
      var v778 = v971 + v972;
      var v973 = mutatedSiteJ.iupacPattern;
      var v779 = v973.length;
      var v417 = v778 - v779;
      var startRangeJ = v417 - 2;
      var v974 = mutatedSiteJ.position;
      var v975 = mutatedSiteJ.cutDistance;
      var v780 = v974 + v975;
      var v418 = v780 - 1;
      var endRangeJ = v418 + 2;
      var v781 = mutatedSite$$1.position;
      var v782 = mutatedSite$$1.cutDistance;
      var v419 = v781 + v782;
      var v783 = mutatedSite$$1.iupacPattern;
      var v420 = v783.length;
      var startRange = v419 - v420;
      var v784 = mutatedSite$$1.position;
      var v785 = mutatedSite$$1.cutDistance;
      var v421 = v784 + v785;
      var endRange = v421 - 1;
      var v786 = startRange <= startRangeJ;
      if (v786) {
        v786 = endRange >= startRangeJ;
      }
      var v422 = v786;
      if (v422) {
        isOriginal$$1 = false;
        break;
      }
      var v787 = startRange <= endRangeJ;
      if (v787) {
        v787 = endRange >= endRangeJ;
      }
      var v423 = v787;
      if (v423) {
        isOriginal$$1 = false;
        break;
      }
      var v788 = startRange <= startRangeJ;
      if (v788) {
        v788 = endRange >= endRangeJ;
      }
      var v424 = v788;
      if (v424) {
        isOriginal$$1 = false;
        break;
      }
      var v789 = startRange >= startRangeJ;
      if (v789) {
        v789 = endRange <= endRangeJ;
      }
      var v425 = v789;
      if (v425) {
        isOriginal$$1 = false;
        break;
      }
      j$$13++;
      var v790 = originalMutatedRestrictionSites$$1.length;
      v426 = j$$13 < v790;
    }
    if (isOriginal$$1) {
      JAM.call(originalMutatedRestrictionSites$$1.push, originalMutatedRestrictionSites$$1, [mutatedSite$$1], JAM.policy.p15);
    }
    i$$17++;
    var v976 = mutatedRestrictionSiteCollection$$3.restrictionSites;
    var v791 = v976.length;
    v427 = i$$17 < v791;
  }
  mutatedRestrictionSiteCollection$$3.restrictionSites = originalMutatedRestrictionSites$$1;
  return mutatedRestrictionSiteCollection$$3;
}
function buildMutatedDna(originalDna, mutatedRestrictionSiteCollection$$4) {
  var mutatedDna$$1 = originalDna;
  var mutatedDnaArray = new Array;
  mutatedRestrictionSiteCollection$$4.sortRestrictionSites();
  var v428 = mutatedRestrictionSiteCollection$$4.restrictionSites;
  v428.reverse();
  var i$$18 = 0;
  var v977 = mutatedRestrictionSiteCollection$$4.restrictionSites;
  var v792 = v977.length;
  var v435 = i$$18 < v792;
  for (;v435;) {
    var v429 = mutatedRestrictionSiteCollection$$4.restrictionSites;
    var mutatedSite$$2 = v429[i$$18];
    var v793 = mutatedSite$$2.position;
    var v794 = mutatedSite$$2.cutDistance;
    var v430 = v793 + v794;
    var v795 = mutatedSite$$2.iupacPattern;
    var v431 = v795.length;
    var siteStart = v430 - v431;
    var v796 = mutatedSite$$2.position;
    var v797 = mutatedSite$$2.cutDistance;
    var v432 = v796 + v797;
    var siteEnd = v432 - 1;
    var siteLength = siteEnd - siteStart;
    var v798 = JAM.call(mutatedDna$$1.substring, mutatedDna$$1, [0, siteStart], JAM.policy.p13);
    var v1084 = siteEnd + 1;
    var v978 = JAM.call(mutatedDna$$1.substring, mutatedDna$$1, [siteStart, v1084], JAM.policy.p27);
    var v979 = mutatedSite$$2.iupacPattern;
    var v980 = mutatedSite$$2.label;
    var v799 = replaceMutatedDnaSegment(v978, v979, v980);
    var v433 = v798 + v799;
    JAM.call(mutatedDnaArray.push, mutatedDnaArray, [v433], JAM.policy.p15);
    var v800 = siteEnd + 1;
    var v801 = mutatedDna$$1.length;
    var v434 = JAM.call(mutatedDna$$1.substring, mutatedDna$$1, [v800, v801], JAM.policy.p27);
    JAM.call(mutatedDnaArray.push, mutatedDnaArray, [v434], JAM.policy.p15);
    mutatedDna$$1 = JAM.call(mutatedDnaArray.join, mutatedDnaArray, [""], JAM.policy.p9);
    mutatedDnaArray = new Array;
    i$$18++;
    var v981 = mutatedRestrictionSiteCollection$$4.restrictionSites;
    var v802 = v981.length;
    v435 = i$$18 < v802;
  }
  var v436 = mutatedRestrictionSiteCollection$$4.restrictionSites;
  v436.reverse();
  return mutatedDna$$1;
}
function replaceMutatedDnaSegment(originalSegment, iupacPattern, label$$1) {
  var newSegment = "";
  var genericSite;
  var v803 = JAM.call(label$$1.match, label$$1, [/[a-z\|]+\s\d+/], JAM.policy.p17);
  var v437 = v803.toString();
  genericSite = JAM.call(v437.replace, v437, [/\||\s\d+/g, ""], JAM.policy.p16);
  var isUpperCase;
  var charToAdd;
  var i$$19 = 0;
  var v804 = originalSegment.length;
  var v443 = i$$19 < v804;
  for (;v443;) {
    var v1085 = JAM.call(originalSegment.charAt, originalSegment, [i$$19], JAM.policy.p15);
    var v982 = v1085.toString();
    var v805 = JAM.call(v982.search, v982, [/[A-Z]/], JAM.policy.p17);
    var v438 = v805 == -1;
    if (v438) {
      isUpperCase = false;
    } else {
      isUpperCase = true;
    }
    var v806 = JAM.call(originalSegment.charAt, originalSegment, [i$$19], JAM.policy.p15);
    var v807 = JAM.call(genericSite.charAt, genericSite, [i$$19], JAM.policy.p15);
    var v440 = v806 == v807;
    if (v440) {
      charToAdd = JAM.call(originalSegment.charAt, originalSegment, [i$$19], JAM.policy.p17);
    } else {
      var v808 = JAM.call(iupacPattern.charAt, iupacPattern, [i$$19], JAM.policy.p15);
      var v439 = v808 == "N";
      if (v439) {
        charToAdd = JAM.call(genericSite.charAt, genericSite, [i$$19], JAM.policy.p17);
      } else {
        charToAdd = JAM.call(originalSegment.charAt, originalSegment, [i$$19], JAM.policy.p17);
      }
    }
    if (isUpperCase) {
      var v809 = charToAdd.toString();
      var v441 = v809.toUpperCase();
      newSegment = newSegment + v441;
    } else {
      var v810 = charToAdd.toString();
      var v442 = v810.toLowerCase();
      newSegment = newSegment + v442;
    }
    i$$19++;
    var v811 = originalSegment.length;
    v443 = i$$19 < v811;
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
  var v447 = dnaConformation$$1 == "circular";
  if (v447) {
    var v444 = JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p13);
    shiftValue$$1 = v444.length;
    var v1086 = sequence$$18.length;
    var v983 = v1086 - lookAhead$$1;
    var v984 = sequence$$18.length;
    var v812 = JAM.call(sequence$$18.substring, sequence$$18, [v983, v984], JAM.policy.p27);
    var v445 = v812 + sequence$$18;
    var v446 = JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p13);
    sequence$$18 = v445 + v446;
    lowerLimit$$1 = 0 + shiftValue$$1;
    upperLimit$$1 = upperLimit$$1 + shiftValue$$1;
  }
  var i$$20 = 0;
  var v813 = arrayOfItems$$2.length;
  var v459 = i$$20 < v813;
  for (;v459;) {
    var v985 = arrayOfItems$$2[i$$20];
    var v814 = JAM.call(v985.match, v985, [/\/.+\//], JAM.policy.p17);
    var v448 = v814.toString();
    var iupacPattern$$1 = JAM.call(v448.replace, v448, [/[\/\\]/g, ""], JAM.policy.p16);
    var v986 = convertDegenerates(iupacPattern$$1);
    var v815 = "/" + v986;
    var v449 = v815 + "/";
    matchExp$$2 = v449 + "gi";
    matchPosition$$1 = 0;
    if (JAM.isEval(eval)) {
      matchExp$$2 = eval("introspect(JAM.policy.pFull) { " + matchExp$$2 + " }");
    } else {
      matchExp$$2 = JAM.call(eval, null, [matchExp$$2]);
    }
    var v1087 = arrayOfItems$$2[i$$20];
    var v987 = JAM.call(v1087.match, v1087, [/\)\D*\d+/], JAM.policy.p17);
    var v816 = v987.toString();
    var v450 = JAM.call(v816.replace, v816, [/\)\D*/, ""], JAM.policy.p16);
    cutDistance$$2 = parseFloat(v450);
    var v988 = arrayOfItems$$2[i$$20];
    var v817 = JAM.call(v988.match, v988, [/\([^\(]+\)/], JAM.policy.p17);
    var v451 = v817.toString();
    label$$2 = JAM.call(v451.replace, v451, [/\(|\)/g, ""], JAM.policy.p16);
    var v455 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [sequence$$18], JAM.policy.p15);
    for (;v455;) {
      matchPosition$$1 = matchExp$$2.lastIndex;
      matchPosition$$1 = matchPosition$$1 - cutDistance$$2;
      var v818 = matchPosition$$1 >= lowerLimit$$1;
      if (v818) {
        v818 = matchPosition$$1 < upperLimit$$1;
      }
      var v453 = v818;
      if (v453) {
        timesFound$$1++;
        var v989 = label$$2 + " ";
        var v1088 = matchPosition$$1 - shiftValue$$1;
        var v990 = v1088 + 1;
        var v819 = v989 + v990;
        var v820 = matchPosition$$1 - shiftValue$$1;
        var v452 = new RestrictionSite(v819, v820, cutDistance$$2, iupacPattern$$1);
        JAM.call(tempArray.push, tempArray, [v452], JAM.policy.p15);
      }
      var v821 = matchExp$$2.lastIndex;
      var v991 = RegExp.lastMatch;
      var v822 = v991.length;
      var v454 = v821 - v822;
      matchExp$$2.lastIndex = v454 + 1;
      v455 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [sequence$$18], JAM.policy.p15);
    }
    var j$$14 = 0;
    var v823 = tempArray.length;
    var v458 = j$$14 < v823;
    for (;v458;) {
      var v456 = tempArray[j$$14];
      v456.numberOfCuts = timesFound$$1;
      var v457 = tempArray[j$$14];
      JAM.call(restrictionSiteCollection$$3.addRestrictionSite, restrictionSiteCollection$$3, [v457], JAM.policy.p15);
      j$$14++;
      var v824 = tempArray.length;
      v458 = j$$14 < v824;
    }
    timesFound$$1 = 0;
    tempArray = new Array;
    i$$20++;
    var v825 = arrayOfItems$$2.length;
    v459 = i$$20 < v825;
  }
  return restrictionSiteCollection$$3;
}
function writeLayout(start$$4, stop) {
  var i$$21 = 0;
  var v992 = this.components;
  var v826 = v992.length;
  var v461 = i$$21 < v826;
  for (;v461;) {
    var v827 = this.components;
    var v460 = v827[i$$21];
    JAM.call(v460.writeLayoutComponent, v460, [start$$4, stop], JAM.policy.p27);
    i$$21++;
    var v993 = this.components;
    var v828 = v993.length;
    v461 = i$$21 < v828;
  }
  return;
}
function addComponent(component) {
  var v462 = this.components;
  JAM.call(v462.push, v462, [component], JAM.policy.p15);
  return;
}
function TextLayout() {
  var v1506 = new Array;
  this.components = v1506;
  return;
}
function writeLayoutComponent(start$$5, stop$$1) {
  return;
}
function setCharacters(text$$14) {
  var v829 = JAM.call(text$$14.search, text$$14, [/./], JAM.policy.p17);
  var v463 = v829 != -1;
  if (v463) {
    var v1507 = JAM.call(text$$14.match, text$$14, [/./g], JAM.policy.p17);
    this.characters = v1507;
  }
  return;
}
function isRoom(start$$6, stop$$2) {
  var v464 = this.characters;
  var rangeToCheck = JAM.call(v464.slice, v464, [start$$6, stop$$2], JAM.policy.p27);
  rangeToCheck = JAM.call(rangeToCheck.join, rangeToCheck, [""], JAM.policy.p9);
  var v830 = JAM.call(rangeToCheck.search, rangeToCheck, [/\w/], JAM.policy.p17);
  var v465 = v830 == -1;
  if (v465) {
    return true;
  } else {
    return false;
  }
  return;
}
function LayoutComponent() {
  var v1508 = new Array;
  this.characters = v1508;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return;
}
function TranslationComponent() {
  var v1509 = new Array;
  this.characters = v1509;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return;
}
function UppercaseTranslationComponent() {
  var v1510 = new Array;
  this.characters = v1510;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return;
}
function DnaComponent() {
  var v1511 = new Array;
  this.characters = v1511;
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
  var v466 = this.restrictionSites;
  JAM.call(v466.push, v466, [restrictionSite], JAM.policy.p15);
  return;
}
function sortRestrictionSites() {
  var v467 = this.restrictionSites;
  JAM.call(v467.sort, v467, [restrictionSiteSorter], JAM.policy.p15);
  return;
}
function getSitesInRange(start$$10, stop$$6) {
  var arrayToReturn = new Array;
  var v831 = this.restrictionSites;
  var v468 = v831.length;
  var i$$22 = v468 - 1;
  var v471 = i$$22 >= 0;
  for (;v471;) {
    var v1152 = this.restrictionSites;
    var v1089 = v1152[i$$22];
    var v994 = v1089.position;
    var v832 = v994 >= start$$10;
    if (v832) {
      var v1153 = this.restrictionSites;
      var v1090 = v1153[i$$22];
      var v995 = v1090.position;
      v832 = v995 < stop$$6;
    }
    var v470 = v832;
    if (v470) {
      var v833 = this.restrictionSites;
      var v469 = v833.pop();
      JAM.call(arrayToReturn.push, arrayToReturn, [v469], JAM.policy.p15);
    } else {
      break;
    }
    i$$22--;
    v471 = i$$22 >= 0;
  }
  return arrayToReturn;
}
function RestrictionSiteCollection() {
  var v1512 = new Array;
  this.restrictionSites = v1512;
  return;
}
function restrictionSiteSorter(a, b) {
  var v834 = a.position;
  var v835 = b.position;
  var v472 = v834 < v835;
  if (v472) {
    return 1;
  }
  var v836 = a.position;
  var v837 = b.position;
  var v473 = v836 > v837;
  if (v473) {
    return-1;
  } else {
    return 0;
  }
  return;
}
new TextLayout;
var v474 = TextLayout.prototype;
v474.writeLayout = writeLayout;
var v475 = TextLayout.prototype;
v475.addComponent = addComponent;
new LayoutComponent;
var v476 = LayoutComponent.prototype;
v476.writeLayoutComponent = writeLayoutComponent;
var v477 = LayoutComponent.prototype;
v477.setCharacters = setCharacters;
var v478 = LayoutComponent.prototype;
v478.isRoom = isRoom;
var v479 = TranslationComponent;
var v1513 = new LayoutComponent;
v479.prototype = v1513;
var v480 = TranslationComponent.prototype;
v480.writeLayoutComponent = v4;
var v481 = UppercaseTranslationComponent;
var v1514 = new LayoutComponent;
v481.prototype = v1514;
var v482 = UppercaseTranslationComponent.prototype;
v482.writeLayoutComponent = v5;
var v483 = DnaComponent;
var v1515 = new LayoutComponent;
v483.prototype = v1515;
var v484 = DnaComponent.prototype;
v484.writeLayoutComponent = v6;
new RestrictionSiteCollection;
var v485 = RestrictionSiteCollection.prototype;
v485.addRestrictionSite = addRestrictionSite;
var v486 = RestrictionSiteCollection.prototype;
v486.sortRestrictionSites = sortRestrictionSites;
var v487 = RestrictionSiteCollection.prototype;
v487.getSitesInRange = getSitesInRange;
JAM.set(document, "onload", v7);
var v488 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9);
JAM.set(v488, "onclick", v8);
var v489 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9);
JAM.set(v489, "onclick", v9)
