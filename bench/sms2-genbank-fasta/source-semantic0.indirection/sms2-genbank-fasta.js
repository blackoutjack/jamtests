function v4() {
  var v537 = document.forms;
  var v462 = v537[0];
  var v278 = v462.elements;
  var v5 = v278[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    genbankFasta();
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v279 = document.main_form;
  var v7 = v279.main_submit;
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
  var v280 = arrayOfSequences.length;
  var v9 = v280 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v281 = arrayOfTitles.length;
  var v11 = i$$1 < v281;
  for (;v11;) {
    var v586 = arrayOfTitles[i$$1];
    var v538 = JAM.call(v586.search, v586, [/\S/], JAM.policy.p16);
    var v463 = v538 == -1;
    var v540 = !v463;
    if (v540) {
      var v587 = arrayOfSequences[i$$1];
      var v539 = JAM.call(v587.search, v587, [/\S/], JAM.policy.p16);
      v463 = v539 == -1;
    }
    var v282 = v463;
    var v465 = !v282;
    if (v465) {
      var v541 = arrayOfSequences[i$$1];
      var v464 = v541.length;
      v282 = v464 != lengthOfAlign;
    }
    var v10 = v282;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v283 = arrayOfTitles.length;
    v11 = i$$1 < v283;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v618 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p16);
  var v588 = v618 == -1;
  var v620 = !v588;
  if (v620) {
    var v619 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p16);
    v588 = v619 == -1;
  }
  var v542 = v588;
  var v590 = !v542;
  if (v590) {
    var v589 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p16);
    v542 = v589 == -1;
  }
  var v466 = v542;
  var v544 = !v466;
  if (v544) {
    var v543 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p16);
    v466 = v543 == -1;
  }
  var v284 = v466;
  var v468 = !v284;
  if (v468) {
    var v467 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p16);
    v284 = v467 == -1;
  }
  var v12 = v284;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v469 = formElement.value;
  var v285 = JAM.call(v469.search, v469, [/\S/], JAM.policy.p16);
  var v13 = v285 == -1;
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
  var v286 = arrayOfPatterns.length;
  var v16 = z$$2 < v286;
  for (;v16;) {
    var v470 = arrayOfPatterns[z$$2];
    var v287 = JAM.call(v470.search, v470, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p16);
    var v14 = v287 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v471 = arrayOfPatterns[z$$2];
    var v288 = moreExpressionCheck(v471);
    var v15 = v288 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v289 = arrayOfPatterns.length;
    v16 = z$$2 < v289;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v290 = arrayOfPatterns.length;
  var v22 = j < v290;
  for (;v22;) {
    var v472 = arrayOfPatterns[j];
    var v291 = JAM.call(v472.match, v472, [/\/.+\//], JAM.policy.p16);
    var v19 = v291 + "gi";
    if (JAM.isEval(eval)) {
      var v708 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v708 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v708;
    var v292 = arrayOfPatterns[j];
    var v20 = JAM.call(v292.match, v292, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v709 = v20.toString();
    geneticCodeMatchResult[j] = v709;
    var v21 = geneticCodeMatchResult[j];
    var v710 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v710;
    j++;
    var v293 = arrayOfPatterns.length;
    v22 = j < v293;
  }
  var i$$2 = 0;
  var v473 = testSequence.length;
  var v294 = v473 - 3;
  var v29 = i$$2 <= v294;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p15);
    j = 0;
    var v295 = geneticCodeMatchExp.length;
    var v27 = j < v295;
    for (;v27;) {
      var v474 = geneticCodeMatchExp[j];
      var v296 = JAM.call(codon.search, codon, [v474], JAM.policy.p17);
      var v26 = v296 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v297 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v297 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v298 = geneticCodeMatchExp.length;
      v27 = j < v298;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v475 = testSequence.length;
    var v299 = v475 - 3;
    v29 = i$$2 <= v299;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v300 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v300;
  for (;v31;) {
    var v476 = arrayOfPatterns$$1[z$$3];
    var v301 = JAM.call(v476.search, v476, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p16);
    var v30 = v301 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v302 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v302;
  }
  var i$$3 = 0;
  var v303 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v303;
  for (;v35;) {
    var v477 = arrayOfPatterns$$1[i$$3];
    var v304 = "[" + v477;
    var v32 = v304 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v305 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v305;
    for (;v34;) {
      var v478 = arrayOfPatterns$$1[j$$1];
      var v306 = JAM.call(v478.search, v478, [re], JAM.policy.p17);
      var v33 = v306 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v307 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v307;
    }
    i$$3++;
    var v308 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v308;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v309 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v309;
  for (;v38;) {
    var v479 = arrayOfPatterns$$2[z$$4];
    var v310 = JAM.call(v479.search, v479, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p16);
    var v36 = v310 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v480 = arrayOfPatterns$$2[z$$4];
    var v311 = moreExpressionCheck(v480);
    var v37 = v311 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v312 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v312;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v545 = getSequenceFromFasta(text$$7);
  var v481 = JAM.call(v545.replace, v545, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v313 = v481.length;
  var v40 = v313 > maxInput;
  if (v40) {
    var v314 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v314 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v315 = text$$8.length;
  var v42 = v315 > maxInput$$1;
  if (v42) {
    var v316 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v316 + " characters.";
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
  var v317 = alignArray.length;
  var v49 = v317 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v318 = alignArray.length;
  var v51 = i$$4 < v318;
  for (;v51;) {
    var v482 = alignArray[i$$4];
    var v319 = JAM.call(v482.search, v482, [/[^\s]+\s/], JAM.policy.p16);
    var v50 = v319 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v320 = alignArray.length;
    v51 = i$$4 < v320;
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
  var v321 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v54 = v321 != -1;
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
  var v322 = sequence$$2.length;
  var v55 = "&gt;results for " + v322;
  var stringToReturn = v55 + " residue sequence ";
  var v323 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p16);
  var v57 = v323 != -1;
  if (v57) {
    var v324 = stringToReturn + '"';
    var v56 = v324 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v325 = stringToReturn + ' starting "';
  var v326 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v325 + v326;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v327 = sequenceOne.length;
  var v59 = "Search results for " + v327;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v328 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p16);
  var v61 = v328 != -1;
  if (v61) {
    var v329 = stringToReturn$$1 + '"';
    var v60 = v329 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v330 = stringToReturn$$1 + ' starting "';
  var v331 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v330 + v331;
  stringToReturn$$1 = v62 + '"\n';
  var v332 = stringToReturn$$1 + "and ";
  var v333 = sequenceTwo.length;
  var v63 = v332 + v333;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v334 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p16);
  var v65 = v334 != -1;
  if (v65) {
    var v335 = stringToReturn$$1 + '"';
    var v64 = v335 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v336 = stringToReturn$$1 + ' starting "';
  var v337 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v66 = v336 + v337;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v338 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v338;
  for (;v70;) {
    var v483 = arrayOfPatterns$$3[j$$2];
    var v339 = JAM.call(v483.match, v483, [/\/.+\//], JAM.policy.p16);
    var v69 = v339 + "gi";
    if (JAM.isEval(eval)) {
      var v711 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v711 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v711;
    j$$2++;
    var v340 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v340;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v341 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v341;
  for (;v74;) {
    var v342 = arrayOfPatterns$$4[j$$3];
    var v72 = JAM.call(v342.match, v342, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v712 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v712;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v713 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v713;
    j$$3++;
    var v343 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v343;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v344 = sequence$$3.length;
  var v75 = "Results for " + v344;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v345 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p16);
  var v77 = v345 != -1;
  if (v77) {
    var v346 = stringToReturn$$2 + '"';
    var v76 = v346 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v347 = stringToReturn$$2 + ' starting "';
  var v348 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v78 = v347 + v348;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v484 = "Results for " + topology;
  var v349 = v484 + " ";
  var v350 = sequence$$4.length;
  var v80 = v349 + v350;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v351 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p16);
  var v82 = v351 != -1;
  if (v82) {
    var v352 = stringToReturn$$3 + '"';
    var v81 = v352 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v353 = stringToReturn$$3 + ' starting "';
  var v354 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v353 + v354;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v355 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v355;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v356 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p16);
  var v87 = v356 != -1;
  if (v87) {
    var v357 = stringToReturn$$4 + '"';
    var v86 = v357 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v358 = stringToReturn$$4 + ' starting "';
  var v359 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v358 + v359;
  stringToReturn$$4 = v88 + '"\n';
  var v360 = stringToReturn$$4 + "and ";
  var v361 = sequenceTwo$$1.length;
  var v89 = v360 + v361;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v362 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p16);
  var v91 = v362 != -1;
  if (v91) {
    var v363 = stringToReturn$$4 + '"';
    var v90 = v363 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v364 = stringToReturn$$4 + ' starting "';
  var v365 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v92 = v364 + v365;
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
    var v366 = Math.random();
    var v367 = components.length;
    var v94 = v366 * v367;
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p16);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p11);
}
function getSequenceFromFasta(sequenceRecord) {
  var v368 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v96 = v368 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v369 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v98 = v369 != -1;
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
  var v686 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p16);
  var v679 = v686 != -1;
  var v688 = !v679;
  if (v688) {
    var v687 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p16);
    v679 = v687 != -1;
  }
  var v670 = v679;
  var v681 = !v670;
  if (v681) {
    var v680 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p16);
    v670 = v680 != -1;
  }
  var v660 = v670;
  var v672 = !v660;
  if (v672) {
    var v671 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p16);
    v660 = v671 != -1;
  }
  var v647 = v660;
  var v662 = !v647;
  if (v662) {
    var v661 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p16);
    v647 = v661 != -1;
  }
  var v634 = v647;
  var v649 = !v634;
  if (v649) {
    var v648 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p16);
    v634 = v648 != -1;
  }
  var v621 = v634;
  var v636 = !v621;
  if (v636) {
    var v635 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p16);
    v621 = v635 != -1;
  }
  var v591 = v621;
  var v623 = !v591;
  if (v623) {
    var v622 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p16);
    v591 = v622 != -1;
  }
  var v546 = v591;
  var v593 = !v546;
  if (v593) {
    var v592 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p16);
    v546 = v592 != -1;
  }
  var v485 = v546;
  var v548 = !v485;
  if (v548) {
    var v547 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p16);
    v485 = v547 != -1;
  }
  var v370 = v485;
  var v487 = !v370;
  if (v487) {
    var v486 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p16);
    v370 = v486 != -1;
  }
  var v99 = v370;
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
  var title$$5 = "GenBank to FASTA";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v549 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v488 = v549 + "<head>\n";
  var v371 = v488 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v371 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p17);
  if (isColor) {
    var v106 = outputWindow.document;
    var v701 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v697 = v701 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v693 = v697 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v689 = v693 + "div.info {font-weight: bold}\n";
    var v682 = v689 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v673 = v682 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v663 = v673 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v650 = v663 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v637 = v650 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v624 = v637 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v594 = v624 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v550 = v594 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v489 = v550 + "td.many {color: #000000}\n";
    var v372 = v489 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v372 + "</style>\n";
    JAM.call(v106.write, v106, [v107], JAM.policy.p17);
  } else {
    var v108 = outputWindow.document;
    var v705 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v702 = v705 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v698 = v702 + "div.title {display: none}\n";
    var v694 = v698 + "div.info {font-weight: bold}\n";
    var v690 = v694 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v683 = v690 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v674 = v683 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v664 = v674 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v651 = v664 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v638 = v651 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v625 = v638 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v595 = v625 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v551 = v595 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v490 = v551 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v373 = v490 + "img {display: none}\n";
    var v109 = v373 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p17);
  }
  var v110 = outputWindow.document;
  var v552 = "</head>\n" + '<body class="main">\n';
  var v491 = v552 + '<div class="title">';
  var v374 = v491 + title$$6;
  var v111 = v374 + " results</div>\n";
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
  var v553 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v492 = v553 + "<head>\n";
  var v375 = v492 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v375 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p17);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v703 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v699 = v703 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v695 = v699 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v691 = v695 + "div.info {font-weight: bold}\n";
    var v684 = v691 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v675 = v684 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v665 = v675 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v652 = v665 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v639 = v652 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v626 = v639 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v596 = v626 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v554 = v596 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v493 = v554 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v376 = v493 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v376 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p17);
  } else {
    var v116 = outputWindow.document;
    var v707 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v706 = v707 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v704 = v706 + "div.title {display: none}\n";
    var v700 = v704 + "div.info {font-weight: bold}\n";
    var v696 = v700 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v692 = v696 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v685 = v692 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v676 = v685 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v666 = v676 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v653 = v666 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v640 = v653 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v627 = v640 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v597 = v627 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v555 = v597 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v494 = v555 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v377 = v494 + "img {display: none}\n";
    var v117 = v377 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p17);
  }
  var v118 = outputWindow.document;
  var v556 = "</head>\n" + '<body class="main">\n';
  var v495 = v556 + '<div class="title">';
  var v378 = v495 + title$$8;
  var v119 = v378 + " results</div>\n";
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
  var v379 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p16);
  var v120 = v379 != -1;
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
  var v380 = testArray[0];
  var v124 = v380 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v381 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v125 = v381 == -1;
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
  var v382 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p10);
  var v128 = v382 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v383 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p10);
  var v129 = v383 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v384 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p16);
  var v130 = v384 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v598 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p16);
  var v557 = v598 == -1;
  var v600 = !v557;
  if (v600) {
    var v599 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p16);
    v557 = v599 == -1;
  }
  var v496 = v557;
  var v559 = !v496;
  if (v559) {
    var v558 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p16);
    v496 = v558 == -1;
  }
  var v385 = v496;
  var v498 = !v385;
  if (v498) {
    var v497 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p16);
    v385 = v497 == -1;
  }
  var v131 = v385;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v386 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p16);
  var v132 = v386 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v387 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v387 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v388 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p16);
  var v135 = v388 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v389 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p16);
  var v136 = v389 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v601 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p16);
  var v560 = v601 == -1;
  var v603 = !v560;
  if (v603) {
    var v602 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p16);
    v560 = v602 == -1;
  }
  var v499 = v560;
  var v562 = !v499;
  if (v562) {
    var v561 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p16);
    v499 = v561 == -1;
  }
  var v390 = v499;
  var v501 = !v390;
  if (v501) {
    var v500 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p16);
    v390 = v500 == -1;
  }
  var v137 = v390;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v604 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p16);
  var v563 = v604 == -1;
  var v606 = !v563;
  if (v606) {
    var v605 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p16);
    v563 = v605 == -1;
  }
  var v502 = v563;
  var v565 = !v502;
  if (v565) {
    var v564 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p16);
    v502 = v564 == -1;
  }
  var v391 = v502;
  var v504 = !v391;
  if (v504) {
    var v503 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p16);
    v391 = v503 == -1;
  }
  var v138 = v391;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v392 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p16);
  var v139 = v392 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v607 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p16);
  var v566 = v607 == -1;
  var v609 = !v566;
  if (v609) {
    var v608 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p16);
    v566 = v608 == -1;
  }
  var v505 = v566;
  var v568 = !v505;
  if (v568) {
    var v567 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p16);
    v505 = v567 == -1;
  }
  var v393 = v505;
  var v507 = !v393;
  if (v507) {
    var v506 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p16);
    v393 = v506 == -1;
  }
  var v140 = v393;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v394 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p16);
  var v141 = v394 == -1;
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
    var v395 = basePerLine / groupSize;
    var v145 = j$$6 <= v395;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v396 = k + i$$5;
        var v143 = JAM.call(text$$10.charAt, text$$10, [v396], JAM.policy.p17);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v397 = basePerLine / groupSize;
      v145 = j$$6 <= v397;
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
    var v398 = adjustment < 0;
    if (v398) {
      v398 = adjusted >= 0;
    }
    var v149 = v398;
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
    var v399 = basePerLine$$2 / groupSize$$2;
    var v156 = j$$7 <= v399;
    for (;v156;) {
      var v152 = k$$1 < groupSize$$2;
      for (;v152;) {
        var v400 = i$$6 + k$$1;
        var v150 = v400 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v401 = k$$1 + i$$6;
        var v151 = JAM.call(text$$12.charAt, text$$12, [v401], JAM.policy.p17);
        lineOfText$$1 = lineOfText$$1 + v151;
        k$$1 = k$$1 + 1;
        v152 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v154 = numberPosition$$1 == "above";
      if (v154) {
        var v402 = adjustNumbering(i$$6, numberingAdjustment);
        var v153 = rightNum(v402, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v153;
      }
      var v155 = i$$6 >= stopBase$$2;
      if (v155) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v403 = basePerLine$$2 / groupSize$$2;
      v156 = j$$7 <= v403;
    }
    var v179 = numberPosition$$1 == "left";
    if (v179) {
      var v157 = outputWindow.document;
      var v569 = adjustNumbering(lineNum, numberingAdjustment);
      var v508 = rightNum(v569, "", 8, tabIn$$3);
      var v404 = v508 + lineOfText$$1;
      var v158 = v404 + "\n";
      JAM.call(v157.write, v157, [v158], JAM.policy.p17);
      var v162 = strands$$1 == "two";
      if (v162) {
        var v159 = outputWindow.document;
        var v570 = adjustNumbering(lineNum, numberingAdjustment);
        var v509 = rightNum(v570, "", 8, tabIn$$3);
        var v510 = complement(lineOfText$$1);
        var v405 = v509 + v510;
        var v160 = v405 + "\n";
        JAM.call(v159.write, v159, [v160], JAM.policy.p17);
        var v161 = outputWindow.document;
        JAM.call(v161.write, v161, ["\n"], JAM.policy.p11);
      }
    } else {
      var v178 = numberPosition$$1 == "right";
      if (v178) {
        var v163 = outputWindow.document;
        var v511 = adjustNumbering(i$$6, numberingAdjustment);
        var v406 = lineOfText$$1 + v511;
        var v164 = v406 + "\n";
        JAM.call(v163.write, v163, [v164], JAM.policy.p17);
        var v168 = strands$$1 == "two";
        if (v168) {
          var v165 = outputWindow.document;
          var v512 = complement(lineOfText$$1);
          var v513 = adjustNumbering(i$$6, numberingAdjustment);
          var v407 = v512 + v513;
          var v166 = v407 + "\n";
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
            var v408 = complement(lineOfText$$1);
            var v174 = v408 + "\n";
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
    var v409 = basePerLine$$3 / groupSize$$3;
    var v187 = j$$8 <= v409;
    for (;v187;) {
      var v183 = k$$2 < groupSize$$3;
      for (;v183;) {
        var v410 = i$$7 + k$$2;
        var v181 = v410 >= stopBase$$3;
        if (v181) {
          break;
        }
        var v411 = k$$2 + i$$7;
        var v182 = JAM.call(text$$13.charAt, text$$13, [v411], JAM.policy.p17);
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
      var v412 = basePerLine$$3 / groupSize$$3;
      v187 = j$$8 <= v412;
    }
    var v198 = numberPosition$$2 == "left";
    if (v198) {
      var v188 = outputWindow.document;
      var v514 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v413 = v514 + lineOfText$$2;
      var v189 = v413 + "\n";
      JAM.call(v188.write, v188, [v189], JAM.policy.p17);
    } else {
      var v197 = numberPosition$$2 == "right";
      if (v197) {
        var v190 = outputWindow.document;
        var v414 = lineOfText$$2 + i$$7;
        var v191 = v414 + "\n";
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
  var v571 = sequence$$13.length;
  var v515 = v571 <= firstIndexToMutate;
  var v572 = !v515;
  if (v572) {
    v515 = lastIndexToMutate < 0;
  }
  var v415 = v515;
  var v516 = !v415;
  if (v516) {
    v415 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v200 = v415;
  if (v200) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v208 = i$$8 < numMut;
  for (;v208;) {
    maxNum = sequence$$13.length;
    var v416 = Math.random();
    var v201 = v416 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v201], JAM.policy.p16);
    var v417 = randNum < firstIndexToMutate;
    var v517 = !v417;
    if (v517) {
      v417 = randNum > lastIndexToMutate;
    }
    var v202 = v417;
    if (v202) {
      numMut++;
      i$$8++;
      v208 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p16);
    needNewChar = true;
    for (;needNewChar;) {
      var v418 = Math.random();
      var v419 = components$$1.length;
      var v203 = v418 * v419;
      componentsIndex = JAM.call(Math.round, Math, [v203], JAM.policy.p16);
      var v420 = components$$1.length;
      var v204 = componentsIndex == v420;
      if (v204) {
        componentsIndex = 0;
      }
      var v421 = components$$1[componentsIndex];
      var v205 = v421 != currentChar;
      if (v205) {
        needNewChar = false;
      }
    }
    var v422 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v423 = components$$1[componentsIndex];
    var v206 = v422 + v423;
    var v424 = randNum + 1;
    var v425 = sequence$$13.length;
    var v207 = JAM.call(sequence$$13.substring, sequence$$13, [v424, v425], JAM.policy.p27);
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
    var v426 = Math.random();
    var v427 = components$$2.length;
    var v211 = v426 * v427;
    tempNum$$1 = JAM.call(Math.floor, Math, [v211], JAM.policy.p16);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v428 = sequence$$14.length;
    var v214 = v428 == 60;
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
    var v573 = sequence$$15.length;
    var v518 = v573 - lookAhead;
    var v519 = sequence$$15.length;
    var v429 = JAM.call(sequence$$15.substring, sequence$$15, [v518, v519], JAM.policy.p27);
    var v219 = v429 + sequence$$15;
    var v220 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v219 + v220;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v222 = outputWindow.document;
  JAM.call(v222.write, v222, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v223 = outputWindow.document;
  var v574 = '<tr><td class="title" width="200px">' + "Site:";
  var v520 = v574 + '</td><td class="title">';
  var v430 = v520 + "Positions:";
  var v224 = v430 + "</td></tr>\n";
  JAM.call(v223.write, v223, [v224], JAM.policy.p17);
  var i$$9 = 0;
  var v431 = arrayOfItems.length;
  var v240 = i$$9 < v431;
  for (;v240;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v432 = arrayOfItems[i$$9];
    var v225 = JAM.call(v432.match, v432, [/\/.+\//], JAM.policy.p16);
    matchExp = v225 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v575 = arrayOfItems[i$$9];
    var v521 = JAM.call(v575.match, v575, [/\)\D*\d+/], JAM.policy.p16);
    var v433 = v521.toString();
    var v226 = JAM.call(v433.replace, v433, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v226);
    var v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v232;) {
      var v227 = matchExp.lastIndex;
      matchPosition = v227 - cutDistance;
      var v434 = matchPosition >= lowerLimit;
      if (v434) {
        v434 = matchPosition < upperLimit;
      }
      var v230 = v434;
      if (v230) {
        timesFound++;
        var v228 = tempString$$1 + ", ";
        var v435 = matchPosition - shiftValue;
        var v229 = v435 + 1;
        tempString$$1 = v228 + v229;
      }
      var v436 = matchExp.lastIndex;
      var v522 = RegExp.lastMatch;
      var v437 = v522.length;
      var v231 = v436 - v437;
      matchExp.lastIndex = v231 + 1;
      v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v438 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p16);
    var v233 = v438 != -1;
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
    var v654 = '<tr><td class="' + backGroundClass;
    var v641 = v654 + '">';
    var v677 = arrayOfItems[i$$9];
    var v667 = JAM.call(v677.match, v677, [/\([^\(]+\)/], JAM.policy.p16);
    var v655 = v667.toString();
    var v642 = JAM.call(v655.replace, v655, [/\(|\)/g, ""], JAM.policy.p15);
    var v628 = v641 + v642;
    var v610 = v628 + '</td><td class="';
    var v576 = v610 + backGroundClass;
    var v523 = v576 + '">';
    var v439 = v523 + tempString$$1;
    var v239 = v439 + "</td></tr>\n";
    JAM.call(v238.write, v238, [v239], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v440 = arrayOfItems.length;
    v240 = i$$9 < v440;
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
  var v629 = '<tr><td class="title">' + "Pattern:";
  var v611 = v629 + '</td><td class="title">';
  var v577 = v611 + "Times found:";
  var v524 = v577 + '</td><td class="title">';
  var v441 = v524 + "Percentage:";
  var v244 = v441 + "</td></tr>\n";
  JAM.call(v243.write, v243, [v244], JAM.policy.p17);
  var i$$10 = 0;
  var v442 = arrayOfItems$$1.length;
  var v253 = i$$10 < v442;
  for (;v253;) {
    var tempNumber = 0;
    var v443 = arrayOfItems$$1[i$$10];
    var v245 = JAM.call(v443.match, v443, [/\/[^\/]+\//], JAM.policy.p16);
    var matchExp$$1 = v245 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v444 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v247 = v444 != -1;
    if (v247) {
      var v246 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v246.length;
    }
    var percentage = 0;
    var v525 = originalLength + 1;
    var v612 = arrayOfItems$$1[i$$10];
    var v578 = JAM.call(v612.match, v612, [/\d+/], JAM.policy.p16);
    var v526 = parseFloat(v578);
    var v445 = v525 - v526;
    var v250 = v445 > 0;
    if (v250) {
      var v248 = 100 * tempNumber;
      var v446 = originalLength + 1;
      var v579 = arrayOfItems$$1[i$$10];
      var v527 = JAM.call(v579.match, v579, [/\d+/], JAM.policy.p16);
      var v447 = parseFloat(v527);
      var v249 = v446 - v447;
      percentage = v248 / v249;
    }
    var v251 = outputWindow.document;
    var v678 = arrayOfItems$$1[i$$10];
    var v668 = JAM.call(v678.match, v678, [/\([^\(]+\)\b/], JAM.policy.p16);
    var v656 = v668.toString();
    var v643 = JAM.call(v656.replace, v656, [/\(|\)/g, ""], JAM.policy.p15);
    var v630 = "<tr><td>" + v643;
    var v613 = v630 + "</td><td>";
    var v580 = v613 + tempNumber;
    var v528 = v580 + "</td><td>";
    var v529 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p10);
    var v448 = v528 + v529;
    var v252 = v448 + "</td></tr>\n";
    JAM.call(v251.write, v251, [v252], JAM.policy.p17);
    i$$10++;
    var v449 = arrayOfItems$$1.length;
    v253 = i$$10 < v449;
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
  var v450 = sequence$$17.length;
  var v261 = v450 > 0;
  for (;v261;) {
    maxNum$$1 = sequence$$17.length;
    var v451 = Math.random();
    var v255 = v451 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v255], JAM.policy.p16);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p16);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v256 = randNum$$1 + 1;
    var v257 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v256, v257], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v452 = tempSeq.length;
    var v260 = v452 == 60;
    if (v260) {
      var v258 = outputWindow.document;
      var v259 = tempSeq + "\n";
      JAM.call(v258.write, v258, [v259], JAM.policy.p17);
      tempSeq = "";
    }
    var v453 = sequence$$17.length;
    v261 = v453 > 0;
  }
  var v262 = outputWindow.document;
  var v263 = tempSeq + "\n";
  JAM.call(v262.write, v262, [v263], JAM.policy.p17);
  return true;
}
function genbankFasta() {
  var theDocument = document;
  var newDna = "";
  var maxInput$$3 = 2E5;
  var v454 = testScript();
  var v264 = v454 == false;
  if (v264) {
    return;
  }
  var v657 = theDocument.forms;
  var v644 = v657[0];
  var v631 = v644.elements;
  var v614 = v631[0];
  var v581 = checkFormElement(v614);
  var v530 = v581 == false;
  var v583 = !v530;
  if (v583) {
    var v669 = theDocument.forms;
    var v658 = v669[0];
    var v645 = v658.elements;
    var v632 = v645[0];
    var v615 = v632.value;
    var v582 = verifyGenBank(v615);
    v530 = v582 == false;
  }
  var v455 = v530;
  var v532 = !v455;
  if (v532) {
    var v659 = theDocument.forms;
    var v646 = v659[0];
    var v633 = v646.elements;
    var v616 = v633[0];
    var v584 = v616.value;
    var v531 = checkTextLength(v584, maxInput$$3);
    v455 = v531 == false;
  }
  var v265 = v455;
  if (v265) {
    return;
  }
  openWindow();
  openPre();
  var v617 = theDocument.forms;
  var v585 = v617[0];
  var v533 = v585.elements;
  var v456 = v533[0];
  var v266 = v456.value;
  genbankToFasta(v266);
  closePre();
  closeWindow();
  return;
}
function genbankToFasta(genBankFile$$2) {
  var v267 = "_" + genBankFile$$2;
  genBankFile$$2 = v267 + "_";
  var recordArray = JAM.call(genBankFile$$2.split, genBankFile$$2, [/LOCUS\s\s\s[^\f\n\r]*/m], JAM.policy.p16);
  var i$$11 = 1;
  var v457 = recordArray.length;
  var v275 = i$$11 < v457;
  for (;v275;) {
    var v268 = recordArray[i$$11];
    var mainArray = JAM.call(v268.split, v268, [/DEFINITION|ACCESSION|ORIGIN[^\f\n\r]*/], JAM.policy.p16);
    var v534 = mainArray[1];
    var v458 = JAM.call(v534.replace, v534, [/[\f\n\r\t]+$/g, ""], JAM.policy.p15);
    var v269 = filterFastaTitle(v458);
    var title$$9 = v269 + "\n";
    var v270 = mainArray[3];
    var dnaSequenceArray = JAM.call(v270.split, v270, [/\/{2}/], JAM.policy.p16);
    var v459 = dnaSequenceArray.length;
    var v271 = v459 == 1;
    if (v271) {
      alert("The entire GenBank file may not have been processed.");
      outputWindow.focus();
    }
    var v272 = dnaSequenceArray[0];
    var dnaSequence$$3 = removeNonDna(v272);
    var v273 = outputWindow.document;
    var v535 = "&gt;" + title$$9;
    var v536 = addReturns(dnaSequence$$3);
    var v460 = v535 + v536;
    var v274 = v460 + "\n\n";
    JAM.call(v273.write, v273, [v274], JAM.policy.p17);
    i$$11++;
    var v461 = recordArray.length;
    v275 = i$$11 < v461;
  }
  return;
}
JAM.set(document, "onload", v2);
var v276 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11);
JAM.set(v276, "onclick", v3);
var v277 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11);
JAM.set(v277, "onclick", v4)
