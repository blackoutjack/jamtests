function v4() {
  var v637 = document.forms;
  var v542 = v637[0];
  var v326 = v542.elements;
  var v5 = v326[0];
  v5.value = " ";
  var v638 = document.forms;
  var v543 = v638[0];
  var v327 = v543.elements;
  var v6 = v327[4];
  v6.value = " ";
  return
}
function v3() {
  try {
    identSim(document)
  }catch(e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7)
  }
  return
}
function v2() {
  var v328 = document.main_form;
  var v8 = v328.main_submit;
  JAM.call(v8.focus, v8, [], JAM.policy.p13);
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
  var v9 = arrayOfSequences[0];
  var lengthOfAlign = v9.length;
  var v329 = arrayOfSequences.length;
  var v10 = v329 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v330 = arrayOfTitles.length;
  var v12 = i$$1 < v330;
  for(;v12;) {
    var v639 = arrayOfTitles[i$$1];
    var v544 = JAM.call(v639.search, v639, [/\S/], JAM.policy.p13);
    var v331 = v544 == -1;
    var v546 = !v331;
    if(v546) {
      var v701 = arrayOfSequences[i$$1];
      var v640 = JAM.call(v701.search, v701, [/\S/], JAM.policy.p13);
      var v545 = v640 == -1;
      var v642 = !v545;
      if(v642) {
        var v702 = arrayOfSequences[i$$1];
        var v641 = v702.length;
        v545 = v641 != lengthOfAlign
      }
      v331 = v545
    }
    var v11 = v331;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v332 = arrayOfTitles.length;
    v12 = i$$1 < v332
  }
  return true
}
function checkCodonTable(codonTable) {
  var v547 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p13);
  var v333 = v547 == -1;
  var v549 = !v333;
  if(v549) {
    var v643 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p13);
    var v548 = v643 == -1;
    var v645 = !v548;
    if(v645) {
      var v703 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p13);
      var v644 = v703 == -1;
      var v705 = !v644;
      if(v705) {
        var v742 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p13);
        var v704 = v742 == -1;
        var v744 = !v704;
        if(v744) {
          var v743 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p13);
          v704 = v743 == -1
        }
        v644 = v704
      }
      v548 = v644
    }
    v333 = v548
  }
  var v13 = v333;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v550 = formElement.value;
  var v334 = JAM.call(v550.search, v550, [/\S/], JAM.policy.p13);
  var v14 = v334 == -1;
  if(v14) {
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
  var v335 = arrayOfPatterns.length;
  var v17 = z$$2 < v335;
  for(;v17;) {
    var v551 = arrayOfPatterns[z$$2];
    var v336 = JAM.call(v551.search, v551, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p13);
    var v15 = v336 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v552 = arrayOfPatterns[z$$2];
    var v337 = moreExpressionCheck(v552);
    var v16 = v337 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v338 = arrayOfPatterns.length;
    v17 = z$$2 < v338
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v339 = arrayOfPatterns.length;
  var v26 = j < v339;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    var v646 = arrayOfPatterns[j];
    var v553 = JAM.call(v646.match, v646, [/\/.+\//], JAM.policy.p13);
    var v340 = v553 + "gi";
    if(JAM.isEval(eval)) {
      var v831 = eval("introspect(JAM.policy.pFull) { " + v340 + " }")
    }else {
      var v831 = JAM.call(eval, null, [v340])
    }
    v20[v21] = v831;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    var v554 = arrayOfPatterns[j];
    var v341 = JAM.call(v554.match, v554, [/=[a-zA-Z\*]/], JAM.policy.p13);
    var v832 = JAM.call(v341.toString, v341, [], JAM.policy.p13);
    v22[v23] = v832;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    var v342 = geneticCodeMatchResult[j];
    var v833 = JAM.call(v342.replace, v342, [/=/g, ""], JAM.policy.p13);
    v24[v25] = v833;
    j = j + 1;
    var v343 = arrayOfPatterns.length;
    v26 = j < v343
  }
  var i$$2 = 0;
  var v555 = testSequence.length;
  var v344 = v555 - 3;
  var v33 = i$$2 <= v344;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v27], JAM.policy.p13);
    j = 0;
    var v345 = geneticCodeMatchExp.length;
    var v31 = j < v345;
    for(;v31;) {
      var v556 = geneticCodeMatchExp[j];
      var v346 = JAM.call(codon.search, codon, [v556], JAM.policy.p23);
      var v30 = v346 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v347 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v347 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v348 = geneticCodeMatchExp.length;
      v31 = j < v348
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v557 = testSequence.length;
    var v349 = v557 - 3;
    v33 = i$$2 <= v349
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v350 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v350;
  for(;v35;) {
    var v558 = arrayOfPatterns$$1[z$$3];
    var v351 = JAM.call(v558.search, v558, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p13);
    var v34 = v351 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v352 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v352
  }
  var i$$3 = 0;
  var v353 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v353;
  for(;v39;) {
    var v559 = arrayOfPatterns$$1[i$$3];
    var v354 = "[" + v559;
    var v36 = v354 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v355 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v355;
    for(;v38;) {
      var v560 = arrayOfPatterns$$1[j$$1];
      var v356 = JAM.call(v560.search, v560, [re], JAM.policy.p23);
      var v37 = v356 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v357 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v357
    }
    i$$3 = i$$3 + 1;
    var v358 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v358
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v359 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v359;
  for(;v42;) {
    var v561 = arrayOfPatterns$$2[z$$4];
    var v360 = JAM.call(v561.search, v561, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p13);
    var v40 = v360 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v562 = arrayOfPatterns$$2[z$$4];
    var v361 = moreExpressionCheck(v562);
    var v41 = v361 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v362 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v362
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v647 = getSequenceFromFasta(text$$7);
  var v563 = JAM.call(v647.replace, v647, [/[^A-Za-z]/g, ""], JAM.policy.p13);
  var v363 = v563.length;
  var v44 = v363 > maxInput;
  if(v44) {
    var v364 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v364 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v365 = text$$8.length;
  var v46 = v365 > maxInput$$1;
  if(v46) {
    var v366 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v366 + " characters.";
    alert(v45);
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
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</form>"], JAM.policy.p14);
  return true
}
function closePre() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</div>"], JAM.policy.p14);
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</pre>\n"], JAM.policy.p14);
  return
}
function closeTextArea() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</textarea>"], JAM.policy.p14);
  return true
}
function closeWindow() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</body>\n</html>\n"], JAM.policy.p14);
  outputWindow.status = "Done.";
  var v52 = outputWindow.document;
  JAM.call(v52.close, v52, [], JAM.policy.p13);
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
  var v367 = alignArray.length;
  var v53 = v367 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v368 = alignArray.length;
  var v55 = i$$4 < v368;
  for(;v55;) {
    var v564 = alignArray[i$$4];
    var v369 = JAM.call(v564.search, v564, [/[^\s]+\s/], JAM.policy.p13);
    var v54 = v369 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v370 = alignArray.length;
    v55 = i$$4 < v370
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
  var v371 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v58 = v371 != -1;
  if(v58) {
    var v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p23);
    for(;v57;) {
      var v56 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v56], JAM.policy.p23);
      v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p23)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v372 = sequence$$2.length;
  var v59 = "&gt;results for " + v372;
  var stringToReturn = v59 + " residue sequence ";
  var v373 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p13);
  var v61 = v373 != -1;
  if(v61) {
    var v374 = stringToReturn + '"';
    var v60 = v374 + fastaSequenceTitle;
    stringToReturn = v60 + '"'
  }
  var v375 = stringToReturn + ' starting "';
  var v376 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v62 = v375 + v376;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v377 = sequenceOne.length;
  var v63 = "Search results for " + v377;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v378 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p13);
  var v65 = v378 != -1;
  if(v65) {
    var v379 = stringToReturn$$1 + '"';
    var v64 = v379 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v380 = stringToReturn$$1 + ' starting "';
  var v381 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v66 = v380 + v381;
  stringToReturn$$1 = v66 + '"\n';
  var v382 = stringToReturn$$1 + "and ";
  var v383 = sequenceTwo.length;
  var v67 = v382 + v383;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v384 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p13);
  var v69 = v384 != -1;
  if(v69) {
    var v385 = stringToReturn$$1 + '"';
    var v68 = v385 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v386 = stringToReturn$$1 + ' starting "';
  var v387 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v70 = v386 + v387;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v388 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v388;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    var v648 = arrayOfPatterns$$3[j$$2];
    var v565 = JAM.call(v648.match, v648, [/\/.+\//], JAM.policy.p13);
    var v389 = v565 + "gi";
    if(JAM.isEval(eval)) {
      var v834 = eval("introspect(JAM.policy.pFull) { " + v389 + " }")
    }else {
      var v834 = JAM.call(eval, null, [v389])
    }
    v73[v74] = v834;
    j$$2 = j$$2 + 1;
    var v390 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v390
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v391 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v391;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    var v566 = arrayOfPatterns$$4[j$$3];
    var v392 = JAM.call(v566.match, v566, [/=[a-zA-Z\*]/], JAM.policy.p13);
    var v835 = JAM.call(v392.toString, v392, [], JAM.policy.p13);
    v77[v78] = v835;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    var v393 = geneticCodeMatchResult$$1[j$$3];
    var v836 = JAM.call(v393.replace, v393, [/=/g, ""], JAM.policy.p13);
    v79[v80] = v836;
    j$$3 = j$$3 + 1;
    var v394 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v394
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v395 = sequence$$3.length;
  var v82 = "Results for " + v395;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v396 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p13);
  var v84 = v396 != -1;
  if(v84) {
    var v397 = stringToReturn$$2 + '"';
    var v83 = v397 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"'
  }
  var v398 = stringToReturn$$2 + ' starting "';
  var v399 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v85 = v398 + v399;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v567 = "Results for " + topology;
  var v400 = v567 + " ";
  var v401 = sequence$$4.length;
  var v87 = v400 + v401;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v402 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p13);
  var v89 = v402 != -1;
  if(v89) {
    var v403 = stringToReturn$$3 + '"';
    var v88 = v403 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"'
  }
  var v404 = stringToReturn$$3 + ' starting "';
  var v405 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v90 = v404 + v405;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v406 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v406;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v407 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p13);
  var v94 = v407 != -1;
  if(v94) {
    var v408 = stringToReturn$$4 + '"';
    var v93 = v408 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v409 = stringToReturn$$4 + ' starting "';
  var v410 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v95 = v409 + v410;
  stringToReturn$$4 = v95 + '"\n';
  var v411 = stringToReturn$$4 + "and ";
  var v412 = sequenceTwo$$1.length;
  var v96 = v411 + v412;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v413 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p13);
  var v98 = v413 != -1;
  if(v98) {
    var v414 = stringToReturn$$4 + '"';
    var v97 = v414 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v415 = stringToReturn$$4 + ' starting "';
  var v416 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v99 = v415 + v416;
  stringToReturn$$4 = v99 + '"';
  var v100 = '<div class="info">' + stringToReturn$$4;
  return v100 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v102 = j$$4 < lengthOut;
  for(;v102;) {
    var v417 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v418 = components.length;
    var v101 = v417 * v418;
    tempNum = JAM.call(Math.floor, Math, [v101], JAM.policy.p13);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p23);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p14)
}
function getSequenceFromFasta(sequenceRecord) {
  var v419 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v103 = v419 != -1;
  if(v103) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p13)
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v420 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v105 = v420 != -1;
  if(v105) {
    var v104 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p13);
    fastaTitle = JAM.call(v104.toString, v104, [], JAM.policy.p13);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p13);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p13);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p13)
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v568 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p13);
  var v421 = v568 != -1;
  var v570 = !v421;
  if(v570) {
    var v649 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p13);
    var v569 = v649 != -1;
    var v651 = !v569;
    if(v651) {
      var v706 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p13);
      var v650 = v706 != -1;
      var v708 = !v650;
      if(v708) {
        var v745 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p13);
        var v707 = v745 != -1;
        var v747 = !v707;
        if(v747) {
          var v761 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p13);
          var v746 = v761 != -1;
          var v763 = !v746;
          if(v763) {
            var v773 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p13);
            var v762 = v773 != -1;
            var v775 = !v762;
            if(v775) {
              var v784 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p13);
              var v774 = v784 != -1;
              var v786 = !v774;
              if(v786) {
                var v793 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p13);
                var v785 = v793 != -1;
                var v795 = !v785;
                if(v795) {
                  var v802 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p13);
                  var v794 = v802 != -1;
                  var v804 = !v794;
                  if(v804) {
                    var v809 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p13);
                    var v803 = v809 != -1;
                    var v811 = !v803;
                    if(v811) {
                      var v810 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p13);
                      v803 = v810 != -1
                    }
                    v794 = v803
                  }
                  v785 = v794
                }
                v774 = v785
              }
              v762 = v774
            }
            v746 = v762
          }
          v707 = v746
        }
        v650 = v707
      }
      v569 = v650
    }
    v421 = v569
  }
  var v106 = v421;
  if(v106) {
    return false
  }
  return true
}
function openForm() {
  var v107 = outputWindow.document;
  JAM.call(v107.write, v107, ['<form action="">\n'], JAM.policy.p14);
  return true
}
function openPre() {
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ["<pre>"], JAM.policy.p14);
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ['<div class="pre">'], JAM.policy.p14);
  return
}
function openTextArea() {
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p14);
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p13);
  var v111 = outputWindow.document;
  var v652 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v571 = v652 + "<head>\n";
  var v422 = v571 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v422 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v111.write, v111, [v112], JAM.policy.p23);
  if(isColor) {
    var v113 = outputWindow.document;
    var v824 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v820 = v824 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v816 = v820 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v812 = v816 + "div.info {font-weight: bold}\n";
    var v805 = v812 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v796 = v805 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v787 = v796 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v776 = v787 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v764 = v776 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v748 = v764 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v709 = v748 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v653 = v709 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v572 = v653 + "td.many {color: #000000}\n";
    var v423 = v572 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v423 + "</style>\n";
    JAM.call(v113.write, v113, [v114], JAM.policy.p23)
  }else {
    var v115 = outputWindow.document;
    var v828 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v825 = v828 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v821 = v825 + "div.title {display: none}\n";
    var v817 = v821 + "div.info {font-weight: bold}\n";
    var v813 = v817 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v806 = v813 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v797 = v806 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v788 = v797 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v777 = v788 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v765 = v777 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v749 = v765 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v710 = v749 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v654 = v710 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v573 = v654 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v424 = v573 + "img {display: none}\n";
    var v116 = v424 + "</style>\n";
    JAM.call(v115.write, v115, [v116], JAM.policy.p23)
  }
  var v117 = outputWindow.document;
  var v655 = "</head>\n" + '<body class="main">\n';
  var v574 = v655 + '<div class="title">';
  var v425 = v574 + title$$6;
  var v118 = v425 + " results</div>\n";
  JAM.call(v117.write, v117, [v118], JAM.policy.p23);
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
  var v119 = outputWindow.document;
  var v656 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v575 = v656 + "<head>\n";
  var v426 = v575 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v426 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v119.write, v119, [v120], JAM.policy.p23);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v826 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v822 = v826 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v818 = v822 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v814 = v818 + "div.info {font-weight: bold}\n";
    var v807 = v814 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v798 = v807 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v789 = v798 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v778 = v789 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v766 = v778 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v750 = v766 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v711 = v750 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v657 = v711 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v576 = v657 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v427 = v576 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v427 + "</style>\n";
    JAM.call(v121.write, v121, [v122], JAM.policy.p23)
  }else {
    var v123 = outputWindow.document;
    var v830 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v829 = v830 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v827 = v829 + "div.title {display: none}\n";
    var v823 = v827 + "div.info {font-weight: bold}\n";
    var v819 = v823 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v815 = v819 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v808 = v815 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v799 = v808 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v790 = v799 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v779 = v790 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v767 = v779 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v751 = v767 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v712 = v751 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v658 = v712 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v577 = v658 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v428 = v577 + "img {display: none}\n";
    var v124 = v428 + "</style>\n";
    JAM.call(v123.write, v123, [v124], JAM.policy.p23)
  }
  var v125 = outputWindow.document;
  var v659 = "</head>\n" + '<body class="main">\n';
  var v578 = v659 + '<div class="title">';
  var v429 = v578 + title$$8;
  var v126 = v429 + " results</div>\n";
  JAM.call(v125.write, v125, [v126], JAM.policy.p23);
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
  var v430 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p13);
  var v127 = v430 != -1;
  if(v127) {
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
  var v128 = j$$5 < lengthOfColumn;
  for(;v128;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v128 = j$$5 < lengthOfColumn
  }
  var v129 = tempString + theNumber;
  theNumber = v129 + " ";
  var v130 = sequenceToAppend + theNumber;
  sequenceToAppend = v130 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p23);
  var v431 = testArray[0];
  var v131 = v431 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v432 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p23);
  var v132 = v432 == -1;
  if(v132) {
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
  var v133 = !caughtException;
  if(v133) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p13);
  var v134 = testString != "1X2X3X";
  if(v134) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v433 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p13);
  var v135 = v433 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v434 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p13);
  var v136 = v434 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v435 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p13);
  var v137 = v435 == -1;
  if(v137) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v579 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p13);
  var v436 = v579 == -1;
  var v581 = !v436;
  if(v581) {
    var v660 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p13);
    var v580 = v660 == -1;
    var v662 = !v580;
    if(v662) {
      var v713 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p13);
      var v661 = v713 == -1;
      var v715 = !v661;
      if(v715) {
        var v714 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p13);
        v661 = v714 == -1
      }
      v580 = v661
    }
    v436 = v580
  }
  var v138 = v436;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v437 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p13);
  var v139 = v437 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v438 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v438 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v439 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p13);
  var v142 = v439 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v440 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p13);
  var v143 = v440 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v582 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p13);
  var v441 = v582 == -1;
  var v584 = !v441;
  if(v584) {
    var v663 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p13);
    var v583 = v663 == -1;
    var v665 = !v583;
    if(v665) {
      var v716 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p13);
      var v664 = v716 == -1;
      var v718 = !v664;
      if(v718) {
        var v717 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p13);
        v664 = v717 == -1
      }
      v583 = v664
    }
    v441 = v583
  }
  var v144 = v441;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v585 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p13);
  var v442 = v585 == -1;
  var v587 = !v442;
  if(v587) {
    var v666 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p13);
    var v586 = v666 == -1;
    var v668 = !v586;
    if(v668) {
      var v719 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p13);
      var v667 = v719 == -1;
      var v721 = !v667;
      if(v721) {
        var v720 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p13);
        v667 = v720 == -1
      }
      v586 = v667
    }
    v442 = v586
  }
  var v145 = v442;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v443 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p13);
  var v146 = v443 == -1;
  if(v146) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v588 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p13);
  var v444 = v588 == -1;
  var v590 = !v444;
  if(v590) {
    var v669 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p13);
    var v589 = v669 == -1;
    var v671 = !v589;
    if(v671) {
      var v722 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p13);
      var v670 = v722 == -1;
      var v724 = !v670;
      if(v724) {
        var v723 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p13);
        v670 = v723 == -1
      }
      v589 = v670
    }
    v444 = v589
  }
  var v147 = v444;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v445 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p13);
  var v148 = v445 == -1;
  if(v148) {
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
  var v156 = i$$5 < stopBase;
  for(;v156;) {
    var v149 = i$$5 + 1;
    lineOfText = rightNum(v149, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v446 = basePerLine / groupSize;
    var v153 = j$$6 <= v446;
    for(;v153;) {
      var v152 = k < groupSize;
      for(;v152;) {
        var v150 = lineOfText;
        var v447 = k + i$$5;
        var v151 = JAM.call(text$$10.charAt, text$$10, [v447], JAM.policy.p23);
        lineOfText = v150 + v151;
        k = k + 1;
        v152 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v448 = basePerLine / groupSize;
      v153 = j$$6 <= v448
    }
    var v154 = outputWindow.document;
    var v155 = lineOfText + "\n";
    JAM.call(v154.write, v154, [v155], JAM.policy.p23);
    lineOfText = "";
    v156 = i$$5 < stopBase
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
    var v449 = adjustment < 0;
    if(v449) {
      v449 = adjusted >= 0
    }
    var v157 = v449;
    if(v157) {
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
  var v190 = i$$6 < stopBase$$2;
  for(;v190;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v450 = basePerLine$$2 / groupSize$$2;
    var v166 = j$$7 <= v450;
    for(;v166;) {
      var v161 = k$$1 < groupSize$$2;
      for(;v161;) {
        var v451 = i$$6 + k$$1;
        var v158 = v451 >= stopBase$$2;
        if(v158) {
          break
        }
        var v159 = lineOfText$$1;
        var v452 = k$$1 + i$$6;
        var v160 = JAM.call(text$$12.charAt, text$$12, [v452], JAM.policy.p23);
        lineOfText$$1 = v159 + v160;
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v164 = numberPosition$$1 == "above";
      if(v164) {
        var v162 = aboveNum;
        var v453 = adjustNumbering(i$$6, numberingAdjustment);
        var v163 = rightNum(v453, "", groupSize$$2, tabIn$$3);
        aboveNum = v162 + v163
      }
      var v165 = i$$6 >= stopBase$$2;
      if(v165) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v454 = basePerLine$$2 / groupSize$$2;
      v166 = j$$7 <= v454
    }
    var v189 = numberPosition$$1 == "left";
    if(v189) {
      var v167 = outputWindow.document;
      var v672 = adjustNumbering(lineNum, numberingAdjustment);
      var v591 = rightNum(v672, "", 8, tabIn$$3);
      var v455 = v591 + lineOfText$$1;
      var v168 = v455 + "\n";
      JAM.call(v167.write, v167, [v168], JAM.policy.p23);
      var v172 = strands$$1 == "two";
      if(v172) {
        var v169 = outputWindow.document;
        var v673 = adjustNumbering(lineNum, numberingAdjustment);
        var v592 = rightNum(v673, "", 8, tabIn$$3);
        var v593 = complement(lineOfText$$1);
        var v456 = v592 + v593;
        var v170 = v456 + "\n";
        JAM.call(v169.write, v169, [v170], JAM.policy.p23);
        var v171 = outputWindow.document;
        JAM.call(v171.write, v171, ["\n"], JAM.policy.p14)
      }
    }else {
      var v188 = numberPosition$$1 == "right";
      if(v188) {
        var v173 = outputWindow.document;
        var v594 = lineOfText$$1;
        var v595 = adjustNumbering(i$$6, numberingAdjustment);
        var v457 = v594 + v595;
        var v174 = v457 + "\n";
        JAM.call(v173.write, v173, [v174], JAM.policy.p23);
        var v178 = strands$$1 == "two";
        if(v178) {
          var v175 = outputWindow.document;
          var v596 = complement(lineOfText$$1);
          var v597 = adjustNumbering(i$$6, numberingAdjustment);
          var v458 = v596 + v597;
          var v176 = v458 + "\n";
          JAM.call(v175.write, v175, [v176], JAM.policy.p23);
          var v177 = outputWindow.document;
          JAM.call(v177.write, v177, ["\n"], JAM.policy.p14)
        }
      }else {
        var v187 = numberPosition$$1 == "above";
        if(v187) {
          var v179 = outputWindow.document;
          var v180 = aboveNum + "\n";
          JAM.call(v179.write, v179, [v180], JAM.policy.p23);
          var v181 = outputWindow.document;
          var v182 = lineOfText$$1 + "\n";
          JAM.call(v181.write, v181, [v182], JAM.policy.p23);
          var v186 = strands$$1 == "two";
          if(v186) {
            var v183 = outputWindow.document;
            var v459 = complement(lineOfText$$1);
            var v184 = v459 + "\n";
            JAM.call(v183.write, v183, [v184], JAM.policy.p23);
            var v185 = outputWindow.document;
            JAM.call(v185.write, v185, ["\n"], JAM.policy.p14)
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v190 = i$$6 < stopBase$$2
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
  var v211 = i$$7 < stopBase$$3;
  for(;v211;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v460 = basePerLine$$3 / groupSize$$3;
    var v199 = j$$8 <= v460;
    for(;v199;) {
      var v194 = k$$2 < groupSize$$3;
      for(;v194;) {
        var v461 = i$$7 + k$$2;
        var v191 = v461 >= stopBase$$3;
        if(v191) {
          break
        }
        var v192 = lineOfText$$2;
        var v462 = k$$2 + i$$7;
        var v193 = JAM.call(text$$13.charAt, text$$13, [v462], JAM.policy.p23);
        lineOfText$$2 = v192 + v193;
        k$$2 = k$$2 + 1;
        v194 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v197 = numberPosition$$2 == "above";
      if(v197) {
        var v195 = aboveNum$$1;
        var v196 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v195 + v196
      }
      var v198 = i$$7 >= stopBase$$3;
      if(v198) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v463 = basePerLine$$3 / groupSize$$3;
      v199 = j$$8 <= v463
    }
    var v210 = numberPosition$$2 == "left";
    if(v210) {
      var v200 = outputWindow.document;
      var v598 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v464 = v598 + lineOfText$$2;
      var v201 = v464 + "\n";
      JAM.call(v200.write, v200, [v201], JAM.policy.p23)
    }else {
      var v209 = numberPosition$$2 == "right";
      if(v209) {
        var v202 = outputWindow.document;
        var v465 = lineOfText$$2 + i$$7;
        var v203 = v465 + "\n";
        JAM.call(v202.write, v202, [v203], JAM.policy.p23)
      }else {
        var v208 = numberPosition$$2 == "above";
        if(v208) {
          var v204 = outputWindow.document;
          var v205 = aboveNum$$1 + "\n";
          JAM.call(v204.write, v204, [v205], JAM.policy.p23);
          var v206 = outputWindow.document;
          var v207 = lineOfText$$2 + "\n";
          JAM.call(v206.write, v206, [v207], JAM.policy.p23)
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v211 = i$$7 < stopBase$$3
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
  var v599 = sequence$$13.length;
  var v466 = v599 <= firstIndexToMutate;
  var v601 = !v466;
  if(v601) {
    var v600 = lastIndexToMutate < 0;
    var v674 = !v600;
    if(v674) {
      v600 = lastIndexToMutate <= firstIndexToMutate
    }
    v466 = v600
  }
  var v212 = v466;
  if(v212) {
    numMut = 0
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for(;v220;) {
    maxNum = sequence$$13.length;
    var v467 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v213 = v467 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v213], JAM.policy.p13);
    var v468 = randNum < firstIndexToMutate;
    var v602 = !v468;
    if(v602) {
      v468 = randNum > lastIndexToMutate
    }
    var v214 = v468;
    if(v214) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v220 = i$$8 < numMut;
      continue
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p13);
    needNewChar = true;
    for(;needNewChar;) {
      var v469 = JAM.call(Math.random, Math, [], JAM.policy.p13);
      var v470 = components$$1.length;
      var v215 = v469 * v470;
      componentsIndex = JAM.call(Math.round, Math, [v215], JAM.policy.p13);
      var v471 = components$$1.length;
      var v216 = componentsIndex == v471;
      if(v216) {
        componentsIndex = 0
      }
      var v472 = components$$1[componentsIndex];
      var v217 = v472 != currentChar;
      if(v217) {
        needNewChar = false
      }
    }
    var v473 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v474 = components$$1[componentsIndex];
    var v218 = v473 + v474;
    var v475 = randNum + 1;
    var v476 = sequence$$13.length;
    var v219 = JAM.call(sequence$$13.substring, sequence$$13, [v475, v476], JAM.policy.p24);
    sequence$$13 = v218 + v219;
    i$$8 = i$$8 + 1;
    v220 = i$$8 < numMut
  }
  var v221 = outputWindow.document;
  var v222 = addReturns(sequence$$13);
  JAM.call(v221.write, v221, [v222], JAM.policy.p23);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v227 = j$$9 < lengthOut$$1;
  for(;v227;) {
    var v477 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v478 = components$$2.length;
    var v223 = v477 * v478;
    tempNum$$1 = JAM.call(Math.floor, Math, [v223], JAM.policy.p13);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v479 = sequence$$14.length;
    var v226 = v479 == 60;
    if(v226) {
      var v224 = outputWindow.document;
      var v225 = sequence$$14 + "\n";
      JAM.call(v224.write, v224, [v225], JAM.policy.p23);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v227 = j$$9 < lengthOut$$1
  }
  var v228 = outputWindow.document;
  var v229 = sequence$$14 + "\n";
  JAM.call(v228.write, v228, [v229], JAM.policy.p23);
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
  var v233 = dnaConformation == "circular";
  if(v233) {
    var v230 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v230.length;
    var v675 = sequence$$15.length;
    var v603 = v675 - lookAhead;
    var v604 = sequence$$15.length;
    var v480 = JAM.call(sequence$$15.substring, sequence$$15, [v603, v604], JAM.policy.p24);
    var v231 = v480 + sequence$$15;
    var v232 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v231 + v232;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v234 = outputWindow.document;
  JAM.call(v234.write, v234, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p14);
  var v235 = outputWindow.document;
  var v676 = '<tr><td class="title" width="200px">' + "Site:";
  var v605 = v676 + '</td><td class="title">';
  var v481 = v605 + "Positions:";
  var v236 = v481 + "</td></tr>\n";
  JAM.call(v235.write, v235, [v236], JAM.policy.p23);
  var i$$9 = 0;
  var v482 = arrayOfItems.length;
  var v252 = i$$9 < v482;
  for(;v252;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v483 = arrayOfItems[i$$9];
    var v237 = JAM.call(v483.match, v483, [/\/.+\//], JAM.policy.p13);
    matchExp = v237 + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    var v677 = arrayOfItems[i$$9];
    var v606 = JAM.call(v677.match, v677, [/\)\D*\d+/], JAM.policy.p13);
    var v484 = JAM.call(v606.toString, v606, [], JAM.policy.p13);
    var v238 = JAM.call(v484.replace, v484, [/\)\D*/, ""], JAM.policy.p13);
    cutDistance = parseFloat(v238);
    var v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p23);
    for(;v244;) {
      var v239 = matchExp.lastIndex;
      matchPosition = v239 - cutDistance;
      var v485 = matchPosition >= lowerLimit;
      if(v485) {
        v485 = matchPosition < upperLimit
      }
      var v242 = v485;
      if(v242) {
        timesFound = timesFound + 1;
        var v240 = tempString$$1 + ", ";
        var v486 = matchPosition - shiftValue;
        var v241 = v486 + 1;
        tempString$$1 = v240 + v241
      }
      var v487 = matchExp.lastIndex;
      var v607 = RegExp.lastMatch;
      var v488 = v607.length;
      var v243 = v487 - v488;
      matchExp.lastIndex = v243 + 1;
      v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p23)
    }
    var v489 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p13);
    var v245 = v489 != -1;
    if(v245) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p13)
    }
    var v249 = timesFound == 0;
    if(v249) {
      backGroundClass = "none"
    }else {
      var v248 = timesFound == 1;
      if(v248) {
        backGroundClass = "one"
      }else {
        var v247 = timesFound == 2;
        if(v247) {
          backGroundClass = "two"
        }else {
          var v246 = timesFound == 3;
          if(v246) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v250 = outputWindow.document;
    var v780 = '<tr><td class="' + backGroundClass;
    var v768 = v780 + '">';
    var v800 = arrayOfItems[i$$9];
    var v791 = JAM.call(v800.match, v800, [/\([^\(]+\)/], JAM.policy.p13);
    var v781 = JAM.call(v791.toString, v791, [], JAM.policy.p13);
    var v769 = JAM.call(v781.replace, v781, [/\(|\)/g, ""], JAM.policy.p13);
    var v752 = v768 + v769;
    var v725 = v752 + '</td><td class="';
    var v678 = v725 + backGroundClass;
    var v608 = v678 + '">';
    var v490 = v608 + tempString$$1;
    var v251 = v490 + "</td></tr>\n";
    JAM.call(v250.write, v250, [v251], JAM.policy.p23);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v491 = arrayOfItems.length;
    v252 = i$$9 < v491
  }
  var v253 = outputWindow.document;
  JAM.call(v253.write, v253, ["</tbody></table>\n"], JAM.policy.p14);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v254 = outputWindow.document;
  JAM.call(v254.write, v254, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p14);
  var v255 = outputWindow.document;
  var v753 = '<tr><td class="title">' + "Pattern:";
  var v726 = v753 + '</td><td class="title">';
  var v679 = v726 + "Times found:";
  var v609 = v679 + '</td><td class="title">';
  var v492 = v609 + "Percentage:";
  var v256 = v492 + "</td></tr>\n";
  JAM.call(v255.write, v255, [v256], JAM.policy.p23);
  var i$$10 = 0;
  var v493 = arrayOfItems$$1.length;
  var v265 = i$$10 < v493;
  for(;v265;) {
    var tempNumber = 0;
    var v494 = arrayOfItems$$1[i$$10];
    var v257 = JAM.call(v494.match, v494, [/\/[^\/]+\//], JAM.policy.p13);
    var matchExp$$1 = v257 + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    var v495 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p23);
    var v259 = v495 != -1;
    if(v259) {
      var v258 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p23);
      tempNumber = v258.length
    }
    var percentage = 0;
    var v610 = originalLength + 1;
    var v727 = arrayOfItems$$1[i$$10];
    var v680 = JAM.call(v727.match, v727, [/\d+/], JAM.policy.p13);
    var v611 = parseFloat(v680);
    var v496 = v610 - v611;
    var v262 = v496 > 0;
    if(v262) {
      var v260 = 100 * tempNumber;
      var v497 = originalLength + 1;
      var v681 = arrayOfItems$$1[i$$10];
      var v612 = JAM.call(v681.match, v681, [/\d+/], JAM.policy.p13);
      var v498 = parseFloat(v612);
      var v261 = v497 - v498;
      percentage = v260 / v261
    }
    var v263 = outputWindow.document;
    var v801 = arrayOfItems$$1[i$$10];
    var v792 = JAM.call(v801.match, v801, [/\([^\(]+\)\b/], JAM.policy.p13);
    var v782 = JAM.call(v792.toString, v792, [], JAM.policy.p13);
    var v770 = JAM.call(v782.replace, v782, [/\(|\)/g, ""], JAM.policy.p13);
    var v754 = "<tr><td>" + v770;
    var v728 = v754 + "</td><td>";
    var v682 = v728 + tempNumber;
    var v613 = v682 + "</td><td>";
    var v614 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p13);
    var v499 = v613 + v614;
    var v264 = v499 + "</td></tr>\n";
    JAM.call(v263.write, v263, [v264], JAM.policy.p23);
    i$$10 = i$$10 + 1;
    var v500 = arrayOfItems$$1.length;
    v265 = i$$10 < v500
  }
  var v266 = outputWindow.document;
  JAM.call(v266.write, v266, ["</tbody></table>\n"], JAM.policy.p14);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v501 = sequence$$17.length;
  var v273 = v501 > 0;
  for(;v273;) {
    maxNum$$1 = sequence$$17.length;
    var v502 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v267 = v502 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v267], JAM.policy.p13);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p13);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v268 = randNum$$1 + 1;
    var v269 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v268, v269], JAM.policy.p13);
    sequence$$17 = tempString1 + tempString2;
    var v503 = tempSeq.length;
    var v272 = v503 == 60;
    if(v272) {
      var v270 = outputWindow.document;
      var v271 = tempSeq + "\n";
      JAM.call(v270.write, v270, [v271], JAM.policy.p23);
      tempSeq = ""
    }
    var v504 = sequence$$17.length;
    v273 = v504 > 0
  }
  var v274 = outputWindow.document;
  var v275 = tempSeq + "\n";
  JAM.call(v274.write, v274, [v275], JAM.policy.p23);
  return true
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
  var v505 = testScript();
  var v276 = v505 == false;
  if(v276) {
    return false
  }
  var v771 = theDocument.forms;
  var v755 = v771[0];
  var v729 = v755.elements;
  var v683 = v729[0];
  var v615 = checkFormElement(v683);
  var v506 = v615 == false;
  var v617 = !v506;
  if(v617) {
    var v783 = theDocument.forms;
    var v772 = v783[0];
    var v756 = v772.elements;
    var v730 = v756[0];
    var v684 = v730.value;
    var v616 = checkTextLength(v684, maxInput$$3);
    v506 = v616 == false
  }
  var v277 = v506;
  if(v277) {
    return false
  }
  var v731 = theDocument.forms;
  var v685 = v731[0];
  var v618 = v685.elements;
  var v507 = v618[0];
  var v278 = v507.value;
  theAlignment = "X" + v278;
  alignArray$$1 = JAM.call(theAlignment.split, theAlignment, [/[>%#]/], JAM.policy.p13);
  var v508 = earlyCheckAlign(alignArray$$1);
  var v279 = v508 == false;
  if(v279) {
    return false
  }
  var i$$11 = 1;
  var v509 = alignArray$$1.length;
  var v294 = i$$11 < v509;
  for(;v294;) {
    var v280 = titleArray;
    var v281 = i$$11 - 1;
    var v510 = alignArray$$1[i$$11];
    var v837 = JAM.call(v510.match, v510, [/[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
    v280[v281] = v837;
    var v282 = titleArray;
    var v283 = i$$11 - 1;
    var v732 = i$$11 - 1;
    var v686 = titleArray[v732];
    var v619 = JAM.call(v686.toString, v686, [], JAM.policy.p13);
    var v511 = filterFastaTitle(v619);
    var v838 = JAM.call(v511.replace, v511, [/[\f\n\r]/g, ""], JAM.policy.p13);
    v282[v283] = v838;
    var v284 = titleArray;
    var v285 = i$$11 - 1;
    var v620 = i$$11 - 1;
    var v512 = titleArray[v620];
    var v839 = JAM.call(v512.substring, v512, [0, 20], JAM.policy.p13);
    v284[v285] = v839;
    var v289 = i$$11 == 1;
    if(v289) {
      var v513 = i$$11 - 1;
      var v286 = titleArray[v513];
      longestTitle = v286.length
    }else {
      var v687 = i$$11 - 1;
      var v621 = titleArray[v687];
      var v514 = v621.length;
      var v288 = v514 > longestTitle;
      if(v288) {
        var v515 = i$$11 - 1;
        var v287 = titleArray[v515];
        longestTitle = v287.length
      }
    }
    var v290 = sequenceArray$$1;
    var v291 = i$$11 - 1;
    var v516 = alignArray$$1[i$$11];
    var v840 = JAM.call(v516.replace, v516, [/[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p13);
    v290[v291] = v840;
    var v292 = sequenceArray$$1;
    var v293 = i$$11 - 1;
    var v622 = i$$11 - 1;
    var v517 = sequenceArray$$1[v622];
    var v841 = filterAlignSeq(v517);
    v292[v293] = v841;
    i$$11 = i$$11 + 1;
    var v518 = alignArray$$1.length;
    v294 = i$$11 < v518
  }
  var v519 = checkAlign(titleArray, sequenceArray$$1);
  var v295 = v519 == false;
  if(v295) {
    return false
  }
  var v757 = theDocument.forms;
  var v733 = v757[0];
  var v688 = v733.elements;
  var v623 = v688[1];
  var v520 = v623.value;
  var v296 = JAM.call(v520.replace, v520, [/\s/g, ""], JAM.policy.p13);
  groupString = JAM.call(v296.toUpperCase, v296, [], JAM.policy.p13);
  arrayOfGroups = JAM.call(groupString.split, groupString, [/,/], JAM.policy.p13);
  var v521 = checkGroupInput(arrayOfGroups);
  var v297 = v521 == false;
  if(v297) {
    return false
  }
  openWindowAlign("Ident and Sim");
  openPre();
  writeIdentAndSim(titleArray, sequenceArray$$1, arrayOfGroups);
  closePre();
  closeWindow();
  return true
}
function writeIdentAndSim(titleArray$$1, sequenceArray$$2, arrayOfGroups$$1) {
  var identical = 0;
  var similar = 0;
  var alignLength = 0;
  var k$$3 = 0;
  var v522 = sequenceArray$$2.length;
  var v323 = k$$3 < v522;
  for(;v323;) {
    var m = k$$3 + 1;
    var v523 = sequenceArray$$2.length;
    var v322 = m < v523;
    for(;v322;) {
      var i$$12 = 0;
      var v624 = sequenceArray$$2[0];
      var v524 = v624.length;
      var v302 = i$$12 < v524;
      for(;v302;) {
        alignLength = alignLength + 1;
        var v734 = sequenceArray$$2[k$$3];
        var v689 = JAM.call(v734.charAt, v734, [i$$12], JAM.policy.p23);
        var v625 = JAM.call(v689.toUpperCase, v689, [], JAM.policy.p13);
        var v735 = sequenceArray$$2[m];
        var v690 = JAM.call(v735.charAt, v735, [i$$12], JAM.policy.p23);
        var v626 = JAM.call(v690.toUpperCase, v690, [], JAM.policy.p13);
        var v525 = v625 == v626;
        if(v525) {
          var v736 = sequenceArray$$2[k$$3];
          var v691 = JAM.call(v736.charAt, v736, [i$$12], JAM.policy.p23);
          var v627 = JAM.call(v691.toUpperCase, v691, [], JAM.policy.p13);
          v525 = v627 != "X"
        }
        var v301 = v525;
        if(v301) {
          var v692 = sequenceArray$$2[k$$3];
          var v628 = JAM.call(v692.charAt, v692, [i$$12], JAM.policy.p23);
          var v526 = v628 != "-";
          if(v526) {
            var v693 = sequenceArray$$2[k$$3];
            var v629 = JAM.call(v693.charAt, v693, [i$$12], JAM.policy.p23);
            v526 = v629 != "."
          }
          var v298 = v526;
          if(v298) {
            identical = identical + 1
          }else {
            alignLength = alignLength - 1
          }
        }else {
          var j$$10 = 0;
          var v527 = arrayOfGroups$$1.length;
          var v300 = j$$10 < v527;
          for(;v300;) {
            var v694 = arrayOfGroups$$1[j$$10];
            var v758 = sequenceArray$$2[k$$3];
            var v737 = JAM.call(v758.charAt, v758, [i$$12], JAM.policy.p23);
            var v695 = JAM.call(v737.toUpperCase, v737, [], JAM.policy.p13);
            var v630 = JAM.call(v694.search, v694, [v695], JAM.policy.p23);
            var v528 = v630 != -1;
            if(v528) {
              var v696 = arrayOfGroups$$1[j$$10];
              var v759 = sequenceArray$$2[m];
              var v738 = JAM.call(v759.charAt, v759, [i$$12], JAM.policy.p23);
              var v697 = JAM.call(v738.toUpperCase, v738, [], JAM.policy.p13);
              var v631 = JAM.call(v696.search, v696, [v697], JAM.policy.p23);
              v528 = v631 != -1
            }
            var v299 = v528;
            if(v299) {
              similar = similar + 1;
              break
            }
            j$$10 = j$$10 + 1;
            var v529 = arrayOfGroups$$1.length;
            v300 = j$$10 < v529
          }
        }
        i$$12 = i$$12 + 1;
        var v632 = sequenceArray$$2[0];
        var v530 = v632.length;
        v302 = i$$12 < v530
      }
      var v303 = outputWindow.document;
      var v739 = titleArray$$1[k$$3];
      var v698 = "<b>Results for " + v739;
      var v633 = v698 + " vs ";
      var v634 = titleArray$$1[m];
      var v531 = v633 + v634;
      var v304 = v531 + ":</b>\n";
      JAM.call(v303.write, v303, [v304], JAM.policy.p23);
      var v305 = outputWindow.document;
      var v532 = "  Alignment length: " + alignLength;
      var v306 = v532 + "\n";
      JAM.call(v305.write, v305, [v306], JAM.policy.p23);
      var v307 = outputWindow.document;
      var v533 = "Identical residues: " + identical;
      var v308 = v533 + "\n";
      JAM.call(v307.write, v307, [v308], JAM.policy.p23);
      var v309 = outputWindow.document;
      var v534 = "  Similar residues: " + similar;
      var v310 = v534 + "\n";
      JAM.call(v309.write, v309, [v310], JAM.policy.p23);
      var v315 = identical == 0;
      if(v315) {
        var v311 = outputWindow.document;
        var v535 = "  Percent identity: " + 0;
        var v312 = v535 + "\n";
        JAM.call(v311.write, v311, [v312], JAM.policy.p23)
      }else {
        var v313 = outputWindow.document;
        var v740 = identical / alignLength;
        var v699 = v740 * 100;
        var v635 = JAM.call(v699.toFixed, v699, [2], JAM.policy.p13);
        var v536 = "  Percent identity: " + v635;
        var v314 = v536 + "\n";
        JAM.call(v313.write, v313, [v314], JAM.policy.p23)
      }
      var v537 = similar == 0;
      if(v537) {
        v537 = identical == 0
      }
      var v320 = v537;
      if(v320) {
        var v316 = outputWindow.document;
        var v538 = "Percent similarity: " + 0;
        var v317 = v538 + "\n";
        JAM.call(v316.write, v316, [v317], JAM.policy.p23)
      }else {
        var v318 = outputWindow.document;
        var v760 = identical + similar;
        var v741 = v760 / alignLength;
        var v700 = v741 * 100;
        var v636 = JAM.call(v700.toFixed, v700, [2], JAM.policy.p13);
        var v539 = "Percent similarity: " + v636;
        var v319 = v539 + "\n";
        JAM.call(v318.write, v318, [v319], JAM.policy.p23)
      }
      var v321 = outputWindow.document;
      JAM.call(v321.write, v321, ["\n"], JAM.policy.p14);
      identical = 0;
      similar = 0;
      alignLength = 0;
      m = m + 1;
      var v540 = sequenceArray$$2.length;
      v322 = m < v540
    }
    k$$3 = k$$3 + 1;
    var v541 = sequenceArray$$2.length;
    v323 = k$$3 < v541
  }
  return true
}
JAM.set(document, "onload", v2);
var v324 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p14);
JAM.set(v324, "onclick", v3);
var v325 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p14);
JAM.set(v325, "onclick", v4);
