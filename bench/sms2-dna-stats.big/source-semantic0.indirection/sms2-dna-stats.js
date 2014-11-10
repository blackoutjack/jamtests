function v4() {
  var v547 = document.forms;
  var v471 = v547[0];
  var v287 = v471.elements;
  var v5 = v287[0];
  v5.value = " ";
  var v548 = document.forms;
  var v472 = v548[0];
  var v288 = v472.elements;
  var v6 = v288[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    dnaStats(document);
  } catch (e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7);
  }
  return;
}
function v2() {
  var v289 = document.main_form;
  var v8 = v289.main_submit;
  v8.focus();
  return;
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$8, s$$2) {
    return p1 + "\n";
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p28);
  return sequence;
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v9 = arrayOfSequences[0];
  var lengthOfAlign = v9.length;
  var v290 = arrayOfSequences.length;
  var v10 = v290 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v291 = arrayOfTitles.length;
  var v12 = i$$1 < v291;
  for (;v12;) {
    var v597 = arrayOfTitles[i$$1];
    var v549 = JAM.call(v597.search, v597, [/\S/], JAM.policy.p29);
    var v473 = v549 == -1;
    var v551 = !v473;
    if (v551) {
      var v598 = arrayOfSequences[i$$1];
      var v550 = JAM.call(v598.search, v598, [/\S/], JAM.policy.p29);
      v473 = v550 == -1;
    }
    var v292 = v473;
    var v475 = !v292;
    if (v475) {
      var v552 = arrayOfSequences[i$$1];
      var v474 = v552.length;
      v292 = v474 != lengthOfAlign;
    }
    var v11 = v292;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1 = i$$1 + 1;
    var v293 = arrayOfTitles.length;
    v12 = i$$1 < v293;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v628 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p29);
  var v599 = v628 == -1;
  var v630 = !v599;
  if (v630) {
    var v629 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p29);
    v599 = v629 == -1;
  }
  var v553 = v599;
  var v601 = !v553;
  if (v601) {
    var v600 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p29);
    v553 = v600 == -1;
  }
  var v476 = v553;
  var v555 = !v476;
  if (v555) {
    var v554 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p29);
    v476 = v554 == -1;
  }
  var v294 = v476;
  var v478 = !v294;
  if (v478) {
    var v477 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p29);
    v294 = v477 == -1;
  }
  var v13 = v294;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v479 = formElement.value;
  var v295 = JAM.call(v479.search, v479, [/\S/], JAM.policy.p29);
  var v14 = v295 == -1;
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
  var v296 = arrayOfPatterns.length;
  var v17 = z$$2 < v296;
  for (;v17;) {
    var v480 = arrayOfPatterns[z$$2];
    var v297 = JAM.call(v480.search, v480, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p29);
    var v15 = v297 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v481 = arrayOfPatterns[z$$2];
    var v298 = moreExpressionCheck(v481);
    var v16 = v298 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v299 = arrayOfPatterns.length;
    v17 = z$$2 < v299;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v300 = arrayOfPatterns.length;
  var v26 = j < v300;
  for (;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    var v556 = arrayOfPatterns[j];
    var v482 = JAM.call(v556.match, v556, [/\/.+\//], JAM.policy.p29);
    var v301 = v482 + "gi";
    if (JAM.isEval(eval)) {
      var v713 = eval("introspect(JAM.policy.pFull) { " + v301 + " }")
    } else {
      var v713 = JAM.call(eval, null, [v301])
    }
    introspect(JAM.policy.p13) {
      v20[v21] = v713;
    }
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    var v483 = arrayOfPatterns[j];
    var v302 = JAM.call(v483.match, v483, [/=[a-zA-Z\*]/], JAM.policy.p29);
    var v714 = v302.toString();
    introspect(JAM.policy.p13) {
      v22[v23] = v714;
    }
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    var v303 = geneticCodeMatchResult[j];
    var v715 = JAM.call(v303.replace, v303, [/=/g, ""], JAM.policy.p28);
    introspect(JAM.policy.p13) {
      v24[v25] = v715;
    }
    j = j + 1;
    var v304 = arrayOfPatterns.length;
    v26 = j < v304;
  }
  var i$$2 = 0;
  var v484 = testSequence.length;
  var v305 = v484 - 3;
  var v33 = i$$2 <= v305;
  for (;v33;) {
    var v27 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v27], JAM.policy.p28);
    j = 0;
    var v306 = geneticCodeMatchExp.length;
    var v31 = j < v306;
    for (;v31;) {
      var v485 = geneticCodeMatchExp[j];
      var v307 = JAM.call(codon.search, codon, [v485], JAM.policy.p40);
      var v30 = v307 != -1;
      if (v30) {
        var v29 = oneMatch == true;
        if (v29) {
          var v308 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v308 + ".";
          alert(v28);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      var v309 = geneticCodeMatchExp.length;
      v31 = j < v309;
    }
    var v32 = oneMatch == false;
    if (v32) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v486 = testSequence.length;
    var v310 = v486 - 3;
    v33 = i$$2 <= v310;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v311 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v311;
  for (;v35;) {
    var v487 = arrayOfPatterns$$1[z$$3];
    var v312 = JAM.call(v487.search, v487, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p29);
    var v34 = v312 != -1;
    if (v34) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v313 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v313;
  }
  var i$$3 = 0;
  var v314 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v314;
  for (;v39;) {
    var v488 = arrayOfPatterns$$1[i$$3];
    var v315 = "[" + v488;
    var v36 = v315 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v316 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v316;
    for (;v38;) {
      var v489 = arrayOfPatterns$$1[j$$1];
      var v317 = JAM.call(v489.search, v489, [re], JAM.policy.p40);
      var v37 = v317 != -1;
      if (v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1 = j$$1 + 1;
      var v318 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v318;
    }
    i$$3 = i$$3 + 1;
    var v319 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v319;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v320 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v320;
  for (;v42;) {
    var v490 = arrayOfPatterns$$2[z$$4];
    var v321 = JAM.call(v490.search, v490, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p29);
    var v40 = v321 == -1;
    if (v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v491 = arrayOfPatterns$$2[z$$4];
    var v322 = moreExpressionCheck(v491);
    var v41 = v322 == false;
    if (v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v323 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v323;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v557 = getSequenceFromFasta(text$$7);
  var v492 = JAM.call(v557.replace, v557, [/[^A-Za-z]/g, ""], JAM.policy.p28);
  var v324 = v492.length;
  var v44 = v324 > maxInput;
  if (v44) {
    var v325 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v325 + " characters.";
    alert(v43);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v326 = text$$8.length;
  var v46 = v326 > maxInput$$1;
  if (v46) {
    var v327 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v327 + " characters.";
    alert(v45);
    return false;
  } else {
    return true;
  }
  return;
}
function complement(dnaSequence) {
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p28);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p28);
  return dnaSequence;
}
function closeForm() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</form>"], JAM.policy.p24);
  return true;
}
function closePre() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</div>"], JAM.policy.p24);
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</pre>\n"], JAM.policy.p24);
  return;
}
function closeTextArea() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</textarea>"], JAM.policy.p24);
  return true;
}
function closeWindow() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</body>\n</html>\n"], JAM.policy.p24);
  outputWindow.status = "Done.";
  var v52 = outputWindow.document;
  v52.close();
  return true;
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p28);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p28);
  return sequence$$1;
}
function earlyCheckAlign(alignArray) {
  var v328 = alignArray.length;
  var v53 = v328 < 3;
  if (v53) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v329 = alignArray.length;
  var v55 = i$$4 < v329;
  for (;v55;) {
    var v493 = alignArray[i$$4];
    var v330 = JAM.call(v493.search, v493, [/[^\s]+\s/], JAM.policy.p29);
    var v54 = v330 == -1;
    if (v54) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4 = i$$4 + 1;
    var v331 = alignArray.length;
    v55 = i$$4 < v331;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p28);
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p28);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p28);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p28);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p28);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v332 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p29);
  var v58 = v332 != -1;
  if (v58) {
    var v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p40);
    for (;v57;) {
      var v56 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v56], JAM.policy.p40);
      v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p40);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v333 = sequence$$2.length;
  var v59 = "&gt;results for " + v333;
  var stringToReturn = v59 + " residue sequence ";
  var v334 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p29);
  var v61 = v334 != -1;
  if (v61) {
    var v335 = stringToReturn + '"';
    var v60 = v335 + fastaSequenceTitle;
    stringToReturn = v60 + '"';
  }
  var v336 = stringToReturn + ' starting "';
  var v337 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p26);
  var v62 = v336 + v337;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v338 = sequenceOne.length;
  var v63 = "Search results for " + v338;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v339 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p29);
  var v65 = v339 != -1;
  if (v65) {
    var v340 = stringToReturn$$1 + '"';
    var v64 = v340 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"';
  }
  var v341 = stringToReturn$$1 + ' starting "';
  var v342 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p26);
  var v66 = v341 + v342;
  stringToReturn$$1 = v66 + '"\n';
  var v343 = stringToReturn$$1 + "and ";
  var v344 = sequenceTwo.length;
  var v67 = v343 + v344;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v345 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p29);
  var v69 = v345 != -1;
  if (v69) {
    var v346 = stringToReturn$$1 + '"';
    var v68 = v346 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"';
  }
  var v347 = stringToReturn$$1 + ' starting "';
  var v348 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p26);
  var v70 = v347 + v348;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v349 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v349;
  for (;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    var v558 = arrayOfPatterns$$3[j$$2];
    var v494 = JAM.call(v558.match, v558, [/\/.+\//], JAM.policy.p29);
    var v350 = v494 + "gi";
    if (JAM.isEval(eval)) {
      var v716 = eval("introspect(JAM.policy.pFull) { " + v350 + " }")
    } else {
      var v716 = JAM.call(eval, null, [v350])
    }
    introspect(JAM.policy.p13) {
      v73[v74] = v716;
    }
    j$$2 = j$$2 + 1;
    var v351 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v351;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v352 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v352;
  for (;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    var v495 = arrayOfPatterns$$4[j$$3];
    var v353 = JAM.call(v495.match, v495, [/=[a-zA-Z\*]/], JAM.policy.p29);
    var v717 = v353.toString();
    introspect(JAM.policy.p13) {
      v77[v78] = v717;
    }
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    var v354 = geneticCodeMatchResult$$1[j$$3];
    var v718 = JAM.call(v354.replace, v354, [/=/g, ""], JAM.policy.p28);
    introspect(JAM.policy.p13) {
      v79[v80] = v718;
    }
    j$$3 = j$$3 + 1;
    var v355 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v355;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v356 = sequence$$3.length;
  var v82 = "Results for " + v356;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v357 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p29);
  var v84 = v357 != -1;
  if (v84) {
    var v358 = stringToReturn$$2 + '"';
    var v83 = v358 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"';
  }
  var v359 = stringToReturn$$2 + ' starting "';
  var v360 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p26);
  var v85 = v359 + v360;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v496 = "Results for " + topology;
  var v361 = v496 + " ";
  var v362 = sequence$$4.length;
  var v87 = v361 + v362;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v363 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p29);
  var v89 = v363 != -1;
  if (v89) {
    var v364 = stringToReturn$$3 + '"';
    var v88 = v364 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"';
  }
  var v365 = stringToReturn$$3 + ' starting "';
  var v366 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p26);
  var v90 = v365 + v366;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v367 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v367;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v368 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p29);
  var v94 = v368 != -1;
  if (v94) {
    var v369 = stringToReturn$$4 + '"';
    var v93 = v369 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"';
  }
  var v370 = stringToReturn$$4 + ' starting "';
  var v371 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p26);
  var v95 = v370 + v371;
  stringToReturn$$4 = v95 + '"\n';
  var v372 = stringToReturn$$4 + "and ";
  var v373 = sequenceTwo$$1.length;
  var v96 = v372 + v373;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v374 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p29);
  var v98 = v374 != -1;
  if (v98) {
    var v375 = stringToReturn$$4 + '"';
    var v97 = v375 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"';
  }
  var v376 = stringToReturn$$4 + ' starting "';
  var v377 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p26);
  var v99 = v376 + v377;
  stringToReturn$$4 = v99 + '"';
  var v100 = '<div class="info">' + stringToReturn$$4;
  return v100 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v102 = j$$4 < lengthOut;
  for (;v102;) {
    var v378 = Math.random();
    var v379 = components.length;
    var v101 = v378 * v379;
    tempNum = JAM.call(Math.floor, Math, [v101], JAM.policy.p29);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p40);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p24);
}
function getSequenceFromFasta(sequenceRecord) {
  var v380 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p29);
  var v103 = v380 != -1;
  if (v103) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p28);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v381 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p29);
  var v105 = v381 != -1;
  if (v105) {
    var v104 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p28);
    fastaTitle = v104.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p28);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p28);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p28);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v691 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p29);
  var v684 = v691 != -1;
  var v693 = !v684;
  if (v693) {
    var v692 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p29);
    v684 = v692 != -1;
  }
  var v675 = v684;
  var v686 = !v675;
  if (v686) {
    var v685 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p29);
    v675 = v685 != -1;
  }
  var v666 = v675;
  var v677 = !v666;
  if (v677) {
    var v676 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p29);
    v666 = v676 != -1;
  }
  var v655 = v666;
  var v668 = !v655;
  if (v668) {
    var v667 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p29);
    v655 = v667 != -1;
  }
  var v643 = v655;
  var v657 = !v643;
  if (v657) {
    var v656 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p29);
    v643 = v656 != -1;
  }
  var v631 = v643;
  var v645 = !v631;
  if (v645) {
    var v644 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p29);
    v631 = v644 != -1;
  }
  var v602 = v631;
  var v633 = !v602;
  if (v633) {
    var v632 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p29);
    v602 = v632 != -1;
  }
  var v559 = v602;
  var v604 = !v559;
  if (v604) {
    var v603 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p29);
    v559 = v603 != -1;
  }
  var v497 = v559;
  var v561 = !v497;
  if (v561) {
    var v560 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p29);
    v497 = v560 != -1;
  }
  var v382 = v497;
  var v499 = !v382;
  if (v499) {
    var v498 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p29);
    v382 = v498 != -1;
  }
  var v106 = v382;
  if (v106) {
    return false;
  }
  return true;
}
function openForm() {
  var v107 = outputWindow.document;
  JAM.call(v107.write, v107, ['<form action="">\n'], JAM.policy.p24);
  return true;
}
function openPre() {
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ["<pre>"], JAM.policy.p24);
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ['<div class="pre">'], JAM.policy.p24);
  return;
}
function openTextArea() {
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p24);
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p27);
  outputWindow.focus();
  var v111 = outputWindow.document;
  var v562 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v500 = v562 + "<head>\n";
  var v383 = v500 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v383 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v111.write, v111, [v112], JAM.policy.p40);
  if (isColor) {
    var v113 = outputWindow.document;
    var v706 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v702 = v706 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v698 = v702 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v694 = v698 + "div.info {font-weight: bold}\n";
    var v687 = v694 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v678 = v687 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v669 = v678 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v658 = v669 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v646 = v658 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v634 = v646 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v605 = v634 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v563 = v605 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v501 = v563 + "td.many {color: #000000}\n";
    var v384 = v501 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v384 + "</style>\n";
    JAM.call(v113.write, v113, [v114], JAM.policy.p40);
  } else {
    var v115 = outputWindow.document;
    var v710 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v707 = v710 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v703 = v707 + "div.title {display: none}\n";
    var v699 = v703 + "div.info {font-weight: bold}\n";
    var v695 = v699 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v688 = v695 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v679 = v688 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v670 = v679 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v659 = v670 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v647 = v659 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v635 = v647 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v606 = v635 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v564 = v606 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v502 = v564 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v385 = v502 + "img {display: none}\n";
    var v116 = v385 + "</style>\n";
    JAM.call(v115.write, v115, [v116], JAM.policy.p40);
  }
  var v117 = outputWindow.document;
  var v565 = "</head>\n" + '<body class="main">\n';
  var v503 = v565 + '<div class="title">';
  var v386 = v503 + title$$6;
  var v118 = v386 + " results</div>\n";
  JAM.call(v117.write, v117, [v118], JAM.policy.p40);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p27);
  outputWindow.focus();
  var v119 = outputWindow.document;
  var v566 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v504 = v566 + "<head>\n";
  var v387 = v504 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v387 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v119.write, v119, [v120], JAM.policy.p40);
  if (isBackground) {
    var v121 = outputWindow.document;
    var v708 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v704 = v708 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v700 = v704 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v696 = v700 + "div.info {font-weight: bold}\n";
    var v689 = v696 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v680 = v689 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v671 = v680 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v660 = v671 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v648 = v660 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v636 = v648 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v607 = v636 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v567 = v607 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v505 = v567 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v388 = v505 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v388 + "</style>\n";
    JAM.call(v121.write, v121, [v122], JAM.policy.p40);
  } else {
    var v123 = outputWindow.document;
    var v712 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v711 = v712 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v709 = v711 + "div.title {display: none}\n";
    var v705 = v709 + "div.info {font-weight: bold}\n";
    var v701 = v705 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v697 = v701 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v690 = v697 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v681 = v690 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v672 = v681 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v661 = v672 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v649 = v661 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v637 = v649 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v608 = v637 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v568 = v608 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v506 = v568 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v389 = v506 + "img {display: none}\n";
    var v124 = v389 + "</style>\n";
    JAM.call(v123.write, v123, [v124], JAM.policy.p40);
  }
  var v125 = outputWindow.document;
  var v569 = "</head>\n" + '<body class="main">\n';
  var v507 = v569 + '<div class="title">';
  var v390 = v507 + title$$8;
  var v126 = v390 + " results</div>\n";
  JAM.call(v125.write, v125, [v126], JAM.policy.p40);
  outputWindow.status = "Please Wait.";
  return true;
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p28);
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p28);
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p28);
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p28);
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p28);
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p28);
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p28);
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p28);
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p28);
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  var v391 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p29);
  var v127 = v391 != -1;
  if (v127) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p29);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p24);
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  var v128 = j$$5 < lengthOfColumn;
  for (;v128;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v128 = j$$5 < lengthOfColumn;
  }
  var v129 = tempString + theNumber;
  theNumber = v129 + " ";
  var v130 = sequenceToAppend + theNumber;
  sequenceToAppend = v130 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p40);
  var v392 = testArray[0];
  var v131 = v392 != testString;
  if (v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v393 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p40);
  var v132 = v393 == -1;
  if (v132) {
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
  var v133 = !caughtException;
  if (v133) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p28);
  var v134 = testString != "1X2X3X";
  if (v134) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v394 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p22);
  var v135 = v394 != 2489.824;
  if (v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v395 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p22);
  var v136 = v395 != 2489.8;
  if (v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v396 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p29);
  var v137 = v396 == -1;
  if (v137) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v609 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p29);
  var v570 = v609 == -1;
  var v611 = !v570;
  if (v611) {
    var v610 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p29);
    v570 = v610 == -1;
  }
  var v508 = v570;
  var v572 = !v508;
  if (v572) {
    var v571 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p29);
    v508 = v571 == -1;
  }
  var v397 = v508;
  var v510 = !v397;
  if (v510) {
    var v509 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p29);
    v397 = v509 == -1;
  }
  var v138 = v397;
  if (v138) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v398 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p29);
  var v139 = v398 == -1;
  if (v139) {
    alert("Please enter a number.");
    return false;
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if (v141) {
    var v399 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v399 + ".";
    alert(v140);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v400 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p29);
  var v142 = v400 != -1;
  if (v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v401 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p29);
  var v143 = v401 != -1;
  if (v143) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v612 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p29);
  var v573 = v612 == -1;
  var v614 = !v573;
  if (v614) {
    var v613 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p29);
    v573 = v613 == -1;
  }
  var v511 = v573;
  var v575 = !v511;
  if (v575) {
    var v574 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p29);
    v511 = v574 == -1;
  }
  var v402 = v511;
  var v513 = !v402;
  if (v513) {
    var v512 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p29);
    v402 = v512 == -1;
  }
  var v144 = v402;
  if (v144) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v615 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p29);
  var v576 = v615 == -1;
  var v617 = !v576;
  if (v617) {
    var v616 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p29);
    v576 = v616 == -1;
  }
  var v514 = v576;
  var v578 = !v514;
  if (v578) {
    var v577 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p29);
    v514 = v577 == -1;
  }
  var v403 = v514;
  var v516 = !v403;
  if (v516) {
    var v515 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p29);
    v403 = v515 == -1;
  }
  var v145 = v403;
  if (v145) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v404 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p29);
  var v146 = v404 == -1;
  if (v146) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v618 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p29);
  var v579 = v618 == -1;
  var v620 = !v579;
  if (v620) {
    var v619 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p29);
    v579 = v619 == -1;
  }
  var v517 = v579;
  var v581 = !v517;
  if (v581) {
    var v580 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p29);
    v517 = v580 == -1;
  }
  var v405 = v517;
  var v519 = !v405;
  if (v519) {
    var v518 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p29);
    v405 = v518 == -1;
  }
  var v147 = v405;
  if (v147) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v406 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p29);
  var v148 = v406 == -1;
  if (v148) {
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
  var v156 = i$$5 < stopBase;
  for (;v156;) {
    var v149 = i$$5 + 1;
    lineOfText = rightNum(v149, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v407 = basePerLine / groupSize;
    var v153 = j$$6 <= v407;
    for (;v153;) {
      var v152 = k < groupSize;
      for (;v152;) {
        var v150 = lineOfText;
        var v408 = k + i$$5;
        var v151 = JAM.call(text$$10.charAt, text$$10, [v408], JAM.policy.p40);
        lineOfText = v150 + v151;
        k = k + 1;
        v152 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v409 = basePerLine / groupSize;
      v153 = j$$6 <= v409;
    }
    var v154 = outputWindow.document;
    var v155 = lineOfText + "\n";
    JAM.call(v154.write, v154, [v155], JAM.policy.p40);
    lineOfText = "";
    v156 = i$$5 < stopBase;
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
    var v410 = adjustment < 0;
    if (v410) {
      v410 = adjusted >= 0;
    }
    var v157 = v410;
    if (v157) {
      adjusted = adjusted + 1;
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
  var v190 = i$$6 < stopBase$$2;
  for (;v190;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v411 = basePerLine$$2 / groupSize$$2;
    var v166 = j$$7 <= v411;
    for (;v166;) {
      var v161 = k$$1 < groupSize$$2;
      for (;v161;) {
        var v412 = i$$6 + k$$1;
        var v158 = v412 >= stopBase$$2;
        if (v158) {
          break;
        }
        var v159 = lineOfText$$1;
        var v413 = k$$1 + i$$6;
        var v160 = JAM.call(text$$12.charAt, text$$12, [v413], JAM.policy.p40);
        lineOfText$$1 = v159 + v160;
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v164 = numberPosition$$1 == "above";
      if (v164) {
        var v162 = aboveNum;
        var v414 = adjustNumbering(i$$6, numberingAdjustment);
        var v163 = rightNum(v414, "", groupSize$$2, tabIn$$3);
        aboveNum = v162 + v163;
      }
      var v165 = i$$6 >= stopBase$$2;
      if (v165) {
        break;
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v415 = basePerLine$$2 / groupSize$$2;
      v166 = j$$7 <= v415;
    }
    var v189 = numberPosition$$1 == "left";
    if (v189) {
      var v167 = outputWindow.document;
      var v582 = adjustNumbering(lineNum, numberingAdjustment);
      var v520 = rightNum(v582, "", 8, tabIn$$3);
      var v416 = v520 + lineOfText$$1;
      var v168 = v416 + "\n";
      JAM.call(v167.write, v167, [v168], JAM.policy.p40);
      var v172 = strands$$1 == "two";
      if (v172) {
        var v169 = outputWindow.document;
        var v583 = adjustNumbering(lineNum, numberingAdjustment);
        var v521 = rightNum(v583, "", 8, tabIn$$3);
        var v522 = complement(lineOfText$$1);
        var v417 = v521 + v522;
        var v170 = v417 + "\n";
        JAM.call(v169.write, v169, [v170], JAM.policy.p40);
        var v171 = outputWindow.document;
        JAM.call(v171.write, v171, ["\n"], JAM.policy.p24);
      }
    } else {
      var v188 = numberPosition$$1 == "right";
      if (v188) {
        var v173 = outputWindow.document;
        var v523 = lineOfText$$1;
        var v524 = adjustNumbering(i$$6, numberingAdjustment);
        var v418 = v523 + v524;
        var v174 = v418 + "\n";
        JAM.call(v173.write, v173, [v174], JAM.policy.p40);
        var v178 = strands$$1 == "two";
        if (v178) {
          var v175 = outputWindow.document;
          var v525 = complement(lineOfText$$1);
          var v526 = adjustNumbering(i$$6, numberingAdjustment);
          var v419 = v525 + v526;
          var v176 = v419 + "\n";
          JAM.call(v175.write, v175, [v176], JAM.policy.p40);
          var v177 = outputWindow.document;
          JAM.call(v177.write, v177, ["\n"], JAM.policy.p24);
        }
      } else {
        var v187 = numberPosition$$1 == "above";
        if (v187) {
          var v179 = outputWindow.document;
          var v180 = aboveNum + "\n";
          JAM.call(v179.write, v179, [v180], JAM.policy.p40);
          var v181 = outputWindow.document;
          var v182 = lineOfText$$1 + "\n";
          JAM.call(v181.write, v181, [v182], JAM.policy.p40);
          var v186 = strands$$1 == "two";
          if (v186) {
            var v183 = outputWindow.document;
            var v420 = complement(lineOfText$$1);
            var v184 = v420 + "\n";
            JAM.call(v183.write, v183, [v184], JAM.policy.p40);
            var v185 = outputWindow.document;
            JAM.call(v185.write, v185, ["\n"], JAM.policy.p24);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v190 = i$$6 < stopBase$$2;
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
  var v211 = i$$7 < stopBase$$3;
  for (;v211;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v421 = basePerLine$$3 / groupSize$$3;
    var v199 = j$$8 <= v421;
    for (;v199;) {
      var v194 = k$$2 < groupSize$$3;
      for (;v194;) {
        var v422 = i$$7 + k$$2;
        var v191 = v422 >= stopBase$$3;
        if (v191) {
          break;
        }
        var v192 = lineOfText$$2;
        var v423 = k$$2 + i$$7;
        var v193 = JAM.call(text$$13.charAt, text$$13, [v423], JAM.policy.p40);
        lineOfText$$2 = v192 + v193;
        k$$2 = k$$2 + 1;
        v194 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v197 = numberPosition$$2 == "above";
      if (v197) {
        var v195 = aboveNum$$1;
        var v196 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v195 + v196;
      }
      var v198 = i$$7 >= stopBase$$3;
      if (v198) {
        break;
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v424 = basePerLine$$3 / groupSize$$3;
      v199 = j$$8 <= v424;
    }
    var v210 = numberPosition$$2 == "left";
    if (v210) {
      var v200 = outputWindow.document;
      var v527 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v425 = v527 + lineOfText$$2;
      var v201 = v425 + "\n";
      JAM.call(v200.write, v200, [v201], JAM.policy.p40);
    } else {
      var v209 = numberPosition$$2 == "right";
      if (v209) {
        var v202 = outputWindow.document;
        var v426 = lineOfText$$2 + i$$7;
        var v203 = v426 + "\n";
        JAM.call(v202.write, v202, [v203], JAM.policy.p40);
      } else {
        var v208 = numberPosition$$2 == "above";
        if (v208) {
          var v204 = outputWindow.document;
          var v205 = aboveNum$$1 + "\n";
          JAM.call(v204.write, v204, [v205], JAM.policy.p40);
          var v206 = outputWindow.document;
          var v207 = lineOfText$$2 + "\n";
          JAM.call(v206.write, v206, [v207], JAM.policy.p40);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v211 = i$$7 < stopBase$$3;
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
  var v584 = sequence$$13.length;
  var v528 = v584 <= firstIndexToMutate;
  var v585 = !v528;
  if (v585) {
    v528 = lastIndexToMutate < 0;
  }
  var v427 = v528;
  var v529 = !v427;
  if (v529) {
    v427 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v212 = v427;
  if (v212) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for (;v220;) {
    maxNum = sequence$$13.length;
    var v428 = Math.random();
    var v213 = v428 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v213], JAM.policy.p29);
    var v429 = randNum < firstIndexToMutate;
    var v530 = !v429;
    if (v530) {
      v429 = randNum > lastIndexToMutate;
    }
    var v214 = v429;
    if (v214) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v220 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p29);
    needNewChar = true;
    for (;needNewChar;) {
      var v430 = Math.random();
      var v431 = components$$1.length;
      var v215 = v430 * v431;
      componentsIndex = JAM.call(Math.round, Math, [v215], JAM.policy.p29);
      var v432 = components$$1.length;
      var v216 = componentsIndex == v432;
      if (v216) {
        componentsIndex = 0;
      }
      var v433 = components$$1[componentsIndex];
      var v217 = v433 != currentChar;
      if (v217) {
        needNewChar = false;
      }
    }
    var v434 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p26);
    var v435 = components$$1[componentsIndex];
    var v218 = v434 + v435;
    var v436 = randNum + 1;
    var v437 = sequence$$13.length;
    var v219 = JAM.call(sequence$$13.substring, sequence$$13, [v436, v437], JAM.policy.p41);
    sequence$$13 = v218 + v219;
    i$$8 = i$$8 + 1;
    v220 = i$$8 < numMut;
  }
  var v221 = outputWindow.document;
  var v222 = addReturns(sequence$$13);
  JAM.call(v221.write, v221, [v222], JAM.policy.p40);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v227 = j$$9 < lengthOut$$1;
  for (;v227;) {
    var v438 = Math.random();
    var v439 = components$$2.length;
    var v223 = v438 * v439;
    tempNum$$1 = JAM.call(Math.floor, Math, [v223], JAM.policy.p29);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v440 = sequence$$14.length;
    var v226 = v440 == 60;
    if (v226) {
      var v224 = outputWindow.document;
      var v225 = sequence$$14 + "\n";
      JAM.call(v224.write, v224, [v225], JAM.policy.p40);
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v227 = j$$9 < lengthOut$$1;
  }
  var v228 = outputWindow.document;
  var v229 = sequence$$14 + "\n";
  JAM.call(v228.write, v228, [v229], JAM.policy.p40);
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
  var v233 = dnaConformation == "circular";
  if (v233) {
    var v230 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p26);
    shiftValue = v230.length;
    var v586 = sequence$$15.length;
    var v531 = v586 - lookAhead;
    var v532 = sequence$$15.length;
    var v441 = JAM.call(sequence$$15.substring, sequence$$15, [v531, v532], JAM.policy.p41);
    var v231 = v441 + sequence$$15;
    var v232 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p26);
    sequence$$15 = v231 + v232;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v234 = outputWindow.document;
  JAM.call(v234.write, v234, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p24);
  var v235 = outputWindow.document;
  var v587 = '<tr><td class="title" width="200px">' + "Site:";
  var v533 = v587 + '</td><td class="title">';
  var v442 = v533 + "Positions:";
  var v236 = v442 + "</td></tr>\n";
  JAM.call(v235.write, v235, [v236], JAM.policy.p40);
  var i$$9 = 0;
  var v443 = arrayOfItems.length;
  var v252 = i$$9 < v443;
  for (;v252;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v444 = arrayOfItems[i$$9];
    var v237 = JAM.call(v444.match, v444, [/\/.+\//], JAM.policy.p29);
    matchExp = v237 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v588 = arrayOfItems[i$$9];
    var v534 = JAM.call(v588.match, v588, [/\)\D*\d+/], JAM.policy.p29);
    var v445 = v534.toString();
    var v238 = JAM.call(v445.replace, v445, [/\)\D*/, ""], JAM.policy.p28);
    cutDistance = parseFloat(v238);
    var v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p40);
    for (;v244;) {
      var v239 = matchExp.lastIndex;
      matchPosition = v239 - cutDistance;
      var v446 = matchPosition >= lowerLimit;
      if (v446) {
        v446 = matchPosition < upperLimit;
      }
      var v242 = v446;
      if (v242) {
        timesFound = timesFound + 1;
        var v240 = tempString$$1 + ", ";
        var v447 = matchPosition - shiftValue;
        var v241 = v447 + 1;
        tempString$$1 = v240 + v241;
      }
      var v448 = matchExp.lastIndex;
      var v535 = RegExp.lastMatch;
      var v449 = v535.length;
      var v243 = v448 - v449;
      matchExp.lastIndex = v243 + 1;
      v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p40);
    }
    var v450 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p29);
    var v245 = v450 != -1;
    if (v245) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p28);
    }
    var v249 = timesFound == 0;
    if (v249) {
      backGroundClass = "none";
    } else {
      var v248 = timesFound == 1;
      if (v248) {
        backGroundClass = "one";
      } else {
        var v247 = timesFound == 2;
        if (v247) {
          backGroundClass = "two";
        } else {
          var v246 = timesFound == 3;
          if (v246) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v250 = outputWindow.document;
    var v662 = '<tr><td class="' + backGroundClass;
    var v650 = v662 + '">';
    var v682 = arrayOfItems[i$$9];
    var v673 = JAM.call(v682.match, v682, [/\([^\(]+\)/], JAM.policy.p29);
    var v663 = v673.toString();
    var v651 = JAM.call(v663.replace, v663, [/\(|\)/g, ""], JAM.policy.p28);
    var v638 = v650 + v651;
    var v621 = v638 + '</td><td class="';
    var v589 = v621 + backGroundClass;
    var v536 = v589 + '">';
    var v451 = v536 + tempString$$1;
    var v251 = v451 + "</td></tr>\n";
    JAM.call(v250.write, v250, [v251], JAM.policy.p40);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v452 = arrayOfItems.length;
    v252 = i$$9 < v452;
  }
  var v253 = outputWindow.document;
  JAM.call(v253.write, v253, ["</tbody></table>\n"], JAM.policy.p24);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v254 = outputWindow.document;
  JAM.call(v254.write, v254, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p24);
  var v255 = outputWindow.document;
  var v639 = '<tr><td class="title">' + "Pattern:";
  var v622 = v639 + '</td><td class="title">';
  var v590 = v622 + "Times found:";
  var v537 = v590 + '</td><td class="title">';
  var v453 = v537 + "Percentage:";
  var v256 = v453 + "</td></tr>\n";
  JAM.call(v255.write, v255, [v256], JAM.policy.p40);
  var i$$10 = 0;
  var v454 = arrayOfItems$$1.length;
  var v265 = i$$10 < v454;
  for (;v265;) {
    var tempNumber = 0;
    var v455 = arrayOfItems$$1[i$$10];
    var v257 = JAM.call(v455.match, v455, [/\/[^\/]+\//], JAM.policy.p29);
    var matchExp$$1 = v257 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v456 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p40);
    var v259 = v456 != -1;
    if (v259) {
      var v258 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p40);
      tempNumber = v258.length;
    }
    var percentage = 0;
    var v538 = originalLength + 1;
    var v623 = arrayOfItems$$1[i$$10];
    var v591 = JAM.call(v623.match, v623, [/\d+/], JAM.policy.p29);
    var v539 = parseFloat(v591);
    var v457 = v538 - v539;
    var v262 = v457 > 0;
    if (v262) {
      var v260 = 100 * tempNumber;
      var v458 = originalLength + 1;
      var v592 = arrayOfItems$$1[i$$10];
      var v540 = JAM.call(v592.match, v592, [/\d+/], JAM.policy.p29);
      var v459 = parseFloat(v540);
      var v261 = v458 - v459;
      percentage = v260 / v261;
    }
    var v263 = outputWindow.document;
    var v683 = arrayOfItems$$1[i$$10];
    var v674 = JAM.call(v683.match, v683, [/\([^\(]+\)\b/], JAM.policy.p29);
    var v664 = v674.toString();
    var v652 = JAM.call(v664.replace, v664, [/\(|\)/g, ""], JAM.policy.p28);
    var v640 = "<tr><td>" + v652;
    var v624 = v640 + "</td><td>";
    var v593 = v624 + tempNumber;
    var v541 = v593 + "</td><td>";
    var v542 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p22);
    var v460 = v541 + v542;
    var v264 = v460 + "</td></tr>\n";
    JAM.call(v263.write, v263, [v264], JAM.policy.p40);
    i$$10 = i$$10 + 1;
    var v461 = arrayOfItems$$1.length;
    v265 = i$$10 < v461;
  }
  var v266 = outputWindow.document;
  JAM.call(v266.write, v266, ["</tbody></table>\n"], JAM.policy.p24);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v462 = sequence$$17.length;
  var v273 = v462 > 0;
  for (;v273;) {
    maxNum$$1 = sequence$$17.length;
    var v463 = Math.random();
    var v267 = v463 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v267], JAM.policy.p29);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p29);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p26);
    var v268 = randNum$$1 + 1;
    var v269 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v268, v269], JAM.policy.p28);
    sequence$$17 = tempString1 + tempString2;
    var v464 = tempSeq.length;
    var v272 = v464 == 60;
    if (v272) {
      var v270 = outputWindow.document;
      var v271 = tempSeq + "\n";
      JAM.call(v270.write, v270, [v271], JAM.policy.p40);
      tempSeq = "";
    }
    var v465 = sequence$$17.length;
    v273 = v465 > 0;
  }
  var v274 = outputWindow.document;
  var v275 = tempSeq + "\n";
  JAM.call(v274.write, v274, [v275], JAM.policy.p40);
  return true;
}
function dnaStats(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 5E5;
  var v466 = testScript();
  var v276 = v466 == false;
  if (v276) {
    return false;
  }
  var v653 = theDocument.forms;
  var v641 = v653[0];
  var v625 = v641.elements;
  var v594 = v625[0];
  var v543 = checkFormElement(v594);
  var v467 = v543 == false;
  var v545 = !v467;
  if (v545) {
    var v665 = theDocument.forms;
    var v654 = v665[0];
    var v642 = v654.elements;
    var v626 = v642[0];
    var v595 = v626.value;
    var v544 = checkSequenceLength(v595, maxInput$$3);
    v467 = v544 == false;
  }
  var v277 = v467;
  if (v277) {
    return false;
  }
  var itemsToCheck = ["/g/ (g)1", "/a/ (a)1", "/t/ (t)1", "/c/ (c)1", "/n/ (n)1", "/u/ (u)1", "/r/ (r)1", "/y/ (y)1", "/s/ (s)1", "/w/ (w)1", "/k/ (k)1", "/m/ (m)1", "/b/ (b)1", "/d/ (d)1", "/h/ (h)1", "/v/ (v)1", "/g(?=g)/ (gg)2", "/g(?=a)/ (ga)2", "/g(?=t)/ (gt)2", "/g(?=c)/ (gc)2", "/g(?=n)/ (gn)2", "/a(?=g)/ (ag)2", "/a(?=a)/ (aa)2", "/a(?=t)/ (at)2", "/a(?=c)/ (ac)2", "/a(?=n)/ (an)2", "/t(?=g)/ (tg)2", "/t(?=a)/ (ta)2", "/t(?=t)/ (tt)2", "/t(?=c)/ (tc)2", "/t(?=n)/ (tn)2", "/c(?=g)/ (cg)2", 
  "/c(?=a)/ (ca)2", "/c(?=t)/ (ct)2", "/c(?=c)/ (cc)2", "/c(?=n)/ (cn)2", "/n(?=g)/ (ng)2", "/n(?=a)/ (na)2", "/n(?=t)/ (nt)2", "/n(?=c)/ (nc)2", "/n(?=n)/ (nn)2", "/g|c/ (g,c)1", "/a|t/ (a,t)1", "/r|y|s|w|k/ (r,y,s,w,k)1", "/b|h|d|v|n/ (b,h,d,v,n)1", "/r|y|s|w|k|m|b|d|h|v|n/ (r,y,s,w,k,m,b,d,h,v,n)1"];
  openWindow("DNA Stats");
  var v627 = theDocument.forms;
  var v596 = v627[0];
  var v546 = v596.elements;
  var v468 = v546[0];
  var v278 = v468.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v278);
  var i$$11 = 0;
  var v469 = arrayOfFasta$$1.length;
  var v284 = i$$11 < v469;
  for (;v284;) {
    var v279 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v279);
    var v280 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v280);
    newDna = removeNonDna(newDna);
    var v281 = outputWindow.document;
    var v282 = getInfoFromTitleAndSequence(title$$9, newDna);
    JAM.call(v281.write, v281, [v282], JAM.policy.p40);
    writeSequenceStats(newDna, itemsToCheck);
    var v283 = outputWindow.document;
    JAM.call(v283.write, v283, ["<br />\n<br />\n"], JAM.policy.p24);
    i$$11 = i$$11 + 1;
    var v470 = arrayOfFasta$$1.length;
    v284 = i$$11 < v470;
  }
  closeWindow();
  return true;
}
JAM.set(document, "onload", v2);
var v285 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p24);
JAM.set(v285, "onclick", v3);
var v286 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p24);
JAM.set(v286, "onclick", v4)
