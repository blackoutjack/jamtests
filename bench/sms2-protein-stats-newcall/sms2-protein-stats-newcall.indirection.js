function v4() {
  var v545 = document.forms;
  var v469 = v545[0];
  var v286 = v469.elements;
  var v5 = v286[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    proteinStats(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v287 = document.main_form;
  var v7 = v287.main_submit;
  JAM.call(v7.focus, v7, [], JAM.policy.p13);
  return
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$12, s$$2) {
    return p1 + "\n"
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p13);
  return sequence
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v8 = arrayOfSequences[0];
  var lengthOfAlign = v8.length;
  var v288 = arrayOfSequences.length;
  var v9 = v288 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v289 = arrayOfTitles.length;
  var v11 = i$$1 < v289;
  for(;v11;) {
    var v546 = arrayOfTitles[i$$1];
    var v470 = JAM.call(v546.search, v546, [/\S/], JAM.policy.p13);
    var v290 = v470 == -1;
    var v472 = !v290;
    if(v472) {
      var v593 = arrayOfSequences[i$$1];
      var v547 = JAM.call(v593.search, v593, [/\S/], JAM.policy.p13);
      var v471 = v547 == -1;
      var v549 = !v471;
      if(v549) {
        var v594 = arrayOfSequences[i$$1];
        var v548 = v594.length;
        v471 = v548 != lengthOfAlign
      }
      v290 = v471
    }
    var v10 = v290;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v291 = arrayOfTitles.length;
    v11 = i$$1 < v291
  }
  return true
}
function checkCodonTable(codonTable) {
  var v473 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p13);
  var v292 = v473 == -1;
  var v475 = !v292;
  if(v475) {
    var v550 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p13);
    var v474 = v550 == -1;
    var v552 = !v474;
    if(v552) {
      var v595 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p13);
      var v551 = v595 == -1;
      var v597 = !v551;
      if(v597) {
        var v624 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p13);
        var v596 = v624 == -1;
        var v626 = !v596;
        if(v626) {
          var v625 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p13);
          v596 = v625 == -1
        }
        v551 = v596
      }
      v474 = v551
    }
    v292 = v474
  }
  var v12 = v292;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v476 = formElement.value;
  var v293 = JAM.call(v476.search, v476, [/\S/], JAM.policy.p13);
  var v13 = v293 == -1;
  if(v13) {
    alert("Please enter some text.");
    return false
  }
  return true
}
function checkGeneticCode(arrayOfPatterns) {
  var z$$2 = 0;
  var codon = "";
  var oneMatch = false;
  var testSequence = "gggggaggtggcgaggaagatgacgtggtagttgtcgcggcagctgccaggagaagtagcaagaaaaataacatgataattatcacgacaactacctggtgatgttgctagtaatattacttgttatttttctcgtcatcttcccggcgacgtcgccagcaacatcacctgctacttctcccgccacctccc";
  var v294 = arrayOfPatterns.length;
  var v16 = z$$2 < v294;
  for(;v16;) {
    var v477 = arrayOfPatterns[z$$2];
    var v295 = JAM.call(v477.search, v477, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p13);
    var v14 = v295 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v478 = arrayOfPatterns[z$$2];
    var v296 = moreExpressionCheck(v478);
    var v15 = v296 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v297 = arrayOfPatterns.length;
    v16 = z$$2 < v297
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v298 = arrayOfPatterns.length;
  var v25 = j < v298;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    var v553 = arrayOfPatterns[j];
    var v479 = JAM.call(v553.match, v553, [/\/.+\//], JAM.policy.p13);
    var v299 = v479 + "gi";
    if(JAM.isEval(eval)) {
      var v709 = eval("introspect(JAM.policy.pFull) { " + v299 + " }")
    }else {
      var v709 = JAM.call(eval, null, [v299])
    }
    v19[v20] = v709;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    var v480 = arrayOfPatterns[j];
    var v300 = JAM.call(v480.match, v480, [/=[a-zA-Z\*]/], JAM.policy.p13);
    var v710 = JAM.call(v300.toString, v300, [], JAM.policy.p13);
    v21[v22] = v710;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    var v301 = geneticCodeMatchResult[j];
    var v711 = JAM.call(v301.replace, v301, [/=/g, ""], JAM.policy.p13);
    v23[v24] = v711;
    j = j + 1;
    var v302 = arrayOfPatterns.length;
    v25 = j < v302
  }
  var i$$2 = 0;
  var v481 = testSequence.length;
  var v303 = v481 - 3;
  var v32 = i$$2 <= v303;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v26], JAM.policy.p13);
    j = 0;
    var v304 = geneticCodeMatchExp.length;
    var v30 = j < v304;
    for(;v30;) {
      var v482 = geneticCodeMatchExp[j];
      var v305 = JAM.call(codon.search, codon, [v482], JAM.policy.p23);
      var v29 = v305 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v306 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v306 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v307 = geneticCodeMatchExp.length;
      v30 = j < v307
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v483 = testSequence.length;
    var v308 = v483 - 3;
    v32 = i$$2 <= v308
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v309 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v309;
  for(;v34;) {
    var v484 = arrayOfPatterns$$1[z$$3];
    var v310 = JAM.call(v484.search, v484, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p13);
    var v33 = v310 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v311 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v311
  }
  var i$$3 = 0;
  var v312 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v312;
  for(;v38;) {
    var v485 = arrayOfPatterns$$1[i$$3];
    var v313 = "[" + v485;
    var v35 = v313 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v314 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v314;
    for(;v37;) {
      var v486 = arrayOfPatterns$$1[j$$1];
      var v315 = JAM.call(v486.search, v486, [re], JAM.policy.p23);
      var v36 = v315 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v316 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v316
    }
    i$$3 = i$$3 + 1;
    var v317 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v317
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v318 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v318;
  for(;v41;) {
    var v487 = arrayOfPatterns$$2[z$$4];
    var v319 = JAM.call(v487.search, v487, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p13);
    var v39 = v319 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v488 = arrayOfPatterns$$2[z$$4];
    var v320 = moreExpressionCheck(v488);
    var v40 = v320 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v321 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v321
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v554 = getSequenceFromFasta(text$$7);
  var v489 = JAM.call(v554.replace, v554, [/[^A-Za-z]/g, ""], JAM.policy.p13);
  var v322 = v489.length;
  var v43 = v322 > maxInput;
  if(v43) {
    var v323 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v323 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v324 = text$$8.length;
  var v45 = v324 > maxInput$$1;
  if(v45) {
    var v325 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v325 + " characters.";
    alert(v44);
    return false
  }else {
    return true
  }
  return
}
function complement(dnaSequence) {
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p13);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p13);
  return dnaSequence
}
function closeForm() {
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</form>"], JAM.policy.p14);
  return true
}
function closePre() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</div>"], JAM.policy.p14);
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</pre>\n"], JAM.policy.p14);
  return
}
function closeTextArea() {
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</textarea>"], JAM.policy.p14);
  return true
}
function closeWindow() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</body>\n</html>\n"], JAM.policy.p14);
  outputWindow.status = "Done.";
  var v51 = outputWindow.document;
  JAM.call(v51.close, v51, [], JAM.policy.p13);
  return true
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = JAM.call(sequence$$1.toLowerCase, sequence$$1, [], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p13);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p13);
  return sequence$$1
}
function earlyCheckAlign(alignArray) {
  var v326 = alignArray.length;
  var v52 = v326 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v327 = alignArray.length;
  var v54 = i$$4 < v327;
  for(;v54;) {
    var v490 = alignArray[i$$4];
    var v328 = JAM.call(v490.search, v490, [/[^\s]+\s/], JAM.policy.p13);
    var v53 = v328 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v329 = alignArray.length;
    v54 = i$$4 < v329
  }
  return true
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p13);
  return alignSeq
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p13);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p13);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p13);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p13)
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v330 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v57 = v330 != -1;
  if(v57) {
    var v56 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p23);
    for(;v56;) {
      var v55 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v55], JAM.policy.p23);
      v56 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p23)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v331 = sequence$$2.length;
  var v58 = "&gt;results for " + v331;
  var stringToReturn = v58 + " residue sequence ";
  var v332 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p13);
  var v60 = v332 != -1;
  if(v60) {
    var v333 = stringToReturn + '"';
    var v59 = v333 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v334 = stringToReturn + ' starting "';
  var v335 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v61 = v334 + v335;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v336 = sequenceOne.length;
  var v62 = "Search results for " + v336;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v337 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p13);
  var v64 = v337 != -1;
  if(v64) {
    var v338 = stringToReturn$$1 + '"';
    var v63 = v338 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v339 = stringToReturn$$1 + ' starting "';
  var v340 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v65 = v339 + v340;
  stringToReturn$$1 = v65 + '"\n';
  var v341 = stringToReturn$$1 + "and ";
  var v342 = sequenceTwo.length;
  var v66 = v341 + v342;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v343 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p13);
  var v68 = v343 != -1;
  if(v68) {
    var v344 = stringToReturn$$1 + '"';
    var v67 = v344 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v345 = stringToReturn$$1 + ' starting "';
  var v346 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v69 = v345 + v346;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v347 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v347;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    var v555 = arrayOfPatterns$$3[j$$2];
    var v491 = JAM.call(v555.match, v555, [/\/.+\//], JAM.policy.p13);
    var v348 = v491 + "gi";
    if(JAM.isEval(eval)) {
      var v712 = eval("introspect(JAM.policy.pFull) { " + v348 + " }")
    }else {
      var v712 = JAM.call(eval, null, [v348])
    }
    v72[v73] = v712;
    j$$2 = j$$2 + 1;
    var v349 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v349
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v350 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v350;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    var v492 = arrayOfPatterns$$4[j$$3];
    var v351 = JAM.call(v492.match, v492, [/=[a-zA-Z\*]/], JAM.policy.p13);
    var v713 = JAM.call(v351.toString, v351, [], JAM.policy.p13);
    v76[v77] = v713;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    var v352 = geneticCodeMatchResult$$1[j$$3];
    var v714 = JAM.call(v352.replace, v352, [/=/g, ""], JAM.policy.p13);
    v78[v79] = v714;
    j$$3 = j$$3 + 1;
    var v353 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v353
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v354 = sequence$$3.length;
  var v81 = "Results for " + v354;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v355 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p13);
  var v83 = v355 != -1;
  if(v83) {
    var v356 = stringToReturn$$2 + '"';
    var v82 = v356 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v357 = stringToReturn$$2 + ' starting "';
  var v358 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v84 = v357 + v358;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v493 = "Results for " + topology;
  var v359 = v493 + " ";
  var v360 = sequence$$4.length;
  var v86 = v359 + v360;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v361 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p13);
  var v88 = v361 != -1;
  if(v88) {
    var v362 = stringToReturn$$3 + '"';
    var v87 = v362 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v363 = stringToReturn$$3 + ' starting "';
  var v364 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v89 = v363 + v364;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v365 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v365;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v366 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p13);
  var v93 = v366 != -1;
  if(v93) {
    var v367 = stringToReturn$$4 + '"';
    var v92 = v367 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v368 = stringToReturn$$4 + ' starting "';
  var v369 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v94 = v368 + v369;
  stringToReturn$$4 = v94 + '"\n';
  var v370 = stringToReturn$$4 + "and ";
  var v371 = sequenceTwo$$1.length;
  var v95 = v370 + v371;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v372 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p13);
  var v97 = v372 != -1;
  if(v97) {
    var v373 = stringToReturn$$4 + '"';
    var v96 = v373 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v374 = stringToReturn$$4 + ' starting "';
  var v375 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v98 = v374 + v375;
  stringToReturn$$4 = v98 + '"';
  var v99 = '<div class="info">' + stringToReturn$$4;
  return v99 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v101 = j$$4 < lengthOut;
  for(;v101;) {
    var v376 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v377 = components.length;
    var v100 = v376 * v377;
    tempNum = JAM.call(Math.floor, Math, [v100], JAM.policy.p13);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p23);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p14)
}
function getSequenceFromFasta(sequenceRecord) {
  var v378 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v102 = v378 != -1;
  if(v102) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p13)
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v379 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v104 = v379 != -1;
  if(v104) {
    var v103 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p13);
    fastaTitle = JAM.call(v103.toString, v103, [], JAM.policy.p13);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p13);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p13);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p13)
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v494 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p13);
  var v380 = v494 != -1;
  var v496 = !v380;
  if(v496) {
    var v556 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p13);
    var v495 = v556 != -1;
    var v558 = !v495;
    if(v558) {
      var v598 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p13);
      var v557 = v598 != -1;
      var v600 = !v557;
      if(v600) {
        var v627 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p13);
        var v599 = v627 != -1;
        var v629 = !v599;
        if(v629) {
          var v639 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p13);
          var v628 = v639 != -1;
          var v641 = !v628;
          if(v641) {
            var v651 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p13);
            var v640 = v651 != -1;
            var v653 = !v640;
            if(v653) {
              var v662 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p13);
              var v652 = v662 != -1;
              var v664 = !v652;
              if(v664) {
                var v671 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p13);
                var v663 = v671 != -1;
                var v673 = !v663;
                if(v673) {
                  var v680 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p13);
                  var v672 = v680 != -1;
                  var v682 = !v672;
                  if(v682) {
                    var v687 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p13);
                    var v681 = v687 != -1;
                    var v689 = !v681;
                    if(v689) {
                      var v688 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p13);
                      v681 = v688 != -1
                    }
                    v672 = v681
                  }
                  v663 = v672
                }
                v652 = v663
              }
              v640 = v652
            }
            v628 = v640
          }
          v599 = v628
        }
        v557 = v599
      }
      v495 = v557
    }
    v380 = v495
  }
  var v105 = v380;
  if(v105) {
    return false
  }
  return true
}
function openForm() {
  var v106 = outputWindow.document;
  JAM.call(v106.write, v106, ['<form action="">\n'], JAM.policy.p14);
  return true
}
function openPre() {
  var v107 = outputWindow.document;
  JAM.call(v107.write, v107, ["<pre>"], JAM.policy.p14);
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ['<div class="pre">'], JAM.policy.p14);
  return
}
function openTextArea() {
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p14);
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p13);
  var v110 = outputWindow.document;
  var v559 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v497 = v559 + "<head>\n";
  var v381 = v497 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v381 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v110.write, v110, [v111], JAM.policy.p23);
  if(isColor) {
    var v112 = outputWindow.document;
    var v702 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v698 = v702 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v694 = v698 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v690 = v694 + "div.info {font-weight: bold}\n";
    var v683 = v690 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v674 = v683 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v665 = v674 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v654 = v665 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v642 = v654 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v630 = v642 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v601 = v630 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v560 = v601 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v498 = v560 + "td.many {color: #000000}\n";
    var v382 = v498 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v382 + "</style>\n";
    JAM.call(v112.write, v112, [v113], JAM.policy.p23)
  }else {
    var v114 = outputWindow.document;
    var v706 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v703 = v706 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v699 = v703 + "div.title {display: none}\n";
    var v695 = v699 + "div.info {font-weight: bold}\n";
    var v691 = v695 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v684 = v691 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v675 = v684 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v666 = v675 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v655 = v666 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v643 = v655 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v631 = v643 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v602 = v631 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v561 = v602 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v499 = v561 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v383 = v499 + "img {display: none}\n";
    var v115 = v383 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p23)
  }
  var v116 = outputWindow.document;
  var v562 = "</head>\n" + '<body class="main">\n';
  var v500 = v562 + '<div class="title">';
  var v384 = v500 + title$$6;
  var v117 = v384 + " results</div>\n";
  JAM.call(v116.write, v116, [v117], JAM.policy.p23);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p13);
  var v118 = outputWindow.document;
  var v563 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v501 = v563 + "<head>\n";
  var v385 = v501 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v385 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v118.write, v118, [v119], JAM.policy.p23);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v704 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v700 = v704 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v696 = v700 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v692 = v696 + "div.info {font-weight: bold}\n";
    var v685 = v692 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v676 = v685 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v667 = v676 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v656 = v667 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v644 = v656 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v632 = v644 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v603 = v632 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v564 = v603 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v502 = v564 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v386 = v502 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v386 + "</style>\n";
    JAM.call(v120.write, v120, [v121], JAM.policy.p23)
  }else {
    var v122 = outputWindow.document;
    var v708 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v707 = v708 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v705 = v707 + "div.title {display: none}\n";
    var v701 = v705 + "div.info {font-weight: bold}\n";
    var v697 = v701 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v693 = v697 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v686 = v693 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v677 = v686 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v668 = v677 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v657 = v668 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v645 = v657 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v633 = v645 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v604 = v633 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v565 = v604 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v503 = v565 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v387 = v503 + "img {display: none}\n";
    var v123 = v387 + "</style>\n";
    JAM.call(v122.write, v122, [v123], JAM.policy.p23)
  }
  var v124 = outputWindow.document;
  var v566 = "</head>\n" + '<body class="main">\n';
  var v504 = v566 + '<div class="title">';
  var v388 = v504 + title$$8;
  var v125 = v388 + " results</div>\n";
  JAM.call(v124.write, v124, [v125], JAM.policy.p23);
  outputWindow.status = "Please Wait.";
  return true
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p13)
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p13)
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p13)
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p13)
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p13)
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p13)
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p13)
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p13)
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p13)
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  var v389 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p13);
  var v126 = v389 != -1;
  if(v126) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p13);
    tempDnaArray = JAM.call(tempDnaArray.reverse, tempDnaArray, [], JAM.policy.p13);
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p14)
  }
  return dnaSequence$$1
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = JAM.call(theNumber.toString, theNumber, [], JAM.policy.p13);
  j$$5 = theNumber.length;
  var v127 = j$$5 < lengthOfColumn;
  for(;v127;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v127 = j$$5 < lengthOfColumn
  }
  var v128 = tempString + theNumber;
  theNumber = v128 + " ";
  var v129 = sequenceToAppend + theNumber;
  sequenceToAppend = v129 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p23);
  var v390 = testArray[0];
  var v130 = v390 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v391 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p23);
  var v131 = v391 == -1;
  if(v131) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    if(JAM.isEval(eval)) {
      re$$2 = eval("introspect(JAM.policy.pFull) { " + "Exception handling not supported. Check browser compatibility page." + " }")
    }else {
      re$$2 = JAM.call(eval, null, ["Exception handling not supported. Check browser compatibility page."])
    }
  }catch(e$$4) {
    caughtException = true
  }
  var v132 = !caughtException;
  if(v132) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p13);
  var v133 = testString != "1X2X3X";
  if(v133) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v392 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p13);
  var v134 = v392 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v393 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p13);
  var v135 = v393 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v394 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p13);
  var v136 = v394 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v505 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p13);
  var v395 = v505 == -1;
  var v507 = !v395;
  if(v507) {
    var v567 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p13);
    var v506 = v567 == -1;
    var v569 = !v506;
    if(v569) {
      var v605 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p13);
      var v568 = v605 == -1;
      var v607 = !v568;
      if(v607) {
        var v606 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p13);
        v568 = v606 == -1
      }
      v506 = v568
    }
    v395 = v506
  }
  var v137 = v395;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v396 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p13);
  var v138 = v396 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v397 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v397 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v398 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p13);
  var v141 = v398 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v399 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p13);
  var v142 = v399 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v508 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p13);
  var v400 = v508 == -1;
  var v510 = !v400;
  if(v510) {
    var v570 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p13);
    var v509 = v570 == -1;
    var v572 = !v509;
    if(v572) {
      var v608 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p13);
      var v571 = v608 == -1;
      var v610 = !v571;
      if(v610) {
        var v609 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p13);
        v571 = v609 == -1
      }
      v509 = v571
    }
    v400 = v509
  }
  var v143 = v400;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v511 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p13);
  var v401 = v511 == -1;
  var v513 = !v401;
  if(v513) {
    var v573 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p13);
    var v512 = v573 == -1;
    var v575 = !v512;
    if(v575) {
      var v611 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p13);
      var v574 = v611 == -1;
      var v613 = !v574;
      if(v613) {
        var v612 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p13);
        v574 = v612 == -1
      }
      v512 = v574
    }
    v401 = v512
  }
  var v144 = v401;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v402 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p13);
  var v145 = v402 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v514 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p13);
  var v403 = v514 == -1;
  var v516 = !v403;
  if(v516) {
    var v576 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p13);
    var v515 = v576 == -1;
    var v578 = !v515;
    if(v578) {
      var v614 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p13);
      var v577 = v614 == -1;
      var v616 = !v577;
      if(v616) {
        var v615 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p13);
        v577 = v615 == -1
      }
      v515 = v577
    }
    v403 = v515
  }
  var v146 = v403;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v404 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p13);
  var v147 = v404 == -1;
  if(v147) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function writeGroupNum(text$$10, tabIn$$1, groupSize, basePerLine, startBase, stopBase) {
  var i$$5 = parseInt(startBase);
  var k = 0;
  var lineOfText = "";
  var sepChar = " ";
  groupSize = parseInt(groupSize);
  basePerLine = parseInt(basePerLine);
  var v155 = i$$5 < stopBase;
  for(;v155;) {
    var v148 = i$$5 + 1;
    lineOfText = rightNum(v148, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v405 = basePerLine / groupSize;
    var v152 = j$$6 <= v405;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v149 = lineOfText;
        var v406 = k + i$$5;
        var v150 = JAM.call(text$$10.charAt, text$$10, [v406], JAM.policy.p23);
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v407 = basePerLine / groupSize;
      v152 = j$$6 <= v407
    }
    var v153 = outputWindow.document;
    var v154 = lineOfText + "\n";
    JAM.call(v153.write, v153, [v154], JAM.policy.p23);
    lineOfText = "";
    v155 = i$$5 < stopBase
  }
  return true
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0);
  return true
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v408 = adjustment < 0;
    if(v408) {
      v408 = adjusted >= 0
    }
    var v156 = v408;
    if(v156) {
      adjusted = adjusted + 1
    }
    return adjusted
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
  var v189 = i$$6 < stopBase$$2;
  for(;v189;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v409 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v409;
    for(;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for(;v160;) {
        var v410 = i$$6 + k$$1;
        var v157 = v410 >= stopBase$$2;
        if(v157) {
          break
        }
        var v158 = lineOfText$$1;
        var v411 = k$$1 + i$$6;
        var v159 = JAM.call(text$$12.charAt, text$$12, [v411], JAM.policy.p23);
        lineOfText$$1 = v158 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if(v163) {
        var v161 = aboveNum;
        var v412 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v412, "", groupSize$$2, tabIn$$3);
        aboveNum = v161 + v162
      }
      var v164 = i$$6 >= stopBase$$2;
      if(v164) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v413 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v413
    }
    var v188 = numberPosition$$1 == "left";
    if(v188) {
      var v166 = outputWindow.document;
      var v579 = adjustNumbering(lineNum, numberingAdjustment);
      var v517 = rightNum(v579, "", 8, tabIn$$3);
      var v414 = v517 + lineOfText$$1;
      var v167 = v414 + "\n";
      JAM.call(v166.write, v166, [v167], JAM.policy.p23);
      var v171 = strands$$1 == "two";
      if(v171) {
        var v168 = outputWindow.document;
        var v580 = adjustNumbering(lineNum, numberingAdjustment);
        var v518 = rightNum(v580, "", 8, tabIn$$3);
        var v519 = complement(lineOfText$$1);
        var v415 = v518 + v519;
        var v169 = v415 + "\n";
        JAM.call(v168.write, v168, [v169], JAM.policy.p23);
        var v170 = outputWindow.document;
        JAM.call(v170.write, v170, ["\n"], JAM.policy.p14)
      }
    }else {
      var v187 = numberPosition$$1 == "right";
      if(v187) {
        var v172 = outputWindow.document;
        var v520 = lineOfText$$1;
        var v521 = adjustNumbering(i$$6, numberingAdjustment);
        var v416 = v520 + v521;
        var v173 = v416 + "\n";
        JAM.call(v172.write, v172, [v173], JAM.policy.p23);
        var v177 = strands$$1 == "two";
        if(v177) {
          var v174 = outputWindow.document;
          var v522 = complement(lineOfText$$1);
          var v523 = adjustNumbering(i$$6, numberingAdjustment);
          var v417 = v522 + v523;
          var v175 = v417 + "\n";
          JAM.call(v174.write, v174, [v175], JAM.policy.p23);
          var v176 = outputWindow.document;
          JAM.call(v176.write, v176, ["\n"], JAM.policy.p14)
        }
      }else {
        var v186 = numberPosition$$1 == "above";
        if(v186) {
          var v178 = outputWindow.document;
          var v179 = aboveNum + "\n";
          JAM.call(v178.write, v178, [v179], JAM.policy.p23);
          var v180 = outputWindow.document;
          var v181 = lineOfText$$1 + "\n";
          JAM.call(v180.write, v180, [v181], JAM.policy.p23);
          var v185 = strands$$1 == "two";
          if(v185) {
            var v182 = outputWindow.document;
            var v418 = complement(lineOfText$$1);
            var v183 = v418 + "\n";
            JAM.call(v182.write, v182, [v183], JAM.policy.p23);
            var v184 = outputWindow.document;
            JAM.call(v184.write, v184, ["\n"], JAM.policy.p14)
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v189 = i$$6 < stopBase$$2
  }
  return true
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
  var v210 = i$$7 < stopBase$$3;
  for(;v210;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v419 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v419;
    for(;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for(;v193;) {
        var v420 = i$$7 + k$$2;
        var v190 = v420 >= stopBase$$3;
        if(v190) {
          break
        }
        var v191 = lineOfText$$2;
        var v421 = k$$2 + i$$7;
        var v192 = JAM.call(text$$13.charAt, text$$13, [v421], JAM.policy.p23);
        lineOfText$$2 = v191 + v192;
        k$$2 = k$$2 + 1;
        v193 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v196 = numberPosition$$2 == "above";
      if(v196) {
        var v194 = aboveNum$$1;
        var v195 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v194 + v195
      }
      var v197 = i$$7 >= stopBase$$3;
      if(v197) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v422 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v422
    }
    var v209 = numberPosition$$2 == "left";
    if(v209) {
      var v199 = outputWindow.document;
      var v524 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v423 = v524 + lineOfText$$2;
      var v200 = v423 + "\n";
      JAM.call(v199.write, v199, [v200], JAM.policy.p23)
    }else {
      var v208 = numberPosition$$2 == "right";
      if(v208) {
        var v201 = outputWindow.document;
        var v424 = lineOfText$$2 + i$$7;
        var v202 = v424 + "\n";
        JAM.call(v201.write, v201, [v202], JAM.policy.p23)
      }else {
        var v207 = numberPosition$$2 == "above";
        if(v207) {
          var v203 = outputWindow.document;
          var v204 = aboveNum$$1 + "\n";
          JAM.call(v203.write, v203, [v204], JAM.policy.p23);
          var v205 = outputWindow.document;
          var v206 = lineOfText$$2 + "\n";
          JAM.call(v205.write, v205, [v206], JAM.policy.p23)
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v210 = i$$7 < stopBase$$3
  }
  return true
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
  var v525 = sequence$$13.length;
  var v425 = v525 <= firstIndexToMutate;
  var v527 = !v425;
  if(v527) {
    var v526 = lastIndexToMutate < 0;
    var v581 = !v526;
    if(v581) {
      v526 = lastIndexToMutate <= firstIndexToMutate
    }
    v425 = v526
  }
  var v211 = v425;
  if(v211) {
    numMut = 0
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for(;v219;) {
    maxNum = sequence$$13.length;
    var v426 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v212 = v426 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v212], JAM.policy.p13);
    var v427 = randNum < firstIndexToMutate;
    var v528 = !v427;
    if(v528) {
      v427 = randNum > lastIndexToMutate
    }
    var v213 = v427;
    if(v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p13);
    needNewChar = true;
    for(;needNewChar;) {
      var v428 = JAM.call(Math.random, Math, [], JAM.policy.p13);
      var v429 = components$$1.length;
      var v214 = v428 * v429;
      componentsIndex = JAM.call(Math.round, Math, [v214], JAM.policy.p13);
      var v430 = components$$1.length;
      var v215 = componentsIndex == v430;
      if(v215) {
        componentsIndex = 0
      }
      var v431 = components$$1[componentsIndex];
      var v216 = v431 != currentChar;
      if(v216) {
        needNewChar = false
      }
    }
    var v432 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v433 = components$$1[componentsIndex];
    var v217 = v432 + v433;
    var v434 = randNum + 1;
    var v435 = sequence$$13.length;
    var v218 = JAM.call(sequence$$13.substring, sequence$$13, [v434, v435], JAM.policy.p24);
    sequence$$13 = v217 + v218;
    i$$8 = i$$8 + 1;
    v219 = i$$8 < numMut
  }
  var v220 = outputWindow.document;
  var v221 = addReturns(sequence$$13);
  JAM.call(v220.write, v220, [v221], JAM.policy.p23);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v226 = j$$9 < lengthOut$$1;
  for(;v226;) {
    var v436 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v437 = components$$2.length;
    var v222 = v436 * v437;
    tempNum$$1 = JAM.call(Math.floor, Math, [v222], JAM.policy.p13);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v438 = sequence$$14.length;
    var v225 = v438 == 60;
    if(v225) {
      var v223 = outputWindow.document;
      var v224 = sequence$$14 + "\n";
      JAM.call(v223.write, v223, [v224], JAM.policy.p23);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v226 = j$$9 < lengthOut$$1
  }
  var v227 = outputWindow.document;
  var v228 = sequence$$14 + "\n";
  JAM.call(v227.write, v227, [v228], JAM.policy.p23);
  return true
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
  var v232 = dnaConformation == "circular";
  if(v232) {
    var v229 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v229.length;
    var v582 = sequence$$15.length;
    var v529 = v582 - lookAhead;
    var v530 = sequence$$15.length;
    var v439 = JAM.call(sequence$$15.substring, sequence$$15, [v529, v530], JAM.policy.p24);
    var v230 = v439 + sequence$$15;
    var v231 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v233 = outputWindow.document;
  JAM.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p14);
  var v234 = outputWindow.document;
  var v583 = '<tr><td class="title" width="200px">' + "Site:";
  var v531 = v583 + '</td><td class="title">';
  var v440 = v531 + "Positions:";
  var v235 = v440 + "</td></tr>\n";
  JAM.call(v234.write, v234, [v235], JAM.policy.p23);
  var i$$9 = 0;
  var v441 = arrayOfItems.length;
  var v251 = i$$9 < v441;
  for(;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v442 = arrayOfItems[i$$9];
    var v236 = JAM.call(v442.match, v442, [/\/.+\//], JAM.policy.p13);
    matchExp = v236 + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    var v584 = arrayOfItems[i$$9];
    var v532 = JAM.call(v584.match, v584, [/\)\D*\d+/], JAM.policy.p13);
    var v443 = JAM.call(v532.toString, v532, [], JAM.policy.p13);
    var v237 = JAM.call(v443.replace, v443, [/\)\D*/, ""], JAM.policy.p13);
    cutDistance = parseFloat(v237);
    var v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p23);
    for(;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v444 = matchPosition >= lowerLimit;
      if(v444) {
        v444 = matchPosition < upperLimit
      }
      var v241 = v444;
      if(v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v445 = matchPosition - shiftValue;
        var v240 = v445 + 1;
        tempString$$1 = v239 + v240
      }
      var v446 = matchExp.lastIndex;
      var v533 = RegExp.lastMatch;
      var v447 = v533.length;
      var v242 = v446 - v447;
      matchExp.lastIndex = v242 + 1;
      v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p23)
    }
    var v448 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p13);
    var v244 = v448 != -1;
    if(v244) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p13)
    }
    var v248 = timesFound == 0;
    if(v248) {
      backGroundClass = "none"
    }else {
      var v247 = timesFound == 1;
      if(v247) {
        backGroundClass = "one"
      }else {
        var v246 = timesFound == 2;
        if(v246) {
          backGroundClass = "two"
        }else {
          var v245 = timesFound == 3;
          if(v245) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v249 = outputWindow.document;
    var v658 = '<tr><td class="' + backGroundClass;
    var v646 = v658 + '">';
    var v678 = arrayOfItems[i$$9];
    var v669 = JAM.call(v678.match, v678, [/\([^\(]+\)/], JAM.policy.p13);
    var v659 = JAM.call(v669.toString, v669, [], JAM.policy.p13);
    var v647 = JAM.call(v659.replace, v659, [/\(|\)/g, ""], JAM.policy.p13);
    var v634 = v646 + v647;
    var v617 = v634 + '</td><td class="';
    var v585 = v617 + backGroundClass;
    var v534 = v585 + '">';
    var v449 = v534 + tempString$$1;
    var v250 = v449 + "</td></tr>\n";
    JAM.call(v249.write, v249, [v250], JAM.policy.p23);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v450 = arrayOfItems.length;
    v251 = i$$9 < v450
  }
  var v252 = outputWindow.document;
  JAM.call(v252.write, v252, ["</tbody></table>\n"], JAM.policy.p14);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v253 = outputWindow.document;
  JAM.call(v253.write, v253, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p14);
  var v254 = outputWindow.document;
  var v635 = '<tr><td class="title">' + "Pattern:";
  var v618 = v635 + '</td><td class="title">';
  var v586 = v618 + "Times found:";
  var v535 = v586 + '</td><td class="title">';
  var v451 = v535 + "Percentage:";
  var v255 = v451 + "</td></tr>\n";
  JAM.call(v254.write, v254, [v255], JAM.policy.p23);
  var i$$10 = 0;
  var v452 = arrayOfItems$$1.length;
  var v264 = i$$10 < v452;
  for(;v264;) {
    var tempNumber = 0;
    var v453 = arrayOfItems$$1[i$$10];
    var v256 = JAM.call(v453.match, v453, [/\/[^\/]+\//], JAM.policy.p13);
    var matchExp$$1 = v256 + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    var v454 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p23);
    var v258 = v454 != -1;
    if(v258) {
      var v257 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p23);
      tempNumber = v257.length
    }
    var percentage = 0;
    var v536 = originalLength + 1;
    var v619 = arrayOfItems$$1[i$$10];
    var v587 = JAM.call(v619.match, v619, [/\d+/], JAM.policy.p13);
    var v537 = parseFloat(v587);
    var v455 = v536 - v537;
    var v261 = v455 > 0;
    if(v261) {
      var v259 = 100 * tempNumber;
      var v456 = originalLength + 1;
      var v588 = arrayOfItems$$1[i$$10];
      var v538 = JAM.call(v588.match, v588, [/\d+/], JAM.policy.p13);
      var v457 = parseFloat(v538);
      var v260 = v456 - v457;
      percentage = v259 / v260
    }
    var v262 = outputWindow.document;
    var v679 = arrayOfItems$$1[i$$10];
    var v670 = JAM.call(v679.match, v679, [/\([^\(]+\)\b/], JAM.policy.p13);
    var v660 = JAM.call(v670.toString, v670, [], JAM.policy.p13);
    var v648 = JAM.call(v660.replace, v660, [/\(|\)/g, ""], JAM.policy.p13);
    var v636 = "<tr><td>" + v648;
    var v620 = v636 + "</td><td>";
    var v589 = v620 + tempNumber;
    var v539 = v589 + "</td><td>";
    var v540 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p13);
    var v458 = v539 + v540;
    var v263 = v458 + "</td></tr>\n";
    JAM.call(v262.write, v262, [v263], JAM.policy.p23);
    i$$10 = i$$10 + 1;
    var v459 = arrayOfItems$$1.length;
    v264 = i$$10 < v459
  }
  var v265 = outputWindow.document;
  JAM.call(v265.write, v265, ["</tbody></table>\n"], JAM.policy.p14);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v460 = sequence$$17.length;
  var v272 = v460 > 0;
  for(;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v461 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v266 = v461 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v266], JAM.policy.p13);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p13);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v267, v268], JAM.policy.p13);
    sequence$$17 = tempString1 + tempString2;
    var v462 = tempSeq.length;
    var v271 = v462 == 60;
    if(v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      JAM.call(v269.write, v269, [v270], JAM.policy.p23);
      tempSeq = ""
    }
    var v463 = sequence$$17.length;
    v272 = v463 > 0
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  JAM.call(v273.write, v273, [v274], JAM.policy.p23);
  return true
}
function proteinStats(theDocument) {
  var newProtein = "";
  var title$$9 = "";
  var maxInput$$3 = 5E5;
  var v464 = testScript();
  var v275 = v464 == false;
  if(v275) {
    return false
  }
  var v649 = theDocument.forms;
  var v637 = v649[0];
  var v621 = v637.elements;
  var v590 = v621[0];
  var v541 = checkFormElement(v590);
  var v465 = v541 == false;
  var v543 = !v465;
  if(v543) {
    var v661 = theDocument.forms;
    var v650 = v661[0];
    var v638 = v650.elements;
    var v622 = v638[0];
    var v591 = v622.value;
    var v542 = checkSequenceLength(v591, maxInput$$3);
    v465 = v542 == false
  }
  var v276 = v465;
  if(v276) {
    return false
  }
  var itemsToCheck = ["/A/ (A)1", "/B/ (B)1", "/C/ (C)1", "/D/ (D)1", "/E/ (E)1", "/F/ (F)1", "/G/ (G)1", "/H/ (H)1", "/I/ (I)1", "/K/ (K)1", "/L/ (L)1", "/M/ (M)1", "/N/ (N)1", "/P/ (P)1", "/Q/ (Q)1", "/R/ (R)1", "/S/ (S)1", "/T/ (T)1", "/V/ (V)1", "/W/ (W)1", "/X/ (X)1", "/Y/ (Y)1", "/Z/ (Z)1", "/[GAVLI]/ (Aliphatic G,A,V,L,I)1", "/[FWY]/ (Aromatic F,W,Y)1", "/[CM]/ (Sulphur C,M)1", "/[KRH]/ (Basic K,R,H)1", "/[BDENQZ]/ (Acidic B,D,E,N,Q,Z)1", "/[ST]/ (Aliphatic hydroxyl S,T)1", "/[ZEQRCMVILYW]/ (tRNA synthetase class I Z,E,Q,R,C,M,V,I,L,Y,W)1", 
  "/[BGAPSTHDNKF]/ (tRNA synthetase class II B,G,A,P,S,T,H,D,N,K,F)1"];
  openWindow("Protein Stats");
  var v623 = theDocument.forms;
  var v592 = v623[0];
  var v544 = v592.elements;
  var v466 = v544[0];
  var v277 = v466.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v277);
  var i$$11 = 0;
  var v467 = arrayOfFasta$$1.length;
  var v283 = i$$11 < v467;
  for(;v283;) {
    var v278 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v278);
    var v279 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v279);
    newProtein = removeNonProteinAllowDegen(newProtein);
    var v280 = outputWindow.document;
    var v281 = getInfoFromTitleAndSequence(title$$9, newProtein);
    JAM.call(v280.write, v280, [v281], JAM.policy.p23);
    writeSequenceStats(newProtein, itemsToCheck);
    var v282 = outputWindow.document;
    JAM.call(v282.write, v282, ["<br />\n<br />\n"], JAM.policy.p14);
    i$$11 = i$$11 + 1;
    var v468 = arrayOfFasta$$1.length;
    v283 = i$$11 < v468
  }
  closeWindow();
  return true
}
JAM.set(document, "onload", v2);
var v284 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p14);
JAM.set(v284, "onclick", v3);
var v285 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p14);
JAM.set(v285, "onclick", v4);
