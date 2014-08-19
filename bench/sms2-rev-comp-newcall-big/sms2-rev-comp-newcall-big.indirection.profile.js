
JAM.startProfile('load');
function v4() {
  var v564 = document.forms;
  var v485 = v564[0];
  var v295 = v485.elements;
  var v5 = v295[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    revComp(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v296 = document.main_form;
  var v7 = v296.main_submit;
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
  var v297 = arrayOfSequences.length;
  var v9 = v297 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v298 = arrayOfTitles.length;
  var v11 = i$$1 < v298;
  for(;v11;) {
    var v565 = arrayOfTitles[i$$1];
    var v486 = JAM.call(v565.search, v565, [/\S/], JAM.policy.p13);
    var v299 = v486 == -1;
    var v488 = !v299;
    if(v488) {
      var v618 = arrayOfSequences[i$$1];
      var v566 = JAM.call(v618.search, v618, [/\S/], JAM.policy.p13);
      var v487 = v566 == -1;
      var v568 = !v487;
      if(v568) {
        var v619 = arrayOfSequences[i$$1];
        var v567 = v619.length;
        v487 = v567 != lengthOfAlign
      }
      v299 = v487
    }
    var v10 = v299;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v300 = arrayOfTitles.length;
    v11 = i$$1 < v300
  }
  return true
}
function checkCodonTable(codonTable) {
  var v489 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p13);
  var v301 = v489 == -1;
  var v491 = !v301;
  if(v491) {
    var v569 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p13);
    var v490 = v569 == -1;
    var v571 = !v490;
    if(v571) {
      var v620 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p13);
      var v570 = v620 == -1;
      var v622 = !v570;
      if(v622) {
        var v655 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p13);
        var v621 = v655 == -1;
        var v657 = !v621;
        if(v657) {
          var v656 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p13);
          v621 = v656 == -1
        }
        v570 = v621
      }
      v490 = v570
    }
    v301 = v490
  }
  var v12 = v301;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v492 = formElement.value;
  var v302 = JAM.call(v492.search, v492, [/\S/], JAM.policy.p13);
  var v13 = v302 == -1;
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
  var v303 = arrayOfPatterns.length;
  var v16 = z$$2 < v303;
  for(;v16;) {
    var v493 = arrayOfPatterns[z$$2];
    var v304 = JAM.call(v493.search, v493, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p13);
    var v14 = v304 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v494 = arrayOfPatterns[z$$2];
    var v305 = moreExpressionCheck(v494);
    var v15 = v305 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v306 = arrayOfPatterns.length;
    v16 = z$$2 < v306
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v307 = arrayOfPatterns.length;
  var v25 = j < v307;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    var v572 = arrayOfPatterns[j];
    var v495 = JAM.call(v572.match, v572, [/\/.+\//], JAM.policy.p13);
    var v308 = v495 + "gi";
    if(JAM.isEval(eval)) {
      var v758 = eval("introspect(JAM.policy.pFull) { " + v308 + " }")
    }else {
      var v758 = JAM.call(eval, null, [v308])
    }
    v19[v20] = v758;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    var v496 = arrayOfPatterns[j];
    var v309 = JAM.call(v496.match, v496, [/=[a-zA-Z\*]/], JAM.policy.p13);
    var v759 = JAM.call(v309.toString, v309, [], JAM.policy.p13);
    v21[v22] = v759;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    var v310 = geneticCodeMatchResult[j];
    var v760 = JAM.call(v310.replace, v310, [/=/g, ""], JAM.policy.p13);
    v23[v24] = v760;
    j = j + 1;
    var v311 = arrayOfPatterns.length;
    v25 = j < v311
  }
  var i$$2 = 0;
  var v497 = testSequence.length;
  var v312 = v497 - 3;
  var v32 = i$$2 <= v312;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v26], JAM.policy.p13);
    j = 0;
    var v313 = geneticCodeMatchExp.length;
    var v30 = j < v313;
    for(;v30;) {
      var v498 = geneticCodeMatchExp[j];
      var v314 = JAM.call(codon.search, codon, [v498], JAM.policy.p23);
      var v29 = v314 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v315 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v315 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v316 = geneticCodeMatchExp.length;
      v30 = j < v316
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v499 = testSequence.length;
    var v317 = v499 - 3;
    v32 = i$$2 <= v317
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v318 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v318;
  for(;v34;) {
    var v500 = arrayOfPatterns$$1[z$$3];
    var v319 = JAM.call(v500.search, v500, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p13);
    var v33 = v319 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v320 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v320
  }
  var i$$3 = 0;
  var v321 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v321;
  for(;v38;) {
    var v501 = arrayOfPatterns$$1[i$$3];
    var v322 = "[" + v501;
    var v35 = v322 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v323 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v323;
    for(;v37;) {
      var v502 = arrayOfPatterns$$1[j$$1];
      var v324 = JAM.call(v502.search, v502, [re], JAM.policy.p23);
      var v36 = v324 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v325 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v325
    }
    i$$3 = i$$3 + 1;
    var v326 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v326
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v327 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v327;
  for(;v41;) {
    var v503 = arrayOfPatterns$$2[z$$4];
    var v328 = JAM.call(v503.search, v503, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p13);
    var v39 = v328 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v504 = arrayOfPatterns$$2[z$$4];
    var v329 = moreExpressionCheck(v504);
    var v40 = v329 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v330 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v330
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v573 = getSequenceFromFasta(text$$7);
  var v505 = JAM.call(v573.replace, v573, [/[^A-Za-z]/g, ""], JAM.policy.p13);
  var v331 = v505.length;
  var v43 = v331 > maxInput;
  if(v43) {
    var v332 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v332 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v333 = text$$8.length;
  var v45 = v333 > maxInput$$1;
  if(v45) {
    var v334 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v334 + " characters.";
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
  var v335 = alignArray.length;
  var v52 = v335 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v336 = alignArray.length;
  var v54 = i$$4 < v336;
  for(;v54;) {
    var v506 = alignArray[i$$4];
    var v337 = JAM.call(v506.search, v506, [/[^\s]+\s/], JAM.policy.p13);
    var v53 = v337 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v338 = alignArray.length;
    v54 = i$$4 < v338
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
  var v339 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v57 = v339 != -1;
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
  var v340 = sequence$$2.length;
  var v58 = "&gt;results for " + v340;
  var stringToReturn = v58 + " residue sequence ";
  var v341 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p13);
  var v60 = v341 != -1;
  if(v60) {
    var v342 = stringToReturn + '"';
    var v59 = v342 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v343 = stringToReturn + ' starting "';
  var v344 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v61 = v343 + v344;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v345 = sequenceOne.length;
  var v62 = "Search results for " + v345;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v346 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p13);
  var v64 = v346 != -1;
  if(v64) {
    var v347 = stringToReturn$$1 + '"';
    var v63 = v347 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v348 = stringToReturn$$1 + ' starting "';
  var v349 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v65 = v348 + v349;
  stringToReturn$$1 = v65 + '"\n';
  var v350 = stringToReturn$$1 + "and ";
  var v351 = sequenceTwo.length;
  var v66 = v350 + v351;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v352 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p13);
  var v68 = v352 != -1;
  if(v68) {
    var v353 = stringToReturn$$1 + '"';
    var v67 = v353 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v354 = stringToReturn$$1 + ' starting "';
  var v355 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v69 = v354 + v355;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v356 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v356;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    var v574 = arrayOfPatterns$$3[j$$2];
    var v507 = JAM.call(v574.match, v574, [/\/.+\//], JAM.policy.p13);
    var v357 = v507 + "gi";
    if(JAM.isEval(eval)) {
      var v761 = eval("introspect(JAM.policy.pFull) { " + v357 + " }")
    }else {
      var v761 = JAM.call(eval, null, [v357])
    }
    v72[v73] = v761;
    j$$2 = j$$2 + 1;
    var v358 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v358
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v359 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v359;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    var v508 = arrayOfPatterns$$4[j$$3];
    var v360 = JAM.call(v508.match, v508, [/=[a-zA-Z\*]/], JAM.policy.p13);
    var v762 = JAM.call(v360.toString, v360, [], JAM.policy.p13);
    v76[v77] = v762;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    var v361 = geneticCodeMatchResult$$1[j$$3];
    var v763 = JAM.call(v361.replace, v361, [/=/g, ""], JAM.policy.p13);
    v78[v79] = v763;
    j$$3 = j$$3 + 1;
    var v362 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v362
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v363 = sequence$$3.length;
  var v81 = "Results for " + v363;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v364 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p13);
  var v83 = v364 != -1;
  if(v83) {
    var v365 = stringToReturn$$2 + '"';
    var v82 = v365 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v366 = stringToReturn$$2 + ' starting "';
  var v367 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v84 = v366 + v367;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v509 = "Results for " + topology;
  var v368 = v509 + " ";
  var v369 = sequence$$4.length;
  var v86 = v368 + v369;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v370 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p13);
  var v88 = v370 != -1;
  if(v88) {
    var v371 = stringToReturn$$3 + '"';
    var v87 = v371 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v372 = stringToReturn$$3 + ' starting "';
  var v373 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v89 = v372 + v373;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v374 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v374;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v375 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p13);
  var v93 = v375 != -1;
  if(v93) {
    var v376 = stringToReturn$$4 + '"';
    var v92 = v376 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v377 = stringToReturn$$4 + ' starting "';
  var v378 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v94 = v377 + v378;
  stringToReturn$$4 = v94 + '"\n';
  var v379 = stringToReturn$$4 + "and ";
  var v380 = sequenceTwo$$1.length;
  var v95 = v379 + v380;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v381 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p13);
  var v97 = v381 != -1;
  if(v97) {
    var v382 = stringToReturn$$4 + '"';
    var v96 = v382 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v383 = stringToReturn$$4 + ' starting "';
  var v384 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v98 = v383 + v384;
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
    var v385 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v386 = components.length;
    var v100 = v385 * v386;
    tempNum = JAM.call(Math.floor, Math, [v100], JAM.policy.p13);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p23);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p14)
}
function getSequenceFromFasta(sequenceRecord) {
  var v387 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v102 = v387 != -1;
  if(v102) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p13)
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v388 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v104 = v388 != -1;
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
  var v510 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p13);
  var v389 = v510 != -1;
  var v512 = !v389;
  if(v512) {
    var v575 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p13);
    var v511 = v575 != -1;
    var v577 = !v511;
    if(v577) {
      var v623 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p13);
      var v576 = v623 != -1;
      var v625 = !v576;
      if(v625) {
        var v658 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p13);
        var v624 = v658 != -1;
        var v660 = !v624;
        if(v660) {
          var v676 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p13);
          var v659 = v676 != -1;
          var v678 = !v659;
          if(v678) {
            var v694 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p13);
            var v677 = v694 != -1;
            var v696 = !v677;
            if(v696) {
              var v711 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p13);
              var v695 = v711 != -1;
              var v713 = !v695;
              if(v713) {
                var v720 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p13);
                var v712 = v720 != -1;
                var v722 = !v712;
                if(v722) {
                  var v729 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p13);
                  var v721 = v729 != -1;
                  var v731 = !v721;
                  if(v731) {
                    var v736 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p13);
                    var v730 = v736 != -1;
                    var v738 = !v730;
                    if(v738) {
                      var v737 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p13);
                      v730 = v737 != -1
                    }
                    v721 = v730
                  }
                  v712 = v721
                }
                v695 = v712
              }
              v677 = v695
            }
            v659 = v677
          }
          v624 = v659
        }
        v576 = v624
      }
      v511 = v576
    }
    v389 = v511
  }
  var v105 = v389;
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
  var v578 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v513 = v578 + "<head>\n";
  var v390 = v513 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v390 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v110.write, v110, [v111], JAM.policy.p23);
  if(isColor) {
    var v112 = outputWindow.document;
    var v751 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v747 = v751 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v743 = v747 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v739 = v743 + "div.info {font-weight: bold}\n";
    var v732 = v739 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v723 = v732 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v714 = v723 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v697 = v714 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v679 = v697 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v661 = v679 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v626 = v661 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v579 = v626 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v514 = v579 + "td.many {color: #000000}\n";
    var v391 = v514 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v391 + "</style>\n";
    JAM.call(v112.write, v112, [v113], JAM.policy.p23)
  }else {
    var v114 = outputWindow.document;
    var v755 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v752 = v755 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v748 = v752 + "div.title {display: none}\n";
    var v744 = v748 + "div.info {font-weight: bold}\n";
    var v740 = v744 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v733 = v740 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v724 = v733 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v715 = v724 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v698 = v715 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v680 = v698 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v662 = v680 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v627 = v662 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v580 = v627 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v515 = v580 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v392 = v515 + "img {display: none}\n";
    var v115 = v392 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p23)
  }
  var v116 = outputWindow.document;
  var v581 = "</head>\n" + '<body class="main">\n';
  var v516 = v581 + '<div class="title">';
  var v393 = v516 + title$$6;
  var v117 = v393 + " results</div>\n";
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
  var v582 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v517 = v582 + "<head>\n";
  var v394 = v517 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v394 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v118.write, v118, [v119], JAM.policy.p23);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v753 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v749 = v753 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v745 = v749 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v741 = v745 + "div.info {font-weight: bold}\n";
    var v734 = v741 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v725 = v734 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v716 = v725 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v699 = v716 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v681 = v699 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v663 = v681 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v628 = v663 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v583 = v628 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v518 = v583 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v395 = v518 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v395 + "</style>\n";
    JAM.call(v120.write, v120, [v121], JAM.policy.p23)
  }else {
    var v122 = outputWindow.document;
    var v757 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v756 = v757 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v754 = v756 + "div.title {display: none}\n";
    var v750 = v754 + "div.info {font-weight: bold}\n";
    var v746 = v750 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v742 = v746 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v735 = v742 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v726 = v735 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v717 = v726 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v700 = v717 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v682 = v700 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v664 = v682 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v629 = v664 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v584 = v629 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v519 = v584 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v396 = v519 + "img {display: none}\n";
    var v123 = v396 + "</style>\n";
    JAM.call(v122.write, v122, [v123], JAM.policy.p23)
  }
  var v124 = outputWindow.document;
  var v585 = "</head>\n" + '<body class="main">\n';
  var v520 = v585 + '<div class="title">';
  var v397 = v520 + title$$8;
  var v125 = v397 + " results</div>\n";
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
  var v398 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p13);
  var v126 = v398 != -1;
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
  var v399 = testArray[0];
  var v130 = v399 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v400 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p23);
  var v131 = v400 == -1;
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
  var v401 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p13);
  var v134 = v401 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v402 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p13);
  var v135 = v402 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v403 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p13);
  var v136 = v403 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v521 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p13);
  var v404 = v521 == -1;
  var v523 = !v404;
  if(v523) {
    var v586 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p13);
    var v522 = v586 == -1;
    var v588 = !v522;
    if(v588) {
      var v630 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p13);
      var v587 = v630 == -1;
      var v632 = !v587;
      if(v632) {
        var v631 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p13);
        v587 = v631 == -1
      }
      v522 = v587
    }
    v404 = v522
  }
  var v137 = v404;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v405 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p13);
  var v138 = v405 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v406 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v406 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v407 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p13);
  var v141 = v407 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v408 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p13);
  var v142 = v408 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v524 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p13);
  var v409 = v524 == -1;
  var v526 = !v409;
  if(v526) {
    var v589 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p13);
    var v525 = v589 == -1;
    var v591 = !v525;
    if(v591) {
      var v633 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p13);
      var v590 = v633 == -1;
      var v635 = !v590;
      if(v635) {
        var v634 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p13);
        v590 = v634 == -1
      }
      v525 = v590
    }
    v409 = v525
  }
  var v143 = v409;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v527 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p13);
  var v410 = v527 == -1;
  var v529 = !v410;
  if(v529) {
    var v592 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p13);
    var v528 = v592 == -1;
    var v594 = !v528;
    if(v594) {
      var v636 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p13);
      var v593 = v636 == -1;
      var v638 = !v593;
      if(v638) {
        var v637 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p13);
        v593 = v637 == -1
      }
      v528 = v593
    }
    v410 = v528
  }
  var v144 = v410;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v411 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p13);
  var v145 = v411 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v530 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p13);
  var v412 = v530 == -1;
  var v532 = !v412;
  if(v532) {
    var v595 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p13);
    var v531 = v595 == -1;
    var v597 = !v531;
    if(v597) {
      var v639 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p13);
      var v596 = v639 == -1;
      var v641 = !v596;
      if(v641) {
        var v640 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p13);
        v596 = v640 == -1
      }
      v531 = v596
    }
    v412 = v531
  }
  var v146 = v412;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v413 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p13);
  var v147 = v413 == -1;
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
    var v414 = basePerLine / groupSize;
    var v152 = j$$6 <= v414;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v149 = lineOfText;
        var v415 = k + i$$5;
        var v150 = JAM.call(text$$10.charAt, text$$10, [v415], JAM.policy.p23);
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v416 = basePerLine / groupSize;
      v152 = j$$6 <= v416
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
    var v417 = adjustment < 0;
    if(v417) {
      v417 = adjusted >= 0
    }
    var v156 = v417;
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
    var v418 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v418;
    for(;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for(;v160;) {
        var v419 = i$$6 + k$$1;
        var v157 = v419 >= stopBase$$2;
        if(v157) {
          break
        }
        var v158 = lineOfText$$1;
        var v420 = k$$1 + i$$6;
        var v159 = JAM.call(text$$12.charAt, text$$12, [v420], JAM.policy.p23);
        lineOfText$$1 = v158 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if(v163) {
        var v161 = aboveNum;
        var v421 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v421, "", groupSize$$2, tabIn$$3);
        aboveNum = v161 + v162
      }
      var v164 = i$$6 >= stopBase$$2;
      if(v164) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v422 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v422
    }
    var v188 = numberPosition$$1 == "left";
    if(v188) {
      var v166 = outputWindow.document;
      var v598 = adjustNumbering(lineNum, numberingAdjustment);
      var v533 = rightNum(v598, "", 8, tabIn$$3);
      var v423 = v533 + lineOfText$$1;
      var v167 = v423 + "\n";
      JAM.call(v166.write, v166, [v167], JAM.policy.p23);
      var v171 = strands$$1 == "two";
      if(v171) {
        var v168 = outputWindow.document;
        var v599 = adjustNumbering(lineNum, numberingAdjustment);
        var v534 = rightNum(v599, "", 8, tabIn$$3);
        var v535 = complement(lineOfText$$1);
        var v424 = v534 + v535;
        var v169 = v424 + "\n";
        JAM.call(v168.write, v168, [v169], JAM.policy.p23);
        var v170 = outputWindow.document;
        JAM.call(v170.write, v170, ["\n"], JAM.policy.p14)
      }
    }else {
      var v187 = numberPosition$$1 == "right";
      if(v187) {
        var v172 = outputWindow.document;
        var v536 = lineOfText$$1;
        var v537 = adjustNumbering(i$$6, numberingAdjustment);
        var v425 = v536 + v537;
        var v173 = v425 + "\n";
        JAM.call(v172.write, v172, [v173], JAM.policy.p23);
        var v177 = strands$$1 == "two";
        if(v177) {
          var v174 = outputWindow.document;
          var v538 = complement(lineOfText$$1);
          var v539 = adjustNumbering(i$$6, numberingAdjustment);
          var v426 = v538 + v539;
          var v175 = v426 + "\n";
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
            var v427 = complement(lineOfText$$1);
            var v183 = v427 + "\n";
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
    var v428 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v428;
    for(;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for(;v193;) {
        var v429 = i$$7 + k$$2;
        var v190 = v429 >= stopBase$$3;
        if(v190) {
          break
        }
        var v191 = lineOfText$$2;
        var v430 = k$$2 + i$$7;
        var v192 = JAM.call(text$$13.charAt, text$$13, [v430], JAM.policy.p23);
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
      var v431 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v431
    }
    var v209 = numberPosition$$2 == "left";
    if(v209) {
      var v199 = outputWindow.document;
      var v540 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v432 = v540 + lineOfText$$2;
      var v200 = v432 + "\n";
      JAM.call(v199.write, v199, [v200], JAM.policy.p23)
    }else {
      var v208 = numberPosition$$2 == "right";
      if(v208) {
        var v201 = outputWindow.document;
        var v433 = lineOfText$$2 + i$$7;
        var v202 = v433 + "\n";
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
  var v541 = sequence$$13.length;
  var v434 = v541 <= firstIndexToMutate;
  var v543 = !v434;
  if(v543) {
    var v542 = lastIndexToMutate < 0;
    var v600 = !v542;
    if(v600) {
      v542 = lastIndexToMutate <= firstIndexToMutate
    }
    v434 = v542
  }
  var v211 = v434;
  if(v211) {
    numMut = 0
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for(;v219;) {
    maxNum = sequence$$13.length;
    var v435 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v212 = v435 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v212], JAM.policy.p13);
    var v436 = randNum < firstIndexToMutate;
    var v544 = !v436;
    if(v544) {
      v436 = randNum > lastIndexToMutate
    }
    var v213 = v436;
    if(v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p13);
    needNewChar = true;
    for(;needNewChar;) {
      var v437 = JAM.call(Math.random, Math, [], JAM.policy.p13);
      var v438 = components$$1.length;
      var v214 = v437 * v438;
      componentsIndex = JAM.call(Math.round, Math, [v214], JAM.policy.p13);
      var v439 = components$$1.length;
      var v215 = componentsIndex == v439;
      if(v215) {
        componentsIndex = 0
      }
      var v440 = components$$1[componentsIndex];
      var v216 = v440 != currentChar;
      if(v216) {
        needNewChar = false
      }
    }
    var v441 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v442 = components$$1[componentsIndex];
    var v217 = v441 + v442;
    var v443 = randNum + 1;
    var v444 = sequence$$13.length;
    var v218 = JAM.call(sequence$$13.substring, sequence$$13, [v443, v444], JAM.policy.p24);
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
    var v445 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v446 = components$$2.length;
    var v222 = v445 * v446;
    tempNum$$1 = JAM.call(Math.floor, Math, [v222], JAM.policy.p13);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v447 = sequence$$14.length;
    var v225 = v447 == 60;
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
    var v601 = sequence$$15.length;
    var v545 = v601 - lookAhead;
    var v546 = sequence$$15.length;
    var v448 = JAM.call(sequence$$15.substring, sequence$$15, [v545, v546], JAM.policy.p24);
    var v230 = v448 + sequence$$15;
    var v231 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v233 = outputWindow.document;
  JAM.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p14);
  var v234 = outputWindow.document;
  var v602 = '<tr><td class="title" width="200px">' + "Site:";
  var v547 = v602 + '</td><td class="title">';
  var v449 = v547 + "Positions:";
  var v235 = v449 + "</td></tr>\n";
  JAM.call(v234.write, v234, [v235], JAM.policy.p23);
  var i$$9 = 0;
  var v450 = arrayOfItems.length;
  var v251 = i$$9 < v450;
  for(;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v451 = arrayOfItems[i$$9];
    var v236 = JAM.call(v451.match, v451, [/\/.+\//], JAM.policy.p13);
    matchExp = v236 + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    var v603 = arrayOfItems[i$$9];
    var v548 = JAM.call(v603.match, v603, [/\)\D*\d+/], JAM.policy.p13);
    var v452 = JAM.call(v548.toString, v548, [], JAM.policy.p13);
    var v237 = JAM.call(v452.replace, v452, [/\)\D*/, ""], JAM.policy.p13);
    cutDistance = parseFloat(v237);
    var v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p23);
    for(;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v453 = matchPosition >= lowerLimit;
      if(v453) {
        v453 = matchPosition < upperLimit
      }
      var v241 = v453;
      if(v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v454 = matchPosition - shiftValue;
        var v240 = v454 + 1;
        tempString$$1 = v239 + v240
      }
      var v455 = matchExp.lastIndex;
      var v549 = RegExp.lastMatch;
      var v456 = v549.length;
      var v242 = v455 - v456;
      matchExp.lastIndex = v242 + 1;
      v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p23)
    }
    var v457 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p13);
    var v244 = v457 != -1;
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
    var v701 = '<tr><td class="' + backGroundClass;
    var v683 = v701 + '">';
    var v727 = arrayOfItems[i$$9];
    var v718 = JAM.call(v727.match, v727, [/\([^\(]+\)/], JAM.policy.p13);
    var v702 = JAM.call(v718.toString, v718, [], JAM.policy.p13);
    var v684 = JAM.call(v702.replace, v702, [/\(|\)/g, ""], JAM.policy.p13);
    var v665 = v683 + v684;
    var v642 = v665 + '</td><td class="';
    var v604 = v642 + backGroundClass;
    var v550 = v604 + '">';
    var v458 = v550 + tempString$$1;
    var v250 = v458 + "</td></tr>\n";
    JAM.call(v249.write, v249, [v250], JAM.policy.p23);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v459 = arrayOfItems.length;
    v251 = i$$9 < v459
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
  var v666 = '<tr><td class="title">' + "Pattern:";
  var v643 = v666 + '</td><td class="title">';
  var v605 = v643 + "Times found:";
  var v551 = v605 + '</td><td class="title">';
  var v460 = v551 + "Percentage:";
  var v255 = v460 + "</td></tr>\n";
  JAM.call(v254.write, v254, [v255], JAM.policy.p23);
  var i$$10 = 0;
  var v461 = arrayOfItems$$1.length;
  var v264 = i$$10 < v461;
  for(;v264;) {
    var tempNumber = 0;
    var v462 = arrayOfItems$$1[i$$10];
    var v256 = JAM.call(v462.match, v462, [/\/[^\/]+\//], JAM.policy.p13);
    var matchExp$$1 = v256 + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    var v463 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p23);
    var v258 = v463 != -1;
    if(v258) {
      var v257 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p23);
      tempNumber = v257.length
    }
    var percentage = 0;
    var v552 = originalLength + 1;
    var v644 = arrayOfItems$$1[i$$10];
    var v606 = JAM.call(v644.match, v644, [/\d+/], JAM.policy.p13);
    var v553 = parseFloat(v606);
    var v464 = v552 - v553;
    var v261 = v464 > 0;
    if(v261) {
      var v259 = 100 * tempNumber;
      var v465 = originalLength + 1;
      var v607 = arrayOfItems$$1[i$$10];
      var v554 = JAM.call(v607.match, v607, [/\d+/], JAM.policy.p13);
      var v466 = parseFloat(v554);
      var v260 = v465 - v466;
      percentage = v259 / v260
    }
    var v262 = outputWindow.document;
    var v728 = arrayOfItems$$1[i$$10];
    var v719 = JAM.call(v728.match, v728, [/\([^\(]+\)\b/], JAM.policy.p13);
    var v703 = JAM.call(v719.toString, v719, [], JAM.policy.p13);
    var v685 = JAM.call(v703.replace, v703, [/\(|\)/g, ""], JAM.policy.p13);
    var v667 = "<tr><td>" + v685;
    var v645 = v667 + "</td><td>";
    var v608 = v645 + tempNumber;
    var v555 = v608 + "</td><td>";
    var v556 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p13);
    var v467 = v555 + v556;
    var v263 = v467 + "</td></tr>\n";
    JAM.call(v262.write, v262, [v263], JAM.policy.p23);
    i$$10 = i$$10 + 1;
    var v468 = arrayOfItems$$1.length;
    v264 = i$$10 < v468
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
  var v469 = sequence$$17.length;
  var v272 = v469 > 0;
  for(;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v470 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v266 = v470 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v266], JAM.policy.p13);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p13);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v267, v268], JAM.policy.p13);
    sequence$$17 = tempString1 + tempString2;
    var v471 = tempSeq.length;
    var v271 = v471 == 60;
    if(v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      JAM.call(v269.write, v269, [v270], JAM.policy.p23);
      tempSeq = ""
    }
    var v472 = sequence$$17.length;
    v272 = v472 > 0
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  JAM.call(v273.write, v273, [v274], JAM.policy.p23);
  return true
}
function revComp(theDocument) {
  JAM.startProfile('compute');

  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var v473 = testScript();
  var v275 = v473 == false;
  if(v275) {
    return false
  }
  var v686 = theDocument.forms;
  var v668 = v686[0];
  var v646 = v668.elements;
  var v609 = v646[0];
  var v557 = checkFormElement(v609);
  var v474 = v557 == false;
  var v559 = !v474;
  if(v559) {
    var v704 = theDocument.forms;
    var v687 = v704[0];
    var v669 = v687.elements;
    var v647 = v669[0];
    var v610 = v647.value;
    var v558 = checkSequenceLength(v610, maxInput$$3);
    v474 = v558 == false
  }
  var v276 = v474;
  if(v276) {
    return false
  }
  openWindow("Reverse Complement");
  openPre();
  var v648 = theDocument.forms;
  var v611 = v648[0];
  var v560 = v611.elements;
  var v475 = v560[0];
  var v277 = v475.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v277);
  var i$$11 = 0;
  var v476 = arrayOfFasta$$1.length;
  var v292 = i$$11 < v476;
  for(;v292;) {
    var v278 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v278);
    var v279 = arrayOfFasta$$1[i$$11];
    title$$9 = getTitleFromFasta(v279);
    newDna = removeNonDna(newDna);
    var v705 = theDocument.forms;
    var v688 = v705[0];
    var v670 = v688.elements;
    var v649 = v670[4];
    var v612 = v649.options;
    var v706 = theDocument.forms;
    var v689 = v706[0];
    var v671 = v689.elements;
    var v650 = v671[4];
    var v613 = v650.selectedIndex;
    var v561 = v612[v613];
    var v477 = v561.value;
    var v289 = v477 == "reverse-complement";
    if(v289) {
      var v280 = outputWindow.document;
      var v478 = ">" + title$$9;
      var v281 = v478 + " reverse complement\n";
      JAM.call(v280.write, v280, [v281], JAM.policy.p23);
      var v282 = complement(newDna);
      newDna = reverse(v282)
    }else {
      var v707 = theDocument.forms;
      var v690 = v707[0];
      var v672 = v690.elements;
      var v651 = v672[4];
      var v614 = v651.options;
      var v708 = theDocument.forms;
      var v691 = v708[0];
      var v673 = v691.elements;
      var v652 = v673[4];
      var v615 = v652.selectedIndex;
      var v562 = v614[v615];
      var v479 = v562.value;
      var v288 = v479 == "reverse";
      if(v288) {
        var v283 = outputWindow.document;
        var v480 = ">" + title$$9;
        var v284 = v480 + " reverse\n";
        JAM.call(v283.write, v283, [v284], JAM.policy.p23);
        newDna = reverse(newDna)
      }else {
        var v709 = theDocument.forms;
        var v692 = v709[0];
        var v674 = v692.elements;
        var v653 = v674[4];
        var v616 = v653.options;
        var v710 = theDocument.forms;
        var v693 = v710[0];
        var v675 = v693.elements;
        var v654 = v675[4];
        var v617 = v654.selectedIndex;
        var v563 = v616[v617];
        var v481 = v563.value;
        var v287 = v481 == "complement";
        if(v287) {
          var v285 = outputWindow.document;
          var v482 = ">" + title$$9;
          var v286 = v482 + " complement\n";
          JAM.call(v285.write, v285, [v286], JAM.policy.p23);
          newDna = complement(newDna)
        }
      }
    }
    var v290 = outputWindow.document;
    var v483 = addReturns(newDna);
    var v291 = v483 + "\n\n";
    JAM.call(v290.write, v290, [v291], JAM.policy.p23);
    i$$11 = i$$11 + 1;
    var v484 = arrayOfFasta$$1.length;
    v292 = i$$11 < v484
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
JAM.set(document, "onload", v2);
var v293 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p14);
JAM.set(v293, "onclick", v3);
var v294 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p14);
JAM.set(v294, "onclick", v4);

JAM.stopProfile('load');
