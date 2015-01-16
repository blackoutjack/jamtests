function v4() {
  var v531 = document.forms;
  var v458 = v531[0];
  var v277 = v458.elements;
  var v5 = v277[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    proteinStats(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v278 = document.main_form;
  var v7 = v278.main_submit;
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
  var v279 = arrayOfSequences.length;
  var v9 = v279 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v280 = arrayOfTitles.length;
  var v11 = i$$1 < v280;
  for (;v11;) {
    var v578 = arrayOfTitles[i$$1];
    var v532 = JAM.call(v578.search, v578, [/\S/], JAM.policy.p17);
    var v459 = v532 == -1;
    var v534 = !v459;
    if (v534) {
      var v579 = arrayOfSequences[i$$1];
      var v533 = JAM.call(v579.search, v579, [/\S/], JAM.policy.p17);
      v459 = v533 == -1;
    }
    var v281 = v459;
    var v461 = !v281;
    if (v461) {
      var v535 = arrayOfSequences[i$$1];
      var v460 = v535.length;
      v281 = v460 != lengthOfAlign;
    }
    var v10 = v281;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v282 = arrayOfTitles.length;
    v11 = i$$1 < v282;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v609 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17);
  var v580 = v609 == -1;
  var v611 = !v580;
  if (v611) {
    var v610 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17);
    v580 = v610 == -1;
  }
  var v536 = v580;
  var v582 = !v536;
  if (v582) {
    var v581 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17);
    v536 = v581 == -1;
  }
  var v462 = v536;
  var v538 = !v462;
  if (v538) {
    var v537 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17);
    v462 = v537 == -1;
  }
  var v283 = v462;
  var v464 = !v283;
  if (v464) {
    var v463 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17);
    v283 = v463 == -1;
  }
  var v12 = v283;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v465 = formElement.value;
  var v284 = JAM.call(v465.search, v465, [/\S/], JAM.policy.p17);
  var v13 = v284 == -1;
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
  var v285 = arrayOfPatterns.length;
  var v16 = z$$2 < v285;
  for (;v16;) {
    var v466 = arrayOfPatterns[z$$2];
    var v286 = JAM.call(v466.search, v466, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17);
    var v14 = v286 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v467 = arrayOfPatterns[z$$2];
    var v287 = moreExpressionCheck(v467);
    var v15 = v287 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v288 = arrayOfPatterns.length;
    v16 = z$$2 < v288;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v289 = arrayOfPatterns.length;
  var v22 = j < v289;
  for (;v22;) {
    var v468 = arrayOfPatterns[j];
    var v290 = JAM.call(v468.match, v468, [/\/.+\//], JAM.policy.p17);
    var v19 = v290 + "gi";
    if (JAM.isEval(eval)) {
      var v694 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v694 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v694;
    var v291 = arrayOfPatterns[j];
    var v20 = JAM.call(v291.match, v291, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v695 = v20.toString();
    geneticCodeMatchResult[j] = v695;
    var v21 = geneticCodeMatchResult[j];
    var v696 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v696;
    j++;
    var v292 = arrayOfPatterns.length;
    v22 = j < v292;
  }
  var i$$2 = 0;
  var v469 = testSequence.length;
  var v293 = v469 - 3;
  var v29 = i$$2 <= v293;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p15);
    j = 0;
    var v294 = geneticCodeMatchExp.length;
    var v27 = j < v294;
    for (;v27;) {
      var v470 = geneticCodeMatchExp[j];
      var v295 = JAM.call(codon.search, codon, [v470], JAM.policy.p16);
      var v26 = v295 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v296 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v296 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v297 = geneticCodeMatchExp.length;
      v27 = j < v297;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v471 = testSequence.length;
    var v298 = v471 - 3;
    v29 = i$$2 <= v298;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v299 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v299;
  for (;v31;) {
    var v472 = arrayOfPatterns$$1[z$$3];
    var v300 = JAM.call(v472.search, v472, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17);
    var v30 = v300 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v301 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v301;
  }
  var i$$3 = 0;
  var v302 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v302;
  for (;v35;) {
    var v473 = arrayOfPatterns$$1[i$$3];
    var v303 = "[" + v473;
    var v32 = v303 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v304 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v304;
    for (;v34;) {
      var v474 = arrayOfPatterns$$1[j$$1];
      var v305 = JAM.call(v474.search, v474, [re], JAM.policy.p16);
      var v33 = v305 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v306 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v306;
    }
    i$$3++;
    var v307 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v307;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v308 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v308;
  for (;v38;) {
    var v475 = arrayOfPatterns$$2[z$$4];
    var v309 = JAM.call(v475.search, v475, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17);
    var v36 = v309 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v476 = arrayOfPatterns$$2[z$$4];
    var v310 = moreExpressionCheck(v476);
    var v37 = v310 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v311 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v311;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v539 = getSequenceFromFasta(text$$7);
  var v477 = JAM.call(v539.replace, v539, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v312 = v477.length;
  var v40 = v312 > maxInput;
  if (v40) {
    var v313 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v313 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v314 = text$$8.length;
  var v42 = v314 > maxInput$$1;
  if (v42) {
    var v315 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v315 + " characters.";
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
  var v316 = alignArray.length;
  var v49 = v316 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v317 = alignArray.length;
  var v51 = i$$4 < v317;
  for (;v51;) {
    var v478 = alignArray[i$$4];
    var v318 = JAM.call(v478.search, v478, [/[^\s]+\s/], JAM.policy.p17);
    var v50 = v318 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v319 = alignArray.length;
    v51 = i$$4 < v319;
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
  var v320 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v54 = v320 != -1;
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
  var v321 = sequence$$2.length;
  var v55 = "&gt;results for " + v321;
  var stringToReturn = v55 + " residue sequence ";
  var v322 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p17);
  var v57 = v322 != -1;
  if (v57) {
    var v323 = stringToReturn + '"';
    var v56 = v323 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v324 = stringToReturn + ' starting "';
  var v325 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v324 + v325;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v326 = sequenceOne.length;
  var v59 = "Search results for " + v326;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v327 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p17);
  var v61 = v327 != -1;
  if (v61) {
    var v328 = stringToReturn$$1 + '"';
    var v60 = v328 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v329 = stringToReturn$$1 + ' starting "';
  var v330 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v329 + v330;
  stringToReturn$$1 = v62 + '"\n';
  var v331 = stringToReturn$$1 + "and ";
  var v332 = sequenceTwo.length;
  var v63 = v331 + v332;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v333 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p17);
  var v65 = v333 != -1;
  if (v65) {
    var v334 = stringToReturn$$1 + '"';
    var v64 = v334 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v335 = stringToReturn$$1 + ' starting "';
  var v336 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v66 = v335 + v336;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v337 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v337;
  for (;v70;) {
    var v479 = arrayOfPatterns$$3[j$$2];
    var v338 = JAM.call(v479.match, v479, [/\/.+\//], JAM.policy.p17);
    var v69 = v338 + "gi";
    if (JAM.isEval(eval)) {
      var v697 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v697 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v697;
    j$$2++;
    var v339 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v339;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v340 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v340;
  for (;v74;) {
    var v341 = arrayOfPatterns$$4[j$$3];
    var v72 = JAM.call(v341.match, v341, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v698 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v698;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v699 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v699;
    j$$3++;
    var v342 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v342;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v343 = sequence$$3.length;
  var v75 = "Results for " + v343;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v344 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p17);
  var v77 = v344 != -1;
  if (v77) {
    var v345 = stringToReturn$$2 + '"';
    var v76 = v345 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v346 = stringToReturn$$2 + ' starting "';
  var v347 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v78 = v346 + v347;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v480 = "Results for " + topology;
  var v348 = v480 + " ";
  var v349 = sequence$$4.length;
  var v80 = v348 + v349;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v350 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p17);
  var v82 = v350 != -1;
  if (v82) {
    var v351 = stringToReturn$$3 + '"';
    var v81 = v351 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v352 = stringToReturn$$3 + ' starting "';
  var v353 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v352 + v353;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v354 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v354;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v355 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p17);
  var v87 = v355 != -1;
  if (v87) {
    var v356 = stringToReturn$$4 + '"';
    var v86 = v356 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v357 = stringToReturn$$4 + ' starting "';
  var v358 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v357 + v358;
  stringToReturn$$4 = v88 + '"\n';
  var v359 = stringToReturn$$4 + "and ";
  var v360 = sequenceTwo$$1.length;
  var v89 = v359 + v360;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v361 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p17);
  var v91 = v361 != -1;
  if (v91) {
    var v362 = stringToReturn$$4 + '"';
    var v90 = v362 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v363 = stringToReturn$$4 + ' starting "';
  var v364 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v92 = v363 + v364;
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
    var v365 = Math.random();
    var v366 = components.length;
    var v94 = v365 * v366;
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p16);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p9);
}
function getSequenceFromFasta(sequenceRecord) {
  var v367 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v96 = v367 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v368 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v98 = v368 != -1;
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
  var v672 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p17);
  var v665 = v672 != -1;
  var v674 = !v665;
  if (v674) {
    var v673 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17);
    v665 = v673 != -1;
  }
  var v656 = v665;
  var v667 = !v656;
  if (v667) {
    var v666 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17);
    v656 = v666 != -1;
  }
  var v647 = v656;
  var v658 = !v647;
  if (v658) {
    var v657 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17);
    v647 = v657 != -1;
  }
  var v636 = v647;
  var v649 = !v636;
  if (v649) {
    var v648 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17);
    v636 = v648 != -1;
  }
  var v624 = v636;
  var v638 = !v624;
  if (v638) {
    var v637 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17);
    v624 = v637 != -1;
  }
  var v612 = v624;
  var v626 = !v612;
  if (v626) {
    var v625 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17);
    v612 = v625 != -1;
  }
  var v583 = v612;
  var v614 = !v583;
  if (v614) {
    var v613 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17);
    v583 = v613 != -1;
  }
  var v540 = v583;
  var v585 = !v540;
  if (v585) {
    var v584 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17);
    v540 = v584 != -1;
  }
  var v481 = v540;
  var v542 = !v481;
  if (v542) {
    var v541 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17);
    v481 = v541 != -1;
  }
  var v369 = v481;
  var v483 = !v369;
  if (v483) {
    var v482 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17);
    v369 = v482 != -1;
  }
  var v99 = v369;
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
  var v543 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v484 = v543 + "<head>\n";
  var v370 = v484 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v370 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p16);
  if (isColor) {
    var v106 = outputWindow.document;
    var v687 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v683 = v687 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v679 = v683 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v675 = v679 + "div.info {font-weight: bold}\n";
    var v668 = v675 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v659 = v668 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v650 = v659 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v639 = v650 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v627 = v639 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v615 = v627 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v586 = v615 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v544 = v586 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v485 = v544 + "td.many {color: #000000}\n";
    var v371 = v485 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v371 + "</style>\n";
    JAM.call(v106.write, v106, [v107], JAM.policy.p16);
  } else {
    var v108 = outputWindow.document;
    var v691 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v688 = v691 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v684 = v688 + "div.title {display: none}\n";
    var v680 = v684 + "div.info {font-weight: bold}\n";
    var v676 = v680 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v669 = v676 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v660 = v669 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v651 = v660 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v640 = v651 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v628 = v640 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v616 = v628 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v587 = v616 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v545 = v587 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v486 = v545 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v372 = v486 + "img {display: none}\n";
    var v109 = v372 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p16);
  }
  var v110 = outputWindow.document;
  var v546 = "</head>\n" + '<body class="main">\n';
  var v487 = v546 + '<div class="title">';
  var v373 = v487 + title$$6;
  var v111 = v373 + " results</div>\n";
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
  var v547 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v488 = v547 + "<head>\n";
  var v374 = v488 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v374 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p16);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v689 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v685 = v689 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v681 = v685 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v677 = v681 + "div.info {font-weight: bold}\n";
    var v670 = v677 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v661 = v670 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v652 = v661 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v641 = v652 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v629 = v641 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v617 = v629 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v588 = v617 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v548 = v588 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v489 = v548 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v375 = v489 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v375 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p16);
  } else {
    var v116 = outputWindow.document;
    var v693 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v692 = v693 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v690 = v692 + "div.title {display: none}\n";
    var v686 = v690 + "div.info {font-weight: bold}\n";
    var v682 = v686 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v678 = v682 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v671 = v678 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v662 = v671 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v653 = v662 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v642 = v653 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v630 = v642 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v618 = v630 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v589 = v618 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v549 = v589 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v490 = v549 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v376 = v490 + "img {display: none}\n";
    var v117 = v376 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p16);
  }
  var v118 = outputWindow.document;
  var v550 = "</head>\n" + '<body class="main">\n';
  var v491 = v550 + '<div class="title">';
  var v377 = v491 + title$$8;
  var v119 = v377 + " results</div>\n";
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
  var v378 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p17);
  var v120 = v378 != -1;
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
  var v379 = testArray[0];
  var v124 = v379 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v380 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p16);
  var v125 = v380 == -1;
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
  var v381 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p10);
  var v128 = v381 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v382 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p10);
  var v129 = v382 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v383 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p17);
  var v130 = v383 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v590 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17);
  var v551 = v590 == -1;
  var v592 = !v551;
  if (v592) {
    var v591 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17);
    v551 = v591 == -1;
  }
  var v492 = v551;
  var v553 = !v492;
  if (v553) {
    var v552 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17);
    v492 = v552 == -1;
  }
  var v384 = v492;
  var v494 = !v384;
  if (v494) {
    var v493 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17);
    v384 = v493 == -1;
  }
  var v131 = v384;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v385 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p17);
  var v132 = v385 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v386 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v386 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v387 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p17);
  var v135 = v387 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v388 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p17);
  var v136 = v388 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v593 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17);
  var v554 = v593 == -1;
  var v595 = !v554;
  if (v595) {
    var v594 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17);
    v554 = v594 == -1;
  }
  var v495 = v554;
  var v556 = !v495;
  if (v556) {
    var v555 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17);
    v495 = v555 == -1;
  }
  var v389 = v495;
  var v497 = !v389;
  if (v497) {
    var v496 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17);
    v389 = v496 == -1;
  }
  var v137 = v389;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v596 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17);
  var v557 = v596 == -1;
  var v598 = !v557;
  if (v598) {
    var v597 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17);
    v557 = v597 == -1;
  }
  var v498 = v557;
  var v559 = !v498;
  if (v559) {
    var v558 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17);
    v498 = v558 == -1;
  }
  var v390 = v498;
  var v500 = !v390;
  if (v500) {
    var v499 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17);
    v390 = v499 == -1;
  }
  var v138 = v390;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v391 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p17);
  var v139 = v391 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v599 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17);
  var v560 = v599 == -1;
  var v601 = !v560;
  if (v601) {
    var v600 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17);
    v560 = v600 == -1;
  }
  var v501 = v560;
  var v562 = !v501;
  if (v562) {
    var v561 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17);
    v501 = v561 == -1;
  }
  var v392 = v501;
  var v503 = !v392;
  if (v503) {
    var v502 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17);
    v392 = v502 == -1;
  }
  var v140 = v392;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v393 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p17);
  var v141 = v393 == -1;
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
    var v394 = basePerLine / groupSize;
    var v145 = j$$6 <= v394;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v395 = k + i$$5;
        var v143 = JAM.call(text$$10.charAt, text$$10, [v395], JAM.policy.p16);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v396 = basePerLine / groupSize;
      v145 = j$$6 <= v396;
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
    var v397 = adjustment < 0;
    if (v397) {
      v397 = adjusted >= 0;
    }
    var v149 = v397;
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
    var v398 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v398;
    for (;v158;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v399 = i$$6 + k$$1;
        var v150 = v399 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v151 = lineOfText$$1;
        var v400 = k$$1 + i$$6;
        var v152 = JAM.call(text$$12.charAt, text$$12, [v400], JAM.policy.p16);
        lineOfText$$1 = v151 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v156 = numberPosition$$1 == "above";
      if (v156) {
        var v154 = aboveNum;
        var v401 = adjustNumbering(i$$6, numberingAdjustment);
        var v155 = rightNum(v401, "", groupSize$$2, tabIn$$3);
        aboveNum = v154 + v155;
      }
      var v157 = i$$6 >= stopBase$$2;
      if (v157) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v402 = basePerLine$$2 / groupSize$$2;
      v158 = j$$7 <= v402;
    }
    var v181 = numberPosition$$1 == "left";
    if (v181) {
      var v159 = outputWindow.document;
      var v563 = adjustNumbering(lineNum, numberingAdjustment);
      var v504 = rightNum(v563, "", 8, tabIn$$3);
      var v403 = v504 + lineOfText$$1;
      var v160 = v403 + "\n";
      JAM.call(v159.write, v159, [v160], JAM.policy.p16);
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v564 = adjustNumbering(lineNum, numberingAdjustment);
        var v505 = rightNum(v564, "", 8, tabIn$$3);
        var v506 = complement(lineOfText$$1);
        var v404 = v505 + v506;
        var v162 = v404 + "\n";
        JAM.call(v161.write, v161, [v162], JAM.policy.p16);
        var v163 = outputWindow.document;
        JAM.call(v163.write, v163, ["\n"], JAM.policy.p9);
      }
    } else {
      var v180 = numberPosition$$1 == "right";
      if (v180) {
        var v165 = outputWindow.document;
        var v507 = lineOfText$$1;
        var v508 = adjustNumbering(i$$6, numberingAdjustment);
        var v405 = v507 + v508;
        var v166 = v405 + "\n";
        JAM.call(v165.write, v165, [v166], JAM.policy.p16);
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v509 = complement(lineOfText$$1);
          var v510 = adjustNumbering(i$$6, numberingAdjustment);
          var v406 = v509 + v510;
          var v168 = v406 + "\n";
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
            var v407 = complement(lineOfText$$1);
            var v176 = v407 + "\n";
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
    var v408 = basePerLine$$3 / groupSize$$3;
    var v189 = j$$8 <= v408;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        var v409 = i$$7 + k$$2;
        var v183 = v409 >= stopBase$$3;
        if (v183) {
          break;
        }
        var v410 = k$$2 + i$$7;
        var v184 = JAM.call(text$$13.charAt, text$$13, [v410], JAM.policy.p16);
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
      var v411 = basePerLine$$3 / groupSize$$3;
      v189 = j$$8 <= v411;
    }
    var v200 = numberPosition$$2 == "left";
    if (v200) {
      var v190 = outputWindow.document;
      var v511 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v412 = v511 + lineOfText$$2;
      var v191 = v412 + "\n";
      JAM.call(v190.write, v190, [v191], JAM.policy.p16);
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v413 = lineOfText$$2 + i$$7;
        var v193 = v413 + "\n";
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
  var v565 = sequence$$13.length;
  var v512 = v565 <= firstIndexToMutate;
  var v566 = !v512;
  if (v566) {
    v512 = lastIndexToMutate < 0;
  }
  var v414 = v512;
  var v513 = !v414;
  if (v513) {
    v414 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v202 = v414;
  if (v202) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    var v415 = Math.random();
    var v203 = v415 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v203], JAM.policy.p17);
    var v416 = randNum < firstIndexToMutate;
    var v514 = !v416;
    if (v514) {
      v416 = randNum > lastIndexToMutate;
    }
    var v204 = v416;
    if (v204) {
      numMut++;
      i$$8++;
      v210 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p17);
    needNewChar = true;
    for (;needNewChar;) {
      var v417 = Math.random();
      var v418 = components$$1.length;
      var v205 = v417 * v418;
      componentsIndex = JAM.call(Math.round, Math, [v205], JAM.policy.p17);
      var v419 = components$$1.length;
      var v206 = componentsIndex == v419;
      if (v206) {
        componentsIndex = 0;
      }
      var v420 = components$$1[componentsIndex];
      var v207 = v420 != currentChar;
      if (v207) {
        needNewChar = false;
      }
    }
    var v421 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v422 = components$$1[componentsIndex];
    var v208 = v421 + v422;
    var v423 = randNum + 1;
    var v424 = sequence$$13.length;
    var v209 = JAM.call(sequence$$13.substring, sequence$$13, [v423, v424], JAM.policy.p27);
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
    var v425 = Math.random();
    var v426 = components$$2.length;
    var v213 = v425 * v426;
    tempNum$$1 = JAM.call(Math.floor, Math, [v213], JAM.policy.p17);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v427 = sequence$$14.length;
    var v216 = v427 == 60;
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
    var v567 = sequence$$15.length;
    var v515 = v567 - lookAhead;
    var v516 = sequence$$15.length;
    var v428 = JAM.call(sequence$$15.substring, sequence$$15, [v515, v516], JAM.policy.p27);
    var v221 = v428 + sequence$$15;
    var v222 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v221 + v222;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  JAM.call(v224.write, v224, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v225 = outputWindow.document;
  var v568 = '<tr><td class="title" width="200px">' + "Site:";
  var v517 = v568 + '</td><td class="title">';
  var v429 = v517 + "Positions:";
  var v226 = v429 + "</td></tr>\n";
  JAM.call(v225.write, v225, [v226], JAM.policy.p16);
  var i$$9 = 0;
  var v430 = arrayOfItems.length;
  var v242 = i$$9 < v430;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v431 = arrayOfItems[i$$9];
    var v227 = JAM.call(v431.match, v431, [/\/.+\//], JAM.policy.p17);
    matchExp = v227 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v569 = arrayOfItems[i$$9];
    var v518 = JAM.call(v569.match, v569, [/\)\D*\d+/], JAM.policy.p17);
    var v432 = v518.toString();
    var v228 = JAM.call(v432.replace, v432, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v228);
    var v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
    for (;v234;) {
      var v229 = matchExp.lastIndex;
      matchPosition = v229 - cutDistance;
      var v433 = matchPosition >= lowerLimit;
      if (v433) {
        v433 = matchPosition < upperLimit;
      }
      var v232 = v433;
      if (v232) {
        timesFound++;
        var v230 = tempString$$1 + ", ";
        var v434 = matchPosition - shiftValue;
        var v231 = v434 + 1;
        tempString$$1 = v230 + v231;
      }
      var v435 = matchExp.lastIndex;
      var v519 = RegExp.lastMatch;
      var v436 = v519.length;
      var v233 = v435 - v436;
      matchExp.lastIndex = v233 + 1;
      v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
    }
    var v437 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p17);
    var v235 = v437 != -1;
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
    var v643 = '<tr><td class="' + backGroundClass;
    var v631 = v643 + '">';
    var v663 = arrayOfItems[i$$9];
    var v654 = JAM.call(v663.match, v663, [/\([^\(]+\)/], JAM.policy.p17);
    var v644 = v654.toString();
    var v632 = JAM.call(v644.replace, v644, [/\(|\)/g, ""], JAM.policy.p15);
    var v619 = v631 + v632;
    var v602 = v619 + '</td><td class="';
    var v570 = v602 + backGroundClass;
    var v520 = v570 + '">';
    var v438 = v520 + tempString$$1;
    var v241 = v438 + "</td></tr>\n";
    JAM.call(v240.write, v240, [v241], JAM.policy.p16);
    timesFound = 0;
    i$$9++;
    var v439 = arrayOfItems.length;
    v242 = i$$9 < v439;
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
  var v620 = '<tr><td class="title">' + "Pattern:";
  var v603 = v620 + '</td><td class="title">';
  var v571 = v603 + "Times found:";
  var v521 = v571 + '</td><td class="title">';
  var v440 = v521 + "Percentage:";
  var v246 = v440 + "</td></tr>\n";
  JAM.call(v245.write, v245, [v246], JAM.policy.p16);
  var i$$10 = 0;
  var v441 = arrayOfItems$$1.length;
  var v255 = i$$10 < v441;
  for (;v255;) {
    var tempNumber = 0;
    var v442 = arrayOfItems$$1[i$$10];
    var v247 = JAM.call(v442.match, v442, [/\/[^\/]+\//], JAM.policy.p17);
    var matchExp$$1 = v247 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v443 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p16);
    var v249 = v443 != -1;
    if (v249) {
      var v248 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p16);
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v522 = originalLength + 1;
    var v604 = arrayOfItems$$1[i$$10];
    var v572 = JAM.call(v604.match, v604, [/\d+/], JAM.policy.p17);
    var v523 = parseFloat(v572);
    var v444 = v522 - v523;
    var v252 = v444 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v445 = originalLength + 1;
      var v573 = arrayOfItems$$1[i$$10];
      var v524 = JAM.call(v573.match, v573, [/\d+/], JAM.policy.p17);
      var v446 = parseFloat(v524);
      var v251 = v445 - v446;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v664 = arrayOfItems$$1[i$$10];
    var v655 = JAM.call(v664.match, v664, [/\([^\(]+\)\b/], JAM.policy.p17);
    var v645 = v655.toString();
    var v633 = JAM.call(v645.replace, v645, [/\(|\)/g, ""], JAM.policy.p15);
    var v621 = "<tr><td>" + v633;
    var v605 = v621 + "</td><td>";
    var v574 = v605 + tempNumber;
    var v525 = v574 + "</td><td>";
    var v526 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p10);
    var v447 = v525 + v526;
    var v254 = v447 + "</td></tr>\n";
    JAM.call(v253.write, v253, [v254], JAM.policy.p16);
    i$$10++;
    var v448 = arrayOfItems$$1.length;
    v255 = i$$10 < v448;
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
  var v449 = sequence$$17.length;
  var v263 = v449 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v450 = Math.random();
    var v257 = v450 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v257], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v258 = randNum$$1 + 1;
    var v259 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v258, v259], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v451 = tempSeq.length;
    var v262 = v451 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      JAM.call(v260.write, v260, [v261], JAM.policy.p16);
      tempSeq = "";
    }
    var v452 = sequence$$17.length;
    v263 = v452 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  JAM.call(v264.write, v264, [v265], JAM.policy.p16);
  return true;
}
function proteinStats(theDocument) {
  var newProtein = "";
  var title$$9 = "";
  var maxInput$$3 = 5E5;
  var v453 = testScript();
  var v266 = v453 == false;
  if (v266) {
    return false;
  }
  var v634 = theDocument.forms;
  var v622 = v634[0];
  var v606 = v622.elements;
  var v575 = v606[0];
  var v527 = checkFormElement(v575);
  var v454 = v527 == false;
  var v529 = !v454;
  if (v529) {
    var v646 = theDocument.forms;
    var v635 = v646[0];
    var v623 = v635.elements;
    var v607 = v623[0];
    var v576 = v607.value;
    var v528 = checkSequenceLength(v576, maxInput$$3);
    v454 = v528 == false;
  }
  var v267 = v454;
  if (v267) {
    return false;
  }
  var itemsToCheck = ["/A/ (A)1", "/B/ (B)1", "/C/ (C)1", "/D/ (D)1", "/E/ (E)1", "/F/ (F)1", "/G/ (G)1", "/H/ (H)1", "/I/ (I)1", "/K/ (K)1", "/L/ (L)1", "/M/ (M)1", "/N/ (N)1", "/P/ (P)1", "/Q/ (Q)1", "/R/ (R)1", "/S/ (S)1", "/T/ (T)1", "/V/ (V)1", "/W/ (W)1", "/X/ (X)1", "/Y/ (Y)1", "/Z/ (Z)1", "/[GAVLI]/ (Aliphatic G,A,V,L,I)1", "/[FWY]/ (Aromatic F,W,Y)1", "/[CM]/ (Sulphur C,M)1", "/[KRH]/ (Basic K,R,H)1", "/[BDENQZ]/ (Acidic B,D,E,N,Q,Z)1", "/[ST]/ (Aliphatic hydroxyl S,T)1", "/[ZEQRCMVILYW]/ (tRNA synthetase class I Z,E,Q,R,C,M,V,I,L,Y,W)1", 
  "/[BGAPSTHDNKF]/ (tRNA synthetase class II B,G,A,P,S,T,H,D,N,K,F)1"];
  openWindow("Protein Stats");
  var v608 = theDocument.forms;
  var v577 = v608[0];
  var v530 = v577.elements;
  var v455 = v530[0];
  var v268 = v455.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v268);
  var i$$11 = 0;
  var v456 = arrayOfFasta$$1.length;
  var v274 = i$$11 < v456;
  for (;v274;) {
    var v269 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v269);
    var v270 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v270);
    newProtein = removeNonProteinAllowDegen(newProtein);
    var v271 = outputWindow.document;
    var v272 = getInfoFromTitleAndSequence(title$$9, newProtein);
    JAM.call(v271.write, v271, [v272], JAM.policy.p16);
    writeSequenceStats(newProtein, itemsToCheck);
    var v273 = outputWindow.document;
    JAM.call(v273.write, v273, ["<br />\n<br />\n"], JAM.policy.p9);
    i$$11++;
    var v457 = arrayOfFasta$$1.length;
    v274 = i$$11 < v457;
  }
  closeWindow();
  return true;
}
JAM.set(document, "onload", v2);
var v275 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9);
JAM.set(v275, "onclick", v3);
var v276 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9);
JAM.set(v276, "onclick", v4)
