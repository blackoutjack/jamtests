function v5() {
  var v547 = document.forms;
  var v475 = v547[0];
  var v286 = v475.elements;
  var v6 = v286[0];
  v6.value = " ";
  return;
}
function v4() {
  try {
    threeToOne();
  } catch (e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7);
  }
  return;
}
function v3() {
  var v287 = document.main_form;
  var v8 = v287.main_submit;
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
  var v288 = arrayOfSequences.length;
  var v10 = v288 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v289 = arrayOfTitles.length;
  var v12 = i$$1 < v289;
  for (;v12;) {
    var v594 = arrayOfTitles[i$$1];
    var v548 = JAM.call(v594.search, v594, [/\S/], JAM.policy.p17);
    var v476 = v548 == -1;
    var v550 = !v476;
    if (v550) {
      var v595 = arrayOfSequences[i$$1];
      var v549 = JAM.call(v595.search, v595, [/\S/], JAM.policy.p17);
      v476 = v549 == -1;
    }
    var v290 = v476;
    var v478 = !v290;
    if (v478) {
      var v551 = arrayOfSequences[i$$1];
      var v477 = v551.length;
      v290 = v477 != lengthOfAlign;
    }
    var v11 = v290;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v291 = arrayOfTitles.length;
    v12 = i$$1 < v291;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v625 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17);
  var v596 = v625 == -1;
  var v627 = !v596;
  if (v627) {
    var v626 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17);
    v596 = v626 == -1;
  }
  var v552 = v596;
  var v598 = !v552;
  if (v598) {
    var v597 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17);
    v552 = v597 == -1;
  }
  var v479 = v552;
  var v554 = !v479;
  if (v554) {
    var v553 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17);
    v479 = v553 == -1;
  }
  var v292 = v479;
  var v481 = !v292;
  if (v481) {
    var v480 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17);
    v292 = v480 == -1;
  }
  var v13 = v292;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v482 = formElement.value;
  var v293 = JAM.call(v482.search, v482, [/\S/], JAM.policy.p17);
  var v14 = v293 == -1;
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
  var v294 = arrayOfPatterns.length;
  var v17 = z$$2 < v294;
  for (;v17;) {
    var v483 = arrayOfPatterns[z$$2];
    var v295 = JAM.call(v483.search, v483, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17);
    var v15 = v295 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v484 = arrayOfPatterns[z$$2];
    var v296 = moreExpressionCheck(v484);
    var v16 = v296 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v297 = arrayOfPatterns.length;
    v17 = z$$2 < v297;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v298 = arrayOfPatterns.length;
  var v23 = j < v298;
  for (;v23;) {
    var v485 = arrayOfPatterns[j];
    var v299 = JAM.call(v485.match, v485, [/\/.+\//], JAM.policy.p17);
    var v20 = v299 + "gi";
    if (JAM.isEval(eval)) {
      var v710 = eval("introspect(JAM.policy.pFull) { " + v20 + " }")
    } else {
      var v710 = JAM.call(eval, null, [v20])
    }
    geneticCodeMatchExp[j] = v710;
    var v300 = arrayOfPatterns[j];
    var v21 = JAM.call(v300.match, v300, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v711 = v21.toString();
    geneticCodeMatchResult[j] = v711;
    var v22 = geneticCodeMatchResult[j];
    var v712 = JAM.call(v22.replace, v22, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v712;
    j++;
    var v301 = arrayOfPatterns.length;
    v23 = j < v301;
  }
  var i$$2 = 0;
  var v486 = testSequence.length;
  var v302 = v486 - 3;
  var v30 = i$$2 <= v302;
  for (;v30;) {
    var v24 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v24], JAM.policy.p16);
    j = 0;
    var v303 = geneticCodeMatchExp.length;
    var v28 = j < v303;
    for (;v28;) {
      var v487 = geneticCodeMatchExp[j];
      var v304 = JAM.call(codon.search, codon, [v487], JAM.policy.p15);
      var v27 = v304 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v305 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v305 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v306 = geneticCodeMatchExp.length;
      v28 = j < v306;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v488 = testSequence.length;
    var v307 = v488 - 3;
    v30 = i$$2 <= v307;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v308 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v308;
  for (;v32;) {
    var v489 = arrayOfPatterns$$1[z$$3];
    var v309 = JAM.call(v489.search, v489, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17);
    var v31 = v309 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v310 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v310;
  }
  var i$$3 = 0;
  var v311 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v311;
  for (;v36;) {
    var v490 = arrayOfPatterns$$1[i$$3];
    var v312 = "[" + v490;
    var v33 = v312 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v313 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v313;
    for (;v35;) {
      var v491 = arrayOfPatterns$$1[j$$1];
      var v314 = JAM.call(v491.search, v491, [re], JAM.policy.p15);
      var v34 = v314 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v315 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v315;
    }
    i$$3++;
    var v316 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v316;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v317 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v317;
  for (;v39;) {
    var v492 = arrayOfPatterns$$2[z$$4];
    var v318 = JAM.call(v492.search, v492, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17);
    var v37 = v318 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v493 = arrayOfPatterns$$2[z$$4];
    var v319 = moreExpressionCheck(v493);
    var v38 = v319 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v320 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v320;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v555 = getSequenceFromFasta(text$$7);
  var v494 = JAM.call(v555.replace, v555, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v321 = v494.length;
  var v41 = v321 > maxInput;
  if (v41) {
    var v322 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v322 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v323 = text$$8.length;
  var v43 = v323 > maxInput$$1;
  if (v43) {
    var v324 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v324 + " characters.";
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
  var v325 = alignArray.length;
  var v50 = v325 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v326 = alignArray.length;
  var v52 = i$$4 < v326;
  for (;v52;) {
    var v495 = alignArray[i$$4];
    var v327 = JAM.call(v495.search, v495, [/[^\s]+\s/], JAM.policy.p17);
    var v51 = v327 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v328 = alignArray.length;
    v52 = i$$4 < v328;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p16);
  return alignSeq;
}
function filterFastaTitle() {
  var sequenceTitle = fastaSequenceTitle;
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p16);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p16);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p16);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p16);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v329 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v55 = v329 != -1;
  if (v55) {
    var v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p15);
    for (;v54;) {
      var v53 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v53], JAM.policy.p15);
      v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p15);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$2) {
  var v330 = sequence$$2.length;
  var v56 = "&gt;results for " + v330;
  var stringToReturn = v56 + " residue sequence ";
  var v331 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p17);
  var v58 = v331 != -1;
  if (v58) {
    var v332 = stringToReturn + '"';
    var v57 = v332 + fastaSequenceTitle$$1;
    stringToReturn = v57 + '"';
  }
  var v333 = stringToReturn + ' starting "';
  var v334 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v59 = v333 + v334;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v335 = sequenceOne.length;
  var v60 = "Search results for " + v335;
  var stringToReturn$$1 = v60 + " residue sequence ";
  var v336 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p17);
  var v62 = v336 != -1;
  if (v62) {
    var v337 = stringToReturn$$1 + '"';
    var v61 = v337 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v338 = stringToReturn$$1 + ' starting "';
  var v339 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v63 = v338 + v339;
  stringToReturn$$1 = v63 + '"\n';
  var v340 = stringToReturn$$1 + "and ";
  var v341 = sequenceTwo.length;
  var v64 = v340 + v341;
  stringToReturn$$1 = v64 + " residue sequence ";
  var v342 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p17);
  var v66 = v342 != -1;
  if (v66) {
    var v343 = stringToReturn$$1 + '"';
    var v65 = v343 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v344 = stringToReturn$$1 + ' starting "';
  var v345 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v67 = v344 + v345;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v346 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v346;
  for (;v71;) {
    var v496 = arrayOfPatterns$$3[j$$2];
    var v347 = JAM.call(v496.match, v496, [/\/.+\//], JAM.policy.p17);
    var v70 = v347 + "gi";
    if (JAM.isEval(eval)) {
      var v713 = eval("introspect(JAM.policy.pFull) { " + v70 + " }")
    } else {
      var v713 = JAM.call(eval, null, [v70])
    }
    geneticCodeMatchExp$$1[j$$2] = v713;
    j$$2++;
    var v348 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v348;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v349 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v349;
  for (;v75;) {
    var v350 = arrayOfPatterns$$4[j$$3];
    var v73 = JAM.call(v350.match, v350, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v714 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v714;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v715 = JAM.call(v74.replace, v74, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v715;
    j$$3++;
    var v351 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v351;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$2, sequence$$3) {
  var v352 = sequence$$3.length;
  var v76 = "Results for " + v352;
  var stringToReturn$$2 = v76 + " residue sequence ";
  var v353 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p17);
  var v78 = v353 != -1;
  if (v78) {
    var v354 = stringToReturn$$2 + '"';
    var v77 = v354 + fastaSequenceTitle$$2;
    stringToReturn$$2 = v77 + '"';
  }
  var v355 = stringToReturn$$2 + ' starting "';
  var v356 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v79 = v355 + v356;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$3, sequence$$4, topology) {
  var v497 = "Results for " + topology;
  var v357 = v497 + " ";
  var v358 = sequence$$4.length;
  var v81 = v357 + v358;
  var stringToReturn$$3 = v81 + " residue sequence ";
  var v359 = JAM.call(fastaSequenceTitle$$3.search, fastaSequenceTitle$$3, [/[^\s]/], JAM.policy.p17);
  var v83 = v359 != -1;
  if (v83) {
    var v360 = stringToReturn$$3 + '"';
    var v82 = v360 + fastaSequenceTitle$$3;
    stringToReturn$$3 = v82 + '"';
  }
  var v361 = stringToReturn$$3 + ' starting "';
  var v362 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v84 = v361 + v362;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v363 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v363;
  var stringToReturn$$4 = v86 + " residue sequence ";
  var v364 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p17);
  var v88 = v364 != -1;
  if (v88) {
    var v365 = stringToReturn$$4 + '"';
    var v87 = v365 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v366 = stringToReturn$$4 + ' starting "';
  var v367 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v89 = v366 + v367;
  stringToReturn$$4 = v89 + '"\n';
  var v368 = stringToReturn$$4 + "and ";
  var v369 = sequenceTwo$$1.length;
  var v90 = v368 + v369;
  stringToReturn$$4 = v90 + " residue sequence ";
  var v370 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p17);
  var v92 = v370 != -1;
  if (v92) {
    var v371 = stringToReturn$$4 + '"';
    var v91 = v371 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v372 = stringToReturn$$4 + ' starting "';
  var v373 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v93 = v372 + v373;
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
    var v374 = Math.random();
    var v375 = components.length;
    var v95 = v374 * v375;
    tempNum = JAM.call(Math.floor, Math, [v95], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p15);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p10);
}
function getSequenceFromFasta(sequenceRecord) {
  var v376 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v97 = v376 != -1;
  if (v97) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v377 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v99 = v377 != -1;
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
  var v688 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p17);
  var v681 = v688 != -1;
  var v690 = !v681;
  if (v690) {
    var v689 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17);
    v681 = v689 != -1;
  }
  var v672 = v681;
  var v683 = !v672;
  if (v683) {
    var v682 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17);
    v672 = v682 != -1;
  }
  var v663 = v672;
  var v674 = !v663;
  if (v674) {
    var v673 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17);
    v663 = v673 != -1;
  }
  var v652 = v663;
  var v665 = !v652;
  if (v665) {
    var v664 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17);
    v652 = v664 != -1;
  }
  var v640 = v652;
  var v654 = !v640;
  if (v654) {
    var v653 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17);
    v640 = v653 != -1;
  }
  var v628 = v640;
  var v642 = !v628;
  if (v642) {
    var v641 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17);
    v628 = v641 != -1;
  }
  var v599 = v628;
  var v630 = !v599;
  if (v630) {
    var v629 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17);
    v599 = v629 != -1;
  }
  var v556 = v599;
  var v601 = !v556;
  if (v601) {
    var v600 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17);
    v556 = v600 != -1;
  }
  var v498 = v556;
  var v558 = !v498;
  if (v558) {
    var v557 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17);
    v498 = v557 != -1;
  }
  var v378 = v498;
  var v500 = !v378;
  if (v500) {
    var v499 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17);
    v378 = v499 != -1;
  }
  var v100 = v378;
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
  var title$$6 = "Three to One";
  _openWindow(title$$6);
  return;
}
function _openWindow(title$$7) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v105 = outputWindow.document;
  var v559 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v501 = v559 + "<head>\n";
  var v379 = v501 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v379 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v105.write, v105, [v106], JAM.policy.p15);
  if (isColor) {
    var v107 = outputWindow.document;
    var v703 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v699 = v703 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v695 = v699 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v691 = v695 + "div.info {font-weight: bold}\n";
    var v684 = v691 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v675 = v684 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v666 = v675 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v655 = v666 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v643 = v655 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v631 = v643 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v602 = v631 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v560 = v602 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v502 = v560 + "td.many {color: #000000}\n";
    var v380 = v502 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v380 + "</style>\n";
    JAM.call(v107.write, v107, [v108], JAM.policy.p15);
  } else {
    var v109 = outputWindow.document;
    var v707 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v704 = v707 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v700 = v704 + "div.title {display: none}\n";
    var v696 = v700 + "div.info {font-weight: bold}\n";
    var v692 = v696 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v685 = v692 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v676 = v685 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v667 = v676 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v656 = v667 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v644 = v656 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v632 = v644 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v603 = v632 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v561 = v603 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v503 = v561 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v381 = v503 + "img {display: none}\n";
    var v110 = v381 + "</style>\n";
    JAM.call(v109.write, v109, [v110], JAM.policy.p15);
  }
  var v111 = outputWindow.document;
  var v562 = "</head>\n" + '<body class="main">\n';
  var v504 = v562 + '<div class="title">';
  var v382 = v504 + title$$7;
  var v112 = v382 + " results</div>\n";
  JAM.call(v111.write, v111, [v112], JAM.policy.p15);
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
  var v563 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v505 = v563 + "<head>\n";
  var v383 = v505 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v383 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v113.write, v113, [v114], JAM.policy.p15);
  if (isBackground) {
    var v115 = outputWindow.document;
    var v705 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v701 = v705 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v697 = v701 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v693 = v697 + "div.info {font-weight: bold}\n";
    var v686 = v693 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v677 = v686 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v668 = v677 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v657 = v668 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v645 = v657 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v633 = v645 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v604 = v633 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v564 = v604 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v506 = v564 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v384 = v506 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v384 + "</style>\n";
    JAM.call(v115.write, v115, [v116], JAM.policy.p15);
  } else {
    var v117 = outputWindow.document;
    var v709 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v708 = v709 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v706 = v708 + "div.title {display: none}\n";
    var v702 = v706 + "div.info {font-weight: bold}\n";
    var v698 = v702 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v694 = v698 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v687 = v694 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v678 = v687 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v669 = v678 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v658 = v669 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v646 = v658 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v634 = v646 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v605 = v634 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v565 = v605 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v507 = v565 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v385 = v507 + "img {display: none}\n";
    var v118 = v385 + "</style>\n";
    JAM.call(v117.write, v117, [v118], JAM.policy.p15);
  }
  var v119 = outputWindow.document;
  var v566 = "</head>\n" + '<body class="main">\n';
  var v508 = v566 + '<div class="title">';
  var v386 = v508 + title$$9;
  var v120 = v386 + " results</div>\n";
  JAM.call(v119.write, v119, [v120], JAM.policy.p15);
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
  var v387 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p17);
  var v121 = v387 != -1;
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p15);
  var v388 = testArray[0];
  var v125 = v388 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v389 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p15);
  var v126 = v389 == -1;
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
  var v390 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p11);
  var v129 = v390 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v391 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p11);
  var v130 = v391 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v392 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p17);
  var v131 = v392 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v606 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17);
  var v567 = v606 == -1;
  var v608 = !v567;
  if (v608) {
    var v607 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17);
    v567 = v607 == -1;
  }
  var v509 = v567;
  var v569 = !v509;
  if (v569) {
    var v568 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17);
    v509 = v568 == -1;
  }
  var v393 = v509;
  var v511 = !v393;
  if (v511) {
    var v510 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17);
    v393 = v510 == -1;
  }
  var v132 = v393;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v394 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p17);
  var v133 = v394 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v395 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v395 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v396 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p17);
  var v136 = v396 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v397 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p17);
  var v137 = v397 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v609 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17);
  var v570 = v609 == -1;
  var v611 = !v570;
  if (v611) {
    var v610 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17);
    v570 = v610 == -1;
  }
  var v512 = v570;
  var v572 = !v512;
  if (v572) {
    var v571 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17);
    v512 = v571 == -1;
  }
  var v398 = v512;
  var v514 = !v398;
  if (v514) {
    var v513 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17);
    v398 = v513 == -1;
  }
  var v138 = v398;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v612 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17);
  var v573 = v612 == -1;
  var v614 = !v573;
  if (v614) {
    var v613 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17);
    v573 = v613 == -1;
  }
  var v515 = v573;
  var v575 = !v515;
  if (v575) {
    var v574 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17);
    v515 = v574 == -1;
  }
  var v399 = v515;
  var v517 = !v399;
  if (v517) {
    var v516 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17);
    v399 = v516 == -1;
  }
  var v139 = v399;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v400 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p17);
  var v140 = v400 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v615 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17);
  var v576 = v615 == -1;
  var v617 = !v576;
  if (v617) {
    var v616 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17);
    v576 = v616 == -1;
  }
  var v518 = v576;
  var v578 = !v518;
  if (v578) {
    var v577 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17);
    v518 = v577 == -1;
  }
  var v401 = v518;
  var v520 = !v401;
  if (v520) {
    var v519 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17);
    v401 = v519 == -1;
  }
  var v141 = v401;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v402 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p17);
  var v142 = v402 == -1;
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
    var v403 = basePerLine / groupSize;
    var v146 = j$$6 <= v403;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v404 = k + i$$5;
        var v144 = JAM.call(text$$10.charAt, text$$10, [v404], JAM.policy.p15);
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v405 = basePerLine / groupSize;
      v146 = j$$6 <= v405;
    }
    var v147 = outputWindow.document;
    var v148 = lineOfText + "\n";
    JAM.call(v147.write, v147, [v148], JAM.policy.p15);
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
    var v406 = adjustment < 0;
    if (v406) {
      v406 = adjusted >= 0;
    }
    var v150 = v406;
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
    var v407 = basePerLine$$2 / groupSize$$2;
    var v157 = j$$7 <= v407;
    for (;v157;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v408 = i$$6 + k$$1;
        var v151 = v408 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v409 = k$$1 + i$$6;
        var v152 = JAM.call(text$$12.charAt, text$$12, [v409], JAM.policy.p15);
        lineOfText$$1 = lineOfText$$1 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v155 = numberPosition$$1 == "above";
      if (v155) {
        var v410 = adjustNumbering(i$$6, numberingAdjustment);
        var v154 = rightNum(v410, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v154;
      }
      var v156 = i$$6 >= stopBase$$2;
      if (v156) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v411 = basePerLine$$2 / groupSize$$2;
      v157 = j$$7 <= v411;
    }
    var v180 = numberPosition$$1 == "left";
    if (v180) {
      var v158 = outputWindow.document;
      var v579 = adjustNumbering(lineNum, numberingAdjustment);
      var v521 = rightNum(v579, "", 8, tabIn$$3);
      var v412 = v521 + lineOfText$$1;
      var v159 = v412 + "\n";
      JAM.call(v158.write, v158, [v159], JAM.policy.p15);
      var v163 = strands$$1 == "two";
      if (v163) {
        var v160 = outputWindow.document;
        var v580 = adjustNumbering(lineNum, numberingAdjustment);
        var v522 = rightNum(v580, "", 8, tabIn$$3);
        var v523 = complement(lineOfText$$1);
        var v413 = v522 + v523;
        var v161 = v413 + "\n";
        JAM.call(v160.write, v160, [v161], JAM.policy.p15);
        var v162 = outputWindow.document;
        JAM.call(v162.write, v162, ["\n"], JAM.policy.p10);
      }
    } else {
      var v179 = numberPosition$$1 == "right";
      if (v179) {
        var v164 = outputWindow.document;
        var v524 = adjustNumbering(i$$6, numberingAdjustment);
        var v414 = lineOfText$$1 + v524;
        var v165 = v414 + "\n";
        JAM.call(v164.write, v164, [v165], JAM.policy.p15);
        var v169 = strands$$1 == "two";
        if (v169) {
          var v166 = outputWindow.document;
          var v525 = complement(lineOfText$$1);
          var v526 = adjustNumbering(i$$6, numberingAdjustment);
          var v415 = v525 + v526;
          var v167 = v415 + "\n";
          JAM.call(v166.write, v166, [v167], JAM.policy.p15);
          var v168 = outputWindow.document;
          JAM.call(v168.write, v168, ["\n"], JAM.policy.p10);
        }
      } else {
        var v178 = numberPosition$$1 == "above";
        if (v178) {
          var v170 = outputWindow.document;
          var v171 = aboveNum + "\n";
          JAM.call(v170.write, v170, [v171], JAM.policy.p15);
          var v172 = outputWindow.document;
          var v173 = lineOfText$$1 + "\n";
          JAM.call(v172.write, v172, [v173], JAM.policy.p15);
          var v177 = strands$$1 == "two";
          if (v177) {
            var v174 = outputWindow.document;
            var v416 = complement(lineOfText$$1);
            var v175 = v416 + "\n";
            JAM.call(v174.write, v174, [v175], JAM.policy.p15);
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
    var v417 = basePerLine$$3 / groupSize$$3;
    var v188 = j$$8 <= v417;
    for (;v188;) {
      var v184 = k$$2 < groupSize$$3;
      for (;v184;) {
        var v418 = i$$7 + k$$2;
        var v182 = v418 >= stopBase$$3;
        if (v182) {
          break;
        }
        var v419 = k$$2 + i$$7;
        var v183 = JAM.call(text$$13.charAt, text$$13, [v419], JAM.policy.p15);
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
      var v420 = basePerLine$$3 / groupSize$$3;
      v188 = j$$8 <= v420;
    }
    var v199 = numberPosition$$2 == "left";
    if (v199) {
      var v189 = outputWindow.document;
      var v527 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v421 = v527 + lineOfText$$2;
      var v190 = v421 + "\n";
      JAM.call(v189.write, v189, [v190], JAM.policy.p15);
    } else {
      var v198 = numberPosition$$2 == "right";
      if (v198) {
        var v191 = outputWindow.document;
        var v422 = lineOfText$$2 + i$$7;
        var v192 = v422 + "\n";
        JAM.call(v191.write, v191, [v192], JAM.policy.p15);
      } else {
        var v197 = numberPosition$$2 == "above";
        if (v197) {
          var v193 = outputWindow.document;
          var v194 = aboveNum$$1 + "\n";
          JAM.call(v193.write, v193, [v194], JAM.policy.p15);
          var v195 = outputWindow.document;
          var v196 = lineOfText$$2 + "\n";
          JAM.call(v195.write, v195, [v196], JAM.policy.p15);
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
  var v581 = sequence$$13.length;
  var v528 = v581 <= firstIndexToMutate;
  var v582 = !v528;
  if (v582) {
    v528 = lastIndexToMutate < 0;
  }
  var v423 = v528;
  var v529 = !v423;
  if (v529) {
    v423 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v201 = v423;
  if (v201) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v209 = i$$8 < numMut;
  for (;v209;) {
    maxNum = sequence$$13.length;
    var v424 = Math.random();
    var v202 = v424 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v202], JAM.policy.p17);
    var v425 = randNum < firstIndexToMutate;
    var v530 = !v425;
    if (v530) {
      v425 = randNum > lastIndexToMutate;
    }
    var v203 = v425;
    if (v203) {
      numMut++;
      i$$8++;
      v209 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p17);
    needNewChar = true;
    for (;needNewChar;) {
      var v426 = Math.random();
      var v427 = components$$1.length;
      var v204 = v426 * v427;
      componentsIndex = JAM.call(Math.round, Math, [v204], JAM.policy.p17);
      var v428 = components$$1.length;
      var v205 = componentsIndex == v428;
      if (v205) {
        componentsIndex = 0;
      }
      var v429 = components$$1[componentsIndex];
      var v206 = v429 != currentChar;
      if (v206) {
        needNewChar = false;
      }
    }
    var v430 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v431 = components$$1[componentsIndex];
    var v207 = v430 + v431;
    var v432 = randNum + 1;
    var v433 = sequence$$13.length;
    var v208 = JAM.call(sequence$$13.substring, sequence$$13, [v432, v433], JAM.policy.p27);
    sequence$$13 = v207 + v208;
    i$$8++;
    v209 = i$$8 < numMut;
  }
  var v210 = outputWindow.document;
  var v211 = addReturns(sequence$$13);
  JAM.call(v210.write, v210, [v211], JAM.policy.p15);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v216 = j$$9 < lengthOut$$1;
  for (;v216;) {
    var v434 = Math.random();
    var v435 = components$$2.length;
    var v212 = v434 * v435;
    tempNum$$1 = JAM.call(Math.floor, Math, [v212], JAM.policy.p17);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v436 = sequence$$14.length;
    var v215 = v436 == 60;
    if (v215) {
      var v213 = outputWindow.document;
      var v214 = sequence$$14 + "\n";
      JAM.call(v213.write, v213, [v214], JAM.policy.p15);
      sequence$$14 = "";
    }
    j$$9++;
    v216 = j$$9 < lengthOut$$1;
  }
  var v217 = outputWindow.document;
  var v218 = sequence$$14 + "\n";
  JAM.call(v217.write, v217, [v218], JAM.policy.p15);
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
    var v583 = sequence$$15.length;
    var v531 = v583 - lookAhead;
    var v532 = sequence$$15.length;
    var v437 = JAM.call(sequence$$15.substring, sequence$$15, [v531, v532], JAM.policy.p27);
    var v220 = v437 + sequence$$15;
    var v221 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v220 + v221;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v223 = outputWindow.document;
  JAM.call(v223.write, v223, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p10);
  var v224 = outputWindow.document;
  var v584 = '<tr><td class="title" width="200px">' + "Site:";
  var v533 = v584 + '</td><td class="title">';
  var v438 = v533 + "Positions:";
  var v225 = v438 + "</td></tr>\n";
  JAM.call(v224.write, v224, [v225], JAM.policy.p15);
  var i$$9 = 0;
  var v439 = arrayOfItems.length;
  var v241 = i$$9 < v439;
  for (;v241;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v440 = arrayOfItems[i$$9];
    var v226 = JAM.call(v440.match, v440, [/\/.+\//], JAM.policy.p17);
    matchExp = v226 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v585 = arrayOfItems[i$$9];
    var v534 = JAM.call(v585.match, v585, [/\)\D*\d+/], JAM.policy.p17);
    var v441 = v534.toString();
    var v227 = JAM.call(v441.replace, v441, [/\)\D*/, ""], JAM.policy.p16);
    cutDistance = parseFloat(v227);
    var v233 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p15);
    for (;v233;) {
      var v228 = matchExp.lastIndex;
      matchPosition = v228 - cutDistance;
      var v442 = matchPosition >= lowerLimit;
      if (v442) {
        v442 = matchPosition < upperLimit;
      }
      var v231 = v442;
      if (v231) {
        timesFound++;
        var v229 = tempString$$1 + ", ";
        var v443 = matchPosition - shiftValue;
        var v230 = v443 + 1;
        tempString$$1 = v229 + v230;
      }
      var v444 = matchExp.lastIndex;
      var v535 = RegExp.lastMatch;
      var v445 = v535.length;
      var v232 = v444 - v445;
      matchExp.lastIndex = v232 + 1;
      v233 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p15);
    }
    var v446 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p17);
    var v234 = v446 != -1;
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
    var v659 = '<tr><td class="' + backGroundClass;
    var v647 = v659 + '">';
    var v679 = arrayOfItems[i$$9];
    var v670 = JAM.call(v679.match, v679, [/\([^\(]+\)/], JAM.policy.p17);
    var v660 = v670.toString();
    var v648 = JAM.call(v660.replace, v660, [/\(|\)/g, ""], JAM.policy.p16);
    var v635 = v647 + v648;
    var v618 = v635 + '</td><td class="';
    var v586 = v618 + backGroundClass;
    var v536 = v586 + '">';
    var v447 = v536 + tempString$$1;
    var v240 = v447 + "</td></tr>\n";
    JAM.call(v239.write, v239, [v240], JAM.policy.p15);
    timesFound = 0;
    i$$9++;
    var v448 = arrayOfItems.length;
    v241 = i$$9 < v448;
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
  var v636 = '<tr><td class="title">' + "Pattern:";
  var v619 = v636 + '</td><td class="title">';
  var v587 = v619 + "Times found:";
  var v537 = v587 + '</td><td class="title">';
  var v449 = v537 + "Percentage:";
  var v245 = v449 + "</td></tr>\n";
  JAM.call(v244.write, v244, [v245], JAM.policy.p15);
  var i$$10 = 0;
  var v450 = arrayOfItems$$1.length;
  var v254 = i$$10 < v450;
  for (;v254;) {
    var tempNumber = 0;
    var v451 = arrayOfItems$$1[i$$10];
    var v246 = JAM.call(v451.match, v451, [/\/[^\/]+\//], JAM.policy.p17);
    var matchExp$$1 = v246 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v452 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p15);
    var v248 = v452 != -1;
    if (v248) {
      var v247 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p15);
      tempNumber = v247.length;
    }
    var percentage = 0;
    var v538 = originalLength + 1;
    var v620 = arrayOfItems$$1[i$$10];
    var v588 = JAM.call(v620.match, v620, [/\d+/], JAM.policy.p17);
    var v539 = parseFloat(v588);
    var v453 = v538 - v539;
    var v251 = v453 > 0;
    if (v251) {
      var v249 = 100 * tempNumber;
      var v454 = originalLength + 1;
      var v589 = arrayOfItems$$1[i$$10];
      var v540 = JAM.call(v589.match, v589, [/\d+/], JAM.policy.p17);
      var v455 = parseFloat(v540);
      var v250 = v454 - v455;
      percentage = v249 / v250;
    }
    var v252 = outputWindow.document;
    var v680 = arrayOfItems$$1[i$$10];
    var v671 = JAM.call(v680.match, v680, [/\([^\(]+\)\b/], JAM.policy.p17);
    var v661 = v671.toString();
    var v649 = JAM.call(v661.replace, v661, [/\(|\)/g, ""], JAM.policy.p16);
    var v637 = "<tr><td>" + v649;
    var v621 = v637 + "</td><td>";
    var v590 = v621 + tempNumber;
    var v541 = v590 + "</td><td>";
    var v542 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p11);
    var v456 = v541 + v542;
    var v253 = v456 + "</td></tr>\n";
    JAM.call(v252.write, v252, [v253], JAM.policy.p15);
    i$$10++;
    var v457 = arrayOfItems$$1.length;
    v254 = i$$10 < v457;
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
  var v458 = sequence$$17.length;
  var v262 = v458 > 0;
  for (;v262;) {
    maxNum$$1 = sequence$$17.length;
    var v459 = Math.random();
    var v256 = v459 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v256], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v257 = randNum$$1 + 1;
    var v258 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v257, v258], JAM.policy.p16);
    sequence$$17 = tempString1 + tempString2;
    var v460 = tempSeq.length;
    var v261 = v460 == 60;
    if (v261) {
      var v259 = outputWindow.document;
      var v260 = tempSeq + "\n";
      JAM.call(v259.write, v259, [v260], JAM.policy.p15);
      tempSeq = "";
    }
    var v461 = sequence$$17.length;
    v262 = v461 > 0;
  }
  var v263 = outputWindow.document;
  var v264 = tempSeq + "\n";
  JAM.call(v263.write, v263, [v264], JAM.policy.p15);
  return true;
}
function threeToOne() {
  var theDocument = document;
  var newProtein = "";
  var maxInput$$3 = 1E5;
  var v462 = testScript();
  var v265 = v462 == false;
  if (v265) {
    return;
  }
  var v650 = theDocument.forms;
  var v638 = v650[0];
  var v622 = v638.elements;
  var v591 = v622[0];
  var v543 = checkFormElement(v591);
  var v463 = v543 == false;
  var v545 = !v463;
  if (v545) {
    var v662 = theDocument.forms;
    var v651 = v662[0];
    var v639 = v651.elements;
    var v623 = v639[0];
    var v592 = v623.value;
    var v544 = checkTextLength(v592, maxInput$$3);
    v463 = v544 == false;
  }
  var v266 = v463;
  if (v266) {
    return;
  }
  openWindow();
  openPre();
  var v624 = theDocument.forms;
  var v593 = v624[0];
  var v546 = v593.elements;
  var v464 = v546[0];
  var v267 = v464.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v267);
  var i$$11 = 0;
  var v465 = arrayOfFasta$$1.length;
  var v273 = i$$11 < v465;
  for (;v273;) {
    var v268 = arrayOfFasta$$1[i$$11];
    newProtein = getTripletSequenceFromFasta(v268);
    var v269 = arrayOfFasta$$1[i$$11];
    title = getFastaTitleFromTriplets(v269);
    newProtein = filterTriplets(newProtein);
    var v270 = outputWindow.document;
    var v271 = getInfoFromTitleAndSequenceTriplets(newProtein);
    JAM.call(v270.write, v270, [v271], JAM.policy.p15);
    writeThreeToOne(newProtein);
    var v272 = outputWindow.document;
    JAM.call(v272.write, v272, ["\n\n"], JAM.policy.p10);
    i$$11++;
    var v466 = arrayOfFasta$$1.length;
    v273 = i$$11 < v466;
  }
  closePre();
  closeWindow();
  return;
}
function writeThreeToOne(proteinSequence$$1) {
  function v2(str$$8, p1$$2, p2, p3, offset$$10, s$$4) {
    var v467 = p1$$2.toUpperCase();
    var v468 = p2.toLowerCase();
    var v274 = v467 + v468;
    var v275 = p3.toLowerCase();
    return v274 + v275;
  }
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/(.)(.)(.)/g, v2], JAM.policy.p16);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Ala/g, " A "], JAM.policy.p16);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Asx/g, " B "], JAM.policy.p16);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Cys/g, " C "], JAM.policy.p16);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Asp/g, " D "], JAM.policy.p16);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Glu/g, " E "], JAM.policy.p16);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Phe/g, " F "], JAM.policy.p16);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Gly/g, " G "], JAM.policy.p16);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/His/g, " H "], JAM.policy.p16);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Ile/g, " I "], JAM.policy.p16);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Lys/g, " K "], JAM.policy.p16);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Leu/g, " L "], JAM.policy.p16);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Met/g, " M "], JAM.policy.p16);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Asn/g, " N "], JAM.policy.p16);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Pro/g, " P "], JAM.policy.p16);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Gln/g, " Q "], JAM.policy.p16);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Arg/g, " R "], JAM.policy.p16);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Ser/g, " S "], JAM.policy.p16);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Thr/g, " T "], JAM.policy.p16);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Val/g, " V "], JAM.policy.p16);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Trp/g, " W "], JAM.policy.p16);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Xaa/g, " X "], JAM.policy.p16);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Tyr/g, " Y "], JAM.policy.p16);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/Glx/g, " Z "], JAM.policy.p16);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/\*\*\*/g, " * "], JAM.policy.p16);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/\s/g, ""], JAM.policy.p16);
  var v276 = outputWindow.document;
  var v277 = addReturns(proteinSequence$$1);
  JAM.call(v276.write, v276, [v277], JAM.policy.p15);
  return;
}
function filterTriplets(tripletSequence) {
  tripletSequence = JAM.call(tripletSequence.replace, tripletSequence, [/\s|\d/gi, ""], JAM.policy.p16);
  return tripletSequence;
}
function getFastaTitleFromTriplets(tripletSequence$$1) {
  fastaSequenceTitle = "Untitled";
  var v469 = JAM.call(tripletSequence$$1.search, tripletSequence$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v279 = v469 != -1;
  if (v279) {
    var v278 = JAM.call(tripletSequence$$1.match, tripletSequence$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
    fastaSequenceTitle = v278.toString();
    fastaSequenceTitle = JAM.call(fastaSequenceTitle.replace, fastaSequenceTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p16);
    fastaSequenceTitle = filterFastaTitle();
  }
  return fastaSequenceTitle;
}
function getTripletSequenceFromFasta(tripletSequence$$2) {
  var v470 = JAM.call(tripletSequence$$2.search, tripletSequence$$2, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v280 = v470 != -1;
  if (v280) {
    tripletSequence$$2 = JAM.call(tripletSequence$$2.replace, tripletSequence$$2, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return tripletSequence$$2;
}
function getInfoFromTitleAndSequenceTriplets(sequence$$18) {
  var fastaSequenceTitle$$4 = title;
  var stringToReturn$$5 = "&gt;results for sequence ";
  var v471 = JAM.call(fastaSequenceTitle$$4.search, fastaSequenceTitle$$4, [/[^\s]/], JAM.policy.p17);
  var v282 = v471 != -1;
  if (v282) {
    var v472 = stringToReturn$$5 + '"';
    var v281 = v472 + fastaSequenceTitle$$4;
    stringToReturn$$5 = v281 + '"';
  }
  var v473 = stringToReturn$$5 + ' starting "';
  var v474 = JAM.call(sequence$$18.substring, sequence$$18, [0, 12], JAM.policy.p13);
  var v283 = v473 + v474;
  stringToReturn$$5 = v283 + '"';
  return stringToReturn$$5 + "\n";
}
JAM.set(document, "onload", v3);
var v284 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p10);
JAM.set(v284, "onclick", v4);
var v285 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p10);
JAM.set(v285, "onclick", v5)
