
JAM.startProfile('load');
function v4() {
  var v608 = document.forms;
  var v519 = v608[0];
  var v322 = v519.elements;
  var v5 = v322[0];
  v5.value = " ";
  var v609 = document.forms;
  var v520 = v609[0];
  var v323 = v520.elements;
  var v6 = v323[4];
  v6.value = " ";
  return
}
function v3() {
  try {
    dnaMw(document)
  }catch(e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7)
  }
  return
}
function v2() {
  var v324 = document.main_form;
  var v8 = v324.main_submit;
  JAM.call(v8.focus, v8, [], JAM.policy.p9);
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
  var v9 = arrayOfSequences[0];
  var lengthOfAlign = v9.length;
  var v325 = arrayOfSequences.length;
  var v10 = v325 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v326 = arrayOfTitles.length;
  var v12 = i$$1 < v326;
  for(;v12;) {
    var v610 = arrayOfTitles[i$$1];
    var v521 = JAM.call(v610.search, v610, [/\S/], JAM.policy.p9);
    var v327 = v521 == -1;
    var v523 = !v327;
    if(v523) {
      var v663 = arrayOfSequences[i$$1];
      var v611 = JAM.call(v663.search, v663, [/\S/], JAM.policy.p9);
      var v522 = v611 == -1;
      var v613 = !v522;
      if(v613) {
        var v664 = arrayOfSequences[i$$1];
        var v612 = v664.length;
        v522 = v612 != lengthOfAlign
      }
      v327 = v522
    }
    var v11 = v327;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v328 = arrayOfTitles.length;
    v12 = i$$1 < v328
  }
  return true
}
function checkCodonTable(codonTable) {
  var v524 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p9);
  var v329 = v524 == -1;
  var v526 = !v329;
  if(v526) {
    var v614 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p9);
    var v525 = v614 == -1;
    var v616 = !v525;
    if(v616) {
      var v665 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p9);
      var v615 = v665 == -1;
      var v667 = !v615;
      if(v667) {
        var v698 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p9);
        var v666 = v698 == -1;
        var v700 = !v666;
        if(v700) {
          var v699 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p9);
          v666 = v699 == -1
        }
        v615 = v666
      }
      v525 = v615
    }
    v329 = v525
  }
  var v13 = v329;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v527 = formElement.value;
  var v330 = JAM.call(v527.search, v527, [/\S/], JAM.policy.p9);
  var v14 = v330 == -1;
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
  var v331 = arrayOfPatterns.length;
  var v17 = z$$2 < v331;
  for(;v17;) {
    var v528 = arrayOfPatterns[z$$2];
    var v332 = JAM.call(v528.search, v528, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p9);
    var v15 = v332 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v529 = arrayOfPatterns[z$$2];
    var v333 = moreExpressionCheck(v529);
    var v16 = v333 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v334 = arrayOfPatterns.length;
    v17 = z$$2 < v334
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v335 = arrayOfPatterns.length;
  var v26 = j < v335;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    var v617 = arrayOfPatterns[j];
    var v530 = JAM.call(v617.match, v617, [/\/.+\//], JAM.policy.p9);
    var v336 = v530 + "gi";
    if(JAM.isEval(eval)) {
      var v791 = eval("introspect(JAM.policy.pFull) { " + v336 + " }")
    }else {
      var v791 = JAM.call(eval, null, [v336])
    }
    v20[v21] = v791;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    var v531 = arrayOfPatterns[j];
    var v337 = JAM.call(v531.match, v531, [/=[a-zA-Z\*]/], JAM.policy.p9);
    var v792 = JAM.call(v337.toString, v337, [], JAM.policy.p9);
    v22[v23] = v792;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    var v338 = geneticCodeMatchResult[j];
    var v793 = JAM.call(v338.replace, v338, [/=/g, ""], JAM.policy.p9);
    v24[v25] = v793;
    j = j + 1;
    var v339 = arrayOfPatterns.length;
    v26 = j < v339
  }
  var i$$2 = 0;
  var v532 = testSequence.length;
  var v340 = v532 - 3;
  var v33 = i$$2 <= v340;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v27], JAM.policy.p9);
    j = 0;
    var v341 = geneticCodeMatchExp.length;
    var v31 = j < v341;
    for(;v31;) {
      var v533 = geneticCodeMatchExp[j];
      var v342 = JAM.call(codon.search, codon, [v533], JAM.policy.p9);
      var v30 = v342 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v343 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v343 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v344 = geneticCodeMatchExp.length;
      v31 = j < v344
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v534 = testSequence.length;
    var v345 = v534 - 3;
    v33 = i$$2 <= v345
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v346 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v346;
  for(;v35;) {
    var v535 = arrayOfPatterns$$1[z$$3];
    var v347 = JAM.call(v535.search, v535, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p9);
    var v34 = v347 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v348 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v348
  }
  var i$$3 = 0;
  var v349 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v349;
  for(;v39;) {
    var v536 = arrayOfPatterns$$1[i$$3];
    var v350 = "[" + v536;
    var v36 = v350 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v351 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v351;
    for(;v38;) {
      var v537 = arrayOfPatterns$$1[j$$1];
      var v352 = JAM.call(v537.search, v537, [re], JAM.policy.p9);
      var v37 = v352 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v353 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v353
    }
    i$$3 = i$$3 + 1;
    var v354 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v354
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v355 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v355;
  for(;v42;) {
    var v538 = arrayOfPatterns$$2[z$$4];
    var v356 = JAM.call(v538.search, v538, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p9);
    var v40 = v356 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v539 = arrayOfPatterns$$2[z$$4];
    var v357 = moreExpressionCheck(v539);
    var v41 = v357 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v358 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v358
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v618 = getSequenceFromFasta(text$$7);
  var v540 = JAM.call(v618.replace, v618, [/[^A-Za-z]/g, ""], JAM.policy.p9);
  var v359 = v540.length;
  var v44 = v359 > maxInput;
  if(v44) {
    var v360 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v360 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v361 = text$$8.length;
  var v46 = v361 > maxInput$$1;
  if(v46) {
    var v362 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v362 + " characters.";
    alert(v45);
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
  var v47 = outputWindow.document;
  JAM.call(v47.write, v47, ["</form>"], JAM.policy.p9);
  return true
}
function closePre() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</div>"], JAM.policy.p9);
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</pre>\n"], JAM.policy.p9);
  return
}
function closeTextArea() {
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</textarea>"], JAM.policy.p9);
  return true
}
function closeWindow() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</body>\n</html>\n"], JAM.policy.p9);
  outputWindow.status = "Done.";
  var v52 = outputWindow.document;
  JAM.call(v52.close, v52, [], JAM.policy.p9);
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
  var v363 = alignArray.length;
  var v53 = v363 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v364 = alignArray.length;
  var v55 = i$$4 < v364;
  for(;v55;) {
    var v541 = alignArray[i$$4];
    var v365 = JAM.call(v541.search, v541, [/[^\s]+\s/], JAM.policy.p9);
    var v54 = v365 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v366 = alignArray.length;
    v55 = i$$4 < v366
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
  var v367 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p9);
  var v58 = v367 != -1;
  if(v58) {
    var v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p9);
    for(;v57;) {
      var v56 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v56], JAM.policy.p9);
      v57 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p9)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v368 = sequence$$2.length;
  var v59 = "&gt;results for " + v368;
  var stringToReturn = v59 + " residue sequence ";
  var v369 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p9);
  var v61 = v369 != -1;
  if(v61) {
    var v370 = stringToReturn + '"';
    var v60 = v370 + fastaSequenceTitle;
    stringToReturn = v60 + '"'
  }
  var v371 = stringToReturn + ' starting "';
  var v372 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p9);
  var v62 = v371 + v372;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v373 = sequenceOne.length;
  var v63 = "Search results for " + v373;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v374 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p9);
  var v65 = v374 != -1;
  if(v65) {
    var v375 = stringToReturn$$1 + '"';
    var v64 = v375 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v376 = stringToReturn$$1 + ' starting "';
  var v377 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p9);
  var v66 = v376 + v377;
  stringToReturn$$1 = v66 + '"\n';
  var v378 = stringToReturn$$1 + "and ";
  var v379 = sequenceTwo.length;
  var v67 = v378 + v379;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v380 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p9);
  var v69 = v380 != -1;
  if(v69) {
    var v381 = stringToReturn$$1 + '"';
    var v68 = v381 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v382 = stringToReturn$$1 + ' starting "';
  var v383 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p9);
  var v70 = v382 + v383;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v384 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v384;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    var v619 = arrayOfPatterns$$3[j$$2];
    var v542 = JAM.call(v619.match, v619, [/\/.+\//], JAM.policy.p9);
    var v385 = v542 + "gi";
    if(JAM.isEval(eval)) {
      var v794 = eval("introspect(JAM.policy.pFull) { " + v385 + " }")
    }else {
      var v794 = JAM.call(eval, null, [v385])
    }
    v73[v74] = v794;
    j$$2 = j$$2 + 1;
    var v386 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v386
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v387 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v387;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    var v543 = arrayOfPatterns$$4[j$$3];
    var v388 = JAM.call(v543.match, v543, [/=[a-zA-Z\*]/], JAM.policy.p9);
    var v795 = JAM.call(v388.toString, v388, [], JAM.policy.p9);
    v77[v78] = v795;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    var v389 = geneticCodeMatchResult$$1[j$$3];
    var v796 = JAM.call(v389.replace, v389, [/=/g, ""], JAM.policy.p9);
    v79[v80] = v796;
    j$$3 = j$$3 + 1;
    var v390 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v390
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v391 = sequence$$3.length;
  var v82 = "Results for " + v391;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v392 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p9);
  var v84 = v392 != -1;
  if(v84) {
    var v393 = stringToReturn$$2 + '"';
    var v83 = v393 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"'
  }
  var v394 = stringToReturn$$2 + ' starting "';
  var v395 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p9);
  var v85 = v394 + v395;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v544 = "Results for " + topology;
  var v396 = v544 + " ";
  var v397 = sequence$$4.length;
  var v87 = v396 + v397;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v398 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p9);
  var v89 = v398 != -1;
  if(v89) {
    var v399 = stringToReturn$$3 + '"';
    var v88 = v399 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"'
  }
  var v400 = stringToReturn$$3 + ' starting "';
  var v401 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p9);
  var v90 = v400 + v401;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v402 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v402;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v403 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p9);
  var v94 = v403 != -1;
  if(v94) {
    var v404 = stringToReturn$$4 + '"';
    var v93 = v404 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v405 = stringToReturn$$4 + ' starting "';
  var v406 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p9);
  var v95 = v405 + v406;
  stringToReturn$$4 = v95 + '"\n';
  var v407 = stringToReturn$$4 + "and ";
  var v408 = sequenceTwo$$1.length;
  var v96 = v407 + v408;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v409 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p9);
  var v98 = v409 != -1;
  if(v98) {
    var v410 = stringToReturn$$4 + '"';
    var v97 = v410 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v411 = stringToReturn$$4 + ' starting "';
  var v412 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p9);
  var v99 = v411 + v412;
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
    var v413 = JAM.call(Math.random, Math, [], JAM.policy.p9);
    var v414 = components.length;
    var v101 = v413 * v414;
    tempNum = JAM.call(Math.floor, Math, [v101], JAM.policy.p9);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p9);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p10)
}
function getSequenceFromFasta(sequenceRecord) {
  var v415 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p9);
  var v103 = v415 != -1;
  if(v103) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p9)
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v416 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p9);
  var v105 = v416 != -1;
  if(v105) {
    var v104 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p9);
    fastaTitle = JAM.call(v104.toString, v104, [], JAM.policy.p9);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p9);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p9);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p9)
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v545 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p9);
  var v417 = v545 != -1;
  var v547 = !v417;
  if(v547) {
    var v620 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p9);
    var v546 = v620 != -1;
    var v622 = !v546;
    if(v622) {
      var v668 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p9);
      var v621 = v668 != -1;
      var v670 = !v621;
      if(v670) {
        var v701 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p9);
        var v669 = v701 != -1;
        var v703 = !v669;
        if(v703) {
          var v717 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p9);
          var v702 = v717 != -1;
          var v719 = !v702;
          if(v719) {
            var v733 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p9);
            var v718 = v733 != -1;
            var v735 = !v718;
            if(v735) {
              var v744 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p9);
              var v734 = v744 != -1;
              var v746 = !v734;
              if(v746) {
                var v753 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p9);
                var v745 = v753 != -1;
                var v755 = !v745;
                if(v755) {
                  var v762 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p9);
                  var v754 = v762 != -1;
                  var v764 = !v754;
                  if(v764) {
                    var v769 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p9);
                    var v763 = v769 != -1;
                    var v771 = !v763;
                    if(v771) {
                      var v770 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p9);
                      v763 = v770 != -1
                    }
                    v754 = v763
                  }
                  v745 = v754
                }
                v734 = v745
              }
              v718 = v734
            }
            v702 = v718
          }
          v669 = v702
        }
        v621 = v669
      }
      v546 = v621
    }
    v417 = v546
  }
  var v106 = v417;
  if(v106) {
    return false
  }
  return true
}
function openForm() {
  var v107 = outputWindow.document;
  JAM.call(v107.write, v107, ['<form action="">\n'], JAM.policy.p9);
  return true
}
function openPre() {
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ["<pre>"], JAM.policy.p9);
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ['<div class="pre">'], JAM.policy.p9);
  return
}
function openTextArea() {
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p9);
  return true
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return
}
function _openWindow(title$$7, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p10);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p9);
  var v111 = outputWindow.document;
  var v623 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v548 = v623 + "<head>\n";
  var v418 = v548 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v418 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v111.write, v111, [v112], JAM.policy.p9);
  if(isColor) {
    var v113 = outputWindow.document;
    var v784 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v780 = v784 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v776 = v780 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v772 = v776 + "div.info {font-weight: bold}\n";
    var v765 = v772 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v756 = v765 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v747 = v756 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v736 = v747 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v720 = v736 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v704 = v720 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v671 = v704 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v624 = v671 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v549 = v624 + "td.many {color: #000000}\n";
    var v419 = v549 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v419 + "</style>\n";
    JAM.call(v113.write, v113, [v114], JAM.policy.p9)
  }else {
    var v115 = outputWindow.document;
    var v788 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v785 = v788 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v781 = v785 + "div.title {display: none}\n";
    var v777 = v781 + "div.info {font-weight: bold}\n";
    var v773 = v777 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v766 = v773 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v757 = v766 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v748 = v757 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v737 = v748 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v721 = v737 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v705 = v721 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v672 = v705 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v625 = v672 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v550 = v625 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v420 = v550 + "img {display: none}\n";
    var v116 = v420 + "</style>\n";
    JAM.call(v115.write, v115, [v116], JAM.policy.p9)
  }
  var v117 = outputWindow.document;
  var v626 = "</head>\n" + '<body class="main">\n';
  var v551 = v626 + '<div class="title">';
  var v421 = v551 + title$$7;
  var v118 = v421 + " results</div>\n";
  JAM.call(v117.write, v117, [v118], JAM.policy.p9);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return
}
function _openWindowAlign(title$$9, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p10);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p9);
  var v119 = outputWindow.document;
  var v627 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v552 = v627 + "<head>\n";
  var v422 = v552 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v422 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v119.write, v119, [v120], JAM.policy.p9);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v786 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v782 = v786 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v778 = v782 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v774 = v778 + "div.info {font-weight: bold}\n";
    var v767 = v774 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v758 = v767 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v749 = v758 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v738 = v749 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v722 = v738 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v706 = v722 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v673 = v706 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v628 = v673 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v553 = v628 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v423 = v553 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v423 + "</style>\n";
    JAM.call(v121.write, v121, [v122], JAM.policy.p9)
  }else {
    var v123 = outputWindow.document;
    var v790 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v789 = v790 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v787 = v789 + "div.title {display: none}\n";
    var v783 = v787 + "div.info {font-weight: bold}\n";
    var v779 = v783 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v775 = v779 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v768 = v775 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v759 = v768 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v750 = v759 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v739 = v750 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v723 = v739 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v707 = v723 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v674 = v707 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v629 = v674 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v554 = v629 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v424 = v554 + "img {display: none}\n";
    var v124 = v424 + "</style>\n";
    JAM.call(v123.write, v123, [v124], JAM.policy.p9)
  }
  var v125 = outputWindow.document;
  var v630 = "</head>\n" + '<body class="main">\n';
  var v555 = v630 + '<div class="title">';
  var v425 = v555 + title$$9;
  var v126 = v425 + " results</div>\n";
  JAM.call(v125.write, v125, [v126], JAM.policy.p9);
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
  var v426 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p9);
  var v127 = v426 != -1;
  if(v127) {
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p9);
  var v427 = testArray[0];
  var v131 = v427 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v428 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p9);
  var v132 = v428 == -1;
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
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p9);
  var v134 = testString != "1X2X3X";
  if(v134) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v429 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9);
  var v135 = v429 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v430 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9);
  var v136 = v430 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v431 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p9);
  var v137 = v431 == -1;
  if(v137) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v556 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p9);
  var v432 = v556 == -1;
  var v558 = !v432;
  if(v558) {
    var v631 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p9);
    var v557 = v631 == -1;
    var v633 = !v557;
    if(v633) {
      var v675 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p9);
      var v632 = v675 == -1;
      var v677 = !v632;
      if(v677) {
        var v676 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p9);
        v632 = v676 == -1
      }
      v557 = v632
    }
    v432 = v557
  }
  var v138 = v432;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v433 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p9);
  var v139 = v433 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v434 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v434 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v435 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p9);
  var v142 = v435 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v436 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p9);
  var v143 = v436 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v559 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p9);
  var v437 = v559 == -1;
  var v561 = !v437;
  if(v561) {
    var v634 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p9);
    var v560 = v634 == -1;
    var v636 = !v560;
    if(v636) {
      var v678 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p9);
      var v635 = v678 == -1;
      var v680 = !v635;
      if(v680) {
        var v679 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p9);
        v635 = v679 == -1
      }
      v560 = v635
    }
    v437 = v560
  }
  var v144 = v437;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v562 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p9);
  var v438 = v562 == -1;
  var v564 = !v438;
  if(v564) {
    var v637 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p9);
    var v563 = v637 == -1;
    var v639 = !v563;
    if(v639) {
      var v681 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p9);
      var v638 = v681 == -1;
      var v683 = !v638;
      if(v683) {
        var v682 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p9);
        v638 = v682 == -1
      }
      v563 = v638
    }
    v438 = v563
  }
  var v145 = v438;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v439 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p9);
  var v146 = v439 == -1;
  if(v146) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v565 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p9);
  var v440 = v565 == -1;
  var v567 = !v440;
  if(v567) {
    var v640 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p9);
    var v566 = v640 == -1;
    var v642 = !v566;
    if(v642) {
      var v684 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p9);
      var v641 = v684 == -1;
      var v686 = !v641;
      if(v686) {
        var v685 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p9);
        v641 = v685 == -1
      }
      v566 = v641
    }
    v440 = v566
  }
  var v147 = v440;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v441 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p9);
  var v148 = v441 == -1;
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
    var v442 = basePerLine / groupSize;
    var v153 = j$$6 <= v442;
    for(;v153;) {
      var v152 = k < groupSize;
      for(;v152;) {
        var v150 = lineOfText;
        var v443 = k + i$$5;
        var v151 = JAM.call(text$$10.charAt, text$$10, [v443], JAM.policy.p9);
        lineOfText = v150 + v151;
        k = k + 1;
        v152 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v444 = basePerLine / groupSize;
      v153 = j$$6 <= v444
    }
    var v154 = outputWindow.document;
    var v155 = lineOfText + "\n";
    JAM.call(v154.write, v154, [v155], JAM.policy.p9);
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
    var v445 = adjustment < 0;
    if(v445) {
      v445 = adjusted >= 0
    }
    var v157 = v445;
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
    var v446 = basePerLine$$2 / groupSize$$2;
    var v166 = j$$7 <= v446;
    for(;v166;) {
      var v161 = k$$1 < groupSize$$2;
      for(;v161;) {
        var v447 = i$$6 + k$$1;
        var v158 = v447 >= stopBase$$2;
        if(v158) {
          break
        }
        var v159 = lineOfText$$1;
        var v448 = k$$1 + i$$6;
        var v160 = JAM.call(text$$12.charAt, text$$12, [v448], JAM.policy.p9);
        lineOfText$$1 = v159 + v160;
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v164 = numberPosition$$1 == "above";
      if(v164) {
        var v162 = aboveNum;
        var v449 = adjustNumbering(i$$6, numberingAdjustment);
        var v163 = rightNum(v449, "", groupSize$$2, tabIn$$3);
        aboveNum = v162 + v163
      }
      var v165 = i$$6 >= stopBase$$2;
      if(v165) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v450 = basePerLine$$2 / groupSize$$2;
      v166 = j$$7 <= v450
    }
    var v189 = numberPosition$$1 == "left";
    if(v189) {
      var v167 = outputWindow.document;
      var v643 = adjustNumbering(lineNum, numberingAdjustment);
      var v568 = rightNum(v643, "", 8, tabIn$$3);
      var v451 = v568 + lineOfText$$1;
      var v168 = v451 + "\n";
      JAM.call(v167.write, v167, [v168], JAM.policy.p9);
      var v172 = strands$$1 == "two";
      if(v172) {
        var v169 = outputWindow.document;
        var v644 = adjustNumbering(lineNum, numberingAdjustment);
        var v569 = rightNum(v644, "", 8, tabIn$$3);
        var v570 = complement(lineOfText$$1);
        var v452 = v569 + v570;
        var v170 = v452 + "\n";
        JAM.call(v169.write, v169, [v170], JAM.policy.p9);
        var v171 = outputWindow.document;
        JAM.call(v171.write, v171, ["\n"], JAM.policy.p9)
      }
    }else {
      var v188 = numberPosition$$1 == "right";
      if(v188) {
        var v173 = outputWindow.document;
        var v571 = lineOfText$$1;
        var v572 = adjustNumbering(i$$6, numberingAdjustment);
        var v453 = v571 + v572;
        var v174 = v453 + "\n";
        JAM.call(v173.write, v173, [v174], JAM.policy.p9);
        var v178 = strands$$1 == "two";
        if(v178) {
          var v175 = outputWindow.document;
          var v573 = complement(lineOfText$$1);
          var v574 = adjustNumbering(i$$6, numberingAdjustment);
          var v454 = v573 + v574;
          var v176 = v454 + "\n";
          JAM.call(v175.write, v175, [v176], JAM.policy.p9);
          var v177 = outputWindow.document;
          JAM.call(v177.write, v177, ["\n"], JAM.policy.p9)
        }
      }else {
        var v187 = numberPosition$$1 == "above";
        if(v187) {
          var v179 = outputWindow.document;
          var v180 = aboveNum + "\n";
          JAM.call(v179.write, v179, [v180], JAM.policy.p9);
          var v181 = outputWindow.document;
          var v182 = lineOfText$$1 + "\n";
          JAM.call(v181.write, v181, [v182], JAM.policy.p9);
          var v186 = strands$$1 == "two";
          if(v186) {
            var v183 = outputWindow.document;
            var v455 = complement(lineOfText$$1);
            var v184 = v455 + "\n";
            JAM.call(v183.write, v183, [v184], JAM.policy.p9);
            var v185 = outputWindow.document;
            JAM.call(v185.write, v185, ["\n"], JAM.policy.p9)
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
    var v456 = basePerLine$$3 / groupSize$$3;
    var v199 = j$$8 <= v456;
    for(;v199;) {
      var v194 = k$$2 < groupSize$$3;
      for(;v194;) {
        var v457 = i$$7 + k$$2;
        var v191 = v457 >= stopBase$$3;
        if(v191) {
          break
        }
        var v192 = lineOfText$$2;
        var v458 = k$$2 + i$$7;
        var v193 = JAM.call(text$$13.charAt, text$$13, [v458], JAM.policy.p9);
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
      var v459 = basePerLine$$3 / groupSize$$3;
      v199 = j$$8 <= v459
    }
    var v210 = numberPosition$$2 == "left";
    if(v210) {
      var v200 = outputWindow.document;
      var v575 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v460 = v575 + lineOfText$$2;
      var v201 = v460 + "\n";
      JAM.call(v200.write, v200, [v201], JAM.policy.p9)
    }else {
      var v209 = numberPosition$$2 == "right";
      if(v209) {
        var v202 = outputWindow.document;
        var v461 = lineOfText$$2 + i$$7;
        var v203 = v461 + "\n";
        JAM.call(v202.write, v202, [v203], JAM.policy.p9)
      }else {
        var v208 = numberPosition$$2 == "above";
        if(v208) {
          var v204 = outputWindow.document;
          var v205 = aboveNum$$1 + "\n";
          JAM.call(v204.write, v204, [v205], JAM.policy.p9);
          var v206 = outputWindow.document;
          var v207 = lineOfText$$2 + "\n";
          JAM.call(v206.write, v206, [v207], JAM.policy.p9)
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
  var v576 = sequence$$13.length;
  var v462 = v576 <= firstIndexToMutate;
  var v578 = !v462;
  if(v578) {
    var v577 = lastIndexToMutate < 0;
    var v645 = !v577;
    if(v645) {
      v577 = lastIndexToMutate <= firstIndexToMutate
    }
    v462 = v577
  }
  var v212 = v462;
  if(v212) {
    numMut = 0
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for(;v220;) {
    maxNum = sequence$$13.length;
    var v463 = JAM.call(Math.random, Math, [], JAM.policy.p9);
    var v213 = v463 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v213], JAM.policy.p9);
    var v464 = randNum < firstIndexToMutate;
    var v579 = !v464;
    if(v579) {
      v464 = randNum > lastIndexToMutate
    }
    var v214 = v464;
    if(v214) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v220 = i$$8 < numMut;
      continue
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p9);
    needNewChar = true;
    for(;needNewChar;) {
      var v465 = JAM.call(Math.random, Math, [], JAM.policy.p9);
      var v466 = components$$1.length;
      var v215 = v465 * v466;
      componentsIndex = JAM.call(Math.round, Math, [v215], JAM.policy.p9);
      var v467 = components$$1.length;
      var v216 = componentsIndex == v467;
      if(v216) {
        componentsIndex = 0
      }
      var v468 = components$$1[componentsIndex];
      var v217 = v468 != currentChar;
      if(v217) {
        needNewChar = false
      }
    }
    var v469 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p9);
    var v470 = components$$1[componentsIndex];
    var v218 = v469 + v470;
    var v471 = randNum + 1;
    var v472 = sequence$$13.length;
    var v219 = JAM.call(sequence$$13.substring, sequence$$13, [v471, v472], JAM.policy.p9);
    sequence$$13 = v218 + v219;
    i$$8 = i$$8 + 1;
    v220 = i$$8 < numMut
  }
  var v221 = outputWindow.document;
  var v222 = addReturns(sequence$$13);
  JAM.call(v221.write, v221, [v222], JAM.policy.p9);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v227 = j$$9 < lengthOut$$1;
  for(;v227;) {
    var v473 = JAM.call(Math.random, Math, [], JAM.policy.p9);
    var v474 = components$$2.length;
    var v223 = v473 * v474;
    tempNum$$1 = JAM.call(Math.floor, Math, [v223], JAM.policy.p9);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v475 = sequence$$14.length;
    var v226 = v475 == 60;
    if(v226) {
      var v224 = outputWindow.document;
      var v225 = sequence$$14 + "\n";
      JAM.call(v224.write, v224, [v225], JAM.policy.p9);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v227 = j$$9 < lengthOut$$1
  }
  var v228 = outputWindow.document;
  var v229 = sequence$$14 + "\n";
  JAM.call(v228.write, v228, [v229], JAM.policy.p9);
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
    var v230 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p9);
    shiftValue = v230.length;
    var v646 = sequence$$15.length;
    var v580 = v646 - lookAhead;
    var v581 = sequence$$15.length;
    var v476 = JAM.call(sequence$$15.substring, sequence$$15, [v580, v581], JAM.policy.p9);
    var v231 = v476 + sequence$$15;
    var v232 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p9);
    sequence$$15 = v231 + v232;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v234 = outputWindow.document;
  JAM.call(v234.write, v234, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v235 = outputWindow.document;
  var v647 = '<tr><td class="title" width="200px">' + "Site:";
  var v582 = v647 + '</td><td class="title">';
  var v477 = v582 + "Positions:";
  var v236 = v477 + "</td></tr>\n";
  JAM.call(v235.write, v235, [v236], JAM.policy.p9);
  var i$$9 = 0;
  var v478 = arrayOfItems.length;
  var v252 = i$$9 < v478;
  for(;v252;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v479 = arrayOfItems[i$$9];
    var v237 = JAM.call(v479.match, v479, [/\/.+\//], JAM.policy.p9);
    matchExp = v237 + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    var v648 = arrayOfItems[i$$9];
    var v583 = JAM.call(v648.match, v648, [/\)\D*\d+/], JAM.policy.p9);
    var v480 = JAM.call(v583.toString, v583, [], JAM.policy.p9);
    var v238 = JAM.call(v480.replace, v480, [/\)\D*/, ""], JAM.policy.p9);
    cutDistance = parseFloat(v238);
    var v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p9);
    for(;v244;) {
      var v239 = matchExp.lastIndex;
      matchPosition = v239 - cutDistance;
      var v481 = matchPosition >= lowerLimit;
      if(v481) {
        v481 = matchPosition < upperLimit
      }
      var v242 = v481;
      if(v242) {
        timesFound = timesFound + 1;
        var v240 = tempString$$1 + ", ";
        var v482 = matchPosition - shiftValue;
        var v241 = v482 + 1;
        tempString$$1 = v240 + v241
      }
      var v483 = matchExp.lastIndex;
      var v584 = RegExp.lastMatch;
      var v484 = v584.length;
      var v243 = v483 - v484;
      matchExp.lastIndex = v243 + 1;
      v244 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p9)
    }
    var v485 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p9);
    var v245 = v485 != -1;
    if(v245) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p9)
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
    var v740 = '<tr><td class="' + backGroundClass;
    var v724 = v740 + '">';
    var v760 = arrayOfItems[i$$9];
    var v751 = JAM.call(v760.match, v760, [/\([^\(]+\)/], JAM.policy.p9);
    var v741 = JAM.call(v751.toString, v751, [], JAM.policy.p9);
    var v725 = JAM.call(v741.replace, v741, [/\(|\)/g, ""], JAM.policy.p9);
    var v708 = v724 + v725;
    var v687 = v708 + '</td><td class="';
    var v649 = v687 + backGroundClass;
    var v585 = v649 + '">';
    var v486 = v585 + tempString$$1;
    var v251 = v486 + "</td></tr>\n";
    JAM.call(v250.write, v250, [v251], JAM.policy.p9);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v487 = arrayOfItems.length;
    v252 = i$$9 < v487
  }
  var v253 = outputWindow.document;
  JAM.call(v253.write, v253, ["</tbody></table>\n"], JAM.policy.p9);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v254 = outputWindow.document;
  JAM.call(v254.write, v254, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v255 = outputWindow.document;
  var v709 = '<tr><td class="title">' + "Pattern:";
  var v688 = v709 + '</td><td class="title">';
  var v650 = v688 + "Times found:";
  var v586 = v650 + '</td><td class="title">';
  var v488 = v586 + "Percentage:";
  var v256 = v488 + "</td></tr>\n";
  JAM.call(v255.write, v255, [v256], JAM.policy.p9);
  var i$$10 = 0;
  var v489 = arrayOfItems$$1.length;
  var v265 = i$$10 < v489;
  for(;v265;) {
    var tempNumber = 0;
    var v490 = arrayOfItems$$1[i$$10];
    var v257 = JAM.call(v490.match, v490, [/\/[^\/]+\//], JAM.policy.p9);
    var matchExp$$1 = v257 + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    var v491 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p9);
    var v259 = v491 != -1;
    if(v259) {
      var v258 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p9);
      tempNumber = v258.length
    }
    var percentage = 0;
    var v587 = originalLength + 1;
    var v689 = arrayOfItems$$1[i$$10];
    var v651 = JAM.call(v689.match, v689, [/\d+/], JAM.policy.p9);
    var v588 = parseFloat(v651);
    var v492 = v587 - v588;
    var v262 = v492 > 0;
    if(v262) {
      var v260 = 100 * tempNumber;
      var v493 = originalLength + 1;
      var v652 = arrayOfItems$$1[i$$10];
      var v589 = JAM.call(v652.match, v652, [/\d+/], JAM.policy.p9);
      var v494 = parseFloat(v589);
      var v261 = v493 - v494;
      percentage = v260 / v261
    }
    var v263 = outputWindow.document;
    var v761 = arrayOfItems$$1[i$$10];
    var v752 = JAM.call(v761.match, v761, [/\([^\(]+\)\b/], JAM.policy.p9);
    var v742 = JAM.call(v752.toString, v752, [], JAM.policy.p9);
    var v726 = JAM.call(v742.replace, v742, [/\(|\)/g, ""], JAM.policy.p9);
    var v710 = "<tr><td>" + v726;
    var v690 = v710 + "</td><td>";
    var v653 = v690 + tempNumber;
    var v590 = v653 + "</td><td>";
    var v591 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9);
    var v495 = v590 + v591;
    var v264 = v495 + "</td></tr>\n";
    JAM.call(v263.write, v263, [v264], JAM.policy.p9);
    i$$10 = i$$10 + 1;
    var v496 = arrayOfItems$$1.length;
    v265 = i$$10 < v496
  }
  var v266 = outputWindow.document;
  JAM.call(v266.write, v266, ["</tbody></table>\n"], JAM.policy.p9);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v497 = sequence$$17.length;
  var v273 = v497 > 0;
  for(;v273;) {
    maxNum$$1 = sequence$$17.length;
    var v498 = JAM.call(Math.random, Math, [], JAM.policy.p9);
    var v267 = v498 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v267], JAM.policy.p9);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p9);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p9);
    var v268 = randNum$$1 + 1;
    var v269 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v268, v269], JAM.policy.p9);
    sequence$$17 = tempString1 + tempString2;
    var v499 = tempSeq.length;
    var v272 = v499 == 60;
    if(v272) {
      var v270 = outputWindow.document;
      var v271 = tempSeq + "\n";
      JAM.call(v270.write, v270, [v271], JAM.policy.p9);
      tempSeq = ""
    }
    var v500 = sequence$$17.length;
    v273 = v500 > 0
  }
  var v274 = outputWindow.document;
  var v275 = tempSeq + "\n";
  JAM.call(v274.write, v274, [v275], JAM.policy.p9);
  return true
}
function dnaMw(theDocument) {
  JAM.startProfile('compute');

  var newDna = "";
  var maxInput$$3 = 2E5;
  var v501 = testScript();
  var v276 = v501 == false;
  if(v276) {
    return false
  }
  var v727 = theDocument.forms;
  var v711 = v727[0];
  var v691 = v711.elements;
  var v654 = v691[0];
  var v592 = checkFormElement(v654);
  var v502 = v592 == false;
  var v594 = !v502;
  if(v594) {
    var v743 = theDocument.forms;
    var v728 = v743[0];
    var v712 = v728.elements;
    var v692 = v712[0];
    var v655 = v692.value;
    var v593 = checkSequenceLength(v655, maxInput$$3);
    v502 = v593 == false
  }
  var v277 = v502;
  if(v277) {
    return false
  }
  openWindow("DNA Molecular Weight");
  var v693 = theDocument.forms;
  var v656 = v693[0];
  var v595 = v656.elements;
  var v503 = v595[0];
  var v278 = v503.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v278);
  var i$$11 = 0;
  var v504 = arrayOfFasta$$1.length;
  var v286 = i$$11 < v504;
  for(;v286;) {
    var v279 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v279);
    var v280 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v280);
    newDna = _removeNonPrimer(newDna);
    var v281 = outputWindow.document;
    var v282 = getInfoFromTitleAndSequence(title, newDna);
    JAM.call(v281.write, v281, [v282], JAM.policy.p9);
    var v729 = theDocument.forms;
    var v713 = v729[0];
    var v694 = v713.elements;
    var v657 = v694[4];
    var v596 = v657.options;
    var v730 = theDocument.forms;
    var v714 = v730[0];
    var v695 = v714.elements;
    var v658 = v695[4];
    var v597 = v658.selectedIndex;
    var v505 = v596[v597];
    var v283 = v505.value;
    var v731 = theDocument.forms;
    var v715 = v731[0];
    var v696 = v715.elements;
    var v659 = v696[5];
    var v598 = v659.options;
    var v732 = theDocument.forms;
    var v716 = v732[0];
    var v697 = v716.elements;
    var v660 = v697[5];
    var v599 = v660.selectedIndex;
    var v506 = v598[v599];
    var v284 = v506.value;
    writeDnaMw(newDna, v283, v284);
    var v285 = outputWindow.document;
    JAM.call(v285.write, v285, ["<br />\n<br />\n"], JAM.policy.p9);
    i$$11 = i$$11 + 1;
    var v507 = arrayOfFasta$$1.length;
    v286 = i$$11 < v507
  }
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function writeDnaMw(sequence$$18, strandType, topology$$1) {
  var OH = 17.01;
  var result = 0;
  var v314 = strandType == "single";
  if(v314) {
    var mw_direct_strand = _molecularWeight(sequence$$18);
    var v508 = mw_direct_strand.length;
    var v297 = v508 == 1;
    if(v297) {
      var v287 = mw_direct_strand[0];
      var mw = parseFloat(v287);
      var v288 = topology$$1 == "circular";
      if(v288) {
        mw = mw - OH
      }
      mw = JAM.call(mw.toFixed, mw, [2], JAM.policy.p9);
      var v289 = outputWindow.document;
      var v290 = mw + " Da";
      JAM.call(v289.write, v289, [v290], JAM.policy.p9)
    }else {
      var v509 = mw_direct_strand.length;
      var v296 = v509 == 2;
      if(v296) {
        var v291 = mw_direct_strand[0];
        var mw_lower = parseFloat(v291);
        var v292 = mw_direct_strand[1];
        var mw_upper = parseFloat(v292);
        var v293 = topology$$1 == "circular";
        if(v293) {
          mw_lower = mw_lower - OH;
          mw_upper = mw_upper - OH
        }
        mw_lower = JAM.call(mw_lower.toFixed, mw_lower, [2], JAM.policy.p9);
        mw_upper = JAM.call(mw_upper.toFixed, mw_upper, [2], JAM.policy.p9);
        var v294 = outputWindow.document;
        var v600 = mw_lower + " to ";
        var v510 = v600 + mw_upper;
        var v295 = v510 + " Da";
        JAM.call(v294.write, v294, [v295], JAM.policy.p9)
      }
    }
  }else {
    var v313 = strandType == "double";
    if(v313) {
      mw_direct_strand = _molecularWeight(sequence$$18);
      var v511 = complement(sequence$$18);
      var v298 = reverse(v511);
      var mw_reverse_strand = _molecularWeight(v298);
      var v601 = mw_direct_strand.length;
      var v512 = v601 == 1;
      if(v512) {
        var v602 = mw_reverse_strand.length;
        v512 = v602 == 1
      }
      var v312 = v512;
      if(v312) {
        var v299 = mw_direct_strand[0];
        var mw_direct = parseFloat(v299);
        var v300 = mw_reverse_strand[0];
        var mw_reverse = parseFloat(v300);
        var v301 = topology$$1 == "circular";
        if(v301) {
          mw_direct = mw_direct - OH;
          mw_reverse = mw_reverse - OH
        }
        mw = mw_direct + mw_reverse;
        mw = JAM.call(mw.toFixed, mw, [2], JAM.policy.p9);
        var v302 = outputWindow.document;
        var v303 = mw + " Da";
        JAM.call(v302.write, v302, [v303], JAM.policy.p9)
      }else {
        var v603 = mw_direct_strand.length;
        var v513 = v603 == 2;
        if(v513) {
          var v604 = mw_reverse_strand.length;
          v513 = v604 == 2
        }
        var v311 = v513;
        if(v311) {
          var v304 = mw_direct_strand[0];
          var mw_direct_lower = parseFloat(v304);
          var v305 = mw_reverse_strand[0];
          var mw_reverse_lower = parseFloat(v305);
          var v306 = mw_direct_strand[1];
          var mw_direct_upper = parseFloat(v306);
          var v307 = mw_reverse_strand[1];
          var mw_reverse_upper = parseFloat(v307);
          var v308 = topology$$1 == "circular";
          if(v308) {
            mw_direct_lower = mw_direct_lower - OH;
            mw_reverse_lower = mw_reverse_lower - OH;
            mw_direct_upper = mw_direct_upper - OH;
            mw_reverse_upper = mw_reverse_upper - OH
          }
          mw_lower = mw_direct_lower + mw_reverse_lower;
          mw_upper = mw_direct_upper + mw_reverse_upper;
          mw_lower = JAM.call(mw_lower.toFixed, mw_lower, [2], JAM.policy.p9);
          mw_upper = JAM.call(mw_upper.toFixed, mw_upper, [2], JAM.policy.p9);
          var v309 = outputWindow.document;
          var v605 = mw_lower + " to ";
          var v514 = v605 + mw_upper;
          var v310 = v514 + " Da";
          JAM.call(v309.write, v309, [v310], JAM.policy.p9)
        }
      }
    }
  }
  return true
}
function _containsOnlyNonDegenerates(sequence$$19) {
  var v515 = JAM.call(sequence$$19.search, sequence$$19, [/[^gatc]/i], JAM.policy.p9);
  var v315 = v515 == -1;
  if(v315) {
    return true
  }
  return false
}
function _molecularWeight(sequence$$20) {
  var v316 = _containsOnlyNonDegenerates(sequence$$20);
  if(v316) {
    return _molecularWeightNonDegen(sequence$$20)
  }else {
    return _molecularWeightDegen(sequence$$20)
  }
  return
}
function _molecularWeightNonDegen(sequence$$21) {
  var results = new Array;
  var v797 = _mw(sequence$$21);
  results[0] = v797;
  return results
}
function _mw(sequence$$22) {
  var g = _getBaseCount(sequence$$22, "g");
  var a = _getBaseCount(sequence$$22, "a");
  var t = _getBaseCount(sequence$$22, "t");
  var c = _getBaseCount(sequence$$22, "c");
  var v661 = g * 329.21;
  var v662 = a * 313.21;
  var v606 = v661 + v662;
  var v607 = t * 304.2;
  var v516 = v606 + v607;
  var v517 = c * 289.18;
  var v317 = v516 + v517;
  return v317 + 17.01
}
function _molecularWeightDegen(sequence$$23) {
  var lowerBoundsSequence = sequence$$23;
  var upperBoundsSequence = sequence$$23;
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/r/gi, "a"], JAM.policy.p9);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/y/gi, "c"], JAM.policy.p9);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/s/gi, "c"], JAM.policy.p9);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/w/gi, "t"], JAM.policy.p9);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/k/gi, "t"], JAM.policy.p9);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/m/gi, "c"], JAM.policy.p9);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/b/gi, "c"], JAM.policy.p9);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/d/gi, "t"], JAM.policy.p9);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/h/gi, "c"], JAM.policy.p9);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/v/gi, "c"], JAM.policy.p9);
  lowerBoundsSequence = JAM.call(lowerBoundsSequence.replace, lowerBoundsSequence, [/n/gi, "c"], JAM.policy.p9);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/r/gi, "g"], JAM.policy.p9);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/y/gi, "t"], JAM.policy.p9);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/s/gi, "g"], JAM.policy.p9);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/w/gi, "a"], JAM.policy.p9);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/k/gi, "g"], JAM.policy.p9);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/m/gi, "a"], JAM.policy.p9);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/b/gi, "g"], JAM.policy.p9);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/d/gi, "g"], JAM.policy.p9);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/h/gi, "a"], JAM.policy.p9);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/v/gi, "g"], JAM.policy.p9);
  upperBoundsSequence = JAM.call(upperBoundsSequence.replace, upperBoundsSequence, [/n/gi, "g"], JAM.policy.p9);
  var results$$1 = new Array;
  var v798 = _molecularWeightNonDegen(lowerBoundsSequence);
  results$$1[0] = v798;
  var v799 = _molecularWeightNonDegen(upperBoundsSequence);
  results$$1[1] = v799;
  return results$$1
}
function _getBaseCount(sequence$$24, base$$1) {
  var basePattern = new RegExp(base$$1, "gi");
  var v518 = JAM.call(sequence$$24.search, sequence$$24, [basePattern], JAM.policy.p9);
  var v319 = v518 != -1;
  if(v319) {
    var v318 = JAM.call(sequence$$24.match, sequence$$24, [basePattern], JAM.policy.p9);
    return v318.length
  }else {
    return 0
  }
  return
}
function _removeNonPrimer(sequence$$25) {
  JAM.call(sequence$$25.replace, sequence$$25, [/u/g, "t"], JAM.policy.p9);
  JAM.call(sequence$$25.replace, sequence$$25, [/U/g, "T"], JAM.policy.p9);
  return JAM.call(sequence$$25.replace, sequence$$25, [/[^gatcryswkmbdhvnGATCRYSWKMBDHVN]/g, ""], JAM.policy.p9)
}
JAM.set(document, "onload", v2);
var v320 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9);
JAM.set(v320, "onclick", v3);
var v321 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9);
JAM.set(v321, "onclick", v4);

JAM.stopProfile('load');
