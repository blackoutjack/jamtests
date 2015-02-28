function v4() {
  var v698 = document.forms;
  var v588 = v698[0];
  var v342 = v588.elements;
  var v5 = v342[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    colorAlignProp();
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v343 = document.main_form;
  var v7 = v343.main_submit;
  v7.focus();
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
  var v8 = arrayOfSequences[0];
  var lengthOfAlign = v8.length;
  var v344 = arrayOfSequences.length;
  var v9 = v344 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v345 = arrayOfTitles.length;
  var v11 = i$$1 < v345;
  for (;v11;) {
    var v768 = arrayOfTitles[i$$1];
    var v699 = JAM.call(v768.search, v768, [/\S/], JAM.policy.p16);
    var v589 = v699 == -1;
    var v701 = !v589;
    if (v701) {
      var v769 = arrayOfSequences[i$$1];
      var v700 = JAM.call(v769.search, v769, [/\S/], JAM.policy.p16);
      v589 = v700 == -1;
    }
    var v346 = v589;
    var v591 = !v346;
    if (v591) {
      var v702 = arrayOfSequences[i$$1];
      var v590 = v702.length;
      v346 = v590 != lengthOfAlign;
    }
    var v10 = v346;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v347 = arrayOfTitles.length;
    v11 = i$$1 < v347;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v809 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p16);
  var v770 = v809 == -1;
  var v811 = !v770;
  if (v811) {
    var v810 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p16);
    v770 = v810 == -1;
  }
  var v703 = v770;
  var v772 = !v703;
  if (v772) {
    var v771 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p16);
    v703 = v771 == -1;
  }
  var v592 = v703;
  var v705 = !v592;
  if (v705) {
    var v704 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p16);
    v592 = v704 == -1;
  }
  var v348 = v592;
  var v594 = !v348;
  if (v594) {
    var v593 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p16);
    v348 = v593 == -1;
  }
  var v12 = v348;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v595 = formElement.value;
  var v349 = JAM.call(v595.search, v595, [/\S/], JAM.policy.p16);
  var v13 = v349 == -1;
  if (v13) {
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
  var v350 = arrayOfPatterns.length;
  var v16 = z$$2 < v350;
  for (;v16;) {
    var v596 = arrayOfPatterns[z$$2];
    var v351 = JAM.call(v596.search, v596, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p16);
    var v14 = v351 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v597 = arrayOfPatterns[z$$2];
    var v352 = moreExpressionCheck(v597);
    var v15 = v352 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v353 = arrayOfPatterns.length;
    v16 = z$$2 < v353;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v354 = arrayOfPatterns.length;
  var v22 = j < v354;
  for (;v22;) {
    var v598 = arrayOfPatterns[j];
    var v355 = JAM.call(v598.match, v598, [/\/.+\//], JAM.policy.p16);
    var v19 = v355 + "gi";
    if (JAM.isEval(eval)) {
      var v912 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v912 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v912;
    var v356 = arrayOfPatterns[j];
    var v20 = JAM.call(v356.match, v356, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v913 = v20.toString();
    geneticCodeMatchResult[j] = v913;
    var v21 = geneticCodeMatchResult[j];
    var v914 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v914;
    j++;
    var v357 = arrayOfPatterns.length;
    v22 = j < v357;
  }
  var i$$2 = 0;
  var v599 = testSequence.length;
  var v358 = v599 - 3;
  var v29 = i$$2 <= v358;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p15);
    j = 0;
    var v359 = geneticCodeMatchExp.length;
    var v27 = j < v359;
    for (;v27;) {
      var v600 = geneticCodeMatchExp[j];
      var v360 = JAM.call(codon.search, codon, [v600], JAM.policy.p17);
      var v26 = v360 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v361 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v361 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v362 = geneticCodeMatchExp.length;
      v27 = j < v362;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v601 = testSequence.length;
    var v363 = v601 - 3;
    v29 = i$$2 <= v363;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v364 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v364;
  for (;v31;) {
    var v602 = arrayOfPatterns$$1[z$$3];
    var v365 = JAM.call(v602.search, v602, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p16);
    var v30 = v365 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v366 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v366;
  }
  var i$$3 = 0;
  var v367 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v367;
  for (;v35;) {
    var v603 = arrayOfPatterns$$1[i$$3];
    var v368 = "[" + v603;
    var v32 = v368 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v369 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v369;
    for (;v34;) {
      var v604 = arrayOfPatterns$$1[j$$1];
      var v370 = JAM.call(v604.search, v604, [re], JAM.policy.p17);
      var v33 = v370 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v371 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v371;
    }
    i$$3++;
    var v372 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v372;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v373 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v373;
  for (;v38;) {
    var v605 = arrayOfPatterns$$2[z$$4];
    var v374 = JAM.call(v605.search, v605, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p16);
    var v36 = v374 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v606 = arrayOfPatterns$$2[z$$4];
    var v375 = moreExpressionCheck(v606);
    var v37 = v375 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v376 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v376;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v706 = getSequenceFromFasta(text$$7);
  var v607 = JAM.call(v706.replace, v706, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v377 = v607.length;
  var v40 = v377 > maxInput;
  if (v40) {
    var v378 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v378 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v379 = text$$8.length;
  var v42 = v379 > maxInput$$1;
  if (v42) {
    var v380 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v380 + " characters.";
    alert(v41);
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
  var v43 = outputWindow.document;
  JAM.call(v43.write, v43, ["</form>"], JAM.policy.p11);
  return true;
}
function closePre() {
  var v44 = outputWindow.document;
  JAM.call(v44.write, v44, ["</div>"], JAM.policy.p11);
  var v45 = outputWindow.document;
  JAM.call(v45.write, v45, ["</pre>\n"], JAM.policy.p11);
  return;
}
function closeTextArea() {
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</textarea>"], JAM.policy.p11);
  return true;
}
function closeWindow() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</body>\n</html>\n"], JAM.policy.p11);
  outputWindow.status = "Done.";
  var v48 = outputWindow.document;
  v48.close();
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
  var v381 = alignArray.length;
  var v49 = v381 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v382 = alignArray.length;
  var v51 = i$$4 < v382;
  for (;v51;) {
    var v608 = alignArray[i$$4];
    var v383 = JAM.call(v608.search, v608, [/[^\s]+\s/], JAM.policy.p16);
    var v50 = v383 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v384 = alignArray.length;
    v51 = i$$4 < v384;
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
  var v385 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v54 = v385 != -1;
  if (v54) {
    var v53 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    for (;v53;) {
      var v52 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v52], JAM.policy.p17);
      v53 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v386 = sequence$$2.length;
  var v55 = "&gt;results for " + v386;
  var stringToReturn = v55 + " residue sequence ";
  var v387 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p16);
  var v57 = v387 != -1;
  if (v57) {
    var v388 = stringToReturn + '"';
    var v56 = v388 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v389 = stringToReturn + ' starting "';
  var v390 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v389 + v390;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v391 = sequenceOne.length;
  var v59 = "Search results for " + v391;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v392 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p16);
  var v61 = v392 != -1;
  if (v61) {
    var v393 = stringToReturn$$1 + '"';
    var v60 = v393 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v394 = stringToReturn$$1 + ' starting "';
  var v395 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v394 + v395;
  stringToReturn$$1 = v62 + '"\n';
  var v396 = stringToReturn$$1 + "and ";
  var v397 = sequenceTwo.length;
  var v63 = v396 + v397;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v398 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p16);
  var v65 = v398 != -1;
  if (v65) {
    var v399 = stringToReturn$$1 + '"';
    var v64 = v399 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v400 = stringToReturn$$1 + ' starting "';
  var v401 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v66 = v400 + v401;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v402 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v402;
  for (;v70;) {
    var v609 = arrayOfPatterns$$3[j$$2];
    var v403 = JAM.call(v609.match, v609, [/\/.+\//], JAM.policy.p16);
    var v69 = v403 + "gi";
    if (JAM.isEval(eval)) {
      var v915 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v915 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v915;
    j$$2++;
    var v404 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v404;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v405 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v405;
  for (;v74;) {
    var v406 = arrayOfPatterns$$4[j$$3];
    var v72 = JAM.call(v406.match, v406, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v916 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v916;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v917 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v917;
    j$$3++;
    var v407 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v407;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v408 = sequence$$3.length;
  var v75 = "Results for " + v408;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v409 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p16);
  var v77 = v409 != -1;
  if (v77) {
    var v410 = stringToReturn$$2 + '"';
    var v76 = v410 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v411 = stringToReturn$$2 + ' starting "';
  var v412 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v78 = v411 + v412;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v610 = "Results for " + topology;
  var v413 = v610 + " ";
  var v414 = sequence$$4.length;
  var v80 = v413 + v414;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v415 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p16);
  var v82 = v415 != -1;
  if (v82) {
    var v416 = stringToReturn$$3 + '"';
    var v81 = v416 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v417 = stringToReturn$$3 + ' starting "';
  var v418 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v417 + v418;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v419 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v419;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v420 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p16);
  var v87 = v420 != -1;
  if (v87) {
    var v421 = stringToReturn$$4 + '"';
    var v86 = v421 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v422 = stringToReturn$$4 + ' starting "';
  var v423 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v422 + v423;
  stringToReturn$$4 = v88 + '"\n';
  var v424 = stringToReturn$$4 + "and ";
  var v425 = sequenceTwo$$1.length;
  var v89 = v424 + v425;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v426 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p16);
  var v91 = v426 != -1;
  if (v91) {
    var v427 = stringToReturn$$4 + '"';
    var v90 = v427 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v428 = stringToReturn$$4 + ' starting "';
  var v429 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v92 = v428 + v429;
  stringToReturn$$4 = v92 + '"';
  var v93 = '<div class="info">' + stringToReturn$$4;
  return v93 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v95 = j$$4 < lengthOut;
  for (;v95;) {
    var v430 = Math.random();
    var v431 = components.length;
    var v94 = v430 * v431;
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p16);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p11);
}
function getSequenceFromFasta(sequenceRecord) {
  var v432 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v96 = v432 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v433 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v98 = v433 != -1;
  if (v98) {
    var v97 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
    fastaTitle = v97.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p15);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v890 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p16);
  var v883 = v890 != -1;
  var v892 = !v883;
  if (v892) {
    var v891 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p16);
    v883 = v891 != -1;
  }
  var v874 = v883;
  var v885 = !v874;
  if (v885) {
    var v884 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p16);
    v874 = v884 != -1;
  }
  var v865 = v874;
  var v876 = !v865;
  if (v876) {
    var v875 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p16);
    v865 = v875 != -1;
  }
  var v852 = v865;
  var v867 = !v852;
  if (v867) {
    var v866 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p16);
    v852 = v866 != -1;
  }
  var v832 = v852;
  var v854 = !v832;
  if (v854) {
    var v853 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p16);
    v832 = v853 != -1;
  }
  var v812 = v832;
  var v834 = !v812;
  if (v834) {
    var v833 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p16);
    v812 = v833 != -1;
  }
  var v773 = v812;
  var v814 = !v773;
  if (v814) {
    var v813 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p16);
    v773 = v813 != -1;
  }
  var v707 = v773;
  var v775 = !v707;
  if (v775) {
    var v774 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p16);
    v707 = v774 != -1;
  }
  var v611 = v707;
  var v709 = !v611;
  if (v709) {
    var v708 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p16);
    v611 = v708 != -1;
  }
  var v434 = v611;
  var v613 = !v434;
  if (v613) {
    var v612 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p16);
    v434 = v612 != -1;
  }
  var v99 = v434;
  if (v99) {
    return false;
  }
  return true;
}
function openForm() {
  var v100 = outputWindow.document;
  JAM.call(v100.write, v100, ['<form action="">\n'], JAM.policy.p11);
  return true;
}
function openPre() {
  var v101 = outputWindow.document;
  JAM.call(v101.write, v101, ["<pre>"], JAM.policy.p11);
  var v102 = outputWindow.document;
  JAM.call(v102.write, v102, ['<div class="pre">'], JAM.policy.p11);
  return;
}
function openTextArea() {
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p11);
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v710 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v614 = v710 + "<head>\n";
  var v435 = v614 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v435 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p17);
  if (isColor) {
    var v106 = outputWindow.document;
    var v905 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v901 = v905 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v897 = v901 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v893 = v897 + "div.info {font-weight: bold}\n";
    var v886 = v893 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v877 = v886 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v868 = v877 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v855 = v868 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v835 = v855 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v815 = v835 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v776 = v815 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v711 = v776 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v615 = v711 + "td.many {color: #000000}\n";
    var v436 = v615 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v436 + "</style>\n";
    JAM.call(v106.write, v106, [v107], JAM.policy.p17);
  } else {
    var v108 = outputWindow.document;
    var v909 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v906 = v909 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v902 = v906 + "div.title {display: none}\n";
    var v898 = v902 + "div.info {font-weight: bold}\n";
    var v894 = v898 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v887 = v894 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v878 = v887 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v869 = v878 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v856 = v869 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v836 = v856 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v816 = v836 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v777 = v816 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v712 = v777 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v616 = v712 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v437 = v616 + "img {display: none}\n";
    var v109 = v437 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p17);
  }
  var v110 = outputWindow.document;
  var v713 = "</head>\n" + '<body class="main">\n';
  var v617 = v713 + '<div class="title">';
  var v438 = v617 + title$$6;
  var v111 = v438 + " results</div>\n";
  JAM.call(v110.write, v110, [v111], JAM.policy.p17);
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v112 = outputWindow.document;
  var v714 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v618 = v714 + "<head>\n";
  var v439 = v618 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v439 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p17);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v907 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v903 = v907 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v899 = v903 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v895 = v899 + "div.info {font-weight: bold}\n";
    var v888 = v895 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v879 = v888 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v870 = v879 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v857 = v870 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v837 = v857 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v817 = v837 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v778 = v817 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v715 = v778 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v619 = v715 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v440 = v619 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v440 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p17);
  } else {
    var v116 = outputWindow.document;
    var v911 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v910 = v911 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v908 = v910 + "div.title {display: none}\n";
    var v904 = v908 + "div.info {font-weight: bold}\n";
    var v900 = v904 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v896 = v900 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v889 = v896 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v880 = v889 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v871 = v880 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v858 = v871 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v838 = v858 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v818 = v838 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v779 = v818 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v716 = v779 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v620 = v716 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v441 = v620 + "img {display: none}\n";
    var v117 = v441 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p17);
  }
  var v118 = outputWindow.document;
  var v717 = "</head>\n" + '<body class="main">\n';
  var v621 = v717 + '<div class="title">';
  var v442 = v621 + title$$8;
  var v119 = v442 + " results</div>\n";
  JAM.call(v118.write, v118, [v119], JAM.policy.p17);
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
  var v443 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p16);
  var v120 = v443 != -1;
  if (v120) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p16);
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
  var v121 = j$$5 < lengthOfColumn;
  for (;v121;) {
    tempString = tempString + " ";
    j$$5++;
    v121 = j$$5 < lengthOfColumn;
  }
  var v122 = tempString + theNumber;
  theNumber = v122 + " ";
  var v123 = sequenceToAppend + theNumber;
  sequenceToAppend = v123 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p17);
  var v444 = testArray[0];
  var v124 = v444 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v445 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v125 = v445 == -1;
  if (v125) {
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
  var v126 = !caughtException;
  if (v126) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p15);
  var v127 = testString != "1X2X3X";
  if (v127) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v446 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p12);
  var v128 = v446 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v447 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p12);
  var v129 = v447 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v448 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p16);
  var v130 = v448 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v780 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p16);
  var v718 = v780 == -1;
  var v782 = !v718;
  if (v782) {
    var v781 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p16);
    v718 = v781 == -1;
  }
  var v622 = v718;
  var v720 = !v622;
  if (v720) {
    var v719 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p16);
    v622 = v719 == -1;
  }
  var v449 = v622;
  var v624 = !v449;
  if (v624) {
    var v623 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p16);
    v449 = v623 == -1;
  }
  var v131 = v449;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v450 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p16);
  var v132 = v450 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v451 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v451 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v452 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p16);
  var v135 = v452 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v453 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p16);
  var v136 = v453 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v783 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p16);
  var v721 = v783 == -1;
  var v785 = !v721;
  if (v785) {
    var v784 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p16);
    v721 = v784 == -1;
  }
  var v625 = v721;
  var v723 = !v625;
  if (v723) {
    var v722 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p16);
    v625 = v722 == -1;
  }
  var v454 = v625;
  var v627 = !v454;
  if (v627) {
    var v626 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p16);
    v454 = v626 == -1;
  }
  var v137 = v454;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v786 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p16);
  var v724 = v786 == -1;
  var v788 = !v724;
  if (v788) {
    var v787 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p16);
    v724 = v787 == -1;
  }
  var v628 = v724;
  var v726 = !v628;
  if (v726) {
    var v725 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p16);
    v628 = v725 == -1;
  }
  var v455 = v628;
  var v630 = !v455;
  if (v630) {
    var v629 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p16);
    v455 = v629 == -1;
  }
  var v138 = v455;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v456 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p16);
  var v139 = v456 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v789 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p16);
  var v727 = v789 == -1;
  var v791 = !v727;
  if (v791) {
    var v790 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p16);
    v727 = v790 == -1;
  }
  var v631 = v727;
  var v729 = !v631;
  if (v729) {
    var v728 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p16);
    v631 = v728 == -1;
  }
  var v457 = v631;
  var v633 = !v457;
  if (v633) {
    var v632 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p16);
    v457 = v632 == -1;
  }
  var v140 = v457;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v458 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p16);
  var v141 = v458 == -1;
  if (v141) {
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
  var v148 = i$$5 < stopBase;
  for (;v148;) {
    var v142 = i$$5 + 1;
    lineOfText = rightNum(v142, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v459 = basePerLine / groupSize;
    var v145 = j$$6 <= v459;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v460 = k + i$$5;
        var v143 = JAM.call(text$$10.charAt, text$$10, [v460], JAM.policy.p17);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v461 = basePerLine / groupSize;
      v145 = j$$6 <= v461;
    }
    var v146 = outputWindow.document;
    var v147 = lineOfText + "\n";
    JAM.call(v146.write, v146, [v147], JAM.policy.p17);
    lineOfText = "";
    v148 = i$$5 < stopBase;
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
    var v462 = adjustment < 0;
    if (v462) {
      v462 = adjusted >= 0;
    }
    var v149 = v462;
    if (v149) {
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
  var v180 = i$$6 < stopBase$$2;
  for (;v180;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v463 = basePerLine$$2 / groupSize$$2;
    var v156 = j$$7 <= v463;
    for (;v156;) {
      var v152 = k$$1 < groupSize$$2;
      for (;v152;) {
        var v464 = i$$6 + k$$1;
        var v150 = v464 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v465 = k$$1 + i$$6;
        var v151 = JAM.call(text$$12.charAt, text$$12, [v465], JAM.policy.p17);
        lineOfText$$1 = lineOfText$$1 + v151;
        k$$1 = k$$1 + 1;
        v152 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v154 = numberPosition$$1 == "above";
      if (v154) {
        var v466 = adjustNumbering(i$$6, numberingAdjustment);
        var v153 = rightNum(v466, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v153;
      }
      var v155 = i$$6 >= stopBase$$2;
      if (v155) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v467 = basePerLine$$2 / groupSize$$2;
      v156 = j$$7 <= v467;
    }
    var v179 = numberPosition$$1 == "left";
    if (v179) {
      var v157 = outputWindow.document;
      var v730 = adjustNumbering(lineNum, numberingAdjustment);
      var v634 = rightNum(v730, "", 8, tabIn$$3);
      var v468 = v634 + lineOfText$$1;
      var v158 = v468 + "\n";
      JAM.call(v157.write, v157, [v158], JAM.policy.p17);
      var v162 = strands$$1 == "two";
      if (v162) {
        var v159 = outputWindow.document;
        var v731 = adjustNumbering(lineNum, numberingAdjustment);
        var v635 = rightNum(v731, "", 8, tabIn$$3);
        var v636 = complement(lineOfText$$1);
        var v469 = v635 + v636;
        var v160 = v469 + "\n";
        JAM.call(v159.write, v159, [v160], JAM.policy.p17);
        var v161 = outputWindow.document;
        JAM.call(v161.write, v161, ["\n"], JAM.policy.p11);
      }
    } else {
      var v178 = numberPosition$$1 == "right";
      if (v178) {
        var v163 = outputWindow.document;
        var v637 = adjustNumbering(i$$6, numberingAdjustment);
        var v470 = lineOfText$$1 + v637;
        var v164 = v470 + "\n";
        JAM.call(v163.write, v163, [v164], JAM.policy.p17);
        var v168 = strands$$1 == "two";
        if (v168) {
          var v165 = outputWindow.document;
          var v638 = complement(lineOfText$$1);
          var v639 = adjustNumbering(i$$6, numberingAdjustment);
          var v471 = v638 + v639;
          var v166 = v471 + "\n";
          JAM.call(v165.write, v165, [v166], JAM.policy.p17);
          var v167 = outputWindow.document;
          JAM.call(v167.write, v167, ["\n"], JAM.policy.p11);
        }
      } else {
        var v177 = numberPosition$$1 == "above";
        if (v177) {
          var v169 = outputWindow.document;
          var v170 = aboveNum + "\n";
          JAM.call(v169.write, v169, [v170], JAM.policy.p17);
          var v171 = outputWindow.document;
          var v172 = lineOfText$$1 + "\n";
          JAM.call(v171.write, v171, [v172], JAM.policy.p17);
          var v176 = strands$$1 == "two";
          if (v176) {
            var v173 = outputWindow.document;
            var v472 = complement(lineOfText$$1);
            var v174 = v472 + "\n";
            JAM.call(v173.write, v173, [v174], JAM.policy.p17);
            var v175 = outputWindow.document;
            JAM.call(v175.write, v175, ["\n"], JAM.policy.p11);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v180 = i$$6 < stopBase$$2;
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
  var v199 = i$$7 < stopBase$$3;
  for (;v199;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v473 = basePerLine$$3 / groupSize$$3;
    var v187 = j$$8 <= v473;
    for (;v187;) {
      var v183 = k$$2 < groupSize$$3;
      for (;v183;) {
        var v474 = i$$7 + k$$2;
        var v181 = v474 >= stopBase$$3;
        if (v181) {
          break;
        }
        var v475 = k$$2 + i$$7;
        var v182 = JAM.call(text$$13.charAt, text$$13, [v475], JAM.policy.p17);
        lineOfText$$2 = lineOfText$$2 + v182;
        k$$2 = k$$2 + 1;
        v183 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v185 = numberPosition$$2 == "above";
      if (v185) {
        var v184 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v184;
      }
      var v186 = i$$7 >= stopBase$$3;
      if (v186) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v476 = basePerLine$$3 / groupSize$$3;
      v187 = j$$8 <= v476;
    }
    var v198 = numberPosition$$2 == "left";
    if (v198) {
      var v188 = outputWindow.document;
      var v640 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v477 = v640 + lineOfText$$2;
      var v189 = v477 + "\n";
      JAM.call(v188.write, v188, [v189], JAM.policy.p17);
    } else {
      var v197 = numberPosition$$2 == "right";
      if (v197) {
        var v190 = outputWindow.document;
        var v478 = lineOfText$$2 + i$$7;
        var v191 = v478 + "\n";
        JAM.call(v190.write, v190, [v191], JAM.policy.p17);
      } else {
        var v196 = numberPosition$$2 == "above";
        if (v196) {
          var v192 = outputWindow.document;
          var v193 = aboveNum$$1 + "\n";
          JAM.call(v192.write, v192, [v193], JAM.policy.p17);
          var v194 = outputWindow.document;
          var v195 = lineOfText$$2 + "\n";
          JAM.call(v194.write, v194, [v195], JAM.policy.p17);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v199 = i$$7 < stopBase$$3;
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
  var v732 = sequence$$13.length;
  var v641 = v732 <= firstIndexToMutate;
  var v733 = !v641;
  if (v733) {
    v641 = lastIndexToMutate < 0;
  }
  var v479 = v641;
  var v642 = !v479;
  if (v642) {
    v479 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v200 = v479;
  if (v200) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v208 = i$$8 < numMut;
  for (;v208;) {
    maxNum = sequence$$13.length;
    var v480 = Math.random();
    var v201 = v480 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v201], JAM.policy.p16);
    var v481 = randNum < firstIndexToMutate;
    var v643 = !v481;
    if (v643) {
      v481 = randNum > lastIndexToMutate;
    }
    var v202 = v481;
    if (v202) {
      numMut++;
      i$$8++;
      v208 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p16);
    needNewChar = true;
    for (;needNewChar;) {
      var v482 = Math.random();
      var v483 = components$$1.length;
      var v203 = v482 * v483;
      componentsIndex = JAM.call(Math.round, Math, [v203], JAM.policy.p16);
      var v484 = components$$1.length;
      var v204 = componentsIndex == v484;
      if (v204) {
        componentsIndex = 0;
      }
      var v485 = components$$1[componentsIndex];
      var v205 = v485 != currentChar;
      if (v205) {
        needNewChar = false;
      }
    }
    var v486 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v487 = components$$1[componentsIndex];
    var v206 = v486 + v487;
    var v488 = randNum + 1;
    var v489 = sequence$$13.length;
    var v207 = JAM.call(sequence$$13.substring, sequence$$13, [v488, v489], JAM.policy.p27);
    sequence$$13 = v206 + v207;
    i$$8++;
    v208 = i$$8 < numMut;
  }
  var v209 = outputWindow.document;
  var v210 = addReturns(sequence$$13);
  JAM.call(v209.write, v209, [v210], JAM.policy.p17);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v215 = j$$9 < lengthOut$$1;
  for (;v215;) {
    var v490 = Math.random();
    var v491 = components$$2.length;
    var v211 = v490 * v491;
    tempNum$$1 = JAM.call(Math.floor, Math, [v211], JAM.policy.p16);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v492 = sequence$$14.length;
    var v214 = v492 == 60;
    if (v214) {
      var v212 = outputWindow.document;
      var v213 = sequence$$14 + "\n";
      JAM.call(v212.write, v212, [v213], JAM.policy.p17);
      sequence$$14 = "";
    }
    j$$9++;
    v215 = j$$9 < lengthOut$$1;
  }
  var v216 = outputWindow.document;
  var v217 = sequence$$14 + "\n";
  JAM.call(v216.write, v216, [v217], JAM.policy.p17);
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
  var v221 = dnaConformation == "circular";
  if (v221) {
    var v218 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v218.length;
    var v734 = sequence$$15.length;
    var v644 = v734 - lookAhead;
    var v645 = sequence$$15.length;
    var v493 = JAM.call(sequence$$15.substring, sequence$$15, [v644, v645], JAM.policy.p27);
    var v219 = v493 + sequence$$15;
    var v220 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v219 + v220;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v222 = outputWindow.document;
  JAM.call(v222.write, v222, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v223 = outputWindow.document;
  var v735 = '<tr><td class="title" width="200px">' + "Site:";
  var v646 = v735 + '</td><td class="title">';
  var v494 = v646 + "Positions:";
  var v224 = v494 + "</td></tr>\n";
  JAM.call(v223.write, v223, [v224], JAM.policy.p17);
  var i$$9 = 0;
  var v495 = arrayOfItems.length;
  var v240 = i$$9 < v495;
  for (;v240;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v496 = arrayOfItems[i$$9];
    var v225 = JAM.call(v496.match, v496, [/\/.+\//], JAM.policy.p16);
    matchExp = v225 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v736 = arrayOfItems[i$$9];
    var v647 = JAM.call(v736.match, v736, [/\)\D*\d+/], JAM.policy.p16);
    var v497 = v647.toString();
    var v226 = JAM.call(v497.replace, v497, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v226);
    var v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v232;) {
      var v227 = matchExp.lastIndex;
      matchPosition = v227 - cutDistance;
      var v498 = matchPosition >= lowerLimit;
      if (v498) {
        v498 = matchPosition < upperLimit;
      }
      var v230 = v498;
      if (v230) {
        timesFound++;
        var v228 = tempString$$1 + ", ";
        var v499 = matchPosition - shiftValue;
        var v229 = v499 + 1;
        tempString$$1 = v228 + v229;
      }
      var v500 = matchExp.lastIndex;
      var v648 = RegExp.lastMatch;
      var v501 = v648.length;
      var v231 = v500 - v501;
      matchExp.lastIndex = v231 + 1;
      v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v502 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p16);
    var v233 = v502 != -1;
    if (v233) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p15);
    }
    var v237 = timesFound == 0;
    if (v237) {
      backGroundClass = "none";
    } else {
      var v236 = timesFound == 1;
      if (v236) {
        backGroundClass = "one";
      } else {
        var v235 = timesFound == 2;
        if (v235) {
          backGroundClass = "two";
        } else {
          var v234 = timesFound == 3;
          if (v234) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v238 = outputWindow.document;
    var v859 = '<tr><td class="' + backGroundClass;
    var v839 = v859 + '">';
    var v881 = arrayOfItems[i$$9];
    var v872 = JAM.call(v881.match, v881, [/\([^\(]+\)/], JAM.policy.p16);
    var v860 = v872.toString();
    var v840 = JAM.call(v860.replace, v860, [/\(|\)/g, ""], JAM.policy.p15);
    var v819 = v839 + v840;
    var v792 = v819 + '</td><td class="';
    var v737 = v792 + backGroundClass;
    var v649 = v737 + '">';
    var v503 = v649 + tempString$$1;
    var v239 = v503 + "</td></tr>\n";
    JAM.call(v238.write, v238, [v239], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v504 = arrayOfItems.length;
    v240 = i$$9 < v504;
  }
  var v241 = outputWindow.document;
  JAM.call(v241.write, v241, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v242 = outputWindow.document;
  JAM.call(v242.write, v242, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v243 = outputWindow.document;
  var v820 = '<tr><td class="title">' + "Pattern:";
  var v793 = v820 + '</td><td class="title">';
  var v738 = v793 + "Times found:";
  var v650 = v738 + '</td><td class="title">';
  var v505 = v650 + "Percentage:";
  var v244 = v505 + "</td></tr>\n";
  JAM.call(v243.write, v243, [v244], JAM.policy.p17);
  var i$$10 = 0;
  var v506 = arrayOfItems$$1.length;
  var v253 = i$$10 < v506;
  for (;v253;) {
    var tempNumber = 0;
    var v507 = arrayOfItems$$1[i$$10];
    var v245 = JAM.call(v507.match, v507, [/\/[^\/]+\//], JAM.policy.p16);
    var matchExp$$1 = v245 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v508 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v247 = v508 != -1;
    if (v247) {
      var v246 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v246.length;
    }
    var percentage = 0;
    var v651 = originalLength + 1;
    var v794 = arrayOfItems$$1[i$$10];
    var v739 = JAM.call(v794.match, v794, [/\d+/], JAM.policy.p16);
    var v652 = parseFloat(v739);
    var v509 = v651 - v652;
    var v250 = v509 > 0;
    if (v250) {
      var v248 = 100 * tempNumber;
      var v510 = originalLength + 1;
      var v740 = arrayOfItems$$1[i$$10];
      var v653 = JAM.call(v740.match, v740, [/\d+/], JAM.policy.p16);
      var v511 = parseFloat(v653);
      var v249 = v510 - v511;
      percentage = v248 / v249;
    }
    var v251 = outputWindow.document;
    var v882 = arrayOfItems$$1[i$$10];
    var v873 = JAM.call(v882.match, v882, [/\([^\(]+\)\b/], JAM.policy.p16);
    var v861 = v873.toString();
    var v841 = JAM.call(v861.replace, v861, [/\(|\)/g, ""], JAM.policy.p15);
    var v821 = "<tr><td>" + v841;
    var v795 = v821 + "</td><td>";
    var v741 = v795 + tempNumber;
    var v654 = v741 + "</td><td>";
    var v655 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p12);
    var v512 = v654 + v655;
    var v252 = v512 + "</td></tr>\n";
    JAM.call(v251.write, v251, [v252], JAM.policy.p17);
    i$$10++;
    var v513 = arrayOfItems$$1.length;
    v253 = i$$10 < v513;
  }
  var v254 = outputWindow.document;
  JAM.call(v254.write, v254, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v514 = sequence$$17.length;
  var v261 = v514 > 0;
  for (;v261;) {
    maxNum$$1 = sequence$$17.length;
    var v515 = Math.random();
    var v255 = v515 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v255], JAM.policy.p16);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p16);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v256 = randNum$$1 + 1;
    var v257 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v256, v257], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v516 = tempSeq.length;
    var v260 = v516 == 60;
    if (v260) {
      var v258 = outputWindow.document;
      var v259 = tempSeq + "\n";
      JAM.call(v258.write, v258, [v259], JAM.policy.p17);
      tempSeq = "";
    }
    var v517 = sequence$$17.length;
    v261 = v517 > 0;
  }
  var v262 = outputWindow.document;
  var v263 = tempSeq + "\n";
  JAM.call(v262.write, v262, [v263], JAM.policy.p17);
  return true;
}
function colorAlignProp() {
  var theDocument = document;
  var maxInput$$3 = 2E4;
  var v518 = testScript();
  var v264 = v518 == false;
  if (v264) {
    return;
  }
  var theAlignment = "";
  var alignArray$$1 = new Array;
  var groupString = "";
  var arrayOfGroups = new Array;
  var titleArray = new Array;
  var sequenceArray$$1 = new Array;
  var longestTitle;
  var v842 = theDocument.forms;
  var v822 = v842[0];
  var v796 = v822.elements;
  var v742 = v796[0];
  var v656 = checkFormElement(v742);
  var v519 = v656 == false;
  var v658 = !v519;
  if (v658) {
    var v862 = theDocument.forms;
    var v843 = v862[0];
    var v823 = v843.elements;
    var v797 = v823[0];
    var v743 = v797.value;
    var v657 = checkTextLength(v743, maxInput$$3);
    v519 = v657 == false;
  }
  var v265 = v519;
  if (v265) {
    return;
  }
  var v798 = theDocument.forms;
  var v744 = v798[0];
  var v659 = v744.elements;
  var v520 = v659[0];
  var v266 = v520.value;
  theAlignment = "X" + v266;
  alignArray$$1 = JAM.call(theAlignment.split, theAlignment, [/[>%#]/], JAM.policy.p16);
  var v521 = earlyCheckAlign(alignArray$$1);
  var v267 = v521 == false;
  if (v267) {
    return;
  }
  var i$$11 = 1;
  var v522 = alignArray$$1.length;
  var v277 = i$$11 < v522;
  for (;v277;) {
    var v268 = i$$11 - 1;
    var v523 = alignArray$$1[i$$11];
    var v918 = JAM.call(v523.match, v523, [/[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
    titleArray[v268] = v918;
    var v269 = i$$11 - 1;
    var v799 = i$$11 - 1;
    var v745 = titleArray[v799];
    var v660 = v745.toString();
    var v524 = filterFastaTitle(v660);
    var v919 = JAM.call(v524.replace, v524, [/[\f\n\r]/g, ""], JAM.policy.p15);
    titleArray[v269] = v919;
    var v270 = i$$11 - 1;
    var v661 = i$$11 - 1;
    var v525 = titleArray[v661];
    var v920 = JAM.call(v525.substring, v525, [0, 20], JAM.policy.p13);
    titleArray[v270] = v920;
    var v274 = i$$11 == 1;
    if (v274) {
      var v526 = i$$11 - 1;
      var v271 = titleArray[v526];
      longestTitle = v271.length;
    } else {
      var v746 = i$$11 - 1;
      var v662 = titleArray[v746];
      var v527 = v662.length;
      var v273 = v527 > longestTitle;
      if (v273) {
        var v528 = i$$11 - 1;
        var v272 = titleArray[v528];
        longestTitle = v272.length;
      }
    }
    var v275 = i$$11 - 1;
    var v529 = alignArray$$1[i$$11];
    var v921 = JAM.call(v529.replace, v529, [/[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
    sequenceArray$$1[v275] = v921;
    var v276 = i$$11 - 1;
    var v663 = i$$11 - 1;
    var v530 = sequenceArray$$1[v663];
    var v922 = filterAlignSeq(v530);
    sequenceArray$$1[v276] = v922;
    i$$11++;
    var v531 = alignArray$$1.length;
    v277 = i$$11 < v531;
  }
  var spaceString = "                    ";
  i$$11 = 0;
  var v532 = titleArray.length;
  var v281 = i$$11 < v532;
  for (;v281;) {
    var v664 = titleArray[i$$11];
    var v533 = v664.length;
    var v280 = v533 < longestTitle;
    if (v280) {
      var v278 = titleArray[i$$11];
      var v747 = titleArray[i$$11];
      var v665 = v747.length;
      var v534 = longestTitle - v665;
      var v279 = JAM.call(spaceString.substring, spaceString, [0, v534], JAM.policy.p13);
      titleArray[i$$11] = v278 + v279;
    }
    i$$11++;
    var v535 = titleArray.length;
    v281 = i$$11 < v535;
  }
  var v536 = checkAlign(titleArray, sequenceArray$$1);
  var v282 = v536 == false;
  if (v282) {
    return;
  }
  var v283 = JAM.call("GAVLI, FYW, CM, ST, KRH, DE, NQ, P".replace, "GAVLI, FYW, CM, ST, KRH, DE, NQ, P", [/\s/g, ""], JAM.policy.p15);
  groupString = v283.toUpperCase();
  arrayOfGroups = JAM.call(groupString.split, groupString, [/,/], JAM.policy.p16);
  var v537 = checkGroupInput(arrayOfGroups);
  var v284 = v537 == false;
  if (v284) {
    return;
  }
  var isBackground$$1;
  var v863 = theDocument.forms;
  var v844 = v863[0];
  var v824 = v844.elements;
  var v800 = v824[6];
  var v748 = v800.options;
  var v864 = theDocument.forms;
  var v845 = v864[0];
  var v825 = v845.elements;
  var v801 = v825[6];
  var v749 = v801.selectedIndex;
  var v666 = v748[v749];
  var v538 = v666.value;
  var v285 = v538 == "background";
  if (v285) {
    isBackground$$1 = true;
  } else {
    isBackground$$1 = false;
  }
  _openWindowAlign("Color Align Properties", isBackground$$1);
  openPre();
  var v286 = outputWindow.document;
  var v539 = '<span class="g">' + "G, A, V, L, I";
  var v287 = v539 + "</span>\n";
  JAM.call(v286.write, v286, [v287], JAM.policy.p17);
  var v288 = outputWindow.document;
  var v540 = '<span class="f">' + "F, Y, W";
  var v289 = v540 + "</span>\n";
  JAM.call(v288.write, v288, [v289], JAM.policy.p17);
  var v290 = outputWindow.document;
  var v541 = '<span class="c">' + "C, M";
  var v291 = v541 + "</span>\n";
  JAM.call(v290.write, v290, [v291], JAM.policy.p17);
  var v292 = outputWindow.document;
  var v542 = '<span class="s">' + "S, T";
  var v293 = v542 + "</span>\n";
  JAM.call(v292.write, v292, [v293], JAM.policy.p17);
  var v294 = outputWindow.document;
  var v543 = '<span class="k">' + "K, R, H";
  var v295 = v543 + "</span>\n";
  JAM.call(v294.write, v294, [v295], JAM.policy.p17);
  var v296 = outputWindow.document;
  var v544 = '<span class="d">' + "D, E";
  var v297 = v544 + "</span>\n";
  JAM.call(v296.write, v296, [v297], JAM.policy.p17);
  var v298 = outputWindow.document;
  var v545 = '<span class="q">' + "N, Q";
  var v299 = v545 + "</span>\n";
  JAM.call(v298.write, v298, [v299], JAM.policy.p17);
  var v300 = outputWindow.document;
  var v546 = '<span class="p">' + "P";
  var v301 = v546 + "</span>\n";
  JAM.call(v300.write, v300, [v301], JAM.policy.p17);
  var v302 = outputWindow.document;
  JAM.call(v302.write, v302, ["\n"], JAM.policy.p11);
  var v846 = theDocument.forms;
  var v826 = v846[0];
  var v802 = v826.elements;
  var v750 = v802[4];
  var v667 = v750.options;
  var v847 = theDocument.forms;
  var v827 = v847[0];
  var v803 = v827.elements;
  var v751 = v803[4];
  var v668 = v751.selectedIndex;
  var v547 = v667[v668];
  var v303 = v547.value;
  var v848 = theDocument.forms;
  var v828 = v848[0];
  var v804 = v828.elements;
  var v752 = v804[5];
  var v669 = v752.options;
  var v849 = theDocument.forms;
  var v829 = v849[0];
  var v805 = v829.elements;
  var v753 = v805[5];
  var v670 = v753.selectedIndex;
  var v548 = v669[v670];
  var v304 = v548.value;
  var v806 = theDocument.forms;
  var v754 = v806[0];
  var v671 = v754.elements;
  var v549 = v671[7];
  var v305 = v549.value;
  colorAlign(titleArray, sequenceArray$$1, v303, v304, arrayOfGroups, v305, longestTitle);
  closePre();
  closeWindow();
  return;
}
function colorAlign(arrayOfTitles$$1, arrayOfSequences$$1, basePerLine$$4, consensus, arrayOfGroups$$1, definedStarts, longestTitle$$1) {
  var v306 = arrayOfSequences$$1.length;
  var positions = new Array(v306);
  var v550 = JAM.call(definedStarts.search, definedStarts, [/\S/], JAM.policy.p16);
  var v307 = v550 == -1;
  if (v307) {
    definedStarts = "0,0";
  }
  var definedStartsArray = JAM.call(definedStarts.split, definedStarts, [/,/], JAM.policy.p16);
  var i$$12 = 0;
  var v551 = positions.length;
  var v311 = i$$12 < v551;
  for (;v311;) {
    var v552 = definedStartsArray.length;
    var v310 = i$$12 >= v552;
    if (v310) {
      positions[i$$12] = 0;
    } else {
      var v672 = definedStartsArray[i$$12];
      var v553 = JAM.call(v672.search, v672, [/\d/], JAM.policy.p16);
      var v309 = v553 != -1;
      if (v309) {
        var v554 = definedStartsArray[i$$12];
        var v308 = JAM.call(v554.replace, v554, [/[^\d\-]/g, ""], JAM.policy.p15);
        var v923 = parseInt(v308);
        positions[i$$12] = v923;
      } else {
        alert("An incorrect starting position was encountered. It was set to 0.");
        outputWindow.focus();
        positions[i$$12] = 0;
      }
    }
    i$$12++;
    var v555 = positions.length;
    v311 = i$$12 < v555;
  }
  var totalBasesShown = 0;
  var v312 = parseInt(consensus);
  consensus = v312 / 100;
  basePerLine$$4 = parseInt(basePerLine$$4);
  var columnCount = 0;
  var arrayOfColumns = new Array(basePerLine$$4);
  i$$12 = 0;
  var v556 = arrayOfColumns.length;
  var v314 = i$$12 < v556;
  for (;v314;) {
    var v313 = arrayOfSequences$$1.length;
    var v924 = new Array(v313);
    arrayOfColumns[i$$12] = v924;
    i$$12++;
    var v557 = arrayOfColumns.length;
    v314 = i$$12 < v557;
  }
  i$$12 = 0;
  var columnSeq;
  var re$$3;
  var result;
  var output = "";
  var v673 = arrayOfSequences$$1[0];
  var v558 = v673.length;
  var v339 = totalBasesShown < v558;
  for (;v339;) {
    var jj = 0;
    var v559 = arrayOfSequences$$1.length;
    var v337 = jj < v559;
    for (;v337;) {
      var v560 = arrayOfTitles$$1[jj];
      var v315 = output + v560;
      output = v315 + " ";
      var v674 = totalBasesShown + basePerLine$$4;
      var v561 = i$$12 < v674;
      if (v561) {
        var v755 = arrayOfSequences$$1[0];
        var v675 = v755.length;
        v561 = i$$12 < v675;
      }
      var v332 = v561;
      for (;v332;) {
        var v318 = jj == 0;
        if (v318) {
          var k$$3 = 0;
          var v562 = arrayOfSequences$$1.length;
          var v317 = k$$3 < v562;
          for (;v317;) {
            var v316 = arrayOfColumns[columnCount];
            var v563 = arrayOfSequences$$1[k$$3];
            var v925 = JAM.call(v563.charAt, v563, [i$$12], JAM.policy.p17);
            v316[k$$3] = v925;
            k$$3++;
            var v564 = arrayOfSequences$$1.length;
            v317 = k$$3 < v564;
          }
        }
        var v756 = arrayOfSequences$$1[jj];
        var v676 = JAM.call(v756.charAt, v756, [i$$12], JAM.policy.p17);
        var v565 = v676 == ".";
        var v678 = !v565;
        if (v678) {
          var v757 = arrayOfSequences$$1[jj];
          var v677 = JAM.call(v757.charAt, v757, [i$$12], JAM.policy.p17);
          v565 = v677 == "-";
        }
        var v320 = v565;
        if (v320) {
          var v566 = arrayOfSequences$$1[jj];
          var v319 = JAM.call(v566.charAt, v566, [i$$12], JAM.policy.p17);
          output = output + v319;
          i$$12 = i$$12 + 1;
          columnCount++;
          var v679 = totalBasesShown + basePerLine$$4;
          var v567 = i$$12 < v679;
          if (v567) {
            var v758 = arrayOfSequences$$1[0];
            var v680 = v758.length;
            v567 = i$$12 < v680;
          }
          v332 = v567;
          continue;
        }
        var v321 = arrayOfColumns[columnCount];
        columnSeq = JAM.call(v321.join, v321, [","], JAM.policy.p11);
        var v568 = arrayOfSequences$$1[jj];
        var v322 = JAM.call(v568.charAt, v568, [i$$12], JAM.policy.p17);
        re$$3 = new RegExp(v322, "gi");
        var v759 = JAM.call(columnSeq.match, columnSeq, [re$$3], JAM.policy.p17);
        var v681 = v759.length;
        var v682 = arrayOfSequences$$1.length;
        var v569 = v681 / v682;
        var v324 = v569 >= consensus;
        if (v324) {
          var v760 = output + '<span class="';
          var v850 = arrayOfSequences$$1[jj];
          var v830 = JAM.call(v850.charAt, v850, [i$$12], JAM.policy.p17);
          var v807 = v830.toString();
          var v761 = v807.toLowerCase();
          var v683 = v760 + v761;
          var v570 = v683 + '">';
          var v684 = arrayOfSequences$$1[jj];
          var v571 = JAM.call(v684.charAt, v684, [i$$12], JAM.policy.p17);
          var v323 = v570 + v571;
          output = v323 + "</span>";
          i$$12 = i$$12 + 1;
          columnCount++;
          var v685 = totalBasesShown + basePerLine$$4;
          var v572 = i$$12 < v685;
          if (v572) {
            var v762 = arrayOfSequences$$1[0];
            var v686 = v762.length;
            v572 = i$$12 < v686;
          }
          v332 = v572;
          continue;
        }
        result = 1;
        var m = 0;
        var v573 = arrayOfGroups$$1.length;
        var v328 = m < v573;
        for (;v328;) {
          var v687 = arrayOfGroups$$1[m];
          var v574 = JAM.call(v687.search, v687, [re$$3], JAM.policy.p17);
          var v327 = v574 != -1;
          if (v327) {
            var v688 = arrayOfGroups$$1[m];
            var v575 = "[" + v688;
            var v325 = v575 + "]";
            re$$3 = new RegExp(v325, "gi");
            var v326 = JAM.call(columnSeq.match, columnSeq, [re$$3], JAM.policy.p17);
            result = v326.length;
            break;
          }
          m++;
          var v576 = arrayOfGroups$$1.length;
          v328 = m < v576;
        }
        var v689 = arrayOfSequences$$1.length;
        var v577 = result / v689;
        var v330 = v577 >= consensus;
        if (v330) {
          var v763 = output + '<span class="';
          var v851 = arrayOfSequences$$1[jj];
          var v831 = JAM.call(v851.charAt, v851, [i$$12], JAM.policy.p17);
          var v808 = v831.toString();
          var v764 = v808.toLowerCase();
          var v690 = v763 + v764;
          var v578 = v690 + '">';
          var v691 = arrayOfSequences$$1[jj];
          var v579 = JAM.call(v691.charAt, v691, [i$$12], JAM.policy.p17);
          var v329 = v578 + v579;
          output = v329 + "</span>";
          i$$12 = i$$12 + 1;
          columnCount++;
          var v692 = totalBasesShown + basePerLine$$4;
          var v580 = i$$12 < v692;
          if (v580) {
            var v765 = arrayOfSequences$$1[0];
            var v693 = v765.length;
            v580 = i$$12 < v693;
          }
          v332 = v580;
          continue;
        }
        var v581 = arrayOfSequences$$1[jj];
        var v331 = JAM.call(v581.charAt, v581, [i$$12], JAM.policy.p17);
        output = output + v331;
        i$$12 = i$$12 + 1;
        columnCount++;
        var v694 = totalBasesShown + basePerLine$$4;
        var v582 = i$$12 < v694;
        if (v582) {
          var v766 = arrayOfSequences$$1[0];
          var v695 = v766.length;
          v582 = i$$12 < v695;
        }
        v332 = v582;
      }
      var v333 = positions[jj];
      var v767 = arrayOfSequences$$1[jj];
      var v696 = JAM.call(v767.substring, v767, [totalBasesShown, i$$12], JAM.policy.p27);
      var v583 = JAM.call(v696.replace, v696, [/\.|\-/g, ""], JAM.policy.p15);
      var v334 = v583.length;
      positions[jj] = v333 + v334;
      var v584 = output + " ";
      var v585 = positions[jj];
      var v335 = v584 + v585;
      output = v335 + "\n";
      var v336 = outputWindow.document;
      JAM.call(v336.write, v336, [output], JAM.policy.p17);
      output = "";
      i$$12 = totalBasesShown;
      columnCount = 0;
      jj++;
      var v586 = arrayOfSequences$$1.length;
      v337 = jj < v586;
    }
    totalBasesShown = totalBasesShown + basePerLine$$4;
    i$$12 = totalBasesShown;
    var v338 = outputWindow.document;
    JAM.call(v338.write, v338, ["\n"], JAM.policy.p11);
    var v697 = arrayOfSequences$$1[0];
    var v587 = v697.length;
    v339 = totalBasesShown < v587;
  }
  return;
}
JAM.set(document, "onload", v2);
var v340 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11);
JAM.set(v340, "onclick", v3);
var v341 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11);
JAM.set(v341, "onclick", v4)
