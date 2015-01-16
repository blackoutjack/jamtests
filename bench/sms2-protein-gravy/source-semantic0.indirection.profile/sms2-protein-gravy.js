
JAM.startProfile('load');
function v4() {
  var v541 = document.forms;
  var v468 = v541[0];
  var v283 = v468.elements;
  var v5 = v283[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    proteinGravy(document);
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v284 = document.main_form;
  var v7 = v284.main_submit;
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
  var v285 = arrayOfSequences.length;
  var v9 = v285 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v286 = arrayOfTitles.length;
  var v11 = i$$1 < v286;
  for (;v11;) {
    var v588 = arrayOfTitles[i$$1];
    var v542 = JAM.call(v588.search, v588, [/\S/], JAM.policy.p16);
    var v469 = v542 == -1;
    var v544 = !v469;
    if (v544) {
      var v589 = arrayOfSequences[i$$1];
      var v543 = JAM.call(v589.search, v589, [/\S/], JAM.policy.p16);
      v469 = v543 == -1;
    }
    var v287 = v469;
    var v471 = !v287;
    if (v471) {
      var v545 = arrayOfSequences[i$$1];
      var v470 = v545.length;
      v287 = v470 != lengthOfAlign;
    }
    var v10 = v287;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v288 = arrayOfTitles.length;
    v11 = i$$1 < v288;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v619 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p16);
  var v590 = v619 == -1;
  var v621 = !v590;
  if (v621) {
    var v620 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p16);
    v590 = v620 == -1;
  }
  var v546 = v590;
  var v592 = !v546;
  if (v592) {
    var v591 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p16);
    v546 = v591 == -1;
  }
  var v472 = v546;
  var v548 = !v472;
  if (v548) {
    var v547 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p16);
    v472 = v547 == -1;
  }
  var v289 = v472;
  var v474 = !v289;
  if (v474) {
    var v473 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p16);
    v289 = v473 == -1;
  }
  var v12 = v289;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v475 = formElement.value;
  var v290 = JAM.call(v475.search, v475, [/\S/], JAM.policy.p16);
  var v13 = v290 == -1;
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
  var v291 = arrayOfPatterns.length;
  var v16 = z$$2 < v291;
  for (;v16;) {
    var v476 = arrayOfPatterns[z$$2];
    var v292 = JAM.call(v476.search, v476, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p16);
    var v14 = v292 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v477 = arrayOfPatterns[z$$2];
    var v293 = moreExpressionCheck(v477);
    var v15 = v293 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v294 = arrayOfPatterns.length;
    v16 = z$$2 < v294;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v295 = arrayOfPatterns.length;
  var v22 = j < v295;
  for (;v22;) {
    var v478 = arrayOfPatterns[j];
    var v296 = JAM.call(v478.match, v478, [/\/.+\//], JAM.policy.p16);
    var v19 = v296 + "gi";
    if (JAM.isEval(eval)) {
      var v704 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v704 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v704;
    var v297 = arrayOfPatterns[j];
    var v20 = JAM.call(v297.match, v297, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v705 = v20.toString();
    geneticCodeMatchResult[j] = v705;
    var v21 = geneticCodeMatchResult[j];
    var v706 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v706;
    j++;
    var v298 = arrayOfPatterns.length;
    v22 = j < v298;
  }
  var i$$2 = 0;
  var v479 = testSequence.length;
  var v299 = v479 - 3;
  var v29 = i$$2 <= v299;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p15);
    j = 0;
    var v300 = geneticCodeMatchExp.length;
    var v27 = j < v300;
    for (;v27;) {
      var v480 = geneticCodeMatchExp[j];
      var v301 = JAM.call(codon.search, codon, [v480], JAM.policy.p17);
      var v26 = v301 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v302 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v302 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v303 = geneticCodeMatchExp.length;
      v27 = j < v303;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v481 = testSequence.length;
    var v304 = v481 - 3;
    v29 = i$$2 <= v304;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v305 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v305;
  for (;v31;) {
    var v482 = arrayOfPatterns$$1[z$$3];
    var v306 = JAM.call(v482.search, v482, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p16);
    var v30 = v306 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v307 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v307;
  }
  var i$$3 = 0;
  var v308 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v308;
  for (;v35;) {
    var v483 = arrayOfPatterns$$1[i$$3];
    var v309 = "[" + v483;
    var v32 = v309 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v310 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v310;
    for (;v34;) {
      var v484 = arrayOfPatterns$$1[j$$1];
      var v311 = JAM.call(v484.search, v484, [re], JAM.policy.p17);
      var v33 = v311 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v312 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v312;
    }
    i$$3++;
    var v313 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v313;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v314 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v314;
  for (;v38;) {
    var v485 = arrayOfPatterns$$2[z$$4];
    var v315 = JAM.call(v485.search, v485, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p16);
    var v36 = v315 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v486 = arrayOfPatterns$$2[z$$4];
    var v316 = moreExpressionCheck(v486);
    var v37 = v316 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v317 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v317;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v549 = getSequenceFromFasta(text$$7);
  var v487 = JAM.call(v549.replace, v549, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v318 = v487.length;
  var v40 = v318 > maxInput;
  if (v40) {
    var v319 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v319 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v320 = text$$8.length;
  var v42 = v320 > maxInput$$1;
  if (v42) {
    var v321 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v321 + " characters.";
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
  var v322 = alignArray.length;
  var v49 = v322 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v323 = alignArray.length;
  var v51 = i$$4 < v323;
  for (;v51;) {
    var v488 = alignArray[i$$4];
    var v324 = JAM.call(v488.search, v488, [/[^\s]+\s/], JAM.policy.p16);
    var v50 = v324 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v325 = alignArray.length;
    v51 = i$$4 < v325;
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
  var v326 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v54 = v326 != -1;
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
  var v327 = sequence$$2.length;
  var v55 = "&gt;results for " + v327;
  var stringToReturn = v55 + " residue sequence ";
  var v328 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p16);
  var v57 = v328 != -1;
  if (v57) {
    var v329 = stringToReturn + '"';
    var v56 = v329 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v330 = stringToReturn + ' starting "';
  var v331 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v330 + v331;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v332 = sequenceOne.length;
  var v59 = "Search results for " + v332;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v333 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p16);
  var v61 = v333 != -1;
  if (v61) {
    var v334 = stringToReturn$$1 + '"';
    var v60 = v334 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v335 = stringToReturn$$1 + ' starting "';
  var v336 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v335 + v336;
  stringToReturn$$1 = v62 + '"\n';
  var v337 = stringToReturn$$1 + "and ";
  var v338 = sequenceTwo.length;
  var v63 = v337 + v338;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v339 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p16);
  var v65 = v339 != -1;
  if (v65) {
    var v340 = stringToReturn$$1 + '"';
    var v64 = v340 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v341 = stringToReturn$$1 + ' starting "';
  var v342 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v66 = v341 + v342;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v343 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v343;
  for (;v70;) {
    var v489 = arrayOfPatterns$$3[j$$2];
    var v344 = JAM.call(v489.match, v489, [/\/.+\//], JAM.policy.p16);
    var v69 = v344 + "gi";
    if (JAM.isEval(eval)) {
      var v707 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v707 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v707;
    j$$2++;
    var v345 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v345;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v346 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v346;
  for (;v74;) {
    var v347 = arrayOfPatterns$$4[j$$3];
    var v72 = JAM.call(v347.match, v347, [/=[a-zA-Z\*]/], JAM.policy.p16);
    var v708 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v708;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v709 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v709;
    j$$3++;
    var v348 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v348;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v349 = sequence$$3.length;
  var v75 = "Results for " + v349;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v350 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p16);
  var v77 = v350 != -1;
  if (v77) {
    var v351 = stringToReturn$$2 + '"';
    var v76 = v351 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v352 = stringToReturn$$2 + ' starting "';
  var v353 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v78 = v352 + v353;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v490 = "Results for " + topology;
  var v354 = v490 + " ";
  var v355 = sequence$$4.length;
  var v80 = v354 + v355;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v356 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p16);
  var v82 = v356 != -1;
  if (v82) {
    var v357 = stringToReturn$$3 + '"';
    var v81 = v357 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v358 = stringToReturn$$3 + ' starting "';
  var v359 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v358 + v359;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v360 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v360;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v361 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p16);
  var v87 = v361 != -1;
  if (v87) {
    var v362 = stringToReturn$$4 + '"';
    var v86 = v362 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v363 = stringToReturn$$4 + ' starting "';
  var v364 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v363 + v364;
  stringToReturn$$4 = v88 + '"\n';
  var v365 = stringToReturn$$4 + "and ";
  var v366 = sequenceTwo$$1.length;
  var v89 = v365 + v366;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v367 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p16);
  var v91 = v367 != -1;
  if (v91) {
    var v368 = stringToReturn$$4 + '"';
    var v90 = v368 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v369 = stringToReturn$$4 + ' starting "';
  var v370 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v92 = v369 + v370;
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
    var v371 = Math.random();
    var v372 = components.length;
    var v94 = v371 * v372;
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p16);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p11);
}
function getSequenceFromFasta(sequenceRecord) {
  var v373 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v96 = v373 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v374 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p16);
  var v98 = v374 != -1;
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
  var v682 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p16);
  var v675 = v682 != -1;
  var v684 = !v675;
  if (v684) {
    var v683 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p16);
    v675 = v683 != -1;
  }
  var v666 = v675;
  var v677 = !v666;
  if (v677) {
    var v676 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p16);
    v666 = v676 != -1;
  }
  var v657 = v666;
  var v668 = !v657;
  if (v668) {
    var v667 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p16);
    v657 = v667 != -1;
  }
  var v646 = v657;
  var v659 = !v646;
  if (v659) {
    var v658 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p16);
    v646 = v658 != -1;
  }
  var v634 = v646;
  var v648 = !v634;
  if (v648) {
    var v647 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p16);
    v634 = v647 != -1;
  }
  var v622 = v634;
  var v636 = !v622;
  if (v636) {
    var v635 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p16);
    v622 = v635 != -1;
  }
  var v593 = v622;
  var v624 = !v593;
  if (v624) {
    var v623 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p16);
    v593 = v623 != -1;
  }
  var v550 = v593;
  var v595 = !v550;
  if (v595) {
    var v594 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p16);
    v550 = v594 != -1;
  }
  var v491 = v550;
  var v552 = !v491;
  if (v552) {
    var v551 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p16);
    v491 = v551 != -1;
  }
  var v375 = v491;
  var v493 = !v375;
  if (v493) {
    var v492 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p16);
    v375 = v492 != -1;
  }
  var v99 = v375;
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
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v553 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v494 = v553 + "<head>\n";
  var v376 = v494 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v376 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p17);
  if (isColor) {
    var v106 = outputWindow.document;
    var v697 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v693 = v697 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v689 = v693 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v685 = v689 + "div.info {font-weight: bold}\n";
    var v678 = v685 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v669 = v678 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v660 = v669 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v649 = v660 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v637 = v649 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v625 = v637 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v596 = v625 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v554 = v596 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v495 = v554 + "td.many {color: #000000}\n";
    var v377 = v495 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v377 + "</style>\n";
    JAM.call(v106.write, v106, [v107], JAM.policy.p17);
  } else {
    var v108 = outputWindow.document;
    var v701 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v698 = v701 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v694 = v698 + "div.title {display: none}\n";
    var v690 = v694 + "div.info {font-weight: bold}\n";
    var v686 = v690 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v679 = v686 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v670 = v679 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v661 = v670 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v650 = v661 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v638 = v650 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v626 = v638 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v597 = v626 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v555 = v597 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v496 = v555 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v378 = v496 + "img {display: none}\n";
    var v109 = v378 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p17);
  }
  var v110 = outputWindow.document;
  var v556 = "</head>\n" + '<body class="main">\n';
  var v497 = v556 + '<div class="title">';
  var v379 = v497 + title$$6;
  var v111 = v379 + " results</div>\n";
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
  var v557 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v498 = v557 + "<head>\n";
  var v380 = v498 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v380 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p17);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v699 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v695 = v699 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v691 = v695 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v687 = v691 + "div.info {font-weight: bold}\n";
    var v680 = v687 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v671 = v680 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v662 = v671 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v651 = v662 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v639 = v651 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v627 = v639 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v598 = v627 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v558 = v598 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v499 = v558 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v381 = v499 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v381 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p17);
  } else {
    var v116 = outputWindow.document;
    var v703 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v702 = v703 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v700 = v702 + "div.title {display: none}\n";
    var v696 = v700 + "div.info {font-weight: bold}\n";
    var v692 = v696 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v688 = v692 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v681 = v688 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v672 = v681 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v663 = v672 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v652 = v663 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v640 = v652 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v628 = v640 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v599 = v628 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v559 = v599 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v500 = v559 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v382 = v500 + "img {display: none}\n";
    var v117 = v382 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p17);
  }
  var v118 = outputWindow.document;
  var v560 = "</head>\n" + '<body class="main">\n';
  var v501 = v560 + '<div class="title">';
  var v383 = v501 + title$$8;
  var v119 = v383 + " results</div>\n";
  JAM.call(v118.write, v118, [v119], JAM.policy.p17);
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
  var v384 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p16);
  var v120 = v384 != -1;
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
  var v385 = testArray[0];
  var v124 = v385 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v386 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v125 = v386 == -1;
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
  var v387 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9);
  var v128 = v387 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v388 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9);
  var v129 = v388 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v389 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p16);
  var v130 = v389 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v600 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p16);
  var v561 = v600 == -1;
  var v602 = !v561;
  if (v602) {
    var v601 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p16);
    v561 = v601 == -1;
  }
  var v502 = v561;
  var v563 = !v502;
  if (v563) {
    var v562 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p16);
    v502 = v562 == -1;
  }
  var v390 = v502;
  var v504 = !v390;
  if (v504) {
    var v503 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p16);
    v390 = v503 == -1;
  }
  var v131 = v390;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v391 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p16);
  var v132 = v391 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v392 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v392 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v393 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p16);
  var v135 = v393 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v394 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p16);
  var v136 = v394 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v603 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p16);
  var v564 = v603 == -1;
  var v605 = !v564;
  if (v605) {
    var v604 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p16);
    v564 = v604 == -1;
  }
  var v505 = v564;
  var v566 = !v505;
  if (v566) {
    var v565 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p16);
    v505 = v565 == -1;
  }
  var v395 = v505;
  var v507 = !v395;
  if (v507) {
    var v506 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p16);
    v395 = v506 == -1;
  }
  var v137 = v395;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v606 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p16);
  var v567 = v606 == -1;
  var v608 = !v567;
  if (v608) {
    var v607 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p16);
    v567 = v607 == -1;
  }
  var v508 = v567;
  var v569 = !v508;
  if (v569) {
    var v568 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p16);
    v508 = v568 == -1;
  }
  var v396 = v508;
  var v510 = !v396;
  if (v510) {
    var v509 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p16);
    v396 = v509 == -1;
  }
  var v138 = v396;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v397 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p16);
  var v139 = v397 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v609 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p16);
  var v570 = v609 == -1;
  var v611 = !v570;
  if (v611) {
    var v610 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p16);
    v570 = v610 == -1;
  }
  var v511 = v570;
  var v572 = !v511;
  if (v572) {
    var v571 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p16);
    v511 = v571 == -1;
  }
  var v398 = v511;
  var v513 = !v398;
  if (v513) {
    var v512 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p16);
    v398 = v512 == -1;
  }
  var v140 = v398;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v399 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p16);
  var v141 = v399 == -1;
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
    var v400 = basePerLine / groupSize;
    var v145 = j$$6 <= v400;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v401 = k + i$$5;
        var v143 = JAM.call(text$$10.charAt, text$$10, [v401], JAM.policy.p17);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v402 = basePerLine / groupSize;
      v145 = j$$6 <= v402;
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
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v403 = adjustment < 0;
    if (v403) {
      v403 = adjusted >= 0;
    }
    var v149 = v403;
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
    var v404 = basePerLine$$2 / groupSize$$2;
    var v158 = j$$7 <= v404;
    for (;v158;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v405 = i$$6 + k$$1;
        var v150 = v405 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v151 = lineOfText$$1;
        var v406 = k$$1 + i$$6;
        var v152 = JAM.call(text$$12.charAt, text$$12, [v406], JAM.policy.p17);
        lineOfText$$1 = v151 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v156 = numberPosition$$1 == "above";
      if (v156) {
        var v154 = aboveNum;
        var v407 = adjustNumbering(i$$6, numberingAdjustment);
        var v155 = rightNum(v407, "", groupSize$$2, tabIn$$3);
        aboveNum = v154 + v155;
      }
      var v157 = i$$6 >= stopBase$$2;
      if (v157) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v408 = basePerLine$$2 / groupSize$$2;
      v158 = j$$7 <= v408;
    }
    var v181 = numberPosition$$1 == "left";
    if (v181) {
      var v159 = outputWindow.document;
      var v573 = adjustNumbering(lineNum, numberingAdjustment);
      var v514 = rightNum(v573, "", 8, tabIn$$3);
      var v409 = v514 + lineOfText$$1;
      var v160 = v409 + "\n";
      JAM.call(v159.write, v159, [v160], JAM.policy.p17);
      var v164 = strands$$1 == "two";
      if (v164) {
        var v161 = outputWindow.document;
        var v574 = adjustNumbering(lineNum, numberingAdjustment);
        var v515 = rightNum(v574, "", 8, tabIn$$3);
        var v516 = complement(lineOfText$$1);
        var v410 = v515 + v516;
        var v162 = v410 + "\n";
        JAM.call(v161.write, v161, [v162], JAM.policy.p17);
        var v163 = outputWindow.document;
        JAM.call(v163.write, v163, ["\n"], JAM.policy.p11);
      }
    } else {
      var v180 = numberPosition$$1 == "right";
      if (v180) {
        var v165 = outputWindow.document;
        var v517 = lineOfText$$1;
        var v518 = adjustNumbering(i$$6, numberingAdjustment);
        var v411 = v517 + v518;
        var v166 = v411 + "\n";
        JAM.call(v165.write, v165, [v166], JAM.policy.p17);
        var v170 = strands$$1 == "two";
        if (v170) {
          var v167 = outputWindow.document;
          var v519 = complement(lineOfText$$1);
          var v520 = adjustNumbering(i$$6, numberingAdjustment);
          var v412 = v519 + v520;
          var v168 = v412 + "\n";
          JAM.call(v167.write, v167, [v168], JAM.policy.p17);
          var v169 = outputWindow.document;
          JAM.call(v169.write, v169, ["\n"], JAM.policy.p11);
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
            var v413 = complement(lineOfText$$1);
            var v176 = v413 + "\n";
            JAM.call(v175.write, v175, [v176], JAM.policy.p17);
            var v177 = outputWindow.document;
            JAM.call(v177.write, v177, ["\n"], JAM.policy.p11);
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
    var v414 = basePerLine$$3 / groupSize$$3;
    var v189 = j$$8 <= v414;
    for (;v189;) {
      var v185 = k$$2 < groupSize$$3;
      for (;v185;) {
        var v415 = i$$7 + k$$2;
        var v183 = v415 >= stopBase$$3;
        if (v183) {
          break;
        }
        var v416 = k$$2 + i$$7;
        var v184 = JAM.call(text$$13.charAt, text$$13, [v416], JAM.policy.p17);
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
      var v417 = basePerLine$$3 / groupSize$$3;
      v189 = j$$8 <= v417;
    }
    var v200 = numberPosition$$2 == "left";
    if (v200) {
      var v190 = outputWindow.document;
      var v521 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v418 = v521 + lineOfText$$2;
      var v191 = v418 + "\n";
      JAM.call(v190.write, v190, [v191], JAM.policy.p17);
    } else {
      var v199 = numberPosition$$2 == "right";
      if (v199) {
        var v192 = outputWindow.document;
        var v419 = lineOfText$$2 + i$$7;
        var v193 = v419 + "\n";
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
  var v575 = sequence$$13.length;
  var v522 = v575 <= firstIndexToMutate;
  var v576 = !v522;
  if (v576) {
    v522 = lastIndexToMutate < 0;
  }
  var v420 = v522;
  var v523 = !v420;
  if (v523) {
    v420 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v202 = v420;
  if (v202) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v210 = i$$8 < numMut;
  for (;v210;) {
    maxNum = sequence$$13.length;
    var v421 = Math.random();
    var v203 = v421 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v203], JAM.policy.p16);
    var v422 = randNum < firstIndexToMutate;
    var v524 = !v422;
    if (v524) {
      v422 = randNum > lastIndexToMutate;
    }
    var v204 = v422;
    if (v204) {
      numMut++;
      i$$8++;
      v210 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p16);
    needNewChar = true;
    for (;needNewChar;) {
      var v423 = Math.random();
      var v424 = components$$1.length;
      var v205 = v423 * v424;
      componentsIndex = JAM.call(Math.round, Math, [v205], JAM.policy.p16);
      var v425 = components$$1.length;
      var v206 = componentsIndex == v425;
      if (v206) {
        componentsIndex = 0;
      }
      var v426 = components$$1[componentsIndex];
      var v207 = v426 != currentChar;
      if (v207) {
        needNewChar = false;
      }
    }
    var v427 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v428 = components$$1[componentsIndex];
    var v208 = v427 + v428;
    var v429 = randNum + 1;
    var v430 = sequence$$13.length;
    var v209 = JAM.call(sequence$$13.substring, sequence$$13, [v429, v430], JAM.policy.p27);
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
    var v431 = Math.random();
    var v432 = components$$2.length;
    var v213 = v431 * v432;
    tempNum$$1 = JAM.call(Math.floor, Math, [v213], JAM.policy.p16);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v433 = sequence$$14.length;
    var v216 = v433 == 60;
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
    var v577 = sequence$$15.length;
    var v525 = v577 - lookAhead;
    var v526 = sequence$$15.length;
    var v434 = JAM.call(sequence$$15.substring, sequence$$15, [v525, v526], JAM.policy.p27);
    var v221 = v434 + sequence$$15;
    var v222 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v221 + v222;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v224 = outputWindow.document;
  JAM.call(v224.write, v224, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v225 = outputWindow.document;
  var v578 = '<tr><td class="title" width="200px">' + "Site:";
  var v527 = v578 + '</td><td class="title">';
  var v435 = v527 + "Positions:";
  var v226 = v435 + "</td></tr>\n";
  JAM.call(v225.write, v225, [v226], JAM.policy.p17);
  var i$$9 = 0;
  var v436 = arrayOfItems.length;
  var v242 = i$$9 < v436;
  for (;v242;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v437 = arrayOfItems[i$$9];
    var v227 = JAM.call(v437.match, v437, [/\/.+\//], JAM.policy.p16);
    matchExp = v227 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v579 = arrayOfItems[i$$9];
    var v528 = JAM.call(v579.match, v579, [/\)\D*\d+/], JAM.policy.p16);
    var v438 = v528.toString();
    var v228 = JAM.call(v438.replace, v438, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v228);
    var v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v234;) {
      var v229 = matchExp.lastIndex;
      matchPosition = v229 - cutDistance;
      var v439 = matchPosition >= lowerLimit;
      if (v439) {
        v439 = matchPosition < upperLimit;
      }
      var v232 = v439;
      if (v232) {
        timesFound++;
        var v230 = tempString$$1 + ", ";
        var v440 = matchPosition - shiftValue;
        var v231 = v440 + 1;
        tempString$$1 = v230 + v231;
      }
      var v441 = matchExp.lastIndex;
      var v529 = RegExp.lastMatch;
      var v442 = v529.length;
      var v233 = v441 - v442;
      matchExp.lastIndex = v233 + 1;
      v234 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v443 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p16);
    var v235 = v443 != -1;
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
    var v653 = '<tr><td class="' + backGroundClass;
    var v641 = v653 + '">';
    var v673 = arrayOfItems[i$$9];
    var v664 = JAM.call(v673.match, v673, [/\([^\(]+\)/], JAM.policy.p16);
    var v654 = v664.toString();
    var v642 = JAM.call(v654.replace, v654, [/\(|\)/g, ""], JAM.policy.p15);
    var v629 = v641 + v642;
    var v612 = v629 + '</td><td class="';
    var v580 = v612 + backGroundClass;
    var v530 = v580 + '">';
    var v444 = v530 + tempString$$1;
    var v241 = v444 + "</td></tr>\n";
    JAM.call(v240.write, v240, [v241], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v445 = arrayOfItems.length;
    v242 = i$$9 < v445;
  }
  var v243 = outputWindow.document;
  JAM.call(v243.write, v243, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v244 = outputWindow.document;
  JAM.call(v244.write, v244, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v245 = outputWindow.document;
  var v630 = '<tr><td class="title">' + "Pattern:";
  var v613 = v630 + '</td><td class="title">';
  var v581 = v613 + "Times found:";
  var v531 = v581 + '</td><td class="title">';
  var v446 = v531 + "Percentage:";
  var v246 = v446 + "</td></tr>\n";
  JAM.call(v245.write, v245, [v246], JAM.policy.p17);
  var i$$10 = 0;
  var v447 = arrayOfItems$$1.length;
  var v255 = i$$10 < v447;
  for (;v255;) {
    var tempNumber = 0;
    var v448 = arrayOfItems$$1[i$$10];
    var v247 = JAM.call(v448.match, v448, [/\/[^\/]+\//], JAM.policy.p16);
    var matchExp$$1 = v247 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v449 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v249 = v449 != -1;
    if (v249) {
      var v248 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v248.length;
    }
    var percentage = 0;
    var v532 = originalLength + 1;
    var v614 = arrayOfItems$$1[i$$10];
    var v582 = JAM.call(v614.match, v614, [/\d+/], JAM.policy.p16);
    var v533 = parseFloat(v582);
    var v450 = v532 - v533;
    var v252 = v450 > 0;
    if (v252) {
      var v250 = 100 * tempNumber;
      var v451 = originalLength + 1;
      var v583 = arrayOfItems$$1[i$$10];
      var v534 = JAM.call(v583.match, v583, [/\d+/], JAM.policy.p16);
      var v452 = parseFloat(v534);
      var v251 = v451 - v452;
      percentage = v250 / v251;
    }
    var v253 = outputWindow.document;
    var v674 = arrayOfItems$$1[i$$10];
    var v665 = JAM.call(v674.match, v674, [/\([^\(]+\)\b/], JAM.policy.p16);
    var v655 = v665.toString();
    var v643 = JAM.call(v655.replace, v655, [/\(|\)/g, ""], JAM.policy.p15);
    var v631 = "<tr><td>" + v643;
    var v615 = v631 + "</td><td>";
    var v584 = v615 + tempNumber;
    var v535 = v584 + "</td><td>";
    var v536 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9);
    var v453 = v535 + v536;
    var v254 = v453 + "</td></tr>\n";
    JAM.call(v253.write, v253, [v254], JAM.policy.p17);
    i$$10++;
    var v454 = arrayOfItems$$1.length;
    v255 = i$$10 < v454;
  }
  var v256 = outputWindow.document;
  JAM.call(v256.write, v256, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v455 = sequence$$17.length;
  var v263 = v455 > 0;
  for (;v263;) {
    maxNum$$1 = sequence$$17.length;
    var v456 = Math.random();
    var v257 = v456 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v257], JAM.policy.p16);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p16);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v258 = randNum$$1 + 1;
    var v259 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v258, v259], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v457 = tempSeq.length;
    var v262 = v457 == 60;
    if (v262) {
      var v260 = outputWindow.document;
      var v261 = tempSeq + "\n";
      JAM.call(v260.write, v260, [v261], JAM.policy.p17);
      tempSeq = "";
    }
    var v458 = sequence$$17.length;
    v263 = v458 > 0;
  }
  var v264 = outputWindow.document;
  var v265 = tempSeq + "\n";
  JAM.call(v264.write, v264, [v265], JAM.policy.p17);
  return true;
}
function proteinGravy(theDocument) {
  JAM.startProfile('compute');

  var newProtein = "";
  var title$$9 = "";
  var maxInput$$3 = 5E5;
  var v459 = testScript();
  var v266 = v459 == false;
  if (v266) {
    return false;
  }
  var v644 = theDocument.forms;
  var v632 = v644[0];
  var v616 = v632.elements;
  var v585 = v616[0];
  var v537 = checkFormElement(v585);
  var v460 = v537 == false;
  var v539 = !v460;
  if (v539) {
    var v656 = theDocument.forms;
    var v645 = v656[0];
    var v633 = v645.elements;
    var v617 = v633[0];
    var v586 = v617.value;
    var v538 = checkSequenceLength(v586, maxInput$$3);
    v460 = v538 == false;
  }
  var v267 = v460;
  if (v267) {
    return false;
  }
  openWindow("Protein GRAVY");
  var v618 = theDocument.forms;
  var v587 = v618[0];
  var v540 = v587.elements;
  var v461 = v540[0];
  var v268 = v461.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v268);
  var i$$11 = 0;
  var v462 = arrayOfFasta$$1.length;
  var v276 = i$$11 < v462;
  for (;v276;) {
    var v269 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v269);
    var v270 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v270);
    newProtein = removeNonProtein(newProtein);
    var v271 = outputWindow.document;
    var v272 = getInfoFromTitleAndSequence(title$$9, newProtein);
    JAM.call(v271.write, v271, [v272], JAM.policy.p17);
    var v273 = outputWindow.document;
    var v274 = getProteinGravy(newProtein);
    JAM.call(v273.write, v273, [v274], JAM.policy.p17);
    var v275 = outputWindow.document;
    JAM.call(v275.write, v275, ["<br />\n<br />\n"], JAM.policy.p11);
    i$$11++;
    var v463 = arrayOfFasta$$1.length;
    v276 = i$$11 < v463;
  }
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
function getProteinGravy(sequence$$18) {
  sequence$$18 = sequence$$18.toLowerCase();
  var gravyResult = 0;
  var gravyValues = _getGravyHash();
  var i$$12 = 0;
  var v464 = sequence$$18.length;
  var v278 = i$$12 < v464;
  for (;v278;) {
    var v465 = JAM.call(sequence$$18.charAt, sequence$$18, [i$$12], JAM.policy.p17);
    var v277 = gravyValues[v465];
    gravyResult = gravyResult + v277;
    i$$12++;
    var v466 = sequence$$18.length;
    v278 = i$$12 < v466;
  }
  var v467 = sequence$$18.length;
  var v280 = v467 > 0;
  if (v280) {
    var v279 = sequence$$18.length;
    gravyResult = gravyResult / v279;
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
var v281 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11);
JAM.set(v281, "onclick", v3);
var v282 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11);
JAM.set(v282, "onclick", v4)

JAM.stopProfile('load');
