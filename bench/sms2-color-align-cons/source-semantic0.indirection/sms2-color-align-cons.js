function v4() {
  var v677 = document.forms;
  var v566 = v677[0];
  var v325 = v566.elements;
  var v5 = v325[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    colorAlignCons();
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v326 = document.main_form;
  var v7 = v326.main_submit;
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
  var v327 = arrayOfSequences.length;
  var v9 = v327 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v328 = arrayOfTitles.length;
  var v11 = i$$1 < v328;
  for (;v11;) {
    var v744 = arrayOfTitles[i$$1];
    var v678 = JAM.call(v744.search, v744, [/\S/], JAM.policy.p15);
    var v567 = v678 == -1;
    var v680 = !v567;
    if (v680) {
      var v745 = arrayOfSequences[i$$1];
      var v679 = JAM.call(v745.search, v745, [/\S/], JAM.policy.p15);
      v567 = v679 == -1;
    }
    var v329 = v567;
    var v569 = !v329;
    if (v569) {
      var v681 = arrayOfSequences[i$$1];
      var v568 = v681.length;
      v329 = v568 != lengthOfAlign;
    }
    var v10 = v329;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v330 = arrayOfTitles.length;
    v11 = i$$1 < v330;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v784 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p15);
  var v746 = v784 == -1;
  var v786 = !v746;
  if (v786) {
    var v785 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p15);
    v746 = v785 == -1;
  }
  var v682 = v746;
  var v748 = !v682;
  if (v748) {
    var v747 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p15);
    v682 = v747 == -1;
  }
  var v570 = v682;
  var v684 = !v570;
  if (v684) {
    var v683 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p15);
    v570 = v683 == -1;
  }
  var v331 = v570;
  var v572 = !v331;
  if (v572) {
    var v571 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p15);
    v331 = v571 == -1;
  }
  var v12 = v331;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v573 = formElement.value;
  var v332 = JAM.call(v573.search, v573, [/\S/], JAM.policy.p15);
  var v13 = v332 == -1;
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
  var v333 = arrayOfPatterns.length;
  var v16 = z$$2 < v333;
  for (;v16;) {
    var v574 = arrayOfPatterns[z$$2];
    var v334 = JAM.call(v574.search, v574, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p15);
    var v14 = v334 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v575 = arrayOfPatterns[z$$2];
    var v335 = moreExpressionCheck(v575);
    var v15 = v335 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v336 = arrayOfPatterns.length;
    v16 = z$$2 < v336;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v337 = arrayOfPatterns.length;
  var v22 = j < v337;
  for (;v22;) {
    var v576 = arrayOfPatterns[j];
    var v338 = JAM.call(v576.match, v576, [/\/.+\//], JAM.policy.p15);
    var v19 = v338 + "gi";
    if (JAM.isEval(eval)) {
      var v884 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v884 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v884;
    var v339 = arrayOfPatterns[j];
    var v20 = JAM.call(v339.match, v339, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v885 = v20.toString();
    geneticCodeMatchResult[j] = v885;
    var v21 = geneticCodeMatchResult[j];
    var v886 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v886;
    j++;
    var v340 = arrayOfPatterns.length;
    v22 = j < v340;
  }
  var i$$2 = 0;
  var v577 = testSequence.length;
  var v341 = v577 - 3;
  var v29 = i$$2 <= v341;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p16);
    j = 0;
    var v342 = geneticCodeMatchExp.length;
    var v27 = j < v342;
    for (;v27;) {
      var v578 = geneticCodeMatchExp[j];
      var v343 = JAM.call(codon.search, codon, [v578], JAM.policy.p17);
      var v26 = v343 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v344 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v344 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v345 = geneticCodeMatchExp.length;
      v27 = j < v345;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v579 = testSequence.length;
    var v346 = v579 - 3;
    v29 = i$$2 <= v346;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v347 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v347;
  for (;v31;) {
    var v580 = arrayOfPatterns$$1[z$$3];
    var v348 = JAM.call(v580.search, v580, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p15);
    var v30 = v348 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v349 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v349;
  }
  var i$$3 = 0;
  var v350 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v350;
  for (;v35;) {
    var v581 = arrayOfPatterns$$1[i$$3];
    var v351 = "[" + v581;
    var v32 = v351 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v352 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v352;
    for (;v34;) {
      var v582 = arrayOfPatterns$$1[j$$1];
      var v353 = JAM.call(v582.search, v582, [re], JAM.policy.p17);
      var v33 = v353 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v354 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v354;
    }
    i$$3++;
    var v355 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v355;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v356 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v356;
  for (;v38;) {
    var v583 = arrayOfPatterns$$2[z$$4];
    var v357 = JAM.call(v583.search, v583, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p15);
    var v36 = v357 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v584 = arrayOfPatterns$$2[z$$4];
    var v358 = moreExpressionCheck(v584);
    var v37 = v358 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v359 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v359;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v685 = getSequenceFromFasta(text$$7);
  var v585 = JAM.call(v685.replace, v685, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v360 = v585.length;
  var v40 = v360 > maxInput;
  if (v40) {
    var v361 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v361 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v362 = text$$8.length;
  var v42 = v362 > maxInput$$1;
  if (v42) {
    var v363 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v363 + " characters.";
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
  var v364 = alignArray.length;
  var v49 = v364 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v365 = alignArray.length;
  var v51 = i$$4 < v365;
  for (;v51;) {
    var v586 = alignArray[i$$4];
    var v366 = JAM.call(v586.search, v586, [/[^\s]+\s/], JAM.policy.p15);
    var v50 = v366 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v367 = alignArray.length;
    v51 = i$$4 < v367;
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
  var v368 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v54 = v368 != -1;
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
  var v369 = sequence$$2.length;
  var v55 = "&gt;results for " + v369;
  var stringToReturn = v55 + " residue sequence ";
  var v370 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p15);
  var v57 = v370 != -1;
  if (v57) {
    var v371 = stringToReturn + '"';
    var v56 = v371 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v372 = stringToReturn + ' starting "';
  var v373 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v372 + v373;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v374 = sequenceOne.length;
  var v59 = "Search results for " + v374;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v375 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p15);
  var v61 = v375 != -1;
  if (v61) {
    var v376 = stringToReturn$$1 + '"';
    var v60 = v376 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v377 = stringToReturn$$1 + ' starting "';
  var v378 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v377 + v378;
  stringToReturn$$1 = v62 + '"\n';
  var v379 = stringToReturn$$1 + "and ";
  var v380 = sequenceTwo.length;
  var v63 = v379 + v380;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v381 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p15);
  var v65 = v381 != -1;
  if (v65) {
    var v382 = stringToReturn$$1 + '"';
    var v64 = v382 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v383 = stringToReturn$$1 + ' starting "';
  var v384 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v66 = v383 + v384;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v385 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v385;
  for (;v70;) {
    var v587 = arrayOfPatterns$$3[j$$2];
    var v386 = JAM.call(v587.match, v587, [/\/.+\//], JAM.policy.p15);
    var v69 = v386 + "gi";
    if (JAM.isEval(eval)) {
      var v887 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v887 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v887;
    j$$2++;
    var v387 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v387;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v388 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v388;
  for (;v74;) {
    var v389 = arrayOfPatterns$$4[j$$3];
    var v72 = JAM.call(v389.match, v389, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v888 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v888;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v889 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v889;
    j$$3++;
    var v390 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v390;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v391 = sequence$$3.length;
  var v75 = "Results for " + v391;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v392 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p15);
  var v77 = v392 != -1;
  if (v77) {
    var v393 = stringToReturn$$2 + '"';
    var v76 = v393 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v394 = stringToReturn$$2 + ' starting "';
  var v395 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v78 = v394 + v395;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v588 = "Results for " + topology;
  var v396 = v588 + " ";
  var v397 = sequence$$4.length;
  var v80 = v396 + v397;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v398 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p15);
  var v82 = v398 != -1;
  if (v82) {
    var v399 = stringToReturn$$3 + '"';
    var v81 = v399 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v400 = stringToReturn$$3 + ' starting "';
  var v401 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v400 + v401;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v402 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v402;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v403 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p15);
  var v87 = v403 != -1;
  if (v87) {
    var v404 = stringToReturn$$4 + '"';
    var v86 = v404 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v405 = stringToReturn$$4 + ' starting "';
  var v406 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v405 + v406;
  stringToReturn$$4 = v88 + '"\n';
  var v407 = stringToReturn$$4 + "and ";
  var v408 = sequenceTwo$$1.length;
  var v89 = v407 + v408;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v409 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p15);
  var v91 = v409 != -1;
  if (v91) {
    var v410 = stringToReturn$$4 + '"';
    var v90 = v410 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v411 = stringToReturn$$4 + ' starting "';
  var v412 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v92 = v411 + v412;
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
    var v413 = Math.random();
    var v414 = components.length;
    var v94 = v413 * v414;
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p15);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p11);
}
function getSequenceFromFasta(sequenceRecord) {
  var v415 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v96 = v415 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v416 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v98 = v416 != -1;
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
  var v862 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p15);
  var v855 = v862 != -1;
  var v864 = !v855;
  if (v864) {
    var v863 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p15);
    v855 = v863 != -1;
  }
  var v846 = v855;
  var v857 = !v846;
  if (v857) {
    var v856 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p15);
    v846 = v856 != -1;
  }
  var v837 = v846;
  var v848 = !v837;
  if (v848) {
    var v847 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p15);
    v837 = v847 != -1;
  }
  var v824 = v837;
  var v839 = !v824;
  if (v839) {
    var v838 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p15);
    v824 = v838 != -1;
  }
  var v806 = v824;
  var v826 = !v806;
  if (v826) {
    var v825 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p15);
    v806 = v825 != -1;
  }
  var v787 = v806;
  var v808 = !v787;
  if (v808) {
    var v807 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p15);
    v787 = v807 != -1;
  }
  var v749 = v787;
  var v789 = !v749;
  if (v789) {
    var v788 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p15);
    v749 = v788 != -1;
  }
  var v686 = v749;
  var v751 = !v686;
  if (v751) {
    var v750 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p15);
    v686 = v750 != -1;
  }
  var v589 = v686;
  var v688 = !v589;
  if (v688) {
    var v687 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p15);
    v589 = v687 != -1;
  }
  var v417 = v589;
  var v591 = !v417;
  if (v591) {
    var v590 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p15);
    v417 = v590 != -1;
  }
  var v99 = v417;
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
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v689 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v592 = v689 + "<head>\n";
  var v418 = v592 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v418 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p17);
  if (isColor) {
    var v106 = outputWindow.document;
    var v877 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v873 = v877 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v869 = v873 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v865 = v869 + "div.info {font-weight: bold}\n";
    var v858 = v865 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v849 = v858 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v840 = v849 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v827 = v840 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v809 = v827 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v790 = v809 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v752 = v790 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v690 = v752 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v593 = v690 + "td.many {color: #000000}\n";
    var v419 = v593 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v419 + "</style>\n";
    JAM.call(v106.write, v106, [v107], JAM.policy.p17);
  } else {
    var v108 = outputWindow.document;
    var v881 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v878 = v881 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v874 = v878 + "div.title {display: none}\n";
    var v870 = v874 + "div.info {font-weight: bold}\n";
    var v866 = v870 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v859 = v866 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v850 = v859 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v841 = v850 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v828 = v841 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v810 = v828 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v791 = v810 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v753 = v791 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v691 = v753 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v594 = v691 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v420 = v594 + "img {display: none}\n";
    var v109 = v420 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p17);
  }
  var v110 = outputWindow.document;
  var v692 = "</head>\n" + '<body class="main">\n';
  var v595 = v692 + '<div class="title">';
  var v421 = v595 + title$$6;
  var v111 = v421 + " results</div>\n";
  JAM.call(v110.write, v110, [v111], JAM.policy.p17);
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return;
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v112 = outputWindow.document;
  var v693 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v596 = v693 + "<head>\n";
  var v422 = v596 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v422 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p17);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v879 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v875 = v879 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v871 = v875 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v867 = v871 + "div.info {font-weight: bold}\n";
    var v860 = v867 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v851 = v860 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v842 = v851 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v829 = v842 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v811 = v829 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v792 = v811 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v754 = v792 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v694 = v754 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v597 = v694 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v423 = v597 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v423 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p17);
  } else {
    var v116 = outputWindow.document;
    var v883 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v882 = v883 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v880 = v882 + "div.title {display: none}\n";
    var v876 = v880 + "div.info {font-weight: bold}\n";
    var v872 = v876 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v868 = v872 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v861 = v868 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v852 = v861 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v843 = v852 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v830 = v843 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v812 = v830 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v793 = v812 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v755 = v793 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v695 = v755 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v598 = v695 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v424 = v598 + "img {display: none}\n";
    var v117 = v424 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p17);
  }
  var v118 = outputWindow.document;
  var v696 = "</head>\n" + '<body class="main">\n';
  var v599 = v696 + '<div class="title">';
  var v425 = v599 + title$$8;
  var v119 = v425 + " results</div>\n";
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
  var v426 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p15);
  var v120 = v426 != -1;
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
  var v427 = testArray[0];
  var v124 = v427 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v428 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v125 = v428 == -1;
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
  var v429 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9);
  var v128 = v429 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v430 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9);
  var v129 = v430 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v431 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p15);
  var v130 = v431 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v756 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p15);
  var v697 = v756 == -1;
  var v758 = !v697;
  if (v758) {
    var v757 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p15);
    v697 = v757 == -1;
  }
  var v600 = v697;
  var v699 = !v600;
  if (v699) {
    var v698 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p15);
    v600 = v698 == -1;
  }
  var v432 = v600;
  var v602 = !v432;
  if (v602) {
    var v601 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p15);
    v432 = v601 == -1;
  }
  var v131 = v432;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v433 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p15);
  var v132 = v433 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v434 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v434 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v435 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p15);
  var v135 = v435 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v436 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p15);
  var v136 = v436 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v759 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p15);
  var v700 = v759 == -1;
  var v761 = !v700;
  if (v761) {
    var v760 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p15);
    v700 = v760 == -1;
  }
  var v603 = v700;
  var v702 = !v603;
  if (v702) {
    var v701 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p15);
    v603 = v701 == -1;
  }
  var v437 = v603;
  var v605 = !v437;
  if (v605) {
    var v604 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p15);
    v437 = v604 == -1;
  }
  var v137 = v437;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v762 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p15);
  var v703 = v762 == -1;
  var v764 = !v703;
  if (v764) {
    var v763 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p15);
    v703 = v763 == -1;
  }
  var v606 = v703;
  var v705 = !v606;
  if (v705) {
    var v704 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p15);
    v606 = v704 == -1;
  }
  var v438 = v606;
  var v608 = !v438;
  if (v608) {
    var v607 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p15);
    v438 = v607 == -1;
  }
  var v138 = v438;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v439 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p15);
  var v139 = v439 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v765 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p15);
  var v706 = v765 == -1;
  var v767 = !v706;
  if (v767) {
    var v766 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p15);
    v706 = v766 == -1;
  }
  var v609 = v706;
  var v708 = !v609;
  if (v708) {
    var v707 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p15);
    v609 = v707 == -1;
  }
  var v440 = v609;
  var v611 = !v440;
  if (v611) {
    var v610 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p15);
    v440 = v610 == -1;
  }
  var v140 = v440;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v441 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p15);
  var v141 = v441 == -1;
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
    var v442 = basePerLine / groupSize;
    var v145 = j$$6 <= v442;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v443 = k + i$$5;
        var v143 = JAM.call(text$$10.charAt, text$$10, [v443], JAM.policy.p17);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v444 = basePerLine / groupSize;
      v145 = j$$6 <= v444;
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
    var v445 = adjustment < 0;
    if (v445) {
      v445 = adjusted >= 0;
    }
    var v149 = v445;
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
    var v446 = basePerLine$$2 / groupSize$$2;
    var v156 = j$$7 <= v446;
    for (;v156;) {
      var v152 = k$$1 < groupSize$$2;
      for (;v152;) {
        var v447 = i$$6 + k$$1;
        var v150 = v447 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v448 = k$$1 + i$$6;
        var v151 = JAM.call(text$$12.charAt, text$$12, [v448], JAM.policy.p17);
        lineOfText$$1 = lineOfText$$1 + v151;
        k$$1 = k$$1 + 1;
        v152 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v154 = numberPosition$$1 == "above";
      if (v154) {
        var v449 = adjustNumbering(i$$6, numberingAdjustment);
        var v153 = rightNum(v449, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v153;
      }
      var v155 = i$$6 >= stopBase$$2;
      if (v155) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v450 = basePerLine$$2 / groupSize$$2;
      v156 = j$$7 <= v450;
    }
    var v179 = numberPosition$$1 == "left";
    if (v179) {
      var v157 = outputWindow.document;
      var v709 = adjustNumbering(lineNum, numberingAdjustment);
      var v612 = rightNum(v709, "", 8, tabIn$$3);
      var v451 = v612 + lineOfText$$1;
      var v158 = v451 + "\n";
      JAM.call(v157.write, v157, [v158], JAM.policy.p17);
      var v162 = strands$$1 == "two";
      if (v162) {
        var v159 = outputWindow.document;
        var v710 = adjustNumbering(lineNum, numberingAdjustment);
        var v613 = rightNum(v710, "", 8, tabIn$$3);
        var v614 = complement(lineOfText$$1);
        var v452 = v613 + v614;
        var v160 = v452 + "\n";
        JAM.call(v159.write, v159, [v160], JAM.policy.p17);
        var v161 = outputWindow.document;
        JAM.call(v161.write, v161, ["\n"], JAM.policy.p11);
      }
    } else {
      var v178 = numberPosition$$1 == "right";
      if (v178) {
        var v163 = outputWindow.document;
        var v615 = adjustNumbering(i$$6, numberingAdjustment);
        var v453 = lineOfText$$1 + v615;
        var v164 = v453 + "\n";
        JAM.call(v163.write, v163, [v164], JAM.policy.p17);
        var v168 = strands$$1 == "two";
        if (v168) {
          var v165 = outputWindow.document;
          var v616 = complement(lineOfText$$1);
          var v617 = adjustNumbering(i$$6, numberingAdjustment);
          var v454 = v616 + v617;
          var v166 = v454 + "\n";
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
            var v455 = complement(lineOfText$$1);
            var v174 = v455 + "\n";
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
    var v456 = basePerLine$$3 / groupSize$$3;
    var v187 = j$$8 <= v456;
    for (;v187;) {
      var v183 = k$$2 < groupSize$$3;
      for (;v183;) {
        var v457 = i$$7 + k$$2;
        var v181 = v457 >= stopBase$$3;
        if (v181) {
          break;
        }
        var v458 = k$$2 + i$$7;
        var v182 = JAM.call(text$$13.charAt, text$$13, [v458], JAM.policy.p17);
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
      var v459 = basePerLine$$3 / groupSize$$3;
      v187 = j$$8 <= v459;
    }
    var v198 = numberPosition$$2 == "left";
    if (v198) {
      var v188 = outputWindow.document;
      var v618 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v460 = v618 + lineOfText$$2;
      var v189 = v460 + "\n";
      JAM.call(v188.write, v188, [v189], JAM.policy.p17);
    } else {
      var v197 = numberPosition$$2 == "right";
      if (v197) {
        var v190 = outputWindow.document;
        var v461 = lineOfText$$2 + i$$7;
        var v191 = v461 + "\n";
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
  var v711 = sequence$$13.length;
  var v619 = v711 <= firstIndexToMutate;
  var v712 = !v619;
  if (v712) {
    v619 = lastIndexToMutate < 0;
  }
  var v462 = v619;
  var v620 = !v462;
  if (v620) {
    v462 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v200 = v462;
  if (v200) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v208 = i$$8 < numMut;
  for (;v208;) {
    maxNum = sequence$$13.length;
    var v463 = Math.random();
    var v201 = v463 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v201], JAM.policy.p15);
    var v464 = randNum < firstIndexToMutate;
    var v621 = !v464;
    if (v621) {
      v464 = randNum > lastIndexToMutate;
    }
    var v202 = v464;
    if (v202) {
      numMut++;
      i$$8++;
      v208 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p15);
    needNewChar = true;
    for (;needNewChar;) {
      var v465 = Math.random();
      var v466 = components$$1.length;
      var v203 = v465 * v466;
      componentsIndex = JAM.call(Math.round, Math, [v203], JAM.policy.p15);
      var v467 = components$$1.length;
      var v204 = componentsIndex == v467;
      if (v204) {
        componentsIndex = 0;
      }
      var v468 = components$$1[componentsIndex];
      var v205 = v468 != currentChar;
      if (v205) {
        needNewChar = false;
      }
    }
    var v469 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v470 = components$$1[componentsIndex];
    var v206 = v469 + v470;
    var v471 = randNum + 1;
    var v472 = sequence$$13.length;
    var v207 = JAM.call(sequence$$13.substring, sequence$$13, [v471, v472], JAM.policy.p27);
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
    var v473 = Math.random();
    var v474 = components$$2.length;
    var v211 = v473 * v474;
    tempNum$$1 = JAM.call(Math.floor, Math, [v211], JAM.policy.p15);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v475 = sequence$$14.length;
    var v214 = v475 == 60;
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
    var v713 = sequence$$15.length;
    var v622 = v713 - lookAhead;
    var v623 = sequence$$15.length;
    var v476 = JAM.call(sequence$$15.substring, sequence$$15, [v622, v623], JAM.policy.p27);
    var v219 = v476 + sequence$$15;
    var v220 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v219 + v220;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v222 = outputWindow.document;
  JAM.call(v222.write, v222, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v223 = outputWindow.document;
  var v714 = '<tr><td class="title" width="200px">' + "Site:";
  var v624 = v714 + '</td><td class="title">';
  var v477 = v624 + "Positions:";
  var v224 = v477 + "</td></tr>\n";
  JAM.call(v223.write, v223, [v224], JAM.policy.p17);
  var i$$9 = 0;
  var v478 = arrayOfItems.length;
  var v240 = i$$9 < v478;
  for (;v240;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v479 = arrayOfItems[i$$9];
    var v225 = JAM.call(v479.match, v479, [/\/.+\//], JAM.policy.p15);
    matchExp = v225 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v715 = arrayOfItems[i$$9];
    var v625 = JAM.call(v715.match, v715, [/\)\D*\d+/], JAM.policy.p15);
    var v480 = v625.toString();
    var v226 = JAM.call(v480.replace, v480, [/\)\D*/, ""], JAM.policy.p16);
    cutDistance = parseFloat(v226);
    var v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v232;) {
      var v227 = matchExp.lastIndex;
      matchPosition = v227 - cutDistance;
      var v481 = matchPosition >= lowerLimit;
      if (v481) {
        v481 = matchPosition < upperLimit;
      }
      var v230 = v481;
      if (v230) {
        timesFound++;
        var v228 = tempString$$1 + ", ";
        var v482 = matchPosition - shiftValue;
        var v229 = v482 + 1;
        tempString$$1 = v228 + v229;
      }
      var v483 = matchExp.lastIndex;
      var v626 = RegExp.lastMatch;
      var v484 = v626.length;
      var v231 = v483 - v484;
      matchExp.lastIndex = v231 + 1;
      v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v485 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p15);
    var v233 = v485 != -1;
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
    var v831 = '<tr><td class="' + backGroundClass;
    var v813 = v831 + '">';
    var v853 = arrayOfItems[i$$9];
    var v844 = JAM.call(v853.match, v853, [/\([^\(]+\)/], JAM.policy.p15);
    var v832 = v844.toString();
    var v814 = JAM.call(v832.replace, v832, [/\(|\)/g, ""], JAM.policy.p16);
    var v794 = v813 + v814;
    var v768 = v794 + '</td><td class="';
    var v716 = v768 + backGroundClass;
    var v627 = v716 + '">';
    var v486 = v627 + tempString$$1;
    var v239 = v486 + "</td></tr>\n";
    JAM.call(v238.write, v238, [v239], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v487 = arrayOfItems.length;
    v240 = i$$9 < v487;
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
  var v795 = '<tr><td class="title">' + "Pattern:";
  var v769 = v795 + '</td><td class="title">';
  var v717 = v769 + "Times found:";
  var v628 = v717 + '</td><td class="title">';
  var v488 = v628 + "Percentage:";
  var v244 = v488 + "</td></tr>\n";
  JAM.call(v243.write, v243, [v244], JAM.policy.p17);
  var i$$10 = 0;
  var v489 = arrayOfItems$$1.length;
  var v253 = i$$10 < v489;
  for (;v253;) {
    var tempNumber = 0;
    var v490 = arrayOfItems$$1[i$$10];
    var v245 = JAM.call(v490.match, v490, [/\/[^\/]+\//], JAM.policy.p15);
    var matchExp$$1 = v245 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v491 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v247 = v491 != -1;
    if (v247) {
      var v246 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v246.length;
    }
    var percentage = 0;
    var v629 = originalLength + 1;
    var v770 = arrayOfItems$$1[i$$10];
    var v718 = JAM.call(v770.match, v770, [/\d+/], JAM.policy.p15);
    var v630 = parseFloat(v718);
    var v492 = v629 - v630;
    var v250 = v492 > 0;
    if (v250) {
      var v248 = 100 * tempNumber;
      var v493 = originalLength + 1;
      var v719 = arrayOfItems$$1[i$$10];
      var v631 = JAM.call(v719.match, v719, [/\d+/], JAM.policy.p15);
      var v494 = parseFloat(v631);
      var v249 = v493 - v494;
      percentage = v248 / v249;
    }
    var v251 = outputWindow.document;
    var v854 = arrayOfItems$$1[i$$10];
    var v845 = JAM.call(v854.match, v854, [/\([^\(]+\)\b/], JAM.policy.p15);
    var v833 = v845.toString();
    var v815 = JAM.call(v833.replace, v833, [/\(|\)/g, ""], JAM.policy.p16);
    var v796 = "<tr><td>" + v815;
    var v771 = v796 + "</td><td>";
    var v720 = v771 + tempNumber;
    var v632 = v720 + "</td><td>";
    var v633 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9);
    var v495 = v632 + v633;
    var v252 = v495 + "</td></tr>\n";
    JAM.call(v251.write, v251, [v252], JAM.policy.p17);
    i$$10++;
    var v496 = arrayOfItems$$1.length;
    v253 = i$$10 < v496;
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
  var v497 = sequence$$17.length;
  var v261 = v497 > 0;
  for (;v261;) {
    maxNum$$1 = sequence$$17.length;
    var v498 = Math.random();
    var v255 = v498 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v255], JAM.policy.p15);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p15);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v256 = randNum$$1 + 1;
    var v257 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v256, v257], JAM.policy.p16);
    sequence$$17 = tempString1 + tempString2;
    var v499 = tempSeq.length;
    var v260 = v499 == 60;
    if (v260) {
      var v258 = outputWindow.document;
      var v259 = tempSeq + "\n";
      JAM.call(v258.write, v258, [v259], JAM.policy.p17);
      tempSeq = "";
    }
    var v500 = sequence$$17.length;
    v261 = v500 > 0;
  }
  var v262 = outputWindow.document;
  var v263 = tempSeq + "\n";
  JAM.call(v262.write, v262, [v263], JAM.policy.p17);
  return true;
}
function colorAlignCons() {
  var theDocument = document;
  var maxInput$$3 = 2E4;
  var v501 = testScript();
  var v264 = v501 == false;
  if (v264) {
    return;
  }
  var theAlignment = "";
  var alignArray$$1 = new Array;
  var groupString = "";
  var arrayOfGroups = new Array;
  var titleArray = new Array;
  var sequenceArray$$1 = new Array;
  var longestTitle;
  var v816 = theDocument.forms;
  var v797 = v816[0];
  var v772 = v797.elements;
  var v721 = v772[0];
  var v634 = checkFormElement(v721);
  var v502 = v634 == false;
  var v636 = !v502;
  if (v636) {
    var v834 = theDocument.forms;
    var v817 = v834[0];
    var v798 = v817.elements;
    var v773 = v798[0];
    var v722 = v773.value;
    var v635 = checkTextLength(v722, maxInput$$3);
    v502 = v635 == false;
  }
  var v265 = v502;
  if (v265) {
    return;
  }
  var v774 = theDocument.forms;
  var v723 = v774[0];
  var v637 = v723.elements;
  var v503 = v637[0];
  var v266 = v503.value;
  theAlignment = "X" + v266;
  alignArray$$1 = JAM.call(theAlignment.split, theAlignment, [/[>%#]/], JAM.policy.p15);
  var v504 = earlyCheckAlign(alignArray$$1);
  var v267 = v504 == false;
  if (v267) {
    return;
  }
  var i$$11 = 1;
  var v505 = alignArray$$1.length;
  var v277 = i$$11 < v505;
  for (;v277;) {
    var v268 = i$$11 - 1;
    var v506 = alignArray$$1[i$$11];
    var v890 = JAM.call(v506.match, v506, [/[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
    titleArray[v268] = v890;
    var v269 = i$$11 - 1;
    var v775 = i$$11 - 1;
    var v724 = titleArray[v775];
    var v638 = v724.toString();
    var v507 = filterFastaTitle(v638);
    var v891 = JAM.call(v507.replace, v507, [/[\f\n\r]/g, ""], JAM.policy.p16);
    titleArray[v269] = v891;
    var v270 = i$$11 - 1;
    var v639 = i$$11 - 1;
    var v508 = titleArray[v639];
    var v892 = JAM.call(v508.substring, v508, [0, 20], JAM.policy.p13);
    titleArray[v270] = v892;
    var v274 = i$$11 == 1;
    if (v274) {
      var v509 = i$$11 - 1;
      var v271 = titleArray[v509];
      longestTitle = v271.length;
    } else {
      var v725 = i$$11 - 1;
      var v640 = titleArray[v725];
      var v510 = v640.length;
      var v273 = v510 > longestTitle;
      if (v273) {
        var v511 = i$$11 - 1;
        var v272 = titleArray[v511];
        longestTitle = v272.length;
      }
    }
    var v275 = i$$11 - 1;
    var v512 = alignArray$$1[i$$11];
    var v893 = JAM.call(v512.replace, v512, [/[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
    sequenceArray$$1[v275] = v893;
    var v276 = i$$11 - 1;
    var v641 = i$$11 - 1;
    var v513 = sequenceArray$$1[v641];
    var v894 = filterAlignSeq(v513);
    sequenceArray$$1[v276] = v894;
    i$$11++;
    var v514 = alignArray$$1.length;
    v277 = i$$11 < v514;
  }
  var spaceString = "                    ";
  i$$11 = 0;
  var v515 = titleArray.length;
  var v281 = i$$11 < v515;
  for (;v281;) {
    var v642 = titleArray[i$$11];
    var v516 = v642.length;
    var v280 = v516 < longestTitle;
    if (v280) {
      var v278 = titleArray[i$$11];
      var v726 = titleArray[i$$11];
      var v643 = v726.length;
      var v517 = longestTitle - v643;
      var v279 = JAM.call(spaceString.substring, spaceString, [0, v517], JAM.policy.p13);
      titleArray[i$$11] = v278 + v279;
    }
    i$$11++;
    var v518 = titleArray.length;
    v281 = i$$11 < v518;
  }
  var v519 = checkAlign(titleArray, sequenceArray$$1);
  var v282 = v519 == false;
  if (v282) {
    return;
  }
  var v799 = theDocument.forms;
  var v776 = v799[0];
  var v727 = v776.elements;
  var v644 = v727[7];
  var v520 = v644.value;
  var v283 = JAM.call(v520.replace, v520, [/\s/g, ""], JAM.policy.p16);
  groupString = v283.toUpperCase();
  arrayOfGroups = JAM.call(groupString.split, groupString, [/,/], JAM.policy.p15);
  var v521 = checkGroupInput(arrayOfGroups);
  var v284 = v521 == false;
  if (v284) {
    return;
  }
  var isBackground$$1;
  var v835 = theDocument.forms;
  var v818 = v835[0];
  var v800 = v818.elements;
  var v777 = v800[6];
  var v728 = v777.options;
  var v836 = theDocument.forms;
  var v819 = v836[0];
  var v801 = v819.elements;
  var v778 = v801[6];
  var v729 = v778.selectedIndex;
  var v645 = v728[v729];
  var v522 = v645.value;
  var v285 = v522 == "background";
  if (v285) {
    isBackground$$1 = true;
  } else {
    isBackground$$1 = false;
  }
  _openWindowAlign("Color Align Conservation", isBackground$$1);
  openPre();
  var v820 = theDocument.forms;
  var v802 = v820[0];
  var v779 = v802.elements;
  var v730 = v779[4];
  var v646 = v730.options;
  var v821 = theDocument.forms;
  var v803 = v821[0];
  var v780 = v803.elements;
  var v731 = v780[4];
  var v647 = v731.selectedIndex;
  var v523 = v646[v647];
  var v286 = v523.value;
  var v822 = theDocument.forms;
  var v804 = v822[0];
  var v781 = v804.elements;
  var v732 = v781[5];
  var v648 = v732.options;
  var v823 = theDocument.forms;
  var v805 = v823[0];
  var v782 = v805.elements;
  var v733 = v782[5];
  var v649 = v733.selectedIndex;
  var v524 = v648[v649];
  var v287 = v524.value;
  var v783 = theDocument.forms;
  var v734 = v783[0];
  var v650 = v734.elements;
  var v525 = v650[8];
  var v288 = v525.value;
  colorAlign(titleArray, sequenceArray$$1, v286, v287, arrayOfGroups, v288, longestTitle);
  closePre();
  closeWindow();
  return;
}
function colorAlign(arrayOfTitles$$1, arrayOfSequences$$1, basePerLine$$4, consensus, arrayOfGroups$$1, definedStarts, longestTitle$$1) {
  var v289 = arrayOfSequences$$1.length;
  var positions = new Array(v289);
  var v526 = JAM.call(definedStarts.search, definedStarts, [/\S/], JAM.policy.p15);
  var v290 = v526 == -1;
  if (v290) {
    definedStarts = "0,0";
  }
  var definedStartsArray = JAM.call(definedStarts.split, definedStarts, [/,/], JAM.policy.p15);
  var i$$12 = 0;
  var v527 = positions.length;
  var v294 = i$$12 < v527;
  for (;v294;) {
    var v528 = definedStartsArray.length;
    var v293 = i$$12 >= v528;
    if (v293) {
      positions[i$$12] = 0;
    } else {
      var v651 = definedStartsArray[i$$12];
      var v529 = JAM.call(v651.search, v651, [/\d/], JAM.policy.p15);
      var v292 = v529 != -1;
      if (v292) {
        var v530 = definedStartsArray[i$$12];
        var v291 = JAM.call(v530.replace, v530, [/[^\d\-]/g, ""], JAM.policy.p16);
        var v895 = parseInt(v291);
        positions[i$$12] = v895;
      } else {
        alert("An incorrect starting position was encountered. It was set to 0.");
        outputWindow.focus();
        positions[i$$12] = 0;
      }
    }
    i$$12++;
    var v531 = positions.length;
    v294 = i$$12 < v531;
  }
  var totalBasesShown = 0;
  var v295 = parseInt(consensus);
  consensus = v295 / 100;
  basePerLine$$4 = parseInt(basePerLine$$4);
  var columnCount = 0;
  var arrayOfColumns = new Array(basePerLine$$4);
  i$$12 = 0;
  var v532 = arrayOfColumns.length;
  var v297 = i$$12 < v532;
  for (;v297;) {
    var v296 = arrayOfSequences$$1.length;
    var v896 = new Array(v296);
    arrayOfColumns[i$$12] = v896;
    i$$12++;
    var v533 = arrayOfColumns.length;
    v297 = i$$12 < v533;
  }
  i$$12 = 0;
  var columnSeq;
  var re$$3;
  var result;
  var output = "";
  var v652 = arrayOfSequences$$1[0];
  var v534 = v652.length;
  var v322 = totalBasesShown < v534;
  for (;v322;) {
    var jj = 0;
    var v535 = arrayOfSequences$$1.length;
    var v320 = jj < v535;
    for (;v320;) {
      var v536 = arrayOfTitles$$1[jj];
      var v298 = output + v536;
      output = v298 + " ";
      var v653 = totalBasesShown + basePerLine$$4;
      var v537 = i$$12 < v653;
      if (v537) {
        var v735 = arrayOfSequences$$1[0];
        var v654 = v735.length;
        v537 = i$$12 < v654;
      }
      var v315 = v537;
      for (;v315;) {
        var v301 = jj == 0;
        if (v301) {
          var k$$3 = 0;
          var v538 = arrayOfSequences$$1.length;
          var v300 = k$$3 < v538;
          for (;v300;) {
            var v299 = arrayOfColumns[columnCount];
            var v539 = arrayOfSequences$$1[k$$3];
            var v897 = JAM.call(v539.charAt, v539, [i$$12], JAM.policy.p17);
            v299[k$$3] = v897;
            k$$3++;
            var v540 = arrayOfSequences$$1.length;
            v300 = k$$3 < v540;
          }
        }
        var v736 = arrayOfSequences$$1[jj];
        var v655 = JAM.call(v736.charAt, v736, [i$$12], JAM.policy.p17);
        var v541 = v655 == ".";
        var v657 = !v541;
        if (v657) {
          var v737 = arrayOfSequences$$1[jj];
          var v656 = JAM.call(v737.charAt, v737, [i$$12], JAM.policy.p17);
          v541 = v656 == "-";
        }
        var v303 = v541;
        if (v303) {
          var v542 = output + '<span class="diff">';
          var v658 = arrayOfSequences$$1[jj];
          var v543 = JAM.call(v658.charAt, v658, [i$$12], JAM.policy.p17);
          var v302 = v542 + v543;
          output = v302 + "</span>";
          i$$12 = i$$12 + 1;
          columnCount++;
          var v659 = totalBasesShown + basePerLine$$4;
          var v544 = i$$12 < v659;
          if (v544) {
            var v738 = arrayOfSequences$$1[0];
            var v660 = v738.length;
            v544 = i$$12 < v660;
          }
          v315 = v544;
          continue;
        }
        var v304 = arrayOfColumns[columnCount];
        columnSeq = JAM.call(v304.join, v304, [","], JAM.policy.p11);
        var v545 = arrayOfSequences$$1[jj];
        var v305 = JAM.call(v545.charAt, v545, [i$$12], JAM.policy.p17);
        re$$3 = new RegExp(v305, "gi");
        var v739 = JAM.call(columnSeq.match, columnSeq, [re$$3], JAM.policy.p17);
        var v661 = v739.length;
        var v662 = arrayOfSequences$$1.length;
        var v546 = v661 / v662;
        var v307 = v546 >= consensus;
        if (v307) {
          var v547 = output + '<span class="ident">';
          var v663 = arrayOfSequences$$1[jj];
          var v548 = JAM.call(v663.charAt, v663, [i$$12], JAM.policy.p17);
          var v306 = v547 + v548;
          output = v306 + "</span>";
          i$$12 = i$$12 + 1;
          columnCount++;
          var v664 = totalBasesShown + basePerLine$$4;
          var v549 = i$$12 < v664;
          if (v549) {
            var v740 = arrayOfSequences$$1[0];
            var v665 = v740.length;
            v549 = i$$12 < v665;
          }
          v315 = v549;
          continue;
        }
        result = 1;
        var m = 0;
        var v550 = arrayOfGroups$$1.length;
        var v311 = m < v550;
        for (;v311;) {
          var v666 = arrayOfGroups$$1[m];
          var v551 = JAM.call(v666.search, v666, [re$$3], JAM.policy.p17);
          var v310 = v551 != -1;
          if (v310) {
            var v667 = arrayOfGroups$$1[m];
            var v552 = "[" + v667;
            var v308 = v552 + "]";
            re$$3 = new RegExp(v308, "gi");
            var v309 = JAM.call(columnSeq.match, columnSeq, [re$$3], JAM.policy.p17);
            result = v309.length;
            break;
          }
          m++;
          var v553 = arrayOfGroups$$1.length;
          v311 = m < v553;
        }
        var v668 = arrayOfSequences$$1.length;
        var v554 = result / v668;
        var v313 = v554 >= consensus;
        if (v313) {
          var v555 = output + '<span class="sim">';
          var v669 = arrayOfSequences$$1[jj];
          var v556 = JAM.call(v669.charAt, v669, [i$$12], JAM.policy.p17);
          var v312 = v555 + v556;
          output = v312 + "</span>";
          i$$12 = i$$12 + 1;
          columnCount++;
          var v670 = totalBasesShown + basePerLine$$4;
          var v557 = i$$12 < v670;
          if (v557) {
            var v741 = arrayOfSequences$$1[0];
            var v671 = v741.length;
            v557 = i$$12 < v671;
          }
          v315 = v557;
          continue;
        }
        var v558 = output + '<span class="diff">';
        var v672 = arrayOfSequences$$1[jj];
        var v559 = JAM.call(v672.charAt, v672, [i$$12], JAM.policy.p17);
        var v314 = v558 + v559;
        output = v314 + "</span>";
        i$$12 = i$$12 + 1;
        columnCount++;
        var v673 = totalBasesShown + basePerLine$$4;
        var v560 = i$$12 < v673;
        if (v560) {
          var v742 = arrayOfSequences$$1[0];
          var v674 = v742.length;
          v560 = i$$12 < v674;
        }
        v315 = v560;
      }
      var v316 = positions[jj];
      var v743 = arrayOfSequences$$1[jj];
      var v675 = JAM.call(v743.substring, v743, [totalBasesShown, i$$12], JAM.policy.p27);
      var v561 = JAM.call(v675.replace, v675, [/\.|\-/g, ""], JAM.policy.p16);
      var v317 = v561.length;
      positions[jj] = v316 + v317;
      var v562 = output + " ";
      var v563 = positions[jj];
      var v318 = v562 + v563;
      output = v318 + "\n";
      var v319 = outputWindow.document;
      JAM.call(v319.write, v319, [output], JAM.policy.p17);
      output = "";
      i$$12 = totalBasesShown;
      columnCount = 0;
      jj++;
      var v564 = arrayOfSequences$$1.length;
      v320 = jj < v564;
    }
    totalBasesShown = totalBasesShown + basePerLine$$4;
    i$$12 = totalBasesShown;
    var v321 = outputWindow.document;
    JAM.call(v321.write, v321, ["\n"], JAM.policy.p11);
    var v676 = arrayOfSequences$$1[0];
    var v565 = v676.length;
    v322 = totalBasesShown < v565;
  }
  return;
}
JAM.set(document, "onload", v2);
var v323 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11);
JAM.set(v323, "onclick", v3);
var v324 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11);
JAM.set(v324, "onclick", v4)
