function v12() {
  var v899 = document.forms;
  var v744 = v899[0];
  var v428 = v744.elements;
  var v13 = v428[0];
  v13.value = " ";
  return;
}
function v11() {
  try {
    windowExtract();
  } catch (e$$7) {
    var v14 = "The following error was encountered: " + e$$7;
    alert(v14);
  }
  return;
}
function v10() {
  var v429 = document.main_form;
  var v15 = v429.main_submit;
  v15.focus();
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
  var v16 = arrayOfSequences[0];
  var lengthOfAlign = v16.length;
  var v430 = arrayOfSequences.length;
  var v17 = v430 < 2;
  if (v17) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v431 = arrayOfTitles.length;
  var v19 = i$$1 < v431;
  for (;v19;) {
    var v1014 = arrayOfTitles[i$$1];
    var v900 = JAM.call(v1014.search, v1014, [/\S/], JAM.policy.p16);
    var v745 = v900 == -1;
    var v902 = !v745;
    if (v902) {
      var v1015 = arrayOfSequences[i$$1];
      var v901 = JAM.call(v1015.search, v1015, [/\S/], JAM.policy.p16);
      v745 = v901 == -1;
    }
    var v432 = v745;
    var v747 = !v432;
    if (v747) {
      var v903 = arrayOfSequences[i$$1];
      var v746 = v903.length;
      v432 = v746 != lengthOfAlign;
    }
    var v18 = v432;
    if (v18) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v433 = arrayOfTitles.length;
    v19 = i$$1 < v433;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1088 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p16);
  var v1016 = v1088 == -1;
  var v1090 = !v1016;
  if (v1090) {
    var v1089 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p16);
    v1016 = v1089 == -1;
  }
  var v904 = v1016;
  var v1018 = !v904;
  if (v1018) {
    var v1017 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p16);
    v904 = v1017 == -1;
  }
  var v748 = v904;
  var v906 = !v748;
  if (v906) {
    var v905 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p16);
    v748 = v905 == -1;
  }
  var v434 = v748;
  var v750 = !v434;
  if (v750) {
    var v749 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p16);
    v434 = v749 == -1;
  }
  var v20 = v434;
  if (v20) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v751 = formElement.value;
  var v435 = JAM.call(v751.search, v751, [/\S/], JAM.policy.p16);
  var v21 = v435 == -1;
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
  var v436 = arrayOfPatterns.length;
  var v24 = z$$2 < v436;
  for (;v24;) {
    var v752 = arrayOfPatterns[z$$2];
    var v437 = JAM.call(v752.search, v752, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p16);
    var v22 = v437 == -1;
    if (v22) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v753 = arrayOfPatterns[z$$2];
    var v438 = moreExpressionCheck(v753);
    var v23 = v438 == false;
    if (v23) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v439 = arrayOfPatterns.length;
    v24 = z$$2 < v439;
  }
  var v25 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v25);
  var v26 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v26);
  var j = 0;
  var v440 = arrayOfPatterns.length;
  var v30 = j < v440;
  for (;v30;) {
    var v754 = arrayOfPatterns[j];
    var v441 = JAM.call(v754.match, v754, [/\/.+\//], JAM.policy.p16);
    var v27 = v441 + "gi";
    if (JAM.isEval(eval)) {
      var v1253 = eval("introspect(JAM.policy.pFull) { " + v27 + " }")
    } else {
      var v1253 = JAM.call(eval, null, [v27])
    }
    geneticCodeMatchExp[j] = v1253;
    var v442 = arrayOfPatterns[j];
    var v28 = JAM.call(v442.match, v442, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v1254 = v28.toString();
    geneticCodeMatchResult[j] = v1254;
    var v29 = geneticCodeMatchResult[j];
    var v1255 = JAM.call(v29.replace, v29, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v1255;
    j++;
    var v443 = arrayOfPatterns.length;
    v30 = j < v443;
  }
  var i$$2 = 0;
  var v755 = testSequence.length;
  var v444 = v755 - 3;
  var v37 = i$$2 <= v444;
  for (;v37;) {
    var v31 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v31], JAM.policy.p15);
    j = 0;
    var v445 = geneticCodeMatchExp.length;
    var v35 = j < v445;
    for (;v35;) {
      var v756 = geneticCodeMatchExp[j];
      var v446 = JAM.call(codon.search, codon, [v756], JAM.policy.p18);
      var v34 = v446 != -1;
      if (v34) {
        var v33 = oneMatch == true;
        if (v33) {
          var v447 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v32 = v447 + ".";
          alert(v32);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v448 = geneticCodeMatchExp.length;
      v35 = j < v448;
    }
    var v36 = oneMatch == false;
    if (v36) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v757 = testSequence.length;
    var v449 = v757 - 3;
    v37 = i$$2 <= v449;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v450 = arrayOfPatterns$$1.length;
  var v39 = z$$3 < v450;
  for (;v39;) {
    var v758 = arrayOfPatterns$$1[z$$3];
    var v451 = JAM.call(v758.search, v758, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p16);
    var v38 = v451 != -1;
    if (v38) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v452 = arrayOfPatterns$$1.length;
    v39 = z$$3 < v452;
  }
  var i$$3 = 0;
  var v453 = arrayOfPatterns$$1.length;
  var v43 = i$$3 < v453;
  for (;v43;) {
    var v759 = arrayOfPatterns$$1[i$$3];
    var v454 = "[" + v759;
    var v40 = v454 + "]";
    var re = new RegExp(v40, "gi");
    var j$$1 = i$$3 + 1;
    var v455 = arrayOfPatterns$$1.length;
    var v42 = j$$1 < v455;
    for (;v42;) {
      var v760 = arrayOfPatterns$$1[j$$1];
      var v456 = JAM.call(v760.search, v760, [re], JAM.policy.p18);
      var v41 = v456 != -1;
      if (v41) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v457 = arrayOfPatterns$$1.length;
      v42 = j$$1 < v457;
    }
    i$$3++;
    var v458 = arrayOfPatterns$$1.length;
    v43 = i$$3 < v458;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v459 = arrayOfPatterns$$2.length;
  var v46 = z$$4 < v459;
  for (;v46;) {
    var v761 = arrayOfPatterns$$2[z$$4];
    var v460 = JAM.call(v761.search, v761, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p16);
    var v44 = v460 == -1;
    if (v44) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v762 = arrayOfPatterns$$2[z$$4];
    var v461 = moreExpressionCheck(v762);
    var v45 = v461 == false;
    if (v45) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v462 = arrayOfPatterns$$2.length;
    v46 = z$$4 < v462;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v907 = getSequenceFromFasta(text$$7);
  var v763 = JAM.call(v907.replace, v907, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v463 = v763.length;
  var v48 = v463 > maxInput;
  if (v48) {
    var v464 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v47 = v464 + " characters.";
    alert(v47);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v465 = text$$8.length;
  var v50 = v465 > maxInput$$1;
  if (v50) {
    var v466 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v49 = v466 + " characters.";
    alert(v49);
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
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</form>"], JAM.policy.p10);
  return true;
}
function closePre() {
  var v52 = outputWindow.document;
  JAM.call(v52.write, v52, ["</div>"], JAM.policy.p10);
  var v53 = outputWindow.document;
  JAM.call(v53.write, v53, ["</pre>\n"], JAM.policy.p10);
  return;
}
function closeTextArea() {
  var v54 = outputWindow.document;
  JAM.call(v54.write, v54, ["</textarea>"], JAM.policy.p10);
  return true;
}
function closeWindow() {
  var v55 = outputWindow.document;
  JAM.call(v55.write, v55, ["</body>\n</html>\n"], JAM.policy.p10);
  outputWindow.status = "Done.";
  var v56 = outputWindow.document;
  v56.close();
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
  var v467 = alignArray.length;
  var v57 = v467 < 3;
  if (v57) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v468 = alignArray.length;
  var v59 = i$$4 < v468;
  for (;v59;) {
    var v764 = alignArray[i$$4];
    var v469 = JAM.call(v764.search, v764, [/[^\s]+\s/], JAM.policy.p16);
    var v58 = v469 == -1;
    if (v58) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v470 = alignArray.length;
    v59 = i$$4 < v470;
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
  var v471 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v62 = v471 != -1;
  if (v62) {
    var v61 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p18);
    for (;v61;) {
      var v60 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v60], JAM.policy.p18);
      v61 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p18);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(sequence$$2) {
  var fastaSequenceTitle = title;
  var v472 = sequence$$2.length;
  var v63 = "&gt;results for " + v472;
  var stringToReturn = v63 + " residue sequence ";
  var v473 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p16);
  var v65 = v473 != -1;
  if (v65) {
    var v474 = stringToReturn + '"';
    var v64 = v474 + fastaSequenceTitle;
    stringToReturn = v64 + '"';
  }
  var v475 = stringToReturn + ' starting "';
  var v476 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v66 = v475 + v476;
  stringToReturn = v66 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v477 = sequenceOne.length;
  var v67 = "Search results for " + v477;
  var stringToReturn$$1 = v67 + " residue sequence ";
  var v478 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p16);
  var v69 = v478 != -1;
  if (v69) {
    var v479 = stringToReturn$$1 + '"';
    var v68 = v479 + fastaSequenceTitleOne;
    stringToReturn$$1 = v68 + '"';
  }
  var v480 = stringToReturn$$1 + ' starting "';
  var v481 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v70 = v480 + v481;
  stringToReturn$$1 = v70 + '"\n';
  var v482 = stringToReturn$$1 + "and ";
  var v483 = sequenceTwo.length;
  var v71 = v482 + v483;
  stringToReturn$$1 = v71 + " residue sequence ";
  var v484 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p16);
  var v73 = v484 != -1;
  if (v73) {
    var v485 = stringToReturn$$1 + '"';
    var v72 = v485 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v72 + '"';
  }
  var v486 = stringToReturn$$1 + ' starting "';
  var v487 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v74 = v486 + v487;
  stringToReturn$$1 = v74 + '"';
  var v75 = '<div class="info">' + stringToReturn$$1;
  return v75 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v76 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v76);
  var j$$2 = 0;
  var v488 = arrayOfPatterns$$3.length;
  var v78 = j$$2 < v488;
  for (;v78;) {
    var v765 = arrayOfPatterns$$3[j$$2];
    var v489 = JAM.call(v765.match, v765, [/\/.+\//], JAM.policy.p16);
    var v77 = v489 + "gi";
    if (JAM.isEval(eval)) {
      var v1256 = eval("introspect(JAM.policy.pFull) { " + v77 + " }")
    } else {
      var v1256 = JAM.call(eval, null, [v77])
    }
    geneticCodeMatchExp$$1[j$$2] = v1256;
    j$$2++;
    var v490 = arrayOfPatterns$$3.length;
    v78 = j$$2 < v490;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v79 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v79);
  var j$$3 = 0;
  var v491 = arrayOfPatterns$$4.length;
  var v82 = j$$3 < v491;
  for (;v82;) {
    var v492 = arrayOfPatterns$$4[j$$3];
    var v80 = JAM.call(v492.match, v492, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v1257 = v80.toString();
    geneticCodeMatchResult$$1[j$$3] = v1257;
    var v81 = geneticCodeMatchResult$$1[j$$3];
    var v1258 = JAM.call(v81.replace, v81, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v1258;
    j$$3++;
    var v493 = arrayOfPatterns$$4.length;
    v82 = j$$3 < v493;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v494 = sequence$$3.length;
  var v83 = "Results for " + v494;
  var stringToReturn$$2 = v83 + " residue sequence ";
  var v495 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p16);
  var v85 = v495 != -1;
  if (v85) {
    var v496 = stringToReturn$$2 + '"';
    var v84 = v496 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v84 + '"';
  }
  var v497 = stringToReturn$$2 + ' starting "';
  var v498 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v86 = v497 + v498;
  stringToReturn$$2 = v86 + '"';
  var v87 = '<div class="info">' + stringToReturn$$2;
  return v87 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v766 = "Results for " + topology;
  var v499 = v766 + " ";
  var v500 = sequence$$4.length;
  var v88 = v499 + v500;
  var stringToReturn$$3 = v88 + " residue sequence ";
  var v501 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p16);
  var v90 = v501 != -1;
  if (v90) {
    var v502 = stringToReturn$$3 + '"';
    var v89 = v502 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v89 + '"';
  }
  var v503 = stringToReturn$$3 + ' starting "';
  var v504 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v91 = v503 + v504;
  stringToReturn$$3 = v91 + '"';
  var v92 = '<div class="info">' + stringToReturn$$3;
  return v92 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v505 = sequenceOne$$1.length;
  var v93 = "Alignment results for " + v505;
  var stringToReturn$$4 = v93 + " residue sequence ";
  var v506 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p16);
  var v95 = v506 != -1;
  if (v95) {
    var v507 = stringToReturn$$4 + '"';
    var v94 = v507 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v94 + '"';
  }
  var v508 = stringToReturn$$4 + ' starting "';
  var v509 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v96 = v508 + v509;
  stringToReturn$$4 = v96 + '"\n';
  var v510 = stringToReturn$$4 + "and ";
  var v511 = sequenceTwo$$1.length;
  var v97 = v510 + v511;
  stringToReturn$$4 = v97 + " residue sequence ";
  var v512 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p16);
  var v99 = v512 != -1;
  if (v99) {
    var v513 = stringToReturn$$4 + '"';
    var v98 = v513 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v98 + '"';
  }
  var v514 = stringToReturn$$4 + ' starting "';
  var v515 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v100 = v514 + v515;
  stringToReturn$$4 = v100 + '"';
  var v101 = '<div class="info">' + stringToReturn$$4;
  return v101 + "</div>\n";
}
function getRandomSequence(lengthOut) {
  var components = ["g", "a", "c", "t"];
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v103 = j$$4 < lengthOut;
  for (;v103;) {
    var v516 = Math.random();
    var v517 = components.length;
    var v102 = v516 * v517;
    tempNum = JAM.call(Math.floor, Math, [v102], JAM.policy.p16);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p18);
    j$$4++;
    v103 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p10);
}
function getSequenceFromFasta(sequenceRecord) {
  var v518 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v104 = v518 != -1;
  if (v104) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v519 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v106 = v519 != -1;
  if (v106) {
    var v105 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
    fastaTitle = v105.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p15);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1230 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p16);
  var v1221 = v1230 != -1;
  var v1232 = !v1221;
  if (v1232) {
    var v1231 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p16);
    v1221 = v1231 != -1;
  }
  var v1208 = v1221;
  var v1223 = !v1208;
  if (v1223) {
    var v1222 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p16);
    v1208 = v1222 != -1;
  }
  var v1192 = v1208;
  var v1210 = !v1192;
  if (v1210) {
    var v1209 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p16);
    v1192 = v1209 != -1;
  }
  var v1174 = v1192;
  var v1194 = !v1174;
  if (v1194) {
    var v1193 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p16);
    v1174 = v1193 != -1;
  }
  var v1141 = v1174;
  var v1176 = !v1141;
  if (v1176) {
    var v1175 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p16);
    v1141 = v1175 != -1;
  }
  var v1091 = v1141;
  var v1143 = !v1091;
  if (v1143) {
    var v1142 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p16);
    v1091 = v1142 != -1;
  }
  var v1019 = v1091;
  var v1093 = !v1019;
  if (v1093) {
    var v1092 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p16);
    v1019 = v1092 != -1;
  }
  var v908 = v1019;
  var v1021 = !v908;
  if (v1021) {
    var v1020 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p16);
    v908 = v1020 != -1;
  }
  var v767 = v908;
  var v910 = !v767;
  if (v910) {
    var v909 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p16);
    v767 = v909 != -1;
  }
  var v520 = v767;
  var v769 = !v520;
  if (v769) {
    var v768 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p16);
    v520 = v768 != -1;
  }
  var v107 = v520;
  if (v107) {
    return false;
  }
  return true;
}
function openForm() {
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ['<form action="">\n'], JAM.policy.p10);
  return true;
}
function openPre() {
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ["<pre>"], JAM.policy.p10);
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<div class="pre">'], JAM.policy.p10);
  return;
}
function openTextArea() {
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p10);
  return true;
}
function openWindow(title$$6) {
  _openWindow(title$$6);
  return;
}
function _openWindow(title$$7) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v112 = outputWindow.document;
  var v911 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v770 = v911 + "<head>\n";
  var v521 = v770 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v521 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p18);
  if (isColor) {
    var v114 = outputWindow.document;
    var v1246 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1242 = v1246 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1238 = v1242 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1233 = v1238 + "div.info {font-weight: bold}\n";
    var v1224 = v1233 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1211 = v1224 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1195 = v1211 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1177 = v1195 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1144 = v1177 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1094 = v1144 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1022 = v1094 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v912 = v1022 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v771 = v912 + "td.many {color: #000000}\n";
    var v522 = v771 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v115 = v522 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p18);
  } else {
    var v116 = outputWindow.document;
    var v1250 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1247 = v1250 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1243 = v1247 + "div.title {display: none}\n";
    var v1239 = v1243 + "div.info {font-weight: bold}\n";
    var v1234 = v1239 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1225 = v1234 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1212 = v1225 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1196 = v1212 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1178 = v1196 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1145 = v1178 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1095 = v1145 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1023 = v1095 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v913 = v1023 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v772 = v913 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v523 = v772 + "img {display: none}\n";
    var v117 = v523 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p18);
  }
  var v118 = outputWindow.document;
  var v914 = "</head>\n" + '<body class="main">\n';
  var v773 = v914 + '<div class="title">';
  var v524 = v773 + title$$7;
  var v119 = v524 + " results</div>\n";
  JAM.call(v118.write, v118, [v119], JAM.policy.p18);
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8);
  return;
}
function _openWindowAlign(title$$9) {
  var isBackground = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v120 = outputWindow.document;
  var v915 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v774 = v915 + "<head>\n";
  var v525 = v774 + "<title>Sequence Manipulation Suite</title>\n";
  var v121 = v525 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v120.write, v120, [v121], JAM.policy.p18);
  if (isBackground) {
    var v122 = outputWindow.document;
    var v1248 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1244 = v1248 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1240 = v1244 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1235 = v1240 + "div.info {font-weight: bold}\n";
    var v1226 = v1235 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1213 = v1226 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1197 = v1213 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1179 = v1197 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1146 = v1179 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1096 = v1146 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1024 = v1096 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v916 = v1024 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v775 = v916 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v526 = v775 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v123 = v526 + "</style>\n";
    JAM.call(v122.write, v122, [v123], JAM.policy.p18);
  } else {
    var v124 = outputWindow.document;
    var v1252 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1251 = v1252 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1249 = v1251 + "div.title {display: none}\n";
    var v1245 = v1249 + "div.info {font-weight: bold}\n";
    var v1241 = v1245 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1236 = v1241 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1227 = v1236 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1214 = v1227 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1198 = v1214 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1180 = v1198 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1147 = v1180 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1097 = v1147 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1025 = v1097 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v917 = v1025 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v776 = v917 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v527 = v776 + "img {display: none}\n";
    var v125 = v527 + "</style>\n";
    JAM.call(v124.write, v124, [v125], JAM.policy.p18);
  }
  var v126 = outputWindow.document;
  var v918 = "</head>\n" + '<body class="main">\n';
  var v777 = v918 + '<div class="title">';
  var v528 = v777 + title$$9;
  var v127 = v528 + " results</div>\n";
  JAM.call(v126.write, v126, [v127], JAM.policy.p18);
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
  var v529 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p16);
  var v128 = v529 != -1;
  if (v128) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p16);
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p18);
  var v530 = testArray[0];
  var v132 = v530 != testString;
  if (v132) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v531 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p18);
  var v133 = v531 == -1;
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
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p15);
  var v135 = testString != "1X2X3X";
  if (v135) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v532 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p11);
  var v136 = v532 != 2489.824;
  if (v136) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v533 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p11);
  var v137 = v533 != 2489.8;
  if (v137) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v534 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p16);
  var v138 = v534 == -1;
  if (v138) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v1026 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p16);
  var v919 = v1026 == -1;
  var v1028 = !v919;
  if (v1028) {
    var v1027 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p16);
    v919 = v1027 == -1;
  }
  var v778 = v919;
  var v921 = !v778;
  if (v921) {
    var v920 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p16);
    v778 = v920 == -1;
  }
  var v535 = v778;
  var v780 = !v535;
  if (v780) {
    var v779 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p16);
    v535 = v779 == -1;
  }
  var v139 = v535;
  if (v139) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v536 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p16);
  var v140 = v536 == -1;
  if (v140) {
    alert("Please enter a number.");
    return false;
  }
  var v142 = theNumber$$2 > maxInput$$2;
  if (v142) {
    var v537 = "Please enter a number less than or equal to " + maxInput$$2;
    var v141 = v537 + ".";
    alert(v141);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v538 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p16);
  var v143 = v538 != -1;
  if (v143) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return;
}
function verifyProtein(proteinSequence) {
  var v539 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p16);
  var v144 = v539 != -1;
  if (v144) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v1029 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p16);
  var v922 = v1029 == -1;
  var v1031 = !v922;
  if (v1031) {
    var v1030 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p16);
    v922 = v1030 == -1;
  }
  var v781 = v922;
  var v924 = !v781;
  if (v924) {
    var v923 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p16);
    v781 = v923 == -1;
  }
  var v540 = v781;
  var v783 = !v540;
  if (v783) {
    var v782 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p16);
    v540 = v782 == -1;
  }
  var v145 = v540;
  if (v145) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1032 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p16);
  var v925 = v1032 == -1;
  var v1034 = !v925;
  if (v1034) {
    var v1033 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p16);
    v925 = v1033 == -1;
  }
  var v784 = v925;
  var v927 = !v784;
  if (v927) {
    var v926 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p16);
    v784 = v926 == -1;
  }
  var v541 = v784;
  var v786 = !v541;
  if (v786) {
    var v785 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p16);
    v541 = v785 == -1;
  }
  var v146 = v541;
  if (v146) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v542 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p16);
  var v147 = v542 == -1;
  if (v147) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v1035 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p16);
  var v928 = v1035 == -1;
  var v1037 = !v928;
  if (v1037) {
    var v1036 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p16);
    v928 = v1036 == -1;
  }
  var v787 = v928;
  var v930 = !v787;
  if (v930) {
    var v929 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p16);
    v787 = v929 == -1;
  }
  var v543 = v787;
  var v789 = !v543;
  if (v789) {
    var v788 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p16);
    v543 = v788 == -1;
  }
  var v148 = v543;
  if (v148) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v544 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p16);
  var v149 = v544 == -1;
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
    var v545 = basePerLine / groupSize;
    var v153 = j$$6 <= v545;
    for (;v153;) {
      var v152 = k < groupSize;
      for (;v152;) {
        var v546 = k + i$$5;
        var v151 = JAM.call(text$$10.charAt, text$$10, [v546], JAM.policy.p18);
        lineOfText = lineOfText + v151;
        k = k + 1;
        v152 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v547 = basePerLine / groupSize;
      v153 = j$$6 <= v547;
    }
    var v154 = outputWindow.document;
    var v155 = lineOfText + "\n";
    JAM.call(v154.write, v154, [v155], JAM.policy.p18);
    lineOfText = "";
    v156 = i$$5 < stopBase;
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
    var v548 = adjustment < 0;
    if (v548) {
      v548 = adjusted >= 0;
    }
    var v157 = v548;
    if (v157) {
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
  var v188 = i$$6 < stopBase$$2;
  for (;v188;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v549 = basePerLine$$2 / groupSize$$2;
    var v164 = j$$7 <= v549;
    for (;v164;) {
      var v160 = k$$1 < groupSize$$2;
      for (;v160;) {
        var v550 = i$$6 + k$$1;
        var v158 = v550 >= stopBase$$2;
        if (v158) {
          break;
        }
        var v551 = k$$1 + i$$6;
        var v159 = JAM.call(text$$12.charAt, text$$12, [v551], JAM.policy.p18);
        lineOfText$$1 = lineOfText$$1 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v162 = numberPosition$$1 == "above";
      if (v162) {
        var v552 = adjustNumbering(i$$6, numberingAdjustment);
        var v161 = rightNum(v552, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v161;
      }
      var v163 = i$$6 >= stopBase$$2;
      if (v163) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v553 = basePerLine$$2 / groupSize$$2;
      v164 = j$$7 <= v553;
    }
    var v187 = numberPosition$$1 == "left";
    if (v187) {
      var v165 = outputWindow.document;
      var v931 = adjustNumbering(lineNum, numberingAdjustment);
      var v790 = rightNum(v931, "", 8, tabIn$$3);
      var v554 = v790 + lineOfText$$1;
      var v166 = v554 + "\n";
      JAM.call(v165.write, v165, [v166], JAM.policy.p18);
      var v170 = strands$$1 == "two";
      if (v170) {
        var v167 = outputWindow.document;
        var v932 = adjustNumbering(lineNum, numberingAdjustment);
        var v791 = rightNum(v932, "", 8, tabIn$$3);
        var v792 = complement(lineOfText$$1);
        var v555 = v791 + v792;
        var v168 = v555 + "\n";
        JAM.call(v167.write, v167, [v168], JAM.policy.p18);
        var v169 = outputWindow.document;
        JAM.call(v169.write, v169, ["\n"], JAM.policy.p10);
      }
    } else {
      var v186 = numberPosition$$1 == "right";
      if (v186) {
        var v171 = outputWindow.document;
        var v793 = adjustNumbering(i$$6, numberingAdjustment);
        var v556 = lineOfText$$1 + v793;
        var v172 = v556 + "\n";
        JAM.call(v171.write, v171, [v172], JAM.policy.p18);
        var v176 = strands$$1 == "two";
        if (v176) {
          var v173 = outputWindow.document;
          var v794 = complement(lineOfText$$1);
          var v795 = adjustNumbering(i$$6, numberingAdjustment);
          var v557 = v794 + v795;
          var v174 = v557 + "\n";
          JAM.call(v173.write, v173, [v174], JAM.policy.p18);
          var v175 = outputWindow.document;
          JAM.call(v175.write, v175, ["\n"], JAM.policy.p10);
        }
      } else {
        var v185 = numberPosition$$1 == "above";
        if (v185) {
          var v177 = outputWindow.document;
          var v178 = aboveNum + "\n";
          JAM.call(v177.write, v177, [v178], JAM.policy.p18);
          var v179 = outputWindow.document;
          var v180 = lineOfText$$1 + "\n";
          JAM.call(v179.write, v179, [v180], JAM.policy.p18);
          var v184 = strands$$1 == "two";
          if (v184) {
            var v181 = outputWindow.document;
            var v558 = complement(lineOfText$$1);
            var v182 = v558 + "\n";
            JAM.call(v181.write, v181, [v182], JAM.policy.p18);
            var v183 = outputWindow.document;
            JAM.call(v183.write, v183, ["\n"], JAM.policy.p10);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v188 = i$$6 < stopBase$$2;
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
  var v207 = i$$7 < stopBase$$3;
  for (;v207;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v559 = basePerLine$$3 / groupSize$$3;
    var v195 = j$$8 <= v559;
    for (;v195;) {
      var v191 = k$$2 < groupSize$$3;
      for (;v191;) {
        var v560 = i$$7 + k$$2;
        var v189 = v560 >= stopBase$$3;
        if (v189) {
          break;
        }
        var v561 = k$$2 + i$$7;
        var v190 = JAM.call(text$$13.charAt, text$$13, [v561], JAM.policy.p18);
        lineOfText$$2 = lineOfText$$2 + v190;
        k$$2 = k$$2 + 1;
        v191 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v193 = numberPosition$$2 == "above";
      if (v193) {
        var v192 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v192;
      }
      var v194 = i$$7 >= stopBase$$3;
      if (v194) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v562 = basePerLine$$3 / groupSize$$3;
      v195 = j$$8 <= v562;
    }
    var v206 = numberPosition$$2 == "left";
    if (v206) {
      var v196 = outputWindow.document;
      var v796 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v563 = v796 + lineOfText$$2;
      var v197 = v563 + "\n";
      JAM.call(v196.write, v196, [v197], JAM.policy.p18);
    } else {
      var v205 = numberPosition$$2 == "right";
      if (v205) {
        var v198 = outputWindow.document;
        var v564 = lineOfText$$2 + i$$7;
        var v199 = v564 + "\n";
        JAM.call(v198.write, v198, [v199], JAM.policy.p18);
      } else {
        var v204 = numberPosition$$2 == "above";
        if (v204) {
          var v200 = outputWindow.document;
          var v201 = aboveNum$$1 + "\n";
          JAM.call(v200.write, v200, [v201], JAM.policy.p18);
          var v202 = outputWindow.document;
          var v203 = lineOfText$$2 + "\n";
          JAM.call(v202.write, v202, [v203], JAM.policy.p18);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v207 = i$$7 < stopBase$$3;
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
  var v933 = sequence$$13.length;
  var v797 = v933 <= firstIndexToMutate;
  var v934 = !v797;
  if (v934) {
    v797 = lastIndexToMutate < 0;
  }
  var v565 = v797;
  var v798 = !v565;
  if (v798) {
    v565 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v208 = v565;
  if (v208) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v216 = i$$8 < numMut;
  for (;v216;) {
    maxNum = sequence$$13.length;
    var v566 = Math.random();
    var v209 = v566 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v209], JAM.policy.p16);
    var v567 = randNum < firstIndexToMutate;
    var v799 = !v567;
    if (v799) {
      v567 = randNum > lastIndexToMutate;
    }
    var v210 = v567;
    if (v210) {
      numMut++;
      i$$8++;
      v216 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p16);
    needNewChar = true;
    for (;needNewChar;) {
      var v568 = Math.random();
      var v569 = components$$1.length;
      var v211 = v568 * v569;
      componentsIndex = JAM.call(Math.round, Math, [v211], JAM.policy.p16);
      var v570 = components$$1.length;
      var v212 = componentsIndex == v570;
      if (v212) {
        componentsIndex = 0;
      }
      var v571 = components$$1[componentsIndex];
      var v213 = v571 != currentChar;
      if (v213) {
        needNewChar = false;
      }
    }
    var v572 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v573 = components$$1[componentsIndex];
    var v214 = v572 + v573;
    var v574 = randNum + 1;
    var v575 = sequence$$13.length;
    var v215 = JAM.call(sequence$$13.substring, sequence$$13, [v574, v575], JAM.policy.p27);
    sequence$$13 = v214 + v215;
    i$$8++;
    v216 = i$$8 < numMut;
  }
  var v217 = outputWindow.document;
  var v218 = addReturns(sequence$$13);
  JAM.call(v217.write, v217, [v218], JAM.policy.p18);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v223 = j$$9 < lengthOut$$1;
  for (;v223;) {
    var v576 = Math.random();
    var v577 = components$$2.length;
    var v219 = v576 * v577;
    tempNum$$1 = JAM.call(Math.floor, Math, [v219], JAM.policy.p16);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v578 = sequence$$14.length;
    var v222 = v578 == 60;
    if (v222) {
      var v220 = outputWindow.document;
      var v221 = sequence$$14 + "\n";
      JAM.call(v220.write, v220, [v221], JAM.policy.p18);
      sequence$$14 = "";
    }
    j$$9++;
    v223 = j$$9 < lengthOut$$1;
  }
  var v224 = outputWindow.document;
  var v225 = sequence$$14 + "\n";
  JAM.call(v224.write, v224, [v225], JAM.policy.p18);
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
  var v229 = dnaConformation == "circular";
  if (v229) {
    var v226 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v226.length;
    var v935 = sequence$$15.length;
    var v800 = v935 - lookAhead;
    var v801 = sequence$$15.length;
    var v579 = JAM.call(sequence$$15.substring, sequence$$15, [v800, v801], JAM.policy.p27);
    var v227 = v579 + sequence$$15;
    var v228 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v227 + v228;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v230 = outputWindow.document;
  JAM.call(v230.write, v230, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p10);
  var v231 = outputWindow.document;
  var v936 = '<tr><td class="title" width="200px">' + "Site:";
  var v802 = v936 + '</td><td class="title">';
  var v580 = v802 + "Positions:";
  var v232 = v580 + "</td></tr>\n";
  JAM.call(v231.write, v231, [v232], JAM.policy.p18);
  var i$$9 = 0;
  var v581 = arrayOfItems.length;
  var v248 = i$$9 < v581;
  for (;v248;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v582 = arrayOfItems[i$$9];
    var v233 = JAM.call(v582.match, v582, [/\/.+\//], JAM.policy.p16);
    matchExp = v233 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v937 = arrayOfItems[i$$9];
    var v803 = JAM.call(v937.match, v937, [/\)\D*\d+/], JAM.policy.p16);
    var v583 = v803.toString();
    var v234 = JAM.call(v583.replace, v583, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v234);
    var v240 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p18);
    for (;v240;) {
      var v235 = matchExp.lastIndex;
      matchPosition = v235 - cutDistance;
      var v584 = matchPosition >= lowerLimit;
      if (v584) {
        v584 = matchPosition < upperLimit;
      }
      var v238 = v584;
      if (v238) {
        timesFound++;
        var v236 = tempString$$1 + ", ";
        var v585 = matchPosition - shiftValue;
        var v237 = v585 + 1;
        tempString$$1 = v236 + v237;
      }
      var v586 = matchExp.lastIndex;
      var v804 = RegExp.lastMatch;
      var v587 = v804.length;
      var v239 = v586 - v587;
      matchExp.lastIndex = v239 + 1;
      v240 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p18);
    }
    var v588 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p16);
    var v241 = v588 != -1;
    if (v241) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p15);
    }
    var v245 = timesFound == 0;
    if (v245) {
      backGroundClass = "none";
    } else {
      var v244 = timesFound == 1;
      if (v244) {
        backGroundClass = "one";
      } else {
        var v243 = timesFound == 2;
        if (v243) {
          backGroundClass = "two";
        } else {
          var v242 = timesFound == 3;
          if (v242) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v246 = outputWindow.document;
    var v1181 = '<tr><td class="' + backGroundClass;
    var v1148 = v1181 + '">';
    var v1215 = arrayOfItems[i$$9];
    var v1199 = JAM.call(v1215.match, v1215, [/\([^\(]+\)/], JAM.policy.p16);
    var v1182 = v1199.toString();
    var v1149 = JAM.call(v1182.replace, v1182, [/\(|\)/g, ""], JAM.policy.p15);
    var v1098 = v1148 + v1149;
    var v1038 = v1098 + '</td><td class="';
    var v938 = v1038 + backGroundClass;
    var v805 = v938 + '">';
    var v589 = v805 + tempString$$1;
    var v247 = v589 + "</td></tr>\n";
    JAM.call(v246.write, v246, [v247], JAM.policy.p18);
    timesFound = 0;
    i$$9++;
    var v590 = arrayOfItems.length;
    v248 = i$$9 < v590;
  }
  var v249 = outputWindow.document;
  JAM.call(v249.write, v249, ["</tbody></table>\n"], JAM.policy.p10);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v250 = outputWindow.document;
  JAM.call(v250.write, v250, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p10);
  var v251 = outputWindow.document;
  var v1099 = '<tr><td class="title">' + "Pattern:";
  var v1039 = v1099 + '</td><td class="title">';
  var v939 = v1039 + "Times found:";
  var v806 = v939 + '</td><td class="title">';
  var v591 = v806 + "Percentage:";
  var v252 = v591 + "</td></tr>\n";
  JAM.call(v251.write, v251, [v252], JAM.policy.p18);
  var i$$10 = 0;
  var v592 = arrayOfItems$$1.length;
  var v261 = i$$10 < v592;
  for (;v261;) {
    var tempNumber = 0;
    var v593 = arrayOfItems$$1[i$$10];
    var v253 = JAM.call(v593.match, v593, [/\/[^\/]+\//], JAM.policy.p16);
    var matchExp$$1 = v253 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v594 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p18);
    var v255 = v594 != -1;
    if (v255) {
      var v254 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p18);
      tempNumber = v254.length;
    }
    var percentage = 0;
    var v807 = originalLength + 1;
    var v1040 = arrayOfItems$$1[i$$10];
    var v940 = JAM.call(v1040.match, v1040, [/\d+/], JAM.policy.p16);
    var v808 = parseFloat(v940);
    var v595 = v807 - v808;
    var v258 = v595 > 0;
    if (v258) {
      var v256 = 100 * tempNumber;
      var v596 = originalLength + 1;
      var v941 = arrayOfItems$$1[i$$10];
      var v809 = JAM.call(v941.match, v941, [/\d+/], JAM.policy.p16);
      var v597 = parseFloat(v809);
      var v257 = v596 - v597;
      percentage = v256 / v257;
    }
    var v259 = outputWindow.document;
    var v1216 = arrayOfItems$$1[i$$10];
    var v1200 = JAM.call(v1216.match, v1216, [/\([^\(]+\)\b/], JAM.policy.p16);
    var v1183 = v1200.toString();
    var v1150 = JAM.call(v1183.replace, v1183, [/\(|\)/g, ""], JAM.policy.p15);
    var v1100 = "<tr><td>" + v1150;
    var v1041 = v1100 + "</td><td>";
    var v942 = v1041 + tempNumber;
    var v810 = v942 + "</td><td>";
    var v811 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p11);
    var v598 = v810 + v811;
    var v260 = v598 + "</td></tr>\n";
    JAM.call(v259.write, v259, [v260], JAM.policy.p18);
    i$$10++;
    var v599 = arrayOfItems$$1.length;
    v261 = i$$10 < v599;
  }
  var v262 = outputWindow.document;
  JAM.call(v262.write, v262, ["</tbody></table>\n"], JAM.policy.p10);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v600 = sequence$$17.length;
  var v269 = v600 > 0;
  for (;v269;) {
    maxNum$$1 = sequence$$17.length;
    var v601 = Math.random();
    var v263 = v601 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v263], JAM.policy.p16);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p16);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v264 = randNum$$1 + 1;
    var v265 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v264, v265], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v602 = tempSeq.length;
    var v268 = v602 == 60;
    if (v268) {
      var v266 = outputWindow.document;
      var v267 = tempSeq + "\n";
      JAM.call(v266.write, v266, [v267], JAM.policy.p18);
      tempSeq = "";
    }
    var v603 = sequence$$17.length;
    v269 = v603 > 0;
  }
  var v270 = outputWindow.document;
  var v271 = tempSeq + "\n";
  JAM.call(v270.write, v270, [v271], JAM.policy.p18);
  return true;
}
function windowExtract() {
  var theDocument = document;
  var newDna = "";
  var maxInput$$3 = 5E5;
  var matchFound = false;
  var ranges = new Array;
  var v604 = testScript();
  var v272 = v604 == false;
  if (v272) {
    return;
  }
  var v1228 = theDocument.forms;
  var v1217 = v1228[0];
  var v1201 = v1217.elements;
  var v1184 = v1201[0];
  var v1151 = checkFormElement(v1184);
  var v1101 = v1151 == false;
  var v1153 = !v1101;
  if (v1153) {
    var v1237 = theDocument.forms;
    var v1229 = v1237[0];
    var v1218 = v1229.elements;
    var v1202 = v1218[0];
    var v1185 = v1202.value;
    var v1152 = checkSequenceLength(v1185, maxInput$$3);
    v1101 = v1152 == false;
  }
  var v1042 = v1101;
  var v1103 = !v1042;
  if (v1103) {
    var v1219 = theDocument.forms;
    var v1203 = v1219[0];
    var v1186 = v1203.elements;
    var v1154 = v1186[1];
    var v1102 = checkFormElement(v1154);
    v1042 = v1102 == false;
  }
  var v943 = v1042;
  var v1044 = !v943;
  if (v1044) {
    var v1204 = theDocument.forms;
    var v1187 = v1204[0];
    var v1155 = v1187.elements;
    var v1104 = v1155[3];
    var v1043 = checkFormElement(v1104);
    v943 = v1043 == false;
  }
  var v812 = v943;
  var v945 = !v812;
  if (v945) {
    var v1220 = theDocument.forms;
    var v1205 = v1220[0];
    var v1188 = v1205.elements;
    var v1156 = v1188[1];
    var v1105 = v1156.value;
    var v1045 = JAM.call(v1105.replace, v1105, [/[^\d]/g, ""], JAM.policy.p15);
    var v944 = verifyMaxDigits(v1045, maxInput$$3);
    v812 = v944 == false;
  }
  var v605 = v812;
  var v814 = !v605;
  if (v814) {
    var v1206 = theDocument.forms;
    var v1189 = v1206[0];
    var v1157 = v1189.elements;
    var v1106 = v1157[3];
    var v1046 = v1106.value;
    var v946 = JAM.call(v1046.replace, v1046, [/[^\d]/g, ""], JAM.policy.p15);
    var v813 = verifyMaxDigits(v946, maxInput$$3);
    v605 = v813 == false;
  }
  var v273 = v605;
  if (v273) {
    return;
  }
  var v1107 = theDocument.forms;
  var v1047 = v1107[0];
  var v947 = v1047.elements;
  var v815 = v947[1];
  var v606 = v815.value;
  var v274 = JAM.call(v606.replace, v606, [/[^\d]/g, ""], JAM.policy.p15);
  var windowSize = parseInt(v274);
  var v1108 = theDocument.forms;
  var v1048 = v1108[0];
  var v948 = v1048.elements;
  var v816 = v948[3];
  var v607 = v816.value;
  var v275 = JAM.call(v607.replace, v607, [/[^\d]/g, ""], JAM.policy.p15);
  var position = parseInt(v275);
  var v949 = theDocument.forms;
  var v817 = v949[0];
  var v608 = v817.elements;
  var v276 = v608[2];
  var orientation = v276.value;
  var start$$4;
  var end$$1;
  var v283 = orientation == "ending";
  if (v283) {
    end$$1 = position;
    var v277 = end$$1 - windowSize;
    start$$4 = v277 + 1;
  } else {
    var v282 = orientation == "starting";
    if (v282) {
      start$$4 = position;
      var v278 = start$$4 + windowSize;
      end$$1 = v278 - 1;
    } else {
      var v281 = orientation == "centered";
      if (v281) {
        var v818 = windowSize / 2;
        var v609 = JAM.call(Math.round, Math, [v818], JAM.policy.p18);
        var v279 = position - v609;
        start$$4 = v279 + 1;
        var v280 = start$$4 + windowSize;
        end$$1 = v280 - 1;
      }
    }
  }
  var v284 = new Range(start$$4, end$$1);
  JAM.call(ranges.push, ranges, [v284], JAM.policy.p18);
  openWindow("Window Extractor DNA");
  openPre();
  var v1049 = theDocument.forms;
  var v950 = v1049[0];
  var v819 = v950.elements;
  var v610 = v819[0];
  var v285 = v610.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v285);
  var i$$11 = 0;
  var v611 = arrayOfFasta$$1.length;
  var v292 = i$$11 < v611;
  for (;v292;) {
    var v286 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v286);
    var v287 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v287);
    verifyDna(newDna);
    newDna = removeNonDna(newDna);
    var v288 = outputWindow.document;
    var v289 = getFastaTitleFromTitleAndSequence(newDna);
    JAM.call(v288.write, v288, [v289], JAM.policy.p18);
    var v1158 = theDocument.forms;
    var v1109 = v1158[0];
    var v1050 = v1109.elements;
    var v951 = v1050[7];
    var v820 = v951.options;
    var v1159 = theDocument.forms;
    var v1110 = v1159[0];
    var v1051 = v1110.elements;
    var v952 = v1051[7];
    var v821 = v952.selectedIndex;
    var v612 = v820[v821];
    var v290 = v612.value;
    var v1160 = theDocument.forms;
    var v1111 = v1160[0];
    var v1052 = v1111.elements;
    var v953 = v1052[8];
    var v822 = v953.options;
    var v1161 = theDocument.forms;
    var v1112 = v1161[0];
    var v1053 = v1112.elements;
    var v954 = v1053[8];
    var v823 = v954.selectedIndex;
    var v613 = v822[v823];
    var v291 = v613.value;
    writeSequenceRanges(newDna, ranges, v290, v291);
    i$$11++;
    var v614 = arrayOfFasta$$1.length;
    v292 = i$$11 < v614;
  }
  closePre();
  closeWindow();
  return;
}
function rangeExtract(theDocument$$1) {
  var newDna$$1 = "";
  var maxInput$$4 = 5E5;
  var matchFound$$1 = false;
  var ranges$$1 = new Array;
  var v615 = testScript();
  var v293 = v615 == false;
  if (v293) {
    return false;
  }
  var v1190 = theDocument$$1.forms;
  var v1162 = v1190[0];
  var v1113 = v1162.elements;
  var v1054 = v1113[0];
  var v955 = checkFormElement(v1054);
  var v824 = v955 == false;
  var v957 = !v824;
  if (v957) {
    var v1207 = theDocument$$1.forms;
    var v1191 = v1207[0];
    var v1163 = v1191.elements;
    var v1114 = v1163[0];
    var v1055 = v1114.value;
    var v956 = checkSequenceLength(v1055, maxInput$$4);
    v824 = v956 == false;
  }
  var v616 = v824;
  var v826 = !v616;
  if (v826) {
    var v1164 = theDocument$$1.forms;
    var v1115 = v1164[0];
    var v1056 = v1115.elements;
    var v958 = v1056[1];
    var v825 = checkFormElement(v958);
    v616 = v825 == false;
  }
  var v294 = v616;
  if (v294) {
    return false;
  }
  var v1057 = theDocument$$1.forms;
  var v959 = v1057[0];
  var v827 = v959.elements;
  var v617 = v827[1];
  var v295 = v617.value;
  var arrayOfRanges = JAM.call(v295.split, v295, [/,/], JAM.policy.p16);
  var arrayOfStartAndEnd;
  var i$$12 = 0;
  var v618 = arrayOfRanges.length;
  var v302 = i$$12 < v618;
  for (;v302;) {
    var v296 = arrayOfRanges[i$$12];
    arrayOfStartAndEnd = JAM.call(v296.split, v296, [/\.\./], JAM.policy.p16);
    var v619 = arrayOfStartAndEnd.length;
    var v301 = v619 == 1;
    if (v301) {
      matchFound$$1 = true;
      var v620 = arrayOfStartAndEnd[0];
      var v621 = arrayOfStartAndEnd[0];
      var v297 = new Range(v620, v621);
      JAM.call(ranges$$1.push, ranges$$1, [v297], JAM.policy.p18);
    } else {
      var v622 = arrayOfStartAndEnd.length;
      var v300 = v622 == 2;
      if (v300) {
        matchFound$$1 = true;
        var v623 = arrayOfStartAndEnd[0];
        var v624 = arrayOfStartAndEnd[1];
        var v298 = new Range(v623, v624);
        JAM.call(ranges$$1.push, ranges$$1, [v298], JAM.policy.p18);
      } else {
        var v625 = arrayOfRanges[i$$12];
        var v299 = "The following range entry was ignored: " + v625;
        alert(v299);
      }
    }
    i$$12++;
    var v626 = arrayOfRanges.length;
    v302 = i$$12 < v626;
  }
  var v303 = matchFound$$1 == false;
  if (v303) {
    alert("No ranges were entered.");
    return false;
  }
  openWindow("Range Extractor DNA");
  openPre();
  var v1058 = theDocument$$1.forms;
  var v960 = v1058[0];
  var v828 = v960.elements;
  var v627 = v828[0];
  var v304 = v627.value;
  var arrayOfFasta$$2 = getArrayOfFasta(v304);
  i$$12 = 0;
  var v628 = arrayOfFasta$$2.length;
  var v311 = i$$12 < v628;
  for (;v311;) {
    var v305 = arrayOfFasta$$2[i$$12];
    newDna$$1 = getSequenceFromFasta(v305);
    var v306 = arrayOfFasta$$2[i$$12];
    title = getTitleFromFasta(v306);
    verifyDna(newDna$$1);
    newDna$$1 = removeNonDna(newDna$$1);
    var v307 = outputWindow.document;
    var v308 = getFastaTitleFromTitleAndSequence(newDna$$1);
    JAM.call(v307.write, v307, [v308], JAM.policy.p18);
    var v1165 = theDocument$$1.forms;
    var v1116 = v1165[0];
    var v1059 = v1116.elements;
    var v961 = v1059[5];
    var v829 = v961.options;
    var v1166 = theDocument$$1.forms;
    var v1117 = v1166[0];
    var v1060 = v1117.elements;
    var v962 = v1060[5];
    var v830 = v962.selectedIndex;
    var v629 = v829[v830];
    var v309 = v629.value;
    var v1167 = theDocument$$1.forms;
    var v1118 = v1167[0];
    var v1061 = v1118.elements;
    var v963 = v1061[6];
    var v831 = v963.options;
    var v1168 = theDocument$$1.forms;
    var v1119 = v1168[0];
    var v1062 = v1119.elements;
    var v964 = v1062[6];
    var v832 = v964.selectedIndex;
    var v630 = v831[v832];
    var v310 = v630.value;
    writeSequenceRanges(newDna$$1, ranges$$1, v309, v310);
    i$$12++;
    var v631 = arrayOfFasta$$2.length;
    v311 = i$$12 < v631;
  }
  closePre();
  closeWindow();
  return true;
}
function writeSequenceRanges(sequence$$18, ranges$$2, strand, segmentType) {
  var rangeGroup = new RangeGroup(strand, segmentType);
  var v632 = sequence$$18.length;
  var v312 = v632 / 2;
  var center_base = JAM.call(Math.round, Math, [v312], JAM.policy.p18);
  var i$$13 = 0;
  var v633 = ranges$$2.length;
  var v326 = i$$13 < v633;
  for (;v326;) {
    var v313 = ranges$$2[i$$13];
    var v965 = ranges$$2[i$$13];
    var v833 = v965.start;
    var v634 = v833.toString();
    var v1259 = JAM.call(v634.replace, v634, [/start|begin/gi, 1], JAM.policy.p15);
    v313.start = v1259;
    var v314 = ranges$$2[i$$13];
    var v966 = ranges$$2[i$$13];
    var v834 = v966.start;
    var v635 = v834.toString();
    var v636 = sequence$$18.length;
    var v1260 = JAM.call(v635.replace, v635, [/stop|end/gi, v636], JAM.policy.p15);
    v314.start = v1260;
    var v315 = ranges$$2[i$$13];
    var v967 = ranges$$2[i$$13];
    var v835 = v967.start;
    var v637 = v835.toString();
    var v638 = sequence$$18.length;
    var v1261 = JAM.call(v637.replace, v637, [/length/gi, v638], JAM.policy.p15);
    v315.start = v1261;
    var v316 = ranges$$2[i$$13];
    var v968 = ranges$$2[i$$13];
    var v836 = v968.start;
    var v639 = v836.toString();
    var v1262 = JAM.call(v639.replace, v639, [/middle|center|centre/gi, center_base], JAM.policy.p15);
    v316.start = v1262;
    var v317 = ranges$$2[i$$13];
    var v969 = ranges$$2[i$$13];
    var v837 = v969.stop;
    var v640 = v837.toString();
    var v1263 = JAM.call(v640.replace, v640, [/start|begin/gi, 1], JAM.policy.p15);
    v317.stop = v1263;
    var v318 = ranges$$2[i$$13];
    var v970 = ranges$$2[i$$13];
    var v838 = v970.stop;
    var v641 = v838.toString();
    var v642 = sequence$$18.length;
    var v1264 = JAM.call(v641.replace, v641, [/stop|end/gi, v642], JAM.policy.p15);
    v318.stop = v1264;
    var v319 = ranges$$2[i$$13];
    var v971 = ranges$$2[i$$13];
    var v839 = v971.stop;
    var v643 = v839.toString();
    var v644 = sequence$$18.length;
    var v1265 = JAM.call(v643.replace, v643, [/length/gi, v644], JAM.policy.p15);
    v319.stop = v1265;
    var v320 = ranges$$2[i$$13];
    var v972 = ranges$$2[i$$13];
    var v840 = v972.stop;
    var v645 = v840.toString();
    var v1266 = JAM.call(v645.replace, v645, [/middle|center|centre/gi, center_base], JAM.policy.p15);
    v320.stop = v1266;
    try {
      var v321 = ranges$$2[i$$13];
      var v1063 = ranges$$2[i$$13];
      var v973 = v1063.start;
      var v841 = v973.toString();
      if (JAM.isEval(eval)) {
        var v646 = eval("introspect(JAM.policy.pFull) { " + v841 + " }")
      } else {
        var v646 = JAM.call(eval, null, [v841])
      }
      var v1267 = parseInt(v646);
      v321.start = v1267;
    } catch (e$$5) {
      var v842 = ranges$$2[i$$13];
      var v647 = v842.start;
      var v322 = "Could not evaluate the following expression: " + v647;
      alert(v322);
      return;
    }
    try {
      var v323 = ranges$$2[i$$13];
      var v1064 = ranges$$2[i$$13];
      var v974 = v1064.stop;
      var v843 = v974.toString();
      if (JAM.isEval(eval)) {
        var v648 = eval("introspect(JAM.policy.pFull) { " + v843 + " }")
      } else {
        var v648 = JAM.call(eval, null, [v843])
      }
      var v1268 = parseInt(v648);
      v323.stop = v1268;
    } catch (e$$6) {
      var v844 = ranges$$2[i$$13];
      var v649 = v844.stop;
      var v324 = "Could not evaluate the following expression: " + v649;
      alert(v324);
      return;
    }
    var v325 = ranges$$2[i$$13];
    JAM.call(rangeGroup.addRange, rangeGroup, [v325], JAM.policy.p18);
    i$$13++;
    var v650 = ranges$$2.length;
    v326 = i$$13 < v650;
  }
  JAM.call(rangeGroup.writeRanges, rangeGroup, [sequence$$18], JAM.policy.p18);
  return;
}
function getSequence(sequence$$19) {
  var problem = false;
  var warnings = new Array;
  var v651 = this.start;
  var v652 = this.stop;
  var v341 = v651 == v652;
  if (v341) {
    var v653 = this.start;
    var v328 = v653 < 1;
    if (v328) {
      problem = true;
      var v845 = this.start;
      var v654 = "position value of " + v845;
      var v327 = v654 + " is less than 1";
      JAM.call(warnings.push, warnings, [v327], JAM.policy.p18);
    }
    var v655 = this.start;
    var v656 = sequence$$19.length;
    var v330 = v655 > v656;
    if (v330) {
      problem = true;
      var v846 = this.start;
      var v657 = "position value of " + v846;
      var v329 = v657 + " is greater than the sequence length";
      JAM.call(warnings.push, warnings, [v329], JAM.policy.p18);
    }
  } else {
    var v658 = this.start;
    var v332 = v658 < 1;
    if (v332) {
      problem = true;
      var v847 = this.start;
      var v659 = "position value of " + v847;
      var v331 = v659 + " is less than 1";
      JAM.call(warnings.push, warnings, [v331], JAM.policy.p18);
    }
    var v660 = this.stop;
    var v334 = v660 < 1;
    if (v334) {
      problem = true;
      var v848 = this.stop;
      var v661 = "position value of " + v848;
      var v333 = v661 + " is less than 1";
      JAM.call(warnings.push, warnings, [v333], JAM.policy.p18);
    }
    var v662 = this.start;
    var v663 = sequence$$19.length;
    var v336 = v662 > v663;
    if (v336) {
      problem = true;
      var v849 = this.start;
      var v664 = "position value of " + v849;
      var v335 = v664 + " is greater than the sequence length";
      JAM.call(warnings.push, warnings, [v335], JAM.policy.p18);
    }
    var v665 = this.stop;
    var v666 = sequence$$19.length;
    var v338 = v665 > v666;
    if (v338) {
      problem = true;
      var v850 = this.stop;
      var v667 = "position value of " + v850;
      var v337 = v667 + " is greater than the sequence length";
      JAM.call(warnings.push, warnings, [v337], JAM.policy.p18);
    }
    var v668 = this.start;
    var v669 = this.stop;
    var v340 = v668 > v669;
    if (v340) {
      problem = true;
      var v975 = this.start;
      var v851 = "stop position is less than start position in range " + v975;
      var v670 = v851 + " to ";
      var v671 = this.stop;
      var v339 = v670 + v671;
      JAM.call(warnings.push, warnings, [v339], JAM.policy.p18);
    }
  }
  if (problem) {
    var v672 = JAM.call(warnings.join, warnings, [",\n"], JAM.policy.p10);
    var v342 = "An entry was skipped because of the following:\n" + v672;
    alert(v342);
    return false;
  } else {
    var v673 = this.start;
    var v674 = this.stop;
    var v346 = v673 == v674;
    if (v346) {
      var v675 = this.start;
      var v343 = v675 - 1;
      return JAM.call(sequence$$19.charAt, sequence$$19, [v343], JAM.policy.p18);
    } else {
      var v676 = this.start;
      var v344 = v676 - 1;
      var v345 = this.stop;
      return JAM.call(sequence$$19.substring, sequence$$19, [v344, v345], JAM.policy.p27);
    }
  }
  return;
}
function getTitle() {
  var v677 = this.start;
  var v678 = this.stop;
  var v350 = v677 == v678;
  if (v350) {
    var v347 = this.start;
    return "&gt;base " + v347;
  } else {
    var v852 = this.start;
    var v679 = "&gt;base " + v852;
    var v348 = v679 + " to ";
    var v349 = this.stop;
    return v348 + v349;
  }
  return;
}
function Range(start$$5, stop) {
  this.start = start$$5;
  this.stop = stop;
  return;
}
function addRange(range$$5) {
  var v351 = this.ranges;
  JAM.call(v351.push, v351, [range$$5], JAM.policy.p18);
  return;
}
function writeRanges(sequence$$20) {
  function v9(str$$15, p1$$9, offset$$17, s$$11) {
    var v680 = p1$$9.length;
    var v352 = offset$$17 + v680;
    return JAM.call(sequence$$20.substring, sequence$$20, [offset$$17, v352], JAM.policy.p27);
  }
  function v8(str$$14, p1$$8, p2$$3, offset$$16, s$$10) {
    var v681 = p1$$8.length;
    var v853 = p1$$8.length;
    var v854 = p2$$3.length;
    var v682 = v853 + v854;
    var v353 = JAM.call(sequence$$20.substring, sequence$$20, [v681, v682], JAM.policy.p27);
    return p1$$8 + v353;
  }
  function v7(str$$13, p1$$7, offset$$15, s$$9) {
    var v354 = p1$$7.length;
    return getRandomSequence(v354);
  }
  function v6(str$$12, p1$$6, p2$$2, offset$$14, s$$8) {
    var v683 = p2$$2.length;
    var v355 = getRandomSequence(v683);
    return p1$$6 + v355;
  }
  function v5(str$$11, p1$$5, offset$$13, s$$7) {
    return p1$$5.toLowerCase();
  }
  function v4(str$$10, p1$$4, p2$$1, offset$$12, s$$6) {
    var v356 = p2$$1.toLowerCase();
    return p1$$4 + v356;
  }
  function v3(str$$9, p1$$3, offset$$11, s$$5) {
    return p1$$3.toUpperCase();
  }
  function v2(str$$8, p1$$2, p2, offset$$10, s$$4) {
    var v357 = p2.toUpperCase();
    return p1$$2 + v357;
  }
  var sequenceArray$$1 = new Array;
  var v684 = this.type;
  var v366 = v684 == "new_sequence";
  if (v366) {
    var i$$14 = 0;
    var v855 = this.ranges;
    var v685 = v855.length;
    var v360 = i$$14 < v685;
    for (;v360;) {
      var v976 = this.ranges;
      var v856 = v976[i$$14];
      var v686 = JAM.call(v856.getSequence, v856, [sequence$$20], JAM.policy.p18);
      var v359 = v686 != "";
      if (v359) {
        var v857 = this.ranges;
        var v687 = v857[i$$14];
        var v358 = JAM.call(v687.getSequence, v687, [sequence$$20], JAM.policy.p18);
        JAM.call(sequenceArray$$1.push, sequenceArray$$1, [v358], JAM.policy.p18);
      }
      i$$14++;
      var v858 = this.ranges;
      var v688 = v858.length;
      v360 = i$$14 < v688;
    }
    var v689 = this.strand;
    var v365 = v689 == "reverse";
    if (v365) {
      var v361 = outputWindow.document;
      var v1065 = JAM.call(sequenceArray$$1.join, sequenceArray$$1, [""], JAM.policy.p10);
      var v977 = complement(v1065);
      var v859 = reverse(v977);
      var v690 = addReturns(v859);
      var v362 = v690 + "\n\n";
      JAM.call(v361.write, v361, [v362], JAM.policy.p18);
    } else {
      var v363 = outputWindow.document;
      var v860 = JAM.call(sequenceArray$$1.join, sequenceArray$$1, [""], JAM.policy.p10);
      var v691 = addReturns(v860);
      var v364 = v691 + "\n\n";
      JAM.call(v363.write, v363, [v364], JAM.policy.p18);
    }
    return true;
  }
  var v692 = this.type;
  var v376 = v692 == "separate";
  if (v376) {
    i$$14 = 0;
    var v861 = this.ranges;
    var v693 = v861.length;
    var v375 = i$$14 < v693;
    for (;v375;) {
      var v978 = this.ranges;
      var v862 = v978[i$$14];
      var v694 = JAM.call(v862.getSequence, v862, [sequence$$20], JAM.policy.p18);
      var v374 = v694 != "";
      if (v374) {
        var v367 = outputWindow.document;
        var v979 = this.ranges;
        var v863 = v979[i$$14];
        var v695 = v863.getTitle();
        var v368 = v695 + "\n";
        JAM.call(v367.write, v367, [v368], JAM.policy.p18);
        var v696 = this.strand;
        var v373 = v696 == "reverse";
        if (v373) {
          var v369 = outputWindow.document;
          var v1169 = this.ranges;
          var v1120 = v1169[i$$14];
          var v1066 = JAM.call(v1120.getSequence, v1120, [sequence$$20], JAM.policy.p18);
          var v980 = addReturns(v1066);
          var v864 = complement(v980);
          var v697 = reverse(v864);
          var v370 = v697 + "\n\n";
          JAM.call(v369.write, v369, [v370], JAM.policy.p18);
        } else {
          var v371 = outputWindow.document;
          var v1067 = this.ranges;
          var v981 = v1067[i$$14];
          var v865 = JAM.call(v981.getSequence, v981, [sequence$$20], JAM.policy.p18);
          var v698 = addReturns(v865);
          var v372 = v698 + "\n\n";
          JAM.call(v371.write, v371, [v372], JAM.policy.p18);
        }
      }
      i$$14++;
      var v866 = this.ranges;
      var v699 = v866.length;
      v375 = i$$14 < v699;
    }
    return true;
  }
  var v700 = this.type;
  var v387 = v700 == "uppercased";
  if (v387) {
    var re$$3;
    sequence$$20 = sequence$$20.toLowerCase();
    i$$14 = 0;
    var v867 = this.ranges;
    var v701 = v867.length;
    var v381 = i$$14 < v701;
    for (;v381;) {
      var v982 = this.ranges;
      var v868 = v982[i$$14];
      var v702 = JAM.call(v868.getSequence, v868, [sequence$$20], JAM.policy.p18);
      var v380 = v702 != "";
      if (v380) {
        var v983 = this.ranges;
        var v869 = v983[i$$14];
        var v703 = v869.start;
        var v379 = v703 > 1;
        if (v379) {
          var v1170 = this.ranges;
          var v1121 = v1170[i$$14];
          var v1068 = v1121.start;
          var v984 = v1068 - 1;
          var v870 = "(.{" + v984;
          var v704 = v870 + "})\\B(.{";
          var v1122 = this.ranges;
          var v1069 = v1122[i$$14];
          var v985 = v1069.stop;
          var v1123 = this.ranges;
          var v1070 = v1123[i$$14];
          var v986 = v1070.start;
          var v871 = v985 - v986;
          var v705 = v871 + 1;
          var v377 = v704 + v705;
          re$$3 = v377 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v2], JAM.policy.p27);
        } else {
          var v1124 = this.ranges;
          var v1071 = v1124[i$$14];
          var v987 = v1071.stop;
          var v1125 = this.ranges;
          var v1072 = v1125[i$$14];
          var v988 = v1072.start;
          var v872 = v987 - v988;
          var v706 = v872 + 1;
          var v378 = "(.{" + v706;
          re$$3 = v378 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v3], JAM.policy.p27);
        }
      }
      i$$14++;
      var v873 = this.ranges;
      var v707 = v873.length;
      v381 = i$$14 < v707;
    }
    var v708 = this.strand;
    var v386 = v708 == "reverse";
    if (v386) {
      var v382 = outputWindow.document;
      var v989 = addReturns(sequence$$20);
      var v874 = complement(v989);
      var v709 = reverse(v874);
      var v383 = v709 + "\n\n";
      JAM.call(v382.write, v382, [v383], JAM.policy.p18);
    } else {
      var v384 = outputWindow.document;
      var v710 = addReturns(sequence$$20);
      var v385 = v710 + "\n\n";
      JAM.call(v384.write, v384, [v385], JAM.policy.p18);
    }
    return true;
  }
  var v711 = this.type;
  var v398 = v711 == "lowercased";
  if (v398) {
    sequence$$20 = sequence$$20.toUpperCase();
    i$$14 = 0;
    var v875 = this.ranges;
    var v712 = v875.length;
    var v392 = i$$14 < v712;
    for (;v392;) {
      var v990 = this.ranges;
      var v876 = v990[i$$14];
      var v713 = JAM.call(v876.getSequence, v876, [sequence$$20], JAM.policy.p18);
      var v391 = v713 != "";
      if (v391) {
        var v991 = this.ranges;
        var v877 = v991[i$$14];
        var v714 = v877.start;
        var v390 = v714 > 1;
        if (v390) {
          var v1171 = this.ranges;
          var v1126 = v1171[i$$14];
          var v1073 = v1126.start;
          var v992 = v1073 - 1;
          var v878 = "(.{" + v992;
          var v715 = v878 + "})\\B(.{";
          var v1127 = this.ranges;
          var v1074 = v1127[i$$14];
          var v993 = v1074.stop;
          var v1128 = this.ranges;
          var v1075 = v1128[i$$14];
          var v994 = v1075.start;
          var v879 = v993 - v994;
          var v716 = v879 + 1;
          var v388 = v715 + v716;
          re$$3 = v388 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v4], JAM.policy.p27);
        } else {
          var v1129 = this.ranges;
          var v1076 = v1129[i$$14];
          var v995 = v1076.stop;
          var v1130 = this.ranges;
          var v1077 = v1130[i$$14];
          var v996 = v1077.start;
          var v880 = v995 - v996;
          var v717 = v880 + 1;
          var v389 = "(.{" + v717;
          re$$3 = v389 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v5], JAM.policy.p27);
        }
      }
      i$$14++;
      var v881 = this.ranges;
      var v718 = v881.length;
      v392 = i$$14 < v718;
    }
    var v719 = this.strand;
    var v397 = v719 == "reverse";
    if (v397) {
      var v393 = outputWindow.document;
      var v997 = addReturns(sequence$$20);
      var v882 = complement(v997);
      var v720 = reverse(v882);
      var v394 = v720 + "\n\n";
      JAM.call(v393.write, v393, [v394], JAM.policy.p18);
    } else {
      var v395 = outputWindow.document;
      var v721 = addReturns(sequence$$20);
      var v396 = v721 + "\n\n";
      JAM.call(v395.write, v395, [v396], JAM.policy.p18);
    }
    return true;
  }
  var v722 = this.type;
  var v409 = v722 == "randomized";
  if (v409) {
    i$$14 = 0;
    var v883 = this.ranges;
    var v723 = v883.length;
    var v403 = i$$14 < v723;
    for (;v403;) {
      var v998 = this.ranges;
      var v884 = v998[i$$14];
      var v724 = JAM.call(v884.getSequence, v884, [sequence$$20], JAM.policy.p18);
      var v402 = v724 != "";
      if (v402) {
        var v999 = this.ranges;
        var v885 = v999[i$$14];
        var v725 = v885.start;
        var v401 = v725 > 1;
        if (v401) {
          var v1172 = this.ranges;
          var v1131 = v1172[i$$14];
          var v1078 = v1131.start;
          var v1000 = v1078 - 1;
          var v886 = "(.{" + v1000;
          var v726 = v886 + "})\\B(.{";
          var v1132 = this.ranges;
          var v1079 = v1132[i$$14];
          var v1001 = v1079.stop;
          var v1133 = this.ranges;
          var v1080 = v1133[i$$14];
          var v1002 = v1080.start;
          var v887 = v1001 - v1002;
          var v727 = v887 + 1;
          var v399 = v726 + v727;
          re$$3 = v399 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v6], JAM.policy.p27);
        } else {
          var v1134 = this.ranges;
          var v1081 = v1134[i$$14];
          var v1003 = v1081.stop;
          var v1135 = this.ranges;
          var v1082 = v1135[i$$14];
          var v1004 = v1082.start;
          var v888 = v1003 - v1004;
          var v728 = v888 + 1;
          var v400 = "(.{" + v728;
          re$$3 = v400 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = JAM.call(sequence$$20.replace, sequence$$20, [re$$3, v7], JAM.policy.p27);
        }
      }
      i$$14++;
      var v889 = this.ranges;
      var v729 = v889.length;
      v403 = i$$14 < v729;
    }
    var v730 = this.strand;
    var v408 = v730 == "reverse";
    if (v408) {
      var v404 = outputWindow.document;
      var v1005 = addReturns(sequence$$20);
      var v890 = complement(v1005);
      var v731 = reverse(v890);
      var v405 = v731 + "\n\n";
      JAM.call(v404.write, v404, [v405], JAM.policy.p18);
    } else {
      var v406 = outputWindow.document;
      var v732 = addReturns(sequence$$20);
      var v407 = v732 + "\n\n";
      JAM.call(v406.write, v406, [v407], JAM.policy.p18);
    }
    return true;
  }
  var v733 = this.type;
  var v421 = v733 == "preserved";
  if (v421) {
    var v410 = sequence$$20.length;
    var randomSequence = getRandomSequence(v410);
    i$$14 = 0;
    var v891 = this.ranges;
    var v734 = v891.length;
    var v415 = i$$14 < v734;
    for (;v415;) {
      var v1006 = this.ranges;
      var v892 = v1006[i$$14];
      var v735 = JAM.call(v892.getSequence, v892, [sequence$$20], JAM.policy.p18);
      var v414 = v735 != "";
      if (v414) {
        var v1007 = this.ranges;
        var v893 = v1007[i$$14];
        var v736 = v893.start;
        var v413 = v736 > 1;
        if (v413) {
          var v1173 = this.ranges;
          var v1136 = v1173[i$$14];
          var v1083 = v1136.start;
          var v1008 = v1083 - 1;
          var v894 = "(.{" + v1008;
          var v737 = v894 + "})\\B(.{";
          var v1137 = this.ranges;
          var v1084 = v1137[i$$14];
          var v1009 = v1084.stop;
          var v1138 = this.ranges;
          var v1085 = v1138[i$$14];
          var v1010 = v1085.start;
          var v895 = v1009 - v1010;
          var v738 = v895 + 1;
          var v411 = v737 + v738;
          re$$3 = v411 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v8], JAM.policy.p27);
        } else {
          var v1139 = this.ranges;
          var v1086 = v1139[i$$14];
          var v1011 = v1086.stop;
          var v1140 = this.ranges;
          var v1087 = v1140[i$$14];
          var v1012 = v1087.start;
          var v896 = v1011 - v1012;
          var v739 = v896 + 1;
          var v412 = "(.{" + v739;
          re$$3 = v412 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = JAM.call(randomSequence.replace, randomSequence, [re$$3, v9], JAM.policy.p27);
        }
      }
      i$$14++;
      var v897 = this.ranges;
      var v740 = v897.length;
      v415 = i$$14 < v740;
    }
    var v741 = this.strand;
    var v420 = v741 == "reverse";
    if (v420) {
      var v416 = outputWindow.document;
      var v1013 = addReturns(randomSequence);
      var v898 = complement(v1013);
      var v742 = reverse(v898);
      var v417 = v742 + "\n\n";
      JAM.call(v416.write, v416, [v417], JAM.policy.p18);
    } else {
      var v418 = outputWindow.document;
      var v743 = addReturns(randomSequence);
      var v419 = v743 + "\n\n";
      JAM.call(v418.write, v418, [v419], JAM.policy.p18);
    }
    return true;
  }
  return;
}
function RangeGroup(strand$$1, type$$25) {
  this.strand = strand$$1;
  this.type = type$$25;
  var v1269 = new Array;
  this.ranges = v1269;
  return;
}
new Range(0, 0);
var v422 = Range.prototype;
v422.getSequence = getSequence;
var v423 = Range.prototype;
v423.getTitle = getTitle;
new RangeGroup("", "");
var v424 = RangeGroup.prototype;
v424.addRange = addRange;
var v425 = RangeGroup.prototype;
v425.writeRanges = writeRanges;
JAM.set(document, "onload", v10);
var v426 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p10);
JAM.set(v426, "onclick", v11);
var v427 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p10);
JAM.set(v427, "onclick", v12)
