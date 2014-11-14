
JAM.startProfile('load');
function v4() {
  var v534 = document.forms;
  var v460 = v534[0];
  var v278 = v460.elements;
  var v5 = v278[0];
  v5.value = " ";
  var v535 = document.forms;
  var v461 = v535[0];
  var v279 = v461.elements;
  var v6 = v279[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    dnaStats(document);
  } catch (e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7);
  }
  return;
}
function v2() {
  var v280 = document.main_form;
  var v8 = v280.main_submit;
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
  var v281 = arrayOfSequences.length;
  var v10 = v281 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v282 = arrayOfTitles.length;
  var v12 = i$$1 < v282;
  for (;v12;) {
    var v582 = arrayOfTitles[i$$1];
    var v536 = JAM.call(v582.search, v582, [/\S/], JAM.policy.p15);
    var v462 = v536 == -1;
    var v538 = !v462;
    if (v538) {
      var v583 = arrayOfSequences[i$$1];
      var v537 = JAM.call(v583.search, v583, [/\S/], JAM.policy.p15);
      v462 = v537 == -1;
    }
    var v283 = v462;
    var v464 = !v283;
    if (v464) {
      var v539 = arrayOfSequences[i$$1];
      var v463 = v539.length;
      v283 = v463 != lengthOfAlign;
    }
    var v11 = v283;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v284 = arrayOfTitles.length;
    v12 = i$$1 < v284;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v613 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p15);
  var v584 = v613 == -1;
  var v615 = !v584;
  if (v615) {
    var v614 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p15);
    v584 = v614 == -1;
  }
  var v540 = v584;
  var v586 = !v540;
  if (v586) {
    var v585 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p15);
    v540 = v585 == -1;
  }
  var v465 = v540;
  var v542 = !v465;
  if (v542) {
    var v541 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p15);
    v465 = v541 == -1;
  }
  var v285 = v465;
  var v467 = !v285;
  if (v467) {
    var v466 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p15);
    v285 = v466 == -1;
  }
  var v13 = v285;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v468 = formElement.value;
  var v286 = JAM.call(v468.search, v468, [/\S/], JAM.policy.p15);
  var v14 = v286 == -1;
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
  var v287 = arrayOfPatterns.length;
  var v17 = z$$2 < v287;
  for (;v17;) {
    var v469 = arrayOfPatterns[z$$2];
    var v288 = JAM.call(v469.search, v469, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p15);
    var v15 = v288 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v470 = arrayOfPatterns[z$$2];
    var v289 = moreExpressionCheck(v470);
    var v16 = v289 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v290 = arrayOfPatterns.length;
    v17 = z$$2 < v290;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v291 = arrayOfPatterns.length;
  var v23 = j < v291;
  for (;v23;) {
    var v471 = arrayOfPatterns[j];
    var v292 = JAM.call(v471.match, v471, [/\/.+\//], JAM.policy.p15);
    var v20 = v292 + "gi";
    if (JAM.isEval(eval)) {
      var v698 = eval("introspect(JAM.policy.pFull) { " + v20 + " }")
    } else {
      var v698 = JAM.call(eval, null, [v20])
    }
    geneticCodeMatchExp[j] = v698;
    var v293 = arrayOfPatterns[j];
    var v21 = JAM.call(v293.match, v293, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v699 = v21.toString();
    geneticCodeMatchResult[j] = v699;
    var v22 = geneticCodeMatchResult[j];
    var v700 = JAM.call(v22.replace, v22, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v700;
    j++;
    var v294 = arrayOfPatterns.length;
    v23 = j < v294;
  }
  var i$$2 = 0;
  var v472 = testSequence.length;
  var v295 = v472 - 3;
  var v30 = i$$2 <= v295;
  for (;v30;) {
    var v24 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v24], JAM.policy.p16);
    j = 0;
    var v296 = geneticCodeMatchExp.length;
    var v28 = j < v296;
    for (;v28;) {
      var v473 = geneticCodeMatchExp[j];
      var v297 = JAM.call(codon.search, codon, [v473], JAM.policy.p17);
      var v27 = v297 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v298 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v298 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v299 = geneticCodeMatchExp.length;
      v28 = j < v299;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v474 = testSequence.length;
    var v300 = v474 - 3;
    v30 = i$$2 <= v300;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v301 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v301;
  for (;v32;) {
    var v475 = arrayOfPatterns$$1[z$$3];
    var v302 = JAM.call(v475.search, v475, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p15);
    var v31 = v302 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v303 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v303;
  }
  var i$$3 = 0;
  var v304 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v304;
  for (;v36;) {
    var v476 = arrayOfPatterns$$1[i$$3];
    var v305 = "[" + v476;
    var v33 = v305 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v306 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v306;
    for (;v35;) {
      var v477 = arrayOfPatterns$$1[j$$1];
      var v307 = JAM.call(v477.search, v477, [re], JAM.policy.p17);
      var v34 = v307 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v308 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v308;
    }
    i$$3++;
    var v309 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v309;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v310 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v310;
  for (;v39;) {
    var v478 = arrayOfPatterns$$2[z$$4];
    var v311 = JAM.call(v478.search, v478, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p15);
    var v37 = v311 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v479 = arrayOfPatterns$$2[z$$4];
    var v312 = moreExpressionCheck(v479);
    var v38 = v312 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v313 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v313;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v543 = getSequenceFromFasta(text$$7);
  var v480 = JAM.call(v543.replace, v543, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v314 = v480.length;
  var v41 = v314 > maxInput;
  if (v41) {
    var v315 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v315 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v316 = text$$8.length;
  var v43 = v316 > maxInput$$1;
  if (v43) {
    var v317 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v317 + " characters.";
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
  var v318 = alignArray.length;
  var v50 = v318 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v319 = alignArray.length;
  var v52 = i$$4 < v319;
  for (;v52;) {
    var v481 = alignArray[i$$4];
    var v320 = JAM.call(v481.search, v481, [/[^\s]+\s/], JAM.policy.p15);
    var v51 = v320 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v321 = alignArray.length;
    v52 = i$$4 < v321;
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
  var v322 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v55 = v322 != -1;
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
  var v323 = sequence$$2.length;
  var v56 = "&gt;results for " + v323;
  var stringToReturn = v56 + " residue sequence ";
  var v324 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p15);
  var v58 = v324 != -1;
  if (v58) {
    var v325 = stringToReturn + '"';
    var v57 = v325 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v326 = stringToReturn + ' starting "';
  var v327 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v59 = v326 + v327;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v328 = sequenceOne.length;
  var v60 = "Search results for " + v328;
  var stringToReturn$$1 = v60 + " residue sequence ";
  var v329 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p15);
  var v62 = v329 != -1;
  if (v62) {
    var v330 = stringToReturn$$1 + '"';
    var v61 = v330 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v331 = stringToReturn$$1 + ' starting "';
  var v332 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v63 = v331 + v332;
  stringToReturn$$1 = v63 + '"\n';
  var v333 = stringToReturn$$1 + "and ";
  var v334 = sequenceTwo.length;
  var v64 = v333 + v334;
  stringToReturn$$1 = v64 + " residue sequence ";
  var v335 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p15);
  var v66 = v335 != -1;
  if (v66) {
    var v336 = stringToReturn$$1 + '"';
    var v65 = v336 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v337 = stringToReturn$$1 + ' starting "';
  var v338 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v67 = v337 + v338;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v339 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v339;
  for (;v71;) {
    var v482 = arrayOfPatterns$$3[j$$2];
    var v340 = JAM.call(v482.match, v482, [/\/.+\//], JAM.policy.p15);
    var v70 = v340 + "gi";
    if (JAM.isEval(eval)) {
      var v701 = eval("introspect(JAM.policy.pFull) { " + v70 + " }")
    } else {
      var v701 = JAM.call(eval, null, [v70])
    }
    geneticCodeMatchExp$$1[j$$2] = v701;
    j$$2++;
    var v341 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v341;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v342 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v342;
  for (;v75;) {
    var v343 = arrayOfPatterns$$4[j$$3];
    var v73 = JAM.call(v343.match, v343, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v702 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v702;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v703 = JAM.call(v74.replace, v74, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v703;
    j$$3++;
    var v344 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v344;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v345 = sequence$$3.length;
  var v76 = "Results for " + v345;
  var stringToReturn$$2 = v76 + " residue sequence ";
  var v346 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p15);
  var v78 = v346 != -1;
  if (v78) {
    var v347 = stringToReturn$$2 + '"';
    var v77 = v347 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v348 = stringToReturn$$2 + ' starting "';
  var v349 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v79 = v348 + v349;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v483 = "Results for " + topology;
  var v350 = v483 + " ";
  var v351 = sequence$$4.length;
  var v81 = v350 + v351;
  var stringToReturn$$3 = v81 + " residue sequence ";
  var v352 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p15);
  var v83 = v352 != -1;
  if (v83) {
    var v353 = stringToReturn$$3 + '"';
    var v82 = v353 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v354 = stringToReturn$$3 + ' starting "';
  var v355 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v84 = v354 + v355;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v356 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v356;
  var stringToReturn$$4 = v86 + " residue sequence ";
  var v357 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p15);
  var v88 = v357 != -1;
  if (v88) {
    var v358 = stringToReturn$$4 + '"';
    var v87 = v358 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v359 = stringToReturn$$4 + ' starting "';
  var v360 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v89 = v359 + v360;
  stringToReturn$$4 = v89 + '"\n';
  var v361 = stringToReturn$$4 + "and ";
  var v362 = sequenceTwo$$1.length;
  var v90 = v361 + v362;
  stringToReturn$$4 = v90 + " residue sequence ";
  var v363 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p15);
  var v92 = v363 != -1;
  if (v92) {
    var v364 = stringToReturn$$4 + '"';
    var v91 = v364 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v365 = stringToReturn$$4 + ' starting "';
  var v366 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v93 = v365 + v366;
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
    var v367 = Math.random();
    var v368 = components.length;
    var v95 = v367 * v368;
    tempNum = JAM.call(Math.floor, Math, [v95], JAM.policy.p15);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p9);
}
function getSequenceFromFasta(sequenceRecord) {
  var v369 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v97 = v369 != -1;
  if (v97) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v370 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v99 = v370 != -1;
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
  var v676 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p15);
  var v669 = v676 != -1;
  var v678 = !v669;
  if (v678) {
    var v677 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p15);
    v669 = v677 != -1;
  }
  var v660 = v669;
  var v671 = !v660;
  if (v671) {
    var v670 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p15);
    v660 = v670 != -1;
  }
  var v651 = v660;
  var v662 = !v651;
  if (v662) {
    var v661 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p15);
    v651 = v661 != -1;
  }
  var v640 = v651;
  var v653 = !v640;
  if (v653) {
    var v652 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p15);
    v640 = v652 != -1;
  }
  var v628 = v640;
  var v642 = !v628;
  if (v642) {
    var v641 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p15);
    v628 = v641 != -1;
  }
  var v616 = v628;
  var v630 = !v616;
  if (v630) {
    var v629 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p15);
    v616 = v629 != -1;
  }
  var v587 = v616;
  var v618 = !v587;
  if (v618) {
    var v617 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p15);
    v587 = v617 != -1;
  }
  var v544 = v587;
  var v589 = !v544;
  if (v589) {
    var v588 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p15);
    v544 = v588 != -1;
  }
  var v484 = v544;
  var v546 = !v484;
  if (v546) {
    var v545 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p15);
    v484 = v545 != -1;
  }
  var v371 = v484;
  var v486 = !v371;
  if (v486) {
    var v485 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p15);
    v371 = v485 != -1;
  }
  var v100 = v371;
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
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return;
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v105 = outputWindow.document;
  var v547 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v487 = v547 + "<head>\n";
  var v372 = v487 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v372 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v105.write, v105, [v106], JAM.policy.p17);
  if (isColor) {
    var v107 = outputWindow.document;
    var v691 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v687 = v691 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v683 = v687 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v679 = v683 + "div.info {font-weight: bold}\n";
    var v672 = v679 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v663 = v672 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v654 = v663 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v643 = v654 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v631 = v643 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v619 = v631 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v590 = v619 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v548 = v590 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v488 = v548 + "td.many {color: #000000}\n";
    var v373 = v488 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v373 + "</style>\n";
    JAM.call(v107.write, v107, [v108], JAM.policy.p17);
  } else {
    var v109 = outputWindow.document;
    var v695 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v692 = v695 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v688 = v692 + "div.title {display: none}\n";
    var v684 = v688 + "div.info {font-weight: bold}\n";
    var v680 = v684 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v673 = v680 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v664 = v673 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v655 = v664 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v644 = v655 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v632 = v644 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v620 = v632 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v591 = v620 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v549 = v591 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v489 = v549 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v374 = v489 + "img {display: none}\n";
    var v110 = v374 + "</style>\n";
    JAM.call(v109.write, v109, [v110], JAM.policy.p17);
  }
  var v111 = outputWindow.document;
  var v550 = "</head>\n" + '<body class="main">\n';
  var v490 = v550 + '<div class="title">';
  var v375 = v490 + title$$6;
  var v112 = v375 + " results</div>\n";
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
  var v551 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v491 = v551 + "<head>\n";
  var v376 = v491 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v376 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v113.write, v113, [v114], JAM.policy.p17);
  if (isBackground) {
    var v115 = outputWindow.document;
    var v693 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v689 = v693 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v685 = v689 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v681 = v685 + "div.info {font-weight: bold}\n";
    var v674 = v681 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v665 = v674 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v656 = v665 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v645 = v656 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v633 = v645 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v621 = v633 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v592 = v621 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v552 = v592 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v492 = v552 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v377 = v492 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v377 + "</style>\n";
    JAM.call(v115.write, v115, [v116], JAM.policy.p17);
  } else {
    var v117 = outputWindow.document;
    var v697 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v696 = v697 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v694 = v696 + "div.title {display: none}\n";
    var v690 = v694 + "div.info {font-weight: bold}\n";
    var v686 = v690 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v682 = v686 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v675 = v682 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v666 = v675 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v657 = v666 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v646 = v657 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v634 = v646 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v622 = v634 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v593 = v622 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v553 = v593 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v493 = v553 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v378 = v493 + "img {display: none}\n";
    var v118 = v378 + "</style>\n";
    JAM.call(v117.write, v117, [v118], JAM.policy.p17);
  }
  var v119 = outputWindow.document;
  var v554 = "</head>\n" + '<body class="main">\n';
  var v494 = v554 + '<div class="title">';
  var v379 = v494 + title$$8;
  var v120 = v379 + " results</div>\n";
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
  var v380 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p15);
  var v121 = v380 != -1;
  if (v121) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p15);
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p17);
  var v381 = testArray[0];
  var v125 = v381 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v382 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v126 = v382 == -1;
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
  var v383 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p11);
  var v129 = v383 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v384 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p11);
  var v130 = v384 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v385 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p15);
  var v131 = v385 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v594 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p15);
  var v555 = v594 == -1;
  var v596 = !v555;
  if (v596) {
    var v595 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p15);
    v555 = v595 == -1;
  }
  var v495 = v555;
  var v557 = !v495;
  if (v557) {
    var v556 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p15);
    v495 = v556 == -1;
  }
  var v386 = v495;
  var v497 = !v386;
  if (v497) {
    var v496 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p15);
    v386 = v496 == -1;
  }
  var v132 = v386;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v387 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p15);
  var v133 = v387 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v388 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v388 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v389 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p15);
  var v136 = v389 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v390 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p15);
  var v137 = v390 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v597 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p15);
  var v558 = v597 == -1;
  var v599 = !v558;
  if (v599) {
    var v598 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p15);
    v558 = v598 == -1;
  }
  var v498 = v558;
  var v560 = !v498;
  if (v560) {
    var v559 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p15);
    v498 = v559 == -1;
  }
  var v391 = v498;
  var v500 = !v391;
  if (v500) {
    var v499 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p15);
    v391 = v499 == -1;
  }
  var v138 = v391;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v600 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p15);
  var v561 = v600 == -1;
  var v602 = !v561;
  if (v602) {
    var v601 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p15);
    v561 = v601 == -1;
  }
  var v501 = v561;
  var v563 = !v501;
  if (v563) {
    var v562 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p15);
    v501 = v562 == -1;
  }
  var v392 = v501;
  var v503 = !v392;
  if (v503) {
    var v502 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p15);
    v392 = v502 == -1;
  }
  var v139 = v392;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v393 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p15);
  var v140 = v393 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v603 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p15);
  var v564 = v603 == -1;
  var v605 = !v564;
  if (v605) {
    var v604 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p15);
    v564 = v604 == -1;
  }
  var v504 = v564;
  var v566 = !v504;
  if (v566) {
    var v565 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p15);
    v504 = v565 == -1;
  }
  var v394 = v504;
  var v506 = !v394;
  if (v506) {
    var v505 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p15);
    v394 = v505 == -1;
  }
  var v141 = v394;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v395 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p15);
  var v142 = v395 == -1;
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
    var v396 = basePerLine / groupSize;
    var v146 = j$$6 <= v396;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v397 = k + i$$5;
        var v144 = JAM.call(text$$10.charAt, text$$10, [v397], JAM.policy.p17);
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v398 = basePerLine / groupSize;
      v146 = j$$6 <= v398;
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
  JAM.call(writeGroupNumDnaSetStart, null, [text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0], JAM.policy.p19);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v399 = adjustment < 0;
    if (v399) {
      v399 = adjusted >= 0;
    }
    var v150 = v399;
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
    var v400 = basePerLine$$2 / groupSize$$2;
    var v159 = j$$7 <= v400;
    for (;v159;) {
      var v154 = k$$1 < groupSize$$2;
      for (;v154;) {
        var v401 = i$$6 + k$$1;
        var v151 = v401 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v152 = lineOfText$$1;
        var v402 = k$$1 + i$$6;
        var v153 = JAM.call(text$$12.charAt, text$$12, [v402], JAM.policy.p17);
        lineOfText$$1 = v152 + v153;
        k$$1 = k$$1 + 1;
        v154 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v157 = numberPosition$$1 == "above";
      if (v157) {
        var v155 = aboveNum;
        var v403 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
        var v156 = rightNum(v403, "", groupSize$$2, tabIn$$3);
        aboveNum = v155 + v156;
      }
      var v158 = i$$6 >= stopBase$$2;
      if (v158) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v404 = basePerLine$$2 / groupSize$$2;
      v159 = j$$7 <= v404;
    }
    var v182 = numberPosition$$1 == "left";
    if (v182) {
      var v160 = outputWindow.document;
      var v567 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19);
      var v507 = rightNum(v567, "", 8, tabIn$$3);
      var v405 = v507 + lineOfText$$1;
      var v161 = v405 + "\n";
      JAM.call(v160.write, v160, [v161], JAM.policy.p17);
      var v165 = strands$$1 == "two";
      if (v165) {
        var v162 = outputWindow.document;
        var v568 = JAM.call(adjustNumbering, null, [lineNum, numberingAdjustment], JAM.policy.p19);
        var v508 = rightNum(v568, "", 8, tabIn$$3);
        var v509 = complement(lineOfText$$1);
        var v406 = v508 + v509;
        var v163 = v406 + "\n";
        JAM.call(v162.write, v162, [v163], JAM.policy.p17);
        var v164 = outputWindow.document;
        JAM.call(v164.write, v164, ["\n"], JAM.policy.p9);
      }
    } else {
      var v181 = numberPosition$$1 == "right";
      if (v181) {
        var v166 = outputWindow.document;
        var v510 = lineOfText$$1;
        var v511 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
        var v407 = v510 + v511;
        var v167 = v407 + "\n";
        JAM.call(v166.write, v166, [v167], JAM.policy.p17);
        var v171 = strands$$1 == "two";
        if (v171) {
          var v168 = outputWindow.document;
          var v512 = complement(lineOfText$$1);
          var v513 = JAM.call(adjustNumbering, null, [i$$6, numberingAdjustment], JAM.policy.p19);
          var v408 = v512 + v513;
          var v169 = v408 + "\n";
          JAM.call(v168.write, v168, [v169], JAM.policy.p17);
          var v170 = outputWindow.document;
          JAM.call(v170.write, v170, ["\n"], JAM.policy.p9);
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
            var v409 = complement(lineOfText$$1);
            var v177 = v409 + "\n";
            JAM.call(v176.write, v176, [v177], JAM.policy.p17);
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
    var v410 = basePerLine$$3 / groupSize$$3;
    var v190 = j$$8 <= v410;
    for (;v190;) {
      var v186 = k$$2 < groupSize$$3;
      for (;v186;) {
        var v411 = i$$7 + k$$2;
        var v184 = v411 >= stopBase$$3;
        if (v184) {
          break;
        }
        var v412 = k$$2 + i$$7;
        var v185 = JAM.call(text$$13.charAt, text$$13, [v412], JAM.policy.p17);
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
      var v413 = basePerLine$$3 / groupSize$$3;
      v190 = j$$8 <= v413;
    }
    var v201 = numberPosition$$2 == "left";
    if (v201) {
      var v191 = outputWindow.document;
      var v514 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v414 = v514 + lineOfText$$2;
      var v192 = v414 + "\n";
      JAM.call(v191.write, v191, [v192], JAM.policy.p17);
    } else {
      var v200 = numberPosition$$2 == "right";
      if (v200) {
        var v193 = outputWindow.document;
        var v415 = lineOfText$$2 + i$$7;
        var v194 = v415 + "\n";
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
  var v569 = sequence$$13.length;
  var v515 = v569 <= firstIndexToMutate;
  var v570 = !v515;
  if (v570) {
    v515 = lastIndexToMutate < 0;
  }
  var v416 = v515;
  var v516 = !v416;
  if (v516) {
    v416 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v203 = v416;
  if (v203) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v211 = i$$8 < numMut;
  for (;v211;) {
    maxNum = sequence$$13.length;
    var v417 = Math.random();
    var v204 = v417 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v204], JAM.policy.p15);
    var v418 = randNum < firstIndexToMutate;
    var v517 = !v418;
    if (v517) {
      v418 = randNum > lastIndexToMutate;
    }
    var v205 = v418;
    if (v205) {
      numMut++;
      i$$8++;
      v211 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p15);
    needNewChar = true;
    for (;needNewChar;) {
      var v419 = Math.random();
      var v420 = components$$1.length;
      var v206 = v419 * v420;
      componentsIndex = JAM.call(Math.round, Math, [v206], JAM.policy.p15);
      var v421 = components$$1.length;
      var v207 = componentsIndex == v421;
      if (v207) {
        componentsIndex = 0;
      }
      var v422 = components$$1[componentsIndex];
      var v208 = v422 != currentChar;
      if (v208) {
        needNewChar = false;
      }
    }
    var v423 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v424 = components$$1[componentsIndex];
    var v209 = v423 + v424;
    var v425 = randNum + 1;
    var v426 = sequence$$13.length;
    var v210 = JAM.call(sequence$$13.substring, sequence$$13, [v425, v426], JAM.policy.p21);
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
    var v427 = Math.random();
    var v428 = components$$2.length;
    var v214 = v427 * v428;
    tempNum$$1 = JAM.call(Math.floor, Math, [v214], JAM.policy.p15);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v429 = sequence$$14.length;
    var v217 = v429 == 60;
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
    var v571 = sequence$$15.length;
    var v518 = v571 - lookAhead;
    var v519 = sequence$$15.length;
    var v430 = JAM.call(sequence$$15.substring, sequence$$15, [v518, v519], JAM.policy.p21);
    var v222 = v430 + sequence$$15;
    var v223 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v222 + v223;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v225 = outputWindow.document;
  JAM.call(v225.write, v225, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v226 = outputWindow.document;
  var v572 = '<tr><td class="title" width="200px">' + "Site:";
  var v520 = v572 + '</td><td class="title">';
  var v431 = v520 + "Positions:";
  var v227 = v431 + "</td></tr>\n";
  JAM.call(v226.write, v226, [v227], JAM.policy.p17);
  var i$$9 = 0;
  var v432 = arrayOfItems.length;
  var v243 = i$$9 < v432;
  for (;v243;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v433 = arrayOfItems[i$$9];
    var v228 = JAM.call(v433.match, v433, [/\/.+\//], JAM.policy.p15);
    matchExp = v228 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v573 = arrayOfItems[i$$9];
    var v521 = JAM.call(v573.match, v573, [/\)\D*\d+/], JAM.policy.p15);
    var v434 = v521.toString();
    var v229 = JAM.call(v434.replace, v434, [/\)\D*/, ""], JAM.policy.p16);
    cutDistance = parseFloat(v229);
    var v235 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v235;) {
      var v230 = matchExp.lastIndex;
      matchPosition = v230 - cutDistance;
      var v435 = matchPosition >= lowerLimit;
      if (v435) {
        v435 = matchPosition < upperLimit;
      }
      var v233 = v435;
      if (v233) {
        timesFound++;
        var v231 = tempString$$1 + ", ";
        var v436 = matchPosition - shiftValue;
        var v232 = v436 + 1;
        tempString$$1 = v231 + v232;
      }
      var v437 = matchExp.lastIndex;
      var v522 = RegExp.lastMatch;
      var v438 = v522.length;
      var v234 = v437 - v438;
      matchExp.lastIndex = v234 + 1;
      v235 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v439 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p15);
    var v236 = v439 != -1;
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
    var v647 = '<tr><td class="' + backGroundClass;
    var v635 = v647 + '">';
    var v667 = arrayOfItems[i$$9];
    var v658 = JAM.call(v667.match, v667, [/\([^\(]+\)/], JAM.policy.p15);
    var v648 = v658.toString();
    var v636 = JAM.call(v648.replace, v648, [/\(|\)/g, ""], JAM.policy.p16);
    var v623 = v635 + v636;
    var v606 = v623 + '</td><td class="';
    var v574 = v606 + backGroundClass;
    var v523 = v574 + '">';
    var v440 = v523 + tempString$$1;
    var v242 = v440 + "</td></tr>\n";
    JAM.call(v241.write, v241, [v242], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v441 = arrayOfItems.length;
    v243 = i$$9 < v441;
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
  var v624 = '<tr><td class="title">' + "Pattern:";
  var v607 = v624 + '</td><td class="title">';
  var v575 = v607 + "Times found:";
  var v524 = v575 + '</td><td class="title">';
  var v442 = v524 + "Percentage:";
  var v247 = v442 + "</td></tr>\n";
  JAM.call(v246.write, v246, [v247], JAM.policy.p17);
  var i$$10 = 0;
  var v443 = arrayOfItems$$1.length;
  var v256 = i$$10 < v443;
  for (;v256;) {
    var tempNumber = 0;
    var v444 = arrayOfItems$$1[i$$10];
    var v248 = JAM.call(v444.match, v444, [/\/[^\/]+\//], JAM.policy.p15);
    var matchExp$$1 = v248 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v445 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v250 = v445 != -1;
    if (v250) {
      var v249 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v249.length;
    }
    var percentage = 0;
    var v525 = originalLength + 1;
    var v608 = arrayOfItems$$1[i$$10];
    var v576 = JAM.call(v608.match, v608, [/\d+/], JAM.policy.p15);
    var v526 = parseFloat(v576);
    var v446 = v525 - v526;
    var v253 = v446 > 0;
    if (v253) {
      var v251 = 100 * tempNumber;
      var v447 = originalLength + 1;
      var v577 = arrayOfItems$$1[i$$10];
      var v527 = JAM.call(v577.match, v577, [/\d+/], JAM.policy.p15);
      var v448 = parseFloat(v527);
      var v252 = v447 - v448;
      percentage = v251 / v252;
    }
    var v254 = outputWindow.document;
    var v668 = arrayOfItems$$1[i$$10];
    var v659 = JAM.call(v668.match, v668, [/\([^\(]+\)\b/], JAM.policy.p15);
    var v649 = v659.toString();
    var v637 = JAM.call(v649.replace, v649, [/\(|\)/g, ""], JAM.policy.p16);
    var v625 = "<tr><td>" + v637;
    var v609 = v625 + "</td><td>";
    var v578 = v609 + tempNumber;
    var v528 = v578 + "</td><td>";
    var v529 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p11);
    var v449 = v528 + v529;
    var v255 = v449 + "</td></tr>\n";
    JAM.call(v254.write, v254, [v255], JAM.policy.p17);
    i$$10++;
    var v450 = arrayOfItems$$1.length;
    v256 = i$$10 < v450;
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
  var v451 = sequence$$17.length;
  var v264 = v451 > 0;
  for (;v264;) {
    maxNum$$1 = sequence$$17.length;
    var v452 = Math.random();
    var v258 = v452 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v258], JAM.policy.p15);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p15);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v259 = randNum$$1 + 1;
    var v260 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v259, v260], JAM.policy.p16);
    sequence$$17 = tempString1 + tempString2;
    var v453 = tempSeq.length;
    var v263 = v453 == 60;
    if (v263) {
      var v261 = outputWindow.document;
      var v262 = tempSeq + "\n";
      JAM.call(v261.write, v261, [v262], JAM.policy.p17);
      tempSeq = "";
    }
    var v454 = sequence$$17.length;
    v264 = v454 > 0;
  }
  var v265 = outputWindow.document;
  var v266 = tempSeq + "\n";
  JAM.call(v265.write, v265, [v266], JAM.policy.p17);
  return true;
}
function dnaStats(theDocument) {
  JAM.startProfile('compute');

  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 5E5;
  var v455 = testScript();
  var v267 = v455 == false;
  if (v267) {
    return false;
  }
  var v638 = theDocument.forms;
  var v626 = v638[0];
  var v610 = v626.elements;
  var v579 = v610[0];
  var v530 = checkFormElement(v579);
  var v456 = v530 == false;
  var v532 = !v456;
  if (v532) {
    var v650 = theDocument.forms;
    var v639 = v650[0];
    var v627 = v639.elements;
    var v611 = v627[0];
    var v580 = v611.value;
    var v531 = JAM.call(checkSequenceLength, null, [v580, maxInput$$3], JAM.policy.p19);
    v456 = v531 == false;
  }
  var v268 = v456;
  if (v268) {
    return false;
  }
  var itemsToCheck = ["/g/ (g)1", "/a/ (a)1", "/t/ (t)1", "/c/ (c)1", "/n/ (n)1", "/u/ (u)1", "/r/ (r)1", "/y/ (y)1", "/s/ (s)1", "/w/ (w)1", "/k/ (k)1", "/m/ (m)1", "/b/ (b)1", "/d/ (d)1", "/h/ (h)1", "/v/ (v)1", "/g(?=g)/ (gg)2", "/g(?=a)/ (ga)2", "/g(?=t)/ (gt)2", "/g(?=c)/ (gc)2", "/g(?=n)/ (gn)2", "/a(?=g)/ (ag)2", "/a(?=a)/ (aa)2", "/a(?=t)/ (at)2", "/a(?=c)/ (ac)2", "/a(?=n)/ (an)2", "/t(?=g)/ (tg)2", "/t(?=a)/ (ta)2", "/t(?=t)/ (tt)2", "/t(?=c)/ (tc)2", "/t(?=n)/ (tn)2", "/c(?=g)/ (cg)2", 
  "/c(?=a)/ (ca)2", "/c(?=t)/ (ct)2", "/c(?=c)/ (cc)2", "/c(?=n)/ (cn)2", "/n(?=g)/ (ng)2", "/n(?=a)/ (na)2", "/n(?=t)/ (nt)2", "/n(?=c)/ (nc)2", "/n(?=n)/ (nn)2", "/g|c/ (g,c)1", "/a|t/ (a,t)1", "/r|y|s|w|k/ (r,y,s,w,k)1", "/b|h|d|v|n/ (b,h,d,v,n)1", "/r|y|s|w|k|m|b|d|h|v|n/ (r,y,s,w,k,m,b,d,h,v,n)1"];
  openWindow("DNA Stats");
  var v612 = theDocument.forms;
  var v581 = v612[0];
  var v533 = v581.elements;
  var v457 = v533[0];
  var v269 = v457.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v269);
  var i$$11 = 0;
  var v458 = arrayOfFasta$$1.length;
  var v275 = i$$11 < v458;
  for (;v275;) {
    var v270 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v270);
    var v271 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v271);
    newDna = removeNonDna(newDna);
    var v272 = outputWindow.document;
    var v273 = JAM.call(getInfoFromTitleAndSequence, null, [title$$9, newDna], JAM.policy.p19);
    JAM.call(v272.write, v272, [v273], JAM.policy.p17);
    JAM.call(writeSequenceStats, null, [newDna, itemsToCheck], JAM.policy.p19);
    var v274 = outputWindow.document;
    JAM.call(v274.write, v274, ["<br />\n<br />\n"], JAM.policy.p9);
    i$$11++;
    var v459 = arrayOfFasta$$1.length;
    v275 = i$$11 < v459;
  }
  closeWindow();

  JAM.stopProfile('compute');
  return true;
}
JAM.set(document, "onload", v2);
var v276 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9);
JAM.set(v276, "onclick", v3);
var v277 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9);
JAM.set(v277, "onclick", v4)

JAM.stopProfile('load');
