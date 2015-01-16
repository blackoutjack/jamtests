function v13() {
  var v1088 = document.forms;
  var v903 = v1088[0];
  var v531 = v903.elements;
  var v14 = v531[0];
  v14.value = " ";
  var v1089 = document.forms;
  var v904 = v1089[1];
  var v532 = v904.elements;
  var v15 = v532[0];
  v15.value = " ";
  return;
}
function v12() {
  try {
    primerMap(document);
  } catch (e$$5) {
    var v16 = "The following error was encountered: " + e$$5;
    alert(v16);
  }
  return;
}
function v11() {
  var v533 = document.main_form;
  var v17 = v533.main_submit;
  v17.focus();
  return;
}
function v10(start$$10, stop$$6) {
  function v9(str$$11, p1$$5, offset$$13, s$$7) {
    return JAM.call(p1$$5.replace, p1$$5, [/./g, " "], JAM.policy.p16);
  }
  function v8(str$$10, p1$$4, offset$$12, s$$6) {
    return JAM.call(p1$$4.replace, p1$$4, [/./g, " "], JAM.policy.p16);
  }
  var v18 = outputWindow.document;
  var v534 = this.positionLabel;
  var v19 = rightNum(v534, "", 8, "");
  JAM.call(v18.write, v18, [v19], JAM.policy.p17);
  var v535 = this.characters;
  var v20 = JAM.call(v535.slice, v535, [start$$10, stop$$6], JAM.policy.p27);
  var text$$15 = JAM.call(v20.join, v20, [""], JAM.policy.p11);
  text$$15 = JAM.call(text$$15.replace, text$$15, [/^(\d+)/g, v8], JAM.policy.p16);
  text$$15 = JAM.call(text$$15.replace, text$$15, [/(\d+)$/g, v9], JAM.policy.p16);
  var v21 = outputWindow.document;
  var v22 = text$$15 + "\n";
  JAM.call(v21.write, v21, [v22], JAM.policy.p17);
  var v23 = this.positionLabel;
  var v24 = stop$$6 - start$$10;
  this.positionLabel = v23 + v24;
  return;
}
function v7(start$$9, stop$$5) {
  var v25 = outputWindow.document;
  var v536 = this.positionLabel;
  var v26 = rightNum(v536, "", 8, "");
  JAM.call(v25.write, v25, [v26], JAM.policy.p17);
  var v27 = outputWindow.document;
  var v1090 = this.characters;
  var v905 = JAM.call(v1090.slice, v1090, [start$$9, stop$$5], JAM.policy.p27);
  var v537 = JAM.call(v905.join, v905, [""], JAM.policy.p11);
  var v28 = v537 + "\n";
  JAM.call(v27.write, v27, [v28], JAM.policy.p17);
  var v29 = this.positionLabel;
  var v30 = stop$$5 - start$$9;
  this.positionLabel = v29 + v30;
  return;
}
function v6(start$$8, stop$$4) {
  var v906 = this.characters;
  var v538 = JAM.call(v906.slice, v906, [start$$8, stop$$4], JAM.policy.p27);
  var v31 = JAM.call(v538.join, v538, [""], JAM.policy.p11);
  var textToWrite = v31 + "\n";
  var v539 = JAM.call(textToWrite.search, textToWrite, [/\w/], JAM.policy.p15);
  var v37 = v539 != -1;
  if (v37) {
    var v32 = outputWindow.document;
    var v540 = this.positionLabel;
    var v33 = rightNum(v540, "", 8, "");
    JAM.call(v32.write, v32, [v33], JAM.policy.p17);
    var v34 = this.positionLabel;
    var v541 = JAM.call(textToWrite.match, textToWrite, [/[A-Z]/g], JAM.policy.p15);
    var v35 = v541.length;
    this.positionLabel = v34 + v35;
    var v36 = outputWindow.document;
    JAM.call(v36.write, v36, [textToWrite], JAM.policy.p17);
  }
  return;
}
function v5(start$$7, stop$$3) {
  var v38 = outputWindow.document;
  var v542 = this.positionLabel;
  var v39 = rightNum(v542, "", 8, "");
  JAM.call(v38.write, v38, [v39], JAM.policy.p17);
  var v40 = outputWindow.document;
  var v1091 = this.characters;
  var v907 = JAM.call(v1091.slice, v1091, [start$$7, stop$$3], JAM.policy.p27);
  var v543 = JAM.call(v907.join, v907, [""], JAM.policy.p11);
  var v41 = v543 + "\n";
  JAM.call(v40.write, v40, [v41], JAM.policy.p17);
  var v42 = this.positionLabel;
  var v544 = stop$$3 - start$$7;
  var v43 = v544 / 3;
  this.positionLabel = v42 + v43;
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
  var v44 = arrayOfSequences[0];
  var lengthOfAlign = v44.length;
  var v545 = arrayOfSequences.length;
  var v45 = v545 < 2;
  if (v45) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v546 = arrayOfTitles.length;
  var v47 = i$$1 < v546;
  for (;v47;) {
    var v1222 = arrayOfTitles[i$$1];
    var v1092 = JAM.call(v1222.search, v1222, [/\S/], JAM.policy.p15);
    var v908 = v1092 == -1;
    var v1094 = !v908;
    if (v1094) {
      var v1223 = arrayOfSequences[i$$1];
      var v1093 = JAM.call(v1223.search, v1223, [/\S/], JAM.policy.p15);
      v908 = v1093 == -1;
    }
    var v547 = v908;
    var v910 = !v547;
    if (v910) {
      var v1095 = arrayOfSequences[i$$1];
      var v909 = v1095.length;
      v547 = v909 != lengthOfAlign;
    }
    var v46 = v547;
    if (v46) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v548 = arrayOfTitles.length;
    v47 = i$$1 < v548;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1314 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p15);
  var v1224 = v1314 == -1;
  var v1316 = !v1224;
  if (v1316) {
    var v1315 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p15);
    v1224 = v1315 == -1;
  }
  var v1096 = v1224;
  var v1226 = !v1096;
  if (v1226) {
    var v1225 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p15);
    v1096 = v1225 == -1;
  }
  var v911 = v1096;
  var v1098 = !v911;
  if (v1098) {
    var v1097 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p15);
    v911 = v1097 == -1;
  }
  var v549 = v911;
  var v913 = !v549;
  if (v913) {
    var v912 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p15);
    v549 = v912 == -1;
  }
  var v48 = v549;
  if (v48) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v914 = formElement.value;
  var v550 = JAM.call(v914.search, v914, [/\S/], JAM.policy.p15);
  var v49 = v550 == -1;
  if (v49) {
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
  var v551 = arrayOfPatterns.length;
  var v52 = z$$2 < v551;
  for (;v52;) {
    var v915 = arrayOfPatterns[z$$2];
    var v552 = JAM.call(v915.search, v915, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p15);
    var v50 = v552 == -1;
    if (v50) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v916 = arrayOfPatterns[z$$2];
    var v553 = moreExpressionCheck(v916);
    var v51 = v553 == false;
    if (v51) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v554 = arrayOfPatterns.length;
    v52 = z$$2 < v554;
  }
  var v53 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v53);
  var v54 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v54);
  var j = 0;
  var v555 = arrayOfPatterns.length;
  var v58 = j < v555;
  for (;v58;) {
    var v917 = arrayOfPatterns[j];
    var v556 = JAM.call(v917.match, v917, [/\/.+\//], JAM.policy.p15);
    var v55 = v556 + "gi";
    if (JAM.isEval(eval)) {
      var v1846 = eval("introspect(JAM.policy.pFull) { " + v55 + " }")
    } else {
      var v1846 = JAM.call(eval, null, [v55])
    }
    geneticCodeMatchExp[j] = v1846;
    var v557 = arrayOfPatterns[j];
    var v56 = JAM.call(v557.match, v557, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v1847 = v56.toString();
    geneticCodeMatchResult[j] = v1847;
    var v57 = geneticCodeMatchResult[j];
    var v1848 = JAM.call(v57.replace, v57, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v1848;
    j++;
    var v558 = arrayOfPatterns.length;
    v58 = j < v558;
  }
  var i$$2 = 0;
  var v918 = testSequence.length;
  var v559 = v918 - 3;
  var v65 = i$$2 <= v559;
  for (;v65;) {
    var v59 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v59], JAM.policy.p16);
    j = 0;
    var v560 = geneticCodeMatchExp.length;
    var v63 = j < v560;
    for (;v63;) {
      var v919 = geneticCodeMatchExp[j];
      var v561 = JAM.call(codon.search, codon, [v919], JAM.policy.p17);
      var v62 = v561 != -1;
      if (v62) {
        var v61 = oneMatch == true;
        if (v61) {
          var v562 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v60 = v562 + ".";
          alert(v60);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v563 = geneticCodeMatchExp.length;
      v63 = j < v563;
    }
    var v64 = oneMatch == false;
    if (v64) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v920 = testSequence.length;
    var v564 = v920 - 3;
    v65 = i$$2 <= v564;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v565 = arrayOfPatterns$$1.length;
  var v67 = z$$3 < v565;
  for (;v67;) {
    var v921 = arrayOfPatterns$$1[z$$3];
    var v566 = JAM.call(v921.search, v921, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p15);
    var v66 = v566 != -1;
    if (v66) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v567 = arrayOfPatterns$$1.length;
    v67 = z$$3 < v567;
  }
  var i$$3 = 0;
  var v568 = arrayOfPatterns$$1.length;
  var v71 = i$$3 < v568;
  for (;v71;) {
    var v922 = arrayOfPatterns$$1[i$$3];
    var v569 = "[" + v922;
    var v68 = v569 + "]";
    var re = new RegExp(v68, "gi");
    var j$$1 = i$$3 + 1;
    var v570 = arrayOfPatterns$$1.length;
    var v70 = j$$1 < v570;
    for (;v70;) {
      var v923 = arrayOfPatterns$$1[j$$1];
      var v571 = JAM.call(v923.search, v923, [re], JAM.policy.p17);
      var v69 = v571 != -1;
      if (v69) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v572 = arrayOfPatterns$$1.length;
      v70 = j$$1 < v572;
    }
    i$$3++;
    var v573 = arrayOfPatterns$$1.length;
    v71 = i$$3 < v573;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v574 = arrayOfPatterns$$2.length;
  var v74 = z$$4 < v574;
  for (;v74;) {
    var v924 = arrayOfPatterns$$2[z$$4];
    var v575 = JAM.call(v924.search, v924, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p15);
    var v72 = v575 == -1;
    if (v72) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v925 = arrayOfPatterns$$2[z$$4];
    var v576 = moreExpressionCheck(v925);
    var v73 = v576 == false;
    if (v73) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v577 = arrayOfPatterns$$2.length;
    v74 = z$$4 < v577;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v1099 = getSequenceFromFasta(text$$7);
  var v926 = JAM.call(v1099.replace, v1099, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v578 = v926.length;
  var v76 = v578 > maxInput;
  if (v76) {
    var v579 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v75 = v579 + " characters.";
    alert(v75);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v580 = text$$8.length;
  var v78 = v580 > maxInput$$1;
  if (v78) {
    var v581 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v77 = v581 + " characters.";
    alert(v77);
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
  var v79 = outputWindow.document;
  JAM.call(v79.write, v79, ["</form>"], JAM.policy.p11);
  return true;
}
function closePre() {
  var v80 = outputWindow.document;
  JAM.call(v80.write, v80, ["</div>"], JAM.policy.p11);
  var v81 = outputWindow.document;
  JAM.call(v81.write, v81, ["</pre>\n"], JAM.policy.p11);
  return;
}
function closeTextArea() {
  var v82 = outputWindow.document;
  JAM.call(v82.write, v82, ["</textarea>"], JAM.policy.p11);
  return true;
}
function closeWindow() {
  var v83 = outputWindow.document;
  JAM.call(v83.write, v83, ["</body>\n</html>\n"], JAM.policy.p11);
  outputWindow.status = "Done.";
  var v84 = outputWindow.document;
  v84.close();
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
  var v582 = alignArray.length;
  var v85 = v582 < 3;
  if (v85) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v583 = alignArray.length;
  var v87 = i$$4 < v583;
  for (;v87;) {
    var v927 = alignArray[i$$4];
    var v584 = JAM.call(v927.search, v927, [/[^\s]+\s/], JAM.policy.p15);
    var v86 = v584 == -1;
    if (v86) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v585 = alignArray.length;
    v87 = i$$4 < v585;
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
  var v586 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v90 = v586 != -1;
  if (v90) {
    var v89 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    for (;v89;) {
      var v88 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v88], JAM.policy.p17);
      v89 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v587 = sequence$$2.length;
  var v91 = "&gt;results for " + v587;
  var stringToReturn = v91 + " residue sequence ";
  var v588 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p15);
  var v93 = v588 != -1;
  if (v93) {
    var v589 = stringToReturn + '"';
    var v92 = v589 + fastaSequenceTitle;
    stringToReturn = v92 + '"';
  }
  var v590 = stringToReturn + ' starting "';
  var v591 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v94 = v590 + v591;
  stringToReturn = v94 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v592 = sequenceOne.length;
  var v95 = "Search results for " + v592;
  var stringToReturn$$1 = v95 + " residue sequence ";
  var v593 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p15);
  var v97 = v593 != -1;
  if (v97) {
    var v594 = stringToReturn$$1 + '"';
    var v96 = v594 + fastaSequenceTitleOne;
    stringToReturn$$1 = v96 + '"';
  }
  var v595 = stringToReturn$$1 + ' starting "';
  var v596 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v98 = v595 + v596;
  stringToReturn$$1 = v98 + '"\n';
  var v597 = stringToReturn$$1 + "and ";
  var v598 = sequenceTwo.length;
  var v99 = v597 + v598;
  stringToReturn$$1 = v99 + " residue sequence ";
  var v599 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p15);
  var v101 = v599 != -1;
  if (v101) {
    var v600 = stringToReturn$$1 + '"';
    var v100 = v600 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v100 + '"';
  }
  var v601 = stringToReturn$$1 + ' starting "';
  var v602 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v102 = v601 + v602;
  stringToReturn$$1 = v102 + '"';
  var v103 = '<div class="info">' + stringToReturn$$1;
  return v103 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v104 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v104);
  var j$$2 = 0;
  var v603 = arrayOfPatterns$$3.length;
  var v106 = j$$2 < v603;
  for (;v106;) {
    var v928 = arrayOfPatterns$$3[j$$2];
    var v604 = JAM.call(v928.match, v928, [/\/.+\//], JAM.policy.p15);
    var v105 = v604 + "gi";
    if (JAM.isEval(eval)) {
      var v1849 = eval("introspect(JAM.policy.pFull) { " + v105 + " }")
    } else {
      var v1849 = JAM.call(eval, null, [v105])
    }
    geneticCodeMatchExp$$1[j$$2] = v1849;
    j$$2++;
    var v605 = arrayOfPatterns$$3.length;
    v106 = j$$2 < v605;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v107 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v107);
  var j$$3 = 0;
  var v606 = arrayOfPatterns$$4.length;
  var v110 = j$$3 < v606;
  for (;v110;) {
    var v607 = arrayOfPatterns$$4[j$$3];
    var v108 = JAM.call(v607.match, v607, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v1850 = v108.toString();
    geneticCodeMatchResult$$1[j$$3] = v1850;
    var v109 = geneticCodeMatchResult$$1[j$$3];
    var v1851 = JAM.call(v109.replace, v109, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v1851;
    j$$3++;
    var v608 = arrayOfPatterns$$4.length;
    v110 = j$$3 < v608;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v609 = sequence$$3.length;
  var v111 = "Results for " + v609;
  var stringToReturn$$2 = v111 + " residue sequence ";
  var v610 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p15);
  var v113 = v610 != -1;
  if (v113) {
    var v611 = stringToReturn$$2 + '"';
    var v112 = v611 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v112 + '"';
  }
  var v612 = stringToReturn$$2 + ' starting "';
  var v613 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v114 = v612 + v613;
  stringToReturn$$2 = v114 + '"';
  var v115 = '<div class="info">' + stringToReturn$$2;
  return v115 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v929 = "Results for " + topology;
  var v614 = v929 + " ";
  var v615 = sequence$$4.length;
  var v116 = v614 + v615;
  var stringToReturn$$3 = v116 + " residue sequence ";
  var v616 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p15);
  var v118 = v616 != -1;
  if (v118) {
    var v617 = stringToReturn$$3 + '"';
    var v117 = v617 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v117 + '"';
  }
  var v618 = stringToReturn$$3 + ' starting "';
  var v619 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v119 = v618 + v619;
  stringToReturn$$3 = v119 + '"';
  var v120 = '<div class="info">' + stringToReturn$$3;
  return v120 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v620 = sequenceOne$$1.length;
  var v121 = "Alignment results for " + v620;
  var stringToReturn$$4 = v121 + " residue sequence ";
  var v621 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p15);
  var v123 = v621 != -1;
  if (v123) {
    var v622 = stringToReturn$$4 + '"';
    var v122 = v622 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v122 + '"';
  }
  var v623 = stringToReturn$$4 + ' starting "';
  var v624 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v124 = v623 + v624;
  stringToReturn$$4 = v124 + '"\n';
  var v625 = stringToReturn$$4 + "and ";
  var v626 = sequenceTwo$$1.length;
  var v125 = v625 + v626;
  stringToReturn$$4 = v125 + " residue sequence ";
  var v627 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p15);
  var v127 = v627 != -1;
  if (v127) {
    var v628 = stringToReturn$$4 + '"';
    var v126 = v628 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v126 + '"';
  }
  var v629 = stringToReturn$$4 + ' starting "';
  var v630 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v128 = v629 + v630;
  stringToReturn$$4 = v128 + '"';
  var v129 = '<div class="info">' + stringToReturn$$4;
  return v129 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v131 = j$$4 < lengthOut;
  for (;v131;) {
    var v631 = Math.random();
    var v632 = components.length;
    var v130 = v631 * v632;
    tempNum = JAM.call(Math.floor, Math, [v130], JAM.policy.p15);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v131 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p11);
}
function getSequenceFromFasta(sequenceRecord) {
  var v633 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v132 = v633 != -1;
  if (v132) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v634 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v134 = v634 != -1;
  if (v134) {
    var v133 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
    fastaTitle = v133.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p16);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1582 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p15);
  var v1555 = v1582 != -1;
  var v1584 = !v1555;
  if (v1584) {
    var v1583 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p15);
    v1555 = v1583 != -1;
  }
  var v1524 = v1555;
  var v1557 = !v1524;
  if (v1557) {
    var v1556 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p15);
    v1524 = v1556 != -1;
  }
  var v1491 = v1524;
  var v1526 = !v1491;
  if (v1526) {
    var v1525 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p15);
    v1491 = v1525 != -1;
  }
  var v1444 = v1491;
  var v1493 = !v1444;
  if (v1493) {
    var v1492 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p15);
    v1444 = v1492 != -1;
  }
  var v1381 = v1444;
  var v1446 = !v1381;
  if (v1446) {
    var v1445 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p15);
    v1381 = v1445 != -1;
  }
  var v1317 = v1381;
  var v1383 = !v1317;
  if (v1383) {
    var v1382 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p15);
    v1317 = v1382 != -1;
  }
  var v1227 = v1317;
  var v1319 = !v1227;
  if (v1319) {
    var v1318 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p15);
    v1227 = v1318 != -1;
  }
  var v1100 = v1227;
  var v1229 = !v1100;
  if (v1229) {
    var v1228 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p15);
    v1100 = v1228 != -1;
  }
  var v930 = v1100;
  var v1102 = !v930;
  if (v1102) {
    var v1101 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p15);
    v930 = v1101 != -1;
  }
  var v635 = v930;
  var v932 = !v635;
  if (v932) {
    var v931 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p15);
    v635 = v931 != -1;
  }
  var v135 = v635;
  if (v135) {
    return false;
  }
  return true;
}
function openForm() {
  var v136 = outputWindow.document;
  JAM.call(v136.write, v136, ['<form action="">\n'], JAM.policy.p11);
  return true;
}
function openPre() {
  var v137 = outputWindow.document;
  JAM.call(v137.write, v137, ["<pre>"], JAM.policy.p11);
  var v138 = outputWindow.document;
  JAM.call(v138.write, v138, ['<div class="pre">'], JAM.policy.p11);
  return;
}
function openTextArea() {
  var v139 = outputWindow.document;
  JAM.call(v139.write, v139, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p11);
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v140 = outputWindow.document;
  var v1103 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v933 = v1103 + "<head>\n";
  var v636 = v933 + "<title>Sequence Manipulation Suite</title>\n";
  var v141 = v636 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v140.write, v140, [v141], JAM.policy.p17);
  if (isColor) {
    var v142 = outputWindow.document;
    var v1657 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1633 = v1657 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1609 = v1633 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1585 = v1609 + "div.info {font-weight: bold}\n";
    var v1558 = v1585 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1527 = v1558 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1494 = v1527 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1447 = v1494 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1384 = v1447 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1320 = v1384 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1230 = v1320 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1104 = v1230 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v934 = v1104 + "td.many {color: #000000}\n";
    var v637 = v934 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v143 = v637 + "</style>\n";
    JAM.call(v142.write, v142, [v143], JAM.policy.p17);
  } else {
    var v144 = outputWindow.document;
    var v1679 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1658 = v1679 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1634 = v1658 + "div.title {display: none}\n";
    var v1610 = v1634 + "div.info {font-weight: bold}\n";
    var v1586 = v1610 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1559 = v1586 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1528 = v1559 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1495 = v1528 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1448 = v1495 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1385 = v1448 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1321 = v1385 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1231 = v1321 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1105 = v1231 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v935 = v1105 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v638 = v935 + "img {display: none}\n";
    var v145 = v638 + "</style>\n";
    JAM.call(v144.write, v144, [v145], JAM.policy.p17);
  }
  var v146 = outputWindow.document;
  var v1106 = "</head>\n" + '<body class="main">\n';
  var v936 = v1106 + '<div class="title">';
  var v639 = v936 + title$$6;
  var v147 = v639 + " results</div>\n";
  JAM.call(v146.write, v146, [v147], JAM.policy.p17);
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
  var v148 = outputWindow.document;
  var v1107 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v937 = v1107 + "<head>\n";
  var v640 = v937 + "<title>Sequence Manipulation Suite</title>\n";
  var v149 = v640 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v148.write, v148, [v149], JAM.policy.p17);
  if (isBackground) {
    var v150 = outputWindow.document;
    var v1659 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1635 = v1659 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1611 = v1635 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1587 = v1611 + "div.info {font-weight: bold}\n";
    var v1560 = v1587 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1529 = v1560 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1496 = v1529 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1449 = v1496 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1386 = v1449 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1322 = v1386 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1232 = v1322 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v1108 = v1232 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v938 = v1108 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v641 = v938 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v151 = v641 + "</style>\n";
    JAM.call(v150.write, v150, [v151], JAM.policy.p17);
  } else {
    var v152 = outputWindow.document;
    var v1699 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1680 = v1699 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1660 = v1680 + "div.title {display: none}\n";
    var v1636 = v1660 + "div.info {font-weight: bold}\n";
    var v1612 = v1636 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1588 = v1612 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1561 = v1588 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1530 = v1561 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1497 = v1530 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1450 = v1497 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1387 = v1450 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1323 = v1387 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1233 = v1323 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v1109 = v1233 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v939 = v1109 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v642 = v939 + "img {display: none}\n";
    var v153 = v642 + "</style>\n";
    JAM.call(v152.write, v152, [v153], JAM.policy.p17);
  }
  var v154 = outputWindow.document;
  var v1110 = "</head>\n" + '<body class="main">\n';
  var v940 = v1110 + '<div class="title">';
  var v643 = v940 + title$$8;
  var v155 = v643 + " results</div>\n";
  JAM.call(v154.write, v154, [v155], JAM.policy.p17);
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
  var v644 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p15);
  var v156 = v644 != -1;
  if (v156) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p15);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p11);
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  var v157 = j$$5 < lengthOfColumn;
  for (;v157;) {
    tempString = tempString + " ";
    j$$5++;
    v157 = j$$5 < lengthOfColumn;
  }
  var v158 = tempString + theNumber;
  theNumber = v158 + " ";
  var v159 = sequenceToAppend + theNumber;
  sequenceToAppend = v159 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p17);
  var v645 = testArray[0];
  var v160 = v645 != testString;
  if (v160) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v646 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v161 = v646 == -1;
  if (v161) {
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
  var v162 = !caughtException;
  if (v162) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p16);
  var v163 = testString != "1X2X3X";
  if (v163) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v647 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9);
  var v164 = v647 != 2489.824;
  if (v164) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v648 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9);
  var v165 = v648 != 2489.8;
  if (v165) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v649 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p15);
  var v166 = v649 == -1;
  if (v166) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v1234 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p15);
  var v1111 = v1234 == -1;
  var v1236 = !v1111;
  if (v1236) {
    var v1235 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p15);
    v1111 = v1235 == -1;
  }
  var v941 = v1111;
  var v1113 = !v941;
  if (v1113) {
    var v1112 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p15);
    v941 = v1112 == -1;
  }
  var v650 = v941;
  var v943 = !v650;
  if (v943) {
    var v942 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p15);
    v650 = v942 == -1;
  }
  var v167 = v650;
  if (v167) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v651 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p15);
  var v168 = v651 == -1;
  if (v168) {
    alert("Please enter a number.");
    return false;
  }
  var v170 = theNumber$$2 > maxInput$$2;
  if (v170) {
    var v652 = "Please enter a number less than or equal to " + maxInput$$2;
    var v169 = v652 + ".";
    alert(v169);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v653 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p15);
  var v171 = v653 != -1;
  if (v171) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v654 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p15);
  var v172 = v654 != -1;
  if (v172) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v1237 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p15);
  var v1114 = v1237 == -1;
  var v1239 = !v1114;
  if (v1239) {
    var v1238 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p15);
    v1114 = v1238 == -1;
  }
  var v944 = v1114;
  var v1116 = !v944;
  if (v1116) {
    var v1115 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p15);
    v944 = v1115 == -1;
  }
  var v655 = v944;
  var v946 = !v655;
  if (v946) {
    var v945 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p15);
    v655 = v945 == -1;
  }
  var v173 = v655;
  if (v173) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1240 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p15);
  var v1117 = v1240 == -1;
  var v1242 = !v1117;
  if (v1242) {
    var v1241 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p15);
    v1117 = v1241 == -1;
  }
  var v947 = v1117;
  var v1119 = !v947;
  if (v1119) {
    var v1118 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p15);
    v947 = v1118 == -1;
  }
  var v656 = v947;
  var v949 = !v656;
  if (v949) {
    var v948 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p15);
    v656 = v948 == -1;
  }
  var v174 = v656;
  if (v174) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v657 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p15);
  var v175 = v657 == -1;
  if (v175) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v1243 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p15);
  var v1120 = v1243 == -1;
  var v1245 = !v1120;
  if (v1245) {
    var v1244 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p15);
    v1120 = v1244 == -1;
  }
  var v950 = v1120;
  var v1122 = !v950;
  if (v1122) {
    var v1121 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p15);
    v950 = v1121 == -1;
  }
  var v658 = v950;
  var v952 = !v658;
  if (v952) {
    var v951 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p15);
    v658 = v951 == -1;
  }
  var v176 = v658;
  if (v176) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v659 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p15);
  var v177 = v659 == -1;
  if (v177) {
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
  var v184 = i$$5 < stopBase;
  for (;v184;) {
    var v178 = i$$5 + 1;
    lineOfText = rightNum(v178, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v660 = basePerLine / groupSize;
    var v181 = j$$6 <= v660;
    for (;v181;) {
      var v180 = k < groupSize;
      for (;v180;) {
        var v661 = k + i$$5;
        var v179 = JAM.call(text$$10.charAt, text$$10, [v661], JAM.policy.p17);
        lineOfText = lineOfText + v179;
        k = k + 1;
        v180 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v662 = basePerLine / groupSize;
      v181 = j$$6 <= v662;
    }
    var v182 = outputWindow.document;
    var v183 = lineOfText + "\n";
    JAM.call(v182.write, v182, [v183], JAM.policy.p17);
    lineOfText = "";
    v184 = i$$5 < stopBase;
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
    var v663 = adjustment < 0;
    if (v663) {
      v663 = adjusted >= 0;
    }
    var v185 = v663;
    if (v185) {
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
  var v218 = i$$6 < stopBase$$2;
  for (;v218;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v664 = basePerLine$$2 / groupSize$$2;
    var v194 = j$$7 <= v664;
    for (;v194;) {
      var v189 = k$$1 < groupSize$$2;
      for (;v189;) {
        var v665 = i$$6 + k$$1;
        var v186 = v665 >= stopBase$$2;
        if (v186) {
          break;
        }
        var v187 = lineOfText$$1;
        var v666 = k$$1 + i$$6;
        var v188 = JAM.call(text$$12.charAt, text$$12, [v666], JAM.policy.p17);
        lineOfText$$1 = v187 + v188;
        k$$1 = k$$1 + 1;
        v189 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v192 = numberPosition$$1 == "above";
      if (v192) {
        var v190 = aboveNum;
        var v667 = adjustNumbering(i$$6, numberingAdjustment);
        var v191 = rightNum(v667, "", groupSize$$2, tabIn$$3);
        aboveNum = v190 + v191;
      }
      var v193 = i$$6 >= stopBase$$2;
      if (v193) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v668 = basePerLine$$2 / groupSize$$2;
      v194 = j$$7 <= v668;
    }
    var v217 = numberPosition$$1 == "left";
    if (v217) {
      var v195 = outputWindow.document;
      var v1123 = adjustNumbering(lineNum, numberingAdjustment);
      var v953 = rightNum(v1123, "", 8, tabIn$$3);
      var v669 = v953 + lineOfText$$1;
      var v196 = v669 + "\n";
      JAM.call(v195.write, v195, [v196], JAM.policy.p17);
      var v200 = strands$$1 == "two";
      if (v200) {
        var v197 = outputWindow.document;
        var v1124 = adjustNumbering(lineNum, numberingAdjustment);
        var v954 = rightNum(v1124, "", 8, tabIn$$3);
        var v955 = complement(lineOfText$$1);
        var v670 = v954 + v955;
        var v198 = v670 + "\n";
        JAM.call(v197.write, v197, [v198], JAM.policy.p17);
        var v199 = outputWindow.document;
        JAM.call(v199.write, v199, ["\n"], JAM.policy.p11);
      }
    } else {
      var v216 = numberPosition$$1 == "right";
      if (v216) {
        var v201 = outputWindow.document;
        var v956 = lineOfText$$1;
        var v957 = adjustNumbering(i$$6, numberingAdjustment);
        var v671 = v956 + v957;
        var v202 = v671 + "\n";
        JAM.call(v201.write, v201, [v202], JAM.policy.p17);
        var v206 = strands$$1 == "two";
        if (v206) {
          var v203 = outputWindow.document;
          var v958 = complement(lineOfText$$1);
          var v959 = adjustNumbering(i$$6, numberingAdjustment);
          var v672 = v958 + v959;
          var v204 = v672 + "\n";
          JAM.call(v203.write, v203, [v204], JAM.policy.p17);
          var v205 = outputWindow.document;
          JAM.call(v205.write, v205, ["\n"], JAM.policy.p11);
        }
      } else {
        var v215 = numberPosition$$1 == "above";
        if (v215) {
          var v207 = outputWindow.document;
          var v208 = aboveNum + "\n";
          JAM.call(v207.write, v207, [v208], JAM.policy.p17);
          var v209 = outputWindow.document;
          var v210 = lineOfText$$1 + "\n";
          JAM.call(v209.write, v209, [v210], JAM.policy.p17);
          var v214 = strands$$1 == "two";
          if (v214) {
            var v211 = outputWindow.document;
            var v673 = complement(lineOfText$$1);
            var v212 = v673 + "\n";
            JAM.call(v211.write, v211, [v212], JAM.policy.p17);
            var v213 = outputWindow.document;
            JAM.call(v213.write, v213, ["\n"], JAM.policy.p11);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v218 = i$$6 < stopBase$$2;
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
  var v237 = i$$7 < stopBase$$3;
  for (;v237;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v674 = basePerLine$$3 / groupSize$$3;
    var v225 = j$$8 <= v674;
    for (;v225;) {
      var v221 = k$$2 < groupSize$$3;
      for (;v221;) {
        var v675 = i$$7 + k$$2;
        var v219 = v675 >= stopBase$$3;
        if (v219) {
          break;
        }
        var v676 = k$$2 + i$$7;
        var v220 = JAM.call(text$$13.charAt, text$$13, [v676], JAM.policy.p17);
        lineOfText$$2 = lineOfText$$2 + v220;
        k$$2 = k$$2 + 1;
        v221 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v223 = numberPosition$$2 == "above";
      if (v223) {
        var v222 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v222;
      }
      var v224 = i$$7 >= stopBase$$3;
      if (v224) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v677 = basePerLine$$3 / groupSize$$3;
      v225 = j$$8 <= v677;
    }
    var v236 = numberPosition$$2 == "left";
    if (v236) {
      var v226 = outputWindow.document;
      var v960 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v678 = v960 + lineOfText$$2;
      var v227 = v678 + "\n";
      JAM.call(v226.write, v226, [v227], JAM.policy.p17);
    } else {
      var v235 = numberPosition$$2 == "right";
      if (v235) {
        var v228 = outputWindow.document;
        var v679 = lineOfText$$2 + i$$7;
        var v229 = v679 + "\n";
        JAM.call(v228.write, v228, [v229], JAM.policy.p17);
      } else {
        var v234 = numberPosition$$2 == "above";
        if (v234) {
          var v230 = outputWindow.document;
          var v231 = aboveNum$$1 + "\n";
          JAM.call(v230.write, v230, [v231], JAM.policy.p17);
          var v232 = outputWindow.document;
          var v233 = lineOfText$$2 + "\n";
          JAM.call(v232.write, v232, [v233], JAM.policy.p17);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v237 = i$$7 < stopBase$$3;
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
  var v1125 = sequence$$13.length;
  var v961 = v1125 <= firstIndexToMutate;
  var v1126 = !v961;
  if (v1126) {
    v961 = lastIndexToMutate < 0;
  }
  var v680 = v961;
  var v962 = !v680;
  if (v962) {
    v680 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v238 = v680;
  if (v238) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v246 = i$$8 < numMut;
  for (;v246;) {
    maxNum = sequence$$13.length;
    var v681 = Math.random();
    var v239 = v681 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v239], JAM.policy.p15);
    var v682 = randNum < firstIndexToMutate;
    var v963 = !v682;
    if (v963) {
      v682 = randNum > lastIndexToMutate;
    }
    var v240 = v682;
    if (v240) {
      numMut++;
      i$$8++;
      v246 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p15);
    needNewChar = true;
    for (;needNewChar;) {
      var v683 = Math.random();
      var v684 = components$$1.length;
      var v241 = v683 * v684;
      componentsIndex = JAM.call(Math.round, Math, [v241], JAM.policy.p15);
      var v685 = components$$1.length;
      var v242 = componentsIndex == v685;
      if (v242) {
        componentsIndex = 0;
      }
      var v686 = components$$1[componentsIndex];
      var v243 = v686 != currentChar;
      if (v243) {
        needNewChar = false;
      }
    }
    var v687 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v688 = components$$1[componentsIndex];
    var v244 = v687 + v688;
    var v689 = randNum + 1;
    var v690 = sequence$$13.length;
    var v245 = JAM.call(sequence$$13.substring, sequence$$13, [v689, v690], JAM.policy.p27);
    sequence$$13 = v244 + v245;
    i$$8++;
    v246 = i$$8 < numMut;
  }
  var v247 = outputWindow.document;
  var v248 = addReturns(sequence$$13);
  JAM.call(v247.write, v247, [v248], JAM.policy.p17);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v253 = j$$9 < lengthOut$$1;
  for (;v253;) {
    var v691 = Math.random();
    var v692 = components$$2.length;
    var v249 = v691 * v692;
    tempNum$$1 = JAM.call(Math.floor, Math, [v249], JAM.policy.p15);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v693 = sequence$$14.length;
    var v252 = v693 == 60;
    if (v252) {
      var v250 = outputWindow.document;
      var v251 = sequence$$14 + "\n";
      JAM.call(v250.write, v250, [v251], JAM.policy.p17);
      sequence$$14 = "";
    }
    j$$9++;
    v253 = j$$9 < lengthOut$$1;
  }
  var v254 = outputWindow.document;
  var v255 = sequence$$14 + "\n";
  JAM.call(v254.write, v254, [v255], JAM.policy.p17);
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
  var v259 = dnaConformation == "circular";
  if (v259) {
    var v256 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v256.length;
    var v1127 = sequence$$15.length;
    var v964 = v1127 - lookAhead;
    var v965 = sequence$$15.length;
    var v694 = JAM.call(sequence$$15.substring, sequence$$15, [v964, v965], JAM.policy.p27);
    var v257 = v694 + sequence$$15;
    var v258 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v257 + v258;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v260 = outputWindow.document;
  JAM.call(v260.write, v260, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v261 = outputWindow.document;
  var v1128 = '<tr><td class="title" width="200px">' + "Site:";
  var v966 = v1128 + '</td><td class="title">';
  var v695 = v966 + "Positions:";
  var v262 = v695 + "</td></tr>\n";
  JAM.call(v261.write, v261, [v262], JAM.policy.p17);
  var i$$9 = 0;
  var v696 = arrayOfItems.length;
  var v278 = i$$9 < v696;
  for (;v278;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v697 = arrayOfItems[i$$9];
    var v263 = JAM.call(v697.match, v697, [/\/.+\//], JAM.policy.p15);
    matchExp = v263 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v1129 = arrayOfItems[i$$9];
    var v967 = JAM.call(v1129.match, v1129, [/\)\D*\d+/], JAM.policy.p15);
    var v698 = v967.toString();
    var v264 = JAM.call(v698.replace, v698, [/\)\D*/, ""], JAM.policy.p16);
    cutDistance = parseFloat(v264);
    var v270 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v270;) {
      var v265 = matchExp.lastIndex;
      matchPosition = v265 - cutDistance;
      var v699 = matchPosition >= lowerLimit;
      if (v699) {
        v699 = matchPosition < upperLimit;
      }
      var v268 = v699;
      if (v268) {
        timesFound++;
        var v266 = tempString$$1 + ", ";
        var v700 = matchPosition - shiftValue;
        var v267 = v700 + 1;
        tempString$$1 = v266 + v267;
      }
      var v701 = matchExp.lastIndex;
      var v968 = RegExp.lastMatch;
      var v702 = v968.length;
      var v269 = v701 - v702;
      matchExp.lastIndex = v269 + 1;
      v270 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v703 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p15);
    var v271 = v703 != -1;
    if (v271) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p16);
    }
    var v275 = timesFound == 0;
    if (v275) {
      backGroundClass = "none";
    } else {
      var v274 = timesFound == 1;
      if (v274) {
        backGroundClass = "one";
      } else {
        var v273 = timesFound == 2;
        if (v273) {
          backGroundClass = "two";
        } else {
          var v272 = timesFound == 3;
          if (v272) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v276 = outputWindow.document;
    var v1451 = '<tr><td class="' + backGroundClass;
    var v1388 = v1451 + '">';
    var v1531 = arrayOfItems[i$$9];
    var v1498 = JAM.call(v1531.match, v1531, [/\([^\(]+\)/], JAM.policy.p15);
    var v1452 = v1498.toString();
    var v1389 = JAM.call(v1452.replace, v1452, [/\(|\)/g, ""], JAM.policy.p16);
    var v1324 = v1388 + v1389;
    var v1246 = v1324 + '</td><td class="';
    var v1130 = v1246 + backGroundClass;
    var v969 = v1130 + '">';
    var v704 = v969 + tempString$$1;
    var v277 = v704 + "</td></tr>\n";
    JAM.call(v276.write, v276, [v277], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v705 = arrayOfItems.length;
    v278 = i$$9 < v705;
  }
  var v279 = outputWindow.document;
  JAM.call(v279.write, v279, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v280 = outputWindow.document;
  JAM.call(v280.write, v280, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v281 = outputWindow.document;
  var v1325 = '<tr><td class="title">' + "Pattern:";
  var v1247 = v1325 + '</td><td class="title">';
  var v1131 = v1247 + "Times found:";
  var v970 = v1131 + '</td><td class="title">';
  var v706 = v970 + "Percentage:";
  var v282 = v706 + "</td></tr>\n";
  JAM.call(v281.write, v281, [v282], JAM.policy.p17);
  var i$$10 = 0;
  var v707 = arrayOfItems$$1.length;
  var v291 = i$$10 < v707;
  for (;v291;) {
    var tempNumber = 0;
    var v708 = arrayOfItems$$1[i$$10];
    var v283 = JAM.call(v708.match, v708, [/\/[^\/]+\//], JAM.policy.p15);
    var matchExp$$1 = v283 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v709 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v285 = v709 != -1;
    if (v285) {
      var v284 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v284.length;
    }
    var percentage = 0;
    var v971 = originalLength + 1;
    var v1248 = arrayOfItems$$1[i$$10];
    var v1132 = JAM.call(v1248.match, v1248, [/\d+/], JAM.policy.p15);
    var v972 = parseFloat(v1132);
    var v710 = v971 - v972;
    var v288 = v710 > 0;
    if (v288) {
      var v286 = 100 * tempNumber;
      var v711 = originalLength + 1;
      var v1133 = arrayOfItems$$1[i$$10];
      var v973 = JAM.call(v1133.match, v1133, [/\d+/], JAM.policy.p15);
      var v712 = parseFloat(v973);
      var v287 = v711 - v712;
      percentage = v286 / v287;
    }
    var v289 = outputWindow.document;
    var v1532 = arrayOfItems$$1[i$$10];
    var v1499 = JAM.call(v1532.match, v1532, [/\([^\(]+\)\b/], JAM.policy.p15);
    var v1453 = v1499.toString();
    var v1390 = JAM.call(v1453.replace, v1453, [/\(|\)/g, ""], JAM.policy.p16);
    var v1326 = "<tr><td>" + v1390;
    var v1249 = v1326 + "</td><td>";
    var v1134 = v1249 + tempNumber;
    var v974 = v1134 + "</td><td>";
    var v975 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9);
    var v713 = v974 + v975;
    var v290 = v713 + "</td></tr>\n";
    JAM.call(v289.write, v289, [v290], JAM.policy.p17);
    i$$10++;
    var v714 = arrayOfItems$$1.length;
    v291 = i$$10 < v714;
  }
  var v292 = outputWindow.document;
  JAM.call(v292.write, v292, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v715 = sequence$$17.length;
  var v299 = v715 > 0;
  for (;v299;) {
    maxNum$$1 = sequence$$17.length;
    var v716 = Math.random();
    var v293 = v716 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v293], JAM.policy.p15);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p15);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v294 = randNum$$1 + 1;
    var v295 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v294, v295], JAM.policy.p16);
    sequence$$17 = tempString1 + tempString2;
    var v717 = tempSeq.length;
    var v298 = v717 == 60;
    if (v298) {
      var v296 = outputWindow.document;
      var v297 = tempSeq + "\n";
      JAM.call(v296.write, v296, [v297], JAM.policy.p17);
      tempSeq = "";
    }
    var v718 = sequence$$17.length;
    v299 = v718 > 0;
  }
  var v300 = outputWindow.document;
  var v301 = tempSeq + "\n";
  JAM.call(v300.write, v300, [v301], JAM.policy.p17);
  return true;
}
function getRestrictionSiteString(type$$25) {
  var v719 = type$$25.toLowerCase();
  var v303 = v719 == "standard";
  if (v303) {
    var v1845 = "/aggcct/ (AatI agg|cct)3," + "/gacgtc/ (AatII gacgt|c)1,";
    var v1844 = v1845 + "/tgcgca/ (Acc16I tgc|gca)3,";
    var v1843 = v1844 + "/cgcg/ (AccII cg|cg)2,";
    var v1842 = v1843 + "/tccgga/ (AccIII t|ccgga)5,";
    var v1841 = v1842 + "/aacgtt/ (AclI aa|cgtt)4,";
    var v1840 = v1841 + "/cacgtg/ (AcvI cac|gtg)3,";
    var v1839 = v1840 + "/gtac/ (AfaI gt|ac)2,";
    var v1838 = v1839 + "/agcgct/ (AfeI agc|gct)3,";
    var v1837 = v1838 + "/cttaag/ (AflII c|ttaag)5,";
    var v1836 = v1837 + "/accggt/ (AgeI a|ccggt)5,";
    var v1835 = v1836 + "/actagt/ (AhlI a|ctagt)5,";
    var v1834 = v1835 + "/gtgcac/ (Alw441 g|tgcac)5,";
    var v1833 = v1834 + "/agct/ (AluI ag|ct)2,";
    var v1832 = v1833 + "/agcgct/ (Aor51HI agc|gct)3,";
    var v1831 = v1832 + "/gggccc/ (ApaI gggcc|c)1,";
    var v1830 = v1831 + "/gtgcac/ (ApaLI g|tgcac)5,";
    var v1829 = v1830 + "/ggcgcgcc/ (AscI gg|cgcgcc)6,";
    var v1828 = v1829 + "/attaat/ (AseI at|taat)4,";
    var v1827 = v1828 + "/ggtacc/ (Asp718I g|gtacc)5,";
    var v1826 = v1827 + "/ttcgaa/ (AsuII tt|cgaa)4,";
    var v1825 = v1826 + "/c[cty]cg[agr]g/ (AvaI c|ycgrg)5,";
    var v1824 = v1825 + "/tgcgca/ (AviII tgc|gca)3,";
    var v1823 = v1824 + "/cctagg/ (AvrII c|ctagg)5,";
    var v1822 = v1823 + "/tggcca/ (BalI tgg|cca)3,";
    var v1821 = v1822 + "/ggatcc/ (BamHI g|gatcc)5,";
    var v1820 = v1821 + "/atcgat/ (BanIII at|cgat)4,";
    var v1819 = v1820 + "/ggcgcc/ (BbeI ggcgc|c)1,";
    var v1818 = v1819 + "/cacgtg/ (BbrPI cac|gtg)3,";
    var v1817 = v1818 + "/gcatgc/ (BbuI gcatg|c)1,";
    var v1816 = v1817 + "/actagt/ (BcuI a|ctagt)5,";
    var v1815 = v1816 + "/tgatca/ (BclI t|gatca)5,";
    var v1814 = v1815 + "/ctag/ (BfaI c|tag)3,";
    var v1813 = v1814 + "/cttaag/ (BfrI c|ttaag)5,";
    var v1812 = v1813 + "/atgcat/ (BfrBI atg|cat)3,";
    var v1811 = v1812 + "/agatct/ (BglII a|gatct)5,";
    var v1810 = v1811 + "/cctagg/ (BlnI c|ctagg)5,";
    var v1809 = v1810 + "/atcgat/ (BseCI at|cgat)4,";
    var v1808 = v1809 + "/gcgcgc/ (BsePI g|cgcgc)5,";
    var v1807 = v1808 + "/cggccg/ (BseX3I c|ggccg)5,";
    var v1806 = v1807 + "/accggt/ (BshTI a|ccggt)5,";
    var v1805 = v1806 + "/tgtaca/ (Bsp1407I t|gtaca)5,";
    var v1804 = v1805 + "/ccatgg/ (Bsp19I c|catgg)5,";
    var v1803 = v1804 + "/atcgat/ (BspDI at|cgat)4,";
    var v1802 = v1803 + "/tccgga/ (BspEI t|ccgga)5,";
    var v1801 = v1802 + "/tgtaca/ (BsrGI t|gtaca)5,";
    var v1800 = v1801 + "/gcgcgc/ (BssHII g|cgcgc)5,";
    var v1799 = v1800 + "/cgcg/ (BstUI cg|cg)2,";
    var v1798 = v1799 + "/atcgat/ (ClaI at|cgat)4,";
    var v1797 = v1798 + "/gatc/ (DpnII |gatc)4,";
    var v1796 = v1797 + "/tttaaa/ (DraI ttt|aaa)3,";
    var v1795 = v1796 + "/cggccg/ (EagI c|ggccg)5,";
    var v1794 = v1795 + "/gaattc/ (EcoRI g|aattc)5,";
    var v1793 = v1794 + "/gatatc/ (EcoRV gat|atc)3,";
    var v1792 = v1793 + "/ggcgcc/ (EgeI ggc|gcc)3,";
    var v1791 = v1792 + "/ggccggcc/ (FseI ggccgg|cc)2,";
    var v1790 = v1791 + "/tgcgca/ (FspI tgc|gca)3,";
    var v1789 = v1790 + "/ggcc/ (HaeIII gg|cc)2,";
    var v1788 = v1789 + "/gt[cty][agr]ac/ (HincII gty|rac)3,";
    var v1787 = v1788 + "/aagctt/ (HindIII a|agctt)5,";
    var v1786 = v1787 + "/ga[acgturyswkmbdhvn]tc/ (HinfI g|antc)4,";
    var v1785 = v1786 + "/gttaac/ (HpaI gtt|aac)3,";
    var v1784 = v1785 + "/ccgg/ (HpaII c|cgg)3,";
    var v1783 = v1784 + "/ggcgcc/ (KasI g|gcgcc)5,";
    var v1782 = v1783 + "/ggtacc/ (KpnI ggtac|c)1,";
    var v1781 = v1782 + "/[acgturyswkmbdhvn]gatc[acgturyswkmbdhvn]/ (MboI |gatc)5,";
    var v1780 = v1781 + "/caattg/ (MfeI c|aattg)5,";
    var v1779 = v1780 + "/acgcgt/ (MluI a|cgcgt)5,";
    var v1778 = v1779 + "/tggcca/ (MscI tgg|cca)3,";
    var v1777 = v1778 + "/ttaa/ (MseI t|taa)3,";
    var v1776 = v1777 + "/ccgg/ (MspI c|cgg)3,";
    var v1775 = v1776 + "/gccggc/ (NaeI gcc|ggc)3,";
    var v1774 = v1775 + "/ggcgcc/ (NarI gg|cgcc)4,";
    var v1773 = v1774 + "/ccatgg/ (NcoI c|catgg)5,";
    var v1772 = v1773 + "/catatg/ (NdeI ca|tatg)4,";
    var v1771 = v1772 + "/gatc/ (NdeII |gatc)4,";
    var v1770 = v1771 + "/gccggc/ (NgoMIV g|ccggc)5,";
    var v1769 = v1770 + "/gctagc/ (NheI g|ctagc)5,";
    var v1768 = v1769 + "/catg/ (NlaIII catg|)0,";
    var v1767 = v1768 + "/gcggccgc/ (NotI gc|ggccgc)6,";
    var v1766 = v1767 + "/tcgcga/ (NruI tcg|cga)3,";
    var v1765 = v1766 + "/atgcat/ (NsiI atgca|t)1,";
    var v1764 = v1765 + "/ttaattaa/ (PacI ttaat|taa)3,";
    var v1763 = v1764 + "/acatgt/ (PciI a|catgt)5,";
    var v1762 = v1763 + "/ggcc/ (PhoI gg|cc)2,";
    var v1761 = v1762 + "/gtttaaac/ (PmeI gttt|aaac)4,";
    var v1760 = v1761 + "/cacgtg/ (PmlI cac|gtg)3,";
    var v1759 = v1760 + "/ttataa/ (PsiI tta|taa)3,";
    var v1758 = v1759 + "/ctgcag/ (PstI ctgca|g)1,";
    var v1757 = v1758 + "/cgatcg/ (PvuI cgat|cg)2,";
    var v1756 = v1757 + "/cagctg/ (PvuII cag|ctg)3,";
    var v1755 = v1756 + "/gtac/ (RsaI gt|ac)2,";
    var v1754 = v1755 + "/gagctc/ (SacI gagct|c)1,";
    var v1736 = v1754 + "/ccgcgg/ (SacII ccgc|gg)2,";
    var v1718 = v1736 + "/gtcgac/ (SalI g|tcgac)5,";
    var v1700 = v1718 + "/cctgcagg/ (SbfI cctgca|gg)2,";
    var v1681 = v1700 + "/agtact/ (ScaI agt|act)3,";
    var v1661 = v1681 + "/ggcgcc/ (SfoI ggc|gcc)3,";
    var v1637 = v1661 + "/cccggg/ (SmaI ccc|ggg)3,";
    var v1613 = v1637 + "/tacgta/ (SnaBI tac|gta)3,";
    var v1589 = v1613 + "/actagt/ (SpeI a|ctagt)5,";
    var v1562 = v1589 + "/gcatgc/ (SphI gcatg|c)1,";
    var v1533 = v1562 + "/aatatt/ (SspI aat|att)3,";
    var v1500 = v1533 + "/gagctc/ (SstI gagct|c)1,";
    var v1454 = v1500 + "/ccgcgg/ (SstII ccgc|gg)2,";
    var v1391 = v1454 + "/aggcct/ (StuI agg|cct)3,";
    var v1327 = v1391 + "/atttaaat/ (SwaI attt|aaat)4,";
    var v1250 = v1327 + "/tcga/ (TaqI t|cga)3,";
    var v1135 = v1250 + "/ctcgag/ (TliI c|tcgag)5,";
    var v976 = v1135 + "/attaat/ (VspI at|taat)4,";
    var v720 = v976 + "/tctaga/ (XbaI t|ctaga)5,";
    var v302 = v720 + "/ctcgag/ (XhoI c|tcgag)5,";
    return v302 + "/cccggg/ (XmaI c|ccggg)5";
  }
  return true;
}
function getGeneticCodeString(type$$26) {
  var v977 = type$$26.toLowerCase();
  var v721 = v977 == "standard";
  var v979 = !v721;
  if (v979) {
    var v978 = type$$26.toLowerCase();
    v721 = v978 == "transl_table=1";
  }
  var v305 = v721;
  if (v305) {
    var v1737 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1719 = v1737 + "/ga[tcuy]/=D,";
    var v1701 = v1719 + "/ga[agr]/=E,";
    var v1682 = v1701 + "/[tu][tu][tcuy]/=F,";
    var v1662 = v1682 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1638 = v1662 + "/ca[tcuy]/=H,";
    var v1614 = v1638 + "/a[tu][atcuwmhy]/=I,";
    var v1590 = v1614 + "/aa[agr]/=K,";
    var v1563 = v1590 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1534 = v1563 + "/a[tu]g/=M,";
    var v1501 = v1534 + "/aa[tucy]/=N,";
    var v1455 = v1501 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1392 = v1455 + "/ca[agr]/=Q,";
    var v1328 = v1392 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1251 = v1328 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1136 = v1251 + "/ac[acgturyswkmbdhvn]/=T,";
    var v980 = v1136 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v722 = v980 + "/[tu]gg/=W,";
    var v304 = v722 + "/[tu]a[ctuy]/=Y,";
    return v304 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v723 = type$$26.toLowerCase();
  var v307 = v723 == "transl_table=2";
  if (v307) {
    var v1738 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1720 = v1738 + "/ga[tcuy]/=D,";
    var v1702 = v1720 + "/ga[agr]/=E,";
    var v1683 = v1702 + "/[tu][tu][tcuy]/=F,";
    var v1663 = v1683 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1639 = v1663 + "/ca[tcuy]/=H,";
    var v1615 = v1639 + "/a[tu][tcuy]/=I,";
    var v1591 = v1615 + "/aa[agr]/=K,";
    var v1564 = v1591 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1535 = v1564 + "/a[tu][agr]/=M,";
    var v1502 = v1535 + "/aa[tucy]/=N,";
    var v1456 = v1502 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1393 = v1456 + "/ca[agr]/=Q,";
    var v1329 = v1393 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1252 = v1329 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1137 = v1252 + "/ac[acgturyswkmbdhvn]/=T,";
    var v981 = v1137 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v724 = v981 + "/[tu]g[agr]/=W,";
    var v306 = v724 + "/[tu]a[ctuy]/=Y,";
    return v306 + "/[tu]a[agr]|ag[agr]/=*";
  }
  var v725 = type$$26.toLowerCase();
  var v309 = v725 == "transl_table=3";
  if (v309) {
    var v1739 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1721 = v1739 + "/ga[tcuy]/=D,";
    var v1703 = v1721 + "/ga[agr]/=E,";
    var v1684 = v1703 + "/[tu][tu][tcuy]/=F,";
    var v1664 = v1684 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1640 = v1664 + "/ca[tcuy]/=H,";
    var v1616 = v1640 + "/a[tu][tcuy]/=I,";
    var v1592 = v1616 + "/aa[agr]/=K,";
    var v1565 = v1592 + "/[tu][tu][agr]/=L,";
    var v1536 = v1565 + "/a[tu][agr]/=M,";
    var v1503 = v1536 + "/aa[tucy]/=N,";
    var v1457 = v1503 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1394 = v1457 + "/ca[agr]/=Q,";
    var v1330 = v1394 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1253 = v1330 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1138 = v1253 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v982 = v1138 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v726 = v982 + "/[tu]g[agr]/=W,";
    var v308 = v726 + "/[tu]a[ctuy]/=Y,";
    return v308 + "/[tu]a[agr]/=*";
  }
  var v727 = type$$26.toLowerCase();
  var v311 = v727 == "transl_table=4";
  if (v311) {
    var v1740 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1722 = v1740 + "/ga[tcuy]/=D,";
    var v1704 = v1722 + "/ga[agr]/=E,";
    var v1685 = v1704 + "/[tu][tu][tcuy]/=F,";
    var v1665 = v1685 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1641 = v1665 + "/ca[tcuy]/=H,";
    var v1617 = v1641 + "/a[tu][atcuwmhy]/=I,";
    var v1593 = v1617 + "/aa[agr]/=K,";
    var v1566 = v1593 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1537 = v1566 + "/a[tu]g/=M,";
    var v1504 = v1537 + "/aa[tucy]/=N,";
    var v1458 = v1504 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1395 = v1458 + "/ca[agr]/=Q,";
    var v1331 = v1395 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1254 = v1331 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1139 = v1254 + "/ac[acgturyswkmbdhvn]/=T,";
    var v983 = v1139 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v728 = v983 + "/[tu]g[agr]/=W,";
    var v310 = v728 + "/[tu]a[ctuy]/=Y,";
    return v310 + "/[tu]a[agr]/=*";
  }
  var v729 = type$$26.toLowerCase();
  var v313 = v729 == "transl_table=5";
  if (v313) {
    var v1741 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1723 = v1741 + "/ga[tcuy]/=D,";
    var v1705 = v1723 + "/ga[agr]/=E,";
    var v1686 = v1705 + "/[tu][tu][tcuy]/=F,";
    var v1666 = v1686 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1642 = v1666 + "/ca[tcuy]/=H,";
    var v1618 = v1642 + "/a[tu][tcuy]/=I,";
    var v1594 = v1618 + "/aa[agr]/=K,";
    var v1567 = v1594 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1538 = v1567 + "/a[tu][agr]/=M,";
    var v1505 = v1538 + "/aa[tucy]/=N,";
    var v1459 = v1505 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1396 = v1459 + "/ca[agr]/=Q,";
    var v1332 = v1396 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1255 = v1332 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1140 = v1255 + "/ac[acgturyswkmbdhvn]/=T,";
    var v984 = v1140 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v730 = v984 + "/[tu]g[agr]/=W,";
    var v312 = v730 + "/[tu]a[ctuy]/=Y,";
    return v312 + "/[tu]a[agr]/=*";
  }
  var v731 = type$$26.toLowerCase();
  var v315 = v731 == "transl_table=6";
  if (v315) {
    var v1742 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1724 = v1742 + "/ga[tcuy]/=D,";
    var v1706 = v1724 + "/ga[agr]/=E,";
    var v1687 = v1706 + "/[tu][tu][tcuy]/=F,";
    var v1667 = v1687 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1643 = v1667 + "/ca[tcuy]/=H,";
    var v1619 = v1643 + "/a[tu][atcuwmhy]/=I,";
    var v1595 = v1619 + "/aa[agr]/=K,";
    var v1568 = v1595 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1539 = v1568 + "/a[tu]g/=M,";
    var v1506 = v1539 + "/aa[tucy]/=N,";
    var v1460 = v1506 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1397 = v1460 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v1333 = v1397 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1256 = v1333 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1141 = v1256 + "/ac[acgturyswkmbdhvn]/=T,";
    var v985 = v1141 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v732 = v985 + "/[tu]gg/=W,";
    var v314 = v732 + "/[tu]a[ctuy]/=Y,";
    return v314 + "/[tu]ga/=*";
  }
  var v733 = type$$26.toLowerCase();
  var v317 = v733 == "transl_table=9";
  if (v317) {
    var v1743 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1725 = v1743 + "/ga[tcuy]/=D,";
    var v1707 = v1725 + "/ga[agr]/=E,";
    var v1688 = v1707 + "/[tu][tu][tcuy]/=F,";
    var v1668 = v1688 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1644 = v1668 + "/ca[tcuy]/=H,";
    var v1620 = v1644 + "/a[tu][atcuwmhy]/=I,";
    var v1596 = v1620 + "/aag/=K,";
    var v1569 = v1596 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1540 = v1569 + "/a[tu]g/=M,";
    var v1507 = v1540 + "/aa[atcuwmhy]/=N,";
    var v1461 = v1507 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1398 = v1461 + "/ca[agr]/=Q,";
    var v1334 = v1398 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1257 = v1334 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1142 = v1257 + "/ac[acgturyswkmbdhvn]/=T,";
    var v986 = v1142 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v734 = v986 + "/[tu]g[agr]/=W,";
    var v316 = v734 + "/[tu]a[ctuy]/=Y,";
    return v316 + "/[tu]a[agr]/=*";
  }
  var v735 = type$$26.toLowerCase();
  var v319 = v735 == "transl_table=10";
  if (v319) {
    var v1744 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1726 = v1744 + "/ga[tcuy]/=D,";
    var v1708 = v1726 + "/ga[agr]/=E,";
    var v1689 = v1708 + "/[tu][tu][tcuy]/=F,";
    var v1669 = v1689 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1645 = v1669 + "/ca[tcuy]/=H,";
    var v1621 = v1645 + "/a[tu][atcuwmhy]/=I,";
    var v1597 = v1621 + "/aa[agr]/=K,";
    var v1570 = v1597 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1541 = v1570 + "/a[tu]g/=M,";
    var v1508 = v1541 + "/aa[tucy]/=N,";
    var v1462 = v1508 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1399 = v1462 + "/ca[agr]/=Q,";
    var v1335 = v1399 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1258 = v1335 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1143 = v1258 + "/ac[acgturyswkmbdhvn]/=T,";
    var v987 = v1143 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v736 = v987 + "/[tu]gg/=W,";
    var v318 = v736 + "/[tu]a[ctuy]/=Y,";
    return v318 + "/[tu]a[agr]/=*";
  }
  var v737 = type$$26.toLowerCase();
  var v321 = v737 == "transl_table=11";
  if (v321) {
    var v1745 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1727 = v1745 + "/ga[tcuy]/=D,";
    var v1709 = v1727 + "/ga[agr]/=E,";
    var v1690 = v1709 + "/[tu][tu][tcuy]/=F,";
    var v1670 = v1690 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1646 = v1670 + "/ca[tcuy]/=H,";
    var v1622 = v1646 + "/a[tu][atcuwmhy]/=I,";
    var v1598 = v1622 + "/aa[agr]/=K,";
    var v1571 = v1598 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1542 = v1571 + "/a[tu]g/=M,";
    var v1509 = v1542 + "/aa[tucy]/=N,";
    var v1463 = v1509 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1400 = v1463 + "/ca[agr]/=Q,";
    var v1336 = v1400 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1259 = v1336 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1144 = v1259 + "/ac[acgturyswkmbdhvn]/=T,";
    var v988 = v1144 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v738 = v988 + "/[tu]gg/=W,";
    var v320 = v738 + "/[tu]a[ctuy]/=Y,";
    return v320 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v739 = type$$26.toLowerCase();
  var v323 = v739 == "transl_table=12";
  if (v323) {
    var v1746 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1728 = v1746 + "/ga[tcuy]/=D,";
    var v1710 = v1728 + "/ga[agr]/=E,";
    var v1691 = v1710 + "/[tu][tu][tcuy]/=F,";
    var v1671 = v1691 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1647 = v1671 + "/ca[tcuy]/=H,";
    var v1623 = v1647 + "/a[tu][atcuwmhy]/=I,";
    var v1599 = v1623 + "/aa[agr]/=K,";
    var v1572 = v1599 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1543 = v1572 + "/a[tu]g/=M,";
    var v1510 = v1543 + "/aa[tucy]/=N,";
    var v1464 = v1510 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1401 = v1464 + "/ca[agr]/=Q,";
    var v1337 = v1401 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1260 = v1337 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v1145 = v1260 + "/ac[acgturyswkmbdhvn]/=T,";
    var v989 = v1145 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v740 = v989 + "/[tu]gg/=W,";
    var v322 = v740 + "/[tu]a[ctuy]/=Y,";
    return v322 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v741 = type$$26.toLowerCase();
  var v325 = v741 == "transl_table=13";
  if (v325) {
    var v1747 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1729 = v1747 + "/ga[tcuy]/=D,";
    var v1711 = v1729 + "/ga[agr]/=E,";
    var v1692 = v1711 + "/[tu][tu][tcuy]/=F,";
    var v1672 = v1692 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1648 = v1672 + "/ca[tcuy]/=H,";
    var v1624 = v1648 + "/a[tu][tcuy]/=I,";
    var v1600 = v1624 + "/aa[agr]/=K,";
    var v1573 = v1600 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1544 = v1573 + "/a[tu][agr]/=M,";
    var v1511 = v1544 + "/aa[tucy]/=N,";
    var v1465 = v1511 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1402 = v1465 + "/ca[agr]/=Q,";
    var v1338 = v1402 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1261 = v1338 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1146 = v1261 + "/ac[acgturyswkmbdhvn]/=T,";
    var v990 = v1146 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v742 = v990 + "/[tu]g[agr]/=W,";
    var v324 = v742 + "/[tu]a[ctuy]/=Y,";
    return v324 + "/[tu]a[agr]/=*";
  }
  var v743 = type$$26.toLowerCase();
  var v327 = v743 == "transl_table=14";
  if (v327) {
    var v1748 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1730 = v1748 + "/ga[tcuy]/=D,";
    var v1712 = v1730 + "/ga[agr]/=E,";
    var v1693 = v1712 + "/[tu][tu][tcuy]/=F,";
    var v1673 = v1693 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1649 = v1673 + "/ca[tcuy]/=H,";
    var v1625 = v1649 + "/a[tu][atcuwmhy]/=I,";
    var v1601 = v1625 + "/aag/=K,";
    var v1574 = v1601 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1545 = v1574 + "/a[tu]g/=M,";
    var v1512 = v1545 + "/aa[atcuwmhy]/=N,";
    var v1466 = v1512 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1403 = v1466 + "/ca[agr]/=Q,";
    var v1339 = v1403 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1262 = v1339 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1147 = v1262 + "/ac[acgturyswkmbdhvn]/=T,";
    var v991 = v1147 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v744 = v991 + "/[tu]g[agr]/=W,";
    var v326 = v744 + "/[tu]a[atcuwmhy]/=Y,";
    return v326 + "/[tu]ag/=*";
  }
  var v745 = type$$26.toLowerCase();
  var v329 = v745 == "transl_table=15";
  if (v329) {
    var v1749 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1731 = v1749 + "/ga[tcuy]/=D,";
    var v1713 = v1731 + "/ga[agr]/=E,";
    var v1694 = v1713 + "/[tu][tu][tcuy]/=F,";
    var v1674 = v1694 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1650 = v1674 + "/ca[tcuy]/=H,";
    var v1626 = v1650 + "/a[tu][atcuwmhy]/=I,";
    var v1602 = v1626 + "/aa[agr]/=K,";
    var v1575 = v1602 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1546 = v1575 + "/a[tu]g/=M,";
    var v1513 = v1546 + "/aa[tucy]/=N,";
    var v1467 = v1513 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1404 = v1467 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v1340 = v1404 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1263 = v1340 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1148 = v1263 + "/ac[acgturyswkmbdhvn]/=T,";
    var v992 = v1148 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v746 = v992 + "/[tu]gg/=W,";
    var v328 = v746 + "/[tu]a[ctuy]/=Y,";
    return v328 + "/[tu][agr]a/=*";
  }
  var v747 = type$$26.toLowerCase();
  var v331 = v747 == "transl_table=16";
  if (v331) {
    var v1750 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1732 = v1750 + "/ga[tcuy]/=D,";
    var v1714 = v1732 + "/ga[agr]/=E,";
    var v1695 = v1714 + "/[tu][tu][tcuy]/=F,";
    var v1675 = v1695 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1651 = v1675 + "/ca[tcuy]/=H,";
    var v1627 = v1651 + "/a[tu][atcuwmhy]/=I,";
    var v1603 = v1627 + "/aa[agr]/=K,";
    var v1576 = v1603 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1547 = v1576 + "/a[tu]g/=M,";
    var v1514 = v1547 + "/aa[tucy]/=N,";
    var v1468 = v1514 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1405 = v1468 + "/ca[agr]/=Q,";
    var v1341 = v1405 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1264 = v1341 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1149 = v1264 + "/ac[acgturyswkmbdhvn]/=T,";
    var v993 = v1149 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v748 = v993 + "/[tu]gg/=W,";
    var v330 = v748 + "/[tu]a[ctuy]/=Y,";
    return v330 + "/[tu][agr]a/=*";
  }
  var v749 = type$$26.toLowerCase();
  var v333 = v749 == "transl_table=21";
  if (v333) {
    var v1751 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1733 = v1751 + "/ga[tcuy]/=D,";
    var v1715 = v1733 + "/ga[agr]/=E,";
    var v1696 = v1715 + "/[tu][tu][tcuy]/=F,";
    var v1676 = v1696 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1652 = v1676 + "/ca[tcuy]/=H,";
    var v1628 = v1652 + "/a[tu][tcuy]/=I,";
    var v1604 = v1628 + "/aag/=K,";
    var v1577 = v1604 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1548 = v1577 + "/a[tu][agr]/=M,";
    var v1515 = v1548 + "/aa[atcuwmhy]/=N,";
    var v1469 = v1515 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1406 = v1469 + "/ca[agr]/=Q,";
    var v1342 = v1406 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1265 = v1342 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1150 = v1265 + "/ac[acgturyswkmbdhvn]/=T,";
    var v994 = v1150 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v750 = v994 + "/[tu]g[agr]/=W,";
    var v332 = v750 + "/[tu]a[ctuy]/=Y,";
    return v332 + "/[tu]a[agr]/=*";
  }
  var v751 = type$$26.toLowerCase();
  var v335 = v751 == "transl_table=22";
  if (v335) {
    var v1752 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1734 = v1752 + "/ga[tcuy]/=D,";
    var v1716 = v1734 + "/ga[agr]/=E,";
    var v1697 = v1716 + "/[tu][tu][tcuy]/=F,";
    var v1677 = v1697 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1653 = v1677 + "/ca[tcuy]/=H,";
    var v1629 = v1653 + "/a[tu][atcuwmhy]/=I,";
    var v1605 = v1629 + "/aa[agr]/=K,";
    var v1578 = v1605 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1549 = v1578 + "/a[tu]g/=M,";
    var v1516 = v1549 + "/aa[tucy]/=N,";
    var v1470 = v1516 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1407 = v1470 + "/ca[agr]/=Q,";
    var v1343 = v1407 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1266 = v1343 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v1151 = v1266 + "/ac[acgturyswkmbdhvn]/=T,";
    var v995 = v1151 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v752 = v995 + "/[tu]gg/=W,";
    var v334 = v752 + "/[tu]a[ctuy]/=Y,";
    return v334 + "/[tu][agcrsmv]a/=*";
  }
  var v753 = type$$26.toLowerCase();
  var v337 = v753 == "transl_table=23";
  if (v337) {
    var v1753 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1735 = v1753 + "/ga[tcuy]/=D,";
    var v1717 = v1735 + "/ga[agr]/=E,";
    var v1698 = v1717 + "/[tu][tu][tcuy]/=F,";
    var v1678 = v1698 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1654 = v1678 + "/ca[tcuy]/=H,";
    var v1630 = v1654 + "/a[tu][atcuwmhy]/=I,";
    var v1606 = v1630 + "/aa[agr]/=K,";
    var v1579 = v1606 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1550 = v1579 + "/a[tu]g/=M,";
    var v1517 = v1550 + "/aa[tucy]/=N,";
    var v1471 = v1517 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1408 = v1471 + "/ca[agr]/=Q,";
    var v1344 = v1408 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1267 = v1344 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1152 = v1267 + "/ac[acgturyswkmbdhvn]/=T,";
    var v996 = v1152 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v754 = v996 + "/[tu]gg/=W,";
    var v336 = v754 + "/[tu]a[ctuy]/=Y,";
    return v336 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*";
  }
  return true;
}
function primerMap(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 2E5;
  var v755 = testScript();
  var v338 = v755 == false;
  if (v338) {
    return false;
  }
  var restrictionSiteCollection;
  var forwardMatches;
  var reverseMatches;
  var v1409 = theDocument.forms;
  var v1345 = v1409[0];
  var v1268 = v1345.elements;
  var v1153 = v1268[7];
  var v997 = v1153.options;
  var v1410 = theDocument.forms;
  var v1346 = v1410[0];
  var v1269 = v1346.elements;
  var v1154 = v1269[7];
  var v998 = v1154.selectedIndex;
  var v756 = v997[v998];
  var v339 = v756.value;
  var geneticCode = getGeneticCodeString(v339);
  var restrictionSites = getRestrictionSiteString("standard");
  var v1411 = theDocument.forms;
  var v1347 = v1411[0];
  var v1270 = v1347.elements;
  var v1155 = v1270[0];
  var v999 = checkFormElement(v1155);
  var v757 = v999 == false;
  var v1001 = !v757;
  if (v1001) {
    var v1472 = theDocument.forms;
    var v1412 = v1472[0];
    var v1348 = v1412.elements;
    var v1271 = v1348[0];
    var v1156 = v1271.value;
    var v1000 = checkSequenceLength(v1156, maxInput$$3);
    v757 = v1000 == false;
  }
  var v340 = v757;
  if (v340) {
    return false;
  }
  geneticCode = JAM.call(geneticCode.split, geneticCode, [/,/], JAM.policy.p15);
  var v758 = checkGeneticCode(geneticCode);
  var v341 = v758 == false;
  if (v341) {
    return false;
  }
  restrictionSites = JAM.call(restrictionSites.split, restrictionSites, [/,/], JAM.policy.p15);
  var v759 = checkRestPatterns(restrictionSites);
  var v342 = v759 == false;
  if (v342) {
    return false;
  }
  var isColor$$1;
  var v1473 = theDocument.forms;
  var v1413 = v1473[0];
  var v1349 = v1413.elements;
  var v1272 = v1349[10];
  var v1157 = v1272.options;
  var v1474 = theDocument.forms;
  var v1414 = v1474[0];
  var v1350 = v1414.elements;
  var v1273 = v1350[10];
  var v1158 = v1273.selectedIndex;
  var v1002 = v1157[v1158];
  var v760 = v1002.value;
  var v343 = v760 == "color";
  if (v343) {
    isColor$$1 = true;
  } else {
    isColor$$1 = false;
  }
  var v1274 = theDocument.forms;
  var v1159 = v1274[0];
  var v1003 = v1159.elements;
  var v761 = v1003[1];
  var v344 = v761.value;
  var primers = JAM.call(v344.split, v344, [/,/], JAM.policy.p15);
  var newPrimers = new Array;
  var primerSeq;
  var primerRe;
  var primerName;
  var matchArray$$2;
  var re$$3 = /\(([^\(]+)\)\s*([A-Za-z]+)/;
  var i$$11 = 0;
  var v762 = primers.length;
  var v349 = i$$11 < v762;
  for (;v349;) {
    var v763 = primers[i$$11];
    var v348 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [v763], JAM.policy.p17);
    if (v348) {
      primerName = matchArray$$2[1];
      var v1004 = matchArray$$2[2];
      var v764 = v1004.length;
      var v345 = v764 < 10;
      if (v345) {
        alert("Please enter primer sequences that are at least 10 bases long.");
        return false;
      }
      primerSeq = matchArray$$2[2];
      var v1005 = convertDegenerates(primerSeq);
      var v765 = "/" + v1005;
      var v346 = v765 + "/gi";
      if (JAM.isEval(eval)) {
        primerRe = eval("introspect(JAM.policy.pFull) { " + v346 + " }");
      } else {
        primerRe = JAM.call(eval, null, [v346]);
      }
      var v347 = new Primer(primerSeq, primerRe, primerName);
      JAM.call(newPrimers.push, newPrimers, [v347], JAM.policy.p17);
    }
    i$$11++;
    var v766 = primers.length;
    v349 = i$$11 < v766;
  }
  _openWindow("Primer Map", isColor$$1);
  var v1475 = theDocument.forms;
  var v1415 = v1475[0];
  var v1351 = v1415.elements;
  var v1275 = v1351[8];
  var v1160 = v1275.options;
  var v1476 = theDocument.forms;
  var v1416 = v1476[0];
  var v1352 = v1416.elements;
  var v1276 = v1352[8];
  var v1161 = v1276.selectedIndex;
  var v1006 = v1160[v1161];
  var v767 = v1006.value;
  var v360 = v767 == "shown";
  if (v360) {
    var v350 = outputWindow.document;
    var v768 = '<span class="one">' + "cuts once";
    var v351 = v768 + "</span><br />\n";
    JAM.call(v350.write, v350, [v351], JAM.policy.p17);
    var v352 = outputWindow.document;
    var v769 = '<span class="two">' + "cuts twice";
    var v353 = v769 + "</span><br />\n";
    JAM.call(v352.write, v352, [v353], JAM.policy.p17);
    var v354 = outputWindow.document;
    JAM.call(v354.write, v354, ["\n"], JAM.policy.p11);
    var v355 = outputWindow.document;
    var v770 = '<span class="forward_primer">' + "&gt;&gt;&gt;forward primer";
    var v356 = v770 + "</span><br />\n";
    JAM.call(v355.write, v355, [v356], JAM.policy.p17);
    var v357 = outputWindow.document;
    var v771 = '<span class="reverse_primer">' + "&lt;&lt;&lt;reverse primer";
    var v358 = v771 + "</span><br />\n";
    JAM.call(v357.write, v357, [v358], JAM.policy.p17);
    var v359 = outputWindow.document;
    JAM.call(v359.write, v359, ["\n"], JAM.policy.p11);
  }
  var v1277 = theDocument.forms;
  var v1162 = v1277[0];
  var v1007 = v1162.elements;
  var v772 = v1007[0];
  var v361 = v772.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v361);
  i$$11 = 0;
  var v773 = arrayOfFasta$$1.length;
  var v395 = i$$11 < v773;
  for (;v395;) {
    var v362 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v362);
    var v363 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v363);
    newDna = removeNonDna(newDna);
    openPre();
    var v364 = outputWindow.document;
    var v1477 = theDocument.forms;
    var v1417 = v1477[0];
    var v1353 = v1417.elements;
    var v1278 = v1353[9];
    var v1163 = v1278.options;
    var v1478 = theDocument.forms;
    var v1418 = v1478[0];
    var v1354 = v1418.elements;
    var v1279 = v1354[9];
    var v1164 = v1279.selectedIndex;
    var v1008 = v1163[v1164];
    var v774 = v1008.value;
    var v365 = getInfoFromTitleAndSequenceAndTopology(title$$9, newDna, v774);
    JAM.call(v364.write, v364, [v365], JAM.policy.p17);
    var v1479 = theDocument.forms;
    var v1419 = v1479[0];
    var v1355 = v1419.elements;
    var v1280 = v1355[8];
    var v1165 = v1280.options;
    var v1480 = theDocument.forms;
    var v1420 = v1480[0];
    var v1356 = v1420.elements;
    var v1281 = v1356[8];
    var v1166 = v1281.selectedIndex;
    var v1009 = v1165[v1166];
    var v775 = v1009.value;
    var v367 = v775 == "shown";
    if (v367) {
      var v1421 = theDocument.forms;
      var v1357 = v1421[0];
      var v1282 = v1357.elements;
      var v1167 = v1282[9];
      var v1010 = v1167.options;
      var v1422 = theDocument.forms;
      var v1358 = v1422[0];
      var v1283 = v1358.elements;
      var v1168 = v1283[9];
      var v1011 = v1168.selectedIndex;
      var v776 = v1010[v1011];
      var v366 = v776.value;
      restrictionSiteCollection = findRestrictionSites(newDna, restrictionSites, v366);
      restrictionSiteCollection.sortRestrictionSites();
    }
    var v1423 = theDocument.forms;
    var v1359 = v1423[0];
    var v1284 = v1359.elements;
    var v1169 = v1284[9];
    var v1012 = v1169.options;
    var v1424 = theDocument.forms;
    var v1360 = v1424[0];
    var v1285 = v1360.elements;
    var v1170 = v1285[9];
    var v1013 = v1170.selectedIndex;
    var v777 = v1012[v1013];
    var v368 = v777.value;
    forwardMatches = findMatches(newPrimers, newDna, v368, false);
    var v778 = complement(newDna);
    var v369 = reverse(v778);
    var v1425 = theDocument.forms;
    var v1361 = v1425[0];
    var v1286 = v1361.elements;
    var v1171 = v1286[9];
    var v1014 = v1171.options;
    var v1426 = theDocument.forms;
    var v1362 = v1426[0];
    var v1287 = v1362.elements;
    var v1172 = v1287[9];
    var v1015 = v1172.selectedIndex;
    var v779 = v1014[v1015];
    var v370 = v779.value;
    reverseMatches = findMatches(newPrimers, v369, v370, true);
    var j$$10 = 0;
    var v1016 = forwardMatches.matches;
    var v780 = v1016.length;
    var v377 = j$$10 < v780;
    for (;v377;) {
      var v781 = forwardMatches.matches;
      var v371 = v781[j$$10];
      var v1173 = forwardMatches.matches;
      var v1017 = v1173[j$$10];
      var v782 = v1017.position;
      var v1288 = forwardMatches.matches;
      var v1174 = v1288[j$$10];
      var v1018 = v1174.matchingText;
      var v783 = v1018.length;
      v371.position = v782 - v783;
      var v784 = forwardMatches.matches;
      var v372 = v784[j$$10];
      var v1175 = forwardMatches.matches;
      var v1019 = v1175[j$$10];
      var v785 = v1019.position;
      var v1289 = forwardMatches.matches;
      var v1176 = v1289[j$$10];
      var v1020 = v1176.matchingText;
      var v786 = v1020.length;
      v372.end = v785 + v786;
      var v1177 = forwardMatches.matches;
      var v1021 = v1177[j$$10];
      var v787 = v1021.position;
      var v374 = v787 < 0;
      if (v374) {
        var v788 = forwardMatches.matches;
        var v373 = v788[j$$10];
        var v1178 = forwardMatches.matches;
        var v1022 = v1178[j$$10];
        var v789 = v1022.position;
        var v790 = newDna.length;
        v373.position = v789 + v790;
      }
      var v1179 = forwardMatches.matches;
      var v1023 = v1179[j$$10];
      var v791 = v1023.end;
      var v792 = newDna.length;
      var v376 = v791 > v792;
      if (v376) {
        var v793 = forwardMatches.matches;
        var v375 = v793[j$$10];
        var v1180 = forwardMatches.matches;
        var v1024 = v1180[j$$10];
        var v794 = v1024.end;
        var v795 = newDna.length;
        v375.end = v794 - v795;
      }
      j$$10++;
      var v1025 = forwardMatches.matches;
      var v796 = v1025.length;
      v377 = j$$10 < v796;
    }
    j$$10 = 0;
    var v1026 = reverseMatches.matches;
    var v797 = v1026.length;
    var v384 = j$$10 < v797;
    for (;v384;) {
      var v798 = reverseMatches.matches;
      var v378 = v798[j$$10];
      var v799 = newDna.length;
      var v1181 = reverseMatches.matches;
      var v1027 = v1181[j$$10];
      var v800 = v1027.position;
      v378.position = v799 - v800;
      var v801 = reverseMatches.matches;
      var v379 = v801[j$$10];
      var v1182 = reverseMatches.matches;
      var v1028 = v1182[j$$10];
      var v802 = v1028.position;
      var v1290 = reverseMatches.matches;
      var v1183 = v1290[j$$10];
      var v1029 = v1183.matchingText;
      var v803 = v1029.length;
      v379.end = v802 + v803;
      var v1184 = reverseMatches.matches;
      var v1030 = v1184[j$$10];
      var v804 = v1030.position;
      var v381 = v804 < 0;
      if (v381) {
        var v805 = reverseMatches.matches;
        var v380 = v805[j$$10];
        var v1185 = reverseMatches.matches;
        var v1031 = v1185[j$$10];
        var v806 = v1031.position;
        var v807 = newDna.length;
        v380.position = v806 + v807;
      }
      var v1186 = reverseMatches.matches;
      var v1032 = v1186[j$$10];
      var v808 = v1032.end;
      var v809 = newDna.length;
      var v383 = v808 > v809;
      if (v383) {
        var v810 = reverseMatches.matches;
        var v382 = v810[j$$10];
        var v1187 = reverseMatches.matches;
        var v1033 = v1187[j$$10];
        var v811 = v1033.end;
        var v812 = newDna.length;
        v382.end = v811 - v812;
      }
      j$$10++;
      var v1034 = reverseMatches.matches;
      var v813 = v1034.length;
      v384 = j$$10 < v813;
    }
    forwardMatches.sortMatches();
    reverseMatches.sortMatches();
    var v1427 = theDocument.forms;
    var v1363 = v1427[0];
    var v1291 = v1363.elements;
    var v1188 = v1291[5];
    var v1035 = v1188.options;
    var v1428 = theDocument.forms;
    var v1364 = v1428[0];
    var v1292 = v1364.elements;
    var v1189 = v1292[5];
    var v1036 = v1189.selectedIndex;
    var v814 = v1035[v1036];
    var v385 = v814.value;
    var v1429 = theDocument.forms;
    var v1365 = v1429[0];
    var v1293 = v1365.elements;
    var v1190 = v1293[6];
    var v1037 = v1190.options;
    var v1430 = theDocument.forms;
    var v1366 = v1430[0];
    var v1294 = v1366.elements;
    var v1191 = v1294[6];
    var v1038 = v1191.selectedIndex;
    var v815 = v1037[v1038];
    var v386 = v815.value;
    layoutPrimerMap(newDna, geneticCode, restrictionSiteCollection, forwardMatches, reverseMatches, v385, v386);
    var v387 = outputWindow.document;
    JAM.call(v387.write, v387, ["\n"], JAM.policy.p11);
    closePre();
    var v1481 = theDocument.forms;
    var v1431 = v1481[0];
    var v1367 = v1431.elements;
    var v1295 = v1367[8];
    var v1192 = v1295.options;
    var v1482 = theDocument.forms;
    var v1432 = v1482[0];
    var v1368 = v1432.elements;
    var v1296 = v1368[8];
    var v1193 = v1296.selectedIndex;
    var v1039 = v1192[v1193];
    var v816 = v1039.value;
    var v390 = v816 == "shown";
    if (v390) {
      var v1433 = theDocument.forms;
      var v1369 = v1433[0];
      var v1297 = v1369.elements;
      var v1194 = v1297[9];
      var v1040 = v1194.options;
      var v1434 = theDocument.forms;
      var v1370 = v1434[0];
      var v1298 = v1370.elements;
      var v1195 = v1298[9];
      var v1041 = v1195.selectedIndex;
      var v817 = v1040[v1041];
      var v388 = v817.value;
      writeRestrictionSites(newDna, restrictionSites, v388);
      var v389 = outputWindow.document;
      JAM.call(v389.write, v389, ["<br />\n"], JAM.policy.p11);
    }
    writePrimerSites(newPrimers);
    var v391 = outputWindow.document;
    JAM.call(v391.write, v391, ["<br />\n<br />\n"], JAM.policy.p11);
    j$$10 = 0;
    var v818 = newPrimers.length;
    var v394 = j$$10 < v818;
    for (;v394;) {
      var v392 = newPrimers[j$$10];
      v392.hasForwardMatch = false;
      var v393 = newPrimers[j$$10];
      v393.hasReverseMatch = false;
      j$$10++;
      var v819 = newPrimers.length;
      v394 = j$$10 < v819;
    }
    i$$11++;
    var v820 = arrayOfFasta$$1.length;
    v395 = i$$11 < v820;
  }
  closeWindow();
  return true;
}
function writePrimerSites(primers$$1) {
  var backGroundClass$$1;
  var v396 = outputWindow.document;
  JAM.call(v396.write, v396, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v397 = outputWindow.document;
  var v1196 = '<tr><td class="title" width="200px">' + "Primer:";
  var v1042 = v1196 + '</td><td class="title">';
  var v821 = v1042 + "Sequence:";
  var v398 = v821 + "</td></tr>\n";
  JAM.call(v397.write, v397, [v398], JAM.policy.p17);
  var i$$12 = 0;
  var v822 = primers$$1.length;
  var v404 = i$$12 < v822;
  for (;v404;) {
    var v1043 = primers$$1[i$$12];
    var v823 = v1043.hasForwardMatch;
    if (v823) {
      var v1044 = primers$$1[i$$12];
      v823 = v1044.hasReverseMatch;
    }
    var v401 = v823;
    if (v401) {
      backGroundClass$$1 = "many";
    } else {
      var v824 = primers$$1[i$$12];
      var v400 = v824.hasForwardMatch;
      if (v400) {
        backGroundClass$$1 = "forward_primer";
      } else {
        var v825 = primers$$1[i$$12];
        var v399 = v825.hasReverseMatch;
        if (v399) {
          backGroundClass$$1 = "reverse_primer";
        } else {
          backGroundClass$$1 = "none";
        }
      }
    }
    var v402 = outputWindow.document;
    var v1551 = '<tr><td class="' + backGroundClass$$1;
    var v1518 = v1551 + '">';
    var v1552 = primers$$1[i$$12];
    var v1519 = v1552.name;
    var v1483 = v1518 + v1519;
    var v1435 = v1483 + '</td><td class="';
    var v1371 = v1435 + backGroundClass$$1;
    var v1299 = v1371 + '">';
    var v1197 = v1299 + "5'-";
    var v1300 = primers$$1[i$$12];
    var v1198 = v1300.sequence;
    var v1045 = v1197 + v1198;
    var v826 = v1045 + "-3'";
    var v403 = v826 + "</td></tr>\n";
    JAM.call(v402.write, v402, [v403], JAM.policy.p17);
    i$$12++;
    var v827 = primers$$1.length;
    v404 = i$$12 < v827;
  }
  var v405 = outputWindow.document;
  JAM.call(v405.write, v405, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function layoutPrimerMap(dnaSequence$$3, geneticCode$$1, restrictionSiteCollection$$1, forwardMatches$$1, reverseMatches$$1, basesPerLine, readingFrame) {
  basesPerLine = parseInt(basesPerLine);
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var spaceString = "                                                                                                                                  ";
  var textLayout = new TextLayout;
  var v828 = readingFrame == "3";
  var v1046 = !v828;
  if (v1046) {
    v828 = readingFrame == "all_three";
  }
  var v407 = v828;
  if (v407) {
    var translation = new TranslationComponent;
    var v1199 = dnaSequence$$3.length;
    var v1047 = JAM.call(dnaSequence$$3.substring, dnaSequence$$3, [2, v1199], JAM.policy.p13);
    var v829 = translate(v1047, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v406 = "  " + v829;
    JAM.call(translation.setCharacters, translation, [v406], JAM.policy.p17);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p17);
  }
  var v830 = readingFrame == "2";
  var v1048 = !v830;
  if (v1048) {
    v830 = readingFrame == "all_three";
  }
  var v409 = v830;
  if (v409) {
    translation = new TranslationComponent;
    var v1200 = dnaSequence$$3.length;
    var v1049 = JAM.call(dnaSequence$$3.substring, dnaSequence$$3, [1, v1200], JAM.policy.p13);
    var v831 = translate(v1049, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v408 = " " + v831;
    JAM.call(translation.setCharacters, translation, [v408], JAM.policy.p17);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p17);
  }
  var v832 = readingFrame == "1";
  var v1050 = !v832;
  if (v1050) {
    v832 = readingFrame == "all_three";
  }
  var v411 = v832;
  if (v411) {
    translation = new TranslationComponent;
    var v410 = translate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    JAM.call(translation.setCharacters, translation, [v410], JAM.policy.p17);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p17);
  }
  var v413 = readingFrame == "uppercase";
  if (v413) {
    translation = new UppercaseTranslationComponent;
    var v412 = uppercaseTranslate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    JAM.call(translation.setCharacters, translation, [v412], JAM.policy.p17);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p17);
  }
  var dna = new DnaComponent;
  JAM.call(dna.setCharacters, dna, [dnaSequence$$3], JAM.policy.p17);
  JAM.call(textLayout.addComponent, textLayout, [dna], JAM.policy.p17);
  var ruler = new RulerComponent;
  JAM.call(ruler.setCharacters, ruler, [dnaSequence$$3], JAM.policy.p17);
  ruler.buildRuler();
  JAM.call(textLayout.addComponent, textLayout, [ruler], JAM.policy.p17);
  dna = new DnaComponent;
  var v414 = complement(dnaSequence$$3);
  JAM.call(dna.setCharacters, dna, [v414], JAM.policy.p17);
  JAM.call(textLayout.addComponent, textLayout, [dna], JAM.policy.p17);
  var sitesInRange = new Array;
  var i$$13 = 0;
  var v833 = dnaSequence$$3.length;
  var v438 = i$$13 < v833;
  for (;v438;) {
    var v428 = restrictionSiteCollection$$1 != null;
    if (v428) {
      var v415 = i$$13 + basesPerLine;
      sitesInRange = JAM.call(restrictionSiteCollection$$1.getSitesInRange, restrictionSiteCollection$$1, [i$$13, v415], JAM.policy.p16);
      sitesInRange.reverse();
      var j$$11 = 0;
      var v834 = sitesInRange.length;
      var v427 = j$$11 < v834;
      for (;v427;) {
        var v1051 = sitesInRange[j$$11];
        var v835 = v1051.numberOfCuts;
        var v426 = v835 == 1;
        if (v426) {
          var v416 = outputWindow.document;
          var v1484 = sitesInRange[j$$11];
          var v1436 = v1484.position;
          var v1372 = v1436 - i$$13;
          var v1301 = v1372 + 9;
          var v1201 = JAM.call(spaceString.substring, spaceString, [0, v1301], JAM.policy.p13);
          var v1052 = v1201 + '<span class="one">';
          var v1202 = sitesInRange[j$$11];
          var v1053 = v1202.label;
          var v836 = v1052 + v1053;
          var v417 = v836 + "</span>\n";
          JAM.call(v416.write, v416, [v417], JAM.policy.p17);
        } else {
          var v1054 = sitesInRange[j$$11];
          var v837 = v1054.numberOfCuts;
          var v425 = v837 == 2;
          if (v425) {
            var v418 = outputWindow.document;
            var v1485 = sitesInRange[j$$11];
            var v1437 = v1485.position;
            var v1373 = v1437 - i$$13;
            var v1302 = v1373 + 9;
            var v1203 = JAM.call(spaceString.substring, spaceString, [0, v1302], JAM.policy.p13);
            var v1055 = v1203 + '<span class="two">';
            var v1204 = sitesInRange[j$$11];
            var v1056 = v1204.label;
            var v838 = v1055 + v1056;
            var v419 = v838 + "</span>\n";
            JAM.call(v418.write, v418, [v419], JAM.policy.p17);
          } else {
            var v1057 = sitesInRange[j$$11];
            var v839 = v1057.numberOfCuts;
            var v424 = v839 == 3;
            if (v424) {
              var v420 = outputWindow.document;
              var v1486 = sitesInRange[j$$11];
              var v1438 = v1486.position;
              var v1374 = v1438 - i$$13;
              var v1303 = v1374 + 9;
              var v1205 = JAM.call(spaceString.substring, spaceString, [0, v1303], JAM.policy.p13);
              var v1058 = v1205 + '<span class="three">';
              var v1206 = sitesInRange[j$$11];
              var v1059 = v1206.label;
              var v840 = v1058 + v1059;
              var v421 = v840 + "</span>\n";
              JAM.call(v420.write, v420, [v421], JAM.policy.p17);
            } else {
              var v422 = outputWindow.document;
              var v1439 = sitesInRange[j$$11];
              var v1375 = v1439.position;
              var v1304 = v1375 - i$$13;
              var v1207 = v1304 + 9;
              var v1060 = JAM.call(spaceString.substring, spaceString, [0, v1207], JAM.policy.p13);
              var v1208 = sitesInRange[j$$11];
              var v1061 = v1208.label;
              var v841 = v1060 + v1061;
              var v423 = v841 + "\n";
              JAM.call(v422.write, v422, [v423], JAM.policy.p17);
            }
          }
        }
        j$$11++;
        var v842 = sitesInRange.length;
        v427 = j$$11 < v842;
      }
    }
    var v429 = i$$13 + basesPerLine;
    sitesInRange = JAM.call(forwardMatches$$1.getMatchesInRange, forwardMatches$$1, [i$$13, v429], JAM.policy.p16);
    sitesInRange.reverse();
    j$$11 = 0;
    var v843 = sitesInRange.length;
    var v432 = j$$11 < v843;
    for (;v432;) {
      var v430 = outputWindow.document;
      var v1655 = sitesInRange[j$$11];
      var v1631 = v1655.position;
      var v1607 = v1631 - i$$13;
      var v1580 = v1607 + 9;
      var v1553 = JAM.call(spaceString.substring, spaceString, [0, v1580], JAM.policy.p13);
      var v1520 = v1553 + '<span class="forward_primer">';
      var v1487 = v1520 + "&gt;&gt;&gt;";
      var v1521 = sitesInRange[j$$11];
      var v1488 = v1521.primerName;
      var v1440 = v1487 + v1488;
      var v1376 = v1440 + "&gt;&gt;&gt;";
      var v1305 = v1376 + " ";
      var v1441 = sitesInRange[j$$11];
      var v1377 = v1441.position;
      var v1306 = v1377 + 1;
      var v1209 = v1305 + v1306;
      var v1062 = v1209 + " to ";
      var v1210 = sitesInRange[j$$11];
      var v1063 = v1210.end;
      var v844 = v1062 + v1063;
      var v431 = v844 + "</span>\n";
      JAM.call(v430.write, v430, [v431], JAM.policy.p17);
      j$$11++;
      var v845 = sitesInRange.length;
      v432 = j$$11 < v845;
    }
    var v433 = i$$13 + basesPerLine;
    sitesInRange = JAM.call(reverseMatches$$1.getMatchesInRange, reverseMatches$$1, [i$$13, v433], JAM.policy.p16);
    sitesInRange.reverse();
    j$$11 = 0;
    var v846 = sitesInRange.length;
    var v436 = j$$11 < v846;
    for (;v436;) {
      var v434 = outputWindow.document;
      var v1656 = sitesInRange[j$$11];
      var v1632 = v1656.position;
      var v1608 = v1632 - i$$13;
      var v1581 = v1608 + 9;
      var v1554 = JAM.call(spaceString.substring, spaceString, [0, v1581], JAM.policy.p13);
      var v1522 = v1554 + '<span class="reverse_primer">';
      var v1489 = v1522 + "&lt;&lt;&lt;";
      var v1523 = sitesInRange[j$$11];
      var v1490 = v1523.primerName;
      var v1442 = v1489 + v1490;
      var v1378 = v1442 + "&lt;&lt;&lt;";
      var v1307 = v1378 + " ";
      var v1443 = sitesInRange[j$$11];
      var v1379 = v1443.position;
      var v1308 = v1379 + 1;
      var v1211 = v1307 + v1308;
      var v1064 = v1211 + " to ";
      var v1212 = sitesInRange[j$$11];
      var v1065 = v1212.end;
      var v847 = v1064 + v1065;
      var v435 = v847 + "</span>\n";
      JAM.call(v434.write, v434, [v435], JAM.policy.p17);
      j$$11++;
      var v848 = sitesInRange.length;
      v436 = j$$11 < v848;
    }
    var v437 = i$$13 + basesPerLine;
    JAM.call(textLayout.writeLayout, textLayout, [i$$13, v437], JAM.policy.p16);
    i$$13 = i$$13 + basesPerLine;
    var v849 = dnaSequence$$3.length;
    v438 = i$$13 < v849;
  }
  return true;
}
function translate(dnaSequence$$4, geneticCodeMatchExp$$3, geneticCodeMatchResult$$3) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    var v439 = " " + p1$$2;
    return v439 + " ";
  }
  var v1066 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v850 = v1066.length;
  var v440 = v850 < 3;
  if (v440) {
    return "";
  }
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/(...)/g, v2], JAM.policy.p16);
  var i$$14 = 0;
  var v851 = geneticCodeMatchExp$$3.length;
  var v443 = i$$14 < v851;
  for (;v443;) {
    var v441 = geneticCodeMatchExp$$3[i$$14];
    var v442 = geneticCodeMatchResult$$3[i$$14];
    dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [v441, v442], JAM.policy.p27);
    i$$14++;
    var v852 = geneticCodeMatchExp$$3.length;
    v443 = i$$14 < v852;
  }
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/\S{3}/g, "X"], JAM.policy.p16);
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/\s\S{1,2}$/, ""], JAM.policy.p16);
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/^\s/, ""], JAM.policy.p16);
  return dnaSequence$$4;
}
function uppercaseTranslate(dnaSequence$$5, geneticCodeMatchExp$$4, geneticCodeMatchResult$$4) {
  function v3(str$$9, p1$$3, p2, p3, p4, p5, p6, offset$$11, s$$5) {
    var v1380 = " " + p1$$3;
    var v1309 = v1380 + p3;
    var v1213 = v1309 + p5;
    var v1067 = v1213 + " ";
    var v853 = v1067 + p2;
    var v444 = v853 + p4;
    return v444 + p6;
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/[a-z]/g, " "], JAM.policy.p16);
  var v1068 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v854 = v1068.length;
  var v445 = v854 < 3;
  if (v445) {
    return "";
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/([A-Z])(\s*)([A-Z])(\s*)([A-Z])(\s*)/g, v3], JAM.policy.p16);
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/\s\S{1,2}\s/g, ""], JAM.policy.p16);
  var i$$15 = 0;
  var v855 = geneticCodeMatchExp$$4.length;
  var v448 = i$$15 < v855;
  for (;v448;) {
    var v446 = geneticCodeMatchExp$$4[i$$15];
    var v447 = geneticCodeMatchResult$$4[i$$15];
    dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [v446, v447], JAM.policy.p27);
    i$$15++;
    var v856 = geneticCodeMatchExp$$4.length;
    v448 = i$$15 < v856;
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/\S{3}/g, "X"], JAM.policy.p16);
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/^\s/, ""], JAM.policy.p16);
  return dnaSequence$$5;
}
function findRestrictionSites(sequence$$18, arrayOfItems$$2, dnaConformation$$1) {
  var lookAhead$$1 = 50;
  var lowerLimit$$1 = 0;
  var upperLimit$$1 = sequence$$18.length;
  var shiftValue$$1 = 0;
  var cutDistance$$1;
  var matchExp$$2;
  var matchPosition$$1;
  var matchArray$$3;
  var label;
  var timesFound$$1 = 0;
  var tempArray = new Array;
  var restrictionSiteCollection$$2 = new RestrictionSiteCollection;
  var v452 = dnaConformation$$1 == "circular";
  if (v452) {
    var v449 = JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p13);
    shiftValue$$1 = v449.length;
    var v1214 = sequence$$18.length;
    var v1069 = v1214 - lookAhead$$1;
    var v1070 = sequence$$18.length;
    var v857 = JAM.call(sequence$$18.substring, sequence$$18, [v1069, v1070], JAM.policy.p27);
    var v450 = v857 + sequence$$18;
    var v451 = JAM.call(sequence$$18.substring, sequence$$18, [0, lookAhead$$1], JAM.policy.p13);
    sequence$$18 = v450 + v451;
    lowerLimit$$1 = 0 + shiftValue$$1;
    upperLimit$$1 = upperLimit$$1 + shiftValue$$1;
  }
  var i$$16 = 0;
  var v858 = arrayOfItems$$2.length;
  var v463 = i$$16 < v858;
  for (;v463;) {
    var v859 = arrayOfItems$$2[i$$16];
    var v453 = JAM.call(v859.match, v859, [/\/.+\//], JAM.policy.p15);
    matchExp$$2 = v453 + "gi";
    matchPosition$$1 = 0;
    if (JAM.isEval(eval)) {
      matchExp$$2 = eval("introspect(JAM.policy.pFull) { " + matchExp$$2 + " }");
    } else {
      matchExp$$2 = JAM.call(eval, null, [matchExp$$2]);
    }
    var v1215 = arrayOfItems$$2[i$$16];
    var v1071 = JAM.call(v1215.match, v1215, [/\)\D*\d+/], JAM.policy.p15);
    var v860 = v1071.toString();
    var v454 = JAM.call(v860.replace, v860, [/\)\D*/, ""], JAM.policy.p16);
    cutDistance$$1 = parseFloat(v454);
    var v1072 = arrayOfItems$$2[i$$16];
    var v861 = JAM.call(v1072.match, v1072, [/\([^\(]+\)/], JAM.policy.p15);
    var v455 = v861.toString();
    label = JAM.call(v455.replace, v455, [/\(|\)/g, ""], JAM.policy.p16);
    var v459 = matchArray$$3 = JAM.call(matchExp$$2.exec, matchExp$$2, [sequence$$18], JAM.policy.p17);
    for (;v459;) {
      matchPosition$$1 = matchExp$$2.lastIndex;
      matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
      var v862 = matchPosition$$1 >= lowerLimit$$1;
      if (v862) {
        v862 = matchPosition$$1 < upperLimit$$1;
      }
      var v457 = v862;
      if (v457) {
        timesFound$$1++;
        var v1073 = label + " ";
        var v1216 = matchPosition$$1 - shiftValue$$1;
        var v1074 = v1216 + 1;
        var v863 = v1073 + v1074;
        var v864 = matchPosition$$1 - shiftValue$$1;
        var v456 = new RestrictionSite(v863, v864);
        JAM.call(tempArray.push, tempArray, [v456], JAM.policy.p17);
      }
      var v865 = matchExp$$2.lastIndex;
      var v1075 = RegExp.lastMatch;
      var v866 = v1075.length;
      var v458 = v865 - v866;
      matchExp$$2.lastIndex = v458 + 1;
      v459 = matchArray$$3 = JAM.call(matchExp$$2.exec, matchExp$$2, [sequence$$18], JAM.policy.p17);
    }
    var j$$12 = 0;
    var v867 = tempArray.length;
    var v462 = j$$12 < v867;
    for (;v462;) {
      var v460 = tempArray[j$$12];
      v460.numberOfCuts = timesFound$$1;
      var v461 = tempArray[j$$12];
      JAM.call(restrictionSiteCollection$$2.addRestrictionSite, restrictionSiteCollection$$2, [v461], JAM.policy.p17);
      j$$12++;
      var v868 = tempArray.length;
      v462 = j$$12 < v868;
    }
    timesFound$$1 = 0;
    tempArray = new Array;
    i$$16++;
    var v869 = arrayOfItems$$2.length;
    v463 = i$$16 < v869;
  }
  return restrictionSiteCollection$$2;
}
function findMatches(primers$$2, sequence$$19, topology$$1, isReverseStrand) {
  var matchArray$$4;
  var matchPosition$$2;
  var matchCollection = new MatchCollection;
  var re$$4;
  var originalLength$$1 = sequence$$19.length;
  var v484 = topology$$1 == "circular";
  if (v484) {
    var lookAhead$$2 = 50;
    var v464 = JAM.call(sequence$$19.substring, sequence$$19, [0, lookAhead$$2], JAM.policy.p13);
    var shiftValue$$2 = v464.length;
    var v465 = sequence$$19.length;
    var upperLimit$$2 = v465 + shiftValue$$2;
    var v1217 = sequence$$19.length;
    var v1076 = v1217 - lookAhead$$2;
    var v1077 = sequence$$19.length;
    var v870 = JAM.call(sequence$$19.substring, sequence$$19, [v1076, v1077], JAM.policy.p27);
    var v466 = v870 + sequence$$19;
    var v467 = JAM.call(sequence$$19.substring, sequence$$19, [0, lookAhead$$2], JAM.policy.p13);
    sequence$$19 = v466 + v467;
    var lowerLimit$$2 = 0 + shiftValue$$2;
    var i$$17 = 0;
    var v871 = primers$$2.length;
    var v476 = i$$17 < v871;
    for (;v476;) {
      var v468 = primers$$2[i$$17];
      re$$4 = v468.re;
      var v475 = matchArray$$4 = JAM.call(re$$4.exec, re$$4, [sequence$$19], JAM.policy.p17);
      for (;v475;) {
        matchPosition$$2 = re$$4.lastIndex;
        var v872 = matchPosition$$2 >= lowerLimit$$2;
        if (v872) {
          v872 = matchPosition$$2 < upperLimit$$2;
        }
        var v473 = v872;
        if (v473) {
          matchPosition$$2 = matchPosition$$2 - shiftValue$$2;
          var v469 = matchPosition$$2 == 0;
          if (v469) {
            matchPosition$$2 = originalLength$$1;
          }
          var v1078 = primers$$2[i$$17];
          var v873 = v1078.name;
          var v874 = matchArray$$4[0];
          var v470 = new Match(v873, v874, matchPosition$$2);
          JAM.call(matchCollection.addMatch, matchCollection, [v470], JAM.policy.p17);
          if (isReverseStrand) {
            var v471 = primers$$2[i$$17];
            v471.hasReverseMatch = true;
          } else {
            var v472 = primers$$2[i$$17];
            v472.hasForwardMatch = true;
          }
        }
        var v875 = re$$4.lastIndex;
        var v1079 = RegExp.lastMatch;
        var v876 = v1079.length;
        var v474 = v875 - v876;
        re$$4.lastIndex = v474 + 1;
        v475 = matchArray$$4 = JAM.call(re$$4.exec, re$$4, [sequence$$19], JAM.policy.p17);
      }
      i$$17++;
      var v877 = primers$$2.length;
      v476 = i$$17 < v877;
    }
  } else {
    i$$17 = 0;
    var v878 = primers$$2.length;
    var v483 = i$$17 < v878;
    for (;v483;) {
      var v477 = primers$$2[i$$17];
      re$$4 = v477.re;
      var v482 = matchArray$$4 = JAM.call(re$$4.exec, re$$4, [sequence$$19], JAM.policy.p17);
      for (;v482;) {
        matchPosition$$2 = re$$4.lastIndex;
        var v1080 = primers$$2[i$$17];
        var v879 = v1080.name;
        var v880 = matchArray$$4[0];
        var v478 = new Match(v879, v880, matchPosition$$2);
        JAM.call(matchCollection.addMatch, matchCollection, [v478], JAM.policy.p17);
        if (isReverseStrand) {
          var v479 = primers$$2[i$$17];
          v479.hasReverseMatch = true;
        } else {
          var v480 = primers$$2[i$$17];
          v480.hasForwardMatch = true;
        }
        var v881 = re$$4.lastIndex;
        var v1081 = RegExp.lastMatch;
        var v882 = v1081.length;
        var v481 = v881 - v882;
        re$$4.lastIndex = v481 + 1;
        v482 = matchArray$$4 = JAM.call(re$$4.exec, re$$4, [sequence$$19], JAM.policy.p17);
      }
      i$$17++;
      var v883 = primers$$2.length;
      v483 = i$$17 < v883;
    }
  }
  return matchCollection;
}
function writeLayout(start$$4, stop) {
  var i$$18 = 0;
  var v1082 = this.components;
  var v884 = v1082.length;
  var v486 = i$$18 < v884;
  for (;v486;) {
    var v885 = this.components;
    var v485 = v885[i$$18];
    JAM.call(v485.writeLayoutComponent, v485, [start$$4, stop], JAM.policy.p27);
    i$$18++;
    var v1083 = this.components;
    var v886 = v1083.length;
    v486 = i$$18 < v886;
  }
  return;
}
function addComponent(component) {
  var v487 = this.components;
  JAM.call(v487.push, v487, [component], JAM.policy.p17);
  return;
}
function TextLayout() {
  var v1852 = new Array;
  this.components = v1852;
  return;
}
function writeLayoutComponent(start$$5, stop$$1) {
  return;
}
function setCharacters(text$$14) {
  var v887 = JAM.call(text$$14.search, text$$14, [/./], JAM.policy.p15);
  var v488 = v887 != -1;
  if (v488) {
    var v1853 = JAM.call(text$$14.match, text$$14, [/./g], JAM.policy.p15);
    this.characters = v1853;
  }
  return;
}
function isRoom(start$$6, stop$$2) {
  var v489 = this.characters;
  var rangeToCheck = JAM.call(v489.slice, v489, [start$$6, stop$$2], JAM.policy.p27);
  rangeToCheck = JAM.call(rangeToCheck.join, rangeToCheck, [""], JAM.policy.p11);
  var v888 = JAM.call(rangeToCheck.search, rangeToCheck, [/\w/], JAM.policy.p15);
  var v490 = v888 == -1;
  if (v490) {
    return true;
  } else {
    return false;
  }
  return;
}
function LayoutComponent() {
  var v1854 = new Array;
  this.characters = v1854;
  this.positionLabel = 1;
  return;
}
function TranslationComponent() {
  var v1855 = new Array;
  this.characters = v1855;
  this.positionLabel = 1;
  return;
}
function UppercaseTranslationComponent() {
  var v1856 = new Array;
  this.characters = v1856;
  this.positionLabel = 1;
  return;
}
function DnaComponent() {
  var v1857 = new Array;
  this.characters = v1857;
  this.positionLabel = 1;
  return;
}
function RulerComponent() {
  var v1858 = new Array;
  this.characters = v1858;
  this.positionLabel = 1;
  return;
}
function buildRuler() {
  function v4(str$$12, p1$$6, offset$$14, s$$8) {
    var ruler$$1 = count$$3 + spacing;
    var v491 = count$$3 == 0;
    if (v491) {
      ruler$$1 = spacing;
    }
    count$$3 = count$$3 + 10;
    return JAM.call(ruler$$1.substring, ruler$$1, [0, 10], JAM.policy.p13);
  }
  var v492 = this.characters;
  var sequence$$20 = JAM.call(v492.join, v492, [""], JAM.policy.p11);
  var count$$3 = 0;
  var spacing = "         ";
  sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [/(.{1,10})/g, v4], JAM.policy.p16);
  var v1859 = JAM.call(sequence$$20.match, sequence$$20, [/./g], JAM.policy.p15);
  this.characters = v1859;
  return;
}
function RestrictionSite(label$$1, position) {
  this.label = label$$1;
  this.position = position;
  return;
}
function addRestrictionSite(restrictionSite) {
  var v493 = this.restrictionSites;
  JAM.call(v493.push, v493, [restrictionSite], JAM.policy.p17);
  return;
}
function sortRestrictionSites() {
  var v494 = this.restrictionSites;
  JAM.call(v494.sort, v494, [restrictionSiteSorter], JAM.policy.p17);
  return;
}
function getSitesInRange(start$$11, stop$$7) {
  var arrayToReturn = new Array;
  var v889 = this.restrictionSites;
  var v495 = v889.length;
  var i$$19 = v495 - 1;
  var v498 = i$$19 >= 0;
  for (;v498;) {
    var v1310 = this.restrictionSites;
    var v1218 = v1310[i$$19];
    var v1084 = v1218.position;
    var v890 = v1084 >= start$$11;
    if (v890) {
      var v1311 = this.restrictionSites;
      var v1219 = v1311[i$$19];
      var v1085 = v1219.position;
      v890 = v1085 < stop$$7;
    }
    var v497 = v890;
    if (v497) {
      var v891 = this.restrictionSites;
      var v496 = v891.pop();
      JAM.call(arrayToReturn.push, arrayToReturn, [v496], JAM.policy.p17);
    } else {
      break;
    }
    i$$19--;
    v498 = i$$19 >= 0;
  }
  return arrayToReturn;
}
function RestrictionSiteCollection() {
  var v1860 = new Array;
  this.restrictionSites = v1860;
  return;
}
function restrictionSiteSorter(a, b) {
  var v892 = a.position;
  var v893 = b.position;
  var v499 = v892 < v893;
  if (v499) {
    return 1;
  }
  var v894 = a.position;
  var v895 = b.position;
  var v500 = v894 > v895;
  if (v500) {
    return-1;
  } else {
    return 0;
  }
  return;
}
function Primer(sequence$$21, re$$5, name$$30) {
  this.sequence = sequence$$21;
  this.re = re$$5;
  this.name = name$$30;
  this.hasForwardMatch = false;
  this.hasReverseMatch = false;
  return;
}
function Match(primerName$$1, matchingText, position$$1) {
  this.primerName = primerName$$1;
  this.matchingText = matchingText;
  this.position = position$$1;
  return;
}
function addMatch(match) {
  var v501 = this.matches;
  JAM.call(v501.push, v501, [match], JAM.policy.p17);
  return;
}
function sortMatches() {
  var v502 = this.matches;
  JAM.call(v502.sort, v502, [matchSorter], JAM.policy.p17);
  return;
}
function getMatchesInRange(start$$12, stop$$8) {
  var arrayToReturn$$1 = new Array;
  var v896 = this.matches;
  var v503 = v896.length;
  var i$$20 = v503 - 1;
  var v506 = i$$20 >= 0;
  for (;v506;) {
    var v1312 = this.matches;
    var v1220 = v1312[i$$20];
    var v1086 = v1220.position;
    var v897 = v1086 >= start$$12;
    if (v897) {
      var v1313 = this.matches;
      var v1221 = v1313[i$$20];
      var v1087 = v1221.position;
      v897 = v1087 < stop$$8;
    }
    var v505 = v897;
    if (v505) {
      var v898 = this.matches;
      var v504 = v898.pop();
      JAM.call(arrayToReturn$$1.push, arrayToReturn$$1, [v504], JAM.policy.p17);
    } else {
      break;
    }
    i$$20--;
    v506 = i$$20 >= 0;
  }
  return arrayToReturn$$1;
}
function MatchCollection() {
  var v1861 = new Array;
  this.matches = v1861;
  return;
}
function matchSorter(a$$1, b$$1) {
  var v899 = a$$1.position;
  var v900 = b$$1.position;
  var v507 = v899 < v900;
  if (v507) {
    return 1;
  }
  var v901 = a$$1.position;
  var v902 = b$$1.position;
  var v508 = v901 > v902;
  if (v508) {
    return-1;
  } else {
    return 0;
  }
  return;
}
new TextLayout;
var v509 = TextLayout.prototype;
v509.writeLayout = writeLayout;
var v510 = TextLayout.prototype;
v510.addComponent = addComponent;
new LayoutComponent;
var v511 = LayoutComponent.prototype;
v511.writeLayoutComponent = writeLayoutComponent;
var v512 = LayoutComponent.prototype;
v512.setCharacters = setCharacters;
var v513 = LayoutComponent.prototype;
v513.isRoom = isRoom;
var v514 = TranslationComponent;
var v1862 = new LayoutComponent;
v514.prototype = v1862;
var v515 = TranslationComponent.prototype;
v515.writeLayoutComponent = v5;
var v516 = UppercaseTranslationComponent;
var v1863 = new LayoutComponent;
v516.prototype = v1863;
var v517 = UppercaseTranslationComponent.prototype;
v517.writeLayoutComponent = v6;
var v518 = DnaComponent;
var v1864 = new LayoutComponent;
v518.prototype = v1864;
var v519 = DnaComponent.prototype;
v519.writeLayoutComponent = v7;
var v520 = RulerComponent;
var v1865 = new LayoutComponent;
v520.prototype = v1865;
var v521 = RulerComponent.prototype;
v521.writeLayoutComponent = v10;
new RulerComponent;
var v522 = RulerComponent.prototype;
v522.buildRuler = buildRuler;
new RestrictionSiteCollection;
var v523 = RestrictionSiteCollection.prototype;
v523.addRestrictionSite = addRestrictionSite;
var v524 = RestrictionSiteCollection.prototype;
v524.sortRestrictionSites = sortRestrictionSites;
var v525 = RestrictionSiteCollection.prototype;
v525.getSitesInRange = getSitesInRange;
new MatchCollection;
var v526 = MatchCollection.prototype;
v526.addMatch = addMatch;
var v527 = MatchCollection.prototype;
v527.sortMatches = sortMatches;
var v528 = MatchCollection.prototype;
v528.getMatchesInRange = getMatchesInRange;
JAM.set(document, "onload", v11);
var v529 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11);
JAM.set(v529, "onclick", v12);
var v530 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11);
JAM.set(v530, "onclick", v13)
