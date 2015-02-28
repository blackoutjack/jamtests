function v4() {
  var v610 = document.forms;
  var v521 = v610[0];
  var v319 = v521.elements;
  var v5 = v319[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    genbankFeat();
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v320 = document.main_form;
  var v7 = v320.main_submit;
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
  var v321 = arrayOfSequences.length;
  var v9 = v321 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v322 = arrayOfTitles.length;
  var v11 = i$$1 < v322;
  for (;v11;) {
    var v666 = arrayOfTitles[i$$1];
    var v611 = JAM.call(v666.search, v666, [/\S/], JAM.policy.p16);
    var v522 = v611 == -1;
    var v613 = !v522;
    if (v613) {
      var v667 = arrayOfSequences[i$$1];
      var v612 = JAM.call(v667.search, v667, [/\S/], JAM.policy.p16);
      v522 = v612 == -1;
    }
    var v323 = v522;
    var v524 = !v323;
    if (v524) {
      var v614 = arrayOfSequences[i$$1];
      var v523 = v614.length;
      v323 = v523 != lengthOfAlign;
    }
    var v10 = v323;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v324 = arrayOfTitles.length;
    v11 = i$$1 < v324;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v701 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p16);
  var v668 = v701 == -1;
  var v703 = !v668;
  if (v703) {
    var v702 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p16);
    v668 = v702 == -1;
  }
  var v615 = v668;
  var v670 = !v615;
  if (v670) {
    var v669 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p16);
    v615 = v669 == -1;
  }
  var v525 = v615;
  var v617 = !v525;
  if (v617) {
    var v616 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p16);
    v525 = v616 == -1;
  }
  var v325 = v525;
  var v527 = !v325;
  if (v527) {
    var v526 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p16);
    v325 = v526 == -1;
  }
  var v12 = v325;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v528 = formElement.value;
  var v326 = JAM.call(v528.search, v528, [/\S/], JAM.policy.p16);
  var v13 = v326 == -1;
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
  var v327 = arrayOfPatterns.length;
  var v16 = z$$2 < v327;
  for (;v16;) {
    var v529 = arrayOfPatterns[z$$2];
    var v328 = JAM.call(v529.search, v529, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p16);
    var v14 = v328 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v530 = arrayOfPatterns[z$$2];
    var v329 = moreExpressionCheck(v530);
    var v15 = v329 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v330 = arrayOfPatterns.length;
    v16 = z$$2 < v330;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v331 = arrayOfPatterns.length;
  var v22 = j < v331;
  for (;v22;) {
    var v531 = arrayOfPatterns[j];
    var v332 = JAM.call(v531.match, v531, [/\/.+\//], JAM.policy.p16);
    var v19 = v332 + "gi";
    if (JAM.isEval(eval)) {
      var v795 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v795 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v795;
    var v333 = arrayOfPatterns[j];
    var v20 = JAM.call(v333.match, v333, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v796 = v20.toString();
    geneticCodeMatchResult[j] = v796;
    var v21 = geneticCodeMatchResult[j];
    var v797 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v797;
    j++;
    var v334 = arrayOfPatterns.length;
    v22 = j < v334;
  }
  var i$$2 = 0;
  var v532 = testSequence.length;
  var v335 = v532 - 3;
  var v29 = i$$2 <= v335;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p15);
    j = 0;
    var v336 = geneticCodeMatchExp.length;
    var v27 = j < v336;
    for (;v27;) {
      var v533 = geneticCodeMatchExp[j];
      var v337 = JAM.call(codon.search, codon, [v533], JAM.policy.p18);
      var v26 = v337 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v338 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v338 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v339 = geneticCodeMatchExp.length;
      v27 = j < v339;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v534 = testSequence.length;
    var v340 = v534 - 3;
    v29 = i$$2 <= v340;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v341 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v341;
  for (;v31;) {
    var v535 = arrayOfPatterns$$1[z$$3];
    var v342 = JAM.call(v535.search, v535, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p16);
    var v30 = v342 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v343 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v343;
  }
  var i$$3 = 0;
  var v344 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v344;
  for (;v35;) {
    var v536 = arrayOfPatterns$$1[i$$3];
    var v345 = "[" + v536;
    var v32 = v345 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v346 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v346;
    for (;v34;) {
      var v537 = arrayOfPatterns$$1[j$$1];
      var v347 = JAM.call(v537.search, v537, [re], JAM.policy.p18);
      var v33 = v347 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v348 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v348;
    }
    i$$3++;
    var v349 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v349;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v350 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v350;
  for (;v38;) {
    var v538 = arrayOfPatterns$$2[z$$4];
    var v351 = JAM.call(v538.search, v538, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p16);
    var v36 = v351 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v539 = arrayOfPatterns$$2[z$$4];
    var v352 = moreExpressionCheck(v539);
    var v37 = v352 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v353 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v353;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v618 = getSequenceFromFasta(text$$7);
  var v540 = JAM.call(v618.replace, v618, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v354 = v540.length;
  var v40 = v354 > maxInput;
  if (v40) {
    var v355 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v355 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v356 = text$$8.length;
  var v42 = v356 > maxInput$$1;
  if (v42) {
    var v357 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v357 + " characters.";
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
  JAM.call(v43.write, v43, ["</form>"], JAM.policy.p12);
  return true;
}
function closePre() {
  var v44 = outputWindow.document;
  JAM.call(v44.write, v44, ["</div>"], JAM.policy.p12);
  var v45 = outputWindow.document;
  JAM.call(v45.write, v45, ["</pre>\n"], JAM.policy.p12);
  return;
}
function closeTextArea() {
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</textarea>"], JAM.policy.p12);
  return true;
}
function closeWindow() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</body>\n</html>\n"], JAM.policy.p12);
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
  var v358 = alignArray.length;
  var v49 = v358 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v359 = alignArray.length;
  var v51 = i$$4 < v359;
  for (;v51;) {
    var v541 = alignArray[i$$4];
    var v360 = JAM.call(v541.search, v541, [/[^\s]+\s/], JAM.policy.p16);
    var v50 = v360 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v361 = alignArray.length;
    v51 = i$$4 < v361;
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
  var v362 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v54 = v362 != -1;
  if (v54) {
    var v53 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p18);
    for (;v53;) {
      var v52 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v52], JAM.policy.p18);
      v53 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p18);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v363 = sequence$$2.length;
  var v55 = "&gt;results for " + v363;
  var stringToReturn = v55 + " residue sequence ";
  var v364 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p16);
  var v57 = v364 != -1;
  if (v57) {
    var v365 = stringToReturn + '"';
    var v56 = v365 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v366 = stringToReturn + ' starting "';
  var v367 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v366 + v367;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v368 = sequenceOne.length;
  var v59 = "Search results for " + v368;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v369 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p16);
  var v61 = v369 != -1;
  if (v61) {
    var v370 = stringToReturn$$1 + '"';
    var v60 = v370 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v371 = stringToReturn$$1 + ' starting "';
  var v372 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v371 + v372;
  stringToReturn$$1 = v62 + '"\n';
  var v373 = stringToReturn$$1 + "and ";
  var v374 = sequenceTwo.length;
  var v63 = v373 + v374;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v375 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p16);
  var v65 = v375 != -1;
  if (v65) {
    var v376 = stringToReturn$$1 + '"';
    var v64 = v376 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v377 = stringToReturn$$1 + ' starting "';
  var v378 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v66 = v377 + v378;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v379 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v379;
  for (;v70;) {
    var v542 = arrayOfPatterns$$3[j$$2];
    var v380 = JAM.call(v542.match, v542, [/\/.+\//], JAM.policy.p16);
    var v69 = v380 + "gi";
    if (JAM.isEval(eval)) {
      var v798 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v798 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v798;
    j$$2++;
    var v381 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v381;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v382 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v382;
  for (;v74;) {
    var v383 = arrayOfPatterns$$4[j$$3];
    var v72 = JAM.call(v383.match, v383, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v799 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v799;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v800 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v800;
    j$$3++;
    var v384 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v384;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v385 = sequence$$3.length;
  var v75 = "Results for " + v385;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v386 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p16);
  var v77 = v386 != -1;
  if (v77) {
    var v387 = stringToReturn$$2 + '"';
    var v76 = v387 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v388 = stringToReturn$$2 + ' starting "';
  var v389 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v78 = v388 + v389;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v543 = "Results for " + topology;
  var v390 = v543 + " ";
  var v391 = sequence$$4.length;
  var v80 = v390 + v391;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v392 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p16);
  var v82 = v392 != -1;
  if (v82) {
    var v393 = stringToReturn$$3 + '"';
    var v81 = v393 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v394 = stringToReturn$$3 + ' starting "';
  var v395 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v394 + v395;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v396 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v396;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v397 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p16);
  var v87 = v397 != -1;
  if (v87) {
    var v398 = stringToReturn$$4 + '"';
    var v86 = v398 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v399 = stringToReturn$$4 + ' starting "';
  var v400 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v399 + v400;
  stringToReturn$$4 = v88 + '"\n';
  var v401 = stringToReturn$$4 + "and ";
  var v402 = sequenceTwo$$1.length;
  var v89 = v401 + v402;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v403 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p16);
  var v91 = v403 != -1;
  if (v91) {
    var v404 = stringToReturn$$4 + '"';
    var v90 = v404 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v405 = stringToReturn$$4 + ' starting "';
  var v406 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v92 = v405 + v406;
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
    var v407 = Math.random();
    var v408 = components.length;
    var v94 = v407 * v408;
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p16);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p18);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p12);
}
function getSequenceFromFasta(sequenceRecord) {
  var v409 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v96 = v409 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v410 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v98 = v410 != -1;
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
  var v773 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p16);
  var v766 = v773 != -1;
  var v775 = !v766;
  if (v775) {
    var v774 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p16);
    v766 = v774 != -1;
  }
  var v757 = v766;
  var v768 = !v757;
  if (v768) {
    var v767 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p16);
    v757 = v767 != -1;
  }
  var v747 = v757;
  var v759 = !v747;
  if (v759) {
    var v758 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p16);
    v747 = v758 != -1;
  }
  var v734 = v747;
  var v749 = !v734;
  if (v749) {
    var v748 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p16);
    v734 = v748 != -1;
  }
  var v719 = v734;
  var v736 = !v719;
  if (v736) {
    var v735 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p16);
    v719 = v735 != -1;
  }
  var v704 = v719;
  var v721 = !v704;
  if (v721) {
    var v720 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p16);
    v704 = v720 != -1;
  }
  var v671 = v704;
  var v706 = !v671;
  if (v706) {
    var v705 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p16);
    v671 = v705 != -1;
  }
  var v619 = v671;
  var v673 = !v619;
  if (v673) {
    var v672 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p16);
    v619 = v672 != -1;
  }
  var v544 = v619;
  var v621 = !v544;
  if (v621) {
    var v620 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p16);
    v544 = v620 != -1;
  }
  var v411 = v544;
  var v546 = !v411;
  if (v546) {
    var v545 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p16);
    v411 = v545 != -1;
  }
  var v99 = v411;
  if (v99) {
    return false;
  }
  return true;
}
function openForm() {
  var v100 = outputWindow.document;
  JAM.call(v100.write, v100, ['<form action="">\n'], JAM.policy.p12);
  return true;
}
function openPre() {
  var v101 = outputWindow.document;
  JAM.call(v101.write, v101, ["<pre>"], JAM.policy.p12);
  var v102 = outputWindow.document;
  JAM.call(v102.write, v102, ['<div class="pre">'], JAM.policy.p12);
  return;
}
function openTextArea() {
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p12);
  return true;
}
function openWindow() {
  var title$$5 = "GenBank Feature Extractor";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v622 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v547 = v622 + "<head>\n";
  var v412 = v547 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v412 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p18);
  if (isColor) {
    var v106 = outputWindow.document;
    var v788 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v784 = v788 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v780 = v784 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v776 = v780 + "div.info {font-weight: bold}\n";
    var v769 = v776 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v760 = v769 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v750 = v760 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v737 = v750 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v722 = v737 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v707 = v722 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v674 = v707 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v623 = v674 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v548 = v623 + "td.many {color: #000000}\n";
    var v413 = v548 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v413 + "</style>\n";
    JAM.call(v106.write, v106, [v107], JAM.policy.p18);
  } else {
    var v108 = outputWindow.document;
    var v792 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v789 = v792 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v785 = v789 + "div.title {display: none}\n";
    var v781 = v785 + "div.info {font-weight: bold}\n";
    var v777 = v781 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v770 = v777 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v761 = v770 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v751 = v761 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v738 = v751 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v723 = v738 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v708 = v723 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v675 = v708 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v624 = v675 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v549 = v624 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v414 = v549 + "img {display: none}\n";
    var v109 = v414 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p18);
  }
  var v110 = outputWindow.document;
  var v625 = "</head>\n" + '<body class="main">\n';
  var v550 = v625 + '<div class="title">';
  var v415 = v550 + title$$6;
  var v111 = v415 + " results</div>\n";
  JAM.call(v110.write, v110, [v111], JAM.policy.p18);
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
  var v112 = outputWindow.document;
  var v626 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v551 = v626 + "<head>\n";
  var v416 = v551 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v416 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p18);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v790 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v786 = v790 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v782 = v786 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v778 = v782 + "div.info {font-weight: bold}\n";
    var v771 = v778 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v762 = v771 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v752 = v762 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v739 = v752 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v724 = v739 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v709 = v724 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v676 = v709 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v627 = v676 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v552 = v627 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v417 = v552 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v417 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p18);
  } else {
    var v116 = outputWindow.document;
    var v794 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v793 = v794 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v791 = v793 + "div.title {display: none}\n";
    var v787 = v791 + "div.info {font-weight: bold}\n";
    var v783 = v787 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v779 = v783 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v772 = v779 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v763 = v772 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v753 = v763 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v740 = v753 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v725 = v740 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v710 = v725 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v677 = v710 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v628 = v677 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v553 = v628 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v418 = v553 + "img {display: none}\n";
    var v117 = v418 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p18);
  }
  var v118 = outputWindow.document;
  var v629 = "</head>\n" + '<body class="main">\n';
  var v554 = v629 + '<div class="title">';
  var v419 = v554 + title$$8;
  var v119 = v419 + " results</div>\n";
  JAM.call(v118.write, v118, [v119], JAM.policy.p18);
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
  var v420 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p16);
  var v120 = v420 != -1;
  if (v120) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p16);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p12);
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p18);
  var v421 = testArray[0];
  var v124 = v421 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v422 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p18);
  var v125 = v422 == -1;
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
  var v423 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9);
  var v128 = v423 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v424 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9);
  var v129 = v424 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v425 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p16);
  var v130 = v425 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v678 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p16);
  var v630 = v678 == -1;
  var v680 = !v630;
  if (v680) {
    var v679 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p16);
    v630 = v679 == -1;
  }
  var v555 = v630;
  var v632 = !v555;
  if (v632) {
    var v631 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p16);
    v555 = v631 == -1;
  }
  var v426 = v555;
  var v557 = !v426;
  if (v557) {
    var v556 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p16);
    v426 = v556 == -1;
  }
  var v131 = v426;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v427 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p16);
  var v132 = v427 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v428 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v428 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v429 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p16);
  var v135 = v429 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v430 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p16);
  var v136 = v430 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v681 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p16);
  var v633 = v681 == -1;
  var v683 = !v633;
  if (v683) {
    var v682 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p16);
    v633 = v682 == -1;
  }
  var v558 = v633;
  var v635 = !v558;
  if (v635) {
    var v634 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p16);
    v558 = v634 == -1;
  }
  var v431 = v558;
  var v560 = !v431;
  if (v560) {
    var v559 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p16);
    v431 = v559 == -1;
  }
  var v137 = v431;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v684 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p16);
  var v636 = v684 == -1;
  var v686 = !v636;
  if (v686) {
    var v685 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p16);
    v636 = v685 == -1;
  }
  var v561 = v636;
  var v638 = !v561;
  if (v638) {
    var v637 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p16);
    v561 = v637 == -1;
  }
  var v432 = v561;
  var v563 = !v432;
  if (v563) {
    var v562 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p16);
    v432 = v562 == -1;
  }
  var v138 = v432;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v433 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p16);
  var v139 = v433 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v687 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p16);
  var v639 = v687 == -1;
  var v689 = !v639;
  if (v689) {
    var v688 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p16);
    v639 = v688 == -1;
  }
  var v564 = v639;
  var v641 = !v564;
  if (v641) {
    var v640 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p16);
    v564 = v640 == -1;
  }
  var v434 = v564;
  var v566 = !v434;
  if (v566) {
    var v565 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p16);
    v434 = v565 == -1;
  }
  var v140 = v434;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v435 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p16);
  var v141 = v435 == -1;
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
    var v436 = basePerLine / groupSize;
    var v145 = j$$6 <= v436;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v437 = k + i$$5;
        var v143 = JAM.call(text$$10.charAt, text$$10, [v437], JAM.policy.p18);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v438 = basePerLine / groupSize;
      v145 = j$$6 <= v438;
    }
    var v146 = outputWindow.document;
    var v147 = lineOfText + "\n";
    JAM.call(v146.write, v146, [v147], JAM.policy.p18);
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
    var v439 = adjustment < 0;
    if (v439) {
      v439 = adjusted >= 0;
    }
    var v149 = v439;
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
    var v440 = basePerLine$$2 / groupSize$$2;
    var v156 = j$$7 <= v440;
    for (;v156;) {
      var v152 = k$$1 < groupSize$$2;
      for (;v152;) {
        var v441 = i$$6 + k$$1;
        var v150 = v441 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v442 = k$$1 + i$$6;
        var v151 = JAM.call(text$$12.charAt, text$$12, [v442], JAM.policy.p18);
        lineOfText$$1 = lineOfText$$1 + v151;
        k$$1 = k$$1 + 1;
        v152 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v154 = numberPosition$$1 == "above";
      if (v154) {
        var v443 = adjustNumbering(i$$6, numberingAdjustment);
        var v153 = rightNum(v443, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v153;
      }
      var v155 = i$$6 >= stopBase$$2;
      if (v155) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v444 = basePerLine$$2 / groupSize$$2;
      v156 = j$$7 <= v444;
    }
    var v179 = numberPosition$$1 == "left";
    if (v179) {
      var v157 = outputWindow.document;
      var v642 = adjustNumbering(lineNum, numberingAdjustment);
      var v567 = rightNum(v642, "", 8, tabIn$$3);
      var v445 = v567 + lineOfText$$1;
      var v158 = v445 + "\n";
      JAM.call(v157.write, v157, [v158], JAM.policy.p18);
      var v162 = strands$$1 == "two";
      if (v162) {
        var v159 = outputWindow.document;
        var v643 = adjustNumbering(lineNum, numberingAdjustment);
        var v568 = rightNum(v643, "", 8, tabIn$$3);
        var v569 = complement(lineOfText$$1);
        var v446 = v568 + v569;
        var v160 = v446 + "\n";
        JAM.call(v159.write, v159, [v160], JAM.policy.p18);
        var v161 = outputWindow.document;
        JAM.call(v161.write, v161, ["\n"], JAM.policy.p12);
      }
    } else {
      var v178 = numberPosition$$1 == "right";
      if (v178) {
        var v163 = outputWindow.document;
        var v570 = adjustNumbering(i$$6, numberingAdjustment);
        var v447 = lineOfText$$1 + v570;
        var v164 = v447 + "\n";
        JAM.call(v163.write, v163, [v164], JAM.policy.p18);
        var v168 = strands$$1 == "two";
        if (v168) {
          var v165 = outputWindow.document;
          var v571 = complement(lineOfText$$1);
          var v572 = adjustNumbering(i$$6, numberingAdjustment);
          var v448 = v571 + v572;
          var v166 = v448 + "\n";
          JAM.call(v165.write, v165, [v166], JAM.policy.p18);
          var v167 = outputWindow.document;
          JAM.call(v167.write, v167, ["\n"], JAM.policy.p12);
        }
      } else {
        var v177 = numberPosition$$1 == "above";
        if (v177) {
          var v169 = outputWindow.document;
          var v170 = aboveNum + "\n";
          JAM.call(v169.write, v169, [v170], JAM.policy.p18);
          var v171 = outputWindow.document;
          var v172 = lineOfText$$1 + "\n";
          JAM.call(v171.write, v171, [v172], JAM.policy.p18);
          var v176 = strands$$1 == "two";
          if (v176) {
            var v173 = outputWindow.document;
            var v449 = complement(lineOfText$$1);
            var v174 = v449 + "\n";
            JAM.call(v173.write, v173, [v174], JAM.policy.p18);
            var v175 = outputWindow.document;
            JAM.call(v175.write, v175, ["\n"], JAM.policy.p12);
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
    var v450 = basePerLine$$3 / groupSize$$3;
    var v187 = j$$8 <= v450;
    for (;v187;) {
      var v183 = k$$2 < groupSize$$3;
      for (;v183;) {
        var v451 = i$$7 + k$$2;
        var v181 = v451 >= stopBase$$3;
        if (v181) {
          break;
        }
        var v452 = k$$2 + i$$7;
        var v182 = JAM.call(text$$13.charAt, text$$13, [v452], JAM.policy.p18);
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
      var v453 = basePerLine$$3 / groupSize$$3;
      v187 = j$$8 <= v453;
    }
    var v198 = numberPosition$$2 == "left";
    if (v198) {
      var v188 = outputWindow.document;
      var v573 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v454 = v573 + lineOfText$$2;
      var v189 = v454 + "\n";
      JAM.call(v188.write, v188, [v189], JAM.policy.p18);
    } else {
      var v197 = numberPosition$$2 == "right";
      if (v197) {
        var v190 = outputWindow.document;
        var v455 = lineOfText$$2 + i$$7;
        var v191 = v455 + "\n";
        JAM.call(v190.write, v190, [v191], JAM.policy.p18);
      } else {
        var v196 = numberPosition$$2 == "above";
        if (v196) {
          var v192 = outputWindow.document;
          var v193 = aboveNum$$1 + "\n";
          JAM.call(v192.write, v192, [v193], JAM.policy.p18);
          var v194 = outputWindow.document;
          var v195 = lineOfText$$2 + "\n";
          JAM.call(v194.write, v194, [v195], JAM.policy.p18);
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
  var v644 = sequence$$13.length;
  var v574 = v644 <= firstIndexToMutate;
  var v645 = !v574;
  if (v645) {
    v574 = lastIndexToMutate < 0;
  }
  var v456 = v574;
  var v575 = !v456;
  if (v575) {
    v456 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v200 = v456;
  if (v200) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v208 = i$$8 < numMut;
  for (;v208;) {
    maxNum = sequence$$13.length;
    var v457 = Math.random();
    var v201 = v457 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v201], JAM.policy.p16);
    var v458 = randNum < firstIndexToMutate;
    var v576 = !v458;
    if (v576) {
      v458 = randNum > lastIndexToMutate;
    }
    var v202 = v458;
    if (v202) {
      numMut++;
      i$$8++;
      v208 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p16);
    needNewChar = true;
    for (;needNewChar;) {
      var v459 = Math.random();
      var v460 = components$$1.length;
      var v203 = v459 * v460;
      componentsIndex = JAM.call(Math.round, Math, [v203], JAM.policy.p16);
      var v461 = components$$1.length;
      var v204 = componentsIndex == v461;
      if (v204) {
        componentsIndex = 0;
      }
      var v462 = components$$1[componentsIndex];
      var v205 = v462 != currentChar;
      if (v205) {
        needNewChar = false;
      }
    }
    var v463 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v464 = components$$1[componentsIndex];
    var v206 = v463 + v464;
    var v465 = randNum + 1;
    var v466 = sequence$$13.length;
    var v207 = JAM.call(sequence$$13.substring, sequence$$13, [v465, v466], JAM.policy.p27);
    sequence$$13 = v206 + v207;
    i$$8++;
    v208 = i$$8 < numMut;
  }
  var v209 = outputWindow.document;
  var v210 = addReturns(sequence$$13);
  JAM.call(v209.write, v209, [v210], JAM.policy.p18);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v215 = j$$9 < lengthOut$$1;
  for (;v215;) {
    var v467 = Math.random();
    var v468 = components$$2.length;
    var v211 = v467 * v468;
    tempNum$$1 = JAM.call(Math.floor, Math, [v211], JAM.policy.p16);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v469 = sequence$$14.length;
    var v214 = v469 == 60;
    if (v214) {
      var v212 = outputWindow.document;
      var v213 = sequence$$14 + "\n";
      JAM.call(v212.write, v212, [v213], JAM.policy.p18);
      sequence$$14 = "";
    }
    j$$9++;
    v215 = j$$9 < lengthOut$$1;
  }
  var v216 = outputWindow.document;
  var v217 = sequence$$14 + "\n";
  JAM.call(v216.write, v216, [v217], JAM.policy.p18);
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
    var v646 = sequence$$15.length;
    var v577 = v646 - lookAhead;
    var v578 = sequence$$15.length;
    var v470 = JAM.call(sequence$$15.substring, sequence$$15, [v577, v578], JAM.policy.p27);
    var v219 = v470 + sequence$$15;
    var v220 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v219 + v220;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v222 = outputWindow.document;
  JAM.call(v222.write, v222, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p12);
  var v223 = outputWindow.document;
  var v647 = '<tr><td class="title" width="200px">' + "Site:";
  var v579 = v647 + '</td><td class="title">';
  var v471 = v579 + "Positions:";
  var v224 = v471 + "</td></tr>\n";
  JAM.call(v223.write, v223, [v224], JAM.policy.p18);
  var i$$9 = 0;
  var v472 = arrayOfItems.length;
  var v240 = i$$9 < v472;
  for (;v240;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v473 = arrayOfItems[i$$9];
    var v225 = JAM.call(v473.match, v473, [/\/.+\//], JAM.policy.p16);
    matchExp = v225 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v648 = arrayOfItems[i$$9];
    var v580 = JAM.call(v648.match, v648, [/\)\D*\d+/], JAM.policy.p16);
    var v474 = v580.toString();
    var v226 = JAM.call(v474.replace, v474, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v226);
    var v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p18);
    for (;v232;) {
      var v227 = matchExp.lastIndex;
      matchPosition = v227 - cutDistance;
      var v475 = matchPosition >= lowerLimit;
      if (v475) {
        v475 = matchPosition < upperLimit;
      }
      var v230 = v475;
      if (v230) {
        timesFound++;
        var v228 = tempString$$1 + ", ";
        var v476 = matchPosition - shiftValue;
        var v229 = v476 + 1;
        tempString$$1 = v228 + v229;
      }
      var v477 = matchExp.lastIndex;
      var v581 = RegExp.lastMatch;
      var v478 = v581.length;
      var v231 = v477 - v478;
      matchExp.lastIndex = v231 + 1;
      v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p18);
    }
    var v479 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p16);
    var v233 = v479 != -1;
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
    var v741 = '<tr><td class="' + backGroundClass;
    var v726 = v741 + '">';
    var v764 = arrayOfItems[i$$9];
    var v754 = JAM.call(v764.match, v764, [/\([^\(]+\)/], JAM.policy.p16);
    var v742 = v754.toString();
    var v727 = JAM.call(v742.replace, v742, [/\(|\)/g, ""], JAM.policy.p15);
    var v711 = v726 + v727;
    var v690 = v711 + '</td><td class="';
    var v649 = v690 + backGroundClass;
    var v582 = v649 + '">';
    var v480 = v582 + tempString$$1;
    var v239 = v480 + "</td></tr>\n";
    JAM.call(v238.write, v238, [v239], JAM.policy.p18);
    timesFound = 0;
    i$$9++;
    var v481 = arrayOfItems.length;
    v240 = i$$9 < v481;
  }
  var v241 = outputWindow.document;
  JAM.call(v241.write, v241, ["</tbody></table>\n"], JAM.policy.p12);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v242 = outputWindow.document;
  JAM.call(v242.write, v242, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p12);
  var v243 = outputWindow.document;
  var v712 = '<tr><td class="title">' + "Pattern:";
  var v691 = v712 + '</td><td class="title">';
  var v650 = v691 + "Times found:";
  var v583 = v650 + '</td><td class="title">';
  var v482 = v583 + "Percentage:";
  var v244 = v482 + "</td></tr>\n";
  JAM.call(v243.write, v243, [v244], JAM.policy.p18);
  var i$$10 = 0;
  var v483 = arrayOfItems$$1.length;
  var v253 = i$$10 < v483;
  for (;v253;) {
    var tempNumber = 0;
    var v484 = arrayOfItems$$1[i$$10];
    var v245 = JAM.call(v484.match, v484, [/\/[^\/]+\//], JAM.policy.p16);
    var matchExp$$1 = v245 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v485 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p18);
    var v247 = v485 != -1;
    if (v247) {
      var v246 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p18);
      tempNumber = v246.length;
    }
    var percentage = 0;
    var v584 = originalLength + 1;
    var v692 = arrayOfItems$$1[i$$10];
    var v651 = JAM.call(v692.match, v692, [/\d+/], JAM.policy.p16);
    var v585 = parseFloat(v651);
    var v486 = v584 - v585;
    var v250 = v486 > 0;
    if (v250) {
      var v248 = 100 * tempNumber;
      var v487 = originalLength + 1;
      var v652 = arrayOfItems$$1[i$$10];
      var v586 = JAM.call(v652.match, v652, [/\d+/], JAM.policy.p16);
      var v488 = parseFloat(v586);
      var v249 = v487 - v488;
      percentage = v248 / v249;
    }
    var v251 = outputWindow.document;
    var v765 = arrayOfItems$$1[i$$10];
    var v755 = JAM.call(v765.match, v765, [/\([^\(]+\)\b/], JAM.policy.p16);
    var v743 = v755.toString();
    var v728 = JAM.call(v743.replace, v743, [/\(|\)/g, ""], JAM.policy.p15);
    var v713 = "<tr><td>" + v728;
    var v693 = v713 + "</td><td>";
    var v653 = v693 + tempNumber;
    var v587 = v653 + "</td><td>";
    var v588 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9);
    var v489 = v587 + v588;
    var v252 = v489 + "</td></tr>\n";
    JAM.call(v251.write, v251, [v252], JAM.policy.p18);
    i$$10++;
    var v490 = arrayOfItems$$1.length;
    v253 = i$$10 < v490;
  }
  var v254 = outputWindow.document;
  JAM.call(v254.write, v254, ["</tbody></table>\n"], JAM.policy.p12);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v491 = sequence$$17.length;
  var v261 = v491 > 0;
  for (;v261;) {
    maxNum$$1 = sequence$$17.length;
    var v492 = Math.random();
    var v255 = v492 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v255], JAM.policy.p16);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p16);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v256 = randNum$$1 + 1;
    var v257 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v256, v257], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v493 = tempSeq.length;
    var v260 = v493 == 60;
    if (v260) {
      var v258 = outputWindow.document;
      var v259 = tempSeq + "\n";
      JAM.call(v258.write, v258, [v259], JAM.policy.p18);
      tempSeq = "";
    }
    var v494 = sequence$$17.length;
    v261 = v494 > 0;
  }
  var v262 = outputWindow.document;
  var v263 = tempSeq + "\n";
  JAM.call(v262.write, v262, [v263], JAM.policy.p18);
  return true;
}
function genbankFeat() {
  var theDocument = document;
  var maxInput$$3 = 1E6;
  var v495 = testScript();
  var v264 = v495 == false;
  if (v264) {
    return;
  }
  var v744 = theDocument.forms;
  var v729 = v744[0];
  var v714 = v729.elements;
  var v694 = v714[0];
  var v654 = checkFormElement(v694);
  var v589 = v654 == false;
  var v656 = !v589;
  if (v656) {
    var v756 = theDocument.forms;
    var v745 = v756[0];
    var v730 = v745.elements;
    var v715 = v730[0];
    var v695 = v715.value;
    var v655 = verifyGenBankFeat(v695);
    v589 = v655 == false;
  }
  var v496 = v589;
  var v591 = !v496;
  if (v591) {
    var v746 = theDocument.forms;
    var v731 = v746[0];
    var v716 = v731.elements;
    var v696 = v716[0];
    var v657 = v696.value;
    var v590 = checkTextLength(v657, maxInput$$3);
    v496 = v590 == false;
  }
  var v265 = v496;
  if (v265) {
    return;
  }
  openWindow();
  openPre();
  var v697 = theDocument.forms;
  var v658 = v697[0];
  var v592 = v658.elements;
  var v497 = v592[0];
  var v266 = v497.value;
  var v732 = theDocument.forms;
  var v717 = v732[0];
  var v698 = v717.elements;
  var v659 = v698[4];
  var v593 = v659.options;
  var v733 = theDocument.forms;
  var v718 = v733[0];
  var v699 = v718.elements;
  var v660 = v699[4];
  var v594 = v660.selectedIndex;
  var v498 = v593[v594];
  var v267 = v498.value;
  genBankFeatExtract(v266, v267);
  closePre();
  closeWindow();
  return;
}
function genBankFeatExtract(genBankFile$$2, outputType) {
  var v268 = "_" + genBankFile$$2;
  genBankFile$$2 = v268 + "_";
  var recordArray = JAM.call(genBankFile$$2.split, genBankFile$$2, [/LOCUS\s\s\s[^\f\n\r]*/m], JAM.policy.p16);
  var i$$11 = 1;
  var v499 = recordArray.length;
  var v277 = i$$11 < v499;
  for (;v277;) {
    var v269 = recordArray[i$$11];
    var mainArray = JAM.call(v269.split, v269, [/DEFINITION|ACCESSION|FEATURES|ORIGIN[^\f\n\r]*/], JAM.policy.p16);
    var v595 = mainArray[1];
    var v500 = JAM.call(v595.replace, v595, [/[\f\n\r\t]+$/g, ""], JAM.policy.p15);
    var v270 = filterFastaTitle(v500);
    var title$$9 = v270 + "\n";
    var v271 = mainArray[4];
    var dnaSequenceArray = JAM.call(v271.split, v271, [/\/{2}/], JAM.policy.p16);
    var v272 = outputWindow.document;
    var v273 = title$$9 + "\n";
    JAM.call(v272.write, v272, [v273], JAM.policy.p18);
    var v501 = dnaSequenceArray.length;
    var v274 = v501 == 1;
    if (v274) {
      alert("The entire GenBank file may not have been processed.");
      outputWindow.focus();
    }
    var v275 = dnaSequenceArray[0];
    var dnaSequence$$3 = removeNonDna(v275);
    var v276 = mainArray[3];
    var featureArray = JAM.call(v276.split, v276, [/[\f\n\r] {5,12}\b/], JAM.policy.p16);
    prepareFeatures(featureArray, dnaSequence$$3, outputType);
    i$$11++;
    var v502 = recordArray.length;
    v277 = i$$11 < v502;
  }
  return;
}
function prepareFeatures(arrayOfFeatures, dnaSequence$$4, outputType$$1) {
  var featureTitle = "";
  var theTitle = "";
  var removedTitle = "";
  var firstQualifier = "";
  var position = "";
  var positionNoSpace = "";
  var featureFound = false;
  var i$$12 = 1;
  var v503 = arrayOfFeatures.length;
  var v287 = i$$12 < v503;
  for (;v287;) {
    var v278 = arrayOfFeatures[i$$12];
    var v801 = JAM.call(v278.replace, v278, [/[\[\]\*]/g, ""], JAM.policy.p15);
    arrayOfFeatures[i$$12] = v801;
    var v504 = arrayOfFeatures[i$$12];
    var v279 = JAM.call(v504.match, v504, [/[^ \f\n\r\t\v]+ /], JAM.policy.p16);
    featureTitle = v279.toString();
    theTitle = new RegExp(featureTitle);
    var v280 = arrayOfFeatures[i$$12];
    removedTitle = JAM.call(v280.replace, v280, [theTitle, ""], JAM.policy.p19);
    var v596 = arrayOfFeatures[i$$12];
    var v505 = JAM.call(v596.search, v596, [/\/[^\f\n\r]+/], JAM.policy.p16);
    var v282 = v505 != -1;
    if (v282) {
      var v506 = arrayOfFeatures[i$$12];
      var v281 = JAM.call(v506.match, v506, [/\/[^\f\n\r]+/], JAM.policy.p16);
      firstQualifier = v281.toString();
    } else {
      firstQualifier = "/no qualifier supplied";
    }
    position = JAM.call(removedTitle.split, removedTitle, [/\//], JAM.policy.p16);
    var v283 = position[0];
    positionNoSpace = JAM.call(v283.replace, v283, [/\s{2,}/g, " "], JAM.policy.p15);
    var v284 = outputWindow.document;
    var v661 = filterFastaTitle(featureTitle);
    var v597 = "&gt;" + v661;
    var v598 = filterFastaTitle(firstQualifier);
    var v507 = v597 + v598;
    var v285 = v507 + "\n";
    JAM.call(v284.write, v284, [v285], JAM.policy.p18);
    printFeature(positionNoSpace, dnaSequence$$4, outputType$$1);
    featureFound = true;
    var v286 = outputWindow.document;
    JAM.call(v286.write, v286, ["\n\n"], JAM.policy.p12);
    i$$12++;
    var v508 = arrayOfFeatures.length;
    v287 = i$$12 < v508;
  }
  var v289 = featureFound == false;
  if (v289) {
    var v288 = outputWindow.document;
    JAM.call(v288.write, v288, ["There were no features found or there was a problem reading the feature information."], JAM.policy.p12);
  }
  return;
}
function printFeature(featurePos, dnaSequence$$5, outputType$$2) {
  var feature$$4;
  featurePos = JAM.call(featurePos.replace, featurePos, [/<|>/g, ""], JAM.policy.p15);
  var v662 = JAM.call(featurePos.search, featurePos, [/[^a-z\d\.\(\)\,\s]/], JAM.policy.p16);
  var v599 = v662 != -1;
  var v664 = !v599;
  if (v664) {
    var v663 = JAM.call(featurePos.search, featurePos, [/one/], JAM.policy.p16);
    v599 = v663 != -1;
  }
  var v509 = v599;
  var v601 = !v509;
  if (v601) {
    var v600 = JAM.call(featurePos.search, featurePos, [/order/], JAM.policy.p16);
    v509 = v600 != -1;
  }
  var v308 = v509;
  if (v308) {
    var v290 = outputWindow.document;
    JAM.call(v290.write, v290, ["This feature specifies a sequence that cannot be represented:\n"], JAM.policy.p12);
    var v291 = outputWindow.document;
    JAM.call(v291.write, v291, [featurePos], JAM.policy.p18);
  } else {
    var newFeaturePos = JAM.call(featurePos.replace, featurePos, [/\)/g, ""], JAM.policy.p15);
    var v510 = JAM.call(newFeaturePos.search, newFeaturePos, [/complement/], JAM.policy.p16);
    var v292 = v510 != -1;
    if (v292) {
      feature$$4 = new Feature("complement");
    } else {
      feature$$4 = new Feature("direct");
    }
    var posArray = JAM.call(newFeaturePos.split, newFeaturePos, [/\(/], JAM.policy.p16);
    var v293 = posArray.length;
    var last = v293 - 1;
    var pairString = posArray[last];
    var pairArray = JAM.call(pairString.split, pairString, [/\,/], JAM.policy.p16);
    var digitArray = new Array;
    var realStart = 0;
    var realStop = 0;
    var j$$10 = 0;
    var v511 = pairArray.length;
    var v307 = j$$10 < v511;
    for (;v307;) {
      var v294 = pairArray[j$$10];
      digitArray = JAM.call(v294.split, v294, [/\.\./], JAM.policy.p16);
      var v512 = digitArray.length;
      var v295 = v512 == 1;
      if (v295) {
        digitArray[1] = digitArray[0];
      }
      realStart = digitArray[0];
      realStop = digitArray[1];
      realStop = JAM.call(realStop.replace, realStop, [/\D/g, ""], JAM.policy.p15);
      realStart = JAM.call(realStart.replace, realStart, [/\D/g, ""], JAM.policy.p15);
      var v602 = JAM.call(realStart.search, realStart, [/\d/], JAM.policy.p16);
      var v513 = v602 == -1;
      var v604 = !v513;
      if (v604) {
        var v603 = JAM.call(realStop.search, realStop, [/\d/], JAM.policy.p16);
        v513 = v603 == -1;
      }
      var v297 = v513;
      if (v297) {
        var v296 = outputWindow.document;
        JAM.call(v296.write, v296, ["There was a problem with this feature (one of the range values was missing)."], JAM.policy.p12);
        return;
      }
      var v298 = parseInt(realStart);
      realStart = v298 - 1;
      realStop = parseInt(realStop);
      var v300 = realStart > realStop;
      if (v300) {
        var v299 = outputWindow.document;
        JAM.call(v299.write, v299, ["There was a problem with this feature (the end position was before the start position)."], JAM.policy.p12);
        return;
      }
      var v605 = dnaSequence$$5.length;
      var v514 = realStart > v605;
      var v607 = !v514;
      if (v607) {
        var v606 = dnaSequence$$5.length;
        v514 = realStop > v606;
      }
      var v306 = v514;
      if (v306) {
        var v301 = outputWindow.document;
        JAM.call(v301.write, v301, ["The entire GenBank file was not processed, so this feature cannot be properly shown."], JAM.policy.p12);
        return;
      } else {
        var v305 = outputType$$2 == "separated";
        if (v305) {
          var v302 = JAM.call(dnaSequence$$5.substring, dnaSequence$$5, [realStart, realStop], JAM.policy.p27);
          JAM.call(feature$$4.addFragment, feature$$4, [v302], JAM.policy.p18);
        } else {
          var v515 = feature$$4.lastAdded;
          var v303 = JAM.call(dnaSequence$$5.substring, dnaSequence$$5, [v515, realStart], JAM.policy.p27);
          JAM.call(feature$$4.addFragment, feature$$4, [v303], JAM.policy.p18);
          var v516 = JAM.call(dnaSequence$$5.substring, dnaSequence$$5, [realStart, realStop], JAM.policy.p27);
          var v304 = v516.toUpperCase();
          JAM.call(feature$$4.addFragment, feature$$4, [v304], JAM.policy.p18);
          feature$$4.lastAdded = realStop;
        }
      }
      j$$10++;
      var v517 = pairArray.length;
      v307 = j$$10 < v517;
    }
    feature$$4.writeFeature();
  }
  return;
}
function writeFeature() {
  var v518 = this.strand;
  var v313 = v518 == "complement";
  if (v313) {
    var v309 = outputWindow.document;
    var v700 = this.fragments;
    var v665 = JAM.call(v700.join, v700, [""], JAM.policy.p12);
    var v608 = complement(v665);
    var v519 = reverse(v608);
    var v310 = addReturns(v519);
    JAM.call(v309.write, v309, [v310], JAM.policy.p18);
  } else {
    var v311 = outputWindow.document;
    var v609 = this.fragments;
    var v520 = JAM.call(v609.join, v609, [""], JAM.policy.p12);
    var v312 = addReturns(v520);
    JAM.call(v311.write, v311, [v312], JAM.policy.p18);
  }
  return;
}
function addFragment(sequence$$18) {
  var v314 = this.fragments;
  JAM.call(v314.push, v314, [sequence$$18], JAM.policy.p18);
  return;
}
function Feature(strand) {
  this.strand = strand;
  var v802 = new Array;
  this.fragments = v802;
  this.lastAdded = 0;
  return;
}
new Feature;
var v315 = Feature.prototype;
v315.writeFeature = writeFeature;
var v316 = Feature.prototype;
v316.addFragment = addFragment;
JAM.set(document, "onload", v2);
var v317 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p12);
JAM.set(v317, "onclick", v3);
var v318 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p12);
JAM.set(v318, "onclick", v4)
