function v4() {
  var v531 = document.forms;
  var v458 = v531[0];
  var v276 = v458.elements;
  var v5 = v276[0];
  v5.value = " ";
  var v532 = document.forms;
  var v459 = v532[0];
  var v277 = v459.elements;
  var v6 = v277[4];
  v6.value = " ";
  return;
}
function v3() {
  try {
    dnaStats();
  } catch (e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7);
  }
  return;
}
function v2() {
  var v278 = document.main_form;
  var v8 = v278.main_submit;
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
  var v279 = arrayOfSequences.length;
  var v10 = v279 < 2;
  if (v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false;
  }
  var i$$1 = 0;
  var v280 = arrayOfTitles.length;
  var v12 = i$$1 < v280;
  for (;v12;) {
    var v579 = arrayOfTitles[i$$1];
    var v533 = JAM.call(v579.search, v579, [/\S/], JAM.policy.p15);
    var v460 = v533 == -1;
    var v535 = !v460;
    if (v535) {
      var v580 = arrayOfSequences[i$$1];
      var v534 = JAM.call(v580.search, v580, [/\S/], JAM.policy.p15);
      v460 = v534 == -1;
    }
    var v281 = v460;
    var v462 = !v281;
    if (v462) {
      var v536 = arrayOfSequences[i$$1];
      var v461 = v536.length;
      v281 = v461 != lengthOfAlign;
    }
    var v11 = v281;
    if (v11) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$1++;
    var v282 = arrayOfTitles.length;
    v12 = i$$1 < v282;
  }
  return true;
}
function checkCodonTable(codonTable) {
  var v610 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p15);
  var v581 = v610 == -1;
  var v612 = !v581;
  if (v612) {
    var v611 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p15);
    v581 = v611 == -1;
  }
  var v537 = v581;
  var v583 = !v537;
  if (v583) {
    var v582 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p15);
    v537 = v582 == -1;
  }
  var v463 = v537;
  var v539 = !v463;
  if (v539) {
    var v538 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p15);
    v463 = v538 == -1;
  }
  var v283 = v463;
  var v465 = !v283;
  if (v465) {
    var v464 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p15);
    v283 = v464 == -1;
  }
  var v13 = v283;
  if (v13) {
    alert("The codon table has been entered incorrectly.");
    return false;
  }
  return true;
}
function checkFormElement(formElement) {
  var v466 = formElement.value;
  var v284 = JAM.call(v466.search, v466, [/\S/], JAM.policy.p15);
  var v14 = v284 == -1;
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
  var v285 = arrayOfPatterns.length;
  var v17 = z$$2 < v285;
  for (;v17;) {
    var v467 = arrayOfPatterns[z$$2];
    var v286 = JAM.call(v467.search, v467, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p15);
    var v15 = v286 == -1;
    if (v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    var v468 = arrayOfPatterns[z$$2];
    var v287 = moreExpressionCheck(v468);
    var v16 = v287 == false;
    if (v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false;
    }
    z$$2 = z$$2 + 1;
    var v288 = arrayOfPatterns.length;
    v17 = z$$2 < v288;
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v289 = arrayOfPatterns.length;
  var v23 = j < v289;
  for (;v23;) {
    var v469 = arrayOfPatterns[j];
    var v290 = JAM.call(v469.match, v469, [/\/.+\//], JAM.policy.p15);
    var v20 = v290 + "gi";
    if (JAM.isEval(eval)) {
      var v695 = eval("introspect(JAM.policy.pFull) { " + v20 + " }")
    } else {
      var v695 = JAM.call(eval, null, [v20])
    }
    geneticCodeMatchExp[j] = v695;
    var v291 = arrayOfPatterns[j];
    var v21 = JAM.call(v291.match, v291, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v696 = v21.toString();
    geneticCodeMatchResult[j] = v696;
    var v22 = geneticCodeMatchResult[j];
    var v697 = JAM.call(v22.replace, v22, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult[j] = v697;
    j++;
    var v292 = arrayOfPatterns.length;
    v23 = j < v292;
  }
  var i$$2 = 0;
  var v470 = testSequence.length;
  var v293 = v470 - 3;
  var v30 = i$$2 <= v293;
  for (;v30;) {
    var v24 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v24], JAM.policy.p16);
    j = 0;
    var v294 = geneticCodeMatchExp.length;
    var v28 = j < v294;
    for (;v28;) {
      var v471 = geneticCodeMatchExp[j];
      var v295 = JAM.call(codon.search, codon, [v471], JAM.policy.p17);
      var v27 = v295 != -1;
      if (v27) {
        var v26 = oneMatch == true;
        if (v26) {
          var v296 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v25 = v296 + ".";
          alert(v25);
          return false;
        }
        oneMatch = true;
      }
      j++;
      var v297 = geneticCodeMatchExp.length;
      v28 = j < v297;
    }
    var v29 = oneMatch == false;
    if (v29) {
      alert("The genetic code expressions are missing a codon.");
      return false;
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v472 = testSequence.length;
    var v298 = v472 - 3;
    v30 = i$$2 <= v298;
  }
  return true;
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v299 = arrayOfPatterns$$1.length;
  var v32 = z$$3 < v299;
  for (;v32;) {
    var v473 = arrayOfPatterns$$1[z$$3];
    var v300 = JAM.call(v473.search, v473, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p15);
    var v31 = v300 != -1;
    if (v31) {
      alert("One or more groups have been entered incorrectly.");
      return false;
    }
    z$$3 = z$$3 + 1;
    var v301 = arrayOfPatterns$$1.length;
    v32 = z$$3 < v301;
  }
  var i$$3 = 0;
  var v302 = arrayOfPatterns$$1.length;
  var v36 = i$$3 < v302;
  for (;v36;) {
    var v474 = arrayOfPatterns$$1[i$$3];
    var v303 = "[" + v474;
    var v33 = v303 + "]";
    var re = new RegExp(v33, "gi");
    var j$$1 = i$$3 + 1;
    var v304 = arrayOfPatterns$$1.length;
    var v35 = j$$1 < v304;
    for (;v35;) {
      var v475 = arrayOfPatterns$$1[j$$1];
      var v305 = JAM.call(v475.search, v475, [re], JAM.policy.p17);
      var v34 = v305 != -1;
      if (v34) {
        alert("The same amino acid is in more than one similarity group.");
        return false;
      }
      j$$1++;
      var v306 = arrayOfPatterns$$1.length;
      v35 = j$$1 < v306;
    }
    i$$3++;
    var v307 = arrayOfPatterns$$1.length;
    v36 = i$$3 < v307;
  }
  return true;
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v308 = arrayOfPatterns$$2.length;
  var v39 = z$$4 < v308;
  for (;v39;) {
    var v476 = arrayOfPatterns$$2[z$$4];
    var v309 = JAM.call(v476.search, v476, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p15);
    var v37 = v309 == -1;
    if (v37) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    var v477 = arrayOfPatterns$$2[z$$4];
    var v310 = moreExpressionCheck(v477);
    var v38 = v310 == false;
    if (v38) {
      alert("One or more patterns have been entered incorrectly.");
      return false;
    }
    z$$4 = z$$4 + 1;
    var v311 = arrayOfPatterns$$2.length;
    v39 = z$$4 < v311;
  }
  return true;
}
function checkSequenceLength(text$$7, maxInput) {
  var v540 = getSequenceFromFasta(text$$7);
  var v478 = JAM.call(v540.replace, v540, [/[^A-Za-z]/g, ""], JAM.policy.p16);
  var v312 = v478.length;
  var v41 = v312 > maxInput;
  if (v41) {
    var v313 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v40 = v313 + " characters.";
    alert(v40);
    return false;
  } else {
    return true;
  }
  return;
}
function checkTextLength(text$$8, maxInput$$1) {
  var v314 = text$$8.length;
  var v43 = v314 > maxInput$$1;
  if (v43) {
    var v315 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v42 = v315 + " characters.";
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
  JAM.call(v44.write, v44, ["</form>"], JAM.policy.p11);
  return true;
}
function closePre() {
  var v45 = outputWindow.document;
  JAM.call(v45.write, v45, ["</div>"], JAM.policy.p11);
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</pre>\n"], JAM.policy.p11);
  return;
}
function closeTextArea() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</textarea>"], JAM.policy.p11);
  return true;
}
function closeWindow() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</body>\n</html>\n"], JAM.policy.p11);
  outputWindow.status = "Done.";
  var v49 = outputWindow.document;
  v49.close();
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
  var v316 = alignArray.length;
  var v50 = v316 < 3;
  if (v50) {
    alert("There is a problem with the alignment format.");
    return false;
  }
  var i$$4 = 1;
  var v317 = alignArray.length;
  var v52 = i$$4 < v317;
  for (;v52;) {
    var v479 = alignArray[i$$4];
    var v318 = JAM.call(v479.search, v479, [/[^\s]+\s/], JAM.policy.p15);
    var v51 = v318 == -1;
    if (v51) {
      alert("There is a problem with the alignment format.");
      return false;
    }
    i$$4++;
    var v319 = alignArray.length;
    v52 = i$$4 < v319;
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
  var v320 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v55 = v320 != -1;
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
  var v321 = sequence$$2.length;
  var v56 = "&gt;results for " + v321;
  var stringToReturn = v56 + " residue sequence ";
  var v322 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p15);
  var v58 = v322 != -1;
  if (v58) {
    var v323 = stringToReturn + '"';
    var v57 = v323 + fastaSequenceTitle;
    stringToReturn = v57 + '"';
  }
  var v324 = stringToReturn + ' starting "';
  var v325 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v59 = v324 + v325;
  stringToReturn = v59 + '"';
  return stringToReturn + "\n";
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v326 = sequenceOne.length;
  var v60 = "Search results for " + v326;
  var stringToReturn$$1 = v60 + " residue sequence ";
  var v327 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p15);
  var v62 = v327 != -1;
  if (v62) {
    var v328 = stringToReturn$$1 + '"';
    var v61 = v328 + fastaSequenceTitleOne;
    stringToReturn$$1 = v61 + '"';
  }
  var v329 = stringToReturn$$1 + ' starting "';
  var v330 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v63 = v329 + v330;
  stringToReturn$$1 = v63 + '"\n';
  var v331 = stringToReturn$$1 + "and ";
  var v332 = sequenceTwo.length;
  var v64 = v331 + v332;
  stringToReturn$$1 = v64 + " residue sequence ";
  var v333 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p15);
  var v66 = v333 != -1;
  if (v66) {
    var v334 = stringToReturn$$1 + '"';
    var v65 = v334 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v65 + '"';
  }
  var v335 = stringToReturn$$1 + ' starting "';
  var v336 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v67 = v335 + v336;
  stringToReturn$$1 = v67 + '"';
  var v68 = '<div class="info">' + stringToReturn$$1;
  return v68 + "</div>\n";
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v69 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v69);
  var j$$2 = 0;
  var v337 = arrayOfPatterns$$3.length;
  var v71 = j$$2 < v337;
  for (;v71;) {
    var v480 = arrayOfPatterns$$3[j$$2];
    var v338 = JAM.call(v480.match, v480, [/\/.+\//], JAM.policy.p15);
    var v70 = v338 + "gi";
    if (JAM.isEval(eval)) {
      var v698 = eval("introspect(JAM.policy.pFull) { " + v70 + " }")
    } else {
      var v698 = JAM.call(eval, null, [v70])
    }
    geneticCodeMatchExp$$1[j$$2] = v698;
    j$$2++;
    var v339 = arrayOfPatterns$$3.length;
    v71 = j$$2 < v339;
  }
  return geneticCodeMatchExp$$1;
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v72 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v72);
  var j$$3 = 0;
  var v340 = arrayOfPatterns$$4.length;
  var v75 = j$$3 < v340;
  for (;v75;) {
    var v341 = arrayOfPatterns$$4[j$$3];
    var v73 = JAM.call(v341.match, v341, [/=[a-zA-Z\*]/], JAM.policy.p15);
    var v699 = v73.toString();
    geneticCodeMatchResult$$1[j$$3] = v699;
    var v74 = geneticCodeMatchResult$$1[j$$3];
    var v700 = JAM.call(v74.replace, v74, [/=/g, ""], JAM.policy.p16);
    geneticCodeMatchResult$$1[j$$3] = v700;
    j$$3++;
    var v342 = arrayOfPatterns$$4.length;
    v75 = j$$3 < v342;
  }
  return geneticCodeMatchResult$$1;
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v343 = sequence$$3.length;
  var v76 = "Results for " + v343;
  var stringToReturn$$2 = v76 + " residue sequence ";
  var v344 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p15);
  var v78 = v344 != -1;
  if (v78) {
    var v345 = stringToReturn$$2 + '"';
    var v77 = v345 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v77 + '"';
  }
  var v346 = stringToReturn$$2 + ' starting "';
  var v347 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v79 = v346 + v347;
  stringToReturn$$2 = v79 + '"';
  var v80 = '<div class="info">' + stringToReturn$$2;
  return v80 + "</div>\n";
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v481 = "Results for " + topology;
  var v348 = v481 + " ";
  var v349 = sequence$$4.length;
  var v81 = v348 + v349;
  var stringToReturn$$3 = v81 + " residue sequence ";
  var v350 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p15);
  var v83 = v350 != -1;
  if (v83) {
    var v351 = stringToReturn$$3 + '"';
    var v82 = v351 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v82 + '"';
  }
  var v352 = stringToReturn$$3 + ' starting "';
  var v353 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v84 = v352 + v353;
  stringToReturn$$3 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$3;
  return v85 + "</div>\n";
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v354 = sequenceOne$$1.length;
  var v86 = "Alignment results for " + v354;
  var stringToReturn$$4 = v86 + " residue sequence ";
  var v355 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p15);
  var v88 = v355 != -1;
  if (v88) {
    var v356 = stringToReturn$$4 + '"';
    var v87 = v356 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v87 + '"';
  }
  var v357 = stringToReturn$$4 + ' starting "';
  var v358 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v89 = v357 + v358;
  stringToReturn$$4 = v89 + '"\n';
  var v359 = stringToReturn$$4 + "and ";
  var v360 = sequenceTwo$$1.length;
  var v90 = v359 + v360;
  stringToReturn$$4 = v90 + " residue sequence ";
  var v361 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p15);
  var v92 = v361 != -1;
  if (v92) {
    var v362 = stringToReturn$$4 + '"';
    var v91 = v362 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v91 + '"';
  }
  var v363 = stringToReturn$$4 + ' starting "';
  var v364 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v93 = v363 + v364;
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
    var v365 = Math.random();
    var v366 = components.length;
    var v95 = v365 * v366;
    tempNum = JAM.call(Math.floor, Math, [v95], JAM.policy.p15);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p17);
    j$$4++;
    v96 = j$$4 < lengthOut;
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p11);
}
function getSequenceFromFasta(sequenceRecord) {
  var v367 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v97 = v367 != -1;
  if (v97) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p16);
  }
  return sequenceRecord;
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v368 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p15);
  var v99 = v368 != -1;
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
  var v673 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p15);
  var v666 = v673 != -1;
  var v675 = !v666;
  if (v675) {
    var v674 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p15);
    v666 = v674 != -1;
  }
  var v657 = v666;
  var v668 = !v657;
  if (v668) {
    var v667 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p15);
    v657 = v667 != -1;
  }
  var v648 = v657;
  var v659 = !v648;
  if (v659) {
    var v658 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p15);
    v648 = v658 != -1;
  }
  var v637 = v648;
  var v650 = !v637;
  if (v650) {
    var v649 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p15);
    v637 = v649 != -1;
  }
  var v625 = v637;
  var v639 = !v625;
  if (v639) {
    var v638 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p15);
    v625 = v638 != -1;
  }
  var v613 = v625;
  var v627 = !v613;
  if (v627) {
    var v626 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p15);
    v613 = v626 != -1;
  }
  var v584 = v613;
  var v615 = !v584;
  if (v615) {
    var v614 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p15);
    v584 = v614 != -1;
  }
  var v541 = v584;
  var v586 = !v541;
  if (v586) {
    var v585 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p15);
    v541 = v585 != -1;
  }
  var v482 = v541;
  var v543 = !v482;
  if (v543) {
    var v542 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p15);
    v482 = v542 != -1;
  }
  var v369 = v482;
  var v484 = !v369;
  if (v484) {
    var v483 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p15);
    v369 = v483 != -1;
  }
  var v100 = v369;
  if (v100) {
    return false;
  }
  return true;
}
function openForm() {
  var v101 = outputWindow.document;
  JAM.call(v101.write, v101, ['<form action="">\n'], JAM.policy.p11);
  return true;
}
function openPre() {
  var v102 = outputWindow.document;
  JAM.call(v102.write, v102, ["<pre>"], JAM.policy.p11);
  var v103 = outputWindow.document;
  JAM.call(v103.write, v103, ['<div class="pre">'], JAM.policy.p11);
  return;
}
function openTextArea() {
  var v104 = outputWindow.document;
  JAM.call(v104.write, v104, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p11);
  return true;
}
function openWindow() {
  var title$$5 = "DNA Stats";
  _openWindow(title$$5);
  return;
}
function _openWindow(title$$6) {
  var isColor = true;
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  outputWindow.focus();
  var v105 = outputWindow.document;
  var v544 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v485 = v544 + "<head>\n";
  var v370 = v485 + "<title>Sequence Manipulation Suite</title>\n";
  var v106 = v370 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v105.write, v105, [v106], JAM.policy.p17);
  if (isColor) {
    var v107 = outputWindow.document;
    var v688 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v684 = v688 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v680 = v684 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v676 = v680 + "div.info {font-weight: bold}\n";
    var v669 = v676 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v660 = v669 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v651 = v660 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v640 = v651 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v628 = v640 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v616 = v628 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v587 = v616 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v545 = v587 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v486 = v545 + "td.many {color: #000000}\n";
    var v371 = v486 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v108 = v371 + "</style>\n";
    JAM.call(v107.write, v107, [v108], JAM.policy.p17);
  } else {
    var v109 = outputWindow.document;
    var v692 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v689 = v692 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v685 = v689 + "div.title {display: none}\n";
    var v681 = v685 + "div.info {font-weight: bold}\n";
    var v677 = v681 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v670 = v677 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v661 = v670 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v652 = v661 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v641 = v652 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v629 = v641 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v617 = v629 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v588 = v617 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v546 = v588 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v487 = v546 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v372 = v487 + "img {display: none}\n";
    var v110 = v372 + "</style>\n";
    JAM.call(v109.write, v109, [v110], JAM.policy.p17);
  }
  var v111 = outputWindow.document;
  var v547 = "</head>\n" + '<body class="main">\n';
  var v488 = v547 + '<div class="title">';
  var v373 = v488 + title$$6;
  var v112 = v373 + " results</div>\n";
  JAM.call(v111.write, v111, [v112], JAM.policy.p17);
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
  var v113 = outputWindow.document;
  var v548 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v489 = v548 + "<head>\n";
  var v374 = v489 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v374 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v113.write, v113, [v114], JAM.policy.p17);
  if (isBackground) {
    var v115 = outputWindow.document;
    var v690 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v686 = v690 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v682 = v686 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v678 = v682 + "div.info {font-weight: bold}\n";
    var v671 = v678 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v662 = v671 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v653 = v662 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v642 = v653 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v630 = v642 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v618 = v630 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v589 = v618 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v549 = v589 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v490 = v549 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v375 = v490 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v116 = v375 + "</style>\n";
    JAM.call(v115.write, v115, [v116], JAM.policy.p17);
  } else {
    var v117 = outputWindow.document;
    var v694 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v693 = v694 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v691 = v693 + "div.title {display: none}\n";
    var v687 = v691 + "div.info {font-weight: bold}\n";
    var v683 = v687 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v679 = v683 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v672 = v679 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v663 = v672 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v654 = v663 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v643 = v654 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v631 = v643 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v619 = v631 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v590 = v619 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v550 = v590 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v491 = v550 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v376 = v491 + "img {display: none}\n";
    var v118 = v376 + "</style>\n";
    JAM.call(v117.write, v117, [v118], JAM.policy.p17);
  }
  var v119 = outputWindow.document;
  var v551 = "</head>\n" + '<body class="main">\n';
  var v492 = v551 + '<div class="title">';
  var v377 = v492 + title$$8;
  var v120 = v377 + " results</div>\n";
  JAM.call(v119.write, v119, [v120], JAM.policy.p17);
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
  var v378 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p15);
  var v121 = v378 != -1;
  if (v121) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p15);
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
  var v379 = testArray[0];
  var v125 = v379 != testString;
  if (v125) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false;
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v380 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p17);
  var v126 = v380 == -1;
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
  var v381 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9);
  var v129 = v381 != 2489.824;
  if (v129) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false;
  }
  var v382 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9);
  var v130 = v382 != 2489.8;
  if (v130) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false;
  }
  return true;
}
function verifyDigits(theNumber$$1) {
  var v383 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p15);
  var v131 = v383 == -1;
  if (v131) {
    alert("Please enter a number");
    return false;
  }
  return;
}
function verifyEmbl(emblFile) {
  var v591 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p15);
  var v552 = v591 == -1;
  var v593 = !v552;
  if (v593) {
    var v592 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p15);
    v552 = v592 == -1;
  }
  var v493 = v552;
  var v554 = !v493;
  if (v554) {
    var v553 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p15);
    v493 = v553 == -1;
  }
  var v384 = v493;
  var v495 = !v384;
  if (v495) {
    var v494 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p15);
    v384 = v494 == -1;
  }
  var v132 = v384;
  if (v132) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  return true;
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v385 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p15);
  var v133 = v385 == -1;
  if (v133) {
    alert("Please enter a number.");
    return false;
  }
  var v135 = theNumber$$2 > maxInput$$2;
  if (v135) {
    var v386 = "Please enter a number less than or equal to " + maxInput$$2;
    var v134 = v386 + ".";
    alert(v134);
    return false;
  }
  return;
}
function verifyDna(dnaSequence$$2) {
  var v387 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p15);
  var v136 = v387 != -1;
  if (v136) {
    alert("The sequence contains non-DNA characters, which will be omitted.");
  }
  return true;
}
function verifyProtein(proteinSequence) {
  var v388 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p15);
  var v137 = v388 != -1;
  if (v137) {
    alert("The sequence contains non-protein characters, which will be omitted.");
  }
  return true;
}
function verifyGenBank(genBankFile) {
  var v594 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p15);
  var v555 = v594 == -1;
  var v596 = !v555;
  if (v596) {
    var v595 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p15);
    v555 = v595 == -1;
  }
  var v496 = v555;
  var v557 = !v496;
  if (v557) {
    var v556 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p15);
    v496 = v556 == -1;
  }
  var v389 = v496;
  var v498 = !v389;
  if (v498) {
    var v497 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p15);
    v389 = v497 == -1;
  }
  var v138 = v389;
  if (v138) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  return true;
}
function verifyGenBankFeat(genBankFile$$1) {
  var v597 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p15);
  var v558 = v597 == -1;
  var v599 = !v558;
  if (v599) {
    var v598 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p15);
    v558 = v598 == -1;
  }
  var v499 = v558;
  var v560 = !v499;
  if (v560) {
    var v559 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p15);
    v499 = v559 == -1;
  }
  var v390 = v499;
  var v501 = !v390;
  if (v501) {
    var v500 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p15);
    v390 = v500 == -1;
  }
  var v139 = v390;
  if (v139) {
    alert("Please enter the contents of a GenBank file.");
    return false;
  }
  var v391 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p15);
  var v140 = v391 == -1;
  if (v140) {
    alert("The file has no defined features.");
    return false;
  }
  return true;
}
function verifyEmblFeat(emblFile$$1) {
  var v600 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p15);
  var v561 = v600 == -1;
  var v602 = !v561;
  if (v602) {
    var v601 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p15);
    v561 = v601 == -1;
  }
  var v502 = v561;
  var v563 = !v502;
  if (v563) {
    var v562 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p15);
    v502 = v562 == -1;
  }
  var v392 = v502;
  var v504 = !v392;
  if (v504) {
    var v503 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p15);
    v392 = v503 == -1;
  }
  var v141 = v392;
  if (v141) {
    alert("Please enter the contents of an EMBL file.");
    return false;
  }
  var v393 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p15);
  var v142 = v393 == -1;
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
    var v394 = basePerLine / groupSize;
    var v146 = j$$6 <= v394;
    for (;v146;) {
      var v145 = k < groupSize;
      for (;v145;) {
        var v395 = k + i$$5;
        var v144 = JAM.call(text$$10.charAt, text$$10, [v395], JAM.policy.p17);
        lineOfText = lineOfText + v144;
        k = k + 1;
        v145 = k < groupSize;
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6++;
      var v396 = basePerLine / groupSize;
      v146 = j$$6 <= v396;
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
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition);
  return true;
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v397 = adjustment < 0;
    if (v397) {
      v397 = adjusted >= 0;
    }
    var v150 = v397;
    if (v150) {
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
  var v181 = i$$6 < stopBase$$2;
  for (;v181;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v398 = basePerLine$$2 / groupSize$$2;
    var v157 = j$$7 <= v398;
    for (;v157;) {
      var v153 = k$$1 < groupSize$$2;
      for (;v153;) {
        var v399 = i$$6 + k$$1;
        var v151 = v399 >= stopBase$$2;
        if (v151) {
          break;
        }
        var v400 = k$$1 + i$$6;
        var v152 = JAM.call(text$$12.charAt, text$$12, [v400], JAM.policy.p17);
        lineOfText$$1 = lineOfText$$1 + v152;
        k$$1 = k$$1 + 1;
        v153 = k$$1 < groupSize$$2;
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v155 = numberPosition$$1 == "above";
      if (v155) {
        var v401 = adjustNumbering(i$$6, numberingAdjustment);
        var v154 = rightNum(v401, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v154;
      }
      var v156 = i$$6 >= stopBase$$2;
      if (v156) {
        break;
      }
      k$$1 = 0;
      j$$7++;
      var v402 = basePerLine$$2 / groupSize$$2;
      v157 = j$$7 <= v402;
    }
    var v180 = numberPosition$$1 == "left";
    if (v180) {
      var v158 = outputWindow.document;
      var v564 = adjustNumbering(lineNum, numberingAdjustment);
      var v505 = rightNum(v564, "", 8, tabIn$$3);
      var v403 = v505 + lineOfText$$1;
      var v159 = v403 + "\n";
      JAM.call(v158.write, v158, [v159], JAM.policy.p17);
      var v163 = strands$$1 == "two";
      if (v163) {
        var v160 = outputWindow.document;
        var v565 = adjustNumbering(lineNum, numberingAdjustment);
        var v506 = rightNum(v565, "", 8, tabIn$$3);
        var v507 = complement(lineOfText$$1);
        var v404 = v506 + v507;
        var v161 = v404 + "\n";
        JAM.call(v160.write, v160, [v161], JAM.policy.p17);
        var v162 = outputWindow.document;
        JAM.call(v162.write, v162, ["\n"], JAM.policy.p11);
      }
    } else {
      var v179 = numberPosition$$1 == "right";
      if (v179) {
        var v164 = outputWindow.document;
        var v508 = adjustNumbering(i$$6, numberingAdjustment);
        var v405 = lineOfText$$1 + v508;
        var v165 = v405 + "\n";
        JAM.call(v164.write, v164, [v165], JAM.policy.p17);
        var v169 = strands$$1 == "two";
        if (v169) {
          var v166 = outputWindow.document;
          var v509 = complement(lineOfText$$1);
          var v510 = adjustNumbering(i$$6, numberingAdjustment);
          var v406 = v509 + v510;
          var v167 = v406 + "\n";
          JAM.call(v166.write, v166, [v167], JAM.policy.p17);
          var v168 = outputWindow.document;
          JAM.call(v168.write, v168, ["\n"], JAM.policy.p11);
        }
      } else {
        var v178 = numberPosition$$1 == "above";
        if (v178) {
          var v170 = outputWindow.document;
          var v171 = aboveNum + "\n";
          JAM.call(v170.write, v170, [v171], JAM.policy.p17);
          var v172 = outputWindow.document;
          var v173 = lineOfText$$1 + "\n";
          JAM.call(v172.write, v172, [v173], JAM.policy.p17);
          var v177 = strands$$1 == "two";
          if (v177) {
            var v174 = outputWindow.document;
            var v407 = complement(lineOfText$$1);
            var v175 = v407 + "\n";
            JAM.call(v174.write, v174, [v175], JAM.policy.p17);
            var v176 = outputWindow.document;
            JAM.call(v176.write, v176, ["\n"], JAM.policy.p11);
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v181 = i$$6 < stopBase$$2;
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
  var v200 = i$$7 < stopBase$$3;
  for (;v200;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v408 = basePerLine$$3 / groupSize$$3;
    var v188 = j$$8 <= v408;
    for (;v188;) {
      var v184 = k$$2 < groupSize$$3;
      for (;v184;) {
        var v409 = i$$7 + k$$2;
        var v182 = v409 >= stopBase$$3;
        if (v182) {
          break;
        }
        var v410 = k$$2 + i$$7;
        var v183 = JAM.call(text$$13.charAt, text$$13, [v410], JAM.policy.p17);
        lineOfText$$2 = lineOfText$$2 + v183;
        k$$2 = k$$2 + 1;
        v184 = k$$2 < groupSize$$3;
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v186 = numberPosition$$2 == "above";
      if (v186) {
        var v185 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v185;
      }
      var v187 = i$$7 >= stopBase$$3;
      if (v187) {
        break;
      }
      k$$2 = 0;
      j$$8++;
      var v411 = basePerLine$$3 / groupSize$$3;
      v188 = j$$8 <= v411;
    }
    var v199 = numberPosition$$2 == "left";
    if (v199) {
      var v189 = outputWindow.document;
      var v511 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v412 = v511 + lineOfText$$2;
      var v190 = v412 + "\n";
      JAM.call(v189.write, v189, [v190], JAM.policy.p17);
    } else {
      var v198 = numberPosition$$2 == "right";
      if (v198) {
        var v191 = outputWindow.document;
        var v413 = lineOfText$$2 + i$$7;
        var v192 = v413 + "\n";
        JAM.call(v191.write, v191, [v192], JAM.policy.p17);
      } else {
        var v197 = numberPosition$$2 == "above";
        if (v197) {
          var v193 = outputWindow.document;
          var v194 = aboveNum$$1 + "\n";
          JAM.call(v193.write, v193, [v194], JAM.policy.p17);
          var v195 = outputWindow.document;
          var v196 = lineOfText$$2 + "\n";
          JAM.call(v195.write, v195, [v196], JAM.policy.p17);
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v200 = i$$7 < stopBase$$3;
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
  var v566 = sequence$$13.length;
  var v512 = v566 <= firstIndexToMutate;
  var v567 = !v512;
  if (v567) {
    v512 = lastIndexToMutate < 0;
  }
  var v414 = v512;
  var v513 = !v414;
  if (v513) {
    v414 = lastIndexToMutate <= firstIndexToMutate;
  }
  var v201 = v414;
  if (v201) {
    numMut = 0;
  }
  var i$$8 = 0;
  var v209 = i$$8 < numMut;
  for (;v209;) {
    maxNum = sequence$$13.length;
    var v415 = Math.random();
    var v202 = v415 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v202], JAM.policy.p15);
    var v416 = randNum < firstIndexToMutate;
    var v514 = !v416;
    if (v514) {
      v416 = randNum > lastIndexToMutate;
    }
    var v203 = v416;
    if (v203) {
      numMut++;
      i$$8++;
      v209 = i$$8 < numMut;
      continue;
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p15);
    needNewChar = true;
    for (;needNewChar;) {
      var v417 = Math.random();
      var v418 = components$$1.length;
      var v204 = v417 * v418;
      componentsIndex = JAM.call(Math.round, Math, [v204], JAM.policy.p15);
      var v419 = components$$1.length;
      var v205 = componentsIndex == v419;
      if (v205) {
        componentsIndex = 0;
      }
      var v420 = components$$1[componentsIndex];
      var v206 = v420 != currentChar;
      if (v206) {
        needNewChar = false;
      }
    }
    var v421 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v422 = components$$1[componentsIndex];
    var v207 = v421 + v422;
    var v423 = randNum + 1;
    var v424 = sequence$$13.length;
    var v208 = JAM.call(sequence$$13.substring, sequence$$13, [v423, v424], JAM.policy.p27);
    sequence$$13 = v207 + v208;
    i$$8++;
    v209 = i$$8 < numMut;
  }
  var v210 = outputWindow.document;
  var v211 = addReturns(sequence$$13);
  JAM.call(v210.write, v210, [v211], JAM.policy.p17);
  return true;
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v216 = j$$9 < lengthOut$$1;
  for (;v216;) {
    var v425 = Math.random();
    var v426 = components$$2.length;
    var v212 = v425 * v426;
    tempNum$$1 = JAM.call(Math.floor, Math, [v212], JAM.policy.p15);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v427 = sequence$$14.length;
    var v215 = v427 == 60;
    if (v215) {
      var v213 = outputWindow.document;
      var v214 = sequence$$14 + "\n";
      JAM.call(v213.write, v213, [v214], JAM.policy.p17);
      sequence$$14 = "";
    }
    j$$9++;
    v216 = j$$9 < lengthOut$$1;
  }
  var v217 = outputWindow.document;
  var v218 = sequence$$14 + "\n";
  JAM.call(v217.write, v217, [v218], JAM.policy.p17);
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
  var v222 = dnaConformation == "circular";
  if (v222) {
    var v219 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v219.length;
    var v568 = sequence$$15.length;
    var v515 = v568 - lookAhead;
    var v516 = sequence$$15.length;
    var v428 = JAM.call(sequence$$15.substring, sequence$$15, [v515, v516], JAM.policy.p27);
    var v220 = v428 + sequence$$15;
    var v221 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v220 + v221;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue;
  }
  var v223 = outputWindow.document;
  JAM.call(v223.write, v223, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v224 = outputWindow.document;
  var v569 = '<tr><td class="title" width="200px">' + "Site:";
  var v517 = v569 + '</td><td class="title">';
  var v429 = v517 + "Positions:";
  var v225 = v429 + "</td></tr>\n";
  JAM.call(v224.write, v224, [v225], JAM.policy.p17);
  var i$$9 = 0;
  var v430 = arrayOfItems.length;
  var v241 = i$$9 < v430;
  for (;v241;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v431 = arrayOfItems[i$$9];
    var v226 = JAM.call(v431.match, v431, [/\/.+\//], JAM.policy.p15);
    matchExp = v226 + "gi";
    matchPosition = 0;
    if (JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }");
    } else {
      matchExp = JAM.call(eval, null, [matchExp]);
    }
    var v570 = arrayOfItems[i$$9];
    var v518 = JAM.call(v570.match, v570, [/\)\D*\d+/], JAM.policy.p15);
    var v432 = v518.toString();
    var v227 = JAM.call(v432.replace, v432, [/\)\D*/, ""], JAM.policy.p16);
    cutDistance = parseFloat(v227);
    var v233 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    for (;v233;) {
      var v228 = matchExp.lastIndex;
      matchPosition = v228 - cutDistance;
      var v433 = matchPosition >= lowerLimit;
      if (v433) {
        v433 = matchPosition < upperLimit;
      }
      var v231 = v433;
      if (v231) {
        timesFound++;
        var v229 = tempString$$1 + ", ";
        var v434 = matchPosition - shiftValue;
        var v230 = v434 + 1;
        tempString$$1 = v229 + v230;
      }
      var v435 = matchExp.lastIndex;
      var v519 = RegExp.lastMatch;
      var v436 = v519.length;
      var v232 = v435 - v436;
      matchExp.lastIndex = v232 + 1;
      v233 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p17);
    }
    var v437 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p15);
    var v234 = v437 != -1;
    if (v234) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p16);
    }
    var v238 = timesFound == 0;
    if (v238) {
      backGroundClass = "none";
    } else {
      var v237 = timesFound == 1;
      if (v237) {
        backGroundClass = "one";
      } else {
        var v236 = timesFound == 2;
        if (v236) {
          backGroundClass = "two";
        } else {
          var v235 = timesFound == 3;
          if (v235) {
            backGroundClass = "three";
          } else {
            backGroundClass = "many";
          }
        }
      }
    }
    var v239 = outputWindow.document;
    var v644 = '<tr><td class="' + backGroundClass;
    var v632 = v644 + '">';
    var v664 = arrayOfItems[i$$9];
    var v655 = JAM.call(v664.match, v664, [/\([^\(]+\)/], JAM.policy.p15);
    var v645 = v655.toString();
    var v633 = JAM.call(v645.replace, v645, [/\(|\)/g, ""], JAM.policy.p16);
    var v620 = v632 + v633;
    var v603 = v620 + '</td><td class="';
    var v571 = v603 + backGroundClass;
    var v520 = v571 + '">';
    var v438 = v520 + tempString$$1;
    var v240 = v438 + "</td></tr>\n";
    JAM.call(v239.write, v239, [v240], JAM.policy.p17);
    timesFound = 0;
    i$$9++;
    var v439 = arrayOfItems.length;
    v241 = i$$9 < v439;
  }
  var v242 = outputWindow.document;
  JAM.call(v242.write, v242, ["</tbody></table>\n"], JAM.policy.p11);
  return true;
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v243 = outputWindow.document;
  JAM.call(v243.write, v243, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p11);
  var v244 = outputWindow.document;
  var v621 = '<tr><td class="title">' + "Pattern:";
  var v604 = v621 + '</td><td class="title">';
  var v572 = v604 + "Times found:";
  var v521 = v572 + '</td><td class="title">';
  var v440 = v521 + "Percentage:";
  var v245 = v440 + "</td></tr>\n";
  JAM.call(v244.write, v244, [v245], JAM.policy.p17);
  var i$$10 = 0;
  var v441 = arrayOfItems$$1.length;
  var v254 = i$$10 < v441;
  for (;v254;) {
    var tempNumber = 0;
    var v442 = arrayOfItems$$1[i$$10];
    var v246 = JAM.call(v442.match, v442, [/\/[^\/]+\//], JAM.policy.p15);
    var matchExp$$1 = v246 + "gi";
    if (JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }");
    } else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1]);
    }
    var v443 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p17);
    var v248 = v443 != -1;
    if (v248) {
      var v247 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p17);
      tempNumber = v247.length;
    }
    var percentage = 0;
    var v522 = originalLength + 1;
    var v605 = arrayOfItems$$1[i$$10];
    var v573 = JAM.call(v605.match, v605, [/\d+/], JAM.policy.p15);
    var v523 = parseFloat(v573);
    var v444 = v522 - v523;
    var v251 = v444 > 0;
    if (v251) {
      var v249 = 100 * tempNumber;
      var v445 = originalLength + 1;
      var v574 = arrayOfItems$$1[i$$10];
      var v524 = JAM.call(v574.match, v574, [/\d+/], JAM.policy.p15);
      var v446 = parseFloat(v524);
      var v250 = v445 - v446;
      percentage = v249 / v250;
    }
    var v252 = outputWindow.document;
    var v665 = arrayOfItems$$1[i$$10];
    var v656 = JAM.call(v665.match, v665, [/\([^\(]+\)\b/], JAM.policy.p15);
    var v646 = v656.toString();
    var v634 = JAM.call(v646.replace, v646, [/\(|\)/g, ""], JAM.policy.p16);
    var v622 = "<tr><td>" + v634;
    var v606 = v622 + "</td><td>";
    var v575 = v606 + tempNumber;
    var v525 = v575 + "</td><td>";
    var v526 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9);
    var v447 = v525 + v526;
    var v253 = v447 + "</td></tr>\n";
    JAM.call(v252.write, v252, [v253], JAM.policy.p17);
    i$$10++;
    var v448 = arrayOfItems$$1.length;
    v254 = i$$10 < v448;
  }
  var v255 = outputWindow.document;
  JAM.call(v255.write, v255, ["</tbody></table>\n"], JAM.policy.p11);
  return;
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v449 = sequence$$17.length;
  var v262 = v449 > 0;
  for (;v262;) {
    maxNum$$1 = sequence$$17.length;
    var v450 = Math.random();
    var v256 = v450 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v256], JAM.policy.p15);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p15);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v257 = randNum$$1 + 1;
    var v258 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v257, v258], JAM.policy.p16);
    sequence$$17 = tempString1 + tempString2;
    var v451 = tempSeq.length;
    var v261 = v451 == 60;
    if (v261) {
      var v259 = outputWindow.document;
      var v260 = tempSeq + "\n";
      JAM.call(v259.write, v259, [v260], JAM.policy.p17);
      tempSeq = "";
    }
    var v452 = sequence$$17.length;
    v262 = v452 > 0;
  }
  var v263 = outputWindow.document;
  var v264 = tempSeq + "\n";
  JAM.call(v263.write, v263, [v264], JAM.policy.p17);
  return true;
}
function dnaStats() {
  var theDocument = document;
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 5E5;
  var v453 = testScript();
  var v265 = v453 == false;
  if (v265) {
    return;
  }
  var v635 = theDocument.forms;
  var v623 = v635[0];
  var v607 = v623.elements;
  var v576 = v607[0];
  var v527 = checkFormElement(v576);
  var v454 = v527 == false;
  var v529 = !v454;
  if (v529) {
    var v647 = theDocument.forms;
    var v636 = v647[0];
    var v624 = v636.elements;
    var v608 = v624[0];
    var v577 = v608.value;
    var v528 = checkSequenceLength(v577, maxInput$$3);
    v454 = v528 == false;
  }
  var v266 = v454;
  if (v266) {
    return;
  }
  var itemsToCheck = ["/g/ (g)1", "/a/ (a)1", "/t/ (t)1", "/c/ (c)1", "/n/ (n)1", "/u/ (u)1", "/r/ (r)1", "/y/ (y)1", "/s/ (s)1", "/w/ (w)1", "/k/ (k)1", "/m/ (m)1", "/b/ (b)1", "/d/ (d)1", "/h/ (h)1", "/v/ (v)1", "/g(?=g)/ (gg)2", "/g(?=a)/ (ga)2", "/g(?=t)/ (gt)2", "/g(?=c)/ (gc)2", "/g(?=n)/ (gn)2", "/a(?=g)/ (ag)2", "/a(?=a)/ (aa)2", "/a(?=t)/ (at)2", "/a(?=c)/ (ac)2", "/a(?=n)/ (an)2", "/t(?=g)/ (tg)2", "/t(?=a)/ (ta)2", "/t(?=t)/ (tt)2", "/t(?=c)/ (tc)2", "/t(?=n)/ (tn)2", "/c(?=g)/ (cg)2", 
  "/c(?=a)/ (ca)2", "/c(?=t)/ (ct)2", "/c(?=c)/ (cc)2", "/c(?=n)/ (cn)2", "/n(?=g)/ (ng)2", "/n(?=a)/ (na)2", "/n(?=t)/ (nt)2", "/n(?=c)/ (nc)2", "/n(?=n)/ (nn)2", "/g|c/ (g,c)1", "/a|t/ (a,t)1", "/r|y|s|w|k/ (r,y,s,w,k)1", "/b|h|d|v|n/ (b,h,d,v,n)1", "/r|y|s|w|k|m|b|d|h|v|n/ (r,y,s,w,k,m,b,d,h,v,n)1"];
  openWindow();
  var v609 = theDocument.forms;
  var v578 = v609[0];
  var v530 = v578.elements;
  var v455 = v530[0];
  var v267 = v455.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v267);
  var i$$11 = 0;
  var v456 = arrayOfFasta$$1.length;
  var v273 = i$$11 < v456;
  for (;v273;) {
    var v268 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v268);
    var v269 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v269);
    newDna = removeNonDna(newDna);
    var v270 = outputWindow.document;
    var v271 = getInfoFromTitleAndSequence(title$$9, newDna);
    JAM.call(v270.write, v270, [v271], JAM.policy.p17);
    writeSequenceStats(newDna, itemsToCheck);
    var v272 = outputWindow.document;
    JAM.call(v272.write, v272, ["<br />\n<br />\n"], JAM.policy.p11);
    i$$11++;
    var v457 = arrayOfFasta$$1.length;
    v273 = i$$11 < v457;
  }
  closeWindow();
  return;
}
JAM.set(document, "onload", v2);
var v274 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p11);
JAM.set(v274, "onclick", v3);
var v275 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p11);
JAM.set(v275, "onclick", v4)
