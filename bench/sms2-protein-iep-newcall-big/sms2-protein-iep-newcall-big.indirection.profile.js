
JAM.startProfile('load');
function v4() {
  var v598 = document.forms;
  var v511 = v598[0];
  var v313 = v511.elements;
  var v5 = v313[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    proteinIep(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v314 = document.main_form;
  var v7 = v314.main_submit;
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
  var v315 = arrayOfSequences.length;
  var v9 = v315 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v316 = arrayOfTitles.length;
  var v11 = i$$1 < v316;
  for(;v11;) {
    var v599 = arrayOfTitles[i$$1];
    var v512 = JAM.call(v599.search, v599, [/\S/], JAM.policy.p13);
    var v317 = v512 == -1;
    var v514 = !v317;
    if(v514) {
      var v656 = arrayOfSequences[i$$1];
      var v600 = JAM.call(v656.search, v656, [/\S/], JAM.policy.p13);
      var v513 = v600 == -1;
      var v602 = !v513;
      if(v602) {
        var v657 = arrayOfSequences[i$$1];
        var v601 = v657.length;
        v513 = v601 != lengthOfAlign
      }
      v317 = v513
    }
    var v10 = v317;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v318 = arrayOfTitles.length;
    v11 = i$$1 < v318
  }
  return true
}
function checkCodonTable(codonTable) {
  var v515 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p13);
  var v319 = v515 == -1;
  var v517 = !v319;
  if(v517) {
    var v603 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p13);
    var v516 = v603 == -1;
    var v605 = !v516;
    if(v605) {
      var v658 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p13);
      var v604 = v658 == -1;
      var v660 = !v604;
      if(v660) {
        var v697 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p13);
        var v659 = v697 == -1;
        var v699 = !v659;
        if(v699) {
          var v698 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p13);
          v659 = v698 == -1
        }
        v604 = v659
      }
      v516 = v604
    }
    v319 = v516
  }
  var v12 = v319;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v518 = formElement.value;
  var v320 = JAM.call(v518.search, v518, [/\S/], JAM.policy.p13);
  var v13 = v320 == -1;
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
  var v321 = arrayOfPatterns.length;
  var v16 = z$$2 < v321;
  for(;v16;) {
    var v519 = arrayOfPatterns[z$$2];
    var v322 = JAM.call(v519.search, v519, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p13);
    var v14 = v322 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v520 = arrayOfPatterns[z$$2];
    var v323 = moreExpressionCheck(v520);
    var v15 = v323 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v324 = arrayOfPatterns.length;
    v16 = z$$2 < v324
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v325 = arrayOfPatterns.length;
  var v25 = j < v325;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    var v606 = arrayOfPatterns[j];
    var v521 = JAM.call(v606.match, v606, [/\/.+\//], JAM.policy.p13);
    var v326 = v521 + "gi";
    if(JAM.isEval(eval)) {
      var v808 = eval("introspect(JAM.policy.pFull) { " + v326 + " }")
    }else {
      var v808 = JAM.call(eval, null, [v326])
    }
    v19[v20] = v808;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    var v522 = arrayOfPatterns[j];
    var v327 = JAM.call(v522.match, v522, [/=[a-zA-Z\*]/], JAM.policy.p13);
    var v809 = JAM.call(v327.toString, v327, [], JAM.policy.p13);
    v21[v22] = v809;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    var v328 = geneticCodeMatchResult[j];
    var v810 = JAM.call(v328.replace, v328, [/=/g, ""], JAM.policy.p13);
    v23[v24] = v810;
    j = j + 1;
    var v329 = arrayOfPatterns.length;
    v25 = j < v329
  }
  var i$$2 = 0;
  var v523 = testSequence.length;
  var v330 = v523 - 3;
  var v32 = i$$2 <= v330;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v26], JAM.policy.p13);
    j = 0;
    var v331 = geneticCodeMatchExp.length;
    var v30 = j < v331;
    for(;v30;) {
      var v524 = geneticCodeMatchExp[j];
      var v332 = JAM.call(codon.search, codon, [v524], JAM.policy.p23);
      var v29 = v332 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v333 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v333 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v334 = geneticCodeMatchExp.length;
      v30 = j < v334
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v525 = testSequence.length;
    var v335 = v525 - 3;
    v32 = i$$2 <= v335
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v336 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v336;
  for(;v34;) {
    var v526 = arrayOfPatterns$$1[z$$3];
    var v337 = JAM.call(v526.search, v526, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p13);
    var v33 = v337 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v338 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v338
  }
  var i$$3 = 0;
  var v339 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v339;
  for(;v38;) {
    var v527 = arrayOfPatterns$$1[i$$3];
    var v340 = "[" + v527;
    var v35 = v340 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v341 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v341;
    for(;v37;) {
      var v528 = arrayOfPatterns$$1[j$$1];
      var v342 = JAM.call(v528.search, v528, [re], JAM.policy.p23);
      var v36 = v342 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v343 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v343
    }
    i$$3 = i$$3 + 1;
    var v344 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v344
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v345 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v345;
  for(;v41;) {
    var v529 = arrayOfPatterns$$2[z$$4];
    var v346 = JAM.call(v529.search, v529, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p13);
    var v39 = v346 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v530 = arrayOfPatterns$$2[z$$4];
    var v347 = moreExpressionCheck(v530);
    var v40 = v347 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v348 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v348
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v607 = getSequenceFromFasta(text$$7);
  var v531 = JAM.call(v607.replace, v607, [/[^A-Za-z]/g, ""], JAM.policy.p13);
  var v349 = v531.length;
  var v43 = v349 > maxInput;
  if(v43) {
    var v350 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v350 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v351 = text$$8.length;
  var v45 = v351 > maxInput$$1;
  if(v45) {
    var v352 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v352 + " characters.";
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
  var v353 = alignArray.length;
  var v52 = v353 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v354 = alignArray.length;
  var v54 = i$$4 < v354;
  for(;v54;) {
    var v532 = alignArray[i$$4];
    var v355 = JAM.call(v532.search, v532, [/[^\s]+\s/], JAM.policy.p13);
    var v53 = v355 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v356 = alignArray.length;
    v54 = i$$4 < v356
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
  var v357 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v57 = v357 != -1;
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
  var v358 = sequence$$2.length;
  var v58 = "&gt;results for " + v358;
  var stringToReturn = v58 + " residue sequence ";
  var v359 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p13);
  var v60 = v359 != -1;
  if(v60) {
    var v360 = stringToReturn + '"';
    var v59 = v360 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v361 = stringToReturn + ' starting "';
  var v362 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v61 = v361 + v362;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v363 = sequenceOne.length;
  var v62 = "Search results for " + v363;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v364 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p13);
  var v64 = v364 != -1;
  if(v64) {
    var v365 = stringToReturn$$1 + '"';
    var v63 = v365 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v366 = stringToReturn$$1 + ' starting "';
  var v367 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v65 = v366 + v367;
  stringToReturn$$1 = v65 + '"\n';
  var v368 = stringToReturn$$1 + "and ";
  var v369 = sequenceTwo.length;
  var v66 = v368 + v369;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v370 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p13);
  var v68 = v370 != -1;
  if(v68) {
    var v371 = stringToReturn$$1 + '"';
    var v67 = v371 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v372 = stringToReturn$$1 + ' starting "';
  var v373 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v69 = v372 + v373;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v374 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v374;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    var v608 = arrayOfPatterns$$3[j$$2];
    var v533 = JAM.call(v608.match, v608, [/\/.+\//], JAM.policy.p13);
    var v375 = v533 + "gi";
    if(JAM.isEval(eval)) {
      var v811 = eval("introspect(JAM.policy.pFull) { " + v375 + " }")
    }else {
      var v811 = JAM.call(eval, null, [v375])
    }
    v72[v73] = v811;
    j$$2 = j$$2 + 1;
    var v376 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v376
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v377 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v377;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    var v534 = arrayOfPatterns$$4[j$$3];
    var v378 = JAM.call(v534.match, v534, [/=[a-zA-Z\*]/], JAM.policy.p13);
    var v812 = JAM.call(v378.toString, v378, [], JAM.policy.p13);
    v76[v77] = v812;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    var v379 = geneticCodeMatchResult$$1[j$$3];
    var v813 = JAM.call(v379.replace, v379, [/=/g, ""], JAM.policy.p13);
    v78[v79] = v813;
    j$$3 = j$$3 + 1;
    var v380 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v380
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v381 = sequence$$3.length;
  var v81 = "Results for " + v381;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v382 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p13);
  var v83 = v382 != -1;
  if(v83) {
    var v383 = stringToReturn$$2 + '"';
    var v82 = v383 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v384 = stringToReturn$$2 + ' starting "';
  var v385 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v84 = v384 + v385;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v535 = "Results for " + topology;
  var v386 = v535 + " ";
  var v387 = sequence$$4.length;
  var v86 = v386 + v387;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v388 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p13);
  var v88 = v388 != -1;
  if(v88) {
    var v389 = stringToReturn$$3 + '"';
    var v87 = v389 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v390 = stringToReturn$$3 + ' starting "';
  var v391 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v89 = v390 + v391;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v392 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v392;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v393 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p13);
  var v93 = v393 != -1;
  if(v93) {
    var v394 = stringToReturn$$4 + '"';
    var v92 = v394 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v395 = stringToReturn$$4 + ' starting "';
  var v396 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v94 = v395 + v396;
  stringToReturn$$4 = v94 + '"\n';
  var v397 = stringToReturn$$4 + "and ";
  var v398 = sequenceTwo$$1.length;
  var v95 = v397 + v398;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v399 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p13);
  var v97 = v399 != -1;
  if(v97) {
    var v400 = stringToReturn$$4 + '"';
    var v96 = v400 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v401 = stringToReturn$$4 + ' starting "';
  var v402 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v98 = v401 + v402;
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
    var v403 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v404 = components.length;
    var v100 = v403 * v404;
    tempNum = JAM.call(Math.floor, Math, [v100], JAM.policy.p13);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p23);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p14)
}
function getSequenceFromFasta(sequenceRecord) {
  var v405 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v102 = v405 != -1;
  if(v102) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p13)
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v406 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v104 = v406 != -1;
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
  var v536 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p13);
  var v407 = v536 != -1;
  var v538 = !v407;
  if(v538) {
    var v609 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p13);
    var v537 = v609 != -1;
    var v611 = !v537;
    if(v611) {
      var v661 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p13);
      var v610 = v661 != -1;
      var v663 = !v610;
      if(v663) {
        var v700 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p13);
        var v662 = v700 != -1;
        var v702 = !v662;
        if(v702) {
          var v722 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p13);
          var v701 = v722 != -1;
          var v724 = !v701;
          if(v724) {
            var v744 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p13);
            var v723 = v744 != -1;
            var v746 = !v723;
            if(v746) {
              var v759 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p13);
              var v745 = v759 != -1;
              var v761 = !v745;
              if(v761) {
                var v770 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p13);
                var v760 = v770 != -1;
                var v772 = !v760;
                if(v772) {
                  var v779 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p13);
                  var v771 = v779 != -1;
                  var v781 = !v771;
                  if(v781) {
                    var v786 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p13);
                    var v780 = v786 != -1;
                    var v788 = !v780;
                    if(v788) {
                      var v787 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p13);
                      v780 = v787 != -1
                    }
                    v771 = v780
                  }
                  v760 = v771
                }
                v745 = v760
              }
              v723 = v745
            }
            v701 = v723
          }
          v662 = v701
        }
        v610 = v662
      }
      v537 = v610
    }
    v407 = v537
  }
  var v105 = v407;
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
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p13);
  var v110 = outputWindow.document;
  var v612 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v539 = v612 + "<head>\n";
  var v408 = v539 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v408 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v110.write, v110, [v111], JAM.policy.p23);
  if(isColor) {
    var v112 = outputWindow.document;
    var v801 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v797 = v801 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v793 = v797 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v789 = v793 + "div.info {font-weight: bold}\n";
    var v782 = v789 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v773 = v782 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v762 = v773 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v747 = v762 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v725 = v747 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v703 = v725 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v664 = v703 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v613 = v664 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v540 = v613 + "td.many {color: #000000}\n";
    var v409 = v540 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v409 + "</style>\n";
    JAM.call(v112.write, v112, [v113], JAM.policy.p23)
  }else {
    var v114 = outputWindow.document;
    var v805 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v802 = v805 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v798 = v802 + "div.title {display: none}\n";
    var v794 = v798 + "div.info {font-weight: bold}\n";
    var v790 = v794 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v783 = v790 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v774 = v783 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v763 = v774 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v748 = v763 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v726 = v748 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v704 = v726 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v665 = v704 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v614 = v665 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v541 = v614 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v410 = v541 + "img {display: none}\n";
    var v115 = v410 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p23)
  }
  var v116 = outputWindow.document;
  var v615 = "</head>\n" + '<body class="main">\n';
  var v542 = v615 + '<div class="title">';
  var v411 = v542 + title$$7;
  var v117 = v411 + " results</div>\n";
  JAM.call(v116.write, v116, [v117], JAM.policy.p23);
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
  var v118 = outputWindow.document;
  var v616 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v543 = v616 + "<head>\n";
  var v412 = v543 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v412 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v118.write, v118, [v119], JAM.policy.p23);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v803 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v799 = v803 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v795 = v799 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v791 = v795 + "div.info {font-weight: bold}\n";
    var v784 = v791 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v775 = v784 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v764 = v775 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v749 = v764 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v727 = v749 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v705 = v727 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v666 = v705 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v617 = v666 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v544 = v617 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v413 = v544 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v413 + "</style>\n";
    JAM.call(v120.write, v120, [v121], JAM.policy.p23)
  }else {
    var v122 = outputWindow.document;
    var v807 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v806 = v807 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v804 = v806 + "div.title {display: none}\n";
    var v800 = v804 + "div.info {font-weight: bold}\n";
    var v796 = v800 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v792 = v796 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v785 = v792 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v776 = v785 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v765 = v776 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v750 = v765 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v728 = v750 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v706 = v728 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v667 = v706 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v618 = v667 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v545 = v618 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v414 = v545 + "img {display: none}\n";
    var v123 = v414 + "</style>\n";
    JAM.call(v122.write, v122, [v123], JAM.policy.p23)
  }
  var v124 = outputWindow.document;
  var v619 = "</head>\n" + '<body class="main">\n';
  var v546 = v619 + '<div class="title">';
  var v415 = v546 + title$$9;
  var v125 = v415 + " results</div>\n";
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
  var v416 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p13);
  var v126 = v416 != -1;
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
  var v417 = testArray[0];
  var v130 = v417 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v418 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p23);
  var v131 = v418 == -1;
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
  var v419 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p13);
  var v134 = v419 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v420 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p13);
  var v135 = v420 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v421 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p13);
  var v136 = v421 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v547 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p13);
  var v422 = v547 == -1;
  var v549 = !v422;
  if(v549) {
    var v620 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p13);
    var v548 = v620 == -1;
    var v622 = !v548;
    if(v622) {
      var v668 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p13);
      var v621 = v668 == -1;
      var v670 = !v621;
      if(v670) {
        var v669 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p13);
        v621 = v669 == -1
      }
      v548 = v621
    }
    v422 = v548
  }
  var v137 = v422;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v423 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p13);
  var v138 = v423 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v424 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v424 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v425 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p13);
  var v141 = v425 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v426 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p13);
  var v142 = v426 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v550 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p13);
  var v427 = v550 == -1;
  var v552 = !v427;
  if(v552) {
    var v623 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p13);
    var v551 = v623 == -1;
    var v625 = !v551;
    if(v625) {
      var v671 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p13);
      var v624 = v671 == -1;
      var v673 = !v624;
      if(v673) {
        var v672 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p13);
        v624 = v672 == -1
      }
      v551 = v624
    }
    v427 = v551
  }
  var v143 = v427;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v553 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p13);
  var v428 = v553 == -1;
  var v555 = !v428;
  if(v555) {
    var v626 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p13);
    var v554 = v626 == -1;
    var v628 = !v554;
    if(v628) {
      var v674 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p13);
      var v627 = v674 == -1;
      var v676 = !v627;
      if(v676) {
        var v675 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p13);
        v627 = v675 == -1
      }
      v554 = v627
    }
    v428 = v554
  }
  var v144 = v428;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v429 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p13);
  var v145 = v429 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v556 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p13);
  var v430 = v556 == -1;
  var v558 = !v430;
  if(v558) {
    var v629 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p13);
    var v557 = v629 == -1;
    var v631 = !v557;
    if(v631) {
      var v677 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p13);
      var v630 = v677 == -1;
      var v679 = !v630;
      if(v679) {
        var v678 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p13);
        v630 = v678 == -1
      }
      v557 = v630
    }
    v430 = v557
  }
  var v146 = v430;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v431 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p13);
  var v147 = v431 == -1;
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
    var v432 = basePerLine / groupSize;
    var v152 = j$$6 <= v432;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v149 = lineOfText;
        var v433 = k + i$$5;
        var v150 = JAM.call(text$$10.charAt, text$$10, [v433], JAM.policy.p23);
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v434 = basePerLine / groupSize;
      v152 = j$$6 <= v434
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
    var v435 = adjustment < 0;
    if(v435) {
      v435 = adjusted >= 0
    }
    var v156 = v435;
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
    var v436 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v436;
    for(;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for(;v160;) {
        var v437 = i$$6 + k$$1;
        var v157 = v437 >= stopBase$$2;
        if(v157) {
          break
        }
        var v158 = lineOfText$$1;
        var v438 = k$$1 + i$$6;
        var v159 = JAM.call(text$$12.charAt, text$$12, [v438], JAM.policy.p23);
        lineOfText$$1 = v158 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if(v163) {
        var v161 = aboveNum;
        var v439 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v439, "", groupSize$$2, tabIn$$3);
        aboveNum = v161 + v162
      }
      var v164 = i$$6 >= stopBase$$2;
      if(v164) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v440 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v440
    }
    var v188 = numberPosition$$1 == "left";
    if(v188) {
      var v166 = outputWindow.document;
      var v632 = adjustNumbering(lineNum, numberingAdjustment);
      var v559 = rightNum(v632, "", 8, tabIn$$3);
      var v441 = v559 + lineOfText$$1;
      var v167 = v441 + "\n";
      JAM.call(v166.write, v166, [v167], JAM.policy.p23);
      var v171 = strands$$1 == "two";
      if(v171) {
        var v168 = outputWindow.document;
        var v633 = adjustNumbering(lineNum, numberingAdjustment);
        var v560 = rightNum(v633, "", 8, tabIn$$3);
        var v561 = complement(lineOfText$$1);
        var v442 = v560 + v561;
        var v169 = v442 + "\n";
        JAM.call(v168.write, v168, [v169], JAM.policy.p23);
        var v170 = outputWindow.document;
        JAM.call(v170.write, v170, ["\n"], JAM.policy.p14)
      }
    }else {
      var v187 = numberPosition$$1 == "right";
      if(v187) {
        var v172 = outputWindow.document;
        var v562 = lineOfText$$1;
        var v563 = adjustNumbering(i$$6, numberingAdjustment);
        var v443 = v562 + v563;
        var v173 = v443 + "\n";
        JAM.call(v172.write, v172, [v173], JAM.policy.p23);
        var v177 = strands$$1 == "two";
        if(v177) {
          var v174 = outputWindow.document;
          var v564 = complement(lineOfText$$1);
          var v565 = adjustNumbering(i$$6, numberingAdjustment);
          var v444 = v564 + v565;
          var v175 = v444 + "\n";
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
            var v445 = complement(lineOfText$$1);
            var v183 = v445 + "\n";
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
    var v446 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v446;
    for(;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for(;v193;) {
        var v447 = i$$7 + k$$2;
        var v190 = v447 >= stopBase$$3;
        if(v190) {
          break
        }
        var v191 = lineOfText$$2;
        var v448 = k$$2 + i$$7;
        var v192 = JAM.call(text$$13.charAt, text$$13, [v448], JAM.policy.p23);
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
      var v449 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v449
    }
    var v209 = numberPosition$$2 == "left";
    if(v209) {
      var v199 = outputWindow.document;
      var v566 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v450 = v566 + lineOfText$$2;
      var v200 = v450 + "\n";
      JAM.call(v199.write, v199, [v200], JAM.policy.p23)
    }else {
      var v208 = numberPosition$$2 == "right";
      if(v208) {
        var v201 = outputWindow.document;
        var v451 = lineOfText$$2 + i$$7;
        var v202 = v451 + "\n";
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
  var v567 = sequence$$13.length;
  var v452 = v567 <= firstIndexToMutate;
  var v569 = !v452;
  if(v569) {
    var v568 = lastIndexToMutate < 0;
    var v634 = !v568;
    if(v634) {
      v568 = lastIndexToMutate <= firstIndexToMutate
    }
    v452 = v568
  }
  var v211 = v452;
  if(v211) {
    numMut = 0
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for(;v219;) {
    maxNum = sequence$$13.length;
    var v453 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v212 = v453 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v212], JAM.policy.p13);
    var v454 = randNum < firstIndexToMutate;
    var v570 = !v454;
    if(v570) {
      v454 = randNum > lastIndexToMutate
    }
    var v213 = v454;
    if(v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p13);
    needNewChar = true;
    for(;needNewChar;) {
      var v455 = JAM.call(Math.random, Math, [], JAM.policy.p13);
      var v456 = components$$1.length;
      var v214 = v455 * v456;
      componentsIndex = JAM.call(Math.round, Math, [v214], JAM.policy.p13);
      var v457 = components$$1.length;
      var v215 = componentsIndex == v457;
      if(v215) {
        componentsIndex = 0
      }
      var v458 = components$$1[componentsIndex];
      var v216 = v458 != currentChar;
      if(v216) {
        needNewChar = false
      }
    }
    var v459 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v460 = components$$1[componentsIndex];
    var v217 = v459 + v460;
    var v461 = randNum + 1;
    var v462 = sequence$$13.length;
    var v218 = JAM.call(sequence$$13.substring, sequence$$13, [v461, v462], JAM.policy.p24);
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
    var v463 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v464 = components$$2.length;
    var v222 = v463 * v464;
    tempNum$$1 = JAM.call(Math.floor, Math, [v222], JAM.policy.p13);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v465 = sequence$$14.length;
    var v225 = v465 == 60;
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
    var v635 = sequence$$15.length;
    var v571 = v635 - lookAhead;
    var v572 = sequence$$15.length;
    var v466 = JAM.call(sequence$$15.substring, sequence$$15, [v571, v572], JAM.policy.p24);
    var v230 = v466 + sequence$$15;
    var v231 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v233 = outputWindow.document;
  JAM.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p14);
  var v234 = outputWindow.document;
  var v636 = '<tr><td class="title" width="200px">' + "Site:";
  var v573 = v636 + '</td><td class="title">';
  var v467 = v573 + "Positions:";
  var v235 = v467 + "</td></tr>\n";
  JAM.call(v234.write, v234, [v235], JAM.policy.p23);
  var i$$9 = 0;
  var v468 = arrayOfItems.length;
  var v251 = i$$9 < v468;
  for(;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v469 = arrayOfItems[i$$9];
    var v236 = JAM.call(v469.match, v469, [/\/.+\//], JAM.policy.p13);
    matchExp = v236 + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    var v637 = arrayOfItems[i$$9];
    var v574 = JAM.call(v637.match, v637, [/\)\D*\d+/], JAM.policy.p13);
    var v470 = JAM.call(v574.toString, v574, [], JAM.policy.p13);
    var v237 = JAM.call(v470.replace, v470, [/\)\D*/, ""], JAM.policy.p13);
    cutDistance = parseFloat(v237);
    var v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p23);
    for(;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v471 = matchPosition >= lowerLimit;
      if(v471) {
        v471 = matchPosition < upperLimit
      }
      var v241 = v471;
      if(v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v472 = matchPosition - shiftValue;
        var v240 = v472 + 1;
        tempString$$1 = v239 + v240
      }
      var v473 = matchExp.lastIndex;
      var v575 = RegExp.lastMatch;
      var v474 = v575.length;
      var v242 = v473 - v474;
      matchExp.lastIndex = v242 + 1;
      v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p23)
    }
    var v475 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p13);
    var v244 = v475 != -1;
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
    var v751 = '<tr><td class="' + backGroundClass;
    var v729 = v751 + '">';
    var v777 = arrayOfItems[i$$9];
    var v766 = JAM.call(v777.match, v777, [/\([^\(]+\)/], JAM.policy.p13);
    var v752 = JAM.call(v766.toString, v766, [], JAM.policy.p13);
    var v730 = JAM.call(v752.replace, v752, [/\(|\)/g, ""], JAM.policy.p13);
    var v707 = v729 + v730;
    var v680 = v707 + '</td><td class="';
    var v638 = v680 + backGroundClass;
    var v576 = v638 + '">';
    var v476 = v576 + tempString$$1;
    var v250 = v476 + "</td></tr>\n";
    JAM.call(v249.write, v249, [v250], JAM.policy.p23);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v477 = arrayOfItems.length;
    v251 = i$$9 < v477
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
  var v708 = '<tr><td class="title">' + "Pattern:";
  var v681 = v708 + '</td><td class="title">';
  var v639 = v681 + "Times found:";
  var v577 = v639 + '</td><td class="title">';
  var v478 = v577 + "Percentage:";
  var v255 = v478 + "</td></tr>\n";
  JAM.call(v254.write, v254, [v255], JAM.policy.p23);
  var i$$10 = 0;
  var v479 = arrayOfItems$$1.length;
  var v264 = i$$10 < v479;
  for(;v264;) {
    var tempNumber = 0;
    var v480 = arrayOfItems$$1[i$$10];
    var v256 = JAM.call(v480.match, v480, [/\/[^\/]+\//], JAM.policy.p13);
    var matchExp$$1 = v256 + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    var v481 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p23);
    var v258 = v481 != -1;
    if(v258) {
      var v257 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p23);
      tempNumber = v257.length
    }
    var percentage = 0;
    var v578 = originalLength + 1;
    var v682 = arrayOfItems$$1[i$$10];
    var v640 = JAM.call(v682.match, v682, [/\d+/], JAM.policy.p13);
    var v579 = parseFloat(v640);
    var v482 = v578 - v579;
    var v261 = v482 > 0;
    if(v261) {
      var v259 = 100 * tempNumber;
      var v483 = originalLength + 1;
      var v641 = arrayOfItems$$1[i$$10];
      var v580 = JAM.call(v641.match, v641, [/\d+/], JAM.policy.p13);
      var v484 = parseFloat(v580);
      var v260 = v483 - v484;
      percentage = v259 / v260
    }
    var v262 = outputWindow.document;
    var v778 = arrayOfItems$$1[i$$10];
    var v767 = JAM.call(v778.match, v778, [/\([^\(]+\)\b/], JAM.policy.p13);
    var v753 = JAM.call(v767.toString, v767, [], JAM.policy.p13);
    var v731 = JAM.call(v753.replace, v753, [/\(|\)/g, ""], JAM.policy.p13);
    var v709 = "<tr><td>" + v731;
    var v683 = v709 + "</td><td>";
    var v642 = v683 + tempNumber;
    var v581 = v642 + "</td><td>";
    var v582 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p13);
    var v485 = v581 + v582;
    var v263 = v485 + "</td></tr>\n";
    JAM.call(v262.write, v262, [v263], JAM.policy.p23);
    i$$10 = i$$10 + 1;
    var v486 = arrayOfItems$$1.length;
    v264 = i$$10 < v486
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
  var v487 = sequence$$17.length;
  var v272 = v487 > 0;
  for(;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v488 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v266 = v488 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v266], JAM.policy.p13);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p13);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v267, v268], JAM.policy.p13);
    sequence$$17 = tempString1 + tempString2;
    var v489 = tempSeq.length;
    var v271 = v489 == 60;
    if(v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      JAM.call(v269.write, v269, [v270], JAM.policy.p23);
      tempSeq = ""
    }
    var v490 = sequence$$17.length;
    v272 = v490 > 0
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  JAM.call(v273.write, v273, [v274], JAM.policy.p23);
  return true
}
function proteinIep(theDocument) {
  JAM.startProfile('compute');

  var newProtein = "";
  var maxInput$$3 = 2E5;
  var v491 = testScript();
  var v275 = v491 == false;
  if(v275) {
    return false
  }
  var v732 = theDocument.forms;
  var v710 = v732[0];
  var v684 = v710.elements;
  var v643 = v684[0];
  var v583 = checkFormElement(v643);
  var v492 = v583 == false;
  var v585 = !v492;
  if(v585) {
    var v754 = theDocument.forms;
    var v733 = v754[0];
    var v711 = v733.elements;
    var v685 = v711[0];
    var v644 = v685.value;
    var v584 = checkSequenceLength(v644, maxInput$$3);
    v492 = v584 == false
  }
  var v276 = v492;
  if(v276) {
    return false
  }
  openWindow("Protein Isoelectric Point");
  var v686 = theDocument.forms;
  var v645 = v686[0];
  var v586 = v645.elements;
  var v493 = v586[0];
  var v277 = v493.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v277);
  var i$$11 = 0;
  var v494 = arrayOfFasta$$1.length;
  var v286 = i$$11 < v494;
  for(;v286;) {
    var v278 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v278);
    var v279 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v279);
    newProtein = removeNonProteinStrict(newProtein);
    var v280 = outputWindow.document;
    var v281 = getInfoFromTitleAndSequence(title, newProtein);
    JAM.call(v280.write, v280, [v281], JAM.policy.p23);
    var v734 = theDocument.forms;
    var v712 = v734[0];
    var v687 = v712.elements;
    var v646 = v687[4];
    var v587 = v646.options;
    var v735 = theDocument.forms;
    var v713 = v735[0];
    var v688 = v713.elements;
    var v647 = v688[4];
    var v588 = v647.selectedIndex;
    var v495 = v587[v588];
    var v282 = v495.value;
    var v736 = theDocument.forms;
    var v714 = v736[0];
    var v689 = v714.elements;
    var v648 = v689[5];
    var v589 = v648.options;
    var v737 = theDocument.forms;
    var v715 = v737[0];
    var v690 = v715.elements;
    var v649 = v690[5];
    var v590 = v649.selectedIndex;
    var v496 = v589[v590];
    var v283 = v496.value;
    var v738 = theDocument.forms;
    var v716 = v738[0];
    var v691 = v716.elements;
    var v650 = v691[6];
    var v591 = v650.options;
    var v739 = theDocument.forms;
    var v717 = v739[0];
    var v692 = v717.elements;
    var v651 = v692[6];
    var v592 = v651.selectedIndex;
    var v497 = v591[v592];
    var v284 = v497.value;
    writeProtIep(newProtein, v282, v283, v284);
    var v285 = outputWindow.document;
    JAM.call(v285.write, v285, ["<br />\n<br />\n"], JAM.policy.p14);
    i$$11 = i$$11 + 1;
    var v498 = arrayOfFasta$$1.length;
    v286 = i$$11 < v498
  }
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function writeProtIep(proteinSequence$$1, copies, fusion, pKSet) {
  var pH = 7;
  var step = 3.5;
  var charge = 0;
  var last_charge = 0;
  copies = parseInt(copies);
  var j$$10 = 0;
  var v287 = j$$10 < copies;
  for(;v287;) {
    proteinSequence$$1 = proteinSequence$$1 + fusion;
    j$$10 = j$$10 + 1;
    v287 = j$$10 < copies
  }
  var N_term_pK;
  var K_pK;
  var R_pK;
  var H_pK;
  var D_pK;
  var E_pK;
  var C_pK;
  var Y_pK;
  var C_term_pK;
  var v499 = JAM.call(pKSet.toLowerCase, pKSet, [], JAM.policy.p13);
  var v288 = v499 == "dtaselect";
  if(v288) {
    N_term_pK = 8;
    K_pK = 10;
    R_pK = 12;
    H_pK = 6.5;
    D_pK = 4.4;
    E_pK = 4.4;
    C_pK = 8.5;
    Y_pK = 10;
    C_term_pK = 3.1
  }else {
    N_term_pK = 8.6;
    K_pK = 10.8;
    R_pK = 12.5;
    H_pK = 6.5;
    D_pK = 3.9;
    E_pK = 4.1;
    C_pK = 8.5;
    Y_pK = 10.1;
    C_term_pK = 3.6
  }
  var K_count = 0;
  var v500 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/k/i], JAM.policy.p13);
  var v290 = v500 != -1;
  if(v290) {
    var v289 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/k/gi], JAM.policy.p13);
    K_count = v289.length
  }
  var R_count = 0;
  var v501 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/r/i], JAM.policy.p13);
  var v292 = v501 != -1;
  if(v292) {
    var v291 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/r/gi], JAM.policy.p13);
    R_count = v291.length
  }
  var H_count = 0;
  var v502 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/h/i], JAM.policy.p13);
  var v294 = v502 != -1;
  if(v294) {
    var v293 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/h/gi], JAM.policy.p13);
    H_count = v293.length
  }
  var D_count = 0;
  var v503 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/d/i], JAM.policy.p13);
  var v296 = v503 != -1;
  if(v296) {
    var v295 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/d/gi], JAM.policy.p13);
    D_count = v295.length
  }
  var E_count = 0;
  var v504 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/e/i], JAM.policy.p13);
  var v298 = v504 != -1;
  if(v298) {
    var v297 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/e/gi], JAM.policy.p13);
    E_count = v297.length
  }
  var C_count = 0;
  var v505 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/c/i], JAM.policy.p13);
  var v300 = v505 != -1;
  if(v300) {
    var v299 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/c/gi], JAM.policy.p13);
    C_count = v299.length
  }
  var Y_count = 0;
  var v506 = JAM.call(proteinSequence$$1.search, proteinSequence$$1, [/y/i], JAM.policy.p13);
  var v302 = v506 != -1;
  if(v302) {
    var v301 = JAM.call(proteinSequence$$1.match, proteinSequence$$1, [/y/gi], JAM.policy.p13);
    Y_count = v301.length
  }
  for(;1;) {
    var v755 = partial_charge(N_term_pK, pH);
    var v768 = K_count;
    var v769 = partial_charge(K_pK, pH);
    var v756 = v768 * v769;
    var v740 = v755 + v756;
    var v757 = R_count;
    var v758 = partial_charge(R_pK, pH);
    var v741 = v757 * v758;
    var v718 = v740 + v741;
    var v742 = H_count;
    var v743 = partial_charge(H_pK, pH);
    var v719 = v742 * v743;
    var v693 = v718 + v719;
    var v720 = D_count;
    var v721 = partial_charge(pH, D_pK);
    var v694 = v720 * v721;
    var v652 = v693 - v694;
    var v695 = E_count;
    var v696 = partial_charge(pH, E_pK);
    var v653 = v695 * v696;
    var v593 = v652 - v653;
    var v654 = C_count;
    var v655 = partial_charge(pH, C_pK);
    var v594 = v654 * v655;
    var v507 = v593 - v594;
    var v595 = Y_count;
    var v596 = partial_charge(pH, Y_pK);
    var v508 = v595 * v596;
    var v303 = v507 - v508;
    var v304 = partial_charge(pH, C_term_pK);
    charge = v303 - v304;
    var v509 = JAM.call(charge.toFixed, charge, [2], JAM.policy.p13);
    var v597 = last_charge * 100;
    var v510 = JAM.call(v597.toFixed, v597, [2], JAM.policy.p13);
    var v305 = v509 == v510;
    if(v305) {
      break
    }
    var v306 = charge > 0;
    if(v306) {
      pH = pH + step
    }else {
      pH = pH - step
    }
    step = step / 2;
    last_charge = charge
  }
  pH = JAM.call(pH.toFixed, pH, [2], JAM.policy.p13);
  var v307 = outputWindow.document;
  var v308 = "pH " + pH;
  JAM.call(v307.write, v307, [v308], JAM.policy.p23);
  return true
}
function partial_charge(first$$1, second) {
  var v309 = first$$1 - second;
  var charge$$1 = JAM.call(Math.pow, Math, [10, v309], JAM.policy.p13);
  var v310 = charge$$1 + 1;
  return charge$$1 / v310
}
JAM.set(document, "onload", v2);
var v311 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p14);
JAM.set(v311, "onclick", v3);
var v312 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p14);
JAM.set(v312, "onclick", v4);

JAM.stopProfile('load');
