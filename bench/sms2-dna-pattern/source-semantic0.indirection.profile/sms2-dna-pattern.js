
JAM.startProfile('load');
function v4() {
  var v569 = document.forms;
  var v486 = v569[0];
  var v293 = v486.elements;
  var v5 = v293[0];
  v5.value = " ";
  var v570 = document.forms;
  var v487 = v570[0];
  var v294 = v487.elements;
  var v6 = v294[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    dnaPattern(document);
  } catch (e$$6) {
    var v7 = "The following error was encountered: " + e$$6;
    alert(v7);
  }
  return;
}
function v2() {
  var v295 = document.main_form;
  var v8 = v295.main_submit;
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
  var v296 = arrayOfSequences.length;
  var v10 = v296 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v297 = arrayOfTitles.length;
  var v12 = i$$1 < v297;
  for (;v12;) {
    var v624 = arrayOfTitles[i$$1];
    var v571 = JAM.call(v624.search, v624, [/\S/], JAM.policy.p17);
    var v488 = v571 == -1;
    var v573 = !v488;
    if (v573) {
      var v625 = arrayOfSequences[i$$1];
      var v572 = JAM.call(v625.search, v625, [/\S/], JAM.policy.p17);
      v488 = v572 == -1;
    }
    var v298 = v488;
    var v490 = !v298;
    if (v490) {
      var v574 = arrayOfSequences[i$$1];
      var v489 = v574.length;
      v298 = v489 != lengthOfAlign;
    }
    var v11 = v298;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v299 = arrayOfTitles.length;
    v12 = i$$1 < v299;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v659 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17);
  var v626 = v659 == -1;
  var v661 = !v626;
  if (v661) {
    var v660 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17);
    v626 = v660 == -1;
  }
  var v575 = v626;
  var v628 = !v575;
  if (v628) {
    var v627 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17);
    v575 = v627 == -1;
  }
  var v491 = v575;
  var v577 = !v491;
  if (v577) {
    var v576 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17);
    v491 = v576 == -1;
  }
  var v300 = v491;
  var v493 = !v300;
  if (v493) {
    var v492 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17);
    v300 = v492 == -1;
  }
  var v13 = v300;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v494 = formElement.value;
  var v301 = JAM.call(v494.search, v494, [/\S/], JAM.policy.p17);
  var v14 = v301 == -1;
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
  var v302 = arrayOfPatterns.length;
  var v17 = z$$2 < v302;
  for (;v17;) {
    var v495 = arrayOfPatterns[z$$2];
    var v303 = JAM.call(v495.search, v495, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17);
    var v15 = v303 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v496 = arrayOfPatterns[z$$2];
    var v304 = moreExpressionCheck(v496);
    var v16 = v304 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v305 = arrayOfPatterns.length;
    v17 = z$$2 < v305;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v306 = arrayOfPatterns.length;
  var v23 = j < v306;
  for (;v23;) {
    var v497 = arrayOfPatterns[j];
    var v307 = JAM.call(v497.match, v497, [/\/.+\//], JAM.policy.p17);
    var v20 = v307 + "gi";
    if (JAM.isEval(eval)) {
      var v760 = eval("introspect(JAM.policy.pFull) { " + v20 + " }")
    } else {
      var v760 = JAM.call(eval, null, [v20])
    }
    geneticCodeMatchExp[j] = v760;
    var v308 = arrayOfPatterns[j];
    var v21 = JAM.call(v308.match, v308, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v761 = v21.toString();
    geneticCodeMatchResult[j] = v761;
    var v22 = geneticCodeMatchResult[j];
    var v762 = JAM.call(v22.replace, v22, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v762;
    j++;
    var v309 = arrayOfPatterns.length;
    v23 = j < v309;
  }
  var i$$2 = 0;
  var v498 = testSequence.length;
  var v310 = v498 - 3;
  var v30 = i$$2 <= v310;
  for (;v30;) {
    var v24 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v24], JAM.policy.p15);
    j = 0;
    var v311 = geneticCodeMatchExp.length;
    var v28 = j < v311;
    for (;v28;) {
      var v499 = geneticCodeMatchExp[j];
      var v312 = JAM.call(codon.search, codon, [v499], JAM.policy.p18);
      var v27 = v312 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v313 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v313 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v314 = geneticCodeMatchExp.length;
      v28 = j < v314;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v500 = testSequence.length;
    var v315 = v500 - 3;
    v30 = i$$2 <= v315;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v316 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v316;
  for (;v32;) {
    var v501 = arrayOfPatterns$$1[z$$3];
    var v317 = JAM.call(v501.search, v501, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17);
    var v31 = v317 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v318 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v318;
  }
  var i$$3 = 0;
  var v319 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v319;
  for (;v36;) {
    var v502 = arrayOfPatterns$$1[i$$3];
    var v320 = "[" + v502;
    var v33 = v320 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v321 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v321;
    for (;v35;) {
      var v503 = arrayOfPatterns$$1[j$$1];
      var v322 = JAM.call(v503.search, v503, [re], JAM.policy.p18);
      var v34 = v322 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v323 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v323;
    }
    i$$3++;
    var v324 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v324;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v325 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v325;
  for (;v39;) {
    var v504 = arrayOfPatterns$$2[z$$4];
    var v326 = JAM.call(v504.search, v504, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17);
    var v37 = v326 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v505 = arrayOfPatterns$$2[z$$4];
    var v327 = moreExpressionCheck(v505);
    var v38 = v327 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v328 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v328;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v578 = getSequenceFromFasta(text$$7);
  var v506 = JAM.call(v578.replace, v578, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v329 = v506.length;
  var v41 = v329 > maxInput;
  if (v41) {
    var v330 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v330 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v331 = text$$8.length;
  var v43 = v331 > maxInput$$1;
  if (v43) {
    var v332 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v332 + " characters.";
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
  var v50 = v333 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v334 = alignArray.length;
  var v52 = i$$4 < v334;
  for (;v52;) {
    var v507 = alignArray[i$$4];
    var v335 = JAM.call(v507.search, v507, [/[^\s]+\s/], JAM.policy.p17);
    var v51 = v335 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v336 = alignArray.length;
    v52 = i$$4 < v336;
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
  var v337 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v55 = v337 != -1;
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
  var v338 = sequence$$2.length;
  var v56 = "&gt;results for " + v338;
  var stringToReturn = v56 + " residue sequence ";
  var v339 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p17);
  var v58 = v339 != -1;
  if (v58) {
    var v340 = stringToReturn + '"';
    var v57 = v340 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v341 = stringToReturn + ' starting "';
  var v342 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v59 = v341 + v342;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v343 = sequenceOne.length;
  var v60 = "Search results for " + v343;
  var stringToReturn$$1 = v60 + " residue sequence ";
  var v344 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p17);
  var v62 = v344 != -1;
  if (v62) {
    var v345 = stringToReturn$$1 + '"';
    var v61 = v345 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v346 = stringToReturn$$1 + ' starting "';
  var v347 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v63 = v346 + v347;
  stringToReturn$$1 = v63 + '"\n';
  var v348 = stringToReturn$$1 + "and ";
  var v349 = sequenceTwo.length;
  var v64 = v348 + v349;
  stringToReturn$$1 = v64 + " residue sequence ";
  var v350 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p17);
  var v66 = v350 != -1;
  if (v66) {
    var v351 = stringToReturn$$1 + '"';
    var v65 = v351 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v352 = stringToReturn$$1 + ' starting "';
  var v353 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v67 = v352 + v353;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v354 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v354;
  for (;v71;) {
    var v508 = arrayOfPatterns$$3[j$$2];
    var v355 = JAM.call(v508.match, v508, [/\/.+\//], JAM.policy.p17);
    var v70 = v355 + "gi";
    if (JAM.isEval(eval)) {
      var v763 = eval("introspect(JAM.policy.pFull) { " + v70 + " }")
    } else {
      var v763 = JAM.call(eval, null, [v70])
    }
    geneticCodeMatchExp$$1[j$$2] = v763;
    j$$2++;
    var v356 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v356;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v357 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v357;
  for (;v75;) {
    var v358 = arrayOfPatterns$$4[j$$3];
    var v73 = JAM.call(v358.match, v358, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v764 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v764;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v765 = JAM.call(v74.replace, v74, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v765;
    j$$3++;
    var v359 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v359;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v360 = sequence$$3.length;
  var v76 = "Results for " + v360;
  var stringToReturn$$2 = v76 + " residue sequence ";
  var v361 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p17);
  var v78 = v361 != -1;
  if (v78) {
    var v362 = stringToReturn$$2 + '"';
    var v77 = v362 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v363 = stringToReturn$$2 + ' starting "';
  var v364 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v79 = v363 + v364;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v509 = "Results for " + topology;
  var v365 = v509 + " ";
  var v366 = sequence$$4.length;
  var v81 = v365 + v366;
  var stringToReturn$$3 = v81 + " residue sequence ";
  var v367 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p17);
  var v83 = v367 != -1;
  if (v83) {
    var v368 = stringToReturn$$3 + '"';
    var v82 = v368 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v369 = stringToReturn$$3 + ' starting "';
  var v370 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v84 = v369 + v370;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v371 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v371;
  var stringToReturn$$4 = v86 + " residue sequence ";
  var v372 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p17);
  var v88 = v372 != -1;
  if (v88) {
    var v373 = stringToReturn$$4 + '"';
    var v87 = v373 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v374 = stringToReturn$$4 + ' starting "';
  var v375 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v89 = v374 + v375;
  stringToReturn$$4 = v89 + '"\n';
  var v376 = stringToReturn$$4 + "and ";
  var v377 = sequenceTwo$$1.length;
  var v90 = v376 + v377;
  stringToReturn$$4 = v90 + " residue sequence ";
  var v378 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p17);
  var v92 = v378 != -1;
  if (v92) {
    var v379 = stringToReturn$$4 + '"';
    var v91 = v379 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v380 = stringToReturn$$4 + ' starting "';
  var v381 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v93 = v380 + v381;
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
    var v382 = Math.random();
    var v383 = components.length;
    var v95 = v382 * v383;
    tempNum = JAM.call(Math.floor, Math, [v95], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p18);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p10);
}
function getSequenceFromFasta(sequenceRecord) {
  var v384 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v97 = v384 != -1;
  if (v97) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v385 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v99 = v385 != -1;
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
  var v738 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p17);
  var v731 = v738 != -1;
  var v740 = !v731;
  if (v740) {
    var v739 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17);
    v731 = v739 != -1;
  }
  var v720 = v731;
  var v733 = !v720;
  if (v733) {
    var v732 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17);
    v720 = v732 != -1;
  }
  var v708 = v720;
  var v722 = !v708;
  if (v722) {
    var v721 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17);
    v708 = v721 != -1;
  }
  var v694 = v708;
  var v710 = !v694;
  if (v710) {
    var v709 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17);
    v694 = v709 != -1;
  }
  var v678 = v694;
  var v696 = !v678;
  if (v696) {
    var v695 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17);
    v678 = v695 != -1;
  }
  var v662 = v678;
  var v680 = !v662;
  if (v680) {
    var v679 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17);
    v662 = v679 != -1;
  }
  var v629 = v662;
  var v664 = !v629;
  if (v664) {
    var v663 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17);
    v629 = v663 != -1;
  }
  var v579 = v629;
  var v631 = !v579;
  if (v631) {
    var v630 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17);
    v579 = v630 != -1;
  }
  var v510 = v579;
  var v581 = !v510;
  if (v581) {
    var v580 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17);
    v510 = v580 != -1;
  }
  var v386 = v510;
  var v512 = !v386;
  if (v512) {
    var v511 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17);
    v386 = v511 != -1;
  }
  var v100 = v386;
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
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v105 = outputWindow.document;
  var v582 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v513 = v582 + "<head>\n";
  var v387 = v513 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v387 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v105.write, v105, [v106], JAM.policy.p18);
  if (isColor) {
    var v107 = outputWindow.document;
    var v753 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v749 = v753 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v745 = v749 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v741 = v745 + "div.info {font-weight: bold}\n";
    var v734 = v741 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v723 = v734 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v711 = v723 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v697 = v711 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v681 = v697 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v665 = v681 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v632 = v665 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v583 = v632 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v514 = v583 + "td.many {color: #000000}\n";
    var v388 = v514 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v388 + "</style>\n";
    JAM.call(v107.write, v107, [v108], JAM.policy.p18);
  } else {
    var v109 = outputWindow.document;
    var v757 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v754 = v757 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v750 = v754 + "div.title {display: none}\n";
    var v746 = v750 + "div.info {font-weight: bold}\n";
    var v742 = v746 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v735 = v742 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v724 = v735 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v712 = v724 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v698 = v712 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v682 = v698 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v666 = v682 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v633 = v666 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v584 = v633 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v515 = v584 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v389 = v515 + "img {display: none}\n";
    var v110 = v389 + "</style>\n";
    JAM.call(v109.write, v109, [v110], JAM.policy.p18);
  }
  var v111 = outputWindow.document;
  var v585 = "</head>\n" + '<body class="main">\n';
  var v516 = v585 + '<div class="title">';
  var v390 = v516 + title$$7;
  var v112 = v390 + " results</div>\n";
  JAM.call(v111.write, v111, [v112], JAM.policy.p18);
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
  var v113 = outputWindow.document;
  var v586 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v517 = v586 + "<head>\n";
  var v391 = v517 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v391 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v113.write, v113, [v114], JAM.policy.p18);
  if (isBackground) {
    var v115 = outputWindow.document;
    var v755 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v751 = v755 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v747 = v751 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v743 = v747 + "div.info {font-weight: bold}\n";
    var v736 = v743 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v725 = v736 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v713 = v725 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v699 = v713 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v683 = v699 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v667 = v683 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v634 = v667 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v587 = v634 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v518 = v587 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v392 = v518 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v392 + "</style>\n";
    JAM.call(v115.write, v115, [v116], JAM.policy.p18);
  } else {
    var v117 = outputWindow.document;
    var v759 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v758 = v759 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v756 = v758 + "div.title {display: none}\n";
    var v752 = v756 + "div.info {font-weight: bold}\n";
    var v748 = v752 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v744 = v748 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v737 = v744 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v726 = v737 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v714 = v726 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v700 = v714 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v684 = v700 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v668 = v684 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v635 = v668 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v588 = v635 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v519 = v588 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v393 = v519 + "img {display: none}\n";
    var v118 = v393 + "</style>\n";
    JAM.call(v117.write, v117, [v118], JAM.policy.p18);
  }
  var v119 = outputWindow.document;
  var v589 = "</head>\n" + '<body class="main">\n';
  var v520 = v589 + '<div class="title">';
  var v394 = v520 + title$$9;
  var v120 = v394 + " results</div>\n";
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
  var v395 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p17);
  var v121 = v395 != -1;
  if (v121) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p17);
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p18);
  var v396 = testArray[0];
  var v125 = v396 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v397 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p18);
  var v126 = v397 == -1;
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
  var v398 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p11);
  var v129 = v398 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v399 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p11);
  var v130 = v399 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v400 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p17);
  var v131 = v400 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v636 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17);
  var v590 = v636 == -1;
  var v638 = !v590;
  if (v638) {
    var v637 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17);
    v590 = v637 == -1;
  }
  var v521 = v590;
  var v592 = !v521;
  if (v592) {
    var v591 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17);
    v521 = v591 == -1;
  }
  var v401 = v521;
  var v523 = !v401;
  if (v523) {
    var v522 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17);
    v401 = v522 == -1;
  }
  var v132 = v401;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v402 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p17);
  var v133 = v402 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v403 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v403 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v404 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p17);
  var v136 = v404 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v405 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p17);
  var v137 = v405 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v639 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17);
  var v593 = v639 == -1;
  var v641 = !v593;
  if (v641) {
    var v640 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17);
    v593 = v640 == -1;
  }
  var v524 = v593;
  var v595 = !v524;
  if (v595) {
    var v594 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17);
    v524 = v594 == -1;
  }
  var v406 = v524;
  var v526 = !v406;
  if (v526) {
    var v525 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17);
    v406 = v525 == -1;
  }
  var v138 = v406;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v642 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17);
  var v596 = v642 == -1;
  var v644 = !v596;
  if (v644) {
    var v643 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17);
    v596 = v643 == -1;
  }
  var v527 = v596;
  var v598 = !v527;
  if (v598) {
    var v597 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17);
    v527 = v597 == -1;
  }
  var v407 = v527;
  var v529 = !v407;
  if (v529) {
    var v528 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17);
    v407 = v528 == -1;
  }
  var v139 = v407;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v408 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p17);
  var v140 = v408 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v645 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17);
  var v599 = v645 == -1;
  var v647 = !v599;
  if (v647) {
    var v646 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17);
    v599 = v646 == -1;
  }
  var v530 = v599;
  var v601 = !v530;
  if (v601) {
    var v600 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17);
    v530 = v600 == -1;
  }
  var v409 = v530;
  var v532 = !v409;
  if (v532) {
    var v531 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17);
    v409 = v531 == -1;
  }
  var v141 = v409;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v410 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p17);
  var v142 = v410 == -1;
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
    var v411 = basePerLine / groupSize;
    var v146 = j$$6 <= v411;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v412 = k + i$$5;
        var v144 = JAM.call(text$$10.charAt, text$$10, [v412], JAM.policy.p18);
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v413 = basePerLine / groupSize;
      v146 = j$$6 <= v413;
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
    var v414 = adjustment < 0;
    if (v414) {
      v414 = adjusted >= 0;
    }
    var v150 = v414;
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
    var v415 = basePerLine$$2 / groupSize$$2;
    var v159 = j$$7 <= v415;
    for (;v159;) {
      var v154 = k$$1 < groupSize$$2;
      for (;v154;) {
        var v416 = i$$6 + k$$1;
        var v151 = v416 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v152 = lineOfText$$1;
        var v417 = k$$1 + i$$6;
        var v153 = JAM.call(text$$12.charAt, text$$12, [v417], JAM.policy.p18);
        lineOfText$$1 = v152 + v153;
        k$$1 = k$$1 + 1;
        v154 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v157 = numberPosition$$1 == "above";
      if (v157) {
        var v155 = aboveNum;
        var v418 = adjustNumbering(i$$6, numberingAdjustment);
        var v156 = rightNum(v418, "", groupSize$$2, tabIn$$3);
        aboveNum = v155 + v156;
      }
      var v158 = i$$6 >= stopBase$$2;
      if (v158) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v419 = basePerLine$$2 / groupSize$$2;
      v159 = j$$7 <= v419;
    }
    var v182 = numberPosition$$1 == "left";
    if (v182) {
      var v160 = outputWindow.document;
      var v602 = adjustNumbering(lineNum, numberingAdjustment);
      var v533 = rightNum(v602, "", 8, tabIn$$3);
      var v420 = v533 + lineOfText$$1;
      var v161 = v420 + "\n";
      JAM.call(v160.write, v160, [v161], JAM.policy.p18);
      var v165 = strands$$1 == "two";
      if (v165) {
        var v162 = outputWindow.document;
        var v603 = adjustNumbering(lineNum, numberingAdjustment);
        var v534 = rightNum(v603, "", 8, tabIn$$3);
        var v535 = complement(lineOfText$$1);
        var v421 = v534 + v535;
        var v163 = v421 + "\n";
        JAM.call(v162.write, v162, [v163], JAM.policy.p18);
        var v164 = outputWindow.document;
        JAM.call(v164.write, v164, ["\n"], JAM.policy.p10);
      }
    } else {
      var v181 = numberPosition$$1 == "right";
      if (v181) {
        var v166 = outputWindow.document;
        var v536 = lineOfText$$1;
        var v537 = adjustNumbering(i$$6, numberingAdjustment);
        var v422 = v536 + v537;
        var v167 = v422 + "\n";
        JAM.call(v166.write, v166, [v167], JAM.policy.p18);
        var v171 = strands$$1 == "two";
        if (v171) {
          var v168 = outputWindow.document;
          var v538 = complement(lineOfText$$1);
          var v539 = adjustNumbering(i$$6, numberingAdjustment);
          var v423 = v538 + v539;
          var v169 = v423 + "\n";
          JAM.call(v168.write, v168, [v169], JAM.policy.p18);
          var v170 = outputWindow.document;
          JAM.call(v170.write, v170, ["\n"], JAM.policy.p10);
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
            var v424 = complement(lineOfText$$1);
            var v177 = v424 + "\n";
            JAM.call(v176.write, v176, [v177], JAM.policy.p18);
            var v178 = outputWindow.document;
            JAM.call(v178.write, v178, ["\n"], JAM.policy.p10);
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
    var v425 = basePerLine$$3 / groupSize$$3;
    var v190 = j$$8 <= v425;
    for (;v190;) {
      var v186 = k$$2 < groupSize$$3;
      for (;v186;) {
        var v426 = i$$7 + k$$2;
        var v184 = v426 >= stopBase$$3;
        if (v184) {
          break;
        }
        var v427 = k$$2 + i$$7;
        var v185 = JAM.call(text$$13.charAt, text$$13, [v427], JAM.policy.p18);
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
      var v428 = basePerLine$$3 / groupSize$$3;
      v190 = j$$8 <= v428;
    }
    var v201 = numberPosition$$2 == "left";
    if (v201) {
      var v191 = outputWindow.document;
      var v540 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v429 = v540 + lineOfText$$2;
      var v192 = v429 + "\n";
      JAM.call(v191.write, v191, [v192], JAM.policy.p18);
    } else {
      var v200 = numberPosition$$2 == "right";
      if (v200) {
        var v193 = outputWindow.document;
        var v430 = lineOfText$$2 + i$$7;
        var v194 = v430 + "\n";
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
  var v604 = sequence$$13.length;
  var v541 = v604 <= firstIndexToMutate;
  var v605 = !v541;
  if (v605) {
    v541 = lastIndexToMutate < 0;
  }
  var v431 = v541;
  var v542 = !v431;
  if (v542) {
    v431 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v203 = v431;
  if (v203) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v211 = i$$8 < numMut;
  for (;v211;) {
    maxNum = sequence$$13.length;
    var v432 = Math.random();
    var v204 = v432 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v204], JAM.policy.p17);
    var v433 = randNum < firstIndexToMutate;
    var v543 = !v433;
    if (v543) {
      v433 = randNum > lastIndexToMutate;
    }
    var v205 = v433;
    if (v205) {
      numMut++;
      i$$8++;
      v211 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p17);
    needNewChar = true;
    for (;needNewChar;) {
      var v434 = Math.random();
      var v435 = components$$1.length;
      var v206 = v434 * v435;
      componentsIndex = JAM.call(Math.round, Math, [v206], JAM.policy.p17);
      var v436 = components$$1.length;
      var v207 = componentsIndex == v436;
      if (v207) {
        componentsIndex = 0;
      }
      var v437 = components$$1[componentsIndex];
      var v208 = v437 != currentChar;
      if (v208) {
        needNewChar = false;
      }
    }
    var v438 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v439 = components$$1[componentsIndex];
    var v209 = v438 + v439;
    var v440 = randNum + 1;
    var v441 = sequence$$13.length;
    var v210 = JAM.call(sequence$$13.substring, sequence$$13, [v440, v441], JAM.policy.p27);
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
    var v442 = Math.random();
    var v443 = components$$2.length;
    var v214 = v442 * v443;
    tempNum$$1 = JAM.call(Math.floor, Math, [v214], JAM.policy.p17);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v444 = sequence$$14.length;
    var v217 = v444 == 60;
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
    var v606 = sequence$$15.length;
    var v544 = v606 - lookAhead;
    var v545 = sequence$$15.length;
    var v445 = JAM.call(sequence$$15.substring, sequence$$15, [v544, v545], JAM.policy.p27);
    var v222 = v445 + sequence$$15;
    var v223 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v222 + v223;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v225 = outputWindow.document;
  JAM.call(v225.write, v225, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p10);
  var v226 = outputWindow.document;
  var v607 = '<tr><td class="title" width="200px">' + "Site:";
  var v546 = v607 + '</td><td class="title">';
  var v446 = v546 + "Positions:";
  var v227 = v446 + "</td></tr>\n";
  JAM.call(v226.write, v226, [v227], JAM.policy.p18);
  var i$$9 = 0;
  var v447 = arrayOfItems.length;
  var v243 = i$$9 < v447;
  for (;v243;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v448 = arrayOfItems[i$$9];
    var v228 = JAM.call(v448.match, v448, [/\/.+\//], JAM.policy.p17);
    matchExp = v228 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v608 = arrayOfItems[i$$9];
    var v547 = JAM.call(v608.match, v608, [/\)\D*\d+/], JAM.policy.p17);
    var v449 = v547.toString();
    var v229 = JAM.call(v449.replace, v449, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v229);
    var v235 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p18);
    for (;v235;) {
      var v230 = matchExp.lastIndex;
      matchPosition = v230 - cutDistance;
      var v450 = matchPosition >= lowerLimit;
      if (v450) {
        v450 = matchPosition < upperLimit;
      }
      var v233 = v450;
      if (v233) {
        timesFound++;
        var v231 = tempString$$1 + ", ";
        var v451 = matchPosition - shiftValue;
        var v232 = v451 + 1;
        tempString$$1 = v231 + v232;
      }
      var v452 = matchExp.lastIndex;
      var v548 = RegExp.lastMatch;
      var v453 = v548.length;
      var v234 = v452 - v453;
      matchExp.lastIndex = v234 + 1;
      v235 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p18);
    }
    var v454 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p17);
    var v236 = v454 != -1;
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
    var v701 = '<tr><td class="' + backGroundClass;
    var v685 = v701 + '">';
    var v727 = arrayOfItems[i$$9];
    var v715 = JAM.call(v727.match, v727, [/\([^\(]+\)/], JAM.policy.p17);
    var v702 = v715.toString();
    var v686 = JAM.call(v702.replace, v702, [/\(|\)/g, ""], JAM.policy.p15);
    var v669 = v685 + v686;
    var v648 = v669 + '</td><td class="';
    var v609 = v648 + backGroundClass;
    var v549 = v609 + '">';
    var v455 = v549 + tempString$$1;
    var v242 = v455 + "</td></tr>\n";
    JAM.call(v241.write, v241, [v242], JAM.policy.p18);
    timesFound = 0;
    i$$9++;
    var v456 = arrayOfItems.length;
    v243 = i$$9 < v456;
  }
  var v244 = outputWindow.document;
  JAM.call(v244.write, v244, ["</tbody></table>\n"], JAM.policy.p10);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v245 = outputWindow.document;
  JAM.call(v245.write, v245, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p10);
  var v246 = outputWindow.document;
  var v670 = '<tr><td class="title">' + "Pattern:";
  var v649 = v670 + '</td><td class="title">';
  var v610 = v649 + "Times found:";
  var v550 = v610 + '</td><td class="title">';
  var v457 = v550 + "Percentage:";
  var v247 = v457 + "</td></tr>\n";
  JAM.call(v246.write, v246, [v247], JAM.policy.p18);
  var i$$10 = 0;
  var v458 = arrayOfItems$$1.length;
  var v256 = i$$10 < v458;
  for (;v256;) {
    var tempNumber = 0;
    var v459 = arrayOfItems$$1[i$$10];
    var v248 = JAM.call(v459.match, v459, [/\/[^\/]+\//], JAM.policy.p17);
    var matchExp$$1 = v248 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v460 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p18);
    var v250 = v460 != -1;
    if (v250) {
      var v249 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p18);
      tempNumber = v249.length;
    }
    var percentage = 0;
    var v551 = originalLength + 1;
    var v650 = arrayOfItems$$1[i$$10];
    var v611 = JAM.call(v650.match, v650, [/\d+/], JAM.policy.p17);
    var v552 = parseFloat(v611);
    var v461 = v551 - v552;
    var v253 = v461 > 0;
    if (v253) {
      var v251 = 100 * tempNumber;
      var v462 = originalLength + 1;
      var v612 = arrayOfItems$$1[i$$10];
      var v553 = JAM.call(v612.match, v612, [/\d+/], JAM.policy.p17);
      var v463 = parseFloat(v553);
      var v252 = v462 - v463;
      percentage = v251 / v252;
    }
    var v254 = outputWindow.document;
    var v728 = arrayOfItems$$1[i$$10];
    var v716 = JAM.call(v728.match, v728, [/\([^\(]+\)\b/], JAM.policy.p17);
    var v703 = v716.toString();
    var v687 = JAM.call(v703.replace, v703, [/\(|\)/g, ""], JAM.policy.p15);
    var v671 = "<tr><td>" + v687;
    var v651 = v671 + "</td><td>";
    var v613 = v651 + tempNumber;
    var v554 = v613 + "</td><td>";
    var v555 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p11);
    var v464 = v554 + v555;
    var v255 = v464 + "</td></tr>\n";
    JAM.call(v254.write, v254, [v255], JAM.policy.p18);
    i$$10++;
    var v465 = arrayOfItems$$1.length;
    v256 = i$$10 < v465;
  }
  var v257 = outputWindow.document;
  JAM.call(v257.write, v257, ["</tbody></table>\n"], JAM.policy.p10);
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
  var v264 = v466 > 0;
  for (;v264;) {
    maxNum$$1 = sequence$$17.length;
    var v467 = Math.random();
    var v258 = v467 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v258], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v259 = randNum$$1 + 1;
    var v260 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v259, v260], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v468 = tempSeq.length;
    var v263 = v468 == 60;
    if (v263) {
      var v261 = outputWindow.document;
      var v262 = tempSeq + "\n";
      JAM.call(v261.write, v261, [v262], JAM.policy.p18);
      tempSeq = "";
    }
    var v469 = sequence$$17.length;
    v264 = v469 > 0;
  }
  var v265 = outputWindow.document;
  var v266 = tempSeq + "\n";
  JAM.call(v265.write, v265, [v266], JAM.policy.p18);
  return true;
}
function dnaPattern(theDocument) {
  JAM.startProfile('compute');

  var newDna = "";
  var maxInput$$3 = 5E5;
  var matches = new Array;
  var v470 = testScript();
  var v267 = v470 == false;
  if (v267) {
    return false;
  }
  var v704 = theDocument.forms;
  var v688 = v704[0];
  var v672 = v688.elements;
  var v652 = v672[0];
  var v614 = checkFormElement(v652);
  var v556 = v614 == false;
  var v616 = !v556;
  if (v616) {
    var v717 = theDocument.forms;
    var v705 = v717[0];
    var v689 = v705.elements;
    var v673 = v689[0];
    var v653 = v673.value;
    var v615 = checkSequenceLength(v653, maxInput$$3);
    v556 = v615 == false;
  }
  var v471 = v556;
  var v558 = !v471;
  if (v558) {
    var v690 = theDocument.forms;
    var v674 = v690[0];
    var v654 = v674.elements;
    var v617 = v654[1];
    var v557 = checkFormElement(v617);
    v471 = v557 == false;
  }
  var v268 = v471;
  if (v268) {
    return false;
  }
  var v691 = theDocument.forms;
  var v675 = v691[0];
  var v655 = v675.elements;
  var v618 = v655[1];
  var v559 = v618.value;
  var v472 = JAM.call(v559.replace, v559, [/\//g, ""], JAM.policy.p15);
  var v269 = "/" + v472;
  var re$$3 = v269 + "/gi";
  re$$3 = removeWhiteSpace(re$$3);
  try {
    if (JAM.isEval(eval)) {
      re$$3 = eval("introspect(JAM.policy.pFull) { " + re$$3 + " }");
    } else {
      re$$3 = JAM.call(eval, null, [re$$3]);
    }
    var testString$$1 = "teststring";
    testString$$1 = JAM.call(testString$$1.replace, testString$$1, [re$$3, ""], JAM.policy.p19);
  } catch (e$$5) {
    alert("The regular expression is not formatted correctly.");
    return false;
  }
  openWindow("DNA Pattern Find");
  openPre();
  var v656 = theDocument.forms;
  var v619 = v656[0];
  var v560 = v619.elements;
  var v473 = v560[0];
  var v270 = v473.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v270);
  var i$$11 = 0;
  var v474 = arrayOfFasta$$1.length;
  var v276 = i$$11 < v474;
  for (;v276;) {
    var v271 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v271);
    var v272 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v272);
    newDna = removeNonDna(newDna);
    var v273 = outputWindow.document;
    var v274 = getInfoFromTitleAndSequence(title, newDna);
    JAM.call(v273.write, v273, [v274], JAM.policy.p18);
    writeDnaPattern(newDna, re$$3);
    var v275 = outputWindow.document;
    JAM.call(v275.write, v275, ["\n\n"], JAM.policy.p10);
    i$$11++;
    var v475 = arrayOfFasta$$1.length;
    v276 = i$$11 < v475;
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function writeDnaPattern(dnaSequence$$3, re$$4) {
  var matchArray$$2;
  var matchCount = 0;
  var length$$11 = dnaSequence$$3.length;
  var simplePattern = re$$4.toString();
  simplePattern = JAM.call(simplePattern.replace, simplePattern, [/\/gi$|\/ig$|^\//gi, ""], JAM.policy.p15);
  var v281 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [dnaSequence$$3], JAM.policy.p18);
  for (;v281;) {
    matchCount++;
    var match_end = re$$4.lastIndex;
    var v561 = RegExp.lastMatch;
    var v476 = v561.length;
    var v277 = match_end - v476;
    var match_start = v277 + 1;
    var v278 = outputWindow.document;
    var v729 = "&gt;match number " + matchCount;
    var v718 = v729 + ' to "';
    var v706 = v718 + simplePattern;
    var v692 = v706 + '" start=';
    var v676 = v692 + match_start;
    var v657 = v676 + " end=";
    var v620 = v657 + match_end;
    var v562 = v620 + " on the direct strand\n";
    var v621 = matchArray$$2[0];
    var v563 = addReturns(v621);
    var v477 = v562 + v563;
    var v279 = v477 + "\n\n";
    JAM.call(v278.write, v278, [v279], JAM.policy.p18);
    var v478 = re$$4.lastIndex;
    var v564 = RegExp.lastMatch;
    var v479 = v564.length;
    var v280 = v478 - v479;
    re$$4.lastIndex = v280 + 1;
    v281 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [dnaSequence$$3], JAM.policy.p18);
  }
  re$$4.lastIndex = 0;
  var v282 = complement(dnaSequence$$3);
  dnaSequence$$3 = reverse(v282);
  var v288 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [dnaSequence$$3], JAM.policy.p18);
  for (;v288;) {
    matchCount++;
    var v480 = re$$4.lastIndex;
    var v283 = length$$11 - v480;
    match_start = v283 + 1;
    var v565 = RegExp.lastMatch;
    var v481 = v565.length;
    var v284 = match_start + v481;
    match_end = v284 - 1;
    var v285 = outputWindow.document;
    var v730 = "&gt;match number " + matchCount;
    var v719 = v730 + ' to "';
    var v707 = v719 + simplePattern;
    var v693 = v707 + '" start=';
    var v677 = v693 + match_start;
    var v658 = v677 + " end=";
    var v622 = v658 + match_end;
    var v566 = v622 + " on the reverse strand\n";
    var v623 = matchArray$$2[0];
    var v567 = addReturns(v623);
    var v482 = v566 + v567;
    var v286 = v482 + "\n\n";
    JAM.call(v285.write, v285, [v286], JAM.policy.p18);
    var v483 = re$$4.lastIndex;
    var v568 = RegExp.lastMatch;
    var v484 = v568.length;
    var v287 = v483 - v484;
    re$$4.lastIndex = v287 + 1;
    v288 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [dnaSequence$$3], JAM.policy.p18);
  }
  var v485 = matchCount > 0;
  var v290 = !v485;
  if (v290) {
    var v289 = outputWindow.document;
    JAM.call(v289.write, v289, ["no matches found for this sequence.\n\n"], JAM.policy.p10);
  }
  return;
}
JAM.set(document, "onload", v2);
var v291 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p10);
JAM.set(v291, "onclick", v3);
var v292 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p10);
JAM.set(v292, "onclick", v4)

JAM.stopProfile('load');
