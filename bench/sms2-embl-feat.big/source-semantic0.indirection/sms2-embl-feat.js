function v4() {
  var v634 = document.forms;
  var v541 = v634[0];
  var v333 = v541.elements;
  var v5 = v333[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    emblFeat(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v334 = document.main_form;
  var v7 = v334.main_submit;
  v7.focus();
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
  var v8 = arrayOfSequences[0];
  var lengthOfAlign = v8.length;
  var v335 = arrayOfSequences.length;
  var v9 = v335 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v336 = arrayOfTitles.length;
  var v11 = i$$1 < v336;
  for (;v11;) {
    var v692 = arrayOfTitles[i$$1];
    var v635 = JAM.call(v692.search, v692, [/\S/], JAM.policy.p29);
    var v542 = v635 == -1;
    var v637 = !v542;
    if (v637) {
      var v693 = arrayOfSequences[i$$1];
      var v636 = JAM.call(v693.search, v693, [/\S/], JAM.policy.p29);
      v542 = v636 == -1;
    }
    var v337 = v542;
    var v544 = !v337;
    if (v544) {
      var v638 = arrayOfSequences[i$$1];
      var v543 = v638.length;
      v337 = v543 != lengthOfAlign;
    }
    var v10 = v337;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1 = i$$1 + 1;
    var v338 = arrayOfTitles.length;
    v11 = i$$1 < v338;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v727 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p29);
  var v694 = v727 == -1;
  var v729 = !v694;
  if (v729) {
    var v728 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p29);
    v694 = v728 == -1;
  }
  var v639 = v694;
  var v696 = !v639;
  if (v696) {
    var v695 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p29);
    v639 = v695 == -1;
  }
  var v545 = v639;
  var v641 = !v545;
  if (v641) {
    var v640 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p29);
    v545 = v640 == -1;
  }
  var v339 = v545;
  var v547 = !v339;
  if (v547) {
    var v546 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p29);
    v339 = v546 == -1;
  }
  var v12 = v339;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v548 = formElement.value;
  var v340 = JAM.call(v548.search, v548, [/\S/], JAM.policy.p29);
  var v13 = v340 == -1;
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
  var v341 = arrayOfPatterns.length;
  var v16 = z$$2 < v341;
  for (;v16;) {
    var v549 = arrayOfPatterns[z$$2];
    var v342 = JAM.call(v549.search, v549, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p29);
    var v14 = v342 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v550 = arrayOfPatterns[z$$2];
    var v343 = moreExpressionCheck(v550);
    var v15 = v343 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v344 = arrayOfPatterns.length;
    v16 = z$$2 < v344;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v345 = arrayOfPatterns.length;
  var v25 = j < v345;
  for (;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    var v642 = arrayOfPatterns[j];
    var v551 = JAM.call(v642.match, v642, [/\/.+\//], JAM.policy.p29);
    var v346 = v551 + "gi";
    if (JAM.isEval(eval)) {
      var v821 = eval("introspect(JAM.policy.pFull) { " + v346 + " }")
    } else {
      var v821 = JAM.call(eval, null, [v346])
    }
    introspect(JAM.policy.p13) {
      v19[v20] = v821;
    }
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    var v552 = arrayOfPatterns[j];
    var v347 = JAM.call(v552.match, v552, [/=[a-zA-Z\*]/], JAM.policy.p29);
    var v822 = v347.toString();
    introspect(JAM.policy.p13) {
      v21[v22] = v822;
    }
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    var v348 = geneticCodeMatchResult[j];
    var v823 = JAM.call(v348.replace, v348, [/=/g, ""], JAM.policy.p28);
    introspect(JAM.policy.p13) {
      v23[v24] = v823;
    }
    j = j + 1;
    var v349 = arrayOfPatterns.length;
    v25 = j < v349;
  }
  var i$$2 = 0;
  var v553 = testSequence.length;
  var v350 = v553 - 3;
  var v32 = i$$2 <= v350;
  for (;v32;) {
    var v26 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v26], JAM.policy.p28);
    j = 0;
    var v351 = geneticCodeMatchExp.length;
    var v30 = j < v351;
    for (;v30;) {
      var v554 = geneticCodeMatchExp[j];
      var v352 = JAM.call(codon.search, codon, [v554], JAM.policy.p40);
      var v29 = v352 != -1;
      if (v29) {
        var v28 = oneMatch == true;
        if (v28) {
          var v353 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v353 + ".";
          alert(v27);
          return false;
        }
        oneMatch = true;
      }
      j = j + 1;
      var v354 = geneticCodeMatchExp.length;
      v30 = j < v354;
    }
    var v31 = oneMatch == false;
    if (v31) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v555 = testSequence.length;
    var v355 = v555 - 3;
    v32 = i$$2 <= v355;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v356 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v356;
  for (;v34;) {
    var v556 = arrayOfPatterns$$1[z$$3];
    var v357 = JAM.call(v556.search, v556, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p29);
    var v33 = v357 != -1;
    if (v33) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v358 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v358;
  }
  var i$$3 = 0;
  var v359 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v359;
  for (;v38;) {
    var v557 = arrayOfPatterns$$1[i$$3];
    var v360 = "[" + v557;
    var v35 = v360 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v361 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v361;
    for (;v37;) {
      var v558 = arrayOfPatterns$$1[j$$1];
      var v362 = JAM.call(v558.search, v558, [re], JAM.policy.p40);
      var v36 = v362 != -1;
      if (v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1 = j$$1 + 1;
      var v363 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v363;
    }
    i$$3 = i$$3 + 1;
    var v364 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v364;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v365 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v365;
  for (;v41;) {
    var v559 = arrayOfPatterns$$2[z$$4];
    var v366 = JAM.call(v559.search, v559, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p29);
    var v39 = v366 == -1;
    if (v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v560 = arrayOfPatterns$$2[z$$4];
    var v367 = moreExpressionCheck(v560);
    var v40 = v367 == false;
    if (v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v368 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v368;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v643 = getSequenceFromFasta(text$$7);
  var v561 = JAM.call(v643.replace, v643, [/[^A-Za-z]/g, ""], JAM.policy.p28);
  var v369 = v561.length;
  var v43 = v369 > maxInput;
  if (v43) {
    var v370 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v370 + " characters.";
    alert(v42);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v371 = text$$8.length;
  var v45 = v371 > maxInput$$1;
  if (v45) {
    var v372 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v372 + " characters.";
    alert(v44);
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
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</form>"], JAM.policy.p25);
  return true;
}
function closePre() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</div>"], JAM.policy.p25);
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</pre>\n"], JAM.policy.p25);
  return;
}
function closeTextArea() {
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</textarea>"], JAM.policy.p25);
  return true;
}
function closeWindow() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</body>\n</html>\n"], JAM.policy.p25);
  outputWindow.status = "Done.";
  var v51 = outputWindow.document;
  v51.close();
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
  var v373 = alignArray.length;
  var v52 = v373 < 3;
  if (v52) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v374 = alignArray.length;
  var v54 = i$$4 < v374;
  for (;v54;) {
    var v562 = alignArray[i$$4];
    var v375 = JAM.call(v562.search, v562, [/[^\s]+\s/], JAM.policy.p29);
    var v53 = v375 == -1;
    if (v53) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4 = i$$4 + 1;
    var v376 = alignArray.length;
    v54 = i$$4 < v376;
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
  var v377 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p29);
  var v57 = v377 != -1;
  if (v57) {
    var v56 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p40);
    for (;v56;) {
      var v55 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v55], JAM.policy.p40);
      v56 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p40);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v378 = sequence$$2.length;
  var v58 = "&gt;results for " + v378;
  var stringToReturn = v58 + " residue sequence ";
  var v379 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p29);
  var v60 = v379 != -1;
  if (v60) {
    var v380 = stringToReturn + '"';
    var v59 = v380 + fastaSequenceTitle;
    stringToReturn = v59 + '"';
  }
  var v381 = stringToReturn + ' starting "';
  var v382 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p26);
  var v61 = v381 + v382;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v383 = sequenceOne.length;
  var v62 = "Search results for " + v383;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v384 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p29);
  var v64 = v384 != -1;
  if (v64) {
    var v385 = stringToReturn$$1 + '"';
    var v63 = v385 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"';
  }
  var v386 = stringToReturn$$1 + ' starting "';
  var v387 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p26);
  var v65 = v386 + v387;
  stringToReturn$$1 = v65 + '"\n';
  var v388 = stringToReturn$$1 + "and ";
  var v389 = sequenceTwo.length;
  var v66 = v388 + v389;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v390 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p29);
  var v68 = v390 != -1;
  if (v68) {
    var v391 = stringToReturn$$1 + '"';
    var v67 = v391 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"';
  }
  var v392 = stringToReturn$$1 + ' starting "';
  var v393 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p26);
  var v69 = v392 + v393;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v394 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v394;
  for (;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    var v644 = arrayOfPatterns$$3[j$$2];
    var v563 = JAM.call(v644.match, v644, [/\/.+\//], JAM.policy.p29);
    var v395 = v563 + "gi";
    if (JAM.isEval(eval)) {
      var v824 = eval("introspect(JAM.policy.pFull) { " + v395 + " }")
    } else {
      var v824 = JAM.call(eval, null, [v395])
    }
    introspect(JAM.policy.p13) {
      v72[v73] = v824;
    }
    j$$2 = j$$2 + 1;
    var v396 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v396;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v397 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v397;
  for (;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    var v564 = arrayOfPatterns$$4[j$$3];
    var v398 = JAM.call(v564.match, v564, [/=[a-zA-Z\*]/], JAM.policy.p29);
    var v825 = v398.toString();
    introspect(JAM.policy.p13) {
      v76[v77] = v825;
    }
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    var v399 = geneticCodeMatchResult$$1[j$$3];
    var v826 = JAM.call(v399.replace, v399, [/=/g, ""], JAM.policy.p28);
    introspect(JAM.policy.p13) {
      v78[v79] = v826;
    }
    j$$3 = j$$3 + 1;
    var v400 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v400;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v401 = sequence$$3.length;
  var v81 = "Results for " + v401;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v402 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p29);
  var v83 = v402 != -1;
  if (v83) {
    var v403 = stringToReturn$$2 + '"';
    var v82 = v403 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"';
  }
  var v404 = stringToReturn$$2 + ' starting "';
  var v405 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p26);
  var v84 = v404 + v405;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v565 = "Results for " + topology;
  var v406 = v565 + " ";
  var v407 = sequence$$4.length;
  var v86 = v406 + v407;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v408 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p29);
  var v88 = v408 != -1;
  if (v88) {
    var v409 = stringToReturn$$3 + '"';
    var v87 = v409 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"';
  }
  var v410 = stringToReturn$$3 + ' starting "';
  var v411 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p26);
  var v89 = v410 + v411;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v412 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v412;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v413 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p29);
  var v93 = v413 != -1;
  if (v93) {
    var v414 = stringToReturn$$4 + '"';
    var v92 = v414 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"';
  }
  var v415 = stringToReturn$$4 + ' starting "';
  var v416 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p26);
  var v94 = v415 + v416;
  stringToReturn$$4 = v94 + '"\n';
  var v417 = stringToReturn$$4 + "and ";
  var v418 = sequenceTwo$$1.length;
  var v95 = v417 + v418;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v419 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p29);
  var v97 = v419 != -1;
  if (v97) {
    var v420 = stringToReturn$$4 + '"';
    var v96 = v420 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"';
  }
  var v421 = stringToReturn$$4 + ' starting "';
  var v422 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p26);
  var v98 = v421 + v422;
  stringToReturn$$4 = v98 + '"';
  var v99 = '<div class="info">' + stringToReturn$$4;
  return v99 + "</div>\n";
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v101 = j$$4 < lengthOut;
  for (;v101;) {
    var v423 = Math.random();
    var v424 = components.length;
    var v100 = v423 * v424;
    tempNum = JAM.call(Math.floor, Math, [v100], JAM.policy.p29);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p40);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p25);
}
function getSequenceFromFasta(sequenceRecord) {
  var v425 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p29);
  var v102 = v425 != -1;
  if (v102) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p28);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v426 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p29);
  var v104 = v426 != -1;
  if (v104) {
    var v103 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p28);
    fastaTitle = v103.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p28);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p28);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p28);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v799 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p29);
  var v792 = v799 != -1;
  var v801 = !v792;
  if (v801) {
    var v800 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p29);
    v792 = v800 != -1;
  }
  var v783 = v792;
  var v794 = !v783;
  if (v794) {
    var v793 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p29);
    v783 = v793 != -1;
  }
  var v773 = v783;
  var v785 = !v773;
  if (v785) {
    var v784 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p29);
    v773 = v784 != -1;
  }
  var v760 = v773;
  var v775 = !v760;
  if (v775) {
    var v774 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p29);
    v760 = v774 != -1;
  }
  var v745 = v760;
  var v762 = !v745;
  if (v762) {
    var v761 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p29);
    v745 = v761 != -1;
  }
  var v730 = v745;
  var v747 = !v730;
  if (v747) {
    var v746 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p29);
    v730 = v746 != -1;
  }
  var v697 = v730;
  var v732 = !v697;
  if (v732) {
    var v731 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p29);
    v697 = v731 != -1;
  }
  var v645 = v697;
  var v699 = !v645;
  if (v699) {
    var v698 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p29);
    v645 = v698 != -1;
  }
  var v566 = v645;
  var v647 = !v566;
  if (v647) {
    var v646 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p29);
    v566 = v646 != -1;
  }
  var v427 = v566;
  var v568 = !v427;
  if (v568) {
    var v567 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p29);
    v427 = v567 != -1;
  }
  var v105 = v427;
  if (v105) {
    return false;
  }
  return true;
}
function openForm() {
  var v106 = outputWindow.document;
  JAM.call(v106.write, v106, ['<form action="">\n'], JAM.policy.p25);
  return true;
}
function openPre() {
  var v107 = outputWindow.document;
  JAM.call(v107.write, v107, ["<pre>"], JAM.policy.p25);
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ['<div class="pre">'], JAM.policy.p25);
  return;
}
function openTextArea() {
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p25);
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p27);
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v648 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v569 = v648 + "<head>\n";
  var v428 = v569 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v428 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v110.write, v110, [v111], JAM.policy.p40);
  if (isColor) {
    var v112 = outputWindow.document;
    var v814 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v810 = v814 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v806 = v810 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v802 = v806 + "div.info {font-weight: bold}\n";
    var v795 = v802 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v786 = v795 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v776 = v786 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v763 = v776 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v748 = v763 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v733 = v748 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v700 = v733 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v649 = v700 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v570 = v649 + "td.many {color: #000000}\n";
    var v429 = v570 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v429 + "</style>\n";
    JAM.call(v112.write, v112, [v113], JAM.policy.p40);
  } else {
    var v114 = outputWindow.document;
    var v818 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v815 = v818 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v811 = v815 + "div.title {display: none}\n";
    var v807 = v811 + "div.info {font-weight: bold}\n";
    var v803 = v807 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v796 = v803 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v787 = v796 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v777 = v787 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v764 = v777 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v749 = v764 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v734 = v749 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v701 = v734 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v650 = v701 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v571 = v650 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v430 = v571 + "img {display: none}\n";
    var v115 = v430 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p40);
  }
  var v116 = outputWindow.document;
  var v651 = "</head>\n" + '<body class="main">\n';
  var v572 = v651 + '<div class="title">';
  var v431 = v572 + title$$6;
  var v117 = v431 + " results</div>\n";
  JAM.call(v116.write, v116, [v117], JAM.policy.p40);
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
  var v118 = outputWindow.document;
  var v652 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v573 = v652 + "<head>\n";
  var v432 = v573 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v432 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v118.write, v118, [v119], JAM.policy.p40);
  if (isBackground) {
    var v120 = outputWindow.document;
    var v816 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v812 = v816 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v808 = v812 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v804 = v808 + "div.info {font-weight: bold}\n";
    var v797 = v804 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v788 = v797 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v778 = v788 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v765 = v778 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v750 = v765 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v735 = v750 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v702 = v735 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v653 = v702 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v574 = v653 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v433 = v574 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v433 + "</style>\n";
    JAM.call(v120.write, v120, [v121], JAM.policy.p40);
  } else {
    var v122 = outputWindow.document;
    var v820 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v819 = v820 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v817 = v819 + "div.title {display: none}\n";
    var v813 = v817 + "div.info {font-weight: bold}\n";
    var v809 = v813 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v805 = v809 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v798 = v805 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v789 = v798 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v779 = v789 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v766 = v779 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v751 = v766 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v736 = v751 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v703 = v736 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v654 = v703 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v575 = v654 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v434 = v575 + "img {display: none}\n";
    var v123 = v434 + "</style>\n";
    JAM.call(v122.write, v122, [v123], JAM.policy.p40);
  }
  var v124 = outputWindow.document;
  var v655 = "</head>\n" + '<body class="main">\n';
  var v576 = v655 + '<div class="title">';
  var v435 = v576 + title$$8;
  var v125 = v435 + " results</div>\n";
  JAM.call(v124.write, v124, [v125], JAM.policy.p40);
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
  var v436 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p29);
  var v126 = v436 != -1;
  if (v126) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p29);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p25);
  }
  return dnaSequence$$1;
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  var v127 = j$$5 < lengthOfColumn;
  for (;v127;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v127 = j$$5 < lengthOfColumn;
  }
  var v128 = tempString + theNumber;
  theNumber = v128 + " ";
  var v129 = sequenceToAppend + theNumber;
  sequenceToAppend = v129 + tabIn;
  return sequenceToAppend;
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$9, s$$3) {
    return p1$$1 + "X";
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p40);
  var v437 = testArray[0];
  var v130 = v437 != testString;
  if (v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v438 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p40);
  var v131 = v438 == -1;
  if (v131) {
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
  var v132 = !caughtException;
  if (v132) {
    alert("Exception handling not supported. See browser compatibility page.");
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p28);
  var v133 = testString != "1X2X3X";
  if (v133) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v439 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p22);
  var v134 = v439 != 2489.824;
  if (v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v440 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p22);
  var v135 = v440 != 2489.8;
  if (v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v441 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p29);
  var v136 = v441 == -1;
  if (v136) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v704 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p29);
  var v656 = v704 == -1;
  var v706 = !v656;
  if (v706) {
    var v705 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p29);
    v656 = v705 == -1;
  }
  var v577 = v656;
  var v658 = !v577;
  if (v658) {
    var v657 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p29);
    v577 = v657 == -1;
  }
  var v442 = v577;
  var v579 = !v442;
  if (v579) {
    var v578 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p29);
    v442 = v578 == -1;
  }
  var v137 = v442;
  if (v137) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v443 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p29);
  var v138 = v443 == -1;
  if (v138) {
    alert("Please enter a number.");
    return false;
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if (v140) {
    var v444 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v444 + ".";
    alert(v139);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v445 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p29);
  var v141 = v445 != -1;
  if (v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v446 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p29);
  var v142 = v446 != -1;
  if (v142) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v707 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p29);
  var v659 = v707 == -1;
  var v709 = !v659;
  if (v709) {
    var v708 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p29);
    v659 = v708 == -1;
  }
  var v580 = v659;
  var v661 = !v580;
  if (v661) {
    var v660 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p29);
    v580 = v660 == -1;
  }
  var v447 = v580;
  var v582 = !v447;
  if (v582) {
    var v581 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p29);
    v447 = v581 == -1;
  }
  var v143 = v447;
  if (v143) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v710 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p29);
  var v662 = v710 == -1;
  var v712 = !v662;
  if (v712) {
    var v711 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p29);
    v662 = v711 == -1;
  }
  var v583 = v662;
  var v664 = !v583;
  if (v664) {
    var v663 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p29);
    v583 = v663 == -1;
  }
  var v448 = v583;
  var v585 = !v448;
  if (v585) {
    var v584 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p29);
    v448 = v584 == -1;
  }
  var v144 = v448;
  if (v144) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v449 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p29);
  var v145 = v449 == -1;
  if (v145) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v713 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p29);
  var v665 = v713 == -1;
  var v715 = !v665;
  if (v715) {
    var v714 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p29);
    v665 = v714 == -1;
  }
  var v586 = v665;
  var v667 = !v586;
  if (v667) {
    var v666 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p29);
    v586 = v666 == -1;
  }
  var v450 = v586;
  var v588 = !v450;
  if (v588) {
    var v587 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p29);
    v450 = v587 == -1;
  }
  var v146 = v450;
  if (v146) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v451 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p29);
  var v147 = v451 == -1;
  if (v147) {
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
  var v155 = i$$5 < stopBase;
  for (;v155;) {
    var v148 = i$$5 + 1;
    lineOfText = rightNum(v148, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v452 = basePerLine / groupSize;
    var v152 = j$$6 <= v452;
    for (;v152;) {
      var v151 = k < groupSize;
      for (;v151;) {
        var v149 = lineOfText;
        var v453 = k + i$$5;
        var v150 = JAM.call(text$$10.charAt, text$$10, [v453], JAM.policy.p40);
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v454 = basePerLine / groupSize;
      v152 = j$$6 <= v454;
    }
    var v153 = outputWindow.document;
    var v154 = lineOfText + "\n";
    JAM.call(v153.write, v153, [v154], JAM.policy.p40);
    lineOfText = "";
    v155 = i$$5 < stopBase;
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
    var v455 = adjustment < 0;
    if (v455) {
      v455 = adjusted >= 0;
    }
    var v156 = v455;
    if (v156) {
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
  var v189 = i$$6 < stopBase$$2;
  for (;v189;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v456 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v456;
    for (;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for (;v160;) {
        var v457 = i$$6 + k$$1;
        var v157 = v457 >= stopBase$$2;
        if (v157) {
          break;
        }
        var v158 = lineOfText$$1;
        var v458 = k$$1 + i$$6;
        var v159 = JAM.call(text$$12.charAt, text$$12, [v458], JAM.policy.p40);
        lineOfText$$1 = v158 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if (v163) {
        var v161 = aboveNum;
        var v459 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v459, "", groupSize$$2, tabIn$$3);
        aboveNum = v161 + v162;
      }
      var v164 = i$$6 >= stopBase$$2;
      if (v164) {
        break;
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v460 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v460;
    }
    var v188 = numberPosition$$1 == "left";
    if (v188) {
      var v166 = outputWindow.document;
      var v668 = adjustNumbering(lineNum, numberingAdjustment);
      var v589 = rightNum(v668, "", 8, tabIn$$3);
      var v461 = v589 + lineOfText$$1;
      var v167 = v461 + "\n";
      JAM.call(v166.write, v166, [v167], JAM.policy.p40);
      var v171 = strands$$1 == "two";
      if (v171) {
        var v168 = outputWindow.document;
        var v669 = adjustNumbering(lineNum, numberingAdjustment);
        var v590 = rightNum(v669, "", 8, tabIn$$3);
        var v591 = complement(lineOfText$$1);
        var v462 = v590 + v591;
        var v169 = v462 + "\n";
        JAM.call(v168.write, v168, [v169], JAM.policy.p40);
        var v170 = outputWindow.document;
        JAM.call(v170.write, v170, ["\n"], JAM.policy.p25);
      }
    } else {
      var v187 = numberPosition$$1 == "right";
      if (v187) {
        var v172 = outputWindow.document;
        var v592 = lineOfText$$1;
        var v593 = adjustNumbering(i$$6, numberingAdjustment);
        var v463 = v592 + v593;
        var v173 = v463 + "\n";
        JAM.call(v172.write, v172, [v173], JAM.policy.p40);
        var v177 = strands$$1 == "two";
        if (v177) {
          var v174 = outputWindow.document;
          var v594 = complement(lineOfText$$1);
          var v595 = adjustNumbering(i$$6, numberingAdjustment);
          var v464 = v594 + v595;
          var v175 = v464 + "\n";
          JAM.call(v174.write, v174, [v175], JAM.policy.p40);
          var v176 = outputWindow.document;
          JAM.call(v176.write, v176, ["\n"], JAM.policy.p25);
        }
      } else {
        var v186 = numberPosition$$1 == "above";
        if (v186) {
          var v178 = outputWindow.document;
          var v179 = aboveNum + "\n";
          JAM.call(v178.write, v178, [v179], JAM.policy.p40);
          var v180 = outputWindow.document;
          var v181 = lineOfText$$1 + "\n";
          JAM.call(v180.write, v180, [v181], JAM.policy.p40);
          var v185 = strands$$1 == "two";
          if (v185) {
            var v182 = outputWindow.document;
            var v465 = complement(lineOfText$$1);
            var v183 = v465 + "\n";
            JAM.call(v182.write, v182, [v183], JAM.policy.p40);
            var v184 = outputWindow.document;
            JAM.call(v184.write, v184, ["\n"], JAM.policy.p25);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v189 = i$$6 < stopBase$$2;
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
  var v210 = i$$7 < stopBase$$3;
  for (;v210;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v466 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v466;
    for (;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for (;v193;) {
        var v467 = i$$7 + k$$2;
        var v190 = v467 >= stopBase$$3;
        if (v190) {
          break;
        }
        var v191 = lineOfText$$2;
        var v468 = k$$2 + i$$7;
        var v192 = JAM.call(text$$13.charAt, text$$13, [v468], JAM.policy.p40);
        lineOfText$$2 = v191 + v192;
        k$$2 = k$$2 + 1;
        v193 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v196 = numberPosition$$2 == "above";
      if (v196) {
        var v194 = aboveNum$$1;
        var v195 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v194 + v195;
      }
      var v197 = i$$7 >= stopBase$$3;
      if (v197) {
        break;
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v469 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v469;
    }
    var v209 = numberPosition$$2 == "left";
    if (v209) {
      var v199 = outputWindow.document;
      var v596 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v470 = v596 + lineOfText$$2;
      var v200 = v470 + "\n";
      JAM.call(v199.write, v199, [v200], JAM.policy.p40);
    } else {
      var v208 = numberPosition$$2 == "right";
      if (v208) {
        var v201 = outputWindow.document;
        var v471 = lineOfText$$2 + i$$7;
        var v202 = v471 + "\n";
        JAM.call(v201.write, v201, [v202], JAM.policy.p40);
      } else {
        var v207 = numberPosition$$2 == "above";
        if (v207) {
          var v203 = outputWindow.document;
          var v204 = aboveNum$$1 + "\n";
          JAM.call(v203.write, v203, [v204], JAM.policy.p40);
          var v205 = outputWindow.document;
          var v206 = lineOfText$$2 + "\n";
          JAM.call(v205.write, v205, [v206], JAM.policy.p40);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v210 = i$$7 < stopBase$$3;
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
  var v670 = sequence$$13.length;
  var v597 = v670 <= firstIndexToMutate;
  var v671 = !v597;
  if (v671) {
    v597 = lastIndexToMutate < 0;
  }
  var v472 = v597;
  var v598 = !v472;
  if (v598) {
    v472 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v211 = v472;
  if (v211) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for (;v219;) {
    maxNum = sequence$$13.length;
    var v473 = Math.random();
    var v212 = v473 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v212], JAM.policy.p29);
    var v474 = randNum < firstIndexToMutate;
    var v599 = !v474;
    if (v599) {
      v474 = randNum > lastIndexToMutate;
    }
    var v213 = v474;
    if (v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p29);
    needNewChar = true;
    for (;needNewChar;) {
      var v475 = Math.random();
      var v476 = components$$1.length;
      var v214 = v475 * v476;
      componentsIndex = JAM.call(Math.round, Math, [v214], JAM.policy.p29);
      var v477 = components$$1.length;
      var v215 = componentsIndex == v477;
      if (v215) {
        componentsIndex = 0;
      }
      var v478 = components$$1[componentsIndex];
      var v216 = v478 != currentChar;
      if (v216) {
        needNewChar = false;
      }
    }
    var v479 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p26);
    var v480 = components$$1[componentsIndex];
    var v217 = v479 + v480;
    var v481 = randNum + 1;
    var v482 = sequence$$13.length;
    var v218 = JAM.call(sequence$$13.substring, sequence$$13, [v481, v482], JAM.policy.p42);
    sequence$$13 = v217 + v218;
    i$$8 = i$$8 + 1;
    v219 = i$$8 < numMut;
  }
  var v220 = outputWindow.document;
  var v221 = addReturns(sequence$$13);
  JAM.call(v220.write, v220, [v221], JAM.policy.p40);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v226 = j$$9 < lengthOut$$1;
  for (;v226;) {
    var v483 = Math.random();
    var v484 = components$$2.length;
    var v222 = v483 * v484;
    tempNum$$1 = JAM.call(Math.floor, Math, [v222], JAM.policy.p29);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v485 = sequence$$14.length;
    var v225 = v485 == 60;
    if (v225) {
      var v223 = outputWindow.document;
      var v224 = sequence$$14 + "\n";
      JAM.call(v223.write, v223, [v224], JAM.policy.p40);
      sequence$$14 = "";
    }
    j$$9 = j$$9 + 1;
    v226 = j$$9 < lengthOut$$1;
  }
  var v227 = outputWindow.document;
  var v228 = sequence$$14 + "\n";
  JAM.call(v227.write, v227, [v228], JAM.policy.p40);
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
  var v232 = dnaConformation == "circular";
  if (v232) {
    var v229 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p26);
    shiftValue = v229.length;
    var v672 = sequence$$15.length;
    var v600 = v672 - lookAhead;
    var v601 = sequence$$15.length;
    var v486 = JAM.call(sequence$$15.substring, sequence$$15, [v600, v601], JAM.policy.p42);
    var v230 = v486 + sequence$$15;
    var v231 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p26);
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v233 = outputWindow.document;
  JAM.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p25);
  var v234 = outputWindow.document;
  var v673 = '<tr><td class="title" width="200px">' + "Site:";
  var v602 = v673 + '</td><td class="title">';
  var v487 = v602 + "Positions:";
  var v235 = v487 + "</td></tr>\n";
  JAM.call(v234.write, v234, [v235], JAM.policy.p40);
  var i$$9 = 0;
  var v488 = arrayOfItems.length;
  var v251 = i$$9 < v488;
  for (;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v489 = arrayOfItems[i$$9];
    var v236 = JAM.call(v489.match, v489, [/\/.+\//], JAM.policy.p29);
    matchExp = v236 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v674 = arrayOfItems[i$$9];
    var v603 = JAM.call(v674.match, v674, [/\)\D*\d+/], JAM.policy.p29);
    var v490 = v603.toString();
    var v237 = JAM.call(v490.replace, v490, [/\)\D*/, ""], JAM.policy.p28);
    cutDistance = parseFloat(v237);
    var v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p40);
    for (;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v491 = matchPosition >= lowerLimit;
      if (v491) {
        v491 = matchPosition < upperLimit;
      }
      var v241 = v491;
      if (v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v492 = matchPosition - shiftValue;
        var v240 = v492 + 1;
        tempString$$1 = v239 + v240;
      }
      var v493 = matchExp.lastIndex;
      var v604 = RegExp.lastMatch;
      var v494 = v604.length;
      var v242 = v493 - v494;
      matchExp.lastIndex = v242 + 1;
      v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p40);
    }
    var v495 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p29);
    var v244 = v495 != -1;
    if (v244) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p28);
    }
    var v248 = timesFound == 0;
    if (v248) {
      backGroundClass = "none";
    } else {
      var v247 = timesFound == 1;
      if (v247) {
        backGroundClass = "one";
      } else {
        var v246 = timesFound == 2;
        if (v246) {
          backGroundClass = "two";
        } else {
          var v245 = timesFound == 3;
          if (v245) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v249 = outputWindow.document;
    var v767 = '<tr><td class="' + backGroundClass;
    var v752 = v767 + '">';
    var v790 = arrayOfItems[i$$9];
    var v780 = JAM.call(v790.match, v790, [/\([^\(]+\)/], JAM.policy.p29);
    var v768 = v780.toString();
    var v753 = JAM.call(v768.replace, v768, [/\(|\)/g, ""], JAM.policy.p28);
    var v737 = v752 + v753;
    var v716 = v737 + '</td><td class="';
    var v675 = v716 + backGroundClass;
    var v605 = v675 + '">';
    var v496 = v605 + tempString$$1;
    var v250 = v496 + "</td></tr>\n";
    JAM.call(v249.write, v249, [v250], JAM.policy.p40);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v497 = arrayOfItems.length;
    v251 = i$$9 < v497;
  }
  var v252 = outputWindow.document;
  JAM.call(v252.write, v252, ["</tbody></table>\n"], JAM.policy.p25);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v253 = outputWindow.document;
  JAM.call(v253.write, v253, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p25);
  var v254 = outputWindow.document;
  var v738 = '<tr><td class="title">' + "Pattern:";
  var v717 = v738 + '</td><td class="title">';
  var v676 = v717 + "Times found:";
  var v606 = v676 + '</td><td class="title">';
  var v498 = v606 + "Percentage:";
  var v255 = v498 + "</td></tr>\n";
  JAM.call(v254.write, v254, [v255], JAM.policy.p40);
  var i$$10 = 0;
  var v499 = arrayOfItems$$1.length;
  var v264 = i$$10 < v499;
  for (;v264;) {
    var tempNumber = 0;
    var v500 = arrayOfItems$$1[i$$10];
    var v256 = JAM.call(v500.match, v500, [/\/[^\/]+\//], JAM.policy.p29);
    var matchExp$$1 = v256 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v501 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p40);
    var v258 = v501 != -1;
    if (v258) {
      var v257 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p40);
      tempNumber = v257.length;
    }
    var percentage = 0;
    var v607 = originalLength + 1;
    var v718 = arrayOfItems$$1[i$$10];
    var v677 = JAM.call(v718.match, v718, [/\d+/], JAM.policy.p29);
    var v608 = parseFloat(v677);
    var v502 = v607 - v608;
    var v261 = v502 > 0;
    if (v261) {
      var v259 = 100 * tempNumber;
      var v503 = originalLength + 1;
      var v678 = arrayOfItems$$1[i$$10];
      var v609 = JAM.call(v678.match, v678, [/\d+/], JAM.policy.p29);
      var v504 = parseFloat(v609);
      var v260 = v503 - v504;
      percentage = v259 / v260;
    }
    var v262 = outputWindow.document;
    var v791 = arrayOfItems$$1[i$$10];
    var v781 = JAM.call(v791.match, v791, [/\([^\(]+\)\b/], JAM.policy.p29);
    var v769 = v781.toString();
    var v754 = JAM.call(v769.replace, v769, [/\(|\)/g, ""], JAM.policy.p28);
    var v739 = "<tr><td>" + v754;
    var v719 = v739 + "</td><td>";
    var v679 = v719 + tempNumber;
    var v610 = v679 + "</td><td>";
    var v611 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p22);
    var v505 = v610 + v611;
    var v263 = v505 + "</td></tr>\n";
    JAM.call(v262.write, v262, [v263], JAM.policy.p40);
    i$$10 = i$$10 + 1;
    var v506 = arrayOfItems$$1.length;
    v264 = i$$10 < v506;
  }
  var v265 = outputWindow.document;
  JAM.call(v265.write, v265, ["</tbody></table>\n"], JAM.policy.p25);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v507 = sequence$$17.length;
  var v272 = v507 > 0;
  for (;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v508 = Math.random();
    var v266 = v508 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v266], JAM.policy.p29);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p29);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p26);
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v267, v268], JAM.policy.p28);
    sequence$$17 = tempString1 + tempString2;
    var v509 = tempSeq.length;
    var v271 = v509 == 60;
    if (v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      JAM.call(v269.write, v269, [v270], JAM.policy.p40);
      tempSeq = "";
    }
    var v510 = sequence$$17.length;
    v272 = v510 > 0;
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  JAM.call(v273.write, v273, [v274], JAM.policy.p40);
  return true;
}
function emblFeat(theDocument) {
  var maxInput$$3 = 2E5;
  var v511 = testScript();
  var v275 = v511 == false;
  if (v275) {
    return false;
  }
  var v770 = theDocument.forms;
  var v755 = v770[0];
  var v740 = v755.elements;
  var v720 = v740[0];
  var v680 = checkFormElement(v720);
  var v612 = v680 == false;
  var v682 = !v612;
  if (v682) {
    var v782 = theDocument.forms;
    var v771 = v782[0];
    var v756 = v771.elements;
    var v741 = v756[0];
    var v721 = v741.value;
    var v681 = verifyEmblFeat(v721);
    v612 = v681 == false;
  }
  var v512 = v612;
  var v614 = !v512;
  if (v614) {
    var v772 = theDocument.forms;
    var v757 = v772[0];
    var v742 = v757.elements;
    var v722 = v742[0];
    var v683 = v722.value;
    var v613 = checkTextLength(v683, maxInput$$3);
    v512 = v613 == false;
  }
  var v276 = v512;
  if (v276) {
    return false;
  }
  openWindow("EMBL Feature Extractor");
  openPre();
  var v723 = theDocument.forms;
  var v684 = v723[0];
  var v615 = v684.elements;
  var v513 = v615[0];
  var v277 = v513.value;
  var v758 = theDocument.forms;
  var v743 = v758[0];
  var v724 = v743.elements;
  var v685 = v724[4];
  var v616 = v685.options;
  var v759 = theDocument.forms;
  var v744 = v759[0];
  var v725 = v744.elements;
  var v686 = v725[4];
  var v617 = v686.selectedIndex;
  var v514 = v616[v617];
  var v278 = v514.value;
  emblFeatExtract(v277, v278);
  closePre();
  closeWindow();
  return true;
}
function emblFeatExtract(emblFile$$2, outputType) {
  var title$$9;
  var v279 = "_" + emblFile$$2;
  emblFile$$2 = v279 + "_";
  var recordArray = JAM.call(emblFile$$2.split, emblFile$$2, [/ID\s\s\s[^\f\n\r]*/], JAM.policy.p29);
  var i$$11 = 1;
  var v515 = recordArray.length;
  var v290 = i$$11 < v515;
  for (;v290;) {
    var v280 = recordArray[i$$11];
    var mainArray = JAM.call(v280.split, v280, [/[\f\n\r]\s*FH   Key             Location\/Qualifiers[\f\n\r]+\s*FH|[\f\n\r]\s*XX[\s]*[\f\n\r]\s*SQ[^\f\n\r]*/], JAM.policy.p29);
    var v618 = mainArray[0];
    var v516 = JAM.call(v618.search, v618, [/[\f\n\r]\s*DE[^\f\n\r]+/], JAM.policy.p29);
    var v282 = v516 != -1;
    if (v282) {
      var v619 = mainArray[0];
      var v517 = JAM.call(v619.match, v619, [/[\f\n\r]\s*DE[^\f\n\r]+/], JAM.policy.p29);
      var v281 = v517.toString();
      title$$9 = JAM.call(v281.replace, v281, [/[\f\n\r]\s*DE\s*/, ""], JAM.policy.p28);
    } else {
      title$$9 = "Untitled";
    }
    var v518 = JAM.call(title$$9.replace, title$$9, [/[\f\n\r\t]+$/g, ""], JAM.policy.p28);
    var v283 = filterFastaTitle(v518);
    title$$9 = v283 + "\n";
    var v284 = mainArray[2];
    var dnaSequenceArray = JAM.call(v284.split, v284, [/\/{2}/], JAM.policy.p29);
    var v285 = outputWindow.document;
    var v286 = title$$9 + "\n";
    JAM.call(v285.write, v285, [v286], JAM.policy.p40);
    var v519 = dnaSequenceArray.length;
    var v287 = v519 == 1;
    if (v287) {
      alert("The entire EMBL file may not have been processed.");
      outputWindow.focus();
    }
    var v288 = dnaSequenceArray[0];
    var dnaSequence$$3 = removeNonDna(v288);
    var v289 = mainArray[1];
    var featureArray = JAM.call(v289.split, v289, [/[\f\n\r]FT {3,12}\b/], JAM.policy.p29);
    prepareFeatures(featureArray, dnaSequence$$3, outputType);
    i$$11 = i$$11 + 1;
    var v520 = recordArray.length;
    v290 = i$$11 < v520;
  }
  return true;
}
function prepareFeatures(arrayOfFeatures, dnaSequence$$4, outputType$$1) {
  var featureTitle = "";
  var theTitle = "";
  var removedTitle = "";
  var firstQualifier = "";
  var position = "";
  var positionNoSpace = "";
  var featureFound = false;
  var i$$12 = 1;
  var v521 = arrayOfFeatures.length;
  var v301 = i$$12 < v521;
  for (;v301;) {
    var v291 = arrayOfFeatures;
    var v292 = i$$12;
    var v522 = arrayOfFeatures[i$$12];
    var v827 = JAM.call(v522.replace, v522, [/[\[\]\*]/g, ""], JAM.policy.p28);
    introspect(JAM.policy.p13) {
      v291[v292] = v827;
    }
    var v523 = arrayOfFeatures[i$$12];
    var v293 = JAM.call(v523.match, v523, [/[^ \f\n\r\t\v]+ /], JAM.policy.p29);
    featureTitle = v293.toString();
    theTitle = new RegExp(featureTitle);
    var v294 = arrayOfFeatures[i$$12];
    removedTitle = JAM.call(v294.replace, v294, [theTitle, ""], JAM.policy.p41);
    var v620 = arrayOfFeatures[i$$12];
    var v524 = JAM.call(v620.search, v620, [/\/[^\f\n\r]+/], JAM.policy.p29);
    var v296 = v524 != -1;
    if (v296) {
      var v525 = arrayOfFeatures[i$$12];
      var v295 = JAM.call(v525.match, v525, [/\/[^\f\n\r]+/], JAM.policy.p29);
      firstQualifier = v295.toString();
    } else {
      firstQualifier = "/no qualifier supplied";
    }
    position = JAM.call(removedTitle.split, removedTitle, [/\//], JAM.policy.p29);
    var v297 = position[0];
    positionNoSpace = JAM.call(v297.replace, v297, [/\s{2,}/g, " "], JAM.policy.p28);
    var v298 = outputWindow.document;
    var v687 = filterFastaTitle(featureTitle);
    var v621 = "&gt;" + v687;
    var v622 = filterFastaTitle(firstQualifier);
    var v526 = v621 + v622;
    var v299 = v526 + "\n";
    JAM.call(v298.write, v298, [v299], JAM.policy.p40);
    printFeature(positionNoSpace, dnaSequence$$4, outputType$$1);
    featureFound = true;
    var v300 = outputWindow.document;
    JAM.call(v300.write, v300, ["\n\n"], JAM.policy.p25);
    i$$12 = i$$12 + 1;
    var v527 = arrayOfFeatures.length;
    v301 = i$$12 < v527;
  }
  var v303 = featureFound == false;
  if (v303) {
    var v302 = outputWindow.document;
    JAM.call(v302.write, v302, ["There were no features found or there was a problem reading the feature information."], JAM.policy.p25);
  }
  return true;
}
function printFeature(featurePos, dnaSequence$$5, outputType$$2) {
  var feature$$4;
  featurePos = JAM.call(featurePos.replace, featurePos, [/<|>/g, ""], JAM.policy.p28);
  featurePos = JAM.call(featurePos.replace, featurePos, [/FT/gi, ""], JAM.policy.p28);
  var v688 = JAM.call(featurePos.search, featurePos, [/[^a-z\d\.\(\)\,\s]/], JAM.policy.p29);
  var v623 = v688 != -1;
  var v690 = !v623;
  if (v690) {
    var v689 = JAM.call(featurePos.search, featurePos, [/one/], JAM.policy.p29);
    v623 = v689 != -1;
  }
  var v528 = v623;
  var v625 = !v528;
  if (v625) {
    var v624 = JAM.call(featurePos.search, featurePos, [/order/], JAM.policy.p29);
    v528 = v624 != -1;
  }
  var v322 = v528;
  if (v322) {
    var v304 = outputWindow.document;
    JAM.call(v304.write, v304, ["This feature specifies a sequence that cannot be represented:\n"], JAM.policy.p25);
    var v305 = outputWindow.document;
    JAM.call(v305.write, v305, [featurePos], JAM.policy.p40);
  } else {
    var newFeaturePos = JAM.call(featurePos.replace, featurePos, [/\)/g, ""], JAM.policy.p28);
    var v529 = JAM.call(newFeaturePos.search, newFeaturePos, [/complement/], JAM.policy.p29);
    var v306 = v529 != -1;
    if (v306) {
      feature$$4 = new Feature("complement");
    } else {
      feature$$4 = new Feature("direct");
    }
    var pairString = newFeaturePos;
    var pairArray = JAM.call(pairString.split, pairString, [/\,/], JAM.policy.p29);
    var v530 = JAM.call(newFeaturePos.search, newFeaturePos, [/complement/], JAM.policy.p29);
    var v307 = v530 != -1;
    if (v307) {
      pairArray.reverse();
    }
    var digitArray = new Array;
    var realStart = 0;
    var realStop = 0;
    var dnaToAdd = "";
    var j$$10 = 0;
    var v531 = pairArray.length;
    var v321 = j$$10 < v531;
    for (;v321;) {
      var v308 = pairArray[j$$10];
      digitArray = JAM.call(v308.split, v308, [/\.\./], JAM.policy.p29);
      var v532 = digitArray.length;
      var v309 = v532 == 1;
      if (v309) {
        digitArray[1] = digitArray[0];
      }
      realStart = digitArray[0];
      realStop = digitArray[1];
      realStop = JAM.call(realStop.replace, realStop, [/\D/g, ""], JAM.policy.p28);
      realStart = JAM.call(realStart.replace, realStart, [/\D/g, ""], JAM.policy.p28);
      var v626 = JAM.call(realStart.search, realStart, [/\d/], JAM.policy.p29);
      var v533 = v626 == -1;
      var v628 = !v533;
      if (v628) {
        var v627 = JAM.call(realStop.search, realStop, [/\d/], JAM.policy.p29);
        v533 = v627 == -1;
      }
      var v311 = v533;
      if (v311) {
        var v310 = outputWindow.document;
        JAM.call(v310.write, v310, ["There was a problem with this feature (one of the range values was missing)."], JAM.policy.p25);
        return true;
      }
      var v312 = parseInt(realStart);
      realStart = v312 - 1;
      realStop = parseInt(realStop);
      var v314 = realStart > realStop;
      if (v314) {
        var v313 = outputWindow.document;
        JAM.call(v313.write, v313, ["There was a problem with this feature (the end position was before the start position)."], JAM.policy.p25);
        return true;
      }
      var v629 = dnaSequence$$5.length;
      var v534 = realStart > v629;
      var v631 = !v534;
      if (v631) {
        var v630 = dnaSequence$$5.length;
        v534 = realStop > v630;
      }
      var v320 = v534;
      if (v320) {
        var v315 = outputWindow.document;
        JAM.call(v315.write, v315, ["The entire EMBL file was not processed, so this feature cannot be properly shown."], JAM.policy.p25);
        return true;
      } else {
        var v319 = outputType$$2 == "separated";
        if (v319) {
          var v316 = JAM.call(dnaSequence$$5.substring, dnaSequence$$5, [realStart, realStop], JAM.policy.p42);
          JAM.call(feature$$4.addFragment, feature$$4, [v316], JAM.policy.p40);
        } else {
          var v535 = feature$$4.lastAdded;
          var v317 = JAM.call(dnaSequence$$5.substring, dnaSequence$$5, [v535, realStart], JAM.policy.p42);
          JAM.call(feature$$4.addFragment, feature$$4, [v317], JAM.policy.p40);
          var v536 = JAM.call(dnaSequence$$5.substring, dnaSequence$$5, [realStart, realStop], JAM.policy.p42);
          var v318 = v536.toUpperCase();
          JAM.call(feature$$4.addFragment, feature$$4, [v318], JAM.policy.p40);
          feature$$4.lastAdded = realStop;
        }
      }
      j$$10 = j$$10 + 1;
      var v537 = pairArray.length;
      v321 = j$$10 < v537;
    }
    feature$$4.writeFeature();
  }
  return true;
}
function writeFeature() {
  var v538 = this.strand;
  var v327 = v538 == "complement";
  if (v327) {
    var v323 = outputWindow.document;
    var v726 = this.fragments;
    var v691 = JAM.call(v726.join, v726, [""], JAM.policy.p25);
    var v632 = complement(v691);
    var v539 = reverse(v632);
    var v324 = addReturns(v539);
    JAM.call(v323.write, v323, [v324], JAM.policy.p40);
  } else {
    var v325 = outputWindow.document;
    var v633 = this.fragments;
    var v540 = JAM.call(v633.join, v633, [""], JAM.policy.p25);
    var v326 = addReturns(v540);
    JAM.call(v325.write, v325, [v326], JAM.policy.p40);
  }
  return;
}
function addFragment(sequence$$18) {
  var v328 = this.fragments;
  JAM.call(v328.push, v328, [sequence$$18], JAM.policy.p40);
  return;
}
function Feature(strand) {
  this.strand = strand;
  var v828 = new Array;
  this.fragments = v828;
  this.lastAdded = 0;
  return;
}
new Feature;
var v329 = Feature.prototype;
v329.writeFeature = writeFeature;
var v330 = Feature.prototype;
v330.addFragment = addFragment;
JAM.set(document, "onload", v2);
var v331 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p25);
JAM.set(v331, "onclick", v3);
var v332 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p25);
JAM.set(v332, "onclick", v4)
