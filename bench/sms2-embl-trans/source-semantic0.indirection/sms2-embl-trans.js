function v4() {
  var v560 = document.forms;
  var v483 = v560[0];
  var v292 = v483.elements;
  var v5 = v292[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    emblTrans();
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v293 = document.main_form;
  var v7 = v293.main_submit;
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
  var v294 = arrayOfSequences.length;
  var v9 = v294 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v295 = arrayOfTitles.length;
  var v11 = i$$1 < v295;
  for (;v11;) {
    var v610 = arrayOfTitles[i$$1];
    var v561 = JAM.call(v610.search, v610, [/\S/], JAM.policy.p16);
    var v484 = v561 == -1;
    var v563 = !v484;
    if (v563) {
      var v611 = arrayOfSequences[i$$1];
      var v562 = JAM.call(v611.search, v611, [/\S/], JAM.policy.p16);
      v484 = v562 == -1;
    }
    var v296 = v484;
    var v486 = !v296;
    if (v486) {
      var v564 = arrayOfSequences[i$$1];
      var v485 = v564.length;
      v296 = v485 != lengthOfAlign;
    }
    var v10 = v296;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v297 = arrayOfTitles.length;
    v11 = i$$1 < v297;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v642 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p16);
  var v612 = v642 == -1;
  var v644 = !v612;
  if (v644) {
    var v643 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p16);
    v612 = v643 == -1;
  }
  var v565 = v612;
  var v614 = !v565;
  if (v614) {
    var v613 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p16);
    v565 = v613 == -1;
  }
  var v487 = v565;
  var v567 = !v487;
  if (v567) {
    var v566 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p16);
    v487 = v566 == -1;
  }
  var v298 = v487;
  var v489 = !v298;
  if (v489) {
    var v488 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p16);
    v298 = v488 == -1;
  }
  var v12 = v298;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v490 = formElement.value;
  var v299 = JAM.call(v490.search, v490, [/\S/], JAM.policy.p16);
  var v13 = v299 == -1;
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
  var v300 = arrayOfPatterns.length;
  var v16 = z$$2 < v300;
  for (;v16;) {
    var v491 = arrayOfPatterns[z$$2];
    var v301 = JAM.call(v491.search, v491, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p16);
    var v14 = v301 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v492 = arrayOfPatterns[z$$2];
    var v302 = moreExpressionCheck(v492);
    var v15 = v302 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v303 = arrayOfPatterns.length;
    v16 = z$$2 < v303;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v304 = arrayOfPatterns.length;
  var v22 = j < v304;
  for (;v22;) {
    var v493 = arrayOfPatterns[j];
    var v305 = JAM.call(v493.match, v493, [/\/.+\//], JAM.policy.p16);
    var v19 = v305 + "gi";
    if (JAM.isEval(eval)) {
      var v732 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v732 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v732;
    var v306 = arrayOfPatterns[j];
    var v20 = JAM.call(v306.match, v306, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v733 = v20.toString();
    geneticCodeMatchResult[j] = v733;
    var v21 = geneticCodeMatchResult[j];
    var v734 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v734;
    j++;
    var v307 = arrayOfPatterns.length;
    v22 = j < v307;
  }
  var i$$2 = 0;
  var v494 = testSequence.length;
  var v308 = v494 - 3;
  var v29 = i$$2 <= v308;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p15);
    j = 0;
    var v309 = geneticCodeMatchExp.length;
    var v27 = j < v309;
    for (;v27;) {
      var v495 = geneticCodeMatchExp[j];
      var v310 = JAM.call(codon.search, codon, [v495], JAM.policy.p17);
      var v26 = v310 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v311 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v311 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v312 = geneticCodeMatchExp.length;
      v27 = j < v312;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v496 = testSequence.length;
    var v313 = v496 - 3;
    v29 = i$$2 <= v313;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v314 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v314;
  for (;v31;) {
    var v497 = arrayOfPatterns$$1[z$$3];
    var v315 = JAM.call(v497.search, v497, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p16);
    var v30 = v315 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v316 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v316;
  }
  var i$$3 = 0;
  var v317 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v317;
  for (;v35;) {
    var v498 = arrayOfPatterns$$1[i$$3];
    var v318 = "[" + v498;
    var v32 = v318 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v319 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v319;
    for (;v34;) {
      var v499 = arrayOfPatterns$$1[j$$1];
      var v320 = JAM.call(v499.search, v499, [re], JAM.policy.p17);
      var v33 = v320 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v321 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v321;
    }
    i$$3++;
    var v322 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v322;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v323 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v323;
  for (;v38;) {
    var v500 = arrayOfPatterns$$2[z$$4];
    var v324 = JAM.call(v500.search, v500, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p16);
    var v36 = v324 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v501 = arrayOfPatterns$$2[z$$4];
    var v325 = moreExpressionCheck(v501);
    var v37 = v325 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v326 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v326;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v568 = getSequenceFromFasta(text$$7);
  var v502 = JAM.call(v568.replace, v568, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v327 = v502.length;
  var v40 = v327 > maxInput;
  if (v40) {
    var v328 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v328 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v329 = text$$8.length;
  var v42 = v329 > maxInput$$1;
  if (v42) {
    var v330 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v330 + " characters.";
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
  var v331 = alignArray.length;
  var v49 = v331 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v332 = alignArray.length;
  var v51 = i$$4 < v332;
  for (;v51;) {
    var v503 = alignArray[i$$4];
    var v333 = JAM.call(v503.search, v503, [/[^\s]+\s/], JAM.policy.p16);
    var v50 = v333 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v334 = alignArray.length;
    v51 = i$$4 < v334;
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
  var v335 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v54 = v335 != -1;
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
  var v336 = sequence$$2.length;
  var v55 = "&gt;results for " + v336;
  var stringToReturn = v55 + " residue sequence ";
  var v337 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p16);
  var v57 = v337 != -1;
  if (v57) {
    var v338 = stringToReturn + '"';
    var v56 = v338 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v339 = stringToReturn + ' starting "';
  var v340 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v339 + v340;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v341 = sequenceOne.length;
  var v59 = "Search results for " + v341;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v342 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p16);
  var v61 = v342 != -1;
  if (v61) {
    var v343 = stringToReturn$$1 + '"';
    var v60 = v343 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v344 = stringToReturn$$1 + ' starting "';
  var v345 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v344 + v345;
  stringToReturn$$1 = v62 + '"\n';
  var v346 = stringToReturn$$1 + "and ";
  var v347 = sequenceTwo.length;
  var v63 = v346 + v347;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v348 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p16);
  var v65 = v348 != -1;
  if (v65) {
    var v349 = stringToReturn$$1 + '"';
    var v64 = v349 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v350 = stringToReturn$$1 + ' starting "';
  var v351 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v66 = v350 + v351;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v352 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v352;
  for (;v70;) {
    var v504 = arrayOfPatterns$$3[j$$2];
    var v353 = JAM.call(v504.match, v504, [/\/.+\//], JAM.policy.p16);
    var v69 = v353 + "gi";
    if (JAM.isEval(eval)) {
      var v735 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v735 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v735;
    j$$2++;
    var v354 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v354;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v355 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v355;
  for (;v74;) {
    var v356 = arrayOfPatterns$$4[j$$3];
    var v72 = JAM.call(v356.match, v356, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v736 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v736;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v737 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v737;
    j$$3++;
    var v357 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v357;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v358 = sequence$$3.length;
  var v75 = "Results for " + v358;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v359 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p16);
  var v77 = v359 != -1;
  if (v77) {
    var v360 = stringToReturn$$2 + '"';
    var v76 = v360 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v361 = stringToReturn$$2 + ' starting "';
  var v362 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v78 = v361 + v362;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v505 = "Results for " + topology;
  var v363 = v505 + " ";
  var v364 = sequence$$4.length;
  var v80 = v363 + v364;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v365 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p16);
  var v82 = v365 != -1;
  if (v82) {
    var v366 = stringToReturn$$3 + '"';
    var v81 = v366 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v367 = stringToReturn$$3 + ' starting "';
  var v368 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v367 + v368;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v369 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v369;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v370 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p16);
  var v87 = v370 != -1;
  if (v87) {
    var v371 = stringToReturn$$4 + '"';
    var v86 = v371 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v372 = stringToReturn$$4 + ' starting "';
  var v373 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v372 + v373;
  stringToReturn$$4 = v88 + '"\n';
  var v374 = stringToReturn$$4 + "and ";
  var v375 = sequenceTwo$$1.length;
  var v89 = v374 + v375;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v376 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p16);
  var v91 = v376 != -1;
  if (v91) {
    var v377 = stringToReturn$$4 + '"';
    var v90 = v377 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v378 = stringToReturn$$4 + ' starting "';
  var v379 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v92 = v378 + v379;
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
    var v380 = Math.random();
    var v381 = components.length;
    var v94 = v380 * v381;
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p16);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p11);
}
function getSequenceFromFasta(sequenceRecord) {
  var v382 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v96 = v382 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v383 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v98 = v383 != -1;
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
  var v710 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p16);
  var v703 = v710 != -1;
  var v712 = !v703;
  if (v712) {
    var v711 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p16);
    v703 = v711 != -1;
  }
  var v694 = v703;
  var v705 = !v694;
  if (v705) {
    var v704 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p16);
    v694 = v704 != -1;
  }
  var v684 = v694;
  var v696 = !v684;
  if (v696) {
    var v695 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p16);
    v684 = v695 != -1;
  }
  var v671 = v684;
  var v686 = !v671;
  if (v686) {
    var v685 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p16);
    v671 = v685 != -1;
  }
  var v658 = v671;
  var v673 = !v658;
  if (v673) {
    var v672 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p16);
    v658 = v672 != -1;
  }
  var v645 = v658;
  var v660 = !v645;
  if (v660) {
    var v659 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p16);
    v645 = v659 != -1;
  }
  var v615 = v645;
  var v647 = !v615;
  if (v647) {
    var v646 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p16);
    v615 = v646 != -1;
  }
  var v569 = v615;
  var v617 = !v569;
  if (v617) {
    var v616 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p16);
    v569 = v616 != -1;
  }
  var v506 = v569;
  var v571 = !v506;
  if (v571) {
    var v570 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p16);
    v506 = v570 != -1;
  }
  var v384 = v506;
  var v508 = !v384;
  if (v508) {
    var v507 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p16);
    v384 = v507 != -1;
  }
  var v99 = v384;
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
  var title$$5 = "EMBL Trans Extractor";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v572 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v509 = v572 + "<head>\n";
  var v385 = v509 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v385 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p17);
  if (isColor) {
    var v106 = outputWindow.document;
    var v725 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v721 = v725 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v717 = v721 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v713 = v717 + "div.info {font-weight: bold}\n";
    var v706 = v713 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v697 = v706 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v687 = v697 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v674 = v687 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v661 = v674 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v648 = v661 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v618 = v648 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v573 = v618 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v510 = v573 + "td.many {color: #000000}\n";
    var v386 = v510 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v386 + "</style>\n";
    JAM.call(v106.write, v106, [v107], JAM.policy.p17);
  } else {
    var v108 = outputWindow.document;
    var v729 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v726 = v729 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v722 = v726 + "div.title {display: none}\n";
    var v718 = v722 + "div.info {font-weight: bold}\n";
    var v714 = v718 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v707 = v714 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v698 = v707 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v688 = v698 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v675 = v688 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v662 = v675 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v649 = v662 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v619 = v649 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v574 = v619 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v511 = v574 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v387 = v511 + "img {display: none}\n";
    var v109 = v387 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p17);
  }
  var v110 = outputWindow.document;
  var v575 = "</head>\n" + '<body class="main">\n';
  var v512 = v575 + '<div class="title">';
  var v388 = v512 + title$$6;
  var v111 = v388 + " results</div>\n";
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
  var v576 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v513 = v576 + "<head>\n";
  var v389 = v513 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v389 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p17);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v727 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v723 = v727 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v719 = v723 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v715 = v719 + "div.info {font-weight: bold}\n";
    var v708 = v715 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v699 = v708 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v689 = v699 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v676 = v689 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v663 = v676 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v650 = v663 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v620 = v650 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v577 = v620 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v514 = v577 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v390 = v514 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v390 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p17);
  } else {
    var v116 = outputWindow.document;
    var v731 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v730 = v731 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v728 = v730 + "div.title {display: none}\n";
    var v724 = v728 + "div.info {font-weight: bold}\n";
    var v720 = v724 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v716 = v720 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v709 = v716 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v700 = v709 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v690 = v700 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v677 = v690 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v664 = v677 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v651 = v664 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v621 = v651 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v578 = v621 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v515 = v578 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v391 = v515 + "img {display: none}\n";
    var v117 = v391 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p17);
  }
  var v118 = outputWindow.document;
  var v579 = "</head>\n" + '<body class="main">\n';
  var v516 = v579 + '<div class="title">';
  var v392 = v516 + title$$8;
  var v119 = v392 + " results</div>\n";
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
  var v393 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p16);
  var v120 = v393 != -1;
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
  var v394 = testArray[0];
  var v124 = v394 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v395 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v125 = v395 == -1;
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
  var v396 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9);
  var v128 = v396 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v397 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9);
  var v129 = v397 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v398 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p16);
  var v130 = v398 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v622 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p16);
  var v580 = v622 == -1;
  var v624 = !v580;
  if (v624) {
    var v623 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p16);
    v580 = v623 == -1;
  }
  var v517 = v580;
  var v582 = !v517;
  if (v582) {
    var v581 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p16);
    v517 = v581 == -1;
  }
  var v399 = v517;
  var v519 = !v399;
  if (v519) {
    var v518 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p16);
    v399 = v518 == -1;
  }
  var v131 = v399;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v400 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p16);
  var v132 = v400 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v401 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v401 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v402 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p16);
  var v135 = v402 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v403 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p16);
  var v136 = v403 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v625 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p16);
  var v583 = v625 == -1;
  var v627 = !v583;
  if (v627) {
    var v626 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p16);
    v583 = v626 == -1;
  }
  var v520 = v583;
  var v585 = !v520;
  if (v585) {
    var v584 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p16);
    v520 = v584 == -1;
  }
  var v404 = v520;
  var v522 = !v404;
  if (v522) {
    var v521 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p16);
    v404 = v521 == -1;
  }
  var v137 = v404;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v628 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p16);
  var v586 = v628 == -1;
  var v630 = !v586;
  if (v630) {
    var v629 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p16);
    v586 = v629 == -1;
  }
  var v523 = v586;
  var v588 = !v523;
  if (v588) {
    var v587 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p16);
    v523 = v587 == -1;
  }
  var v405 = v523;
  var v525 = !v405;
  if (v525) {
    var v524 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p16);
    v405 = v524 == -1;
  }
  var v138 = v405;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v406 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p16);
  var v139 = v406 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v631 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p16);
  var v589 = v631 == -1;
  var v633 = !v589;
  if (v633) {
    var v632 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p16);
    v589 = v632 == -1;
  }
  var v526 = v589;
  var v591 = !v526;
  if (v591) {
    var v590 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p16);
    v526 = v590 == -1;
  }
  var v407 = v526;
  var v528 = !v407;
  if (v528) {
    var v527 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p16);
    v407 = v527 == -1;
  }
  var v140 = v407;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v408 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p16);
  var v141 = v408 == -1;
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
    var v409 = basePerLine / groupSize;
    var v145 = j$$6 <= v409;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v410 = k + i$$5;
        var v143 = JAM.call(text$$10.charAt, text$$10, [v410], JAM.policy.p17);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v411 = basePerLine / groupSize;
      v145 = j$$6 <= v411;
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
    var v412 = adjustment < 0;
    if (v412) {
      v412 = adjusted >= 0;
    }
    var v149 = v412;
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
    var v413 = basePerLine$$2 / groupSize$$2;
    var v156 = j$$7 <= v413;
    for (;v156;) {
      var v152 = k$$1 < groupSize$$2;
      for (;v152;) {
        var v414 = i$$6 + k$$1;
        var v150 = v414 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v415 = k$$1 + i$$6;
        var v151 = JAM.call(text$$12.charAt, text$$12, [v415], JAM.policy.p17);
        lineOfText$$1 = lineOfText$$1 + v151;
        k$$1 = k$$1 + 1;
        v152 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v154 = numberPosition$$1 == "above";
      if (v154) {
        var v416 = adjustNumbering(i$$6, numberingAdjustment);
        var v153 = rightNum(v416, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v153;
      }
      var v155 = i$$6 >= stopBase$$2;
      if (v155) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v417 = basePerLine$$2 / groupSize$$2;
      v156 = j$$7 <= v417;
    }
    var v179 = numberPosition$$1 == "left";
    if (v179) {
      var v157 = outputWindow.document;
      var v592 = adjustNumbering(lineNum, numberingAdjustment);
      var v529 = rightNum(v592, "", 8, tabIn$$3);
      var v418 = v529 + lineOfText$$1;
      var v158 = v418 + "\n";
      JAM.call(v157.write, v157, [v158], JAM.policy.p17);
      var v162 = strands$$1 == "two";
      if (v162) {
        var v159 = outputWindow.document;
        var v593 = adjustNumbering(lineNum, numberingAdjustment);
        var v530 = rightNum(v593, "", 8, tabIn$$3);
        var v531 = complement(lineOfText$$1);
        var v419 = v530 + v531;
        var v160 = v419 + "\n";
        JAM.call(v159.write, v159, [v160], JAM.policy.p17);
        var v161 = outputWindow.document;
        JAM.call(v161.write, v161, ["\n"], JAM.policy.p11);
      }
    } else {
      var v178 = numberPosition$$1 == "right";
      if (v178) {
        var v163 = outputWindow.document;
        var v532 = adjustNumbering(i$$6, numberingAdjustment);
        var v420 = lineOfText$$1 + v532;
        var v164 = v420 + "\n";
        JAM.call(v163.write, v163, [v164], JAM.policy.p17);
        var v168 = strands$$1 == "two";
        if (v168) {
          var v165 = outputWindow.document;
          var v533 = complement(lineOfText$$1);
          var v534 = adjustNumbering(i$$6, numberingAdjustment);
          var v421 = v533 + v534;
          var v166 = v421 + "\n";
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
            var v422 = complement(lineOfText$$1);
            var v174 = v422 + "\n";
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
    var v423 = basePerLine$$3 / groupSize$$3;
    var v187 = j$$8 <= v423;
    for (;v187;) {
      var v183 = k$$2 < groupSize$$3;
      for (;v183;) {
        var v424 = i$$7 + k$$2;
        var v181 = v424 >= stopBase$$3;
        if (v181) {
          break;
        }
        var v425 = k$$2 + i$$7;
        var v182 = JAM.call(text$$13.charAt, text$$13, [v425], JAM.policy.p17);
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
      var v426 = basePerLine$$3 / groupSize$$3;
      v187 = j$$8 <= v426;
    }
    var v198 = numberPosition$$2 == "left";
    if (v198) {
      var v188 = outputWindow.document;
      var v535 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v427 = v535 + lineOfText$$2;
      var v189 = v427 + "\n";
      JAM.call(v188.write, v188, [v189], JAM.policy.p17);
    } else {
      var v197 = numberPosition$$2 == "right";
      if (v197) {
        var v190 = outputWindow.document;
        var v428 = lineOfText$$2 + i$$7;
        var v191 = v428 + "\n";
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
  var v594 = sequence$$13.length;
  var v536 = v594 <= firstIndexToMutate;
  var v595 = !v536;
  if (v595) {
    v536 = lastIndexToMutate < 0;
  }
  var v429 = v536;
  var v537 = !v429;
  if (v537) {
    v429 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v200 = v429;
  if (v200) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v208 = i$$8 < numMut;
  for (;v208;) {
    maxNum = sequence$$13.length;
    var v430 = Math.random();
    var v201 = v430 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v201], JAM.policy.p16);
    var v431 = randNum < firstIndexToMutate;
    var v538 = !v431;
    if (v538) {
      v431 = randNum > lastIndexToMutate;
    }
    var v202 = v431;
    if (v202) {
      numMut++;
      i$$8++;
      v208 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p16);
    needNewChar = true;
    for (;needNewChar;) {
      var v432 = Math.random();
      var v433 = components$$1.length;
      var v203 = v432 * v433;
      componentsIndex = JAM.call(Math.round, Math, [v203], JAM.policy.p16);
      var v434 = components$$1.length;
      var v204 = componentsIndex == v434;
      if (v204) {
        componentsIndex = 0;
      }
      var v435 = components$$1[componentsIndex];
      var v205 = v435 != currentChar;
      if (v205) {
        needNewChar = false;
      }
    }
    var v436 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v437 = components$$1[componentsIndex];
    var v206 = v436 + v437;
    var v438 = randNum + 1;
    var v439 = sequence$$13.length;
    var v207 = JAM.call(sequence$$13.substring, sequence$$13, [v438, v439], JAM.policy.p27);
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
    var v440 = Math.random();
    var v441 = components$$2.length;
    var v211 = v440 * v441;
    tempNum$$1 = JAM.call(Math.floor, Math, [v211], JAM.policy.p16);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v442 = sequence$$14.length;
    var v214 = v442 == 60;
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
    var v596 = sequence$$15.length;
    var v539 = v596 - lookAhead;
    var v540 = sequence$$15.length;
    var v443 = JAM.call(sequence$$15.substring, sequence$$15, [v539, v540], JAM.policy.p27);
    var v219 = v443 + sequence$$15;
    var v220 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v219 + v220;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v222 = outputWindow.document;
  JAM.call(v222.write, v222, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v223 = outputWindow.document;
  var v597 = '<tr><td class="title" width="200px">' + "Site:";
  var v541 = v597 + '</td><td class="title">';
  var v444 = v541 + "Positions:";
  var v224 = v444 + "</td></tr>\n";
  JAM.call(v223.write, v223, [v224], JAM.policy.p17);
  var i$$9 = 0;
  var v445 = arrayOfItems.length;
  var v240 = i$$9 < v445;
  for (;v240;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v446 = arrayOfItems[i$$9];
    var v225 = JAM.call(v446.match, v446, [/\/.+\//], JAM.policy.p16);
    matchExp = v225 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v598 = arrayOfItems[i$$9];
    var v542 = JAM.call(v598.match, v598, [/\)\D*\d+/], JAM.policy.p16);
    var v447 = v542.toString();
    var v226 = JAM.call(v447.replace, v447, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v226);
    var v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v232;) {
      var v227 = matchExp.lastIndex;
      matchPosition = v227 - cutDistance;
      var v448 = matchPosition >= lowerLimit;
      if (v448) {
        v448 = matchPosition < upperLimit;
      }
      var v230 = v448;
      if (v230) {
        timesFound++;
        var v228 = tempString$$1 + ", ";
        var v449 = matchPosition - shiftValue;
        var v229 = v449 + 1;
        tempString$$1 = v228 + v229;
      }
      var v450 = matchExp.lastIndex;
      var v543 = RegExp.lastMatch;
      var v451 = v543.length;
      var v231 = v450 - v451;
      matchExp.lastIndex = v231 + 1;
      v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v452 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p16);
    var v233 = v452 != -1;
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
    var v678 = '<tr><td class="' + backGroundClass;
    var v665 = v678 + '">';
    var v701 = arrayOfItems[i$$9];
    var v691 = JAM.call(v701.match, v701, [/\([^\(]+\)/], JAM.policy.p16);
    var v679 = v691.toString();
    var v666 = JAM.call(v679.replace, v679, [/\(|\)/g, ""], JAM.policy.p15);
    var v652 = v665 + v666;
    var v634 = v652 + '</td><td class="';
    var v599 = v634 + backGroundClass;
    var v544 = v599 + '">';
    var v453 = v544 + tempString$$1;
    var v239 = v453 + "</td></tr>\n";
    JAM.call(v238.write, v238, [v239], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v454 = arrayOfItems.length;
    v240 = i$$9 < v454;
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
  var v653 = '<tr><td class="title">' + "Pattern:";
  var v635 = v653 + '</td><td class="title">';
  var v600 = v635 + "Times found:";
  var v545 = v600 + '</td><td class="title">';
  var v455 = v545 + "Percentage:";
  var v244 = v455 + "</td></tr>\n";
  JAM.call(v243.write, v243, [v244], JAM.policy.p17);
  var i$$10 = 0;
  var v456 = arrayOfItems$$1.length;
  var v253 = i$$10 < v456;
  for (;v253;) {
    var tempNumber = 0;
    var v457 = arrayOfItems$$1[i$$10];
    var v245 = JAM.call(v457.match, v457, [/\/[^\/]+\//], JAM.policy.p16);
    var matchExp$$1 = v245 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v458 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v247 = v458 != -1;
    if (v247) {
      var v246 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v246.length;
    }
    var percentage = 0;
    var v546 = originalLength + 1;
    var v636 = arrayOfItems$$1[i$$10];
    var v601 = JAM.call(v636.match, v636, [/\d+/], JAM.policy.p16);
    var v547 = parseFloat(v601);
    var v459 = v546 - v547;
    var v250 = v459 > 0;
    if (v250) {
      var v248 = 100 * tempNumber;
      var v460 = originalLength + 1;
      var v602 = arrayOfItems$$1[i$$10];
      var v548 = JAM.call(v602.match, v602, [/\d+/], JAM.policy.p16);
      var v461 = parseFloat(v548);
      var v249 = v460 - v461;
      percentage = v248 / v249;
    }
    var v251 = outputWindow.document;
    var v702 = arrayOfItems$$1[i$$10];
    var v692 = JAM.call(v702.match, v702, [/\([^\(]+\)\b/], JAM.policy.p16);
    var v680 = v692.toString();
    var v667 = JAM.call(v680.replace, v680, [/\(|\)/g, ""], JAM.policy.p15);
    var v654 = "<tr><td>" + v667;
    var v637 = v654 + "</td><td>";
    var v603 = v637 + tempNumber;
    var v549 = v603 + "</td><td>";
    var v550 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9);
    var v462 = v549 + v550;
    var v252 = v462 + "</td></tr>\n";
    JAM.call(v251.write, v251, [v252], JAM.policy.p17);
    i$$10++;
    var v463 = arrayOfItems$$1.length;
    v253 = i$$10 < v463;
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
  var v464 = sequence$$17.length;
  var v261 = v464 > 0;
  for (;v261;) {
    maxNum$$1 = sequence$$17.length;
    var v465 = Math.random();
    var v255 = v465 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v255], JAM.policy.p16);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p16);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v256 = randNum$$1 + 1;
    var v257 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v256, v257], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v466 = tempSeq.length;
    var v260 = v466 == 60;
    if (v260) {
      var v258 = outputWindow.document;
      var v259 = tempSeq + "\n";
      JAM.call(v258.write, v258, [v259], JAM.policy.p17);
      tempSeq = "";
    }
    var v467 = sequence$$17.length;
    v261 = v467 > 0;
  }
  var v262 = outputWindow.document;
  var v263 = tempSeq + "\n";
  JAM.call(v262.write, v262, [v263], JAM.policy.p17);
  return true;
}
function emblTrans() {
  var theDocument = document;
  var maxInput$$3 = 2E5;
  var v468 = testScript();
  var v264 = v468 == false;
  if (v264) {
    return;
  }
  var v681 = theDocument.forms;
  var v668 = v681[0];
  var v655 = v668.elements;
  var v638 = v655[0];
  var v604 = checkFormElement(v638);
  var v551 = v604 == false;
  var v606 = !v551;
  if (v606) {
    var v693 = theDocument.forms;
    var v682 = v693[0];
    var v669 = v682.elements;
    var v656 = v669[0];
    var v639 = v656.value;
    var v605 = verifyEmblFeat(v639);
    v551 = v605 == false;
  }
  var v469 = v551;
  var v553 = !v469;
  if (v553) {
    var v683 = theDocument.forms;
    var v670 = v683[0];
    var v657 = v670.elements;
    var v640 = v657[0];
    var v607 = v640.value;
    var v552 = checkTextLength(v607, maxInput$$3);
    v469 = v552 == false;
  }
  var v265 = v469;
  if (v265) {
    return;
  }
  openWindow();
  openPre();
  var v641 = theDocument.forms;
  var v608 = v641[0];
  var v554 = v608.elements;
  var v470 = v554[0];
  var v266 = v470.value;
  emblTransExtract(v266);
  closePre();
  closeWindow();
  return;
}
function emblTransExtract(emblFile$$2) {
  var title$$9;
  var v267 = "_" + emblFile$$2;
  emblFile$$2 = v267 + "_";
  var recordArray = JAM.call(emblFile$$2.split, emblFile$$2, [/ID\s\s\s[^\f\n\r]*/], JAM.policy.p16);
  var i$$11 = 1;
  var v471 = recordArray.length;
  var v276 = i$$11 < v471;
  for (;v276;) {
    var mainArray = JAM.call(emblFile$$2.split, emblFile$$2, [/[\f\n\r]\s*FH   Key             Location\/Qualifiers[\f\n\r]+\s*FH|[\f\n\r]\s*XX[\s]*[\f\n\r]\s*SQ[^\f\n\r]*/], JAM.policy.p16);
    var v555 = mainArray[0];
    var v472 = JAM.call(v555.search, v555, [/[\f\n\r]\s*DE[^\f\n\r]+/], JAM.policy.p16);
    var v269 = v472 != -1;
    if (v269) {
      var v556 = mainArray[0];
      var v473 = JAM.call(v556.match, v556, [/[\f\n\r]\s*DE[^\f\n\r]+/], JAM.policy.p16);
      var v268 = v473.toString();
      title$$9 = JAM.call(v268.replace, v268, [/[\f\n\r]\s*DE\s*/, ""], JAM.policy.p15);
    } else {
      title$$9 = "Untitled";
    }
    var v474 = JAM.call(title$$9.replace, title$$9, [/[\f\n\r\t]+$/g, ""], JAM.policy.p15);
    var v270 = filterFastaTitle(v474);
    title$$9 = v270 + "\n";
    var v271 = mainArray[2];
    var dnaSequenceArray = JAM.call(v271.split, v271, [/\/{2}/], JAM.policy.p16);
    var v272 = outputWindow.document;
    var v273 = title$$9 + "\n";
    JAM.call(v272.write, v272, [v273], JAM.policy.p17);
    var v475 = dnaSequenceArray.length;
    var v274 = v475 == 1;
    if (v274) {
      alert("The entire EMBL file may not have been processed.");
      outputWindow.focus();
    }
    var v275 = mainArray[1];
    var featureArray = JAM.call(v275.split, v275, [/[\f\n\r]FT {3,12}\b/], JAM.policy.p16);
    showFeatureTrans(featureArray);
    i$$11++;
    var v476 = recordArray.length;
    v276 = i$$11 < v476;
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
  var v477 = arrayOfFeatures.length;
  var v287 = i$$12 < v477;
  for (;v287;) {
    var v557 = arrayOfFeatures[i$$12];
    var v478 = JAM.call(v557.search, v557, [/\/translation/], JAM.policy.p16);
    var v286 = v478 != -1;
    if (v286) {
      var v277 = arrayOfFeatures[i$$12];
      var v738 = JAM.call(v277.replace, v277, [/[\[\]\*]/g, ""], JAM.policy.p15);
      arrayOfFeatures[i$$12] = v738;
      var v479 = arrayOfFeatures[i$$12];
      var v278 = JAM.call(v479.match, v479, [/[^ \f\n\r\t\v]+ /], JAM.policy.p16);
      featureTitle = v278.toString();
      theTitle = new RegExp(featureTitle);
      var v279 = arrayOfFeatures[i$$12];
      removedTitle = JAM.call(v279.replace, v279, [theTitle, ""], JAM.policy.p19);
      var v480 = arrayOfFeatures[i$$12];
      var v280 = JAM.call(v480.match, v480, [/\/[^\f\n\r]+/], JAM.policy.p16);
      firstQualifier = v280.toString();
      var v281 = outputWindow.document;
      var v609 = filterFastaTitle(featureTitle);
      var v558 = "&gt;" + v609;
      var v559 = filterFastaTitle(firstQualifier);
      var v481 = v558 + v559;
      var v282 = v481 + "\n";
      JAM.call(v281.write, v281, [v282], JAM.policy.p17);
      var v283 = arrayOfFeatures[i$$12];
      translation = JAM.call(v283.match, v283, [/\/translation="[^"]+"/], JAM.policy.p16);
      translation = translation.toString();
      translation = JAM.call(translation.replace, translation, [/\/translation/, ""], JAM.policy.p15);
      translation = JAM.call(translation.replace, translation, [/^FT\s+/gm, ""], JAM.policy.p15);
      translation = removeNonProtein(translation);
      translation = addReturns(translation);
      var v284 = outputWindow.document;
      JAM.call(v284.write, v284, [translation], JAM.policy.p17);
      translationFound = true;
      var v285 = outputWindow.document;
      JAM.call(v285.write, v285, ["\n\n"], JAM.policy.p11);
    }
    i$$12++;
    var v482 = arrayOfFeatures.length;
    v287 = i$$12 < v482;
  }
  var v289 = translationFound == false;
  if (v289) {
    var v288 = outputWindow.document;
    JAM.call(v288.write, v288, ["No translations were found.\n"], JAM.policy.p11);
  }
  return;
}
JAM.set(document, "onload", v2);
var v290 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11);
JAM.set(v290, "onclick", v3);
var v291 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11);
JAM.set(v291, "onclick", v4)
