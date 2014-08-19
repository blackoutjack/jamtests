function v4() {
  var v559 = document.forms;
  var v479 = v559[0];
  var v291 = v479.elements;
  var v5 = v291[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    emblFasta(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v292 = document.main_form;
  var v7 = v292.main_submit;
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
  var v293 = arrayOfSequences.length;
  var v9 = v293 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v294 = arrayOfTitles.length;
  var v11 = i$$1 < v294;
  for(;v11;) {
    var v560 = arrayOfTitles[i$$1];
    var v480 = JAM.call(v560.search, v560, [/\S/], JAM.policy.p9);
    var v295 = v480 == -1;
    var v482 = !v295;
    if(v482) {
      var v609 = arrayOfSequences[i$$1];
      var v561 = JAM.call(v609.search, v609, [/\S/], JAM.policy.p9);
      var v481 = v561 == -1;
      var v563 = !v481;
      if(v563) {
        var v610 = arrayOfSequences[i$$1];
        var v562 = v610.length;
        v481 = v562 != lengthOfAlign
      }
      v295 = v481
    }
    var v10 = v295;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v296 = arrayOfTitles.length;
    v11 = i$$1 < v296
  }
  return true
}
function checkCodonTable(codonTable) {
  var v483 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p9);
  var v297 = v483 == -1;
  var v485 = !v297;
  if(v485) {
    var v564 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p9);
    var v484 = v564 == -1;
    var v566 = !v484;
    if(v566) {
      var v611 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p9);
      var v565 = v611 == -1;
      var v613 = !v565;
      if(v613) {
        var v641 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p9);
        var v612 = v641 == -1;
        var v643 = !v612;
        if(v643) {
          var v642 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p9);
          v612 = v642 == -1
        }
        v565 = v612
      }
      v484 = v565
    }
    v297 = v484
  }
  var v12 = v297;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v486 = formElement.value;
  var v298 = JAM.call(v486.search, v486, [/\S/], JAM.policy.p9);
  var v13 = v298 == -1;
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
  var v299 = arrayOfPatterns.length;
  var v16 = z$$2 < v299;
  for(;v16;) {
    var v487 = arrayOfPatterns[z$$2];
    var v300 = JAM.call(v487.search, v487, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p9);
    var v14 = v300 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v488 = arrayOfPatterns[z$$2];
    var v301 = moreExpressionCheck(v488);
    var v15 = v301 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v302 = arrayOfPatterns.length;
    v16 = z$$2 < v302
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v303 = arrayOfPatterns.length;
  var v25 = j < v303;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    var v567 = arrayOfPatterns[j];
    var v489 = JAM.call(v567.match, v567, [/\/.+\//], JAM.policy.p9);
    var v304 = v489 + "gi";
    if(JAM.isEval(eval)) {
      var v731 = eval("introspect(JAM.policy.pFull) { " + v304 + " }")
    }else {
      var v731 = JAM.call(eval, null, [v304])
    }
    v19[v20] = v731;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    var v490 = arrayOfPatterns[j];
    var v305 = JAM.call(v490.match, v490, [/=[a-zA-Z\*]/], JAM.policy.p9);
    var v732 = JAM.call(v305.toString, v305, [], JAM.policy.p9);
    v21[v22] = v732;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    var v306 = geneticCodeMatchResult[j];
    var v733 = JAM.call(v306.replace, v306, [/=/g, ""], JAM.policy.p9);
    v23[v24] = v733;
    j = j + 1;
    var v307 = arrayOfPatterns.length;
    v25 = j < v307
  }
  var i$$2 = 0;
  var v491 = testSequence.length;
  var v308 = v491 - 3;
  var v32 = i$$2 <= v308;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v26], JAM.policy.p9);
    j = 0;
    var v309 = geneticCodeMatchExp.length;
    var v30 = j < v309;
    for(;v30;) {
      var v492 = geneticCodeMatchExp[j];
      var v310 = JAM.call(codon.search, codon, [v492], JAM.policy.p9);
      var v29 = v310 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v311 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v311 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v312 = geneticCodeMatchExp.length;
      v30 = j < v312
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v493 = testSequence.length;
    var v313 = v493 - 3;
    v32 = i$$2 <= v313
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v314 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v314;
  for(;v34;) {
    var v494 = arrayOfPatterns$$1[z$$3];
    var v315 = JAM.call(v494.search, v494, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p9);
    var v33 = v315 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v316 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v316
  }
  var i$$3 = 0;
  var v317 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v317;
  for(;v38;) {
    var v495 = arrayOfPatterns$$1[i$$3];
    var v318 = "[" + v495;
    var v35 = v318 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v319 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v319;
    for(;v37;) {
      var v496 = arrayOfPatterns$$1[j$$1];
      var v320 = JAM.call(v496.search, v496, [re], JAM.policy.p9);
      var v36 = v320 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v321 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v321
    }
    i$$3 = i$$3 + 1;
    var v322 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v322
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v323 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v323;
  for(;v41;) {
    var v497 = arrayOfPatterns$$2[z$$4];
    var v324 = JAM.call(v497.search, v497, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p9);
    var v39 = v324 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v498 = arrayOfPatterns$$2[z$$4];
    var v325 = moreExpressionCheck(v498);
    var v40 = v325 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v326 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v326
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v568 = getSequenceFromFasta(text$$7);
  var v499 = JAM.call(v568.replace, v568, [/[^A-Za-z]/g, ""], JAM.policy.p9);
  var v327 = v499.length;
  var v43 = v327 > maxInput;
  if(v43) {
    var v328 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v328 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v329 = text$$8.length;
  var v45 = v329 > maxInput$$1;
  if(v45) {
    var v330 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v330 + " characters.";
    alert(v44);
    return false
  }else {
    return true
  }
  return
}
function complement(dnaSequence$$1) {
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/g/g, "1"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/c/g, "2"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "c"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "g"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/G/g, "1"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/C/g, "2"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "C"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "G"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/a/g, "1"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/t/g, "2"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "t"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "a"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/A/g, "1"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/T/g, "2"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "T"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "A"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/u/g, "a"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/U/g, "A"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/r/g, "1"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/y/g, "2"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "y"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "r"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/R/g, "1"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/Y/g, "2"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "Y"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "R"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/k/g, "1"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/m/g, "2"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "m"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "k"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/K/g, "1"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/M/g, "2"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "M"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "K"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/b/g, "1"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/v/g, "2"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "v"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "b"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/B/g, "1"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/V/g, "2"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "V"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "B"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/d/g, "1"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/h/g, "2"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "h"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "d"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/D/g, "1"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/H/g, "2"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/1/g, "H"], JAM.policy.p9);
  dnaSequence$$1 = JAM.call(dnaSequence$$1.replace, dnaSequence$$1, [/2/g, "D"], JAM.policy.p9);
  return dnaSequence$$1
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
  var v331 = alignArray.length;
  var v52 = v331 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v332 = alignArray.length;
  var v54 = i$$4 < v332;
  for(;v54;) {
    var v500 = alignArray[i$$4];
    var v333 = JAM.call(v500.search, v500, [/[^\s]+\s/], JAM.policy.p9);
    var v53 = v333 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v334 = alignArray.length;
    v54 = i$$4 < v334
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
  var v335 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p9);
  var v57 = v335 != -1;
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
  var v336 = sequence$$2.length;
  var v58 = "&gt;results for " + v336;
  var stringToReturn = v58 + " residue sequence ";
  var v337 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p9);
  var v60 = v337 != -1;
  if(v60) {
    var v338 = stringToReturn + '"';
    var v59 = v338 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v339 = stringToReturn + ' starting "';
  var v340 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p9);
  var v61 = v339 + v340;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v341 = sequenceOne.length;
  var v62 = "Search results for " + v341;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v342 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p9);
  var v64 = v342 != -1;
  if(v64) {
    var v343 = stringToReturn$$1 + '"';
    var v63 = v343 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v344 = stringToReturn$$1 + ' starting "';
  var v345 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p9);
  var v65 = v344 + v345;
  stringToReturn$$1 = v65 + '"\n';
  var v346 = stringToReturn$$1 + "and ";
  var v347 = sequenceTwo.length;
  var v66 = v346 + v347;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v348 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p9);
  var v68 = v348 != -1;
  if(v68) {
    var v349 = stringToReturn$$1 + '"';
    var v67 = v349 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v350 = stringToReturn$$1 + ' starting "';
  var v351 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p9);
  var v69 = v350 + v351;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v352 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v352;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    var v569 = arrayOfPatterns$$3[j$$2];
    var v501 = JAM.call(v569.match, v569, [/\/.+\//], JAM.policy.p9);
    var v353 = v501 + "gi";
    if(JAM.isEval(eval)) {
      var v734 = eval("introspect(JAM.policy.pFull) { " + v353 + " }")
    }else {
      var v734 = JAM.call(eval, null, [v353])
    }
    v72[v73] = v734;
    j$$2 = j$$2 + 1;
    var v354 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v354
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v355 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v355;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    var v502 = arrayOfPatterns$$4[j$$3];
    var v356 = JAM.call(v502.match, v502, [/=[a-zA-Z\*]/], JAM.policy.p9);
    var v735 = JAM.call(v356.toString, v356, [], JAM.policy.p9);
    v76[v77] = v735;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    var v357 = geneticCodeMatchResult$$1[j$$3];
    var v736 = JAM.call(v357.replace, v357, [/=/g, ""], JAM.policy.p9);
    v78[v79] = v736;
    j$$3 = j$$3 + 1;
    var v358 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v358
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v359 = sequence$$3.length;
  var v81 = "Results for " + v359;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v360 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p9);
  var v83 = v360 != -1;
  if(v83) {
    var v361 = stringToReturn$$2 + '"';
    var v82 = v361 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v362 = stringToReturn$$2 + ' starting "';
  var v363 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p9);
  var v84 = v362 + v363;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v503 = "Results for " + topology;
  var v364 = v503 + " ";
  var v365 = sequence$$4.length;
  var v86 = v364 + v365;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v366 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p9);
  var v88 = v366 != -1;
  if(v88) {
    var v367 = stringToReturn$$3 + '"';
    var v87 = v367 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v368 = stringToReturn$$3 + ' starting "';
  var v369 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p9);
  var v89 = v368 + v369;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v370 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v370;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v371 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p9);
  var v93 = v371 != -1;
  if(v93) {
    var v372 = stringToReturn$$4 + '"';
    var v92 = v372 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v373 = stringToReturn$$4 + ' starting "';
  var v374 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p9);
  var v94 = v373 + v374;
  stringToReturn$$4 = v94 + '"\n';
  var v375 = stringToReturn$$4 + "and ";
  var v376 = sequenceTwo$$1.length;
  var v95 = v375 + v376;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v377 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p9);
  var v97 = v377 != -1;
  if(v97) {
    var v378 = stringToReturn$$4 + '"';
    var v96 = v378 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v379 = stringToReturn$$4 + ' starting "';
  var v380 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p9);
  var v98 = v379 + v380;
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
    var v381 = JAM.call(Math.random, Math, [], JAM.policy.p9);
    var v382 = components.length;
    var v100 = v381 * v382;
    tempNum = JAM.call(Math.floor, Math, [v100], JAM.policy.p9);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p9);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p10)
}
function getSequenceFromFasta(sequenceRecord) {
  var v383 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p9);
  var v102 = v383 != -1;
  if(v102) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p9)
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v384 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p9);
  var v104 = v384 != -1;
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
  var v504 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p9);
  var v385 = v504 != -1;
  var v506 = !v385;
  if(v506) {
    var v570 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p9);
    var v505 = v570 != -1;
    var v572 = !v505;
    if(v572) {
      var v614 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p9);
      var v571 = v614 != -1;
      var v616 = !v571;
      if(v616) {
        var v644 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p9);
        var v615 = v644 != -1;
        var v646 = !v615;
        if(v646) {
          var v657 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p9);
          var v645 = v657 != -1;
          var v659 = !v645;
          if(v659) {
            var v670 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p9);
            var v658 = v670 != -1;
            var v672 = !v658;
            if(v672) {
              var v682 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p9);
              var v671 = v682 != -1;
              var v684 = !v671;
              if(v684) {
                var v693 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p9);
                var v683 = v693 != -1;
                var v695 = !v683;
                if(v695) {
                  var v702 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p9);
                  var v694 = v702 != -1;
                  var v704 = !v694;
                  if(v704) {
                    var v709 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p9);
                    var v703 = v709 != -1;
                    var v711 = !v703;
                    if(v711) {
                      var v710 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p9);
                      v703 = v710 != -1
                    }
                    v694 = v703
                  }
                  v683 = v694
                }
                v671 = v683
              }
              v658 = v671
            }
            v645 = v658
          }
          v615 = v645
        }
        v571 = v615
      }
      v505 = v571
    }
    v385 = v505
  }
  var v105 = v385;
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
  var v573 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v507 = v573 + "<head>\n";
  var v386 = v507 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v386 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v110.write, v110, [v111], JAM.policy.p9);
  if(isColor) {
    var v112 = outputWindow.document;
    var v724 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v720 = v724 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v716 = v720 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v712 = v716 + "div.info {font-weight: bold}\n";
    var v705 = v712 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v696 = v705 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v685 = v696 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v673 = v685 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v660 = v673 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v647 = v660 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v617 = v647 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v574 = v617 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v508 = v574 + "td.many {color: #000000}\n";
    var v387 = v508 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v387 + "</style>\n";
    JAM.call(v112.write, v112, [v113], JAM.policy.p9)
  }else {
    var v114 = outputWindow.document;
    var v728 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v725 = v728 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v721 = v725 + "div.title {display: none}\n";
    var v717 = v721 + "div.info {font-weight: bold}\n";
    var v713 = v717 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v706 = v713 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v697 = v706 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v686 = v697 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v674 = v686 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v661 = v674 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v648 = v661 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v618 = v648 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v575 = v618 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v509 = v575 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v388 = v509 + "img {display: none}\n";
    var v115 = v388 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p9)
  }
  var v116 = outputWindow.document;
  var v576 = "</head>\n" + '<body class="main">\n';
  var v510 = v576 + '<div class="title">';
  var v389 = v510 + title$$6;
  var v117 = v389 + " results</div>\n";
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
  var v577 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v511 = v577 + "<head>\n";
  var v390 = v511 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v390 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v118.write, v118, [v119], JAM.policy.p9);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v726 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v722 = v726 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v718 = v722 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v714 = v718 + "div.info {font-weight: bold}\n";
    var v707 = v714 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v698 = v707 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v687 = v698 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v675 = v687 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v662 = v675 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v649 = v662 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v619 = v649 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v578 = v619 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v512 = v578 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v391 = v512 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v391 + "</style>\n";
    JAM.call(v120.write, v120, [v121], JAM.policy.p9)
  }else {
    var v122 = outputWindow.document;
    var v730 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v729 = v730 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v727 = v729 + "div.title {display: none}\n";
    var v723 = v727 + "div.info {font-weight: bold}\n";
    var v719 = v723 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v715 = v719 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v708 = v715 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v699 = v708 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v688 = v699 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v676 = v688 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v663 = v676 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v650 = v663 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v620 = v650 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v579 = v620 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v513 = v579 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v392 = v513 + "img {display: none}\n";
    var v123 = v392 + "</style>\n";
    JAM.call(v122.write, v122, [v123], JAM.policy.p9)
  }
  var v124 = outputWindow.document;
  var v580 = "</head>\n" + '<body class="main">\n';
  var v514 = v580 + '<div class="title">';
  var v393 = v514 + title$$8;
  var v125 = v393 + " results</div>\n";
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
function reverse(dnaSequence$$2) {
  var tempDnaArray = new Array;
  var v394 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/./], JAM.policy.p9);
  var v126 = v394 != -1;
  if(v126) {
    tempDnaArray = JAM.call(dnaSequence$$2.match, dnaSequence$$2, [/./g], JAM.policy.p9);
    tempDnaArray = JAM.call(tempDnaArray.reverse, tempDnaArray, [], JAM.policy.p9);
    dnaSequence$$2 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p10)
  }
  return dnaSequence$$2
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
  var v395 = testArray[0];
  var v130 = v395 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v396 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p9);
  var v131 = v396 == -1;
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
  var v397 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p9);
  var v134 = v397 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v398 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p9);
  var v135 = v398 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v399 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p9);
  var v136 = v399 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v515 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p9);
  var v400 = v515 == -1;
  var v517 = !v400;
  if(v517) {
    var v581 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p9);
    var v516 = v581 == -1;
    var v583 = !v516;
    if(v583) {
      var v621 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p9);
      var v582 = v621 == -1;
      var v623 = !v582;
      if(v623) {
        var v622 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p9);
        v582 = v622 == -1
      }
      v516 = v582
    }
    v400 = v516
  }
  var v137 = v400;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v401 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p9);
  var v138 = v401 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v402 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v402 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$3) {
  var v403 = JAM.call(dnaSequence$$3.search, dnaSequence$$3, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p9);
  var v141 = v403 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v404 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p9);
  var v142 = v404 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v518 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p9);
  var v405 = v518 == -1;
  var v520 = !v405;
  if(v520) {
    var v584 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p9);
    var v519 = v584 == -1;
    var v586 = !v519;
    if(v586) {
      var v624 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p9);
      var v585 = v624 == -1;
      var v626 = !v585;
      if(v626) {
        var v625 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p9);
        v585 = v625 == -1
      }
      v519 = v585
    }
    v405 = v519
  }
  var v143 = v405;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v521 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p9);
  var v406 = v521 == -1;
  var v523 = !v406;
  if(v523) {
    var v587 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p9);
    var v522 = v587 == -1;
    var v589 = !v522;
    if(v589) {
      var v627 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p9);
      var v588 = v627 == -1;
      var v629 = !v588;
      if(v629) {
        var v628 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p9);
        v588 = v628 == -1
      }
      v522 = v588
    }
    v406 = v522
  }
  var v144 = v406;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v407 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p9);
  var v145 = v407 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v524 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p9);
  var v408 = v524 == -1;
  var v526 = !v408;
  if(v526) {
    var v590 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p9);
    var v525 = v590 == -1;
    var v592 = !v525;
    if(v592) {
      var v630 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p9);
      var v591 = v630 == -1;
      var v632 = !v591;
      if(v632) {
        var v631 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p9);
        v591 = v631 == -1
      }
      v525 = v591
    }
    v408 = v525
  }
  var v146 = v408;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v409 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p9);
  var v147 = v409 == -1;
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
    var v410 = basePerLine / groupSize;
    var v152 = j$$6 <= v410;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v149 = lineOfText;
        var v411 = k + i$$5;
        var v150 = JAM.call(text$$10.charAt, text$$10, [v411], JAM.policy.p9);
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v412 = basePerLine / groupSize;
      v152 = j$$6 <= v412
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
    var v413 = adjustment < 0;
    if(v413) {
      v413 = adjusted >= 0
    }
    var v156 = v413;
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
    var v414 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v414;
    for(;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for(;v160;) {
        var v415 = i$$6 + k$$1;
        var v157 = v415 >= stopBase$$2;
        if(v157) {
          break
        }
        var v158 = lineOfText$$1;
        var v416 = k$$1 + i$$6;
        var v159 = JAM.call(text$$12.charAt, text$$12, [v416], JAM.policy.p9);
        lineOfText$$1 = v158 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if(v163) {
        var v161 = aboveNum;
        var v417 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v417, "", groupSize$$2, tabIn$$3);
        aboveNum = v161 + v162
      }
      var v164 = i$$6 >= stopBase$$2;
      if(v164) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v418 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v418
    }
    var v188 = numberPosition$$1 == "left";
    if(v188) {
      var v166 = outputWindow.document;
      var v593 = adjustNumbering(lineNum, numberingAdjustment);
      var v527 = rightNum(v593, "", 8, tabIn$$3);
      var v419 = v527 + lineOfText$$1;
      var v167 = v419 + "\n";
      JAM.call(v166.write, v166, [v167], JAM.policy.p9);
      var v171 = strands$$1 == "two";
      if(v171) {
        var v168 = outputWindow.document;
        var v594 = adjustNumbering(lineNum, numberingAdjustment);
        var v528 = rightNum(v594, "", 8, tabIn$$3);
        var v529 = complement(lineOfText$$1);
        var v420 = v528 + v529;
        var v169 = v420 + "\n";
        JAM.call(v168.write, v168, [v169], JAM.policy.p9);
        var v170 = outputWindow.document;
        JAM.call(v170.write, v170, ["\n"], JAM.policy.p9)
      }
    }else {
      var v187 = numberPosition$$1 == "right";
      if(v187) {
        var v172 = outputWindow.document;
        var v530 = lineOfText$$1;
        var v531 = adjustNumbering(i$$6, numberingAdjustment);
        var v421 = v530 + v531;
        var v173 = v421 + "\n";
        JAM.call(v172.write, v172, [v173], JAM.policy.p9);
        var v177 = strands$$1 == "two";
        if(v177) {
          var v174 = outputWindow.document;
          var v532 = complement(lineOfText$$1);
          var v533 = adjustNumbering(i$$6, numberingAdjustment);
          var v422 = v532 + v533;
          var v175 = v422 + "\n";
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
            var v423 = complement(lineOfText$$1);
            var v183 = v423 + "\n";
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
    var v424 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v424;
    for(;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for(;v193;) {
        var v425 = i$$7 + k$$2;
        var v190 = v425 >= stopBase$$3;
        if(v190) {
          break
        }
        var v191 = lineOfText$$2;
        var v426 = k$$2 + i$$7;
        var v192 = JAM.call(text$$13.charAt, text$$13, [v426], JAM.policy.p9);
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
      var v427 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v427
    }
    var v209 = numberPosition$$2 == "left";
    if(v209) {
      var v199 = outputWindow.document;
      var v534 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v428 = v534 + lineOfText$$2;
      var v200 = v428 + "\n";
      JAM.call(v199.write, v199, [v200], JAM.policy.p9)
    }else {
      var v208 = numberPosition$$2 == "right";
      if(v208) {
        var v201 = outputWindow.document;
        var v429 = lineOfText$$2 + i$$7;
        var v202 = v429 + "\n";
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
  var v535 = sequence$$13.length;
  var v430 = v535 <= firstIndexToMutate;
  var v537 = !v430;
  if(v537) {
    var v536 = lastIndexToMutate < 0;
    var v595 = !v536;
    if(v595) {
      v536 = lastIndexToMutate <= firstIndexToMutate
    }
    v430 = v536
  }
  var v211 = v430;
  if(v211) {
    numMut = 0
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for(;v219;) {
    maxNum = sequence$$13.length;
    var v431 = JAM.call(Math.random, Math, [], JAM.policy.p9);
    var v212 = v431 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v212], JAM.policy.p9);
    var v432 = randNum < firstIndexToMutate;
    var v538 = !v432;
    if(v538) {
      v432 = randNum > lastIndexToMutate
    }
    var v213 = v432;
    if(v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p9);
    needNewChar = true;
    for(;needNewChar;) {
      var v433 = JAM.call(Math.random, Math, [], JAM.policy.p9);
      var v434 = components$$1.length;
      var v214 = v433 * v434;
      componentsIndex = JAM.call(Math.round, Math, [v214], JAM.policy.p9);
      var v435 = components$$1.length;
      var v215 = componentsIndex == v435;
      if(v215) {
        componentsIndex = 0
      }
      var v436 = components$$1[componentsIndex];
      var v216 = v436 != currentChar;
      if(v216) {
        needNewChar = false
      }
    }
    var v437 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p9);
    var v438 = components$$1[componentsIndex];
    var v217 = v437 + v438;
    var v439 = randNum + 1;
    var v440 = sequence$$13.length;
    var v218 = JAM.call(sequence$$13.substring, sequence$$13, [v439, v440], JAM.policy.p9);
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
    var v441 = JAM.call(Math.random, Math, [], JAM.policy.p9);
    var v442 = components$$2.length;
    var v222 = v441 * v442;
    tempNum$$1 = JAM.call(Math.floor, Math, [v222], JAM.policy.p9);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v443 = sequence$$14.length;
    var v225 = v443 == 60;
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
    var v596 = sequence$$15.length;
    var v539 = v596 - lookAhead;
    var v540 = sequence$$15.length;
    var v444 = JAM.call(sequence$$15.substring, sequence$$15, [v539, v540], JAM.policy.p9);
    var v230 = v444 + sequence$$15;
    var v231 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p9);
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v233 = outputWindow.document;
  JAM.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p9);
  var v234 = outputWindow.document;
  var v597 = '<tr><td class="title" width="200px">' + "Site:";
  var v541 = v597 + '</td><td class="title">';
  var v445 = v541 + "Positions:";
  var v235 = v445 + "</td></tr>\n";
  JAM.call(v234.write, v234, [v235], JAM.policy.p9);
  var i$$9 = 0;
  var v446 = arrayOfItems.length;
  var v251 = i$$9 < v446;
  for(;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v447 = arrayOfItems[i$$9];
    var v236 = JAM.call(v447.match, v447, [/\/.+\//], JAM.policy.p9);
    matchExp = v236 + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    var v598 = arrayOfItems[i$$9];
    var v542 = JAM.call(v598.match, v598, [/\)\D*\d+/], JAM.policy.p9);
    var v448 = JAM.call(v542.toString, v542, [], JAM.policy.p9);
    var v237 = JAM.call(v448.replace, v448, [/\)\D*/, ""], JAM.policy.p9);
    cutDistance = parseFloat(v237);
    var v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p9);
    for(;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v449 = matchPosition >= lowerLimit;
      if(v449) {
        v449 = matchPosition < upperLimit
      }
      var v241 = v449;
      if(v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v450 = matchPosition - shiftValue;
        var v240 = v450 + 1;
        tempString$$1 = v239 + v240
      }
      var v451 = matchExp.lastIndex;
      var v543 = RegExp.lastMatch;
      var v452 = v543.length;
      var v242 = v451 - v452;
      matchExp.lastIndex = v242 + 1;
      v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p9)
    }
    var v453 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p9);
    var v244 = v453 != -1;
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
    var v677 = '<tr><td class="' + backGroundClass;
    var v664 = v677 + '">';
    var v700 = arrayOfItems[i$$9];
    var v689 = JAM.call(v700.match, v700, [/\([^\(]+\)/], JAM.policy.p9);
    var v678 = JAM.call(v689.toString, v689, [], JAM.policy.p9);
    var v665 = JAM.call(v678.replace, v678, [/\(|\)/g, ""], JAM.policy.p9);
    var v651 = v664 + v665;
    var v633 = v651 + '</td><td class="';
    var v599 = v633 + backGroundClass;
    var v544 = v599 + '">';
    var v454 = v544 + tempString$$1;
    var v250 = v454 + "</td></tr>\n";
    JAM.call(v249.write, v249, [v250], JAM.policy.p9);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v455 = arrayOfItems.length;
    v251 = i$$9 < v455
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
  var v652 = '<tr><td class="title">' + "Pattern:";
  var v634 = v652 + '</td><td class="title">';
  var v600 = v634 + "Times found:";
  var v545 = v600 + '</td><td class="title">';
  var v456 = v545 + "Percentage:";
  var v255 = v456 + "</td></tr>\n";
  JAM.call(v254.write, v254, [v255], JAM.policy.p9);
  var i$$10 = 0;
  var v457 = arrayOfItems$$1.length;
  var v264 = i$$10 < v457;
  for(;v264;) {
    var tempNumber = 0;
    var v458 = arrayOfItems$$1[i$$10];
    var v256 = JAM.call(v458.match, v458, [/\/[^\/]+\//], JAM.policy.p9);
    var matchExp$$1 = v256 + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    var v459 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p9);
    var v258 = v459 != -1;
    if(v258) {
      var v257 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p9);
      tempNumber = v257.length
    }
    var percentage = 0;
    var v546 = originalLength + 1;
    var v635 = arrayOfItems$$1[i$$10];
    var v601 = JAM.call(v635.match, v635, [/\d+/], JAM.policy.p9);
    var v547 = parseFloat(v601);
    var v460 = v546 - v547;
    var v261 = v460 > 0;
    if(v261) {
      var v259 = 100 * tempNumber;
      var v461 = originalLength + 1;
      var v602 = arrayOfItems$$1[i$$10];
      var v548 = JAM.call(v602.match, v602, [/\d+/], JAM.policy.p9);
      var v462 = parseFloat(v548);
      var v260 = v461 - v462;
      percentage = v259 / v260
    }
    var v262 = outputWindow.document;
    var v701 = arrayOfItems$$1[i$$10];
    var v690 = JAM.call(v701.match, v701, [/\([^\(]+\)\b/], JAM.policy.p9);
    var v679 = JAM.call(v690.toString, v690, [], JAM.policy.p9);
    var v666 = JAM.call(v679.replace, v679, [/\(|\)/g, ""], JAM.policy.p9);
    var v653 = "<tr><td>" + v666;
    var v636 = v653 + "</td><td>";
    var v603 = v636 + tempNumber;
    var v549 = v603 + "</td><td>";
    var v550 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p9);
    var v463 = v549 + v550;
    var v263 = v463 + "</td></tr>\n";
    JAM.call(v262.write, v262, [v263], JAM.policy.p9);
    i$$10 = i$$10 + 1;
    var v464 = arrayOfItems$$1.length;
    v264 = i$$10 < v464
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
  var v465 = sequence$$17.length;
  var v272 = v465 > 0;
  for(;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v466 = JAM.call(Math.random, Math, [], JAM.policy.p9);
    var v266 = v466 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v266], JAM.policy.p9);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p9);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p9);
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v267, v268], JAM.policy.p9);
    sequence$$17 = tempString1 + tempString2;
    var v467 = tempSeq.length;
    var v271 = v467 == 60;
    if(v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      JAM.call(v269.write, v269, [v270], JAM.policy.p9);
      tempSeq = ""
    }
    var v468 = sequence$$17.length;
    v272 = v468 > 0
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  JAM.call(v273.write, v273, [v274], JAM.policy.p9);
  return true
}
function emblFasta(theDocument) {
  var newDna = "";
  var maxInput$$3 = 2E5;
  var v469 = testScript();
  var v275 = v469 == false;
  if(v275) {
    return false
  }
  var v667 = theDocument.forms;
  var v654 = v667[0];
  var v637 = v654.elements;
  var v604 = v637[0];
  var v551 = checkFormElement(v604);
  var v470 = v551 == false;
  var v553 = !v470;
  if(v553) {
    var v691 = theDocument.forms;
    var v680 = v691[0];
    var v668 = v680.elements;
    var v655 = v668[0];
    var v638 = v655.value;
    var v605 = verifyEmbl(v638);
    var v552 = v605 == false;
    var v607 = !v552;
    if(v607) {
      var v692 = theDocument.forms;
      var v681 = v692[0];
      var v669 = v681.elements;
      var v656 = v669[0];
      var v639 = v656.value;
      var v606 = checkTextLength(v639, maxInput$$3);
      v552 = v606 == false
    }
    v470 = v552
  }
  var v276 = v470;
  if(v276) {
    return false
  }
  openWindow("EMBL to FASTA");
  openPre();
  var v640 = theDocument.forms;
  var v608 = v640[0];
  var v554 = v608.elements;
  var v471 = v554[0];
  var v277 = v471.value;
  emblToFasta(v277);
  closePre();
  closeWindow();
  return true
}
function emblToFasta(emblFile$$2) {
  var title$$9;
  var v278 = "_" + emblFile$$2;
  emblFile$$2 = v278 + "_";
  var recordArray = JAM.call(emblFile$$2.split, emblFile$$2, [/ID\s\s\s[^\f\n\r]*/], JAM.policy.p9);
  var i$$11 = 1;
  var v472 = recordArray.length;
  var v288 = i$$11 < v472;
  for(;v288;) {
    var v279 = recordArray[i$$11];
    var mainArray = JAM.call(v279.split, v279, [/[\f\n\r]\s*FH   Key             Location\/Qualifiers[\f\n\r]+\s*FH|[\f\n\r]\s*XX[\s]*[\f\n\r]\s*SQ[^\f\n\r]*/], JAM.policy.p9);
    var v555 = mainArray[0];
    var v473 = JAM.call(v555.search, v555, [/[\f\n\r]\s*DE[^\f\n\r]+/], JAM.policy.p9);
    var v281 = v473 != -1;
    if(v281) {
      var v556 = mainArray[0];
      var v474 = JAM.call(v556.match, v556, [/[\f\n\r]\s*DE[^\f\n\r]+/], JAM.policy.p9);
      var v280 = JAM.call(v474.toString, v474, [], JAM.policy.p9);
      title$$9 = JAM.call(v280.replace, v280, [/[\f\n\r]\s*DE\s*/, ""], JAM.policy.p9)
    }else {
      title$$9 = "Untitled"
    }
    var v475 = JAM.call(title$$9.replace, title$$9, [/[\f\n\r\t]+$/g, ""], JAM.policy.p9);
    var v282 = filterFastaTitle(v475);
    title$$9 = v282 + "\n";
    var v283 = mainArray[2];
    dnaArray = JAM.call(v283.split, v283, [/\/{2}/], JAM.policy.p9);
    var v476 = dnaArray.length;
    var v284 = v476 == 1;
    if(v284) {
      alert("The entire EMBL file may not have been processed.");
      JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p9)
    }
    var v285 = dnaArray[0];
    dnaSequence = removeNonDna(v285);
    var v286 = outputWindow.document;
    var v557 = "&gt;" + title$$9;
    var v558 = addReturns(dnaSequence);
    var v477 = v557 + v558;
    var v287 = v477 + "\n\n";
    JAM.call(v286.write, v286, [v287], JAM.policy.p9);
    i$$11 = i$$11 + 1;
    var v478 = recordArray.length;
    v288 = i$$11 < v478
  }
  return true
}
JAM.set(document, "onload", v2);
var v289 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p9);
JAM.set(v289, "onclick", v3);
var v290 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p9);
JAM.set(v290, "onclick", v4);
