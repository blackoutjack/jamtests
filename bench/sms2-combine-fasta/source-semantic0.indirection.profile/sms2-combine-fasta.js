
JAM.startProfile('load');
function v4() {
  var v547 = document.forms;
  var v469 = v547[0];
  var v282 = v469.elements;
  var v5 = v282[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    combineFasta(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v283 = document.main_form;
  var v7 = v283.main_submit;
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
  var v284 = arrayOfSequences.length;
  var v9 = v284 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v285 = arrayOfTitles.length;
  var v11 = i$$1 < v285;
  for (;v11;) {
    var v596 = arrayOfTitles[i$$1];
    var v548 = JAM.call(v596.search, v596, [/\S/], JAM.policy.p17);
    var v470 = v548 == -1;
    var v550 = !v470;
    if (v550) {
      var v597 = arrayOfSequences[i$$1];
      var v549 = JAM.call(v597.search, v597, [/\S/], JAM.policy.p17);
      v470 = v549 == -1;
    }
    var v286 = v470;
    var v472 = !v286;
    if (v472) {
      var v551 = arrayOfSequences[i$$1];
      var v471 = v551.length;
      v286 = v471 != lengthOfAlign;
    }
    var v10 = v286;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v287 = arrayOfTitles.length;
    v11 = i$$1 < v287;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v631 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17);
  var v598 = v631 == -1;
  var v633 = !v598;
  if (v633) {
    var v632 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17);
    v598 = v632 == -1;
  }
  var v552 = v598;
  var v600 = !v552;
  if (v600) {
    var v599 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17);
    v552 = v599 == -1;
  }
  var v473 = v552;
  var v554 = !v473;
  if (v554) {
    var v553 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17);
    v473 = v553 == -1;
  }
  var v288 = v473;
  var v475 = !v288;
  if (v475) {
    var v474 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17);
    v288 = v474 == -1;
  }
  var v12 = v288;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v476 = formElement.value;
  var v289 = JAM.call(v476.search, v476, [/\S/], JAM.policy.p17);
  var v13 = v289 == -1;
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
  var v290 = arrayOfPatterns.length;
  var v16 = z$$2 < v290;
  for (;v16;) {
    var v477 = arrayOfPatterns[z$$2];
    var v291 = JAM.call(v477.search, v477, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17);
    var v14 = v291 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v478 = arrayOfPatterns[z$$2];
    var v292 = moreExpressionCheck(v478);
    var v15 = v292 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v293 = arrayOfPatterns.length;
    v16 = z$$2 < v293;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v294 = arrayOfPatterns.length;
  var v22 = j < v294;
  for (;v22;) {
    var v479 = arrayOfPatterns[j];
    var v295 = JAM.call(v479.match, v479, [/\/.+\//], JAM.policy.p17);
    var v19 = v295 + "gi";
    if (JAM.isEval(eval)) {
      var v720 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v720 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v720;
    var v296 = arrayOfPatterns[j];
    var v20 = JAM.call(v296.match, v296, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v721 = v20.toString();
    geneticCodeMatchResult[j] = v721;
    var v21 = geneticCodeMatchResult[j];
    var v722 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v722;
    j++;
    var v297 = arrayOfPatterns.length;
    v22 = j < v297;
  }
  var i$$2 = 0;
  var v480 = testSequence.length;
  var v298 = v480 - 3;
  var v29 = i$$2 <= v298;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p15);
    j = 0;
    var v299 = geneticCodeMatchExp.length;
    var v27 = j < v299;
    for (;v27;) {
      var v481 = geneticCodeMatchExp[j];
      var v300 = JAM.call(codon.search, codon, [v481], JAM.policy.p16);
      var v26 = v300 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v301 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v301 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v302 = geneticCodeMatchExp.length;
      v27 = j < v302;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v482 = testSequence.length;
    var v303 = v482 - 3;
    v29 = i$$2 <= v303;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v304 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v304;
  for (;v31;) {
    var v483 = arrayOfPatterns$$1[z$$3];
    var v305 = JAM.call(v483.search, v483, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17);
    var v30 = v305 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v306 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v306;
  }
  var i$$3 = 0;
  var v307 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v307;
  for (;v35;) {
    var v484 = arrayOfPatterns$$1[i$$3];
    var v308 = "[" + v484;
    var v32 = v308 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v309 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v309;
    for (;v34;) {
      var v485 = arrayOfPatterns$$1[j$$1];
      var v310 = JAM.call(v485.search, v485, [re], JAM.policy.p16);
      var v33 = v310 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v311 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v311;
    }
    i$$3++;
    var v312 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v312;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v313 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v313;
  for (;v38;) {
    var v486 = arrayOfPatterns$$2[z$$4];
    var v314 = JAM.call(v486.search, v486, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17);
    var v36 = v314 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v487 = arrayOfPatterns$$2[z$$4];
    var v315 = moreExpressionCheck(v487);
    var v37 = v315 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v316 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v316;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v555 = getSequenceFromFasta(text$$7);
  var v488 = JAM.call(v555.replace, v555, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v317 = v488.length;
  var v40 = v317 > maxInput;
  if (v40) {
    var v318 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v318 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v319 = text$$8.length;
  var v42 = v319 > maxInput$$1;
  if (v42) {
    var v320 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v320 + " characters.";
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
  var v321 = alignArray.length;
  var v49 = v321 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v322 = alignArray.length;
  var v51 = i$$4 < v322;
  for (;v51;) {
    var v489 = alignArray[i$$4];
    var v323 = JAM.call(v489.search, v489, [/[^\s]+\s/], JAM.policy.p17);
    var v50 = v323 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v324 = alignArray.length;
    v51 = i$$4 < v324;
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
  var v325 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v54 = v325 != -1;
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
  var v326 = sequence$$2.length;
  var v55 = "&gt;results for " + v326;
  var stringToReturn = v55 + " residue sequence ";
  var v327 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p17);
  var v57 = v327 != -1;
  if (v57) {
    var v328 = stringToReturn + '"';
    var v56 = v328 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v329 = stringToReturn + ' starting "';
  var v330 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v329 + v330;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v331 = sequenceOne.length;
  var v59 = "Search results for " + v331;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v332 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p17);
  var v61 = v332 != -1;
  if (v61) {
    var v333 = stringToReturn$$1 + '"';
    var v60 = v333 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v334 = stringToReturn$$1 + ' starting "';
  var v335 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v334 + v335;
  stringToReturn$$1 = v62 + '"\n';
  var v336 = stringToReturn$$1 + "and ";
  var v337 = sequenceTwo.length;
  var v63 = v336 + v337;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v338 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p17);
  var v65 = v338 != -1;
  if (v65) {
    var v339 = stringToReturn$$1 + '"';
    var v64 = v339 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v340 = stringToReturn$$1 + ' starting "';
  var v341 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v66 = v340 + v341;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v342 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v342;
  for (;v70;) {
    var v490 = arrayOfPatterns$$3[j$$2];
    var v343 = JAM.call(v490.match, v490, [/\/.+\//], JAM.policy.p17);
    var v69 = v343 + "gi";
    if (JAM.isEval(eval)) {
      var v723 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v723 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v723;
    j$$2++;
    var v344 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v344;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v345 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v345;
  for (;v74;) {
    var v346 = arrayOfPatterns$$4[j$$3];
    var v72 = JAM.call(v346.match, v346, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v724 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v724;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v725 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v725;
    j$$3++;
    var v347 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v347;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v348 = sequence$$3.length;
  var v75 = "Results for " + v348;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v349 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p17);
  var v77 = v349 != -1;
  if (v77) {
    var v350 = stringToReturn$$2 + '"';
    var v76 = v350 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v351 = stringToReturn$$2 + ' starting "';
  var v352 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v78 = v351 + v352;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v491 = "Results for " + topology;
  var v353 = v491 + " ";
  var v354 = sequence$$4.length;
  var v80 = v353 + v354;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v355 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p17);
  var v82 = v355 != -1;
  if (v82) {
    var v356 = stringToReturn$$3 + '"';
    var v81 = v356 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v357 = stringToReturn$$3 + ' starting "';
  var v358 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v357 + v358;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v359 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v359;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v360 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p17);
  var v87 = v360 != -1;
  if (v87) {
    var v361 = stringToReturn$$4 + '"';
    var v86 = v361 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v362 = stringToReturn$$4 + ' starting "';
  var v363 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v362 + v363;
  stringToReturn$$4 = v88 + '"\n';
  var v364 = stringToReturn$$4 + "and ";
  var v365 = sequenceTwo$$1.length;
  var v89 = v364 + v365;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v366 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p17);
  var v91 = v366 != -1;
  if (v91) {
    var v367 = stringToReturn$$4 + '"';
    var v90 = v367 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v368 = stringToReturn$$4 + ' starting "';
  var v369 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v92 = v368 + v369;
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
    var v370 = Math.random();
    var v371 = components.length;
    var v94 = v370 * v371;
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p16);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p9);
}
function getSequenceFromFasta(sequenceRecord) {
  var v372 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v96 = v372 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v373 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v98 = v373 != -1;
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
  var v698 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p17);
  var v691 = v698 != -1;
  var v700 = !v691;
  if (v700) {
    var v699 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17);
    v691 = v699 != -1;
  }
  var v682 = v691;
  var v693 = !v682;
  if (v693) {
    var v692 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17);
    v682 = v692 != -1;
  }
  var v673 = v682;
  var v684 = !v673;
  if (v684) {
    var v683 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17);
    v673 = v683 != -1;
  }
  var v662 = v673;
  var v675 = !v662;
  if (v675) {
    var v674 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17);
    v662 = v674 != -1;
  }
  var v648 = v662;
  var v664 = !v648;
  if (v664) {
    var v663 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17);
    v648 = v663 != -1;
  }
  var v634 = v648;
  var v650 = !v634;
  if (v650) {
    var v649 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17);
    v634 = v649 != -1;
  }
  var v601 = v634;
  var v636 = !v601;
  if (v636) {
    var v635 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17);
    v601 = v635 != -1;
  }
  var v556 = v601;
  var v603 = !v556;
  if (v603) {
    var v602 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17);
    v556 = v602 != -1;
  }
  var v492 = v556;
  var v558 = !v492;
  if (v558) {
    var v557 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17);
    v492 = v557 != -1;
  }
  var v374 = v492;
  var v494 = !v374;
  if (v494) {
    var v493 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17);
    v374 = v493 != -1;
  }
  var v99 = v374;
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
  var v559 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v495 = v559 + "<head>\n";
  var v375 = v495 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v375 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p16);
  if (isColor) {
    var v106 = outputWindow.document;
    var v713 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v709 = v713 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v705 = v709 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v701 = v705 + "div.info {font-weight: bold}\n";
    var v694 = v701 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v685 = v694 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v676 = v685 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v665 = v676 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v651 = v665 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v637 = v651 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v604 = v637 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v560 = v604 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v496 = v560 + "td.many {color: #000000}\n";
    var v376 = v496 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v376 + "</style>\n";
    JAM.call(v106.write, v106, [v107], JAM.policy.p16);
  } else {
    var v108 = outputWindow.document;
    var v717 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v714 = v717 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v710 = v714 + "div.title {display: none}\n";
    var v706 = v710 + "div.info {font-weight: bold}\n";
    var v702 = v706 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v695 = v702 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v686 = v695 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v677 = v686 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v666 = v677 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v652 = v666 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v638 = v652 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v605 = v638 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v561 = v605 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v497 = v561 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v377 = v497 + "img {display: none}\n";
    var v109 = v377 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p16);
  }
  var v110 = outputWindow.document;
  var v562 = "</head>\n" + '<body class="main">\n';
  var v498 = v562 + '<div class="title">';
  var v378 = v498 + title$$6;
  var v111 = v378 + " results</div>\n";
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
  var v563 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v499 = v563 + "<head>\n";
  var v379 = v499 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v379 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p16);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v715 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v711 = v715 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v707 = v711 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v703 = v707 + "div.info {font-weight: bold}\n";
    var v696 = v703 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v687 = v696 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v678 = v687 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v667 = v678 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v653 = v667 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v639 = v653 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v606 = v639 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v564 = v606 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v500 = v564 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v380 = v500 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v380 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p16);
  } else {
    var v116 = outputWindow.document;
    var v719 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v718 = v719 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v716 = v718 + "div.title {display: none}\n";
    var v712 = v716 + "div.info {font-weight: bold}\n";
    var v708 = v712 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v704 = v708 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v697 = v704 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v688 = v697 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v679 = v688 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v668 = v679 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v654 = v668 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v640 = v654 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v607 = v640 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v565 = v607 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v501 = v565 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v381 = v501 + "img {display: none}\n";
    var v117 = v381 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p16);
  }
  var v118 = outputWindow.document;
  var v566 = "</head>\n" + '<body class="main">\n';
  var v502 = v566 + '<div class="title">';
  var v382 = v502 + title$$8;
  var v119 = v382 + " results</div>\n";
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
  var v383 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p17);
  var v120 = v383 != -1;
  if (v120) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p17);
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p16);
  var v384 = testArray[0];
  var v124 = v384 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v385 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p16);
  var v125 = v385 == -1;
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
  var v386 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p11);
  var v128 = v386 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v387 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p11);
  var v129 = v387 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v388 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p17);
  var v130 = v388 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v608 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17);
  var v567 = v608 == -1;
  var v610 = !v567;
  if (v610) {
    var v609 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17);
    v567 = v609 == -1;
  }
  var v503 = v567;
  var v569 = !v503;
  if (v569) {
    var v568 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17);
    v503 = v568 == -1;
  }
  var v389 = v503;
  var v505 = !v389;
  if (v505) {
    var v504 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17);
    v389 = v504 == -1;
  }
  var v131 = v389;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v390 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p17);
  var v132 = v390 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v391 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v391 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v392 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p17);
  var v135 = v392 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v393 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p17);
  var v136 = v393 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v611 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17);
  var v570 = v611 == -1;
  var v613 = !v570;
  if (v613) {
    var v612 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17);
    v570 = v612 == -1;
  }
  var v506 = v570;
  var v572 = !v506;
  if (v572) {
    var v571 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17);
    v506 = v571 == -1;
  }
  var v394 = v506;
  var v508 = !v394;
  if (v508) {
    var v507 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17);
    v394 = v507 == -1;
  }
  var v137 = v394;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v614 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17);
  var v573 = v614 == -1;
  var v616 = !v573;
  if (v616) {
    var v615 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17);
    v573 = v615 == -1;
  }
  var v509 = v573;
  var v575 = !v509;
  if (v575) {
    var v574 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17);
    v509 = v574 == -1;
  }
  var v395 = v509;
  var v511 = !v395;
  if (v511) {
    var v510 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17);
    v395 = v510 == -1;
  }
  var v138 = v395;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v396 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p17);
  var v139 = v396 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v617 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17);
  var v576 = v617 == -1;
  var v619 = !v576;
  if (v619) {
    var v618 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17);
    v576 = v618 == -1;
  }
  var v512 = v576;
  var v578 = !v512;
  if (v578) {
    var v577 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17);
    v512 = v577 == -1;
  }
  var v397 = v512;
  var v514 = !v397;
  if (v514) {
    var v513 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17);
    v397 = v513 == -1;
  }
  var v140 = v397;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v398 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p17);
  var v141 = v398 == -1;
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
    var v399 = basePerLine / groupSize;
    var v145 = j$$6 <= v399;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v400 = k + i$$5;
        var v143 = JAM.call(text$$10.charAt, text$$10, [v400], JAM.policy.p16);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v401 = basePerLine / groupSize;
      v145 = j$$6 <= v401;
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
  JAM.call(writeGroupNumDnaSetStart, null, [text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0], JAM.policy.p19);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v402 = adjustment < 0;
    if (v402) {
      v402 = adjusted >= 0;
    }
    var v149 = v402;
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
    var v403 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v403;
    for (;v158;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v404 = i$$6 + k$$1;
        var v150 = v404 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v151 = lineOfText$$1;
        var v405 = k$$1 + i$$6;
        var v152 = JAM.call(text$$12.charAt, text$$12, [v405], JAM.policy.p16);
        lineOfText$$1 = v151 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v156 = numberPosition$$1 == "above";
      if (v156) {
        var v154 = aboveNum;
        var v406 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
        var v155 = rightNum(v406, "", groupSize$$2, tabIn$$3);
        aboveNum = v154 + v155;
      }
      var v157 = i$$6 >= stopBase$$2;
      if (v157) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v407 = basePerLine$$2 / groupSize$$2;
      v158 = j$$7 <= v407;
    }
    var v181 = numberPosition$$1 == "left";
    if (v181) {
      var v159 = outputWindow.document;
      var v579 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19);
      var v515 = rightNum(v579, "", 8, tabIn$$3);
      var v408 = v515 + lineOfText$$1;
      var v160 = v408 + "\n";
      JAM.call(v159.write, v159, [v160], JAM.policy.p16);
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v580 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19);
        var v516 = rightNum(v580, "", 8, tabIn$$3);
        var v517 = complement(lineOfText$$1);
        var v409 = v516 + v517;
        var v162 = v409 + "\n";
        JAM.call(v161.write, v161, [v162], JAM.policy.p16);
        var v163 = outputWindow.document;
        JAM.call(v163.write, v163, ["\n"], JAM.policy.p9);
      }
    } else {
      var v180 = numberPosition$$1 == "right";
      if (v180) {
        var v165 = outputWindow.document;
        var v518 = lineOfText$$1;
        var v519 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
        var v410 = v518 + v519;
        var v166 = v410 + "\n";
        JAM.call(v165.write, v165, [v166], JAM.policy.p16);
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v520 = complement(lineOfText$$1);
          var v521 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
          var v411 = v520 + v521;
          var v168 = v411 + "\n";
          JAM.call(v167.write, v167, [v168], JAM.policy.p16);
          var v169 = outputWindow.document;
          JAM.call(v169.write, v169, ["\n"], JAM.policy.p9);
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
            var v412 = complement(lineOfText$$1);
            var v176 = v412 + "\n";
            JAM.call(v175.write, v175, [v176], JAM.policy.p16);
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
    var v413 = basePerLine$$3 / groupSize$$3;
    var v189 = j$$8 <= v413;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        var v414 = i$$7 + k$$2;
        var v183 = v414 >= stopBase$$3;
        if (v183) {
          break;
        }
        var v415 = k$$2 + i$$7;
        var v184 = JAM.call(text$$13.charAt, text$$13, [v415], JAM.policy.p16);
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
      var v416 = basePerLine$$3 / groupSize$$3;
      v189 = j$$8 <= v416;
    }
    var v200 = numberPosition$$2 == "left";
    if (v200) {
      var v190 = outputWindow.document;
      var v522 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v417 = v522 + lineOfText$$2;
      var v191 = v417 + "\n";
      JAM.call(v190.write, v190, [v191], JAM.policy.p16);
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v418 = lineOfText$$2 + i$$7;
        var v193 = v418 + "\n";
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
  var v581 = sequence$$13.length;
  var v523 = v581 <= firstIndexToMutate;
  var v582 = !v523;
  if (v582) {
    v523 = lastIndexToMutate < 0;
  }
  var v419 = v523;
  var v524 = !v419;
  if (v524) {
    v419 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v202 = v419;
  if (v202) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    var v420 = Math.random();
    var v203 = v420 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v203], JAM.policy.p17);
    var v421 = randNum < firstIndexToMutate;
    var v525 = !v421;
    if (v525) {
      v421 = randNum > lastIndexToMutate;
    }
    var v204 = v421;
    if (v204) {
      numMut++;
      i$$8++;
      v210 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p17);
    needNewChar = true;
    for (;needNewChar;) {
      var v422 = Math.random();
      var v423 = components$$1.length;
      var v205 = v422 * v423;
      componentsIndex = JAM.call(Math.round, Math, [v205], JAM.policy.p17);
      var v424 = components$$1.length;
      var v206 = componentsIndex == v424;
      if (v206) {
        componentsIndex = 0;
      }
      var v425 = components$$1[componentsIndex];
      var v207 = v425 != currentChar;
      if (v207) {
        needNewChar = false;
      }
    }
    var v426 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v427 = components$$1[componentsIndex];
    var v208 = v426 + v427;
    var v428 = randNum + 1;
    var v429 = sequence$$13.length;
    var v209 = JAM.call(sequence$$13.substring, sequence$$13, [v428, v429], JAM.policy.p21);
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
    var v430 = Math.random();
    var v431 = components$$2.length;
    var v213 = v430 * v431;
    tempNum$$1 = JAM.call(Math.floor, Math, [v213], JAM.policy.p17);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v432 = sequence$$14.length;
    var v216 = v432 == 60;
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
    var v583 = sequence$$15.length;
    var v526 = v583 - lookAhead;
    var v527 = sequence$$15.length;
    var v433 = JAM.call(sequence$$15.substring, sequence$$15, [v526, v527], JAM.policy.p21);
    var v221 = v433 + sequence$$15;
    var v222 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v221 + v222;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  JAM.call(v224.write, v224, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v225 = outputWindow.document;
  var v584 = '<tr><td class="title" width="200px">' + "Site:";
  var v528 = v584 + '</td><td class="title">';
  var v434 = v528 + "Positions:";
  var v226 = v434 + "</td></tr>\n";
  JAM.call(v225.write, v225, [v226], JAM.policy.p16);
  var i$$9 = 0;
  var v435 = arrayOfItems.length;
  var v242 = i$$9 < v435;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v436 = arrayOfItems[i$$9];
    var v227 = JAM.call(v436.match, v436, [/\/.+\//], JAM.policy.p17);
    matchExp = v227 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v585 = arrayOfItems[i$$9];
    var v529 = JAM.call(v585.match, v585, [/\)\D*\d+/], JAM.policy.p17);
    var v437 = v529.toString();
    var v228 = JAM.call(v437.replace, v437, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v228);
    var v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
    for (;v234;) {
      var v229 = matchExp.lastIndex;
      matchPosition = v229 - cutDistance;
      var v438 = matchPosition >= lowerLimit;
      if (v438) {
        v438 = matchPosition < upperLimit;
      }
      var v232 = v438;
      if (v232) {
        timesFound++;
        var v230 = tempString$$1 + ", ";
        var v439 = matchPosition - shiftValue;
        var v231 = v439 + 1;
        tempString$$1 = v230 + v231;
      }
      var v440 = matchExp.lastIndex;
      var v530 = RegExp.lastMatch;
      var v441 = v530.length;
      var v233 = v440 - v441;
      matchExp.lastIndex = v233 + 1;
      v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
    }
    var v442 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p17);
    var v235 = v442 != -1;
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
    var v669 = '<tr><td class="' + backGroundClass;
    var v655 = v669 + '">';
    var v689 = arrayOfItems[i$$9];
    var v680 = JAM.call(v689.match, v689, [/\([^\(]+\)/], JAM.policy.p17);
    var v670 = v680.toString();
    var v656 = JAM.call(v670.replace, v670, [/\(|\)/g, ""], JAM.policy.p15);
    var v641 = v655 + v656;
    var v620 = v641 + '</td><td class="';
    var v586 = v620 + backGroundClass;
    var v531 = v586 + '">';
    var v443 = v531 + tempString$$1;
    var v241 = v443 + "</td></tr>\n";
    JAM.call(v240.write, v240, [v241], JAM.policy.p16);
    timesFound = 0;
    i$$9++;
    var v444 = arrayOfItems.length;
    v242 = i$$9 < v444;
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
  var v642 = '<tr><td class="title">' + "Pattern:";
  var v621 = v642 + '</td><td class="title">';
  var v587 = v621 + "Times found:";
  var v532 = v587 + '</td><td class="title">';
  var v445 = v532 + "Percentage:";
  var v246 = v445 + "</td></tr>\n";
  JAM.call(v245.write, v245, [v246], JAM.policy.p16);
  var i$$10 = 0;
  var v446 = arrayOfItems$$1.length;
  var v255 = i$$10 < v446;
  for (;v255;) {
    var tempNumber = 0;
    var v447 = arrayOfItems$$1[i$$10];
    var v247 = JAM.call(v447.match, v447, [/\/[^\/]+\//], JAM.policy.p17);
    var matchExp$$1 = v247 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v448 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p16);
    var v249 = v448 != -1;
    if (v249) {
      var v248 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p16);
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v533 = originalLength + 1;
    var v622 = arrayOfItems$$1[i$$10];
    var v588 = JAM.call(v622.match, v622, [/\d+/], JAM.policy.p17);
    var v534 = parseFloat(v588);
    var v449 = v533 - v534;
    var v252 = v449 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v450 = originalLength + 1;
      var v589 = arrayOfItems$$1[i$$10];
      var v535 = JAM.call(v589.match, v589, [/\d+/], JAM.policy.p17);
      var v451 = parseFloat(v535);
      var v251 = v450 - v451;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v690 = arrayOfItems$$1[i$$10];
    var v681 = JAM.call(v690.match, v690, [/\([^\(]+\)\b/], JAM.policy.p17);
    var v671 = v681.toString();
    var v657 = JAM.call(v671.replace, v671, [/\(|\)/g, ""], JAM.policy.p15);
    var v643 = "<tr><td>" + v657;
    var v623 = v643 + "</td><td>";
    var v590 = v623 + tempNumber;
    var v536 = v590 + "</td><td>";
    var v537 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p11);
    var v452 = v536 + v537;
    var v254 = v452 + "</td></tr>\n";
    JAM.call(v253.write, v253, [v254], JAM.policy.p16);
    i$$10++;
    var v453 = arrayOfItems$$1.length;
    v255 = i$$10 < v453;
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
  var v454 = sequence$$17.length;
  var v263 = v454 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v455 = Math.random();
    var v257 = v455 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v257], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v258 = randNum$$1 + 1;
    var v259 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v258, v259], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v456 = tempSeq.length;
    var v262 = v456 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      JAM.call(v260.write, v260, [v261], JAM.policy.p16);
      tempSeq = "";
    }
    var v457 = sequence$$17.length;
    v263 = v457 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  JAM.call(v264.write, v264, [v265], JAM.policy.p16);
  return true;
}
function combineFasta(theDocument) {
  JAM.startProfile('compute');

  var maxInput$$3 = 5E5;
  var sequenceCount = 0;
  var sequences = new Array;
  var v458 = testScript();
  var v266 = v458 == false;
  if (v266) {
    return false;
  }
  var v658 = theDocument.forms;
  var v644 = v658[0];
  var v624 = v644.elements;
  var v591 = v624[0];
  var v538 = checkFormElement(v591);
  var v459 = v538 == false;
  var v540 = !v459;
  if (v540) {
    var v672 = theDocument.forms;
    var v659 = v672[0];
    var v645 = v659.elements;
    var v625 = v645[0];
    var v592 = v625.value;
    var v539 = JAM.call(checkTextLength, null, [v592, maxInput$$3], JAM.policy.p19);
    v459 = v539 == false;
  }
  var v267 = v459;
  if (v267) {
    return false;
  }
  var v626 = theDocument.forms;
  var v593 = v626[0];
  var v541 = v593.elements;
  var v460 = v541[0];
  var v268 = v460.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v268);
  var i$$11 = 0;
  var v461 = arrayOfFasta$$1.length;
  var v270 = i$$11 < v461;
  for (;v270;) {
    var v542 = arrayOfFasta$$1[i$$11];
    var v462 = getSequenceFromFasta(v542);
    var v269 = removeNonLetters(v462);
    JAM.call(sequences.push, sequences, [v269], JAM.policy.p16);
    i$$11++;
    var v463 = arrayOfFasta$$1.length;
    v270 = i$$11 < v463;
  }
  var sequence$$18 = JAM.call(sequences.join, sequences, [""], JAM.policy.p9);
  openWindow("Combine FASTA");
  openPre();
  var v464 = sequences.length;
  var v277 = v464 == 1;
  if (v277) {
    var v271 = outputWindow.document;
    var v660 = sequence$$18.length;
    var v646 = "&gt;results for " + v660;
    var v627 = v646 + " residue sequence made from ";
    var v628 = sequences.length;
    var v594 = v627 + v628;
    var v543 = v594 + ' records, starting "';
    var v544 = JAM.call(sequence$$18.substring, sequence$$18, [0, 10], JAM.policy.p13);
    var v465 = v543 + v544;
    var v272 = v465 + '"\n';
    JAM.call(v271.write, v271, [v272], JAM.policy.p16);
  } else {
    var v466 = sequences.length;
    var v276 = v466 > 1;
    if (v276) {
      var v273 = outputWindow.document;
      var v661 = sequence$$18.length;
      var v647 = "&gt;results for " + v661;
      var v629 = v647 + " residue sequence made from ";
      var v630 = sequences.length;
      var v595 = v629 + v630;
      var v545 = v595 + ' records, starting "';
      var v546 = JAM.call(sequence$$18.substring, sequence$$18, [0, 10], JAM.policy.p13);
      var v467 = v545 + v546;
      var v274 = v467 + '"\n';
      JAM.call(v273.write, v273, [v274], JAM.policy.p16);
    } else {
      var v275 = outputWindow.document;
      JAM.call(v275.write, v275, ['<div class="info">No sequence records were read</div>\n'], JAM.policy.p9);
    }
  }
  var v278 = outputWindow.document;
  var v468 = addReturns(sequence$$18);
  var v279 = v468 + "\n";
  JAM.call(v278.write, v278, [v279], JAM.policy.p16);
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
JAM.set(document, "onload", v2);
var v280 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9);
JAM.set(v280, "onclick", v3);
var v281 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9);
JAM.set(v281, "onclick", v4)

JAM.stopProfile('load');
