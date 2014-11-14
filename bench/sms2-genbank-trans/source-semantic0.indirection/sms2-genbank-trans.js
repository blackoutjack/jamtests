function v4() {
  var v559 = document.forms;
  var v482 = v559[0];
  var v293 = v482.elements;
  var v5 = v293[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    genbankTrans(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v294 = document.main_form;
  var v7 = v294.main_submit;
  v7.focus();
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
  var v8 = arrayOfSequences[0];
  var lengthOfAlign = v8.length;
  var v295 = arrayOfSequences.length;
  var v9 = v295 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v296 = arrayOfTitles.length;
  var v11 = i$$1 < v296;
  for (;v11;) {
    var v609 = arrayOfTitles[i$$1];
    var v560 = JAM.call(v609.search, v609, [/\S/], JAM.policy.p15);
    var v483 = v560 == -1;
    var v562 = !v483;
    if (v562) {
      var v610 = arrayOfSequences[i$$1];
      var v561 = JAM.call(v610.search, v610, [/\S/], JAM.policy.p15);
      v483 = v561 == -1;
    }
    var v297 = v483;
    var v485 = !v297;
    if (v485) {
      var v563 = arrayOfSequences[i$$1];
      var v484 = v563.length;
      v297 = v484 != lengthOfAlign;
    }
    var v10 = v297;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v298 = arrayOfTitles.length;
    v11 = i$$1 < v298;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v641 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p15);
  var v611 = v641 == -1;
  var v643 = !v611;
  if (v643) {
    var v642 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p15);
    v611 = v642 == -1;
  }
  var v564 = v611;
  var v613 = !v564;
  if (v613) {
    var v612 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p15);
    v564 = v612 == -1;
  }
  var v486 = v564;
  var v566 = !v486;
  if (v566) {
    var v565 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p15);
    v486 = v565 == -1;
  }
  var v299 = v486;
  var v488 = !v299;
  if (v488) {
    var v487 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p15);
    v299 = v487 == -1;
  }
  var v12 = v299;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v489 = formElement.value;
  var v300 = JAM.call(v489.search, v489, [/\S/], JAM.policy.p15);
  var v13 = v300 == -1;
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
  var v301 = arrayOfPatterns.length;
  var v16 = z$$2 < v301;
  for (;v16;) {
    var v490 = arrayOfPatterns[z$$2];
    var v302 = JAM.call(v490.search, v490, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p15);
    var v14 = v302 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v491 = arrayOfPatterns[z$$2];
    var v303 = moreExpressionCheck(v491);
    var v15 = v303 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v304 = arrayOfPatterns.length;
    v16 = z$$2 < v304;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v305 = arrayOfPatterns.length;
  var v22 = j < v305;
  for (;v22;) {
    var v492 = arrayOfPatterns[j];
    var v306 = JAM.call(v492.match, v492, [/\/.+\//], JAM.policy.p15);
    var v19 = v306 + "gi";
    if (JAM.isEval(eval)) {
      var v731 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v731 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v731;
    var v307 = arrayOfPatterns[j];
    var v20 = JAM.call(v307.match, v307, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v732 = v20.toString();
    geneticCodeMatchResult[j] = v732;
    var v21 = geneticCodeMatchResult[j];
    var v733 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v733;
    j++;
    var v308 = arrayOfPatterns.length;
    v22 = j < v308;
  }
  var i$$2 = 0;
  var v493 = testSequence.length;
  var v309 = v493 - 3;
  var v29 = i$$2 <= v309;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p16);
    j = 0;
    var v310 = geneticCodeMatchExp.length;
    var v27 = j < v310;
    for (;v27;) {
      var v494 = geneticCodeMatchExp[j];
      var v311 = JAM.call(codon.search, codon, [v494], JAM.policy.p18);
      var v26 = v311 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v312 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v312 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v313 = geneticCodeMatchExp.length;
      v27 = j < v313;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v495 = testSequence.length;
    var v314 = v495 - 3;
    v29 = i$$2 <= v314;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v315 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v315;
  for (;v31;) {
    var v496 = arrayOfPatterns$$1[z$$3];
    var v316 = JAM.call(v496.search, v496, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p15);
    var v30 = v316 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v317 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v317;
  }
  var i$$3 = 0;
  var v318 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v318;
  for (;v35;) {
    var v497 = arrayOfPatterns$$1[i$$3];
    var v319 = "[" + v497;
    var v32 = v319 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v320 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v320;
    for (;v34;) {
      var v498 = arrayOfPatterns$$1[j$$1];
      var v321 = JAM.call(v498.search, v498, [re], JAM.policy.p18);
      var v33 = v321 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v322 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v322;
    }
    i$$3++;
    var v323 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v323;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v324 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v324;
  for (;v38;) {
    var v499 = arrayOfPatterns$$2[z$$4];
    var v325 = JAM.call(v499.search, v499, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p15);
    var v36 = v325 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v500 = arrayOfPatterns$$2[z$$4];
    var v326 = moreExpressionCheck(v500);
    var v37 = v326 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v327 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v327;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v567 = getSequenceFromFasta(text$$7);
  var v501 = JAM.call(v567.replace, v567, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v328 = v501.length;
  var v40 = v328 > maxInput;
  if (v40) {
    var v329 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v329 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v330 = text$$8.length;
  var v42 = v330 > maxInput$$1;
  if (v42) {
    var v331 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v331 + " characters.";
    alert(v41);
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
  var v332 = alignArray.length;
  var v49 = v332 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v333 = alignArray.length;
  var v51 = i$$4 < v333;
  for (;v51;) {
    var v502 = alignArray[i$$4];
    var v334 = JAM.call(v502.search, v502, [/[^\s]+\s/], JAM.policy.p15);
    var v50 = v334 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v335 = alignArray.length;
    v51 = i$$4 < v335;
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
  var v336 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v54 = v336 != -1;
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
  var v337 = sequence$$2.length;
  var v55 = "&gt;results for " + v337;
  var stringToReturn = v55 + " residue sequence ";
  var v338 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p15);
  var v57 = v338 != -1;
  if (v57) {
    var v339 = stringToReturn + '"';
    var v56 = v339 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v340 = stringToReturn + ' starting "';
  var v341 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v340 + v341;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v342 = sequenceOne.length;
  var v59 = "Search results for " + v342;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v343 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p15);
  var v61 = v343 != -1;
  if (v61) {
    var v344 = stringToReturn$$1 + '"';
    var v60 = v344 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v345 = stringToReturn$$1 + ' starting "';
  var v346 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v345 + v346;
  stringToReturn$$1 = v62 + '"\n';
  var v347 = stringToReturn$$1 + "and ";
  var v348 = sequenceTwo.length;
  var v63 = v347 + v348;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v349 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p15);
  var v65 = v349 != -1;
  if (v65) {
    var v350 = stringToReturn$$1 + '"';
    var v64 = v350 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v351 = stringToReturn$$1 + ' starting "';
  var v352 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v66 = v351 + v352;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v353 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v353;
  for (;v70;) {
    var v503 = arrayOfPatterns$$3[j$$2];
    var v354 = JAM.call(v503.match, v503, [/\/.+\//], JAM.policy.p15);
    var v69 = v354 + "gi";
    if (JAM.isEval(eval)) {
      var v734 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v734 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v734;
    j$$2++;
    var v355 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v355;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v356 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v356;
  for (;v74;) {
    var v357 = arrayOfPatterns$$4[j$$3];
    var v72 = JAM.call(v357.match, v357, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v735 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v735;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v736 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v736;
    j$$3++;
    var v358 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v358;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v359 = sequence$$3.length;
  var v75 = "Results for " + v359;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v360 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p15);
  var v77 = v360 != -1;
  if (v77) {
    var v361 = stringToReturn$$2 + '"';
    var v76 = v361 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v362 = stringToReturn$$2 + ' starting "';
  var v363 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v78 = v362 + v363;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v504 = "Results for " + topology;
  var v364 = v504 + " ";
  var v365 = sequence$$4.length;
  var v80 = v364 + v365;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v366 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p15);
  var v82 = v366 != -1;
  if (v82) {
    var v367 = stringToReturn$$3 + '"';
    var v81 = v367 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v368 = stringToReturn$$3 + ' starting "';
  var v369 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v368 + v369;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v370 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v370;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v371 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p15);
  var v87 = v371 != -1;
  if (v87) {
    var v372 = stringToReturn$$4 + '"';
    var v86 = v372 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v373 = stringToReturn$$4 + ' starting "';
  var v374 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v373 + v374;
  stringToReturn$$4 = v88 + '"\n';
  var v375 = stringToReturn$$4 + "and ";
  var v376 = sequenceTwo$$1.length;
  var v89 = v375 + v376;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v377 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p15);
  var v91 = v377 != -1;
  if (v91) {
    var v378 = stringToReturn$$4 + '"';
    var v90 = v378 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v379 = stringToReturn$$4 + ' starting "';
  var v380 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v92 = v379 + v380;
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
    var v381 = Math.random();
    var v382 = components.length;
    var v94 = v381 * v382;
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p15);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p18);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p9);
}
function getSequenceFromFasta(sequenceRecord) {
  var v383 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v96 = v383 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v384 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v98 = v384 != -1;
  if (v98) {
    var v97 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
    fastaTitle = v97.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p16);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v709 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p15);
  var v702 = v709 != -1;
  var v711 = !v702;
  if (v711) {
    var v710 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p15);
    v702 = v710 != -1;
  }
  var v693 = v702;
  var v704 = !v693;
  if (v704) {
    var v703 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p15);
    v693 = v703 != -1;
  }
  var v683 = v693;
  var v695 = !v683;
  if (v695) {
    var v694 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p15);
    v683 = v694 != -1;
  }
  var v670 = v683;
  var v685 = !v670;
  if (v685) {
    var v684 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p15);
    v670 = v684 != -1;
  }
  var v657 = v670;
  var v672 = !v657;
  if (v672) {
    var v671 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p15);
    v657 = v671 != -1;
  }
  var v644 = v657;
  var v659 = !v644;
  if (v659) {
    var v658 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p15);
    v644 = v658 != -1;
  }
  var v614 = v644;
  var v646 = !v614;
  if (v646) {
    var v645 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p15);
    v614 = v645 != -1;
  }
  var v568 = v614;
  var v616 = !v568;
  if (v616) {
    var v615 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p15);
    v568 = v615 != -1;
  }
  var v505 = v568;
  var v570 = !v505;
  if (v570) {
    var v569 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p15);
    v505 = v569 != -1;
  }
  var v385 = v505;
  var v507 = !v385;
  if (v507) {
    var v506 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p15);
    v385 = v506 != -1;
  }
  var v99 = v385;
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
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v571 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v508 = v571 + "<head>\n";
  var v386 = v508 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v386 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p18);
  if (isColor) {
    var v106 = outputWindow.document;
    var v724 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v720 = v724 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v716 = v720 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v712 = v716 + "div.info {font-weight: bold}\n";
    var v705 = v712 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v696 = v705 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v686 = v696 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v673 = v686 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v660 = v673 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v647 = v660 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v617 = v647 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v572 = v617 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v509 = v572 + "td.many {color: #000000}\n";
    var v387 = v509 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v387 + "</style>\n";
    JAM.call(v106.write, v106, [v107], JAM.policy.p18);
  } else {
    var v108 = outputWindow.document;
    var v728 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v725 = v728 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v721 = v725 + "div.title {display: none}\n";
    var v717 = v721 + "div.info {font-weight: bold}\n";
    var v713 = v717 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v706 = v713 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v697 = v706 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v687 = v697 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v674 = v687 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v661 = v674 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v648 = v661 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v618 = v648 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v573 = v618 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v510 = v573 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v388 = v510 + "img {display: none}\n";
    var v109 = v388 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p18);
  }
  var v110 = outputWindow.document;
  var v574 = "</head>\n" + '<body class="main">\n';
  var v511 = v574 + '<div class="title">';
  var v389 = v511 + title$$6;
  var v111 = v389 + " results</div>\n";
  JAM.call(v110.write, v110, [v111], JAM.policy.p18);
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
  var v112 = outputWindow.document;
  var v575 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v512 = v575 + "<head>\n";
  var v390 = v512 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v390 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p18);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v726 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v722 = v726 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v718 = v722 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v714 = v718 + "div.info {font-weight: bold}\n";
    var v707 = v714 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v698 = v707 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v688 = v698 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v675 = v688 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v662 = v675 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v649 = v662 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v619 = v649 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v576 = v619 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v513 = v576 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v391 = v513 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v391 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p18);
  } else {
    var v116 = outputWindow.document;
    var v730 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v729 = v730 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v727 = v729 + "div.title {display: none}\n";
    var v723 = v727 + "div.info {font-weight: bold}\n";
    var v719 = v723 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v715 = v719 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v708 = v715 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v699 = v708 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v689 = v699 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v676 = v689 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v663 = v676 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v650 = v663 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v620 = v650 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v577 = v620 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v514 = v577 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v392 = v514 + "img {display: none}\n";
    var v117 = v392 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p18);
  }
  var v118 = outputWindow.document;
  var v578 = "</head>\n" + '<body class="main">\n';
  var v515 = v578 + '<div class="title">';
  var v393 = v515 + title$$8;
  var v119 = v393 + " results</div>\n";
  JAM.call(v118.write, v118, [v119], JAM.policy.p18);
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
  var v394 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p15);
  var v120 = v394 != -1;
  if (v120) {
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
  var v395 = testArray[0];
  var v124 = v395 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v396 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p18);
  var v125 = v396 == -1;
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
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p16);
  var v127 = testString != "1X2X3X";
  if (v127) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v397 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p11);
  var v128 = v397 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v398 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p11);
  var v129 = v398 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v399 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p15);
  var v130 = v399 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v621 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p15);
  var v579 = v621 == -1;
  var v623 = !v579;
  if (v623) {
    var v622 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p15);
    v579 = v622 == -1;
  }
  var v516 = v579;
  var v581 = !v516;
  if (v581) {
    var v580 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p15);
    v516 = v580 == -1;
  }
  var v400 = v516;
  var v518 = !v400;
  if (v518) {
    var v517 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p15);
    v400 = v517 == -1;
  }
  var v131 = v400;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v401 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p15);
  var v132 = v401 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v402 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v402 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v403 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p15);
  var v135 = v403 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v404 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p15);
  var v136 = v404 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v624 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p15);
  var v582 = v624 == -1;
  var v626 = !v582;
  if (v626) {
    var v625 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p15);
    v582 = v625 == -1;
  }
  var v519 = v582;
  var v584 = !v519;
  if (v584) {
    var v583 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p15);
    v519 = v583 == -1;
  }
  var v405 = v519;
  var v521 = !v405;
  if (v521) {
    var v520 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p15);
    v405 = v520 == -1;
  }
  var v137 = v405;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v627 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p15);
  var v585 = v627 == -1;
  var v629 = !v585;
  if (v629) {
    var v628 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p15);
    v585 = v628 == -1;
  }
  var v522 = v585;
  var v587 = !v522;
  if (v587) {
    var v586 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p15);
    v522 = v586 == -1;
  }
  var v406 = v522;
  var v524 = !v406;
  if (v524) {
    var v523 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p15);
    v406 = v523 == -1;
  }
  var v138 = v406;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v407 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p15);
  var v139 = v407 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v630 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p15);
  var v588 = v630 == -1;
  var v632 = !v588;
  if (v632) {
    var v631 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p15);
    v588 = v631 == -1;
  }
  var v525 = v588;
  var v590 = !v525;
  if (v590) {
    var v589 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p15);
    v525 = v589 == -1;
  }
  var v408 = v525;
  var v527 = !v408;
  if (v527) {
    var v526 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p15);
    v408 = v526 == -1;
  }
  var v140 = v408;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v409 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p15);
  var v141 = v409 == -1;
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
    var v410 = basePerLine / groupSize;
    var v145 = j$$6 <= v410;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v411 = k + i$$5;
        var v143 = JAM.call(text$$10.charAt, text$$10, [v411], JAM.policy.p18);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v412 = basePerLine / groupSize;
      v145 = j$$6 <= v412;
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
  JAM.call(writeGroupNumDnaSetStart, null, [text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0], JAM.policy.p19);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v413 = adjustment < 0;
    if (v413) {
      v413 = adjusted >= 0;
    }
    var v149 = v413;
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
    var v414 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v414;
    for (;v158;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v415 = i$$6 + k$$1;
        var v150 = v415 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v151 = lineOfText$$1;
        var v416 = k$$1 + i$$6;
        var v152 = JAM.call(text$$12.charAt, text$$12, [v416], JAM.policy.p18);
        lineOfText$$1 = v151 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v156 = numberPosition$$1 == "above";
      if (v156) {
        var v154 = aboveNum;
        var v417 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
        var v155 = rightNum(v417, "", groupSize$$2, tabIn$$3);
        aboveNum = v154 + v155;
      }
      var v157 = i$$6 >= stopBase$$2;
      if (v157) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v418 = basePerLine$$2 / groupSize$$2;
      v158 = j$$7 <= v418;
    }
    var v181 = numberPosition$$1 == "left";
    if (v181) {
      var v159 = outputWindow.document;
      var v591 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19);
      var v528 = rightNum(v591, "", 8, tabIn$$3);
      var v419 = v528 + lineOfText$$1;
      var v160 = v419 + "\n";
      JAM.call(v159.write, v159, [v160], JAM.policy.p18);
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v592 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19);
        var v529 = rightNum(v592, "", 8, tabIn$$3);
        var v530 = complement(lineOfText$$1);
        var v420 = v529 + v530;
        var v162 = v420 + "\n";
        JAM.call(v161.write, v161, [v162], JAM.policy.p18);
        var v163 = outputWindow.document;
        JAM.call(v163.write, v163, ["\n"], JAM.policy.p9);
      }
    } else {
      var v180 = numberPosition$$1 == "right";
      if (v180) {
        var v165 = outputWindow.document;
        var v531 = lineOfText$$1;
        var v532 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
        var v421 = v531 + v532;
        var v166 = v421 + "\n";
        JAM.call(v165.write, v165, [v166], JAM.policy.p18);
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v533 = complement(lineOfText$$1);
          var v534 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
          var v422 = v533 + v534;
          var v168 = v422 + "\n";
          JAM.call(v167.write, v167, [v168], JAM.policy.p18);
          var v169 = outputWindow.document;
          JAM.call(v169.write, v169, ["\n"], JAM.policy.p9);
        }
      } else {
        var v179 = numberPosition$$1 == "above";
        if (v179) {
          var v171 = outputWindow.document;
          var v172 = aboveNum + "\n";
          JAM.call(v171.write, v171, [v172], JAM.policy.p18);
          var v173 = outputWindow.document;
          var v174 = lineOfText$$1 + "\n";
          JAM.call(v173.write, v173, [v174], JAM.policy.p18);
          var v178 = strands$$1 == "two";
          if (v178) {
            var v175 = outputWindow.document;
            var v423 = complement(lineOfText$$1);
            var v176 = v423 + "\n";
            JAM.call(v175.write, v175, [v176], JAM.policy.p18);
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
    var v424 = basePerLine$$3 / groupSize$$3;
    var v189 = j$$8 <= v424;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        var v425 = i$$7 + k$$2;
        var v183 = v425 >= stopBase$$3;
        if (v183) {
          break;
        }
        var v426 = k$$2 + i$$7;
        var v184 = JAM.call(text$$13.charAt, text$$13, [v426], JAM.policy.p18);
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
      var v427 = basePerLine$$3 / groupSize$$3;
      v189 = j$$8 <= v427;
    }
    var v200 = numberPosition$$2 == "left";
    if (v200) {
      var v190 = outputWindow.document;
      var v535 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v428 = v535 + lineOfText$$2;
      var v191 = v428 + "\n";
      JAM.call(v190.write, v190, [v191], JAM.policy.p18);
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v429 = lineOfText$$2 + i$$7;
        var v193 = v429 + "\n";
        JAM.call(v192.write, v192, [v193], JAM.policy.p18);
      } else {
        var v198 = numberPosition$$2 == "above";
        if (v198) {
          var v194 = outputWindow.document;
          var v195 = aboveNum$$1 + "\n";
          JAM.call(v194.write, v194, [v195], JAM.policy.p18);
          var v196 = outputWindow.document;
          var v197 = lineOfText$$2 + "\n";
          JAM.call(v196.write, v196, [v197], JAM.policy.p18);
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
  var v593 = sequence$$13.length;
  var v536 = v593 <= firstIndexToMutate;
  var v594 = !v536;
  if (v594) {
    v536 = lastIndexToMutate < 0;
  }
  var v430 = v536;
  var v537 = !v430;
  if (v537) {
    v430 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v202 = v430;
  if (v202) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    var v431 = Math.random();
    var v203 = v431 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v203], JAM.policy.p15);
    var v432 = randNum < firstIndexToMutate;
    var v538 = !v432;
    if (v538) {
      v432 = randNum > lastIndexToMutate;
    }
    var v204 = v432;
    if (v204) {
      numMut++;
      i$$8++;
      v210 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p15);
    needNewChar = true;
    for (;needNewChar;) {
      var v433 = Math.random();
      var v434 = components$$1.length;
      var v205 = v433 * v434;
      componentsIndex = JAM.call(Math.round, Math, [v205], JAM.policy.p15);
      var v435 = components$$1.length;
      var v206 = componentsIndex == v435;
      if (v206) {
        componentsIndex = 0;
      }
      var v436 = components$$1[componentsIndex];
      var v207 = v436 != currentChar;
      if (v207) {
        needNewChar = false;
      }
    }
    var v437 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v438 = components$$1[componentsIndex];
    var v208 = v437 + v438;
    var v439 = randNum + 1;
    var v440 = sequence$$13.length;
    var v209 = JAM.call(sequence$$13.substring, sequence$$13, [v439, v440], JAM.policy.p21);
    sequence$$13 = v208 + v209;
    i$$8++;
    v210 = i$$8 < numMut;
  }
  var v211 = outputWindow.document;
  var v212 = addReturns(sequence$$13);
  JAM.call(v211.write, v211, [v212], JAM.policy.p18);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v217 = j$$9 < lengthOut$$1;
  for (;v217;) {
    var v441 = Math.random();
    var v442 = components$$2.length;
    var v213 = v441 * v442;
    tempNum$$1 = JAM.call(Math.floor, Math, [v213], JAM.policy.p15);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v443 = sequence$$14.length;
    var v216 = v443 == 60;
    if (v216) {
      var v214 = outputWindow.document;
      var v215 = sequence$$14 + "\n";
      JAM.call(v214.write, v214, [v215], JAM.policy.p18);
      sequence$$14 = "";
    }
    j$$9++;
    v217 = j$$9 < lengthOut$$1;
  }
  var v218 = outputWindow.document;
  var v219 = sequence$$14 + "\n";
  JAM.call(v218.write, v218, [v219], JAM.policy.p18);
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
    var v595 = sequence$$15.length;
    var v539 = v595 - lookAhead;
    var v540 = sequence$$15.length;
    var v444 = JAM.call(sequence$$15.substring, sequence$$15, [v539, v540], JAM.policy.p21);
    var v221 = v444 + sequence$$15;
    var v222 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v221 + v222;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  JAM.call(v224.write, v224, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v225 = outputWindow.document;
  var v596 = '<tr><td class="title" width="200px">' + "Site:";
  var v541 = v596 + '</td><td class="title">';
  var v445 = v541 + "Positions:";
  var v226 = v445 + "</td></tr>\n";
  JAM.call(v225.write, v225, [v226], JAM.policy.p18);
  var i$$9 = 0;
  var v446 = arrayOfItems.length;
  var v242 = i$$9 < v446;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v447 = arrayOfItems[i$$9];
    var v227 = JAM.call(v447.match, v447, [/\/.+\//], JAM.policy.p15);
    matchExp = v227 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v597 = arrayOfItems[i$$9];
    var v542 = JAM.call(v597.match, v597, [/\)\D*\d+/], JAM.policy.p15);
    var v448 = v542.toString();
    var v228 = JAM.call(v448.replace, v448, [/\)\D*/, ""], JAM.policy.p16);
    cutDistance = parseFloat(v228);
    var v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p18);
    for (;v234;) {
      var v229 = matchExp.lastIndex;
      matchPosition = v229 - cutDistance;
      var v449 = matchPosition >= lowerLimit;
      if (v449) {
        v449 = matchPosition < upperLimit;
      }
      var v232 = v449;
      if (v232) {
        timesFound++;
        var v230 = tempString$$1 + ", ";
        var v450 = matchPosition - shiftValue;
        var v231 = v450 + 1;
        tempString$$1 = v230 + v231;
      }
      var v451 = matchExp.lastIndex;
      var v543 = RegExp.lastMatch;
      var v452 = v543.length;
      var v233 = v451 - v452;
      matchExp.lastIndex = v233 + 1;
      v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p18);
    }
    var v453 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p15);
    var v235 = v453 != -1;
    if (v235) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p16);
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
    var v677 = '<tr><td class="' + backGroundClass;
    var v664 = v677 + '">';
    var v700 = arrayOfItems[i$$9];
    var v690 = JAM.call(v700.match, v700, [/\([^\(]+\)/], JAM.policy.p15);
    var v678 = v690.toString();
    var v665 = JAM.call(v678.replace, v678, [/\(|\)/g, ""], JAM.policy.p16);
    var v651 = v664 + v665;
    var v633 = v651 + '</td><td class="';
    var v598 = v633 + backGroundClass;
    var v544 = v598 + '">';
    var v454 = v544 + tempString$$1;
    var v241 = v454 + "</td></tr>\n";
    JAM.call(v240.write, v240, [v241], JAM.policy.p18);
    timesFound = 0;
    i$$9++;
    var v455 = arrayOfItems.length;
    v242 = i$$9 < v455;
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
  var v652 = '<tr><td class="title">' + "Pattern:";
  var v634 = v652 + '</td><td class="title">';
  var v599 = v634 + "Times found:";
  var v545 = v599 + '</td><td class="title">';
  var v456 = v545 + "Percentage:";
  var v246 = v456 + "</td></tr>\n";
  JAM.call(v245.write, v245, [v246], JAM.policy.p18);
  var i$$10 = 0;
  var v457 = arrayOfItems$$1.length;
  var v255 = i$$10 < v457;
  for (;v255;) {
    var tempNumber = 0;
    var v458 = arrayOfItems$$1[i$$10];
    var v247 = JAM.call(v458.match, v458, [/\/[^\/]+\//], JAM.policy.p15);
    var matchExp$$1 = v247 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v459 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p18);
    var v249 = v459 != -1;
    if (v249) {
      var v248 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p18);
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v546 = originalLength + 1;
    var v635 = arrayOfItems$$1[i$$10];
    var v600 = JAM.call(v635.match, v635, [/\d+/], JAM.policy.p15);
    var v547 = parseFloat(v600);
    var v460 = v546 - v547;
    var v252 = v460 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v461 = originalLength + 1;
      var v601 = arrayOfItems$$1[i$$10];
      var v548 = JAM.call(v601.match, v601, [/\d+/], JAM.policy.p15);
      var v462 = parseFloat(v548);
      var v251 = v461 - v462;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v701 = arrayOfItems$$1[i$$10];
    var v691 = JAM.call(v701.match, v701, [/\([^\(]+\)\b/], JAM.policy.p15);
    var v679 = v691.toString();
    var v666 = JAM.call(v679.replace, v679, [/\(|\)/g, ""], JAM.policy.p16);
    var v653 = "<tr><td>" + v666;
    var v636 = v653 + "</td><td>";
    var v602 = v636 + tempNumber;
    var v549 = v602 + "</td><td>";
    var v550 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p11);
    var v463 = v549 + v550;
    var v254 = v463 + "</td></tr>\n";
    JAM.call(v253.write, v253, [v254], JAM.policy.p18);
    i$$10++;
    var v464 = arrayOfItems$$1.length;
    v255 = i$$10 < v464;
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
  var v465 = sequence$$17.length;
  var v263 = v465 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v466 = Math.random();
    var v257 = v466 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v257], JAM.policy.p15);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p15);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v258 = randNum$$1 + 1;
    var v259 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v258, v259], JAM.policy.p16);
    sequence$$17 = tempString1 + tempString2;
    var v467 = tempSeq.length;
    var v262 = v467 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      JAM.call(v260.write, v260, [v261], JAM.policy.p18);
      tempSeq = "";
    }
    var v468 = sequence$$17.length;
    v263 = v468 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  JAM.call(v264.write, v264, [v265], JAM.policy.p18);
  return true;
}
function genbankTrans(theDocument) {
  var maxInput$$3 = 2E5;
  var v469 = testScript();
  var v266 = v469 == false;
  if (v266) {
    return false;
  }
  var v680 = theDocument.forms;
  var v667 = v680[0];
  var v654 = v667.elements;
  var v637 = v654[0];
  var v603 = checkFormElement(v637);
  var v551 = v603 == false;
  var v605 = !v551;
  if (v605) {
    var v692 = theDocument.forms;
    var v681 = v692[0];
    var v668 = v681.elements;
    var v655 = v668[0];
    var v638 = v655.value;
    var v604 = verifyGenBankFeat(v638);
    v551 = v604 == false;
  }
  var v470 = v551;
  var v553 = !v470;
  if (v553) {
    var v682 = theDocument.forms;
    var v669 = v682[0];
    var v656 = v669.elements;
    var v639 = v656[0];
    var v606 = v639.value;
    var v552 = JAM.call(checkTextLength, null, [v606, maxInput$$3], JAM.policy.p19);
    v470 = v552 == false;
  }
  var v267 = v470;
  if (v267) {
    return false;
  }
  openWindow("GenBank Trans Extractor");
  openPre();
  var v640 = theDocument.forms;
  var v607 = v640[0];
  var v554 = v607.elements;
  var v471 = v554[0];
  var v268 = v471.value;
  genBankTransExtract(v268);
  closePre();
  closeWindow();
  return true;
}
function genBankTransExtract(genBankFile$$2) {
  var v269 = "_" + genBankFile$$2;
  genBankFile$$2 = v269 + "_";
  var recordArray = JAM.call(genBankFile$$2.split, genBankFile$$2, [/LOCUS\s\s\s[^\f\n\r]*/m], JAM.policy.p15);
  var i$$11 = 1;
  var v472 = recordArray.length;
  var v277 = i$$11 < v472;
  for (;v277;) {
    var v270 = recordArray[i$$11];
    var mainArray = JAM.call(v270.split, v270, [/DEFINITION|ACCESSION|FEATURES|ORIGIN[^\f\n\r]*/], JAM.policy.p15);
    var v555 = mainArray[1];
    var v473 = JAM.call(v555.replace, v555, [/[\f\n\r\t]+$/g, ""], JAM.policy.p16);
    var v271 = filterFastaTitle(v473);
    var title$$9 = v271 + "\n";
    var v272 = mainArray[4];
    var dnaSequenceArray = JAM.call(v272.split, v272, [/\/{2}/], JAM.policy.p15);
    var v273 = outputWindow.document;
    var v274 = title$$9 + "\n";
    JAM.call(v273.write, v273, [v274], JAM.policy.p18);
    var v474 = dnaSequenceArray.length;
    var v275 = v474 == 1;
    if (v275) {
      alert("The entire GenBank file may not have been processed.");
      outputWindow.focus();
    }
    var v276 = mainArray[3];
    var featureArray = JAM.call(v276.split, v276, [/[\f\n\r] {5,12}\b/], JAM.policy.p15);
    showFeatureTrans(featureArray);
    i$$11++;
    var v475 = recordArray.length;
    v277 = i$$11 < v475;
  }
  return true;
}
function showFeatureTrans(arrayOfFeatures) {
  var featureTitle = "";
  var theTitle = "";
  var removedTitle = "";
  var firstQualifier = "";
  var translation = "";
  var translationFound = false;
  var i$$12 = 1;
  var v476 = arrayOfFeatures.length;
  var v288 = i$$12 < v476;
  for (;v288;) {
    var v556 = arrayOfFeatures[i$$12];
    var v477 = JAM.call(v556.search, v556, [/\/translation/], JAM.policy.p15);
    var v287 = v477 != -1;
    if (v287) {
      var v278 = arrayOfFeatures[i$$12];
      var v737 = JAM.call(v278.replace, v278, [/[\[\]\*]/g, ""], JAM.policy.p16);
      arrayOfFeatures[i$$12] = v737;
      var v478 = arrayOfFeatures[i$$12];
      var v279 = JAM.call(v478.match, v478, [/[^ \f\n\r\t\v]+ /], JAM.policy.p15);
      featureTitle = v279.toString();
      theTitle = new RegExp(featureTitle);
      var v280 = arrayOfFeatures[i$$12];
      removedTitle = JAM.call(v280.replace, v280, [theTitle, ""], JAM.policy.p22);
      var v479 = arrayOfFeatures[i$$12];
      var v281 = JAM.call(v479.match, v479, [/\/[^\f\n\r]+/], JAM.policy.p15);
      firstQualifier = v281.toString();
      var v282 = outputWindow.document;
      var v608 = filterFastaTitle(featureTitle);
      var v557 = "&gt;" + v608;
      var v558 = filterFastaTitle(firstQualifier);
      var v480 = v557 + v558;
      var v283 = v480 + "\n";
      JAM.call(v282.write, v282, [v283], JAM.policy.p18);
      var v284 = arrayOfFeatures[i$$12];
      translation = JAM.call(v284.match, v284, [/\/translation="[^"]+"/], JAM.policy.p15);
      translation = translation.toString();
      translation = JAM.call(translation.replace, translation, [/\/translation/, ""], JAM.policy.p16);
      translation = removeNonProtein(translation);
      translation = addReturns(translation);
      var v285 = outputWindow.document;
      JAM.call(v285.write, v285, [translation], JAM.policy.p18);
      translationFound = true;
      var v286 = outputWindow.document;
      JAM.call(v286.write, v286, ["\n\n"], JAM.policy.p9);
    }
    i$$12++;
    var v481 = arrayOfFeatures.length;
    v288 = i$$12 < v481;
  }
  var v290 = translationFound == false;
  if (v290) {
    var v289 = outputWindow.document;
    JAM.call(v289.write, v289, ["No translations were found.\n"], JAM.policy.p9);
  }
  return true;
}
JAM.set(document, "onload", v2);
var v291 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9);
JAM.set(v291, "onclick", v3);
var v292 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9);
JAM.set(v292, "onclick", v4)
