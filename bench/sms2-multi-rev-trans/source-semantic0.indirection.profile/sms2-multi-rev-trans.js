
JAM.startProfile('load');
function v4() {
  var v923 = document.forms;
  var v768 = v923[0];
  var v432 = v768.elements;
  var v5 = v432[0];
  v5.value = " ";
  var v924 = document.forms;
  var v769 = v924[0];
  var v433 = v769.elements;
  var v6 = v433[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    multiRevTrans();
  } catch (e$$8) {
    var v7 = "The following error was encountered: " + e$$8;
    alert(v7);
  }
  return;
}
function v2() {
  var v434 = document.main_form;
  var v8 = v434.main_submit;
  v8.focus();
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
  var v9 = arrayOfSequences[0];
  var lengthOfAlign = v9.length;
  var v435 = arrayOfSequences.length;
  var v10 = v435 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v436 = arrayOfTitles.length;
  var v12 = i$$1 < v436;
  for (;v12;) {
    var v1019 = arrayOfTitles[i$$1];
    var v925 = JAM.call(v1019.search, v1019, [/\S/], JAM.policy.p17);
    var v770 = v925 == -1;
    var v927 = !v770;
    if (v927) {
      var v1020 = arrayOfSequences[i$$1];
      var v926 = JAM.call(v1020.search, v1020, [/\S/], JAM.policy.p17);
      v770 = v926 == -1;
    }
    var v437 = v770;
    var v772 = !v437;
    if (v772) {
      var v928 = arrayOfSequences[i$$1];
      var v771 = v928.length;
      v437 = v771 != lengthOfAlign;
    }
    var v11 = v437;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v438 = arrayOfTitles.length;
    v12 = i$$1 < v438;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1075 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17);
  var v1021 = v1075 == -1;
  var v1077 = !v1021;
  if (v1077) {
    var v1076 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17);
    v1021 = v1076 == -1;
  }
  var v929 = v1021;
  var v1023 = !v929;
  if (v1023) {
    var v1022 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17);
    v929 = v1022 == -1;
  }
  var v773 = v929;
  var v931 = !v773;
  if (v931) {
    var v930 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17);
    v773 = v930 == -1;
  }
  var v439 = v773;
  var v775 = !v439;
  if (v775) {
    var v774 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17);
    v439 = v774 == -1;
  }
  var v13 = v439;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v776 = formElement.value;
  var v440 = JAM.call(v776.search, v776, [/\S/], JAM.policy.p17);
  var v14 = v440 == -1;
  if (v14) {
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
  var v441 = arrayOfPatterns.length;
  var v17 = z$$2 < v441;
  for (;v17;) {
    var v777 = arrayOfPatterns[z$$2];
    var v442 = JAM.call(v777.search, v777, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17);
    var v15 = v442 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v778 = arrayOfPatterns[z$$2];
    var v443 = moreExpressionCheck(v778);
    var v16 = v443 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v444 = arrayOfPatterns.length;
    v17 = z$$2 < v444;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v445 = arrayOfPatterns.length;
  var v23 = j < v445;
  for (;v23;) {
    var v779 = arrayOfPatterns[j];
    var v446 = JAM.call(v779.match, v779, [/\/.+\//], JAM.policy.p17);
    var v20 = v446 + "gi";
    if (JAM.isEval(eval)) {
      var v1244 = eval("introspect(JAM.policy.pFull) { " + v20 + " }")
    } else {
      var v1244 = JAM.call(eval, null, [v20])
    }
    geneticCodeMatchExp[j] = v1244;
    var v447 = arrayOfPatterns[j];
    var v21 = JAM.call(v447.match, v447, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v1245 = v21.toString();
    geneticCodeMatchResult[j] = v1245;
    var v22 = geneticCodeMatchResult[j];
    var v1246 = JAM.call(v22.replace, v22, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v1246;
    j++;
    var v448 = arrayOfPatterns.length;
    v23 = j < v448;
  }
  var i$$2 = 0;
  var v780 = testSequence.length;
  var v449 = v780 - 3;
  var v30 = i$$2 <= v449;
  for (;v30;) {
    var v24 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v24], JAM.policy.p15);
    j = 0;
    var v450 = geneticCodeMatchExp.length;
    var v28 = j < v450;
    for (;v28;) {
      var v781 = geneticCodeMatchExp[j];
      var v451 = JAM.call(codon.search, codon, [v781], JAM.policy.p16);
      var v27 = v451 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v452 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v452 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v453 = geneticCodeMatchExp.length;
      v28 = j < v453;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v782 = testSequence.length;
    var v454 = v782 - 3;
    v30 = i$$2 <= v454;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v455 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v455;
  for (;v32;) {
    var v783 = arrayOfPatterns$$1[z$$3];
    var v456 = JAM.call(v783.search, v783, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17);
    var v31 = v456 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v457 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v457;
  }
  var i$$3 = 0;
  var v458 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v458;
  for (;v36;) {
    var v784 = arrayOfPatterns$$1[i$$3];
    var v459 = "[" + v784;
    var v33 = v459 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v460 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v460;
    for (;v35;) {
      var v785 = arrayOfPatterns$$1[j$$1];
      var v461 = JAM.call(v785.search, v785, [re], JAM.policy.p16);
      var v34 = v461 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v462 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v462;
    }
    i$$3++;
    var v463 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v463;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v464 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v464;
  for (;v39;) {
    var v786 = arrayOfPatterns$$2[z$$4];
    var v465 = JAM.call(v786.search, v786, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17);
    var v37 = v465 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v787 = arrayOfPatterns$$2[z$$4];
    var v466 = moreExpressionCheck(v787);
    var v38 = v466 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v467 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v467;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v932 = getSequenceFromFasta(text$$7);
  var v788 = JAM.call(v932.replace, v932, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v468 = v788.length;
  var v41 = v468 > maxInput;
  if (v41) {
    var v469 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v469 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v470 = text$$8.length;
  var v43 = v470 > maxInput$$1;
  if (v43) {
    var v471 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v471 + " characters.";
    alert(v42);
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
  var v44 = outputWindow.document;
  JAM.call(v44.write, v44, ["</form>"], JAM.policy.p11);
  return true;
}
function closePre() {
  var v45 = outputWindow.document;
  JAM.call(v45.write, v45, ["</div>"], JAM.policy.p11);
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</pre>\n"], JAM.policy.p11);
  return;
}
function closeTextArea() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</textarea>"], JAM.policy.p11);
  return true;
}
function closeWindow() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</body>\n</html>\n"], JAM.policy.p11);
  outputWindow.status = "Done.";
  var v49 = outputWindow.document;
  v49.close();
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
  var v472 = alignArray.length;
  var v50 = v472 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v473 = alignArray.length;
  var v52 = i$$4 < v473;
  for (;v52;) {
    var v789 = alignArray[i$$4];
    var v474 = JAM.call(v789.search, v789, [/[^\s]+\s/], JAM.policy.p17);
    var v51 = v474 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v475 = alignArray.length;
    v52 = i$$4 < v475;
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
  var v476 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v55 = v476 != -1;
  if (v55) {
    var v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p16);
    for (;v54;) {
      var v53 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v53], JAM.policy.p16);
      v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p16);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v477 = sequence$$2.length;
  var v56 = "&gt;results for " + v477;
  var stringToReturn = v56 + " residue sequence ";
  var v478 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p17);
  var v58 = v478 != -1;
  if (v58) {
    var v479 = stringToReturn + '"';
    var v57 = v479 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v480 = stringToReturn + ' starting "';
  var v481 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v59 = v480 + v481;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v482 = sequenceOne.length;
  var v60 = "Search results for " + v482;
  var stringToReturn$$1 = v60 + " residue sequence ";
  var v483 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p17);
  var v62 = v483 != -1;
  if (v62) {
    var v484 = stringToReturn$$1 + '"';
    var v61 = v484 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v485 = stringToReturn$$1 + ' starting "';
  var v486 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v63 = v485 + v486;
  stringToReturn$$1 = v63 + '"\n';
  var v487 = stringToReturn$$1 + "and ";
  var v488 = sequenceTwo.length;
  var v64 = v487 + v488;
  stringToReturn$$1 = v64 + " residue sequence ";
  var v489 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p17);
  var v66 = v489 != -1;
  if (v66) {
    var v490 = stringToReturn$$1 + '"';
    var v65 = v490 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v491 = stringToReturn$$1 + ' starting "';
  var v492 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v67 = v491 + v492;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v493 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v493;
  for (;v71;) {
    var v790 = arrayOfPatterns$$3[j$$2];
    var v494 = JAM.call(v790.match, v790, [/\/.+\//], JAM.policy.p17);
    var v70 = v494 + "gi";
    if (JAM.isEval(eval)) {
      var v1247 = eval("introspect(JAM.policy.pFull) { " + v70 + " }")
    } else {
      var v1247 = JAM.call(eval, null, [v70])
    }
    geneticCodeMatchExp$$1[j$$2] = v1247;
    j$$2++;
    var v495 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v495;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v496 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v496;
  for (;v75;) {
    var v497 = arrayOfPatterns$$4[j$$3];
    var v73 = JAM.call(v497.match, v497, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v1248 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v1248;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v1249 = JAM.call(v74.replace, v74, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v1249;
    j$$3++;
    var v498 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v498;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v499 = sequence$$3.length;
  var v76 = "Results for " + v499;
  var stringToReturn$$2 = v76 + " residue sequence ";
  var v500 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p17);
  var v78 = v500 != -1;
  if (v78) {
    var v501 = stringToReturn$$2 + '"';
    var v77 = v501 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v502 = stringToReturn$$2 + ' starting "';
  var v503 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v79 = v502 + v503;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v791 = "Results for " + topology;
  var v504 = v791 + " ";
  var v505 = sequence$$4.length;
  var v81 = v504 + v505;
  var stringToReturn$$3 = v81 + " residue sequence ";
  var v506 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p17);
  var v83 = v506 != -1;
  if (v83) {
    var v507 = stringToReturn$$3 + '"';
    var v82 = v507 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v508 = stringToReturn$$3 + ' starting "';
  var v509 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v84 = v508 + v509;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v510 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v510;
  var stringToReturn$$4 = v86 + " residue sequence ";
  var v511 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p17);
  var v88 = v511 != -1;
  if (v88) {
    var v512 = stringToReturn$$4 + '"';
    var v87 = v512 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v513 = stringToReturn$$4 + ' starting "';
  var v514 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v89 = v513 + v514;
  stringToReturn$$4 = v89 + '"\n';
  var v515 = stringToReturn$$4 + "and ";
  var v516 = sequenceTwo$$1.length;
  var v90 = v515 + v516;
  stringToReturn$$4 = v90 + " residue sequence ";
  var v517 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p17);
  var v92 = v517 != -1;
  if (v92) {
    var v518 = stringToReturn$$4 + '"';
    var v91 = v518 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v519 = stringToReturn$$4 + ' starting "';
  var v520 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v93 = v519 + v520;
  stringToReturn$$4 = v93 + '"';
  var v94 = '<div class="info">' + stringToReturn$$4;
  return v94 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v96 = j$$4 < lengthOut;
  for (;v96;) {
    var v521 = Math.random();
    var v522 = components.length;
    var v95 = v521 * v522;
    tempNum = JAM.call(Math.floor, Math, [v95], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p16);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p11);
}
function getSequenceFromFasta(sequenceRecord) {
  var v523 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v97 = v523 != -1;
  if (v97) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v524 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v99 = v524 != -1;
  if (v99) {
    var v98 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
    fastaTitle = v98.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p15);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1180 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p17);
  var v1170 = v1180 != -1;
  var v1182 = !v1170;
  if (v1182) {
    var v1181 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17);
    v1170 = v1181 != -1;
  }
  var v1154 = v1170;
  var v1172 = !v1154;
  if (v1172) {
    var v1171 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17);
    v1154 = v1171 != -1;
  }
  var v1137 = v1154;
  var v1156 = !v1137;
  if (v1156) {
    var v1155 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17);
    v1137 = v1155 != -1;
  }
  var v1116 = v1137;
  var v1139 = !v1116;
  if (v1139) {
    var v1138 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17);
    v1116 = v1138 != -1;
  }
  var v1099 = v1116;
  var v1118 = !v1099;
  if (v1118) {
    var v1117 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17);
    v1099 = v1117 != -1;
  }
  var v1078 = v1099;
  var v1101 = !v1078;
  if (v1101) {
    var v1100 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17);
    v1078 = v1100 != -1;
  }
  var v1024 = v1078;
  var v1080 = !v1024;
  if (v1080) {
    var v1079 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17);
    v1024 = v1079 != -1;
  }
  var v933 = v1024;
  var v1026 = !v933;
  if (v1026) {
    var v1025 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17);
    v933 = v1025 != -1;
  }
  var v792 = v933;
  var v935 = !v792;
  if (v935) {
    var v934 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17);
    v792 = v934 != -1;
  }
  var v525 = v792;
  var v794 = !v525;
  if (v794) {
    var v793 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17);
    v525 = v793 != -1;
  }
  var v100 = v525;
  if (v100) {
    return false;
  }
  return true;
}
function openForm() {
  var v101 = outputWindow.document;
  JAM.call(v101.write, v101, ['<form action="">\n'], JAM.policy.p11);
  return true;
}
function openPre() {
  var v102 = outputWindow.document;
  JAM.call(v102.write, v102, ["<pre>"], JAM.policy.p11);
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ['<div class="pre">'], JAM.policy.p11);
  return;
}
function openTextArea() {
  var v104 = outputWindow.document;
  JAM.call(v104.write, v104, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p11);
  return true;
}
function openWindow() {
  var title$$5 = "Multi Rev Trans";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v105 = outputWindow.document;
  var v936 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v795 = v936 + "<head>\n";
  var v526 = v795 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v526 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v105.write, v105, [v106], JAM.policy.p16);
  if (isColor) {
    var v107 = outputWindow.document;
    var v1210 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1200 = v1210 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1190 = v1200 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1183 = v1190 + "div.info {font-weight: bold}\n";
    var v1173 = v1183 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1157 = v1173 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1140 = v1157 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1119 = v1140 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1102 = v1119 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1081 = v1102 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1027 = v1081 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v937 = v1027 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v796 = v937 + "td.many {color: #000000}\n";
    var v527 = v796 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v527 + "</style>\n";
    JAM.call(v107.write, v107, [v108], JAM.policy.p16);
  } else {
    var v109 = outputWindow.document;
    var v1220 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1211 = v1220 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1201 = v1211 + "div.title {display: none}\n";
    var v1191 = v1201 + "div.info {font-weight: bold}\n";
    var v1184 = v1191 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1174 = v1184 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1158 = v1174 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1141 = v1158 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1120 = v1141 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1103 = v1120 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1082 = v1103 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1028 = v1082 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v938 = v1028 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v797 = v938 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v528 = v797 + "img {display: none}\n";
    var v110 = v528 + "</style>\n";
    JAM.call(v109.write, v109, [v110], JAM.policy.p16);
  }
  var v111 = outputWindow.document;
  var v939 = "</head>\n" + '<body class="main">\n';
  var v798 = v939 + '<div class="title">';
  var v529 = v798 + title$$6;
  var v112 = v529 + " results</div>\n";
  JAM.call(v111.write, v111, [v112], JAM.policy.p16);
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
  var v113 = outputWindow.document;
  var v940 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v799 = v940 + "<head>\n";
  var v530 = v799 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v530 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v113.write, v113, [v114], JAM.policy.p16);
  if (isBackground) {
    var v115 = outputWindow.document;
    var v1212 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1202 = v1212 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1192 = v1202 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1185 = v1192 + "div.info {font-weight: bold}\n";
    var v1175 = v1185 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1159 = v1175 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1142 = v1159 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1121 = v1142 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1104 = v1121 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1083 = v1104 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1029 = v1083 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v941 = v1029 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v800 = v941 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v531 = v800 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v531 + "</style>\n";
    JAM.call(v115.write, v115, [v116], JAM.policy.p16);
  } else {
    var v117 = outputWindow.document;
    var v1225 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1221 = v1225 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1213 = v1221 + "div.title {display: none}\n";
    var v1203 = v1213 + "div.info {font-weight: bold}\n";
    var v1193 = v1203 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1186 = v1193 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1176 = v1186 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1160 = v1176 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1143 = v1160 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1122 = v1143 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1105 = v1122 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1084 = v1105 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1030 = v1084 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v942 = v1030 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v801 = v942 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v532 = v801 + "img {display: none}\n";
    var v118 = v532 + "</style>\n";
    JAM.call(v117.write, v117, [v118], JAM.policy.p16);
  }
  var v119 = outputWindow.document;
  var v943 = "</head>\n" + '<body class="main">\n';
  var v802 = v943 + '<div class="title">';
  var v533 = v802 + title$$8;
  var v120 = v533 + " results</div>\n";
  JAM.call(v119.write, v119, [v120], JAM.policy.p16);
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
  var v534 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p17);
  var v121 = v534 != -1;
  if (v121) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p17);
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
  var v122 = j$$5 < lengthOfColumn;
  for (;v122;) {
    tempString = tempString + " ";
    j$$5++;
    v122 = j$$5 < lengthOfColumn;
  }
  var v123 = tempString + theNumber;
  theNumber = v123 + " ";
  var v124 = sequenceToAppend + theNumber;
  sequenceToAppend = v124 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p16);
  var v535 = testArray[0];
  var v125 = v535 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v536 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p16);
  var v126 = v536 == -1;
  if (v126) {
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
  var v127 = !caughtException;
  if (v127) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p15);
  var v128 = testString != "1X2X3X";
  if (v128) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v537 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9);
  var v129 = v537 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v538 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9);
  var v130 = v538 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v539 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p17);
  var v131 = v539 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v1031 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17);
  var v944 = v1031 == -1;
  var v1033 = !v944;
  if (v1033) {
    var v1032 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17);
    v944 = v1032 == -1;
  }
  var v803 = v944;
  var v946 = !v803;
  if (v946) {
    var v945 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17);
    v803 = v945 == -1;
  }
  var v540 = v803;
  var v805 = !v540;
  if (v805) {
    var v804 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17);
    v540 = v804 == -1;
  }
  var v132 = v540;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v541 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p17);
  var v133 = v541 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v542 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v542 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v543 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p17);
  var v136 = v543 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v544 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p17);
  var v137 = v544 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v1034 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17);
  var v947 = v1034 == -1;
  var v1036 = !v947;
  if (v1036) {
    var v1035 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17);
    v947 = v1035 == -1;
  }
  var v806 = v947;
  var v949 = !v806;
  if (v949) {
    var v948 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17);
    v806 = v948 == -1;
  }
  var v545 = v806;
  var v808 = !v545;
  if (v808) {
    var v807 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17);
    v545 = v807 == -1;
  }
  var v138 = v545;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1037 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17);
  var v950 = v1037 == -1;
  var v1039 = !v950;
  if (v1039) {
    var v1038 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17);
    v950 = v1038 == -1;
  }
  var v809 = v950;
  var v952 = !v809;
  if (v952) {
    var v951 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17);
    v809 = v951 == -1;
  }
  var v546 = v809;
  var v811 = !v546;
  if (v811) {
    var v810 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17);
    v546 = v810 == -1;
  }
  var v139 = v546;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v547 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p17);
  var v140 = v547 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v1040 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17);
  var v953 = v1040 == -1;
  var v1042 = !v953;
  if (v1042) {
    var v1041 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17);
    v953 = v1041 == -1;
  }
  var v812 = v953;
  var v955 = !v812;
  if (v955) {
    var v954 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17);
    v812 = v954 == -1;
  }
  var v548 = v812;
  var v814 = !v548;
  if (v814) {
    var v813 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17);
    v548 = v813 == -1;
  }
  var v141 = v548;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v549 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p17);
  var v142 = v549 == -1;
  if (v142) {
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
  var v149 = i$$5 < stopBase;
  for (;v149;) {
    var v143 = i$$5 + 1;
    lineOfText = rightNum(v143, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v550 = basePerLine / groupSize;
    var v146 = j$$6 <= v550;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v551 = k + i$$5;
        var v144 = JAM.call(text$$10.charAt, text$$10, [v551], JAM.policy.p16);
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v552 = basePerLine / groupSize;
      v146 = j$$6 <= v552;
    }
    var v147 = outputWindow.document;
    var v148 = lineOfText + "\n";
    JAM.call(v147.write, v147, [v148], JAM.policy.p16);
    lineOfText = "";
    v149 = i$$5 < stopBase;
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
    var v553 = adjustment < 0;
    if (v553) {
      v553 = adjusted >= 0;
    }
    var v150 = v553;
    if (v150) {
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
  var v181 = i$$6 < stopBase$$2;
  for (;v181;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v554 = basePerLine$$2 / groupSize$$2;
    var v157 = j$$7 <= v554;
    for (;v157;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v555 = i$$6 + k$$1;
        var v151 = v555 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v556 = k$$1 + i$$6;
        var v152 = JAM.call(text$$12.charAt, text$$12, [v556], JAM.policy.p16);
        lineOfText$$1 = lineOfText$$1 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v155 = numberPosition$$1 == "above";
      if (v155) {
        var v557 = adjustNumbering(i$$6, numberingAdjustment);
        var v154 = rightNum(v557, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v154;
      }
      var v156 = i$$6 >= stopBase$$2;
      if (v156) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v558 = basePerLine$$2 / groupSize$$2;
      v157 = j$$7 <= v558;
    }
    var v180 = numberPosition$$1 == "left";
    if (v180) {
      var v158 = outputWindow.document;
      var v956 = adjustNumbering(lineNum, numberingAdjustment);
      var v815 = rightNum(v956, "", 8, tabIn$$3);
      var v559 = v815 + lineOfText$$1;
      var v159 = v559 + "\n";
      JAM.call(v158.write, v158, [v159], JAM.policy.p16);
      var v163 = strands$$1 == "two";
      if (v163) {
        var v160 = outputWindow.document;
        var v957 = adjustNumbering(lineNum, numberingAdjustment);
        var v816 = rightNum(v957, "", 8, tabIn$$3);
        var v817 = complement(lineOfText$$1);
        var v560 = v816 + v817;
        var v161 = v560 + "\n";
        JAM.call(v160.write, v160, [v161], JAM.policy.p16);
        var v162 = outputWindow.document;
        JAM.call(v162.write, v162, ["\n"], JAM.policy.p11);
      }
    } else {
      var v179 = numberPosition$$1 == "right";
      if (v179) {
        var v164 = outputWindow.document;
        var v818 = adjustNumbering(i$$6, numberingAdjustment);
        var v561 = lineOfText$$1 + v818;
        var v165 = v561 + "\n";
        JAM.call(v164.write, v164, [v165], JAM.policy.p16);
        var v169 = strands$$1 == "two";
        if (v169) {
          var v166 = outputWindow.document;
          var v819 = complement(lineOfText$$1);
          var v820 = adjustNumbering(i$$6, numberingAdjustment);
          var v562 = v819 + v820;
          var v167 = v562 + "\n";
          JAM.call(v166.write, v166, [v167], JAM.policy.p16);
          var v168 = outputWindow.document;
          JAM.call(v168.write, v168, ["\n"], JAM.policy.p11);
        }
      } else {
        var v178 = numberPosition$$1 == "above";
        if (v178) {
          var v170 = outputWindow.document;
          var v171 = aboveNum + "\n";
          JAM.call(v170.write, v170, [v171], JAM.policy.p16);
          var v172 = outputWindow.document;
          var v173 = lineOfText$$1 + "\n";
          JAM.call(v172.write, v172, [v173], JAM.policy.p16);
          var v177 = strands$$1 == "two";
          if (v177) {
            var v174 = outputWindow.document;
            var v563 = complement(lineOfText$$1);
            var v175 = v563 + "\n";
            JAM.call(v174.write, v174, [v175], JAM.policy.p16);
            var v176 = outputWindow.document;
            JAM.call(v176.write, v176, ["\n"], JAM.policy.p11);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v181 = i$$6 < stopBase$$2;
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
  var v200 = i$$7 < stopBase$$3;
  for (;v200;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v564 = basePerLine$$3 / groupSize$$3;
    var v188 = j$$8 <= v564;
    for (;v188;) {
      var v184 = k$$2 < groupSize$$3;
      for (;v184;) {
        var v565 = i$$7 + k$$2;
        var v182 = v565 >= stopBase$$3;
        if (v182) {
          break;
        }
        var v566 = k$$2 + i$$7;
        var v183 = JAM.call(text$$13.charAt, text$$13, [v566], JAM.policy.p16);
        lineOfText$$2 = lineOfText$$2 + v183;
        k$$2 = k$$2 + 1;
        v184 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v186 = numberPosition$$2 == "above";
      if (v186) {
        var v185 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v185;
      }
      var v187 = i$$7 >= stopBase$$3;
      if (v187) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v567 = basePerLine$$3 / groupSize$$3;
      v188 = j$$8 <= v567;
    }
    var v199 = numberPosition$$2 == "left";
    if (v199) {
      var v189 = outputWindow.document;
      var v821 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v568 = v821 + lineOfText$$2;
      var v190 = v568 + "\n";
      JAM.call(v189.write, v189, [v190], JAM.policy.p16);
    } else {
      var v198 = numberPosition$$2 == "right";
      if (v198) {
        var v191 = outputWindow.document;
        var v569 = lineOfText$$2 + i$$7;
        var v192 = v569 + "\n";
        JAM.call(v191.write, v191, [v192], JAM.policy.p16);
      } else {
        var v197 = numberPosition$$2 == "above";
        if (v197) {
          var v193 = outputWindow.document;
          var v194 = aboveNum$$1 + "\n";
          JAM.call(v193.write, v193, [v194], JAM.policy.p16);
          var v195 = outputWindow.document;
          var v196 = lineOfText$$2 + "\n";
          JAM.call(v195.write, v195, [v196], JAM.policy.p16);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v200 = i$$7 < stopBase$$3;
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
  var v958 = sequence$$13.length;
  var v822 = v958 <= firstIndexToMutate;
  var v959 = !v822;
  if (v959) {
    v822 = lastIndexToMutate < 0;
  }
  var v570 = v822;
  var v823 = !v570;
  if (v823) {
    v570 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v201 = v570;
  if (v201) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v209 = i$$8 < numMut;
  for (;v209;) {
    maxNum = sequence$$13.length;
    var v571 = Math.random();
    var v202 = v571 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v202], JAM.policy.p17);
    var v572 = randNum < firstIndexToMutate;
    var v824 = !v572;
    if (v824) {
      v572 = randNum > lastIndexToMutate;
    }
    var v203 = v572;
    if (v203) {
      numMut++;
      i$$8++;
      v209 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p17);
    needNewChar = true;
    for (;needNewChar;) {
      var v573 = Math.random();
      var v574 = components$$1.length;
      var v204 = v573 * v574;
      componentsIndex = JAM.call(Math.round, Math, [v204], JAM.policy.p17);
      var v575 = components$$1.length;
      var v205 = componentsIndex == v575;
      if (v205) {
        componentsIndex = 0;
      }
      var v576 = components$$1[componentsIndex];
      var v206 = v576 != currentChar;
      if (v206) {
        needNewChar = false;
      }
    }
    var v577 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v578 = components$$1[componentsIndex];
    var v207 = v577 + v578;
    var v579 = randNum + 1;
    var v580 = sequence$$13.length;
    var v208 = JAM.call(sequence$$13.substring, sequence$$13, [v579, v580], JAM.policy.p27);
    sequence$$13 = v207 + v208;
    i$$8++;
    v209 = i$$8 < numMut;
  }
  var v210 = outputWindow.document;
  var v211 = addReturns(sequence$$13);
  JAM.call(v210.write, v210, [v211], JAM.policy.p16);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v216 = j$$9 < lengthOut$$1;
  for (;v216;) {
    var v581 = Math.random();
    var v582 = components$$2.length;
    var v212 = v581 * v582;
    tempNum$$1 = JAM.call(Math.floor, Math, [v212], JAM.policy.p17);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v583 = sequence$$14.length;
    var v215 = v583 == 60;
    if (v215) {
      var v213 = outputWindow.document;
      var v214 = sequence$$14 + "\n";
      JAM.call(v213.write, v213, [v214], JAM.policy.p16);
      sequence$$14 = "";
    }
    j$$9++;
    v216 = j$$9 < lengthOut$$1;
  }
  var v217 = outputWindow.document;
  var v218 = sequence$$14 + "\n";
  JAM.call(v217.write, v217, [v218], JAM.policy.p16);
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
  var v222 = dnaConformation == "circular";
  if (v222) {
    var v219 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v219.length;
    var v960 = sequence$$15.length;
    var v825 = v960 - lookAhead;
    var v826 = sequence$$15.length;
    var v584 = JAM.call(sequence$$15.substring, sequence$$15, [v825, v826], JAM.policy.p27);
    var v220 = v584 + sequence$$15;
    var v221 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v220 + v221;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v223 = outputWindow.document;
  JAM.call(v223.write, v223, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v224 = outputWindow.document;
  var v961 = '<tr><td class="title" width="200px">' + "Site:";
  var v827 = v961 + '</td><td class="title">';
  var v585 = v827 + "Positions:";
  var v225 = v585 + "</td></tr>\n";
  JAM.call(v224.write, v224, [v225], JAM.policy.p16);
  var i$$9 = 0;
  var v586 = arrayOfItems.length;
  var v241 = i$$9 < v586;
  for (;v241;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v587 = arrayOfItems[i$$9];
    var v226 = JAM.call(v587.match, v587, [/\/.+\//], JAM.policy.p17);
    matchExp = v226 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v962 = arrayOfItems[i$$9];
    var v828 = JAM.call(v962.match, v962, [/\)\D*\d+/], JAM.policy.p17);
    var v588 = v828.toString();
    var v227 = JAM.call(v588.replace, v588, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v227);
    var v233 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
    for (;v233;) {
      var v228 = matchExp.lastIndex;
      matchPosition = v228 - cutDistance;
      var v589 = matchPosition >= lowerLimit;
      if (v589) {
        v589 = matchPosition < upperLimit;
      }
      var v231 = v589;
      if (v231) {
        timesFound++;
        var v229 = tempString$$1 + ", ";
        var v590 = matchPosition - shiftValue;
        var v230 = v590 + 1;
        tempString$$1 = v229 + v230;
      }
      var v591 = matchExp.lastIndex;
      var v829 = RegExp.lastMatch;
      var v592 = v829.length;
      var v232 = v591 - v592;
      matchExp.lastIndex = v232 + 1;
      v233 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
    }
    var v593 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p17);
    var v234 = v593 != -1;
    if (v234) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p15);
    }
    var v238 = timesFound == 0;
    if (v238) {
      backGroundClass = "none";
    } else {
      var v237 = timesFound == 1;
      if (v237) {
        backGroundClass = "one";
      } else {
        var v236 = timesFound == 2;
        if (v236) {
          backGroundClass = "two";
        } else {
          var v235 = timesFound == 3;
          if (v235) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v239 = outputWindow.document;
    var v1123 = '<tr><td class="' + backGroundClass;
    var v1106 = v1123 + '">';
    var v1161 = arrayOfItems[i$$9];
    var v1144 = JAM.call(v1161.match, v1161, [/\([^\(]+\)/], JAM.policy.p17);
    var v1124 = v1144.toString();
    var v1107 = JAM.call(v1124.replace, v1124, [/\(|\)/g, ""], JAM.policy.p15);
    var v1085 = v1106 + v1107;
    var v1043 = v1085 + '</td><td class="';
    var v963 = v1043 + backGroundClass;
    var v830 = v963 + '">';
    var v594 = v830 + tempString$$1;
    var v240 = v594 + "</td></tr>\n";
    JAM.call(v239.write, v239, [v240], JAM.policy.p16);
    timesFound = 0;
    i$$9++;
    var v595 = arrayOfItems.length;
    v241 = i$$9 < v595;
  }
  var v242 = outputWindow.document;
  JAM.call(v242.write, v242, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v243 = outputWindow.document;
  JAM.call(v243.write, v243, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v244 = outputWindow.document;
  var v1086 = '<tr><td class="title">' + "Pattern:";
  var v1044 = v1086 + '</td><td class="title">';
  var v964 = v1044 + "Times found:";
  var v831 = v964 + '</td><td class="title">';
  var v596 = v831 + "Percentage:";
  var v245 = v596 + "</td></tr>\n";
  JAM.call(v244.write, v244, [v245], JAM.policy.p16);
  var i$$10 = 0;
  var v597 = arrayOfItems$$1.length;
  var v254 = i$$10 < v597;
  for (;v254;) {
    var tempNumber = 0;
    var v598 = arrayOfItems$$1[i$$10];
    var v246 = JAM.call(v598.match, v598, [/\/[^\/]+\//], JAM.policy.p17);
    var matchExp$$1 = v246 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v599 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p16);
    var v248 = v599 != -1;
    if (v248) {
      var v247 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p16);
      tempNumber = v247.length;
    }
    var percentage = 0;
    var v832 = originalLength + 1;
    var v1045 = arrayOfItems$$1[i$$10];
    var v965 = JAM.call(v1045.match, v1045, [/\d+/], JAM.policy.p17);
    var v833 = parseFloat(v965);
    var v600 = v832 - v833;
    var v251 = v600 > 0;
    if (v251) {
      var v249 = 100 * tempNumber;
      var v601 = originalLength + 1;
      var v966 = arrayOfItems$$1[i$$10];
      var v834 = JAM.call(v966.match, v966, [/\d+/], JAM.policy.p17);
      var v602 = parseFloat(v834);
      var v250 = v601 - v602;
      percentage = v249 / v250;
    }
    var v252 = outputWindow.document;
    var v1162 = arrayOfItems$$1[i$$10];
    var v1145 = JAM.call(v1162.match, v1162, [/\([^\(]+\)\b/], JAM.policy.p17);
    var v1125 = v1145.toString();
    var v1108 = JAM.call(v1125.replace, v1125, [/\(|\)/g, ""], JAM.policy.p15);
    var v1087 = "<tr><td>" + v1108;
    var v1046 = v1087 + "</td><td>";
    var v967 = v1046 + tempNumber;
    var v835 = v967 + "</td><td>";
    var v836 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9);
    var v603 = v835 + v836;
    var v253 = v603 + "</td></tr>\n";
    JAM.call(v252.write, v252, [v253], JAM.policy.p16);
    i$$10++;
    var v604 = arrayOfItems$$1.length;
    v254 = i$$10 < v604;
  }
  var v255 = outputWindow.document;
  JAM.call(v255.write, v255, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v605 = sequence$$17.length;
  var v262 = v605 > 0;
  for (;v262;) {
    maxNum$$1 = sequence$$17.length;
    var v606 = Math.random();
    var v256 = v606 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v256], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v257 = randNum$$1 + 1;
    var v258 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v257, v258], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v607 = tempSeq.length;
    var v261 = v607 == 60;
    if (v261) {
      var v259 = outputWindow.document;
      var v260 = tempSeq + "\n";
      JAM.call(v259.write, v259, [v260], JAM.policy.p16);
      tempSeq = "";
    }
    var v608 = sequence$$17.length;
    v262 = v608 > 0;
  }
  var v263 = outputWindow.document;
  var v264 = tempSeq + "\n";
  JAM.call(v263.write, v263, [v264], JAM.policy.p16);
  return true;
}
function multiRevTrans() {
  var theDocument = document;
  var newProtein = "";
  var maxInput$$3 = 2E4;
  var codonTable$$1;
  var alignArray$$1 = new Array;
  var titleArray = new Array;
  var sequenceArray$$1 = new Array;
  var v609 = testScript();
  var v265 = v609 == false;
  if (v265) {
    return;
  }
  var v1126 = theDocument.forms;
  var v1109 = v1126[0];
  var v1088 = v1109.elements;
  var v1047 = v1088[0];
  var v968 = checkFormElement(v1047);
  var v837 = v968 == false;
  var v970 = !v837;
  if (v970) {
    var v1146 = theDocument.forms;
    var v1127 = v1146[0];
    var v1110 = v1127.elements;
    var v1089 = v1110[0];
    var v1048 = v1089.value;
    var v969 = checkTextLength(v1048, maxInput$$3);
    v837 = v969 == false;
  }
  var v610 = v837;
  var v839 = !v610;
  if (v839) {
    var v1128 = theDocument.forms;
    var v1111 = v1128[0];
    var v1090 = v1111.elements;
    var v1049 = v1090[4];
    var v971 = v1049.value;
    var v838 = checkCodonTable(v971);
    v610 = v838 == false;
  }
  var v266 = v610;
  if (v266) {
    return;
  }
  var v1050 = theDocument.forms;
  var v972 = v1050[0];
  var v840 = v972.elements;
  var v611 = v840[0];
  var v267 = v611.value;
  theAlignment = "X" + v267;
  alignArray$$1 = JAM.call(theAlignment.split, theAlignment, [/[>%#]/], JAM.policy.p17);
  var v612 = earlyCheckAlign(alignArray$$1);
  var v268 = v612 == false;
  if (v268) {
    return;
  }
  var i$$11 = 1;
  var v613 = alignArray$$1.length;
  var v278 = i$$11 < v613;
  for (;v278;) {
    var v269 = i$$11 - 1;
    var v614 = alignArray$$1[i$$11];
    var v1250 = JAM.call(v614.match, v614, [/[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
    titleArray[v269] = v1250;
    var v270 = i$$11 - 1;
    var v1051 = i$$11 - 1;
    var v973 = titleArray[v1051];
    var v841 = v973.toString();
    var v615 = filterFastaTitle(v841);
    var v1251 = JAM.call(v615.replace, v615, [/[\f\n\r]/g, ""], JAM.policy.p15);
    titleArray[v270] = v1251;
    var v271 = i$$11 - 1;
    var v842 = i$$11 - 1;
    var v616 = titleArray[v842];
    var v1252 = JAM.call(v616.substring, v616, [0, 20], JAM.policy.p13);
    titleArray[v271] = v1252;
    var v275 = i$$11 == 1;
    if (v275) {
      var v617 = i$$11 - 1;
      var v272 = titleArray[v617];
      longestTitle = v272.length;
    } else {
      var v974 = i$$11 - 1;
      var v843 = titleArray[v974];
      var v618 = v843.length;
      var v274 = v618 > longestTitle;
      if (v274) {
        var v619 = i$$11 - 1;
        var v273 = titleArray[v619];
        longestTitle = v273.length;
      }
    }
    var v276 = i$$11 - 1;
    var v620 = alignArray$$1[i$$11];
    var v1253 = JAM.call(v620.replace, v620, [/[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
    sequenceArray$$1[v276] = v1253;
    var v277 = i$$11 - 1;
    var v844 = i$$11 - 1;
    var v621 = sequenceArray$$1[v844];
    var v1254 = filterAlignSeq(v621);
    sequenceArray$$1[v277] = v1254;
    i$$11++;
    var v622 = alignArray$$1.length;
    v278 = i$$11 < v622;
  }
  var v1052 = theDocument.forms;
  var v975 = v1052[0];
  var v845 = v975.elements;
  var v623 = v845[4];
  var v279 = v623.value;
  codonTable$$1 = makeCodonTable(v279);
  var v280 = codonTable$$1 == false;
  if (v280) {
    return;
  }
  openWindow();
  i$$11 = 0;
  var v624 = titleArray.length;
  var v285 = i$$11 < v624;
  for (;v285;) {
    var v281 = outputWindow.document;
    var v625 = titleArray[i$$11];
    var v626 = sequenceArray$$1[i$$11];
    var v282 = getInfoFromTitleAndSequence(v625, v626);
    JAM.call(v281.write, v281, [v282], JAM.policy.p16);
    var v846 = titleArray.length;
    var v627 = v846 - 1;
    var v284 = i$$11 < v627;
    if (v284) {
      var v283 = outputWindow.document;
      JAM.call(v283.write, v283, ['<div class="info">Combined with:</div>\n'], JAM.policy.p11);
    }
    i$$11++;
    var v628 = titleArray.length;
    v285 = i$$11 < v628;
  }
  openPre();
  writeConsensusSeq(sequenceArray$$1, codonTable$$1);
  var v286 = outputWindow.document;
  JAM.call(v286.write, v286, ["\n"], JAM.policy.p11);
  writeMultiRevTrans(sequenceArray$$1, codonTable$$1);
  closePre();
  closeWindow();
  return;
}
function writeConsensusSeq(sequenceArray$$2, codonTable$$2) {
  var consensusSeq = new Array;
  var aminoAcid;
  var firstG;
  var firstA;
  var firstT;
  var firstC;
  var secondG;
  var secondA;
  var secondT;
  var secondC;
  var thirdG;
  var thirdA;
  var thirdT;
  var thirdC;
  var i$$12 = 0;
  var v847 = sequenceArray$$2[0];
  var v629 = v847.length;
  var v306 = i$$12 < v629;
  for (;v306;) {
    firstG = 0;
    firstA = 0;
    firstT = 0;
    firstC = 0;
    secondG = 0;
    secondA = 0;
    secondT = 0;
    secondC = 0;
    thirdG = 0;
    thirdA = 0;
    thirdT = 0;
    thirdC = 0;
    var j$$10 = 0;
    var v630 = sequenceArray$$2.length;
    var v302 = j$$10 < v630;
    for (;v302;) {
      var v976 = sequenceArray$$2[j$$10];
      var v848 = JAM.call(v976.charAt, v976, [i$$12], JAM.policy.p16);
      var v631 = v848 == "-";
      var v850 = !v631;
      if (v850) {
        var v977 = sequenceArray$$2[j$$10];
        var v849 = JAM.call(v977.charAt, v977, [i$$12], JAM.policy.p16);
        v631 = v849 == ".";
      }
      var v301 = v631;
      if (v301) {
        firstG = firstG + .25;
        firstA = firstA + .25;
        firstT = firstT + .25;
        firstC = firstC + .25;
        secondG = secondG + .25;
        secondA = secondA + .25;
        secondT = secondT + .25;
        secondC = secondC + .25;
        thirdG = thirdG + .25;
        thirdA = thirdA + .25;
        thirdT = thirdT + .25;
        thirdC = thirdC + .25;
      } else {
        try {
          var v978 = sequenceArray$$2[j$$10];
          var v851 = JAM.call(v978.charAt, v978, [i$$12], JAM.policy.p16);
          var v632 = v851.toString();
          var v287 = v632.toLowerCase();
          aminoAcid = codonTable$$2[v287];
        } catch (e$$5) {
          var v852 = sequenceArray$$2[j$$10];
          var v633 = JAM.call(v852.charAt, v852, [i$$12], JAM.policy.p16);
          var v288 = "A codon table entry wasn't found for " + v633;
          alert(v288);
          return;
        }
        var v634 = aminoAcid.baseFreqPosOne;
        var v289 = v634[0];
        firstG = firstG + v289;
        var v635 = aminoAcid.baseFreqPosOne;
        var v290 = v635[1];
        firstA = firstA + v290;
        var v636 = aminoAcid.baseFreqPosOne;
        var v291 = v636[2];
        firstT = firstT + v291;
        var v637 = aminoAcid.baseFreqPosOne;
        var v292 = v637[3];
        firstC = firstC + v292;
        var v638 = aminoAcid.baseFreqPosTwo;
        var v293 = v638[0];
        secondG = secondG + v293;
        var v639 = aminoAcid.baseFreqPosTwo;
        var v294 = v639[1];
        secondA = secondA + v294;
        var v640 = aminoAcid.baseFreqPosTwo;
        var v295 = v640[2];
        secondT = secondT + v295;
        var v641 = aminoAcid.baseFreqPosTwo;
        var v296 = v641[3];
        secondC = secondC + v296;
        var v642 = aminoAcid.baseFreqPosThree;
        var v297 = v642[0];
        thirdG = thirdG + v297;
        var v643 = aminoAcid.baseFreqPosThree;
        var v298 = v643[1];
        thirdA = thirdA + v298;
        var v644 = aminoAcid.baseFreqPosThree;
        var v299 = v644[2];
        thirdT = thirdT + v299;
        var v645 = aminoAcid.baseFreqPosThree;
        var v300 = v645[3];
        thirdC = thirdC + v300;
      }
      j$$10++;
      var v646 = sequenceArray$$2.length;
      v302 = j$$10 < v646;
    }
    var v647 = [firstG, firstA, firstT, firstC];
    var v303 = _getConsensusBase(v647);
    JAM.call(consensusSeq.push, consensusSeq, [v303], JAM.policy.p16);
    var v648 = [secondG, secondA, secondT, secondC];
    var v304 = _getConsensusBase(v648);
    JAM.call(consensusSeq.push, consensusSeq, [v304], JAM.policy.p16);
    var v649 = [thirdG, thirdA, thirdT, thirdC];
    var v305 = _getConsensusBase(v649);
    JAM.call(consensusSeq.push, consensusSeq, [v305], JAM.policy.p16);
    i$$12++;
    var v853 = sequenceArray$$2[0];
    var v650 = v853.length;
    v306 = i$$12 < v650;
  }
  var v307 = outputWindow.document;
  var v854 = "&gt;" + "reverse translation of alignment to a ";
  var v855 = consensusSeq.length;
  var v651 = v854 + v855;
  var v308 = v651 + " base sequence of consensus codons.\n";
  JAM.call(v307.write, v307, [v308], JAM.policy.p16);
  var v309 = outputWindow.document;
  var v652 = JAM.call(consensusSeq.join, consensusSeq, [""], JAM.policy.p11);
  var v310 = addReturns(v652);
  JAM.call(v309.write, v309, [v310], JAM.policy.p16);
  var v311 = outputWindow.document;
  JAM.call(v311.write, v311, ["\n"], JAM.policy.p11);
  return;
}
function writeMultiRevTrans(sequenceArray$$3, codonTable$$3) {
  var markG = "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg";
  var markA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  var markT = "TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT";
  var markC = "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC";
  var markLength = markG.length;
  var aminoAcid$$1;
  var columnSeq;
  var firstG$$1;
  var firstA$$1;
  var firstT$$1;
  var firstC$$1;
  var secondG$$1;
  var secondA$$1;
  var secondT$$1;
  var secondC$$1;
  var thirdG$$1;
  var thirdA$$1;
  var thirdT$$1;
  var thirdC$$1;
  var i$$13 = 0;
  var v856 = sequenceArray$$3[0];
  var v653 = v856.length;
  var v354 = i$$13 < v653;
  for (;v354;) {
    columnSeq = "";
    firstG$$1 = 0;
    firstA$$1 = 0;
    firstT$$1 = 0;
    firstC$$1 = 0;
    secondG$$1 = 0;
    secondA$$1 = 0;
    secondT$$1 = 0;
    secondC$$1 = 0;
    thirdG$$1 = 0;
    thirdA$$1 = 0;
    thirdT$$1 = 0;
    thirdC$$1 = 0;
    var j$$11 = 0;
    var v654 = sequenceArray$$3.length;
    var v328 = j$$11 < v654;
    for (;v328;) {
      var v655 = sequenceArray$$3[j$$11];
      var v312 = JAM.call(v655.charAt, v655, [i$$13], JAM.policy.p16);
      columnSeq = columnSeq + v312;
      var v979 = sequenceArray$$3[j$$11];
      var v857 = JAM.call(v979.charAt, v979, [i$$13], JAM.policy.p16);
      var v656 = v857 == "-";
      var v859 = !v656;
      if (v859) {
        var v980 = sequenceArray$$3[j$$11];
        var v858 = JAM.call(v980.charAt, v980, [i$$13], JAM.policy.p16);
        v656 = v858 == ".";
      }
      var v327 = v656;
      if (v327) {
        firstG$$1 = firstG$$1 + .25;
        firstA$$1 = firstA$$1 + .25;
        firstT$$1 = firstT$$1 + .25;
        firstC$$1 = firstC$$1 + .25;
        secondG$$1 = secondG$$1 + .25;
        secondA$$1 = secondA$$1 + .25;
        secondT$$1 = secondT$$1 + .25;
        secondC$$1 = secondC$$1 + .25;
        thirdG$$1 = thirdG$$1 + .25;
        thirdA$$1 = thirdA$$1 + .25;
        thirdT$$1 = thirdT$$1 + .25;
        thirdC$$1 = thirdC$$1 + .25;
      } else {
        try {
          var v981 = sequenceArray$$3[j$$11];
          var v860 = JAM.call(v981.charAt, v981, [i$$13], JAM.policy.p16);
          var v657 = v860.toString();
          var v313 = v657.toLowerCase();
          aminoAcid$$1 = codonTable$$3[v313];
        } catch (e$$6) {
          var v861 = sequenceArray$$3[j$$11];
          var v658 = JAM.call(v861.charAt, v861, [i$$13], JAM.policy.p16);
          var v314 = "A codon table entry wasn't found for " + v658;
          alert(v314);
          return;
        }
        var v659 = aminoAcid$$1.baseFreqPosOne;
        var v315 = v659[0];
        firstG$$1 = firstG$$1 + v315;
        var v660 = aminoAcid$$1.baseFreqPosOne;
        var v316 = v660[1];
        firstA$$1 = firstA$$1 + v316;
        var v661 = aminoAcid$$1.baseFreqPosOne;
        var v317 = v661[2];
        firstT$$1 = firstT$$1 + v317;
        var v662 = aminoAcid$$1.baseFreqPosOne;
        var v318 = v662[3];
        firstC$$1 = firstC$$1 + v318;
        var v663 = aminoAcid$$1.baseFreqPosTwo;
        var v319 = v663[0];
        secondG$$1 = secondG$$1 + v319;
        var v664 = aminoAcid$$1.baseFreqPosTwo;
        var v320 = v664[1];
        secondA$$1 = secondA$$1 + v320;
        var v665 = aminoAcid$$1.baseFreqPosTwo;
        var v321 = v665[2];
        secondT$$1 = secondT$$1 + v321;
        var v666 = aminoAcid$$1.baseFreqPosTwo;
        var v322 = v666[3];
        secondC$$1 = secondC$$1 + v322;
        var v667 = aminoAcid$$1.baseFreqPosThree;
        var v323 = v667[0];
        thirdG$$1 = thirdG$$1 + v323;
        var v668 = aminoAcid$$1.baseFreqPosThree;
        var v324 = v668[1];
        thirdA$$1 = thirdA$$1 + v324;
        var v669 = aminoAcid$$1.baseFreqPosThree;
        var v325 = v669[2];
        thirdT$$1 = thirdT$$1 + v325;
        var v670 = aminoAcid$$1.baseFreqPosThree;
        var v326 = v670[3];
        thirdC$$1 = thirdC$$1 + v326;
      }
      j$$11++;
      var v671 = sequenceArray$$3.length;
      v328 = j$$11 < v671;
    }
    var v672 = markLength * firstG$$1;
    var v673 = sequenceArray$$3.length;
    var v329 = v672 / v673;
    firstG$$1 = JAM.call(Math.round, Math, [v329], JAM.policy.p17);
    var v674 = markLength * firstA$$1;
    var v675 = sequenceArray$$3.length;
    var v330 = v674 / v675;
    firstA$$1 = JAM.call(Math.round, Math, [v330], JAM.policy.p17);
    var v676 = markLength * firstT$$1;
    var v677 = sequenceArray$$3.length;
    var v331 = v676 / v677;
    firstT$$1 = JAM.call(Math.round, Math, [v331], JAM.policy.p17);
    var v678 = markLength * firstC$$1;
    var v679 = sequenceArray$$3.length;
    var v332 = v678 / v679;
    firstC$$1 = JAM.call(Math.round, Math, [v332], JAM.policy.p17);
    var v680 = markLength * secondG$$1;
    var v681 = sequenceArray$$3.length;
    var v333 = v680 / v681;
    secondG$$1 = JAM.call(Math.round, Math, [v333], JAM.policy.p17);
    var v682 = markLength * secondA$$1;
    var v683 = sequenceArray$$3.length;
    var v334 = v682 / v683;
    secondA$$1 = JAM.call(Math.round, Math, [v334], JAM.policy.p17);
    var v684 = markLength * secondT$$1;
    var v685 = sequenceArray$$3.length;
    var v335 = v684 / v685;
    secondT$$1 = JAM.call(Math.round, Math, [v335], JAM.policy.p17);
    var v686 = markLength * secondC$$1;
    var v687 = sequenceArray$$3.length;
    var v336 = v686 / v687;
    secondC$$1 = JAM.call(Math.round, Math, [v336], JAM.policy.p17);
    var v688 = markLength * thirdG$$1;
    var v689 = sequenceArray$$3.length;
    var v337 = v688 / v689;
    thirdG$$1 = JAM.call(Math.round, Math, [v337], JAM.policy.p17);
    var v690 = markLength * thirdA$$1;
    var v691 = sequenceArray$$3.length;
    var v338 = v690 / v691;
    thirdA$$1 = JAM.call(Math.round, Math, [v338], JAM.policy.p17);
    var v692 = markLength * thirdT$$1;
    var v693 = sequenceArray$$3.length;
    var v339 = v692 / v693;
    thirdT$$1 = JAM.call(Math.round, Math, [v339], JAM.policy.p17);
    var v694 = markLength * thirdC$$1;
    var v695 = sequenceArray$$3.length;
    var v340 = v694 / v695;
    thirdC$$1 = JAM.call(Math.round, Math, [v340], JAM.policy.p17);
    var v341 = outputWindow.document;
    var v1091 = i$$13 + 1;
    var v1053 = "<b>" + v1091;
    var v982 = v1053 + "_";
    var v862 = v982 + columnSeq;
    var v696 = v862 + "_";
    var v342 = v696 + "first</b>\n";
    JAM.call(v341.write, v341, [v342], JAM.policy.p16);
    var v343 = outputWindow.document;
    var v1241 = JAM.call(markG.substring, markG, [0, firstG$$1], JAM.policy.p13);
    var v1235 = "g" + v1241;
    var v1229 = v1235 + " ";
    var v1236 = firstG$$1 / markLength;
    var v1230 = JAM.call(v1236.toFixed, v1236, [2], JAM.policy.p9);
    var v1226 = v1229 + v1230;
    var v1222 = v1226 + "\n";
    var v1214 = v1222 + "a";
    var v1215 = JAM.call(markA.substring, markA, [0, firstA$$1], JAM.policy.p13);
    var v1204 = v1214 + v1215;
    var v1194 = v1204 + " ";
    var v1205 = firstA$$1 / markLength;
    var v1195 = JAM.call(v1205.toFixed, v1205, [2], JAM.policy.p9);
    var v1187 = v1194 + v1195;
    var v1177 = v1187 + "\n";
    var v1163 = v1177 + "T";
    var v1164 = JAM.call(markT.substring, markT, [0, firstT$$1], JAM.policy.p13);
    var v1147 = v1163 + v1164;
    var v1129 = v1147 + " ";
    var v1148 = firstT$$1 / markLength;
    var v1130 = JAM.call(v1148.toFixed, v1148, [2], JAM.policy.p9);
    var v1112 = v1129 + v1130;
    var v1092 = v1112 + "\n";
    var v1054 = v1092 + "C";
    var v1055 = JAM.call(markC.substring, markC, [0, firstC$$1], JAM.policy.p13);
    var v983 = v1054 + v1055;
    var v863 = v983 + " ";
    var v984 = firstC$$1 / markLength;
    var v864 = JAM.call(v984.toFixed, v984, [2], JAM.policy.p9);
    var v697 = v863 + v864;
    var v344 = v697 + "\n";
    JAM.call(v343.write, v343, [v344], JAM.policy.p16);
    var v345 = outputWindow.document;
    var v1093 = i$$13 + 1;
    var v1056 = "<b>" + v1093;
    var v985 = v1056 + "_";
    var v865 = v985 + columnSeq;
    var v698 = v865 + "_";
    var v346 = v698 + "second</b>\n";
    JAM.call(v345.write, v345, [v346], JAM.policy.p16);
    var v347 = outputWindow.document;
    var v1242 = JAM.call(markG.substring, markG, [0, secondG$$1], JAM.policy.p13);
    var v1237 = "g" + v1242;
    var v1231 = v1237 + " ";
    var v1238 = secondG$$1 / markLength;
    var v1232 = JAM.call(v1238.toFixed, v1238, [2], JAM.policy.p9);
    var v1227 = v1231 + v1232;
    var v1223 = v1227 + "\n";
    var v1216 = v1223 + "a";
    var v1217 = JAM.call(markA.substring, markA, [0, secondA$$1], JAM.policy.p13);
    var v1206 = v1216 + v1217;
    var v1196 = v1206 + " ";
    var v1207 = secondA$$1 / markLength;
    var v1197 = JAM.call(v1207.toFixed, v1207, [2], JAM.policy.p9);
    var v1188 = v1196 + v1197;
    var v1178 = v1188 + "\n";
    var v1165 = v1178 + "T";
    var v1166 = JAM.call(markT.substring, markT, [0, secondT$$1], JAM.policy.p13);
    var v1149 = v1165 + v1166;
    var v1131 = v1149 + " ";
    var v1150 = secondT$$1 / markLength;
    var v1132 = JAM.call(v1150.toFixed, v1150, [2], JAM.policy.p9);
    var v1113 = v1131 + v1132;
    var v1094 = v1113 + "\n";
    var v1057 = v1094 + "C";
    var v1058 = JAM.call(markC.substring, markC, [0, secondC$$1], JAM.policy.p13);
    var v986 = v1057 + v1058;
    var v866 = v986 + " ";
    var v987 = secondC$$1 / markLength;
    var v867 = JAM.call(v987.toFixed, v987, [2], JAM.policy.p9);
    var v699 = v866 + v867;
    var v348 = v699 + "\n";
    JAM.call(v347.write, v347, [v348], JAM.policy.p16);
    var v349 = outputWindow.document;
    var v1095 = i$$13 + 1;
    var v1059 = "<b>" + v1095;
    var v988 = v1059 + "_";
    var v868 = v988 + columnSeq;
    var v700 = v868 + "_";
    var v350 = v700 + "third</b>\n";
    JAM.call(v349.write, v349, [v350], JAM.policy.p16);
    var v351 = outputWindow.document;
    var v1243 = JAM.call(markG.substring, markG, [0, thirdG$$1], JAM.policy.p13);
    var v1239 = "g" + v1243;
    var v1233 = v1239 + " ";
    var v1240 = thirdG$$1 / markLength;
    var v1234 = JAM.call(v1240.toFixed, v1240, [2], JAM.policy.p9);
    var v1228 = v1233 + v1234;
    var v1224 = v1228 + "\n";
    var v1218 = v1224 + "a";
    var v1219 = JAM.call(markA.substring, markA, [0, thirdA$$1], JAM.policy.p13);
    var v1208 = v1218 + v1219;
    var v1198 = v1208 + " ";
    var v1209 = thirdA$$1 / markLength;
    var v1199 = JAM.call(v1209.toFixed, v1209, [2], JAM.policy.p9);
    var v1189 = v1198 + v1199;
    var v1179 = v1189 + "\n";
    var v1167 = v1179 + "T";
    var v1168 = JAM.call(markT.substring, markT, [0, thirdT$$1], JAM.policy.p13);
    var v1151 = v1167 + v1168;
    var v1133 = v1151 + " ";
    var v1152 = thirdT$$1 / markLength;
    var v1134 = JAM.call(v1152.toFixed, v1152, [2], JAM.policy.p9);
    var v1114 = v1133 + v1134;
    var v1096 = v1114 + "\n";
    var v1060 = v1096 + "C";
    var v1061 = JAM.call(markC.substring, markC, [0, thirdC$$1], JAM.policy.p13);
    var v989 = v1060 + v1061;
    var v869 = v989 + " ";
    var v990 = thirdC$$1 / markLength;
    var v870 = JAM.call(v990.toFixed, v990, [2], JAM.policy.p9);
    var v701 = v869 + v870;
    var v352 = v701 + "\n";
    JAM.call(v351.write, v351, [v352], JAM.policy.p16);
    var v353 = outputWindow.document;
    JAM.call(v353.write, v353, ["\n"], JAM.policy.p11);
    i$$13++;
    var v871 = sequenceArray$$3[0];
    var v702 = v871.length;
    v354 = i$$13 < v702;
  }
  return;
}
function makeCodonTable(gcgTable) {
  gcgTable = JAM.call(gcgTable.replace, gcgTable, [/[^\.]*\.\./, ""], JAM.policy.p15);
  var tableArray = JAM.call(gcgTable.split, gcgTable, [/[\f\n\r]/], JAM.policy.p17);
  var re$$3 = /(\w+)\s+(\w+)\s+(\S+)\s+(\S+)\s+(\S+)/g;
  var matchArray$$2;
  var codonTable$$4 = new CodonTable;
  var i$$14 = 0;
  var v703 = tableArray.length;
  var v359 = i$$14 < v703;
  for (;v359;) {
    var v704 = tableArray[i$$14];
    var v358 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [v704], JAM.policy.p16);
    for (;v358;) {
      try {
        var v872 = matchArray$$2[1];
        var v705 = v872.toLowerCase();
        var v355 = codonTable$$4[v705];
        var v706 = matchArray$$2[2];
        var v873 = matchArray$$2[3];
        var v707 = parseFloat(v873);
        var v874 = matchArray$$2[4];
        var v708 = parseFloat(v874);
        var v875 = matchArray$$2[5];
        var v709 = parseFloat(v875);
        var v356 = new Codon(v706, v707, v708, v709);
        JAM.call(v355.addCodon, v355, [v356], JAM.policy.p16);
      } catch (e$$7) {
        var v1169 = matchArray$$2[1];
        var v1153 = "There is a problem with a line of the codon table: " + v1169;
        var v1135 = v1153 + " ";
        var v1136 = matchArray$$2[2];
        var v1115 = v1135 + v1136;
        var v1097 = v1115 + " ";
        var v1098 = matchArray$$2[3];
        var v1062 = v1097 + v1098;
        var v991 = v1062 + " ";
        var v992 = matchArray$$2[4];
        var v876 = v991 + v992;
        var v710 = v876 + " ";
        var v711 = matchArray$$2[4];
        var v357 = v710 + v711;
        alert(v357);
        return false;
      }
      var v712 = tableArray[i$$14];
      v358 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [v712], JAM.policy.p16);
    }
    i$$14++;
    var v713 = tableArray.length;
    v359 = i$$14 < v713;
  }
  var v360 = codonTable$$4.a;
  v360.determineBaseFreq();
  var v361 = codonTable$$4.c;
  v361.determineBaseFreq();
  var v362 = codonTable$$4.d;
  v362.determineBaseFreq();
  var v363 = codonTable$$4.e;
  v363.determineBaseFreq();
  var v364 = codonTable$$4.f;
  v364.determineBaseFreq();
  var v365 = codonTable$$4.g;
  v365.determineBaseFreq();
  var v366 = codonTable$$4.h;
  v366.determineBaseFreq();
  var v367 = codonTable$$4.i;
  v367.determineBaseFreq();
  var v368 = codonTable$$4.k;
  v368.determineBaseFreq();
  var v369 = codonTable$$4.l;
  v369.determineBaseFreq();
  var v370 = codonTable$$4.m;
  v370.determineBaseFreq();
  var v371 = codonTable$$4.n;
  v371.determineBaseFreq();
  var v372 = codonTable$$4.p;
  v372.determineBaseFreq();
  var v373 = codonTable$$4.q;
  v373.determineBaseFreq();
  var v374 = codonTable$$4.r;
  v374.determineBaseFreq();
  var v375 = codonTable$$4.s;
  v375.determineBaseFreq();
  var v376 = codonTable$$4.t;
  v376.determineBaseFreq();
  var v377 = codonTable$$4.v;
  v377.determineBaseFreq();
  var v378 = codonTable$$4.w;
  v378.determineBaseFreq();
  var v379 = codonTable$$4.y;
  v379.determineBaseFreq();
  var v380 = codonTable$$4.z;
  v380.determineBaseFreq();
  return codonTable$$4;
}
function CodonTable() {
  var v1255 = new AminoAcid;
  this.a = v1255;
  var v1256 = new AminoAcid;
  this.c = v1256;
  var v1257 = new AminoAcid;
  this.d = v1257;
  var v1258 = new AminoAcid;
  this.e = v1258;
  var v1259 = new AminoAcid;
  this.f = v1259;
  var v1260 = new AminoAcid;
  this.g = v1260;
  var v1261 = new AminoAcid;
  this.h = v1261;
  var v1262 = new AminoAcid;
  this.i = v1262;
  var v1263 = new AminoAcid;
  this.k = v1263;
  var v1264 = new AminoAcid;
  this.l = v1264;
  var v1265 = new AminoAcid;
  this.m = v1265;
  var v1266 = new AminoAcid;
  this.n = v1266;
  var v1267 = new AminoAcid;
  this.p = v1267;
  var v1268 = new AminoAcid;
  this.q = v1268;
  var v1269 = new AminoAcid;
  this.r = v1269;
  var v1270 = new AminoAcid;
  this.s = v1270;
  var v1271 = new AminoAcid;
  this.t = v1271;
  var v1272 = new AminoAcid;
  this.v = v1272;
  var v1273 = new AminoAcid;
  this.w = v1273;
  var v1274 = new AminoAcid;
  this.y = v1274;
  var v1275 = new AminoAcid;
  this.z = v1275;
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
  return;
}
function addCodon(codon$$1) {
  var v381 = this.codons;
  JAM.call(v381.push, v381, [codon$$1], JAM.policy.p16);
  return;
}
function determineBaseFreq() {
  this.fixFraction();
  var i$$15 = 0;
  var v877 = this.codons;
  var v714 = v877.length;
  var v406 = i$$15 < v714;
  for (;v406;) {
    var v1063 = this.codons;
    var v993 = v1063[i$$15];
    var v878 = v993.sequence;
    var v715 = JAM.call(v878.charAt, v878, [0], JAM.policy.p9);
    var v389 = v715 == "g";
    if (v389) {
      var v382 = this.baseFreqPosOne;
      var v879 = this.baseFreqPosOne;
      var v716 = v879[0];
      var v994 = this.codons;
      var v880 = v994[i$$15];
      var v717 = v880.fraction;
      v382[0] = v716 + v717;
    } else {
      var v1064 = this.codons;
      var v995 = v1064[i$$15];
      var v881 = v995.sequence;
      var v718 = JAM.call(v881.charAt, v881, [0], JAM.policy.p9);
      var v388 = v718 == "a";
      if (v388) {
        var v383 = this.baseFreqPosOne;
        var v882 = this.baseFreqPosOne;
        var v719 = v882[1];
        var v996 = this.codons;
        var v883 = v996[i$$15];
        var v720 = v883.fraction;
        v383[1] = v719 + v720;
      } else {
        var v1065 = this.codons;
        var v997 = v1065[i$$15];
        var v884 = v997.sequence;
        var v721 = JAM.call(v884.charAt, v884, [0], JAM.policy.p9);
        var v387 = v721 == "t";
        if (v387) {
          var v384 = this.baseFreqPosOne;
          var v885 = this.baseFreqPosOne;
          var v722 = v885[2];
          var v998 = this.codons;
          var v886 = v998[i$$15];
          var v723 = v886.fraction;
          v384[2] = v722 + v723;
        } else {
          var v1066 = this.codons;
          var v999 = v1066[i$$15];
          var v887 = v999.sequence;
          var v724 = JAM.call(v887.charAt, v887, [0], JAM.policy.p9);
          var v386 = v724 == "c";
          if (v386) {
            var v385 = this.baseFreqPosOne;
            var v888 = this.baseFreqPosOne;
            var v725 = v888[3];
            var v1000 = this.codons;
            var v889 = v1000[i$$15];
            var v726 = v889.fraction;
            v385[3] = v725 + v726;
          }
        }
      }
    }
    var v1067 = this.codons;
    var v1001 = v1067[i$$15];
    var v890 = v1001.sequence;
    var v727 = JAM.call(v890.charAt, v890, [1], JAM.policy.p9);
    var v397 = v727 == "g";
    if (v397) {
      var v390 = this.baseFreqPosTwo;
      var v891 = this.baseFreqPosTwo;
      var v728 = v891[0];
      var v1002 = this.codons;
      var v892 = v1002[i$$15];
      var v729 = v892.fraction;
      v390[0] = v728 + v729;
    } else {
      var v1068 = this.codons;
      var v1003 = v1068[i$$15];
      var v893 = v1003.sequence;
      var v730 = JAM.call(v893.charAt, v893, [1], JAM.policy.p9);
      var v396 = v730 == "a";
      if (v396) {
        var v391 = this.baseFreqPosTwo;
        var v894 = this.baseFreqPosTwo;
        var v731 = v894[1];
        var v1004 = this.codons;
        var v895 = v1004[i$$15];
        var v732 = v895.fraction;
        v391[1] = v731 + v732;
      } else {
        var v1069 = this.codons;
        var v1005 = v1069[i$$15];
        var v896 = v1005.sequence;
        var v733 = JAM.call(v896.charAt, v896, [1], JAM.policy.p9);
        var v395 = v733 == "t";
        if (v395) {
          var v392 = this.baseFreqPosTwo;
          var v897 = this.baseFreqPosTwo;
          var v734 = v897[2];
          var v1006 = this.codons;
          var v898 = v1006[i$$15];
          var v735 = v898.fraction;
          v392[2] = v734 + v735;
        } else {
          var v1070 = this.codons;
          var v1007 = v1070[i$$15];
          var v899 = v1007.sequence;
          var v736 = JAM.call(v899.charAt, v899, [1], JAM.policy.p9);
          var v394 = v736 == "c";
          if (v394) {
            var v393 = this.baseFreqPosTwo;
            var v900 = this.baseFreqPosTwo;
            var v737 = v900[3];
            var v1008 = this.codons;
            var v901 = v1008[i$$15];
            var v738 = v901.fraction;
            v393[3] = v737 + v738;
          }
        }
      }
    }
    var v1071 = this.codons;
    var v1009 = v1071[i$$15];
    var v902 = v1009.sequence;
    var v739 = JAM.call(v902.charAt, v902, [2], JAM.policy.p9);
    var v405 = v739 == "g";
    if (v405) {
      var v398 = this.baseFreqPosThree;
      var v903 = this.baseFreqPosThree;
      var v740 = v903[0];
      var v1010 = this.codons;
      var v904 = v1010[i$$15];
      var v741 = v904.fraction;
      v398[0] = v740 + v741;
    } else {
      var v1072 = this.codons;
      var v1011 = v1072[i$$15];
      var v905 = v1011.sequence;
      var v742 = JAM.call(v905.charAt, v905, [2], JAM.policy.p9);
      var v404 = v742 == "a";
      if (v404) {
        var v399 = this.baseFreqPosThree;
        var v906 = this.baseFreqPosThree;
        var v743 = v906[1];
        var v1012 = this.codons;
        var v907 = v1012[i$$15];
        var v744 = v907.fraction;
        v399[1] = v743 + v744;
      } else {
        var v1073 = this.codons;
        var v1013 = v1073[i$$15];
        var v908 = v1013.sequence;
        var v745 = JAM.call(v908.charAt, v908, [2], JAM.policy.p9);
        var v403 = v745 == "t";
        if (v403) {
          var v400 = this.baseFreqPosThree;
          var v909 = this.baseFreqPosThree;
          var v746 = v909[2];
          var v1014 = this.codons;
          var v910 = v1014[i$$15];
          var v747 = v910.fraction;
          v400[2] = v746 + v747;
        } else {
          var v1074 = this.codons;
          var v1015 = v1074[i$$15];
          var v911 = v1015.sequence;
          var v748 = JAM.call(v911.charAt, v911, [2], JAM.policy.p9);
          var v402 = v748 == "c";
          if (v402) {
            var v401 = this.baseFreqPosThree;
            var v912 = this.baseFreqPosThree;
            var v749 = v912[3];
            var v1016 = this.codons;
            var v913 = v1016[i$$15];
            var v750 = v913.fraction;
            v401[3] = v749 + v750;
          }
        }
      }
    }
    i$$15++;
    var v914 = this.codons;
    var v751 = v914.length;
    v406 = i$$15 < v751;
  }
  return true;
}
function fixFraction() {
  var perThouTotal = 0;
  var i$$16 = 0;
  var v915 = this.codons;
  var v752 = v915.length;
  var v408 = i$$16 < v752;
  for (;v408;) {
    var v916 = this.codons;
    var v753 = v916[i$$16];
    var v407 = v753.perThou;
    perThouTotal = perThouTotal + v407;
    i$$16++;
    var v917 = this.codons;
    var v754 = v917.length;
    v408 = i$$16 < v754;
  }
  var v409 = perThouTotal == 0;
  if (v409) {
    return false;
  }
  i$$16 = 0;
  var v918 = this.codons;
  var v755 = v918.length;
  var v411 = i$$16 < v755;
  for (;v411;) {
    var v756 = this.codons;
    var v410 = v756[i$$16];
    var v1017 = this.codons;
    var v919 = v1017[i$$16];
    var v757 = v919.perThou;
    v410.fraction = v757 / perThouTotal;
    i$$16++;
    var v920 = this.codons;
    var v758 = v920.length;
    v411 = i$$16 < v758;
  }
  return true;
}
function AminoAcid() {
  var v1276 = new Array;
  this.codons = v1276;
  var v1277 = new Array(0, 0, 0, 0);
  this.baseFreqPosOne = v1277;
  var v1278 = new Array(0, 0, 0, 0);
  this.baseFreqPosTwo = v1278;
  var v1279 = new Array(0, 0, 0, 0);
  this.baseFreqPosThree = v1279;
  return;
}
function Codon(sequence$$18, number, perThou, fraction) {
  var v1280 = sequence$$18.toLowerCase();
  this.sequence = v1280;
  this.number = number;
  this.perThou = perThou;
  this.fraction = fraction;
  return;
}
function _getConsensusBase(baseFreq) {
  var g;
  var a;
  var t;
  var c;
  var v759 = baseFreq[0];
  var v412 = v759 > 0;
  if (v412) {
    g = true;
  }
  var v760 = baseFreq[1];
  var v413 = v760 > 0;
  if (v413) {
    a = true;
  }
  var v761 = baseFreq[2];
  var v414 = v761 > 0;
  if (v414) {
    t = true;
  }
  var v762 = baseFreq[3];
  var v415 = v762 > 0;
  if (v415) {
    c = true;
  }
  var v1018 = !g;
  if (v1018) {
    v1018 = !a;
  }
  var v921 = v1018;
  if (v921) {
    v921 = !c;
  }
  var v763 = v921;
  if (v763) {
    v763 = !t;
  }
  var v416 = v763;
  if (v416) {
    return "n";
  }
  var v922 = g && a;
  if (v922) {
    v922 = c;
  }
  var v764 = v922;
  if (v764) {
    v764 = t;
  }
  var v426 = v764;
  if (v426) {
    return "n";
  } else {
    var v765 = a && c;
    if (v765) {
      v765 = t;
    }
    var v425 = v765;
    if (v425) {
      return "h";
    } else {
      var v766 = a && g;
      if (v766) {
        v766 = t;
      }
      var v424 = v766;
      if (v424) {
        return "d";
      } else {
        var v767 = c && g;
        if (v767) {
          v767 = t;
        }
        var v423 = v767;
        if (v423) {
          return "b";
        } else {
          var v422 = a && c;
          if (v422) {
            return "m";
          } else {
            var v421 = g && t;
            if (v421) {
              return "k";
            } else {
              var v420 = a && t;
              if (v420) {
                return "w";
              } else {
                var v419 = g && c;
                if (v419) {
                  return "s";
                } else {
                  var v418 = c && t;
                  if (v418) {
                    return "y";
                  } else {
                    var v417 = a && g;
                    if (v417) {
                      return "r";
                    } else {
                      if (t) {
                        return "t";
                      } else {
                        if (g) {
                          return "g";
                        } else {
                          if (c) {
                            return "c";
                          } else {
                            if (a) {
                              return "a";
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return "?";
}
new AminoAcid;
var v427 = AminoAcid.prototype;
v427.addCodon = addCodon;
var v428 = AminoAcid.prototype;
v428.determineBaseFreq = determineBaseFreq;
var v429 = AminoAcid.prototype;
v429.fixFraction = fixFraction;
JAM.set(document, "onload", v2);
var v430 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11);
JAM.set(v430, "onclick", v3);
var v431 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11);
JAM.set(v431, "onclick", v4)

JAM.stopProfile('load');
