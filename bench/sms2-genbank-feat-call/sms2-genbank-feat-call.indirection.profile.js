
JAM.startProfile('load');
function v4() {
  var v629 = document.forms;
  var v536 = v629[0];
  var v331 = v536.elements;
  var v5 = v331[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    genbankFeat(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v332 = document.main_form;
  var v7 = v332.main_submit;
  JAM.call(v7.focus, v7, [], JAM.policy.p9);
  return
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$12, s$$2) {
    return p1 + "\n"
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p9);
  return sequence
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v8 = arrayOfSequences[0];
  var lengthOfAlign = v8.length;
  var v333 = arrayOfSequences.length;
  var v9 = v333 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v334 = arrayOfTitles.length;
  var v11 = i$$1 < v334;
  for(;v11;) {
    var v630 = arrayOfTitles[i$$1];
    var v537 = JAM.call(v630.search, v630, [/\S/], JAM.policy.p9);
    var v335 = v537 == -1;
    var v539 = !v335;
    if(v539) {
      var v686 = arrayOfSequences[i$$1];
      var v631 = JAM.call(v686.search, v686, [/\S/], JAM.policy.p9);
      var v538 = v631 == -1;
      var v633 = !v538;
      if(v633) {
        var v687 = arrayOfSequences[i$$1];
        var v632 = v687.length;
        v538 = v632 != lengthOfAlign
      }
      v335 = v538
    }
    var v10 = v335;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v336 = arrayOfTitles.length;
    v11 = i$$1 < v336
  }
  return true
}
function checkCodonTable(codonTable) {
  var v540 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p9);
  var v337 = v540 == -1;
  var v542 = !v337;
  if(v542) {
    var v634 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p9);
    var v541 = v634 == -1;
    var v636 = !v541;
    if(v636) {
      var v688 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p9);
      var v635 = v688 == -1;
      var v690 = !v635;
      if(v690) {
        var v721 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p9);
        var v689 = v721 == -1;
        var v723 = !v689;
        if(v723) {
          var v722 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p9);
          v689 = v722 == -1
        }
        v635 = v689
      }
      v541 = v635
    }
    v337 = v541
  }
  var v12 = v337;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v543 = formElement.value;
  var v338 = JAM.call(v543.search, v543, [/\S/], JAM.policy.p9);
  var v13 = v338 == -1;
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
  var v339 = arrayOfPatterns.length;
  var v16 = z$$2 < v339;
  for(;v16;) {
    var v544 = arrayOfPatterns[z$$2];
    var v340 = JAM.call(v544.search, v544, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p9);
    var v14 = v340 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v545 = arrayOfPatterns[z$$2];
    var v341 = moreExpressionCheck(v545);
    var v15 = v341 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v342 = arrayOfPatterns.length;
    v16 = z$$2 < v342
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v343 = arrayOfPatterns.length;
  var v25 = j < v343;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    var v637 = arrayOfPatterns[j];
    var v546 = JAM.call(v637.match, v637, [/\/.+\//], JAM.policy.p9);
    var v344 = v546 + "gi";
    if(JAM.isEval(eval)) {
      var v815 = eval("introspect(JAM.policy.pFull) { " + v344 + " }")
    }else {
      var v815 = JAM.call(eval, null, [v344])
    }
    v19[v20] = v815;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    var v547 = arrayOfPatterns[j];
    var v345 = JAM.call(v547.match, v547, [/=[a-zA-Z\*]/], JAM.policy.p9);
    var v816 = JAM.call(v345.toString, v345, [], JAM.policy.p9);
    v21[v22] = v816;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    var v346 = geneticCodeMatchResult[j];
    var v817 = JAM.call(v346.replace, v346, [/=/g, ""], JAM.policy.p9);
    v23[v24] = v817;
    j = j + 1;
    var v347 = arrayOfPatterns.length;
    v25 = j < v347
  }
  var i$$2 = 0;
  var v548 = testSequence.length;
  var v348 = v548 - 3;
  var v32 = i$$2 <= v348;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v26], JAM.policy.p9);
    j = 0;
    var v349 = geneticCodeMatchExp.length;
    var v30 = j < v349;
    for(;v30;) {
      var v549 = geneticCodeMatchExp[j];
      var v350 = JAM.call(codon.search, codon, [v549], JAM.policy.p9);
      var v29 = v350 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v351 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v351 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v352 = geneticCodeMatchExp.length;
      v30 = j < v352
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v550 = testSequence.length;
    var v353 = v550 - 3;
    v32 = i$$2 <= v353
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v354 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v354;
  for(;v34;) {
    var v551 = arrayOfPatterns$$1[z$$3];
    var v355 = JAM.call(v551.search, v551, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p9);
    var v33 = v355 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v356 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v356
  }
  var i$$3 = 0;
  var v357 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v357;
  for(;v38;) {
    var v552 = arrayOfPatterns$$1[i$$3];
    var v358 = "[" + v552;
    var v35 = v358 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v359 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v359;
    for(;v37;) {
      var v553 = arrayOfPatterns$$1[j$$1];
      var v360 = JAM.call(v553.search, v553, [re], JAM.policy.p9);
      var v36 = v360 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v361 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v361
    }
    i$$3 = i$$3 + 1;
    var v362 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v362
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v363 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v363;
  for(;v41;) {
    var v554 = arrayOfPatterns$$2[z$$4];
    var v364 = JAM.call(v554.search, v554, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p9);
    var v39 = v364 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v555 = arrayOfPatterns$$2[z$$4];
    var v365 = moreExpressionCheck(v555);
    var v40 = v365 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v366 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v366
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v638 = getSequenceFromFasta(text$$7);
  var v556 = JAM.call(v638.replace, v638, [/[^A-Za-z]/g, ""], JAM.policy.p9);
  var v367 = v556.length;
  var v43 = v367 > maxInput;
  if(v43) {
    var v368 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v368 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v369 = text$$8.length;
  var v45 = v369 > maxInput$$1;
  if(v45) {
    var v370 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v370 + " characters.";
    alert(v44);
    return false
  }else {
    return true
  }
  return
}
function complement(dnaSequence) {
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p9);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p9);
  return dnaSequence
}
function closeForm() {
  var v46 = outputWindow.document;
  JAM.call(v46.write, v46, ["</form>"], JAM.policy.p9);
  return true
}
function closePre() {
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</div>"], JAM.policy.p9);
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</pre>\n"], JAM.policy.p9);
  return
}
function closeTextArea() {
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</textarea>"], JAM.policy.p9);
  return true
}
function closeWindow() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</body>\n</html>\n"], JAM.policy.p9);
  outputWindow.status = "Done.";
  var v51 = outputWindow.document;
  JAM.call(v51.close, v51, [], JAM.policy.p9);
  return true
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = JAM.call(sequence$$1.toLowerCase, sequence$$1, [], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p9);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p9);
  return sequence$$1
}
function earlyCheckAlign(alignArray) {
  var v371 = alignArray.length;
  var v52 = v371 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v372 = alignArray.length;
  var v54 = i$$4 < v372;
  for(;v54;) {
    var v557 = alignArray[i$$4];
    var v373 = JAM.call(v557.search, v557, [/[^\s]+\s/], JAM.policy.p9);
    var v53 = v373 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v374 = alignArray.length;
    v54 = i$$4 < v374
  }
  return true
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p9);
  return alignSeq
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p9);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p9);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p9);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p9)
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v375 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p9);
  var v57 = v375 != -1;
  if(v57) {
    var v56 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p9);
    for(;v56;) {
      var v55 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v55], JAM.policy.p9);
      v56 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p9)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v376 = sequence$$2.length;
  var v58 = "&gt;results for " + v376;
  var stringToReturn = v58 + " residue sequence ";
  var v377 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p9);
  var v60 = v377 != -1;
  if(v60) {
    var v378 = stringToReturn + '"';
    var v59 = v378 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v379 = stringToReturn + ' starting "';
  var v380 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p9);
  var v61 = v379 + v380;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v381 = sequenceOne.length;
  var v62 = "Search results for " + v381;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v382 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p9);
  var v64 = v382 != -1;
  if(v64) {
    var v383 = stringToReturn$$1 + '"';
    var v63 = v383 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v384 = stringToReturn$$1 + ' starting "';
  var v385 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p9);
  var v65 = v384 + v385;
  stringToReturn$$1 = v65 + '"\n';
  var v386 = stringToReturn$$1 + "and ";
  var v387 = sequenceTwo.length;
  var v66 = v386 + v387;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v388 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p9);
  var v68 = v388 != -1;
  if(v68) {
    var v389 = stringToReturn$$1 + '"';
    var v67 = v389 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v390 = stringToReturn$$1 + ' starting "';
  var v391 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p9);
  var v69 = v390 + v391;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v392 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v392;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    var v639 = arrayOfPatterns$$3[j$$2];
    var v558 = JAM.call(v639.match, v639, [/\/.+\//], JAM.policy.p9);
    var v393 = v558 + "gi";
    if(JAM.isEval(eval)) {
      var v818 = eval("introspect(JAM.policy.pFull) { " + v393 + " }")
    }else {
      var v818 = JAM.call(eval, null, [v393])
    }
    v72[v73] = v818;
    j$$2 = j$$2 + 1;
    var v394 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v394
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v395 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v395;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    var v559 = arrayOfPatterns$$4[j$$3];
    var v396 = JAM.call(v559.match, v559, [/=[a-zA-Z\*]/], JAM.policy.p9);
    var v819 = JAM.call(v396.toString, v396, [], JAM.policy.p9);
    v76[v77] = v819;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    var v397 = geneticCodeMatchResult$$1[j$$3];
    var v820 = JAM.call(v397.replace, v397, [/=/g, ""], JAM.policy.p9);
    v78[v79] = v820;
    j$$3 = j$$3 + 1;
    var v398 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v398
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v399 = sequence$$3.length;
  var v81 = "Results for " + v399;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v400 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p9);
  var v83 = v400 != -1;
  if(v83) {
    var v401 = stringToReturn$$2 + '"';
    var v82 = v401 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v402 = stringToReturn$$2 + ' starting "';
  var v403 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p9);
  var v84 = v402 + v403;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v560 = "Results for " + topology;
  var v404 = v560 + " ";
  var v405 = sequence$$4.length;
  var v86 = v404 + v405;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v406 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p9);
  var v88 = v406 != -1;
  if(v88) {
    var v407 = stringToReturn$$3 + '"';
    var v87 = v407 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v408 = stringToReturn$$3 + ' starting "';
  var v409 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p9);
  var v89 = v408 + v409;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v410 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v410;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v411 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p9);
  var v93 = v411 != -1;
  if(v93) {
    var v412 = stringToReturn$$4 + '"';
    var v92 = v412 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v413 = stringToReturn$$4 + ' starting "';
  var v414 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p9);
  var v94 = v413 + v414;
  stringToReturn$$4 = v94 + '"\n';
  var v415 = stringToReturn$$4 + "and ";
  var v416 = sequenceTwo$$1.length;
  var v95 = v415 + v416;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v417 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p9);
  var v97 = v417 != -1;
  if(v97) {
    var v418 = stringToReturn$$4 + '"';
    var v96 = v418 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v419 = stringToReturn$$4 + ' starting "';
  var v420 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p9);
  var v98 = v419 + v420;
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
    var v421 = JAM.call(Math.random, Math, [], JAM.policy.p9);
    var v422 = components.length;
    var v100 = v421 * v422;
    tempNum = JAM.call(Math.floor, Math, [v100], JAM.policy.p9);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p9);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p10)
}
function getSequenceFromFasta(sequenceRecord) {
  var v423 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p9);
  var v102 = v423 != -1;
  if(v102) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p9)
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v424 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p9);
  var v104 = v424 != -1;
  if(v104) {
    var v103 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p9);
    fastaTitle = JAM.call(v103.toString, v103, [], JAM.policy.p9);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p9);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p9);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p9)
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v561 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p9);
  var v425 = v561 != -1;
  var v563 = !v425;
  if(v563) {
    var v640 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p9);
    var v562 = v640 != -1;
    var v642 = !v562;
    if(v642) {
      var v691 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p9);
      var v641 = v691 != -1;
      var v693 = !v641;
      if(v693) {
        var v724 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p9);
        var v692 = v724 != -1;
        var v726 = !v692;
        if(v726) {
          var v739 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p9);
          var v725 = v739 != -1;
          var v741 = !v725;
          if(v741) {
            var v754 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p9);
            var v740 = v754 != -1;
            var v756 = !v740;
            if(v756) {
              var v766 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p9);
              var v755 = v766 != -1;
              var v768 = !v755;
              if(v768) {
                var v777 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p9);
                var v767 = v777 != -1;
                var v779 = !v767;
                if(v779) {
                  var v786 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p9);
                  var v778 = v786 != -1;
                  var v788 = !v778;
                  if(v788) {
                    var v793 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p9);
                    var v787 = v793 != -1;
                    var v795 = !v787;
                    if(v795) {
                      var v794 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p9);
                      v787 = v794 != -1
                    }
                    v778 = v787
                  }
                  v767 = v778
                }
                v755 = v767
              }
              v740 = v755
            }
            v725 = v740
          }
          v692 = v725
        }
        v641 = v692
      }
      v562 = v641
    }
    v425 = v562
  }
  var v105 = v425;
  if(v105) {
    return false
  }
  return true
}
function openForm() {
  var v106 = outputWindow.document;
  JAM.call(v106.write, v106, ['<form action="">\n'], JAM.policy.p9);
  return true
}
function openPre() {
  var v107 = outputWindow.document;
  JAM.call(v107.write, v107, ["<pre>"], JAM.policy.p9);
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ['<div class="pre">'], JAM.policy.p9);
  return
}
function openTextArea() {
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p9);
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p10);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p9);
  var v110 = outputWindow.document;
  var v643 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v564 = v643 + "<head>\n";
  var v426 = v564 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v426 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v110.write, v110, [v111], JAM.policy.p9);
  if(isColor) {
    var v112 = outputWindow.document;
    var v808 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v804 = v808 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v800 = v804 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v796 = v800 + "div.info {font-weight: bold}\n";
    var v789 = v796 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v780 = v789 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v769 = v780 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v757 = v769 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v742 = v757 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v727 = v742 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v694 = v727 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v644 = v694 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v565 = v644 + "td.many {color: #000000}\n";
    var v427 = v565 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v427 + "</style>\n";
    JAM.call(v112.write, v112, [v113], JAM.policy.p9)
  }else {
    var v114 = outputWindow.document;
    var v812 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v809 = v812 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v805 = v809 + "div.title {display: none}\n";
    var v801 = v805 + "div.info {font-weight: bold}\n";
    var v797 = v801 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v790 = v797 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v781 = v790 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v770 = v781 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v758 = v770 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v743 = v758 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v728 = v743 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v695 = v728 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v645 = v695 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v566 = v645 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v428 = v566 + "img {display: none}\n";
    var v115 = v428 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p9)
  }
  var v116 = outputWindow.document;
  var v646 = "</head>\n" + '<body class="main">\n';
  var v567 = v646 + '<div class="title">';
  var v429 = v567 + title$$6;
  var v117 = v429 + " results</div>\n";
  JAM.call(v116.write, v116, [v117], JAM.policy.p9);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p10);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p9);
  var v118 = outputWindow.document;
  var v647 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v568 = v647 + "<head>\n";
  var v430 = v568 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v430 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v118.write, v118, [v119], JAM.policy.p9);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v810 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v806 = v810 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v802 = v806 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v798 = v802 + "div.info {font-weight: bold}\n";
    var v791 = v798 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v782 = v791 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v771 = v782 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v759 = v771 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v744 = v759 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v729 = v744 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v696 = v729 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v648 = v696 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v569 = v648 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v431 = v569 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v431 + "</style>\n";
    JAM.call(v120.write, v120, [v121], JAM.policy.p9)
  }else {
    var v122 = outputWindow.document;
    var v814 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v813 = v814 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v811 = v813 + "div.title {display: none}\n";
    var v807 = v811 + "div.info {font-weight: bold}\n";
    var v803 = v807 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v799 = v803 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v792 = v799 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v783 = v792 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v772 = v783 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v760 = v772 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v745 = v760 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v730 = v745 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v697 = v730 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v649 = v697 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v570 = v649 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v432 = v570 + "img {display: none}\n";
    var v123 = v432 + "</style>\n";
    JAM.call(v122.write, v122, [v123], JAM.policy.p9)
  }
  var v124 = outputWindow.document;
  var v650 = "</head>\n" + '<body class="main">\n';
  var v571 = v650 + '<div class="title">';
  var v433 = v571 + title$$8;
  var v125 = v433 + " results</div>\n";
  JAM.call(v124.write, v124, [v125], JAM.policy.p9);
  outputWindow.status = "Please Wait.";
  return true
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p9)
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p9)
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p9)
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p9)
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p9)
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p9)
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p9)
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p9)
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p9)
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  var v434 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p9);
  var v126 = v434 != -1;
  if(v126) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p9);
    tempDnaArray = JAM.call(tempDnaArray.reverse, tempDnaArray, [], JAM.policy.p9);
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p10)
  }
  return dnaSequence$$1
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = JAM.call(theNumber.toString, theNumber, [], JAM.policy.p9);
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p9);
  var v435 = testArray[0];
  var v130 = v435 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v436 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p9);
  var v131 = v436 == -1;
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
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p9);
  var v133 = testString != "1X2X3X";
  if(v133) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v437 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9);
  var v134 = v437 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v438 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9);
  var v135 = v438 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v439 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p9);
  var v136 = v439 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v572 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p9);
  var v440 = v572 == -1;
  var v574 = !v440;
  if(v574) {
    var v651 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p9);
    var v573 = v651 == -1;
    var v653 = !v573;
    if(v653) {
      var v698 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p9);
      var v652 = v698 == -1;
      var v700 = !v652;
      if(v700) {
        var v699 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p9);
        v652 = v699 == -1
      }
      v573 = v652
    }
    v440 = v573
  }
  var v137 = v440;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v441 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p9);
  var v138 = v441 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v442 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v442 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v443 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p9);
  var v141 = v443 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v444 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p9);
  var v142 = v444 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v575 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p9);
  var v445 = v575 == -1;
  var v577 = !v445;
  if(v577) {
    var v654 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p9);
    var v576 = v654 == -1;
    var v656 = !v576;
    if(v656) {
      var v701 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p9);
      var v655 = v701 == -1;
      var v703 = !v655;
      if(v703) {
        var v702 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p9);
        v655 = v702 == -1
      }
      v576 = v655
    }
    v445 = v576
  }
  var v143 = v445;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v578 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p9);
  var v446 = v578 == -1;
  var v580 = !v446;
  if(v580) {
    var v657 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p9);
    var v579 = v657 == -1;
    var v659 = !v579;
    if(v659) {
      var v704 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p9);
      var v658 = v704 == -1;
      var v706 = !v658;
      if(v706) {
        var v705 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p9);
        v658 = v705 == -1
      }
      v579 = v658
    }
    v446 = v579
  }
  var v144 = v446;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v447 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p9);
  var v145 = v447 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v581 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p9);
  var v448 = v581 == -1;
  var v583 = !v448;
  if(v583) {
    var v660 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p9);
    var v582 = v660 == -1;
    var v662 = !v582;
    if(v662) {
      var v707 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p9);
      var v661 = v707 == -1;
      var v709 = !v661;
      if(v709) {
        var v708 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p9);
        v661 = v708 == -1
      }
      v582 = v661
    }
    v448 = v582
  }
  var v146 = v448;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v449 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p9);
  var v147 = v449 == -1;
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
    var v450 = basePerLine / groupSize;
    var v152 = j$$6 <= v450;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v149 = lineOfText;
        var v451 = k + i$$5;
        var v150 = JAM.call(text$$10.charAt, text$$10, [v451], JAM.policy.p9);
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v452 = basePerLine / groupSize;
      v152 = j$$6 <= v452
    }
    var v153 = outputWindow.document;
    var v154 = lineOfText + "\n";
    JAM.call(v153.write, v153, [v154], JAM.policy.p9);
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
    var v453 = adjustment < 0;
    if(v453) {
      v453 = adjusted >= 0
    }
    var v156 = v453;
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
    var v454 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v454;
    for(;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for(;v160;) {
        var v455 = i$$6 + k$$1;
        var v157 = v455 >= stopBase$$2;
        if(v157) {
          break
        }
        var v158 = lineOfText$$1;
        var v456 = k$$1 + i$$6;
        var v159 = JAM.call(text$$12.charAt, text$$12, [v456], JAM.policy.p9);
        lineOfText$$1 = v158 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if(v163) {
        var v161 = aboveNum;
        var v457 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v457, "", groupSize$$2, tabIn$$3);
        aboveNum = v161 + v162
      }
      var v164 = i$$6 >= stopBase$$2;
      if(v164) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v458 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v458
    }
    var v188 = numberPosition$$1 == "left";
    if(v188) {
      var v166 = outputWindow.document;
      var v663 = adjustNumbering(lineNum, numberingAdjustment);
      var v584 = rightNum(v663, "", 8, tabIn$$3);
      var v459 = v584 + lineOfText$$1;
      var v167 = v459 + "\n";
      JAM.call(v166.write, v166, [v167], JAM.policy.p9);
      var v171 = strands$$1 == "two";
      if(v171) {
        var v168 = outputWindow.document;
        var v664 = adjustNumbering(lineNum, numberingAdjustment);
        var v585 = rightNum(v664, "", 8, tabIn$$3);
        var v586 = complement(lineOfText$$1);
        var v460 = v585 + v586;
        var v169 = v460 + "\n";
        JAM.call(v168.write, v168, [v169], JAM.policy.p9);
        var v170 = outputWindow.document;
        JAM.call(v170.write, v170, ["\n"], JAM.policy.p9)
      }
    }else {
      var v187 = numberPosition$$1 == "right";
      if(v187) {
        var v172 = outputWindow.document;
        var v587 = lineOfText$$1;
        var v588 = adjustNumbering(i$$6, numberingAdjustment);
        var v461 = v587 + v588;
        var v173 = v461 + "\n";
        JAM.call(v172.write, v172, [v173], JAM.policy.p9);
        var v177 = strands$$1 == "two";
        if(v177) {
          var v174 = outputWindow.document;
          var v589 = complement(lineOfText$$1);
          var v590 = adjustNumbering(i$$6, numberingAdjustment);
          var v462 = v589 + v590;
          var v175 = v462 + "\n";
          JAM.call(v174.write, v174, [v175], JAM.policy.p9);
          var v176 = outputWindow.document;
          JAM.call(v176.write, v176, ["\n"], JAM.policy.p9)
        }
      }else {
        var v186 = numberPosition$$1 == "above";
        if(v186) {
          var v178 = outputWindow.document;
          var v179 = aboveNum + "\n";
          JAM.call(v178.write, v178, [v179], JAM.policy.p9);
          var v180 = outputWindow.document;
          var v181 = lineOfText$$1 + "\n";
          JAM.call(v180.write, v180, [v181], JAM.policy.p9);
          var v185 = strands$$1 == "two";
          if(v185) {
            var v182 = outputWindow.document;
            var v463 = complement(lineOfText$$1);
            var v183 = v463 + "\n";
            JAM.call(v182.write, v182, [v183], JAM.policy.p9);
            var v184 = outputWindow.document;
            JAM.call(v184.write, v184, ["\n"], JAM.policy.p9)
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
    var v464 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v464;
    for(;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for(;v193;) {
        var v465 = i$$7 + k$$2;
        var v190 = v465 >= stopBase$$3;
        if(v190) {
          break
        }
        var v191 = lineOfText$$2;
        var v466 = k$$2 + i$$7;
        var v192 = JAM.call(text$$13.charAt, text$$13, [v466], JAM.policy.p9);
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
      var v467 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v467
    }
    var v209 = numberPosition$$2 == "left";
    if(v209) {
      var v199 = outputWindow.document;
      var v591 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v468 = v591 + lineOfText$$2;
      var v200 = v468 + "\n";
      JAM.call(v199.write, v199, [v200], JAM.policy.p9)
    }else {
      var v208 = numberPosition$$2 == "right";
      if(v208) {
        var v201 = outputWindow.document;
        var v469 = lineOfText$$2 + i$$7;
        var v202 = v469 + "\n";
        JAM.call(v201.write, v201, [v202], JAM.policy.p9)
      }else {
        var v207 = numberPosition$$2 == "above";
        if(v207) {
          var v203 = outputWindow.document;
          var v204 = aboveNum$$1 + "\n";
          JAM.call(v203.write, v203, [v204], JAM.policy.p9);
          var v205 = outputWindow.document;
          var v206 = lineOfText$$2 + "\n";
          JAM.call(v205.write, v205, [v206], JAM.policy.p9)
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
  var v592 = sequence$$13.length;
  var v470 = v592 <= firstIndexToMutate;
  var v594 = !v470;
  if(v594) {
    var v593 = lastIndexToMutate < 0;
    var v665 = !v593;
    if(v665) {
      v593 = lastIndexToMutate <= firstIndexToMutate
    }
    v470 = v593
  }
  var v211 = v470;
  if(v211) {
    numMut = 0
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for(;v219;) {
    maxNum = sequence$$13.length;
    var v471 = JAM.call(Math.random, Math, [], JAM.policy.p9);
    var v212 = v471 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v212], JAM.policy.p9);
    var v472 = randNum < firstIndexToMutate;
    var v595 = !v472;
    if(v595) {
      v472 = randNum > lastIndexToMutate
    }
    var v213 = v472;
    if(v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p9);
    needNewChar = true;
    for(;needNewChar;) {
      var v473 = JAM.call(Math.random, Math, [], JAM.policy.p9);
      var v474 = components$$1.length;
      var v214 = v473 * v474;
      componentsIndex = JAM.call(Math.round, Math, [v214], JAM.policy.p9);
      var v475 = components$$1.length;
      var v215 = componentsIndex == v475;
      if(v215) {
        componentsIndex = 0
      }
      var v476 = components$$1[componentsIndex];
      var v216 = v476 != currentChar;
      if(v216) {
        needNewChar = false
      }
    }
    var v477 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p9);
    var v478 = components$$1[componentsIndex];
    var v217 = v477 + v478;
    var v479 = randNum + 1;
    var v480 = sequence$$13.length;
    var v218 = JAM.call(sequence$$13.substring, sequence$$13, [v479, v480], JAM.policy.p9);
    sequence$$13 = v217 + v218;
    i$$8 = i$$8 + 1;
    v219 = i$$8 < numMut
  }
  var v220 = outputWindow.document;
  var v221 = addReturns(sequence$$13);
  JAM.call(v220.write, v220, [v221], JAM.policy.p9);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v226 = j$$9 < lengthOut$$1;
  for(;v226;) {
    var v481 = JAM.call(Math.random, Math, [], JAM.policy.p9);
    var v482 = components$$2.length;
    var v222 = v481 * v482;
    tempNum$$1 = JAM.call(Math.floor, Math, [v222], JAM.policy.p9);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v483 = sequence$$14.length;
    var v225 = v483 == 60;
    if(v225) {
      var v223 = outputWindow.document;
      var v224 = sequence$$14 + "\n";
      JAM.call(v223.write, v223, [v224], JAM.policy.p9);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v226 = j$$9 < lengthOut$$1
  }
  var v227 = outputWindow.document;
  var v228 = sequence$$14 + "\n";
  JAM.call(v227.write, v227, [v228], JAM.policy.p9);
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
    var v229 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p9);
    shiftValue = v229.length;
    var v666 = sequence$$15.length;
    var v596 = v666 - lookAhead;
    var v597 = sequence$$15.length;
    var v484 = JAM.call(sequence$$15.substring, sequence$$15, [v596, v597], JAM.policy.p9);
    var v230 = v484 + sequence$$15;
    var v231 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p9);
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v233 = outputWindow.document;
  JAM.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v234 = outputWindow.document;
  var v667 = '<tr><td class="title" width="200px">' + "Site:";
  var v598 = v667 + '</td><td class="title">';
  var v485 = v598 + "Positions:";
  var v235 = v485 + "</td></tr>\n";
  JAM.call(v234.write, v234, [v235], JAM.policy.p9);
  var i$$9 = 0;
  var v486 = arrayOfItems.length;
  var v251 = i$$9 < v486;
  for(;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v487 = arrayOfItems[i$$9];
    var v236 = JAM.call(v487.match, v487, [/\/.+\//], JAM.policy.p9);
    matchExp = v236 + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    var v668 = arrayOfItems[i$$9];
    var v599 = JAM.call(v668.match, v668, [/\)\D*\d+/], JAM.policy.p9);
    var v488 = JAM.call(v599.toString, v599, [], JAM.policy.p9);
    var v237 = JAM.call(v488.replace, v488, [/\)\D*/, ""], JAM.policy.p9);
    cutDistance = parseFloat(v237);
    var v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p9);
    for(;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v489 = matchPosition >= lowerLimit;
      if(v489) {
        v489 = matchPosition < upperLimit
      }
      var v241 = v489;
      if(v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v490 = matchPosition - shiftValue;
        var v240 = v490 + 1;
        tempString$$1 = v239 + v240
      }
      var v491 = matchExp.lastIndex;
      var v600 = RegExp.lastMatch;
      var v492 = v600.length;
      var v242 = v491 - v492;
      matchExp.lastIndex = v242 + 1;
      v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p9)
    }
    var v493 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p9);
    var v244 = v493 != -1;
    if(v244) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p9)
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
    var v761 = '<tr><td class="' + backGroundClass;
    var v746 = v761 + '">';
    var v784 = arrayOfItems[i$$9];
    var v773 = JAM.call(v784.match, v784, [/\([^\(]+\)/], JAM.policy.p9);
    var v762 = JAM.call(v773.toString, v773, [], JAM.policy.p9);
    var v747 = JAM.call(v762.replace, v762, [/\(|\)/g, ""], JAM.policy.p9);
    var v731 = v746 + v747;
    var v710 = v731 + '</td><td class="';
    var v669 = v710 + backGroundClass;
    var v601 = v669 + '">';
    var v494 = v601 + tempString$$1;
    var v250 = v494 + "</td></tr>\n";
    JAM.call(v249.write, v249, [v250], JAM.policy.p9);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v495 = arrayOfItems.length;
    v251 = i$$9 < v495
  }
  var v252 = outputWindow.document;
  JAM.call(v252.write, v252, ["</tbody></table>\n"], JAM.policy.p9);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v253 = outputWindow.document;
  JAM.call(v253.write, v253, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v254 = outputWindow.document;
  var v732 = '<tr><td class="title">' + "Pattern:";
  var v711 = v732 + '</td><td class="title">';
  var v670 = v711 + "Times found:";
  var v602 = v670 + '</td><td class="title">';
  var v496 = v602 + "Percentage:";
  var v255 = v496 + "</td></tr>\n";
  JAM.call(v254.write, v254, [v255], JAM.policy.p9);
  var i$$10 = 0;
  var v497 = arrayOfItems$$1.length;
  var v264 = i$$10 < v497;
  for(;v264;) {
    var tempNumber = 0;
    var v498 = arrayOfItems$$1[i$$10];
    var v256 = JAM.call(v498.match, v498, [/\/[^\/]+\//], JAM.policy.p9);
    var matchExp$$1 = v256 + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    var v499 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p9);
    var v258 = v499 != -1;
    if(v258) {
      var v257 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p9);
      tempNumber = v257.length
    }
    var percentage = 0;
    var v603 = originalLength + 1;
    var v712 = arrayOfItems$$1[i$$10];
    var v671 = JAM.call(v712.match, v712, [/\d+/], JAM.policy.p9);
    var v604 = parseFloat(v671);
    var v500 = v603 - v604;
    var v261 = v500 > 0;
    if(v261) {
      var v259 = 100 * tempNumber;
      var v501 = originalLength + 1;
      var v672 = arrayOfItems$$1[i$$10];
      var v605 = JAM.call(v672.match, v672, [/\d+/], JAM.policy.p9);
      var v502 = parseFloat(v605);
      var v260 = v501 - v502;
      percentage = v259 / v260
    }
    var v262 = outputWindow.document;
    var v785 = arrayOfItems$$1[i$$10];
    var v774 = JAM.call(v785.match, v785, [/\([^\(]+\)\b/], JAM.policy.p9);
    var v763 = JAM.call(v774.toString, v774, [], JAM.policy.p9);
    var v748 = JAM.call(v763.replace, v763, [/\(|\)/g, ""], JAM.policy.p9);
    var v733 = "<tr><td>" + v748;
    var v713 = v733 + "</td><td>";
    var v673 = v713 + tempNumber;
    var v606 = v673 + "</td><td>";
    var v607 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9);
    var v503 = v606 + v607;
    var v263 = v503 + "</td></tr>\n";
    JAM.call(v262.write, v262, [v263], JAM.policy.p9);
    i$$10 = i$$10 + 1;
    var v504 = arrayOfItems$$1.length;
    v264 = i$$10 < v504
  }
  var v265 = outputWindow.document;
  JAM.call(v265.write, v265, ["</tbody></table>\n"], JAM.policy.p9);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v505 = sequence$$17.length;
  var v272 = v505 > 0;
  for(;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v506 = JAM.call(Math.random, Math, [], JAM.policy.p9);
    var v266 = v506 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v266], JAM.policy.p9);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p9);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p9);
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v267, v268], JAM.policy.p9);
    sequence$$17 = tempString1 + tempString2;
    var v507 = tempSeq.length;
    var v271 = v507 == 60;
    if(v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      JAM.call(v269.write, v269, [v270], JAM.policy.p9);
      tempSeq = ""
    }
    var v508 = sequence$$17.length;
    v272 = v508 > 0
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  JAM.call(v273.write, v273, [v274], JAM.policy.p9);
  return true
}
function genbankFeat(theDocument) {
  JAM.startProfile('compute');

  var maxInput$$3 = 1E6;
  var v509 = testScript();
  var v275 = v509 == false;
  if(v275) {
    return false
  }
  var v749 = theDocument.forms;
  var v734 = v749[0];
  var v714 = v734.elements;
  var v674 = v714[0];
  var v608 = checkFormElement(v674);
  var v510 = v608 == false;
  var v610 = !v510;
  if(v610) {
    var v775 = theDocument.forms;
    var v764 = v775[0];
    var v750 = v764.elements;
    var v735 = v750[0];
    var v715 = v735.value;
    var v675 = verifyGenBankFeat(v715);
    var v609 = v675 == false;
    var v677 = !v609;
    if(v677) {
      var v776 = theDocument.forms;
      var v765 = v776[0];
      var v751 = v765.elements;
      var v736 = v751[0];
      var v716 = v736.value;
      var v676 = checkTextLength(v716, maxInput$$3);
      v609 = v676 == false
    }
    v510 = v609
  }
  var v276 = v510;
  if(v276) {
    return false
  }
  openWindow("GenBank Feature Extractor");
  openPre();
  var v717 = theDocument.forms;
  var v678 = v717[0];
  var v611 = v678.elements;
  var v511 = v611[0];
  var v277 = v511.value;
  var v752 = theDocument.forms;
  var v737 = v752[0];
  var v718 = v737.elements;
  var v679 = v718[4];
  var v612 = v679.options;
  var v753 = theDocument.forms;
  var v738 = v753[0];
  var v719 = v738.elements;
  var v680 = v719[4];
  var v613 = v680.selectedIndex;
  var v512 = v612[v613];
  var v278 = v512.value;
  genBankFeatExtract(v277, v278);
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function genBankFeatExtract(genBankFile$$2, outputType) {
  var v279 = "_" + genBankFile$$2;
  genBankFile$$2 = v279 + "_";
  var recordArray = JAM.call(genBankFile$$2.split, genBankFile$$2, [/LOCUS\s\s\s[^\f\n\r]*/m], JAM.policy.p9);
  var i$$11 = 1;
  var v513 = recordArray.length;
  var v288 = i$$11 < v513;
  for(;v288;) {
    var v280 = recordArray[i$$11];
    var mainArray = JAM.call(v280.split, v280, [/DEFINITION|ACCESSION|FEATURES|ORIGIN[^\f\n\r]*/], JAM.policy.p9);
    var v614 = mainArray[1];
    var v514 = JAM.call(v614.replace, v614, [/[\f\n\r\t]+$/g, ""], JAM.policy.p9);
    var v281 = filterFastaTitle(v514);
    var title$$9 = v281 + "\n";
    var v282 = mainArray[4];
    var dnaSequenceArray = JAM.call(v282.split, v282, [/\/{2}/], JAM.policy.p9);
    var v283 = outputWindow.document;
    var v284 = title$$9 + "\n";
    JAM.call(v283.write, v283, [v284], JAM.policy.p9);
    var v515 = dnaSequenceArray.length;
    var v285 = v515 == 1;
    if(v285) {
      alert("The entire GenBank file may not have been processed.");
      JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p9)
    }
    var v286 = dnaSequenceArray[0];
    var dnaSequence$$3 = removeNonDna(v286);
    var v287 = mainArray[3];
    var featureArray = JAM.call(v287.split, v287, [/[\f\n\r] {5,12}\b/], JAM.policy.p9);
    prepareFeatures(featureArray, dnaSequence$$3, outputType);
    i$$11 = i$$11 + 1;
    var v516 = recordArray.length;
    v288 = i$$11 < v516
  }
  return true
}
function prepareFeatures(arrayOfFeatures, dnaSequence$$4, outputType$$1) {
  var featureTitle = "";
  var theTitle = "";
  var removedTitle = "";
  var firstQualifier = "";
  var position = "";
  var positionNoSpace = "";
  var featureFound = false;
  var i$$12 = 1;
  var v517 = arrayOfFeatures.length;
  var v299 = i$$12 < v517;
  for(;v299;) {
    var v289 = arrayOfFeatures;
    var v290 = i$$12;
    var v518 = arrayOfFeatures[i$$12];
    var v821 = JAM.call(v518.replace, v518, [/[\[\]\*]/g, ""], JAM.policy.p9);
    v289[v290] = v821;
    var v519 = arrayOfFeatures[i$$12];
    var v291 = JAM.call(v519.match, v519, [/[^ \f\n\r\t\v]+ /], JAM.policy.p9);
    featureTitle = JAM.call(v291.toString, v291, [], JAM.policy.p9);
    theTitle = new RegExp(featureTitle);
    var v292 = arrayOfFeatures[i$$12];
    removedTitle = JAM.call(v292.replace, v292, [theTitle, ""], JAM.policy.p9);
    var v615 = arrayOfFeatures[i$$12];
    var v520 = JAM.call(v615.search, v615, [/\/[^\f\n\r]+/], JAM.policy.p9);
    var v294 = v520 != -1;
    if(v294) {
      var v521 = arrayOfFeatures[i$$12];
      var v293 = JAM.call(v521.match, v521, [/\/[^\f\n\r]+/], JAM.policy.p9);
      firstQualifier = JAM.call(v293.toString, v293, [], JAM.policy.p9)
    }else {
      firstQualifier = "/no qualifier supplied"
    }
    position = JAM.call(removedTitle.split, removedTitle, [/\//], JAM.policy.p9);
    var v295 = position[0];
    positionNoSpace = JAM.call(v295.replace, v295, [/\s{2,}/g, " "], JAM.policy.p9);
    var v296 = outputWindow.document;
    var v681 = filterFastaTitle(featureTitle);
    var v616 = "&gt;" + v681;
    var v617 = filterFastaTitle(firstQualifier);
    var v522 = v616 + v617;
    var v297 = v522 + "\n";
    JAM.call(v296.write, v296, [v297], JAM.policy.p9);
    printFeature(positionNoSpace, dnaSequence$$4, outputType$$1);
    featureFound = true;
    var v298 = outputWindow.document;
    JAM.call(v298.write, v298, ["\n\n"], JAM.policy.p9);
    i$$12 = i$$12 + 1;
    var v523 = arrayOfFeatures.length;
    v299 = i$$12 < v523
  }
  var v301 = featureFound == false;
  if(v301) {
    var v300 = outputWindow.document;
    JAM.call(v300.write, v300, ["There were no features found or there was a problem reading the feature information."], JAM.policy.p9)
  }
  return true
}
function printFeature(featurePos, dnaSequence$$5, outputType$$2) {
  var feature$$4;
  featurePos = JAM.call(featurePos.replace, featurePos, [/<|>/g, ""], JAM.policy.p9);
  var v618 = JAM.call(featurePos.search, featurePos, [/[^a-z\d\.\(\)\,\s]/], JAM.policy.p9);
  var v524 = v618 != -1;
  var v620 = !v524;
  if(v620) {
    var v682 = JAM.call(featurePos.search, featurePos, [/one/], JAM.policy.p9);
    var v619 = v682 != -1;
    var v684 = !v619;
    if(v684) {
      var v683 = JAM.call(featurePos.search, featurePos, [/order/], JAM.policy.p9);
      v619 = v683 != -1
    }
    v524 = v619
  }
  var v320 = v524;
  if(v320) {
    var v302 = outputWindow.document;
    JAM.call(v302.write, v302, ["This feature specifies a sequence that cannot be represented:\n"], JAM.policy.p9);
    var v303 = outputWindow.document;
    JAM.call(v303.write, v303, [featurePos], JAM.policy.p9)
  }else {
    var newFeaturePos = JAM.call(featurePos.replace, featurePos, [/\)/g, ""], JAM.policy.p9);
    var v525 = JAM.call(newFeaturePos.search, newFeaturePos, [/complement/], JAM.policy.p9);
    var v304 = v525 != -1;
    if(v304) {
      feature$$4 = new Feature("complement")
    }else {
      feature$$4 = new Feature("direct")
    }
    var posArray = JAM.call(newFeaturePos.split, newFeaturePos, [/\(/], JAM.policy.p9);
    var v305 = posArray.length;
    var last = v305 - 1;
    var pairString = posArray[last];
    var pairArray = JAM.call(pairString.split, pairString, [/\,/], JAM.policy.p9);
    var digitArray = new Array;
    var realStart = 0;
    var realStop = 0;
    var j$$10 = 0;
    var v526 = pairArray.length;
    var v319 = j$$10 < v526;
    for(;v319;) {
      var v306 = pairArray[j$$10];
      digitArray = JAM.call(v306.split, v306, [/\.\./], JAM.policy.p9);
      var v527 = digitArray.length;
      var v307 = v527 == 1;
      if(v307) {
        digitArray[1] = digitArray[0]
      }
      realStart = digitArray[0];
      realStop = digitArray[1];
      realStop = JAM.call(realStop.replace, realStop, [/\D/g, ""], JAM.policy.p9);
      realStart = JAM.call(realStart.replace, realStart, [/\D/g, ""], JAM.policy.p9);
      var v621 = JAM.call(realStart.search, realStart, [/\d/], JAM.policy.p9);
      var v528 = v621 == -1;
      var v623 = !v528;
      if(v623) {
        var v622 = JAM.call(realStop.search, realStop, [/\d/], JAM.policy.p9);
        v528 = v622 == -1
      }
      var v309 = v528;
      if(v309) {
        var v308 = outputWindow.document;
        JAM.call(v308.write, v308, ["There was a problem with this feature (one of the range values was missing)."], JAM.policy.p9);
        return true
      }
      var v310 = parseInt(realStart);
      realStart = v310 - 1;
      realStop = parseInt(realStop);
      var v312 = realStart > realStop;
      if(v312) {
        var v311 = outputWindow.document;
        JAM.call(v311.write, v311, ["There was a problem with this feature (the end position was before the start position)."], JAM.policy.p9);
        return true
      }
      var v624 = dnaSequence$$5.length;
      var v529 = realStart > v624;
      var v626 = !v529;
      if(v626) {
        var v625 = dnaSequence$$5.length;
        v529 = realStop > v625
      }
      var v318 = v529;
      if(v318) {
        var v313 = outputWindow.document;
        JAM.call(v313.write, v313, ["The entire GenBank file was not processed, so this feature cannot be properly shown."], JAM.policy.p9);
        return true
      }else {
        var v317 = outputType$$2 == "separated";
        if(v317) {
          var v314 = JAM.call(dnaSequence$$5.substring, dnaSequence$$5, [realStart, realStop], JAM.policy.p9);
          JAM.call(feature$$4.addFragment, feature$$4, [v314], JAM.policy.p9)
        }else {
          var v530 = feature$$4.lastAdded;
          var v315 = JAM.call(dnaSequence$$5.substring, dnaSequence$$5, [v530, realStart], JAM.policy.p9);
          JAM.call(feature$$4.addFragment, feature$$4, [v315], JAM.policy.p9);
          var v531 = JAM.call(dnaSequence$$5.substring, dnaSequence$$5, [realStart, realStop], JAM.policy.p9);
          var v316 = JAM.call(v531.toUpperCase, v531, [], JAM.policy.p9);
          JAM.call(feature$$4.addFragment, feature$$4, [v316], JAM.policy.p9);
          feature$$4.lastAdded = realStop
        }
      }
      j$$10 = j$$10 + 1;
      var v532 = pairArray.length;
      v319 = j$$10 < v532
    }
    JAM.call(feature$$4.writeFeature, feature$$4, [], JAM.policy.p9)
  }
  return true
}
function writeFeature() {
  var v533 = this.strand;
  var v325 = v533 == "complement";
  if(v325) {
    var v321 = outputWindow.document;
    var v720 = this.fragments;
    var v685 = JAM.call(v720.join, v720, [""], JAM.policy.p10);
    var v627 = complement(v685);
    var v534 = reverse(v627);
    var v322 = addReturns(v534);
    JAM.call(v321.write, v321, [v322], JAM.policy.p9)
  }else {
    var v323 = outputWindow.document;
    var v628 = this.fragments;
    var v535 = JAM.call(v628.join, v628, [""], JAM.policy.p10);
    var v324 = addReturns(v535);
    JAM.call(v323.write, v323, [v324], JAM.policy.p9)
  }
  return
}
function addFragment(sequence$$18) {
  var v326 = this.fragments;
  JAM.call(v326.push, v326, [sequence$$18], JAM.policy.p9);
  return
}
function Feature(strand) {
  this.strand = strand;
  var v822 = new Array;
  this.fragments = v822;
  this.lastAdded = 0;
  return
}
new Feature;
var v327 = Feature.prototype;
v327.writeFeature = writeFeature;
var v328 = Feature.prototype;
v328.addFragment = addFragment;
JAM.set(document, "onload", v2);
var v329 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9);
JAM.set(v329, "onclick", v3);
var v330 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9);
JAM.set(v330, "onclick", v4);

JAM.stopProfile('load');
