function v4() {
  var v549 = document.forms;
  var v472 = v549[0];
  var v285 = v472.elements;
  var v5 = v285[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    restSummary(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v286 = document.main_form;
  var v7 = v286.main_submit;
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
  var v287 = arrayOfSequences.length;
  var v9 = v287 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v288 = arrayOfTitles.length;
  var v11 = i$$1 < v288;
  for (;v11;) {
    var v601 = arrayOfTitles[i$$1];
    var v550 = JAM.call(v601.search, v601, [/\S/], JAM.policy.p16);
    var v473 = v550 == -1;
    var v552 = !v473;
    if (v552) {
      var v602 = arrayOfSequences[i$$1];
      var v551 = JAM.call(v602.search, v602, [/\S/], JAM.policy.p16);
      v473 = v551 == -1;
    }
    var v289 = v473;
    var v475 = !v289;
    if (v475) {
      var v553 = arrayOfSequences[i$$1];
      var v474 = v553.length;
      v289 = v474 != lengthOfAlign;
    }
    var v10 = v289;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v290 = arrayOfTitles.length;
    v11 = i$$1 < v290;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v637 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p16);
  var v603 = v637 == -1;
  var v639 = !v603;
  if (v639) {
    var v638 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p16);
    v603 = v638 == -1;
  }
  var v554 = v603;
  var v605 = !v554;
  if (v605) {
    var v604 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p16);
    v554 = v604 == -1;
  }
  var v476 = v554;
  var v556 = !v476;
  if (v556) {
    var v555 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p16);
    v476 = v555 == -1;
  }
  var v291 = v476;
  var v478 = !v291;
  if (v478) {
    var v477 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p16);
    v291 = v477 == -1;
  }
  var v12 = v291;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v479 = formElement.value;
  var v292 = JAM.call(v479.search, v479, [/\S/], JAM.policy.p16);
  var v13 = v292 == -1;
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
  var v293 = arrayOfPatterns.length;
  var v16 = z$$2 < v293;
  for (;v16;) {
    var v480 = arrayOfPatterns[z$$2];
    var v294 = JAM.call(v480.search, v480, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p16);
    var v14 = v294 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v481 = arrayOfPatterns[z$$2];
    var v295 = moreExpressionCheck(v481);
    var v15 = v295 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v296 = arrayOfPatterns.length;
    v16 = z$$2 < v296;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v297 = arrayOfPatterns.length;
  var v22 = j < v297;
  for (;v22;) {
    var v482 = arrayOfPatterns[j];
    var v298 = JAM.call(v482.match, v482, [/\/.+\//], JAM.policy.p16);
    var v19 = v298 + "gi";
    if (JAM.isEval(eval)) {
      var v838 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v838 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v838;
    var v299 = arrayOfPatterns[j];
    var v20 = JAM.call(v299.match, v299, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v839 = v20.toString();
    geneticCodeMatchResult[j] = v839;
    var v21 = geneticCodeMatchResult[j];
    var v840 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v840;
    j++;
    var v300 = arrayOfPatterns.length;
    v22 = j < v300;
  }
  var i$$2 = 0;
  var v483 = testSequence.length;
  var v301 = v483 - 3;
  var v29 = i$$2 <= v301;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p15);
    j = 0;
    var v302 = geneticCodeMatchExp.length;
    var v27 = j < v302;
    for (;v27;) {
      var v484 = geneticCodeMatchExp[j];
      var v303 = JAM.call(codon.search, codon, [v484], JAM.policy.p17);
      var v26 = v303 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v304 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v304 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v305 = geneticCodeMatchExp.length;
      v27 = j < v305;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v485 = testSequence.length;
    var v306 = v485 - 3;
    v29 = i$$2 <= v306;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v307 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v307;
  for (;v31;) {
    var v486 = arrayOfPatterns$$1[z$$3];
    var v308 = JAM.call(v486.search, v486, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p16);
    var v30 = v308 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v309 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v309;
  }
  var i$$3 = 0;
  var v310 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v310;
  for (;v35;) {
    var v487 = arrayOfPatterns$$1[i$$3];
    var v311 = "[" + v487;
    var v32 = v311 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v312 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v312;
    for (;v34;) {
      var v488 = arrayOfPatterns$$1[j$$1];
      var v313 = JAM.call(v488.search, v488, [re], JAM.policy.p17);
      var v33 = v313 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v314 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v314;
    }
    i$$3++;
    var v315 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v315;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v316 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v316;
  for (;v38;) {
    var v489 = arrayOfPatterns$$2[z$$4];
    var v317 = JAM.call(v489.search, v489, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p16);
    var v36 = v317 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v490 = arrayOfPatterns$$2[z$$4];
    var v318 = moreExpressionCheck(v490);
    var v37 = v318 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v319 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v319;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v557 = getSequenceFromFasta(text$$7);
  var v491 = JAM.call(v557.replace, v557, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v320 = v491.length;
  var v40 = v320 > maxInput;
  if (v40) {
    var v321 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v321 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v322 = text$$8.length;
  var v42 = v322 > maxInput$$1;
  if (v42) {
    var v323 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v323 + " characters.";
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
  var v324 = alignArray.length;
  var v49 = v324 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v325 = alignArray.length;
  var v51 = i$$4 < v325;
  for (;v51;) {
    var v492 = alignArray[i$$4];
    var v326 = JAM.call(v492.search, v492, [/[^\s]+\s/], JAM.policy.p16);
    var v50 = v326 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v327 = alignArray.length;
    v51 = i$$4 < v327;
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
  var v328 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v54 = v328 != -1;
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
  var v329 = sequence$$2.length;
  var v55 = "&gt;results for " + v329;
  var stringToReturn = v55 + " residue sequence ";
  var v330 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p16);
  var v57 = v330 != -1;
  if (v57) {
    var v331 = stringToReturn + '"';
    var v56 = v331 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v332 = stringToReturn + ' starting "';
  var v333 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v332 + v333;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v334 = sequenceOne.length;
  var v59 = "Search results for " + v334;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v335 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p16);
  var v61 = v335 != -1;
  if (v61) {
    var v336 = stringToReturn$$1 + '"';
    var v60 = v336 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v337 = stringToReturn$$1 + ' starting "';
  var v338 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v337 + v338;
  stringToReturn$$1 = v62 + '"\n';
  var v339 = stringToReturn$$1 + "and ";
  var v340 = sequenceTwo.length;
  var v63 = v339 + v340;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v341 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p16);
  var v65 = v341 != -1;
  if (v65) {
    var v342 = stringToReturn$$1 + '"';
    var v64 = v342 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v343 = stringToReturn$$1 + ' starting "';
  var v344 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v66 = v343 + v344;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v345 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v345;
  for (;v70;) {
    var v493 = arrayOfPatterns$$3[j$$2];
    var v346 = JAM.call(v493.match, v493, [/\/.+\//], JAM.policy.p16);
    var v69 = v346 + "gi";
    if (JAM.isEval(eval)) {
      var v841 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v841 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v841;
    j$$2++;
    var v347 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v347;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v348 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v348;
  for (;v74;) {
    var v349 = arrayOfPatterns$$4[j$$3];
    var v72 = JAM.call(v349.match, v349, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v842 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v842;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v843 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v843;
    j$$3++;
    var v350 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v350;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v351 = sequence$$3.length;
  var v75 = "Results for " + v351;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v352 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p16);
  var v77 = v352 != -1;
  if (v77) {
    var v353 = stringToReturn$$2 + '"';
    var v76 = v353 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v354 = stringToReturn$$2 + ' starting "';
  var v355 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v78 = v354 + v355;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v494 = "Results for " + topology;
  var v356 = v494 + " ";
  var v357 = sequence$$4.length;
  var v80 = v356 + v357;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v358 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p16);
  var v82 = v358 != -1;
  if (v82) {
    var v359 = stringToReturn$$3 + '"';
    var v81 = v359 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v360 = stringToReturn$$3 + ' starting "';
  var v361 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v360 + v361;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v362 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v362;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v363 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p16);
  var v87 = v363 != -1;
  if (v87) {
    var v364 = stringToReturn$$4 + '"';
    var v86 = v364 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v365 = stringToReturn$$4 + ' starting "';
  var v366 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v365 + v366;
  stringToReturn$$4 = v88 + '"\n';
  var v367 = stringToReturn$$4 + "and ";
  var v368 = sequenceTwo$$1.length;
  var v89 = v367 + v368;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v369 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p16);
  var v91 = v369 != -1;
  if (v91) {
    var v370 = stringToReturn$$4 + '"';
    var v90 = v370 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v371 = stringToReturn$$4 + ' starting "';
  var v372 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v92 = v371 + v372;
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
    var v373 = Math.random();
    var v374 = components.length;
    var v94 = v373 * v374;
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p16);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p9);
}
function getSequenceFromFasta(sequenceRecord) {
  var v375 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v96 = v375 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v376 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v98 = v376 != -1;
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
  var v716 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p16);
  var v708 = v716 != -1;
  var v718 = !v708;
  if (v718) {
    var v717 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p16);
    v708 = v717 != -1;
  }
  var v698 = v708;
  var v710 = !v698;
  if (v710) {
    var v709 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p16);
    v698 = v709 != -1;
  }
  var v688 = v698;
  var v700 = !v688;
  if (v700) {
    var v699 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p16);
    v688 = v699 != -1;
  }
  var v674 = v688;
  var v690 = !v674;
  if (v690) {
    var v689 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p16);
    v674 = v689 != -1;
  }
  var v657 = v674;
  var v676 = !v657;
  if (v676) {
    var v675 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p16);
    v657 = v675 != -1;
  }
  var v640 = v657;
  var v659 = !v640;
  if (v659) {
    var v658 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p16);
    v640 = v658 != -1;
  }
  var v606 = v640;
  var v642 = !v606;
  if (v642) {
    var v641 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p16);
    v606 = v641 != -1;
  }
  var v558 = v606;
  var v608 = !v558;
  if (v608) {
    var v607 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p16);
    v558 = v607 != -1;
  }
  var v495 = v558;
  var v560 = !v495;
  if (v560) {
    var v559 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p16);
    v495 = v559 != -1;
  }
  var v377 = v495;
  var v497 = !v377;
  if (v497) {
    var v496 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p16);
    v377 = v496 != -1;
  }
  var v99 = v377;
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
  var v561 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v498 = v561 + "<head>\n";
  var v378 = v498 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v378 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p17);
  if (isColor) {
    var v106 = outputWindow.document;
    var v734 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v729 = v734 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v724 = v729 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v719 = v724 + "div.info {font-weight: bold}\n";
    var v711 = v719 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v701 = v711 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v691 = v701 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v677 = v691 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v660 = v677 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v643 = v660 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v609 = v643 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v562 = v609 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v499 = v562 + "td.many {color: #000000}\n";
    var v379 = v499 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v379 + "</style>\n";
    JAM.call(v106.write, v106, [v107], JAM.policy.p17);
  } else {
    var v108 = outputWindow.document;
    var v739 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v735 = v739 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v730 = v735 + "div.title {display: none}\n";
    var v725 = v730 + "div.info {font-weight: bold}\n";
    var v720 = v725 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v712 = v720 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v702 = v712 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v692 = v702 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v678 = v692 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v661 = v678 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v644 = v661 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v610 = v644 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v563 = v610 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v500 = v563 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v380 = v500 + "img {display: none}\n";
    var v109 = v380 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p17);
  }
  var v110 = outputWindow.document;
  var v564 = "</head>\n" + '<body class="main">\n';
  var v501 = v564 + '<div class="title">';
  var v381 = v501 + title$$6;
  var v111 = v381 + " results</div>\n";
  JAM.call(v110.write, v110, [v111], JAM.policy.p17);
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
  var v565 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v502 = v565 + "<head>\n";
  var v382 = v502 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v382 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p17);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v736 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v731 = v736 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v726 = v731 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v721 = v726 + "div.info {font-weight: bold}\n";
    var v713 = v721 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v703 = v713 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v693 = v703 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v679 = v693 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v662 = v679 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v645 = v662 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v611 = v645 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v566 = v611 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v503 = v566 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v383 = v503 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v383 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p17);
  } else {
    var v116 = outputWindow.document;
    var v742 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v740 = v742 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v737 = v740 + "div.title {display: none}\n";
    var v732 = v737 + "div.info {font-weight: bold}\n";
    var v727 = v732 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v722 = v727 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v714 = v722 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v704 = v714 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v694 = v704 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v680 = v694 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v663 = v680 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v646 = v663 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v612 = v646 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v567 = v612 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v504 = v567 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v384 = v504 + "img {display: none}\n";
    var v117 = v384 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p17);
  }
  var v118 = outputWindow.document;
  var v568 = "</head>\n" + '<body class="main">\n';
  var v505 = v568 + '<div class="title">';
  var v385 = v505 + title$$8;
  var v119 = v385 + " results</div>\n";
  JAM.call(v118.write, v118, [v119], JAM.policy.p17);
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
  var v386 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p16);
  var v120 = v386 != -1;
  if (v120) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p16);
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p17);
  var v387 = testArray[0];
  var v124 = v387 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v388 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v125 = v388 == -1;
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
  var v389 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p10);
  var v128 = v389 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v390 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p10);
  var v129 = v390 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v391 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p16);
  var v130 = v391 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v613 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p16);
  var v569 = v613 == -1;
  var v615 = !v569;
  if (v615) {
    var v614 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p16);
    v569 = v614 == -1;
  }
  var v506 = v569;
  var v571 = !v506;
  if (v571) {
    var v570 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p16);
    v506 = v570 == -1;
  }
  var v392 = v506;
  var v508 = !v392;
  if (v508) {
    var v507 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p16);
    v392 = v507 == -1;
  }
  var v131 = v392;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v393 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p16);
  var v132 = v393 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v394 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v394 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v395 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p16);
  var v135 = v395 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v396 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p16);
  var v136 = v396 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v616 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p16);
  var v572 = v616 == -1;
  var v618 = !v572;
  if (v618) {
    var v617 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p16);
    v572 = v617 == -1;
  }
  var v509 = v572;
  var v574 = !v509;
  if (v574) {
    var v573 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p16);
    v509 = v573 == -1;
  }
  var v397 = v509;
  var v511 = !v397;
  if (v511) {
    var v510 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p16);
    v397 = v510 == -1;
  }
  var v137 = v397;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v619 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p16);
  var v575 = v619 == -1;
  var v621 = !v575;
  if (v621) {
    var v620 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p16);
    v575 = v620 == -1;
  }
  var v512 = v575;
  var v577 = !v512;
  if (v577) {
    var v576 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p16);
    v512 = v576 == -1;
  }
  var v398 = v512;
  var v514 = !v398;
  if (v514) {
    var v513 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p16);
    v398 = v513 == -1;
  }
  var v138 = v398;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v399 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p16);
  var v139 = v399 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v622 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p16);
  var v578 = v622 == -1;
  var v624 = !v578;
  if (v624) {
    var v623 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p16);
    v578 = v623 == -1;
  }
  var v515 = v578;
  var v580 = !v515;
  if (v580) {
    var v579 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p16);
    v515 = v579 == -1;
  }
  var v400 = v515;
  var v517 = !v400;
  if (v517) {
    var v516 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p16);
    v400 = v516 == -1;
  }
  var v140 = v400;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v401 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p16);
  var v141 = v401 == -1;
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
    var v402 = basePerLine / groupSize;
    var v145 = j$$6 <= v402;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v403 = k + i$$5;
        var v143 = JAM.call(text$$10.charAt, text$$10, [v403], JAM.policy.p17);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v404 = basePerLine / groupSize;
      v145 = j$$6 <= v404;
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
  JAM.call(writeGroupNumDnaSetStart, null, [text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0], JAM.policy.p19);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v405 = adjustment < 0;
    if (v405) {
      v405 = adjusted >= 0;
    }
    var v149 = v405;
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
    var v406 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v406;
    for (;v158;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v407 = i$$6 + k$$1;
        var v150 = v407 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v151 = lineOfText$$1;
        var v408 = k$$1 + i$$6;
        var v152 = JAM.call(text$$12.charAt, text$$12, [v408], JAM.policy.p17);
        lineOfText$$1 = v151 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v156 = numberPosition$$1 == "above";
      if (v156) {
        var v154 = aboveNum;
        var v409 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
        var v155 = rightNum(v409, "", groupSize$$2, tabIn$$3);
        aboveNum = v154 + v155;
      }
      var v157 = i$$6 >= stopBase$$2;
      if (v157) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v410 = basePerLine$$2 / groupSize$$2;
      v158 = j$$7 <= v410;
    }
    var v181 = numberPosition$$1 == "left";
    if (v181) {
      var v159 = outputWindow.document;
      var v581 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19);
      var v518 = rightNum(v581, "", 8, tabIn$$3);
      var v411 = v518 + lineOfText$$1;
      var v160 = v411 + "\n";
      JAM.call(v159.write, v159, [v160], JAM.policy.p17);
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v582 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19);
        var v519 = rightNum(v582, "", 8, tabIn$$3);
        var v520 = complement(lineOfText$$1);
        var v412 = v519 + v520;
        var v162 = v412 + "\n";
        JAM.call(v161.write, v161, [v162], JAM.policy.p17);
        var v163 = outputWindow.document;
        JAM.call(v163.write, v163, ["\n"], JAM.policy.p9);
      }
    } else {
      var v180 = numberPosition$$1 == "right";
      if (v180) {
        var v165 = outputWindow.document;
        var v521 = lineOfText$$1;
        var v522 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
        var v413 = v521 + v522;
        var v166 = v413 + "\n";
        JAM.call(v165.write, v165, [v166], JAM.policy.p17);
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v523 = complement(lineOfText$$1);
          var v524 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
          var v414 = v523 + v524;
          var v168 = v414 + "\n";
          JAM.call(v167.write, v167, [v168], JAM.policy.p17);
          var v169 = outputWindow.document;
          JAM.call(v169.write, v169, ["\n"], JAM.policy.p9);
        }
      } else {
        var v179 = numberPosition$$1 == "above";
        if (v179) {
          var v171 = outputWindow.document;
          var v172 = aboveNum + "\n";
          JAM.call(v171.write, v171, [v172], JAM.policy.p17);
          var v173 = outputWindow.document;
          var v174 = lineOfText$$1 + "\n";
          JAM.call(v173.write, v173, [v174], JAM.policy.p17);
          var v178 = strands$$1 == "two";
          if (v178) {
            var v175 = outputWindow.document;
            var v415 = complement(lineOfText$$1);
            var v176 = v415 + "\n";
            JAM.call(v175.write, v175, [v176], JAM.policy.p17);
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
    var v416 = basePerLine$$3 / groupSize$$3;
    var v189 = j$$8 <= v416;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        var v417 = i$$7 + k$$2;
        var v183 = v417 >= stopBase$$3;
        if (v183) {
          break;
        }
        var v418 = k$$2 + i$$7;
        var v184 = JAM.call(text$$13.charAt, text$$13, [v418], JAM.policy.p17);
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
      var v419 = basePerLine$$3 / groupSize$$3;
      v189 = j$$8 <= v419;
    }
    var v200 = numberPosition$$2 == "left";
    if (v200) {
      var v190 = outputWindow.document;
      var v525 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v420 = v525 + lineOfText$$2;
      var v191 = v420 + "\n";
      JAM.call(v190.write, v190, [v191], JAM.policy.p17);
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v421 = lineOfText$$2 + i$$7;
        var v193 = v421 + "\n";
        JAM.call(v192.write, v192, [v193], JAM.policy.p17);
      } else {
        var v198 = numberPosition$$2 == "above";
        if (v198) {
          var v194 = outputWindow.document;
          var v195 = aboveNum$$1 + "\n";
          JAM.call(v194.write, v194, [v195], JAM.policy.p17);
          var v196 = outputWindow.document;
          var v197 = lineOfText$$2 + "\n";
          JAM.call(v196.write, v196, [v197], JAM.policy.p17);
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
  var v583 = sequence$$13.length;
  var v526 = v583 <= firstIndexToMutate;
  var v584 = !v526;
  if (v584) {
    v526 = lastIndexToMutate < 0;
  }
  var v422 = v526;
  var v527 = !v422;
  if (v527) {
    v422 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v202 = v422;
  if (v202) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    var v423 = Math.random();
    var v203 = v423 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v203], JAM.policy.p16);
    var v424 = randNum < firstIndexToMutate;
    var v528 = !v424;
    if (v528) {
      v424 = randNum > lastIndexToMutate;
    }
    var v204 = v424;
    if (v204) {
      numMut++;
      i$$8++;
      v210 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p16);
    needNewChar = true;
    for (;needNewChar;) {
      var v425 = Math.random();
      var v426 = components$$1.length;
      var v205 = v425 * v426;
      componentsIndex = JAM.call(Math.round, Math, [v205], JAM.policy.p16);
      var v427 = components$$1.length;
      var v206 = componentsIndex == v427;
      if (v206) {
        componentsIndex = 0;
      }
      var v428 = components$$1[componentsIndex];
      var v207 = v428 != currentChar;
      if (v207) {
        needNewChar = false;
      }
    }
    var v429 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v430 = components$$1[componentsIndex];
    var v208 = v429 + v430;
    var v431 = randNum + 1;
    var v432 = sequence$$13.length;
    var v209 = JAM.call(sequence$$13.substring, sequence$$13, [v431, v432], JAM.policy.p21);
    sequence$$13 = v208 + v209;
    i$$8++;
    v210 = i$$8 < numMut;
  }
  var v211 = outputWindow.document;
  var v212 = addReturns(sequence$$13);
  JAM.call(v211.write, v211, [v212], JAM.policy.p17);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v217 = j$$9 < lengthOut$$1;
  for (;v217;) {
    var v433 = Math.random();
    var v434 = components$$2.length;
    var v213 = v433 * v434;
    tempNum$$1 = JAM.call(Math.floor, Math, [v213], JAM.policy.p16);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v435 = sequence$$14.length;
    var v216 = v435 == 60;
    if (v216) {
      var v214 = outputWindow.document;
      var v215 = sequence$$14 + "\n";
      JAM.call(v214.write, v214, [v215], JAM.policy.p17);
      sequence$$14 = "";
    }
    j$$9++;
    v217 = j$$9 < lengthOut$$1;
  }
  var v218 = outputWindow.document;
  var v219 = sequence$$14 + "\n";
  JAM.call(v218.write, v218, [v219], JAM.policy.p17);
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
    var v585 = sequence$$15.length;
    var v529 = v585 - lookAhead;
    var v530 = sequence$$15.length;
    var v436 = JAM.call(sequence$$15.substring, sequence$$15, [v529, v530], JAM.policy.p21);
    var v221 = v436 + sequence$$15;
    var v222 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v221 + v222;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  JAM.call(v224.write, v224, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v225 = outputWindow.document;
  var v586 = '<tr><td class="title" width="200px">' + "Site:";
  var v531 = v586 + '</td><td class="title">';
  var v437 = v531 + "Positions:";
  var v226 = v437 + "</td></tr>\n";
  JAM.call(v225.write, v225, [v226], JAM.policy.p17);
  var i$$9 = 0;
  var v438 = arrayOfItems.length;
  var v242 = i$$9 < v438;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v439 = arrayOfItems[i$$9];
    var v227 = JAM.call(v439.match, v439, [/\/.+\//], JAM.policy.p16);
    matchExp = v227 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v587 = arrayOfItems[i$$9];
    var v532 = JAM.call(v587.match, v587, [/\)\D*\d+/], JAM.policy.p16);
    var v440 = v532.toString();
    var v228 = JAM.call(v440.replace, v440, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v228);
    var v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v234;) {
      var v229 = matchExp.lastIndex;
      matchPosition = v229 - cutDistance;
      var v441 = matchPosition >= lowerLimit;
      if (v441) {
        v441 = matchPosition < upperLimit;
      }
      var v232 = v441;
      if (v232) {
        timesFound++;
        var v230 = tempString$$1 + ", ";
        var v442 = matchPosition - shiftValue;
        var v231 = v442 + 1;
        tempString$$1 = v230 + v231;
      }
      var v443 = matchExp.lastIndex;
      var v533 = RegExp.lastMatch;
      var v444 = v533.length;
      var v233 = v443 - v444;
      matchExp.lastIndex = v233 + 1;
      v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v445 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p16);
    var v235 = v445 != -1;
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
    var v681 = '<tr><td class="' + backGroundClass;
    var v664 = v681 + '">';
    var v705 = arrayOfItems[i$$9];
    var v695 = JAM.call(v705.match, v705, [/\([^\(]+\)/], JAM.policy.p16);
    var v682 = v695.toString();
    var v665 = JAM.call(v682.replace, v682, [/\(|\)/g, ""], JAM.policy.p15);
    var v647 = v664 + v665;
    var v625 = v647 + '</td><td class="';
    var v588 = v625 + backGroundClass;
    var v534 = v588 + '">';
    var v446 = v534 + tempString$$1;
    var v241 = v446 + "</td></tr>\n";
    JAM.call(v240.write, v240, [v241], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v447 = arrayOfItems.length;
    v242 = i$$9 < v447;
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
  var v648 = '<tr><td class="title">' + "Pattern:";
  var v626 = v648 + '</td><td class="title">';
  var v589 = v626 + "Times found:";
  var v535 = v589 + '</td><td class="title">';
  var v448 = v535 + "Percentage:";
  var v246 = v448 + "</td></tr>\n";
  JAM.call(v245.write, v245, [v246], JAM.policy.p17);
  var i$$10 = 0;
  var v449 = arrayOfItems$$1.length;
  var v255 = i$$10 < v449;
  for (;v255;) {
    var tempNumber = 0;
    var v450 = arrayOfItems$$1[i$$10];
    var v247 = JAM.call(v450.match, v450, [/\/[^\/]+\//], JAM.policy.p16);
    var matchExp$$1 = v247 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v451 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v249 = v451 != -1;
    if (v249) {
      var v248 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v536 = originalLength + 1;
    var v627 = arrayOfItems$$1[i$$10];
    var v590 = JAM.call(v627.match, v627, [/\d+/], JAM.policy.p16);
    var v537 = parseFloat(v590);
    var v452 = v536 - v537;
    var v252 = v452 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v453 = originalLength + 1;
      var v591 = arrayOfItems$$1[i$$10];
      var v538 = JAM.call(v591.match, v591, [/\d+/], JAM.policy.p16);
      var v454 = parseFloat(v538);
      var v251 = v453 - v454;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v706 = arrayOfItems$$1[i$$10];
    var v696 = JAM.call(v706.match, v706, [/\([^\(]+\)\b/], JAM.policy.p16);
    var v683 = v696.toString();
    var v666 = JAM.call(v683.replace, v683, [/\(|\)/g, ""], JAM.policy.p15);
    var v649 = "<tr><td>" + v666;
    var v628 = v649 + "</td><td>";
    var v592 = v628 + tempNumber;
    var v539 = v592 + "</td><td>";
    var v540 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p10);
    var v455 = v539 + v540;
    var v254 = v455 + "</td></tr>\n";
    JAM.call(v253.write, v253, [v254], JAM.policy.p17);
    i$$10++;
    var v456 = arrayOfItems$$1.length;
    v255 = i$$10 < v456;
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
  var v457 = sequence$$17.length;
  var v263 = v457 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v458 = Math.random();
    var v257 = v458 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v257], JAM.policy.p16);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p16);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v258 = randNum$$1 + 1;
    var v259 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v258, v259], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v459 = tempSeq.length;
    var v262 = v459 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      JAM.call(v260.write, v260, [v261], JAM.policy.p17);
      tempSeq = "";
    }
    var v460 = sequence$$17.length;
    v263 = v460 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  JAM.call(v264.write, v264, [v265], JAM.policy.p17);
  return true;
}
function getRestrictionSiteString(type$$25) {
  var v461 = type$$25.toLowerCase();
  var v267 = v461 == "standard";
  if (v267) {
    var v837 = "/aggcct/ (AatI agg|cct)3," + "/gacgtc/ (AatII gacgt|c)1,";
    var v836 = v837 + "/tgcgca/ (Acc16I tgc|gca)3,";
    var v835 = v836 + "/cgcg/ (AccII cg|cg)2,";
    var v834 = v835 + "/tccgga/ (AccIII t|ccgga)5,";
    var v833 = v834 + "/aacgtt/ (AclI aa|cgtt)4,";
    var v832 = v833 + "/cacgtg/ (AcvI cac|gtg)3,";
    var v831 = v832 + "/gtac/ (AfaI gt|ac)2,";
    var v830 = v831 + "/agcgct/ (AfeI agc|gct)3,";
    var v829 = v830 + "/cttaag/ (AflII c|ttaag)5,";
    var v828 = v829 + "/accggt/ (AgeI a|ccggt)5,";
    var v827 = v828 + "/actagt/ (AhlI a|ctagt)5,";
    var v826 = v827 + "/gtgcac/ (Alw441 g|tgcac)5,";
    var v825 = v826 + "/agct/ (AluI ag|ct)2,";
    var v824 = v825 + "/agcgct/ (Aor51HI agc|gct)3,";
    var v823 = v824 + "/gggccc/ (ApaI gggcc|c)1,";
    var v822 = v823 + "/gtgcac/ (ApaLI g|tgcac)5,";
    var v821 = v822 + "/ggcgcgcc/ (AscI gg|cgcgcc)6,";
    var v820 = v821 + "/attaat/ (AseI at|taat)4,";
    var v819 = v820 + "/ggtacc/ (Asp718I g|gtacc)5,";
    var v818 = v819 + "/ttcgaa/ (AsuII tt|cgaa)4,";
    var v817 = v818 + "/c[cty]cg[agr]g/ (AvaI c|ycgrg)5,";
    var v816 = v817 + "/tgcgca/ (AviII tgc|gca)3,";
    var v815 = v816 + "/cctagg/ (AvrII c|ctagg)5,";
    var v814 = v815 + "/tggcca/ (BalI tgg|cca)3,";
    var v813 = v814 + "/ggatcc/ (BamHI g|gatcc)5,";
    var v812 = v813 + "/atcgat/ (BanIII at|cgat)4,";
    var v811 = v812 + "/ggcgcc/ (BbeI ggcgc|c)1,";
    var v810 = v811 + "/cacgtg/ (BbrPI cac|gtg)3,";
    var v809 = v810 + "/gcatgc/ (BbuI gcatg|c)1,";
    var v808 = v809 + "/actagt/ (BcuI a|ctagt)5,";
    var v807 = v808 + "/tgatca/ (BclI t|gatca)5,";
    var v806 = v807 + "/ctag/ (BfaI c|tag)3,";
    var v805 = v806 + "/cttaag/ (BfrI c|ttaag)5,";
    var v804 = v805 + "/atgcat/ (BfrBI atg|cat)3,";
    var v803 = v804 + "/agatct/ (BglII a|gatct)5,";
    var v802 = v803 + "/cctagg/ (BlnI c|ctagg)5,";
    var v801 = v802 + "/atcgat/ (BseCI at|cgat)4,";
    var v800 = v801 + "/gcgcgc/ (BsePI g|cgcgc)5,";
    var v799 = v800 + "/cggccg/ (BseX3I c|ggccg)5,";
    var v798 = v799 + "/accggt/ (BshTI a|ccggt)5,";
    var v797 = v798 + "/tgtaca/ (Bsp1407I t|gtaca)5,";
    var v796 = v797 + "/ccatgg/ (Bsp19I c|catgg)5,";
    var v795 = v796 + "/atcgat/ (BspDI at|cgat)4,";
    var v794 = v795 + "/tccgga/ (BspEI t|ccgga)5,";
    var v793 = v794 + "/tgtaca/ (BsrGI t|gtaca)5,";
    var v792 = v793 + "/gcgcgc/ (BssHII g|cgcgc)5,";
    var v791 = v792 + "/cgcg/ (BstUI cg|cg)2,";
    var v790 = v791 + "/atcgat/ (ClaI at|cgat)4,";
    var v789 = v790 + "/gatc/ (DpnII |gatc)4,";
    var v788 = v789 + "/tttaaa/ (DraI ttt|aaa)3,";
    var v787 = v788 + "/cggccg/ (EagI c|ggccg)5,";
    var v786 = v787 + "/gaattc/ (EcoRI g|aattc)5,";
    var v785 = v786 + "/gatatc/ (EcoRV gat|atc)3,";
    var v784 = v785 + "/ggcgcc/ (EgeI ggc|gcc)3,";
    var v783 = v784 + "/ggccggcc/ (FseI ggccgg|cc)2,";
    var v782 = v783 + "/tgcgca/ (FspI tgc|gca)3,";
    var v781 = v782 + "/ggcc/ (HaeIII gg|cc)2,";
    var v780 = v781 + "/gt[cty][agr]ac/ (HincII gty|rac)3,";
    var v779 = v780 + "/aagctt/ (HindIII a|agctt)5,";
    var v778 = v779 + "/ga[acgturyswkmbdhvn]tc/ (HinfI g|antc)4,";
    var v777 = v778 + "/gttaac/ (HpaI gtt|aac)3,";
    var v776 = v777 + "/ccgg/ (HpaII c|cgg)3,";
    var v775 = v776 + "/ggcgcc/ (KasI g|gcgcc)5,";
    var v774 = v775 + "/ggtacc/ (KpnI ggtac|c)1,";
    var v773 = v774 + "/[acgturyswkmbdhvn]gatc[acgturyswkmbdhvn]/ (MboI |gatc)5,";
    var v772 = v773 + "/caattg/ (MfeI c|aattg)5,";
    var v771 = v772 + "/acgcgt/ (MluI a|cgcgt)5,";
    var v770 = v771 + "/tggcca/ (MscI tgg|cca)3,";
    var v769 = v770 + "/ttaa/ (MseI t|taa)3,";
    var v768 = v769 + "/ccgg/ (MspI c|cgg)3,";
    var v767 = v768 + "/gccggc/ (NaeI gcc|ggc)3,";
    var v766 = v767 + "/ggcgcc/ (NarI gg|cgcc)4,";
    var v765 = v766 + "/ccatgg/ (NcoI c|catgg)5,";
    var v764 = v765 + "/catatg/ (NdeI ca|tatg)4,";
    var v763 = v764 + "/gatc/ (NdeII |gatc)4,";
    var v762 = v763 + "/gccggc/ (NgoMIV g|ccggc)5,";
    var v761 = v762 + "/gctagc/ (NheI g|ctagc)5,";
    var v760 = v761 + "/catg/ (NlaIII catg|)0,";
    var v759 = v760 + "/gcggccgc/ (NotI gc|ggccgc)6,";
    var v758 = v759 + "/tcgcga/ (NruI tcg|cga)3,";
    var v757 = v758 + "/atgcat/ (NsiI atgca|t)1,";
    var v756 = v757 + "/ttaattaa/ (PacI ttaat|taa)3,";
    var v755 = v756 + "/acatgt/ (PciI a|catgt)5,";
    var v754 = v755 + "/ggcc/ (PhoI gg|cc)2,";
    var v753 = v754 + "/gtttaaac/ (PmeI gttt|aaac)4,";
    var v752 = v753 + "/cacgtg/ (PmlI cac|gtg)3,";
    var v751 = v752 + "/ttataa/ (PsiI tta|taa)3,";
    var v750 = v751 + "/ctgcag/ (PstI ctgca|g)1,";
    var v749 = v750 + "/cgatcg/ (PvuI cgat|cg)2,";
    var v748 = v749 + "/cagctg/ (PvuII cag|ctg)3,";
    var v747 = v748 + "/gtac/ (RsaI gt|ac)2,";
    var v746 = v747 + "/gagctc/ (SacI gagct|c)1,";
    var v745 = v746 + "/ccgcgg/ (SacII ccgc|gg)2,";
    var v744 = v745 + "/gtcgac/ (SalI g|tcgac)5,";
    var v743 = v744 + "/cctgcagg/ (SbfI cctgca|gg)2,";
    var v741 = v743 + "/agtact/ (ScaI agt|act)3,";
    var v738 = v741 + "/ggcgcc/ (SfoI ggc|gcc)3,";
    var v733 = v738 + "/cccggg/ (SmaI ccc|ggg)3,";
    var v728 = v733 + "/tacgta/ (SnaBI tac|gta)3,";
    var v723 = v728 + "/actagt/ (SpeI a|ctagt)5,";
    var v715 = v723 + "/gcatgc/ (SphI gcatg|c)1,";
    var v707 = v715 + "/aatatt/ (SspI aat|att)3,";
    var v697 = v707 + "/gagctc/ (SstI gagct|c)1,";
    var v684 = v697 + "/ccgcgg/ (SstII ccgc|gg)2,";
    var v667 = v684 + "/aggcct/ (StuI agg|cct)3,";
    var v650 = v667 + "/atttaaat/ (SwaI attt|aaat)4,";
    var v629 = v650 + "/tcga/ (TaqI t|cga)3,";
    var v593 = v629 + "/ctcgag/ (TliI c|tcgag)5,";
    var v541 = v593 + "/attaat/ (VspI at|taat)4,";
    var v462 = v541 + "/tctaga/ (XbaI t|ctaga)5,";
    var v266 = v462 + "/ctcgag/ (XhoI c|tcgag)5,";
    return v266 + "/cccggg/ (XmaI c|ccggg)5";
  }
  return true;
}
function restSummary(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var restrictionSites = getRestrictionSiteString("standard");
  var v668 = theDocument.forms;
  var v651 = v668[0];
  var v630 = v651.elements;
  var v594 = v630[0];
  var v542 = checkFormElement(v594);
  var v463 = v542 == false;
  var v544 = !v463;
  if (v544) {
    var v685 = theDocument.forms;
    var v669 = v685[0];
    var v652 = v669.elements;
    var v631 = v652[0];
    var v595 = v631.value;
    var v543 = JAM.call(checkSequenceLength, null, [v595, maxInput$$3], JAM.policy.p19);
    v463 = v543 == false;
  }
  var v268 = v463;
  if (v268) {
    return false;
  }
  itemsToCheck = JAM.call(restrictionSites.split, restrictionSites, [/,/], JAM.policy.p16);
  var v464 = checkRestPatterns(itemsToCheck);
  var v269 = v464 == false;
  if (v269) {
    return false;
  }
  openWindow("Restriction Summary");
  var v270 = outputWindow.document;
  var v465 = '<span class="one">' + "cuts once";
  var v271 = v465 + "</span><br />\n";
  JAM.call(v270.write, v270, [v271], JAM.policy.p17);
  var v272 = outputWindow.document;
  var v466 = '<span class="two">' + "cuts twice";
  var v273 = v466 + "</span><br />\n";
  JAM.call(v272.write, v272, [v273], JAM.policy.p17);
  var v274 = outputWindow.document;
  JAM.call(v274.write, v274, ["\n"], JAM.policy.p9);
  var v632 = theDocument.forms;
  var v596 = v632[0];
  var v545 = v596.elements;
  var v467 = v545[0];
  var v275 = v467.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v275);
  var i$$11 = 0;
  var v468 = arrayOfFasta$$1.length;
  var v282 = i$$11 < v468;
  for (;v282;) {
    var v276 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v276);
    var v277 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v277);
    newDna = removeNonDna(newDna);
    var v278 = outputWindow.document;
    var v686 = theDocument.forms;
    var v670 = v686[0];
    var v653 = v670.elements;
    var v633 = v653[4];
    var v597 = v633.options;
    var v687 = theDocument.forms;
    var v671 = v687[0];
    var v654 = v671.elements;
    var v634 = v654[4];
    var v598 = v634.selectedIndex;
    var v546 = v597[v598];
    var v469 = v546.value;
    var v279 = JAM.call(getInfoFromTitleAndSequenceAndTopology, null, [title$$9, newDna, v469], JAM.policy.p19);
    JAM.call(v278.write, v278, [v279], JAM.policy.p17);
    var v672 = theDocument.forms;
    var v655 = v672[0];
    var v635 = v655.elements;
    var v599 = v635[4];
    var v547 = v599.options;
    var v673 = theDocument.forms;
    var v656 = v673[0];
    var v636 = v656.elements;
    var v600 = v636[4];
    var v548 = v600.selectedIndex;
    var v470 = v547[v548];
    var v280 = v470.value;
    JAM.call(writeRestrictionSites, null, [newDna, itemsToCheck, v280], JAM.policy.p19);
    var v281 = outputWindow.document;
    JAM.call(v281.write, v281, ["<br />\n<br />\n"], JAM.policy.p9);
    i$$11++;
    var v471 = arrayOfFasta$$1.length;
    v282 = i$$11 < v471;
  }
  closeWindow();
  return true;
}
JAM.set(document, "onload", v2);
var v283 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9);
JAM.set(v283, "onclick", v3);
var v284 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9);
JAM.set(v284, "onclick", v4)
