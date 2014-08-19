
JAM.startProfile('load');
function v5() {
  var v571 = document.forms;
  var v487 = v571[0];
  var v298 = v487.elements;
  var v6 = v298[0];
  v6.value = " ";
  return
}
function v4() {
  try {
    splitCodons(document)
  }catch(e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7)
  }
  return
}
function v3() {
  var v299 = document.main_form;
  var v8 = v299.main_submit;
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
  var v300 = arrayOfSequences.length;
  var v10 = v300 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v301 = arrayOfTitles.length;
  var v12 = i$$1 < v301;
  for(;v12;) {
    var v572 = arrayOfTitles[i$$1];
    var v488 = JAM.call(v572.search, v572, [/\S/], JAM.policy.p13);
    var v302 = v488 == -1;
    var v490 = !v302;
    if(v490) {
      var v622 = arrayOfSequences[i$$1];
      var v573 = JAM.call(v622.search, v622, [/\S/], JAM.policy.p13);
      var v489 = v573 == -1;
      var v575 = !v489;
      if(v575) {
        var v623 = arrayOfSequences[i$$1];
        var v574 = v623.length;
        v489 = v574 != lengthOfAlign
      }
      v302 = v489
    }
    var v11 = v302;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v303 = arrayOfTitles.length;
    v12 = i$$1 < v303
  }
  return true
}
function checkCodonTable(codonTable) {
  var v491 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p13);
  var v304 = v491 == -1;
  var v493 = !v304;
  if(v493) {
    var v576 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p13);
    var v492 = v576 == -1;
    var v578 = !v492;
    if(v578) {
      var v624 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p13);
      var v577 = v624 == -1;
      var v626 = !v577;
      if(v626) {
        var v656 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p13);
        var v625 = v656 == -1;
        var v658 = !v625;
        if(v658) {
          var v657 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p13);
          v625 = v657 == -1
        }
        v577 = v625
      }
      v492 = v577
    }
    v304 = v492
  }
  var v13 = v304;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v494 = formElement.value;
  var v305 = JAM.call(v494.search, v494, [/\S/], JAM.policy.p13);
  var v14 = v305 == -1;
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
  var v306 = arrayOfPatterns.length;
  var v17 = z$$2 < v306;
  for(;v17;) {
    var v495 = arrayOfPatterns[z$$2];
    var v307 = JAM.call(v495.search, v495, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p13);
    var v15 = v307 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v496 = arrayOfPatterns[z$$2];
    var v308 = moreExpressionCheck(v496);
    var v16 = v308 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v309 = arrayOfPatterns.length;
    v17 = z$$2 < v309
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v310 = arrayOfPatterns.length;
  var v26 = j < v310;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    var v579 = arrayOfPatterns[j];
    var v497 = JAM.call(v579.match, v579, [/\/.+\//], JAM.policy.p13);
    var v311 = v497 + "gi";
    if(JAM.isEval(eval)) {
      var v753 = eval("introspect(JAM.policy.pFull) { " + v311 + " }")
    }else {
      var v753 = JAM.call(eval, null, [v311])
    }
    v20[v21] = v753;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    var v498 = arrayOfPatterns[j];
    var v312 = JAM.call(v498.match, v498, [/=[a-zA-Z\*]/], JAM.policy.p13);
    var v754 = JAM.call(v312.toString, v312, [], JAM.policy.p13);
    v22[v23] = v754;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    var v313 = geneticCodeMatchResult[j];
    var v755 = JAM.call(v313.replace, v313, [/=/g, ""], JAM.policy.p13);
    v24[v25] = v755;
    j = j + 1;
    var v314 = arrayOfPatterns.length;
    v26 = j < v314
  }
  var i$$2 = 0;
  var v499 = testSequence.length;
  var v315 = v499 - 3;
  var v33 = i$$2 <= v315;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v27], JAM.policy.p13);
    j = 0;
    var v316 = geneticCodeMatchExp.length;
    var v31 = j < v316;
    for(;v31;) {
      var v500 = geneticCodeMatchExp[j];
      var v317 = JAM.call(codon.search, codon, [v500], JAM.policy.p23);
      var v30 = v317 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v318 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v318 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v319 = geneticCodeMatchExp.length;
      v31 = j < v319
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v501 = testSequence.length;
    var v320 = v501 - 3;
    v33 = i$$2 <= v320
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v321 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v321;
  for(;v35;) {
    var v502 = arrayOfPatterns$$1[z$$3];
    var v322 = JAM.call(v502.search, v502, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p13);
    var v34 = v322 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v323 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v323
  }
  var i$$3 = 0;
  var v324 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v324;
  for(;v39;) {
    var v503 = arrayOfPatterns$$1[i$$3];
    var v325 = "[" + v503;
    var v36 = v325 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v326 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v326;
    for(;v38;) {
      var v504 = arrayOfPatterns$$1[j$$1];
      var v327 = JAM.call(v504.search, v504, [re], JAM.policy.p23);
      var v37 = v327 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v328 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v328
    }
    i$$3 = i$$3 + 1;
    var v329 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v329
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v330 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v330;
  for(;v42;) {
    var v505 = arrayOfPatterns$$2[z$$4];
    var v331 = JAM.call(v505.search, v505, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p13);
    var v40 = v331 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v506 = arrayOfPatterns$$2[z$$4];
    var v332 = moreExpressionCheck(v506);
    var v41 = v332 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v333 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v333
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v580 = getSequenceFromFasta(text$$7);
  var v507 = JAM.call(v580.replace, v580, [/[^A-Za-z]/g, ""], JAM.policy.p13);
  var v334 = v507.length;
  var v44 = v334 > maxInput;
  if(v44) {
    var v335 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v335 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v336 = text$$8.length;
  var v46 = v336 > maxInput$$1;
  if(v46) {
    var v337 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v337 + " characters.";
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
  var v338 = alignArray.length;
  var v53 = v338 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v339 = alignArray.length;
  var v55 = i$$4 < v339;
  for(;v55;) {
    var v508 = alignArray[i$$4];
    var v340 = JAM.call(v508.search, v508, [/[^\s]+\s/], JAM.policy.p13);
    var v54 = v340 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v341 = alignArray.length;
    v55 = i$$4 < v341
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
  var v342 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v58 = v342 != -1;
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
  var v343 = sequence$$2.length;
  var v59 = "&gt;results for " + v343;
  var stringToReturn = v59 + " residue sequence ";
  var v344 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p13);
  var v61 = v344 != -1;
  if(v61) {
    var v345 = stringToReturn + '"';
    var v60 = v345 + fastaSequenceTitle;
    stringToReturn = v60 + '"'
  }
  var v346 = stringToReturn + ' starting "';
  var v347 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v62 = v346 + v347;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v348 = sequenceOne.length;
  var v63 = "Search results for " + v348;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v349 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p13);
  var v65 = v349 != -1;
  if(v65) {
    var v350 = stringToReturn$$1 + '"';
    var v64 = v350 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v351 = stringToReturn$$1 + ' starting "';
  var v352 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v66 = v351 + v352;
  stringToReturn$$1 = v66 + '"\n';
  var v353 = stringToReturn$$1 + "and ";
  var v354 = sequenceTwo.length;
  var v67 = v353 + v354;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v355 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p13);
  var v69 = v355 != -1;
  if(v69) {
    var v356 = stringToReturn$$1 + '"';
    var v68 = v356 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v357 = stringToReturn$$1 + ' starting "';
  var v358 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v70 = v357 + v358;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v359 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v359;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    var v581 = arrayOfPatterns$$3[j$$2];
    var v509 = JAM.call(v581.match, v581, [/\/.+\//], JAM.policy.p13);
    var v360 = v509 + "gi";
    if(JAM.isEval(eval)) {
      var v756 = eval("introspect(JAM.policy.pFull) { " + v360 + " }")
    }else {
      var v756 = JAM.call(eval, null, [v360])
    }
    v73[v74] = v756;
    j$$2 = j$$2 + 1;
    var v361 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v361
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v362 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v362;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    var v510 = arrayOfPatterns$$4[j$$3];
    var v363 = JAM.call(v510.match, v510, [/=[a-zA-Z\*]/], JAM.policy.p13);
    var v757 = JAM.call(v363.toString, v363, [], JAM.policy.p13);
    v77[v78] = v757;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    var v364 = geneticCodeMatchResult$$1[j$$3];
    var v758 = JAM.call(v364.replace, v364, [/=/g, ""], JAM.policy.p13);
    v79[v80] = v758;
    j$$3 = j$$3 + 1;
    var v365 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v365
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v366 = sequence$$3.length;
  var v82 = "Results for " + v366;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v367 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p13);
  var v84 = v367 != -1;
  if(v84) {
    var v368 = stringToReturn$$2 + '"';
    var v83 = v368 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"'
  }
  var v369 = stringToReturn$$2 + ' starting "';
  var v370 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v85 = v369 + v370;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v511 = "Results for " + topology;
  var v371 = v511 + " ";
  var v372 = sequence$$4.length;
  var v87 = v371 + v372;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v373 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p13);
  var v89 = v373 != -1;
  if(v89) {
    var v374 = stringToReturn$$3 + '"';
    var v88 = v374 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"'
  }
  var v375 = stringToReturn$$3 + ' starting "';
  var v376 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v90 = v375 + v376;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v377 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v377;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v378 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p13);
  var v94 = v378 != -1;
  if(v94) {
    var v379 = stringToReturn$$4 + '"';
    var v93 = v379 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v380 = stringToReturn$$4 + ' starting "';
  var v381 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v95 = v380 + v381;
  stringToReturn$$4 = v95 + '"\n';
  var v382 = stringToReturn$$4 + "and ";
  var v383 = sequenceTwo$$1.length;
  var v96 = v382 + v383;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v384 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p13);
  var v98 = v384 != -1;
  if(v98) {
    var v385 = stringToReturn$$4 + '"';
    var v97 = v385 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v386 = stringToReturn$$4 + ' starting "';
  var v387 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v99 = v386 + v387;
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
    var v388 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v389 = components.length;
    var v101 = v388 * v389;
    tempNum = JAM.call(Math.floor, Math, [v101], JAM.policy.p13);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p23);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p14)
}
function getSequenceFromFasta(sequenceRecord) {
  var v390 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v103 = v390 != -1;
  if(v103) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p13)
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v391 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v105 = v391 != -1;
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
  var v512 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p13);
  var v392 = v512 != -1;
  var v514 = !v392;
  if(v514) {
    var v582 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p13);
    var v513 = v582 != -1;
    var v584 = !v513;
    if(v584) {
      var v627 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p13);
      var v583 = v627 != -1;
      var v629 = !v583;
      if(v629) {
        var v659 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p13);
        var v628 = v659 != -1;
        var v661 = !v628;
        if(v661) {
          var v674 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p13);
          var v660 = v674 != -1;
          var v676 = !v660;
          if(v676) {
            var v692 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p13);
            var v675 = v692 != -1;
            var v694 = !v675;
            if(v694) {
              var v706 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p13);
              var v693 = v706 != -1;
              var v708 = !v693;
              if(v708) {
                var v715 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p13);
                var v707 = v715 != -1;
                var v717 = !v707;
                if(v717) {
                  var v724 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p13);
                  var v716 = v724 != -1;
                  var v726 = !v716;
                  if(v726) {
                    var v731 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p13);
                    var v725 = v731 != -1;
                    var v733 = !v725;
                    if(v733) {
                      var v732 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p13);
                      v725 = v732 != -1
                    }
                    v716 = v725
                  }
                  v707 = v716
                }
                v693 = v707
              }
              v675 = v693
            }
            v660 = v675
          }
          v628 = v660
        }
        v583 = v628
      }
      v513 = v583
    }
    v392 = v513
  }
  var v106 = v392;
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
  var v585 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v515 = v585 + "<head>\n";
  var v393 = v515 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v393 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v111.write, v111, [v112], JAM.policy.p23);
  if(isColor) {
    var v113 = outputWindow.document;
    var v746 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v742 = v746 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v738 = v742 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v734 = v738 + "div.info {font-weight: bold}\n";
    var v727 = v734 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v718 = v727 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v709 = v718 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v695 = v709 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v677 = v695 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v662 = v677 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v630 = v662 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v586 = v630 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v516 = v586 + "td.many {color: #000000}\n";
    var v394 = v516 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v394 + "</style>\n";
    JAM.call(v113.write, v113, [v114], JAM.policy.p23)
  }else {
    var v115 = outputWindow.document;
    var v750 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v747 = v750 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v743 = v747 + "div.title {display: none}\n";
    var v739 = v743 + "div.info {font-weight: bold}\n";
    var v735 = v739 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v728 = v735 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v719 = v728 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v710 = v719 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v696 = v710 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v678 = v696 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v663 = v678 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v631 = v663 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v587 = v631 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v517 = v587 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v395 = v517 + "img {display: none}\n";
    var v116 = v395 + "</style>\n";
    JAM.call(v115.write, v115, [v116], JAM.policy.p23)
  }
  var v117 = outputWindow.document;
  var v588 = "</head>\n" + '<body class="main">\n';
  var v518 = v588 + '<div class="title">';
  var v396 = v518 + title$$6;
  var v118 = v396 + " results</div>\n";
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
  var v589 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v519 = v589 + "<head>\n";
  var v397 = v519 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v397 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v119.write, v119, [v120], JAM.policy.p23);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v748 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v744 = v748 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v740 = v744 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v736 = v740 + "div.info {font-weight: bold}\n";
    var v729 = v736 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v720 = v729 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v711 = v720 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v697 = v711 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v679 = v697 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v664 = v679 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v632 = v664 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v590 = v632 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v520 = v590 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v398 = v520 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v398 + "</style>\n";
    JAM.call(v121.write, v121, [v122], JAM.policy.p23)
  }else {
    var v123 = outputWindow.document;
    var v752 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v751 = v752 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v749 = v751 + "div.title {display: none}\n";
    var v745 = v749 + "div.info {font-weight: bold}\n";
    var v741 = v745 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v737 = v741 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v730 = v737 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v721 = v730 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v712 = v721 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v698 = v712 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v680 = v698 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v665 = v680 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v633 = v665 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v591 = v633 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v521 = v591 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v399 = v521 + "img {display: none}\n";
    var v124 = v399 + "</style>\n";
    JAM.call(v123.write, v123, [v124], JAM.policy.p23)
  }
  var v125 = outputWindow.document;
  var v592 = "</head>\n" + '<body class="main">\n';
  var v522 = v592 + '<div class="title">';
  var v400 = v522 + title$$8;
  var v126 = v400 + " results</div>\n";
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
  var v401 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p13);
  var v127 = v401 != -1;
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
  var v402 = testArray[0];
  var v131 = v402 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v403 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p23);
  var v132 = v403 == -1;
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
  var v404 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p13);
  var v135 = v404 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v405 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p13);
  var v136 = v405 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v406 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p13);
  var v137 = v406 == -1;
  if(v137) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v523 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p13);
  var v407 = v523 == -1;
  var v525 = !v407;
  if(v525) {
    var v593 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p13);
    var v524 = v593 == -1;
    var v595 = !v524;
    if(v595) {
      var v634 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p13);
      var v594 = v634 == -1;
      var v636 = !v594;
      if(v636) {
        var v635 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p13);
        v594 = v635 == -1
      }
      v524 = v594
    }
    v407 = v524
  }
  var v138 = v407;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v408 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p13);
  var v139 = v408 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v409 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v409 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v410 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p13);
  var v142 = v410 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v411 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p13);
  var v143 = v411 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v526 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p13);
  var v412 = v526 == -1;
  var v528 = !v412;
  if(v528) {
    var v596 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p13);
    var v527 = v596 == -1;
    var v598 = !v527;
    if(v598) {
      var v637 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p13);
      var v597 = v637 == -1;
      var v639 = !v597;
      if(v639) {
        var v638 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p13);
        v597 = v638 == -1
      }
      v527 = v597
    }
    v412 = v527
  }
  var v144 = v412;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v529 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p13);
  var v413 = v529 == -1;
  var v531 = !v413;
  if(v531) {
    var v599 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p13);
    var v530 = v599 == -1;
    var v601 = !v530;
    if(v601) {
      var v640 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p13);
      var v600 = v640 == -1;
      var v642 = !v600;
      if(v642) {
        var v641 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p13);
        v600 = v641 == -1
      }
      v530 = v600
    }
    v413 = v530
  }
  var v145 = v413;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v414 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p13);
  var v146 = v414 == -1;
  if(v146) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v532 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p13);
  var v415 = v532 == -1;
  var v534 = !v415;
  if(v534) {
    var v602 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p13);
    var v533 = v602 == -1;
    var v604 = !v533;
    if(v604) {
      var v643 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p13);
      var v603 = v643 == -1;
      var v645 = !v603;
      if(v645) {
        var v644 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p13);
        v603 = v644 == -1
      }
      v533 = v603
    }
    v415 = v533
  }
  var v147 = v415;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v416 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p13);
  var v148 = v416 == -1;
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
    var v417 = basePerLine / groupSize;
    var v153 = j$$6 <= v417;
    for(;v153;) {
      var v152 = k < groupSize;
      for(;v152;) {
        var v150 = lineOfText;
        var v418 = k + i$$5;
        var v151 = JAM.call(text$$10.charAt, text$$10, [v418], JAM.policy.p23);
        lineOfText = v150 + v151;
        k = k + 1;
        v152 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v419 = basePerLine / groupSize;
      v153 = j$$6 <= v419
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
    var v420 = adjustment < 0;
    if(v420) {
      v420 = adjusted >= 0
    }
    var v157 = v420;
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
    var v421 = basePerLine$$2 / groupSize$$2;
    var v166 = j$$7 <= v421;
    for(;v166;) {
      var v161 = k$$1 < groupSize$$2;
      for(;v161;) {
        var v422 = i$$6 + k$$1;
        var v158 = v422 >= stopBase$$2;
        if(v158) {
          break
        }
        var v159 = lineOfText$$1;
        var v423 = k$$1 + i$$6;
        var v160 = JAM.call(text$$12.charAt, text$$12, [v423], JAM.policy.p23);
        lineOfText$$1 = v159 + v160;
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v164 = numberPosition$$1 == "above";
      if(v164) {
        var v162 = aboveNum;
        var v424 = adjustNumbering(i$$6, numberingAdjustment);
        var v163 = rightNum(v424, "", groupSize$$2, tabIn$$3);
        aboveNum = v162 + v163
      }
      var v165 = i$$6 >= stopBase$$2;
      if(v165) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v425 = basePerLine$$2 / groupSize$$2;
      v166 = j$$7 <= v425
    }
    var v189 = numberPosition$$1 == "left";
    if(v189) {
      var v167 = outputWindow.document;
      var v605 = adjustNumbering(lineNum, numberingAdjustment);
      var v535 = rightNum(v605, "", 8, tabIn$$3);
      var v426 = v535 + lineOfText$$1;
      var v168 = v426 + "\n";
      JAM.call(v167.write, v167, [v168], JAM.policy.p23);
      var v172 = strands$$1 == "two";
      if(v172) {
        var v169 = outputWindow.document;
        var v606 = adjustNumbering(lineNum, numberingAdjustment);
        var v536 = rightNum(v606, "", 8, tabIn$$3);
        var v537 = complement(lineOfText$$1);
        var v427 = v536 + v537;
        var v170 = v427 + "\n";
        JAM.call(v169.write, v169, [v170], JAM.policy.p23);
        var v171 = outputWindow.document;
        JAM.call(v171.write, v171, ["\n"], JAM.policy.p14)
      }
    }else {
      var v188 = numberPosition$$1 == "right";
      if(v188) {
        var v173 = outputWindow.document;
        var v538 = lineOfText$$1;
        var v539 = adjustNumbering(i$$6, numberingAdjustment);
        var v428 = v538 + v539;
        var v174 = v428 + "\n";
        JAM.call(v173.write, v173, [v174], JAM.policy.p23);
        var v178 = strands$$1 == "two";
        if(v178) {
          var v175 = outputWindow.document;
          var v540 = complement(lineOfText$$1);
          var v541 = adjustNumbering(i$$6, numberingAdjustment);
          var v429 = v540 + v541;
          var v176 = v429 + "\n";
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
            var v430 = complement(lineOfText$$1);
            var v184 = v430 + "\n";
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
    var v431 = basePerLine$$3 / groupSize$$3;
    var v199 = j$$8 <= v431;
    for(;v199;) {
      var v194 = k$$2 < groupSize$$3;
      for(;v194;) {
        var v432 = i$$7 + k$$2;
        var v191 = v432 >= stopBase$$3;
        if(v191) {
          break
        }
        var v192 = lineOfText$$2;
        var v433 = k$$2 + i$$7;
        var v193 = JAM.call(text$$13.charAt, text$$13, [v433], JAM.policy.p23);
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
      var v434 = basePerLine$$3 / groupSize$$3;
      v199 = j$$8 <= v434
    }
    var v210 = numberPosition$$2 == "left";
    if(v210) {
      var v200 = outputWindow.document;
      var v542 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v435 = v542 + lineOfText$$2;
      var v201 = v435 + "\n";
      JAM.call(v200.write, v200, [v201], JAM.policy.p23)
    }else {
      var v209 = numberPosition$$2 == "right";
      if(v209) {
        var v202 = outputWindow.document;
        var v436 = lineOfText$$2 + i$$7;
        var v203 = v436 + "\n";
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
  var v543 = sequence$$13.length;
  var v437 = v543 <= firstIndexToMutate;
  var v545 = !v437;
  if(v545) {
    var v544 = lastIndexToMutate < 0;
    var v607 = !v544;
    if(v607) {
      v544 = lastIndexToMutate <= firstIndexToMutate
    }
    v437 = v544
  }
  var v212 = v437;
  if(v212) {
    numMut = 0
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for(;v220;) {
    maxNum = sequence$$13.length;
    var v438 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v213 = v438 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v213], JAM.policy.p13);
    var v439 = randNum < firstIndexToMutate;
    var v546 = !v439;
    if(v546) {
      v439 = randNum > lastIndexToMutate
    }
    var v214 = v439;
    if(v214) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v220 = i$$8 < numMut;
      continue
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p13);
    needNewChar = true;
    for(;needNewChar;) {
      var v440 = JAM.call(Math.random, Math, [], JAM.policy.p13);
      var v441 = components$$1.length;
      var v215 = v440 * v441;
      componentsIndex = JAM.call(Math.round, Math, [v215], JAM.policy.p13);
      var v442 = components$$1.length;
      var v216 = componentsIndex == v442;
      if(v216) {
        componentsIndex = 0
      }
      var v443 = components$$1[componentsIndex];
      var v217 = v443 != currentChar;
      if(v217) {
        needNewChar = false
      }
    }
    var v444 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v445 = components$$1[componentsIndex];
    var v218 = v444 + v445;
    var v446 = randNum + 1;
    var v447 = sequence$$13.length;
    var v219 = JAM.call(sequence$$13.substring, sequence$$13, [v446, v447], JAM.policy.p24);
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
    var v448 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v449 = components$$2.length;
    var v223 = v448 * v449;
    tempNum$$1 = JAM.call(Math.floor, Math, [v223], JAM.policy.p13);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v450 = sequence$$14.length;
    var v226 = v450 == 60;
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
    var v608 = sequence$$15.length;
    var v547 = v608 - lookAhead;
    var v548 = sequence$$15.length;
    var v451 = JAM.call(sequence$$15.substring, sequence$$15, [v547, v548], JAM.policy.p24);
    var v231 = v451 + sequence$$15;
    var v232 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v231 + v232;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v234 = outputWindow.document;
  JAM.call(v234.write, v234, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p14);
  var v235 = outputWindow.document;
  var v609 = '<tr><td class="title" width="200px">' + "Site:";
  var v549 = v609 + '</td><td class="title">';
  var v452 = v549 + "Positions:";
  var v236 = v452 + "</td></tr>\n";
  JAM.call(v235.write, v235, [v236], JAM.policy.p23);
  var i$$9 = 0;
  var v453 = arrayOfItems.length;
  var v252 = i$$9 < v453;
  for(;v252;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v454 = arrayOfItems[i$$9];
    var v237 = JAM.call(v454.match, v454, [/\/.+\//], JAM.policy.p13);
    matchExp = v237 + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    var v610 = arrayOfItems[i$$9];
    var v550 = JAM.call(v610.match, v610, [/\)\D*\d+/], JAM.policy.p13);
    var v455 = JAM.call(v550.toString, v550, [], JAM.policy.p13);
    var v238 = JAM.call(v455.replace, v455, [/\)\D*/, ""], JAM.policy.p13);
    cutDistance = parseFloat(v238);
    var v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p23);
    for(;v244;) {
      var v239 = matchExp.lastIndex;
      matchPosition = v239 - cutDistance;
      var v456 = matchPosition >= lowerLimit;
      if(v456) {
        v456 = matchPosition < upperLimit
      }
      var v242 = v456;
      if(v242) {
        timesFound = timesFound + 1;
        var v240 = tempString$$1 + ", ";
        var v457 = matchPosition - shiftValue;
        var v241 = v457 + 1;
        tempString$$1 = v240 + v241
      }
      var v458 = matchExp.lastIndex;
      var v551 = RegExp.lastMatch;
      var v459 = v551.length;
      var v243 = v458 - v459;
      matchExp.lastIndex = v243 + 1;
      v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p23)
    }
    var v460 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p13);
    var v245 = v460 != -1;
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
    var v699 = '<tr><td class="' + backGroundClass;
    var v681 = v699 + '">';
    var v722 = arrayOfItems[i$$9];
    var v713 = JAM.call(v722.match, v722, [/\([^\(]+\)/], JAM.policy.p13);
    var v700 = JAM.call(v713.toString, v713, [], JAM.policy.p13);
    var v682 = JAM.call(v700.replace, v700, [/\(|\)/g, ""], JAM.policy.p13);
    var v666 = v681 + v682;
    var v646 = v666 + '</td><td class="';
    var v611 = v646 + backGroundClass;
    var v552 = v611 + '">';
    var v461 = v552 + tempString$$1;
    var v251 = v461 + "</td></tr>\n";
    JAM.call(v250.write, v250, [v251], JAM.policy.p23);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v462 = arrayOfItems.length;
    v252 = i$$9 < v462
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
  var v667 = '<tr><td class="title">' + "Pattern:";
  var v647 = v667 + '</td><td class="title">';
  var v612 = v647 + "Times found:";
  var v553 = v612 + '</td><td class="title">';
  var v463 = v553 + "Percentage:";
  var v256 = v463 + "</td></tr>\n";
  JAM.call(v255.write, v255, [v256], JAM.policy.p23);
  var i$$10 = 0;
  var v464 = arrayOfItems$$1.length;
  var v265 = i$$10 < v464;
  for(;v265;) {
    var tempNumber = 0;
    var v465 = arrayOfItems$$1[i$$10];
    var v257 = JAM.call(v465.match, v465, [/\/[^\/]+\//], JAM.policy.p13);
    var matchExp$$1 = v257 + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    var v466 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p23);
    var v259 = v466 != -1;
    if(v259) {
      var v258 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p23);
      tempNumber = v258.length
    }
    var percentage = 0;
    var v554 = originalLength + 1;
    var v648 = arrayOfItems$$1[i$$10];
    var v613 = JAM.call(v648.match, v648, [/\d+/], JAM.policy.p13);
    var v555 = parseFloat(v613);
    var v467 = v554 - v555;
    var v262 = v467 > 0;
    if(v262) {
      var v260 = 100 * tempNumber;
      var v468 = originalLength + 1;
      var v614 = arrayOfItems$$1[i$$10];
      var v556 = JAM.call(v614.match, v614, [/\d+/], JAM.policy.p13);
      var v469 = parseFloat(v556);
      var v261 = v468 - v469;
      percentage = v260 / v261
    }
    var v263 = outputWindow.document;
    var v723 = arrayOfItems$$1[i$$10];
    var v714 = JAM.call(v723.match, v723, [/\([^\(]+\)\b/], JAM.policy.p13);
    var v701 = JAM.call(v714.toString, v714, [], JAM.policy.p13);
    var v683 = JAM.call(v701.replace, v701, [/\(|\)/g, ""], JAM.policy.p13);
    var v668 = "<tr><td>" + v683;
    var v649 = v668 + "</td><td>";
    var v615 = v649 + tempNumber;
    var v557 = v615 + "</td><td>";
    var v558 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p13);
    var v470 = v557 + v558;
    var v264 = v470 + "</td></tr>\n";
    JAM.call(v263.write, v263, [v264], JAM.policy.p23);
    i$$10 = i$$10 + 1;
    var v471 = arrayOfItems$$1.length;
    v265 = i$$10 < v471
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
  var v472 = sequence$$17.length;
  var v273 = v472 > 0;
  for(;v273;) {
    maxNum$$1 = sequence$$17.length;
    var v473 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v267 = v473 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v267], JAM.policy.p13);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p13);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v268 = randNum$$1 + 1;
    var v269 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v268, v269], JAM.policy.p13);
    sequence$$17 = tempString1 + tempString2;
    var v474 = tempSeq.length;
    var v272 = v474 == 60;
    if(v272) {
      var v270 = outputWindow.document;
      var v271 = tempSeq + "\n";
      JAM.call(v270.write, v270, [v271], JAM.policy.p23);
      tempSeq = ""
    }
    var v475 = sequence$$17.length;
    v273 = v475 > 0
  }
  var v274 = outputWindow.document;
  var v275 = tempSeq + "\n";
  JAM.call(v274.write, v274, [v275], JAM.policy.p23);
  return true
}
function splitCodons(theDocument) {
  JAM.startProfile('compute');

  var maxInput$$3 = 5E5;
  var sequences = new Array;
  var v476 = testScript();
  var v276 = v476 == false;
  if(v276) {
    return false
  }
  var v684 = theDocument.forms;
  var v669 = v684[0];
  var v650 = v669.elements;
  var v616 = v650[0];
  var v559 = checkFormElement(v616);
  var v477 = v559 == false;
  var v561 = !v477;
  if(v561) {
    var v702 = theDocument.forms;
    var v685 = v702[0];
    var v670 = v685.elements;
    var v651 = v670[0];
    var v617 = v651.value;
    var v560 = checkTextLength(v617, maxInput$$3);
    v477 = v560 == false
  }
  var v277 = v477;
  if(v277) {
    return false
  }
  openWindow("Split Codons");
  openPre();
  var v652 = theDocument.forms;
  var v618 = v652[0];
  var v562 = v618.elements;
  var v478 = v562[0];
  var v278 = v478.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v278);
  var i$$11 = 0;
  var v479 = arrayOfFasta$$1.length;
  var v289 = i$$11 < v479;
  for(;v289;) {
    var v279 = arrayOfFasta$$1[i$$11];
    var sequence$$18 = getSequenceFromFasta(v279);
    sequence$$18 = removeFormatting(sequence$$18);
    var v280 = arrayOfFasta$$1[i$$11];
    var title$$9 = getTitleFromFasta(v280);
    var v563 = sequence$$18.length;
    var v480 = v563 % 3;
    var v282 = v480 != 0;
    if(v282) {
      var v481 = "Sequence '" + title$$9;
      var v281 = v481 + "' ends in a partial codon that will be removed.";
      alert(v281)
    }
    var length$$11 = sequence$$18.length;
    var seqCount = 1;
    var position1 = getBasesBasedOnCodonPosition(sequence$$18, 1);
    var v283 = outputWindow.document;
    var v703 = ">" + title$$9;
    var v686 = v703 + ";codon_positon_1_bases;length=";
    var v687 = position1.length;
    var v671 = v686 + v687;
    var v653 = v671 + ";source_length=";
    var v619 = v653 + length$$11;
    var v564 = v619 + "\n";
    var v565 = addReturns(position1);
    var v482 = v564 + v565;
    var v284 = v482 + "\n\n";
    JAM.call(v283.write, v283, [v284], JAM.policy.p23);
    var position2 = getBasesBasedOnCodonPosition(sequence$$18, 2);
    var v285 = outputWindow.document;
    var v704 = ">" + title$$9;
    var v688 = v704 + ";codon_positon_2_bases;length=";
    var v689 = position2.length;
    var v672 = v688 + v689;
    var v654 = v672 + ";source_length=";
    var v620 = v654 + length$$11;
    var v566 = v620 + "\n";
    var v567 = addReturns(position2);
    var v483 = v566 + v567;
    var v286 = v483 + "\n\n";
    JAM.call(v285.write, v285, [v286], JAM.policy.p23);
    var position3 = getBasesBasedOnCodonPosition(sequence$$18, 3);
    var v287 = outputWindow.document;
    var v705 = ">" + title$$9;
    var v690 = v705 + ";codon_positon_3_bases;length=";
    var v691 = position3.length;
    var v673 = v690 + v691;
    var v655 = v673 + ";source_length=";
    var v621 = v655 + length$$11;
    var v568 = v621 + "\n";
    var v569 = addReturns(position3);
    var v484 = v568 + v569;
    var v288 = v484 + "\n\n";
    JAM.call(v287.write, v287, [v288], JAM.policy.p23);
    seqCount = seqCount + 1;
    i$$11 = i$$11 + 1;
    var v485 = arrayOfFasta$$1.length;
    v289 = i$$11 < v485
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function getBasesBasedOnCodonPosition(sequence$$19, position) {
  function v2(str$$8, p1$$2, p2, offset$$14, s$$4) {
    return p2
  }
  var re$$3;
  var v292 = position == 1;
  if(v292) {
    re$$3 = "((.)..)"
  }else {
    var v291 = position == 2;
    if(v291) {
      re$$3 = "(.(.).)"
    }else {
      var v290 = position == 3;
      if(v290) {
        re$$3 = "(..(.))"
      }
    }
  }
  var v293 = sequence$$19.length;
  var partial_codon_length = v293 % 3;
  var v570 = ".{" + partial_codon_length;
  var v486 = v570 + "}$";
  var v294 = new RegExp(v486);
  sequence$$19 = JAM.call(sequence$$19.replace, sequence$$19, [v294, ""], JAM.policy.p23);
  var v295 = new RegExp(re$$3, "g");
  return JAM.call(sequence$$19.replace, sequence$$19, [v295, v2], JAM.policy.p24)
}
JAM.set(document, "onload", v3);
var v296 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p14);
JAM.set(v296, "onclick", v4);
var v297 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p14);
JAM.set(v297, "onclick", v5);

JAM.stopProfile('load');
