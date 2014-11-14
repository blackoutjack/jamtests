
JAM.startProfile('load');
function v12() {
  var v822 = document.forms;
  var v685 = v822[0];
  var v392 = v685.elements;
  var v13 = v392[0];
  v13.value = " ";
  var v823 = document.forms;
  var v686 = v823[0];
  var v393 = v686.elements;
  var v14 = v393[1];
  v14.value = " ";
  return;
}
function v11() {
  try {
    rangeExtract(document);
  } catch (e$$7) {
    var v15 = "The following error was encountered: " + e$$7;
    alert(v15);
  }
  return;
}
function v10() {
  var v394 = document.main_form;
  var v16 = v394.main_submit;
  v16.focus();
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p17);
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v17 = arrayOfSequences[0];
  var lengthOfAlign = v17.length;
  var v395 = arrayOfSequences.length;
  var v18 = v395 < 2;
  if (v18) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v396 = arrayOfTitles.length;
  var v20 = i$$1 < v396;
  for (;v20;) {
    var v918 = arrayOfTitles[i$$1];
    var v824 = JAM.call(v918.search, v918, [/\S/], JAM.policy.p15);
    var v687 = v824 == -1;
    var v826 = !v687;
    if (v826) {
      var v919 = arrayOfSequences[i$$1];
      var v825 = JAM.call(v919.search, v919, [/\S/], JAM.policy.p15);
      v687 = v825 == -1;
    }
    var v397 = v687;
    var v689 = !v397;
    if (v689) {
      var v827 = arrayOfSequences[i$$1];
      var v688 = v827.length;
      v397 = v688 != lengthOfAlign;
    }
    var v19 = v397;
    if (v19) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v398 = arrayOfTitles.length;
    v20 = i$$1 < v398;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v976 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p15);
  var v920 = v976 == -1;
  var v978 = !v920;
  if (v978) {
    var v977 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p15);
    v920 = v977 == -1;
  }
  var v828 = v920;
  var v922 = !v828;
  if (v922) {
    var v921 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p15);
    v828 = v921 == -1;
  }
  var v690 = v828;
  var v830 = !v690;
  if (v830) {
    var v829 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p15);
    v690 = v829 == -1;
  }
  var v399 = v690;
  var v692 = !v399;
  if (v692) {
    var v691 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p15);
    v399 = v691 == -1;
  }
  var v21 = v399;
  if (v21) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v693 = formElement.value;
  var v400 = JAM.call(v693.search, v693, [/\S/], JAM.policy.p15);
  var v22 = v400 == -1;
  if (v22) {
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
  var v401 = arrayOfPatterns.length;
  var v25 = z$$2 < v401;
  for (;v25;) {
    var v694 = arrayOfPatterns[z$$2];
    var v402 = JAM.call(v694.search, v694, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p15);
    var v23 = v402 == -1;
    if (v23) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v695 = arrayOfPatterns[z$$2];
    var v403 = moreExpressionCheck(v695);
    var v24 = v403 == false;
    if (v24) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v404 = arrayOfPatterns.length;
    v25 = z$$2 < v404;
  }
  var v26 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v26);
  var v27 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v27);
  var j = 0;
  var v405 = arrayOfPatterns.length;
  var v31 = j < v405;
  for (;v31;) {
    var v696 = arrayOfPatterns[j];
    var v406 = JAM.call(v696.match, v696, [/\/.+\//], JAM.policy.p15);
    var v28 = v406 + "gi";
    if (JAM.isEval(eval)) {
      var v1093 = eval("introspect(JAM.policy.pFull) { " + v28 + " }")
    } else {
      var v1093 = JAM.call(eval, null, [v28])
    }
    geneticCodeMatchExp[j] = v1093;
    var v407 = arrayOfPatterns[j];
    var v29 = JAM.call(v407.match, v407, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v1094 = v29.toString();
    geneticCodeMatchResult[j] = v1094;
    var v30 = geneticCodeMatchResult[j];
    var v1095 = JAM.call(v30.replace, v30, [/=/g, ""], JAM.policy.p17);
    geneticCodeMatchResult[j] = v1095;
    j++;
    var v408 = arrayOfPatterns.length;
    v31 = j < v408;
  }
  var i$$2 = 0;
  var v697 = testSequence.length;
  var v409 = v697 - 3;
  var v38 = i$$2 <= v409;
  for (;v38;) {
    var v32 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v32], JAM.policy.p17);
    j = 0;
    var v410 = geneticCodeMatchExp.length;
    var v36 = j < v410;
    for (;v36;) {
      var v698 = geneticCodeMatchExp[j];
      var v411 = JAM.call(codon.search, codon, [v698], JAM.policy.p16);
      var v35 = v411 != -1;
      if (v35) {
        var v34 = oneMatch == true;
        if (v34) {
          var v412 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v33 = v412 + ".";
          alert(v33);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v413 = geneticCodeMatchExp.length;
      v36 = j < v413;
    }
    var v37 = oneMatch == false;
    if (v37) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v699 = testSequence.length;
    var v414 = v699 - 3;
    v38 = i$$2 <= v414;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v415 = arrayOfPatterns$$1.length;
  var v40 = z$$3 < v415;
  for (;v40;) {
    var v700 = arrayOfPatterns$$1[z$$3];
    var v416 = JAM.call(v700.search, v700, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p15);
    var v39 = v416 != -1;
    if (v39) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v417 = arrayOfPatterns$$1.length;
    v40 = z$$3 < v417;
  }
  var i$$3 = 0;
  var v418 = arrayOfPatterns$$1.length;
  var v44 = i$$3 < v418;
  for (;v44;) {
    var v701 = arrayOfPatterns$$1[i$$3];
    var v419 = "[" + v701;
    var v41 = v419 + "]";
    var re = new RegExp(v41, "gi");
    var j$$1 = i$$3 + 1;
    var v420 = arrayOfPatterns$$1.length;
    var v43 = j$$1 < v420;
    for (;v43;) {
      var v702 = arrayOfPatterns$$1[j$$1];
      var v421 = JAM.call(v702.search, v702, [re], JAM.policy.p16);
      var v42 = v421 != -1;
      if (v42) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v422 = arrayOfPatterns$$1.length;
      v43 = j$$1 < v422;
    }
    i$$3++;
    var v423 = arrayOfPatterns$$1.length;
    v44 = i$$3 < v423;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v424 = arrayOfPatterns$$2.length;
  var v47 = z$$4 < v424;
  for (;v47;) {
    var v703 = arrayOfPatterns$$2[z$$4];
    var v425 = JAM.call(v703.search, v703, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p15);
    var v45 = v425 == -1;
    if (v45) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v704 = arrayOfPatterns$$2[z$$4];
    var v426 = moreExpressionCheck(v704);
    var v46 = v426 == false;
    if (v46) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v427 = arrayOfPatterns$$2.length;
    v47 = z$$4 < v427;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v831 = getSequenceFromFasta(text$$7);
  var v705 = JAM.call(v831.replace, v831, [/[^A-Za-z]/g, ""], JAM.policy.p17);
  var v428 = v705.length;
  var v49 = v428 > maxInput;
  if (v49) {
    var v429 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v48 = v429 + " characters.";
    alert(v48);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v430 = text$$8.length;
  var v51 = v430 > maxInput$$1;
  if (v51) {
    var v431 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v50 = v431 + " characters.";
    alert(v50);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p17);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p17);
  return dnaSequence;
}
function closeForm() {
  var v52 = outputWindow.document;
  JAM.call(v52.write, v52, ["</form>"], JAM.policy.p10);
  return true;
}
function closePre() {
  var v53 = outputWindow.document;
  JAM.call(v53.write, v53, ["</div>"], JAM.policy.p10);
  var v54 = outputWindow.document;
  JAM.call(v54.write, v54, ["</pre>\n"], JAM.policy.p10);
  return;
}
function closeTextArea() {
  var v55 = outputWindow.document;
  JAM.call(v55.write, v55, ["</textarea>"], JAM.policy.p10);
  return true;
}
function closeWindow() {
  var v56 = outputWindow.document;
  JAM.call(v56.write, v56, ["</body>\n</html>\n"], JAM.policy.p10);
  outputWindow.status = "Done.";
  var v57 = outputWindow.document;
  v57.close();
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p17);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p17);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p17);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p17);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p17);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p17);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p17);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p17);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p17);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p17);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p17);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p17);
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v432 = alignArray.length;
  var v58 = v432 < 3;
  if (v58) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v433 = alignArray.length;
  var v60 = i$$4 < v433;
  for (;v60;) {
    var v706 = alignArray[i$$4];
    var v434 = JAM.call(v706.search, v706, [/[^\s]+\s/], JAM.policy.p15);
    var v59 = v434 == -1;
    if (v59) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v435 = alignArray.length;
    v60 = i$$4 < v435;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p17);
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p17);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p17);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p17);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p17);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v436 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v63 = v436 != -1;
  if (v63) {
    var v62 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p16);
    for (;v62;) {
      var v61 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v61], JAM.policy.p16);
      v62 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p16);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v437 = sequence$$2.length;
  var v64 = "&gt;results for " + v437;
  var stringToReturn = v64 + " residue sequence ";
  var v438 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p15);
  var v66 = v438 != -1;
  if (v66) {
    var v439 = stringToReturn + '"';
    var v65 = v439 + fastaSequenceTitle;
    stringToReturn = v65 + '"';
  }
  var v440 = stringToReturn + ' starting "';
  var v441 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v67 = v440 + v441;
  stringToReturn = v67 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v442 = sequenceOne.length;
  var v68 = "Search results for " + v442;
  var stringToReturn$$1 = v68 + " residue sequence ";
  var v443 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p15);
  var v70 = v443 != -1;
  if (v70) {
    var v444 = stringToReturn$$1 + '"';
    var v69 = v444 + fastaSequenceTitleOne;
    stringToReturn$$1 = v69 + '"';
  }
  var v445 = stringToReturn$$1 + ' starting "';
  var v446 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v71 = v445 + v446;
  stringToReturn$$1 = v71 + '"\n';
  var v447 = stringToReturn$$1 + "and ";
  var v448 = sequenceTwo.length;
  var v72 = v447 + v448;
  stringToReturn$$1 = v72 + " residue sequence ";
  var v449 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p15);
  var v74 = v449 != -1;
  if (v74) {
    var v450 = stringToReturn$$1 + '"';
    var v73 = v450 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v73 + '"';
  }
  var v451 = stringToReturn$$1 + ' starting "';
  var v452 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v75 = v451 + v452;
  stringToReturn$$1 = v75 + '"';
  var v76 = '<div class="info">' + stringToReturn$$1;
  return v76 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v77 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v77);
  var j$$2 = 0;
  var v453 = arrayOfPatterns$$3.length;
  var v79 = j$$2 < v453;
  for (;v79;) {
    var v707 = arrayOfPatterns$$3[j$$2];
    var v454 = JAM.call(v707.match, v707, [/\/.+\//], JAM.policy.p15);
    var v78 = v454 + "gi";
    if (JAM.isEval(eval)) {
      var v1096 = eval("introspect(JAM.policy.pFull) { " + v78 + " }")
    } else {
      var v1096 = JAM.call(eval, null, [v78])
    }
    geneticCodeMatchExp$$1[j$$2] = v1096;
    j$$2++;
    var v455 = arrayOfPatterns$$3.length;
    v79 = j$$2 < v455;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v80 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v80);
  var j$$3 = 0;
  var v456 = arrayOfPatterns$$4.length;
  var v83 = j$$3 < v456;
  for (;v83;) {
    var v457 = arrayOfPatterns$$4[j$$3];
    var v81 = JAM.call(v457.match, v457, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v1097 = v81.toString();
    geneticCodeMatchResult$$1[j$$3] = v1097;
    var v82 = geneticCodeMatchResult$$1[j$$3];
    var v1098 = JAM.call(v82.replace, v82, [/=/g, ""], JAM.policy.p17);
    geneticCodeMatchResult$$1[j$$3] = v1098;
    j$$3++;
    var v458 = arrayOfPatterns$$4.length;
    v83 = j$$3 < v458;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v459 = sequence$$3.length;
  var v84 = "Results for " + v459;
  var stringToReturn$$2 = v84 + " residue sequence ";
  var v460 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p15);
  var v86 = v460 != -1;
  if (v86) {
    var v461 = stringToReturn$$2 + '"';
    var v85 = v461 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v85 + '"';
  }
  var v462 = stringToReturn$$2 + ' starting "';
  var v463 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v87 = v462 + v463;
  stringToReturn$$2 = v87 + '"';
  var v88 = '<div class="info">' + stringToReturn$$2;
  return v88 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v708 = "Results for " + topology;
  var v464 = v708 + " ";
  var v465 = sequence$$4.length;
  var v89 = v464 + v465;
  var stringToReturn$$3 = v89 + " residue sequence ";
  var v466 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p15);
  var v91 = v466 != -1;
  if (v91) {
    var v467 = stringToReturn$$3 + '"';
    var v90 = v467 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v90 + '"';
  }
  var v468 = stringToReturn$$3 + ' starting "';
  var v469 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v92 = v468 + v469;
  stringToReturn$$3 = v92 + '"';
  var v93 = '<div class="info">' + stringToReturn$$3;
  return v93 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v470 = sequenceOne$$1.length;
  var v94 = "Alignment results for " + v470;
  var stringToReturn$$4 = v94 + " residue sequence ";
  var v471 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p15);
  var v96 = v471 != -1;
  if (v96) {
    var v472 = stringToReturn$$4 + '"';
    var v95 = v472 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v95 + '"';
  }
  var v473 = stringToReturn$$4 + ' starting "';
  var v474 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v97 = v473 + v474;
  stringToReturn$$4 = v97 + '"\n';
  var v475 = stringToReturn$$4 + "and ";
  var v476 = sequenceTwo$$1.length;
  var v98 = v475 + v476;
  stringToReturn$$4 = v98 + " residue sequence ";
  var v477 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p15);
  var v100 = v477 != -1;
  if (v100) {
    var v478 = stringToReturn$$4 + '"';
    var v99 = v478 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v99 + '"';
  }
  var v479 = stringToReturn$$4 + ' starting "';
  var v480 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v101 = v479 + v480;
  stringToReturn$$4 = v101 + '"';
  var v102 = '<div class="info">' + stringToReturn$$4;
  return v102 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v104 = j$$4 < lengthOut;
  for (;v104;) {
    var v481 = Math.random();
    var v482 = components.length;
    var v103 = v481 * v482;
    tempNum = JAM.call(Math.floor, Math, [v103], JAM.policy.p15);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p16);
    j$$4++;
    v104 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p10);
}
function getSequenceFromFasta(sequenceRecord) {
  var v483 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v105 = v483 != -1;
  if (v105) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p17);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v484 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v107 = v484 != -1;
  if (v107) {
    var v106 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p17);
    fastaTitle = v106.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p17);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p17);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p17);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1071 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p15);
  var v1064 = v1071 != -1;
  var v1073 = !v1064;
  if (v1073) {
    var v1072 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p15);
    v1064 = v1072 != -1;
  }
  var v1055 = v1064;
  var v1066 = !v1055;
  if (v1066) {
    var v1065 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p15);
    v1055 = v1065 != -1;
  }
  var v1045 = v1055;
  var v1057 = !v1045;
  if (v1057) {
    var v1056 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p15);
    v1045 = v1056 != -1;
  }
  var v1033 = v1045;
  var v1047 = !v1033;
  if (v1047) {
    var v1046 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p15);
    v1033 = v1046 != -1;
  }
  var v1014 = v1033;
  var v1035 = !v1014;
  if (v1035) {
    var v1034 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p15);
    v1014 = v1034 != -1;
  }
  var v979 = v1014;
  var v1016 = !v979;
  if (v1016) {
    var v1015 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p15);
    v979 = v1015 != -1;
  }
  var v923 = v979;
  var v981 = !v923;
  if (v981) {
    var v980 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p15);
    v923 = v980 != -1;
  }
  var v832 = v923;
  var v925 = !v832;
  if (v925) {
    var v924 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p15);
    v832 = v924 != -1;
  }
  var v709 = v832;
  var v834 = !v709;
  if (v834) {
    var v833 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p15);
    v709 = v833 != -1;
  }
  var v485 = v709;
  var v711 = !v485;
  if (v711) {
    var v710 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p15);
    v485 = v710 != -1;
  }
  var v108 = v485;
  if (v108) {
    return false;
  }
  return true;
}
function openForm() {
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ['<form action="">\n'], JAM.policy.p10);
  return true;
}
function openPre() {
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ["<pre>"], JAM.policy.p10);
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ['<div class="pre">'], JAM.policy.p10);
  return;
}
function openTextArea() {
  var v112 = outputWindow.document;
  JAM.call(v112.write, v112, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p10);
  return true;
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v113 = outputWindow.document;
  var v835 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v712 = v835 + "<head>\n";
  var v486 = v712 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v486 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v113.write, v113, [v114], JAM.policy.p16);
  if (isColor) {
    var v115 = outputWindow.document;
    var v1086 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1082 = v1086 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1078 = v1082 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1074 = v1078 + "div.info {font-weight: bold}\n";
    var v1067 = v1074 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1058 = v1067 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1048 = v1058 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1036 = v1048 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1017 = v1036 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v982 = v1017 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v926 = v982 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v836 = v926 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v713 = v836 + "td.many {color: #000000}\n";
    var v487 = v713 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v116 = v487 + "</style>\n";
    JAM.call(v115.write, v115, [v116], JAM.policy.p16);
  } else {
    var v117 = outputWindow.document;
    var v1090 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1087 = v1090 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1083 = v1087 + "div.title {display: none}\n";
    var v1079 = v1083 + "div.info {font-weight: bold}\n";
    var v1075 = v1079 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1068 = v1075 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1059 = v1068 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1049 = v1059 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1037 = v1049 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1018 = v1037 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v983 = v1018 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v927 = v983 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v837 = v927 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v714 = v837 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v488 = v714 + "img {display: none}\n";
    var v118 = v488 + "</style>\n";
    JAM.call(v117.write, v117, [v118], JAM.policy.p16);
  }
  var v119 = outputWindow.document;
  var v838 = "</head>\n" + '<body class="main">\n';
  var v715 = v838 + '<div class="title">';
  var v489 = v715 + title$$7;
  var v120 = v489 + " results</div>\n";
  JAM.call(v119.write, v119, [v120], JAM.policy.p16);
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
  var v121 = outputWindow.document;
  var v839 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v716 = v839 + "<head>\n";
  var v490 = v716 + "<title>Sequence Manipulation Suite</title>\n";
  var v122 = v490 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v121.write, v121, [v122], JAM.policy.p16);
  if (isBackground) {
    var v123 = outputWindow.document;
    var v1088 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1084 = v1088 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1080 = v1084 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1076 = v1080 + "div.info {font-weight: bold}\n";
    var v1069 = v1076 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1060 = v1069 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1050 = v1060 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1038 = v1050 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1019 = v1038 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v984 = v1019 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v928 = v984 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v840 = v928 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v717 = v840 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v491 = v717 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v124 = v491 + "</style>\n";
    JAM.call(v123.write, v123, [v124], JAM.policy.p16);
  } else {
    var v125 = outputWindow.document;
    var v1092 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1091 = v1092 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1089 = v1091 + "div.title {display: none}\n";
    var v1085 = v1089 + "div.info {font-weight: bold}\n";
    var v1081 = v1085 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1077 = v1081 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1070 = v1077 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1061 = v1070 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1051 = v1061 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1039 = v1051 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1020 = v1039 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v985 = v1020 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v929 = v985 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v841 = v929 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v718 = v841 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v492 = v718 + "img {display: none}\n";
    var v126 = v492 + "</style>\n";
    JAM.call(v125.write, v125, [v126], JAM.policy.p16);
  }
  var v127 = outputWindow.document;
  var v842 = "</head>\n" + '<body class="main">\n';
  var v719 = v842 + '<div class="title">';
  var v493 = v719 + title$$9;
  var v128 = v493 + " results</div>\n";
  JAM.call(v127.write, v127, [v128], JAM.policy.p16);
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p17);
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p17);
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p17);
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p17);
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p17);
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p17);
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p17);
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p17);
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p17);
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  var v494 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p15);
  var v129 = v494 != -1;
  if (v129) {
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
  var v130 = j$$5 < lengthOfColumn;
  for (;v130;) {
    tempString = tempString + " ";
    j$$5++;
    v130 = j$$5 < lengthOfColumn;
  }
  var v131 = tempString + theNumber;
  theNumber = v131 + " ";
  var v132 = sequenceToAppend + theNumber;
  sequenceToAppend = v132 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p16);
  var v495 = testArray[0];
  var v133 = v495 != testString;
  if (v133) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v496 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p16);
  var v134 = v496 == -1;
  if (v134) {
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
  var v135 = !caughtException;
  if (v135) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p17);
  var v136 = testString != "1X2X3X";
  if (v136) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v497 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9);
  var v137 = v497 != 2489.824;
  if (v137) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v498 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9);
  var v138 = v498 != 2489.8;
  if (v138) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v499 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p15);
  var v139 = v499 == -1;
  if (v139) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v930 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p15);
  var v843 = v930 == -1;
  var v932 = !v843;
  if (v932) {
    var v931 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p15);
    v843 = v931 == -1;
  }
  var v720 = v843;
  var v845 = !v720;
  if (v845) {
    var v844 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p15);
    v720 = v844 == -1;
  }
  var v500 = v720;
  var v722 = !v500;
  if (v722) {
    var v721 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p15);
    v500 = v721 == -1;
  }
  var v140 = v500;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v501 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p15);
  var v141 = v501 == -1;
  if (v141) {
    alert("Please enter a number.");
    return false;
  }
  var v143 = theNumber$$2 > maxInput$$2;
  if (v143) {
    var v502 = "Please enter a number less than or equal to " + maxInput$$2;
    var v142 = v502 + ".";
    alert(v142);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v503 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p15);
  var v144 = v503 != -1;
  if (v144) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v504 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p15);
  var v145 = v504 != -1;
  if (v145) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v933 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p15);
  var v846 = v933 == -1;
  var v935 = !v846;
  if (v935) {
    var v934 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p15);
    v846 = v934 == -1;
  }
  var v723 = v846;
  var v848 = !v723;
  if (v848) {
    var v847 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p15);
    v723 = v847 == -1;
  }
  var v505 = v723;
  var v725 = !v505;
  if (v725) {
    var v724 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p15);
    v505 = v724 == -1;
  }
  var v146 = v505;
  if (v146) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v936 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p15);
  var v849 = v936 == -1;
  var v938 = !v849;
  if (v938) {
    var v937 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p15);
    v849 = v937 == -1;
  }
  var v726 = v849;
  var v851 = !v726;
  if (v851) {
    var v850 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p15);
    v726 = v850 == -1;
  }
  var v506 = v726;
  var v728 = !v506;
  if (v728) {
    var v727 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p15);
    v506 = v727 == -1;
  }
  var v147 = v506;
  if (v147) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v507 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p15);
  var v148 = v507 == -1;
  if (v148) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v939 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p15);
  var v852 = v939 == -1;
  var v941 = !v852;
  if (v941) {
    var v940 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p15);
    v852 = v940 == -1;
  }
  var v729 = v852;
  var v854 = !v729;
  if (v854) {
    var v853 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p15);
    v729 = v853 == -1;
  }
  var v508 = v729;
  var v731 = !v508;
  if (v731) {
    var v730 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p15);
    v508 = v730 == -1;
  }
  var v149 = v508;
  if (v149) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v509 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p15);
  var v150 = v509 == -1;
  if (v150) {
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
  var v157 = i$$5 < stopBase;
  for (;v157;) {
    var v151 = i$$5 + 1;
    lineOfText = rightNum(v151, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v510 = basePerLine / groupSize;
    var v154 = j$$6 <= v510;
    for (;v154;) {
      var v153 = k < groupSize;
      for (;v153;) {
        var v511 = k + i$$5;
        var v152 = JAM.call(text$$10.charAt, text$$10, [v511], JAM.policy.p16);
        lineOfText = lineOfText + v152;
        k = k + 1;
        v153 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v512 = basePerLine / groupSize;
      v154 = j$$6 <= v512;
    }
    var v155 = outputWindow.document;
    var v156 = lineOfText + "\n";
    JAM.call(v155.write, v155, [v156], JAM.policy.p16);
    lineOfText = "";
    v157 = i$$5 < stopBase;
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
    var v513 = adjustment < 0;
    if (v513) {
      v513 = adjusted >= 0;
    }
    var v158 = v513;
    if (v158) {
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
  var v191 = i$$6 < stopBase$$2;
  for (;v191;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v514 = basePerLine$$2 / groupSize$$2;
    var v167 = j$$7 <= v514;
    for (;v167;) {
      var v162 = k$$1 < groupSize$$2;
      for (;v162;) {
        var v515 = i$$6 + k$$1;
        var v159 = v515 >= stopBase$$2;
        if (v159) {
          break;
        }
        var v160 = lineOfText$$1;
        var v516 = k$$1 + i$$6;
        var v161 = JAM.call(text$$12.charAt, text$$12, [v516], JAM.policy.p16);
        lineOfText$$1 = v160 + v161;
        k$$1 = k$$1 + 1;
        v162 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v165 = numberPosition$$1 == "above";
      if (v165) {
        var v163 = aboveNum;
        var v517 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
        var v164 = rightNum(v517, "", groupSize$$2, tabIn$$3);
        aboveNum = v163 + v164;
      }
      var v166 = i$$6 >= stopBase$$2;
      if (v166) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v518 = basePerLine$$2 / groupSize$$2;
      v167 = j$$7 <= v518;
    }
    var v190 = numberPosition$$1 == "left";
    if (v190) {
      var v168 = outputWindow.document;
      var v855 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19);
      var v732 = rightNum(v855, "", 8, tabIn$$3);
      var v519 = v732 + lineOfText$$1;
      var v169 = v519 + "\n";
      JAM.call(v168.write, v168, [v169], JAM.policy.p16);
      var v173 = strands$$1 == "two";
      if (v173) {
        var v170 = outputWindow.document;
        var v856 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19);
        var v733 = rightNum(v856, "", 8, tabIn$$3);
        var v734 = complement(lineOfText$$1);
        var v520 = v733 + v734;
        var v171 = v520 + "\n";
        JAM.call(v170.write, v170, [v171], JAM.policy.p16);
        var v172 = outputWindow.document;
        JAM.call(v172.write, v172, ["\n"], JAM.policy.p10);
      }
    } else {
      var v189 = numberPosition$$1 == "right";
      if (v189) {
        var v174 = outputWindow.document;
        var v735 = lineOfText$$1;
        var v736 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
        var v521 = v735 + v736;
        var v175 = v521 + "\n";
        JAM.call(v174.write, v174, [v175], JAM.policy.p16);
        var v179 = strands$$1 == "two";
        if (v179) {
          var v176 = outputWindow.document;
          var v737 = complement(lineOfText$$1);
          var v738 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
          var v522 = v737 + v738;
          var v177 = v522 + "\n";
          JAM.call(v176.write, v176, [v177], JAM.policy.p16);
          var v178 = outputWindow.document;
          JAM.call(v178.write, v178, ["\n"], JAM.policy.p10);
        }
      } else {
        var v188 = numberPosition$$1 == "above";
        if (v188) {
          var v180 = outputWindow.document;
          var v181 = aboveNum + "\n";
          JAM.call(v180.write, v180, [v181], JAM.policy.p16);
          var v182 = outputWindow.document;
          var v183 = lineOfText$$1 + "\n";
          JAM.call(v182.write, v182, [v183], JAM.policy.p16);
          var v187 = strands$$1 == "two";
          if (v187) {
            var v184 = outputWindow.document;
            var v523 = complement(lineOfText$$1);
            var v185 = v523 + "\n";
            JAM.call(v184.write, v184, [v185], JAM.policy.p16);
            var v186 = outputWindow.document;
            JAM.call(v186.write, v186, ["\n"], JAM.policy.p10);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v191 = i$$6 < stopBase$$2;
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
  var v210 = i$$7 < stopBase$$3;
  for (;v210;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v524 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v524;
    for (;v198;) {
      var v194 = k$$2 < groupSize$$3;
      for (;v194;) {
        var v525 = i$$7 + k$$2;
        var v192 = v525 >= stopBase$$3;
        if (v192) {
          break;
        }
        var v526 = k$$2 + i$$7;
        var v193 = JAM.call(text$$13.charAt, text$$13, [v526], JAM.policy.p16);
        lineOfText$$2 = lineOfText$$2 + v193;
        k$$2 = k$$2 + 1;
        v194 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v196 = numberPosition$$2 == "above";
      if (v196) {
        var v195 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v195;
      }
      var v197 = i$$7 >= stopBase$$3;
      if (v197) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v527 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v527;
    }
    var v209 = numberPosition$$2 == "left";
    if (v209) {
      var v199 = outputWindow.document;
      var v739 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v528 = v739 + lineOfText$$2;
      var v200 = v528 + "\n";
      JAM.call(v199.write, v199, [v200], JAM.policy.p16);
    } else {
      var v208 = numberPosition$$2 == "right";
      if (v208) {
        var v201 = outputWindow.document;
        var v529 = lineOfText$$2 + i$$7;
        var v202 = v529 + "\n";
        JAM.call(v201.write, v201, [v202], JAM.policy.p16);
      } else {
        var v207 = numberPosition$$2 == "above";
        if (v207) {
          var v203 = outputWindow.document;
          var v204 = aboveNum$$1 + "\n";
          JAM.call(v203.write, v203, [v204], JAM.policy.p16);
          var v205 = outputWindow.document;
          var v206 = lineOfText$$2 + "\n";
          JAM.call(v205.write, v205, [v206], JAM.policy.p16);
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
  numMut = parseInt(numMut);
  firstIndexToMutate = parseInt(firstIndexToMutate);
  lastIndexToMutate = parseInt(lastIndexToMutate);
  var v857 = sequence$$13.length;
  var v740 = v857 <= firstIndexToMutate;
  var v858 = !v740;
  if (v858) {
    v740 = lastIndexToMutate < 0;
  }
  var v530 = v740;
  var v741 = !v530;
  if (v741) {
    v530 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v211 = v530;
  if (v211) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for (;v219;) {
    maxNum = sequence$$13.length;
    var v531 = Math.random();
    var v212 = v531 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v212], JAM.policy.p15);
    var v532 = randNum < firstIndexToMutate;
    var v742 = !v532;
    if (v742) {
      v532 = randNum > lastIndexToMutate;
    }
    var v213 = v532;
    if (v213) {
      numMut++;
      i$$8++;
      v219 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p15);
    needNewChar = true;
    for (;needNewChar;) {
      var v533 = Math.random();
      var v534 = components$$1.length;
      var v214 = v533 * v534;
      componentsIndex = JAM.call(Math.round, Math, [v214], JAM.policy.p15);
      var v535 = components$$1.length;
      var v215 = componentsIndex == v535;
      if (v215) {
        componentsIndex = 0;
      }
      var v536 = components$$1[componentsIndex];
      var v216 = v536 != currentChar;
      if (v216) {
        needNewChar = false;
      }
    }
    var v537 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v538 = components$$1[componentsIndex];
    var v217 = v537 + v538;
    var v539 = randNum + 1;
    var v540 = sequence$$13.length;
    var v218 = JAM.call(sequence$$13.substring, sequence$$13, [v539, v540], JAM.policy.p21);
    sequence$$13 = v217 + v218;
    i$$8++;
    v219 = i$$8 < numMut;
  }
  var v220 = outputWindow.document;
  var v221 = addReturns(sequence$$13);
  JAM.call(v220.write, v220, [v221], JAM.policy.p16);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v226 = j$$9 < lengthOut$$1;
  for (;v226;) {
    var v541 = Math.random();
    var v542 = components$$2.length;
    var v222 = v541 * v542;
    tempNum$$1 = JAM.call(Math.floor, Math, [v222], JAM.policy.p15);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v543 = sequence$$14.length;
    var v225 = v543 == 60;
    if (v225) {
      var v223 = outputWindow.document;
      var v224 = sequence$$14 + "\n";
      JAM.call(v223.write, v223, [v224], JAM.policy.p16);
      sequence$$14 = "";
    }
    j$$9++;
    v226 = j$$9 < lengthOut$$1;
  }
  var v227 = outputWindow.document;
  var v228 = sequence$$14 + "\n";
  JAM.call(v227.write, v227, [v228], JAM.policy.p16);
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
  var v232 = dnaConformation == "circular";
  if (v232) {
    var v229 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v229.length;
    var v859 = sequence$$15.length;
    var v743 = v859 - lookAhead;
    var v744 = sequence$$15.length;
    var v544 = JAM.call(sequence$$15.substring, sequence$$15, [v743, v744], JAM.policy.p21);
    var v230 = v544 + sequence$$15;
    var v231 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v233 = outputWindow.document;
  JAM.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p10);
  var v234 = outputWindow.document;
  var v860 = '<tr><td class="title" width="200px">' + "Site:";
  var v745 = v860 + '</td><td class="title">';
  var v545 = v745 + "Positions:";
  var v235 = v545 + "</td></tr>\n";
  JAM.call(v234.write, v234, [v235], JAM.policy.p16);
  var i$$9 = 0;
  var v546 = arrayOfItems.length;
  var v251 = i$$9 < v546;
  for (;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v547 = arrayOfItems[i$$9];
    var v236 = JAM.call(v547.match, v547, [/\/.+\//], JAM.policy.p15);
    matchExp = v236 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v861 = arrayOfItems[i$$9];
    var v746 = JAM.call(v861.match, v861, [/\)\D*\d+/], JAM.policy.p15);
    var v548 = v746.toString();
    var v237 = JAM.call(v548.replace, v548, [/\)\D*/, ""], JAM.policy.p17);
    cutDistance = parseFloat(v237);
    var v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
    for (;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v549 = matchPosition >= lowerLimit;
      if (v549) {
        v549 = matchPosition < upperLimit;
      }
      var v241 = v549;
      if (v241) {
        timesFound++;
        var v239 = tempString$$1 + ", ";
        var v550 = matchPosition - shiftValue;
        var v240 = v550 + 1;
        tempString$$1 = v239 + v240;
      }
      var v551 = matchExp.lastIndex;
      var v747 = RegExp.lastMatch;
      var v552 = v747.length;
      var v242 = v551 - v552;
      matchExp.lastIndex = v242 + 1;
      v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
    }
    var v553 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p15);
    var v244 = v553 != -1;
    if (v244) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p17);
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
    var v1040 = '<tr><td class="' + backGroundClass;
    var v1021 = v1040 + '">';
    var v1062 = arrayOfItems[i$$9];
    var v1052 = JAM.call(v1062.match, v1062, [/\([^\(]+\)/], JAM.policy.p15);
    var v1041 = v1052.toString();
    var v1022 = JAM.call(v1041.replace, v1041, [/\(|\)/g, ""], JAM.policy.p17);
    var v986 = v1021 + v1022;
    var v942 = v986 + '</td><td class="';
    var v862 = v942 + backGroundClass;
    var v748 = v862 + '">';
    var v554 = v748 + tempString$$1;
    var v250 = v554 + "</td></tr>\n";
    JAM.call(v249.write, v249, [v250], JAM.policy.p16);
    timesFound = 0;
    i$$9++;
    var v555 = arrayOfItems.length;
    v251 = i$$9 < v555;
  }
  var v252 = outputWindow.document;
  JAM.call(v252.write, v252, ["</tbody></table>\n"], JAM.policy.p10);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v253 = outputWindow.document;
  JAM.call(v253.write, v253, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p10);
  var v254 = outputWindow.document;
  var v987 = '<tr><td class="title">' + "Pattern:";
  var v943 = v987 + '</td><td class="title">';
  var v863 = v943 + "Times found:";
  var v749 = v863 + '</td><td class="title">';
  var v556 = v749 + "Percentage:";
  var v255 = v556 + "</td></tr>\n";
  JAM.call(v254.write, v254, [v255], JAM.policy.p16);
  var i$$10 = 0;
  var v557 = arrayOfItems$$1.length;
  var v264 = i$$10 < v557;
  for (;v264;) {
    var tempNumber = 0;
    var v558 = arrayOfItems$$1[i$$10];
    var v256 = JAM.call(v558.match, v558, [/\/[^\/]+\//], JAM.policy.p15);
    var matchExp$$1 = v256 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v559 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p16);
    var v258 = v559 != -1;
    if (v258) {
      var v257 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p16);
      tempNumber = v257.length;
    }
    var percentage = 0;
    var v750 = originalLength + 1;
    var v944 = arrayOfItems$$1[i$$10];
    var v864 = JAM.call(v944.match, v944, [/\d+/], JAM.policy.p15);
    var v751 = parseFloat(v864);
    var v560 = v750 - v751;
    var v261 = v560 > 0;
    if (v261) {
      var v259 = 100 * tempNumber;
      var v561 = originalLength + 1;
      var v865 = arrayOfItems$$1[i$$10];
      var v752 = JAM.call(v865.match, v865, [/\d+/], JAM.policy.p15);
      var v562 = parseFloat(v752);
      var v260 = v561 - v562;
      percentage = v259 / v260;
    }
    var v262 = outputWindow.document;
    var v1063 = arrayOfItems$$1[i$$10];
    var v1053 = JAM.call(v1063.match, v1063, [/\([^\(]+\)\b/], JAM.policy.p15);
    var v1042 = v1053.toString();
    var v1023 = JAM.call(v1042.replace, v1042, [/\(|\)/g, ""], JAM.policy.p17);
    var v988 = "<tr><td>" + v1023;
    var v945 = v988 + "</td><td>";
    var v866 = v945 + tempNumber;
    var v753 = v866 + "</td><td>";
    var v754 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9);
    var v563 = v753 + v754;
    var v263 = v563 + "</td></tr>\n";
    JAM.call(v262.write, v262, [v263], JAM.policy.p16);
    i$$10++;
    var v564 = arrayOfItems$$1.length;
    v264 = i$$10 < v564;
  }
  var v265 = outputWindow.document;
  JAM.call(v265.write, v265, ["</tbody></table>\n"], JAM.policy.p10);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v565 = sequence$$17.length;
  var v272 = v565 > 0;
  for (;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v566 = Math.random();
    var v266 = v566 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v266], JAM.policy.p15);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p15);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v267, v268], JAM.policy.p17);
    sequence$$17 = tempString1 + tempString2;
    var v567 = tempSeq.length;
    var v271 = v567 == 60;
    if (v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      JAM.call(v269.write, v269, [v270], JAM.policy.p16);
      tempSeq = "";
    }
    var v568 = sequence$$17.length;
    v272 = v568 > 0;
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  JAM.call(v273.write, v273, [v274], JAM.policy.p16);
  return true;
}
function rangeExtract(theDocument) {
  JAM.startProfile('compute');

  var newDna = "";
  var maxInput$$3 = 5E5;
  var matchFound = false;
  var ranges = new Array;
  var v569 = testScript();
  var v275 = v569 == false;
  if (v275) {
    return false;
  }
  var v1043 = theDocument.forms;
  var v1024 = v1043[0];
  var v989 = v1024.elements;
  var v946 = v989[0];
  var v867 = checkFormElement(v946);
  var v755 = v867 == false;
  var v869 = !v755;
  if (v869) {
    var v1054 = theDocument.forms;
    var v1044 = v1054[0];
    var v1025 = v1044.elements;
    var v990 = v1025[0];
    var v947 = v990.value;
    var v868 = JAM.call(checkSequenceLength, null, [v947, maxInput$$3], JAM.policy.p19);
    v755 = v868 == false;
  }
  var v570 = v755;
  var v757 = !v570;
  if (v757) {
    var v1026 = theDocument.forms;
    var v991 = v1026[0];
    var v948 = v991.elements;
    var v870 = v948[1];
    var v756 = checkFormElement(v870);
    v570 = v756 == false;
  }
  var v276 = v570;
  if (v276) {
    return false;
  }
  var v949 = theDocument.forms;
  var v871 = v949[0];
  var v758 = v871.elements;
  var v571 = v758[1];
  var v277 = v571.value;
  var arrayOfRanges = JAM.call(v277.split, v277, [/,/], JAM.policy.p15);
  var arrayOfStartAndEnd;
  var i$$11 = 0;
  var v572 = arrayOfRanges.length;
  var v283 = i$$11 < v572;
  for (;v283;) {
    var v278 = arrayOfRanges[i$$11];
    arrayOfStartAndEnd = JAM.call(v278.split, v278, [/\.\./], JAM.policy.p15);
    var v573 = arrayOfStartAndEnd.length;
    var v282 = v573 == 1;
    if (v282) {
      matchFound = true;
      var v574 = arrayOfStartAndEnd[0];
      var v575 = arrayOfStartAndEnd[0];
      var v279 = JAM.new(Range, [v574, v575], JAM.policy.p19);
      JAM.call(ranges.push, ranges, [v279], JAM.policy.p16);
    } else {
      var v576 = arrayOfStartAndEnd.length;
      var v281 = v576 == 2;
      if (v281) {
        matchFound = true;
        var v577 = arrayOfStartAndEnd[0];
        var v578 = arrayOfStartAndEnd[1];
        var v280 = JAM.new(Range, [v577, v578], JAM.policy.p19);
        JAM.call(ranges.push, ranges, [v280], JAM.policy.p16);
      }
    }
    i$$11++;
    var v579 = arrayOfRanges.length;
    v283 = i$$11 < v579;
  }
  var v284 = matchFound == false;
  if (v284) {
    alert("No ranges were entered.");
    return false;
  }
  openWindow("Range Extractor Protein");
  openPre();
  var v950 = theDocument.forms;
  var v872 = v950[0];
  var v759 = v872.elements;
  var v580 = v759[0];
  var v285 = v580.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v285);
  i$$11 = 0;
  var v581 = arrayOfFasta$$1.length;
  var v291 = i$$11 < v581;
  for (;v291;) {
    var v286 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v286);
    var v287 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v287);
    newProtein = removeNonProteinAllowDegen(newProtein);
    var v288 = outputWindow.document;
    var v289 = JAM.call(getFastaTitleFromTitleAndSequence, null, [title, newProtein], JAM.policy.p19);
    JAM.call(v288.write, v288, [v289], JAM.policy.p16);
    var v1027 = theDocument.forms;
    var v992 = v1027[0];
    var v951 = v992.elements;
    var v873 = v951[5];
    var v760 = v873.options;
    var v1028 = theDocument.forms;
    var v993 = v1028[0];
    var v952 = v993.elements;
    var v874 = v952[5];
    var v761 = v874.selectedIndex;
    var v582 = v760[v761];
    var v290 = v582.value;
    JAM.call(writeSequenceRanges, null, [newProtein, ranges, v290], JAM.policy.p19);
    i$$11++;
    var v583 = arrayOfFasta$$1.length;
    v291 = i$$11 < v583;
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function writeSequenceRanges(sequence$$18, ranges$$1, segmentType) {
  var rangeGroup = new RangeGroup(segmentType);
  var v584 = sequence$$18.length;
  var v292 = v584 / 2;
  var center_base = JAM.call(Math.round, Math, [v292], JAM.policy.p16);
  var i$$12 = 0;
  var v585 = ranges$$1.length;
  var v306 = i$$12 < v585;
  for (;v306;) {
    var v293 = ranges$$1[i$$12];
    var v875 = ranges$$1[i$$12];
    var v762 = v875.start;
    var v586 = v762.toString();
    var v1099 = JAM.call(v586.replace, v586, [/start|begin/gi, 1], JAM.policy.p17);
    v293.start = v1099;
    var v294 = ranges$$1[i$$12];
    var v876 = ranges$$1[i$$12];
    var v763 = v876.start;
    var v587 = v763.toString();
    var v588 = sequence$$18.length;
    var v1100 = JAM.call(v587.replace, v587, [/stop|end/gi, v588], JAM.policy.p17);
    v294.start = v1100;
    var v295 = ranges$$1[i$$12];
    var v877 = ranges$$1[i$$12];
    var v764 = v877.start;
    var v589 = v764.toString();
    var v590 = sequence$$18.length;
    var v1101 = JAM.call(v589.replace, v589, [/length/gi, v590], JAM.policy.p17);
    v295.start = v1101;
    var v296 = ranges$$1[i$$12];
    var v878 = ranges$$1[i$$12];
    var v765 = v878.start;
    var v591 = v765.toString();
    var v1102 = JAM.call(v591.replace, v591, [/middle|center|centre/gi, center_base], JAM.policy.p17);
    v296.start = v1102;
    var v297 = ranges$$1[i$$12];
    var v879 = ranges$$1[i$$12];
    var v766 = v879.stop;
    var v592 = v766.toString();
    var v1103 = JAM.call(v592.replace, v592, [/start|begin/gi, 1], JAM.policy.p17);
    v297.stop = v1103;
    var v298 = ranges$$1[i$$12];
    var v880 = ranges$$1[i$$12];
    var v767 = v880.stop;
    var v593 = v767.toString();
    var v594 = sequence$$18.length;
    var v1104 = JAM.call(v593.replace, v593, [/stop|end/gi, v594], JAM.policy.p17);
    v298.stop = v1104;
    var v299 = ranges$$1[i$$12];
    var v881 = ranges$$1[i$$12];
    var v768 = v881.stop;
    var v595 = v768.toString();
    var v596 = sequence$$18.length;
    var v1105 = JAM.call(v595.replace, v595, [/length/gi, v596], JAM.policy.p17);
    v299.stop = v1105;
    var v300 = ranges$$1[i$$12];
    var v882 = ranges$$1[i$$12];
    var v769 = v882.stop;
    var v597 = v769.toString();
    var v1106 = JAM.call(v597.replace, v597, [/middle|center|centre/gi, center_base], JAM.policy.p17);
    v300.stop = v1106;
    try {
      var v301 = ranges$$1[i$$12];
      var v953 = ranges$$1[i$$12];
      var v883 = v953.start;
      var v770 = v883.toString();
      if (JAM.isEval(eval)) {
        var v598 = eval("introspect(JAM.policy.pFull) { " + v770 + " }")
      } else {
        var v598 = JAM.call(eval, null, [v770])
      }
      var v1107 = parseInt(v598);
      v301.start = v1107;
    } catch (e$$5) {
      var v771 = ranges$$1[i$$12];
      var v599 = v771.start;
      var v302 = "Could not evaluate the following expression: " + v599;
      alert(v302);
      return false;
    }
    try {
      var v303 = ranges$$1[i$$12];
      var v954 = ranges$$1[i$$12];
      var v884 = v954.stop;
      var v772 = v884.toString();
      if (JAM.isEval(eval)) {
        var v600 = eval("introspect(JAM.policy.pFull) { " + v772 + " }")
      } else {
        var v600 = JAM.call(eval, null, [v772])
      }
      var v1108 = parseInt(v600);
      v303.stop = v1108;
    } catch (e$$6) {
      var v773 = ranges$$1[i$$12];
      var v601 = v773.stop;
      var v304 = "Could not evaluate the following expression: " + v601;
      alert(v304);
      return false;
    }
    var v305 = ranges$$1[i$$12];
    JAM.call(rangeGroup.addRange, rangeGroup, [v305], JAM.policy.p16);
    i$$12++;
    var v602 = ranges$$1.length;
    v306 = i$$12 < v602;
  }
  JAM.call(rangeGroup.writeRanges, rangeGroup, [sequence$$18], JAM.policy.p16);
  return;
}
function getSequence(sequence$$19) {
  var problem = false;
  var warnings = new Array;
  var v603 = this.start;
  var v604 = this.stop;
  var v321 = v603 == v604;
  if (v321) {
    var v605 = this.start;
    var v308 = v605 < 1;
    if (v308) {
      problem = true;
      var v774 = this.start;
      var v606 = "position value of " + v774;
      var v307 = v606 + " is less than 1";
      JAM.call(warnings.push, warnings, [v307], JAM.policy.p16);
    }
    var v607 = this.start;
    var v608 = sequence$$19.length;
    var v310 = v607 > v608;
    if (v310) {
      problem = true;
      var v775 = this.start;
      var v609 = "position value of " + v775;
      var v309 = v609 + " is greater than the sequence length";
      JAM.call(warnings.push, warnings, [v309], JAM.policy.p16);
    }
  } else {
    var v610 = this.start;
    var v312 = v610 < 1;
    if (v312) {
      problem = true;
      var v776 = this.start;
      var v611 = "position value of " + v776;
      var v311 = v611 + " is less than 1";
      JAM.call(warnings.push, warnings, [v311], JAM.policy.p16);
    }
    var v612 = this.stop;
    var v314 = v612 < 1;
    if (v314) {
      problem = true;
      var v777 = this.stop;
      var v613 = "position value of " + v777;
      var v313 = v613 + " is less than 1";
      JAM.call(warnings.push, warnings, [v313], JAM.policy.p16);
    }
    var v614 = this.start;
    var v615 = sequence$$19.length;
    var v316 = v614 > v615;
    if (v316) {
      problem = true;
      var v778 = this.start;
      var v616 = "position value of " + v778;
      var v315 = v616 + " is greater than the sequence length";
      JAM.call(warnings.push, warnings, [v315], JAM.policy.p16);
    }
    var v617 = this.stop;
    var v618 = sequence$$19.length;
    var v318 = v617 > v618;
    if (v318) {
      problem = true;
      var v779 = this.stop;
      var v619 = "position value of " + v779;
      var v317 = v619 + " is greater than the sequence length";
      JAM.call(warnings.push, warnings, [v317], JAM.policy.p16);
    }
    var v620 = this.start;
    var v621 = this.stop;
    var v320 = v620 > v621;
    if (v320) {
      problem = true;
      var v885 = this.start;
      var v780 = "stop position is less than start position in range " + v885;
      var v622 = v780 + " to ";
      var v623 = this.stop;
      var v319 = v622 + v623;
      JAM.call(warnings.push, warnings, [v319], JAM.policy.p16);
    }
  }
  if (problem) {
    var v624 = JAM.call(warnings.join, warnings, [",\n"], JAM.policy.p10);
    var v322 = "An entry was skipped because of the following:\n" + v624;
    alert(v322);
    return false;
  } else {
    var v625 = this.start;
    var v626 = this.stop;
    var v326 = v625 == v626;
    if (v326) {
      var v627 = this.start;
      var v323 = v627 - 1;
      return JAM.call(sequence$$19.charAt, sequence$$19, [v323], JAM.policy.p16);
    } else {
      var v628 = this.start;
      var v324 = v628 - 1;
      var v325 = this.stop;
      return JAM.call(sequence$$19.substring, sequence$$19, [v324, v325], JAM.policy.p21);
    }
  }
  return;
}
function getTitle() {
  var v629 = this.start;
  var v630 = this.stop;
  var v330 = v629 == v630;
  if (v330) {
    var v327 = this.start;
    return "&gt;residue " + v327;
  } else {
    var v781 = this.start;
    var v631 = "&gt;residue " + v781;
    var v328 = v631 + " to ";
    var v329 = this.stop;
    return v328 + v329;
  }
  return;
}
function Range(start$$4, stop) {
  this.start = start$$4;
  this.stop = stop;
  return;
}
function addRange(range$$5) {
  var v331 = this.ranges;
  JAM.call(v331.push, v331, [range$$5], JAM.policy.p16);
  return;
}
function writeRanges(sequence$$20) {
  function v9(str$$15, p1$$9, offset$$17, s$$11) {
    var v632 = p1$$9.length;
    var v332 = offset$$17 + v632;
    return JAM.call(sequence$$20.substring, sequence$$20, [offset$$17, v332], JAM.policy.p21);
  }
  function v8(str$$14, p1$$8, p2$$3, offset$$16, s$$10) {
    var v633 = p1$$8.length;
    var v782 = p1$$8.length;
    var v783 = p2$$3.length;
    var v634 = v782 + v783;
    var v333 = JAM.call(sequence$$20.substring, sequence$$20, [v633, v634], JAM.policy.p21);
    return p1$$8 + v333;
  }
  function v7(str$$13, p1$$7, offset$$15, s$$9) {
    var v334 = ["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"];
    var v335 = p1$$7.length;
    return JAM.call(getRandomSequence, null, [v334, v335], JAM.policy.p19);
  }
  function v6(str$$12, p1$$6, p2$$2, offset$$14, s$$8) {
    var v635 = ["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"];
    var v636 = p2$$2.length;
    var v336 = JAM.call(getRandomSequence, null, [v635, v636], JAM.policy.p19);
    return p1$$6 + v336;
  }
  function v5(str$$11, p1$$5, offset$$13, s$$7) {
    return p1$$5.toLowerCase();
  }
  function v4(str$$10, p1$$4, p2$$1, offset$$12, s$$6) {
    var v337 = p2$$1.toLowerCase();
    return p1$$4 + v337;
  }
  function v3(str$$9, p1$$3, offset$$11, s$$5) {
    return p1$$3.toUpperCase();
  }
  function v2(str$$8, p1$$2, p2, offset$$10, s$$4) {
    var v338 = p2.toUpperCase();
    return p1$$2 + v338;
  }
  var sequenceArray$$1 = new Array;
  var v637 = this.type;
  var v344 = v637 == "new_sequence";
  if (v344) {
    var i$$13 = 0;
    var v784 = this.ranges;
    var v638 = v784.length;
    var v341 = i$$13 < v638;
    for (;v341;) {
      var v886 = this.ranges;
      var v785 = v886[i$$13];
      var v639 = JAM.call(v785.getSequence, v785, [sequence$$20], JAM.policy.p16);
      var v340 = v639 != "";
      if (v340) {
        var v786 = this.ranges;
        var v640 = v786[i$$13];
        var v339 = JAM.call(v640.getSequence, v640, [sequence$$20], JAM.policy.p16);
        JAM.call(sequenceArray$$1.push, sequenceArray$$1, [v339], JAM.policy.p16);
      }
      i$$13++;
      var v787 = this.ranges;
      var v641 = v787.length;
      v341 = i$$13 < v641;
    }
    var v342 = outputWindow.document;
    var v788 = JAM.call(sequenceArray$$1.join, sequenceArray$$1, [""], JAM.policy.p10);
    var v642 = addReturns(v788);
    var v343 = v642 + "\n\n";
    JAM.call(v342.write, v342, [v343], JAM.policy.p16);
    return true;
  }
  var v643 = this.type;
  var v351 = v643 == "separate";
  if (v351) {
    i$$13 = 0;
    var v789 = this.ranges;
    var v644 = v789.length;
    var v350 = i$$13 < v644;
    for (;v350;) {
      var v887 = this.ranges;
      var v790 = v887[i$$13];
      var v645 = JAM.call(v790.getSequence, v790, [sequence$$20], JAM.policy.p16);
      var v349 = v645 != "";
      if (v349) {
        var v345 = outputWindow.document;
        var v888 = this.ranges;
        var v791 = v888[i$$13];
        var v646 = v791.getTitle();
        var v346 = v646 + "\n";
        JAM.call(v345.write, v345, [v346], JAM.policy.p16);
        var v347 = outputWindow.document;
        var v955 = this.ranges;
        var v889 = v955[i$$13];
        var v792 = JAM.call(v889.getSequence, v889, [sequence$$20], JAM.policy.p16);
        var v647 = addReturns(v792);
        var v348 = v647 + "\n\n";
        JAM.call(v347.write, v347, [v348], JAM.policy.p16);
      }
      i$$13++;
      var v793 = this.ranges;
      var v648 = v793.length;
      v350 = i$$13 < v648;
    }
    return true;
  }
  var v649 = this.type;
  var v359 = v649 == "uppercased";
  if (v359) {
    var re$$3;
    sequence$$20 = sequence$$20.toLowerCase();
    i$$13 = 0;
    var v794 = this.ranges;
    var v650 = v794.length;
    var v356 = i$$13 < v650;
    for (;v356;) {
      var v890 = this.ranges;
      var v795 = v890[i$$13];
      var v651 = JAM.call(v795.getSequence, v795, [sequence$$20], JAM.policy.p16);
      var v355 = v651 != "";
      if (v355) {
        var v891 = this.ranges;
        var v796 = v891[i$$13];
        var v652 = v796.start;
        var v354 = v652 > 1;
        if (v354) {
          var v1029 = this.ranges;
          var v994 = v1029[i$$13];
          var v956 = v994.start;
          var v892 = v956 - 1;
          var v797 = "(.{" + v892;
          var v653 = v797 + "})\\B(.{";
          var v995 = this.ranges;
          var v957 = v995[i$$13];
          var v893 = v957.stop;
          var v996 = this.ranges;
          var v958 = v996[i$$13];
          var v894 = v958.start;
          var v798 = v893 - v894;
          var v654 = v798 + 1;
          var v352 = v653 + v654;
          re$$3 = v352 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v2], JAM.policy.p21);
        } else {
          var v997 = this.ranges;
          var v959 = v997[i$$13];
          var v895 = v959.stop;
          var v998 = this.ranges;
          var v960 = v998[i$$13];
          var v896 = v960.start;
          var v799 = v895 - v896;
          var v655 = v799 + 1;
          var v353 = "(.{" + v655;
          re$$3 = v353 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v3], JAM.policy.p21);
        }
      }
      i$$13++;
      var v800 = this.ranges;
      var v656 = v800.length;
      v356 = i$$13 < v656;
    }
    var v357 = outputWindow.document;
    var v657 = addReturns(sequence$$20);
    var v358 = v657 + "\n\n";
    JAM.call(v357.write, v357, [v358], JAM.policy.p16);
    return true;
  }
  var v658 = this.type;
  var v367 = v658 == "lowercased";
  if (v367) {
    sequence$$20 = sequence$$20.toUpperCase();
    i$$13 = 0;
    var v801 = this.ranges;
    var v659 = v801.length;
    var v364 = i$$13 < v659;
    for (;v364;) {
      var v897 = this.ranges;
      var v802 = v897[i$$13];
      var v660 = JAM.call(v802.getSequence, v802, [sequence$$20], JAM.policy.p16);
      var v363 = v660 != "";
      if (v363) {
        var v898 = this.ranges;
        var v803 = v898[i$$13];
        var v661 = v803.start;
        var v362 = v661 > 1;
        if (v362) {
          var v1030 = this.ranges;
          var v999 = v1030[i$$13];
          var v961 = v999.start;
          var v899 = v961 - 1;
          var v804 = "(.{" + v899;
          var v662 = v804 + "})\\B(.{";
          var v1000 = this.ranges;
          var v962 = v1000[i$$13];
          var v900 = v962.stop;
          var v1001 = this.ranges;
          var v963 = v1001[i$$13];
          var v901 = v963.start;
          var v805 = v900 - v901;
          var v663 = v805 + 1;
          var v360 = v662 + v663;
          re$$3 = v360 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v4], JAM.policy.p21);
        } else {
          var v1002 = this.ranges;
          var v964 = v1002[i$$13];
          var v902 = v964.stop;
          var v1003 = this.ranges;
          var v965 = v1003[i$$13];
          var v903 = v965.start;
          var v806 = v902 - v903;
          var v664 = v806 + 1;
          var v361 = "(.{" + v664;
          re$$3 = v361 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v5], JAM.policy.p21);
        }
      }
      i$$13++;
      var v807 = this.ranges;
      var v665 = v807.length;
      v364 = i$$13 < v665;
    }
    var v365 = outputWindow.document;
    var v666 = addReturns(sequence$$20);
    var v366 = v666 + "\n\n";
    JAM.call(v365.write, v365, [v366], JAM.policy.p16);
    return true;
  }
  var v667 = this.type;
  var v375 = v667 == "randomized";
  if (v375) {
    i$$13 = 0;
    var v808 = this.ranges;
    var v668 = v808.length;
    var v372 = i$$13 < v668;
    for (;v372;) {
      var v904 = this.ranges;
      var v809 = v904[i$$13];
      var v669 = JAM.call(v809.getSequence, v809, [sequence$$20], JAM.policy.p16);
      var v371 = v669 != "";
      if (v371) {
        var v905 = this.ranges;
        var v810 = v905[i$$13];
        var v670 = v810.start;
        var v370 = v670 > 1;
        if (v370) {
          var v1031 = this.ranges;
          var v1004 = v1031[i$$13];
          var v966 = v1004.start;
          var v906 = v966 - 1;
          var v811 = "(.{" + v906;
          var v671 = v811 + "})\\B(.{";
          var v1005 = this.ranges;
          var v967 = v1005[i$$13];
          var v907 = v967.stop;
          var v1006 = this.ranges;
          var v968 = v1006[i$$13];
          var v908 = v968.start;
          var v812 = v907 - v908;
          var v672 = v812 + 1;
          var v368 = v671 + v672;
          re$$3 = v368 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v6], JAM.policy.p21);
        } else {
          var v1007 = this.ranges;
          var v969 = v1007[i$$13];
          var v909 = v969.stop;
          var v1008 = this.ranges;
          var v970 = v1008[i$$13];
          var v910 = v970.start;
          var v813 = v909 - v910;
          var v673 = v813 + 1;
          var v369 = "(.{" + v673;
          re$$3 = v369 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v7], JAM.policy.p21);
        }
      }
      i$$13++;
      var v814 = this.ranges;
      var v674 = v814.length;
      v372 = i$$13 < v674;
    }
    var v373 = outputWindow.document;
    var v675 = addReturns(sequence$$20);
    var v374 = v675 + "\n\n";
    JAM.call(v373.write, v373, [v374], JAM.policy.p16);
    return true;
  }
  var v676 = this.type;
  var v385 = v676 == "preserved";
  if (v385) {
    var v376 = ["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"];
    var v377 = sequence$$20.length;
    var randomSequence = JAM.call(getRandomSequence, null, [v376, v377], JAM.policy.p19);
    i$$13 = 0;
    var v815 = this.ranges;
    var v677 = v815.length;
    var v382 = i$$13 < v677;
    for (;v382;) {
      var v911 = this.ranges;
      var v816 = v911[i$$13];
      var v678 = JAM.call(v816.getSequence, v816, [sequence$$20], JAM.policy.p16);
      var v381 = v678 != "";
      if (v381) {
        var v912 = this.ranges;
        var v817 = v912[i$$13];
        var v679 = v817.start;
        var v380 = v679 > 1;
        if (v380) {
          var v1032 = this.ranges;
          var v1009 = v1032[i$$13];
          var v971 = v1009.start;
          var v913 = v971 - 1;
          var v818 = "(.{" + v913;
          var v680 = v818 + "})\\B(.{";
          var v1010 = this.ranges;
          var v972 = v1010[i$$13];
          var v914 = v972.stop;
          var v1011 = this.ranges;
          var v973 = v1011[i$$13];
          var v915 = v973.start;
          var v819 = v914 - v915;
          var v681 = v819 + 1;
          var v378 = v680 + v681;
          re$$3 = v378 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v8], JAM.policy.p21);
        } else {
          var v1012 = this.ranges;
          var v974 = v1012[i$$13];
          var v916 = v974.stop;
          var v1013 = this.ranges;
          var v975 = v1013[i$$13];
          var v917 = v975.start;
          var v820 = v916 - v917;
          var v682 = v820 + 1;
          var v379 = "(.{" + v682;
          re$$3 = v379 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v9], JAM.policy.p21);
        }
      }
      i$$13++;
      var v821 = this.ranges;
      var v683 = v821.length;
      v382 = i$$13 < v683;
    }
    var v383 = outputWindow.document;
    var v684 = addReturns(randomSequence);
    var v384 = v684 + "\n\n";
    JAM.call(v383.write, v383, [v384], JAM.policy.p16);
    return true;
  }
  return;
}
function RangeGroup(type$$25) {
  this.type = type$$25;
  var v1109 = new Array;
  this.ranges = v1109;
  return;
}
new Range(0, 0);
var v386 = Range.prototype;
v386.getSequence = getSequence;
var v387 = Range.prototype;
v387.getTitle = getTitle;
new RangeGroup("", "");
var v388 = RangeGroup.prototype;
v388.addRange = addRange;
var v389 = RangeGroup.prototype;
v389.writeRanges = writeRanges;
JAM.set(document, "onload", v10);
var v390 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p10);
JAM.set(v390, "onclick", v11);
var v391 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p10);
JAM.set(v391, "onclick", v12)

JAM.stopProfile('load');
