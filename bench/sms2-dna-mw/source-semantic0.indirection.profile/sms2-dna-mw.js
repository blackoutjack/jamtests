
JAM.startProfile('load');
function v4() {
  var v594 = document.forms;
  var v508 = v594[0];
  var v313 = v508.elements;
  var v5 = v313[0];
  v5.value = " ";
  var v595 = document.forms;
  var v509 = v595[0];
  var v314 = v509.elements;
  var v6 = v314[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    dnaMw(document);
  } catch (e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7);
  }
  return;
}
function v2() {
  var v315 = document.main_form;
  var v8 = v315.main_submit;
  v8.focus();
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
  var v9 = arrayOfSequences[0];
  var lengthOfAlign = v9.length;
  var v316 = arrayOfSequences.length;
  var v10 = v316 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v317 = arrayOfTitles.length;
  var v12 = i$$1 < v317;
  for (;v12;) {
    var v648 = arrayOfTitles[i$$1];
    var v596 = JAM.call(v648.search, v648, [/\S/], JAM.policy.p18);
    var v510 = v596 == -1;
    var v598 = !v510;
    if (v598) {
      var v649 = arrayOfSequences[i$$1];
      var v597 = JAM.call(v649.search, v649, [/\S/], JAM.policy.p18);
      v510 = v597 == -1;
    }
    var v318 = v510;
    var v512 = !v318;
    if (v512) {
      var v599 = arrayOfSequences[i$$1];
      var v511 = v599.length;
      v318 = v511 != lengthOfAlign;
    }
    var v11 = v318;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v319 = arrayOfTitles.length;
    v12 = i$$1 < v319;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v683 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p18);
  var v650 = v683 == -1;
  var v685 = !v650;
  if (v685) {
    var v684 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p18);
    v650 = v684 == -1;
  }
  var v600 = v650;
  var v652 = !v600;
  if (v652) {
    var v651 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p18);
    v600 = v651 == -1;
  }
  var v513 = v600;
  var v602 = !v513;
  if (v602) {
    var v601 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p18);
    v513 = v601 == -1;
  }
  var v320 = v513;
  var v515 = !v320;
  if (v515) {
    var v514 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p18);
    v320 = v514 == -1;
  }
  var v13 = v320;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v516 = formElement.value;
  var v321 = JAM.call(v516.search, v516, [/\S/], JAM.policy.p18);
  var v14 = v321 == -1;
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
  var v322 = arrayOfPatterns.length;
  var v17 = z$$2 < v322;
  for (;v17;) {
    var v517 = arrayOfPatterns[z$$2];
    var v323 = JAM.call(v517.search, v517, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p18);
    var v15 = v323 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v518 = arrayOfPatterns[z$$2];
    var v324 = moreExpressionCheck(v518);
    var v16 = v324 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v325 = arrayOfPatterns.length;
    v17 = z$$2 < v325;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v326 = arrayOfPatterns.length;
  var v23 = j < v326;
  for (;v23;) {
    var v519 = arrayOfPatterns[j];
    var v327 = JAM.call(v519.match, v519, [/\/.+\//], JAM.policy.p18);
    var v20 = v327 + "gi";
    if (JAM.isEval(eval)) {
      var v776 = eval("introspect(JAM.policy.pFull) { " + v20 + " }")
    } else {
      var v776 = JAM.call(eval, null, [v20])
    }
    geneticCodeMatchExp[j] = v776;
    var v328 = arrayOfPatterns[j];
    var v21 = JAM.call(v328.match, v328, [/=[a-zA-Z\*]/], JAM.policy.p18);
    var v777 = v21.toString();
    geneticCodeMatchResult[j] = v777;
    var v22 = geneticCodeMatchResult[j];
    var v778 = JAM.call(v22.replace, v22, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v778;
    j++;
    var v329 = arrayOfPatterns.length;
    v23 = j < v329;
  }
  var i$$2 = 0;
  var v520 = testSequence.length;
  var v330 = v520 - 3;
  var v30 = i$$2 <= v330;
  for (;v30;) {
    var v24 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v24], JAM.policy.p15);
    j = 0;
    var v331 = geneticCodeMatchExp.length;
    var v28 = j < v331;
    for (;v28;) {
      var v521 = geneticCodeMatchExp[j];
      var v332 = JAM.call(codon.search, codon, [v521], JAM.policy.p16);
      var v27 = v332 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v333 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v333 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v334 = geneticCodeMatchExp.length;
      v28 = j < v334;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v522 = testSequence.length;
    var v335 = v522 - 3;
    v30 = i$$2 <= v335;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v336 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v336;
  for (;v32;) {
    var v523 = arrayOfPatterns$$1[z$$3];
    var v337 = JAM.call(v523.search, v523, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p18);
    var v31 = v337 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v338 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v338;
  }
  var i$$3 = 0;
  var v339 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v339;
  for (;v36;) {
    var v524 = arrayOfPatterns$$1[i$$3];
    var v340 = "[" + v524;
    var v33 = v340 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v341 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v341;
    for (;v35;) {
      var v525 = arrayOfPatterns$$1[j$$1];
      var v342 = JAM.call(v525.search, v525, [re], JAM.policy.p16);
      var v34 = v342 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v343 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v343;
    }
    i$$3++;
    var v344 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v344;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v345 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v345;
  for (;v39;) {
    var v526 = arrayOfPatterns$$2[z$$4];
    var v346 = JAM.call(v526.search, v526, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p18);
    var v37 = v346 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v527 = arrayOfPatterns$$2[z$$4];
    var v347 = moreExpressionCheck(v527);
    var v38 = v347 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v348 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v348;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v603 = getSequenceFromFasta(text$$7);
  var v528 = JAM.call(v603.replace, v603, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v349 = v528.length;
  var v41 = v349 > maxInput;
  if (v41) {
    var v350 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v350 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v351 = text$$8.length;
  var v43 = v351 > maxInput$$1;
  if (v43) {
    var v352 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v352 + " characters.";
    alert(v42);
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
  var v44 = outputWindow.document;
  JAM.call(v44.write, v44, ["</form>"], JAM.policy.p9);
  return true;
}
function closePre() {
  var v45 = outputWindow.document;
  JAM.call(v45.write, v45, ["</div>"], JAM.policy.p9);
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</pre>\n"], JAM.policy.p9);
  return;
}
function closeTextArea() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</textarea>"], JAM.policy.p9);
  return true;
}
function closeWindow() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</body>\n</html>\n"], JAM.policy.p9);
  outputWindow.status = "Done.";
  var v49 = outputWindow.document;
  v49.close();
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
  var v353 = alignArray.length;
  var v50 = v353 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v354 = alignArray.length;
  var v52 = i$$4 < v354;
  for (;v52;) {
    var v529 = alignArray[i$$4];
    var v355 = JAM.call(v529.search, v529, [/[^\s]+\s/], JAM.policy.p18);
    var v51 = v355 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v356 = alignArray.length;
    v52 = i$$4 < v356;
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
  var v357 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p18);
  var v55 = v357 != -1;
  if (v55) {
    var v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p16);
    for (;v54;) {
      var v53 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v53], JAM.policy.p16);
      v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p16);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v358 = sequence$$2.length;
  var v56 = "&gt;results for " + v358;
  var stringToReturn = v56 + " residue sequence ";
  var v359 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p18);
  var v58 = v359 != -1;
  if (v58) {
    var v360 = stringToReturn + '"';
    var v57 = v360 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v361 = stringToReturn + ' starting "';
  var v362 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v59 = v361 + v362;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v363 = sequenceOne.length;
  var v60 = "Search results for " + v363;
  var stringToReturn$$1 = v60 + " residue sequence ";
  var v364 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p18);
  var v62 = v364 != -1;
  if (v62) {
    var v365 = stringToReturn$$1 + '"';
    var v61 = v365 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v366 = stringToReturn$$1 + ' starting "';
  var v367 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v63 = v366 + v367;
  stringToReturn$$1 = v63 + '"\n';
  var v368 = stringToReturn$$1 + "and ";
  var v369 = sequenceTwo.length;
  var v64 = v368 + v369;
  stringToReturn$$1 = v64 + " residue sequence ";
  var v370 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p18);
  var v66 = v370 != -1;
  if (v66) {
    var v371 = stringToReturn$$1 + '"';
    var v65 = v371 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v372 = stringToReturn$$1 + ' starting "';
  var v373 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v67 = v372 + v373;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v374 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v374;
  for (;v71;) {
    var v530 = arrayOfPatterns$$3[j$$2];
    var v375 = JAM.call(v530.match, v530, [/\/.+\//], JAM.policy.p18);
    var v70 = v375 + "gi";
    if (JAM.isEval(eval)) {
      var v779 = eval("introspect(JAM.policy.pFull) { " + v70 + " }")
    } else {
      var v779 = JAM.call(eval, null, [v70])
    }
    geneticCodeMatchExp$$1[j$$2] = v779;
    j$$2++;
    var v376 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v376;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v377 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v377;
  for (;v75;) {
    var v378 = arrayOfPatterns$$4[j$$3];
    var v73 = JAM.call(v378.match, v378, [/=[a-zA-Z\*]/], JAM.policy.p18);
    var v780 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v780;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v781 = JAM.call(v74.replace, v74, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v781;
    j$$3++;
    var v379 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v379;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v380 = sequence$$3.length;
  var v76 = "Results for " + v380;
  var stringToReturn$$2 = v76 + " residue sequence ";
  var v381 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p18);
  var v78 = v381 != -1;
  if (v78) {
    var v382 = stringToReturn$$2 + '"';
    var v77 = v382 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v383 = stringToReturn$$2 + ' starting "';
  var v384 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v79 = v383 + v384;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v531 = "Results for " + topology;
  var v385 = v531 + " ";
  var v386 = sequence$$4.length;
  var v81 = v385 + v386;
  var stringToReturn$$3 = v81 + " residue sequence ";
  var v387 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p18);
  var v83 = v387 != -1;
  if (v83) {
    var v388 = stringToReturn$$3 + '"';
    var v82 = v388 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v389 = stringToReturn$$3 + ' starting "';
  var v390 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v84 = v389 + v390;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v391 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v391;
  var stringToReturn$$4 = v86 + " residue sequence ";
  var v392 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p18);
  var v88 = v392 != -1;
  if (v88) {
    var v393 = stringToReturn$$4 + '"';
    var v87 = v393 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v394 = stringToReturn$$4 + ' starting "';
  var v395 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v89 = v394 + v395;
  stringToReturn$$4 = v89 + '"\n';
  var v396 = stringToReturn$$4 + "and ";
  var v397 = sequenceTwo$$1.length;
  var v90 = v396 + v397;
  stringToReturn$$4 = v90 + " residue sequence ";
  var v398 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p18);
  var v92 = v398 != -1;
  if (v92) {
    var v399 = stringToReturn$$4 + '"';
    var v91 = v399 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v400 = stringToReturn$$4 + ' starting "';
  var v401 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v93 = v400 + v401;
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
    var v402 = Math.random();
    var v403 = components.length;
    var v95 = v402 * v403;
    tempNum = JAM.call(Math.floor, Math, [v95], JAM.policy.p18);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p16);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p9);
}
function getSequenceFromFasta(sequenceRecord) {
  var v404 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p18);
  var v97 = v404 != -1;
  if (v97) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v405 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p18);
  var v99 = v405 != -1;
  if (v99) {
    var v98 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
    fastaTitle = v98.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p15);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p15);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v754 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p18);
  var v747 = v754 != -1;
  var v756 = !v747;
  if (v756) {
    var v755 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p18);
    v747 = v755 != -1;
  }
  var v738 = v747;
  var v749 = !v738;
  if (v749) {
    var v748 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p18);
    v738 = v748 != -1;
  }
  var v729 = v738;
  var v740 = !v729;
  if (v740) {
    var v739 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p18);
    v729 = v739 != -1;
  }
  var v718 = v729;
  var v731 = !v718;
  if (v731) {
    var v730 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p18);
    v718 = v730 != -1;
  }
  var v702 = v718;
  var v720 = !v702;
  if (v720) {
    var v719 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p18);
    v702 = v719 != -1;
  }
  var v686 = v702;
  var v704 = !v686;
  if (v704) {
    var v703 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p18);
    v686 = v703 != -1;
  }
  var v653 = v686;
  var v688 = !v653;
  if (v688) {
    var v687 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p18);
    v653 = v687 != -1;
  }
  var v604 = v653;
  var v655 = !v604;
  if (v655) {
    var v654 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p18);
    v604 = v654 != -1;
  }
  var v532 = v604;
  var v606 = !v532;
  if (v606) {
    var v605 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p18);
    v532 = v605 != -1;
  }
  var v406 = v532;
  var v534 = !v406;
  if (v534) {
    var v533 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p18);
    v406 = v533 != -1;
  }
  var v100 = v406;
  if (v100) {
    return false;
  }
  return true;
}
function openForm() {
  var v101 = outputWindow.document;
  JAM.call(v101.write, v101, ['<form action="">\n'], JAM.policy.p9);
  return true;
}
function openPre() {
  var v102 = outputWindow.document;
  JAM.call(v102.write, v102, ["<pre>"], JAM.policy.p9);
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ['<div class="pre">'], JAM.policy.p9);
  return;
}
function openTextArea() {
  var v104 = outputWindow.document;
  JAM.call(v104.write, v104, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p9);
  return true;
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return;
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v105 = outputWindow.document;
  var v607 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v535 = v607 + "<head>\n";
  var v407 = v535 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v407 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v105.write, v105, [v106], JAM.policy.p16);
  if (isColor) {
    var v107 = outputWindow.document;
    var v769 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v765 = v769 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v761 = v765 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v757 = v761 + "div.info {font-weight: bold}\n";
    var v750 = v757 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v741 = v750 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v732 = v741 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v721 = v732 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v705 = v721 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v689 = v705 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v656 = v689 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v608 = v656 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v536 = v608 + "td.many {color: #000000}\n";
    var v408 = v536 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v408 + "</style>\n";
    JAM.call(v107.write, v107, [v108], JAM.policy.p16);
  } else {
    var v109 = outputWindow.document;
    var v773 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v770 = v773 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v766 = v770 + "div.title {display: none}\n";
    var v762 = v766 + "div.info {font-weight: bold}\n";
    var v758 = v762 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v751 = v758 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v742 = v751 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v733 = v742 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v722 = v733 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v706 = v722 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v690 = v706 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v657 = v690 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v609 = v657 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v537 = v609 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v409 = v537 + "img {display: none}\n";
    var v110 = v409 + "</style>\n";
    JAM.call(v109.write, v109, [v110], JAM.policy.p16);
  }
  var v111 = outputWindow.document;
  var v610 = "</head>\n" + '<body class="main">\n';
  var v538 = v610 + '<div class="title">';
  var v410 = v538 + title$$7;
  var v112 = v410 + " results</div>\n";
  JAM.call(v111.write, v111, [v112], JAM.policy.p16);
  outputWindow.status = "Please Wait.";
  return true;
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return;
}
function _openWindowAlign(title$$9, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v113 = outputWindow.document;
  var v611 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v539 = v611 + "<head>\n";
  var v411 = v539 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v411 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v113.write, v113, [v114], JAM.policy.p16);
  if (isBackground) {
    var v115 = outputWindow.document;
    var v771 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v767 = v771 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v763 = v767 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v759 = v763 + "div.info {font-weight: bold}\n";
    var v752 = v759 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v743 = v752 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v734 = v743 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v723 = v734 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v707 = v723 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v691 = v707 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v658 = v691 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v612 = v658 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v540 = v612 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v412 = v540 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v412 + "</style>\n";
    JAM.call(v115.write, v115, [v116], JAM.policy.p16);
  } else {
    var v117 = outputWindow.document;
    var v775 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v774 = v775 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v772 = v774 + "div.title {display: none}\n";
    var v768 = v772 + "div.info {font-weight: bold}\n";
    var v764 = v768 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v760 = v764 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v753 = v760 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v744 = v753 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v735 = v744 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v724 = v735 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v708 = v724 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v692 = v708 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v659 = v692 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v613 = v659 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v541 = v613 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v413 = v541 + "img {display: none}\n";
    var v118 = v413 + "</style>\n";
    JAM.call(v117.write, v117, [v118], JAM.policy.p16);
  }
  var v119 = outputWindow.document;
  var v614 = "</head>\n" + '<body class="main">\n';
  var v542 = v614 + '<div class="title">';
  var v414 = v542 + title$$9;
  var v120 = v414 + " results</div>\n";
  JAM.call(v119.write, v119, [v120], JAM.policy.p16);
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
  var v415 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p18);
  var v121 = v415 != -1;
  if (v121) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p18);
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p16);
  var v416 = testArray[0];
  var v125 = v416 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v417 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p16);
  var v126 = v417 == -1;
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
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p15);
  var v128 = testString != "1X2X3X";
  if (v128) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v418 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p11);
  var v129 = v418 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v419 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p11);
  var v130 = v419 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v420 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p18);
  var v131 = v420 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v660 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p18);
  var v615 = v660 == -1;
  var v662 = !v615;
  if (v662) {
    var v661 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p18);
    v615 = v661 == -1;
  }
  var v543 = v615;
  var v617 = !v543;
  if (v617) {
    var v616 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p18);
    v543 = v616 == -1;
  }
  var v421 = v543;
  var v545 = !v421;
  if (v545) {
    var v544 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p18);
    v421 = v544 == -1;
  }
  var v132 = v421;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v422 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p18);
  var v133 = v422 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v423 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v423 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v424 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p18);
  var v136 = v424 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v425 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p18);
  var v137 = v425 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v663 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p18);
  var v618 = v663 == -1;
  var v665 = !v618;
  if (v665) {
    var v664 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p18);
    v618 = v664 == -1;
  }
  var v546 = v618;
  var v620 = !v546;
  if (v620) {
    var v619 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p18);
    v546 = v619 == -1;
  }
  var v426 = v546;
  var v548 = !v426;
  if (v548) {
    var v547 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p18);
    v426 = v547 == -1;
  }
  var v138 = v426;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v666 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p18);
  var v621 = v666 == -1;
  var v668 = !v621;
  if (v668) {
    var v667 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p18);
    v621 = v667 == -1;
  }
  var v549 = v621;
  var v623 = !v549;
  if (v623) {
    var v622 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p18);
    v549 = v622 == -1;
  }
  var v427 = v549;
  var v551 = !v427;
  if (v551) {
    var v550 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p18);
    v427 = v550 == -1;
  }
  var v139 = v427;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v428 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p18);
  var v140 = v428 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v669 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p18);
  var v624 = v669 == -1;
  var v671 = !v624;
  if (v671) {
    var v670 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p18);
    v624 = v670 == -1;
  }
  var v552 = v624;
  var v626 = !v552;
  if (v626) {
    var v625 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p18);
    v552 = v625 == -1;
  }
  var v429 = v552;
  var v554 = !v429;
  if (v554) {
    var v553 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p18);
    v429 = v553 == -1;
  }
  var v141 = v429;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v430 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p18);
  var v142 = v430 == -1;
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
    var v431 = basePerLine / groupSize;
    var v146 = j$$6 <= v431;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v432 = k + i$$5;
        var v144 = JAM.call(text$$10.charAt, text$$10, [v432], JAM.policy.p16);
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v433 = basePerLine / groupSize;
      v146 = j$$6 <= v433;
    }
    var v147 = outputWindow.document;
    var v148 = lineOfText + "\n";
    JAM.call(v147.write, v147, [v148], JAM.policy.p16);
    lineOfText = "";
    v149 = i$$5 < stopBase;
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
    var v434 = adjustment < 0;
    if (v434) {
      v434 = adjusted >= 0;
    }
    var v150 = v434;
    if (v150) {
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
  var v183 = i$$6 < stopBase$$2;
  for (;v183;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v435 = basePerLine$$2 / groupSize$$2;
    var v159 = j$$7 <= v435;
    for (;v159;) {
      var v154 = k$$1 < groupSize$$2;
      for (;v154;) {
        var v436 = i$$6 + k$$1;
        var v151 = v436 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v152 = lineOfText$$1;
        var v437 = k$$1 + i$$6;
        var v153 = JAM.call(text$$12.charAt, text$$12, [v437], JAM.policy.p16);
        lineOfText$$1 = v152 + v153;
        k$$1 = k$$1 + 1;
        v154 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v157 = numberPosition$$1 == "above";
      if (v157) {
        var v155 = aboveNum;
        var v438 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p20);
        var v156 = rightNum(v438, "", groupSize$$2, tabIn$$3);
        aboveNum = v155 + v156;
      }
      var v158 = i$$6 >= stopBase$$2;
      if (v158) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v439 = basePerLine$$2 / groupSize$$2;
      v159 = j$$7 <= v439;
    }
    var v182 = numberPosition$$1 == "left";
    if (v182) {
      var v160 = outputWindow.document;
      var v627 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p20);
      var v555 = rightNum(v627, "", 8, tabIn$$3);
      var v440 = v555 + lineOfText$$1;
      var v161 = v440 + "\n";
      JAM.call(v160.write, v160, [v161], JAM.policy.p16);
      var v165 = strands$$1 == "two";
      if (v165) {
        var v162 = outputWindow.document;
        var v628 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p20);
        var v556 = rightNum(v628, "", 8, tabIn$$3);
        var v557 = complement(lineOfText$$1);
        var v441 = v556 + v557;
        var v163 = v441 + "\n";
        JAM.call(v162.write, v162, [v163], JAM.policy.p16);
        var v164 = outputWindow.document;
        JAM.call(v164.write, v164, ["\n"], JAM.policy.p9);
      }
    } else {
      var v181 = numberPosition$$1 == "right";
      if (v181) {
        var v166 = outputWindow.document;
        var v558 = lineOfText$$1;
        var v559 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p20);
        var v442 = v558 + v559;
        var v167 = v442 + "\n";
        JAM.call(v166.write, v166, [v167], JAM.policy.p16);
        var v171 = strands$$1 == "two";
        if (v171) {
          var v168 = outputWindow.document;
          var v560 = complement(lineOfText$$1);
          var v561 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p20);
          var v443 = v560 + v561;
          var v169 = v443 + "\n";
          JAM.call(v168.write, v168, [v169], JAM.policy.p16);
          var v170 = outputWindow.document;
          JAM.call(v170.write, v170, ["\n"], JAM.policy.p9);
        }
      } else {
        var v180 = numberPosition$$1 == "above";
        if (v180) {
          var v172 = outputWindow.document;
          var v173 = aboveNum + "\n";
          JAM.call(v172.write, v172, [v173], JAM.policy.p16);
          var v174 = outputWindow.document;
          var v175 = lineOfText$$1 + "\n";
          JAM.call(v174.write, v174, [v175], JAM.policy.p16);
          var v179 = strands$$1 == "two";
          if (v179) {
            var v176 = outputWindow.document;
            var v444 = complement(lineOfText$$1);
            var v177 = v444 + "\n";
            JAM.call(v176.write, v176, [v177], JAM.policy.p16);
            var v178 = outputWindow.document;
            JAM.call(v178.write, v178, ["\n"], JAM.policy.p9);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v183 = i$$6 < stopBase$$2;
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
  var v202 = i$$7 < stopBase$$3;
  for (;v202;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v445 = basePerLine$$3 / groupSize$$3;
    var v190 = j$$8 <= v445;
    for (;v190;) {
      var v186 = k$$2 < groupSize$$3;
      for (;v186;) {
        var v446 = i$$7 + k$$2;
        var v184 = v446 >= stopBase$$3;
        if (v184) {
          break;
        }
        var v447 = k$$2 + i$$7;
        var v185 = JAM.call(text$$13.charAt, text$$13, [v447], JAM.policy.p16);
        lineOfText$$2 = lineOfText$$2 + v185;
        k$$2 = k$$2 + 1;
        v186 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v188 = numberPosition$$2 == "above";
      if (v188) {
        var v187 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v187;
      }
      var v189 = i$$7 >= stopBase$$3;
      if (v189) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v448 = basePerLine$$3 / groupSize$$3;
      v190 = j$$8 <= v448;
    }
    var v201 = numberPosition$$2 == "left";
    if (v201) {
      var v191 = outputWindow.document;
      var v562 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v449 = v562 + lineOfText$$2;
      var v192 = v449 + "\n";
      JAM.call(v191.write, v191, [v192], JAM.policy.p16);
    } else {
      var v200 = numberPosition$$2 == "right";
      if (v200) {
        var v193 = outputWindow.document;
        var v450 = lineOfText$$2 + i$$7;
        var v194 = v450 + "\n";
        JAM.call(v193.write, v193, [v194], JAM.policy.p16);
      } else {
        var v199 = numberPosition$$2 == "above";
        if (v199) {
          var v195 = outputWindow.document;
          var v196 = aboveNum$$1 + "\n";
          JAM.call(v195.write, v195, [v196], JAM.policy.p16);
          var v197 = outputWindow.document;
          var v198 = lineOfText$$2 + "\n";
          JAM.call(v197.write, v197, [v198], JAM.policy.p16);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v202 = i$$7 < stopBase$$3;
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
  var v629 = sequence$$13.length;
  var v563 = v629 <= firstIndexToMutate;
  var v630 = !v563;
  if (v630) {
    v563 = lastIndexToMutate < 0;
  }
  var v451 = v563;
  var v564 = !v451;
  if (v564) {
    v451 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v203 = v451;
  if (v203) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v211 = i$$8 < numMut;
  for (;v211;) {
    maxNum = sequence$$13.length;
    var v452 = Math.random();
    var v204 = v452 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v204], JAM.policy.p18);
    var v453 = randNum < firstIndexToMutate;
    var v565 = !v453;
    if (v565) {
      v453 = randNum > lastIndexToMutate;
    }
    var v205 = v453;
    if (v205) {
      numMut++;
      i$$8++;
      v211 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p18);
    needNewChar = true;
    for (;needNewChar;) {
      var v454 = Math.random();
      var v455 = components$$1.length;
      var v206 = v454 * v455;
      componentsIndex = JAM.call(Math.round, Math, [v206], JAM.policy.p18);
      var v456 = components$$1.length;
      var v207 = componentsIndex == v456;
      if (v207) {
        componentsIndex = 0;
      }
      var v457 = components$$1[componentsIndex];
      var v208 = v457 != currentChar;
      if (v208) {
        needNewChar = false;
      }
    }
    var v458 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v459 = components$$1[componentsIndex];
    var v209 = v458 + v459;
    var v460 = randNum + 1;
    var v461 = sequence$$13.length;
    var v210 = JAM.call(sequence$$13.substring, sequence$$13, [v460, v461], JAM.policy.p21);
    sequence$$13 = v209 + v210;
    i$$8++;
    v211 = i$$8 < numMut;
  }
  var v212 = outputWindow.document;
  var v213 = addReturns(sequence$$13);
  JAM.call(v212.write, v212, [v213], JAM.policy.p16);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v218 = j$$9 < lengthOut$$1;
  for (;v218;) {
    var v462 = Math.random();
    var v463 = components$$2.length;
    var v214 = v462 * v463;
    tempNum$$1 = JAM.call(Math.floor, Math, [v214], JAM.policy.p18);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v464 = sequence$$14.length;
    var v217 = v464 == 60;
    if (v217) {
      var v215 = outputWindow.document;
      var v216 = sequence$$14 + "\n";
      JAM.call(v215.write, v215, [v216], JAM.policy.p16);
      sequence$$14 = "";
    }
    j$$9++;
    v218 = j$$9 < lengthOut$$1;
  }
  var v219 = outputWindow.document;
  var v220 = sequence$$14 + "\n";
  JAM.call(v219.write, v219, [v220], JAM.policy.p16);
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
  var v224 = dnaConformation == "circular";
  if (v224) {
    var v221 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v221.length;
    var v631 = sequence$$15.length;
    var v566 = v631 - lookAhead;
    var v567 = sequence$$15.length;
    var v465 = JAM.call(sequence$$15.substring, sequence$$15, [v566, v567], JAM.policy.p21);
    var v222 = v465 + sequence$$15;
    var v223 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v222 + v223;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v225 = outputWindow.document;
  JAM.call(v225.write, v225, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v226 = outputWindow.document;
  var v632 = '<tr><td class="title" width="200px">' + "Site:";
  var v568 = v632 + '</td><td class="title">';
  var v466 = v568 + "Positions:";
  var v227 = v466 + "</td></tr>\n";
  JAM.call(v226.write, v226, [v227], JAM.policy.p16);
  var i$$9 = 0;
  var v467 = arrayOfItems.length;
  var v243 = i$$9 < v467;
  for (;v243;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v468 = arrayOfItems[i$$9];
    var v228 = JAM.call(v468.match, v468, [/\/.+\//], JAM.policy.p18);
    matchExp = v228 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v633 = arrayOfItems[i$$9];
    var v569 = JAM.call(v633.match, v633, [/\)\D*\d+/], JAM.policy.p18);
    var v469 = v569.toString();
    var v229 = JAM.call(v469.replace, v469, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v229);
    var v235 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
    for (;v235;) {
      var v230 = matchExp.lastIndex;
      matchPosition = v230 - cutDistance;
      var v470 = matchPosition >= lowerLimit;
      if (v470) {
        v470 = matchPosition < upperLimit;
      }
      var v233 = v470;
      if (v233) {
        timesFound++;
        var v231 = tempString$$1 + ", ";
        var v471 = matchPosition - shiftValue;
        var v232 = v471 + 1;
        tempString$$1 = v231 + v232;
      }
      var v472 = matchExp.lastIndex;
      var v570 = RegExp.lastMatch;
      var v473 = v570.length;
      var v234 = v472 - v473;
      matchExp.lastIndex = v234 + 1;
      v235 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
    }
    var v474 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p18);
    var v236 = v474 != -1;
    if (v236) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p15);
    }
    var v240 = timesFound == 0;
    if (v240) {
      backGroundClass = "none";
    } else {
      var v239 = timesFound == 1;
      if (v239) {
        backGroundClass = "one";
      } else {
        var v238 = timesFound == 2;
        if (v238) {
          backGroundClass = "two";
        } else {
          var v237 = timesFound == 3;
          if (v237) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v241 = outputWindow.document;
    var v725 = '<tr><td class="' + backGroundClass;
    var v709 = v725 + '">';
    var v745 = arrayOfItems[i$$9];
    var v736 = JAM.call(v745.match, v745, [/\([^\(]+\)/], JAM.policy.p18);
    var v726 = v736.toString();
    var v710 = JAM.call(v726.replace, v726, [/\(|\)/g, ""], JAM.policy.p15);
    var v693 = v709 + v710;
    var v672 = v693 + '</td><td class="';
    var v634 = v672 + backGroundClass;
    var v571 = v634 + '">';
    var v475 = v571 + tempString$$1;
    var v242 = v475 + "</td></tr>\n";
    JAM.call(v241.write, v241, [v242], JAM.policy.p16);
    timesFound = 0;
    i$$9++;
    var v476 = arrayOfItems.length;
    v243 = i$$9 < v476;
  }
  var v244 = outputWindow.document;
  JAM.call(v244.write, v244, ["</tbody></table>\n"], JAM.policy.p9);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v245 = outputWindow.document;
  JAM.call(v245.write, v245, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v246 = outputWindow.document;
  var v694 = '<tr><td class="title">' + "Pattern:";
  var v673 = v694 + '</td><td class="title">';
  var v635 = v673 + "Times found:";
  var v572 = v635 + '</td><td class="title">';
  var v477 = v572 + "Percentage:";
  var v247 = v477 + "</td></tr>\n";
  JAM.call(v246.write, v246, [v247], JAM.policy.p16);
  var i$$10 = 0;
  var v478 = arrayOfItems$$1.length;
  var v256 = i$$10 < v478;
  for (;v256;) {
    var tempNumber = 0;
    var v479 = arrayOfItems$$1[i$$10];
    var v248 = JAM.call(v479.match, v479, [/\/[^\/]+\//], JAM.policy.p18);
    var matchExp$$1 = v248 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v480 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p16);
    var v250 = v480 != -1;
    if (v250) {
      var v249 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p16);
      tempNumber = v249.length;
    }
    var percentage = 0;
    var v573 = originalLength + 1;
    var v674 = arrayOfItems$$1[i$$10];
    var v636 = JAM.call(v674.match, v674, [/\d+/], JAM.policy.p18);
    var v574 = parseFloat(v636);
    var v481 = v573 - v574;
    var v253 = v481 > 0;
    if (v253) {
      var v251 = 100 * tempNumber;
      var v482 = originalLength + 1;
      var v637 = arrayOfItems$$1[i$$10];
      var v575 = JAM.call(v637.match, v637, [/\d+/], JAM.policy.p18);
      var v483 = parseFloat(v575);
      var v252 = v482 - v483;
      percentage = v251 / v252;
    }
    var v254 = outputWindow.document;
    var v746 = arrayOfItems$$1[i$$10];
    var v737 = JAM.call(v746.match, v746, [/\([^\(]+\)\b/], JAM.policy.p18);
    var v727 = v737.toString();
    var v711 = JAM.call(v727.replace, v727, [/\(|\)/g, ""], JAM.policy.p15);
    var v695 = "<tr><td>" + v711;
    var v675 = v695 + "</td><td>";
    var v638 = v675 + tempNumber;
    var v576 = v638 + "</td><td>";
    var v577 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p11);
    var v484 = v576 + v577;
    var v255 = v484 + "</td></tr>\n";
    JAM.call(v254.write, v254, [v255], JAM.policy.p16);
    i$$10++;
    var v485 = arrayOfItems$$1.length;
    v256 = i$$10 < v485;
  }
  var v257 = outputWindow.document;
  JAM.call(v257.write, v257, ["</tbody></table>\n"], JAM.policy.p9);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v486 = sequence$$17.length;
  var v264 = v486 > 0;
  for (;v264;) {
    maxNum$$1 = sequence$$17.length;
    var v487 = Math.random();
    var v258 = v487 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v258], JAM.policy.p18);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p18);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v259 = randNum$$1 + 1;
    var v260 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v259, v260], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v488 = tempSeq.length;
    var v263 = v488 == 60;
    if (v263) {
      var v261 = outputWindow.document;
      var v262 = tempSeq + "\n";
      JAM.call(v261.write, v261, [v262], JAM.policy.p16);
      tempSeq = "";
    }
    var v489 = sequence$$17.length;
    v264 = v489 > 0;
  }
  var v265 = outputWindow.document;
  var v266 = tempSeq + "\n";
  JAM.call(v265.write, v265, [v266], JAM.policy.p16);
  return true;
}
function dnaMw(theDocument) {
  JAM.startProfile('compute');

  var newDna = "";
  var maxInput$$3 = 2E5;
  var v490 = testScript();
  var v267 = v490 == false;
  if (v267) {
    return false;
  }
  var v712 = theDocument.forms;
  var v696 = v712[0];
  var v676 = v696.elements;
  var v639 = v676[0];
  var v578 = checkFormElement(v639);
  var v491 = v578 == false;
  var v580 = !v491;
  if (v580) {
    var v728 = theDocument.forms;
    var v713 = v728[0];
    var v697 = v713.elements;
    var v677 = v697[0];
    var v640 = v677.value;
    var v579 = JAM.call(checkSequenceLength, null, [v640, maxInput$$3], JAM.policy.p20);
    v491 = v579 == false;
  }
  var v268 = v491;
  if (v268) {
    return false;
  }
  openWindow("DNA Molecular Weight");
  var v678 = theDocument.forms;
  var v641 = v678[0];
  var v581 = v641.elements;
  var v492 = v581[0];
  var v269 = v492.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v269);
  var i$$11 = 0;
  var v493 = arrayOfFasta$$1.length;
  var v277 = i$$11 < v493;
  for (;v277;) {
    var v270 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v270);
    var v271 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v271);
    newDna = _removeNonPrimer(newDna);
    var v272 = outputWindow.document;
    var v273 = JAM.call(getInfoFromTitleAndSequence, null, [title, newDna], JAM.policy.p20);
    JAM.call(v272.write, v272, [v273], JAM.policy.p16);
    var v714 = theDocument.forms;
    var v698 = v714[0];
    var v679 = v698.elements;
    var v642 = v679[4];
    var v582 = v642.options;
    var v715 = theDocument.forms;
    var v699 = v715[0];
    var v680 = v699.elements;
    var v643 = v680[4];
    var v583 = v643.selectedIndex;
    var v494 = v582[v583];
    var v274 = v494.value;
    var v716 = theDocument.forms;
    var v700 = v716[0];
    var v681 = v700.elements;
    var v644 = v681[5];
    var v584 = v644.options;
    var v717 = theDocument.forms;
    var v701 = v717[0];
    var v682 = v701.elements;
    var v645 = v682[5];
    var v585 = v645.selectedIndex;
    var v495 = v584[v585];
    var v275 = v495.value;
    JAM.call(writeDnaMw, null, [newDna, v274, v275], JAM.policy.p20);
    var v276 = outputWindow.document;
    JAM.call(v276.write, v276, ["<br />\n<br />\n"], JAM.policy.p9);
    i$$11++;
    var v496 = arrayOfFasta$$1.length;
    v277 = i$$11 < v496;
  }
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function writeDnaMw(sequence$$18, strandType, topology$$1) {
  var OH = 17.01;
  var result = 0;
  var v305 = strandType == "single";
  if (v305) {
    var mw_direct_strand = _molecularWeight(sequence$$18);
    var v497 = mw_direct_strand.length;
    var v288 = v497 == 1;
    if (v288) {
      var v278 = mw_direct_strand[0];
      var mw = parseFloat(v278);
      var v279 = topology$$1 == "circular";
      if (v279) {
        mw = mw - OH;
      }
      mw = JAM.call(mw.toFixed, mw, [2], JAM.policy.p11);
      var v280 = outputWindow.document;
      var v281 = mw + " Da";
      JAM.call(v280.write, v280, [v281], JAM.policy.p16);
    } else {
      var v498 = mw_direct_strand.length;
      var v287 = v498 == 2;
      if (v287) {
        var v282 = mw_direct_strand[0];
        var mw_lower = parseFloat(v282);
        var v283 = mw_direct_strand[1];
        var mw_upper = parseFloat(v283);
        var v284 = topology$$1 == "circular";
        if (v284) {
          mw_lower = mw_lower - OH;
          mw_upper = mw_upper - OH;
        }
        mw_lower = JAM.call(mw_lower.toFixed, mw_lower, [2], JAM.policy.p11);
        mw_upper = JAM.call(mw_upper.toFixed, mw_upper, [2], JAM.policy.p11);
        var v285 = outputWindow.document;
        var v586 = mw_lower + " to ";
        var v499 = v586 + mw_upper;
        var v286 = v499 + " Da";
        JAM.call(v285.write, v285, [v286], JAM.policy.p16);
      }
    }
  } else {
    var v304 = strandType == "double";
    if (v304) {
      mw_direct_strand = _molecularWeight(sequence$$18);
      var v500 = complement(sequence$$18);
      var v289 = reverse(v500);
      var mw_reverse_strand = _molecularWeight(v289);
      var v587 = mw_direct_strand.length;
      var v501 = v587 == 1;
      if (v501) {
        var v588 = mw_reverse_strand.length;
        v501 = v588 == 1;
      }
      var v303 = v501;
      if (v303) {
        var v290 = mw_direct_strand[0];
        var mw_direct = parseFloat(v290);
        var v291 = mw_reverse_strand[0];
        var mw_reverse = parseFloat(v291);
        var v292 = topology$$1 == "circular";
        if (v292) {
          mw_direct = mw_direct - OH;
          mw_reverse = mw_reverse - OH;
        }
        mw = mw_direct + mw_reverse;
        mw = JAM.call(mw.toFixed, mw, [2], JAM.policy.p11);
        var v293 = outputWindow.document;
        var v294 = mw + " Da";
        JAM.call(v293.write, v293, [v294], JAM.policy.p16);
      } else {
        var v589 = mw_direct_strand.length;
        var v502 = v589 == 2;
        if (v502) {
          var v590 = mw_reverse_strand.length;
          v502 = v590 == 2;
        }
        var v302 = v502;
        if (v302) {
          var v295 = mw_direct_strand[0];
          var mw_direct_lower = parseFloat(v295);
          var v296 = mw_reverse_strand[0];
          var mw_reverse_lower = parseFloat(v296);
          var v297 = mw_direct_strand[1];
          var mw_direct_upper = parseFloat(v297);
          var v298 = mw_reverse_strand[1];
          var mw_reverse_upper = parseFloat(v298);
          var v299 = topology$$1 == "circular";
          if (v299) {
            mw_direct_lower = mw_direct_lower - OH;
            mw_reverse_lower = mw_reverse_lower - OH;
            mw_direct_upper = mw_direct_upper - OH;
            mw_reverse_upper = mw_reverse_upper - OH;
          }
          mw_lower = mw_direct_lower + mw_reverse_lower;
          mw_upper = mw_direct_upper + mw_reverse_upper;
          mw_lower = JAM.call(mw_lower.toFixed, mw_lower, [2], JAM.policy.p11);
          mw_upper = JAM.call(mw_upper.toFixed, mw_upper, [2], JAM.policy.p11);
          var v300 = outputWindow.document;
          var v591 = mw_lower + " to ";
          var v503 = v591 + mw_upper;
          var v301 = v503 + " Da";
          JAM.call(v300.write, v300, [v301], JAM.policy.p16);
        }
      }
    }
  }
  return true;
}
function _containsOnlyNonDegenerates(sequence$$19) {
  var v504 = JAM.call(sequence$$19.search, sequence$$19, [/[^gatc]/i], JAM.policy.p18);
  var v306 = v504 == -1;
  if (v306) {
    return true;
  }
  return false;
}
function _molecularWeight(sequence$$20) {
  var v307 = _containsOnlyNonDegenerates(sequence$$20);
  if (v307) {
    return _molecularWeightNonDegen(sequence$$20);
  } else {
    return _molecularWeightDegen(sequence$$20);
  }
  return;
}
function _molecularWeightNonDegen(sequence$$21) {
  var results = new Array;
  var v782 = _mw(sequence$$21);
  results[0] = v782;
  return results;
}
function _mw(sequence$$22) {
  var g = _getBaseCount(sequence$$22, "g");
  var a = _getBaseCount(sequence$$22, "a");
  var t = _getBaseCount(sequence$$22, "t");
  var c = _getBaseCount(sequence$$22, "c");
  var v646 = g * 329.21;
  var v647 = a * 313.21;
  var v592 = v646 + v647;
  var v593 = t * 304.2;
  var v505 = v592 + v593;
  var v506 = c * 289.18;
  var v308 = v505 + v506;
  return v308 + 17.01;
}
function _molecularWeightDegen(sequence$$23) {
  var lowerBoundsSequence = sequence$$23;
  var upperBoundsSequence = sequence$$23;
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/r/gi, "a"], JAM.policy.p15);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/y/gi, "c"], JAM.policy.p15);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/s/gi, "c"], JAM.policy.p15);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/w/gi, "t"], JAM.policy.p15);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/k/gi, "t"], JAM.policy.p15);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/m/gi, "c"], JAM.policy.p15);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/b/gi, "c"], JAM.policy.p15);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/d/gi, "t"], JAM.policy.p15);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/h/gi, "c"], JAM.policy.p15);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/v/gi, "c"], JAM.policy.p15);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/n/gi, "c"], JAM.policy.p15);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/r/gi, "g"], JAM.policy.p15);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/y/gi, "t"], JAM.policy.p15);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/s/gi, "g"], JAM.policy.p15);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/w/gi, "a"], JAM.policy.p15);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/k/gi, "g"], JAM.policy.p15);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/m/gi, "a"], JAM.policy.p15);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/b/gi, "g"], JAM.policy.p15);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/d/gi, "g"], JAM.policy.p15);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/h/gi, "a"], JAM.policy.p15);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/v/gi, "g"], JAM.policy.p15);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/n/gi, "g"], JAM.policy.p15);
  var results$$1 = new Array;
  var v783 = _molecularWeightNonDegen(lowerBoundsSequence);
  results$$1[0] = v783;
  var v784 = _molecularWeightNonDegen(upperBoundsSequence);
  results$$1[1] = v784;
  return results$$1;
}
function _getBaseCount(sequence$$24, base$$1) {
  var basePattern = new RegExp(base$$1, "gi");
  var v507 = JAM.call(sequence$$24.search, sequence$$24, [basePattern], JAM.policy.p16);
  var v310 = v507 != -1;
  if (v310) {
    var v309 = JAM.call(sequence$$24.match, sequence$$24, [basePattern], JAM.policy.p16);
    return v309.length;
  } else {
    return 0;
  }
  return;
}
function _removeNonPrimer(sequence$$25) {
  JAM.call(sequence$$25.replace, sequence$$25, [/u/g, "t"], JAM.policy.p15);
  JAM.call(sequence$$25.replace, sequence$$25, [/U/g, "T"], JAM.policy.p15);
  return JAM.call(sequence$$25.replace, sequence$$25, [/[^gatcryswkmbdhvnGATCRYSWKMBDHVN]/g, ""], JAM.policy.p15);
}
JAM.set(document, "onload", v2);
var v311 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9);
JAM.set(v311, "onclick", v3);
var v312 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9);
JAM.set(v312, "onclick", v4)

JAM.stopProfile('load');
