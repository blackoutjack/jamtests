function v13() {
  var v773 = document.forms;
  var v657 = v773[0];
  var v404 = v657.elements;
  var v14 = v404[0];
  v14.value = " ";
  return
}
function v12() {
  try {
    transMap(document)
  }catch(e$$5) {
    var v15 = "The following error was encountered: " + e$$5;
    alert(v15)
  }
  return
}
function v11() {
  var v405 = document.main_form;
  var v16 = v405.main_submit;
  JAM.call(v16.focus, v16, [], JAM.policy.p13);
  return
}
function v10(start$$10, stop$$6) {
  function v9(str$$11, p1$$5, offset$$17, s$$7) {
    return JAM.call(p1$$5.replace, p1$$5, [/./g, " "], JAM.policy.p13)
  }
  function v8(str$$10, p1$$4, offset$$16, s$$6) {
    return JAM.call(p1$$4.replace, p1$$4, [/./g, " "], JAM.policy.p13)
  }
  var v17 = outputWindow.document;
  var v406 = this.positionLabel;
  var v18 = rightNum(v406, "", 8, "");
  JAM.call(v17.write, v17, [v18], JAM.policy.p23);
  var v407 = this.characters;
  var v19 = JAM.call(v407.slice, v407, [start$$10, stop$$6], JAM.policy.p24);
  var text$$15 = JAM.call(v19.join, v19, [""], JAM.policy.p14);
  text$$15 = JAM.call(text$$15.replace, text$$15, [/^(\d+)/g, v8], JAM.policy.p13);
  text$$15 = JAM.call(text$$15.replace, text$$15, [/(\d+)$/g, v9], JAM.policy.p13);
  var v20 = outputWindow.document;
  var v21 = text$$15 + "\n";
  JAM.call(v20.write, v20, [v21], JAM.policy.p23);
  var v22 = this.positionLabel;
  var v23 = stop$$6 - start$$10;
  this.positionLabel = v22 + v23;
  return
}
function v7(start$$9, stop$$5) {
  var v24 = outputWindow.document;
  var v408 = this.positionLabel;
  var v25 = rightNum(v408, "", 8, "");
  JAM.call(v24.write, v24, [v25], JAM.policy.p23);
  var v26 = outputWindow.document;
  var v774 = this.characters;
  var v658 = JAM.call(v774.slice, v774, [start$$9, stop$$5], JAM.policy.p24);
  var v409 = JAM.call(v658.join, v658, [""], JAM.policy.p14);
  var v27 = v409 + "\n";
  JAM.call(v26.write, v26, [v27], JAM.policy.p23);
  var v28 = this.positionLabel;
  var v29 = stop$$5 - start$$9;
  this.positionLabel = v28 + v29;
  return
}
function v6(start$$8, stop$$4) {
  var v659 = this.characters;
  var v410 = JAM.call(v659.slice, v659, [start$$8, stop$$4], JAM.policy.p24);
  var v30 = JAM.call(v410.join, v410, [""], JAM.policy.p14);
  var textToWrite = v30 + "\n";
  var v411 = JAM.call(textToWrite.search, textToWrite, [/\w/], JAM.policy.p13);
  var v36 = v411 != -1;
  if(v36) {
    var v31 = outputWindow.document;
    var v412 = this.positionLabel;
    var v32 = rightNum(v412, "", 8, "");
    JAM.call(v31.write, v31, [v32], JAM.policy.p23);
    var v33 = this.positionLabel;
    var v413 = JAM.call(textToWrite.match, textToWrite, [/[A-Z]/g], JAM.policy.p13);
    var v34 = v413.length;
    this.positionLabel = v33 + v34;
    var v35 = outputWindow.document;
    JAM.call(v35.write, v35, [textToWrite], JAM.policy.p23)
  }
  return
}
function v5(start$$7, stop$$3) {
  var v37 = outputWindow.document;
  var v414 = this.positionLabel;
  var v38 = rightNum(v414, "", 8, "");
  JAM.call(v37.write, v37, [v38], JAM.policy.p23);
  var v39 = outputWindow.document;
  var v775 = this.characters;
  var v660 = JAM.call(v775.slice, v775, [start$$7, stop$$3], JAM.policy.p24);
  var v415 = JAM.call(v660.join, v660, [""], JAM.policy.p14);
  var v40 = v415 + "\n";
  JAM.call(v39.write, v39, [v40], JAM.policy.p23);
  var v41 = this.positionLabel;
  var v416 = stop$$3 - start$$7;
  var v42 = v416 / 3;
  this.positionLabel = v41 + v42;
  return
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$12, s$$2) {
    return p1 + "\n"
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p13);
  return sequence
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v43 = arrayOfSequences[0];
  var lengthOfAlign = v43.length;
  var v417 = arrayOfSequences.length;
  var v44 = v417 < 2;
  if(v44) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v418 = arrayOfTitles.length;
  var v46 = i$$1 < v418;
  for(;v46;) {
    var v776 = arrayOfTitles[i$$1];
    var v661 = JAM.call(v776.search, v776, [/\S/], JAM.policy.p13);
    var v419 = v661 == -1;
    var v663 = !v419;
    if(v663) {
      var v850 = arrayOfSequences[i$$1];
      var v777 = JAM.call(v850.search, v850, [/\S/], JAM.policy.p13);
      var v662 = v777 == -1;
      var v779 = !v662;
      if(v779) {
        var v851 = arrayOfSequences[i$$1];
        var v778 = v851.length;
        v662 = v778 != lengthOfAlign
      }
      v419 = v662
    }
    var v45 = v419;
    if(v45) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v420 = arrayOfTitles.length;
    v46 = i$$1 < v420
  }
  return true
}
function checkCodonTable(codonTable) {
  var v664 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p13);
  var v421 = v664 == -1;
  var v666 = !v421;
  if(v666) {
    var v780 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p13);
    var v665 = v780 == -1;
    var v782 = !v665;
    if(v782) {
      var v852 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p13);
      var v781 = v852 == -1;
      var v854 = !v781;
      if(v854) {
        var v906 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p13);
        var v853 = v906 == -1;
        var v908 = !v853;
        if(v908) {
          var v907 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p13);
          v853 = v907 == -1
        }
        v781 = v853
      }
      v665 = v781
    }
    v421 = v665
  }
  var v47 = v421;
  if(v47) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v667 = formElement.value;
  var v422 = JAM.call(v667.search, v667, [/\S/], JAM.policy.p13);
  var v48 = v422 == -1;
  if(v48) {
    alert("Please enter some text.");
    return false
  }
  return true
}
function checkGeneticCode(arrayOfPatterns) {
  var z$$2 = 0;
  var codon = "";
  var oneMatch = false;
  var testSequence = "gggggaggtggcgaggaagatgacgtggtagttgtcgcggcagctgccaggagaagtagcaagaaaaataacatgataattatcacgacaactacctggtgatgttgctagtaatattacttgttatttttctcgtcatcttcccggcgacgtcgccagcaacatcacctgctacttctcccgccacctccc";
  var v423 = arrayOfPatterns.length;
  var v51 = z$$2 < v423;
  for(;v51;) {
    var v668 = arrayOfPatterns[z$$2];
    var v424 = JAM.call(v668.search, v668, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p13);
    var v49 = v424 == -1;
    if(v49) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v669 = arrayOfPatterns[z$$2];
    var v425 = moreExpressionCheck(v669);
    var v50 = v425 == false;
    if(v50) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v426 = arrayOfPatterns.length;
    v51 = z$$2 < v426
  }
  var v52 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v52);
  var v53 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v53);
  var j = 0;
  var v427 = arrayOfPatterns.length;
  var v60 = j < v427;
  for(;v60;) {
    var v54 = geneticCodeMatchExp;
    var v55 = j;
    var v783 = arrayOfPatterns[j];
    var v670 = JAM.call(v783.match, v783, [/\/.+\//], JAM.policy.p13);
    var v428 = v670 + "gi";
    if(JAM.isEval(eval)) {
      var v1348 = eval("introspect(JAM.policy.pFull) { " + v428 + " }")
    }else {
      var v1348 = JAM.call(eval, null, [v428])
    }
    v54[v55] = v1348;
    var v56 = geneticCodeMatchResult;
    var v57 = j;
    var v671 = arrayOfPatterns[j];
    var v429 = JAM.call(v671.match, v671, [/=[a-zA-Z\*]/], JAM.policy.p13);
    var v1349 = JAM.call(v429.toString, v429, [], JAM.policy.p13);
    v56[v57] = v1349;
    var v58 = geneticCodeMatchResult;
    var v59 = j;
    var v430 = geneticCodeMatchResult[j];
    var v1350 = JAM.call(v430.replace, v430, [/=/g, ""], JAM.policy.p13);
    v58[v59] = v1350;
    j = j + 1;
    var v431 = arrayOfPatterns.length;
    v60 = j < v431
  }
  var i$$2 = 0;
  var v672 = testSequence.length;
  var v432 = v672 - 3;
  var v67 = i$$2 <= v432;
  for(;v67;) {
    var v61 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v61], JAM.policy.p13);
    j = 0;
    var v433 = geneticCodeMatchExp.length;
    var v65 = j < v433;
    for(;v65;) {
      var v673 = geneticCodeMatchExp[j];
      var v434 = JAM.call(codon.search, codon, [v673], JAM.policy.p23);
      var v64 = v434 != -1;
      if(v64) {
        var v63 = oneMatch == true;
        if(v63) {
          var v435 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v62 = v435 + ".";
          alert(v62);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v436 = geneticCodeMatchExp.length;
      v65 = j < v436
    }
    var v66 = oneMatch == false;
    if(v66) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v674 = testSequence.length;
    var v437 = v674 - 3;
    v67 = i$$2 <= v437
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v438 = arrayOfPatterns$$1.length;
  var v69 = z$$3 < v438;
  for(;v69;) {
    var v675 = arrayOfPatterns$$1[z$$3];
    var v439 = JAM.call(v675.search, v675, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p13);
    var v68 = v439 != -1;
    if(v68) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v440 = arrayOfPatterns$$1.length;
    v69 = z$$3 < v440
  }
  var i$$3 = 0;
  var v441 = arrayOfPatterns$$1.length;
  var v73 = i$$3 < v441;
  for(;v73;) {
    var v676 = arrayOfPatterns$$1[i$$3];
    var v442 = "[" + v676;
    var v70 = v442 + "]";
    var re = new RegExp(v70, "gi");
    var j$$1 = i$$3 + 1;
    var v443 = arrayOfPatterns$$1.length;
    var v72 = j$$1 < v443;
    for(;v72;) {
      var v677 = arrayOfPatterns$$1[j$$1];
      var v444 = JAM.call(v677.search, v677, [re], JAM.policy.p23);
      var v71 = v444 != -1;
      if(v71) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v445 = arrayOfPatterns$$1.length;
      v72 = j$$1 < v445
    }
    i$$3 = i$$3 + 1;
    var v446 = arrayOfPatterns$$1.length;
    v73 = i$$3 < v446
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v447 = arrayOfPatterns$$2.length;
  var v76 = z$$4 < v447;
  for(;v76;) {
    var v678 = arrayOfPatterns$$2[z$$4];
    var v448 = JAM.call(v678.search, v678, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p13);
    var v74 = v448 == -1;
    if(v74) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v679 = arrayOfPatterns$$2[z$$4];
    var v449 = moreExpressionCheck(v679);
    var v75 = v449 == false;
    if(v75) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v450 = arrayOfPatterns$$2.length;
    v76 = z$$4 < v450
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v784 = getSequenceFromFasta(text$$7);
  var v680 = JAM.call(v784.replace, v784, [/[^A-Za-z]/g, ""], JAM.policy.p13);
  var v451 = v680.length;
  var v78 = v451 > maxInput;
  if(v78) {
    var v452 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v77 = v452 + " characters.";
    alert(v77);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v453 = text$$8.length;
  var v80 = v453 > maxInput$$1;
  if(v80) {
    var v454 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v79 = v454 + " characters.";
    alert(v79);
    return false
  }else {
    return true
  }
  return
}
function complement(dnaSequence) {
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p13);
  return dnaSequence
}
function closeForm() {
  var v81 = outputWindow.document;
  JAM.call(v81.write, v81, ["</form>"], JAM.policy.p14);
  return true
}
function closePre() {
  var v82 = outputWindow.document;
  JAM.call(v82.write, v82, ["</div>"], JAM.policy.p14);
  var v83 = outputWindow.document;
  JAM.call(v83.write, v83, ["</pre>\n"], JAM.policy.p14);
  return
}
function closeTextArea() {
  var v84 = outputWindow.document;
  JAM.call(v84.write, v84, ["</textarea>"], JAM.policy.p14);
  return true
}
function closeWindow() {
  var v85 = outputWindow.document;
  JAM.call(v85.write, v85, ["</body>\n</html>\n"], JAM.policy.p14);
  outputWindow.status = "Done.";
  var v86 = outputWindow.document;
  JAM.call(v86.close, v86, [], JAM.policy.p13);
  return true
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = JAM.call(sequence$$1.toLowerCase, sequence$$1, [], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p13);
  return sequence$$1
}
function earlyCheckAlign(alignArray) {
  var v455 = alignArray.length;
  var v87 = v455 < 3;
  if(v87) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v456 = alignArray.length;
  var v89 = i$$4 < v456;
  for(;v89;) {
    var v681 = alignArray[i$$4];
    var v457 = JAM.call(v681.search, v681, [/[^\s]+\s/], JAM.policy.p13);
    var v88 = v457 == -1;
    if(v88) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v458 = alignArray.length;
    v89 = i$$4 < v458
  }
  return true
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p13);
  return alignSeq
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p13);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p13);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p13);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p13)
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v459 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v92 = v459 != -1;
  if(v92) {
    var v91 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p23);
    for(;v91;) {
      var v90 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v90], JAM.policy.p23);
      v91 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p23)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v460 = sequence$$2.length;
  var v93 = "&gt;results for " + v460;
  var stringToReturn = v93 + " residue sequence ";
  var v461 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p13);
  var v95 = v461 != -1;
  if(v95) {
    var v462 = stringToReturn + '"';
    var v94 = v462 + fastaSequenceTitle;
    stringToReturn = v94 + '"'
  }
  var v463 = stringToReturn + ' starting "';
  var v464 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v96 = v463 + v464;
  stringToReturn = v96 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v465 = sequenceOne.length;
  var v97 = "Search results for " + v465;
  var stringToReturn$$1 = v97 + " residue sequence ";
  var v466 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p13);
  var v99 = v466 != -1;
  if(v99) {
    var v467 = stringToReturn$$1 + '"';
    var v98 = v467 + fastaSequenceTitleOne;
    stringToReturn$$1 = v98 + '"'
  }
  var v468 = stringToReturn$$1 + ' starting "';
  var v469 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v100 = v468 + v469;
  stringToReturn$$1 = v100 + '"\n';
  var v470 = stringToReturn$$1 + "and ";
  var v471 = sequenceTwo.length;
  var v101 = v470 + v471;
  stringToReturn$$1 = v101 + " residue sequence ";
  var v472 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p13);
  var v103 = v472 != -1;
  if(v103) {
    var v473 = stringToReturn$$1 + '"';
    var v102 = v473 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v102 + '"'
  }
  var v474 = stringToReturn$$1 + ' starting "';
  var v475 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v104 = v474 + v475;
  stringToReturn$$1 = v104 + '"';
  var v105 = '<div class="info">' + stringToReturn$$1;
  return v105 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v106 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v106);
  var j$$2 = 0;
  var v476 = arrayOfPatterns$$3.length;
  var v109 = j$$2 < v476;
  for(;v109;) {
    var v107 = geneticCodeMatchExp$$1;
    var v108 = j$$2;
    var v785 = arrayOfPatterns$$3[j$$2];
    var v682 = JAM.call(v785.match, v785, [/\/.+\//], JAM.policy.p13);
    var v477 = v682 + "gi";
    if(JAM.isEval(eval)) {
      var v1351 = eval("introspect(JAM.policy.pFull) { " + v477 + " }")
    }else {
      var v1351 = JAM.call(eval, null, [v477])
    }
    v107[v108] = v1351;
    j$$2 = j$$2 + 1;
    var v478 = arrayOfPatterns$$3.length;
    v109 = j$$2 < v478
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v110 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v110);
  var j$$3 = 0;
  var v479 = arrayOfPatterns$$4.length;
  var v115 = j$$3 < v479;
  for(;v115;) {
    var v111 = geneticCodeMatchResult$$1;
    var v112 = j$$3;
    var v683 = arrayOfPatterns$$4[j$$3];
    var v480 = JAM.call(v683.match, v683, [/=[a-zA-Z\*]/], JAM.policy.p13);
    var v1352 = JAM.call(v480.toString, v480, [], JAM.policy.p13);
    v111[v112] = v1352;
    var v113 = geneticCodeMatchResult$$1;
    var v114 = j$$3;
    var v481 = geneticCodeMatchResult$$1[j$$3];
    var v1353 = JAM.call(v481.replace, v481, [/=/g, ""], JAM.policy.p13);
    v113[v114] = v1353;
    j$$3 = j$$3 + 1;
    var v482 = arrayOfPatterns$$4.length;
    v115 = j$$3 < v482
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v483 = sequence$$3.length;
  var v116 = "Results for " + v483;
  var stringToReturn$$2 = v116 + " residue sequence ";
  var v484 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p13);
  var v118 = v484 != -1;
  if(v118) {
    var v485 = stringToReturn$$2 + '"';
    var v117 = v485 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v117 + '"'
  }
  var v486 = stringToReturn$$2 + ' starting "';
  var v487 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v119 = v486 + v487;
  stringToReturn$$2 = v119 + '"';
  var v120 = '<div class="info">' + stringToReturn$$2;
  return v120 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v684 = "Results for " + topology;
  var v488 = v684 + " ";
  var v489 = sequence$$4.length;
  var v121 = v488 + v489;
  var stringToReturn$$3 = v121 + " residue sequence ";
  var v490 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p13);
  var v123 = v490 != -1;
  if(v123) {
    var v491 = stringToReturn$$3 + '"';
    var v122 = v491 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v122 + '"'
  }
  var v492 = stringToReturn$$3 + ' starting "';
  var v493 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v124 = v492 + v493;
  stringToReturn$$3 = v124 + '"';
  var v125 = '<div class="info">' + stringToReturn$$3;
  return v125 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v494 = sequenceOne$$1.length;
  var v126 = "Alignment results for " + v494;
  var stringToReturn$$4 = v126 + " residue sequence ";
  var v495 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p13);
  var v128 = v495 != -1;
  if(v128) {
    var v496 = stringToReturn$$4 + '"';
    var v127 = v496 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v127 + '"'
  }
  var v497 = stringToReturn$$4 + ' starting "';
  var v498 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v129 = v497 + v498;
  stringToReturn$$4 = v129 + '"\n';
  var v499 = stringToReturn$$4 + "and ";
  var v500 = sequenceTwo$$1.length;
  var v130 = v499 + v500;
  stringToReturn$$4 = v130 + " residue sequence ";
  var v501 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p13);
  var v132 = v501 != -1;
  if(v132) {
    var v502 = stringToReturn$$4 + '"';
    var v131 = v502 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v131 + '"'
  }
  var v503 = stringToReturn$$4 + ' starting "';
  var v504 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v133 = v503 + v504;
  stringToReturn$$4 = v133 + '"';
  var v134 = '<div class="info">' + stringToReturn$$4;
  return v134 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v136 = j$$4 < lengthOut;
  for(;v136;) {
    var v505 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v506 = components.length;
    var v135 = v505 * v506;
    tempNum = JAM.call(Math.floor, Math, [v135], JAM.policy.p13);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p23);
    j$$4 = j$$4 + 1;
    v136 = j$$4 < lengthOut
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p14)
}
function getSequenceFromFasta(sequenceRecord) {
  var v507 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v137 = v507 != -1;
  if(v137) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p13)
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v508 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v139 = v508 != -1;
  if(v139) {
    var v138 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p13);
    fastaTitle = JAM.call(v138.toString, v138, [], JAM.policy.p13);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p13);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p13);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p13)
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v685 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p13);
  var v509 = v685 != -1;
  var v687 = !v509;
  if(v687) {
    var v786 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p13);
    var v686 = v786 != -1;
    var v788 = !v686;
    if(v788) {
      var v855 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p13);
      var v787 = v855 != -1;
      var v857 = !v787;
      if(v857) {
        var v909 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p13);
        var v856 = v909 != -1;
        var v911 = !v856;
        if(v911) {
          var v946 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p13);
          var v910 = v946 != -1;
          var v948 = !v910;
          if(v948) {
            var v982 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p13);
            var v947 = v982 != -1;
            var v984 = !v947;
            if(v984) {
              var v1011 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p13);
              var v983 = v1011 != -1;
              var v1013 = !v983;
              if(v1013) {
                var v1038 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p13);
                var v1012 = v1038 != -1;
                var v1040 = !v1012;
                if(v1040) {
                  var v1065 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p13);
                  var v1039 = v1065 != -1;
                  var v1067 = !v1039;
                  if(v1067) {
                    var v1090 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p13);
                    var v1066 = v1090 != -1;
                    var v1092 = !v1066;
                    if(v1092) {
                      var v1091 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p13);
                      v1066 = v1091 != -1
                    }
                    v1039 = v1066
                  }
                  v1012 = v1039
                }
                v983 = v1012
              }
              v947 = v983
            }
            v910 = v947
          }
          v856 = v910
        }
        v787 = v856
      }
      v686 = v787
    }
    v509 = v686
  }
  var v140 = v509;
  if(v140) {
    return false
  }
  return true
}
function openForm() {
  var v141 = outputWindow.document;
  JAM.call(v141.write, v141, ['<form action="">\n'], JAM.policy.p14);
  return true
}
function openPre() {
  var v142 = outputWindow.document;
  JAM.call(v142.write, v142, ["<pre>"], JAM.policy.p14);
  var v143 = outputWindow.document;
  JAM.call(v143.write, v143, ['<div class="pre">'], JAM.policy.p14);
  return
}
function openTextArea() {
  var v144 = outputWindow.document;
  JAM.call(v144.write, v144, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p14);
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p13);
  var v145 = outputWindow.document;
  var v789 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v688 = v789 + "<head>\n";
  var v510 = v688 + "<title>Sequence Manipulation Suite</title>\n";
  var v146 = v510 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v145.write, v145, [v146], JAM.policy.p23);
  if(isColor) {
    var v147 = outputWindow.document;
    var v1159 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1137 = v1159 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1115 = v1137 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1093 = v1115 + "div.info {font-weight: bold}\n";
    var v1068 = v1093 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1041 = v1068 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1014 = v1041 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v985 = v1014 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v949 = v985 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v912 = v949 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v858 = v912 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v790 = v858 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v689 = v790 + "td.many {color: #000000}\n";
    var v511 = v689 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v148 = v511 + "</style>\n";
    JAM.call(v147.write, v147, [v148], JAM.policy.p23)
  }else {
    var v149 = outputWindow.document;
    var v1181 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1160 = v1181 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1138 = v1160 + "div.title {display: none}\n";
    var v1116 = v1138 + "div.info {font-weight: bold}\n";
    var v1094 = v1116 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1069 = v1094 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1042 = v1069 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1015 = v1042 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v986 = v1015 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v950 = v986 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v913 = v950 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v859 = v913 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v791 = v859 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v690 = v791 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v512 = v690 + "img {display: none}\n";
    var v150 = v512 + "</style>\n";
    JAM.call(v149.write, v149, [v150], JAM.policy.p23)
  }
  var v151 = outputWindow.document;
  var v792 = "</head>\n" + '<body class="main">\n';
  var v691 = v792 + '<div class="title">';
  var v513 = v691 + title$$6;
  var v152 = v513 + " results</div>\n";
  JAM.call(v151.write, v151, [v152], JAM.policy.p23);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p13);
  var v153 = outputWindow.document;
  var v793 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v692 = v793 + "<head>\n";
  var v514 = v692 + "<title>Sequence Manipulation Suite</title>\n";
  var v154 = v514 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v153.write, v153, [v154], JAM.policy.p23);
  if(isBackground) {
    var v155 = outputWindow.document;
    var v1161 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1139 = v1161 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1117 = v1139 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1095 = v1117 + "div.info {font-weight: bold}\n";
    var v1070 = v1095 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1043 = v1070 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1016 = v1043 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v987 = v1016 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v951 = v987 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v914 = v951 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v860 = v914 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v794 = v860 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v693 = v794 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v515 = v693 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v156 = v515 + "</style>\n";
    JAM.call(v155.write, v155, [v156], JAM.policy.p23)
  }else {
    var v157 = outputWindow.document;
    var v1201 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1182 = v1201 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1162 = v1182 + "div.title {display: none}\n";
    var v1140 = v1162 + "div.info {font-weight: bold}\n";
    var v1118 = v1140 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1096 = v1118 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1071 = v1096 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1044 = v1071 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1017 = v1044 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v988 = v1017 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v952 = v988 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v915 = v952 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v861 = v915 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v795 = v861 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v694 = v795 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v516 = v694 + "img {display: none}\n";
    var v158 = v516 + "</style>\n";
    JAM.call(v157.write, v157, [v158], JAM.policy.p23)
  }
  var v159 = outputWindow.document;
  var v796 = "</head>\n" + '<body class="main">\n';
  var v695 = v796 + '<div class="title">';
  var v517 = v695 + title$$8;
  var v160 = v517 + " results</div>\n";
  JAM.call(v159.write, v159, [v160], JAM.policy.p23);
  outputWindow.status = "Please Wait.";
  return true
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p13)
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p13)
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p13)
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p13)
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p13)
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p13)
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p13)
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p13)
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p13)
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  var v518 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p13);
  var v161 = v518 != -1;
  if(v161) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p13);
    tempDnaArray = JAM.call(tempDnaArray.reverse, tempDnaArray, [], JAM.policy.p13);
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p14)
  }
  return dnaSequence$$1
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = JAM.call(theNumber.toString, theNumber, [], JAM.policy.p13);
  j$$5 = theNumber.length;
  var v162 = j$$5 < lengthOfColumn;
  for(;v162;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v162 = j$$5 < lengthOfColumn
  }
  var v163 = tempString + theNumber;
  theNumber = v163 + " ";
  var v164 = sequenceToAppend + theNumber;
  sequenceToAppend = v164 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p23);
  var v519 = testArray[0];
  var v165 = v519 != testString;
  if(v165) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v520 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p23);
  var v166 = v520 == -1;
  if(v166) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    if(JAM.isEval(eval)) {
      re$$2 = eval("introspect(JAM.policy.pFull) { " + "Exception handling not supported. Check browser compatibility page." + " }")
    }else {
      re$$2 = JAM.call(eval, null, ["Exception handling not supported. Check browser compatibility page."])
    }
  }catch(e$$4) {
    caughtException = true
  }
  var v167 = !caughtException;
  if(v167) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p13);
  var v168 = testString != "1X2X3X";
  if(v168) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v521 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p13);
  var v169 = v521 != 2489.824;
  if(v169) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v522 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p13);
  var v170 = v522 != 2489.8;
  if(v170) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v523 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p13);
  var v171 = v523 == -1;
  if(v171) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v696 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p13);
  var v524 = v696 == -1;
  var v698 = !v524;
  if(v698) {
    var v797 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p13);
    var v697 = v797 == -1;
    var v799 = !v697;
    if(v799) {
      var v862 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p13);
      var v798 = v862 == -1;
      var v864 = !v798;
      if(v864) {
        var v863 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p13);
        v798 = v863 == -1
      }
      v697 = v798
    }
    v524 = v697
  }
  var v172 = v524;
  if(v172) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v525 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p13);
  var v173 = v525 == -1;
  if(v173) {
    alert("Please enter a number.");
    return false
  }
  var v175 = theNumber$$2 > maxInput$$2;
  if(v175) {
    var v526 = "Please enter a number less than or equal to " + maxInput$$2;
    var v174 = v526 + ".";
    alert(v174);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v527 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p13);
  var v176 = v527 != -1;
  if(v176) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v528 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p13);
  var v177 = v528 != -1;
  if(v177) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v699 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p13);
  var v529 = v699 == -1;
  var v701 = !v529;
  if(v701) {
    var v800 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p13);
    var v700 = v800 == -1;
    var v802 = !v700;
    if(v802) {
      var v865 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p13);
      var v801 = v865 == -1;
      var v867 = !v801;
      if(v867) {
        var v866 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p13);
        v801 = v866 == -1
      }
      v700 = v801
    }
    v529 = v700
  }
  var v178 = v529;
  if(v178) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v702 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p13);
  var v530 = v702 == -1;
  var v704 = !v530;
  if(v704) {
    var v803 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p13);
    var v703 = v803 == -1;
    var v805 = !v703;
    if(v805) {
      var v868 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p13);
      var v804 = v868 == -1;
      var v870 = !v804;
      if(v870) {
        var v869 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p13);
        v804 = v869 == -1
      }
      v703 = v804
    }
    v530 = v703
  }
  var v179 = v530;
  if(v179) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v531 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p13);
  var v180 = v531 == -1;
  if(v180) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v705 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p13);
  var v532 = v705 == -1;
  var v707 = !v532;
  if(v707) {
    var v806 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p13);
    var v706 = v806 == -1;
    var v808 = !v706;
    if(v808) {
      var v871 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p13);
      var v807 = v871 == -1;
      var v873 = !v807;
      if(v873) {
        var v872 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p13);
        v807 = v872 == -1
      }
      v706 = v807
    }
    v532 = v706
  }
  var v181 = v532;
  if(v181) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v533 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p13);
  var v182 = v533 == -1;
  if(v182) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function writeGroupNum(text$$10, tabIn$$1, groupSize, basePerLine, startBase, stopBase) {
  var i$$5 = parseInt(startBase);
  var k = 0;
  var lineOfText = "";
  var sepChar = " ";
  groupSize = parseInt(groupSize);
  basePerLine = parseInt(basePerLine);
  var v190 = i$$5 < stopBase;
  for(;v190;) {
    var v183 = i$$5 + 1;
    lineOfText = rightNum(v183, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v534 = basePerLine / groupSize;
    var v187 = j$$6 <= v534;
    for(;v187;) {
      var v186 = k < groupSize;
      for(;v186;) {
        var v184 = lineOfText;
        var v535 = k + i$$5;
        var v185 = JAM.call(text$$10.charAt, text$$10, [v535], JAM.policy.p23);
        lineOfText = v184 + v185;
        k = k + 1;
        v186 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v536 = basePerLine / groupSize;
      v187 = j$$6 <= v536
    }
    var v188 = outputWindow.document;
    var v189 = lineOfText + "\n";
    JAM.call(v188.write, v188, [v189], JAM.policy.p23);
    lineOfText = "";
    v190 = i$$5 < stopBase
  }
  return true
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0);
  return true
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v537 = adjustment < 0;
    if(v537) {
      v537 = adjusted >= 0
    }
    var v191 = v537;
    if(v191) {
      adjusted = adjusted + 1
    }
    return adjusted
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
  var v224 = i$$6 < stopBase$$2;
  for(;v224;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v538 = basePerLine$$2 / groupSize$$2;
    var v200 = j$$7 <= v538;
    for(;v200;) {
      var v195 = k$$1 < groupSize$$2;
      for(;v195;) {
        var v539 = i$$6 + k$$1;
        var v192 = v539 >= stopBase$$2;
        if(v192) {
          break
        }
        var v193 = lineOfText$$1;
        var v540 = k$$1 + i$$6;
        var v194 = JAM.call(text$$12.charAt, text$$12, [v540], JAM.policy.p23);
        lineOfText$$1 = v193 + v194;
        k$$1 = k$$1 + 1;
        v195 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v198 = numberPosition$$1 == "above";
      if(v198) {
        var v196 = aboveNum;
        var v541 = adjustNumbering(i$$6, numberingAdjustment);
        var v197 = rightNum(v541, "", groupSize$$2, tabIn$$3);
        aboveNum = v196 + v197
      }
      var v199 = i$$6 >= stopBase$$2;
      if(v199) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v542 = basePerLine$$2 / groupSize$$2;
      v200 = j$$7 <= v542
    }
    var v223 = numberPosition$$1 == "left";
    if(v223) {
      var v201 = outputWindow.document;
      var v809 = adjustNumbering(lineNum, numberingAdjustment);
      var v708 = rightNum(v809, "", 8, tabIn$$3);
      var v543 = v708 + lineOfText$$1;
      var v202 = v543 + "\n";
      JAM.call(v201.write, v201, [v202], JAM.policy.p23);
      var v206 = strands$$1 == "two";
      if(v206) {
        var v203 = outputWindow.document;
        var v810 = adjustNumbering(lineNum, numberingAdjustment);
        var v709 = rightNum(v810, "", 8, tabIn$$3);
        var v710 = complement(lineOfText$$1);
        var v544 = v709 + v710;
        var v204 = v544 + "\n";
        JAM.call(v203.write, v203, [v204], JAM.policy.p23);
        var v205 = outputWindow.document;
        JAM.call(v205.write, v205, ["\n"], JAM.policy.p14)
      }
    }else {
      var v222 = numberPosition$$1 == "right";
      if(v222) {
        var v207 = outputWindow.document;
        var v711 = lineOfText$$1;
        var v712 = adjustNumbering(i$$6, numberingAdjustment);
        var v545 = v711 + v712;
        var v208 = v545 + "\n";
        JAM.call(v207.write, v207, [v208], JAM.policy.p23);
        var v212 = strands$$1 == "two";
        if(v212) {
          var v209 = outputWindow.document;
          var v713 = complement(lineOfText$$1);
          var v714 = adjustNumbering(i$$6, numberingAdjustment);
          var v546 = v713 + v714;
          var v210 = v546 + "\n";
          JAM.call(v209.write, v209, [v210], JAM.policy.p23);
          var v211 = outputWindow.document;
          JAM.call(v211.write, v211, ["\n"], JAM.policy.p14)
        }
      }else {
        var v221 = numberPosition$$1 == "above";
        if(v221) {
          var v213 = outputWindow.document;
          var v214 = aboveNum + "\n";
          JAM.call(v213.write, v213, [v214], JAM.policy.p23);
          var v215 = outputWindow.document;
          var v216 = lineOfText$$1 + "\n";
          JAM.call(v215.write, v215, [v216], JAM.policy.p23);
          var v220 = strands$$1 == "two";
          if(v220) {
            var v217 = outputWindow.document;
            var v547 = complement(lineOfText$$1);
            var v218 = v547 + "\n";
            JAM.call(v217.write, v217, [v218], JAM.policy.p23);
            var v219 = outputWindow.document;
            JAM.call(v219.write, v219, ["\n"], JAM.policy.p14)
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v224 = i$$6 < stopBase$$2
  }
  return true
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
  var v245 = i$$7 < stopBase$$3;
  for(;v245;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v548 = basePerLine$$3 / groupSize$$3;
    var v233 = j$$8 <= v548;
    for(;v233;) {
      var v228 = k$$2 < groupSize$$3;
      for(;v228;) {
        var v549 = i$$7 + k$$2;
        var v225 = v549 >= stopBase$$3;
        if(v225) {
          break
        }
        var v226 = lineOfText$$2;
        var v550 = k$$2 + i$$7;
        var v227 = JAM.call(text$$13.charAt, text$$13, [v550], JAM.policy.p23);
        lineOfText$$2 = v226 + v227;
        k$$2 = k$$2 + 1;
        v228 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v231 = numberPosition$$2 == "above";
      if(v231) {
        var v229 = aboveNum$$1;
        var v230 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v229 + v230
      }
      var v232 = i$$7 >= stopBase$$3;
      if(v232) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v551 = basePerLine$$3 / groupSize$$3;
      v233 = j$$8 <= v551
    }
    var v244 = numberPosition$$2 == "left";
    if(v244) {
      var v234 = outputWindow.document;
      var v715 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v552 = v715 + lineOfText$$2;
      var v235 = v552 + "\n";
      JAM.call(v234.write, v234, [v235], JAM.policy.p23)
    }else {
      var v243 = numberPosition$$2 == "right";
      if(v243) {
        var v236 = outputWindow.document;
        var v553 = lineOfText$$2 + i$$7;
        var v237 = v553 + "\n";
        JAM.call(v236.write, v236, [v237], JAM.policy.p23)
      }else {
        var v242 = numberPosition$$2 == "above";
        if(v242) {
          var v238 = outputWindow.document;
          var v239 = aboveNum$$1 + "\n";
          JAM.call(v238.write, v238, [v239], JAM.policy.p23);
          var v240 = outputWindow.document;
          var v241 = lineOfText$$2 + "\n";
          JAM.call(v240.write, v240, [v241], JAM.policy.p23)
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v245 = i$$7 < stopBase$$3
  }
  return true
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
  var v716 = sequence$$13.length;
  var v554 = v716 <= firstIndexToMutate;
  var v718 = !v554;
  if(v718) {
    var v717 = lastIndexToMutate < 0;
    var v811 = !v717;
    if(v811) {
      v717 = lastIndexToMutate <= firstIndexToMutate
    }
    v554 = v717
  }
  var v246 = v554;
  if(v246) {
    numMut = 0
  }
  var i$$8 = 0;
  var v254 = i$$8 < numMut;
  for(;v254;) {
    maxNum = sequence$$13.length;
    var v555 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v247 = v555 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v247], JAM.policy.p13);
    var v556 = randNum < firstIndexToMutate;
    var v719 = !v556;
    if(v719) {
      v556 = randNum > lastIndexToMutate
    }
    var v248 = v556;
    if(v248) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v254 = i$$8 < numMut;
      continue
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p13);
    needNewChar = true;
    for(;needNewChar;) {
      var v557 = JAM.call(Math.random, Math, [], JAM.policy.p13);
      var v558 = components$$1.length;
      var v249 = v557 * v558;
      componentsIndex = JAM.call(Math.round, Math, [v249], JAM.policy.p13);
      var v559 = components$$1.length;
      var v250 = componentsIndex == v559;
      if(v250) {
        componentsIndex = 0
      }
      var v560 = components$$1[componentsIndex];
      var v251 = v560 != currentChar;
      if(v251) {
        needNewChar = false
      }
    }
    var v561 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v562 = components$$1[componentsIndex];
    var v252 = v561 + v562;
    var v563 = randNum + 1;
    var v564 = sequence$$13.length;
    var v253 = JAM.call(sequence$$13.substring, sequence$$13, [v563, v564], JAM.policy.p24);
    sequence$$13 = v252 + v253;
    i$$8 = i$$8 + 1;
    v254 = i$$8 < numMut
  }
  var v255 = outputWindow.document;
  var v256 = addReturns(sequence$$13);
  JAM.call(v255.write, v255, [v256], JAM.policy.p23);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v261 = j$$9 < lengthOut$$1;
  for(;v261;) {
    var v565 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v566 = components$$2.length;
    var v257 = v565 * v566;
    tempNum$$1 = JAM.call(Math.floor, Math, [v257], JAM.policy.p13);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v567 = sequence$$14.length;
    var v260 = v567 == 60;
    if(v260) {
      var v258 = outputWindow.document;
      var v259 = sequence$$14 + "\n";
      JAM.call(v258.write, v258, [v259], JAM.policy.p23);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v261 = j$$9 < lengthOut$$1
  }
  var v262 = outputWindow.document;
  var v263 = sequence$$14 + "\n";
  JAM.call(v262.write, v262, [v263], JAM.policy.p23);
  return true
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
  var v267 = dnaConformation == "circular";
  if(v267) {
    var v264 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v264.length;
    var v812 = sequence$$15.length;
    var v720 = v812 - lookAhead;
    var v721 = sequence$$15.length;
    var v568 = JAM.call(sequence$$15.substring, sequence$$15, [v720, v721], JAM.policy.p24);
    var v265 = v568 + sequence$$15;
    var v266 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v265 + v266;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v268 = outputWindow.document;
  JAM.call(v268.write, v268, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p14);
  var v269 = outputWindow.document;
  var v813 = '<tr><td class="title" width="200px">' + "Site:";
  var v722 = v813 + '</td><td class="title">';
  var v569 = v722 + "Positions:";
  var v270 = v569 + "</td></tr>\n";
  JAM.call(v269.write, v269, [v270], JAM.policy.p23);
  var i$$9 = 0;
  var v570 = arrayOfItems.length;
  var v286 = i$$9 < v570;
  for(;v286;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v571 = arrayOfItems[i$$9];
    var v271 = JAM.call(v571.match, v571, [/\/.+\//], JAM.policy.p13);
    matchExp = v271 + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    var v814 = arrayOfItems[i$$9];
    var v723 = JAM.call(v814.match, v814, [/\)\D*\d+/], JAM.policy.p13);
    var v572 = JAM.call(v723.toString, v723, [], JAM.policy.p13);
    var v272 = JAM.call(v572.replace, v572, [/\)\D*/, ""], JAM.policy.p13);
    cutDistance = parseFloat(v272);
    var v278 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p23);
    for(;v278;) {
      var v273 = matchExp.lastIndex;
      matchPosition = v273 - cutDistance;
      var v573 = matchPosition >= lowerLimit;
      if(v573) {
        v573 = matchPosition < upperLimit
      }
      var v276 = v573;
      if(v276) {
        timesFound = timesFound + 1;
        var v274 = tempString$$1 + ", ";
        var v574 = matchPosition - shiftValue;
        var v275 = v574 + 1;
        tempString$$1 = v274 + v275
      }
      var v575 = matchExp.lastIndex;
      var v724 = RegExp.lastMatch;
      var v576 = v724.length;
      var v277 = v575 - v576;
      matchExp.lastIndex = v277 + 1;
      v278 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p23)
    }
    var v577 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p13);
    var v279 = v577 != -1;
    if(v279) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p13)
    }
    var v283 = timesFound == 0;
    if(v283) {
      backGroundClass = "none"
    }else {
      var v282 = timesFound == 1;
      if(v282) {
        backGroundClass = "one"
      }else {
        var v281 = timesFound == 2;
        if(v281) {
          backGroundClass = "two"
        }else {
          var v280 = timesFound == 3;
          if(v280) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v284 = outputWindow.document;
    var v989 = '<tr><td class="' + backGroundClass;
    var v953 = v989 + '">';
    var v1045 = arrayOfItems[i$$9];
    var v1018 = JAM.call(v1045.match, v1045, [/\([^\(]+\)/], JAM.policy.p13);
    var v990 = JAM.call(v1018.toString, v1018, [], JAM.policy.p13);
    var v954 = JAM.call(v990.replace, v990, [/\(|\)/g, ""], JAM.policy.p13);
    var v916 = v953 + v954;
    var v874 = v916 + '</td><td class="';
    var v815 = v874 + backGroundClass;
    var v725 = v815 + '">';
    var v578 = v725 + tempString$$1;
    var v285 = v578 + "</td></tr>\n";
    JAM.call(v284.write, v284, [v285], JAM.policy.p23);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v579 = arrayOfItems.length;
    v286 = i$$9 < v579
  }
  var v287 = outputWindow.document;
  JAM.call(v287.write, v287, ["</tbody></table>\n"], JAM.policy.p14);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v288 = outputWindow.document;
  JAM.call(v288.write, v288, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p14);
  var v289 = outputWindow.document;
  var v917 = '<tr><td class="title">' + "Pattern:";
  var v875 = v917 + '</td><td class="title">';
  var v816 = v875 + "Times found:";
  var v726 = v816 + '</td><td class="title">';
  var v580 = v726 + "Percentage:";
  var v290 = v580 + "</td></tr>\n";
  JAM.call(v289.write, v289, [v290], JAM.policy.p23);
  var i$$10 = 0;
  var v581 = arrayOfItems$$1.length;
  var v299 = i$$10 < v581;
  for(;v299;) {
    var tempNumber = 0;
    var v582 = arrayOfItems$$1[i$$10];
    var v291 = JAM.call(v582.match, v582, [/\/[^\/]+\//], JAM.policy.p13);
    var matchExp$$1 = v291 + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    var v583 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p23);
    var v293 = v583 != -1;
    if(v293) {
      var v292 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p23);
      tempNumber = v292.length
    }
    var percentage = 0;
    var v727 = originalLength + 1;
    var v876 = arrayOfItems$$1[i$$10];
    var v817 = JAM.call(v876.match, v876, [/\d+/], JAM.policy.p13);
    var v728 = parseFloat(v817);
    var v584 = v727 - v728;
    var v296 = v584 > 0;
    if(v296) {
      var v294 = 100 * tempNumber;
      var v585 = originalLength + 1;
      var v818 = arrayOfItems$$1[i$$10];
      var v729 = JAM.call(v818.match, v818, [/\d+/], JAM.policy.p13);
      var v586 = parseFloat(v729);
      var v295 = v585 - v586;
      percentage = v294 / v295
    }
    var v297 = outputWindow.document;
    var v1046 = arrayOfItems$$1[i$$10];
    var v1019 = JAM.call(v1046.match, v1046, [/\([^\(]+\)\b/], JAM.policy.p13);
    var v991 = JAM.call(v1019.toString, v1019, [], JAM.policy.p13);
    var v955 = JAM.call(v991.replace, v991, [/\(|\)/g, ""], JAM.policy.p13);
    var v918 = "<tr><td>" + v955;
    var v877 = v918 + "</td><td>";
    var v819 = v877 + tempNumber;
    var v730 = v819 + "</td><td>";
    var v731 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p13);
    var v587 = v730 + v731;
    var v298 = v587 + "</td></tr>\n";
    JAM.call(v297.write, v297, [v298], JAM.policy.p23);
    i$$10 = i$$10 + 1;
    var v588 = arrayOfItems$$1.length;
    v299 = i$$10 < v588
  }
  var v300 = outputWindow.document;
  JAM.call(v300.write, v300, ["</tbody></table>\n"], JAM.policy.p14);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v589 = sequence$$17.length;
  var v307 = v589 > 0;
  for(;v307;) {
    maxNum$$1 = sequence$$17.length;
    var v590 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v301 = v590 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v301], JAM.policy.p13);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p13);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v302 = randNum$$1 + 1;
    var v303 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v302, v303], JAM.policy.p13);
    sequence$$17 = tempString1 + tempString2;
    var v591 = tempSeq.length;
    var v306 = v591 == 60;
    if(v306) {
      var v304 = outputWindow.document;
      var v305 = tempSeq + "\n";
      JAM.call(v304.write, v304, [v305], JAM.policy.p23);
      tempSeq = ""
    }
    var v592 = sequence$$17.length;
    v307 = v592 > 0
  }
  var v308 = outputWindow.document;
  var v309 = tempSeq + "\n";
  JAM.call(v308.write, v308, [v309], JAM.policy.p23);
  return true
}
function getRestrictionSiteString(type$$25) {
  var v593 = JAM.call(type$$25.toLowerCase, type$$25, [], JAM.policy.p13);
  var v311 = v593 == "standard";
  if(v311) {
    var v1347 = "/aggcct/ (AatI agg|cct)3," + "/gacgtc/ (AatII gacgt|c)1,";
    var v1346 = v1347 + "/tgcgca/ (Acc16I tgc|gca)3,";
    var v1345 = v1346 + "/cgcg/ (AccII cg|cg)2,";
    var v1344 = v1345 + "/tccgga/ (AccIII t|ccgga)5,";
    var v1343 = v1344 + "/aacgtt/ (AclI aa|cgtt)4,";
    var v1342 = v1343 + "/cacgtg/ (AcvI cac|gtg)3,";
    var v1341 = v1342 + "/gtac/ (AfaI gt|ac)2,";
    var v1340 = v1341 + "/agcgct/ (AfeI agc|gct)3,";
    var v1339 = v1340 + "/cttaag/ (AflII c|ttaag)5,";
    var v1338 = v1339 + "/accggt/ (AgeI a|ccggt)5,";
    var v1337 = v1338 + "/actagt/ (AhlI a|ctagt)5,";
    var v1336 = v1337 + "/gtgcac/ (Alw441 g|tgcac)5,";
    var v1335 = v1336 + "/agct/ (AluI ag|ct)2,";
    var v1334 = v1335 + "/agcgct/ (Aor51HI agc|gct)3,";
    var v1333 = v1334 + "/gggccc/ (ApaI gggcc|c)1,";
    var v1332 = v1333 + "/gtgcac/ (ApaLI g|tgcac)5,";
    var v1331 = v1332 + "/ggcgcgcc/ (AscI gg|cgcgcc)6,";
    var v1330 = v1331 + "/attaat/ (AseI at|taat)4,";
    var v1329 = v1330 + "/ggtacc/ (Asp718I g|gtacc)5,";
    var v1328 = v1329 + "/ttcgaa/ (AsuII tt|cgaa)4,";
    var v1327 = v1328 + "/c[cty]cg[agr]g/ (AvaI c|ycgrg)5,";
    var v1326 = v1327 + "/tgcgca/ (AviII tgc|gca)3,";
    var v1325 = v1326 + "/cctagg/ (AvrII c|ctagg)5,";
    var v1324 = v1325 + "/tggcca/ (BalI tgg|cca)3,";
    var v1323 = v1324 + "/ggatcc/ (BamHI g|gatcc)5,";
    var v1322 = v1323 + "/atcgat/ (BanIII at|cgat)4,";
    var v1321 = v1322 + "/ggcgcc/ (BbeI ggcgc|c)1,";
    var v1320 = v1321 + "/cacgtg/ (BbrPI cac|gtg)3,";
    var v1319 = v1320 + "/gcatgc/ (BbuI gcatg|c)1,";
    var v1318 = v1319 + "/actagt/ (BcuI a|ctagt)5,";
    var v1317 = v1318 + "/tgatca/ (BclI t|gatca)5,";
    var v1316 = v1317 + "/ctag/ (BfaI c|tag)3,";
    var v1315 = v1316 + "/cttaag/ (BfrI c|ttaag)5,";
    var v1314 = v1315 + "/atgcat/ (BfrBI atg|cat)3,";
    var v1313 = v1314 + "/agatct/ (BglII a|gatct)5,";
    var v1312 = v1313 + "/cctagg/ (BlnI c|ctagg)5,";
    var v1311 = v1312 + "/atcgat/ (BseCI at|cgat)4,";
    var v1310 = v1311 + "/gcgcgc/ (BsePI g|cgcgc)5,";
    var v1309 = v1310 + "/cggccg/ (BseX3I c|ggccg)5,";
    var v1308 = v1309 + "/accggt/ (BshTI a|ccggt)5,";
    var v1307 = v1308 + "/tgtaca/ (Bsp1407I t|gtaca)5,";
    var v1306 = v1307 + "/ccatgg/ (Bsp19I c|catgg)5,";
    var v1305 = v1306 + "/atcgat/ (BspDI at|cgat)4,";
    var v1304 = v1305 + "/tccgga/ (BspEI t|ccgga)5,";
    var v1303 = v1304 + "/tgtaca/ (BsrGI t|gtaca)5,";
    var v1302 = v1303 + "/gcgcgc/ (BssHII g|cgcgc)5,";
    var v1301 = v1302 + "/cgcg/ (BstUI cg|cg)2,";
    var v1300 = v1301 + "/atcgat/ (ClaI at|cgat)4,";
    var v1299 = v1300 + "/gatc/ (DpnII |gatc)4,";
    var v1298 = v1299 + "/tttaaa/ (DraI ttt|aaa)3,";
    var v1297 = v1298 + "/cggccg/ (EagI c|ggccg)5,";
    var v1296 = v1297 + "/gaattc/ (EcoRI g|aattc)5,";
    var v1295 = v1296 + "/gatatc/ (EcoRV gat|atc)3,";
    var v1294 = v1295 + "/ggcgcc/ (EgeI ggc|gcc)3,";
    var v1293 = v1294 + "/ggccggcc/ (FseI ggccgg|cc)2,";
    var v1292 = v1293 + "/tgcgca/ (FspI tgc|gca)3,";
    var v1291 = v1292 + "/ggcc/ (HaeIII gg|cc)2,";
    var v1290 = v1291 + "/gt[cty][agr]ac/ (HincII gty|rac)3,";
    var v1289 = v1290 + "/aagctt/ (HindIII a|agctt)5,";
    var v1288 = v1289 + "/ga[acgturyswkmbdhvn]tc/ (HinfI g|antc)4,";
    var v1287 = v1288 + "/gttaac/ (HpaI gtt|aac)3,";
    var v1286 = v1287 + "/ccgg/ (HpaII c|cgg)3,";
    var v1285 = v1286 + "/ggcgcc/ (KasI g|gcgcc)5,";
    var v1284 = v1285 + "/ggtacc/ (KpnI ggtac|c)1,";
    var v1283 = v1284 + "/[acgturyswkmbdhvn]gatc[acgturyswkmbdhvn]/ (MboI |gatc)5,";
    var v1282 = v1283 + "/caattg/ (MfeI c|aattg)5,";
    var v1281 = v1282 + "/acgcgt/ (MluI a|cgcgt)5,";
    var v1280 = v1281 + "/tggcca/ (MscI tgg|cca)3,";
    var v1279 = v1280 + "/ttaa/ (MseI t|taa)3,";
    var v1278 = v1279 + "/ccgg/ (MspI c|cgg)3,";
    var v1277 = v1278 + "/gccggc/ (NaeI gcc|ggc)3,";
    var v1276 = v1277 + "/ggcgcc/ (NarI gg|cgcc)4,";
    var v1275 = v1276 + "/ccatgg/ (NcoI c|catgg)5,";
    var v1274 = v1275 + "/catatg/ (NdeI ca|tatg)4,";
    var v1273 = v1274 + "/gatc/ (NdeII |gatc)4,";
    var v1272 = v1273 + "/gccggc/ (NgoMIV g|ccggc)5,";
    var v1271 = v1272 + "/gctagc/ (NheI g|ctagc)5,";
    var v1270 = v1271 + "/catg/ (NlaIII catg|)0,";
    var v1269 = v1270 + "/gcggccgc/ (NotI gc|ggccgc)6,";
    var v1268 = v1269 + "/tcgcga/ (NruI tcg|cga)3,";
    var v1267 = v1268 + "/atgcat/ (NsiI atgca|t)1,";
    var v1266 = v1267 + "/ttaattaa/ (PacI ttaat|taa)3,";
    var v1265 = v1266 + "/acatgt/ (PciI a|catgt)5,";
    var v1264 = v1265 + "/ggcc/ (PhoI gg|cc)2,";
    var v1263 = v1264 + "/gtttaaac/ (PmeI gttt|aaac)4,";
    var v1262 = v1263 + "/cacgtg/ (PmlI cac|gtg)3,";
    var v1261 = v1262 + "/ttataa/ (PsiI tta|taa)3,";
    var v1260 = v1261 + "/ctgcag/ (PstI ctgca|g)1,";
    var v1259 = v1260 + "/cgatcg/ (PvuI cgat|cg)2,";
    var v1258 = v1259 + "/cagctg/ (PvuII cag|ctg)3,";
    var v1257 = v1258 + "/gtac/ (RsaI gt|ac)2,";
    var v1256 = v1257 + "/gagctc/ (SacI gagct|c)1,";
    var v1238 = v1256 + "/ccgcgg/ (SacII ccgc|gg)2,";
    var v1220 = v1238 + "/gtcgac/ (SalI g|tcgac)5,";
    var v1202 = v1220 + "/cctgcagg/ (SbfI cctgca|gg)2,";
    var v1183 = v1202 + "/agtact/ (ScaI agt|act)3,";
    var v1163 = v1183 + "/ggcgcc/ (SfoI ggc|gcc)3,";
    var v1141 = v1163 + "/cccggg/ (SmaI ccc|ggg)3,";
    var v1119 = v1141 + "/tacgta/ (SnaBI tac|gta)3,";
    var v1097 = v1119 + "/actagt/ (SpeI a|ctagt)5,";
    var v1072 = v1097 + "/gcatgc/ (SphI gcatg|c)1,";
    var v1047 = v1072 + "/aatatt/ (SspI aat|att)3,";
    var v1020 = v1047 + "/gagctc/ (SstI gagct|c)1,";
    var v992 = v1020 + "/ccgcgg/ (SstII ccgc|gg)2,";
    var v956 = v992 + "/aggcct/ (StuI agg|cct)3,";
    var v919 = v956 + "/atttaaat/ (SwaI attt|aaat)4,";
    var v878 = v919 + "/tcga/ (TaqI t|cga)3,";
    var v820 = v878 + "/ctcgag/ (TliI c|tcgag)5,";
    var v732 = v820 + "/attaat/ (VspI at|taat)4,";
    var v594 = v732 + "/tctaga/ (XbaI t|ctaga)5,";
    var v310 = v594 + "/ctcgag/ (XhoI c|tcgag)5,";
    return v310 + "/cccggg/ (XmaI c|ccggg)5"
  }
  return true
}
function getGeneticCodeString(type$$26) {
  var v733 = JAM.call(type$$26.toLowerCase, type$$26, [], JAM.policy.p13);
  var v595 = v733 == "standard";
  var v735 = !v595;
  if(v735) {
    var v734 = JAM.call(type$$26.toLowerCase, type$$26, [], JAM.policy.p13);
    v595 = v734 == "transl_table=1"
  }
  var v313 = v595;
  if(v313) {
    var v1239 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1221 = v1239 + "/ga[tcuy]/=D,";
    var v1203 = v1221 + "/ga[agr]/=E,";
    var v1184 = v1203 + "/[tu][tu][tcuy]/=F,";
    var v1164 = v1184 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1142 = v1164 + "/ca[tcuy]/=H,";
    var v1120 = v1142 + "/a[tu][atcuwmhy]/=I,";
    var v1098 = v1120 + "/aa[agr]/=K,";
    var v1073 = v1098 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1048 = v1073 + "/a[tu]g/=M,";
    var v1021 = v1048 + "/aa[tucy]/=N,";
    var v993 = v1021 + "/cc[acgturyswkmbdhvn]/=P,";
    var v957 = v993 + "/ca[agr]/=Q,";
    var v920 = v957 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v879 = v920 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v821 = v879 + "/ac[acgturyswkmbdhvn]/=T,";
    var v736 = v821 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v596 = v736 + "/[tu]gg/=W,";
    var v312 = v596 + "/[tu]a[ctuy]/=Y,";
    return v312 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v597 = JAM.call(type$$26.toLowerCase, type$$26, [], JAM.policy.p13);
  var v315 = v597 == "transl_table=2";
  if(v315) {
    var v1240 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1222 = v1240 + "/ga[tcuy]/=D,";
    var v1204 = v1222 + "/ga[agr]/=E,";
    var v1185 = v1204 + "/[tu][tu][tcuy]/=F,";
    var v1165 = v1185 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1143 = v1165 + "/ca[tcuy]/=H,";
    var v1121 = v1143 + "/a[tu][tcuy]/=I,";
    var v1099 = v1121 + "/aa[agr]/=K,";
    var v1074 = v1099 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1049 = v1074 + "/a[tu][agr]/=M,";
    var v1022 = v1049 + "/aa[tucy]/=N,";
    var v994 = v1022 + "/cc[acgturyswkmbdhvn]/=P,";
    var v958 = v994 + "/ca[agr]/=Q,";
    var v921 = v958 + "/cg[acgturyswkmbdhvn]/=R,";
    var v880 = v921 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v822 = v880 + "/ac[acgturyswkmbdhvn]/=T,";
    var v737 = v822 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v598 = v737 + "/[tu]g[agr]/=W,";
    var v314 = v598 + "/[tu]a[ctuy]/=Y,";
    return v314 + "/[tu]a[agr]|ag[agr]/=*"
  }
  var v599 = JAM.call(type$$26.toLowerCase, type$$26, [], JAM.policy.p13);
  var v317 = v599 == "transl_table=3";
  if(v317) {
    var v1241 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1223 = v1241 + "/ga[tcuy]/=D,";
    var v1205 = v1223 + "/ga[agr]/=E,";
    var v1186 = v1205 + "/[tu][tu][tcuy]/=F,";
    var v1166 = v1186 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1144 = v1166 + "/ca[tcuy]/=H,";
    var v1122 = v1144 + "/a[tu][tcuy]/=I,";
    var v1100 = v1122 + "/aa[agr]/=K,";
    var v1075 = v1100 + "/[tu][tu][agr]/=L,";
    var v1050 = v1075 + "/a[tu][agr]/=M,";
    var v1023 = v1050 + "/aa[tucy]/=N,";
    var v995 = v1023 + "/cc[acgturyswkmbdhvn]/=P,";
    var v959 = v995 + "/ca[agr]/=Q,";
    var v922 = v959 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v881 = v922 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v823 = v881 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v738 = v823 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v600 = v738 + "/[tu]g[agr]/=W,";
    var v316 = v600 + "/[tu]a[ctuy]/=Y,";
    return v316 + "/[tu]a[agr]/=*"
  }
  var v601 = JAM.call(type$$26.toLowerCase, type$$26, [], JAM.policy.p13);
  var v319 = v601 == "transl_table=4";
  if(v319) {
    var v1242 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1224 = v1242 + "/ga[tcuy]/=D,";
    var v1206 = v1224 + "/ga[agr]/=E,";
    var v1187 = v1206 + "/[tu][tu][tcuy]/=F,";
    var v1167 = v1187 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1145 = v1167 + "/ca[tcuy]/=H,";
    var v1123 = v1145 + "/a[tu][atcuwmhy]/=I,";
    var v1101 = v1123 + "/aa[agr]/=K,";
    var v1076 = v1101 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1051 = v1076 + "/a[tu]g/=M,";
    var v1024 = v1051 + "/aa[tucy]/=N,";
    var v996 = v1024 + "/cc[acgturyswkmbdhvn]/=P,";
    var v960 = v996 + "/ca[agr]/=Q,";
    var v923 = v960 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v882 = v923 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v824 = v882 + "/ac[acgturyswkmbdhvn]/=T,";
    var v739 = v824 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v602 = v739 + "/[tu]g[agr]/=W,";
    var v318 = v602 + "/[tu]a[ctuy]/=Y,";
    return v318 + "/[tu]a[agr]/=*"
  }
  var v603 = JAM.call(type$$26.toLowerCase, type$$26, [], JAM.policy.p13);
  var v321 = v603 == "transl_table=5";
  if(v321) {
    var v1243 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1225 = v1243 + "/ga[tcuy]/=D,";
    var v1207 = v1225 + "/ga[agr]/=E,";
    var v1188 = v1207 + "/[tu][tu][tcuy]/=F,";
    var v1168 = v1188 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1146 = v1168 + "/ca[tcuy]/=H,";
    var v1124 = v1146 + "/a[tu][tcuy]/=I,";
    var v1102 = v1124 + "/aa[agr]/=K,";
    var v1077 = v1102 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1052 = v1077 + "/a[tu][agr]/=M,";
    var v1025 = v1052 + "/aa[tucy]/=N,";
    var v997 = v1025 + "/cc[acgturyswkmbdhvn]/=P,";
    var v961 = v997 + "/ca[agr]/=Q,";
    var v924 = v961 + "/cg[acgturyswkmbdhvn]/=R,";
    var v883 = v924 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v825 = v883 + "/ac[acgturyswkmbdhvn]/=T,";
    var v740 = v825 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v604 = v740 + "/[tu]g[agr]/=W,";
    var v320 = v604 + "/[tu]a[ctuy]/=Y,";
    return v320 + "/[tu]a[agr]/=*"
  }
  var v605 = JAM.call(type$$26.toLowerCase, type$$26, [], JAM.policy.p13);
  var v323 = v605 == "transl_table=6";
  if(v323) {
    var v1244 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1226 = v1244 + "/ga[tcuy]/=D,";
    var v1208 = v1226 + "/ga[agr]/=E,";
    var v1189 = v1208 + "/[tu][tu][tcuy]/=F,";
    var v1169 = v1189 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1147 = v1169 + "/ca[tcuy]/=H,";
    var v1125 = v1147 + "/a[tu][atcuwmhy]/=I,";
    var v1103 = v1125 + "/aa[agr]/=K,";
    var v1078 = v1103 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1053 = v1078 + "/a[tu]g/=M,";
    var v1026 = v1053 + "/aa[tucy]/=N,";
    var v998 = v1026 + "/cc[acgturyswkmbdhvn]/=P,";
    var v962 = v998 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v925 = v962 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v884 = v925 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v826 = v884 + "/ac[acgturyswkmbdhvn]/=T,";
    var v741 = v826 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v606 = v741 + "/[tu]gg/=W,";
    var v322 = v606 + "/[tu]a[ctuy]/=Y,";
    return v322 + "/[tu]ga/=*"
  }
  var v607 = JAM.call(type$$26.toLowerCase, type$$26, [], JAM.policy.p13);
  var v325 = v607 == "transl_table=9";
  if(v325) {
    var v1245 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1227 = v1245 + "/ga[tcuy]/=D,";
    var v1209 = v1227 + "/ga[agr]/=E,";
    var v1190 = v1209 + "/[tu][tu][tcuy]/=F,";
    var v1170 = v1190 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1148 = v1170 + "/ca[tcuy]/=H,";
    var v1126 = v1148 + "/a[tu][atcuwmhy]/=I,";
    var v1104 = v1126 + "/aag/=K,";
    var v1079 = v1104 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1054 = v1079 + "/a[tu]g/=M,";
    var v1027 = v1054 + "/aa[atcuwmhy]/=N,";
    var v999 = v1027 + "/cc[acgturyswkmbdhvn]/=P,";
    var v963 = v999 + "/ca[agr]/=Q,";
    var v926 = v963 + "/cg[acgturyswkmbdhvn]/=R,";
    var v885 = v926 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v827 = v885 + "/ac[acgturyswkmbdhvn]/=T,";
    var v742 = v827 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v608 = v742 + "/[tu]g[agr]/=W,";
    var v324 = v608 + "/[tu]a[ctuy]/=Y,";
    return v324 + "/[tu]a[agr]/=*"
  }
  var v609 = JAM.call(type$$26.toLowerCase, type$$26, [], JAM.policy.p13);
  var v327 = v609 == "transl_table=10";
  if(v327) {
    var v1246 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1228 = v1246 + "/ga[tcuy]/=D,";
    var v1210 = v1228 + "/ga[agr]/=E,";
    var v1191 = v1210 + "/[tu][tu][tcuy]/=F,";
    var v1171 = v1191 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1149 = v1171 + "/ca[tcuy]/=H,";
    var v1127 = v1149 + "/a[tu][atcuwmhy]/=I,";
    var v1105 = v1127 + "/aa[agr]/=K,";
    var v1080 = v1105 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1055 = v1080 + "/a[tu]g/=M,";
    var v1028 = v1055 + "/aa[tucy]/=N,";
    var v1000 = v1028 + "/cc[acgturyswkmbdhvn]/=P,";
    var v964 = v1000 + "/ca[agr]/=Q,";
    var v927 = v964 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v886 = v927 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v828 = v886 + "/ac[acgturyswkmbdhvn]/=T,";
    var v743 = v828 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v610 = v743 + "/[tu]gg/=W,";
    var v326 = v610 + "/[tu]a[ctuy]/=Y,";
    return v326 + "/[tu]a[agr]/=*"
  }
  var v611 = JAM.call(type$$26.toLowerCase, type$$26, [], JAM.policy.p13);
  var v329 = v611 == "transl_table=11";
  if(v329) {
    var v1247 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1229 = v1247 + "/ga[tcuy]/=D,";
    var v1211 = v1229 + "/ga[agr]/=E,";
    var v1192 = v1211 + "/[tu][tu][tcuy]/=F,";
    var v1172 = v1192 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1150 = v1172 + "/ca[tcuy]/=H,";
    var v1128 = v1150 + "/a[tu][atcuwmhy]/=I,";
    var v1106 = v1128 + "/aa[agr]/=K,";
    var v1081 = v1106 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1056 = v1081 + "/a[tu]g/=M,";
    var v1029 = v1056 + "/aa[tucy]/=N,";
    var v1001 = v1029 + "/cc[acgturyswkmbdhvn]/=P,";
    var v965 = v1001 + "/ca[agr]/=Q,";
    var v928 = v965 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v887 = v928 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v829 = v887 + "/ac[acgturyswkmbdhvn]/=T,";
    var v744 = v829 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v612 = v744 + "/[tu]gg/=W,";
    var v328 = v612 + "/[tu]a[ctuy]/=Y,";
    return v328 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v613 = JAM.call(type$$26.toLowerCase, type$$26, [], JAM.policy.p13);
  var v331 = v613 == "transl_table=12";
  if(v331) {
    var v1248 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1230 = v1248 + "/ga[tcuy]/=D,";
    var v1212 = v1230 + "/ga[agr]/=E,";
    var v1193 = v1212 + "/[tu][tu][tcuy]/=F,";
    var v1173 = v1193 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1151 = v1173 + "/ca[tcuy]/=H,";
    var v1129 = v1151 + "/a[tu][atcuwmhy]/=I,";
    var v1107 = v1129 + "/aa[agr]/=K,";
    var v1082 = v1107 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1057 = v1082 + "/a[tu]g/=M,";
    var v1030 = v1057 + "/aa[tucy]/=N,";
    var v1002 = v1030 + "/cc[acgturyswkmbdhvn]/=P,";
    var v966 = v1002 + "/ca[agr]/=Q,";
    var v929 = v966 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v888 = v929 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v830 = v888 + "/ac[acgturyswkmbdhvn]/=T,";
    var v745 = v830 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v614 = v745 + "/[tu]gg/=W,";
    var v330 = v614 + "/[tu]a[ctuy]/=Y,";
    return v330 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v615 = JAM.call(type$$26.toLowerCase, type$$26, [], JAM.policy.p13);
  var v333 = v615 == "transl_table=13";
  if(v333) {
    var v1249 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1231 = v1249 + "/ga[tcuy]/=D,";
    var v1213 = v1231 + "/ga[agr]/=E,";
    var v1194 = v1213 + "/[tu][tu][tcuy]/=F,";
    var v1174 = v1194 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1152 = v1174 + "/ca[tcuy]/=H,";
    var v1130 = v1152 + "/a[tu][tcuy]/=I,";
    var v1108 = v1130 + "/aa[agr]/=K,";
    var v1083 = v1108 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1058 = v1083 + "/a[tu][agr]/=M,";
    var v1031 = v1058 + "/aa[tucy]/=N,";
    var v1003 = v1031 + "/cc[acgturyswkmbdhvn]/=P,";
    var v967 = v1003 + "/ca[agr]/=Q,";
    var v930 = v967 + "/cg[acgturyswkmbdhvn]/=R,";
    var v889 = v930 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v831 = v889 + "/ac[acgturyswkmbdhvn]/=T,";
    var v746 = v831 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v616 = v746 + "/[tu]g[agr]/=W,";
    var v332 = v616 + "/[tu]a[ctuy]/=Y,";
    return v332 + "/[tu]a[agr]/=*"
  }
  var v617 = JAM.call(type$$26.toLowerCase, type$$26, [], JAM.policy.p13);
  var v335 = v617 == "transl_table=14";
  if(v335) {
    var v1250 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1232 = v1250 + "/ga[tcuy]/=D,";
    var v1214 = v1232 + "/ga[agr]/=E,";
    var v1195 = v1214 + "/[tu][tu][tcuy]/=F,";
    var v1175 = v1195 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1153 = v1175 + "/ca[tcuy]/=H,";
    var v1131 = v1153 + "/a[tu][atcuwmhy]/=I,";
    var v1109 = v1131 + "/aag/=K,";
    var v1084 = v1109 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1059 = v1084 + "/a[tu]g/=M,";
    var v1032 = v1059 + "/aa[atcuwmhy]/=N,";
    var v1004 = v1032 + "/cc[acgturyswkmbdhvn]/=P,";
    var v968 = v1004 + "/ca[agr]/=Q,";
    var v931 = v968 + "/cg[acgturyswkmbdhvn]/=R,";
    var v890 = v931 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v832 = v890 + "/ac[acgturyswkmbdhvn]/=T,";
    var v747 = v832 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v618 = v747 + "/[tu]g[agr]/=W,";
    var v334 = v618 + "/[tu]a[atcuwmhy]/=Y,";
    return v334 + "/[tu]ag/=*"
  }
  var v619 = JAM.call(type$$26.toLowerCase, type$$26, [], JAM.policy.p13);
  var v337 = v619 == "transl_table=15";
  if(v337) {
    var v1251 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1233 = v1251 + "/ga[tcuy]/=D,";
    var v1215 = v1233 + "/ga[agr]/=E,";
    var v1196 = v1215 + "/[tu][tu][tcuy]/=F,";
    var v1176 = v1196 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1154 = v1176 + "/ca[tcuy]/=H,";
    var v1132 = v1154 + "/a[tu][atcuwmhy]/=I,";
    var v1110 = v1132 + "/aa[agr]/=K,";
    var v1085 = v1110 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1060 = v1085 + "/a[tu]g/=M,";
    var v1033 = v1060 + "/aa[tucy]/=N,";
    var v1005 = v1033 + "/cc[acgturyswkmbdhvn]/=P,";
    var v969 = v1005 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v932 = v969 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v891 = v932 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v833 = v891 + "/ac[acgturyswkmbdhvn]/=T,";
    var v748 = v833 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v620 = v748 + "/[tu]gg/=W,";
    var v336 = v620 + "/[tu]a[ctuy]/=Y,";
    return v336 + "/[tu][agr]a/=*"
  }
  var v621 = JAM.call(type$$26.toLowerCase, type$$26, [], JAM.policy.p13);
  var v339 = v621 == "transl_table=16";
  if(v339) {
    var v1252 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1234 = v1252 + "/ga[tcuy]/=D,";
    var v1216 = v1234 + "/ga[agr]/=E,";
    var v1197 = v1216 + "/[tu][tu][tcuy]/=F,";
    var v1177 = v1197 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1155 = v1177 + "/ca[tcuy]/=H,";
    var v1133 = v1155 + "/a[tu][atcuwmhy]/=I,";
    var v1111 = v1133 + "/aa[agr]/=K,";
    var v1086 = v1111 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1061 = v1086 + "/a[tu]g/=M,";
    var v1034 = v1061 + "/aa[tucy]/=N,";
    var v1006 = v1034 + "/cc[acgturyswkmbdhvn]/=P,";
    var v970 = v1006 + "/ca[agr]/=Q,";
    var v933 = v970 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v892 = v933 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v834 = v892 + "/ac[acgturyswkmbdhvn]/=T,";
    var v749 = v834 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v622 = v749 + "/[tu]gg/=W,";
    var v338 = v622 + "/[tu]a[ctuy]/=Y,";
    return v338 + "/[tu][agr]a/=*"
  }
  var v623 = JAM.call(type$$26.toLowerCase, type$$26, [], JAM.policy.p13);
  var v341 = v623 == "transl_table=21";
  if(v341) {
    var v1253 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1235 = v1253 + "/ga[tcuy]/=D,";
    var v1217 = v1235 + "/ga[agr]/=E,";
    var v1198 = v1217 + "/[tu][tu][tcuy]/=F,";
    var v1178 = v1198 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1156 = v1178 + "/ca[tcuy]/=H,";
    var v1134 = v1156 + "/a[tu][tcuy]/=I,";
    var v1112 = v1134 + "/aag/=K,";
    var v1087 = v1112 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1062 = v1087 + "/a[tu][agr]/=M,";
    var v1035 = v1062 + "/aa[atcuwmhy]/=N,";
    var v1007 = v1035 + "/cc[acgturyswkmbdhvn]/=P,";
    var v971 = v1007 + "/ca[agr]/=Q,";
    var v934 = v971 + "/cg[acgturyswkmbdhvn]/=R,";
    var v893 = v934 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v835 = v893 + "/ac[acgturyswkmbdhvn]/=T,";
    var v750 = v835 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v624 = v750 + "/[tu]g[agr]/=W,";
    var v340 = v624 + "/[tu]a[ctuy]/=Y,";
    return v340 + "/[tu]a[agr]/=*"
  }
  var v625 = JAM.call(type$$26.toLowerCase, type$$26, [], JAM.policy.p13);
  var v343 = v625 == "transl_table=22";
  if(v343) {
    var v1254 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1236 = v1254 + "/ga[tcuy]/=D,";
    var v1218 = v1236 + "/ga[agr]/=E,";
    var v1199 = v1218 + "/[tu][tu][tcuy]/=F,";
    var v1179 = v1199 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1157 = v1179 + "/ca[tcuy]/=H,";
    var v1135 = v1157 + "/a[tu][atcuwmhy]/=I,";
    var v1113 = v1135 + "/aa[agr]/=K,";
    var v1088 = v1113 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1063 = v1088 + "/a[tu]g/=M,";
    var v1036 = v1063 + "/aa[tucy]/=N,";
    var v1008 = v1036 + "/cc[acgturyswkmbdhvn]/=P,";
    var v972 = v1008 + "/ca[agr]/=Q,";
    var v935 = v972 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v894 = v935 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v836 = v894 + "/ac[acgturyswkmbdhvn]/=T,";
    var v751 = v836 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v626 = v751 + "/[tu]gg/=W,";
    var v342 = v626 + "/[tu]a[ctuy]/=Y,";
    return v342 + "/[tu][agcrsmv]a/=*"
  }
  var v627 = JAM.call(type$$26.toLowerCase, type$$26, [], JAM.policy.p13);
  var v345 = v627 == "transl_table=23";
  if(v345) {
    var v1255 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1237 = v1255 + "/ga[tcuy]/=D,";
    var v1219 = v1237 + "/ga[agr]/=E,";
    var v1200 = v1219 + "/[tu][tu][tcuy]/=F,";
    var v1180 = v1200 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1158 = v1180 + "/ca[tcuy]/=H,";
    var v1136 = v1158 + "/a[tu][atcuwmhy]/=I,";
    var v1114 = v1136 + "/aa[agr]/=K,";
    var v1089 = v1114 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1064 = v1089 + "/a[tu]g/=M,";
    var v1037 = v1064 + "/aa[tucy]/=N,";
    var v1009 = v1037 + "/cc[acgturyswkmbdhvn]/=P,";
    var v973 = v1009 + "/ca[agr]/=Q,";
    var v936 = v973 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v895 = v936 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v837 = v895 + "/ac[acgturyswkmbdhvn]/=T,";
    var v752 = v837 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v628 = v752 + "/[tu]gg/=W,";
    var v344 = v628 + "/[tu]a[ctuy]/=Y,";
    return v344 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*"
  }
  return true
}
function transMap(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 5E5;
  var v629 = testScript();
  var v346 = v629 == false;
  if(v346) {
    return false
  }
  var v974 = theDocument.forms;
  var v937 = v974[0];
  var v896 = v937.elements;
  var v838 = v896[6];
  var v753 = v838.options;
  var v975 = theDocument.forms;
  var v938 = v975[0];
  var v897 = v938.elements;
  var v839 = v897[6];
  var v754 = v839.selectedIndex;
  var v630 = v753[v754];
  var v347 = v630.value;
  var geneticCode = getGeneticCodeString(v347);
  var v976 = theDocument.forms;
  var v939 = v976[0];
  var v898 = v939.elements;
  var v840 = v898[0];
  var v755 = checkFormElement(v840);
  var v631 = v755 == false;
  var v757 = !v631;
  if(v757) {
    var v1010 = theDocument.forms;
    var v977 = v1010[0];
    var v940 = v977.elements;
    var v899 = v940[0];
    var v841 = v899.value;
    var v756 = checkSequenceLength(v841, maxInput$$3);
    v631 = v756 == false
  }
  var v348 = v631;
  if(v348) {
    return false
  }
  geneticCode = JAM.call(geneticCode.split, geneticCode, [/,/], JAM.policy.p13);
  var v632 = checkGeneticCode(geneticCode);
  var v349 = v632 == false;
  if(v349) {
    return false
  }
  openWindow("Translation Map");
  openPre();
  var v900 = theDocument.forms;
  var v842 = v900[0];
  var v758 = v842.elements;
  var v633 = v758[0];
  var v350 = v633.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v350);
  var i$$11 = 0;
  var v634 = arrayOfFasta$$1.length;
  var v358 = i$$11 < v634;
  for(;v358;) {
    var v351 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v351);
    var v352 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v352);
    newDna = removeNonDna(newDna);
    var v353 = outputWindow.document;
    var v354 = getInfoFromTitleAndSequence(title$$9, newDna);
    JAM.call(v353.write, v353, [v354], JAM.policy.p23);
    var v978 = theDocument.forms;
    var v941 = v978[0];
    var v901 = v941.elements;
    var v843 = v901[4];
    var v759 = v843.options;
    var v979 = theDocument.forms;
    var v942 = v979[0];
    var v902 = v942.elements;
    var v844 = v902[4];
    var v760 = v844.selectedIndex;
    var v635 = v759[v760];
    var v355 = v635.value;
    var v980 = theDocument.forms;
    var v943 = v980[0];
    var v903 = v943.elements;
    var v845 = v903[5];
    var v761 = v845.options;
    var v981 = theDocument.forms;
    var v944 = v981[0];
    var v904 = v944.elements;
    var v846 = v904[5];
    var v762 = v846.selectedIndex;
    var v636 = v761[v762];
    var v356 = v636.value;
    layoutTranslation(newDna, geneticCode, v355, v356);
    var v357 = outputWindow.document;
    JAM.call(v357.write, v357, ["\n\n"], JAM.policy.p14);
    i$$11 = i$$11 + 1;
    var v637 = arrayOfFasta$$1.length;
    v358 = i$$11 < v637
  }
  closePre();
  closeWindow();
  return true
}
function layoutTranslation(dnaSequence$$3, geneticCode$$1, basesPerLine, readingFrame) {
  basesPerLine = parseInt(basesPerLine);
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var textLayout = new TextLayout;
  var v638 = readingFrame == "3";
  var v763 = !v638;
  if(v763) {
    v638 = readingFrame == "all_three"
  }
  var v360 = v638;
  if(v360) {
    var translation = new TranslationComponent;
    var v847 = dnaSequence$$3.length;
    var v764 = JAM.call(dnaSequence$$3.substring, dnaSequence$$3, [2, v847], JAM.policy.p13);
    var v639 = translate(v764, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v359 = "  " + v639;
    JAM.call(translation.setCharacters, translation, [v359], JAM.policy.p23);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p23)
  }
  var v640 = readingFrame == "2";
  var v765 = !v640;
  if(v765) {
    v640 = readingFrame == "all_three"
  }
  var v362 = v640;
  if(v362) {
    translation = new TranslationComponent;
    var v848 = dnaSequence$$3.length;
    var v766 = JAM.call(dnaSequence$$3.substring, dnaSequence$$3, [1, v848], JAM.policy.p13);
    var v641 = translate(v766, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v361 = " " + v641;
    JAM.call(translation.setCharacters, translation, [v361], JAM.policy.p23);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p23)
  }
  var v642 = readingFrame == "1";
  var v767 = !v642;
  if(v767) {
    v642 = readingFrame == "all_three"
  }
  var v364 = v642;
  if(v364) {
    translation = new TranslationComponent;
    var v363 = translate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    JAM.call(translation.setCharacters, translation, [v363], JAM.policy.p23);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p23)
  }
  var v366 = readingFrame == "uppercase";
  if(v366) {
    translation = new UppercaseTranslationComponent;
    var v365 = uppercaseTranslate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    JAM.call(translation.setCharacters, translation, [v365], JAM.policy.p23);
    JAM.call(textLayout.addComponent, textLayout, [translation], JAM.policy.p23)
  }
  var dna = new DnaComponent;
  JAM.call(dna.setCharacters, dna, [dnaSequence$$3], JAM.policy.p23);
  JAM.call(textLayout.addComponent, textLayout, [dna], JAM.policy.p23);
  var ruler = new RulerComponent;
  JAM.call(ruler.setCharacters, ruler, [dnaSequence$$3], JAM.policy.p23);
  JAM.call(ruler.buildRuler, ruler, [], JAM.policy.p13);
  JAM.call(textLayout.addComponent, textLayout, [ruler], JAM.policy.p23);
  dna = new DnaComponent;
  var v367 = complement(dnaSequence$$3);
  JAM.call(dna.setCharacters, dna, [v367], JAM.policy.p23);
  JAM.call(textLayout.addComponent, textLayout, [dna], JAM.policy.p23);
  var i$$12 = 0;
  var v643 = dnaSequence$$3.length;
  var v369 = i$$12 < v643;
  for(;v369;) {
    var v368 = i$$12 + basesPerLine;
    JAM.call(textLayout.writeLayout, textLayout, [i$$12, v368], JAM.policy.p13);
    i$$12 = i$$12 + basesPerLine;
    var v644 = dnaSequence$$3.length;
    v369 = i$$12 < v644
  }
  return true
}
function translate(dnaSequence$$4, geneticCodeMatchExp$$3, geneticCodeMatchResult$$3) {
  function v2(str$$8, p1$$2, offset$$14, s$$4) {
    var v370 = " " + p1$$2;
    return v370 + " "
  }
  var v768 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/[^A-Za-z]/g, ""], JAM.policy.p13);
  var v645 = v768.length;
  var v371 = v645 < 3;
  if(v371) {
    return""
  }
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/(...)/g, v2], JAM.policy.p13);
  var i$$13 = 0;
  var v646 = geneticCodeMatchExp$$3.length;
  var v374 = i$$13 < v646;
  for(;v374;) {
    var v372 = geneticCodeMatchExp$$3[i$$13];
    var v373 = geneticCodeMatchResult$$3[i$$13];
    dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [v372, v373], JAM.policy.p24);
    i$$13 = i$$13 + 1;
    var v647 = geneticCodeMatchExp$$3.length;
    v374 = i$$13 < v647
  }
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/\S{3}/g, "X"], JAM.policy.p13);
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/\s\S{1,2}$/, ""], JAM.policy.p13);
  dnaSequence$$4 = JAM.call(dnaSequence$$4.replace, dnaSequence$$4, [/^\s/, ""], JAM.policy.p13);
  return dnaSequence$$4
}
function uppercaseTranslate(dnaSequence$$5, geneticCodeMatchExp$$4, geneticCodeMatchResult$$4) {
  function v3(str$$9, p1$$3, p2, p3, p4, p5, p6, offset$$15, s$$5) {
    var v945 = " " + p1$$3;
    var v905 = v945 + p3;
    var v849 = v905 + p5;
    var v769 = v849 + " ";
    var v648 = v769 + p2;
    var v375 = v648 + p4;
    return v375 + p6
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/[a-z]/g, " "], JAM.policy.p13);
  var v770 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/[^A-Za-z]/g, ""], JAM.policy.p13);
  var v649 = v770.length;
  var v376 = v649 < 3;
  if(v376) {
    return""
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/([A-Z])(\s*)([A-Z])(\s*)([A-Z])(\s*)/g, v3], JAM.policy.p13);
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/\s\S{1,2}\s/g, ""], JAM.policy.p13);
  var i$$14 = 0;
  var v650 = geneticCodeMatchExp$$4.length;
  var v379 = i$$14 < v650;
  for(;v379;) {
    var v377 = geneticCodeMatchExp$$4[i$$14];
    var v378 = geneticCodeMatchResult$$4[i$$14];
    dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [v377, v378], JAM.policy.p24);
    i$$14 = i$$14 + 1;
    var v651 = geneticCodeMatchExp$$4.length;
    v379 = i$$14 < v651
  }
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/\S{3}/g, "X"], JAM.policy.p13);
  dnaSequence$$5 = JAM.call(dnaSequence$$5.replace, dnaSequence$$5, [/^\s/, ""], JAM.policy.p13);
  return dnaSequence$$5
}
function writeLayout(start$$4, stop) {
  var i$$15 = 0;
  var v771 = this.components;
  var v652 = v771.length;
  var v381 = i$$15 < v652;
  for(;v381;) {
    var v653 = this.components;
    var v380 = v653[i$$15];
    JAM.call(v380.writeLayoutComponent, v380, [start$$4, stop], JAM.policy.p24);
    i$$15 = i$$15 + 1;
    var v772 = this.components;
    var v654 = v772.length;
    v381 = i$$15 < v654
  }
  return
}
function addComponent(component) {
  var v382 = this.components;
  JAM.call(v382.push, v382, [component], JAM.policy.p23);
  return
}
function TextLayout() {
  var v1354 = new Array;
  this.components = v1354;
  return
}
function writeLayoutComponent(start$$5, stop$$1) {
  return
}
function setCharacters(text$$14) {
  var v655 = JAM.call(text$$14.search, text$$14, [/./], JAM.policy.p13);
  var v383 = v655 != -1;
  if(v383) {
    var v1355 = JAM.call(text$$14.match, text$$14, [/./g], JAM.policy.p13);
    this.characters = v1355
  }
  return
}
function isRoom(start$$6, stop$$2) {
  var v384 = this.characters;
  var rangeToCheck = JAM.call(v384.slice, v384, [start$$6, stop$$2], JAM.policy.p24);
  rangeToCheck = JAM.call(rangeToCheck.join, rangeToCheck, [""], JAM.policy.p14);
  var v656 = JAM.call(rangeToCheck.search, rangeToCheck, [/\w/], JAM.policy.p13);
  var v385 = v656 == -1;
  if(v385) {
    return true
  }else {
    return false
  }
  return
}
function LayoutComponent() {
  var v1356 = new Array;
  this.characters = v1356;
  this.positionLabel = 1;
  return
}
function TranslationComponent() {
  var v1357 = new Array;
  this.characters = v1357;
  this.positionLabel = 1;
  return
}
function UppercaseTranslationComponent() {
  var v1358 = new Array;
  this.characters = v1358;
  this.positionLabel = 1;
  return
}
function DnaComponent() {
  var v1359 = new Array;
  this.characters = v1359;
  this.positionLabel = 1;
  return
}
function RulerComponent() {
  var v1360 = new Array;
  this.characters = v1360;
  this.positionLabel = 1;
  return
}
function buildRuler() {
  function v4(str$$12, p1$$6, offset$$18, s$$8) {
    var ruler$$1 = count$$6 + spacing;
    var v386 = count$$6 == 0;
    if(v386) {
      ruler$$1 = spacing
    }
    count$$6 = count$$6 + 10;
    return JAM.call(ruler$$1.substring, ruler$$1, [0, 10], JAM.policy.p13)
  }
  var v387 = this.characters;
  var sequence$$18 = JAM.call(v387.join, v387, [""], JAM.policy.p14);
  var count$$6 = 0;
  var spacing = "         ";
  sequence$$18 = JAM.call(sequence$$18.replace, sequence$$18, [/(.{1,10})/g, v4], JAM.policy.p13);
  var v1361 = JAM.call(sequence$$18.match, sequence$$18, [/./g], JAM.policy.p13);
  this.characters = v1361;
  return
}
new TextLayout;
var v388 = TextLayout.prototype;
v388.writeLayout = writeLayout;
var v389 = TextLayout.prototype;
v389.addComponent = addComponent;
new LayoutComponent;
var v390 = LayoutComponent.prototype;
v390.writeLayoutComponent = writeLayoutComponent;
var v391 = LayoutComponent.prototype;
v391.setCharacters = setCharacters;
var v392 = LayoutComponent.prototype;
v392.isRoom = isRoom;
var v393 = TranslationComponent;
var v1362 = new LayoutComponent;
v393.prototype = v1362;
var v394 = TranslationComponent.prototype;
v394.writeLayoutComponent = v5;
var v395 = UppercaseTranslationComponent;
var v1363 = new LayoutComponent;
v395.prototype = v1363;
var v396 = UppercaseTranslationComponent.prototype;
v396.writeLayoutComponent = v6;
var v397 = DnaComponent;
var v1364 = new LayoutComponent;
v397.prototype = v1364;
var v398 = DnaComponent.prototype;
v398.writeLayoutComponent = v7;
var v399 = RulerComponent;
var v1365 = new LayoutComponent;
v399.prototype = v1365;
var v400 = RulerComponent.prototype;
v400.writeLayoutComponent = v10;
new RulerComponent;
var v401 = RulerComponent.prototype;
v401.buildRuler = buildRuler;
JAM.set(document, "onload", v11);
var v402 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p14);
JAM.set(v402, "onclick", v12);
var v403 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p14);
JAM.set(v403, "onclick", v13);
