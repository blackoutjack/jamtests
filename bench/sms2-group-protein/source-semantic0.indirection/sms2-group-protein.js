function v4() {
  var v544 = document.forms;
  var v465 = v544[0];
  var v281 = v465.elements;
  var v5 = v281[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    groupProtein(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v282 = document.main_form;
  var v7 = v282.main_submit;
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
  var v283 = arrayOfSequences.length;
  var v9 = v283 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v284 = arrayOfTitles.length;
  var v11 = i$$1 < v284;
  for (;v11;) {
    var v597 = arrayOfTitles[i$$1];
    var v545 = JAM.call(v597.search, v597, [/\S/], JAM.policy.p17);
    var v466 = v545 == -1;
    var v547 = !v466;
    if (v547) {
      var v598 = arrayOfSequences[i$$1];
      var v546 = JAM.call(v598.search, v598, [/\S/], JAM.policy.p17);
      v466 = v546 == -1;
    }
    var v285 = v466;
    var v468 = !v285;
    if (v468) {
      var v548 = arrayOfSequences[i$$1];
      var v467 = v548.length;
      v285 = v467 != lengthOfAlign;
    }
    var v10 = v285;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v286 = arrayOfTitles.length;
    v11 = i$$1 < v286;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v634 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17);
  var v599 = v634 == -1;
  var v636 = !v599;
  if (v636) {
    var v635 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17);
    v599 = v635 == -1;
  }
  var v549 = v599;
  var v601 = !v549;
  if (v601) {
    var v600 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17);
    v549 = v600 == -1;
  }
  var v469 = v549;
  var v551 = !v469;
  if (v551) {
    var v550 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17);
    v469 = v550 == -1;
  }
  var v287 = v469;
  var v471 = !v287;
  if (v471) {
    var v470 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17);
    v287 = v470 == -1;
  }
  var v12 = v287;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v472 = formElement.value;
  var v288 = JAM.call(v472.search, v472, [/\S/], JAM.policy.p17);
  var v13 = v288 == -1;
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
  var v289 = arrayOfPatterns.length;
  var v16 = z$$2 < v289;
  for (;v16;) {
    var v473 = arrayOfPatterns[z$$2];
    var v290 = JAM.call(v473.search, v473, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17);
    var v14 = v290 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v474 = arrayOfPatterns[z$$2];
    var v291 = moreExpressionCheck(v474);
    var v15 = v291 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v292 = arrayOfPatterns.length;
    v16 = z$$2 < v292;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v293 = arrayOfPatterns.length;
  var v22 = j < v293;
  for (;v22;) {
    var v475 = arrayOfPatterns[j];
    var v294 = JAM.call(v475.match, v475, [/\/.+\//], JAM.policy.p17);
    var v19 = v294 + "gi";
    if (JAM.isEval(eval)) {
      var v731 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v731 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v731;
    var v295 = arrayOfPatterns[j];
    var v20 = JAM.call(v295.match, v295, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v732 = v20.toString();
    geneticCodeMatchResult[j] = v732;
    var v21 = geneticCodeMatchResult[j];
    var v733 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v733;
    j++;
    var v296 = arrayOfPatterns.length;
    v22 = j < v296;
  }
  var i$$2 = 0;
  var v476 = testSequence.length;
  var v297 = v476 - 3;
  var v29 = i$$2 <= v297;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p15);
    j = 0;
    var v298 = geneticCodeMatchExp.length;
    var v27 = j < v298;
    for (;v27;) {
      var v477 = geneticCodeMatchExp[j];
      var v299 = JAM.call(codon.search, codon, [v477], JAM.policy.p16);
      var v26 = v299 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v300 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v300 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v301 = geneticCodeMatchExp.length;
      v27 = j < v301;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v478 = testSequence.length;
    var v302 = v478 - 3;
    v29 = i$$2 <= v302;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v303 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v303;
  for (;v31;) {
    var v479 = arrayOfPatterns$$1[z$$3];
    var v304 = JAM.call(v479.search, v479, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17);
    var v30 = v304 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v305 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v305;
  }
  var i$$3 = 0;
  var v306 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v306;
  for (;v35;) {
    var v480 = arrayOfPatterns$$1[i$$3];
    var v307 = "[" + v480;
    var v32 = v307 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v308 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v308;
    for (;v34;) {
      var v481 = arrayOfPatterns$$1[j$$1];
      var v309 = JAM.call(v481.search, v481, [re], JAM.policy.p16);
      var v33 = v309 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v310 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v310;
    }
    i$$3++;
    var v311 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v311;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v312 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v312;
  for (;v38;) {
    var v482 = arrayOfPatterns$$2[z$$4];
    var v313 = JAM.call(v482.search, v482, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17);
    var v36 = v313 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v483 = arrayOfPatterns$$2[z$$4];
    var v314 = moreExpressionCheck(v483);
    var v37 = v314 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v315 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v315;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v552 = getSequenceFromFasta(text$$7);
  var v484 = JAM.call(v552.replace, v552, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v316 = v484.length;
  var v40 = v316 > maxInput;
  if (v40) {
    var v317 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v317 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v318 = text$$8.length;
  var v42 = v318 > maxInput$$1;
  if (v42) {
    var v319 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v319 + " characters.";
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
  var v320 = alignArray.length;
  var v49 = v320 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v321 = alignArray.length;
  var v51 = i$$4 < v321;
  for (;v51;) {
    var v485 = alignArray[i$$4];
    var v322 = JAM.call(v485.search, v485, [/[^\s]+\s/], JAM.policy.p17);
    var v50 = v322 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v323 = alignArray.length;
    v51 = i$$4 < v323;
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
  var v324 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v54 = v324 != -1;
  if (v54) {
    var v53 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p16);
    for (;v53;) {
      var v52 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v52], JAM.policy.p16);
      v53 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p16);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v325 = sequence$$2.length;
  var v55 = "&gt;results for " + v325;
  var stringToReturn = v55 + " residue sequence ";
  var v326 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p17);
  var v57 = v326 != -1;
  if (v57) {
    var v327 = stringToReturn + '"';
    var v56 = v327 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v328 = stringToReturn + ' starting "';
  var v329 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v328 + v329;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v330 = sequenceOne.length;
  var v59 = "Search results for " + v330;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v331 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p17);
  var v61 = v331 != -1;
  if (v61) {
    var v332 = stringToReturn$$1 + '"';
    var v60 = v332 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v333 = stringToReturn$$1 + ' starting "';
  var v334 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v333 + v334;
  stringToReturn$$1 = v62 + '"\n';
  var v335 = stringToReturn$$1 + "and ";
  var v336 = sequenceTwo.length;
  var v63 = v335 + v336;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v337 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p17);
  var v65 = v337 != -1;
  if (v65) {
    var v338 = stringToReturn$$1 + '"';
    var v64 = v338 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v339 = stringToReturn$$1 + ' starting "';
  var v340 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v66 = v339 + v340;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v341 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v341;
  for (;v70;) {
    var v486 = arrayOfPatterns$$3[j$$2];
    var v342 = JAM.call(v486.match, v486, [/\/.+\//], JAM.policy.p17);
    var v69 = v342 + "gi";
    if (JAM.isEval(eval)) {
      var v734 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v734 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v734;
    j$$2++;
    var v343 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v343;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v344 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v344;
  for (;v74;) {
    var v345 = arrayOfPatterns$$4[j$$3];
    var v72 = JAM.call(v345.match, v345, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v735 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v735;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v736 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v736;
    j$$3++;
    var v346 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v346;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v347 = sequence$$3.length;
  var v75 = "Results for " + v347;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v348 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p17);
  var v77 = v348 != -1;
  if (v77) {
    var v349 = stringToReturn$$2 + '"';
    var v76 = v349 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v350 = stringToReturn$$2 + ' starting "';
  var v351 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v78 = v350 + v351;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v487 = "Results for " + topology;
  var v352 = v487 + " ";
  var v353 = sequence$$4.length;
  var v80 = v352 + v353;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v354 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p17);
  var v82 = v354 != -1;
  if (v82) {
    var v355 = stringToReturn$$3 + '"';
    var v81 = v355 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v356 = stringToReturn$$3 + ' starting "';
  var v357 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v356 + v357;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v358 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v358;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v359 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p17);
  var v87 = v359 != -1;
  if (v87) {
    var v360 = stringToReturn$$4 + '"';
    var v86 = v360 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v361 = stringToReturn$$4 + ' starting "';
  var v362 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v361 + v362;
  stringToReturn$$4 = v88 + '"\n';
  var v363 = stringToReturn$$4 + "and ";
  var v364 = sequenceTwo$$1.length;
  var v89 = v363 + v364;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v365 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p17);
  var v91 = v365 != -1;
  if (v91) {
    var v366 = stringToReturn$$4 + '"';
    var v90 = v366 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v367 = stringToReturn$$4 + ' starting "';
  var v368 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v92 = v367 + v368;
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
    var v369 = Math.random();
    var v370 = components.length;
    var v94 = v369 * v370;
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p16);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p11);
}
function getSequenceFromFasta(sequenceRecord) {
  var v371 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v96 = v371 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v372 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v98 = v372 != -1;
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
  var v709 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p17);
  var v702 = v709 != -1;
  var v711 = !v702;
  if (v711) {
    var v710 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17);
    v702 = v710 != -1;
  }
  var v693 = v702;
  var v704 = !v693;
  if (v704) {
    var v703 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17);
    v693 = v703 != -1;
  }
  var v684 = v693;
  var v695 = !v684;
  if (v695) {
    var v694 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17);
    v684 = v694 != -1;
  }
  var v673 = v684;
  var v686 = !v673;
  if (v686) {
    var v685 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17);
    v673 = v685 != -1;
  }
  var v655 = v673;
  var v675 = !v655;
  if (v675) {
    var v674 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17);
    v655 = v674 != -1;
  }
  var v637 = v655;
  var v657 = !v637;
  if (v657) {
    var v656 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17);
    v637 = v656 != -1;
  }
  var v602 = v637;
  var v639 = !v602;
  if (v639) {
    var v638 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17);
    v602 = v638 != -1;
  }
  var v553 = v602;
  var v604 = !v553;
  if (v604) {
    var v603 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17);
    v553 = v603 != -1;
  }
  var v488 = v553;
  var v555 = !v488;
  if (v555) {
    var v554 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17);
    v488 = v554 != -1;
  }
  var v373 = v488;
  var v490 = !v373;
  if (v490) {
    var v489 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17);
    v373 = v489 != -1;
  }
  var v99 = v373;
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
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v556 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v491 = v556 + "<head>\n";
  var v374 = v491 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v374 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p16);
  if (isColor) {
    var v106 = outputWindow.document;
    var v724 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v720 = v724 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v716 = v720 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v712 = v716 + "div.info {font-weight: bold}\n";
    var v705 = v712 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v696 = v705 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v687 = v696 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v676 = v687 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v658 = v676 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v640 = v658 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v605 = v640 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v557 = v605 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v492 = v557 + "td.many {color: #000000}\n";
    var v375 = v492 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v375 + "</style>\n";
    JAM.call(v106.write, v106, [v107], JAM.policy.p16);
  } else {
    var v108 = outputWindow.document;
    var v728 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v725 = v728 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v721 = v725 + "div.title {display: none}\n";
    var v717 = v721 + "div.info {font-weight: bold}\n";
    var v713 = v717 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v706 = v713 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v697 = v706 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v688 = v697 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v677 = v688 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v659 = v677 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v641 = v659 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v606 = v641 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v558 = v606 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v493 = v558 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v376 = v493 + "img {display: none}\n";
    var v109 = v376 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p16);
  }
  var v110 = outputWindow.document;
  var v559 = "</head>\n" + '<body class="main">\n';
  var v494 = v559 + '<div class="title">';
  var v377 = v494 + title$$6;
  var v111 = v377 + " results</div>\n";
  JAM.call(v110.write, v110, [v111], JAM.policy.p16);
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
  var v560 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v495 = v560 + "<head>\n";
  var v378 = v495 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v378 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p16);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v726 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v722 = v726 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v718 = v722 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v714 = v718 + "div.info {font-weight: bold}\n";
    var v707 = v714 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v698 = v707 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v689 = v698 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v678 = v689 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v660 = v678 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v642 = v660 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v607 = v642 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v561 = v607 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v496 = v561 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v379 = v496 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v379 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p16);
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
    var v690 = v699 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v679 = v690 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v661 = v679 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v643 = v661 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v608 = v643 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v562 = v608 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v497 = v562 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v380 = v497 + "img {display: none}\n";
    var v117 = v380 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p16);
  }
  var v118 = outputWindow.document;
  var v563 = "</head>\n" + '<body class="main">\n';
  var v498 = v563 + '<div class="title">';
  var v381 = v498 + title$$8;
  var v119 = v381 + " results</div>\n";
  JAM.call(v118.write, v118, [v119], JAM.policy.p16);
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
  var v382 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p17);
  var v120 = v382 != -1;
  if (v120) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p17);
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p16);
  var v383 = testArray[0];
  var v124 = v383 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v384 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p16);
  var v125 = v384 == -1;
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
  var v385 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9);
  var v128 = v385 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v386 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9);
  var v129 = v386 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v387 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p17);
  var v130 = v387 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v609 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17);
  var v564 = v609 == -1;
  var v611 = !v564;
  if (v611) {
    var v610 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17);
    v564 = v610 == -1;
  }
  var v499 = v564;
  var v566 = !v499;
  if (v566) {
    var v565 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17);
    v499 = v565 == -1;
  }
  var v388 = v499;
  var v501 = !v388;
  if (v501) {
    var v500 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17);
    v388 = v500 == -1;
  }
  var v131 = v388;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v389 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p17);
  var v132 = v389 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v390 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v390 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v391 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p17);
  var v135 = v391 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v392 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p17);
  var v136 = v392 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v612 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17);
  var v567 = v612 == -1;
  var v614 = !v567;
  if (v614) {
    var v613 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17);
    v567 = v613 == -1;
  }
  var v502 = v567;
  var v569 = !v502;
  if (v569) {
    var v568 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17);
    v502 = v568 == -1;
  }
  var v393 = v502;
  var v504 = !v393;
  if (v504) {
    var v503 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17);
    v393 = v503 == -1;
  }
  var v137 = v393;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v615 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17);
  var v570 = v615 == -1;
  var v617 = !v570;
  if (v617) {
    var v616 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17);
    v570 = v616 == -1;
  }
  var v505 = v570;
  var v572 = !v505;
  if (v572) {
    var v571 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17);
    v505 = v571 == -1;
  }
  var v394 = v505;
  var v507 = !v394;
  if (v507) {
    var v506 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17);
    v394 = v506 == -1;
  }
  var v138 = v394;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v395 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p17);
  var v139 = v395 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v618 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17);
  var v573 = v618 == -1;
  var v620 = !v573;
  if (v620) {
    var v619 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17);
    v573 = v619 == -1;
  }
  var v508 = v573;
  var v575 = !v508;
  if (v575) {
    var v574 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17);
    v508 = v574 == -1;
  }
  var v396 = v508;
  var v510 = !v396;
  if (v510) {
    var v509 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17);
    v396 = v509 == -1;
  }
  var v140 = v396;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v397 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p17);
  var v141 = v397 == -1;
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
    var v398 = basePerLine / groupSize;
    var v145 = j$$6 <= v398;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v399 = k + i$$5;
        var v143 = JAM.call(text$$10.charAt, text$$10, [v399], JAM.policy.p16);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v400 = basePerLine / groupSize;
      v145 = j$$6 <= v400;
    }
    var v146 = outputWindow.document;
    var v147 = lineOfText + "\n";
    JAM.call(v146.write, v146, [v147], JAM.policy.p16);
    lineOfText = "";
    v148 = i$$5 < stopBase;
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
    var v401 = adjustment < 0;
    if (v401) {
      v401 = adjusted >= 0;
    }
    var v149 = v401;
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
    var v402 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v402;
    for (;v158;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v403 = i$$6 + k$$1;
        var v150 = v403 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v151 = lineOfText$$1;
        var v404 = k$$1 + i$$6;
        var v152 = JAM.call(text$$12.charAt, text$$12, [v404], JAM.policy.p16);
        lineOfText$$1 = v151 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v156 = numberPosition$$1 == "above";
      if (v156) {
        var v154 = aboveNum;
        var v405 = adjustNumbering(i$$6, numberingAdjustment);
        var v155 = rightNum(v405, "", groupSize$$2, tabIn$$3);
        aboveNum = v154 + v155;
      }
      var v157 = i$$6 >= stopBase$$2;
      if (v157) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v406 = basePerLine$$2 / groupSize$$2;
      v158 = j$$7 <= v406;
    }
    var v181 = numberPosition$$1 == "left";
    if (v181) {
      var v159 = outputWindow.document;
      var v576 = adjustNumbering(lineNum, numberingAdjustment);
      var v511 = rightNum(v576, "", 8, tabIn$$3);
      var v407 = v511 + lineOfText$$1;
      var v160 = v407 + "\n";
      JAM.call(v159.write, v159, [v160], JAM.policy.p16);
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v577 = adjustNumbering(lineNum, numberingAdjustment);
        var v512 = rightNum(v577, "", 8, tabIn$$3);
        var v513 = complement(lineOfText$$1);
        var v408 = v512 + v513;
        var v162 = v408 + "\n";
        JAM.call(v161.write, v161, [v162], JAM.policy.p16);
        var v163 = outputWindow.document;
        JAM.call(v163.write, v163, ["\n"], JAM.policy.p11);
      }
    } else {
      var v180 = numberPosition$$1 == "right";
      if (v180) {
        var v165 = outputWindow.document;
        var v514 = lineOfText$$1;
        var v515 = adjustNumbering(i$$6, numberingAdjustment);
        var v409 = v514 + v515;
        var v166 = v409 + "\n";
        JAM.call(v165.write, v165, [v166], JAM.policy.p16);
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v516 = complement(lineOfText$$1);
          var v517 = adjustNumbering(i$$6, numberingAdjustment);
          var v410 = v516 + v517;
          var v168 = v410 + "\n";
          JAM.call(v167.write, v167, [v168], JAM.policy.p16);
          var v169 = outputWindow.document;
          JAM.call(v169.write, v169, ["\n"], JAM.policy.p11);
        }
      } else {
        var v179 = numberPosition$$1 == "above";
        if (v179) {
          var v171 = outputWindow.document;
          var v172 = aboveNum + "\n";
          JAM.call(v171.write, v171, [v172], JAM.policy.p16);
          var v173 = outputWindow.document;
          var v174 = lineOfText$$1 + "\n";
          JAM.call(v173.write, v173, [v174], JAM.policy.p16);
          var v178 = strands$$1 == "two";
          if (v178) {
            var v175 = outputWindow.document;
            var v411 = complement(lineOfText$$1);
            var v176 = v411 + "\n";
            JAM.call(v175.write, v175, [v176], JAM.policy.p16);
            var v177 = outputWindow.document;
            JAM.call(v177.write, v177, ["\n"], JAM.policy.p11);
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
    var v412 = basePerLine$$3 / groupSize$$3;
    var v189 = j$$8 <= v412;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        var v413 = i$$7 + k$$2;
        var v183 = v413 >= stopBase$$3;
        if (v183) {
          break;
        }
        var v414 = k$$2 + i$$7;
        var v184 = JAM.call(text$$13.charAt, text$$13, [v414], JAM.policy.p16);
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
      var v415 = basePerLine$$3 / groupSize$$3;
      v189 = j$$8 <= v415;
    }
    var v200 = numberPosition$$2 == "left";
    if (v200) {
      var v190 = outputWindow.document;
      var v518 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v416 = v518 + lineOfText$$2;
      var v191 = v416 + "\n";
      JAM.call(v190.write, v190, [v191], JAM.policy.p16);
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v417 = lineOfText$$2 + i$$7;
        var v193 = v417 + "\n";
        JAM.call(v192.write, v192, [v193], JAM.policy.p16);
      } else {
        var v198 = numberPosition$$2 == "above";
        if (v198) {
          var v194 = outputWindow.document;
          var v195 = aboveNum$$1 + "\n";
          JAM.call(v194.write, v194, [v195], JAM.policy.p16);
          var v196 = outputWindow.document;
          var v197 = lineOfText$$2 + "\n";
          JAM.call(v196.write, v196, [v197], JAM.policy.p16);
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
  var v578 = sequence$$13.length;
  var v519 = v578 <= firstIndexToMutate;
  var v579 = !v519;
  if (v579) {
    v519 = lastIndexToMutate < 0;
  }
  var v418 = v519;
  var v520 = !v418;
  if (v520) {
    v418 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v202 = v418;
  if (v202) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    var v419 = Math.random();
    var v203 = v419 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v203], JAM.policy.p17);
    var v420 = randNum < firstIndexToMutate;
    var v521 = !v420;
    if (v521) {
      v420 = randNum > lastIndexToMutate;
    }
    var v204 = v420;
    if (v204) {
      numMut++;
      i$$8++;
      v210 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p17);
    needNewChar = true;
    for (;needNewChar;) {
      var v421 = Math.random();
      var v422 = components$$1.length;
      var v205 = v421 * v422;
      componentsIndex = JAM.call(Math.round, Math, [v205], JAM.policy.p17);
      var v423 = components$$1.length;
      var v206 = componentsIndex == v423;
      if (v206) {
        componentsIndex = 0;
      }
      var v424 = components$$1[componentsIndex];
      var v207 = v424 != currentChar;
      if (v207) {
        needNewChar = false;
      }
    }
    var v425 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v426 = components$$1[componentsIndex];
    var v208 = v425 + v426;
    var v427 = randNum + 1;
    var v428 = sequence$$13.length;
    var v209 = JAM.call(sequence$$13.substring, sequence$$13, [v427, v428], JAM.policy.p27);
    sequence$$13 = v208 + v209;
    i$$8++;
    v210 = i$$8 < numMut;
  }
  var v211 = outputWindow.document;
  var v212 = addReturns(sequence$$13);
  JAM.call(v211.write, v211, [v212], JAM.policy.p16);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v217 = j$$9 < lengthOut$$1;
  for (;v217;) {
    var v429 = Math.random();
    var v430 = components$$2.length;
    var v213 = v429 * v430;
    tempNum$$1 = JAM.call(Math.floor, Math, [v213], JAM.policy.p17);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v431 = sequence$$14.length;
    var v216 = v431 == 60;
    if (v216) {
      var v214 = outputWindow.document;
      var v215 = sequence$$14 + "\n";
      JAM.call(v214.write, v214, [v215], JAM.policy.p16);
      sequence$$14 = "";
    }
    j$$9++;
    v217 = j$$9 < lengthOut$$1;
  }
  var v218 = outputWindow.document;
  var v219 = sequence$$14 + "\n";
  JAM.call(v218.write, v218, [v219], JAM.policy.p16);
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
    var v580 = sequence$$15.length;
    var v522 = v580 - lookAhead;
    var v523 = sequence$$15.length;
    var v432 = JAM.call(sequence$$15.substring, sequence$$15, [v522, v523], JAM.policy.p27);
    var v221 = v432 + sequence$$15;
    var v222 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v221 + v222;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  JAM.call(v224.write, v224, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v225 = outputWindow.document;
  var v581 = '<tr><td class="title" width="200px">' + "Site:";
  var v524 = v581 + '</td><td class="title">';
  var v433 = v524 + "Positions:";
  var v226 = v433 + "</td></tr>\n";
  JAM.call(v225.write, v225, [v226], JAM.policy.p16);
  var i$$9 = 0;
  var v434 = arrayOfItems.length;
  var v242 = i$$9 < v434;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v435 = arrayOfItems[i$$9];
    var v227 = JAM.call(v435.match, v435, [/\/.+\//], JAM.policy.p17);
    matchExp = v227 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v582 = arrayOfItems[i$$9];
    var v525 = JAM.call(v582.match, v582, [/\)\D*\d+/], JAM.policy.p17);
    var v436 = v525.toString();
    var v228 = JAM.call(v436.replace, v436, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v228);
    var v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
    for (;v234;) {
      var v229 = matchExp.lastIndex;
      matchPosition = v229 - cutDistance;
      var v437 = matchPosition >= lowerLimit;
      if (v437) {
        v437 = matchPosition < upperLimit;
      }
      var v232 = v437;
      if (v232) {
        timesFound++;
        var v230 = tempString$$1 + ", ";
        var v438 = matchPosition - shiftValue;
        var v231 = v438 + 1;
        tempString$$1 = v230 + v231;
      }
      var v439 = matchExp.lastIndex;
      var v526 = RegExp.lastMatch;
      var v440 = v526.length;
      var v233 = v439 - v440;
      matchExp.lastIndex = v233 + 1;
      v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
    }
    var v441 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p17);
    var v235 = v441 != -1;
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
    var v680 = '<tr><td class="' + backGroundClass;
    var v662 = v680 + '">';
    var v700 = arrayOfItems[i$$9];
    var v691 = JAM.call(v700.match, v700, [/\([^\(]+\)/], JAM.policy.p17);
    var v681 = v691.toString();
    var v663 = JAM.call(v681.replace, v681, [/\(|\)/g, ""], JAM.policy.p15);
    var v644 = v662 + v663;
    var v621 = v644 + '</td><td class="';
    var v583 = v621 + backGroundClass;
    var v527 = v583 + '">';
    var v442 = v527 + tempString$$1;
    var v241 = v442 + "</td></tr>\n";
    JAM.call(v240.write, v240, [v241], JAM.policy.p16);
    timesFound = 0;
    i$$9++;
    var v443 = arrayOfItems.length;
    v242 = i$$9 < v443;
  }
  var v243 = outputWindow.document;
  JAM.call(v243.write, v243, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v244 = outputWindow.document;
  JAM.call(v244.write, v244, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v245 = outputWindow.document;
  var v645 = '<tr><td class="title">' + "Pattern:";
  var v622 = v645 + '</td><td class="title">';
  var v584 = v622 + "Times found:";
  var v528 = v584 + '</td><td class="title">';
  var v444 = v528 + "Percentage:";
  var v246 = v444 + "</td></tr>\n";
  JAM.call(v245.write, v245, [v246], JAM.policy.p16);
  var i$$10 = 0;
  var v445 = arrayOfItems$$1.length;
  var v255 = i$$10 < v445;
  for (;v255;) {
    var tempNumber = 0;
    var v446 = arrayOfItems$$1[i$$10];
    var v247 = JAM.call(v446.match, v446, [/\/[^\/]+\//], JAM.policy.p17);
    var matchExp$$1 = v247 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v447 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p16);
    var v249 = v447 != -1;
    if (v249) {
      var v248 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p16);
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v529 = originalLength + 1;
    var v623 = arrayOfItems$$1[i$$10];
    var v585 = JAM.call(v623.match, v623, [/\d+/], JAM.policy.p17);
    var v530 = parseFloat(v585);
    var v448 = v529 - v530;
    var v252 = v448 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v449 = originalLength + 1;
      var v586 = arrayOfItems$$1[i$$10];
      var v531 = JAM.call(v586.match, v586, [/\d+/], JAM.policy.p17);
      var v450 = parseFloat(v531);
      var v251 = v449 - v450;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v701 = arrayOfItems$$1[i$$10];
    var v692 = JAM.call(v701.match, v701, [/\([^\(]+\)\b/], JAM.policy.p17);
    var v682 = v692.toString();
    var v664 = JAM.call(v682.replace, v682, [/\(|\)/g, ""], JAM.policy.p15);
    var v646 = "<tr><td>" + v664;
    var v624 = v646 + "</td><td>";
    var v587 = v624 + tempNumber;
    var v532 = v587 + "</td><td>";
    var v533 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9);
    var v451 = v532 + v533;
    var v254 = v451 + "</td></tr>\n";
    JAM.call(v253.write, v253, [v254], JAM.policy.p16);
    i$$10++;
    var v452 = arrayOfItems$$1.length;
    v255 = i$$10 < v452;
  }
  var v256 = outputWindow.document;
  JAM.call(v256.write, v256, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v453 = sequence$$17.length;
  var v263 = v453 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v454 = Math.random();
    var v257 = v454 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v257], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v258 = randNum$$1 + 1;
    var v259 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v258, v259], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v455 = tempSeq.length;
    var v262 = v455 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      JAM.call(v260.write, v260, [v261], JAM.policy.p16);
      tempSeq = "";
    }
    var v456 = sequence$$17.length;
    v263 = v456 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  JAM.call(v264.write, v264, [v265], JAM.policy.p16);
  return true;
}
function groupProtein(theDocument) {
  var newProtein = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var v457 = testScript();
  var v266 = v457 == false;
  if (v266) {
    return false;
  }
  var v665 = theDocument.forms;
  var v647 = v665[0];
  var v625 = v647.elements;
  var v588 = v625[0];
  var v534 = checkFormElement(v588);
  var v458 = v534 == false;
  var v536 = !v458;
  if (v536) {
    var v683 = theDocument.forms;
    var v666 = v683[0];
    var v648 = v666.elements;
    var v626 = v648[0];
    var v589 = v626.value;
    var v535 = checkSequenceLength(v589, maxInput$$3);
    v458 = v535 == false;
  }
  var v267 = v458;
  if (v267) {
    return false;
  }
  openWindow("Group Protein");
  openPre();
  var v627 = theDocument.forms;
  var v590 = v627[0];
  var v537 = v590.elements;
  var v459 = v537[0];
  var v268 = v459.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v268);
  var i$$11 = 0;
  var v460 = arrayOfFasta$$1.length;
  var v278 = i$$11 < v460;
  for (;v278;) {
    var v269 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v269);
    var v270 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v270);
    newProtein = removeNonProtein(newProtein);
    var v271 = outputWindow.document;
    var v272 = getInfoFromTitleAndSequence(title$$9, newProtein);
    JAM.call(v271.write, v271, [v272], JAM.policy.p16);
    var v667 = theDocument.forms;
    var v649 = v667[0];
    var v628 = v649.elements;
    var v591 = v628[4];
    var v538 = v591.options;
    var v668 = theDocument.forms;
    var v650 = v668[0];
    var v629 = v650.elements;
    var v592 = v629[4];
    var v539 = v592.selectedIndex;
    var v461 = v538[v539];
    var v273 = v461.value;
    var v669 = theDocument.forms;
    var v651 = v669[0];
    var v630 = v651.elements;
    var v593 = v630[5];
    var v540 = v593.options;
    var v670 = theDocument.forms;
    var v652 = v670[0];
    var v631 = v652.elements;
    var v594 = v631[5];
    var v541 = v594.selectedIndex;
    var v462 = v540[v541];
    var v274 = v462.value;
    var v275 = newProtein.length;
    var v671 = theDocument.forms;
    var v653 = v671[0];
    var v632 = v653.elements;
    var v595 = v632[6];
    var v542 = v595.options;
    var v672 = theDocument.forms;
    var v654 = v672[0];
    var v633 = v654.elements;
    var v596 = v633[6];
    var v543 = v596.selectedIndex;
    var v463 = v542[v543];
    var v276 = v463.value;
    writeGroupNumProtein(newProtein, "", v273, v274, 0, v275, v276);
    var v277 = outputWindow.document;
    JAM.call(v277.write, v277, ["\n\n"], JAM.policy.p11);
    i$$11++;
    var v464 = arrayOfFasta$$1.length;
    v278 = i$$11 < v464;
  }
  closePre();
  closeWindow();
  return true;
}
JAM.set(document, "onload", v2);
var v279 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11);
JAM.set(v279, "onclick", v3);
var v280 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11);
JAM.set(v280, "onclick", v4)
