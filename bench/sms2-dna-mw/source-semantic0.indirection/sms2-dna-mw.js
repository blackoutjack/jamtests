function v4() {
  var v591 = document.forms;
  var v506 = v591[0];
  var v311 = v506.elements;
  var v5 = v311[0];
  v5.value = " ";
  var v592 = document.forms;
  var v507 = v592[0];
  var v312 = v507.elements;
  var v6 = v312[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    dnaMw();
  } catch (e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7);
  }
  return;
}
function v2() {
  var v313 = document.main_form;
  var v8 = v313.main_submit;
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
  var v314 = arrayOfSequences.length;
  var v10 = v314 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v315 = arrayOfTitles.length;
  var v12 = i$$1 < v315;
  for (;v12;) {
    var v645 = arrayOfTitles[i$$1];
    var v593 = JAM.call(v645.search, v645, [/\S/], JAM.policy.p15);
    var v508 = v593 == -1;
    var v595 = !v508;
    if (v595) {
      var v646 = arrayOfSequences[i$$1];
      var v594 = JAM.call(v646.search, v646, [/\S/], JAM.policy.p15);
      v508 = v594 == -1;
    }
    var v316 = v508;
    var v510 = !v316;
    if (v510) {
      var v596 = arrayOfSequences[i$$1];
      var v509 = v596.length;
      v316 = v509 != lengthOfAlign;
    }
    var v11 = v316;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v317 = arrayOfTitles.length;
    v12 = i$$1 < v317;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v680 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p15);
  var v647 = v680 == -1;
  var v682 = !v647;
  if (v682) {
    var v681 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p15);
    v647 = v681 == -1;
  }
  var v597 = v647;
  var v649 = !v597;
  if (v649) {
    var v648 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p15);
    v597 = v648 == -1;
  }
  var v511 = v597;
  var v599 = !v511;
  if (v599) {
    var v598 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p15);
    v511 = v598 == -1;
  }
  var v318 = v511;
  var v513 = !v318;
  if (v513) {
    var v512 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p15);
    v318 = v512 == -1;
  }
  var v13 = v318;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v514 = formElement.value;
  var v319 = JAM.call(v514.search, v514, [/\S/], JAM.policy.p15);
  var v14 = v319 == -1;
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
  var v320 = arrayOfPatterns.length;
  var v17 = z$$2 < v320;
  for (;v17;) {
    var v515 = arrayOfPatterns[z$$2];
    var v321 = JAM.call(v515.search, v515, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p15);
    var v15 = v321 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v516 = arrayOfPatterns[z$$2];
    var v322 = moreExpressionCheck(v516);
    var v16 = v322 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v323 = arrayOfPatterns.length;
    v17 = z$$2 < v323;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v324 = arrayOfPatterns.length;
  var v23 = j < v324;
  for (;v23;) {
    var v517 = arrayOfPatterns[j];
    var v325 = JAM.call(v517.match, v517, [/\/.+\//], JAM.policy.p15);
    var v20 = v325 + "gi";
    if (JAM.isEval(eval)) {
      var v773 = eval("introspect(JAM.policy.pFull) { " + v20 + " }")
    } else {
      var v773 = JAM.call(eval, null, [v20])
    }
    geneticCodeMatchExp[j] = v773;
    var v326 = arrayOfPatterns[j];
    var v21 = JAM.call(v326.match, v326, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v774 = v21.toString();
    geneticCodeMatchResult[j] = v774;
    var v22 = geneticCodeMatchResult[j];
    var v775 = JAM.call(v22.replace, v22, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v775;
    j++;
    var v327 = arrayOfPatterns.length;
    v23 = j < v327;
  }
  var i$$2 = 0;
  var v518 = testSequence.length;
  var v328 = v518 - 3;
  var v30 = i$$2 <= v328;
  for (;v30;) {
    var v24 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v24], JAM.policy.p16);
    j = 0;
    var v329 = geneticCodeMatchExp.length;
    var v28 = j < v329;
    for (;v28;) {
      var v519 = geneticCodeMatchExp[j];
      var v330 = JAM.call(codon.search, codon, [v519], JAM.policy.p17);
      var v27 = v330 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v331 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v331 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v332 = geneticCodeMatchExp.length;
      v28 = j < v332;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v520 = testSequence.length;
    var v333 = v520 - 3;
    v30 = i$$2 <= v333;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v334 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v334;
  for (;v32;) {
    var v521 = arrayOfPatterns$$1[z$$3];
    var v335 = JAM.call(v521.search, v521, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p15);
    var v31 = v335 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v336 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v336;
  }
  var i$$3 = 0;
  var v337 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v337;
  for (;v36;) {
    var v522 = arrayOfPatterns$$1[i$$3];
    var v338 = "[" + v522;
    var v33 = v338 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v339 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v339;
    for (;v35;) {
      var v523 = arrayOfPatterns$$1[j$$1];
      var v340 = JAM.call(v523.search, v523, [re], JAM.policy.p17);
      var v34 = v340 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v341 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v341;
    }
    i$$3++;
    var v342 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v342;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v343 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v343;
  for (;v39;) {
    var v524 = arrayOfPatterns$$2[z$$4];
    var v344 = JAM.call(v524.search, v524, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p15);
    var v37 = v344 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v525 = arrayOfPatterns$$2[z$$4];
    var v345 = moreExpressionCheck(v525);
    var v38 = v345 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v346 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v346;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v600 = getSequenceFromFasta(text$$7);
  var v526 = JAM.call(v600.replace, v600, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v347 = v526.length;
  var v41 = v347 > maxInput;
  if (v41) {
    var v348 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v348 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v349 = text$$8.length;
  var v43 = v349 > maxInput$$1;
  if (v43) {
    var v350 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v350 + " characters.";
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
  JAM.call(v44.write, v44, ["</form>"], JAM.policy.p10);
  return true;
}
function closePre() {
  var v45 = outputWindow.document;
  JAM.call(v45.write, v45, ["</div>"], JAM.policy.p10);
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</pre>\n"], JAM.policy.p10);
  return;
}
function closeTextArea() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</textarea>"], JAM.policy.p10);
  return true;
}
function closeWindow() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</body>\n</html>\n"], JAM.policy.p10);
  outputWindow.status = "Done.";
  var v49 = outputWindow.document;
  v49.close();
  return;
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
  var v351 = alignArray.length;
  var v50 = v351 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v352 = alignArray.length;
  var v52 = i$$4 < v352;
  for (;v52;) {
    var v527 = alignArray[i$$4];
    var v353 = JAM.call(v527.search, v527, [/[^\s]+\s/], JAM.policy.p15);
    var v51 = v353 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v354 = alignArray.length;
    v52 = i$$4 < v354;
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
  var v355 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v55 = v355 != -1;
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
  var v356 = sequence$$2.length;
  var v56 = "&gt;results for " + v356;
  var stringToReturn = v56 + " residue sequence ";
  var v357 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p15);
  var v58 = v357 != -1;
  if (v58) {
    var v358 = stringToReturn + '"';
    var v57 = v358 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v359 = stringToReturn + ' starting "';
  var v360 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v59 = v359 + v360;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v361 = sequenceOne.length;
  var v60 = "Search results for " + v361;
  var stringToReturn$$1 = v60 + " residue sequence ";
  var v362 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p15);
  var v62 = v362 != -1;
  if (v62) {
    var v363 = stringToReturn$$1 + '"';
    var v61 = v363 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v364 = stringToReturn$$1 + ' starting "';
  var v365 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v63 = v364 + v365;
  stringToReturn$$1 = v63 + '"\n';
  var v366 = stringToReturn$$1 + "and ";
  var v367 = sequenceTwo.length;
  var v64 = v366 + v367;
  stringToReturn$$1 = v64 + " residue sequence ";
  var v368 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p15);
  var v66 = v368 != -1;
  if (v66) {
    var v369 = stringToReturn$$1 + '"';
    var v65 = v369 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v370 = stringToReturn$$1 + ' starting "';
  var v371 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v67 = v370 + v371;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v372 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v372;
  for (;v71;) {
    var v528 = arrayOfPatterns$$3[j$$2];
    var v373 = JAM.call(v528.match, v528, [/\/.+\//], JAM.policy.p15);
    var v70 = v373 + "gi";
    if (JAM.isEval(eval)) {
      var v776 = eval("introspect(JAM.policy.pFull) { " + v70 + " }")
    } else {
      var v776 = JAM.call(eval, null, [v70])
    }
    geneticCodeMatchExp$$1[j$$2] = v776;
    j$$2++;
    var v374 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v374;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v375 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v375;
  for (;v75;) {
    var v376 = arrayOfPatterns$$4[j$$3];
    var v73 = JAM.call(v376.match, v376, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v777 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v777;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v778 = JAM.call(v74.replace, v74, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v778;
    j$$3++;
    var v377 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v377;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(sequence$$3) {
  var fastaSequenceTitle$$1 = title;
  var v378 = sequence$$3.length;
  var v76 = "Results for " + v378;
  var stringToReturn$$2 = v76 + " residue sequence ";
  var v379 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p15);
  var v78 = v379 != -1;
  if (v78) {
    var v380 = stringToReturn$$2 + '"';
    var v77 = v380 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v381 = stringToReturn$$2 + ' starting "';
  var v382 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v79 = v381 + v382;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v529 = "Results for " + topology;
  var v383 = v529 + " ";
  var v384 = sequence$$4.length;
  var v81 = v383 + v384;
  var stringToReturn$$3 = v81 + " residue sequence ";
  var v385 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p15);
  var v83 = v385 != -1;
  if (v83) {
    var v386 = stringToReturn$$3 + '"';
    var v82 = v386 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v387 = stringToReturn$$3 + ' starting "';
  var v388 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v84 = v387 + v388;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v389 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v389;
  var stringToReturn$$4 = v86 + " residue sequence ";
  var v390 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p15);
  var v88 = v390 != -1;
  if (v88) {
    var v391 = stringToReturn$$4 + '"';
    var v87 = v391 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v392 = stringToReturn$$4 + ' starting "';
  var v393 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v89 = v392 + v393;
  stringToReturn$$4 = v89 + '"\n';
  var v394 = stringToReturn$$4 + "and ";
  var v395 = sequenceTwo$$1.length;
  var v90 = v394 + v395;
  stringToReturn$$4 = v90 + " residue sequence ";
  var v396 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p15);
  var v92 = v396 != -1;
  if (v92) {
    var v397 = stringToReturn$$4 + '"';
    var v91 = v397 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v398 = stringToReturn$$4 + ' starting "';
  var v399 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v93 = v398 + v399;
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
    var v400 = Math.random();
    var v401 = components.length;
    var v95 = v400 * v401;
    tempNum = JAM.call(Math.floor, Math, [v95], JAM.policy.p15);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p10);
}
function getSequenceFromFasta(sequenceRecord) {
  var v402 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v97 = v402 != -1;
  if (v97) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v403 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v99 = v403 != -1;
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
  var v751 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p15);
  var v744 = v751 != -1;
  var v753 = !v744;
  if (v753) {
    var v752 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p15);
    v744 = v752 != -1;
  }
  var v735 = v744;
  var v746 = !v735;
  if (v746) {
    var v745 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p15);
    v735 = v745 != -1;
  }
  var v726 = v735;
  var v737 = !v726;
  if (v737) {
    var v736 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p15);
    v726 = v736 != -1;
  }
  var v715 = v726;
  var v728 = !v715;
  if (v728) {
    var v727 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p15);
    v715 = v727 != -1;
  }
  var v699 = v715;
  var v717 = !v699;
  if (v717) {
    var v716 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p15);
    v699 = v716 != -1;
  }
  var v683 = v699;
  var v701 = !v683;
  if (v701) {
    var v700 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p15);
    v683 = v700 != -1;
  }
  var v650 = v683;
  var v685 = !v650;
  if (v685) {
    var v684 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p15);
    v650 = v684 != -1;
  }
  var v601 = v650;
  var v652 = !v601;
  if (v652) {
    var v651 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p15);
    v601 = v651 != -1;
  }
  var v530 = v601;
  var v603 = !v530;
  if (v603) {
    var v602 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p15);
    v530 = v602 != -1;
  }
  var v404 = v530;
  var v532 = !v404;
  if (v532) {
    var v531 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p15);
    v404 = v531 != -1;
  }
  var v100 = v404;
  if (v100) {
    return false;
  }
  return true;
}
function openForm() {
  var v101 = outputWindow.document;
  JAM.call(v101.write, v101, ['<form action="">\n'], JAM.policy.p10);
  return true;
}
function openPre() {
  var v102 = outputWindow.document;
  JAM.call(v102.write, v102, ["<pre>"], JAM.policy.p10);
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ['<div class="pre">'], JAM.policy.p10);
  return;
}
function openTextArea() {
  var v104 = outputWindow.document;
  JAM.call(v104.write, v104, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p10);
  return true;
}
function openWindow() {
  var title$$6 = "DNA Molecular Weight";
  _openWindow(title$$6);
  return;
}
function _openWindow(title$$7) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v105 = outputWindow.document;
  var v604 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v533 = v604 + "<head>\n";
  var v405 = v533 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v405 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v105.write, v105, [v106], JAM.policy.p17);
  if (isColor) {
    var v107 = outputWindow.document;
    var v766 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v762 = v766 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v758 = v762 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v754 = v758 + "div.info {font-weight: bold}\n";
    var v747 = v754 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v738 = v747 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v729 = v738 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v718 = v729 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v702 = v718 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v686 = v702 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v653 = v686 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v605 = v653 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v534 = v605 + "td.many {color: #000000}\n";
    var v406 = v534 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v406 + "</style>\n";
    JAM.call(v107.write, v107, [v108], JAM.policy.p17);
  } else {
    var v109 = outputWindow.document;
    var v770 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v767 = v770 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v763 = v767 + "div.title {display: none}\n";
    var v759 = v763 + "div.info {font-weight: bold}\n";
    var v755 = v759 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v748 = v755 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v739 = v748 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v730 = v739 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v719 = v730 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v703 = v719 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v687 = v703 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v654 = v687 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v606 = v654 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v535 = v606 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v407 = v535 + "img {display: none}\n";
    var v110 = v407 + "</style>\n";
    JAM.call(v109.write, v109, [v110], JAM.policy.p17);
  }
  var v111 = outputWindow.document;
  var v607 = "</head>\n" + '<body class="main">\n';
  var v536 = v607 + '<div class="title">';
  var v408 = v536 + title$$7;
  var v112 = v408 + " results</div>\n";
  JAM.call(v111.write, v111, [v112], JAM.policy.p17);
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
  var v113 = outputWindow.document;
  var v608 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v537 = v608 + "<head>\n";
  var v409 = v537 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v409 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v113.write, v113, [v114], JAM.policy.p17);
  if (isBackground) {
    var v115 = outputWindow.document;
    var v768 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v764 = v768 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v760 = v764 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v756 = v760 + "div.info {font-weight: bold}\n";
    var v749 = v756 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v740 = v749 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v731 = v740 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v720 = v731 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v704 = v720 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v688 = v704 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v655 = v688 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v609 = v655 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v538 = v609 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v410 = v538 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v410 + "</style>\n";
    JAM.call(v115.write, v115, [v116], JAM.policy.p17);
  } else {
    var v117 = outputWindow.document;
    var v772 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v771 = v772 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v769 = v771 + "div.title {display: none}\n";
    var v765 = v769 + "div.info {font-weight: bold}\n";
    var v761 = v765 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v757 = v761 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v750 = v757 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v741 = v750 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v732 = v741 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v721 = v732 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v705 = v721 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v689 = v705 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v656 = v689 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v610 = v656 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v539 = v610 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v411 = v539 + "img {display: none}\n";
    var v118 = v411 + "</style>\n";
    JAM.call(v117.write, v117, [v118], JAM.policy.p17);
  }
  var v119 = outputWindow.document;
  var v611 = "</head>\n" + '<body class="main">\n';
  var v540 = v611 + '<div class="title">';
  var v412 = v540 + title$$9;
  var v120 = v412 + " results</div>\n";
  JAM.call(v119.write, v119, [v120], JAM.policy.p17);
  outputWindow.status = "Please Wait.";
  return;
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
  var v413 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p15);
  var v121 = v413 != -1;
  if (v121) {
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
  var v414 = testArray[0];
  var v125 = v414 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v415 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v126 = v415 == -1;
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
  var v416 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p11);
  var v129 = v416 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v417 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p11);
  var v130 = v417 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v418 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p15);
  var v131 = v418 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v657 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p15);
  var v612 = v657 == -1;
  var v659 = !v612;
  if (v659) {
    var v658 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p15);
    v612 = v658 == -1;
  }
  var v541 = v612;
  var v614 = !v541;
  if (v614) {
    var v613 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p15);
    v541 = v613 == -1;
  }
  var v419 = v541;
  var v543 = !v419;
  if (v543) {
    var v542 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p15);
    v419 = v542 == -1;
  }
  var v132 = v419;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v420 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p15);
  var v133 = v420 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v421 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v421 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v422 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p15);
  var v136 = v422 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v423 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p15);
  var v137 = v423 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v660 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p15);
  var v615 = v660 == -1;
  var v662 = !v615;
  if (v662) {
    var v661 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p15);
    v615 = v661 == -1;
  }
  var v544 = v615;
  var v617 = !v544;
  if (v617) {
    var v616 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p15);
    v544 = v616 == -1;
  }
  var v424 = v544;
  var v546 = !v424;
  if (v546) {
    var v545 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p15);
    v424 = v545 == -1;
  }
  var v138 = v424;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v663 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p15);
  var v618 = v663 == -1;
  var v665 = !v618;
  if (v665) {
    var v664 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p15);
    v618 = v664 == -1;
  }
  var v547 = v618;
  var v620 = !v547;
  if (v620) {
    var v619 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p15);
    v547 = v619 == -1;
  }
  var v425 = v547;
  var v549 = !v425;
  if (v549) {
    var v548 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p15);
    v425 = v548 == -1;
  }
  var v139 = v425;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v426 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p15);
  var v140 = v426 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v666 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p15);
  var v621 = v666 == -1;
  var v668 = !v621;
  if (v668) {
    var v667 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p15);
    v621 = v667 == -1;
  }
  var v550 = v621;
  var v623 = !v550;
  if (v623) {
    var v622 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p15);
    v550 = v622 == -1;
  }
  var v427 = v550;
  var v552 = !v427;
  if (v552) {
    var v551 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p15);
    v427 = v551 == -1;
  }
  var v141 = v427;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v428 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p15);
  var v142 = v428 == -1;
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
    var v429 = basePerLine / groupSize;
    var v146 = j$$6 <= v429;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v430 = k + i$$5;
        var v144 = JAM.call(text$$10.charAt, text$$10, [v430], JAM.policy.p17);
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v431 = basePerLine / groupSize;
      v146 = j$$6 <= v431;
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
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v432 = adjustment < 0;
    if (v432) {
      v432 = adjusted >= 0;
    }
    var v150 = v432;
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
    var v433 = basePerLine$$2 / groupSize$$2;
    var v157 = j$$7 <= v433;
    for (;v157;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v434 = i$$6 + k$$1;
        var v151 = v434 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v435 = k$$1 + i$$6;
        var v152 = JAM.call(text$$12.charAt, text$$12, [v435], JAM.policy.p17);
        lineOfText$$1 = lineOfText$$1 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v155 = numberPosition$$1 == "above";
      if (v155) {
        var v436 = adjustNumbering(i$$6, numberingAdjustment);
        var v154 = rightNum(v436, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v154;
      }
      var v156 = i$$6 >= stopBase$$2;
      if (v156) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v437 = basePerLine$$2 / groupSize$$2;
      v157 = j$$7 <= v437;
    }
    var v180 = numberPosition$$1 == "left";
    if (v180) {
      var v158 = outputWindow.document;
      var v624 = adjustNumbering(lineNum, numberingAdjustment);
      var v553 = rightNum(v624, "", 8, tabIn$$3);
      var v438 = v553 + lineOfText$$1;
      var v159 = v438 + "\n";
      JAM.call(v158.write, v158, [v159], JAM.policy.p17);
      var v163 = strands$$1 == "two";
      if (v163) {
        var v160 = outputWindow.document;
        var v625 = adjustNumbering(lineNum, numberingAdjustment);
        var v554 = rightNum(v625, "", 8, tabIn$$3);
        var v555 = complement(lineOfText$$1);
        var v439 = v554 + v555;
        var v161 = v439 + "\n";
        JAM.call(v160.write, v160, [v161], JAM.policy.p17);
        var v162 = outputWindow.document;
        JAM.call(v162.write, v162, ["\n"], JAM.policy.p10);
      }
    } else {
      var v179 = numberPosition$$1 == "right";
      if (v179) {
        var v164 = outputWindow.document;
        var v556 = adjustNumbering(i$$6, numberingAdjustment);
        var v440 = lineOfText$$1 + v556;
        var v165 = v440 + "\n";
        JAM.call(v164.write, v164, [v165], JAM.policy.p17);
        var v169 = strands$$1 == "two";
        if (v169) {
          var v166 = outputWindow.document;
          var v557 = complement(lineOfText$$1);
          var v558 = adjustNumbering(i$$6, numberingAdjustment);
          var v441 = v557 + v558;
          var v167 = v441 + "\n";
          JAM.call(v166.write, v166, [v167], JAM.policy.p17);
          var v168 = outputWindow.document;
          JAM.call(v168.write, v168, ["\n"], JAM.policy.p10);
        }
      } else {
        var v178 = numberPosition$$1 == "above";
        if (v178) {
          var v170 = outputWindow.document;
          var v171 = aboveNum + "\n";
          JAM.call(v170.write, v170, [v171], JAM.policy.p17);
          var v172 = outputWindow.document;
          var v173 = lineOfText$$1 + "\n";
          JAM.call(v172.write, v172, [v173], JAM.policy.p17);
          var v177 = strands$$1 == "two";
          if (v177) {
            var v174 = outputWindow.document;
            var v442 = complement(lineOfText$$1);
            var v175 = v442 + "\n";
            JAM.call(v174.write, v174, [v175], JAM.policy.p17);
            var v176 = outputWindow.document;
            JAM.call(v176.write, v176, ["\n"], JAM.policy.p10);
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
    var v443 = basePerLine$$3 / groupSize$$3;
    var v188 = j$$8 <= v443;
    for (;v188;) {
      var v184 = k$$2 < groupSize$$3;
      for (;v184;) {
        var v444 = i$$7 + k$$2;
        var v182 = v444 >= stopBase$$3;
        if (v182) {
          break;
        }
        var v445 = k$$2 + i$$7;
        var v183 = JAM.call(text$$13.charAt, text$$13, [v445], JAM.policy.p17);
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
      var v446 = basePerLine$$3 / groupSize$$3;
      v188 = j$$8 <= v446;
    }
    var v199 = numberPosition$$2 == "left";
    if (v199) {
      var v189 = outputWindow.document;
      var v559 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v447 = v559 + lineOfText$$2;
      var v190 = v447 + "\n";
      JAM.call(v189.write, v189, [v190], JAM.policy.p17);
    } else {
      var v198 = numberPosition$$2 == "right";
      if (v198) {
        var v191 = outputWindow.document;
        var v448 = lineOfText$$2 + i$$7;
        var v192 = v448 + "\n";
        JAM.call(v191.write, v191, [v192], JAM.policy.p17);
      } else {
        var v197 = numberPosition$$2 == "above";
        if (v197) {
          var v193 = outputWindow.document;
          var v194 = aboveNum$$1 + "\n";
          JAM.call(v193.write, v193, [v194], JAM.policy.p17);
          var v195 = outputWindow.document;
          var v196 = lineOfText$$2 + "\n";
          JAM.call(v195.write, v195, [v196], JAM.policy.p17);
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
  var v626 = sequence$$13.length;
  var v560 = v626 <= firstIndexToMutate;
  var v627 = !v560;
  if (v627) {
    v560 = lastIndexToMutate < 0;
  }
  var v449 = v560;
  var v561 = !v449;
  if (v561) {
    v449 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v201 = v449;
  if (v201) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v209 = i$$8 < numMut;
  for (;v209;) {
    maxNum = sequence$$13.length;
    var v450 = Math.random();
    var v202 = v450 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v202], JAM.policy.p15);
    var v451 = randNum < firstIndexToMutate;
    var v562 = !v451;
    if (v562) {
      v451 = randNum > lastIndexToMutate;
    }
    var v203 = v451;
    if (v203) {
      numMut++;
      i$$8++;
      v209 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p15);
    needNewChar = true;
    for (;needNewChar;) {
      var v452 = Math.random();
      var v453 = components$$1.length;
      var v204 = v452 * v453;
      componentsIndex = JAM.call(Math.round, Math, [v204], JAM.policy.p15);
      var v454 = components$$1.length;
      var v205 = componentsIndex == v454;
      if (v205) {
        componentsIndex = 0;
      }
      var v455 = components$$1[componentsIndex];
      var v206 = v455 != currentChar;
      if (v206) {
        needNewChar = false;
      }
    }
    var v456 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v457 = components$$1[componentsIndex];
    var v207 = v456 + v457;
    var v458 = randNum + 1;
    var v459 = sequence$$13.length;
    var v208 = JAM.call(sequence$$13.substring, sequence$$13, [v458, v459], JAM.policy.p27);
    sequence$$13 = v207 + v208;
    i$$8++;
    v209 = i$$8 < numMut;
  }
  var v210 = outputWindow.document;
  var v211 = addReturns(sequence$$13);
  JAM.call(v210.write, v210, [v211], JAM.policy.p17);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v216 = j$$9 < lengthOut$$1;
  for (;v216;) {
    var v460 = Math.random();
    var v461 = components$$2.length;
    var v212 = v460 * v461;
    tempNum$$1 = JAM.call(Math.floor, Math, [v212], JAM.policy.p15);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v462 = sequence$$14.length;
    var v215 = v462 == 60;
    if (v215) {
      var v213 = outputWindow.document;
      var v214 = sequence$$14 + "\n";
      JAM.call(v213.write, v213, [v214], JAM.policy.p17);
      sequence$$14 = "";
    }
    j$$9++;
    v216 = j$$9 < lengthOut$$1;
  }
  var v217 = outputWindow.document;
  var v218 = sequence$$14 + "\n";
  JAM.call(v217.write, v217, [v218], JAM.policy.p17);
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
    var v628 = sequence$$15.length;
    var v563 = v628 - lookAhead;
    var v564 = sequence$$15.length;
    var v463 = JAM.call(sequence$$15.substring, sequence$$15, [v563, v564], JAM.policy.p27);
    var v220 = v463 + sequence$$15;
    var v221 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v220 + v221;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v223 = outputWindow.document;
  JAM.call(v223.write, v223, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p10);
  var v224 = outputWindow.document;
  var v629 = '<tr><td class="title" width="200px">' + "Site:";
  var v565 = v629 + '</td><td class="title">';
  var v464 = v565 + "Positions:";
  var v225 = v464 + "</td></tr>\n";
  JAM.call(v224.write, v224, [v225], JAM.policy.p17);
  var i$$9 = 0;
  var v465 = arrayOfItems.length;
  var v241 = i$$9 < v465;
  for (;v241;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v466 = arrayOfItems[i$$9];
    var v226 = JAM.call(v466.match, v466, [/\/.+\//], JAM.policy.p15);
    matchExp = v226 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v630 = arrayOfItems[i$$9];
    var v566 = JAM.call(v630.match, v630, [/\)\D*\d+/], JAM.policy.p15);
    var v467 = v566.toString();
    var v227 = JAM.call(v467.replace, v467, [/\)\D*/, ""], JAM.policy.p16);
    cutDistance = parseFloat(v227);
    var v233 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v233;) {
      var v228 = matchExp.lastIndex;
      matchPosition = v228 - cutDistance;
      var v468 = matchPosition >= lowerLimit;
      if (v468) {
        v468 = matchPosition < upperLimit;
      }
      var v231 = v468;
      if (v231) {
        timesFound++;
        var v229 = tempString$$1 + ", ";
        var v469 = matchPosition - shiftValue;
        var v230 = v469 + 1;
        tempString$$1 = v229 + v230;
      }
      var v470 = matchExp.lastIndex;
      var v567 = RegExp.lastMatch;
      var v471 = v567.length;
      var v232 = v470 - v471;
      matchExp.lastIndex = v232 + 1;
      v233 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v472 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p15);
    var v234 = v472 != -1;
    if (v234) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p16);
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
    var v722 = '<tr><td class="' + backGroundClass;
    var v706 = v722 + '">';
    var v742 = arrayOfItems[i$$9];
    var v733 = JAM.call(v742.match, v742, [/\([^\(]+\)/], JAM.policy.p15);
    var v723 = v733.toString();
    var v707 = JAM.call(v723.replace, v723, [/\(|\)/g, ""], JAM.policy.p16);
    var v690 = v706 + v707;
    var v669 = v690 + '</td><td class="';
    var v631 = v669 + backGroundClass;
    var v568 = v631 + '">';
    var v473 = v568 + tempString$$1;
    var v240 = v473 + "</td></tr>\n";
    JAM.call(v239.write, v239, [v240], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v474 = arrayOfItems.length;
    v241 = i$$9 < v474;
  }
  var v242 = outputWindow.document;
  JAM.call(v242.write, v242, ["</tbody></table>\n"], JAM.policy.p10);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v243 = outputWindow.document;
  JAM.call(v243.write, v243, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p10);
  var v244 = outputWindow.document;
  var v691 = '<tr><td class="title">' + "Pattern:";
  var v670 = v691 + '</td><td class="title">';
  var v632 = v670 + "Times found:";
  var v569 = v632 + '</td><td class="title">';
  var v475 = v569 + "Percentage:";
  var v245 = v475 + "</td></tr>\n";
  JAM.call(v244.write, v244, [v245], JAM.policy.p17);
  var i$$10 = 0;
  var v476 = arrayOfItems$$1.length;
  var v254 = i$$10 < v476;
  for (;v254;) {
    var tempNumber = 0;
    var v477 = arrayOfItems$$1[i$$10];
    var v246 = JAM.call(v477.match, v477, [/\/[^\/]+\//], JAM.policy.p15);
    var matchExp$$1 = v246 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v478 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v248 = v478 != -1;
    if (v248) {
      var v247 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v247.length;
    }
    var percentage = 0;
    var v570 = originalLength + 1;
    var v671 = arrayOfItems$$1[i$$10];
    var v633 = JAM.call(v671.match, v671, [/\d+/], JAM.policy.p15);
    var v571 = parseFloat(v633);
    var v479 = v570 - v571;
    var v251 = v479 > 0;
    if (v251) {
      var v249 = 100 * tempNumber;
      var v480 = originalLength + 1;
      var v634 = arrayOfItems$$1[i$$10];
      var v572 = JAM.call(v634.match, v634, [/\d+/], JAM.policy.p15);
      var v481 = parseFloat(v572);
      var v250 = v480 - v481;
      percentage = v249 / v250;
    }
    var v252 = outputWindow.document;
    var v743 = arrayOfItems$$1[i$$10];
    var v734 = JAM.call(v743.match, v743, [/\([^\(]+\)\b/], JAM.policy.p15);
    var v724 = v734.toString();
    var v708 = JAM.call(v724.replace, v724, [/\(|\)/g, ""], JAM.policy.p16);
    var v692 = "<tr><td>" + v708;
    var v672 = v692 + "</td><td>";
    var v635 = v672 + tempNumber;
    var v573 = v635 + "</td><td>";
    var v574 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p11);
    var v482 = v573 + v574;
    var v253 = v482 + "</td></tr>\n";
    JAM.call(v252.write, v252, [v253], JAM.policy.p17);
    i$$10++;
    var v483 = arrayOfItems$$1.length;
    v254 = i$$10 < v483;
  }
  var v255 = outputWindow.document;
  JAM.call(v255.write, v255, ["</tbody></table>\n"], JAM.policy.p10);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v484 = sequence$$17.length;
  var v262 = v484 > 0;
  for (;v262;) {
    maxNum$$1 = sequence$$17.length;
    var v485 = Math.random();
    var v256 = v485 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v256], JAM.policy.p15);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p15);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v257 = randNum$$1 + 1;
    var v258 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v257, v258], JAM.policy.p16);
    sequence$$17 = tempString1 + tempString2;
    var v486 = tempSeq.length;
    var v261 = v486 == 60;
    if (v261) {
      var v259 = outputWindow.document;
      var v260 = tempSeq + "\n";
      JAM.call(v259.write, v259, [v260], JAM.policy.p17);
      tempSeq = "";
    }
    var v487 = sequence$$17.length;
    v262 = v487 > 0;
  }
  var v263 = outputWindow.document;
  var v264 = tempSeq + "\n";
  JAM.call(v263.write, v263, [v264], JAM.policy.p17);
  return true;
}
function dnaMw() {
  var theDocument = document;
  var newDna = "";
  var maxInput$$3 = 2E5;
  var v488 = testScript();
  var v265 = v488 == false;
  if (v265) {
    return;
  }
  var v709 = theDocument.forms;
  var v693 = v709[0];
  var v673 = v693.elements;
  var v636 = v673[0];
  var v575 = checkFormElement(v636);
  var v489 = v575 == false;
  var v577 = !v489;
  if (v577) {
    var v725 = theDocument.forms;
    var v710 = v725[0];
    var v694 = v710.elements;
    var v674 = v694[0];
    var v637 = v674.value;
    var v576 = checkSequenceLength(v637, maxInput$$3);
    v489 = v576 == false;
  }
  var v266 = v489;
  if (v266) {
    return;
  }
  openWindow();
  var v675 = theDocument.forms;
  var v638 = v675[0];
  var v578 = v638.elements;
  var v490 = v578[0];
  var v267 = v490.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v267);
  var i$$11 = 0;
  var v491 = arrayOfFasta$$1.length;
  var v275 = i$$11 < v491;
  for (;v275;) {
    var v268 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v268);
    var v269 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v269);
    newDna = _removeNonPrimer(newDna);
    var v270 = outputWindow.document;
    var v271 = getInfoFromTitleAndSequence(newDna);
    JAM.call(v270.write, v270, [v271], JAM.policy.p17);
    var v711 = theDocument.forms;
    var v695 = v711[0];
    var v676 = v695.elements;
    var v639 = v676[4];
    var v579 = v639.options;
    var v712 = theDocument.forms;
    var v696 = v712[0];
    var v677 = v696.elements;
    var v640 = v677[4];
    var v580 = v640.selectedIndex;
    var v492 = v579[v580];
    var v272 = v492.value;
    var v713 = theDocument.forms;
    var v697 = v713[0];
    var v678 = v697.elements;
    var v641 = v678[5];
    var v581 = v641.options;
    var v714 = theDocument.forms;
    var v698 = v714[0];
    var v679 = v698.elements;
    var v642 = v679[5];
    var v582 = v642.selectedIndex;
    var v493 = v581[v582];
    var v273 = v493.value;
    writeDnaMw(newDna, v272, v273);
    var v274 = outputWindow.document;
    JAM.call(v274.write, v274, ["<br />\n<br />\n"], JAM.policy.p10);
    i$$11++;
    var v494 = arrayOfFasta$$1.length;
    v275 = i$$11 < v494;
  }
  closeWindow();
  return;
}
function writeDnaMw(sequence$$18, strandType, topology$$1) {
  var OH = 17.01;
  var result = 0;
  var v303 = strandType == "single";
  if (v303) {
    var mw_direct_strand = _molecularWeight(sequence$$18);
    var v495 = mw_direct_strand.length;
    var v286 = v495 == 1;
    if (v286) {
      var v276 = mw_direct_strand[0];
      var mw = parseFloat(v276);
      var v277 = topology$$1 == "circular";
      if (v277) {
        mw = mw - OH;
      }
      mw = JAM.call(mw.toFixed, mw, [2], JAM.policy.p11);
      var v278 = outputWindow.document;
      var v279 = mw + " Da";
      JAM.call(v278.write, v278, [v279], JAM.policy.p17);
    } else {
      var v496 = mw_direct_strand.length;
      var v285 = v496 == 2;
      if (v285) {
        var v280 = mw_direct_strand[0];
        var mw_lower = parseFloat(v280);
        var v281 = mw_direct_strand[1];
        var mw_upper = parseFloat(v281);
        var v282 = topology$$1 == "circular";
        if (v282) {
          mw_lower = mw_lower - OH;
          mw_upper = mw_upper - OH;
        }
        mw_lower = JAM.call(mw_lower.toFixed, mw_lower, [2], JAM.policy.p11);
        mw_upper = JAM.call(mw_upper.toFixed, mw_upper, [2], JAM.policy.p11);
        var v283 = outputWindow.document;
        var v583 = mw_lower + " to ";
        var v497 = v583 + mw_upper;
        var v284 = v497 + " Da";
        JAM.call(v283.write, v283, [v284], JAM.policy.p17);
      }
    }
  } else {
    var v302 = strandType == "double";
    if (v302) {
      mw_direct_strand = _molecularWeight(sequence$$18);
      var v498 = complement(sequence$$18);
      var v287 = reverse(v498);
      var mw_reverse_strand = _molecularWeight(v287);
      var v584 = mw_direct_strand.length;
      var v499 = v584 == 1;
      if (v499) {
        var v585 = mw_reverse_strand.length;
        v499 = v585 == 1;
      }
      var v301 = v499;
      if (v301) {
        var v288 = mw_direct_strand[0];
        var mw_direct = parseFloat(v288);
        var v289 = mw_reverse_strand[0];
        var mw_reverse = parseFloat(v289);
        var v290 = topology$$1 == "circular";
        if (v290) {
          mw_direct = mw_direct - OH;
          mw_reverse = mw_reverse - OH;
        }
        mw = mw_direct + mw_reverse;
        mw = JAM.call(mw.toFixed, mw, [2], JAM.policy.p11);
        var v291 = outputWindow.document;
        var v292 = mw + " Da";
        JAM.call(v291.write, v291, [v292], JAM.policy.p17);
      } else {
        var v586 = mw_direct_strand.length;
        var v500 = v586 == 2;
        if (v500) {
          var v587 = mw_reverse_strand.length;
          v500 = v587 == 2;
        }
        var v300 = v500;
        if (v300) {
          var v293 = mw_direct_strand[0];
          var mw_direct_lower = parseFloat(v293);
          var v294 = mw_reverse_strand[0];
          var mw_reverse_lower = parseFloat(v294);
          var v295 = mw_direct_strand[1];
          var mw_direct_upper = parseFloat(v295);
          var v296 = mw_reverse_strand[1];
          var mw_reverse_upper = parseFloat(v296);
          var v297 = topology$$1 == "circular";
          if (v297) {
            mw_direct_lower = mw_direct_lower - OH;
            mw_reverse_lower = mw_reverse_lower - OH;
            mw_direct_upper = mw_direct_upper - OH;
            mw_reverse_upper = mw_reverse_upper - OH;
          }
          mw_lower = mw_direct_lower + mw_reverse_lower;
          mw_upper = mw_direct_upper + mw_reverse_upper;
          mw_lower = JAM.call(mw_lower.toFixed, mw_lower, [2], JAM.policy.p11);
          mw_upper = JAM.call(mw_upper.toFixed, mw_upper, [2], JAM.policy.p11);
          var v298 = outputWindow.document;
          var v588 = mw_lower + " to ";
          var v501 = v588 + mw_upper;
          var v299 = v501 + " Da";
          JAM.call(v298.write, v298, [v299], JAM.policy.p17);
        }
      }
    }
  }
  return;
}
function _containsOnlyNonDegenerates(sequence$$19) {
  var v502 = JAM.call(sequence$$19.search, sequence$$19, [/[^gatc]/i], JAM.policy.p15);
  var v304 = v502 == -1;
  if (v304) {
    return true;
  }
  return false;
}
function _molecularWeight(sequence$$20) {
  var v305 = _containsOnlyNonDegenerates(sequence$$20);
  if (v305) {
    return _molecularWeightNonDegen(sequence$$20);
  } else {
    return _molecularWeightDegen(sequence$$20);
  }
  return;
}
function _molecularWeightNonDegen(sequence$$21) {
  var results = new Array;
  var v779 = _mw(sequence$$21);
  results[0] = v779;
  return results;
}
function _mw(sequence$$22) {
  var g = _getBaseCount(sequence$$22, "g");
  var a = _getBaseCount(sequence$$22, "a");
  var t = _getBaseCount(sequence$$22, "t");
  var c = _getBaseCount(sequence$$22, "c");
  var v643 = g * 329.21;
  var v644 = a * 313.21;
  var v589 = v643 + v644;
  var v590 = t * 304.2;
  var v503 = v589 + v590;
  var v504 = c * 289.18;
  var v306 = v503 + v504;
  return v306 + 17.01;
}
function _molecularWeightDegen(sequence$$23) {
  var lowerBoundsSequence = sequence$$23;
  var upperBoundsSequence = sequence$$23;
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/r/gi, "a"], JAM.policy.p16);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/y/gi, "c"], JAM.policy.p16);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/s/gi, "c"], JAM.policy.p16);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/w/gi, "t"], JAM.policy.p16);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/k/gi, "t"], JAM.policy.p16);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/m/gi, "c"], JAM.policy.p16);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/b/gi, "c"], JAM.policy.p16);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/d/gi, "t"], JAM.policy.p16);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/h/gi, "c"], JAM.policy.p16);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/v/gi, "c"], JAM.policy.p16);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/n/gi, "c"], JAM.policy.p16);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/r/gi, "g"], JAM.policy.p16);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/y/gi, "t"], JAM.policy.p16);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/s/gi, "g"], JAM.policy.p16);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/w/gi, "a"], JAM.policy.p16);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/k/gi, "g"], JAM.policy.p16);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/m/gi, "a"], JAM.policy.p16);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/b/gi, "g"], JAM.policy.p16);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/d/gi, "g"], JAM.policy.p16);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/h/gi, "a"], JAM.policy.p16);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/v/gi, "g"], JAM.policy.p16);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/n/gi, "g"], JAM.policy.p16);
  var results$$1 = new Array;
  var v780 = _molecularWeightNonDegen(lowerBoundsSequence);
  results$$1[0] = v780;
  var v781 = _molecularWeightNonDegen(upperBoundsSequence);
  results$$1[1] = v781;
  return results$$1;
}
function _getBaseCount(sequence$$24, base$$1) {
  var basePattern = new RegExp(base$$1, "gi");
  var v505 = JAM.call(sequence$$24.search, sequence$$24, [basePattern], JAM.policy.p17);
  var v308 = v505 != -1;
  if (v308) {
    var v307 = JAM.call(sequence$$24.match, sequence$$24, [basePattern], JAM.policy.p17);
    return v307.length;
  } else {
    return 0;
  }
  return;
}
function _removeNonPrimer(sequence$$25) {
  JAM.call(sequence$$25.replace, sequence$$25, [/u/g, "t"], JAM.policy.p16);
  JAM.call(sequence$$25.replace, sequence$$25, [/U/g, "T"], JAM.policy.p16);
  return JAM.call(sequence$$25.replace, sequence$$25, [/[^gatcryswkmbdhvnGATCRYSWKMBDHVN]/g, ""], JAM.policy.p16);
}
JAM.set(document, "onload", v2);
var v309 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p10);
JAM.set(v309, "onclick", v3);
var v310 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p10);
JAM.set(v310, "onclick", v4)
