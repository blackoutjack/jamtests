
JAM.startProfile('load');
function v6() {
  var v554 = document.forms;
  var v478 = v554[0];
  var v293 = v478.elements;
  var v7 = v293[0];
  v7.value = " ";
  return
}
function v5() {
  try {
    oneToThree(document)
  }catch(e$$5) {
    var v8 = "The following error was encountered: " + e$$5;
    alert(v8)
  }
  return
}
function v4() {
  var v294 = document.main_form;
  var v9 = v294.main_submit;
  JAM.call(v9.focus, v9, [], JAM.policy.p13);
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
  var v10 = arrayOfSequences[0];
  var lengthOfAlign = v10.length;
  var v295 = arrayOfSequences.length;
  var v11 = v295 < 2;
  if(v11) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v296 = arrayOfTitles.length;
  var v13 = i$$1 < v296;
  for(;v13;) {
    var v555 = arrayOfTitles[i$$1];
    var v479 = JAM.call(v555.search, v555, [/\S/], JAM.policy.p13);
    var v297 = v479 == -1;
    var v481 = !v297;
    if(v481) {
      var v602 = arrayOfSequences[i$$1];
      var v556 = JAM.call(v602.search, v602, [/\S/], JAM.policy.p13);
      var v480 = v556 == -1;
      var v558 = !v480;
      if(v558) {
        var v603 = arrayOfSequences[i$$1];
        var v557 = v603.length;
        v480 = v557 != lengthOfAlign
      }
      v297 = v480
    }
    var v12 = v297;
    if(v12) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v298 = arrayOfTitles.length;
    v13 = i$$1 < v298
  }
  return true
}
function checkCodonTable(codonTable) {
  var v482 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p13);
  var v299 = v482 == -1;
  var v484 = !v299;
  if(v484) {
    var v559 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p13);
    var v483 = v559 == -1;
    var v561 = !v483;
    if(v561) {
      var v604 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p13);
      var v560 = v604 == -1;
      var v606 = !v560;
      if(v606) {
        var v633 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p13);
        var v605 = v633 == -1;
        var v635 = !v605;
        if(v635) {
          var v634 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p13);
          v605 = v634 == -1
        }
        v560 = v605
      }
      v483 = v560
    }
    v299 = v483
  }
  var v14 = v299;
  if(v14) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v485 = formElement.value;
  var v300 = JAM.call(v485.search, v485, [/\S/], JAM.policy.p13);
  var v15 = v300 == -1;
  if(v15) {
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
  var v301 = arrayOfPatterns.length;
  var v18 = z$$2 < v301;
  for(;v18;) {
    var v486 = arrayOfPatterns[z$$2];
    var v302 = JAM.call(v486.search, v486, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p13);
    var v16 = v302 == -1;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v487 = arrayOfPatterns[z$$2];
    var v303 = moreExpressionCheck(v487);
    var v17 = v303 == false;
    if(v17) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v304 = arrayOfPatterns.length;
    v18 = z$$2 < v304
  }
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v19);
  var v20 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v20);
  var j = 0;
  var v305 = arrayOfPatterns.length;
  var v27 = j < v305;
  for(;v27;) {
    var v21 = geneticCodeMatchExp;
    var v22 = j;
    var v562 = arrayOfPatterns[j];
    var v488 = JAM.call(v562.match, v562, [/\/.+\//], JAM.policy.p13);
    var v306 = v488 + "gi";
    if(JAM.isEval(eval)) {
      var v718 = eval("introspect(JAM.policy.pFull) { " + v306 + " }")
    }else {
      var v718 = JAM.call(eval, null, [v306])
    }
    v21[v22] = v718;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    var v489 = arrayOfPatterns[j];
    var v307 = JAM.call(v489.match, v489, [/=[a-zA-Z\*]/], JAM.policy.p13);
    var v719 = JAM.call(v307.toString, v307, [], JAM.policy.p13);
    v23[v24] = v719;
    var v25 = geneticCodeMatchResult;
    var v26 = j;
    var v308 = geneticCodeMatchResult[j];
    var v720 = JAM.call(v308.replace, v308, [/=/g, ""], JAM.policy.p13);
    v25[v26] = v720;
    j = j + 1;
    var v309 = arrayOfPatterns.length;
    v27 = j < v309
  }
  var i$$2 = 0;
  var v490 = testSequence.length;
  var v310 = v490 - 3;
  var v34 = i$$2 <= v310;
  for(;v34;) {
    var v28 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v28], JAM.policy.p13);
    j = 0;
    var v311 = geneticCodeMatchExp.length;
    var v32 = j < v311;
    for(;v32;) {
      var v491 = geneticCodeMatchExp[j];
      var v312 = JAM.call(codon.search, codon, [v491], JAM.policy.p23);
      var v31 = v312 != -1;
      if(v31) {
        var v30 = oneMatch == true;
        if(v30) {
          var v313 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v29 = v313 + ".";
          alert(v29);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v314 = geneticCodeMatchExp.length;
      v32 = j < v314
    }
    var v33 = oneMatch == false;
    if(v33) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v492 = testSequence.length;
    var v315 = v492 - 3;
    v34 = i$$2 <= v315
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v316 = arrayOfPatterns$$1.length;
  var v36 = z$$3 < v316;
  for(;v36;) {
    var v493 = arrayOfPatterns$$1[z$$3];
    var v317 = JAM.call(v493.search, v493, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p13);
    var v35 = v317 != -1;
    if(v35) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v318 = arrayOfPatterns$$1.length;
    v36 = z$$3 < v318
  }
  var i$$3 = 0;
  var v319 = arrayOfPatterns$$1.length;
  var v40 = i$$3 < v319;
  for(;v40;) {
    var v494 = arrayOfPatterns$$1[i$$3];
    var v320 = "[" + v494;
    var v37 = v320 + "]";
    var re = new RegExp(v37, "gi");
    var j$$1 = i$$3 + 1;
    var v321 = arrayOfPatterns$$1.length;
    var v39 = j$$1 < v321;
    for(;v39;) {
      var v495 = arrayOfPatterns$$1[j$$1];
      var v322 = JAM.call(v495.search, v495, [re], JAM.policy.p23);
      var v38 = v322 != -1;
      if(v38) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v323 = arrayOfPatterns$$1.length;
      v39 = j$$1 < v323
    }
    i$$3 = i$$3 + 1;
    var v324 = arrayOfPatterns$$1.length;
    v40 = i$$3 < v324
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v325 = arrayOfPatterns$$2.length;
  var v43 = z$$4 < v325;
  for(;v43;) {
    var v496 = arrayOfPatterns$$2[z$$4];
    var v326 = JAM.call(v496.search, v496, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p13);
    var v41 = v326 == -1;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v497 = arrayOfPatterns$$2[z$$4];
    var v327 = moreExpressionCheck(v497);
    var v42 = v327 == false;
    if(v42) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v328 = arrayOfPatterns$$2.length;
    v43 = z$$4 < v328
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v563 = getSequenceFromFasta(text$$7);
  var v498 = JAM.call(v563.replace, v563, [/[^A-Za-z]/g, ""], JAM.policy.p13);
  var v329 = v498.length;
  var v45 = v329 > maxInput;
  if(v45) {
    var v330 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v44 = v330 + " characters.";
    alert(v44);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v331 = text$$8.length;
  var v47 = v331 > maxInput$$1;
  if(v47) {
    var v332 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v46 = v332 + " characters.";
    alert(v46);
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
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</form>"], JAM.policy.p14);
  return true
}
function closePre() {
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</div>"], JAM.policy.p14);
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</pre>\n"], JAM.policy.p14);
  return
}
function closeTextArea() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</textarea>"], JAM.policy.p14);
  return true
}
function closeWindow() {
  var v52 = outputWindow.document;
  JAM.call(v52.write, v52, ["</body>\n</html>\n"], JAM.policy.p14);
  outputWindow.status = "Done.";
  var v53 = outputWindow.document;
  JAM.call(v53.close, v53, [], JAM.policy.p13);
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
  var v333 = alignArray.length;
  var v54 = v333 < 3;
  if(v54) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v334 = alignArray.length;
  var v56 = i$$4 < v334;
  for(;v56;) {
    var v499 = alignArray[i$$4];
    var v335 = JAM.call(v499.search, v499, [/[^\s]+\s/], JAM.policy.p13);
    var v55 = v335 == -1;
    if(v55) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v336 = alignArray.length;
    v56 = i$$4 < v336
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
  var v337 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v59 = v337 != -1;
  if(v59) {
    var v58 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p23);
    for(;v58;) {
      var v57 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v57], JAM.policy.p23);
      v58 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p23)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v338 = sequence$$2.length;
  var v60 = "&gt;results for " + v338;
  var stringToReturn = v60 + " residue sequence ";
  var v339 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p13);
  var v62 = v339 != -1;
  if(v62) {
    var v340 = stringToReturn + '"';
    var v61 = v340 + fastaSequenceTitle;
    stringToReturn = v61 + '"'
  }
  var v341 = stringToReturn + ' starting "';
  var v342 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v63 = v341 + v342;
  stringToReturn = v63 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v343 = sequenceOne.length;
  var v64 = "Search results for " + v343;
  var stringToReturn$$1 = v64 + " residue sequence ";
  var v344 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p13);
  var v66 = v344 != -1;
  if(v66) {
    var v345 = stringToReturn$$1 + '"';
    var v65 = v345 + fastaSequenceTitleOne;
    stringToReturn$$1 = v65 + '"'
  }
  var v346 = stringToReturn$$1 + ' starting "';
  var v347 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v67 = v346 + v347;
  stringToReturn$$1 = v67 + '"\n';
  var v348 = stringToReturn$$1 + "and ";
  var v349 = sequenceTwo.length;
  var v68 = v348 + v349;
  stringToReturn$$1 = v68 + " residue sequence ";
  var v350 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p13);
  var v70 = v350 != -1;
  if(v70) {
    var v351 = stringToReturn$$1 + '"';
    var v69 = v351 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v69 + '"'
  }
  var v352 = stringToReturn$$1 + ' starting "';
  var v353 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v71 = v352 + v353;
  stringToReturn$$1 = v71 + '"';
  var v72 = '<div class="info">' + stringToReturn$$1;
  return v72 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v73 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v73);
  var j$$2 = 0;
  var v354 = arrayOfPatterns$$3.length;
  var v76 = j$$2 < v354;
  for(;v76;) {
    var v74 = geneticCodeMatchExp$$1;
    var v75 = j$$2;
    var v564 = arrayOfPatterns$$3[j$$2];
    var v500 = JAM.call(v564.match, v564, [/\/.+\//], JAM.policy.p13);
    var v355 = v500 + "gi";
    if(JAM.isEval(eval)) {
      var v721 = eval("introspect(JAM.policy.pFull) { " + v355 + " }")
    }else {
      var v721 = JAM.call(eval, null, [v355])
    }
    v74[v75] = v721;
    j$$2 = j$$2 + 1;
    var v356 = arrayOfPatterns$$3.length;
    v76 = j$$2 < v356
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v77 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v77);
  var j$$3 = 0;
  var v357 = arrayOfPatterns$$4.length;
  var v82 = j$$3 < v357;
  for(;v82;) {
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    var v501 = arrayOfPatterns$$4[j$$3];
    var v358 = JAM.call(v501.match, v501, [/=[a-zA-Z\*]/], JAM.policy.p13);
    var v722 = JAM.call(v358.toString, v358, [], JAM.policy.p13);
    v78[v79] = v722;
    var v80 = geneticCodeMatchResult$$1;
    var v81 = j$$3;
    var v359 = geneticCodeMatchResult$$1[j$$3];
    var v723 = JAM.call(v359.replace, v359, [/=/g, ""], JAM.policy.p13);
    v80[v81] = v723;
    j$$3 = j$$3 + 1;
    var v360 = arrayOfPatterns$$4.length;
    v82 = j$$3 < v360
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v361 = sequence$$3.length;
  var v83 = "Results for " + v361;
  var stringToReturn$$2 = v83 + " residue sequence ";
  var v362 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p13);
  var v85 = v362 != -1;
  if(v85) {
    var v363 = stringToReturn$$2 + '"';
    var v84 = v363 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v84 + '"'
  }
  var v364 = stringToReturn$$2 + ' starting "';
  var v365 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v86 = v364 + v365;
  stringToReturn$$2 = v86 + '"';
  var v87 = '<div class="info">' + stringToReturn$$2;
  return v87 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v502 = "Results for " + topology;
  var v366 = v502 + " ";
  var v367 = sequence$$4.length;
  var v88 = v366 + v367;
  var stringToReturn$$3 = v88 + " residue sequence ";
  var v368 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p13);
  var v90 = v368 != -1;
  if(v90) {
    var v369 = stringToReturn$$3 + '"';
    var v89 = v369 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v89 + '"'
  }
  var v370 = stringToReturn$$3 + ' starting "';
  var v371 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v91 = v370 + v371;
  stringToReturn$$3 = v91 + '"';
  var v92 = '<div class="info">' + stringToReturn$$3;
  return v92 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v372 = sequenceOne$$1.length;
  var v93 = "Alignment results for " + v372;
  var stringToReturn$$4 = v93 + " residue sequence ";
  var v373 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p13);
  var v95 = v373 != -1;
  if(v95) {
    var v374 = stringToReturn$$4 + '"';
    var v94 = v374 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v94 + '"'
  }
  var v375 = stringToReturn$$4 + ' starting "';
  var v376 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v96 = v375 + v376;
  stringToReturn$$4 = v96 + '"\n';
  var v377 = stringToReturn$$4 + "and ";
  var v378 = sequenceTwo$$1.length;
  var v97 = v377 + v378;
  stringToReturn$$4 = v97 + " residue sequence ";
  var v379 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p13);
  var v99 = v379 != -1;
  if(v99) {
    var v380 = stringToReturn$$4 + '"';
    var v98 = v380 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v98 + '"'
  }
  var v381 = stringToReturn$$4 + ' starting "';
  var v382 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v100 = v381 + v382;
  stringToReturn$$4 = v100 + '"';
  var v101 = '<div class="info">' + stringToReturn$$4;
  return v101 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v103 = j$$4 < lengthOut;
  for(;v103;) {
    var v383 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v384 = components.length;
    var v102 = v383 * v384;
    tempNum = JAM.call(Math.floor, Math, [v102], JAM.policy.p13);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p23);
    j$$4 = j$$4 + 1;
    v103 = j$$4 < lengthOut
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p14)
}
function getSequenceFromFasta(sequenceRecord) {
  var v385 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v104 = v385 != -1;
  if(v104) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p13)
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v386 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v106 = v386 != -1;
  if(v106) {
    var v105 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p13);
    fastaTitle = JAM.call(v105.toString, v105, [], JAM.policy.p13);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p13);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p13);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p13)
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v503 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p13);
  var v387 = v503 != -1;
  var v505 = !v387;
  if(v505) {
    var v565 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p13);
    var v504 = v565 != -1;
    var v567 = !v504;
    if(v567) {
      var v607 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p13);
      var v566 = v607 != -1;
      var v609 = !v566;
      if(v609) {
        var v636 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p13);
        var v608 = v636 != -1;
        var v638 = !v608;
        if(v638) {
          var v648 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p13);
          var v637 = v648 != -1;
          var v650 = !v637;
          if(v650) {
            var v660 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p13);
            var v649 = v660 != -1;
            var v662 = !v649;
            if(v662) {
              var v671 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p13);
              var v661 = v671 != -1;
              var v673 = !v661;
              if(v673) {
                var v680 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p13);
                var v672 = v680 != -1;
                var v682 = !v672;
                if(v682) {
                  var v689 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p13);
                  var v681 = v689 != -1;
                  var v691 = !v681;
                  if(v691) {
                    var v696 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p13);
                    var v690 = v696 != -1;
                    var v698 = !v690;
                    if(v698) {
                      var v697 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p13);
                      v690 = v697 != -1
                    }
                    v681 = v690
                  }
                  v672 = v681
                }
                v661 = v672
              }
              v649 = v661
            }
            v637 = v649
          }
          v608 = v637
        }
        v566 = v608
      }
      v504 = v566
    }
    v387 = v504
  }
  var v107 = v387;
  if(v107) {
    return false
  }
  return true
}
function openForm() {
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ['<form action="">\n'], JAM.policy.p14);
  return true
}
function openPre() {
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ["<pre>"], JAM.policy.p14);
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<div class="pre">'], JAM.policy.p14);
  return
}
function openTextArea() {
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p14);
  return true
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p13);
  var v112 = outputWindow.document;
  var v568 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v506 = v568 + "<head>\n";
  var v388 = v506 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v388 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p23);
  if(isColor) {
    var v114 = outputWindow.document;
    var v711 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v707 = v711 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v703 = v707 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v699 = v703 + "div.info {font-weight: bold}\n";
    var v692 = v699 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v683 = v692 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v674 = v683 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v663 = v674 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v651 = v663 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v639 = v651 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v610 = v639 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v569 = v610 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v507 = v569 + "td.many {color: #000000}\n";
    var v389 = v507 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v115 = v389 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p23)
  }else {
    var v116 = outputWindow.document;
    var v715 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v712 = v715 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v708 = v712 + "div.title {display: none}\n";
    var v704 = v708 + "div.info {font-weight: bold}\n";
    var v700 = v704 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v693 = v700 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v684 = v693 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v675 = v684 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v664 = v675 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v652 = v664 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v640 = v652 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v611 = v640 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v570 = v611 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v508 = v570 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v390 = v508 + "img {display: none}\n";
    var v117 = v390 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p23)
  }
  var v118 = outputWindow.document;
  var v571 = "</head>\n" + '<body class="main">\n';
  var v509 = v571 + '<div class="title">';
  var v391 = v509 + title$$7;
  var v119 = v391 + " results</div>\n";
  JAM.call(v118.write, v118, [v119], JAM.policy.p23);
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
  var v120 = outputWindow.document;
  var v572 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v510 = v572 + "<head>\n";
  var v392 = v510 + "<title>Sequence Manipulation Suite</title>\n";
  var v121 = v392 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v120.write, v120, [v121], JAM.policy.p23);
  if(isBackground) {
    var v122 = outputWindow.document;
    var v713 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v709 = v713 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v705 = v709 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v701 = v705 + "div.info {font-weight: bold}\n";
    var v694 = v701 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v685 = v694 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v676 = v685 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v665 = v676 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v653 = v665 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v641 = v653 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v612 = v641 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v573 = v612 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v511 = v573 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v393 = v511 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v123 = v393 + "</style>\n";
    JAM.call(v122.write, v122, [v123], JAM.policy.p23)
  }else {
    var v124 = outputWindow.document;
    var v717 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v716 = v717 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v714 = v716 + "div.title {display: none}\n";
    var v710 = v714 + "div.info {font-weight: bold}\n";
    var v706 = v710 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v702 = v706 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v695 = v702 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v686 = v695 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v677 = v686 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v666 = v677 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v654 = v666 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v642 = v654 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v613 = v642 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v574 = v613 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v512 = v574 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v394 = v512 + "img {display: none}\n";
    var v125 = v394 + "</style>\n";
    JAM.call(v124.write, v124, [v125], JAM.policy.p23)
  }
  var v126 = outputWindow.document;
  var v575 = "</head>\n" + '<body class="main">\n';
  var v513 = v575 + '<div class="title">';
  var v395 = v513 + title$$9;
  var v127 = v395 + " results</div>\n";
  JAM.call(v126.write, v126, [v127], JAM.policy.p23);
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
  var v396 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p13);
  var v128 = v396 != -1;
  if(v128) {
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
  var v129 = j$$5 < lengthOfColumn;
  for(;v129;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v129 = j$$5 < lengthOfColumn
  }
  var v130 = tempString + theNumber;
  theNumber = v130 + " ";
  var v131 = sequenceToAppend + theNumber;
  sequenceToAppend = v131 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p23);
  var v397 = testArray[0];
  var v132 = v397 != testString;
  if(v132) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v398 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p23);
  var v133 = v398 == -1;
  if(v133) {
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
  var v134 = !caughtException;
  if(v134) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p13);
  var v135 = testString != "1X2X3X";
  if(v135) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v399 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p13);
  var v136 = v399 != 2489.824;
  if(v136) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v400 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p13);
  var v137 = v400 != 2489.8;
  if(v137) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v401 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p13);
  var v138 = v401 == -1;
  if(v138) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v514 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p13);
  var v402 = v514 == -1;
  var v516 = !v402;
  if(v516) {
    var v576 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p13);
    var v515 = v576 == -1;
    var v578 = !v515;
    if(v578) {
      var v614 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p13);
      var v577 = v614 == -1;
      var v616 = !v577;
      if(v616) {
        var v615 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p13);
        v577 = v615 == -1
      }
      v515 = v577
    }
    v402 = v515
  }
  var v139 = v402;
  if(v139) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v403 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p13);
  var v140 = v403 == -1;
  if(v140) {
    alert("Please enter a number.");
    return false
  }
  var v142 = theNumber$$2 > maxInput$$2;
  if(v142) {
    var v404 = "Please enter a number less than or equal to " + maxInput$$2;
    var v141 = v404 + ".";
    alert(v141);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v405 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p13);
  var v143 = v405 != -1;
  if(v143) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v406 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p13);
  var v144 = v406 != -1;
  if(v144) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v517 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p13);
  var v407 = v517 == -1;
  var v519 = !v407;
  if(v519) {
    var v579 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p13);
    var v518 = v579 == -1;
    var v581 = !v518;
    if(v581) {
      var v617 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p13);
      var v580 = v617 == -1;
      var v619 = !v580;
      if(v619) {
        var v618 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p13);
        v580 = v618 == -1
      }
      v518 = v580
    }
    v407 = v518
  }
  var v145 = v407;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v520 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p13);
  var v408 = v520 == -1;
  var v522 = !v408;
  if(v522) {
    var v582 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p13);
    var v521 = v582 == -1;
    var v584 = !v521;
    if(v584) {
      var v620 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p13);
      var v583 = v620 == -1;
      var v622 = !v583;
      if(v622) {
        var v621 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p13);
        v583 = v621 == -1
      }
      v521 = v583
    }
    v408 = v521
  }
  var v146 = v408;
  if(v146) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v409 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p13);
  var v147 = v409 == -1;
  if(v147) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v523 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p13);
  var v410 = v523 == -1;
  var v525 = !v410;
  if(v525) {
    var v585 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p13);
    var v524 = v585 == -1;
    var v587 = !v524;
    if(v587) {
      var v623 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p13);
      var v586 = v623 == -1;
      var v625 = !v586;
      if(v625) {
        var v624 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p13);
        v586 = v624 == -1
      }
      v524 = v586
    }
    v410 = v524
  }
  var v148 = v410;
  if(v148) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v411 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p13);
  var v149 = v411 == -1;
  if(v149) {
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
  var v157 = i$$5 < stopBase;
  for(;v157;) {
    var v150 = i$$5 + 1;
    lineOfText = rightNum(v150, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v412 = basePerLine / groupSize;
    var v154 = j$$6 <= v412;
    for(;v154;) {
      var v153 = k < groupSize;
      for(;v153;) {
        var v151 = lineOfText;
        var v413 = k + i$$5;
        var v152 = JAM.call(text$$10.charAt, text$$10, [v413], JAM.policy.p23);
        lineOfText = v151 + v152;
        k = k + 1;
        v153 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v414 = basePerLine / groupSize;
      v154 = j$$6 <= v414
    }
    var v155 = outputWindow.document;
    var v156 = lineOfText + "\n";
    JAM.call(v155.write, v155, [v156], JAM.policy.p23);
    lineOfText = "";
    v157 = i$$5 < stopBase
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
    var v415 = adjustment < 0;
    if(v415) {
      v415 = adjusted >= 0
    }
    var v158 = v415;
    if(v158) {
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
  var v191 = i$$6 < stopBase$$2;
  for(;v191;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v416 = basePerLine$$2 / groupSize$$2;
    var v167 = j$$7 <= v416;
    for(;v167;) {
      var v162 = k$$1 < groupSize$$2;
      for(;v162;) {
        var v417 = i$$6 + k$$1;
        var v159 = v417 >= stopBase$$2;
        if(v159) {
          break
        }
        var v160 = lineOfText$$1;
        var v418 = k$$1 + i$$6;
        var v161 = JAM.call(text$$12.charAt, text$$12, [v418], JAM.policy.p23);
        lineOfText$$1 = v160 + v161;
        k$$1 = k$$1 + 1;
        v162 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v165 = numberPosition$$1 == "above";
      if(v165) {
        var v163 = aboveNum;
        var v419 = adjustNumbering(i$$6, numberingAdjustment);
        var v164 = rightNum(v419, "", groupSize$$2, tabIn$$3);
        aboveNum = v163 + v164
      }
      var v166 = i$$6 >= stopBase$$2;
      if(v166) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v420 = basePerLine$$2 / groupSize$$2;
      v167 = j$$7 <= v420
    }
    var v190 = numberPosition$$1 == "left";
    if(v190) {
      var v168 = outputWindow.document;
      var v588 = adjustNumbering(lineNum, numberingAdjustment);
      var v526 = rightNum(v588, "", 8, tabIn$$3);
      var v421 = v526 + lineOfText$$1;
      var v169 = v421 + "\n";
      JAM.call(v168.write, v168, [v169], JAM.policy.p23);
      var v173 = strands$$1 == "two";
      if(v173) {
        var v170 = outputWindow.document;
        var v589 = adjustNumbering(lineNum, numberingAdjustment);
        var v527 = rightNum(v589, "", 8, tabIn$$3);
        var v528 = complement(lineOfText$$1);
        var v422 = v527 + v528;
        var v171 = v422 + "\n";
        JAM.call(v170.write, v170, [v171], JAM.policy.p23);
        var v172 = outputWindow.document;
        JAM.call(v172.write, v172, ["\n"], JAM.policy.p14)
      }
    }else {
      var v189 = numberPosition$$1 == "right";
      if(v189) {
        var v174 = outputWindow.document;
        var v529 = lineOfText$$1;
        var v530 = adjustNumbering(i$$6, numberingAdjustment);
        var v423 = v529 + v530;
        var v175 = v423 + "\n";
        JAM.call(v174.write, v174, [v175], JAM.policy.p23);
        var v179 = strands$$1 == "two";
        if(v179) {
          var v176 = outputWindow.document;
          var v531 = complement(lineOfText$$1);
          var v532 = adjustNumbering(i$$6, numberingAdjustment);
          var v424 = v531 + v532;
          var v177 = v424 + "\n";
          JAM.call(v176.write, v176, [v177], JAM.policy.p23);
          var v178 = outputWindow.document;
          JAM.call(v178.write, v178, ["\n"], JAM.policy.p14)
        }
      }else {
        var v188 = numberPosition$$1 == "above";
        if(v188) {
          var v180 = outputWindow.document;
          var v181 = aboveNum + "\n";
          JAM.call(v180.write, v180, [v181], JAM.policy.p23);
          var v182 = outputWindow.document;
          var v183 = lineOfText$$1 + "\n";
          JAM.call(v182.write, v182, [v183], JAM.policy.p23);
          var v187 = strands$$1 == "two";
          if(v187) {
            var v184 = outputWindow.document;
            var v425 = complement(lineOfText$$1);
            var v185 = v425 + "\n";
            JAM.call(v184.write, v184, [v185], JAM.policy.p23);
            var v186 = outputWindow.document;
            JAM.call(v186.write, v186, ["\n"], JAM.policy.p14)
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v191 = i$$6 < stopBase$$2
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
  var v212 = i$$7 < stopBase$$3;
  for(;v212;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v426 = basePerLine$$3 / groupSize$$3;
    var v200 = j$$8 <= v426;
    for(;v200;) {
      var v195 = k$$2 < groupSize$$3;
      for(;v195;) {
        var v427 = i$$7 + k$$2;
        var v192 = v427 >= stopBase$$3;
        if(v192) {
          break
        }
        var v193 = lineOfText$$2;
        var v428 = k$$2 + i$$7;
        var v194 = JAM.call(text$$13.charAt, text$$13, [v428], JAM.policy.p23);
        lineOfText$$2 = v193 + v194;
        k$$2 = k$$2 + 1;
        v195 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v198 = numberPosition$$2 == "above";
      if(v198) {
        var v196 = aboveNum$$1;
        var v197 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v196 + v197
      }
      var v199 = i$$7 >= stopBase$$3;
      if(v199) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v429 = basePerLine$$3 / groupSize$$3;
      v200 = j$$8 <= v429
    }
    var v211 = numberPosition$$2 == "left";
    if(v211) {
      var v201 = outputWindow.document;
      var v533 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v430 = v533 + lineOfText$$2;
      var v202 = v430 + "\n";
      JAM.call(v201.write, v201, [v202], JAM.policy.p23)
    }else {
      var v210 = numberPosition$$2 == "right";
      if(v210) {
        var v203 = outputWindow.document;
        var v431 = lineOfText$$2 + i$$7;
        var v204 = v431 + "\n";
        JAM.call(v203.write, v203, [v204], JAM.policy.p23)
      }else {
        var v209 = numberPosition$$2 == "above";
        if(v209) {
          var v205 = outputWindow.document;
          var v206 = aboveNum$$1 + "\n";
          JAM.call(v205.write, v205, [v206], JAM.policy.p23);
          var v207 = outputWindow.document;
          var v208 = lineOfText$$2 + "\n";
          JAM.call(v207.write, v207, [v208], JAM.policy.p23)
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v212 = i$$7 < stopBase$$3
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
  var v534 = sequence$$13.length;
  var v432 = v534 <= firstIndexToMutate;
  var v536 = !v432;
  if(v536) {
    var v535 = lastIndexToMutate < 0;
    var v590 = !v535;
    if(v590) {
      v535 = lastIndexToMutate <= firstIndexToMutate
    }
    v432 = v535
  }
  var v213 = v432;
  if(v213) {
    numMut = 0
  }
  var i$$8 = 0;
  var v221 = i$$8 < numMut;
  for(;v221;) {
    maxNum = sequence$$13.length;
    var v433 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v214 = v433 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v214], JAM.policy.p13);
    var v434 = randNum < firstIndexToMutate;
    var v537 = !v434;
    if(v537) {
      v434 = randNum > lastIndexToMutate
    }
    var v215 = v434;
    if(v215) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v221 = i$$8 < numMut;
      continue
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p13);
    needNewChar = true;
    for(;needNewChar;) {
      var v435 = JAM.call(Math.random, Math, [], JAM.policy.p13);
      var v436 = components$$1.length;
      var v216 = v435 * v436;
      componentsIndex = JAM.call(Math.round, Math, [v216], JAM.policy.p13);
      var v437 = components$$1.length;
      var v217 = componentsIndex == v437;
      if(v217) {
        componentsIndex = 0
      }
      var v438 = components$$1[componentsIndex];
      var v218 = v438 != currentChar;
      if(v218) {
        needNewChar = false
      }
    }
    var v439 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v440 = components$$1[componentsIndex];
    var v219 = v439 + v440;
    var v441 = randNum + 1;
    var v442 = sequence$$13.length;
    var v220 = JAM.call(sequence$$13.substring, sequence$$13, [v441, v442], JAM.policy.p24);
    sequence$$13 = v219 + v220;
    i$$8 = i$$8 + 1;
    v221 = i$$8 < numMut
  }
  var v222 = outputWindow.document;
  var v223 = addReturns(sequence$$13);
  JAM.call(v222.write, v222, [v223], JAM.policy.p23);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v228 = j$$9 < lengthOut$$1;
  for(;v228;) {
    var v443 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v444 = components$$2.length;
    var v224 = v443 * v444;
    tempNum$$1 = JAM.call(Math.floor, Math, [v224], JAM.policy.p13);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v445 = sequence$$14.length;
    var v227 = v445 == 60;
    if(v227) {
      var v225 = outputWindow.document;
      var v226 = sequence$$14 + "\n";
      JAM.call(v225.write, v225, [v226], JAM.policy.p23);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v228 = j$$9 < lengthOut$$1
  }
  var v229 = outputWindow.document;
  var v230 = sequence$$14 + "\n";
  JAM.call(v229.write, v229, [v230], JAM.policy.p23);
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
  var v234 = dnaConformation == "circular";
  if(v234) {
    var v231 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    shiftValue = v231.length;
    var v591 = sequence$$15.length;
    var v538 = v591 - lookAhead;
    var v539 = sequence$$15.length;
    var v446 = JAM.call(sequence$$15.substring, sequence$$15, [v538, v539], JAM.policy.p24);
    var v232 = v446 + sequence$$15;
    var v233 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v232 + v233;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v235 = outputWindow.document;
  JAM.call(v235.write, v235, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p14);
  var v236 = outputWindow.document;
  var v592 = '<tr><td class="title" width="200px">' + "Site:";
  var v540 = v592 + '</td><td class="title">';
  var v447 = v540 + "Positions:";
  var v237 = v447 + "</td></tr>\n";
  JAM.call(v236.write, v236, [v237], JAM.policy.p23);
  var i$$9 = 0;
  var v448 = arrayOfItems.length;
  var v253 = i$$9 < v448;
  for(;v253;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v449 = arrayOfItems[i$$9];
    var v238 = JAM.call(v449.match, v449, [/\/.+\//], JAM.policy.p13);
    matchExp = v238 + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    var v593 = arrayOfItems[i$$9];
    var v541 = JAM.call(v593.match, v593, [/\)\D*\d+/], JAM.policy.p13);
    var v450 = JAM.call(v541.toString, v541, [], JAM.policy.p13);
    var v239 = JAM.call(v450.replace, v450, [/\)\D*/, ""], JAM.policy.p13);
    cutDistance = parseFloat(v239);
    var v245 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p23);
    for(;v245;) {
      var v240 = matchExp.lastIndex;
      matchPosition = v240 - cutDistance;
      var v451 = matchPosition >= lowerLimit;
      if(v451) {
        v451 = matchPosition < upperLimit
      }
      var v243 = v451;
      if(v243) {
        timesFound = timesFound + 1;
        var v241 = tempString$$1 + ", ";
        var v452 = matchPosition - shiftValue;
        var v242 = v452 + 1;
        tempString$$1 = v241 + v242
      }
      var v453 = matchExp.lastIndex;
      var v542 = RegExp.lastMatch;
      var v454 = v542.length;
      var v244 = v453 - v454;
      matchExp.lastIndex = v244 + 1;
      v245 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p23)
    }
    var v455 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p13);
    var v246 = v455 != -1;
    if(v246) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p13)
    }
    var v250 = timesFound == 0;
    if(v250) {
      backGroundClass = "none"
    }else {
      var v249 = timesFound == 1;
      if(v249) {
        backGroundClass = "one"
      }else {
        var v248 = timesFound == 2;
        if(v248) {
          backGroundClass = "two"
        }else {
          var v247 = timesFound == 3;
          if(v247) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v251 = outputWindow.document;
    var v667 = '<tr><td class="' + backGroundClass;
    var v655 = v667 + '">';
    var v687 = arrayOfItems[i$$9];
    var v678 = JAM.call(v687.match, v687, [/\([^\(]+\)/], JAM.policy.p13);
    var v668 = JAM.call(v678.toString, v678, [], JAM.policy.p13);
    var v656 = JAM.call(v668.replace, v668, [/\(|\)/g, ""], JAM.policy.p13);
    var v643 = v655 + v656;
    var v626 = v643 + '</td><td class="';
    var v594 = v626 + backGroundClass;
    var v543 = v594 + '">';
    var v456 = v543 + tempString$$1;
    var v252 = v456 + "</td></tr>\n";
    JAM.call(v251.write, v251, [v252], JAM.policy.p23);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v457 = arrayOfItems.length;
    v253 = i$$9 < v457
  }
  var v254 = outputWindow.document;
  JAM.call(v254.write, v254, ["</tbody></table>\n"], JAM.policy.p14);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v255 = outputWindow.document;
  JAM.call(v255.write, v255, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p14);
  var v256 = outputWindow.document;
  var v644 = '<tr><td class="title">' + "Pattern:";
  var v627 = v644 + '</td><td class="title">';
  var v595 = v627 + "Times found:";
  var v544 = v595 + '</td><td class="title">';
  var v458 = v544 + "Percentage:";
  var v257 = v458 + "</td></tr>\n";
  JAM.call(v256.write, v256, [v257], JAM.policy.p23);
  var i$$10 = 0;
  var v459 = arrayOfItems$$1.length;
  var v266 = i$$10 < v459;
  for(;v266;) {
    var tempNumber = 0;
    var v460 = arrayOfItems$$1[i$$10];
    var v258 = JAM.call(v460.match, v460, [/\/[^\/]+\//], JAM.policy.p13);
    var matchExp$$1 = v258 + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    var v461 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p23);
    var v260 = v461 != -1;
    if(v260) {
      var v259 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p23);
      tempNumber = v259.length
    }
    var percentage = 0;
    var v545 = originalLength + 1;
    var v628 = arrayOfItems$$1[i$$10];
    var v596 = JAM.call(v628.match, v628, [/\d+/], JAM.policy.p13);
    var v546 = parseFloat(v596);
    var v462 = v545 - v546;
    var v263 = v462 > 0;
    if(v263) {
      var v261 = 100 * tempNumber;
      var v463 = originalLength + 1;
      var v597 = arrayOfItems$$1[i$$10];
      var v547 = JAM.call(v597.match, v597, [/\d+/], JAM.policy.p13);
      var v464 = parseFloat(v547);
      var v262 = v463 - v464;
      percentage = v261 / v262
    }
    var v264 = outputWindow.document;
    var v688 = arrayOfItems$$1[i$$10];
    var v679 = JAM.call(v688.match, v688, [/\([^\(]+\)\b/], JAM.policy.p13);
    var v669 = JAM.call(v679.toString, v679, [], JAM.policy.p13);
    var v657 = JAM.call(v669.replace, v669, [/\(|\)/g, ""], JAM.policy.p13);
    var v645 = "<tr><td>" + v657;
    var v629 = v645 + "</td><td>";
    var v598 = v629 + tempNumber;
    var v548 = v598 + "</td><td>";
    var v549 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p13);
    var v465 = v548 + v549;
    var v265 = v465 + "</td></tr>\n";
    JAM.call(v264.write, v264, [v265], JAM.policy.p23);
    i$$10 = i$$10 + 1;
    var v466 = arrayOfItems$$1.length;
    v266 = i$$10 < v466
  }
  var v267 = outputWindow.document;
  JAM.call(v267.write, v267, ["</tbody></table>\n"], JAM.policy.p14);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v467 = sequence$$17.length;
  var v274 = v467 > 0;
  for(;v274;) {
    maxNum$$1 = sequence$$17.length;
    var v468 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v268 = v468 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v268], JAM.policy.p13);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p13);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v269 = randNum$$1 + 1;
    var v270 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v269, v270], JAM.policy.p13);
    sequence$$17 = tempString1 + tempString2;
    var v469 = tempSeq.length;
    var v273 = v469 == 60;
    if(v273) {
      var v271 = outputWindow.document;
      var v272 = tempSeq + "\n";
      JAM.call(v271.write, v271, [v272], JAM.policy.p23);
      tempSeq = ""
    }
    var v470 = sequence$$17.length;
    v274 = v470 > 0
  }
  var v275 = outputWindow.document;
  var v276 = tempSeq + "\n";
  JAM.call(v275.write, v275, [v276], JAM.policy.p23);
  return true
}
function oneToThree(theDocument) {
  JAM.startProfile('compute');

  var newProtein = "";
  var maxInput$$3 = 1E5;
  var v471 = testScript();
  var v277 = v471 == false;
  if(v277) {
    return false
  }
  var v658 = theDocument.forms;
  var v646 = v658[0];
  var v630 = v646.elements;
  var v599 = v630[0];
  var v550 = checkFormElement(v599);
  var v472 = v550 == false;
  var v552 = !v472;
  if(v552) {
    var v670 = theDocument.forms;
    var v659 = v670[0];
    var v647 = v659.elements;
    var v631 = v647[0];
    var v600 = v631.value;
    var v551 = checkTextLength(v600, maxInput$$3);
    v472 = v551 == false
  }
  var v278 = v472;
  if(v278) {
    return false
  }
  openWindow("One to Three");
  openPre();
  var v632 = theDocument.forms;
  var v601 = v632[0];
  var v553 = v601.elements;
  var v473 = v553[0];
  var v279 = v473.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v279);
  var i$$11 = 0;
  var v474 = arrayOfFasta$$1.length;
  var v285 = i$$11 < v474;
  for(;v285;) {
    var v280 = arrayOfFasta$$1[i$$11];
    newProtein = getSequenceFromFasta(v280);
    var v281 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v281);
    newProtein = removeNonProteinAllowDegen(newProtein);
    var v282 = outputWindow.document;
    var v283 = getFastaTitleFromTitleAndSequence(title, newProtein);
    JAM.call(v282.write, v282, [v283], JAM.policy.p23);
    writeOneToThree(newProtein);
    var v284 = outputWindow.document;
    JAM.call(v284.write, v284, ["\n\n"], JAM.policy.p14);
    i$$11 = i$$11 + 1;
    var v475 = arrayOfFasta$$1.length;
    v285 = i$$11 < v475
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function writeOneToThree(proteinSequence$$1) {
  function v3(str$$9, p1$$3, p2, p3, offset$$15, s$$5) {
    var v476 = p1$$3;
    var v477 = JAM.call(p2.toLowerCase, p2, [], JAM.policy.p13);
    var v286 = v476 + v477;
    var v287 = JAM.call(p3.toLowerCase, p3, [], JAM.policy.p13);
    return v286 + v287
  }
  function v2(str$$8, p1$$2, offset$$14, s$$4) {
    var v288 = " " + p1$$2;
    return v288 + " "
  }
  proteinSequence$$1 = JAM.call(proteinSequence$$1.toLowerCase, proteinSequence$$1, [], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/(.)/g, v2], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/a/g, "ALA"], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/b/g, "ASX"], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/c/g, "CYS"], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/d/g, "ASP"], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/e/g, "GLU"], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/f/g, "PHE"], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/g/g, "GLY"], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/h/g, "HIS"], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/i/g, "ILE"], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/k/g, "LYS"], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/l/g, "LEU"], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/m/g, "MET"], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/n/g, "ASN"], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/p/g, "PRO"], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/q/g, "GLN"], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/r/g, "ARG"], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/s/g, "SER"], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/t/g, "THR"], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/v/g, "VAL"], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/w/g, "TRP"], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/x/g, "XAA"], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/y/g, "TYR"], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/z/g, "GLX"], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/\*/g, "***"], JAM.policy.p13);
  proteinSequence$$1 = JAM.call(proteinSequence$$1.replace, proteinSequence$$1, [/\s*(.)(.)(.)\s*/g, v3], JAM.policy.p13);
  var v289 = outputWindow.document;
  var v290 = addReturns(proteinSequence$$1);
  JAM.call(v289.write, v289, [v290], JAM.policy.p23);
  return true
}
JAM.set(document, "onload", v4);
var v291 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p14);
JAM.set(v291, "onclick", v5);
var v292 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p14);
JAM.set(v292, "onclick", v6);

JAM.stopProfile('load');
