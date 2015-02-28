function v4() {
  var v538 = document.forms;
  var v466 = v538[0];
  var v281 = v466.elements;
  var v5 = v281[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    proteinGravy();
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v282 = document.main_form;
  var v7 = v282.main_submit;
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
  var v283 = arrayOfSequences.length;
  var v9 = v283 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v284 = arrayOfTitles.length;
  var v11 = i$$1 < v284;
  for (;v11;) {
    var v585 = arrayOfTitles[i$$1];
    var v539 = JAM.call(v585.search, v585, [/\S/], JAM.policy.p16);
    var v467 = v539 == -1;
    var v541 = !v467;
    if (v541) {
      var v586 = arrayOfSequences[i$$1];
      var v540 = JAM.call(v586.search, v586, [/\S/], JAM.policy.p16);
      v467 = v540 == -1;
    }
    var v285 = v467;
    var v469 = !v285;
    if (v469) {
      var v542 = arrayOfSequences[i$$1];
      var v468 = v542.length;
      v285 = v468 != lengthOfAlign;
    }
    var v10 = v285;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v286 = arrayOfTitles.length;
    v11 = i$$1 < v286;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v616 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p16);
  var v587 = v616 == -1;
  var v618 = !v587;
  if (v618) {
    var v617 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p16);
    v587 = v617 == -1;
  }
  var v543 = v587;
  var v589 = !v543;
  if (v589) {
    var v588 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p16);
    v543 = v588 == -1;
  }
  var v470 = v543;
  var v545 = !v470;
  if (v545) {
    var v544 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p16);
    v470 = v544 == -1;
  }
  var v287 = v470;
  var v472 = !v287;
  if (v472) {
    var v471 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p16);
    v287 = v471 == -1;
  }
  var v12 = v287;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v473 = formElement.value;
  var v288 = JAM.call(v473.search, v473, [/\S/], JAM.policy.p16);
  var v13 = v288 == -1;
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
  var v289 = arrayOfPatterns.length;
  var v16 = z$$2 < v289;
  for (;v16;) {
    var v474 = arrayOfPatterns[z$$2];
    var v290 = JAM.call(v474.search, v474, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p16);
    var v14 = v290 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v475 = arrayOfPatterns[z$$2];
    var v291 = moreExpressionCheck(v475);
    var v15 = v291 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v292 = arrayOfPatterns.length;
    v16 = z$$2 < v292;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v293 = arrayOfPatterns.length;
  var v22 = j < v293;
  for (;v22;) {
    var v476 = arrayOfPatterns[j];
    var v294 = JAM.call(v476.match, v476, [/\/.+\//], JAM.policy.p16);
    var v19 = v294 + "gi";
    if (JAM.isEval(eval)) {
      var v701 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v701 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v701;
    var v295 = arrayOfPatterns[j];
    var v20 = JAM.call(v295.match, v295, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v702 = v20.toString();
    geneticCodeMatchResult[j] = v702;
    var v21 = geneticCodeMatchResult[j];
    var v703 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v703;
    j++;
    var v296 = arrayOfPatterns.length;
    v22 = j < v296;
  }
  var i$$2 = 0;
  var v477 = testSequence.length;
  var v297 = v477 - 3;
  var v29 = i$$2 <= v297;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p15);
    j = 0;
    var v298 = geneticCodeMatchExp.length;
    var v27 = j < v298;
    for (;v27;) {
      var v478 = geneticCodeMatchExp[j];
      var v299 = JAM.call(codon.search, codon, [v478], JAM.policy.p17);
      var v26 = v299 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v300 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v300 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v301 = geneticCodeMatchExp.length;
      v27 = j < v301;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v479 = testSequence.length;
    var v302 = v479 - 3;
    v29 = i$$2 <= v302;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v303 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v303;
  for (;v31;) {
    var v480 = arrayOfPatterns$$1[z$$3];
    var v304 = JAM.call(v480.search, v480, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p16);
    var v30 = v304 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v305 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v305;
  }
  var i$$3 = 0;
  var v306 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v306;
  for (;v35;) {
    var v481 = arrayOfPatterns$$1[i$$3];
    var v307 = "[" + v481;
    var v32 = v307 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v308 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v308;
    for (;v34;) {
      var v482 = arrayOfPatterns$$1[j$$1];
      var v309 = JAM.call(v482.search, v482, [re], JAM.policy.p17);
      var v33 = v309 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v310 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v310;
    }
    i$$3++;
    var v311 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v311;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v312 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v312;
  for (;v38;) {
    var v483 = arrayOfPatterns$$2[z$$4];
    var v313 = JAM.call(v483.search, v483, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p16);
    var v36 = v313 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v484 = arrayOfPatterns$$2[z$$4];
    var v314 = moreExpressionCheck(v484);
    var v37 = v314 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v315 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v315;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v546 = getSequenceFromFasta(text$$7);
  var v485 = JAM.call(v546.replace, v546, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v316 = v485.length;
  var v40 = v316 > maxInput;
  if (v40) {
    var v317 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v317 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v318 = text$$8.length;
  var v42 = v318 > maxInput$$1;
  if (v42) {
    var v319 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v319 + " characters.";
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
  var v320 = alignArray.length;
  var v49 = v320 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v321 = alignArray.length;
  var v51 = i$$4 < v321;
  for (;v51;) {
    var v486 = alignArray[i$$4];
    var v322 = JAM.call(v486.search, v486, [/[^\s]+\s/], JAM.policy.p16);
    var v50 = v322 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v323 = alignArray.length;
    v51 = i$$4 < v323;
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
  var v324 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v54 = v324 != -1;
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
  var v325 = sequence$$2.length;
  var v55 = "&gt;results for " + v325;
  var stringToReturn = v55 + " residue sequence ";
  var v326 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p16);
  var v57 = v326 != -1;
  if (v57) {
    var v327 = stringToReturn + '"';
    var v56 = v327 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v328 = stringToReturn + ' starting "';
  var v329 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v328 + v329;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v330 = sequenceOne.length;
  var v59 = "Search results for " + v330;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v331 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p16);
  var v61 = v331 != -1;
  if (v61) {
    var v332 = stringToReturn$$1 + '"';
    var v60 = v332 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v333 = stringToReturn$$1 + ' starting "';
  var v334 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v333 + v334;
  stringToReturn$$1 = v62 + '"\n';
  var v335 = stringToReturn$$1 + "and ";
  var v336 = sequenceTwo.length;
  var v63 = v335 + v336;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v337 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p16);
  var v65 = v337 != -1;
  if (v65) {
    var v338 = stringToReturn$$1 + '"';
    var v64 = v338 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v339 = stringToReturn$$1 + ' starting "';
  var v340 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v66 = v339 + v340;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v341 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v341;
  for (;v70;) {
    var v487 = arrayOfPatterns$$3[j$$2];
    var v342 = JAM.call(v487.match, v487, [/\/.+\//], JAM.policy.p16);
    var v69 = v342 + "gi";
    if (JAM.isEval(eval)) {
      var v704 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v704 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v704;
    j$$2++;
    var v343 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v343;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v344 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v344;
  for (;v74;) {
    var v345 = arrayOfPatterns$$4[j$$3];
    var v72 = JAM.call(v345.match, v345, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v705 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v705;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v706 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v706;
    j$$3++;
    var v346 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v346;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v347 = sequence$$3.length;
  var v75 = "Results for " + v347;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v348 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p16);
  var v77 = v348 != -1;
  if (v77) {
    var v349 = stringToReturn$$2 + '"';
    var v76 = v349 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v350 = stringToReturn$$2 + ' starting "';
  var v351 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v78 = v350 + v351;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v488 = "Results for " + topology;
  var v352 = v488 + " ";
  var v353 = sequence$$4.length;
  var v80 = v352 + v353;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v354 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p16);
  var v82 = v354 != -1;
  if (v82) {
    var v355 = stringToReturn$$3 + '"';
    var v81 = v355 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v356 = stringToReturn$$3 + ' starting "';
  var v357 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v356 + v357;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v358 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v358;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v359 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p16);
  var v87 = v359 != -1;
  if (v87) {
    var v360 = stringToReturn$$4 + '"';
    var v86 = v360 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v361 = stringToReturn$$4 + ' starting "';
  var v362 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v361 + v362;
  stringToReturn$$4 = v88 + '"\n';
  var v363 = stringToReturn$$4 + "and ";
  var v364 = sequenceTwo$$1.length;
  var v89 = v363 + v364;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v365 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p16);
  var v91 = v365 != -1;
  if (v91) {
    var v366 = stringToReturn$$4 + '"';
    var v90 = v366 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v367 = stringToReturn$$4 + ' starting "';
  var v368 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v92 = v367 + v368;
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
    var v369 = Math.random();
    var v370 = components.length;
    var v94 = v369 * v370;
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p16);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p11);
}
function getSequenceFromFasta(sequenceRecord) {
  var v371 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v96 = v371 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v372 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v98 = v372 != -1;
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
  var v679 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p16);
  var v672 = v679 != -1;
  var v681 = !v672;
  if (v681) {
    var v680 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p16);
    v672 = v680 != -1;
  }
  var v663 = v672;
  var v674 = !v663;
  if (v674) {
    var v673 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p16);
    v663 = v673 != -1;
  }
  var v654 = v663;
  var v665 = !v654;
  if (v665) {
    var v664 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p16);
    v654 = v664 != -1;
  }
  var v643 = v654;
  var v656 = !v643;
  if (v656) {
    var v655 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p16);
    v643 = v655 != -1;
  }
  var v631 = v643;
  var v645 = !v631;
  if (v645) {
    var v644 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p16);
    v631 = v644 != -1;
  }
  var v619 = v631;
  var v633 = !v619;
  if (v633) {
    var v632 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p16);
    v619 = v632 != -1;
  }
  var v590 = v619;
  var v621 = !v590;
  if (v621) {
    var v620 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p16);
    v590 = v620 != -1;
  }
  var v547 = v590;
  var v592 = !v547;
  if (v592) {
    var v591 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p16);
    v547 = v591 != -1;
  }
  var v489 = v547;
  var v549 = !v489;
  if (v549) {
    var v548 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p16);
    v489 = v548 != -1;
  }
  var v373 = v489;
  var v491 = !v373;
  if (v491) {
    var v490 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p16);
    v373 = v490 != -1;
  }
  var v99 = v373;
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
  var title$$5 = "Protein GRAVY";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v550 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v492 = v550 + "<head>\n";
  var v374 = v492 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v374 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p17);
  if (isColor) {
    var v106 = outputWindow.document;
    var v694 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v690 = v694 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v686 = v690 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v682 = v686 + "div.info {font-weight: bold}\n";
    var v675 = v682 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v666 = v675 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v657 = v666 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v646 = v657 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v634 = v646 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v622 = v634 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v593 = v622 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v551 = v593 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v493 = v551 + "td.many {color: #000000}\n";
    var v375 = v493 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v375 + "</style>\n";
    JAM.call(v106.write, v106, [v107], JAM.policy.p17);
  } else {
    var v108 = outputWindow.document;
    var v698 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v695 = v698 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v691 = v695 + "div.title {display: none}\n";
    var v687 = v691 + "div.info {font-weight: bold}\n";
    var v683 = v687 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v676 = v683 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v667 = v676 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v658 = v667 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v647 = v658 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v635 = v647 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v623 = v635 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v594 = v623 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v552 = v594 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v494 = v552 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v376 = v494 + "img {display: none}\n";
    var v109 = v376 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p17);
  }
  var v110 = outputWindow.document;
  var v553 = "</head>\n" + '<body class="main">\n';
  var v495 = v553 + '<div class="title">';
  var v377 = v495 + title$$6;
  var v111 = v377 + " results</div>\n";
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
  var v554 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v496 = v554 + "<head>\n";
  var v378 = v496 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v378 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p17);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v696 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v692 = v696 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v688 = v692 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v684 = v688 + "div.info {font-weight: bold}\n";
    var v677 = v684 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v668 = v677 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v659 = v668 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v648 = v659 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v636 = v648 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v624 = v636 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v595 = v624 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v555 = v595 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v497 = v555 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v379 = v497 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v379 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p17);
  } else {
    var v116 = outputWindow.document;
    var v700 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v699 = v700 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v697 = v699 + "div.title {display: none}\n";
    var v693 = v697 + "div.info {font-weight: bold}\n";
    var v689 = v693 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v685 = v689 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v678 = v685 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v669 = v678 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v660 = v669 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v649 = v660 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v637 = v649 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v625 = v637 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v596 = v625 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v556 = v596 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v498 = v556 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v380 = v498 + "img {display: none}\n";
    var v117 = v380 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p17);
  }
  var v118 = outputWindow.document;
  var v557 = "</head>\n" + '<body class="main">\n';
  var v499 = v557 + '<div class="title">';
  var v381 = v499 + title$$8;
  var v119 = v381 + " results</div>\n";
  JAM.call(v118.write, v118, [v119], JAM.policy.p17);
  outputWindow.status = "Please Wait.";
  return;
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
  var v382 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p16);
  var v120 = v382 != -1;
  if (v120) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p16);
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
  var v383 = testArray[0];
  var v124 = v383 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v384 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v125 = v384 == -1;
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
  var v385 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9);
  var v128 = v385 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v386 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9);
  var v129 = v386 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v387 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p16);
  var v130 = v387 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v597 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p16);
  var v558 = v597 == -1;
  var v599 = !v558;
  if (v599) {
    var v598 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p16);
    v558 = v598 == -1;
  }
  var v500 = v558;
  var v560 = !v500;
  if (v560) {
    var v559 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p16);
    v500 = v559 == -1;
  }
  var v388 = v500;
  var v502 = !v388;
  if (v502) {
    var v501 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p16);
    v388 = v501 == -1;
  }
  var v131 = v388;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v389 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p16);
  var v132 = v389 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v390 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v390 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v391 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p16);
  var v135 = v391 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v392 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p16);
  var v136 = v392 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v600 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p16);
  var v561 = v600 == -1;
  var v602 = !v561;
  if (v602) {
    var v601 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p16);
    v561 = v601 == -1;
  }
  var v503 = v561;
  var v563 = !v503;
  if (v563) {
    var v562 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p16);
    v503 = v562 == -1;
  }
  var v393 = v503;
  var v505 = !v393;
  if (v505) {
    var v504 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p16);
    v393 = v504 == -1;
  }
  var v137 = v393;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v603 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p16);
  var v564 = v603 == -1;
  var v605 = !v564;
  if (v605) {
    var v604 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p16);
    v564 = v604 == -1;
  }
  var v506 = v564;
  var v566 = !v506;
  if (v566) {
    var v565 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p16);
    v506 = v565 == -1;
  }
  var v394 = v506;
  var v508 = !v394;
  if (v508) {
    var v507 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p16);
    v394 = v507 == -1;
  }
  var v138 = v394;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v395 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p16);
  var v139 = v395 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v606 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p16);
  var v567 = v606 == -1;
  var v608 = !v567;
  if (v608) {
    var v607 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p16);
    v567 = v607 == -1;
  }
  var v509 = v567;
  var v569 = !v509;
  if (v569) {
    var v568 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p16);
    v509 = v568 == -1;
  }
  var v396 = v509;
  var v511 = !v396;
  if (v511) {
    var v510 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p16);
    v396 = v510 == -1;
  }
  var v140 = v396;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v397 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p16);
  var v141 = v397 == -1;
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
    var v398 = basePerLine / groupSize;
    var v145 = j$$6 <= v398;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v399 = k + i$$5;
        var v143 = JAM.call(text$$10.charAt, text$$10, [v399], JAM.policy.p17);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v400 = basePerLine / groupSize;
      v145 = j$$6 <= v400;
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
    var v401 = adjustment < 0;
    if (v401) {
      v401 = adjusted >= 0;
    }
    var v149 = v401;
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
    var v402 = basePerLine$$2 / groupSize$$2;
    var v156 = j$$7 <= v402;
    for (;v156;) {
      var v152 = k$$1 < groupSize$$2;
      for (;v152;) {
        var v403 = i$$6 + k$$1;
        var v150 = v403 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v404 = k$$1 + i$$6;
        var v151 = JAM.call(text$$12.charAt, text$$12, [v404], JAM.policy.p17);
        lineOfText$$1 = lineOfText$$1 + v151;
        k$$1 = k$$1 + 1;
        v152 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v154 = numberPosition$$1 == "above";
      if (v154) {
        var v405 = adjustNumbering(i$$6, numberingAdjustment);
        var v153 = rightNum(v405, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v153;
      }
      var v155 = i$$6 >= stopBase$$2;
      if (v155) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v406 = basePerLine$$2 / groupSize$$2;
      v156 = j$$7 <= v406;
    }
    var v179 = numberPosition$$1 == "left";
    if (v179) {
      var v157 = outputWindow.document;
      var v570 = adjustNumbering(lineNum, numberingAdjustment);
      var v512 = rightNum(v570, "", 8, tabIn$$3);
      var v407 = v512 + lineOfText$$1;
      var v158 = v407 + "\n";
      JAM.call(v157.write, v157, [v158], JAM.policy.p17);
      var v162 = strands$$1 == "two";
      if (v162) {
        var v159 = outputWindow.document;
        var v571 = adjustNumbering(lineNum, numberingAdjustment);
        var v513 = rightNum(v571, "", 8, tabIn$$3);
        var v514 = complement(lineOfText$$1);
        var v408 = v513 + v514;
        var v160 = v408 + "\n";
        JAM.call(v159.write, v159, [v160], JAM.policy.p17);
        var v161 = outputWindow.document;
        JAM.call(v161.write, v161, ["\n"], JAM.policy.p11);
      }
    } else {
      var v178 = numberPosition$$1 == "right";
      if (v178) {
        var v163 = outputWindow.document;
        var v515 = adjustNumbering(i$$6, numberingAdjustment);
        var v409 = lineOfText$$1 + v515;
        var v164 = v409 + "\n";
        JAM.call(v163.write, v163, [v164], JAM.policy.p17);
        var v168 = strands$$1 == "two";
        if (v168) {
          var v165 = outputWindow.document;
          var v516 = complement(lineOfText$$1);
          var v517 = adjustNumbering(i$$6, numberingAdjustment);
          var v410 = v516 + v517;
          var v166 = v410 + "\n";
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
            var v411 = complement(lineOfText$$1);
            var v174 = v411 + "\n";
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
    var v412 = basePerLine$$3 / groupSize$$3;
    var v187 = j$$8 <= v412;
    for (;v187;) {
      var v183 = k$$2 < groupSize$$3;
      for (;v183;) {
        var v413 = i$$7 + k$$2;
        var v181 = v413 >= stopBase$$3;
        if (v181) {
          break;
        }
        var v414 = k$$2 + i$$7;
        var v182 = JAM.call(text$$13.charAt, text$$13, [v414], JAM.policy.p17);
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
      var v415 = basePerLine$$3 / groupSize$$3;
      v187 = j$$8 <= v415;
    }
    var v198 = numberPosition$$2 == "left";
    if (v198) {
      var v188 = outputWindow.document;
      var v518 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v416 = v518 + lineOfText$$2;
      var v189 = v416 + "\n";
      JAM.call(v188.write, v188, [v189], JAM.policy.p17);
    } else {
      var v197 = numberPosition$$2 == "right";
      if (v197) {
        var v190 = outputWindow.document;
        var v417 = lineOfText$$2 + i$$7;
        var v191 = v417 + "\n";
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
  var v572 = sequence$$13.length;
  var v519 = v572 <= firstIndexToMutate;
  var v573 = !v519;
  if (v573) {
    v519 = lastIndexToMutate < 0;
  }
  var v418 = v519;
  var v520 = !v418;
  if (v520) {
    v418 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v200 = v418;
  if (v200) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v208 = i$$8 < numMut;
  for (;v208;) {
    maxNum = sequence$$13.length;
    var v419 = Math.random();
    var v201 = v419 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v201], JAM.policy.p16);
    var v420 = randNum < firstIndexToMutate;
    var v521 = !v420;
    if (v521) {
      v420 = randNum > lastIndexToMutate;
    }
    var v202 = v420;
    if (v202) {
      numMut++;
      i$$8++;
      v208 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p16);
    needNewChar = true;
    for (;needNewChar;) {
      var v421 = Math.random();
      var v422 = components$$1.length;
      var v203 = v421 * v422;
      componentsIndex = JAM.call(Math.round, Math, [v203], JAM.policy.p16);
      var v423 = components$$1.length;
      var v204 = componentsIndex == v423;
      if (v204) {
        componentsIndex = 0;
      }
      var v424 = components$$1[componentsIndex];
      var v205 = v424 != currentChar;
      if (v205) {
        needNewChar = false;
      }
    }
    var v425 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v426 = components$$1[componentsIndex];
    var v206 = v425 + v426;
    var v427 = randNum + 1;
    var v428 = sequence$$13.length;
    var v207 = JAM.call(sequence$$13.substring, sequence$$13, [v427, v428], JAM.policy.p27);
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
    var v429 = Math.random();
    var v430 = components$$2.length;
    var v211 = v429 * v430;
    tempNum$$1 = JAM.call(Math.floor, Math, [v211], JAM.policy.p16);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v431 = sequence$$14.length;
    var v214 = v431 == 60;
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
    var v574 = sequence$$15.length;
    var v522 = v574 - lookAhead;
    var v523 = sequence$$15.length;
    var v432 = JAM.call(sequence$$15.substring, sequence$$15, [v522, v523], JAM.policy.p27);
    var v219 = v432 + sequence$$15;
    var v220 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v219 + v220;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v222 = outputWindow.document;
  JAM.call(v222.write, v222, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v223 = outputWindow.document;
  var v575 = '<tr><td class="title" width="200px">' + "Site:";
  var v524 = v575 + '</td><td class="title">';
  var v433 = v524 + "Positions:";
  var v224 = v433 + "</td></tr>\n";
  JAM.call(v223.write, v223, [v224], JAM.policy.p17);
  var i$$9 = 0;
  var v434 = arrayOfItems.length;
  var v240 = i$$9 < v434;
  for (;v240;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v435 = arrayOfItems[i$$9];
    var v225 = JAM.call(v435.match, v435, [/\/.+\//], JAM.policy.p16);
    matchExp = v225 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v576 = arrayOfItems[i$$9];
    var v525 = JAM.call(v576.match, v576, [/\)\D*\d+/], JAM.policy.p16);
    var v436 = v525.toString();
    var v226 = JAM.call(v436.replace, v436, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v226);
    var v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v232;) {
      var v227 = matchExp.lastIndex;
      matchPosition = v227 - cutDistance;
      var v437 = matchPosition >= lowerLimit;
      if (v437) {
        v437 = matchPosition < upperLimit;
      }
      var v230 = v437;
      if (v230) {
        timesFound++;
        var v228 = tempString$$1 + ", ";
        var v438 = matchPosition - shiftValue;
        var v229 = v438 + 1;
        tempString$$1 = v228 + v229;
      }
      var v439 = matchExp.lastIndex;
      var v526 = RegExp.lastMatch;
      var v440 = v526.length;
      var v231 = v439 - v440;
      matchExp.lastIndex = v231 + 1;
      v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v441 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p16);
    var v233 = v441 != -1;
    if (v233) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p15);
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
    var v650 = '<tr><td class="' + backGroundClass;
    var v638 = v650 + '">';
    var v670 = arrayOfItems[i$$9];
    var v661 = JAM.call(v670.match, v670, [/\([^\(]+\)/], JAM.policy.p16);
    var v651 = v661.toString();
    var v639 = JAM.call(v651.replace, v651, [/\(|\)/g, ""], JAM.policy.p15);
    var v626 = v638 + v639;
    var v609 = v626 + '</td><td class="';
    var v577 = v609 + backGroundClass;
    var v527 = v577 + '">';
    var v442 = v527 + tempString$$1;
    var v239 = v442 + "</td></tr>\n";
    JAM.call(v238.write, v238, [v239], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v443 = arrayOfItems.length;
    v240 = i$$9 < v443;
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
  var v627 = '<tr><td class="title">' + "Pattern:";
  var v610 = v627 + '</td><td class="title">';
  var v578 = v610 + "Times found:";
  var v528 = v578 + '</td><td class="title">';
  var v444 = v528 + "Percentage:";
  var v244 = v444 + "</td></tr>\n";
  JAM.call(v243.write, v243, [v244], JAM.policy.p17);
  var i$$10 = 0;
  var v445 = arrayOfItems$$1.length;
  var v253 = i$$10 < v445;
  for (;v253;) {
    var tempNumber = 0;
    var v446 = arrayOfItems$$1[i$$10];
    var v245 = JAM.call(v446.match, v446, [/\/[^\/]+\//], JAM.policy.p16);
    var matchExp$$1 = v245 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v447 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v247 = v447 != -1;
    if (v247) {
      var v246 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v246.length;
    }
    var percentage = 0;
    var v529 = originalLength + 1;
    var v611 = arrayOfItems$$1[i$$10];
    var v579 = JAM.call(v611.match, v611, [/\d+/], JAM.policy.p16);
    var v530 = parseFloat(v579);
    var v448 = v529 - v530;
    var v250 = v448 > 0;
    if (v250) {
      var v248 = 100 * tempNumber;
      var v449 = originalLength + 1;
      var v580 = arrayOfItems$$1[i$$10];
      var v531 = JAM.call(v580.match, v580, [/\d+/], JAM.policy.p16);
      var v450 = parseFloat(v531);
      var v249 = v449 - v450;
      percentage = v248 / v249;
    }
    var v251 = outputWindow.document;
    var v671 = arrayOfItems$$1[i$$10];
    var v662 = JAM.call(v671.match, v671, [/\([^\(]+\)\b/], JAM.policy.p16);
    var v652 = v662.toString();
    var v640 = JAM.call(v652.replace, v652, [/\(|\)/g, ""], JAM.policy.p15);
    var v628 = "<tr><td>" + v640;
    var v612 = v628 + "</td><td>";
    var v581 = v612 + tempNumber;
    var v532 = v581 + "</td><td>";
    var v533 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9);
    var v451 = v532 + v533;
    var v252 = v451 + "</td></tr>\n";
    JAM.call(v251.write, v251, [v252], JAM.policy.p17);
    i$$10++;
    var v452 = arrayOfItems$$1.length;
    v253 = i$$10 < v452;
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
  var v453 = sequence$$17.length;
  var v261 = v453 > 0;
  for (;v261;) {
    maxNum$$1 = sequence$$17.length;
    var v454 = Math.random();
    var v255 = v454 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v255], JAM.policy.p16);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p16);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v256 = randNum$$1 + 1;
    var v257 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v256, v257], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v455 = tempSeq.length;
    var v260 = v455 == 60;
    if (v260) {
      var v258 = outputWindow.document;
      var v259 = tempSeq + "\n";
      JAM.call(v258.write, v258, [v259], JAM.policy.p17);
      tempSeq = "";
    }
    var v456 = sequence$$17.length;
    v261 = v456 > 0;
  }
  var v262 = outputWindow.document;
  var v263 = tempSeq + "\n";
  JAM.call(v262.write, v262, [v263], JAM.policy.p17);
  return true;
}
function proteinGravy() {
  var theDocument = document;
  var newProtein = "";
  var title$$9 = "";
  var maxInput$$3 = 5E5;
  var v457 = testScript();
  var v264 = v457 == false;
  if (v264) {
    return;
  }
  var v641 = theDocument.forms;
  var v629 = v641[0];
  var v613 = v629.elements;
  var v582 = v613[0];
  var v534 = checkFormElement(v582);
  var v458 = v534 == false;
  var v536 = !v458;
  if (v536) {
    var v653 = theDocument.forms;
    var v642 = v653[0];
    var v630 = v642.elements;
    var v614 = v630[0];
    var v583 = v614.value;
    var v535 = checkSequenceLength(v583, maxInput$$3);
    v458 = v535 == false;
  }
  var v265 = v458;
  if (v265) {
    return;
  }
  openWindow();
  var v615 = theDocument.forms;
  var v584 = v615[0];
  var v537 = v584.elements;
  var v459 = v537[0];
  var v266 = v459.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v266);
  var i$$11 = 0;
  var v460 = arrayOfFasta$$1.length;
  var v274 = i$$11 < v460;
  for (;v274;) {
    var v267 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v267);
    var v268 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v268);
    newProtein = removeNonProtein(newProtein);
    var v269 = outputWindow.document;
    var v270 = getInfoFromTitleAndSequence(title$$9, newProtein);
    JAM.call(v269.write, v269, [v270], JAM.policy.p17);
    var v271 = outputWindow.document;
    var v272 = getProteinGravy(newProtein);
    JAM.call(v271.write, v271, [v272], JAM.policy.p17);
    var v273 = outputWindow.document;
    JAM.call(v273.write, v273, ["<br />\n<br />\n"], JAM.policy.p11);
    i$$11++;
    var v461 = arrayOfFasta$$1.length;
    v274 = i$$11 < v461;
  }
  closeWindow();
  return;
}
function getProteinGravy(sequence$$18) {
  sequence$$18 = sequence$$18.toLowerCase();
  var gravyResult = 0;
  var gravyValues = _getGravyHash();
  var i$$12 = 0;
  var v462 = sequence$$18.length;
  var v276 = i$$12 < v462;
  for (;v276;) {
    var v463 = JAM.call(sequence$$18.charAt, sequence$$18, [i$$12], JAM.policy.p17);
    var v275 = gravyValues[v463];
    gravyResult = gravyResult + v275;
    i$$12++;
    var v464 = sequence$$18.length;
    v276 = i$$12 < v464;
  }
  var v465 = sequence$$18.length;
  var v278 = v465 > 0;
  if (v278) {
    var v277 = sequence$$18.length;
    gravyResult = gravyResult / v277;
  } else {
    return "The sequence is too short";
  }
  return JAM.call(gravyResult.toFixed, gravyResult, [3], JAM.policy.p9);
}
function _getGravyHash() {
  var hash = {};
  hash["a"] = 1.8;
  hash["r"] = -4.5;
  hash["n"] = -3.5;
  hash["d"] = -3.5;
  hash["c"] = 2.5;
  hash["q"] = -3.5;
  hash["e"] = -3.5;
  hash["g"] = -.4;
  hash["h"] = -3.2;
  hash["i"] = 4.5;
  hash["l"] = 3.8;
  hash["k"] = -3.9;
  hash["m"] = 1.9;
  hash["f"] = 2.8;
  hash["p"] = -1.6;
  hash["s"] = -.8;
  hash["t"] = -.7;
  hash["w"] = -.9;
  hash["y"] = -1.3;
  hash["v"] = 4.2;
  return hash;
}
JAM.set(document, "onload", v2);
var v279 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11);
JAM.set(v279, "onclick", v3);
var v280 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11);
JAM.set(v280, "onclick", v4)
