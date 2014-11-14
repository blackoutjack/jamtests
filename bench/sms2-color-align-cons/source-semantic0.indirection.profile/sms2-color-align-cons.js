
JAM.startProfile('load');
function v4() {
  var v680 = document.forms;
  var v568 = v680[0];
  var v327 = v568.elements;
  var v5 = v327[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    colorAlignCons(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v328 = document.main_form;
  var v7 = v328.main_submit;
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
  var v329 = arrayOfSequences.length;
  var v9 = v329 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v330 = arrayOfTitles.length;
  var v11 = i$$1 < v330;
  for (;v11;) {
    var v747 = arrayOfTitles[i$$1];
    var v681 = JAM.call(v747.search, v747, [/\S/], JAM.policy.p15);
    var v569 = v681 == -1;
    var v683 = !v569;
    if (v683) {
      var v748 = arrayOfSequences[i$$1];
      var v682 = JAM.call(v748.search, v748, [/\S/], JAM.policy.p15);
      v569 = v682 == -1;
    }
    var v331 = v569;
    var v571 = !v331;
    if (v571) {
      var v684 = arrayOfSequences[i$$1];
      var v570 = v684.length;
      v331 = v570 != lengthOfAlign;
    }
    var v10 = v331;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v332 = arrayOfTitles.length;
    v11 = i$$1 < v332;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v787 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p15);
  var v749 = v787 == -1;
  var v789 = !v749;
  if (v789) {
    var v788 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p15);
    v749 = v788 == -1;
  }
  var v685 = v749;
  var v751 = !v685;
  if (v751) {
    var v750 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p15);
    v685 = v750 == -1;
  }
  var v572 = v685;
  var v687 = !v572;
  if (v687) {
    var v686 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p15);
    v572 = v686 == -1;
  }
  var v333 = v572;
  var v574 = !v333;
  if (v574) {
    var v573 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p15);
    v333 = v573 == -1;
  }
  var v12 = v333;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v575 = formElement.value;
  var v334 = JAM.call(v575.search, v575, [/\S/], JAM.policy.p15);
  var v13 = v334 == -1;
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
  var v335 = arrayOfPatterns.length;
  var v16 = z$$2 < v335;
  for (;v16;) {
    var v576 = arrayOfPatterns[z$$2];
    var v336 = JAM.call(v576.search, v576, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p15);
    var v14 = v336 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v577 = arrayOfPatterns[z$$2];
    var v337 = moreExpressionCheck(v577);
    var v15 = v337 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v338 = arrayOfPatterns.length;
    v16 = z$$2 < v338;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v339 = arrayOfPatterns.length;
  var v22 = j < v339;
  for (;v22;) {
    var v578 = arrayOfPatterns[j];
    var v340 = JAM.call(v578.match, v578, [/\/.+\//], JAM.policy.p15);
    var v19 = v340 + "gi";
    if (JAM.isEval(eval)) {
      var v887 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v887 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v887;
    var v341 = arrayOfPatterns[j];
    var v20 = JAM.call(v341.match, v341, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v888 = v20.toString();
    geneticCodeMatchResult[j] = v888;
    var v21 = geneticCodeMatchResult[j];
    var v889 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v889;
    j++;
    var v342 = arrayOfPatterns.length;
    v22 = j < v342;
  }
  var i$$2 = 0;
  var v579 = testSequence.length;
  var v343 = v579 - 3;
  var v29 = i$$2 <= v343;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p16);
    j = 0;
    var v344 = geneticCodeMatchExp.length;
    var v27 = j < v344;
    for (;v27;) {
      var v580 = geneticCodeMatchExp[j];
      var v345 = JAM.call(codon.search, codon, [v580], JAM.policy.p17);
      var v26 = v345 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v346 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v346 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v347 = geneticCodeMatchExp.length;
      v27 = j < v347;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v581 = testSequence.length;
    var v348 = v581 - 3;
    v29 = i$$2 <= v348;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v349 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v349;
  for (;v31;) {
    var v582 = arrayOfPatterns$$1[z$$3];
    var v350 = JAM.call(v582.search, v582, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p15);
    var v30 = v350 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v351 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v351;
  }
  var i$$3 = 0;
  var v352 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v352;
  for (;v35;) {
    var v583 = arrayOfPatterns$$1[i$$3];
    var v353 = "[" + v583;
    var v32 = v353 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v354 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v354;
    for (;v34;) {
      var v584 = arrayOfPatterns$$1[j$$1];
      var v355 = JAM.call(v584.search, v584, [re], JAM.policy.p17);
      var v33 = v355 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v356 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v356;
    }
    i$$3++;
    var v357 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v357;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v358 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v358;
  for (;v38;) {
    var v585 = arrayOfPatterns$$2[z$$4];
    var v359 = JAM.call(v585.search, v585, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p15);
    var v36 = v359 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v586 = arrayOfPatterns$$2[z$$4];
    var v360 = moreExpressionCheck(v586);
    var v37 = v360 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v361 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v361;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v688 = getSequenceFromFasta(text$$7);
  var v587 = JAM.call(v688.replace, v688, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v362 = v587.length;
  var v40 = v362 > maxInput;
  if (v40) {
    var v363 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v363 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v364 = text$$8.length;
  var v42 = v364 > maxInput$$1;
  if (v42) {
    var v365 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v365 + " characters.";
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
  var v366 = alignArray.length;
  var v49 = v366 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v367 = alignArray.length;
  var v51 = i$$4 < v367;
  for (;v51;) {
    var v588 = alignArray[i$$4];
    var v368 = JAM.call(v588.search, v588, [/[^\s]+\s/], JAM.policy.p15);
    var v50 = v368 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v369 = alignArray.length;
    v51 = i$$4 < v369;
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
  var v370 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v54 = v370 != -1;
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
  var v371 = sequence$$2.length;
  var v55 = "&gt;results for " + v371;
  var stringToReturn = v55 + " residue sequence ";
  var v372 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p15);
  var v57 = v372 != -1;
  if (v57) {
    var v373 = stringToReturn + '"';
    var v56 = v373 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v374 = stringToReturn + ' starting "';
  var v375 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v374 + v375;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v376 = sequenceOne.length;
  var v59 = "Search results for " + v376;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v377 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p15);
  var v61 = v377 != -1;
  if (v61) {
    var v378 = stringToReturn$$1 + '"';
    var v60 = v378 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v379 = stringToReturn$$1 + ' starting "';
  var v380 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v379 + v380;
  stringToReturn$$1 = v62 + '"\n';
  var v381 = stringToReturn$$1 + "and ";
  var v382 = sequenceTwo.length;
  var v63 = v381 + v382;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v383 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p15);
  var v65 = v383 != -1;
  if (v65) {
    var v384 = stringToReturn$$1 + '"';
    var v64 = v384 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v385 = stringToReturn$$1 + ' starting "';
  var v386 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v66 = v385 + v386;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v387 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v387;
  for (;v70;) {
    var v589 = arrayOfPatterns$$3[j$$2];
    var v388 = JAM.call(v589.match, v589, [/\/.+\//], JAM.policy.p15);
    var v69 = v388 + "gi";
    if (JAM.isEval(eval)) {
      var v890 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v890 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v890;
    j$$2++;
    var v389 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v389;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v390 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v390;
  for (;v74;) {
    var v391 = arrayOfPatterns$$4[j$$3];
    var v72 = JAM.call(v391.match, v391, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v891 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v891;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v892 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v892;
    j$$3++;
    var v392 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v392;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v393 = sequence$$3.length;
  var v75 = "Results for " + v393;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v394 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p15);
  var v77 = v394 != -1;
  if (v77) {
    var v395 = stringToReturn$$2 + '"';
    var v76 = v395 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v396 = stringToReturn$$2 + ' starting "';
  var v397 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v78 = v396 + v397;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v590 = "Results for " + topology;
  var v398 = v590 + " ";
  var v399 = sequence$$4.length;
  var v80 = v398 + v399;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v400 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p15);
  var v82 = v400 != -1;
  if (v82) {
    var v401 = stringToReturn$$3 + '"';
    var v81 = v401 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v402 = stringToReturn$$3 + ' starting "';
  var v403 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v402 + v403;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v404 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v404;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v405 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p15);
  var v87 = v405 != -1;
  if (v87) {
    var v406 = stringToReturn$$4 + '"';
    var v86 = v406 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v407 = stringToReturn$$4 + ' starting "';
  var v408 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v407 + v408;
  stringToReturn$$4 = v88 + '"\n';
  var v409 = stringToReturn$$4 + "and ";
  var v410 = sequenceTwo$$1.length;
  var v89 = v409 + v410;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v411 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p15);
  var v91 = v411 != -1;
  if (v91) {
    var v412 = stringToReturn$$4 + '"';
    var v90 = v412 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v413 = stringToReturn$$4 + ' starting "';
  var v414 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v92 = v413 + v414;
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
    var v415 = Math.random();
    var v416 = components.length;
    var v94 = v415 * v416;
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p15);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p9);
}
function getSequenceFromFasta(sequenceRecord) {
  var v417 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v96 = v417 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v418 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v98 = v418 != -1;
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
  var v865 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p15);
  var v858 = v865 != -1;
  var v867 = !v858;
  if (v867) {
    var v866 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p15);
    v858 = v866 != -1;
  }
  var v849 = v858;
  var v860 = !v849;
  if (v860) {
    var v859 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p15);
    v849 = v859 != -1;
  }
  var v840 = v849;
  var v851 = !v840;
  if (v851) {
    var v850 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p15);
    v840 = v850 != -1;
  }
  var v827 = v840;
  var v842 = !v827;
  if (v842) {
    var v841 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p15);
    v827 = v841 != -1;
  }
  var v809 = v827;
  var v829 = !v809;
  if (v829) {
    var v828 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p15);
    v809 = v828 != -1;
  }
  var v790 = v809;
  var v811 = !v790;
  if (v811) {
    var v810 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p15);
    v790 = v810 != -1;
  }
  var v752 = v790;
  var v792 = !v752;
  if (v792) {
    var v791 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p15);
    v752 = v791 != -1;
  }
  var v689 = v752;
  var v754 = !v689;
  if (v754) {
    var v753 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p15);
    v689 = v753 != -1;
  }
  var v591 = v689;
  var v691 = !v591;
  if (v691) {
    var v690 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p15);
    v591 = v690 != -1;
  }
  var v419 = v591;
  var v593 = !v419;
  if (v593) {
    var v592 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p15);
    v419 = v592 != -1;
  }
  var v99 = v419;
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
  var v692 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v594 = v692 + "<head>\n";
  var v420 = v594 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v420 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p17);
  if (isColor) {
    var v106 = outputWindow.document;
    var v880 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v876 = v880 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v872 = v876 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v868 = v872 + "div.info {font-weight: bold}\n";
    var v861 = v868 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v852 = v861 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v843 = v852 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v830 = v843 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v812 = v830 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v793 = v812 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v755 = v793 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v693 = v755 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v595 = v693 + "td.many {color: #000000}\n";
    var v421 = v595 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v421 + "</style>\n";
    JAM.call(v106.write, v106, [v107], JAM.policy.p17);
  } else {
    var v108 = outputWindow.document;
    var v884 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v881 = v884 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v877 = v881 + "div.title {display: none}\n";
    var v873 = v877 + "div.info {font-weight: bold}\n";
    var v869 = v873 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v862 = v869 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v853 = v862 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v844 = v853 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v831 = v844 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v813 = v831 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v794 = v813 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v756 = v794 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v694 = v756 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v596 = v694 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v422 = v596 + "img {display: none}\n";
    var v109 = v422 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p17);
  }
  var v110 = outputWindow.document;
  var v695 = "</head>\n" + '<body class="main">\n';
  var v597 = v695 + '<div class="title">';
  var v423 = v597 + title$$6;
  var v111 = v423 + " results</div>\n";
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
  var v696 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v598 = v696 + "<head>\n";
  var v424 = v598 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v424 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p17);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v882 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v878 = v882 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v874 = v878 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v870 = v874 + "div.info {font-weight: bold}\n";
    var v863 = v870 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v854 = v863 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v845 = v854 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v832 = v845 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v814 = v832 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v795 = v814 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v757 = v795 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v697 = v757 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v599 = v697 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v425 = v599 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v425 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p17);
  } else {
    var v116 = outputWindow.document;
    var v886 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v885 = v886 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v883 = v885 + "div.title {display: none}\n";
    var v879 = v883 + "div.info {font-weight: bold}\n";
    var v875 = v879 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v871 = v875 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v864 = v871 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v855 = v864 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v846 = v855 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v833 = v846 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v815 = v833 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v796 = v815 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v758 = v796 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v698 = v758 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v600 = v698 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v426 = v600 + "img {display: none}\n";
    var v117 = v426 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p17);
  }
  var v118 = outputWindow.document;
  var v699 = "</head>\n" + '<body class="main">\n';
  var v601 = v699 + '<div class="title">';
  var v427 = v601 + title$$8;
  var v119 = v427 + " results</div>\n";
  JAM.call(v118.write, v118, [v119], JAM.policy.p17);
  outputWindow.status = "Please Wait.";
  return true;
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
  var v428 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p15);
  var v120 = v428 != -1;
  if (v120) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p15);
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
  var v429 = testArray[0];
  var v124 = v429 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v430 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v125 = v430 == -1;
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
  var v431 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p10);
  var v128 = v431 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v432 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p10);
  var v129 = v432 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v433 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p15);
  var v130 = v433 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v759 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p15);
  var v700 = v759 == -1;
  var v761 = !v700;
  if (v761) {
    var v760 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p15);
    v700 = v760 == -1;
  }
  var v602 = v700;
  var v702 = !v602;
  if (v702) {
    var v701 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p15);
    v602 = v701 == -1;
  }
  var v434 = v602;
  var v604 = !v434;
  if (v604) {
    var v603 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p15);
    v434 = v603 == -1;
  }
  var v131 = v434;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v435 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p15);
  var v132 = v435 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v436 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v436 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v437 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p15);
  var v135 = v437 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v438 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p15);
  var v136 = v438 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v762 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p15);
  var v703 = v762 == -1;
  var v764 = !v703;
  if (v764) {
    var v763 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p15);
    v703 = v763 == -1;
  }
  var v605 = v703;
  var v705 = !v605;
  if (v705) {
    var v704 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p15);
    v605 = v704 == -1;
  }
  var v439 = v605;
  var v607 = !v439;
  if (v607) {
    var v606 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p15);
    v439 = v606 == -1;
  }
  var v137 = v439;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v765 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p15);
  var v706 = v765 == -1;
  var v767 = !v706;
  if (v767) {
    var v766 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p15);
    v706 = v766 == -1;
  }
  var v608 = v706;
  var v708 = !v608;
  if (v708) {
    var v707 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p15);
    v608 = v707 == -1;
  }
  var v440 = v608;
  var v610 = !v440;
  if (v610) {
    var v609 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p15);
    v440 = v609 == -1;
  }
  var v138 = v440;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v441 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p15);
  var v139 = v441 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v768 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p15);
  var v709 = v768 == -1;
  var v770 = !v709;
  if (v770) {
    var v769 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p15);
    v709 = v769 == -1;
  }
  var v611 = v709;
  var v711 = !v611;
  if (v711) {
    var v710 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p15);
    v611 = v710 == -1;
  }
  var v442 = v611;
  var v613 = !v442;
  if (v613) {
    var v612 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p15);
    v442 = v612 == -1;
  }
  var v140 = v442;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v443 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p15);
  var v141 = v443 == -1;
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
    var v444 = basePerLine / groupSize;
    var v145 = j$$6 <= v444;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v445 = k + i$$5;
        var v143 = JAM.call(text$$10.charAt, text$$10, [v445], JAM.policy.p17);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v446 = basePerLine / groupSize;
      v145 = j$$6 <= v446;
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
  JAM.call(writeGroupNumDnaSetStart, null, [text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0], JAM.policy.p20);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v447 = adjustment < 0;
    if (v447) {
      v447 = adjusted >= 0;
    }
    var v149 = v447;
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
    var v448 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v448;
    for (;v158;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v449 = i$$6 + k$$1;
        var v150 = v449 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v151 = lineOfText$$1;
        var v450 = k$$1 + i$$6;
        var v152 = JAM.call(text$$12.charAt, text$$12, [v450], JAM.policy.p17);
        lineOfText$$1 = v151 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v156 = numberPosition$$1 == "above";
      if (v156) {
        var v154 = aboveNum;
        var v451 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p20);
        var v155 = rightNum(v451, "", groupSize$$2, tabIn$$3);
        aboveNum = v154 + v155;
      }
      var v157 = i$$6 >= stopBase$$2;
      if (v157) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v452 = basePerLine$$2 / groupSize$$2;
      v158 = j$$7 <= v452;
    }
    var v181 = numberPosition$$1 == "left";
    if (v181) {
      var v159 = outputWindow.document;
      var v712 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p20);
      var v614 = rightNum(v712, "", 8, tabIn$$3);
      var v453 = v614 + lineOfText$$1;
      var v160 = v453 + "\n";
      JAM.call(v159.write, v159, [v160], JAM.policy.p17);
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v713 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p20);
        var v615 = rightNum(v713, "", 8, tabIn$$3);
        var v616 = complement(lineOfText$$1);
        var v454 = v615 + v616;
        var v162 = v454 + "\n";
        JAM.call(v161.write, v161, [v162], JAM.policy.p17);
        var v163 = outputWindow.document;
        JAM.call(v163.write, v163, ["\n"], JAM.policy.p9);
      }
    } else {
      var v180 = numberPosition$$1 == "right";
      if (v180) {
        var v165 = outputWindow.document;
        var v617 = lineOfText$$1;
        var v618 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p20);
        var v455 = v617 + v618;
        var v166 = v455 + "\n";
        JAM.call(v165.write, v165, [v166], JAM.policy.p17);
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v619 = complement(lineOfText$$1);
          var v620 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p20);
          var v456 = v619 + v620;
          var v168 = v456 + "\n";
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
            var v457 = complement(lineOfText$$1);
            var v176 = v457 + "\n";
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
    var v458 = basePerLine$$3 / groupSize$$3;
    var v189 = j$$8 <= v458;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        var v459 = i$$7 + k$$2;
        var v183 = v459 >= stopBase$$3;
        if (v183) {
          break;
        }
        var v460 = k$$2 + i$$7;
        var v184 = JAM.call(text$$13.charAt, text$$13, [v460], JAM.policy.p17);
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
      var v461 = basePerLine$$3 / groupSize$$3;
      v189 = j$$8 <= v461;
    }
    var v200 = numberPosition$$2 == "left";
    if (v200) {
      var v190 = outputWindow.document;
      var v621 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v462 = v621 + lineOfText$$2;
      var v191 = v462 + "\n";
      JAM.call(v190.write, v190, [v191], JAM.policy.p17);
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v463 = lineOfText$$2 + i$$7;
        var v193 = v463 + "\n";
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
  var v714 = sequence$$13.length;
  var v622 = v714 <= firstIndexToMutate;
  var v715 = !v622;
  if (v715) {
    v622 = lastIndexToMutate < 0;
  }
  var v464 = v622;
  var v623 = !v464;
  if (v623) {
    v464 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v202 = v464;
  if (v202) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    var v465 = Math.random();
    var v203 = v465 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v203], JAM.policy.p15);
    var v466 = randNum < firstIndexToMutate;
    var v624 = !v466;
    if (v624) {
      v466 = randNum > lastIndexToMutate;
    }
    var v204 = v466;
    if (v204) {
      numMut++;
      i$$8++;
      v210 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p15);
    needNewChar = true;
    for (;needNewChar;) {
      var v467 = Math.random();
      var v468 = components$$1.length;
      var v205 = v467 * v468;
      componentsIndex = JAM.call(Math.round, Math, [v205], JAM.policy.p15);
      var v469 = components$$1.length;
      var v206 = componentsIndex == v469;
      if (v206) {
        componentsIndex = 0;
      }
      var v470 = components$$1[componentsIndex];
      var v207 = v470 != currentChar;
      if (v207) {
        needNewChar = false;
      }
    }
    var v471 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v472 = components$$1[componentsIndex];
    var v208 = v471 + v472;
    var v473 = randNum + 1;
    var v474 = sequence$$13.length;
    var v209 = JAM.call(sequence$$13.substring, sequence$$13, [v473, v474], JAM.policy.p21);
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
    var v475 = Math.random();
    var v476 = components$$2.length;
    var v213 = v475 * v476;
    tempNum$$1 = JAM.call(Math.floor, Math, [v213], JAM.policy.p15);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v477 = sequence$$14.length;
    var v216 = v477 == 60;
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
    var v716 = sequence$$15.length;
    var v625 = v716 - lookAhead;
    var v626 = sequence$$15.length;
    var v478 = JAM.call(sequence$$15.substring, sequence$$15, [v625, v626], JAM.policy.p21);
    var v221 = v478 + sequence$$15;
    var v222 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v221 + v222;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  JAM.call(v224.write, v224, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v225 = outputWindow.document;
  var v717 = '<tr><td class="title" width="200px">' + "Site:";
  var v627 = v717 + '</td><td class="title">';
  var v479 = v627 + "Positions:";
  var v226 = v479 + "</td></tr>\n";
  JAM.call(v225.write, v225, [v226], JAM.policy.p17);
  var i$$9 = 0;
  var v480 = arrayOfItems.length;
  var v242 = i$$9 < v480;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v481 = arrayOfItems[i$$9];
    var v227 = JAM.call(v481.match, v481, [/\/.+\//], JAM.policy.p15);
    matchExp = v227 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v718 = arrayOfItems[i$$9];
    var v628 = JAM.call(v718.match, v718, [/\)\D*\d+/], JAM.policy.p15);
    var v482 = v628.toString();
    var v228 = JAM.call(v482.replace, v482, [/\)\D*/, ""], JAM.policy.p16);
    cutDistance = parseFloat(v228);
    var v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v234;) {
      var v229 = matchExp.lastIndex;
      matchPosition = v229 - cutDistance;
      var v483 = matchPosition >= lowerLimit;
      if (v483) {
        v483 = matchPosition < upperLimit;
      }
      var v232 = v483;
      if (v232) {
        timesFound++;
        var v230 = tempString$$1 + ", ";
        var v484 = matchPosition - shiftValue;
        var v231 = v484 + 1;
        tempString$$1 = v230 + v231;
      }
      var v485 = matchExp.lastIndex;
      var v629 = RegExp.lastMatch;
      var v486 = v629.length;
      var v233 = v485 - v486;
      matchExp.lastIndex = v233 + 1;
      v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v487 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p15);
    var v235 = v487 != -1;
    if (v235) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p16);
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
    var v834 = '<tr><td class="' + backGroundClass;
    var v816 = v834 + '">';
    var v856 = arrayOfItems[i$$9];
    var v847 = JAM.call(v856.match, v856, [/\([^\(]+\)/], JAM.policy.p15);
    var v835 = v847.toString();
    var v817 = JAM.call(v835.replace, v835, [/\(|\)/g, ""], JAM.policy.p16);
    var v797 = v816 + v817;
    var v771 = v797 + '</td><td class="';
    var v719 = v771 + backGroundClass;
    var v630 = v719 + '">';
    var v488 = v630 + tempString$$1;
    var v241 = v488 + "</td></tr>\n";
    JAM.call(v240.write, v240, [v241], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v489 = arrayOfItems.length;
    v242 = i$$9 < v489;
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
  var v798 = '<tr><td class="title">' + "Pattern:";
  var v772 = v798 + '</td><td class="title">';
  var v720 = v772 + "Times found:";
  var v631 = v720 + '</td><td class="title">';
  var v490 = v631 + "Percentage:";
  var v246 = v490 + "</td></tr>\n";
  JAM.call(v245.write, v245, [v246], JAM.policy.p17);
  var i$$10 = 0;
  var v491 = arrayOfItems$$1.length;
  var v255 = i$$10 < v491;
  for (;v255;) {
    var tempNumber = 0;
    var v492 = arrayOfItems$$1[i$$10];
    var v247 = JAM.call(v492.match, v492, [/\/[^\/]+\//], JAM.policy.p15);
    var matchExp$$1 = v247 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v493 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v249 = v493 != -1;
    if (v249) {
      var v248 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v632 = originalLength + 1;
    var v773 = arrayOfItems$$1[i$$10];
    var v721 = JAM.call(v773.match, v773, [/\d+/], JAM.policy.p15);
    var v633 = parseFloat(v721);
    var v494 = v632 - v633;
    var v252 = v494 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v495 = originalLength + 1;
      var v722 = arrayOfItems$$1[i$$10];
      var v634 = JAM.call(v722.match, v722, [/\d+/], JAM.policy.p15);
      var v496 = parseFloat(v634);
      var v251 = v495 - v496;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v857 = arrayOfItems$$1[i$$10];
    var v848 = JAM.call(v857.match, v857, [/\([^\(]+\)\b/], JAM.policy.p15);
    var v836 = v848.toString();
    var v818 = JAM.call(v836.replace, v836, [/\(|\)/g, ""], JAM.policy.p16);
    var v799 = "<tr><td>" + v818;
    var v774 = v799 + "</td><td>";
    var v723 = v774 + tempNumber;
    var v635 = v723 + "</td><td>";
    var v636 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p10);
    var v497 = v635 + v636;
    var v254 = v497 + "</td></tr>\n";
    JAM.call(v253.write, v253, [v254], JAM.policy.p17);
    i$$10++;
    var v498 = arrayOfItems$$1.length;
    v255 = i$$10 < v498;
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
  var v499 = sequence$$17.length;
  var v263 = v499 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v500 = Math.random();
    var v257 = v500 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v257], JAM.policy.p15);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p15);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v258 = randNum$$1 + 1;
    var v259 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v258, v259], JAM.policy.p16);
    sequence$$17 = tempString1 + tempString2;
    var v501 = tempSeq.length;
    var v262 = v501 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      JAM.call(v260.write, v260, [v261], JAM.policy.p17);
      tempSeq = "";
    }
    var v502 = sequence$$17.length;
    v263 = v502 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  JAM.call(v264.write, v264, [v265], JAM.policy.p17);
  return true;
}
function colorAlignCons(theDocument) {
  JAM.startProfile('compute');

  var maxInput$$3 = 2E4;
  var v503 = testScript();
  var v266 = v503 == false;
  if (v266) {
    return false;
  }
  var theAlignment = "";
  var alignArray$$1 = new Array;
  var groupString = "";
  var arrayOfGroups = new Array;
  var titleArray = new Array;
  var sequenceArray$$1 = new Array;
  var longestTitle;
  var v819 = theDocument.forms;
  var v800 = v819[0];
  var v775 = v800.elements;
  var v724 = v775[0];
  var v637 = checkFormElement(v724);
  var v504 = v637 == false;
  var v639 = !v504;
  if (v639) {
    var v837 = theDocument.forms;
    var v820 = v837[0];
    var v801 = v820.elements;
    var v776 = v801[0];
    var v725 = v776.value;
    var v638 = JAM.call(checkTextLength, null, [v725, maxInput$$3], JAM.policy.p20);
    v504 = v638 == false;
  }
  var v267 = v504;
  if (v267) {
    return false;
  }
  var v777 = theDocument.forms;
  var v726 = v777[0];
  var v640 = v726.elements;
  var v505 = v640[0];
  var v268 = v505.value;
  theAlignment = "X" + v268;
  alignArray$$1 = JAM.call(theAlignment.split, theAlignment, [/[>%#]/], JAM.policy.p15);
  var v506 = earlyCheckAlign(alignArray$$1);
  var v269 = v506 == false;
  if (v269) {
    return false;
  }
  var i$$11 = 1;
  var v507 = alignArray$$1.length;
  var v279 = i$$11 < v507;
  for (;v279;) {
    var v270 = i$$11 - 1;
    var v508 = alignArray$$1[i$$11];
    var v893 = JAM.call(v508.match, v508, [/[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
    titleArray[v270] = v893;
    var v271 = i$$11 - 1;
    var v778 = i$$11 - 1;
    var v727 = titleArray[v778];
    var v641 = v727.toString();
    var v509 = filterFastaTitle(v641);
    var v894 = JAM.call(v509.replace, v509, [/[\f\n\r]/g, ""], JAM.policy.p16);
    titleArray[v271] = v894;
    var v272 = i$$11 - 1;
    var v642 = i$$11 - 1;
    var v510 = titleArray[v642];
    var v895 = JAM.call(v510.substring, v510, [0, 20], JAM.policy.p13);
    titleArray[v272] = v895;
    var v276 = i$$11 == 1;
    if (v276) {
      var v511 = i$$11 - 1;
      var v273 = titleArray[v511];
      longestTitle = v273.length;
    } else {
      var v728 = i$$11 - 1;
      var v643 = titleArray[v728];
      var v512 = v643.length;
      var v275 = v512 > longestTitle;
      if (v275) {
        var v513 = i$$11 - 1;
        var v274 = titleArray[v513];
        longestTitle = v274.length;
      }
    }
    var v277 = i$$11 - 1;
    var v514 = alignArray$$1[i$$11];
    var v896 = JAM.call(v514.replace, v514, [/[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
    sequenceArray$$1[v277] = v896;
    var v278 = i$$11 - 1;
    var v644 = i$$11 - 1;
    var v515 = sequenceArray$$1[v644];
    var v897 = filterAlignSeq(v515);
    sequenceArray$$1[v278] = v897;
    i$$11++;
    var v516 = alignArray$$1.length;
    v279 = i$$11 < v516;
  }
  var spaceString = "                    ";
  i$$11 = 0;
  var v517 = titleArray.length;
  var v283 = i$$11 < v517;
  for (;v283;) {
    var v645 = titleArray[i$$11];
    var v518 = v645.length;
    var v282 = v518 < longestTitle;
    if (v282) {
      var v280 = titleArray[i$$11];
      var v729 = titleArray[i$$11];
      var v646 = v729.length;
      var v519 = longestTitle - v646;
      var v281 = JAM.call(spaceString.substring, spaceString, [0, v519], JAM.policy.p13);
      titleArray[i$$11] = v280 + v281;
    }
    i$$11++;
    var v520 = titleArray.length;
    v283 = i$$11 < v520;
  }
  var v521 = JAM.call(checkAlign, null, [titleArray, sequenceArray$$1], JAM.policy.p20);
  var v284 = v521 == false;
  if (v284) {
    return false;
  }
  var v802 = theDocument.forms;
  var v779 = v802[0];
  var v730 = v779.elements;
  var v647 = v730[7];
  var v522 = v647.value;
  var v285 = JAM.call(v522.replace, v522, [/\s/g, ""], JAM.policy.p16);
  groupString = v285.toUpperCase();
  arrayOfGroups = JAM.call(groupString.split, groupString, [/,/], JAM.policy.p15);
  var v523 = checkGroupInput(arrayOfGroups);
  var v286 = v523 == false;
  if (v286) {
    return false;
  }
  var isBackground$$1;
  var v838 = theDocument.forms;
  var v821 = v838[0];
  var v803 = v821.elements;
  var v780 = v803[6];
  var v731 = v780.options;
  var v839 = theDocument.forms;
  var v822 = v839[0];
  var v804 = v822.elements;
  var v781 = v804[6];
  var v732 = v781.selectedIndex;
  var v648 = v731[v732];
  var v524 = v648.value;
  var v287 = v524 == "background";
  if (v287) {
    isBackground$$1 = true;
  } else {
    isBackground$$1 = false;
  }
  _openWindowAlign("Color Align Conservation", isBackground$$1);
  openPre();
  var v823 = theDocument.forms;
  var v805 = v823[0];
  var v782 = v805.elements;
  var v733 = v782[4];
  var v649 = v733.options;
  var v824 = theDocument.forms;
  var v806 = v824[0];
  var v783 = v806.elements;
  var v734 = v783[4];
  var v650 = v734.selectedIndex;
  var v525 = v649[v650];
  var v288 = v525.value;
  var v825 = theDocument.forms;
  var v807 = v825[0];
  var v784 = v807.elements;
  var v735 = v784[5];
  var v651 = v735.options;
  var v826 = theDocument.forms;
  var v808 = v826[0];
  var v785 = v808.elements;
  var v736 = v785[5];
  var v652 = v736.selectedIndex;
  var v526 = v651[v652];
  var v289 = v526.value;
  var v786 = theDocument.forms;
  var v737 = v786[0];
  var v653 = v737.elements;
  var v527 = v653[8];
  var v290 = v527.value;
  JAM.call(colorAlign, null, [titleArray, sequenceArray$$1, v288, v289, arrayOfGroups, v290, longestTitle], JAM.policy.p20);
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function colorAlign(arrayOfTitles$$1, arrayOfSequences$$1, basePerLine$$4, consensus, arrayOfGroups$$1, definedStarts, longestTitle$$1) {
  var v291 = arrayOfSequences$$1.length;
  var positions = new Array(v291);
  var v528 = JAM.call(definedStarts.search, definedStarts, [/\S/], JAM.policy.p15);
  var v292 = v528 == -1;
  if (v292) {
    definedStarts = "0,0";
  }
  var definedStartsArray = JAM.call(definedStarts.split, definedStarts, [/,/], JAM.policy.p15);
  var i$$12 = 0;
  var v529 = positions.length;
  var v296 = i$$12 < v529;
  for (;v296;) {
    var v530 = definedStartsArray.length;
    var v295 = i$$12 >= v530;
    if (v295) {
      positions[i$$12] = 0;
    } else {
      var v654 = definedStartsArray[i$$12];
      var v531 = JAM.call(v654.search, v654, [/\d/], JAM.policy.p15);
      var v294 = v531 != -1;
      if (v294) {
        var v532 = definedStartsArray[i$$12];
        var v293 = JAM.call(v532.replace, v532, [/[^\d\-]/g, ""], JAM.policy.p16);
        var v898 = parseInt(v293);
        positions[i$$12] = v898;
      } else {
        alert("An incorrect starting position was encountered. It was set to 0.");
        outputWindow.focus();
        positions[i$$12] = 0;
      }
    }
    i$$12++;
    var v533 = positions.length;
    v296 = i$$12 < v533;
  }
  var totalBasesShown = 0;
  var v297 = parseInt(consensus);
  consensus = v297 / 100;
  basePerLine$$4 = parseInt(basePerLine$$4);
  var columnCount = 0;
  var arrayOfColumns = new Array(basePerLine$$4);
  i$$12 = 0;
  var v534 = arrayOfColumns.length;
  var v299 = i$$12 < v534;
  for (;v299;) {
    var v298 = arrayOfSequences$$1.length;
    var v899 = new Array(v298);
    arrayOfColumns[i$$12] = v899;
    i$$12++;
    var v535 = arrayOfColumns.length;
    v299 = i$$12 < v535;
  }
  i$$12 = 0;
  var columnSeq;
  var re$$3;
  var result;
  var output = "";
  var v655 = arrayOfSequences$$1[0];
  var v536 = v655.length;
  var v324 = totalBasesShown < v536;
  for (;v324;) {
    var jj = 0;
    var v537 = arrayOfSequences$$1.length;
    var v322 = jj < v537;
    for (;v322;) {
      var v538 = arrayOfTitles$$1[jj];
      var v300 = output + v538;
      output = v300 + " ";
      var v656 = totalBasesShown + basePerLine$$4;
      var v539 = i$$12 < v656;
      if (v539) {
        var v738 = arrayOfSequences$$1[0];
        var v657 = v738.length;
        v539 = i$$12 < v657;
      }
      var v317 = v539;
      for (;v317;) {
        var v303 = jj == 0;
        if (v303) {
          var k$$3 = 0;
          var v540 = arrayOfSequences$$1.length;
          var v302 = k$$3 < v540;
          for (;v302;) {
            var v301 = arrayOfColumns[columnCount];
            var v541 = arrayOfSequences$$1[k$$3];
            var v900 = JAM.call(v541.charAt, v541, [i$$12], JAM.policy.p17);
            v301[k$$3] = v900;
            k$$3++;
            var v542 = arrayOfSequences$$1.length;
            v302 = k$$3 < v542;
          }
        }
        var v739 = arrayOfSequences$$1[jj];
        var v658 = JAM.call(v739.charAt, v739, [i$$12], JAM.policy.p17);
        var v543 = v658 == ".";
        var v660 = !v543;
        if (v660) {
          var v740 = arrayOfSequences$$1[jj];
          var v659 = JAM.call(v740.charAt, v740, [i$$12], JAM.policy.p17);
          v543 = v659 == "-";
        }
        var v305 = v543;
        if (v305) {
          var v544 = output + '<span class="diff">';
          var v661 = arrayOfSequences$$1[jj];
          var v545 = JAM.call(v661.charAt, v661, [i$$12], JAM.policy.p17);
          var v304 = v544 + v545;
          output = v304 + "</span>";
          i$$12 = i$$12 + 1;
          columnCount++;
          var v662 = totalBasesShown + basePerLine$$4;
          var v546 = i$$12 < v662;
          if (v546) {
            var v741 = arrayOfSequences$$1[0];
            var v663 = v741.length;
            v546 = i$$12 < v663;
          }
          v317 = v546;
          continue;
        }
        var v306 = arrayOfColumns[columnCount];
        columnSeq = JAM.call(v306.join, v306, [","], JAM.policy.p9);
        var v547 = arrayOfSequences$$1[jj];
        var v307 = JAM.call(v547.charAt, v547, [i$$12], JAM.policy.p17);
        re$$3 = new RegExp(v307, "gi");
        var v742 = JAM.call(columnSeq.match, columnSeq, [re$$3], JAM.policy.p17);
        var v664 = v742.length;
        var v665 = arrayOfSequences$$1.length;
        var v548 = v664 / v665;
        var v309 = v548 >= consensus;
        if (v309) {
          var v549 = output + '<span class="ident">';
          var v666 = arrayOfSequences$$1[jj];
          var v550 = JAM.call(v666.charAt, v666, [i$$12], JAM.policy.p17);
          var v308 = v549 + v550;
          output = v308 + "</span>";
          i$$12 = i$$12 + 1;
          columnCount++;
          var v667 = totalBasesShown + basePerLine$$4;
          var v551 = i$$12 < v667;
          if (v551) {
            var v743 = arrayOfSequences$$1[0];
            var v668 = v743.length;
            v551 = i$$12 < v668;
          }
          v317 = v551;
          continue;
        }
        result = 1;
        var m = 0;
        var v552 = arrayOfGroups$$1.length;
        var v313 = m < v552;
        for (;v313;) {
          var v669 = arrayOfGroups$$1[m];
          var v553 = JAM.call(v669.search, v669, [re$$3], JAM.policy.p17);
          var v312 = v553 != -1;
          if (v312) {
            var v670 = arrayOfGroups$$1[m];
            var v554 = "[" + v670;
            var v310 = v554 + "]";
            re$$3 = new RegExp(v310, "gi");
            var v311 = JAM.call(columnSeq.match, columnSeq, [re$$3], JAM.policy.p17);
            result = v311.length;
            break;
          }
          m++;
          var v555 = arrayOfGroups$$1.length;
          v313 = m < v555;
        }
        var v671 = arrayOfSequences$$1.length;
        var v556 = result / v671;
        var v315 = v556 >= consensus;
        if (v315) {
          var v557 = output + '<span class="sim">';
          var v672 = arrayOfSequences$$1[jj];
          var v558 = JAM.call(v672.charAt, v672, [i$$12], JAM.policy.p17);
          var v314 = v557 + v558;
          output = v314 + "</span>";
          i$$12 = i$$12 + 1;
          columnCount++;
          var v673 = totalBasesShown + basePerLine$$4;
          var v559 = i$$12 < v673;
          if (v559) {
            var v744 = arrayOfSequences$$1[0];
            var v674 = v744.length;
            v559 = i$$12 < v674;
          }
          v317 = v559;
          continue;
        }
        var v560 = output + '<span class="diff">';
        var v675 = arrayOfSequences$$1[jj];
        var v561 = JAM.call(v675.charAt, v675, [i$$12], JAM.policy.p17);
        var v316 = v560 + v561;
        output = v316 + "</span>";
        i$$12 = i$$12 + 1;
        columnCount++;
        var v676 = totalBasesShown + basePerLine$$4;
        var v562 = i$$12 < v676;
        if (v562) {
          var v745 = arrayOfSequences$$1[0];
          var v677 = v745.length;
          v562 = i$$12 < v677;
        }
        v317 = v562;
      }
      var v318 = positions[jj];
      var v746 = arrayOfSequences$$1[jj];
      var v678 = JAM.call(v746.substring, v746, [totalBasesShown, i$$12], JAM.policy.p21);
      var v563 = JAM.call(v678.replace, v678, [/\.|\-/g, ""], JAM.policy.p16);
      var v319 = v563.length;
      positions[jj] = v318 + v319;
      var v564 = output + " ";
      var v565 = positions[jj];
      var v320 = v564 + v565;
      output = v320 + "\n";
      var v321 = outputWindow.document;
      JAM.call(v321.write, v321, [output], JAM.policy.p17);
      output = "";
      i$$12 = totalBasesShown;
      columnCount = 0;
      jj++;
      var v566 = arrayOfSequences$$1.length;
      v322 = jj < v566;
    }
    totalBasesShown = totalBasesShown + basePerLine$$4;
    i$$12 = totalBasesShown;
    var v323 = outputWindow.document;
    JAM.call(v323.write, v323, ["\n"], JAM.policy.p9);
    var v679 = arrayOfSequences$$1[0];
    var v567 = v679.length;
    v324 = totalBasesShown < v567;
  }
  return true;
}
JAM.set(document, "onload", v2);
var v325 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9);
JAM.set(v325, "onclick", v3);
var v326 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9);
JAM.set(v326, "onclick", v4)

JAM.stopProfile('load');
