function v4() {
  var v541 = document.forms;
  var v463 = v541[0];
  var v279 = v463.elements;
  var v5 = v279[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    groupProtein();
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v280 = document.main_form;
  var v7 = v280.main_submit;
  v7.focus();
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
  var v8 = arrayOfSequences[0];
  var lengthOfAlign = v8.length;
  var v281 = arrayOfSequences.length;
  var v9 = v281 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v282 = arrayOfTitles.length;
  var v11 = i$$1 < v282;
  for (;v11;) {
    var v594 = arrayOfTitles[i$$1];
    var v542 = JAM.call(v594.search, v594, [/\S/], JAM.policy.p15);
    var v464 = v542 == -1;
    var v544 = !v464;
    if (v544) {
      var v595 = arrayOfSequences[i$$1];
      var v543 = JAM.call(v595.search, v595, [/\S/], JAM.policy.p15);
      v464 = v543 == -1;
    }
    var v283 = v464;
    var v466 = !v283;
    if (v466) {
      var v545 = arrayOfSequences[i$$1];
      var v465 = v545.length;
      v283 = v465 != lengthOfAlign;
    }
    var v10 = v283;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v284 = arrayOfTitles.length;
    v11 = i$$1 < v284;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v631 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p15);
  var v596 = v631 == -1;
  var v633 = !v596;
  if (v633) {
    var v632 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p15);
    v596 = v632 == -1;
  }
  var v546 = v596;
  var v598 = !v546;
  if (v598) {
    var v597 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p15);
    v546 = v597 == -1;
  }
  var v467 = v546;
  var v548 = !v467;
  if (v548) {
    var v547 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p15);
    v467 = v547 == -1;
  }
  var v285 = v467;
  var v469 = !v285;
  if (v469) {
    var v468 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p15);
    v285 = v468 == -1;
  }
  var v12 = v285;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v470 = formElement.value;
  var v286 = JAM.call(v470.search, v470, [/\S/], JAM.policy.p15);
  var v13 = v286 == -1;
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
  var v287 = arrayOfPatterns.length;
  var v16 = z$$2 < v287;
  for (;v16;) {
    var v471 = arrayOfPatterns[z$$2];
    var v288 = JAM.call(v471.search, v471, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p15);
    var v14 = v288 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v472 = arrayOfPatterns[z$$2];
    var v289 = moreExpressionCheck(v472);
    var v15 = v289 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v290 = arrayOfPatterns.length;
    v16 = z$$2 < v290;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v291 = arrayOfPatterns.length;
  var v22 = j < v291;
  for (;v22;) {
    var v473 = arrayOfPatterns[j];
    var v292 = JAM.call(v473.match, v473, [/\/.+\//], JAM.policy.p15);
    var v19 = v292 + "gi";
    if (JAM.isEval(eval)) {
      var v728 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v728 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v728;
    var v293 = arrayOfPatterns[j];
    var v20 = JAM.call(v293.match, v293, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v729 = v20.toString();
    geneticCodeMatchResult[j] = v729;
    var v21 = geneticCodeMatchResult[j];
    var v730 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v730;
    j++;
    var v294 = arrayOfPatterns.length;
    v22 = j < v294;
  }
  var i$$2 = 0;
  var v474 = testSequence.length;
  var v295 = v474 - 3;
  var v29 = i$$2 <= v295;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p16);
    j = 0;
    var v296 = geneticCodeMatchExp.length;
    var v27 = j < v296;
    for (;v27;) {
      var v475 = geneticCodeMatchExp[j];
      var v297 = JAM.call(codon.search, codon, [v475], JAM.policy.p17);
      var v26 = v297 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v298 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v298 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v299 = geneticCodeMatchExp.length;
      v27 = j < v299;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v476 = testSequence.length;
    var v300 = v476 - 3;
    v29 = i$$2 <= v300;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v301 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v301;
  for (;v31;) {
    var v477 = arrayOfPatterns$$1[z$$3];
    var v302 = JAM.call(v477.search, v477, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p15);
    var v30 = v302 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v303 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v303;
  }
  var i$$3 = 0;
  var v304 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v304;
  for (;v35;) {
    var v478 = arrayOfPatterns$$1[i$$3];
    var v305 = "[" + v478;
    var v32 = v305 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v306 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v306;
    for (;v34;) {
      var v479 = arrayOfPatterns$$1[j$$1];
      var v307 = JAM.call(v479.search, v479, [re], JAM.policy.p17);
      var v33 = v307 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v308 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v308;
    }
    i$$3++;
    var v309 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v309;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v310 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v310;
  for (;v38;) {
    var v480 = arrayOfPatterns$$2[z$$4];
    var v311 = JAM.call(v480.search, v480, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p15);
    var v36 = v311 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v481 = arrayOfPatterns$$2[z$$4];
    var v312 = moreExpressionCheck(v481);
    var v37 = v312 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v313 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v313;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v549 = getSequenceFromFasta(text$$7);
  var v482 = JAM.call(v549.replace, v549, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v314 = v482.length;
  var v40 = v314 > maxInput;
  if (v40) {
    var v315 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v315 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v316 = text$$8.length;
  var v42 = v316 > maxInput$$1;
  if (v42) {
    var v317 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v317 + " characters.";
    alert(v41);
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
  var v318 = alignArray.length;
  var v49 = v318 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v319 = alignArray.length;
  var v51 = i$$4 < v319;
  for (;v51;) {
    var v483 = alignArray[i$$4];
    var v320 = JAM.call(v483.search, v483, [/[^\s]+\s/], JAM.policy.p15);
    var v50 = v320 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v321 = alignArray.length;
    v51 = i$$4 < v321;
  }
  return true;
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p16);
  return alignSeq;
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p16);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p16);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p16);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p16);
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v322 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v54 = v322 != -1;
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
  var v323 = sequence$$2.length;
  var v55 = "&gt;results for " + v323;
  var stringToReturn = v55 + " residue sequence ";
  var v324 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p15);
  var v57 = v324 != -1;
  if (v57) {
    var v325 = stringToReturn + '"';
    var v56 = v325 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v326 = stringToReturn + ' starting "';
  var v327 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v326 + v327;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v328 = sequenceOne.length;
  var v59 = "Search results for " + v328;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v329 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p15);
  var v61 = v329 != -1;
  if (v61) {
    var v330 = stringToReturn$$1 + '"';
    var v60 = v330 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v331 = stringToReturn$$1 + ' starting "';
  var v332 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v331 + v332;
  stringToReturn$$1 = v62 + '"\n';
  var v333 = stringToReturn$$1 + "and ";
  var v334 = sequenceTwo.length;
  var v63 = v333 + v334;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v335 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p15);
  var v65 = v335 != -1;
  if (v65) {
    var v336 = stringToReturn$$1 + '"';
    var v64 = v336 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v337 = stringToReturn$$1 + ' starting "';
  var v338 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v66 = v337 + v338;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v339 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v339;
  for (;v70;) {
    var v484 = arrayOfPatterns$$3[j$$2];
    var v340 = JAM.call(v484.match, v484, [/\/.+\//], JAM.policy.p15);
    var v69 = v340 + "gi";
    if (JAM.isEval(eval)) {
      var v731 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v731 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v731;
    j$$2++;
    var v341 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v341;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v342 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v342;
  for (;v74;) {
    var v343 = arrayOfPatterns$$4[j$$3];
    var v72 = JAM.call(v343.match, v343, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v732 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v732;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v733 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v733;
    j$$3++;
    var v344 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v344;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v345 = sequence$$3.length;
  var v75 = "Results for " + v345;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v346 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p15);
  var v77 = v346 != -1;
  if (v77) {
    var v347 = stringToReturn$$2 + '"';
    var v76 = v347 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v348 = stringToReturn$$2 + ' starting "';
  var v349 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v78 = v348 + v349;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v485 = "Results for " + topology;
  var v350 = v485 + " ";
  var v351 = sequence$$4.length;
  var v80 = v350 + v351;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v352 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p15);
  var v82 = v352 != -1;
  if (v82) {
    var v353 = stringToReturn$$3 + '"';
    var v81 = v353 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v354 = stringToReturn$$3 + ' starting "';
  var v355 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v354 + v355;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v356 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v356;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v357 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p15);
  var v87 = v357 != -1;
  if (v87) {
    var v358 = stringToReturn$$4 + '"';
    var v86 = v358 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v359 = stringToReturn$$4 + ' starting "';
  var v360 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v359 + v360;
  stringToReturn$$4 = v88 + '"\n';
  var v361 = stringToReturn$$4 + "and ";
  var v362 = sequenceTwo$$1.length;
  var v89 = v361 + v362;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v363 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p15);
  var v91 = v363 != -1;
  if (v91) {
    var v364 = stringToReturn$$4 + '"';
    var v90 = v364 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v365 = stringToReturn$$4 + ' starting "';
  var v366 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v92 = v365 + v366;
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
    var v367 = Math.random();
    var v368 = components.length;
    var v94 = v367 * v368;
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p15);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p11);
}
function getSequenceFromFasta(sequenceRecord) {
  var v369 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v96 = v369 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v370 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v98 = v370 != -1;
  if (v98) {
    var v97 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
    fastaTitle = v97.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p16);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v706 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p15);
  var v699 = v706 != -1;
  var v708 = !v699;
  if (v708) {
    var v707 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p15);
    v699 = v707 != -1;
  }
  var v690 = v699;
  var v701 = !v690;
  if (v701) {
    var v700 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p15);
    v690 = v700 != -1;
  }
  var v681 = v690;
  var v692 = !v681;
  if (v692) {
    var v691 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p15);
    v681 = v691 != -1;
  }
  var v670 = v681;
  var v683 = !v670;
  if (v683) {
    var v682 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p15);
    v670 = v682 != -1;
  }
  var v652 = v670;
  var v672 = !v652;
  if (v672) {
    var v671 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p15);
    v652 = v671 != -1;
  }
  var v634 = v652;
  var v654 = !v634;
  if (v654) {
    var v653 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p15);
    v634 = v653 != -1;
  }
  var v599 = v634;
  var v636 = !v599;
  if (v636) {
    var v635 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p15);
    v599 = v635 != -1;
  }
  var v550 = v599;
  var v601 = !v550;
  if (v601) {
    var v600 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p15);
    v550 = v600 != -1;
  }
  var v486 = v550;
  var v552 = !v486;
  if (v552) {
    var v551 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p15);
    v486 = v551 != -1;
  }
  var v371 = v486;
  var v488 = !v371;
  if (v488) {
    var v487 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p15);
    v371 = v487 != -1;
  }
  var v99 = v371;
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
  var title$$5 = "Group Protein";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v553 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v489 = v553 + "<head>\n";
  var v372 = v489 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v372 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p17);
  if (isColor) {
    var v106 = outputWindow.document;
    var v721 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v717 = v721 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v713 = v717 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v709 = v713 + "div.info {font-weight: bold}\n";
    var v702 = v709 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v693 = v702 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v684 = v693 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v673 = v684 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v655 = v673 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v637 = v655 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v602 = v637 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v554 = v602 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v490 = v554 + "td.many {color: #000000}\n";
    var v373 = v490 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v373 + "</style>\n";
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
    var v685 = v694 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v674 = v685 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v656 = v674 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v638 = v656 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v603 = v638 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v555 = v603 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v491 = v555 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v374 = v491 + "img {display: none}\n";
    var v109 = v374 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p17);
  }
  var v110 = outputWindow.document;
  var v556 = "</head>\n" + '<body class="main">\n';
  var v492 = v556 + '<div class="title">';
  var v375 = v492 + title$$6;
  var v111 = v375 + " results</div>\n";
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
  var v557 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v493 = v557 + "<head>\n";
  var v376 = v493 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v376 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p17);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v723 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v719 = v723 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v715 = v719 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v711 = v715 + "div.info {font-weight: bold}\n";
    var v704 = v711 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v695 = v704 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v686 = v695 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v675 = v686 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v657 = v675 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v639 = v657 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v604 = v639 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v558 = v604 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v494 = v558 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v377 = v494 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v377 + "</style>\n";
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
    var v687 = v696 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v676 = v687 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v658 = v676 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v640 = v658 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v605 = v640 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v559 = v605 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v495 = v559 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v378 = v495 + "img {display: none}\n";
    var v117 = v378 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p17);
  }
  var v118 = outputWindow.document;
  var v560 = "</head>\n" + '<body class="main">\n';
  var v496 = v560 + '<div class="title">';
  var v379 = v496 + title$$8;
  var v119 = v379 + " results</div>\n";
  JAM.call(v118.write, v118, [v119], JAM.policy.p17);
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
  var v380 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p15);
  var v120 = v380 != -1;
  if (v120) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p15);
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
  var v381 = testArray[0];
  var v124 = v381 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v382 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v125 = v382 == -1;
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
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p16);
  var v127 = testString != "1X2X3X";
  if (v127) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v383 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9);
  var v128 = v383 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v384 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9);
  var v129 = v384 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v385 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p15);
  var v130 = v385 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v606 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p15);
  var v561 = v606 == -1;
  var v608 = !v561;
  if (v608) {
    var v607 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p15);
    v561 = v607 == -1;
  }
  var v497 = v561;
  var v563 = !v497;
  if (v563) {
    var v562 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p15);
    v497 = v562 == -1;
  }
  var v386 = v497;
  var v499 = !v386;
  if (v499) {
    var v498 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p15);
    v386 = v498 == -1;
  }
  var v131 = v386;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v387 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p15);
  var v132 = v387 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v388 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v388 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v389 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p15);
  var v135 = v389 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v390 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p15);
  var v136 = v390 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v609 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p15);
  var v564 = v609 == -1;
  var v611 = !v564;
  if (v611) {
    var v610 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p15);
    v564 = v610 == -1;
  }
  var v500 = v564;
  var v566 = !v500;
  if (v566) {
    var v565 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p15);
    v500 = v565 == -1;
  }
  var v391 = v500;
  var v502 = !v391;
  if (v502) {
    var v501 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p15);
    v391 = v501 == -1;
  }
  var v137 = v391;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v612 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p15);
  var v567 = v612 == -1;
  var v614 = !v567;
  if (v614) {
    var v613 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p15);
    v567 = v613 == -1;
  }
  var v503 = v567;
  var v569 = !v503;
  if (v569) {
    var v568 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p15);
    v503 = v568 == -1;
  }
  var v392 = v503;
  var v505 = !v392;
  if (v505) {
    var v504 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p15);
    v392 = v504 == -1;
  }
  var v138 = v392;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v393 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p15);
  var v139 = v393 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v615 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p15);
  var v570 = v615 == -1;
  var v617 = !v570;
  if (v617) {
    var v616 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p15);
    v570 = v616 == -1;
  }
  var v506 = v570;
  var v572 = !v506;
  if (v572) {
    var v571 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p15);
    v506 = v571 == -1;
  }
  var v394 = v506;
  var v508 = !v394;
  if (v508) {
    var v507 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p15);
    v394 = v507 == -1;
  }
  var v140 = v394;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v395 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p15);
  var v141 = v395 == -1;
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
    var v396 = basePerLine / groupSize;
    var v145 = j$$6 <= v396;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v397 = k + i$$5;
        var v143 = JAM.call(text$$10.charAt, text$$10, [v397], JAM.policy.p17);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v398 = basePerLine / groupSize;
      v145 = j$$6 <= v398;
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
    var v399 = adjustment < 0;
    if (v399) {
      v399 = adjusted >= 0;
    }
    var v149 = v399;
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
    var v400 = basePerLine$$2 / groupSize$$2;
    var v156 = j$$7 <= v400;
    for (;v156;) {
      var v152 = k$$1 < groupSize$$2;
      for (;v152;) {
        var v401 = i$$6 + k$$1;
        var v150 = v401 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v402 = k$$1 + i$$6;
        var v151 = JAM.call(text$$12.charAt, text$$12, [v402], JAM.policy.p17);
        lineOfText$$1 = lineOfText$$1 + v151;
        k$$1 = k$$1 + 1;
        v152 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v154 = numberPosition$$1 == "above";
      if (v154) {
        var v403 = adjustNumbering(i$$6, numberingAdjustment);
        var v153 = rightNum(v403, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v153;
      }
      var v155 = i$$6 >= stopBase$$2;
      if (v155) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v404 = basePerLine$$2 / groupSize$$2;
      v156 = j$$7 <= v404;
    }
    var v179 = numberPosition$$1 == "left";
    if (v179) {
      var v157 = outputWindow.document;
      var v573 = adjustNumbering(lineNum, numberingAdjustment);
      var v509 = rightNum(v573, "", 8, tabIn$$3);
      var v405 = v509 + lineOfText$$1;
      var v158 = v405 + "\n";
      JAM.call(v157.write, v157, [v158], JAM.policy.p17);
      var v162 = strands$$1 == "two";
      if (v162) {
        var v159 = outputWindow.document;
        var v574 = adjustNumbering(lineNum, numberingAdjustment);
        var v510 = rightNum(v574, "", 8, tabIn$$3);
        var v511 = complement(lineOfText$$1);
        var v406 = v510 + v511;
        var v160 = v406 + "\n";
        JAM.call(v159.write, v159, [v160], JAM.policy.p17);
        var v161 = outputWindow.document;
        JAM.call(v161.write, v161, ["\n"], JAM.policy.p11);
      }
    } else {
      var v178 = numberPosition$$1 == "right";
      if (v178) {
        var v163 = outputWindow.document;
        var v512 = adjustNumbering(i$$6, numberingAdjustment);
        var v407 = lineOfText$$1 + v512;
        var v164 = v407 + "\n";
        JAM.call(v163.write, v163, [v164], JAM.policy.p17);
        var v168 = strands$$1 == "two";
        if (v168) {
          var v165 = outputWindow.document;
          var v513 = complement(lineOfText$$1);
          var v514 = adjustNumbering(i$$6, numberingAdjustment);
          var v408 = v513 + v514;
          var v166 = v408 + "\n";
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
            var v409 = complement(lineOfText$$1);
            var v174 = v409 + "\n";
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
function writeGroupNumProtein(text$$13, groupSize$$3, basePerLine$$3, stopBase$$3, numberPosition$$2) {
  var tabIn$$4 = "";
  var startBase$$3 = 0;
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
    var v410 = basePerLine$$3 / groupSize$$3;
    var v187 = j$$8 <= v410;
    for (;v187;) {
      var v183 = k$$2 < groupSize$$3;
      for (;v183;) {
        var v411 = i$$7 + k$$2;
        var v181 = v411 >= stopBase$$3;
        if (v181) {
          break;
        }
        var v412 = k$$2 + i$$7;
        var v182 = JAM.call(text$$13.charAt, text$$13, [v412], JAM.policy.p17);
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
      var v413 = basePerLine$$3 / groupSize$$3;
      v187 = j$$8 <= v413;
    }
    var v198 = numberPosition$$2 == "left";
    if (v198) {
      var v188 = outputWindow.document;
      var v515 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v414 = v515 + lineOfText$$2;
      var v189 = v414 + "\n";
      JAM.call(v188.write, v188, [v189], JAM.policy.p17);
    } else {
      var v197 = numberPosition$$2 == "right";
      if (v197) {
        var v190 = outputWindow.document;
        var v415 = lineOfText$$2 + i$$7;
        var v191 = v415 + "\n";
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
  return;
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
  var v575 = sequence$$13.length;
  var v516 = v575 <= firstIndexToMutate;
  var v576 = !v516;
  if (v576) {
    v516 = lastIndexToMutate < 0;
  }
  var v416 = v516;
  var v517 = !v416;
  if (v517) {
    v416 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v200 = v416;
  if (v200) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v208 = i$$8 < numMut;
  for (;v208;) {
    maxNum = sequence$$13.length;
    var v417 = Math.random();
    var v201 = v417 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v201], JAM.policy.p15);
    var v418 = randNum < firstIndexToMutate;
    var v518 = !v418;
    if (v518) {
      v418 = randNum > lastIndexToMutate;
    }
    var v202 = v418;
    if (v202) {
      numMut++;
      i$$8++;
      v208 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p15);
    needNewChar = true;
    for (;needNewChar;) {
      var v419 = Math.random();
      var v420 = components$$1.length;
      var v203 = v419 * v420;
      componentsIndex = JAM.call(Math.round, Math, [v203], JAM.policy.p15);
      var v421 = components$$1.length;
      var v204 = componentsIndex == v421;
      if (v204) {
        componentsIndex = 0;
      }
      var v422 = components$$1[componentsIndex];
      var v205 = v422 != currentChar;
      if (v205) {
        needNewChar = false;
      }
    }
    var v423 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v424 = components$$1[componentsIndex];
    var v206 = v423 + v424;
    var v425 = randNum + 1;
    var v426 = sequence$$13.length;
    var v207 = JAM.call(sequence$$13.substring, sequence$$13, [v425, v426], JAM.policy.p27);
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
    var v427 = Math.random();
    var v428 = components$$2.length;
    var v211 = v427 * v428;
    tempNum$$1 = JAM.call(Math.floor, Math, [v211], JAM.policy.p15);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v429 = sequence$$14.length;
    var v214 = v429 == 60;
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
    var v577 = sequence$$15.length;
    var v519 = v577 - lookAhead;
    var v520 = sequence$$15.length;
    var v430 = JAM.call(sequence$$15.substring, sequence$$15, [v519, v520], JAM.policy.p27);
    var v219 = v430 + sequence$$15;
    var v220 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v219 + v220;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v222 = outputWindow.document;
  JAM.call(v222.write, v222, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v223 = outputWindow.document;
  var v578 = '<tr><td class="title" width="200px">' + "Site:";
  var v521 = v578 + '</td><td class="title">';
  var v431 = v521 + "Positions:";
  var v224 = v431 + "</td></tr>\n";
  JAM.call(v223.write, v223, [v224], JAM.policy.p17);
  var i$$9 = 0;
  var v432 = arrayOfItems.length;
  var v240 = i$$9 < v432;
  for (;v240;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v433 = arrayOfItems[i$$9];
    var v225 = JAM.call(v433.match, v433, [/\/.+\//], JAM.policy.p15);
    matchExp = v225 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v579 = arrayOfItems[i$$9];
    var v522 = JAM.call(v579.match, v579, [/\)\D*\d+/], JAM.policy.p15);
    var v434 = v522.toString();
    var v226 = JAM.call(v434.replace, v434, [/\)\D*/, ""], JAM.policy.p16);
    cutDistance = parseFloat(v226);
    var v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v232;) {
      var v227 = matchExp.lastIndex;
      matchPosition = v227 - cutDistance;
      var v435 = matchPosition >= lowerLimit;
      if (v435) {
        v435 = matchPosition < upperLimit;
      }
      var v230 = v435;
      if (v230) {
        timesFound++;
        var v228 = tempString$$1 + ", ";
        var v436 = matchPosition - shiftValue;
        var v229 = v436 + 1;
        tempString$$1 = v228 + v229;
      }
      var v437 = matchExp.lastIndex;
      var v523 = RegExp.lastMatch;
      var v438 = v523.length;
      var v231 = v437 - v438;
      matchExp.lastIndex = v231 + 1;
      v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v439 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p15);
    var v233 = v439 != -1;
    if (v233) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p16);
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
    var v677 = '<tr><td class="' + backGroundClass;
    var v659 = v677 + '">';
    var v697 = arrayOfItems[i$$9];
    var v688 = JAM.call(v697.match, v697, [/\([^\(]+\)/], JAM.policy.p15);
    var v678 = v688.toString();
    var v660 = JAM.call(v678.replace, v678, [/\(|\)/g, ""], JAM.policy.p16);
    var v641 = v659 + v660;
    var v618 = v641 + '</td><td class="';
    var v580 = v618 + backGroundClass;
    var v524 = v580 + '">';
    var v440 = v524 + tempString$$1;
    var v239 = v440 + "</td></tr>\n";
    JAM.call(v238.write, v238, [v239], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v441 = arrayOfItems.length;
    v240 = i$$9 < v441;
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
  var v642 = '<tr><td class="title">' + "Pattern:";
  var v619 = v642 + '</td><td class="title">';
  var v581 = v619 + "Times found:";
  var v525 = v581 + '</td><td class="title">';
  var v442 = v525 + "Percentage:";
  var v244 = v442 + "</td></tr>\n";
  JAM.call(v243.write, v243, [v244], JAM.policy.p17);
  var i$$10 = 0;
  var v443 = arrayOfItems$$1.length;
  var v253 = i$$10 < v443;
  for (;v253;) {
    var tempNumber = 0;
    var v444 = arrayOfItems$$1[i$$10];
    var v245 = JAM.call(v444.match, v444, [/\/[^\/]+\//], JAM.policy.p15);
    var matchExp$$1 = v245 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v445 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v247 = v445 != -1;
    if (v247) {
      var v246 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v246.length;
    }
    var percentage = 0;
    var v526 = originalLength + 1;
    var v620 = arrayOfItems$$1[i$$10];
    var v582 = JAM.call(v620.match, v620, [/\d+/], JAM.policy.p15);
    var v527 = parseFloat(v582);
    var v446 = v526 - v527;
    var v250 = v446 > 0;
    if (v250) {
      var v248 = 100 * tempNumber;
      var v447 = originalLength + 1;
      var v583 = arrayOfItems$$1[i$$10];
      var v528 = JAM.call(v583.match, v583, [/\d+/], JAM.policy.p15);
      var v448 = parseFloat(v528);
      var v249 = v447 - v448;
      percentage = v248 / v249;
    }
    var v251 = outputWindow.document;
    var v698 = arrayOfItems$$1[i$$10];
    var v689 = JAM.call(v698.match, v698, [/\([^\(]+\)\b/], JAM.policy.p15);
    var v679 = v689.toString();
    var v661 = JAM.call(v679.replace, v679, [/\(|\)/g, ""], JAM.policy.p16);
    var v643 = "<tr><td>" + v661;
    var v621 = v643 + "</td><td>";
    var v584 = v621 + tempNumber;
    var v529 = v584 + "</td><td>";
    var v530 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9);
    var v449 = v529 + v530;
    var v252 = v449 + "</td></tr>\n";
    JAM.call(v251.write, v251, [v252], JAM.policy.p17);
    i$$10++;
    var v450 = arrayOfItems$$1.length;
    v253 = i$$10 < v450;
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
  var v451 = sequence$$17.length;
  var v261 = v451 > 0;
  for (;v261;) {
    maxNum$$1 = sequence$$17.length;
    var v452 = Math.random();
    var v255 = v452 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v255], JAM.policy.p15);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p15);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v256 = randNum$$1 + 1;
    var v257 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v256, v257], JAM.policy.p16);
    sequence$$17 = tempString1 + tempString2;
    var v453 = tempSeq.length;
    var v260 = v453 == 60;
    if (v260) {
      var v258 = outputWindow.document;
      var v259 = tempSeq + "\n";
      JAM.call(v258.write, v258, [v259], JAM.policy.p17);
      tempSeq = "";
    }
    var v454 = sequence$$17.length;
    v261 = v454 > 0;
  }
  var v262 = outputWindow.document;
  var v263 = tempSeq + "\n";
  JAM.call(v262.write, v262, [v263], JAM.policy.p17);
  return true;
}
function groupProtein() {
  var theDocument = document;
  var newProtein = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var v455 = testScript();
  var v264 = v455 == false;
  if (v264) {
    return;
  }
  var v662 = theDocument.forms;
  var v644 = v662[0];
  var v622 = v644.elements;
  var v585 = v622[0];
  var v531 = checkFormElement(v585);
  var v456 = v531 == false;
  var v533 = !v456;
  if (v533) {
    var v680 = theDocument.forms;
    var v663 = v680[0];
    var v645 = v663.elements;
    var v623 = v645[0];
    var v586 = v623.value;
    var v532 = checkSequenceLength(v586, maxInput$$3);
    v456 = v532 == false;
  }
  var v265 = v456;
  if (v265) {
    return;
  }
  openWindow();
  openPre();
  var v624 = theDocument.forms;
  var v587 = v624[0];
  var v534 = v587.elements;
  var v457 = v534[0];
  var v266 = v457.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v266);
  var i$$11 = 0;
  var v458 = arrayOfFasta$$1.length;
  var v276 = i$$11 < v458;
  for (;v276;) {
    var v267 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v267);
    var v268 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v268);
    newProtein = removeNonProtein(newProtein);
    var v269 = outputWindow.document;
    var v270 = getInfoFromTitleAndSequence(title$$9, newProtein);
    JAM.call(v269.write, v269, [v270], JAM.policy.p17);
    var v664 = theDocument.forms;
    var v646 = v664[0];
    var v625 = v646.elements;
    var v588 = v625[4];
    var v535 = v588.options;
    var v665 = theDocument.forms;
    var v647 = v665[0];
    var v626 = v647.elements;
    var v589 = v626[4];
    var v536 = v589.selectedIndex;
    var v459 = v535[v536];
    var v271 = v459.value;
    var v666 = theDocument.forms;
    var v648 = v666[0];
    var v627 = v648.elements;
    var v590 = v627[5];
    var v537 = v590.options;
    var v667 = theDocument.forms;
    var v649 = v667[0];
    var v628 = v649.elements;
    var v591 = v628[5];
    var v538 = v591.selectedIndex;
    var v460 = v537[v538];
    var v272 = v460.value;
    var v273 = newProtein.length;
    var v668 = theDocument.forms;
    var v650 = v668[0];
    var v629 = v650.elements;
    var v592 = v629[6];
    var v539 = v592.options;
    var v669 = theDocument.forms;
    var v651 = v669[0];
    var v630 = v651.elements;
    var v593 = v630[6];
    var v540 = v593.selectedIndex;
    var v461 = v539[v540];
    var v274 = v461.value;
    writeGroupNumProtein(newProtein, v271, v272, v273, v274);
    var v275 = outputWindow.document;
    JAM.call(v275.write, v275, ["\n\n"], JAM.policy.p11);
    i$$11++;
    var v462 = arrayOfFasta$$1.length;
    v276 = i$$11 < v462;
  }
  closePre();
  closeWindow();
  return;
}
JAM.set(document, "onload", v2);
var v277 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11);
JAM.set(v277, "onclick", v3);
var v278 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11);
JAM.set(v278, "onclick", v4)
