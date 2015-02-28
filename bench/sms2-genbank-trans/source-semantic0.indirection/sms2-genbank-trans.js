function v4() {
  var v556 = document.forms;
  var v480 = v556[0];
  var v291 = v480.elements;
  var v5 = v291[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    genbankTrans();
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v292 = document.main_form;
  var v7 = v292.main_submit;
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
  var v293 = arrayOfSequences.length;
  var v9 = v293 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v294 = arrayOfTitles.length;
  var v11 = i$$1 < v294;
  for (;v11;) {
    var v606 = arrayOfTitles[i$$1];
    var v557 = JAM.call(v606.search, v606, [/\S/], JAM.policy.p16);
    var v481 = v557 == -1;
    var v559 = !v481;
    if (v559) {
      var v607 = arrayOfSequences[i$$1];
      var v558 = JAM.call(v607.search, v607, [/\S/], JAM.policy.p16);
      v481 = v558 == -1;
    }
    var v295 = v481;
    var v483 = !v295;
    if (v483) {
      var v560 = arrayOfSequences[i$$1];
      var v482 = v560.length;
      v295 = v482 != lengthOfAlign;
    }
    var v10 = v295;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v296 = arrayOfTitles.length;
    v11 = i$$1 < v296;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v638 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p16);
  var v608 = v638 == -1;
  var v640 = !v608;
  if (v640) {
    var v639 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p16);
    v608 = v639 == -1;
  }
  var v561 = v608;
  var v610 = !v561;
  if (v610) {
    var v609 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p16);
    v561 = v609 == -1;
  }
  var v484 = v561;
  var v563 = !v484;
  if (v563) {
    var v562 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p16);
    v484 = v562 == -1;
  }
  var v297 = v484;
  var v486 = !v297;
  if (v486) {
    var v485 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p16);
    v297 = v485 == -1;
  }
  var v12 = v297;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v487 = formElement.value;
  var v298 = JAM.call(v487.search, v487, [/\S/], JAM.policy.p16);
  var v13 = v298 == -1;
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
  var v299 = arrayOfPatterns.length;
  var v16 = z$$2 < v299;
  for (;v16;) {
    var v488 = arrayOfPatterns[z$$2];
    var v300 = JAM.call(v488.search, v488, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p16);
    var v14 = v300 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v489 = arrayOfPatterns[z$$2];
    var v301 = moreExpressionCheck(v489);
    var v15 = v301 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v302 = arrayOfPatterns.length;
    v16 = z$$2 < v302;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v303 = arrayOfPatterns.length;
  var v22 = j < v303;
  for (;v22;) {
    var v490 = arrayOfPatterns[j];
    var v304 = JAM.call(v490.match, v490, [/\/.+\//], JAM.policy.p16);
    var v19 = v304 + "gi";
    if (JAM.isEval(eval)) {
      var v728 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v728 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v728;
    var v305 = arrayOfPatterns[j];
    var v20 = JAM.call(v305.match, v305, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v729 = v20.toString();
    geneticCodeMatchResult[j] = v729;
    var v21 = geneticCodeMatchResult[j];
    var v730 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v730;
    j++;
    var v306 = arrayOfPatterns.length;
    v22 = j < v306;
  }
  var i$$2 = 0;
  var v491 = testSequence.length;
  var v307 = v491 - 3;
  var v29 = i$$2 <= v307;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p15);
    j = 0;
    var v308 = geneticCodeMatchExp.length;
    var v27 = j < v308;
    for (;v27;) {
      var v492 = geneticCodeMatchExp[j];
      var v309 = JAM.call(codon.search, codon, [v492], JAM.policy.p17);
      var v26 = v309 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v310 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v310 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v311 = geneticCodeMatchExp.length;
      v27 = j < v311;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v493 = testSequence.length;
    var v312 = v493 - 3;
    v29 = i$$2 <= v312;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v313 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v313;
  for (;v31;) {
    var v494 = arrayOfPatterns$$1[z$$3];
    var v314 = JAM.call(v494.search, v494, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p16);
    var v30 = v314 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v315 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v315;
  }
  var i$$3 = 0;
  var v316 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v316;
  for (;v35;) {
    var v495 = arrayOfPatterns$$1[i$$3];
    var v317 = "[" + v495;
    var v32 = v317 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v318 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v318;
    for (;v34;) {
      var v496 = arrayOfPatterns$$1[j$$1];
      var v319 = JAM.call(v496.search, v496, [re], JAM.policy.p17);
      var v33 = v319 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v320 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v320;
    }
    i$$3++;
    var v321 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v321;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v322 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v322;
  for (;v38;) {
    var v497 = arrayOfPatterns$$2[z$$4];
    var v323 = JAM.call(v497.search, v497, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p16);
    var v36 = v323 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v498 = arrayOfPatterns$$2[z$$4];
    var v324 = moreExpressionCheck(v498);
    var v37 = v324 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v325 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v325;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v564 = getSequenceFromFasta(text$$7);
  var v499 = JAM.call(v564.replace, v564, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v326 = v499.length;
  var v40 = v326 > maxInput;
  if (v40) {
    var v327 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v327 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v328 = text$$8.length;
  var v42 = v328 > maxInput$$1;
  if (v42) {
    var v329 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v329 + " characters.";
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
  var v330 = alignArray.length;
  var v49 = v330 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v331 = alignArray.length;
  var v51 = i$$4 < v331;
  for (;v51;) {
    var v500 = alignArray[i$$4];
    var v332 = JAM.call(v500.search, v500, [/[^\s]+\s/], JAM.policy.p16);
    var v50 = v332 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v333 = alignArray.length;
    v51 = i$$4 < v333;
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
  var v334 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v54 = v334 != -1;
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
  var v335 = sequence$$2.length;
  var v55 = "&gt;results for " + v335;
  var stringToReturn = v55 + " residue sequence ";
  var v336 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p16);
  var v57 = v336 != -1;
  if (v57) {
    var v337 = stringToReturn + '"';
    var v56 = v337 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v338 = stringToReturn + ' starting "';
  var v339 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v338 + v339;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v340 = sequenceOne.length;
  var v59 = "Search results for " + v340;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v341 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p16);
  var v61 = v341 != -1;
  if (v61) {
    var v342 = stringToReturn$$1 + '"';
    var v60 = v342 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v343 = stringToReturn$$1 + ' starting "';
  var v344 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v343 + v344;
  stringToReturn$$1 = v62 + '"\n';
  var v345 = stringToReturn$$1 + "and ";
  var v346 = sequenceTwo.length;
  var v63 = v345 + v346;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v347 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p16);
  var v65 = v347 != -1;
  if (v65) {
    var v348 = stringToReturn$$1 + '"';
    var v64 = v348 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v349 = stringToReturn$$1 + ' starting "';
  var v350 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v66 = v349 + v350;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v351 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v351;
  for (;v70;) {
    var v501 = arrayOfPatterns$$3[j$$2];
    var v352 = JAM.call(v501.match, v501, [/\/.+\//], JAM.policy.p16);
    var v69 = v352 + "gi";
    if (JAM.isEval(eval)) {
      var v731 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v731 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v731;
    j$$2++;
    var v353 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v353;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v354 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v354;
  for (;v74;) {
    var v355 = arrayOfPatterns$$4[j$$3];
    var v72 = JAM.call(v355.match, v355, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v732 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v732;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v733 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v733;
    j$$3++;
    var v356 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v356;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v357 = sequence$$3.length;
  var v75 = "Results for " + v357;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v358 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p16);
  var v77 = v358 != -1;
  if (v77) {
    var v359 = stringToReturn$$2 + '"';
    var v76 = v359 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v360 = stringToReturn$$2 + ' starting "';
  var v361 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v78 = v360 + v361;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v502 = "Results for " + topology;
  var v362 = v502 + " ";
  var v363 = sequence$$4.length;
  var v80 = v362 + v363;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v364 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p16);
  var v82 = v364 != -1;
  if (v82) {
    var v365 = stringToReturn$$3 + '"';
    var v81 = v365 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v366 = stringToReturn$$3 + ' starting "';
  var v367 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v366 + v367;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v368 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v368;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v369 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p16);
  var v87 = v369 != -1;
  if (v87) {
    var v370 = stringToReturn$$4 + '"';
    var v86 = v370 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v371 = stringToReturn$$4 + ' starting "';
  var v372 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v371 + v372;
  stringToReturn$$4 = v88 + '"\n';
  var v373 = stringToReturn$$4 + "and ";
  var v374 = sequenceTwo$$1.length;
  var v89 = v373 + v374;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v375 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p16);
  var v91 = v375 != -1;
  if (v91) {
    var v376 = stringToReturn$$4 + '"';
    var v90 = v376 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v377 = stringToReturn$$4 + ' starting "';
  var v378 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v92 = v377 + v378;
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
    var v379 = Math.random();
    var v380 = components.length;
    var v94 = v379 * v380;
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p16);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p11);
}
function getSequenceFromFasta(sequenceRecord) {
  var v381 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v96 = v381 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v382 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v98 = v382 != -1;
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
  var v706 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p16);
  var v699 = v706 != -1;
  var v708 = !v699;
  if (v708) {
    var v707 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p16);
    v699 = v707 != -1;
  }
  var v690 = v699;
  var v701 = !v690;
  if (v701) {
    var v700 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p16);
    v690 = v700 != -1;
  }
  var v680 = v690;
  var v692 = !v680;
  if (v692) {
    var v691 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p16);
    v680 = v691 != -1;
  }
  var v667 = v680;
  var v682 = !v667;
  if (v682) {
    var v681 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p16);
    v667 = v681 != -1;
  }
  var v654 = v667;
  var v669 = !v654;
  if (v669) {
    var v668 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p16);
    v654 = v668 != -1;
  }
  var v641 = v654;
  var v656 = !v641;
  if (v656) {
    var v655 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p16);
    v641 = v655 != -1;
  }
  var v611 = v641;
  var v643 = !v611;
  if (v643) {
    var v642 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p16);
    v611 = v642 != -1;
  }
  var v565 = v611;
  var v613 = !v565;
  if (v613) {
    var v612 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p16);
    v565 = v612 != -1;
  }
  var v503 = v565;
  var v567 = !v503;
  if (v567) {
    var v566 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p16);
    v503 = v566 != -1;
  }
  var v383 = v503;
  var v505 = !v383;
  if (v505) {
    var v504 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p16);
    v383 = v504 != -1;
  }
  var v99 = v383;
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
  var title$$5 = "GenBank Trans Extractor";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v568 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v506 = v568 + "<head>\n";
  var v384 = v506 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v384 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p17);
  if (isColor) {
    var v106 = outputWindow.document;
    var v721 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v717 = v721 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v713 = v717 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v709 = v713 + "div.info {font-weight: bold}\n";
    var v702 = v709 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v693 = v702 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v683 = v693 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v670 = v683 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v657 = v670 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v644 = v657 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v614 = v644 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v569 = v614 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v507 = v569 + "td.many {color: #000000}\n";
    var v385 = v507 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v385 + "</style>\n";
    JAM.call(v106.write, v106, [v107], JAM.policy.p17);
  } else {
    var v108 = outputWindow.document;
    var v725 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v722 = v725 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v718 = v722 + "div.title {display: none}\n";
    var v714 = v718 + "div.info {font-weight: bold}\n";
    var v710 = v714 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v703 = v710 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v694 = v703 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v684 = v694 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v671 = v684 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v658 = v671 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v645 = v658 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v615 = v645 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v570 = v615 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v508 = v570 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v386 = v508 + "img {display: none}\n";
    var v109 = v386 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p17);
  }
  var v110 = outputWindow.document;
  var v571 = "</head>\n" + '<body class="main">\n';
  var v509 = v571 + '<div class="title">';
  var v387 = v509 + title$$6;
  var v111 = v387 + " results</div>\n";
  JAM.call(v110.write, v110, [v111], JAM.policy.p17);
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
  var v572 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v510 = v572 + "<head>\n";
  var v388 = v510 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v388 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p17);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v723 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v719 = v723 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v715 = v719 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v711 = v715 + "div.info {font-weight: bold}\n";
    var v704 = v711 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v695 = v704 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v685 = v695 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v672 = v685 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v659 = v672 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v646 = v659 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v616 = v646 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v573 = v616 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v511 = v573 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v389 = v511 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v389 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p17);
  } else {
    var v116 = outputWindow.document;
    var v727 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v726 = v727 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v724 = v726 + "div.title {display: none}\n";
    var v720 = v724 + "div.info {font-weight: bold}\n";
    var v716 = v720 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v712 = v716 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v705 = v712 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v696 = v705 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v686 = v696 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v673 = v686 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v660 = v673 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v647 = v660 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v617 = v647 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v574 = v617 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v512 = v574 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v390 = v512 + "img {display: none}\n";
    var v117 = v390 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p17);
  }
  var v118 = outputWindow.document;
  var v575 = "</head>\n" + '<body class="main">\n';
  var v513 = v575 + '<div class="title">';
  var v391 = v513 + title$$8;
  var v119 = v391 + " results</div>\n";
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
  var v392 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p16);
  var v120 = v392 != -1;
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
  var v393 = testArray[0];
  var v124 = v393 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v394 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v125 = v394 == -1;
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
  var v395 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9);
  var v128 = v395 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v396 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9);
  var v129 = v396 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v397 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p16);
  var v130 = v397 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v618 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p16);
  var v576 = v618 == -1;
  var v620 = !v576;
  if (v620) {
    var v619 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p16);
    v576 = v619 == -1;
  }
  var v514 = v576;
  var v578 = !v514;
  if (v578) {
    var v577 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p16);
    v514 = v577 == -1;
  }
  var v398 = v514;
  var v516 = !v398;
  if (v516) {
    var v515 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p16);
    v398 = v515 == -1;
  }
  var v131 = v398;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v399 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p16);
  var v132 = v399 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v400 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v400 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v401 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p16);
  var v135 = v401 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v402 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p16);
  var v136 = v402 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v621 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p16);
  var v579 = v621 == -1;
  var v623 = !v579;
  if (v623) {
    var v622 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p16);
    v579 = v622 == -1;
  }
  var v517 = v579;
  var v581 = !v517;
  if (v581) {
    var v580 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p16);
    v517 = v580 == -1;
  }
  var v403 = v517;
  var v519 = !v403;
  if (v519) {
    var v518 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p16);
    v403 = v518 == -1;
  }
  var v137 = v403;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v624 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p16);
  var v582 = v624 == -1;
  var v626 = !v582;
  if (v626) {
    var v625 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p16);
    v582 = v625 == -1;
  }
  var v520 = v582;
  var v584 = !v520;
  if (v584) {
    var v583 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p16);
    v520 = v583 == -1;
  }
  var v404 = v520;
  var v522 = !v404;
  if (v522) {
    var v521 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p16);
    v404 = v521 == -1;
  }
  var v138 = v404;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v405 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p16);
  var v139 = v405 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v627 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p16);
  var v585 = v627 == -1;
  var v629 = !v585;
  if (v629) {
    var v628 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p16);
    v585 = v628 == -1;
  }
  var v523 = v585;
  var v587 = !v523;
  if (v587) {
    var v586 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p16);
    v523 = v586 == -1;
  }
  var v406 = v523;
  var v525 = !v406;
  if (v525) {
    var v524 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p16);
    v406 = v524 == -1;
  }
  var v140 = v406;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v407 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p16);
  var v141 = v407 == -1;
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
    var v408 = basePerLine / groupSize;
    var v145 = j$$6 <= v408;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v409 = k + i$$5;
        var v143 = JAM.call(text$$10.charAt, text$$10, [v409], JAM.policy.p17);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v410 = basePerLine / groupSize;
      v145 = j$$6 <= v410;
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
    var v411 = adjustment < 0;
    if (v411) {
      v411 = adjusted >= 0;
    }
    var v149 = v411;
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
    var v412 = basePerLine$$2 / groupSize$$2;
    var v156 = j$$7 <= v412;
    for (;v156;) {
      var v152 = k$$1 < groupSize$$2;
      for (;v152;) {
        var v413 = i$$6 + k$$1;
        var v150 = v413 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v414 = k$$1 + i$$6;
        var v151 = JAM.call(text$$12.charAt, text$$12, [v414], JAM.policy.p17);
        lineOfText$$1 = lineOfText$$1 + v151;
        k$$1 = k$$1 + 1;
        v152 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v154 = numberPosition$$1 == "above";
      if (v154) {
        var v415 = adjustNumbering(i$$6, numberingAdjustment);
        var v153 = rightNum(v415, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v153;
      }
      var v155 = i$$6 >= stopBase$$2;
      if (v155) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v416 = basePerLine$$2 / groupSize$$2;
      v156 = j$$7 <= v416;
    }
    var v179 = numberPosition$$1 == "left";
    if (v179) {
      var v157 = outputWindow.document;
      var v588 = adjustNumbering(lineNum, numberingAdjustment);
      var v526 = rightNum(v588, "", 8, tabIn$$3);
      var v417 = v526 + lineOfText$$1;
      var v158 = v417 + "\n";
      JAM.call(v157.write, v157, [v158], JAM.policy.p17);
      var v162 = strands$$1 == "two";
      if (v162) {
        var v159 = outputWindow.document;
        var v589 = adjustNumbering(lineNum, numberingAdjustment);
        var v527 = rightNum(v589, "", 8, tabIn$$3);
        var v528 = complement(lineOfText$$1);
        var v418 = v527 + v528;
        var v160 = v418 + "\n";
        JAM.call(v159.write, v159, [v160], JAM.policy.p17);
        var v161 = outputWindow.document;
        JAM.call(v161.write, v161, ["\n"], JAM.policy.p11);
      }
    } else {
      var v178 = numberPosition$$1 == "right";
      if (v178) {
        var v163 = outputWindow.document;
        var v529 = adjustNumbering(i$$6, numberingAdjustment);
        var v419 = lineOfText$$1 + v529;
        var v164 = v419 + "\n";
        JAM.call(v163.write, v163, [v164], JAM.policy.p17);
        var v168 = strands$$1 == "two";
        if (v168) {
          var v165 = outputWindow.document;
          var v530 = complement(lineOfText$$1);
          var v531 = adjustNumbering(i$$6, numberingAdjustment);
          var v420 = v530 + v531;
          var v166 = v420 + "\n";
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
            var v421 = complement(lineOfText$$1);
            var v174 = v421 + "\n";
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
    var v422 = basePerLine$$3 / groupSize$$3;
    var v187 = j$$8 <= v422;
    for (;v187;) {
      var v183 = k$$2 < groupSize$$3;
      for (;v183;) {
        var v423 = i$$7 + k$$2;
        var v181 = v423 >= stopBase$$3;
        if (v181) {
          break;
        }
        var v424 = k$$2 + i$$7;
        var v182 = JAM.call(text$$13.charAt, text$$13, [v424], JAM.policy.p17);
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
      var v425 = basePerLine$$3 / groupSize$$3;
      v187 = j$$8 <= v425;
    }
    var v198 = numberPosition$$2 == "left";
    if (v198) {
      var v188 = outputWindow.document;
      var v532 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v426 = v532 + lineOfText$$2;
      var v189 = v426 + "\n";
      JAM.call(v188.write, v188, [v189], JAM.policy.p17);
    } else {
      var v197 = numberPosition$$2 == "right";
      if (v197) {
        var v190 = outputWindow.document;
        var v427 = lineOfText$$2 + i$$7;
        var v191 = v427 + "\n";
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
  var v590 = sequence$$13.length;
  var v533 = v590 <= firstIndexToMutate;
  var v591 = !v533;
  if (v591) {
    v533 = lastIndexToMutate < 0;
  }
  var v428 = v533;
  var v534 = !v428;
  if (v534) {
    v428 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v200 = v428;
  if (v200) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v208 = i$$8 < numMut;
  for (;v208;) {
    maxNum = sequence$$13.length;
    var v429 = Math.random();
    var v201 = v429 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v201], JAM.policy.p16);
    var v430 = randNum < firstIndexToMutate;
    var v535 = !v430;
    if (v535) {
      v430 = randNum > lastIndexToMutate;
    }
    var v202 = v430;
    if (v202) {
      numMut++;
      i$$8++;
      v208 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p16);
    needNewChar = true;
    for (;needNewChar;) {
      var v431 = Math.random();
      var v432 = components$$1.length;
      var v203 = v431 * v432;
      componentsIndex = JAM.call(Math.round, Math, [v203], JAM.policy.p16);
      var v433 = components$$1.length;
      var v204 = componentsIndex == v433;
      if (v204) {
        componentsIndex = 0;
      }
      var v434 = components$$1[componentsIndex];
      var v205 = v434 != currentChar;
      if (v205) {
        needNewChar = false;
      }
    }
    var v435 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v436 = components$$1[componentsIndex];
    var v206 = v435 + v436;
    var v437 = randNum + 1;
    var v438 = sequence$$13.length;
    var v207 = JAM.call(sequence$$13.substring, sequence$$13, [v437, v438], JAM.policy.p27);
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
    var v439 = Math.random();
    var v440 = components$$2.length;
    var v211 = v439 * v440;
    tempNum$$1 = JAM.call(Math.floor, Math, [v211], JAM.policy.p16);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v441 = sequence$$14.length;
    var v214 = v441 == 60;
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
    var v592 = sequence$$15.length;
    var v536 = v592 - lookAhead;
    var v537 = sequence$$15.length;
    var v442 = JAM.call(sequence$$15.substring, sequence$$15, [v536, v537], JAM.policy.p27);
    var v219 = v442 + sequence$$15;
    var v220 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v219 + v220;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v222 = outputWindow.document;
  JAM.call(v222.write, v222, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v223 = outputWindow.document;
  var v593 = '<tr><td class="title" width="200px">' + "Site:";
  var v538 = v593 + '</td><td class="title">';
  var v443 = v538 + "Positions:";
  var v224 = v443 + "</td></tr>\n";
  JAM.call(v223.write, v223, [v224], JAM.policy.p17);
  var i$$9 = 0;
  var v444 = arrayOfItems.length;
  var v240 = i$$9 < v444;
  for (;v240;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v445 = arrayOfItems[i$$9];
    var v225 = JAM.call(v445.match, v445, [/\/.+\//], JAM.policy.p16);
    matchExp = v225 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v594 = arrayOfItems[i$$9];
    var v539 = JAM.call(v594.match, v594, [/\)\D*\d+/], JAM.policy.p16);
    var v446 = v539.toString();
    var v226 = JAM.call(v446.replace, v446, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v226);
    var v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v232;) {
      var v227 = matchExp.lastIndex;
      matchPosition = v227 - cutDistance;
      var v447 = matchPosition >= lowerLimit;
      if (v447) {
        v447 = matchPosition < upperLimit;
      }
      var v230 = v447;
      if (v230) {
        timesFound++;
        var v228 = tempString$$1 + ", ";
        var v448 = matchPosition - shiftValue;
        var v229 = v448 + 1;
        tempString$$1 = v228 + v229;
      }
      var v449 = matchExp.lastIndex;
      var v540 = RegExp.lastMatch;
      var v450 = v540.length;
      var v231 = v449 - v450;
      matchExp.lastIndex = v231 + 1;
      v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v451 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p16);
    var v233 = v451 != -1;
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
    var v674 = '<tr><td class="' + backGroundClass;
    var v661 = v674 + '">';
    var v697 = arrayOfItems[i$$9];
    var v687 = JAM.call(v697.match, v697, [/\([^\(]+\)/], JAM.policy.p16);
    var v675 = v687.toString();
    var v662 = JAM.call(v675.replace, v675, [/\(|\)/g, ""], JAM.policy.p15);
    var v648 = v661 + v662;
    var v630 = v648 + '</td><td class="';
    var v595 = v630 + backGroundClass;
    var v541 = v595 + '">';
    var v452 = v541 + tempString$$1;
    var v239 = v452 + "</td></tr>\n";
    JAM.call(v238.write, v238, [v239], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v453 = arrayOfItems.length;
    v240 = i$$9 < v453;
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
  var v649 = '<tr><td class="title">' + "Pattern:";
  var v631 = v649 + '</td><td class="title">';
  var v596 = v631 + "Times found:";
  var v542 = v596 + '</td><td class="title">';
  var v454 = v542 + "Percentage:";
  var v244 = v454 + "</td></tr>\n";
  JAM.call(v243.write, v243, [v244], JAM.policy.p17);
  var i$$10 = 0;
  var v455 = arrayOfItems$$1.length;
  var v253 = i$$10 < v455;
  for (;v253;) {
    var tempNumber = 0;
    var v456 = arrayOfItems$$1[i$$10];
    var v245 = JAM.call(v456.match, v456, [/\/[^\/]+\//], JAM.policy.p16);
    var matchExp$$1 = v245 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v457 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v247 = v457 != -1;
    if (v247) {
      var v246 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v246.length;
    }
    var percentage = 0;
    var v543 = originalLength + 1;
    var v632 = arrayOfItems$$1[i$$10];
    var v597 = JAM.call(v632.match, v632, [/\d+/], JAM.policy.p16);
    var v544 = parseFloat(v597);
    var v458 = v543 - v544;
    var v250 = v458 > 0;
    if (v250) {
      var v248 = 100 * tempNumber;
      var v459 = originalLength + 1;
      var v598 = arrayOfItems$$1[i$$10];
      var v545 = JAM.call(v598.match, v598, [/\d+/], JAM.policy.p16);
      var v460 = parseFloat(v545);
      var v249 = v459 - v460;
      percentage = v248 / v249;
    }
    var v251 = outputWindow.document;
    var v698 = arrayOfItems$$1[i$$10];
    var v688 = JAM.call(v698.match, v698, [/\([^\(]+\)\b/], JAM.policy.p16);
    var v676 = v688.toString();
    var v663 = JAM.call(v676.replace, v676, [/\(|\)/g, ""], JAM.policy.p15);
    var v650 = "<tr><td>" + v663;
    var v633 = v650 + "</td><td>";
    var v599 = v633 + tempNumber;
    var v546 = v599 + "</td><td>";
    var v547 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9);
    var v461 = v546 + v547;
    var v252 = v461 + "</td></tr>\n";
    JAM.call(v251.write, v251, [v252], JAM.policy.p17);
    i$$10++;
    var v462 = arrayOfItems$$1.length;
    v253 = i$$10 < v462;
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
  var v463 = sequence$$17.length;
  var v261 = v463 > 0;
  for (;v261;) {
    maxNum$$1 = sequence$$17.length;
    var v464 = Math.random();
    var v255 = v464 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v255], JAM.policy.p16);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p16);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v256 = randNum$$1 + 1;
    var v257 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v256, v257], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v465 = tempSeq.length;
    var v260 = v465 == 60;
    if (v260) {
      var v258 = outputWindow.document;
      var v259 = tempSeq + "\n";
      JAM.call(v258.write, v258, [v259], JAM.policy.p17);
      tempSeq = "";
    }
    var v466 = sequence$$17.length;
    v261 = v466 > 0;
  }
  var v262 = outputWindow.document;
  var v263 = tempSeq + "\n";
  JAM.call(v262.write, v262, [v263], JAM.policy.p17);
  return true;
}
function genbankTrans() {
  var theDocument = document;
  var maxInput$$3 = 2E5;
  var v467 = testScript();
  var v264 = v467 == false;
  if (v264) {
    return;
  }
  var v677 = theDocument.forms;
  var v664 = v677[0];
  var v651 = v664.elements;
  var v634 = v651[0];
  var v600 = checkFormElement(v634);
  var v548 = v600 == false;
  var v602 = !v548;
  if (v602) {
    var v689 = theDocument.forms;
    var v678 = v689[0];
    var v665 = v678.elements;
    var v652 = v665[0];
    var v635 = v652.value;
    var v601 = verifyGenBankFeat(v635);
    v548 = v601 == false;
  }
  var v468 = v548;
  var v550 = !v468;
  if (v550) {
    var v679 = theDocument.forms;
    var v666 = v679[0];
    var v653 = v666.elements;
    var v636 = v653[0];
    var v603 = v636.value;
    var v549 = checkTextLength(v603, maxInput$$3);
    v468 = v549 == false;
  }
  var v265 = v468;
  if (v265) {
    return;
  }
  openWindow();
  openPre();
  var v637 = theDocument.forms;
  var v604 = v637[0];
  var v551 = v604.elements;
  var v469 = v551[0];
  var v266 = v469.value;
  genBankTransExtract(v266);
  closePre();
  closeWindow();
  return;
}
function genBankTransExtract(genBankFile$$2) {
  var v267 = "_" + genBankFile$$2;
  genBankFile$$2 = v267 + "_";
  var recordArray = JAM.call(genBankFile$$2.split, genBankFile$$2, [/LOCUS\s\s\s[^\f\n\r]*/m], JAM.policy.p16);
  var i$$11 = 1;
  var v470 = recordArray.length;
  var v275 = i$$11 < v470;
  for (;v275;) {
    var v268 = recordArray[i$$11];
    var mainArray = JAM.call(v268.split, v268, [/DEFINITION|ACCESSION|FEATURES|ORIGIN[^\f\n\r]*/], JAM.policy.p16);
    var v552 = mainArray[1];
    var v471 = JAM.call(v552.replace, v552, [/[\f\n\r\t]+$/g, ""], JAM.policy.p15);
    var v269 = filterFastaTitle(v471);
    var title$$9 = v269 + "\n";
    var v270 = mainArray[4];
    var dnaSequenceArray = JAM.call(v270.split, v270, [/\/{2}/], JAM.policy.p16);
    var v271 = outputWindow.document;
    var v272 = title$$9 + "\n";
    JAM.call(v271.write, v271, [v272], JAM.policy.p17);
    var v472 = dnaSequenceArray.length;
    var v273 = v472 == 1;
    if (v273) {
      alert("The entire GenBank file may not have been processed.");
      outputWindow.focus();
    }
    var v274 = mainArray[3];
    var featureArray = JAM.call(v274.split, v274, [/[\f\n\r] {5,12}\b/], JAM.policy.p16);
    showFeatureTrans(featureArray);
    i$$11++;
    var v473 = recordArray.length;
    v275 = i$$11 < v473;
  }
  return;
}
function showFeatureTrans(arrayOfFeatures) {
  var featureTitle = "";
  var theTitle = "";
  var removedTitle = "";
  var firstQualifier = "";
  var translation = "";
  var translationFound = false;
  var i$$12 = 1;
  var v474 = arrayOfFeatures.length;
  var v286 = i$$12 < v474;
  for (;v286;) {
    var v553 = arrayOfFeatures[i$$12];
    var v475 = JAM.call(v553.search, v553, [/\/translation/], JAM.policy.p16);
    var v285 = v475 != -1;
    if (v285) {
      var v276 = arrayOfFeatures[i$$12];
      var v734 = JAM.call(v276.replace, v276, [/[\[\]\*]/g, ""], JAM.policy.p15);
      arrayOfFeatures[i$$12] = v734;
      var v476 = arrayOfFeatures[i$$12];
      var v277 = JAM.call(v476.match, v476, [/[^ \f\n\r\t\v]+ /], JAM.policy.p16);
      featureTitle = v277.toString();
      theTitle = new RegExp(featureTitle);
      var v278 = arrayOfFeatures[i$$12];
      removedTitle = JAM.call(v278.replace, v278, [theTitle, ""], JAM.policy.p19);
      var v477 = arrayOfFeatures[i$$12];
      var v279 = JAM.call(v477.match, v477, [/\/[^\f\n\r]+/], JAM.policy.p16);
      firstQualifier = v279.toString();
      var v280 = outputWindow.document;
      var v605 = filterFastaTitle(featureTitle);
      var v554 = "&gt;" + v605;
      var v555 = filterFastaTitle(firstQualifier);
      var v478 = v554 + v555;
      var v281 = v478 + "\n";
      JAM.call(v280.write, v280, [v281], JAM.policy.p17);
      var v282 = arrayOfFeatures[i$$12];
      translation = JAM.call(v282.match, v282, [/\/translation="[^"]+"/], JAM.policy.p16);
      translation = translation.toString();
      translation = JAM.call(translation.replace, translation, [/\/translation/, ""], JAM.policy.p15);
      translation = removeNonProtein(translation);
      translation = addReturns(translation);
      var v283 = outputWindow.document;
      JAM.call(v283.write, v283, [translation], JAM.policy.p17);
      translationFound = true;
      var v284 = outputWindow.document;
      JAM.call(v284.write, v284, ["\n\n"], JAM.policy.p11);
    }
    i$$12++;
    var v479 = arrayOfFeatures.length;
    v286 = i$$12 < v479;
  }
  var v288 = translationFound == false;
  if (v288) {
    var v287 = outputWindow.document;
    JAM.call(v287.write, v287, ["No translations were found.\n"], JAM.policy.p11);
  }
  return;
}
JAM.set(document, "onload", v2);
var v289 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11);
JAM.set(v289, "onclick", v3);
var v290 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11);
JAM.set(v290, "onclick", v4)
