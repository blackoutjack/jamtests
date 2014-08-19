
JAM.startProfile('load');
function v4() {
  var v583 = document.forms;
  var v497 = v583[0];
  var v302 = v497.elements;
  var v5 = v302[0];
  v5.value = " ";
  var v584 = document.forms;
  var v498 = v584[0];
  var v303 = v498.elements;
  var v6 = v303[4];
  v6.value = " ";
  return
}
function v3() {
  try {
    dnaPattern(document)
  }catch(e$$6) {
    var v7 = "The following error was encountered: " + e$$6;
    alert(v7)
  }
  return
}
function v2() {
  var v304 = document.main_form;
  var v8 = v304.main_submit;
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
  var v305 = arrayOfSequences.length;
  var v10 = v305 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v306 = arrayOfTitles.length;
  var v12 = i$$1 < v306;
  for(;v12;) {
    var v585 = arrayOfTitles[i$$1];
    var v499 = JAM.call(v585.search, v585, [/\S/], JAM.policy.p13);
    var v307 = v499 == -1;
    var v501 = !v307;
    if(v501) {
      var v639 = arrayOfSequences[i$$1];
      var v586 = JAM.call(v639.search, v639, [/\S/], JAM.policy.p13);
      var v500 = v586 == -1;
      var v588 = !v500;
      if(v588) {
        var v640 = arrayOfSequences[i$$1];
        var v587 = v640.length;
        v500 = v587 != lengthOfAlign
      }
      v307 = v500
    }
    var v11 = v307;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v308 = arrayOfTitles.length;
    v12 = i$$1 < v308
  }
  return true
}
function checkCodonTable(codonTable) {
  var v502 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p13);
  var v309 = v502 == -1;
  var v504 = !v309;
  if(v504) {
    var v589 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p13);
    var v503 = v589 == -1;
    var v591 = !v503;
    if(v591) {
      var v641 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p13);
      var v590 = v641 == -1;
      var v643 = !v590;
      if(v643) {
        var v674 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p13);
        var v642 = v674 == -1;
        var v676 = !v642;
        if(v676) {
          var v675 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p13);
          v642 = v675 == -1
        }
        v590 = v642
      }
      v503 = v590
    }
    v309 = v503
  }
  var v13 = v309;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v505 = formElement.value;
  var v310 = JAM.call(v505.search, v505, [/\S/], JAM.policy.p13);
  var v14 = v310 == -1;
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
  var v311 = arrayOfPatterns.length;
  var v17 = z$$2 < v311;
  for(;v17;) {
    var v506 = arrayOfPatterns[z$$2];
    var v312 = JAM.call(v506.search, v506, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p13);
    var v15 = v312 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v507 = arrayOfPatterns[z$$2];
    var v313 = moreExpressionCheck(v507);
    var v16 = v313 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v314 = arrayOfPatterns.length;
    v17 = z$$2 < v314
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v315 = arrayOfPatterns.length;
  var v26 = j < v315;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    var v592 = arrayOfPatterns[j];
    var v508 = JAM.call(v592.match, v592, [/\/.+\//], JAM.policy.p13);
    var v316 = v508 + "gi";
    if(JAM.isEval(eval)) {
      var v775 = eval("introspect(JAM.policy.pFull) { " + v316 + " }")
    }else {
      var v775 = JAM.call(eval, null, [v316])
    }
    v20[v21] = v775;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    var v509 = arrayOfPatterns[j];
    var v317 = JAM.call(v509.match, v509, [/=[a-zA-Z\*]/], JAM.policy.p13);
    var v776 = JAM.call(v317.toString, v317, [], JAM.policy.p13);
    v22[v23] = v776;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    var v318 = geneticCodeMatchResult[j];
    var v777 = JAM.call(v318.replace, v318, [/=/g, ""], JAM.policy.p13);
    v24[v25] = v777;
    j = j + 1;
    var v319 = arrayOfPatterns.length;
    v26 = j < v319
  }
  var i$$2 = 0;
  var v510 = testSequence.length;
  var v320 = v510 - 3;
  var v33 = i$$2 <= v320;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v27], JAM.policy.p13);
    j = 0;
    var v321 = geneticCodeMatchExp.length;
    var v31 = j < v321;
    for(;v31;) {
      var v511 = geneticCodeMatchExp[j];
      var v322 = JAM.call(codon.search, codon, [v511], JAM.policy.p23);
      var v30 = v322 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v323 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v323 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v324 = geneticCodeMatchExp.length;
      v31 = j < v324
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v512 = testSequence.length;
    var v325 = v512 - 3;
    v33 = i$$2 <= v325
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v326 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v326;
  for(;v35;) {
    var v513 = arrayOfPatterns$$1[z$$3];
    var v327 = JAM.call(v513.search, v513, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p13);
    var v34 = v327 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v328 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v328
  }
  var i$$3 = 0;
  var v329 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v329;
  for(;v39;) {
    var v514 = arrayOfPatterns$$1[i$$3];
    var v330 = "[" + v514;
    var v36 = v330 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v331 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v331;
    for(;v38;) {
      var v515 = arrayOfPatterns$$1[j$$1];
      var v332 = JAM.call(v515.search, v515, [re], JAM.policy.p23);
      var v37 = v332 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v333 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v333
    }
    i$$3 = i$$3 + 1;
    var v334 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v334
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v335 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v335;
  for(;v42;) {
    var v516 = arrayOfPatterns$$2[z$$4];
    var v336 = JAM.call(v516.search, v516, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p13);
    var v40 = v336 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v517 = arrayOfPatterns$$2[z$$4];
    var v337 = moreExpressionCheck(v517);
    var v41 = v337 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v338 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v338
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v593 = getSequenceFromFasta(text$$7);
  var v518 = JAM.call(v593.replace, v593, [/[^A-Za-z]/g, ""], JAM.policy.p13);
  var v339 = v518.length;
  var v44 = v339 > maxInput;
  if(v44) {
    var v340 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v340 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v341 = text$$8.length;
  var v46 = v341 > maxInput$$1;
  if(v46) {
    var v342 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v342 + " characters.";
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
  var v343 = alignArray.length;
  var v53 = v343 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v344 = alignArray.length;
  var v55 = i$$4 < v344;
  for(;v55;) {
    var v519 = alignArray[i$$4];
    var v345 = JAM.call(v519.search, v519, [/[^\s]+\s/], JAM.policy.p13);
    var v54 = v345 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v346 = alignArray.length;
    v55 = i$$4 < v346
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
  var v347 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v58 = v347 != -1;
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
  var v348 = sequence$$2.length;
  var v59 = "&gt;results for " + v348;
  var stringToReturn = v59 + " residue sequence ";
  var v349 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p13);
  var v61 = v349 != -1;
  if(v61) {
    var v350 = stringToReturn + '"';
    var v60 = v350 + fastaSequenceTitle;
    stringToReturn = v60 + '"'
  }
  var v351 = stringToReturn + ' starting "';
  var v352 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v62 = v351 + v352;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v353 = sequenceOne.length;
  var v63 = "Search results for " + v353;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v354 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p13);
  var v65 = v354 != -1;
  if(v65) {
    var v355 = stringToReturn$$1 + '"';
    var v64 = v355 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v356 = stringToReturn$$1 + ' starting "';
  var v357 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v66 = v356 + v357;
  stringToReturn$$1 = v66 + '"\n';
  var v358 = stringToReturn$$1 + "and ";
  var v359 = sequenceTwo.length;
  var v67 = v358 + v359;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v360 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p13);
  var v69 = v360 != -1;
  if(v69) {
    var v361 = stringToReturn$$1 + '"';
    var v68 = v361 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v362 = stringToReturn$$1 + ' starting "';
  var v363 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v70 = v362 + v363;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v364 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v364;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    var v594 = arrayOfPatterns$$3[j$$2];
    var v520 = JAM.call(v594.match, v594, [/\/.+\//], JAM.policy.p13);
    var v365 = v520 + "gi";
    if(JAM.isEval(eval)) {
      var v778 = eval("introspect(JAM.policy.pFull) { " + v365 + " }")
    }else {
      var v778 = JAM.call(eval, null, [v365])
    }
    v73[v74] = v778;
    j$$2 = j$$2 + 1;
    var v366 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v366
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v367 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v367;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    var v521 = arrayOfPatterns$$4[j$$3];
    var v368 = JAM.call(v521.match, v521, [/=[a-zA-Z\*]/], JAM.policy.p13);
    var v779 = JAM.call(v368.toString, v368, [], JAM.policy.p13);
    v77[v78] = v779;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    var v369 = geneticCodeMatchResult$$1[j$$3];
    var v780 = JAM.call(v369.replace, v369, [/=/g, ""], JAM.policy.p13);
    v79[v80] = v780;
    j$$3 = j$$3 + 1;
    var v370 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v370
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v371 = sequence$$3.length;
  var v82 = "Results for " + v371;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v372 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p13);
  var v84 = v372 != -1;
  if(v84) {
    var v373 = stringToReturn$$2 + '"';
    var v83 = v373 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"'
  }
  var v374 = stringToReturn$$2 + ' starting "';
  var v375 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v85 = v374 + v375;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v522 = "Results for " + topology;
  var v376 = v522 + " ";
  var v377 = sequence$$4.length;
  var v87 = v376 + v377;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v378 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p13);
  var v89 = v378 != -1;
  if(v89) {
    var v379 = stringToReturn$$3 + '"';
    var v88 = v379 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"'
  }
  var v380 = stringToReturn$$3 + ' starting "';
  var v381 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v90 = v380 + v381;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v382 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v382;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v383 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p13);
  var v94 = v383 != -1;
  if(v94) {
    var v384 = stringToReturn$$4 + '"';
    var v93 = v384 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v385 = stringToReturn$$4 + ' starting "';
  var v386 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v95 = v385 + v386;
  stringToReturn$$4 = v95 + '"\n';
  var v387 = stringToReturn$$4 + "and ";
  var v388 = sequenceTwo$$1.length;
  var v96 = v387 + v388;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v389 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p13);
  var v98 = v389 != -1;
  if(v98) {
    var v390 = stringToReturn$$4 + '"';
    var v97 = v390 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v391 = stringToReturn$$4 + ' starting "';
  var v392 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v99 = v391 + v392;
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
    var v393 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v394 = components.length;
    var v101 = v393 * v394;
    tempNum = JAM.call(Math.floor, Math, [v101], JAM.policy.p13);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p23);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p14)
}
function getSequenceFromFasta(sequenceRecord) {
  var v395 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v103 = v395 != -1;
  if(v103) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p13)
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v396 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v105 = v396 != -1;
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
  var v523 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p13);
  var v397 = v523 != -1;
  var v525 = !v397;
  if(v525) {
    var v595 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p13);
    var v524 = v595 != -1;
    var v597 = !v524;
    if(v597) {
      var v644 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p13);
      var v596 = v644 != -1;
      var v646 = !v596;
      if(v646) {
        var v677 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p13);
        var v645 = v677 != -1;
        var v679 = !v645;
        if(v679) {
          var v693 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p13);
          var v678 = v693 != -1;
          var v695 = !v678;
          if(v695) {
            var v709 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p13);
            var v694 = v709 != -1;
            var v711 = !v694;
            if(v711) {
              var v723 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p13);
              var v710 = v723 != -1;
              var v725 = !v710;
              if(v725) {
                var v735 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p13);
                var v724 = v735 != -1;
                var v737 = !v724;
                if(v737) {
                  var v746 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p13);
                  var v736 = v746 != -1;
                  var v748 = !v736;
                  if(v748) {
                    var v753 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p13);
                    var v747 = v753 != -1;
                    var v755 = !v747;
                    if(v755) {
                      var v754 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p13);
                      v747 = v754 != -1
                    }
                    v736 = v747
                  }
                  v724 = v736
                }
                v710 = v724
              }
              v694 = v710
            }
            v678 = v694
          }
          v645 = v678
        }
        v596 = v645
      }
      v524 = v596
    }
    v397 = v524
  }
  var v106 = v397;
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
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p13);
  var v111 = outputWindow.document;
  var v598 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v526 = v598 + "<head>\n";
  var v398 = v526 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v398 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v111.write, v111, [v112], JAM.policy.p23);
  if(isColor) {
    var v113 = outputWindow.document;
    var v768 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v764 = v768 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v760 = v764 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v756 = v760 + "div.info {font-weight: bold}\n";
    var v749 = v756 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v738 = v749 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v726 = v738 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v712 = v726 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v696 = v712 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v680 = v696 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v647 = v680 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v599 = v647 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v527 = v599 + "td.many {color: #000000}\n";
    var v399 = v527 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v399 + "</style>\n";
    JAM.call(v113.write, v113, [v114], JAM.policy.p23)
  }else {
    var v115 = outputWindow.document;
    var v772 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v769 = v772 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v765 = v769 + "div.title {display: none}\n";
    var v761 = v765 + "div.info {font-weight: bold}\n";
    var v757 = v761 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v750 = v757 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v739 = v750 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v727 = v739 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v713 = v727 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v697 = v713 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v681 = v697 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v648 = v681 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v600 = v648 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v528 = v600 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v400 = v528 + "img {display: none}\n";
    var v116 = v400 + "</style>\n";
    JAM.call(v115.write, v115, [v116], JAM.policy.p23)
  }
  var v117 = outputWindow.document;
  var v601 = "</head>\n" + '<body class="main">\n';
  var v529 = v601 + '<div class="title">';
  var v401 = v529 + title$$7;
  var v118 = v401 + " results</div>\n";
  JAM.call(v117.write, v117, [v118], JAM.policy.p23);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return
}
function _openWindowAlign(title$$9, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p13);
  var v119 = outputWindow.document;
  var v602 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v530 = v602 + "<head>\n";
  var v402 = v530 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v402 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v119.write, v119, [v120], JAM.policy.p23);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v770 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v766 = v770 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v762 = v766 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v758 = v762 + "div.info {font-weight: bold}\n";
    var v751 = v758 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v740 = v751 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v728 = v740 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v714 = v728 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v698 = v714 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v682 = v698 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v649 = v682 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v603 = v649 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v531 = v603 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v403 = v531 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v403 + "</style>\n";
    JAM.call(v121.write, v121, [v122], JAM.policy.p23)
  }else {
    var v123 = outputWindow.document;
    var v774 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v773 = v774 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v771 = v773 + "div.title {display: none}\n";
    var v767 = v771 + "div.info {font-weight: bold}\n";
    var v763 = v767 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v759 = v763 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v752 = v759 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v741 = v752 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v729 = v741 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v715 = v729 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v699 = v715 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v683 = v699 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v650 = v683 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v604 = v650 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v532 = v604 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v404 = v532 + "img {display: none}\n";
    var v124 = v404 + "</style>\n";
    JAM.call(v123.write, v123, [v124], JAM.policy.p23)
  }
  var v125 = outputWindow.document;
  var v605 = "</head>\n" + '<body class="main">\n';
  var v533 = v605 + '<div class="title">';
  var v405 = v533 + title$$9;
  var v126 = v405 + " results</div>\n";
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
  var v406 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p13);
  var v127 = v406 != -1;
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
  var v407 = testArray[0];
  var v131 = v407 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v408 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p23);
  var v132 = v408 == -1;
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
  var v409 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p13);
  var v135 = v409 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v410 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p13);
  var v136 = v410 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v411 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p13);
  var v137 = v411 == -1;
  if(v137) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v534 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p13);
  var v412 = v534 == -1;
  var v536 = !v412;
  if(v536) {
    var v606 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p13);
    var v535 = v606 == -1;
    var v608 = !v535;
    if(v608) {
      var v651 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p13);
      var v607 = v651 == -1;
      var v653 = !v607;
      if(v653) {
        var v652 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p13);
        v607 = v652 == -1
      }
      v535 = v607
    }
    v412 = v535
  }
  var v138 = v412;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v413 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p13);
  var v139 = v413 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v414 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v414 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v415 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p13);
  var v142 = v415 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v416 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p13);
  var v143 = v416 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v537 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p13);
  var v417 = v537 == -1;
  var v539 = !v417;
  if(v539) {
    var v609 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p13);
    var v538 = v609 == -1;
    var v611 = !v538;
    if(v611) {
      var v654 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p13);
      var v610 = v654 == -1;
      var v656 = !v610;
      if(v656) {
        var v655 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p13);
        v610 = v655 == -1
      }
      v538 = v610
    }
    v417 = v538
  }
  var v144 = v417;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v540 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p13);
  var v418 = v540 == -1;
  var v542 = !v418;
  if(v542) {
    var v612 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p13);
    var v541 = v612 == -1;
    var v614 = !v541;
    if(v614) {
      var v657 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p13);
      var v613 = v657 == -1;
      var v659 = !v613;
      if(v659) {
        var v658 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p13);
        v613 = v658 == -1
      }
      v541 = v613
    }
    v418 = v541
  }
  var v145 = v418;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v419 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p13);
  var v146 = v419 == -1;
  if(v146) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v543 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p13);
  var v420 = v543 == -1;
  var v545 = !v420;
  if(v545) {
    var v615 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p13);
    var v544 = v615 == -1;
    var v617 = !v544;
    if(v617) {
      var v660 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p13);
      var v616 = v660 == -1;
      var v662 = !v616;
      if(v662) {
        var v661 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p13);
        v616 = v661 == -1
      }
      v544 = v616
    }
    v420 = v544
  }
  var v147 = v420;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v421 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p13);
  var v148 = v421 == -1;
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
    var v422 = basePerLine / groupSize;
    var v153 = j$$6 <= v422;
    for(;v153;) {
      var v152 = k < groupSize;
      for(;v152;) {
        var v150 = lineOfText;
        var v423 = k + i$$5;
        var v151 = JAM.call(text$$10.charAt, text$$10, [v423], JAM.policy.p23);
        lineOfText = v150 + v151;
        k = k + 1;
        v152 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v424 = basePerLine / groupSize;
      v153 = j$$6 <= v424
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
    var v425 = adjustment < 0;
    if(v425) {
      v425 = adjusted >= 0
    }
    var v157 = v425;
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
    var v426 = basePerLine$$2 / groupSize$$2;
    var v166 = j$$7 <= v426;
    for(;v166;) {
      var v161 = k$$1 < groupSize$$2;
      for(;v161;) {
        var v427 = i$$6 + k$$1;
        var v158 = v427 >= stopBase$$2;
        if(v158) {
          break
        }
        var v159 = lineOfText$$1;
        var v428 = k$$1 + i$$6;
        var v160 = JAM.call(text$$12.charAt, text$$12, [v428], JAM.policy.p23);
        lineOfText$$1 = v159 + v160;
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v164 = numberPosition$$1 == "above";
      if(v164) {
        var v162 = aboveNum;
        var v429 = adjustNumbering(i$$6, numberingAdjustment);
        var v163 = rightNum(v429, "", groupSize$$2, tabIn$$3);
        aboveNum = v162 + v163
      }
      var v165 = i$$6 >= stopBase$$2;
      if(v165) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v430 = basePerLine$$2 / groupSize$$2;
      v166 = j$$7 <= v430
    }
    var v189 = numberPosition$$1 == "left";
    if(v189) {
      var v167 = outputWindow.document;
      var v618 = adjustNumbering(lineNum, numberingAdjustment);
      var v546 = rightNum(v618, "", 8, tabIn$$3);
      var v431 = v546 + lineOfText$$1;
      var v168 = v431 + "\n";
      JAM.call(v167.write, v167, [v168], JAM.policy.p23);
      var v172 = strands$$1 == "two";
      if(v172) {
        var v169 = outputWindow.document;
        var v619 = adjustNumbering(lineNum, numberingAdjustment);
        var v547 = rightNum(v619, "", 8, tabIn$$3);
        var v548 = complement(lineOfText$$1);
        var v432 = v547 + v548;
        var v170 = v432 + "\n";
        JAM.call(v169.write, v169, [v170], JAM.policy.p23);
        var v171 = outputWindow.document;
        JAM.call(v171.write, v171, ["\n"], JAM.policy.p14)
      }
    }else {
      var v188 = numberPosition$$1 == "right";
      if(v188) {
        var v173 = outputWindow.document;
        var v549 = lineOfText$$1;
        var v550 = adjustNumbering(i$$6, numberingAdjustment);
        var v433 = v549 + v550;
        var v174 = v433 + "\n";
        JAM.call(v173.write, v173, [v174], JAM.policy.p23);
        var v178 = strands$$1 == "two";
        if(v178) {
          var v175 = outputWindow.document;
          var v551 = complement(lineOfText$$1);
          var v552 = adjustNumbering(i$$6, numberingAdjustment);
          var v434 = v551 + v552;
          var v176 = v434 + "\n";
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
            var v435 = complement(lineOfText$$1);
            var v184 = v435 + "\n";
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
    var v436 = basePerLine$$3 / groupSize$$3;
    var v199 = j$$8 <= v436;
    for(;v199;) {
      var v194 = k$$2 < groupSize$$3;
      for(;v194;) {
        var v437 = i$$7 + k$$2;
        var v191 = v437 >= stopBase$$3;
        if(v191) {
          break
        }
        var v192 = lineOfText$$2;
        var v438 = k$$2 + i$$7;
        var v193 = JAM.call(text$$13.charAt, text$$13, [v438], JAM.policy.p23);
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
      var v439 = basePerLine$$3 / groupSize$$3;
      v199 = j$$8 <= v439
    }
    var v210 = numberPosition$$2 == "left";
    if(v210) {
      var v200 = outputWindow.document;
      var v553 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v440 = v553 + lineOfText$$2;
      var v201 = v440 + "\n";
      JAM.call(v200.write, v200, [v201], JAM.policy.p23)
    }else {
      var v209 = numberPosition$$2 == "right";
      if(v209) {
        var v202 = outputWindow.document;
        var v441 = lineOfText$$2 + i$$7;
        var v203 = v441 + "\n";
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
  var v554 = sequence$$13.length;
  var v442 = v554 <= firstIndexToMutate;
  var v556 = !v442;
  if(v556) {
    var v555 = lastIndexToMutate < 0;
    var v620 = !v555;
    if(v620) {
      v555 = lastIndexToMutate <= firstIndexToMutate
    }
    v442 = v555
  }
  var v212 = v442;
  if(v212) {
    numMut = 0
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for(;v220;) {
    maxNum = sequence$$13.length;
    var v443 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v213 = v443 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v213], JAM.policy.p13);
    var v444 = randNum < firstIndexToMutate;
    var v557 = !v444;
    if(v557) {
      v444 = randNum > lastIndexToMutate
    }
    var v214 = v444;
    if(v214) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v220 = i$$8 < numMut;
      continue
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p13);
    needNewChar = true;
    for(;needNewChar;) {
      var v445 = JAM.call(Math.random, Math, [], JAM.policy.p13);
      var v446 = components$$1.length;
      var v215 = v445 * v446;
      componentsIndex = JAM.call(Math.round, Math, [v215], JAM.policy.p13);
      var v447 = components$$1.length;
      var v216 = componentsIndex == v447;
      if(v216) {
        componentsIndex = 0
      }
      var v448 = components$$1[componentsIndex];
      var v217 = v448 != currentChar;
      if(v217) {
        needNewChar = false
      }
    }
    var v449 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v450 = components$$1[componentsIndex];
    var v218 = v449 + v450;
    var v451 = randNum + 1;
    var v452 = sequence$$13.length;
    var v219 = JAM.call(sequence$$13.substring, sequence$$13, [v451, v452], JAM.policy.p24);
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
    var v453 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v454 = components$$2.length;
    var v223 = v453 * v454;
    tempNum$$1 = JAM.call(Math.floor, Math, [v223], JAM.policy.p13);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v455 = sequence$$14.length;
    var v226 = v455 == 60;
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
    var v621 = sequence$$15.length;
    var v558 = v621 - lookAhead;
    var v559 = sequence$$15.length;
    var v456 = JAM.call(sequence$$15.substring, sequence$$15, [v558, v559], JAM.policy.p24);
    var v231 = v456 + sequence$$15;
    var v232 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v231 + v232;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v234 = outputWindow.document;
  JAM.call(v234.write, v234, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p14);
  var v235 = outputWindow.document;
  var v622 = '<tr><td class="title" width="200px">' + "Site:";
  var v560 = v622 + '</td><td class="title">';
  var v457 = v560 + "Positions:";
  var v236 = v457 + "</td></tr>\n";
  JAM.call(v235.write, v235, [v236], JAM.policy.p23);
  var i$$9 = 0;
  var v458 = arrayOfItems.length;
  var v252 = i$$9 < v458;
  for(;v252;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v459 = arrayOfItems[i$$9];
    var v237 = JAM.call(v459.match, v459, [/\/.+\//], JAM.policy.p13);
    matchExp = v237 + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    var v623 = arrayOfItems[i$$9];
    var v561 = JAM.call(v623.match, v623, [/\)\D*\d+/], JAM.policy.p13);
    var v460 = JAM.call(v561.toString, v561, [], JAM.policy.p13);
    var v238 = JAM.call(v460.replace, v460, [/\)\D*/, ""], JAM.policy.p13);
    cutDistance = parseFloat(v238);
    var v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p23);
    for(;v244;) {
      var v239 = matchExp.lastIndex;
      matchPosition = v239 - cutDistance;
      var v461 = matchPosition >= lowerLimit;
      if(v461) {
        v461 = matchPosition < upperLimit
      }
      var v242 = v461;
      if(v242) {
        timesFound = timesFound + 1;
        var v240 = tempString$$1 + ", ";
        var v462 = matchPosition - shiftValue;
        var v241 = v462 + 1;
        tempString$$1 = v240 + v241
      }
      var v463 = matchExp.lastIndex;
      var v562 = RegExp.lastMatch;
      var v464 = v562.length;
      var v243 = v463 - v464;
      matchExp.lastIndex = v243 + 1;
      v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p23)
    }
    var v465 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p13);
    var v245 = v465 != -1;
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
    var v716 = '<tr><td class="' + backGroundClass;
    var v700 = v716 + '">';
    var v742 = arrayOfItems[i$$9];
    var v730 = JAM.call(v742.match, v742, [/\([^\(]+\)/], JAM.policy.p13);
    var v717 = JAM.call(v730.toString, v730, [], JAM.policy.p13);
    var v701 = JAM.call(v717.replace, v717, [/\(|\)/g, ""], JAM.policy.p13);
    var v684 = v700 + v701;
    var v663 = v684 + '</td><td class="';
    var v624 = v663 + backGroundClass;
    var v563 = v624 + '">';
    var v466 = v563 + tempString$$1;
    var v251 = v466 + "</td></tr>\n";
    JAM.call(v250.write, v250, [v251], JAM.policy.p23);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v467 = arrayOfItems.length;
    v252 = i$$9 < v467
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
  var v685 = '<tr><td class="title">' + "Pattern:";
  var v664 = v685 + '</td><td class="title">';
  var v625 = v664 + "Times found:";
  var v564 = v625 + '</td><td class="title">';
  var v468 = v564 + "Percentage:";
  var v256 = v468 + "</td></tr>\n";
  JAM.call(v255.write, v255, [v256], JAM.policy.p23);
  var i$$10 = 0;
  var v469 = arrayOfItems$$1.length;
  var v265 = i$$10 < v469;
  for(;v265;) {
    var tempNumber = 0;
    var v470 = arrayOfItems$$1[i$$10];
    var v257 = JAM.call(v470.match, v470, [/\/[^\/]+\//], JAM.policy.p13);
    var matchExp$$1 = v257 + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    var v471 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p23);
    var v259 = v471 != -1;
    if(v259) {
      var v258 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p23);
      tempNumber = v258.length
    }
    var percentage = 0;
    var v565 = originalLength + 1;
    var v665 = arrayOfItems$$1[i$$10];
    var v626 = JAM.call(v665.match, v665, [/\d+/], JAM.policy.p13);
    var v566 = parseFloat(v626);
    var v472 = v565 - v566;
    var v262 = v472 > 0;
    if(v262) {
      var v260 = 100 * tempNumber;
      var v473 = originalLength + 1;
      var v627 = arrayOfItems$$1[i$$10];
      var v567 = JAM.call(v627.match, v627, [/\d+/], JAM.policy.p13);
      var v474 = parseFloat(v567);
      var v261 = v473 - v474;
      percentage = v260 / v261
    }
    var v263 = outputWindow.document;
    var v743 = arrayOfItems$$1[i$$10];
    var v731 = JAM.call(v743.match, v743, [/\([^\(]+\)\b/], JAM.policy.p13);
    var v718 = JAM.call(v731.toString, v731, [], JAM.policy.p13);
    var v702 = JAM.call(v718.replace, v718, [/\(|\)/g, ""], JAM.policy.p13);
    var v686 = "<tr><td>" + v702;
    var v666 = v686 + "</td><td>";
    var v628 = v666 + tempNumber;
    var v568 = v628 + "</td><td>";
    var v569 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p13);
    var v475 = v568 + v569;
    var v264 = v475 + "</td></tr>\n";
    JAM.call(v263.write, v263, [v264], JAM.policy.p23);
    i$$10 = i$$10 + 1;
    var v476 = arrayOfItems$$1.length;
    v265 = i$$10 < v476
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
  var v477 = sequence$$17.length;
  var v273 = v477 > 0;
  for(;v273;) {
    maxNum$$1 = sequence$$17.length;
    var v478 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v267 = v478 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v267], JAM.policy.p13);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p13);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v268 = randNum$$1 + 1;
    var v269 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v268, v269], JAM.policy.p13);
    sequence$$17 = tempString1 + tempString2;
    var v479 = tempSeq.length;
    var v272 = v479 == 60;
    if(v272) {
      var v270 = outputWindow.document;
      var v271 = tempSeq + "\n";
      JAM.call(v270.write, v270, [v271], JAM.policy.p23);
      tempSeq = ""
    }
    var v480 = sequence$$17.length;
    v273 = v480 > 0
  }
  var v274 = outputWindow.document;
  var v275 = tempSeq + "\n";
  JAM.call(v274.write, v274, [v275], JAM.policy.p23);
  return true
}
function dnaPattern(theDocument) {
  JAM.startProfile('compute');

  var newDna = "";
  var maxInput$$3 = 5E5;
  var matches = new Array;
  var v481 = testScript();
  var v276 = v481 == false;
  if(v276) {
    return false
  }
  var v703 = theDocument.forms;
  var v687 = v703[0];
  var v667 = v687.elements;
  var v629 = v667[0];
  var v570 = checkFormElement(v629);
  var v482 = v570 == false;
  var v572 = !v482;
  if(v572) {
    var v732 = theDocument.forms;
    var v719 = v732[0];
    var v704 = v719.elements;
    var v688 = v704[0];
    var v668 = v688.value;
    var v630 = checkSequenceLength(v668, maxInput$$3);
    var v571 = v630 == false;
    var v632 = !v571;
    if(v632) {
      var v720 = theDocument.forms;
      var v705 = v720[0];
      var v689 = v705.elements;
      var v669 = v689[1];
      var v631 = checkFormElement(v669);
      v571 = v631 == false
    }
    v482 = v571
  }
  var v277 = v482;
  if(v277) {
    return false
  }
  var v706 = theDocument.forms;
  var v690 = v706[0];
  var v670 = v690.elements;
  var v633 = v670[1];
  var v573 = v633.value;
  var v483 = JAM.call(v573.replace, v573, [/\//g, ""], JAM.policy.p13);
  var v278 = "/" + v483;
  var re$$3 = v278 + "/gi";
  re$$3 = removeWhiteSpace(re$$3);
  try {
    if(JAM.isEval(eval)) {
      re$$3 = eval("introspect(JAM.policy.pFull) { " + re$$3 + " }")
    }else {
      re$$3 = JAM.call(eval, null, [re$$3])
    }
    var testString$$1 = "teststring";
    testString$$1 = JAM.call(testString$$1.replace, testString$$1, [re$$3, ""], JAM.policy.p23)
  }catch(e$$5) {
    alert("The regular expression is not formatted correctly.");
    return false
  }
  openWindow("DNA Pattern Find");
  openPre();
  var v671 = theDocument.forms;
  var v634 = v671[0];
  var v574 = v634.elements;
  var v484 = v574[0];
  var v279 = v484.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v279);
  var i$$11 = 0;
  var v485 = arrayOfFasta$$1.length;
  var v285 = i$$11 < v485;
  for(;v285;) {
    var v280 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v280);
    var v281 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v281);
    newDna = removeNonDna(newDna);
    var v282 = outputWindow.document;
    var v283 = getInfoFromTitleAndSequence(title, newDna);
    JAM.call(v282.write, v282, [v283], JAM.policy.p23);
    writeDnaPattern(newDna, re$$3);
    var v284 = outputWindow.document;
    JAM.call(v284.write, v284, ["\n\n"], JAM.policy.p14);
    i$$11 = i$$11 + 1;
    var v486 = arrayOfFasta$$1.length;
    v285 = i$$11 < v486
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function writeDnaPattern(dnaSequence$$3, re$$4) {
  var matchArray$$2;
  var matchCount = 0;
  var length$$11 = dnaSequence$$3.length;
  var simplePattern = JAM.call(re$$4.toString, re$$4, [], JAM.policy.p13);
  simplePattern = JAM.call(simplePattern.replace, simplePattern, [/\/gi$|\/ig$|^\//gi, ""], JAM.policy.p13);
  var v290 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [dnaSequence$$3], JAM.policy.p23);
  for(;v290;) {
    matchCount = matchCount + 1;
    var match_end = re$$4.lastIndex;
    var v575 = RegExp.lastMatch;
    var v487 = v575.length;
    var v286 = match_end - v487;
    var match_start = v286 + 1;
    var v287 = outputWindow.document;
    var v744 = "&gt;match number " + matchCount;
    var v733 = v744 + ' to "';
    var v721 = v733 + simplePattern;
    var v707 = v721 + '" start=';
    var v691 = v707 + match_start;
    var v672 = v691 + " end=";
    var v635 = v672 + match_end;
    var v576 = v635 + " on the direct strand\n";
    var v636 = matchArray$$2[0];
    var v577 = addReturns(v636);
    var v488 = v576 + v577;
    var v288 = v488 + "\n\n";
    JAM.call(v287.write, v287, [v288], JAM.policy.p23);
    var v489 = re$$4.lastIndex;
    var v578 = RegExp.lastMatch;
    var v490 = v578.length;
    var v289 = v489 - v490;
    re$$4.lastIndex = v289 + 1;
    v290 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [dnaSequence$$3], JAM.policy.p23)
  }
  re$$4.lastIndex = 0;
  var v291 = complement(dnaSequence$$3);
  dnaSequence$$3 = reverse(v291);
  var v297 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [dnaSequence$$3], JAM.policy.p23);
  for(;v297;) {
    matchCount = matchCount + 1;
    var v491 = re$$4.lastIndex;
    var v292 = length$$11 - v491;
    match_start = v292 + 1;
    var v579 = RegExp.lastMatch;
    var v492 = v579.length;
    var v293 = match_start + v492;
    match_end = v293 - 1;
    var v294 = outputWindow.document;
    var v745 = "&gt;match number " + matchCount;
    var v734 = v745 + ' to "';
    var v722 = v734 + simplePattern;
    var v708 = v722 + '" start=';
    var v692 = v708 + match_start;
    var v673 = v692 + " end=";
    var v637 = v673 + match_end;
    var v580 = v637 + " on the reverse strand\n";
    var v638 = matchArray$$2[0];
    var v581 = addReturns(v638);
    var v493 = v580 + v581;
    var v295 = v493 + "\n\n";
    JAM.call(v294.write, v294, [v295], JAM.policy.p23);
    var v494 = re$$4.lastIndex;
    var v582 = RegExp.lastMatch;
    var v495 = v582.length;
    var v296 = v494 - v495;
    re$$4.lastIndex = v296 + 1;
    v297 = matchArray$$2 = JAM.call(re$$4.exec, re$$4, [dnaSequence$$3], JAM.policy.p23)
  }
  var v496 = matchCount > 0;
  var v299 = !v496;
  if(v299) {
    var v298 = outputWindow.document;
    JAM.call(v298.write, v298, ["no matches found for this sequence.\n\n"], JAM.policy.p14)
  }
  return
}
JAM.set(document, "onload", v2);
var v300 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p14);
JAM.set(v300, "onclick", v3);
var v301 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p14);
JAM.set(v301, "onclick", v4);

JAM.stopProfile('load');
