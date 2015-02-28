
JAM.startProfile('load');
function v13() {
  var v756 = document.forms;
  var v644 = v756[0];
  var v393 = v644.elements;
  var v14 = v393[0];
  v14.value = " ";
  return;
}
function v12() {
  try {
    transMap();
  } catch (e$$5) {
    var v15 = "The following error was encountered: " + e$$5;
    alert(v15);
  }
  return;
}
function v11() {
  var v394 = document.main_form;
  var v16 = v394.main_submit;
  v16.focus();
  return;
}
function v10(start$$10, stop$$6) {
  function v9(str$$11, p1$$5, offset$$13, s$$7) {
    return JAM.call(p1$$5.replace, p1$$5, [/./g, " "], JAM.policy.p16);
  }
  function v8(str$$10, p1$$4, offset$$12, s$$6) {
    return JAM.call(p1$$4.replace, p1$$4, [/./g, " "], JAM.policy.p16);
  }
  var v17 = outputWindow.document;
  var v395 = this.positionLabel;
  var v18 = rightNum(v395, "", 8, "");
  JAM.call(v17.write, v17, [v18], JAM.policy.p17);
  var v396 = this.characters;
  var v19 = JAM.call(v396.slice, v396, [start$$10, stop$$6], JAM.policy.p27);
  var text$$15 = JAM.call(v19.join, v19, [""], JAM.policy.p10);
  text$$15 = JAM.call(text$$15.replace, text$$15, [/^(\d+)/g, v8], JAM.policy.p16);
  text$$15 = JAM.call(text$$15.replace, text$$15, [/(\d+)$/g, v9], JAM.policy.p16);
  var v20 = outputWindow.document;
  var v21 = text$$15 + "\n";
  JAM.call(v20.write, v20, [v21], JAM.policy.p17);
  var v22 = this.positionLabel;
  var v23 = stop$$6 - start$$10;
  this.positionLabel = v22 + v23;
  return;
}
function v7(start$$9, stop$$5) {
  var v24 = outputWindow.document;
  var v397 = this.positionLabel;
  var v25 = rightNum(v397, "", 8, "");
  JAM.call(v24.write, v24, [v25], JAM.policy.p17);
  var v26 = outputWindow.document;
  var v757 = this.characters;
  var v645 = JAM.call(v757.slice, v757, [start$$9, stop$$5], JAM.policy.p27);
  var v398 = JAM.call(v645.join, v645, [""], JAM.policy.p10);
  var v27 = v398 + "\n";
  JAM.call(v26.write, v26, [v27], JAM.policy.p17);
  var v28 = this.positionLabel;
  var v29 = stop$$5 - start$$9;
  this.positionLabel = v28 + v29;
  return;
}
function v6(start$$8, stop$$4) {
  var v646 = this.characters;
  var v399 = JAM.call(v646.slice, v646, [start$$8, stop$$4], JAM.policy.p27);
  var v30 = JAM.call(v399.join, v399, [""], JAM.policy.p10);
  var textToWrite = v30 + "\n";
  var v400 = JAM.call(textToWrite.search, textToWrite, [/\w/], JAM.policy.p15);
  var v36 = v400 != -1;
  if (v36) {
    var v31 = outputWindow.document;
    var v401 = this.positionLabel;
    var v32 = rightNum(v401, "", 8, "");
    JAM.call(v31.write, v31, [v32], JAM.policy.p17);
    var v33 = this.positionLabel;
    var v402 = JAM.call(textToWrite.match, textToWrite, [/[A-Z]/g], JAM.policy.p15);
    var v34 = v402.length;
    this.positionLabel = v33 + v34;
    var v35 = outputWindow.document;
    JAM.call(v35.write, v35, [textToWrite], JAM.policy.p17);
  }
  return;
}
function v5(start$$7, stop$$3) {
  var v37 = outputWindow.document;
  var v403 = this.positionLabel;
  var v38 = rightNum(v403, "", 8, "");
  JAM.call(v37.write, v37, [v38], JAM.policy.p17);
  var v39 = outputWindow.document;
  var v758 = this.characters;
  var v647 = JAM.call(v758.slice, v758, [start$$7, stop$$3], JAM.policy.p27);
  var v404 = JAM.call(v647.join, v647, [""], JAM.policy.p10);
  var v40 = v404 + "\n";
  JAM.call(v39.write, v39, [v40], JAM.policy.p17);
  var v41 = this.positionLabel;
  var v405 = stop$$3 - start$$7;
  var v42 = v405 / 3;
  this.positionLabel = v41 + v42;
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
  var v43 = arrayOfSequences[0];
  var lengthOfAlign = v43.length;
  var v406 = arrayOfSequences.length;
  var v44 = v406 < 2;
  if (v44) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v407 = arrayOfTitles.length;
  var v46 = i$$1 < v407;
  for (;v46;) {
    var v832 = arrayOfTitles[i$$1];
    var v759 = JAM.call(v832.search, v832, [/\S/], JAM.policy.p15);
    var v648 = v759 == -1;
    var v761 = !v648;
    if (v761) {
      var v833 = arrayOfSequences[i$$1];
      var v760 = JAM.call(v833.search, v833, [/\S/], JAM.policy.p15);
      v648 = v760 == -1;
    }
    var v408 = v648;
    var v650 = !v408;
    if (v650) {
      var v762 = arrayOfSequences[i$$1];
      var v649 = v762.length;
      v408 = v649 != lengthOfAlign;
    }
    var v45 = v408;
    if (v45) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v409 = arrayOfTitles.length;
    v46 = i$$1 < v409;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v888 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p15);
  var v834 = v888 == -1;
  var v890 = !v834;
  if (v890) {
    var v889 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p15);
    v834 = v889 == -1;
  }
  var v763 = v834;
  var v836 = !v763;
  if (v836) {
    var v835 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p15);
    v763 = v835 == -1;
  }
  var v651 = v763;
  var v765 = !v651;
  if (v765) {
    var v764 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p15);
    v651 = v764 == -1;
  }
  var v410 = v651;
  var v653 = !v410;
  if (v653) {
    var v652 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p15);
    v410 = v652 == -1;
  }
  var v47 = v410;
  if (v47) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v654 = formElement.value;
  var v411 = JAM.call(v654.search, v654, [/\S/], JAM.policy.p15);
  var v48 = v411 == -1;
  if (v48) {
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
  var v412 = arrayOfPatterns.length;
  var v51 = z$$2 < v412;
  for (;v51;) {
    var v655 = arrayOfPatterns[z$$2];
    var v413 = JAM.call(v655.search, v655, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p15);
    var v49 = v413 == -1;
    if (v49) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v656 = arrayOfPatterns[z$$2];
    var v414 = moreExpressionCheck(v656);
    var v50 = v414 == false;
    if (v50) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v415 = arrayOfPatterns.length;
    v51 = z$$2 < v415;
  }
  var v52 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v52);
  var v53 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v53);
  var j = 0;
  var v416 = arrayOfPatterns.length;
  var v57 = j < v416;
  for (;v57;) {
    var v657 = arrayOfPatterns[j];
    var v417 = JAM.call(v657.match, v657, [/\/.+\//], JAM.policy.p15);
    var v54 = v417 + "gi";
    if (JAM.isEval(eval)) {
      var v1330 = eval("introspect(JAM.policy.pFull) { " + v54 + " }")
    } else {
      var v1330 = JAM.call(eval, null, [v54])
    }
    geneticCodeMatchExp[j] = v1330;
    var v418 = arrayOfPatterns[j];
    var v55 = JAM.call(v418.match, v418, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v1331 = v55.toString();
    geneticCodeMatchResult[j] = v1331;
    var v56 = geneticCodeMatchResult[j];
    var v1332 = JAM.call(v56.replace, v56, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v1332;
    j++;
    var v419 = arrayOfPatterns.length;
    v57 = j < v419;
  }
  var i$$2 = 0;
  var v658 = testSequence.length;
  var v420 = v658 - 3;
  var v64 = i$$2 <= v420;
  for (;v64;) {
    var v58 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v58], JAM.policy.p16);
    j = 0;
    var v421 = geneticCodeMatchExp.length;
    var v62 = j < v421;
    for (;v62;) {
      var v659 = geneticCodeMatchExp[j];
      var v422 = JAM.call(codon.search, codon, [v659], JAM.policy.p17);
      var v61 = v422 != -1;
      if (v61) {
        var v60 = oneMatch == true;
        if (v60) {
          var v423 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v59 = v423 + ".";
          alert(v59);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v424 = geneticCodeMatchExp.length;
      v62 = j < v424;
    }
    var v63 = oneMatch == false;
    if (v63) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v660 = testSequence.length;
    var v425 = v660 - 3;
    v64 = i$$2 <= v425;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v426 = arrayOfPatterns$$1.length;
  var v66 = z$$3 < v426;
  for (;v66;) {
    var v661 = arrayOfPatterns$$1[z$$3];
    var v427 = JAM.call(v661.search, v661, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p15);
    var v65 = v427 != -1;
    if (v65) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v428 = arrayOfPatterns$$1.length;
    v66 = z$$3 < v428;
  }
  var i$$3 = 0;
  var v429 = arrayOfPatterns$$1.length;
  var v70 = i$$3 < v429;
  for (;v70;) {
    var v662 = arrayOfPatterns$$1[i$$3];
    var v430 = "[" + v662;
    var v67 = v430 + "]";
    var re = new RegExp(v67, "gi");
    var j$$1 = i$$3 + 1;
    var v431 = arrayOfPatterns$$1.length;
    var v69 = j$$1 < v431;
    for (;v69;) {
      var v663 = arrayOfPatterns$$1[j$$1];
      var v432 = JAM.call(v663.search, v663, [re], JAM.policy.p17);
      var v68 = v432 != -1;
      if (v68) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v433 = arrayOfPatterns$$1.length;
      v69 = j$$1 < v433;
    }
    i$$3++;
    var v434 = arrayOfPatterns$$1.length;
    v70 = i$$3 < v434;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v435 = arrayOfPatterns$$2.length;
  var v73 = z$$4 < v435;
  for (;v73;) {
    var v664 = arrayOfPatterns$$2[z$$4];
    var v436 = JAM.call(v664.search, v664, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p15);
    var v71 = v436 == -1;
    if (v71) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v665 = arrayOfPatterns$$2[z$$4];
    var v437 = moreExpressionCheck(v665);
    var v72 = v437 == false;
    if (v72) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v438 = arrayOfPatterns$$2.length;
    v73 = z$$4 < v438;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v766 = getSequenceFromFasta(text$$7);
  var v666 = JAM.call(v766.replace, v766, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v439 = v666.length;
  var v75 = v439 > maxInput;
  if (v75) {
    var v440 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v74 = v440 + " characters.";
    alert(v74);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v441 = text$$8.length;
  var v77 = v441 > maxInput$$1;
  if (v77) {
    var v442 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v76 = v442 + " characters.";
    alert(v76);
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
  var v78 = outputWindow.document;
  JAM.call(v78.write, v78, ["</form>"], JAM.policy.p10);
  return true;
}
function closePre() {
  var v79 = outputWindow.document;
  JAM.call(v79.write, v79, ["</div>"], JAM.policy.p10);
  var v80 = outputWindow.document;
  JAM.call(v80.write, v80, ["</pre>\n"], JAM.policy.p10);
  return;
}
function closeTextArea() {
  var v81 = outputWindow.document;
  JAM.call(v81.write, v81, ["</textarea>"], JAM.policy.p10);
  return true;
}
function closeWindow() {
  var v82 = outputWindow.document;
  JAM.call(v82.write, v82, ["</body>\n</html>\n"], JAM.policy.p10);
  outputWindow.status = "Done.";
  var v83 = outputWindow.document;
  v83.close();
  return;
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
  var v443 = alignArray.length;
  var v84 = v443 < 3;
  if (v84) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v444 = alignArray.length;
  var v86 = i$$4 < v444;
  for (;v86;) {
    var v667 = alignArray[i$$4];
    var v445 = JAM.call(v667.search, v667, [/[^\s]+\s/], JAM.policy.p15);
    var v85 = v445 == -1;
    if (v85) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v446 = alignArray.length;
    v86 = i$$4 < v446;
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
  var v447 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v89 = v447 != -1;
  if (v89) {
    var v88 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    for (;v88;) {
      var v87 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v87], JAM.policy.p17);
      v88 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v448 = sequence$$2.length;
  var v90 = "&gt;results for " + v448;
  var stringToReturn = v90 + " residue sequence ";
  var v449 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p15);
  var v92 = v449 != -1;
  if (v92) {
    var v450 = stringToReturn + '"';
    var v91 = v450 + fastaSequenceTitle;
    stringToReturn = v91 + '"';
  }
  var v451 = stringToReturn + ' starting "';
  var v452 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v93 = v451 + v452;
  stringToReturn = v93 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v453 = sequenceOne.length;
  var v94 = "Search results for " + v453;
  var stringToReturn$$1 = v94 + " residue sequence ";
  var v454 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p15);
  var v96 = v454 != -1;
  if (v96) {
    var v455 = stringToReturn$$1 + '"';
    var v95 = v455 + fastaSequenceTitleOne;
    stringToReturn$$1 = v95 + '"';
  }
  var v456 = stringToReturn$$1 + ' starting "';
  var v457 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v97 = v456 + v457;
  stringToReturn$$1 = v97 + '"\n';
  var v458 = stringToReturn$$1 + "and ";
  var v459 = sequenceTwo.length;
  var v98 = v458 + v459;
  stringToReturn$$1 = v98 + " residue sequence ";
  var v460 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p15);
  var v100 = v460 != -1;
  if (v100) {
    var v461 = stringToReturn$$1 + '"';
    var v99 = v461 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v99 + '"';
  }
  var v462 = stringToReturn$$1 + ' starting "';
  var v463 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v101 = v462 + v463;
  stringToReturn$$1 = v101 + '"';
  var v102 = '<div class="info">' + stringToReturn$$1;
  return v102 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v103 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v103);
  var j$$2 = 0;
  var v464 = arrayOfPatterns$$3.length;
  var v105 = j$$2 < v464;
  for (;v105;) {
    var v668 = arrayOfPatterns$$3[j$$2];
    var v465 = JAM.call(v668.match, v668, [/\/.+\//], JAM.policy.p15);
    var v104 = v465 + "gi";
    if (JAM.isEval(eval)) {
      var v1333 = eval("introspect(JAM.policy.pFull) { " + v104 + " }")
    } else {
      var v1333 = JAM.call(eval, null, [v104])
    }
    geneticCodeMatchExp$$1[j$$2] = v1333;
    j$$2++;
    var v466 = arrayOfPatterns$$3.length;
    v105 = j$$2 < v466;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v106 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v106);
  var j$$3 = 0;
  var v467 = arrayOfPatterns$$4.length;
  var v109 = j$$3 < v467;
  for (;v109;) {
    var v468 = arrayOfPatterns$$4[j$$3];
    var v107 = JAM.call(v468.match, v468, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v1334 = v107.toString();
    geneticCodeMatchResult$$1[j$$3] = v1334;
    var v108 = geneticCodeMatchResult$$1[j$$3];
    var v1335 = JAM.call(v108.replace, v108, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v1335;
    j$$3++;
    var v469 = arrayOfPatterns$$4.length;
    v109 = j$$3 < v469;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v470 = sequence$$3.length;
  var v110 = "Results for " + v470;
  var stringToReturn$$2 = v110 + " residue sequence ";
  var v471 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p15);
  var v112 = v471 != -1;
  if (v112) {
    var v472 = stringToReturn$$2 + '"';
    var v111 = v472 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v111 + '"';
  }
  var v473 = stringToReturn$$2 + ' starting "';
  var v474 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v113 = v473 + v474;
  stringToReturn$$2 = v113 + '"';
  var v114 = '<div class="info">' + stringToReturn$$2;
  return v114 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v669 = "Results for " + topology;
  var v475 = v669 + " ";
  var v476 = sequence$$4.length;
  var v115 = v475 + v476;
  var stringToReturn$$3 = v115 + " residue sequence ";
  var v477 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p15);
  var v117 = v477 != -1;
  if (v117) {
    var v478 = stringToReturn$$3 + '"';
    var v116 = v478 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v116 + '"';
  }
  var v479 = stringToReturn$$3 + ' starting "';
  var v480 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v118 = v479 + v480;
  stringToReturn$$3 = v118 + '"';
  var v119 = '<div class="info">' + stringToReturn$$3;
  return v119 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v481 = sequenceOne$$1.length;
  var v120 = "Alignment results for " + v481;
  var stringToReturn$$4 = v120 + " residue sequence ";
  var v482 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p15);
  var v122 = v482 != -1;
  if (v122) {
    var v483 = stringToReturn$$4 + '"';
    var v121 = v483 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v121 + '"';
  }
  var v484 = stringToReturn$$4 + ' starting "';
  var v485 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v123 = v484 + v485;
  stringToReturn$$4 = v123 + '"\n';
  var v486 = stringToReturn$$4 + "and ";
  var v487 = sequenceTwo$$1.length;
  var v124 = v486 + v487;
  stringToReturn$$4 = v124 + " residue sequence ";
  var v488 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p15);
  var v126 = v488 != -1;
  if (v126) {
    var v489 = stringToReturn$$4 + '"';
    var v125 = v489 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v125 + '"';
  }
  var v490 = stringToReturn$$4 + ' starting "';
  var v491 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v127 = v490 + v491;
  stringToReturn$$4 = v127 + '"';
  var v128 = '<div class="info">' + stringToReturn$$4;
  return v128 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v130 = j$$4 < lengthOut;
  for (;v130;) {
    var v492 = Math.random();
    var v493 = components.length;
    var v129 = v492 * v493;
    tempNum = JAM.call(Math.floor, Math, [v129], JAM.policy.p15);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v130 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p10);
}
function getSequenceFromFasta(sequenceRecord) {
  var v494 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v131 = v494 != -1;
  if (v131) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v495 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v133 = v495 != -1;
  if (v133) {
    var v132 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
    fastaTitle = v132.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p16);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1072 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p15);
  var v1047 = v1072 != -1;
  var v1074 = !v1047;
  if (v1074) {
    var v1073 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p15);
    v1047 = v1073 != -1;
  }
  var v1020 = v1047;
  var v1049 = !v1020;
  if (v1049) {
    var v1048 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p15);
    v1020 = v1048 != -1;
  }
  var v993 = v1020;
  var v1022 = !v993;
  if (v1022) {
    var v1021 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p15);
    v993 = v1021 != -1;
  }
  var v964 = v993;
  var v995 = !v964;
  if (v995) {
    var v994 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p15);
    v964 = v994 != -1;
  }
  var v928 = v964;
  var v966 = !v928;
  if (v966) {
    var v965 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p15);
    v928 = v965 != -1;
  }
  var v891 = v928;
  var v930 = !v891;
  if (v930) {
    var v929 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p15);
    v891 = v929 != -1;
  }
  var v837 = v891;
  var v893 = !v837;
  if (v893) {
    var v892 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p15);
    v837 = v892 != -1;
  }
  var v767 = v837;
  var v839 = !v767;
  if (v839) {
    var v838 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p15);
    v767 = v838 != -1;
  }
  var v670 = v767;
  var v769 = !v670;
  if (v769) {
    var v768 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p15);
    v670 = v768 != -1;
  }
  var v496 = v670;
  var v672 = !v496;
  if (v672) {
    var v671 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p15);
    v496 = v671 != -1;
  }
  var v134 = v496;
  if (v134) {
    return false;
  }
  return true;
}
function openForm() {
  var v135 = outputWindow.document;
  JAM.call(v135.write, v135, ['<form action="">\n'], JAM.policy.p10);
  return true;
}
function openPre() {
  var v136 = outputWindow.document;
  JAM.call(v136.write, v136, ["<pre>"], JAM.policy.p10);
  var v137 = outputWindow.document;
  JAM.call(v137.write, v137, ['<div class="pre">'], JAM.policy.p10);
  return;
}
function openTextArea() {
  var v138 = outputWindow.document;
  JAM.call(v138.write, v138, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p10);
  return true;
}
function openWindow() {
  var title$$5 = "Translation Map";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v139 = outputWindow.document;
  var v770 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v673 = v770 + "<head>\n";
  var v497 = v673 + "<title>Sequence Manipulation Suite</title>\n";
  var v140 = v497 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v139.write, v139, [v140], JAM.policy.p17);
  if (isColor) {
    var v141 = outputWindow.document;
    var v1141 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1119 = v1141 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1097 = v1119 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1075 = v1097 + "div.info {font-weight: bold}\n";
    var v1050 = v1075 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1023 = v1050 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v996 = v1023 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v967 = v996 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v931 = v967 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v894 = v931 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v840 = v894 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v771 = v840 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v674 = v771 + "td.many {color: #000000}\n";
    var v498 = v674 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v142 = v498 + "</style>\n";
    JAM.call(v141.write, v141, [v142], JAM.policy.p17);
  } else {
    var v143 = outputWindow.document;
    var v1163 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1142 = v1163 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1120 = v1142 + "div.title {display: none}\n";
    var v1098 = v1120 + "div.info {font-weight: bold}\n";
    var v1076 = v1098 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1051 = v1076 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1024 = v1051 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v997 = v1024 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v968 = v997 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v932 = v968 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v895 = v932 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v841 = v895 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v772 = v841 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v675 = v772 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v499 = v675 + "img {display: none}\n";
    var v144 = v499 + "</style>\n";
    JAM.call(v143.write, v143, [v144], JAM.policy.p17);
  }
  var v145 = outputWindow.document;
  var v773 = "</head>\n" + '<body class="main">\n';
  var v676 = v773 + '<div class="title">';
  var v500 = v676 + title$$6;
  var v146 = v500 + " results</div>\n";
  JAM.call(v145.write, v145, [v146], JAM.policy.p17);
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
  var v147 = outputWindow.document;
  var v774 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v677 = v774 + "<head>\n";
  var v501 = v677 + "<title>Sequence Manipulation Suite</title>\n";
  var v148 = v501 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v147.write, v147, [v148], JAM.policy.p17);
  if (isBackground) {
    var v149 = outputWindow.document;
    var v1143 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1121 = v1143 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1099 = v1121 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1077 = v1099 + "div.info {font-weight: bold}\n";
    var v1052 = v1077 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1025 = v1052 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v998 = v1025 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v969 = v998 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v933 = v969 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v896 = v933 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v842 = v896 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v775 = v842 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v678 = v775 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v502 = v678 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v150 = v502 + "</style>\n";
    JAM.call(v149.write, v149, [v150], JAM.policy.p17);
  } else {
    var v151 = outputWindow.document;
    var v1183 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1164 = v1183 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1144 = v1164 + "div.title {display: none}\n";
    var v1122 = v1144 + "div.info {font-weight: bold}\n";
    var v1100 = v1122 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1078 = v1100 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1053 = v1078 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1026 = v1053 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v999 = v1026 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v970 = v999 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v934 = v970 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v897 = v934 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v843 = v897 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v776 = v843 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v679 = v776 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v503 = v679 + "img {display: none}\n";
    var v152 = v503 + "</style>\n";
    JAM.call(v151.write, v151, [v152], JAM.policy.p17);
  }
  var v153 = outputWindow.document;
  var v777 = "</head>\n" + '<body class="main">\n';
  var v680 = v777 + '<div class="title">';
  var v504 = v680 + title$$8;
  var v154 = v504 + " results</div>\n";
  JAM.call(v153.write, v153, [v154], JAM.policy.p17);
  outputWindow.status = "Please Wait.";
  return;
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
  var v505 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p15);
  var v155 = v505 != -1;
  if (v155) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p15);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p10);
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  var v156 = j$$5 < lengthOfColumn;
  for (;v156;) {
    tempString = tempString + " ";
    j$$5++;
    v156 = j$$5 < lengthOfColumn;
  }
  var v157 = tempString + theNumber;
  theNumber = v157 + " ";
  var v158 = sequenceToAppend + theNumber;
  sequenceToAppend = v158 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p17);
  var v506 = testArray[0];
  var v159 = v506 != testString;
  if (v159) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v507 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v160 = v507 == -1;
  if (v160) {
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
  var v161 = !caughtException;
  if (v161) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p16);
  var v162 = testString != "1X2X3X";
  if (v162) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v508 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9);
  var v163 = v508 != 2489.824;
  if (v163) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v509 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9);
  var v164 = v509 != 2489.8;
  if (v164) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v510 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p15);
  var v165 = v510 == -1;
  if (v165) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v844 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p15);
  var v778 = v844 == -1;
  var v846 = !v778;
  if (v846) {
    var v845 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p15);
    v778 = v845 == -1;
  }
  var v681 = v778;
  var v780 = !v681;
  if (v780) {
    var v779 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p15);
    v681 = v779 == -1;
  }
  var v511 = v681;
  var v683 = !v511;
  if (v683) {
    var v682 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p15);
    v511 = v682 == -1;
  }
  var v166 = v511;
  if (v166) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v512 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p15);
  var v167 = v512 == -1;
  if (v167) {
    alert("Please enter a number.");
    return false;
  }
  var v169 = theNumber$$2 > maxInput$$2;
  if (v169) {
    var v513 = "Please enter a number less than or equal to " + maxInput$$2;
    var v168 = v513 + ".";
    alert(v168);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v514 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p15);
  var v170 = v514 != -1;
  if (v170) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v515 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p15);
  var v171 = v515 != -1;
  if (v171) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v847 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p15);
  var v781 = v847 == -1;
  var v849 = !v781;
  if (v849) {
    var v848 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p15);
    v781 = v848 == -1;
  }
  var v684 = v781;
  var v783 = !v684;
  if (v783) {
    var v782 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p15);
    v684 = v782 == -1;
  }
  var v516 = v684;
  var v686 = !v516;
  if (v686) {
    var v685 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p15);
    v516 = v685 == -1;
  }
  var v172 = v516;
  if (v172) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v850 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p15);
  var v784 = v850 == -1;
  var v852 = !v784;
  if (v852) {
    var v851 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p15);
    v784 = v851 == -1;
  }
  var v687 = v784;
  var v786 = !v687;
  if (v786) {
    var v785 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p15);
    v687 = v785 == -1;
  }
  var v517 = v687;
  var v689 = !v517;
  if (v689) {
    var v688 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p15);
    v517 = v688 == -1;
  }
  var v173 = v517;
  if (v173) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v518 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p15);
  var v174 = v518 == -1;
  if (v174) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v853 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p15);
  var v787 = v853 == -1;
  var v855 = !v787;
  if (v855) {
    var v854 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p15);
    v787 = v854 == -1;
  }
  var v690 = v787;
  var v789 = !v690;
  if (v789) {
    var v788 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p15);
    v690 = v788 == -1;
  }
  var v519 = v690;
  var v692 = !v519;
  if (v692) {
    var v691 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p15);
    v519 = v691 == -1;
  }
  var v175 = v519;
  if (v175) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v520 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p15);
  var v176 = v520 == -1;
  if (v176) {
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
  var v183 = i$$5 < stopBase;
  for (;v183;) {
    var v177 = i$$5 + 1;
    lineOfText = rightNum(v177, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v521 = basePerLine / groupSize;
    var v180 = j$$6 <= v521;
    for (;v180;) {
      var v179 = k < groupSize;
      for (;v179;) {
        var v522 = k + i$$5;
        var v178 = JAM.call(text$$10.charAt, text$$10, [v522], JAM.policy.p17);
        lineOfText = lineOfText + v178;
        k = k + 1;
        v179 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v523 = basePerLine / groupSize;
      v180 = j$$6 <= v523;
    }
    var v181 = outputWindow.document;
    var v182 = lineOfText + "\n";
    JAM.call(v181.write, v181, [v182], JAM.policy.p17);
    lineOfText = "";
    v183 = i$$5 < stopBase;
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
    var v524 = adjustment < 0;
    if (v524) {
      v524 = adjusted >= 0;
    }
    var v184 = v524;
    if (v184) {
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
  var v215 = i$$6 < stopBase$$2;
  for (;v215;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v525 = basePerLine$$2 / groupSize$$2;
    var v191 = j$$7 <= v525;
    for (;v191;) {
      var v187 = k$$1 < groupSize$$2;
      for (;v187;) {
        var v526 = i$$6 + k$$1;
        var v185 = v526 >= stopBase$$2;
        if (v185) {
          break;
        }
        var v527 = k$$1 + i$$6;
        var v186 = JAM.call(text$$12.charAt, text$$12, [v527], JAM.policy.p17);
        lineOfText$$1 = lineOfText$$1 + v186;
        k$$1 = k$$1 + 1;
        v187 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v189 = numberPosition$$1 == "above";
      if (v189) {
        var v528 = adjustNumbering(i$$6, numberingAdjustment);
        var v188 = rightNum(v528, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v188;
      }
      var v190 = i$$6 >= stopBase$$2;
      if (v190) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v529 = basePerLine$$2 / groupSize$$2;
      v191 = j$$7 <= v529;
    }
    var v214 = numberPosition$$1 == "left";
    if (v214) {
      var v192 = outputWindow.document;
      var v790 = adjustNumbering(lineNum, numberingAdjustment);
      var v693 = rightNum(v790, "", 8, tabIn$$3);
      var v530 = v693 + lineOfText$$1;
      var v193 = v530 + "\n";
      JAM.call(v192.write, v192, [v193], JAM.policy.p17);
      var v197 = strands$$1 == "two";
      if (v197) {
        var v194 = outputWindow.document;
        var v791 = adjustNumbering(lineNum, numberingAdjustment);
        var v694 = rightNum(v791, "", 8, tabIn$$3);
        var v695 = complement(lineOfText$$1);
        var v531 = v694 + v695;
        var v195 = v531 + "\n";
        JAM.call(v194.write, v194, [v195], JAM.policy.p17);
        var v196 = outputWindow.document;
        JAM.call(v196.write, v196, ["\n"], JAM.policy.p10);
      }
    } else {
      var v213 = numberPosition$$1 == "right";
      if (v213) {
        var v198 = outputWindow.document;
        var v696 = adjustNumbering(i$$6, numberingAdjustment);
        var v532 = lineOfText$$1 + v696;
        var v199 = v532 + "\n";
        JAM.call(v198.write, v198, [v199], JAM.policy.p17);
        var v203 = strands$$1 == "two";
        if (v203) {
          var v200 = outputWindow.document;
          var v697 = complement(lineOfText$$1);
          var v698 = adjustNumbering(i$$6, numberingAdjustment);
          var v533 = v697 + v698;
          var v201 = v533 + "\n";
          JAM.call(v200.write, v200, [v201], JAM.policy.p17);
          var v202 = outputWindow.document;
          JAM.call(v202.write, v202, ["\n"], JAM.policy.p10);
        }
      } else {
        var v212 = numberPosition$$1 == "above";
        if (v212) {
          var v204 = outputWindow.document;
          var v205 = aboveNum + "\n";
          JAM.call(v204.write, v204, [v205], JAM.policy.p17);
          var v206 = outputWindow.document;
          var v207 = lineOfText$$1 + "\n";
          JAM.call(v206.write, v206, [v207], JAM.policy.p17);
          var v211 = strands$$1 == "two";
          if (v211) {
            var v208 = outputWindow.document;
            var v534 = complement(lineOfText$$1);
            var v209 = v534 + "\n";
            JAM.call(v208.write, v208, [v209], JAM.policy.p17);
            var v210 = outputWindow.document;
            JAM.call(v210.write, v210, ["\n"], JAM.policy.p10);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v215 = i$$6 < stopBase$$2;
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
  var v234 = i$$7 < stopBase$$3;
  for (;v234;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v535 = basePerLine$$3 / groupSize$$3;
    var v222 = j$$8 <= v535;
    for (;v222;) {
      var v218 = k$$2 < groupSize$$3;
      for (;v218;) {
        var v536 = i$$7 + k$$2;
        var v216 = v536 >= stopBase$$3;
        if (v216) {
          break;
        }
        var v537 = k$$2 + i$$7;
        var v217 = JAM.call(text$$13.charAt, text$$13, [v537], JAM.policy.p17);
        lineOfText$$2 = lineOfText$$2 + v217;
        k$$2 = k$$2 + 1;
        v218 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v220 = numberPosition$$2 == "above";
      if (v220) {
        var v219 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v219;
      }
      var v221 = i$$7 >= stopBase$$3;
      if (v221) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v538 = basePerLine$$3 / groupSize$$3;
      v222 = j$$8 <= v538;
    }
    var v233 = numberPosition$$2 == "left";
    if (v233) {
      var v223 = outputWindow.document;
      var v699 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v539 = v699 + lineOfText$$2;
      var v224 = v539 + "\n";
      JAM.call(v223.write, v223, [v224], JAM.policy.p17);
    } else {
      var v232 = numberPosition$$2 == "right";
      if (v232) {
        var v225 = outputWindow.document;
        var v540 = lineOfText$$2 + i$$7;
        var v226 = v540 + "\n";
        JAM.call(v225.write, v225, [v226], JAM.policy.p17);
      } else {
        var v231 = numberPosition$$2 == "above";
        if (v231) {
          var v227 = outputWindow.document;
          var v228 = aboveNum$$1 + "\n";
          JAM.call(v227.write, v227, [v228], JAM.policy.p17);
          var v229 = outputWindow.document;
          var v230 = lineOfText$$2 + "\n";
          JAM.call(v229.write, v229, [v230], JAM.policy.p17);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v234 = i$$7 < stopBase$$3;
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
  var v792 = sequence$$13.length;
  var v700 = v792 <= firstIndexToMutate;
  var v793 = !v700;
  if (v793) {
    v700 = lastIndexToMutate < 0;
  }
  var v541 = v700;
  var v701 = !v541;
  if (v701) {
    v541 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v235 = v541;
  if (v235) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v243 = i$$8 < numMut;
  for (;v243;) {
    maxNum = sequence$$13.length;
    var v542 = Math.random();
    var v236 = v542 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v236], JAM.policy.p15);
    var v543 = randNum < firstIndexToMutate;
    var v702 = !v543;
    if (v702) {
      v543 = randNum > lastIndexToMutate;
    }
    var v237 = v543;
    if (v237) {
      numMut++;
      i$$8++;
      v243 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p15);
    needNewChar = true;
    for (;needNewChar;) {
      var v544 = Math.random();
      var v545 = components$$1.length;
      var v238 = v544 * v545;
      componentsIndex = JAM.call(Math.round, Math, [v238], JAM.policy.p15);
      var v546 = components$$1.length;
      var v239 = componentsIndex == v546;
      if (v239) {
        componentsIndex = 0;
      }
      var v547 = components$$1[componentsIndex];
      var v240 = v547 != currentChar;
      if (v240) {
        needNewChar = false;
      }
    }
    var v548 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v549 = components$$1[componentsIndex];
    var v241 = v548 + v549;
    var v550 = randNum + 1;
    var v551 = sequence$$13.length;
    var v242 = JAM.call(sequence$$13.substring, sequence$$13, [v550, v551], JAM.policy.p27);
    sequence$$13 = v241 + v242;
    i$$8++;
    v243 = i$$8 < numMut;
  }
  var v244 = outputWindow.document;
  var v245 = addReturns(sequence$$13);
  JAM.call(v244.write, v244, [v245], JAM.policy.p17);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v250 = j$$9 < lengthOut$$1;
  for (;v250;) {
    var v552 = Math.random();
    var v553 = components$$2.length;
    var v246 = v552 * v553;
    tempNum$$1 = JAM.call(Math.floor, Math, [v246], JAM.policy.p15);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v554 = sequence$$14.length;
    var v249 = v554 == 60;
    if (v249) {
      var v247 = outputWindow.document;
      var v248 = sequence$$14 + "\n";
      JAM.call(v247.write, v247, [v248], JAM.policy.p17);
      sequence$$14 = "";
    }
    j$$9++;
    v250 = j$$9 < lengthOut$$1;
  }
  var v251 = outputWindow.document;
  var v252 = sequence$$14 + "\n";
  JAM.call(v251.write, v251, [v252], JAM.policy.p17);
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
  var v256 = dnaConformation == "circular";
  if (v256) {
    var v253 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v253.length;
    var v794 = sequence$$15.length;
    var v703 = v794 - lookAhead;
    var v704 = sequence$$15.length;
    var v555 = JAM.call(sequence$$15.substring, sequence$$15, [v703, v704], JAM.policy.p27);
    var v254 = v555 + sequence$$15;
    var v255 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v254 + v255;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v257 = outputWindow.document;
  JAM.call(v257.write, v257, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p10);
  var v258 = outputWindow.document;
  var v795 = '<tr><td class="title" width="200px">' + "Site:";
  var v705 = v795 + '</td><td class="title">';
  var v556 = v705 + "Positions:";
  var v259 = v556 + "</td></tr>\n";
  JAM.call(v258.write, v258, [v259], JAM.policy.p17);
  var i$$9 = 0;
  var v557 = arrayOfItems.length;
  var v275 = i$$9 < v557;
  for (;v275;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v558 = arrayOfItems[i$$9];
    var v260 = JAM.call(v558.match, v558, [/\/.+\//], JAM.policy.p15);
    matchExp = v260 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v796 = arrayOfItems[i$$9];
    var v706 = JAM.call(v796.match, v796, [/\)\D*\d+/], JAM.policy.p15);
    var v559 = v706.toString();
    var v261 = JAM.call(v559.replace, v559, [/\)\D*/, ""], JAM.policy.p16);
    cutDistance = parseFloat(v261);
    var v267 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v267;) {
      var v262 = matchExp.lastIndex;
      matchPosition = v262 - cutDistance;
      var v560 = matchPosition >= lowerLimit;
      if (v560) {
        v560 = matchPosition < upperLimit;
      }
      var v265 = v560;
      if (v265) {
        timesFound++;
        var v263 = tempString$$1 + ", ";
        var v561 = matchPosition - shiftValue;
        var v264 = v561 + 1;
        tempString$$1 = v263 + v264;
      }
      var v562 = matchExp.lastIndex;
      var v707 = RegExp.lastMatch;
      var v563 = v707.length;
      var v266 = v562 - v563;
      matchExp.lastIndex = v266 + 1;
      v267 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v564 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p15);
    var v268 = v564 != -1;
    if (v268) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p16);
    }
    var v272 = timesFound == 0;
    if (v272) {
      backGroundClass = "none";
    } else {
      var v271 = timesFound == 1;
      if (v271) {
        backGroundClass = "one";
      } else {
        var v270 = timesFound == 2;
        if (v270) {
          backGroundClass = "two";
        } else {
          var v269 = timesFound == 3;
          if (v269) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v273 = outputWindow.document;
    var v971 = '<tr><td class="' + backGroundClass;
    var v935 = v971 + '">';
    var v1027 = arrayOfItems[i$$9];
    var v1000 = JAM.call(v1027.match, v1027, [/\([^\(]+\)/], JAM.policy.p15);
    var v972 = v1000.toString();
    var v936 = JAM.call(v972.replace, v972, [/\(|\)/g, ""], JAM.policy.p16);
    var v898 = v935 + v936;
    var v856 = v898 + '</td><td class="';
    var v797 = v856 + backGroundClass;
    var v708 = v797 + '">';
    var v565 = v708 + tempString$$1;
    var v274 = v565 + "</td></tr>\n";
    JAM.call(v273.write, v273, [v274], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v566 = arrayOfItems.length;
    v275 = i$$9 < v566;
  }
  var v276 = outputWindow.document;
  JAM.call(v276.write, v276, ["</tbody></table>\n"], JAM.policy.p10);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v277 = outputWindow.document;
  JAM.call(v277.write, v277, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p10);
  var v278 = outputWindow.document;
  var v899 = '<tr><td class="title">' + "Pattern:";
  var v857 = v899 + '</td><td class="title">';
  var v798 = v857 + "Times found:";
  var v709 = v798 + '</td><td class="title">';
  var v567 = v709 + "Percentage:";
  var v279 = v567 + "</td></tr>\n";
  JAM.call(v278.write, v278, [v279], JAM.policy.p17);
  var i$$10 = 0;
  var v568 = arrayOfItems$$1.length;
  var v288 = i$$10 < v568;
  for (;v288;) {
    var tempNumber = 0;
    var v569 = arrayOfItems$$1[i$$10];
    var v280 = JAM.call(v569.match, v569, [/\/[^\/]+\//], JAM.policy.p15);
    var matchExp$$1 = v280 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v570 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v282 = v570 != -1;
    if (v282) {
      var v281 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v281.length;
    }
    var percentage = 0;
    var v710 = originalLength + 1;
    var v858 = arrayOfItems$$1[i$$10];
    var v799 = JAM.call(v858.match, v858, [/\d+/], JAM.policy.p15);
    var v711 = parseFloat(v799);
    var v571 = v710 - v711;
    var v285 = v571 > 0;
    if (v285) {
      var v283 = 100 * tempNumber;
      var v572 = originalLength + 1;
      var v800 = arrayOfItems$$1[i$$10];
      var v712 = JAM.call(v800.match, v800, [/\d+/], JAM.policy.p15);
      var v573 = parseFloat(v712);
      var v284 = v572 - v573;
      percentage = v283 / v284;
    }
    var v286 = outputWindow.document;
    var v1028 = arrayOfItems$$1[i$$10];
    var v1001 = JAM.call(v1028.match, v1028, [/\([^\(]+\)\b/], JAM.policy.p15);
    var v973 = v1001.toString();
    var v937 = JAM.call(v973.replace, v973, [/\(|\)/g, ""], JAM.policy.p16);
    var v900 = "<tr><td>" + v937;
    var v859 = v900 + "</td><td>";
    var v801 = v859 + tempNumber;
    var v713 = v801 + "</td><td>";
    var v714 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9);
    var v574 = v713 + v714;
    var v287 = v574 + "</td></tr>\n";
    JAM.call(v286.write, v286, [v287], JAM.policy.p17);
    i$$10++;
    var v575 = arrayOfItems$$1.length;
    v288 = i$$10 < v575;
  }
  var v289 = outputWindow.document;
  JAM.call(v289.write, v289, ["</tbody></table>\n"], JAM.policy.p10);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v576 = sequence$$17.length;
  var v296 = v576 > 0;
  for (;v296;) {
    maxNum$$1 = sequence$$17.length;
    var v577 = Math.random();
    var v290 = v577 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v290], JAM.policy.p15);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p15);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v291 = randNum$$1 + 1;
    var v292 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v291, v292], JAM.policy.p16);
    sequence$$17 = tempString1 + tempString2;
    var v578 = tempSeq.length;
    var v295 = v578 == 60;
    if (v295) {
      var v293 = outputWindow.document;
      var v294 = tempSeq + "\n";
      JAM.call(v293.write, v293, [v294], JAM.policy.p17);
      tempSeq = "";
    }
    var v579 = sequence$$17.length;
    v296 = v579 > 0;
  }
  var v297 = outputWindow.document;
  var v298 = tempSeq + "\n";
  JAM.call(v297.write, v297, [v298], JAM.policy.p17);
  return true;
}
function getRestrictionSiteString(type$$25) {
  var v580 = type$$25.toLowerCase();
  var v300 = v580 == "standard";
  if (v300) {
    var v1329 = "/aggcct/ (AatI agg|cct)3," + "/gacgtc/ (AatII gacgt|c)1,";
    var v1328 = v1329 + "/tgcgca/ (Acc16I tgc|gca)3,";
    var v1327 = v1328 + "/cgcg/ (AccII cg|cg)2,";
    var v1326 = v1327 + "/tccgga/ (AccIII t|ccgga)5,";
    var v1325 = v1326 + "/aacgtt/ (AclI aa|cgtt)4,";
    var v1324 = v1325 + "/cacgtg/ (AcvI cac|gtg)3,";
    var v1323 = v1324 + "/gtac/ (AfaI gt|ac)2,";
    var v1322 = v1323 + "/agcgct/ (AfeI agc|gct)3,";
    var v1321 = v1322 + "/cttaag/ (AflII c|ttaag)5,";
    var v1320 = v1321 + "/accggt/ (AgeI a|ccggt)5,";
    var v1319 = v1320 + "/actagt/ (AhlI a|ctagt)5,";
    var v1318 = v1319 + "/gtgcac/ (Alw441 g|tgcac)5,";
    var v1317 = v1318 + "/agct/ (AluI ag|ct)2,";
    var v1316 = v1317 + "/agcgct/ (Aor51HI agc|gct)3,";
    var v1315 = v1316 + "/gggccc/ (ApaI gggcc|c)1,";
    var v1314 = v1315 + "/gtgcac/ (ApaLI g|tgcac)5,";
    var v1313 = v1314 + "/ggcgcgcc/ (AscI gg|cgcgcc)6,";
    var v1312 = v1313 + "/attaat/ (AseI at|taat)4,";
    var v1311 = v1312 + "/ggtacc/ (Asp718I g|gtacc)5,";
    var v1310 = v1311 + "/ttcgaa/ (AsuII tt|cgaa)4,";
    var v1309 = v1310 + "/c[cty]cg[agr]g/ (AvaI c|ycgrg)5,";
    var v1308 = v1309 + "/tgcgca/ (AviII tgc|gca)3,";
    var v1307 = v1308 + "/cctagg/ (AvrII c|ctagg)5,";
    var v1306 = v1307 + "/tggcca/ (BalI tgg|cca)3,";
    var v1305 = v1306 + "/ggatcc/ (BamHI g|gatcc)5,";
    var v1304 = v1305 + "/atcgat/ (BanIII at|cgat)4,";
    var v1303 = v1304 + "/ggcgcc/ (BbeI ggcgc|c)1,";
    var v1302 = v1303 + "/cacgtg/ (BbrPI cac|gtg)3,";
    var v1301 = v1302 + "/gcatgc/ (BbuI gcatg|c)1,";
    var v1300 = v1301 + "/actagt/ (BcuI a|ctagt)5,";
    var v1299 = v1300 + "/tgatca/ (BclI t|gatca)5,";
    var v1298 = v1299 + "/ctag/ (BfaI c|tag)3,";
    var v1297 = v1298 + "/cttaag/ (BfrI c|ttaag)5,";
    var v1296 = v1297 + "/atgcat/ (BfrBI atg|cat)3,";
    var v1295 = v1296 + "/agatct/ (BglII a|gatct)5,";
    var v1294 = v1295 + "/cctagg/ (BlnI c|ctagg)5,";
    var v1293 = v1294 + "/atcgat/ (BseCI at|cgat)4,";
    var v1292 = v1293 + "/gcgcgc/ (BsePI g|cgcgc)5,";
    var v1291 = v1292 + "/cggccg/ (BseX3I c|ggccg)5,";
    var v1290 = v1291 + "/accggt/ (BshTI a|ccggt)5,";
    var v1289 = v1290 + "/tgtaca/ (Bsp1407I t|gtaca)5,";
    var v1288 = v1289 + "/ccatgg/ (Bsp19I c|catgg)5,";
    var v1287 = v1288 + "/atcgat/ (BspDI at|cgat)4,";
    var v1286 = v1287 + "/tccgga/ (BspEI t|ccgga)5,";
    var v1285 = v1286 + "/tgtaca/ (BsrGI t|gtaca)5,";
    var v1284 = v1285 + "/gcgcgc/ (BssHII g|cgcgc)5,";
    var v1283 = v1284 + "/cgcg/ (BstUI cg|cg)2,";
    var v1282 = v1283 + "/atcgat/ (ClaI at|cgat)4,";
    var v1281 = v1282 + "/gatc/ (DpnII |gatc)4,";
    var v1280 = v1281 + "/tttaaa/ (DraI ttt|aaa)3,";
    var v1279 = v1280 + "/cggccg/ (EagI c|ggccg)5,";
    var v1278 = v1279 + "/gaattc/ (EcoRI g|aattc)5,";
    var v1277 = v1278 + "/gatatc/ (EcoRV gat|atc)3,";
    var v1276 = v1277 + "/ggcgcc/ (EgeI ggc|gcc)3,";
    var v1275 = v1276 + "/ggccggcc/ (FseI ggccgg|cc)2,";
    var v1274 = v1275 + "/tgcgca/ (FspI tgc|gca)3,";
    var v1273 = v1274 + "/ggcc/ (HaeIII gg|cc)2,";
    var v1272 = v1273 + "/gt[cty][agr]ac/ (HincII gty|rac)3,";
    var v1271 = v1272 + "/aagctt/ (HindIII a|agctt)5,";
    var v1270 = v1271 + "/ga[acgturyswkmbdhvn]tc/ (HinfI g|antc)4,";
    var v1269 = v1270 + "/gttaac/ (HpaI gtt|aac)3,";
    var v1268 = v1269 + "/ccgg/ (HpaII c|cgg)3,";
    var v1267 = v1268 + "/ggcgcc/ (KasI g|gcgcc)5,";
    var v1266 = v1267 + "/ggtacc/ (KpnI ggtac|c)1,";
    var v1265 = v1266 + "/[acgturyswkmbdhvn]gatc[acgturyswkmbdhvn]/ (MboI |gatc)5,";
    var v1264 = v1265 + "/caattg/ (MfeI c|aattg)5,";
    var v1263 = v1264 + "/acgcgt/ (MluI a|cgcgt)5,";
    var v1262 = v1263 + "/tggcca/ (MscI tgg|cca)3,";
    var v1261 = v1262 + "/ttaa/ (MseI t|taa)3,";
    var v1260 = v1261 + "/ccgg/ (MspI c|cgg)3,";
    var v1259 = v1260 + "/gccggc/ (NaeI gcc|ggc)3,";
    var v1258 = v1259 + "/ggcgcc/ (NarI gg|cgcc)4,";
    var v1257 = v1258 + "/ccatgg/ (NcoI c|catgg)5,";
    var v1256 = v1257 + "/catatg/ (NdeI ca|tatg)4,";
    var v1255 = v1256 + "/gatc/ (NdeII |gatc)4,";
    var v1254 = v1255 + "/gccggc/ (NgoMIV g|ccggc)5,";
    var v1253 = v1254 + "/gctagc/ (NheI g|ctagc)5,";
    var v1252 = v1253 + "/catg/ (NlaIII catg|)0,";
    var v1251 = v1252 + "/gcggccgc/ (NotI gc|ggccgc)6,";
    var v1250 = v1251 + "/tcgcga/ (NruI tcg|cga)3,";
    var v1249 = v1250 + "/atgcat/ (NsiI atgca|t)1,";
    var v1248 = v1249 + "/ttaattaa/ (PacI ttaat|taa)3,";
    var v1247 = v1248 + "/acatgt/ (PciI a|catgt)5,";
    var v1246 = v1247 + "/ggcc/ (PhoI gg|cc)2,";
    var v1245 = v1246 + "/gtttaaac/ (PmeI gttt|aaac)4,";
    var v1244 = v1245 + "/cacgtg/ (PmlI cac|gtg)3,";
    var v1243 = v1244 + "/ttataa/ (PsiI tta|taa)3,";
    var v1242 = v1243 + "/ctgcag/ (PstI ctgca|g)1,";
    var v1241 = v1242 + "/cgatcg/ (PvuI cgat|cg)2,";
    var v1240 = v1241 + "/cagctg/ (PvuII cag|ctg)3,";
    var v1239 = v1240 + "/gtac/ (RsaI gt|ac)2,";
    var v1238 = v1239 + "/gagctc/ (SacI gagct|c)1,";
    var v1220 = v1238 + "/ccgcgg/ (SacII ccgc|gg)2,";
    var v1202 = v1220 + "/gtcgac/ (SalI g|tcgac)5,";
    var v1184 = v1202 + "/cctgcagg/ (SbfI cctgca|gg)2,";
    var v1165 = v1184 + "/agtact/ (ScaI agt|act)3,";
    var v1145 = v1165 + "/ggcgcc/ (SfoI ggc|gcc)3,";
    var v1123 = v1145 + "/cccggg/ (SmaI ccc|ggg)3,";
    var v1101 = v1123 + "/tacgta/ (SnaBI tac|gta)3,";
    var v1079 = v1101 + "/actagt/ (SpeI a|ctagt)5,";
    var v1054 = v1079 + "/gcatgc/ (SphI gcatg|c)1,";
    var v1029 = v1054 + "/aatatt/ (SspI aat|att)3,";
    var v1002 = v1029 + "/gagctc/ (SstI gagct|c)1,";
    var v974 = v1002 + "/ccgcgg/ (SstII ccgc|gg)2,";
    var v938 = v974 + "/aggcct/ (StuI agg|cct)3,";
    var v901 = v938 + "/atttaaat/ (SwaI attt|aaat)4,";
    var v860 = v901 + "/tcga/ (TaqI t|cga)3,";
    var v802 = v860 + "/ctcgag/ (TliI c|tcgag)5,";
    var v715 = v802 + "/attaat/ (VspI at|taat)4,";
    var v581 = v715 + "/tctaga/ (XbaI t|ctaga)5,";
    var v299 = v581 + "/ctcgag/ (XhoI c|tcgag)5,";
    return v299 + "/cccggg/ (XmaI c|ccggg)5";
  }
  return true;
}
function getGeneticCodeString(type$$26) {
  var v716 = type$$26.toLowerCase();
  var v582 = v716 == "standard";
  var v718 = !v582;
  if (v718) {
    var v717 = type$$26.toLowerCase();
    v582 = v717 == "transl_table=1";
  }
  var v302 = v582;
  if (v302) {
    var v1221 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1203 = v1221 + "/ga[tcuy]/=D,";
    var v1185 = v1203 + "/ga[agr]/=E,";
    var v1166 = v1185 + "/[tu][tu][tcuy]/=F,";
    var v1146 = v1166 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1124 = v1146 + "/ca[tcuy]/=H,";
    var v1102 = v1124 + "/a[tu][atcuwmhy]/=I,";
    var v1080 = v1102 + "/aa[agr]/=K,";
    var v1055 = v1080 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1030 = v1055 + "/a[tu]g/=M,";
    var v1003 = v1030 + "/aa[tucy]/=N,";
    var v975 = v1003 + "/cc[acgturyswkmbdhvn]/=P,";
    var v939 = v975 + "/ca[agr]/=Q,";
    var v902 = v939 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v861 = v902 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v803 = v861 + "/ac[acgturyswkmbdhvn]/=T,";
    var v719 = v803 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v583 = v719 + "/[tu]gg/=W,";
    var v301 = v583 + "/[tu]a[ctuy]/=Y,";
    return v301 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v584 = type$$26.toLowerCase();
  var v304 = v584 == "transl_table=2";
  if (v304) {
    var v1222 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1204 = v1222 + "/ga[tcuy]/=D,";
    var v1186 = v1204 + "/ga[agr]/=E,";
    var v1167 = v1186 + "/[tu][tu][tcuy]/=F,";
    var v1147 = v1167 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1125 = v1147 + "/ca[tcuy]/=H,";
    var v1103 = v1125 + "/a[tu][tcuy]/=I,";
    var v1081 = v1103 + "/aa[agr]/=K,";
    var v1056 = v1081 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1031 = v1056 + "/a[tu][agr]/=M,";
    var v1004 = v1031 + "/aa[tucy]/=N,";
    var v976 = v1004 + "/cc[acgturyswkmbdhvn]/=P,";
    var v940 = v976 + "/ca[agr]/=Q,";
    var v903 = v940 + "/cg[acgturyswkmbdhvn]/=R,";
    var v862 = v903 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v804 = v862 + "/ac[acgturyswkmbdhvn]/=T,";
    var v720 = v804 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v585 = v720 + "/[tu]g[agr]/=W,";
    var v303 = v585 + "/[tu]a[ctuy]/=Y,";
    return v303 + "/[tu]a[agr]|ag[agr]/=*";
  }
  var v586 = type$$26.toLowerCase();
  var v306 = v586 == "transl_table=3";
  if (v306) {
    var v1223 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1205 = v1223 + "/ga[tcuy]/=D,";
    var v1187 = v1205 + "/ga[agr]/=E,";
    var v1168 = v1187 + "/[tu][tu][tcuy]/=F,";
    var v1148 = v1168 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1126 = v1148 + "/ca[tcuy]/=H,";
    var v1104 = v1126 + "/a[tu][tcuy]/=I,";
    var v1082 = v1104 + "/aa[agr]/=K,";
    var v1057 = v1082 + "/[tu][tu][agr]/=L,";
    var v1032 = v1057 + "/a[tu][agr]/=M,";
    var v1005 = v1032 + "/aa[tucy]/=N,";
    var v977 = v1005 + "/cc[acgturyswkmbdhvn]/=P,";
    var v941 = v977 + "/ca[agr]/=Q,";
    var v904 = v941 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v863 = v904 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v805 = v863 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v721 = v805 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v587 = v721 + "/[tu]g[agr]/=W,";
    var v305 = v587 + "/[tu]a[ctuy]/=Y,";
    return v305 + "/[tu]a[agr]/=*";
  }
  var v588 = type$$26.toLowerCase();
  var v308 = v588 == "transl_table=4";
  if (v308) {
    var v1224 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1206 = v1224 + "/ga[tcuy]/=D,";
    var v1188 = v1206 + "/ga[agr]/=E,";
    var v1169 = v1188 + "/[tu][tu][tcuy]/=F,";
    var v1149 = v1169 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1127 = v1149 + "/ca[tcuy]/=H,";
    var v1105 = v1127 + "/a[tu][atcuwmhy]/=I,";
    var v1083 = v1105 + "/aa[agr]/=K,";
    var v1058 = v1083 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1033 = v1058 + "/a[tu]g/=M,";
    var v1006 = v1033 + "/aa[tucy]/=N,";
    var v978 = v1006 + "/cc[acgturyswkmbdhvn]/=P,";
    var v942 = v978 + "/ca[agr]/=Q,";
    var v905 = v942 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v864 = v905 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v806 = v864 + "/ac[acgturyswkmbdhvn]/=T,";
    var v722 = v806 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v589 = v722 + "/[tu]g[agr]/=W,";
    var v307 = v589 + "/[tu]a[ctuy]/=Y,";
    return v307 + "/[tu]a[agr]/=*";
  }
  var v590 = type$$26.toLowerCase();
  var v310 = v590 == "transl_table=5";
  if (v310) {
    var v1225 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1207 = v1225 + "/ga[tcuy]/=D,";
    var v1189 = v1207 + "/ga[agr]/=E,";
    var v1170 = v1189 + "/[tu][tu][tcuy]/=F,";
    var v1150 = v1170 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1128 = v1150 + "/ca[tcuy]/=H,";
    var v1106 = v1128 + "/a[tu][tcuy]/=I,";
    var v1084 = v1106 + "/aa[agr]/=K,";
    var v1059 = v1084 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1034 = v1059 + "/a[tu][agr]/=M,";
    var v1007 = v1034 + "/aa[tucy]/=N,";
    var v979 = v1007 + "/cc[acgturyswkmbdhvn]/=P,";
    var v943 = v979 + "/ca[agr]/=Q,";
    var v906 = v943 + "/cg[acgturyswkmbdhvn]/=R,";
    var v865 = v906 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v807 = v865 + "/ac[acgturyswkmbdhvn]/=T,";
    var v723 = v807 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v591 = v723 + "/[tu]g[agr]/=W,";
    var v309 = v591 + "/[tu]a[ctuy]/=Y,";
    return v309 + "/[tu]a[agr]/=*";
  }
  var v592 = type$$26.toLowerCase();
  var v312 = v592 == "transl_table=6";
  if (v312) {
    var v1226 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1208 = v1226 + "/ga[tcuy]/=D,";
    var v1190 = v1208 + "/ga[agr]/=E,";
    var v1171 = v1190 + "/[tu][tu][tcuy]/=F,";
    var v1151 = v1171 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1129 = v1151 + "/ca[tcuy]/=H,";
    var v1107 = v1129 + "/a[tu][atcuwmhy]/=I,";
    var v1085 = v1107 + "/aa[agr]/=K,";
    var v1060 = v1085 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1035 = v1060 + "/a[tu]g/=M,";
    var v1008 = v1035 + "/aa[tucy]/=N,";
    var v980 = v1008 + "/cc[acgturyswkmbdhvn]/=P,";
    var v944 = v980 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v907 = v944 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v866 = v907 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v808 = v866 + "/ac[acgturyswkmbdhvn]/=T,";
    var v724 = v808 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v593 = v724 + "/[tu]gg/=W,";
    var v311 = v593 + "/[tu]a[ctuy]/=Y,";
    return v311 + "/[tu]ga/=*";
  }
  var v594 = type$$26.toLowerCase();
  var v314 = v594 == "transl_table=9";
  if (v314) {
    var v1227 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1209 = v1227 + "/ga[tcuy]/=D,";
    var v1191 = v1209 + "/ga[agr]/=E,";
    var v1172 = v1191 + "/[tu][tu][tcuy]/=F,";
    var v1152 = v1172 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1130 = v1152 + "/ca[tcuy]/=H,";
    var v1108 = v1130 + "/a[tu][atcuwmhy]/=I,";
    var v1086 = v1108 + "/aag/=K,";
    var v1061 = v1086 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1036 = v1061 + "/a[tu]g/=M,";
    var v1009 = v1036 + "/aa[atcuwmhy]/=N,";
    var v981 = v1009 + "/cc[acgturyswkmbdhvn]/=P,";
    var v945 = v981 + "/ca[agr]/=Q,";
    var v908 = v945 + "/cg[acgturyswkmbdhvn]/=R,";
    var v867 = v908 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v809 = v867 + "/ac[acgturyswkmbdhvn]/=T,";
    var v725 = v809 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v595 = v725 + "/[tu]g[agr]/=W,";
    var v313 = v595 + "/[tu]a[ctuy]/=Y,";
    return v313 + "/[tu]a[agr]/=*";
  }
  var v596 = type$$26.toLowerCase();
  var v316 = v596 == "transl_table=10";
  if (v316) {
    var v1228 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1210 = v1228 + "/ga[tcuy]/=D,";
    var v1192 = v1210 + "/ga[agr]/=E,";
    var v1173 = v1192 + "/[tu][tu][tcuy]/=F,";
    var v1153 = v1173 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1131 = v1153 + "/ca[tcuy]/=H,";
    var v1109 = v1131 + "/a[tu][atcuwmhy]/=I,";
    var v1087 = v1109 + "/aa[agr]/=K,";
    var v1062 = v1087 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1037 = v1062 + "/a[tu]g/=M,";
    var v1010 = v1037 + "/aa[tucy]/=N,";
    var v982 = v1010 + "/cc[acgturyswkmbdhvn]/=P,";
    var v946 = v982 + "/ca[agr]/=Q,";
    var v909 = v946 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v868 = v909 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v810 = v868 + "/ac[acgturyswkmbdhvn]/=T,";
    var v726 = v810 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v597 = v726 + "/[tu]gg/=W,";
    var v315 = v597 + "/[tu]a[ctuy]/=Y,";
    return v315 + "/[tu]a[agr]/=*";
  }
  var v598 = type$$26.toLowerCase();
  var v318 = v598 == "transl_table=11";
  if (v318) {
    var v1229 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1211 = v1229 + "/ga[tcuy]/=D,";
    var v1193 = v1211 + "/ga[agr]/=E,";
    var v1174 = v1193 + "/[tu][tu][tcuy]/=F,";
    var v1154 = v1174 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1132 = v1154 + "/ca[tcuy]/=H,";
    var v1110 = v1132 + "/a[tu][atcuwmhy]/=I,";
    var v1088 = v1110 + "/aa[agr]/=K,";
    var v1063 = v1088 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1038 = v1063 + "/a[tu]g/=M,";
    var v1011 = v1038 + "/aa[tucy]/=N,";
    var v983 = v1011 + "/cc[acgturyswkmbdhvn]/=P,";
    var v947 = v983 + "/ca[agr]/=Q,";
    var v910 = v947 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v869 = v910 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v811 = v869 + "/ac[acgturyswkmbdhvn]/=T,";
    var v727 = v811 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v599 = v727 + "/[tu]gg/=W,";
    var v317 = v599 + "/[tu]a[ctuy]/=Y,";
    return v317 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v600 = type$$26.toLowerCase();
  var v320 = v600 == "transl_table=12";
  if (v320) {
    var v1230 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1212 = v1230 + "/ga[tcuy]/=D,";
    var v1194 = v1212 + "/ga[agr]/=E,";
    var v1175 = v1194 + "/[tu][tu][tcuy]/=F,";
    var v1155 = v1175 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1133 = v1155 + "/ca[tcuy]/=H,";
    var v1111 = v1133 + "/a[tu][atcuwmhy]/=I,";
    var v1089 = v1111 + "/aa[agr]/=K,";
    var v1064 = v1089 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1039 = v1064 + "/a[tu]g/=M,";
    var v1012 = v1039 + "/aa[tucy]/=N,";
    var v984 = v1012 + "/cc[acgturyswkmbdhvn]/=P,";
    var v948 = v984 + "/ca[agr]/=Q,";
    var v911 = v948 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v870 = v911 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v812 = v870 + "/ac[acgturyswkmbdhvn]/=T,";
    var v728 = v812 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v601 = v728 + "/[tu]gg/=W,";
    var v319 = v601 + "/[tu]a[ctuy]/=Y,";
    return v319 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v602 = type$$26.toLowerCase();
  var v322 = v602 == "transl_table=13";
  if (v322) {
    var v1231 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1213 = v1231 + "/ga[tcuy]/=D,";
    var v1195 = v1213 + "/ga[agr]/=E,";
    var v1176 = v1195 + "/[tu][tu][tcuy]/=F,";
    var v1156 = v1176 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1134 = v1156 + "/ca[tcuy]/=H,";
    var v1112 = v1134 + "/a[tu][tcuy]/=I,";
    var v1090 = v1112 + "/aa[agr]/=K,";
    var v1065 = v1090 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1040 = v1065 + "/a[tu][agr]/=M,";
    var v1013 = v1040 + "/aa[tucy]/=N,";
    var v985 = v1013 + "/cc[acgturyswkmbdhvn]/=P,";
    var v949 = v985 + "/ca[agr]/=Q,";
    var v912 = v949 + "/cg[acgturyswkmbdhvn]/=R,";
    var v871 = v912 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v813 = v871 + "/ac[acgturyswkmbdhvn]/=T,";
    var v729 = v813 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v603 = v729 + "/[tu]g[agr]/=W,";
    var v321 = v603 + "/[tu]a[ctuy]/=Y,";
    return v321 + "/[tu]a[agr]/=*";
  }
  var v604 = type$$26.toLowerCase();
  var v324 = v604 == "transl_table=14";
  if (v324) {
    var v1232 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1214 = v1232 + "/ga[tcuy]/=D,";
    var v1196 = v1214 + "/ga[agr]/=E,";
    var v1177 = v1196 + "/[tu][tu][tcuy]/=F,";
    var v1157 = v1177 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1135 = v1157 + "/ca[tcuy]/=H,";
    var v1113 = v1135 + "/a[tu][atcuwmhy]/=I,";
    var v1091 = v1113 + "/aag/=K,";
    var v1066 = v1091 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1041 = v1066 + "/a[tu]g/=M,";
    var v1014 = v1041 + "/aa[atcuwmhy]/=N,";
    var v986 = v1014 + "/cc[acgturyswkmbdhvn]/=P,";
    var v950 = v986 + "/ca[agr]/=Q,";
    var v913 = v950 + "/cg[acgturyswkmbdhvn]/=R,";
    var v872 = v913 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v814 = v872 + "/ac[acgturyswkmbdhvn]/=T,";
    var v730 = v814 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v605 = v730 + "/[tu]g[agr]/=W,";
    var v323 = v605 + "/[tu]a[atcuwmhy]/=Y,";
    return v323 + "/[tu]ag/=*";
  }
  var v606 = type$$26.toLowerCase();
  var v326 = v606 == "transl_table=15";
  if (v326) {
    var v1233 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1215 = v1233 + "/ga[tcuy]/=D,";
    var v1197 = v1215 + "/ga[agr]/=E,";
    var v1178 = v1197 + "/[tu][tu][tcuy]/=F,";
    var v1158 = v1178 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1136 = v1158 + "/ca[tcuy]/=H,";
    var v1114 = v1136 + "/a[tu][atcuwmhy]/=I,";
    var v1092 = v1114 + "/aa[agr]/=K,";
    var v1067 = v1092 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1042 = v1067 + "/a[tu]g/=M,";
    var v1015 = v1042 + "/aa[tucy]/=N,";
    var v987 = v1015 + "/cc[acgturyswkmbdhvn]/=P,";
    var v951 = v987 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v914 = v951 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v873 = v914 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v815 = v873 + "/ac[acgturyswkmbdhvn]/=T,";
    var v731 = v815 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v607 = v731 + "/[tu]gg/=W,";
    var v325 = v607 + "/[tu]a[ctuy]/=Y,";
    return v325 + "/[tu][agr]a/=*";
  }
  var v608 = type$$26.toLowerCase();
  var v328 = v608 == "transl_table=16";
  if (v328) {
    var v1234 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1216 = v1234 + "/ga[tcuy]/=D,";
    var v1198 = v1216 + "/ga[agr]/=E,";
    var v1179 = v1198 + "/[tu][tu][tcuy]/=F,";
    var v1159 = v1179 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1137 = v1159 + "/ca[tcuy]/=H,";
    var v1115 = v1137 + "/a[tu][atcuwmhy]/=I,";
    var v1093 = v1115 + "/aa[agr]/=K,";
    var v1068 = v1093 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1043 = v1068 + "/a[tu]g/=M,";
    var v1016 = v1043 + "/aa[tucy]/=N,";
    var v988 = v1016 + "/cc[acgturyswkmbdhvn]/=P,";
    var v952 = v988 + "/ca[agr]/=Q,";
    var v915 = v952 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v874 = v915 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v816 = v874 + "/ac[acgturyswkmbdhvn]/=T,";
    var v732 = v816 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v609 = v732 + "/[tu]gg/=W,";
    var v327 = v609 + "/[tu]a[ctuy]/=Y,";
    return v327 + "/[tu][agr]a/=*";
  }
  var v610 = type$$26.toLowerCase();
  var v330 = v610 == "transl_table=21";
  if (v330) {
    var v1235 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1217 = v1235 + "/ga[tcuy]/=D,";
    var v1199 = v1217 + "/ga[agr]/=E,";
    var v1180 = v1199 + "/[tu][tu][tcuy]/=F,";
    var v1160 = v1180 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1138 = v1160 + "/ca[tcuy]/=H,";
    var v1116 = v1138 + "/a[tu][tcuy]/=I,";
    var v1094 = v1116 + "/aag/=K,";
    var v1069 = v1094 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1044 = v1069 + "/a[tu][agr]/=M,";
    var v1017 = v1044 + "/aa[atcuwmhy]/=N,";
    var v989 = v1017 + "/cc[acgturyswkmbdhvn]/=P,";
    var v953 = v989 + "/ca[agr]/=Q,";
    var v916 = v953 + "/cg[acgturyswkmbdhvn]/=R,";
    var v875 = v916 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v817 = v875 + "/ac[acgturyswkmbdhvn]/=T,";
    var v733 = v817 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v611 = v733 + "/[tu]g[agr]/=W,";
    var v329 = v611 + "/[tu]a[ctuy]/=Y,";
    return v329 + "/[tu]a[agr]/=*";
  }
  var v612 = type$$26.toLowerCase();
  var v332 = v612 == "transl_table=22";
  if (v332) {
    var v1236 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1218 = v1236 + "/ga[tcuy]/=D,";
    var v1200 = v1218 + "/ga[agr]/=E,";
    var v1181 = v1200 + "/[tu][tu][tcuy]/=F,";
    var v1161 = v1181 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1139 = v1161 + "/ca[tcuy]/=H,";
    var v1117 = v1139 + "/a[tu][atcuwmhy]/=I,";
    var v1095 = v1117 + "/aa[agr]/=K,";
    var v1070 = v1095 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1045 = v1070 + "/a[tu]g/=M,";
    var v1018 = v1045 + "/aa[tucy]/=N,";
    var v990 = v1018 + "/cc[acgturyswkmbdhvn]/=P,";
    var v954 = v990 + "/ca[agr]/=Q,";
    var v917 = v954 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v876 = v917 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v818 = v876 + "/ac[acgturyswkmbdhvn]/=T,";
    var v734 = v818 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v613 = v734 + "/[tu]gg/=W,";
    var v331 = v613 + "/[tu]a[ctuy]/=Y,";
    return v331 + "/[tu][agcrsmv]a/=*";
  }
  var v614 = type$$26.toLowerCase();
  var v334 = v614 == "transl_table=23";
  if (v334) {
    var v1237 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1219 = v1237 + "/ga[tcuy]/=D,";
    var v1201 = v1219 + "/ga[agr]/=E,";
    var v1182 = v1201 + "/[tu][tu][tcuy]/=F,";
    var v1162 = v1182 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1140 = v1162 + "/ca[tcuy]/=H,";
    var v1118 = v1140 + "/a[tu][atcuwmhy]/=I,";
    var v1096 = v1118 + "/aa[agr]/=K,";
    var v1071 = v1096 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1046 = v1071 + "/a[tu]g/=M,";
    var v1019 = v1046 + "/aa[tucy]/=N,";
    var v991 = v1019 + "/cc[acgturyswkmbdhvn]/=P,";
    var v955 = v991 + "/ca[agr]/=Q,";
    var v918 = v955 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v877 = v918 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v819 = v877 + "/ac[acgturyswkmbdhvn]/=T,";
    var v735 = v819 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v615 = v735 + "/[tu]gg/=W,";
    var v333 = v615 + "/[tu]a[ctuy]/=Y,";
    return v333 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*";
  }
  return true;
}
function transMap() {
  var theDocument = document;
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 5E5;
  var v616 = testScript();
  var v335 = v616 == false;
  if (v335) {
    return;
  }
  var v956 = theDocument.forms;
  var v919 = v956[0];
  var v878 = v919.elements;
  var v820 = v878[6];
  var v736 = v820.options;
  var v957 = theDocument.forms;
  var v920 = v957[0];
  var v879 = v920.elements;
  var v821 = v879[6];
  var v737 = v821.selectedIndex;
  var v617 = v736[v737];
  var v336 = v617.value;
  var geneticCode = getGeneticCodeString(v336);
  var v958 = theDocument.forms;
  var v921 = v958[0];
  var v880 = v921.elements;
  var v822 = v880[0];
  var v738 = checkFormElement(v822);
  var v618 = v738 == false;
  var v740 = !v618;
  if (v740) {
    var v992 = theDocument.forms;
    var v959 = v992[0];
    var v922 = v959.elements;
    var v881 = v922[0];
    var v823 = v881.value;
    var v739 = checkSequenceLength(v823, maxInput$$3);
    v618 = v739 == false;
  }
  var v337 = v618;
  if (v337) {
    return;
  }
  geneticCode = JAM.call(geneticCode.split, geneticCode, [/,/], JAM.policy.p15);
  var v619 = checkGeneticCode(geneticCode);
  var v338 = v619 == false;
  if (v338) {
    return;
  }
  openWindow();
  openPre();
  var v882 = theDocument.forms;
  var v824 = v882[0];
  var v741 = v824.elements;
  var v620 = v741[0];
  var v339 = v620.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v339);
  var i$$11 = 0;
  var v621 = arrayOfFasta$$1.length;
  var v347 = i$$11 < v621;
  for (;v347;) {
    var v340 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v340);
    var v341 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v341);
    newDna = removeNonDna(newDna);
    var v342 = outputWindow.document;
    var v343 = getInfoFromTitleAndSequence(title$$9, newDna);
    JAM.call(v342.write, v342, [v343], JAM.policy.p17);
    var v960 = theDocument.forms;
    var v923 = v960[0];
    var v883 = v923.elements;
    var v825 = v883[4];
    var v742 = v825.options;
    var v961 = theDocument.forms;
    var v924 = v961[0];
    var v884 = v924.elements;
    var v826 = v884[4];
    var v743 = v826.selectedIndex;
    var v622 = v742[v743];
    var v344 = v622.value;
    var v962 = theDocument.forms;
    var v925 = v962[0];
    var v885 = v925.elements;
    var v827 = v885[5];
    var v744 = v827.options;
    var v963 = theDocument.forms;
    var v926 = v963[0];
    var v886 = v926.elements;
    var v828 = v886[5];
    var v745 = v828.selectedIndex;
    var v623 = v744[v745];
    var v345 = v623.value;
    layoutTranslation(newDna, geneticCode, v344, v345);
    var v346 = outputWindow.document;
    JAM.call(v346.write, v346, ["\n\n"], JAM.policy.p10);
    i$$11++;
    var v624 = arrayOfFasta$$1.length;
    v347 = i$$11 < v624;
  }
  closePre();
  closeWindow();
  return;
}
function layoutTranslation(dnaSequence$$3, geneticCode$$1, basesPerLine, readingFrame) {
  basesPerLine = parseInt(basesPerLine);
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var textLayout = new TextLayout;
  var v625 = readingFrame == "3";
  var v746 = !v625;
  if (v746) {
    v625 = readingFrame == "all_three";
  }
  var v349 = v625;
  if (v349) {
    var translation = new TranslationComponent;
    var v829 = dnaSequence$$3.length;
    var v747 = JAM.call(dnaSequence$$3.substring, dnaSequence$$3, [2, v829], JAM.policy.p13);
    var v626 = translate(v747, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v348 = "  " + v626;
    JAM.call(translation.setCharacters, translation, [v348], JAM.policy.p17);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p17);
  }
  var v627 = readingFrame == "2";
  var v748 = !v627;
  if (v748) {
    v627 = readingFrame == "all_three";
  }
  var v351 = v627;
  if (v351) {
    translation = new TranslationComponent;
    var v830 = dnaSequence$$3.length;
    var v749 = JAM.call(dnaSequence$$3.substring, dnaSequence$$3, [1, v830], JAM.policy.p13);
    var v628 = translate(v749, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v350 = " " + v628;
    JAM.call(translation.setCharacters, translation, [v350], JAM.policy.p17);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p17);
  }
  var v629 = readingFrame == "1";
  var v750 = !v629;
  if (v750) {
    v629 = readingFrame == "all_three";
  }
  var v353 = v629;
  if (v353) {
    translation = new TranslationComponent;
    var v352 = translate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    JAM.call(translation.setCharacters, translation, [v352], JAM.policy.p17);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p17);
  }
  var v355 = readingFrame == "uppercase";
  if (v355) {
    translation = new UppercaseTranslationComponent;
    var v354 = uppercaseTranslate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    JAM.call(translation.setCharacters, translation, [v354], JAM.policy.p17);
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
  var v356 = complement(dnaSequence$$3);
  JAM.call(dna.setCharacters, dna, [v356], JAM.policy.p17);
  JAM.call(textLayout.addComponent, textLayout, [dna], JAM.policy.p17);
  var i$$12 = 0;
  var v630 = dnaSequence$$3.length;
  var v358 = i$$12 < v630;
  for (;v358;) {
    var v357 = i$$12 + basesPerLine;
    JAM.call(textLayout.writeLayout, textLayout, [i$$12, v357], JAM.policy.p16);
    i$$12 = i$$12 + basesPerLine;
    var v631 = dnaSequence$$3.length;
    v358 = i$$12 < v631;
  }
  return;
}
function translate(dnaSequence$$4, geneticCodeMatchExp$$3, geneticCodeMatchResult$$3) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    var v359 = " " + p1$$2;
    return v359 + " ";
  }
  var v751 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v632 = v751.length;
  var v360 = v632 < 3;
  if (v360) {
    return "";
  }
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/(...)/g, v2], JAM.policy.p16);
  var i$$13 = 0;
  var v633 = geneticCodeMatchExp$$3.length;
  var v363 = i$$13 < v633;
  for (;v363;) {
    var v361 = geneticCodeMatchExp$$3[i$$13];
    var v362 = geneticCodeMatchResult$$3[i$$13];
    dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [v361, v362], JAM.policy.p27);
    i$$13++;
    var v634 = geneticCodeMatchExp$$3.length;
    v363 = i$$13 < v634;
  }
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/\S{3}/g, "X"], JAM.policy.p16);
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/\s\S{1,2}$/, ""], JAM.policy.p16);
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/^\s/, ""], JAM.policy.p16);
  return dnaSequence$$4;
}
function uppercaseTranslate(dnaSequence$$5, geneticCodeMatchExp$$4, geneticCodeMatchResult$$4) {
  function v3(str$$9, p1$$3, p2, p3, p4, p5, p6, offset$$11, s$$5) {
    var v927 = " " + p1$$3;
    var v887 = v927 + p3;
    var v831 = v887 + p5;
    var v752 = v831 + " ";
    var v635 = v752 + p2;
    var v364 = v635 + p4;
    return v364 + p6;
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/[a-z]/g, " "], JAM.policy.p16);
  var v753 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v636 = v753.length;
  var v365 = v636 < 3;
  if (v365) {
    return "";
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/([A-Z])(\s*)([A-Z])(\s*)([A-Z])(\s*)/g, v3], JAM.policy.p16);
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/\s\S{1,2}\s/g, ""], JAM.policy.p16);
  var i$$14 = 0;
  var v637 = geneticCodeMatchExp$$4.length;
  var v368 = i$$14 < v637;
  for (;v368;) {
    var v366 = geneticCodeMatchExp$$4[i$$14];
    var v367 = geneticCodeMatchResult$$4[i$$14];
    dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [v366, v367], JAM.policy.p27);
    i$$14++;
    var v638 = geneticCodeMatchExp$$4.length;
    v368 = i$$14 < v638;
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/\S{3}/g, "X"], JAM.policy.p16);
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/^\s/, ""], JAM.policy.p16);
  return dnaSequence$$5;
}
function writeLayout(start$$4, stop) {
  var i$$15 = 0;
  var v754 = this.components;
  var v639 = v754.length;
  var v370 = i$$15 < v639;
  for (;v370;) {
    var v640 = this.components;
    var v369 = v640[i$$15];
    JAM.call(v369.writeLayoutComponent, v369, [start$$4, stop], JAM.policy.p27);
    i$$15++;
    var v755 = this.components;
    var v641 = v755.length;
    v370 = i$$15 < v641;
  }
  return;
}
function addComponent(component) {
  var v371 = this.components;
  JAM.call(v371.push, v371, [component], JAM.policy.p17);
  return;
}
function TextLayout() {
  var v1336 = new Array;
  this.components = v1336;
  return;
}
function writeLayoutComponent(start$$5, stop$$1) {
  return;
}
function setCharacters(text$$14) {
  var v642 = JAM.call(text$$14.search, text$$14, [/./], JAM.policy.p15);
  var v372 = v642 != -1;
  if (v372) {
    var v1337 = JAM.call(text$$14.match, text$$14, [/./g], JAM.policy.p15);
    this.characters = v1337;
  }
  return;
}
function isRoom(start$$6, stop$$2) {
  var v373 = this.characters;
  var rangeToCheck = JAM.call(v373.slice, v373, [start$$6, stop$$2], JAM.policy.p27);
  rangeToCheck = JAM.call(rangeToCheck.join, rangeToCheck, [""], JAM.policy.p10);
  var v643 = JAM.call(rangeToCheck.search, rangeToCheck, [/\w/], JAM.policy.p15);
  var v374 = v643 == -1;
  if (v374) {
    return true;
  } else {
    return false;
  }
  return;
}
function LayoutComponent() {
  var v1338 = new Array;
  this.characters = v1338;
  this.positionLabel = 1;
  return;
}
function TranslationComponent() {
  var v1339 = new Array;
  this.characters = v1339;
  this.positionLabel = 1;
  return;
}
function UppercaseTranslationComponent() {
  var v1340 = new Array;
  this.characters = v1340;
  this.positionLabel = 1;
  return;
}
function DnaComponent() {
  var v1341 = new Array;
  this.characters = v1341;
  this.positionLabel = 1;
  return;
}
function RulerComponent() {
  var v1342 = new Array;
  this.characters = v1342;
  this.positionLabel = 1;
  return;
}
function buildRuler() {
  function v4(str$$12, p1$$6, offset$$14, s$$8) {
    var ruler$$1 = count$$3 + spacing;
    var v375 = count$$3 == 0;
    if (v375) {
      ruler$$1 = spacing;
    }
    count$$3 = count$$3 + 10;
    return JAM.call(ruler$$1.substring, ruler$$1, [0, 10], JAM.policy.p13);
  }
  var v376 = this.characters;
  var sequence$$18 = JAM.call(v376.join, v376, [""], JAM.policy.p10);
  var count$$3 = 0;
  var spacing = "         ";
  sequence$$18 = JAM.call(sequence$$18.replace, sequence$$18, [/(.{1,10})/g, v4], JAM.policy.p16);
  var v1343 = JAM.call(sequence$$18.match, sequence$$18, [/./g], JAM.policy.p15);
  this.characters = v1343;
  return;
}
new TextLayout;
var v377 = TextLayout.prototype;
v377.writeLayout = writeLayout;
var v378 = TextLayout.prototype;
v378.addComponent = addComponent;
new LayoutComponent;
var v379 = LayoutComponent.prototype;
v379.writeLayoutComponent = writeLayoutComponent;
var v380 = LayoutComponent.prototype;
v380.setCharacters = setCharacters;
var v381 = LayoutComponent.prototype;
v381.isRoom = isRoom;
var v382 = TranslationComponent;
var v1344 = new LayoutComponent;
v382.prototype = v1344;
var v383 = TranslationComponent.prototype;
v383.writeLayoutComponent = v5;
var v384 = UppercaseTranslationComponent;
var v1345 = new LayoutComponent;
v384.prototype = v1345;
var v385 = UppercaseTranslationComponent.prototype;
v385.writeLayoutComponent = v6;
var v386 = DnaComponent;
var v1346 = new LayoutComponent;
v386.prototype = v1346;
var v387 = DnaComponent.prototype;
v387.writeLayoutComponent = v7;
var v388 = RulerComponent;
var v1347 = new LayoutComponent;
v388.prototype = v1347;
var v389 = RulerComponent.prototype;
v389.writeLayoutComponent = v10;
new RulerComponent;
var v390 = RulerComponent.prototype;
v390.buildRuler = buildRuler;
JAM.set(document, "onload", v11);
var v391 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p10);
JAM.set(v391, "onclick", v12);
var v392 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p10);
JAM.set(v392, "onclick", v13)

JAM.stopProfile('load');
