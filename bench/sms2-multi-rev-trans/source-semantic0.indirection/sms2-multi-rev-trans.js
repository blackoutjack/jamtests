function v4() {
  var v926 = document.forms;
  var v770 = v926[0];
  var v434 = v770.elements;
  var v5 = v434[0];
  v5.value = " ";
  var v927 = document.forms;
  var v771 = v927[0];
  var v435 = v771.elements;
  var v6 = v435[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    multiRevTrans(document);
  } catch (e$$8) {
    var v7 = "The following error was encountered: " + e$$8;
    alert(v7);
  }
  return;
}
function v2() {
  var v436 = document.main_form;
  var v8 = v436.main_submit;
  v8.focus();
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
  var v9 = arrayOfSequences[0];
  var lengthOfAlign = v9.length;
  var v437 = arrayOfSequences.length;
  var v10 = v437 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v438 = arrayOfTitles.length;
  var v12 = i$$1 < v438;
  for (;v12;) {
    var v1022 = arrayOfTitles[i$$1];
    var v928 = JAM.call(v1022.search, v1022, [/\S/], JAM.policy.p15);
    var v772 = v928 == -1;
    var v930 = !v772;
    if (v930) {
      var v1023 = arrayOfSequences[i$$1];
      var v929 = JAM.call(v1023.search, v1023, [/\S/], JAM.policy.p15);
      v772 = v929 == -1;
    }
    var v439 = v772;
    var v774 = !v439;
    if (v774) {
      var v931 = arrayOfSequences[i$$1];
      var v773 = v931.length;
      v439 = v773 != lengthOfAlign;
    }
    var v11 = v439;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v440 = arrayOfTitles.length;
    v12 = i$$1 < v440;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v1078 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p15);
  var v1024 = v1078 == -1;
  var v1080 = !v1024;
  if (v1080) {
    var v1079 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p15);
    v1024 = v1079 == -1;
  }
  var v932 = v1024;
  var v1026 = !v932;
  if (v1026) {
    var v1025 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p15);
    v932 = v1025 == -1;
  }
  var v775 = v932;
  var v934 = !v775;
  if (v934) {
    var v933 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p15);
    v775 = v933 == -1;
  }
  var v441 = v775;
  var v777 = !v441;
  if (v777) {
    var v776 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p15);
    v441 = v776 == -1;
  }
  var v13 = v441;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v778 = formElement.value;
  var v442 = JAM.call(v778.search, v778, [/\S/], JAM.policy.p15);
  var v14 = v442 == -1;
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
  var v443 = arrayOfPatterns.length;
  var v17 = z$$2 < v443;
  for (;v17;) {
    var v779 = arrayOfPatterns[z$$2];
    var v444 = JAM.call(v779.search, v779, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p15);
    var v15 = v444 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v780 = arrayOfPatterns[z$$2];
    var v445 = moreExpressionCheck(v780);
    var v16 = v445 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v446 = arrayOfPatterns.length;
    v17 = z$$2 < v446;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v447 = arrayOfPatterns.length;
  var v23 = j < v447;
  for (;v23;) {
    var v781 = arrayOfPatterns[j];
    var v448 = JAM.call(v781.match, v781, [/\/.+\//], JAM.policy.p15);
    var v20 = v448 + "gi";
    if (JAM.isEval(eval)) {
      var v1247 = eval("introspect(JAM.policy.pFull) { " + v20 + " }")
    } else {
      var v1247 = JAM.call(eval, null, [v20])
    }
    geneticCodeMatchExp[j] = v1247;
    var v449 = arrayOfPatterns[j];
    var v21 = JAM.call(v449.match, v449, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v1248 = v21.toString();
    geneticCodeMatchResult[j] = v1248;
    var v22 = geneticCodeMatchResult[j];
    var v1249 = JAM.call(v22.replace, v22, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v1249;
    j++;
    var v450 = arrayOfPatterns.length;
    v23 = j < v450;
  }
  var i$$2 = 0;
  var v782 = testSequence.length;
  var v451 = v782 - 3;
  var v30 = i$$2 <= v451;
  for (;v30;) {
    var v24 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v24], JAM.policy.p16);
    j = 0;
    var v452 = geneticCodeMatchExp.length;
    var v28 = j < v452;
    for (;v28;) {
      var v783 = geneticCodeMatchExp[j];
      var v453 = JAM.call(codon.search, codon, [v783], JAM.policy.p17);
      var v27 = v453 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v454 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v454 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v455 = geneticCodeMatchExp.length;
      v28 = j < v455;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v784 = testSequence.length;
    var v456 = v784 - 3;
    v30 = i$$2 <= v456;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v457 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v457;
  for (;v32;) {
    var v785 = arrayOfPatterns$$1[z$$3];
    var v458 = JAM.call(v785.search, v785, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p15);
    var v31 = v458 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v459 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v459;
  }
  var i$$3 = 0;
  var v460 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v460;
  for (;v36;) {
    var v786 = arrayOfPatterns$$1[i$$3];
    var v461 = "[" + v786;
    var v33 = v461 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v462 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v462;
    for (;v35;) {
      var v787 = arrayOfPatterns$$1[j$$1];
      var v463 = JAM.call(v787.search, v787, [re], JAM.policy.p17);
      var v34 = v463 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v464 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v464;
    }
    i$$3++;
    var v465 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v465;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v466 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v466;
  for (;v39;) {
    var v788 = arrayOfPatterns$$2[z$$4];
    var v467 = JAM.call(v788.search, v788, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p15);
    var v37 = v467 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v789 = arrayOfPatterns$$2[z$$4];
    var v468 = moreExpressionCheck(v789);
    var v38 = v468 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v469 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v469;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v935 = getSequenceFromFasta(text$$7);
  var v790 = JAM.call(v935.replace, v935, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v470 = v790.length;
  var v41 = v470 > maxInput;
  if (v41) {
    var v471 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v471 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v472 = text$$8.length;
  var v43 = v472 > maxInput$$1;
  if (v43) {
    var v473 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v473 + " characters.";
    alert(v42);
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
  var v474 = alignArray.length;
  var v50 = v474 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v475 = alignArray.length;
  var v52 = i$$4 < v475;
  for (;v52;) {
    var v791 = alignArray[i$$4];
    var v476 = JAM.call(v791.search, v791, [/[^\s]+\s/], JAM.policy.p15);
    var v51 = v476 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v477 = alignArray.length;
    v52 = i$$4 < v477;
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
  var v478 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v55 = v478 != -1;
  if (v55) {
    var v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    for (;v54;) {
      var v53 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v53], JAM.policy.p17);
      v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v479 = sequence$$2.length;
  var v56 = "&gt;results for " + v479;
  var stringToReturn = v56 + " residue sequence ";
  var v480 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p15);
  var v58 = v480 != -1;
  if (v58) {
    var v481 = stringToReturn + '"';
    var v57 = v481 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v482 = stringToReturn + ' starting "';
  var v483 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v59 = v482 + v483;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v484 = sequenceOne.length;
  var v60 = "Search results for " + v484;
  var stringToReturn$$1 = v60 + " residue sequence ";
  var v485 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p15);
  var v62 = v485 != -1;
  if (v62) {
    var v486 = stringToReturn$$1 + '"';
    var v61 = v486 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v487 = stringToReturn$$1 + ' starting "';
  var v488 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v63 = v487 + v488;
  stringToReturn$$1 = v63 + '"\n';
  var v489 = stringToReturn$$1 + "and ";
  var v490 = sequenceTwo.length;
  var v64 = v489 + v490;
  stringToReturn$$1 = v64 + " residue sequence ";
  var v491 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p15);
  var v66 = v491 != -1;
  if (v66) {
    var v492 = stringToReturn$$1 + '"';
    var v65 = v492 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v493 = stringToReturn$$1 + ' starting "';
  var v494 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v67 = v493 + v494;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v495 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v495;
  for (;v71;) {
    var v792 = arrayOfPatterns$$3[j$$2];
    var v496 = JAM.call(v792.match, v792, [/\/.+\//], JAM.policy.p15);
    var v70 = v496 + "gi";
    if (JAM.isEval(eval)) {
      var v1250 = eval("introspect(JAM.policy.pFull) { " + v70 + " }")
    } else {
      var v1250 = JAM.call(eval, null, [v70])
    }
    geneticCodeMatchExp$$1[j$$2] = v1250;
    j$$2++;
    var v497 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v497;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v498 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v498;
  for (;v75;) {
    var v499 = arrayOfPatterns$$4[j$$3];
    var v73 = JAM.call(v499.match, v499, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v1251 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v1251;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v1252 = JAM.call(v74.replace, v74, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v1252;
    j$$3++;
    var v500 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v500;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v501 = sequence$$3.length;
  var v76 = "Results for " + v501;
  var stringToReturn$$2 = v76 + " residue sequence ";
  var v502 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p15);
  var v78 = v502 != -1;
  if (v78) {
    var v503 = stringToReturn$$2 + '"';
    var v77 = v503 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v504 = stringToReturn$$2 + ' starting "';
  var v505 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v79 = v504 + v505;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v793 = "Results for " + topology;
  var v506 = v793 + " ";
  var v507 = sequence$$4.length;
  var v81 = v506 + v507;
  var stringToReturn$$3 = v81 + " residue sequence ";
  var v508 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p15);
  var v83 = v508 != -1;
  if (v83) {
    var v509 = stringToReturn$$3 + '"';
    var v82 = v509 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v510 = stringToReturn$$3 + ' starting "';
  var v511 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v84 = v510 + v511;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v512 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v512;
  var stringToReturn$$4 = v86 + " residue sequence ";
  var v513 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p15);
  var v88 = v513 != -1;
  if (v88) {
    var v514 = stringToReturn$$4 + '"';
    var v87 = v514 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v515 = stringToReturn$$4 + ' starting "';
  var v516 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v89 = v515 + v516;
  stringToReturn$$4 = v89 + '"\n';
  var v517 = stringToReturn$$4 + "and ";
  var v518 = sequenceTwo$$1.length;
  var v90 = v517 + v518;
  stringToReturn$$4 = v90 + " residue sequence ";
  var v519 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p15);
  var v92 = v519 != -1;
  if (v92) {
    var v520 = stringToReturn$$4 + '"';
    var v91 = v520 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v521 = stringToReturn$$4 + ' starting "';
  var v522 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v93 = v521 + v522;
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
    var v523 = Math.random();
    var v524 = components.length;
    var v95 = v523 * v524;
    tempNum = JAM.call(Math.floor, Math, [v95], JAM.policy.p15);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p9);
}
function getSequenceFromFasta(sequenceRecord) {
  var v525 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v97 = v525 != -1;
  if (v97) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v526 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v99 = v526 != -1;
  if (v99) {
    var v98 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
    fastaTitle = v98.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p16);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v1183 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p15);
  var v1173 = v1183 != -1;
  var v1185 = !v1173;
  if (v1185) {
    var v1184 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p15);
    v1173 = v1184 != -1;
  }
  var v1157 = v1173;
  var v1175 = !v1157;
  if (v1175) {
    var v1174 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p15);
    v1157 = v1174 != -1;
  }
  var v1140 = v1157;
  var v1159 = !v1140;
  if (v1159) {
    var v1158 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p15);
    v1140 = v1158 != -1;
  }
  var v1119 = v1140;
  var v1142 = !v1119;
  if (v1142) {
    var v1141 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p15);
    v1119 = v1141 != -1;
  }
  var v1102 = v1119;
  var v1121 = !v1102;
  if (v1121) {
    var v1120 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p15);
    v1102 = v1120 != -1;
  }
  var v1081 = v1102;
  var v1104 = !v1081;
  if (v1104) {
    var v1103 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p15);
    v1081 = v1103 != -1;
  }
  var v1027 = v1081;
  var v1083 = !v1027;
  if (v1083) {
    var v1082 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p15);
    v1027 = v1082 != -1;
  }
  var v936 = v1027;
  var v1029 = !v936;
  if (v1029) {
    var v1028 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p15);
    v936 = v1028 != -1;
  }
  var v794 = v936;
  var v938 = !v794;
  if (v938) {
    var v937 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p15);
    v794 = v937 != -1;
  }
  var v527 = v794;
  var v796 = !v527;
  if (v796) {
    var v795 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p15);
    v527 = v795 != -1;
  }
  var v100 = v527;
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
  var v939 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v797 = v939 + "<head>\n";
  var v528 = v797 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v528 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v105.write, v105, [v106], JAM.policy.p17);
  if (isColor) {
    var v107 = outputWindow.document;
    var v1213 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1203 = v1213 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1193 = v1203 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1186 = v1193 + "div.info {font-weight: bold}\n";
    var v1176 = v1186 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1160 = v1176 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1143 = v1160 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1122 = v1143 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1105 = v1122 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1084 = v1105 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1030 = v1084 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v940 = v1030 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v798 = v940 + "td.many {color: #000000}\n";
    var v529 = v798 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v529 + "</style>\n";
    JAM.call(v107.write, v107, [v108], JAM.policy.p17);
  } else {
    var v109 = outputWindow.document;
    var v1223 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1214 = v1223 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1204 = v1214 + "div.title {display: none}\n";
    var v1194 = v1204 + "div.info {font-weight: bold}\n";
    var v1187 = v1194 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1177 = v1187 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1161 = v1177 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1144 = v1161 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1123 = v1144 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1106 = v1123 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1085 = v1106 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1031 = v1085 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v941 = v1031 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v799 = v941 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v530 = v799 + "img {display: none}\n";
    var v110 = v530 + "</style>\n";
    JAM.call(v109.write, v109, [v110], JAM.policy.p17);
  }
  var v111 = outputWindow.document;
  var v942 = "</head>\n" + '<body class="main">\n';
  var v800 = v942 + '<div class="title">';
  var v531 = v800 + title$$6;
  var v112 = v531 + " results</div>\n";
  JAM.call(v111.write, v111, [v112], JAM.policy.p17);
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
  var v943 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v801 = v943 + "<head>\n";
  var v532 = v801 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v532 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v113.write, v113, [v114], JAM.policy.p17);
  if (isBackground) {
    var v115 = outputWindow.document;
    var v1215 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1205 = v1215 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1195 = v1205 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1188 = v1195 + "div.info {font-weight: bold}\n";
    var v1178 = v1188 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1162 = v1178 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1145 = v1162 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1124 = v1145 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1107 = v1124 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1086 = v1107 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1032 = v1086 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v944 = v1032 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v802 = v944 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v533 = v802 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v533 + "</style>\n";
    JAM.call(v115.write, v115, [v116], JAM.policy.p17);
  } else {
    var v117 = outputWindow.document;
    var v1228 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1224 = v1228 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1216 = v1224 + "div.title {display: none}\n";
    var v1206 = v1216 + "div.info {font-weight: bold}\n";
    var v1196 = v1206 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1189 = v1196 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1179 = v1189 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1163 = v1179 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1146 = v1163 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1125 = v1146 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1108 = v1125 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1087 = v1108 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1033 = v1087 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v945 = v1033 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v803 = v945 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v534 = v803 + "img {display: none}\n";
    var v118 = v534 + "</style>\n";
    JAM.call(v117.write, v117, [v118], JAM.policy.p17);
  }
  var v119 = outputWindow.document;
  var v946 = "</head>\n" + '<body class="main">\n';
  var v804 = v946 + '<div class="title">';
  var v535 = v804 + title$$8;
  var v120 = v535 + " results</div>\n";
  JAM.call(v119.write, v119, [v120], JAM.policy.p17);
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
  var v536 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p15);
  var v121 = v536 != -1;
  if (v121) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p15);
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p17);
  var v537 = testArray[0];
  var v125 = v537 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v538 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v126 = v538 == -1;
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
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p16);
  var v128 = testString != "1X2X3X";
  if (v128) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v539 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p11);
  var v129 = v539 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v540 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p11);
  var v130 = v540 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v541 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p15);
  var v131 = v541 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v1034 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p15);
  var v947 = v1034 == -1;
  var v1036 = !v947;
  if (v1036) {
    var v1035 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p15);
    v947 = v1035 == -1;
  }
  var v805 = v947;
  var v949 = !v805;
  if (v949) {
    var v948 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p15);
    v805 = v948 == -1;
  }
  var v542 = v805;
  var v807 = !v542;
  if (v807) {
    var v806 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p15);
    v542 = v806 == -1;
  }
  var v132 = v542;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v543 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p15);
  var v133 = v543 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v544 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v544 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v545 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p15);
  var v136 = v545 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v546 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p15);
  var v137 = v546 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v1037 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p15);
  var v950 = v1037 == -1;
  var v1039 = !v950;
  if (v1039) {
    var v1038 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p15);
    v950 = v1038 == -1;
  }
  var v808 = v950;
  var v952 = !v808;
  if (v952) {
    var v951 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p15);
    v808 = v951 == -1;
  }
  var v547 = v808;
  var v810 = !v547;
  if (v810) {
    var v809 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p15);
    v547 = v809 == -1;
  }
  var v138 = v547;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1040 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p15);
  var v953 = v1040 == -1;
  var v1042 = !v953;
  if (v1042) {
    var v1041 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p15);
    v953 = v1041 == -1;
  }
  var v811 = v953;
  var v955 = !v811;
  if (v955) {
    var v954 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p15);
    v811 = v954 == -1;
  }
  var v548 = v811;
  var v813 = !v548;
  if (v813) {
    var v812 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p15);
    v548 = v812 == -1;
  }
  var v139 = v548;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v549 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p15);
  var v140 = v549 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v1043 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p15);
  var v956 = v1043 == -1;
  var v1045 = !v956;
  if (v1045) {
    var v1044 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p15);
    v956 = v1044 == -1;
  }
  var v814 = v956;
  var v958 = !v814;
  if (v958) {
    var v957 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p15);
    v814 = v957 == -1;
  }
  var v550 = v814;
  var v816 = !v550;
  if (v816) {
    var v815 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p15);
    v550 = v815 == -1;
  }
  var v141 = v550;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v551 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p15);
  var v142 = v551 == -1;
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
    var v552 = basePerLine / groupSize;
    var v146 = j$$6 <= v552;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v553 = k + i$$5;
        var v144 = JAM.call(text$$10.charAt, text$$10, [v553], JAM.policy.p17);
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v554 = basePerLine / groupSize;
      v146 = j$$6 <= v554;
    }
    var v147 = outputWindow.document;
    var v148 = lineOfText + "\n";
    JAM.call(v147.write, v147, [v148], JAM.policy.p17);
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
    var v555 = adjustment < 0;
    if (v555) {
      v555 = adjusted >= 0;
    }
    var v150 = v555;
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
    var v556 = basePerLine$$2 / groupSize$$2;
    var v159 = j$$7 <= v556;
    for (;v159;) {
      var v154 = k$$1 < groupSize$$2;
      for (;v154;) {
        var v557 = i$$6 + k$$1;
        var v151 = v557 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v152 = lineOfText$$1;
        var v558 = k$$1 + i$$6;
        var v153 = JAM.call(text$$12.charAt, text$$12, [v558], JAM.policy.p17);
        lineOfText$$1 = v152 + v153;
        k$$1 = k$$1 + 1;
        v154 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v157 = numberPosition$$1 == "above";
      if (v157) {
        var v155 = aboveNum;
        var v559 = adjustNumbering(i$$6, numberingAdjustment);
        var v156 = rightNum(v559, "", groupSize$$2, tabIn$$3);
        aboveNum = v155 + v156;
      }
      var v158 = i$$6 >= stopBase$$2;
      if (v158) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v560 = basePerLine$$2 / groupSize$$2;
      v159 = j$$7 <= v560;
    }
    var v182 = numberPosition$$1 == "left";
    if (v182) {
      var v160 = outputWindow.document;
      var v959 = adjustNumbering(lineNum, numberingAdjustment);
      var v817 = rightNum(v959, "", 8, tabIn$$3);
      var v561 = v817 + lineOfText$$1;
      var v161 = v561 + "\n";
      JAM.call(v160.write, v160, [v161], JAM.policy.p17);
      var v165 = strands$$1 == "two";
      if (v165) {
        var v162 = outputWindow.document;
        var v960 = adjustNumbering(lineNum, numberingAdjustment);
        var v818 = rightNum(v960, "", 8, tabIn$$3);
        var v819 = complement(lineOfText$$1);
        var v562 = v818 + v819;
        var v163 = v562 + "\n";
        JAM.call(v162.write, v162, [v163], JAM.policy.p17);
        var v164 = outputWindow.document;
        JAM.call(v164.write, v164, ["\n"], JAM.policy.p9);
      }
    } else {
      var v181 = numberPosition$$1 == "right";
      if (v181) {
        var v166 = outputWindow.document;
        var v820 = lineOfText$$1;
        var v821 = adjustNumbering(i$$6, numberingAdjustment);
        var v563 = v820 + v821;
        var v167 = v563 + "\n";
        JAM.call(v166.write, v166, [v167], JAM.policy.p17);
        var v171 = strands$$1 == "two";
        if (v171) {
          var v168 = outputWindow.document;
          var v822 = complement(lineOfText$$1);
          var v823 = adjustNumbering(i$$6, numberingAdjustment);
          var v564 = v822 + v823;
          var v169 = v564 + "\n";
          JAM.call(v168.write, v168, [v169], JAM.policy.p17);
          var v170 = outputWindow.document;
          JAM.call(v170.write, v170, ["\n"], JAM.policy.p9);
        }
      } else {
        var v180 = numberPosition$$1 == "above";
        if (v180) {
          var v172 = outputWindow.document;
          var v173 = aboveNum + "\n";
          JAM.call(v172.write, v172, [v173], JAM.policy.p17);
          var v174 = outputWindow.document;
          var v175 = lineOfText$$1 + "\n";
          JAM.call(v174.write, v174, [v175], JAM.policy.p17);
          var v179 = strands$$1 == "two";
          if (v179) {
            var v176 = outputWindow.document;
            var v565 = complement(lineOfText$$1);
            var v177 = v565 + "\n";
            JAM.call(v176.write, v176, [v177], JAM.policy.p17);
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
    var v566 = basePerLine$$3 / groupSize$$3;
    var v190 = j$$8 <= v566;
    for (;v190;) {
      var v186 = k$$2 < groupSize$$3;
      for (;v186;) {
        var v567 = i$$7 + k$$2;
        var v184 = v567 >= stopBase$$3;
        if (v184) {
          break;
        }
        var v568 = k$$2 + i$$7;
        var v185 = JAM.call(text$$13.charAt, text$$13, [v568], JAM.policy.p17);
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
      var v569 = basePerLine$$3 / groupSize$$3;
      v190 = j$$8 <= v569;
    }
    var v201 = numberPosition$$2 == "left";
    if (v201) {
      var v191 = outputWindow.document;
      var v824 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v570 = v824 + lineOfText$$2;
      var v192 = v570 + "\n";
      JAM.call(v191.write, v191, [v192], JAM.policy.p17);
    } else {
      var v200 = numberPosition$$2 == "right";
      if (v200) {
        var v193 = outputWindow.document;
        var v571 = lineOfText$$2 + i$$7;
        var v194 = v571 + "\n";
        JAM.call(v193.write, v193, [v194], JAM.policy.p17);
      } else {
        var v199 = numberPosition$$2 == "above";
        if (v199) {
          var v195 = outputWindow.document;
          var v196 = aboveNum$$1 + "\n";
          JAM.call(v195.write, v195, [v196], JAM.policy.p17);
          var v197 = outputWindow.document;
          var v198 = lineOfText$$2 + "\n";
          JAM.call(v197.write, v197, [v198], JAM.policy.p17);
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
  var v961 = sequence$$13.length;
  var v825 = v961 <= firstIndexToMutate;
  var v962 = !v825;
  if (v962) {
    v825 = lastIndexToMutate < 0;
  }
  var v572 = v825;
  var v826 = !v572;
  if (v826) {
    v572 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v203 = v572;
  if (v203) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v211 = i$$8 < numMut;
  for (;v211;) {
    maxNum = sequence$$13.length;
    var v573 = Math.random();
    var v204 = v573 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v204], JAM.policy.p15);
    var v574 = randNum < firstIndexToMutate;
    var v827 = !v574;
    if (v827) {
      v574 = randNum > lastIndexToMutate;
    }
    var v205 = v574;
    if (v205) {
      numMut++;
      i$$8++;
      v211 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p15);
    needNewChar = true;
    for (;needNewChar;) {
      var v575 = Math.random();
      var v576 = components$$1.length;
      var v206 = v575 * v576;
      componentsIndex = JAM.call(Math.round, Math, [v206], JAM.policy.p15);
      var v577 = components$$1.length;
      var v207 = componentsIndex == v577;
      if (v207) {
        componentsIndex = 0;
      }
      var v578 = components$$1[componentsIndex];
      var v208 = v578 != currentChar;
      if (v208) {
        needNewChar = false;
      }
    }
    var v579 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v580 = components$$1[componentsIndex];
    var v209 = v579 + v580;
    var v581 = randNum + 1;
    var v582 = sequence$$13.length;
    var v210 = JAM.call(sequence$$13.substring, sequence$$13, [v581, v582], JAM.policy.p27);
    sequence$$13 = v209 + v210;
    i$$8++;
    v211 = i$$8 < numMut;
  }
  var v212 = outputWindow.document;
  var v213 = addReturns(sequence$$13);
  JAM.call(v212.write, v212, [v213], JAM.policy.p17);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v218 = j$$9 < lengthOut$$1;
  for (;v218;) {
    var v583 = Math.random();
    var v584 = components$$2.length;
    var v214 = v583 * v584;
    tempNum$$1 = JAM.call(Math.floor, Math, [v214], JAM.policy.p15);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v585 = sequence$$14.length;
    var v217 = v585 == 60;
    if (v217) {
      var v215 = outputWindow.document;
      var v216 = sequence$$14 + "\n";
      JAM.call(v215.write, v215, [v216], JAM.policy.p17);
      sequence$$14 = "";
    }
    j$$9++;
    v218 = j$$9 < lengthOut$$1;
  }
  var v219 = outputWindow.document;
  var v220 = sequence$$14 + "\n";
  JAM.call(v219.write, v219, [v220], JAM.policy.p17);
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
    var v963 = sequence$$15.length;
    var v828 = v963 - lookAhead;
    var v829 = sequence$$15.length;
    var v586 = JAM.call(sequence$$15.substring, sequence$$15, [v828, v829], JAM.policy.p27);
    var v222 = v586 + sequence$$15;
    var v223 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v222 + v223;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v225 = outputWindow.document;
  JAM.call(v225.write, v225, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v226 = outputWindow.document;
  var v964 = '<tr><td class="title" width="200px">' + "Site:";
  var v830 = v964 + '</td><td class="title">';
  var v587 = v830 + "Positions:";
  var v227 = v587 + "</td></tr>\n";
  JAM.call(v226.write, v226, [v227], JAM.policy.p17);
  var i$$9 = 0;
  var v588 = arrayOfItems.length;
  var v243 = i$$9 < v588;
  for (;v243;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v589 = arrayOfItems[i$$9];
    var v228 = JAM.call(v589.match, v589, [/\/.+\//], JAM.policy.p15);
    matchExp = v228 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v965 = arrayOfItems[i$$9];
    var v831 = JAM.call(v965.match, v965, [/\)\D*\d+/], JAM.policy.p15);
    var v590 = v831.toString();
    var v229 = JAM.call(v590.replace, v590, [/\)\D*/, ""], JAM.policy.p16);
    cutDistance = parseFloat(v229);
    var v235 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v235;) {
      var v230 = matchExp.lastIndex;
      matchPosition = v230 - cutDistance;
      var v591 = matchPosition >= lowerLimit;
      if (v591) {
        v591 = matchPosition < upperLimit;
      }
      var v233 = v591;
      if (v233) {
        timesFound++;
        var v231 = tempString$$1 + ", ";
        var v592 = matchPosition - shiftValue;
        var v232 = v592 + 1;
        tempString$$1 = v231 + v232;
      }
      var v593 = matchExp.lastIndex;
      var v832 = RegExp.lastMatch;
      var v594 = v832.length;
      var v234 = v593 - v594;
      matchExp.lastIndex = v234 + 1;
      v235 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v595 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p15);
    var v236 = v595 != -1;
    if (v236) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p16);
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
    var v1126 = '<tr><td class="' + backGroundClass;
    var v1109 = v1126 + '">';
    var v1164 = arrayOfItems[i$$9];
    var v1147 = JAM.call(v1164.match, v1164, [/\([^\(]+\)/], JAM.policy.p15);
    var v1127 = v1147.toString();
    var v1110 = JAM.call(v1127.replace, v1127, [/\(|\)/g, ""], JAM.policy.p16);
    var v1088 = v1109 + v1110;
    var v1046 = v1088 + '</td><td class="';
    var v966 = v1046 + backGroundClass;
    var v833 = v966 + '">';
    var v596 = v833 + tempString$$1;
    var v242 = v596 + "</td></tr>\n";
    JAM.call(v241.write, v241, [v242], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v597 = arrayOfItems.length;
    v243 = i$$9 < v597;
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
  var v1089 = '<tr><td class="title">' + "Pattern:";
  var v1047 = v1089 + '</td><td class="title">';
  var v967 = v1047 + "Times found:";
  var v834 = v967 + '</td><td class="title">';
  var v598 = v834 + "Percentage:";
  var v247 = v598 + "</td></tr>\n";
  JAM.call(v246.write, v246, [v247], JAM.policy.p17);
  var i$$10 = 0;
  var v599 = arrayOfItems$$1.length;
  var v256 = i$$10 < v599;
  for (;v256;) {
    var tempNumber = 0;
    var v600 = arrayOfItems$$1[i$$10];
    var v248 = JAM.call(v600.match, v600, [/\/[^\/]+\//], JAM.policy.p15);
    var matchExp$$1 = v248 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v601 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v250 = v601 != -1;
    if (v250) {
      var v249 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v249.length;
    }
    var percentage = 0;
    var v835 = originalLength + 1;
    var v1048 = arrayOfItems$$1[i$$10];
    var v968 = JAM.call(v1048.match, v1048, [/\d+/], JAM.policy.p15);
    var v836 = parseFloat(v968);
    var v602 = v835 - v836;
    var v253 = v602 > 0;
    if (v253) {
      var v251 = 100 * tempNumber;
      var v603 = originalLength + 1;
      var v969 = arrayOfItems$$1[i$$10];
      var v837 = JAM.call(v969.match, v969, [/\d+/], JAM.policy.p15);
      var v604 = parseFloat(v837);
      var v252 = v603 - v604;
      percentage = v251 / v252;
    }
    var v254 = outputWindow.document;
    var v1165 = arrayOfItems$$1[i$$10];
    var v1148 = JAM.call(v1165.match, v1165, [/\([^\(]+\)\b/], JAM.policy.p15);
    var v1128 = v1148.toString();
    var v1111 = JAM.call(v1128.replace, v1128, [/\(|\)/g, ""], JAM.policy.p16);
    var v1090 = "<tr><td>" + v1111;
    var v1049 = v1090 + "</td><td>";
    var v970 = v1049 + tempNumber;
    var v838 = v970 + "</td><td>";
    var v839 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p11);
    var v605 = v838 + v839;
    var v255 = v605 + "</td></tr>\n";
    JAM.call(v254.write, v254, [v255], JAM.policy.p17);
    i$$10++;
    var v606 = arrayOfItems$$1.length;
    v256 = i$$10 < v606;
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
  var v607 = sequence$$17.length;
  var v264 = v607 > 0;
  for (;v264;) {
    maxNum$$1 = sequence$$17.length;
    var v608 = Math.random();
    var v258 = v608 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v258], JAM.policy.p15);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p15);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v259 = randNum$$1 + 1;
    var v260 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v259, v260], JAM.policy.p16);
    sequence$$17 = tempString1 + tempString2;
    var v609 = tempSeq.length;
    var v263 = v609 == 60;
    if (v263) {
      var v261 = outputWindow.document;
      var v262 = tempSeq + "\n";
      JAM.call(v261.write, v261, [v262], JAM.policy.p17);
      tempSeq = "";
    }
    var v610 = sequence$$17.length;
    v264 = v610 > 0;
  }
  var v265 = outputWindow.document;
  var v266 = tempSeq + "\n";
  JAM.call(v265.write, v265, [v266], JAM.policy.p17);
  return true;
}
function multiRevTrans(theDocument) {
  var newProtein = "";
  var maxInput$$3 = 2E4;
  var codonTable$$1;
  var alignArray$$1 = new Array;
  var titleArray = new Array;
  var sequenceArray$$1 = new Array;
  var v611 = testScript();
  var v267 = v611 == false;
  if (v267) {
    return false;
  }
  var v1129 = theDocument.forms;
  var v1112 = v1129[0];
  var v1091 = v1112.elements;
  var v1050 = v1091[0];
  var v971 = checkFormElement(v1050);
  var v840 = v971 == false;
  var v973 = !v840;
  if (v973) {
    var v1149 = theDocument.forms;
    var v1130 = v1149[0];
    var v1113 = v1130.elements;
    var v1092 = v1113[0];
    var v1051 = v1092.value;
    var v972 = checkTextLength(v1051, maxInput$$3);
    v840 = v972 == false;
  }
  var v612 = v840;
  var v842 = !v612;
  if (v842) {
    var v1131 = theDocument.forms;
    var v1114 = v1131[0];
    var v1093 = v1114.elements;
    var v1052 = v1093[4];
    var v974 = v1052.value;
    var v841 = checkCodonTable(v974);
    v612 = v841 == false;
  }
  var v268 = v612;
  if (v268) {
    return false;
  }
  var v1053 = theDocument.forms;
  var v975 = v1053[0];
  var v843 = v975.elements;
  var v613 = v843[0];
  var v269 = v613.value;
  theAlignment = "X" + v269;
  alignArray$$1 = JAM.call(theAlignment.split, theAlignment, [/[>%#]/], JAM.policy.p15);
  var v614 = earlyCheckAlign(alignArray$$1);
  var v270 = v614 == false;
  if (v270) {
    return false;
  }
  var i$$11 = 1;
  var v615 = alignArray$$1.length;
  var v280 = i$$11 < v615;
  for (;v280;) {
    var v271 = i$$11 - 1;
    var v616 = alignArray$$1[i$$11];
    var v1253 = JAM.call(v616.match, v616, [/[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
    titleArray[v271] = v1253;
    var v272 = i$$11 - 1;
    var v1054 = i$$11 - 1;
    var v976 = titleArray[v1054];
    var v844 = v976.toString();
    var v617 = filterFastaTitle(v844);
    var v1254 = JAM.call(v617.replace, v617, [/[\f\n\r]/g, ""], JAM.policy.p16);
    titleArray[v272] = v1254;
    var v273 = i$$11 - 1;
    var v845 = i$$11 - 1;
    var v618 = titleArray[v845];
    var v1255 = JAM.call(v618.substring, v618, [0, 20], JAM.policy.p13);
    titleArray[v273] = v1255;
    var v277 = i$$11 == 1;
    if (v277) {
      var v619 = i$$11 - 1;
      var v274 = titleArray[v619];
      longestTitle = v274.length;
    } else {
      var v977 = i$$11 - 1;
      var v846 = titleArray[v977];
      var v620 = v846.length;
      var v276 = v620 > longestTitle;
      if (v276) {
        var v621 = i$$11 - 1;
        var v275 = titleArray[v621];
        longestTitle = v275.length;
      }
    }
    var v278 = i$$11 - 1;
    var v622 = alignArray$$1[i$$11];
    var v1256 = JAM.call(v622.replace, v622, [/[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
    sequenceArray$$1[v278] = v1256;
    var v279 = i$$11 - 1;
    var v847 = i$$11 - 1;
    var v623 = sequenceArray$$1[v847];
    var v1257 = filterAlignSeq(v623);
    sequenceArray$$1[v279] = v1257;
    i$$11++;
    var v624 = alignArray$$1.length;
    v280 = i$$11 < v624;
  }
  var v1055 = theDocument.forms;
  var v978 = v1055[0];
  var v848 = v978.elements;
  var v625 = v848[4];
  var v281 = v625.value;
  codonTable$$1 = makeCodonTable(v281);
  var v282 = codonTable$$1 == false;
  if (v282) {
    return false;
  }
  openWindow("Multi Rev Trans");
  i$$11 = 0;
  var v626 = titleArray.length;
  var v287 = i$$11 < v626;
  for (;v287;) {
    var v283 = outputWindow.document;
    var v627 = titleArray[i$$11];
    var v628 = sequenceArray$$1[i$$11];
    var v284 = getInfoFromTitleAndSequence(v627, v628);
    JAM.call(v283.write, v283, [v284], JAM.policy.p17);
    var v849 = titleArray.length;
    var v629 = v849 - 1;
    var v286 = i$$11 < v629;
    if (v286) {
      var v285 = outputWindow.document;
      JAM.call(v285.write, v285, ['<div class="info">Combined with:</div>\n'], JAM.policy.p9);
    }
    i$$11++;
    var v630 = titleArray.length;
    v287 = i$$11 < v630;
  }
  openPre();
  writeConsensusSeq(sequenceArray$$1, codonTable$$1);
  var v288 = outputWindow.document;
  JAM.call(v288.write, v288, ["\n"], JAM.policy.p9);
  writeMultiRevTrans(sequenceArray$$1, codonTable$$1);
  closePre();
  closeWindow();
  return true;
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
  var v850 = sequenceArray$$2[0];
  var v631 = v850.length;
  var v308 = i$$12 < v631;
  for (;v308;) {
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
    var v632 = sequenceArray$$2.length;
    var v304 = j$$10 < v632;
    for (;v304;) {
      var v979 = sequenceArray$$2[j$$10];
      var v851 = JAM.call(v979.charAt, v979, [i$$12], JAM.policy.p17);
      var v633 = v851 == "-";
      var v853 = !v633;
      if (v853) {
        var v980 = sequenceArray$$2[j$$10];
        var v852 = JAM.call(v980.charAt, v980, [i$$12], JAM.policy.p17);
        v633 = v852 == ".";
      }
      var v303 = v633;
      if (v303) {
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
          var v981 = sequenceArray$$2[j$$10];
          var v854 = JAM.call(v981.charAt, v981, [i$$12], JAM.policy.p17);
          var v634 = v854.toString();
          var v289 = v634.toLowerCase();
          aminoAcid = codonTable$$2[v289];
        } catch (e$$5) {
          var v855 = sequenceArray$$2[j$$10];
          var v635 = JAM.call(v855.charAt, v855, [i$$12], JAM.policy.p17);
          var v290 = "A codon table entry wasn't found for " + v635;
          alert(v290);
          return false;
        }
        var v636 = aminoAcid.baseFreqPosOne;
        var v291 = v636[0];
        firstG = firstG + v291;
        var v637 = aminoAcid.baseFreqPosOne;
        var v292 = v637[1];
        firstA = firstA + v292;
        var v638 = aminoAcid.baseFreqPosOne;
        var v293 = v638[2];
        firstT = firstT + v293;
        var v639 = aminoAcid.baseFreqPosOne;
        var v294 = v639[3];
        firstC = firstC + v294;
        var v640 = aminoAcid.baseFreqPosTwo;
        var v295 = v640[0];
        secondG = secondG + v295;
        var v641 = aminoAcid.baseFreqPosTwo;
        var v296 = v641[1];
        secondA = secondA + v296;
        var v642 = aminoAcid.baseFreqPosTwo;
        var v297 = v642[2];
        secondT = secondT + v297;
        var v643 = aminoAcid.baseFreqPosTwo;
        var v298 = v643[3];
        secondC = secondC + v298;
        var v644 = aminoAcid.baseFreqPosThree;
        var v299 = v644[0];
        thirdG = thirdG + v299;
        var v645 = aminoAcid.baseFreqPosThree;
        var v300 = v645[1];
        thirdA = thirdA + v300;
        var v646 = aminoAcid.baseFreqPosThree;
        var v301 = v646[2];
        thirdT = thirdT + v301;
        var v647 = aminoAcid.baseFreqPosThree;
        var v302 = v647[3];
        thirdC = thirdC + v302;
      }
      j$$10++;
      var v648 = sequenceArray$$2.length;
      v304 = j$$10 < v648;
    }
    var v649 = [firstG, firstA, firstT, firstC];
    var v305 = _getConsensusBase(v649);
    JAM.call(consensusSeq.push, consensusSeq, [v305], JAM.policy.p17);
    var v650 = [secondG, secondA, secondT, secondC];
    var v306 = _getConsensusBase(v650);
    JAM.call(consensusSeq.push, consensusSeq, [v306], JAM.policy.p17);
    var v651 = [thirdG, thirdA, thirdT, thirdC];
    var v307 = _getConsensusBase(v651);
    JAM.call(consensusSeq.push, consensusSeq, [v307], JAM.policy.p17);
    i$$12++;
    var v856 = sequenceArray$$2[0];
    var v652 = v856.length;
    v308 = i$$12 < v652;
  }
  var v309 = outputWindow.document;
  var v857 = "&gt;" + "reverse translation of alignment to a ";
  var v858 = consensusSeq.length;
  var v653 = v857 + v858;
  var v310 = v653 + " base sequence of consensus codons.\n";
  JAM.call(v309.write, v309, [v310], JAM.policy.p17);
  var v311 = outputWindow.document;
  var v654 = JAM.call(consensusSeq.join, consensusSeq, [""], JAM.policy.p9);
  var v312 = addReturns(v654);
  JAM.call(v311.write, v311, [v312], JAM.policy.p17);
  var v313 = outputWindow.document;
  JAM.call(v313.write, v313, ["\n"], JAM.policy.p9);
  return true;
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
  var v859 = sequenceArray$$3[0];
  var v655 = v859.length;
  var v356 = i$$13 < v655;
  for (;v356;) {
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
    var v656 = sequenceArray$$3.length;
    var v330 = j$$11 < v656;
    for (;v330;) {
      var v657 = sequenceArray$$3[j$$11];
      var v314 = JAM.call(v657.charAt, v657, [i$$13], JAM.policy.p17);
      columnSeq = columnSeq + v314;
      var v982 = sequenceArray$$3[j$$11];
      var v860 = JAM.call(v982.charAt, v982, [i$$13], JAM.policy.p17);
      var v658 = v860 == "-";
      var v862 = !v658;
      if (v862) {
        var v983 = sequenceArray$$3[j$$11];
        var v861 = JAM.call(v983.charAt, v983, [i$$13], JAM.policy.p17);
        v658 = v861 == ".";
      }
      var v329 = v658;
      if (v329) {
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
          var v984 = sequenceArray$$3[j$$11];
          var v863 = JAM.call(v984.charAt, v984, [i$$13], JAM.policy.p17);
          var v659 = v863.toString();
          var v315 = v659.toLowerCase();
          aminoAcid$$1 = codonTable$$3[v315];
        } catch (e$$6) {
          var v864 = sequenceArray$$3[j$$11];
          var v660 = JAM.call(v864.charAt, v864, [i$$13], JAM.policy.p17);
          var v316 = "A codon table entry wasn't found for " + v660;
          alert(v316);
          return false;
        }
        var v661 = aminoAcid$$1.baseFreqPosOne;
        var v317 = v661[0];
        firstG$$1 = firstG$$1 + v317;
        var v662 = aminoAcid$$1.baseFreqPosOne;
        var v318 = v662[1];
        firstA$$1 = firstA$$1 + v318;
        var v663 = aminoAcid$$1.baseFreqPosOne;
        var v319 = v663[2];
        firstT$$1 = firstT$$1 + v319;
        var v664 = aminoAcid$$1.baseFreqPosOne;
        var v320 = v664[3];
        firstC$$1 = firstC$$1 + v320;
        var v665 = aminoAcid$$1.baseFreqPosTwo;
        var v321 = v665[0];
        secondG$$1 = secondG$$1 + v321;
        var v666 = aminoAcid$$1.baseFreqPosTwo;
        var v322 = v666[1];
        secondA$$1 = secondA$$1 + v322;
        var v667 = aminoAcid$$1.baseFreqPosTwo;
        var v323 = v667[2];
        secondT$$1 = secondT$$1 + v323;
        var v668 = aminoAcid$$1.baseFreqPosTwo;
        var v324 = v668[3];
        secondC$$1 = secondC$$1 + v324;
        var v669 = aminoAcid$$1.baseFreqPosThree;
        var v325 = v669[0];
        thirdG$$1 = thirdG$$1 + v325;
        var v670 = aminoAcid$$1.baseFreqPosThree;
        var v326 = v670[1];
        thirdA$$1 = thirdA$$1 + v326;
        var v671 = aminoAcid$$1.baseFreqPosThree;
        var v327 = v671[2];
        thirdT$$1 = thirdT$$1 + v327;
        var v672 = aminoAcid$$1.baseFreqPosThree;
        var v328 = v672[3];
        thirdC$$1 = thirdC$$1 + v328;
      }
      j$$11++;
      var v673 = sequenceArray$$3.length;
      v330 = j$$11 < v673;
    }
    var v674 = markLength * firstG$$1;
    var v675 = sequenceArray$$3.length;
    var v331 = v674 / v675;
    firstG$$1 = JAM.call(Math.round, Math, [v331], JAM.policy.p15);
    var v676 = markLength * firstA$$1;
    var v677 = sequenceArray$$3.length;
    var v332 = v676 / v677;
    firstA$$1 = JAM.call(Math.round, Math, [v332], JAM.policy.p15);
    var v678 = markLength * firstT$$1;
    var v679 = sequenceArray$$3.length;
    var v333 = v678 / v679;
    firstT$$1 = JAM.call(Math.round, Math, [v333], JAM.policy.p15);
    var v680 = markLength * firstC$$1;
    var v681 = sequenceArray$$3.length;
    var v334 = v680 / v681;
    firstC$$1 = JAM.call(Math.round, Math, [v334], JAM.policy.p15);
    var v682 = markLength * secondG$$1;
    var v683 = sequenceArray$$3.length;
    var v335 = v682 / v683;
    secondG$$1 = JAM.call(Math.round, Math, [v335], JAM.policy.p15);
    var v684 = markLength * secondA$$1;
    var v685 = sequenceArray$$3.length;
    var v336 = v684 / v685;
    secondA$$1 = JAM.call(Math.round, Math, [v336], JAM.policy.p15);
    var v686 = markLength * secondT$$1;
    var v687 = sequenceArray$$3.length;
    var v337 = v686 / v687;
    secondT$$1 = JAM.call(Math.round, Math, [v337], JAM.policy.p15);
    var v688 = markLength * secondC$$1;
    var v689 = sequenceArray$$3.length;
    var v338 = v688 / v689;
    secondC$$1 = JAM.call(Math.round, Math, [v338], JAM.policy.p15);
    var v690 = markLength * thirdG$$1;
    var v691 = sequenceArray$$3.length;
    var v339 = v690 / v691;
    thirdG$$1 = JAM.call(Math.round, Math, [v339], JAM.policy.p15);
    var v692 = markLength * thirdA$$1;
    var v693 = sequenceArray$$3.length;
    var v340 = v692 / v693;
    thirdA$$1 = JAM.call(Math.round, Math, [v340], JAM.policy.p15);
    var v694 = markLength * thirdT$$1;
    var v695 = sequenceArray$$3.length;
    var v341 = v694 / v695;
    thirdT$$1 = JAM.call(Math.round, Math, [v341], JAM.policy.p15);
    var v696 = markLength * thirdC$$1;
    var v697 = sequenceArray$$3.length;
    var v342 = v696 / v697;
    thirdC$$1 = JAM.call(Math.round, Math, [v342], JAM.policy.p15);
    var v343 = outputWindow.document;
    var v1094 = i$$13 + 1;
    var v1056 = "<b>" + v1094;
    var v985 = v1056 + "_";
    var v865 = v985 + columnSeq;
    var v698 = v865 + "_";
    var v344 = v698 + "first</b>\n";
    JAM.call(v343.write, v343, [v344], JAM.policy.p17);
    var v345 = outputWindow.document;
    var v1244 = JAM.call(markG.substring, markG, [0, firstG$$1], JAM.policy.p13);
    var v1238 = "g" + v1244;
    var v1232 = v1238 + " ";
    var v1239 = firstG$$1 / markLength;
    var v1233 = JAM.call(v1239.toFixed, v1239, [2], JAM.policy.p11);
    var v1229 = v1232 + v1233;
    var v1225 = v1229 + "\n";
    var v1217 = v1225 + "a";
    var v1218 = JAM.call(markA.substring, markA, [0, firstA$$1], JAM.policy.p13);
    var v1207 = v1217 + v1218;
    var v1197 = v1207 + " ";
    var v1208 = firstA$$1 / markLength;
    var v1198 = JAM.call(v1208.toFixed, v1208, [2], JAM.policy.p11);
    var v1190 = v1197 + v1198;
    var v1180 = v1190 + "\n";
    var v1166 = v1180 + "T";
    var v1167 = JAM.call(markT.substring, markT, [0, firstT$$1], JAM.policy.p13);
    var v1150 = v1166 + v1167;
    var v1132 = v1150 + " ";
    var v1151 = firstT$$1 / markLength;
    var v1133 = JAM.call(v1151.toFixed, v1151, [2], JAM.policy.p11);
    var v1115 = v1132 + v1133;
    var v1095 = v1115 + "\n";
    var v1057 = v1095 + "C";
    var v1058 = JAM.call(markC.substring, markC, [0, firstC$$1], JAM.policy.p13);
    var v986 = v1057 + v1058;
    var v866 = v986 + " ";
    var v987 = firstC$$1 / markLength;
    var v867 = JAM.call(v987.toFixed, v987, [2], JAM.policy.p11);
    var v699 = v866 + v867;
    var v346 = v699 + "\n";
    JAM.call(v345.write, v345, [v346], JAM.policy.p17);
    var v347 = outputWindow.document;
    var v1096 = i$$13 + 1;
    var v1059 = "<b>" + v1096;
    var v988 = v1059 + "_";
    var v868 = v988 + columnSeq;
    var v700 = v868 + "_";
    var v348 = v700 + "second</b>\n";
    JAM.call(v347.write, v347, [v348], JAM.policy.p17);
    var v349 = outputWindow.document;
    var v1245 = JAM.call(markG.substring, markG, [0, secondG$$1], JAM.policy.p13);
    var v1240 = "g" + v1245;
    var v1234 = v1240 + " ";
    var v1241 = secondG$$1 / markLength;
    var v1235 = JAM.call(v1241.toFixed, v1241, [2], JAM.policy.p11);
    var v1230 = v1234 + v1235;
    var v1226 = v1230 + "\n";
    var v1219 = v1226 + "a";
    var v1220 = JAM.call(markA.substring, markA, [0, secondA$$1], JAM.policy.p13);
    var v1209 = v1219 + v1220;
    var v1199 = v1209 + " ";
    var v1210 = secondA$$1 / markLength;
    var v1200 = JAM.call(v1210.toFixed, v1210, [2], JAM.policy.p11);
    var v1191 = v1199 + v1200;
    var v1181 = v1191 + "\n";
    var v1168 = v1181 + "T";
    var v1169 = JAM.call(markT.substring, markT, [0, secondT$$1], JAM.policy.p13);
    var v1152 = v1168 + v1169;
    var v1134 = v1152 + " ";
    var v1153 = secondT$$1 / markLength;
    var v1135 = JAM.call(v1153.toFixed, v1153, [2], JAM.policy.p11);
    var v1116 = v1134 + v1135;
    var v1097 = v1116 + "\n";
    var v1060 = v1097 + "C";
    var v1061 = JAM.call(markC.substring, markC, [0, secondC$$1], JAM.policy.p13);
    var v989 = v1060 + v1061;
    var v869 = v989 + " ";
    var v990 = secondC$$1 / markLength;
    var v870 = JAM.call(v990.toFixed, v990, [2], JAM.policy.p11);
    var v701 = v869 + v870;
    var v350 = v701 + "\n";
    JAM.call(v349.write, v349, [v350], JAM.policy.p17);
    var v351 = outputWindow.document;
    var v1098 = i$$13 + 1;
    var v1062 = "<b>" + v1098;
    var v991 = v1062 + "_";
    var v871 = v991 + columnSeq;
    var v702 = v871 + "_";
    var v352 = v702 + "third</b>\n";
    JAM.call(v351.write, v351, [v352], JAM.policy.p17);
    var v353 = outputWindow.document;
    var v1246 = JAM.call(markG.substring, markG, [0, thirdG$$1], JAM.policy.p13);
    var v1242 = "g" + v1246;
    var v1236 = v1242 + " ";
    var v1243 = thirdG$$1 / markLength;
    var v1237 = JAM.call(v1243.toFixed, v1243, [2], JAM.policy.p11);
    var v1231 = v1236 + v1237;
    var v1227 = v1231 + "\n";
    var v1221 = v1227 + "a";
    var v1222 = JAM.call(markA.substring, markA, [0, thirdA$$1], JAM.policy.p13);
    var v1211 = v1221 + v1222;
    var v1201 = v1211 + " ";
    var v1212 = thirdA$$1 / markLength;
    var v1202 = JAM.call(v1212.toFixed, v1212, [2], JAM.policy.p11);
    var v1192 = v1201 + v1202;
    var v1182 = v1192 + "\n";
    var v1170 = v1182 + "T";
    var v1171 = JAM.call(markT.substring, markT, [0, thirdT$$1], JAM.policy.p13);
    var v1154 = v1170 + v1171;
    var v1136 = v1154 + " ";
    var v1155 = thirdT$$1 / markLength;
    var v1137 = JAM.call(v1155.toFixed, v1155, [2], JAM.policy.p11);
    var v1117 = v1136 + v1137;
    var v1099 = v1117 + "\n";
    var v1063 = v1099 + "C";
    var v1064 = JAM.call(markC.substring, markC, [0, thirdC$$1], JAM.policy.p13);
    var v992 = v1063 + v1064;
    var v872 = v992 + " ";
    var v993 = thirdC$$1 / markLength;
    var v873 = JAM.call(v993.toFixed, v993, [2], JAM.policy.p11);
    var v703 = v872 + v873;
    var v354 = v703 + "\n";
    JAM.call(v353.write, v353, [v354], JAM.policy.p17);
    var v355 = outputWindow.document;
    JAM.call(v355.write, v355, ["\n"], JAM.policy.p9);
    i$$13++;
    var v874 = sequenceArray$$3[0];
    var v704 = v874.length;
    v356 = i$$13 < v704;
  }
  return true;
}
function makeCodonTable(gcgTable) {
  gcgTable = JAM.call(gcgTable.replace, gcgTable, [/[^\.]*\.\./, ""], JAM.policy.p16);
  var tableArray = JAM.call(gcgTable.split, gcgTable, [/[\f\n\r]/], JAM.policy.p15);
  var re$$3 = /(\w+)\s+(\w+)\s+(\S+)\s+(\S+)\s+(\S+)/g;
  var matchArray$$2;
  var codonTable$$4 = new CodonTable;
  var i$$14 = 0;
  var v705 = tableArray.length;
  var v361 = i$$14 < v705;
  for (;v361;) {
    var v706 = tableArray[i$$14];
    var v360 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [v706], JAM.policy.p17);
    for (;v360;) {
      try {
        var v875 = matchArray$$2[1];
        var v707 = v875.toLowerCase();
        var v357 = codonTable$$4[v707];
        var v708 = matchArray$$2[2];
        var v876 = matchArray$$2[3];
        var v709 = parseFloat(v876);
        var v877 = matchArray$$2[4];
        var v710 = parseFloat(v877);
        var v878 = matchArray$$2[5];
        var v711 = parseFloat(v878);
        var v358 = new Codon(v708, v709, v710, v711);
        JAM.call(v357.addCodon, v357, [v358], JAM.policy.p17);
      } catch (e$$7) {
        var v1172 = matchArray$$2[1];
        var v1156 = "There is a problem with a line of the codon table: " + v1172;
        var v1138 = v1156 + " ";
        var v1139 = matchArray$$2[2];
        var v1118 = v1138 + v1139;
        var v1100 = v1118 + " ";
        var v1101 = matchArray$$2[3];
        var v1065 = v1100 + v1101;
        var v994 = v1065 + " ";
        var v995 = matchArray$$2[4];
        var v879 = v994 + v995;
        var v712 = v879 + " ";
        var v713 = matchArray$$2[4];
        var v359 = v712 + v713;
        alert(v359);
        return false;
      }
      var v714 = tableArray[i$$14];
      v360 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [v714], JAM.policy.p17);
    }
    i$$14++;
    var v715 = tableArray.length;
    v361 = i$$14 < v715;
  }
  var v362 = codonTable$$4.a;
  v362.determineBaseFreq();
  var v363 = codonTable$$4.c;
  v363.determineBaseFreq();
  var v364 = codonTable$$4.d;
  v364.determineBaseFreq();
  var v365 = codonTable$$4.e;
  v365.determineBaseFreq();
  var v366 = codonTable$$4.f;
  v366.determineBaseFreq();
  var v367 = codonTable$$4.g;
  v367.determineBaseFreq();
  var v368 = codonTable$$4.h;
  v368.determineBaseFreq();
  var v369 = codonTable$$4.i;
  v369.determineBaseFreq();
  var v370 = codonTable$$4.k;
  v370.determineBaseFreq();
  var v371 = codonTable$$4.l;
  v371.determineBaseFreq();
  var v372 = codonTable$$4.m;
  v372.determineBaseFreq();
  var v373 = codonTable$$4.n;
  v373.determineBaseFreq();
  var v374 = codonTable$$4.p;
  v374.determineBaseFreq();
  var v375 = codonTable$$4.q;
  v375.determineBaseFreq();
  var v376 = codonTable$$4.r;
  v376.determineBaseFreq();
  var v377 = codonTable$$4.s;
  v377.determineBaseFreq();
  var v378 = codonTable$$4.t;
  v378.determineBaseFreq();
  var v379 = codonTable$$4.v;
  v379.determineBaseFreq();
  var v380 = codonTable$$4.w;
  v380.determineBaseFreq();
  var v381 = codonTable$$4.y;
  v381.determineBaseFreq();
  var v382 = codonTable$$4.z;
  v382.determineBaseFreq();
  return codonTable$$4;
}
function CodonTable() {
  var v1258 = new AminoAcid;
  this.a = v1258;
  var v1259 = new AminoAcid;
  this.c = v1259;
  var v1260 = new AminoAcid;
  this.d = v1260;
  var v1261 = new AminoAcid;
  this.e = v1261;
  var v1262 = new AminoAcid;
  this.f = v1262;
  var v1263 = new AminoAcid;
  this.g = v1263;
  var v1264 = new AminoAcid;
  this.h = v1264;
  var v1265 = new AminoAcid;
  this.i = v1265;
  var v1266 = new AminoAcid;
  this.k = v1266;
  var v1267 = new AminoAcid;
  this.l = v1267;
  var v1268 = new AminoAcid;
  this.m = v1268;
  var v1269 = new AminoAcid;
  this.n = v1269;
  var v1270 = new AminoAcid;
  this.p = v1270;
  var v1271 = new AminoAcid;
  this.q = v1271;
  var v1272 = new AminoAcid;
  this.r = v1272;
  var v1273 = new AminoAcid;
  this.s = v1273;
  var v1274 = new AminoAcid;
  this.t = v1274;
  var v1275 = new AminoAcid;
  this.v = v1275;
  var v1276 = new AminoAcid;
  this.w = v1276;
  var v1277 = new AminoAcid;
  this.y = v1277;
  var v1278 = new AminoAcid;
  this.z = v1278;
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
  var v383 = this.codons;
  JAM.call(v383.push, v383, [codon$$1], JAM.policy.p17);
  return;
}
function determineBaseFreq() {
  this.fixFraction();
  var i$$15 = 0;
  var v880 = this.codons;
  var v716 = v880.length;
  var v408 = i$$15 < v716;
  for (;v408;) {
    var v1066 = this.codons;
    var v996 = v1066[i$$15];
    var v881 = v996.sequence;
    var v717 = JAM.call(v881.charAt, v881, [0], JAM.policy.p11);
    var v391 = v717 == "g";
    if (v391) {
      var v384 = this.baseFreqPosOne;
      var v882 = this.baseFreqPosOne;
      var v718 = v882[0];
      var v997 = this.codons;
      var v883 = v997[i$$15];
      var v719 = v883.fraction;
      v384[0] = v718 + v719;
    } else {
      var v1067 = this.codons;
      var v998 = v1067[i$$15];
      var v884 = v998.sequence;
      var v720 = JAM.call(v884.charAt, v884, [0], JAM.policy.p11);
      var v390 = v720 == "a";
      if (v390) {
        var v385 = this.baseFreqPosOne;
        var v885 = this.baseFreqPosOne;
        var v721 = v885[1];
        var v999 = this.codons;
        var v886 = v999[i$$15];
        var v722 = v886.fraction;
        v385[1] = v721 + v722;
      } else {
        var v1068 = this.codons;
        var v1000 = v1068[i$$15];
        var v887 = v1000.sequence;
        var v723 = JAM.call(v887.charAt, v887, [0], JAM.policy.p11);
        var v389 = v723 == "t";
        if (v389) {
          var v386 = this.baseFreqPosOne;
          var v888 = this.baseFreqPosOne;
          var v724 = v888[2];
          var v1001 = this.codons;
          var v889 = v1001[i$$15];
          var v725 = v889.fraction;
          v386[2] = v724 + v725;
        } else {
          var v1069 = this.codons;
          var v1002 = v1069[i$$15];
          var v890 = v1002.sequence;
          var v726 = JAM.call(v890.charAt, v890, [0], JAM.policy.p11);
          var v388 = v726 == "c";
          if (v388) {
            var v387 = this.baseFreqPosOne;
            var v891 = this.baseFreqPosOne;
            var v727 = v891[3];
            var v1003 = this.codons;
            var v892 = v1003[i$$15];
            var v728 = v892.fraction;
            v387[3] = v727 + v728;
          }
        }
      }
    }
    var v1070 = this.codons;
    var v1004 = v1070[i$$15];
    var v893 = v1004.sequence;
    var v729 = JAM.call(v893.charAt, v893, [1], JAM.policy.p11);
    var v399 = v729 == "g";
    if (v399) {
      var v392 = this.baseFreqPosTwo;
      var v894 = this.baseFreqPosTwo;
      var v730 = v894[0];
      var v1005 = this.codons;
      var v895 = v1005[i$$15];
      var v731 = v895.fraction;
      v392[0] = v730 + v731;
    } else {
      var v1071 = this.codons;
      var v1006 = v1071[i$$15];
      var v896 = v1006.sequence;
      var v732 = JAM.call(v896.charAt, v896, [1], JAM.policy.p11);
      var v398 = v732 == "a";
      if (v398) {
        var v393 = this.baseFreqPosTwo;
        var v897 = this.baseFreqPosTwo;
        var v733 = v897[1];
        var v1007 = this.codons;
        var v898 = v1007[i$$15];
        var v734 = v898.fraction;
        v393[1] = v733 + v734;
      } else {
        var v1072 = this.codons;
        var v1008 = v1072[i$$15];
        var v899 = v1008.sequence;
        var v735 = JAM.call(v899.charAt, v899, [1], JAM.policy.p11);
        var v397 = v735 == "t";
        if (v397) {
          var v394 = this.baseFreqPosTwo;
          var v900 = this.baseFreqPosTwo;
          var v736 = v900[2];
          var v1009 = this.codons;
          var v901 = v1009[i$$15];
          var v737 = v901.fraction;
          v394[2] = v736 + v737;
        } else {
          var v1073 = this.codons;
          var v1010 = v1073[i$$15];
          var v902 = v1010.sequence;
          var v738 = JAM.call(v902.charAt, v902, [1], JAM.policy.p11);
          var v396 = v738 == "c";
          if (v396) {
            var v395 = this.baseFreqPosTwo;
            var v903 = this.baseFreqPosTwo;
            var v739 = v903[3];
            var v1011 = this.codons;
            var v904 = v1011[i$$15];
            var v740 = v904.fraction;
            v395[3] = v739 + v740;
          }
        }
      }
    }
    var v1074 = this.codons;
    var v1012 = v1074[i$$15];
    var v905 = v1012.sequence;
    var v741 = JAM.call(v905.charAt, v905, [2], JAM.policy.p11);
    var v407 = v741 == "g";
    if (v407) {
      var v400 = this.baseFreqPosThree;
      var v906 = this.baseFreqPosThree;
      var v742 = v906[0];
      var v1013 = this.codons;
      var v907 = v1013[i$$15];
      var v743 = v907.fraction;
      v400[0] = v742 + v743;
    } else {
      var v1075 = this.codons;
      var v1014 = v1075[i$$15];
      var v908 = v1014.sequence;
      var v744 = JAM.call(v908.charAt, v908, [2], JAM.policy.p11);
      var v406 = v744 == "a";
      if (v406) {
        var v401 = this.baseFreqPosThree;
        var v909 = this.baseFreqPosThree;
        var v745 = v909[1];
        var v1015 = this.codons;
        var v910 = v1015[i$$15];
        var v746 = v910.fraction;
        v401[1] = v745 + v746;
      } else {
        var v1076 = this.codons;
        var v1016 = v1076[i$$15];
        var v911 = v1016.sequence;
        var v747 = JAM.call(v911.charAt, v911, [2], JAM.policy.p11);
        var v405 = v747 == "t";
        if (v405) {
          var v402 = this.baseFreqPosThree;
          var v912 = this.baseFreqPosThree;
          var v748 = v912[2];
          var v1017 = this.codons;
          var v913 = v1017[i$$15];
          var v749 = v913.fraction;
          v402[2] = v748 + v749;
        } else {
          var v1077 = this.codons;
          var v1018 = v1077[i$$15];
          var v914 = v1018.sequence;
          var v750 = JAM.call(v914.charAt, v914, [2], JAM.policy.p11);
          var v404 = v750 == "c";
          if (v404) {
            var v403 = this.baseFreqPosThree;
            var v915 = this.baseFreqPosThree;
            var v751 = v915[3];
            var v1019 = this.codons;
            var v916 = v1019[i$$15];
            var v752 = v916.fraction;
            v403[3] = v751 + v752;
          }
        }
      }
    }
    i$$15++;
    var v917 = this.codons;
    var v753 = v917.length;
    v408 = i$$15 < v753;
  }
  return true;
}
function fixFraction() {
  var perThouTotal = 0;
  var i$$16 = 0;
  var v918 = this.codons;
  var v754 = v918.length;
  var v410 = i$$16 < v754;
  for (;v410;) {
    var v919 = this.codons;
    var v755 = v919[i$$16];
    var v409 = v755.perThou;
    perThouTotal = perThouTotal + v409;
    i$$16++;
    var v920 = this.codons;
    var v756 = v920.length;
    v410 = i$$16 < v756;
  }
  var v411 = perThouTotal == 0;
  if (v411) {
    return false;
  }
  i$$16 = 0;
  var v921 = this.codons;
  var v757 = v921.length;
  var v413 = i$$16 < v757;
  for (;v413;) {
    var v758 = this.codons;
    var v412 = v758[i$$16];
    var v1020 = this.codons;
    var v922 = v1020[i$$16];
    var v759 = v922.perThou;
    v412.fraction = v759 / perThouTotal;
    i$$16++;
    var v923 = this.codons;
    var v760 = v923.length;
    v413 = i$$16 < v760;
  }
  return true;
}
function AminoAcid() {
  var v1279 = new Array;
  this.codons = v1279;
  var v1280 = new Array(0, 0, 0, 0);
  this.baseFreqPosOne = v1280;
  var v1281 = new Array(0, 0, 0, 0);
  this.baseFreqPosTwo = v1281;
  var v1282 = new Array(0, 0, 0, 0);
  this.baseFreqPosThree = v1282;
  return;
}
function Codon(sequence$$18, number, perThou, fraction) {
  var v1283 = sequence$$18.toLowerCase();
  this.sequence = v1283;
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
  var v761 = baseFreq[0];
  var v414 = v761 > 0;
  if (v414) {
    g = true;
  }
  var v762 = baseFreq[1];
  var v415 = v762 > 0;
  if (v415) {
    a = true;
  }
  var v763 = baseFreq[2];
  var v416 = v763 > 0;
  if (v416) {
    t = true;
  }
  var v764 = baseFreq[3];
  var v417 = v764 > 0;
  if (v417) {
    c = true;
  }
  var v1021 = !g;
  if (v1021) {
    v1021 = !a;
  }
  var v924 = v1021;
  if (v924) {
    v924 = !c;
  }
  var v765 = v924;
  if (v765) {
    v765 = !t;
  }
  var v418 = v765;
  if (v418) {
    return "n";
  }
  var v925 = g && a;
  if (v925) {
    v925 = c;
  }
  var v766 = v925;
  if (v766) {
    v766 = t;
  }
  var v428 = v766;
  if (v428) {
    return "n";
  } else {
    var v767 = a && c;
    if (v767) {
      v767 = t;
    }
    var v427 = v767;
    if (v427) {
      return "h";
    } else {
      var v768 = a && g;
      if (v768) {
        v768 = t;
      }
      var v426 = v768;
      if (v426) {
        return "d";
      } else {
        var v769 = c && g;
        if (v769) {
          v769 = t;
        }
        var v425 = v769;
        if (v425) {
          return "b";
        } else {
          var v424 = a && c;
          if (v424) {
            return "m";
          } else {
            var v423 = g && t;
            if (v423) {
              return "k";
            } else {
              var v422 = a && t;
              if (v422) {
                return "w";
              } else {
                var v421 = g && c;
                if (v421) {
                  return "s";
                } else {
                  var v420 = c && t;
                  if (v420) {
                    return "y";
                  } else {
                    var v419 = a && g;
                    if (v419) {
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
var v429 = AminoAcid.prototype;
v429.addCodon = addCodon;
var v430 = AminoAcid.prototype;
v430.determineBaseFreq = determineBaseFreq;
var v431 = AminoAcid.prototype;
v431.fixFraction = fixFraction;
JAM.set(document, "onload", v2);
var v432 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9);
JAM.set(v432, "onclick", v3);
var v433 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9);
JAM.set(v433, "onclick", v4)
