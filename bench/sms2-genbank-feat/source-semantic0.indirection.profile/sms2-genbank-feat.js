
JAM.startProfile('load');
function v4() {
  var v613 = document.forms;
  var v523 = v613[0];
  var v321 = v523.elements;
  var v5 = v321[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    genbankFeat(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v322 = document.main_form;
  var v7 = v322.main_submit;
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
  var v323 = arrayOfSequences.length;
  var v9 = v323 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v324 = arrayOfTitles.length;
  var v11 = i$$1 < v324;
  for (;v11;) {
    var v669 = arrayOfTitles[i$$1];
    var v614 = JAM.call(v669.search, v669, [/\S/], JAM.policy.p17);
    var v524 = v614 == -1;
    var v616 = !v524;
    if (v616) {
      var v670 = arrayOfSequences[i$$1];
      var v615 = JAM.call(v670.search, v670, [/\S/], JAM.policy.p17);
      v524 = v615 == -1;
    }
    var v325 = v524;
    var v526 = !v325;
    if (v526) {
      var v617 = arrayOfSequences[i$$1];
      var v525 = v617.length;
      v325 = v525 != lengthOfAlign;
    }
    var v10 = v325;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v326 = arrayOfTitles.length;
    v11 = i$$1 < v326;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v704 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17);
  var v671 = v704 == -1;
  var v706 = !v671;
  if (v706) {
    var v705 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17);
    v671 = v705 == -1;
  }
  var v618 = v671;
  var v673 = !v618;
  if (v673) {
    var v672 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17);
    v618 = v672 == -1;
  }
  var v527 = v618;
  var v620 = !v527;
  if (v620) {
    var v619 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17);
    v527 = v619 == -1;
  }
  var v327 = v527;
  var v529 = !v327;
  if (v529) {
    var v528 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17);
    v327 = v528 == -1;
  }
  var v12 = v327;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v530 = formElement.value;
  var v328 = JAM.call(v530.search, v530, [/\S/], JAM.policy.p17);
  var v13 = v328 == -1;
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
  var v329 = arrayOfPatterns.length;
  var v16 = z$$2 < v329;
  for (;v16;) {
    var v531 = arrayOfPatterns[z$$2];
    var v330 = JAM.call(v531.search, v531, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17);
    var v14 = v330 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v532 = arrayOfPatterns[z$$2];
    var v331 = moreExpressionCheck(v532);
    var v15 = v331 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v332 = arrayOfPatterns.length;
    v16 = z$$2 < v332;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v333 = arrayOfPatterns.length;
  var v22 = j < v333;
  for (;v22;) {
    var v533 = arrayOfPatterns[j];
    var v334 = JAM.call(v533.match, v533, [/\/.+\//], JAM.policy.p17);
    var v19 = v334 + "gi";
    if (JAM.isEval(eval)) {
      var v798 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v798 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v798;
    var v335 = arrayOfPatterns[j];
    var v20 = JAM.call(v335.match, v335, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v799 = v20.toString();
    geneticCodeMatchResult[j] = v799;
    var v21 = geneticCodeMatchResult[j];
    var v800 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v800;
    j++;
    var v336 = arrayOfPatterns.length;
    v22 = j < v336;
  }
  var i$$2 = 0;
  var v534 = testSequence.length;
  var v337 = v534 - 3;
  var v29 = i$$2 <= v337;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p15);
    j = 0;
    var v338 = geneticCodeMatchExp.length;
    var v27 = j < v338;
    for (;v27;) {
      var v535 = geneticCodeMatchExp[j];
      var v339 = JAM.call(codon.search, codon, [v535], JAM.policy.p16);
      var v26 = v339 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v340 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v340 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v341 = geneticCodeMatchExp.length;
      v27 = j < v341;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v536 = testSequence.length;
    var v342 = v536 - 3;
    v29 = i$$2 <= v342;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v343 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v343;
  for (;v31;) {
    var v537 = arrayOfPatterns$$1[z$$3];
    var v344 = JAM.call(v537.search, v537, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17);
    var v30 = v344 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v345 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v345;
  }
  var i$$3 = 0;
  var v346 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v346;
  for (;v35;) {
    var v538 = arrayOfPatterns$$1[i$$3];
    var v347 = "[" + v538;
    var v32 = v347 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v348 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v348;
    for (;v34;) {
      var v539 = arrayOfPatterns$$1[j$$1];
      var v349 = JAM.call(v539.search, v539, [re], JAM.policy.p16);
      var v33 = v349 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v350 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v350;
    }
    i$$3++;
    var v351 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v351;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v352 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v352;
  for (;v38;) {
    var v540 = arrayOfPatterns$$2[z$$4];
    var v353 = JAM.call(v540.search, v540, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17);
    var v36 = v353 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v541 = arrayOfPatterns$$2[z$$4];
    var v354 = moreExpressionCheck(v541);
    var v37 = v354 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v355 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v355;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v621 = getSequenceFromFasta(text$$7);
  var v542 = JAM.call(v621.replace, v621, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v356 = v542.length;
  var v40 = v356 > maxInput;
  if (v40) {
    var v357 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v357 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v358 = text$$8.length;
  var v42 = v358 > maxInput$$1;
  if (v42) {
    var v359 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v359 + " characters.";
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
  var v360 = alignArray.length;
  var v49 = v360 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v361 = alignArray.length;
  var v51 = i$$4 < v361;
  for (;v51;) {
    var v543 = alignArray[i$$4];
    var v362 = JAM.call(v543.search, v543, [/[^\s]+\s/], JAM.policy.p17);
    var v50 = v362 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v363 = alignArray.length;
    v51 = i$$4 < v363;
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
  var v364 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v54 = v364 != -1;
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
  var v365 = sequence$$2.length;
  var v55 = "&gt;results for " + v365;
  var stringToReturn = v55 + " residue sequence ";
  var v366 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p17);
  var v57 = v366 != -1;
  if (v57) {
    var v367 = stringToReturn + '"';
    var v56 = v367 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v368 = stringToReturn + ' starting "';
  var v369 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v368 + v369;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v370 = sequenceOne.length;
  var v59 = "Search results for " + v370;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v371 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p17);
  var v61 = v371 != -1;
  if (v61) {
    var v372 = stringToReturn$$1 + '"';
    var v60 = v372 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v373 = stringToReturn$$1 + ' starting "';
  var v374 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v373 + v374;
  stringToReturn$$1 = v62 + '"\n';
  var v375 = stringToReturn$$1 + "and ";
  var v376 = sequenceTwo.length;
  var v63 = v375 + v376;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v377 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p17);
  var v65 = v377 != -1;
  if (v65) {
    var v378 = stringToReturn$$1 + '"';
    var v64 = v378 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v379 = stringToReturn$$1 + ' starting "';
  var v380 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v66 = v379 + v380;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v381 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v381;
  for (;v70;) {
    var v544 = arrayOfPatterns$$3[j$$2];
    var v382 = JAM.call(v544.match, v544, [/\/.+\//], JAM.policy.p17);
    var v69 = v382 + "gi";
    if (JAM.isEval(eval)) {
      var v801 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v801 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v801;
    j$$2++;
    var v383 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v383;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v384 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v384;
  for (;v74;) {
    var v385 = arrayOfPatterns$$4[j$$3];
    var v72 = JAM.call(v385.match, v385, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v802 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v802;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v803 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v803;
    j$$3++;
    var v386 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v386;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v387 = sequence$$3.length;
  var v75 = "Results for " + v387;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v388 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p17);
  var v77 = v388 != -1;
  if (v77) {
    var v389 = stringToReturn$$2 + '"';
    var v76 = v389 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v390 = stringToReturn$$2 + ' starting "';
  var v391 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v78 = v390 + v391;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v545 = "Results for " + topology;
  var v392 = v545 + " ";
  var v393 = sequence$$4.length;
  var v80 = v392 + v393;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v394 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p17);
  var v82 = v394 != -1;
  if (v82) {
    var v395 = stringToReturn$$3 + '"';
    var v81 = v395 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v396 = stringToReturn$$3 + ' starting "';
  var v397 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v396 + v397;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v398 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v398;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v399 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p17);
  var v87 = v399 != -1;
  if (v87) {
    var v400 = stringToReturn$$4 + '"';
    var v86 = v400 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v401 = stringToReturn$$4 + ' starting "';
  var v402 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v401 + v402;
  stringToReturn$$4 = v88 + '"\n';
  var v403 = stringToReturn$$4 + "and ";
  var v404 = sequenceTwo$$1.length;
  var v89 = v403 + v404;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v405 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p17);
  var v91 = v405 != -1;
  if (v91) {
    var v406 = stringToReturn$$4 + '"';
    var v90 = v406 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v407 = stringToReturn$$4 + ' starting "';
  var v408 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v92 = v407 + v408;
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
    var v409 = Math.random();
    var v410 = components.length;
    var v94 = v409 * v410;
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p16);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p9);
}
function getSequenceFromFasta(sequenceRecord) {
  var v411 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v96 = v411 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v412 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v98 = v412 != -1;
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
  var v776 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p17);
  var v769 = v776 != -1;
  var v778 = !v769;
  if (v778) {
    var v777 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17);
    v769 = v777 != -1;
  }
  var v760 = v769;
  var v771 = !v760;
  if (v771) {
    var v770 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17);
    v760 = v770 != -1;
  }
  var v750 = v760;
  var v762 = !v750;
  if (v762) {
    var v761 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17);
    v750 = v761 != -1;
  }
  var v737 = v750;
  var v752 = !v737;
  if (v752) {
    var v751 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17);
    v737 = v751 != -1;
  }
  var v722 = v737;
  var v739 = !v722;
  if (v739) {
    var v738 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17);
    v722 = v738 != -1;
  }
  var v707 = v722;
  var v724 = !v707;
  if (v724) {
    var v723 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17);
    v707 = v723 != -1;
  }
  var v674 = v707;
  var v709 = !v674;
  if (v709) {
    var v708 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17);
    v674 = v708 != -1;
  }
  var v622 = v674;
  var v676 = !v622;
  if (v676) {
    var v675 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17);
    v622 = v675 != -1;
  }
  var v546 = v622;
  var v624 = !v546;
  if (v624) {
    var v623 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17);
    v546 = v623 != -1;
  }
  var v413 = v546;
  var v548 = !v413;
  if (v548) {
    var v547 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17);
    v413 = v547 != -1;
  }
  var v99 = v413;
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
  var v625 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v549 = v625 + "<head>\n";
  var v414 = v549 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v414 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p16);
  if (isColor) {
    var v106 = outputWindow.document;
    var v791 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v787 = v791 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v783 = v787 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v779 = v783 + "div.info {font-weight: bold}\n";
    var v772 = v779 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v763 = v772 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v753 = v763 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v740 = v753 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v725 = v740 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v710 = v725 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v677 = v710 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v626 = v677 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v550 = v626 + "td.many {color: #000000}\n";
    var v415 = v550 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v415 + "</style>\n";
    JAM.call(v106.write, v106, [v107], JAM.policy.p16);
  } else {
    var v108 = outputWindow.document;
    var v795 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v792 = v795 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v788 = v792 + "div.title {display: none}\n";
    var v784 = v788 + "div.info {font-weight: bold}\n";
    var v780 = v784 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v773 = v780 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v764 = v773 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v754 = v764 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v741 = v754 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v726 = v741 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v711 = v726 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v678 = v711 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v627 = v678 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v551 = v627 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v416 = v551 + "img {display: none}\n";
    var v109 = v416 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p16);
  }
  var v110 = outputWindow.document;
  var v628 = "</head>\n" + '<body class="main">\n';
  var v552 = v628 + '<div class="title">';
  var v417 = v552 + title$$6;
  var v111 = v417 + " results</div>\n";
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
  var v629 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v553 = v629 + "<head>\n";
  var v418 = v553 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v418 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p16);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v793 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v789 = v793 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v785 = v789 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v781 = v785 + "div.info {font-weight: bold}\n";
    var v774 = v781 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v765 = v774 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v755 = v765 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v742 = v755 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v727 = v742 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v712 = v727 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v679 = v712 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v630 = v679 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v554 = v630 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v419 = v554 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v419 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p16);
  } else {
    var v116 = outputWindow.document;
    var v797 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v796 = v797 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v794 = v796 + "div.title {display: none}\n";
    var v790 = v794 + "div.info {font-weight: bold}\n";
    var v786 = v790 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v782 = v786 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v775 = v782 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v766 = v775 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v756 = v766 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v743 = v756 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v728 = v743 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v713 = v728 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v680 = v713 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v631 = v680 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v555 = v631 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v420 = v555 + "img {display: none}\n";
    var v117 = v420 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p16);
  }
  var v118 = outputWindow.document;
  var v632 = "</head>\n" + '<body class="main">\n';
  var v556 = v632 + '<div class="title">';
  var v421 = v556 + title$$8;
  var v119 = v421 + " results</div>\n";
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
  var v422 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p17);
  var v120 = v422 != -1;
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
  var v423 = testArray[0];
  var v124 = v423 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v424 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p16);
  var v125 = v424 == -1;
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
  var v425 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p11);
  var v128 = v425 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v426 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p11);
  var v129 = v426 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v427 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p17);
  var v130 = v427 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v681 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17);
  var v633 = v681 == -1;
  var v683 = !v633;
  if (v683) {
    var v682 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17);
    v633 = v682 == -1;
  }
  var v557 = v633;
  var v635 = !v557;
  if (v635) {
    var v634 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17);
    v557 = v634 == -1;
  }
  var v428 = v557;
  var v559 = !v428;
  if (v559) {
    var v558 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17);
    v428 = v558 == -1;
  }
  var v131 = v428;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v429 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p17);
  var v132 = v429 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v430 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v430 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v431 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p17);
  var v135 = v431 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v432 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p17);
  var v136 = v432 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v684 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17);
  var v636 = v684 == -1;
  var v686 = !v636;
  if (v686) {
    var v685 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17);
    v636 = v685 == -1;
  }
  var v560 = v636;
  var v638 = !v560;
  if (v638) {
    var v637 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17);
    v560 = v637 == -1;
  }
  var v433 = v560;
  var v562 = !v433;
  if (v562) {
    var v561 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17);
    v433 = v561 == -1;
  }
  var v137 = v433;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v687 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17);
  var v639 = v687 == -1;
  var v689 = !v639;
  if (v689) {
    var v688 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17);
    v639 = v688 == -1;
  }
  var v563 = v639;
  var v641 = !v563;
  if (v641) {
    var v640 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17);
    v563 = v640 == -1;
  }
  var v434 = v563;
  var v565 = !v434;
  if (v565) {
    var v564 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17);
    v434 = v564 == -1;
  }
  var v138 = v434;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v435 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p17);
  var v139 = v435 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v690 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17);
  var v642 = v690 == -1;
  var v692 = !v642;
  if (v692) {
    var v691 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17);
    v642 = v691 == -1;
  }
  var v566 = v642;
  var v644 = !v566;
  if (v644) {
    var v643 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17);
    v566 = v643 == -1;
  }
  var v436 = v566;
  var v568 = !v436;
  if (v568) {
    var v567 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17);
    v436 = v567 == -1;
  }
  var v140 = v436;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v437 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p17);
  var v141 = v437 == -1;
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
    var v438 = basePerLine / groupSize;
    var v145 = j$$6 <= v438;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v439 = k + i$$5;
        var v143 = JAM.call(text$$10.charAt, text$$10, [v439], JAM.policy.p16);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v440 = basePerLine / groupSize;
      v145 = j$$6 <= v440;
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
    var v441 = adjustment < 0;
    if (v441) {
      v441 = adjusted >= 0;
    }
    var v149 = v441;
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
    var v442 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v442;
    for (;v158;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v443 = i$$6 + k$$1;
        var v150 = v443 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v151 = lineOfText$$1;
        var v444 = k$$1 + i$$6;
        var v152 = JAM.call(text$$12.charAt, text$$12, [v444], JAM.policy.p16);
        lineOfText$$1 = v151 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v156 = numberPosition$$1 == "above";
      if (v156) {
        var v154 = aboveNum;
        var v445 = adjustNumbering(i$$6, numberingAdjustment);
        var v155 = rightNum(v445, "", groupSize$$2, tabIn$$3);
        aboveNum = v154 + v155;
      }
      var v157 = i$$6 >= stopBase$$2;
      if (v157) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v446 = basePerLine$$2 / groupSize$$2;
      v158 = j$$7 <= v446;
    }
    var v181 = numberPosition$$1 == "left";
    if (v181) {
      var v159 = outputWindow.document;
      var v645 = adjustNumbering(lineNum, numberingAdjustment);
      var v569 = rightNum(v645, "", 8, tabIn$$3);
      var v447 = v569 + lineOfText$$1;
      var v160 = v447 + "\n";
      JAM.call(v159.write, v159, [v160], JAM.policy.p16);
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v646 = adjustNumbering(lineNum, numberingAdjustment);
        var v570 = rightNum(v646, "", 8, tabIn$$3);
        var v571 = complement(lineOfText$$1);
        var v448 = v570 + v571;
        var v162 = v448 + "\n";
        JAM.call(v161.write, v161, [v162], JAM.policy.p16);
        var v163 = outputWindow.document;
        JAM.call(v163.write, v163, ["\n"], JAM.policy.p9);
      }
    } else {
      var v180 = numberPosition$$1 == "right";
      if (v180) {
        var v165 = outputWindow.document;
        var v572 = lineOfText$$1;
        var v573 = adjustNumbering(i$$6, numberingAdjustment);
        var v449 = v572 + v573;
        var v166 = v449 + "\n";
        JAM.call(v165.write, v165, [v166], JAM.policy.p16);
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v574 = complement(lineOfText$$1);
          var v575 = adjustNumbering(i$$6, numberingAdjustment);
          var v450 = v574 + v575;
          var v168 = v450 + "\n";
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
            var v451 = complement(lineOfText$$1);
            var v176 = v451 + "\n";
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
    var v452 = basePerLine$$3 / groupSize$$3;
    var v189 = j$$8 <= v452;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        var v453 = i$$7 + k$$2;
        var v183 = v453 >= stopBase$$3;
        if (v183) {
          break;
        }
        var v454 = k$$2 + i$$7;
        var v184 = JAM.call(text$$13.charAt, text$$13, [v454], JAM.policy.p16);
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
      var v455 = basePerLine$$3 / groupSize$$3;
      v189 = j$$8 <= v455;
    }
    var v200 = numberPosition$$2 == "left";
    if (v200) {
      var v190 = outputWindow.document;
      var v576 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v456 = v576 + lineOfText$$2;
      var v191 = v456 + "\n";
      JAM.call(v190.write, v190, [v191], JAM.policy.p16);
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v457 = lineOfText$$2 + i$$7;
        var v193 = v457 + "\n";
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
  var v647 = sequence$$13.length;
  var v577 = v647 <= firstIndexToMutate;
  var v648 = !v577;
  if (v648) {
    v577 = lastIndexToMutate < 0;
  }
  var v458 = v577;
  var v578 = !v458;
  if (v578) {
    v458 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v202 = v458;
  if (v202) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    var v459 = Math.random();
    var v203 = v459 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v203], JAM.policy.p17);
    var v460 = randNum < firstIndexToMutate;
    var v579 = !v460;
    if (v579) {
      v460 = randNum > lastIndexToMutate;
    }
    var v204 = v460;
    if (v204) {
      numMut++;
      i$$8++;
      v210 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p17);
    needNewChar = true;
    for (;needNewChar;) {
      var v461 = Math.random();
      var v462 = components$$1.length;
      var v205 = v461 * v462;
      componentsIndex = JAM.call(Math.round, Math, [v205], JAM.policy.p17);
      var v463 = components$$1.length;
      var v206 = componentsIndex == v463;
      if (v206) {
        componentsIndex = 0;
      }
      var v464 = components$$1[componentsIndex];
      var v207 = v464 != currentChar;
      if (v207) {
        needNewChar = false;
      }
    }
    var v465 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v466 = components$$1[componentsIndex];
    var v208 = v465 + v466;
    var v467 = randNum + 1;
    var v468 = sequence$$13.length;
    var v209 = JAM.call(sequence$$13.substring, sequence$$13, [v467, v468], JAM.policy.p27);
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
    var v469 = Math.random();
    var v470 = components$$2.length;
    var v213 = v469 * v470;
    tempNum$$1 = JAM.call(Math.floor, Math, [v213], JAM.policy.p17);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v471 = sequence$$14.length;
    var v216 = v471 == 60;
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
    var v649 = sequence$$15.length;
    var v580 = v649 - lookAhead;
    var v581 = sequence$$15.length;
    var v472 = JAM.call(sequence$$15.substring, sequence$$15, [v580, v581], JAM.policy.p27);
    var v221 = v472 + sequence$$15;
    var v222 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v221 + v222;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  JAM.call(v224.write, v224, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v225 = outputWindow.document;
  var v650 = '<tr><td class="title" width="200px">' + "Site:";
  var v582 = v650 + '</td><td class="title">';
  var v473 = v582 + "Positions:";
  var v226 = v473 + "</td></tr>\n";
  JAM.call(v225.write, v225, [v226], JAM.policy.p16);
  var i$$9 = 0;
  var v474 = arrayOfItems.length;
  var v242 = i$$9 < v474;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v475 = arrayOfItems[i$$9];
    var v227 = JAM.call(v475.match, v475, [/\/.+\//], JAM.policy.p17);
    matchExp = v227 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v651 = arrayOfItems[i$$9];
    var v583 = JAM.call(v651.match, v651, [/\)\D*\d+/], JAM.policy.p17);
    var v476 = v583.toString();
    var v228 = JAM.call(v476.replace, v476, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v228);
    var v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
    for (;v234;) {
      var v229 = matchExp.lastIndex;
      matchPosition = v229 - cutDistance;
      var v477 = matchPosition >= lowerLimit;
      if (v477) {
        v477 = matchPosition < upperLimit;
      }
      var v232 = v477;
      if (v232) {
        timesFound++;
        var v230 = tempString$$1 + ", ";
        var v478 = matchPosition - shiftValue;
        var v231 = v478 + 1;
        tempString$$1 = v230 + v231;
      }
      var v479 = matchExp.lastIndex;
      var v584 = RegExp.lastMatch;
      var v480 = v584.length;
      var v233 = v479 - v480;
      matchExp.lastIndex = v233 + 1;
      v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
    }
    var v481 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p17);
    var v235 = v481 != -1;
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
    var v744 = '<tr><td class="' + backGroundClass;
    var v729 = v744 + '">';
    var v767 = arrayOfItems[i$$9];
    var v757 = JAM.call(v767.match, v767, [/\([^\(]+\)/], JAM.policy.p17);
    var v745 = v757.toString();
    var v730 = JAM.call(v745.replace, v745, [/\(|\)/g, ""], JAM.policy.p15);
    var v714 = v729 + v730;
    var v693 = v714 + '</td><td class="';
    var v652 = v693 + backGroundClass;
    var v585 = v652 + '">';
    var v482 = v585 + tempString$$1;
    var v241 = v482 + "</td></tr>\n";
    JAM.call(v240.write, v240, [v241], JAM.policy.p16);
    timesFound = 0;
    i$$9++;
    var v483 = arrayOfItems.length;
    v242 = i$$9 < v483;
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
  var v715 = '<tr><td class="title">' + "Pattern:";
  var v694 = v715 + '</td><td class="title">';
  var v653 = v694 + "Times found:";
  var v586 = v653 + '</td><td class="title">';
  var v484 = v586 + "Percentage:";
  var v246 = v484 + "</td></tr>\n";
  JAM.call(v245.write, v245, [v246], JAM.policy.p16);
  var i$$10 = 0;
  var v485 = arrayOfItems$$1.length;
  var v255 = i$$10 < v485;
  for (;v255;) {
    var tempNumber = 0;
    var v486 = arrayOfItems$$1[i$$10];
    var v247 = JAM.call(v486.match, v486, [/\/[^\/]+\//], JAM.policy.p17);
    var matchExp$$1 = v247 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v487 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p16);
    var v249 = v487 != -1;
    if (v249) {
      var v248 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p16);
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v587 = originalLength + 1;
    var v695 = arrayOfItems$$1[i$$10];
    var v654 = JAM.call(v695.match, v695, [/\d+/], JAM.policy.p17);
    var v588 = parseFloat(v654);
    var v488 = v587 - v588;
    var v252 = v488 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v489 = originalLength + 1;
      var v655 = arrayOfItems$$1[i$$10];
      var v589 = JAM.call(v655.match, v655, [/\d+/], JAM.policy.p17);
      var v490 = parseFloat(v589);
      var v251 = v489 - v490;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v768 = arrayOfItems$$1[i$$10];
    var v758 = JAM.call(v768.match, v768, [/\([^\(]+\)\b/], JAM.policy.p17);
    var v746 = v758.toString();
    var v731 = JAM.call(v746.replace, v746, [/\(|\)/g, ""], JAM.policy.p15);
    var v716 = "<tr><td>" + v731;
    var v696 = v716 + "</td><td>";
    var v656 = v696 + tempNumber;
    var v590 = v656 + "</td><td>";
    var v591 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p11);
    var v491 = v590 + v591;
    var v254 = v491 + "</td></tr>\n";
    JAM.call(v253.write, v253, [v254], JAM.policy.p16);
    i$$10++;
    var v492 = arrayOfItems$$1.length;
    v255 = i$$10 < v492;
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
  var v493 = sequence$$17.length;
  var v263 = v493 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v494 = Math.random();
    var v257 = v494 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v257], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v258 = randNum$$1 + 1;
    var v259 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v258, v259], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v495 = tempSeq.length;
    var v262 = v495 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      JAM.call(v260.write, v260, [v261], JAM.policy.p16);
      tempSeq = "";
    }
    var v496 = sequence$$17.length;
    v263 = v496 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  JAM.call(v264.write, v264, [v265], JAM.policy.p16);
  return true;
}
function genbankFeat(theDocument) {
  JAM.startProfile('compute');

  var maxInput$$3 = 1E6;
  var v497 = testScript();
  var v266 = v497 == false;
  if (v266) {
    return false;
  }
  var v747 = theDocument.forms;
  var v732 = v747[0];
  var v717 = v732.elements;
  var v697 = v717[0];
  var v657 = checkFormElement(v697);
  var v592 = v657 == false;
  var v659 = !v592;
  if (v659) {
    var v759 = theDocument.forms;
    var v748 = v759[0];
    var v733 = v748.elements;
    var v718 = v733[0];
    var v698 = v718.value;
    var v658 = verifyGenBankFeat(v698);
    v592 = v658 == false;
  }
  var v498 = v592;
  var v594 = !v498;
  if (v594) {
    var v749 = theDocument.forms;
    var v734 = v749[0];
    var v719 = v734.elements;
    var v699 = v719[0];
    var v660 = v699.value;
    var v593 = checkTextLength(v660, maxInput$$3);
    v498 = v593 == false;
  }
  var v267 = v498;
  if (v267) {
    return false;
  }
  openWindow("GenBank Feature Extractor");
  openPre();
  var v700 = theDocument.forms;
  var v661 = v700[0];
  var v595 = v661.elements;
  var v499 = v595[0];
  var v268 = v499.value;
  var v735 = theDocument.forms;
  var v720 = v735[0];
  var v701 = v720.elements;
  var v662 = v701[4];
  var v596 = v662.options;
  var v736 = theDocument.forms;
  var v721 = v736[0];
  var v702 = v721.elements;
  var v663 = v702[4];
  var v597 = v663.selectedIndex;
  var v500 = v596[v597];
  var v269 = v500.value;
  genBankFeatExtract(v268, v269);
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function genBankFeatExtract(genBankFile$$2, outputType) {
  var v270 = "_" + genBankFile$$2;
  genBankFile$$2 = v270 + "_";
  var recordArray = JAM.call(genBankFile$$2.split, genBankFile$$2, [/LOCUS\s\s\s[^\f\n\r]*/m], JAM.policy.p17);
  var i$$11 = 1;
  var v501 = recordArray.length;
  var v279 = i$$11 < v501;
  for (;v279;) {
    var v271 = recordArray[i$$11];
    var mainArray = JAM.call(v271.split, v271, [/DEFINITION|ACCESSION|FEATURES|ORIGIN[^\f\n\r]*/], JAM.policy.p17);
    var v598 = mainArray[1];
    var v502 = JAM.call(v598.replace, v598, [/[\f\n\r\t]+$/g, ""], JAM.policy.p15);
    var v272 = filterFastaTitle(v502);
    var title$$9 = v272 + "\n";
    var v273 = mainArray[4];
    var dnaSequenceArray = JAM.call(v273.split, v273, [/\/{2}/], JAM.policy.p17);
    var v274 = outputWindow.document;
    var v275 = title$$9 + "\n";
    JAM.call(v274.write, v274, [v275], JAM.policy.p16);
    var v503 = dnaSequenceArray.length;
    var v276 = v503 == 1;
    if (v276) {
      alert("The entire GenBank file may not have been processed.");
      outputWindow.focus();
    }
    var v277 = dnaSequenceArray[0];
    var dnaSequence$$3 = removeNonDna(v277);
    var v278 = mainArray[3];
    var featureArray = JAM.call(v278.split, v278, [/[\f\n\r] {5,12}\b/], JAM.policy.p17);
    prepareFeatures(featureArray, dnaSequence$$3, outputType);
    i$$11++;
    var v504 = recordArray.length;
    v279 = i$$11 < v504;
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
  var v505 = arrayOfFeatures.length;
  var v289 = i$$12 < v505;
  for (;v289;) {
    var v280 = arrayOfFeatures[i$$12];
    var v804 = JAM.call(v280.replace, v280, [/[\[\]\*]/g, ""], JAM.policy.p15);
    arrayOfFeatures[i$$12] = v804;
    var v506 = arrayOfFeatures[i$$12];
    var v281 = JAM.call(v506.match, v506, [/[^ \f\n\r\t\v]+ /], JAM.policy.p17);
    featureTitle = v281.toString();
    theTitle = new RegExp(featureTitle);
    var v282 = arrayOfFeatures[i$$12];
    removedTitle = JAM.call(v282.replace, v282, [theTitle, ""], JAM.policy.p19);
    var v599 = arrayOfFeatures[i$$12];
    var v507 = JAM.call(v599.search, v599, [/\/[^\f\n\r]+/], JAM.policy.p17);
    var v284 = v507 != -1;
    if (v284) {
      var v508 = arrayOfFeatures[i$$12];
      var v283 = JAM.call(v508.match, v508, [/\/[^\f\n\r]+/], JAM.policy.p17);
      firstQualifier = v283.toString();
    } else {
      firstQualifier = "/no qualifier supplied";
    }
    position = JAM.call(removedTitle.split, removedTitle, [/\//], JAM.policy.p17);
    var v285 = position[0];
    positionNoSpace = JAM.call(v285.replace, v285, [/\s{2,}/g, " "], JAM.policy.p15);
    var v286 = outputWindow.document;
    var v664 = filterFastaTitle(featureTitle);
    var v600 = "&gt;" + v664;
    var v601 = filterFastaTitle(firstQualifier);
    var v509 = v600 + v601;
    var v287 = v509 + "\n";
    JAM.call(v286.write, v286, [v287], JAM.policy.p16);
    printFeature(positionNoSpace, dnaSequence$$4, outputType$$1);
    featureFound = true;
    var v288 = outputWindow.document;
    JAM.call(v288.write, v288, ["\n\n"], JAM.policy.p9);
    i$$12++;
    var v510 = arrayOfFeatures.length;
    v289 = i$$12 < v510;
  }
  var v291 = featureFound == false;
  if (v291) {
    var v290 = outputWindow.document;
    JAM.call(v290.write, v290, ["There were no features found or there was a problem reading the feature information."], JAM.policy.p9);
  }
  return true;
}
function printFeature(featurePos, dnaSequence$$5, outputType$$2) {
  var feature$$4;
  featurePos = JAM.call(featurePos.replace, featurePos, [/<|>/g, ""], JAM.policy.p15);
  var v665 = JAM.call(featurePos.search, featurePos, [/[^a-z\d\.\(\)\,\s]/], JAM.policy.p17);
  var v602 = v665 != -1;
  var v667 = !v602;
  if (v667) {
    var v666 = JAM.call(featurePos.search, featurePos, [/one/], JAM.policy.p17);
    v602 = v666 != -1;
  }
  var v511 = v602;
  var v604 = !v511;
  if (v604) {
    var v603 = JAM.call(featurePos.search, featurePos, [/order/], JAM.policy.p17);
    v511 = v603 != -1;
  }
  var v310 = v511;
  if (v310) {
    var v292 = outputWindow.document;
    JAM.call(v292.write, v292, ["This feature specifies a sequence that cannot be represented:\n"], JAM.policy.p9);
    var v293 = outputWindow.document;
    JAM.call(v293.write, v293, [featurePos], JAM.policy.p16);
  } else {
    var newFeaturePos = JAM.call(featurePos.replace, featurePos, [/\)/g, ""], JAM.policy.p15);
    var v512 = JAM.call(newFeaturePos.search, newFeaturePos, [/complement/], JAM.policy.p17);
    var v294 = v512 != -1;
    if (v294) {
      feature$$4 = new Feature("complement");
    } else {
      feature$$4 = new Feature("direct");
    }
    var posArray = JAM.call(newFeaturePos.split, newFeaturePos, [/\(/], JAM.policy.p17);
    var v295 = posArray.length;
    var last = v295 - 1;
    var pairString = posArray[last];
    var pairArray = JAM.call(pairString.split, pairString, [/\,/], JAM.policy.p17);
    var digitArray = new Array;
    var realStart = 0;
    var realStop = 0;
    var j$$10 = 0;
    var v513 = pairArray.length;
    var v309 = j$$10 < v513;
    for (;v309;) {
      var v296 = pairArray[j$$10];
      digitArray = JAM.call(v296.split, v296, [/\.\./], JAM.policy.p17);
      var v514 = digitArray.length;
      var v297 = v514 == 1;
      if (v297) {
        digitArray[1] = digitArray[0];
      }
      realStart = digitArray[0];
      realStop = digitArray[1];
      realStop = JAM.call(realStop.replace, realStop, [/\D/g, ""], JAM.policy.p15);
      realStart = JAM.call(realStart.replace, realStart, [/\D/g, ""], JAM.policy.p15);
      var v605 = JAM.call(realStart.search, realStart, [/\d/], JAM.policy.p17);
      var v515 = v605 == -1;
      var v607 = !v515;
      if (v607) {
        var v606 = JAM.call(realStop.search, realStop, [/\d/], JAM.policy.p17);
        v515 = v606 == -1;
      }
      var v299 = v515;
      if (v299) {
        var v298 = outputWindow.document;
        JAM.call(v298.write, v298, ["There was a problem with this feature (one of the range values was missing)."], JAM.policy.p9);
        return true;
      }
      var v300 = parseInt(realStart);
      realStart = v300 - 1;
      realStop = parseInt(realStop);
      var v302 = realStart > realStop;
      if (v302) {
        var v301 = outputWindow.document;
        JAM.call(v301.write, v301, ["There was a problem with this feature (the end position was before the start position)."], JAM.policy.p9);
        return true;
      }
      var v608 = dnaSequence$$5.length;
      var v516 = realStart > v608;
      var v610 = !v516;
      if (v610) {
        var v609 = dnaSequence$$5.length;
        v516 = realStop > v609;
      }
      var v308 = v516;
      if (v308) {
        var v303 = outputWindow.document;
        JAM.call(v303.write, v303, ["The entire GenBank file was not processed, so this feature cannot be properly shown."], JAM.policy.p9);
        return true;
      } else {
        var v307 = outputType$$2 == "separated";
        if (v307) {
          var v304 = JAM.call(dnaSequence$$5.substring, dnaSequence$$5, [realStart, realStop], JAM.policy.p27);
          JAM.call(feature$$4.addFragment, feature$$4, [v304], JAM.policy.p16);
        } else {
          var v517 = feature$$4.lastAdded;
          var v305 = JAM.call(dnaSequence$$5.substring, dnaSequence$$5, [v517, realStart], JAM.policy.p27);
          JAM.call(feature$$4.addFragment, feature$$4, [v305], JAM.policy.p16);
          var v518 = JAM.call(dnaSequence$$5.substring, dnaSequence$$5, [realStart, realStop], JAM.policy.p27);
          var v306 = v518.toUpperCase();
          JAM.call(feature$$4.addFragment, feature$$4, [v306], JAM.policy.p16);
          feature$$4.lastAdded = realStop;
        }
      }
      j$$10++;
      var v519 = pairArray.length;
      v309 = j$$10 < v519;
    }
    feature$$4.writeFeature();
  }
  return true;
}
function writeFeature() {
  var v520 = this.strand;
  var v315 = v520 == "complement";
  if (v315) {
    var v311 = outputWindow.document;
    var v703 = this.fragments;
    var v668 = JAM.call(v703.join, v703, [""], JAM.policy.p9);
    var v611 = complement(v668);
    var v521 = reverse(v611);
    var v312 = addReturns(v521);
    JAM.call(v311.write, v311, [v312], JAM.policy.p16);
  } else {
    var v313 = outputWindow.document;
    var v612 = this.fragments;
    var v522 = JAM.call(v612.join, v612, [""], JAM.policy.p9);
    var v314 = addReturns(v522);
    JAM.call(v313.write, v313, [v314], JAM.policy.p16);
  }
  return;
}
function addFragment(sequence$$18) {
  var v316 = this.fragments;
  JAM.call(v316.push, v316, [sequence$$18], JAM.policy.p16);
  return;
}
function Feature(strand) {
  this.strand = strand;
  var v805 = new Array;
  this.fragments = v805;
  this.lastAdded = 0;
  return;
}
new Feature;
var v317 = Feature.prototype;
v317.writeFeature = writeFeature;
var v318 = Feature.prototype;
v318.addFragment = addFragment;
JAM.set(document, "onload", v2);
var v319 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9);
JAM.set(v319, "onclick", v3);
var v320 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9);
JAM.set(v320, "onclick", v4)

JAM.stopProfile('load');
