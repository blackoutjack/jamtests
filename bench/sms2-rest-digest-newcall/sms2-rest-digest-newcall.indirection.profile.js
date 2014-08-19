
JAM.startProfile('load');
function v4() {
  var v742 = document.forms;
  var v617 = v742[0];
  var v361 = v617.elements;
  var v5 = v361[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    restDigest(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v362 = document.main_form;
  var v7 = v362.main_submit;
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
  var v363 = arrayOfSequences.length;
  var v9 = v363 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v364 = arrayOfTitles.length;
  var v11 = i$$1 < v364;
  for(;v11;) {
    var v743 = arrayOfTitles[i$$1];
    var v618 = JAM.call(v743.search, v743, [/\S/], JAM.policy.p13);
    var v365 = v618 == -1;
    var v620 = !v365;
    if(v620) {
      var v814 = arrayOfSequences[i$$1];
      var v744 = JAM.call(v814.search, v814, [/\S/], JAM.policy.p13);
      var v619 = v744 == -1;
      var v746 = !v619;
      if(v746) {
        var v815 = arrayOfSequences[i$$1];
        var v745 = v815.length;
        v619 = v745 != lengthOfAlign
      }
      v365 = v619
    }
    var v10 = v365;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v366 = arrayOfTitles.length;
    v11 = i$$1 < v366
  }
  return true
}
function checkCodonTable(codonTable) {
  var v621 = JAM.call(codonTable.search, codonTable, [/AmAcid/], JAM.policy.p13);
  var v367 = v621 == -1;
  var v623 = !v367;
  if(v623) {
    var v747 = JAM.call(codonTable.search, codonTable, [/Codon/], JAM.policy.p13);
    var v622 = v747 == -1;
    var v749 = !v622;
    if(v749) {
      var v816 = JAM.call(codonTable.search, codonTable, [/Number/], JAM.policy.p13);
      var v748 = v816 == -1;
      var v818 = !v748;
      if(v818) {
        var v867 = JAM.call(codonTable.search, codonTable, [/\/1000/], JAM.policy.p13);
        var v817 = v867 == -1;
        var v869 = !v817;
        if(v869) {
          var v868 = JAM.call(codonTable.search, codonTable, [/Fraction\s*\.\./], JAM.policy.p13);
          v817 = v868 == -1
        }
        v748 = v817
      }
      v622 = v748
    }
    v367 = v622
  }
  var v12 = v367;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v624 = formElement.value;
  var v368 = JAM.call(v624.search, v624, [/\S/], JAM.policy.p13);
  var v13 = v368 == -1;
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
  var v369 = arrayOfPatterns.length;
  var v16 = z$$2 < v369;
  for(;v16;) {
    var v625 = arrayOfPatterns[z$$2];
    var v370 = JAM.call(v625.search, v625, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/], JAM.policy.p13);
    var v14 = v370 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    var v626 = arrayOfPatterns[z$$2];
    var v371 = moreExpressionCheck(v626);
    var v15 = v371 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v372 = arrayOfPatterns.length;
    v16 = z$$2 < v372
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v373 = arrayOfPatterns.length;
  var v25 = j < v373;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    var v750 = arrayOfPatterns[j];
    var v627 = JAM.call(v750.match, v750, [/\/.+\//], JAM.policy.p13);
    var v374 = v627 + "gi";
    if(JAM.isEval(eval)) {
      var v992 = eval("introspect(JAM.policy.pFull) { " + v374 + " }")
    }else {
      var v992 = JAM.call(eval, null, [v374])
    }
    v19[v20] = v992;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    var v628 = arrayOfPatterns[j];
    var v375 = JAM.call(v628.match, v628, [/=[a-zA-Z\*]/], JAM.policy.p13);
    var v993 = JAM.call(v375.toString, v375, [], JAM.policy.p13);
    v21[v22] = v993;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    var v376 = geneticCodeMatchResult[j];
    var v994 = JAM.call(v376.replace, v376, [/=/g, ""], JAM.policy.p13);
    v23[v24] = v994;
    j = j + 1;
    var v377 = arrayOfPatterns.length;
    v25 = j < v377
  }
  var i$$2 = 0;
  var v629 = testSequence.length;
  var v378 = v629 - 3;
  var v32 = i$$2 <= v378;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = JAM.call(testSequence.substring, testSequence, [i$$2, v26], JAM.policy.p13);
    j = 0;
    var v379 = geneticCodeMatchExp.length;
    var v30 = j < v379;
    for(;v30;) {
      var v630 = geneticCodeMatchExp[j];
      var v380 = JAM.call(codon.search, codon, [v630], JAM.policy.p23);
      var v29 = v380 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v381 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v381 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v382 = geneticCodeMatchExp.length;
      v30 = j < v382
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v631 = testSequence.length;
    var v383 = v631 - 3;
    v32 = i$$2 <= v383
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v384 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v384;
  for(;v34;) {
    var v632 = arrayOfPatterns$$1[z$$3];
    var v385 = JAM.call(v632.search, v632, [/[^acdefghiklmnpqrstvwyz]/i], JAM.policy.p13);
    var v33 = v385 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v386 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v386
  }
  var i$$3 = 0;
  var v387 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v387;
  for(;v38;) {
    var v633 = arrayOfPatterns$$1[i$$3];
    var v388 = "[" + v633;
    var v35 = v388 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v389 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v389;
    for(;v37;) {
      var v634 = arrayOfPatterns$$1[j$$1];
      var v390 = JAM.call(v634.search, v634, [re], JAM.policy.p23);
      var v36 = v390 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v391 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v391
    }
    i$$3 = i$$3 + 1;
    var v392 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v392
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v393 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v393;
  for(;v41;) {
    var v635 = arrayOfPatterns$$2[z$$4];
    var v394 = JAM.call(v635.search, v635, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i], JAM.policy.p13);
    var v39 = v394 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    var v636 = arrayOfPatterns$$2[z$$4];
    var v395 = moreExpressionCheck(v636);
    var v40 = v395 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v396 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v396
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v751 = getSequenceFromFasta(text$$7);
  var v637 = JAM.call(v751.replace, v751, [/[^A-Za-z]/g, ""], JAM.policy.p13);
  var v397 = v637.length;
  var v43 = v397 > maxInput;
  if(v43) {
    var v398 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v398 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v399 = text$$8.length;
  var v45 = v399 > maxInput$$1;
  if(v45) {
    var v400 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v400 + " characters.";
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
  var v401 = alignArray.length;
  var v52 = v401 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v402 = alignArray.length;
  var v54 = i$$4 < v402;
  for(;v54;) {
    var v638 = alignArray[i$$4];
    var v403 = JAM.call(v638.search, v638, [/[^\s]+\s/], JAM.policy.p13);
    var v53 = v403 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v404 = alignArray.length;
    v54 = i$$4 < v404
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
  var v405 = JAM.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v57 = v405 != -1;
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
  var v406 = sequence$$2.length;
  var v58 = "&gt;results for " + v406;
  var stringToReturn = v58 + " residue sequence ";
  var v407 = JAM.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/], JAM.policy.p13);
  var v60 = v407 != -1;
  if(v60) {
    var v408 = stringToReturn + '"';
    var v59 = v408 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v409 = stringToReturn + ' starting "';
  var v410 = JAM.call(sequence$$2.substring, sequence$$2, [0, 10], JAM.policy.p13);
  var v61 = v409 + v410;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v411 = sequenceOne.length;
  var v62 = "Search results for " + v411;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v412 = JAM.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/], JAM.policy.p13);
  var v64 = v412 != -1;
  if(v64) {
    var v413 = stringToReturn$$1 + '"';
    var v63 = v413 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v414 = stringToReturn$$1 + ' starting "';
  var v415 = JAM.call(sequenceOne.substring, sequenceOne, [0, 10], JAM.policy.p13);
  var v65 = v414 + v415;
  stringToReturn$$1 = v65 + '"\n';
  var v416 = stringToReturn$$1 + "and ";
  var v417 = sequenceTwo.length;
  var v66 = v416 + v417;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v418 = JAM.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/], JAM.policy.p13);
  var v68 = v418 != -1;
  if(v68) {
    var v419 = stringToReturn$$1 + '"';
    var v67 = v419 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v420 = stringToReturn$$1 + ' starting "';
  var v421 = JAM.call(sequenceTwo.substring, sequenceTwo, [0, 10], JAM.policy.p13);
  var v69 = v420 + v421;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v422 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v422;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    var v752 = arrayOfPatterns$$3[j$$2];
    var v639 = JAM.call(v752.match, v752, [/\/.+\//], JAM.policy.p13);
    var v423 = v639 + "gi";
    if(JAM.isEval(eval)) {
      var v995 = eval("introspect(JAM.policy.pFull) { " + v423 + " }")
    }else {
      var v995 = JAM.call(eval, null, [v423])
    }
    v72[v73] = v995;
    j$$2 = j$$2 + 1;
    var v424 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v424
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v425 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v425;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    var v640 = arrayOfPatterns$$4[j$$3];
    var v426 = JAM.call(v640.match, v640, [/=[a-zA-Z\*]/], JAM.policy.p13);
    var v996 = JAM.call(v426.toString, v426, [], JAM.policy.p13);
    v76[v77] = v996;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    var v427 = geneticCodeMatchResult$$1[j$$3];
    var v997 = JAM.call(v427.replace, v427, [/=/g, ""], JAM.policy.p13);
    v78[v79] = v997;
    j$$3 = j$$3 + 1;
    var v428 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v428
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v429 = sequence$$3.length;
  var v81 = "Results for " + v429;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v430 = JAM.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/], JAM.policy.p13);
  var v83 = v430 != -1;
  if(v83) {
    var v431 = stringToReturn$$2 + '"';
    var v82 = v431 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v432 = stringToReturn$$2 + ' starting "';
  var v433 = JAM.call(sequence$$3.substring, sequence$$3, [0, 10], JAM.policy.p13);
  var v84 = v432 + v433;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v641 = "Results for " + topology;
  var v434 = v641 + " ";
  var v435 = sequence$$4.length;
  var v86 = v434 + v435;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v436 = JAM.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/], JAM.policy.p13);
  var v88 = v436 != -1;
  if(v88) {
    var v437 = stringToReturn$$3 + '"';
    var v87 = v437 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v438 = stringToReturn$$3 + ' starting "';
  var v439 = JAM.call(sequence$$4.substring, sequence$$4, [0, 10], JAM.policy.p13);
  var v89 = v438 + v439;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v440 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v440;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v441 = JAM.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/], JAM.policy.p13);
  var v93 = v441 != -1;
  if(v93) {
    var v442 = stringToReturn$$4 + '"';
    var v92 = v442 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v443 = stringToReturn$$4 + ' starting "';
  var v444 = JAM.call(sequenceOne$$1.substring, sequenceOne$$1, [0, 10], JAM.policy.p13);
  var v94 = v443 + v444;
  stringToReturn$$4 = v94 + '"\n';
  var v445 = stringToReturn$$4 + "and ";
  var v446 = sequenceTwo$$1.length;
  var v95 = v445 + v446;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v447 = JAM.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/], JAM.policy.p13);
  var v97 = v447 != -1;
  if(v97) {
    var v448 = stringToReturn$$4 + '"';
    var v96 = v448 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v449 = stringToReturn$$4 + ' starting "';
  var v450 = JAM.call(sequenceTwo$$1.substring, sequenceTwo$$1, [0, 10], JAM.policy.p13);
  var v98 = v449 + v450;
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
    var v451 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v452 = components.length;
    var v100 = v451 * v452;
    tempNum = JAM.call(Math.floor, Math, [v100], JAM.policy.p13);
    tempChar = components[tempNum];
    JAM.call(sequenceArray.push, sequenceArray, [tempChar], JAM.policy.p23);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return JAM.call(sequenceArray.join, sequenceArray, [""], JAM.policy.p14)
}
function getSequenceFromFasta(sequenceRecord) {
  var v453 = JAM.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v102 = v453 != -1;
  if(v102) {
    sequenceRecord = JAM.call(sequenceRecord.replace, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/, ""], JAM.policy.p13)
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v454 = JAM.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/], JAM.policy.p13);
  var v104 = v454 != -1;
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
  var v642 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/], JAM.policy.p13);
  var v455 = v642 != -1;
  var v644 = !v455;
  if(v644) {
    var v753 = JAM.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/], JAM.policy.p13);
    var v643 = v753 != -1;
    var v755 = !v643;
    if(v755) {
      var v819 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[\]/], JAM.policy.p13);
      var v754 = v819 != -1;
      var v821 = !v754;
      if(v821) {
        var v870 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/], JAM.policy.p13);
        var v820 = v870 != -1;
        var v872 = !v820;
        if(v872) {
          var v897 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//], JAM.policy.p13);
          var v871 = v897 != -1;
          var v899 = !v871;
          if(v899) {
            var v922 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\|/], JAM.policy.p13);
            var v898 = v922 != -1;
            var v924 = !v898;
            if(v924) {
              var v935 = JAM.call(expressionToCheck.search, expressionToCheck, [/\/\|/], JAM.policy.p13);
              var v923 = v935 != -1;
              var v937 = !v923;
              if(v937) {
                var v946 = JAM.call(expressionToCheck.search, expressionToCheck, [/\|\//], JAM.policy.p13);
                var v936 = v946 != -1;
                var v948 = !v936;
                if(v948) {
                  var v956 = JAM.call(expressionToCheck.search, expressionToCheck, [/\[.\]/], JAM.policy.p13);
                  var v947 = v956 != -1;
                  var v958 = !v947;
                  if(v958) {
                    var v965 = JAM.call(expressionToCheck.search, expressionToCheck, [/\</], JAM.policy.p13);
                    var v957 = v965 != -1;
                    var v967 = !v957;
                    if(v967) {
                      var v966 = JAM.call(expressionToCheck.search, expressionToCheck, [/\>/], JAM.policy.p13);
                      v957 = v966 != -1
                    }
                    v947 = v957
                  }
                  v936 = v947
                }
                v923 = v936
              }
              v898 = v923
            }
            v871 = v898
          }
          v820 = v871
        }
        v754 = v820
      }
      v643 = v754
    }
    v455 = v643
  }
  var v105 = v455;
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
  var v756 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v645 = v756 + "<head>\n";
  var v456 = v645 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v456 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v110.write, v110, [v111], JAM.policy.p23);
  if(isColor) {
    var v112 = outputWindow.document;
    var v983 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v978 = v983 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v973 = v978 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v968 = v973 + "div.info {font-weight: bold}\n";
    var v959 = v968 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v949 = v959 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v938 = v949 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v925 = v938 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v900 = v925 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v873 = v900 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v822 = v873 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v757 = v822 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v646 = v757 + "td.many {color: #000000}\n";
    var v457 = v646 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v457 + "</style>\n";
    JAM.call(v112.write, v112, [v113], JAM.policy.p23)
  }else {
    var v114 = outputWindow.document;
    var v988 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v984 = v988 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v979 = v984 + "div.title {display: none}\n";
    var v974 = v979 + "div.info {font-weight: bold}\n";
    var v969 = v974 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v960 = v969 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v950 = v960 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v939 = v950 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v926 = v939 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v901 = v926 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v874 = v901 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v823 = v874 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v758 = v823 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v647 = v758 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v458 = v647 + "img {display: none}\n";
    var v115 = v458 + "</style>\n";
    JAM.call(v114.write, v114, [v115], JAM.policy.p23)
  }
  var v116 = outputWindow.document;
  var v759 = "</head>\n" + '<body class="main">\n';
  var v648 = v759 + '<div class="title">';
  var v459 = v648 + title$$7;
  var v117 = v459 + " results</div>\n";
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
  var v760 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v649 = v760 + "<head>\n";
  var v460 = v649 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v460 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAM.call(v118.write, v118, [v119], JAM.policy.p23);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v985 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v980 = v985 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v975 = v980 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v970 = v975 + "div.info {font-weight: bold}\n";
    var v961 = v970 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v951 = v961 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v940 = v951 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v927 = v940 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v902 = v927 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v875 = v902 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v824 = v875 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v761 = v824 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v650 = v761 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v461 = v650 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v461 + "</style>\n";
    JAM.call(v120.write, v120, [v121], JAM.policy.p23)
  }else {
    var v122 = outputWindow.document;
    var v991 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v989 = v991 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v986 = v989 + "div.title {display: none}\n";
    var v981 = v986 + "div.info {font-weight: bold}\n";
    var v976 = v981 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v971 = v976 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v962 = v971 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v952 = v962 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v941 = v952 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v928 = v941 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v903 = v928 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v876 = v903 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v825 = v876 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v762 = v825 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v651 = v762 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v462 = v651 + "img {display: none}\n";
    var v123 = v462 + "</style>\n";
    JAM.call(v122.write, v122, [v123], JAM.policy.p23)
  }
  var v124 = outputWindow.document;
  var v763 = "</head>\n" + '<body class="main">\n';
  var v652 = v763 + '<div class="title">';
  var v463 = v652 + title$$9;
  var v125 = v463 + " results</div>\n";
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
  var v464 = JAM.call(dnaSequence$$1.search, dnaSequence$$1, [/./], JAM.policy.p13);
  var v126 = v464 != -1;
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
  var v465 = testArray[0];
  var v130 = v465 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v466 = JAM.call(testString.search, testString, [re$$2], JAM.policy.p23);
  var v131 = v466 == -1;
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
  var v467 = JAM.call(testNum.toFixed, testNum, [3], JAM.policy.p13);
  var v134 = v467 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v468 = JAM.call(testNum.toPrecision, testNum, [5], JAM.policy.p13);
  var v135 = v468 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v469 = JAM.call(theNumber$$1.search, theNumber$$1, [/\d/], JAM.policy.p13);
  var v136 = v469 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v653 = JAM.call(emblFile.search, emblFile, [/ID/], JAM.policy.p13);
  var v470 = v653 == -1;
  var v655 = !v470;
  if(v655) {
    var v764 = JAM.call(emblFile.search, emblFile, [/AC/], JAM.policy.p13);
    var v654 = v764 == -1;
    var v766 = !v654;
    if(v766) {
      var v826 = JAM.call(emblFile.search, emblFile, [/DE/], JAM.policy.p13);
      var v765 = v826 == -1;
      var v828 = !v765;
      if(v828) {
        var v827 = JAM.call(emblFile.search, emblFile, [/SQ/], JAM.policy.p13);
        v765 = v827 == -1
      }
      v654 = v765
    }
    v470 = v654
  }
  var v137 = v470;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v471 = JAM.call(theNumber$$2.search, theNumber$$2, [/\d/], JAM.policy.p13);
  var v138 = v471 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v472 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v472 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v473 = JAM.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i], JAM.policy.p13);
  var v141 = v473 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v474 = JAM.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i], JAM.policy.p13);
  var v142 = v474 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v656 = JAM.call(genBankFile.search, genBankFile, [/LOCUS/], JAM.policy.p13);
  var v475 = v656 == -1;
  var v658 = !v475;
  if(v658) {
    var v767 = JAM.call(genBankFile.search, genBankFile, [/DEFINITION/], JAM.policy.p13);
    var v657 = v767 == -1;
    var v769 = !v657;
    if(v769) {
      var v829 = JAM.call(genBankFile.search, genBankFile, [/ACCESSION/], JAM.policy.p13);
      var v768 = v829 == -1;
      var v831 = !v768;
      if(v831) {
        var v830 = JAM.call(genBankFile.search, genBankFile, [/ORIGIN/], JAM.policy.p13);
        v768 = v830 == -1
      }
      v657 = v768
    }
    v475 = v657
  }
  var v143 = v475;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v659 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/], JAM.policy.p13);
  var v476 = v659 == -1;
  var v661 = !v476;
  if(v661) {
    var v770 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/], JAM.policy.p13);
    var v660 = v770 == -1;
    var v772 = !v660;
    if(v772) {
      var v832 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/], JAM.policy.p13);
      var v771 = v832 == -1;
      var v834 = !v771;
      if(v834) {
        var v833 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/], JAM.policy.p13);
        v771 = v833 == -1
      }
      v660 = v771
    }
    v476 = v660
  }
  var v144 = v476;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v477 = JAM.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/], JAM.policy.p13);
  var v145 = v477 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v662 = JAM.call(emblFile$$1.search, emblFile$$1, [/ID/], JAM.policy.p13);
  var v478 = v662 == -1;
  var v664 = !v478;
  if(v664) {
    var v773 = JAM.call(emblFile$$1.search, emblFile$$1, [/AC/], JAM.policy.p13);
    var v663 = v773 == -1;
    var v775 = !v663;
    if(v775) {
      var v835 = JAM.call(emblFile$$1.search, emblFile$$1, [/DE/], JAM.policy.p13);
      var v774 = v835 == -1;
      var v837 = !v774;
      if(v837) {
        var v836 = JAM.call(emblFile$$1.search, emblFile$$1, [/SQ/], JAM.policy.p13);
        v774 = v836 == -1
      }
      v663 = v774
    }
    v478 = v663
  }
  var v146 = v478;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v479 = JAM.call(emblFile$$1.search, emblFile$$1, [/^FT/m], JAM.policy.p13);
  var v147 = v479 == -1;
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
    var v480 = basePerLine / groupSize;
    var v152 = j$$6 <= v480;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v149 = lineOfText;
        var v481 = k + i$$5;
        var v150 = JAM.call(text$$10.charAt, text$$10, [v481], JAM.policy.p23);
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v482 = basePerLine / groupSize;
      v152 = j$$6 <= v482
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
    var v483 = adjustment < 0;
    if(v483) {
      v483 = adjusted >= 0
    }
    var v156 = v483;
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
    var v484 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v484;
    for(;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for(;v160;) {
        var v485 = i$$6 + k$$1;
        var v157 = v485 >= stopBase$$2;
        if(v157) {
          break
        }
        var v158 = lineOfText$$1;
        var v486 = k$$1 + i$$6;
        var v159 = JAM.call(text$$12.charAt, text$$12, [v486], JAM.policy.p23);
        lineOfText$$1 = v158 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if(v163) {
        var v161 = aboveNum;
        var v487 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v487, "", groupSize$$2, tabIn$$3);
        aboveNum = v161 + v162
      }
      var v164 = i$$6 >= stopBase$$2;
      if(v164) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v488 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v488
    }
    var v188 = numberPosition$$1 == "left";
    if(v188) {
      var v166 = outputWindow.document;
      var v776 = adjustNumbering(lineNum, numberingAdjustment);
      var v665 = rightNum(v776, "", 8, tabIn$$3);
      var v489 = v665 + lineOfText$$1;
      var v167 = v489 + "\n";
      JAM.call(v166.write, v166, [v167], JAM.policy.p23);
      var v171 = strands$$1 == "two";
      if(v171) {
        var v168 = outputWindow.document;
        var v777 = adjustNumbering(lineNum, numberingAdjustment);
        var v666 = rightNum(v777, "", 8, tabIn$$3);
        var v667 = complement(lineOfText$$1);
        var v490 = v666 + v667;
        var v169 = v490 + "\n";
        JAM.call(v168.write, v168, [v169], JAM.policy.p23);
        var v170 = outputWindow.document;
        JAM.call(v170.write, v170, ["\n"], JAM.policy.p14)
      }
    }else {
      var v187 = numberPosition$$1 == "right";
      if(v187) {
        var v172 = outputWindow.document;
        var v668 = lineOfText$$1;
        var v669 = adjustNumbering(i$$6, numberingAdjustment);
        var v491 = v668 + v669;
        var v173 = v491 + "\n";
        JAM.call(v172.write, v172, [v173], JAM.policy.p23);
        var v177 = strands$$1 == "two";
        if(v177) {
          var v174 = outputWindow.document;
          var v670 = complement(lineOfText$$1);
          var v671 = adjustNumbering(i$$6, numberingAdjustment);
          var v492 = v670 + v671;
          var v175 = v492 + "\n";
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
            var v493 = complement(lineOfText$$1);
            var v183 = v493 + "\n";
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
    var v494 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v494;
    for(;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for(;v193;) {
        var v495 = i$$7 + k$$2;
        var v190 = v495 >= stopBase$$3;
        if(v190) {
          break
        }
        var v191 = lineOfText$$2;
        var v496 = k$$2 + i$$7;
        var v192 = JAM.call(text$$13.charAt, text$$13, [v496], JAM.policy.p23);
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
      var v497 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v497
    }
    var v209 = numberPosition$$2 == "left";
    if(v209) {
      var v199 = outputWindow.document;
      var v672 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v498 = v672 + lineOfText$$2;
      var v200 = v498 + "\n";
      JAM.call(v199.write, v199, [v200], JAM.policy.p23)
    }else {
      var v208 = numberPosition$$2 == "right";
      if(v208) {
        var v201 = outputWindow.document;
        var v499 = lineOfText$$2 + i$$7;
        var v202 = v499 + "\n";
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
  var v673 = sequence$$13.length;
  var v500 = v673 <= firstIndexToMutate;
  var v675 = !v500;
  if(v675) {
    var v674 = lastIndexToMutate < 0;
    var v778 = !v674;
    if(v778) {
      v674 = lastIndexToMutate <= firstIndexToMutate
    }
    v500 = v674
  }
  var v211 = v500;
  if(v211) {
    numMut = 0
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for(;v219;) {
    maxNum = sequence$$13.length;
    var v501 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v212 = v501 * maxNum;
    randNum = JAM.call(Math.floor, Math, [v212], JAM.policy.p13);
    var v502 = randNum < firstIndexToMutate;
    var v676 = !v502;
    if(v676) {
      v502 = randNum > lastIndexToMutate
    }
    var v213 = v502;
    if(v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue
    }
    currentChar = JAM.call(sequence$$13.charAt, sequence$$13, [randNum], JAM.policy.p13);
    needNewChar = true;
    for(;needNewChar;) {
      var v503 = JAM.call(Math.random, Math, [], JAM.policy.p13);
      var v504 = components$$1.length;
      var v214 = v503 * v504;
      componentsIndex = JAM.call(Math.round, Math, [v214], JAM.policy.p13);
      var v505 = components$$1.length;
      var v215 = componentsIndex == v505;
      if(v215) {
        componentsIndex = 0
      }
      var v506 = components$$1[componentsIndex];
      var v216 = v506 != currentChar;
      if(v216) {
        needNewChar = false
      }
    }
    var v507 = JAM.call(sequence$$13.substring, sequence$$13, [0, randNum], JAM.policy.p13);
    var v508 = components$$1[componentsIndex];
    var v217 = v507 + v508;
    var v509 = randNum + 1;
    var v510 = sequence$$13.length;
    var v218 = JAM.call(sequence$$13.substring, sequence$$13, [v509, v510], JAM.policy.p24);
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
    var v511 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v512 = components$$2.length;
    var v222 = v511 * v512;
    tempNum$$1 = JAM.call(Math.floor, Math, [v222], JAM.policy.p13);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v513 = sequence$$14.length;
    var v225 = v513 == 60;
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
    var v779 = sequence$$15.length;
    var v677 = v779 - lookAhead;
    var v678 = sequence$$15.length;
    var v514 = JAM.call(sequence$$15.substring, sequence$$15, [v677, v678], JAM.policy.p24);
    var v230 = v514 + sequence$$15;
    var v231 = JAM.call(sequence$$15.substring, sequence$$15, [0, lookAhead], JAM.policy.p13);
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v233 = outputWindow.document;
  JAM.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n'], JAM.policy.p14);
  var v234 = outputWindow.document;
  var v780 = '<tr><td class="title" width="200px">' + "Site:";
  var v679 = v780 + '</td><td class="title">';
  var v515 = v679 + "Positions:";
  var v235 = v515 + "</td></tr>\n";
  JAM.call(v234.write, v234, [v235], JAM.policy.p23);
  var i$$9 = 0;
  var v516 = arrayOfItems.length;
  var v251 = i$$9 < v516;
  for(;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    var v517 = arrayOfItems[i$$9];
    var v236 = JAM.call(v517.match, v517, [/\/.+\//], JAM.policy.p13);
    matchExp = v236 + "gi";
    matchPosition = 0;
    if(JAM.isEval(eval)) {
      matchExp = eval("introspect(JAM.policy.pFull) { " + matchExp + " }")
    }else {
      matchExp = JAM.call(eval, null, [matchExp])
    }
    var v781 = arrayOfItems[i$$9];
    var v680 = JAM.call(v781.match, v781, [/\)\D*\d+/], JAM.policy.p13);
    var v518 = JAM.call(v680.toString, v680, [], JAM.policy.p13);
    var v237 = JAM.call(v518.replace, v518, [/\)\D*/, ""], JAM.policy.p13);
    cutDistance = parseFloat(v237);
    var v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p23);
    for(;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v519 = matchPosition >= lowerLimit;
      if(v519) {
        v519 = matchPosition < upperLimit
      }
      var v241 = v519;
      if(v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v520 = matchPosition - shiftValue;
        var v240 = v520 + 1;
        tempString$$1 = v239 + v240
      }
      var v521 = matchExp.lastIndex;
      var v681 = RegExp.lastMatch;
      var v522 = v681.length;
      var v242 = v521 - v522;
      matchExp.lastIndex = v242 + 1;
      v243 = matchArray$$1 = JAM.call(matchExp.exec, matchExp, [sequence$$15], JAM.policy.p23)
    }
    var v523 = JAM.call(tempString$$1.search, tempString$$1, [/\d/], JAM.policy.p13);
    var v244 = v523 != -1;
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
    var v929 = '<tr><td class="' + backGroundClass;
    var v904 = v929 + '">';
    var v953 = arrayOfItems[i$$9];
    var v942 = JAM.call(v953.match, v953, [/\([^\(]+\)/], JAM.policy.p13);
    var v930 = JAM.call(v942.toString, v942, [], JAM.policy.p13);
    var v905 = JAM.call(v930.replace, v930, [/\(|\)/g, ""], JAM.policy.p13);
    var v877 = v904 + v905;
    var v838 = v877 + '</td><td class="';
    var v782 = v838 + backGroundClass;
    var v682 = v782 + '">';
    var v524 = v682 + tempString$$1;
    var v250 = v524 + "</td></tr>\n";
    JAM.call(v249.write, v249, [v250], JAM.policy.p23);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v525 = arrayOfItems.length;
    v251 = i$$9 < v525
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
  var v878 = '<tr><td class="title">' + "Pattern:";
  var v839 = v878 + '</td><td class="title">';
  var v783 = v839 + "Times found:";
  var v683 = v783 + '</td><td class="title">';
  var v526 = v683 + "Percentage:";
  var v255 = v526 + "</td></tr>\n";
  JAM.call(v254.write, v254, [v255], JAM.policy.p23);
  var i$$10 = 0;
  var v527 = arrayOfItems$$1.length;
  var v264 = i$$10 < v527;
  for(;v264;) {
    var tempNumber = 0;
    var v528 = arrayOfItems$$1[i$$10];
    var v256 = JAM.call(v528.match, v528, [/\/[^\/]+\//], JAM.policy.p13);
    var matchExp$$1 = v256 + "gi";
    if(JAM.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAM.policy.pFull) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAM.call(eval, null, [matchExp$$1])
    }
    var v529 = JAM.call(sequence$$16.search, sequence$$16, [matchExp$$1], JAM.policy.p23);
    var v258 = v529 != -1;
    if(v258) {
      var v257 = JAM.call(sequence$$16.match, sequence$$16, [matchExp$$1], JAM.policy.p23);
      tempNumber = v257.length
    }
    var percentage = 0;
    var v684 = originalLength + 1;
    var v840 = arrayOfItems$$1[i$$10];
    var v784 = JAM.call(v840.match, v840, [/\d+/], JAM.policy.p13);
    var v685 = parseFloat(v784);
    var v530 = v684 - v685;
    var v261 = v530 > 0;
    if(v261) {
      var v259 = 100 * tempNumber;
      var v531 = originalLength + 1;
      var v785 = arrayOfItems$$1[i$$10];
      var v686 = JAM.call(v785.match, v785, [/\d+/], JAM.policy.p13);
      var v532 = parseFloat(v686);
      var v260 = v531 - v532;
      percentage = v259 / v260
    }
    var v262 = outputWindow.document;
    var v954 = arrayOfItems$$1[i$$10];
    var v943 = JAM.call(v954.match, v954, [/\([^\(]+\)\b/], JAM.policy.p13);
    var v931 = JAM.call(v943.toString, v943, [], JAM.policy.p13);
    var v906 = JAM.call(v931.replace, v931, [/\(|\)/g, ""], JAM.policy.p13);
    var v879 = "<tr><td>" + v906;
    var v841 = v879 + "</td><td>";
    var v786 = v841 + tempNumber;
    var v687 = v786 + "</td><td>";
    var v688 = JAM.call(percentage.toFixed, percentage, [2], JAM.policy.p13);
    var v533 = v687 + v688;
    var v263 = v533 + "</td></tr>\n";
    JAM.call(v262.write, v262, [v263], JAM.policy.p23);
    i$$10 = i$$10 + 1;
    var v534 = arrayOfItems$$1.length;
    v264 = i$$10 < v534
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
  var v535 = sequence$$17.length;
  var v272 = v535 > 0;
  for(;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v536 = JAM.call(Math.random, Math, [], JAM.policy.p13);
    var v266 = v536 * maxNum$$1;
    randNum$$1 = JAM.call(Math.floor, Math, [v266], JAM.policy.p13);
    tempChar$$2 = JAM.call(sequence$$17.charAt, sequence$$17, [randNum$$1], JAM.policy.p13);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = JAM.call(sequence$$17.substring, sequence$$17, [0, randNum$$1], JAM.policy.p13);
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    tempString2 = JAM.call(sequence$$17.substring, sequence$$17, [v267, v268], JAM.policy.p13);
    sequence$$17 = tempString1 + tempString2;
    var v537 = tempSeq.length;
    var v271 = v537 == 60;
    if(v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      JAM.call(v269.write, v269, [v270], JAM.policy.p23);
      tempSeq = ""
    }
    var v538 = sequence$$17.length;
    v272 = v538 > 0
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  JAM.call(v273.write, v273, [v274], JAM.policy.p23);
  return true
}
function restDigest(theDocument) {
  JAM.startProfile('compute');

  var newDna = "";
  var maxInput$$3 = 1E5;
  var v539 = testScript();
  var v275 = v539 == false;
  if(v275) {
    return false
  }
  var restrictionFragments = new Array;
  var restrictionFragment;
  var v907 = theDocument.forms;
  var v880 = v907[0];
  var v842 = v880.elements;
  var v787 = v842[0];
  var v689 = checkFormElement(v787);
  var v540 = v689 == false;
  var v691 = !v540;
  if(v691) {
    var v932 = theDocument.forms;
    var v908 = v932[0];
    var v881 = v908.elements;
    var v843 = v881[0];
    var v788 = v843.value;
    var v690 = checkSequenceLength(v788, maxInput$$3);
    v540 = v690 == false
  }
  var v276 = v540;
  if(v276) {
    return false
  }
  var v844 = theDocument.forms;
  var v789 = v844[0];
  var v692 = v789.elements;
  var v541 = v692[0];
  var v277 = v541.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v277);
  var i$$11 = 0;
  var v542 = arrayOfFasta$$1.length;
  var v283 = i$$11 < v542;
  for(;v283;) {
    var v278 = arrayOfFasta$$1[i$$11];
    newDna = getSequenceFromFasta(v278);
    var v279 = arrayOfFasta$$1[i$$11];
    title = getTitleFromFasta(v279);
    newDna = removeNonDna(newDna);
    var v909 = theDocument.forms;
    var v882 = v909[0];
    var v845 = v882.elements;
    var v790 = v845[4];
    var v693 = v790.options;
    var v910 = theDocument.forms;
    var v883 = v910[0];
    var v846 = v883.elements;
    var v791 = v846[4];
    var v694 = v791.selectedIndex;
    var v543 = v693[v694];
    var v280 = v543.value;
    var v281 = newDna.length;
    var v282 = newDna.length;
    restrictionFragment = new RestrictionFragment(v280, title, newDna, 1, v281, "sequence start", "sequence end", v282);
    JAM.call(restrictionFragments.push, restrictionFragments, [restrictionFragment], JAM.policy.p23);
    i$$11 = i$$11 + 1;
    var v544 = arrayOfFasta$$1.length;
    v283 = i$$11 < v544
  }
  var v911 = theDocument.forms;
  var v884 = v911[0];
  var v847 = v884.elements;
  var v792 = v847[5];
  var v695 = v792.options;
  var v912 = theDocument.forms;
  var v885 = v912[0];
  var v848 = v885.elements;
  var v793 = v848[5];
  var v696 = v793.selectedIndex;
  var v545 = v695[v696];
  var v284 = v545.value;
  restrictionFragments = digest(restrictionFragments, v284);
  var v913 = theDocument.forms;
  var v886 = v913[0];
  var v849 = v886.elements;
  var v794 = v849[6];
  var v697 = v794.options;
  var v914 = theDocument.forms;
  var v887 = v914[0];
  var v850 = v887.elements;
  var v795 = v850[6];
  var v698 = v795.selectedIndex;
  var v546 = v697[v698];
  var v285 = v546.value;
  restrictionFragments = digest(restrictionFragments, v285);
  var v915 = theDocument.forms;
  var v888 = v915[0];
  var v851 = v888.elements;
  var v796 = v851[7];
  var v699 = v796.options;
  var v916 = theDocument.forms;
  var v889 = v916[0];
  var v852 = v889.elements;
  var v797 = v852[7];
  var v700 = v797.selectedIndex;
  var v547 = v699[v700];
  var v286 = v547.value;
  restrictionFragments = digest(restrictionFragments, v286);
  JAM.call(restrictionFragments.sort, restrictionFragments, [restrictionFragmentSorter], JAM.policy.p23);
  openWindow("Restriction Digest");
  openPre();
  i$$11 = 0;
  var v548 = restrictionFragments.length;
  var v290 = i$$11 < v548;
  for(;v290;) {
    var v287 = restrictionFragments[i$$11];
    JAM.call(v287.correctPositions, v287, [], JAM.policy.p13);
    var v288 = restrictionFragments[i$$11];
    var v917 = theDocument.forms;
    var v890 = v917[0];
    var v853 = v890.elements;
    var v798 = v853[4];
    var v701 = v798.options;
    var v918 = theDocument.forms;
    var v891 = v918[0];
    var v854 = v891.elements;
    var v799 = v854[4];
    var v702 = v799.selectedIndex;
    var v549 = v701[v702];
    var v289 = v549.value;
    JAM.call(v288.writeFragment, v288, [v289], JAM.policy.p23);
    i$$11 = i$$11 + 1;
    var v550 = restrictionFragments.length;
    v290 = i$$11 < v550
  }
  closePre();
  closeWindow();

  JAM.stopProfile('compute');
  return true
}
function digest(arrayOfRestrictionFragments, enzyme) {
  var v291 = enzyme == "";
  if(v291) {
    return arrayOfRestrictionFragments
  }
  var newFragments = new Array;
  var positions = new Array;
  var matchPosition$$1 = 0;
  var v292 = JAM.call(enzyme.match, enzyme, [/\/.+\//], JAM.policy.p13);
  var matchExp$$2 = JAM.call(v292.toString, v292, [], JAM.policy.p13);
  matchExp$$2 = JAM.call(matchExp$$2.replace, matchExp$$2, [/\//g, ""], JAM.policy.p13);
  matchExp$$2 = new RegExp(matchExp$$2, "gi");
  var v703 = JAM.call(enzyme.match, enzyme, [/\)\D*\d+/], JAM.policy.p13);
  var v551 = JAM.call(v703.toString, v703, [], JAM.policy.p13);
  var v293 = JAM.call(v551.replace, v551, [/\)\D*/, ""], JAM.policy.p13);
  var cutDistance$$1 = parseInt(v293);
  var v552 = JAM.call(enzyme.match, enzyme, [/\([^\(]+\)/], JAM.policy.p13);
  var v294 = JAM.call(v552.toString, v552, [], JAM.policy.p13);
  var enzymeName = JAM.call(v294.replace, v294, [/\(|\)/g, ""], JAM.policy.p13);
  var matchArray$$2;
  var wasCut = false;
  var restrictionFragmentOne;
  var restrictionFragmentTwo;
  var previousCutPosition;
  var previousEnzyme;
  var previousStartPosition;
  var startRestrictionFragment;
  var lookAhead$$1 = 50;
  var lowerLimit$$1;
  var upperLimit$$1;
  var shiftValue$$1;
  var i$$12 = 0;
  var v553 = arrayOfRestrictionFragments.length;
  var v337 = i$$12 < v553;
  for(;v337;) {
    var v704 = arrayOfRestrictionFragments[i$$12];
    var v554 = v704.topology;
    var v305 = v554 == "circular";
    if(v305) {
      var v705 = arrayOfRestrictionFragments[i$$12];
      var v555 = v705.sequence;
      var v295 = JAM.call(v555.substring, v555, [0, lookAhead$$1], JAM.policy.p13);
      shiftValue$$1 = v295.length;
      var v800 = arrayOfRestrictionFragments[i$$12];
      var v706 = v800.sequence;
      var v892 = arrayOfRestrictionFragments[i$$12];
      var v855 = v892.sequence;
      var v801 = v855.length;
      var v707 = v801 - lookAhead$$1;
      var v856 = arrayOfRestrictionFragments[i$$12];
      var v802 = v856.sequence;
      var v708 = v802.length;
      var v556 = JAM.call(v706.substring, v706, [v707, v708], JAM.policy.p24);
      var v709 = arrayOfRestrictionFragments[i$$12];
      var v557 = v709.sequence;
      var v296 = v556 + v557;
      var v710 = arrayOfRestrictionFragments[i$$12];
      var v558 = v710.sequence;
      var v297 = JAM.call(v558.substring, v558, [0, lookAhead$$1], JAM.policy.p13);
      var extendedSequence = v296 + v297;
      lowerLimit$$1 = 0 + shiftValue$$1;
      var v711 = arrayOfRestrictionFragments[i$$12];
      var v559 = v711.sequence;
      var v298 = v559.length;
      upperLimit$$1 = v298 + shiftValue$$1;
      var v302 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [extendedSequence], JAM.policy.p23);
      for(;v302;) {
        matchPosition$$1 = matchExp$$2.lastIndex;
        matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
        var v560 = matchPosition$$1 >= lowerLimit$$1;
        if(v560) {
          v560 = matchPosition$$1 < upperLimit$$1
        }
        var v300 = v560;
        if(v300) {
          var v299 = matchPosition$$1 - shiftValue$$1;
          JAM.call(positions.push, positions, [v299], JAM.policy.p13);
          wasCut = true
        }
        var v561 = matchExp$$2.lastIndex;
        var v712 = RegExp.lastMatch;
        var v562 = v712.length;
        var v301 = v561 - v562;
        matchExp$$2.lastIndex = v301 + 1;
        v302 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [extendedSequence], JAM.policy.p23)
      }
    }else {
      var v713 = arrayOfRestrictionFragments[i$$12];
      var v563 = v713.sequence;
      var v304 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [v563], JAM.policy.p23);
      for(;v304;) {
        matchPosition$$1 = matchExp$$2.lastIndex;
        matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
        JAM.call(positions.push, positions, [matchPosition$$1], JAM.policy.p13);
        wasCut = true;
        var v564 = matchExp$$2.lastIndex;
        var v714 = RegExp.lastMatch;
        var v565 = v714.length;
        var v303 = v564 - v565;
        matchExp$$2.lastIndex = v303 + 1;
        var v715 = arrayOfRestrictionFragments[i$$12];
        var v566 = v715.sequence;
        v304 = matchArray$$2 = JAM.call(matchExp$$2.exec, matchExp$$2, [v566], JAM.policy.p23)
      }
    }
    var v336 = !wasCut;
    if(v336) {
      var v306 = arrayOfRestrictionFragments[i$$12];
      JAM.call(newFragments.push, newFragments, [v306], JAM.policy.p23)
    }else {
      wasCut = false;
      previousCutPosition = 0;
      var v307 = arrayOfRestrictionFragments[i$$12];
      previousEnzyme = v307.startEnzyme;
      var v308 = arrayOfRestrictionFragments[i$$12];
      previousStartPosition = v308.start;
      var j$$10 = 0;
      var v567 = positions.length;
      var v335 = j$$10 < v567;
      for(;v335;) {
        var v716 = arrayOfRestrictionFragments[i$$12];
        var v568 = v716.topology;
        var v318 = v568 == "circular";
        if(v318) {
          var v309 = arrayOfRestrictionFragments[i$$12];
          v309.topology = "linear";
          var v569 = arrayOfRestrictionFragments[i$$12];
          var v310 = v569.sourceName;
          var v717 = arrayOfRestrictionFragments[i$$12];
          var v570 = v717.sequence;
          var v571 = positions[j$$10];
          var v311 = JAM.call(v570.substring, v570, [previousCutPosition, v571], JAM.policy.p24);
          var v718 = previousStartPosition;
          var v893 = arrayOfRestrictionFragments[i$$12];
          var v857 = v893.sequence;
          var v858 = positions[j$$10];
          var v803 = JAM.call(v857.substring, v857, [previousCutPosition, v858], JAM.policy.p24);
          var v719 = v803.length;
          var v572 = v718 + v719;
          var v312 = v572 - 1;
          var v573 = arrayOfRestrictionFragments[i$$12];
          var v313 = v573.originalLength;
          startRestrictionFragment = new RestrictionFragment("linear", v310, v311, previousStartPosition, v312, previousEnzyme, enzymeName, v313)
        }else {
          var v574 = arrayOfRestrictionFragments[i$$12];
          var v314 = v574.sourceName;
          var v720 = arrayOfRestrictionFragments[i$$12];
          var v575 = v720.sequence;
          var v576 = positions[j$$10];
          var v315 = JAM.call(v575.substring, v575, [previousCutPosition, v576], JAM.policy.p24);
          var v721 = previousStartPosition;
          var v894 = arrayOfRestrictionFragments[i$$12];
          var v859 = v894.sequence;
          var v860 = positions[j$$10];
          var v804 = JAM.call(v859.substring, v859, [previousCutPosition, v860], JAM.policy.p24);
          var v722 = v804.length;
          var v577 = v721 + v722;
          var v316 = v577 - 1;
          var v578 = arrayOfRestrictionFragments[i$$12];
          var v317 = v578.originalLength;
          restrictionFragmentOne = new RestrictionFragment("linear", v314, v315, previousStartPosition, v316, previousEnzyme, enzymeName, v317);
          JAM.call(newFragments.push, newFragments, [restrictionFragmentOne], JAM.policy.p23)
        }
        var v723 = positions.length;
        var v579 = v723 - 1;
        var v332 = j$$10 == v579;
        if(v332) {
          var v331 = startRestrictionFragment == null;
          if(v331) {
            var v580 = arrayOfRestrictionFragments[i$$12];
            var v319 = v580.sourceName;
            var v724 = arrayOfRestrictionFragments[i$$12];
            var v581 = v724.sequence;
            var v582 = positions[j$$10];
            var v805 = arrayOfRestrictionFragments[i$$12];
            var v725 = v805.sequence;
            var v583 = v725.length;
            var v320 = JAM.call(v581.substring, v581, [v582, v583], JAM.policy.p24);
            var v584 = previousStartPosition;
            var v861 = arrayOfRestrictionFragments[i$$12];
            var v806 = v861.sequence;
            var v807 = positions[j$$10];
            var v726 = JAM.call(v806.substring, v806, [previousCutPosition, v807], JAM.policy.p24);
            var v585 = v726.length;
            var v321 = v584 + v585;
            var v586 = arrayOfRestrictionFragments[i$$12];
            var v322 = v586.stop;
            var v587 = arrayOfRestrictionFragments[i$$12];
            var v323 = v587.stopEnzyme;
            var v588 = arrayOfRestrictionFragments[i$$12];
            var v324 = v588.originalLength;
            restrictionFragmentTwo = new RestrictionFragment("linear", v319, v320, v321, v322, enzymeName, v323, v324);
            JAM.call(newFragments.push, newFragments, [restrictionFragmentTwo], JAM.policy.p23)
          }else {
            var v589 = arrayOfRestrictionFragments[i$$12];
            var v325 = v589.sourceName;
            var v808 = arrayOfRestrictionFragments[i$$12];
            var v727 = v808.sequence;
            var v728 = positions[j$$10];
            var v862 = arrayOfRestrictionFragments[i$$12];
            var v809 = v862.sequence;
            var v729 = v809.length;
            var v590 = JAM.call(v727.substring, v727, [v728, v729], JAM.policy.p24);
            var v591 = startRestrictionFragment.sequence;
            var v326 = v590 + v591;
            var v592 = previousStartPosition;
            var v863 = arrayOfRestrictionFragments[i$$12];
            var v810 = v863.sequence;
            var v811 = positions[j$$10];
            var v730 = JAM.call(v810.substring, v810, [previousCutPosition, v811], JAM.policy.p24);
            var v593 = v730.length;
            var v327 = v592 + v593;
            var v328 = startRestrictionFragment.stop;
            var v329 = startRestrictionFragment.stopEnzyme;
            var v594 = arrayOfRestrictionFragments[i$$12];
            var v330 = v594.originalLength;
            restrictionFragmentTwo = new RestrictionFragment("linear", v325, v326, v327, v328, enzymeName, v329, v330);
            JAM.call(newFragments.push, newFragments, [restrictionFragmentTwo], JAM.policy.p23)
          }
        }
        previousCutPosition = positions[j$$10];
        previousEnzyme = enzymeName;
        var v595 = arrayOfRestrictionFragments[i$$12];
        var v333 = v595.start;
        var v334 = positions[j$$10];
        previousStartPosition = v333 + v334;
        j$$10 = j$$10 + 1;
        var v596 = positions.length;
        v335 = j$$10 < v596
      }
    }
    positions = new Array;
    startRestrictionFragment = null;
    i$$12 = i$$12 + 1;
    var v597 = arrayOfRestrictionFragments.length;
    v337 = i$$12 < v597
  }
  return newFragments
}
function restrictionFragmentSorter(a, b) {
  var v731 = a.sequence;
  var v598 = v731.length;
  var v732 = b.sequence;
  var v599 = v732.length;
  var v338 = v598 < v599;
  if(v338) {
    return 1
  }
  var v733 = a.sequence;
  var v600 = v733.length;
  var v734 = b.sequence;
  var v601 = v734.length;
  var v339 = v600 > v601;
  if(v339) {
    return-1
  }
  var v735 = a.sequence;
  var v602 = v735.length;
  var v736 = b.sequence;
  var v603 = v736.length;
  var v342 = v602 == v603;
  if(v342) {
    var v604 = a.start;
    var v605 = b.start;
    var v340 = v604 < v605;
    if(v340) {
      return-1
    }
    var v606 = a.start;
    var v607 = b.start;
    var v341 = v606 > v607;
    if(v341) {
      return 1
    }else {
      return 0
    }
  }
  return
}
function writeFragment(topology$$1) {
  var v608 = this.topology;
  var v347 = v608 == "linear";
  if(v347) {
    var v343 = outputWindow.document;
    var v990 = this.sequence;
    var v987 = v990.length;
    var v982 = "&gt;" + v987;
    var v977 = v982 + " bp linear fragment from ";
    var v972 = v977 + topology$$1;
    var v963 = v972 + " parent ";
    var v964 = this.sourceName;
    var v955 = v963 + v964;
    var v944 = v955 + ", base ";
    var v945 = this.start;
    var v933 = v944 + v945;
    var v919 = v933 + " to base ";
    var v920 = this.stop;
    var v895 = v919 + v920;
    var v864 = v895 + " (";
    var v865 = this.startEnzyme;
    var v812 = v864 + v865;
    var v737 = v812 + " - ";
    var v738 = this.stopEnzyme;
    var v609 = v737 + v738;
    var v344 = v609 + ").\n";
    JAM.call(v343.write, v343, [v344], JAM.policy.p23)
  }else {
    var v345 = outputWindow.document;
    var v934 = this.sequence;
    var v921 = v934.length;
    var v896 = "&gt;" + v921;
    var v866 = v896 + " bp circular molecule from ";
    var v813 = v866 + topology$$1;
    var v739 = v813 + " parent ";
    var v740 = this.sourceName;
    var v610 = v739 + v740;
    var v346 = v610 + ".\n";
    JAM.call(v345.write, v345, [v346], JAM.policy.p23)
  }
  var v348 = outputWindow.document;
  var v741 = this.sequence;
  var v611 = addReturns(v741);
  var v349 = v611 + "\n\n";
  JAM.call(v348.write, v348, [v349], JAM.policy.p23);
  return
}
function correctPositions() {
  var v612 = this.start;
  var v613 = this.originalLength;
  var v352 = v612 > v613;
  if(v352) {
    var v350 = this.start;
    var v351 = this.originalLength;
    this.start = v350 - v351
  }
  var v614 = this.stop;
  var v615 = this.originalLength;
  var v355 = v614 > v615;
  if(v355) {
    var v353 = this.stop;
    var v354 = this.originalLength;
    this.stop = v353 - v354
  }
  var v616 = this.stop;
  var v356 = v616 == 0;
  if(v356) {
    this.stop = this.originalLength
  }
  return
}
function RestrictionFragment(topology$$2, sourceName, sequence$$18, start$$4, stop, startEnzyme, stopEnzyme, originalLength$$1) {
  this.topology = topology$$2;
  this.sourceName = sourceName;
  this.sequence = sequence$$18;
  this.start = start$$4;
  this.stop = stop;
  this.startEnzyme = startEnzyme;
  this.stopEnzyme = stopEnzyme;
  this.originalLength = originalLength$$1;
  return
}
new RestrictionFragment("", "", "", 0, 0, "", "", 0);
var v357 = RestrictionFragment.prototype;
v357.writeFragment = writeFragment;
var v358 = RestrictionFragment.prototype;
v358.correctPositions = correctPositions;
JAM.set(document, "onload", v2);
var v359 = JAM.call(document.getElementById, document, ["submitbtn"], JAM.policy.p14);
JAM.set(v359, "onclick", v3);
var v360 = JAM.call(document.getElementById, document, ["clearbtn"], JAM.policy.p14);
JAM.set(v360, "onclick", v4);

JAM.stopProfile('load');
