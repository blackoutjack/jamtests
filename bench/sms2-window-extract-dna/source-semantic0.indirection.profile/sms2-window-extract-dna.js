
JAM.startProfile('load');
function v12() {
  var v905 = document.forms;
  var v749 = v905[0];
  var v432 = v749.elements;
  var v13 = v432[0];
  v13.value = " ";
  return;
}
function v11() {
  try {
    windowExtract(document);
  } catch (e$$7) {
    var v14 = "The following error was encountered: " + e$$7;
    alert(v14);
  }
  return;
}
function v10() {
  var v433 = document.main_form;
  var v15 = v433.main_submit;
  v15.focus();
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
  var v16 = arrayOfSequences[0];
  var lengthOfAlign = v16.length;
  var v434 = arrayOfSequences.length;
  var v17 = v434 < 2;
  if (v17) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v435 = arrayOfTitles.length;
  var v19 = i$$1 < v435;
  for (;v19;) {
    var v1020 = arrayOfTitles[i$$1];
    var v906 = JAM.call(v1020.search, v1020, [/\S/], JAM.policy.p15);
    var v750 = v906 == -1;
    var v908 = !v750;
    if (v908) {
      var v1021 = arrayOfSequences[i$$1];
      var v907 = JAM.call(v1021.search, v1021, [/\S/], JAM.policy.p15);
      v750 = v907 == -1;
    }
    var v436 = v750;
    var v752 = !v436;
    if (v752) {
      var v909 = arrayOfSequences[i$$1];
      var v751 = v909.length;
      v436 = v751 != lengthOfAlign;
    }
    var v18 = v436;
    if (v18) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v437 = arrayOfTitles.length;
    v19 = i$$1 < v437;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1094 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p15);
  var v1022 = v1094 == -1;
  var v1096 = !v1022;
  if (v1096) {
    var v1095 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p15);
    v1022 = v1095 == -1;
  }
  var v910 = v1022;
  var v1024 = !v910;
  if (v1024) {
    var v1023 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p15);
    v910 = v1023 == -1;
  }
  var v753 = v910;
  var v912 = !v753;
  if (v912) {
    var v911 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p15);
    v753 = v911 == -1;
  }
  var v438 = v753;
  var v755 = !v438;
  if (v755) {
    var v754 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p15);
    v438 = v754 == -1;
  }
  var v20 = v438;
  if (v20) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v756 = formElement.value;
  var v439 = JAM.call(v756.search, v756, [/\S/], JAM.policy.p15);
  var v21 = v439 == -1;
  if (v21) {
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
  var v440 = arrayOfPatterns.length;
  var v24 = z$$2 < v440;
  for (;v24;) {
    var v757 = arrayOfPatterns[z$$2];
    var v441 = JAM.call(v757.search, v757, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p15);
    var v22 = v441 == -1;
    if (v22) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v758 = arrayOfPatterns[z$$2];
    var v442 = moreExpressionCheck(v758);
    var v23 = v442 == false;
    if (v23) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v443 = arrayOfPatterns.length;
    v24 = z$$2 < v443;
  }
  var v25 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v25);
  var v26 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v26);
  var j = 0;
  var v444 = arrayOfPatterns.length;
  var v30 = j < v444;
  for (;v30;) {
    var v759 = arrayOfPatterns[j];
    var v445 = JAM.call(v759.match, v759, [/\/.+\//], JAM.policy.p15);
    var v27 = v445 + "gi";
    if (JAM.isEval(eval)) {
      var v1259 = eval("introspect(JAM.policy.pFull) { " + v27 + " }")
    } else {
      var v1259 = JAM.call(eval, null, [v27])
    }
    geneticCodeMatchExp[j] = v1259;
    var v446 = arrayOfPatterns[j];
    var v28 = JAM.call(v446.match, v446, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v1260 = v28.toString();
    geneticCodeMatchResult[j] = v1260;
    var v29 = geneticCodeMatchResult[j];
    var v1261 = JAM.call(v29.replace, v29, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v1261;
    j++;
    var v447 = arrayOfPatterns.length;
    v30 = j < v447;
  }
  var i$$2 = 0;
  var v760 = testSequence.length;
  var v448 = v760 - 3;
  var v37 = i$$2 <= v448;
  for (;v37;) {
    var v31 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v31], JAM.policy.p16);
    j = 0;
    var v449 = geneticCodeMatchExp.length;
    var v35 = j < v449;
    for (;v35;) {
      var v761 = geneticCodeMatchExp[j];
      var v450 = JAM.call(codon.search, codon, [v761], JAM.policy.p17);
      var v34 = v450 != -1;
      if (v34) {
        var v33 = oneMatch == true;
        if (v33) {
          var v451 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v32 = v451 + ".";
          alert(v32);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v452 = geneticCodeMatchExp.length;
      v35 = j < v452;
    }
    var v36 = oneMatch == false;
    if (v36) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v762 = testSequence.length;
    var v453 = v762 - 3;
    v37 = i$$2 <= v453;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v454 = arrayOfPatterns$$1.length;
  var v39 = z$$3 < v454;
  for (;v39;) {
    var v763 = arrayOfPatterns$$1[z$$3];
    var v455 = JAM.call(v763.search, v763, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p15);
    var v38 = v455 != -1;
    if (v38) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v456 = arrayOfPatterns$$1.length;
    v39 = z$$3 < v456;
  }
  var i$$3 = 0;
  var v457 = arrayOfPatterns$$1.length;
  var v43 = i$$3 < v457;
  for (;v43;) {
    var v764 = arrayOfPatterns$$1[i$$3];
    var v458 = "[" + v764;
    var v40 = v458 + "]";
    var re = new RegExp(v40, "gi");
    var j$$1 = i$$3 + 1;
    var v459 = arrayOfPatterns$$1.length;
    var v42 = j$$1 < v459;
    for (;v42;) {
      var v765 = arrayOfPatterns$$1[j$$1];
      var v460 = JAM.call(v765.search, v765, [re], JAM.policy.p17);
      var v41 = v460 != -1;
      if (v41) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v461 = arrayOfPatterns$$1.length;
      v42 = j$$1 < v461;
    }
    i$$3++;
    var v462 = arrayOfPatterns$$1.length;
    v43 = i$$3 < v462;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v463 = arrayOfPatterns$$2.length;
  var v46 = z$$4 < v463;
  for (;v46;) {
    var v766 = arrayOfPatterns$$2[z$$4];
    var v464 = JAM.call(v766.search, v766, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p15);
    var v44 = v464 == -1;
    if (v44) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v767 = arrayOfPatterns$$2[z$$4];
    var v465 = moreExpressionCheck(v767);
    var v45 = v465 == false;
    if (v45) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v466 = arrayOfPatterns$$2.length;
    v46 = z$$4 < v466;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v913 = getSequenceFromFasta(text$$7);
  var v768 = JAM.call(v913.replace, v913, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v467 = v768.length;
  var v48 = v467 > maxInput;
  if (v48) {
    var v468 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v47 = v468 + " characters.";
    alert(v47);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v469 = text$$8.length;
  var v50 = v469 > maxInput$$1;
  if (v50) {
    var v470 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v49 = v470 + " characters.";
    alert(v49);
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
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</form>"], JAM.policy.p11);
  return true;
}
function closePre() {
  var v52 = outputWindow.document;
  JAM.call(v52.write, v52, ["</div>"], JAM.policy.p11);
  var v53 = outputWindow.document;
  JAM.call(v53.write, v53, ["</pre>\n"], JAM.policy.p11);
  return;
}
function closeTextArea() {
  var v54 = outputWindow.document;
  JAM.call(v54.write, v54, ["</textarea>"], JAM.policy.p11);
  return true;
}
function closeWindow() {
  var v55 = outputWindow.document;
  JAM.call(v55.write, v55, ["</body>\n</html>\n"], JAM.policy.p11);
  outputWindow.status = "Done.";
  var v56 = outputWindow.document;
  v56.close();
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
  var v471 = alignArray.length;
  var v57 = v471 < 3;
  if (v57) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v472 = alignArray.length;
  var v59 = i$$4 < v472;
  for (;v59;) {
    var v769 = alignArray[i$$4];
    var v473 = JAM.call(v769.search, v769, [/[^\s]+\s/], JAM.policy.p15);
    var v58 = v473 == -1;
    if (v58) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v474 = alignArray.length;
    v59 = i$$4 < v474;
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
  var v475 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v62 = v475 != -1;
  if (v62) {
    var v61 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    for (;v61;) {
      var v60 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v60], JAM.policy.p17);
      v61 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v476 = sequence$$2.length;
  var v63 = "&gt;results for " + v476;
  var stringToReturn = v63 + " residue sequence ";
  var v477 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p15);
  var v65 = v477 != -1;
  if (v65) {
    var v478 = stringToReturn + '"';
    var v64 = v478 + fastaSequenceTitle;
    stringToReturn = v64 + '"';
  }
  var v479 = stringToReturn + ' starting "';
  var v480 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v66 = v479 + v480;
  stringToReturn = v66 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v481 = sequenceOne.length;
  var v67 = "Search results for " + v481;
  var stringToReturn$$1 = v67 + " residue sequence ";
  var v482 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p15);
  var v69 = v482 != -1;
  if (v69) {
    var v483 = stringToReturn$$1 + '"';
    var v68 = v483 + fastaSequenceTitleOne;
    stringToReturn$$1 = v68 + '"';
  }
  var v484 = stringToReturn$$1 + ' starting "';
  var v485 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v70 = v484 + v485;
  stringToReturn$$1 = v70 + '"\n';
  var v486 = stringToReturn$$1 + "and ";
  var v487 = sequenceTwo.length;
  var v71 = v486 + v487;
  stringToReturn$$1 = v71 + " residue sequence ";
  var v488 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p15);
  var v73 = v488 != -1;
  if (v73) {
    var v489 = stringToReturn$$1 + '"';
    var v72 = v489 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v72 + '"';
  }
  var v490 = stringToReturn$$1 + ' starting "';
  var v491 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v74 = v490 + v491;
  stringToReturn$$1 = v74 + '"';
  var v75 = '<div class="info">' + stringToReturn$$1;
  return v75 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v76 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v76);
  var j$$2 = 0;
  var v492 = arrayOfPatterns$$3.length;
  var v78 = j$$2 < v492;
  for (;v78;) {
    var v770 = arrayOfPatterns$$3[j$$2];
    var v493 = JAM.call(v770.match, v770, [/\/.+\//], JAM.policy.p15);
    var v77 = v493 + "gi";
    if (JAM.isEval(eval)) {
      var v1262 = eval("introspect(JAM.policy.pFull) { " + v77 + " }")
    } else {
      var v1262 = JAM.call(eval, null, [v77])
    }
    geneticCodeMatchExp$$1[j$$2] = v1262;
    j$$2++;
    var v494 = arrayOfPatterns$$3.length;
    v78 = j$$2 < v494;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v79 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v79);
  var j$$3 = 0;
  var v495 = arrayOfPatterns$$4.length;
  var v82 = j$$3 < v495;
  for (;v82;) {
    var v496 = arrayOfPatterns$$4[j$$3];
    var v80 = JAM.call(v496.match, v496, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v1263 = v80.toString();
    geneticCodeMatchResult$$1[j$$3] = v1263;
    var v81 = geneticCodeMatchResult$$1[j$$3];
    var v1264 = JAM.call(v81.replace, v81, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v1264;
    j$$3++;
    var v497 = arrayOfPatterns$$4.length;
    v82 = j$$3 < v497;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v498 = sequence$$3.length;
  var v83 = "Results for " + v498;
  var stringToReturn$$2 = v83 + " residue sequence ";
  var v499 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p15);
  var v85 = v499 != -1;
  if (v85) {
    var v500 = stringToReturn$$2 + '"';
    var v84 = v500 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v84 + '"';
  }
  var v501 = stringToReturn$$2 + ' starting "';
  var v502 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v86 = v501 + v502;
  stringToReturn$$2 = v86 + '"';
  var v87 = '<div class="info">' + stringToReturn$$2;
  return v87 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v771 = "Results for " + topology;
  var v503 = v771 + " ";
  var v504 = sequence$$4.length;
  var v88 = v503 + v504;
  var stringToReturn$$3 = v88 + " residue sequence ";
  var v505 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p15);
  var v90 = v505 != -1;
  if (v90) {
    var v506 = stringToReturn$$3 + '"';
    var v89 = v506 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v89 + '"';
  }
  var v507 = stringToReturn$$3 + ' starting "';
  var v508 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v91 = v507 + v508;
  stringToReturn$$3 = v91 + '"';
  var v92 = '<div class="info">' + stringToReturn$$3;
  return v92 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v509 = sequenceOne$$1.length;
  var v93 = "Alignment results for " + v509;
  var stringToReturn$$4 = v93 + " residue sequence ";
  var v510 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p15);
  var v95 = v510 != -1;
  if (v95) {
    var v511 = stringToReturn$$4 + '"';
    var v94 = v511 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v94 + '"';
  }
  var v512 = stringToReturn$$4 + ' starting "';
  var v513 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v96 = v512 + v513;
  stringToReturn$$4 = v96 + '"\n';
  var v514 = stringToReturn$$4 + "and ";
  var v515 = sequenceTwo$$1.length;
  var v97 = v514 + v515;
  stringToReturn$$4 = v97 + " residue sequence ";
  var v516 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p15);
  var v99 = v516 != -1;
  if (v99) {
    var v517 = stringToReturn$$4 + '"';
    var v98 = v517 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v98 + '"';
  }
  var v518 = stringToReturn$$4 + ' starting "';
  var v519 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v100 = v518 + v519;
  stringToReturn$$4 = v100 + '"';
  var v101 = '<div class="info">' + stringToReturn$$4;
  return v101 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v103 = j$$4 < lengthOut;
  for (;v103;) {
    var v520 = Math.random();
    var v521 = components.length;
    var v102 = v520 * v521;
    tempNum = JAM.call(Math.floor, Math, [v102], JAM.policy.p15);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v103 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p11);
}
function getSequenceFromFasta(sequenceRecord) {
  var v522 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v104 = v522 != -1;
  if (v104) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v523 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v106 = v523 != -1;
  if (v106) {
    var v105 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
    fastaTitle = v105.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p16);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1236 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p15);
  var v1227 = v1236 != -1;
  var v1238 = !v1227;
  if (v1238) {
    var v1237 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p15);
    v1227 = v1237 != -1;
  }
  var v1214 = v1227;
  var v1229 = !v1214;
  if (v1229) {
    var v1228 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p15);
    v1214 = v1228 != -1;
  }
  var v1198 = v1214;
  var v1216 = !v1198;
  if (v1216) {
    var v1215 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p15);
    v1198 = v1215 != -1;
  }
  var v1180 = v1198;
  var v1200 = !v1180;
  if (v1200) {
    var v1199 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p15);
    v1180 = v1199 != -1;
  }
  var v1147 = v1180;
  var v1182 = !v1147;
  if (v1182) {
    var v1181 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p15);
    v1147 = v1181 != -1;
  }
  var v1097 = v1147;
  var v1149 = !v1097;
  if (v1149) {
    var v1148 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p15);
    v1097 = v1148 != -1;
  }
  var v1025 = v1097;
  var v1099 = !v1025;
  if (v1099) {
    var v1098 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p15);
    v1025 = v1098 != -1;
  }
  var v914 = v1025;
  var v1027 = !v914;
  if (v1027) {
    var v1026 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p15);
    v914 = v1026 != -1;
  }
  var v772 = v914;
  var v916 = !v772;
  if (v916) {
    var v915 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p15);
    v772 = v915 != -1;
  }
  var v524 = v772;
  var v774 = !v524;
  if (v774) {
    var v773 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p15);
    v524 = v773 != -1;
  }
  var v107 = v524;
  if (v107) {
    return false;
  }
  return true;
}
function openForm() {
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ['<form action="">\n'], JAM.policy.p11);
  return true;
}
function openPre() {
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ["<pre>"], JAM.policy.p11);
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<div class="pre">'], JAM.policy.p11);
  return;
}
function openTextArea() {
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p11);
  return true;
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v112 = outputWindow.document;
  var v917 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v775 = v917 + "<head>\n";
  var v525 = v775 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v525 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p17);
  if (isColor) {
    var v114 = outputWindow.document;
    var v1252 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1248 = v1252 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1244 = v1248 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1239 = v1244 + "div.info {font-weight: bold}\n";
    var v1230 = v1239 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1217 = v1230 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1201 = v1217 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1183 = v1201 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1150 = v1183 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1100 = v1150 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1028 = v1100 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v918 = v1028 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v776 = v918 + "td.many {color: #000000}\n";
    var v526 = v776 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v115 = v526 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p17);
  } else {
    var v116 = outputWindow.document;
    var v1256 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1253 = v1256 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1249 = v1253 + "div.title {display: none}\n";
    var v1245 = v1249 + "div.info {font-weight: bold}\n";
    var v1240 = v1245 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1231 = v1240 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1218 = v1231 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1202 = v1218 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1184 = v1202 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1151 = v1184 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1101 = v1151 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1029 = v1101 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v919 = v1029 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v777 = v919 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v527 = v777 + "img {display: none}\n";
    var v117 = v527 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p17);
  }
  var v118 = outputWindow.document;
  var v920 = "</head>\n" + '<body class="main">\n';
  var v778 = v920 + '<div class="title">';
  var v528 = v778 + title$$7;
  var v119 = v528 + " results</div>\n";
  JAM.call(v118.write, v118, [v119], JAM.policy.p17);
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
  var v120 = outputWindow.document;
  var v921 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v779 = v921 + "<head>\n";
  var v529 = v779 + "<title>Sequence Manipulation Suite</title>\n";
  var v121 = v529 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v120.write, v120, [v121], JAM.policy.p17);
  if (isBackground) {
    var v122 = outputWindow.document;
    var v1254 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1250 = v1254 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1246 = v1250 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1241 = v1246 + "div.info {font-weight: bold}\n";
    var v1232 = v1241 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1219 = v1232 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1203 = v1219 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1185 = v1203 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1152 = v1185 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1102 = v1152 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1030 = v1102 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v922 = v1030 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v780 = v922 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v530 = v780 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v123 = v530 + "</style>\n";
    JAM.call(v122.write, v122, [v123], JAM.policy.p17);
  } else {
    var v124 = outputWindow.document;
    var v1258 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1257 = v1258 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1255 = v1257 + "div.title {display: none}\n";
    var v1251 = v1255 + "div.info {font-weight: bold}\n";
    var v1247 = v1251 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1242 = v1247 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1233 = v1242 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1220 = v1233 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1204 = v1220 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1186 = v1204 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1153 = v1186 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1103 = v1153 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1031 = v1103 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v923 = v1031 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v781 = v923 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v531 = v781 + "img {display: none}\n";
    var v125 = v531 + "</style>\n";
    JAM.call(v124.write, v124, [v125], JAM.policy.p17);
  }
  var v126 = outputWindow.document;
  var v924 = "</head>\n" + '<body class="main">\n';
  var v782 = v924 + '<div class="title">';
  var v532 = v782 + title$$9;
  var v127 = v532 + " results</div>\n";
  JAM.call(v126.write, v126, [v127], JAM.policy.p17);
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
  var v533 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p15);
  var v128 = v533 != -1;
  if (v128) {
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
  var v129 = j$$5 < lengthOfColumn;
  for (;v129;) {
    tempString = tempString + " ";
    j$$5++;
    v129 = j$$5 < lengthOfColumn;
  }
  var v130 = tempString + theNumber;
  theNumber = v130 + " ";
  var v131 = sequenceToAppend + theNumber;
  sequenceToAppend = v131 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p17);
  var v534 = testArray[0];
  var v132 = v534 != testString;
  if (v132) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v535 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v133 = v535 == -1;
  if (v133) {
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
  var v134 = !caughtException;
  if (v134) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p16);
  var v135 = testString != "1X2X3X";
  if (v135) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v536 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p12);
  var v136 = v536 != 2489.824;
  if (v136) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v537 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p12);
  var v137 = v537 != 2489.8;
  if (v137) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v538 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p15);
  var v138 = v538 == -1;
  if (v138) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v1032 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p15);
  var v925 = v1032 == -1;
  var v1034 = !v925;
  if (v1034) {
    var v1033 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p15);
    v925 = v1033 == -1;
  }
  var v783 = v925;
  var v927 = !v783;
  if (v927) {
    var v926 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p15);
    v783 = v926 == -1;
  }
  var v539 = v783;
  var v785 = !v539;
  if (v785) {
    var v784 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p15);
    v539 = v784 == -1;
  }
  var v139 = v539;
  if (v139) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v540 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p15);
  var v140 = v540 == -1;
  if (v140) {
    alert("Please enter a number.");
    return false;
  }
  var v142 = theNumber$$2 > maxInput$$2;
  if (v142) {
    var v541 = "Please enter a number less than or equal to " + maxInput$$2;
    var v141 = v541 + ".";
    alert(v141);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v542 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p15);
  var v143 = v542 != -1;
  if (v143) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v543 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p15);
  var v144 = v543 != -1;
  if (v144) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v1035 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p15);
  var v928 = v1035 == -1;
  var v1037 = !v928;
  if (v1037) {
    var v1036 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p15);
    v928 = v1036 == -1;
  }
  var v786 = v928;
  var v930 = !v786;
  if (v930) {
    var v929 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p15);
    v786 = v929 == -1;
  }
  var v544 = v786;
  var v788 = !v544;
  if (v788) {
    var v787 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p15);
    v544 = v787 == -1;
  }
  var v145 = v544;
  if (v145) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1038 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p15);
  var v931 = v1038 == -1;
  var v1040 = !v931;
  if (v1040) {
    var v1039 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p15);
    v931 = v1039 == -1;
  }
  var v789 = v931;
  var v933 = !v789;
  if (v933) {
    var v932 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p15);
    v789 = v932 == -1;
  }
  var v545 = v789;
  var v791 = !v545;
  if (v791) {
    var v790 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p15);
    v545 = v790 == -1;
  }
  var v146 = v545;
  if (v146) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v546 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p15);
  var v147 = v546 == -1;
  if (v147) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v1041 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p15);
  var v934 = v1041 == -1;
  var v1043 = !v934;
  if (v1043) {
    var v1042 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p15);
    v934 = v1042 == -1;
  }
  var v792 = v934;
  var v936 = !v792;
  if (v936) {
    var v935 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p15);
    v792 = v935 == -1;
  }
  var v547 = v792;
  var v794 = !v547;
  if (v794) {
    var v793 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p15);
    v547 = v793 == -1;
  }
  var v148 = v547;
  if (v148) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v548 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p15);
  var v149 = v548 == -1;
  if (v149) {
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
  var v156 = i$$5 < stopBase;
  for (;v156;) {
    var v150 = i$$5 + 1;
    lineOfText = rightNum(v150, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v549 = basePerLine / groupSize;
    var v153 = j$$6 <= v549;
    for (;v153;) {
      var v152 = k < groupSize;
      for (;v152;) {
        var v550 = k + i$$5;
        var v151 = JAM.call(text$$10.charAt, text$$10, [v550], JAM.policy.p17);
        lineOfText = lineOfText + v151;
        k = k + 1;
        v152 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v551 = basePerLine / groupSize;
      v153 = j$$6 <= v551;
    }
    var v154 = outputWindow.document;
    var v155 = lineOfText + "\n";
    JAM.call(v154.write, v154, [v155], JAM.policy.p17);
    lineOfText = "";
    v156 = i$$5 < stopBase;
  }
  return true;
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  JAM.call(writeGroupNumDnaSetStart, null, [text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0], JAM.policy.p20);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v552 = adjustment < 0;
    if (v552) {
      v552 = adjusted >= 0;
    }
    var v157 = v552;
    if (v157) {
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
  var v190 = i$$6 < stopBase$$2;
  for (;v190;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v553 = basePerLine$$2 / groupSize$$2;
    var v166 = j$$7 <= v553;
    for (;v166;) {
      var v161 = k$$1 < groupSize$$2;
      for (;v161;) {
        var v554 = i$$6 + k$$1;
        var v158 = v554 >= stopBase$$2;
        if (v158) {
          break;
        }
        var v159 = lineOfText$$1;
        var v555 = k$$1 + i$$6;
        var v160 = JAM.call(text$$12.charAt, text$$12, [v555], JAM.policy.p17);
        lineOfText$$1 = v159 + v160;
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v164 = numberPosition$$1 == "above";
      if (v164) {
        var v162 = aboveNum;
        var v556 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p20);
        var v163 = rightNum(v556, "", groupSize$$2, tabIn$$3);
        aboveNum = v162 + v163;
      }
      var v165 = i$$6 >= stopBase$$2;
      if (v165) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v557 = basePerLine$$2 / groupSize$$2;
      v166 = j$$7 <= v557;
    }
    var v189 = numberPosition$$1 == "left";
    if (v189) {
      var v167 = outputWindow.document;
      var v937 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p20);
      var v795 = rightNum(v937, "", 8, tabIn$$3);
      var v558 = v795 + lineOfText$$1;
      var v168 = v558 + "\n";
      JAM.call(v167.write, v167, [v168], JAM.policy.p17);
      var v172 = strands$$1 == "two";
      if (v172) {
        var v169 = outputWindow.document;
        var v938 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p20);
        var v796 = rightNum(v938, "", 8, tabIn$$3);
        var v797 = complement(lineOfText$$1);
        var v559 = v796 + v797;
        var v170 = v559 + "\n";
        JAM.call(v169.write, v169, [v170], JAM.policy.p17);
        var v171 = outputWindow.document;
        JAM.call(v171.write, v171, ["\n"], JAM.policy.p11);
      }
    } else {
      var v188 = numberPosition$$1 == "right";
      if (v188) {
        var v173 = outputWindow.document;
        var v798 = lineOfText$$1;
        var v799 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p20);
        var v560 = v798 + v799;
        var v174 = v560 + "\n";
        JAM.call(v173.write, v173, [v174], JAM.policy.p17);
        var v178 = strands$$1 == "two";
        if (v178) {
          var v175 = outputWindow.document;
          var v800 = complement(lineOfText$$1);
          var v801 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p20);
          var v561 = v800 + v801;
          var v176 = v561 + "\n";
          JAM.call(v175.write, v175, [v176], JAM.policy.p17);
          var v177 = outputWindow.document;
          JAM.call(v177.write, v177, ["\n"], JAM.policy.p11);
        }
      } else {
        var v187 = numberPosition$$1 == "above";
        if (v187) {
          var v179 = outputWindow.document;
          var v180 = aboveNum + "\n";
          JAM.call(v179.write, v179, [v180], JAM.policy.p17);
          var v181 = outputWindow.document;
          var v182 = lineOfText$$1 + "\n";
          JAM.call(v181.write, v181, [v182], JAM.policy.p17);
          var v186 = strands$$1 == "two";
          if (v186) {
            var v183 = outputWindow.document;
            var v562 = complement(lineOfText$$1);
            var v184 = v562 + "\n";
            JAM.call(v183.write, v183, [v184], JAM.policy.p17);
            var v185 = outputWindow.document;
            JAM.call(v185.write, v185, ["\n"], JAM.policy.p11);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v190 = i$$6 < stopBase$$2;
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
  var v209 = i$$7 < stopBase$$3;
  for (;v209;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v563 = basePerLine$$3 / groupSize$$3;
    var v197 = j$$8 <= v563;
    for (;v197;) {
      var v193 = k$$2 < groupSize$$3;
      for (;v193;) {
        var v564 = i$$7 + k$$2;
        var v191 = v564 >= stopBase$$3;
        if (v191) {
          break;
        }
        var v565 = k$$2 + i$$7;
        var v192 = JAM.call(text$$13.charAt, text$$13, [v565], JAM.policy.p17);
        lineOfText$$2 = lineOfText$$2 + v192;
        k$$2 = k$$2 + 1;
        v193 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v195 = numberPosition$$2 == "above";
      if (v195) {
        var v194 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v194;
      }
      var v196 = i$$7 >= stopBase$$3;
      if (v196) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v566 = basePerLine$$3 / groupSize$$3;
      v197 = j$$8 <= v566;
    }
    var v208 = numberPosition$$2 == "left";
    if (v208) {
      var v198 = outputWindow.document;
      var v802 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v567 = v802 + lineOfText$$2;
      var v199 = v567 + "\n";
      JAM.call(v198.write, v198, [v199], JAM.policy.p17);
    } else {
      var v207 = numberPosition$$2 == "right";
      if (v207) {
        var v200 = outputWindow.document;
        var v568 = lineOfText$$2 + i$$7;
        var v201 = v568 + "\n";
        JAM.call(v200.write, v200, [v201], JAM.policy.p17);
      } else {
        var v206 = numberPosition$$2 == "above";
        if (v206) {
          var v202 = outputWindow.document;
          var v203 = aboveNum$$1 + "\n";
          JAM.call(v202.write, v202, [v203], JAM.policy.p17);
          var v204 = outputWindow.document;
          var v205 = lineOfText$$2 + "\n";
          JAM.call(v204.write, v204, [v205], JAM.policy.p17);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v209 = i$$7 < stopBase$$3;
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
  var v939 = sequence$$13.length;
  var v803 = v939 <= firstIndexToMutate;
  var v940 = !v803;
  if (v940) {
    v803 = lastIndexToMutate < 0;
  }
  var v569 = v803;
  var v804 = !v569;
  if (v804) {
    v569 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v210 = v569;
  if (v210) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v218 = i$$8 < numMut;
  for (;v218;) {
    maxNum = sequence$$13.length;
    var v570 = Math.random();
    var v211 = v570 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v211], JAM.policy.p15);
    var v571 = randNum < firstIndexToMutate;
    var v805 = !v571;
    if (v805) {
      v571 = randNum > lastIndexToMutate;
    }
    var v212 = v571;
    if (v212) {
      numMut++;
      i$$8++;
      v218 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p15);
    needNewChar = true;
    for (;needNewChar;) {
      var v572 = Math.random();
      var v573 = components$$1.length;
      var v213 = v572 * v573;
      componentsIndex = JAM.call(Math.round, Math, [v213], JAM.policy.p15);
      var v574 = components$$1.length;
      var v214 = componentsIndex == v574;
      if (v214) {
        componentsIndex = 0;
      }
      var v575 = components$$1[componentsIndex];
      var v215 = v575 != currentChar;
      if (v215) {
        needNewChar = false;
      }
    }
    var v576 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v577 = components$$1[componentsIndex];
    var v216 = v576 + v577;
    var v578 = randNum + 1;
    var v579 = sequence$$13.length;
    var v217 = JAM.call(sequence$$13.substring, sequence$$13, [v578, v579], JAM.policy.p21);
    sequence$$13 = v216 + v217;
    i$$8++;
    v218 = i$$8 < numMut;
  }
  var v219 = outputWindow.document;
  var v220 = addReturns(sequence$$13);
  JAM.call(v219.write, v219, [v220], JAM.policy.p17);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v225 = j$$9 < lengthOut$$1;
  for (;v225;) {
    var v580 = Math.random();
    var v581 = components$$2.length;
    var v221 = v580 * v581;
    tempNum$$1 = JAM.call(Math.floor, Math, [v221], JAM.policy.p15);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v582 = sequence$$14.length;
    var v224 = v582 == 60;
    if (v224) {
      var v222 = outputWindow.document;
      var v223 = sequence$$14 + "\n";
      JAM.call(v222.write, v222, [v223], JAM.policy.p17);
      sequence$$14 = "";
    }
    j$$9++;
    v225 = j$$9 < lengthOut$$1;
  }
  var v226 = outputWindow.document;
  var v227 = sequence$$14 + "\n";
  JAM.call(v226.write, v226, [v227], JAM.policy.p17);
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
  var v231 = dnaConformation == "circular";
  if (v231) {
    var v228 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v228.length;
    var v941 = sequence$$15.length;
    var v806 = v941 - lookAhead;
    var v807 = sequence$$15.length;
    var v583 = JAM.call(sequence$$15.substring, sequence$$15, [v806, v807], JAM.policy.p21);
    var v229 = v583 + sequence$$15;
    var v230 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v229 + v230;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v232 = outputWindow.document;
  JAM.call(v232.write, v232, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v233 = outputWindow.document;
  var v942 = '<tr><td class="title" width="200px">' + "Site:";
  var v808 = v942 + '</td><td class="title">';
  var v584 = v808 + "Positions:";
  var v234 = v584 + "</td></tr>\n";
  JAM.call(v233.write, v233, [v234], JAM.policy.p17);
  var i$$9 = 0;
  var v585 = arrayOfItems.length;
  var v250 = i$$9 < v585;
  for (;v250;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v586 = arrayOfItems[i$$9];
    var v235 = JAM.call(v586.match, v586, [/\/.+\//], JAM.policy.p15);
    matchExp = v235 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v943 = arrayOfItems[i$$9];
    var v809 = JAM.call(v943.match, v943, [/\)\D*\d+/], JAM.policy.p15);
    var v587 = v809.toString();
    var v236 = JAM.call(v587.replace, v587, [/\)\D*/, ""], JAM.policy.p16);
    cutDistance = parseFloat(v236);
    var v242 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v242;) {
      var v237 = matchExp.lastIndex;
      matchPosition = v237 - cutDistance;
      var v588 = matchPosition >= lowerLimit;
      if (v588) {
        v588 = matchPosition < upperLimit;
      }
      var v240 = v588;
      if (v240) {
        timesFound++;
        var v238 = tempString$$1 + ", ";
        var v589 = matchPosition - shiftValue;
        var v239 = v589 + 1;
        tempString$$1 = v238 + v239;
      }
      var v590 = matchExp.lastIndex;
      var v810 = RegExp.lastMatch;
      var v591 = v810.length;
      var v241 = v590 - v591;
      matchExp.lastIndex = v241 + 1;
      v242 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v592 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p15);
    var v243 = v592 != -1;
    if (v243) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p16);
    }
    var v247 = timesFound == 0;
    if (v247) {
      backGroundClass = "none";
    } else {
      var v246 = timesFound == 1;
      if (v246) {
        backGroundClass = "one";
      } else {
        var v245 = timesFound == 2;
        if (v245) {
          backGroundClass = "two";
        } else {
          var v244 = timesFound == 3;
          if (v244) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v248 = outputWindow.document;
    var v1187 = '<tr><td class="' + backGroundClass;
    var v1154 = v1187 + '">';
    var v1221 = arrayOfItems[i$$9];
    var v1205 = JAM.call(v1221.match, v1221, [/\([^\(]+\)/], JAM.policy.p15);
    var v1188 = v1205.toString();
    var v1155 = JAM.call(v1188.replace, v1188, [/\(|\)/g, ""], JAM.policy.p16);
    var v1104 = v1154 + v1155;
    var v1044 = v1104 + '</td><td class="';
    var v944 = v1044 + backGroundClass;
    var v811 = v944 + '">';
    var v593 = v811 + tempString$$1;
    var v249 = v593 + "</td></tr>\n";
    JAM.call(v248.write, v248, [v249], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v594 = arrayOfItems.length;
    v250 = i$$9 < v594;
  }
  var v251 = outputWindow.document;
  JAM.call(v251.write, v251, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v252 = outputWindow.document;
  JAM.call(v252.write, v252, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v253 = outputWindow.document;
  var v1105 = '<tr><td class="title">' + "Pattern:";
  var v1045 = v1105 + '</td><td class="title">';
  var v945 = v1045 + "Times found:";
  var v812 = v945 + '</td><td class="title">';
  var v595 = v812 + "Percentage:";
  var v254 = v595 + "</td></tr>\n";
  JAM.call(v253.write, v253, [v254], JAM.policy.p17);
  var i$$10 = 0;
  var v596 = arrayOfItems$$1.length;
  var v263 = i$$10 < v596;
  for (;v263;) {
    var tempNumber = 0;
    var v597 = arrayOfItems$$1[i$$10];
    var v255 = JAM.call(v597.match, v597, [/\/[^\/]+\//], JAM.policy.p15);
    var matchExp$$1 = v255 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v598 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v257 = v598 != -1;
    if (v257) {
      var v256 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v256.length;
    }
    var percentage = 0;
    var v813 = originalLength + 1;
    var v1046 = arrayOfItems$$1[i$$10];
    var v946 = JAM.call(v1046.match, v1046, [/\d+/], JAM.policy.p15);
    var v814 = parseFloat(v946);
    var v599 = v813 - v814;
    var v260 = v599 > 0;
    if (v260) {
      var v258 = 100 * tempNumber;
      var v600 = originalLength + 1;
      var v947 = arrayOfItems$$1[i$$10];
      var v815 = JAM.call(v947.match, v947, [/\d+/], JAM.policy.p15);
      var v601 = parseFloat(v815);
      var v259 = v600 - v601;
      percentage = v258 / v259;
    }
    var v261 = outputWindow.document;
    var v1222 = arrayOfItems$$1[i$$10];
    var v1206 = JAM.call(v1222.match, v1222, [/\([^\(]+\)\b/], JAM.policy.p15);
    var v1189 = v1206.toString();
    var v1156 = JAM.call(v1189.replace, v1189, [/\(|\)/g, ""], JAM.policy.p16);
    var v1106 = "<tr><td>" + v1156;
    var v1047 = v1106 + "</td><td>";
    var v948 = v1047 + tempNumber;
    var v816 = v948 + "</td><td>";
    var v817 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p12);
    var v602 = v816 + v817;
    var v262 = v602 + "</td></tr>\n";
    JAM.call(v261.write, v261, [v262], JAM.policy.p17);
    i$$10++;
    var v603 = arrayOfItems$$1.length;
    v263 = i$$10 < v603;
  }
  var v264 = outputWindow.document;
  JAM.call(v264.write, v264, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v604 = sequence$$17.length;
  var v271 = v604 > 0;
  for (;v271;) {
    maxNum$$1 = sequence$$17.length;
    var v605 = Math.random();
    var v265 = v605 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v265], JAM.policy.p15);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p15);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v266 = randNum$$1 + 1;
    var v267 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v266, v267], JAM.policy.p16);
    sequence$$17 = tempString1 + tempString2;
    var v606 = tempSeq.length;
    var v270 = v606 == 60;
    if (v270) {
      var v268 = outputWindow.document;
      var v269 = tempSeq + "\n";
      JAM.call(v268.write, v268, [v269], JAM.policy.p17);
      tempSeq = "";
    }
    var v607 = sequence$$17.length;
    v271 = v607 > 0;
  }
  var v272 = outputWindow.document;
  var v273 = tempSeq + "\n";
  JAM.call(v272.write, v272, [v273], JAM.policy.p17);
  return true;
}
function windowExtract(theDocument) {
  JAM.startProfile('compute');

  var newDna = "";
  var maxInput$$3 = 5E5;
  var matchFound = false;
  var ranges = new Array;
  var v608 = testScript();
  var v274 = v608 == false;
  if (v274) {
    return false;
  }
  var v1234 = theDocument.forms;
  var v1223 = v1234[0];
  var v1207 = v1223.elements;
  var v1190 = v1207[0];
  var v1157 = checkFormElement(v1190);
  var v1107 = v1157 == false;
  var v1159 = !v1107;
  if (v1159) {
    var v1243 = theDocument.forms;
    var v1235 = v1243[0];
    var v1224 = v1235.elements;
    var v1208 = v1224[0];
    var v1191 = v1208.value;
    var v1158 = JAM.call(checkSequenceLength, null, [v1191, maxInput$$3], JAM.policy.p20);
    v1107 = v1158 == false;
  }
  var v1048 = v1107;
  var v1109 = !v1048;
  if (v1109) {
    var v1225 = theDocument.forms;
    var v1209 = v1225[0];
    var v1192 = v1209.elements;
    var v1160 = v1192[1];
    var v1108 = checkFormElement(v1160);
    v1048 = v1108 == false;
  }
  var v949 = v1048;
  var v1050 = !v949;
  if (v1050) {
    var v1210 = theDocument.forms;
    var v1193 = v1210[0];
    var v1161 = v1193.elements;
    var v1110 = v1161[3];
    var v1049 = checkFormElement(v1110);
    v949 = v1049 == false;
  }
  var v818 = v949;
  var v951 = !v818;
  if (v951) {
    var v1226 = theDocument.forms;
    var v1211 = v1226[0];
    var v1194 = v1211.elements;
    var v1162 = v1194[1];
    var v1111 = v1162.value;
    var v1051 = JAM.call(v1111.replace, v1111, [/[^\d]/g, ""], JAM.policy.p16);
    var v950 = JAM.call(verifyMaxDigits, null, [v1051, maxInput$$3], JAM.policy.p20);
    v818 = v950 == false;
  }
  var v609 = v818;
  var v820 = !v609;
  if (v820) {
    var v1212 = theDocument.forms;
    var v1195 = v1212[0];
    var v1163 = v1195.elements;
    var v1112 = v1163[3];
    var v1052 = v1112.value;
    var v952 = JAM.call(v1052.replace, v1052, [/[^\d]/g, ""], JAM.policy.p16);
    var v819 = JAM.call(verifyMaxDigits, null, [v952, maxInput$$3], JAM.policy.p20);
    v609 = v819 == false;
  }
  var v275 = v609;
  if (v275) {
    return false;
  }
  var v1113 = theDocument.forms;
  var v1053 = v1113[0];
  var v953 = v1053.elements;
  var v821 = v953[1];
  var v610 = v821.value;
  var v276 = JAM.call(v610.replace, v610, [/[^\d]/g, ""], JAM.policy.p16);
  var windowSize = parseInt(v276);
  var v1114 = theDocument.forms;
  var v1054 = v1114[0];
  var v954 = v1054.elements;
  var v822 = v954[3];
  var v611 = v822.value;
  var v277 = JAM.call(v611.replace, v611, [/[^\d]/g, ""], JAM.policy.p16);
  var position = parseInt(v277);
  var v955 = theDocument.forms;
  var v823 = v955[0];
  var v612 = v823.elements;
  var v278 = v612[2];
  var orientation = v278.value;
  var start$$4;
  var end$$1;
  var v285 = orientation == "ending";
  if (v285) {
    end$$1 = position;
    var v279 = end$$1 - windowSize;
    start$$4 = v279 + 1;
  } else {
    var v284 = orientation == "starting";
    if (v284) {
      start$$4 = position;
      var v280 = start$$4 + windowSize;
      end$$1 = v280 - 1;
    } else {
      var v283 = orientation == "centered";
      if (v283) {
        var v824 = windowSize / 2;
        var v613 = JAM.call(Math.round, Math, [v824], JAM.policy.p17);
        var v281 = position - v613;
        start$$4 = v281 + 1;
        var v282 = start$$4 + windowSize;
        end$$1 = v282 - 1;
      }
    }
  }
  var v286 = JAM.new(Range, [start$$4, end$$1], JAM.policy.p20);
  JAM.call(ranges.push, ranges, [v286], JAM.policy.p17);
  openWindow("Window Extractor DNA");
  openPre();
  var v1055 = theDocument.forms;
  var v956 = v1055[0];
  var v825 = v956.elements;
  var v614 = v825[0];
  var v287 = v614.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v287);
  var i$$11 = 0;
  var v615 = arrayOfFasta$$1.length;
  var v294 = i$$11 < v615;
  for (;v294;) {
    var v288 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v288);
    var v289 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v289);
    verifyDna(newDna);
    newDna = removeNonDna(newDna);
    var v290 = outputWindow.document;
    var v291 = JAM.call(getFastaTitleFromTitleAndSequence, null, [title, newDna], JAM.policy.p20);
    JAM.call(v290.write, v290, [v291], JAM.policy.p17);
    var v1164 = theDocument.forms;
    var v1115 = v1164[0];
    var v1056 = v1115.elements;
    var v957 = v1056[7];
    var v826 = v957.options;
    var v1165 = theDocument.forms;
    var v1116 = v1165[0];
    var v1057 = v1116.elements;
    var v958 = v1057[7];
    var v827 = v958.selectedIndex;
    var v616 = v826[v827];
    var v292 = v616.value;
    var v1166 = theDocument.forms;
    var v1117 = v1166[0];
    var v1058 = v1117.elements;
    var v959 = v1058[8];
    var v828 = v959.options;
    var v1167 = theDocument.forms;
    var v1118 = v1167[0];
    var v1059 = v1118.elements;
    var v960 = v1059[8];
    var v829 = v960.selectedIndex;
    var v617 = v828[v829];
    var v293 = v617.value;
    JAM.call(writeSequenceRanges, null, [newDna, ranges, v292, v293], JAM.policy.p20);
    i$$11++;
    var v618 = arrayOfFasta$$1.length;
    v294 = i$$11 < v618;
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function rangeExtract(theDocument$$1) {
  var newDna$$1 = "";
  var maxInput$$4 = 5E5;
  var matchFound$$1 = false;
  var ranges$$1 = new Array;
  var v619 = testScript();
  var v295 = v619 == false;
  if (v295) {
    return false;
  }
  var v1196 = theDocument$$1.forms;
  var v1168 = v1196[0];
  var v1119 = v1168.elements;
  var v1060 = v1119[0];
  var v961 = checkFormElement(v1060);
  var v830 = v961 == false;
  var v963 = !v830;
  if (v963) {
    var v1213 = theDocument$$1.forms;
    var v1197 = v1213[0];
    var v1169 = v1197.elements;
    var v1120 = v1169[0];
    var v1061 = v1120.value;
    var v962 = JAM.call(checkSequenceLength, null, [v1061, maxInput$$4], JAM.policy.p20);
    v830 = v962 == false;
  }
  var v620 = v830;
  var v832 = !v620;
  if (v832) {
    var v1170 = theDocument$$1.forms;
    var v1121 = v1170[0];
    var v1062 = v1121.elements;
    var v964 = v1062[1];
    var v831 = checkFormElement(v964);
    v620 = v831 == false;
  }
  var v296 = v620;
  if (v296) {
    return false;
  }
  var v1063 = theDocument$$1.forms;
  var v965 = v1063[0];
  var v833 = v965.elements;
  var v621 = v833[1];
  var v297 = v621.value;
  var arrayOfRanges = JAM.call(v297.split, v297, [/,/], JAM.policy.p15);
  var arrayOfStartAndEnd;
  var i$$12 = 0;
  var v622 = arrayOfRanges.length;
  var v304 = i$$12 < v622;
  for (;v304;) {
    var v298 = arrayOfRanges[i$$12];
    arrayOfStartAndEnd = JAM.call(v298.split, v298, [/\.\./], JAM.policy.p15);
    var v623 = arrayOfStartAndEnd.length;
    var v303 = v623 == 1;
    if (v303) {
      matchFound$$1 = true;
      var v624 = arrayOfStartAndEnd[0];
      var v625 = arrayOfStartAndEnd[0];
      var v299 = JAM.new(Range, [v624, v625], JAM.policy.p20);
      JAM.call(ranges$$1.push, ranges$$1, [v299], JAM.policy.p17);
    } else {
      var v626 = arrayOfStartAndEnd.length;
      var v302 = v626 == 2;
      if (v302) {
        matchFound$$1 = true;
        var v627 = arrayOfStartAndEnd[0];
        var v628 = arrayOfStartAndEnd[1];
        var v300 = JAM.new(Range, [v627, v628], JAM.policy.p20);
        JAM.call(ranges$$1.push, ranges$$1, [v300], JAM.policy.p17);
      } else {
        var v629 = arrayOfRanges[i$$12];
        var v301 = "The following range entry was ignored: " + v629;
        alert(v301);
      }
    }
    i$$12++;
    var v630 = arrayOfRanges.length;
    v304 = i$$12 < v630;
  }
  var v305 = matchFound$$1 == false;
  if (v305) {
    alert("No ranges were entered.");
    return false;
  }
  openWindow("Range Extractor DNA");
  openPre();
  var v1064 = theDocument$$1.forms;
  var v966 = v1064[0];
  var v834 = v966.elements;
  var v631 = v834[0];
  var v306 = v631.value;
  var arrayOfFasta$$2 = getArrayOfFasta(v306);
  i$$12 = 0;
  var v632 = arrayOfFasta$$2.length;
  var v313 = i$$12 < v632;
  for (;v313;) {
    var v307 = arrayOfFasta$$2[i$$12];
    newDna$$1 = getSequenceFromFasta(v307);
    var v308 = arrayOfFasta$$2[i$$12];
    title = getTitleFromFasta(v308);
    verifyDna(newDna$$1);
    newDna$$1 = removeNonDna(newDna$$1);
    var v309 = outputWindow.document;
    var v310 = JAM.call(getFastaTitleFromTitleAndSequence, null, [title, newDna$$1], JAM.policy.p20);
    JAM.call(v309.write, v309, [v310], JAM.policy.p17);
    var v1171 = theDocument$$1.forms;
    var v1122 = v1171[0];
    var v1065 = v1122.elements;
    var v967 = v1065[5];
    var v835 = v967.options;
    var v1172 = theDocument$$1.forms;
    var v1123 = v1172[0];
    var v1066 = v1123.elements;
    var v968 = v1066[5];
    var v836 = v968.selectedIndex;
    var v633 = v835[v836];
    var v311 = v633.value;
    var v1173 = theDocument$$1.forms;
    var v1124 = v1173[0];
    var v1067 = v1124.elements;
    var v969 = v1067[6];
    var v837 = v969.options;
    var v1174 = theDocument$$1.forms;
    var v1125 = v1174[0];
    var v1068 = v1125.elements;
    var v970 = v1068[6];
    var v838 = v970.selectedIndex;
    var v634 = v837[v838];
    var v312 = v634.value;
    JAM.call(writeSequenceRanges, null, [newDna$$1, ranges$$1, v311, v312], JAM.policy.p20);
    i$$12++;
    var v635 = arrayOfFasta$$2.length;
    v313 = i$$12 < v635;
  }
  closePre();
  closeWindow();
  return true;
}
function writeSequenceRanges(sequence$$18, ranges$$2, strand, segmentType) {
  var rangeGroup = JAM.new(RangeGroup, [strand, segmentType], JAM.policy.p20);
  var v636 = sequence$$18.length;
  var v314 = v636 / 2;
  var center_base = JAM.call(Math.round, Math, [v314], JAM.policy.p17);
  var i$$13 = 0;
  var v637 = ranges$$2.length;
  var v328 = i$$13 < v637;
  for (;v328;) {
    var v315 = ranges$$2[i$$13];
    var v971 = ranges$$2[i$$13];
    var v839 = v971.start;
    var v638 = v839.toString();
    var v1265 = JAM.call(v638.replace, v638, [/start|begin/gi, 1], JAM.policy.p16);
    v315.start = v1265;
    var v316 = ranges$$2[i$$13];
    var v972 = ranges$$2[i$$13];
    var v840 = v972.start;
    var v639 = v840.toString();
    var v640 = sequence$$18.length;
    var v1266 = JAM.call(v639.replace, v639, [/stop|end/gi, v640], JAM.policy.p16);
    v316.start = v1266;
    var v317 = ranges$$2[i$$13];
    var v973 = ranges$$2[i$$13];
    var v841 = v973.start;
    var v641 = v841.toString();
    var v642 = sequence$$18.length;
    var v1267 = JAM.call(v641.replace, v641, [/length/gi, v642], JAM.policy.p16);
    v317.start = v1267;
    var v318 = ranges$$2[i$$13];
    var v974 = ranges$$2[i$$13];
    var v842 = v974.start;
    var v643 = v842.toString();
    var v1268 = JAM.call(v643.replace, v643, [/middle|center|centre/gi, center_base], JAM.policy.p16);
    v318.start = v1268;
    var v319 = ranges$$2[i$$13];
    var v975 = ranges$$2[i$$13];
    var v843 = v975.stop;
    var v644 = v843.toString();
    var v1269 = JAM.call(v644.replace, v644, [/start|begin/gi, 1], JAM.policy.p16);
    v319.stop = v1269;
    var v320 = ranges$$2[i$$13];
    var v976 = ranges$$2[i$$13];
    var v844 = v976.stop;
    var v645 = v844.toString();
    var v646 = sequence$$18.length;
    var v1270 = JAM.call(v645.replace, v645, [/stop|end/gi, v646], JAM.policy.p16);
    v320.stop = v1270;
    var v321 = ranges$$2[i$$13];
    var v977 = ranges$$2[i$$13];
    var v845 = v977.stop;
    var v647 = v845.toString();
    var v648 = sequence$$18.length;
    var v1271 = JAM.call(v647.replace, v647, [/length/gi, v648], JAM.policy.p16);
    v321.stop = v1271;
    var v322 = ranges$$2[i$$13];
    var v978 = ranges$$2[i$$13];
    var v846 = v978.stop;
    var v649 = v846.toString();
    var v1272 = JAM.call(v649.replace, v649, [/middle|center|centre/gi, center_base], JAM.policy.p16);
    v322.stop = v1272;
    try {
      var v323 = ranges$$2[i$$13];
      var v1069 = ranges$$2[i$$13];
      var v979 = v1069.start;
      var v847 = v979.toString();
      if (JAM.isEval(eval)) {
        var v650 = eval("introspect(JAM.policy.pFull) { " + v847 + " }")
      } else {
        var v650 = JAM.call(eval, null, [v847])
      }
      var v1273 = parseInt(v650);
      v323.start = v1273;
    } catch (e$$5) {
      var v848 = ranges$$2[i$$13];
      var v651 = v848.start;
      var v324 = "Could not evaluate the following expression: " + v651;
      alert(v324);
      return false;
    }
    try {
      var v325 = ranges$$2[i$$13];
      var v1070 = ranges$$2[i$$13];
      var v980 = v1070.stop;
      var v849 = v980.toString();
      if (JAM.isEval(eval)) {
        var v652 = eval("introspect(JAM.policy.pFull) { " + v849 + " }")
      } else {
        var v652 = JAM.call(eval, null, [v849])
      }
      var v1274 = parseInt(v652);
      v325.stop = v1274;
    } catch (e$$6) {
      var v850 = ranges$$2[i$$13];
      var v653 = v850.stop;
      var v326 = "Could not evaluate the following expression: " + v653;
      alert(v326);
      return false;
    }
    var v327 = ranges$$2[i$$13];
    JAM.call(rangeGroup.addRange, rangeGroup, [v327], JAM.policy.p17);
    i$$13++;
    var v654 = ranges$$2.length;
    v328 = i$$13 < v654;
  }
  JAM.call(rangeGroup.writeRanges, rangeGroup, [sequence$$18], JAM.policy.p17);
  return;
}
function getSequence(sequence$$19) {
  var problem = false;
  var warnings = new Array;
  var v655 = this.start;
  var v656 = this.stop;
  var v343 = v655 == v656;
  if (v343) {
    var v657 = this.start;
    var v330 = v657 < 1;
    if (v330) {
      problem = true;
      var v851 = this.start;
      var v658 = "position value of " + v851;
      var v329 = v658 + " is less than 1";
      JAM.call(warnings.push, warnings, [v329], JAM.policy.p17);
    }
    var v659 = this.start;
    var v660 = sequence$$19.length;
    var v332 = v659 > v660;
    if (v332) {
      problem = true;
      var v852 = this.start;
      var v661 = "position value of " + v852;
      var v331 = v661 + " is greater than the sequence length";
      JAM.call(warnings.push, warnings, [v331], JAM.policy.p17);
    }
  } else {
    var v662 = this.start;
    var v334 = v662 < 1;
    if (v334) {
      problem = true;
      var v853 = this.start;
      var v663 = "position value of " + v853;
      var v333 = v663 + " is less than 1";
      JAM.call(warnings.push, warnings, [v333], JAM.policy.p17);
    }
    var v664 = this.stop;
    var v336 = v664 < 1;
    if (v336) {
      problem = true;
      var v854 = this.stop;
      var v665 = "position value of " + v854;
      var v335 = v665 + " is less than 1";
      JAM.call(warnings.push, warnings, [v335], JAM.policy.p17);
    }
    var v666 = this.start;
    var v667 = sequence$$19.length;
    var v338 = v666 > v667;
    if (v338) {
      problem = true;
      var v855 = this.start;
      var v668 = "position value of " + v855;
      var v337 = v668 + " is greater than the sequence length";
      JAM.call(warnings.push, warnings, [v337], JAM.policy.p17);
    }
    var v669 = this.stop;
    var v670 = sequence$$19.length;
    var v340 = v669 > v670;
    if (v340) {
      problem = true;
      var v856 = this.stop;
      var v671 = "position value of " + v856;
      var v339 = v671 + " is greater than the sequence length";
      JAM.call(warnings.push, warnings, [v339], JAM.policy.p17);
    }
    var v672 = this.start;
    var v673 = this.stop;
    var v342 = v672 > v673;
    if (v342) {
      problem = true;
      var v981 = this.start;
      var v857 = "stop position is less than start position in range " + v981;
      var v674 = v857 + " to ";
      var v675 = this.stop;
      var v341 = v674 + v675;
      JAM.call(warnings.push, warnings, [v341], JAM.policy.p17);
    }
  }
  if (problem) {
    var v676 = JAM.call(warnings.join, warnings, [",\n"], JAM.policy.p11);
    var v344 = "An entry was skipped because of the following:\n" + v676;
    alert(v344);
    return false;
  } else {
    var v677 = this.start;
    var v678 = this.stop;
    var v348 = v677 == v678;
    if (v348) {
      var v679 = this.start;
      var v345 = v679 - 1;
      return JAM.call(sequence$$19.charAt, sequence$$19, [v345], JAM.policy.p17);
    } else {
      var v680 = this.start;
      var v346 = v680 - 1;
      var v347 = this.stop;
      return JAM.call(sequence$$19.substring, sequence$$19, [v346, v347], JAM.policy.p21);
    }
  }
  return;
}
function getTitle() {
  var v681 = this.start;
  var v682 = this.stop;
  var v352 = v681 == v682;
  if (v352) {
    var v349 = this.start;
    return "&gt;base " + v349;
  } else {
    var v858 = this.start;
    var v683 = "&gt;base " + v858;
    var v350 = v683 + " to ";
    var v351 = this.stop;
    return v350 + v351;
  }
  return;
}
function Range(start$$5, stop) {
  this.start = start$$5;
  this.stop = stop;
  return;
}
function addRange(range$$5) {
  var v353 = this.ranges;
  JAM.call(v353.push, v353, [range$$5], JAM.policy.p17);
  return;
}
function writeRanges(sequence$$20) {
  function v9(str$$15, p1$$9, offset$$17, s$$11) {
    var v684 = p1$$9.length;
    var v354 = offset$$17 + v684;
    return JAM.call(sequence$$20.substring, sequence$$20, [offset$$17, v354], JAM.policy.p21);
  }
  function v8(str$$14, p1$$8, p2$$3, offset$$16, s$$10) {
    var v685 = p1$$8.length;
    var v859 = p1$$8.length;
    var v860 = p2$$3.length;
    var v686 = v859 + v860;
    var v355 = JAM.call(sequence$$20.substring, sequence$$20, [v685, v686], JAM.policy.p21);
    return p1$$8 + v355;
  }
  function v7(str$$13, p1$$7, offset$$15, s$$9) {
    var v356 = ["g", "a", "c", "t"];
    var v357 = p1$$7.length;
    return JAM.call(getRandomSequence, null, [v356, v357], JAM.policy.p20);
  }
  function v6(str$$12, p1$$6, p2$$2, offset$$14, s$$8) {
    var v687 = ["g", "a", "c", "t"];
    var v688 = p2$$2.length;
    var v358 = JAM.call(getRandomSequence, null, [v687, v688], JAM.policy.p20);
    return p1$$6 + v358;
  }
  function v5(str$$11, p1$$5, offset$$13, s$$7) {
    return p1$$5.toLowerCase();
  }
  function v4(str$$10, p1$$4, p2$$1, offset$$12, s$$6) {
    var v359 = p2$$1.toLowerCase();
    return p1$$4 + v359;
  }
  function v3(str$$9, p1$$3, offset$$11, s$$5) {
    return p1$$3.toUpperCase();
  }
  function v2(str$$8, p1$$2, p2, offset$$10, s$$4) {
    var v360 = p2.toUpperCase();
    return p1$$2 + v360;
  }
  var sequenceArray$$1 = new Array;
  var v689 = this.type;
  var v369 = v689 == "new_sequence";
  if (v369) {
    var i$$14 = 0;
    var v861 = this.ranges;
    var v690 = v861.length;
    var v363 = i$$14 < v690;
    for (;v363;) {
      var v982 = this.ranges;
      var v862 = v982[i$$14];
      var v691 = JAM.call(v862.getSequence, v862, [sequence$$20], JAM.policy.p17);
      var v362 = v691 != "";
      if (v362) {
        var v863 = this.ranges;
        var v692 = v863[i$$14];
        var v361 = JAM.call(v692.getSequence, v692, [sequence$$20], JAM.policy.p17);
        JAM.call(sequenceArray$$1.push, sequenceArray$$1, [v361], JAM.policy.p17);
      }
      i$$14++;
      var v864 = this.ranges;
      var v693 = v864.length;
      v363 = i$$14 < v693;
    }
    var v694 = this.strand;
    var v368 = v694 == "reverse";
    if (v368) {
      var v364 = outputWindow.document;
      var v1071 = JAM.call(sequenceArray$$1.join, sequenceArray$$1, [""], JAM.policy.p11);
      var v983 = complement(v1071);
      var v865 = reverse(v983);
      var v695 = addReturns(v865);
      var v365 = v695 + "\n\n";
      JAM.call(v364.write, v364, [v365], JAM.policy.p17);
    } else {
      var v366 = outputWindow.document;
      var v866 = JAM.call(sequenceArray$$1.join, sequenceArray$$1, [""], JAM.policy.p11);
      var v696 = addReturns(v866);
      var v367 = v696 + "\n\n";
      JAM.call(v366.write, v366, [v367], JAM.policy.p17);
    }
    return true;
  }
  var v697 = this.type;
  var v379 = v697 == "separate";
  if (v379) {
    i$$14 = 0;
    var v867 = this.ranges;
    var v698 = v867.length;
    var v378 = i$$14 < v698;
    for (;v378;) {
      var v984 = this.ranges;
      var v868 = v984[i$$14];
      var v699 = JAM.call(v868.getSequence, v868, [sequence$$20], JAM.policy.p17);
      var v377 = v699 != "";
      if (v377) {
        var v370 = outputWindow.document;
        var v985 = this.ranges;
        var v869 = v985[i$$14];
        var v700 = v869.getTitle();
        var v371 = v700 + "\n";
        JAM.call(v370.write, v370, [v371], JAM.policy.p17);
        var v701 = this.strand;
        var v376 = v701 == "reverse";
        if (v376) {
          var v372 = outputWindow.document;
          var v1175 = this.ranges;
          var v1126 = v1175[i$$14];
          var v1072 = JAM.call(v1126.getSequence, v1126, [sequence$$20], JAM.policy.p17);
          var v986 = addReturns(v1072);
          var v870 = complement(v986);
          var v702 = reverse(v870);
          var v373 = v702 + "\n\n";
          JAM.call(v372.write, v372, [v373], JAM.policy.p17);
        } else {
          var v374 = outputWindow.document;
          var v1073 = this.ranges;
          var v987 = v1073[i$$14];
          var v871 = JAM.call(v987.getSequence, v987, [sequence$$20], JAM.policy.p17);
          var v703 = addReturns(v871);
          var v375 = v703 + "\n\n";
          JAM.call(v374.write, v374, [v375], JAM.policy.p17);
        }
      }
      i$$14++;
      var v872 = this.ranges;
      var v704 = v872.length;
      v378 = i$$14 < v704;
    }
    return true;
  }
  var v705 = this.type;
  var v390 = v705 == "uppercased";
  if (v390) {
    var re$$3;
    sequence$$20 = sequence$$20.toLowerCase();
    i$$14 = 0;
    var v873 = this.ranges;
    var v706 = v873.length;
    var v384 = i$$14 < v706;
    for (;v384;) {
      var v988 = this.ranges;
      var v874 = v988[i$$14];
      var v707 = JAM.call(v874.getSequence, v874, [sequence$$20], JAM.policy.p17);
      var v383 = v707 != "";
      if (v383) {
        var v989 = this.ranges;
        var v875 = v989[i$$14];
        var v708 = v875.start;
        var v382 = v708 > 1;
        if (v382) {
          var v1176 = this.ranges;
          var v1127 = v1176[i$$14];
          var v1074 = v1127.start;
          var v990 = v1074 - 1;
          var v876 = "(.{" + v990;
          var v709 = v876 + "})\\B(.{";
          var v1128 = this.ranges;
          var v1075 = v1128[i$$14];
          var v991 = v1075.stop;
          var v1129 = this.ranges;
          var v1076 = v1129[i$$14];
          var v992 = v1076.start;
          var v877 = v991 - v992;
          var v710 = v877 + 1;
          var v380 = v709 + v710;
          re$$3 = v380 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v2], JAM.policy.p21);
        } else {
          var v1130 = this.ranges;
          var v1077 = v1130[i$$14];
          var v993 = v1077.stop;
          var v1131 = this.ranges;
          var v1078 = v1131[i$$14];
          var v994 = v1078.start;
          var v878 = v993 - v994;
          var v711 = v878 + 1;
          var v381 = "(.{" + v711;
          re$$3 = v381 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v3], JAM.policy.p21);
        }
      }
      i$$14++;
      var v879 = this.ranges;
      var v712 = v879.length;
      v384 = i$$14 < v712;
    }
    var v713 = this.strand;
    var v389 = v713 == "reverse";
    if (v389) {
      var v385 = outputWindow.document;
      var v995 = addReturns(sequence$$20);
      var v880 = complement(v995);
      var v714 = reverse(v880);
      var v386 = v714 + "\n\n";
      JAM.call(v385.write, v385, [v386], JAM.policy.p17);
    } else {
      var v387 = outputWindow.document;
      var v715 = addReturns(sequence$$20);
      var v388 = v715 + "\n\n";
      JAM.call(v387.write, v387, [v388], JAM.policy.p17);
    }
    return true;
  }
  var v716 = this.type;
  var v401 = v716 == "lowercased";
  if (v401) {
    sequence$$20 = sequence$$20.toUpperCase();
    i$$14 = 0;
    var v881 = this.ranges;
    var v717 = v881.length;
    var v395 = i$$14 < v717;
    for (;v395;) {
      var v996 = this.ranges;
      var v882 = v996[i$$14];
      var v718 = JAM.call(v882.getSequence, v882, [sequence$$20], JAM.policy.p17);
      var v394 = v718 != "";
      if (v394) {
        var v997 = this.ranges;
        var v883 = v997[i$$14];
        var v719 = v883.start;
        var v393 = v719 > 1;
        if (v393) {
          var v1177 = this.ranges;
          var v1132 = v1177[i$$14];
          var v1079 = v1132.start;
          var v998 = v1079 - 1;
          var v884 = "(.{" + v998;
          var v720 = v884 + "})\\B(.{";
          var v1133 = this.ranges;
          var v1080 = v1133[i$$14];
          var v999 = v1080.stop;
          var v1134 = this.ranges;
          var v1081 = v1134[i$$14];
          var v1000 = v1081.start;
          var v885 = v999 - v1000;
          var v721 = v885 + 1;
          var v391 = v720 + v721;
          re$$3 = v391 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v4], JAM.policy.p21);
        } else {
          var v1135 = this.ranges;
          var v1082 = v1135[i$$14];
          var v1001 = v1082.stop;
          var v1136 = this.ranges;
          var v1083 = v1136[i$$14];
          var v1002 = v1083.start;
          var v886 = v1001 - v1002;
          var v722 = v886 + 1;
          var v392 = "(.{" + v722;
          re$$3 = v392 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v5], JAM.policy.p21);
        }
      }
      i$$14++;
      var v887 = this.ranges;
      var v723 = v887.length;
      v395 = i$$14 < v723;
    }
    var v724 = this.strand;
    var v400 = v724 == "reverse";
    if (v400) {
      var v396 = outputWindow.document;
      var v1003 = addReturns(sequence$$20);
      var v888 = complement(v1003);
      var v725 = reverse(v888);
      var v397 = v725 + "\n\n";
      JAM.call(v396.write, v396, [v397], JAM.policy.p17);
    } else {
      var v398 = outputWindow.document;
      var v726 = addReturns(sequence$$20);
      var v399 = v726 + "\n\n";
      JAM.call(v398.write, v398, [v399], JAM.policy.p17);
    }
    return true;
  }
  var v727 = this.type;
  var v412 = v727 == "randomized";
  if (v412) {
    i$$14 = 0;
    var v889 = this.ranges;
    var v728 = v889.length;
    var v406 = i$$14 < v728;
    for (;v406;) {
      var v1004 = this.ranges;
      var v890 = v1004[i$$14];
      var v729 = JAM.call(v890.getSequence, v890, [sequence$$20], JAM.policy.p17);
      var v405 = v729 != "";
      if (v405) {
        var v1005 = this.ranges;
        var v891 = v1005[i$$14];
        var v730 = v891.start;
        var v404 = v730 > 1;
        if (v404) {
          var v1178 = this.ranges;
          var v1137 = v1178[i$$14];
          var v1084 = v1137.start;
          var v1006 = v1084 - 1;
          var v892 = "(.{" + v1006;
          var v731 = v892 + "})\\B(.{";
          var v1138 = this.ranges;
          var v1085 = v1138[i$$14];
          var v1007 = v1085.stop;
          var v1139 = this.ranges;
          var v1086 = v1139[i$$14];
          var v1008 = v1086.start;
          var v893 = v1007 - v1008;
          var v732 = v893 + 1;
          var v402 = v731 + v732;
          re$$3 = v402 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v6], JAM.policy.p21);
        } else {
          var v1140 = this.ranges;
          var v1087 = v1140[i$$14];
          var v1009 = v1087.stop;
          var v1141 = this.ranges;
          var v1088 = v1141[i$$14];
          var v1010 = v1088.start;
          var v894 = v1009 - v1010;
          var v733 = v894 + 1;
          var v403 = "(.{" + v733;
          re$$3 = v403 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v7], JAM.policy.p21);
        }
      }
      i$$14++;
      var v895 = this.ranges;
      var v734 = v895.length;
      v406 = i$$14 < v734;
    }
    var v735 = this.strand;
    var v411 = v735 == "reverse";
    if (v411) {
      var v407 = outputWindow.document;
      var v1011 = addReturns(sequence$$20);
      var v896 = complement(v1011);
      var v736 = reverse(v896);
      var v408 = v736 + "\n\n";
      JAM.call(v407.write, v407, [v408], JAM.policy.p17);
    } else {
      var v409 = outputWindow.document;
      var v737 = addReturns(sequence$$20);
      var v410 = v737 + "\n\n";
      JAM.call(v409.write, v409, [v410], JAM.policy.p17);
    }
    return true;
  }
  var v738 = this.type;
  var v425 = v738 == "preserved";
  if (v425) {
    var v413 = ["g", "a", "c", "t"];
    var v414 = sequence$$20.length;
    var randomSequence = JAM.call(getRandomSequence, null, [v413, v414], JAM.policy.p20);
    i$$14 = 0;
    var v897 = this.ranges;
    var v739 = v897.length;
    var v419 = i$$14 < v739;
    for (;v419;) {
      var v1012 = this.ranges;
      var v898 = v1012[i$$14];
      var v740 = JAM.call(v898.getSequence, v898, [sequence$$20], JAM.policy.p17);
      var v418 = v740 != "";
      if (v418) {
        var v1013 = this.ranges;
        var v899 = v1013[i$$14];
        var v741 = v899.start;
        var v417 = v741 > 1;
        if (v417) {
          var v1179 = this.ranges;
          var v1142 = v1179[i$$14];
          var v1089 = v1142.start;
          var v1014 = v1089 - 1;
          var v900 = "(.{" + v1014;
          var v742 = v900 + "})\\B(.{";
          var v1143 = this.ranges;
          var v1090 = v1143[i$$14];
          var v1015 = v1090.stop;
          var v1144 = this.ranges;
          var v1091 = v1144[i$$14];
          var v1016 = v1091.start;
          var v901 = v1015 - v1016;
          var v743 = v901 + 1;
          var v415 = v742 + v743;
          re$$3 = v415 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v8], JAM.policy.p21);
        } else {
          var v1145 = this.ranges;
          var v1092 = v1145[i$$14];
          var v1017 = v1092.stop;
          var v1146 = this.ranges;
          var v1093 = v1146[i$$14];
          var v1018 = v1093.start;
          var v902 = v1017 - v1018;
          var v744 = v902 + 1;
          var v416 = "(.{" + v744;
          re$$3 = v416 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v9], JAM.policy.p21);
        }
      }
      i$$14++;
      var v903 = this.ranges;
      var v745 = v903.length;
      v419 = i$$14 < v745;
    }
    var v746 = this.strand;
    var v424 = v746 == "reverse";
    if (v424) {
      var v420 = outputWindow.document;
      var v1019 = addReturns(randomSequence);
      var v904 = complement(v1019);
      var v747 = reverse(v904);
      var v421 = v747 + "\n\n";
      JAM.call(v420.write, v420, [v421], JAM.policy.p17);
    } else {
      var v422 = outputWindow.document;
      var v748 = addReturns(randomSequence);
      var v423 = v748 + "\n\n";
      JAM.call(v422.write, v422, [v423], JAM.policy.p17);
    }
    return true;
  }
  return;
}
function RangeGroup(strand$$1, type$$25) {
  this.strand = strand$$1;
  this.type = type$$25;
  var v1275 = new Array;
  this.ranges = v1275;
  return;
}
new Range(0, 0);
var v426 = Range.prototype;
v426.getSequence = getSequence;
var v427 = Range.prototype;
v427.getTitle = getTitle;
new RangeGroup("", "");
var v428 = RangeGroup.prototype;
v428.addRange = addRange;
var v429 = RangeGroup.prototype;
v429.writeRanges = writeRanges;
JAM.set(document, "onload", v10);
var v430 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11);
JAM.set(v430, "onclick", v11);
var v431 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11);
JAM.set(v431, "onclick", v12)

JAM.stopProfile('load');
