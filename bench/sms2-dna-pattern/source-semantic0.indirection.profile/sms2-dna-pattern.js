
JAM.startProfile('load');
function v4() {
  var v566 = document.forms;
  var v484 = v566[0];
  var v291 = v484.elements;
  var v5 = v291[0];
  v5.value = " ";
  var v567 = document.forms;
  var v485 = v567[0];
  var v292 = v485.elements;
  var v6 = v292[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    dnaPattern();
  } catch (e$$6) {
    var v7 = "The following error was encountered: " + e$$6;
    alert(v7);
  }
  return;
}
function v2() {
  var v293 = document.main_form;
  var v8 = v293.main_submit;
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
  var v294 = arrayOfSequences.length;
  var v10 = v294 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v295 = arrayOfTitles.length;
  var v12 = i$$1 < v295;
  for (;v12;) {
    var v621 = arrayOfTitles[i$$1];
    var v568 = JAM.call(v621.search, v621, [/\S/], JAM.policy.p17);
    var v486 = v568 == -1;
    var v570 = !v486;
    if (v570) {
      var v622 = arrayOfSequences[i$$1];
      var v569 = JAM.call(v622.search, v622, [/\S/], JAM.policy.p17);
      v486 = v569 == -1;
    }
    var v296 = v486;
    var v488 = !v296;
    if (v488) {
      var v571 = arrayOfSequences[i$$1];
      var v487 = v571.length;
      v296 = v487 != lengthOfAlign;
    }
    var v11 = v296;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v297 = arrayOfTitles.length;
    v12 = i$$1 < v297;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v656 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17);
  var v623 = v656 == -1;
  var v658 = !v623;
  if (v658) {
    var v657 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17);
    v623 = v657 == -1;
  }
  var v572 = v623;
  var v625 = !v572;
  if (v625) {
    var v624 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17);
    v572 = v624 == -1;
  }
  var v489 = v572;
  var v574 = !v489;
  if (v574) {
    var v573 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17);
    v489 = v573 == -1;
  }
  var v298 = v489;
  var v491 = !v298;
  if (v491) {
    var v490 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17);
    v298 = v490 == -1;
  }
  var v13 = v298;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v492 = formElement.value;
  var v299 = JAM.call(v492.search, v492, [/\S/], JAM.policy.p17);
  var v14 = v299 == -1;
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
  var v300 = arrayOfPatterns.length;
  var v17 = z$$2 < v300;
  for (;v17;) {
    var v493 = arrayOfPatterns[z$$2];
    var v301 = JAM.call(v493.search, v493, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17);
    var v15 = v301 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v494 = arrayOfPatterns[z$$2];
    var v302 = moreExpressionCheck(v494);
    var v16 = v302 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v303 = arrayOfPatterns.length;
    v17 = z$$2 < v303;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v304 = arrayOfPatterns.length;
  var v23 = j < v304;
  for (;v23;) {
    var v495 = arrayOfPatterns[j];
    var v305 = JAM.call(v495.match, v495, [/\/.+\//], JAM.policy.p17);
    var v20 = v305 + "gi";
    if (JAM.isEval(eval)) {
      var v757 = eval("introspect(JAM.policy.pFull) { " + v20 + " }")
    } else {
      var v757 = JAM.call(eval, null, [v20])
    }
    geneticCodeMatchExp[j] = v757;
    var v306 = arrayOfPatterns[j];
    var v21 = JAM.call(v306.match, v306, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v758 = v21.toString();
    geneticCodeMatchResult[j] = v758;
    var v22 = geneticCodeMatchResult[j];
    var v759 = JAM.call(v22.replace, v22, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v759;
    j++;
    var v307 = arrayOfPatterns.length;
    v23 = j < v307;
  }
  var i$$2 = 0;
  var v496 = testSequence.length;
  var v308 = v496 - 3;
  var v30 = i$$2 <= v308;
  for (;v30;) {
    var v24 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v24], JAM.policy.p15);
    j = 0;
    var v309 = geneticCodeMatchExp.length;
    var v28 = j < v309;
    for (;v28;) {
      var v497 = geneticCodeMatchExp[j];
      var v310 = JAM.call(codon.search, codon, [v497], JAM.policy.p18);
      var v27 = v310 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v311 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v311 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v312 = geneticCodeMatchExp.length;
      v28 = j < v312;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v498 = testSequence.length;
    var v313 = v498 - 3;
    v30 = i$$2 <= v313;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v314 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v314;
  for (;v32;) {
    var v499 = arrayOfPatterns$$1[z$$3];
    var v315 = JAM.call(v499.search, v499, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17);
    var v31 = v315 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v316 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v316;
  }
  var i$$3 = 0;
  var v317 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v317;
  for (;v36;) {
    var v500 = arrayOfPatterns$$1[i$$3];
    var v318 = "[" + v500;
    var v33 = v318 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v319 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v319;
    for (;v35;) {
      var v501 = arrayOfPatterns$$1[j$$1];
      var v320 = JAM.call(v501.search, v501, [re], JAM.policy.p18);
      var v34 = v320 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v321 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v321;
    }
    i$$3++;
    var v322 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v322;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v323 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v323;
  for (;v39;) {
    var v502 = arrayOfPatterns$$2[z$$4];
    var v324 = JAM.call(v502.search, v502, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17);
    var v37 = v324 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v503 = arrayOfPatterns$$2[z$$4];
    var v325 = moreExpressionCheck(v503);
    var v38 = v325 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v326 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v326;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v575 = getSequenceFromFasta(text$$7);
  var v504 = JAM.call(v575.replace, v575, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v327 = v504.length;
  var v41 = v327 > maxInput;
  if (v41) {
    var v328 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v328 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v329 = text$$8.length;
  var v43 = v329 > maxInput$$1;
  if (v43) {
    var v330 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v330 + " characters.";
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
  JAM.call(v44.write, v44, ["</form>"], JAM.policy.p12);
  return true;
}
function closePre() {
  var v45 = outputWindow.document;
  JAM.call(v45.write, v45, ["</div>"], JAM.policy.p12);
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</pre>\n"], JAM.policy.p12);
  return;
}
function closeTextArea() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</textarea>"], JAM.policy.p12);
  return true;
}
function closeWindow() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</body>\n</html>\n"], JAM.policy.p12);
  outputWindow.status = "Done.";
  var v49 = outputWindow.document;
  v49.close();
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
  var v331 = alignArray.length;
  var v50 = v331 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v332 = alignArray.length;
  var v52 = i$$4 < v332;
  for (;v52;) {
    var v505 = alignArray[i$$4];
    var v333 = JAM.call(v505.search, v505, [/[^\s]+\s/], JAM.policy.p17);
    var v51 = v333 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v334 = alignArray.length;
    v52 = i$$4 < v334;
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
  var v335 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v55 = v335 != -1;
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
  var v336 = sequence$$2.length;
  var v56 = "&gt;results for " + v336;
  var stringToReturn = v56 + " residue sequence ";
  var v337 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p17);
  var v58 = v337 != -1;
  if (v58) {
    var v338 = stringToReturn + '"';
    var v57 = v338 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v339 = stringToReturn + ' starting "';
  var v340 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v59 = v339 + v340;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v341 = sequenceOne.length;
  var v60 = "Search results for " + v341;
  var stringToReturn$$1 = v60 + " residue sequence ";
  var v342 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p17);
  var v62 = v342 != -1;
  if (v62) {
    var v343 = stringToReturn$$1 + '"';
    var v61 = v343 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v344 = stringToReturn$$1 + ' starting "';
  var v345 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v63 = v344 + v345;
  stringToReturn$$1 = v63 + '"\n';
  var v346 = stringToReturn$$1 + "and ";
  var v347 = sequenceTwo.length;
  var v64 = v346 + v347;
  stringToReturn$$1 = v64 + " residue sequence ";
  var v348 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p17);
  var v66 = v348 != -1;
  if (v66) {
    var v349 = stringToReturn$$1 + '"';
    var v65 = v349 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v350 = stringToReturn$$1 + ' starting "';
  var v351 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v67 = v350 + v351;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v352 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v352;
  for (;v71;) {
    var v506 = arrayOfPatterns$$3[j$$2];
    var v353 = JAM.call(v506.match, v506, [/\/.+\//], JAM.policy.p17);
    var v70 = v353 + "gi";
    if (JAM.isEval(eval)) {
      var v760 = eval("introspect(JAM.policy.pFull) { " + v70 + " }")
    } else {
      var v760 = JAM.call(eval, null, [v70])
    }
    geneticCodeMatchExp$$1[j$$2] = v760;
    j$$2++;
    var v354 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v354;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v355 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v355;
  for (;v75;) {
    var v356 = arrayOfPatterns$$4[j$$3];
    var v73 = JAM.call(v356.match, v356, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v761 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v761;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v762 = JAM.call(v74.replace, v74, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v762;
    j$$3++;
    var v357 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v357;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(sequence$$3) {
  var fastaSequenceTitle$$1 = title;
  var v358 = sequence$$3.length;
  var v76 = "Results for " + v358;
  var stringToReturn$$2 = v76 + " residue sequence ";
  var v359 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p17);
  var v78 = v359 != -1;
  if (v78) {
    var v360 = stringToReturn$$2 + '"';
    var v77 = v360 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v361 = stringToReturn$$2 + ' starting "';
  var v362 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v79 = v361 + v362;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v507 = "Results for " + topology;
  var v363 = v507 + " ";
  var v364 = sequence$$4.length;
  var v81 = v363 + v364;
  var stringToReturn$$3 = v81 + " residue sequence ";
  var v365 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p17);
  var v83 = v365 != -1;
  if (v83) {
    var v366 = stringToReturn$$3 + '"';
    var v82 = v366 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v367 = stringToReturn$$3 + ' starting "';
  var v368 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v84 = v367 + v368;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v369 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v369;
  var stringToReturn$$4 = v86 + " residue sequence ";
  var v370 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p17);
  var v88 = v370 != -1;
  if (v88) {
    var v371 = stringToReturn$$4 + '"';
    var v87 = v371 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v372 = stringToReturn$$4 + ' starting "';
  var v373 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v89 = v372 + v373;
  stringToReturn$$4 = v89 + '"\n';
  var v374 = stringToReturn$$4 + "and ";
  var v375 = sequenceTwo$$1.length;
  var v90 = v374 + v375;
  stringToReturn$$4 = v90 + " residue sequence ";
  var v376 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p17);
  var v92 = v376 != -1;
  if (v92) {
    var v377 = stringToReturn$$4 + '"';
    var v91 = v377 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v378 = stringToReturn$$4 + ' starting "';
  var v379 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v93 = v378 + v379;
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
    var v380 = Math.random();
    var v381 = components.length;
    var v95 = v380 * v381;
    tempNum = JAM.call(Math.floor, Math, [v95], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p18);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p12);
}
function getSequenceFromFasta(sequenceRecord) {
  var v382 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v97 = v382 != -1;
  if (v97) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v383 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v99 = v383 != -1;
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
  var v735 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p17);
  var v728 = v735 != -1;
  var v737 = !v728;
  if (v737) {
    var v736 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17);
    v728 = v736 != -1;
  }
  var v717 = v728;
  var v730 = !v717;
  if (v730) {
    var v729 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17);
    v717 = v729 != -1;
  }
  var v705 = v717;
  var v719 = !v705;
  if (v719) {
    var v718 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17);
    v705 = v718 != -1;
  }
  var v691 = v705;
  var v707 = !v691;
  if (v707) {
    var v706 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17);
    v691 = v706 != -1;
  }
  var v675 = v691;
  var v693 = !v675;
  if (v693) {
    var v692 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17);
    v675 = v692 != -1;
  }
  var v659 = v675;
  var v677 = !v659;
  if (v677) {
    var v676 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17);
    v659 = v676 != -1;
  }
  var v626 = v659;
  var v661 = !v626;
  if (v661) {
    var v660 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17);
    v626 = v660 != -1;
  }
  var v576 = v626;
  var v628 = !v576;
  if (v628) {
    var v627 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17);
    v576 = v627 != -1;
  }
  var v508 = v576;
  var v578 = !v508;
  if (v578) {
    var v577 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17);
    v508 = v577 != -1;
  }
  var v384 = v508;
  var v510 = !v384;
  if (v510) {
    var v509 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17);
    v384 = v509 != -1;
  }
  var v100 = v384;
  if (v100) {
    return false;
  }
  return true;
}
function openForm() {
  var v101 = outputWindow.document;
  JAM.call(v101.write, v101, ['<form action="">\n'], JAM.policy.p12);
  return true;
}
function openPre() {
  var v102 = outputWindow.document;
  JAM.call(v102.write, v102, ["<pre>"], JAM.policy.p12);
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ['<div class="pre">'], JAM.policy.p12);
  return;
}
function openTextArea() {
  var v104 = outputWindow.document;
  JAM.call(v104.write, v104, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p12);
  return true;
}
function openWindow() {
  var title$$6 = "DNA Pattern Find";
  _openWindow(title$$6);
  return;
}
function _openWindow(title$$7) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v105 = outputWindow.document;
  var v579 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v511 = v579 + "<head>\n";
  var v385 = v511 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v385 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v105.write, v105, [v106], JAM.policy.p18);
  if (isColor) {
    var v107 = outputWindow.document;
    var v750 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v746 = v750 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v742 = v746 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v738 = v742 + "div.info {font-weight: bold}\n";
    var v731 = v738 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v720 = v731 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v708 = v720 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v694 = v708 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v678 = v694 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v662 = v678 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v629 = v662 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v580 = v629 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v512 = v580 + "td.many {color: #000000}\n";
    var v386 = v512 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v386 + "</style>\n";
    JAM.call(v107.write, v107, [v108], JAM.policy.p18);
  } else {
    var v109 = outputWindow.document;
    var v754 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v751 = v754 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v747 = v751 + "div.title {display: none}\n";
    var v743 = v747 + "div.info {font-weight: bold}\n";
    var v739 = v743 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v732 = v739 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v721 = v732 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v709 = v721 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v695 = v709 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v679 = v695 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v663 = v679 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v630 = v663 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v581 = v630 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v513 = v581 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v387 = v513 + "img {display: none}\n";
    var v110 = v387 + "</style>\n";
    JAM.call(v109.write, v109, [v110], JAM.policy.p18);
  }
  var v111 = outputWindow.document;
  var v582 = "</head>\n" + '<body class="main">\n';
  var v514 = v582 + '<div class="title">';
  var v388 = v514 + title$$7;
  var v112 = v388 + " results</div>\n";
  JAM.call(v111.write, v111, [v112], JAM.policy.p18);
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
  var v583 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v515 = v583 + "<head>\n";
  var v389 = v515 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v389 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v113.write, v113, [v114], JAM.policy.p18);
  if (isBackground) {
    var v115 = outputWindow.document;
    var v752 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v748 = v752 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v744 = v748 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v740 = v744 + "div.info {font-weight: bold}\n";
    var v733 = v740 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v722 = v733 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v710 = v722 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v696 = v710 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v680 = v696 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v664 = v680 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v631 = v664 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v584 = v631 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v516 = v584 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v390 = v516 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v390 + "</style>\n";
    JAM.call(v115.write, v115, [v116], JAM.policy.p18);
  } else {
    var v117 = outputWindow.document;
    var v756 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v755 = v756 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v753 = v755 + "div.title {display: none}\n";
    var v749 = v753 + "div.info {font-weight: bold}\n";
    var v745 = v749 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v741 = v745 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v734 = v741 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v723 = v734 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v711 = v723 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v697 = v711 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v681 = v697 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v665 = v681 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v632 = v665 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v585 = v632 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v517 = v585 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v391 = v517 + "img {display: none}\n";
    var v118 = v391 + "</style>\n";
    JAM.call(v117.write, v117, [v118], JAM.policy.p18);
  }
  var v119 = outputWindow.document;
  var v586 = "</head>\n" + '<body class="main">\n';
  var v518 = v586 + '<div class="title">';
  var v392 = v518 + title$$9;
  var v120 = v392 + " results</div>\n";
  JAM.call(v119.write, v119, [v120], JAM.policy.p18);
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
  var v393 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p17);
  var v121 = v393 != -1;
  if (v121) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p17);
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
  var v394 = testArray[0];
  var v125 = v394 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v395 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p18);
  var v126 = v395 == -1;
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
  var v396 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9);
  var v129 = v396 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v397 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9);
  var v130 = v397 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v398 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p17);
  var v131 = v398 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v633 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17);
  var v587 = v633 == -1;
  var v635 = !v587;
  if (v635) {
    var v634 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17);
    v587 = v634 == -1;
  }
  var v519 = v587;
  var v589 = !v519;
  if (v589) {
    var v588 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17);
    v519 = v588 == -1;
  }
  var v399 = v519;
  var v521 = !v399;
  if (v521) {
    var v520 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17);
    v399 = v520 == -1;
  }
  var v132 = v399;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v400 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p17);
  var v133 = v400 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v401 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v401 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v402 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p17);
  var v136 = v402 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v403 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p17);
  var v137 = v403 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v636 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17);
  var v590 = v636 == -1;
  var v638 = !v590;
  if (v638) {
    var v637 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17);
    v590 = v637 == -1;
  }
  var v522 = v590;
  var v592 = !v522;
  if (v592) {
    var v591 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17);
    v522 = v591 == -1;
  }
  var v404 = v522;
  var v524 = !v404;
  if (v524) {
    var v523 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17);
    v404 = v523 == -1;
  }
  var v138 = v404;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v639 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17);
  var v593 = v639 == -1;
  var v641 = !v593;
  if (v641) {
    var v640 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17);
    v593 = v640 == -1;
  }
  var v525 = v593;
  var v595 = !v525;
  if (v595) {
    var v594 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17);
    v525 = v594 == -1;
  }
  var v405 = v525;
  var v527 = !v405;
  if (v527) {
    var v526 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17);
    v405 = v526 == -1;
  }
  var v139 = v405;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v406 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p17);
  var v140 = v406 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v642 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17);
  var v596 = v642 == -1;
  var v644 = !v596;
  if (v644) {
    var v643 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17);
    v596 = v643 == -1;
  }
  var v528 = v596;
  var v598 = !v528;
  if (v598) {
    var v597 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17);
    v528 = v597 == -1;
  }
  var v407 = v528;
  var v530 = !v407;
  if (v530) {
    var v529 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17);
    v407 = v529 == -1;
  }
  var v141 = v407;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v408 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p17);
  var v142 = v408 == -1;
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
    var v409 = basePerLine / groupSize;
    var v146 = j$$6 <= v409;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v410 = k + i$$5;
        var v144 = JAM.call(text$$10.charAt, text$$10, [v410], JAM.policy.p18);
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v411 = basePerLine / groupSize;
      v146 = j$$6 <= v411;
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
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v412 = adjustment < 0;
    if (v412) {
      v412 = adjusted >= 0;
    }
    var v150 = v412;
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
    var v413 = basePerLine$$2 / groupSize$$2;
    var v157 = j$$7 <= v413;
    for (;v157;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v414 = i$$6 + k$$1;
        var v151 = v414 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v415 = k$$1 + i$$6;
        var v152 = JAM.call(text$$12.charAt, text$$12, [v415], JAM.policy.p18);
        lineOfText$$1 = lineOfText$$1 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v155 = numberPosition$$1 == "above";
      if (v155) {
        var v416 = adjustNumbering(i$$6, numberingAdjustment);
        var v154 = rightNum(v416, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v154;
      }
      var v156 = i$$6 >= stopBase$$2;
      if (v156) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v417 = basePerLine$$2 / groupSize$$2;
      v157 = j$$7 <= v417;
    }
    var v180 = numberPosition$$1 == "left";
    if (v180) {
      var v158 = outputWindow.document;
      var v599 = adjustNumbering(lineNum, numberingAdjustment);
      var v531 = rightNum(v599, "", 8, tabIn$$3);
      var v418 = v531 + lineOfText$$1;
      var v159 = v418 + "\n";
      JAM.call(v158.write, v158, [v159], JAM.policy.p18);
      var v163 = strands$$1 == "two";
      if (v163) {
        var v160 = outputWindow.document;
        var v600 = adjustNumbering(lineNum, numberingAdjustment);
        var v532 = rightNum(v600, "", 8, tabIn$$3);
        var v533 = complement(lineOfText$$1);
        var v419 = v532 + v533;
        var v161 = v419 + "\n";
        JAM.call(v160.write, v160, [v161], JAM.policy.p18);
        var v162 = outputWindow.document;
        JAM.call(v162.write, v162, ["\n"], JAM.policy.p12);
      }
    } else {
      var v179 = numberPosition$$1 == "right";
      if (v179) {
        var v164 = outputWindow.document;
        var v534 = adjustNumbering(i$$6, numberingAdjustment);
        var v420 = lineOfText$$1 + v534;
        var v165 = v420 + "\n";
        JAM.call(v164.write, v164, [v165], JAM.policy.p18);
        var v169 = strands$$1 == "two";
        if (v169) {
          var v166 = outputWindow.document;
          var v535 = complement(lineOfText$$1);
          var v536 = adjustNumbering(i$$6, numberingAdjustment);
          var v421 = v535 + v536;
          var v167 = v421 + "\n";
          JAM.call(v166.write, v166, [v167], JAM.policy.p18);
          var v168 = outputWindow.document;
          JAM.call(v168.write, v168, ["\n"], JAM.policy.p12);
        }
      } else {
        var v178 = numberPosition$$1 == "above";
        if (v178) {
          var v170 = outputWindow.document;
          var v171 = aboveNum + "\n";
          JAM.call(v170.write, v170, [v171], JAM.policy.p18);
          var v172 = outputWindow.document;
          var v173 = lineOfText$$1 + "\n";
          JAM.call(v172.write, v172, [v173], JAM.policy.p18);
          var v177 = strands$$1 == "two";
          if (v177) {
            var v174 = outputWindow.document;
            var v422 = complement(lineOfText$$1);
            var v175 = v422 + "\n";
            JAM.call(v174.write, v174, [v175], JAM.policy.p18);
            var v176 = outputWindow.document;
            JAM.call(v176.write, v176, ["\n"], JAM.policy.p12);
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
    var v423 = basePerLine$$3 / groupSize$$3;
    var v188 = j$$8 <= v423;
    for (;v188;) {
      var v184 = k$$2 < groupSize$$3;
      for (;v184;) {
        var v424 = i$$7 + k$$2;
        var v182 = v424 >= stopBase$$3;
        if (v182) {
          break;
        }
        var v425 = k$$2 + i$$7;
        var v183 = JAM.call(text$$13.charAt, text$$13, [v425], JAM.policy.p18);
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
      var v426 = basePerLine$$3 / groupSize$$3;
      v188 = j$$8 <= v426;
    }
    var v199 = numberPosition$$2 == "left";
    if (v199) {
      var v189 = outputWindow.document;
      var v537 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v427 = v537 + lineOfText$$2;
      var v190 = v427 + "\n";
      JAM.call(v189.write, v189, [v190], JAM.policy.p18);
    } else {
      var v198 = numberPosition$$2 == "right";
      if (v198) {
        var v191 = outputWindow.document;
        var v428 = lineOfText$$2 + i$$7;
        var v192 = v428 + "\n";
        JAM.call(v191.write, v191, [v192], JAM.policy.p18);
      } else {
        var v197 = numberPosition$$2 == "above";
        if (v197) {
          var v193 = outputWindow.document;
          var v194 = aboveNum$$1 + "\n";
          JAM.call(v193.write, v193, [v194], JAM.policy.p18);
          var v195 = outputWindow.document;
          var v196 = lineOfText$$2 + "\n";
          JAM.call(v195.write, v195, [v196], JAM.policy.p18);
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
  var v601 = sequence$$13.length;
  var v538 = v601 <= firstIndexToMutate;
  var v602 = !v538;
  if (v602) {
    v538 = lastIndexToMutate < 0;
  }
  var v429 = v538;
  var v539 = !v429;
  if (v539) {
    v429 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v201 = v429;
  if (v201) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v209 = i$$8 < numMut;
  for (;v209;) {
    maxNum = sequence$$13.length;
    var v430 = Math.random();
    var v202 = v430 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v202], JAM.policy.p17);
    var v431 = randNum < firstIndexToMutate;
    var v540 = !v431;
    if (v540) {
      v431 = randNum > lastIndexToMutate;
    }
    var v203 = v431;
    if (v203) {
      numMut++;
      i$$8++;
      v209 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p17);
    needNewChar = true;
    for (;needNewChar;) {
      var v432 = Math.random();
      var v433 = components$$1.length;
      var v204 = v432 * v433;
      componentsIndex = JAM.call(Math.round, Math, [v204], JAM.policy.p17);
      var v434 = components$$1.length;
      var v205 = componentsIndex == v434;
      if (v205) {
        componentsIndex = 0;
      }
      var v435 = components$$1[componentsIndex];
      var v206 = v435 != currentChar;
      if (v206) {
        needNewChar = false;
      }
    }
    var v436 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v437 = components$$1[componentsIndex];
    var v207 = v436 + v437;
    var v438 = randNum + 1;
    var v439 = sequence$$13.length;
    var v208 = JAM.call(sequence$$13.substring, sequence$$13, [v438, v439], JAM.policy.p27);
    sequence$$13 = v207 + v208;
    i$$8++;
    v209 = i$$8 < numMut;
  }
  var v210 = outputWindow.document;
  var v211 = addReturns(sequence$$13);
  JAM.call(v210.write, v210, [v211], JAM.policy.p18);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v216 = j$$9 < lengthOut$$1;
  for (;v216;) {
    var v440 = Math.random();
    var v441 = components$$2.length;
    var v212 = v440 * v441;
    tempNum$$1 = JAM.call(Math.floor, Math, [v212], JAM.policy.p17);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v442 = sequence$$14.length;
    var v215 = v442 == 60;
    if (v215) {
      var v213 = outputWindow.document;
      var v214 = sequence$$14 + "\n";
      JAM.call(v213.write, v213, [v214], JAM.policy.p18);
      sequence$$14 = "";
    }
    j$$9++;
    v216 = j$$9 < lengthOut$$1;
  }
  var v217 = outputWindow.document;
  var v218 = sequence$$14 + "\n";
  JAM.call(v217.write, v217, [v218], JAM.policy.p18);
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
    var v603 = sequence$$15.length;
    var v541 = v603 - lookAhead;
    var v542 = sequence$$15.length;
    var v443 = JAM.call(sequence$$15.substring, sequence$$15, [v541, v542], JAM.policy.p27);
    var v220 = v443 + sequence$$15;
    var v221 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v220 + v221;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v223 = outputWindow.document;
  JAM.call(v223.write, v223, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p12);
  var v224 = outputWindow.document;
  var v604 = '<tr><td class="title" width="200px">' + "Site:";
  var v543 = v604 + '</td><td class="title">';
  var v444 = v543 + "Positions:";
  var v225 = v444 + "</td></tr>\n";
  JAM.call(v224.write, v224, [v225], JAM.policy.p18);
  var i$$9 = 0;
  var v445 = arrayOfItems.length;
  var v241 = i$$9 < v445;
  for (;v241;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v446 = arrayOfItems[i$$9];
    var v226 = JAM.call(v446.match, v446, [/\/.+\//], JAM.policy.p17);
    matchExp = v226 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v605 = arrayOfItems[i$$9];
    var v544 = JAM.call(v605.match, v605, [/\)\D*\d+/], JAM.policy.p17);
    var v447 = v544.toString();
    var v227 = JAM.call(v447.replace, v447, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v227);
    var v233 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p18);
    for (;v233;) {
      var v228 = matchExp.lastIndex;
      matchPosition = v228 - cutDistance;
      var v448 = matchPosition >= lowerLimit;
      if (v448) {
        v448 = matchPosition < upperLimit;
      }
      var v231 = v448;
      if (v231) {
        timesFound++;
        var v229 = tempString$$1 + ", ";
        var v449 = matchPosition - shiftValue;
        var v230 = v449 + 1;
        tempString$$1 = v229 + v230;
      }
      var v450 = matchExp.lastIndex;
      var v545 = RegExp.lastMatch;
      var v451 = v545.length;
      var v232 = v450 - v451;
      matchExp.lastIndex = v232 + 1;
      v233 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p18);
    }
    var v452 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p17);
    var v234 = v452 != -1;
    if (v234) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p15);
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
    var v698 = '<tr><td class="' + backGroundClass;
    var v682 = v698 + '">';
    var v724 = arrayOfItems[i$$9];
    var v712 = JAM.call(v724.match, v724, [/\([^\(]+\)/], JAM.policy.p17);
    var v699 = v712.toString();
    var v683 = JAM.call(v699.replace, v699, [/\(|\)/g, ""], JAM.policy.p15);
    var v666 = v682 + v683;
    var v645 = v666 + '</td><td class="';
    var v606 = v645 + backGroundClass;
    var v546 = v606 + '">';
    var v453 = v546 + tempString$$1;
    var v240 = v453 + "</td></tr>\n";
    JAM.call(v239.write, v239, [v240], JAM.policy.p18);
    timesFound = 0;
    i$$9++;
    var v454 = arrayOfItems.length;
    v241 = i$$9 < v454;
  }
  var v242 = outputWindow.document;
  JAM.call(v242.write, v242, ["</tbody></table>\n"], JAM.policy.p12);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v243 = outputWindow.document;
  JAM.call(v243.write, v243, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p12);
  var v244 = outputWindow.document;
  var v667 = '<tr><td class="title">' + "Pattern:";
  var v646 = v667 + '</td><td class="title">';
  var v607 = v646 + "Times found:";
  var v547 = v607 + '</td><td class="title">';
  var v455 = v547 + "Percentage:";
  var v245 = v455 + "</td></tr>\n";
  JAM.call(v244.write, v244, [v245], JAM.policy.p18);
  var i$$10 = 0;
  var v456 = arrayOfItems$$1.length;
  var v254 = i$$10 < v456;
  for (;v254;) {
    var tempNumber = 0;
    var v457 = arrayOfItems$$1[i$$10];
    var v246 = JAM.call(v457.match, v457, [/\/[^\/]+\//], JAM.policy.p17);
    var matchExp$$1 = v246 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v458 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p18);
    var v248 = v458 != -1;
    if (v248) {
      var v247 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p18);
      tempNumber = v247.length;
    }
    var percentage = 0;
    var v548 = originalLength + 1;
    var v647 = arrayOfItems$$1[i$$10];
    var v608 = JAM.call(v647.match, v647, [/\d+/], JAM.policy.p17);
    var v549 = parseFloat(v608);
    var v459 = v548 - v549;
    var v251 = v459 > 0;
    if (v251) {
      var v249 = 100 * tempNumber;
      var v460 = originalLength + 1;
      var v609 = arrayOfItems$$1[i$$10];
      var v550 = JAM.call(v609.match, v609, [/\d+/], JAM.policy.p17);
      var v461 = parseFloat(v550);
      var v250 = v460 - v461;
      percentage = v249 / v250;
    }
    var v252 = outputWindow.document;
    var v725 = arrayOfItems$$1[i$$10];
    var v713 = JAM.call(v725.match, v725, [/\([^\(]+\)\b/], JAM.policy.p17);
    var v700 = v713.toString();
    var v684 = JAM.call(v700.replace, v700, [/\(|\)/g, ""], JAM.policy.p15);
    var v668 = "<tr><td>" + v684;
    var v648 = v668 + "</td><td>";
    var v610 = v648 + tempNumber;
    var v551 = v610 + "</td><td>";
    var v552 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9);
    var v462 = v551 + v552;
    var v253 = v462 + "</td></tr>\n";
    JAM.call(v252.write, v252, [v253], JAM.policy.p18);
    i$$10++;
    var v463 = arrayOfItems$$1.length;
    v254 = i$$10 < v463;
  }
  var v255 = outputWindow.document;
  JAM.call(v255.write, v255, ["</tbody></table>\n"], JAM.policy.p12);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v464 = sequence$$17.length;
  var v262 = v464 > 0;
  for (;v262;) {
    maxNum$$1 = sequence$$17.length;
    var v465 = Math.random();
    var v256 = v465 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v256], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v257 = randNum$$1 + 1;
    var v258 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v257, v258], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v466 = tempSeq.length;
    var v261 = v466 == 60;
    if (v261) {
      var v259 = outputWindow.document;
      var v260 = tempSeq + "\n";
      JAM.call(v259.write, v259, [v260], JAM.policy.p18);
      tempSeq = "";
    }
    var v467 = sequence$$17.length;
    v262 = v467 > 0;
  }
  var v263 = outputWindow.document;
  var v264 = tempSeq + "\n";
  JAM.call(v263.write, v263, [v264], JAM.policy.p18);
  return true;
}
function dnaPattern() {
  var theDocument = document;
  var newDna = "";
  var maxInput$$3 = 5E5;
  var matches = new Array;
  var v468 = testScript();
  var v265 = v468 == false;
  if (v265) {
    return;
  }
  var v701 = theDocument.forms;
  var v685 = v701[0];
  var v669 = v685.elements;
  var v649 = v669[0];
  var v611 = checkFormElement(v649);
  var v553 = v611 == false;
  var v613 = !v553;
  if (v613) {
    var v714 = theDocument.forms;
    var v702 = v714[0];
    var v686 = v702.elements;
    var v670 = v686[0];
    var v650 = v670.value;
    var v612 = checkSequenceLength(v650, maxInput$$3);
    v553 = v612 == false;
  }
  var v469 = v553;
  var v555 = !v469;
  if (v555) {
    var v687 = theDocument.forms;
    var v671 = v687[0];
    var v651 = v671.elements;
    var v614 = v651[1];
    var v554 = checkFormElement(v614);
    v469 = v554 == false;
  }
  var v266 = v469;
  if (v266) {
    return;
  }
  var v688 = theDocument.forms;
  var v672 = v688[0];
  var v652 = v672.elements;
  var v615 = v652[1];
  var v556 = v615.value;
  var v470 = JAM.call(v556.replace, v556, [/\//g, ""], JAM.policy.p15);
  var v267 = "/" + v470;
  var re$$3 = v267 + "/gi";
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
    return;
  }
  openWindow();
  openPre();
  var v653 = theDocument.forms;
  var v616 = v653[0];
  var v557 = v616.elements;
  var v471 = v557[0];
  var v268 = v471.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v268);
  var i$$11 = 0;
  var v472 = arrayOfFasta$$1.length;
  var v274 = i$$11 < v472;
  for (;v274;) {
    var v269 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v269);
    var v270 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v270);
    newDna = removeNonDna(newDna);
    var v271 = outputWindow.document;
    var v272 = getInfoFromTitleAndSequence(newDna);
    JAM.call(v271.write, v271, [v272], JAM.policy.p18);
    writeDnaPattern(newDna, re$$3);
    var v273 = outputWindow.document;
    JAM.call(v273.write, v273, ["\n\n"], JAM.policy.p12);
    i$$11++;
    var v473 = arrayOfFasta$$1.length;
    v274 = i$$11 < v473;
  }
  closePre();
  closeWindow();
  return;
}
function writeDnaPattern(dnaSequence$$3, re$$4) {
  var matchArray$$2;
  var matchCount = 0;
  var length$$11 = dnaSequence$$3.length;
  var simplePattern = re$$4.toString();
  simplePattern = JAM.call(simplePattern.replace, simplePattern, [/\/gi$|\/ig$|^\//gi, ""], JAM.policy.p15);
  var v279 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [dnaSequence$$3], JAM.policy.p18);
  for (;v279;) {
    matchCount++;
    var match_end = re$$4.lastIndex;
    var v558 = RegExp.lastMatch;
    var v474 = v558.length;
    var v275 = match_end - v474;
    var match_start = v275 + 1;
    var v276 = outputWindow.document;
    var v726 = "&gt;match number " + matchCount;
    var v715 = v726 + ' to "';
    var v703 = v715 + simplePattern;
    var v689 = v703 + '" start=';
    var v673 = v689 + match_start;
    var v654 = v673 + " end=";
    var v617 = v654 + match_end;
    var v559 = v617 + " on the direct strand\n";
    var v618 = matchArray$$2[0];
    var v560 = addReturns(v618);
    var v475 = v559 + v560;
    var v277 = v475 + "\n\n";
    JAM.call(v276.write, v276, [v277], JAM.policy.p18);
    var v476 = re$$4.lastIndex;
    var v561 = RegExp.lastMatch;
    var v477 = v561.length;
    var v278 = v476 - v477;
    re$$4.lastIndex = v278 + 1;
    v279 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [dnaSequence$$3], JAM.policy.p18);
  }
  re$$4.lastIndex = 0;
  var v280 = complement(dnaSequence$$3);
  dnaSequence$$3 = reverse(v280);
  var v286 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [dnaSequence$$3], JAM.policy.p18);
  for (;v286;) {
    matchCount++;
    var v478 = re$$4.lastIndex;
    var v281 = length$$11 - v478;
    match_start = v281 + 1;
    var v562 = RegExp.lastMatch;
    var v479 = v562.length;
    var v282 = match_start + v479;
    match_end = v282 - 1;
    var v283 = outputWindow.document;
    var v727 = "&gt;match number " + matchCount;
    var v716 = v727 + ' to "';
    var v704 = v716 + simplePattern;
    var v690 = v704 + '" start=';
    var v674 = v690 + match_start;
    var v655 = v674 + " end=";
    var v619 = v655 + match_end;
    var v563 = v619 + " on the reverse strand\n";
    var v620 = matchArray$$2[0];
    var v564 = addReturns(v620);
    var v480 = v563 + v564;
    var v284 = v480 + "\n\n";
    JAM.call(v283.write, v283, [v284], JAM.policy.p18);
    var v481 = re$$4.lastIndex;
    var v565 = RegExp.lastMatch;
    var v482 = v565.length;
    var v285 = v481 - v482;
    re$$4.lastIndex = v285 + 1;
    v286 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [dnaSequence$$3], JAM.policy.p18);
  }
  var v483 = matchCount > 0;
  var v288 = !v483;
  if (v288) {
    var v287 = outputWindow.document;
    JAM.call(v287.write, v287, ["no matches found for this sequence.\n\n"], JAM.policy.p12);
  }
  return;
}
JAM.set(document, "onload", v2);
var v289 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p12);
JAM.set(v289, "onclick", v3);
var v290 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p12);
JAM.set(v290, "onclick", v4)

JAM.stopProfile('load');
