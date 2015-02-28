
JAM.startProfile('load');
function v4() {
  var v544 = document.forms;
  var v467 = v544[0];
  var v280 = v467.elements;
  var v5 = v280[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    combineFasta();
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v281 = document.main_form;
  var v7 = v281.main_submit;
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
  var v282 = arrayOfSequences.length;
  var v9 = v282 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v283 = arrayOfTitles.length;
  var v11 = i$$1 < v283;
  for (;v11;) {
    var v593 = arrayOfTitles[i$$1];
    var v545 = JAM.call(v593.search, v593, [/\S/], JAM.policy.p17);
    var v468 = v545 == -1;
    var v547 = !v468;
    if (v547) {
      var v594 = arrayOfSequences[i$$1];
      var v546 = JAM.call(v594.search, v594, [/\S/], JAM.policy.p17);
      v468 = v546 == -1;
    }
    var v284 = v468;
    var v470 = !v284;
    if (v470) {
      var v548 = arrayOfSequences[i$$1];
      var v469 = v548.length;
      v284 = v469 != lengthOfAlign;
    }
    var v10 = v284;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v285 = arrayOfTitles.length;
    v11 = i$$1 < v285;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v628 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17);
  var v595 = v628 == -1;
  var v630 = !v595;
  if (v630) {
    var v629 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17);
    v595 = v629 == -1;
  }
  var v549 = v595;
  var v597 = !v549;
  if (v597) {
    var v596 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17);
    v549 = v596 == -1;
  }
  var v471 = v549;
  var v551 = !v471;
  if (v551) {
    var v550 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17);
    v471 = v550 == -1;
  }
  var v286 = v471;
  var v473 = !v286;
  if (v473) {
    var v472 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17);
    v286 = v472 == -1;
  }
  var v12 = v286;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v474 = formElement.value;
  var v287 = JAM.call(v474.search, v474, [/\S/], JAM.policy.p17);
  var v13 = v287 == -1;
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
  var v288 = arrayOfPatterns.length;
  var v16 = z$$2 < v288;
  for (;v16;) {
    var v475 = arrayOfPatterns[z$$2];
    var v289 = JAM.call(v475.search, v475, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17);
    var v14 = v289 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v476 = arrayOfPatterns[z$$2];
    var v290 = moreExpressionCheck(v476);
    var v15 = v290 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v291 = arrayOfPatterns.length;
    v16 = z$$2 < v291;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v292 = arrayOfPatterns.length;
  var v22 = j < v292;
  for (;v22;) {
    var v477 = arrayOfPatterns[j];
    var v293 = JAM.call(v477.match, v477, [/\/.+\//], JAM.policy.p17);
    var v19 = v293 + "gi";
    if (JAM.isEval(eval)) {
      var v717 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v717 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v717;
    var v294 = arrayOfPatterns[j];
    var v20 = JAM.call(v294.match, v294, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v718 = v20.toString();
    geneticCodeMatchResult[j] = v718;
    var v21 = geneticCodeMatchResult[j];
    var v719 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v719;
    j++;
    var v295 = arrayOfPatterns.length;
    v22 = j < v295;
  }
  var i$$2 = 0;
  var v478 = testSequence.length;
  var v296 = v478 - 3;
  var v29 = i$$2 <= v296;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p15);
    j = 0;
    var v297 = geneticCodeMatchExp.length;
    var v27 = j < v297;
    for (;v27;) {
      var v479 = geneticCodeMatchExp[j];
      var v298 = JAM.call(codon.search, codon, [v479], JAM.policy.p16);
      var v26 = v298 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v299 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v299 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v300 = geneticCodeMatchExp.length;
      v27 = j < v300;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v480 = testSequence.length;
    var v301 = v480 - 3;
    v29 = i$$2 <= v301;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v302 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v302;
  for (;v31;) {
    var v481 = arrayOfPatterns$$1[z$$3];
    var v303 = JAM.call(v481.search, v481, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17);
    var v30 = v303 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v304 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v304;
  }
  var i$$3 = 0;
  var v305 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v305;
  for (;v35;) {
    var v482 = arrayOfPatterns$$1[i$$3];
    var v306 = "[" + v482;
    var v32 = v306 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v307 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v307;
    for (;v34;) {
      var v483 = arrayOfPatterns$$1[j$$1];
      var v308 = JAM.call(v483.search, v483, [re], JAM.policy.p16);
      var v33 = v308 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v309 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v309;
    }
    i$$3++;
    var v310 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v310;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v311 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v311;
  for (;v38;) {
    var v484 = arrayOfPatterns$$2[z$$4];
    var v312 = JAM.call(v484.search, v484, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17);
    var v36 = v312 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v485 = arrayOfPatterns$$2[z$$4];
    var v313 = moreExpressionCheck(v485);
    var v37 = v313 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v314 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v314;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v552 = getSequenceFromFasta(text$$7);
  var v486 = JAM.call(v552.replace, v552, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v315 = v486.length;
  var v40 = v315 > maxInput;
  if (v40) {
    var v316 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v316 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v317 = text$$8.length;
  var v42 = v317 > maxInput$$1;
  if (v42) {
    var v318 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v318 + " characters.";
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
  var v319 = alignArray.length;
  var v49 = v319 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v320 = alignArray.length;
  var v51 = i$$4 < v320;
  for (;v51;) {
    var v487 = alignArray[i$$4];
    var v321 = JAM.call(v487.search, v487, [/[^\s]+\s/], JAM.policy.p17);
    var v50 = v321 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v322 = alignArray.length;
    v51 = i$$4 < v322;
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
  var v323 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v54 = v323 != -1;
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
  var v324 = sequence$$2.length;
  var v55 = "&gt;results for " + v324;
  var stringToReturn = v55 + " residue sequence ";
  var v325 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p17);
  var v57 = v325 != -1;
  if (v57) {
    var v326 = stringToReturn + '"';
    var v56 = v326 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v327 = stringToReturn + ' starting "';
  var v328 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v327 + v328;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v329 = sequenceOne.length;
  var v59 = "Search results for " + v329;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v330 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p17);
  var v61 = v330 != -1;
  if (v61) {
    var v331 = stringToReturn$$1 + '"';
    var v60 = v331 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v332 = stringToReturn$$1 + ' starting "';
  var v333 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v332 + v333;
  stringToReturn$$1 = v62 + '"\n';
  var v334 = stringToReturn$$1 + "and ";
  var v335 = sequenceTwo.length;
  var v63 = v334 + v335;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v336 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p17);
  var v65 = v336 != -1;
  if (v65) {
    var v337 = stringToReturn$$1 + '"';
    var v64 = v337 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v338 = stringToReturn$$1 + ' starting "';
  var v339 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v66 = v338 + v339;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v340 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v340;
  for (;v70;) {
    var v488 = arrayOfPatterns$$3[j$$2];
    var v341 = JAM.call(v488.match, v488, [/\/.+\//], JAM.policy.p17);
    var v69 = v341 + "gi";
    if (JAM.isEval(eval)) {
      var v720 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v720 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v720;
    j$$2++;
    var v342 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v342;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v343 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v343;
  for (;v74;) {
    var v344 = arrayOfPatterns$$4[j$$3];
    var v72 = JAM.call(v344.match, v344, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v721 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v721;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v722 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v722;
    j$$3++;
    var v345 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v345;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v346 = sequence$$3.length;
  var v75 = "Results for " + v346;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v347 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p17);
  var v77 = v347 != -1;
  if (v77) {
    var v348 = stringToReturn$$2 + '"';
    var v76 = v348 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v349 = stringToReturn$$2 + ' starting "';
  var v350 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v78 = v349 + v350;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v489 = "Results for " + topology;
  var v351 = v489 + " ";
  var v352 = sequence$$4.length;
  var v80 = v351 + v352;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v353 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p17);
  var v82 = v353 != -1;
  if (v82) {
    var v354 = stringToReturn$$3 + '"';
    var v81 = v354 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v355 = stringToReturn$$3 + ' starting "';
  var v356 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v355 + v356;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v357 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v357;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v358 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p17);
  var v87 = v358 != -1;
  if (v87) {
    var v359 = stringToReturn$$4 + '"';
    var v86 = v359 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v360 = stringToReturn$$4 + ' starting "';
  var v361 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v360 + v361;
  stringToReturn$$4 = v88 + '"\n';
  var v362 = stringToReturn$$4 + "and ";
  var v363 = sequenceTwo$$1.length;
  var v89 = v362 + v363;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v364 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p17);
  var v91 = v364 != -1;
  if (v91) {
    var v365 = stringToReturn$$4 + '"';
    var v90 = v365 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v366 = stringToReturn$$4 + ' starting "';
  var v367 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v92 = v366 + v367;
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
    var v368 = Math.random();
    var v369 = components.length;
    var v94 = v368 * v369;
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p16);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p11);
}
function getSequenceFromFasta(sequenceRecord) {
  var v370 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v96 = v370 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v371 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v98 = v371 != -1;
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
  var v695 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p17);
  var v688 = v695 != -1;
  var v697 = !v688;
  if (v697) {
    var v696 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17);
    v688 = v696 != -1;
  }
  var v679 = v688;
  var v690 = !v679;
  if (v690) {
    var v689 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17);
    v679 = v689 != -1;
  }
  var v670 = v679;
  var v681 = !v670;
  if (v681) {
    var v680 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17);
    v670 = v680 != -1;
  }
  var v659 = v670;
  var v672 = !v659;
  if (v672) {
    var v671 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17);
    v659 = v671 != -1;
  }
  var v645 = v659;
  var v661 = !v645;
  if (v661) {
    var v660 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17);
    v645 = v660 != -1;
  }
  var v631 = v645;
  var v647 = !v631;
  if (v647) {
    var v646 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17);
    v631 = v646 != -1;
  }
  var v598 = v631;
  var v633 = !v598;
  if (v633) {
    var v632 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17);
    v598 = v632 != -1;
  }
  var v553 = v598;
  var v600 = !v553;
  if (v600) {
    var v599 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17);
    v553 = v599 != -1;
  }
  var v490 = v553;
  var v555 = !v490;
  if (v555) {
    var v554 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17);
    v490 = v554 != -1;
  }
  var v372 = v490;
  var v492 = !v372;
  if (v492) {
    var v491 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17);
    v372 = v491 != -1;
  }
  var v99 = v372;
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
  var title$$5 = "Combine FASTA";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v556 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v493 = v556 + "<head>\n";
  var v373 = v493 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v373 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p16);
  if (isColor) {
    var v106 = outputWindow.document;
    var v710 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v706 = v710 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v702 = v706 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v698 = v702 + "div.info {font-weight: bold}\n";
    var v691 = v698 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v682 = v691 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v673 = v682 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v662 = v673 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v648 = v662 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v634 = v648 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v601 = v634 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v557 = v601 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v494 = v557 + "td.many {color: #000000}\n";
    var v374 = v494 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v374 + "</style>\n";
    JAM.call(v106.write, v106, [v107], JAM.policy.p16);
  } else {
    var v108 = outputWindow.document;
    var v714 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v711 = v714 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v707 = v711 + "div.title {display: none}\n";
    var v703 = v707 + "div.info {font-weight: bold}\n";
    var v699 = v703 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v692 = v699 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v683 = v692 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v674 = v683 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v663 = v674 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v649 = v663 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v635 = v649 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v602 = v635 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v558 = v602 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v495 = v558 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v375 = v495 + "img {display: none}\n";
    var v109 = v375 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p16);
  }
  var v110 = outputWindow.document;
  var v559 = "</head>\n" + '<body class="main">\n';
  var v496 = v559 + '<div class="title">';
  var v376 = v496 + title$$6;
  var v111 = v376 + " results</div>\n";
  JAM.call(v110.write, v110, [v111], JAM.policy.p16);
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
  var v560 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v497 = v560 + "<head>\n";
  var v377 = v497 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v377 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p16);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v712 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v708 = v712 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v704 = v708 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v700 = v704 + "div.info {font-weight: bold}\n";
    var v693 = v700 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v684 = v693 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v675 = v684 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v664 = v675 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v650 = v664 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v636 = v650 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v603 = v636 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v561 = v603 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v498 = v561 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v378 = v498 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v378 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p16);
  } else {
    var v116 = outputWindow.document;
    var v716 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v715 = v716 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v713 = v715 + "div.title {display: none}\n";
    var v709 = v713 + "div.info {font-weight: bold}\n";
    var v705 = v709 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v701 = v705 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v694 = v701 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v685 = v694 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v676 = v685 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v665 = v676 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v651 = v665 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v637 = v651 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v604 = v637 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v562 = v604 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v499 = v562 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v379 = v499 + "img {display: none}\n";
    var v117 = v379 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p16);
  }
  var v118 = outputWindow.document;
  var v563 = "</head>\n" + '<body class="main">\n';
  var v500 = v563 + '<div class="title">';
  var v380 = v500 + title$$8;
  var v119 = v380 + " results</div>\n";
  JAM.call(v118.write, v118, [v119], JAM.policy.p16);
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
  var v381 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p17);
  var v120 = v381 != -1;
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
  var v382 = testArray[0];
  var v124 = v382 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v383 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p16);
  var v125 = v383 == -1;
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
  var v384 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9);
  var v128 = v384 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v385 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9);
  var v129 = v385 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v386 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p17);
  var v130 = v386 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v605 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17);
  var v564 = v605 == -1;
  var v607 = !v564;
  if (v607) {
    var v606 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17);
    v564 = v606 == -1;
  }
  var v501 = v564;
  var v566 = !v501;
  if (v566) {
    var v565 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17);
    v501 = v565 == -1;
  }
  var v387 = v501;
  var v503 = !v387;
  if (v503) {
    var v502 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17);
    v387 = v502 == -1;
  }
  var v131 = v387;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v388 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p17);
  var v132 = v388 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v389 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v389 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v390 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p17);
  var v135 = v390 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v391 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p17);
  var v136 = v391 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v608 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17);
  var v567 = v608 == -1;
  var v610 = !v567;
  if (v610) {
    var v609 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17);
    v567 = v609 == -1;
  }
  var v504 = v567;
  var v569 = !v504;
  if (v569) {
    var v568 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17);
    v504 = v568 == -1;
  }
  var v392 = v504;
  var v506 = !v392;
  if (v506) {
    var v505 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17);
    v392 = v505 == -1;
  }
  var v137 = v392;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v611 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17);
  var v570 = v611 == -1;
  var v613 = !v570;
  if (v613) {
    var v612 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17);
    v570 = v612 == -1;
  }
  var v507 = v570;
  var v572 = !v507;
  if (v572) {
    var v571 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17);
    v507 = v571 == -1;
  }
  var v393 = v507;
  var v509 = !v393;
  if (v509) {
    var v508 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17);
    v393 = v508 == -1;
  }
  var v138 = v393;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v394 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p17);
  var v139 = v394 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v614 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17);
  var v573 = v614 == -1;
  var v616 = !v573;
  if (v616) {
    var v615 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17);
    v573 = v615 == -1;
  }
  var v510 = v573;
  var v575 = !v510;
  if (v575) {
    var v574 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17);
    v510 = v574 == -1;
  }
  var v395 = v510;
  var v512 = !v395;
  if (v512) {
    var v511 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17);
    v395 = v511 == -1;
  }
  var v140 = v395;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v396 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p17);
  var v141 = v396 == -1;
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
    var v397 = basePerLine / groupSize;
    var v145 = j$$6 <= v397;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v398 = k + i$$5;
        var v143 = JAM.call(text$$10.charAt, text$$10, [v398], JAM.policy.p16);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v399 = basePerLine / groupSize;
      v145 = j$$6 <= v399;
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
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v400 = adjustment < 0;
    if (v400) {
      v400 = adjusted >= 0;
    }
    var v149 = v400;
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
    var v401 = basePerLine$$2 / groupSize$$2;
    var v156 = j$$7 <= v401;
    for (;v156;) {
      var v152 = k$$1 < groupSize$$2;
      for (;v152;) {
        var v402 = i$$6 + k$$1;
        var v150 = v402 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v403 = k$$1 + i$$6;
        var v151 = JAM.call(text$$12.charAt, text$$12, [v403], JAM.policy.p16);
        lineOfText$$1 = lineOfText$$1 + v151;
        k$$1 = k$$1 + 1;
        v152 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v154 = numberPosition$$1 == "above";
      if (v154) {
        var v404 = adjustNumbering(i$$6, numberingAdjustment);
        var v153 = rightNum(v404, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v153;
      }
      var v155 = i$$6 >= stopBase$$2;
      if (v155) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v405 = basePerLine$$2 / groupSize$$2;
      v156 = j$$7 <= v405;
    }
    var v179 = numberPosition$$1 == "left";
    if (v179) {
      var v157 = outputWindow.document;
      var v576 = adjustNumbering(lineNum, numberingAdjustment);
      var v513 = rightNum(v576, "", 8, tabIn$$3);
      var v406 = v513 + lineOfText$$1;
      var v158 = v406 + "\n";
      JAM.call(v157.write, v157, [v158], JAM.policy.p16);
      var v162 = strands$$1 == "two";
      if (v162) {
        var v159 = outputWindow.document;
        var v577 = adjustNumbering(lineNum, numberingAdjustment);
        var v514 = rightNum(v577, "", 8, tabIn$$3);
        var v515 = complement(lineOfText$$1);
        var v407 = v514 + v515;
        var v160 = v407 + "\n";
        JAM.call(v159.write, v159, [v160], JAM.policy.p16);
        var v161 = outputWindow.document;
        JAM.call(v161.write, v161, ["\n"], JAM.policy.p11);
      }
    } else {
      var v178 = numberPosition$$1 == "right";
      if (v178) {
        var v163 = outputWindow.document;
        var v516 = adjustNumbering(i$$6, numberingAdjustment);
        var v408 = lineOfText$$1 + v516;
        var v164 = v408 + "\n";
        JAM.call(v163.write, v163, [v164], JAM.policy.p16);
        var v168 = strands$$1 == "two";
        if (v168) {
          var v165 = outputWindow.document;
          var v517 = complement(lineOfText$$1);
          var v518 = adjustNumbering(i$$6, numberingAdjustment);
          var v409 = v517 + v518;
          var v166 = v409 + "\n";
          JAM.call(v165.write, v165, [v166], JAM.policy.p16);
          var v167 = outputWindow.document;
          JAM.call(v167.write, v167, ["\n"], JAM.policy.p11);
        }
      } else {
        var v177 = numberPosition$$1 == "above";
        if (v177) {
          var v169 = outputWindow.document;
          var v170 = aboveNum + "\n";
          JAM.call(v169.write, v169, [v170], JAM.policy.p16);
          var v171 = outputWindow.document;
          var v172 = lineOfText$$1 + "\n";
          JAM.call(v171.write, v171, [v172], JAM.policy.p16);
          var v176 = strands$$1 == "two";
          if (v176) {
            var v173 = outputWindow.document;
            var v410 = complement(lineOfText$$1);
            var v174 = v410 + "\n";
            JAM.call(v173.write, v173, [v174], JAM.policy.p16);
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
    var v411 = basePerLine$$3 / groupSize$$3;
    var v187 = j$$8 <= v411;
    for (;v187;) {
      var v183 = k$$2 < groupSize$$3;
      for (;v183;) {
        var v412 = i$$7 + k$$2;
        var v181 = v412 >= stopBase$$3;
        if (v181) {
          break;
        }
        var v413 = k$$2 + i$$7;
        var v182 = JAM.call(text$$13.charAt, text$$13, [v413], JAM.policy.p16);
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
      var v414 = basePerLine$$3 / groupSize$$3;
      v187 = j$$8 <= v414;
    }
    var v198 = numberPosition$$2 == "left";
    if (v198) {
      var v188 = outputWindow.document;
      var v519 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v415 = v519 + lineOfText$$2;
      var v189 = v415 + "\n";
      JAM.call(v188.write, v188, [v189], JAM.policy.p16);
    } else {
      var v197 = numberPosition$$2 == "right";
      if (v197) {
        var v190 = outputWindow.document;
        var v416 = lineOfText$$2 + i$$7;
        var v191 = v416 + "\n";
        JAM.call(v190.write, v190, [v191], JAM.policy.p16);
      } else {
        var v196 = numberPosition$$2 == "above";
        if (v196) {
          var v192 = outputWindow.document;
          var v193 = aboveNum$$1 + "\n";
          JAM.call(v192.write, v192, [v193], JAM.policy.p16);
          var v194 = outputWindow.document;
          var v195 = lineOfText$$2 + "\n";
          JAM.call(v194.write, v194, [v195], JAM.policy.p16);
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
  var v578 = sequence$$13.length;
  var v520 = v578 <= firstIndexToMutate;
  var v579 = !v520;
  if (v579) {
    v520 = lastIndexToMutate < 0;
  }
  var v417 = v520;
  var v521 = !v417;
  if (v521) {
    v417 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v200 = v417;
  if (v200) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v208 = i$$8 < numMut;
  for (;v208;) {
    maxNum = sequence$$13.length;
    var v418 = Math.random();
    var v201 = v418 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v201], JAM.policy.p17);
    var v419 = randNum < firstIndexToMutate;
    var v522 = !v419;
    if (v522) {
      v419 = randNum > lastIndexToMutate;
    }
    var v202 = v419;
    if (v202) {
      numMut++;
      i$$8++;
      v208 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p17);
    needNewChar = true;
    for (;needNewChar;) {
      var v420 = Math.random();
      var v421 = components$$1.length;
      var v203 = v420 * v421;
      componentsIndex = JAM.call(Math.round, Math, [v203], JAM.policy.p17);
      var v422 = components$$1.length;
      var v204 = componentsIndex == v422;
      if (v204) {
        componentsIndex = 0;
      }
      var v423 = components$$1[componentsIndex];
      var v205 = v423 != currentChar;
      if (v205) {
        needNewChar = false;
      }
    }
    var v424 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v425 = components$$1[componentsIndex];
    var v206 = v424 + v425;
    var v426 = randNum + 1;
    var v427 = sequence$$13.length;
    var v207 = JAM.call(sequence$$13.substring, sequence$$13, [v426, v427], JAM.policy.p27);
    sequence$$13 = v206 + v207;
    i$$8++;
    v208 = i$$8 < numMut;
  }
  var v209 = outputWindow.document;
  var v210 = addReturns(sequence$$13);
  JAM.call(v209.write, v209, [v210], JAM.policy.p16);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v215 = j$$9 < lengthOut$$1;
  for (;v215;) {
    var v428 = Math.random();
    var v429 = components$$2.length;
    var v211 = v428 * v429;
    tempNum$$1 = JAM.call(Math.floor, Math, [v211], JAM.policy.p17);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v430 = sequence$$14.length;
    var v214 = v430 == 60;
    if (v214) {
      var v212 = outputWindow.document;
      var v213 = sequence$$14 + "\n";
      JAM.call(v212.write, v212, [v213], JAM.policy.p16);
      sequence$$14 = "";
    }
    j$$9++;
    v215 = j$$9 < lengthOut$$1;
  }
  var v216 = outputWindow.document;
  var v217 = sequence$$14 + "\n";
  JAM.call(v216.write, v216, [v217], JAM.policy.p16);
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
    var v580 = sequence$$15.length;
    var v523 = v580 - lookAhead;
    var v524 = sequence$$15.length;
    var v431 = JAM.call(sequence$$15.substring, sequence$$15, [v523, v524], JAM.policy.p27);
    var v219 = v431 + sequence$$15;
    var v220 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v219 + v220;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v222 = outputWindow.document;
  JAM.call(v222.write, v222, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v223 = outputWindow.document;
  var v581 = '<tr><td class="title" width="200px">' + "Site:";
  var v525 = v581 + '</td><td class="title">';
  var v432 = v525 + "Positions:";
  var v224 = v432 + "</td></tr>\n";
  JAM.call(v223.write, v223, [v224], JAM.policy.p16);
  var i$$9 = 0;
  var v433 = arrayOfItems.length;
  var v240 = i$$9 < v433;
  for (;v240;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v434 = arrayOfItems[i$$9];
    var v225 = JAM.call(v434.match, v434, [/\/.+\//], JAM.policy.p17);
    matchExp = v225 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v582 = arrayOfItems[i$$9];
    var v526 = JAM.call(v582.match, v582, [/\)\D*\d+/], JAM.policy.p17);
    var v435 = v526.toString();
    var v226 = JAM.call(v435.replace, v435, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v226);
    var v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
    for (;v232;) {
      var v227 = matchExp.lastIndex;
      matchPosition = v227 - cutDistance;
      var v436 = matchPosition >= lowerLimit;
      if (v436) {
        v436 = matchPosition < upperLimit;
      }
      var v230 = v436;
      if (v230) {
        timesFound++;
        var v228 = tempString$$1 + ", ";
        var v437 = matchPosition - shiftValue;
        var v229 = v437 + 1;
        tempString$$1 = v228 + v229;
      }
      var v438 = matchExp.lastIndex;
      var v527 = RegExp.lastMatch;
      var v439 = v527.length;
      var v231 = v438 - v439;
      matchExp.lastIndex = v231 + 1;
      v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
    }
    var v440 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p17);
    var v233 = v440 != -1;
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
    var v666 = '<tr><td class="' + backGroundClass;
    var v652 = v666 + '">';
    var v686 = arrayOfItems[i$$9];
    var v677 = JAM.call(v686.match, v686, [/\([^\(]+\)/], JAM.policy.p17);
    var v667 = v677.toString();
    var v653 = JAM.call(v667.replace, v667, [/\(|\)/g, ""], JAM.policy.p15);
    var v638 = v652 + v653;
    var v617 = v638 + '</td><td class="';
    var v583 = v617 + backGroundClass;
    var v528 = v583 + '">';
    var v441 = v528 + tempString$$1;
    var v239 = v441 + "</td></tr>\n";
    JAM.call(v238.write, v238, [v239], JAM.policy.p16);
    timesFound = 0;
    i$$9++;
    var v442 = arrayOfItems.length;
    v240 = i$$9 < v442;
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
  var v639 = '<tr><td class="title">' + "Pattern:";
  var v618 = v639 + '</td><td class="title">';
  var v584 = v618 + "Times found:";
  var v529 = v584 + '</td><td class="title">';
  var v443 = v529 + "Percentage:";
  var v244 = v443 + "</td></tr>\n";
  JAM.call(v243.write, v243, [v244], JAM.policy.p16);
  var i$$10 = 0;
  var v444 = arrayOfItems$$1.length;
  var v253 = i$$10 < v444;
  for (;v253;) {
    var tempNumber = 0;
    var v445 = arrayOfItems$$1[i$$10];
    var v245 = JAM.call(v445.match, v445, [/\/[^\/]+\//], JAM.policy.p17);
    var matchExp$$1 = v245 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v446 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p16);
    var v247 = v446 != -1;
    if (v247) {
      var v246 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p16);
      tempNumber = v246.length;
    }
    var percentage = 0;
    var v530 = originalLength + 1;
    var v619 = arrayOfItems$$1[i$$10];
    var v585 = JAM.call(v619.match, v619, [/\d+/], JAM.policy.p17);
    var v531 = parseFloat(v585);
    var v447 = v530 - v531;
    var v250 = v447 > 0;
    if (v250) {
      var v248 = 100 * tempNumber;
      var v448 = originalLength + 1;
      var v586 = arrayOfItems$$1[i$$10];
      var v532 = JAM.call(v586.match, v586, [/\d+/], JAM.policy.p17);
      var v449 = parseFloat(v532);
      var v249 = v448 - v449;
      percentage = v248 / v249;
    }
    var v251 = outputWindow.document;
    var v687 = arrayOfItems$$1[i$$10];
    var v678 = JAM.call(v687.match, v687, [/\([^\(]+\)\b/], JAM.policy.p17);
    var v668 = v678.toString();
    var v654 = JAM.call(v668.replace, v668, [/\(|\)/g, ""], JAM.policy.p15);
    var v640 = "<tr><td>" + v654;
    var v620 = v640 + "</td><td>";
    var v587 = v620 + tempNumber;
    var v533 = v587 + "</td><td>";
    var v534 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9);
    var v450 = v533 + v534;
    var v252 = v450 + "</td></tr>\n";
    JAM.call(v251.write, v251, [v252], JAM.policy.p16);
    i$$10++;
    var v451 = arrayOfItems$$1.length;
    v253 = i$$10 < v451;
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
  var v452 = sequence$$17.length;
  var v261 = v452 > 0;
  for (;v261;) {
    maxNum$$1 = sequence$$17.length;
    var v453 = Math.random();
    var v255 = v453 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v255], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v256 = randNum$$1 + 1;
    var v257 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v256, v257], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v454 = tempSeq.length;
    var v260 = v454 == 60;
    if (v260) {
      var v258 = outputWindow.document;
      var v259 = tempSeq + "\n";
      JAM.call(v258.write, v258, [v259], JAM.policy.p16);
      tempSeq = "";
    }
    var v455 = sequence$$17.length;
    v261 = v455 > 0;
  }
  var v262 = outputWindow.document;
  var v263 = tempSeq + "\n";
  JAM.call(v262.write, v262, [v263], JAM.policy.p16);
  return true;
}
function combineFasta() {
  var theDocument = document;
  var maxInput$$3 = 5E5;
  var sequenceCount = 0;
  var sequences = new Array;
  var v456 = testScript();
  var v264 = v456 == false;
  if (v264) {
    return;
  }
  var v655 = theDocument.forms;
  var v641 = v655[0];
  var v621 = v641.elements;
  var v588 = v621[0];
  var v535 = checkFormElement(v588);
  var v457 = v535 == false;
  var v537 = !v457;
  if (v537) {
    var v669 = theDocument.forms;
    var v656 = v669[0];
    var v642 = v656.elements;
    var v622 = v642[0];
    var v589 = v622.value;
    var v536 = checkTextLength(v589, maxInput$$3);
    v457 = v536 == false;
  }
  var v265 = v457;
  if (v265) {
    return;
  }
  var v623 = theDocument.forms;
  var v590 = v623[0];
  var v538 = v590.elements;
  var v458 = v538[0];
  var v266 = v458.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v266);
  var i$$11 = 0;
  var v459 = arrayOfFasta$$1.length;
  var v268 = i$$11 < v459;
  for (;v268;) {
    var v539 = arrayOfFasta$$1[i$$11];
    var v460 = getSequenceFromFasta(v539);
    var v267 = removeNonLetters(v460);
    JAM.call(sequences.push, sequences, [v267], JAM.policy.p16);
    i$$11++;
    var v461 = arrayOfFasta$$1.length;
    v268 = i$$11 < v461;
  }
  var sequence$$18 = JAM.call(sequences.join, sequences, [""], JAM.policy.p11);
  openWindow();
  openPre();
  var v462 = sequences.length;
  var v275 = v462 == 1;
  if (v275) {
    var v269 = outputWindow.document;
    var v657 = sequence$$18.length;
    var v643 = "&gt;results for " + v657;
    var v624 = v643 + " residue sequence made from ";
    var v625 = sequences.length;
    var v591 = v624 + v625;
    var v540 = v591 + ' records, starting "';
    var v541 = JAM.call(sequence$$18.substring, sequence$$18, [0, 10], JAM.policy.p13);
    var v463 = v540 + v541;
    var v270 = v463 + '"\n';
    JAM.call(v269.write, v269, [v270], JAM.policy.p16);
  } else {
    var v464 = sequences.length;
    var v274 = v464 > 1;
    if (v274) {
      var v271 = outputWindow.document;
      var v658 = sequence$$18.length;
      var v644 = "&gt;results for " + v658;
      var v626 = v644 + " residue sequence made from ";
      var v627 = sequences.length;
      var v592 = v626 + v627;
      var v542 = v592 + ' records, starting "';
      var v543 = JAM.call(sequence$$18.substring, sequence$$18, [0, 10], JAM.policy.p13);
      var v465 = v542 + v543;
      var v272 = v465 + '"\n';
      JAM.call(v271.write, v271, [v272], JAM.policy.p16);
    } else {
      var v273 = outputWindow.document;
      JAM.call(v273.write, v273, ['<div class="info">No sequence records were read</div>\n'], JAM.policy.p11);
    }
  }
  var v276 = outputWindow.document;
  var v466 = addReturns(sequence$$18);
  var v277 = v466 + "\n";
  JAM.call(v276.write, v276, [v277], JAM.policy.p16);
  closePre();
  closeWindow();
  return;
}
JAM.set(document, "onload", v2);
var v278 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11);
JAM.set(v278, "onclick", v3);
var v279 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11);
JAM.set(v279, "onclick", v4)

JAM.stopProfile('load');
