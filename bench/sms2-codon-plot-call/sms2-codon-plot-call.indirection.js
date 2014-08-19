function v5() {
  var v612 = document.forms;
  var v521 = v612[0];
  var v311 = v521.elements;
  var v6 = v311[0];
  v6.value = " ";
  var v613 = document.forms;
  var v522 = v613[0];
  var v312 = v522.elements;
  var v7 = v312[4];
  v7.value = " ";
  return
}
function v4() {
  try {
    codonPlot(document)
  }catch(e$$7) {
    var v8 = "The following error was encountered: " + e$$7;
    alert(v8)
  }
  return
}
function v3() {
  var v313 = document.main_form;
  var v9 = v313.main_submit;
  JAM.call(v9.focus, v9, [], JAM.policy.p12);
  return
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$12, s$$2) {
    return p1 + "\n"
  }
  sequence = JAM.call(sequence.replace, sequence, [/(.{60})/g, v0], JAM.policy.p12);
  return sequence
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v10 = arrayOfSequences[0];
  var lengthOfAlign = v10.length;
  var v314 = arrayOfSequences.length;
  var v11 = v314 < 2;
  if(v11) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v315 = arrayOfTitles.length;
  var v13 = i$$1 < v315;
  for(;v13;) {
    var v614 = arrayOfTitles[i$$1];
    var v523 = JAM.call(v614.search, v614, [/\S/], JAM.policy.p12);
    var v316 = v523 == -1;
    var v525 = !v316;
    if(v525) {
      var v669 = arrayOfSequences[i$$1];
      var v615 = JAM.call(v669.search, v669, [/\S/], JAM.policy.p12);
      var v524 = v615 == -1;
      var v617 = !v524;
      if(v617) {
        var v670 = arrayOfSequences[i$$1];
        var v616 = v670.length;
        v524 = v616 != lengthOfAlign
      }
      v316 = v524
    }
    var v12 = v316;
    if(v12) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v317 = arrayOfTitles.length;
    v13 = i$$1 < v317
  }
  return true
}
function checkCodonTable(codonTable) {
  var v526 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p12);
  var v318 = v526 == -1;
  var v528 = !v318;
  if(v528) {
    var v618 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p12);
    var v527 = v618 == -1;
    var v620 = !v527;
    if(v620) {
      var v671 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p12);
      var v619 = v671 == -1;
      var v673 = !v619;
      if(v673) {
        var v706 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p12);
        var v672 = v706 == -1;
        var v708 = !v672;
        if(v708) {
          var v707 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p12);
          v672 = v707 == -1
        }
        v619 = v672
      }
      v527 = v619
    }
    v318 = v527
  }
  var v14 = v318;
  if(v14) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v529 = formElement.value;
  var v319 = JAM.call(v529.search, v529, [/\S/], JAM.policy.p12);
  var v15 = v319 == -1;
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
  var v320 = arrayOfPatterns.length;
  var v18 = z$$2 < v320;
  for(;v18;) {
    var v530 = arrayOfPatterns[z$$2];
    var v321 = JAM.call(v530.search, v530, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p12);
    var v16 = v321 == -1;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v531 = arrayOfPatterns[z$$2];
    var v322 = moreExpressionCheck(v531);
    var v17 = v322 == false;
    if(v17) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v323 = arrayOfPatterns.length;
    v18 = z$$2 < v323
  }
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v19);
  var v20 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v20);
  var j = 0;
  var v324 = arrayOfPatterns.length;
  var v27 = j < v324;
  for(;v27;) {
    var v21 = geneticCodeMatchExp;
    var v22 = j;
    var v621 = arrayOfPatterns[j];
    var v532 = JAM.call(v621.match, v621, [/\/.+\//], JAM.policy.p12);
    var v325 = v532 + "gi";
    if(JAM.isEval(eval)) {
      var v815 = eval("introspect(JAM.policy.pFull) { " + v325 + " }")
    }else {
      var v815 = JAM.call(eval, null, [v325])
    }
    v21[v22] = v815;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    var v533 = arrayOfPatterns[j];
    var v326 = JAM.call(v533.match, v533, [/=[a-zA-Z\*]/], JAM.policy.p12);
    var v816 = JAM.call(v326.toString, v326, [], JAM.policy.p12);
    v23[v24] = v816;
    var v25 = geneticCodeMatchResult;
    var v26 = j;
    var v327 = geneticCodeMatchResult[j];
    var v817 = JAM.call(v327.replace, v327, [/=/g, ""], JAM.policy.p12);
    v25[v26] = v817;
    j = j + 1;
    var v328 = arrayOfPatterns.length;
    v27 = j < v328
  }
  var i$$2 = 0;
  var v534 = testSequence.length;
  var v329 = v534 - 3;
  var v34 = i$$2 <= v329;
  for(;v34;) {
    var v28 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v28], JAM.policy.p12);
    j = 0;
    var v330 = geneticCodeMatchExp.length;
    var v32 = j < v330;
    for(;v32;) {
      var v535 = geneticCodeMatchExp[j];
      var v331 = JAM.call(codon.search, codon, [v535], JAM.policy.p13);
      var v31 = v331 != -1;
      if(v31) {
        var v30 = oneMatch == true;
        if(v30) {
          var v332 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v29 = v332 + ".";
          alert(v29);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v333 = geneticCodeMatchExp.length;
      v32 = j < v333
    }
    var v33 = oneMatch == false;
    if(v33) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v536 = testSequence.length;
    var v334 = v536 - 3;
    v34 = i$$2 <= v334
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v335 = arrayOfPatterns$$1.length;
  var v36 = z$$3 < v335;
  for(;v36;) {
    var v537 = arrayOfPatterns$$1[z$$3];
    var v336 = JAM.call(v537.search, v537, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p12);
    var v35 = v336 != -1;
    if(v35) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v337 = arrayOfPatterns$$1.length;
    v36 = z$$3 < v337
  }
  var i$$3 = 0;
  var v338 = arrayOfPatterns$$1.length;
  var v40 = i$$3 < v338;
  for(;v40;) {
    var v538 = arrayOfPatterns$$1[i$$3];
    var v339 = "[" + v538;
    var v37 = v339 + "]";
    var re = new RegExp(v37, "gi");
    var j$$1 = i$$3 + 1;
    var v340 = arrayOfPatterns$$1.length;
    var v39 = j$$1 < v340;
    for(;v39;) {
      var v539 = arrayOfPatterns$$1[j$$1];
      var v341 = JAM.call(v539.search, v539, [re], JAM.policy.p13);
      var v38 = v341 != -1;
      if(v38) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v342 = arrayOfPatterns$$1.length;
      v39 = j$$1 < v342
    }
    i$$3 = i$$3 + 1;
    var v343 = arrayOfPatterns$$1.length;
    v40 = i$$3 < v343
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v344 = arrayOfPatterns$$2.length;
  var v43 = z$$4 < v344;
  for(;v43;) {
    var v540 = arrayOfPatterns$$2[z$$4];
    var v345 = JAM.call(v540.search, v540, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p12);
    var v41 = v345 == -1;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v541 = arrayOfPatterns$$2[z$$4];
    var v346 = moreExpressionCheck(v541);
    var v42 = v346 == false;
    if(v42) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v347 = arrayOfPatterns$$2.length;
    v43 = z$$4 < v347
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v622 = getSequenceFromFasta(text$$7);
  var v542 = JAM.call(v622.replace, v622, [/[^A-Za-z]/g, ""], JAM.policy.p12);
  var v348 = v542.length;
  var v45 = v348 > maxInput;
  if(v45) {
    var v349 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v44 = v349 + " characters.";
    alert(v44);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v350 = text$$8.length;
  var v47 = v350 > maxInput$$1;
  if(v47) {
    var v351 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v46 = v351 + " characters.";
    alert(v46);
    return false
  }else {
    return true
  }
  return
}
function complement(dnaSequence) {
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/g/g, "1"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/c/g, "2"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "c"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "g"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/G/g, "1"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/C/g, "2"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "C"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "G"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/a/g, "1"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/t/g, "2"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "t"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "a"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/A/g, "1"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/T/g, "2"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "T"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "A"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/u/g, "a"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/U/g, "A"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/r/g, "1"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/y/g, "2"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "y"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "r"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/R/g, "1"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/Y/g, "2"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "Y"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "R"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/k/g, "1"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/m/g, "2"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "m"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "k"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/K/g, "1"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/M/g, "2"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "M"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "K"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/b/g, "1"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/v/g, "2"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "v"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "b"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/B/g, "1"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/V/g, "2"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "V"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "B"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/d/g, "1"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/h/g, "2"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "h"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "d"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/D/g, "1"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/H/g, "2"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/1/g, "H"], JAM.policy.p12);
  dnaSequence = JAM.call(dnaSequence.replace, dnaSequence, [/2/g, "D"], JAM.policy.p12);
  return dnaSequence
}
function closeForm() {
  var v48 = outputWindow.document;
  JAM.call(v48.write, v48, ["</form>"], JAM.policy.p12);
  return true
}
function closePre() {
  var v49 = outputWindow.document;
  JAM.call(v49.write, v49, ["</div>"], JAM.policy.p12);
  var v50 = outputWindow.document;
  JAM.call(v50.write, v50, ["</pre>\n"], JAM.policy.p12);
  return
}
function closeTextArea() {
  var v51 = outputWindow.document;
  JAM.call(v51.write, v51, ["</textarea>"], JAM.policy.p12);
  return true
}
function closeWindow() {
  var v52 = outputWindow.document;
  JAM.call(v52.write, v52, ["</body>\n</html>\n"], JAM.policy.p12);
  outputWindow.status = "Done.";
  var v53 = outputWindow.document;
  JAM.call(v53.close, v53, [], JAM.policy.p12);
  return true
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = JAM.call(sequence$$1.toLowerCase, sequence$$1, [], JAM.policy.p12);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/t/g, "[TU]"], JAM.policy.p12);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/r/g, "[AGR]"], JAM.policy.p12);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/y/g, "[CTUY]"], JAM.policy.p12);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/s/g, "[GCS]"], JAM.policy.p12);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/w/g, "[ATUW]"], JAM.policy.p12);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/k/g, "[GTUK]"], JAM.policy.p12);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/m/g, "[ACM]"], JAM.policy.p12);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/b/g, "[CGTUBSKY]"], JAM.policy.p12);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/d/g, "[AGTUDRKW]"], JAM.policy.p12);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/h/g, "[ACTUHMYW]"], JAM.policy.p12);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/v/g, "[ACGVSMR]"], JAM.policy.p12);
  sequence$$1 = JAM.call(sequence$$1.replace, sequence$$1, [/n/g, "[ACGTURYSWKMBDHVN]"], JAM.policy.p12);
  return sequence$$1
}
function earlyCheckAlign(alignArray) {
  var v352 = alignArray.length;
  var v54 = v352 < 3;
  if(v54) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v353 = alignArray.length;
  var v56 = i$$4 < v353;
  for(;v56;) {
    var v543 = alignArray[i$$4];
    var v354 = JAM.call(v543.search, v543, [/[^\s]+\s/], JAM.policy.p12);
    var v55 = v354 == -1;
    if(v55) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v355 = alignArray.length;
    v56 = i$$4 < v355
  }
  return true
}
function filterAlignSeq(alignSeq) {
  alignSeq = JAM.call(alignSeq.replace, alignSeq, [/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, ""], JAM.policy.p12);
  return alignSeq
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/\s{2,}/g, " "], JAM.policy.p12);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/^\s*/g, ""], JAM.policy.p12);
  sequenceTitle = JAM.call(sequenceTitle.replace, sequenceTitle, [/[\f\n\r\t]+$/g, "\n"], JAM.policy.p12);
  return JAM.call(sequenceTitle.replace, sequenceTitle, [/[\<\>]\n/gi, ""], JAM.policy.p12)
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v356 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p12);
  var v59 = v356 != -1;
  if(v59) {
    var v58 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p13);
    for(;v58;) {
      var v57 = matchArray[0];
      JAM.call(arrayOfFasta.push, arrayOfFasta, [v57], JAM.policy.p13);
      v58 = matchArray = JAM.call(re$$1.exec, re$$1, [sequenceData], JAM.policy.p13)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v357 = sequence$$2.length;
  var v60 = "&gt;results for " + v357;
  var stringToReturn = v60 + " residue sequence ";
  var v358 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p12);
  var v62 = v358 != -1;
  if(v62) {
    var v359 = stringToReturn + '"';
    var v61 = v359 + fastaSequenceTitle;
    stringToReturn = v61 + '"'
  }
  var v360 = stringToReturn + ' starting "';
  var v361 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p12);
  var v63 = v360 + v361;
  stringToReturn = v63 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v362 = sequenceOne.length;
  var v64 = "Search results for " + v362;
  var stringToReturn$$1 = v64 + " residue sequence ";
  var v363 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p12);
  var v66 = v363 != -1;
  if(v66) {
    var v364 = stringToReturn$$1 + '"';
    var v65 = v364 + fastaSequenceTitleOne;
    stringToReturn$$1 = v65 + '"'
  }
  var v365 = stringToReturn$$1 + ' starting "';
  var v366 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p12);
  var v67 = v365 + v366;
  stringToReturn$$1 = v67 + '"\n';
  var v367 = stringToReturn$$1 + "and ";
  var v368 = sequenceTwo.length;
  var v68 = v367 + v368;
  stringToReturn$$1 = v68 + " residue sequence ";
  var v369 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p12);
  var v70 = v369 != -1;
  if(v70) {
    var v370 = stringToReturn$$1 + '"';
    var v69 = v370 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v69 + '"'
  }
  var v371 = stringToReturn$$1 + ' starting "';
  var v372 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p12);
  var v71 = v371 + v372;
  stringToReturn$$1 = v71 + '"';
  var v72 = '<div class="info">' + stringToReturn$$1;
  return v72 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v73 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v73);
  var j$$2 = 0;
  var v373 = arrayOfPatterns$$3.length;
  var v76 = j$$2 < v373;
  for(;v76;) {
    var v74 = geneticCodeMatchExp$$1;
    var v75 = j$$2;
    var v623 = arrayOfPatterns$$3[j$$2];
    var v544 = JAM.call(v623.match, v623, [/\/.+\//], JAM.policy.p12);
    var v374 = v544 + "gi";
    if(JAM.isEval(eval)) {
      var v818 = eval("introspect(JAM.policy.pFull) { " + v374 + " }")
    }else {
      var v818 = JAM.call(eval, null, [v374])
    }
    v74[v75] = v818;
    j$$2 = j$$2 + 1;
    var v375 = arrayOfPatterns$$3.length;
    v76 = j$$2 < v375
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v77 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v77);
  var j$$3 = 0;
  var v376 = arrayOfPatterns$$4.length;
  var v82 = j$$3 < v376;
  for(;v82;) {
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    var v545 = arrayOfPatterns$$4[j$$3];
    var v377 = JAM.call(v545.match, v545, [/=[a-zA-Z\*]/], JAM.policy.p12);
    var v819 = JAM.call(v377.toString, v377, [], JAM.policy.p12);
    v78[v79] = v819;
    var v80 = geneticCodeMatchResult$$1;
    var v81 = j$$3;
    var v378 = geneticCodeMatchResult$$1[j$$3];
    var v820 = JAM.call(v378.replace, v378, [/=/g, ""], JAM.policy.p12);
    v80[v81] = v820;
    j$$3 = j$$3 + 1;
    var v379 = arrayOfPatterns$$4.length;
    v82 = j$$3 < v379
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v380 = sequence$$3.length;
  var v83 = "Results for " + v380;
  var stringToReturn$$2 = v83 + " residue sequence ";
  var v381 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p12);
  var v85 = v381 != -1;
  if(v85) {
    var v382 = stringToReturn$$2 + '"';
    var v84 = v382 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v84 + '"'
  }
  var v383 = stringToReturn$$2 + ' starting "';
  var v384 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p12);
  var v86 = v383 + v384;
  stringToReturn$$2 = v86 + '"';
  var v87 = '<div class="info">' + stringToReturn$$2;
  return v87 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v546 = "Results for " + topology;
  var v385 = v546 + " ";
  var v386 = sequence$$4.length;
  var v88 = v385 + v386;
  var stringToReturn$$3 = v88 + " residue sequence ";
  var v387 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p12);
  var v90 = v387 != -1;
  if(v90) {
    var v388 = stringToReturn$$3 + '"';
    var v89 = v388 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v89 + '"'
  }
  var v389 = stringToReturn$$3 + ' starting "';
  var v390 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p12);
  var v91 = v389 + v390;
  stringToReturn$$3 = v91 + '"';
  var v92 = '<div class="info">' + stringToReturn$$3;
  return v92 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v391 = sequenceOne$$1.length;
  var v93 = "Alignment results for " + v391;
  var stringToReturn$$4 = v93 + " residue sequence ";
  var v392 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p12);
  var v95 = v392 != -1;
  if(v95) {
    var v393 = stringToReturn$$4 + '"';
    var v94 = v393 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v94 + '"'
  }
  var v394 = stringToReturn$$4 + ' starting "';
  var v395 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p12);
  var v96 = v394 + v395;
  stringToReturn$$4 = v96 + '"\n';
  var v396 = stringToReturn$$4 + "and ";
  var v397 = sequenceTwo$$1.length;
  var v97 = v396 + v397;
  stringToReturn$$4 = v97 + " residue sequence ";
  var v398 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p12);
  var v99 = v398 != -1;
  if(v99) {
    var v399 = stringToReturn$$4 + '"';
    var v98 = v399 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v98 + '"'
  }
  var v400 = stringToReturn$$4 + ' starting "';
  var v401 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p12);
  var v100 = v400 + v401;
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
    var v402 = JAM.call(Math.random, Math, [], JAM.policy.p12);
    var v403 = components.length;
    var v102 = v402 * v403;
    tempNum = JAM.call(Math.floor, Math, [v102], JAM.policy.p12);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p13);
    j$$4 = j$$4 + 1;
    v103 = j$$4 < lengthOut
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p14)
}
function getSequenceFromFasta(sequenceRecord) {
  var v404 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p12);
  var v104 = v404 != -1;
  if(v104) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p12)
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v405 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p12);
  var v106 = v405 != -1;
  if(v106) {
    var v105 = JAM.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p12);
    fastaTitle = JAM.call(v105.toString, v105, [], JAM.policy.p12);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\>|[\f\n\r]/g, ""], JAM.policy.p12);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/\s{2,}/g, " "], JAM.policy.p12);
    fastaTitle = JAM.call(fastaTitle.replace, fastaTitle, [/[\<\>]/gi, ""], JAM.policy.p12)
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v547 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p12);
  var v406 = v547 != -1;
  var v549 = !v406;
  if(v549) {
    var v624 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p12);
    var v548 = v624 != -1;
    var v626 = !v548;
    if(v626) {
      var v674 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p12);
      var v625 = v674 != -1;
      var v676 = !v625;
      if(v676) {
        var v709 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p12);
        var v675 = v709 != -1;
        var v711 = !v675;
        if(v711) {
          var v726 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p12);
          var v710 = v726 != -1;
          var v728 = !v710;
          if(v728) {
            var v742 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p12);
            var v727 = v742 != -1;
            var v744 = !v727;
            if(v744) {
              var v758 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p12);
              var v743 = v758 != -1;
              var v760 = !v743;
              if(v760) {
                var v771 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p12);
                var v759 = v771 != -1;
                var v773 = !v759;
                if(v773) {
                  var v783 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p12);
                  var v772 = v783 != -1;
                  var v785 = !v772;
                  if(v785) {
                    var v791 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p12);
                    var v784 = v791 != -1;
                    var v793 = !v784;
                    if(v793) {
                      var v792 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p12);
                      v784 = v792 != -1
                    }
                    v772 = v784
                  }
                  v759 = v772
                }
                v743 = v759
              }
              v727 = v743
            }
            v710 = v727
          }
          v675 = v710
        }
        v625 = v675
      }
      v548 = v625
    }
    v406 = v548
  }
  var v107 = v406;
  if(v107) {
    return false
  }
  return true
}
function openForm() {
  var v108 = outputWindow.document;
  JAM.call(v108.write, v108, ['<form action="">\n'], JAM.policy.p12);
  return true
}
function openPre() {
  var v109 = outputWindow.document;
  JAM.call(v109.write, v109, ["<pre>"], JAM.policy.p12);
  var v110 = outputWindow.document;
  JAM.call(v110.write, v110, ['<div class="pre">'], JAM.policy.p12);
  return
}
function openTextArea() {
  var v111 = outputWindow.document;
  JAM.call(v111.write, v111, ['<br /><textarea rows="6" cols="61">\n'], JAM.policy.p12);
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p12);
  var v112 = outputWindow.document;
  var v627 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v550 = v627 + "<head>\n";
  var v407 = v550 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v407 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v112.write, v112, [v113], JAM.policy.p13);
  if(isColor) {
    var v114 = outputWindow.document;
    var v808 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v804 = v808 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v799 = v804 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v794 = v799 + "div.info {font-weight: bold}\n";
    var v786 = v794 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v774 = v786 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v761 = v774 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v745 = v761 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v729 = v745 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v712 = v729 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v677 = v712 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v628 = v677 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v551 = v628 + "td.many {color: #000000}\n";
    var v408 = v551 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v115 = v408 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p13)
  }else {
    var v116 = outputWindow.document;
    var v812 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v809 = v812 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v805 = v809 + "div.title {display: none}\n";
    var v800 = v805 + "div.info {font-weight: bold}\n";
    var v795 = v800 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v787 = v795 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v775 = v787 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v762 = v775 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v746 = v762 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v730 = v746 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v713 = v730 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v678 = v713 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v629 = v678 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v552 = v629 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v409 = v552 + "img {display: none}\n";
    var v117 = v409 + "</style>\n";
    JAM.call(v116.write, v116, [v117], JAM.policy.p13)
  }
  var v118 = outputWindow.document;
  var v630 = "</head>\n" + '<body class="main">\n';
  var v553 = v630 + '<div class="title">';
  var v410 = v553 + title$$6;
  var v119 = v410 + " results</div>\n";
  JAM.call(v118.write, v118, [v119], JAM.policy.p13);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  outputWindow = JAM.call(window.open, window, ["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], JAM.policy.p14);
  JAM.call(outputWindow.focus, outputWindow, [], JAM.policy.p12);
  var v120 = outputWindow.document;
  var v631 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v554 = v631 + "<head>\n";
  var v411 = v554 + "<title>Sequence Manipulation Suite</title>\n";
  var v121 = v411 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v120.write, v120, [v121], JAM.policy.p13);
  if(isBackground) {
    var v122 = outputWindow.document;
    var v810 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v806 = v810 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v801 = v806 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v796 = v801 + "div.info {font-weight: bold}\n";
    var v788 = v796 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v776 = v788 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v763 = v776 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v747 = v763 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v731 = v747 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v714 = v731 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v679 = v714 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v632 = v679 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v555 = v632 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v412 = v555 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v123 = v412 + "</style>\n";
    JAM.call(v122.write, v122, [v123], JAM.policy.p13)
  }else {
    var v124 = outputWindow.document;
    var v814 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v813 = v814 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v811 = v813 + "div.title {display: none}\n";
    var v807 = v811 + "div.info {font-weight: bold}\n";
    var v802 = v807 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v797 = v802 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v789 = v797 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v777 = v789 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v764 = v777 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v748 = v764 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v732 = v748 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v715 = v732 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v680 = v715 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v633 = v680 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v556 = v633 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v413 = v556 + "img {display: none}\n";
    var v125 = v413 + "</style>\n";
    JAM.call(v124.write, v124, [v125], JAM.policy.p13)
  }
  var v126 = outputWindow.document;
  var v634 = "</head>\n" + '<body class="main">\n';
  var v557 = v634 + '<div class="title">';
  var v414 = v557 + title$$8;
  var v127 = v414 + " results</div>\n";
  JAM.call(v126.write, v126, [v127], JAM.policy.p13);
  outputWindow.status = "Please Wait.";
  return true
}
function removeFormatting(sequence$$5) {
  return JAM.call(sequence$$5.replace, sequence$$5, [/[\d\s]/g, ""], JAM.policy.p12)
}
function removeNonDna(sequence$$6) {
  return JAM.call(sequence$$6.replace, sequence$$6, [/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, ""], JAM.policy.p12)
}
function removeNonDnaStrict(sequence$$7) {
  return JAM.call(sequence$$7.replace, sequence$$7, [/[^gatucGATUC]/g, ""], JAM.policy.p12)
}
function removeNonProtein(sequence$$8) {
  return JAM.call(sequence$$8.replace, sequence$$8, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p12)
}
function removeNonProteinStrict(sequence$$9) {
  return JAM.call(sequence$$9.replace, sequence$$9, [/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, ""], JAM.policy.p12)
}
function removeNonProteinAllowDegen(sequence$$10) {
  return JAM.call(sequence$$10.replace, sequence$$10, [/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, ""], JAM.policy.p12)
}
function removeNonProteinAllowX(sequence$$11) {
  return JAM.call(sequence$$11.replace, sequence$$11, [/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, ""], JAM.policy.p12)
}
function removeWhiteSpace(text$$9) {
  return JAM.call(text$$9.replace, text$$9, [/\s/g, ""], JAM.policy.p12)
}
function removeNonLetters(sequence$$12) {
  return JAM.call(sequence$$12.replace, sequence$$12, [/[^A-Z]/gi, ""], JAM.policy.p12)
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  var v415 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p12);
  var v128 = v415 != -1;
  if(v128) {
    tempDnaArray = JAM.call(dnaSequence$$1.match, dnaSequence$$1, [/./g], JAM.policy.p12);
    tempDnaArray = JAM.call(tempDnaArray.reverse, tempDnaArray, [], JAM.policy.p12);
    dnaSequence$$1 = JAM.call(tempDnaArray.join, tempDnaArray, [""], JAM.policy.p14)
  }
  return dnaSequence$$1
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = JAM.call(theNumber.toString, theNumber, [], JAM.policy.p12);
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
  JAM.call(testArray.push, testArray, [testString], JAM.policy.p13);
  var v416 = testArray[0];
  var v132 = v416 != testString;
  if(v132) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v417 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p13);
  var v133 = v417 == -1;
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
  testString = JAM.call(testString.replace, testString, [/(\d)/g, v1], JAM.policy.p12);
  var v135 = testString != "1X2X3X";
  if(v135) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v418 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p12);
  var v136 = v418 != 2489.824;
  if(v136) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v419 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p12);
  var v137 = v419 != 2489.8;
  if(v137) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v420 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p12);
  var v138 = v420 == -1;
  if(v138) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v558 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p12);
  var v421 = v558 == -1;
  var v560 = !v421;
  if(v560) {
    var v635 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p12);
    var v559 = v635 == -1;
    var v637 = !v559;
    if(v637) {
      var v681 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p12);
      var v636 = v681 == -1;
      var v683 = !v636;
      if(v683) {
        var v682 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p12);
        v636 = v682 == -1
      }
      v559 = v636
    }
    v421 = v559
  }
  var v139 = v421;
  if(v139) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v422 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p12);
  var v140 = v422 == -1;
  if(v140) {
    alert("Please enter a number.");
    return false
  }
  var v142 = theNumber$$2 > maxInput$$2;
  if(v142) {
    var v423 = "Please enter a number less than or equal to " + maxInput$$2;
    var v141 = v423 + ".";
    alert(v141);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v424 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p12);
  var v143 = v424 != -1;
  if(v143) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v425 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p12);
  var v144 = v425 != -1;
  if(v144) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v561 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p12);
  var v426 = v561 == -1;
  var v563 = !v426;
  if(v563) {
    var v638 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p12);
    var v562 = v638 == -1;
    var v640 = !v562;
    if(v640) {
      var v684 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p12);
      var v639 = v684 == -1;
      var v686 = !v639;
      if(v686) {
        var v685 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p12);
        v639 = v685 == -1
      }
      v562 = v639
    }
    v426 = v562
  }
  var v145 = v426;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v564 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p12);
  var v427 = v564 == -1;
  var v566 = !v427;
  if(v566) {
    var v641 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p12);
    var v565 = v641 == -1;
    var v643 = !v565;
    if(v643) {
      var v687 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p12);
      var v642 = v687 == -1;
      var v689 = !v642;
      if(v689) {
        var v688 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p12);
        v642 = v688 == -1
      }
      v565 = v642
    }
    v427 = v565
  }
  var v146 = v427;
  if(v146) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v428 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p12);
  var v147 = v428 == -1;
  if(v147) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v567 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p12);
  var v429 = v567 == -1;
  var v569 = !v429;
  if(v569) {
    var v644 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p12);
    var v568 = v644 == -1;
    var v646 = !v568;
    if(v646) {
      var v690 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p12);
      var v645 = v690 == -1;
      var v692 = !v645;
      if(v692) {
        var v691 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p12);
        v645 = v691 == -1
      }
      v568 = v645
    }
    v429 = v568
  }
  var v148 = v429;
  if(v148) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v430 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p12);
  var v149 = v430 == -1;
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
    var v431 = basePerLine / groupSize;
    var v154 = j$$6 <= v431;
    for(;v154;) {
      var v153 = k < groupSize;
      for(;v153;) {
        var v151 = lineOfText;
        var v432 = k + i$$5;
        var v152 = JAM.call(text$$10.charAt, text$$10, [v432], JAM.policy.p13);
        lineOfText = v151 + v152;
        k = k + 1;
        v153 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v433 = basePerLine / groupSize;
      v154 = j$$6 <= v433
    }
    var v155 = outputWindow.document;
    var v156 = lineOfText + "\n";
    JAM.call(v155.write, v155, [v156], JAM.policy.p13);
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
    var v434 = adjustment < 0;
    if(v434) {
      v434 = adjusted >= 0
    }
    var v158 = v434;
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
    var v435 = basePerLine$$2 / groupSize$$2;
    var v167 = j$$7 <= v435;
    for(;v167;) {
      var v162 = k$$1 < groupSize$$2;
      for(;v162;) {
        var v436 = i$$6 + k$$1;
        var v159 = v436 >= stopBase$$2;
        if(v159) {
          break
        }
        var v160 = lineOfText$$1;
        var v437 = k$$1 + i$$6;
        var v161 = JAM.call(text$$12.charAt, text$$12, [v437], JAM.policy.p13);
        lineOfText$$1 = v160 + v161;
        k$$1 = k$$1 + 1;
        v162 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v165 = numberPosition$$1 == "above";
      if(v165) {
        var v163 = aboveNum;
        var v438 = adjustNumbering(i$$6, numberingAdjustment);
        var v164 = rightNum(v438, "", groupSize$$2, tabIn$$3);
        aboveNum = v163 + v164
      }
      var v166 = i$$6 >= stopBase$$2;
      if(v166) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v439 = basePerLine$$2 / groupSize$$2;
      v167 = j$$7 <= v439
    }
    var v190 = numberPosition$$1 == "left";
    if(v190) {
      var v168 = outputWindow.document;
      var v647 = adjustNumbering(lineNum, numberingAdjustment);
      var v570 = rightNum(v647, "", 8, tabIn$$3);
      var v440 = v570 + lineOfText$$1;
      var v169 = v440 + "\n";
      JAM.call(v168.write, v168, [v169], JAM.policy.p13);
      var v173 = strands$$1 == "two";
      if(v173) {
        var v170 = outputWindow.document;
        var v648 = adjustNumbering(lineNum, numberingAdjustment);
        var v571 = rightNum(v648, "", 8, tabIn$$3);
        var v572 = complement(lineOfText$$1);
        var v441 = v571 + v572;
        var v171 = v441 + "\n";
        JAM.call(v170.write, v170, [v171], JAM.policy.p13);
        var v172 = outputWindow.document;
        JAM.call(v172.write, v172, ["\n"], JAM.policy.p12)
      }
    }else {
      var v189 = numberPosition$$1 == "right";
      if(v189) {
        var v174 = outputWindow.document;
        var v573 = lineOfText$$1;
        var v574 = adjustNumbering(i$$6, numberingAdjustment);
        var v442 = v573 + v574;
        var v175 = v442 + "\n";
        JAM.call(v174.write, v174, [v175], JAM.policy.p13);
        var v179 = strands$$1 == "two";
        if(v179) {
          var v176 = outputWindow.document;
          var v575 = complement(lineOfText$$1);
          var v576 = adjustNumbering(i$$6, numberingAdjustment);
          var v443 = v575 + v576;
          var v177 = v443 + "\n";
          JAM.call(v176.write, v176, [v177], JAM.policy.p13);
          var v178 = outputWindow.document;
          JAM.call(v178.write, v178, ["\n"], JAM.policy.p12)
        }
      }else {
        var v188 = numberPosition$$1 == "above";
        if(v188) {
          var v180 = outputWindow.document;
          var v181 = aboveNum + "\n";
          JAM.call(v180.write, v180, [v181], JAM.policy.p13);
          var v182 = outputWindow.document;
          var v183 = lineOfText$$1 + "\n";
          JAM.call(v182.write, v182, [v183], JAM.policy.p13);
          var v187 = strands$$1 == "two";
          if(v187) {
            var v184 = outputWindow.document;
            var v444 = complement(lineOfText$$1);
            var v185 = v444 + "\n";
            JAM.call(v184.write, v184, [v185], JAM.policy.p13);
            var v186 = outputWindow.document;
            JAM.call(v186.write, v186, ["\n"], JAM.policy.p12)
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
    var v445 = basePerLine$$3 / groupSize$$3;
    var v200 = j$$8 <= v445;
    for(;v200;) {
      var v195 = k$$2 < groupSize$$3;
      for(;v195;) {
        var v446 = i$$7 + k$$2;
        var v192 = v446 >= stopBase$$3;
        if(v192) {
          break
        }
        var v193 = lineOfText$$2;
        var v447 = k$$2 + i$$7;
        var v194 = JAM.call(text$$13.charAt, text$$13, [v447], JAM.policy.p13);
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
      var v448 = basePerLine$$3 / groupSize$$3;
      v200 = j$$8 <= v448
    }
    var v211 = numberPosition$$2 == "left";
    if(v211) {
      var v201 = outputWindow.document;
      var v577 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v449 = v577 + lineOfText$$2;
      var v202 = v449 + "\n";
      JAM.call(v201.write, v201, [v202], JAM.policy.p13)
    }else {
      var v210 = numberPosition$$2 == "right";
      if(v210) {
        var v203 = outputWindow.document;
        var v450 = lineOfText$$2 + i$$7;
        var v204 = v450 + "\n";
        JAM.call(v203.write, v203, [v204], JAM.policy.p13)
      }else {
        var v209 = numberPosition$$2 == "above";
        if(v209) {
          var v205 = outputWindow.document;
          var v206 = aboveNum$$1 + "\n";
          JAM.call(v205.write, v205, [v206], JAM.policy.p13);
          var v207 = outputWindow.document;
          var v208 = lineOfText$$2 + "\n";
          JAM.call(v207.write, v207, [v208], JAM.policy.p13)
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
  var v578 = sequence$$13.length;
  var v451 = v578 <= firstIndexToMutate;
  var v580 = !v451;
  if(v580) {
    var v579 = lastIndexToMutate < 0;
    var v649 = !v579;
    if(v649) {
      v579 = lastIndexToMutate <= firstIndexToMutate
    }
    v451 = v579
  }
  var v213 = v451;
  if(v213) {
    numMut = 0
  }
  var i$$8 = 0;
  var v221 = i$$8 < numMut;
  for(;v221;) {
    maxNum = sequence$$13.length;
    var v452 = JAM.call(Math.random, Math, [], JAM.policy.p12);
    var v214 = v452 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v214], JAM.policy.p12);
    var v453 = randNum < firstIndexToMutate;
    var v581 = !v453;
    if(v581) {
      v453 = randNum > lastIndexToMutate
    }
    var v215 = v453;
    if(v215) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v221 = i$$8 < numMut;
      continue
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p12);
    needNewChar = true;
    for(;needNewChar;) {
      var v454 = JAM.call(Math.random, Math, [], JAM.policy.p12);
      var v455 = components$$1.length;
      var v216 = v454 * v455;
      componentsIndex = JAM.call(Math.round, Math, [v216], JAM.policy.p12);
      var v456 = components$$1.length;
      var v217 = componentsIndex == v456;
      if(v217) {
        componentsIndex = 0
      }
      var v457 = components$$1[componentsIndex];
      var v218 = v457 != currentChar;
      if(v218) {
        needNewChar = false
      }
    }
    var v458 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p12);
    var v459 = components$$1[componentsIndex];
    var v219 = v458 + v459;
    var v460 = randNum + 1;
    var v461 = sequence$$13.length;
    var v220 = JAM.call(sequence$$13.substring, sequence$$13, [v460, v461], JAM.policy.p13);
    sequence$$13 = v219 + v220;
    i$$8 = i$$8 + 1;
    v221 = i$$8 < numMut
  }
  var v222 = outputWindow.document;
  var v223 = addReturns(sequence$$13);
  JAM.call(v222.write, v222, [v223], JAM.policy.p13);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v228 = j$$9 < lengthOut$$1;
  for(;v228;) {
    var v462 = JAM.call(Math.random, Math, [], JAM.policy.p12);
    var v463 = components$$2.length;
    var v224 = v462 * v463;
    tempNum$$1 = JAM.call(Math.floor, Math, [v224], JAM.policy.p12);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v464 = sequence$$14.length;
    var v227 = v464 == 60;
    if(v227) {
      var v225 = outputWindow.document;
      var v226 = sequence$$14 + "\n";
      JAM.call(v225.write, v225, [v226], JAM.policy.p13);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v228 = j$$9 < lengthOut$$1
  }
  var v229 = outputWindow.document;
  var v230 = sequence$$14 + "\n";
  JAM.call(v229.write, v229, [v230], JAM.policy.p13);
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
    var v231 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p12);
    shiftValue = v231.length;
    var v650 = sequence$$15.length;
    var v582 = v650 - lookAhead;
    var v583 = sequence$$15.length;
    var v465 = JAM.call(sequence$$15.substring, sequence$$15, [v582, v583], JAM.policy.p13);
    var v232 = v465 + sequence$$15;
    var v233 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p12);
    sequence$$15 = v232 + v233;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v235 = outputWindow.document;
  JAM.call(v235.write, v235, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p12);
  var v236 = outputWindow.document;
  var v651 = '<tr><td class="title" width="200px">' + "Site:";
  var v584 = v651 + '</td><td class="title">';
  var v466 = v584 + "Positions:";
  var v237 = v466 + "</td></tr>\n";
  JAM.call(v236.write, v236, [v237], JAM.policy.p13);
  var i$$9 = 0;
  var v467 = arrayOfItems.length;
  var v253 = i$$9 < v467;
  for(;v253;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v468 = arrayOfItems[i$$9];
    var v238 = JAM.call(v468.match, v468, [/\/.+\//], JAM.policy.p12);
    matchExp = v238 + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    var v652 = arrayOfItems[i$$9];
    var v585 = JAM.call(v652.match, v652, [/\)\D*\d+/], JAM.policy.p12);
    var v469 = JAM.call(v585.toString, v585, [], JAM.policy.p12);
    var v239 = JAM.call(v469.replace, v469, [/\)\D*/, ""], JAM.policy.p12);
    cutDistance = parseFloat(v239);
    var v245 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p13);
    for(;v245;) {
      var v240 = matchExp.lastIndex;
      matchPosition = v240 - cutDistance;
      var v470 = matchPosition >= lowerLimit;
      if(v470) {
        v470 = matchPosition < upperLimit
      }
      var v243 = v470;
      if(v243) {
        timesFound = timesFound + 1;
        var v241 = tempString$$1 + ", ";
        var v471 = matchPosition - shiftValue;
        var v242 = v471 + 1;
        tempString$$1 = v241 + v242
      }
      var v472 = matchExp.lastIndex;
      var v586 = RegExp.lastMatch;
      var v473 = v586.length;
      var v244 = v472 - v473;
      matchExp.lastIndex = v244 + 1;
      v245 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p13)
    }
    var v474 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p12);
    var v246 = v474 != -1;
    if(v246) {
      tempString$$1 = JAM.call(tempString$$1.replace, tempString$$1, [/none,\s*/, ""], JAM.policy.p12)
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
    var v749 = '<tr><td class="' + backGroundClass;
    var v733 = v749 + '">';
    var v778 = arrayOfItems[i$$9];
    var v765 = JAM.call(v778.match, v778, [/\([^\(]+\)/], JAM.policy.p12);
    var v750 = JAM.call(v765.toString, v765, [], JAM.policy.p12);
    var v734 = JAM.call(v750.replace, v750, [/\(|\)/g, ""], JAM.policy.p12);
    var v716 = v733 + v734;
    var v693 = v716 + '</td><td class="';
    var v653 = v693 + backGroundClass;
    var v587 = v653 + '">';
    var v475 = v587 + tempString$$1;
    var v252 = v475 + "</td></tr>\n";
    JAM.call(v251.write, v251, [v252], JAM.policy.p13);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v476 = arrayOfItems.length;
    v253 = i$$9 < v476
  }
  var v254 = outputWindow.document;
  JAM.call(v254.write, v254, ["</tbody></table>\n"], JAM.policy.p12);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v255 = outputWindow.document;
  JAM.call(v255.write, v255, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p12);
  var v256 = outputWindow.document;
  var v717 = '<tr><td class="title">' + "Pattern:";
  var v694 = v717 + '</td><td class="title">';
  var v654 = v694 + "Times found:";
  var v588 = v654 + '</td><td class="title">';
  var v477 = v588 + "Percentage:";
  var v257 = v477 + "</td></tr>\n";
  JAM.call(v256.write, v256, [v257], JAM.policy.p13);
  var i$$10 = 0;
  var v478 = arrayOfItems$$1.length;
  var v266 = i$$10 < v478;
  for(;v266;) {
    var tempNumber = 0;
    var v479 = arrayOfItems$$1[i$$10];
    var v258 = JAM.call(v479.match, v479, [/\/[^\/]+\//], JAM.policy.p12);
    var matchExp$$1 = v258 + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    var v480 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p13);
    var v260 = v480 != -1;
    if(v260) {
      var v259 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p13);
      tempNumber = v259.length
    }
    var percentage = 0;
    var v589 = originalLength + 1;
    var v695 = arrayOfItems$$1[i$$10];
    var v655 = JAM.call(v695.match, v695, [/\d+/], JAM.policy.p12);
    var v590 = parseFloat(v655);
    var v481 = v589 - v590;
    var v263 = v481 > 0;
    if(v263) {
      var v261 = 100 * tempNumber;
      var v482 = originalLength + 1;
      var v656 = arrayOfItems$$1[i$$10];
      var v591 = JAM.call(v656.match, v656, [/\d+/], JAM.policy.p12);
      var v483 = parseFloat(v591);
      var v262 = v482 - v483;
      percentage = v261 / v262
    }
    var v264 = outputWindow.document;
    var v779 = arrayOfItems$$1[i$$10];
    var v766 = JAM.call(v779.match, v779, [/\([^\(]+\)\b/], JAM.policy.p12);
    var v751 = JAM.call(v766.toString, v766, [], JAM.policy.p12);
    var v735 = JAM.call(v751.replace, v751, [/\(|\)/g, ""], JAM.policy.p12);
    var v718 = "<tr><td>" + v735;
    var v696 = v718 + "</td><td>";
    var v657 = v696 + tempNumber;
    var v592 = v657 + "</td><td>";
    var v593 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p12);
    var v484 = v592 + v593;
    var v265 = v484 + "</td></tr>\n";
    JAM.call(v264.write, v264, [v265], JAM.policy.p13);
    i$$10 = i$$10 + 1;
    var v485 = arrayOfItems$$1.length;
    v266 = i$$10 < v485
  }
  var v267 = outputWindow.document;
  JAM.call(v267.write, v267, ["</tbody></table>\n"], JAM.policy.p12);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v486 = sequence$$17.length;
  var v274 = v486 > 0;
  for(;v274;) {
    maxNum$$1 = sequence$$17.length;
    var v487 = JAM.call(Math.random, Math, [], JAM.policy.p12);
    var v268 = v487 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v268], JAM.policy.p12);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p12);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p12);
    var v269 = randNum$$1 + 1;
    var v270 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v269, v270], JAM.policy.p12);
    sequence$$17 = tempString1 + tempString2;
    var v488 = tempSeq.length;
    var v273 = v488 == 60;
    if(v273) {
      var v271 = outputWindow.document;
      var v272 = tempSeq + "\n";
      JAM.call(v271.write, v271, [v272], JAM.policy.p13);
      tempSeq = ""
    }
    var v489 = sequence$$17.length;
    v274 = v489 > 0
  }
  var v275 = outputWindow.document;
  var v276 = tempSeq + "\n";
  JAM.call(v275.write, v275, [v276], JAM.policy.p13);
  return true
}
function fillCodon(aminoAcid, number, perThou, fraction) {
  this.aminoAcid = aminoAcid;
  this.number = number;
  this.perThou = perThou;
  this.fraction = fraction;
  return
}
function Codon() {
  return
}
function codonPlot(theDocument) {
  var newDna = "";
  var maxInput$$3 = 5E4;
  var codonTable$$1;
  var title$$9;
  var v490 = testScript();
  var v277 = v490 == false;
  if(v277) {
    return false
  }
  var v736 = theDocument.forms;
  var v719 = v736[0];
  var v697 = v719.elements;
  var v658 = v697[0];
  var v594 = checkFormElement(v658);
  var v491 = v594 == false;
  var v596 = !v491;
  if(v596) {
    var v767 = theDocument.forms;
    var v752 = v767[0];
    var v737 = v752.elements;
    var v720 = v737[0];
    var v698 = v720.value;
    var v659 = checkSequenceLength(v698, maxInput$$3);
    var v595 = v659 == false;
    var v661 = !v595;
    if(v661) {
      var v768 = theDocument.forms;
      var v753 = v768[0];
      var v738 = v753.elements;
      var v721 = v738[4];
      var v699 = v721.value;
      var v660 = checkCodonTable(v699);
      v595 = v660 == false
    }
    v491 = v595
  }
  var v278 = v491;
  if(v278) {
    return false
  }
  var v700 = theDocument.forms;
  var v662 = v700[0];
  var v597 = v662.elements;
  var v492 = v597[4];
  var v279 = v492.value;
  codonTable$$1 = makeCodonTable(v279);
  var v280 = codonTable$$1 == false;
  if(v280) {
    return false
  }
  var v701 = theDocument.forms;
  var v663 = v701[0];
  var v598 = v663.elements;
  var v493 = v598[0];
  var v281 = v493.value;
  newDna = getSequenceFromFasta(v281);
  var v702 = theDocument.forms;
  var v664 = v702[0];
  var v599 = v664.elements;
  var v494 = v599[0];
  var v282 = v494.value;
  title$$9 = getTitleFromFasta(v282);
  verifyDna(newDna);
  newDna = removeNonDna(newDna);
  openWindow("Codon Plot");
  var v283 = outputWindow.document;
  var v284 = getInfoFromTitleAndSequence(title$$9, newDna);
  JAM.call(v283.write, v283, [v284], JAM.policy.p13);
  openPre();
  writeCodonPlot(codonTable$$1, newDna);
  closePre();
  closeWindow();
  return true
}
function writeCodonPlot(codonTable$$2, sequence$$18) {
  function v2(str$$8, p1$$2, offset$$14, s$$4) {
    try {
      var v495 = codonTable$$2;
      var v600 = JAM.call(p1$$2.toString, p1$$2, [], JAM.policy.p12);
      var v496 = JAM.call(v600.toLowerCase, v600, [], JAM.policy.p12);
      var v285 = v495[v496];
      aminoAcid$$1 = v285.aminoAcid;
      var v497 = codonTable$$2;
      var v601 = JAM.call(p1$$2.toString, p1$$2, [], JAM.policy.p12);
      var v498 = JAM.call(v601.toLowerCase, v601, [], JAM.policy.p12);
      var v286 = v497[v498];
      yValue = v286.fraction
    }catch(e$$5) {
      aminoAcid$$1 = "???";
      yValue = 0
    }
    var v803 = JAM.call(p1$$2.toString, p1$$2, [], JAM.policy.p12);
    var v798 = JAM.call(v803.toLowerCase, v803, [], JAM.policy.p12);
    var v790 = "<b>" + v798;
    var v780 = v790 + ", ";
    var v781 = offset$$14 + 1;
    var v769 = v780 + v781;
    var v754 = v769 + " to ";
    var v755 = offset$$14 + 3;
    var v739 = v754 + v755;
    var v722 = v739 + " (";
    var v703 = v722 + aminoAcid$$1;
    var v665 = v703 + ")</b>\n";
    var v740 = markString.length;
    var v723 = yValue * v740;
    var v704 = JAM.call(Math.round, Math, [v723], JAM.policy.p13);
    var v666 = JAM.call(markString.substring, markString, [0, v704], JAM.policy.p12);
    var v602 = v665 + v666;
    var v499 = v602 + " ";
    var v500 = JAM.call(yValue.toFixed, yValue, [2], JAM.policy.p12);
    var v287 = v499 + v500;
    return v287 + "\n\n"
  }
  var markString = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
  var codon$$1;
  var perThou$$1;
  var fraction$$1;
  var yValue;
  var aminoAcid$$1;
  sequence$$18 = JAM.call(sequence$$18.replace, sequence$$18, [/u/gi, "t"], JAM.policy.p12);
  sequence$$18 = JAM.call(sequence$$18.replace, sequence$$18, [/(...)/g, v2], JAM.policy.p12);
  var v288 = outputWindow.document;
  var v289 = sequence$$18 + "\n";
  JAM.call(v288.write, v288, [v289], JAM.policy.p13);
  return true
}
function makeCodonTable(gcgTable) {
  gcgTable = JAM.call(gcgTable.replace, gcgTable, [/[^\.]*\.\./, ""], JAM.policy.p12);
  var tableArray = JAM.call(gcgTable.split, gcgTable, [/[\f\n\r]/], JAM.policy.p12);
  var re$$3 = /(\w+)\s+(\w+)\s+(\S+)\s+(\S+)\s+(\S+)/g;
  var matchArray$$2;
  var codonTable$$3 = new CodonTable;
  var i$$11 = 0;
  var v501 = tableArray.length;
  var v299 = i$$11 < v501;
  for(;v299;) {
    var v502 = tableArray[i$$11];
    var v298 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [v502], JAM.policy.p13);
    for(;v298;) {
      try {
        var v503 = codonTable$$3;
        var v603 = matchArray$$2[2];
        var v504 = JAM.call(v603.toLowerCase, v603, [], JAM.policy.p12);
        var v290 = v503[v504];
        var v291 = matchArray$$2[1];
        var v505 = matchArray$$2[3];
        var v292 = parseFloat(v505);
        var v506 = matchArray$$2[4];
        var v293 = parseFloat(v506);
        var v507 = matchArray$$2[5];
        var v294 = parseFloat(v507);
        JAM.call(v290.fillCodon, v290, [v291, v292, v293, v294], JAM.policy.p13);
        var v295 = codonTable$$3.codons;
        var v508 = matchArray$$2[2];
        var v296 = JAM.call(v508.toLowerCase, v508, [], JAM.policy.p12);
        JAM.call(v295.push, v295, [v296], JAM.policy.p13)
      }catch(e$$6) {
        var v782 = matchArray$$2[1];
        var v770 = "There is a problem with a line of the codon table: " + v782;
        var v756 = v770 + " ";
        var v757 = matchArray$$2[2];
        var v741 = v756 + v757;
        var v724 = v741 + " ";
        var v725 = matchArray$$2[3];
        var v705 = v724 + v725;
        var v667 = v705 + " ";
        var v668 = matchArray$$2[4];
        var v604 = v667 + v668;
        var v509 = v604 + " ";
        var v510 = matchArray$$2[5];
        var v297 = v509 + v510;
        alert(v297);
        return false
      }
      var v511 = tableArray[i$$11];
      v298 = matchArray$$2 = JAM.call(re$$3.exec, re$$3, [v511], JAM.policy.p13)
    }
    i$$11 = i$$11 + 1;
    var v512 = tableArray.length;
    v299 = i$$11 < v512
  }
  JAM.call(codonTable$$3.fixFraction, codonTable$$3, [], JAM.policy.p12);
  return codonTable$$3
}
function CodonTable() {
  var v821 = new Array;
  this.codons = v821;
  var v822 = new Codon;
  this.ggg = v822;
  var v823 = new Codon;
  this.gga = v823;
  var v824 = new Codon;
  this.ggt = v824;
  var v825 = new Codon;
  this.ggc = v825;
  var v826 = new Codon;
  this.gag = v826;
  var v827 = new Codon;
  this.gaa = v827;
  var v828 = new Codon;
  this.gat = v828;
  var v829 = new Codon;
  this.gac = v829;
  var v830 = new Codon;
  this.gtg = v830;
  var v831 = new Codon;
  this.gta = v831;
  var v832 = new Codon;
  this.gtt = v832;
  var v833 = new Codon;
  this.gtc = v833;
  var v834 = new Codon;
  this.gcg = v834;
  var v835 = new Codon;
  this.gca = v835;
  var v836 = new Codon;
  this.gct = v836;
  var v837 = new Codon;
  this.gcc = v837;
  var v838 = new Codon;
  this.agg = v838;
  var v839 = new Codon;
  this.aga = v839;
  var v840 = new Codon;
  this.agt = v840;
  var v841 = new Codon;
  this.agc = v841;
  var v842 = new Codon;
  this.aag = v842;
  var v843 = new Codon;
  this.aaa = v843;
  var v844 = new Codon;
  this.aat = v844;
  var v845 = new Codon;
  this.aac = v845;
  var v846 = new Codon;
  this.atg = v846;
  var v847 = new Codon;
  this.ata = v847;
  var v848 = new Codon;
  this.att = v848;
  var v849 = new Codon;
  this.atc = v849;
  var v850 = new Codon;
  this.acg = v850;
  var v851 = new Codon;
  this.aca = v851;
  var v852 = new Codon;
  this.act = v852;
  var v853 = new Codon;
  this.acc = v853;
  var v854 = new Codon;
  this.tgg = v854;
  var v855 = new Codon;
  this.tga = v855;
  var v856 = new Codon;
  this.tgt = v856;
  var v857 = new Codon;
  this.tgc = v857;
  var v858 = new Codon;
  this.tag = v858;
  var v859 = new Codon;
  this.taa = v859;
  var v860 = new Codon;
  this.tat = v860;
  var v861 = new Codon;
  this.tac = v861;
  var v862 = new Codon;
  this.ttg = v862;
  var v863 = new Codon;
  this.tta = v863;
  var v864 = new Codon;
  this.ttt = v864;
  var v865 = new Codon;
  this.ttc = v865;
  var v866 = new Codon;
  this.tcg = v866;
  var v867 = new Codon;
  this.tca = v867;
  var v868 = new Codon;
  this.tct = v868;
  var v869 = new Codon;
  this.tcc = v869;
  var v870 = new Codon;
  this.cgg = v870;
  var v871 = new Codon;
  this.cga = v871;
  var v872 = new Codon;
  this.cgt = v872;
  var v873 = new Codon;
  this.cgc = v873;
  var v874 = new Codon;
  this.cag = v874;
  var v875 = new Codon;
  this.caa = v875;
  var v876 = new Codon;
  this.cat = v876;
  var v877 = new Codon;
  this.cac = v877;
  var v878 = new Codon;
  this.ctg = v878;
  var v879 = new Codon;
  this.cta = v879;
  var v880 = new Codon;
  this.ctt = v880;
  var v881 = new Codon;
  this.ctc = v881;
  var v882 = new Codon;
  this.ccg = v882;
  var v883 = new Codon;
  this.cca = v883;
  var v884 = new Codon;
  this.cct = v884;
  var v885 = new Codon;
  this.ccc = v885;
  return
}
function fixFraction() {
  var i$$12 = 0;
  var v605 = this.codons;
  var v513 = v605.length;
  var v306 = i$$12 < v513;
  for(;v306;) {
    var v300 = this.codons;
    var outerCodon = v300[i$$12];
    var perThouTotal = 0;
    var j$$10 = 0;
    var v606 = this.codons;
    var v514 = v606.length;
    var v304 = j$$10 < v514;
    for(;v304;) {
      var v301 = this.codons;
      var innerCodon = v301[j$$10];
      var v607 = this[outerCodon];
      var v515 = v607.aminoAcid;
      var v608 = this[innerCodon];
      var v516 = v608.aminoAcid;
      var v303 = v515 == v516;
      if(v303) {
        var v517 = this[innerCodon];
        var v302 = v517.perThou;
        perThouTotal = perThouTotal + v302
      }
      j$$10 = j$$10 + 1;
      var v609 = this.codons;
      var v518 = v609.length;
      v304 = j$$10 < v518
    }
    var v305 = this[outerCodon];
    var v610 = this[outerCodon];
    var v519 = v610.perThou;
    v305.fraction = v519 / perThouTotal;
    i$$12 = i$$12 + 1;
    var v611 = this.codons;
    var v520 = v611.length;
    v306 = i$$12 < v520
  }
  return true
}
new CodonTable;
var v307 = CodonTable.prototype;
v307.fixFraction = fixFraction;
new Codon;
var v308 = Codon.prototype;
v308.fillCodon = fillCodon;
JAM.set(document, "onload", v3);
var v309 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p12);
JAM.set(v309, "onclick", v4);
var v310 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p12);
JAM.set(v310, "onclick", v5);
