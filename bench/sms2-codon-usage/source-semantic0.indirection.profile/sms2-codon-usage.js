
JAM.startProfile('load');
function v6() {
  var v776 = document.forms;
  var v655 = v776[0];
  var v387 = v655.elements;
  var v7 = v387[0];
  v7.value = " ";
  var v777 = document.forms;
  var v656 = v777[0];
  var v388 = v656.elements;
  var v8 = v388[4];
  v8.value = " ";
  return;
}
function v5() {
  try {
    codonUsage(document);
  } catch (e$$5) {
    var v9 = "The following error was encountered: " + e$$5;
    alert(v9);
  }
  return;
}
function v4() {
  var v389 = document.main_form;
  var v10 = v389.main_submit;
  v10.focus();
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
  var v11 = arrayOfSequences[0];
  var lengthOfAlign = v11.length;
  var v390 = arrayOfSequences.length;
  var v12 = v390 < 2;
  if (v12) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v391 = arrayOfTitles.length;
  var v14 = i$$1 < v391;
  for (;v14;) {
    var v850 = arrayOfTitles[i$$1];
    var v778 = JAM.call(v850.search, v850, [/\S/], JAM.policy.p15);
    var v657 = v778 == -1;
    var v780 = !v657;
    if (v780) {
      var v851 = arrayOfSequences[i$$1];
      var v779 = JAM.call(v851.search, v851, [/\S/], JAM.policy.p15);
      v657 = v779 == -1;
    }
    var v392 = v657;
    var v659 = !v392;
    if (v659) {
      var v781 = arrayOfSequences[i$$1];
      var v658 = v781.length;
      v392 = v658 != lengthOfAlign;
    }
    var v13 = v392;
    if (v13) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v393 = arrayOfTitles.length;
    v14 = i$$1 < v393;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v906 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p15);
  var v852 = v906 == -1;
  var v908 = !v852;
  if (v908) {
    var v907 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p15);
    v852 = v907 == -1;
  }
  var v782 = v852;
  var v854 = !v782;
  if (v854) {
    var v853 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p15);
    v782 = v853 == -1;
  }
  var v660 = v782;
  var v784 = !v660;
  if (v784) {
    var v783 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p15);
    v660 = v783 == -1;
  }
  var v394 = v660;
  var v662 = !v394;
  if (v662) {
    var v661 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p15);
    v394 = v661 == -1;
  }
  var v15 = v394;
  if (v15) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v663 = formElement.value;
  var v395 = JAM.call(v663.search, v663, [/\S/], JAM.policy.p15);
  var v16 = v395 == -1;
  if (v16) {
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
  var v396 = arrayOfPatterns.length;
  var v19 = z$$2 < v396;
  for (;v19;) {
    var v664 = arrayOfPatterns[z$$2];
    var v397 = JAM.call(v664.search, v664, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p15);
    var v17 = v397 == -1;
    if (v17) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v665 = arrayOfPatterns[z$$2];
    var v398 = moreExpressionCheck(v665);
    var v18 = v398 == false;
    if (v18) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v399 = arrayOfPatterns.length;
    v19 = z$$2 < v399;
  }
  var v20 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v20);
  var v21 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v21);
  var j = 0;
  var v400 = arrayOfPatterns.length;
  var v25 = j < v400;
  for (;v25;) {
    var v666 = arrayOfPatterns[j];
    var v401 = JAM.call(v666.match, v666, [/\/.+\//], JAM.policy.p15);
    var v22 = v401 + "gi";
    if (JAM.isEval(eval)) {
      var v1249 = eval("introspect(JAM.policy.pFull) { " + v22 + " }")
    } else {
      var v1249 = JAM.call(eval, null, [v22])
    }
    geneticCodeMatchExp[j] = v1249;
    var v402 = arrayOfPatterns[j];
    var v23 = JAM.call(v402.match, v402, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v1250 = v23.toString();
    geneticCodeMatchResult[j] = v1250;
    var v24 = geneticCodeMatchResult[j];
    var v1251 = JAM.call(v24.replace, v24, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v1251;
    j++;
    var v403 = arrayOfPatterns.length;
    v25 = j < v403;
  }
  var i$$2 = 0;
  var v667 = testSequence.length;
  var v404 = v667 - 3;
  var v32 = i$$2 <= v404;
  for (;v32;) {
    var v26 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v26], JAM.policy.p16);
    j = 0;
    var v405 = geneticCodeMatchExp.length;
    var v30 = j < v405;
    for (;v30;) {
      var v668 = geneticCodeMatchExp[j];
      var v406 = JAM.call(codon.search, codon, [v668], JAM.policy.p17);
      var v29 = v406 != -1;
      if (v29) {
        var v28 = oneMatch == true;
        if (v28) {
          var v407 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v407 + ".";
          alert(v27);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v408 = geneticCodeMatchExp.length;
      v30 = j < v408;
    }
    var v31 = oneMatch == false;
    if (v31) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v669 = testSequence.length;
    var v409 = v669 - 3;
    v32 = i$$2 <= v409;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v410 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v410;
  for (;v34;) {
    var v670 = arrayOfPatterns$$1[z$$3];
    var v411 = JAM.call(v670.search, v670, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p15);
    var v33 = v411 != -1;
    if (v33) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v412 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v412;
  }
  var i$$3 = 0;
  var v413 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v413;
  for (;v38;) {
    var v671 = arrayOfPatterns$$1[i$$3];
    var v414 = "[" + v671;
    var v35 = v414 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v415 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v415;
    for (;v37;) {
      var v672 = arrayOfPatterns$$1[j$$1];
      var v416 = JAM.call(v672.search, v672, [re], JAM.policy.p17);
      var v36 = v416 != -1;
      if (v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v417 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v417;
    }
    i$$3++;
    var v418 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v418;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v419 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v419;
  for (;v41;) {
    var v673 = arrayOfPatterns$$2[z$$4];
    var v420 = JAM.call(v673.search, v673, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p15);
    var v39 = v420 == -1;
    if (v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v674 = arrayOfPatterns$$2[z$$4];
    var v421 = moreExpressionCheck(v674);
    var v40 = v421 == false;
    if (v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v422 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v422;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v785 = getSequenceFromFasta(text$$7);
  var v675 = JAM.call(v785.replace, v785, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v423 = v675.length;
  var v43 = v423 > maxInput;
  if (v43) {
    var v424 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v424 + " characters.";
    alert(v42);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v425 = text$$8.length;
  var v45 = v425 > maxInput$$1;
  if (v45) {
    var v426 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v426 + " characters.";
    alert(v44);
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
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</form>"], JAM.policy.p10);
  return true;
}
function closePre() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</div>"], JAM.policy.p10);
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</pre>\n"], JAM.policy.p10);
  return;
}
function closeTextArea() {
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</textarea>"], JAM.policy.p10);
  return true;
}
function closeWindow() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</body>\n</html>\n"], JAM.policy.p10);
  outputWindow.status = "Done.";
  var v51 = outputWindow.document;
  v51.close();
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
  var v427 = alignArray.length;
  var v52 = v427 < 3;
  if (v52) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v428 = alignArray.length;
  var v54 = i$$4 < v428;
  for (;v54;) {
    var v676 = alignArray[i$$4];
    var v429 = JAM.call(v676.search, v676, [/[^\s]+\s/], JAM.policy.p15);
    var v53 = v429 == -1;
    if (v53) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v430 = alignArray.length;
    v54 = i$$4 < v430;
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
  var v431 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v57 = v431 != -1;
  if (v57) {
    var v56 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    for (;v56;) {
      var v55 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v55], JAM.policy.p17);
      v56 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v432 = sequence$$2.length;
  var v58 = "&gt;results for " + v432;
  var stringToReturn = v58 + " residue sequence ";
  var v433 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p15);
  var v60 = v433 != -1;
  if (v60) {
    var v434 = stringToReturn + '"';
    var v59 = v434 + fastaSequenceTitle;
    stringToReturn = v59 + '"';
  }
  var v435 = stringToReturn + ' starting "';
  var v436 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v61 = v435 + v436;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v437 = sequenceOne.length;
  var v62 = "Search results for " + v437;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v438 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p15);
  var v64 = v438 != -1;
  if (v64) {
    var v439 = stringToReturn$$1 + '"';
    var v63 = v439 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"';
  }
  var v440 = stringToReturn$$1 + ' starting "';
  var v441 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v65 = v440 + v441;
  stringToReturn$$1 = v65 + '"\n';
  var v442 = stringToReturn$$1 + "and ";
  var v443 = sequenceTwo.length;
  var v66 = v442 + v443;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v444 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p15);
  var v68 = v444 != -1;
  if (v68) {
    var v445 = stringToReturn$$1 + '"';
    var v67 = v445 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"';
  }
  var v446 = stringToReturn$$1 + ' starting "';
  var v447 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v69 = v446 + v447;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v448 = arrayOfPatterns$$3.length;
  var v73 = j$$2 < v448;
  for (;v73;) {
    var v677 = arrayOfPatterns$$3[j$$2];
    var v449 = JAM.call(v677.match, v677, [/\/.+\//], JAM.policy.p15);
    var v72 = v449 + "gi";
    if (JAM.isEval(eval)) {
      var v1252 = eval("introspect(JAM.policy.pFull) { " + v72 + " }")
    } else {
      var v1252 = JAM.call(eval, null, [v72])
    }
    geneticCodeMatchExp$$1[j$$2] = v1252;
    j$$2++;
    var v450 = arrayOfPatterns$$3.length;
    v73 = j$$2 < v450;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v74 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v74);
  var j$$3 = 0;
  var v451 = arrayOfPatterns$$4.length;
  var v77 = j$$3 < v451;
  for (;v77;) {
    var v452 = arrayOfPatterns$$4[j$$3];
    var v75 = JAM.call(v452.match, v452, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v1253 = v75.toString();
    geneticCodeMatchResult$$1[j$$3] = v1253;
    var v76 = geneticCodeMatchResult$$1[j$$3];
    var v1254 = JAM.call(v76.replace, v76, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v1254;
    j$$3++;
    var v453 = arrayOfPatterns$$4.length;
    v77 = j$$3 < v453;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v454 = sequence$$3.length;
  var v78 = "Results for " + v454;
  var stringToReturn$$2 = v78 + " residue sequence ";
  var v455 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p15);
  var v80 = v455 != -1;
  if (v80) {
    var v456 = stringToReturn$$2 + '"';
    var v79 = v456 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v79 + '"';
  }
  var v457 = stringToReturn$$2 + ' starting "';
  var v458 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v81 = v457 + v458;
  stringToReturn$$2 = v81 + '"';
  var v82 = '<div class="info">' + stringToReturn$$2;
  return v82 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v678 = "Results for " + topology;
  var v459 = v678 + " ";
  var v460 = sequence$$4.length;
  var v83 = v459 + v460;
  var stringToReturn$$3 = v83 + " residue sequence ";
  var v461 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p15);
  var v85 = v461 != -1;
  if (v85) {
    var v462 = stringToReturn$$3 + '"';
    var v84 = v462 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v84 + '"';
  }
  var v463 = stringToReturn$$3 + ' starting "';
  var v464 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v86 = v463 + v464;
  stringToReturn$$3 = v86 + '"';
  var v87 = '<div class="info">' + stringToReturn$$3;
  return v87 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v465 = sequenceOne$$1.length;
  var v88 = "Alignment results for " + v465;
  var stringToReturn$$4 = v88 + " residue sequence ";
  var v466 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p15);
  var v90 = v466 != -1;
  if (v90) {
    var v467 = stringToReturn$$4 + '"';
    var v89 = v467 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v89 + '"';
  }
  var v468 = stringToReturn$$4 + ' starting "';
  var v469 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v91 = v468 + v469;
  stringToReturn$$4 = v91 + '"\n';
  var v470 = stringToReturn$$4 + "and ";
  var v471 = sequenceTwo$$1.length;
  var v92 = v470 + v471;
  stringToReturn$$4 = v92 + " residue sequence ";
  var v472 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p15);
  var v94 = v472 != -1;
  if (v94) {
    var v473 = stringToReturn$$4 + '"';
    var v93 = v473 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v93 + '"';
  }
  var v474 = stringToReturn$$4 + ' starting "';
  var v475 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v95 = v474 + v475;
  stringToReturn$$4 = v95 + '"';
  var v96 = '<div class="info">' + stringToReturn$$4;
  return v96 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v98 = j$$4 < lengthOut;
  for (;v98;) {
    var v476 = Math.random();
    var v477 = components.length;
    var v97 = v476 * v477;
    tempNum = JAM.call(Math.floor, Math, [v97], JAM.policy.p15);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v98 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p10);
}
function getSequenceFromFasta(sequenceRecord) {
  var v478 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v99 = v478 != -1;
  if (v99) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v479 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v101 = v479 != -1;
  if (v101) {
    var v100 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
    fastaTitle = v100.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p16);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1091 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p15);
  var v1067 = v1091 != -1;
  var v1093 = !v1067;
  if (v1093) {
    var v1092 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p15);
    v1067 = v1092 != -1;
  }
  var v1041 = v1067;
  var v1069 = !v1041;
  if (v1069) {
    var v1068 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p15);
    v1041 = v1068 != -1;
  }
  var v1013 = v1041;
  var v1043 = !v1013;
  if (v1043) {
    var v1042 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p15);
    v1013 = v1042 != -1;
  }
  var v982 = v1013;
  var v1015 = !v982;
  if (v1015) {
    var v1014 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p15);
    v982 = v1014 != -1;
  }
  var v947 = v982;
  var v984 = !v947;
  if (v984) {
    var v983 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p15);
    v947 = v983 != -1;
  }
  var v909 = v947;
  var v949 = !v909;
  if (v949) {
    var v948 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p15);
    v909 = v948 != -1;
  }
  var v855 = v909;
  var v911 = !v855;
  if (v911) {
    var v910 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p15);
    v855 = v910 != -1;
  }
  var v786 = v855;
  var v857 = !v786;
  if (v857) {
    var v856 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p15);
    v786 = v856 != -1;
  }
  var v679 = v786;
  var v788 = !v679;
  if (v788) {
    var v787 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p15);
    v679 = v787 != -1;
  }
  var v480 = v679;
  var v681 = !v480;
  if (v681) {
    var v680 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p15);
    v480 = v680 != -1;
  }
  var v102 = v480;
  if (v102) {
    return false;
  }
  return true;
}
function openForm() {
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ['<form action="">\n'], JAM.policy.p10);
  return true;
}
function openPre() {
  var v104 = outputWindow.document;
  JAM.call(v104.write, v104, ["<pre>"], JAM.policy.p10);
  var v105 = outputWindow.document;
  JAM.call(v105.write, v105, ['<div class="pre">'], JAM.policy.p10);
  return;
}
function openTextArea() {
  var v106 = outputWindow.document;
  JAM.call(v106.write, v106, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p10);
  return true;
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v107 = outputWindow.document;
  var v789 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v682 = v789 + "<head>\n";
  var v481 = v682 + "<title>Sequence Manipulation Suite</title>\n";
  var v108 = v481 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v107.write, v107, [v108], JAM.policy.p17);
  if (isColor) {
    var v109 = outputWindow.document;
    var v1157 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1136 = v1157 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1115 = v1136 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1094 = v1115 + "div.info {font-weight: bold}\n";
    var v1070 = v1094 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1044 = v1070 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1016 = v1044 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v985 = v1016 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v950 = v985 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v912 = v950 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v858 = v912 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v790 = v858 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v683 = v790 + "td.many {color: #000000}\n";
    var v482 = v683 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v110 = v482 + "</style>\n";
    JAM.call(v109.write, v109, [v110], JAM.policy.p17);
  } else {
    var v111 = outputWindow.document;
    var v1178 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1158 = v1178 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1137 = v1158 + "div.title {display: none}\n";
    var v1116 = v1137 + "div.info {font-weight: bold}\n";
    var v1095 = v1116 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1071 = v1095 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1045 = v1071 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1017 = v1045 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v986 = v1017 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v951 = v986 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v913 = v951 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v859 = v913 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v791 = v859 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v684 = v791 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v483 = v684 + "img {display: none}\n";
    var v112 = v483 + "</style>\n";
    JAM.call(v111.write, v111, [v112], JAM.policy.p17);
  }
  var v113 = outputWindow.document;
  var v792 = "</head>\n" + '<body class="main">\n';
  var v685 = v792 + '<div class="title">';
  var v484 = v685 + title$$7;
  var v114 = v484 + " results</div>\n";
  JAM.call(v113.write, v113, [v114], JAM.policy.p17);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return;
}
function _openWindowAlign(title$$9, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v115 = outputWindow.document;
  var v793 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v686 = v793 + "<head>\n";
  var v485 = v686 + "<title>Sequence Manipulation Suite</title>\n";
  var v116 = v485 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v115.write, v115, [v116], JAM.policy.p17);
  if (isBackground) {
    var v117 = outputWindow.document;
    var v1159 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1138 = v1159 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1117 = v1138 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1096 = v1117 + "div.info {font-weight: bold}\n";
    var v1072 = v1096 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1046 = v1072 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1018 = v1046 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v987 = v1018 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v952 = v987 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v914 = v952 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v860 = v914 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v794 = v860 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v687 = v794 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v486 = v687 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v118 = v486 + "</style>\n";
    JAM.call(v117.write, v117, [v118], JAM.policy.p17);
  } else {
    var v119 = outputWindow.document;
    var v1197 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1179 = v1197 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1160 = v1179 + "div.title {display: none}\n";
    var v1139 = v1160 + "div.info {font-weight: bold}\n";
    var v1118 = v1139 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1097 = v1118 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1073 = v1097 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1047 = v1073 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1019 = v1047 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v988 = v1019 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v953 = v988 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v915 = v953 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v861 = v915 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v795 = v861 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v688 = v795 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v487 = v688 + "img {display: none}\n";
    var v120 = v487 + "</style>\n";
    JAM.call(v119.write, v119, [v120], JAM.policy.p17);
  }
  var v121 = outputWindow.document;
  var v796 = "</head>\n" + '<body class="main">\n';
  var v689 = v796 + '<div class="title">';
  var v488 = v689 + title$$9;
  var v122 = v488 + " results</div>\n";
  JAM.call(v121.write, v121, [v122], JAM.policy.p17);
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
  var v489 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p15);
  var v123 = v489 != -1;
  if (v123) {
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
  var v124 = j$$5 < lengthOfColumn;
  for (;v124;) {
    tempString = tempString + " ";
    j$$5++;
    v124 = j$$5 < lengthOfColumn;
  }
  var v125 = tempString + theNumber;
  theNumber = v125 + " ";
  var v126 = sequenceToAppend + theNumber;
  sequenceToAppend = v126 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p17);
  var v490 = testArray[0];
  var v127 = v490 != testString;
  if (v127) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v491 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v128 = v491 == -1;
  if (v128) {
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
  var v129 = !caughtException;
  if (v129) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p16);
  var v130 = testString != "1X2X3X";
  if (v130) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v492 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p11);
  var v131 = v492 != 2489.824;
  if (v131) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v493 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p11);
  var v132 = v493 != 2489.8;
  if (v132) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v494 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p15);
  var v133 = v494 == -1;
  if (v133) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v862 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p15);
  var v797 = v862 == -1;
  var v864 = !v797;
  if (v864) {
    var v863 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p15);
    v797 = v863 == -1;
  }
  var v690 = v797;
  var v799 = !v690;
  if (v799) {
    var v798 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p15);
    v690 = v798 == -1;
  }
  var v495 = v690;
  var v692 = !v495;
  if (v692) {
    var v691 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p15);
    v495 = v691 == -1;
  }
  var v134 = v495;
  if (v134) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v496 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p15);
  var v135 = v496 == -1;
  if (v135) {
    alert("Please enter a number.");
    return false;
  }
  var v137 = theNumber$$2 > maxInput$$2;
  if (v137) {
    var v497 = "Please enter a number less than or equal to " + maxInput$$2;
    var v136 = v497 + ".";
    alert(v136);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v498 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p15);
  var v138 = v498 != -1;
  if (v138) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v499 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p15);
  var v139 = v499 != -1;
  if (v139) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v865 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p15);
  var v800 = v865 == -1;
  var v867 = !v800;
  if (v867) {
    var v866 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p15);
    v800 = v866 == -1;
  }
  var v693 = v800;
  var v802 = !v693;
  if (v802) {
    var v801 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p15);
    v693 = v801 == -1;
  }
  var v500 = v693;
  var v695 = !v500;
  if (v695) {
    var v694 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p15);
    v500 = v694 == -1;
  }
  var v140 = v500;
  if (v140) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v868 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p15);
  var v803 = v868 == -1;
  var v870 = !v803;
  if (v870) {
    var v869 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p15);
    v803 = v869 == -1;
  }
  var v696 = v803;
  var v805 = !v696;
  if (v805) {
    var v804 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p15);
    v696 = v804 == -1;
  }
  var v501 = v696;
  var v698 = !v501;
  if (v698) {
    var v697 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p15);
    v501 = v697 == -1;
  }
  var v141 = v501;
  if (v141) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v502 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p15);
  var v142 = v502 == -1;
  if (v142) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v871 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p15);
  var v806 = v871 == -1;
  var v873 = !v806;
  if (v873) {
    var v872 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p15);
    v806 = v872 == -1;
  }
  var v699 = v806;
  var v808 = !v699;
  if (v808) {
    var v807 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p15);
    v699 = v807 == -1;
  }
  var v503 = v699;
  var v701 = !v503;
  if (v701) {
    var v700 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p15);
    v503 = v700 == -1;
  }
  var v143 = v503;
  if (v143) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v504 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p15);
  var v144 = v504 == -1;
  if (v144) {
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
  var v151 = i$$5 < stopBase;
  for (;v151;) {
    var v145 = i$$5 + 1;
    lineOfText = rightNum(v145, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v505 = basePerLine / groupSize;
    var v148 = j$$6 <= v505;
    for (;v148;) {
      var v147 = k < groupSize;
      for (;v147;) {
        var v506 = k + i$$5;
        var v146 = JAM.call(text$$10.charAt, text$$10, [v506], JAM.policy.p17);
        lineOfText = lineOfText + v146;
        k = k + 1;
        v147 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v507 = basePerLine / groupSize;
      v148 = j$$6 <= v507;
    }
    var v149 = outputWindow.document;
    var v150 = lineOfText + "\n";
    JAM.call(v149.write, v149, [v150], JAM.policy.p17);
    lineOfText = "";
    v151 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  JAM.call(writeGroupNumDnaSetStart, null, [text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0], JAM.policy.p19);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v508 = adjustment < 0;
    if (v508) {
      v508 = adjusted >= 0;
    }
    var v152 = v508;
    if (v152) {
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
  var v185 = i$$6 < stopBase$$2;
  for (;v185;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v509 = basePerLine$$2 / groupSize$$2;
    var v161 = j$$7 <= v509;
    for (;v161;) {
      var v156 = k$$1 < groupSize$$2;
      for (;v156;) {
        var v510 = i$$6 + k$$1;
        var v153 = v510 >= stopBase$$2;
        if (v153) {
          break;
        }
        var v154 = lineOfText$$1;
        var v511 = k$$1 + i$$6;
        var v155 = JAM.call(text$$12.charAt, text$$12, [v511], JAM.policy.p17);
        lineOfText$$1 = v154 + v155;
        k$$1 = k$$1 + 1;
        v156 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v159 = numberPosition$$1 == "above";
      if (v159) {
        var v157 = aboveNum;
        var v512 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
        var v158 = rightNum(v512, "", groupSize$$2, tabIn$$3);
        aboveNum = v157 + v158;
      }
      var v160 = i$$6 >= stopBase$$2;
      if (v160) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v513 = basePerLine$$2 / groupSize$$2;
      v161 = j$$7 <= v513;
    }
    var v184 = numberPosition$$1 == "left";
    if (v184) {
      var v162 = outputWindow.document;
      var v809 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19);
      var v702 = rightNum(v809, "", 8, tabIn$$3);
      var v514 = v702 + lineOfText$$1;
      var v163 = v514 + "\n";
      JAM.call(v162.write, v162, [v163], JAM.policy.p17);
      var v167 = strands$$1 == "two";
      if (v167) {
        var v164 = outputWindow.document;
        var v810 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19);
        var v703 = rightNum(v810, "", 8, tabIn$$3);
        var v704 = complement(lineOfText$$1);
        var v515 = v703 + v704;
        var v165 = v515 + "\n";
        JAM.call(v164.write, v164, [v165], JAM.policy.p17);
        var v166 = outputWindow.document;
        JAM.call(v166.write, v166, ["\n"], JAM.policy.p10);
      }
    } else {
      var v183 = numberPosition$$1 == "right";
      if (v183) {
        var v168 = outputWindow.document;
        var v705 = lineOfText$$1;
        var v706 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
        var v516 = v705 + v706;
        var v169 = v516 + "\n";
        JAM.call(v168.write, v168, [v169], JAM.policy.p17);
        var v173 = strands$$1 == "two";
        if (v173) {
          var v170 = outputWindow.document;
          var v707 = complement(lineOfText$$1);
          var v708 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
          var v517 = v707 + v708;
          var v171 = v517 + "\n";
          JAM.call(v170.write, v170, [v171], JAM.policy.p17);
          var v172 = outputWindow.document;
          JAM.call(v172.write, v172, ["\n"], JAM.policy.p10);
        }
      } else {
        var v182 = numberPosition$$1 == "above";
        if (v182) {
          var v174 = outputWindow.document;
          var v175 = aboveNum + "\n";
          JAM.call(v174.write, v174, [v175], JAM.policy.p17);
          var v176 = outputWindow.document;
          var v177 = lineOfText$$1 + "\n";
          JAM.call(v176.write, v176, [v177], JAM.policy.p17);
          var v181 = strands$$1 == "two";
          if (v181) {
            var v178 = outputWindow.document;
            var v518 = complement(lineOfText$$1);
            var v179 = v518 + "\n";
            JAM.call(v178.write, v178, [v179], JAM.policy.p17);
            var v180 = outputWindow.document;
            JAM.call(v180.write, v180, ["\n"], JAM.policy.p10);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v185 = i$$6 < stopBase$$2;
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
  var v204 = i$$7 < stopBase$$3;
  for (;v204;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v519 = basePerLine$$3 / groupSize$$3;
    var v192 = j$$8 <= v519;
    for (;v192;) {
      var v188 = k$$2 < groupSize$$3;
      for (;v188;) {
        var v520 = i$$7 + k$$2;
        var v186 = v520 >= stopBase$$3;
        if (v186) {
          break;
        }
        var v521 = k$$2 + i$$7;
        var v187 = JAM.call(text$$13.charAt, text$$13, [v521], JAM.policy.p17);
        lineOfText$$2 = lineOfText$$2 + v187;
        k$$2 = k$$2 + 1;
        v188 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v190 = numberPosition$$2 == "above";
      if (v190) {
        var v189 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v189;
      }
      var v191 = i$$7 >= stopBase$$3;
      if (v191) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v522 = basePerLine$$3 / groupSize$$3;
      v192 = j$$8 <= v522;
    }
    var v203 = numberPosition$$2 == "left";
    if (v203) {
      var v193 = outputWindow.document;
      var v709 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v523 = v709 + lineOfText$$2;
      var v194 = v523 + "\n";
      JAM.call(v193.write, v193, [v194], JAM.policy.p17);
    } else {
      var v202 = numberPosition$$2 == "right";
      if (v202) {
        var v195 = outputWindow.document;
        var v524 = lineOfText$$2 + i$$7;
        var v196 = v524 + "\n";
        JAM.call(v195.write, v195, [v196], JAM.policy.p17);
      } else {
        var v201 = numberPosition$$2 == "above";
        if (v201) {
          var v197 = outputWindow.document;
          var v198 = aboveNum$$1 + "\n";
          JAM.call(v197.write, v197, [v198], JAM.policy.p17);
          var v199 = outputWindow.document;
          var v200 = lineOfText$$2 + "\n";
          JAM.call(v199.write, v199, [v200], JAM.policy.p17);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v204 = i$$7 < stopBase$$3;
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
  var v811 = sequence$$13.length;
  var v710 = v811 <= firstIndexToMutate;
  var v812 = !v710;
  if (v812) {
    v710 = lastIndexToMutate < 0;
  }
  var v525 = v710;
  var v711 = !v525;
  if (v711) {
    v525 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v205 = v525;
  if (v205) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v213 = i$$8 < numMut;
  for (;v213;) {
    maxNum = sequence$$13.length;
    var v526 = Math.random();
    var v206 = v526 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v206], JAM.policy.p15);
    var v527 = randNum < firstIndexToMutate;
    var v712 = !v527;
    if (v712) {
      v527 = randNum > lastIndexToMutate;
    }
    var v207 = v527;
    if (v207) {
      numMut++;
      i$$8++;
      v213 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p15);
    needNewChar = true;
    for (;needNewChar;) {
      var v528 = Math.random();
      var v529 = components$$1.length;
      var v208 = v528 * v529;
      componentsIndex = JAM.call(Math.round, Math, [v208], JAM.policy.p15);
      var v530 = components$$1.length;
      var v209 = componentsIndex == v530;
      if (v209) {
        componentsIndex = 0;
      }
      var v531 = components$$1[componentsIndex];
      var v210 = v531 != currentChar;
      if (v210) {
        needNewChar = false;
      }
    }
    var v532 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v533 = components$$1[componentsIndex];
    var v211 = v532 + v533;
    var v534 = randNum + 1;
    var v535 = sequence$$13.length;
    var v212 = JAM.call(sequence$$13.substring, sequence$$13, [v534, v535], JAM.policy.p21);
    sequence$$13 = v211 + v212;
    i$$8++;
    v213 = i$$8 < numMut;
  }
  var v214 = outputWindow.document;
  var v215 = addReturns(sequence$$13);
  JAM.call(v214.write, v214, [v215], JAM.policy.p17);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v220 = j$$9 < lengthOut$$1;
  for (;v220;) {
    var v536 = Math.random();
    var v537 = components$$2.length;
    var v216 = v536 * v537;
    tempNum$$1 = JAM.call(Math.floor, Math, [v216], JAM.policy.p15);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v538 = sequence$$14.length;
    var v219 = v538 == 60;
    if (v219) {
      var v217 = outputWindow.document;
      var v218 = sequence$$14 + "\n";
      JAM.call(v217.write, v217, [v218], JAM.policy.p17);
      sequence$$14 = "";
    }
    j$$9++;
    v220 = j$$9 < lengthOut$$1;
  }
  var v221 = outputWindow.document;
  var v222 = sequence$$14 + "\n";
  JAM.call(v221.write, v221, [v222], JAM.policy.p17);
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
  var v226 = dnaConformation == "circular";
  if (v226) {
    var v223 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v223.length;
    var v813 = sequence$$15.length;
    var v713 = v813 - lookAhead;
    var v714 = sequence$$15.length;
    var v539 = JAM.call(sequence$$15.substring, sequence$$15, [v713, v714], JAM.policy.p21);
    var v224 = v539 + sequence$$15;
    var v225 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v224 + v225;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v227 = outputWindow.document;
  JAM.call(v227.write, v227, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p10);
  var v228 = outputWindow.document;
  var v814 = '<tr><td class="title" width="200px">' + "Site:";
  var v715 = v814 + '</td><td class="title">';
  var v540 = v715 + "Positions:";
  var v229 = v540 + "</td></tr>\n";
  JAM.call(v228.write, v228, [v229], JAM.policy.p17);
  var i$$9 = 0;
  var v541 = arrayOfItems.length;
  var v245 = i$$9 < v541;
  for (;v245;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v542 = arrayOfItems[i$$9];
    var v230 = JAM.call(v542.match, v542, [/\/.+\//], JAM.policy.p15);
    matchExp = v230 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v815 = arrayOfItems[i$$9];
    var v716 = JAM.call(v815.match, v815, [/\)\D*\d+/], JAM.policy.p15);
    var v543 = v716.toString();
    var v231 = JAM.call(v543.replace, v543, [/\)\D*/, ""], JAM.policy.p16);
    cutDistance = parseFloat(v231);
    var v237 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v237;) {
      var v232 = matchExp.lastIndex;
      matchPosition = v232 - cutDistance;
      var v544 = matchPosition >= lowerLimit;
      if (v544) {
        v544 = matchPosition < upperLimit;
      }
      var v235 = v544;
      if (v235) {
        timesFound++;
        var v233 = tempString$$1 + ", ";
        var v545 = matchPosition - shiftValue;
        var v234 = v545 + 1;
        tempString$$1 = v233 + v234;
      }
      var v546 = matchExp.lastIndex;
      var v717 = RegExp.lastMatch;
      var v547 = v717.length;
      var v236 = v546 - v547;
      matchExp.lastIndex = v236 + 1;
      v237 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v548 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p15);
    var v238 = v548 != -1;
    if (v238) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p16);
    }
    var v242 = timesFound == 0;
    if (v242) {
      backGroundClass = "none";
    } else {
      var v241 = timesFound == 1;
      if (v241) {
        backGroundClass = "one";
      } else {
        var v240 = timesFound == 2;
        if (v240) {
          backGroundClass = "two";
        } else {
          var v239 = timesFound == 3;
          if (v239) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v243 = outputWindow.document;
    var v989 = '<tr><td class="' + backGroundClass;
    var v954 = v989 + '">';
    var v1048 = arrayOfItems[i$$9];
    var v1020 = JAM.call(v1048.match, v1048, [/\([^\(]+\)/], JAM.policy.p15);
    var v990 = v1020.toString();
    var v955 = JAM.call(v990.replace, v990, [/\(|\)/g, ""], JAM.policy.p16);
    var v916 = v954 + v955;
    var v874 = v916 + '</td><td class="';
    var v816 = v874 + backGroundClass;
    var v718 = v816 + '">';
    var v549 = v718 + tempString$$1;
    var v244 = v549 + "</td></tr>\n";
    JAM.call(v243.write, v243, [v244], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v550 = arrayOfItems.length;
    v245 = i$$9 < v550;
  }
  var v246 = outputWindow.document;
  JAM.call(v246.write, v246, ["</tbody></table>\n"], JAM.policy.p10);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v247 = outputWindow.document;
  JAM.call(v247.write, v247, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p10);
  var v248 = outputWindow.document;
  var v917 = '<tr><td class="title">' + "Pattern:";
  var v875 = v917 + '</td><td class="title">';
  var v817 = v875 + "Times found:";
  var v719 = v817 + '</td><td class="title">';
  var v551 = v719 + "Percentage:";
  var v249 = v551 + "</td></tr>\n";
  JAM.call(v248.write, v248, [v249], JAM.policy.p17);
  var i$$10 = 0;
  var v552 = arrayOfItems$$1.length;
  var v258 = i$$10 < v552;
  for (;v258;) {
    var tempNumber = 0;
    var v553 = arrayOfItems$$1[i$$10];
    var v250 = JAM.call(v553.match, v553, [/\/[^\/]+\//], JAM.policy.p15);
    var matchExp$$1 = v250 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v554 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v252 = v554 != -1;
    if (v252) {
      var v251 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v251.length;
    }
    var percentage = 0;
    var v720 = originalLength + 1;
    var v876 = arrayOfItems$$1[i$$10];
    var v818 = JAM.call(v876.match, v876, [/\d+/], JAM.policy.p15);
    var v721 = parseFloat(v818);
    var v555 = v720 - v721;
    var v255 = v555 > 0;
    if (v255) {
      var v253 = 100 * tempNumber;
      var v556 = originalLength + 1;
      var v819 = arrayOfItems$$1[i$$10];
      var v722 = JAM.call(v819.match, v819, [/\d+/], JAM.policy.p15);
      var v557 = parseFloat(v722);
      var v254 = v556 - v557;
      percentage = v253 / v254;
    }
    var v256 = outputWindow.document;
    var v1049 = arrayOfItems$$1[i$$10];
    var v1021 = JAM.call(v1049.match, v1049, [/\([^\(]+\)\b/], JAM.policy.p15);
    var v991 = v1021.toString();
    var v956 = JAM.call(v991.replace, v991, [/\(|\)/g, ""], JAM.policy.p16);
    var v918 = "<tr><td>" + v956;
    var v877 = v918 + "</td><td>";
    var v820 = v877 + tempNumber;
    var v723 = v820 + "</td><td>";
    var v724 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p11);
    var v558 = v723 + v724;
    var v257 = v558 + "</td></tr>\n";
    JAM.call(v256.write, v256, [v257], JAM.policy.p17);
    i$$10++;
    var v559 = arrayOfItems$$1.length;
    v258 = i$$10 < v559;
  }
  var v259 = outputWindow.document;
  JAM.call(v259.write, v259, ["</tbody></table>\n"], JAM.policy.p10);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v560 = sequence$$17.length;
  var v266 = v560 > 0;
  for (;v266;) {
    maxNum$$1 = sequence$$17.length;
    var v561 = Math.random();
    var v260 = v561 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v260], JAM.policy.p15);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p15);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v261 = randNum$$1 + 1;
    var v262 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v261, v262], JAM.policy.p16);
    sequence$$17 = tempString1 + tempString2;
    var v562 = tempSeq.length;
    var v265 = v562 == 60;
    if (v265) {
      var v263 = outputWindow.document;
      var v264 = tempSeq + "\n";
      JAM.call(v263.write, v263, [v264], JAM.policy.p17);
      tempSeq = "";
    }
    var v563 = sequence$$17.length;
    v266 = v563 > 0;
  }
  var v267 = outputWindow.document;
  var v268 = tempSeq + "\n";
  JAM.call(v267.write, v267, [v268], JAM.policy.p17);
  return true;
}
function getGeneticCodeString(type$$25) {
  var v725 = type$$25.toLowerCase();
  var v564 = v725 == "standard";
  var v727 = !v564;
  if (v727) {
    var v726 = type$$25.toLowerCase();
    v564 = v726 == "transl_table=1";
  }
  var v270 = v564;
  if (v270) {
    var v1232 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1215 = v1232 + "/ga[tcuy]/=D,";
    var v1198 = v1215 + "/ga[agr]/=E,";
    var v1180 = v1198 + "/[tu][tu][tcuy]/=F,";
    var v1161 = v1180 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1140 = v1161 + "/ca[tcuy]/=H,";
    var v1119 = v1140 + "/a[tu][atcuwmhy]/=I,";
    var v1098 = v1119 + "/aa[agr]/=K,";
    var v1074 = v1098 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1050 = v1074 + "/a[tu]g/=M,";
    var v1022 = v1050 + "/aa[tucy]/=N,";
    var v992 = v1022 + "/cc[acgturyswkmbdhvn]/=P,";
    var v957 = v992 + "/ca[agr]/=Q,";
    var v919 = v957 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v878 = v919 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v821 = v878 + "/ac[acgturyswkmbdhvn]/=T,";
    var v728 = v821 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v565 = v728 + "/[tu]gg/=W,";
    var v269 = v565 + "/[tu]a[ctuy]/=Y,";
    return v269 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v566 = type$$25.toLowerCase();
  var v272 = v566 == "transl_table=2";
  if (v272) {
    var v1233 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1216 = v1233 + "/ga[tcuy]/=D,";
    var v1199 = v1216 + "/ga[agr]/=E,";
    var v1181 = v1199 + "/[tu][tu][tcuy]/=F,";
    var v1162 = v1181 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1141 = v1162 + "/ca[tcuy]/=H,";
    var v1120 = v1141 + "/a[tu][tcuy]/=I,";
    var v1099 = v1120 + "/aa[agr]/=K,";
    var v1075 = v1099 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1051 = v1075 + "/a[tu][agr]/=M,";
    var v1023 = v1051 + "/aa[tucy]/=N,";
    var v993 = v1023 + "/cc[acgturyswkmbdhvn]/=P,";
    var v958 = v993 + "/ca[agr]/=Q,";
    var v920 = v958 + "/cg[acgturyswkmbdhvn]/=R,";
    var v879 = v920 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v822 = v879 + "/ac[acgturyswkmbdhvn]/=T,";
    var v729 = v822 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v567 = v729 + "/[tu]g[agr]/=W,";
    var v271 = v567 + "/[tu]a[ctuy]/=Y,";
    return v271 + "/[tu]a[agr]|ag[agr]/=*";
  }
  var v568 = type$$25.toLowerCase();
  var v274 = v568 == "transl_table=3";
  if (v274) {
    var v1234 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1217 = v1234 + "/ga[tcuy]/=D,";
    var v1200 = v1217 + "/ga[agr]/=E,";
    var v1182 = v1200 + "/[tu][tu][tcuy]/=F,";
    var v1163 = v1182 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1142 = v1163 + "/ca[tcuy]/=H,";
    var v1121 = v1142 + "/a[tu][tcuy]/=I,";
    var v1100 = v1121 + "/aa[agr]/=K,";
    var v1076 = v1100 + "/[tu][tu][agr]/=L,";
    var v1052 = v1076 + "/a[tu][agr]/=M,";
    var v1024 = v1052 + "/aa[tucy]/=N,";
    var v994 = v1024 + "/cc[acgturyswkmbdhvn]/=P,";
    var v959 = v994 + "/ca[agr]/=Q,";
    var v921 = v959 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v880 = v921 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v823 = v880 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v730 = v823 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v569 = v730 + "/[tu]g[agr]/=W,";
    var v273 = v569 + "/[tu]a[ctuy]/=Y,";
    return v273 + "/[tu]a[agr]/=*";
  }
  var v570 = type$$25.toLowerCase();
  var v276 = v570 == "transl_table=4";
  if (v276) {
    var v1235 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1218 = v1235 + "/ga[tcuy]/=D,";
    var v1201 = v1218 + "/ga[agr]/=E,";
    var v1183 = v1201 + "/[tu][tu][tcuy]/=F,";
    var v1164 = v1183 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1143 = v1164 + "/ca[tcuy]/=H,";
    var v1122 = v1143 + "/a[tu][atcuwmhy]/=I,";
    var v1101 = v1122 + "/aa[agr]/=K,";
    var v1077 = v1101 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1053 = v1077 + "/a[tu]g/=M,";
    var v1025 = v1053 + "/aa[tucy]/=N,";
    var v995 = v1025 + "/cc[acgturyswkmbdhvn]/=P,";
    var v960 = v995 + "/ca[agr]/=Q,";
    var v922 = v960 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v881 = v922 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v824 = v881 + "/ac[acgturyswkmbdhvn]/=T,";
    var v731 = v824 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v571 = v731 + "/[tu]g[agr]/=W,";
    var v275 = v571 + "/[tu]a[ctuy]/=Y,";
    return v275 + "/[tu]a[agr]/=*";
  }
  var v572 = type$$25.toLowerCase();
  var v278 = v572 == "transl_table=5";
  if (v278) {
    var v1236 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1219 = v1236 + "/ga[tcuy]/=D,";
    var v1202 = v1219 + "/ga[agr]/=E,";
    var v1184 = v1202 + "/[tu][tu][tcuy]/=F,";
    var v1165 = v1184 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1144 = v1165 + "/ca[tcuy]/=H,";
    var v1123 = v1144 + "/a[tu][tcuy]/=I,";
    var v1102 = v1123 + "/aa[agr]/=K,";
    var v1078 = v1102 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1054 = v1078 + "/a[tu][agr]/=M,";
    var v1026 = v1054 + "/aa[tucy]/=N,";
    var v996 = v1026 + "/cc[acgturyswkmbdhvn]/=P,";
    var v961 = v996 + "/ca[agr]/=Q,";
    var v923 = v961 + "/cg[acgturyswkmbdhvn]/=R,";
    var v882 = v923 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v825 = v882 + "/ac[acgturyswkmbdhvn]/=T,";
    var v732 = v825 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v573 = v732 + "/[tu]g[agr]/=W,";
    var v277 = v573 + "/[tu]a[ctuy]/=Y,";
    return v277 + "/[tu]a[agr]/=*";
  }
  var v574 = type$$25.toLowerCase();
  var v280 = v574 == "transl_table=6";
  if (v280) {
    var v1237 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1220 = v1237 + "/ga[tcuy]/=D,";
    var v1203 = v1220 + "/ga[agr]/=E,";
    var v1185 = v1203 + "/[tu][tu][tcuy]/=F,";
    var v1166 = v1185 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1145 = v1166 + "/ca[tcuy]/=H,";
    var v1124 = v1145 + "/a[tu][atcuwmhy]/=I,";
    var v1103 = v1124 + "/aa[agr]/=K,";
    var v1079 = v1103 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1055 = v1079 + "/a[tu]g/=M,";
    var v1027 = v1055 + "/aa[tucy]/=N,";
    var v997 = v1027 + "/cc[acgturyswkmbdhvn]/=P,";
    var v962 = v997 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v924 = v962 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v883 = v924 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v826 = v883 + "/ac[acgturyswkmbdhvn]/=T,";
    var v733 = v826 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v575 = v733 + "/[tu]gg/=W,";
    var v279 = v575 + "/[tu]a[ctuy]/=Y,";
    return v279 + "/[tu]ga/=*";
  }
  var v576 = type$$25.toLowerCase();
  var v282 = v576 == "transl_table=9";
  if (v282) {
    var v1238 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1221 = v1238 + "/ga[tcuy]/=D,";
    var v1204 = v1221 + "/ga[agr]/=E,";
    var v1186 = v1204 + "/[tu][tu][tcuy]/=F,";
    var v1167 = v1186 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1146 = v1167 + "/ca[tcuy]/=H,";
    var v1125 = v1146 + "/a[tu][atcuwmhy]/=I,";
    var v1104 = v1125 + "/aag/=K,";
    var v1080 = v1104 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1056 = v1080 + "/a[tu]g/=M,";
    var v1028 = v1056 + "/aa[atcuwmhy]/=N,";
    var v998 = v1028 + "/cc[acgturyswkmbdhvn]/=P,";
    var v963 = v998 + "/ca[agr]/=Q,";
    var v925 = v963 + "/cg[acgturyswkmbdhvn]/=R,";
    var v884 = v925 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v827 = v884 + "/ac[acgturyswkmbdhvn]/=T,";
    var v734 = v827 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v577 = v734 + "/[tu]g[agr]/=W,";
    var v281 = v577 + "/[tu]a[ctuy]/=Y,";
    return v281 + "/[tu]a[agr]/=*";
  }
  var v578 = type$$25.toLowerCase();
  var v284 = v578 == "transl_table=10";
  if (v284) {
    var v1239 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1222 = v1239 + "/ga[tcuy]/=D,";
    var v1205 = v1222 + "/ga[agr]/=E,";
    var v1187 = v1205 + "/[tu][tu][tcuy]/=F,";
    var v1168 = v1187 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1147 = v1168 + "/ca[tcuy]/=H,";
    var v1126 = v1147 + "/a[tu][atcuwmhy]/=I,";
    var v1105 = v1126 + "/aa[agr]/=K,";
    var v1081 = v1105 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1057 = v1081 + "/a[tu]g/=M,";
    var v1029 = v1057 + "/aa[tucy]/=N,";
    var v999 = v1029 + "/cc[acgturyswkmbdhvn]/=P,";
    var v964 = v999 + "/ca[agr]/=Q,";
    var v926 = v964 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v885 = v926 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v828 = v885 + "/ac[acgturyswkmbdhvn]/=T,";
    var v735 = v828 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v579 = v735 + "/[tu]gg/=W,";
    var v283 = v579 + "/[tu]a[ctuy]/=Y,";
    return v283 + "/[tu]a[agr]/=*";
  }
  var v580 = type$$25.toLowerCase();
  var v286 = v580 == "transl_table=11";
  if (v286) {
    var v1240 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1223 = v1240 + "/ga[tcuy]/=D,";
    var v1206 = v1223 + "/ga[agr]/=E,";
    var v1188 = v1206 + "/[tu][tu][tcuy]/=F,";
    var v1169 = v1188 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1148 = v1169 + "/ca[tcuy]/=H,";
    var v1127 = v1148 + "/a[tu][atcuwmhy]/=I,";
    var v1106 = v1127 + "/aa[agr]/=K,";
    var v1082 = v1106 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1058 = v1082 + "/a[tu]g/=M,";
    var v1030 = v1058 + "/aa[tucy]/=N,";
    var v1000 = v1030 + "/cc[acgturyswkmbdhvn]/=P,";
    var v965 = v1000 + "/ca[agr]/=Q,";
    var v927 = v965 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v886 = v927 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v829 = v886 + "/ac[acgturyswkmbdhvn]/=T,";
    var v736 = v829 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v581 = v736 + "/[tu]gg/=W,";
    var v285 = v581 + "/[tu]a[ctuy]/=Y,";
    return v285 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v582 = type$$25.toLowerCase();
  var v288 = v582 == "transl_table=12";
  if (v288) {
    var v1241 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1224 = v1241 + "/ga[tcuy]/=D,";
    var v1207 = v1224 + "/ga[agr]/=E,";
    var v1189 = v1207 + "/[tu][tu][tcuy]/=F,";
    var v1170 = v1189 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1149 = v1170 + "/ca[tcuy]/=H,";
    var v1128 = v1149 + "/a[tu][atcuwmhy]/=I,";
    var v1107 = v1128 + "/aa[agr]/=K,";
    var v1083 = v1107 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1059 = v1083 + "/a[tu]g/=M,";
    var v1031 = v1059 + "/aa[tucy]/=N,";
    var v1001 = v1031 + "/cc[acgturyswkmbdhvn]/=P,";
    var v966 = v1001 + "/ca[agr]/=Q,";
    var v928 = v966 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v887 = v928 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v830 = v887 + "/ac[acgturyswkmbdhvn]/=T,";
    var v737 = v830 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v583 = v737 + "/[tu]gg/=W,";
    var v287 = v583 + "/[tu]a[ctuy]/=Y,";
    return v287 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*";
  }
  var v584 = type$$25.toLowerCase();
  var v290 = v584 == "transl_table=13";
  if (v290) {
    var v1242 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1225 = v1242 + "/ga[tcuy]/=D,";
    var v1208 = v1225 + "/ga[agr]/=E,";
    var v1190 = v1208 + "/[tu][tu][tcuy]/=F,";
    var v1171 = v1190 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1150 = v1171 + "/ca[tcuy]/=H,";
    var v1129 = v1150 + "/a[tu][tcuy]/=I,";
    var v1108 = v1129 + "/aa[agr]/=K,";
    var v1084 = v1108 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1060 = v1084 + "/a[tu][agr]/=M,";
    var v1032 = v1060 + "/aa[tucy]/=N,";
    var v1002 = v1032 + "/cc[acgturyswkmbdhvn]/=P,";
    var v967 = v1002 + "/ca[agr]/=Q,";
    var v929 = v967 + "/cg[acgturyswkmbdhvn]/=R,";
    var v888 = v929 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v831 = v888 + "/ac[acgturyswkmbdhvn]/=T,";
    var v738 = v831 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v585 = v738 + "/[tu]g[agr]/=W,";
    var v289 = v585 + "/[tu]a[ctuy]/=Y,";
    return v289 + "/[tu]a[agr]/=*";
  }
  var v586 = type$$25.toLowerCase();
  var v292 = v586 == "transl_table=14";
  if (v292) {
    var v1243 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1226 = v1243 + "/ga[tcuy]/=D,";
    var v1209 = v1226 + "/ga[agr]/=E,";
    var v1191 = v1209 + "/[tu][tu][tcuy]/=F,";
    var v1172 = v1191 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1151 = v1172 + "/ca[tcuy]/=H,";
    var v1130 = v1151 + "/a[tu][atcuwmhy]/=I,";
    var v1109 = v1130 + "/aag/=K,";
    var v1085 = v1109 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1061 = v1085 + "/a[tu]g/=M,";
    var v1033 = v1061 + "/aa[atcuwmhy]/=N,";
    var v1003 = v1033 + "/cc[acgturyswkmbdhvn]/=P,";
    var v968 = v1003 + "/ca[agr]/=Q,";
    var v930 = v968 + "/cg[acgturyswkmbdhvn]/=R,";
    var v889 = v930 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v832 = v889 + "/ac[acgturyswkmbdhvn]/=T,";
    var v739 = v832 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v587 = v739 + "/[tu]g[agr]/=W,";
    var v291 = v587 + "/[tu]a[atcuwmhy]/=Y,";
    return v291 + "/[tu]ag/=*";
  }
  var v588 = type$$25.toLowerCase();
  var v294 = v588 == "transl_table=15";
  if (v294) {
    var v1244 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1227 = v1244 + "/ga[tcuy]/=D,";
    var v1210 = v1227 + "/ga[agr]/=E,";
    var v1192 = v1210 + "/[tu][tu][tcuy]/=F,";
    var v1173 = v1192 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1152 = v1173 + "/ca[tcuy]/=H,";
    var v1131 = v1152 + "/a[tu][atcuwmhy]/=I,";
    var v1110 = v1131 + "/aa[agr]/=K,";
    var v1086 = v1110 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1062 = v1086 + "/a[tu]g/=M,";
    var v1034 = v1062 + "/aa[tucy]/=N,";
    var v1004 = v1034 + "/cc[acgturyswkmbdhvn]/=P,";
    var v969 = v1004 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v931 = v969 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v890 = v931 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v833 = v890 + "/ac[acgturyswkmbdhvn]/=T,";
    var v740 = v833 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v589 = v740 + "/[tu]gg/=W,";
    var v293 = v589 + "/[tu]a[ctuy]/=Y,";
    return v293 + "/[tu][agr]a/=*";
  }
  var v590 = type$$25.toLowerCase();
  var v296 = v590 == "transl_table=16";
  if (v296) {
    var v1245 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1228 = v1245 + "/ga[tcuy]/=D,";
    var v1211 = v1228 + "/ga[agr]/=E,";
    var v1193 = v1211 + "/[tu][tu][tcuy]/=F,";
    var v1174 = v1193 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1153 = v1174 + "/ca[tcuy]/=H,";
    var v1132 = v1153 + "/a[tu][atcuwmhy]/=I,";
    var v1111 = v1132 + "/aa[agr]/=K,";
    var v1087 = v1111 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1063 = v1087 + "/a[tu]g/=M,";
    var v1035 = v1063 + "/aa[tucy]/=N,";
    var v1005 = v1035 + "/cc[acgturyswkmbdhvn]/=P,";
    var v970 = v1005 + "/ca[agr]/=Q,";
    var v932 = v970 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v891 = v932 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v834 = v891 + "/ac[acgturyswkmbdhvn]/=T,";
    var v741 = v834 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v591 = v741 + "/[tu]gg/=W,";
    var v295 = v591 + "/[tu]a[ctuy]/=Y,";
    return v295 + "/[tu][agr]a/=*";
  }
  var v592 = type$$25.toLowerCase();
  var v298 = v592 == "transl_table=21";
  if (v298) {
    var v1246 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1229 = v1246 + "/ga[tcuy]/=D,";
    var v1212 = v1229 + "/ga[agr]/=E,";
    var v1194 = v1212 + "/[tu][tu][tcuy]/=F,";
    var v1175 = v1194 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1154 = v1175 + "/ca[tcuy]/=H,";
    var v1133 = v1154 + "/a[tu][tcuy]/=I,";
    var v1112 = v1133 + "/aag/=K,";
    var v1088 = v1112 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1064 = v1088 + "/a[tu][agr]/=M,";
    var v1036 = v1064 + "/aa[atcuwmhy]/=N,";
    var v1006 = v1036 + "/cc[acgturyswkmbdhvn]/=P,";
    var v971 = v1006 + "/ca[agr]/=Q,";
    var v933 = v971 + "/cg[acgturyswkmbdhvn]/=R,";
    var v892 = v933 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v835 = v892 + "/ac[acgturyswkmbdhvn]/=T,";
    var v742 = v835 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v593 = v742 + "/[tu]g[agr]/=W,";
    var v297 = v593 + "/[tu]a[ctuy]/=Y,";
    return v297 + "/[tu]a[agr]/=*";
  }
  var v594 = type$$25.toLowerCase();
  var v300 = v594 == "transl_table=22";
  if (v300) {
    var v1247 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1230 = v1247 + "/ga[tcuy]/=D,";
    var v1213 = v1230 + "/ga[agr]/=E,";
    var v1195 = v1213 + "/[tu][tu][tcuy]/=F,";
    var v1176 = v1195 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1155 = v1176 + "/ca[tcuy]/=H,";
    var v1134 = v1155 + "/a[tu][atcuwmhy]/=I,";
    var v1113 = v1134 + "/aa[agr]/=K,";
    var v1089 = v1113 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1065 = v1089 + "/a[tu]g/=M,";
    var v1037 = v1065 + "/aa[tucy]/=N,";
    var v1007 = v1037 + "/cc[acgturyswkmbdhvn]/=P,";
    var v972 = v1007 + "/ca[agr]/=Q,";
    var v934 = v972 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v893 = v934 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v836 = v893 + "/ac[acgturyswkmbdhvn]/=T,";
    var v743 = v836 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v595 = v743 + "/[tu]gg/=W,";
    var v299 = v595 + "/[tu]a[ctuy]/=Y,";
    return v299 + "/[tu][agcrsmv]a/=*";
  }
  var v596 = type$$25.toLowerCase();
  var v302 = v596 == "transl_table=23";
  if (v302) {
    var v1248 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1231 = v1248 + "/ga[tcuy]/=D,";
    var v1214 = v1231 + "/ga[agr]/=E,";
    var v1196 = v1214 + "/[tu][tu][tcuy]/=F,";
    var v1177 = v1196 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1156 = v1177 + "/ca[tcuy]/=H,";
    var v1135 = v1156 + "/a[tu][atcuwmhy]/=I,";
    var v1114 = v1135 + "/aa[agr]/=K,";
    var v1090 = v1114 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1066 = v1090 + "/a[tu]g/=M,";
    var v1038 = v1066 + "/aa[tucy]/=N,";
    var v1008 = v1038 + "/cc[acgturyswkmbdhvn]/=P,";
    var v973 = v1008 + "/ca[agr]/=Q,";
    var v935 = v973 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v894 = v935 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v837 = v894 + "/ac[acgturyswkmbdhvn]/=T,";
    var v744 = v837 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v597 = v744 + "/[tu]gg/=W,";
    var v301 = v597 + "/[tu]a[ctuy]/=Y,";
    return v301 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*";
  }
  return true;
}
function codonUsage(theDocument) {
  JAM.startProfile('compute');

  var newDna = "";
  var maxInput$$3 = 5E5;
  var codonTable$$1;
  var v598 = testScript();
  var v303 = v598 == false;
  if (v303) {
    return false;
  }
  var v974 = theDocument.forms;
  var v936 = v974[0];
  var v895 = v936.elements;
  var v838 = v895[0];
  var v745 = checkFormElement(v838);
  var v599 = v745 == false;
  var v747 = !v599;
  if (v747) {
    var v1009 = theDocument.forms;
    var v975 = v1009[0];
    var v937 = v975.elements;
    var v896 = v937[0];
    var v839 = v896.value;
    var v746 = JAM.call(checkTextLength, null, [v839, maxInput$$3], JAM.policy.p19);
    v599 = v746 == false;
  }
  var v304 = v599;
  if (v304) {
    return false;
  }
  var v976 = theDocument.forms;
  var v938 = v976[0];
  var v897 = v938.elements;
  var v840 = v897[4];
  var v748 = v840.options;
  var v977 = theDocument.forms;
  var v939 = v977[0];
  var v898 = v939.elements;
  var v841 = v898[4];
  var v749 = v841.selectedIndex;
  var v600 = v748[v749];
  var v305 = v600.value;
  var geneticCode = getGeneticCodeString(v305);
  geneticCode = JAM.call(geneticCode.split, geneticCode, [/,/], JAM.policy.p15);
  var v601 = checkGeneticCode(geneticCode);
  var v306 = v601 == false;
  if (v306) {
    return false;
  }
  codonTable$$1 = makeCodonTable(geneticCode);
  var v307 = codonTable$$1 == false;
  if (v307) {
    return false;
  }
  resetCounts(codonTable$$1);
  openWindow("Codon Usage");
  openPre();
  var v899 = theDocument.forms;
  var v842 = v899[0];
  var v750 = v842.elements;
  var v602 = v750[0];
  var v308 = v602.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v308);
  var i$$11 = 0;
  var v603 = arrayOfFasta$$1.length;
  var v314 = i$$11 < v603;
  for (;v314;) {
    var v309 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v309);
    var v310 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v310);
    newDna = removeNonDna(newDna);
    var v311 = outputWindow.document;
    var v312 = JAM.call(getInfoFromTitleAndSequence, null, [title, newDna], JAM.policy.p19);
    JAM.call(v311.write, v311, [v312], JAM.policy.p17);
    JAM.call(addCodons, null, [codonTable$$1, newDna], JAM.policy.p19);
    codonTable$$1.determineValues();
    writeCodonTable(codonTable$$1);
    resetCounts(codonTable$$1);
    var v313 = outputWindow.document;
    JAM.call(v313.write, v313, ["\n\n"], JAM.policy.p10);
    i$$11++;
    var v604 = arrayOfFasta$$1.length;
    v314 = i$$11 < v604;
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function writeCodonTable(codonTable$$2) {
  var v315 = outputWindow.document;
  var v940 = rightNum("AmAcid", "", 6, "");
  var v941 = rightNum("Codon", "", 7, "");
  var v900 = v940 + v941;
  var v901 = rightNum("Number", "", 10, "");
  var v843 = v900 + v901;
  var v844 = rightNum("/1000", "", 12, "");
  var v751 = v843 + v844;
  var v752 = rightNum("Fraction   ..", "", 17, "");
  var v605 = v751 + v752;
  var v316 = v605 + "\n\n";
  JAM.call(v315.write, v315, [v316], JAM.policy.p17);
  var i$$12 = 0;
  var v753 = codonTable$$2.aminoAcids;
  var v606 = v753.length;
  var v322 = i$$12 < v606;
  for (;v322;) {
    var v607 = codonTable$$2.aminoAcids;
    var v317 = v607[i$$12];
    arrayOfCodons = v317.codons;
    var j$$10 = 0;
    var v608 = arrayOfCodons.length;
    var v320 = j$$10 < v608;
    for (;v320;) {
      var v318 = outputWindow.document;
      var v1039 = codonTable$$2.aminoAcids;
      var v1010 = v1039[i$$12];
      var v978 = v1010.name;
      var v942 = rightNum(v978, "", 3, "");
      var v1040 = arrayOfCodons[j$$10];
      var v1011 = v1040.sequence;
      var v979 = v1011.toUpperCase();
      var v943 = rightNum(v979, "", 8, "");
      var v902 = v942 + v943;
      var v1012 = arrayOfCodons[j$$10];
      var v980 = v1012.number;
      var v944 = JAM.call(v980.toFixed, v980, [2], JAM.policy.p11);
      var v903 = rightNum(v944, "", 12, "");
      var v845 = v902 + v903;
      var v981 = arrayOfCodons[j$$10];
      var v945 = v981.perThou;
      var v904 = JAM.call(v945.toFixed, v945, [2], JAM.policy.p11);
      var v846 = rightNum(v904, "", 12, "");
      var v754 = v845 + v846;
      var v946 = arrayOfCodons[j$$10];
      var v905 = v946.fraction;
      var v847 = JAM.call(v905.toFixed, v905, [2], JAM.policy.p11);
      var v755 = rightNum(v847, "", 12, "");
      var v609 = v754 + v755;
      var v319 = v609 + "\n";
      JAM.call(v318.write, v318, [v319], JAM.policy.p17);
      j$$10++;
      var v610 = arrayOfCodons.length;
      v320 = j$$10 < v610;
    }
    var v321 = outputWindow.document;
    JAM.call(v321.write, v321, ["\n"], JAM.policy.p10);
    i$$12++;
    var v756 = codonTable$$2.aminoAcids;
    var v611 = v756.length;
    v322 = i$$12 < v611;
  }
  return;
}
function addCodons(codonTable$$3, dnaSequence$$3) {
  function v2(str$$8, p1$$2, offset$$10, s$$4) {
    var v323 = " " + p1$$2;
    return v323 + " ";
  }
  dnaSequence$$3 = JAM.call(dnaSequence$$3.replace, dnaSequence$$3, [/u/gi, "t"], JAM.policy.p16);
  dnaSequence$$3 = JAM.call(dnaSequence$$3.replace, dnaSequence$$3, [/(...)/g, v2], JAM.policy.p16);
  var matchExp$$2;
  var arrayOfCodons$$1;
  var i$$13 = 0;
  var v757 = codonTable$$3.aminoAcids;
  var v612 = v757.length;
  var v329 = i$$13 < v612;
  for (;v329;) {
    var v613 = codonTable$$3.aminoAcids;
    var v324 = v613[i$$13];
    arrayOfCodons$$1 = v324.codons;
    var j$$11 = 0;
    var v614 = arrayOfCodons$$1.length;
    var v328 = j$$11 < v614;
    for (;v328;) {
      var v615 = arrayOfCodons$$1[j$$11];
      var v325 = v615.sequence;
      matchExp$$2 = new RegExp(v325, "gi");
      var v616 = JAM.call(dnaSequence$$3.search, dnaSequence$$3, [matchExp$$2], JAM.policy.p17);
      var v327 = v616 != -1;
      if (v327) {
        var v326 = arrayOfCodons$$1[j$$11];
        var v758 = arrayOfCodons$$1[j$$11];
        var v617 = v758.number;
        var v759 = JAM.call(dnaSequence$$3.match, dnaSequence$$3, [matchExp$$2], JAM.policy.p17);
        var v618 = v759.length;
        v326.number = v617 + v618;
      }
      j$$11++;
      var v619 = arrayOfCodons$$1.length;
      v328 = j$$11 < v619;
    }
    i$$13++;
    var v760 = codonTable$$3.aminoAcids;
    var v620 = v760.length;
    v329 = i$$13 < v620;
  }
  return;
}
function resetCounts(codonTable$$4) {
  var i$$14 = 0;
  var v761 = codonTable$$4.aminoAcids;
  var v621 = v761.length;
  var v333 = i$$14 < v621;
  for (;v333;) {
    var v622 = codonTable$$4.aminoAcids;
    var v330 = v622[i$$14];
    arrayOfCodons = v330.codons;
    var j$$12 = 0;
    var v623 = arrayOfCodons.length;
    var v332 = j$$12 < v623;
    for (;v332;) {
      var v331 = arrayOfCodons[j$$12];
      v331.resetValues();
      j$$12++;
      var v624 = arrayOfCodons.length;
      v332 = j$$12 < v624;
    }
    i$$14++;
    var v762 = codonTable$$4.aminoAcids;
    var v625 = v762.length;
    v333 = i$$14 < v625;
  }
  return;
}
function makeCodonTable(geneticCode$$1) {
  function v3(str$$9, p1$$3, offset$$11, s$$5) {
    var v334 = " " + p1$$3;
    return v334 + " ";
  }
  var codonSequence = "gggggaggtggcgaggaagatgacgtggtagttgtcgcggcagctgccaggagaagtagcaagaaaaataacatgataattatcacgacaactacctggtgatgttgctagtaatattacttgttatttttctcgtcatcttcccggcgacgtcgccagcaacatcacctgctacttctcccgccacctccc";
  var proteinSequence$$1;
  var codonTable$$5 = new CodonTable;
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  codonSequence = JAM.call(codonSequence.replace, codonSequence, [/(...)/g, v3], JAM.policy.p16);
  var codonSequenceCopy = codonSequence;
  var i$$15 = 0;
  var v626 = geneticCodeMatchExp$$2.length;
  var v337 = i$$15 < v626;
  for (;v337;) {
    var v335 = geneticCodeMatchExp$$2[i$$15];
    var v336 = geneticCodeMatchResult$$2[i$$15];
    codonSequence = JAM.call(codonSequence.replace, codonSequence, [v335, v336], JAM.policy.p21);
    i$$15++;
    var v627 = geneticCodeMatchExp$$2.length;
    v337 = i$$15 < v627;
  }
  var codonArray = JAM.call(codonSequenceCopy.split, codonSequenceCopy, [/\s+/], JAM.policy.p15);
  codonSequence = JAM.call(codonSequence.replace, codonSequence, [/\*/g, "Z"], JAM.policy.p16);
  var proteinArray = JAM.call(codonSequence.split, codonSequence, [/\s+/], JAM.policy.p15);
  i$$15 = 0;
  var v628 = codonArray.length;
  var v341 = i$$15 < v628;
  for (;v341;) {
    var v763 = proteinArray[i$$15];
    var v629 = v763 == "";
    if (v629) {
      var v764 = codonArray[i$$15];
      v629 = v764 == "";
    }
    var v338 = v629;
    if (v338) {
      i$$15++;
      var v630 = codonArray.length;
      v341 = i$$15 < v630;
      continue;
    }
    var v631 = codonTable$$5;
    var v765 = proteinArray[i$$15];
    var v632 = v765.toLowerCase();
    var v339 = v631[v632];
    var v633 = codonArray[i$$15];
    var v340 = new Codon(v633, 0, 0, 0);
    JAM.call(v339.addCodon, v339, [v340], JAM.policy.p17);
    i$$15++;
    var v634 = codonArray.length;
    v341 = i$$15 < v634;
  }
  return codonTable$$5;
}
function determineValues() {
  var totalAminoAcids = 0;
  var aminoAcid = 0;
  var arrayOfCodons$$2;
  var i$$16 = 0;
  var v766 = this.aminoAcids;
  var v635 = v766.length;
  var v347 = i$$16 < v635;
  for (;v347;) {
    var v636 = this.aminoAcids;
    var v342 = v636[i$$16];
    arrayOfCodons$$2 = v342.codons;
    var j$$13 = 0;
    var v637 = arrayOfCodons$$2.length;
    var v345 = j$$13 < v637;
    for (;v345;) {
      var v638 = arrayOfCodons$$2[j$$13];
      var v343 = v638.number;
      totalAminoAcids = totalAminoAcids + v343;
      var v639 = arrayOfCodons$$2[j$$13];
      var v344 = v639.number;
      aminoAcid = aminoAcid + v344;
      j$$13++;
      var v640 = arrayOfCodons$$2.length;
      v345 = j$$13 < v640;
    }
    var v641 = this.aminoAcids;
    var v346 = v641[i$$16];
    v346.count = aminoAcid;
    aminoAcid = 0;
    i$$16++;
    var v767 = this.aminoAcids;
    var v642 = v767.length;
    v347 = i$$16 < v642;
  }
  i$$16 = 0;
  var v768 = this.aminoAcids;
  var v643 = v768.length;
  var v355 = i$$16 < v643;
  for (;v355;) {
    var v644 = this.aminoAcids;
    var v348 = v644[i$$16];
    arrayOfCodons$$2 = v348.codons;
    j$$13 = 0;
    var v645 = arrayOfCodons$$2.length;
    var v354 = j$$13 < v645;
    for (;v354;) {
      var v769 = arrayOfCodons$$2[j$$13];
      var v646 = v769.number;
      var v353 = v646 > 0;
      if (v353) {
        var v349 = arrayOfCodons$$2[j$$13];
        var v770 = arrayOfCodons$$2[j$$13];
        var v647 = v770.number;
        var v848 = this.aminoAcids;
        var v771 = v848[i$$16];
        var v648 = v771.count;
        v349.fraction = v647 / v648;
        var v350 = arrayOfCodons$$2[j$$13];
        var v849 = arrayOfCodons$$2[j$$13];
        var v772 = v849.number;
        var v649 = v772 / totalAminoAcids;
        v350.perThou = 1E3 * v649;
      } else {
        var v351 = arrayOfCodons$$2[j$$13];
        v351.fraction = 0;
        var v352 = arrayOfCodons$$2[j$$13];
        v352.perThou = 0;
      }
      j$$13++;
      var v650 = arrayOfCodons$$2.length;
      v354 = j$$13 < v650;
    }
    i$$16++;
    var v773 = this.aminoAcids;
    var v651 = v773.length;
    v355 = i$$16 < v651;
  }
  return;
}
function count() {
  var i$$17 = 0;
  var v774 = this.codons;
  var v652 = v774.length;
  var v358 = i$$17 < v652;
  for (;v358;) {
    var v356 = this.number;
    var v653 = this.codons;
    var v357 = v653[i$$17];
    this.number = v356 + v357;
    i$$17++;
    var v775 = this.codons;
    var v654 = v775.length;
    v358 = i$$17 < v654;
  }
  return;
}
function addCodon(codon$$1) {
  var v359 = this.codons;
  JAM.call(v359.push, v359, [codon$$1], JAM.policy.p17);
  return;
}
function AminoAcid(name$$30) {
  this.name = name$$30;
  var v1255 = new Array;
  this.codons = v1255;
  this.number = 0;
  return;
}
function CodonTable() {
  var v1256 = new AminoAcid("Ala");
  this.a = v1256;
  var v1257 = new AminoAcid("Cys");
  this.c = v1257;
  var v1258 = new AminoAcid("Asp");
  this.d = v1258;
  var v1259 = new AminoAcid("Glu");
  this.e = v1259;
  var v1260 = new AminoAcid("Phe");
  this.f = v1260;
  var v1261 = new AminoAcid("Gly");
  this.g = v1261;
  var v1262 = new AminoAcid("His");
  this.h = v1262;
  var v1263 = new AminoAcid("Ile");
  this.i = v1263;
  var v1264 = new AminoAcid("Lys");
  this.k = v1264;
  var v1265 = new AminoAcid("Leu");
  this.l = v1265;
  var v1266 = new AminoAcid("Met");
  this.m = v1266;
  var v1267 = new AminoAcid("Asn");
  this.n = v1267;
  var v1268 = new AminoAcid("Pro");
  this.p = v1268;
  var v1269 = new AminoAcid("Gln");
  this.q = v1269;
  var v1270 = new AminoAcid("Arg");
  this.r = v1270;
  var v1271 = new AminoAcid("Ser");
  this.s = v1271;
  var v1272 = new AminoAcid("Thr");
  this.t = v1272;
  var v1273 = new AminoAcid("Val");
  this.v = v1273;
  var v1274 = new AminoAcid("Trp");
  this.w = v1274;
  var v1275 = new AminoAcid("Tyr");
  this.y = v1275;
  var v1276 = new AminoAcid("End");
  this.z = v1276;
  this.ala = this.a;
  this.cys = this.c;
  this.asp = this.d;
  this.glu = this.e;
  this.phe = this.f;
  this.gly = this.g;
  this.his = this.h;
  this.ile = this.i;
  this.lys = this.k;
  this.leu = this.l;
  this.met = this.m;
  this.asn = this.n;
  this.pro = this.p;
  this.gln = this.q;
  this.arg = this.r;
  this.ser = this.s;
  this.thr = this.t;
  this.val = this.v;
  this.trp = this.w;
  this.tyr = this.y;
  this.end = this.z;
  var v360 = this.a;
  var v361 = this.c;
  var v362 = this.d;
  var v363 = this.e;
  var v364 = this.f;
  var v365 = this.g;
  var v366 = this.h;
  var v367 = this.i;
  var v368 = this.k;
  var v369 = this.l;
  var v370 = this.m;
  var v371 = this.n;
  var v372 = this.p;
  var v373 = this.q;
  var v374 = this.r;
  var v375 = this.s;
  var v376 = this.t;
  var v377 = this.v;
  var v378 = this.w;
  var v379 = this.y;
  var v380 = this.z;
  var v1277 = JAM.new(Array, [v360, v361, v362, v363, v364, v365, v366, v367, v368, v369, v370, v371, v372, v373, v374, v375, v376, v377, v378, v379, v380], JAM.policy.p19);
  this.aminoAcids = v1277;
  return;
}
function resetValues() {
  this.number = 0;
  this.perThou = 0;
  this.fraction = 0;
  return;
}
function Codon(sequence$$18, number, perThou, fraction) {
  var v1278 = sequence$$18.toLowerCase();
  this.sequence = v1278;
  this.number = number;
  this.perThou = perThou;
  this.fraction = fraction;
  return;
}
new AminoAcid("");
var v381 = AminoAcid.prototype;
v381.addCodon = addCodon;
var v382 = AminoAcid.prototype;
v382.count = count;
new CodonTable;
var v383 = CodonTable.prototype;
v383.determineValues = determineValues;
new Codon("", 0, 0, 0);
var v384 = Codon.prototype;
v384.resetValues = resetValues;
JAM.set(document, "onload", v4);
var v385 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p10);
JAM.set(v385, "onclick", v5);
var v386 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p10);
JAM.set(v386, "onclick", v6)

JAM.stopProfile('load');
