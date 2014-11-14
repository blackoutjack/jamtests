
JAM.startProfile('load');
function v4() {
  var v563 = document.forms;
  var v485 = v563[0];
  var v294 = v485.elements;
  var v5 = v294[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    emblTrans(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v295 = document.main_form;
  var v7 = v295.main_submit;
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
  var v296 = arrayOfSequences.length;
  var v9 = v296 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v297 = arrayOfTitles.length;
  var v11 = i$$1 < v297;
  for (;v11;) {
    var v613 = arrayOfTitles[i$$1];
    var v564 = JAM.call(v613.search, v613, [/\S/], JAM.policy.p16);
    var v486 = v564 == -1;
    var v566 = !v486;
    if (v566) {
      var v614 = arrayOfSequences[i$$1];
      var v565 = JAM.call(v614.search, v614, [/\S/], JAM.policy.p16);
      v486 = v565 == -1;
    }
    var v298 = v486;
    var v488 = !v298;
    if (v488) {
      var v567 = arrayOfSequences[i$$1];
      var v487 = v567.length;
      v298 = v487 != lengthOfAlign;
    }
    var v10 = v298;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v299 = arrayOfTitles.length;
    v11 = i$$1 < v299;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v645 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p16);
  var v615 = v645 == -1;
  var v647 = !v615;
  if (v647) {
    var v646 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p16);
    v615 = v646 == -1;
  }
  var v568 = v615;
  var v617 = !v568;
  if (v617) {
    var v616 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p16);
    v568 = v616 == -1;
  }
  var v489 = v568;
  var v570 = !v489;
  if (v570) {
    var v569 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p16);
    v489 = v569 == -1;
  }
  var v300 = v489;
  var v491 = !v300;
  if (v491) {
    var v490 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p16);
    v300 = v490 == -1;
  }
  var v12 = v300;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v492 = formElement.value;
  var v301 = JAM.call(v492.search, v492, [/\S/], JAM.policy.p16);
  var v13 = v301 == -1;
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
  var v302 = arrayOfPatterns.length;
  var v16 = z$$2 < v302;
  for (;v16;) {
    var v493 = arrayOfPatterns[z$$2];
    var v303 = JAM.call(v493.search, v493, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p16);
    var v14 = v303 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v494 = arrayOfPatterns[z$$2];
    var v304 = moreExpressionCheck(v494);
    var v15 = v304 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v305 = arrayOfPatterns.length;
    v16 = z$$2 < v305;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v306 = arrayOfPatterns.length;
  var v22 = j < v306;
  for (;v22;) {
    var v495 = arrayOfPatterns[j];
    var v307 = JAM.call(v495.match, v495, [/\/.+\//], JAM.policy.p16);
    var v19 = v307 + "gi";
    if (JAM.isEval(eval)) {
      var v735 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v735 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v735;
    var v308 = arrayOfPatterns[j];
    var v20 = JAM.call(v308.match, v308, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v736 = v20.toString();
    geneticCodeMatchResult[j] = v736;
    var v21 = geneticCodeMatchResult[j];
    var v737 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v737;
    j++;
    var v309 = arrayOfPatterns.length;
    v22 = j < v309;
  }
  var i$$2 = 0;
  var v496 = testSequence.length;
  var v310 = v496 - 3;
  var v29 = i$$2 <= v310;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p15);
    j = 0;
    var v311 = geneticCodeMatchExp.length;
    var v27 = j < v311;
    for (;v27;) {
      var v497 = geneticCodeMatchExp[j];
      var v312 = JAM.call(codon.search, codon, [v497], JAM.policy.p17);
      var v26 = v312 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v313 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v313 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v314 = geneticCodeMatchExp.length;
      v27 = j < v314;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v498 = testSequence.length;
    var v315 = v498 - 3;
    v29 = i$$2 <= v315;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v316 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v316;
  for (;v31;) {
    var v499 = arrayOfPatterns$$1[z$$3];
    var v317 = JAM.call(v499.search, v499, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p16);
    var v30 = v317 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v318 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v318;
  }
  var i$$3 = 0;
  var v319 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v319;
  for (;v35;) {
    var v500 = arrayOfPatterns$$1[i$$3];
    var v320 = "[" + v500;
    var v32 = v320 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v321 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v321;
    for (;v34;) {
      var v501 = arrayOfPatterns$$1[j$$1];
      var v322 = JAM.call(v501.search, v501, [re], JAM.policy.p17);
      var v33 = v322 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v323 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v323;
    }
    i$$3++;
    var v324 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v324;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v325 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v325;
  for (;v38;) {
    var v502 = arrayOfPatterns$$2[z$$4];
    var v326 = JAM.call(v502.search, v502, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p16);
    var v36 = v326 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v503 = arrayOfPatterns$$2[z$$4];
    var v327 = moreExpressionCheck(v503);
    var v37 = v327 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v328 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v328;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v571 = getSequenceFromFasta(text$$7);
  var v504 = JAM.call(v571.replace, v571, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v329 = v504.length;
  var v40 = v329 > maxInput;
  if (v40) {
    var v330 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v330 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v331 = text$$8.length;
  var v42 = v331 > maxInput$$1;
  if (v42) {
    var v332 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v332 + " characters.";
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
  var v333 = alignArray.length;
  var v49 = v333 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v334 = alignArray.length;
  var v51 = i$$4 < v334;
  for (;v51;) {
    var v505 = alignArray[i$$4];
    var v335 = JAM.call(v505.search, v505, [/[^\s]+\s/], JAM.policy.p16);
    var v50 = v335 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v336 = alignArray.length;
    v51 = i$$4 < v336;
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
  var v337 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v54 = v337 != -1;
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
  var v338 = sequence$$2.length;
  var v55 = "&gt;results for " + v338;
  var stringToReturn = v55 + " residue sequence ";
  var v339 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p16);
  var v57 = v339 != -1;
  if (v57) {
    var v340 = stringToReturn + '"';
    var v56 = v340 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v341 = stringToReturn + ' starting "';
  var v342 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v341 + v342;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v343 = sequenceOne.length;
  var v59 = "Search results for " + v343;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v344 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p16);
  var v61 = v344 != -1;
  if (v61) {
    var v345 = stringToReturn$$1 + '"';
    var v60 = v345 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v346 = stringToReturn$$1 + ' starting "';
  var v347 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v346 + v347;
  stringToReturn$$1 = v62 + '"\n';
  var v348 = stringToReturn$$1 + "and ";
  var v349 = sequenceTwo.length;
  var v63 = v348 + v349;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v350 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p16);
  var v65 = v350 != -1;
  if (v65) {
    var v351 = stringToReturn$$1 + '"';
    var v64 = v351 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v352 = stringToReturn$$1 + ' starting "';
  var v353 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v66 = v352 + v353;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v354 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v354;
  for (;v70;) {
    var v506 = arrayOfPatterns$$3[j$$2];
    var v355 = JAM.call(v506.match, v506, [/\/.+\//], JAM.policy.p16);
    var v69 = v355 + "gi";
    if (JAM.isEval(eval)) {
      var v738 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v738 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v738;
    j$$2++;
    var v356 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v356;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v357 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v357;
  for (;v74;) {
    var v358 = arrayOfPatterns$$4[j$$3];
    var v72 = JAM.call(v358.match, v358, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v739 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v739;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v740 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v740;
    j$$3++;
    var v359 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v359;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v360 = sequence$$3.length;
  var v75 = "Results for " + v360;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v361 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p16);
  var v77 = v361 != -1;
  if (v77) {
    var v362 = stringToReturn$$2 + '"';
    var v76 = v362 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v363 = stringToReturn$$2 + ' starting "';
  var v364 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v78 = v363 + v364;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v507 = "Results for " + topology;
  var v365 = v507 + " ";
  var v366 = sequence$$4.length;
  var v80 = v365 + v366;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v367 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p16);
  var v82 = v367 != -1;
  if (v82) {
    var v368 = stringToReturn$$3 + '"';
    var v81 = v368 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v369 = stringToReturn$$3 + ' starting "';
  var v370 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v369 + v370;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v371 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v371;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v372 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p16);
  var v87 = v372 != -1;
  if (v87) {
    var v373 = stringToReturn$$4 + '"';
    var v86 = v373 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v374 = stringToReturn$$4 + ' starting "';
  var v375 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v374 + v375;
  stringToReturn$$4 = v88 + '"\n';
  var v376 = stringToReturn$$4 + "and ";
  var v377 = sequenceTwo$$1.length;
  var v89 = v376 + v377;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v378 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p16);
  var v91 = v378 != -1;
  if (v91) {
    var v379 = stringToReturn$$4 + '"';
    var v90 = v379 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v380 = stringToReturn$$4 + ' starting "';
  var v381 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v92 = v380 + v381;
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
    var v382 = Math.random();
    var v383 = components.length;
    var v94 = v382 * v383;
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p16);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p9);
}
function getSequenceFromFasta(sequenceRecord) {
  var v384 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v96 = v384 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v385 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v98 = v385 != -1;
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
  var v713 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p16);
  var v706 = v713 != -1;
  var v715 = !v706;
  if (v715) {
    var v714 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p16);
    v706 = v714 != -1;
  }
  var v697 = v706;
  var v708 = !v697;
  if (v708) {
    var v707 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p16);
    v697 = v707 != -1;
  }
  var v687 = v697;
  var v699 = !v687;
  if (v699) {
    var v698 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p16);
    v687 = v698 != -1;
  }
  var v674 = v687;
  var v689 = !v674;
  if (v689) {
    var v688 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p16);
    v674 = v688 != -1;
  }
  var v661 = v674;
  var v676 = !v661;
  if (v676) {
    var v675 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p16);
    v661 = v675 != -1;
  }
  var v648 = v661;
  var v663 = !v648;
  if (v663) {
    var v662 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p16);
    v648 = v662 != -1;
  }
  var v618 = v648;
  var v650 = !v618;
  if (v650) {
    var v649 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p16);
    v618 = v649 != -1;
  }
  var v572 = v618;
  var v620 = !v572;
  if (v620) {
    var v619 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p16);
    v572 = v619 != -1;
  }
  var v508 = v572;
  var v574 = !v508;
  if (v574) {
    var v573 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p16);
    v508 = v573 != -1;
  }
  var v386 = v508;
  var v510 = !v386;
  if (v510) {
    var v509 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p16);
    v386 = v509 != -1;
  }
  var v99 = v386;
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
  var v575 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v511 = v575 + "<head>\n";
  var v387 = v511 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v387 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p17);
  if (isColor) {
    var v106 = outputWindow.document;
    var v728 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v724 = v728 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v720 = v724 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v716 = v720 + "div.info {font-weight: bold}\n";
    var v709 = v716 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v700 = v709 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v690 = v700 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v677 = v690 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v664 = v677 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v651 = v664 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v621 = v651 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v576 = v621 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v512 = v576 + "td.many {color: #000000}\n";
    var v388 = v512 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v388 + "</style>\n";
    JAM.call(v106.write, v106, [v107], JAM.policy.p17);
  } else {
    var v108 = outputWindow.document;
    var v732 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v729 = v732 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v725 = v729 + "div.title {display: none}\n";
    var v721 = v725 + "div.info {font-weight: bold}\n";
    var v717 = v721 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v710 = v717 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v701 = v710 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v691 = v701 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v678 = v691 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v665 = v678 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v652 = v665 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v622 = v652 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v577 = v622 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v513 = v577 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v389 = v513 + "img {display: none}\n";
    var v109 = v389 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p17);
  }
  var v110 = outputWindow.document;
  var v578 = "</head>\n" + '<body class="main">\n';
  var v514 = v578 + '<div class="title">';
  var v390 = v514 + title$$6;
  var v111 = v390 + " results</div>\n";
  JAM.call(v110.write, v110, [v111], JAM.policy.p17);
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
  var v579 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v515 = v579 + "<head>\n";
  var v391 = v515 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v391 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p17);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v730 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v726 = v730 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v722 = v726 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v718 = v722 + "div.info {font-weight: bold}\n";
    var v711 = v718 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v702 = v711 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v692 = v702 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v679 = v692 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v666 = v679 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v653 = v666 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v623 = v653 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v580 = v623 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v516 = v580 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v392 = v516 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v392 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p17);
  } else {
    var v116 = outputWindow.document;
    var v734 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v733 = v734 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v731 = v733 + "div.title {display: none}\n";
    var v727 = v731 + "div.info {font-weight: bold}\n";
    var v723 = v727 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v719 = v723 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v712 = v719 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v703 = v712 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v693 = v703 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v680 = v693 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v667 = v680 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v654 = v667 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v624 = v654 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v581 = v624 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v517 = v581 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v393 = v517 + "img {display: none}\n";
    var v117 = v393 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p17);
  }
  var v118 = outputWindow.document;
  var v582 = "</head>\n" + '<body class="main">\n';
  var v518 = v582 + '<div class="title">';
  var v394 = v518 + title$$8;
  var v119 = v394 + " results</div>\n";
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
  var v395 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p16);
  var v120 = v395 != -1;
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
  var v396 = testArray[0];
  var v124 = v396 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v397 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v125 = v397 == -1;
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
  var v398 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p10);
  var v128 = v398 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v399 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p10);
  var v129 = v399 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v400 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p16);
  var v130 = v400 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v625 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p16);
  var v583 = v625 == -1;
  var v627 = !v583;
  if (v627) {
    var v626 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p16);
    v583 = v626 == -1;
  }
  var v519 = v583;
  var v585 = !v519;
  if (v585) {
    var v584 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p16);
    v519 = v584 == -1;
  }
  var v401 = v519;
  var v521 = !v401;
  if (v521) {
    var v520 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p16);
    v401 = v520 == -1;
  }
  var v131 = v401;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v402 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p16);
  var v132 = v402 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v403 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v403 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v404 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p16);
  var v135 = v404 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v405 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p16);
  var v136 = v405 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v628 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p16);
  var v586 = v628 == -1;
  var v630 = !v586;
  if (v630) {
    var v629 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p16);
    v586 = v629 == -1;
  }
  var v522 = v586;
  var v588 = !v522;
  if (v588) {
    var v587 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p16);
    v522 = v587 == -1;
  }
  var v406 = v522;
  var v524 = !v406;
  if (v524) {
    var v523 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p16);
    v406 = v523 == -1;
  }
  var v137 = v406;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v631 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p16);
  var v589 = v631 == -1;
  var v633 = !v589;
  if (v633) {
    var v632 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p16);
    v589 = v632 == -1;
  }
  var v525 = v589;
  var v591 = !v525;
  if (v591) {
    var v590 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p16);
    v525 = v590 == -1;
  }
  var v407 = v525;
  var v527 = !v407;
  if (v527) {
    var v526 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p16);
    v407 = v526 == -1;
  }
  var v138 = v407;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v408 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p16);
  var v139 = v408 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v634 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p16);
  var v592 = v634 == -1;
  var v636 = !v592;
  if (v636) {
    var v635 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p16);
    v592 = v635 == -1;
  }
  var v528 = v592;
  var v594 = !v528;
  if (v594) {
    var v593 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p16);
    v528 = v593 == -1;
  }
  var v409 = v528;
  var v530 = !v409;
  if (v530) {
    var v529 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p16);
    v409 = v529 == -1;
  }
  var v140 = v409;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v410 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p16);
  var v141 = v410 == -1;
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
    var v411 = basePerLine / groupSize;
    var v145 = j$$6 <= v411;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v412 = k + i$$5;
        var v143 = JAM.call(text$$10.charAt, text$$10, [v412], JAM.policy.p17);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v413 = basePerLine / groupSize;
      v145 = j$$6 <= v413;
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
  JAM.call(writeGroupNumDnaSetStart, null, [text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0], JAM.policy.p19);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v414 = adjustment < 0;
    if (v414) {
      v414 = adjusted >= 0;
    }
    var v149 = v414;
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
    var v415 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v415;
    for (;v158;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v416 = i$$6 + k$$1;
        var v150 = v416 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v151 = lineOfText$$1;
        var v417 = k$$1 + i$$6;
        var v152 = JAM.call(text$$12.charAt, text$$12, [v417], JAM.policy.p17);
        lineOfText$$1 = v151 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v156 = numberPosition$$1 == "above";
      if (v156) {
        var v154 = aboveNum;
        var v418 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
        var v155 = rightNum(v418, "", groupSize$$2, tabIn$$3);
        aboveNum = v154 + v155;
      }
      var v157 = i$$6 >= stopBase$$2;
      if (v157) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v419 = basePerLine$$2 / groupSize$$2;
      v158 = j$$7 <= v419;
    }
    var v181 = numberPosition$$1 == "left";
    if (v181) {
      var v159 = outputWindow.document;
      var v595 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19);
      var v531 = rightNum(v595, "", 8, tabIn$$3);
      var v420 = v531 + lineOfText$$1;
      var v160 = v420 + "\n";
      JAM.call(v159.write, v159, [v160], JAM.policy.p17);
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v596 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19);
        var v532 = rightNum(v596, "", 8, tabIn$$3);
        var v533 = complement(lineOfText$$1);
        var v421 = v532 + v533;
        var v162 = v421 + "\n";
        JAM.call(v161.write, v161, [v162], JAM.policy.p17);
        var v163 = outputWindow.document;
        JAM.call(v163.write, v163, ["\n"], JAM.policy.p9);
      }
    } else {
      var v180 = numberPosition$$1 == "right";
      if (v180) {
        var v165 = outputWindow.document;
        var v534 = lineOfText$$1;
        var v535 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
        var v422 = v534 + v535;
        var v166 = v422 + "\n";
        JAM.call(v165.write, v165, [v166], JAM.policy.p17);
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v536 = complement(lineOfText$$1);
          var v537 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
          var v423 = v536 + v537;
          var v168 = v423 + "\n";
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
            var v424 = complement(lineOfText$$1);
            var v176 = v424 + "\n";
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
    var v425 = basePerLine$$3 / groupSize$$3;
    var v189 = j$$8 <= v425;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        var v426 = i$$7 + k$$2;
        var v183 = v426 >= stopBase$$3;
        if (v183) {
          break;
        }
        var v427 = k$$2 + i$$7;
        var v184 = JAM.call(text$$13.charAt, text$$13, [v427], JAM.policy.p17);
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
      var v428 = basePerLine$$3 / groupSize$$3;
      v189 = j$$8 <= v428;
    }
    var v200 = numberPosition$$2 == "left";
    if (v200) {
      var v190 = outputWindow.document;
      var v538 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v429 = v538 + lineOfText$$2;
      var v191 = v429 + "\n";
      JAM.call(v190.write, v190, [v191], JAM.policy.p17);
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v430 = lineOfText$$2 + i$$7;
        var v193 = v430 + "\n";
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
  var v597 = sequence$$13.length;
  var v539 = v597 <= firstIndexToMutate;
  var v598 = !v539;
  if (v598) {
    v539 = lastIndexToMutate < 0;
  }
  var v431 = v539;
  var v540 = !v431;
  if (v540) {
    v431 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v202 = v431;
  if (v202) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    var v432 = Math.random();
    var v203 = v432 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v203], JAM.policy.p16);
    var v433 = randNum < firstIndexToMutate;
    var v541 = !v433;
    if (v541) {
      v433 = randNum > lastIndexToMutate;
    }
    var v204 = v433;
    if (v204) {
      numMut++;
      i$$8++;
      v210 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p16);
    needNewChar = true;
    for (;needNewChar;) {
      var v434 = Math.random();
      var v435 = components$$1.length;
      var v205 = v434 * v435;
      componentsIndex = JAM.call(Math.round, Math, [v205], JAM.policy.p16);
      var v436 = components$$1.length;
      var v206 = componentsIndex == v436;
      if (v206) {
        componentsIndex = 0;
      }
      var v437 = components$$1[componentsIndex];
      var v207 = v437 != currentChar;
      if (v207) {
        needNewChar = false;
      }
    }
    var v438 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v439 = components$$1[componentsIndex];
    var v208 = v438 + v439;
    var v440 = randNum + 1;
    var v441 = sequence$$13.length;
    var v209 = JAM.call(sequence$$13.substring, sequence$$13, [v440, v441], JAM.policy.p21);
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
    var v442 = Math.random();
    var v443 = components$$2.length;
    var v213 = v442 * v443;
    tempNum$$1 = JAM.call(Math.floor, Math, [v213], JAM.policy.p16);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v444 = sequence$$14.length;
    var v216 = v444 == 60;
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
    var v599 = sequence$$15.length;
    var v542 = v599 - lookAhead;
    var v543 = sequence$$15.length;
    var v445 = JAM.call(sequence$$15.substring, sequence$$15, [v542, v543], JAM.policy.p21);
    var v221 = v445 + sequence$$15;
    var v222 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v221 + v222;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  JAM.call(v224.write, v224, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v225 = outputWindow.document;
  var v600 = '<tr><td class="title" width="200px">' + "Site:";
  var v544 = v600 + '</td><td class="title">';
  var v446 = v544 + "Positions:";
  var v226 = v446 + "</td></tr>\n";
  JAM.call(v225.write, v225, [v226], JAM.policy.p17);
  var i$$9 = 0;
  var v447 = arrayOfItems.length;
  var v242 = i$$9 < v447;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v448 = arrayOfItems[i$$9];
    var v227 = JAM.call(v448.match, v448, [/\/.+\//], JAM.policy.p16);
    matchExp = v227 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v601 = arrayOfItems[i$$9];
    var v545 = JAM.call(v601.match, v601, [/\)\D*\d+/], JAM.policy.p16);
    var v449 = v545.toString();
    var v228 = JAM.call(v449.replace, v449, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v228);
    var v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v234;) {
      var v229 = matchExp.lastIndex;
      matchPosition = v229 - cutDistance;
      var v450 = matchPosition >= lowerLimit;
      if (v450) {
        v450 = matchPosition < upperLimit;
      }
      var v232 = v450;
      if (v232) {
        timesFound++;
        var v230 = tempString$$1 + ", ";
        var v451 = matchPosition - shiftValue;
        var v231 = v451 + 1;
        tempString$$1 = v230 + v231;
      }
      var v452 = matchExp.lastIndex;
      var v546 = RegExp.lastMatch;
      var v453 = v546.length;
      var v233 = v452 - v453;
      matchExp.lastIndex = v233 + 1;
      v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v454 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p16);
    var v235 = v454 != -1;
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
    var v681 = '<tr><td class="' + backGroundClass;
    var v668 = v681 + '">';
    var v704 = arrayOfItems[i$$9];
    var v694 = JAM.call(v704.match, v704, [/\([^\(]+\)/], JAM.policy.p16);
    var v682 = v694.toString();
    var v669 = JAM.call(v682.replace, v682, [/\(|\)/g, ""], JAM.policy.p15);
    var v655 = v668 + v669;
    var v637 = v655 + '</td><td class="';
    var v602 = v637 + backGroundClass;
    var v547 = v602 + '">';
    var v455 = v547 + tempString$$1;
    var v241 = v455 + "</td></tr>\n";
    JAM.call(v240.write, v240, [v241], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v456 = arrayOfItems.length;
    v242 = i$$9 < v456;
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
  var v656 = '<tr><td class="title">' + "Pattern:";
  var v638 = v656 + '</td><td class="title">';
  var v603 = v638 + "Times found:";
  var v548 = v603 + '</td><td class="title">';
  var v457 = v548 + "Percentage:";
  var v246 = v457 + "</td></tr>\n";
  JAM.call(v245.write, v245, [v246], JAM.policy.p17);
  var i$$10 = 0;
  var v458 = arrayOfItems$$1.length;
  var v255 = i$$10 < v458;
  for (;v255;) {
    var tempNumber = 0;
    var v459 = arrayOfItems$$1[i$$10];
    var v247 = JAM.call(v459.match, v459, [/\/[^\/]+\//], JAM.policy.p16);
    var matchExp$$1 = v247 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v460 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v249 = v460 != -1;
    if (v249) {
      var v248 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v549 = originalLength + 1;
    var v639 = arrayOfItems$$1[i$$10];
    var v604 = JAM.call(v639.match, v639, [/\d+/], JAM.policy.p16);
    var v550 = parseFloat(v604);
    var v461 = v549 - v550;
    var v252 = v461 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v462 = originalLength + 1;
      var v605 = arrayOfItems$$1[i$$10];
      var v551 = JAM.call(v605.match, v605, [/\d+/], JAM.policy.p16);
      var v463 = parseFloat(v551);
      var v251 = v462 - v463;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v705 = arrayOfItems$$1[i$$10];
    var v695 = JAM.call(v705.match, v705, [/\([^\(]+\)\b/], JAM.policy.p16);
    var v683 = v695.toString();
    var v670 = JAM.call(v683.replace, v683, [/\(|\)/g, ""], JAM.policy.p15);
    var v657 = "<tr><td>" + v670;
    var v640 = v657 + "</td><td>";
    var v606 = v640 + tempNumber;
    var v552 = v606 + "</td><td>";
    var v553 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p10);
    var v464 = v552 + v553;
    var v254 = v464 + "</td></tr>\n";
    JAM.call(v253.write, v253, [v254], JAM.policy.p17);
    i$$10++;
    var v465 = arrayOfItems$$1.length;
    v255 = i$$10 < v465;
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
  var v466 = sequence$$17.length;
  var v263 = v466 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v467 = Math.random();
    var v257 = v467 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v257], JAM.policy.p16);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p16);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v258 = randNum$$1 + 1;
    var v259 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v258, v259], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v468 = tempSeq.length;
    var v262 = v468 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      JAM.call(v260.write, v260, [v261], JAM.policy.p17);
      tempSeq = "";
    }
    var v469 = sequence$$17.length;
    v263 = v469 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  JAM.call(v264.write, v264, [v265], JAM.policy.p17);
  return true;
}
function emblTrans(theDocument) {
  JAM.startProfile('compute');

  var maxInput$$3 = 2E5;
  var v470 = testScript();
  var v266 = v470 == false;
  if (v266) {
    return false;
  }
  var v684 = theDocument.forms;
  var v671 = v684[0];
  var v658 = v671.elements;
  var v641 = v658[0];
  var v607 = checkFormElement(v641);
  var v554 = v607 == false;
  var v609 = !v554;
  if (v609) {
    var v696 = theDocument.forms;
    var v685 = v696[0];
    var v672 = v685.elements;
    var v659 = v672[0];
    var v642 = v659.value;
    var v608 = verifyEmblFeat(v642);
    v554 = v608 == false;
  }
  var v471 = v554;
  var v556 = !v471;
  if (v556) {
    var v686 = theDocument.forms;
    var v673 = v686[0];
    var v660 = v673.elements;
    var v643 = v660[0];
    var v610 = v643.value;
    var v555 = JAM.call(checkTextLength, null, [v610, maxInput$$3], JAM.policy.p19);
    v471 = v555 == false;
  }
  var v267 = v471;
  if (v267) {
    return false;
  }
  openWindow("EMBL Trans Extractor");
  openPre();
  var v644 = theDocument.forms;
  var v611 = v644[0];
  var v557 = v611.elements;
  var v472 = v557[0];
  var v268 = v472.value;
  emblTransExtract(v268);
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function emblTransExtract(emblFile$$2) {
  var title$$9;
  var v269 = "_" + emblFile$$2;
  emblFile$$2 = v269 + "_";
  var recordArray = JAM.call(emblFile$$2.split, emblFile$$2, [/ID\s\s\s[^\f\n\r]*/], JAM.policy.p16);
  var i$$11 = 1;
  var v473 = recordArray.length;
  var v278 = i$$11 < v473;
  for (;v278;) {
    var mainArray = JAM.call(emblFile$$2.split, emblFile$$2, [/[\f\n\r]\s*FH   Key             Location\/Qualifiers[\f\n\r]+\s*FH|[\f\n\r]\s*XX[\s]*[\f\n\r]\s*SQ[^\f\n\r]*/], JAM.policy.p16);
    var v558 = mainArray[0];
    var v474 = JAM.call(v558.search, v558, [/[\f\n\r]\s*DE[^\f\n\r]+/], JAM.policy.p16);
    var v271 = v474 != -1;
    if (v271) {
      var v559 = mainArray[0];
      var v475 = JAM.call(v559.match, v559, [/[\f\n\r]\s*DE[^\f\n\r]+/], JAM.policy.p16);
      var v270 = v475.toString();
      title$$9 = JAM.call(v270.replace, v270, [/[\f\n\r]\s*DE\s*/, ""], JAM.policy.p15);
    } else {
      title$$9 = "Untitled";
    }
    var v476 = JAM.call(title$$9.replace, title$$9, [/[\f\n\r\t]+$/g, ""], JAM.policy.p15);
    var v272 = filterFastaTitle(v476);
    title$$9 = v272 + "\n";
    var v273 = mainArray[2];
    var dnaSequenceArray = JAM.call(v273.split, v273, [/\/{2}/], JAM.policy.p16);
    var v274 = outputWindow.document;
    var v275 = title$$9 + "\n";
    JAM.call(v274.write, v274, [v275], JAM.policy.p17);
    var v477 = dnaSequenceArray.length;
    var v276 = v477 == 1;
    if (v276) {
      alert("The entire EMBL file may not have been processed.");
      outputWindow.focus();
    }
    var v277 = mainArray[1];
    var featureArray = JAM.call(v277.split, v277, [/[\f\n\r]FT {3,12}\b/], JAM.policy.p16);
    showFeatureTrans(featureArray);
    i$$11++;
    var v478 = recordArray.length;
    v278 = i$$11 < v478;
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
  var v479 = arrayOfFeatures.length;
  var v289 = i$$12 < v479;
  for (;v289;) {
    var v560 = arrayOfFeatures[i$$12];
    var v480 = JAM.call(v560.search, v560, [/\/translation/], JAM.policy.p16);
    var v288 = v480 != -1;
    if (v288) {
      var v279 = arrayOfFeatures[i$$12];
      var v741 = JAM.call(v279.replace, v279, [/[\[\]\*]/g, ""], JAM.policy.p15);
      arrayOfFeatures[i$$12] = v741;
      var v481 = arrayOfFeatures[i$$12];
      var v280 = JAM.call(v481.match, v481, [/[^ \f\n\r\t\v]+ /], JAM.policy.p16);
      featureTitle = v280.toString();
      theTitle = new RegExp(featureTitle);
      var v281 = arrayOfFeatures[i$$12];
      removedTitle = JAM.call(v281.replace, v281, [theTitle, ""], JAM.policy.p22);
      var v482 = arrayOfFeatures[i$$12];
      var v282 = JAM.call(v482.match, v482, [/\/[^\f\n\r]+/], JAM.policy.p16);
      firstQualifier = v282.toString();
      var v283 = outputWindow.document;
      var v612 = filterFastaTitle(featureTitle);
      var v561 = "&gt;" + v612;
      var v562 = filterFastaTitle(firstQualifier);
      var v483 = v561 + v562;
      var v284 = v483 + "\n";
      JAM.call(v283.write, v283, [v284], JAM.policy.p17);
      var v285 = arrayOfFeatures[i$$12];
      translation = JAM.call(v285.match, v285, [/\/translation="[^"]+"/], JAM.policy.p16);
      translation = translation.toString();
      translation = JAM.call(translation.replace, translation, [/\/translation/, ""], JAM.policy.p15);
      translation = JAM.call(translation.replace, translation, [/^FT\s+/gm, ""], JAM.policy.p15);
      translation = removeNonProtein(translation);
      translation = addReturns(translation);
      var v286 = outputWindow.document;
      JAM.call(v286.write, v286, [translation], JAM.policy.p17);
      translationFound = true;
      var v287 = outputWindow.document;
      JAM.call(v287.write, v287, ["\n\n"], JAM.policy.p9);
    }
    i$$12++;
    var v484 = arrayOfFeatures.length;
    v289 = i$$12 < v484;
  }
  var v291 = translationFound == false;
  if (v291) {
    var v290 = outputWindow.document;
    JAM.call(v290.write, v290, ["No translations were found.\n"], JAM.policy.p9);
  }
  return true;
}
JAM.set(document, "onload", v2);
var v292 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9);
JAM.set(v292, "onclick", v3);
var v293 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9);
JAM.set(v293, "onclick", v4)

JAM.stopProfile('load');
