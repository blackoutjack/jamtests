
JAM.startProfile('load');
function v4() {
  var v553 = document.forms;
  var v476 = v553[0];
  var v288 = v476.elements;
  var v5 = v288[0];
  v5.value = " ";
  return;
}
function v3() {
  try {
    proteinMw();
  } catch (e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6);
  }
  return;
}
function v2() {
  var v289 = document.main_form;
  var v7 = v289.main_submit;
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
  var v290 = arrayOfSequences.length;
  var v9 = v290 < 2;
  if (v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v291 = arrayOfTitles.length;
  var v11 = i$$1 < v291;
  for (;v11;) {
    var v605 = arrayOfTitles[i$$1];
    var v554 = JAM.call(v605.search, v605, [/\S/], JAM.policy.p17);
    var v477 = v554 == -1;
    var v556 = !v477;
    if (v556) {
      var v606 = arrayOfSequences[i$$1];
      var v555 = JAM.call(v606.search, v606, [/\S/], JAM.policy.p17);
      v477 = v555 == -1;
    }
    var v292 = v477;
    var v479 = !v292;
    if (v479) {
      var v557 = arrayOfSequences[i$$1];
      var v478 = v557.length;
      v292 = v478 != lengthOfAlign;
    }
    var v10 = v292;
    if (v10) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v293 = arrayOfTitles.length;
    v11 = i$$1 < v293;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v641 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p17);
  var v607 = v641 == -1;
  var v643 = !v607;
  if (v643) {
    var v642 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p17);
    v607 = v642 == -1;
  }
  var v558 = v607;
  var v609 = !v558;
  if (v609) {
    var v608 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p17);
    v558 = v608 == -1;
  }
  var v480 = v558;
  var v560 = !v480;
  if (v560) {
    var v559 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p17);
    v480 = v559 == -1;
  }
  var v294 = v480;
  var v482 = !v294;
  if (v482) {
    var v481 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p17);
    v294 = v481 == -1;
  }
  var v12 = v294;
  if (v12) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v483 = formElement.value;
  var v295 = JAM.call(v483.search, v483, [/\S/], JAM.policy.p17);
  var v13 = v295 == -1;
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
  var v296 = arrayOfPatterns.length;
  var v16 = z$$2 < v296;
  for (;v16;) {
    var v484 = arrayOfPatterns[z$$2];
    var v297 = JAM.call(v484.search, v484, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p17);
    var v14 = v297 == -1;
    if (v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v485 = arrayOfPatterns[z$$2];
    var v298 = moreExpressionCheck(v485);
    var v15 = v298 == false;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v299 = arrayOfPatterns.length;
    v16 = z$$2 < v299;
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v300 = arrayOfPatterns.length;
  var v22 = j < v300;
  for (;v22;) {
    var v486 = arrayOfPatterns[j];
    var v301 = JAM.call(v486.match, v486, [/\/.+\//], JAM.policy.p17);
    var v19 = v301 + "gi";
    if (JAM.isEval(eval)) {
      var v734 = eval("introspect(JAM.policy.pFull) { " + v19 + " }")
    } else {
      var v734 = JAM.call(eval, null, [v19])
    }
    geneticCodeMatchExp[j] = v734;
    var v302 = arrayOfPatterns[j];
    var v20 = JAM.call(v302.match, v302, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v735 = v20.toString();
    geneticCodeMatchResult[j] = v735;
    var v21 = geneticCodeMatchResult[j];
    var v736 = JAM.call(v21.replace, v21, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult[j] = v736;
    j++;
    var v303 = arrayOfPatterns.length;
    v22 = j < v303;
  }
  var i$$2 = 0;
  var v487 = testSequence.length;
  var v304 = v487 - 3;
  var v29 = i$$2 <= v304;
  for (;v29;) {
    var v23 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v23], JAM.policy.p15);
    j = 0;
    var v305 = geneticCodeMatchExp.length;
    var v27 = j < v305;
    for (;v27;) {
      var v488 = geneticCodeMatchExp[j];
      var v306 = JAM.call(codon.search, codon, [v488], JAM.policy.p16);
      var v26 = v306 != -1;
      if (v26) {
        var v25 = oneMatch == true;
        if (v25) {
          var v307 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v24 = v307 + ".";
          alert(v24);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v308 = geneticCodeMatchExp.length;
      v27 = j < v308;
    }
    var v28 = oneMatch == false;
    if (v28) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v489 = testSequence.length;
    var v309 = v489 - 3;
    v29 = i$$2 <= v309;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v310 = arrayOfPatterns$$1.length;
  var v31 = z$$3 < v310;
  for (;v31;) {
    var v490 = arrayOfPatterns$$1[z$$3];
    var v311 = JAM.call(v490.search, v490, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p17);
    var v30 = v311 != -1;
    if (v30) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v312 = arrayOfPatterns$$1.length;
    v31 = z$$3 < v312;
  }
  var i$$3 = 0;
  var v313 = arrayOfPatterns$$1.length;
  var v35 = i$$3 < v313;
  for (;v35;) {
    var v491 = arrayOfPatterns$$1[i$$3];
    var v314 = "[" + v491;
    var v32 = v314 + "]";
    var re = new RegExp(v32, "gi");
    var j$$1 = i$$3 + 1;
    var v315 = arrayOfPatterns$$1.length;
    var v34 = j$$1 < v315;
    for (;v34;) {
      var v492 = arrayOfPatterns$$1[j$$1];
      var v316 = JAM.call(v492.search, v492, [re], JAM.policy.p16);
      var v33 = v316 != -1;
      if (v33) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v317 = arrayOfPatterns$$1.length;
      v34 = j$$1 < v317;
    }
    i$$3++;
    var v318 = arrayOfPatterns$$1.length;
    v35 = i$$3 < v318;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v319 = arrayOfPatterns$$2.length;
  var v38 = z$$4 < v319;
  for (;v38;) {
    var v493 = arrayOfPatterns$$2[z$$4];
    var v320 = JAM.call(v493.search, v493, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p17);
    var v36 = v320 == -1;
    if (v36) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v494 = arrayOfPatterns$$2[z$$4];
    var v321 = moreExpressionCheck(v494);
    var v37 = v321 == false;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v322 = arrayOfPatterns$$2.length;
    v38 = z$$4 < v322;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v561 = getSequenceFromFasta(text$$7);
  var v495 = JAM.call(v561.replace, v561, [/[^A-Za-z]/g, ""], JAM.policy.p15);
  var v323 = v495.length;
  var v40 = v323 > maxInput;
  if (v40) {
    var v324 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v39 = v324 + " characters.";
    alert(v39);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v325 = text$$8.length;
  var v42 = v325 > maxInput$$1;
  if (v42) {
    var v326 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v41 = v326 + " characters.";
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
  var v327 = alignArray.length;
  var v49 = v327 < 3;
  if (v49) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v328 = alignArray.length;
  var v51 = i$$4 < v328;
  for (;v51;) {
    var v496 = alignArray[i$$4];
    var v329 = JAM.call(v496.search, v496, [/[^\s]+\s/], JAM.policy.p17);
    var v50 = v329 == -1;
    if (v50) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v330 = alignArray.length;
    v51 = i$$4 < v330;
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
  var v331 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v54 = v331 != -1;
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
  var v332 = sequence$$2.length;
  var v55 = "&gt;results for " + v332;
  var stringToReturn = v55 + " residue sequence ";
  var v333 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p17);
  var v57 = v333 != -1;
  if (v57) {
    var v334 = stringToReturn + '"';
    var v56 = v334 + fastaSequenceTitle;
    stringToReturn = v56 + '"';
  }
  var v335 = stringToReturn + ' starting "';
  var v336 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v58 = v335 + v336;
  stringToReturn = v58 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v337 = sequenceOne.length;
  var v59 = "Search results for " + v337;
  var stringToReturn$$1 = v59 + " residue sequence ";
  var v338 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p17);
  var v61 = v338 != -1;
  if (v61) {
    var v339 = stringToReturn$$1 + '"';
    var v60 = v339 + fastaSequenceTitleOne;
    stringToReturn$$1 = v60 + '"';
  }
  var v340 = stringToReturn$$1 + ' starting "';
  var v341 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v62 = v340 + v341;
  stringToReturn$$1 = v62 + '"\n';
  var v342 = stringToReturn$$1 + "and ";
  var v343 = sequenceTwo.length;
  var v63 = v342 + v343;
  stringToReturn$$1 = v63 + " residue sequence ";
  var v344 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p17);
  var v65 = v344 != -1;
  if (v65) {
    var v345 = stringToReturn$$1 + '"';
    var v64 = v345 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v64 + '"';
  }
  var v346 = stringToReturn$$1 + ' starting "';
  var v347 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v66 = v346 + v347;
  stringToReturn$$1 = v66 + '"';
  var v67 = '<div class="info">' + stringToReturn$$1;
  return v67 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v68 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v68);
  var j$$2 = 0;
  var v348 = arrayOfPatterns$$3.length;
  var v70 = j$$2 < v348;
  for (;v70;) {
    var v497 = arrayOfPatterns$$3[j$$2];
    var v349 = JAM.call(v497.match, v497, [/\/.+\//], JAM.policy.p17);
    var v69 = v349 + "gi";
    if (JAM.isEval(eval)) {
      var v737 = eval("introspect(JAM.policy.pFull) { " + v69 + " }")
    } else {
      var v737 = JAM.call(eval, null, [v69])
    }
    geneticCodeMatchExp$$1[j$$2] = v737;
    j$$2++;
    var v350 = arrayOfPatterns$$3.length;
    v70 = j$$2 < v350;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v71 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v71);
  var j$$3 = 0;
  var v351 = arrayOfPatterns$$4.length;
  var v74 = j$$3 < v351;
  for (;v74;) {
    var v352 = arrayOfPatterns$$4[j$$3];
    var v72 = JAM.call(v352.match, v352, [/=[a-zA-Z\*]/], JAM.policy.p17);
    var v738 = v72.toString();
    geneticCodeMatchResult$$1[j$$3] = v738;
    var v73 = geneticCodeMatchResult$$1[j$$3];
    var v739 = JAM.call(v73.replace, v73, [/=/g, ""], JAM.policy.p15);
    geneticCodeMatchResult$$1[j$$3] = v739;
    j$$3++;
    var v353 = arrayOfPatterns$$4.length;
    v74 = j$$3 < v353;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(sequence$$3) {
  var fastaSequenceTitle$$1 = title;
  var v354 = sequence$$3.length;
  var v75 = "Results for " + v354;
  var stringToReturn$$2 = v75 + " residue sequence ";
  var v355 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p17);
  var v77 = v355 != -1;
  if (v77) {
    var v356 = stringToReturn$$2 + '"';
    var v76 = v356 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v76 + '"';
  }
  var v357 = stringToReturn$$2 + ' starting "';
  var v358 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v78 = v357 + v358;
  stringToReturn$$2 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$2;
  return v79 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v498 = "Results for " + topology;
  var v359 = v498 + " ";
  var v360 = sequence$$4.length;
  var v80 = v359 + v360;
  var stringToReturn$$3 = v80 + " residue sequence ";
  var v361 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p17);
  var v82 = v361 != -1;
  if (v82) {
    var v362 = stringToReturn$$3 + '"';
    var v81 = v362 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v81 + '"';
  }
  var v363 = stringToReturn$$3 + ' starting "';
  var v364 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v83 = v363 + v364;
  stringToReturn$$3 = v83 + '"';
  var v84 = '<div class="info">' + stringToReturn$$3;
  return v84 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v365 = sequenceOne$$1.length;
  var v85 = "Alignment results for " + v365;
  var stringToReturn$$4 = v85 + " residue sequence ";
  var v366 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p17);
  var v87 = v366 != -1;
  if (v87) {
    var v367 = stringToReturn$$4 + '"';
    var v86 = v367 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v86 + '"';
  }
  var v368 = stringToReturn$$4 + ' starting "';
  var v369 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v88 = v368 + v369;
  stringToReturn$$4 = v88 + '"\n';
  var v370 = stringToReturn$$4 + "and ";
  var v371 = sequenceTwo$$1.length;
  var v89 = v370 + v371;
  stringToReturn$$4 = v89 + " residue sequence ";
  var v372 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p17);
  var v91 = v372 != -1;
  if (v91) {
    var v373 = stringToReturn$$4 + '"';
    var v90 = v373 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v90 + '"';
  }
  var v374 = stringToReturn$$4 + ' starting "';
  var v375 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v92 = v374 + v375;
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
    var v376 = Math.random();
    var v377 = components.length;
    var v94 = v376 * v377;
    tempNum = JAM.call(Math.floor, Math, [v94], JAM.policy.p17);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p16);
    j$$4++;
    v95 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p11);
}
function getSequenceFromFasta(sequenceRecord) {
  var v378 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v96 = v378 != -1;
  if (v96) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p15);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v379 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p17);
  var v98 = v379 != -1;
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
  var v712 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p17);
  var v705 = v712 != -1;
  var v714 = !v705;
  if (v714) {
    var v713 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p17);
    v705 = v713 != -1;
  }
  var v696 = v705;
  var v707 = !v696;
  if (v707) {
    var v706 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p17);
    v696 = v706 != -1;
  }
  var v687 = v696;
  var v698 = !v687;
  if (v698) {
    var v697 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p17);
    v687 = v697 != -1;
  }
  var v676 = v687;
  var v689 = !v676;
  if (v689) {
    var v688 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p17);
    v676 = v688 != -1;
  }
  var v660 = v676;
  var v678 = !v660;
  if (v678) {
    var v677 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p17);
    v660 = v677 != -1;
  }
  var v644 = v660;
  var v662 = !v644;
  if (v662) {
    var v661 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p17);
    v644 = v661 != -1;
  }
  var v610 = v644;
  var v646 = !v610;
  if (v646) {
    var v645 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p17);
    v610 = v645 != -1;
  }
  var v562 = v610;
  var v612 = !v562;
  if (v612) {
    var v611 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p17);
    v562 = v611 != -1;
  }
  var v499 = v562;
  var v564 = !v499;
  if (v564) {
    var v563 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p17);
    v499 = v563 != -1;
  }
  var v380 = v499;
  var v501 = !v380;
  if (v501) {
    var v500 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p17);
    v380 = v500 != -1;
  }
  var v99 = v380;
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
  var title$$6 = "Protein Molecular Weight";
  _openWindow(title$$6);
  return;
}
function _openWindow(title$$7) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v104 = outputWindow.document;
  var v565 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v502 = v565 + "<head>\n";
  var v381 = v502 + "<title>Sequence Manipulation Suite</title>\n";
  var v105 = v381 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v104.write, v104, [v105], JAM.policy.p16);
  if (isColor) {
    var v106 = outputWindow.document;
    var v727 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v723 = v727 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v719 = v723 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v715 = v719 + "div.info {font-weight: bold}\n";
    var v708 = v715 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v699 = v708 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v690 = v699 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v679 = v690 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v663 = v679 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v647 = v663 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v613 = v647 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v566 = v613 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v503 = v566 + "td.many {color: #000000}\n";
    var v382 = v503 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v107 = v382 + "</style>\n";
    JAM.call(v106.write, v106, [v107], JAM.policy.p16);
  } else {
    var v108 = outputWindow.document;
    var v731 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v728 = v731 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v724 = v728 + "div.title {display: none}\n";
    var v720 = v724 + "div.info {font-weight: bold}\n";
    var v716 = v720 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v709 = v716 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v700 = v709 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v691 = v700 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v680 = v691 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v664 = v680 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v648 = v664 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v614 = v648 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v567 = v614 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v504 = v567 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v383 = v504 + "img {display: none}\n";
    var v109 = v383 + "</style>\n";
    JAM.call(v108.write, v108, [v109], JAM.policy.p16);
  }
  var v110 = outputWindow.document;
  var v568 = "</head>\n" + '<body class="main">\n';
  var v505 = v568 + '<div class="title">';
  var v384 = v505 + title$$7;
  var v111 = v384 + " results</div>\n";
  JAM.call(v110.write, v110, [v111], JAM.policy.p16);
  outputWindow.status = "Please Wait.";
  return;
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8);
  return;
}
function _openWindowAlign(title$$9) {
  var isBackground = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v112 = outputWindow.document;
  var v569 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v506 = v569 + "<head>\n";
  var v385 = v506 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v385 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p16);
  if (isBackground) {
    var v114 = outputWindow.document;
    var v729 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v725 = v729 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v721 = v725 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v717 = v721 + "div.info {font-weight: bold}\n";
    var v710 = v717 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v701 = v710 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v692 = v701 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v681 = v692 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v665 = v681 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v649 = v665 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v615 = v649 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v570 = v615 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v507 = v570 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v386 = v507 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v115 = v386 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p16);
  } else {
    var v116 = outputWindow.document;
    var v733 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v732 = v733 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v730 = v732 + "div.title {display: none}\n";
    var v726 = v730 + "div.info {font-weight: bold}\n";
    var v722 = v726 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v718 = v722 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v711 = v718 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v702 = v711 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v693 = v702 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v682 = v693 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v666 = v682 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v650 = v666 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v616 = v650 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v571 = v616 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v508 = v571 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v387 = v508 + "img {display: none}\n";
    var v117 = v387 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p16);
  }
  var v118 = outputWindow.document;
  var v572 = "</head>\n" + '<body class="main">\n';
  var v509 = v572 + '<div class="title">';
  var v388 = v509 + title$$9;
  var v119 = v388 + " results</div>\n";
  JAM.call(v118.write, v118, [v119], JAM.policy.p16);
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
  var v389 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p17);
  var v120 = v389 != -1;
  if (v120) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p17);
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p16);
  var v390 = testArray[0];
  var v124 = v390 != testString;
  if (v124) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v391 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p16);
  var v125 = v391 == -1;
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
  var v392 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p10);
  var v128 = v392 != 2489.824;
  if (v128) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v393 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p10);
  var v129 = v393 != 2489.8;
  if (v129) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v394 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p17);
  var v130 = v394 == -1;
  if (v130) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v617 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p17);
  var v573 = v617 == -1;
  var v619 = !v573;
  if (v619) {
    var v618 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p17);
    v573 = v618 == -1;
  }
  var v510 = v573;
  var v575 = !v510;
  if (v575) {
    var v574 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p17);
    v510 = v574 == -1;
  }
  var v395 = v510;
  var v512 = !v395;
  if (v512) {
    var v511 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p17);
    v395 = v511 == -1;
  }
  var v131 = v395;
  if (v131) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v396 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p17);
  var v132 = v396 == -1;
  if (v132) {
    alert("Please enter a number.");
    return false;
  }
  var v134 = theNumber$$2 > maxInput$$2;
  if (v134) {
    var v397 = "Please enter a number less than or equal to " + maxInput$$2;
    var v133 = v397 + ".";
    alert(v133);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v398 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p17);
  var v135 = v398 != -1;
  if (v135) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v399 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p17);
  var v136 = v399 != -1;
  if (v136) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v620 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p17);
  var v576 = v620 == -1;
  var v622 = !v576;
  if (v622) {
    var v621 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p17);
    v576 = v621 == -1;
  }
  var v513 = v576;
  var v578 = !v513;
  if (v578) {
    var v577 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p17);
    v513 = v577 == -1;
  }
  var v400 = v513;
  var v515 = !v400;
  if (v515) {
    var v514 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p17);
    v400 = v514 == -1;
  }
  var v137 = v400;
  if (v137) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v623 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p17);
  var v579 = v623 == -1;
  var v625 = !v579;
  if (v625) {
    var v624 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p17);
    v579 = v624 == -1;
  }
  var v516 = v579;
  var v581 = !v516;
  if (v581) {
    var v580 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p17);
    v516 = v580 == -1;
  }
  var v401 = v516;
  var v518 = !v401;
  if (v518) {
    var v517 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p17);
    v401 = v517 == -1;
  }
  var v138 = v401;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v402 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p17);
  var v139 = v402 == -1;
  if (v139) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v626 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p17);
  var v582 = v626 == -1;
  var v628 = !v582;
  if (v628) {
    var v627 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p17);
    v582 = v627 == -1;
  }
  var v519 = v582;
  var v584 = !v519;
  if (v584) {
    var v583 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p17);
    v519 = v583 == -1;
  }
  var v403 = v519;
  var v521 = !v403;
  if (v521) {
    var v520 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p17);
    v403 = v520 == -1;
  }
  var v140 = v403;
  if (v140) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v404 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p17);
  var v141 = v404 == -1;
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
    var v405 = basePerLine / groupSize;
    var v145 = j$$6 <= v405;
    for (;v145;) {
      var v144 = k < groupSize;
      for (;v144;) {
        var v406 = k + i$$5;
        var v143 = JAM.call(text$$10.charAt, text$$10, [v406], JAM.policy.p16);
        lineOfText = lineOfText + v143;
        k = k + 1;
        v144 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v407 = basePerLine / groupSize;
      v145 = j$$6 <= v407;
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
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v408 = adjustment < 0;
    if (v408) {
      v408 = adjusted >= 0;
    }
    var v149 = v408;
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
    var v409 = basePerLine$$2 / groupSize$$2;
    var v156 = j$$7 <= v409;
    for (;v156;) {
      var v152 = k$$1 < groupSize$$2;
      for (;v152;) {
        var v410 = i$$6 + k$$1;
        var v150 = v410 >= stopBase$$2;
        if (v150) {
          break;
        }
        var v411 = k$$1 + i$$6;
        var v151 = JAM.call(text$$12.charAt, text$$12, [v411], JAM.policy.p16);
        lineOfText$$1 = lineOfText$$1 + v151;
        k$$1 = k$$1 + 1;
        v152 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v154 = numberPosition$$1 == "above";
      if (v154) {
        var v412 = adjustNumbering(i$$6, numberingAdjustment);
        var v153 = rightNum(v412, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v153;
      }
      var v155 = i$$6 >= stopBase$$2;
      if (v155) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v413 = basePerLine$$2 / groupSize$$2;
      v156 = j$$7 <= v413;
    }
    var v179 = numberPosition$$1 == "left";
    if (v179) {
      var v157 = outputWindow.document;
      var v585 = adjustNumbering(lineNum, numberingAdjustment);
      var v522 = rightNum(v585, "", 8, tabIn$$3);
      var v414 = v522 + lineOfText$$1;
      var v158 = v414 + "\n";
      JAM.call(v157.write, v157, [v158], JAM.policy.p16);
      var v162 = strands$$1 == "two";
      if (v162) {
        var v159 = outputWindow.document;
        var v586 = adjustNumbering(lineNum, numberingAdjustment);
        var v523 = rightNum(v586, "", 8, tabIn$$3);
        var v524 = complement(lineOfText$$1);
        var v415 = v523 + v524;
        var v160 = v415 + "\n";
        JAM.call(v159.write, v159, [v160], JAM.policy.p16);
        var v161 = outputWindow.document;
        JAM.call(v161.write, v161, ["\n"], JAM.policy.p11);
      }
    } else {
      var v178 = numberPosition$$1 == "right";
      if (v178) {
        var v163 = outputWindow.document;
        var v525 = adjustNumbering(i$$6, numberingAdjustment);
        var v416 = lineOfText$$1 + v525;
        var v164 = v416 + "\n";
        JAM.call(v163.write, v163, [v164], JAM.policy.p16);
        var v168 = strands$$1 == "two";
        if (v168) {
          var v165 = outputWindow.document;
          var v526 = complement(lineOfText$$1);
          var v527 = adjustNumbering(i$$6, numberingAdjustment);
          var v417 = v526 + v527;
          var v166 = v417 + "\n";
          JAM.call(v165.write, v165, [v166], JAM.policy.p16);
          var v167 = outputWindow.document;
          JAM.call(v167.write, v167, ["\n"], JAM.policy.p11);
        }
      } else {
        var v177 = numberPosition$$1 == "above";
        if (v177) {
          var v169 = outputWindow.document;
          var v170 = aboveNum + "\n";
          JAM.call(v169.write, v169, [v170], JAM.policy.p16);
          var v171 = outputWindow.document;
          var v172 = lineOfText$$1 + "\n";
          JAM.call(v171.write, v171, [v172], JAM.policy.p16);
          var v176 = strands$$1 == "two";
          if (v176) {
            var v173 = outputWindow.document;
            var v418 = complement(lineOfText$$1);
            var v174 = v418 + "\n";
            JAM.call(v173.write, v173, [v174], JAM.policy.p16);
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
    var v419 = basePerLine$$3 / groupSize$$3;
    var v187 = j$$8 <= v419;
    for (;v187;) {
      var v183 = k$$2 < groupSize$$3;
      for (;v183;) {
        var v420 = i$$7 + k$$2;
        var v181 = v420 >= stopBase$$3;
        if (v181) {
          break;
        }
        var v421 = k$$2 + i$$7;
        var v182 = JAM.call(text$$13.charAt, text$$13, [v421], JAM.policy.p16);
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
      var v422 = basePerLine$$3 / groupSize$$3;
      v187 = j$$8 <= v422;
    }
    var v198 = numberPosition$$2 == "left";
    if (v198) {
      var v188 = outputWindow.document;
      var v528 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v423 = v528 + lineOfText$$2;
      var v189 = v423 + "\n";
      JAM.call(v188.write, v188, [v189], JAM.policy.p16);
    } else {
      var v197 = numberPosition$$2 == "right";
      if (v197) {
        var v190 = outputWindow.document;
        var v424 = lineOfText$$2 + i$$7;
        var v191 = v424 + "\n";
        JAM.call(v190.write, v190, [v191], JAM.policy.p16);
      } else {
        var v196 = numberPosition$$2 == "above";
        if (v196) {
          var v192 = outputWindow.document;
          var v193 = aboveNum$$1 + "\n";
          JAM.call(v192.write, v192, [v193], JAM.policy.p16);
          var v194 = outputWindow.document;
          var v195 = lineOfText$$2 + "\n";
          JAM.call(v194.write, v194, [v195], JAM.policy.p16);
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
  var v587 = sequence$$13.length;
  var v529 = v587 <= firstIndexToMutate;
  var v588 = !v529;
  if (v588) {
    v529 = lastIndexToMutate < 0;
  }
  var v425 = v529;
  var v530 = !v425;
  if (v530) {
    v425 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v200 = v425;
  if (v200) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v208 = i$$8 < numMut;
  for (;v208;) {
    maxNum = sequence$$13.length;
    var v426 = Math.random();
    var v201 = v426 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v201], JAM.policy.p17);
    var v427 = randNum < firstIndexToMutate;
    var v531 = !v427;
    if (v531) {
      v427 = randNum > lastIndexToMutate;
    }
    var v202 = v427;
    if (v202) {
      numMut++;
      i$$8++;
      v208 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p17);
    needNewChar = true;
    for (;needNewChar;) {
      var v428 = Math.random();
      var v429 = components$$1.length;
      var v203 = v428 * v429;
      componentsIndex = JAM.call(Math.round, Math, [v203], JAM.policy.p17);
      var v430 = components$$1.length;
      var v204 = componentsIndex == v430;
      if (v204) {
        componentsIndex = 0;
      }
      var v431 = components$$1[componentsIndex];
      var v205 = v431 != currentChar;
      if (v205) {
        needNewChar = false;
      }
    }
    var v432 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v433 = components$$1[componentsIndex];
    var v206 = v432 + v433;
    var v434 = randNum + 1;
    var v435 = sequence$$13.length;
    var v207 = JAM.call(sequence$$13.substring, sequence$$13, [v434, v435], JAM.policy.p27);
    sequence$$13 = v206 + v207;
    i$$8++;
    v208 = i$$8 < numMut;
  }
  var v209 = outputWindow.document;
  var v210 = addReturns(sequence$$13);
  JAM.call(v209.write, v209, [v210], JAM.policy.p16);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v215 = j$$9 < lengthOut$$1;
  for (;v215;) {
    var v436 = Math.random();
    var v437 = components$$2.length;
    var v211 = v436 * v437;
    tempNum$$1 = JAM.call(Math.floor, Math, [v211], JAM.policy.p17);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v438 = sequence$$14.length;
    var v214 = v438 == 60;
    if (v214) {
      var v212 = outputWindow.document;
      var v213 = sequence$$14 + "\n";
      JAM.call(v212.write, v212, [v213], JAM.policy.p16);
      sequence$$14 = "";
    }
    j$$9++;
    v215 = j$$9 < lengthOut$$1;
  }
  var v216 = outputWindow.document;
  var v217 = sequence$$14 + "\n";
  JAM.call(v216.write, v216, [v217], JAM.policy.p16);
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
    var v589 = sequence$$15.length;
    var v532 = v589 - lookAhead;
    var v533 = sequence$$15.length;
    var v439 = JAM.call(sequence$$15.substring, sequence$$15, [v532, v533], JAM.policy.p27);
    var v219 = v439 + sequence$$15;
    var v220 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v219 + v220;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v222 = outputWindow.document;
  JAM.call(v222.write, v222, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v223 = outputWindow.document;
  var v590 = '<tr><td class="title" width="200px">' + "Site:";
  var v534 = v590 + '</td><td class="title">';
  var v440 = v534 + "Positions:";
  var v224 = v440 + "</td></tr>\n";
  JAM.call(v223.write, v223, [v224], JAM.policy.p16);
  var i$$9 = 0;
  var v441 = arrayOfItems.length;
  var v240 = i$$9 < v441;
  for (;v240;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v442 = arrayOfItems[i$$9];
    var v225 = JAM.call(v442.match, v442, [/\/.+\//], JAM.policy.p17);
    matchExp = v225 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v591 = arrayOfItems[i$$9];
    var v535 = JAM.call(v591.match, v591, [/\)\D*\d+/], JAM.policy.p17);
    var v443 = v535.toString();
    var v226 = JAM.call(v443.replace, v443, [/\)\D*/, ""], JAM.policy.p15);
    cutDistance = parseFloat(v226);
    var v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
    for (;v232;) {
      var v227 = matchExp.lastIndex;
      matchPosition = v227 - cutDistance;
      var v444 = matchPosition >= lowerLimit;
      if (v444) {
        v444 = matchPosition < upperLimit;
      }
      var v230 = v444;
      if (v230) {
        timesFound++;
        var v228 = tempString$$1 + ", ";
        var v445 = matchPosition - shiftValue;
        var v229 = v445 + 1;
        tempString$$1 = v228 + v229;
      }
      var v446 = matchExp.lastIndex;
      var v536 = RegExp.lastMatch;
      var v447 = v536.length;
      var v231 = v446 - v447;
      matchExp.lastIndex = v231 + 1;
      v232 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p16);
    }
    var v448 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p17);
    var v233 = v448 != -1;
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
    var v683 = '<tr><td class="' + backGroundClass;
    var v667 = v683 + '">';
    var v703 = arrayOfItems[i$$9];
    var v694 = JAM.call(v703.match, v703, [/\([^\(]+\)/], JAM.policy.p17);
    var v684 = v694.toString();
    var v668 = JAM.call(v684.replace, v684, [/\(|\)/g, ""], JAM.policy.p15);
    var v651 = v667 + v668;
    var v629 = v651 + '</td><td class="';
    var v592 = v629 + backGroundClass;
    var v537 = v592 + '">';
    var v449 = v537 + tempString$$1;
    var v239 = v449 + "</td></tr>\n";
    JAM.call(v238.write, v238, [v239], JAM.policy.p16);
    timesFound = 0;
    i$$9++;
    var v450 = arrayOfItems.length;
    v240 = i$$9 < v450;
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
  var v652 = '<tr><td class="title">' + "Pattern:";
  var v630 = v652 + '</td><td class="title">';
  var v593 = v630 + "Times found:";
  var v538 = v593 + '</td><td class="title">';
  var v451 = v538 + "Percentage:";
  var v244 = v451 + "</td></tr>\n";
  JAM.call(v243.write, v243, [v244], JAM.policy.p16);
  var i$$10 = 0;
  var v452 = arrayOfItems$$1.length;
  var v253 = i$$10 < v452;
  for (;v253;) {
    var tempNumber = 0;
    var v453 = arrayOfItems$$1[i$$10];
    var v245 = JAM.call(v453.match, v453, [/\/[^\/]+\//], JAM.policy.p17);
    var matchExp$$1 = v245 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v454 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p16);
    var v247 = v454 != -1;
    if (v247) {
      var v246 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p16);
      tempNumber = v246.length;
    }
    var percentage = 0;
    var v539 = originalLength + 1;
    var v631 = arrayOfItems$$1[i$$10];
    var v594 = JAM.call(v631.match, v631, [/\d+/], JAM.policy.p17);
    var v540 = parseFloat(v594);
    var v455 = v539 - v540;
    var v250 = v455 > 0;
    if (v250) {
      var v248 = 100 * tempNumber;
      var v456 = originalLength + 1;
      var v595 = arrayOfItems$$1[i$$10];
      var v541 = JAM.call(v595.match, v595, [/\d+/], JAM.policy.p17);
      var v457 = parseFloat(v541);
      var v249 = v456 - v457;
      percentage = v248 / v249;
    }
    var v251 = outputWindow.document;
    var v704 = arrayOfItems$$1[i$$10];
    var v695 = JAM.call(v704.match, v704, [/\([^\(]+\)\b/], JAM.policy.p17);
    var v685 = v695.toString();
    var v669 = JAM.call(v685.replace, v685, [/\(|\)/g, ""], JAM.policy.p15);
    var v653 = "<tr><td>" + v669;
    var v632 = v653 + "</td><td>";
    var v596 = v632 + tempNumber;
    var v542 = v596 + "</td><td>";
    var v543 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p10);
    var v458 = v542 + v543;
    var v252 = v458 + "</td></tr>\n";
    JAM.call(v251.write, v251, [v252], JAM.policy.p16);
    i$$10++;
    var v459 = arrayOfItems$$1.length;
    v253 = i$$10 < v459;
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
  var v460 = sequence$$17.length;
  var v261 = v460 > 0;
  for (;v261;) {
    maxNum$$1 = sequence$$17.length;
    var v461 = Math.random();
    var v255 = v461 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v255], JAM.policy.p17);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p17);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v256 = randNum$$1 + 1;
    var v257 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v256, v257], JAM.policy.p15);
    sequence$$17 = tempString1 + tempString2;
    var v462 = tempSeq.length;
    var v260 = v462 == 60;
    if (v260) {
      var v258 = outputWindow.document;
      var v259 = tempSeq + "\n";
      JAM.call(v258.write, v258, [v259], JAM.policy.p16);
      tempSeq = "";
    }
    var v463 = sequence$$17.length;
    v261 = v463 > 0;
  }
  var v262 = outputWindow.document;
  var v263 = tempSeq + "\n";
  JAM.call(v262.write, v262, [v263], JAM.policy.p16);
  return true;
}
function proteinMw() {
  var theDocument = document;
  var newProtein = "";
  var maxInput$$3 = 2E5;
  var v464 = testScript();
  var v264 = v464 == false;
  if (v264) {
    return;
  }
  var v670 = theDocument.forms;
  var v654 = v670[0];
  var v633 = v654.elements;
  var v597 = v633[0];
  var v544 = checkFormElement(v597);
  var v465 = v544 == false;
  var v546 = !v465;
  if (v546) {
    var v686 = theDocument.forms;
    var v671 = v686[0];
    var v655 = v671.elements;
    var v634 = v655[0];
    var v598 = v634.value;
    var v545 = checkSequenceLength(v598, maxInput$$3);
    v465 = v545 == false;
  }
  var v265 = v465;
  if (v265) {
    return;
  }
  var arrayOfMw = ["/A/ (A)71.08", "/C/ (C)103.14", "/D/ (D)115.09", "/E/ (E)129.12", " /F/ (F)147.18", "/G/ (G)57.06", "/H/ (H)137.15", "/I/ (I)113.17", "/K/ (K)128.18", "/L/ (L)113.17", "/M/ (M)131.21", "/N/ (N)114.11", "/P/ (P)97.12", "/Q/ (Q)128.41", "/R/ (R)156.20", "/S/ (S)87.08", "/T/ (T)101.11", "/V/ (V)99.14", "/W/ (W)186.21", "/Y/ (Y)163.18"];
  openWindow();
  var v635 = theDocument.forms;
  var v599 = v635[0];
  var v547 = v599.elements;
  var v466 = v547[0];
  var v266 = v466.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v266);
  var i$$11 = 0;
  var v467 = arrayOfFasta$$1.length;
  var v274 = i$$11 < v467;
  for (;v274;) {
    var v267 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v267);
    var v268 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v268);
    newProtein = removeNonProteinStrict(newProtein);
    var v269 = outputWindow.document;
    var v270 = getInfoFromTitleAndSequence(newProtein);
    JAM.call(v269.write, v269, [v270], JAM.policy.p16);
    var v672 = theDocument.forms;
    var v656 = v672[0];
    var v636 = v656.elements;
    var v600 = v636[4];
    var v548 = v600.options;
    var v673 = theDocument.forms;
    var v657 = v673[0];
    var v637 = v657.elements;
    var v601 = v637[4];
    var v549 = v601.selectedIndex;
    var v468 = v548[v549];
    var v271 = v468.value;
    var v674 = theDocument.forms;
    var v658 = v674[0];
    var v638 = v658.elements;
    var v602 = v638[5];
    var v550 = v602.options;
    var v675 = theDocument.forms;
    var v659 = v675[0];
    var v639 = v659.elements;
    var v603 = v639[5];
    var v551 = v603.selectedIndex;
    var v469 = v550[v551];
    var v272 = v469.value;
    writeProtMw(newProtein, arrayOfMw, v271, v272);
    var v273 = outputWindow.document;
    JAM.call(v273.write, v273, ["<br />\n<br />\n"], JAM.policy.p11);
    i$$11++;
    var v470 = arrayOfFasta$$1.length;
    v274 = i$$11 < v470;
  }
  closeWindow();
  return;
}
function writeProtMw(proteinSequence$$1, arrayOfMw$$1, copies, fusion) {
  var water = 18.015;
  var result = 0;
  copies = parseInt(copies);
  var j$$10 = 0;
  var v275 = j$$10 < copies;
  for (;v275;) {
    proteinSequence$$1 = proteinSequence$$1 + fusion;
    j$$10++;
    v275 = j$$10 < copies;
  }
  j$$10 = 0;
  var v471 = arrayOfMw$$1.length;
  var v280 = j$$10 < v471;
  for (;v280;) {
    var tempNumber$$1 = 0;
    var v472 = arrayOfMw$$1[j$$10];
    var v276 = JAM.call(v472.match, v472, [/\/[^\/]+\//], JAM.policy.p17);
    var matchExp$$2 = v276 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$2 = eval("introspect(JAM.policy.pFull) { " + matchExp$$2 + " }");
    } else {
      matchExp$$2 = JAM.call(eval, null, [matchExp$$2]);
    }
    var v473 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [matchExp$$2], JAM.policy.p16);
    var v278 = v473 != -1;
    if (v278) {
      var v277 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [matchExp$$2], JAM.policy.p16);
      tempNumber$$1 = v277.length;
    }
    var v640 = arrayOfMw$$1[j$$10];
    var v604 = JAM.call(v640.match, v640, [/[\d\.]+/], JAM.policy.p17);
    var v552 = v604.toString();
    var v474 = parseFloat(v552);
    var v279 = tempNumber$$1 * v474;
    result = result + v279;
    j$$10++;
    var v475 = arrayOfMw$$1.length;
    v280 = j$$10 < v475;
  }
  var v285 = result == 0;
  if (v285) {
    var v281 = outputWindow.document;
    var v282 = result + " kDa";
    JAM.call(v281.write, v281, [v282], JAM.policy.p16);
  } else {
    result = result + water;
    result = result / 1E3;
    result = JAM.call(result.toFixed, result, [2], JAM.policy.p10);
    var v283 = outputWindow.document;
    var v284 = result + " kDa";
    JAM.call(v283.write, v283, [v284], JAM.policy.p16);
  }
  return;
}
JAM.set(document, "onload", v2);
var v286 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11);
JAM.set(v286, "onclick", v3);
var v287 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11);
JAM.set(v287, "onclick", v4)

JAM.stopProfile('load');
