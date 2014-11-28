function v4() {
  var v583 = document.forms;
  var v500 = v583[0];
  var v304 = v500.elements;
  var v5 = v304[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    proteinIep(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v305 = document.main_form;
  var v7 = v305.main_submit;
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
  var v306 = arrayOfSequences.length;
  var v9 = v306 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v307 = arrayOfTitles.length;
  var v11 = i$$1 < v307;
  for (;v11;) {
    var v639 = arrayOfTitles[i$$1];
    var v584 = JAM.call(v639.search, v639, [/\S/], JAM.policy.p16);
    var v501 = v584 == -1;
    var v586 = !v501;
    if (v586) {
      var v640 = arrayOfSequences[i$$1];
      var v585 = JAM.call(v640.search, v640, [/\S/], JAM.policy.p16);
      v501 = v585 == -1;
    }
    var v308 = v501;
    var v503 = !v308;
    if (v503) {
      var v587 = arrayOfSequences[i$$1];
      var v502 = v587.length;
      v308 = v502 != lengthOfAlign;
    }
    var v10 = v308;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v309 = arrayOfTitles.length;
    v11 = i$$1 < v309;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v679 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p16);
  var v641 = v679 == -1;
  var v681 = !v641;
  if (v681) {
    var v680 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p16);
    v641 = v680 == -1;
  }
  var v588 = v641;
  var v643 = !v588;
  if (v643) {
    var v642 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p16);
    v588 = v642 == -1;
  }
  var v504 = v588;
  var v590 = !v504;
  if (v590) {
    var v589 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p16);
    v504 = v589 == -1;
  }
  var v310 = v504;
  var v506 = !v310;
  if (v506) {
    var v505 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p16);
    v310 = v505 == -1;
  }
  var v12 = v310;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v507 = formElement.value;
  var v311 = JAM.call(v507.search, v507, [/\S/], JAM.policy.p16);
  var v13 = v311 == -1;
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
  var v312 = arrayOfPatterns.length;
  var v16 = z$$2 < v312;
  for (;v16;) {
    var v508 = arrayOfPatterns[z$$2];
    var v313 = JAM.call(v508.search, v508, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p16);
    var v14 = v313 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v509 = arrayOfPatterns[z$$2];
    var v314 = moreExpressionCheck(v509);
    var v15 = v314 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v315 = arrayOfPatterns.length;
    v16 = z$$2 < v315;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v316 = arrayOfPatterns.length;
  var v22 = j < v316;
  for (;v22;) {
    var v510 = arrayOfPatterns[j];
    var v317 = JAM.call(v510.match, v510, [/\/.+\//], JAM.policy.p16);
    var v19 = v317 + "gi";
    if (JAM.isEval(eval)) {
      var v786 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v786 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v786;
    var v318 = arrayOfPatterns[j];
    var v20 = JAM.call(v318.match, v318, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v787 = v20.toString();
    geneticCodeMatchResult[j] = v787;
    var v21 = geneticCodeMatchResult[j];
    var v788 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v788;
    j++;
    var v319 = arrayOfPatterns.length;
    v22 = j < v319;
  }
  var i$$2 = 0;
  var v511 = testSequence.length;
  var v320 = v511 - 3;
  var v29 = i$$2 <= v320;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p15);
    j = 0;
    var v321 = geneticCodeMatchExp.length;
    var v27 = j < v321;
    for (;v27;) {
      var v512 = geneticCodeMatchExp[j];
      var v322 = JAM.call(codon.search, codon, [v512], JAM.policy.p17);
      var v26 = v322 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v323 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v323 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v324 = geneticCodeMatchExp.length;
      v27 = j < v324;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v513 = testSequence.length;
    var v325 = v513 - 3;
    v29 = i$$2 <= v325;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v326 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v326;
  for (;v31;) {
    var v514 = arrayOfPatterns$$1[z$$3];
    var v327 = JAM.call(v514.search, v514, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p16);
    var v30 = v327 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v328 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v328;
  }
  var i$$3 = 0;
  var v329 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v329;
  for (;v35;) {
    var v515 = arrayOfPatterns$$1[i$$3];
    var v330 = "[" + v515;
    var v32 = v330 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v331 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v331;
    for (;v34;) {
      var v516 = arrayOfPatterns$$1[j$$1];
      var v332 = JAM.call(v516.search, v516, [re], JAM.policy.p17);
      var v33 = v332 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v333 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v333;
    }
    i$$3++;
    var v334 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v334;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v335 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v335;
  for (;v38;) {
    var v517 = arrayOfPatterns$$2[z$$4];
    var v336 = JAM.call(v517.search, v517, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p16);
    var v36 = v336 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v518 = arrayOfPatterns$$2[z$$4];
    var v337 = moreExpressionCheck(v518);
    var v37 = v337 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v338 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v338;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v591 = getSequenceFromFasta(text$$7);
  var v519 = JAM.call(v591.replace, v591, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v339 = v519.length;
  var v40 = v339 > maxInput;
  if (v40) {
    var v340 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v340 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v341 = text$$8.length;
  var v42 = v341 > maxInput$$1;
  if (v42) {
    var v342 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v342 + " characters.";
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
  JAM.call(v43.write, v43, ["</form>"], JAM.policy.p9);
  return true;
}
function closePre() {
  var v44 = outputWindow.document;
  JAM.call(v44.write, v44, ["</div>"], JAM.policy.p9);
  var v45 = outputWindow.document;
  JAM.call(v45.write, v45, ["</pre>\n"], JAM.policy.p9);
  return;
}
function closeTextArea() {
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</textarea>"], JAM.policy.p9);
  return true;
}
function closeWindow() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</body>\n</html>\n"], JAM.policy.p9);
  outputWindow.status = "Done.";
  var v48 = outputWindow.document;
  v48.close();
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
  var v343 = alignArray.length;
  var v49 = v343 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v344 = alignArray.length;
  var v51 = i$$4 < v344;
  for (;v51;) {
    var v520 = alignArray[i$$4];
    var v345 = JAM.call(v520.search, v520, [/[^\s]+\s/], JAM.policy.p16);
    var v50 = v345 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v346 = alignArray.length;
    v51 = i$$4 < v346;
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
  var v347 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v54 = v347 != -1;
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
  var v348 = sequence$$2.length;
  var v55 = "&gt;results for " + v348;
  var stringToReturn = v55 + " residue sequence ";
  var v349 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p16);
  var v57 = v349 != -1;
  if (v57) {
    var v350 = stringToReturn + '"';
    var v56 = v350 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v351 = stringToReturn + ' starting "';
  var v352 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v351 + v352;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v353 = sequenceOne.length;
  var v59 = "Search results for " + v353;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v354 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p16);
  var v61 = v354 != -1;
  if (v61) {
    var v355 = stringToReturn$$1 + '"';
    var v60 = v355 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v356 = stringToReturn$$1 + ' starting "';
  var v357 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v356 + v357;
  stringToReturn$$1 = v62 + '"\n';
  var v358 = stringToReturn$$1 + "and ";
  var v359 = sequenceTwo.length;
  var v63 = v358 + v359;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v360 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p16);
  var v65 = v360 != -1;
  if (v65) {
    var v361 = stringToReturn$$1 + '"';
    var v64 = v361 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v362 = stringToReturn$$1 + ' starting "';
  var v363 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v66 = v362 + v363;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v364 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v364;
  for (;v70;) {
    var v521 = arrayOfPatterns$$3[j$$2];
    var v365 = JAM.call(v521.match, v521, [/\/.+\//], JAM.policy.p16);
    var v69 = v365 + "gi";
    if (JAM.isEval(eval)) {
      var v789 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v789 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v789;
    j$$2++;
    var v366 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v366;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v367 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v367;
  for (;v74;) {
    var v368 = arrayOfPatterns$$4[j$$3];
    var v72 = JAM.call(v368.match, v368, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v790 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v790;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v791 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v791;
    j$$3++;
    var v369 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v369;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v370 = sequence$$3.length;
  var v75 = "Results for " + v370;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v371 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p16);
  var v77 = v371 != -1;
  if (v77) {
    var v372 = stringToReturn$$2 + '"';
    var v76 = v372 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v373 = stringToReturn$$2 + ' starting "';
  var v374 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v78 = v373 + v374;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v522 = "Results for " + topology;
  var v375 = v522 + " ";
  var v376 = sequence$$4.length;
  var v80 = v375 + v376;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v377 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p16);
  var v82 = v377 != -1;
  if (v82) {
    var v378 = stringToReturn$$3 + '"';
    var v81 = v378 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v379 = stringToReturn$$3 + ' starting "';
  var v380 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v379 + v380;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v381 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v381;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v382 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p16);
  var v87 = v382 != -1;
  if (v87) {
    var v383 = stringToReturn$$4 + '"';
    var v86 = v383 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v384 = stringToReturn$$4 + ' starting "';
  var v385 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v384 + v385;
  stringToReturn$$4 = v88 + '"\n';
  var v386 = stringToReturn$$4 + "and ";
  var v387 = sequenceTwo$$1.length;
  var v89 = v386 + v387;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v388 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p16);
  var v91 = v388 != -1;
  if (v91) {
    var v389 = stringToReturn$$4 + '"';
    var v90 = v389 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v390 = stringToReturn$$4 + ' starting "';
  var v391 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v92 = v390 + v391;
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
    var v392 = Math.random();
    var v393 = components.length;
    var v94 = v392 * v393;
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p16);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p9);
}
function getSequenceFromFasta(sequenceRecord) {
  var v394 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v96 = v394 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v395 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v98 = v395 != -1;
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
  var v764 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p16);
  var v757 = v764 != -1;
  var v766 = !v757;
  if (v766) {
    var v765 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p16);
    v757 = v765 != -1;
  }
  var v748 = v757;
  var v759 = !v748;
  if (v759) {
    var v758 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p16);
    v748 = v758 != -1;
  }
  var v738 = v748;
  var v750 = !v738;
  if (v750) {
    var v749 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p16);
    v738 = v749 != -1;
  }
  var v724 = v738;
  var v740 = !v724;
  if (v740) {
    var v739 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p16);
    v724 = v739 != -1;
  }
  var v703 = v724;
  var v726 = !v703;
  if (v726) {
    var v725 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p16);
    v703 = v725 != -1;
  }
  var v682 = v703;
  var v705 = !v682;
  if (v705) {
    var v704 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p16);
    v682 = v704 != -1;
  }
  var v644 = v682;
  var v684 = !v644;
  if (v684) {
    var v683 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p16);
    v644 = v683 != -1;
  }
  var v592 = v644;
  var v646 = !v592;
  if (v646) {
    var v645 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p16);
    v592 = v645 != -1;
  }
  var v523 = v592;
  var v594 = !v523;
  if (v594) {
    var v593 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p16);
    v523 = v593 != -1;
  }
  var v396 = v523;
  var v525 = !v396;
  if (v525) {
    var v524 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p16);
    v396 = v524 != -1;
  }
  var v99 = v396;
  if (v99) {
    return false;
  }
  return true;
}
function openForm() {
  var v100 = outputWindow.document;
  JAM.call(v100.write, v100, ['<form action="">\n'], JAM.policy.p9);
  return true;
}
function openPre() {
  var v101 = outputWindow.document;
  JAM.call(v101.write, v101, ["<pre>"], JAM.policy.p9);
  var v102 = outputWindow.document;
  JAM.call(v102.write, v102, ['<div class="pre">'], JAM.policy.p9);
  return;
}
function openTextArea() {
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p9);
  return true;
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v595 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v526 = v595 + "<head>\n";
  var v397 = v526 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v397 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p17);
  if (isColor) {
    var v106 = outputWindow.document;
    var v779 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v775 = v779 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v771 = v775 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v767 = v771 + "div.info {font-weight: bold}\n";
    var v760 = v767 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v751 = v760 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v741 = v751 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v727 = v741 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v706 = v727 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v685 = v706 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v647 = v685 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v596 = v647 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v527 = v596 + "td.many {color: #000000}\n";
    var v398 = v527 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v398 + "</style>\n";
    JAM.call(v106.write, v106, [v107], JAM.policy.p17);
  } else {
    var v108 = outputWindow.document;
    var v783 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v780 = v783 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v776 = v780 + "div.title {display: none}\n";
    var v772 = v776 + "div.info {font-weight: bold}\n";
    var v768 = v772 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v761 = v768 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v752 = v761 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v742 = v752 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v728 = v742 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v707 = v728 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v686 = v707 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v648 = v686 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v597 = v648 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v528 = v597 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v399 = v528 + "img {display: none}\n";
    var v109 = v399 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p17);
  }
  var v110 = outputWindow.document;
  var v598 = "</head>\n" + '<body class="main">\n';
  var v529 = v598 + '<div class="title">';
  var v400 = v529 + title$$7;
  var v111 = v400 + " results</div>\n";
  JAM.call(v110.write, v110, [v111], JAM.policy.p17);
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
  var v112 = outputWindow.document;
  var v599 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v530 = v599 + "<head>\n";
  var v401 = v530 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v401 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p17);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v781 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v777 = v781 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v773 = v777 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v769 = v773 + "div.info {font-weight: bold}\n";
    var v762 = v769 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v753 = v762 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v743 = v753 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v729 = v743 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v708 = v729 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v687 = v708 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v649 = v687 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v600 = v649 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v531 = v600 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v402 = v531 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v402 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p17);
  } else {
    var v116 = outputWindow.document;
    var v785 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v784 = v785 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v782 = v784 + "div.title {display: none}\n";
    var v778 = v782 + "div.info {font-weight: bold}\n";
    var v774 = v778 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v770 = v774 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v763 = v770 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v754 = v763 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v744 = v754 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v730 = v744 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v709 = v730 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v688 = v709 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v650 = v688 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v601 = v650 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v532 = v601 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v403 = v532 + "img {display: none}\n";
    var v117 = v403 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p17);
  }
  var v118 = outputWindow.document;
  var v602 = "</head>\n" + '<body class="main">\n';
  var v533 = v602 + '<div class="title">';
  var v404 = v533 + title$$9;
  var v119 = v404 + " results</div>\n";
  JAM.call(v118.write, v118, [v119], JAM.policy.p17);
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
  var v405 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p16);
  var v120 = v405 != -1;
  if (v120) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p16);
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
  var v406 = testArray[0];
  var v124 = v406 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v407 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v125 = v407 == -1;
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
  var v408 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p11);
  var v128 = v408 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v409 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p11);
  var v129 = v409 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v410 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p16);
  var v130 = v410 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v651 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p16);
  var v603 = v651 == -1;
  var v653 = !v603;
  if (v653) {
    var v652 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p16);
    v603 = v652 == -1;
  }
  var v534 = v603;
  var v605 = !v534;
  if (v605) {
    var v604 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p16);
    v534 = v604 == -1;
  }
  var v411 = v534;
  var v536 = !v411;
  if (v536) {
    var v535 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p16);
    v411 = v535 == -1;
  }
  var v131 = v411;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v412 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p16);
  var v132 = v412 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v413 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v413 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v414 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p16);
  var v135 = v414 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v415 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p16);
  var v136 = v415 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v654 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p16);
  var v606 = v654 == -1;
  var v656 = !v606;
  if (v656) {
    var v655 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p16);
    v606 = v655 == -1;
  }
  var v537 = v606;
  var v608 = !v537;
  if (v608) {
    var v607 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p16);
    v537 = v607 == -1;
  }
  var v416 = v537;
  var v539 = !v416;
  if (v539) {
    var v538 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p16);
    v416 = v538 == -1;
  }
  var v137 = v416;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v657 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p16);
  var v609 = v657 == -1;
  var v659 = !v609;
  if (v659) {
    var v658 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p16);
    v609 = v658 == -1;
  }
  var v540 = v609;
  var v611 = !v540;
  if (v611) {
    var v610 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p16);
    v540 = v610 == -1;
  }
  var v417 = v540;
  var v542 = !v417;
  if (v542) {
    var v541 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p16);
    v417 = v541 == -1;
  }
  var v138 = v417;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v418 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p16);
  var v139 = v418 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v660 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p16);
  var v612 = v660 == -1;
  var v662 = !v612;
  if (v662) {
    var v661 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p16);
    v612 = v661 == -1;
  }
  var v543 = v612;
  var v614 = !v543;
  if (v614) {
    var v613 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p16);
    v543 = v613 == -1;
  }
  var v419 = v543;
  var v545 = !v419;
  if (v545) {
    var v544 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p16);
    v419 = v544 == -1;
  }
  var v140 = v419;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v420 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p16);
  var v141 = v420 == -1;
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
    var v421 = basePerLine / groupSize;
    var v145 = j$$6 <= v421;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v422 = k + i$$5;
        var v143 = JAM.call(text$$10.charAt, text$$10, [v422], JAM.policy.p17);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v423 = basePerLine / groupSize;
      v145 = j$$6 <= v423;
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
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v424 = adjustment < 0;
    if (v424) {
      v424 = adjusted >= 0;
    }
    var v149 = v424;
    if (v149) {
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
  var v182 = i$$6 < stopBase$$2;
  for (;v182;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v425 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v425;
    for (;v158;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v426 = i$$6 + k$$1;
        var v150 = v426 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v151 = lineOfText$$1;
        var v427 = k$$1 + i$$6;
        var v152 = JAM.call(text$$12.charAt, text$$12, [v427], JAM.policy.p17);
        lineOfText$$1 = v151 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v156 = numberPosition$$1 == "above";
      if (v156) {
        var v154 = aboveNum;
        var v428 = adjustNumbering(i$$6, numberingAdjustment);
        var v155 = rightNum(v428, "", groupSize$$2, tabIn$$3);
        aboveNum = v154 + v155;
      }
      var v157 = i$$6 >= stopBase$$2;
      if (v157) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v429 = basePerLine$$2 / groupSize$$2;
      v158 = j$$7 <= v429;
    }
    var v181 = numberPosition$$1 == "left";
    if (v181) {
      var v159 = outputWindow.document;
      var v615 = adjustNumbering(lineNum, numberingAdjustment);
      var v546 = rightNum(v615, "", 8, tabIn$$3);
      var v430 = v546 + lineOfText$$1;
      var v160 = v430 + "\n";
      JAM.call(v159.write, v159, [v160], JAM.policy.p17);
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v616 = adjustNumbering(lineNum, numberingAdjustment);
        var v547 = rightNum(v616, "", 8, tabIn$$3);
        var v548 = complement(lineOfText$$1);
        var v431 = v547 + v548;
        var v162 = v431 + "\n";
        JAM.call(v161.write, v161, [v162], JAM.policy.p17);
        var v163 = outputWindow.document;
        JAM.call(v163.write, v163, ["\n"], JAM.policy.p9);
      }
    } else {
      var v180 = numberPosition$$1 == "right";
      if (v180) {
        var v165 = outputWindow.document;
        var v549 = lineOfText$$1;
        var v550 = adjustNumbering(i$$6, numberingAdjustment);
        var v432 = v549 + v550;
        var v166 = v432 + "\n";
        JAM.call(v165.write, v165, [v166], JAM.policy.p17);
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v551 = complement(lineOfText$$1);
          var v552 = adjustNumbering(i$$6, numberingAdjustment);
          var v433 = v551 + v552;
          var v168 = v433 + "\n";
          JAM.call(v167.write, v167, [v168], JAM.policy.p17);
          var v169 = outputWindow.document;
          JAM.call(v169.write, v169, ["\n"], JAM.policy.p9);
        }
      } else {
        var v179 = numberPosition$$1 == "above";
        if (v179) {
          var v171 = outputWindow.document;
          var v172 = aboveNum + "\n";
          JAM.call(v171.write, v171, [v172], JAM.policy.p17);
          var v173 = outputWindow.document;
          var v174 = lineOfText$$1 + "\n";
          JAM.call(v173.write, v173, [v174], JAM.policy.p17);
          var v178 = strands$$1 == "two";
          if (v178) {
            var v175 = outputWindow.document;
            var v434 = complement(lineOfText$$1);
            var v176 = v434 + "\n";
            JAM.call(v175.write, v175, [v176], JAM.policy.p17);
            var v177 = outputWindow.document;
            JAM.call(v177.write, v177, ["\n"], JAM.policy.p9);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v182 = i$$6 < stopBase$$2;
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
  var v201 = i$$7 < stopBase$$3;
  for (;v201;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v435 = basePerLine$$3 / groupSize$$3;
    var v189 = j$$8 <= v435;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        var v436 = i$$7 + k$$2;
        var v183 = v436 >= stopBase$$3;
        if (v183) {
          break;
        }
        var v437 = k$$2 + i$$7;
        var v184 = JAM.call(text$$13.charAt, text$$13, [v437], JAM.policy.p17);
        lineOfText$$2 = lineOfText$$2 + v184;
        k$$2 = k$$2 + 1;
        v185 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v187 = numberPosition$$2 == "above";
      if (v187) {
        var v186 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v186;
      }
      var v188 = i$$7 >= stopBase$$3;
      if (v188) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v438 = basePerLine$$3 / groupSize$$3;
      v189 = j$$8 <= v438;
    }
    var v200 = numberPosition$$2 == "left";
    if (v200) {
      var v190 = outputWindow.document;
      var v553 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v439 = v553 + lineOfText$$2;
      var v191 = v439 + "\n";
      JAM.call(v190.write, v190, [v191], JAM.policy.p17);
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v440 = lineOfText$$2 + i$$7;
        var v193 = v440 + "\n";
        JAM.call(v192.write, v192, [v193], JAM.policy.p17);
      } else {
        var v198 = numberPosition$$2 == "above";
        if (v198) {
          var v194 = outputWindow.document;
          var v195 = aboveNum$$1 + "\n";
          JAM.call(v194.write, v194, [v195], JAM.policy.p17);
          var v196 = outputWindow.document;
          var v197 = lineOfText$$2 + "\n";
          JAM.call(v196.write, v196, [v197], JAM.policy.p17);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v201 = i$$7 < stopBase$$3;
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
  var v617 = sequence$$13.length;
  var v554 = v617 <= firstIndexToMutate;
  var v618 = !v554;
  if (v618) {
    v554 = lastIndexToMutate < 0;
  }
  var v441 = v554;
  var v555 = !v441;
  if (v555) {
    v441 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v202 = v441;
  if (v202) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    var v442 = Math.random();
    var v203 = v442 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v203], JAM.policy.p16);
    var v443 = randNum < firstIndexToMutate;
    var v556 = !v443;
    if (v556) {
      v443 = randNum > lastIndexToMutate;
    }
    var v204 = v443;
    if (v204) {
      numMut++;
      i$$8++;
      v210 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p16);
    needNewChar = true;
    for (;needNewChar;) {
      var v444 = Math.random();
      var v445 = components$$1.length;
      var v205 = v444 * v445;
      componentsIndex = JAM.call(Math.round, Math, [v205], JAM.policy.p16);
      var v446 = components$$1.length;
      var v206 = componentsIndex == v446;
      if (v206) {
        componentsIndex = 0;
      }
      var v447 = components$$1[componentsIndex];
      var v207 = v447 != currentChar;
      if (v207) {
        needNewChar = false;
      }
    }
    var v448 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v449 = components$$1[componentsIndex];
    var v208 = v448 + v449;
    var v450 = randNum + 1;
    var v451 = sequence$$13.length;
    var v209 = JAM.call(sequence$$13.substring, sequence$$13, [v450, v451], JAM.policy.p27);
    sequence$$13 = v208 + v209;
    i$$8++;
    v210 = i$$8 < numMut;
  }
  var v211 = outputWindow.document;
  var v212 = addReturns(sequence$$13);
  JAM.call(v211.write, v211, [v212], JAM.policy.p17);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v217 = j$$9 < lengthOut$$1;
  for (;v217;) {
    var v452 = Math.random();
    var v453 = components$$2.length;
    var v213 = v452 * v453;
    tempNum$$1 = JAM.call(Math.floor, Math, [v213], JAM.policy.p16);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v454 = sequence$$14.length;
    var v216 = v454 == 60;
    if (v216) {
      var v214 = outputWindow.document;
      var v215 = sequence$$14 + "\n";
      JAM.call(v214.write, v214, [v215], JAM.policy.p17);
      sequence$$14 = "";
    }
    j$$9++;
    v217 = j$$9 < lengthOut$$1;
  }
  var v218 = outputWindow.document;
  var v219 = sequence$$14 + "\n";
  JAM.call(v218.write, v218, [v219], JAM.policy.p17);
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
  var v223 = dnaConformation == "circular";
  if (v223) {
    var v220 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v220.length;
    var v619 = sequence$$15.length;
    var v557 = v619 - lookAhead;
    var v558 = sequence$$15.length;
    var v455 = JAM.call(sequence$$15.substring, sequence$$15, [v557, v558], JAM.policy.p27);
    var v221 = v455 + sequence$$15;
    var v222 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v221 + v222;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  JAM.call(v224.write, v224, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v225 = outputWindow.document;
  var v620 = '<tr><td class="title" width="200px">' + "Site:";
  var v559 = v620 + '</td><td class="title">';
  var v456 = v559 + "Positions:";
  var v226 = v456 + "</td></tr>\n";
  JAM.call(v225.write, v225, [v226], JAM.policy.p17);
  var i$$9 = 0;
  var v457 = arrayOfItems.length;
  var v242 = i$$9 < v457;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v458 = arrayOfItems[i$$9];
    var v227 = JAM.call(v458.match, v458, [/\/.+\//], JAM.policy.p16);
    matchExp = v227 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v621 = arrayOfItems[i$$9];
    var v560 = JAM.call(v621.match, v621, [/\)\D*\d+/], JAM.policy.p16);
    var v459 = v560.toString();
    var v228 = JAM.call(v459.replace, v459, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v228);
    var v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v234;) {
      var v229 = matchExp.lastIndex;
      matchPosition = v229 - cutDistance;
      var v460 = matchPosition >= lowerLimit;
      if (v460) {
        v460 = matchPosition < upperLimit;
      }
      var v232 = v460;
      if (v232) {
        timesFound++;
        var v230 = tempString$$1 + ", ";
        var v461 = matchPosition - shiftValue;
        var v231 = v461 + 1;
        tempString$$1 = v230 + v231;
      }
      var v462 = matchExp.lastIndex;
      var v561 = RegExp.lastMatch;
      var v463 = v561.length;
      var v233 = v462 - v463;
      matchExp.lastIndex = v233 + 1;
      v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v464 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p16);
    var v235 = v464 != -1;
    if (v235) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p15);
    }
    var v239 = timesFound == 0;
    if (v239) {
      backGroundClass = "none";
    } else {
      var v238 = timesFound == 1;
      if (v238) {
        backGroundClass = "one";
      } else {
        var v237 = timesFound == 2;
        if (v237) {
          backGroundClass = "two";
        } else {
          var v236 = timesFound == 3;
          if (v236) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v240 = outputWindow.document;
    var v731 = '<tr><td class="' + backGroundClass;
    var v710 = v731 + '">';
    var v755 = arrayOfItems[i$$9];
    var v745 = JAM.call(v755.match, v755, [/\([^\(]+\)/], JAM.policy.p16);
    var v732 = v745.toString();
    var v711 = JAM.call(v732.replace, v732, [/\(|\)/g, ""], JAM.policy.p15);
    var v689 = v710 + v711;
    var v663 = v689 + '</td><td class="';
    var v622 = v663 + backGroundClass;
    var v562 = v622 + '">';
    var v465 = v562 + tempString$$1;
    var v241 = v465 + "</td></tr>\n";
    JAM.call(v240.write, v240, [v241], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v466 = arrayOfItems.length;
    v242 = i$$9 < v466;
  }
  var v243 = outputWindow.document;
  JAM.call(v243.write, v243, ["</tbody></table>\n"], JAM.policy.p9);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v244 = outputWindow.document;
  JAM.call(v244.write, v244, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v245 = outputWindow.document;
  var v690 = '<tr><td class="title">' + "Pattern:";
  var v664 = v690 + '</td><td class="title">';
  var v623 = v664 + "Times found:";
  var v563 = v623 + '</td><td class="title">';
  var v467 = v563 + "Percentage:";
  var v246 = v467 + "</td></tr>\n";
  JAM.call(v245.write, v245, [v246], JAM.policy.p17);
  var i$$10 = 0;
  var v468 = arrayOfItems$$1.length;
  var v255 = i$$10 < v468;
  for (;v255;) {
    var tempNumber = 0;
    var v469 = arrayOfItems$$1[i$$10];
    var v247 = JAM.call(v469.match, v469, [/\/[^\/]+\//], JAM.policy.p16);
    var matchExp$$1 = v247 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v470 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v249 = v470 != -1;
    if (v249) {
      var v248 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v564 = originalLength + 1;
    var v665 = arrayOfItems$$1[i$$10];
    var v624 = JAM.call(v665.match, v665, [/\d+/], JAM.policy.p16);
    var v565 = parseFloat(v624);
    var v471 = v564 - v565;
    var v252 = v471 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v472 = originalLength + 1;
      var v625 = arrayOfItems$$1[i$$10];
      var v566 = JAM.call(v625.match, v625, [/\d+/], JAM.policy.p16);
      var v473 = parseFloat(v566);
      var v251 = v472 - v473;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v756 = arrayOfItems$$1[i$$10];
    var v746 = JAM.call(v756.match, v756, [/\([^\(]+\)\b/], JAM.policy.p16);
    var v733 = v746.toString();
    var v712 = JAM.call(v733.replace, v733, [/\(|\)/g, ""], JAM.policy.p15);
    var v691 = "<tr><td>" + v712;
    var v666 = v691 + "</td><td>";
    var v626 = v666 + tempNumber;
    var v567 = v626 + "</td><td>";
    var v568 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p11);
    var v474 = v567 + v568;
    var v254 = v474 + "</td></tr>\n";
    JAM.call(v253.write, v253, [v254], JAM.policy.p17);
    i$$10++;
    var v475 = arrayOfItems$$1.length;
    v255 = i$$10 < v475;
  }
  var v256 = outputWindow.document;
  JAM.call(v256.write, v256, ["</tbody></table>\n"], JAM.policy.p9);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v476 = sequence$$17.length;
  var v263 = v476 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v477 = Math.random();
    var v257 = v477 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v257], JAM.policy.p16);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p16);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v258 = randNum$$1 + 1;
    var v259 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v258, v259], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v478 = tempSeq.length;
    var v262 = v478 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      JAM.call(v260.write, v260, [v261], JAM.policy.p17);
      tempSeq = "";
    }
    var v479 = sequence$$17.length;
    v263 = v479 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  JAM.call(v264.write, v264, [v265], JAM.policy.p17);
  return true;
}
function proteinIep(theDocument) {
  var newProtein = "";
  var maxInput$$3 = 2E5;
  var v480 = testScript();
  var v266 = v480 == false;
  if (v266) {
    return false;
  }
  var v713 = theDocument.forms;
  var v692 = v713[0];
  var v667 = v692.elements;
  var v627 = v667[0];
  var v569 = checkFormElement(v627);
  var v481 = v569 == false;
  var v571 = !v481;
  if (v571) {
    var v734 = theDocument.forms;
    var v714 = v734[0];
    var v693 = v714.elements;
    var v668 = v693[0];
    var v628 = v668.value;
    var v570 = checkSequenceLength(v628, maxInput$$3);
    v481 = v570 == false;
  }
  var v267 = v481;
  if (v267) {
    return false;
  }
  openWindow("Protein Isoelectric Point");
  var v669 = theDocument.forms;
  var v629 = v669[0];
  var v572 = v629.elements;
  var v482 = v572[0];
  var v268 = v482.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v268);
  var i$$11 = 0;
  var v483 = arrayOfFasta$$1.length;
  var v277 = i$$11 < v483;
  for (;v277;) {
    var v269 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v269);
    var v270 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v270);
    newProtein = removeNonProteinStrict(newProtein);
    var v271 = outputWindow.document;
    var v272 = getInfoFromTitleAndSequence(title, newProtein);
    JAM.call(v271.write, v271, [v272], JAM.policy.p17);
    var v715 = theDocument.forms;
    var v694 = v715[0];
    var v670 = v694.elements;
    var v630 = v670[4];
    var v573 = v630.options;
    var v716 = theDocument.forms;
    var v695 = v716[0];
    var v671 = v695.elements;
    var v631 = v671[4];
    var v574 = v631.selectedIndex;
    var v484 = v573[v574];
    var v273 = v484.value;
    var v717 = theDocument.forms;
    var v696 = v717[0];
    var v672 = v696.elements;
    var v632 = v672[5];
    var v575 = v632.options;
    var v718 = theDocument.forms;
    var v697 = v718[0];
    var v673 = v697.elements;
    var v633 = v673[5];
    var v576 = v633.selectedIndex;
    var v485 = v575[v576];
    var v274 = v485.value;
    var v719 = theDocument.forms;
    var v698 = v719[0];
    var v674 = v698.elements;
    var v634 = v674[6];
    var v577 = v634.options;
    var v720 = theDocument.forms;
    var v699 = v720[0];
    var v675 = v699.elements;
    var v635 = v675[6];
    var v578 = v635.selectedIndex;
    var v486 = v577[v578];
    var v275 = v486.value;
    writeProtIep(newProtein, v273, v274, v275);
    var v276 = outputWindow.document;
    JAM.call(v276.write, v276, ["<br />\n<br />\n"], JAM.policy.p9);
    i$$11++;
    var v487 = arrayOfFasta$$1.length;
    v277 = i$$11 < v487;
  }
  closeWindow();
  return true;
}
function writeProtIep(proteinSequence$$1, copies, fusion, pKSet) {
  var pH = 7;
  var step = 3.5;
  var charge = 0;
  var last_charge = 0;
  copies = parseInt(copies);
  var j$$10 = 0;
  var v278 = j$$10 < copies;
  for (;v278;) {
    proteinSequence$$1 = proteinSequence$$1 + fusion;
    j$$10++;
    v278 = j$$10 < copies;
  }
  var N_term_pK;
  var K_pK;
  var R_pK;
  var H_pK;
  var D_pK;
  var E_pK;
  var C_pK;
  var Y_pK;
  var C_term_pK;
  var v488 = pKSet.toLowerCase();
  var v279 = v488 == "dtaselect";
  if (v279) {
    N_term_pK = 8;
    K_pK = 10;
    R_pK = 12;
    H_pK = 6.5;
    D_pK = 4.4;
    E_pK = 4.4;
    C_pK = 8.5;
    Y_pK = 10;
    C_term_pK = 3.1;
  } else {
    N_term_pK = 8.6;
    K_pK = 10.8;
    R_pK = 12.5;
    H_pK = 6.5;
    D_pK = 3.9;
    E_pK = 4.1;
    C_pK = 8.5;
    Y_pK = 10.1;
    C_term_pK = 3.6;
  }
  var K_count = 0;
  var v489 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/k/i], JAM.policy.p16);
  var v281 = v489 != -1;
  if (v281) {
    var v280 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/k/gi], JAM.policy.p16);
    K_count = v280.length;
  }
  var R_count = 0;
  var v490 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/r/i], JAM.policy.p16);
  var v283 = v490 != -1;
  if (v283) {
    var v282 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/r/gi], JAM.policy.p16);
    R_count = v282.length;
  }
  var H_count = 0;
  var v491 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/h/i], JAM.policy.p16);
  var v285 = v491 != -1;
  if (v285) {
    var v284 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/h/gi], JAM.policy.p16);
    H_count = v284.length;
  }
  var D_count = 0;
  var v492 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/d/i], JAM.policy.p16);
  var v287 = v492 != -1;
  if (v287) {
    var v286 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/d/gi], JAM.policy.p16);
    D_count = v286.length;
  }
  var E_count = 0;
  var v493 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/e/i], JAM.policy.p16);
  var v289 = v493 != -1;
  if (v289) {
    var v288 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/e/gi], JAM.policy.p16);
    E_count = v288.length;
  }
  var C_count = 0;
  var v494 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/c/i], JAM.policy.p16);
  var v291 = v494 != -1;
  if (v291) {
    var v290 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/c/gi], JAM.policy.p16);
    C_count = v290.length;
  }
  var Y_count = 0;
  var v495 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/y/i], JAM.policy.p16);
  var v293 = v495 != -1;
  if (v293) {
    var v292 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/y/gi], JAM.policy.p16);
    Y_count = v292.length;
  }
  for (;1;) {
    var v735 = partial_charge(N_term_pK, pH);
    var v747 = partial_charge(K_pK, pH);
    var v736 = K_count * v747;
    var v721 = v735 + v736;
    var v737 = partial_charge(R_pK, pH);
    var v722 = R_count * v737;
    var v700 = v721 + v722;
    var v723 = partial_charge(H_pK, pH);
    var v701 = H_count * v723;
    var v676 = v700 + v701;
    var v702 = partial_charge(pH, D_pK);
    var v677 = D_count * v702;
    var v636 = v676 - v677;
    var v678 = partial_charge(pH, E_pK);
    var v637 = E_count * v678;
    var v579 = v636 - v637;
    var v638 = partial_charge(pH, C_pK);
    var v580 = C_count * v638;
    var v496 = v579 - v580;
    var v581 = partial_charge(pH, Y_pK);
    var v497 = Y_count * v581;
    var v294 = v496 - v497;
    var v295 = partial_charge(pH, C_term_pK);
    charge = v294 - v295;
    var v498 = JAM.call(charge.toFixed, charge, [2], JAM.policy.p11);
    var v582 = last_charge * 100;
    var v499 = JAM.call(v582.toFixed, v582, [2], JAM.policy.p11);
    var v296 = v498 == v499;
    if (v296) {
      break;
    }
    var v297 = charge > 0;
    if (v297) {
      pH = pH + step;
    } else {
      pH = pH - step;
    }
    step = step / 2;
    last_charge = charge;
  }
  pH = JAM.call(pH.toFixed, pH, [2], JAM.policy.p11);
  var v298 = outputWindow.document;
  var v299 = "pH " + pH;
  JAM.call(v298.write, v298, [v299], JAM.policy.p17);
  return true;
}
function partial_charge(first$$1, second) {
  var v300 = first$$1 - second;
  var charge$$1 = JAM.call(Math.pow, Math, [10, v300], JAM.policy.p13);
  var v301 = charge$$1 + 1;
  return charge$$1 / v301;
}
JAM.set(document, "onload", v2);
var v302 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9);
JAM.set(v302, "onclick", v3);
var v303 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9);
JAM.set(v303, "onclick", v4)
