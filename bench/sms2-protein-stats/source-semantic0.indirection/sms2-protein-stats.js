function v4() {
  var v528 = document.forms;
  var v456 = v528[0];
  var v275 = v456.elements;
  var v5 = v275[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    proteinStats();
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v276 = document.main_form;
  var v7 = v276.main_submit;
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
  var v277 = arrayOfSequences.length;
  var v9 = v277 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v278 = arrayOfTitles.length;
  var v11 = i$$1 < v278;
  for (;v11;) {
    var v575 = arrayOfTitles[i$$1];
    var v529 = JAM.call(v575.search, v575, [/\S/], JAM.policy.p17);
    var v457 = v529 == -1;
    var v531 = !v457;
    if (v531) {
      var v576 = arrayOfSequences[i$$1];
      var v530 = JAM.call(v576.search, v576, [/\S/], JAM.policy.p17);
      v457 = v530 == -1;
    }
    var v279 = v457;
    var v459 = !v279;
    if (v459) {
      var v532 = arrayOfSequences[i$$1];
      var v458 = v532.length;
      v279 = v458 != lengthOfAlign;
    }
    var v10 = v279;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v280 = arrayOfTitles.length;
    v11 = i$$1 < v280;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v606 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17);
  var v577 = v606 == -1;
  var v608 = !v577;
  if (v608) {
    var v607 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17);
    v577 = v607 == -1;
  }
  var v533 = v577;
  var v579 = !v533;
  if (v579) {
    var v578 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17);
    v533 = v578 == -1;
  }
  var v460 = v533;
  var v535 = !v460;
  if (v535) {
    var v534 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17);
    v460 = v534 == -1;
  }
  var v281 = v460;
  var v462 = !v281;
  if (v462) {
    var v461 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17);
    v281 = v461 == -1;
  }
  var v12 = v281;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v463 = formElement.value;
  var v282 = JAM.call(v463.search, v463, [/\S/], JAM.policy.p17);
  var v13 = v282 == -1;
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
  var v283 = arrayOfPatterns.length;
  var v16 = z$$2 < v283;
  for (;v16;) {
    var v464 = arrayOfPatterns[z$$2];
    var v284 = JAM.call(v464.search, v464, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17);
    var v14 = v284 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v465 = arrayOfPatterns[z$$2];
    var v285 = moreExpressionCheck(v465);
    var v15 = v285 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v286 = arrayOfPatterns.length;
    v16 = z$$2 < v286;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v287 = arrayOfPatterns.length;
  var v22 = j < v287;
  for (;v22;) {
    var v466 = arrayOfPatterns[j];
    var v288 = JAM.call(v466.match, v466, [/\/.+\//], JAM.policy.p17);
    var v19 = v288 + "gi";
    if (JAM.isEval(eval)) {
      var v691 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v691 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v691;
    var v289 = arrayOfPatterns[j];
    var v20 = JAM.call(v289.match, v289, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v692 = v20.toString();
    geneticCodeMatchResult[j] = v692;
    var v21 = geneticCodeMatchResult[j];
    var v693 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v693;
    j++;
    var v290 = arrayOfPatterns.length;
    v22 = j < v290;
  }
  var i$$2 = 0;
  var v467 = testSequence.length;
  var v291 = v467 - 3;
  var v29 = i$$2 <= v291;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p16);
    j = 0;
    var v292 = geneticCodeMatchExp.length;
    var v27 = j < v292;
    for (;v27;) {
      var v468 = geneticCodeMatchExp[j];
      var v293 = JAM.call(codon.search, codon, [v468], JAM.policy.p15);
      var v26 = v293 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v294 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v294 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v295 = geneticCodeMatchExp.length;
      v27 = j < v295;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v469 = testSequence.length;
    var v296 = v469 - 3;
    v29 = i$$2 <= v296;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v297 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v297;
  for (;v31;) {
    var v470 = arrayOfPatterns$$1[z$$3];
    var v298 = JAM.call(v470.search, v470, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17);
    var v30 = v298 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v299 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v299;
  }
  var i$$3 = 0;
  var v300 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v300;
  for (;v35;) {
    var v471 = arrayOfPatterns$$1[i$$3];
    var v301 = "[" + v471;
    var v32 = v301 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v302 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v302;
    for (;v34;) {
      var v472 = arrayOfPatterns$$1[j$$1];
      var v303 = JAM.call(v472.search, v472, [re], JAM.policy.p15);
      var v33 = v303 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v304 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v304;
    }
    i$$3++;
    var v305 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v305;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v306 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v306;
  for (;v38;) {
    var v473 = arrayOfPatterns$$2[z$$4];
    var v307 = JAM.call(v473.search, v473, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17);
    var v36 = v307 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v474 = arrayOfPatterns$$2[z$$4];
    var v308 = moreExpressionCheck(v474);
    var v37 = v308 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v309 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v309;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v536 = getSequenceFromFasta(text$$7);
  var v475 = JAM.call(v536.replace, v536, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v310 = v475.length;
  var v40 = v310 > maxInput;
  if (v40) {
    var v311 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v311 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v312 = text$$8.length;
  var v42 = v312 > maxInput$$1;
  if (v42) {
    var v313 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v313 + " characters.";
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
  JAM.call(v43.write, v43, ["</form>"], JAM.policy.p10);
  return true;
}
function closePre() {
  var v44 = outputWindow.document;
  JAM.call(v44.write, v44, ["</div>"], JAM.policy.p10);
  var v45 = outputWindow.document;
  JAM.call(v45.write, v45, ["</pre>\n"], JAM.policy.p10);
  return;
}
function closeTextArea() {
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</textarea>"], JAM.policy.p10);
  return true;
}
function closeWindow() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</body>\n</html>\n"], JAM.policy.p10);
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
  var v314 = alignArray.length;
  var v49 = v314 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v315 = alignArray.length;
  var v51 = i$$4 < v315;
  for (;v51;) {
    var v476 = alignArray[i$$4];
    var v316 = JAM.call(v476.search, v476, [/[^\s]+\s/], JAM.policy.p17);
    var v50 = v316 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v317 = alignArray.length;
    v51 = i$$4 < v317;
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
  var v318 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v54 = v318 != -1;
  if (v54) {
    var v53 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p15);
    for (;v53;) {
      var v52 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v52], JAM.policy.p15);
      v53 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p15);
    }
  } else {
    arrayOfFasta[0] = sequenceData;
  }
  return arrayOfFasta;
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v319 = sequence$$2.length;
  var v55 = "&gt;results for " + v319;
  var stringToReturn = v55 + " residue sequence ";
  var v320 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p17);
  var v57 = v320 != -1;
  if (v57) {
    var v321 = stringToReturn + '"';
    var v56 = v321 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v322 = stringToReturn + ' starting "';
  var v323 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v322 + v323;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v324 = sequenceOne.length;
  var v59 = "Search results for " + v324;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v325 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p17);
  var v61 = v325 != -1;
  if (v61) {
    var v326 = stringToReturn$$1 + '"';
    var v60 = v326 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v327 = stringToReturn$$1 + ' starting "';
  var v328 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v327 + v328;
  stringToReturn$$1 = v62 + '"\n';
  var v329 = stringToReturn$$1 + "and ";
  var v330 = sequenceTwo.length;
  var v63 = v329 + v330;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v331 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p17);
  var v65 = v331 != -1;
  if (v65) {
    var v332 = stringToReturn$$1 + '"';
    var v64 = v332 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v333 = stringToReturn$$1 + ' starting "';
  var v334 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v66 = v333 + v334;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v335 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v335;
  for (;v70;) {
    var v477 = arrayOfPatterns$$3[j$$2];
    var v336 = JAM.call(v477.match, v477, [/\/.+\//], JAM.policy.p17);
    var v69 = v336 + "gi";
    if (JAM.isEval(eval)) {
      var v694 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v694 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v694;
    j$$2++;
    var v337 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v337;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v338 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v338;
  for (;v74;) {
    var v339 = arrayOfPatterns$$4[j$$3];
    var v72 = JAM.call(v339.match, v339, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v695 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v695;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v696 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v696;
    j$$3++;
    var v340 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v340;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v341 = sequence$$3.length;
  var v75 = "Results for " + v341;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v342 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p17);
  var v77 = v342 != -1;
  if (v77) {
    var v343 = stringToReturn$$2 + '"';
    var v76 = v343 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v344 = stringToReturn$$2 + ' starting "';
  var v345 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v78 = v344 + v345;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v478 = "Results for " + topology;
  var v346 = v478 + " ";
  var v347 = sequence$$4.length;
  var v80 = v346 + v347;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v348 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p17);
  var v82 = v348 != -1;
  if (v82) {
    var v349 = stringToReturn$$3 + '"';
    var v81 = v349 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v350 = stringToReturn$$3 + ' starting "';
  var v351 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v350 + v351;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v352 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v352;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v353 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p17);
  var v87 = v353 != -1;
  if (v87) {
    var v354 = stringToReturn$$4 + '"';
    var v86 = v354 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v355 = stringToReturn$$4 + ' starting "';
  var v356 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v355 + v356;
  stringToReturn$$4 = v88 + '"\n';
  var v357 = stringToReturn$$4 + "and ";
  var v358 = sequenceTwo$$1.length;
  var v89 = v357 + v358;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v359 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p17);
  var v91 = v359 != -1;
  if (v91) {
    var v360 = stringToReturn$$4 + '"';
    var v90 = v360 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v361 = stringToReturn$$4 + ' starting "';
  var v362 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v92 = v361 + v362;
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
    var v363 = Math.random();
    var v364 = components.length;
    var v94 = v363 * v364;
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p15);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p10);
}
function getSequenceFromFasta(sequenceRecord) {
  var v365 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v96 = v365 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v366 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v98 = v366 != -1;
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
  var v669 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p17);
  var v662 = v669 != -1;
  var v671 = !v662;
  if (v671) {
    var v670 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17);
    v662 = v670 != -1;
  }
  var v653 = v662;
  var v664 = !v653;
  if (v664) {
    var v663 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17);
    v653 = v663 != -1;
  }
  var v644 = v653;
  var v655 = !v644;
  if (v655) {
    var v654 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17);
    v644 = v654 != -1;
  }
  var v633 = v644;
  var v646 = !v633;
  if (v646) {
    var v645 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17);
    v633 = v645 != -1;
  }
  var v621 = v633;
  var v635 = !v621;
  if (v635) {
    var v634 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17);
    v621 = v634 != -1;
  }
  var v609 = v621;
  var v623 = !v609;
  if (v623) {
    var v622 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17);
    v609 = v622 != -1;
  }
  var v580 = v609;
  var v611 = !v580;
  if (v611) {
    var v610 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17);
    v580 = v610 != -1;
  }
  var v537 = v580;
  var v582 = !v537;
  if (v582) {
    var v581 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17);
    v537 = v581 != -1;
  }
  var v479 = v537;
  var v539 = !v479;
  if (v539) {
    var v538 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17);
    v479 = v538 != -1;
  }
  var v367 = v479;
  var v481 = !v367;
  if (v481) {
    var v480 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17);
    v367 = v480 != -1;
  }
  var v99 = v367;
  if (v99) {
    return false;
  }
  return true;
}
function openForm() {
  var v100 = outputWindow.document;
  JAM.call(v100.write, v100, ['<form action="">\n'], JAM.policy.p10);
  return true;
}
function openPre() {
  var v101 = outputWindow.document;
  JAM.call(v101.write, v101, ["<pre>"], JAM.policy.p10);
  var v102 = outputWindow.document;
  JAM.call(v102.write, v102, ['<div class="pre">'], JAM.policy.p10);
  return;
}
function openTextArea() {
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p10);
  return true;
}
function openWindow() {
  var title$$5 = "Protein Stats";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v540 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v482 = v540 + "<head>\n";
  var v368 = v482 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v368 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p15);
  if (isColor) {
    var v106 = outputWindow.document;
    var v684 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v680 = v684 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v676 = v680 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v672 = v676 + "div.info {font-weight: bold}\n";
    var v665 = v672 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v656 = v665 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v647 = v656 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v636 = v647 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v624 = v636 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v612 = v624 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v583 = v612 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v541 = v583 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v483 = v541 + "td.many {color: #000000}\n";
    var v369 = v483 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v369 + "</style>\n";
    JAM.call(v106.write, v106, [v107], JAM.policy.p15);
  } else {
    var v108 = outputWindow.document;
    var v688 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v685 = v688 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v681 = v685 + "div.title {display: none}\n";
    var v677 = v681 + "div.info {font-weight: bold}\n";
    var v673 = v677 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v666 = v673 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v657 = v666 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v648 = v657 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v637 = v648 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v625 = v637 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v613 = v625 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v584 = v613 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v542 = v584 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v484 = v542 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v370 = v484 + "img {display: none}\n";
    var v109 = v370 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p15);
  }
  var v110 = outputWindow.document;
  var v543 = "</head>\n" + '<body class="main">\n';
  var v485 = v543 + '<div class="title">';
  var v371 = v485 + title$$6;
  var v111 = v371 + " results</div>\n";
  JAM.call(v110.write, v110, [v111], JAM.policy.p15);
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
  var v544 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v486 = v544 + "<head>\n";
  var v372 = v486 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v372 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p15);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v686 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v682 = v686 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v678 = v682 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v674 = v678 + "div.info {font-weight: bold}\n";
    var v667 = v674 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v658 = v667 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v649 = v658 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v638 = v649 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v626 = v638 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v614 = v626 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v585 = v614 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v545 = v585 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v487 = v545 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v373 = v487 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v373 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p15);
  } else {
    var v116 = outputWindow.document;
    var v690 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v689 = v690 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v687 = v689 + "div.title {display: none}\n";
    var v683 = v687 + "div.info {font-weight: bold}\n";
    var v679 = v683 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v675 = v679 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v668 = v675 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v659 = v668 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v650 = v659 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v639 = v650 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v627 = v639 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v615 = v627 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v586 = v615 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v546 = v586 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v488 = v546 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v374 = v488 + "img {display: none}\n";
    var v117 = v374 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p15);
  }
  var v118 = outputWindow.document;
  var v547 = "</head>\n" + '<body class="main">\n';
  var v489 = v547 + '<div class="title">';
  var v375 = v489 + title$$8;
  var v119 = v375 + " results</div>\n";
  JAM.call(v118.write, v118, [v119], JAM.policy.p15);
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
  var v376 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p17);
  var v120 = v376 != -1;
  if (v120) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p17);
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p15);
  var v377 = testArray[0];
  var v124 = v377 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v378 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p15);
  var v125 = v378 == -1;
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
  var v379 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9);
  var v128 = v379 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v380 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9);
  var v129 = v380 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v381 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p17);
  var v130 = v381 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v587 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17);
  var v548 = v587 == -1;
  var v589 = !v548;
  if (v589) {
    var v588 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17);
    v548 = v588 == -1;
  }
  var v490 = v548;
  var v550 = !v490;
  if (v550) {
    var v549 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17);
    v490 = v549 == -1;
  }
  var v382 = v490;
  var v492 = !v382;
  if (v492) {
    var v491 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17);
    v382 = v491 == -1;
  }
  var v131 = v382;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v383 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p17);
  var v132 = v383 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v384 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v384 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v385 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p17);
  var v135 = v385 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v386 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p17);
  var v136 = v386 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v590 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17);
  var v551 = v590 == -1;
  var v592 = !v551;
  if (v592) {
    var v591 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17);
    v551 = v591 == -1;
  }
  var v493 = v551;
  var v553 = !v493;
  if (v553) {
    var v552 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17);
    v493 = v552 == -1;
  }
  var v387 = v493;
  var v495 = !v387;
  if (v495) {
    var v494 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17);
    v387 = v494 == -1;
  }
  var v137 = v387;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v593 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17);
  var v554 = v593 == -1;
  var v595 = !v554;
  if (v595) {
    var v594 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17);
    v554 = v594 == -1;
  }
  var v496 = v554;
  var v556 = !v496;
  if (v556) {
    var v555 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17);
    v496 = v555 == -1;
  }
  var v388 = v496;
  var v498 = !v388;
  if (v498) {
    var v497 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17);
    v388 = v497 == -1;
  }
  var v138 = v388;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v389 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p17);
  var v139 = v389 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v596 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17);
  var v557 = v596 == -1;
  var v598 = !v557;
  if (v598) {
    var v597 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17);
    v557 = v597 == -1;
  }
  var v499 = v557;
  var v559 = !v499;
  if (v559) {
    var v558 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17);
    v499 = v558 == -1;
  }
  var v390 = v499;
  var v501 = !v390;
  if (v501) {
    var v500 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17);
    v390 = v500 == -1;
  }
  var v140 = v390;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v391 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p17);
  var v141 = v391 == -1;
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
    var v392 = basePerLine / groupSize;
    var v145 = j$$6 <= v392;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v393 = k + i$$5;
        var v143 = JAM.call(text$$10.charAt, text$$10, [v393], JAM.policy.p15);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v394 = basePerLine / groupSize;
      v145 = j$$6 <= v394;
    }
    var v146 = outputWindow.document;
    var v147 = lineOfText + "\n";
    JAM.call(v146.write, v146, [v147], JAM.policy.p15);
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
    var v395 = adjustment < 0;
    if (v395) {
      v395 = adjusted >= 0;
    }
    var v149 = v395;
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
    var v396 = basePerLine$$2 / groupSize$$2;
    var v156 = j$$7 <= v396;
    for (;v156;) {
      var v152 = k$$1 < groupSize$$2;
      for (;v152;) {
        var v397 = i$$6 + k$$1;
        var v150 = v397 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v398 = k$$1 + i$$6;
        var v151 = JAM.call(text$$12.charAt, text$$12, [v398], JAM.policy.p15);
        lineOfText$$1 = lineOfText$$1 + v151;
        k$$1 = k$$1 + 1;
        v152 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v154 = numberPosition$$1 == "above";
      if (v154) {
        var v399 = adjustNumbering(i$$6, numberingAdjustment);
        var v153 = rightNum(v399, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v153;
      }
      var v155 = i$$6 >= stopBase$$2;
      if (v155) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v400 = basePerLine$$2 / groupSize$$2;
      v156 = j$$7 <= v400;
    }
    var v179 = numberPosition$$1 == "left";
    if (v179) {
      var v157 = outputWindow.document;
      var v560 = adjustNumbering(lineNum, numberingAdjustment);
      var v502 = rightNum(v560, "", 8, tabIn$$3);
      var v401 = v502 + lineOfText$$1;
      var v158 = v401 + "\n";
      JAM.call(v157.write, v157, [v158], JAM.policy.p15);
      var v162 = strands$$1 == "two";
      if (v162) {
        var v159 = outputWindow.document;
        var v561 = adjustNumbering(lineNum, numberingAdjustment);
        var v503 = rightNum(v561, "", 8, tabIn$$3);
        var v504 = complement(lineOfText$$1);
        var v402 = v503 + v504;
        var v160 = v402 + "\n";
        JAM.call(v159.write, v159, [v160], JAM.policy.p15);
        var v161 = outputWindow.document;
        JAM.call(v161.write, v161, ["\n"], JAM.policy.p10);
      }
    } else {
      var v178 = numberPosition$$1 == "right";
      if (v178) {
        var v163 = outputWindow.document;
        var v505 = adjustNumbering(i$$6, numberingAdjustment);
        var v403 = lineOfText$$1 + v505;
        var v164 = v403 + "\n";
        JAM.call(v163.write, v163, [v164], JAM.policy.p15);
        var v168 = strands$$1 == "two";
        if (v168) {
          var v165 = outputWindow.document;
          var v506 = complement(lineOfText$$1);
          var v507 = adjustNumbering(i$$6, numberingAdjustment);
          var v404 = v506 + v507;
          var v166 = v404 + "\n";
          JAM.call(v165.write, v165, [v166], JAM.policy.p15);
          var v167 = outputWindow.document;
          JAM.call(v167.write, v167, ["\n"], JAM.policy.p10);
        }
      } else {
        var v177 = numberPosition$$1 == "above";
        if (v177) {
          var v169 = outputWindow.document;
          var v170 = aboveNum + "\n";
          JAM.call(v169.write, v169, [v170], JAM.policy.p15);
          var v171 = outputWindow.document;
          var v172 = lineOfText$$1 + "\n";
          JAM.call(v171.write, v171, [v172], JAM.policy.p15);
          var v176 = strands$$1 == "two";
          if (v176) {
            var v173 = outputWindow.document;
            var v405 = complement(lineOfText$$1);
            var v174 = v405 + "\n";
            JAM.call(v173.write, v173, [v174], JAM.policy.p15);
            var v175 = outputWindow.document;
            JAM.call(v175.write, v175, ["\n"], JAM.policy.p10);
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
    var v406 = basePerLine$$3 / groupSize$$3;
    var v187 = j$$8 <= v406;
    for (;v187;) {
      var v183 = k$$2 < groupSize$$3;
      for (;v183;) {
        var v407 = i$$7 + k$$2;
        var v181 = v407 >= stopBase$$3;
        if (v181) {
          break;
        }
        var v408 = k$$2 + i$$7;
        var v182 = JAM.call(text$$13.charAt, text$$13, [v408], JAM.policy.p15);
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
      var v409 = basePerLine$$3 / groupSize$$3;
      v187 = j$$8 <= v409;
    }
    var v198 = numberPosition$$2 == "left";
    if (v198) {
      var v188 = outputWindow.document;
      var v508 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v410 = v508 + lineOfText$$2;
      var v189 = v410 + "\n";
      JAM.call(v188.write, v188, [v189], JAM.policy.p15);
    } else {
      var v197 = numberPosition$$2 == "right";
      if (v197) {
        var v190 = outputWindow.document;
        var v411 = lineOfText$$2 + i$$7;
        var v191 = v411 + "\n";
        JAM.call(v190.write, v190, [v191], JAM.policy.p15);
      } else {
        var v196 = numberPosition$$2 == "above";
        if (v196) {
          var v192 = outputWindow.document;
          var v193 = aboveNum$$1 + "\n";
          JAM.call(v192.write, v192, [v193], JAM.policy.p15);
          var v194 = outputWindow.document;
          var v195 = lineOfText$$2 + "\n";
          JAM.call(v194.write, v194, [v195], JAM.policy.p15);
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
  var v562 = sequence$$13.length;
  var v509 = v562 <= firstIndexToMutate;
  var v563 = !v509;
  if (v563) {
    v509 = lastIndexToMutate < 0;
  }
  var v412 = v509;
  var v510 = !v412;
  if (v510) {
    v412 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v200 = v412;
  if (v200) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v208 = i$$8 < numMut;
  for (;v208;) {
    maxNum = sequence$$13.length;
    var v413 = Math.random();
    var v201 = v413 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v201], JAM.policy.p17);
    var v414 = randNum < firstIndexToMutate;
    var v511 = !v414;
    if (v511) {
      v414 = randNum > lastIndexToMutate;
    }
    var v202 = v414;
    if (v202) {
      numMut++;
      i$$8++;
      v208 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p17);
    needNewChar = true;
    for (;needNewChar;) {
      var v415 = Math.random();
      var v416 = components$$1.length;
      var v203 = v415 * v416;
      componentsIndex = JAM.call(Math.round, Math, [v203], JAM.policy.p17);
      var v417 = components$$1.length;
      var v204 = componentsIndex == v417;
      if (v204) {
        componentsIndex = 0;
      }
      var v418 = components$$1[componentsIndex];
      var v205 = v418 != currentChar;
      if (v205) {
        needNewChar = false;
      }
    }
    var v419 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v420 = components$$1[componentsIndex];
    var v206 = v419 + v420;
    var v421 = randNum + 1;
    var v422 = sequence$$13.length;
    var v207 = JAM.call(sequence$$13.substring, sequence$$13, [v421, v422], JAM.policy.p27);
    sequence$$13 = v206 + v207;
    i$$8++;
    v208 = i$$8 < numMut;
  }
  var v209 = outputWindow.document;
  var v210 = addReturns(sequence$$13);
  JAM.call(v209.write, v209, [v210], JAM.policy.p15);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v215 = j$$9 < lengthOut$$1;
  for (;v215;) {
    var v423 = Math.random();
    var v424 = components$$2.length;
    var v211 = v423 * v424;
    tempNum$$1 = JAM.call(Math.floor, Math, [v211], JAM.policy.p17);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v425 = sequence$$14.length;
    var v214 = v425 == 60;
    if (v214) {
      var v212 = outputWindow.document;
      var v213 = sequence$$14 + "\n";
      JAM.call(v212.write, v212, [v213], JAM.policy.p15);
      sequence$$14 = "";
    }
    j$$9++;
    v215 = j$$9 < lengthOut$$1;
  }
  var v216 = outputWindow.document;
  var v217 = sequence$$14 + "\n";
  JAM.call(v216.write, v216, [v217], JAM.policy.p15);
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
    var v564 = sequence$$15.length;
    var v512 = v564 - lookAhead;
    var v513 = sequence$$15.length;
    var v426 = JAM.call(sequence$$15.substring, sequence$$15, [v512, v513], JAM.policy.p27);
    var v219 = v426 + sequence$$15;
    var v220 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v219 + v220;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v222 = outputWindow.document;
  JAM.call(v222.write, v222, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p10);
  var v223 = outputWindow.document;
  var v565 = '<tr><td class="title" width="200px">' + "Site:";
  var v514 = v565 + '</td><td class="title">';
  var v427 = v514 + "Positions:";
  var v224 = v427 + "</td></tr>\n";
  JAM.call(v223.write, v223, [v224], JAM.policy.p15);
  var i$$9 = 0;
  var v428 = arrayOfItems.length;
  var v240 = i$$9 < v428;
  for (;v240;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v429 = arrayOfItems[i$$9];
    var v225 = JAM.call(v429.match, v429, [/\/.+\//], JAM.policy.p17);
    matchExp = v225 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v566 = arrayOfItems[i$$9];
    var v515 = JAM.call(v566.match, v566, [/\)\D*\d+/], JAM.policy.p17);
    var v430 = v515.toString();
    var v226 = JAM.call(v430.replace, v430, [/\)\D*/, ""], JAM.policy.p16);
    cutDistance = parseFloat(v226);
    var v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p15);
    for (;v232;) {
      var v227 = matchExp.lastIndex;
      matchPosition = v227 - cutDistance;
      var v431 = matchPosition >= lowerLimit;
      if (v431) {
        v431 = matchPosition < upperLimit;
      }
      var v230 = v431;
      if (v230) {
        timesFound++;
        var v228 = tempString$$1 + ", ";
        var v432 = matchPosition - shiftValue;
        var v229 = v432 + 1;
        tempString$$1 = v228 + v229;
      }
      var v433 = matchExp.lastIndex;
      var v516 = RegExp.lastMatch;
      var v434 = v516.length;
      var v231 = v433 - v434;
      matchExp.lastIndex = v231 + 1;
      v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p15);
    }
    var v435 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p17);
    var v233 = v435 != -1;
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
    var v640 = '<tr><td class="' + backGroundClass;
    var v628 = v640 + '">';
    var v660 = arrayOfItems[i$$9];
    var v651 = JAM.call(v660.match, v660, [/\([^\(]+\)/], JAM.policy.p17);
    var v641 = v651.toString();
    var v629 = JAM.call(v641.replace, v641, [/\(|\)/g, ""], JAM.policy.p16);
    var v616 = v628 + v629;
    var v599 = v616 + '</td><td class="';
    var v567 = v599 + backGroundClass;
    var v517 = v567 + '">';
    var v436 = v517 + tempString$$1;
    var v239 = v436 + "</td></tr>\n";
    JAM.call(v238.write, v238, [v239], JAM.policy.p15);
    timesFound = 0;
    i$$9++;
    var v437 = arrayOfItems.length;
    v240 = i$$9 < v437;
  }
  var v241 = outputWindow.document;
  JAM.call(v241.write, v241, ["</tbody></table>\n"], JAM.policy.p10);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v242 = outputWindow.document;
  JAM.call(v242.write, v242, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p10);
  var v243 = outputWindow.document;
  var v617 = '<tr><td class="title">' + "Pattern:";
  var v600 = v617 + '</td><td class="title">';
  var v568 = v600 + "Times found:";
  var v518 = v568 + '</td><td class="title">';
  var v438 = v518 + "Percentage:";
  var v244 = v438 + "</td></tr>\n";
  JAM.call(v243.write, v243, [v244], JAM.policy.p15);
  var i$$10 = 0;
  var v439 = arrayOfItems$$1.length;
  var v253 = i$$10 < v439;
  for (;v253;) {
    var tempNumber = 0;
    var v440 = arrayOfItems$$1[i$$10];
    var v245 = JAM.call(v440.match, v440, [/\/[^\/]+\//], JAM.policy.p17);
    var matchExp$$1 = v245 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v441 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p15);
    var v247 = v441 != -1;
    if (v247) {
      var v246 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p15);
      tempNumber = v246.length;
    }
    var percentage = 0;
    var v519 = originalLength + 1;
    var v601 = arrayOfItems$$1[i$$10];
    var v569 = JAM.call(v601.match, v601, [/\d+/], JAM.policy.p17);
    var v520 = parseFloat(v569);
    var v442 = v519 - v520;
    var v250 = v442 > 0;
    if (v250) {
      var v248 = 100 * tempNumber;
      var v443 = originalLength + 1;
      var v570 = arrayOfItems$$1[i$$10];
      var v521 = JAM.call(v570.match, v570, [/\d+/], JAM.policy.p17);
      var v444 = parseFloat(v521);
      var v249 = v443 - v444;
      percentage = v248 / v249;
    }
    var v251 = outputWindow.document;
    var v661 = arrayOfItems$$1[i$$10];
    var v652 = JAM.call(v661.match, v661, [/\([^\(]+\)\b/], JAM.policy.p17);
    var v642 = v652.toString();
    var v630 = JAM.call(v642.replace, v642, [/\(|\)/g, ""], JAM.policy.p16);
    var v618 = "<tr><td>" + v630;
    var v602 = v618 + "</td><td>";
    var v571 = v602 + tempNumber;
    var v522 = v571 + "</td><td>";
    var v523 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9);
    var v445 = v522 + v523;
    var v252 = v445 + "</td></tr>\n";
    JAM.call(v251.write, v251, [v252], JAM.policy.p15);
    i$$10++;
    var v446 = arrayOfItems$$1.length;
    v253 = i$$10 < v446;
  }
  var v254 = outputWindow.document;
  JAM.call(v254.write, v254, ["</tbody></table>\n"], JAM.policy.p10);
  return;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v447 = sequence$$17.length;
  var v261 = v447 > 0;
  for (;v261;) {
    maxNum$$1 = sequence$$17.length;
    var v448 = Math.random();
    var v255 = v448 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v255], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v256 = randNum$$1 + 1;
    var v257 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v256, v257], JAM.policy.p16);
    sequence$$17 = tempString1 + tempString2;
    var v449 = tempSeq.length;
    var v260 = v449 == 60;
    if (v260) {
      var v258 = outputWindow.document;
      var v259 = tempSeq + "\n";
      JAM.call(v258.write, v258, [v259], JAM.policy.p15);
      tempSeq = "";
    }
    var v450 = sequence$$17.length;
    v261 = v450 > 0;
  }
  var v262 = outputWindow.document;
  var v263 = tempSeq + "\n";
  JAM.call(v262.write, v262, [v263], JAM.policy.p15);
  return true;
}
function proteinStats() {
  var theDocument = document;
  var newProtein = "";
  var title$$9 = "";
  var maxInput$$3 = 5E5;
  var v451 = testScript();
  var v264 = v451 == false;
  if (v264) {
    return;
  }
  var v631 = theDocument.forms;
  var v619 = v631[0];
  var v603 = v619.elements;
  var v572 = v603[0];
  var v524 = checkFormElement(v572);
  var v452 = v524 == false;
  var v526 = !v452;
  if (v526) {
    var v643 = theDocument.forms;
    var v632 = v643[0];
    var v620 = v632.elements;
    var v604 = v620[0];
    var v573 = v604.value;
    var v525 = checkSequenceLength(v573, maxInput$$3);
    v452 = v525 == false;
  }
  var v265 = v452;
  if (v265) {
    return;
  }
  var itemsToCheck = ["/A/ (A)1", "/B/ (B)1", "/C/ (C)1", "/D/ (D)1", "/E/ (E)1", "/F/ (F)1", "/G/ (G)1", "/H/ (H)1", "/I/ (I)1", "/K/ (K)1", "/L/ (L)1", "/M/ (M)1", "/N/ (N)1", "/P/ (P)1", "/Q/ (Q)1", "/R/ (R)1", "/S/ (S)1", "/T/ (T)1", "/V/ (V)1", "/W/ (W)1", "/X/ (X)1", "/Y/ (Y)1", "/Z/ (Z)1", "/[GAVLI]/ (Aliphatic G,A,V,L,I)1", "/[FWY]/ (Aromatic F,W,Y)1", "/[CM]/ (Sulphur C,M)1", "/[KRH]/ (Basic K,R,H)1", "/[BDENQZ]/ (Acidic B,D,E,N,Q,Z)1", "/[ST]/ (Aliphatic hydroxyl S,T)1", "/[ZEQRCMVILYW]/ (tRNA synthetase class I Z,E,Q,R,C,M,V,I,L,Y,W)1", 
  "/[BGAPSTHDNKF]/ (tRNA synthetase class II B,G,A,P,S,T,H,D,N,K,F)1"];
  openWindow();
  var v605 = theDocument.forms;
  var v574 = v605[0];
  var v527 = v574.elements;
  var v453 = v527[0];
  var v266 = v453.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v266);
  var i$$11 = 0;
  var v454 = arrayOfFasta$$1.length;
  var v272 = i$$11 < v454;
  for (;v272;) {
    var v267 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v267);
    var v268 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v268);
    newProtein = removeNonProteinAllowDegen(newProtein);
    var v269 = outputWindow.document;
    var v270 = getInfoFromTitleAndSequence(title$$9, newProtein);
    JAM.call(v269.write, v269, [v270], JAM.policy.p15);
    writeSequenceStats(newProtein, itemsToCheck);
    var v271 = outputWindow.document;
    JAM.call(v271.write, v271, ["<br />\n<br />\n"], JAM.policy.p10);
    i$$11++;
    var v455 = arrayOfFasta$$1.length;
    v272 = i$$11 < v455;
  }
  closeWindow();
  return;
}
JAM.set(document, "onload", v2);
var v273 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p10);
JAM.set(v273, "onclick", v3);
var v274 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p10);
JAM.set(v274, "onclick", v4)
