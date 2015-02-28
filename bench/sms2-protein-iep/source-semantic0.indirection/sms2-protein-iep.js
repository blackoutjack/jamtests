function v4() {
  var v580 = document.forms;
  var v498 = v580[0];
  var v302 = v498.elements;
  var v5 = v302[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    proteinIep();
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v303 = document.main_form;
  var v7 = v303.main_submit;
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
  var v304 = arrayOfSequences.length;
  var v9 = v304 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v305 = arrayOfTitles.length;
  var v11 = i$$1 < v305;
  for (;v11;) {
    var v636 = arrayOfTitles[i$$1];
    var v581 = JAM.call(v636.search, v636, [/\S/], JAM.policy.p16);
    var v499 = v581 == -1;
    var v583 = !v499;
    if (v583) {
      var v637 = arrayOfSequences[i$$1];
      var v582 = JAM.call(v637.search, v637, [/\S/], JAM.policy.p16);
      v499 = v582 == -1;
    }
    var v306 = v499;
    var v501 = !v306;
    if (v501) {
      var v584 = arrayOfSequences[i$$1];
      var v500 = v584.length;
      v306 = v500 != lengthOfAlign;
    }
    var v10 = v306;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v307 = arrayOfTitles.length;
    v11 = i$$1 < v307;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v676 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p16);
  var v638 = v676 == -1;
  var v678 = !v638;
  if (v678) {
    var v677 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p16);
    v638 = v677 == -1;
  }
  var v585 = v638;
  var v640 = !v585;
  if (v640) {
    var v639 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p16);
    v585 = v639 == -1;
  }
  var v502 = v585;
  var v587 = !v502;
  if (v587) {
    var v586 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p16);
    v502 = v586 == -1;
  }
  var v308 = v502;
  var v504 = !v308;
  if (v504) {
    var v503 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p16);
    v308 = v503 == -1;
  }
  var v12 = v308;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v505 = formElement.value;
  var v309 = JAM.call(v505.search, v505, [/\S/], JAM.policy.p16);
  var v13 = v309 == -1;
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
  var v310 = arrayOfPatterns.length;
  var v16 = z$$2 < v310;
  for (;v16;) {
    var v506 = arrayOfPatterns[z$$2];
    var v311 = JAM.call(v506.search, v506, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p16);
    var v14 = v311 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v507 = arrayOfPatterns[z$$2];
    var v312 = moreExpressionCheck(v507);
    var v15 = v312 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v313 = arrayOfPatterns.length;
    v16 = z$$2 < v313;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v314 = arrayOfPatterns.length;
  var v22 = j < v314;
  for (;v22;) {
    var v508 = arrayOfPatterns[j];
    var v315 = JAM.call(v508.match, v508, [/\/.+\//], JAM.policy.p16);
    var v19 = v315 + "gi";
    if (JAM.isEval(eval)) {
      var v783 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v783 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v783;
    var v316 = arrayOfPatterns[j];
    var v20 = JAM.call(v316.match, v316, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v784 = v20.toString();
    geneticCodeMatchResult[j] = v784;
    var v21 = geneticCodeMatchResult[j];
    var v785 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v785;
    j++;
    var v317 = arrayOfPatterns.length;
    v22 = j < v317;
  }
  var i$$2 = 0;
  var v509 = testSequence.length;
  var v318 = v509 - 3;
  var v29 = i$$2 <= v318;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p15);
    j = 0;
    var v319 = geneticCodeMatchExp.length;
    var v27 = j < v319;
    for (;v27;) {
      var v510 = geneticCodeMatchExp[j];
      var v320 = JAM.call(codon.search, codon, [v510], JAM.policy.p17);
      var v26 = v320 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v321 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v321 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v322 = geneticCodeMatchExp.length;
      v27 = j < v322;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v511 = testSequence.length;
    var v323 = v511 - 3;
    v29 = i$$2 <= v323;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v324 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v324;
  for (;v31;) {
    var v512 = arrayOfPatterns$$1[z$$3];
    var v325 = JAM.call(v512.search, v512, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p16);
    var v30 = v325 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v326 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v326;
  }
  var i$$3 = 0;
  var v327 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v327;
  for (;v35;) {
    var v513 = arrayOfPatterns$$1[i$$3];
    var v328 = "[" + v513;
    var v32 = v328 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v329 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v329;
    for (;v34;) {
      var v514 = arrayOfPatterns$$1[j$$1];
      var v330 = JAM.call(v514.search, v514, [re], JAM.policy.p17);
      var v33 = v330 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v331 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v331;
    }
    i$$3++;
    var v332 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v332;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v333 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v333;
  for (;v38;) {
    var v515 = arrayOfPatterns$$2[z$$4];
    var v334 = JAM.call(v515.search, v515, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p16);
    var v36 = v334 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v516 = arrayOfPatterns$$2[z$$4];
    var v335 = moreExpressionCheck(v516);
    var v37 = v335 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v336 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v336;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v588 = getSequenceFromFasta(text$$7);
  var v517 = JAM.call(v588.replace, v588, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v337 = v517.length;
  var v40 = v337 > maxInput;
  if (v40) {
    var v338 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v338 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v339 = text$$8.length;
  var v42 = v339 > maxInput$$1;
  if (v42) {
    var v340 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v340 + " characters.";
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
  var v341 = alignArray.length;
  var v49 = v341 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v342 = alignArray.length;
  var v51 = i$$4 < v342;
  for (;v51;) {
    var v518 = alignArray[i$$4];
    var v343 = JAM.call(v518.search, v518, [/[^\s]+\s/], JAM.policy.p16);
    var v50 = v343 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v344 = alignArray.length;
    v51 = i$$4 < v344;
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
  var v345 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v54 = v345 != -1;
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
  var v346 = sequence$$2.length;
  var v55 = "&gt;results for " + v346;
  var stringToReturn = v55 + " residue sequence ";
  var v347 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p16);
  var v57 = v347 != -1;
  if (v57) {
    var v348 = stringToReturn + '"';
    var v56 = v348 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v349 = stringToReturn + ' starting "';
  var v350 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v349 + v350;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v351 = sequenceOne.length;
  var v59 = "Search results for " + v351;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v352 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p16);
  var v61 = v352 != -1;
  if (v61) {
    var v353 = stringToReturn$$1 + '"';
    var v60 = v353 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v354 = stringToReturn$$1 + ' starting "';
  var v355 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v354 + v355;
  stringToReturn$$1 = v62 + '"\n';
  var v356 = stringToReturn$$1 + "and ";
  var v357 = sequenceTwo.length;
  var v63 = v356 + v357;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v358 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p16);
  var v65 = v358 != -1;
  if (v65) {
    var v359 = stringToReturn$$1 + '"';
    var v64 = v359 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v360 = stringToReturn$$1 + ' starting "';
  var v361 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v66 = v360 + v361;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v362 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v362;
  for (;v70;) {
    var v519 = arrayOfPatterns$$3[j$$2];
    var v363 = JAM.call(v519.match, v519, [/\/.+\//], JAM.policy.p16);
    var v69 = v363 + "gi";
    if (JAM.isEval(eval)) {
      var v786 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v786 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v786;
    j$$2++;
    var v364 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v364;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v365 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v365;
  for (;v74;) {
    var v366 = arrayOfPatterns$$4[j$$3];
    var v72 = JAM.call(v366.match, v366, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v787 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v787;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v788 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v788;
    j$$3++;
    var v367 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v367;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(sequence$$3) {
  var fastaSequenceTitle$$1 = title;
  var v368 = sequence$$3.length;
  var v75 = "Results for " + v368;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v369 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p16);
  var v77 = v369 != -1;
  if (v77) {
    var v370 = stringToReturn$$2 + '"';
    var v76 = v370 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v371 = stringToReturn$$2 + ' starting "';
  var v372 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v78 = v371 + v372;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v520 = "Results for " + topology;
  var v373 = v520 + " ";
  var v374 = sequence$$4.length;
  var v80 = v373 + v374;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v375 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p16);
  var v82 = v375 != -1;
  if (v82) {
    var v376 = stringToReturn$$3 + '"';
    var v81 = v376 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v377 = stringToReturn$$3 + ' starting "';
  var v378 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v377 + v378;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v379 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v379;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v380 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p16);
  var v87 = v380 != -1;
  if (v87) {
    var v381 = stringToReturn$$4 + '"';
    var v86 = v381 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v382 = stringToReturn$$4 + ' starting "';
  var v383 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v382 + v383;
  stringToReturn$$4 = v88 + '"\n';
  var v384 = stringToReturn$$4 + "and ";
  var v385 = sequenceTwo$$1.length;
  var v89 = v384 + v385;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v386 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p16);
  var v91 = v386 != -1;
  if (v91) {
    var v387 = stringToReturn$$4 + '"';
    var v90 = v387 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v388 = stringToReturn$$4 + ' starting "';
  var v389 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v92 = v388 + v389;
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
    var v390 = Math.random();
    var v391 = components.length;
    var v94 = v390 * v391;
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p16);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p11);
}
function getSequenceFromFasta(sequenceRecord) {
  var v392 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v96 = v392 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v393 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v98 = v393 != -1;
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
  var v761 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p16);
  var v754 = v761 != -1;
  var v763 = !v754;
  if (v763) {
    var v762 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p16);
    v754 = v762 != -1;
  }
  var v745 = v754;
  var v756 = !v745;
  if (v756) {
    var v755 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p16);
    v745 = v755 != -1;
  }
  var v735 = v745;
  var v747 = !v735;
  if (v747) {
    var v746 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p16);
    v735 = v746 != -1;
  }
  var v721 = v735;
  var v737 = !v721;
  if (v737) {
    var v736 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p16);
    v721 = v736 != -1;
  }
  var v700 = v721;
  var v723 = !v700;
  if (v723) {
    var v722 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p16);
    v700 = v722 != -1;
  }
  var v679 = v700;
  var v702 = !v679;
  if (v702) {
    var v701 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p16);
    v679 = v701 != -1;
  }
  var v641 = v679;
  var v681 = !v641;
  if (v681) {
    var v680 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p16);
    v641 = v680 != -1;
  }
  var v589 = v641;
  var v643 = !v589;
  if (v643) {
    var v642 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p16);
    v589 = v642 != -1;
  }
  var v521 = v589;
  var v591 = !v521;
  if (v591) {
    var v590 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p16);
    v521 = v590 != -1;
  }
  var v394 = v521;
  var v523 = !v394;
  if (v523) {
    var v522 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p16);
    v394 = v522 != -1;
  }
  var v99 = v394;
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
function openWindow() {
  var title$$6 = "Protein Isoelectric Point";
  _openWindow(title$$6);
  return;
}
function _openWindow(title$$7) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v592 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v524 = v592 + "<head>\n";
  var v395 = v524 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v395 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p17);
  if (isColor) {
    var v106 = outputWindow.document;
    var v776 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v772 = v776 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v768 = v772 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v764 = v768 + "div.info {font-weight: bold}\n";
    var v757 = v764 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v748 = v757 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v738 = v748 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v724 = v738 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v703 = v724 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v682 = v703 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v644 = v682 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v593 = v644 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v525 = v593 + "td.many {color: #000000}\n";
    var v396 = v525 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v396 + "</style>\n";
    JAM.call(v106.write, v106, [v107], JAM.policy.p17);
  } else {
    var v108 = outputWindow.document;
    var v780 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v777 = v780 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v773 = v777 + "div.title {display: none}\n";
    var v769 = v773 + "div.info {font-weight: bold}\n";
    var v765 = v769 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v758 = v765 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v749 = v758 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v739 = v749 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v725 = v739 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v704 = v725 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v683 = v704 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v645 = v683 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v594 = v645 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v526 = v594 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v397 = v526 + "img {display: none}\n";
    var v109 = v397 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p17);
  }
  var v110 = outputWindow.document;
  var v595 = "</head>\n" + '<body class="main">\n';
  var v527 = v595 + '<div class="title">';
  var v398 = v527 + title$$7;
  var v111 = v398 + " results</div>\n";
  JAM.call(v110.write, v110, [v111], JAM.policy.p17);
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
  var v112 = outputWindow.document;
  var v596 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v528 = v596 + "<head>\n";
  var v399 = v528 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v399 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p17);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v778 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v774 = v778 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v770 = v774 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v766 = v770 + "div.info {font-weight: bold}\n";
    var v759 = v766 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v750 = v759 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v740 = v750 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v726 = v740 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v705 = v726 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v684 = v705 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v646 = v684 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v597 = v646 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v529 = v597 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v400 = v529 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v400 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p17);
  } else {
    var v116 = outputWindow.document;
    var v782 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v781 = v782 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v779 = v781 + "div.title {display: none}\n";
    var v775 = v779 + "div.info {font-weight: bold}\n";
    var v771 = v775 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v767 = v771 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v760 = v767 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v751 = v760 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v741 = v751 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v727 = v741 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v706 = v727 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v685 = v706 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v647 = v685 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v598 = v647 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v530 = v598 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v401 = v530 + "img {display: none}\n";
    var v117 = v401 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p17);
  }
  var v118 = outputWindow.document;
  var v599 = "</head>\n" + '<body class="main">\n';
  var v531 = v599 + '<div class="title">';
  var v402 = v531 + title$$9;
  var v119 = v402 + " results</div>\n";
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
  var v403 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p16);
  var v120 = v403 != -1;
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
  var v404 = testArray[0];
  var v124 = v404 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v405 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v125 = v405 == -1;
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
  var v406 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p10);
  var v128 = v406 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v407 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p10);
  var v129 = v407 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v408 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p16);
  var v130 = v408 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v648 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p16);
  var v600 = v648 == -1;
  var v650 = !v600;
  if (v650) {
    var v649 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p16);
    v600 = v649 == -1;
  }
  var v532 = v600;
  var v602 = !v532;
  if (v602) {
    var v601 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p16);
    v532 = v601 == -1;
  }
  var v409 = v532;
  var v534 = !v409;
  if (v534) {
    var v533 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p16);
    v409 = v533 == -1;
  }
  var v131 = v409;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v410 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p16);
  var v132 = v410 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v411 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v411 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v412 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p16);
  var v135 = v412 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v413 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p16);
  var v136 = v413 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v651 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p16);
  var v603 = v651 == -1;
  var v653 = !v603;
  if (v653) {
    var v652 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p16);
    v603 = v652 == -1;
  }
  var v535 = v603;
  var v605 = !v535;
  if (v605) {
    var v604 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p16);
    v535 = v604 == -1;
  }
  var v414 = v535;
  var v537 = !v414;
  if (v537) {
    var v536 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p16);
    v414 = v536 == -1;
  }
  var v137 = v414;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v654 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p16);
  var v606 = v654 == -1;
  var v656 = !v606;
  if (v656) {
    var v655 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p16);
    v606 = v655 == -1;
  }
  var v538 = v606;
  var v608 = !v538;
  if (v608) {
    var v607 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p16);
    v538 = v607 == -1;
  }
  var v415 = v538;
  var v540 = !v415;
  if (v540) {
    var v539 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p16);
    v415 = v539 == -1;
  }
  var v138 = v415;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v416 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p16);
  var v139 = v416 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v657 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p16);
  var v609 = v657 == -1;
  var v659 = !v609;
  if (v659) {
    var v658 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p16);
    v609 = v658 == -1;
  }
  var v541 = v609;
  var v611 = !v541;
  if (v611) {
    var v610 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p16);
    v541 = v610 == -1;
  }
  var v417 = v541;
  var v543 = !v417;
  if (v543) {
    var v542 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p16);
    v417 = v542 == -1;
  }
  var v140 = v417;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v418 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p16);
  var v141 = v418 == -1;
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
    var v419 = basePerLine / groupSize;
    var v145 = j$$6 <= v419;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v420 = k + i$$5;
        var v143 = JAM.call(text$$10.charAt, text$$10, [v420], JAM.policy.p17);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v421 = basePerLine / groupSize;
      v145 = j$$6 <= v421;
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
    var v422 = adjustment < 0;
    if (v422) {
      v422 = adjusted >= 0;
    }
    var v149 = v422;
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
    var v423 = basePerLine$$2 / groupSize$$2;
    var v156 = j$$7 <= v423;
    for (;v156;) {
      var v152 = k$$1 < groupSize$$2;
      for (;v152;) {
        var v424 = i$$6 + k$$1;
        var v150 = v424 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v425 = k$$1 + i$$6;
        var v151 = JAM.call(text$$12.charAt, text$$12, [v425], JAM.policy.p17);
        lineOfText$$1 = lineOfText$$1 + v151;
        k$$1 = k$$1 + 1;
        v152 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v154 = numberPosition$$1 == "above";
      if (v154) {
        var v426 = adjustNumbering(i$$6, numberingAdjustment);
        var v153 = rightNum(v426, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v153;
      }
      var v155 = i$$6 >= stopBase$$2;
      if (v155) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v427 = basePerLine$$2 / groupSize$$2;
      v156 = j$$7 <= v427;
    }
    var v179 = numberPosition$$1 == "left";
    if (v179) {
      var v157 = outputWindow.document;
      var v612 = adjustNumbering(lineNum, numberingAdjustment);
      var v544 = rightNum(v612, "", 8, tabIn$$3);
      var v428 = v544 + lineOfText$$1;
      var v158 = v428 + "\n";
      JAM.call(v157.write, v157, [v158], JAM.policy.p17);
      var v162 = strands$$1 == "two";
      if (v162) {
        var v159 = outputWindow.document;
        var v613 = adjustNumbering(lineNum, numberingAdjustment);
        var v545 = rightNum(v613, "", 8, tabIn$$3);
        var v546 = complement(lineOfText$$1);
        var v429 = v545 + v546;
        var v160 = v429 + "\n";
        JAM.call(v159.write, v159, [v160], JAM.policy.p17);
        var v161 = outputWindow.document;
        JAM.call(v161.write, v161, ["\n"], JAM.policy.p11);
      }
    } else {
      var v178 = numberPosition$$1 == "right";
      if (v178) {
        var v163 = outputWindow.document;
        var v547 = adjustNumbering(i$$6, numberingAdjustment);
        var v430 = lineOfText$$1 + v547;
        var v164 = v430 + "\n";
        JAM.call(v163.write, v163, [v164], JAM.policy.p17);
        var v168 = strands$$1 == "two";
        if (v168) {
          var v165 = outputWindow.document;
          var v548 = complement(lineOfText$$1);
          var v549 = adjustNumbering(i$$6, numberingAdjustment);
          var v431 = v548 + v549;
          var v166 = v431 + "\n";
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
            var v432 = complement(lineOfText$$1);
            var v174 = v432 + "\n";
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
    var v433 = basePerLine$$3 / groupSize$$3;
    var v187 = j$$8 <= v433;
    for (;v187;) {
      var v183 = k$$2 < groupSize$$3;
      for (;v183;) {
        var v434 = i$$7 + k$$2;
        var v181 = v434 >= stopBase$$3;
        if (v181) {
          break;
        }
        var v435 = k$$2 + i$$7;
        var v182 = JAM.call(text$$13.charAt, text$$13, [v435], JAM.policy.p17);
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
      var v436 = basePerLine$$3 / groupSize$$3;
      v187 = j$$8 <= v436;
    }
    var v198 = numberPosition$$2 == "left";
    if (v198) {
      var v188 = outputWindow.document;
      var v550 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v437 = v550 + lineOfText$$2;
      var v189 = v437 + "\n";
      JAM.call(v188.write, v188, [v189], JAM.policy.p17);
    } else {
      var v197 = numberPosition$$2 == "right";
      if (v197) {
        var v190 = outputWindow.document;
        var v438 = lineOfText$$2 + i$$7;
        var v191 = v438 + "\n";
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
  var v614 = sequence$$13.length;
  var v551 = v614 <= firstIndexToMutate;
  var v615 = !v551;
  if (v615) {
    v551 = lastIndexToMutate < 0;
  }
  var v439 = v551;
  var v552 = !v439;
  if (v552) {
    v439 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v200 = v439;
  if (v200) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v208 = i$$8 < numMut;
  for (;v208;) {
    maxNum = sequence$$13.length;
    var v440 = Math.random();
    var v201 = v440 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v201], JAM.policy.p16);
    var v441 = randNum < firstIndexToMutate;
    var v553 = !v441;
    if (v553) {
      v441 = randNum > lastIndexToMutate;
    }
    var v202 = v441;
    if (v202) {
      numMut++;
      i$$8++;
      v208 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p16);
    needNewChar = true;
    for (;needNewChar;) {
      var v442 = Math.random();
      var v443 = components$$1.length;
      var v203 = v442 * v443;
      componentsIndex = JAM.call(Math.round, Math, [v203], JAM.policy.p16);
      var v444 = components$$1.length;
      var v204 = componentsIndex == v444;
      if (v204) {
        componentsIndex = 0;
      }
      var v445 = components$$1[componentsIndex];
      var v205 = v445 != currentChar;
      if (v205) {
        needNewChar = false;
      }
    }
    var v446 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v447 = components$$1[componentsIndex];
    var v206 = v446 + v447;
    var v448 = randNum + 1;
    var v449 = sequence$$13.length;
    var v207 = JAM.call(sequence$$13.substring, sequence$$13, [v448, v449], JAM.policy.p27);
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
    var v450 = Math.random();
    var v451 = components$$2.length;
    var v211 = v450 * v451;
    tempNum$$1 = JAM.call(Math.floor, Math, [v211], JAM.policy.p16);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v452 = sequence$$14.length;
    var v214 = v452 == 60;
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
    var v616 = sequence$$15.length;
    var v554 = v616 - lookAhead;
    var v555 = sequence$$15.length;
    var v453 = JAM.call(sequence$$15.substring, sequence$$15, [v554, v555], JAM.policy.p27);
    var v219 = v453 + sequence$$15;
    var v220 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v219 + v220;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v222 = outputWindow.document;
  JAM.call(v222.write, v222, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v223 = outputWindow.document;
  var v617 = '<tr><td class="title" width="200px">' + "Site:";
  var v556 = v617 + '</td><td class="title">';
  var v454 = v556 + "Positions:";
  var v224 = v454 + "</td></tr>\n";
  JAM.call(v223.write, v223, [v224], JAM.policy.p17);
  var i$$9 = 0;
  var v455 = arrayOfItems.length;
  var v240 = i$$9 < v455;
  for (;v240;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v456 = arrayOfItems[i$$9];
    var v225 = JAM.call(v456.match, v456, [/\/.+\//], JAM.policy.p16);
    matchExp = v225 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v618 = arrayOfItems[i$$9];
    var v557 = JAM.call(v618.match, v618, [/\)\D*\d+/], JAM.policy.p16);
    var v457 = v557.toString();
    var v226 = JAM.call(v457.replace, v457, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v226);
    var v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v232;) {
      var v227 = matchExp.lastIndex;
      matchPosition = v227 - cutDistance;
      var v458 = matchPosition >= lowerLimit;
      if (v458) {
        v458 = matchPosition < upperLimit;
      }
      var v230 = v458;
      if (v230) {
        timesFound++;
        var v228 = tempString$$1 + ", ";
        var v459 = matchPosition - shiftValue;
        var v229 = v459 + 1;
        tempString$$1 = v228 + v229;
      }
      var v460 = matchExp.lastIndex;
      var v558 = RegExp.lastMatch;
      var v461 = v558.length;
      var v231 = v460 - v461;
      matchExp.lastIndex = v231 + 1;
      v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v462 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p16);
    var v233 = v462 != -1;
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
    var v728 = '<tr><td class="' + backGroundClass;
    var v707 = v728 + '">';
    var v752 = arrayOfItems[i$$9];
    var v742 = JAM.call(v752.match, v752, [/\([^\(]+\)/], JAM.policy.p16);
    var v729 = v742.toString();
    var v708 = JAM.call(v729.replace, v729, [/\(|\)/g, ""], JAM.policy.p15);
    var v686 = v707 + v708;
    var v660 = v686 + '</td><td class="';
    var v619 = v660 + backGroundClass;
    var v559 = v619 + '">';
    var v463 = v559 + tempString$$1;
    var v239 = v463 + "</td></tr>\n";
    JAM.call(v238.write, v238, [v239], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v464 = arrayOfItems.length;
    v240 = i$$9 < v464;
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
  var v687 = '<tr><td class="title">' + "Pattern:";
  var v661 = v687 + '</td><td class="title">';
  var v620 = v661 + "Times found:";
  var v560 = v620 + '</td><td class="title">';
  var v465 = v560 + "Percentage:";
  var v244 = v465 + "</td></tr>\n";
  JAM.call(v243.write, v243, [v244], JAM.policy.p17);
  var i$$10 = 0;
  var v466 = arrayOfItems$$1.length;
  var v253 = i$$10 < v466;
  for (;v253;) {
    var tempNumber = 0;
    var v467 = arrayOfItems$$1[i$$10];
    var v245 = JAM.call(v467.match, v467, [/\/[^\/]+\//], JAM.policy.p16);
    var matchExp$$1 = v245 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v468 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v247 = v468 != -1;
    if (v247) {
      var v246 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v246.length;
    }
    var percentage = 0;
    var v561 = originalLength + 1;
    var v662 = arrayOfItems$$1[i$$10];
    var v621 = JAM.call(v662.match, v662, [/\d+/], JAM.policy.p16);
    var v562 = parseFloat(v621);
    var v469 = v561 - v562;
    var v250 = v469 > 0;
    if (v250) {
      var v248 = 100 * tempNumber;
      var v470 = originalLength + 1;
      var v622 = arrayOfItems$$1[i$$10];
      var v563 = JAM.call(v622.match, v622, [/\d+/], JAM.policy.p16);
      var v471 = parseFloat(v563);
      var v249 = v470 - v471;
      percentage = v248 / v249;
    }
    var v251 = outputWindow.document;
    var v753 = arrayOfItems$$1[i$$10];
    var v743 = JAM.call(v753.match, v753, [/\([^\(]+\)\b/], JAM.policy.p16);
    var v730 = v743.toString();
    var v709 = JAM.call(v730.replace, v730, [/\(|\)/g, ""], JAM.policy.p15);
    var v688 = "<tr><td>" + v709;
    var v663 = v688 + "</td><td>";
    var v623 = v663 + tempNumber;
    var v564 = v623 + "</td><td>";
    var v565 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p10);
    var v472 = v564 + v565;
    var v252 = v472 + "</td></tr>\n";
    JAM.call(v251.write, v251, [v252], JAM.policy.p17);
    i$$10++;
    var v473 = arrayOfItems$$1.length;
    v253 = i$$10 < v473;
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
  var v474 = sequence$$17.length;
  var v261 = v474 > 0;
  for (;v261;) {
    maxNum$$1 = sequence$$17.length;
    var v475 = Math.random();
    var v255 = v475 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v255], JAM.policy.p16);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p16);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v256 = randNum$$1 + 1;
    var v257 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v256, v257], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v476 = tempSeq.length;
    var v260 = v476 == 60;
    if (v260) {
      var v258 = outputWindow.document;
      var v259 = tempSeq + "\n";
      JAM.call(v258.write, v258, [v259], JAM.policy.p17);
      tempSeq = "";
    }
    var v477 = sequence$$17.length;
    v261 = v477 > 0;
  }
  var v262 = outputWindow.document;
  var v263 = tempSeq + "\n";
  JAM.call(v262.write, v262, [v263], JAM.policy.p17);
  return true;
}
function proteinIep() {
  var theDocument = document;
  var newProtein = "";
  var maxInput$$3 = 2E5;
  var v478 = testScript();
  var v264 = v478 == false;
  if (v264) {
    return;
  }
  var v710 = theDocument.forms;
  var v689 = v710[0];
  var v664 = v689.elements;
  var v624 = v664[0];
  var v566 = checkFormElement(v624);
  var v479 = v566 == false;
  var v568 = !v479;
  if (v568) {
    var v731 = theDocument.forms;
    var v711 = v731[0];
    var v690 = v711.elements;
    var v665 = v690[0];
    var v625 = v665.value;
    var v567 = checkSequenceLength(v625, maxInput$$3);
    v479 = v567 == false;
  }
  var v265 = v479;
  if (v265) {
    return;
  }
  openWindow();
  var v666 = theDocument.forms;
  var v626 = v666[0];
  var v569 = v626.elements;
  var v480 = v569[0];
  var v266 = v480.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v266);
  var i$$11 = 0;
  var v481 = arrayOfFasta$$1.length;
  var v275 = i$$11 < v481;
  for (;v275;) {
    var v267 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v267);
    var v268 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v268);
    newProtein = removeNonProteinStrict(newProtein);
    var v269 = outputWindow.document;
    var v270 = getInfoFromTitleAndSequence(newProtein);
    JAM.call(v269.write, v269, [v270], JAM.policy.p17);
    var v712 = theDocument.forms;
    var v691 = v712[0];
    var v667 = v691.elements;
    var v627 = v667[4];
    var v570 = v627.options;
    var v713 = theDocument.forms;
    var v692 = v713[0];
    var v668 = v692.elements;
    var v628 = v668[4];
    var v571 = v628.selectedIndex;
    var v482 = v570[v571];
    var v271 = v482.value;
    var v714 = theDocument.forms;
    var v693 = v714[0];
    var v669 = v693.elements;
    var v629 = v669[5];
    var v572 = v629.options;
    var v715 = theDocument.forms;
    var v694 = v715[0];
    var v670 = v694.elements;
    var v630 = v670[5];
    var v573 = v630.selectedIndex;
    var v483 = v572[v573];
    var v272 = v483.value;
    var v716 = theDocument.forms;
    var v695 = v716[0];
    var v671 = v695.elements;
    var v631 = v671[6];
    var v574 = v631.options;
    var v717 = theDocument.forms;
    var v696 = v717[0];
    var v672 = v696.elements;
    var v632 = v672[6];
    var v575 = v632.selectedIndex;
    var v484 = v574[v575];
    var v273 = v484.value;
    writeProtIep(newProtein, v271, v272, v273);
    var v274 = outputWindow.document;
    JAM.call(v274.write, v274, ["<br />\n<br />\n"], JAM.policy.p11);
    i$$11++;
    var v485 = arrayOfFasta$$1.length;
    v275 = i$$11 < v485;
  }
  closeWindow();
  return;
}
function writeProtIep(proteinSequence$$1, copies, fusion, pKSet) {
  var pH = 7;
  var step = 3.5;
  var charge = 0;
  var last_charge = 0;
  copies = parseInt(copies);
  var j$$10 = 0;
  var v276 = j$$10 < copies;
  for (;v276;) {
    proteinSequence$$1 = proteinSequence$$1 + fusion;
    j$$10++;
    v276 = j$$10 < copies;
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
  var v486 = pKSet.toLowerCase();
  var v277 = v486 == "dtaselect";
  if (v277) {
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
  var v487 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/k/i], JAM.policy.p16);
  var v279 = v487 != -1;
  if (v279) {
    var v278 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/k/gi], JAM.policy.p16);
    K_count = v278.length;
  }
  var R_count = 0;
  var v488 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/r/i], JAM.policy.p16);
  var v281 = v488 != -1;
  if (v281) {
    var v280 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/r/gi], JAM.policy.p16);
    R_count = v280.length;
  }
  var H_count = 0;
  var v489 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/h/i], JAM.policy.p16);
  var v283 = v489 != -1;
  if (v283) {
    var v282 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/h/gi], JAM.policy.p16);
    H_count = v282.length;
  }
  var D_count = 0;
  var v490 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/d/i], JAM.policy.p16);
  var v285 = v490 != -1;
  if (v285) {
    var v284 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/d/gi], JAM.policy.p16);
    D_count = v284.length;
  }
  var E_count = 0;
  var v491 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/e/i], JAM.policy.p16);
  var v287 = v491 != -1;
  if (v287) {
    var v286 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/e/gi], JAM.policy.p16);
    E_count = v286.length;
  }
  var C_count = 0;
  var v492 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/c/i], JAM.policy.p16);
  var v289 = v492 != -1;
  if (v289) {
    var v288 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/c/gi], JAM.policy.p16);
    C_count = v288.length;
  }
  var Y_count = 0;
  var v493 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/y/i], JAM.policy.p16);
  var v291 = v493 != -1;
  if (v291) {
    var v290 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/y/gi], JAM.policy.p16);
    Y_count = v290.length;
  }
  for (;1;) {
    var v732 = partial_charge(N_term_pK, pH);
    var v744 = partial_charge(K_pK, pH);
    var v733 = K_count * v744;
    var v718 = v732 + v733;
    var v734 = partial_charge(R_pK, pH);
    var v719 = R_count * v734;
    var v697 = v718 + v719;
    var v720 = partial_charge(H_pK, pH);
    var v698 = H_count * v720;
    var v673 = v697 + v698;
    var v699 = partial_charge(pH, D_pK);
    var v674 = D_count * v699;
    var v633 = v673 - v674;
    var v675 = partial_charge(pH, E_pK);
    var v634 = E_count * v675;
    var v576 = v633 - v634;
    var v635 = partial_charge(pH, C_pK);
    var v577 = C_count * v635;
    var v494 = v576 - v577;
    var v578 = partial_charge(pH, Y_pK);
    var v495 = Y_count * v578;
    var v292 = v494 - v495;
    var v293 = partial_charge(pH, C_term_pK);
    charge = v292 - v293;
    var v496 = JAM.call(charge.toFixed, charge, [2], JAM.policy.p10);
    var v579 = last_charge * 100;
    var v497 = JAM.call(v579.toFixed, v579, [2], JAM.policy.p10);
    var v294 = v496 == v497;
    if (v294) {
      break;
    }
    var v295 = charge > 0;
    if (v295) {
      pH = pH + step;
    } else {
      pH = pH - step;
    }
    step = step / 2;
    last_charge = charge;
  }
  pH = JAM.call(pH.toFixed, pH, [2], JAM.policy.p10);
  var v296 = outputWindow.document;
  var v297 = "pH " + pH;
  JAM.call(v296.write, v296, [v297], JAM.policy.p17);
  return;
}
function partial_charge(first$$1, second) {
  var v298 = first$$1 - second;
  var charge$$1 = JAM.call(Math.pow, Math, [10, v298], JAM.policy.p13);
  var v299 = charge$$1 + 1;
  return charge$$1 / v299;
}
JAM.set(document, "onload", v2);
var v300 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11);
JAM.set(v300, "onclick", v3);
var v301 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11);
JAM.set(v301, "onclick", v4)
