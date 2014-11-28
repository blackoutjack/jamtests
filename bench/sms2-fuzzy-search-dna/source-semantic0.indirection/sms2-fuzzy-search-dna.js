function v4() {
  var v920 = document.forms;
  var v719 = v920[0];
  var v405 = v719.elements;
  var v5 = v405[0];
  v5.value = " ";
  var v921 = document.forms;
  var v720 = v921[0];
  var v406 = v720.elements;
  var v6 = v406[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    fuzzySearchDna(document);
  } catch (e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7);
  }
  return;
}
function v2() {
  var v407 = document.main_form;
  var v8 = v407.main_submit;
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
  var v408 = arrayOfSequences.length;
  var v10 = v408 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v409 = arrayOfTitles.length;
  var v12 = i$$1 < v409;
  for (;v12;) {
    var v1026 = arrayOfTitles[i$$1];
    var v922 = JAM.call(v1026.search, v1026, [/\S/], JAM.policy.p17);
    var v721 = v922 == -1;
    var v924 = !v721;
    if (v924) {
      var v1027 = arrayOfSequences[i$$1];
      var v923 = JAM.call(v1027.search, v1027, [/\S/], JAM.policy.p17);
      v721 = v923 == -1;
    }
    var v410 = v721;
    var v723 = !v410;
    if (v723) {
      var v925 = arrayOfSequences[i$$1];
      var v722 = v925.length;
      v410 = v722 != lengthOfAlign;
    }
    var v11 = v410;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v411 = arrayOfTitles.length;
    v12 = i$$1 < v411;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1083 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17);
  var v1028 = v1083 == -1;
  var v1085 = !v1028;
  if (v1085) {
    var v1084 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17);
    v1028 = v1084 == -1;
  }
  var v926 = v1028;
  var v1030 = !v926;
  if (v1030) {
    var v1029 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17);
    v926 = v1029 == -1;
  }
  var v724 = v926;
  var v928 = !v724;
  if (v928) {
    var v927 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17);
    v724 = v927 == -1;
  }
  var v412 = v724;
  var v726 = !v412;
  if (v726) {
    var v725 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17);
    v412 = v725 == -1;
  }
  var v13 = v412;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v727 = formElement.value;
  var v413 = JAM.call(v727.search, v727, [/\S/], JAM.policy.p17);
  var v14 = v413 == -1;
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
  var v414 = arrayOfPatterns.length;
  var v17 = z$$2 < v414;
  for (;v17;) {
    var v728 = arrayOfPatterns[z$$2];
    var v415 = JAM.call(v728.search, v728, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17);
    var v15 = v415 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v729 = arrayOfPatterns[z$$2];
    var v416 = moreExpressionCheck(v729);
    var v16 = v416 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v417 = arrayOfPatterns.length;
    v17 = z$$2 < v417;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v418 = arrayOfPatterns.length;
  var v23 = j < v418;
  for (;v23;) {
    var v730 = arrayOfPatterns[j];
    var v419 = JAM.call(v730.match, v730, [/\/.+\//], JAM.policy.p17);
    var v20 = v419 + "gi";
    if (JAM.isEval(eval)) {
      var v1202 = eval("introspect(JAM.policy.pFull) { " + v20 + " }")
    } else {
      var v1202 = JAM.call(eval, null, [v20])
    }
    geneticCodeMatchExp[j] = v1202;
    var v420 = arrayOfPatterns[j];
    var v21 = JAM.call(v420.match, v420, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v1203 = v21.toString();
    geneticCodeMatchResult[j] = v1203;
    var v22 = geneticCodeMatchResult[j];
    var v1204 = JAM.call(v22.replace, v22, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v1204;
    j++;
    var v421 = arrayOfPatterns.length;
    v23 = j < v421;
  }
  var i$$2 = 0;
  var v731 = testSequence.length;
  var v422 = v731 - 3;
  var v30 = i$$2 <= v422;
  for (;v30;) {
    var v24 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v24], JAM.policy.p15);
    j = 0;
    var v423 = geneticCodeMatchExp.length;
    var v28 = j < v423;
    for (;v28;) {
      var v732 = geneticCodeMatchExp[j];
      var v424 = JAM.call(codon.search, codon, [v732], JAM.policy.p18);
      var v27 = v424 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v425 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v425 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v426 = geneticCodeMatchExp.length;
      v28 = j < v426;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v733 = testSequence.length;
    var v427 = v733 - 3;
    v30 = i$$2 <= v427;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v428 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v428;
  for (;v32;) {
    var v734 = arrayOfPatterns$$1[z$$3];
    var v429 = JAM.call(v734.search, v734, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17);
    var v31 = v429 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v430 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v430;
  }
  var i$$3 = 0;
  var v431 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v431;
  for (;v36;) {
    var v735 = arrayOfPatterns$$1[i$$3];
    var v432 = "[" + v735;
    var v33 = v432 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v433 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v433;
    for (;v35;) {
      var v736 = arrayOfPatterns$$1[j$$1];
      var v434 = JAM.call(v736.search, v736, [re], JAM.policy.p18);
      var v34 = v434 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v435 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v435;
    }
    i$$3++;
    var v436 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v436;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v437 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v437;
  for (;v39;) {
    var v737 = arrayOfPatterns$$2[z$$4];
    var v438 = JAM.call(v737.search, v737, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17);
    var v37 = v438 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v738 = arrayOfPatterns$$2[z$$4];
    var v439 = moreExpressionCheck(v738);
    var v38 = v439 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v440 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v440;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v929 = getSequenceFromFasta(text$$7);
  var v739 = JAM.call(v929.replace, v929, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v441 = v739.length;
  var v41 = v441 > maxInput;
  if (v41) {
    var v442 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v442 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v443 = text$$8.length;
  var v43 = v443 > maxInput$$1;
  if (v43) {
    var v444 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v444 + " characters.";
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
  JAM.call(v44.write, v44, ["</form>"], JAM.policy.p9);
  return true;
}
function closePre() {
  var v45 = outputWindow.document;
  JAM.call(v45.write, v45, ["</div>"], JAM.policy.p9);
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</pre>\n"], JAM.policy.p9);
  return;
}
function closeTextArea() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</textarea>"], JAM.policy.p9);
  return true;
}
function closeWindow() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</body>\n</html>\n"], JAM.policy.p9);
  outputWindow.status = "Done.";
  var v49 = outputWindow.document;
  v49.close();
  return true;
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
  var v445 = alignArray.length;
  var v50 = v445 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v446 = alignArray.length;
  var v52 = i$$4 < v446;
  for (;v52;) {
    var v740 = alignArray[i$$4];
    var v447 = JAM.call(v740.search, v740, [/[^\s]+\s/], JAM.policy.p17);
    var v51 = v447 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v448 = alignArray.length;
    v52 = i$$4 < v448;
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
  var v449 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v55 = v449 != -1;
  if (v55) {
    var v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p18);
    for (;v54;) {
      var v53 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v53], JAM.policy.p18);
      v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p18);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v450 = sequence$$2.length;
  var v56 = "&gt;results for " + v450;
  var stringToReturn = v56 + " residue sequence ";
  var v451 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p17);
  var v58 = v451 != -1;
  if (v58) {
    var v452 = stringToReturn + '"';
    var v57 = v452 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v453 = stringToReturn + ' starting "';
  var v454 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v59 = v453 + v454;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v455 = sequenceOne.length;
  var v60 = "Search results for " + v455;
  var stringToReturn$$1 = v60 + " residue sequence ";
  var v456 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p17);
  var v62 = v456 != -1;
  if (v62) {
    var v457 = stringToReturn$$1 + '"';
    var v61 = v457 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v458 = stringToReturn$$1 + ' starting "';
  var v459 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v63 = v458 + v459;
  stringToReturn$$1 = v63 + '"\n';
  var v460 = stringToReturn$$1 + "and ";
  var v461 = sequenceTwo.length;
  var v64 = v460 + v461;
  stringToReturn$$1 = v64 + " residue sequence ";
  var v462 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p17);
  var v66 = v462 != -1;
  if (v66) {
    var v463 = stringToReturn$$1 + '"';
    var v65 = v463 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v464 = stringToReturn$$1 + ' starting "';
  var v465 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v67 = v464 + v465;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v466 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v466;
  for (;v71;) {
    var v741 = arrayOfPatterns$$3[j$$2];
    var v467 = JAM.call(v741.match, v741, [/\/.+\//], JAM.policy.p17);
    var v70 = v467 + "gi";
    if (JAM.isEval(eval)) {
      var v1205 = eval("introspect(JAM.policy.pFull) { " + v70 + " }")
    } else {
      var v1205 = JAM.call(eval, null, [v70])
    }
    geneticCodeMatchExp$$1[j$$2] = v1205;
    j$$2++;
    var v468 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v468;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v469 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v469;
  for (;v75;) {
    var v470 = arrayOfPatterns$$4[j$$3];
    var v73 = JAM.call(v470.match, v470, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v1206 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v1206;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v1207 = JAM.call(v74.replace, v74, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v1207;
    j$$3++;
    var v471 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v471;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v472 = sequence$$3.length;
  var v76 = "Results for " + v472;
  var stringToReturn$$2 = v76 + " residue sequence ";
  var v473 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p17);
  var v78 = v473 != -1;
  if (v78) {
    var v474 = stringToReturn$$2 + '"';
    var v77 = v474 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v475 = stringToReturn$$2 + ' starting "';
  var v476 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v79 = v475 + v476;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v742 = "Results for " + topology;
  var v477 = v742 + " ";
  var v478 = sequence$$4.length;
  var v81 = v477 + v478;
  var stringToReturn$$3 = v81 + " residue sequence ";
  var v479 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p17);
  var v83 = v479 != -1;
  if (v83) {
    var v480 = stringToReturn$$3 + '"';
    var v82 = v480 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v481 = stringToReturn$$3 + ' starting "';
  var v482 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v84 = v481 + v482;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v483 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v483;
  var stringToReturn$$4 = v86 + " residue sequence ";
  var v484 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p17);
  var v88 = v484 != -1;
  if (v88) {
    var v485 = stringToReturn$$4 + '"';
    var v87 = v485 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v486 = stringToReturn$$4 + ' starting "';
  var v487 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v89 = v486 + v487;
  stringToReturn$$4 = v89 + '"\n';
  var v488 = stringToReturn$$4 + "and ";
  var v489 = sequenceTwo$$1.length;
  var v90 = v488 + v489;
  stringToReturn$$4 = v90 + " residue sequence ";
  var v490 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p17);
  var v92 = v490 != -1;
  if (v92) {
    var v491 = stringToReturn$$4 + '"';
    var v91 = v491 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v492 = stringToReturn$$4 + ' starting "';
  var v493 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v93 = v492 + v493;
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
    var v494 = Math.random();
    var v495 = components.length;
    var v95 = v494 * v495;
    tempNum = JAM.call(Math.floor, Math, [v95], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p18);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p9);
}
function getSequenceFromFasta(sequenceRecord) {
  var v496 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v97 = v496 != -1;
  if (v97) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v497 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v99 = v497 != -1;
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
  var v1173 = v1180 != -1;
  var v1182 = !v1173;
  if (v1182) {
    var v1181 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17);
    v1173 = v1181 != -1;
  }
  var v1163 = v1173;
  var v1175 = !v1163;
  if (v1175) {
    var v1174 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17);
    v1163 = v1174 != -1;
  }
  var v1152 = v1163;
  var v1165 = !v1152;
  if (v1165) {
    var v1164 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17);
    v1152 = v1164 != -1;
  }
  var v1137 = v1152;
  var v1154 = !v1137;
  if (v1154) {
    var v1153 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17);
    v1137 = v1153 != -1;
  }
  var v1114 = v1137;
  var v1139 = !v1114;
  if (v1139) {
    var v1138 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17);
    v1114 = v1138 != -1;
  }
  var v1086 = v1114;
  var v1116 = !v1086;
  if (v1116) {
    var v1115 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17);
    v1086 = v1115 != -1;
  }
  var v1031 = v1086;
  var v1088 = !v1031;
  if (v1088) {
    var v1087 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17);
    v1031 = v1087 != -1;
  }
  var v930 = v1031;
  var v1033 = !v930;
  if (v1033) {
    var v1032 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17);
    v930 = v1032 != -1;
  }
  var v743 = v930;
  var v932 = !v743;
  if (v932) {
    var v931 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17);
    v743 = v931 != -1;
  }
  var v498 = v743;
  var v745 = !v498;
  if (v745) {
    var v744 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17);
    v498 = v744 != -1;
  }
  var v100 = v498;
  if (v100) {
    return false;
  }
  return true;
}
function openForm() {
  var v101 = outputWindow.document;
  JAM.call(v101.write, v101, ['<form action="">\n'], JAM.policy.p9);
  return true;
}
function openPre() {
  var v102 = outputWindow.document;
  JAM.call(v102.write, v102, ["<pre>"], JAM.policy.p9);
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ['<div class="pre">'], JAM.policy.p9);
  return;
}
function openTextArea() {
  var v104 = outputWindow.document;
  JAM.call(v104.write, v104, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p9);
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v105 = outputWindow.document;
  var v933 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v746 = v933 + "<head>\n";
  var v499 = v746 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v499 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v105.write, v105, [v106], JAM.policy.p18);
  if (isColor) {
    var v107 = outputWindow.document;
    var v1195 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1191 = v1195 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1187 = v1191 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1183 = v1187 + "div.info {font-weight: bold}\n";
    var v1176 = v1183 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1166 = v1176 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1155 = v1166 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1140 = v1155 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1117 = v1140 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1089 = v1117 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1034 = v1089 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v934 = v1034 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v747 = v934 + "td.many {color: #000000}\n";
    var v500 = v747 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v500 + "</style>\n";
    JAM.call(v107.write, v107, [v108], JAM.policy.p18);
  } else {
    var v109 = outputWindow.document;
    var v1199 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1196 = v1199 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1192 = v1196 + "div.title {display: none}\n";
    var v1188 = v1192 + "div.info {font-weight: bold}\n";
    var v1184 = v1188 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1177 = v1184 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1167 = v1177 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1156 = v1167 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1141 = v1156 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1118 = v1141 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1090 = v1118 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1035 = v1090 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v935 = v1035 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v748 = v935 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v501 = v748 + "img {display: none}\n";
    var v110 = v501 + "</style>\n";
    JAM.call(v109.write, v109, [v110], JAM.policy.p18);
  }
  var v111 = outputWindow.document;
  var v936 = "</head>\n" + '<body class="main">\n';
  var v749 = v936 + '<div class="title">';
  var v502 = v749 + title$$6;
  var v112 = v502 + " results</div>\n";
  JAM.call(v111.write, v111, [v112], JAM.policy.p18);
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
  var v113 = outputWindow.document;
  var v937 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v750 = v937 + "<head>\n";
  var v503 = v750 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v503 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v113.write, v113, [v114], JAM.policy.p18);
  if (isBackground) {
    var v115 = outputWindow.document;
    var v1197 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1193 = v1197 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1189 = v1193 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1185 = v1189 + "div.info {font-weight: bold}\n";
    var v1178 = v1185 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1168 = v1178 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1157 = v1168 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1142 = v1157 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1119 = v1142 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1091 = v1119 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1036 = v1091 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v938 = v1036 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v751 = v938 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v504 = v751 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v504 + "</style>\n";
    JAM.call(v115.write, v115, [v116], JAM.policy.p18);
  } else {
    var v117 = outputWindow.document;
    var v1201 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1200 = v1201 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1198 = v1200 + "div.title {display: none}\n";
    var v1194 = v1198 + "div.info {font-weight: bold}\n";
    var v1190 = v1194 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1186 = v1190 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1179 = v1186 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1169 = v1179 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1158 = v1169 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1143 = v1158 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1120 = v1143 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1092 = v1120 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1037 = v1092 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v939 = v1037 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v752 = v939 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v505 = v752 + "img {display: none}\n";
    var v118 = v505 + "</style>\n";
    JAM.call(v117.write, v117, [v118], JAM.policy.p18);
  }
  var v119 = outputWindow.document;
  var v940 = "</head>\n" + '<body class="main">\n';
  var v753 = v940 + '<div class="title">';
  var v506 = v753 + title$$8;
  var v120 = v506 + " results</div>\n";
  JAM.call(v119.write, v119, [v120], JAM.policy.p18);
  outputWindow.status = "Please Wait.";
  return true;
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
  var v507 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p17);
  var v121 = v507 != -1;
  if (v121) {
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p18);
  var v508 = testArray[0];
  var v125 = v508 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v509 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p18);
  var v126 = v509 == -1;
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
  var v510 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p12);
  var v129 = v510 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v511 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p12);
  var v130 = v511 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v512 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p17);
  var v131 = v512 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v1038 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17);
  var v941 = v1038 == -1;
  var v1040 = !v941;
  if (v1040) {
    var v1039 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17);
    v941 = v1039 == -1;
  }
  var v754 = v941;
  var v943 = !v754;
  if (v943) {
    var v942 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17);
    v754 = v942 == -1;
  }
  var v513 = v754;
  var v756 = !v513;
  if (v756) {
    var v755 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17);
    v513 = v755 == -1;
  }
  var v132 = v513;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v514 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p17);
  var v133 = v514 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v515 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v515 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v516 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p17);
  var v136 = v516 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v517 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p17);
  var v137 = v517 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v1041 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17);
  var v944 = v1041 == -1;
  var v1043 = !v944;
  if (v1043) {
    var v1042 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17);
    v944 = v1042 == -1;
  }
  var v757 = v944;
  var v946 = !v757;
  if (v946) {
    var v945 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17);
    v757 = v945 == -1;
  }
  var v518 = v757;
  var v759 = !v518;
  if (v759) {
    var v758 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17);
    v518 = v758 == -1;
  }
  var v138 = v518;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1044 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17);
  var v947 = v1044 == -1;
  var v1046 = !v947;
  if (v1046) {
    var v1045 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17);
    v947 = v1045 == -1;
  }
  var v760 = v947;
  var v949 = !v760;
  if (v949) {
    var v948 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17);
    v760 = v948 == -1;
  }
  var v519 = v760;
  var v762 = !v519;
  if (v762) {
    var v761 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17);
    v519 = v761 == -1;
  }
  var v139 = v519;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v520 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p17);
  var v140 = v520 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v1047 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17);
  var v950 = v1047 == -1;
  var v1049 = !v950;
  if (v1049) {
    var v1048 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17);
    v950 = v1048 == -1;
  }
  var v763 = v950;
  var v952 = !v763;
  if (v952) {
    var v951 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17);
    v763 = v951 == -1;
  }
  var v521 = v763;
  var v765 = !v521;
  if (v765) {
    var v764 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17);
    v521 = v764 == -1;
  }
  var v141 = v521;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v522 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p17);
  var v142 = v522 == -1;
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
    var v523 = basePerLine / groupSize;
    var v146 = j$$6 <= v523;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v524 = k + i$$5;
        var v144 = JAM.call(text$$10.charAt, text$$10, [v524], JAM.policy.p18);
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v525 = basePerLine / groupSize;
      v146 = j$$6 <= v525;
    }
    var v147 = outputWindow.document;
    var v148 = lineOfText + "\n";
    JAM.call(v147.write, v147, [v148], JAM.policy.p18);
    lineOfText = "";
    v149 = i$$5 < stopBase;
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
    var v526 = adjustment < 0;
    if (v526) {
      v526 = adjusted >= 0;
    }
    var v150 = v526;
    if (v150) {
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
  var v183 = i$$6 < stopBase$$2;
  for (;v183;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v527 = basePerLine$$2 / groupSize$$2;
    var v159 = j$$7 <= v527;
    for (;v159;) {
      var v154 = k$$1 < groupSize$$2;
      for (;v154;) {
        var v528 = i$$6 + k$$1;
        var v151 = v528 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v152 = lineOfText$$1;
        var v529 = k$$1 + i$$6;
        var v153 = JAM.call(text$$12.charAt, text$$12, [v529], JAM.policy.p18);
        lineOfText$$1 = v152 + v153;
        k$$1 = k$$1 + 1;
        v154 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v157 = numberPosition$$1 == "above";
      if (v157) {
        var v155 = aboveNum;
        var v530 = adjustNumbering(i$$6, numberingAdjustment);
        var v156 = rightNum(v530, "", groupSize$$2, tabIn$$3);
        aboveNum = v155 + v156;
      }
      var v158 = i$$6 >= stopBase$$2;
      if (v158) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v531 = basePerLine$$2 / groupSize$$2;
      v159 = j$$7 <= v531;
    }
    var v182 = numberPosition$$1 == "left";
    if (v182) {
      var v160 = outputWindow.document;
      var v953 = adjustNumbering(lineNum, numberingAdjustment);
      var v766 = rightNum(v953, "", 8, tabIn$$3);
      var v532 = v766 + lineOfText$$1;
      var v161 = v532 + "\n";
      JAM.call(v160.write, v160, [v161], JAM.policy.p18);
      var v165 = strands$$1 == "two";
      if (v165) {
        var v162 = outputWindow.document;
        var v954 = adjustNumbering(lineNum, numberingAdjustment);
        var v767 = rightNum(v954, "", 8, tabIn$$3);
        var v768 = complement(lineOfText$$1);
        var v533 = v767 + v768;
        var v163 = v533 + "\n";
        JAM.call(v162.write, v162, [v163], JAM.policy.p18);
        var v164 = outputWindow.document;
        JAM.call(v164.write, v164, ["\n"], JAM.policy.p9);
      }
    } else {
      var v181 = numberPosition$$1 == "right";
      if (v181) {
        var v166 = outputWindow.document;
        var v769 = lineOfText$$1;
        var v770 = adjustNumbering(i$$6, numberingAdjustment);
        var v534 = v769 + v770;
        var v167 = v534 + "\n";
        JAM.call(v166.write, v166, [v167], JAM.policy.p18);
        var v171 = strands$$1 == "two";
        if (v171) {
          var v168 = outputWindow.document;
          var v771 = complement(lineOfText$$1);
          var v772 = adjustNumbering(i$$6, numberingAdjustment);
          var v535 = v771 + v772;
          var v169 = v535 + "\n";
          JAM.call(v168.write, v168, [v169], JAM.policy.p18);
          var v170 = outputWindow.document;
          JAM.call(v170.write, v170, ["\n"], JAM.policy.p9);
        }
      } else {
        var v180 = numberPosition$$1 == "above";
        if (v180) {
          var v172 = outputWindow.document;
          var v173 = aboveNum + "\n";
          JAM.call(v172.write, v172, [v173], JAM.policy.p18);
          var v174 = outputWindow.document;
          var v175 = lineOfText$$1 + "\n";
          JAM.call(v174.write, v174, [v175], JAM.policy.p18);
          var v179 = strands$$1 == "two";
          if (v179) {
            var v176 = outputWindow.document;
            var v536 = complement(lineOfText$$1);
            var v177 = v536 + "\n";
            JAM.call(v176.write, v176, [v177], JAM.policy.p18);
            var v178 = outputWindow.document;
            JAM.call(v178.write, v178, ["\n"], JAM.policy.p9);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v183 = i$$6 < stopBase$$2;
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
  var v202 = i$$7 < stopBase$$3;
  for (;v202;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v537 = basePerLine$$3 / groupSize$$3;
    var v190 = j$$8 <= v537;
    for (;v190;) {
      var v186 = k$$2 < groupSize$$3;
      for (;v186;) {
        var v538 = i$$7 + k$$2;
        var v184 = v538 >= stopBase$$3;
        if (v184) {
          break;
        }
        var v539 = k$$2 + i$$7;
        var v185 = JAM.call(text$$13.charAt, text$$13, [v539], JAM.policy.p18);
        lineOfText$$2 = lineOfText$$2 + v185;
        k$$2 = k$$2 + 1;
        v186 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v188 = numberPosition$$2 == "above";
      if (v188) {
        var v187 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v187;
      }
      var v189 = i$$7 >= stopBase$$3;
      if (v189) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v540 = basePerLine$$3 / groupSize$$3;
      v190 = j$$8 <= v540;
    }
    var v201 = numberPosition$$2 == "left";
    if (v201) {
      var v191 = outputWindow.document;
      var v773 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v541 = v773 + lineOfText$$2;
      var v192 = v541 + "\n";
      JAM.call(v191.write, v191, [v192], JAM.policy.p18);
    } else {
      var v200 = numberPosition$$2 == "right";
      if (v200) {
        var v193 = outputWindow.document;
        var v542 = lineOfText$$2 + i$$7;
        var v194 = v542 + "\n";
        JAM.call(v193.write, v193, [v194], JAM.policy.p18);
      } else {
        var v199 = numberPosition$$2 == "above";
        if (v199) {
          var v195 = outputWindow.document;
          var v196 = aboveNum$$1 + "\n";
          JAM.call(v195.write, v195, [v196], JAM.policy.p18);
          var v197 = outputWindow.document;
          var v198 = lineOfText$$2 + "\n";
          JAM.call(v197.write, v197, [v198], JAM.policy.p18);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v202 = i$$7 < stopBase$$3;
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
  var v955 = sequence$$13.length;
  var v774 = v955 <= firstIndexToMutate;
  var v956 = !v774;
  if (v956) {
    v774 = lastIndexToMutate < 0;
  }
  var v543 = v774;
  var v775 = !v543;
  if (v775) {
    v543 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v203 = v543;
  if (v203) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v211 = i$$8 < numMut;
  for (;v211;) {
    maxNum = sequence$$13.length;
    var v544 = Math.random();
    var v204 = v544 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v204], JAM.policy.p17);
    var v545 = randNum < firstIndexToMutate;
    var v776 = !v545;
    if (v776) {
      v545 = randNum > lastIndexToMutate;
    }
    var v205 = v545;
    if (v205) {
      numMut++;
      i$$8++;
      v211 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p17);
    needNewChar = true;
    for (;needNewChar;) {
      var v546 = Math.random();
      var v547 = components$$1.length;
      var v206 = v546 * v547;
      componentsIndex = JAM.call(Math.round, Math, [v206], JAM.policy.p17);
      var v548 = components$$1.length;
      var v207 = componentsIndex == v548;
      if (v207) {
        componentsIndex = 0;
      }
      var v549 = components$$1[componentsIndex];
      var v208 = v549 != currentChar;
      if (v208) {
        needNewChar = false;
      }
    }
    var v550 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v551 = components$$1[componentsIndex];
    var v209 = v550 + v551;
    var v552 = randNum + 1;
    var v553 = sequence$$13.length;
    var v210 = JAM.call(sequence$$13.substring, sequence$$13, [v552, v553], JAM.policy.p27);
    sequence$$13 = v209 + v210;
    i$$8++;
    v211 = i$$8 < numMut;
  }
  var v212 = outputWindow.document;
  var v213 = addReturns(sequence$$13);
  JAM.call(v212.write, v212, [v213], JAM.policy.p18);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v218 = j$$9 < lengthOut$$1;
  for (;v218;) {
    var v554 = Math.random();
    var v555 = components$$2.length;
    var v214 = v554 * v555;
    tempNum$$1 = JAM.call(Math.floor, Math, [v214], JAM.policy.p17);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v556 = sequence$$14.length;
    var v217 = v556 == 60;
    if (v217) {
      var v215 = outputWindow.document;
      var v216 = sequence$$14 + "\n";
      JAM.call(v215.write, v215, [v216], JAM.policy.p18);
      sequence$$14 = "";
    }
    j$$9++;
    v218 = j$$9 < lengthOut$$1;
  }
  var v219 = outputWindow.document;
  var v220 = sequence$$14 + "\n";
  JAM.call(v219.write, v219, [v220], JAM.policy.p18);
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
  var v224 = dnaConformation == "circular";
  if (v224) {
    var v221 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v221.length;
    var v957 = sequence$$15.length;
    var v777 = v957 - lookAhead;
    var v778 = sequence$$15.length;
    var v557 = JAM.call(sequence$$15.substring, sequence$$15, [v777, v778], JAM.policy.p27);
    var v222 = v557 + sequence$$15;
    var v223 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v222 + v223;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v225 = outputWindow.document;
  JAM.call(v225.write, v225, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v226 = outputWindow.document;
  var v958 = '<tr><td class="title" width="200px">' + "Site:";
  var v779 = v958 + '</td><td class="title">';
  var v558 = v779 + "Positions:";
  var v227 = v558 + "</td></tr>\n";
  JAM.call(v226.write, v226, [v227], JAM.policy.p18);
  var i$$9 = 0;
  var v559 = arrayOfItems.length;
  var v243 = i$$9 < v559;
  for (;v243;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v560 = arrayOfItems[i$$9];
    var v228 = JAM.call(v560.match, v560, [/\/.+\//], JAM.policy.p17);
    matchExp = v228 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v959 = arrayOfItems[i$$9];
    var v780 = JAM.call(v959.match, v959, [/\)\D*\d+/], JAM.policy.p17);
    var v561 = v780.toString();
    var v229 = JAM.call(v561.replace, v561, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v229);
    var v235 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p18);
    for (;v235;) {
      var v230 = matchExp.lastIndex;
      matchPosition = v230 - cutDistance;
      var v562 = matchPosition >= lowerLimit;
      if (v562) {
        v562 = matchPosition < upperLimit;
      }
      var v233 = v562;
      if (v233) {
        timesFound++;
        var v231 = tempString$$1 + ", ";
        var v563 = matchPosition - shiftValue;
        var v232 = v563 + 1;
        tempString$$1 = v231 + v232;
      }
      var v564 = matchExp.lastIndex;
      var v781 = RegExp.lastMatch;
      var v565 = v781.length;
      var v234 = v564 - v565;
      matchExp.lastIndex = v234 + 1;
      v235 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p18);
    }
    var v566 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p17);
    var v236 = v566 != -1;
    if (v236) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p15);
    }
    var v240 = timesFound == 0;
    if (v240) {
      backGroundClass = "none";
    } else {
      var v239 = timesFound == 1;
      if (v239) {
        backGroundClass = "one";
      } else {
        var v238 = timesFound == 2;
        if (v238) {
          backGroundClass = "two";
        } else {
          var v237 = timesFound == 3;
          if (v237) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v241 = outputWindow.document;
    var v1144 = '<tr><td class="' + backGroundClass;
    var v1121 = v1144 + '">';
    var v1170 = arrayOfItems[i$$9];
    var v1159 = JAM.call(v1170.match, v1170, [/\([^\(]+\)/], JAM.policy.p17);
    var v1145 = v1159.toString();
    var v1122 = JAM.call(v1145.replace, v1145, [/\(|\)/g, ""], JAM.policy.p15);
    var v1093 = v1121 + v1122;
    var v1050 = v1093 + '</td><td class="';
    var v960 = v1050 + backGroundClass;
    var v782 = v960 + '">';
    var v567 = v782 + tempString$$1;
    var v242 = v567 + "</td></tr>\n";
    JAM.call(v241.write, v241, [v242], JAM.policy.p18);
    timesFound = 0;
    i$$9++;
    var v568 = arrayOfItems.length;
    v243 = i$$9 < v568;
  }
  var v244 = outputWindow.document;
  JAM.call(v244.write, v244, ["</tbody></table>\n"], JAM.policy.p9);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v245 = outputWindow.document;
  JAM.call(v245.write, v245, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v246 = outputWindow.document;
  var v1094 = '<tr><td class="title">' + "Pattern:";
  var v1051 = v1094 + '</td><td class="title">';
  var v961 = v1051 + "Times found:";
  var v783 = v961 + '</td><td class="title">';
  var v569 = v783 + "Percentage:";
  var v247 = v569 + "</td></tr>\n";
  JAM.call(v246.write, v246, [v247], JAM.policy.p18);
  var i$$10 = 0;
  var v570 = arrayOfItems$$1.length;
  var v256 = i$$10 < v570;
  for (;v256;) {
    var tempNumber = 0;
    var v571 = arrayOfItems$$1[i$$10];
    var v248 = JAM.call(v571.match, v571, [/\/[^\/]+\//], JAM.policy.p17);
    var matchExp$$1 = v248 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v572 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p18);
    var v250 = v572 != -1;
    if (v250) {
      var v249 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p18);
      tempNumber = v249.length;
    }
    var percentage = 0;
    var v784 = originalLength + 1;
    var v1052 = arrayOfItems$$1[i$$10];
    var v962 = JAM.call(v1052.match, v1052, [/\d+/], JAM.policy.p17);
    var v785 = parseFloat(v962);
    var v573 = v784 - v785;
    var v253 = v573 > 0;
    if (v253) {
      var v251 = 100 * tempNumber;
      var v574 = originalLength + 1;
      var v963 = arrayOfItems$$1[i$$10];
      var v786 = JAM.call(v963.match, v963, [/\d+/], JAM.policy.p17);
      var v575 = parseFloat(v786);
      var v252 = v574 - v575;
      percentage = v251 / v252;
    }
    var v254 = outputWindow.document;
    var v1171 = arrayOfItems$$1[i$$10];
    var v1160 = JAM.call(v1171.match, v1171, [/\([^\(]+\)\b/], JAM.policy.p17);
    var v1146 = v1160.toString();
    var v1123 = JAM.call(v1146.replace, v1146, [/\(|\)/g, ""], JAM.policy.p15);
    var v1095 = "<tr><td>" + v1123;
    var v1053 = v1095 + "</td><td>";
    var v964 = v1053 + tempNumber;
    var v787 = v964 + "</td><td>";
    var v788 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p12);
    var v576 = v787 + v788;
    var v255 = v576 + "</td></tr>\n";
    JAM.call(v254.write, v254, [v255], JAM.policy.p18);
    i$$10++;
    var v577 = arrayOfItems$$1.length;
    v256 = i$$10 < v577;
  }
  var v257 = outputWindow.document;
  JAM.call(v257.write, v257, ["</tbody></table>\n"], JAM.policy.p9);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v578 = sequence$$17.length;
  var v264 = v578 > 0;
  for (;v264;) {
    maxNum$$1 = sequence$$17.length;
    var v579 = Math.random();
    var v258 = v579 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v258], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v259 = randNum$$1 + 1;
    var v260 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v259, v260], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v580 = tempSeq.length;
    var v263 = v580 == 60;
    if (v263) {
      var v261 = outputWindow.document;
      var v262 = tempSeq + "\n";
      JAM.call(v261.write, v261, [v262], JAM.policy.p18);
      tempSeq = "";
    }
    var v581 = sequence$$17.length;
    v264 = v581 > 0;
  }
  var v265 = outputWindow.document;
  var v266 = tempSeq + "\n";
  JAM.call(v265.write, v265, [v266], JAM.policy.p18);
  return true;
}
function fuzzySearchDna(theDocument) {
  var targetSequence = "";
  var targetTitle = "";
  var querySequence = "";
  var queryTitle = "";
  var maxTarget = 2E3;
  var maxQuery = 30;
  var v582 = testScript();
  var v267 = v582 == false;
  if (v267) {
    return false;
  }
  var v1161 = theDocument.forms;
  var v1147 = v1161[0];
  var v1124 = v1147.elements;
  var v1096 = v1124[0];
  var v1054 = checkFormElement(v1096);
  var v965 = v1054 == false;
  var v1056 = !v965;
  if (v1056) {
    var v1172 = theDocument.forms;
    var v1162 = v1172[0];
    var v1148 = v1162.elements;
    var v1125 = v1148[0];
    var v1097 = v1125.value;
    var v1055 = checkSequenceLength(v1097, maxTarget);
    v965 = v1055 == false;
  }
  var v789 = v965;
  var v967 = !v789;
  if (v967) {
    var v1149 = theDocument.forms;
    var v1126 = v1149[0];
    var v1098 = v1126.elements;
    var v1057 = v1098[1];
    var v966 = checkFormElement(v1057);
    v789 = v966 == false;
  }
  var v583 = v789;
  var v791 = !v583;
  if (v791) {
    var v1150 = theDocument.forms;
    var v1127 = v1150[0];
    var v1099 = v1127.elements;
    var v1058 = v1099[1];
    var v968 = v1058.value;
    var v790 = checkSequenceLength(v968, maxQuery);
    v583 = v790 == false;
  }
  var v268 = v583;
  if (v268) {
    return false;
  }
  var v1128 = theDocument.forms;
  var v1100 = v1128[0];
  var v1059 = v1100.elements;
  var v969 = v1059[5];
  var v792 = v969.options;
  var v1129 = theDocument.forms;
  var v1101 = v1129[0];
  var v1060 = v1101.elements;
  var v970 = v1060[5];
  var v793 = v970.selectedIndex;
  var v584 = v792[v793];
  var v269 = v584.value;
  var MATCH_SCORE = parseInt(v269);
  var v1130 = theDocument.forms;
  var v1102 = v1130[0];
  var v1061 = v1102.elements;
  var v971 = v1061[6];
  var v794 = v971.options;
  var v1131 = theDocument.forms;
  var v1103 = v1131[0];
  var v1062 = v1103.elements;
  var v972 = v1062[6];
  var v795 = v972.selectedIndex;
  var v585 = v794[v795];
  var v270 = v585.value;
  var MISMATCH_SCORE = parseInt(v270);
  var v1132 = theDocument.forms;
  var v1104 = v1132[0];
  var v1063 = v1104.elements;
  var v973 = v1063[7];
  var v796 = v973.options;
  var v1133 = theDocument.forms;
  var v1105 = v1133[0];
  var v1064 = v1105.elements;
  var v974 = v1064[7];
  var v797 = v974.selectedIndex;
  var v586 = v796[v797];
  var v271 = v586.value;
  var GAP_PENALTY = parseInt(v271);
  var v1134 = theDocument.forms;
  var v1106 = v1134[0];
  var v1065 = v1106.elements;
  var v975 = v1065[8];
  var v798 = v975.options;
  var v1135 = theDocument.forms;
  var v1107 = v1135[0];
  var v1066 = v1107.elements;
  var v976 = v1066[8];
  var v799 = v976.selectedIndex;
  var v587 = v798[v799];
  var v272 = v587.value;
  var HITS = parseInt(v272);
  openWindow("Fuzzy Search DNA");
  openPre();
  var v1067 = theDocument.forms;
  var v977 = v1067[0];
  var v800 = v977.elements;
  var v588 = v800[0];
  var v273 = v588.value;
  targetSequence = getSequenceFromFasta(v273);
  targetSequence = removeNonDna(targetSequence);
  var v1068 = theDocument.forms;
  var v978 = v1068[0];
  var v801 = v978.elements;
  var v589 = v801[0];
  var v274 = v589.value;
  targetTitle = getTitleFromFasta(v274);
  var v1069 = theDocument.forms;
  var v979 = v1069[0];
  var v802 = v979.elements;
  var v590 = v802[1];
  var v275 = v590.value;
  querySequence = getSequenceFromFasta(v275);
  querySequence = removeNonDna(querySequence);
  queryTitle = "query";
  var v276 = outputWindow.document;
  var v277 = getFuzzySearchTitle(targetTitle, targetSequence, queryTitle, querySequence);
  JAM.call(v276.write, v276, [v277], JAM.policy.p18);
  var v591 = JAM.call(targetSequence.search, targetSequence, [/./], JAM.policy.p17);
  var v278 = v591 != -1;
  if (v278) {
    targetSequence = JAM.call(targetSequence.match, targetSequence, [/./g], JAM.policy.p17);
  }
  var v592 = JAM.call(querySequence.search, querySequence, [/./], JAM.policy.p17);
  var v279 = v592 != -1;
  if (v279) {
    querySequence = JAM.call(querySequence.match, querySequence, [/./g], JAM.policy.p17);
  }
  var v593 = targetSequence.length;
  var v280 = v593 == 0;
  if (v280) {
    alert("The sequence contains no DNA bases.");
    return false;
  }
  var v594 = querySequence.length;
  var v281 = v594 == 0;
  if (v281) {
    alert("The query sequence contains no DNA bases.");
    return false;
  }
  _fuzzySearchDna(queryTitle, querySequence, targetTitle, targetSequence, MATCH_SCORE, MISMATCH_SCORE, GAP_PENALTY, HITS);
  closePre();
  closeWindow();
  return true;
}
function _fuzzySearchDna(queryTitle$$1, querySequence$$1, targetTitle$$1, targetSequence$$1, matchScore, mismatchScore, gapPenalty, hits) {
  var matrix = new Identity;
  JAM.call(matrix.setMatch, matrix, [matchScore], JAM.policy.p18);
  JAM.call(matrix.setMismatch, matrix, [mismatchScore], JAM.policy.p18);
  var scoreSet = new ScoreSet;
  JAM.call(scoreSet.setScoreSetParam, scoreSet, [matrix, gapPenalty, hits], JAM.policy.p27);
  var fuzzySearch = new FuzzySearch;
  JAM.call(fuzzySearch.initializeMatrix, fuzzySearch, [querySequence$$1, targetSequence$$1, scoreSet], JAM.policy.p27);
  fuzzySearch.search();
  hits = fuzzySearch.getHits();
  var v595 = hits.length;
  var v294 = v595 > 0;
  if (v294) {
    var i$$11 = 0;
    var v596 = hits.length;
    var v292 = i$$11 < v596;
    for (;v292;) {
      var v282 = outputWindow.document;
      var v1108 = ">" + queryTitle$$1;
      var v1070 = v1108 + " from ";
      var v1109 = hits[i$$11];
      var v1071 = v1109.startM;
      var v980 = v1070 + v1071;
      var v803 = v980 + " to ";
      var v981 = hits[i$$11];
      var v804 = v981.endM;
      var v597 = v803 + v804;
      var v283 = v597 + "\n";
      JAM.call(v282.write, v282, [v283], JAM.policy.p18);
      var v284 = outputWindow.document;
      var v805 = hits[i$$11];
      var v598 = v805.sequenceM;
      var v285 = v598 + "\n";
      JAM.call(v284.write, v284, [v285], JAM.policy.p18);
      var v286 = outputWindow.document;
      var v1110 = ">" + targetTitle$$1;
      var v1072 = v1110 + " from ";
      var v1111 = hits[i$$11];
      var v1073 = v1111.startN;
      var v982 = v1072 + v1073;
      var v806 = v982 + " to ";
      var v983 = hits[i$$11];
      var v807 = v983.endN;
      var v599 = v806 + v807;
      var v287 = v599 + "\n";
      JAM.call(v286.write, v286, [v287], JAM.policy.p18);
      var v288 = outputWindow.document;
      var v808 = hits[i$$11];
      var v600 = v808.sequenceN;
      var v289 = v600 + "\n";
      JAM.call(v288.write, v288, [v289], JAM.policy.p18);
      var v290 = outputWindow.document;
      var v984 = hits[i$$11];
      var v809 = v984.score;
      var v601 = "Score: " + v809;
      var v291 = v601 + "\n\n";
      JAM.call(v290.write, v290, [v291], JAM.policy.p18);
      i$$11++;
      var v602 = hits.length;
      v292 = i$$11 < v602;
    }
  } else {
    var v293 = outputWindow.document;
    JAM.call(v293.write, v293, ["No hits were obtained.\n\n"], JAM.policy.p9);
  }
  return;
}
function getScore(r1$$1, r2) {
  var v295 = this.scoringMatrix;
  return JAM.call(v295.scoringMatrix_getScore, v295, [r1$$1, r2], JAM.policy.p27);
}
function setScoreSetParam(scoringMatrix, gapPenalty$$1, hits$$1) {
  this.scoringMatrix = scoringMatrix;
  this.gap = gapPenalty$$1;
  this.hits = hits$$1;
  return;
}
function ScoreSet() {
  return;
}
function scoringMatrix_getScore(r1$$2, r2$$1) {
  r1$$2 = r1$$2.toLowerCase();
  r2$$1 = r2$$1.toLowerCase();
  var v296 = r1$$2 == r2$$1;
  if (v296) {
    return this.match;
  } else {
    return this.mismatch;
  }
  return;
}
function ScoringMatrix() {
  return;
}
function setMismatch(mismatchScore$$1) {
  this.mismatch = mismatchScore$$1;
  return;
}
function setMatch(matchScore$$1) {
  this.match = matchScore$$1;
  return;
}
function Identity() {
  return;
}
function Node() {
  this.alreadyMatched = false;
  return;
}
function initializeMatrix(sequenceOne$$2, sequenceTwo$$2, scoreSet$$1) {
  this.scoreSet = scoreSet$$1;
  this.M = sequenceOne$$2;
  this.N = sequenceTwo$$2;
  this.score = 0;
  var v810 = this.M;
  var v603 = v810.length;
  var v297 = v603 + 1;
  var v1208 = new Array(v297);
  this.nodes = v1208;
  var i$$12 = 0;
  var v811 = this.nodes;
  var v604 = v811.length;
  var v301 = i$$12 < v604;
  for (;v301;) {
    var v298 = this.nodes;
    var v985 = this.N;
    var v812 = v985.length;
    var v605 = v812 + 1;
    var v1209 = new Array(v605);
    v298[i$$12] = v1209;
    var j$$10 = 0;
    var v986 = this.nodes;
    var v813 = v986[i$$12];
    var v606 = v813.length;
    var v300 = j$$10 < v606;
    for (;v300;) {
      var v607 = this.nodes;
      var v299 = v607[i$$12];
      var v1210 = new Node;
      v299[j$$10] = v1210;
      j$$10++;
      var v987 = this.nodes;
      var v814 = v987[i$$12];
      var v608 = v814.length;
      v300 = j$$10 < v608;
    }
    i$$12++;
    var v815 = this.nodes;
    var v609 = v815.length;
    v301 = i$$12 < v609;
  }
  var v816 = this.nodes;
  var v610 = v816[0];
  var v302 = v610[0];
  v302.value = 0;
  i$$12 = 1;
  var v817 = this.nodes;
  var v611 = v817.length;
  var v306 = i$$12 < v611;
  for (;v306;) {
    var v818 = this.nodes;
    var v612 = v818[i$$12];
    var v303 = v612[0];
    var v988 = this.nodes;
    var v989 = i$$12 - 1;
    var v819 = v988[v989];
    var v613 = v819[0];
    v303.value = v613.value;
    var v820 = this.nodes;
    var v614 = v820[i$$12];
    var v304 = v614[0];
    v304.tracebackI = i$$12 - 1;
    var v821 = this.nodes;
    var v615 = v821[i$$12];
    var v305 = v615[0];
    v305.tracebackJ = 0;
    i$$12++;
    var v822 = this.nodes;
    var v616 = v822.length;
    v306 = i$$12 < v616;
  }
  j$$10 = 1;
  var v990 = this.nodes;
  var v823 = v990[0];
  var v617 = v823.length;
  var v310 = j$$10 < v617;
  for (;v310;) {
    var v824 = this.nodes;
    var v618 = v824[0];
    var v307 = v618[j$$10];
    var v991 = this.nodes;
    var v825 = v991[0];
    var v826 = j$$10 - 1;
    var v619 = v825[v826];
    v307.value = v619.value;
    var v827 = this.nodes;
    var v620 = v827[0];
    var v308 = v620[j$$10];
    v308.tracebackI = 0;
    var v828 = this.nodes;
    var v621 = v828[0];
    var v309 = v621[j$$10];
    v309.tracebackJ = j$$10 - 1;
    j$$10++;
    var v992 = this.nodes;
    var v829 = v992[0];
    var v622 = v829.length;
    v310 = j$$10 < v622;
  }
  return;
}
function dumpMatrix() {
  var v311 = outputWindow.document;
  var v1074 = this.nodes;
  var v993 = v1074.length;
  var v830 = "Dynamic programming matrix i=" + v993;
  var v623 = v830 + " and j=";
  var v994 = this.nodes;
  var v831 = v994[0];
  var v624 = v831.length;
  var v312 = v623 + v624;
  JAM.call(v311.write, v311, [v312], JAM.policy.p18);
  var v313 = outputWindow.document;
  JAM.call(v313.write, v313, ["\n"], JAM.policy.p9);
  var i$$13 = 0;
  var v832 = this.nodes;
  var v625 = v832.length;
  var v324 = i$$13 < v625;
  for (;v324;) {
    var j$$11 = 0;
    var v995 = this.nodes;
    var v833 = v995[i$$13];
    var v626 = v833.length;
    var v322 = j$$11 < v626;
    for (;v322;) {
      var v834 = this.nodes;
      var v627 = v834[i$$13];
      var v314 = v627[j$$11];
      var traceI = v314.tracebackI;
      var v835 = this.nodes;
      var v628 = v835[i$$13];
      var v315 = v628[j$$11];
      var traceJ = v315.tracebackJ;
      var v316 = traceI == undefined;
      if (v316) {
        traceI = "u";
      }
      var v317 = traceJ == undefined;
      if (v317) {
        traceJ = "u";
      }
      var v1151 = "(" + i$$13;
      var v1136 = v1151 + ",";
      var v1112 = v1136 + j$$11;
      var v1075 = v1112 + ")[";
      var v996 = v1075 + traceI;
      var v836 = v996 + ",";
      var v629 = v836 + traceJ;
      var v318 = v629 + "]=";
      var v997 = this.nodes;
      var v837 = v997[i$$13];
      var v630 = v837[j$$11];
      var v319 = v630.value;
      var output = v318 + v319;
      var v320 = outputWindow.document;
      var v321 = rightNum(output, "", 20, " ");
      JAM.call(v320.write, v320, [v321], JAM.policy.p18);
      j$$11++;
      var v998 = this.nodes;
      var v838 = v998[i$$13];
      var v631 = v838.length;
      v322 = j$$11 < v631;
    }
    var v323 = outputWindow.document;
    JAM.call(v323.write, v323, ["\n"], JAM.policy.p9);
    i$$13++;
    var v839 = this.nodes;
    var v632 = v839.length;
    v324 = i$$13 < v632;
  }
  var v325 = outputWindow.document;
  JAM.call(v325.write, v325, ["\n"], JAM.policy.p9);
  return;
}
function updateMatrix() {
  var i$$14 = 1;
  var v840 = this.nodes;
  var v633 = v840.length;
  var v366 = i$$14 < v633;
  for (;v366;) {
    var j$$12 = 1;
    var v999 = this.nodes;
    var v841 = v999[0];
    var v634 = v841.length;
    var v365 = j$$12 < v634;
    for (;v365;) {
      var a;
      var b;
      var c;
      var v1000 = this.nodes;
      var v842 = v1000[i$$14];
      var v635 = v842[j$$12];
      var v349 = v635.alreadyMatched;
      if (v349) {
        a = 0;
        b = 0;
        c = 0;
      } else {
        var v1076 = this.nodes;
        var v1001 = v1076.length;
        var v843 = v1001 - 1;
        var v636 = i$$14 == v843;
        if (v636) {
          var v1113 = this.nodes;
          var v1077 = v1113[0];
          var v1002 = v1077.length;
          var v844 = v1002 - 1;
          v636 = j$$12 == v844;
        }
        var v348 = v636;
        if (v348) {
          var v845 = this.nodes;
          var v846 = i$$14 - 1;
          var v637 = v845[v846];
          var v326 = v637[j$$12];
          a = v326.value;
          var v847 = this.nodes;
          var v638 = v847[i$$14];
          var v639 = j$$12 - 1;
          var v327 = v638[v639];
          b = v327.value;
          var v1003 = this.nodes;
          var v1004 = i$$14 - 1;
          var v848 = v1003[v1004];
          var v849 = j$$12 - 1;
          var v640 = v848[v849];
          var v328 = v640.value;
          var v641 = this.scoreSet;
          var v850 = this.M;
          var v851 = i$$14 - 1;
          var v642 = v850[v851];
          var v852 = this.N;
          var v853 = j$$12 - 1;
          var v643 = v852[v853];
          var v329 = JAM.call(v641.getScore, v641, [v642, v643], JAM.policy.p27);
          c = v328 + v329;
        } else {
          var v1005 = this.nodes;
          var v854 = v1005.length;
          var v644 = v854 - 1;
          var v347 = i$$14 == v644;
          if (v347) {
            var v1006 = this.nodes;
            var v1007 = i$$14 - 1;
            var v855 = v1006[v1007];
            var v645 = v855[j$$12];
            var v330 = v645.value;
            var v646 = this.scoreSet;
            var v331 = v646.gap;
            a = v330 - v331;
            var v856 = this.nodes;
            var v647 = v856[i$$14];
            var v648 = j$$12 - 1;
            var v332 = v647[v648];
            b = v332.value;
            var v1008 = this.nodes;
            var v1009 = i$$14 - 1;
            var v857 = v1008[v1009];
            var v858 = j$$12 - 1;
            var v649 = v857[v858];
            var v333 = v649.value;
            var v650 = this.scoreSet;
            var v859 = this.M;
            var v860 = i$$14 - 1;
            var v651 = v859[v860];
            var v861 = this.N;
            var v862 = j$$12 - 1;
            var v652 = v861[v862];
            var v334 = JAM.call(v650.getScore, v650, [v651, v652], JAM.policy.p27);
            c = v333 + v334;
          } else {
            var v1078 = this.nodes;
            var v1010 = v1078[0];
            var v863 = v1010.length;
            var v653 = v863 - 1;
            var v346 = j$$12 == v653;
            if (v346) {
              var v864 = this.nodes;
              var v865 = i$$14 - 1;
              var v654 = v864[v865];
              var v335 = v654[j$$12];
              a = v335.value;
              var v1011 = this.nodes;
              var v866 = v1011[i$$14];
              var v867 = j$$12 - 1;
              var v655 = v866[v867];
              var v336 = v655.value;
              var v656 = this.scoreSet;
              var v337 = v656.gap;
              b = v336 - v337;
              var v1012 = this.nodes;
              var v1013 = i$$14 - 1;
              var v868 = v1012[v1013];
              var v869 = j$$12 - 1;
              var v657 = v868[v869];
              var v338 = v657.value;
              var v658 = this.scoreSet;
              var v870 = this.M;
              var v871 = i$$14 - 1;
              var v659 = v870[v871];
              var v872 = this.N;
              var v873 = j$$12 - 1;
              var v660 = v872[v873];
              var v339 = JAM.call(v658.getScore, v658, [v659, v660], JAM.policy.p27);
              c = v338 + v339;
            } else {
              var v1014 = this.nodes;
              var v1015 = i$$14 - 1;
              var v874 = v1014[v1015];
              var v661 = v874[j$$12];
              var v340 = v661.value;
              var v662 = this.scoreSet;
              var v341 = v662.gap;
              a = v340 - v341;
              var v1016 = this.nodes;
              var v875 = v1016[i$$14];
              var v876 = j$$12 - 1;
              var v663 = v875[v876];
              var v342 = v663.value;
              var v664 = this.scoreSet;
              var v343 = v664.gap;
              b = v342 - v343;
              var v1017 = this.nodes;
              var v1018 = i$$14 - 1;
              var v877 = v1017[v1018];
              var v878 = j$$12 - 1;
              var v665 = v877[v878];
              var v344 = v665.value;
              var v666 = this.scoreSet;
              var v879 = this.M;
              var v880 = i$$14 - 1;
              var v667 = v879[v880];
              var v881 = this.N;
              var v882 = j$$12 - 1;
              var v668 = v881[v882];
              var v345 = JAM.call(v666.getScore, v666, [v667, v668], JAM.policy.p27);
              c = v344 + v345;
            }
          }
        }
      }
      var v669 = a > b;
      if (v669) {
        v669 = a > c;
      }
      var v360 = v669;
      if (v360) {
        var v883 = this.nodes;
        var v670 = v883[i$$14];
        var v350 = v670[j$$12];
        v350.value = a;
        var v884 = this.nodes;
        var v671 = v884[i$$14];
        var v351 = v671[j$$12];
        v351.tracebackI = i$$14 - 1;
        var v885 = this.nodes;
        var v672 = v885[i$$14];
        var v352 = v672[j$$12];
        v352.tracebackJ = j$$12;
      } else {
        var v673 = b > c;
        if (v673) {
          v673 = b > a;
        }
        var v359 = v673;
        if (v359) {
          var v886 = this.nodes;
          var v674 = v886[i$$14];
          var v353 = v674[j$$12];
          v353.value = b;
          var v887 = this.nodes;
          var v675 = v887[i$$14];
          var v354 = v675[j$$12];
          v354.tracebackI = i$$14;
          var v888 = this.nodes;
          var v676 = v888[i$$14];
          var v355 = v676[j$$12];
          v355.tracebackJ = j$$12 - 1;
        } else {
          var v889 = this.nodes;
          var v677 = v889[i$$14];
          var v356 = v677[j$$12];
          v356.value = c;
          var v890 = this.nodes;
          var v678 = v890[i$$14];
          var v357 = v678[j$$12];
          v357.tracebackI = i$$14 - 1;
          var v891 = this.nodes;
          var v679 = v891[i$$14];
          var v358 = v679[j$$12];
          v358.tracebackJ = j$$12 - 1;
        }
      }
      var v1079 = this.nodes;
      var v1019 = v1079[i$$14];
      var v892 = v1019[j$$12];
      var v680 = v892.value;
      var v364 = v680 < 0;
      if (v364) {
        var v893 = this.nodes;
        var v681 = v893[i$$14];
        var v361 = v681[j$$12];
        v361.value = 0;
        var v894 = this.nodes;
        var v682 = v894[i$$14];
        var v362 = v682[j$$12];
        v362.tracebackI = undefined;
        var v895 = this.nodes;
        var v683 = v895[i$$14];
        var v363 = v683[j$$12];
        v363.tracebackJ = undefined;
      }
      j$$12++;
      var v1020 = this.nodes;
      var v896 = v1020[0];
      var v684 = v896.length;
      v365 = j$$12 < v684;
    }
    i$$14++;
    var v897 = this.nodes;
    var v685 = v897.length;
    v366 = i$$14 < v685;
  }
  var v898 = this.nodes;
  var v1080 = this.nodes;
  var v1021 = v1080.length;
  var v899 = v1021 - 1;
  var v686 = v898[v899];
  var v1081 = this.nodes;
  var v1022 = v1081[0];
  var v900 = v1022.length;
  var v687 = v900 - 1;
  var v367 = v686[v687];
  this.score = v367.value;
  return;
}
function search() {
  var v1211 = new Array;
  this.hits = v1211;
  var hitCount = 0;
  var v901 = this.scoreSet;
  var v688 = v901.hits;
  var v391 = hitCount < v688;
  for (;v391;) {
    this.updateMatrix();
    var maxNodeValue = 0;
    var maxNodeI = undefined;
    var maxNodeJ = undefined;
    var i$$15 = 1;
    var v902 = this.nodes;
    var v689 = v902.length;
    var v371 = i$$15 < v689;
    for (;v371;) {
      var j$$13 = 1;
      var v1023 = this.nodes;
      var v903 = v1023[0];
      var v690 = v903.length;
      var v370 = j$$13 < v690;
      for (;v370;) {
        var v1082 = this.nodes;
        var v1024 = v1082[i$$15];
        var v904 = v1024[j$$13];
        var v691 = v904.value;
        var v369 = v691 > maxNodeValue;
        if (v369) {
          var v905 = this.nodes;
          var v692 = v905[i$$15];
          var v368 = v692[j$$13];
          maxNodeValue = v368.value;
          maxNodeI = i$$15;
          maxNodeJ = j$$13;
        }
        j$$13++;
        var v1025 = this.nodes;
        var v906 = v1025[0];
        var v693 = v906.length;
        v370 = j$$13 < v693;
      }
      i$$15++;
      var v907 = this.nodes;
      var v694 = v907.length;
      v371 = i$$15 < v694;
    }
    var v372 = maxNodeValue == 0;
    if (v372) {
      break;
    }
    var currentI = maxNodeI;
    var currentJ = maxNodeJ;
    var v695 = this.nodes;
    var v373 = v695[maxNodeI];
    var currentNode = v373[maxNodeJ];
    var alignedM = new Array;
    var alignedN = new Array;
    var score = currentNode.value;
    var endM = undefined;
    var endN = undefined;
    var v908 = currentNode.tracebackI;
    var v696 = v908 != undefined;
    if (v696) {
      var v909 = currentNode.tracebackJ;
      v696 = v909 != undefined;
    }
    var v388 = v696;
    for (;v388;) {
      var v697 = currentI == 0;
      var v910 = !v697;
      if (v910) {
        v697 = currentJ == 0;
      }
      var v374 = v697;
      if (v374) {
        break;
      }
      var v911 = currentNode.tracebackI;
      var v912 = currentI - 1;
      var v698 = v911 == v912;
      if (v698) {
        var v913 = currentNode.tracebackJ;
        var v914 = currentJ - 1;
        v698 = v913 == v914;
      }
      var v383 = v698;
      if (v383) {
        var v375 = endM == undefined;
        if (v375) {
          endM = currentI;
          endN = currentJ;
        }
        var v699 = this.M;
        var v700 = currentI - 1;
        var v376 = v699[v700];
        JAM.call(alignedM.push, alignedM, [v376], JAM.policy.p18);
        var v701 = this.N;
        var v702 = currentJ - 1;
        var v377 = v701[v702];
        JAM.call(alignedN.push, alignedN, [v377], JAM.policy.p18);
      } else {
        var v703 = currentNode.tracebackJ;
        var v704 = currentJ - 1;
        var v382 = v703 == v704;
        if (v382) {
          var v379 = endM != undefined;
          if (v379) {
            JAM.call(alignedM.push, alignedM, ["-"], JAM.policy.p9);
            var v705 = this.N;
            var v706 = currentJ - 1;
            var v378 = v705[v706];
            JAM.call(alignedN.push, alignedN, [v378], JAM.policy.p18);
          }
        } else {
          var v381 = endM != undefined;
          if (v381) {
            var v707 = this.M;
            var v708 = currentI - 1;
            var v380 = v707[v708];
            JAM.call(alignedM.push, alignedM, [v380], JAM.policy.p18);
            JAM.call(alignedN.push, alignedN, ["-"], JAM.policy.p9);
          }
        }
      }
      var v915 = this.nodes;
      var v709 = v915[currentI];
      var v384 = v709[currentJ];
      v384.value = 0;
      var v916 = this.nodes;
      var v710 = v916[currentI];
      var v385 = v710[currentJ];
      v385.alreadyMatched = true;
      currentI = currentNode.tracebackI;
      currentJ = currentNode.tracebackJ;
      var v711 = this.nodes;
      var v712 = currentNode.tracebackI;
      var v386 = v711[v712];
      var v387 = currentNode.tracebackJ;
      currentNode = v386[v387];
      var v917 = currentNode.tracebackI;
      var v713 = v917 != undefined;
      if (v713) {
        var v918 = currentNode.tracebackJ;
        v713 = v918 != undefined;
      }
      v388 = v713;
    }
    alignedM = alignedM.reverse();
    alignedN = alignedN.reverse();
    var v389 = this.hits;
    var v714 = JAM.call(alignedM.join, alignedM, [""], JAM.policy.p9);
    var v715 = JAM.call(alignedN.join, alignedN, [""], JAM.policy.p9);
    var v716 = currentI + 1;
    var v717 = currentJ + 1;
    var v390 = new Hit(v714, v715, score, v716, endM, v717, endN);
    JAM.call(v389.push, v389, [v390], JAM.policy.p18);
    hitCount++;
    var v919 = this.scoreSet;
    var v718 = v919.hits;
    v391 = hitCount < v718;
  }
  return;
}
function getHits() {
  return this.hits;
}
function FuzzySearch() {
  return;
}
function Hit(sequenceM, sequenceN, score$$1, startM, endM$$1, startN, endN$$1) {
  this.sequenceM = sequenceM;
  this.sequenceN = sequenceN;
  this.score = score$$1;
  this.startM = startM;
  this.endM = endM$$1;
  this.startN = startN;
  this.endN = endN$$1;
  return;
}
new ScoreSet;
var v392 = ScoreSet.prototype;
v392.getScore = getScore;
var v393 = ScoreSet.prototype;
v393.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
var v394 = ScoringMatrix.prototype;
v394.scoringMatrix_getScore = scoringMatrix_getScore;
var v395 = Identity;
var v1212 = new ScoringMatrix;
v395.prototype = v1212;
var v396 = Identity.prototype;
v396.setMismatch = setMismatch;
var v397 = Identity.prototype;
v397.setMatch = setMatch;
new FuzzySearch;
var v398 = FuzzySearch.prototype;
v398.initializeMatrix = initializeMatrix;
var v399 = FuzzySearch.prototype;
v399.updateMatrix = updateMatrix;
var v400 = FuzzySearch.prototype;
v400.search = search;
var v401 = FuzzySearch.prototype;
v401.getHits = getHits;
var v402 = FuzzySearch.prototype;
v402.dumpMatrix = dumpMatrix;
JAM.set(document, "onload", v2);
var v403 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9);
JAM.set(v403, "onclick", v3);
var v404 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9);
JAM.set(v404, "onclick", v4)
