function v4() {
  var v618 = document.forms;
  var v526 = v618[0];
  var v312 = v526.elements;
  var v5 = v312[0];
  v5.value = " ";
  var v619 = document.forms;
  var v527 = v619[0];
  var v313 = v527.elements;
  var v6 = v313[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    identSim(document);
  } catch (e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7);
  }
  return;
}
function v2() {
  var v314 = document.main_form;
  var v8 = v314.main_submit;
  v8.focus();
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
  var v9 = arrayOfSequences[0];
  var lengthOfAlign = v9.length;
  var v315 = arrayOfSequences.length;
  var v10 = v315 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v316 = arrayOfTitles.length;
  var v12 = i$$1 < v316;
  for (;v12;) {
    var v681 = arrayOfTitles[i$$1];
    var v620 = JAM.call(v681.search, v681, [/\S/], JAM.policy.p15);
    var v528 = v620 == -1;
    var v622 = !v528;
    if (v622) {
      var v682 = arrayOfSequences[i$$1];
      var v621 = JAM.call(v682.search, v682, [/\S/], JAM.policy.p15);
      v528 = v621 == -1;
    }
    var v317 = v528;
    var v530 = !v317;
    if (v530) {
      var v623 = arrayOfSequences[i$$1];
      var v529 = v623.length;
      v317 = v529 != lengthOfAlign;
    }
    var v11 = v317;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v318 = arrayOfTitles.length;
    v12 = i$$1 < v318;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v722 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p15);
  var v683 = v722 == -1;
  var v724 = !v683;
  if (v724) {
    var v723 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p15);
    v683 = v723 == -1;
  }
  var v624 = v683;
  var v685 = !v624;
  if (v685) {
    var v684 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p15);
    v624 = v684 == -1;
  }
  var v531 = v624;
  var v626 = !v531;
  if (v626) {
    var v625 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p15);
    v531 = v625 == -1;
  }
  var v319 = v531;
  var v533 = !v319;
  if (v533) {
    var v532 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p15);
    v319 = v532 == -1;
  }
  var v13 = v319;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v534 = formElement.value;
  var v320 = JAM.call(v534.search, v534, [/\S/], JAM.policy.p15);
  var v14 = v320 == -1;
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
  var v321 = arrayOfPatterns.length;
  var v17 = z$$2 < v321;
  for (;v17;) {
    var v535 = arrayOfPatterns[z$$2];
    var v322 = JAM.call(v535.search, v535, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p15);
    var v15 = v322 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v536 = arrayOfPatterns[z$$2];
    var v323 = moreExpressionCheck(v536);
    var v16 = v323 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v324 = arrayOfPatterns.length;
    v17 = z$$2 < v324;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v325 = arrayOfPatterns.length;
  var v23 = j < v325;
  for (;v23;) {
    var v537 = arrayOfPatterns[j];
    var v326 = JAM.call(v537.match, v537, [/\/.+\//], JAM.policy.p15);
    var v20 = v326 + "gi";
    if (JAM.isEval(eval)) {
      var v811 = eval("introspect(JAM.policy.pFull) { " + v20 + " }")
    } else {
      var v811 = JAM.call(eval, null, [v20])
    }
    geneticCodeMatchExp[j] = v811;
    var v327 = arrayOfPatterns[j];
    var v21 = JAM.call(v327.match, v327, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v812 = v21.toString();
    geneticCodeMatchResult[j] = v812;
    var v22 = geneticCodeMatchResult[j];
    var v813 = JAM.call(v22.replace, v22, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v813;
    j++;
    var v328 = arrayOfPatterns.length;
    v23 = j < v328;
  }
  var i$$2 = 0;
  var v538 = testSequence.length;
  var v329 = v538 - 3;
  var v30 = i$$2 <= v329;
  for (;v30;) {
    var v24 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v24], JAM.policy.p16);
    j = 0;
    var v330 = geneticCodeMatchExp.length;
    var v28 = j < v330;
    for (;v28;) {
      var v539 = geneticCodeMatchExp[j];
      var v331 = JAM.call(codon.search, codon, [v539], JAM.policy.p17);
      var v27 = v331 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v332 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v332 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v333 = geneticCodeMatchExp.length;
      v28 = j < v333;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v540 = testSequence.length;
    var v334 = v540 - 3;
    v30 = i$$2 <= v334;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v335 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v335;
  for (;v32;) {
    var v541 = arrayOfPatterns$$1[z$$3];
    var v336 = JAM.call(v541.search, v541, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p15);
    var v31 = v336 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v337 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v337;
  }
  var i$$3 = 0;
  var v338 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v338;
  for (;v36;) {
    var v542 = arrayOfPatterns$$1[i$$3];
    var v339 = "[" + v542;
    var v33 = v339 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v340 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v340;
    for (;v35;) {
      var v543 = arrayOfPatterns$$1[j$$1];
      var v341 = JAM.call(v543.search, v543, [re], JAM.policy.p17);
      var v34 = v341 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v342 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v342;
    }
    i$$3++;
    var v343 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v343;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v344 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v344;
  for (;v39;) {
    var v544 = arrayOfPatterns$$2[z$$4];
    var v345 = JAM.call(v544.search, v544, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p15);
    var v37 = v345 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v545 = arrayOfPatterns$$2[z$$4];
    var v346 = moreExpressionCheck(v545);
    var v38 = v346 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v347 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v347;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v627 = getSequenceFromFasta(text$$7);
  var v546 = JAM.call(v627.replace, v627, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v348 = v546.length;
  var v41 = v348 > maxInput;
  if (v41) {
    var v349 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v349 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v350 = text$$8.length;
  var v43 = v350 > maxInput$$1;
  if (v43) {
    var v351 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v351 + " characters.";
    alert(v42);
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
  var v44 = outputWindow.document;
  JAM.call(v44.write, v44, ["</form>"], JAM.policy.p10);
  return true;
}
function closePre() {
  var v45 = outputWindow.document;
  JAM.call(v45.write, v45, ["</div>"], JAM.policy.p10);
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</pre>\n"], JAM.policy.p10);
  return;
}
function closeTextArea() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</textarea>"], JAM.policy.p10);
  return true;
}
function closeWindow() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</body>\n</html>\n"], JAM.policy.p10);
  outputWindow.status = "Done.";
  var v49 = outputWindow.document;
  v49.close();
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
  var v352 = alignArray.length;
  var v50 = v352 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v353 = alignArray.length;
  var v52 = i$$4 < v353;
  for (;v52;) {
    var v547 = alignArray[i$$4];
    var v354 = JAM.call(v547.search, v547, [/[^\s]+\s/], JAM.policy.p15);
    var v51 = v354 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v355 = alignArray.length;
    v52 = i$$4 < v355;
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
  var v356 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v55 = v356 != -1;
  if (v55) {
    var v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    for (;v54;) {
      var v53 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v53], JAM.policy.p17);
      v54 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p17);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v357 = sequence$$2.length;
  var v56 = "&gt;results for " + v357;
  var stringToReturn = v56 + " residue sequence ";
  var v358 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p15);
  var v58 = v358 != -1;
  if (v58) {
    var v359 = stringToReturn + '"';
    var v57 = v359 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v360 = stringToReturn + ' starting "';
  var v361 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v59 = v360 + v361;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v362 = sequenceOne.length;
  var v60 = "Search results for " + v362;
  var stringToReturn$$1 = v60 + " residue sequence ";
  var v363 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p15);
  var v62 = v363 != -1;
  if (v62) {
    var v364 = stringToReturn$$1 + '"';
    var v61 = v364 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v365 = stringToReturn$$1 + ' starting "';
  var v366 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v63 = v365 + v366;
  stringToReturn$$1 = v63 + '"\n';
  var v367 = stringToReturn$$1 + "and ";
  var v368 = sequenceTwo.length;
  var v64 = v367 + v368;
  stringToReturn$$1 = v64 + " residue sequence ";
  var v369 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p15);
  var v66 = v369 != -1;
  if (v66) {
    var v370 = stringToReturn$$1 + '"';
    var v65 = v370 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v371 = stringToReturn$$1 + ' starting "';
  var v372 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v67 = v371 + v372;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v373 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v373;
  for (;v71;) {
    var v548 = arrayOfPatterns$$3[j$$2];
    var v374 = JAM.call(v548.match, v548, [/\/.+\//], JAM.policy.p15);
    var v70 = v374 + "gi";
    if (JAM.isEval(eval)) {
      var v814 = eval("introspect(JAM.policy.pFull) { " + v70 + " }")
    } else {
      var v814 = JAM.call(eval, null, [v70])
    }
    geneticCodeMatchExp$$1[j$$2] = v814;
    j$$2++;
    var v375 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v375;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v376 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v376;
  for (;v75;) {
    var v377 = arrayOfPatterns$$4[j$$3];
    var v73 = JAM.call(v377.match, v377, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v815 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v815;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v816 = JAM.call(v74.replace, v74, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v816;
    j$$3++;
    var v378 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v378;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v379 = sequence$$3.length;
  var v76 = "Results for " + v379;
  var stringToReturn$$2 = v76 + " residue sequence ";
  var v380 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p15);
  var v78 = v380 != -1;
  if (v78) {
    var v381 = stringToReturn$$2 + '"';
    var v77 = v381 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v382 = stringToReturn$$2 + ' starting "';
  var v383 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v79 = v382 + v383;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v549 = "Results for " + topology;
  var v384 = v549 + " ";
  var v385 = sequence$$4.length;
  var v81 = v384 + v385;
  var stringToReturn$$3 = v81 + " residue sequence ";
  var v386 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p15);
  var v83 = v386 != -1;
  if (v83) {
    var v387 = stringToReturn$$3 + '"';
    var v82 = v387 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v388 = stringToReturn$$3 + ' starting "';
  var v389 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v84 = v388 + v389;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v390 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v390;
  var stringToReturn$$4 = v86 + " residue sequence ";
  var v391 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p15);
  var v88 = v391 != -1;
  if (v88) {
    var v392 = stringToReturn$$4 + '"';
    var v87 = v392 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v393 = stringToReturn$$4 + ' starting "';
  var v394 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v89 = v393 + v394;
  stringToReturn$$4 = v89 + '"\n';
  var v395 = stringToReturn$$4 + "and ";
  var v396 = sequenceTwo$$1.length;
  var v90 = v395 + v396;
  stringToReturn$$4 = v90 + " residue sequence ";
  var v397 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p15);
  var v92 = v397 != -1;
  if (v92) {
    var v398 = stringToReturn$$4 + '"';
    var v91 = v398 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v399 = stringToReturn$$4 + ' starting "';
  var v400 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v93 = v399 + v400;
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
    var v401 = Math.random();
    var v402 = components.length;
    var v95 = v401 * v402;
    tempNum = JAM.call(Math.floor, Math, [v95], JAM.policy.p15);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p10);
}
function getSequenceFromFasta(sequenceRecord) {
  var v403 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v97 = v403 != -1;
  if (v97) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v404 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v99 = v404 != -1;
  if (v99) {
    var v98 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
    fastaTitle = v98.toString();
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p16);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p16);
  }
  return fastaTitle;
}
function moreExpressionCheck(expressionToCheck) {
  var v789 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p15);
  var v782 = v789 != -1;
  var v791 = !v782;
  if (v791) {
    var v790 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p15);
    v782 = v790 != -1;
  }
  var v773 = v782;
  var v784 = !v773;
  if (v784) {
    var v783 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p15);
    v773 = v783 != -1;
  }
  var v764 = v773;
  var v775 = !v764;
  if (v775) {
    var v774 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p15);
    v764 = v774 != -1;
  }
  var v753 = v764;
  var v766 = !v753;
  if (v766) {
    var v765 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p15);
    v753 = v765 != -1;
  }
  var v741 = v753;
  var v755 = !v741;
  if (v755) {
    var v754 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p15);
    v741 = v754 != -1;
  }
  var v725 = v741;
  var v743 = !v725;
  if (v743) {
    var v742 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p15);
    v725 = v742 != -1;
  }
  var v686 = v725;
  var v727 = !v686;
  if (v727) {
    var v726 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p15);
    v686 = v726 != -1;
  }
  var v628 = v686;
  var v688 = !v628;
  if (v688) {
    var v687 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p15);
    v628 = v687 != -1;
  }
  var v550 = v628;
  var v630 = !v550;
  if (v630) {
    var v629 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p15);
    v550 = v629 != -1;
  }
  var v405 = v550;
  var v552 = !v405;
  if (v552) {
    var v551 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p15);
    v405 = v551 != -1;
  }
  var v100 = v405;
  if (v100) {
    return false;
  }
  return true;
}
function openForm() {
  var v101 = outputWindow.document;
  JAM.call(v101.write, v101, ['<form action="">\n'], JAM.policy.p10);
  return true;
}
function openPre() {
  var v102 = outputWindow.document;
  JAM.call(v102.write, v102, ["<pre>"], JAM.policy.p10);
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ['<div class="pre">'], JAM.policy.p10);
  return;
}
function openTextArea() {
  var v104 = outputWindow.document;
  JAM.call(v104.write, v104, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p10);
  return true;
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v105 = outputWindow.document;
  var v631 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v553 = v631 + "<head>\n";
  var v406 = v553 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v406 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v105.write, v105, [v106], JAM.policy.p17);
  if (isColor) {
    var v107 = outputWindow.document;
    var v804 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v800 = v804 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v796 = v800 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v792 = v796 + "div.info {font-weight: bold}\n";
    var v785 = v792 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v776 = v785 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v767 = v776 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v756 = v767 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v744 = v756 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v728 = v744 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v689 = v728 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v632 = v689 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v554 = v632 + "td.many {color: #000000}\n";
    var v407 = v554 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v407 + "</style>\n";
    JAM.call(v107.write, v107, [v108], JAM.policy.p17);
  } else {
    var v109 = outputWindow.document;
    var v808 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v805 = v808 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v801 = v805 + "div.title {display: none}\n";
    var v797 = v801 + "div.info {font-weight: bold}\n";
    var v793 = v797 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v786 = v793 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v777 = v786 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v768 = v777 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v757 = v768 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v745 = v757 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v729 = v745 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v690 = v729 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v633 = v690 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v555 = v633 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v408 = v555 + "img {display: none}\n";
    var v110 = v408 + "</style>\n";
    JAM.call(v109.write, v109, [v110], JAM.policy.p17);
  }
  var v111 = outputWindow.document;
  var v634 = "</head>\n" + '<body class="main">\n';
  var v556 = v634 + '<div class="title">';
  var v409 = v556 + title$$6;
  var v112 = v409 + " results</div>\n";
  JAM.call(v111.write, v111, [v112], JAM.policy.p17);
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
  var v113 = outputWindow.document;
  var v635 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v557 = v635 + "<head>\n";
  var v410 = v557 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v410 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v113.write, v113, [v114], JAM.policy.p17);
  if (isBackground) {
    var v115 = outputWindow.document;
    var v806 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v802 = v806 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v798 = v802 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v794 = v798 + "div.info {font-weight: bold}\n";
    var v787 = v794 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v778 = v787 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v769 = v778 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v758 = v769 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v746 = v758 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v730 = v746 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v691 = v730 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v636 = v691 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v558 = v636 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v411 = v558 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v411 + "</style>\n";
    JAM.call(v115.write, v115, [v116], JAM.policy.p17);
  } else {
    var v117 = outputWindow.document;
    var v810 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v809 = v810 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v807 = v809 + "div.title {display: none}\n";
    var v803 = v807 + "div.info {font-weight: bold}\n";
    var v799 = v803 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v795 = v799 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v788 = v795 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v779 = v788 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v770 = v779 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v759 = v770 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v747 = v759 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v731 = v747 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v692 = v731 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v637 = v692 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v559 = v637 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v412 = v559 + "img {display: none}\n";
    var v118 = v412 + "</style>\n";
    JAM.call(v117.write, v117, [v118], JAM.policy.p17);
  }
  var v119 = outputWindow.document;
  var v638 = "</head>\n" + '<body class="main">\n';
  var v560 = v638 + '<div class="title">';
  var v413 = v560 + title$$8;
  var v120 = v413 + " results</div>\n";
  JAM.call(v119.write, v119, [v120], JAM.policy.p17);
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
  var v414 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p15);
  var v121 = v414 != -1;
  if (v121) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p15);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p10);
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p17);
  var v415 = testArray[0];
  var v125 = v415 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v416 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v126 = v416 == -1;
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
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p16);
  var v128 = testString != "1X2X3X";
  if (v128) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false;
  }
  var testNum = 2489.8237;
  var v417 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9);
  var v129 = v417 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v418 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9);
  var v130 = v418 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v419 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p15);
  var v131 = v419 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v693 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p15);
  var v639 = v693 == -1;
  var v695 = !v639;
  if (v695) {
    var v694 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p15);
    v639 = v694 == -1;
  }
  var v561 = v639;
  var v641 = !v561;
  if (v641) {
    var v640 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p15);
    v561 = v640 == -1;
  }
  var v420 = v561;
  var v563 = !v420;
  if (v563) {
    var v562 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p15);
    v420 = v562 == -1;
  }
  var v132 = v420;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v421 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p15);
  var v133 = v421 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v422 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v422 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v423 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p15);
  var v136 = v423 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v424 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p15);
  var v137 = v424 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v696 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p15);
  var v642 = v696 == -1;
  var v698 = !v642;
  if (v698) {
    var v697 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p15);
    v642 = v697 == -1;
  }
  var v564 = v642;
  var v644 = !v564;
  if (v644) {
    var v643 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p15);
    v564 = v643 == -1;
  }
  var v425 = v564;
  var v566 = !v425;
  if (v566) {
    var v565 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p15);
    v425 = v565 == -1;
  }
  var v138 = v425;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v699 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p15);
  var v645 = v699 == -1;
  var v701 = !v645;
  if (v701) {
    var v700 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p15);
    v645 = v700 == -1;
  }
  var v567 = v645;
  var v647 = !v567;
  if (v647) {
    var v646 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p15);
    v567 = v646 == -1;
  }
  var v426 = v567;
  var v569 = !v426;
  if (v569) {
    var v568 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p15);
    v426 = v568 == -1;
  }
  var v139 = v426;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v427 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p15);
  var v140 = v427 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v702 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p15);
  var v648 = v702 == -1;
  var v704 = !v648;
  if (v704) {
    var v703 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p15);
    v648 = v703 == -1;
  }
  var v570 = v648;
  var v650 = !v570;
  if (v650) {
    var v649 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p15);
    v570 = v649 == -1;
  }
  var v428 = v570;
  var v572 = !v428;
  if (v572) {
    var v571 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p15);
    v428 = v571 == -1;
  }
  var v141 = v428;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v429 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p15);
  var v142 = v429 == -1;
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
    var v430 = basePerLine / groupSize;
    var v146 = j$$6 <= v430;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v431 = k + i$$5;
        var v144 = JAM.call(text$$10.charAt, text$$10, [v431], JAM.policy.p17);
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v432 = basePerLine / groupSize;
      v146 = j$$6 <= v432;
    }
    var v147 = outputWindow.document;
    var v148 = lineOfText + "\n";
    JAM.call(v147.write, v147, [v148], JAM.policy.p17);
    lineOfText = "";
    v149 = i$$5 < stopBase;
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
    var v433 = adjustment < 0;
    if (v433) {
      v433 = adjusted >= 0;
    }
    var v150 = v433;
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
    var v434 = basePerLine$$2 / groupSize$$2;
    var v159 = j$$7 <= v434;
    for (;v159;) {
      var v154 = k$$1 < groupSize$$2;
      for (;v154;) {
        var v435 = i$$6 + k$$1;
        var v151 = v435 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v152 = lineOfText$$1;
        var v436 = k$$1 + i$$6;
        var v153 = JAM.call(text$$12.charAt, text$$12, [v436], JAM.policy.p17);
        lineOfText$$1 = v152 + v153;
        k$$1 = k$$1 + 1;
        v154 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v157 = numberPosition$$1 == "above";
      if (v157) {
        var v155 = aboveNum;
        var v437 = adjustNumbering(i$$6, numberingAdjustment);
        var v156 = rightNum(v437, "", groupSize$$2, tabIn$$3);
        aboveNum = v155 + v156;
      }
      var v158 = i$$6 >= stopBase$$2;
      if (v158) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v438 = basePerLine$$2 / groupSize$$2;
      v159 = j$$7 <= v438;
    }
    var v182 = numberPosition$$1 == "left";
    if (v182) {
      var v160 = outputWindow.document;
      var v651 = adjustNumbering(lineNum, numberingAdjustment);
      var v573 = rightNum(v651, "", 8, tabIn$$3);
      var v439 = v573 + lineOfText$$1;
      var v161 = v439 + "\n";
      JAM.call(v160.write, v160, [v161], JAM.policy.p17);
      var v165 = strands$$1 == "two";
      if (v165) {
        var v162 = outputWindow.document;
        var v652 = adjustNumbering(lineNum, numberingAdjustment);
        var v574 = rightNum(v652, "", 8, tabIn$$3);
        var v575 = complement(lineOfText$$1);
        var v440 = v574 + v575;
        var v163 = v440 + "\n";
        JAM.call(v162.write, v162, [v163], JAM.policy.p17);
        var v164 = outputWindow.document;
        JAM.call(v164.write, v164, ["\n"], JAM.policy.p10);
      }
    } else {
      var v181 = numberPosition$$1 == "right";
      if (v181) {
        var v166 = outputWindow.document;
        var v576 = lineOfText$$1;
        var v577 = adjustNumbering(i$$6, numberingAdjustment);
        var v441 = v576 + v577;
        var v167 = v441 + "\n";
        JAM.call(v166.write, v166, [v167], JAM.policy.p17);
        var v171 = strands$$1 == "two";
        if (v171) {
          var v168 = outputWindow.document;
          var v578 = complement(lineOfText$$1);
          var v579 = adjustNumbering(i$$6, numberingAdjustment);
          var v442 = v578 + v579;
          var v169 = v442 + "\n";
          JAM.call(v168.write, v168, [v169], JAM.policy.p17);
          var v170 = outputWindow.document;
          JAM.call(v170.write, v170, ["\n"], JAM.policy.p10);
        }
      } else {
        var v180 = numberPosition$$1 == "above";
        if (v180) {
          var v172 = outputWindow.document;
          var v173 = aboveNum + "\n";
          JAM.call(v172.write, v172, [v173], JAM.policy.p17);
          var v174 = outputWindow.document;
          var v175 = lineOfText$$1 + "\n";
          JAM.call(v174.write, v174, [v175], JAM.policy.p17);
          var v179 = strands$$1 == "two";
          if (v179) {
            var v176 = outputWindow.document;
            var v443 = complement(lineOfText$$1);
            var v177 = v443 + "\n";
            JAM.call(v176.write, v176, [v177], JAM.policy.p17);
            var v178 = outputWindow.document;
            JAM.call(v178.write, v178, ["\n"], JAM.policy.p10);
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
    var v444 = basePerLine$$3 / groupSize$$3;
    var v190 = j$$8 <= v444;
    for (;v190;) {
      var v186 = k$$2 < groupSize$$3;
      for (;v186;) {
        var v445 = i$$7 + k$$2;
        var v184 = v445 >= stopBase$$3;
        if (v184) {
          break;
        }
        var v446 = k$$2 + i$$7;
        var v185 = JAM.call(text$$13.charAt, text$$13, [v446], JAM.policy.p17);
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
      var v447 = basePerLine$$3 / groupSize$$3;
      v190 = j$$8 <= v447;
    }
    var v201 = numberPosition$$2 == "left";
    if (v201) {
      var v191 = outputWindow.document;
      var v580 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v448 = v580 + lineOfText$$2;
      var v192 = v448 + "\n";
      JAM.call(v191.write, v191, [v192], JAM.policy.p17);
    } else {
      var v200 = numberPosition$$2 == "right";
      if (v200) {
        var v193 = outputWindow.document;
        var v449 = lineOfText$$2 + i$$7;
        var v194 = v449 + "\n";
        JAM.call(v193.write, v193, [v194], JAM.policy.p17);
      } else {
        var v199 = numberPosition$$2 == "above";
        if (v199) {
          var v195 = outputWindow.document;
          var v196 = aboveNum$$1 + "\n";
          JAM.call(v195.write, v195, [v196], JAM.policy.p17);
          var v197 = outputWindow.document;
          var v198 = lineOfText$$2 + "\n";
          JAM.call(v197.write, v197, [v198], JAM.policy.p17);
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
  var v653 = sequence$$13.length;
  var v581 = v653 <= firstIndexToMutate;
  var v654 = !v581;
  if (v654) {
    v581 = lastIndexToMutate < 0;
  }
  var v450 = v581;
  var v582 = !v450;
  if (v582) {
    v450 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v203 = v450;
  if (v203) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v211 = i$$8 < numMut;
  for (;v211;) {
    maxNum = sequence$$13.length;
    var v451 = Math.random();
    var v204 = v451 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v204], JAM.policy.p15);
    var v452 = randNum < firstIndexToMutate;
    var v583 = !v452;
    if (v583) {
      v452 = randNum > lastIndexToMutate;
    }
    var v205 = v452;
    if (v205) {
      numMut++;
      i$$8++;
      v211 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p15);
    needNewChar = true;
    for (;needNewChar;) {
      var v453 = Math.random();
      var v454 = components$$1.length;
      var v206 = v453 * v454;
      componentsIndex = JAM.call(Math.round, Math, [v206], JAM.policy.p15);
      var v455 = components$$1.length;
      var v207 = componentsIndex == v455;
      if (v207) {
        componentsIndex = 0;
      }
      var v456 = components$$1[componentsIndex];
      var v208 = v456 != currentChar;
      if (v208) {
        needNewChar = false;
      }
    }
    var v457 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v458 = components$$1[componentsIndex];
    var v209 = v457 + v458;
    var v459 = randNum + 1;
    var v460 = sequence$$13.length;
    var v210 = JAM.call(sequence$$13.substring, sequence$$13, [v459, v460], JAM.policy.p27);
    sequence$$13 = v209 + v210;
    i$$8++;
    v211 = i$$8 < numMut;
  }
  var v212 = outputWindow.document;
  var v213 = addReturns(sequence$$13);
  JAM.call(v212.write, v212, [v213], JAM.policy.p17);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v218 = j$$9 < lengthOut$$1;
  for (;v218;) {
    var v461 = Math.random();
    var v462 = components$$2.length;
    var v214 = v461 * v462;
    tempNum$$1 = JAM.call(Math.floor, Math, [v214], JAM.policy.p15);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v463 = sequence$$14.length;
    var v217 = v463 == 60;
    if (v217) {
      var v215 = outputWindow.document;
      var v216 = sequence$$14 + "\n";
      JAM.call(v215.write, v215, [v216], JAM.policy.p17);
      sequence$$14 = "";
    }
    j$$9++;
    v218 = j$$9 < lengthOut$$1;
  }
  var v219 = outputWindow.document;
  var v220 = sequence$$14 + "\n";
  JAM.call(v219.write, v219, [v220], JAM.policy.p17);
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
    var v655 = sequence$$15.length;
    var v584 = v655 - lookAhead;
    var v585 = sequence$$15.length;
    var v464 = JAM.call(sequence$$15.substring, sequence$$15, [v584, v585], JAM.policy.p27);
    var v222 = v464 + sequence$$15;
    var v223 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v222 + v223;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v225 = outputWindow.document;
  JAM.call(v225.write, v225, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p10);
  var v226 = outputWindow.document;
  var v656 = '<tr><td class="title" width="200px">' + "Site:";
  var v586 = v656 + '</td><td class="title">';
  var v465 = v586 + "Positions:";
  var v227 = v465 + "</td></tr>\n";
  JAM.call(v226.write, v226, [v227], JAM.policy.p17);
  var i$$9 = 0;
  var v466 = arrayOfItems.length;
  var v243 = i$$9 < v466;
  for (;v243;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v467 = arrayOfItems[i$$9];
    var v228 = JAM.call(v467.match, v467, [/\/.+\//], JAM.policy.p15);
    matchExp = v228 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v657 = arrayOfItems[i$$9];
    var v587 = JAM.call(v657.match, v657, [/\)\D*\d+/], JAM.policy.p15);
    var v468 = v587.toString();
    var v229 = JAM.call(v468.replace, v468, [/\)\D*/, ""], JAM.policy.p16);
    cutDistance = parseFloat(v229);
    var v235 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v235;) {
      var v230 = matchExp.lastIndex;
      matchPosition = v230 - cutDistance;
      var v469 = matchPosition >= lowerLimit;
      if (v469) {
        v469 = matchPosition < upperLimit;
      }
      var v233 = v469;
      if (v233) {
        timesFound++;
        var v231 = tempString$$1 + ", ";
        var v470 = matchPosition - shiftValue;
        var v232 = v470 + 1;
        tempString$$1 = v231 + v232;
      }
      var v471 = matchExp.lastIndex;
      var v588 = RegExp.lastMatch;
      var v472 = v588.length;
      var v234 = v471 - v472;
      matchExp.lastIndex = v234 + 1;
      v235 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v473 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p15);
    var v236 = v473 != -1;
    if (v236) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p16);
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
    var v760 = '<tr><td class="' + backGroundClass;
    var v748 = v760 + '">';
    var v780 = arrayOfItems[i$$9];
    var v771 = JAM.call(v780.match, v780, [/\([^\(]+\)/], JAM.policy.p15);
    var v761 = v771.toString();
    var v749 = JAM.call(v761.replace, v761, [/\(|\)/g, ""], JAM.policy.p16);
    var v732 = v748 + v749;
    var v705 = v732 + '</td><td class="';
    var v658 = v705 + backGroundClass;
    var v589 = v658 + '">';
    var v474 = v589 + tempString$$1;
    var v242 = v474 + "</td></tr>\n";
    JAM.call(v241.write, v241, [v242], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v475 = arrayOfItems.length;
    v243 = i$$9 < v475;
  }
  var v244 = outputWindow.document;
  JAM.call(v244.write, v244, ["</tbody></table>\n"], JAM.policy.p10);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v245 = outputWindow.document;
  JAM.call(v245.write, v245, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p10);
  var v246 = outputWindow.document;
  var v733 = '<tr><td class="title">' + "Pattern:";
  var v706 = v733 + '</td><td class="title">';
  var v659 = v706 + "Times found:";
  var v590 = v659 + '</td><td class="title">';
  var v476 = v590 + "Percentage:";
  var v247 = v476 + "</td></tr>\n";
  JAM.call(v246.write, v246, [v247], JAM.policy.p17);
  var i$$10 = 0;
  var v477 = arrayOfItems$$1.length;
  var v256 = i$$10 < v477;
  for (;v256;) {
    var tempNumber = 0;
    var v478 = arrayOfItems$$1[i$$10];
    var v248 = JAM.call(v478.match, v478, [/\/[^\/]+\//], JAM.policy.p15);
    var matchExp$$1 = v248 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v479 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v250 = v479 != -1;
    if (v250) {
      var v249 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v249.length;
    }
    var percentage = 0;
    var v591 = originalLength + 1;
    var v707 = arrayOfItems$$1[i$$10];
    var v660 = JAM.call(v707.match, v707, [/\d+/], JAM.policy.p15);
    var v592 = parseFloat(v660);
    var v480 = v591 - v592;
    var v253 = v480 > 0;
    if (v253) {
      var v251 = 100 * tempNumber;
      var v481 = originalLength + 1;
      var v661 = arrayOfItems$$1[i$$10];
      var v593 = JAM.call(v661.match, v661, [/\d+/], JAM.policy.p15);
      var v482 = parseFloat(v593);
      var v252 = v481 - v482;
      percentage = v251 / v252;
    }
    var v254 = outputWindow.document;
    var v781 = arrayOfItems$$1[i$$10];
    var v772 = JAM.call(v781.match, v781, [/\([^\(]+\)\b/], JAM.policy.p15);
    var v762 = v772.toString();
    var v750 = JAM.call(v762.replace, v762, [/\(|\)/g, ""], JAM.policy.p16);
    var v734 = "<tr><td>" + v750;
    var v708 = v734 + "</td><td>";
    var v662 = v708 + tempNumber;
    var v594 = v662 + "</td><td>";
    var v595 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9);
    var v483 = v594 + v595;
    var v255 = v483 + "</td></tr>\n";
    JAM.call(v254.write, v254, [v255], JAM.policy.p17);
    i$$10++;
    var v484 = arrayOfItems$$1.length;
    v256 = i$$10 < v484;
  }
  var v257 = outputWindow.document;
  JAM.call(v257.write, v257, ["</tbody></table>\n"], JAM.policy.p10);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v485 = sequence$$17.length;
  var v264 = v485 > 0;
  for (;v264;) {
    maxNum$$1 = sequence$$17.length;
    var v486 = Math.random();
    var v258 = v486 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v258], JAM.policy.p15);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p15);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v259 = randNum$$1 + 1;
    var v260 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v259, v260], JAM.policy.p16);
    sequence$$17 = tempString1 + tempString2;
    var v487 = tempSeq.length;
    var v263 = v487 == 60;
    if (v263) {
      var v261 = outputWindow.document;
      var v262 = tempSeq + "\n";
      JAM.call(v261.write, v261, [v262], JAM.policy.p17);
      tempSeq = "";
    }
    var v488 = sequence$$17.length;
    v264 = v488 > 0;
  }
  var v265 = outputWindow.document;
  var v266 = tempSeq + "\n";
  JAM.call(v265.write, v265, [v266], JAM.policy.p17);
  return true;
}
function identSim(theDocument) {
  var maxInput$$3 = 2E4;
  var theAlignment = "";
  var alignArray$$1 = new Array;
  var groupString = "";
  var arrayOfGroups = new Array;
  var titleArray = new Array;
  var sequenceArray$$1 = new Array;
  var longestTitle;
  var v489 = testScript();
  var v267 = v489 == false;
  if (v267) {
    return false;
  }
  var v751 = theDocument.forms;
  var v735 = v751[0];
  var v709 = v735.elements;
  var v663 = v709[0];
  var v596 = checkFormElement(v663);
  var v490 = v596 == false;
  var v598 = !v490;
  if (v598) {
    var v763 = theDocument.forms;
    var v752 = v763[0];
    var v736 = v752.elements;
    var v710 = v736[0];
    var v664 = v710.value;
    var v597 = checkTextLength(v664, maxInput$$3);
    v490 = v597 == false;
  }
  var v268 = v490;
  if (v268) {
    return false;
  }
  var v711 = theDocument.forms;
  var v665 = v711[0];
  var v599 = v665.elements;
  var v491 = v599[0];
  var v269 = v491.value;
  theAlignment = "X" + v269;
  alignArray$$1 = JAM.call(theAlignment.split, theAlignment, [/[>%#]/], JAM.policy.p15);
  var v492 = earlyCheckAlign(alignArray$$1);
  var v270 = v492 == false;
  if (v270) {
    return false;
  }
  var i$$11 = 1;
  var v493 = alignArray$$1.length;
  var v280 = i$$11 < v493;
  for (;v280;) {
    var v271 = i$$11 - 1;
    var v494 = alignArray$$1[i$$11];
    var v817 = JAM.call(v494.match, v494, [/[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
    titleArray[v271] = v817;
    var v272 = i$$11 - 1;
    var v712 = i$$11 - 1;
    var v666 = titleArray[v712];
    var v600 = v666.toString();
    var v495 = filterFastaTitle(v600);
    var v818 = JAM.call(v495.replace, v495, [/[\f\n\r]/g, ""], JAM.policy.p16);
    titleArray[v272] = v818;
    var v273 = i$$11 - 1;
    var v601 = i$$11 - 1;
    var v496 = titleArray[v601];
    var v819 = JAM.call(v496.substring, v496, [0, 20], JAM.policy.p13);
    titleArray[v273] = v819;
    var v277 = i$$11 == 1;
    if (v277) {
      var v497 = i$$11 - 1;
      var v274 = titleArray[v497];
      longestTitle = v274.length;
    } else {
      var v667 = i$$11 - 1;
      var v602 = titleArray[v667];
      var v498 = v602.length;
      var v276 = v498 > longestTitle;
      if (v276) {
        var v499 = i$$11 - 1;
        var v275 = titleArray[v499];
        longestTitle = v275.length;
      }
    }
    var v278 = i$$11 - 1;
    var v500 = alignArray$$1[i$$11];
    var v820 = JAM.call(v500.replace, v500, [/[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
    sequenceArray$$1[v278] = v820;
    var v279 = i$$11 - 1;
    var v603 = i$$11 - 1;
    var v501 = sequenceArray$$1[v603];
    var v821 = filterAlignSeq(v501);
    sequenceArray$$1[v279] = v821;
    i$$11++;
    var v502 = alignArray$$1.length;
    v280 = i$$11 < v502;
  }
  var v503 = checkAlign(titleArray, sequenceArray$$1);
  var v281 = v503 == false;
  if (v281) {
    return false;
  }
  var v737 = theDocument.forms;
  var v713 = v737[0];
  var v668 = v713.elements;
  var v604 = v668[1];
  var v504 = v604.value;
  var v282 = JAM.call(v504.replace, v504, [/\s/g, ""], JAM.policy.p16);
  groupString = v282.toUpperCase();
  arrayOfGroups = JAM.call(groupString.split, groupString, [/,/], JAM.policy.p15);
  var v505 = checkGroupInput(arrayOfGroups);
  var v283 = v505 == false;
  if (v283) {
    return false;
  }
  openWindowAlign("Ident and Sim");
  openPre();
  writeIdentAndSim(titleArray, sequenceArray$$1, arrayOfGroups);
  closePre();
  closeWindow();
  return true;
}
function writeIdentAndSim(titleArray$$1, sequenceArray$$2, arrayOfGroups$$1) {
  var identical = 0;
  var similar = 0;
  var alignLength = 0;
  var k$$3 = 0;
  var v506 = sequenceArray$$2.length;
  var v309 = k$$3 < v506;
  for (;v309;) {
    var m = k$$3 + 1;
    var v507 = sequenceArray$$2.length;
    var v308 = m < v507;
    for (;v308;) {
      var i$$12 = 0;
      var v605 = sequenceArray$$2[0];
      var v508 = v605.length;
      var v288 = i$$12 < v508;
      for (;v288;) {
        alignLength = alignLength + 1;
        var v714 = sequenceArray$$2[k$$3];
        var v669 = JAM.call(v714.charAt, v714, [i$$12], JAM.policy.p17);
        var v606 = v669.toUpperCase();
        var v715 = sequenceArray$$2[m];
        var v670 = JAM.call(v715.charAt, v715, [i$$12], JAM.policy.p17);
        var v607 = v670.toUpperCase();
        var v509 = v606 == v607;
        if (v509) {
          var v716 = sequenceArray$$2[k$$3];
          var v671 = JAM.call(v716.charAt, v716, [i$$12], JAM.policy.p17);
          var v608 = v671.toUpperCase();
          v509 = v608 != "X";
        }
        var v287 = v509;
        if (v287) {
          var v672 = sequenceArray$$2[k$$3];
          var v609 = JAM.call(v672.charAt, v672, [i$$12], JAM.policy.p17);
          var v510 = v609 != "-";
          if (v510) {
            var v673 = sequenceArray$$2[k$$3];
            var v610 = JAM.call(v673.charAt, v673, [i$$12], JAM.policy.p17);
            v510 = v610 != ".";
          }
          var v284 = v510;
          if (v284) {
            identical = identical + 1;
          } else {
            alignLength = alignLength - 1;
          }
        } else {
          var j$$10 = 0;
          var v511 = arrayOfGroups$$1.length;
          var v286 = j$$10 < v511;
          for (;v286;) {
            var v674 = arrayOfGroups$$1[j$$10];
            var v738 = sequenceArray$$2[k$$3];
            var v717 = JAM.call(v738.charAt, v738, [i$$12], JAM.policy.p17);
            var v675 = v717.toUpperCase();
            var v611 = JAM.call(v674.search, v674, [v675], JAM.policy.p17);
            var v512 = v611 != -1;
            if (v512) {
              var v676 = arrayOfGroups$$1[j$$10];
              var v739 = sequenceArray$$2[m];
              var v718 = JAM.call(v739.charAt, v739, [i$$12], JAM.policy.p17);
              var v677 = v718.toUpperCase();
              var v612 = JAM.call(v676.search, v676, [v677], JAM.policy.p17);
              v512 = v612 != -1;
            }
            var v285 = v512;
            if (v285) {
              similar = similar + 1;
              break;
            }
            j$$10++;
            var v513 = arrayOfGroups$$1.length;
            v286 = j$$10 < v513;
          }
        }
        i$$12++;
        var v613 = sequenceArray$$2[0];
        var v514 = v613.length;
        v288 = i$$12 < v514;
      }
      var v289 = outputWindow.document;
      var v719 = titleArray$$1[k$$3];
      var v678 = "<b>Results for " + v719;
      var v614 = v678 + " vs ";
      var v615 = titleArray$$1[m];
      var v515 = v614 + v615;
      var v290 = v515 + ":</b>\n";
      JAM.call(v289.write, v289, [v290], JAM.policy.p17);
      var v291 = outputWindow.document;
      var v516 = "  Alignment length: " + alignLength;
      var v292 = v516 + "\n";
      JAM.call(v291.write, v291, [v292], JAM.policy.p17);
      var v293 = outputWindow.document;
      var v517 = "Identical residues: " + identical;
      var v294 = v517 + "\n";
      JAM.call(v293.write, v293, [v294], JAM.policy.p17);
      var v295 = outputWindow.document;
      var v518 = "  Similar residues: " + similar;
      var v296 = v518 + "\n";
      JAM.call(v295.write, v295, [v296], JAM.policy.p17);
      var v301 = identical == 0;
      if (v301) {
        var v297 = outputWindow.document;
        var v519 = "  Percent identity: " + 0;
        var v298 = v519 + "\n";
        JAM.call(v297.write, v297, [v298], JAM.policy.p17);
      } else {
        var v299 = outputWindow.document;
        var v720 = identical / alignLength;
        var v679 = v720 * 100;
        var v616 = JAM.call(v679.toFixed, v679, [2], JAM.policy.p9);
        var v520 = "  Percent identity: " + v616;
        var v300 = v520 + "\n";
        JAM.call(v299.write, v299, [v300], JAM.policy.p17);
      }
      var v521 = similar == 0;
      if (v521) {
        v521 = identical == 0;
      }
      var v306 = v521;
      if (v306) {
        var v302 = outputWindow.document;
        var v522 = "Percent similarity: " + 0;
        var v303 = v522 + "\n";
        JAM.call(v302.write, v302, [v303], JAM.policy.p17);
      } else {
        var v304 = outputWindow.document;
        var v740 = identical + similar;
        var v721 = v740 / alignLength;
        var v680 = v721 * 100;
        var v617 = JAM.call(v680.toFixed, v680, [2], JAM.policy.p9);
        var v523 = "Percent similarity: " + v617;
        var v305 = v523 + "\n";
        JAM.call(v304.write, v304, [v305], JAM.policy.p17);
      }
      var v307 = outputWindow.document;
      JAM.call(v307.write, v307, ["\n"], JAM.policy.p10);
      identical = 0;
      similar = 0;
      alignLength = 0;
      m++;
      var v524 = sequenceArray$$2.length;
      v308 = m < v524;
    }
    k$$3++;
    var v525 = sequenceArray$$2.length;
    v309 = k$$3 < v525;
  }
  return true;
}
JAM.set(document, "onload", v2);
var v310 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p10);
JAM.set(v310, "onclick", v3);
var v311 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p10);
JAM.set(v311, "onclick", v4)
